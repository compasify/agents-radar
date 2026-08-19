# AI CLI 工具社区动态日报 2026-08-19

> 生成时间: 2026-08-18 23:11 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告（2026-08-19）

## 1. 生态全景

当前 AI CLI 工具竞争已从"功能可用"进入"生产可信赖"阶段：稳定性回归、上下文/记忆管理、Token 成本透明度、安全沙箱边界是各社区高度重合的议题。头部工具（Claude Code、Codex）凭借庞大付费用户基数积累了最激烈的计费与合规反馈；Gemini CLI、Qwen Code、Pi 等项目则通过自动化修复管线和高频发布快速追赶。安全治理类 PR 在 Codex、Copilot CLI、Gemini 中密集合并，显示各家同步收紧权限与配额边界。总体而言，"能跑通 demo"已不再是卖点，"故障可恢复、成本可预期、权限可管控"成为新的分水岭。

## 2. 各工具活跃度对比

| 工具 | 更新 Issues | 更新 PRs | Discussions | Release |
|---|---|---|---|---|
| Claude Code | Top 10 热帖（评论峰值 121，最高 👍139） | 2（1 Open / 1 Closed） | 未提供* | **v2.1.235** |
| OpenAI Codex | Top 10 热帖（#14593：630 评论 / 👍285） | 10（安全治理为主） | 2 | **rust-v0.148.0** |
| Gemini CLI | Top 10 热帖（评论峰值 12，最高 👍8） | 10（SSR Agent 批量修复） | 未提供* | **v0.56.0-nightly** |
| GitHub Copilot CLI | Top 10 热帖（最高 👍20 / 10 评论） | 1（疑似垃圾 PR） | 未提供* | **v1.0.81-1** |
| OpenCode | Top 10 热帖（最高 👍34 / 17 评论） | 10 | 未提供* | 无 |
| Pi | **50 条更新** | **27 条更新** | 2 | 无（当前 v0.84.2） |
| Qwen Code | **50 条更新** | **50 条更新** | 未提供* | **v0.21.11-nightly** + dsw-eas 验证系列 |
| CodeWhale | **9 条更新** | **26 条更新** | 1 | **v0.9.9** |
| DeepSeek Harness | 无活动 | 无活动 | 无活动 | 无 |

> *注："未提供"指数据源未提供该板块数据，不代表仓库未启用该渠道（如 Gemini CLI 仓库本身未关闭 Issues/PR）。DeepSeek Harness 是唯一完全无活动的仓库。Pi、Qwen Code、CodeWhale 公布了更新总数，其余仓库仅筛选 Top 10 高热度条目。

## 3. 共同关注的功能方向

**① 上下文压缩与记忆持久化**（5 个工具同时聚焦）
- Claude Code：#34556 压缩后记忆丢失（89 评论，已关闭，用户自建替代方案）
- Gemini CLI：Auto Memory 低信号会话无限重试（#26522）、脱敏缺失（#26525）
- Pi：压缩阈值在 agentic run 中从不评估（#6339）、零 usage 提供商永不触发（#8328）
- OpenCode：模式切换/压缩时上下文缓存失效（#37489）
- Qwen Code：`/compress` 后状态栏百分比不刷新（#6806）、自动记忆召回 RFC（#7040）

**② Token 成本与配额透明度**（威胁信任根基）
- Codex：#14593 单次请求烧掉 40% 周配额，630 评论创下本期最高热度
- OpenCode：Go 配额为实际费用的 4 倍（#42985）、20 分钟配额从 11% 飙至 100%（#42935）
- CodeWhale：用户反馈 token 消耗约为 Claude Code 的 3 倍（#1473）
- Claude Code：缓存被无关变更失效导致成本上升

**③ 安全/沙箱与权限边界**（收紧与误杀并存）
- Copilot CLI：1.0.81 沙箱强制启用且无法关闭（#4521/#4522），git 被完全拦截（#4524）
- Codex：Guardian V2 fail-closed、`NODE_REPL_AUTH_TOKEN` 隔离、exec 审批精确化
- Gemini CLI：子进程 token 防泄漏（#28898）、OS 沙箱提案（#19873）
- Claude Code：CVP 合规组织被误拦截（#84352，121 评论）

**④ MCP 运行时可靠性**
- Codex：#30408 MCP 进程泄漏致 RSS 超 9GB
- Copilot CLI：OAuth 版本回归（#4490）、认证后遗留孤儿 stdio 进程（#4392）
- OpenCode：运行时 MCP 工具桥接至核心注册表（#37684）
- Gemini CLI（ACP）：先发 pending 工具状态再请求权限的协议修复（#28870）

**⑤ 多智能体/子代理结果可信度**
- Gemini CLI：#22323 子代理达到 MAX_TURNS 却误报"GOAL 成功"、generalist 无限挂起（#21409）
- Qwen Code：团队成员消息被误判为 shutdown 请求（#9276）、session 协调 RFC（#8718）
- Claude Code：Intel Mac 上 Cowork VM 启动/连接回归（#87503/#87759）
- OpenCode：subagent 工具参数中 ID 不可见（#43282）

**⑥ 跨设备/远程控制一致性**
- Claude Code：GitHub Connector Desktop 已连但 CLI 不识别（#32479）、桌面端跨会话消息静默丢弃（#86298）
- Codex：macOS 远程线程恢复报 `already has an active writer`（#37403）

**⑦ Windows/WSL 一等公民支持**（6 个工具同时中招）
- Codex：Windows 内置浏览器 Trusted RPC 错误（#39136）、WSL ext4 仓库误判非 Git（#35119）
- Qwen Code：Windows Desktop 重启后 session 被静默删除（#8400，P1）
- Pi：`find` 扫描大目录死进程（#8282）、npm 包冷启动慢 5 倍（#8299）
- Copilot CLI：JVM 子进程不认沙箱 RW 路径（#4516）

**⑧ 模型配置颗粒度与指令遵循**
- Copilot CLI：per-agent reasoning effort（#2904，👍20）、per-mode 默认模型（#2958，👍16）、企业模型目录缺失（#4390）
- Claude Code：长会话中 CLAUDE.md 规则失效（#13689）
- Gemini CLI：自定义 skills 不被主动调用（#21968）
- OpenCode：Qwen 采样参数被硬编码（#43310 已修复）

## 4. 差异化定位分析

| 工具 | 生态锚点 | 核心差异 | 当前短板 |
|---|---|---|---|
| **Claude Code** | Anthropic 模型 + 企业合规（CVP） | 功能广度最大：Cowork VM、GitHub Connector、拼写检查等企业级细节 | 稳定性回归密集（VM、消息丢失），合规误拦截引发信任问题 |
| **OpenAI Codex** | OpenAI 模型 + 多端（Desktop/CLI/Remote） | 安全治理领先：Guardian V2 fail-closed、令牌隔离、exec 逐级审批；TUI 会话管理完善（fork/归档/导出） | 配额计费争议（630 评论）与 MCP 资源泄漏 |
| **Gemini CLI** | Google 生态（Cloud Shell/Vertex） | 独一无二的 SSR Agent 自动化修复管线（10+ 机器提交 PR）；最重视评估基础设施（76 个行为评估测试） | 子代理结果可信度问题（误报成功、挂起） |
| **GitHub Copilot CLI** | GitHub 深度集成 + 企业模型目录 | 沙箱机制 + BYOK 短时凭据刷新方向明确；Gemini 3.7 Flash 快速接入 | 24h 内无实质 PR，沙箱强制机制与社区预期严重冲突 |
| **OpenCode** | 开源中立、多模型（DeepSeek/Qwen 等） | Go 配额/BYOK 商业闭环尝试；MCP 工具桥接、服务器切换器等差异化功能密集交付 | 计费逻辑系统性 bug 正在侵蚀商业化信任 |
| **Pi** | 极简开源、本地模型/OpenAI 兼容端点 | 扩展钩子体系深度定制（`agent_recovery_exhausted` 等）；缓存友好压缩（#8307）探索成本优化 | TUI 长会话性能（闪烁、跳顶）；压缩触发条件多处失效 |
| **Qwen Code** | 阿里云/千问生态 + 中文社区 | review/autofix 全链路自动化最强（像素级 TUI 证据、verifier 隔离、评审断点恢复）；live-session registry 落地多智能体编排 | 多智能体消息语义尚不完整；API 稳定性偶发严重故障 |
| **CodeWhale** | DeepSeek 生态、从 deepseek-tui 迁移 | 中文文档/i18n 投入显著；SSE UTF-8 分片修复、可配置 read 预算等细节扎实 | 规模最小，TUI 回归（断提示词、状态指示器）反映测试覆盖不足 |

## 5. 社区热度与成熟度

- **高热度 · 信任修复期**：Codex（#14593 达 630 评论）与 Claude Code（Top 10 评论合计 418）用户基数最大、付费敏感度最高，反馈集中在配额、合规、稳定性——属于"功能成熟但需重建信任"阶段。
- **快速迭代 · 功能扩张期**：Qwen Code（50 PRs/24h）、Pi（27 PRs）、CodeWhale（26 PRs）发布与合并密度高，且各自有清晰的架构主线（多智能体、扩展钩子、TUI 拆分）。Gemini 的 SSR Agent 机器提交 PR 值得关注——自动化修复已进入生产管线。
- **热度高 · 代码节奏慢**：Copilot CLI 社区投诉集中（沙箱爆发）但 24h 内无实质代码合入，修复压力明显大于交付节奏。
- **工程化验证信号**：Qwen 的 dsw-eas 全量验证 Release（SWE-bench Verified 500 + Terminal-Bench 2.0 89，QUARANTINED 机制）显示头部项目开始用标准化基准作为发布门禁。

## 6. 值得关注的趋势信号

1. **稳定性已成为采购/选型的第一道门槛**：API 连接中断、桌面消息丢失、VM 无法启动、会话卡死跨重启存留——几乎每家工具都有"不可恢复"类 bug。评估工具时，建议将故障恢复能力（重试语义、审批持久化、会话可恢复）列为 P0 验收项，而非先看功能清单。

2. **上下文/记忆管理是下一轮竞争焦点**：Claude Code、Gemini、Pi、OpenCode 不约而同卡在"压缩后不丢状态"和"缓存不失效"上。谁先提供可靠的持久记忆与低成本缓存复用，谁将在长会话工作流中占据决定性优势。

3. **安全收紧需要"可配置的误杀率"**：Copilot 沙箱强制启用（git 被拦、关不掉）与 Codex 的 fail-closed 形成鲜明对比——前者引发集中抗议，后者通过 PR 设计（审批精确到 exec、风险分内存化）降低了误伤。安全策略成功与否取决于是否给组织留出覆盖/例外通道。

4. **计费透明度决定商业闭环能否成立**：Codex 630 评论的配额争议、OpenCode 4 倍偏差、CodeWhale 3 倍消耗均指向同一诉求：请求级用量明细与可追溯的配额日志。对采用 BYOK/配额模式的工具而言，这是从 demo 走向生产采购的硬性前提。

5. **多智能体/多会话编排进入"语义正确性"深水区**：Qwen 的 live-session registry 已落地，但"成员消息被误判为 shutdown"、Gemini "被打断却报成功"、Claude "VM 连接超时"说明：多 agent 的价值取决于终止原因的真实性、消息路由的确定性，而非简单的并发调用能力。

6. **Windows 与跨端一致性是明确的增量机会**：至少 6 个工具存在 Windows/WSL 专属缺陷，远程控制"文档齐全但实际不可用"是普遍现状。在多数竞争者聚焦 macOS/Linux 时，率先解决 Windows 沙箱兼容、Git 识别、会话持久化的工具将获得企业桌面市场的先发优势。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据范围**：anthropics/skills 仓库 PR 50 条 / Issue 50 条 | **数据截止**：2026-08-19

> 说明：PR 数据中评论数显示为 `undefined`（数据拉取异常），因此以下按仓库排序位次描述相对热度。所有 PR 当前状态均为 **Open**，尚无 merged/draft 状态条目。

---

## 1. 热门 Skills 排行

