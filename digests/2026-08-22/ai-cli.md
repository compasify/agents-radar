# AI CLI 工具社区动态日报 2026-08-22

> 生成时间: 2026-08-21 23:13 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告（2026-08-22）

## 1. 生态全景

当前 AI CLI 工具生态正处于从"对话式编码助手"向"自主 Agent 运行时"的关键转型期。过去 24 小时内，8 个主流工具中有 6 个发布新版本，其中 OpenAI Codex 密集发布 6 个 Rust alpha，Qwen Code 同步刷新 SWE-bench Verified 500 + Terminal-Bench 89 全量基准，整体迭代节奏明显加快。但功能扩张的同时，Agent 执行可靠性（子代理误报、挂起、崩溃）、Windows 平台稳定性、MCP 连接质量等问题在多个工具中集中爆发，说明行业正在从功能创新期进入工程成熟期。跨工具的共同信号是：用户不再满足于"能生成代码"，而是要求**可监督、可回滚、成本可控**的自主执行能力。

## 2. 各工具活跃度对比

> 注："热点 Issues / 重点 PR"为各日报收录的高关注条目数，非仓库当日全量；Discussions 未单独披露的仓库以 N/A 标注。

| 工具 | 版本发布 | 热点 Issues | 重点 PR | Discussions | 活跃度特征 |
|---|---|---|---|---|---|
| Claude Code | v2.1.239（正式版） | 10 | 0（无更新） | N/A | 正式版周期发布，Issue 管理成熟 |
| OpenAI Codex | 6 个 Rust alpha | 10 | 10 | 9 条 | 高频迭代，社区反馈极活跃 |
| Gemini CLI | 1 个 nightly | 10 | 10 | N/A | 大规模基础设施 PR 投入 |
| Copilot CLI | v1.0.81-7（正式版） | 10 | 0（无更新） | N/A | 渐进式增强，节奏稳健 |
| OpenCode | v1.18.20 / v1.18.21 | 12 | 12 | N/A | V2 迁移期，修复密集 |
| Pi | 无 | 10 | 8 | 3 条 | 社区小而精，技术讨论深 |
| Qwen Code | 1 nightly + 1 基准参考 | 10 | 10 | N/A | 发布门槛高：基准 + CI 双验证 |
| CodeWhale | 无 | 10 | 10 | N/A | 功能矩阵快速扩张 |
| DeepSeek Harness | 无 | N/A | N/A | N/A | 24 小时无活动 |

## 3. 共同关注的功能方向

### 3.1 Agent / 子代理可靠性
- **Claude Code**：子代理推理力度不可配置（#43083，59👍 居首）
- **Gemini**：subagent 在 MAX_TURNS 后误报 GOAL 成功（#22323）；generalist agent 永久挂起（#21409）
- **Qwen**：主会话派发后 subagent 中途崩溃（#5180）
- **CodeWhale**：子代理 wall-time 死亡丢失未提交工作（#5529）
- **Codex**：自定义 provider 下原生子代理编排失效（#17598）
- **OpenCode**：v1.18.20 修复 subagent 失败被静默吞掉的问题

Agent 从 demo 级走向生产级时，"执行-状态-汇报"全链路的可靠性是最大瓶颈。

### 3.2 Windows 平台体验
- **Claude Code**：三个 MSIX 级打包问题同日爆发（#88101、#88323、#88689）
- **Codex**：Windows 上 Computer Use、Browser 等插件全部不可用（#25220）
- **Copilot**：每次执行命令弹出 PowerShell 窗口（#4549）
- **Qwen**：Windows 下 MCP stdio 启动失败 + 会话间断连（#9693/#9675）
- **OpenCode**：Windows 大文件 diff 计算时 UI 冻结（#30906）

Windows 已成 AI CLI 落地的"第二战场"，但当前体验明显落后于 macOS/Linux。

### 3.3 MCP 生态精细化治理
- **Claude Code**：worktree 会话下用户级 MCP 服务器不加载（#47733）
- **Copilot**：`.mcp.json` 被识别但实际未连接（#4542）
- **Codex**：MCP 工具返回 CustomResult 解码失败（#29002）
- **OpenCode**：MCP 工具定义懒加载以降低 token 开销（#35376）
- **Qwen**：界面显示"已连接"但工具实际不可用（#9675）
- **Gemini**：PR #28955 集成 ECC bundles 与 MCP 配置

MCP 正从"能否连接"走向"连接是否可靠、是否消耗太多 token、是否能在复杂 Git/Windows 场景正常工作"。

### 3.4 成本与用量可见性
- **Codex**：等待轮询 turns 占原始 token 消耗 19.8%（#35259）
- **Pi**：OpenRouter 缺少缓存控制导致成本实测 2.5 倍（#7995）
- **Claude Code**：v2.1.239 成本估算新增数据驻留推理溢价
- **OpenCode**：成本追踪架构 RFC，聚焦子代理聚合与多模型正确性（#12377）
- **Copilot**：BYOK 多模型配置与 `/model` 会话内切换（#3282/#3709，合计 53👍）

用户对"花了多少、花在哪、能不能省"要求越来越高，缓存控制与精确用量统计成为新竞争点。

### 3.5 会话生命周期与可回滚性
- **Codex**：`/rewind` 或 `/revert` 以 105👍 成为社区最高呼声
- **Copilot**：会话分支完整继承对话历史（#1313）
- **OpenCode**：归档会话恢复（#24153）；fork 消息 ID 确定性（#44011）
- **Pi**：会话重建时工具结果重新配对修复（#8428）
- **Qwen**：daemon 恢复上次使用模型（#9686）
- **Gemini**：历史回滚与重试 nudge 优化，最大化 prefix caching（#28934）

"AI 会话"正在获得传统编辑器级别的历史管理与撤销能力。

### 3.6 安全与沙箱边界
- **Gemini**：macOS Seatbelt 沙箱隔离 Docker/容器运行时（#28935）；401 子串误判修复（#28827）
- **Codex**：统一沙箱审批策略（#40024）；升级命令走强制 Guardian 审查（#40005）
- **Qwen**：权限分类器不可用时 fail-open，属于安全回归（#9639）
- **OpenCode**：加固可移植 shell 授权，防赋值-only 重定向绕过（#44016）
- **Claude Code**：AUP/Cyber 安全检查误报批量出现，强制中断合法开发会话

安全正从"权限弹窗"演进为**可配置、可审计、可监管**的完整策略体系。

## 4. 差异化定位分析

| 工具 | 定位与目标用户 | 技术路线与社区关注焦点 |
|---|---|---|
| **Claude Code** | 企业级 Agent 平台，面向大型组织与深度用户 | 多平台推理（Bedrock/Vertex/Foundry）+ 数据驻留合规；社区最关注子代理推理力度控制与 Windows MSIX 打包缺陷 |
| **OpenAI Codex** | 前沿能力探索者，追求最新模型的开发者 | Rust 原生重写 + alpha 高频迭代；沙箱/Guardian 安全审查 + Desktop/Remote 全场景矩阵；社区强烈要求回滚机制 |
| **Gemini CLI** | Google 生态开发者与自动化基建场景 | 依托 A2A、Cloud Run Workflows 投入 PR 生成与评测管线（LLM-as-a-Judge）；最大短板是 Agent 执行稳定性 |
| **Copilot CLI** | GitHub 重度用户、Copilot 订阅企业 | 深度绑定 GitHub 生态；渐进式增强明显，BYOK 多模型、会话分支、MCP 可靠性是核心诉求 |
| **OpenCode** | 开源偏好者、multi-agent 工作流团队 | TypeScript/Effect 技术栈，V2 架构迁移期；网络容错最细致（unknown finish reason、network_error 重试），TUI 性能与 MCP 懒加载讨论深入 |
| **Pi** | 终端原教旨用户、长会话重度用户 | 对 Kitty/Windows Terminal 兼容性、上下文压缩配置、模型 provider 适配（OpenRouter 缓存、xAI Grok）投入极大；JetBrains 社区为 Pi 推出 ThinkRail Web GUI |
| **Qwen Code** | 中文开发者、国内研发团队 | 中文输入法修复、钉钉/DWS 协作集成、评审循环 Agent、SWE-bench/Terminal-Bench 基准门槛；CI 安全（CVE 审计）是当前 P1 阻塞 |
| **CodeWhale** | CI/自动化编排场景、需要外部监督的用户 | Rust TUI；独树一帜的"被监督/无人值守运行"能力矩阵（生命周期事件 outbox、`/relaunch`、per-session 控制 socket），方向是把 CLI 变成可编程 Agent 运行时 |
| **DeepSeek Harness** | 尚观察 | 过去 24 小时无活动，暂无足够数据判断 |

## 5. 社区热度与成熟度

- **高活跃 + 快速迭代**：**OpenAI Codex**（24h 6 个 alpha + 10 PR + 9 Discussions）、**OpenCode**（2 个补丁 + 12 PR + 12 Issues）、**Gemini CLI**（nightly + 10 PR + 10 Issues）、**Qwen Code**（nightly + 基准验证 + 10 PR）。四个工具均处于密集发布期，社区反馈转化为代码的速度最快。
- **稳定演进**：**Claude Code** 以正式版节奏发布，Issue 管理成熟（59👍 的需求也仅处于讨论阶段）；**Copilot CLI** 版本节奏稳健，PR 空间暂时沉寂，社区需求集中在功能增强而非修 Bug。二者属于"背靠大厂、生态成熟"的第一梯队。
- **深度专业型社区**：**Pi** 与 **CodeWhale** 规模较小，但 Issue/PR 技术密度高。Pi 的压缩机制、成本优化讨论非常深入；CodeWhale 正在以极快速度构建"外部可监督"的新范式。
- **待观察**：**DeepSeek Harness** 无公开活动，活跃度无法评估。

## 6. 值得关注的趋势信号

1. **"可监督自主性"成为下一代 Agent 的必备属性**：CodeWhale 的生命周期事件 outbox、per-session 控制 socket，Codex 的 Guardian 强制审查，Gemini 的 Seatbelt 沙箱隔离，以及 Claude Code 被集中反馈的 AUP 误报——所有工具都在回答同一个问题：**如何让用户信任一个自主运行的 AI**。未来胜出的工具未必是代码生成最强的，而是**最让开发者放心放手的**。

2. **Windows 是当前最大的体验洼地，也是企业市场入口**：MSIX 打包、EFS 加密、Code Integrity、PowerShell 窗口闪烁，这些系统级问题密集出现，直接阻碍 AI CLI 进入大型 Windows 企业环境。未来半年，Windows 支持质量将成为工具选型的关键差异化因素。

3. **用户已开始用"成本工程师"的精度审视 AI CLI**：19.8% 的 token 浪费、2.5 倍的缓存缺失成本、BYOK 多模型配置困难——这些数据说明用户不再只关注回答质量，而是关注**每一分算力换回了多少有效工作**。Prompt caching、用量仪表盘、成本估算将成为标配。

4. **MCP 生态进入"精细化运营"阶段**：从"能否连接"到"连接是否可靠、是否消耗太多 token、是否能在 worktree/Remote/Windows 场景工作、自定义结果能否解析"。MCP 工程质量将直接决定工具生态的深度。

5. **回滚/撤销正在从编辑器功能变为 Agent 平台功能**：Codex 的 `/rewind` 以 105👍 断层领先；Copilot 的会话分支、OpenCode 的 fork 确定性、Pi 的会话重建修复共享同一诉求——**用户需要 Git 级的操作安全感**，否则无法放心让 Agent 大规模改写代码。

6. **基准验证与自动化评测成为发布门槛**：Qwen 将 SWE-bench Verified 500 + Terminal-Bench 89 全量通过作为基准参考；Gemini 正在构建 PR 生成评测管线（LLM-as-a-Judge）。AI CLI 的迭代将越来越依赖**可量化的质量标尺**，而非社区口碑。

---

**给技术决策者的建议**：选择工具时，优先评估 Windows 支持（若团队使用）、MCP 稳定性和成本控制能力；部署 Agent 工作流前，必须验证其状态上报可靠性（误报、挂起）与可恢复性；而社区的高赞需求（/rewind、多模型切换、用量透明），往往是产品路线图最可靠的先行指标。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据来源：github.com/anthropics/skills | 数据截止：2026-08-22  
> 说明：热门 PR 列表按评论数排序，但接口未返回具体评论数字段，因此以下排名以该列表顺序为基础。

## 1. 热门 Skills 排行

**#1298 fix(skill-creator): run_eval.py 0% recall 修复** · [GitHub](https://github.com/anthropics/skills/pull/1298) · Open  
核心修复 `run_eval.py` 对任何 skill 描述都报告 `recall=0%` 的严重 bug，通过将 eval 产物安装为真实 skill，并修复 Windows 流读取、触发检测与并行 worker 问题，让描述优化循环不再“对噪声优化”。社区关注极高，是 Issue #556 中 10+ 次独立复现的根因修复。

**#514 Add document-typography skill** · [GitHub](https://github.com/anthropics/skills/pull/514) · Open  
新增文档排版质量控制技能，专门处理 AI 生成文档中的孤词换行、寡段头、编号错位等典型排印问题。讨论焦点在于：这些问题影响所有 Claude 生成的文档，属于“用户不主动提、但感知极强”的高频痛点。

