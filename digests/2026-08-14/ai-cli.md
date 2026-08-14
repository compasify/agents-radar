# AI CLI 工具社区动态日报 2026-08-14

> 生成时间: 2026-08-14 00:59 UTC | 覆盖工具: 10 个

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

# AI CLI 工具横向对比分析报告（2026-08-14）

## 1. 生态全景

AI CLI 工具正在从“终端对话助手”快速演进为具备多智能体编排、MCP 互联、会话持久化和成本治理能力的完整开发代理平台。头部格局呈现“两超多强”：Claude Code 与 OpenAI Codex 依托模型能力和社区体量领跑，Gemini CLI、Qwen Code、OpenCode 等通过差异化路线追赶。当前行业共性短板集中在多智能体可靠性、长会话压缩、Windows 平台体验和 MCP 互操作细节，各工具均处于密集修补阶段。

## 2. 各工具活跃度对比

| 工具 | 版本发布 | 更新 Issues | 重要 PR | 活跃度信号 |
|---|---|---|---|---|
| Claude Code | 2 个正式版（v2.1.231 / v2.1.232） | 10 个热点（#38335 累计 832 评论） | 2 条（1 OPEN / 1 CLOSED） | 社区体量断层第一，回归问题集中 |
| OpenAI Codex | 3 个 alpha（0.148.0-alpha.11~13） | 10 个热点（#37458 53 评论） | 10 条全部合并 | 发布频率最高，工程执行力强 |
| Gemini CLI | 1 个 nightly（v0.56.0） | 50 条有更新，精选 10 | 25 条有更新，精选 10 | Issue/PR 密度最高，迭代最快 |
| GitHub Copilot CLI | 1 个正式版（v1.0.80-0） | 10 个热点（#2904 获 20👍） | 仅 1 条且已关闭 | 反馈响应慢，用户高赞诉求无实质推进 |
| Kimi Code | 0 | 3 条更新 | 0 | 活跃度最低（Grok 除外），需求集中于记忆系统 |
| OpenCode | 1 个补丁（v1.18.18） | 10 个热点（#37012 获 41👍） | 10 条（多条已合并） | 中高，V2 迁移期争议多 |
| Pi | 0 | 10 个热点（#6879 19 评论） | 10 条 | 无版本发布但 PR 活跃，个人维护项目 |
| Qwen Code | 2 个（v0.21.11 正式版 + v0.21.12-preview.1） | 10 个热点 | 10 条 | 多智能体架构集中落地，热度高 |
| Codewhale（原 DeepSeek TUI） | 1 个正式版（v0.9.7） | 10 个热点 | 10 条 | 品牌迁移分水岭，社区期待 v0.9.8 |
| Grok Build | 0 | 0 | 0 | 过去 24 小时完全无活动 |

## 3. 共同关注的功能方向

**① 多智能体/子代理编排与可靠性**
- Claude Code：默认开启 Subagent forking，子代理继承完整上下文
- Qwen Code：落地 Fleet 多智能体架构，新增 `/coordinate` 命令
- Gemini CLI：子代理误报成功（#22323）、无限挂起（#21409）
- Copilot CLI：自定义子代理模型与推理努力级别不匹配导致连环报错
- Codewhale：简化 32 字段 agent schema（#5324），降低模型调用出错率
- 共性诉求：**状态真实、不挂起、可配置、可审计**

**② MCP 协议层完善**
- Claude Code：修复 MCP OAuth redirect URI 不匹配
- OpenAI Codex：支持按服务器配置 OAuth 回调端口、解析本地 `$ref`、修复 fd 泄漏
- Copilot CLI：Atlassian MCP OAuth 回归（RFC 8414 报错）
- Codewhale：修正 `nextCursor: null` 违反 MCP 规范问题
- Gemini CLI：损坏的 MCP 配置不再被静默降级为“全部启用”
- 共性诉求：**OAuth 稳定、schema 解析完整、资源生命周期可管理**

**③ 长会话与上下文压缩**
- Pi：auto-compaction 失效，直到 API 在 373k tokens 处拒绝请求
- OpenCode：压缩请求超出上下文窗口上限，手动 `/compact` 也失败
- OpenAI Codex：压缩后丢弃客户端 developer 指令（#38445 已修复）；子代理日志膨胀至 145GiB
- Claude Code：并行工具调用导致 74% cache_creation tokens 被浪费
- Kimi Code：单步生成 88k 垃圾 token、运行 53 分钟无熔断
- 共性诉求：**压缩触发时机准确、数据不丢失、成本可预期**

**④ 配额/成本可观测性**
- Claude Code：Max 配额异常消耗（832 评论，全社区最大热点）
- Copilot CLI：长任务耗尽事件存储，会话被误标为 cancelled
- Kimi Code：失控输出直接带来灾难性 API 费用
- 共性诉求：**透明用量反馈、异常消耗预警、配额异常快速修复**

**⑤ Windows 平台体验**
- Claude Code：Windows GPU 进程崩溃（exit code 101457950）
- OpenAI Codex：沙箱拒绝 MSIX 版 pwsh、扩展资源加载失败
- Copilot CLI：扩展宿主进程泄漏，每会话产生 4 个子进程不释放
- Qwen Code：Ctrl+V 粘贴完全失效；Gemini CLI：引入 WSL2 剪贴板支持
- 共性诉求：**开箱即用、进程稳定、终端兼容**

## 4. 差异化定位分析

| 工具 | 定位关键词 | 核心差异化 | 目标用户 |
|---|---|---|---|
| **Claude Code** | 完整开发代理环境 | 桌面端 + CLI 多端协同、跨会话消息传递、Subagent forking 上下文继承 | Claude 深度用户、团队协作者 |
| **OpenAI Codex** | 高频迭代的多端代理矩阵 | TUI/CLI/VS Code 扩展/桌面 App 全覆盖，发布节奏最快 | OpenAI 模型用户、追求新能力者 |
| **Gemini CLI** | 评估驱动的多模型前端 | 组件级 eval 体系、多模型策略（已支持 Claude 4.x）、A2A 互操作 | 研发质量敏感、多模型对比用户 |
| **Copilot CLI** | 企业级代码辅助 | 与 VS Code Copilot 深度绑定、`.agent.md` 自定义 agent、细粒度推理努力级别 | 已采购 GitHub 企业版的开发团队 |
| **Kimi Code** | 轻量对话工具（记忆缺失） | 最小化界面，社区呼声集中在跨会话记忆（#1283） | Moonshot API 用户、轻量需求 |
| **OpenCode** | 开源多提供商中立层 | GitHub Copilot/Kimi/Zen 免费模型均可接入，本地 LAN 提供方自动发现 | 多模型切换、私有化部署用户 |
| **Pi** | 极客向多后端 TUI | Codex/Gemini/Anthropic/xAI 多后端，终端兼容性细节打磨 | Linux/终端重度用户、自托管者 |
| **Qwen Code** | 云原生多智能体平台 | Fleet 架构、LAN pairing、daemon 化，重云服务集成为阿里系特色 | 阿里云/Vertex AI 用户、MaaS 场景 |
| **Codewhale** | DeepSeek 原生的通用前端 | 本地 DS4 一键接入、OpenAI 兼容协议、Auto-Review 双层安全架构 | DeepSeek 用户、中文开发者 |

## 5. 社区热度与成熟度

**第一梯队：体量最大、运作成熟**
- **Claude Code**：话题度断层领先（单 issue 832 评论），版本节奏稳定，但桌面端回归频发开始消耗信任
- **OpenAI Codex**：工程化执行力最强，夜间合并 10 条 PR，但 alpha 版本频繁意味着稳定性尚未收敛

**第二梯队：快速迭代、反馈密集**
- **Gemini CLI**：50 条 Issue / 25 条 PR 更新，安全问题响应迅速（RCE、CVE 当日修复）
- **Qwen Code**：多智能体战略清晰，正式版 + preview 双线推进，社区讨论质量高
- **OpenCode**：PR 活跃（安全、性能、V2 兼容），但 UI 回归争议（41 👍 反对新布局）暗示迁移风险

**第三梯队：体量中等或处于调整期**
- **Pi**：学术/极客向社区，长会话可靠性讨论深入，但无 release、单人维护瓶颈明显
- **Codewhale**：品牌迁移后的“二次创业”，Agent schema 简化、DS4 一键接入都是高共鸣改进
- **Copilot CLI**：用户需求密度高（20 👍 的功能请求），但 PR 活跃度最低，社区反馈闭环不理想
- **Kimi Code**：最安静的头部工具，3 条 Issue、0 条 PR，记忆系统是唯一持续吸聚讨论的话题

**未激活**：Grok Build 在过去 24 小时无任何活动。

## 6. 值得关注的趋势信号

**① 多智能体从“演示”进入“核心工作流”，但治理能力滞后**
Claude Code 默认开启 Subagent forking、Qwen Code 落地 Fleet、Codewhale 简化 agent schema——编排能力已足够，但状态误报、挂起、日志膨胀说明可靠性治理仍处于“追赶”状态。**开发者在采用多智能体工作流时，应优先验证超时机制、审计日志和降级策略**，而非仅关注编排能力。

**② MCP 进入“标准化阵痛期”**
多个工具同时出现 OAuth 回调、schema `$ref`、fd 泄漏、nextCursor 合规等细节问题。MCP 已事实上成为跨工具互操作标准，但“支持 MCP”与“完整实现规范”之间存在巨大差距。**建议开发者选择对 MCP 规范实现更严谨的工具，并留意各工具的 OAuth 和资源生命周期管理能力。**

**③ 上下文压缩成为隐形基础设施瓶颈**
Pi 的压缩触发失败、OpenCode 的压缩超窗、Codex 的压缩丢弃指令、Claude 的缓存浪费——压缩机制是长会话的命脉，但当前实现普遍粗糙且失败成本高昂。**未来 1~2 个季度内，压缩触发策略、压缩后数据完整性和缓存利用率将是各工具的军备竞赛重点。**

**④ 成本可观测性直接决定用户信任**
Claude Code 配额异常一条 issue 能积累 832 条评论，说明“花了多少、为什么花”已非锦上添花。**提供透明 token 用量、cache 命中率和异常消耗预警的工具将获得明显的社区竞争优势。**

**⑤ Windows 体验是下一个差异化战场**
从 Codex 沙箱兼容、Claude GPU 崩溃到 Qwen 的 Ctrl+V 失效，每个头部工具在 Windows 上都有未解决的问题。**Windows 开发者在 AI CLI 中的占比持续上升，率先解决 Windows 稳定性的工具将吃到可观的 adoption 红利。**

**⑥ 供应链安全成为信任基石**
Gemini CLI 修复 eval-pr 工作流 RCE 和高危 CVE，OpenCode 的 curl|bash 安装链路被质疑，A2A 未认证端点被披露——AI CLI 具备自动执行代码的能力，权限边界和供应链安全直接决定企业能否采用。**选择工具时，应关注安装校验、最小权限执行和依赖漏洞响应速度。**

**⑦ 模型中立化加速，“前端体验”成为竞争新焦点**
Gemini CLI 已支持 Claude 模型、Codewhale 主打 DeepSeek 本地接入、OpenCode 以多提供商为核心卖点、Pi 兼容多个后端——模型绑定正在松动。当“换模型”变得容易时，**终端交互体验、性能、终端兼容性和生态集成将成为工具间竞争的核心分水岭。**

---

*本报告基于 2026-08-14 各项目 GitHub 公开数据整理，统计窗口为过去 24 小时。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据来源：`anthropics/skills` 仓库 | 截止 2026-08-14

## 1. 热门 Skills 排行

以下按 PR 评论数排序选取 8 个高关注度 Skills：

