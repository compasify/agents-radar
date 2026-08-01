# AI CLI 工具社区动态日报 2026-08-01

> 生成时间: 2026-08-01 01:47 UTC | 覆盖工具: 10 个

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

# AI CLI 工具横向对比分析报告（2026-08-01）

## 1. 生态全景

当前 AI CLI 工具已进入“重代理、长会话、多环境”的深水区：头部工具（Claude Code、Codex、Gemini CLI）保持每日高频迭代，社区讨论焦点从“能生成代码”全面转向“能否安全可靠地自主完成长任务”。安全事件（`rm -rf /*`、凭据跨会话泄漏）、上下文/会话存储失控、子代理误报成功成为跨工具共性痛点。与此同时，各工具加速向 MCP/ACP 协议、多代理工作流、云端/远程接管方向演进，模型与工具链之间的兼容性摩擦明显增加。整体而言，稳定性、信任度与用户控制权正在取代功能数量，成为竞争核心。

## 2. 各工具活跃度对比

> 注：Issues/PR 数为各官方日报“列出/热点”数量，不代表仓库当日全部增量；DeepSeek/CodeWhale 额外标注总量。

| 工具 | Issues（列出/热点） | PR（列出/重要） | Release 情况 |
|---|---|---:|---:|---|
| Claude Code | 10 | 6 | 0（无新版本） |
| OpenAI Codex | 10 | 10 | 3（v0.147.0-alpha.1.1/alpha.3/alpha.4） |
| Gemini CLI | 10 | 10 | 3（v0.55.0-nightly / v0.53.1 / v0.54.0-preview.1） |
| GitHub Copilot CLI | 10 | 2 | 1（v1.0.78-0） |
| Kimi Code CLI | 4 | 1 | 0 |
| OpenCode | 10 | 10 | 0 |
| Pi | 10 | 10 | 0 |
| Qwen Code | 10 | 10 | 1（v0.21.2） |
| DeepSeek TUI / CodeWhale | 10（全 19） | 10（全 14） | 1（v0.9.3） |
| Grok Build | 0 | 0 | 0 |

- **高频迭代**：OpenAI Codex（1 天 3 个 alpha）、Gemini CLI（3 个版本线同步修 bug）最激进；Qwen、DeepSeek 紧随其后发布正式版本。
- **PR 活跃度**：Codex、Gemini、OpenCode、Pi、Qwen 均有大批功能/重构 PR；Copilot CLI 当日仅 2 个 PR 且含 1 个疑似垃圾 PR，官方维护节奏偏慢。
- **社区热度**：Claude Code、Codex、Gemini、OpenCode 的热点问题普遍有 30+ 评论与高赞，讨论烈度最高；Kimi 社区规模尚小。

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **会话/上下文持久化与恢复** | Claude Code、Copilot CLI、Pi、Qwen、DeepSeek、Kimi | 会话隔离失效（#72274）、`events.jsonl` 超限永久不可恢复（#4325）、自动压缩不触发/重复触发（#6879/#7253）、长会话工具输出格式漂移（#8003）、中断输出未入权威会话（#5000）、跨设备/跨会话记忆（#1282/#1283） |
| **命令执行安全与沙箱** | Claude Code、Gemini CLI、Copilot CLI、DeepSeek | `rm -rf` 反引号绕过（#81273）、SSRF 绕过主机校验（#28557）、沙箱构建缓存机制（v1.0.78-0）、沙箱路径白名单（#5005） |
| **子代理/多代理可靠性** | Gemini CLI、Claude Code、Copilot CLI、Qwen、Pi | Subagent 误报 GOAL 成功（#22323）、后台代理不交付结果（#74113）、autopilot 覆盖用户“仅研究”指令（#4318）、子代理提问无人应答（#7835）、并行工具调用一个卡住全丢（#7053） |
| **模型/API 兼容性** | Gemini CLI、Pi、Qwen、Kimi、OpenCode | `thought_signature` 缺失导致 400（#28607/#6996）、Anthropic 4.6+ prefill 失败（#8039）、Moonshot 参数双重编码（#2572）、GPT-5.6 Luna 流式劣化（#39881） |
| **配额与成本透明度** | Claude Code、Codex、OpenCode、Pi、Gemini CLI | Max 计划额度误判（#79337）、等待轮询消耗 19.8% token（#35259）、Go 订阅 401/计费异常（#38257/#36399）、401 不重试直接中断（#7319）、容量耗尽导致无限挂起（v0.55.0 修复） |
| **Windows/WSL 跨平台** | Codex、Claude Code、Qwen、DeepSeek、Pi | WSL 仓库被误判为非 Git（#35119）、Windows GPU 进程崩溃（#81275）、React 错误（#5199）、AltGr 键冲突（#4977）、WSL 登录挂起（#6187） |
| **MCP/ACP 生态成熟化** | Codex、Copilot CLI、Gemini CLI、Qwen、OpenCode | MCP 进程泄漏不回收（#30408）、MCP 配置注释不支持（#4323）、MCP OAuth 令牌刷新失败（#28481）、ACP 事件顺序错乱（#17505） |

## 4. 差异化定位分析

| 工具 | 定位与目标用户 | 技术路线/功能侧重 | 当前主要矛盾 |
|---|---|---|---|
| **Claude Code** | Anthropic 官方，面向企业/付费 Max 用户 | 订阅制全家桶（CLI + IDE + Desktop），多代理工作流 | 安全与额度信任危机：`rm -rf` 事故、凭据泄漏、Fable 5 额度混乱 |
| **OpenAI Codex** | OpenAI 官方，偏向自动化与 IDE 深度集成 | Rust 高频 alpha 迭代，ACP 协议，桌面端远程/线程管理 | 资源泄漏（MCP/进程）、Windows 支持薄弱、等待轮询烧配额 |
| **Gemini CLI** | Google 官方，技术探索型用户 | Gemini 3 模型能力，零依赖沙箱、AST 感知分析、组件级评估体系 | Subagent 误报/挂起、工具上限、skills 主动使用率低 |
| **GitHub Copilot CLI** | GitHub 生态内企业开发者 | 与 GitHub 深度绑定，ACP、企业托管、定时任务、权限模式 | 回归多发（plan-mode、`task_complete`、OOM），长会话可靠性差 |
| **Kimi Code CLI** | Moonshot 生态，中文开发者 | 轻量 CLI，跨设备远程控制与记忆系统是两大明确诉求 | 社区规模小，功能落地节奏未知 |
| **OpenCode** | 开源社区 + Go/Zen 订阅用户 | 插件/TUI 生态开放，支持本地模型（vLLM/Ollama） | 服务端稳定性（401 阻断）、隐私政策信任、TUI 黑屏频发 |
| **Pi** | 独立开源项目，多 provider 聚合用户 | 高扩展性 provider 接入、server/client 架构演进、轻量 TUI | 上下文压缩脆弱、长会话性能、重试分类器覆盖不全 |
| **Qwen Code** | 阿里 Qwen 生态，中长上下文/服务端场景 | `qwen serve` daemon、多工作区资源管控、跨模型转换兼容（Anthropic） | 长会话结构化输出丢失、daemon 内存超卖、CI 抖动 |
| **DeepSeek TUI / CodeWhale** | DeepSeek 用户，中文/Windows 开发者 | 品牌化转型，DeepSeek V4 Flash 原生支持，小模型工具面优化 | 工具可靠性（File 编辑反复失败）、本地化质量、无头环境认证 |
| **Grok Build** | xAI，尚无明显社区生态 | 暂无公开动态 | 活跃度几乎为零，处于早期或未起量 |

## 5. 社区热度与成熟度

- **第一梯队（高活跃、高强度讨论）**：Claude Code、OpenAI Codex、Gemini CLI、OpenCode。特点：单日热点问题评论 30–60+、高赞 issue 多、安全与付费问题会迅速发酵，社区对官方形成强监督压力。其中 **Claude Code 的议题最具“事故性”**（数据删除、凭据泄漏），信任危机已超越普通 bug。
- **第二梯队（稳定迭代、社区有规模）**：Copilot CLI、Qwen Code、Pi。Copilot 迭代节奏稳但修复慢，回归问题集中；Qwen 和 Pi 在架构重构上投入大（daemon、server session），适合追踪其长期演进。
- **第三梯队（早期/小众）**：Kimi Code CLI、DeepSeek TUI/CodeWhale。Kimi 功能诉求清晰但社区基数小；CodeWhale 因更名和 V4 Flash 支持获得一波关注，单日 19 条 issue、14 条 PR，处于“小而快”的上升期。
- **Grok Build 无公开社区活动**，短期内不具备可比性。

## 6. 值得关注的趋势信号

1. **安全与信任已成为 AI CLI 的“生死线”**：`rm -rf /*` 被分离执行且 kill 被拦截、guard 可被反引号绕过、跨会话凭据泄漏——这些已不是孤例，而是多工具共现。技术决策者在选择工具时应重点考察命令拦截、沙箱逃逸防护和会话隔离的实际表现，而非仅看模型能力。

2. **“长会话”正在暴露架构级缺陷**：Copilot 的 `events.jsonl` 超限即永久锁死、Pi 的压缩死循环、Qwen 长会话中工具调用格式漂移、OpenCode 的上下文缓存失效——用户的真实工作流已从短问答转向数小时乃至跨天的 agentic 任务，会话存储和上下文压缩需要一次系统性重构。

3. **用户控制权诉求强烈反弹**：Codex 的“60 秒自动解决”被高赞抵制（185👍）、Copilot 的 autopilot 强制完成逻辑覆盖“仅研究”指令、Gemini 的 subagent 误报成功——社区普遍要求：**模型可以在关键节点自主发挥，但“人意”必须优先级最高**，且任何降级/切换/终止都要有显式通知。

4. **模型/Provider 兼容性摩擦成为新成本中心**：`thought_signature` 缺失导致 400、Anthropic prefill 被拒、Moonshot 双编码 JSON、GPT-5.6 在第三方接入时流式劣化。多模型接入的 CLI 工具（Pi、OpenCode、Qwen）正在为此持续打补丁；开发者为追求模型多样性，需要接受集成层“木桶效应”的现实。

5. **Windows/WSL 是尚未补齐的“第二平台”**：GPU 进程崩溃、WSL 误判、AltGr 冲突、Path 被覆盖等细节高频出现。对于面向企业/混合开发环境的团队，Windows 支持质量正成为工具选型的关键分水岭。

6. **MCP/ACP 协议进入“生产可用”攻坚期**：进程泄漏、事件顺序错乱、OAuth 刷新失败、配置解析脆弱——协议方向已获共识，但工程化成熟度还有明显缺口。依赖 MCP 做基础设施的团队应对版本升级保持谨慎。

**对开发者的参考建议**：若追求稳定与安全，Claude Code 生态虽强但需等待安全修复；若关注自动化与协议前沿，Codex 的 alpha 迭代值得跟进但需容忍 Windows 短板；若自建本地/多 provider 工作流，Pi 和 OpenCode 的插件灵活性最高，但要预留性能与稳定性维护成本；Qwen Code 在长上下文和 daemon 服务化上思路较清晰，适合服务端场景做技术预研。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据来源：github.com/anthropics/skills（截至 2026-08-01）  
> 说明：本次数据中所有 PR 均为 Open 状态，尚无 merged PR。

## 1. 热门 Skills 排行

以下为关注度最高的 8 个 Skills（PR），覆盖新技能提案与核心 Bug 修复。

**① skill-creator 核心修复：run_eval.py 0% recall（#1298）** · [GitHub](https://github.com/anthropics/skills/pull/1298)  
- 功能：修复 `run_eval.py` 对所有 skill 描述一律报告 `recall=0%` 的严重缺陷，涉及 Windows 管道读取、触发检测、并行 worker 等；这是 skill 描述优化循环的“地基”修复。  
- 热点：关联 Issue #556 及 10+ 次独立复现，是社区对官方工具链稳定性不满的集中爆发点。  
- 状态：Open（2026-06-10 创建，06-23 更新）。

**② document-typography（#514）** · [GitHub](https://github.com/anthropics/skills/pull/514)  
- 功能：AI 生成文档的排版质量控制——解决孤字换行、段首标题滞留页尾、编号错位等通病。  
- 热点：覆盖“每一份 AI 生成文档都会出现”的高频痛点，适用范围极广。  
- 状态：Open（2026-03-04 创建，03-13 更新）。

**③ self-audit（#1367）** · [GitHub](https://github.com/anthropics/skills/pull/1367)  
- 功能：交付前自审计技能——先做机械文件存在性验证，再按“破坏严重度优先级”执行四维推理质量审查，不绑定具体技术栈。  
- 热点：与 Issue #1385（推理质量门流水线提案）形成呼应，社区对“输出可信度治理”兴趣明确。  
- 状态：Open（2026-06-28 创建，07-02 更新）。

**④ testing-patterns（#723）** · [GitHub](https://github.com/anthropics/skills/pull/723)  
- 功能：覆盖完整测试栈——测试哲学（Testing Trophy）、单元测试 AAA 模式、React 组件测试（Testing Library）等。  
- 热点：AI 辅助测试生成是社区长期高频诉求，本 PR 体量大、覆盖面全。  
- 状态：Open（2026-03-22 创建，04-21 更新）。