**#538 fix(pdf): 大小写敏感文件引用修复** · [GitHub](https://github.com/anthropics/skills/pull/538) · Open  
修复 `skills/pdf/SKILL.md` 中 8 处文件引用大小写不一致（如 `REFERENCE.md`→`reference.md`）。在 Linux/macOS 等大小写敏感环境会导致 skill 文件加载失败，直接影响 PDF 技能可用性。

**#486 Add ODT skill** · [GitHub](https://github.com/anthropics/skills/pull/486) · Open  
新增 OpenDocument 格式支持，覆盖 `.odt/.ods` 的创建、模板填充、解析与转 HTML。社区普遍认为这是对现有 docx/pdf 技能的重要补充，尤其对 LibreOffice 和 ISO 标准文档场景价值明显。

**#210 Improve frontend-design skill clarity and actionability** · [GitHub](https://github.com/anthropics/skills/pull/210) · Open  
重写 frontend-design 技能，确保每条指令都能被 Claude 在单次对话中执行，而非停留在概念解释层面。反映了社区对 skill“可操作性”的普遍要求——是“说教文档”还是“可执行指令”。

**#83 Add skill-quality-analyzer and skill-security-analyzer** · [GitHub](https://github.com/anthropics/skills/pull/83) · Open  
为 marketplace 新增两个元技能：一个从结构与文档、示例、资源等五个维度评估 skill 质量，另一个专注安全分析。体现出社区开始为 Skill 生态建立自我审查与质量门槛。

**#541 fix(docx): prevent tracked change w:id collision** · [GitHub](https://github.com/anthropics/skills/pull/541) · Open  
修复 DOCX 技能在已有书签文档中添加修订时，硬编码低号 `w:id` 导致文档损坏的问题。深入 OOXML 共享 ID 空间机制，属于典型的“边界条件导致文档不可读”的深度修复。

**#539 fix(skill-creator): warn on unquoted YAML description** · [GitHub](https://github.com/anthropics/skills/pull/539) · Open  
在 `quick_validate.py` 中加入预解析校验，检测 description 字段中未加引号的冒号，避免 YAML 静默截断或拆分。讨论点在于：这类问题会让 skill 在没有任何报错的情况下失效，排查成本很高。

---

## 2. 社区需求趋势

**安全与信任边界**  
[Issue #492](https://github.com/anthropics/skills/issues/492) 指出社区技能被分发在 `anthropic/` 命名空间下，形成“假官方”的信任边界漏洞；[Issue #1175](https://github.com/anthropics/skills/issues/1175) 则关注 SharePoint Online 场景中，将权限控制直接写入 SKILL.md 的安全风险。

**组织级共享与分发效率**  
[Issue #228](https://github.com/anthropics/skills/issues/228) 要求支持组织内直接共享 skill，替代“下载文件→Slack/Teams 发送→手动上传”的流程；[Issue #189](https://github.com/anthropics/skills/issues/189) 则报告不同插件安装后包含相同 skill，导致上下文窗口重复占用，希望更好的插件隔离。

**技能开发工具链可靠性**  
[Issue #556](https://github.com/anthropics/skills/issues/556) 记录了 `run_eval.py` 在所有测试查询下 0% 触发率的核心 bug，直接让 skill 描述优化失效；[Issue #202](https://github.com/anthropics/skills/issues/202) 呼吁 skill-creator 应从“开发者文档”改进为“可执行指令”，提升 token 效率和可操作性。

**上下文效率与记忆管理**  
[Issue #1487](https://github.com/anthropics/skills/issues/1487) 反映 `claude-api` skill 主动注入约 156k tokens，单次调用即耗尽上下文窗口；[Issue #1329](https://github.com/anthropics/skills/issues/1329) 则提出 `compact-memory` 技能方向，用符号化记法压缩长期 agent 状态。

**AI Agent 治理与质量闸门**  
[Issue #412](https://github.com/anthropics/skills/issues/412) 提议 `agent-governance` 技能，覆盖策略执行、威胁检测、信任评分与审计追踪；[Issue #1385](https://github.com/anthropics/skills/issues/1385) 提出“任务前校准→对抗审查→交付验证”的三阶段推理质量管道。

---

## 3. 高潜力待合并 Skills

**#1298 skill-creator 评测闭环修复** · [GitHub](https://github.com/anthropics/skills/pull/1298) · Open  
解决技能优化依赖的评测信号完全失真问题，是所有 skill 描述迭代的基础设施级修复，合并优先级最高。

**#514 document-typography 排版技能** · [GitHub](https://github.com/anthropics/skills/pull/514) · Open  
通用性强、感知价值高，能直接改善所有生成文档的阅读质量，与现有文档类技能形成良好互补。

**#486 ODT 技能** · [GitHub](https://github.com/anthropics/skills/pull/486) · Open  
覆盖 LibreOffice 和 ISO 标准办公文档场景，补全 docx/pdf 之外的格式空白，需求明确且可落地。

**#723 testing-patterns 测试技能** · [GitHub](https://github.com/anthropics/skills/pull/723) · Open  
系统覆盖测试哲学、单元测试、React 组件测试等完整测试栈，对 AI 生成代码的质量保障有直接价值。

**#525 pyxel 复古游戏技能** · [GitHub](https://github.com/anthropics/skills/pull/525) · Open  
作者是 Pyxel 引擎生态维护者，垂直场景明确，且自带 write → run_and_capture → inspect 工作流，可体验完整。

**#1367 self-audit 自审技能** · [GitHub](https://github.com/anthropics/skills/pull/1367) · Open  
以“机械文件验证 + 四维推理审核”做交付前质量门禁，与 Issue #1385 提出的质量管道需求互相呼应，有望成为通用质量基础设施。

---

## 4. Skills 生态洞察

社区当前最集中的诉求是：**让技能本身变得更可靠、更安全、可管理**——从修复 skill-creator 评测失真、警惕官方命名空间下的信任边界，到组织级共享与上下文效率优化，均指向 Skill 生态的基础设施与治理机制尚待成熟。

---

## Claude Code 社区动态日报 — 2026-08-22

---

### 一、今日速览

- **v2.1.239 发布**：成本估算功能全面纳入数据驻留工作区的 1.1× 美国专属推理溢价，并开始在 Bedrock / Vertex / Foundry 等此前被排除的平台推出全屏渲染器。
- **Agent 与 Windows 平台成为社区焦点**：子代理推理力度可配置的请求（#43083）以 59👍 高居榜首，同时 Windows MSIX 系列严重问题（#88101、#88323、#88689）集中爆发。
- **安全策略误报引发担忧**：sworrl 批量提交了一批 AUP/Cyber 安全检查误报问题，显示服务端安全过滤仍会对正常开发工作造成干扰。

---

### 二、版本发布

**v2.1.239**（release 说明）

- 成本估算（`/cost`、状态栏、`--max-budget-usd`）现包含数据驻留（data-residency）工作区适用的 **1.1× 美国专属推理（US-only-inference）溢价**。
- 在 Bedrock、Vertex、Foundry 及其他此前未覆盖的环境中，新增**一次性全屏渲染器（fullscreen renderer）**选择；以上环境的新安装默认自此模式启动。

---

### 三、社区热点 Issues（10 条）

#### 1. [增强] 子代理推理力度可配置 — #43083
- **状态**：已关闭｜👍 59｜💬 27
- **要点**：通过 Agent tool 派发子代理时可指定 `model` 参数，但无法控制低/中/高推理力度（reasoning effort）。社区呼声极高，是当前最受关注的 Agent 能力增强请求。
- **链接**：https://github.com/anthropics/claude-code/issues/43083

#### 2. [Bug] 用户级 MCP 服务器在 worktree 会话中不加载 — #47733
- **状态**：开启｜💬 10｜macOS
- **要点**：`~/.claude/settings.json` 中配置的用户级 MCP 服务器在 `claude -w <worktree>` 下无法加载，普通会话正常。影响使用 git worktree 工作流的开发者。
- **链接**：https://github.com/anthropics/claude-code/issues/47733

#### 3. [Bug] Windows 上 `/memory` 命令无法打开自动记忆文件夹 — #33619
- **状态**：开启｜💬 8｜Windows
- **要点**：Auto-Memory 文件夹在 Windows 平台无法通过 `/memory` 命令正常打开，属于长期未修复的跨平台功能差异问题。
- **链接**：https://github.com/anthropics/claude-code/issues/33619

#### 4. [增强] 不匿名化用户自定义的浏览器名称 — #70542
- **状态**：开启｜👍 6｜💬 7
- **要点**：用户为浏览器分配的 "Browser 1" / "Browser 2" 等名称被匿名化后才发送给模型，导致多浏览器场景下上下文难以区分，请求保留原始名称。
- **链接**：https://github.com/anthropics/claude-code/issues/70542

#### 5. [Bug] Windows MSIX：CoworkVMService 阻塞桌面端更新与重启 — #88101
- **状态**：开启（2026-08-20 创建）｜💬 3
- **要点**：Claude Desktop For Windows（MSIX）随附的 auto-start 服务从包目录内运行，持续持有包身份，导致应用无法自更新，强行更新后还会阻止重启（0x80073D02 / 0x80070020）。
- **链接**：https://github.com/anthropics/claude-code/issues/88101

#### 6. [Bug] Agent 注册表无法发现部分 `.claude/agents/*.md` 文件 — #82361
- **状态**：开启｜💬 3
- **要点**：项目中 15 个合法的 agent 定义文件只有 8 个能被 Agent tool 的 `subagent_type` 注册表发现，影响自定义 agent 的分发与使用。
- **链接**：https://github.com/anthropics/claude-code/issues/82361

#### 7. [Bug] Claude Desktop（Windows MSIX）由于 vk_swiftshader.dll 被 Code Integrity 阻止而自毁 — #88323
- **状态**：开启（2026-08-20 创建）｜💬 2
- **要点**：Code Integrity 阻止 `vk_swiftshader.dll` 后，包被标记为 "Modified"，桌面应用无法启动。涉及 sideload 场景，影响企业/离线用户。
- **链接**：https://github.com/anthropics/claude-code/issues/88323

#### 8. [增强] 桌面应用主界面显示使用额度 — #80261
- **状态**：开启｜👍 10
- **要点**：用户希望在主屏幕/常驻状态栏看到 usage 额度，而不是进入深层菜单才能查看。反映了对成本透明度的普遍需求。
- **链接**：https://github.com/anthropics/claude-code/issues/80261

#### 9. [Bug] ListAgents 遗漏活跃命名会话并返回跨命名空间的名称 — #87114
- **状态**：开启（2026-08-16 创建）｜💬 1｜macOS
- **要点**：`ListAgents` 遗漏了已注册的 peer 会话，且返回的命名空间与会话概览不一致，导致 agent 之间无法正常相互通信。影响多 agent 协作场景。
- **链接**：https://github.com/anthropics/claude-code/issues/87114

#### 10. [Bug] Windows MSIX：Repair 与 Reset 永远无法成功 — #88689
- **状态**：开启（2026-08-21 创建）｜💬 1
- **要点**：安装程序从 `%TEMP%\Claude-*.msix` 注册 MSIX 包，但临时文件之后被系统清理，Windows 自带的修复/重置功能因找不到源文件而永久失败（0x80073CF0 / 0x80070002）。打包策略缺陷。
- **链接**：https://github.com/anthropics/claude-code/issues/88689

---

### 四、重要 PR 进展

过去 24 小时内无 PR 更新。

---

### 五、热门 Discussions

> 今日未提供 Discussions 数据，本节省略。

---

### 六、功能需求趋势

从近期 Issues 中可提炼出以下社区重点关注方向：

| 方向 | 代表 Issue | 热度信号 |
|---|---|---|
| **Agent / 子代理能力深化** | #43083 子代理推理力度；#82361 agent 发现机制；#87114 多 agent 会话互通 | 高（59👍） |
| **成本与用量可见性** | v2.1.239 成本估算更新；#80261 桌面端额度常驻展示 | 中高 |
| **Windows 平台稳定性** | #88101 / #88323 / #88689 三个 MSIX 级问题 | 高（集中爆发） |
| **MCP 配置可靠性** | #47733 worktree 下 MCP 不加载 | 中 |
| **会话自我内省** | 新 Issue #88671：会话无法读取自身 ID、标题、分支、PR 信息 | 新出现 |

---

### 七、开发者关注点

1. **Windows MSIX 打包问题集中爆发**：CoworkVMService 阻塞更新、Code Integrity 标记包损坏、Repair/Reset 因临时文件被删除而永久失败——三个独立问题同日出现，暴露了桌面端打包策略的系统性缺陷，亟需官方统一修复。

2. **AUP / Cyber 安全过滤误报仍在持续**：sworrl 今天又新提交了 4 个误报（#88693、#88684、#88688、#88685），加上此前批次，累计已有数十个同类案例。误报场景多为用户对自己的代码/设备进行合法审查、调试或逆向，却导致 session 被服务端强制终止（severity: session-halted）。社区对「flagging model 误判 + 中断工作流」的容忍度正在下降。

3. **Agent 工具生态的可发现性与控制力不足**：子代理推理力度不可配置（#43083）、agent 文件无法被完整发现（#82361）、跨会话通信不可靠（#87114）——这些问题相互叠加，限制了 Claude Code 在复杂多 agent 工作流中的实际可用性。

4. **MCP 配置在复杂 Git 场景下的兼容性**：#47733 显示 worktree 这一标准 Git 工作流中 MCP 服务器完全失效，且该问题已存在 4 个月仍未解决，影响了依赖 MCP 的深度用户的迁移意愿。

5. **会话元数据不可读**：#88671 提出了一个非常实用的诉求——agent 无法读取当前会话自身的信息（ID、标题、分支、关联 PR），这在自动化脚本和 agent 协作场景中是基础能力。

---

> 📅 **数据窗口**：2026-08-21 至 2026-08-22（GitHub） | 下次更新：2026-08-23
> 📌 **说明**：PR 与 Discussions 今日无数据更新，相关章节省略。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-22

> 数据来源：[github.com/openai/codex](https://github.com/openai/codex)

## 今日速览

- 过去 24 小时密集发布 6 个 Rust 运行时 alpha 版本（0.149.0-alpha.4.1 → 0.150.0-alpha.6），迭代节奏明显加快。
- Windows 平台问题持续发酵：Computer Use 插件不可用、Remote 配对后无法建立会话、沙箱状态文件损坏等成为最集中的用户反馈。
- 后台同步合并了大量 PR，方向集中在沙箱权限精细化、Guardian 审查机制、以及 Browser/Computer Use 配置体系搭建。

---

## 版本发布

过去 24 小时发布了 6 个 Rust 版本（均为 alpha 预览版），版本号未附带详细 Release Notes：

| 版本 | 链接 |
|---|---|
| rust-v0.150.0-alpha.6 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.6) |
| rust-v0.150.0-alpha.5 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.5) |
| rust-v0.150.0-alpha.3 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.3) |
| rust-v0.150.0-alpha.2 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.2) |
| rust-v0.149.0-alpha.7.1 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.7.1) |
| rust-v0.149.0-alpha.4.1 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.4.1) |

