# AI CLI 工具社区动态日报 2026-08-18

> 生成时间: 2026-08-17 23:11 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告（2026-08-18）

## 1. 生态全景

当前 AI CLI 工具正经历密集的功能迭代，各主流产品在 MCP 集成、多代理协作、上下文管理和自动化工作流等方向上快速趋同。与此同时，社区反馈高度集中于稳定性问题——内存泄漏、进程挂起、消息丢失成为跨工具共性痛点，反映出“功能扩张先于稳定性治理”的阶段性特征。用户对非中断交互、成本透明度和跨平台一致性的诉求显著上升。整体来看，该生态已从“单一模型终端”演进为“具备复杂编排能力的开发基础设施”，但可靠性仍是决定工具能否进入生产环境的关键瓶颈。

## 2. 各工具活跃度对比

> 说明：Issue/PR 数量为日报中提及的精选条目数或明确更新数，并非仓库全量统计；N/A 表示日报未披露数据或该仓库无此活动。

| 工具 | Issues | PRs | Discussions | Releases |
|---|---|---|---|---|
| Claude Code | 10+（精选） | 10+（精选） | N/A | v2.1.234 |
| OpenAI Codex | 10+（精选） | 10+（精选） | 4 | rust-v0.148.0-alpha.21 |
| Gemini CLI | 10+（精选） | 10+（精选） | N/A | v0.56.0-nightly.20260817 |
| GitHub Copilot CLI | 29（当日更新） | 1 | N/A | 无新版本 |
| OpenCode | 10+（精选） | 10+（精选） | N/A | 无正式 Release |
| Pi | 10+（精选） | 10+（精选） | 2 | 无新版本 |
| Qwen Code | 10+（精选） | 10+（精选） | N/A | v0.21.13 + v0.21.11-nightly |
| CodeWhale | 10+（精选） | 10+（精选） | N/A | v0.9.9（Release PR，已关闭） |
| DeepSeek Harness | N/A（过去 24h 无活动） | N/A | N/A | N/A |

## 3. 共同关注的功能方向

### 3.1 非中断交互与任务控制
- **Claude Code**：`#50246`（198👍）要求消息队列，避免任务执行时强制中断。
- **OpenAI Codex**：`#28969`（195👍）请求禁用 60 秒自动 resolve，用户希望保留操作自主权。
- **Qwen Code**：`#8316` 取消提示后内容不恢复，本质上也是交互流程控制问题。
- **趋势**：用户不再满足于“提示—执行”的单向链路，而是要求对长任务有更强的介入和控制能力。

### 3.2 上下文压缩与长会话可靠性
- **Pi**：`#6879` 上下文越过阈值后 auto-compaction 迟迟不触发，直到被 API 拒绝。
- **Qwen Code**：`#9320` / `#9309` / `#6806` 连续报告压缩后丢失上下文、统计失真、状态栏不刷新。
- **Copilot CLI**：`#4506` 内存看门狗在上下文 23% 时误触发压缩，陷入 OOM 循环。
- **Claude Code**：多起 OOM/内存泄漏 issue（`#82179`、`#87238`）显示长会话资源失控。
- **趋势**：上下文压缩机制已上线但远未成熟，从“能用”到“可信”仍有很大距离。

### 3.3 MCP 生态“最后一公里”
- **Codex**：`#17265` MCP OAuth token 无法自动刷新。
- **Copilot CLI**：`#4480` / `#4439` 因 RFC 8414 issuer 校验过严，GitLab/Atlassian MCP 连接失败。
- **OpenCode**：`#33027` MCP 工具已连接但未暴露给 Agent。
- **Gemini CLI**：`#28863` 修复扩展环境变量注入，防止未授权访问 MCP server。
- **趋势**：MCP 已从“能否连接”进入“连接后是否可靠/安全/可用”的深水区，OAuth 生命周期、进程回收、工具可见性是主要瓶颈。

### 3.4 多代理/子代理编排可靠性
- **Gemini CLI**：`#22323` 子代理被中断后误报 GOAL 成功；`#21409` generalist agent 无限挂起。
- **Codex**：`#15723` 后台子代理完成不唤醒父代理；`#13491` fork worker 继承用户意图导致递归委托。
- **Pi**：`#8250` 修复子代理误报完成、丢失失败原因等问题。
- **CodeWhale**：`#1425` 多子 Agent 并发时因超时会话卡死。
- **趋势**：多代理是各工具重点投入方向，但状态通报、意图隔离、生命周期的可靠性仍是普遍短板。

### 3.5 成本与用量透明化
- **Claude Code**：`#33978` 合并 10+ 个 issue，要求内置 `claude usage` 命令。
- **CodeWhale**：`#5470` 实现 DeepSeek V4 分时定价，按 turn 精确计算成本。
- **Pi**：`#7995` 缺少 Anthropic cache_control 导致 OpenRouter 成本高达 2.5 倍。
- **Copilot CLI**：`#4504` `account.getQuota` 返回错误 resetDate，误导配额管理。
- **趋势**：用户不再接受黑盒计费，成本观测、配额校验和缓存优化正成为基础能力。

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 通用型 Agent，TUI/交互与 Hook 生态完善 | 广泛开发者，偏重 Anthropic 模型用户 | Node/TS，闭源，依赖 Anthropic 模型，功能密度高 |
| **OpenAI Codex** | 与 ChatGPT/Remote Control 深度绑定，多代理 V2 | OpenAI API 用户，移动/远程协同场景 | Rust，闭源，聚焦 GPT-5.6 系列与 MCP 扩展 |
| **Gemini CLI** | Subagent 机制、安全沙箱、SSR 自动修复 | Google 生态开发者，对安全边界敏感 | TS，开源，深度整合 Gemini 3 与 Google Cloud |
| **GitHub Copilot CLI** | 企业级模型目录、组织策略、ACP 协议 | GitHub 企业用户，自动化脚本/IDE 插件 | Rust/闭源，强调与 GitHub 平台及 Copilot 商业版一致性 |
| **OpenCode** | 开源多提供商适配，插件系统与自动化命令（`/loop`、`/workflow`） | 追求可定制化的独立开发者 | TS，开源，灵活模型接入，社区驱动 |
| **Pi** | 终端性能与编辑器体验，多 provider 成本优化 | 极客/资深终端用户，自托管偏好者 | TS/开源，实验性功能激进，注重交互细节 |
| **Qwen Code** | 多端一致（CLI/Desktop/VS Code/Web），Autofix 管线 | 阿里云生态，国内开发者，中文场景 | 闭源+开源组件，通义模型系列，daemon 架构 |
| **CodeWhale** | 轻量级 TUI/IDE 集成，配置向导化 | 小型团队/社区用户，多模型混用 | Rust/开源，强调诚实定价与工具链简化 |
| **DeepSeek Harness** | 无活动（数据缺失） | — | — |

**核心差异**：闭源工具（Claude Code、Codex、Copilot CLI）依赖各自模型生态，迭代快但受制于厂商；开源工具（Gemini CLI、OpenCode、Pi、Qwen、CodeWhale）更强调模型中立性和可扩展性，其中 Pi 与 OpenCode 在终端体验和插件机制上走在前列。

## 5. 社区热度与成熟度

- **第一梯队（高活跃、高关注）**：Claude Code 和 OpenAI Codex 拥有最高的单个 issue 热度（#50246 198👍、#28969 195👍），社区规模大但稳定性投诉密集，处于“功能领先、质量追赶”的阶段。
- **第二梯队（快速迭代）**：Gemini CLI、Qwen Code、Pi、OpenCode 均保持每日多发版/每日多 PR 的节奏；Pi 和 Gemini 对 bug 修复响应迅速（如 Pi 的 `#8258`、Gemini 的 SSR 自动修复合并），但 P1 级可靠性问题偏多，成熟度中等。
- **第三梯队（企业稳定、更新缓）**：Copilot CLI 当日仅 1 个 PR，但 issue 更新达 29 次，说明用户活跃但官方迭代节奏偏保守，适合追求稳定性的企业。
- **早期阶段（社区驱动但基础设施薄弱）**：CodeWhale 修复密集，但 main 分支 CI 全红、flaky test 多，仍处于快速打磨期。
- **停滞**：DeepSeek Harness 无活动，可能已边缘化或迁移。

## 6. 值得关注的趋势信号

1. **稳定性已成为采用瓶颈**：OOM、进程挂起、消息丢失等跨工具高频出现，说明 Agent 的长时运行资源治理仍是未解难题。开发者在选型时应重点考察工具的沙箱隔离、内存上限和超时恢复机制。

2. **MCP 生态进入“深水区”**：认证、进程生命周期、工具可见性等工程细节决定 MCP 能否真正落地。那些能提供完善 OAuth 刷新、进程回收和工具权限控制（如 Codex、Gemini 的安全修复）的工具将获得更多企业信任。

3. **上下文管理存在三条路线**：一是扩大窗口（GPT-5.6 达 872K），二是自动压缩（Pi、Qwen 的 compaction），三是消息队列避免打断（Claude Code #50246）。三者可能长期共存，且压缩可靠性决定长会话体验上限。

4. **多代理编排仍是“无人区”**：子代理状态误报、意图泄漏、唤醒失败等问题意味着当前多代理更适合实验而非生产。若工具能率先解决代理间可靠通信和状态审计，将形成显著差异化。

5. **成本透明度成为基础需求**：从 `claude usage` 到 DeepSeek 分时定价，再到 cache_control 优化，用户正在要求工具将成本观测内建于 CLI。对 API 消费敏感的团队应优先选择已提供用量仪表盘或精确计费的工具。

6. **跨平台支持缺口明显**：Windows ARM64 TUI 崩溃（OpenCode #19130）、Wayland browser agent 失败（Gemini #21983）、macOS Remote Control 回归（Codex #37403）等案例表明，桌面端跨平台体验仍是各工具的共同弱点，为特定平台的优化留出了竞争空间。

---

*报告基于 2026-08-18 各公开仓库社区动态摘要生成，数据以原文为准。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止：2026-08-18 ｜ 来源：github.com/anthropics/skills**

---

## 1. 热门 Skills 排行

> 按 PR 评论数排名（全部 50 条展示 PR 均为 **open** 状态，无 merged/draft）。