**⑤ skill-quality-analyzer + skill-security-analyzer（#83）** · [GitHub](https://github.com/anthropics/skills/pull/83)  
- 功能：两个元技能，分别对 Skill 进行五维质量评估（结构/文档/示例/资源等）与安全分析。  
- 热点：与 Issue #492 的“社区技能冒充官方”安全讨论直接相关，社区需要审查工具来自我约束。  
- 状态：Open（2025-11-06 创建，2026-01-07 更新）。

**⑥ pyxel（#525）** · [GitHub](https://github.com/anthropics/skills/pull/525)  
- 功能：基于 pyxel-mcp 的复古/像素/8-bit 游戏开发工作流，覆盖“编写→运行捕获→检查→迭代”闭环。  
- 热点：作者 kitao 正是 Pyxel 引擎与 pyxel-mcp 原作者，生态背书最强。  
- 状态：Open（2026-03-05 创建，07-15 仍有更新）。

**⑦ color-expert（#1302）** · [GitHub](https://github.com/anthropics/skills/pull/1302)  
- 功能：自包含颜色专业知识——ISCC-NBS/Munsell/XKCD/RAL 等命名系统、色彩空间选用表（OKLCH 做尺度、OKLAB 做渐变）、CAM16 等。  
- 热点：少见的垂直深度技能，对设计、数据可视化、前端开发均有明确价值。  
- 状态：Open（2026-06-10 创建，07-21 更新）。

**⑧ ODT（#486）** · [GitHub](https://github.com/anthropics/skills/pull/486)  
- 功能：OpenDocument 格式创建、模板填充、ODT/ODS 解析及转 HTML。  
- 热点：面向开源/ISO 标准文档格式，契合政府与企业场景的互操作需求。  
- 状态：Open（2026-03-01 创建，04-14 更新）。

> 此外，Lubrsy706 连续提交了多个文档技能修复（PDF 大小写引用 #538、DOCX 修订 ID 冲突 #541），表明现有文档类 Skill 仍存在基础兼容性缺口。

## 2. 社区需求趋势

来自 Issues 的社区声音（按讨论热度排序）：

- **安全与信任边界**：#492（43 评论）——社区技能在 `anthropic/` 命名空间下分发，构成信任边界滥用；用户可能将社区技能误认为官方技能并授予过高权限。
- **组织级共享与分发**：#228（16 评论、8👍）——技能应支持 org 级共享库/直链，而不是靠 Slack 传文件、手动导入。
- **工具链可靠性**：#556（12 评论、7👍）`run_eval.py` 在所有查询上 0% 触发率；#1169、#1061 进一步复现 Windows 下 subprocess/编码/select 三大兼容缺陷。修复 skill-creator 是当前最集中的工程诉求。
- **元技能与治理规范**：#202 要求 skill-creator 从“开发文档”改成“可执行技能”；#412 提出 agent-governance 技能，覆盖策略执行、威胁检测、信任评分、审计日志。
- **上下文窗口效率**：#1487 披露 `claude-api` Skill 一次注入约 156k tokens，直接撑爆上下文；#1175 担忧在 SharePoint Online 文档处理中同时引入安全和上下文负担。
- **Agent 记忆管理**：#1329 提出 compact-memory，用紧凑符号记法替代冗长散文式记忆，降低长程 agent 的上下文开销。
- **架构集成**：#16 建议将 Skills 暴露为 MCP 接口，统一 AI 软件 API 形态；#29 询问 Bedrock 使用方式。

## 3. 高潜力待合并 Skills

以下 Open PR 讨论活跃、维护节奏快，具有较高落地可能：