1. **skill-creator：eval 触发率与 Windows 兼容性修复** ([#1298](https://github.com/anthropics/skills/pull/1298))
   - 功能：修复 `run_eval.py` 恒报 `recall=0%` 的严重 bug，使描述优化循环基于有效信号；同时修复 Windows 子进程流读取、触发检测和并行 worker。
   - 讨论热点：直指 #556 的 10+ 独立复现，是 skill 自动迭代工具链最核心的可靠性缺陷。
   - 状态：Open

2. **document-typography：生成文档排版质量控制** ([#514](https://github.com/anthropics/skills/pull/514))
   - 功能：预防 AI 生成文档中的孤词换行、寡段（标题滞留页底）、编号对齐错误。
   - 讨论热点：这些问题影响所有 Claude 生成的文档，但用户极少主动要求排版优化，因此需要通过技能自动兜底。
   - 状态：Open

3. **pdf：SKILL.md 大小写敏感引用修复** ([#538](https://github.com/anthropics/skills/pull/538))
   - 功能：修正 8 处 `REFERENCE.md`→`reference.md`、`FORMS.md`→`forms.md` 等引用错误。
   - 讨论热点：在 Linux/macOS 等大小写敏感文件系统上会导致技能资源加载失败。
   - 状态：Open

4. **ODT：OpenDocument 创建、模板填充与 HTML 转换** ([#486](https://github.com/anthropics/skills/pull/486))
   - 功能：支持 `.odt`/`.ods` 的创建、读取、模板填充，并解析为 HTML；覆盖 LibreOffice 与 ISO 标准格式。
   - 讨论热点：社区对企业级开源文档格式的明确刚需。
   - 状态：Open

5. **frontend-design：提升技能清晰度与可行动性** ([#210](https://github.com/anthropics/skills/pull/210))
   - 功能：重写前端设计技能，确保每条指令都能在单次对话中真正执行，并增强内部一致性。
   - 讨论热点：如何将“文档化”设计指南转化为“可直接操作”的 agent 指令。
   - 状态：Open

6. **skill-quality-analyzer / skill-security-analyzer 元技能** ([#83](https://github.com/anthropics/skills/pull/83))
   - 功能：新增两个分析类技能，分别从结构/文档/示例等五维评估质量，并检查安全风险。
   - 讨论热点：为技能生态引入工程质量与安全审计，呼应社区对可信技能的需求。
   - 状态：Open

7. **self-audit：机械验证 + 四维推理质量门** ([#1367](https://github.com/anthropics/skills/pull/1367))
   - 功能：交付前先机械验证所有输出文件真实存在，再按损害优先级进行四维推理审计；跨项目、跨技术栈通用。
   - 讨论热点：面向 AI 输出交付可靠性，是当前 agent 结果质量诉求的集中体现。
   - 状态：Open

8. **ServiceNow 平台技能** ([#568](https://github.com/anthropics/skills/pull/568))
   - 功能：覆盖 ITSM、ITOM、ITAM/SAM、FSM、SPM、CSDM、IntegrationHub 等广阔平台能力。
   - 讨论热点：从“窄脚本助手”扩展到“平台级助理”，企业级技能需求信号强烈。
   - 状态：Open

## 2. 社区需求趋势

从 Issues 中提炼的社区最期待方向：

- **安全与信任边界**：社区技能在 `anthropic/` 命名空间下分发，可能被误认为官方技能，导致提权或敏感数据泄漏，需要明确的来源与信任机制。（[#492](https://github.com/anthropics/skills/issues/492)、[#1175](https://github.com/anthropics/skills/issues/1175)）
- **组织级共享与协作**：目前共享技能需手动下载、IM 传输、再手动上传，效率极低；社区呼吁 org 级共享库或直接分享链接。（[#228](https://github.com/anthropics/skills/issues/228)）
- **技能创作工具链可靠性**：大量 issue 集中在 `skill-creator` 的 eval 循环 0% recall、Windows 兼容性、YAML 解析错误等，说明工具链质量是当前最大卡点。（[#556](https://github.com/anthropics/skills/issues/556)、[#202](https://github.com/anthropics/skills/issues/202)、[#1169](https://github.com/anthropics/skills/issues/1169)）
- **上下文窗口效率**：技能内容过度注入（如 `claude-api` 一次注入约 156k tokens）会直接挤爆上下文，需要更精细的按需加载策略。（[#1487](https://github.com/anthropics/skills/issues/1487)）
- **记忆与工作流管理**：长期 agent 的持久记忆编码、规划文件生命周期清理等新领域被反复提出，期望技能覆盖这些元工作流。（[#1329](https://github.com/anthropics/skills/issues/1329)、[#1479](https://github.com/anthropics/skills/pull/1479)）

## 3. 高潜力待合并 Skills

以下 PR 目前仍为 Open，但讨论活跃、更新频繁，可能近期落地：

- **#1298 skill-creator eval 修复**：阻塞性 bug，合并后将直接改善所有技能开发者的迭代效率。（[链接](https://github.com/anthropics/skills/pull/1298)）
- **#514 document-typography**：痛点普遍、方案具体，社区接受度高。（[链接](https://github.com/anthropics/skills/pull/514)）
- **#568 ServiceNow 平台技能**：企业级覆盖面广，更新至 2026-08-12，维护活跃。（[链接](https://github.com/anthropics/skills/pull/568)）
- **#1367 self-audit 技能**：与 #1385 质量门提案呼应，体系化思路获得关注。（[链接](https://github.com/anthropics/skills/pull/1367)）
- **#1479 plan-file-hygiene 技能**：解决规划文件累积问题，已有社区协作基础，目标明确。（[链接](https://github.com/anthropics/skills/pull/1479)）

## 4. Skills 生态洞察

一句话总结：当前社区最集中的诉求是提升技能生态的工程化基础——包括创作工具的可靠性、安全分发与信任边界、内容加载效率，同时企业级领域技能仍是新技能供给最活跃的来源。

---

# Claude Code 社区动态日报（2026-08-14）

## 1. 今日速览

过去 24 小时发布两个新版本：v2.1.232 默认开启 Subagent forking 并支持 `@` 提及会话，v2.1.231 修复 MCP OAuth 登录问题。社区方面，Claude Max 配额异常消耗（#38335，832 评论）持续发酵；桌面端 1.28929.0 更新后跨会话消息出现集中性回归，成为新的热点问题群。

## 2. 版本发布

### v2.1.232
- **Subagent forking 默认开启**：`subagent_type: "fork"` 子代理继承完整对话上下文和 prompt 缓存
- 交互式会话中，非 teammate 代理默认在后台运行
- 在提示符中输入 `@` 可按名称提及另一个 Claude 会话

### v2.1.231
- 修复 MCP OAuth 登录时 redirect URI 不匹配的问题（影响 Slack 等使用预注册 OAuth 客户端的 MCP 服务器）

## 3. 社区热点 Issues

### ① #38335：Claude Max 配额异常消耗（832 评论 / 474 👍）
[GitHub Issue #38335](https://github.com/anthropics/claude-code/issues/38335)

自 2026-03-23 起，CLI 使用 Claude Max 计划的会话限额消耗异常加快。这是当前社区关注度最高的问题，评论区已累计 832 条，大量用户遭遇同样的配额快速耗尽问题，官方尚未给出明确修复方案。

### ② #18435：Claude Desktop 多账户管理（165 评论 / 723 👍）
[GitHub Issue #18435](https://github.com/anthropics/claude-code/issues/18435)

社区最高赞功能请求：在 Claude Desktop 中管理多个 Claude 账户并支持配置文件的快速切换。723 个 👍 反映了多账号用户（工作 / 个人、多团队协作）的强烈需求。

### ③ #28791：CLI 与桌面端对话历史同步（34 评论 / 123 👍）
[GitHub Issue #28791](https://github.com/anthropics/claude-code/issues/28791)

请求在 CLI 和 Claude Code 桌面应用之间同步对话历史，实现多端无缝续接。123 个 👍 显示用户对跨端工作流衔接的期待。

### ④ #80988：`heron_brook` 提示词注入静默覆盖用户委托策略（23 评论 / 49 👍）
[GitHub Issue #80988](https://github.com/anthropics/claude-code/issues/80988)

v2.1.219 新增的系统提示词段 `heron_brook` 仅在 Opus 5 模型上注入 "Do not call the AgentTool" 指令，静默覆盖用户配置的代理委托策略，且无关闭选项。被社区视为对用户控制权的越权行为，讨论热度较高。

### ⑤ #81698：Windows 桌面端 GPU 进程崩溃（28 评论）
[GitHub Issue #81698](https://github.com/anthropics/claude-code/issues/81698)

Claude 桌面应用在 Windows 上 GPU 进程崩溃（exit code 101457950），导致整个应用和所有运行中会话被杀。影响 RTX 5080 等 NVIDIA 笔记本 GPU 用户。

### ⑥ #86012：跨会话消息导致接收方完全无响应（14 评论）
[GitHub Issue #86012](https://github.com/anthropics/claude-code/issues/86012)

桌面端 1.28929.0 中，跨会话消息会导致接收方会话卡在 `hadFirstResponse=false` 状态，直到桌面端 idle-timeout 强制终止（15-20 分钟）。这是 2026-08-12 桌面端更新后引入的新回归。

### ⑦ #63930：Prompt 缓存大量浪费（10 评论 / 6 👍）
[GitHub Issue #63930](https://github.com/anthropics/claude-code/issues/63930)

自 v2.1.154 起，并行工具调用后 prompt 缓存被反复重建，实测 74% 的 cache_creation tokens 被浪费。对 Opus 4.8 用户造成显著成本影响。

### ⑧ #29717：1Password SSH 代理集成损坏（12 评论 / 23 👍）
[GitHub Issue #29717](https://github.com/anthropics/claude-code/issues/29717)

`CC_ENV_EXTRACT_LIST` 白名单缺少 `SSH_AUTH_SOCK`，导致 SSH 会话无法使用 1Password SSH agent。影响所有依赖非默认 SSH agent 的 macOS 用户。

### ⑨ #82536：`--continue` 无法恢复 `-p` 模式会话（13 评论）
[GitHub Issue #82536](https://github.com/anthropics/claude-code/issues/82536)

非交互模式（`-p`）创建的会话无法通过交互式 `--continue` 恢复，破坏了脚本自动化与手动接续相结合的工作流。

### ⑩ #86275：Windows 跨会话消息静默失败（7 评论 / 3 👍）
[GitHub Issue #86275](https://github.com/anthropics/claude-code/issues/86275)

桌面端运行时从 2.1.222 自动更新到 2.1.227 后，本地会话间发送消息显示成功但实际不送达。与 #86012、#86385、#86386 共同指向同一组跨会话消息回归。

## 4. 重要 PR 进展

过去 24 小时内 PR 活动较少（仅 2 条），社区注意力主要集中在 Issue 讨论上：

### ① #86537：修复 CHANGELOG.md 重复单词（OPEN）
[GitHub PR #86537](https://github.com/anthropics/claude-code/pull/86537)

文档修复：修正 `CLAUDE_BASH_NO_LOGIN` 条目中重复的 "to to" 拼写错误。无功能变更。

### ② #60280：CI 供应链加固——SHA 固定剩余 actions（CLOSED）
[GitHub PR #60280](https://github.com/anthropics/claude-code/pull/60280)

将 6 个 workflow 中的 `actions/checkout@v4` 和 `actions/github-script` 固定到具体 SHA（checkout 固定至 v4.3.1），作为 #56784 的后续补充，提升 CI 供应链安全性。

## 5. 功能需求趋势

从当前 Issue 中提炼社区最关注的功能方向：

- **多账户管理**（#18435，723 👍）：支持在 Claude Desktop 中切换多个账号，为当前最高赞功能请求
- **跨端会话同步**（#28791，123 👍）：CLI 与桌面端对话历史互通，体现多端工作流需求
- **跨会话 / 多代理协作**（#86012、#86275、#86385、#86386 等）：大量 Issue 围绕会话间消息传递展开，说明该能力已进入用户核心工作流，但稳定性仍需打磨
- **权限系统精细化**（#80658、#81535）：用户期望 `permissions.allow` 对 MCP 工具真正生效，减少重复确认
- **成本可观测性**（#63930、#38335）：用户对配额消耗和缓存效率高度敏感，需要更透明的用量反馈机制

## 6. 开发者关注点

- **配额 / 成本敏感度高**：#38335（Max 配额异常消耗）和 #63930（74% 缓存浪费）表明用户在密切关注 token 消耗，任何配额异常都会引发强烈社区反应
- **桌面端 1.28929.0 引入跨会话消息回归**：#86012、#86275、#86385、#86386、#86298 等多个 Issue 集中报告跨会话消息在 2026-08-12 桌面端更新后出现静默失败、无响应、消息过期等问题，属于当日最集中的回归集群
- **Windows GPU 进程稳定性堪忧**：#81698、#81341、#82967、#83403 均为 GPU 相关崩溃，覆盖浏览器预览、Cloudflare Turnstile 渲染等场景，严重影响桌面端可用性
- **权限配置信任度下降**：用户明确选择"不再询问"后仍被重复提示（#80658、#81535），削弱了对权限系统的信任
- **提示词注入 / 策略覆盖引发争议**：#80988 中系统提示词段静默覆盖用户委托配置且无 opt-out，被社区视为控制权越界，提示 Anthropic 需要更谨慎地处理系统级提示策略

---

*数据来源：github.com/anthropics/claude-code，统计时间截至 2026-08-14。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-08-14**

---

## 1. 今日速览

Windows 平台稳定性仍是社区最集中的痛点：扩展资源加载失败、沙箱权限错误、IDE Context 失真等问题持续发酵，仅 #37458 一条就积聚了 53 条评论。Rust 侧连续发布 0.148.0-alpha.11/12/13 三个 alpha 版本，配合夜间一批高密度修复（线程队列 API、MCP OAuth 端口、Windows 沙箱清单嵌入等），显示官方正加速收敛基础设施问题。

---

## 2. 版本发布

过去 24 小时发布 3 个 Rust CLI alpha 版本，目前未有详细变更日志：

- [rust-v0.148.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.13) · 0.148.0-alpha.13
- [rust-v0.148.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.12) · 0.148.0-alpha.12
- [rust-v0.148.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.11) · 0.148.0-alpha.11

> 提示：alpha 版本迭代频繁，建议关注 PR 合入内容以获得变更线索。

---

## 3. 社区热点 Issues

以下 10 条 Issue 按重要性排序（兼顾评论数、👍 数、影响面与时效性）：

### ① #37458 — Codex 扩展无法启动（已关闭）
**标签：** bug / windows-os / extension
**评论 53 · 👍 11 · 创建 08-07 · 更新 08-13**

> Codex 面板在 VSCode 1.132.0 上打开后直接报 **"The extension couldn't load its resources"**，完全无法使用。Windows x64 + 扩展 26.803.41515。

**为什么重要：** 53 条评论是当前 Issue 池中最高的，说明这是一次影响面较大的回归。虽已关闭，但社区与官方交互密度高，值得回顾修复方案。

[→ 查看 Issue](https://github.com/openai/codex/issues/37458)

---

### ② #26984 — MCP stdio 服务器泄漏 fd 导致 EMFILE（开放）
**标签：** bug / mcp / CLI
**评论 21 · 👍 4 · 创建 06-08 · 更新 08-14**

> 长期运行后 MCP stdio 子进程管道 fd 持续泄漏，孤儿进程累积，最终触发 `os error 24`（EMFILE）。CLI 0.137.0 与 0.12x 均受影响。

**为什么重要：** 稳定性隐患，长时间使用 Codex CLI + MCP 的重度用户会逐渐被"Too many open files"锁死；官方已保持两个月的开放状态，是社区关注的老大难。

[→ 查看 Issue](https://github.com/openai/codex/issues/26984)

---

### ③ #31553 — VS Code 扩展更新后不再自动附带 IDE Context（已关闭）
**标签：** bug / windows-os / extension
**评论 17 · 👍 12 · 创建 07-08 · 更新 08-13**

> 扩展 26.623.141536 在 VS Code Remote/container（WSL2/Docker）场景下，IDE 上下文停止自动带入。需要手动打开 IDE Context 开关。

**为什么重要：** 影响核心工作流——自动附带选中代码/文件上下文是 Codex 扩展的招牌功能；回归导致开发者在容器开发场景下效率明显下降。👍 高说明社区共鸣强。

[→ 查看 Issue](https://github.com/openai/codex/issues/31553)

---

### ④ #18906 — TUI 支持 Markdown 数学公式渲染（开放）
**标签：** enhancement / TUI
**评论 15 · 👍 22 · 创建 04-21 · 更新 08-13**

> 请求 Codex 终端 UI 支持渲染内联 LaTeX 与块级公式（如 `$...$` 和 `$$...$$`），目前在 TUI 中公式以原始文本方式展示。

**为什么重要：** 这是当前问题池中 👍 最高的功能请求（22），说明教育、科研背景用户在 Codex TUI 中的占比不低；LaTeX 渲染对"代码+数学"混合场景是刚需。官方至今未回应实现排期。

[→ 查看 Issue](https://github.com/openai/codex/issues/18906)

---

### ⑤ #34700 — spawn_agent 拒绝 gpt-5.6-luna + multi_agent_v2（开放）
**标签：** bug / windows-os / app / subagent
**评论 15 · 👍 36 · 创建 07-22 · 更新 08-13**

> Codex App 26.715.9868 / CLI 0.145.0 下，启用 multi_agent_v2 后 spawn_agent 无法加载 `gpt-5.6-luna` 模型，直接报错拒绝。Windows 11 环境复现。

**为什么重要：** 👍 36 为全池最高，反映社区对**新模型（gpt-5.6-luna）与子代理（multi_agent_v2）组合使用**的高期待；该组合被阻断会影响高级 agentic 工作流。

[→ 查看 Issue](https://github.com/openai/codex/issues/34700)

---

### ⑥ #35871 — Windows 沙箱拒绝 MSIX 版 pwsh（开放）
**标签：** bug / windows-os / sandbox / CLI
**评论 13 · 👍 3 · 创建 07-29 · 更新 08-13**

> 当沙箱解析到 Microsoft Store 打包的 PowerShell 7（MSIX 构建）时，`CreateProcessAsUserW` 返回错误 5（Access denied），Windows 限制受限 token 启动打包应用。

**为什么重要：** Windows 沙箱的兼容性短板——Store 版 pwsh 是许多用户的默认 shell，此问题会直接阻断 sandbox 模式的使用，与 #30829、#28457 同属 Windows 沙箱"全家桶"问题。

[→ 查看 Issue](https://github.com/openai/codex/issues/35871)

---

### ⑦ #35210 — browser.tabs.finalize() 静默终止整个 App（开放）
**标签：** bug / windows-os / app / browser
**评论 12 · 👍 0 · 创建 07-24 · 更新 08-13**

> 在 Codex Desktop 26.721.3996 中调用 `browser.tabs.finalize()` 后，整个应用直接退出，无任何错误提示。发生在浏览器工具链的正常收尾流程。

**为什么重要：** 这是 Browser Use/Computer Use 链路中的**致命级 bug**：明明只是关闭标签页，却拖垮了主进程。虽然没有 👍 或评论热度，但严重级别极高。

[→ 查看 Issue](https://github.com/openai/codex/issues/35210)

---

### ⑧ #34920 — IDE Context 因 RPC 序列化错误失效（已关闭）
**标签：** bug / windows-os / extension / tool-calls
**评论 10 · 👍 5 · 创建 07-23 · 更新 08-13**

> 扩展 26.715.x 起 IDE Context 失效，报 RPC 序列化错误；26.707、26.715 多版本均受影响，VS Code 与 Devin 两个 IDE 同时复现。

**为什么重要：** 与 #31553 同源——**IDE Context 可靠性**在一个月内反复翻车，且跨两个大版本，说明相关重构存在回归缺口；社区中存在明确的 rollback 版本（26.5609 可用）。

[→ 查看 Issue](https://github.com/openai/codex/issues/34920)

---

### ⑨ #31198 — 子代理会话日志膨胀至 145GiB（开放）
**标签：** bug / context / app / subagent / session / performance
**评论 6 · 👍 0 · 创建 07-05 · 更新 08-13**

> 由于 `compacted.replacement_history` 被反复写入完整快照，单个长父线程下的大量子代理会生成 145GiB 的 JSONL 日志文件，磁盘被占满，会话几乎不可恢复。

**为什么重要：** 极端但真实的长会话场景——Context Compaction 机制在**子代理 + 长对话**组合下失控，磁盘成本与恢复难度是 Enterprise/Pro 用户不可接受的。

[→ 查看 Issue](https://github.com/openai/codex/issues/31198)

---

### ⑩ #38455 — ChatGPT Desktop 26.810 反复派发 Computer Use 工作者并 OOM 崩溃（开放）
**标签：** bug / app / computer-use / performance
**评论 3 · 👍 0 · 创建 08-13 · 更新 08-14**

> macOS 15.7.7 / Apple Silicon / 32GB 内存下，应用在启动后约 98 秒空闲时崩溃。SIGABRT 来自 node::OOMErrorHandler，崩溃时有 316 个线程，其中 187 个命名为 `computer-use`。

**为什么重要：** 全新 issue（8/13 创建），且**空闲状态即崩溃**——说明 Computer Use 后台初始化阶段就存在严重资源失控。187 个 worker 线程在空闲时出现，显然存在无限派发逻辑。

[→ 查看 Issue](https://github.com/openai/codex/issues/38455)

---

## 4. 重要 PR 进展

夜间合并了大量 `copyberry[bot]` 驱动的基础设施 PR，以下 10 条值得关注：

### ① #38467 — 从技能 frontmatter 解析模型注解（已合并）
**标签：** skills / model

技能元数据新增可选 `model` 字段，支持 `model: luna`，同时忽略不支持的模型值。

**意义：** 技能与模型解耦，为"按模型加载技能"铺路。

[→ 查看 PR](https://github.com/openai/codex/pull/38467)

---

### ② #38456 — App Server 新增实验性线程队列 API（已合并）
**标签：** app-server / threads / experimental

新增 `thread/queue/add`、`list`、`update`、`delete`、`reorder`、`start` 六种请求，支持 FIFO 顺序自动派发排队中的用户提交。

**意义：** 这是**持久化队列调度**的基础能力，未来多任务批量处理、自动化流水线可以直接基于此构建。

[→ 查看 PR](https://github.com/openai/codex/pull/38456)

---

### ③ #38450 — Bazel 构建嵌入 Windows 沙箱设置清单（已合并）
**标签：** windows / sandbox / bazel / build

`rules_rust` 会丢弃 build script 的按二进制 linker 指令，导致 Bazel 构建缺失 `asInvoker` manifest。

**意义：** 直接修复 Windows 沙箱 setup helper 在 Bazel 构建下的启动兼容性，与近日多条 Windows 沙箱问题形成呼应。

[→ 查看 PR](https://github.com/openai/codex/pull/38450)

---

### ④ #38448 — 支持按服务器配置 MCP OAuth 回调端口（已合并）
**标签：** mcp / oauth / config

MCP 服务器配置新增 `oauth.callback_port`，同时支持来自插件声明与技能依赖元数据的 `oauth.callbackPort`。

**意义：** MCP 服务器可以绕过系统代理/防火墙限制，使用独立回调端口完成 OAuth 流，改善企业网络的连接成功率。

[→ 查看 PR](https://github.com/openai/codex/pull/38448)

---

### ⑤ #38445 — 上下文压缩后保留客户端开发者消息（已合并）
**标签：** context / compaction / history

开启 `retain_client_developer_messages` 时，压缩后的历史不再丢弃客户端注入的 developer 指令。

**意义：** 长会话中用户的持久指令（如编码规范、项目约束）不再被压缩打断，是**长会话稳定性**修复的关键一环。

[→ 查看 PR](https://github.com/openai/codex/pull/38445)

---

### ⑥ #38441 — Guardian V2 获得完整工具操作上下文（已合并）
**标签：** guardian / safety / tool-calls / review

工具生命周期钩子现在能拿到原始 `ToolPayload`（包含完整请求参数与对话上下文），而非仅工具名 + call ID。

**意义：** Guardian 审查从"看工具名字"升级到"看工具做了什么事"，可大幅降低误放/误拦，对安全策略敏感的企业用户有利。

[→ 查看 PR](https://github.com/openai/codex/pull/38441)

---

### ⑦ #38449 — 暴露模型升级退役时间（已合并）
**标签：** models / upgrade

解析模型升级元数据中的可选 `retirement_at`，并通过 `model/list` 以 `upgradeInfo.retirementAt` 空值安全的 Unix 时间戳形式暴露。

**意义：** 用户可以提前感知模型退役时间，规划迁移窗口，避免生产环境模型被静默下线。

[→ 查看 PR](https://github.com/openai/codex/pull/38449)

---

### ⑧ #38447 — 本地守护进程添加任务运行中退出选项（已合并）
**标签：** TUI / daemon / UX / Ctrl-C

在本地 daemon 会话中，当任务正在运行时按 Ctrl-C 会弹出菜单，提供三个选择：取消任务留在 Codex、退出但保持任务后台运行、或停止任务后退出。

**意义：** 解决了"退出即丢任务"的痛点，兼顾交互式与无人值守场景。

[→ 查看 PR](https://github.com/openai/codex/pull/38447)

---

### ⑨ #38463 — 跨 revert 重载保留线程订阅（已合并）
**标签：** threads / revert / subscriptions

处理 `thread/revert` 时，即使发起 revert 的连接在重载期间断开，替换后的监听器仍能继续服务已有订阅。

**意义：** 修复分页/长历史线程回滚后前端状态丢失的问题，是线程持久化的地基性修复。

[→ 查看 PR](https://github.com/openai/codex/pull/38463)

---

### ⑩ #31901 — Code Mode 工具模式中解析本地 MCP `$ref`（开放中）
**标签：** mcp / code-mode / typescript / schema

支持在 Code Mode 渲染 TypeScript 工具声明时解析 schema 内的本地 JSON Pointer `$ref`（兼容 `#/$defs/` 与 `#/definitions/`），保留 `$ref` 兄弟节点的描述信息。

**意义：** 解决 MCP 工具 schema 引用 `$ref` 时在 Code Mode 下类型不完整/无法解析的问题，提升带复杂 schema 的 MCP 服务器兼容性。

[→ 查看 PR](https://github.com/openai/codex/pull/31901)

---

## 5. 功能需求趋势

从今日 Issue/PR 中提炼的五大社区关注方向：

| 趋势方向 | 证据 | 热度判断 |
|---|---|---|
| **Windows 稳定性与沙箱兼容性** | #37458（53 评论）、#35871、#30829、#28457、#19599、#33114、#38450 PR | 🔥🔥🔥🔥🔥 最高优先级，问题密度全池第一 |
| **IDE 上下文可靠性** | #31553（已关 17 评论）、#34920、#34696、#35333、#35419 | 🔥🔥🔥🔥 一个月内多个版本回归，社区 rollback 呼声高 |
| **MCP 生态完善** | #26984（fd 泄漏）、#38448（OAuth 端口）、#31901（$ref 解析）、#33551（Responses 协议兼容） | 🔥🔥🔥 从配置到协议、从生命周期到嵌套兼容全面补齐 |
| **子代理生命周期管理** | #34700（模型+multi_agent）、#22779（线程上限）、#38408（卡死）、#31198（日志膨胀）| 🔥🔥🔥 子代理越多，问题越立体：配额、回收、持久化 |
| **长会话/上下文压缩健壮性** | #38445（保留 developer 消息）、#38446（当前时间提醒）、#38440/#38463（线程回滚+订阅）、#38466 | 🔥🔥🔥 官方明显在系统化重构压缩与线程历史机制 |

---

## 6. 开发者关注点

近期反馈中的高频痛点总结：

1. **Windows 用户被"三重暴击"**：沙箱 cannot-start（#30829/#28457）、MSIX pwsh 权限拒绝（#35871）、扩展资源加载失败（#37458/#37517）。Windows 已成为 Codex 生态的"二等公民"，多个核心功能在 Windows 上无法开箱即用。

2. **IDE Context 频繁回归**：7 月到 8 月间，扩展在 26.707/26.715/26.721 三个版本中出现 IDE Context 失效问题，且每次原因不同（RPC 序列化、workspaceRoot 缺失、remote 场景 context 自动禁用）。社区已验证 26.5609 为稳定版本，部分用户选择不回退版本、手动启用 context。

3. **长会话存在"爆炸"风险**：#31198 的 145GiB 日志既非孤例也非极端案例，#38466 显示 compaction 后线程 payload 大到客户端无法解析。反映压缩机制（compaction）的背后是**内存-磁盘-网络三端放大**，生产环境长时间会话前需手动清理。

4. **MCP 的"后台成本"被低估**：stdio 泄漏 fd 与孤儿进程（#26984）意味着每开一个 MCP server 都在悄悄消耗系统资源，时间越长越接近 EMFILE 崩溃。资源受限的容器环境中最容易触雷。

5. **新模型上线缺乏平滑路径**：gpt-5.6-luna + multi_agent_v2 的组合直接报错（#34700），模型升级信息不透明（直到 #38449 PR 才开始提供 retirement_at）。开发者希望模型变更（上线/下线/退役）都通过可预知的 API 暴露。

---

> **编辑摘要**：本次日报数据覆盖 2026-08-13 至 08-14 的 50 条 Issue 与 50 条 PR。Windows 稳定性与 IDE Context 为社区情绪最集中的两个战场；官方 PR 侧正密集修复 MCP、上下文压缩与线程管理，建议关注 0.148.0-alpha 系列向 stable 推进的节奏。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-14

## 今日速览

昨日发布 v0.56.0-nightly 版本，重点强化 eval 评估管线（tool call formatter、失败摘要集成）；安全修复占据 PR 头条，包括 eval-pr 工作流供应链 RCE 与 simple-git CVE-2026-28292 升级；Agent 稳定性问题（挂起、误报成功、权限失控）持续发酵，成为社区最集中的反馈方向。

## 版本发布

**v0.56.0-nightly.20260813.g1ac337739** — eval 评估能力增强：

- `Feat/eval validate`（PR #28344）：新增 eval 校验能力。
- `feat(evals): add tool call formatter and integrate failure summaries`（PR #28305）：为工具调用增加格式化器，并将失败摘要集成进评估流程，便于定位 agent 失败根因。

## 社区热点 Issues

过去 24 小时共 50 条 Issue 有更新，以下为最值得关注的 10 条：

1. **Subagent 在 MAX_TURNS 后误报为 GOAL 成功（#22323）**
   [链接](https://github.com/google-gemini/gemini-cli/issues/22323)
   comment: 12 | 👍: 2 | p1/bug
   `codebase_investigator` 实际因达到最大轮数而中断，却报告 `status: "success"` 和 `Termination Reason: "GOAL"`。这是 Agent 状态正确性的严重缺陷——自动化流程会被虚假成功信号误导。今日更新评论最多，说明开发者对此高度关注。

2. **Generalist Agent 无限期挂起（#21409）**
   [链接](https://github.com/google-gemini/gemini-cli/issues/21409)
   comment: 8 | 👍: 8 | p1/bug
   委派给 generalist agent 后任务永远不返回（用户曾等待一小时）。8 个 👍 是本期最高，属于高频阻断性问题。社区给出的 workaround 是显式禁止模型使用子代理。

3. **Shell 命令执行完成后卡在 "Waiting input"（#25166）**
   [链接](https://github.com/google-gemini/gemini-cli/issues/25166)
   comment: 4 | 👍: 3 | p1/bug
   极简单的 CLI 命令执行完毕后，终端仍显示命令活跃并等待用户输入。与 #21409 同属“卡死”类问题，但发生在 shell 执行层，影响更底层、更普遍。

4. **组件级评估（Component Level Evaluations）（#24353）**
   [链接](https://github.com/google-gemini/gemini-cli/issues/24353)
   comment: 7 | p1/epic
   跟踪 76 个行为评估测试在 6 个 Gemini 模型上的运行情况，目标是建立组件级评估体系。作为 p1 EPIC，它代表了项目在可观测性和质量保障上的重点投入方向。

5. **Browser Subagent 在 Wayland 下失败（#21983）**
   [链接](https://github.com/google-gemini/gemini-cli/issues/21983)
   comment: 4 | 👍: 1 | p1/bug
   Wayland 会话中 browser subagent 直接失败，Linux 桌面用户无法使用浏览器自动化能力。属于平台兼容性 bug，等待回归测试确认修复。

6. **Auto Memory 对低信号会话无限重试（#26522）**
   [链接](https://github.com/google-gemini/gemini-cli/issues/26522)
   comment: 5 | p2/bug
   提取 agent 判断某会话低信号而跳过时，该会话不会被标记为已处理，导致后续反复出现在候选列表中，形成无限重试循环。浪费资源且存在重复处理风险。

7. **Auto Memory 需确定性脱敏并减少日志输出（#26525）**
   [链接](https://github.com/google-gemini/gemini-cli/issues/26525)
   comment: 4 | p2/security
   本地转录文本在模型上下文脱敏之前就已发送给提取 agent；同时服务可能记录已有 skills 等信息至日志。对隐私敏感用户是明显隐患。

8. **自 v0.33.0 起子代理未经许可自动运行（#22093）**
   [链接](https://github.com/google-gemini/gemini-cli/issues/22093)
   comment: 3 | p2/bug
   用户在配置中显式禁用 agents，但更新后 generalist 等子代理仍被自动调用。这是配置边界被突破的权限类问题，社区担心隐性行为改变。

9. **工具数量超过 128 时触发 400 错误（#24246）**
   [链接](https://github.com/google-gemini/gemini-cli/issues/24246)
   comment: 3 | p2/bug
   启用大量工具（MCP、内置、自定义）后请求直接失败。开发者期望有更智能的工具裁剪机制而不是硬性上限。

10. **Agent 应阻止破坏性行为（#22672）**
    [链接](https://github.com/google-gemini/gemini-cli/issues/22672)
    comment: 3 | 👍: 1 | p2/feature
    在复杂 git 操作或资源维护中，模型可能使用 `git reset`、`--force` 等危险命令，而实际上存在更安全的替代方案。社区呼吁引入安全护栏与危险操作预警。

## 重要 PR 进展

过去 24 小时共 25 个 PR 有更新，以下为 10 个重要 PR：

1. **修复 eval-pr 工作流供应链 RCE（#28740）**
   [链接](https://github.com/google-gemini/gemini-cli/pull/28740)
   size/l | security
   修复 `pull_request_target` 上下文中未信任 fork 代码可被特权执行的关键漏洞（对应 Issue #28336）。将 eval 工作流拆分为安全的 PR 构建步骤 + 受信任的 workflow_run 步骤。

2. **升级 simple-git 至 3.32.3 修复 CVE-2026-28292（#28778）**
   [链接](https://github.com/google-gemini/gemini-cli/pull/28778)
   size/s | security
   修复 simple-git 依赖中的 CRITICAL 级别漏洞（CVE-2026-28292，由 trivy 扫描发现），属常规但必须的安全升级。

3. **上下文感知静默重试 + 容量错误 TTL（#28790）**
   [链接](https://github.com/google-gemini/gemini-cli/pull/28790)
   p1/core | size/l | 已合并
   关闭 #28761 容量错误重试回归。非交互 CLI 运行自动退避重试，交互运行最多 2 次静默重试后给出友好提示。

4. **添加 Claude Sonnet 4.5 与 Opus 4.8 模型定义（#28803）**
   [链接](https://github.com/google-gemini/gemini-cli/pull/28803)
   size/xl
   新增长上下文模型支持，包括模型常量、别名解析、策略链 fallback，以及默认模型配置中的展示名称和描述。

5. **取消或中止时回滚整个多轮请求（#28801）**
   [链接](https://github.com/google-gemini/gemini-cli/pull/28801)
   size/m | 已合并
   修复中止含工具调用的多轮请求后，会话历史停留在“待处理工具响应”的不完整状态；现在取消时会回滚到一致状态，避免后续请求错乱。

6. **不将损坏的 MCP 启用配置视为空配置（#28787）**
   [链接](https://github.com/google-gemini/gemini-cli/pull/28787)
   p1/core | size/s, size/m
   此前 JSON 解析失败会被静默降级为 `{}`，导致所有 MCP server 被默认启用——这是配置损坏带来的安全风险。现在损坏配置会被正确暴露。

7. **修复 vscode-ide-companion 的 stop() 挂起与 keep-alive 阈值问题（#28789）**
   [链接](https://github.com/google-gemini/gemini-cli/pull/28789)
   core | size/m, size/l, size/xl
   修复 `IdeServer.stop()` 在存在活跃 MCP 流会话时无限挂起的问题，并修复 keep-alive 心跳间歇性失败导致的资源泄漏。

8. **A2A 服务器强制认证并阻止 checkpoint 路径遍历（#28699）**
   [链接](https://github.com/google-gemini/gemini-cli/pull/28699)
   security | size/l
   修复 A2A server 自定义 REST 路由未经过 `UserBuilder` 认证的问题，以及 checkpoint 路径遍历漏洞。任何未认证请求都可访问 `/tasks` 等端点。

9. **防止布尔思维部分泄漏为 `[Thought: true]` 文本（#28624）**
   [链接](https://github.com/google-gemini/gemini-cli/pull/28624)
   core | size/s, size/m
   修复内部思维部分 `thought: true` 被当作普通文本输出到对话中的问题（对应 Issue #23525），避免模型内部推理状态外泄。

10. **WSL2 剪贴板图片粘贴支持（#27588）**
    [链接](https://github.com/google-gemini/gemini-cli/pull/27588)
    cli | size/l | help wanted
    在 WSL 环境中通过 PowerShell interop 读取 Windows 剪贴板并保存 PNG，解决 WSL2 下无法粘贴图片的问题（对应 Issue #22274）。

## 功能需求趋势

- **Agent 可靠性治理**：子代理状态误报（#22323）、无限挂起（#21409）、未经许可运行（#22093）表明社区对 Agent 的可控性和状态真实性要求越来越高。
- **安全与供应链加固**：RCE 修复（#28740）、CVE 升级（#28778）、A2A 认证与路径遍历修复（#28699）构成今日安全主线；Auto Memory 脱敏（#26525）也是隐私视角的关键需求。
- **Auto Memory 系统成熟化**：低信号会话重试、补丁隔离、日志削减等问题集中出现，说明该功能进入精细化打磨阶段。
- **AST 感知代码理解**：#22745 与 #22746 持续跟踪，目标是通过 AST 感知的文件读取、搜索和代码库映射来降低 token 消耗、提升导航精度。
- **评估基础设施持续扩展**：#28804 与 #28344/#28305 共同表明项目正系统化地为工具调用、技能激活、MCP 资源发现等编写行为评估。
- **浏览器代理韧性**：Wayland 兼容性（#21983）、锁恢复与会话接管（#22232）、settings.json 覆盖（#22267）均指向同一目标——让 browser agent 在更多桌面环境中稳定工作。
- **模型生态开放**：#28803 添加 Claude 4.x 系列支持，说明 Gemini CLI 正成为多模型的前端入口。

## 开发者关注点

- **“卡死”类问题高频出现**：generalist agent 挂起（#21409）和 shell 命令完成后仍等待输入（#25166）是当前最影响日常使用的痛点，开发者需要可靠的重试与超时机制。
- **安全边界不容妥协**：对 fork PR 在特权上下文中执行、A2A 未认证端点、损坏配置导致 MCP 默认启用等问题，社区反馈强烈，期望默认安全、显式授权。
- **子代理行为的可预测性**：开发者希望子代理严格遵循配置（禁用即禁用）、不会擅自创建临时脚本（#23571）、不做破坏性 git/DB 操作（#22672）。
- **配置与文件的兼容性细节**：symlink 形式的 agent 定义不被识别（#20079）、损坏的 MCP 配置被静默忽略（#28787）等“小坑”频繁消耗排障时间。
- **平台差异仍是障碍**：Windows 下 ripgrep EFTYPE 错误、WSL2 剪贴板、Wayland 浏览器子代理等问题持续被报告，跨平台一致性有待加强。
- **工具数量膨胀的治理**：超过 128/400 个工具即触发 400 错误（#24246），社区需要按场景动态裁剪工具列表的机制。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-08-14

## 今日速览

今日发布 v1.0.80-0，新增 MCP 服务器重新启用能力及共享会话提示改进。社区焦点集中在推理努力级别（Reasoning Effort）与模型不兼容导致的连环报错、MCP OAuth 流程的稳定性回归，以及会话数据在中断/恢复场景下的可靠性问题。

## 版本发布

**v1.0.80-0**
- 新增 `--enable-mcp-server` 标志，可在当前运行中重新启用设置里被禁用的 MCP 服务器。
- 改进共享会话的显示：`--ahp` 模式下，当其他客户端加入时，会话行会以 "2 clients"（或更多）标注；Sessions 标签页也有相应提示。

## 社区热点 Issues

1. **#2904 Custom Agent YAML Frontmatter 应支持推理努力级别**  
   https://github.com/github/copilot-cli/issues/2904  
   社区长期诉求（20 👍 / 6 评论）：目前 `.agent.md` 只能通过 `model` 固定模型，无法按 agent 单独配置推理努力级别，全局 `--effort` 粒度太粗。直接关系自定义智能体的灵活度。

2. **#4345 claude-haiku-4.5 不支持 'medium' 推理努力级别**  
   https://github.com/github/copilot-cli/issues/4345  
   特定 feature flag 组合下，子代理执行会循环报错，导致工具链中断。已有 5 条评论，且 #4473 为同一问题的新报告，说明影响面仍在扩大。

3. **#2133 自定义 agent 的 `model` 字段拒绝数组语法，与 VS Code Copilot Chat 不兼容**  
   https://github.com/github/copilot-cli/issues/2133  
   7 👍 / 4 评论。VS Code 端允许 `model: [a, b]` 回退数组，CLI 端直接解析失败，自定义 agent 跨工具迁移受阻。

4. **#3954 `explore` 工具硬编码模型为 `gpt-5.4-mini`，忽略自定义/DeepSeek API 配置**  
   https://github.com/github/copilot-cli/issues/3954  
   用户配置了 DeepSeek 端点，但 `explore` 仍强行传递 `gpt-5.4-mini`，导致 API 调用失败。模型自定义能力是重度用户的核心诉求。

5. **#4482 `allowed_directories` 配置不生效，无法抑制 shell 命令的目录访问提示**  
   https://github.com/github/copilot-cli/issues/4482  
   triage 新问题：`~/.copilot/permissions-config.json` 中的白名单目录在启动日志中显示已加载，但执行 shell 命令时依旧弹出 "path outside your allowed directory list"。权限控制的可靠性和实现一致性存疑。

6. **#4480 Atlassian MCP OAuth 在 1.0.79 出现回归，1.0.71 仍正常**  
   https://github.com/github/copilot-cli/issues/4480  
   OAuth 发现阶段报 "Incompatible authorization server (RFC 8414 §3.3)"，属于版本升级引入的回归，影响企业级 MCP server 接入。

7. **#4477 点击停止后整个会话与提示词丢失**  
   https://github.com/github/copilot-cli/issues/4477  
   用户多次遇到：停止执行后，包括原始 prompt 和编辑内容在内的会话被删除。会话数据可靠性是核心痛点，直接影响日常工作流。

8. **#4467 长时间运行的 agent 会话耗尽事件存储，导致会话状态不可靠**  
   https://github.com/github/copilot-cli/issues/4467  
   多子代理的长任务会让远程事件存储耗尽，随后会话被误标为 cancelled，但 CLI 进程仍在执行。高负载场景下的会话管理存在严重缺陷。

9. **#4462 内置 `code-review` 子代理模型覆盖被忽略**  
   https://github.com/github/copilot-cli/issues/4462  
   父会话与 agent 配置均指定 `gpt-5.6-luna`，实际启动却是 `gpt-5.6-sol`，且无日志提示。模型配置优先级逻辑需要排查。

10. **#4468 Windows 上 `--server --stdio` 的扩展宿主进程泄漏**  
    https://github.com/github/copilot-cli/issues/4468  
    每个会话产生 4 个子进程且会话结束后不释放，直到服务退出。Windows 桌面 App 长期运行会导致资源耗尽，属于平台级稳定性 bug。

## 重要 PR 进展

当前数据窗口中仅 1 条 PR 动态：

- **#4476 docs: 文档化自定义 agent 的 effort frontmatter 提案（Option A）**  
  https://github.com/github/copilot-cli/pull/4476  
  作者：romanstetsenko | 状态：CLOSED  
  为 #2904 编写文档：提议在 `.agent.md` 中新增独立的 `effort` 字段（与 `model` 平行）。已关闭说明只是文档讨论，暂未进入合并流程，但反映出社区对"自定义 agent 配置推理努力级别"的强烈需求。

## 功能需求趋势

- **推理努力级别的精细化控制**：不只全局 flag，还要能按 agent、按模型配置（#2904、#4345、#4473）。
- **模型选择的灵活性与可覆盖性**：支持自定义模型端点（#3954）、移除 `explore` 的硬编码（#3954）、修复子代理模型覆盖被忽略（#4462）、兼容 VS Code 的数组模型语法（#2133）。
- **MCP 生态的成熟度**：远程认证稳定性（OAuth 刷新、并发、回归）、初始化失败的重试机制、跨作用域服务名冲突处理（#4480、#4463、#4464、#4466、#4472、#4478）。
- **会话可靠性与可观测性**：停止/恢复不丢数据、长会话不耗尽存储、支持列出当前运行会话及状态（#4477、#4467、#4470、#4474）。
- **权限系统的可配置性与一致性**：`allowed_directories` 真正生效、`preToolUse` 拒绝原因不被吞掉、不重放旧的权限事件（#4482、#4237、#4469）。

## 开发者关注点

- **子代理执行错误成为高频痛点**：模型与推理努力级别不匹配（claude-haiku-4.5 + medium）导致大面积报错，已出现重复 Issue，开发者希望尽快修复或自动降级。
- **MCP OAuth 流程过于脆弱**：Atlassian server 的 RFC 8414 回归、Entra 静默刷新 scope 冲突、并发工具调用触发多次 token 刷新，每个都是易踩的坑。
- **会话数据是"不可承受之失"**：停止/超时/事件存储耗尽都会导致会话丢失或状态错乱，多个 Issue 指向同一核心诉求——不要静默删除用户数据。
- **模型配置出现"你配了你的，它用它的"**：无论是 `explore` 硬编码、`code-review` 覆盖被忽略，还是自定义数组语法被拒，都在削弱用户对模型控制权的信任。
- **Windows 平台噪音较多**：socket 10013、扩展宿主进程泄漏、server 模式下进程不释放——Windows 用户需要更稳定的体验。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

## Kimi Code CLI 社区动态日报 — 2026-08-14

### 1. 今日速览

过去 24 小时无新版本发布、无 PR 更新，但 3 个 Issue 有活跃进展。核心动态集中在两强一弱两条线上：热度极高的「记忆系统」长期功能请求（#1283）持续吸聚社区讨论，评论已达 38 条；同时，两个高影响稳定性 Bug 浮出水面——ACP 流式响应静默挂死（#2598）与单步 LLM 失控生成 88k 垃圾 token（#2597），分别指向协议层可靠性与生成侧安全护栏的缺失。

### 2. 版本发布

过去 24 小时内未检测到新的 Release。

### 3. 社区热点 Issues（共 3 条，全部呈现）

过去 24 小时内共 3 个 Issue 被更新，均为值得关注的重要议题。

#### #1283 [功能请求] 记忆系统：跨会话持久上下文
- 作者：CatKang | 创建：2026-02-27 | 更新：2026-08-13 | 评论：38
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/1283
- 核心诉求：在 Kimi Code CLI 中实现「记忆系统」，跨会话记住有效上下文、项目模式与用户偏好。具体包括 AI 自动管理的记忆（自动笔记）与用户手动定义指令（manual memory）两层设计。
- 重要性：评论数高达 38 条，是当前所有 Issue 中讨论密度最高的一条。虽创建于 2026 年 2 月，至今仍在持续被顶起，属于社区呼声最强、期待值最高的长期功能空缺。没有它，CLI 难以从"无状态对话工具"进化为"有连续工作记忆的开发代理"。

#### #2598 [Bug] ACP/print 流式响应静默挂死——无空闲超时、被顶替轮 partial 不落 wire
- 作者：ai-agent-workbench | 创建：2026-08-09 | 更新：2026-08-13 | 评论：1
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/2598
- 核心诉求：ACP 模式（`kimi acp`）下游对话偶发"内容已全部流式送达，但连接无 [DONE]/finish 终帧"的挂死。CLI 无流式空闲超时配置项（官方 config.toml 已确认），导致 `session/prompt` 无限等待；此时用户发送下一条消息，挂死轮被静默顶替，且已流式回复从未写入 wire.jsonl（无 `content.part`、`usage.record`）。
- 重要性：直接破坏 ACP 协议语义。客户端无法可靠判知"流是否真正结束"，且一旦被顶替，token 计量、审计、断点恢复数据全部丢失。这是协议实现层的高优正确性缺陷，0.31.1 只覆盖了 Esc 场景，说明修复不完整。

#### #2597 [Bug] 失控乱码生成——单步 LLM 输出 88k 垃圾 Token
- 作者：kdp123 | 创建：2026-08-08 | 更新：2026-08-13 | 评论：1
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/2597
- 核心诉求：普通交互会话中，单个 LLM 步骤运行 3214 秒（约 53 分钟），输出了 88,114 个 token 的乱码内容：随机多语言碎片、损坏的 Markdown、无意义无限重复。异常步骤编号为 e6f3748b。
- 重要性：长时间、超高 token 量的失控输出，直接带来灾难性 API 费用、资源浪费和任务卡死。该问题说明当前缺少输出长度上限、重复检测、异常中断等生成侧防护机制。对信任度和成本控制都是严峻考验。

### 4. 重要 PR 进展

过去 24 小时内未检测到任何 PR 新增或更新。

### 5. 功能需求趋势

基于当前活跃 Issue，社区诉求集中在三个方向：

| 方向 | 代表 Issue | 需求本质 |
|------|-----------|---------|
| **跨会话记忆** | #1283 | CLI 应具备持久化上下文：记住项目模式、用户偏好，形成 AI 管理 + 用户定义的混合记忆架构。 |
| **流式协议可靠性** | #2598 | 需要可配置空闲超时、终帧保障、断线恢复，以及顶替/取消语义的完整实现，确保 wire 层数据落地不丢失。 |
| **生成安全护栏** | #2597 | 要求内置输出 token 上限、重复内容检测、异常长时生成熔断机制，防止单次失控 LLM 调用烧穿额度。 |

### 6. 开发者关注点

- **可靠性是第一痛点**：流式响应无终帧、无超时、无重试，直接导致客户端状态机与 CLI 实际会话状态脱节——开发者在"继续等"还是"放弃重来"之间没有任何可配置依据。
- **协议与数据一致性不可妥协**：被顶替的轮次不写 wire.jsonl，意味着用量统计、审计追踪和恢复重放链条同时断裂。这比"多等一会儿"更严重，它是数据丢失问题。
- **失控生成成本意识强烈**：53 分钟、88K tokens 的乱码输出，暴露了 CLI 层缺少基础的输出卫生检查。开发者希望这类异常在源头被拦截，而不是事后由用户买单。
- **记忆系统是最高噪点方向**：#1283 的 38 条评论证明，记忆功能不是"nice-to-have"，而是从"对话式代码助手"走向"可托付的长期开发代理"的关键分水岭。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-14

## 今日速览

v1.18.18 补丁发布，修复 Kimi 系统提示词选择与 xAI 推理强度问题；V2 版本与 V1 共存兼容性、安全漏洞（curl|bash 升级、SSRF、上下文剪枝）成为社区争论焦点；多个 429 限流误报及 Copilot 提供方零模型问题引发广泛讨论。

## 版本发布

**v1.18.18**（补丁版本）
- **Bug 修复**：为官方 Moonshot 与 Kimi 提供方正确选择 Kimi 系统提示词；修复 xAI 模型下 `xhigh` 推理强度设置无效的问题。
- 查看：[Release v1.18.18](https://github.com/anomalyco/opencode/releases)

---

## 社区热点 Issues（10 个）

### 1. 保留旧版布局选项（热榜第一）
- **Issue #37012** | 评论 37 | 👍 41
- 用户强烈要求保留旧版布局，指出新 UI 在导航效率上倒退（所有功能需多层跳转才能到达），且旧版工作区/会话管理更顺手。社区共鸣度高，是当前最有争议的 UI 回归问题。
- 链接：https://github.com/anomalyco/opencode/issues/37012

### 2. “Copied to clipboard” 显示成功但实际未复制
- **Issue #41470** | 评论 15 | 👍 1（更新于 08-13）
- 在 VSCode Server（Docker）环境下使用 OpenCode 时，点击复制虽显示成功，但系统剪贴板中并无内容。涉及 v1.18.14 版本，疑似终端剪贴板桥接失效。
- 链接：https://github.com/anomalyco/opencode/issues/41470

### 3. 免费额度误报 429 限流错误
- **Issue #42029**（已关闭）| 评论 5
- 用户报告未使用即收到 `FreeUsageLimitError`，且提示从 `Console` 提供方返回。并非个例——同日 #42074 亦报告 3 个独立 IP 的所有请求均被 429 拦截。疑似服务端额度核算逻辑异常。
- 链接：https://github.com/anomalyco/opencode/issues/42029

### 4. GitHub Copilot 提供方显示零模型
- **Issue #42083** | 评论 5
- opencode 1.18.15（Arch 包）中，`opencode auth login -p github-copilot` 认证成功，但 `/models` 不显示任何 Copilot 模型，`opencode models github-copilot` 返回 “Provider not found”。所有模型均被标记 `model_picker_enabled: false`。
- 链接：https://github.com/anomalyco/opencode/issues/42083

### 5. 桌面应用启动时约 80% 概率加载失败
- **Issue #40516** | 评论 4
- 组织内多名用户反映 v1.18.5 ~ v1.18.13 版本在启动时无法加载 provider/model/MCP 信息；v1.18.4 正常。属于明确的版本回归问题，影响面较大。
- 链接：https://github.com/anomalyco/opencode/issues/40516

### 6. 【安全】opencode upgrade 使用 curl|bash 且无完整性校验
- **Issue #42434** | 评论 3
- `opencode upgrade` 从远程获取脚本并直接 pipe 到 bash，存在供应链攻击/TOCTOU 风险，评级为 Medium。社区长期关注安装链路安全性。
- 链接：https://github.com/anomalyco/opencode/issues/42434

### 7. 【2.0】压缩请求超出上下文窗口上限
- **Issue #42448** | 评论 2（创建于 08-14）
- V2 会话在上下文占用 79%（236k/299,964）时，自动压缩未触发，手动 `/compact` 也因“提示词+输出超限”失败。高输出模型的压缩边界计算需要修正。
- 链接：https://github.com/anomalyco/opencode/issues/42448

### 8. 【功能】添加希伯来语（he）语言环境
- **Issue #42447** | 评论 2（创建于 08-14）
- 社区提交完整希伯来语翻译请求，说明 OpenCode 国际化（i18n）需求正在扩大。
- 链接：https://github.com/anomalyco/opencode/issues/42447

### 9. 【2.0】opencode2 迁移共享 V1 数据库导致 /move 命令故障
- **Issue #42260**（已关闭）| 评论 2
- opencode2 在迁移数据库 schema 时破坏了 V1 的 `session_context_epoch`，导致 V1 中 `/move` 命令失效、会话数据错乱。两个版本共存时的数据隔离方案亟需明确。
- 链接：https://github.com/anomalyco/opencode/issues/42260

### 10. Bug：opencode 会“自我删除”
- **Issue #42441** | 评论 2
- 通过 `pnpm i -g opencode-ai` 安装后，二进制文件在 `.local/share/pnpm/opencode` 目录下凭空消失。与 #42411（已关闭）为同一问题，怀疑是 pnpm approve-builds 与自动更新的竞态条件。
- 链接：https://github.com/anomalyco/opencode/issues/42441

---

## 重要 PR 进展（10 个）

### 1. 修复：延迟更新检查至服务解析之后
- **PR #42446**（已合并）| 作者：thdxr
- 解决运行中的旧客户端反复拒绝新版本服务进程的问题——将异步自动更新推迟到 CLI 版本对应后台服务就绪后再执行，从已关闭的 #42025 中提取的针对性修复。
- 链接：https://github.com/anomalyco/opencode/pull/42446

### 2. 修复：保留 V1 数据库兼容性
- **PR #42444**（已合并）| 作者：thdxr
- 阻止 V1 的 move/revert 投影重置已删除的 session_context_epoch 表；禁止实验性工作区路径查询 V2 schema。对应 Issue #42260 的修复，保持 V1/V2 共存安全。
- 链接：https://github.com/anomalyco/opencode/pull/42444

### 3. 修复：保留响应模型元数据
- **PR #42433** | 作者：KarmCraft
- AI SDK 适配器此前丢弃了 `response.modelId`，导致客户段只能看到请求别名（`provider/auto`）。本 PR 保留结构化模型 ID，关闭 #42420，比 #26091 的方案更聚焦。
- 链接：https://github.com/anomalyco/opencode/pull/42433

### 4. 性能：延迟加载 npm 配置
- **PR #42458** | 作者：kitlangton
- `@npmcli/config` 的初始化从启动路径中移除，仅在真正请求 npm 配置时加载。基准测试显示启动路径耗时显著下降（消除 npm config 初始化开销）。
- 链接：https://github.com/anomalyco/opencode/pull/42458

### 5. 修复：隔离标签页滚动状态
- **PR #42456** | 作者：kitlangton
- 启用 `tab_scroll` 实验后，每个会话标签页独立保存阅读位置。修复切换标签页导致当前位置被错误写入其他标签页的问题。
- 链接：https://github.com/anomalyco/opencode/pull/42456

### 6. 修复：更正标签页上下文菜单行为
- **PR #42453**（已合并）| 作者：kitlangton
- V2 TUI 标签页菜单改为纯指针模式：点击/右键外部区域关闭菜单且不触发底层 UI；右键菜单本身仅收起；Rename 操作可靠打开输入框。
- 链接：https://github.com/anomalyco/opencode/pull/42453

### 7. 功能：允许配置的 bots 触发 GitHub Actions
- **PR #42047** | 作者：dan-turner
- 新增 `allowed_bots` 输入参数，让受信任的 GitHub App bots 可触发 OpenCode 工作流，同时保持其他 bots 默认禁止。关闭 #7103。
- 链接：https://github.com/anomalyco/opencode/pull/42047

### 8. 功能：本地 LAN 提供方自动发现
- **PR #27554** | 作者：androidand
- `/connect` 中新增 `Local (LAN)` 发现，组合 mDNS 与多种协议自动发现局域网内的 OpenAI-compatible 服务器，并自动拉取模型列表。关闭 #6231 / #27553。
- 链接：https://github.com/anomalyco/opencode/pull/27554

### 9. 功能：工作区流程加入新布局
- **PR #38790**（已合并）| 作者：Hona
- 新布局支持会话工作区选择：本地仓库、隔离的新工作区、已有工作区三选一；位置选择器展示分支上下文并遵循 `session.new_location`。
- 链接：https://github.com/anomalyco/opencode/pull/38790

### 10. 修复：按文件修改时间清理工具输出
- **PR #42450** | 作者：opencode-agent[bot]
- 工具输出清理逻辑从编码的 ID 时间戳改为文件系统 mtime；元数据不可读时保守保留文件而非删除。覆盖时间戳回绕边界。
- 链接：https://github.com/anomalyco/opencode/pull/42450

---

## 功能需求趋势

根据过去 24 小时 Issue/PR 分析，社区聚焦以下方向：

- **UI/UX 回归与布局**：旧版布局保留（#37012）、TUI 右侧边栏展示后台子代理活动（#42369）——开发者对 V2 新 UI 的便捷性提出明确质疑，并期望保留经典交互。
- **本地化与国际化**：希伯来语翻译请求（#42447）出现，汉语、西语、俄语等非英语用户的活跃度上升。
- **V1/V2 共存与升级路径**：多个 issue/PR 围绕双版本数据库兼容（#42260、PR #42444）、TODO 工具在 V2 中缺失（#42421），表明 2.0 迁移平滑度是当前最紧迫的工程议题。
- **本地/私有大模型接入**：LAN 自动发现（#27554）、本地 OpenAI-compatible 服务器自动模型发现（#19959）、每 MCP 服务器级信任配置（#40125）——本地优先部署依旧是长期趋势。
- **安全与供应链**：curl|bash 升级校验（#42434）、上下文剪枝丢弃指令约束（#42437）、webfetch SSRF（#42435）——社区开始以安全审计视角系统性提交报告。
- **新语言/文件类型支持**：Solidity 高亮与类型支持（#38200）说明加密/合约开发者群体正在进入。

---

## 开发者关注点

- **429 限流（免费模型）反复误报**：#42029、#42074、#42449、#42452 均指向 Zen 免费模型（deepseek-v4-flash-free、mimo v2.5）在无使用情况下即被限流，或冷却期结束后极短时间内再次触发。开发者对提供方额度核算逻辑的透明度表达不满。
- **剪贴板与终端集成失效**：VSCode Server 环境下复制功能失真（#41470），是远程开发场景的高频痛点。
- **GitHub Copilot 提供方不可用**：#42083 中认证成功但模型列表为空，提示 OpenCode 对第三方提供方的适配仍有兼容性缺口。
- **二进制自我删除**：#42441/#42411 中 pnpm 安装后二进制消失，影响用户信任度，需排查自动更新与 pnpm 脚本的竞态。
- **V2 功能倒挂**：V1 中原生的 `todowrite`/`todoread` 在 V2 中丢失（#42421），且 V2 会破坏 V1 数据库（#42260），令用户对是否升级犹豫不决。
- **性能瓶颈**：#42382 报告 mimo v2.5 free 生成 README 耗时 10 小时；#42448 的压缩边界问题在长会话中直接阻断操作。
- **LLM 响应元数据不可见**：#26091/#42420 指出路由信息/模型 ID 在保存时被丢弃，影响插件生态的代理观测能力。

---

*本日报由 AI 技术分析师基于 GitHub 公共数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-14

## 今日速览

Pi 社区今日聚焦于两项核心问题：一是 auto-compaction 机制在长会话中失效导致 API 溢出（#6879，19 条评论），二是 TUI 在大缓冲区下的性能退化（#8029）及其修复 PR（#8066、#8082）。此外，社区对 Grok 4.6 模型支持（#8046）、终端兼容性修复也保持了较高关注度。

## 社区热点 Issues

### 1. Auto-compaction 在长会话中失效 (#6879)
**链接**: https://github.com/earendil-works/pi/issues/6879

**热度**: 19 条评论 | 17 👍 | 创建于 07-20，仍开放

**要点**: 在 gpt-5.6-sol 上超过 2 小时的 agentic 会话中，footer 显示上下文超 100% 后 compaction 仍未触发，直到 API 在 373k tokens 处拒绝请求才被迫执行。作者建议在每次 agent 调用后检查上下文占比。这是当前社区最关注的稳定性问题，高赞说明长会话用户普遍受影响。

### 2. Edit fuzzy match 忽略空白差异导致编辑失败 (#7836)
**链接**: https://github.com/earendil-works/pi/issues/7836

**热度**: 10 条评论 | 1 👍 | 标记 `inprogress`

**要点**: `normalizeForFuzzyMatch` 未折叠连续空白或去除行首缩进，导致编辑工具在空白不一致时匹配失败，影响小模型工具调用的成功率。当前已有修复进行中。

### 3. Prompt 编辑器大缓冲下性能严重退化 (#8029)
**链接**: https://github.com/earendil-works/pi/issues/8029

**热度**: 7 条评论 | 标记 `bug, inprogress`

**要点**: 约 7000 行的 prompt 输入框中，单次 ↑ 键操作需 1650ms，性能线性劣化。PR #8066 通过视觉行缓存已给出修复方案，预计将合并。

### 4. 全局 Undici dispatcher 继承 16 KiB 头部上限导致溢出 (#7791)
**链接**: https://github.com/earendil-works/pi/issues/7791

**热度**: 6 条评论 | 已关闭

**要点**: Pi 安装的 `EnvHttpProxyAgent` 未设置 `maxHeaderSize`，全局 fetch 继承 Node 默认 16 KiB，导致合法的大响应头被拒。适合所有通过代理访问大响应头的生产环境场景。

### 5. Windows 下非法 settings.json 被静默忽略，报误导性的 bash not found (#7829)
**链接**: https://github.com/earendil-works/pi/issues/7829

**热度**: 5 条评论 | 标记 `inprogress`

**要点**: 含未转义反斜杠的 Windows 路径使 JSON 解析失败，但 Pi 未提示配置文件错误，而是报告"bash not found"，增大了问题排查难度。

### 6. 多用户共享 PI_CODING_AGENT_DIR 受限 (#7779)
**链接**: https://github.com/earendil-works/pi/issues/7779

**热度**: 5 条评论 | 仍开放

**要点**: `auth.json` 和 `models-store.json` 以 0600 权限写入，首个用户成为唯一读写者，后续用户无法访问共享状态。影响团队共用 CI 或开发机的场景。

### 7. TUI 复制显示 "Copied!" 但剪贴板为空 (#7761)
**链接**: https://github.com/earendil-works/pi/issues/7761

**热度**: 3 条评论 | 仍开放

**要点**: VTE 终端（GNOME Terminal）下 `copySelectionToClipboard()` 只写 OSC 52 序列，未设置 X11/Wayland 剪贴板回退。对于不支持 OSC 52 的终端，复制功能形同虚设。

### 8. Codex 后端需要处理 `end_turn: false` (#7689)
**链接**: https://github.com/earendil-works/pi/issues/7689

**热度**: 3 条评论 | 2 👍 | 仍开放

**要点**: Codex 后端返回 `response.completed` 时可能携带 `end_turn: false`，Pi 需要识别该字段以避免错误过早结束对话回合。这是对接 Codex 推理流程的关键细节。

### 9. 添加 Grok 4.6 到 xAI 模型目录 (#8046)
**链接**: https://github.com/earendil-works/pi/issues/8046

**热度**: 2 条评论 | 已关闭

**要点**: xAI 发布 Grok 4.6，但 Pi 生成器只识别 `grok-4.5` 走 Responses API。提交者已准备补丁，说明模型目录的更新速度直接影响新模型可用性。

### 10. Anthropic 服务端拒绝时缺少 fallback 机制 (#8017)
**链接**: https://github.com/earendil-works/pi/issues/8017

**热度**: 2 条评论 | 1 条转推 | 仍开放，作者为 badlogic

**要点**: 当 Anthropic 分类器认为 Pi 在执行非法操作时，compaction 可能失败。需要支持 Anthropic 官方推荐的 refusal server-side fallback 机制，保障合规场景下的可用性。

## 重要 PR 进展

### 1. TUI 渲染性能与 SIGINT 终端恢复修复 (#8082)
**链接**: https://github.com/earendil-works/pi/pull/8082

**状态**: 已关闭 | 作者: frankieyep

**要点**: 双修复：仅渲染可见视口 + SIGINT 时恢复终端原始模式与标题。解决大会话恢复时 759 KB 历史回放（约 84 万字节输出、18 秒阻塞）和终端 raw mode 残留问题。

### 2. Gemini 工具 schema 兼容回退 (#8086)
**链接**: https://github.com/earendil-works/pi/pull/8086

**状态**: 已关闭 | 作者: d33disc

**要点**: 部分 generativelanguage 端点拒绝 JSON Schema 的未知字段（如 `parametersJsonSchema`），此 PR 增加对 legacy Schema 消息的自动回退，提升 Gemini 工具调用的兼容性。

### 3. Prompt 编辑器视觉行缓存 (#8066)
**链接**: https://github.com/earendil-works/pi/pull/8066

**状态**: 开放 | 作者: affanali2k3

**要点**: 针对 #8029 的修复。缓存视觉行计算结果并在宽度或文本变化时失效，同时将 VisualLine 提取为独立类型。可显著降低大缓冲区下光标的延迟。

### 4. 扩展标志默认值类型校验 (#8070)
**链接**: https://github.com/earendil-works/pi/pull/8070

**状态**: 开放 | 作者: acmerfight

**要点**: `registerFlag()` 允许 type 与 default 不一致（如 boolean + `"false"` 字符串），导致缺省值错误。此 PR 将其建模为 discriminated union，从类型层面杜绝非法默认值。

### 5. 修复 boolean 扩展标志吞掉后续 prompt (#8084)
**链接**: https://github.com/earendil-works/pi/pull/8084

**状态**: 已关闭 | 作者: felixzsh

**要点**: `pi -p --plan "prompt"` 这类命令中，boolean 标志会错误地消费下一个参数。修复后正确的参数解析不再静默丢失用户输入。

### 6. TUI 鼠标选择可用 Escape 取消 (#8085)
**链接**: https://github.com/earendil-works/pi/pull/8085

**状态**: 开放 | 作者: pablasso

**要点**: 在释放鼠标前按 Escape 可清除当前选区且不触发自动复制，符合文本编辑器常见交互预期，避免误选即复制的困扰。

### 7. grok-mermaid 升级至 0.2.3 (#7984)
**链接**: https://github.com/earendil-works/pi/pull/7984

**状态**: 开放 | 作者: xl0

**要点**: 修复类（class）渲染问题，改善 mermaid 图在 TUI 中的显示效果。此前样式在图表复杂时会出现严重错位。

### 8. 新增 Amazon Bedrock Mantle OpenAI Responses 提供商 (#6216)
**链接**: https://github.com/earendil-works/pi/pull/6216

**状态**: 开放 | 作者: unexge

**要点**: 通过 OpenAI 官方 Bedrock Provider 接入 AWS Bedrock Mantle，扩展 Pi 的云侧模型服务覆盖。适用于 AWS 生态用户。

### 9. 统一用户可见消息中的 APP_NAME (#8067)
**链接**: https://github.com/earendil-works/pi/pull/8067

**状态**: 已关闭 | 作者: mellson

**要点**: 部分用户可见字符串硬编码"pi"，改为使用 `APP_NAME` 变量。对本体无行为变化，但支持 rebrand 场景（如 fork 或企业定制）。

### 10. todo 工具渲染死路径修复 (#8057)
**链接**: https://github.com/earendil-works/pi/pull/8057

**状态**: 开放 | 作者: cyzlmh

**要点**: todo 调用校验失败时 `details` 为 `{}`，renderResult 中 switch 无 default 分支返回 undefined，导致 TUI 崩溃。此 PR 补全了缺失的返回分支。

## 功能需求趋势

### 1. 大上下文/长会话治理
- **Auto-compaction 触发时机** (#6879) 与 **会话恢复回放** (#8079、PR #8082) 表明用户对长时间、大体积会话的稳定性有强烈诉求
- `/resume` 进度计数口径不统一 (#7960)，涉及 UX 一致性问题

### 2. 终端兼容性与卫生
- 多处跨终端 bug：VTE 剪贴板 (#7761)、CJK 终端下的列宽 (#8055)、SIGINT 后终端状态恢复 (#8080、PR #8082)、kitty keyboard protocol 残留 (#5065)
- 集中在 **GNOME Terminal、Windows Terminal、CJK 终端** 等常用环境

### 3. 模型生态快速跟进
- Grok 4.6 的当日请求 (#8046) 与 Qwen 模型目录漂移 (#8083) 说明社区对**新版模型及时可用**有较强需求
- Bedrock Mantle 提供商 (PR #6216) 延续云服务商集成的扩展方向

### 4. 配置解析与错误提示的鲁棒性
- Windows 路径转义问题 (#7829)、共享目录权限 (#7779) 反映了跨平台配置体验的薄弱点
- 未知斜杠命令被静默当消息发送 (#8081) 提示需要更明确的输入校验与用户反馈

### 5. TUI 渲染与视觉一致性
- Prompt 编辑器性能 (#8029)、HTML 导出缺少 mermaid/LaTeX 渲染 (#8041)、流式 thinking 文本颜色闪烁 (#8060) 显示用户在持续打磨 UI 细节
- 扩展自动复制行为（PR #8085）也反映对可预期的交互反馈的追求

## 开发者关注点

- **长会话性能与稳定性**：上下文超限后 compaction 不触发、恢复大会话时终端被历史输出阻塞是被提及最频繁的痛点
- **工具调用可靠性**：空白规范化 (#7836)、参数校验 schema 冲突 (#7607)、MCP 工具输出折叠行为 (#8074) 均涉及 agent 工具链的实用性
- **配置可诊断性**：settings.json 非法时给出误导性错误、权限位导致多用户无法共享配置，开发者希望获得更直接的配置错误提示
- **终端恢复与复制**：SIGINT 后终端残留 raw mode、VTE 终端复制无效、终端标题未恢复，影响日常交互体验
- **模型接入速度**：新模型发布到 Pi 可用的时间差，以及模型目录在不同版本间的漂移，是社区反复提出的问题

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-08-14

## 今日速览

- **v0.21.11 正式版发布**，带来两项重磅能力：Agent Plugins v1 插件体系与 `/coordinate` 原生多智能体协作命令。
- **多智能体 Fleet 架构进入密集落地期**，相关 Issue 与 PR 占据今日社区讨论的近半数，涵盖会话协调、持久化、终端挂载等完整阶段。
- **SWE-bench Verified 测试进入 QUARANTINED 状态**，官方在正式提交前进行缓存与 E2E 验证，当前 500/500 用例全部完成但解析数为 0，质量门禁正在收紧。

---

## 版本发布

### v0.21.11（正式版）
- **Agent Plugins v1**：支持通过插件扩展 Agent 能力，为自定义工具链提供了标准接入点（[#8834](https://github.com/QwenLM/qwen-code/pull/8834)）
- **`/coordinate` 命令**：支持原生多智能体工作流，可创建只读 teammate 进行协作者模式（[#8804](https://github.com/QwenLM/qwen-code/pull/8804)）
- **错误提示弱化优化**：`weaken-tool-error-shots` 与 `weaken-tool-error-display` 两张对照图展示了工具错误展示的改进

### v0.21.12-preview.1 / nightly
- 修复 web-shell 独立会话目标丢失问题，支持 workspace 文件上传（[#9038](https://github.com/QwenLM/qwen-code/pull/9038)）

---

## 社区热点 Issues

### 1. RFC：多会话原生协调机制 — [#8718](https://github.com/QwenLM/qwen-code/issues/8718)
> [CLOSED] · 9 条评论 · P2 | category/core | roadmap/multi-agent

社区最受关注的多智能体路线图奠基提案：一个 leader 会话可调度多个独立 worker 会话，同时保持交互、观察运行时与任务状态、收集结构化结果。该 RFC 已落地为 Fleet 系列 stage 的实施纲领。

### 2. 大会话恢复超时导致当前会话丢失 — [#8678](https://github.com/QwenLM/qwen-code/issues/8678)
> [OPEN] · 8 条评论 · P1 | scope/session-management / latency / memory

当 `qwen serve` 恢复大型会话超时时，当前活动会话无法保留。PR1 已合并（[#8691](https://github.com/QwenLM/qwen-code/pull/8691)），实现超时契约与可观测性，但完整修复仍在推进。这是生产环境稳定性的关键痛点。

### 3. Windows 独立安装器在 Get-FileHash 失败时崩溃 — [#7118](https://github.com/QwenLM/qwen-code/issues/7118)
> [OPEN] · 7 条评论 · 3 👍 | status/needs-triage | welcome-pr

Windows 独立安装在 SHA-256 校验步骤失败时直接中断，未回退到 npm 安装方式。持续近一个月仍未修复，属于新贡献者友好型问题。

### 4. Gemini 2.5 在 Vertex AI 上完全不可用 — [#9019](https://github.com/QwenLM/qwen-code/issues/9019)
> [OPEN] · 5 条评论 · P2 | category/core | scope/content-generation

每次请求都携带 `thinkingLevel` 参数（包括 UNSPECIFIED 占位值），而 Gemini 2.5 不支持该参数，导致所有请求立即 400 失败，无法进入工具调用或流式阶段。

### 5. Keyless Vertex AI 无法从环境推断认证类型 — [#9025](https://github.com/QwenLM/qwen-code/issues/9025)
> [OPEN] · 5 条评论 · P2 | category/authentication | scope/google-auth

仅通过环境变量配置的 keyless Vertex AI 在无头模式下启动即退出，`getAuthTypeFromEnv` 未能推断出 `vertex-ai` 认证类型，ADC 凭据无法生效。

### 6. Python SDK 拒绝 `permission_mode="auto"` — [#9002](https://github.com/QwenLM/qwen-code/issues/9002)
> [OPEN] · 5 条评论 · P2 | category/integration | scope/sdk

CLI 支持 `permission_mode="auto"`，但 Python SDK 客户端校验时将其拒绝，导致 SDK 与 CLI 行为不一致，开发者无法通过 SDK 使用自动权限模式。

### 7. 后台 Agent 活跃工作追踪与恢复 — [#8586](https://github.com/QwenLM/qwen-code/issues/8586)
> [OPEN] · 4 条评论 · P2 | roadmap/background-automation | daemon

提出为 daemon 健康状态增加 `activeWork` 维度，并构建后台 Agent 的恢复路径——当 Agent 超越前台提示或停止进展时可被自动恢复。属于后台自动化的核心基础设施。

### 8. 桌面端外部链接静默丢弃 + MCP OAuth 无法完成 — [#9108](https://github.com/QwenLM/qwen-code/issues/9108)
> [OPEN] · 3 条评论 · P2 | category/ui | scope/mcp / web-shell

虽然 #9069 已修复 Markdown 消息和 `external_url` 工件的外部链接，但剩余四个链接界面仍依赖不可靠的隐式新窗口路径。MCP OAuth 回调同样因此无法完成。

### 9. `record_artifact` 未验证工作区路径即返回成功 — [#9083](https://github.com/QwenLM/qwen-code/issues/9083)
> [OPEN] · 3 条评论 · P2 | category/tools | scope/web-shell

工具返回成功但实际文件在制品存储中标记为 `missing`，模型告知用户可打开/下载，但面板无法操作。store 状态使用会话 cwd，而 GET /file 使用工作区根目录，两者语义不一致。

### 10. Windows CLI Ctrl+V 粘贴完全失效 — [#9061](https://github.com/QwenLM/qwen-code/issues/9061)
> [OPEN] · 3 条评论 · P1 | category/cli | scope/windows

0.21.0 到 0.21.11 之间的某个版本引入回归，Ctrl+V 在 Windows CLI 中完全不起作用，降级到 0.21.0 可恢复正常。属于高优先级平台回归。

---

## 重要 PR 进展

### 1. Local Control 统一为 daemon 单一实现 — [#9106](https://github.com/QwenLM/qwen-code/pull/9106)
将 LAN 配对流程（手机接入 daemon 会话）从两种语言的双实现收敛为 daemon 内的单一实现，统一安全模型。架构治理的重要一步。

### 2. 暴露工作流执行状态 — [#9034](https://github.com/QwenLM/qwen-code/pull/9034)
为工作流执行增加结构化可观测模型：记录运行与步骤生命周期事件、持久化 journal、重建快照，并向下游暴露取消与保留原语。

### 3. 空通道集优雅处理 — [#8978](https://github.com/QwenLM/qwen-code/pull/8978)
`qwen serve --channel all` 在有效通道集为空时不再 `exit(1)` 整个 daemon，改为优雅 no-op 并仅恢复活动通道。提升无人值守场景的容错性。

### 4. 动态工作流设置开关 — [#9098](https://github.com/QwenLM/qwen-code/pull/9098)
增加 `tools.workflowsEnabled` 设置项，取代此前的环境变量开关，正式开放动态工作流功能的配置入口。

### 5. `capture-tui`：渲染声明获得像素级证据 — [#8894](https://github.com/QwenLM/qwen-code/pull/8894)
`qwen review capture-tui` 可在私有 tmux server 中驱动被测代码，精确捕获终端渲染结果。审查工具链从"文字描述"走向"像素证据"。

### 6. review `--resume` 全链路打通 — [#9093](https://github.com/QwenLM/qwen-code/pull/9093)
将 `--resume` 接入 `/review` 参数、`review run` 命令及 CI 重试路径，中断的审查运行可恢复执行，并记录 run-session 账本。

### 7. review 管道四缺陷修复 — [#9086](https://github.com/QwenLM/qwen-code/pull/9086)
针对三个真实 PR 进行端到端 `review run` 验证时发现的四个缺陷全部修复并配回归测试，所有问题均为实测发现而非假设。

### 8. 桌面端剩余外部链接改用系统 opener — [#9111](https://github.com/QwenLM/qwen-code/pull/9111)
完成 #9108 的修复：将四个仍依赖隐式新窗口的链接界面全部切换到能力限定的 Tauri opener 路径。

### 9. 工作流派生的 per-agent 转录 — [#8971](https://github.com/QwenLM/qwen-code/pull/8971)
所有工作流 `agent()` 分发任务都会生成与 Agent 工具一致的 JSONL 转录文件，包含分发的 prompt 记录，便于统一审计与排障。

### 10. 拒绝上游 fail-fast 占位符响应 — [#8938](https://github.com/QwenLM/qwen-code/pull/8938)
双重防御上游模型端偶发的 fail-fast 占位响应：HTTP 200 + 正常 finish reason，但响应体仅为 `(request timed out)` 之类文本。避免将伪成功当作真实结果。

---

## 功能需求趋势

从近 24 小时的 Issue 与 PR 来看，社区最关注的方向集中在以下五条主线：

1. **多智能体协作成熟化**：Fleet 架构从 RFC（#8718）拆解为 1A/1B/2/3 多个实施阶段（#8840-#8843），覆盖合约、MVP、持久化、终端挂载。这是当前最明确的战略投入方向。
2. **会话生命周期可靠性**：恢复超时（#8678）、后台 Agent 存活与恢复（#8586）显示了用户对长时运行场景稳定性的高要求。
3. **Web Shell / 桌面端体验补齐**：从内部链接跳转（#9108）到本地控制统一（#9106），桌面端作为主要入口的地位持续强化。
4. **云服务认证与模型兼容**：Vertex AI 的两个问题（#9019、#9025）反映出多云部署时的配置繁琐与模型参数差异化需求。
5. **审查与自动化工具链自我进化**：reivew/autofix 系列 PR 集中涌现（capture-tui、resume、管道加固、差异升级），项目正在用自研工具反哺自身工程质量。

---

## 开发者关注点

- **Windows 平台回归频发**：粘贴失效（#9061）、桌面端闪现终端窗口（#9043）、安装器失败（#7118）——Windows 开发者体验仍有较多欠账，且部分回归持续时间较长。
- **云服务接入门槛偏高**：keyless 认证推断缺失、Gemini 模型参数硬编码兼容问题，让无头/CI 场景下的云端模型接入变得脆弱。
- **硬失败策略过于激进**：`NO_TOOL_RESULT_PROGRESS` 直接终止整个无头运行（#9026）、压缩查询因固定 maxOutputTokens 超窗导致 400（#7960）——"宁可中断也不降级"的策略在无人值守场景中代价过高。
- **工具结果与文件语义不一致**：`record_artifact` 成功但文件缺失（#9083）、`read_file` 仅凭扩展名发送非图片文件（#9088）——工具调用链上的数据验证需要加强。
- **SDK/CLI 行为对齐**：`permission_mode="auto"` 被 SDK 拒绝（#9002），暴露了多语言 SDK 与 CLI 参数校验逻辑不同步的问题，这类问题会直接损害开发者信任。

---

*数据来源：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) · 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-08-14

> 数据来源：github.com/Hmbown/DeepSeek-TUI | 编译整理：AI 开发工具技术分析

---

## 一、今日速览

**v0.9.7 正式发布**，确认项目品牌全面迁移至 **Codewhale**（Shannon Labs 旗下产品），旧 npm 包 `deepseek-tui` 已弃用。**Agent 工具 schema 简化**（#5324）成为社区最热架构议题，直指模型在 32 字段复杂 schema 下频繁出错的问题。PR 侧亮点集中在 **v0.9.8 的 Auto-Review 模型守护层**（#5353）与 **测试隔离修复**（#5368）。

---

## 二、版本发布

### 📦 v0.9.7
- **Codewhale** 为 Shannon Labs 公开产品，`codewhale` 命令、npm 包及发布资产名称保持小写技术标识。
- 旧 npm 包 `deepseek-tui` **正式弃用**，不再接收任何新版本。
- 自 v0.8.x 升级的存量用户需注意迁移路径，避免继续引用旧包名。
- 社区 PR #5318（窗口置顶 PiP）已作为首个社区贡献集成进入该版本。

---

## 三、社区热点 Issues（精选 10 条）

### 1. #998 文案展示不全，希望悬浮提示完整内容
- **热度**：评论 11 | 👍 1 | 2026-05-07 创建，持续活跃
- **要点**：中文用户截图反馈部分文案在界面中截断，期望鼠标悬停显示完整信息。
- **意义**：反映 TUI 界面对长文本/中文展示的适配短板。
- 🔗 [Hmbown/CodeWhale Issue #998](https://github.com/Hmbown/CodeWhale/issues/998)

### 2. #1004 `/dryrun` — 预览下一次补全请求而不实际发送
- **热度**：评论 9 | 2026-05-07 创建
- **要点**：在长会话（V4 Pro）中，用户无法在发送前查看实际请求内容——包含系统提示、缓存文件、工具定义、@提及、多步思考。请求者希望内置 `/dryrun` 命令，先预览再发送。
- **意义**：直击长上下文场景下的调试痛点和 token 成本控制需求。
- 🔗 [Hmbown/CodeWhale Issue #1004](https://github.com/Hmbown/CodeWhale/issues/1004)

### 3. #5324 简化 agent 工具的 32 字段 schema
- **热度**：评论 7 | 2026-08-12 创建
- **要点**：model-facing `agent` 工具携带 **32 个属性且零必填字段**，同时承担 8 种动作（start/status/peek/message/followup/interrupt/wait/cancel）和一堆别名，导致模型频繁调用出错。
- **意义**：核心架构债务，直接影响 agent 工具在模型侧的可用性与准确率，PR #5369 已跟进。
- 🔗 [Hmbown/CodeWhale Issue #5324](https://github.com/Hmbown/CodeWhale/issues/5324)

### 4. #2369 CodeWhale 配置路径在 OS/Cygwin 间碎片化（含静默迁移 Bug）
- **热度**：评论 7 | 2026-05-30 创建
- **要点**：Windows 与 Cygwin 下 home 目录解析规则不同，配置和密钥路径可能指向不一致的位置；旧版本迁移逻辑还可能静默写出错误路径（附补丁）。
- **意义**：多平台环境下配置可信度问题，影响升级与安全（密钥路径）。
- 🔗 [Hmbown/CodeWhale Issue #2369](https://github.com/Hmbown/CodeWhale/issues/2369)

### 5. #1425 大文本处理工程后会话中断卡死
- **热度**：评论 6 | 2026-05-11 创建
- **要点**：用户尝试分析 300 万字小说，AI 启动 10 个子 Agent 分批处理，全部因 `agent_wait` 等待超时而卡死。实测子 Agent 均在 `Running`，约 2 分钟后被判定超时。
- **意义**：暴露并行子 Agent 编排的稳定性短板，是大规模任务场景的关键障碍。
- 🔗 [Hmbown/CodeWhale Issue #1425](https://github.com/Hmbown/CodeWhale/issues/1425)

### 6. #5316 EPIC-005：CodeWhale TUI crate 分解（伞形任务）
- **热度**：评论 5 | 2026-08-10 创建
- **要点**：宏观架构重构任务，将 TUI 模块按业务领域拆分为独立 crate，所有子任务均向此 EPIC 汇报。
- **意义**：表明项目正从单体走向模块化，长期可维护性是当前重点。
- 🔗 [Hmbown/CodeWhale Issue #5316](https://github.com/Hmbown/CodeWhale/issues/5316)

### 7. #5359 四个 TUI 测试读取真实机器状态导致失败
- **热度**：评论 2 | 2026-08-13 创建
- **要点**：测试读取 `~/.codewhale` 和 display 探测，在真实开发机上必然失败，而 CI（干净 HOME）始终通过。
- **意义**：测试隔离性的典型问题，已由 PR #5368 修复。
- 🔗 [Hmbown/CodeWhale Issue #5359](https://github.com/Hmbown/CodeWhale/issues/5359)

### 8. #5340 v0.9.4→v0.9.6 升级后 doctor 卡在 needs action
- **热度**：评论 2 | 2026-08-13 创建
- **要点**：升级后 `codewhale doctor` 永久报告 `first-run` 与 `update checkpoint` 为 `needs action`，即使重新完成首次引导也无法解决。
- **意义**：升级路径上的状态一致性 Bug，影响用户对健康检查的信任。
- 🔗 [Hmbown/CodeWhale Issue #5340](https://github.com/Hmbown/CodeWhale/issues/5340)

### 9. #5363 让 DS4（DwarfStar）成为一等本地 DeepSeek V4 路由
- **热度**：评论 1 | 2026-08-13 创建
- **要点**：DS4 本地服务已提供 V4 Flash/Pro 的 OpenAI 兼容接口，但当前需要用户手动配置泛化自定义 Provider，缺少一键式 DS4 专属设置流程和 V4 推理控制选项。
- **意义**：本地模型接入体验的"最后一公里"，配套 PR #5365 已提交。
- 🔗 [Hmbown/CodeWhale Issue #5363](https://github.com/Hmbown/CodeWhale/issues/5363)

### 10. #5345 增加多行输入模式或自定义发送快捷键
- **热度**：评论 1 | 2026-08-13 创建，最新更新
- **要点**：中文用户反馈日常指令需换行，但当前 Enter 直接发送。参考 Grok Build / Codex，希望支持 `multi-line` 模式（Enter 换行、Shift+Enter 发送）或可自定义快捷键。
- **意义**：编辑体验的普适性需求，尤其对中文/长指令用户影响明显。
- 🔗 [Hmbown/CodeWhale Issue #5345](https://github.com/Hmbown/CodeWhale/issues/5345)

---

## 四、重要 PR 进展（精选 10 条）

### 1. #5353 Auto-Review 模型守护层（v0.9.8）
- **状态**：OPEN | 2026-08-13
- **内容**：Auto-Review 升级为真正的双层模式——确定性规则层不可绕过，fallback 阻塞时升级为一次性 **model guardian**，而非静默拒绝。融合 Codex review 语义和 Kimi 模式词汇。
- **意义**：v0.9.8 核心特性，解决自动审查中"绕过-重试"循环。
- 🔗 [Hmbown/CodeWhale PR #5353](https://github.com/Hmbown/CodeWhale/pull/5353)

### 2. #5365 本地 DS4 一键设置
- **状态**：OPEN | 2026-08-13
- **内容**：新增 `/setup provider ds4`、`/provider setup ds4` 及 provider-picker 的 `D` 快捷键，预填无密钥回环预设；复用 OpenAI 兼容传输，无需新协议适配器。
- **意义**：让本地 DeepSeek V4（Flash/Pro）开箱即用，兑现 #5363。
- 🔗 [Hmbown/CodeWhale PR #5365](https://github.com/Hmbown/CodeWhale/pull/5365)

### 3. #5368 将不受约束的测试隔离到独立状态根目录
- **状态**：OPEN | 2026-08-13
- **内容**：修复 #5359 的四个测试。涉及三个独立机制：lock-holder 信任漏洞、设置路径候选、TUI 偏好路径。
- **意义**：消除测试对开发者真实环境的读写污染，是 CI 与本地行为一致性的关键修复。
- 🔗 [Hmbown/CodeWhale PR #5368](https://github.com/Hmbown/CodeWhale/pull/5368)

### 4. #5339 过滤子进程 shell 完成事件
- **状态**：OPEN | 2026-08-12
- **内容**：子 Agent/后台 shell 的完成事件不再混入父模型流；保留无主完成与任务/状态可见性，并添加回归测试。
- **意义**：解决多 Agent 场景下事件流混乱问题，关闭 #5325。
- 🔗 [Hmbown/CodeWhale PR #5339](https://github.com/Hmbown/CodeWhale/pull/5339)

### 5. #5369 Moonshot schemas 降级而非拒绝条件字段
- **状态**：OPEN | 2026-08-13
- **内容**：针对 #5324 前置工作，将 Moonshot schema 中的条件字段做降级处理，而不是直接拒绝。
- **意义**：改善多模型 schema 兼容性，是 agent 工具精简的组成部分。
- 🔗 [Hmbown/CodeWhale PR #5369](https://github.com/Hmbown/CodeWhale/pull/5369)

### 6. #5358 自动审核拒绝理由 + 回合断路器
- **状态**：CLOSED | 2026-08-13
- **内容**：`AutoReviewPlanDecision::Block` 现在会携带明确理由（此前是裸 `permission_denied`），并增加断路器防止模型在相同被拒操作上空转直到预算耗尽。
- **意义**：显著提升被拒后的可解释性和资源利用效率。
- 🔗 [Hmbown/CodeWhale PR #5358](https://github.com/Hmbown/CodeWhale/pull/5358)

### 7. #5364 渲染 Markdown 引用块为引用栏
- **状态**：CLOSED | 2026-08-13
- **内容**：TUI 对话区将 `>` 引用行渲染为带引用栏的专门样式，支持嵌套、行内格式、折行与正确的选中复制行为。
- **意义**：社区贡献（SparkofSpike）驱动的显示品质提升。
- 🔗 [Hmbown/CodeWhale PR #5364](https://github.com/Hmbown/CodeWhale/pull/5364)

### 8. #5333 固定宿主终端窗口为置顶迷你窗（PiP）
- **状态**：CLOSED | 2026-08-13
- **内容**：社区 PR #5318 的官方收割版本（原作者 PR 因旧基线与环境易碎测试未合入），支持右键菜单或 `/pin` 将终端窗口缩至 640x400 并保持置顶。
- **意义**：v0.9.7 首个社区贡献集成案例，建立了 contributor→maintainer 协作范式。
- 🔗 [Hmbown/CodeWhale PR #5333](https://github.com/Hmbown/CodeWhale/pull/5333)

### 9. #5336 修复 MCP `nextCursor` 返回 null 的规范违规
- **状态**：CLOSED | 2026-08-12
- **内容**：`serve --mcp` 在 `tools/list` 和 `resources/list` 中返回 `"nextCursor": null`，违反 MCP 规范（应为 string 或省略），导致 Claude Code 等严格客户端报错。
- **意义**：MCP 互操作性合规修复，影响所有接入方。
- 🔗 [Hmbown/CodeWhale PR #5336](https://github.com/Hmbown/CodeWhale/pull/5336)

### 10. #5106 将 DeepSeekClient 重命名为供应商中立类型
- **状态**：CLOSED（WIP）| 2026-08-03
- **内容**：审计并重命名 `DeepSeekClient`、`deepseek_client`、`deepseek_api_key` 等为供应商中立名称，更新文档和活动路由 API key 辅助函数。
- **意义**：为多模型供应商扩展铺路，是品牌迁移后的架构配套。
- 🔗 [Hmbown/CodeWhale PR #5106](https://github.com/Hmbown/CodeWhale/pull/5106)

---

## 五、功能需求趋势

从近期 Issue 与 PR 中可提炼出五个核心方向：

| 方向 | 代表 Issue/PR | 热度信号 |
|---|---|---|
| **中文体验与 i18n** | #998 文案截断、`#2323` 中文输入法冲突、`#1675` 输出乱码、`#790` 命令/弹窗 i18n | 长期高频，中文用户占比大，但 zh-Hant 已实现全量覆盖（PR #5334） |
| **Agent 工具链可靠性** | `#5324` schema 简化、`#1425` 子 Agent 超时、`#1917` 通用 PreToolUse/PostToolUse 钩子层 | Agent 工具已成为核心交互方式，模型侧可用性开始受到关注 |
| **多平台/系统兼容** | `#2369` 配置路径、`#1829` SSH 出站阻断、`#1854` 默认 Windows Terminal、`#1097` FreeBSD 支持 | TUI 用户对原生终端/平台适配要求提升 |
| **本地/自托管模型接入** | `#5363` DS4 一键设置、`#1482` NVIDIA NIM、`#5367` 可配置 tool result 大小限制 | V4 Pro 本地化驱动，OpenAI 兼容传输是主流路径 |
| **交互编辑效率** | `#1004` /dryrun、`#436` 可配置 keymap、`#5345` 多行输入模式 | 长指令/多行场景推动编辑器级交互需求 |

---

## 六、开发者关注点

1. **并行任务稳定性**：`#1425` 显示 10 个子 Agent 并发在真实场景中会因超时中断整个会话，开发者需要可预测的编排与失败降级。
2. **升级与迁移的信任**：`#5340` doctor 卡死、`#2369` 静默迁移错误和旧包弃用，都在消耗用户对升级流程的信任，需加强迁移自检与回滚能力。
3. **模型可见 schema 复杂度**：`#5324` 揭示 32 字段、8 动作、零必填的 agent 工具正在拖累模型使用率——社区对"模型最简可用接口"有明确期待。
4. **本地/测试环境隔离**：`#5359` 所代表的测试读取真实状态问题，在 TUI 类工具中尤为敏感——涉及配置、密钥等隐私数据。
5. **中文输入与展示**：`#2323` 输入法拼音串入模型区、`#998` 文案显示不全，属于"低频但爆发性强"的用户体验问题，直接影响中文用户留存。
6. **MCP 规范对齐**：`#5336` nextCursor 事件说明主流工具链正以 MCP 为互操作标准，社区期待 CodeWhale 严格合规。

---

> **分析师注**：v0.9.7 的品牌切换是项目发展的分水岭，旧名称 `DeepSeek-TUI` 将逐步退出历史舞台。社区目前对 v0.9.8 的 Auto-Review 双层架构与 DS4 本地路由期待较高，这两项分别代表了"安全审查智能化"和"本地模型公民化"的趋势方向。建议关注 `#5324` schema 简化进展，它很可能成为 v0.9.8 之后最影响 Agent 体验的底层改动。

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*