---

## 社区热点 Issues

以下为过去 24 小时内最受关注的 10 个 Issue：

### 1. ChatGPT 桌面版反复生成 Computer Use 线程并崩溃（V8 OOM）
[#38455](https://github.com/openai/codex/issues/38455) | 💬 35 | 👍 15 | 🏷️ bug / computer-use / performance

macOS 15.7.7 + Apple Silicon + 32 GB RAM 环境，应用在闲置状态下 98 秒后崩溃。崩溃时产生 316 个线程，其中 187 个名为 `computer-use`，telemetry 记录了 78 次未解释的 worker 生成行为。用户确认上一版本 26.730.61639 正常，属于典型回归。

### 2. Windows 上捆绑插件全部不可用（EFS 加密文件复制失败）
[#25220](https://github.com/openai/codex/issues/25220) | 💬 27 | 👍 4 | 🏷️ bug / windows-os / skills / computer-use

Windows 11（MSIX 安装）下 Computer Use、Browser、Chrome、LaTeX 等插件在市场中全部显示不可用。根因是 `copyfile` 在 EFS 加密的 WindowsApps 文件上失败，影响面非常广。

### 3. Codex Desktop 在等待/轮询期间反复重新进入模型，消耗大量配额
[#35259](https://github.com/openai/codex/issues/35259) | 💬 15 | 👍 8 | 🏷️ bug / rate-limits / tool-calls

在 Ultra 和多代理工作负载中，模型 turns 仅仅为了等待子代理或轮询终端状态就反复重新进入模型。在修复后的 49% 用量窗口中，此类 turns 占原始 token 消耗的 **19.8%**，属于明显配额浪费。

### 4. Bedrock Codex GPT-5.6 Sol 缺少显式缓存控制
[#37674](https://github.com/openai/codex/issues/37674) | 💬 12 | 👍 12 | 🏷️ enhancement / rate-limits / aws-bedrock

通过 Native Codex CLI 请求 Amazon Bedrock Mantle 时无法启用显式 prompt caching，导致大量 cache-write token 和更高的成本。用户提供了独立于 #35300 的生产环境数据佐证。

### 5. Web 端 "Too many requests" 阻塞聊天与 Work 任务
[#38503](https://github.com/openai/codex/issues/38503) | 💬 9 | 👍 11 | 🏷️ bug / codex-web / rate-limits

ChatGPT 网页端出现 "Too many requests" 模态弹窗，阻断对话访问，同时干扰 Work 任务。桌面端（26.810.41047）与网页端共用同一账号时容易触发，疑似并发限流判定问题。

### 6. API Key 用户被禁止使用本地/私有插件市场
[#20621](https://github.com/openai/codex/issues/20621) | 💬 4 | 👍 28 | 🏷️ bug / auth / skills

API Key 认证模式直接屏蔽本地/私有插件市场管理功能，Enterprise 用户也受影响。虽然已经 CLOSED，但 28 个 👍 表明社区对插件生态开放性的诉求非常强烈。

### 7. Windows 主机与 Android Remote 配对成功但对话无法加载
[#39815](https://github.com/openai/codex/issues/39815) | 💬 11 | 👍 3 | 🏷️ bug / windows-os / remote

Android 可成功与 Windows 主机配对，但 Remote 视图无法加载对话/任务，`/wham/tasks/list` 返回 503。此前可用，属功能回归。

### 8. Native 子代理编排在非 OpenAI 自定义供应商上失效
[#17598](https://github.com/openai/codex/issues/17598) | 💬 9 | 👍 2 | 🏷️ bug / custom-model / subagent

Codex CLI 0.120.0 + gpt-5.4 + 自定义 provider 下，原生 subagent 编排无法正常工作。对通过代理/第三方网关使用 Codex 的用户影响明显。

### 9. MCP 工具调用结果解码失败
[#29002](https://github.com/openai/codex/issues/29002) | 💬 6 | 👍 7 | 🏷️ bug / mcp / tool-calls

当 MCP 工具返回合法的 `CustomResult` 时，Codex 抛出 "Unexpected response type"，导致调用失败。该问题在 0.141.0 中复现，且通过 Bedrock provider 可稳定触发。

### 10. 线程重命名后 SQLite 标题陈旧
[#16405](https://github.com/openai/codex/issues/16405) | 💬 7 | 👍 3 | 🏷️ bug / TUI

重命名线程时更新了 `session_index.jsonl`，但 `state_*.sqlite` 的 `threads.title` 未同步更新，导致分裂状态（split-brain）。虽然 resume/list 代码路径做了掩盖，但底层一致性问题依旧存在。

---

## 重要 PR 进展

以下为过去 24 小时内合并/关闭的 10 个重要 PR（多数由 `copyberry[bot]` 提交）：

### 1. 统一执行中遵循细粒度沙箱审批
[PR #40024](https://github.com/openai/codex/pull/40024) | ✅ CLOSED

统一 exec 沙箱升级路径现在使用共享的审批策略检查。`require_escalated` 命令在启用 `sandbox_approval` 时会弹出提示，禁用时保持拒绝。

### 2. 添加 Browser 与 Computer Use 配置
[PR #40018](https://github.com/openai/codex/pull/40018) | ✅ CLOSED

新增类型化的 `browser_use` 设置（历史访问、全 CDP 策略、per-origin 下载/上传权限）和 `computer_use` 设置（默认应用访问、macOS bundle ID、Windows AUMID/可执行文件策略）。为浏览器/桌面控制功能沉淀完整的配置模型。

### 3. 在 App Server 中实现 Amazon Bedrock 设置
[PR #40007](https://github.com/openai/codex/pull/40007) | ✅ CLOSED

实现 `account/bedrock/discover`（报告 AWS profiles 与环境凭据）和 `account/bedrock/setup`（持久化选中的 region 和 profile）。补齐 Bedrock on-boarding 的服务端能力。

### 4. 升级命令改为走同步 Guardian 审查
[PR #40005](https://github.com/openai/codex/pull/40005) | ✅ CLOSED

请求 `sandbox_permissions=require_escalated` 的命令（包括非重试场景）现在必须经过完整的 Guardian 审查，而非仅依赖重试标记。

### 5. 权限更新时保留托管 deny-read 规则
[PR #40004](https://github.com/openai/codex/pull/40004) | ✅ CLOSED

将受管的文件系统 `deny_read` 规则与运行时权限更新分离保存，防止权限动态更新时意外削弱安全边界，并拒绝试图移除这些规则的 profile。

### 6. 加固远程安装插件缓存一致性
[PR #40015](https://github.com/openai/codex/pull/40015) | ✅ CLOSED

远程已安装插件与已加载插件快照现在按 active account 隔离，账号切换时丢弃 in-flight 加载；同时将 bundle 协调与直接安装/卸载序列化，避免并发竞态。

### 7. 通过 App Server 暴露 Browser/Computer Use 需求
[PR #40000](https://github.com/openai/codex/pull/40000) | ✅ CLOSED

扩展 `configRequirements/read`，返回 Browser/Computer Use 伞形策略及完整的浏览器策略，包括 origin 特定访问、下载/上传、自动审查和审批控制。

### 8. 对不支持 Fast 模式的模型隐藏状态
[PR #39999](https://github.com/openai/codex/pull/39999) | ✅ CLOSED

修复了选定不支持 Fast mode 的模型时仍显示 "Fast off" 的问题，现在只在模型支持时显示。

### 9. `/copy` 增加响应目标选择器
[PR #39997](https://github.com/openai/codex/pull/39997) | ✅ CLOSED

`/copy` 现在打开一个 picker，支持复制整个响应、各个 fenced code block 和引用块；代码块按语言标记，预览内容，保留空白字符和嵌套引用 Markdown。

### 10. 保留 executor 上下文给 MCP Stop 钩子
[PR #40012](https://github.com/openai/codex/pull/40012) | ✅ CLOSED

executor 提供的 stop-hook 调用被限定在注册该 hook 的 MCP server 环境中，环境不匹配则拒绝；同时随请求转发 turn 元数据。

---

## 热门 Discussions

### 💡 Ideas

- **[/rewind 或 /revert 功能](https://github.com/openai/codex/discussions/9618)** | 💬 19 | 👍 105
  社区呼声最高的功能请求之一。用户认为没有撤销机制让 Codex "几乎不可用"，对比了 OpenCode 和 Claude Code 对 undo 的良好支持。

- **[Plan vs Execute 使用不同模型](https://github.com/openai/codex/discussions/10628)** | 💬 3 | 👍 11
  用户建议 Plan 模式默认使用高推理模型（如 gpt-5.2 high reasoning），Execute 模式使用更快模型，给出架构决策、重构策略等场景说明。

- **[自适应子任务控制](https://github.com/openai/codex/discussions/39862)** | 👍 1
  提议更直观的任务控制系统，动态调整模型选择、推理强度、用量策略和长任务管理。

- **[CLI 预应用交互式编辑审查](https://github.com/openai/codex/discussions/39943)**
  希望 Codex CLI 模仿 Claude Code CLI，在写入本地文件前先展示精确 diff 供用户确认。

### 🛠️ Show and tell

- **[TimeAgent：Codex CLI 回滚/安全包装器](https://github.com/openai/codex/discussions/39832)** | 👍 1
  实验性安全层，提供 npm 包和 VS Code 扩展，支持原生 before/after diff 与受保护的 agent 会话。

- **[Campfire：用 SMS 桥接长时 Codex 会话](https://github.com/openai/codex/discussions/40003)** | 👍 1
  为在机器上长时间运行的 Codex 会话挂接短信通道，用户可远程回答关键问题或确认任务是否结束。

- **[Uruila：基于 Codex 的可证伪代理通信实验](https://github.com/openai/codex/discussions/39912)** | 👍 1
  开源实验项目，通过声明式 Capsule 实现不安装的代理间通信，Codex 作为实现与对抗式审查环境。

- **[Concilium：用 Codex 做跨模型审查](https://github.com/openai/codex/discussions/39828)**
  一个 Claude Code 插件，将 Codex CLI 作为独立模型族审查席位，用于研究与工程问题的交叉验证。

### 💬 General

- **[控制是否压缩成功的命令活动](https://github.com/openai/codex/discussions/39878)** | 👍 1
  针对 PR #38921 引入的"成功命令活动自动压缩"行为提出反馈，用户希望在查看代码细节时保留完整上下文，建议增加开关。

---

## 功能需求趋势

从过去 24 小时的 Issues 与 Discussions 来看，社区最关注的功能方向集中在：

1. **Windows 平台完整支持** — 大量 Issue 集中在 Windows 上 Computer Use、Browser 插件不可用、沙箱初始化失败、EFS 加密文件冲突等问题，Windows 已成为当前最大的体验瓶颈。

2. **Remote 多端连接可靠性** — 多个 Issue 报告配对成功但连接失败、对话加载超时、`turn/start` 30 秒超时。移动端远程功能的稳定性亟待修复。

3. **回滚/撤销能力** — Discussion #9618 以 **105 个 👍** 高居榜首，是当前呼声最高的产品能力缺口。

4. **更细粒度的沙箱与权限控制** — PR 方向显示 Codex 正在构建完整的 `browser_use`/`computer_use` 配置模型和 Guardian 审查链路，社区对安全与权限透明度的需求持续上升。

5. **模型与成本控制透明化** — 多个 Issue 直接反映配额消耗异常（等待轮询多收费、Bedrock 缓存不可控、Pro 5x/20x 额度错配）。用户对 resource consumption 的可观测性和可配置性要求越来越高。

6. **MCP 生态完善** — 包含 MCP OAuth 作用域错误、CustomResult 解码失败、stop hook 隔离、RPC 作用域等多项修复，社区对 MCP 接入质量非常敏感。

---

## 开发者关注点

- **Windows 是重灾区**：Computer Use、浏览器插件、沙箱三大能力在 Windows 上均有高频故障。其中 #25220、#34764、#35718、#38898、#39543 多条互相印证，根因集中在 WindowsApps 文件保护、EFS 加密与 ACL 状态损坏。

- **Remote 功能回归明显**：Windows 主机 + Android 客户端配对大但连接失败是最新的高发问题（#39815、#39856、#39915、#39947、#39974），涉及多个桌面版本，且跨 Android/iOS 均能复现。

- **配额/成本不透明引发信任问题**：等待轮询消耗 19.8% token（#35259）、Pro 用户收到缩水配额（#38157）、Bedrock 缓存写成本过高（#37674），都指向同一方向：用户需要更精细的 quota/usage 控制。

- **状态一致性 Bug 反复出现**：SQLite 线程标题分脑（#16405）、`already has an active writer` 会话恢复失败（#39823）、子任务完成但 `read_thread` 返回空（#40014），说明会话元数据层面的架构复杂度在持续暴露。

- **Alpha 迭代节奏快，稳定性承压**：两天内发布 6 个 alpha 版本（0.149.0-alpha.4.1 → 0.150.0-alpha.6），社区已出现"上一版本正常、新版本崩坏"的回归报告（#38455），官方需要在加速迭代与稳定性保障之间取得平衡。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-08-22）

> 数据来源：github.com/google-gemini/gemini-cli

## 1. 今日速览

今天社区焦点仍然集中在 **Agent 可靠性与执行稳定性** 上：多个 P1 级 Issue 反映 subagent 在 MAX_TURNS 后误报成功、generalist agent 持续挂起，以及 shell 命令完成后界面仍卡在等待输入。安全与沙箱方向也有重要动作：macOS Seatbelt 沙箱隔离与「401 子串误判」修复合并。此外，PR 生成/评测基础设施出现一批大规模 PR 提交，团队正在强化自动化 bug 修复与评估管线。

## 2. 版本发布

### v0.56.0-nightly.20260821.g30573d2e4

过去 24 小时仅发布该 Nightly 版本，主要包含两项变更：

- **fix(core): 统一 ignore 路径处理中的 symlink 求值行为**  
  修复忽略路径中符号链接处理不一致的问题，由 @luisfelipe-alt 提交。  
  [查看 PR #28915](https://github.com/google-gemini/gemini-cli/pull/28915)

- **refactor(core): 移除 shellExecutionService 中的 eslint-disable 和类型断言**  
  为后续 PTY 资源泄漏修复铺路，减少非安全类型断言。  
  [查看 PR #28862](https://github.com/google-gemini/gemini-cli/pull/28862)

## 3. 社区热点 Issues

以下为过去 24 小时内更新最频繁、或对开发者影响最直接的 10 个 Issue：

### #22323 Subagent 在 MAX_TURNS 后被误报为 GOAL 成功
- **标签**：P1 / kind/bug / need-retesting
- **评论**：13 条 | 👍 2
- **摘要**：`codebase_investigator` 等 subagent 实际已触发最大轮次限制，但最终仍报告 `status: "success"` 与 `Termination Reason: "GOAL"`，导致中断被隐藏，影响自动化任务可信度。  
- [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

### #21409 Generalist agent 挂起无响应
- **标签**：P1 / kind/bug / need-retesting
- **评论**：8 条 | 👍 8
- **摘要**：一旦 `gemini-cli` 将任务交给 generalist agent，就可能永久挂起；简单的建文件夹操作也能卡住一小时。用户反馈通过在 prompt 中禁止 defer 到 subagent 可绕过。点赞数高，影响面较大。  
- [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

### #25166 Shell 命令完成后卡在 “Waiting input”
- **标签**：P1 / area/core / kind/bug / effort/medium
- **评论**：4 条 | 👍 3
- **摘要**：执行极其简单的 CLI 命令后，命令实际已完成，但 Gemini CLI 仍显示进程活跃并等待用户输入，反复出现。属于高频执行路径上的体验问题。  
- [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

### #22745 评估 AST-aware 文件读取、搜索与代码库映射
- **标签**：P2 / EPIC / area/agent
- **评论**：7 条 | 👍 1
- **摘要**：追踪 AST 感知工具是否有价值，例如单次工具调用精确读取方法边界、减少 token 噪声、改进代码库导航。这是影响长期上下文效率的探索性 EPIC。  
- [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

### #21968 Gemini 不会主动使用 skills 和 sub-agents
- **标签**：P2 / kind/bug / need-retesting
- **评论**：6 条
- **摘要**：用户反馈 Gemini 几乎不会自动使用自定义 skills 与 sub-agents，即使存在高度相关的 gradle/git skill，也只在用户明确指示时才调用。这直接影响工具生态的价值释放。  
- [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

### #21983 Browser subagent 在 Wayland 下失败
- **标签**：P1 / agent/browser / kind/bug / need-retesting
- **评论**：4 条 | 👍 1
- **摘要**：浏览器 subagent 在 Wayland 会话中失败，Termination Reason 为 GOAL，但实际未能完成任务。对 Linux 桌面用户影响明显。  
- [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

### #22232 增强 browser_agent 韧性：自动接管会话与锁恢复
- **标签**：P3 / kind/feature / customer-issue
- **评论**：4 条
- **摘要**：`BrowserManager.ts` 遇到浏览器 profile 被锁时会直接 fail-fast，例如 persistent 模式下存在僵尸进程时。用户希望增加自动会话接管和锁恢复机制。  
- [Issue #22232](https://github.com/google-gemini/gemini-cli/issues/22232)

### #26522 Auto Memory 无限重试低信号 session
- **标签**：P2 / kind/bug
- **评论**：5 条
- **摘要**：当后台提取 agent 认为某个 session 信号量低而决定不读取时，该 session 永远不会被标记为 processed，导致后续反复出现在待处理索引中。需要更智能的终止条件。  
- [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

### #26525 Auto Memory 需要确定性脱敏并减少日志
- **标签**：P2 / area/security / kind/bug
- **评论**：4 条
- **摘要**：Auto Memory 会在模型上下文已经接收本地 transcript 内容后才提示模型脱敏；另外服务可能记录已有 skill 内容。这是安全/隐私相关的高优先级改进。  
- [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)

### #24246 工具数量超限时触发 400 错误
- **标签**：P2 / area/agent / kind/bug / need-information
- **评论**：3 条
- **摘要**：当可用工具数量超过限制（标题为 >128，正文描述 >400）时，Gemini CLI 直接遇到 400 错误，而不是智能裁剪工具范围。对于启用大量 MCP 工具的用户是硬阻塞。  
- [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)

## 4. 重要 PR 进展

以下为过去 24 小时内更新或合并的 10 个重点 PR：

### #28955 依赖更新、添加 MCP 配置、集成 ECC bundles
- **状态**：Open | size/xl
- **摘要**：大规模依赖与配置更新，并新增 MCP 相关配置；可能影响本地工具扩展方式，值得关注兼容性变化。  
- [PR #28955](https://github.com/google-gemini/gemini-cli/pull/28955)

### #28934 历史回滚与重试 nudge 优化
- **状态**：Open | size/l
- **摘要**：优化工具调用取消和重试机制，避免上下文窗口膨胀，减少 API 请求量，并最大化重试时的 prefix caching 效果。对长会话成本优化意义重大。  
- [PR #28934](https://github.com/google-gemini/gemini-cli/pull/28934)

### #28827 修复 401 子串导致的伪认证错误
- **状态**：Open | priority/p2 | size/s
- **摘要**：修复 `isAuthenticationError` 将包含 “401” 的无关内容判断为认证失败的问题；回归测试覆盖端口、退出码等场景。  
- [PR #28827](https://github.com/google-gemini/gemini-cli/pull/28827)

### #28940 A2A server：清除新消息轮次的过期取消错误
- **状态**：Open | size/l
- **摘要**：修复 Google Cloud Assistant 场景下，请求被取消后再发新 prompt 立即报 `Execution aborted` 的状态污染问题。  
- [PR #28940](https://github.com/google-gemini/gemini-cli/pull/28940)

### #28935 macOS Seatbelt 沙箱隔离 Docker 与容器运行时
- **状态**：Closed | size/l
- **摘要**：禁止从 Seatbelt 沙箱访问容器运行时 daemon 的 UNIX socket、CLI 二进制、Mach/XPC 服务及 POSIX 共享内存，防止通过 Docker Desktop VirtioFS 逃逸沙箱。  
- [PR #28935](https://github.com/google-gemini/gemini-cli/pull/28935)

### #20238 缓解防病毒软件对错误报告的误报
- **状态**：Closed | help wanted | area/security
- **摘要**：将错误报告从 `os.tmpdir()` 移入 `~/.gemini/tmp/<hash>/error-reports/` 并调整文件内容，降低杀毒软件将 Gemini CLI 错误报告标记为恶意文件的概率。  
- [PR #20238](https://github.com/google-gemini/gemini-cli/pull/20238)

### #28862 重构 shellExecutionService，移除 eslint-disable 与类型断言
- **状态**：Closed | size/l
- **摘要**：移除 `shellExecutionService.ts` 中不安全类型断言，为 mac PTY 资源泄漏修复分支提供更干净的实现基础。  
- [PR #28862](https://github.com/google-gemini/gemini-cli/pull/28862)

### #28951 PR 生成：Cloud Run Job、Workflow 编排与部署管线
- **状态**：Open | size/m
- **摘要**：为 Caretaker PR 生成流水线添加生产级 Cloud Run Job 配置、Cloud Workflow 编排和部署脚本。  
- [PR #28951](https://github.com/google-gemini/gemini-cli/pull/28951)

### #28948 PR 生成：评测套件 harness 与端到端 benchmark runner
- **状态**：Open | size/xl
- **摘要**：新增 `eval_suite.py`、`eval_orchestrator.py`、`eval_config.py` 等评测模块，并配套端到端 pipeline runner，用于在精选 issue 上基准测试自动化 PR 生成 agent。  
- [PR #28948](https://github.com/google-gemini/gemini-cli/pull/28948)

### #28949 PR 生成：LLM-as-a-Judge diff 评测模块与评分 rubric
- **状态**：Open | size/l
- **摘要**：引入 `eval_diff_judge.py` 和 `judge_prompt.md`，用 LLM 对生成 PR diff 与 ground-truth PR 进行自动评分，推动 PR 生成质量的可量化评估。  
- [PR #28949](https://github.com/google-gemini/gemini-cli/pull/28949)

## 5. 热门 Discussions

> 本次数据源未提供 Discussions 更新数据，本节省略。

## 6. 功能需求趋势

综合过去 24 小时内的 Issues 与 PR，社区/团队关注方向可归纳为以下六点：

1. **Agent 可靠性与自主性**  
   Subagent 误报成功、generalist agent 挂起、不主动使用 skills 等问题集中爆发。核心诉求是让 Agent 在真实复杂任务中更稳定、更可预期。

2. **上下文与内存管理**  
   MAX_TURNS 误报、Auto Memory 无限重试、历史回滚优化、工具数量超限等，都指向“长会话下上下文失控”这一核心痛点。团队正试图从 prompt、缓存、后台提取机制多个层面缓解。

3. **安全与沙箱**  
   包括 Mac Seatbelt 对容器运行时 socket 的隔离、Auto Memory 的确定性脱敏、错误报告被杀毒软件误报等。安全正在从“功能安全”延伸到“数据安全与系统隔离”。

4. **Shell 执行稳定性**  
   Shell 命令完成后卡住、PTY 资源泄漏重构、401 误判修复，说明 shell/tool 执行层仍然是当前稳定性短板。

5. **AST 感知与代码导航**  
   AST-aware 文件读取和代码库映射被多次提及，目标是减少无效 token 消耗、提升文件操作方法级精度。

6. **评测与可观测基础设施**  
   大量 PR 集中在 PR-generation 评测管线、golden dataset、LLM-as-a-Judge、子代理轨迹共享等方向。社区和团队都在为 Agent 行为建立更强的可观测性和可评估性。

## 7. 开发者关注点

开发者反馈中反复出现的痛点和需求包括：

- **Subagent 误报与挂起**：`#22323`、`#21409` 都说明 subagent 层对中断/异常的状态上报并不可靠，开发者无法信任自动化结论。
- **Shell 命令卡死**：`#25166` 表明即使简单命令也会出现“命令已结束但 UI 等待输入”的假死状态，严重影响日常使用。
- **Browser agent 兼容性**：Wayland 失败、浏览器 profile 锁恢复机制缺失，是 Linux 桌面与持久化会话用户的高频痛点。
- **Agent 不主动使用已有技能**：`#21968` 反映出 CLI 对自定义 skills/sub-agents 利用不足，用户期望更激进、更聪明的工具调用。
- **配置/上下文可见性不足**：`settings.json` 覆盖被忽略、subagent 轨迹无法通过 `/chat share` 分享、`/bug` 报告缺少 subagent 内部上下文，都是“无法理解和调试 agent 行为”的典型表现。
- **安全和隐私敏感度提升**：开发者关注 Auto Memory 的脱敏时机、错误报告落盘位置、沙箱逃逸风险，说明 CLI 类工具正被用于更正式的生产环境。

---

以上是 2026-08-22 的 Gemini CLI 社区动态摘要。完整信息可直接访问 [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) 查看。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-08-22）

## 今日速览

v1.0.81-7 于昨日发布，新增会话恢复能力和 `copilot app` 命令。Issue 侧，BYOK 多模型支持仍是社区最高赞需求；同时 MCP 连接可靠性、预发布版本回归、Windows 下命令执行弹窗等问题成为今日讨论重点。

## 版本发布

### v1.0.81-7
链接：https://github.com/github/copilot-cli/releases/tag/v1.0.81-7

主要更新：

- **启动恢复会话**：CLI 启动时可恢复之前异常退出/重启前仍打开的会话，避免手动逐个重开终端。
- **models.list 增强**：每个模型的列表项现在包含服务端发布的 `infoMessages` / `warningMessages`。
- **新增 `copilot app` 命令**：用于打开 GitHub 应用（原文截断，详细用法待官方补充）。

## 社区热点 Issues

### 1. #3282 支持在 CLI 中配置多个 BYOK 模型
链接：https://github.com/github/copilot-cli/issues/3282  
状态：Open · 👍26 · 💬8

目前 CLI 只支持通过环境变量配置单个 BYOK 模型，TUI 内无法切换，必须终止会话并重设环境变量。社区认为这是 BYOK 工作流的关键瓶颈。

### 2. #3709 允许 `/model` 在同一会话中切换多模型（含 BYOK/本地）
链接：https://github.com/github/copilot-cli/issues/3709  
状态：Open · 👍27 · 💬4

与 #3282 互补，希望 `/model` 选择器不只展示 GitHub 托管模型，也能列出已配置的本地/BYOK 模型，实现真正的会话内模型切换。

### 3. #1313 会话分支（Session Branching）
链接：https://github.com/github/copilot-cli/issues/1313  
状态：Open · 👍13 · 💬7

希望从当前会话派生新分支，完整继承对话历史，同时保留原会话分支点。昨日 Release 新增的“崩溃后恢复”缓解了会话丢失问题，但分支仍是高赞需求。

### 4. #4345 `reasoning effort 'medium'` 在 Claude Haiku 4.5 上不支持
链接：https://github.com/github/copilot-cli/issues/4345  
状态：Open · 💬8

当 `copilot_cli_opus_medium_effort_default` 和 `copilot_cli_gpt_5_4_mini_for_explore` 两个开关同时启用时，子代理执行反复报错。说明模型能力与 CLI 参数需要更好的协商机制。

### 5. #4211 MCP 结构化响应含 BigInt 时无法处理
链接：https://github.com/github/copilot-cli/issues/4211  
状态：Open · 💬5

MCP server 返回大数字时，CLI 直接抛出 `TypeError: Do not know how to serialize a BigInt`，所有进行中的任务被中止。对使用大型数值的 MCP 生态影响明显。

### 6. #4535 `store_memory` 在 1.0.81 预发布版中回归失败
链接：https://github.com/github/copilot-cli/issues/4535  
状态：Open · 💬4

`store_memory` 在 1.0.81 prerelease 中缺少必要 instance ID，导致记忆存储功能不可用。开发者对预发布通道的质量比较敏感。

### 7. #4521 Sandbox 无法真正禁用
链接：https://github.com/github/copilot-cli/issues/4521  
状态：Open · 👍4 · 💬3

配置界面显示 Sandbox 已禁用，但 Sandbox 状态仍为启用，实际执行也在沙箱中进行。配置与实际行为不一致，影响自动化与权限调试。

### 8. #4533 并行子代理导致 TUI 停止消费事件
链接：https://github.com/github/copilot-cli/issues/4533  
状态：Open · 💬1

在 1.0.81-4/5 预发布版中，当回合启动“并行子代理块”时，终端 UI 输入和滚动完全卡死，但 Rust 运行时仍在后台持续调用模型。这是严重的可用性问题。

### 9. #4542 工作区 `.mcp.json` 被识别但未实际连接
链接：https://github.com/github/copilot-cli/issues/4542  
状态：Open · 👍1 · 💬1

`copilot mcp list` 能正确检测工作区 MCP server 并显示 Enabled，但在实际 agent 会话中工具并不可用。检测与连接逻辑脱节，严重干扰 MCP 工作流。

### 10. #4549 Windows 上每次执行命令都闪现 PowerShell 窗口
链接：https://github.com/github/copilot-cli/issues/4549  
状态：Open · 💬1

Windows 下每个 shell 命令都会短暂弹出 PowerShell/`conhost` 窗口，频繁操作时不断抢夺焦点，影响日常使用体验。

## 重要 PR 进展

过去 24 小时内无 PR 更新。

## 功能需求趋势

- **多模型与 BYOK 扩展**：多个 Issue 要求支持多个 BYOK/本地模型以及会话内 `/model` 切换，是当前最高赞功能方向。
- **MCP 生态稳定性**：BigInt 序列化、工作区 `.mcp.json` 实际连接、MCP reload 配置快照等成为热点。
- **会话管理体验**：会话分支、`/resume` 按相关性分组导致“找不到旧会话”、崩溃后恢复等需求持续出现。
- **模型配置灵活性**：`auto` 模式下 reasoning effort 固定为 null、模型能力与参数协商（如 Haiku 4.5 不支持 `medium`）引发讨论。
- **Windows 与桌面端体验**：PowerShell 窗口闪烁、`wta.exe` 路径引号问题、桌面 WebView2 崩溃等高频出现，平台适配仍需加强。

## 开发者关注点

- **预发布版本回归问题**：`store_memory` 失败、TUI 事件卡死等，说明预发布通道需要更强的回归检查。
- **配置“看起来生效但实际不对”**：Sandbox 禁用无效、MCP 检测与实际连接不一致，严重影响开发者对配置系统的信任。
- **企业/托管账户模型限制**：曾出现所有 Claude 模型不可用的问题（#4422，已关闭），此类服务端策略变化需更透明的告知机制。
- **自动化协议（ACP）语义一致性**：`session/cancel`、后台子代理取消等行为需与 ACP 规范对齐，否则自动化构建不可靠。

数据来源：https://github.com/github/copilot-cli

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-22

## 今日速览

今日 OpenCode 社区围绕**核心稳定性修复**展开，连续发布 v1.18.20 和 v1.18.21 两个补丁版本，重点修复了流式响应中断、网络错误重试机制及桌面端文件搜索闪烁等问题。PR 方面涌现出大量针对 V2 架构的持久化与 fork 一致性修复，同时社区对 DeepSeek 免费模型不可用、自定义 provider 兼容性、以及会话归档恢复等功能的讨论热度持续走高。

---

## 版本发布

### v1.18.21
- **Core 修复**：
  - 当模型返回未知 finish reason 时继续响应而非提前停止
  - Vertex AI `eu` 和 `us` 多区域 Gemini 请求改经 REP 端点路由
- **Desktop 修复**：
  - 保持文件搜索结果在下次搜索加载期间可见

### v1.18.20
- **Core 修复**：
  - 失败的 subagent 工具调用现在通过可恢复的 `task_id` 暴露
  - 对以 `finish_reason: network_error` 结束的 provider 响应进行重试
  - 覆盖更多网络错误变体的重试机制（`network-error`、`network_error`）
  - 以可恢复方式暴露 subagent 失败，而非静默返回

---

## 社区热点 Issues

### 1. [#785 Is there a way to disable streaming mode?](https://github.com/anomalyco/opencode/issues/785) — OPEN
- **作者**: SimonWai | 评论: 31 | 👍: 38
- **重要性**: 老牌 Issue（2025 年创建）至今仍有 38 个赞和 31 条评论，说明代理型 provider 不支持流式是长期存在的真实痛点。用户使用的 Credal OpenAI Proxy 报 `Streaming is not supported`，需求是提供关闭流式模式的选项。

### 2. [#6245 ctrl+p in VSCode doesn't work](https://github.com/anomalyco/opencode/issues/6245) — CLOSED
- **作者**: VDuchauffour | 评论: 11 | 👍: 24
- **重要性**: 编辑器键位冲突问题，`ctrl+p` 在 VSCode 终端内被全局命令拦截。24 个👍说明大量用户受影响，且已关闭，可关注解决方案的落地方式。

### 3. [#12377 [RFC] Cost Tracking Architecture: Subagent Aggregation + Multi-Model Correctness](https://github.com/anomalyco/opencode/issues/12377) — CLOSED
- **作者**: bluet | 评论: 10
- **重要性**: 成本追踪架构的 RFC，涉及 subagent 成本聚合（#11027）和多模型成本准确性。对使用 multi-agent 工作流的企业用户至关重要，10 条评论围绕架构方案展开，已关闭说明即将进入实施阶段。

### 4. [#24153 [FEATURE] Add unarchive/restore for archived sessions](https://github.com/anomalyco/opencode/issues/24153) — OPEN
- **作者**: alohaninja | 评论: 9 | 👍: 11
- **重要性**: 会话归档目前是单向操作，归档后只能变暗显示。用户希望恢复/取消归档功能。11 个👍表明会话管理是社区普遍诉求。

### 5. [#35376 [Feature] Lazy-load MCP tool definitions to reduce token overhead](https://github.com/anomalyco/opencode/issues/35376) — CLOSED
- **作者**: jijoyo | 评论: 7
- **重要性**: 当连接 9 个 MCP 服务器时，所有工具定义注入每个对话的系统提示词，token 开销极大。该 Issue 提出按需懒加载 MCP 工具定义，对 tokens 敏感的用户有直接价值。

### 6. [#30906 Desktop v1.16.0 Windows: renderer unresponsive / UI freeze when computing diff of large files](https://github.com/anomalyco/opencode/issues/30906) — CLOSED
- **作者**: emaxlele | 评论: 7 | 👍: 2
- **重要性**: Windows 桌面端在计算大文件 diff 时 UI 完全冻结，且被标记为 v1.15.13 到 v1.16.0 的回归问题。直接影响大文件场景下的开发者体验。

### 7. [#43983 [FEATURE] Expose OpenCode Go usage history through the API key](https://github.com/anomalyco/opencode/issues/43983) — OPEN
- **作者**: vulturetone | 创建于 2026-08-21 | 评论: 5
- **重要性**: 用户希望通过 API key 认证的端点获取 OpenCode Go 使用历史。当天创建就有 5 条评论，说明用量透明化需求热度较高。

### 8. [#43829 Deepseek-v4-flash-free Not Available](https://github.com/anomalyco/opencode/issues/43829) — OPEN
- **作者**: aarya-soul | 创建于 2026-08-21 | 评论: 5
- **重要性**: DeepSeek 免费模型不可用，用户报告在免费层中看不到该模型。直接关联 [#43805](https://github.com/anomalyco/opencode/issues/43805)（模型未出现在 Zen 下拉框中），是两个独立用户同时报告，开发者应高度重视。

### 9. [#34473 Opencode randomly stops responses](https://github.com/anomalyco/opencode/issues/34473) — OPEN
- **作者**: dattarohu-coder | 更新于 2026-08-21 | 评论: 5 | 👍: 3
- **重要性**: v1.17.11 桌面版随机停止响应，无错误输出，直接播放完成音。这种"静默截断"问题对日常使用影响极大，可能与今日 v1.18.21 中"unknown finish reason 继续响应"的修复相关联。

### 10. [#41847 Permission dialogs not rendered: backend blocks on invisible prompts, app appears frozen](https://github.com/anomalyco/opencode/issues/41847) — OPEN
- **作者**: teran-netizen | 评论: 4
- **重要性**: 27 天内产生了 3270 个权限提示，用户一个都看不到，后端无限阻塞。权限对话框渲染问题在无人值守模式下可能一直在后台排队等待，属于隐蔽而严重的问题。

### 11. [#42657 TUI lag with multi-subagent sessions (97% CPU on render thread)](https://github.com/anomalyco/opencode/issues/42657) — OPEN
- **作者**: BenjaMolina | 评论: 3
- **重要性**: 2-4 个并发 subagent 时 TUI 卡顿，输入延迟 1-3 秒，渲染线程 CPU 占用 97%。Warps、Windows Terminal、WezTerm 均复现，是 TUI 性能的显著瓶颈。

### 12. [#43850 OpenCode Desktop 1.18.20 – ChatGPT Plus OAuth fails with Unexpected server error](https://github.com/anomalyco/opencode/issues/43850) — OPEN
- **作者**: KeyandBoy | 评论: 3
- **重要性**: 最新桌面版 ChatGPT Plus OAuth 授权失败（Token exchange 403）。影响 Plus 订阅用户的核心功能，3 条评论当天产生。

---

## 重要 PR 进展

### 1. [#44015 fix(core): canonicalize macos session paths](https://github.com/anomalyco/opencode/pull/44015) — OPEN
- **作者**: AidenGeunGeun
- **内容**: 修复 macOS 上会话路径因大小写不一致导致的问题，将路径规范化后用于会话创建、目录过滤等。关闭 #44014。

### 2. [#44021 fix(core): resolve device verification URL](https://github.com/anomalyco/opencode/pull/44021) — OPEN
- **作者**: kitlangton
- **内容**: 修复 OpenCode Console 设备授权链接在 API 返回根路径时拼接错误的问题，避免把 `https://opencode.ai/console` 处理成相对路径导致跳转失败。

### 3. [#44020 fix(core): migrate provider-local state](https://github.com/anomalyco/opencode/pull/44020) — OPEN
- **作者**: AidenGeunGeun
- **内容**: V1 到 V2 迁移时提取当前 assistant provider 的元数据对象，避免迁移 text/reasoning/tool parts 时丢失 provider 本地状态。关闭 #44019。

### 4. [#44018 fix(core): retain plugins across dist rebuilds](https://github.com/anomalyco/opencode/pull/44018) — OPEN
- **作者**: AidenGeunGeun
- **内容**: 修复 `dist/` 目录重建导致已配置插件丢失的问题——通过监听 `dist` 上级目录保持插件配置稳定。关闭 #44017。

### 5. [#44016 fix(core): harden portable shell authorization](https://github.com/anomalyco/opencode/pull/44016) — OPEN
- **作者**: kitlangton
- **内容**: 加固可移植 shell 权限扫描器，防止赋值-only 重定向和 PowerShell 回车符等模糊 shell 输入在较窄的已保存审批下执行，属于安全加固。

### 6. [#44000 fix(codegen): stabilize generated contract names](https://github.com/anomalyco/opencode/pull/44000) — OPEN
- **作者**: kitlangton
- **内容**: 让生成的 Effect 客户端和匿名 OpenAPI 名称从遍历位置依赖改为从 contract 身份派生，生成代码语义更稳定。

### 7. [#44013 fix(core): preserve migration event watermark](https://github.com/anomalyco/opencode/pull/44013) — OPEN
- **作者**: AidenGeunGeun
- **内容**: 防止 V1 projection 重建时事件计数器低于已持久化的 V2 事件，确保迁移数据不丢。关闭 #44012。

### 8. [#44011 fix(core): stabilize forked message IDs](https://github.com/anomalyco/opencode/pull/44011) — OPEN
- **作者**: kitlangton
- **内容**: 修复重放 `session.forked` 事件时拷贝父行产生新的消息 ID 的问题，使 fork 消息 ID 在持久化事件重放时保持确定性。

### 9. [#43656 feat(opencode): OpenCode ephemeral sessions](https://github.com/anomalyco/opencode/pull/43656) — OPEN
- **作者**: 5herlocked
- **内容**: 为 OpenCode server 增加临时会话（ephemeral sessions）核心概念，关闭 #4489（一个较旧的 feature 请求），并使 #40863 成为可能。属于重量级功能 PR。

### 10. [#43719 feat(desktop): add MCP server setup and connection testing](https://github.com/anomalyco/opencode/pull/43719) — OPEN
- **作者**: sentryshub
- **内容**: 为桌面应用新增 MCP 设置页面，支持无需手改配置文件即可管理 MCP 服务器并测试连接。闭合 #40335，是桌面端易用性的重要改进。

### 11. [#44009 fix(tui): auto-approve background tab permissions](https://github.com/anomalyco/opencode/pull/44009) — OPEN
- **作者**: AidenGeunGeun
- **内容**: 修复 V2 TUI `--auto` 模式只自动批准当前会话路由、后台 tab 阻塞的问题。将 auto-approval 响应器从会话路由移至 tab 上下文。关闭 #44007。

### 12. [#44002 fix(core): recover partial provider failures](https://github.com/anomalyco/opencode/pull/44002) — OPEN
- **作者**: kitlangton
- **内容**: 当 provider 输出部分结果后出现可重试的 `ProviderInternal` 错误且未发生工具调用时，自动恢复并继续，避免对话中断。

---

## 热门 Discussions

> 今日数据源未提供 Discussions 部分，本节略。

---

## 功能需求趋势

从今日 Issues 和 PR 中可提炼以下社区最关注的功能方向：

1. **会话生命周期管理**：归档会话的取消归档/恢复（#24153）、临时会话（#43656）、fork 一致性与确定性 ID（#44011/#44004）、fork 时排除运行中 shell 投影（#44001）——会话管理正在从基础功能走向精细化治理。

2. **流式模式与网络容错**：禁用 streaming 的配置选项（#785）、网络错误自动重试（v1.18.20）、未知 finish reason 继续响应（v1.18.21）——社区对网络环境的多样性要求更高，希望 OpenCode 在不稳定网络中保持可靠。

3. **MCP 工具生态优化**：MCP 工具定义懒加载降低 token 开销（#35376）、桌面端 MCP 服务器管理界面（#43719）、MCP 侧边栏错误展示优化（#44003）——MCP 已从"能用"走向"好用"。

4. **成本与用量透明化**：成本追踪架构 RFC（#12377）、OpenCode Go 用量历史 API（#43983）——多模型、多代理场景下，用户需要准确、可查询的成本数据。

5. **模型与 Provider 兼容性**：DeepSeek 免费模型可见性（#43829/#43805）、ChatGPT Plus OAuth 修复（#43850）、自定义 provider 兼容（#44006）——模型/服务商快速迭代中，OpenCode 的适配速度是用户最直接的感知。

6. **TUI/UI 渲染性能**：多 subagent 会话渲染卡顿（#42657）、大文件 diff 冻结（#30906）、Web UI 版本号滞后（#36232）——性能与一致性在复杂场景下需要更多关注。

---

## 开发者关注点

1. **网络与 Provider 稳定性**：streaming 不支持导致请求硬失败（#785）、`finish_reason: network_error` 中断（v1.18.20 修复）、随机停止响应（#34473）——开发者期望 OpenCode 能容忍上游 provider 的不完美行为，自动重试或优雅降级。

2. **可见性与透明度**：27 天 3270 个权限提示全部不可见（#41847）、使用历史无法查询（#43983）、Web UI 版本号滞后（#36232）——用户需要知道系统在做什么、花了多少钱、跑的是什么版本。

3. **V2 迁移稳定性**：迁移事件水位线保持（#44013）、provider 本地状态迁移（#44020）、插件在 dist 重建后保留（#44018）——V2 迁移过程中数据不丢、配置不丢是用户最关心的底线。

4. **TUI 性能瓶颈**：4 并发 subagent 时 97% CPU 渲染线程占用（#42657），输入延迟 1-3 秒——多代理工作流在 TUI 端需要更高效的渲染策略。

5. **跨平台与桌面端体验**：Windows 大文件 diff 冻结（#30906）、FreeBSD 安装受限（#33219）、VSCode 键位冲突（#6245）——非 macOS/Linux 主流平台用户的需求同样迫切。

6. **新模型免费层可用性**：DeepSeek-v4-flash-free 从模型列表中消失（#43829/#43805）、Zen 网关模型与 TUI 下拉框不同步——模型路由与显示一致性问题直接伤害免费用户信任。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 2026-08-22

## 今日速览

过去 24 小时无新版本发布。社区焦点集中在 **自动压缩失效**（#6879）、**终端 Backspace 兼容性问题**（#7130/#2733）以及 **OpenRouter 缓存缺失导致的成本翻倍**（#7995）上。PR 方面，**会话重建修复**（#8428）与 **xAI Grok Build 兼容性修复**（#8422）值得关注；Discussion 中 **JetBrains 推出 ThinkRail Web GUI**（#8449）带来新景象。

## 社区热点 Issues

1. **#6879 自动压缩在上下文超过 100% 后不触发，直到 Provider 溢出**  
   评论 19，👍 17。最受关注的问题：长会话中压缩阈值形同虚设，最终被 API 拒绝（373k tokens）才被迫压缩。  
   https://github.com/earendil-works/pi/issues/6879

2. **#2733 Windows Terminal 中退格键和删除键失效（已关闭）**  
   评论 11。从 0.62.0 升级后出现，影响基本编辑操作，讨论依然活跃。  
   https://github.com/earendil-works/pi/issues/2733

3. **#7130 Kitty 终端下退格键删除两个字符**  
   评论 9。怀疑 Kitty 键盘协议释放事件未过滤，导致键码冲突。  
   https://github.com/earendil-works/pi/issues/7130

4. **#8157 将 grok-mermaid 迁移至 lovely-mermaid**  
   评论 8。原实现是 grok build 的 1:1 移植，继承大量边缘 case；新渲染器解析器更完善。  
   https://github.com/earendil-works/pi/issues/8157

5. **#7553 压缩功能可配置独立的思考级别/模型**  
   评论 8。目前压缩无条件复用当前会话的 thinking level，用户希望对推理模型单独设定总结预算。  
   https://github.com/earendil-works/pi/issues/7553

6. **#7995 openai-responses 不支持 anthropic 缓存控制，成本实测 2.5 倍**  
   评论 7。基于 870 次基准测试，缺少 `cache_control` 导致 Claude 经 OpenRouter 时缓存失效，费用显著增加。  
   https://github.com/earendil-works/pi/issues/7995

7. **#8134 通过正向代理访问纯 HTTP Provider 时，首个工具调用后 Agent 停止**  
   评论 4。0.84.0 回归，代理环境下后续模型请求挂起。  
   https://github.com/earendil-works/pi/issues/8134

8. **#2644 长会话崩溃：JavaScript heap out of memory（SIGABRT）**  
   评论 4。重工具使用 30+ 分钟后 Node.js OOM，直接退出。  
   https://github.com/earendil-works/pi/issues/2644

9. **#7746 全屏模式双击选择路径时，路径被 `/` 和 `-` 拆断**  
   评论 3。`Intl.Segmenter` 将路径组件当作边界，无法快速选中完整路径。  
   https://github.com/earendil-works/pi/issues/7746

10. **#8133 按模型配置压缩设置（compaction.profiles）**  
    评论 3，👍 3。希望不同模型有不同的 `reserveTokens` 等压缩参数，当前全局值作为默认。  
    https://github.com/earendil-works/pi/issues/8133

## 重要 PR 进展

过去 24 小时共 8 个 PR 更新，重点如下：

1. **#8459（已合并）修复全屏双击选择保留 `/` 和 `-`**  
   直接解决 Issue #7746，用自定义字符边界替代默认 Segmenter 逻辑。  
   https://github.com/earendil-works/pi/pull/8459

2. **#8443（已合并）experimental 下 `/share` 改用 Radius artifacts**  
   替代 gist，支持未登录时自动触发认证流并生成 artifact。  
   https://github.com/earendil-works/pi/pull/8443

3. **#8433（已合并）coding-agent 新增 `--exclude-extensions`**  
   允许“正常扩展集减去指定扩展”，避免 all-or-nothing 的加载方式。  
   https://github.com/earendil-works/pi/pull/8433

4. **#8428（已合并）修复会话重建时工具结果配对**  
   解决 #8166：resume/compaction/分支导航后，工具结果重新配对到正确的助手消息，并清理孤立结果。  
   https://github.com/earendil-works/pi/pull/8428

5. **#8424（开放）丢弃失败的扩展工厂状态**  
   扩展加载失败时清理暂存标志、移除事件监听，并拒绝后续调用，防止污染全局状态。  
   https://github.com/earendil-works/pi/pull/8424

6. **#8422（开放）xAI Grok Build 省略 reasoning.effort**  
   修复 HTTP 400：添加 Responses 兼容标志，对 grok-build-0.1 不发送该字段。  
   https://github.com/earendil-works/pi/pull/8422

7. **#4537（已合并）新增 `/exit` 作为 `/quit` 别名**  
   实现简单，同步更新文档。  
   https://github.com/earendil-works/pi/pull/4537

8. **#8232（开放）dev branch，勿合并**  
   仅用于 CI 和评论测试。  
   https://github.com/earendil-works/pi/pull/8232

## 热门 Discussions

### Show and tell
- **#8449 介绍 ThinkRail —— 基于 Web 的 Pi GUI**  
  JetBrains 开源（Apache 2.0），旨在保持 Pi 全部能力的同时让界面更易用，美学风格极简。  
  https://github.com/earendil-works/pi/discussions/8449

### Ideas
- **#8437 实验性分叉：通过自主工具使用进行“上下文策展”**  
  作者认为传统压缩是“向后看”的总结，提出用工具主动组织上下文，更前瞻地管理会话状态。  
  https://github.com/earendil-works/pi/discussions/8437

- **#8420 从 DSH 插件生态看 Pi：是否缺少官方 Web UI 底座？**  
  观察到 DSH 社区大量 UI 向插件（聊天界面、工作区、状态栏），类比 Pi 的扩展生态，讨论官方 Web UI 的必要性。  
  https://github.com/earendil-works/pi/discussions/8420

## 功能需求趋势

从 Issues 与 Discussions 中提炼出以下主要方向：

- **上下文管理与压缩机制精细化**：自动压缩触发可靠性、按模型配置压缩、压缩独立思考级别、手动全量压缩模式、更好的压缩提示词。
- **终端与输入兼容性**：修复多个终端下的 Backspace/Delete 问题、支持移动端/远程客户端键盘 resize、可配置滚动速度。
- **新模型与 Provider 适配**：新增 SiliconFlow、Parasail.io，适配 Bedrock MMDS、OpenRouter reasoning-mandatory 模型、Gemini 3.7 Flash thinking 限制等。
- **成本优化与缓存**：OpenRouter Responses 需支持 Anthropic 风格 prompt caching，降低 LLM 调用成本。
- **Web GUI 与远程交互**：官方 Web UI 底座需求明显，RPC 模式增加登录操作，ThinkRail 提供新选项。
- **UI/UX 细节**：全屏双击路径选择、sticky/pinned 头部、按块类型设置默认折叠/展开、鼠标滚轮灵敏度。

## 开发者关注点

- **稳定性痛点**：自动压缩失效导致上下文溢出（#6879）、长会话 Node.js OOM（#2644）、代理下 HTTP 请求挂起（#8134）。
- **终端兼容性反复**：Backspace/Delete 在 Windows Terminal、Kitty、herdr 等环境持续出问题，影响日常编辑。
- **成本敏感**：缺少 prompt caching 会使 Claude 费用增加 2.5 倍（#7995），开发者对成本优化需求迫切。
- **扩展系统健壮性**：扩展工厂加载失败需正确清理状态，否则污染全局（#8424）。
- **模型适配滞后**：新模型（Gemini 3.7 Flash、Grok Build、OpenRouter reasoning-mandatory）的 special case 处理不足，导致请求直接失败。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-08-22）

## 今日速览

昨晚发布 v0.21.14-nightly（评审循环反馈改进），v0.21.15 作为基准参考通过 SWE-bench Verified 500 + Terminal-Bench 89 全量测试。安全与 CI 是今日主线：P1 级 CVE 审计失败阻塞所有 PR，评审管线安全加固持续推进；Windows 平台的 MCP 连接与中文输入问题仍是高频社区反馈。

## 版本发布

**v0.21.14-nightly.20260821.9f2342d323**

- `feat(review)`：当评审循环无法收敛时，向作者说明原因（[PR #9461](https://github.com/QwenLM/qwen-code/pull/9461)，@wenshao）
- `fix(ci)`：停止 fallback 策略（原文截断，详见 release 页面）

**基准测试（Benchmark-Qwen-Ref: v0.21.15）**

- `dsw-eas-tb-smoke-20260821-r1`（SWE-bench 1 条 + Terminal-Bench 1 条冒烟）：**SUCCEEDED**
- `dsw-eas-full-20260821-r1`（SWE-bench Verified 500 + Terminal-Bench 2.0 89 全量）：**SUCCEEDED**

均已完成 verifier 结果与轨迹写回验证，发布链路稳定。

## 社区热点 Issues

1. **[#9699] Dependency CVE 审计全量失败（P1）**  
   [Issue #9699](https://github.com/QwenLM/qwen-code/issues/9699) · 更新于 08-21 · 评论 2  
   自 2026-08-21 起，所有分支/作者的 `npm audit --omit=dev --audit-level=high` 均失败，报告 8 个漏洞（1 low / 6 moderate / 1 high）。该问题直接阻塞所有 PR 合入，是当前最高优先级 CI 故障。

2. **[#9556] 评审管线是否应继续以调用者身份执行代码（安全）**  
   [Issue #9556](https://github.com/QwenLM/qwen-code/issues/9556) · 更新于 08-21 · 评论 7 · need-discussion  
   wenshao 在对 #9221 的第 20 轮评审后提出：所有未决问题都源于"代码已以评审者自身用户身份在工作树中执行"，该能力在更早阶段就已授予且无法由 #9221 移除，需要在管线层面做决策。

3. **[#9693] Qwen Desktop 在 Windows 上报 MCP -32000 Connection closed**  
   [Issue #9693](https://github.com/QwenLM/qwen-code/issues/9693) · 更新于 08-21 · 评论 4 · need-retesting  
   即使未激活 MCP，官方 `@modelcontextprotocol/server-filesystem` 和 `server-sequential-thinking` 在 Windows 启动时也连接失败，需人工介入排查。

4. **[#9675] Windows 上 MCP server 会话间断开**  
   [Issue #9675](https://github.com/QwenLM/qwen-code/issues/9675) · 更新于 08-21 · 评论 3 · need-information  
   TradingView MCP 首次连接正常，但切换 Qwen Desktop 会话后工具不可用，界面显示"已连接"而实际调用失败，状态一致性存疑。

5. **[#5180] 主会话派发任务后 subagent 中途崩溃**  
   [Issue #5180](https://github.com/QwenLM/qwen-code/issues/5180) · 更新于 08-21 · 评论 7 · welcome-pr  
   主会话作为项目经理派发任务、subagent 执行到一半崩溃，长上下文多智能体场景下复现。涉及 core/tools/performance 多模块，社区讨论热度高。

6. **[#9639] 自动模式权限分类器不可用时 fail-open（安全回归）**  
   [Issue #9639](https://github.com/QwenLM/qwen-code/issues/9639) · 更新于 08-21 · 评论 3 · need-information  
   OpenAI 兼容端点不稳定期间，两阶段权限分类器回退到放行模式，属于 #7331 的回归。要求 allow-rule 确定性短路与可配置超时/降级策略。

7. **[#9688] 归档活跃会话会重建活动转录，导致 active+archived 冲突**  
   [Issue #9688](https://github.com/QwenLM/qwen-code/issues/9688) · 更新于 08-21 · 评论 2  
   归档返回成功但写入方继续以同一 session ID 追加，`chats/<session-id>.jsonl` 在归档后被重建，Web UI 出现双副本冲突。

8. **[#8993] 公共扩展安装要求 Git 2.37，Ubuntu 22.04 仅提供 2.34.1**  
   [Issue #8993](https://github.com/QwenLM/qwen-code/issues/8993) · 更新于 08-21 · 评论 6 · CLOSED  
   已关闭，但今日有对应修复 PR [#9690](https://github.com/QwenLM/qwen-code/pull/9690)（低版本 Git 安全回退），Ubuntu LTS 用户值得关注验证。

9. **[#5966] UI 不定期错误，中文输入法完全无效**  
   [Issue #5966](https://github.com/QwenLM/qwen-code/issues/5966) · 更新于 08-21 · 评论 6 · welcome-pr  
   自 0.19.3 起中文输入法失效，只能输入拼音且无报错、难定位。终端 UI 另有 IME 候选框低对比度问题（[#9666](https://github.com/QwenLM/qwen-code/issues/9666)），中文用户体验受影响较大。

10. **[#9686] daemon 会话恢复应还原上次使用的模型（feature request）**  
    [Issue #9686](https://github.com/QwenLM/qwen-code/issues/9686) · 更新于 08-21 · 评论 2  
    要求 `session/load` 与 `session/resume` 恢复会话上次使用的模型，而非进程级 `settings.model.name` 默认值，涉及 daemon、model-switching 与 session-management。

## 重要 PR 进展

1. **[#9690] fix(core): 低版本 Git 下安全支持公共 GitHub 扩展**  
   [PR #9690](https://github.com/QwenLM/qwen-code/pull/9690) · @yiliang114  
   为 Git < 2.37 提供安全回退：将请求的 GitHub ref 解析为不可变 commit 后走公共下载路径，不削弱既有 pin 传输安全。直接修复 #8993，Ubuntu 22.04 用户可关注。

2. **[#9668] fix(core): 检测内容与推理流中的长逐字重复循环**  
   [PR #9668](https://github.com/QwenLM/qwen-code/pull/9668) · @yiliang114  
   修复重复单元超过约 75 字符时循环检测失效的问题，为内容和 reasoning 通道补充长周期重复规则，回应社区长期反馈的"陷入观察循环"类问题（如 #1775）。

3. **[#9638] fix(cli): 队友消息在工具轮边界投递，而非整个任务结束**  
   [PR #9638](https://github.com/QwenLM/qwen-code/pull/9638) · @yiliang114  
   Agent Team 中队友→队长消息现在在工具轮完成时即投递，显著提升团队协作实时性，避免长任务尾部才收到消息。

4. **[#9678] perf(review): 评审 agent 使用独立 subagent 类型**  
   [PR #9678](https://github.com/QwenLM/qwen-code/pull/9678) · @wenshao  
   维度评审 agent 从 `general-purpose` 改为专用 `review-agent` 类型，只声明实际使用的 6 个工具，减少不必要的工具继承与 prepareTools 开销。

5. **[#9576] feat(core): 受入站门控的跨会话消息**  
   [PR #9576](https://github.com/QwenLM/qwen-code/pull/9576) · @qqqys  
   同一机器上的 Qwen Code 会话通过 UNIX domain socket 以 newline-delimited JSON 互相通信，策略允许时以"非用户"标记消息进入输入队列。多智能体架构方向性更新。

6. **[#9673] fix(autofix): 空闲超时不再计入累计超时上限**  
   [PR #9673](https://github.com/QwenLM/qwen-code/pull/9673) · @wenshao  
   区分"agent 用尽时间预算"与"沙箱无输出被 idle 看门狗杀死"两类超时，后者不再触发熔断，提高 autofix 对空转环境的容忍度。

7. **[#9560] fix(web-shell): 固定分区稳定排序与即时 pin 反馈**  
   [PR #9560](https://github.com/QwenLM/qwen-code/pull/9560) · @yiliang114  
   pinned 会话按 pin 时间稳定排序，新 pin 追加到底部；会话名变化不再导致分区重排，pin/unpin 即时反馈。

8. **[#9305] fix(ui): 短 VP 内容底部对齐，空白区移到顶部**  
   [PR #9305](https://github.com/QwenLM/qwen-code/pull/9305) · qwen-code-dev-bot  
   修复默认终端缓冲区（VP 模式）下内容不满一屏时，最后一条消息与输入框之间出现空白的问题（#9300）。

9. **[#9260] fix(web-shell): `/clear` 后保留手动会话名**  
   [PR #9260](https://github.com/QwenLM/qwen-code/pull/9260) · @yiliang114  
   手动命名的会话名在 `/clear`、页面刷新、会话切换后均能保留，自动标题生成不再覆盖用户标签。

10. **[#9394] feat(channels): 新增钉钉 Workspace 频道**  
    [PR #9394](https://github.com/QwenLM/qwen-code/pull/9394) · @qqqys  
    基于已认证 DWS CLI profile 支持私聊、@提及、文档提醒、待办同步、源会话隔离与最终回复。当前状态 `autofix/needs-human`，功能较完整但仍在人工复核中。

## 热门 Discussions

本期未提供 Discussions 数据，本节略。

## 功能需求趋势

- **会话生命周期管理（daemon）**：多个 Issue 指向 daemon 会话的模型恢复（#9686）、HITL 问题恢复（#9664）、归档/恢复一致性（#9688），说明社区对长时间运行会话的可靠性与恢复能力要求明显提升。
- **Windows 平台体验修复**：MCP stdio 启动连接失败（#9693）、会话间 MCP 断连（#9675）、IME 候选框渲染（#9666）在 24 小时内集中出现，Windows 已成为重点反馈平台。
- **评审管线的安全与可观测性**：wenshao 主导的系列 PR 持续加固代码执行边界（#9556、#9572、#9566），并引入收敛告警（#9526）、TUI 截图证据（#9273）等可观测能力。
- **团队协作与多智能体**：Agent Team 消息实时投递（#9638）、跨会话通信（#9576）、sessionRotation 会话轮换（#8927）表明多人/多智能体协作是当前核心演进方向。
- **第三方集成扩展**：钉钉频道（#9394、#9350）与 Aone Code 适配（#9616、#9618、#9634）双线并行，明显覆盖国内研发协作场景。

## 开发者关注点

- **CI 阻塞性故障首当其冲**：#9699 的 CVE 审计失败已是 P1，开发者希望尽快修复或调整审计策略，否则所有 PR 无法合入。
- **Windows MCP 稳定性信心不足**：从启动连接到会话切换均出现断连，且界面状态与实际可用性不一致，影响 MCP 生态在 Windows 上的采用。
- **中文输入体验持续恶化**：UI 中输入法完全失效（#5966）与终端 IME 候选框低对比度（#9666）并存，中文用户反馈强烈且期望有 `welcome-pr` 尽快认领。
- **长上下文多智能体可靠性**：subagent 中途崩溃（#5180）与重复循环（#1775、#9668）是自动化长任务落地的主要障碍。
- **旧 Linux 发行版兼容性**：Ubuntu 22.04 等仍受支持的 LTS 因 Git 版本过旧无法安装扩展（#8993），#9690 的 commit 解析回退方案被社区期待已久。

</details>

<details>
<summary><strong>CodeWhale</strong> — <a href="https://github.com/Hmbown/CodeWhale">Hmbown/CodeWhale</a></summary>

# CodeWhale 社区动态日报 — 2026-08-22

## 今日速览
过去 24 小时内社区最集中的信号是“让 CodeWhale 可被外部程序监督”：一批新 issues（#5531-#5534）与综合 PR（#5535）共同推进生命周期事件输出、/relaunch 与 per-session 控制通道建设；同时子代理可靠性问题（#5529）成为开发现场首要痛点。依赖链也在持续刷新，TUI 命令组重构（FEAT-018）稳步推进，无新版本发布。

## 版本发布
过去 24 小时无新版本发布。

## 社区热点 Issues
过去 24 小时共更新 11 条 issues，以下为最值得关注的 10 条。

### 1. EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)
- **作者**: aboimpinto | **更新**: 2026-08-21 | **评论**: 11
- **链接**: [Hmbown/CodeWhale Issue #5316](https://github.com/Hmbown/CodeWhale/issues/5316)
- **摘要**: 作为 TUI crate 分解的总跟踪 Issue，统辖所有子 EPIC 和 FEAT，当前是社区协调重构工作的中枢。已有 11 条评论，说明多个贡献者在围绕该计划同步进展，是未来数周架构演进的核心航线。

### 2. Sub-agents cannot reliably execute: wall-time deaths lose uncommitted work, provider-route failures block dispatch
- **作者**: Hmbown | **更新**: 2026-08-21 | **评论**: 0
- **链接**: [Hmbown/CodeWhale Issue #5529](https://github.com/Hmbown/CodeWhale/issues/5529)
- **摘要**: 一线报告：两个 worker 子代理在任务执行中遭遇 wall-time 预算死亡，未提交工作丢失；provider-route 失败阻塞 dispatch。Fleet 价值主张（委托执行）当前不可用，这是直接影响日常使用的重要可靠性缺陷。

### 3. Workflow runs fail silently: dispatch/schema errors never surface in the TUI
- **作者**: Hmbown | **更新**: 2026-08-21 | **评论**: 0
- **链接**: [Hmbown/CodeWhale Issue #5528](https://github.com/Hmbown/CodeWhale/issues/5528)
- **摘要**: 两条工作流（review fan-out 与 phased build pipeline）在脚本求值阶段失败，但 TUI 无任何呈现：无 toast、无状态行、无 workflow panel 条目。对无头/后台运行场景来说，这种“静默失败”比错误本身更危险，社区急需可观测性改进。

### 4. Bug: Goal-continuation cadence is bypassed on the within-turn dispatch path
- **作者**: M-Maciej | **更新**: 2026-08-21 | **评论**: 1
- **链接**: [Hmbown/CodeWhale Issue #5534](https://github.com/Hmbown/CodeWhale/issues/5534)
- **摘要**: 回归问题：#5508 引入的 `continuation_delay_seconds` 在 within-turn dispatch 路径上被绕过，resumed/CLI 会话会瞬时连续触发 passes。破坏了刚上线的节流机制，需要立刻修复。

### 5. Feature: the control surface for supervised operation
- **作者**: M-Maciej | **更新**: 2026-08-21 | **评论**: 1
- **链接**: [Hmbown/CodeWhale Issue #5533](https://github.com/Hmbown/CodeWhale/issues/5533)
- **摘要**: 提出为每个 session 提供控制 socket（message / interrupt / relaunch / status），并引入 `RuntimeBackendKind::External`。用户明确表示在 terminal multiplexer wrapper、自动化 harness 和 CI 场景中将 CodeWhale 作为受管子进程运行，这代表了“本地 agent 编程化编排”的迫切诉求。

### 6. Feature: /relaunch — switch a running session to the current binary
- **作者**: M-Maciej | **更新**: 2026-08-21 | **评论**: 1
- **链接**: [Hmbown/CodeWhale Issue #5532](https://github.com/Hmbown/CodeWhale/issues/5532)
- **摘要**: `/update` 安装新二进制后要求用户手动重启，作者指出这破坏了无人值守和长会话场景。建议实现 `/relaunch` 与自执行模式，解决 TUI 持有终端时难以安全重启的技术痛点。

### 7. Feature: local lifecycle event outbox (JSONL + webhook) with turn_stalled / turn_failed events
- **作者**: M-Maciej | **更新**: 2026-08-21 | **评论**: 1
- **链接**: [Hmbown/CodeWhale Issue #5531](https://github.com/Hmbown/CodeWhale/issues/5531)
- **摘要**: 用户在 herdr 等外部 supervisor 下运行长驻会话，需要 `turn_stalled` / `turn_failed` 等生命周期事件输出到 JSONL 或 webhook，用于无人过夜运行和告警。这组 issues 与 #5533、#5532 形成了完整的“supersisted operation”功能矩阵。

### 8. Feature: DeepSeek-V4-Flash-Vision-Exp
- **作者**: M-Maciej | **更新**: 2026-08-21 | **评论**: 1
- **链接**: [Hmbown/CodeWhale Issue #5541](https://github.com/Hmbown/CodeWhale/issues/5541)
- **摘要**: DeepSeek 家族首个多模态模型发布，社区希望 CodeWhale 能快速将其纳入模型列表并让 vision 能力可用。影响面“Huge”，尤其是网站开发等视觉任务，新模型的支持速度是社区关注的关键指标。

### 9. feat: indexing privacy controls (.codewhaleignore)
- **作者**: Hmbown | **更新**: 2026-08-21 | **评论**: 1
- **链接**: [Hmbown/CodeWhale Issue #4069](https://github.com/Hmbown/CodeWhale/issues/4069)
- **摘要**: 长期开放的能力项：需要类似 `.cursorignore` 的一等 ignore 文件，排除 secrets、vendor trees 与本地产物进入 agent 发现范围。对信任和合规至关重要，v0.9.3 后仍在跟踪中，期待后续落地。

### 10. Deprecated shell completion
- **作者**: RepentStar | **更新**: 2026-08-21 | **评论**: 4
- **链接**: [Hmbown/CodeWhale Issue #5526](https://github.com/Hmbown/CodeWhale/issues/5526)
- **摘要**: 用户使用 pwsh 时发现 `codew completions powershell` 生成的内容过时，触发命令仍是 `codewhale-tui`，且官方文档和仓库中均找不到修改入口。4 条评论表明至少 4 人受到影响，属于 CLI 迁移遗留问题，已有对应 PR #5530 修复。

## 重要 PR 进展
过去 24 小时共更新 10 条 PR，覆盖功能实现、重构与依赖升级。

### 1. Supervised operation stack: lifecycle outbox, /relaunch, per-session control socket, and the goal-continuation quiet-period fix
- **作者**: M-Maciej | **更新**: 2026-08-21
- **链接**: [Hmbown/CodeWhale PR #5535](https://github.com/Hmbown/CodeWhale/pull/5535)
- **摘要**: 一次 PR 聚合了五个提交区的改动：引入生命周期事件 outbox（JSONL + webhook，含 `turn_stalled` / `subagent_spawn` 等事件）、新增 `/relaunch`、实验性 per-session 控制接触面，以及修复 #5534 的 goal-continuation quiet period 绕过问题。这是社区当前最受关注的能力包。

### 2. refactor(tui): adopt command shapes in utility group (FEAT-018)
- **作者**: aboimpinto | **更新**: 2026-08-21
- **链接**: [Hmbown/CodeWhale PR #5525](https://github.com/Hmbown/CodeWhale/pull/5525)
- **摘要**: 将 TUI 工具命令组全面切换到 FEAT-014/015 引入的外部命令形状，覆盖 7 个命令文件，注册了 `/analyze`、`/autocomplete` 等命令。只改执行边界，不移动文件，是 EPIC-005 的重要组成部分。

### 3. refactor(tui): extract tool call stages from turn loop
- **作者**: bistack | **更新**: 2026-08-21
- **链接**: [Hmbown/CodeWhale PR #5523](https://github.com/Hmbown/CodeWhale/pull/5523)
- **摘要**: 将 turn loop 中的 tool-call planning、approval/execution、result projection 抽取为独立函数，保持原有控制顺序与取消行为。提高可测试性，为后续 TUI 命令形状铺路。

### 4. fix(cli): route legacy completions through public binary
- **作者**: wuisabel-gif | **更新**: 2026-08-21
- **链接**: [Hmbown/CodeWhale PR #5530](https://github.com/Hmbown/CodeWhale/pull/5530)
- **摘要**: 修复 #5526：`codewhale completions <shell>` 现在使用与 `codewhale completion <shell>` 相同的生成器，不再转发给 `codewhale-tui`。生成的脚本统一使用公开命令名 `codewhale`，解决 pwsh/zsh 等 shell 补全过时问题。

### 5. feat(tui): add multi-file read_lints operation
- **作者**: wuisabel-gif | **更新**: 2026-08-21
- **链接**: [Hmbown/CodeWhale PR #5524](https://github.com/Hmbown/CodeWhale/pull/5524)
- **摘要**: 为模型可见的 `lsp` 工具新增 `read_lints` 操作，支持多工作区文件批量读取，复用现有 `LspManager` 及其传输池，避免重复创建 language server 生命周期。对应 #4070 获批范围。

### 6. chore(deps): bump jsonschema from 0.46.10 to 0.49.9
- **作者**: dependabot[bot] | **更新**: 2026-08-21
- **链接**: [Hmbown/CodeWhale PR #5538](https://github.com/Hmbown/CodeWhale/pull/5538)
- **摘要**: 依赖升级，跨 3 个 minor 版本。Dependabot 自动提交，CI 通过后合入。

### 7. chore(deps): bump docker/setup-buildx-action from 4.2.0 to 4.3.0
- **作者**: dependabot[bot] | **更新**: 2026-08-21
- **链接**: [Hmbown/CodeWhale PR #5537](https://github.com/Hmbown/CodeWhale/pull/5537)
- **摘要**: GitHub Actions 依赖升级，保持 CI 基础设施最新。

### 8. chore(deps): bump similar from 3.1.2 to 3.2.0
- **作者**: dependabot[bot] | **更新**: 2026-08-21
- **链接**: [Hmbown/CodeWhale PR #5540](https://github.com/Hmbown/CodeWhale/pull/5540)
- **摘要**: 文本相似度库升级至 3.2.0，带来结构化/行级 diff 改进。Dependabot 自动提交。

### 9. chore(deps): bump rio-vt from 0.5.19 to 0.5.25
- **作者**: dependabot[bot] | **更新**: 2026-08-21
- **链接**: [Hmbown/CodeWhale PR #5539](https://github.com/Hmbown/CodeWhale/pull/5539)
- **摘要**: 终端 VT 解析库连续升级至 0.5.25。Dependabot 自动提交。

### 10. chore(deps): bump rmcp from 2.2.0 to 3.1.2
- **作者**: dependabot[bot] | **更新**: 2026-08-21
- **链接**: [Hmbown/CodeWhale PR #5390](https://github.com/Hmbown/CodeWhale/pull/5390)
- **摘要**: Rust MCP SDK 跨 major 升级（2.2.0 → 3.1.2），涉及 macros 修复。此 PR 已跟踪一周，是当前唯一跨 major 的依赖变更，合入前需要重点验证约束兼容性。

## 功能需求趋势
从今日 issues 与 PR 中可提炼出以下社区核心关注方向：

1. **被监督/无人值守运行能力**：生命周期事件 outbox（JSONL + webhook）、per-session 控制套接字、`/relaunch` 自重置。社区正把 CodeWhale 从“交互式 TUI”演化为“可被外部 supervisor 编程化控制的长驻 agent 运行时”，这已是当前最高频的功能需求。
2. **可观测性与失败告警**：工作流失败静默问题（#5528）与子代理死亡丢工作（#5529）暴露了当前 TUI 在后台/批处理场景下的盲区；`turn_stalled` / `turn_failed` 事件正是对这一缺口的直接回应。
3. **新模型快速支持**：DeepSeek 多模态模型 #5541 表明用户期待模型列表第一时间跟进前沿模型，且“vision 可用”已成为模型接入的默认验收标准。
4. **隐私与路径排除**：`.codewhaleignore`（#4069）已跟踪一个多月，说明企业用户对敏感路径的排除有刚性需求，目前仍无落地 PR。
5. **TUI 架构重构持续进行**：EPIC-005 下的 crate 分解与命令形状统一正在推进，虽然对用户不可见，但为插件化和可测试性打基础。

## 开发者关注点
- **执行可靠性是第一痛点**：子代理 wall-time 死亡导致工作丢失、provider-route 失败阻塞 dispatch、工作流脚本错误无法在 TUI 呈现——多位开发者明确表示这些行为使“delegated execution 不可用”。
- **长会话缺乏“遥控器”**：隔夜运行、CI 集成、multiplexer 包装场景下，无法安全地查询状态、中断、重启或接收事件，开发者只能通过外部 hack 来弥补。
- **CLI 迁移的尾巴**：`codewhale completions` 仍引用 `codewhale-tui`，触达了pwsh 等 shell 用户；反映出二进制改名后仍有兼容性残留未被清理。
- **依赖维护活跃**：10 条 PR 中 6 条为 Dependabot 提交，覆盖 Rust MCP SDK（跨 minor）、jsonschema、VT 解析等关键依赖，项目依赖基线正快速前移，合入时需警惕 breaking changes。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*