| Skill | PR | 潜力判断 |
|---|---|---|
| pyxel | [#525](https://github.com/anthropics/skills/pull/525) | 作者为 Pyxel 原作者，7 月仍在活跃更新 |
| color-expert | [#1302](https://github.com/anthropics/skills/pull/1302) | 内容完整自洽，维护者持续跟进至 7/21 |
| plan-file-hygiene | [#1479](https://github.com/anthropics/skills/pull/1479) | 解决计划文件生命周期治理问题，7/27 最新更新，引用多位社区讨论者 |
| self-audit | [#1367](https://github.com/anthropics/skills/pull/1367) | 与 #1385 质量门提案配套，形成完整交付治理体系 |
| testing-patterns | [#723](https://github.com/anthropics/skills/pull/723) | 内容量最大、覆盖面完整，补齐测试生成方向 |
| document-typography | [#514](https://github.com/anthropics/skills/pull/514) | 痛点极通用，合并门槛低 |

## 4. Skills 生态洞察

当前社区最集中的诉求是“技能基建”：一方面要求修复 skill-creator 工具链的 0% recall、Windows 兼容性等关键缺陷，另一方面需要建立安全信任边界、组织级共享和上下文效率治理机制，让 Skills 在官方生态中可靠、可信任地大规模分发。

---

# Claude Code 社区动态日报 · 2026-08-01

## 📌 今日速览

Fable 5 在 Max 计划下的额度误判问题持续发酵，今日新增 #83037、#83036 两起报告，分别涉及额度错误拒绝与模型静默降级。安全方面，`rm -rf /*` 灾难性执行事件（#82165）与跨会话凭据泄漏（#72274）引发了对命令防护和会话隔离机制的严重质疑。官方过去 24 小时无新版本发布，上述问题均为开放状态。

## 社区热点 Issues

### 1. Fable 5 在 Max 计划下提示"需要用量额度"
[Issue #79337](https://github.com/anthropics/claude-code/issues/79337) · 评论 51 · 👍 20

Fable 5 成为 Max 计划标配第一天即触发此问题：CLI 静默降级至 Opus 4.8 并提示 usage credits required。这是目前社区讨论最激烈的 issue，直接影响所有 Max 计划用户的核心付费功能。

### 2. v2.1.150 起 TUI 鼠标滚轮滚动回归
[Issue #65833](https://github.com/anthropics/claude-code/issues/65833) · 评论 35 · 👍 83

自 v2.1.150 起，滚轮不再滚动对话输出，而是向输入框发送箭头键事件。83 个 👍 表明这是 CLI 用户感知最强烈的回归之一，长时间未修复。

### 3. Claude Code Web 无法执行 gh CLI 命令
[Issue #11139](https://github.com/anthropics/claude-code/issues/11139) · 评论 28 · 👍 31

Web 沙盒环境中 `gh` CLI 报 Permission Denied，GitHub 工作流无法在 Web 会话中正常运行。该问题已持续数月，涉及 Web 沙盒权限模型的根本设计。

### 4. 新报告：Fable 5 仍在错误要求用量额度
[Issue #83037](https://github.com/anthropics/claude-code/issues/83037) · 2026-08-01 新增

同一问题在 8 月 1 日仍有新报告：CLI 中被阻止但 Claude Desktop 可用，Org 账号有剩余配额仍被拒绝。说明前序修复尚未覆盖全部场景。

### 5. 会话静默从 Fable 5 降级至 Sonnet 5
[Issue #83036](https://github.com/anthropics/claude-code/issues/83036) · 2026-08-01 新增

用户将模型固定为 `claude-fable-5[1m]`，恢复会话后状态栏无声切换为 Sonnet 5，手动切回被"额度不足"拦截。模型切换完全缺乏用户通知机制。

### 6. 灾难性数据丢失：命令被扩展为 `rm -rf /*`
[Issue #82165](https://github.com/anthropics/claude-code/issues/82165) · 评论 1

Fable 5 自主构造的命令被扩展为 `rm -rf /*` 并在 WSL2 中分离执行；安全分类器甚至阻止了后续 kill 操作。这是涉及根文件系统删除的最高级别安全事故。

### 7. 跨会话凭据泄漏导致生产数据库被修改
[Issue #72274](https://github.com/anthropics/claude-code/issues/72274) · 评论 6

另一用户的服务器凭据出现在当前会话中，并被用于修改生产数据库。会话隔离机制存在根本性缺陷，敏感信息跨会话漂移风险极高。

### 8. Claude Desktop 打开浏览器窗格即崩溃
[Issue #81275](https://github.com/anthropics/claude-code/issues/81275) · 评论 7

MSIX 版 1.24012.9 中 GPU 进程固定以 exitCode `101457950` 崩溃，Intel、NVIDIA、WARP 渲染模式下均复现。Windows 端 Browser/Cowork 功能完全不可用。

### 9. 工作区沙盒配置被静默丢弃
[Issue #83035](https://github.com/anthropics/claude-code/issues/83035) · 2026-08-01 新增

当会话/子代理根目录位于嵌套项目（含自身 `settings.local.json`）时，上层 `sandbox` 配置不再生效且无任何提示，直接构成沙盒逃逸风险。

### 10. `rm -rf` 可通过反引号替换绕过移除保护
[Issue #81273](https://github.com/anthropics/claude-code/issues/81273) · 评论 1

自动模式下将 `rm -rf` 放入 `$(...)` 反引号替换即可绕过灾难性移除 guard，且不触发交互确认。安全检查的 AST 覆盖范围存在明显盲区。

## 重要 PR 进展

本期时间窗口内共有 6 个 PR 更新，全部列出：

### 1. CI 修复 + TUI 输入延迟架构级修复方案
[PR #82987](https://github.com/anthropics/claude-code/pull/82987) · 开放

修复 GitHub Actions cron 失败、排除 PR 触发的自动化噪音，并提出高代理负载下 TUI 输入延迟的架构级修复建议（关联 #82984）。

### 2. 修复使用量泄漏问题
[PR #81540](https://github.com/anthropics/claude-code/pull/81540) · 已关闭

Atlas 2 自动化工具提交，目标关闭 #80705（Usage leak），标注奖励 $200。关闭状态说明可能未被采纳或被其他修复方案覆盖。

### 3. code-review 插件：实现置信度评分与 --threshold 标志
[PR #82794](https://github.com/anthropics/claude-code/pull/82794) · 开放

将 code-review 命令从二进制校验升级为 0–100 置信度评分，并新增 `--threshold` 标志，消除了 README 文档与命令实际行为之间的漂移。

### 4. Node.js 从 20 升级到 24
[PR #39872](https://github.com/anthropics/claude-code/pull/39872) · 开放

为即将到来的 Node.js LTS 变更做准备，升级整个工具链运行时版本。

### 5. security-guidance 插件文档补全
[PR #17776](https://github.com/anthropics/claude-code/pull/17776) · 已关闭

为 plugins 目录中唯一缺失文档的 security-guidance 插件添加 README，覆盖 9 个安全模式的说明。

### 6. 疑似自动化废 PR
[PR #82981](https://github.com/anthropics/claude-code/pull/82981) · 开放

仅有西班牙语标题 "Claude/automatizar inventario insumos w4n98s" 且无描述，疑似自动生成或测试提交，建议仓库加强 PR 审核机制。

## 功能需求趋势

从全部 issues 中提炼的社区关注方向：

1. **Max 计划模型访问与用量透明度** — #79337、#83037、#83036、#79441 等多条 issue 指向同一需求：CLI / VS Code / Desktop 上的额度状态必须一致，任何降级或切换都应明确通知用户。

2. **命令执行安全防护强化** — 多起 rm -rf / 数据删除事件（#82165、#81273、#80830、#75794）说明需要更完善的命令拦截机制：覆盖反引号/子 Shell 场景、在 PLAN/自动模式下同样生效、支持可配置的白名单与确认策略。

3. **会话持久化与可恢复性** — 包括会话记录保留策略（#83019）、云会话结果检索（#83012）、后台代理强制恢复（#83014）、后台代理不交付最终报告（#74113）。多代理工作流的生产级可靠性仍是短板。

4. **Windows 桌面客户端稳定性** — 多个 GPU 进程崩溃（#81159、#81275、#77768）以相同退出码反复出现，Windows 端发布质量与回归测试待加强。

5. **CLI / Web 环境行为一致性** — Bash 工具应遵循 bash 语义而非用户登录 shell（#74746）、Web 环境中 gh CLI 权限（#11139）、Java https_proxy 支持（#16222），跨环境差异正在成为工作流断裂的源头。

## 开发者关注点

1. **数据安全信任危机** — 代理执行 `rm -rf` 时无确认、guard 可被反引号绕过、甚至安全分类器阻止终止命令（#82165、#81273），开发者对自动/计划模式的信任度大幅下降。

2. **会话隔离与隐私风险** — 跨会话凭据泄漏（#72274）与已关闭文件的 IDE 选区泄漏（#71566）说明上下文构建过程仍存在敏感信息外泄路径。

3. **付费功能可用性质疑** — Fable 5 在 Max 计划中的额度问题持续多日未修复，且 CLI 与 Desktop 行为不一致，用户开始质疑"已付费模型是否真正可用"。

4. **后台任务可靠性不足** — 后台代理 idle、结果丢失、无恢复手段（#74113、#83012、#83014），多代理工作流还难以支撑关键的日常开发任务。

5. **回归与自动化防护欠缺** — 高赞滚轮回归（#65833）长时间未修复，同时仓库出现废 PR（#82981），社区希望官方加强回归测试与 PR 自动化审核。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-08-01**  
**数据来源：github.com/openai/codex**

---

## 1. 今日速览

今日 Codex 发布 3 个 v0.147.0-alpha 系列版本（alpha.1.1、alpha.3、alpha.4），持续高频迭代。社区层面，**64 条评论的“禁用 60 秒自动解决”需求**与 **42 条评论的 “Codex Diff 在 macOS 崩溃”** 成为最热问题；同时，MCP 进程泄漏、Windows WSL 兼容性缺陷继续发酵。PR 侧主要以 copyberry[bot] 提交的自动化功能合入为主，涵盖实时协作确认、远程插件搜索、线程分区管理 API 等方向。

---

## 2. 版本发布

过去 24 小时发布 3 个 Rust 版本：

| 版本 | 说明 |
|---|---|
| [rust-v0.147.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.4) | 最新 alpha |
| [rust-v0.147.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.3) | 中间迭代 |
| [rust-v0.147.0-alpha.1.1](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.1.1) | 补丁版本 |

均为 0.147.0 系列的持续 alpha 迭代，无独立发布说明。

---

## 3. 社区热点 Issues（10 个）

### ① 请求禁用“60 秒自动解决”的配置项
- **#28969** | 评论 64 | 👍 185 | [查看 Issue](https://github.com/openai/codex/issues/28969)
- 高赞功能请求：用户希望关闭 Codex 对提问的 60 秒自动处理（auto-resolve）行为。社区反应强烈，说明开发者希望保留对交互确认流程的完全控制权。

### ② Codex Diff 在 macOS 上崩溃
- **#35058** | 评论 42 | 👍 109 | [查看 Issue](https://github.com/openai/codex/issues/35058)
- VS Code 扩展中打开 “Codex Diff” 标签页即报 `Oops, an error has occurred`，所有仓库均复现。影响面广，是当前 IDE 集成体验的显著痛点。

### ③ Windows 截图导致 GPU 进程崩溃
- **#34133** | 评论 30 | [查看 Issue](https://github.com/openai/codex/issues/34133)
- Windows 10 上应用内浏览器截图时，Code Integrity 拒绝加载 `vk_swiftshader.dll`，导致 GPU 进程崩溃、应用卡死。属 Windows 平台稳定性问题。

### ④ MCP 服务器进程泄漏，RSS 高达 9+ GB
- **#30408** | 评论 21 | [查看 Issue](https://github.com/openai/codex/issues/30408)
- 每个新线程/对话都会派生全局 MCP server 进程，但线程归档后**从不回收**，造成无界的内存泄漏。属于架构级资源管理缺陷。

### ⑤ Windows WSL 到 Android 的远程控制完全不可用
- **#31786** | 评论 17 | [查看 Issue](https://github.com/openai/codex/issues/31786)
- 配对流程可通过，但手机端一直卡在 “connecting”。Windows + WSL 场景的远程连接功能未达可用状态。

### ⑥ Codex Desktop Meta-Bug：会话状态无界增长
- **#25779** | 评论 13 | [查看 Issue](https://github.com/openai/codex/issues/25779)
- 汇总性问题：会话/轮次状态无限累积导致卡顿、上下文膨胀、活动轮控制丢失。属于桌面端稳定性的核心问题。

### ⑦ WSL 仓库被误判为非 Git
- **#35119** | 评论 11 | 👍 11 | [查看 Issue](https://github.com/openai/codex/issues/35119)
- 新版 Windows 应用将有效的 WSL ext4 仓库标记为“非 Git”并提示“Git is unavailable”，影响大量使用 WSL 作为开发容器的用户。

### ⑧ 内置 image_gen 在复杂提示词下超时
- **#29645** | 评论 10 | [查看 Issue](https://github.com/openai/codex/issues/29645)
- 普通卡牌美术提示词约 240 秒超时，而简单提示词可成功。社区猜测与工具调用的响应机制或服务端超时配置有关。

### ⑨ 大型 base64 图像被重复发送进上下文
- **#28316** | 评论 10 | [查看 Issue](https://github.com/openai/codex/issues/28316)
- 用户提交图像后，Codex 将完整 base64 负载持久化到会话历史，并在后续 `/v1/responses` 请求中反复重发，导致上下文无界膨胀、成本上升。

### ⑩ 等待/状态轮询大量消耗配额
- **#35259** | 评论 9 | [查看 Issue](https://github.com/openai/codex/issues/35259)
- 多智能体协作期间，Codex Desktop 为等待子代理或轮询终端状态而不停重新进入模型，报告显示 **19.8% 的本地 token 消耗** 来自纯等待操作。

---

## 4. 重要 PR 进展（10 个）

### ① 实时委派确认控制
- **#36413** | [查看 PR](https://github.com/openai/codex/pull/36413)
- 为 `thread/realtime/start` 增加可选 `delegationAckFiller` 字段，显式控制实时会话中的委派确认行为，缺省时不改变现有行为。

### ② 用户输入阻塞行为显式化
- **#36410** | [查看 PR](https://github.com/openai/codex/pull/36410)
- 新增必填的 `isBlocking` 信号，明确 `request_user_input` 请求是否需要等待显式响应，避免用 `autoResolutionMs` 作为隐式语义。

### ③ 远程插件搜索实现
- **#36409** | [查看 PR](https://github.com/openai/codex/pull/36409)
- 实现 `plugin/search`，直接查询远程插件服务绕过 catalog 缓存，支持全局/工作区/个人范围，并遵守插件 feature gate。

### ④ 实验性插件搜索 API
- **#36402** | [查看 PR](https://github.com/openai/codex/pull/36402)
- 定义实验性 `plugin/search` 请求/响应协议，包含搜索词、作用域、工作目录、游标和分页限制。

### ⑤ 所有线程历史强制单写者所有权
- **#36389** | [查看 PR](https://github.com/openai/codex/pull/36389)
- 将跨进程写锁守卫扩展到旧式线程历史，避免多进程并发写入同一线程历史导致的数据损坏。

### ⑥ 用户消息确认提交进入核心 API
- **#36385** | [查看 PR](https://github.com/openai/codex/pull/36385)
- 新增 `submit_user_input_and_wait_for_admission`，仅当消息开始新轮或接管活动轮时才解析，提升交互确认可靠性。

### ⑦ 线程分区管理 API
- **#36380** | [查看 PR](https://github.com/openai/codex/pull/36380)
- 新增 `threadSection/create`、`update`、`delete` 三个 app-server 方法，SQLite 持久化自定义分区，支持 UUIDv7 稳定身份。

### ⑧ 代码模式启用沙箱化 V8
- **#36374** | [查看 PR](https://github.com/openai/codex/pull/36374)
- 为代码模式启用 `v8_enable_sandbox`，修复 Windows MSVC 使用非沙箱预编译产物的问题，提升安全隔离性。

### ⑨ 新增 `--approve-for-me` CLI 标志
- **#36373** | [查看 PR](https://github.com/openai/codex/pull/36373)
- 在交互和 `exec` 命令中加入该标志，用于将审批请求路由至自动审查流程，并预设 `approval_policy="on-request"` 与 `workspace-write` 沙箱。

### ⑩ 提取应用缓存逻辑到 ConnectorRuntimeManager
- **#31471** | [查看 PR](https://github.com/openai/codex/pull/31471)（系列化重构 1/4）
- 将 Codex 应用工具缓存抽取为独立的 `ConnectorRuntimeManager` 和不可变快照，按用户/账户/工作区模式隔离运行时上下文。

---

## 5. 功能需求趋势

从今日 Issues 与 PR 中可提炼出以下社区最关注的功能方向：

- **MCP 生态成熟化**：OAuth 生命周期管理（#35006）、进程泄漏修复（#30408）、严格自动审查（#36365）都指向 MCP 正在从“可用”走向“生产可用”。
- **跨平台（尤其是 Windows/WSL）支持**：多个 Windows 崩溃与 WSL 误判问题（#34133、#35119、#31786、#36225）显示 Windows 仍是稳定性洼地。
- **配额与成本控制**：轮询消耗配额（#35259）、Sol 模型快速耗尽额度（#32250）、重置消失（#32540）等问题表明用户对 token 使用透明度高度敏感。
- **会话/上下文状态治理**：base64 图片重发（#28316）、会话状态无界增长（#25779）、fork 任务继承未完成轮（#36405）均关乎长时间会话的健康度。
- **子代理与任务管理**：动态子代理命名（#29649）、`/subagents` 优先级逻辑（#19186）显示多智能体工作流的 UX 需要细化。
- **IDE 集成深度**：VS Code Diff 崩溃（#35058）、Max 推理力度缺失（#35763）说明开发者期望 IDE 功能与桌面端对齐。

---

## 6. 开发者关注点

### 资源泄漏与后台进程失控
- MCP 进程泄漏（#30408）与 ffmpeg 子进程占满 CPU（#36345）是两类典型的资源失控案例。开发者普遍希望 Codex 能严格清理子进程与临时资源。

### 配额消耗不透明
- 等待轮询（#35259）、busy-wait 烧配额（#36396）和重置消失（#32540）说明用户无法清晰感知 Codex 的模型调用时机与配额去向，可信度受影响。

### Windows 仍是“二等公民”
- WSL 仓库被误判（#35119）、GPU 截图崩溃（#34133）、启动崩溃（#36225）等多起 Windows 专属问题集中爆发，用户期待团队补齐 Windows 的工程投入。

### 上下文体积失控
- base64 图像重发（#28316）与工具输出持久化（#28969 关联）放大上下文体积，用记希望 Codex 能对大型工具输出执行“用后即弃”而非全量重放。

### 用户控制权诉求
- 60 秒自动解决（#28969）、自动审批标志（#36373）和用户输入阻塞语义（#36410）共同反映了一个信号：**社区希望在关键互动节点上保留显式的“人机确认”**。

---

*本日报由自动化分析生成，所有数据截至 UTC 2026-08-01。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-08-01）

## 1. 今日速览

今日 Gemini CLI 发布三个版本：v0.55.0-nightly（容量耗尽修复及错误传播改进）、v0.53.1 和 v0.54.0-preview.1（均为关键修复的补丁回溯）。社区热点集中在 Subagent 行为误报（#22323）、Generalist Agent 无限挂起（#21409）以及 Auto Memory 系统重试与脱敏问题（#26522/#26525），整体仍以 agent 稳定性和可靠性为主要矛盾。

## 2. 版本发布

### v0.55.0-nightly.20260801.gf47d6c6f7
- **核心修复 1**：将容量耗尽（capacity exhaustion）归类为终态错误，防止重试无限挂起。
- **核心修复 2**：将 `InvalidStreamError` 的具体错误细节（类型和消息）从核心层传播到 CLI UI，可针对空响应给出具体处理建议（如提示使用 `/compress`）。

🔗 [查看 Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-nightly.20260801.gf47d6c6f7)

### v0.53.1（稳定版补丁）
- 将 commit `f47d6c6`（InvalidStreamError 传播及容量耗尽修复）回溯至 v0.53.0 稳定版。该回溯存在**合并冲突**，需要人工解决。

🔗 [查看 Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.53.1)

### v0.54.0-preview.1（预览版补丁）
- 同样将 `f47d6c6` 回溯至 v0.54.0-preview.0，无冲突。

🔗 [查看 Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.0-preview.1)

## 3. 社区热点 Issues（Top 10）

### #22323 — Subagent 在 MAX_TURNS 后误报为 GOAL 成功（p1，评论 12）
`codebase_investigator` 子代理在尚未做任何分析时就触发了最大轮次限制，却报告 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了真实的中断原因。这直接影响用户对 agent 执行结果的信任。

🔗 https://github.com/google-gemini/gemini-cli/issues/22323

### #21409 — Generalist Agent 无限挂起（p1，评论 8，👍 8）
用户在让 CLI 委派给 generalist agent 时遭遇无限挂起（最久等待 1 小时）。简单操作如"创建文件夹"也会卡死，只有显式禁止使用 subagent 才能规避。社区反应强烈，是当前 agent 可靠性的头号痛点。

🔗 https://github.com/google-gemini/gemini-cli/issues/21409

### #25166 — Shell 命令执行完成后卡在 "Waiting input"（p1，评论 4，👍 3）
命令已执行完毕，但 UI 仍显示命令处于活动状态、等待用户输入。该问题频繁出现在极简命令上，严重影响使用体验。

🔗 https://github.com/google-gemini/gemini-cli/issues/25166

### #21983 — Browser Subagent 在 Wayland 下失败（p1，评论 4）
浏览器子代理在 Wayland 环境下直接终止，`Termination Reason: GOAL` 但实际并未完成任务。环境兼容性问题亟待解决。

🔗 https://github.com/google-gemini/gemini-cli/issues/21983

### #26522 — Auto Memory 对低信号会话无限重试（p2，评论 5）
Auto Memory 仅在提取代理成功读取 transcript 后才将会话标记为已处理。遇到低信号会话时，提取代理选择跳过，但该会话会反复出现在索引中，导致无限重试，浪费资源。

🔗 https://github.com/google-gemini/gemini-cli/issues/26522

### #26525 — Auto Memory 需增加确定性脱敏并减少日志记录（p2，评论 4）
Auto Memory 将本地 transcript 内容发送给模型，但提示词要求脱敏是在内容进入模型上下文**之后**才执行的，且服务会记录现有技能内容。安全敏感，需要确定性脱敏方案。

🔗 https://github.com/google-gemini/gemini-cli/issues/26525

### #19873 — 零依赖 OS 沙箱与执行后意图路由（p2，评论 8）
Gemini 3 模型本身擅长使用 bash 原生命令链。该 EPIC 提出用零依赖沙箱方式充分利用这一能力，同时在命令执行后进行意图路由，兼顾安全与体验。

🔗 https://github.com/google-gemini/gemini-cli/issues/19873

### #24353 — 组件级评估体系（p1，评论 7）
在已有 76 个行为评估测试的基础上，建立更细粒度的组件级评估体系，覆盖 6 个支持的 Gemini 模型，确保各功能模块在迭代中不退化。

🔗 https://github.com/google-gemini/gemini-cli/issues/24353

### #22745 — AST 感知的文件读取/搜索/映射（p2，评论 7）
通过 AST 感知工具精确定位方法边界，减少因读取偏移导致的 token 浪费和多轮往返，同时能更好地进行代码库导航。该方向还可能演变为独立的 CLI 工具（如 tilth/glyph，见 #22746）。

🔗 https://github.com/google-gemini/gemini-cli/issues/22745

### #21968 — Gemini 不主动使用 skills 和 subagents（p2，评论 6）
用户反馈，即使配置了清晰的 skills（如 gradle、git），模型也很少主动调用，只有显式指示时才使用。社区认为这削弱了自定义扩展的实际价值。

🔗 https://github.com/google-gemini/gemini-cli/issues/21968

## 4. 重要 PR 进展（Top 10）

### #28566 — InvalidStreamError 细节传播到 CLI UI（已合并）
将错误类型和消息从核心层传递到 UI，便于给用户提供具体的空响应处理指引（如 `/compress`）。该修复已通过 cherry-pick 进入 v0.53.1 和 v0.54.0-preview.1。

🔗 https://github.com/google-gemini/gemini-cli/pull/28566

### #28612 — Nightly 版本号自动升级
机器人例行版本号更新至 `0.55.0-nightly.20260801.gf47d6c6f7`。

🔗 https://github.com/google-gemini/gemini-cli/pull/28612

### #28610 — v0.53.1 补丁回溯（存在冲突）
将 `f47d6c6` 回溯到 v0.53.0 时出现合并冲突，需要人工干预。提醒维护者重点关注。

🔗 https://github.com/google-gemini/gemini-cli/pull/28610

### #28609 — v0.54.0-preview.1 补丁回溯（无冲突）
将 `f47d6c6` 干净地回溯到预览分支，已关闭。

🔗 https://github.com/google-gemini/gemini-cli/pull/28609

### #28608 — Preview 模型 404 时回退到稳定模型（p2）
使用 Gemini API key 认证时，若某个 key 没有 preview 模型访问权限，发往 `gemini-3.1-pro-preview` 的请求会收到 404。此 PR 让回退策略链在这种情况下自动切换到稳定模型。

🔗 https://github.com/google-gemini/gemini-cli/pull/28608

### #28607 — 保留 functionCall 的 thoughtSignature（p2）
修复 v0.53.0 回归：`stripThoughts()` 在移除 thought parts 时把 `thought_signature` 也剥掉了，导致并行工具调用时报 `API Error 400`。

🔗 https://github.com/google-gemini/gemini-cli/pull/28607

### #28586 — 同样修复 thoughtSignature 导致的 400 错误（p2）
与 #28607 几乎同期提交，针对同一 400 错误。两个 PR 需要维护者协调合并策略。

🔗 https://github.com/google-gemini/gemini-cli/pull/28586

### #28551 — macOS 下 Seatbelt 配置文件缺失回退（紧急修复）
解决在 macOS/gMac 上以沙箱模式（`-s`）启动时的崩溃问题：非 JS 静态资源（`.sb` 文件）在 runfiles 或 bundle 中缺失时，回退到内嵌配置文件。

🔗 https://github.com/google-gemini/gemini-cli/pull/28551

### #28557 — 修复 web-fetch 的 SSRF 漏洞（p1，安全）
`isBlockedHost` 只拦截了字面 IP，域名解析到内网 IP（如 `169.254.169.254`）可绕过校验。改为使用异步 DNS 解析进行完整校验，修复 `isBlockedHost` 的 SSRF 攻击面。

🔗 https://github.com/google-gemini/gemini-cli/pull/28557

### #28481 — MCP OAuth 令牌刷新修复（p1）
修复通过 OAuth discovery + 动态客户端注册方式添加的 MCP server 在刷新令牌时失败、且会删除已存凭据导致频繁重新认证的问题。

🔗 https://github.com/google-gemini/gemini-cli/pull/28481

## 5. 功能需求趋势

| 方向 | 代表性 Issue | 热度 |
|------|-------------|------|
| **Agent 稳定性与可靠性** | #22323（误报 GOAL）、#21409（无限挂起）、#25166（shell 卡输入）| 极高，多个 p1 未解决 |
| **Auto Memory 记忆系统优化** | #26522（无限重试）、#26525（确定性脱敏）、#26523（无效补丁隔离）| 高，5 月提出，近日仍活跃 |
| **安全加固** | #28557（SSRF）、#26525（脱敏）、#22672（阻止破坏性命令）| 高，安全类 PR 均标 p1 |
| **AST 感知代码分析** | #22745、#22746 | 中，探索性 EPIC |
| **零依赖沙箱执行** | #19873 | 中，方向新颖，但与 #21409 的挂起问题存在取舍 |
| **Agent 自我认知与工具使用** | #21968（不主动用 skills）、#21432（自我认知改进）| 中，社区呼声持续 |
| **组件级评估体系** | #24353 | 中，属工程质量基建 |

## 6. 开发者关注点

- **Subagent 结果可信度是最大痛点**：#22323 中"MAX_TURNS 被误报为 GOAL 成功"和 #21763 中"bugreport 不包含子代理上下文"表明，开发者无法信任和追溯 subagent 的执行结论与过程，这在多代理协作场景中尤为致命。
- **Agent 挂起/卡死频率高**：#21409（generalist 挂起超过 1 小时）、#25166（shell 命令卡输入）、#22465（vite app 交互提示卡住）——"永久挂起"类问题反复出现，开发者需要更可靠的超时、重试或跳过机制。
- **工具数量上限问题**：#24246 指出超过 400 个工具时直接返回 400 错误（标题写 128，正文写 400，需确认），社区期望模型能够智能裁剪工具范围而非全量注入。
- **权限边界混乱**：#22093 反映 v0.33.0 之后 subagent 在用户显式禁用的情况下仍然被调用，与权限配置预期不符。
- **模型主动使用自定义技能的比例过低**：#21968 的反馈具有代表性——skills 只在被明确指示时才会被调用，削弱了扩展生态的吸引力。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-08-01** | 数据源：github.com/github/copilot-cli

---

## 今日速览

- **v1.0.78-0 发布**，新增 `/permissions` 审批模式切换指令，并优化了沙箱构建缓存机制。
- **回归问题集中爆发**：plan-mode 误拦 shell 命令、`task_complete` 工具在 autopilot 下消失、大 session 恢复时 OOM 三起回归同时被社区标记。
- **新增严重可靠性隐患**：`events.jsonl` 超过 V8 字符串上限后会话永久不可恢复，另有用户反馈 autopilot 强制任务完成逻辑会覆盖用户明确的“仅研究”指令。

---

## 版本发布

### v1.0.78-0

- **Added**
  - 新增 `/permissions` 命令，可在不同审批模式之间动态切换。
  - ACP 模式现已支持通过 `closeSession` 请求关闭会话。
- **Improved**
  - 新增沙箱设置 `allowDevToolCaches`（默认开启）：允许沙箱化构建访问工具链缓存、注册表和已安装组件，从而提升构建兼容性。

> 社区注意：尽管新版本已发布，多个用户在 Issue 中反馈 1.0.74/1.0.76 仍存在回归问题，建议关注本文下方“开发者关注点”板块。

---

## 社区热点 Issues（Top 10）

### 1. [CLOSED] #4188 — plan-mode 回归：阻塞 shell 命令
- **作者**：wsilveirza | **评论**：7 | **👍**：3 | **更新**：2026-07-31
- **为什么重要**：plan 模式本应通过 `gh` 等命令辅助生成计划，但最新版本将所有 shell 命令一刀切拦截，直接影响核心工作流。7 条评论表明该回归影响范围较广。
- **链接**：[Issue #4188](https://github.com/github/copilot-cli/issues/4188)

### 2. [CLOSED] #4161 — `task_complete` 工具在切回 autopilot 后消失
- **作者**：AlexMalfr | **评论**：4 | **👍**：4 | **更新**：2026-07-31
- **为什么重要**：这是 #1523 的复发性回归。该问题曾在 v1.0.4 被修复（官方承诺 `task_complete` 在 autopilot 模式下永远可用），但在 1.0.76 再次失效，严重削弱自动化流程的可控性。
- **链接**：[Issue #4161](https://github.com/github/copilot-cli/issues/4161)

### 3. [CLOSED] #4305 — 升级后几乎任何命令都报 `JavaScript value 'Undefined' into rust type 'String'`
- **作者**：azat-badretdin | **评论**：4 | **👍**：4 | **更新**：2026-07-31
- **为什么重要**：从 1.0.76 开始，任意指令都会立即触发此类型转换错误，pre-release 版本同样复现。该问题属于阻断性故障，升级用户几乎无法正常使用 CLI。
- **链接**：[Issue #4305](https://github.com/github/copilot-cli/issues/4305)

### 4. [OPEN] #4251 — 恢复大型会话时 OOM，CPU 单核满载约 70 分钟（1.0.74 回归）
- **作者**：oldake | **评论**：1 | **👍**：1 | **更新**：2026-08-01
- **为什么重要**：同一机器、同一会话下，仅切换 CLI 版本做 A/B 测试，确认 1.0.74 相比 1.0.73 内存占用高达 3-4 倍，峰值 RSS 导致 OOM。长期维护大型会话的用户将直接受影响。
- **链接**：[Issue #4251](https://github.com/github/copilot-cli/issues/4251)

### 5. [OPEN] #4325 — `events.jsonl` 超过 V8 最大字符串长度，会话永久不可恢复
- **作者**：MattPD | **评论**：0 | **👍**：0 | **更新**：2026-08-01
- **为什么重要**：长期会话的 `events.jsonl` 文件增长超过 V8 引擎字符串上限后，CLI 无法再恢复该会话——即使文件本身完好、session-store 记录完整，也无任何支持手段可救回。这是对重度用户的数据安全级威胁。
- **链接**：[Issue #4325](https://github.com/github/copilot-cli/issues/4325)

### 6. [OPEN] #4318 — Autopilot 任务完成强制逻辑可覆盖用户明确的“仅研究”指令
- **作者**：wekempf | **评论**：1 | **👍**：0 | **更新**：2026-07-31
- **为什么重要**：用户明确将任务范围缩小为“仅做研究/解答，不要执行任何操作”，但 autopilot 的任务完成强制执行机制仍驱动 agent 继续采取行动。这触及 AI 行为边界这一核心信任问题——用户指令应拥有最高优先级。
- **链接**：[Issue #4318](https://github.com/github/copilot-cli/issues/4318)

### 7. [OPEN] #4078 — 定时提示词（`/every`、`/after`）会杀死现有提示词队列
- **作者**：darkmatter2222 | **评论**：4 | **👍**：0 | **更新**：2026-07-31
- **为什么重要**：当队列中有 N 个任务待处理时，定时提示词一旦触发，agent 处理完该定时任务后不会继续弹出队列中的下一项，导致整个队列永久停滞。自动化调度用户的流水线会因此悄悄中断。
- **链接**：[Issue #4078](https://github.com/github/copilot-cli/issues/4078)

### 8. [OPEN] #4324 — Fork 后 Copilot CLI 丢失 todos，并编辑了错误的 plan
- **作者**：xj-ms | **评论**：0 | **👍**：0 | **更新**：2026-07-31
- **为什么重要**：要求同时更新 plan 和 todo 列表时，fork 会话中 agent 会编辑旧 plan，且 todo 列表显示为空。该问题可能不仅限于 plan 模式，凡是涉及编辑会话文件夹内文件的操作都可能触发,影响 fork 工作流的正确性。
- **链接**：[Issue #4324](https://github.com/github/copilot-cli/issues/4324)

### 9. [OPEN] #3909 — 功能需求：企业/组织服务器托管设置（含 `env`）支持本地 CLI
- **作者**：velimattiv | **评论**：4 | **👍**：0 | **更新**：2026-07-31
- **为什么重要**：组织管理员目前无法集中推送环境变量等配置到开发者本地 Copilot CLI，唯一支持的方式是 Agents/Codespaces secrets，且仅适用于 GitHub 云端环境。企业规模化部署缺乏管理抓手。
- **链接**：[Issue #3909](https://github.com/github/copilot-cli/issues/3909)

### 10. [OPEN] #2109 — ACP 扩展：支持 `ask_user` / `ask_question` 式交互方法
- **作者**：TristanVII | **评论**：2 | **👍**：6 | **更新**：2026-07-31
- **为什么重要**：社区高赞需求（6 👍）。当前 ACP 仅支持 `session/request_permission`，但自定义 ACP 客户端需要向用户提出澄清问题并返回结构化答案的能力。该特性直接影响 ACP 生态的交互深度。
- **链接**：[Issue #2109](https://github.com/github/copilot-cli/issues/2109)

---

## 重要 PR 进展

过去 24 小时内仓库仅 2 个 PR 更新，且均非核心代码变更：

### #4316 — Create devcontainer.json
- **作者**：Pjrich1313 | **更新**：2026-07-31 | **评论**：暂无
- **内容**：为仓库新增 devcontainer.json 配置文件。属于开发环境配置补充，不涉及 CLI 功能逻辑。
- **链接**：[PR #4316](https://github.com/github/copilot-cli/pull/4316)

### #3163 — ViewSonic monitor（疑似 spam）
- **作者**：tijuks | **更新**：2026-07-31 | **评论**：暂无
- **内容**：标题与摘要均与 Copilot CLI 无关，疑似垃圾 PR（提及 “ViewSonic monitor” 和 “GitHub action //runners”）。社区无需投入关注。
- **链接**：[PR #3163](https://github.com/github/copilot-cli/pull/3163)

---

## 功能需求趋势

从全部 33 条 Issues 中提炼出社区最关注的功能方向：

| 方向 | 代表 Issue | 热度信号 |
|------|-----------|---------|
| **企业级配置管理** | #3909 组织级 server-managed 设置 | 4 评论，企业用户明确诉求 |
| **ACP 扩展能力** | #2109 `ask_user` 交互；#4174 暴露 token/context 用量 | #2109 获 6 👍，ACO 生态交互深度是社区期待 |
| **会话可靠性与大文件支持** | #4325 超限不可恢复；#4251 大 session OOM | 新增 issue，涉及数据安全，优先级高 |
| **AI 行为边界控制** | #4318 autopilot 不可覆盖用户指令 | 触及用户对 agent 的信任底线 |
| **多模型兼容** | #3215 DeepSeek-V4 工具调用 400 错误 | 新模型接入的实际障碍 |
| **MCP 配置易用性** | #4323 `.mcp.json` 不支持注释 | 仓库级共享配置难以添加说明文档 |
| **桌面端体验** | #4321 pinned session 分组；#4312 commit 按钮失效；#4304 侧边栏键盘导航 | 桌面端交互细节正在被持续打磨 |

---

## 开发者关注点

1. **版本升级的“回归恐惧症”**——1.0.74/1.0.76 连续爆出 plan-mode 阻塞（#4188）、`task_complete` 消失（#4161）、大 session OOM（#4251）等回归，不少用户在评论区表示“暂缓升级”，建议官方加强发布前的回归测试矩阵，尤其是长会话和权限相关场景。

2. **长会话/大数据量是当前最大短板**——`events.jsonl` 超过 V8 字符串上限即永久锁死会话（#4325）、恢复时 3-4 倍内存膨胀导致 OOM（#4251），说明会话存储层需要一个真正的健壮性重构，而非小幅调优。

3. **Autopilot 模式的行为边界需要硬约束**——官方为“任务完成”引入强制机制（#4318），但该机制在用户已缩小任务范围（如仅研究/解释）时仍持续驱动 agent 行动，社区认为用户显式意图应具备最高优先级，强制逻辑不能被“完成度”反制。

4. **MCP 配置仍是最脆弱的环节**——从 #4323（注释导致全体 MCP server 被跳过）、#4320（嵌套 agent 依赖未文档化的父级授权）、#4303（MCP server 数量过多导致子 agent 异常）来看，MCP 的解析、权限传播和规模伸缩都需要更多防御性设计。

5. **终端渲染/键盘交互的细节问题高频出现**——#4311 行缓存失效导致 transcript 空白、#4313 无法滚动浏览对话历史、#4304 侧边栏无法方向键导航。这些不是致命 bug，但在日常交互中反复出现，显著影响沉浸式使用体验。

---

*数据截止 2026-08-01。日报由 AI 辅助整理，仅供参考。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-08-01）

## 今日速览

过去 24 小时无新版本发布；社区讨论热度集中在两个长期 feature request：**远程控制**（#1282，23 👍）和**记忆系统**（#1283），都希望让 Kimi Code CLI 更好地支持跨设备/跨会话的连续工作流。与此同时，PR #2572 针对 Moonshot API 工具调用参数双重编码问题提交了修复，值得关注。

---

## 社区热点 Issues

今日活跃 Issue 共 4 条，以下全部列出：

### #1282 [enhancement] Feature Request: Remote Control - Continue local sessions from any device
- **作者**：CatKang  
- **状态**：OPEN  
- **创建 / 更新**：2026-02-27 / 2026-07-31  
- **评论 / 👍**：9 / 23  
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/1282  
- **摘要**：希望增加远程控制功能，用户可以在手机、平板或任意浏览器上继续本地 Kimi Code CLI 会话，从而在离开工位时保持完整本地环境的工作流连续性。  
- **重要性**：这是目前社区关注度最高的一条 issue。23 个 👍 和 9 条评论说明“本地会话远程接管”是不少开发者的真实痛点，尤其适合需要长时间运行 agent 任务的场景。  
- **社区反应**：讨论积极，但尚未看到明确实施计划；该 issue 已存在约 5 个月，近期仍被更新，说明需求仍有热度。

### #1283 [enhancement] Feature Request: Memory System - Persistent context across sessions
- **作者**：CatKang  
- **状态**：OPEN  
- **创建 / 更新**：2026-02-27 / 2026-07-31  
- **评论 / 👍**：8 / 0  
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/1283  
- **摘要**：希望实现完整的记忆系统，让 Kimi Code CLI 能记住项目上下文、项目模式以及用户偏好，包含自动记忆（AI 管理笔记）和手动记忆（用户自定义指令）两种方式。  
- **重要性**：与 #1282 互补，核心目标是解决“每次新会话都要重新解释上下文”的问题。这类 memory 能力是当前 AI 编码助手竞争的关键方向。  
- **社区反应**：8 条评论说明有一定讨论度，但 👍 数量不高；可能因为需求范围较大，社区对具体落地方案仍在观望。

### #2422 [bug] 对话完成后滚动查看输出内容会自动调到底部
- **作者**：venus0707  
- **状态**：OPEN  
- **创建 / 更新**：2026-06-04 / 2026-07-31  
- **评论 / 👍**：2 / 1  
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2422  
- **摘要**：使用版本 1.46.0、模型 kimi2.6、Linux 平台。对话完成后，用户向上滚动查看历史输出时，界面会自动跳回底部，影响输出检查。  
- **重要性**：这是一个很实际的终端 UX 问题，会影响长会话中的 review 体验。虽然不是功能缺失，但对日常使用效率影响明显。  
- **社区反应**：目前评论较少，属于“小而痛”的 bug，期待官方修复。

### #796 [CLOSED] error: the message at position 1 with role
- **作者**：bravery  
- **状态**：CLOSED  
- **创建 / 更新**：2026-01-30 / 2026-07-31  
- **评论 / 👍**：1 / 0  
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/796  
- **摘要**：KimiCLI/1.3，macOS，使用 kimi-for-coding 模型时出现 LLM provider error：`Error code: 400 - {'error': {'message': '... role ...`，疑似消息角色或对话格式不符合 API 要求。  
- **重要性**：该 issue 已关闭，但它是早期版本多轮对话中角色消息格式问题的一个样本；核心是 provider 对 `role` 字段校验严格导致的 400 错误。  
- **社区反应**：评论很少，关闭可能意味着官方已修复或确认非 bug；但类似问题值得在回归测试中持续关注。

---

## 重要 PR 进展

今日活跃 PR 仅 1 条：

### #2572 [OPEN] fix(kosong): recursively unwrap double-encoded JSON in tool-call arguments
- **作者**：aalhadxx  
- **创建 / 更新**：2026-07-31 / 2026-07-31  
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2572  
- **摘要**：修复工具调用参数中数组/对象类型的 JSON 双重编码问题。当使用 Moonshot API 时，`function.arguments` 里的嵌套数组/对象值会以 JSON 字符串形式返回，导致 `SetTodoList`、`ExitPlanMode`、`StrReplaceFile` 等工具在 Pydantic 校验时失败。该 PR 通过递归解包方式处理双重编码。  
- **重要性**：这个 PR 直击 agent 工具调用可靠性问题。如果 Moonshot API 确实存在这种返回格式，会影响所有依赖数组/对象参数的编码工具，属于“不修复就没法稳定使用”的关键兼容性问题。  
- **状态说明**：目前仍是 OPEN，未合并，需要关注后续 review 和测试情况。

---

## 功能需求趋势

从今日活跃的 Issues 和 PR 看，社区最关注的方向并非新增 IDE 集成或新模型支持，而是**围绕编码工作流的连续性和可靠性**展开：

- **跨设备远程控制**：希望把本地 CLI 会话延伸到手机、平板、浏览器，解决“离开工位但任务不能停”的问题。#1282
- **跨会话持久记忆**：希望工具能记住项目模式、上下文和用户偏好，减少重复说明。#1283
- **终端交互体验**：长对话中滚动回看输出不应被自动跳底打断。#2422
- **工具调用兼容性**：需要兼容 provider 返回的特殊 JSON 编码格式，避免 Pydantic 校验失败。#2572
- **API 消息格式稳定性**：早期版本曾出现 `role` 相关 400 错误，说明多轮消息组装仍需要健壮性保障。#796

整体来看，社区已经从“能不能生成代码”转向“能不能在不同设备、不同会话之间无缝地持续工作”，并且对底层工具调用的稳定性非常敏感。

---

## 开发者关注点

- **会话连续性痛点突出**：开发者希望临时离开电脑后仍能通过远程方式监督和继续 agent 任务，本地环境不丢失。  
- **上下文记忆成为刚需**：多次会话后重新加载项目背景成本高，自动记忆 + 手动记忆是被明确提出的功能诉求。  
- **终端 UI 细节影响效率**：长输出自动滚底、无法稳定回看历史内容，是 CLI 工具中高频出现的交互抱怨。  
- **工具调用失败是最大阻塞项**：数组/对象参数的 JSON 双重编码会导致核心编码工具不可用，这类 provider 兼容性问题会直接打击用户信任。  
- **模型/API 错误信息不够友好**：早期版本中 `role` 相关 400 错误让用户难定位问题，需要更明确的错误提示或在客户端提前校验。

---

**说明**：本期数据基于 GitHub 上 2026-08-01 凌晨收集的 issue/PR 更新；当前活跃条目较少，因此“热点”与“重要”部分列出的是全部可见动态。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## OpenCode 社区动态日报 — 2026-08-01

### 1. 今日速览

OpenCode Go/Zen 订阅服务昨日出现大面积上游 401 阻断，大量用户报告模型调用失败，成为今日社区最热门议题。此外，TUI 黑屏、上下文缓存失效与隐私政策变更等稳定性与信任问题持续发酵。PR 侧则以 TUI 插件体系加固和大量死代码清理为主，社区活跃度集中在稳定性和体验优化。

---

### 2. 版本发布

过去 24 小时无新版本 Release。

---

### 3. 社区热点 Issues

#### 🔥 服务故障与稳定性

**① OpenCode Go 上游拒不响应：chat/completions 返回 401，而 /v1/models 正常**
[Issue #38257](https://github.com/anomalyco/opencode/issues/38257) | 评论 42 | 👍 11
Go 订阅用户从 7 月 22 日起所有模型在调用 `chat/completions` 时均返回 `401 Request blocked by upstream provider`，而 `v1/models` 端点正常。大量用户跟帖确认服务端故障，社区情绪焦灼。

**② 顽固的 TUI 黑屏问题再次冒出**
[Issue #4140](https://github.com/anomalyco/opencode/issues/4140) | 评论 37 | 👍 13
[Issue #10221](https://github.com/anomalyco/opencode/issues/10221) | 评论 33 | 👍 17
两个新旧 issue 均指向 TUI 黑屏问题：升级到 1.0.47 后黑屏、全新安装后黑屏。用户被迫回退版本或手动 kill 进程，属于高频痛点。

**③ “exiting loop” 消息让用户“想把 opencode 放一边”**
[Issue #38801](https://github.com/anomalyco/opencode/issues/38801) | 评论 19 | 👍 0
用户反馈使用多种 OpenAI 兼容 API 时，TUI 不断输出 `exiting loop` 导致无法正常使用。该问题已持续多日，社区呼吁尽快修复。

#### 🆕 新模型与服务能力

**④ DeepSeek V4 Flash 正式版（0731）是否已上线 Go/Zen？**
[Issue #39823](https://github.com/anomalyco/opencode/issues/39823) | 评论 22 | 👍 20
DeepSeek 于 7 月 31 日发布 V4 Flash 正式版（checkpoint 0731），训练规模不变但 Agent 能力大幅提升（Terminal Bench 82.7、NL2Repo 54.2 等）。用户急切询问 OpenCode Go/Zen 何时跟进。

**⑤ GPT-5.6 Luna 在 Go 上流式输出劣化：重复、中断、结尾“垃圾尾巴”**
[Issue #39881](https://github.com/anomalyco/opencode/issues/39881) | 评论 3 | 👍 0
用户对比 OpenAI Codex 后发现，`gpt-5.6-luna` 在 OpenCode Go 上存在重复回答、流式中断及结尾内容错乱等问题，怀疑上游接入质量有差异。

#### 🛡️ 隐私与信任

**⑥ 要求撤回对 Go 隐私措辞和提供商归属的“静默移除”**
[Issue #39875](https://github.com/anomalyco/opencode/issues/39875) | 评论 4 | 👍 20
Go 订阅用户发现官方在两周内静默修改了隐私相关文案，要求恢复原措辞并补充遥测与数据保留政策。该 issue 聚合了此前 5 个相关诉求，获高赞。

**⑦ 官方移除“零数据保留”承诺，引发订阅用户不安**
[Issue #39861](https://github.com/anomalyco/opencode/issues/39861) | 评论 5 | 👍 13
用户通过 web.archive.org 对比发现 OpenCode Go 文档中“zero-retention policy”字样已被删除，要求官方解释是否变更数据保留策略。

#### 🔌 功能与体验

**⑧ 文本选择能力缺失，7 月底再被翻出**
[Issue #927](https://github.com/anomalyco/opencode/issues/927) | 评论 13 | 👍 29
TUI 中光标始终为 default 而非 text，且拖拽无选中效果。该 issue 已开放超过一年但仍是高赞需求，用户希望至少能通过命令启用复制。

**⑨ ACP 事件顺序错乱：session/update 晚于 end_turn 到达**
[Issue #17505](https://github.com/anomalyco/opencode/issues/17505) | 评论 15 | 👍 10
当 OpenCode 作为 ACP provider 嵌入 Fabriqa 等客户端时，`session/update` 通知在 `session/prompt` 响应（stopReason=end_turn）之后才到达，导致 UI 展示内容不完整。影响所有基于 ACP 协议集成的下游应用。

**⑩ 本地模型上下文缓存频繁失效**
[Issue #37489](https://github.com/anomalyco/opencode/issues/37489) | 评论 4 | 👍 0
切换模式或上下文压缩时导致缓存全部失效，本地推理（vLLM/Ollama）性能严重下降；另一个相关问题 [Issue #23595](https://github.com/anomalyco/opencode/issues/23595)（评论 4，👍 11）指出 `<system-reminder>` 位置不断移动导致 llama.cpp prompt 缓存无法命中。

---

### 4. 重要 PR 进展

**① TUI 外部 TSX 插件运行时共享**
[PR #39983](https://github.com/anomalyco/opencode/pull/39983)
修复了外部 V2 TUI 插件在 Bun 可执行环境中无法使用宿主 OpenTUI/Solid 运行时的问题。此前插件内 `createSignal` 的响应式 JSX 仅首帧渲染、之后冻结。

**② Shell 命令失败时输出更简明的错误信息**
[PR #39982](https://github.com/anomalyco/opencode/pull/39982)
当 shell 命令以非零退出码结束时，不再倾倒超长输出，而是给出可读的失败摘要。属于 issue #39771 的第三部分（超时机制此前已合入）。

**③ TUI 动态监听新建插件目录**
[PR #39981](https://github.com/anomalyco/opencode/pull/39981)
修复了 `.opencode/plugins/tui/` 目录在 TUI 启动后才被创建时，watch 器因路径不存在而静默失败的问题。

**④ 会话标签页拖拽排序改为每次拖拽只持久化一次**
[PR #39942](https://github.com/anomalyco/opencode/pull/39942)
此前每次跨越槽位都会执行 flock→read→write 的完整持久化周期，导致视觉排序明显滞后。现在改为拖拽结束时一次性保存。

**⑤ 会话标签页状态卫生加固**
[PR #39941](https://github.com/anomalyco/opencode/pull/39941)
三处修复：持久化失败不再被静默吞掉；`closeSession` 竞态处理；避免标签页在启动时意外重置。

**⑥ 修复隐藏标签页的关闭热区“幽灵点击”**
[PR #39940](https://github.com/anomalyco/opencode/pull/39940)
标签页右侧的 `×` 只在 hover 时渲染，但事件处理器始终存在。在不支持鼠标移动追踪的终端上，点击最右侧单元格会“无形中”关闭标签页。

**⑦ 新增 TUI 透明背景三态切换**
[PR #5657](https://github.com/anomalyco/opencode/pull/5657)
引入 `auto | on | off` 三态透明度策略，并新增命令面板入口 `theme.transparency`。该 PR 已开放数月，今日获更新。

**⑧ web 命令新增 `no-browser` 选项**
[PR #39984](https://github.com/anomalyco/opencode/pull/39984)
为 web 命令增加“不自动打开浏览器”开关，适合远程/容器环境使用。

**⑨ TUI 测试基建：等待 mini prompt 实际就绪**
[PR #39980](https://github.com/anomalyco/opencode/pull/39980)
通过暴露 prompt-listener 就绪状态，消除测试中“提交时监听器尚未挂载”的竞态，提升 TUI 测试稳定性。

**⑩ 大批死代码清理（机器人贡献）**
[PR #39964](https://github.com/anomalyco/opencode/pull/39964)、[PR #39963](https://github.com/anomalyco/opencode/pull/39963)、[PR #39962](https://github.com/anomalyco/opencode/pull/39962)、[PR #39961](https://github.com/anomalyco/opencode/pull/39961)、[PR #39960](https://github.com/anomalyco/opencode/pull/39960)、[PR #39959](https://github.com/anomalyco/opencode/pull/39959)、[PR #39958](https://github.com/anomalyco/opencode/pull/39958)、[PR #39957](https://github.com/anomalyco/opencode/pull/39957)、[PR #39956](https://github.com/anomalyco/opencode/pull/39956)、[PR #39955](https://github.com/anomalyco/opencode/pull/39955)、[PR #39952](https://github.com/anomalyco/opencode/pull/39952)
由 `opencode-agent` 机器人批量提交，移除 TUI/CLI 中一系列未使用的辅助函数、序列化器、locale 工具及占位 LSP 面板，持续收紧代码库体积。

---

### 5. 功能需求趋势

- **插件/模板市场呼声渐高**：[#28696](https://github.com/anomalyco/opencode/issues/28696)（👍 23）提出建立统一的 Plugin/Agent/Skills marketplace/registry，覆盖发现、安装与分发，是当前最高的功能票之一。
- **隐私透明化成为信任焦点**：[#39875](https://github.com/anomalyco/opencode/issues/39875) 与 [#39861](https://github.com/anomalyco/opencode/issues/39861) 合计获得 33 个 👍，社区对数据保留政策和遥测披露高度敏感。
- **本地模型性能优化**：上下文缓存失效（[#37489](https://github.com/anomalyco/opencode/issues/37489)）与 system-reminder 位置抖动（[#23595](https://github.com/anomalyco/opencode/issues/23595)）指向同一诉求——让本地推理在 prompt 变化时尽量命中 KV 缓存。
- **新模型 / 新服务快速支持**：DeepSeek V4 Flash 正式版上线询问（[#39823](https://github.com/anomalyco/opencode/issues/39823)）与 GPT-5.6 Luna 质量劣化（[#39881](https://github.com/anomalyco/opencode/issues/39881)）说明社区对模型接入的速度和质量都有较高预期。
- **会话内容管理**：[#24017](https://github.com/anomalyco/opencode/issues/24017) 提出话题分组与书签能力，期望更结构化的 prompt/thread 保存方式。
- **桌面端体验补全**：[#39944](https://github.com/anomalyco/opencode/issues/39944) 请求桌面应用默认折叠工具执行面板（对标 TUI 的 /details），[#39936](https://github.com/anomalyco/opencode/issues/39936) 则希望增加 VS Code 内通知。

---

### 6. 开发者关注点

- **服务端稳定性成最大痛点**：Go/Zen 的 401 阻断（[#38257](https://github.com/anomalyco/opencode/issues/38257)、[#39827](https://github.com/anomalyco/opencode/issues/39827)）和流式输出劣化（[#39881](https://github.com/anomalyco/opencode/issues/39881)）直接影响付费用户体验，且多日未获官方响应。
- **TUI 黑屏 / 遮挡问题反复出现**：从 2025 年 11 月的 1.0.47（[#4140](https://github.com/anomalyco/opencode/issues/4140)）到 2026 年 1 月的新装黑屏（[#10221](https://github.com/anomalyco/opencode/issues/10221)），再到 7 月底的输入区被黑矩形覆盖（[#38773](https://github.com/anomalyco/opencode/issues/38773)），终端 UI 稳定性问题频发。
- **ACP/集成时序问题影响下游生态**：[#17505](https://github.com/anomalyco/opencode/issues/17505) 的事件顺序问题会波及所有通过 ACP 协议接入的客户端，集成方希望 OpenCode 严格保证 “输出完成后才发 end_turn”。
- **计费透明度不足**：[#36399](https://github.com/anomalyco/opencode/issues/36399) 报告 Go 订阅下 qwen3.7-max 出现高频扣费异常，[#39883](https://github.com/anomalyco/opencode/issues/39883) 则反馈 CLI 与桌面端订阅状态不同步，计费问题持续引发不满。
- **桌面端仍有独立于 CLI 的稳定性缺口**：会话加载失败（[#16185](https://github.com/anomalyco/opencode/issues/16185)）、跨项目导航崩溃（[#39840](https://github.com/anomalyco/opencode/issues/39840)）等桌面专用问题仍待解决。
- **本地模型工具调用中断**：[#24316](https://github.com/anomalyco/opencode/issues/24316) 报 qwen3.6 在裸工具调用输出时进度挂起，[#26412](https://github.com/anomalyco/opencode/issues/26412) 则指向 vLLM 等自建网关在流式 tool call 时缺少 `function.name` 的兼容性问题。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-01

## 今日速览

今日仓库无新版本发布，但社区讨论与技术动作密集。上下文压缩（compaction）机制仍是最集中的痛点，多个 Issue 分别暴露了自动压缩不触发、重复触发、压缩后流程中断以及企业 Copilot 压缩失败等问题。PR 侧则迎来一波围绕服务端架构与存储层的重要重构（SQLite 线性化、per-session 队列、server session backend 等），同时有两个新模型提供商（Baseten、Amazon Bedrock Mantle）正在接入。

## 社区热点 Issues

### 1. auto-compaction 形同虚设：上下文超限后才被 API 强制拒绝
**#6879** [bug]（7 评论，5👍）— 有用户报告在 gpt-5.6-sol 上，单个 agentic 回合运行 2 小时以上，上下文已越过压缩阈值甚至超过 100%，但自动压缩一直未触发，直到 API 在 373k tokens 处拒绝请求才罢休。该 issue 获得 5 个赞，说明受影响用户不在少数，开发者已在跟进。
链接：https://github.com/earendil-works/pi/issues/6879

### 2. WSL 下 GitHub Copilot 登录卡死
**#6187** [bug]（19 评论）— WSL 中安装 pi 成功，浏览器设备授权也显示注册完成，但 TUI 始终检测不到授权结果，挂起在登录等待中。WSL 用户基数大，评论数最高（19 条），是近期最受关注的环境兼容性问题。
链接：https://github.com/earendil-works/pi/issues/6187

### 3. 流式输出时 TUI 单核 100%
**#6665** [bug] [inprogress]（11 评论）— 长时间会话中，模型流式输出时 TUI 占用一个完整 CPU 核心。根因有二：`Intl.Segmenter` 的 grapheme 分段未缓存，以及每个 chunk 都触发完整 Markdown 重建。当前标记为 in-progress，性能影响显著。
链接：https://github.com/earendil-works/pi/issues/6665

### 4. 压缩后有时不继续
**#7020** [bug] [inprogress]（7 评论，2👍）— 长会话中，压缩完成后 Pi 偶尔不继续对话。该问题对 coordinator 型长会话影响尤为明显，获得 2 个👍，开发者已标记为 in-progress。
链接：https://github.com/earendil-works/pi/issues/7020

### 5. 旧 CPU 上官方二进制 SIGILL 崩溃
**#7149** [bug] [inprogress]（2 评论）— 官方 linux-x64 二进制在 Sandy Bridge（无 BMI2/AVX2）CPU 上启动即 SIGILL，而 npm 包却可正常运行。涉及 devx 工具链的基础兼容性问题，已有对应 PR #7390 修复中。
链接：https://github.com/earendil-works/pi/issues/7149

### 6. kimi-coding OAuth 401 直接中断对话
**#7319** [bug]（5 评论）— Kimi Coding 订阅的 OAuth token 偶发过期返回 401，Pi 缺少 refresh-on-401 机制，且 401 未列入任何重试分类器，导致整个 turn 中断。影响付费订阅用户体验。
链接：https://github.com/earendil-works/pi/issues/7319

### 7. GHE.com 企业 Copilot 压缩失败："unknown stamp"
**#7413** [bug]（2 评论）— 今日新提交：GitHub Copilot 企业（GHE.com）账号执行 `/compact` 时报 `unknown stamp "prod-cus-01"`，普通对话正常，仅压缩受影响。由于是 8 月 1 日新建，尚待讨论，但企业用户场景值得关注。
链接：https://github.com/earendil-works/pi/issues/7413

### 8. 并行工具调用中一个卡住，兄弟结果全丢
**#7053** [bug]（3 评论）— 并行执行多个工具时，若某个工具调用 stall，已完成的工具结果也不会落盘（`Promise.all` 整体等待），最终报 "No result provided"。#3503 只修了 UI 事件，持久化问题仍在。对依赖长任务 agent 的用户影响较深。
链接：https://github.com/earendil-works/pi/issues/7053

### 9. /compact 到 90% 阈值时触发两次、死循环
**#7253** [bug] [inprogress]（3 评论）— 手动执行 `/compact` 且上下文接近阈值时，自动压缩被同时触发，两个压缩互相叠加，直到按 Esc 才停下来并报 "Compaction failed: Already..."。压缩流程的边界处理明显需要加固。
链接：https://github.com/earendil-works/pi/issues/7253

### 10. Gemini 3.x 工具调用因缺失 `thought_signature` 失败
**#6996** [bug]（4 评论）— 使用 gemini-3.5/3.6-flash 时，工具调用结果回传模型后，历史中缺少 `thought_signature` 导致后续流转失败。这是 Gemini 3.x 系列接入的重要兼容性缺口。
链接：https://github.com/earendil-works/pi/issues/6996

## 重要 PR 进展

### 1. fix(coding-agent): target baseline x64 CPUs（#7390, OPEN）
修复 #7149 — 将编译目标下调至 baseline x64，避免在 pre-Haswell 旧 CPU 上因 BMI2 指令产生 SIGILL。对使用官方二进制的旧机器用户是关键修复。
链接：https://github.com/earendil-works/pi/pull/7390

### 2. fix(coding-agent): read clipboard text on Wayland（#7387, CLOSED）
关闭 #7248 — 在 Wayland 下优先用 `wl-paste` 读取剪贴板，X11 原生路径保留为回退方案，并增加了空剪贴板/回退场景的回归测试。
链接：https://github.com/earendil-works/pi/pull/7387

### 3. fix(coding-agent): make JSON streaming output linear（#7394, OPEN）
解决 #7290 的 O(n²) 问题 — JSON/RPC 模式下改为只发 delta 增量记录，不再每次携带全量累计消息；同时为 JSON 打印模式加入 stdout 背压。属于 wire protocol 的 breaking change，但收益明显。
链接：https://github.com/earendil-works/pi/pull/7394

### 4. fix(coding-agent): make model refresh state consistent（#7381, OPEN）
统一模型目录刷新（`/model`、登录/登出、API key 变更、扩展注册等）的状态发布边界，消灭并发刷新导致的竞态。今日仍在更新中。
链接：https://github.com/earendil-works/pi/pull/7381

### 5. feat(coding-agent): add server session backend（#7396, OPEN）
为 PiServer 增加持久化 session 后端：JSONL 存储、跨进程锁、崩溃恢复，以及协议快照/直播转写。服务端能力的关键拼图。
链接：https://github.com/earendil-works/pi/pull/7396

### 6. feat(coding-agent): add experimental CLI option parser（#7411, OPEN）
新增实验性的 CLI 选项解析器，支持 combined/server/client 三种模式，并为 role 提供独立的认证来源鉴别、Unix socket 路径校验和聚合错误提示。今日新开。
链接：https://github.com/earendil-works/pi/pull/7411

### 7. feat(ai): add Baseten provider（#7404, CLOSED）
新增 Baseten 作为内置 API-key 模型提供方（OpenAI-compatible），设置 `BASETEN_API_KEY` 即可使用，实现方式与现有 Together AI 集成对齐。
链接：https://github.com/earendil-works/pi/pull/7404

### 8. feat: Add Amazon Bedrock Mantle OpenAI Responses provider（#6216, OPEN）
新增 Amazon Bedrock Mantle 的 OpenAI Responses API 提供方，基于 openai-node 的 Bedrock 支持。虽然 PR 已挂了一个多月，但仍在活跃维护，值得关注。
链接：https://github.com/earendil-works/pi/pull/6216

### 9. Add native prompt API for extensions（#7389, CLOSED）
向扩展暴露 `pi.prompt()` 原生 API，支持命令、技能、prompt-template 的完整链路，并保留图片与 streaming steer/follow-up 行为。扩展生态增强。
链接：https://github.com/earendil-works/pi/pull/7389

### 10. feat(agent): add per-session store queues（#7398, CLOSED）
为 memory/JSONL 存储实现 per-session 串行队列：同一会话的操作严格有序，不同会话可并发推进；JSONL 文件系统并发上限为 4。是会话存储稳健性的重要改进。
链接：https://github.com/earendil-works/pi/pull/7398

## 功能需求趋势

从近 24 小时的 Issues/PRs 中可以提炼出以下社区关注方向：

- **上下文压缩（Compaction）稳定性**：这是当前最集中的痛点。#6879（不触发）、#7020（压缩后不继续）、#7253（重复触发）、#7413（企业 Copilot 压缩失败）从不同角度暴露了压缩机制在高/边界场景下的脆弱性，社区期待一次系统性的修复。
- **长会话性能**：TUI 单核 100%（#6665）、JSON 模式 O(n²) 输出（#7290）、输入延迟随会话长度线性恶化（#7385）等，说明用户正在把 Pi 用于越来越长的 agentic 会话，性能成为瓶颈。
- **新模型 & 新 Provider 接入**：Kimi K3 on Fireworks（#7199）、Baseten（#7404）、Amazon Bedrock Mantle（#6216）、Z.AI 模型引用更新（#7401），模型生态的扩展节奏很快。
- **Linux 环境适配**：WSL 登录挂起（#6187）、Wayland 剪贴板（#7248/#7387）、旧 CPU SIGILL（#7149/#7390），Linux 桌面与 WSL 用户的基数在增长。
- **Server/多进程架构**：#7396、#7386、#7409、#7398 等大量 PR 围绕服务端会话、远程协调、存储队列展开，说明 Pi 正在从单纯 TUI 工具向 server/client 架构演进。

## 开发者关注点

- **压缩流程的可靠性**是开发者反馈中最痛的点：不触发、重复触发、触发后丢消息/卡死，每一个变体都有人踩中。尤其是 RPC 场景下压缩期间的 prompt 被 ACK 后又静默丢失（#7150），属于数据丢失级 Bug，建议优先排查。
- **并行工具调用的结果一致性**：#7053 表明当一个工具调用 stall 时，已完成的结果也被一起丢弃，这对长任务 agent 是潜在隐患。
- **认证中断与重试策略**：#7319 的 401 不重试、#7392 的 HTTP/2 流错误不重试，都指向同一个问题——Pi 的重试分类器覆盖不全，云端/网关的瞬态错误会直接杀死一个 turn。
- **输出协议的效率**：#7290 和对应的 #7394 修复说明 `--mode json` 在全量快照模式下有严重性能缺陷，使用 JSON 模式做自动化的用户应关注该 PR 的合并进度。
- **旧硬件兼容性**：SIGILL 问题虽已有 PR 修复，但也提醒了官方二进制在编译目标上的兼容性需要更谨慎的基线选择。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-08-01）

## 今日速览

今日发布 v0.21.2（Release Notes 为空，官方的 Highlights 显示 Autofix 在五轮后将低严重性建议置后并给出可见通知）。社区讨论热度集中在 `qwen serve` 多工作区 daemon 演进（#6379 以 31 条评论居首）与 Anthropic 4.6+ 兼容性 P1 修复；同时 v0.21.2 被报告存在 SGR 鼠标转义序列泄漏输入框的回归（#8267），对应修复 PR 已第一时间提交。

## 版本发布

### v0.21.2
- 本次发布未附带公开的详细 Release Notes。
- 项目 Highlights 提及：Autofix 在超过五轮后会延迟低严重性建议，并在因轮次限制拒绝继续时发布可见通知。
- 社区反馈：有用户报告在 v0.21.2 上出现 SGR 鼠标事件序列被注入输入框的 UI 回归（[#8267](https://github.com/QwenLM/qwen-code/issues/8267)）。

## 社区热点 Issues

1. **[RFC: Support multiple workspaces in one qwen serve daemon](https://github.com/QwenLM/qwen-code/issues/6379)**（评论 31）  
   全场讨论最热烈的 Issue，提出将 `1 daemon = 1 workspace` 扩展为多工作区模型。涉及 daemon 架构核心演进，当前仍处于讨论阶段（need-discussion / daemon）。

2. **[Anthropic 4.6+ assistant-prefill 400 + thinking.display silently defaults to 'omitted'](https://github.com/QwenLM/qwen-code/issues/8039)**（P1，评论 6）  
   已验证的两个 bug，影响所有 Claude Opus/Sonnet 4.6+ 及 5.x 模型：assistant-prefill 直接 400，且 `thinking.display` 静默默认为 `omitted`。已关闭，欢迎外部贡献修复。

3. **[tracking(serve): Bound multi-workspace daemon resource usage](https://github.com/QwenLM/qwen-code/issues/8051)**（评论 9）  
   与 #6379 配套的追踪 Issue，指出仅靠 workspace/session 数量上限无法约束请求体字节、WebSocket 组装等实际内存占用，需要增加资源上限设计。

4. **[bug(serve): daemon authorises each ACP child 50% of host memory](https://github.com/QwenLM/qwen-code/issues/8182)**（评论 3）  
   `qwen serve` 为每个 ACP 子进程都分配宿主内存 50% 的 V8 上限，却从未按子进程数量分摊，极易导致内存超卖。属于 daemon 资源管理的高频痛点。

5. **[Keep deferred tool discovery from invalidating prompt cache prefixes](https://github.com/QwenLM/qwen-code/issues/6721)**（评论 7）  
   延迟工具（deferred tools）通过 `tool_search` 被发现后，会调用 `setTools()` 更新真实工具声明，导致 prompt 缓存前缀失效，推高成本与延迟。

6. **[Model outputs XML-style tool calls as plain text in long sessions](https://github.com/QwenLM/qwen-code/issues/8003)**（评论 3）  
   200+ 轮、180K+ tokens 的长会话中，`qwen3.8-max-preview` 偶发把工具调用写成 `<invoke>`/`<parameter>` 纯文本，而不是结构化 `tool_calls`，影响长上下文场景的稳定性。

7. **[SGR 鼠标转义序列泄漏到输入框](https://github.com/QwenLM/qwen-code/issues/8267)**（评论 2）  
   v0.21.2 启动后，`ESC [ <...` SGR 鼠标事件被当作原始文本注入输入缓冲区，导致终端无法正常输入。属于新版本引入的 UI 回归，已有 PR #8268 在修。

8. **[Minified React error #185 on Windows](https://github.com/QwenLM/qwen-code/issues/5199)**（评论 9）  
   Windows 下因 Cherry Studio 全局安装路径触发 React 错误 #185（评论数第二高），影响特定环境下 IDE/UI 的正常启动。

9. **[sub agent ask user questions but user has no way to answer](https://github.com/QwenLM/qwen-code/issues/7835)**（评论 3）  
   子代理向用户提问后，主代理没有收集并转发用户的回答，子代理永久等待。暴露了 subagent 交互链路的缺口，已关闭需后续验证。

10. **[perf(core): file-search crawl re-tests the same directories ~41x](https://github.com/QwenLM/qwen-code/issues/8252)**（评论 2）  
    文件搜索爬虫对同一个目录反复测试 ignore 规则约 41 次，属明显的性能浪费，值得关注。

## 重要 PR 进展

1. **[fix(cli): filter SGR mouse escape sequences in early input capture](https://github.com/QwenLM/qwen-code/pull/8268)**  
   将 `0x3c` 加入 CSI 第三字节检查，使 SGR 鼠标事件序列在早期输入捕获阶段被正确过滤，直接修复 #8267。

2. **[fix(cli): add ui.mouseTracking setting](https://github.com/QwenLM/qwen-code/pull/8198)**  
   双层修复：新增 `ui.mouseTracking` 设置（默认 true）作为总开关；同时修复 VP 模式下右键菜单和 URL 点击的回归。

3. **[fix(integration): use QWEN_CODE_TEST_CRON_FAST in acp-cron test](https://github.com/QwenLM/qwen-code/pull/8243)**  
   在 ACP cron 集成测试中加入 5 秒自动触发机制，不再等待真实分钟边界，解决 CI 抖动问题。

4. **[fix(external-context): harden MCP dependencies](https://github.com/QwenLM/qwen-code/pull/8206)**  
   将 direct external-context 集成升级到 MCP SDK 1.30.0，并为新版本消费者选择打过补丁的 Hono 2 版本，同时刷新传递依赖与第三方声明。

5. **[fix: make the test suite portable on Windows](https://github.com/QwenLM/qwen-code/pull/8050)**  
   让工作区测试套件与平台敏感路径在 Windows 上保持一致，同时保留 POSIX-only 语义断言；复用既有自托管 Windows 验证工作流。

6. **[feat(serve): resolve and report the daemon memory budget](https://github.com/QwenLM/qwen-code/pull/8245)**  
   为 daemon 增加内存预算的解析与报告能力（此前没有 cgroup/堆上限等任何限制依据），为 #8182、#8051 的资源管控打基础。

7. **[feat(cli): /summary supports custom export path](https://github.com/QwenLM/qwen-code/pull/8116)**  
   `/summary` 现在接受可选路径参数，如 `/summary docs/summary.md`；默认行为保持不变（`.qwen/PROJECT_SUMMARY.md`）。

8. **[feat(skills): add disabled skill levels](https://github.com/QwenLM/qwen-code/pull/8057)**  
   新增 `skills.disabledLevels` 设置，支持 `project` / `user` / `extension` / `bundled` 四个级别的禁用，用户可借此隐藏内置技能。

9. **[feat(workflows): bubble workflow agent approvals](https://github.com/QwenLM/qwen-code/pull/8240)**  
   当 Workflow agent 遇到 Shell/编辑/MCP/信息请求等需要确认的操作时，审批请求会上浮到父 TUI、ACP host 或 stream-json 控制通道，补全前台权限路径。

10. **[feat(cli): add TUI image display tool](https://github.com/QwenLM/qwen-code/pull/8217)**  
    为交互式 TUI 新增模型可调用的 `display_image` 工具：校验 PNG 签名、绝对路径、常规文件状态与 8 MiB 上限，仅持久化路径与 MIME，不传图像字节。

## 功能需求趋势

从全部 Issues 中可以提炼出四条最热门的演进方向：

- **多工作区与资源管控**：以 #6379、#8051、#8091 为代表，社区对 `qwen serve` 的诉求从单工作区扩展到多工作区模型，并同步要求可度量的内存/字节级资源上限，而非仅仅数量级限制。
- **跨模型 / 跨协议兼容性修复**：Anthropic 4.6+ 相关的 converter 密集修复（#8039、#8159、#8160、#8161、#8258）表明长上下文下的协议转换正确性是当前质量攻坚重点。
- **缓存与性能优化**：#6721（工具发现破坏 prompt 缓存前缀）、#8252（目录重复 ignore 测试）、#8003（长会话工具输出格式漂移）都集中在规模化场景下的推断与搜索成本控制。
- **Windows 体验与 Web Shell 打磨**：#5199、#8227、#8050 显示跨平台兼容仍是持续投入方向；Web Shell 侧则在做消息展示、审批弹窗、会话隔离等细节打磨（#8214、#8248、#8229、#8262）。

## 开发者关注点

- **终端输入被污染**：#8267 的 SGR 鼠标序列泄漏直接导致无法输入，属于优先级最高的 P0 级体验问题，修复 PR #8268 已迅速开出。
- **Windows 平台的特殊差异**：#5199（React 错误）与 #8227（`O_NOFOLLOW` 不存在）提示开发者在 Windows 上仍会遇到区别于 POSIX 的坑，涉及安全防护时不能简单套用 Linux 方案。
- **子代理交互链路不完整**：#7835 指出子代理提问后无人应答、永久等待，暴露了 subagent 在多级对话中的消息路由缺口。
- **长会话推理稳定性**：#8003、#8207 分别报告模型在超长上下文中丢失函数调用格式（XML/JSON 泄漏为纯文本），开发者希望能在长会话中保持结构化输出。
- **守护进程内存分配隐患**：#8182 的“每子进程 50%”内存上限设计让社区担忧 ACP 多开时的内存超卖，期待 #8245 等 PR 带来的内存预算能被有效上报并执行限制。
- **CI 频繁抖动**：多个 `Main CI failed` 自动 Issue（#8076、#8222、#8237、#8244、#8256）集中在 ACP cron 与 MCP server 的异步测试上，社区正通过测试缝（QWEN_CODE_TEST_CRON_FAST）等方式改善确定性。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（CodeWhale）社区动态日报 — 2026-08-01

## 今日速览

DeepSeek-TUI 项目已正式更名/品牌化为 **CodeWhale**，并发布 v0.9.3 版本，重点支持 DeepSeek V4 Flash 与工具链规范化。社区在过去 24 小时保持高频活跃：19 条 Issue、14 条 PR 更新，其中 File 编辑工具在长文本/CRLF/中文注释场景下的反复失败问题得到了针对性修复（#5008）。此外，关于 "Constitution" 中文译名的讨论仍在持续，本地化质量已成为社区关注焦点之一。

## 版本发布

### v0.9.3（过去 24 小时内发布）
- **品牌变更**：CodeWhale 成为 Shannon Labs 的正式公开产品名；`codewhale` 命令、npm 包及 release 资产均使用小写技术标识符。旧 npm 包 `deepseek-tui` 已弃用，不再获得后续版本。（[查看 Release](https://github.com/Hmbown/CodeWhale/releases)）
- **新模型支持**：集成 DeepSeek V4 Flash，提供官方响应支持（参考 [PR #4993](https://github.com/Hmbown/CodeWhale/pull/4993)）。
- **依赖安全清理**：移除了未维护的 `ttf-parser` PDF 传递依赖链，解决 `RUSTSEC-2026-0192` 维护警告（[Issue #4382](https://github.com/Hmbown/CodeWhale/issues/4382)）。

## 社区热点 Issues

1. **[#4949] "Constitution" 中文翻译之争**：PR #4908 作者将译文从“协作准则”改回“宪法”，引发争议——支持者认为“宪法”更体现权威性，反对者担心其在中文语境中带有敏感色彩。目前仍在征集中文母语者意见，5 条评论。（[链接](https://github.com/Hmbown/CodeWhale/issues/4949)）

2. **[#5007] 知名 YouTuber 未使用 CodeWhale 作为 TUI**：社区成员指出其关注的博主在测试 DeepSeek V4 Flash 时选用了 Codex 而非 CodeWhale，引发关于项目定位与推广的讨论，4 条评论。（[链接](https://github.com/Hmbown/CodeWhale/issues/5007)）

3. **[#5003] File 编辑工具对中长文本反复失败（严重 bug）**：模型在替换大段代码时连续失败 15+ 次，导致 3 次 `git checkout` 全量回滚，最终只能绕过工具改用外部 Python 脚本。文件特征为约 700 行 C 代码、含中文注释、CRLF 行尾。诊断信息缺乏可操作性。（[链接](https://github.com/Hmbown/CodeWhale/issues/5003)）

4. **[#5005] 沙箱路径白名单增强**：Xcode 构建产物位于 workspace 外的 `~/Library/Developer/Xcode/DerivedData/`，当前 `sandbox_mode = "workspace-write"` 无法访问。请求支持文件系统路径白名单（allowlist）。（[链接](https://github.com/Hmbown/CodeWhale/issues/5005)）

5. **[#5000] 中断的 assistant 输出应持久化**：当回合在 `MessageComplete` 前被中断，已输出的文本仅存在于 TUI 本地显示，不在权威 session 中，导致下一轮模型无法感知此前内容。需要 Engine 级的一等公民支持。（[链接](https://github.com/Hmbown/CodeWhale/issues/5000)）

6. **[#5002] Tool 'task' 不可用报错**：用户在实际使用中遇到 `Failed to locate tool: Tool 'task' is not available`，同时伴随 Anthropic API HTTP 400 错误，疑似工具注册或配置问题。（[链接](https://github.com/Hmbown/CodeWhale/issues/5002)）

7. **[#4599] 模型事实单一来源**：每个模型的 context window、max output、capabilities 等数据散布在多个 crate 和硬编码字面量中，需要统一收敛，避免消费侧测试重复硬编码。（[链接](https://github.com/Hmbown/CodeWhale/issues/4599)）

8. **[#4706] 减少默认工具面**：`tasks`、`update_plan`、`work_update` 等状态管理工具概念重叠，小模型容易出现选择错误。建议定义最小 always-loaded 工具集。（[链接](https://github.com/Hmbown/CodeWhale/issues/4706)）

9. **[#4998] Headless OAuth 完成路径**：SSH/容器/无浏览器环境无法完成 OAuth 登录。请求实现通用 PKCE + loopback redirect，并提供手工粘贴 redirect URL 的 fallback。（[链接](https://github.com/Hmbown/CodeWhale/issues/4998)）

10. **[#4999] Benchmark/评估框架强化**：要求评估结果确定性强、fail-closed、provenance 精确，当前存在 ad hoc fixtures、未版本化 trace 格式和生命周期/取消事件不完整等问题。（[链接](https://github.com/Hmbown/CodeWhale/issues/4999)）

## 重要 PR 进展

1. **[PR #4977] 修复 Windows AltGr 输入被误判为帮助快捷键**：AltGr 在 Windows 下被报告为 `Ctrl+Alt`，导致巴西 ABNT2 布局中 `AltGr+Q` 输入的 `/` 触发全局 `Ctrl-/` 帮助面板。已修复，合入 main。（[链接](https://github.com/Hmbown/CodeWhale/pull/4977)）

2. **[PR #5008] File 编辑工具诊断信息增强**：针对 #5003 的修复，为 `action=edit/patch` 提供可操作的失败诊断，并容忍过期行号（stale line numbers），避免模型在同一文件上反复失败。（[链接](https://github.com/Hmbown/CodeWhale/pull/5008)）

3. **[PR #5001] 修复带圈数字/Keycap 字符宽度计算**：① ❷ 1️⃣ 等 Enclosed Alphanumerics 在 CJK 终端下应占 2 列，原按 1 列计算导致渲染缺失字符或幽灵空格。（[链接](https://github.com/Hmbown/CodeWhale/pull/5001)）

4. **[PR #5006] Windows 安装器不再覆盖超长 PATH**：NSIS `ReadRegStr` 对超长注册表值返回空，导致安装器误判 PATH 不存在并覆盖为仅含 CodeWhale 的路径。修复保留原用户 PATH。（[链接](https://github.com/Hmbown/CodeWhale/pull/5006)）

5. **[PR #4993] v0.9.3 发布候选**：包含 72 个单职责提交，全部基于干净分支 fast-forward 合入。核心亮点为 DeepSeek V4 Flash 支持与工具规范化。（[链接](https://github.com/Hmbown/CodeWhale/pull/4993)）

6. **[PR #5004] 恢复 v0.9.3 rustdoc 门禁**：修复测试辅助函数的 intra-doc 链接问题，恢复 CI 中的 `RUSTDOCFLAGS=-Dwarnings` 检查，保证文档零警告。（[链接](https://github.com/Hmbown/CodeWhale/pull/5004)）

7. **[PR #5016] 依赖更新：libc 0.2.186 → 0.2.189**：包含 Emscripten `pthread` 相关新增。（[链接](https://github.com/Hmbown/CodeWhale/pull/5016)）

8. **[PR #5013] 依赖更新：ratatui 0.30.0 → 0.30.2**：TUI 渲染框架补丁更新，可能包含影响布局稳定性的修复。（[链接](https://github.com/Hmbown/CodeWhale/pull/5013)）

9. **[PR #5010] actions/stale 升级至 11.0.0（major）**：Stale Bot 的主要版本升级，需要关注行为变化对 Issue/PR 自动关闭策略的影响。（[链接](https://github.com/Hmbown/CodeWhale/pull/5010)）

10. **[PR #4910] Draft: 文档验证面 sanity check**：一个“提问型”Draft PR，作者以半开玩笑的语气探讨是否具备确定性的验证表面，与 #4227 相关，非功能性提交。（[链接](https://github.com/Hmbown/CodeWhale/pull/4910)）

## 功能需求趋势

- **外部协议互操作性**：ACP（Agent Client Protocol）客户端支持成为明确方向，包括将 GitHub Copilot 作为命名外部 ACP worker 后端（#4996、#4997）。
- **无头/远程环境适配**：Headless OAuth 完成路径被明确提出，覆盖 SSH、容器等无浏览器场景（#4998）。
- **沙箱灵活性**：不再满足于全有或全无的 workspace 限制，用户期望细粒度的路径白名单/黑名单控制（#5005）。
- **上下文与 Token 效率**：持续优化工具描述、结果 payload、默认工具面，降低小模型的选错率与输入消耗（#4705、#4706、#4708）。
- **模型管理统一**：模型解析链、模型事实数据需要集中收敛，消除双实现、硬编码和跨 crate 不一致（#4599、#4851）。
- **会话状态持久化**：中断输出应进入权威 session，不再仅存于 TUI 本地；TUI 图形状态也需引入语义化持久层（#5000、#4995）。

## 开发者关注点

- **工具可靠性优先**：File 编辑工具在 CRLF/中文注释/700 行以上的文件上反复失败，是当前最尖锐的可靠性痛点，好在 #5008 已给出针对性修复。
- **Windows 兼容性**：AltGr 键冲突、超长 PATH 被覆盖、CJK 字符宽度计算错误——三个 Windows 相关问题同日涌现（#4977、#5006、#5001），说明 Windows 用户基数可观，且对细节体验敏感。
- **错误信息可操作性**：#5003 中“失败模式缺乏可操作诊断”和 #5002 的“Tool 'task' is not available”均指向同一需求：错误消息不能只报错，要给出下一步行动指引。
- **安全与审计**：社区对依赖传递链的安全告警保持敏感（#4382），同时期待评估框架具备 fail-closed 的确定性（#4999）。
- **模型行为一致性**：用户注意到模型解析链存在两套实现（#4851），期望统一 owner 以避免“doctor 报告与实际请求模型不一致”的类问题。

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*