| 排名 | PR | 功能概要 | 社区讨论热点 |
|---|---|---|---|
| 1 | [#1298 skill-creator 修复](https://github.com/anthropics/skills/pull/1298) | 修复 `run_eval.py` 恒报 0% recall 的 bug：改为将 eval artifact 安装为真实 skill，并解决 Windows 流读取、触发检测、并行 worker 问题 | 直接回应 Issue #556（12 评论、7 👍，最热 bug 报告）。优化循环一直在"优化噪声"，属生态基础设施级缺陷 |
| 2 | [#514 document-typography](https://github.com/anthropics/skills/pull/514) | 生成文档排版质量控制：孤词换行（1-6 词溢出到下一行）、孤立段落标题、编号错位 | 所有 Claude 生成的文档通病，与官方 docx/pdf 系列强互补；讨论热度高但合并进度偏慢 |
| 3 | [#538 pdf 大小写引用修复](https://github.com/anthropics/skills/pull/538) | 修正 SKILL.md 中 8 处大小写不一致的文件引用（`REFERENCE.md`→`reference.md` 等） | 在大小写敏感文件系统上 pdf skill 直接不可用；无争议的基础修复，却长期搁置，反映官方合并瓶颈 |
| 4 | [#486 ODT skill](https://github.com/anthropics/skills/pull/486) | OpenDocument 三件套：创建/填充 .odt/.ods 模板、解析 ODT 为 HTML，覆盖 LibreOffice 与 ISO 标准场景 | 补齐 docx/pdf 之外的办公文档矩阵缺口；触发条件设计完整 |
| 5 | [#210 frontend-design 改进](https://github.com/anthropics/skills/pull/210) | 重构 frontend-design skill，确保每条指令可在单次会话内被执行，提升可操作性与内部一致性 | 讨论集中在"规范是否具体到能真正 steering 模型行为" |
| 6 | [#83 质量/安全分析器](https://github.com/anthropics/skills/pull/83) | 新增两个元技能：skill-quality-analyzer（结构/文档/示例等五维评估）与 skill-security-analyzer（安全分析） | 触及 Skill 生态的质量治理与安全审查，与 Issue #492 的信任边界讨论形成呼应 |
| 7 | [#1367 self-audit](https://github.com/anthropics/skills/pull/1367) | 交付前先做机械文件校验，再按损害严重度顺序执行四维推理质量审计；宣称通用任何项目/技术栈 | 对应 Issue #1385 "推理质量门禁"提案，作者持续迭代至 v1.3.0，活跃度高 |
| 8 | [#723 testing-patterns](https://github.com/anthropics/skills/pull/723) | 全栈测试模式库：Testing Trophy 模型、单元测试 AAA 模式、React Testing Library、测试命名与边界用例 | 测试生成是 agent 编程高频刚需，内容体系完整，落地风险低 |

---

## 2. 社区需求趋势（来自 Issues）

评论数最高的 Issues 暴露出四个明确方向：

**① 安全与信任边界（当前最热，43 评论）**
[#492](https://github.com/anthropics/skills/issues/492)：社区技能被分发在 `anthropic/` 命名空间下，构成信任边界滥用——用户可能对"看似官方"的技能授予高权限。这是 Skill 生态规模化前的核心安全议题。

**② 组织级共享与协作（16 评论，8 👍）**
[#228](https://github.com/anthropics/skills/issues/228)：要求技能可在组织内直接共享，而非手动下载 .skill 文件再逐个上传。企业采用的关键阻碍。

**③ 工具链可靠性（密集反馈）**
[#556](https://github.com/anthropics/skills/issues/556)（run_eval 0% 触发率）、[#62](https://github.com/anthropics/skills/issues/62)（技能全部消失）、[#189](https://github.com/anthropics/skills/issues/189)（插件重复安装）——社区已从"造技能"转向"打磨技能生产工具"。

**④ 新技能方向**
值得关注的提案型 Issue：
- **[#412 agent-governance](https://github.com/anthropics/skills/issues/412)**：AI agent 系统的策略执行、威胁检测、信任评分与审计追踪
- **[#1329 compact-memory](https://github.com/anthropics/skills/issues/1329)**：符号化标记压缩 agent 长期记忆的上下文占用
- **[#1385 推理质量门禁管线](https://github.com/anthropics/skills/issues/1385)**：任务前校准 → 对抗式审查 → 交付验证三闸门
- **[#1487 上下文窗口优化](https://github.com/anthropics/skills/issues/1487)**：`claude-api` skill 单次注入 ~156k tokens 耗尽上下文，性能问题成为新议题
- 基础设施扩展：[#16 Skills 暴露为 MCPs](https://github.com/anthropics/skills/issues/16)、[#29 AWS Bedrock 支持](https://github.com/anthropics/skills/issues/29)

---

## 3. 高潜力待合并 Skills

以下 PR 讨论活跃、功能完整，且与当前社区诉求高度契合，近期落地概率较高：

- **[#514 document-typography](https://github.com/anthropics/skills/pull/514)** — 排版质量是 AI 文档的普遍痛点，与官方文档 skill 矩阵强互补
- **[#486 ODT skill](https://github.com/anthropics/skills/pull/486)** — 补齐 LibreOffice/ISO 标准文档生态，触发条件设计完整
- **[#723 testing-patterns](https://github.com/anthropics/skills/pull/723)** — 权威测试方法论集成，内容体系完整、合并阻力小
- **[#83 skill-quality-analyzer / security-analyzer](https://github.com/anthropics/skills/pull/83)** — 契合当前质量治理与安全审查热点
- **[#1367 self-audit](https://github.com/anthropics/skills/pull/1367)** — 作者持续迭代（v1.3.0），与 #1385 提案形成联动
- **[#1538 回归 Agent Skills 规范](https://github.com/anthropics/skills/pull/1538)** — 修复 template/SKILL.md 命名不符规范问题；纯合规修复，无功能争议，合并确定性最高

---

## 4. Skills 生态洞察

**一句话总结：** 社区当前最集中的诉求不是"再添一个新技能"，而是把 Skill 的生产工具链（创建 → 评估 → 校验 → 分发）做可靠、做安全——热度最高的 PR 全是 skill-creator 的 bug 修复，评论最多的 Issue 是命名空间信任边界，说明社区正在为 Skill 生态的规模化建立基础设施与治理机制。

---

# Claude Code 社区动态日报 · 2026-08-18

## 今日速览

- 发布 **v2.1.234**，新增 `CLAUDE_CODE_PROJECT_DIR_NAME` 环境变量和 `selection:clear` 键绑定动作。
- 社区最热 issue #50246「消息队列模式」获 198 👍，反映用户对不打断当前任务、排队后续指令的强烈需求。
- 内存泄漏/OOM 类 bug 报告集中爆发（#82179、#87238、#87319 等），成为当前最突出的稳定性痛点。

---

## 版本发布

### v2.1.234
- 新增可选环境变量 `CLAUDE_CODE_PROJECT_DIR_NAME`：为每个会话提供独立配置目录的宿主环境，可为项目日志目录指定短名称。
- 新增 `selection:clear` 键绑定动作，可绑定按键清除应用内选区。

---

## 社区热点 Issues

### 1. [Feature Request] Message queue mode — queue messages instead of interrupting active tasks  
**#50246** | 👍 198 · 评论 60 · 已关闭  
**链接**: https://github.com/anthropics/claude-code/issues/50246  
最受社区欢迎的功能请求之一。用户希望在 Claude 忙碌时排队输入后续指令，而不是只能中断当前任务，避免打断工作流、丢失上下文。

### 2. [Windows] Desktop app: fatal GPU-process crash, MSIX package unlaunchable until Repair  
**#80444** | 👍 5 · 评论 39 · 打开  
**链接**: https://github.com/anthropics/claude-code/issues/80444  
Windows 桌面应用通过内置浏览器标签触发 GPU 进程崩溃（0x060C201E），导致整个 MSIX 包进入不可启动状态，用户需手动修复。影响严重且复现率较高。

### 3. [FEATURE] Built-in Usage Analytics Command (`claude usage`)  
**#33978** | 👍 10 · 评论 20 · 打开  
**链接**: https://github.com/anthropics/claude-code/issues/33978  
合并了 10+ 个相关 issue 的使用量分析功能请求。开发者迫切需要内置命令查看 token 消耗与费用，而目前的第三方方案不够透明。

### 4. [Windows] Desktop app: cross-session messages silently dropped  
**#86298** | 👍 1 · 评论 13 · 打开  
**链接**: https://github.com/anthropics/claude-code/issues/86298  
回归 bug：跨会话消息被静默保留在一个用户界面永远不会显示的审批状态，约 5 分钟后过期。属于高危数据丢失问题。

### 5. [BUG] Pressing Esc to exit /btw mode rejects pending tool-use prompt  
**#64568** | 👍 9 · 评论 10 · 打开  
**链接**: https://github.com/anthropics/claude-code/issues/64568  
在 `/btw` 模式下按 Esc 本意是退出该模式，却被路由到待处理的工具权限请求上，导致误拒绝。TUI 键位冲突问题。

### 6. Bash-tool `grep` shim: catastrophic backtracking — OOM kill on a 20 KB file  
**#82179** | 👍 0 · 评论 4 · 打开  
**链接**: https://github.com/anthropics/claude-code/issues/82179  
Bash 工具内置的 `grep`（ugrep 模拟）在特定正则组合下发生灾难性回溯，20 KB 文件即占满 6.6 GB RSS 被 OOM 杀死。性能高危。

### 7. Per-tool-call helper process leaks to 11.6GB anon RSS and is OOM-killed  
**#87238** | 👍 0 · 评论 3 · 打开  
**链接**: https://github.com/anthropics/claude-code/issues/87238  
新报告：慢速 sandbox 命令执行期间，临时辅助进程在约 2 分钟内膨胀至 11.6 GB 内存并被 OOM 击杀。需重点关注。

### 8. Feature request: persistent voice conversations with Claude Code  
**#83434** | 👍 0 · 评论 1 · 打开  
**链接**: https://github.com/anthropics/claude-code/issues/83434  
来自急救医护人员的真实使用场景：希望获得无空闲断开的双向语音对话能力，用于移动场景下的个人助理操作。

### 9. Whole message renders as raw markdown when first markdown construct starts after character ~500  
**#87185** | 👍 0 · 评论 1 · 打开  
**链接**: https://github.com/anthropics/claude-code/issues/87185  
定位到 root cause：Claude Code 只扫描消息前 500 字符来决定是否渲染 Markdown。首个 Markdown 结构出现在 500 字符之后时整条消息会以原文显示。

### 10. [MODEL] Accepts an explicit finish condition, restates it, then stops short  
**#86261** | 👍 1 · 评论 2 · 打开  
**链接**: https://github.com/anthropics/claude-code/issues/86261  
模型接受并复述明确的完成条件，但仍提前停止。问题跨 5 个 session 复现，属于指令遵循缺陷。

---

## 重要 PR 进展

### 1. fix: remove statsig.anthropic.com from init-firewall.sh  
**#72451** · 已关闭  
**链接**: https://github.com/anthropics/claude-code/pull/72451  
该域名已无法解析，导致 devcontainer 启动时防火墙脚本因 DNS 解析失败退出。移除后可恢复容器环境正常初始化。

### 2. fix: do not abort validate-settings.sh when no lowercase frontmatter keys match  
**#79131** · 打开  
**链接**: https://github.com/anthropics/claude-code/pull/79131  
修复脚本在无匹配项时直接以 exit 1 退出且无诊断信息的问题，并让混合大小写/连字符键也有机会被报告。

### 3. ralph-wiggum: use disable-model-invocation so the model can't self-invoke /ralph-loop  
**#87395** · 已关闭  
**链接**: https://github.com/anthropics/claude-code/pull/87395  
此前 `hide-from-slash-command-tool` 并非受支持字段，导致模型能自行触发 `/ralph-loop`。改用 `disable-model-invocation` 正确限制。

### 4. feat: add container isolation example with guard hook  
**#30692** · 已关闭  
**链接**: https://github.com/anthropics/claude-code/pull/30692  
新增 `examples/container/`，演示在 Podman/Docker 容器中运行 Claude Code，并附带拦截 `force push`、`rm -rf`、PR 合并等危险操作的 PreToolUse 钩子。

### 5. docs: clarify excludedCommands requires :* suffix  
**#29284** · 已关闭  
**链接**: https://github.com/anthropics/claude-code/pull/29284  
明确 `excludedCommands` 匹配带参数命令时必须使用 `:*` 后缀，更新示例与 README，避免用户配置失效。

### 6. fix(plugin-dev): limit frontmatter parsing  
**#84004** · 已关闭  
**链接**: https://github.com/anthropics/claude-code/pull/84004  
修复 Markdown 正文中的 `---` 被误认为 YAML frontmatter 起点的问题，只解析文件头部的 frontmatter 块。

### 7. fix(scripts): propagate top-level failures  
**#84003** · 已关闭  
**链接**: https://github.com/anthropics/claude-code/pull/84003  
重复维护脚本此前用 `.catch(console.error)` 吞掉顶层错误并返回成功，现改为正确传递失败状态，同时保留日志输出与缓冲刷新。

### 8. fix(scripts): validate gh flag values  
**#83999** · 已关闭  
**链接**: https://github.com/anthropics/claude-code/pull/83999  
修复 `gh` 受限 wrapper 中 `--limit` 等旗标缺失值时错误转发原命令的问题，避免绕过参数校验。

### 9. fix(scripts): validate label option values  
**#83995** · 已关闭  
**链接**: https://github.com/anthropics/claude-code/pull/83995  
为 `--add-label` / `--remove-label` 补充值校验，防止 `set -u` 下报未绑定变量错误，或误把下一个位置参数当作 label。

### 10. fix(scripts): reject self-referential duplicates  
**#83993** · 已关闭  
**链接**: https://github.com/anthropics/claude-code/pull/83993  
修复 `comment-on-duplicates.sh` 可能把触发 issue 标记为自身重复项的问题，避免产生自引用评论并误导自动化流程。

---

## 功能需求趋势

- **消息队列 / 非中断交互**：#50246 以 198 👍 成为顶流需求，用户希望在任务执行中排队后续指令，而非抢占或中断。
- **成本与用量可视化**：#33978 及多个关联 issue 呼吁内置 `claude usage` 命令，统一展示 token 消耗、费用与额度。
- **语音交互深化**：#83434 等 requests 显示用户在移动/免提场景下需要持久双向语音会话，而非当前易断开的模式。
- **跨平台稳定性与内存治理**：大量 issue 集中在 Windows 桌面应用崩溃、消息丢失、Linux 下 grep/OOM、helper 进程内存泄漏，平台稳定性和资源控制是社区最关切方向。
- **TUI/UX 细节优化**：#64568 Esc 误拒绝、#87185 Markdown 渲染阈值、#69087 表单被裁剪等问题显示终端 UI 交互细节仍有不少打磨空间。

---

## 开发者关注点

- **内存失控问题高频出现**：grep shim 灾难性回溯（#82179）、per-tool helper 进程 11.6GB 泄漏（#87238）、后台 Bash 进程 OOM（#87319）等多条报告指向 Claude Code 在复杂命令或长会话中存在严重内存管理缺陷。
- **数据丢失与消息可靠性**：#86298 的跨会话消息静默丢弃、#87398 的 legacy 会话不可加载等问题会让用户对工具产生不信任感。
- **模型指令遵循仍是痛点**：#86261 等 issue 显示模型在具体完成条件、停止时机上仍有偏差，尤其长会话中不稳定。
- **脚本与配置工具链不足**：多个 PR 修复 `validate-settings.sh`、`gh` wrapper、`test-hook.sh` 等开发者工具脚本的边界条件和错误处理，说明插件/脚本开发体验亟待加强。
- **Windows 平台问题集中**：桌面应用 GPU 崩溃、MSIX 不可启动、映射网络驱动器会话列表为空等报告，让用户期待 Anthropic 加大对 Windows 端的投入。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-08-18）

## 今日速览

今日 Codex 发布 `rust-v0.148.0-alpha.21` 迭代版本。社区最热议题围绕“新增禁用 60 秒自动提问设置”（#28969，195👍/78 评论）展开，同时 MCP OAuth 令牌刷新、macOS 远程控制回归、会话存储膨胀等稳定性问题逐步升温。技术侧，GPT-5.6 上下文窗口上限提升至 872K、TUI 新增 agents 概览面板等 PR，为近期功能演进提供了重要信号。

## 版本发布

| 版本 | 类型 | 说明 |
|---|---|---|
| `rust-v0.148.0-alpha.21` | Release | 0.148.0-alpha 系列迭代版本，官方发布说明暂未附详细变更日志。结合同日合并 PR，开发主线集中在 MCP 工具链（rmcp 3.1.2、OAuth 元数据）与 TUI 交互（agents dashboard、终端重绘优化）方向。 |

## 社区热点 Issues

### 1. 请求新增禁用“60 秒自动 resolve”的设置
- [Issue #28969](https://github.com/openai/codex/issues/28969) | 78 评论 / 195 👍
- **为什么重要**：当前 Codex 在提问后约 60 秒自动执行默认操作，用户希望可关闭该行为。该议题获得近期最高赞数，反映用户对操作自主性的强烈刚需。
- **社区反应**：评论区围绕“自动 resolve 是否应该默认可配置”展开，多名用户给出了具体使用场景（长任务、等待外部输入等）。

### 2. 路由 MCP 服务器 OAuth 令牌无法自动刷新
- [Issue #17265](https://github.com/openai/codex/issues/17265) | 31 评论 / 57 👍
- **为什么重要**：Codex 已持久化 `refresh_token`，但 access token 过期后不自动刷新，导致 MCP 工具调用直接失败。这是 MCP 生态落地的关键“最后一公里”问题。
- **社区反应**：影响范围集中在重度 MCP 用户，评论中多次讨论临时绕过方案（手动删凭据重登）。

### 3. ChatGPT ChatGPT 登录流程失效，Plus 用户被引导至 add-phone
- [Issue #24990](https://github.com/openai/codex/issues/24990) | 26 评论 / 22 👍
- **为什么重要**：预期中的“ChatGPT 登录”模式对 Plus 订阅者不可用，无论标准登录还是 `--device-auth` 都被强制跳转 `auth.openai.com/add-phone`，直接阻断了 CLI 接入。
- **社区反应**：用户表达了对账号验证链路强绑定手机号的困惑与不满，希望恢复邮箱/密码或设备码直登路径。

### 4. [macOS] Desktop 无法恢复 Remote Control / CLI 线程（回归）
- [Issue #37403](https://github.com/openai/codex/issues/37403) | 21 评论 / 17 👍
- **为什么重要**：8 月 7 日更新后，用户无法通过 ChatGPT 手机 Remote Control 恢复 Mac 上的 Codex CLI 线程，报错 `already has an active writer`。该回归打破了“白天桌面、夜间远程”的典型工作流。
- **社区反应**：多位用户确认不同版本上可复现，已定位为桌面端窗口/线程写入权冲突。

### 5. macOS 上 Computer Use / MCP 辅助进程累积，引发 HID 延迟与系统卡顿
- [Issue #25744](https://github.com/openai/codex/issues/25744) | 19 评论 / 3 👍
- **为什么重要**：长期运行的 Codex 会话会累积大量未回收的 MCP 帮助进程与 zombie 子进程，最终导致 macOS HID 输入延迟、WindowServer/TCC 阻塞。属于资源泄漏类系统级问题。
- **社区反应**：用户要求明确子进程回收策略，并建议增加进程树上限或看门狗机制。

### 6. 后台子代理完成时不唤醒调用方代理
- [Issue #15723](https://github.com/openai/codex/issues/15723) | 18 评论 / 8 👍
- **为什么重要**：后台启动的 subprocess/subagent 在结束任务后不会通知父代理继续执行，导致整体任务停摆。这是多代理编排的可靠性缺陷。
- **社区反应**：用户在多代理长任务场景下频繁踩中，期望提供显式 `await`/事件通知机制。

### 7. Multi-agent V2 全量历史 fork 导致会话存储膨胀至 110+ GiB
- [Issue #34268](https://github.com/openai/codex/issues/34268) | 9 评论 / 6 👍
- **为什么重要**：开启 Ultra 推理与 multi-agent V2 后，`$CODEX_HOME/sessions` 出现乘法级膨胀，主要是 fork 时重复复制历史 compaction 快照与内联图片。对磁盘和启动性能的冲击极为显著。
- **社区反应**：用户建议对 fork 快照进行去重/引用计数，并提供会话存储配额管理。

### 8. Forked Worker 继承父级用户意图，产生递归委托
- [Issue #13491](https://github.com/openai/codex/issues/13491) | 10 评论 / 11 👍
- **为什么重要**：子代理 fork 时继承了父级对话中的“用户意图”，并误将其解释为直接指令，导致子代理尝试递归调用另一个子代理。意图边界不清晰影响任务正确性。
- **社区反应**：社区呼吁引入更严格的“意图隔离”机制，区分上下文参考与可执行指令。

### 9. TUI 退格键一次删除多个字符
- [Issue #17793](https://github.com/openai/codex/issues/17793) | 16 评论 / 5 👍
- **为什么重要**：在 TUI 输入框中退格会一次删除多个字符，显著影响交互输入的精确性，尤其在长提示词编辑时容易误删。
- **社区反应**：用户反馈与终端类型有关（如 Kitty），希望修复输入缓冲的退格处理逻辑。

### 10. Desktop `create_thread` 不继承 worktree 任务的自动批准模式
- [Issue #33282](https://github.com/openai/codex/issues/33282) | 9 评论 / 5 👍
- **为什么重要**：桌面端创建 worktree 任务时，`auto-approval` 模式未从父任务继承，导致权限模型不一致，破坏自动化工作流。
- **社区反应**：用户期待桌面端与 CLI 的权限继承逻辑统一，并支持显式覆盖。

## 重要 PR 进展

### 1. 提升 GPT-5.6 最大上下文窗口至 872K tokens
- [PR #39102](https://github.com/openai/codex/pull/39102) | 状态：CLOSED | 作者：copyberry
- **内容**：允许 `gpt-5.6-sol`、`gpt-5.6-terra`、`gpt-5.6-luna` 上下文窗口覆盖上限提升至 872,000 tokens，并从各捆绑模型元数据构建对应的 Amazon Bedrock 条目。社区对更大上下文窗口的诉求得到直接回应。

### 2. 升级 rmcp 至 3.1.2，支持原生 JSON-RPC 解码与 OAuth 元数据
- [PR #39101](https://github.com/openai/codex/pull/39101) | 状态：CLOSED | 作者：copyberry
- **内容**：将 `rmcp` 从 3.0.0 升级至 3.1.2，移除本地兼容层，使用原生 JSON-RPC 解码；保留 `input_required` SSE 结果上的响应元数据，并支持 OAuth 受限资源元数据传递，直接改善 MCP 工具链的鉴权可靠性。

### 3. TUI 新增 agents 概览仪表板
- [PR #39094](https://github.com/openai/codex/pull/39094) | 状态：CLOSED | 作者：copyberry
- **内容**：新增 `/agents` 命令，打开全屏 dashboard，展示从共享 app-server 加载的根会话及子代理状态；支持搜索、导航和按项目/状态分组，每 2 秒刷新（具体间隔以合入版本为准）。

### 4. 新增 `codex queue` 命令，向已有会话投递消息
- [PR #39092](https://github.com/openai/codex/pull/39092) | 状态：CLOSED | 作者：copyberry
- **内容**：`codex queue --thread <THREAD> --message <TEXT>` 可通过 `thread/queue/add` app-server API 向既有会话发送文本消息，支持按 UUID 或精确名称解析活跃会话，覆盖交互、exec 与自定义来源。

### 5. app-server 测试迁移到共享 HTTP 客户端
- [PR #39093](https://github.com/openai/codex/pull/39093) | 状态：OPEN | 作者：celia-oai
- **内容**：将 app-server 的 OAuth 回调和 WebSocket 健康检查测试从直接 reqwest 客户端迁移到共享 `codex-http-client` 抽象，保留 localhost 回调直接连接和 hosted-login 重定向行为。

### 6. codex-otel OTLP/HTTP 导出器支持代理
- [PR #39091](https://github.com/openai/codex/pull/39091) | 状态：OPEN | 作者：celia-oai
- **内容**：让 OTLP/HTTP 日志、追踪、指标及 Statsig 导出器复用 `codex-http-client` 的代理感知阻塞/异步传输，同时保留采集器 TLS/mTLS、信号级超时、企业 CA 包等兼容性。

### 7. 强化 TUI 子代理导航
- [PR #39088](https://github.com/openai/codex/pull/39088) | 状态：CLOSED | 作者：copyberry
- **内容**：统一使用 `/subagents` 作为子代理选择器入口，移除 `/agent` 别名；重新加入已加载子代理线程时不再覆盖其已有设置；通知与审批请求只路由到活动线程。

### 8. 追踪 exec-server 请求全链路
- [PR #39098](https://github.com/openai/codex/pull/39098) | 状态：CLOSED | 作者：copyberry
- **内容**：为进入连接队列的 exec-server 请求创建 span，贯穿分发与响应处理，并在客户端处理的网络策略回调（包括错误路径）中记录请求结果。

### 9. 插件认证状态改从 AuthManager 读取
- [PR #39087](https://github.com/openai/codex/pull/39087) | 状态：CLOSED | 作者：copyberry
- **内容**：`PluginsManager` 改为共享 `AuthManager` 实例，动态读取当前认证模式与凭据，用于插件发现、启动任务、CLI 配置等流程，避免状态不一致。

### 10. 加固 Windows 沙箱配置以防范 reparse point 攻击
- [PR #39083](https://github.com/openai/codex/pull/39083) | 状态：CLOSED | 作者：copyberry
- **内容**：在 Windows 提权沙箱预置阶段，避免跟随用户 `CODEX_HOME` 路径中的目录 junction / reparse point 错误应用 ACL，防止配置加密 ACL 到非预期目标目录。

## 热门 Discussions

### 💡 Ideas
- [Memories in Codex（#12567）](https://github.com/openai/codex/discussions/12567)：社区在讨论“记忆”功能的形态，核心问题包括：模型引用历史线程记忆时用户需要多大程度的可解释性（1~5 分）；以及如何在多线程间共享记忆。目前 33 评论 / 14 👍，是讨论区最活跃话题。
- [Weekly reset / bonus credits for Codex users（#39048）](https://github.com/openai/codex/discussions/39048)：建议参照 Grok/xAI 等竞品提供每周额度重置或奖励积分机制，以提升持续使用体验。尚处于早期讨论阶段。

### 🛠️ Show and tell
- [Codex How To v0.3：工程化循环 + Review-first 工作流（#36262）](https://github.com/openai/codex/discussions/36262)：作者维护了一套独立工程化教程，主张“生成的代码是中间结果”，并以 `scope → reproduce → implement → review` 作为核心闭环，适合寻求系统化 Codex 工作流的开发者。
- [Is Codex Working? 一个 Windows 托盘小工具（#39044）](https://github.com/openai/codex/discussions/39044)：作者制作了一个托盘应用，实时显示 Codex 是否真正在推进还是卡住，解决长任务中“看似忙碌但无进展”的盲区。

## 功能需求趋势

1. **MCP 生态成熟度**：OAuth 令牌自动刷新（#17265）、MCP 服务器进程生命周期管理（#25744、#38754）、node_repl 工具挂载（#33599）成为 MCP 落地的主要门槛。
2. **远程/移动协同**：Remote Control 断点续传（#37403）、移动端所建线程与桌面项目关联（#23418）、远程 TUI 工作区信任提示（#39082）正在被持续完善。
3. **多代理/子代理可靠性**：子代理完成唤醒父代理（#15723）、fork 意图隔离（#13491）、fork 快照去重（#34268）是编排能力的关键短板。
4. **上下文窗口扩展**：GPT-5.6 系列在 PR #39102 中提升至 872K 上下文，社区对“长对话不丢背景”的诉求仍在增长。
5. **权限与沙箱一致性**：auto-approval 继承（#33282）、项目信任（#39082）、Windows 沙箱 reparse point 加固（#39083）显示权限模型正在走向更严格的收敛。
6. **会话数据治理**：fork 快照重复拷贝、TUI 重放缓冲无上限（#39081）等内存/磁盘问题成为社区高频反馈点。

## 开发者关注点

- **稳定性回归**：macOS Desktop 更新后无法恢复远程控制线程（#37403）；Windows 桌面端切换会话时出现 350–800 MiB/s 持续读循环（#38518），均属近期回归，影响核心使用体验。
- **MCP 链路痛点**：令牌过期即挂断（#17265）、MCP 进程每轮重复拉起且不回收（#38754）、Desktop 端静默丢失 node_repl 工具（#33599），是 MCP 用户最集中的痛点。
- **子代理行为不可预测**：后台子代理完成不唤醒（#15723）、fork worker 将“用户意图”误当直接指令（#13491），在多代理任务中亟待机制性修复。
- **资源泄漏**：macOS 上 Computer Use 辅助进程与 zombie 进程累积导致系统级卡顿（#25744）；多代理会话可膨胀至 110+ GiB 存储（#34268），长期任务成本显著。
- **权限一致性**：桌面端 worktree 任务不继承父任务的 auto-approval（#33282）；Windows 沙箱对 `CODEX_HOME` 下 junction 路径存在向非预期目录应用 ACL 的风险（#39083）。
- **登录与认证体验**：Plus 用户被强制跳转 add-phone 导致 CLI 无法登录（#24990）；插件认证状态从 AuthManager 统一读取（#39087）是改善这一问题的后端信号。
- **本地化与可访问性**：zh-CN 将 xhigh/ultra reasoning 均渲染为“极高”（#31963），说明 i18n 映射粒度过粗；macOS 上 Control+B 在 Quick Chat 输入时误触发侧边栏切换（#33977），键盘交互细节待打磨。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-08-18

## 今日速览

昨日发布 `v0.56.0-nightly.20260817` 夜间版，主要修复 CLI 包 tsconfig 的 `composite` 标记问题。社区讨论热度集中在 Subagent 行为可靠性上：多个 P1 Bug 反映子代理存在挂起、误报成功、绕过权限等问题；安全相关 PR 同样活跃，涉及扩展环境变量注入与 CI 供应链 RCE 修复。

---

## 版本发布

**v0.56.0-nightly.20260817.g9a15c45fb**  
[查看 Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260817.g9a15c45fb)

仅包含一项变更：由 SSR Agent 自动修复的 [PR #28813](https://github.com/google-gemini/gemini-cli/pull/28813) —— 为 `packages/cli/tsconfig.json` 添加 `composite` 标志，解决构建配置问题。无其他功能更新。

---

## 社区热点 Issues

本月 Issue 区由「Subagent 可靠性」和「安全边界」两个主题主导。以下为过去 24 小时更新最频繁的 10 个 Issue：

**1. Subagent 达到 MAX_TURNS 后恢复被误报为 GOAL 成功** · [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)  
P1 / Bug / 12 条评论  
`codebase_investigator` 子代理在被强制中断后，本应返回失败状态，却以 `Termination Reason: "GOAL"` 上报成功，隐藏了真实的中断原因。这类状态误报会直接污染上层 Agent 的决策判断，是当前 Subagent 机制中最受关注的问题之一。已有关联修复 PR。

**2. Generalist Agent 调用后无限挂起** · [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)  
P1 / Bug / 8 条评论 / 8 👍  
创建于 3 月，至今仍未关闭。用户反馈一旦委托给 generalist agent（即使只是创建文件夹这类简单操作）便会无限挂起，最长等待 1 小时无响应。当前唯一规避手段是在 prompt 中明确禁止使用 subagent——这是社区抱怨最强烈的问题之一。

**3. Shell 命令执行完毕后卡在 "Waiting input"** · [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)  
P1 / Bug / 4 条评论 / 3 👍  
简单 CLI 命令已执行完成，但 TUI 仍显示命令为活动状态并等待输入。问题可稳定复现，与命令行交互体验直接相关，影响用户对 Agent 执行状态判断的信任度。

**4. Browser Subagent 在 Wayland 下运行失败** · [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)  
P1 / Bug / 4 条评论 / 1 👍  
Browser Agent 在 Wayland 显示服务器环境下启动即失败，直接终止且无有效恢复途径。Linux 桌面用户受影响面较大，且与 #22267（Browser Agent 忽略 `settings.json` 中 `maxTurns` 等配置）叠加，反映出 browser agent 整体成熟度不足。

**5. v0.33.0 起子代理绕过权限配置自动运行** · [Issue #22093](https://github.com/google-gemini/gemini-cli/issues/22093)  
P2 / Bug / 3 条评论  
用户在所有配置中明确禁用了 Agent 模式，但升级到 v0.33.0 后 subagent（如 generalist）被自动调用。这属于权限边界被突破的安全类问题，值得所有升级用户关注。

**6. 利用模型 bash 亲和力的零依赖 OS 沙箱与意图路由** · [Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873)  
P2 / Enhancement / 8 条评论 / 1 👍  
长期跟踪的功能增强方向：Gemini 3 模型原生擅长在 bash 中链式调用 POSIX 工具，该提案探讨如何在零依赖 OS 沙箱中安全地释放这一能力，并在命令执行后增加意图路由（用于审批/拦截）。代表社区对「模型原生能力 vs 安全边界」平衡的探索。

**7. Auto Memory 缺少确定性脱敏、日志过多** · [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)  
P2 / Security / 4 条评论  
Auto Memory 后台提取会先把 transcript 内容送入模型上下文，再靠 prompt 指示模型脱敏——意味着敏感的本地内容在脱敏前已被发送。此外服务会记录现有技能内容到日志。属于隐私设计缺陷，建议关注后续修复动向。同系列还有 [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)（低信号会话被无限重试）和 [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)（无效内存补丁被静默跳过）。

**8. 组件级评估体系（Component Level Evalutions）** · [Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353)  
P1 / EPIC / 7 条评论  
Gemini CLI 的内部评估体系升级计划：在已有的 76 个 behavioral eval 测试基础上，扩展到更细粒度的组件级评估，覆盖 6 个支持的 Gemini 模型版本。属于质量基础设施的长期投入，对依赖 CLI 稳定性的开发者是好消息。

**9. Gemini 不会主动使用自定义 Skills 和 Sub-agents** · [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)  
P2 / Bug / 6 条评论  
用户为 gradle、git 等场景定义了明确描述的自定义 skill，但 Gemini 在高度相关的任务中也不会主动调用，只有显式指示时才会使用。模型对工具/技能自主调度的能力仍是当前 Agent 体验的核心短板。

**10. Agent 文件名是符号链接时不被识别** · [Issue #20079](https://github.com/google-gemini/gemini-cli/issues/20079)  
P2 / Bug / 4 条评论  
`~/.gemini/agents/` 下的 `.md` 文件若以 symlink 形式存在（常见于 dotfiles 仓库管理），不会被识别为 Agent。属于自定义 Agent 生态的体验缺陷，对使用符号链接管理配置的用户影响直接。

---

## 重要 PR 进展

过去 24 小时 PR 区有 3 条已合入的安全/稳定性修复、多条 SSR Agent 自动修复推进。选取最值得关注的 10 条：

**1. 扩展环境变更需征得同意，并清洗运行时环境变量** · [PR #28863](https://github.com/google-gemini/gemini-cli/pull/28863)  
安全修复：扩展更新此前可绕过用户同意机制，向 MCP Server 子进程注入未授权环境变量。该 PR 将 MCP server 环境配置纳入 consent 字符串生成逻辑，并对自定义环境变量做清洗。直接堵住潜在的权限绕过漏洞。

**2. 保留子代理恢复时的原始终止原因** · [PR #28815](https://github.com/google-gemini/gemini-cli/pull/28815)（已合并）  
修复 #22323。此前子代理在达到 `MAX_TURNS`/`TIMEOUT` 后，如果最后一次「宽限恢复轮」成功调用了 `complete_task`，`LocalAgentExecutor` 会用成功状态覆盖真实的终止原因。该 PR 确保中断原因能如实向上传递，是本次日报中最值得跟踪的修复之一。

**3. 修复 MessageBus.request 静默挂起** · [PR #28816](https://github.com/google-gemini/gemini-cli/pull/28816)（已合并）  
修复 #22588。`MessageBus.request()` 中 `publish()` 是 floating promise，若失败会静默挂起 60 秒。SSR Agent 自动修复，属于系统稳定性基建修复，能消除一类隐蔽的响应延迟。

**4. 为 TUI 添加执行超时，防止无限挂起** · [PR #28812](https://github.com/google-gemini/gemini-cli/pull/28812)（已合并）  
修复 #21477：从裸 Linux 终端启动 TUI 时，`getProcessInfo()` 依赖 `ps` 命令，若执行不成功会在 "Initializing..." 无限挂起。SSR Agent 自动修复，增加执行超时机制，根治这一类初始化卡死。

**5. 保留执行中的子代理工具调用到 Hook 状态** · [PR #28817](https://github.com/google-gemini/gemini-cli/pull/28817)  
修复 #22589。非根调度器（子代理）首次出现的工具调用若无需审批，会在进入 hook 状态前被过滤丢弃。该 PR 修正为保留这些 `Executing` 状态的调用，对 hook 系统与子代理配合的完整性很重要。

**6. 修复 eval-pr 工作流中的供应链 RCE** · [PR #28740](https://github.com/google-gemini/gemini-cli/pull/28740)  
安全修复：`pull_request_target` 上下文中不可信的 fork 代码可能在特权环境执行（Issue #28336）。该 PR 将 eval 工作流拆分为「安全的 PR 构建步骤」+「受信任的 workflow_run 执行步骤」，是 CI 供应链安全的标准修复模式。

**7. 恢复会话时不再开启新聊天（避免污染 Session 文件）** · [PR #28744](https://github.com/google-gemini/gemini-cli/pull/28744)  
修复 #28693 的一部分。`loadSession` 调用链会在恢复 session 前额外启动一次新 chat，导致 session 文件被污染。该 PR 移除了这条加载路径上两处 fresh-chat 启动中的一处，属于 ACP（Agent Client Protocol）兼容性的重要修正。

**8. 防止布尔 thought 部分泄漏为 `[Thought: true]` 文本** · [PR #28624](https://github.com/google-gemini/gemini-cli/pull/28624)（已合并）  
修复 #23525。内部 thought part 中布尔型 `thought: true` 字段在转文本时会被拼成 `[Thought: true]` 泄漏给用户。修复后在 `toPart` 转换中增加类型检查，保持思维链内容纯净。

**9. 工具调用结构化显示标题优先级修正** · [PR #27863](https://github.com/google-gemini/gemini-cli/pull/27863)  
修复 #23018。`getDisplayTitle()` 现在优先使用 `_toolDisplayName`，其次 `_toolName`，最后回退默认。该 PR 虽然改动很小，但能显著改善多工具下 TUI 中工具调用展示的可读性。

**10. 改进 GEMINI_API_KEY 缺失时的错误提示** · [PR #20927](https://github.com/google-gemini/gemini-cli/pull/20927)（已合并）  
老牌社区 PR（3 月发起，昨日关闭）。原本晦涩的报错被替换为清晰的分步指引：说明如何获取 API Key、Mac/Linux/Windows 各平台的环境变量配置命令、以及官方文档链接。虽然只是 DX 优化，但价值在于大幅降低了新用户的首次配置门槛。

---

## 功能需求趋势

综合近期 Issues 与 PR 内容，社区最关注的功能方向集中在以下四类：

1. **Subagent 行为可靠性**（高频，多为 P1）  
   - 执行状态误报（#22323）、进程挂起（#21409）、权限绕过（#22093）、恢复策略（#28815）等问题的修复持续占据开发资源，是当前 CLI 体验的最大短板。
   - 期望方向：subagent 轨迹可通过 `/chat share` 分享（#22598）、bug 报告中包含 subagent 上下文（#21763）。

2. **Agent 的模型原生能力释放与安全平衡**  
   - 让模型更充分地调用 bash 工具（#19873），同时通过 OS 沙箱、意图路由、危险操作抑制（#22672）建立安全边界。核心矛盾是：模型越自由，越需要可靠的安全护栏。

3. **Auto Memory 记忆系统的安全性与可控性**  
   - 多个 issue（#26522 / #26523 / #26525）集中暴露记忆系统三方面问题：低信号会话无限重试、无效补丁静默跳过、敏感内容在脱敏前已进入模型上下文。隐私与效率是核心诉求。

4. **组件级质量评估体系**  
   - 从 "behavioral evals" 向组件级评估演进（#24353），引入 AST 感知工具（#22745 / #22746）提升上下文读取效率。这类内部基建投入虽然不直接面向用户，但是所有用户最终受益。

---

## 开发者关注点

从社区反馈中可提炼出以下高频痛点：

- **「挂起」类问题反复出现**：generalist agent 挂起（#21409）、MessageBus 静默失败（#28816）、TUI 初始化卡死（#28812）、shell 执行后不结束（#25166）——多个独立问题指向同一系统性薄弱点：任务终止与超时恢复的可靠性不足。
- **状态报告与真实情况脱节**：「MAX_TURNS 后仍显示 GOAL 成功」（#22323）这类误报对 Agent 自动化场景是致命的，它会隐瞒故障并破坏上层决策链。
- **安全边界被突破的担忧**：升级后 subagent 绕过权限自动运行（#22093）、扩展可注入环境变量（#28863）等案例印证了社区对「自主 Agent 失控」的普遍焦虑。权限模型需要默认更保守，同意机制需显式覆盖到所有副作用的操作。
- **模型对工具/技能的使用不够智能**：不会主动调用用户定义的 skills（#21968）、乱建临时脚本污染工作区（#23571）、忽略 `settings.json` 配置（#22267）——模型与用户配置/自定义资产之间的「协作契约」尚未建立。
- **平台兼容性仍需打磨**：Wayland 下 browser agent 失败（#21983）、symlink 不被识别（#20079）、macOS PTY 资源泄漏，这类非主流环境问题虽然优先级不高，但会持续削弱 CLI 的跨平台可信度。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

## GitHub Copilot CLI 社区动态日报
**日期：2026-08-18**

---

### 今日速览

昨日社区共更新 29 个 Issue 与 1 个 PR，焦点集中在 **MCP OAuth 认证回归、长会话稳定性与内存看门狗异常** 三大类问题。其中，1.0.79 版本引入的 RFC 8414 issuer 校验过严导致 GitLab/Atlassian MCP 服务器连接失败，成为社区讨论最热烈的回归问题；同时，`--no-alt-screen` 被静默移除引发用户强烈不满。

---

### 版本发布

过去 24 小时无新版本发布。

---

### 社区热点 Issues

以下为 10 个最值得关注的 Issue（按影响力与严重程度排序）：

**1. [已关闭] SHIFT+ENTER 执行提示而非换行 — Issue #1481** ⭐ 17 👍 / 28 💬
[github/copilot-cli Issue #1481](https://github.com/github/copilot-cli/issues/1481)
几乎所有聊天应用中的通用快捷键 `SHIFT+ENTER` 在 Copilot CLI 中会直接执行提示词，而换行却需要使用 `CTRL+ENTER`。用户普遍认为这是违反直觉的交互设计，该问题虽已关闭，但 17 个赞与 28 条评论显示其影响范围之广。

**2. [开放] 组织启用的模型不出现在目录中 — Issue #4390** ⭐ 7 👍 / 8 💬
[github/copilot-cli Issue #4390](https://github.com/github/copilot-cli/issues/4390)
Copilot Business 组织显式启用的模型（如 Claude Sonnet 5/Opus 5、Kimi K3）在 CLI 中不可用，所有 Anthropic 模型均报 "disabled by your organization"。企业用户无法正常使用已采购的模型，涉及组织级配置在 CLI 传播链路中的缺失。

**3. [开放] Atlassian MCP OAuth 在 1.0.79 上回归失败 — Issue #4480** ⭐ 6 👍 / 5 💬
[github/copilot-cli Issue #4480](https://github.com/github/copilot-cli/issues/4480)
从 1.0.71 升级到 1.0.79 后，连接 `mcp.atlassian.com` 时 OAuth 发现流程报 `Incompatible authorization server: issuer does not match`。1.0.79 的 RFC 8414 issuer 校验比之前版本更严格，属于典型回归，用户建议作为 hotfix 处理。

**4. [已关闭] GitLab MCP OAuth 元数据被 RFC 8414 issuer 不匹配拒绝 — Issue #4439** ⭐ 3 👍 / 5 💬
[github/copilot-cli Issue #4439](https://github.com/github/copilot-cli/issues/4439)
与 #4480 同源问题。GitLab Self-Managed MCP 服务器的 OAuth 元数据无法通过 1.0.79 的 issuer 匹配校验，导致 OAuth 2.0 动态客户端注册失败。该问题已关闭但社区仍持续跟进。

**5. [开放] --no-alt-screen 被静默移除，无替代方案 — Issue #4509** ⭐ 1 👍 / 0 💬
[github/copilot-cli Issue #4509](https://github.com/github/copilot-cli/issues/4509)
自 3 月起已有多个相关报告（#1799、#2334），而本次 1.0.79 直接移除了 `--no-alt-screen` 选项，且无任何弃用提示与替代方案。全屏 alt-screen 模式造成终端渲染异常，用户对此强烈不满。

**6. [开放] 内存看门狗在 23% 上下文时强制压缩，陷入死循环 — Issue #4506** ⭐ 0 👍 / 0 💬
[github/copilot-cli Issue #4506](https://github.com/github/copilot-cli/issues/4506)
长会话进程内存高时，看门狗会在上下文仅使用 23%（400k 窗口）时触发压缩，却只能回收 0.003% 的 token，随后反复循环直至 OOM。问题在于压缩判定依据是**进程内存**而非**上下文压力**，设计上存在缺陷。

**7. [开放] MCP 响应中的 BigInt 导致任务终止 — Issue #4211** ⭐ 2 👍 / 4 💬
[github/copilot-cli Issue #4211](https://github.com/github/copilot-cli/issues/4211)
当 MCP 服务器返回大数字时，CLI 抛出 `TypeError: Do not know how to serialize a BigInt`，导致所有进行中的任务异常终止。该问题已被标记为 triaged，但尚无修复方案，对依赖大整数数据的 MCP 集成影响明显。

**8. [开放] 恢复的会话保留过时连接项 ID，所有提示失败 — Issue #4505** ⭐ 0 👍 / 0 💬
[github/copilot-cli Issue #4505](https://github.com/github/copilot-cli/issues/4505)
恢复远程会话后，每个提示都失败并报 `400 input item ID does not belong to this connection`。重试无效，`/fork` 也无法解决。会话序列化与连接重建逻辑存在状态残留 bug，属于功能级阻塞问题。

**9. [开放] account.getQuota 将请求时间戳当作 resetDate 返回 — Issue #4504** ⭐ 0 👍 / 0 💬
[github/copilot-cli Issue #4504](https://github.com/github/copilot-cli/issues/4504)
JSON-RPC 接口 `account.getQuota` 的 `resetDate` 字段返回的是请求发起的当前时间，而非配额实际重置日期。这会误导开发者的配额管理逻辑，属于 API 数据正确性问题。

**10. [开放] 自定义代理忽略 agent.md 中配置的模型 — Issue #2950** ⭐ 2 👍 / 1 💬
[github/copilot-cli Issue #2950](https://github.com/github/copilot-cli/issues/2950)
自定义 agent 的 `agent.md` 中设置了 `model` 属性，但交互调用时却使用完全不同的模型，`/model` 选择也被忽略。模型选择逻辑存在针对 agent 上下文的 bug，影响自定义 agent 功能。

---

### 重要 PR 进展

过去 24 小时仅 1 个 PR 更新：

**#4510 [开放] 从 README 移除 GitHub Copilot CLI 文档 — PR #4510**
[github/copilot-cli PR #4510](https://github.com/github/copilot-cli/pull/4510)
作者：prioritizedprotection086 | 创建于 2026-08-17
该 PR 删除了 README 中关于 GitHub Copilot CLI 的安装说明与使用指南，未附带原因说明。目前状态为开放，社区尚未参与讨论。

---

### 功能需求趋势

从近 24 小时的 Issue 与 PR 中可提炼出以下社区最关注的功能方向：

| 方向 | 代表性 Issue | 说明 |
|------|-------------|------|
| **MCP 生态完善** | #4480 / #4439 / #4211 / #4512 / #4515 | OAuth 兼容性、BigInt 序列化、策略失败降级、content/structuredContent 去重，MCP 已成为一级集成场景，但健壮性仍需加强 |
| **模型与配置灵活性** | #4390 / #2950 / #4275 | 组织模型目录同步、自定义 agent 模型透传、ACP 上下文层级配置，用户要求 CLI 与 Web/API 的模型配置语义对齐 |
| **会话生命周期管理** | #4505 / #4506 / #4508 / #4313 | 恢复后连接残留、内存看门狗误判、长会话指令热更新、历史滚动浏览，长时运行稳定性是核心诉求 |
| **插件系统增强** | #4487 / #4507 / #4513 | 插件依赖解析、非交互模式启用插件、市场缓存按 ref 区分，插件机制正在向全模式、全场景推广 |
| **终端交互回归** | #1481 / #4509 / #4485 / #4455 | Shift+Enter、alt-screen 移除、夜间主题切换、会话选择器对比度，交互细节的回归影响日常体验 |

---

### 开发者关注点

以下为开发者反馈最集中的痛点与高频需求：

1. **MCP OAuth 认证是当前最大痛点。** 1.0.79 的 RFC 8414 issuer 严格校验为 GitLab 和 Atlassian 的远程 MCP 服务器带来了整体性回归，5 个当日更新 Issue 中 2 个与此相关，且用户明确指出 1.0.71 是正常的。社区期待官方确认修复时间线。

2. **长会话可靠性令人担忧。** 恢复会话后卡死（#4505）、内存看门狗误判导致 OOM 循环（#4506）、跨天会话主题/指令漂移（#4485 / #4508）、Docker MCP 容器不释放（#4461），这些问题共同指向：**持续数小时以上的生产级会话仍是不可靠的**。

3. **设置项静默移除引发信任危机。** `--no-alt-screen` 在没有弃用提示的情况下被直接移除（#4509），与官方文档不一致，用户认为 CLI 的变更管理需要更透明。

4. **组织级配置与 CLI 不同步。** 模型目录（#4390）、仓库级插件（#4507）、组织 MCP 策略（#4512）在非交互模式或 CLI 中存在差异，配置面多入口导致行为不统一。

5. **非交互模式（`copilot -p`/ACP）逐渐被重视。** #4275、#4507、#4504 表明自动化脚本和 IDE 插件通过 ACP 协议调用 CLI 的场景正在扩大，但功能一致性尚未完全对齐。

---

*本日报由 AI 技术分析师自动生成，数据来源为 [github/copilot-cli](https://github.com/github/copilot-cli) 公开仓库，涵盖 2026-08-17 00:00 UTC 至 2026-08-18 00:00 UTC 的更新。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-08-18）

## 今日速览

今日社区热点主要聚焦于 **Endpoint 连接故障**（#43105、#43102）——大量用户反馈 `opencode.ai/inference/v1` 接口返回 410 Gone 错误，引发对旧版端点退役的广泛讨论。与此同时，**Windows ARM64 原生包的 TUI 初始化缺陷**（#19130）持续受到关注，成为跨平台支持的头号痛点。PR 方面，**Azure DeepSeek 适配器修复**（#43135）是一个重要进展，将解决模型选择错误的问题。此外，会话管理、MCP 工具集成和插件系统依然是社区讨论的核心议题。

## 社区热点 Issues（10 个）

### 1. Windows ARM64 原生包 TUI 无法初始化
**#19130** | 评论 18 | 👍 12
> Windows 11 ARM64 上非交互命令正常，但 TUI 因 bun:ffi dlopen TinyCC 错误无法启动。
>
**重要性**：跨平台支持的核心阻塞问题，ARM64 用户无法使用 TUI 核心功能，社区关注度高。
🔗 [GitHub Issue](https://github.com/anomalyco/opencode/issues/19130)

### 2. Endpoint 错误：Legacy inference endpoint retired
**#43105** | 评论 15
> 用户使用 `https://opencode.ai/inference/v1` 作为 endpoint 时收到 410 Gone，但 OpenCode 2 beta 可以正常工作。
>
**重要性**：影响所有依赖旧版端点的 CLI 工具，属于服务端变更引发的广泛兼容性问题。
🔗 [GitHub Issue](https://github.com/anomalyco/opencode/issues/43105)

### 3. [功能] Plan Mode + 问题工具自动切换 Build 模式
**#7801** | 评论 11 | 👍 32
> Plan 模式询问后需要手动切换 Build 模式，用户希望流程自动化。
>
**重要性**：获得 32 个 👍 的长期功能请求，反映自动化工作流是社区的核心诉求。
🔗 [GitHub Issue](https://github.com/anomalyco/opencode/issues/7801)

### 4. MCP 工具已连接但未暴露给 Agent
**#33027** | 评论 8 | 👍 3
> pdfrag MCP server 连接成功并暴露 6 个工具，但 Agent 的工具列表中不显示。
>
**重要性**：MCP 生态的关键链路断裂，影响所有依赖外部工具服务的用户。
🔗 [GitHub Issue](https://github.com/anomalyco/opencode/issues/33027)

### 5. [功能] 归档会话支持取消归档/恢复
**#24153** | 评论 8 | 👍 11
> 归档目前是单向操作，会话从侧边栏消失后无法恢复。
>
**重要性**：会话管理的基础功能缺失，影响长时间使用 opencode 的重度用户。
🔗 [GitHub Issue](https://github.com/anomalyco/opencode/issues/24153)

### 6. [Bug] Windows 外部目录路径与权限配置不生效
**#36681** | 评论 7
> Windows 路径下 `external_directory` 权限配置无效，且无相关文档。
>
**重要性**：Windows 平台权限模型的适配问题，影响企业环境下的安全和合规使用。
🔗 [GitHub Issue](https://github.com/anomalyco/opencode/issues/36681)

### 7. 非免费模型全部返回 Forbidden 错误
**#43054** | 评论 3 | 👍 1
> 除 `hy3-free` 和 `deepseek flash free` 外，其他模型均报 `Forbidden: {"model":"big-pickle"}`。
>
**重要性**：疑似服务端模型白名单配置错误，阻塞所有付费模型用户。
🔗 [GitHub Issue](https://github.com/anomalyco/opencode/issues/43054)

### 8. 配额耗尽但费用显示异常
**#42995** | 评论 4 | 👍 3
> 显示已产生 $3.02 费用，但 5 小时 $12 配额已耗尽，费用与配额逻辑矛盾。
>
**重要性**：计费逻辑问题直接影响用户体验和信任，属于高频反馈类型。
🔗 [GitHub Issue](https://github.com/anomalyco/opencode/issues/42995)

### 9. Grep 工具在 Windows 上失效
**#40623** | 评论 3
> 未安装 ripgrep 时下载解压失败（受 MSIX PowerShell 7 PSModulePath 影响），且失败结果被缓存。
>
**重要性**：Windows 内置工具链完整性问题，影响基础搜索功能的可用性。
🔗 [GitHub Issue](https://github.com/anomalyco/opencode/issues/40623)

### 10. 旧版插件加载器污染 Hook 数组导致启动崩溃
**#42451** | 评论 3
> 插件导出的辅助函数返回值未经验证就被推入 hooks 数组，导致启动崩溃。
>
**重要性**：插件系统的稳定性和兼容性问题，影响依赖旧版插件的用户升级路径。
🔗 [GitHub Issue](https://github.com/anomalyco/opencode/issues/42451)

## 重要 PR 进展（10 个）

### 1. 修复：Azure 选择 DeepSeek 专用适配器
**#43135** | 状态: OPEN
> 当 Azure 部署使用 DeepSeek 模型时，不再使用通用 Azure 适配器，而是选择 `deepseek()` 专用适配器，以支持 reasoningEffort 等特性。
>
🔗 [GitHub PR](https://github.com/anomalyco/opencode/pull/43135)

### 2. 功能：添加会话循环命令（/loop）
**#37504** | 状态: CLOSED
> 新增内置 `/loop` 命令及 `/proactive` 别名，用于持续执行任务直至满足条件。
>
🔗 [GitHub PR](https://github.com/anomalyco/opencode/pull/37504)

### 3. 修复：恢复会话差异摘要
**#37542** | 状态: CLOSED
> #30127 移除了全量快照 diff，此 PR 恢复会话级差异摘要，关闭 #30877、#32852、#17797。
>
🔗 [GitHub PR](https://github.com/anomalyco/opencode/pull/37542)

### 4. 功能：添加 `/workflow` 多步骤 YAML 流水线命令
**#37499** | 状态: CLOSED
> 用户可在 `.opencode/workflows/` 下定义 YAML 多步流水线，通过 `/workflow` 执行。
>
🔗 [GitHub PR](https://github.com/anomalyco/opencode/pull/37499)

### 5. 修复：会话列表不再启动完整实例
**#37477** | 状态: CLOSED
> `session list` 之前会加载完整实例来查询数据库，现在直接访问数据库，大幅提升启动速度。
>
🔗 [GitHub PR](https://github.com/anomalyco/opencode/pull/37477)

### 6. 修复：过滤提供商返回的非法工具控制 token
**#37472** | 状态: CLOSED
> 某些 OpenAI 兼容提供商返回包含 `<|tool_call_begin|>` 等控制 token 的非法工具参数，现在会被过滤掉。
>
🔗 [GitHub PR](https://github.com/anomalyco/opencode/pull/37472)

### 7. 修复：插件 spinner 在非 TTY 环境输出乱码
**#37505** | 状态: CLOSED
> `opencode plugin install` 在 stdout 非 TTY 时仍使用动画 spinner，现已改为输出纯文本。
>
🔗 [GitHub PR](https://github.com/anomalyco/opencode/pull/37505)

### 8. 修复：fork 会话时清除 reasoning 状态
**#37453** | 状态: CLOSED
> Fork 的会话会复制源会话的 OpenAI reasoning itemId，导致某些 Responses 兼容端点失败。现在 fork 时会清除该状态。
>
🔗 [GitHub PR](https://github.com/anomalyco/opencode/pull/37453)

### 9. 修复：TUI 系统调色板保留
**#37537** | 状态: CLOSED
> 从检测到的终端调色板生成原生 V2 系统主题，保留 ANSI 原始色相，避免颜色被过度合成。
>
🔗 [GitHub PR](https://github.com/anomalyco/opencode/pull/37537)

### 10. 修复：快照 info/exclude 写入失败不再崩溃
**#37494** | 状态: CLOSED
> `Snapshot.sync` 写入 `info/exclude` 失败时（如 UID 不匹配导致的 EACCES），现在会优雅降级而不是 `orDie` 崩溃。
>
🔗 [GitHub PR](https://github.com/anomalyco/opencode/pull/37494)

## 功能需求趋势

1. **会话管理的完善**：归档/恢复（#24153）、自动暂停恢复任务（#43126）、`opencode run --continue` 的安全检查（#43133）——用户对会话生命周期的掌控需求强烈。
2. **新的命令与自动化能力**：`/loop`（#37504）、`/workflow`（#37499）、Plan Mode 自动切换 Build（#7801）——社区希望在 CLI 内实现更复杂的自动化工作流。
3. **插件系统的扩展**：插件 UI surface 扩展至 Web/桌面端（#43132）、旧版插件加载器修复（#42451）——V2 插件 API 的生态建设处于活跃期。
4. **新模型与适配器支持**：Azure DeepSeek 适配器（#43106/#43135）、ChatGPT OAuth 对 GPT-5.6 的支持（#40243）——模型支持始终是最高频的诉求。
5. **性能和资源占用优化**：`session list` 启动加速（#37477）、/tmp 下 .so 文件频繁生成导致 SSD 损耗（#42880）——用户对运行时的资源消耗日益敏感。

## 开发者关注点

1. **Endpoint 与配额问题频发**：多个问题（#43105、#43102、#42995、#43054）指向服务端配置和计费的不稳定。开发者希望 opencode.ai 提供更稳定、透明的服务状态，并对旧端点退役给出明确的迁移指引。
2. **Windows 平台支持仍是短板**：涉及 TUI 崩溃（#19130）、路径权限（#36681）、cmdlet 权限（#36696）、grep 工具（#40623）、npm 安装失败（#41370/ #41595）等多个问题。Windows 用户需要更系统的安装、权限和路径兼容性支持。
3. **MCP 工具集成不稳**：#33027 暴露了 MCP 工具连接成功但 Agent 无法调用的问题，开发者希望 MCP 工具行为能从“连接”到“可见可达”的完整链路得到保障。
4. **历史会话数据的安全**：`--continue` 将 prompt 注入其他活跃会话（#43133），fork 会话导致 reasoning 状态错乱（#37453）——开发者对会话数据隔离和状态管理的要求在提升。

---
*本日报基于 GitHub 公开数据自动生成，仅供技术社区参考。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报（2026-08-18）

数据来源：github.com/earendil-works/pi  
更新窗口：过去 24 小时（主要更新发生于 2026-08-17）

## 今日速览

过去 24 小时 Pi 仓库没有新版本发布，但 Issue、PR 和 Discussion 依然活跃。社区注意力集中在三条主线：**上下文自动压缩不可靠**、**TUI 大文本/大 diff 渲染稳定性**、以及**多模型 provider 兼容性细节**。其中 #6879 成为最热门 Issue，18 条评论 / 17 👍，直指长 agent 回合中上下文超过阈值后压缩迟迟不触发、直到 API 拒绝请求的问题。

## 社区热点 Issues

1. **[#6879] auto-compaction never triggers after context grows past 100% until provider overflow**（OPEN，18 评论 / 17 👍）  
   https://github.com/earendil-works/pi/issues/6879  
   长 agent 回合运行超过 2 小时，上下文越过压缩阈值后继续增长，直到 API 在 373k tokens 拒绝请求才触发压缩。社区认为应在每个 agent 步骤后主动检查压缩。

2. **[#534] config folder is out of place on Linux**（CLOSED，15 评论 / 39 👍）  
   https://github.com/earendil-works/pi/issues/534  
   配置目录直接放在 `$HOME`，不符合 XDG Base Directory Spec。虽然已关闭，但仍是 Linux 平台规范方面关注度最高的 Issue。

3. **[#8029] Very slow performance on moving in prompt editor**（OPEN，9 评论）  
   https://github.com/earendil-works/pi/issues/8029  
   7000 行 prompt 缓存中按一次方向键耗时 1650ms，编辑器性能随文本量线性劣化，需要差分/裁剪渲染方案。

4. **[#3200] Support video/audio content in prompt command**（OPEN，8 评论 / 5 👍）  
   https://github.com/earendil-works/pi/issues/3200  
   希望 `prompt` RPC 在 `images` 之外支持 video/audio，为 Gemma 4、GPT-4o 等多模态模型铺路。

5. **[#2144] Cannot paste images into Pi**（CLOSED，7 评论）  
   https://github.com/earendil-works/pi/issues/2144  
   用户期望像 Claude Code 一样在终端中通过 Ctrl+V 粘贴剪贴板图片；当前 Pi 不支持，影响多模态工作流。

6. **[#7995] openai-responses: no cacheControlFormat 'anthropic' support**（OPEN，4 评论）  
   https://github.com/earendil-works/pi/issues/7995  
   870 次 OpenRouter benchmark 发现：缺少 Anthropic 风格 cache_control 支持，导致 Claude 经 OpenRouter 的成本高达 2.5 倍。

7. **[#8036] Edit tool crashes TUI when rendering a large diff during execution and session resume**（OPEN，4 评论）  
   https://github.com/earendil-works/pi/issues/8036  
   编辑成功后返回 14.5MB diff（HTML 长行）导致 TUI 崩溃，且恢复会话时再次复现；需要渲染体积保护。

8. **[#8166] custom message injected mid-tool-batch breaks tool_calls→tool adjacency on next turn**（OPEN，3 评论）  
   https://github.com/earendil-works/pi/issues/8166  
   扩展在工具批次中注入 `triggerTurn: false` 消息，导致后续每次请求都因 DeepSeek 400 失败，属于扩展集成的关键缺陷。

9. **[#8017] Support Anthropic refusal server side fallback**（CLOSED，3 评论）  
   https://github.com/earendil-works/pi/issues/8017  
   Anthropic 分类器可能将 compaction 判为非法行为并拒绝；需要服务端 `allowed_fallback_models` 机制，PR #8258 已跟进。

10. **[#7756] detectInstallMethod mislabels non-pnpm installs under PNPM_HOME**（OPEN，3 评论）  
    https://github.com/earendil-works/pi/issues/7756  
    只要路径含 `/pnpm/` 就被误判为 pnpm 安装，随后全局包管理器又拒绝管理，导致更新/卸载报错“not managed”。

## 重要 PR 进展

1. **[#8258] fix(coding-agent/ai): anthropic refusal error and fallbacks**（CLOSED）  
   https://github.com/earendil-works/pi/pull/8258  
   复现 `claude-fable-5` 上 compaction 因 Anthropic `stop_reason: "refusal"` 失败；通过添加 `allowed_fallback_models` 元数据支持服务端 fallback。对应 #8017。

2. **[#8120] feat(coding-agent): add experimental append compaction**（OPEN）  
   https://github.com/earendil-works/pi/pull/8120  
   `PI_EXPERIMENTAL=1` 时启用 append compaction，复用 system prompt、tools、transformed context 与 routing session，从而保留 provider prompt cache；standalone 仍为默认。

3. **[#8262] feat(coding-agent): dispatch hooks on every turn-start path**（OPEN）  
   https://github.com/earendil-works/pi/pull/8262  
   修复 `sendCustomMessage(triggerTurn: true)` 不派发 `input` / `before_agent_start` hook 的问题，并加入可取消的 turn preflight。

4. **[#8255] fix(coding-agent): load nested markdown skills**（CLOSED）  
   https://github.com/earendil-works/pi/pull/8255  
   解决 `~/.agents/skills/third-party/child-skill.md` 被静默跳过的问题：除了递归 `SKILL.md` 目录，也正确发现嵌套的独立 markdown skill。对应 #6479。

5. **[#8254] fix(ai): prevent copilot policy login rate limits**（OPEN）  
   https://github.com/earendil-works/pi/pull/8254  
   先拉取账号模型目录再做策略更新；只更新已知、支持工具且未配置的模型；对限流登录请求做有界重试。对应 #7850。

6. **[#8257] Skip project-agent confirm when project is already trusted**（CLOSED）  
   https://github.com/earendil-works/pi/pull/8257  
   子代理扩展在受信仓库中仍会每次弹“运行 project-local agents?”确认框；该 PR 在 `trust.json` 已信任时跳过确认。

7. **[#8253] fix(tui): avoid full-screen flashing when content changes above the viewport**（CLOSED）  
   https://github.com/earendil-works/pi/pull/8253  
   长 transcript 中视口上方内容变化时，过去会清空并重印所有行导致闪烁；现在只清理屏幕并做差分渲染。

8. **[#8250] fix(coding-agent): make subagent progress and failures reliable**（OPEN）  
   https://github.com/earendil-works/pi/pull/8250  
   修复子代理示例过早报“完成”、丢失失败原因、失败被当成正常结果、输出超限等问题，并增加专用失败结果。

9. **[#8246] feat(ai): openai completions reasoning details**（OPEN）  
   https://github.com/earendil-works/pi/pull/8246  
   修复 `openai-completions` 只支持 encrypted `reasoning_details` 的问题，使 OpenRouter 的 signed `reasoning.text` / `reasoning.summary` 可在下轮 assistant replay 中保留。对应 #7994。

10. **[#8241] fix(extensions): emit compaction failed for extensions**（CLOSED）  
    https://github.com/earendil-works/pi/pull/8241  
    压缩失败最初只作为内部 `compaction_end errors`，扩展不可见；新增扩展可见的 `session_compact_failed` 事件，并携带失败 payload。对应 #8175。

## 热门 Discussions

### Ideas
- **[#5474] Hashline: Edit by Content Hash**（2 评论 / 3 👍）  
  https://github.com/earendil-works/pi/discussions/5474  
  编辑工具体验改进：模型用内容哈希定位锚点，而不是重打整行目标文本，避免 whitespace mismatch 和 string-not-found。

### Q&A
- **[#3373] Which plugins, add-ons, or extensions do you most enjoy using with the Pi agent?**（11 评论 / 8 👍）  
  https://github.com/earendil-works/pi/discussions/3373  
  社区在非 Discord 渠道讨论插件生态，可看出扩展、子代理和自定义 hook 是用户高频话题。

### Show and tell
- 本期无新展示帖。

## 功能需求趋势

- **上下文管理与自动压缩**：  
  `#6879` 要求每次 agent 步骤后检查压缩；`#8229` 暴露本地 provider 在 tool turn 之间仍可能溢出；`#8120` 的 append compaction 是当前主攻方向；`#8241` 让扩展能感知压缩失败。  
  https://github.com/earendil-works/pi/issues/8229

- **多模态输入增强**：  
  `#3200` video/audio 进 prompt；`#2144` 剪贴板图片粘贴；`#8220` 希望 GLM-4.6V 视觉模型进入内置模型目录。  
  https://github.com/earendil-works/pi/issues/8220

- **大文本 / 大 diff 渲染稳定性**：  
  `#8029` 大 buffer 编辑卡顿；`#8036` 大 diff 渲染崩溃；`#8028` `fullRender` 超 V8 字符串上限；`#8253` 修复长 transcript 闪烁。  
  https://github.com/earendil-works/pi/issues/8028

- **Provider 兼容性与成本控制**：  
  `#7995` Anthropic cache_control 缺失导致 2.5x 成本；`#7994` / `#8246` reasoning_details 回放；`#8275` thinking token budget 字段通用化；`#8194` / `#8240` 统一 Qwen Token Plan 目录；`#6216` 新增 Amazon Bedrock Mantle OpenAI Responses provider。  
  https://github.com/earendil-works/pi/pull/8275  
  https://github.com/earendil-works/pi/pull/6216

- **编辑器与终端交互**：  
  Discussion `#5474` 提出 Hashline 内容哈希编辑锚点；`#8278` KDE Konsole 下 Shift+Enter 被丢弃；`#8252` tmux 缩到 1 列时 Pi 崩溃。  
  https://github.com/earendil-works/pi/issues/8278  
  https://github.com/earendil-works/pi/issues/8252

- **Linux / 安装规范**：  
  `#534` XDG 配置目录；`#7756` PNPM_HOME 误判安装方式；`#8276` SELinux 容器挂载需要 `:Z` 参数。  
  https://github.com/earendil-works/pi/issues/8276

## 开发者关注点

- **压缩机制仍然不够可靠**  
  长 agent 回合中 auto-compaction 不会主动触发，直到 provider 拒绝；本地 provider 也会在 tool turn 之间收到超大请求。开发者希望压缩检查更前置、更主动。相关：#6879、#8229。

- **大输入路径是主要稳定性风险**  
  7000 行 prompt 编辑器方向键 1.65s、14.5MB diff 让 TUI 崩溃、fullRender 超出 V8 字符串限制。需要差分渲染、输出体积护栏和惰性处理。相关：#8029、#8036、#8028。

- **Provider 细节差异直接带来成本与报错**  
  cache_control、reasoning_details、thinking_budget 等字段名不统一，导致费用上涨、重放失败、400 错误。开发者需要更通用的兼容层。相关：#7995、#7994、#8166、#8275。

- **Hook 事件语义不清晰**  
  `agent_end` 会在重试/压缩前触发，`sendCustomMessage(triggerTurn: true)` 绕过前置 hook，压缩失败事件不对外暴露。这些都会误导扩展开发者和自动化脚本。相关：#8242、#8262、#8241。

- **平台与安装集成仍有摩擦**  
  Linux XDG 配置目录、PNPM 安装检测、SELinux 容器挂载、Konsole Shift+Enter 等问题虽然单个影响面不大，但会显著影响新用户和团队采用。相关：#534、#7756、#8276、#8278。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-08-18

## 今日速览

v0.21.13 与 v0.21.11-nightly 双版本更新；Web Shell Composer 新增文本附件拖拽/粘贴能力。社区反馈集中在 Windows CLI 粘贴回归、上下文压缩后丢失/统计失真等问题，同时 Autofix 自动化管线的运行效率与稳定性成为开发者关注焦点。

## 版本发布

### v0.21.13（最新稳定版）

- **Web Shell 增强**：Composer 支持将文本文件拖拽、粘贴为命名附件，与图片附件并列展示（[#9180](https://github.com/QwenLM/qwen-code/pull/9180)）
- **对话管理**：支持从任意 Assistant 响应处 Fork 对话

### v0.21.11-nightly.20260817.195128a17a

- 新增 autofix footprint 默认关闭门控与位置窗口计数（[#9156](https://github.com/QwenLM/qwen-code/pull/9156)）
- Web Shell 相关修复，具体细节见 Release Notes

### 基准测试（Benchmark-Qwen-Ref: v0.21.13）

过去 24 小时完成多轮 DSW EAS 冒烟与全量验证：
- 全量测试 `dsw-eas-full-20260817-r3`：SWE-bench Verified（500）全绿 + Terminal-Bench 2.0（89）全绿
- 冒烟测试 r1～r4：最终成功通过 1 SWE-bench + 1 Terminal-Bench 端到端验证

## 社区热点 Issues

### #9061 [P1/Bug] Windows CLI 中 Ctrl+V 粘贴完全失效（0.21.x 回归）
- **链接**: https://github.com/QwenLM/qwen-code/issues/9061
- **评论**: 6 | **更新**: 2026-08-17
- **详情**: 自 0.21.0 后的某个版本起，Windows 下 Ctrl+V 在 Qwen Code CLI 中完全无响应。降级到 0.21.0 可恢复粘贴功能。此问题直接影响 Windows 用户日常输入效率，被标记为 P1。

### #8316 [Bug] 取消提示词时内容不恢复到输入框
- **链接**: https://github.com/QwenLM/qwen-code/issues/8316
- **评论**: 9 | **更新**: 2026-08-17
- **详情**: 发送提示后按 Ctrl+C 取消，提示词不会恢复到输入框，用户须重新输入。该问题长期存在（8 月 1 日创建），社区持续关注中。

### #9324 [Bug] 消息被多次传递，打断 Agent 思考
- **链接**: https://github.com/QwenLM/qwen-code/issues/9324
- **评论**: 7 | **更新**: 2026-08-17
- **详情**: 使用 Qwen 3.8 Max 时，Agent 在思考过程中多次收到同一消息并中断当前任务。用户报告称 Qwen Desktop Code 存在消息重复投递问题，可能导致上下文混乱与算力浪费。

### #9320 [Bug] /compression-fast 与 /rewind 后丢失上下文
- **链接**: https://github.com/QwenLM/qwen-code/issues/9320
- **评论**: 5 | **更新**: 2026-08-17
- **详情**: 用户测试不同 Qwen-27B 模型时，先 `/compress-fast`（102k→87k tokens）后启动新 llama-server 恢复会话，发现上下文仍然丢失。压缩/恢复路径的可靠性是高频使用场景中的关键痛点。

### #9309 [Bug] 两次压缩后 token 统计似乎不正确
- **链接**: https://github.com/QwenLM/qwen-code/issues/9309
- **评论**: 3 | **更新**: 2026-08-17
- **详情**: 用户先 `/compress-fast`（170k→7x k）再 `/compress`，截图中显示第二次压缩的统计数值异常，疑似压缩算法在连续调用时存在计算偏差。

### #6806 [Bug] /compress 后状态栏上下文百分比不刷新
- **链接**: https://github.com/QwenLM/qwen-code/issues/6806
- **评论**: 6 | **更新**: 2026-08-17
- **详情**: `/compress` 或 `/compress-fast` 后底部状态栏的上下文使用率保持压缩前数值，直到下一次模型请求才更新。影响用户对上下文情况的实时判断。

### #9296 [P1/Bug] Qwen Autofix 审查事件风暴，浪费 runner 容量
- **链接**: https://github.com/QwenLM/qwen-code/issues/9296
- **评论**: 4 | **更新**: 2026-08-17
- **详情**: 2026-08-16 约 500 次运行中 59% 被取消（294/500），发现四个问题：已关闭/合并 PR 仍触发 autofix、重复地址分发浪费容量等。是 CI 基础设施效率问题，社区质疑自动化管线健壮性。

### #8051 [Feature] 限制多工作区 daemon 资源使用
- **链接**: https://github.com/QwenLM/qwen-code/issues/8051
- **评论**: 9 | **更新**: 2026-08-17
- **详情**: 长期跟踪 issue，要求 `qwen serve` 多工作区 daemon 从“仅计数限制”升级为实际字节级资源约束（请求体、WebSocket 内存等），防止内存耗尽。

### #9250 [Bug] qwen serve 新建文件硬编码 0600 权限，忽略 umask
- **链接**: https://github.com/QwenLM/qwen-code/issues/9250
- **评论**: 4 | **更新**: 2026-08-17
- **详情**: `write_file`、`edit` 等工具创建新文件时固定为 0600，不遵守 umask，且无配置开关。影响多用户共享文件场景，已有对应 PR 在修复中（见 PR #9364）。

### #9315 [Bug] 新版本字段文本无法复制（Ubuntu）
- **链接**: https://github.com/QwenLM/qwen-code/issues/9315
- **评论**: 4 | **更新**: 2026-08-17
- **详情**: Ubuntu 22 上 v0.21.13 无法复制选定字段文本，v0.19 及之前版本正常。用户推测是新的终端交互实现导致，体验“更难用了”。

## 重要 PR 进展

### #9364 `feat(daemon): make serve new-file mode configurable (QWEN_SERVE_NEW_FILE_MODE)`
- **链接**: https://github.com/QwenLM/qwen-code/pull/9364
- **状态**: OPEN
- **详情**: 对应 Issue #9250。新增 `NewFileModePolicy`（owner/system），通过环境变量 `QWEN_SERVE_NEW_FILE_MODE` 启用系统 umask 推导模式，替代硬编码 0600，默认行为不变。

### #9361 `feat(scheduled-tasks): allow creating a task with an existing session`
- **链接**: https://github.com/QwenLM/qwen-code/pull/9361
- **状态**: OPEN
- **详情**: 允许 `POST /scheduled-tasks` 传可选 `sessionId`，复用现有会话执行计划任务，避免每次任务创建专属会话造成资源浪费。已包含绑定前校验逻辑。

### #9358 `fix(weixin): keep typing indicator alive during long turns`
- **链接**: https://github.com/QwenLM/qwen-code/pull/9358
- **状态**: OPEN
- **详情**: 修复微信渠道长耗时任务中“对方正在输入”状态过期问题。改为每 4 秒重发 TYPING 请求，直到回合结束。

### #9295 `fix(core): omit image media the model endpoint cannot safely consume`
- **链接**: https://github.com/QwenLM/qwen-code/pull/9295
- **状态**: OPEN
- **详情**: 当模型端点不支持 `image/heic`、`image/tiff` 等 MIME 类型或图片无法解码时，不再原样转发数据 URI，避免 responses 接口校验报错。

### #9303 `fix(web-shell): bound daemon transcript retention to stop renderer OOM crashes`
- **链接**: https://github.com/QwenLM/qwen-code/pull/9303
- **状态**: OPEN
- **详情**: 限制 Web Shell 在浏览器中保留的 daemon 会话历史量：replay 快照注入后立即释放，replay 重建与实时增长共用同一 block 上限，修复渲染器内存溢出崩溃。

### #9327 `refactor(ci): simplify the review checkout self-heal back to wipe-and-retry`
- **链接**: https://github.com/QwenLM/qwen-code/pull/9327
- **状态**: OPEN
- **详情**: 将 #9220 中添加的 checkout 自愈逻辑从约 60 行简化回核心的 wipe-and-retry。八轮 review 添加的路径防护层（realpath 规范化、尾斜杠处理、denylist）被认为过度设计，简化降低维护成本。

### #9247 `fix(review): budget the composed body against GitHub's review limit`
- **链接**: https://github.com/QwenLM/qwen-code/pull/9247
- **状态**: OPEN
- **详情**: `compose-review` 现在会测量 review 正文长度，超出 GitHub 65,536 字符限制时按固定顺序裁剪：先删中文折叠段（英文内容无损），再降级其他部分。

### #9342 `fix(review): clear the deferred-suggestion backlog from #9175's review rounds`
- **链接**: https://github.com/QwenLM/qwen-code/pull/9342
- **状态**: OPEN
- **详情**: 清理 PR #9175 十五轮 review 中累积的 19 条 deferred-suggestion（无 Critical，均带 pin 回补）。覆盖安全 API 形态、共享 helper 等行为修复。

### #9184 `fix(review): gate the recovered incremental anchor on the model that certified it`
- **链接**: https://github.com/QwenLM/qwen-code/pull/9184
- **状态**: OPEN
- **详情**: 增量 review 的“clean up to this commit”短路径是特定模型的结论。修复后，同 SHA 在不同模型下重跑会触发完整 second opinion，不再直接信任缓存。

### #8403 `feat(audit): add legacy code audit workflow`
- **链接**: https://github.com/QwenLM/qwen-code/pull/8403
- **状态**: OPEN
- **详情**: 实现 `/audit <directory> [--effort low|medium|high]` 命令，用于无 diff 或 PR 场景下审计现有模块。已配套确定性的 CLI 参数解析和文件系统规划 helper。

## 功能需求趋势

以下方向是过去 24 小时社区 Issue/PR 集中的主题：

**1. 上下文压缩与会话管理可靠性**
- 压缩后 token 统计错误、状态栏不刷新、恢复后丢失上下文等多点问题同时出现（#9320、#9309、#6806）
- 趋势：压缩功能虽已上线但可靠性远未达标，是当前最高频反馈区域

**2. Daemon 资源控制与可配置性**
- 从“仅计数”升级到字节级内存限制（#8051），新增文件权限可配置（#9250/#9364）
- 趋势：`qwen serve` 生产环境用途增加，用户对资源边界和系统集成的精细化控制需求上升

**3. Web Shell 跨端统一与导出增强**
- 跨主机聊天记录契约预验证（#9354）、HTML 导出折叠控制（#9367）、chat 面板统一到 web-shell（#5883）
- 趋势：Qwen Code 多端（CLI/桌面/VS Code/Web）一致性成为社区长期演进方向

**4. 聊天渠道集成完善**
- 微信渠道批量修复：64 位 ID（#9307）、typing 保活（#9358）、文件发送（#9352）
- 趋势：渠道集成正在从“能用”走向“好用”，消息稳定性与媒体支持是眼下重点

**5. 自动化与 CI 管线优化**
- Autofix 事件风暴治理（#9296）、review checkout 简化（#9327）、审查正文预算（#9247）
- 趋势：AI 自动化审查管线在真实负载下暴露效率问题，社区致力于减少无效运行和控制 API 消耗

## 开发者关注点

- **Windows 粘贴回归**：#9061 被标记为 P1，0.21.x 的终端交互层改动破坏基础输入体验，影响面较大，社区期待紧急修复
- **取消/编辑提示词流程缺陷**：#8316 取消后内容丢失，与 #9315 的“无法复制”共同指向终端交互层可用性下降
- **压缩链路的信任危机**：连续多个 issue（#9320、#9309、#6806）报告压缩后上下文丢失或统计失真，开发者对模型在长会话中的可用性产生疑虑
- **自动化审查的算力浪费**：#9296 显示 59% autofix 运行被取消，开发者对 AI 驱动 CI 的成本与收益比开始提出质疑
- **权限控制精细化**：#9250 暴露 daemon 文件权限不可配置问题，在生产环境中可能造成协作问题，社区期待兼顾安全与灵活性的方案

---
*日报数据窗口：2026-08-17 ~ 2026-08-18（UTC）*  
*数据来源：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)*

</details>

<details>
<summary><strong>CodeWhale</strong> — <a href="https://github.com/Hmbown/CodeWhale">Hmbown/CodeWhale</a></summary>

# CodeWhale 社区动态日报（2026-08-18）

## 今日速览  
过去 24 小时没有正式 Release，但社区围绕 **v0.9.9** 发布了密集的修复与增强 PR，包括 shell 工具卡死、DeepSeek V4 分时定价、审批持久化等关键改动。Issue 方面，TUI 崩溃、大文本会话中断、配置跨平台不一致等问题持续发酵，稳定性和配置易用性成为社区最关注的两大主题。

## 社区热点 Issues（10 个）

1. [#5424 [OPEN] v0.9.7: Codewhale TUI crashing](https://github.com/Hmbown/CodeWhale/issues/5424)  
   用户反馈正常对话等待约一分钟后 TUI 自动退出，复现路径清晰。属于高影响崩溃问题，评论 7 条。

2. [#1425 [OPEN] 执行大文本处理工程后会话中断卡死](https://github.com/Hmbown/CodeWhale/issues/1425)  
   中文用户尝试用 TUI 分析 300 万字小说，启动 10 个子 Agent 后因 `agent_wait` 超时会话卡死。反映长任务与子 Agent 协调机制的稳定性不足，评论 7 条。

3. [#2369 [OPEN] CodeWhale Config Paths Fragmented Across OS and Cygwin](https://github.com/Hmbown/CodeWhale/issues/2369)  
   配置与密钥路径在 Windows/Cygwin 下解析不一致，还存在旧版迁移静默失败的问题。跨平台用户受影响面广，评论 8 条。

4. [#5123 [OPEN] Agent spawn surface has too many knobs — labeled builder runs read-only and self-BLOCKED](https://github.com/Hmbown/CodeWhale/issues/5123)  
   实际运行中，被标记为 `builder/gates-shell-writer` 的 Agent 却只有只读能力，导致自身 BLOCKED。工具能力描述与实际权限不一致，评论 7 条。

5. [#1651 [OPEN] VS Code crashes or exits unexpectedly when YOLO Agent is running test scripts](https://github.com/Hmbown/CodeWhale/issues/1651)  
   YOLO Agent 在后台跑测试脚本时会导致 VS Code 整体崩溃，涉及 IDE 集成稳定性，评论 6 条。

6. [#1829 [OPEN] SSH 连接失败：exit code 255（疑似沙箱 TCP 22 出站阻断）](https://github.com/Hmbown/CodeWhale/issues/1829)  
   内置 shell 沙箱可能阻止 SSH/SCP 的 22 端口出站，导致远程连接全部失败。对需要远程操作的开发者影响直接，评论 6 条。

7. [#5350 [OPEN] 简化第三方模型配置，增加预制模板](https://github.com/Hmbown/CodeWhale/issues/5350)  
   用户希望为 OpenCode Zen、Agnes、美团 Sensenova 等第三方服务商提供预置模板、文档提示与“测试连接”按钮。中文和英文社区均有共鸣，评论 4 条。

8. [#5337 [OPEN] Web: finish the #4934 dictionary spine — retire every isZh branch](https://github.com/Hmbown/CodeWhale/issues/5337)  
   网页前端仍存在大量 `isZh` 三元表达式，导致部分本地化路由无法统一维护。是 i18n 重构的后续遗留项，社区贡献者在推进，评论 4 条。

9. [#5056 [OPEN] Test reliability: flaky verifier background tests, /workspace-sensitive fixtures, 12 untriaged #[ignore] tests](https://github.com/Hmbown/CodeWhale/issues/5056)  
   测试套件在并行运行时出现多个 flaky 用例，并有 12 个未分类的 `#[ignore]` 测试。持续影响 CI 可信度，评论 8 条。

10. [#5403 [OPEN] main is red on both platforms across all four completed runs](https://github.com/Hmbown/CodeWhale/issues/5403)  
    macOS 与 Windows 上四个 main 分支 CI 全部变红，涉及 `plugin_e2e_acceptance` 与 NSIS 打包。当前主分支处于不可用状态，评论 3 条。

## 重要 PR 进展（10 个）

1. [#5476 [CLOSED] release: 0.9.9](https://github.com/Hmbown/CodeWhale/pull/5476)  
   v0.9.9 发布 PR，主题为 “truth-and-resilience”：shell 工具在磁盘/描述符耗尽时不再卡死会话，未验证的上下文窗口、输出上限与遥测默认值会被诚实标注。

2. [#5465 [CLOSED] fix(tui): exec stream creation must fail soft and never wedge the shell tool](https://github.com/Hmbown/CodeWhale/pull/5465)  
   修复因主机内存/磁盘耗尽导致 `bash` 调用全部返回 `Failed to create streaming shell output` 的问题，让 exec 创建失败时降级为软错误而非彻底卡死。

3. [#5470 [CLOSED] fix(tui): DeepSeek V4 tiered peak/off-peak pricing resolved per turn](https://github.com/Hmbown/CodeWhale/pull/5470)  
   将 DeepSeek V4 Pro/Flash 的固定价格改为按 UTC 小时区分的峰谷定价，并依据每个 turn 的实际发生时间计算成本。

4. [#5402 [CLOSED] fix(tui): restore session cost when live pricing is unverifiable](https://github.com/Hmbown/CodeWhale/pull/5402)  
   修复定价端点返回 503 时会话成本永远显示 `unverified_live_pricing` 的问题，改为诚实回退到本地可用定价，同时不谎报已验证。

5. [#5491 [OPEN] fix(tui): persist approval outcomes before execution](https://github.com/Hmbown/CodeWhale/pull/5491)  
   在审批执行前将会话审批记录与最终结果持久化；无法持久化时拒绝执行，并支持会话恢复时重建未完成/已中断的审批状态。对应 #5360。

6. [#5474 [CLOSED] perf(context): compact all noisy web tool results](https://github.com/Hmbown/CodeWhale/pull/5474)  
   对 `Web`、`web_search`、`web.run`、`fetch_url` 等所有“噪音型” web 工具结果统一应用软上限压缩，保留普通工具如 `read_file` 的硬性限制，减少上下文浪费。

7. [#5475 [CLOSED] fix(config): resolve owned direct model casing safely](https://github.com/Hmbown/CodeWhale/pull/5475)  
   修复小写保存的模型选择器（如 `glm-5.2`）被其他服务商同名裸 ID 误判的问题，使 Z.ai 所属模型正确匹配。

8. [#5473 [OPEN] perf(skills): keep configured skill prompts stable](https://github.com/Hmbown/CodeWhale/pull/5473)  
   在模型可见的技能目录中，对“显式配置根目录”下的原生技能只展示名称和描述，不再暴露物理路径，避免目录变动造成提示词不稳定。

9. [#5480 [CLOSED] feat(tui): show and open the live /rc session link; send a stable device id](https://github.com/Hmbown/CodeWhale/pull/5480)  
   `/rc` 会话现在会解析并展示 `runner.runUrl` / `runner.computerUrl`，支持直接打开 Web 会话链接；同时不再为每个 `/rc` 生成新设备标识。

10. [#5485 [CLOSED] fix(models): bring first-party model rows and pricing current as of 2026-08-17](https://github.com/Hmbown/CodeWhale/pull/5485)  
    对照 2026-08-17 官方页面全面刷新模型目录与价格表，包括 xAI 长上下文为 2x 标准价等细节修正。

## 功能需求趋势

- **配置简化与向导化**：社区强烈希望第三方模型服务商（OpenCode Zen、Sensenova 等）能通过预置模板一键配置，并内置“测试连接”与状态刷新能力（#5350）。
- **跨平台一致性与迁移可靠性**：多平台配置路径分化和静默迁移问题被反复提及，用户需要统一的路径解析和显式迁移报告（#2369）。
- **Agent 工具链能力收敛**：Agent 工具 schema 字段过多、能力标签与实际权限不一致，社区呼吁简化并加强元数据描述（#5324、#5123）。
- **成本/上下文透明度**：DeepSeek V4 分时定价、1M 上下文但 128K 就触发压缩、pricing 端点不可用导致成本不可见等问题，都是用户高频关注点（#5470、#5239、#5402）。
- **CI 与测试可靠性**：多个 flaky 测试和 main 分支跨平台全红，说明自动化测试基础设施需要优先治理（#5056、#5403）。

## 开发者关注点

- **会话卡死与中断**：子 Agent 超时、shell 工具 wedge、TUI 自动退出是最影响日常体验的痛点。
- **IDE 集成稳定性**：VS Code 在 YOLO Agent 执行脚本时崩溃，说明外部 IDE 场景仍需加护。
- **配置复杂度**：配置层级过多且存在 silent shadowing，第三方模型配置门槛过高，开发者普遍希望“少填字段、多给模板”。
- **网络/沙箱限制**：SSH 出站被阻断、API endpoint 偶发错误，影响实际开发流程。
- **测试可信度**：并行 CI 下的 flaky 测试和未分类 ignore 用例削弱了回归信心，社区期待更稳定的测试基础设施。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*