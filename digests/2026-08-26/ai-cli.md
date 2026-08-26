# AI CLI 工具社区动态日报 2026-08-26

> 生成时间: 2026-08-26 00:00 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告（2026-08-26）

> 数据基于 Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、OpenCode、Pi、Qwen Code、CodeWhale、DeepSeek Harness 九款工具的当日社区动态日报。

---

## 1. 生态全景

AI CLI 工具已从"单点交互式助手"全面转向**多端（CLI/IDE/桌面 App）+ 多代理（subagent/后台任务）+ 多模型（Provider 中立）**的代理式开发平台。各工具迭代节奏普遍以"天"为单位（Claude Code 双版本、Codex 三连 alpha、Gemini CLI 三版本同日发布），但社区反馈的重心已从"模型能力"转移到**工程化短板**：Windows 平台兼容性、MCP 企业级安全、TUI 基础交互、上下文/令牌经济性，以及无人值守场景的可观测性。当前行业正处于"模型能力领先、工程交付追赶"的阶段——谁先补齐稳定性与治理能力，谁就能在下一阶段建立壁垒。

---

## 2. 各工具活跃度对比

> 注：Issues/PR 数为各日报精选的热点条目数（Qwen Code 标注全量更新数）；"未报告/未包含"表示日报数据源未覆盖该栏目，不代表仓库未启用；DeepSeek Harness 过去 24 小时无活动，故标注 N/A，不判定为不活跃。

| 工具 | Issues | PRs | Discussions | Release 情况 | 当日活跃特征 |
|---|---|---|---|---|---|
| **Claude Code** | 10 条热点（#84352 达 155 评论，#50246 获 199 👍） | 1 条更新 | 未报告 | v2.1.245 / v2.1.246（2 个正式版） | 稳定双版本节奏，讨论深度高 |
| **OpenAI Codex** | 10 条热点（#11023 Linux 桌面 953 👍 / 209 评论） | 10 个重点 PR | 8 条（Ideas/General/Q&A/Show and tell） | rust-v0.150.0-alpha.9 /.10 /.11（3 个预发布） | 预发布密集迭代，企业 MCP 安全成 PR 主线 |
| **Gemini CLI** | 10 条热点（多个 P1 bug） | 10 个重点 PR | 数据源未包含 | v0.57.0 + v0.58.0-preview.0 + nightly | Agent 稳定性缺陷集中，安全修复密集 |
| **GitHub Copilot CLI** | 10 条热点 | **0 条** | 未报告 | v1.0.81-10（插件面板全量开放） | 新版本引发两个回归（#4605/#4604），项目侧 PR 静默 |
| **OpenCode** | 10 条热点（#44300 tools 报错多帖重复） | 10 个重点 PR | 数据源未包含 | v1.18.23（Cloudflare AI Gateway 修复） | 单一故障（Ox Alpha Free）引发多重复 Issue |
| **Pi** | 10 条热点（Windows 调查帖 49 评论） | 10 个重点 PR | 1 条（Cursor Provider 互通） | **无**（0.84.3 回归修复中） | 修复密度高，无新版本但 PR 活跃 |
| **Qwen Code** | 10 条热点（当日 **50+ 条**总更新） | 10 个重点 PR（当日 **50+ 条**总更新） | 未提供 | v0.22.0-nightly | 全行业最活跃的 Issue/PR 流量 |
| **CodeWhale** | 10 条热点 | 10 个重点 PR | 未报告 | 无（v0.9.12 集成分支 72 commits 收尾） | 外部监督三件套全部合并，结构性强 |
| **DeepSeek Harness** | N/A（24h 无活动） | N/A | N/A | 无 | — |

---

## 3. 共同关注的功能方向

### 3.1 Windows 平台稳定性：全线共同短板
几乎所有工具当日都出现 Windows 特定问题，是覆盖面最广的共性痛点：

- **Claude Code**：MSIX 缺 CodeIntegrity.cat 导致 0x3CFC 崩溃（#85901）、AppX 文件锁致更新失败（#73694）、窗口置顶（#85891）
- **OpenAI Codex**：MCP transport 解析失败（#40715）、侧边栏丢失本地线程（#30385）、沙箱启动失败（#39841）
- **Copilot CLI**：worktree 归档 os error 32，进程树占用文件（#4593）
- **OpenCode**：子进程执行时控制台窗口闪烁（#42440）
- **Pi**：官方发起 Windows 使用调查（#7547，49 评论），收集运行方式碎片化问题
- **Qwen Code**：`O_NOFOLLOW` 缺失导致符号链接/TOCTOU 安全加固在 Windows 上形同虚设（#8227）
- **CodeWhale**：verbatim 路径在 POSIX 分词下被破坏，CI 失败修复（#5610）

### 3.2 MCP 从"能连"走向"企业级安全与权限隔离"
- **OpenAI Codex**：MCP OAuth 企业 IdP 身份解析（#40739）+ ID-JAG 交换（#40722）+ attachment 级权限独立 profile（#40728）
- **Gemini CLI**：防 MCP OAuth 元数据 SSRF（#29081）、扩展环境变更需确认并净化可篡改变量（#28863）
- **Copilot CLI**：MCP 配置"伪生效"（#4542）、用户配置的官方 MCP 服务丢失 Token 注入（#4604）、Google Workspace OAuth issuer 尾斜杠不匹配（#4606）
- **CodeWhale**：context inspector 新增 MCP server schema 的成本估算（#5611）
- **OpenCode**：测试环境与个人 MCP server 隔离（#44845）

### 3.3 上下文/令牌经济性：长会话成本治理
- **Claude Code**：autocompact 无法在上下文边界主动触发（#77509）
- **OpenAI Codex**：GPT-5.6 可选 1M 上下文支持（#31868，22 👍）
- **Gemini CLI**：AST 感知文件读取/搜索 EPIC（#22745）、原生 POSIX 工具链降低 Token 消耗（#19873）
- **Qwen Code**：SKILL.md 永久驻留不释放（#6762）、`/compress-fast` 结果不正确（#9309）
- **Pi**：压缩预算从固定 16384 改为随模型上下文窗口缩放（#8651）
- **CodeWhale**：工具目录总成本 + 每个内置工具 Token 估算（#5611）

### 3.4 Agent/子代理行为可预测性与可观测性
- **Gemini CLI**：MAX_TURNS 被误报为 GOAL 成功（#22323，P1）、Generalist agent 无限挂起（#21409，P1）
- **Qwen Code**：后台 agent 重复工作/提前完成/消息不可交互（#8097）、循环检测误报致无人值守轮次不可恢复（#9733）
- **OpenAI Codex**：陈旧 subagent 无法关闭（#25179）
- **Claude Code**：消息队列模式——不打断当前任务（#50246，199 👍，社区高赞）
- **CodeWhale**：过期 write-claims 级联锁死其他子代理（#5562）、Workflow Degraded 状态被折叠为 Completed（#5582）

### 3.5 配额与安全策略透明度
- **Claude Code**：CVP 已批准组织仍被 cyber safeguard 拦截（#84352，155 评论）、非活跃使用触发 usage limit（#61012）
- **OpenAI Codex**：5 小时滚动限制回归引发讨论（#40707），用户希望仅保留周限额
- **Copilot CLI**：企业策略导致模型灰置且管理入口无法开启（#4272）

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特点 |
|---|---|---|---|
| **Claude Code** | 企业安全合规（CVP）、规则系统（`.claude/rules/`）、hooks 治理 | 企业级开发者、组织合规团队 | 闭源 + 双端（CLI/VSCode）深耕，版本最稳；规则与策略层是核心壁垒 |
| **OpenAI Codex** | 多端全家桶（App/CLI/IDE）、MCP 企业认证、桌面端会话管理 | ChatGPT/OpenAI 生态重度用户、企业 MCP 场景 | Rust 原生化 + alpha 高频迭代；在 MCP OAuth/ID-JAG 安全协议上领先 |
| **Gemini CLI** | Google 生态（Cloud Workstations、A2A 协议）、扩展权限模型、Agent 语义正确性 | Google Cloud 开发者、A2A 联邦场景 | 安全加固（SSRF/凭据/硬编码）与 A2A server 并进；Agent 可靠性（MAX_TURNS 语义）仍是短板 |
| **GitHub Copilot CLI** | GitHub 生态深度绑定、插件面板（/plugin、/mcp、/skills）、Copilot 订阅延伸 | GitHub Copilot 订阅用户 | 依托 Copilot 企业链路，向 MCP + 技能生态开放；迭代节奏慢（当日 0 PR）但社区期待高（vi/vim 74 👍） |
| **OpenCode** | Provider 兼容性优先（Cloudflare/Cerebras/Together/Entra ID）、开源透明 | 多模型、自托管、第三方后端用户 | OpenAI 兼容协议快速适配，v2 大版本重构期，基础设施（自动更新/磁盘占用）问题突出 |
| **Pi** | 多后端 API 碎片化适配（Bedrock/OpenRouter/xAI）、编码代理扩展（coding-agent） | 技术极客、本地/多模态模型用户 | 小而美的独立开源；修复响应快，扩展生态已有 Cursor Provider 等互通创新 |
| **Qwen Code** | 多代理/工作流自动化、Web Shell 向完整开发环境演进、Kimi/小米等新 Provider | 通义生态 + 国内多云用户 | 迭代最激进（50+ PR/日）；Web 端（交互终端、artifact 分享、脏工作树 git）与 workflow 安全模型同步推进 |
| **CodeWhale** | 无人值守/外部监督（control socket + lifecycle outbox + /relaunch）、TUI 架构重构 | CI/自动化 harness、夜间任务的独立开发者 | Rust 实现，外部监督接口设计独树一帜；中文文档体系化（Tier-2 翻译）推进中 |

---

## 5. 社区热度与成熟度

**第一梯队：成熟度高、声量大**
- **Claude Code**：头部 issue 达 155 评论、功能请求 199 👍，讨论深度与治理议题（CVP、企业合规）明显偏向成熟期用户；双版本/日说明发布管道稳定。
- **OpenAI Codex**：Linux 桌面请求 953 👍 / 209 评论为全场最高，但该 issue 已关闭，反映团队有意控制跨平台范围；3 连 alpha 显示仍在快速内测。

**第二梯队：高迭代、问题密集**
- **Qwen Code**：当日 50+ Issue 与 50+ PR 更新，全行业最活跃，但 P0/P1 级缺陷（/review 上下文爆炸、会话锁死）也最多，处于"功能激进扩张、质量追赶"阶段。
- **Gemini CLI**：多个 P1 指向 Agent 核心可靠性（挂起、误报成功），安全 PR 密集（SSRF/凭证清理），属于"安全补课 + 稳定性攻坚"。
- **OpenCode**：单故障（Ox Alpha Free tools 报错）出现 4+ 重复 Issue，故障响应渠道混乱，但 PR 侧仍在快速推进 Provider 扩展。

**第三梯队：社区规模较小但特色鲜明**
- **Pi**：无新版本但 10 个 PR 密集合并，修复效率高；Windows 官方调查帖收集 49 条评论，社区参与度高。
- **CodeWhale**：外部监督三件套（#5592/#5593/#5594）在 24 小时内全部合并，工程执行力强；Issue 讨论量（3–16 评论）说明社区仍在早期培育期。
- **Copilot CLI**：用户呼声强（vi/vim 74 👍）但项目侧当日 0 PR，迭代节奏在九款中偏慢。
- **DeepSeek Harness**：24h 无活动，本期不做活跃度判定。

---

## 6. 值得关注的趋势信号

1. **Windows 是下一轮竞争的胜负手**：九款工具中七款当日存在 Windows 专门问题（打包、文件锁、沙箱、终端行为、安全加固失效）。对以 Windows 为主力开发环境的团队，当前任何工具都需要额外验证；对厂商而言，率先解决 Windows 体验是明确的差异化机会。

2. **MCP 正经历"企业安全深水区"**：OAuth/ID-JAG 交换、SSRF 防护、attachment 级权限隔离、Token 注入一致性是当日 Codex/Gemini/Copilot 三条线共同的主旋律。企业引入 MCP 生态前，应要求工具提供清晰的认证边界与权限审计能力，而非仅验证"能否连通"。

3. **Agent 正从"交互式助手"演化为"无人值守员工"**：Claude Code 的消息队列（#50246，199 👍）、CodeWhale 的 control socket/outbox/relaunch 三件套、Qwen Code 的 cron 任务可见性诉求（#5823）均指向同一方向——用户希望 agent 在后台独立推进，同时保留可暂停、可接管、可审计的控制权。**"可控的自主性"将成为下一代 CLI 的核心卖点。**

4. **上下文经济性成为硬指标**：从 Gemini 的 AST 感知读取、Pi 的压缩预算自适应、Qwen 的 SKILL.md 生命周期到 CodeWhale 的工具成本估算，各工具正从"能跑通"转向"算得清"。长会话、大代码库场景下，Token 消耗已直接影响用户付费意愿与留存。