### 🥇 skill-creator 评估链路修复（PR #1298）— **最热**
- **功能**：修复 `run_eval.py` 对所有说明恒报 `recall=0%` 的致命缺陷（对应 Issue #556，10+ 独立复现），并将评估产物安装为真实 skill；附带修复 Windows 流读取、触发检测与并行 worker。
- **社区热点**：与 #1099、#1050 组成"Windows 兼容性修复"集群，说明 skill-creator 在跨平台环境基本不可用，是当前社区最痛的问题；且多人独立提交修复方案，属高优先合并对象。
- **状态**：[Open](https://github.com/anthropics/skills/pull/1298)

### 🥈 document-typography 文档排版技能（PR #514）
- **功能**：新增排版质量控制 Skill，解决 AI 生成文档的孤字换行（1-6 词溢出）、孤行标题（标题被挤到页底）和编号错位三大通病。
- **社区热点**：评审认为此类问题"影响 Claude 生成的每一份文档"，通用性强、与文档类 skill 互补，是不依赖具体格式（docx/pdf/odt）的横切质量层。
- **状态**：[Open](https://github.com/anthropics/skills/pull/514)

### 🥉 ODT 文档处理技能（PR #486）
- **功能**：覆盖 OpenDocument 格式（.odt/.ods）的创建、模板填充、读取与转 HTML，触发词含 LibreOffice/ODF/ISO 标准等。
- **社区热点**：补齐了官方文档技能矩阵中缺失的 ODT 拼图，与既有 docx/pdf 形成完整办公文档覆盖，讨论集中在模板变量映射与转换保真度。
- **状态**：[Open](https://github.com/anthropics/skills/pull/486)

### 4. PDF Skill 大小写引用修复（PR #538）
- **功能**：修复 `skills/pdf/SKILL.md` 中 8 处大小写不匹配的文件引用（`REFERENCE.md`→`reference.md`、`FORMS.md`→`forms.md`）。
- **社区热点**：评审指出该问题在大小写敏感文件系统（Linux/macOS）上直接导致参考文档加载失败，是典型的"文档与实现漂移"；修复小而准，合并阻力最低。
- **状态**：[Open](https://github.com/anthropics/skills/pull/538)

### 5. frontend-design 技能可执行性重构（PR #210）
- **功能**：全面修订 frontend-design skill，确保每条指令都是 Claude 能在单轮对话中实际执行的动作，提升指引的具体性与内部一致性。
- **社区热点**：反映了社区对"技能文档"与"操作指令"分野的讨论——技能不应是给人读的教程，而应是给模型执行的行为规范（呼应 Issue #202 对 skill-creator 的同类批评）。
- **状态**：[Open](https://github.com/anthropics/skills/pull/210)

### 6. skill-quality-analyzer + skill-security-analyzer（PR #83）
- **功能**：新增两个元技能：质量分析器（结构/文档、示例、资源等五维评估，各维度加权计分）与安全分析器。
- **社区热点**：与 Issue #492（社区技能伪装官方命名空间）形成呼应，社区开始自发建设"技能的审计工具链"，是生态走向成熟的重要信号。
- **状态**：[Open](https://github.com/anthropics/skills/pull/83)

### 7. self-audit 输出审计技能（PR #1367）
- **功能**：交付前审计 AI 输出的通用技能——先做机械性文件校验（声称输出的每个文件是否真实存在），再按损害严重度顺序做四维推理审计，号称"任何项目/技术栈/模型通用"。
- **社区热点**：与 #1385（三闸门推理质量流水线提案）同作者联动，社区对"AI 自产自检"类元技能兴趣浓厚。
- **状态**：[Open](https://github.com/anthropics/skills/pull/1367)

### 8. testing-patterns 全栈测试技能（PR #723）
- **功能**：覆盖完整测试栈：Testing Trophy 测试哲学、单元测试（AAA/命名/纯函数/边界）、React 组件测试（Testing Library）、以及"该测什么 vs 不该测什么"的取舍。
- **社区热点**：属于社区呼声较高的"代码质量"类技能，与前端设计、审计类 skill 同属"AI 产出质量保障"赛道。
- **状态**：[Open](https://github.com/anthropics/skills/pull/723)

---

## 2. 社区需求趋势

### ① 安全与信任边界（最高关注）— Issue #492（43 条评论，断层第一）
社区技能被分发在 `anthropic/` 命名空间下，冒充官方技能形成信任边界漏洞——用户可能为"官方技能"授予过高权限。衍生关注：SharePoint 技能中的权限/上下文安全问题（#1175）。**这是社区当前最焦虑的方向。**

### ② 工具链可靠性：skill-creator 评估与跨平台
Issue #556（12 条评论）证实 `run_eval.py` 在所有查询下触发率为 0%，直接使"技能自动优化"功能失效；Issue #202 批评 skill-creator 冗长、教育式口吻违反技能编写规范。**前者是功能性崩溃，后者是设计理念之争，均指向同一结论：技能开发工具自身质量不达标。**

### ③ 组织级协作与分享 — Issue #228（👍 8，需求票数最高）
企业用户要求在 Claude.ai 内直接做组织级技能共享（共享链接/技能库），替代"下载 .skill 文件→发 Slack→手动上传"的原始流程。

### ④ 新技能方向提案
- **compact-memory**（#1329）：符号化紧凑记忆表示，减少长期运行 agent 的上下文开销
- **agent-governance**（#412）：AI agent 系统的治理模式——策略执行、威胁检测、信任评分、审计追踪
- **Reasoning Quality Gate Pipeline**（#1385）：任务前校准 → 对抗式评审 → 交付验证的三闸门管线

### ⑤ 平台集成与上下文效率
- Skills as MCPs（#16）：将技能封装为 MCP 协议接口
- AWS Bedrock 支持（#29）
- `claude-api` 技能单次调用注入 ~156k tokens 撑爆上下文（#1487）
- document-skills 与 example-skills 安装内容完全相同导致重复加载（#189）

---

## 3. 高潜力待合并 Skills

| PR | 内容 | 落地潜力判断 |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 0% recall 核心修复 | **最高**。直接对应 #556，且与 #1099/#1050 三个修复形成合流，官方大概率整合后合并 |
| [#538](https://github.com/anthropics/skills/pull/538) | PDF 大小写引用修复 | 高。改动小、缺陷明确（大小写敏感系统必现），低风险易合入 |
| [#541](https://github.com/anthropics/skills/pull/541) | DOCX 修订 w:id 冲突修复 | 高。修复文档损坏的严重 bug（与既有书签的 ID 冲突），属"可复现+根治"型修复 |
| [#539](https://github.com/anthropics/skills/pull/539) | skill-creator YAML 未加引号告警 | 中高。`quick_validate.py` 前置校验，防止静默解析失败，与 #1298 同属工具链加固 |
| [#509](https://github.com/anthropics/skills/pull/509) | 新增 CONTRIBUTING.md | 中高。补齐社区健康度（25% 评分），官方接受意愿通常较强 |
| [#568](https://github.com/anthropics/skills/pull/568) | ServiceNow 平台技能（ITSM/ITOM/SecOps/CSDM 等） | 中。体量大（覆盖 9+ 模块），至今仍在更新（2026-08-12），作者持续投入，但评审周期会较长 |
| [#1538](https://github.com/anthropics/skills/pull/1538) | 两个技能回归 Agent Skills 规范 | 中。直接修复 `skills-ref validate` 不通过的问题，属于维护性合规修复 |

---

## 4. Skills 生态洞察

**社区当前最集中的诉求是：技能生态正从"能建"走向"可信、可评估、可治理"——对外要求解决第三方技能冒充官方的信任边界漏洞，对内要求修复 skill-creator 评估工具链在跨平台下的可靠性，并补上以 self-audit 为代表的质量审计能力。** 文档类技能（typography/ODT/pdf/docx 修复）与"AI 产出质量保障"（测试、审计、安全分析）是当前最活跃的两条新增赛道。

---

# Claude Code 社区动态日报

**日期：2026-08-19**  
**数据来源：** [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 1. 今日速览

- 发布 **v2.1.235**，新增可选的拼写检查功能（基于 aspell/hunspell/ispell），并修复 language server 断连导致的全提示缓存失效问题。
- 社区最热议题集中在 **CVP 合规组织被误拦截**（评论 121）、**上下文压缩后持久记忆缺失**（评论 89）、以及 **GitHub Connector 在 Desktop 可用但 CLI 不识别**（👍 139）。
- 过去 24 小时内出现多个 **Intel Mac 上 Cowork VM 启动/连接回归** 的新 issue，以及与远程控制、跨会话消息相关的可靠性 bug，稳定性问题仍是社区关注重点。

---

## 2. 版本发布

### [v2.1.235](https://github.com/anthropics/claude-code/releases)

- 新增可选 `spellcheck` 设置：在输入提示时使用系统安装的 `aspell`、`hunspell` 或 `ispell` 对拼写错误词添加下划线。
- 修复：当语言服务器在会话中断开或重连时，导致 whole-prompt-cache 失效的问题。
- 修复：嵌套 m（其余变更信息被截断，未能完整展示）。

---

## 3. 社区热点 Issues

以下为过去 24 小时内更新最活跃、讨论度最高的 10 个 Issue：

### 1. [CVP 批准的 Claude.ai 组织仍收到网络防护拦截（#84352）](https://github.com/anthropics/claude-code/issues/84352)
- 评论 **121**，👍 20 | 状态：Open
- 已获得 Cyber Verification Program 批准的组织在 Claude Code 中仍被网络防护阻断，且验证门户显示“Under review”。企业级合规用户受影响大，社区讨论激烈。

### 2. [功能请求：上下文压缩期间的持久化记忆（#34556）](https://github.com/anthropics/claude-code/issues/34556)
- 评论 **89**，👍 6 | 状态：Closed
- 用户经历 59 次上下文压缩后自建了完整持久化系统。社区对“长会话记忆不丢失”的诉求非常强烈。

### 3. [GitHub Connector 在 Desktop 已连接但 Claude Code 不识别（#32479）](https://github.com/anthropics/claude-code/issues/32479)
- 评论 **88**，👍 **139** | 状态：Open
- 集成类问题的代表性 issue，点赞数最高。很多用户遇到同样的连接器不同步问题。

### 4. [API 错误：连接中途关闭，频率高到让 Claude Code 不可用（#69415）](https://github.com/anthropics/claude-code/issues/69415)
- 评论 **53**，👍 81 | 状态：Open
- 涉及 VSCode、WSL、网络区域，网络稳定性问题严重影响日常使用，需要官方优先排查。

### 5. [Windows 桌面应用：跨会话消息被静默丢弃并过期（#86298）](https://github.com/anthropics/claude-code/issues/86298)
- 评论 **19**，👍 1 | 状态：Open
- 自桌面应用 1.28929.0 起回归：消息停留在 UI 永远不会显示的审批中，约 5 分钟后过期。属桌面端消息可靠性问题。

### 6. [VSCode 扩展：增加防止面板抢占焦点的选项（#32726）](https://github.com/anthropics/claude-code/issues/32726)
- 评论 **14**，👍 52 | 状态：Open
- 用户希望 Claude Code 输出时不要自动跳转/抢占焦点，是高频 IDE 体验痛点。

### 7. [提升模型遵循指令的能力（#13689）](https://github.com/anthropics/claude-code/issues/13689)
- 评论 **13**，👍 7 | 状态：Open
- 老牌核心增强请求，社区持续关注模型对复杂指令的执行一致性。

### 8. [Cowork VM 在 Intel Mac 上更新后连接超时（#87503）](https://github.com/anthropics/claude-code/issues/87503)
- 评论 **10**，👍 0 | 状态：Closed
- 1.32352.0 更新后 guest 永不连接，属最新引入的架构/VM回归，已关闭（可能已定位或需再反馈）。

### 9. [Windows 11 桌面端侧边栏完全缺少 Dispatch 选项卡（#77071）](https://github.com/anthropics/claude-code/issues/77071)
- 评论 **10**，👍 1 | 状态：Open
- Pro 计划用户看不到 Dispatch 入口，疑似功能开关/权限判断问题。

### 10. [Intel Mac 上 Cowork VM 引导失败：内核约 1.7s 处暂停（#87759）](https://github.com/anthropics/claude-code/issues/87759)
- 评论 **1**，👍 0 | 状态：Open
- 过去 24 小时新提交的回归报告，1.32352.1 中 VM 无法启动，与 #87503 高度相关，需关注后续修复。

---

## 4. 重要 PR 进展

过去 24 小时内仅有 2 个 PR 有更新，全部列出：

### 1. [为 claude code 添加缺失的 source（#41611）](https://github.com/anthropics/claude-code/pull/41611)
- 作者：tornikeo | 状态：Open
- 为项目补充缺失的 source 资源/引用信息。

### 2. [ralph-wiggum：使用 disable-model-invocation 防止模型自调用 /ralph-loop（#87395）](https://github.com/anthropics/claude-code/pull/87395)
- 作者：bcherny | 状态：Closed
- 修复插件 bug：`/ralph-loop` 的前置元数据使用了不支持的 `hide-from-slash-command-tool` 字段，导致模型可自主触发循环。改用 `disable-model-invocation` 正确阻止模型自调用。

---

## 5. 热门 Discussions

> 本次数据源未提供 Discussions 数据，本节省略。

---

## 6. 功能需求趋势

从近期 Issues（含已关闭）与 PR 中提炼出社区最关注的功能方向：

- **持久记忆与会话连续性**：大量用户希望在上下文压缩后保留关键状态，已有第三方自建方案，官方需要引入统一机制。
- **远程控制与跨设备消息可靠性**：Remote Control、跨会话消息、跨机器 agent 发现等是近 48 小时高频词，但存在连接识别、静默丢弃等问题。
- **IDE 集成体验优化**：VSCode 面板抢焦点、GitHub Connector 不同步、桌面端功能缺失等集成类需求持续发酵。
- **模型指令遵循与约束**：长会话中 CLAUDE.md 规则失效、模型忽略权限提示、指令执行不彻底——模型行为可控性是核心痛点。
- **上下文缓存与性能成本优化**：例如 Bash 工具描述嵌入会话 URL 导致每次 resume 全量缓存失效（#87137），说明社区对 token 成本和延迟敏感。
- **编辑体验细节**：新版本加入拼写检查，反映出官方开始在 prompt 输入体验上做增强，趋势可能延续到更多编辑器功能。

---

## 7. 开发者关注点

- **稳定性是第一位**：API 连接中途关闭、桌面消息丢失、VM 无法启动等回归频繁出现，直接影响“能否作为日常生产力工具”的判断。
- **长会话成本高**：上下文压缩丢失记忆、缓存被 URL 或 language server 重连破坏，导致工作流中断且 token 成本上升。
- **权限与安全模型需要透明**：用户反馈模型绕过权限提示、CVP 组织被误拦截，合规性和可控性成为企业采用的重要门槛。
- **跨设备工作流未成熟**：远程控制、跨机器会话同步等新功能仍处于“文档齐全但实际不可用”的状态。
- **对反馈闭环的期待**：大量 issue 被标记为 closed 但缺少明确解释，用户希望官方对回归类问题提供更快的响应和版本回退建议。

---

*本日报由 AI 自动整理生成，请以 GitHub 原始数据为准。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-08-19）

## 今日速览
今日代码库迎来 `rust-v0.148.0` 正式版，新增 TUI 对话 Markdown 导出、会话 fork/归档等效率功能；社区仍被“Token 消耗过快”“MCP 进程泄漏”“Windows 浏览器插件初始化失败”三大高频问题困扰。安全与治理类 PR（Guardian v2、exec 审批、令牌隔离）密集合并，显示项目正在同步收紧安全边界。

## 版本发布

### rust-v0.148.0
- `/export` 命令支持将完整 TUI 对话导出为 Markdown，可写入剪贴板或新文件（[#37358](https://github.com/openai/codex/pull/37358)）。
- `codex exec fork` 新增会话 fork 能力；TUI 恢复选择器支持归档/恢复会话（[#37367](https://github.com/openai/codex/pull/37367)、[#37369](https://github.com/openai/codex/pull/37369)、[#37371](https://github.com/openai/codex/pull/37371)）。
- 支持在 TUI 初始化期间起草 Prompt（[#37358](https://github.com/openai/codex/pull/37358) 相关）。

### rust-v0.148.0-alpha.23 / alpha.22
- 均为 alpha 通道常规发布，无独立特性说明。

## 社区热点 Issues

1. **[#14593] Token 燃烧速度异常** — 630 评论 / 285 👍
   Business 用户反馈单次 GPT-5.4 请求导致周限额从 90% 骤降至 50%，大量用户跟帖证实类似情况。该 Issue 持续 5 个月仍开放，是当前社区最重要的计费/配额争议点。
   https://github.com/openai/codex/issues/14593

2. **[#39136] Windows 内置浏览器初始化失败：Trusted RPC 不在可信路径** — 61 评论 / 18 👍
   Codex App 26.814 在 Windows 上打开内置浏览器报 “Trusted RPC dependency is not within a trusted code path”，影响 ChatGPT Plus 用户，属于新版引入的严重回归。
   https://github.com/openai/codex/issues/39136

3. **[#20500] 多命名账户支持（feature request）** — 28 评论 / 107 👍
   社区要求同一 App/Connector 支持多个独立授权账户、显式账户选择与严格隐私边界。本期点赞最高的功能需求，开发团队应重点关注。
   https://github.com/openai/codex/issues/20500

4. **[#32041] VS Code 扩展在 Linux 上打开空白 Webview** — 56 评论 / 3 👍
   26.5707.* 在 Linux 上渲染空白，回退 26.5623 可用但缺少 5.6-Sol 模型选项。Linux 桌面端稳定性问题长期未闭环。
   https://github.com/openai/codex/issues/32041

5. **[#30408] MCP 服务进程泄漏** — 29 评论 / 8 👍
   app-server 为每个新线程派生完整 MCP 进程，线程关闭后不回收，导致 RSS 累积超过 9GB。属资源管理严重缺陷，影响长时间使用的桌面用户。
   https://github.com/openai/codex/issues/30408

6. **[#37403] macOS 回归：无法恢复 Remote Control / CLI 线程** — 25 评论 / 18 👍
   8 月 7 日更新后，桌面端恢复既有远程线程报 `already has an active writer`，破坏移动端远程接力的核心工作流。
   https://github.com/openai/codex/issues/37403

7. **[#35119] Windows/WSL 仓库被误判为非 Git** — 23 评论 / 17 👍
   26.721.3404 将 WSL ext4 上的合法仓库标记为 “Git is unavailable”，导致版本管理功能失效；用户回退旧版本可规避。
   https://github.com/openai/codex/issues/35119

8. **[#25928] 已提交 Prompt 在进入队列前随机消失** — 27 评论 / 18 👍
   Windows 上 Cursor 扩展的队列偶发丢 Prompt，Pro 20x 用户受影响，且无日志可查，排除逻辑疑似存在竞态条件。
   https://github.com/openai/codex/issues/25928

9. **[#31864] GPT-5.6 Sol 所有请求因 `collaboration.spawn_agent` 保留字失败** — 7 评论 / 17 👍
   MultiAgentV2 使用保留函数名导致 Sol 会话每个请求在模型处理前即被拒绝，影响范围广且暂无绕过方案。
   https://github.com/openai/codex/issues/31864

10. **[#39144] GPT-5.6 Sol 仍未获得长上下文升级** — 6 评论 / 2 👍（已关闭）
    长上下文发布后 Terra/Luna 已获 872K 窗口，Sol 仍限 272K。用户对比后发现模型间配置不一致，但该 Issue 已被关闭，原因未明。
    https://github.com/openai/codex/issues/39144

## 重要 PR 进展

1. **[#39296] 启用 MCP 工具 Hooks** — 在会话内执行 `mcp_tool` hook，仅限已连接、目录化且策略允许的工具，不可用 server 快速失败。
   https://github.com/openai/codex/pull/39296

2. **[#39307] Guardian V2 风险评分错误时 Fail Closed** — 配置/序列化/线程查找错误一律按高风险处理，避免残留低风险结果放行审批。
   https://github.com/openai/codex/pull/39307

3. **[#39301] 阻止 Node REPL 认证令牌传给子进程** — 新增 `NODE_REPL_AUTH_TOKEN` 环境变量隔离，防止模型可触达的子进程继承敏感凭据。
   https://github.com/openai/codex/pull/39301

4. **[#39299] 限制 Agent Role 的配置覆盖范围** — 子 agent 仅能应用模型行为、开发者消息等受支持覆盖项，不可改变父会话继承的 provider 配置。
   https://github.com/openai/codex/pull/39299

5. **[#39311] 统一 exec 审批与 shell 可执行文件绑定** — 不熟悉的可执行文件即使内部命令可信，也不能隐式信任；审批需精确到 exec 本身。
   https://github.com/openai/codex/pull/39311

6. **[#39290] `codex doctor` 增加 Windows 沙箱诊断** — 报告沙箱后端、拒绝读限制状态，并定位策略不兼容、特权安装失败等问题。
   https://github.com/openai/codex/pull/39290

7. **[#39285] TUI 变更审批显示文件目标路径** — 逐条展示受影响文件描述、源路径与目标路径（含 move 操作），缺失时显示 unavailable。
   https://github.com/openai/codex/pull/39285

8. **[#39304] Guardian v2 风险分保留在内存** — 不再写入 rollout 历史；恢复/分支线程视为无历史分数，首次工具调用正常走分类审批。
   https://github.com/openai/codex/pull/39304

9. **[#39284] 审批期间上报网络断开** — 本地代理请求在审批完成前断开时，向模型返回可读解释，避免工具调用悬挂。
   https://github.com/openai/codex/pull/39284

10. **[#39312] agent 消息增加异步投递元数据** — 新增 `delivery` 字段标识不结束当前回合的用户可见消息，并兼容旧事件格式。
    https://github.com/openai/codex/pull/39312

## 热门 Discussions

### General
- **[#14373] 速率限制消耗比平时更快** — 4 评论 / 7 👍
  Business 用户反馈单次请求后周限额异常下降，与 Issue #14593 相互印证，疑似配额计算或模型调用计费策略存在偏差。
  https://github.com/openai/codex/discussions/14373

### Show and tell
- **[#39282] Lians：本地项目连续性工具** — 0 评论 / 1 👍
  作者发布 Apache-2.0 的本地 MCP 内存层，在 Codex、Claude Code、Cursor 间共享项目上下文，减少跨 agent 切换时的上下文重建成本。
  https://github.com/openai/codex/discussions/39282

## 功能需求趋势

- **MCP 生态治理**（高频）：进程生命周期泄漏、OAuth 刷新令牌无法重新认证、自定义 Responses API 下工具包装兼容性等问题密集出现，社区要求更稳健的 MCP 运行时管理。
- **Windows 与 WSL 一等公民支持**：浏览器插件、沙箱诊断、PTY 终端、Git 仓库识别等多项 Windows/WSL 专属缺陷上榜。
- **长上下文与模型配置一致性**：GPT-5.6 系列模型窗口参数不统一（Sol vs Terra/Luna），用户对模型行为差异敏感。
- **多账户与隐私边界**：单连接多账户支持呼声最高（👍 107）。
- **远程控制可靠性**：Remote 会话恢复、线程残留 writer、iOS 端超时等跨端问题需要系统性修复。
- **性能与资源消耗**：Token 配额燃烧速度、MCP 内存泄漏、Windows 端 UI 卡顿构成“性能三连”。

## 开发者关注点

- **配额透明度**：用户希望明确请求级 Token 计量明细，并在余额异常变动时提供可追溯日志。
- **进程清理机制**：MCP 子进程、app-server 线程、shell 快照进程均需可靠的回收与退出策略。
- **安全默认收敛**：Guardian V2 fail-closed、exec 逐级审批、环境变量隔离等 PR 方向正确，但希望减少误杀合法高频操作。
- **跨端一致性**：同一线程在 Desktop / CLI / Remote / 移动端之间切换时，模型配置、上下文窗口、审批状态应保持一致。
- **诊断工具补齐**：`codex doctor` 扩展至 Windows 沙箱与浏览器插件是正向信号，社区期待覆盖更多本地故障场景。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-19

## 今日速览

昨日发布 v0.56.0-nightly.20260818 并有两项 SSR Agent 修复落地，同时**10+ 个由 SSR Agent 提交的 PR 集中修复了 OAuth、sandbox、符号链接、循环检测等问题**，可见自动化修复管线在高效运转。社区侧，**Subagent 稳定性（MAX_TURNS 误报成功、generalist 挂起）仍是最高热度 Issue**；多项 Auto Memory 隐私与效率缺陷也在持续发酵。

## 版本发布

### v0.56.0-nightly.20260818.g194edea47

发布链接：GitHub Releases（google-gemini/gemini-cli）

主要变更：
- **[SSR Agent] 隐私声明优化**（PR #28820）：澄清工具使用时的隐私提示措辞与选择选项，对应 Issue #26120
- **[SSR Agent] 集成测试 TypeScript 修复**：修复集成测试中的 strict-null 类型错误，对应 Issue #21919

---

## 社区热点 Issues

### 1. Subagent 达到 MAX_TURNS 后被误报为 GOAL 成功
**Issue #22323** | 评论 12 | 👍 2 | P1, area/agent, kind/bug

`codebase_investigator` 子代理实际因达到最大轮次中断，却对外报告 `status: "success"` 与 `Termination Reason: "GOAL"`，使主代理完全无法感知分析并未完成。**这是对任务可靠性影响最直接的 bug**，社区已持续关注 5 个月。

🔗 https://github.com/google-gemini/gemini-cli/issues/22323

### 2. Generalist agent 无限挂起
**Issue #21409** | 评论 8 | 👍 8 | P1, area/agent, kind/bug

简单操作（如创建文件夹）一旦交由 generalist 处理便无限等待，用户最长等待 1 小时后手动取消。**该 Issue 获得 8 个 👍，是当前社区共鸣最强的稳定性问题**。明确禁止模型使用子代理可规避。

🔗 https://github.com/google-gemini/gemini-cli/issues/21409

### 3. 利用模型的 bash 亲和力：零依赖 OS 沙箱与执行后意图路由
**Issue #19873** | 评论 8 | 👍 1 | P2, enhancement

社区提出 Gemini 3 模型天然擅长 POSIX 工具链，建议引入零依赖 OS 级沙箱并在命令执行后做意图路由，兼顾安全与模型原生能力。属于长期架构方向，讨论持续活跃。

🔗 https://github.com/google-gemini/gemini-cli/issues/19873

### 4. 组件级评估（EPIC）
**Issue #24353** | 评论 7 | P1, area/agent

在 #15300 行为评估基础上扩展至组件级。目前已积累 76 个行为评估测试，覆盖 6 个 Gemini 模型，但缺少对单个组件（如 shell、browser）的细粒度验证，是提升整体可靠性的重要基础设施工作。

🔗 https://github.com/google-gemini/gemini-cli/issues/24353

### 5. AST 感知的文件读取与代码库映射（EPIC）
**Issue #22745** | 评论 7 | 👍 1 | P2

该 EPIC 探讨用 AST 感知工具精确定位方法边界、减少读取噪声与 token 消耗，并改善代码库导航。配套 Issue #22746（AST 感知 CLI 工具）也处于活跃讨论中。**对大型代码库场景有重大意义**。

🔗 https://github.com/google-gemini/gemini-cli/issues/22745

### 6. Gemini 不会主动使用 skills 和 sub-agents
**Issue #21968** | 评论 6 | P2, kind/bug

用户反馈即使配置了 gradle、git 等自定义 skills，模型在相关场景下也不会主动调用，只有显式指示才执行。**直接影响自定义 agent 生态的实用价值**，值得关注。

🔗 https://github.com/google-gemini/gemini-cli/issues/21968

### 7. Auto Memory 对低信号会话无限重试
**Issue #26522** | 评论 5 | P2, kind/bug

Auto Memory 仅在提取 agent 成功 `read_file` 后才将会话标记为已处理。若 agent 判断某会话低信号而跳过，该会话会反复出现，导致无效重试。

🔗 https://github.com/google-gemini/gemini-cli/issues/26522

### 8. Shell 命令执行后卡在 "Waiting input"
**Issue #25166** | 评论 4 | 👍 3 | P1, area/core

极其简单的 CLI 命令执行完成后，界面仍显示命令活动并等待输入。**该问题得到 3 个 👍，说明影响面较大**，被标记为 effort/medium。

🔗 https://github.com/google-gemini/gemini-cli/issues/25166

### 9. Auto Memory 缺少确定性脱敏且日志过多
**Issue #26525** | 评论 4 | P2, area/security

Auto Memory 将本地 transcript 发送给模型前仅靠 prompt 指示脱敏（内容已进入模型上下文），且服务可能记录已有的 skill 内容。**安全与隐私风险较高**，社区关注度上升中。

🔗 https://github.com/google-gemini/gemini-cli/issues/26525

### 10. 符号链接 agent 文件不被识别
**Issue #20079** | 评论 4 | P2, kind/bug

`~/.gemini/agents/` 下的符号链接 .md 文件无法被识别为 agent，用户无法用 symlink 管理 agent 配置。**该问题已由 PR #28883 修复**，这里作状态跟踪。

🔗 https://github.com/google-gemini/gemini-cli/issues/20079

---

## 重要 PR 进展

### 1. 保留带工具/媒体的空文本回合
**PR #28892** | OPEN | size/m

改进 `isValidContent` 历史校验逻辑：当模型回合包含工具请求、工具响应或多模态媒体时，即使 `text: ''` 也会保留在 curated history 中，避免上下文损坏。

🔗 https://github.com/google-gemini/gemini-cli/pull/28892

### 2. 加固子进程执行安全性与配置摄入
**PR #28898** | OPEN | size/m

防止认证 token 泄漏到不可信工具执行环境，同时增强配置读取与 GitHub API 交互的可靠性和安全性。**与近期多起安全问题直接相关**。

🔗 https://github.com/google-gemini/gemini-cli/pull/28898

### 3. 支持符号链接 agent 文件（修复 #20079）
**PR #28883** | CLOSED | P2, area/agent, size/m, maintainer only

在 agent 目录（如 `~/.gemini/agents/`）中发现符号链接 .md 文件并正确加载，消除了原始文件过滤逻辑对 symlink 的排斥。

🔗 https://github.com/google-gemini/gemini-cli/pull/28883

### 4. 修复均匀流式内容导致的循环检测误报（修复 #18551）
**PR #28877** | CLOSED | P2, area/agent, size/s

在提交 prompt 后，连续的空白/填充字符流（如连续空格）会触发循环检测误报。此 PR 改进检测逻辑，避免对均匀流式内容的误判。

🔗 https://github.com/google-gemini/gemini-cli/pull/28877

### 5. 修复 Cloud Shell 默认项目 404 错误（修复 #18062）
**PR #28876** | CLOSED | P2, area/security, size/s

当 Gemini CLI 在 Cloud Shell 中以 Google Cloud Lab 账户运行时，默认项目 `cloudshell-gca` 不存在，导致 API 404。此 PR 增加对应处理逻辑。

🔗 https://github.com/google-gemini/gemini-cli/pull/28876

### 6. 防止 OAuth 回调超时导致的未处理 Promise 拒绝（修复 #28512）
**PR #28873** | CLOSED | P1, area/security, size/s

OAuth 回调服务器 5 分钟超时后 promise 拒绝未被捕获，可能引发崩溃。此 PR 补齐了异常处理。

🔗 https://github.com/google-gemini/gemini-cli/pull/28873

### 7. ACP 模式：先发出 pending 工具调用更新再请求权限（修复 #21783）
**PR #28870** | CLOSED | P1, area/core, size/s

在 ACP 模式下，需要用户确认的工具之前会直接发送 `session/request_permission`，违反协议预期。此 PR 先发送 `tool_call`（status: pending）更新，再请求权限。

🔗 https://github.com/google-gemini/gemini-cli/pull/28870

### 8. 识别混合函数调用回合（fixes #28894）
**PR #28895** | OPEN | P2, area/agent, size/s

修复对话历史中混合了 function call 与其他内容的回合无法被正确识别的缺陷。

🔗 https://github.com/google-gemini/gemini-cli/pull/28895

### 9. 尊重 plan-routing 模型可用性（fixes #28896）
**PR #28897** | OPEN | P2, area/agent, size/s

修复 plan-routing 在指定模型不可用时的回退与提示逻辑。

🔗 https://github.com/google-gemini/gemini-cli/pull/28897

### 10. 修复 eval 重试漏掉 429 限流错误（fixes #28696）
**PR #28891** | OPEN | P3, area/core, size/xl

`withEvalRetries` 此前会漏掉 Gemini API 的 `RESOURCE_EXHAUSTED`（429）错误，导致 eval 执行中误报失败。此 PR 将 429 纳入重试捕获范围。

🔗 https://github.com/google-gemini/gemini-cli/pull/28891

---

## 功能需求趋势

| 方向 | 代表 Issue / PR | 热度信号 |
|------|----------------|---------|
| **Agent / Subagent 稳定性** | #22323（MAX_TURNS 误报）、#21409（挂起）、#28870（ACP 状态） | 最高频关键词，P1/P2 集中 |
| **Browser Agent 增强** | #22232（会话接管与锁恢复）、#21983（Wayland 兼容） | 多日连续出现，弹性与兼容性并重 |
| **Auto Memory / 记忆系统** | #26522（重试）、#26525（脱敏）、#26523（无效 patch）、#26516（质量追踪） | 同一作者批量提交，隐私问题突出 |
| **AST 感知代码分析** | #22745 / #22746 | 面向大型代码库的长期优化方向 |
| **安全与沙箱** | #19873（OS 沙箱）、#28898（子进程安全）、#28876（Cloud Shell 安全） | 安全相关 PR 占比明显提升 |
| **Shell 执行体验** | #25166（卡 Waiting input）、#28862（重构 shellExecutionService） | 高频痛点，官方已着手重构（mac PTY 资源泄漏分支） |
| **评估体系（Eval）** | #24353（组件级评估）、#28891（429 重试） | 工程化评估基础设施持续完善 |
| **模型与路由** | #28893（保留显式 Flash 模型 ID）、#28897（plan-routing 模型可用性） | 模型后处理逻辑需更精细 |

## 开发者关注点

1. **Subagent 结果可信度**：“成功但实际上被打断”比直接失败更危险。开发者普遍希望 Termination Reason 能真实反映中断原因。
2. **默认不主动使用自定义 skills**：用户投入精力配置 agent/skills，但模型几乎不主动触发，影响整体效率。
3. **Auto Memory 存在隐私盲区**：transcript 内容在脱敏前已进入模型上下文，且低信号会话导致无限重试。**多个 Issue 同步提出，预计官方会加快处理**。
4. **Shell 执行卡顿**：命令已完成却显示 waiting input 的问题有多个 👍，直接影响日常使用。
5. **配置与覆盖语义**：settings.json 覆盖被部分组件忽略（browser agent），这类预期落差容易引发用户困惑。
6. **长上下文与工具数量限制**：工具数超过阈值时出现 400 错误，社区期待 agent 能动态缩小工具范围。

> 说明：Discussions 数据未在本次数据源中提供，故本期省略该板块。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-08-19

## 1. 今日速览

昨日发布 v1.0.81-1，新增 **Gemini 3.7 Flash** 模型支持与沙箱配置编辑器快捷键。社区对 1.0.81 沙箱强制启用机制集中爆发抗议，至少 4 个新 issue 指向"沙箱无法关闭/限制过严"；与此同时，**MCP 连接稳定性**（OAuth 回归、孤儿子进程泄漏）与**模型可配置性**（per-agent reasoning effort、per-mode 默认模型）仍是社区两大核心诉求。

## 2. 版本发布

### v1.0.81-1

**新增**
- 支持 **Gemini 3.7 Flash** 模型
- `/sandbox` 中新增 `Ctrl+E` 快捷键，可直接在编辑器中打开 `settings.json`
- `--usage-output-file` JSON 输出新增 **per-agent 用量指标**

**改进**
- Schedule Manager 中可用 `x` 键移除定时 `/every` 与 `/after` 提示

**修复**
- 修复"Turning allow-all off from..."（原文截断，以官方 release notes 为准）

## 3. 社区热点 Issues

### 🔥 高赞诉求

1. **[#2904] 自定义 Agent 应支持 reasoning effort 配置**（评论 7 · 👍 20）
   `.agent.md` 已支持 `model` 字段固定模型，但无法按 agent 单独设置推理强度，只能全局 `--effort`。本期最高赞 issue，社区呼声强烈。
   https://github.com/github/copilot-cli/issues/2904

2. **[#2958] 支持按模式配置默认模型（plan mode vs autopilot）**（评论 4 · 👍 16）
   用户希望计划模式与自动驾驶模式可分别指定默认模型，目前仅支持全局配置。
   https://github.com/github/copilot-cli/issues/2958

3. **[#3682] BYOK 凭据应支持免重启刷新**（👍 6）
   BYOK provider 的短时凭据（Entra ID OAuth token、AWS STS、OIDC JWT）仅在进程启动时读取一次，过期后必须重启 CLI，对使用临时凭据的企业用户极不友好。
   https://github.com/github/copilot-cli/issues/3682

### 🚨 企业模型目录异常

4. **[#4390] 企业组织启用的模型从目录中缺失**（评论 10 · 👍 7）
   组织显式启用的 Claude Sonnet 5/Opus 5 与 Kimi K3 在 CLI 模型目录中不可见，选择时报 "This model is disabled by your..."。8 月 6 日创建，至今未解决，企业用户受影响严重。
   https://github.com/github/copilot-cli/issues/4390

### 🚨 1.0.81 沙箱回归（集中爆发）

5. **[#4522] 托管策略未决时强制启用沙箱，无视 sandbox.enabled=false**（新增 · 👍 2）
   即使用户显式配置禁用、MDM 无沙箱设置，CLI 仍在服务端策略未决期间强制开启本地沙箱，属于 1.0.81 引入的回归行为。
   https://github.com/github/copilot-cli/issues/4522

6. **[#4521] 沙箱无法关闭**（新增 · 👍 2）
   配置显示 sandbox disabled，但状态栏与执行仍走沙箱路径，疑似配置未真正生效。
   https://github.com/github/copilot-cli/issues/4521

7. **[#4524] 沙箱导致 git 完全不可用**（新增）
   开启强制沙箱后，即使放行整个工作目录与 `~/.copilot`，git 命令仍被拦截，代理跨会话共享信息的通路被切断。
   https://github.com/github/copilot-cli/issues/4524

### 🔧 MCP 与稳定性

8. **[#4490] Atlassian MCP OAuth 在 1.0.80 回归**（评论 3）
   RFC 8414 §3.3 兼容性错误：授权服务器 metadata 发现 URL 与 issuer 不匹配。1.0.78 正常、1.0.80 损坏，属版本间回归。
   https://github.com/github/copilot-cli/issues/4490

9. **[#4392] 认证后 MCP 客户端重建遗留孤儿 stdio 进程**（评论 2）
   启动时先拉起一轮 MCP server，GitHub 认证完成后整体重建客户端并重新 spawn，第一代 stdio 子进程既不 kill 也不 reap，每次启动泄漏一批进程。与 #3698（👍 3）为同一类问题。
   https://github.com/github/copilot-cli/issues/4392

### 💬 交互体验

10. **[#4313] 支持滚动浏览当前会话历史**（评论 8）
    希望用鼠标滚轮 / PageUp / PageDown 在 CLI 中滚动翻阅长会话，评论区讨论热烈，是本期评论数最多的功能请求之一。
    https://github.com/github/copilot-cli/issues/4313

**其他值得关注**：[#1990](https://github.com/github/copilot-cli/issues/1990) 内置 agents（explore/task/code-review）不继承自定义指令（👍 3）；[#4519](https://github.com/github/copilot-cli/issues/4519) 1.0.80 延迟工具搜索报 400 "Missing namespace"；[#4516](https://github.com/github/copilot-cli/issues/4516) JVM 子进程不认 /sandbox 授予的 RW 路径。

## 4. 重要 PR 进展

过去 24 小时仅 1 条 PR 有更新，且与项目无关：

- **[#3163 "ViewSonic monitor"（疑似垃圾 PR）](https://github.com/github/copilot-cli/pull/3163)**
  标题与描述均与 copilot-cli 开发无关（提到 ViewSonic 显示器与 GitHub Action runners），创建于 5 月 6 日，昨日仅有触碰式更新。当前无实质代码合入或功能 PR 进展，建议维护者标记 spam 处理。

## 5. 功能需求趋势

| 方向 | 代表 issue | 热度 |
|------|-----------|------|
| **沙箱机制可配置与稳定** | #4522 / #4521 / #4524 / #4516 | 🔥🔥🔥 1.0.81 集中爆发 |
| **模型配置灵活性** | #2904（👍 20）/ #2958（👍 16）/ #4390 | 🔥🔥🔥 高赞持续 |
| **MCP 生命周期与协议合规** | #4392 / #4490 / #3698 / #4515 | 🔥🔥 持续发酵 |
| **认证与凭据管理** | #3682 / #4096 / #4490 | 🔥🔥 企业关注 |
| **代理与指令自定义** | #1990 / #4438 / #2904 | 🔥 长期诉求 |

特别值得注意：**Gemini 3.7 Flash 正式支持**回应了社区对新一代模型接入的期待，但企业侧模型目录可见性问题（#4390）仍横亘在组织用户面前。

## 6. 开发者关注点

- **沙箱上线阵痛严重**：1.0.81 强制沙箱与本地配置冲突，开发者普遍反馈"关不掉、太严格、git 被卡"；JVM/Maven 等子进程对 `/sandbox` 授予的 RW 路径不生效（#4516），说明沙箱兼容性尚未成熟。
- **MCP 稳定性是高频痛点**：OAuth 握手版本回归（#4490）、stdio 子进程泄漏（#4392/#3698）、`content` 与 `structuredContent` 双重暴露（#4515）、第三方 MCP 工具不可达（#4096），MCP 全链路质量仍需打磨。
- **模型控制权不足**：企业模型目录缺漏、自定义 agent 无法配置推理强度、plan/autopilot 不能分别指定模型，模型层面的"颗粒度控制"是社区一致诉求。
- **配置生效边界问题**：AGENTS.md 启动后不重载（#812）、手动 `/rename` 被自动命名覆盖（#2622）、BYOK 凭据需重启刷新（#3682）、`allowed_directories` 不抑制路径提示（#4482）。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-08-19）

## 今日速览

OpenCode 社区昨日讨论热度集中在 **OpenCode Go 配额计费不一致** 问题，多条 Issue 报告配额消耗异常（高达实际花费的 4 倍），并引发关于 DeepSeek V4 Flash 缓存计费的集体反馈。同时，会话管理与 UI 交互性 Bug（如会话永久卡死、TUI 滚动行为）仍占据较高关注度。PR 方面，**修复 subagent 工具参数**、**移除 Qwen 模型采样强制默认值** 以及 **#376xx 系列自动化清理 PR** 是代码层面的主要动态。

## 社区热点 Issues（10 个）

1. **#3787 [CLOSED] [讨论] [功能] Linear Agent 集成**  
   该 Issue 自 2025-11 创建以来持续活跃（17 条评论、34 👍），讨论将 Linear Issues 直接分配给 Agent 的集成方案。社区对此需求反应热烈，说明项目管理人员对将 AI 代理接入项目管理工作流（如自动分诊、状态更新）有强烈期望。  
   [链接](https://github.com/anomalyco/opencode/issues/3787)

2. **#42985 [OPEN] OpenCode Go 配额用量约为 DeepSeek V4 Flash 展示费用的 4 倍**  
   昨日最受关注的计费问题（15 条评论）。用户发现 8 月 17 日的用量图表显示费用为 $3.31，但 Go 配额消耗量却远高于此，质疑计量存在 discrepancy。社区正在提供更多数据点以确认是否为系统级 Bug。  
   [链接](https://github.com/anomalyco/opencode/issues/42985)

3. **#7648 [CLOSED] 设置项：防止 TUI 流式输出时自动滚动**  
   反馈者希望在 Agent 工作时保持阅读位置，而非被新消息强制滚到底部。获得 18 👍 和 11 条评论，说明该设置对高频 TUI 用户是重要的体验改进点。  
   [链接](https://github.com/anomalyco/opencode/issues/7648)

4. **#7226 [CLOSED] [功能] 实现 `/resume` 和 `/pause` 命令**  
   用户想通过命令暂停/恢复任务，而非仅依赖 Esc 中断。获 28 👍，表明社区对更精细的会话控制有明确需求。  
   [链接](https://github.com/anomalyco/opencode/issues/7226)

5. **#33495 [OPEN] [BUG] Zen 余额不解除免费额度上限**  
   付费用户即使 Zen 余额充足（$20+）仍被 200 请求/免费额度限制，并收到 429 错误。该问题触及付费权益核心，是商业化路径上的关键隐患。  
   [链接](https://github.com/anomalyco/opencode/issues/33495)

6. **#37489 [OPEN] [功能] 模式切换或压缩（compaction）时上下文缓存失效导致性能问题**  
   使用本地 LLM（vLLM/Ollama）的用户在切换模式或压缩时遭遇严重性能下降，推测与缓存失效有关。已获 6 条评论，说明本地推理场景对此敏感。  
   [链接](https://github.com/anomalyco/opencode/issues/37489)

7. **#42935 [OPEN] Go 配额在约 20 分钟内从 11% 飙升至 100%**  
   用户在 DeepSeek V4 Flash 缓存读取率突然降至 0 后遭遇配额极速耗尽，质疑缓存策略或计费逻辑存在缺陷。与 #42985 同属计费异常，但本案例更极端。  
   [链接](https://github.com/anomalyco/opencode/issues/42935)

8. **#43023 [OPEN] Go 配额月度百分比（24%）高于周度（48%）且成本统计不匹配**  
   用户发现月度用量百分比低于周度（数学上不可能），并附详细截图。进一步佐证配额计算逻辑可能存在系统性故障。  
   [链接](https://github.com/anomalyco/opencode/issues/43023)

9. **#43296 [CLOSED] 应用完全无响应（发送 Prompt 后无动作）**  
   用户报告发送消息后应用直接“结束”，无任何执行或报错，重启系统无效。虽然仅 3 条评论，但该严重 bug 影响核心使用流，需紧急排查。  
   [链接](https://github.com/anomalyco/opencode/issues/43296)

10. **#43277 [OPEN] 会话永久卡死（重启后仍无法恢复）**  
    用户报告多个会话在正常使用中突然变为“拒绝新消息”的卡死状态，且重启系统/服务均无法恢复。可能涉及会话状态持久化或锁机制缺陷。  
    [链接](https://github.com/anomalyco/opencode/issues/43277)

## 重要 PR 进展（10 个）

1. **#43282 [OPEN] fix(core): 在 subagent 工具中暴露有效的 subagent ID**  
   修复 subagent 工具描述中 `agent` 字段未列出合法 ID 的问题，关闭 #36761。改善 Agent 间协作时的参数透明性。  
   [链接](https://github.com/anomalyco/opencode/pull/43282)

2. **#43310 [CLOSED] fix(opencode): 移除 Qwen 采样强制默认值**  
   停止为所有 Qwen 模型强制设置 `temperature: 0.55` 和 `top_p: 1`，改为由 provider/服务器默认或用户插件控制，并增加 Qwen3.8 与 Qwen3-Coder 回归测试。  
   [链接](https://github.com/anomalyco/opencode/pull/43310)

3. **#43309 [OPEN] feat(opencode): 将生成的标题长度设为可配置**  
   新增 `title_max_words` 配置项，用户可自定义自动生成标题的字数上限。关闭 #43118。  
   [链接](https://github.com/anomalyco/opencode/pull/43309)

4. **#43308 [OPEN] fix(app): 将 Prompt 拖拽状态限制为仅文件**  
   修复 V2 界面中拖拽普通文本或链接（如 Subagent 卡片）时误触发 Prompt 附件的问题，并增加文件树拖拽的 MIME 类型标记。  
   [链接](https://github.com/anomalyco/opencode/pull/43308)

5. **#43306 [OPEN] docs: 添加 SuperCompress MCP server 示例**  
   在 MCP 服务文档中新增 SuperCompress 示例，展示如何利用其压缩上下文体积（仅压缩上下文，不影响用户指令）。  
   [链接](https://github.com/anomalyco/opencode/pull/43306)

6. **#37684 [CLOSED] feat(mcp): 将运行时添加的 MCP 工具桥接至核心工具注册表**  
   解决运行时 MCP 功能在用户主 Prompt 路径不可用的问题。修复 daemon 中两个独立 MCP 服务（包内与外部）的集成冲突。  
   [链接](https://github.com/anomalyco/opencode/pull/37684)

7. **#37679 [CLOSED] fix(core): 从权限请求中移除 undefined 元数据值**  
   修复 `glob`/`grep` 权限请求中缺失可选参数时元数据出现 `undefined` 值的问题。关闭 #37650。  
   [链接](https://github.com/anomalyco/opencode/pull/37679)

8. **#37678 [CLOSED] feat(session): 通过 PromptInput 和 agent 配置暴露 toolChoice**  
   在内部 LLM 层已支持 toolChoice 的情况下，将其暴露至用户可配置层，并修复相关 bug。  
   [链接](https://github.com/anomalyco/opencode/pull/37678)

9. **#37674 [CLOSED] fix(tui): 稳定对话框鼠标选择行为**  
   修复 DialogSelect 在鼠标选择被回显时导致列表重新居中（行跳动）的问题。  
   [链接](https://github.com/anomalyco/opencode/pull/37674)

10. **#37668 [CLOSED] feat(tui): 新增服务器切换器**  
    为 V2 TUI 增加 `<leader>w` 远程服务器切换器，支持端点验证、URL 规范化，并确保切换时重置服务端作用域的 provider 树（避免会话/缓存泄漏）。  
    [链接](https://github.com/anomalyco/opencode/pull/37668)

## 功能需求趋势

- **计费与配额透明度**：最多人关注。Go 配额计算错误（#42985/#43023/#41391）、Zen 余额不解除限制（#33495）等问题要求 OpenCode 在计费仪表盘、用量统计和配额逻辑上更加透明、准确。
- **会话控制与恢复**：`/resume` `/pause` 命令（#7226）、会话卡死恢复（#43277）均围绕如何更精细地控制 Agent 工作流，并保证异常后的可恢复性。
- **缓存与性能优化**：上下文缓存失效（#37489）和事件表全量快照导致的存储膨胀（#42748/#41175）表明，重度用户对长会话性能与资源占用愈发敏感。
- **UI/UX 精细化调节**：TUI 滚动行为（#7648）、Web UI 控件重叠（#43295）、拖拽误触（#43308）等表明基础交互体验的打磨仍是社区诉求。
- **模型兼容性**：Google Gemini 函数调用 schema 错误（#34130）、Kimi 重放路径修复（#37624）说明多模型适配仍是持续工作重点。

## 开发者关注点

- **计费准确性受损严重**：多条 Issue 显示配额消耗远高于实际金额，部分用户出现 20 分钟内配额从 11% 飙至 100% 的极端情况（#42935）。开发者普遍担忧这类问题会迅速消耗其预算，且缺乏可信的对账机制。
- **会话持久化与可用性**：“永久卡死”状态跨重启存留（#43277）与随机停止响应（#34473）让用户对工作内容的持久性失去安全感，是阻碍其日常使用的严重痛点。
- **配置项可见性与执行力**：用户报告诸如 `agent.compaction.variant` 被忽略（#41578）或 sampling 参数硬编码为模型名（#42775）等问题，说明配置优先级和模型默认行为仍需进一步规范化。
- **存储膨胀**：事件表存储全量消息快照导致数据库膨胀至数 GB（#41175），已有社区工具可缓解，但官方修复尚待推进。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

## Pi 社区动态日报 — 2026-08-19

### 今日速览

过去 24 小时 Pi 仓库共更新 50 条 Issue 与 27 条 PR，虽无新版本发布，但社区动作密集。核心聚焦于三个方向：**TUI 长会话稳定性**（渲染闪烁、界面跳动、Markdown 渲染阻塞）、**上下文压缩机制的可靠性**（阈值不触发、缓存友好压缩），以及**扩展钩子体系与企业级能力**（`disabledCommands`、`agent_recovery_exhausted`、多个新钩子提案）。多个 PR 直指长期痛点，且社区对新模型提供商（如 Amazon Bedrock Mantle）的支持需求明显升温。

---

### 版本发布

过去 24 小时无新版本发布（当前参考版本 v0.84.2）。

---

### 社区热点 Issues

#### 1. GitHub Enterprise Copilot 登录失败：并发策略请求触发 HTTP 429（#8251）
- **链接**：https://github.com/earendil-works/pi/issues/8251
- **状态**：已关闭 | 评论 4
- **要点**：`enableAllGitHubCopilotModels()` 通过 `Promise.all` 并发发送模型策略请求，导致 GitHub Enterprise 限流，使本已成功的设备流登录失效。企业级环境的阻断性问题。

#### 2. TUI 长会话全屏闪烁（#8281）
- **链接**：https://github.com/earendil-works/pi/issues/8281
- **状态**：已关闭 | 评论 4
- **要点**：会话超过约 1 万行时，视口上方内容一旦变化（如工具结果更新），整屏清空重绘并可见闪烁，且在工具结果完成后反复触发。严重影响长会话使用。

#### 3. 自动压缩阈值在 agentic run 期间从不评估（#6339）
- **链接**：https://github.com/earendil-works/pi/issues/6339
- **状态**：已关闭 | 评论 3
- **要点**：`compaction.reserveTokens` 只在 run 边界触发检查（如 `agent.prompt()` 解析后），单次 agentic run 中即使上下文超限也不会自动压缩，是核心逻辑缺陷。

#### 4. OpenAI 客户端创建时未设置超时（#8323）
- **链接**：https://github.com/earendil-works/pi/issues/8323
- **状态**：已关闭 | 评论 2
- **要点**：`createClient` 未传 `timeout`，回退到 SDK 默认 600 秒。本地模型思考超过 10 分钟会被切断。

#### 5. 长对话中界面跳动到顶部再跳回（#8309）
- **链接**：https://github.com/earendil-works/pi/issues/8309
- **状态**：已关闭 | 评论 2
- **要点**：对话变长后每次执行新命令，界面跳至顶部再跳回，Windows 与 macOS 均复现，属长期困扰用户的问题。

#### 6. 零使用量提供商阈值压缩永不触发（#8328）
- **链接**：https://github.com/earendil-works/pi/issues/8328
- **状态**：已关闭 | 评论 1
- **要点**：对不返回 `usage` 块的 OpenAI 兼容提供商，`_checkCompaction` 在 `lastUsageIndex === null` 时直接跳出，自动压缩失效，可能导致超窗失败。

#### 7. 所有 API 路径应发送 Pi 自定义 User-Agent（#8305）
- **链接**：https://github.com/earendil-works/pi/issues/8305
- **状态**：打开 | 评论 1
- **要点**：目前仅在 `xai` provider 上设置了自定义 UA，OpenAI Completions/Responses 路径的 `moonshotai` 等端点泄漏 OpenAI SDK 默认 UA。

#### 8. Anthropic 回退按请求模型而非实际模型定价（#8285）
- **链接**：https://github.com/earendil-works/pi/issues/8285
- **状态**：打开 | 评论 1
- **要点**：服务端回退（如 `claude-fable-5` 拒答后返回 `claude-opus-4-8`）时，仍按请求模型 `calculateCost` 计费，导致成本计算错误。

#### 9. 全屏 TUI 图像渲染错误（#8306）
- **链接**：https://github.com/earendil-works/pi/issues/8306
- **状态**：已关闭 | 评论 1
- **要点**：全屏模式下模型阅读图片时仅显示图片顶部一行，由刷新机制错误导致。

#### 10. 新增 `disabledCommands` 设置以禁用内置斜杠命令（#8325）
- **链接**：https://github.com/earendil-works/pi/issues/8325
- **状态**：已关闭（PR #8326 已实现） | 评论 1
- **要点**：社区建议支持禁用 `/share`、`/export` 等命令，原因是 `/share` 会上传完整会话到 Gist，存在隐私与合规风险。

---

### 重要 PR 进展

#### 1. fix(ai): 阻止 Copilot 策略登录限流（#8254）
- **链接**：https://github.com/earendil-works/pi/pull/8254
- **状态**：打开
- **要点**：先获取账户模型目录再更新策略；仅更新已知、支持工具且未配置的模型；对限流请求做有界延迟重试。同时抽取 `sleep` 工具函数。

#### 2. fix(tui): 长 Markdown 渲染让出事件循环（#8327）
- **链接**：https://github.com/earendil-works/pi/pull/8327
- **状态**：已关闭
- **要点**：引入带单调截止时间的 `RenderContext`，使大 Markdown 渲染分段执行，避免 TUI 在渲染期间完全无响应。

#### 3. feat: 添加 `disabledCommands` 设置（#8326）
- **链接**：https://github.com/earendil-works/pi/pull/8326
- **状态**：已关闭
- **要点**：实现 Issue #8325，禁用命令后显示错误并从自动补全中隐藏。

#### 4. fix(ai): Anthropic 回退使用量计费（#8319）
- **链接**：https://github.com/earendil-works/pi/pull/8319
- **状态**：打开
- **要点**：采用线程化使用成本数据的方式，正确处理 Anthropic 服务端回退模型的实际计费，避免模型目录猜测。

#### 5. feat(coding-agent): 实验性缓存友好压缩（#8307）
- **链接**：https://github.com/earendil-works/pi/pull/8307
- **状态**：打开
- **要点**：将压缩请求追加到主会话以复用热缓存，避免独立压缩会话的高昂成本，仅对自动压缩生效。

#### 6. feat(coding-agent): 添加 `agent_recovery_exhausted` 扩展钩子（#8316）
- **链接**：https://github.com/earendil-works/pi/pull/8316
- **状态**：已关闭
- **要点**：原生重试与溢出压缩重试耗尽后、`agent_settled` 前触发新事件；处理器可返回 `{ retry: true }` 以切换模型继续同一会话。

#### 7. fix(ai): 往返保持 Bedrock redacted 推理内容（#8314）
- **链接**：https://github.com/earendil-works/pi/pull/8314
- **状态**：已关闭
- **要点**：Bedrock Converse 对 OpenAI 模型（如 `gpt-5.6-terra`）返回加密的 `reasoningContent.redactedContent`，此前未被处理，该 PR 使其正确往返。

#### 8. feat(ai): 泛化 OpenAI Completions 思维令牌预算字段（#8275）
- **链接**：https://github.com/earendil-works/pi/pull/8275
- **状态**：已关闭
- **要点**：将 vLLM 的 `thinking_token_budget` 限制推广到 Qwen/SGLang（`thinking_budget`）与 llama.cpp（`thinking_budget_tokens`），并补充兼容文档。

#### 9. fix(coding-agent): 折叠状态下不再渲染工具结果图像（#8303）
- **链接**：https://github.com/earendil-works/pi/pull/8303
- **状态**：已关闭
- **要点**：修复折叠工具输出时仍挂载 Kitty/iTerm 图像子组件，导致折叠视图显示完整图像或为不支持图像的终端保留空白高度。

#### 10. fix(coding-agent): 重试与压缩后恢复继续（#8283）
- **链接**：https://github.com/earendil-works/pi/pull/8283
- **状态**：打开
- **要点**：修复恢复流程边界情况：临时错误后重试也被截断时，压缩会意外保留首个提示，该 PR 恢复正确的继续逻辑。

---

### 热门 Discussions

#### 1. [Q&A] 你喜欢与 Pi agent 一起使用哪些插件/附加组件/扩展？（#3373）
- **链接**：https://github.com/earendil-works/pi/discussions/3373
- **评论** 11 | 👍 8 | 更新于 2026-08-18
- **要点**：用户因不使用 Discord 而转向 GitHub Discussions 征集插件推荐，讨论持续活跃，反映社区对扩展生态的浓厚兴趣。

#### 2. [Ideas] Pi 仓库已达 50MB（排除依赖），是否过于臃肿？（#8294）
- **链接**：https://github.com/earendil-works/pi/discussions/8294
- **评论** 1 | 👍 1 | 更新于 2026-08-18
- **要点**：提议将"极简"作为目标，讨论仓库体积治理的平衡问题。

---

### 功能需求趋势

1. **扩展/插件体系深化**：多个钩子提案并行推进——`agent_recovery_exhausted`（#8316）、持久化前消息替换钩子（#8292）、技能命名空间钩子（#8329）、VirtualTerminal 测试入口（#8289）。社区正在推动 Pi 扩展机制走向深度定制。

2. **缓存与压缩机制优化**：缓存友好压缩（#8307）直接回应压缩成本问题；同时 #6339、#8328 暴露了压缩触发条件在多种场景下失效的缺陷。方向是"更便宜、更可靠"的上下文管理。

3. **新模型与提供商支持**：两个 Bedrock Mantle 相关 PR（#6216、#8302）显示对 Amazon Bedrock 上新 OpenAI 模型（如 `gpt-5.x`）的强烈需求；OpenAI 兼容 API 进入 `/login` 流程（#8320/#8324）降低了自定义端点接入门槛。

4. **企业/组织级配置能力**：`disabledCommands` 从 Issue 到 PR 快速落地（#8325/#8326），说明组织对 `/share` 等命令的合规管控有明确需求；Copilot Enterprise 登录修复（#8254）同样指向企业采用场景。

5. **TUI 长会话体验治理**：从"显示错误"（#8306）向"渲染性能与视觉稳定性"（#8281、#8309、#8327）深入，长会话下的使用体验是当前最集中的体验方向。

---

### 开发者关注点

1. **长会话性能与视觉稳定性**：全屏闪烁（#8281）、界面跳顶（#8309）、渲染卡死（#8327）高频出现，且跨平台复现，影响面大。

2. **超时与重试语义不一致**：OpenAI 客户端无超时（#8323）、`streamSimple` 丢弃 `timeoutMs`（#8321）、长度截断判断错误（#8322）、Codex 错误重试分类缺失（#8138）——"出错了能否优雅恢复"是普遍担忧。

3. **上下文压缩不可靠**：#6339（run 中不触发）、#8328（零 usage 不触发）、#8301（无法与 prompt 交错排队）——压缩机制在多种实战场景下失灵，可能导致超窗失败或费用异常。

4. **成本计算准确性**：#8285/#8319（Anthropic 回退按请求模型计价）、#8315（Bedrock 推理内容丢失）——回退与推理内容的成本/功能正确性受到审视。

5. **Windows 平台体验**：#8282（`find` 扫描大目录死进程）、#8299（npm 包 1.3 万+ 文件导致冷启动慢 5 倍）——Windows 用户面临启动性能和工具链适配的双重痛点。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-08-19）

## 今日速览

今日动态集中在三方面：发布 `v0.21.11-nightly`，新增 live-session registry 与 `qwen sessions ps` 命令；多个 `dsw-eas-*` 全链路验证 Release 对 SWE-bench Verified / Terminal-Bench 2.0 执行了端到端回归；社区围绕多智能体消息语义、会话生命周期与 review/autofix 自动化展开密集讨论，wenshao 的多项 review 基础设施 PR 持续推进。

---

## 版本发布

### v0.21.11-nightly.20260818.259951c53e
- **核心新增**：`feat(core): add a live-session registry and qwen sessions ps`，为会话管理增加实时注册表与命令行查看能力，由 @qqqys 贡献。
- **守护进程**：`feat(daemon): attach skill-togg…`，涉及 daemon 侧 skill 切换相关能力，具体细节待完整 changelog 补充。
- 链接：[Release v0.21.11-nightly.20260818.259951c53e](https://github.com/QwenLM/qwen-code/releases)

### dsw-eas 系列验证 Release
- [dsw-eas-tb-smoke-20260818-r2](https://github.com/QwenLM/qwen-code/releases)：1 个 SWE-bench Verified + 1 个 Terminal-Bench 2.0 的凭证刷新端到端冒烟，SWE-bench 状态 **SUCCEEDED**。
- [dsw-eas-full-20260818-r3](https://github.com/QwenLM/qwen-code/releases)：SWE-bench Verified 500 + Terminal-Bench 2.0 89 全量验证，结果写回 Release。
- [dsw-eas-full-20260818-r2](https://github.com/QwenLM/qwen-code/releases) / [r1](https://github.com/QwenLM/qwen-code/releases)：全量验证，其中 r1/r2 的 SWE-bench Verified 结果标记为 **QUARANTINED**，说明全量跑分数据已被隔离、未直接作为可信结论发布。

---

## 社区热点 Issues

以下从过去 24 小时更新的 50 条 Issue 中筛选 10 个最值得关注的条目：

### 1. [API Error: 400 影响所有消息（#656）](https://github.com/QwenLM/qwen-code/issues/656)
- **标签**：`priority/P1` / `type/bug`
- **为什么重要**：所有请求均返回 `InternalError.Algo.InvalidParameter`，持续 12–16 小时，用户无任何配置变更，属于严重阻断性故障。
- **社区反应**：11 条评论，仍在排查中。

### 2. [PR #9096 遗留的 mutation-verified test-pin 缺口（#9194）](https://github.com/QwenLM/qwen-code/issues/9194)
- **标签**：`priority/P3` / `type/enhancement` / `scope/testing`
- **为什么重要**：自动化评审发现多个测试“契约固定不足”，生产代码发生 mutation 时测试套件仍然全绿，体现测试鲁棒性问题。
- **社区反应**：11 条评论，属于持续 review 硬化工作项。

### 3. [RFC: 原生支持多个独立 Qwen session 协调（#8718）](https://github.com/QwenLM/qwen-code/issues/8718)
- **标签**：`type/feature-request` / `roapmap/multi-agent` / `need-discussion`
- **为什么重要**：提出 leader 分发 worker、观察状态、收集结构化结果的原生协调路径，直指多 agent 编排需求。
- **社区反应**：10 条评论，已关闭，说明已有落地方向（如 live-session registry）。

### 4. [Ctrl+C 取消 prompt 后输入框内容不恢复（#8316）](https://github.com/QwenLM/qwen-code/issues/8316)
- **标签**：`type/bug`
- **为什么重要**：用户取消后丢失长 prompt，需重新输入，属于高频 UX 痛点。
- **社区反应**：10 条评论，开发者希望至少能恢复已取消内容。

### 5. [RFC: 可靠的自动记忆召回（#7040）](https://github.com/QwenLM/qwen-code/issues/7040)
- **标签**：`type/feature-request` / `scope/memory` / `roadmap/context-performance`
- **为什么重要**：记忆召回时机、质量与 telemetry 是长期上下文能力的核心。
- **社区反应**：10 条评论，已有部分 PR 合并或评审中。

### 6. [团队成员无法给 leader 发送普通消息（#9276）](https://github.com/QwenLM/qwen-code/issues/9276)
- **标签**：`type/bug` / `roapmap/multi-agent`
- **为什么重要**：普通完成/状态消息被误判为 shutdown 请求，多 agent 协作流程被破坏。
- **社区反应**：7 条评论，属于当前 multi-agent 方向的高频问题。

### 7. [/compress 后状态栏上下文百分比不刷新（#6806）](https://github.com/QwenLM/qwen-code/issues/6806)
- **标签**：`type/bug` / `category/ui` / `welcome-pr`
- **为什么重要**：压缩后 token 数未同步到 footer，用户无法准确感知上下文占用。
- **社区反应**：7 条评论，已标记 `need-retesting`，期待修复验证。

### 8. [同机 Qwen Code session 互相发消息（#8724）](https://github.com/QwenLM/qwen-code/issues/8724)
- **标签**：`feat` 型 issue
- **为什么重要**：提出 `list_agents` + `send_message` 的跨 session 通信方式，与今日新增 live-session registry 直接相关。
- **社区反应**：6 条评论，是 session 协调方向的重要需求来源。

### 9. [/review 发布时收敛建议的设计与实测（#9278）](https://github.com/QwenLM/qwen-code/issues/9278)
- **标签**：`status/in-progress` / `type/feature-request`
- **为什么重要**：详细记录了 review 失控回路：push 触发评审 → finding → 修复 → diff 变大 → 更多 finding。需要 publish-time 收敛机制。
- **社区反应**：5 条评论，已由 wenshao 跟踪多个交付项。

### 10. [Windows Desktop 重启后 session 被静默自动删除（#8400）](https://github.com/QwenLM/qwen-code/issues/8400)
- **标签**：`priority/P1` / `type/bug` / `scope/windows`
- **为什么重要**：workspace cwd 不匹配导致 session loader 返回 0 条消息，应用静默删除本地 session 镜像，属于数据丢失级问题。
- **社区反应**：4 条评论，当前仍 OPEN。

---

## 重要 PR 进展

以下从过去 24 小时更新的 50 条 PR 中筛选 10 个重要进展：

### 1. [fix(review): 确保所有 softening path 的 COMMENT 都包含 blocker 正文（#9416）](https://github.com/QwenLM/qwen-code/pull/9416)
- **说明**：修复 `compose-review` 在部分路径上漏掉 blocker 正文的问题，保证 REQUEST_CHANGES 被降级为 COMMENT 时评审信息不丢失。

### 2. [feat(review): 支持从磁盘状态恢复被中断的 PR review（#9092）](https://github.com/QwenLM/qwen-code/pull/9092)
- **说明**：`fetch-pr --resume` 可基于本地 report、worktree 与 diff hash 恢复评审，减少重复工作与状态丢失。

### 3. [fix(review): verifier probe 在私有 scratch worktree 中运行（#9221）](https://github.com/QwenLM/qwen-code/pull/9221)
- **说明**：验证器是 review 中唯一“写文件”的 agent，此 PR 将其操作移出共享 worktree，避免污染其他 agent 的工作目录。

### 4. [feat(review): capture-tui 用像素而非文字证明渲染问题（#9273）](https://github.com/QwenLM/qwen-code/pull/9273)
- **说明**：新增 `qwen review capture-tui`，在私有 tmux server 中驱动命令，产出 `.ans` 文本和 `.png` 渲染证据。

### 5. [feat(serve): 增加 live-state session activity watermark（#9396）](https://github.com/QwenLM/qwen-code/pull/9396)
- **说明**：为 session 列表增加活动时间水印，作为活动排序的单调键，修复分页中 session 状态变化的边界问题。

### 6. [feat(goal): 统计 Goal 消耗的 token 数（#9301）](https://github.com/QwenLM/qwen-code/pull/9301)
- **说明**：`GoalRecord` 增加 `tokensUsed`，在 `/stats` 与 `lastGoal` 摘要中展示，提升 token 消耗可观测性。

### 7. [fix(ui): 折叠 history + pending 中重复的 in-flight tool_group（#9421）](https://github.com/QwenLM/qwen-code/pull/9421)
- **说明**：修复 TUI 中最近一次 tool call 在执行中渲染两遍、下一个 tool call 到达后又渲染两遍的显示问题。

### 8. [docs(tools): 明确 list_agents 不包含 Agent Team 团队成员（#9432）](https://github.com/QwenLM/qwen-code/pull/9432)
- **说明**：回应 #9431，在文档中说明 `list_agents` 只列出普通后台 subagent，避免多 agent 场景下的误判与重复启动。

### 9. [fix(serve): 让 channel worker 可访问 TLS daemon（#9392）](https://github.com/QwenLM/qwen-code/pull/9392)
- **说明**：当 daemon 配置 TLS 时，向 worker 下发 `https://` loopback URL，并让启动校验兼容 https，解决 TLS 环境下 channel 无法工作的问题。

### 10. [feat(ci): autofix 失败路径交接评论改为双语（#9386）](https://github.com/QwenLM/qwen-code/pull/9386)
- **说明**：英文正文不变，额外附带折叠的中文说明块，提升中文 contributor 的失败分析可读性。

---

## 热门 Discussions

本次数据源未提供 Discussions 分区数据，本节省略。

---

## 功能需求趋势

从 Issues 与 PR 中可以提炼出以下社区关注方向：

- **多会话与多智能体编排**：`#8718`、`#8724`、`#9276`、`#9430`、`#9431` 持续讨论独立 session 之间的发现、消息路由、团队成员通信与 `run_in_background` 语义。PR `#9396`、`#9432` 也在补齐底层能力。
- **review/autofix 自动化可靠性**：`#9194`、`#9278` 与 `#9416`、`#9092`、`#9221`、`#9273` 等大量 PR 聚焦评审循环收敛、测试固定强度、验证隔离与可视化证据。
- **会话生命周期与持久性**：`#8400` 的 Windows session 自动删除、`#9419` 的游标重复问题，推动 session registry、watermark、`sessionRotation`（`#8927`）等机制。
- **UI/UX 一致性与导出能力**：`#8316`（取消恢复 prompt）、`#6806`（压缩后百分比刷新）、`#8208`（HTML 导出折叠）、`#9354`（跨端 transcript 合同）等，体现对跨 web-shell / VSCode / Desktop 统一体验的诉求。
- **渠道与生态集成**：微信 typing indicator 过期（`#9353`）、钉钉引用消息媒体（`#9347`）、Cursor SDK 子 agent（`#9428`）以及 daemon TLS 支持（`#9392`），说明多渠道与第三方工具链集成正在加速。

---

## 开发者关注点

- **API 稳定性与误判**：`#656` 连续 12 小时以上 400 错误、`#3145` 内容安全检查误报，均直接影响开发者正常使用。
- **多智能体消息语义混乱**：团队成员发消息被当作 shutdown、`run_in_background: false` 失效、`list_agents` 返回空结果具有歧义等问题高频出现，说明多 agent 功能还处于“能跑但语义不完整”阶段。
- **桌面端数据可靠性**：Windows Desktop 因 loader 失败静默删除 session 镜像（`#8400`），对用户是强破坏性体验，社区期待更保守的删除策略。
- **工具与文件处理边界**：`.heic` 图片导致 Responses 会话中止（`#9291`）、`record_artifact` 路径校验缺失（`#9083`）、`writeTextFile` 硬编码 0600 权限（`#9250`）等，都是真实使用中的 edge case。
- **评审自动化流程收敛**：`#9278` 揭示 push → review → fix → 更大 diff 的失控回路，开发者需要“发布时收敛”机制，而不是单纯无限制迭代。
- **Token 与上下文可观测性**：Goal token 统计（`#9301`）与压缩后状态栏刷新（`#6806`）都指向同一个需求：让用户清楚知道当前上下文和 token 消耗，而不仅是模型内部行为。

</details>

<details>
<summary><strong>CodeWhale</strong> — <a href="https://github.com/Hmbown/CodeWhale">Hmbown/CodeWhale</a></summary>

# CodeWhale 社区动态日报 · 2026-08-19

## 今日速览

CodeWhale 今日发布 **v0.9.9**，正式弃用 legacy npm 包 `deepseek-tui`，并修复了窄终端指标、rustdoc lint 等发布前问题。社区当前最关注 TUI 会话/状态回归（#5505、#5512）、持续循环执行需求（#5508），以及中文文档与 Web i18n 收尾（#5482、#5337）。PR 侧则以 CI 超时治理、TUI 命令迁移和 SSE 流式修复为主。

---

## 版本发布

### [v0.9.9](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.9)

- 产品正式名称为 **Codewhale**（Shannon Labs），`codewhale` 命令、npm 包及 release asset 名称保持小写技术标识。
- **legacy npm 包 `deepseek-tui` 已弃用，不再发布新版本**；v0.8.x 的 legacy `deepseek`/`d...` 用户需迁移。
- 根据 [PR #5499](https://github.com/Hmbown/CodeWhale/pull/5499) 的 changelog：
  - 修复 60 列以下窄终端紧凑行指标问题（#5486）
  - 修复 strict rustdoc bare URLs lint（#5489）
  - 同步根/TUI changelog 与贡献者名单

---

## 社区热点 Issues

过去 24 小时共更新 9 条 Issue，以下为值得关注的条目。

### 1. [EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella) (#5316)](https://github.com/Hmbown/CodeWhale/issues/5316)
- 状态：OPEN｜更新 2026-08-18｜评论 7
- 重要性：TUI 拆分的总追踪 Issue，所有子 EPIC/FEAT 最终都汇总至此，是后续架构演进的核心主干。

### 2. [Web: finish the #4934 dictionary spine — retire every isZh branch (#5337)](https://github.com/Hmbown/CodeWhale/issues/5337)
- 状态：OPEN｜更新 2026-08-18｜评论 5
- 重要性：推进 Web i18n 字典化，逐步消灭页面中的 `isZh` 三元表达式，是中文用户界面体验统一的关键工作。

### 3. [release: move npm publication to trusted publishing (#5299)](https://github.com/Hmbown/CodeWhale/issues/5299)
- 状态：OPEN｜更新 2026-08-18｜评论 3
- 重要性：v0.9.5 的 npm 发布仍卡在维护者浏览器登录 + 2FA 人工审批，工作站 npm 凭据过期；社区关注发布自动化是否彻底落地。

### 4. [[enhancement] feat: continuous loop (#5508)](https://github.com/Hmbown/CodeWhale/issues/5508)
- 状态：OPEN｜更新 2026-08-18｜评论 3
- 重要性：用户希望支持“无限回合”执行模式，用于 AI 协调多个子 AI 的场景，是明确的功能需求信号。

### 5. [[bug] System prompt is dropped after `/new` (#5505)](https://github.com/Hmbown/CodeWhale/issues/5505)
- 状态：CLOSED｜更新 2026-08-18｜评论 2
- 重要性：`/new` 后模型收不到系统提示词，只看到折叠的 `<context_update>`，属于较严重的会话状态 bug，已关闭。

### 6. [[bug] Header status indicator never renders since 0.9.7 (#5512)](https://github.com/Hmbown/CodeWhale/issues/5512)
- 状态：OPEN｜更新 2026-08-18｜评论 1
- 重要性：Windows 11 + Windows Terminal 环境下，`cw / whale / dots` 状态指示器自 0.9.7 起不再渲染，0.9.8/0.9.9 均复现。

### 7. [fix(tasks): terminalize stuck durable executions and bound event growth (#5497)](https://github.com/Hmbown/CodeWhale/issues/5497)
- 状态：OPEN｜更新 2026-08-18｜评论 1
- 重要性：Durable Task Manager worker 可能因运行时永不发出 `turn.completed` 而被永久占用；取消逻辑只调一次 `interrupt_turn`，缺少宽限期。

### 8. [[documentation] EPIC(docs): review, restructure, and fully localize documentation to Chinese (#5482)](https://github.com/Hmbown/CodeWhale/issues/5482)
- 状态：OPEN｜更新 2026-08-18｜评论 1
- 重要性：中文用户群体增长，但大量 `docs/` 仅有英文；机器翻译质量差且部分源文档已过期，中文文档本地化是明确痛点。

### 9. [ci: bound release-candidate and artifact workflow jobs (#5496)](https://github.com/Hmbown/CodeWhale/issues/5496)
- 状态：OPEN｜更新 2026-08-18｜评论 0
- 重要性：#5495 只覆盖了 `ci.yml`，但 release-candidate、release-artifacts 和多数 release jobs 仍无超时上限，发布链路可能被死 runner 阻塞。

---

## 重要 PR 进展

过去 24 小时共更新 26 条 PR，以下为其中 10 条重点。

### 1. [feat(tui): show repository context in git chrome (#5511)](https://github.com/Hmbown/CodeWhale/pull/5511)
- 状态：OPEN
- 内容：TUI header 现在显示 `repo · branch*`，linked worktree 显示 `repo/worktree · branch*`，并保留 ahead/behind 计数。

### 2. [fix(tui): restore /title as an independent terminal window title (#5509)](https://github.com/Hmbown/CodeWhale/pull/5509)
- 状态：OPEN
- 内容：此前 `/title` 与 `/rename` 被合并为一件事；本 PR 恢复 `/title` 作为独立的终端窗口标题命令，避免概念混淆。

### 3. [feat(tui): add command context adapters and migration gate (FEAT-015) (#5506)](https://github.com/Hmbown/CodeWhale/pull/5506)
- 状态：OPEN
- 内容：为安全、增量地抽取 slash-command 实现，构建 TUI 拥有的依赖注入与迁移门禁；生产命令组迁移数量为零。

### 4. [docs(i18n): complete Tier 1 of Chinese docs localization (#5507)](https://github.com/Hmbown/CodeWhale/pull/5507)
- 状态：OPEN
- 内容：落实 #5482 的 Tier 1，把已有中文翻译迁入 `docs/zh_hans/` 专属目录，为后续文档本地化打好结构基础。

### 5. [fix(tui): persist approval outcomes before execution (#5491)](https://github.com/Hmbown/CodeWhale/pull/5491)
- 状态：OPEN
- 内容：执行前持久化 approval 请求与最终结果，拒绝陈旧决策；会话恢复时重建已关闭/中断的审批状态。对应 #5360。

### 6. [release: v0.9.9 (#5499)](https://github.com/Hmbown/CodeWhale/pull/5499)
- 状态：CLOSED
- 内容：收尾 v0.9.9 的 changelog、贡献者名单及根/TUI 同步。

### 7. [ci: cap every ci.yml job with timeout-minutes (#5495)](https://github.com/Hmbown/CodeWhale/pull/5495)
- 状态：CLOSED
- 内容：此前 10 个 CI job 均无 `timeout-minutes`，实际受 GitHub 默认 360 分钟限制；今天 Lint job 曾因死 runner 长时间卡住，本 PR 让故障快速失败。

### 8. [perf(skills): keep configured skill prompts stable (#5492)](https://github.com/Hmbown/CodeWhale/pull/5492)
- 状态：CLOSED
- 内容：配置的 skills root 下原生 skills 不再暴露物理路径，模型侧只显示名称和描述，并用 `<configured-skills>` 占位，避免 prompt 不稳定。

### 9. [fix(client): fail closed on SSE UTF-8 split across HTTP/2 DATA (#5404)](https://github.com/Hmbown/CodeWhale/pull/5404)
- 状态：CLOSED
- 内容：修复 DeepSeek Flash on macOS 流式输出中文乱码（U+FFFD）。HTTP/2 DATA 可能拆分多字节字符，旧逻辑在 flush 时用 `from_utf8_lossy` 导致乱码。

### 10. [feat(tui): configurable model-visible read/tool-result budgets (#5405)](https://github.com/Hmbown/CodeWhale/pull/5405)
- 状态：CLOSED
- 内容：为自托管长上下文 DeepSeek V4 用户提供可配置的 read/tool-result 预算上限，避免大文件场景下额外约 20 次读取。

---

## 热门 Discussions

### [Token Usage HIGH (#1473)](https://github.com/Hmbown/CodeWhale/discussions/1473)
- 分区：General / Q&A
- 更新：2026-08-18｜评论 3｜👍 6
- 摘要：用户对比 Claude Code CLI 与 DeepSeek TUI（legacy）后发现，后者在类似工作流下 token 消耗约为前者的 **3 倍**。用户怀疑与 Claude Code 中的 Caveman Skill 配置有关，并询问 CodeWhale 是否有等效机制来控制 token 用量。
- 社区反应：讨论热度较高，评论区围绕成本优化与技能配置展开，6 个 👍 说明这是不少用户共同关心的问题。

---

## 功能需求趋势

综合今日 Issue 与 Discussion，社区最关注的功能方向包括：

1. **无限/持续循环执行**
   - [#5508](https://github.com/Hmbown/CodeWhale/issues/5508) 提出“无限回合”模式，满足 AI 协调多个子 AI 的编排场景。

2. **中文国际化与文档本地化**
   - Web i18n 字典化（[#5337](https://github.com/Hmbown/CodeWhale/issues/5337)）
   - 中文文档全面本地化（[#5482](https://github.com/Hmbown/CodeWhale/issues/5482)）
   - 相关 PR：[#5504](https://github.com/Hmbown/CodeWhale/pull/5504)、[#5507](https://github.com/Hmbown/CodeWhale/pull/5507)

3. **TUI 命令体系与架构重构**
   - EPIC-005 crate 拆分（[#5316](https://github.com/Hmbown/CodeWhale/issues/5316)）
   - FEAT-015 命令上下文适配器（[#5506](https://github.com/Hmbown/CodeWhale/pull/5506)）
   - `/title` 独立命令恢复（[#5509](https://github.com/Hmbown/CodeWhale/pull/5509)）

4. **发布与 CI 自动化可靠性**
   - npm trusted publishing（[#5299](https://github.com/Hmbown/CodeWhale/issues/5299)）
   - CI/Release workflow 超时治理（[#5495](https://github.com/Hmbown/CodeWhale/pull/5495)、[#5496](https://github.com/Hmbown/CodeWhale/issues/5496)）

5. **模型路由与成本控制**
   - 流式 SSE UTF-8 修复（[#5404](https://github.com/Hmbown/CodeWhale/pull/5404)）
   - 可配置 read/tool-result 预算（[#5405](https://github.com/Hmbown/CodeWhale/pull/5405)）
   - 自动路由 classifier 超时可配置（[#5494](https://github.com/Hmbown/CodeWhale/pull/5494)）
   - Token 用量优化讨论（[#1473](https://github.com/Hmbown/CodeWhale/discussions/1473)）

---

## 开发者关注点

- **TUI 回归问题较多**：`/new` 丢失系统提示词（#5505）、Header 状态指示器 0.9.7+ 不渲染（#5512），说明近期版本在会话状态和界面渲染上存在稳定性压力。
- **Token 成本仍是痛点**：有用户反馈 DeepSeek TUI 比 Claude Code CLI 贵约 3 倍，社区希望 CodeWhale 提供更透明的用量控制与等效技能机制。
- **发布流程仍依赖人工**：npm 发布需要浏览器 + 2FA，工作站凭据过期导致自动化断链；开发者期待 trusted publishing 全面落地。
- **任务与 CI 卡死缺超时**：Durable Task worker 可能无限等待，CI job 最多可卡 6 小时；开发者在积极补齐超时与失败快速路径。
- **中文文档与 i18n 缺口明显**：大量 docs 仍只有英文，Web 端 `isZh` 分支未完全收敛，中文社区贡献者已开始系统性推进本地化。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*