5. **兼容层标准化尚未完成，多模型接入需预留适配成本**：OpenCode 的 Cloudflare 路由、Qwen Code 的 `/effort max` 锁死、Pi 的 Bedrock 图像嵌套与 OpenRouter reasoning 推导——"OpenAI 兼容"在实际落地中充满方言差异。选择多 Provider 架构的团队应把协议适配层视为持续性投入，而非一次性工作。

6. **可观测性与"诚实的失败"正在成为信任基础**：CodeWhale 修复 Degraded→Completed 状态折叠、Qwen Code 增加 review 执行级验证、Codex 的 rollout 追踪讨论（#40740）——社区不再满足于"任务完成"的结论，而是要求工具暴露中间状态、失败原因与证据链。对开发者而言，这意味着把 agent 纳入正式工程流程的前提是它具备可审计性。

---

*报告数据截至于 2026-08-26 各工具社区日报，部分仓库（DeepSeek Harness）因当日无动态未纳入深度比较。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截至 2026-08-26）

> 注：PR 按评论数排序（前 20 条）。因数据字段缺失，以下活跃度以排序位次 + 关联 Issue 声量为依据；所有 PR 当前状态均为 `OPEN`。

---

## 1. 热门 Skills 排行

**① #1298 fix(skill-creator)：run_eval.py 0% recall 评测失真修复** ⭐ 热度最高
- 功能：修复 `run_eval.py` 对所有描述一律报 `recall=0%` 的严重 bug，并解决 Windows 流读取、触发检测、并行 worker 问题。同主题还有 #1099、#1050 两个 Windows 兼容修复 PR。
- 社区焦点：直接回应 Issue #556（12 条评论、7 👍），说明评测误报已成为 skill-creator 工具链头号痛点，大量优化工作正在"对着噪声调参"。
- 状态：open（2026-06-23 更新）
- 链接：https://github.com/anthropics/skills/pull/1298

**② #514 document-typography 文档排版质检技能**
- 功能：预防 AI 生成文档的典型排版问题——孤词换行（1-6 词溢出到下一行）、寡行段落（标题滞留页底）、编号错位。
- 社区焦点：直击"每个 Claude 生成的文档都会中招"的普适问题，用户很少主动要求排版质量，因此靠技能兜底。
- 状态：open（2026-03-13 更新）
- 链接：https://github.com/anthropics/skills/pull/514

**③ #723 testing-patterns 测试模式技能**
- 功能：覆盖完整测试栈——Testing Trophy 理念、单元测试（AAA 模式）、React 组件测试（Testing Library）、E2E 与"不该测什么"。
- 社区焦点：社区对"可复用测试方法论"需求强烈，该技能试图将散落的测试最佳实践固化进 Agent 工作流。
- 状态：open（2026-04-21 更新）
- 链接：https://github.com/anthropics/skills/pull/723

**④ #568 ServiceNow 企业平台技能**
- 功能：覆盖 ITSM、ITOM、ITAM/SAM、FSM、SPM、Vulnerability Response、IntegrationHub 等全模块的 ServiceNow 平台助手。
- 社区焦点：企业服务管理场景的大而全尝试，评论活跃且持续更新至 2026-08-12，显示企业级需求旺盛。
- 状态：open（2026-08-12 更新）
- 链接：https://github.com/anthropics/skills/pull/568

**⑤ #1628 Hivemind 零成本多智能体编排技能**
- 功能：让 Claude Code 将机械性工作委托给跑在免费模型上的 headless opencode worker，Claude 只做规划、审查与合并。
- 社区焦点：核心理念是"昂贵模型的上下文才是稀缺资源，而非智能"——讨论热度集中在如何用廉价 worker 保护主上下文窗口。
- 状态：open（2026-08-24 更新，新近活跃）
- 链接：https://github.com/anthropics/skills/pull/1628

**⑥ #1367 self-audit 交付前质量门禁技能（v1.3.0）**
- 功能：先做机械性文件校验（确认所有声明的产物存在），再做按"损害严重度"排序的四维推理审查，适用于任何技术栈。
- 社区焦点：与 Issue #1385（推理质量门禁流水线提案）形成呼应，社区正酝酿"交付前自检"这一元能力方向。
- 状态：open（2026-07-02 更新）
- 链接：https://github.com/anthropics/skills/pull/1367

**⑦ #486 ODT 技能（OpenDocument 创建/模板填充/转 HTML）**
- 功能：覆盖 .odt/.ods 的创建、填充、读取与转换，补充文档格式生态中 LibreOffice/ISO 标准这一块空白。
- 社区焦点：与 pdf、docx 技能形成互补，社区对"非主流但常用的开放文档格式"支持有持续诉求。
- 状态：open（2026-04-14 更新）
- 链接：https://github.com/anthropics/skills/pull/486

**⑧ #525 pyxel 复古游戏开发技能**
- 功能：对接 pyxel-mcp 服务器，覆盖"编写 → 运行截图 → 检查 → 迭代"的 retro/pixel-art/8-bit 游戏开发闭环。
- 社区焦点：创意类技能的典型代表，展示了 Skill + MCP 组合的新玩法，社区讨论积极。
- 状态：open（2026-07-15 更新）
- 链接：https://github.com/anthropics/skills/pull/525

---

## 2. 社区需求趋势

**① 技能创作工具链的可信度（最迫切）**
- Issue #556：`run_eval.py` 评测 0% 触发率，优化循环在噪声上运行（12 评论、7 👍）；Issue #202 批评 skill-creator"像开发者文档而非可执行技能"。
- 链接：https://github.com/anthropics/skills/issues/556

**② 安全与信任边界治理**
- Issue #492（43 条评论，全仓最高）：社区技能被分发在 `anthropic/` 命名空间下，构成信任边界滥用——用户可能给冒充官方的技能授予过高权限。
- 链接：https://github.com/anthropics/skills/issues/492

**③ 组织级分享与企业化**
- Issue #228（8 👍）：目前团队共享技能只能靠手动传 .skill 文件，社区呼吁组织级技能库/分享链接；Issue #189（9 👍）指出 document-skills 与 example-skills 插件内容重复，浪费上下文。
- 链接：https://github.com/anthropics/skills/issues/228

**④ 上下文窗口效率**
- Issue #1487：`claude-api` 技能一次注入约 156k token，单次调用即耗尽上下文窗口；配合 #189 的重复安装问题，"技能体积失控"成为新痛点。
- 链接：https://github.com/anthropics/skills/issues/1487

**⑤ 质量保障元能力**
- Issue #1385 提出"前置校准 → 对抗性审查 → 交付验证"三闸门流水线；Issue #412（已关）曾提议 agent-governance 安全模式——社区开始要求"评价/约束 Agent 输出"的元技能。
- 链接：https://github.com/anthropics/skills/issues/1385

**⑥ 平台集成与 MCP 化**
- Issue #29（AWS Bedrock 使用）、#16（将 Skills 暴露为 MCP）、#1175（SharePoint Online 安全/上下文担忧）——企业用户渴望在多平台、多协议下复用技能。
- 链接：https://github.com/anthropics/skills/issues/16

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃、更新频繁或直击已确认 bug，预计近期落地：

- **#1298 skill-creator 评测修复** — 关联 43 评论级 Issue #492 之外最热的 #556，修复阻塞性 bug，合并优先级最高。https://github.com/anthropics/skills/pull/1298
- **#568 ServiceNow 技能** — 企业级大而全平台技能，更新至 2026-08-12，处于持续打磨中。https://github.com/anthropics/skills/pull/568
- **#1628 Hivemind 多智能体编排** — 2026-08-24 仍在更新，切中上下文成本痛点，方向新颖。https://github.com/anthropics/skills/pull/1628
- **#723 testing-patterns** — 测试方法论空白已久，功能完整度高。https://github.com/anthropics/skills/pull/723
- **#514 document-typography** — 普适性极强，修复 AI 文档通病。https://github.com/anthropics/skills/pull/514
- **#1367 self-audit 质量门禁** — 与 #1385 提议绑定，具备生态杠杆效应。https://github.com/anthropics/skills/pull/1367
- **#83 skill-quality-analyzer + skill-security-analyzer** — 直接回应 #492 的安全与质量担忧，属于"治理类"元技能。https://github.com/anthropics/skills/pull/83
- **#486 ODT 技能** — 补全文档格式矩阵，与现有 pdf/docx 技能协同。https://github.com/anthropics/skills/pull/486

---

## 4. Skills 生态洞察

**社区当前最集中的诉求是：让 Skills 本身更可靠、更可信、更省上下文——一边修复 skill-creator 评测失真与 Windows 兼容性 bug，一边通过命名空间治理、质量/安全审计技能和 token 体积控制来构建健康的技能分发生态；与此同时，企业平台类（ServiceNow、SAP）与多智能体编排（Hivemind）正成为新兴增长方向。**

---

# Claude Code 社区动态日报 — 2026-08-26

数据来源：github.com/anthropics/claude-code

## 1. 今日速览

- 过去 24 小时发布两个小版本：v2.1.246 改进了 Bash allow 规则校验与 `/permissions` 的 Auto mode 管理；v2.1.245 修复 Linux 发行版 glibc 2.44 启动崩溃。
- 社区热度集中在 #84352（CVP 已批准组织仍遭 cyber safeguard 拦截，155 评论）和 #50246（消息队列模式，199 👍），反映企业安全策略与交互打断两大痛点。
- PR 侧仅 1 条更新：`validate-agent.sh` 修复 `set -e` 导致的“首个警告即退出”和误报问题。

## 2. 版本发布

### v2.1.246

- Bash allow 规则若在子命令前使用通配符（如 `Bash(git * main)`），启动时会给出警告，因为这类规则也可能匹配子命令前插入的选项。
- `/permissions` 新增 Auto mode 标签页，可查看和编辑 auto mode classifier 规则。
- 另有一条变更原文被截断（“Added the tu...”），未能完整展示。

### v2.1.245

- 修复在 glibc 2.44 的 Linux 发行版（例如 Arch Linux、CachyOS、Fedora Rawhide）上启动崩溃的问题。

## 3. 社区热点 Issues

以下 10 条来自过去 24 小时内更新、且评论最多/关注度最高的问题：

1. **[#84352] [OPEN] CVP 已批准组织仍收到 cyber safeguard 拦截**  
   <https://github.com/anthropics/claude-code/issues/84352>  
   - 155 评论 / 24 👍  
   - Claude.ai 组织此前已通过 Cyber Verification Program 审批，现在又频繁触发 cyber safeguard 拦截，且审批门户显示 “Under review”。企业安全合规状态不透明，社区讨论非常活跃。

2. **[#50246] [CLOSED] 消息队列模式：排队消息而不是打断当前任务**  
   <https://github.com/anthropics/claude-code/issues/50246>  
   - 68 评论 / 199 👍  
   - 社区高赞需求：Claude 正在工作时，临时想到的后续指令不应立刻打断任务，而应进入队列。说明“中断成本”是高频痛点。

3. **[#65833] [OPEN] v2.1.150 后滚轮不再滚动对话，反而发送方向键**  
   <https://github.com/anthropics/claude-code/issues/65833>  
   - 41 评论 / 99 👍  
   - 影响 WSL 平台 TUI 用户的基础操作，是典型的交互回归。

4. **[#85891] [OPEN] Windows 11 上 Claude Desktop 窗口始终置顶，无设置可关闭**  
   <https://github.com/anthropics/claude-code/issues/85891>  
   - 24 评论 / 36 👍  
   - Windows 端始终置顶问题与 macOS 的 #66516 类似，影响多窗口工作流。

5. **[#61012] [OPEN] Pro 计划在非活跃使用时反复触发 usage limit**  
   <https://github.com/anthropics/claude-code/issues/61012>  
   - 18 评论 / 8 👍  
   - 用户未主动使用却连续达到用量上限，Windows 平台，直接影响付费体验。

6. **[#87804] [OPEN] 为 `.claude/rules/` 增加 prompt-topic 触发条件**  
   <https://github.com/anthropics/claude-code/issues/87804>  
   - 13 评论  
   - 目前 `paths:` 只能按文件路径加载规则，无法按对话主题触发；这是规则系统的重要扩展方向。

7. **[#85901] [CLOSED] MSIX 缺少 CodeIntegrity.cat，导致 AppX 容器 0x3CFC 崩溃**  
   <https://github.com/anthropics/claude-code/issues/85901>  
   - 11 评论 / 1 👍  
   - `vk_swiftshader.dll` 被 Code Integrity 拦截，甚至可能破坏包数据；Windows 打包存在严重问题。

8. **[#73694] [OPEN] AppX 更新失败：cowork-svc.exe 持有文件锁（0x80073d02）**  
   <https://github.com/anthropics/claude-code/issues/73694>  
   - 6 评论 / 2 👍  
   - CoworkVMService 锁住包文件，导致更新/重启失败，Windows 用户更新路径不稳定。

9. **[#74349] [OPEN] VSCode 扩展无法显示当前活跃模型**  
   <https://github.com/anthropics/claude-code/issues/74349>  
   - 5 评论 / 4 👍  
   - CLI 有 `statusLine` 和 `/status`，但原生 VSCode 扩展缺少同样的模型可见性，IDE 集成与 CLI 存在体验落差。

10. **[#89663] [OPEN] 内置 Node v26.3.0 下流式请求大量 ECONNRESET**  
    <https://github.com/anthropics/claude-code/issues/89663>  
    - 今天新提交，0 评论但值得关注  
    - Windows 11 上 CLI 与 VSCode 扩展同时复现，浏览器端 claude.ai 正常，疑似打包运行时或网络链路问题。

## 4. 重要 PR 进展

本期数据仅包含 1 条 PR 更新：

- **[#89404] [OPEN] validate-agent.sh: don't abort at the first warning and stop false-flagging valid agents**  
  <https://github.com/anthropics/claude-code/pull/89404>  
  - 作者：bcherny  
  - 修复公开 issue #83803：plugin-dev skill 的 `validate-agent.sh` 在 `set -euo pipefail` 下，`((warning_count++))` / `((error_count++))` 会让脚本在首个警告处直接退出；同时存在把合法 agent 文件误判为非法的问题。该 PR 同时解决“首个警告即中止”和“对合法 agent 误报”两个问题。

## 5. 功能需求趋势

从本期 Issues 和 PR 中可以提炼出以下社区关注方向：

- **TUI 交互体验**：消息队列模式（#50246）、文本选择（#80734）、滚轮滚动回归（#65833）、SGR mouse 残留（#79015）、Ctrl-Z 无效（#89662）。终端基础交互仍是最大痛点。
- **规则与自动化**：`.claude/rules/` 主题触发（#87804）、PreToolUse hooks 对 Task 子代理生效（#88441）、CLAUDE.md 禁止性指令需要对抗“渐进式漂移”（#89464）。
- **Windows 打包可靠性**：MSIX CodeIntegrity 崩溃（#85901）、AppX 文件锁（#73694）、servicing 静默杀掉后台 agent（#82277）、窗口置顶（#85891）。Windows 发布链路问题集中爆发。
- **配额与安全策略透明度**：CVP 审批后仍被拦（#84352）、未使用却触发 usage limit（#61012）、公共领域数据被 Usage Policy 误判（#89354）。用户希望策略判定更可解释、可追踪。
- **IDE 集成与状态可见性**：VSCode 扩展显示当前模型（#74349）、自定义 `statusLine` 渲染到扩展面板（#77829）。
- **性能与稳定性**：ugrep 正则导致 20+ GB 内存占用（#78027）、流式请求 ECONNRESET（#89663）、autocompact 无法在上下文边界主动触发（#77509）。

## 6. 开发者关注点

- **TUI 回归影响日常使用**：滚轮变方向键、SGR mouse 转义序列污染 shell、Escape 被 overlay 吞掉、reduced motion 下计时器冻结、输入区无法选中文本——基础交互稳定性是社区最集中的抱怨来源。
- **Windows 用户承担了较多稳定性成本**：MSIX 缺少签名目录、Cowork 服务文件锁、后台 agent 被静默杀死、更新失败甚至数据被销毁，Windows 端的打包与更新链路急需加固。
- **自主/后台任务的上下文处理不透明**：Task 子代理不触发用户级 `PreToolUse` hooks、autocompact 不会主动在上下文边界触发、没有消息队列模式，导致无人值守场景不可预测。
- **规则约束执行不可靠**：CLAUDE.md 中“永远不要自己做 X”的指令会被小步渐进式行为绕过；CVP/Usage Policy 误报让已审批组织也无法稳定使用。
- **工作区资产安全**：worktree 自动清理会删除包含未提交/未推送内容的 `agent-*` 工作区（#74719），叠加 MSIX 崩溃，开发者对数据丢失风险非常敏感。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-08-26）

## 今日速览

过去 24 小时 Codex 发布了 3 个 `rust-v0.150.0-alpha` 迭代版本（.9/.10/.11），开发节奏密集。社区讨论集中在 Linux 桌面客户端需求、Windows 平台稳定性（沙箱/MCP/崩溃）以及定时任务自动暂停的异常行为。PR 侧则以 MCP OAuth 企业级身份解析、权限模型加固和 Bazel 测试基建为主，安全与规模化方向明显。

## 版本发布

过去 24 小时共发布 3 个预发布版本：

- [`rust-v0.150.0-alpha.9`](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.9)：Release 0.150.0-alpha.9
- [`rust-v0.150.0-alpha.10`](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.10)：Release 0.150.0-alpha.10
- [`rust-v0.150.0-alpha.11`](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.11)：Release 0.150.0-alpha.11

当前仅预告 Release 信息，未附带详细变更日志；三个 alpha 连续发布，建议关注后续 release notes 的差异说明。

## 社区热点 Issues

以下为过去 24 小时内更新频繁、社区反应强烈的 10 个 Issue：

1. [Issue #11023：Codex desktop app for Linux](https://github.com/openai/codex/issues/11023) · **CLOSED** · 👍 953 · 💬 209
   一个长期高热度需求：用户希望官方提供 Linux 桌面 App。作者因 Mac 上功耗问题转向 Linux 桌面，社区反馈强烈，是当前跨平台支持呼声最高的 Issue 之一。

2. [Issue #28919：Windows Codex App 缺少 “Control other devices” 标签](https://github.com/openai/codex/issues/28919) · **OPEN** · 👍 42 · 💬 44
   在 Windows 版 App 的 Settings > Connections 中找不到远程设备控制入口，影响 Pro 用户使用远程控制功能，社区有大量 Windows 用户共鸣。

3. [Issue #38350：定时任务成功运行后自动禁用，无需用户授权](https://github.com/openai/codex/issues/38350) · **OPEN** · 💬 40
   ChatGPT Web 中重复性 Scheduled tasks 在正常执行一次后自行从 enabled 变为 paused，且涉及多个无关任务。用户未做任何取消操作，自动化可靠性受到严重质疑。

4. [Issue #13018：允许在 Codex App 中删除线程](https://github.com/openai/codex/issues/13018) · **CLOSED** · 👍 105 · 💬 29
   用户希望支持直接删除会话线程，而不是只能归档。当前需要手动操作 `~/.codex/archived_sessions/`，属于高频热求。

5. [Issue #25179：Codex App 缓存中积累陈旧 subagent，且无法稳定关闭](https://github.com/openai/codex/issues/25179) · **OPEN** · 👍 3 · 💬 21
   长时间运行的桌面会话中，子代理在缓存/UI 中无法正确清除，关闭操作无效，导致会话状态持续混乱。

6. [Issue #40715：Windows 稳定版 ChatGPT 26.820.60940 报 “invalid transport in mcp_servers.codex_app”](https://github.com/openai/codex/issues/40715) · **OPEN** · 👍 7 · 💬 16
   Windows 上最新稳定版解析 MCP 服务器配置失败，而 Beta 版 26.727.40816 可正常工作，疑似新版本引入的配置兼容性回归。

7. [Issue #17598：原生 subagent 编排在非 OpenAI 自定义模型供应商上无法正确工作](https://github.com/openai/codex/issues/17598) · **OPEN** · 👍 3 · 💬 14
   使用 gpt-5.4 等模型时，原生子代理在 custom providers 下面临兼容问题，影响希望接入自有/第三方模型的用户。

8. [Issue #39841：Workspace 终端启动失败，报 “setup refresh had errors”](https://github.com/openai/codex/issues/39841) · **OPEN** · 👍 1 · 💬 13
   Windows 11 上 Workspace 终端无法启动任何命令，直接阻断本地开发流程。

9. [Issue #30385：Windows Codex 桌面端侧边栏/搜索丢失最近本地项目线程](https://github.com/openai/codex/issues/30385) · **OPEN** · 👍 1 · 💬 11
   线程文件与 `session_index.jsonl` 均存在，但侧边栏和搜索无法列出；应用重启后仍不恢复，属于数据可见性问题。

10. [Issue #31868：为 GPT-5.6 提供可选 1M 上下文支持](https://github.com/openai/codex/issues/31868) · **OPEN** · 👍 22 · 💬 8
    社区对超长上下文模型接入 Codex 有持续需求，希望 App、CLI 与 IDE 扩展都能享受 1M 上下文，属于高赞功能请求。

## 重要 PR 进展

过去 24 小时 PR 侧以 MCP OAuth、安全加固、构建/测试基建为主，以下 10 个较具代表性：

1. [PR #40739：为 MCP OAuth 添加企业 IdP 身份解析](https://github.com/openai/codex/pull/40739)
   通过已存储的企业 IdP 会话与授权元数据绑定，要求验证 issuer、public-client 认证及 ID-JAG token exchange 能力。

2. [PR #40722：为 MCP OAuth 添加企业 ID-JAG 交换](https://github.com/openai/codex/pull/40722)
   实现非交互式两步交换：从企业 IdP 获取 ID-JAG，再兑换为资源绑定的 MCP bearer token，并校验端点 URL、claims 和资源范围。

3. [PR #40737：将 MCP 工具输出保留为内容项](https://github.com/openai/codex/pull/40737)
   将非结构化 MCP 结果转为类型化 function-call output，同时保留媒体、加密内容和未知字段，改善多模态场景下的数据保真度。

4. [PR #40728：尊重 MCP 服务器 attachment 拥有的权限](https://github.com/openai/codex/pull/40728)
   避免 MCP 服务器继承线程级 sandbox 全局权限，为每个启用中的 MCP 服务器捕获独立 permission profile。

5. [PR #40713：从 Git 远程元数据中清理凭据](https://github.com/openai/codex/pull/40713)
   修复 Git 远程 URL 中内嵌用户名/密码/token 被带入 turn metadata 与持久化线程元数据的风险，新增 `SanitizedGitUrl` 处理。

6. [PR #40716：为托管 worktree 添加线程归属元数据](https://github.com/openai/codex/pull/40716)
   新增 `WorktreeManager` API，可将托管 linked worktree 绑定到线程，并以原子、不覆盖方式写入 `codex-thread.json`，重复绑定幂等。

7. [PR #40710：添加显式远程执行器连接刷新](https://github.com/openai/codex/pull/40710)
   为远程 Noise registry 环境提供 `refresh_connection`，在执行器替换场景下无需等待旧会话的断线恢复，可立即创建新会话。

8. [PR #40719：保留保留工具 schema 中的边界约束](https://github.com/openai/codex/pull/40719)
   修复模型参数约束（minimum/maximum/maxLength）在 schema 解析中丢失的问题，确保模型收到声明的限制值。

9. [PR #40724：添加 plugin-attributed 技能遥测](https://github.com/openai/codex/pull/40724)
   为显式/隐式技能注入事件增加 `plugin_id`、`model_slug`、`reasoning_effort` 维度，提升资源型技能调用的可观测性。

10. [PR #40736：在 Bazel 下运行 exec-server 兼容性测试](https://github.com/openai/codex/pull/40736)
    新增 Bazel 测试规则，覆盖当前构建、0.149.1 release 与最小支持版本的双向 Noise relay 兼容性测试，强化版本回归防线。

## 热门 Discussions

按分区整理过去 24 小时更新的讨论：

### Ideas

- [Discussion #40291：请提供固定价格、高用量个人计划](https://github.com/openai/codex/discussions/40291) · 👍 2 · 💬 3
  用户希望 Codex 提供“公平使用”下的固定价格高用量订阅档位，认为当前按量限制在长时多步 agent 任务中会产生持续心理压力。

### General

- [Discussion #40707：5 小时限制回来了](https://github.com/openai/codex/discussions/40707) · 👍 1
  用户表示更希望只保留周限制，不要附加 5 小时滚动限制；在仅周限制期间，Codex 更贴合高强度日 + 低强度日交替的工作节奏。

### Q&A

- [Discussion #40740：rollout 追踪是否能捕获 Declined exec 状态来自哪条路径？](https://github.com/openai/codex/discussions/40740) · 👍 1
  技术向提问：`policy.rs` 与 `protocol_event.rs` 均将 `ExecApprovalRequest`、`ApplyPatchApprovalRequest`、`GuardianAssessment` 排除在持久化之外，用户想确认协议事件是否遗漏了审批拒绝路径的可观测性。

### Show and tell

- [Discussion #40689：游戏设计 Codex skills：从粗糙想法到可测试原型](https://github.com/openai/codex/discussions/40689) · 👍 1
  作者开源了面向游戏设计的技能集合，可从关键词、机制或图像等稀疏种子生成可玩系统与原型。

- [Discussion #40615：用 Codex 构建确定性的公开 Issue 证据 Action](https://github.com/openai/codex/discussions/40615) · 👍 1
  一个小型 GitHub Action，可在人工或 agent 处理公开 Issue 前生成可复现的事实快照，记录元数据、标签、assignees 与汇总活动等。

- [Discussion #40593：AgentMemory for Codex on Windows —— 项目级召回源仅预览](https://github.com/openai/codex/discussions/40593) · 👍 1
  面向 Windows 用户的独立下游项目，为非开发者提供从需求到验收工具的 Codex 辅助 pipeline。

- [Discussion #40538：CodexDashboard —— 可视化所有 codex 会话详情](https://github.com/openai/codex/discussions/40538) · 👍 1
  开源仪表盘可按时间、项目、模型维度组织 Codex 会话，帮助用户理解历史工作负载。

- [Discussion #25653：请求反馈：AI 编写 PR 的 Review Packet](https://github.com/openai/codex/discussions/25653) · 👍 1
  项目验证针对 AI 生成变更的 PR review 证据流程，试图定义 agent 变更应附带的审查材料。

## 功能需求趋势

综合 Issue、PR 与 Discussion，社区当前最关注的功能方向包括：

- **Linux 桌面客户端支持**：`#11023` 成为长期第一热求，大量用户表达跨平台需求。
- **Windows 平台稳定性与适配**：沙箱启动失败、MCP transport 报错、应用崩溃、线程缺失、会话消失等问题集中爆发。
- **会话与线程生命周期管理**：支持删除线程、清理 stale subagent、防止 rollout JSONL 数据丢失。
- **自动化任务可靠性**：Scheduled tasks 自动暂停且无授权反馈，是最近一周新出现的高频痛点。
- **企业级 MCP 认证与权限隔离**：PR 集中在企业 IdP 身份解析、ID-JAG 交换、attachment 级权限归属，说明 MCP 正在向企业场景深化。
- **模型与上下文扩展**：GPT-5.6 1M 上下文支持、自定义模型供应商与原生 subagent 协同是高赞需求。
- **使用计量与订阅模式**：5 小时限制回归引发讨论，用户希望固定价格高用量方案。

## 开发者关注点

- **Windows 问题成为最大反馈簇**：从 sandbox 到 MCP 配置再到线程索引，多个 Issue 指向同一结论——Windows 端发布质量需要加强回归测试。
- **会话状态一致性受损**：数据丢失、幽灵子代理、线程无法删除等问题，直接影响用户对桌面端信任度。
- **自动化任务“静默自停”**：定时任务未授权自动暂停的触发条件不透明，用户要求至少给出明确原因和恢复入口。
- **hooks 配置兼容性**：项目级 `hooks.json` 在 git worktree 场景下被静默忽略，开发者难以排查行为差异。
- **安全边界受到重视**：Git 远程凭据清理、MCP 服务器权限绑定的 PR 说明 Codex 正加强企业与安全场景的边界控制。
- **开发流程可观测性**：技能遥测、rollout 追踪、SQLite 日志持久化与 Dashboard 类项目，表明社区在加速构建深度调试与监控工具链。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

## Gemini CLI 社区动态日报 — 2026-08-26

### 1. 今日速览
今日发布节奏密集：**v0.57.0 正式版**与 **v0.58.0-preview.0** 相继推出，重点修复了 Cloud Workstations OAuth 流程与符号链接路径处理问题。社区讨论热度集中在 **Agent/Subagent 稳定性**（#22323 MAX_TURNS 误报成功、#21409 Generalist agent 挂起）与 **安全加固**方向，多个 PR 针对 SSRF 防护和扩展权限确认进行修复。

---

### 2. 版本发布

**v0.58.0-preview.0**（最新预览版）
- `fix(core)`: 修复 ignore 路径处理中符号链接评估不一致的问题（#28915）
- `refactor(core)`: 核心模块重构

**v0.57.0**（正式版）
- `fix(core)`: 动态解析 Cloud Workstations 代理重定向 URI，修复 OAuth 流程（#28688）
- `fix(core)`: 解决 IDE 连接中目录不匹配被吞掉的问题

**v0.56.0-nightly.20260825.g812f7a2bc**
- `fix(a2a-server)`: 清除新消息轮次中的过期取消错误（#28940）
- `fix(core)`: 在写入策略配置中声明顶层安全检查器

---

### 3. 社区热点 Issues（Top 10）

**#22323** [priority/p1, kind/bug] Subagent 在 MAX_TURNS 后被误报为 GOAL 成功，隐藏了中断
- 作者: matei-anghel | 13 评论 | 👍 2
- 重要性: `codebase_investigator` 在达到最大轮次后仍返回 `success`，会误导用户对任务真实状态的判断，属于高优 Agent 可靠性缺陷
- 链接: https://github.com/google-gemini/gemini-cli/issues/22323

**#21409** [priority/p1, kind/bug] Generalist agent 无限期挂起
- 作者: turmanticant | 8 评论 | 👍 8
- 重要性: 简单操作（如创建文件夹）也会触发挂起，用户等待长达一小时；社区点赞数最高，说明影响面广。禁用子代理可绕过此问题
- 链接: https://github.com/google-gemini/gemini-cli/issues/21409

**#19873** [priority/p2, kind/enhancement] 利用模型的 bash 亲和性，实现零依赖 OS 沙箱与执行后意图路由
- 作者: abhipatel12 | 8 评论 | 👍 1
- 重要性: 提出让 Gemini 原生 POSIX 工具链能力在安全沙箱中充分发挥的设计方向，对执行架构有深远影响
- 链接: https://github.com/google-gemini/gemini-cli/issues/19873

**#22745** [priority/p2, kind/feature] 评估 AST 感知的文件读取、搜索与代码库映射的价值
- 作者: gundermanc | 7 评论 | 👍 1
- 重要性: EPIC 级调研，旨在通过 AST 工具精确读取方法边界、减少 Token 噪音、降低对齐读取的轮次消耗
- 链接: https://github.com/google-gemini/gemini-cli/issues/22745

**#21968** [priority/p2, kind/bug] Gemini 不会主动使用 skills 和 sub-agents
- 作者: rnett | 6 评论 | 👍 0
- 重要性: 社区反映 Gemini 几乎不自动触发自定义 skills，即使已有明确描述（如 gradle/git skills），必须显式指示才执行
- 链接: https://github.com/google-gemini/gemini-cli/issues/21968

**#26522** [priority/p2, kind/bug] Auto Memory 无限重试低信号会话
- 作者: SandyTao520 | 5 评论 | 👍 0
- 重要性: 低价值会话长期未被标记为已处理，导致后台重复扫描，浪费资源
- 链接: https://github.com/google-gemini/gemini-cli/issues/26522

**#26525** [priority/p2, kind/bug, area/security] Auto Memory 缺少确定性脱敏且日志过多
- 作者: SandyTao520 | 4 评论 | 👍 0
- 重要性: 转录内容在脱敏前就进入模型上下文，且日志可能泄漏已有 skill 名称，存在隐私隐患
- 链接: https://github.com/google-gemini/gemini-cli/issues/26525

**#25166** [priority/p1, kind/bug] Shell 命令执行完成后卡在 "Waiting input"
- 作者: rnett | 4 评论 | 👍 3
- 重要性: 极简命令也会触发，命令实际已完成但 UI 仍显示活动状态，严重影响交互体验
- 链接: https://github.com/google-gemini/gemini-cli/issues/25166

**#22232** [priority/p3, kind/feature] 增强 browser_agent 弹性：自动会话接管与锁恢复
- 作者: hsm207 | 4 评论 | 👍 0
- 重要性: 当前 browser_agent 对持久化 profile 锁采用 fail-fast 策略，遇到孤儿进程即失败，建议实现自动恢复
- 链接: https://github.com/google-gemini/gemini-cli/issues/22232

**#21983** [priority/p1, kind/bug, agent/browser] Browser subagent 在 Wayland 下失败
- 作者: sigmaSd | 4 评论 | 👍 1
- 重要性: Wayland 会话中浏览器代理直接报错退出，影响 Linux 用户的核心功能可用性
- 链接: https://github.com/google-gemini/gemini-cli/issues/21983

---

### 4. 重要 PR 进展

**#29089** [priority/p2, area/agent] `fix(core)`: 将 abortSignal 透传给 BaseLlmClient 的 retryWithBackoff
- 作者: chelsealong | 更新: 2026-08-25
- 修复会话摘要、聊天压缩等场景中 abort 信号未传入重试机制的问题，避免取消操作后重试仍继续
- https://github.com/google-gemini/gemini-cli/pull/29089

**#28863** [size/l] `fix(extensions)`: 扩展更新需用户确认环境变更，并净化可篡改运行时环境变量
- 作者: amelidev | 更新: 2026-08-25
- 将 MCP 服务端环境配置纳入同意字符串生成，并过滤自定义环境变量，防止扩展静默注入
- https://github.com/google-gemini/gemini-cli/pull/28863

**#29088** [area/core] `fix(vscode-ide-companion)`: 解决 MCP 流打开时 stop() 无法解析
- 作者: chiruu12 | 更新: 2026-08-25
- 当 MCP 传输持有长连接流时 `IdeServer.stop()` 永不触发回调，导致 VS Code 扩展停用卡死。修复 #28785
- https://github.com/google-gemini/gemini-cli/pull/29088

**#29087** [area/extensions] `fix(cli)`: 防止并发扩展安装竞态
- 作者: nnetraga97 | 更新: 2026-08-25
- 两个 Gemini CLI 进程同时安装同一扩展时可能相互覆盖，改用 `proper-lockfile` 实现互斥
- https://github.com/google-gemini/gemini-cli/pull/29087

**#29081** [size/l, area/security] `fix(core)`: 防止 MCP OAuth 元数据发现与认证中的 SSRF
- 作者: josebalius | 更新: 2026-08-25
- 遵循 RFC 9728/8414：远程 OAuth 端点强制 HTTPS、校验资源来源匹配，仅允许 loopback 使用 HTTP
- https://github.com/google-gemini/gemini-cli/pull/29081

**#28983** [priority/p2, area/core] `fix(core)`: 检测混合换行符而非单处 CRLF 即标记
- 作者: shoemoney | 更新: 2026-08-25
- 原先只要文件包含一个 `\r\n` 就判定为 CRLF，改为检测是否存在混合换行，避免误分类
- https://github.com/google-gemini/gemini-cli/pull/28983

**#28930** [priority/p1, area/core] `fix(core)`: 移除不安全的 `diff.external` 覆盖
- 作者: sharonyao1127 | 更新: 2026-08-25
- 通过安全漏洞修复（#28928）：git 将空字符串视为不设置，导致外部 diff 工具未被真正禁用
- https://github.com/google-gemini/gemini-cli/pull/28930

**#29067** [area/security] `fix(a2a-server)`: 移除误导性安全方案与硬编码凭证
- 作者: CheesyWannabe | 更新: 2026-08-25
- 清理了声称已认证但实际未认证的端点定义，并删除硬编码的本地开发凭证
- https://github.com/google-gemini/gemini-cli/pull/29067

**#28955** [priority/p1, size/xl] 更新依赖、添加 MCP 配置并集成 ECC 包
- 作者: devops2626 | 更新: 2026-08-25
- 大型基础设施 PR，涉及依赖升级与 MCP 配置调整，需关注兼容性影响
- https://github.com/google-gemini/gemini-cli/pull/28955

**#28984** [dependencies, size/xl] `chore(deps)`: npm 依赖批量升级（76 项更新）
- 作者: dependabot[bot] | 更新: 2026-08-25
- 涉及 `simple-git`（3.28→3.36）、`@modelcontextprotocol/sdk` 等关键包升级
- https://github.com/google-gemini/gemini-cli/pull/28984

---

### 5. 热门 Discussions

*（本次数据源未包含 Discussions 数据，此部分省略）*

---

### 6. 功能需求趋势

| 方向 | 代表 Issue/PR | 热度信号 |
|------|--------------|---------|
| **Agent/Subagent 稳定性** | #22323 MAX_TURNS 误报、#21409 Generalist 挂起、#21968 skills 利用不足 | 高（P1 缺陷密集，社区强烈反馈） |
| **安全加固** | #29081 MCP SSRF、#28863 扩展环境变量、#29067 硬编码凭证、#26525 确定性脱敏 | 高（多个 PR 集中修复） |
| **AST 感知工具链** | #22745 EPIC、#19561 Tactful Extraction | 中（长期优化方向，减少 Token 消耗） |
| **浏览器代理增强** | #21983 Wayland 失败、#22232 锁恢复、#22267 配置覆盖失效 | 中（Linux 用户受影响明显） |
| **Auto Memory 治理** | #26522 低信号重试、#26523 无效补丁隔离 | 中（后台服务稳定性与隐私） |
| **IDE 集成稳定性** | #29088 VS Code stop() 卡死、#28955 MCP 配置 | 中（扩展停用会阻塞整个工作区） |
| **持久化任务追踪** | #18836 基于文件的 CRUD 替换 WriteToDo、#21000 原生工具建任务追踪 | 中（降低上下文膨胀） |

---

### 7. 开发者关注点

1. **子代理行为不可预测**：MAX_TURNS 被包装成 GOAL 成功、Generalist 偶发无限挂起——开发者对"关闭子代理后才能正常工作"的现状感到沮丧。
2. **交互式命令处理缺陷**：Shell 命令完成后仍显示 "Waiting input"（#25166），创建 Vite 应用卡在交互提示（#22465），严重影响自动化流程。
3. **配置不生效**：Browser Agent 忽略 `settings.json` 中的 `maxTurns` 等覆盖项（#22267），用户期望项目级/全局配置有更高优先级。
4. **上下文与 Token 效率**：文件读取"消防水带"式注入上下文（#22745、#19561），WriteToDo 的上下文腐烂问题被多次提及，AST 感知工具被寄予厚望。
5. **安全默认缺失**：扩展环境变量注入、OAuth SSRF、A2A 服务器硬编码凭证等问题，显示默认安全策略仍需加强。

---

*数据抓取时间：2026-08-26 | 来源: [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 · 2026-08-26

## 1. 今日速览

今日发布 `v1.0.81-10`，将插件面板 `/plugin`、`/mcp`、`/skills` 开放给所有用户，并统一了 `x` 删除键行为。社区在发布后很快反馈了两个与本次版本直接相关的回归：`latest-prerelease` 更新检查选中旧版本，以及用户配置的 `api.githubcopilot.com/mcp` 服务丢失注入 Copilot Token。此外，MCP 配置、会话持久化与跨机器共享仍是社区讨论最集中的方向。

## 2. 版本发布

### v1.0.81-10
- **新增**：插件面板开放给所有用户，可运行 `/plugin`、`/mcp` 或 `/skills`。如不需要，可通过设置 `PLUGINS_DASHBOARD=false` 或使用 `copilot plugins` 命令退出。
- **改进**：`x` 已在所有输入场景统一作为删除键，覆盖 `/sandbox config`、`/settings`、`/mcp`、会话对话框以及 diff 视图。

## 3. 社区热点 Issues

以下为过去 24 小时内更新最值得关注的 10 个 Issue：

1. **[#13：CLI 输入应支持 vi/vim 模式](https://github.com/github/copilot-cli/issues/13)**  
   最受社区欢迎的 Feature Request 之一，获得 74 👍、8 条评论。交互式 CLI 对习惯模态编辑器的开发者不够友好，缺少键盘驱动导航与编辑能力。

2. **[#4035：语音安装器尝试访问私有 Azure Artifacts 源，导致 Microsoft.AI.Foundry.Local.Core 1.2.3 返回 401](https://github.com/github/copilot-cli/issues/4035)**  
   启用语音模式时安装器去请求私有 Azure Artifacts feed，而不是 nuget.org，导致无 Azure DevOps 权限的用户安装失败。属于安装链路中的环境误判问题。

3. **[#4542：工作区 .mcp.json 能被 `mcp list`/`mcp get` 检测到，但实际 agent 会话未连接](https://github.com/github/copilot-cli/issues/4542)**  
   配置发现与运行时行为不一致：MCP server 显示为 Enabled，但交互式会话中实际不可用。这会直接破坏基于工作区 MCP 的自动化工作流。

4. **[#4272：企业策略导致新模型灰色不可选，但管理入口无法真正启用](https://github.com/github/copilot-cli/issues/4272)**  
   大量新模型显示“被组织策略禁用”，但给出的 GitHub 设置链接中并无对应开关。企业用户无法使用新模型，影响模型特性落地。

5. **[#4560：模型为 auto 时始终以 reasoningEffort: null 运行，且无法手动配置](https://github.com/github/copilot-cli/issues/4560)**  
   `auto` 模式会把 reasoning effort 重置为 null，且拒绝用户自定义。这会静默关闭推理强度，影响复杂任务输出质量。

6. **[#4593：Windows 上归档 worktree 会话失败（os error 32）](https://github.com/github/copilot-cli/issues/4593)**  
   删除/归档 worktree 会话时，进程树未终止导致文件被占用。Windows 平台用户会因此无法正常清理会话。

7. **[#4605：latest-prerelease 更新检查把用户卡在 1.0.81-9](https://github.com/github/copilot-cli/issues/4605)**  
   由于多个 release 的 `created_at` 相同，GitHub 排名把 `-10` 排在 `-2` 之后，导致首次列出的 prerelease 被选中。直接影响刚从发布通道升级的用户。

8. **[#4604：1.0.81-10 中用户配置的 api.githubcopilot.com/mcp 服务丢失注入 Token，且 /mcp auth 无法修复](https://github.com/github/copilot-cli/issues/4604)**  
   MCP server 启动时没有 `Authorization` header，收到 401 后只能尝试 OAuth，但该 endpoint 不支持动态客户端注册。此问题会阻塞官方 MCP 服务的使用。

9. **[#4602：store_memory 导致整个会话失败，所有 MCP server 被移除](https://github.com/github/copilot-cli/issues/4602)**  
   Issue 作者指出多个已报告问题可能共享同一根因：`managedSettings` 在 `serverFetchFailed` 抖动时 fail closed。该问题同时影响会话记忆和 MCP 可用性。

10. **[#4606：Google Workspace MCP OAuth 因 accounts.google.com 尾斜杠 issuer 不匹配失败](https://github.com/github/copilot-cli/issues/4606)**  
   原生 HTTP MCP 认证在 Google Workspace 官方 endpooint 上无法进入浏览器授权流程，属于 OAuth metadata 解析兼容问题。

## 4. 重要 PR 进展

过去 24 小时内没有检测到新的 Pull Request 更新或合并（共 0 条），暂无重要 PR 可展示。

## 6. 功能需求趋势

从今日更新的大量 Issues 中可以提炼出以下社区关注方向：

- **MCP 生态成熟度**：工作区 `.mcp.json` 的检测与连接一致性、MCP server 的 Token 注入、OAuth 兼容性、MCP 工具结果中的图片传递等，是当前最热门的问题域。
- **会话状态与上下文管理**：社区持续提出跨机器共享会话、Session 上下文导出、`store_memory` 稳定性等需求，说明用户希望 CLI 成为更完整的“代理工作台”。
- **输入交互与编辑器体验**：vi/vim 输入模式、`ask_user` 的 enum 字段自定义兜底、统一删除键等，反映开发者对终端交互效率的要求在提高。
- **模型配置与企业管理**：`auto` 模型的 reasoning effort 控制、企业组织策略下模型可选择性、BYOK 场景下的多媒体结果支持，都是当前模型能力扩展的关键卡点。
- **发布与安装可靠性**：语音安装依赖私有源、prerelease 版本排序错误等问题，暴露了发布管道和安装器在真实环境下的健壮性风险。
- **Windows 平台体验**：worktree 归档文件占用、进程树清理等问题显示 Windows 上的文件锁与进程管理仍需要专门适配。

## 7. 开发者关注点

- **MCP 配置“伪生效”**：`mcp list` 显示可用但会话中实际未连接，用户信任度受影响。
- **发布版本选择逻辑**：`latest-prerelease` 选错版本会让用户停留在旧构建，属于阻碍反馈闭环的发布链问题。
- **Token 与认证静默失败**：MCP 丢失注入 Token、OAuth issuer 不匹配等问题，缺少明确错误提示，排查成本高。
- **企业策略黑盒**：模型被策略禁用但管理界面无法开启，管理员和普通用户都无从下手。
- **会话与插件稳定性**：Extension SDK 重连导致 hook processor 被 dispose、`store_memory` 失败，说明插件与核心会话生命周期管理仍需加固。
- **资源静默丢失隐患**：BYOK 下 MCP 图片结果被丢弃、会话归档失败等，可能导致用户无感知的数据损失，是需要优先修复的敏感问题。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-08-26）

## 今日速览

今日发布 `v1.18.23`，主要修复 Cloudflare AI Gateway 对第三方 Provider 及 Anthropic 模型的路由兼容问题。社区方面，**Ox Alpha Free 模型在涉及 tools 时持续报 “Endpoint is unavailable”** 已成为最大热点，出现多个重复 Issue；同时 v2 自动更新器导致磁盘被写满、会话永久卡死等稳定性问题也引发较多讨论。

## 版本发布

### v1.18.23
- 修复 Cloudflare AI Gateway 对第三方 Provider 的路由，使非 Workers 模型可通过网关 REST API 正常工作。
- 修复 Anthropic 模型经 Cloudflare AI Gateway 时的模型 ID 转换问题，例如 `claude-haiku-4.5` 会被正确转换为 Anthropic 所需的 dashed 格式。

## 社区热点 Issues

以下为过去 24 小时内最值得关注的 10 个 Issue：

1. **[#44300] Zen API: x-preview-f-free / ox-alpha-free 只要请求包含 tools 就报 “Endpoint is unavailable”**
   评论 13 · 👍 5  
   这是当前社区最集中的故障：Ox Alpha Free 模型普通对话正常，但任何带 `tools` 数组的请求都会失败，影响大量用户。重复报告还有 #44850、#44742、#45073 等。  
   https://github.com/anomalyco/opencode/issues/44300

2. **[#43277] 会话在正常使用中永久卡死，重启也无法恢复**
   评论 5  
   多个用户反馈会话会突然进入 “stuck” 状态，拒绝新消息，即使重启系统也无法恢复，严重影响长期工作流。  
   https://github.com/anomalyco/opencode/issues/43277

3. **[#45087] [2.0] 自动更新器每 10 分钟重装 OpenCode，导致 `~/.npm/_cacache` 占用 266 GB**
   评论 4  
   v2 的 `opencode2 serve --service` 长期运行后，因内存中运行版本与 npm 更新版本不一致，反复尝试重装，最终写满磁盘。  
   https://github.com/anomalyco/opencode/issues/45087

4. **[#33618] Qwen 3.7 Plus/Max（经 OpenRouter）产生空工具名调用**
   评论 10 · 👍 4  
   较老的兼容性问题仍在影响用户：工具调用偶发变为 `✗ "" failed`，随后会话反复重试甚至中止。  
   https://github.com/anomalyco/opencode/issues/33618

5. **[#35434] v1.17.13 回归：多问题工具的提交在 TUI 中静默失败**
   评论 7  
   `question` 工具一次询问 2 个及以上问题时，表单可显示但回车无响应，不发送 `reply`/`reject`，属于影响自动化流程的回归 Bug。  
   https://github.com/anomalyco/opencode/issues/35434

6. **[#19143] [Feature] 桌面端实现消息搜索（Cmd+F / Ctrl+F）**
   评论 9 · 👍 8  
   用户希望在桌面 App 中快速定位长会话历史信息，当前缺少基础搜索能力，是社区呼声较高的功能需求。  
   https://github.com/anomalyco/opencode/issues/19143

7. **[#14524] [Feature] 模型选择器中显示模型成本**
   评论 5 · 👍 11  
   用户在 TUI 选择模型时无法直接看到价格，希望增加成本列，帮助控制使用费用。  
   https://github.com/anomalyco/opencode/issues/14524

8. **[#42440] [2.0] Windows：每次执行子进程时控制台窗口闪烁**
   评论 3  
   v2 在 Windows 上每次运行 shell 命令都会闪现控制台窗口，影响交互体验，属于高频触发的桌面端问题。  
   https://github.com/anomalyco/opencode/issues/42440

9. **[#45055] Qwen3.8-27B + SGLang：多个 system 消息导致严格后端全部失败**
   评论 2  
   即使用户使用 OpenAI 兼容后端，OpenCode 仍可能发送多条 `role: "system"` 片段，而 SGLang/部分 HF 模板只允许 `messages[0]` 为 system，导致 agent 调用全部失败。  
   https://github.com/anomalyco/opencode/issues/45055

10. **[#35494] TUI 在 Debian 13 / XFCE / X11 上白屏冻结，只能 kill -9**
    评论 3  
    特定 Linux 桌面环境下 TUI 完全无响应，用户无法正常退出或恢复会话。  
    https://github.com/anomalyco/opencode/issues/35494

## 重要 PR 进展

以下为过去 24 小时内更新或提交的 10 个重点 PR：

1. **[#45098] 新增原生 Cerebras 和 Together AI Provider**
   基于 OpenAI Chat 协议实现一等 Provider 支持，说明社区对更多模型服务商的原生接入需求在增加。  
   https://github.com/anomalyco/opencode/pull/45098

2. **[#45094] 保留 Provider 返回的 Responses Item ID**
   修复 AI Responses API 中消息、reasoning、function-call 等 ID 被过度过滤的问题，提升与 Codex 协议的兼容性。  
   https://github.com/anomalyco/opencode/pull/45094

3. **[#45002] 在校验前自动修复畸形工具参数**
   通过内部插件在 Zod / JSON Schema 校验前修复常见参数格式错误，可减少工具调用失败率。  
   https://github.com/anomalyco/opencode/pull/45002

4. **[#45093] 忽略 SSE retry 指令而不中断流**
   修复服务端发送 `retry` 控制指令时导致响应流被意外结束的问题，同时保留事件数据和类型化错误。  
   https://github.com/anomalyco/opencode/pull/45093

5. **[#45091] 阻止 CLI 重复更新和 npm 缓存无限增长**
   直接解决 #45087 的根因：记录上次成功安装版本，并为 npm 更新使用临时缓存，避免长驻进程每 10 分钟重装。  
   https://github.com/anomalyco/opencode/pull/45091

6. **[#45086] 支持通过 Azure CLI 进行 Entra ID 认证**
   为 v2 Azure Provider 增加 Microsoft Entra ID 认证路径，保留现有 API Key 流程。  
   https://github.com/anomalyco/opencode/pull/45086

7. **[#44845] Core 测试环境与开发机配置/凭据隔离**
   让 `bun run test` 不再加载个人插件、技能、MCP server 或读取用户配置，提升测试可靠性和可复现性。  
   https://github.com/anomalyco/opencode/pull/44845

8. **[#35311] 同一仓库的多个 clone 不再被识别为不同项目**
   该 PR 试图一次性修复多个相关 Issue，解决项目身份与路径绑定过强导致的会话/项目混乱问题。  
   https://github.com/anomalyco/opencode/pull/35311

9. **[#44895] 确定性插件加载顺序和 Hook 错误隔离**
   避免插件加载顺序随机导致行为不一致，并将单个 Hook 异常隔离，防止拖垮整个会话。  
   https://github.com/anomalyco/opencode/pull/44895

10. **[#44898] 更符合实际的上下文窗口计算**
    针对模型未上报上下文限制或限制较小的情况，修正 context 显示与实际可用量，避免用户误解剩余空间。  
    https://github.com/anomalyco/opencode/pull/44898

## 功能需求趋势

综合过去 24 小时的 Issue 与 PR，社区关注的功能方向集中在：

- **模型与 Provider 兼容性**：新增 Cerebras、Together AI、Azure CLI 认证，修补 Cloudflare AI Gateway 路由，支持更多模型服务商接入。
- **工具调用可靠性**：畸形工具参数修复、SSE retry 处理、多问题工具静默失败、Qwen 空工具名问题均指向同一核心痛点：工具链稳定性。
- **桌面端与 TUI 体验**：消息搜索、模型成本展示、会话预览标签页、IME 输入修复、Windows 控制台闪烁，都是高频 UI 需求。
- **会话与项目生命周期管理**：永久卡死会话恢复、按项目删除会话、同一仓库多 clone 的项目归并，说明用户在长期使用中越来越依赖可靠的会话管理。
- **资源占用与控制**：自动更新器磁盘耗尽、npm 缓存增长等问题推动社区关注后台进程资源治理。

## 开发者关注点

- **Provider 故障直接影响工具调用**：Ox Alpha Free 的 “Endpoint is unavailable” 只在带 tools 时出现，说明网关层对工具请求的支持仍有明显缺陷，且缺少足够的错误降级提示。
- **静默失败难以排查**：多问题工具提交无事件、部分模型只显示 `✗ "" failed`，开发者普遍需要更明确的可观测性和错误透出。
- **会话卡死缺少恢复手段**：多个 Issue 表明重启和杀掉进程都无法恢复会话，用户对会话可靠性和导出/恢复能力有强烈期待。
- **自动更新机制不够收敛**：v2 的更新循环在大内存/长驻场景下造成磁盘写满，已不是简单的提示类问题，而是会影响开发机稳定性的严重缺陷。
- **严格 OpenAI 兼容后端适配仍需加强**：多个 system 消息、模型 ID 格式、SSE 指令处理等细节，暴露出 OpenCode 在协议兼容层还需要更严格的规范化。

---

*注：本次数据未包含 GitHub Discussions，故本期不设「热门 Discussions」板块。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

## Pi 社区动态日报（2026-08-26）

### 今日速览

- 过去 24 小时无新版本发布，但社区围绕 0.84.3 暴露的若干回归（全局扩展加载失败、TUI 渲染异常）展开了密集修复。
- 多个 PR 针对模型 API 兼容性（Responses tool_choice、Bedrock 图像嵌套、OpenRouter 推理控制）和编码代理工具链（急切执行、cwd 解析、read 行数）进行修正。
- Windows 支持调查和新模型提供商（Opper、SiliconFlow）成为社区热度较高的方向。

---

### 社区热点 Issues（10 个）

1. **[Windows] [sink-thread] How do you use Pi on windows? What issues are you seeing?** — #7547  
   **状态**：OPEN | 评论 49 | 👍 2  
   官方发起的 Windows 使用情况收集帖，评论区集中反馈了运行方式碎片化、文档不清晰、工具链不一致等问题，是社区对 Windows 支持呼声最高的信号。  
   [查看 Issue](https://github.com/earendil-works/pi/issues/7547)

2. **TUI row corruption during streaming: assistant text rendered one word per line after long tool output** — #8584  
   **状态**：CLOSED | 评论 9 | 👍 5  
   流式输出在长工具输出后出现逐词换行的显示级 bug，严重影响阅读。获得 5 个 👍，是过去 24 小时最受关注的渲染修复类 issue。  
   [查看 Issue](https://github.com/earendil-works/pi/issues/8584)

3. **AgentSession settlement/continuation and assistant-tail lifecycle bugs** — #5886  
   **状态**：OPEN | 评论 9 | 👍 4  
   mitsuhiko 提交的元 issue，汇总了“会话收尾/继续”时助手尾部生命周期的一类 bug。表面上是零散问题，实则会话稳定性核心缺陷，社区持续关注。  
   [查看 Issue](https://github.com/earendil-works/pi/issues/5886)

4. **Pi stops with "Response was truncated before completion."** — #7855  
   **状态**：CLOSED | 评论 7 | 👍 4  
   用户反馈 AI 在任意 OpenAI 兼容 API（如本地 VLLM）上随机出现“响应截断”并停止，需手动继续。高频痛点，社区反应积极。  
   [查看 Issue](https://github.com/earendil-works/pi/issues/7855)

5. **Github Copilot fails with timeout** — #8468  
   **状态**：CLOSED | 评论 6  
   打卡在未包含 PR #8254 的提交上时，GitHub Copilot 登录超时。集成稳定性的重要回归，影响依赖 Copilot 的用户。  
   [查看 Issue](https://github.com/earendil-works/pi/issues/8468)

6. **pi update --extensions blocks npm scripts with new npm 11.16.0** — #6600  
   **状态**：OPEN | 评论 4  
   npm 11.16.0 默认阻止 install scripts，导致 Pi 扩展更新流程直接卡住。环境变更破坏核心工作流的典型案例，正在等待解决方案。  
   [查看 Issue](https://github.com/earendil-works/pi/issues/6600)

7. **Gemini 3.7 Flash rejects /tree branch summarization with MINIMAL thinking** — #8456  
   **状态**：CLOSED | 评论 4 | 👍 2  
   Gemini 3.7 Flash 不支持 MINIMAL thinking，内置 `/tree` 分支摘要请求未携带 reasoning 参数导致失败。模型适配细节问题，社区有共鸣。  
   [查看 Issue](https://github.com/earendil-works/pi/issues/8456)

8. **0.84.3 bundled CLI: every global extension fails with "Cannot find module '@earendil-works/pi-coding-agent'"** — #8620  
   **状态**：CLOSED | 评论 2  
   升级 0.84.3 后所有全局扩展无法加载，属于严重回归。虽然评论少，但影响面极大，代表社区对快速修复的迫切需求。  
   [查看 Issue](https://github.com/earendil-works/pi/issues/8620)

9. **fix(coding-agent): scale compaction reserve to model context window to avoid spurious compaction on small models** — #8651  
   **状态**：CLOSED | 评论 3  
   压缩 token 预留固定为 16384，未考虑小型本地模型的上下文窗口，导致过早触发压缩。修复后小模型体验将有明显提升。  
   [查看 Issue](https://github.com/earendil-works/pi/issues/8651)

10. **thinkingTokenBudgetField is being ignored** — #8444  
    **状态**：CLOSED | 评论 3  
    文档声称 `thinkingTokenBudgetField` 可配置预算字段，但实际设置无效，且与 llama.cpp 不兼容。用户按文档配置受阻，属于配置与实现不一致的典型问题。  
    [查看 Issue](https://github.com/earendil-works/pi/issues/8444)

---

### 重要 PR 进展（10 个）

1. **fix(ai): omit Responses tool_choice when no tools are sent** — #8650  
   **状态**：CLOSED  
   修复 Compaction 调用 `completeSimple` 时传 `toolChoice: "none"` 但无 tools，导致 xAI Grok 返回 400 的问题。Grok 用户的核心修复。  
   [查看 PR](https://github.com/earendil-works/pi/pull/8650)

2. **fix(ai): hoist Bedrock tool result images out of toolResult for OpenAI models** — #8642  
   **状态**：CLOSED  
   OpenAI 模型在 Bedrock 上会拒绝 `toolResult.content` 中嵌套图片，本 PR 将这些图片提升到同级用户内容块，拯救了视觉会话。  
   [查看 PR](https://github.com/earendil-works/pi/pull/8642)

3. **Load skills when bash is available** — #8641  
   **状态**：CLOSED  
   当 `read` 工具被禁用但 `bash` 可用时，加载技能并对系统提示做相应调整。修复了技能在受限环境丢失的问题，并补充回归测试。  
   [查看 PR](https://github.com/earendil-works/pi/pull/8641)

4. **feat(ai): add Opper provider** — #8639  
   **状态**：CLOSED  
   新增 Opper 作为内置 OpenAI 兼容提供商（`api.opper.ai/v3/compat`），包含 provider 模块、模型目录、环境变量和默认模型配置。  
   [查看 PR](https://github.com/earendil-works/pi/pull/8639)

5. **feat: Add eager tool execution** — #8629  
   **状态**：CLOSED  
   允许对已明确可安全丢弃的工具调用（v1 限定本地 `read`）在 `toolcall_end` 时预先执行，正常分发时复用结果，否则丢弃且不写入 transcript。性能优化新功能。  
   [查看 PR](https://github.com/earendil-works/pi/pull/8629)

6. **fix(coding-agent): use ctx.cwd for cwd-sensitive tools when available** — #8627  
   **状态**：CLOSED  
   扩展注册工具时，执行回调现在优先使用 ExtensionContext 中真实会话 cwd 解析路径。修复 `read`/`write`/`edit`/`grep` 等工具在扩展环境中的路径错误。  
   [查看 PR](https://github.com/earendil-works/pi/pull/8627)

7. **feat(tui): move editor cursor on click** — #8547  
   **状态**：OPEN  
   支持鼠标在提示符内点击定位光标。在已支持鼠标选词的基础上补齐编辑交互短板，TUI 用户体验提升明显。  
   [查看 PR](https://github.com/earendil-works/pi/pull/8547)

8. **fix(ai): preserve Codex thread affinity headers** — #8570  
   **状态**：CLOSED  
   为 OpenAI Codex Responses 请求补上 `thread-id` 亲和头，与上游 `session-id` 配对，避免并发请求串线。对多线程调用场景非常重要。  
   [查看 PR](https://github.com/earendil-works/pi/pull/8570)

9. **fix(coding-agent): stop counting trailing newline as a line in read tool (#7329)** — #8623  
   **状态**：CLOSED  
   修复 `read` 工具因 `split("\n")` 导致尾随换行被算作多一行的问题。影响截断提示“of N+1”和续读建议，是高频小修复。  
   [查看 PR](https://github.com/earendil-works/pi/pull/8623)

10. **fix(ai): derive OpenRouter reasoning controls** — #8614  
    **状态**：CLOSED  
    对应 issue #8454，修复 OpenRouter 在模型推理控制上的推导逻辑，让 reasoning 参数正确映射。  
    [查看 PR](https://github.com/earendil-works/pi/pull/8614)

---

### 热门 Discussions（1 个）

**[Show and tell] CursorAI Agent CLI custom provider for the Pi Coding Agent** — #1558  
作者展示了独立开发的 [Pi Cursor Provider](https://www.npmjs.com/package/@netandreus/pi-cursor-provider)，让 Cursor 的 Agent CLI 能使用 Pi Coding Agent。评论区 9 个 👍，社区对“与其他 CLI 工具互通”的方案反应积极。  
[查看 Discussion](https://github.com/earendil-works/pi/discussions/1558)

---

### 功能需求趋势

- **新模型提供商扩展**：社区持续要求接入新服务（SiliconFlow #4742、Opper PR #8639、DeepSeek v4 视觉模型 #8483），并修复各 API 的差异化行为（OpenRouter reasoning、Gemini thinking level、Responses tool_choice）。
- **Windows 支持升级**：官方发起使用调查 #7547，同时修复 PowerShell 版本、taskkill 路径等平台问题，Windows 正从“可用”走向“好用”。
- **TUI / 渲染体验优化**：流式渲染错乱、全屏图像显示、HTML 导出 Mermaid/LaTeX、鼠标点击定位等，显示层问题成为关注焦点。
- **长会话上下文管理**：上下文压缩随模型窗口缩放、截断问题、AgentSession 生命周期修复，是维持长任务稳定性的关键方向。
- **扩展系统健壮性**：全局扩展加载、npm 脚本策略、cwd 传递、工具注册路径解析，扩展开发者生态正在完善中。

---

### 开发者关注点

- **0.84.3 回归影响面大**：全局扩展模块无法加载（#8620）是最紧迫问题，影响所有使用第三方扩展的用户。
- **模型 API 碎片化**：不同提供商对 `tool_choice`、图像嵌套、reasoning 字段的处理不一致，导致适配层需要不断“打补丁”。
- **Windows 仍非一等公民**：多种运行方式（WSL、原生、MSYS2）分散，工具链选择混乱，taskkill 和 PowerShell 问题只是冰山一角。
- **长会话稳定性欠佳**：响应截断、压缩摘要退化、编辑重试循环等导致多轮对话效率下降，开发者希望核心会话逻辑更可靠。
- **图像处理策略待统一**：工具结果图像可能触发媒体预算超限（#8636）或直接导致会话失败（#8642），需要统一的图像传递与降级机制。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-08-26

> 数据来源：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

## 1. 今日速览

今日发布 v0.22.0-nightly 内部版本，修复 Web Shell 工作区路径传递问题。社区最值得关注的是 P1 级 bug（#9459 `/effort max` 在 OpenAI 兼容 Provider 上导致会话锁死）已关闭；同时 `/review` 流程 fork 子代理（#9784）、后台代理协调（#8097）等多代理方向讨论密集，过去 24 小时共有 50+ 条 Issue 与 50+ 条 PR 保持更新。

## 2. 版本发布

### v0.22.0-nightly.20260825.22bb5e8b9f

- **fix(web-shell):** 从 overview 面板打开会话时传递正确的工作区 cwd
- **fix(web-shell):** 其他 Web Shell 修复（详见 [Release Notes](https://github.com/QwenLM/qwen-code/releases)）

## 3. 社区热点 Issues

### 3.1 `/effort max` 破坏 OpenAI 兼容 Provider 会话 — [#9459](https://github.com/QwenLM/qwen-code/issues/9459)（P1 · 已关闭 · 10 评论）
UI 提供的 `/effort max` 未被 `clampReasoningEffort()` 正确截断，所有 OpenAI 兼容 Provider 均拒绝该值，一旦设置，会话内后续所有请求持续返回 400。该问题会"锁死"整个会话，对大量使用 OpenAI 兼容端点的用户影响显著，社区讨论积极，目前已关闭。

### 3.2 `/review` 全流程应迁移至 fork 子代理上下文 — [#9784](https://github.com/QwenLM/qwen-code/issues/9784)（P0 · 打开 · 3 评论）
`/review high` 会在用户主会话累积约 95k token 的 SKILL.md，加上 14+ 个 agent 返回、多轮 verify/audit 结果，带来正确性与并发两方面成本。作者建议将整个 pipeline 放入 fork 子代理中运行。作为 P0 增强，显示核心 review 流程优化已成为当前开发重点。

### 3.3 后台 Agent 协调缺口：重复工作、提前完成、send_message 不交互 — [#8097](https://github.com/QwenLM/qwen-code/issues/8097)（P2 · 打开 · 8 评论）
同时运行多个后台 Explore 子代理并通过 `send_message` 通信时，出现父代理重复执行子代理工作、子代理提前判定完成、中途消息无法交互三类问题。评论数居前，反映多代理协作仍处于早期阶段。

### 3.4 Skill 上下文生命周期管理 — [#6762](https://github.com/QwenLM/qwen-code/issues/6762)（P2 · 打开 · 6 评论）
SKILL.md 正文作为工具结果载入会话上下文后永不释放，缺少卸载、压缩或过期机制。社区对长会话令牌消耗加剧有明确感知，该 feature request 指向明确的优化方向。

### 3.5 长时间运行后 OOM 且终端 UI 错乱 — [#9198](https://github.com/QwenLM/qwen-code/issues/9198)（P2 · 打开 · 6 评论）
在 1TB 内存服务器上持续运行一周后触发 OOM，tmux 窗口按键错乱、无法复制粘贴，用户反馈"Kimi Code 正常、Qwen 不行"。该问题将内存资源管理与终端交互稳定性同时推上台面。

### 3.6 上下文压缩结果不正确 — [#9309](https://github.com/QwenLM/qwen-code/issues/9309)（P3 · 已关闭 · 6 评论）
用户先执行 `/compress-fast` 再执行 `/compress`，压缩结果与预期不符。上下文压缩正确性是长会话体验的基石，相关讨论已关闭，推测已有修复或定位。

### 3.7 `/loop` cron 任务静默执行，模型无法自省或停止 — [#5823](https://github.com/QwenLM/qwen-code/issues/5823)（P2 · 打开 · 5 评论）
`/loop` 创建的 cron 任务在用户无感知的情况下被自动触发，且模型无法列出或取消自己调度的任务。该问题直指后台自动化功能"缺乏可观测性与控制权"，与多代理方向密切相关。

### 3.8 Windows 下 `@` 文件读取的安全防护形同虚设 — [#8227](https://github.com/QwenLM/qwen-code/issues/8227)（P2 · 打开 · 5 评论）
Windows 上 `O_NOFOLLOW` 不存在，`dev/ino` 身份检查为空操作，PR #7206 的符号链接/TOCTOU 加固在 Windows 上基本失效，且缺少测试覆盖。属安全类隐患，涉及文件操作核心逻辑。

### 3.9 TUI 渲染层拟从 ink 迁移至 OpenTUI — [#8662](https://github.com/QwenLM/qwen-code/issues/8662)（P3 · 打开 · 5 评论）
当前 TUI 基于 ink 7 + React 19 并携带 1037 行自定义 patch（VP 虚拟视口），存在闪烁、渲染异常等结构性问题。社区展开 migration tracking，预计将推动终端交互层重构。

### 3.10 循环检测误报致无人值守轮次不可恢复 — [#9733](https://github.com/QwenLM/qwen-code/issues/9733)（P2 · 打开 · 4 评论）
循环检测在"写脚本→运行→编辑→重跑"这类合法推进序列上频繁误报，终止 turn 后必须人工干预才能恢复，直接影响自动化任务的可靠性。

## 4. 重要 PR 进展

### 4.1 信任 `workflows/generated` 脚本路径 — [#9987](https://github.com/QwenLM/qwen-code/pull/9987)
为 `Workflow({scriptPath})` 增加第三个受信根目录 `<projectDir>/workflows/generated`，工作流可按路径加载生成脚本，同时仍限定受信范围内，属 workflow 安全模型的补充。

### 4.2 修复三个工作流 Run 生命周期缺陷 — [#9974](https://github.com/QwenLM/qwen-code/pull/9974)
取消工作流现在会真正结束运行；另外修复两个会导致"一次运行被静默消耗"的独立缺陷。每个修复均可独立回退，改动范围小、聚焦明确。

### 4.3 `/review` Step 4 验证升级为执行级 — [#9740](https://github.com/QwenLM/qwen-code/pull/9740)
新增 `qwen review ab-drive` 子命令，用同一脚本对 PR worktree 与 base-tree 分别执行并对比结果，为 review 的验证环节提供可执行证据，提升验证可靠性与可审计性。

### 4.4 Web Shell 支持脏工作树下的 Git 更新 — [#9769](https://github.com/QwenLM/qwen-code/pull/9769)
Web Shell 的 "Update Project" 不再因未提交变更而卡死，分支选择器会切换为解决方案面板，提供两种处理 dirty working tree 的路径，补齐 Web 端 git 操作体验。

### 4.5 将主机关信状态移出容器可写表面 — [#9983](https://github.com/QwenLM/qwen-code/pull/9983)
将 review 管线的 worktree lease 文件移出沙箱容器的可写挂载目录，并让宿主侧的 probe-tree 恢复逻辑拒绝解析到该目录的 admin 条目，修复 #9723 发现的安全面问题。

### 4.6 Web Shell 新增交互式浏览器终端 — [#9984](https://github.com/QwenLM/qwen-code/pull/9984)
在 Web Shell 右侧面板加入手动管理的交互式终端，前端需检查 daemon 的 `web_terminal` 能力后再显示，保证前后端版本兼容。

### 4.7 降低 TUI 渲染开销 — [#9970](https://github.com/QwenLM/qwen-code/pull/9970)
在虚拟视口模式下启用增量终端输出，并将 history-rendering body 隔离为 memoized state，减少整体渲染开销，对长会话性能有直接收益。

### 4.8 新增 Kimi 与小米 MiMo 提供商 — [#8368](https://github.com/QwenLM/qwen-code/pull/8368)
`/auth` 第三方提供商新增 Kimi（Coding Plan / 中国 API Key / 国际 API Key）与小米 MiMo（按量付费 + 中国/新加坡区域），进一步扩展多模型生态。

### 4.9 Web Shell HTML Artifacts 支持托管分享 — [#10024](https://github.com/QwenLM/qwen-code/pull/10024)
在 Web Shell 中为可用 HTML artifact 增加 Share 操作，提供 Cloudflare → Vercel → Netlify 的引导式发布流程（Prepare → Authorize → Connect → Ready），方便用户快速分享产物。

### 4.10 修复 OpenAI 兼容端点内联思维块处理 — [#9607](https://github.com/QwenLM/qwen-code/pull/9607)
Hybrid-thinking 模型通过 `reasoning_content` 输出第一段思考后，可能在 `content` 中发出第二段合法的 `<think>` 块。此前会被转换器误判为结构异常，现改为识别并降级处理，不再导致整轮失败。

## 5. 热门 Discussions

（本期未提供 Discussions 数据，故省略。）

## 6. 功能需求趋势

- **Web Shell 能力扩张**：交互式终端、脏工作树 Git 更新、HTML artifact 托管分享、reasoning effort 持久化、compact mode 收敛——多个 PR 集中落地，Web 端正从"只读预览"走向"完整开发环境"。
- **多代理与后台工作流自动化**：后台代理协调、cron 任务可见性/可停止性、工作流生命周期修复、`/review` fork 子代理化，均指向更强的自动化编排与可控性需求。
- **上下文与令牌管理精细化**：Skill 上下文生命周期、压缩算法正确性、上下文用量 OTel 指标暴露，说明长会话场景下令牌经济性是核心诉求。
- **AI 提供商生态扩展**：新增 Kimi/小米 MiMo，同时修复 OpenRouter、DeepSeek Vision 等兼容性问题，多模型/多端点支持需求依然旺盛。
- **终端交互与渲染性能**：TUI 迁移 OpenTUI 的讨论、渲染开销优化、OOM 问题，显示终端 UX 与资源占用正成为规模化使用后的瓶颈。
- **安全加固**：Windows `@` 文件读取防护、容器可写表面隔离、workflow 受信任路径，安全相关 PR/Issue 持续出现。

## 7. 开发者关注点

- **OpenAI 兼容层问题频发**：`/effort max` 会话锁死、Auto Mode classifier 不可用（OpenRouter）、DeepSeek vision 丢图、内联思维块解析失败，兼容层稳定性仍是最高频反馈。
- **上下文/令牌管理是最大痛点**：压缩结果不可信、SKILL.md 永久驻留、前缀缓存命中率低（#9230），用户在长会话中实际成本上升明显。
- **后台自动化缺信任与可控性**：cron 任务不可见、无法停止；循环检测误报后无人值守轮次只能"等死"；后台 agent 协调存在重复劳动。
- **Windows 支持存在欠账**：`O_NOFOLLOW` 缺失导致安全加固失效，Windows CI lane 变红且长期未被观察，Windows 用户体验与测试覆盖均待提升。
- **CI 可靠性受质疑**：自托管 runner 出现 ENOSPC、merge queue 未启用导致部分测试从未运行，社区对 CI 基础设施稳定性和可观测性提出了更高要求。

</details>

<details>
<summary><strong>CodeWhale</strong> — <a href="https://github.com/Hmbown/CodeWhale">Hmbown/CodeWhale</a></summary>

# CodeWhale 社区动态日报 — 2026-08-26

## 今日速览

v0.9.12 集成分支（#5576）已完成全部发布阻塞项代码，进入版本号与 changelog 收尾阶段；M-Maciej 主导的“外部监督三件套”（control socket / lifecycle outbox / relaunch）全部合并，显著增强 CodeWhale 在无人值守和自动化场景下的可操作性。同时多个高价值 bug 修复落地，包括 git 命令阻塞异步执行器、Windows 路径拆分、发布数据滞后等。

## 社区热点 Issues

挑选 10 个最值得关注的 Issue，按讨论热度与影响力排序：

### 1. EPIC-005: CodeWhale TUI Crate 分解（总跟踪 Issue）
- **#5316** | 作者: aboimpinto | 评论: 16 | 状态: OPEN
- 作为 TUI crate 分解工作的总 Umbrella Issue，所有子 EPIC、FEAT 和 PR 都在此汇总。涉及 TUI 模块化重构，属于影响深远的架构级工程。
- 社区讨论活跃，是当前最受关注的结构性改进项。
- [GitHub](https://github.com/Hmbown/CodeWhale/issues/5316)

### 2. Provider 中立性：18 个 DeepSeek 专属门控应改为 Provider 中立
- **#5588** | 作者: Hmbown | 评论: 5 | 状态: OPEN
- 全量审计发现 279 个文件中 2,281 处 `deepseek` 出现，其中 18 处行为级门控在概念上应 Provider 中立。首个修复已包含 NVIDIA NIM 环境变量泄漏问题。
- 社区较为关注，关系到多云/多模型用户的体验一致性。
- [GitHub](https://github.com/Hmbown/CodeWhale/issues/5588)

### 3. Workflow owner 快照将 Degraded 状态折叠为 Completed
- **#5582** | 作者: jbovard2016 | 评论: 4 | 状态: CLOSED
- 当前 `main` 分支将 `WorkflowRunStatus::Degraded` 映射为 `OwnerState::Completed`，掩盖了 workflow 部分失败的真实状态，误导上层监控与用户判断。
- 该问题对 workflow 可观测性有直接影响，社区反馈积极。
- [GitHub](https://github.com/Hmbown/CodeWhale/issues/5582)

### 4. Workflow responseSchema 失败需有界修复与原始输出回执
- **#5583** | 作者: jbovard2016 | 评论: 4 | 状态: CLOSED
- 子任务返回散文或畸形 JSON 时，workflow 直接失败，且不提供原始输出供排查。建议增加有界修复机制并保留 malformed output 回执。
- 开发者对 workflow 的健壮性要求提高，此问题具有代表性。
- [GitHub](https://github.com/Hmbown/CodeWhale/issues/5583)

### 5. 过期 write-claims 持续存在，级联锁定其他子代理
- **#5562** | 作者: slowly247 | 评论: 3 | 状态: CLOSED
- 多个子代理会话后，过期的 write-claims 永久存在并级联阻塞其他子代理的命令执行，verifier 角色描述与自身行为矛盾。影响多代理协作场景。
- [GitHub](https://github.com/Hmbown/CodeWhale/issues/5562)

### 6. 全新安装时 MiniMax 和 Xiaomi 模型返回 404
- **#5601** | 作者: Brook-WZ | 评论: 3 | 状态: CLOSED
- 首次配置 MiniMax 和 Xiaomi 模型时，输入 API key 后立即报错，大概率是内置 URL 错误，用户被迫回退到 0.6 版本使用命令行配置。
- 这是新用户 onboarding 的典型障碍，社区关注度高。
- [GitHub](https://github.com/Hmbown/CodeWhale/issues/5601)

### 7. 后台 git 命令导致 `.git/index.lock` 冲突
- **#5617** | 作者: LmeSzinc | 评论: 2 | 状态: OPEN
- CodeWhale 内部只读探测通过真实 `git` CLI 执行，`git status` 等命令可能持有 index.lock，导致用户自己的 `git commit` 间歇性失败。
- 新提交的 issue，直击日常开发痛点，值得持续关注。
- [GitHub](https://github.com/Hmbown/CodeWhale/issues/5617)

### 8. Fleet config 视图：Enter 循环、模型切换入口不清晰
- **#5589** | 作者: Hmbown | 评论: 3 | 状态: CLOSED
- `/fleet config` 视图中按 Enter 后界面无变化，且模型切换交互不易发现，用户体验较差。
- 反映出 TUI 交互细节仍需打磨，社区对 UX 的敏感度在上升。
- [GitHub](https://github.com/Hmbown/CodeWhale/issues/5589)

### 9. 受监督运行的控制面（per-session control socket）
- **#5533** | 作者: M-Maciej | 评论: 3 | 状态: OPEN
- 提案为每个会话增加控制 socket（消息/中断/重启/状态），并引入 `RuntimeBackendKind::External`，以满足 terminal multiplexer、自动化框架、CI 等外部监督场景。
- 该需求在无人值守和自动化运维场景下呼声高，后续 PR #5594 已落地。
- [GitHub](https://github.com/Hmbown/CodeWhale/issues/5533)

### 10. /relaunch：将会话切换到当前二进制
- **#5532** | 作者: M-Maciej | 评论: 4 | 状态: CLOSED
- `/update` 安装新二进制后要求用户手动重启，但 TUI 持终端场景下缺少自我重启机制。该 issue 推动实现 `/relaunch`，一次完成保存、恢复、切换。
- 开发者关心更新体验，相关 PR #5593 已合并。
- [GitHub](https://github.com/Hmbown/CodeWhale/issues/5532)

## 重要 PR 进展

挑选 10 个重要的 PR，覆盖功能新增、修复与重构：

### 1. v0.9.12 集成分支：must-fix + UX 修复（进行中）
- **#5576** | 作者: Hmbown | 状态: OPEN
- 包含 72 个提交，发布阻塞项已全部完成，剩余版本号 bump 和 changelog/RC 门槛。集成分支 gated，合入 main 前需满足发布条件。
- 是 v0.9.12 周期的核心集成 PR，涵盖多个修复和增强。
- [GitHub](https://github.com/Hmbown/CodeWhale/pull/5576)

### 2. Control socket 最终部分（part d）
- **#5594** | 作者: M-Maciej | 状态: CLOSED | 关闭 #5533
- Unix-only、默认关闭的 JSON-RPC 会话控制 socket，支持消息、中断、重启、状态查询。交互 TUI 绑定 `<socket>` 路径，满足外部监督需求。
- [GitHub](https://github.com/Hmbown/CodeWhale/pull/5594)

### 3. /relaunch 命令（part c）
- **#5593** | 作者: M-Maciej | 状态: CLOSED | 关闭 #5532
- `/relaunch` 在持久化、恢复终端、telemetry flush 后加载新二进制并恢复会话，使 `/update` 后一步切换成为可能。
- [GitHub](https://github.com/Hmbown/CodeWhale/pull/5593)

### 4. 本地生命周期事件 outbox（part b）
- **#5592** | 作者: M-Maciej | 状态: CLOSED | 关闭 #5531
- 可选的 `[lifecycle_outbox]` 配置，每个生命周期事件追加一行 JSONL，支持交互 TUI 和 headless `codewhale exec`，无需 shell hook。
- [GitHub](https://github.com/Hmbown/CodeWhale/pull/5592)

### 5. 修复：git_status/git_diff 移出 async executor 线程
- **#5616** | 作者: rafaelcavalheri | 状态: CLOSED
- `GitStatusTool`/`GitDiffTool` 在 async `execute()` 中直接调用阻塞的 `std::process::Command::output()`，可导致 tokio worker 池阻塞、会话无响应。已改用阻塞池执行。
- [GitHub](https://github.com/Hmbown/CodeWhale/pull/5616)

### 6. 修复：Windows verbatim 路径参数通过 POSIX 分词保留
- **#5610** | 作者: aboimpinto | 状态: CLOSED
- 修复两个 Windows CI 失败：`enforce_readonly_workspace_operands` 处理 verbatim 路径时被 POSIX 分词破坏，影响只读检查子代理执行 `git -C` 等命令。
- [GitHub](https://github.com/Hmbown/CodeWhale/pull/5610)

### 7. 功能：显示工具与 MCP schema 成本
- **#5611** | 作者: Hmbown | 状态: CLOSED | 关闭 #5603
- 基于 @wuisabel-gif 的 #5603 rebase 到最新 main（#5604 合并后修复冲突）。context inspector 新增工具目录总成本及每个内置工具、MCP server schema 的 Token 成本估算。
- [GitHub](https://github.com/Hmbown/CodeWhale/pull/5611)

### 8. 功能：聚焦 transcript 块操作
- **#5608** | 作者: wuisabel-gif | 状态: CLOSED | 对应 #5551 的聚焦范围
- 当 transcript 聚焦且 composer 为空时，支持 `y` 复制块内容、`Y` 复制元数据、`Enter` 全屏阅读、`r` 查看原始 Markdown。
- 新贡献者的首个 PR，社区参与度提升的信号。
- [GitHub](https://github.com/Hmbown/CodeWhale/pull/5608)

### 9. 文档：修正英文文档不准确之处并新增 Tier-2 简体中文翻译
- **#5613** | 作者: SparkofSpike | 状态: CLOSED
- 审查 `docs/zh_hans/` 时发现英文源文档与代码库（`provider_defaults.rs`、`child_env.rs`、`fleet.rs`）多处不一致，本次一并修正并补充翻译。
- [GitHub](https://github.com/Hmbown/CodeWhale/pull/5613)

### 10. 修复：子代理审批回执持久化
- **#5584** | 作者: cyq1017 | 状态: CLOSED | 关闭 #5543
- 子代理审批提示现在继承会话审批回执存储，在展示提示前写入 Asked，关闭前写入终态，避免工具调用缺少持久化审批证据的问题。
- [GitHub](https://github.com/Hmbown/CodeWhale/pull/5584)

## 功能需求趋势

从本期 Issues 与 PR 中提炼出以下社区关注的功能方向：

1. **外部监督与无人值守运维**
   - control socket（#5533 / #5594）、lifecycle outbox（#5531 / #5592）、/relaunch（#5532 / #5593）三件套的落地，反映用户对 CI、自动化 harness、terminal multiplexer 等外部监督场景的强烈需求。

2. **TUI 交互与 UX 打磨**
   - /tutorial 引导页（#5556）、focused-block 操作（#5551 / #5608）、@path:START-END 行范围引用（#5550）、Fleet config 视图优化（#5589）、clipboard 失败回退文件（#5555）等，社区对终端 UI 的细节体验关注持续上升。

3. **模型与 Provider 中立**
   - DeepSeek 专属门控中立化（#5588）、Opencode Go 模型列表自动更新（#5607）、MiniMax/Xiaomi 内置 URL 修复（#5601），多模型、多云部署场景下的配置体验是高频诉求。

4. **Workflow 与 Fleet 可靠性**
   - responseSchema 失败有界修复（#5583）、Degraded 状态正确映射（#5582）、Fleet 级预算上限（#5567）、事件粒度审计（#5581），Workflow/Fleet 的可观测性与成本控制成为重点方向。

5. **性能与稳定性**
   - git 命令替换为 gix（#5618）、后台 git 探测移除 index.lock 冲突（#5617）、阻塞调用移出 async 线程（#5616）、压缩生存契约（#4394），项目在规模和长时间运行场景下的性能和可靠性问题开始凸显。

6. **安全与权限收敛**
   - sandbox 全盘读取权限收敛为 opt-in deny-list（#5568）、write-claims 过期锁问题（#5562）、子代理审批回执持久化（#5584），安全审计相关议题在 v0.9.12 周期密集出现。

7. **中文化与文档体系**
   - 文档全量中文化 EPIC（#5482）、简体中文 Tier-2 翻译（#5613）、REBRAND.md 错误修正（#5564），中文用户社区正在形成规模，文档本地化进入系统化阶段。

## 开发者关注点

1. **TUI 在无人值守场景下的控制缺口**
   - M-Maciej 连续提交的 control socket、lifecycle outbox、/relaunch 三个特性，核心动机都是“没有人在屏幕前看着 TUI”。这反映出 CodeWhale 用户已不仅限于交互式开发，也在大量用于夜间任务、CI 流水线、自动化测试等场景。

2. **git 集成带来的日常开发摩擦**
   - #5617（index.lock 冲突）和 #5618（gitoxide 替换）从不同角度指向同一个问题：CodeWhale 内部频繁调用 git CLI 已经影响到用户自己正常使用 git。开发者期望内部探测更轻量、更少副作用。

3. **Workflow 状态可信度不足**
   - Degraded 被折叠成 Completed（#5582）、responseSchema 失败无原始输出可查（#5583），用户对 workflow 失败时的诊断能力不满意，要求状态映射更诚实、失败信息更完备。

4. **新模型接入体验粗糙**
   - MiniMax 和 Xiaomi 内置 URL 错误导致首次配置失败（#5601），只能回退旧版本；Opencode Go 模型列表不自动更新（#5607）。新模型接入的维护质量和更新机制受到质疑。

5. **TUI 交互细节仍需系统化打磨**
   - Fleet config 中 Enter 按下无反馈（#5589）、transcript 缺少按块复制/全屏操作（#5551）、文件选择器不支持行范围和隐藏文件（#5550），这类 UX 问题重复出现，说明 TUI 的交互设计需要更系统的梳理和用户测试。

6. **安全默认值偏宽松**
   - Sandbox 在所有 posture 下默认全盘可读（#5568），包括 ReadOnly 子代理也可读取 ~/.ssh 和 .env 文件。安全审计正在推动默认值收敛，但开发者对向后兼容的影响存在顾虑，需要在 opt-in/opt-out 之间找到平衡。

7. **发布流程的工程化改进**
   - #5612 修复了发布数据长期停留在 v0.9.10 的问题，#5614 确保 release-note 检查失败时 CI 能正确失败而不是静默跳过。这些元层面的修复表明项目在加强发布纪律和数据一致性，对依赖版本信息的外部工具链尤为重要。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*