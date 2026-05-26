# AI CLI 工具社区动态日报 2026-05-26

> 生成时间: 2026-05-26 00:24 UTC | 覆盖工具: 9 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告 | 2026-05-26

---

## 1. 生态全景

当前 AI CLI 工具生态呈现**"一超多强、垂直分化"**格局：Claude Code 与 OpenAI Codex 凭借先发优势占据主流开发者心智，但稳定性与平台公平性问题成为共同瓶颈；Google Gemini CLI、Qwen Code 等后发者以**守护进程模式（daemon/serve）**和**多模型兼容**为差异化切口；Pi、OpenCode 等独立客户端则通过**扩展 API 开放**和**成本透明化**构建生态位。整体行业正从"对话式代码助手"向**"可编排的 Agent 操作系统"**演进，缓存策略、子代理调度、MCP 生态完整性成为下一代竞争焦点。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Issues 更新 | 今日 PR 更新 | 版本发布 | 核心维护者活跃度 |
|:---|:---:|:---:|:---|:---|
| **Claude Code** | ~10 条（含 2 条当日新建） | 6 条 | 无 | 高：安全加固、Hook 修复、治理优化多线并进 |
| **OpenAI Codex** | ~10 条 | **11 条**（含 9 连 Vim PR） | 无 | **极高**：fcoury-oai 单日 9 PR 创纪录 |
| **Gemini CLI** | ~10 条（3 条 Auto Memory 新批次） | 10 条 | 无 | 高：Agent 稳定性 + 可配置性双轨 |
| **GitHub Copilot CLI** | **18 条**（5 条当日新建） | **0 条** | **v1.0.55-0** | 异常：高 Issues 零 PR，疑似内部冲刺/代码冻结 |
| **Kimi Code CLI** | 4 条 | 1 条（#1707 持续发酵） | 无 | 低：重构争议悬而未决，新 Bug 响应待观察 |
| **OpenCode** | ~12 条 | 10 条 | 无 | 高：TUI 细节打磨 + 模型适配密集 |
| **Pi** | ~15 条（20+ 关闭） | 10 条 | 无 | **极高**：mitsuhiko 一日双关键修复 |
| **Qwen Code** | 10 条 | **10 条**（Jerry2003826 6 PR + doudouOUC 4 PR） | **v0.16.1-nightly** | 极高：守护进程模式冲刺 |
| **DeepSeek TUI/CodeWhale** | ~12 条 | 10 条 | **v0.8.45** | 高：v0.9.0 前瞻议题密集抛出 |

> **活跃度分层**：**第一梯队**（Codex/Pi/Qwen，10+ PR/日）、**第二梯队**（Claude Code/Gemini/OpenCode，6-10 PR）、**异常值**（Copilot CLI 高 Issues 零 PR）、**低活跃**（Kimi CLI 持续低迷）

---

## 3. 共同关注的功能方向

| 功能方向 | 涉及工具 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---:|
| **Agent/子代理可靠性** | Claude Code #61993, Codex #23971, Gemini #21409/#22323, Qwen #4506, CodeWhale #2007 | 嵌套调度、MAX_TURNS 恢复、状态语义真实（success ≠ 完成）、可见的并行编排 | 🔥🔥🔥 |
| **上下文/会话持久化** | Claude Code #9258/#62272, Codex #10823/#20741, Gemini #27151, OpenCode #13838 | 历史不丢失、压缩机制可观测、resume 后状态一致、配置与实际行为对齐 | 🔥🔥🔥 |
| **MCP 生态完整性** | Claude Code #48243/#30533, Codex #5059, Gemini #27440, Qwen #4521 | Prompts/resources/tools 三要素对齐、连接稳定性、OAuth 重连、远程触发器 | 🔥🔥🔥 |
| **Windows 平台公平性** | Codex #23740, Gemini #26088/#27054, OpenCode #29281, Claude Code 隐性缺失 | TUI 渲染、沙箱配置、权限模型、快捷键兼容，全面追赶 macOS 体验 | 🔥🔥🔥 |
| **Token/成本透明可控** | Claude Code #24055/#30726, Codex #24431, Pi #4985, Qwen #4479, OpenCode #28846 | 输出上限扩展、effort 配置不被降级、实时用量统计、降价后配额同步调整 | 🔥🔥🔥 |
| **Hook/扩展系统健壮性** | Claude Code #58192/#62099, Copilot CLI #2643, Pi #4991/#4978 | 大负载耐受、静默自动化能力、事件过滤精确、凭证泄漏防护 | 🔥🔥 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|:---|:---|:---|:---|
| **Claude Code** | 企业安全合规、权限精细化、内置 Agent 原语 | 大型团队/金融医疗等敏感行业 | **封闭但深度**：Anthropic 模型独占，PreToolUse/PostToolUse Hook 体系成熟，安全左移 |
| **OpenAI Codex** | IDE 级 TUI 体验、Vim 原生、Review Story 工作流 | 终端重度用户/全栈开发者 | **IDE 替代野心**：9 连 Vim PR 表明对标 VS Code 的编辑体验，Remote Control 架构支撑分布式 |
| **Gemini CLI** | 多模型路由（Gemini/Gemma）、Auto Memory、AST-aware 导航 | Google 生态用户/本地部署需求者 | **智能体调度优先**：generalist/specialist agent 分层，数值化路由规则可配置 |
| **GitHub Copilot CLI** | 跨设备会话连续性、Agency 外部工具链集成、企业合规 | GitHub 付费订阅者/企业开发者 | **平台绑定最深**：与 GitHub App、VS Code、Azure 生态硬耦合，模型选择受限（OpenAI 独占） |
| **Kimi Code CLI** | 长上下文（200K+）、中文场景优化、Moonshot API 接入 | 中国开发者/长文档处理需求 | **重构阵痛期**：Python→TS 激进迁移引发社区分裂，生态互操作性（Codex Skill 兼容）被动跟进 |
| **OpenCode** | 多模型自由切换（OpenAI/DeepSeek/Kimi/Anthropic）、订阅制云服务 | 模型agnostic 开发者/成本敏感用户 | **客户端中立**：不绑模型，Go 订阅制盈利，TUI 细节打磨激进 |
| **Pi** | 扩展 API 开放、成本精确追踪、多 Provider 兼容（含中国模型） | 扩展开发者/自托管用户 | **可扩展性优先**：插件体系最开放，DashScope/Qwen 等亚洲模型首级支持积极 |
| **Qwen Code** | 守护进程模式（`qwen serve`）、阿里云生态、中文国际化 | 中国开发者/企业私有化部署 | **后端服务化转型**：Mode B 战略明确，HTTP/SSE 路由补齐冲刺，IDE 集成广度优先 |
| **DeepSeek TUI/CodeWhale** | 缓存最大化架构、图驱动重构、鲸鱼物种命名法 | 架构师/追求极致缓存效率者 | **架构范式激进**：cache-maximalism 非性能优化而是认知持续化，Rustfactor 图驱动工具链 |

---

## 5. 社区热度与成熟度

```
成熟度 × 活跃度 矩阵
                    
高成熟度 │  Claude Code    │  OpenAI Codex
(功能完备)│  (安全合规深耕)  │  (IDE体验冲刺)
         │                 │
         ├─────────────────┤
         │  Pi             │  Gemini CLI
         │  (扩展生态成熟)  │  (快速迭代期)
         │  Qwen Code      │
         │  (daemon转型中) │
低成熟度 │  OpenCode       │  DeepSeek TUI
(架构未定)│  (多模型兼容)   │  (范式革命期)
         │  Kimi CLI       │
         │  (重构争议)     │
         └─────────────────┘
           低活跃度          高活跃度
```

| 象限 | 工具 | 特征 |
|:---|:---|:---|
| **高成熟 × 高活跃** | OpenAI Codex | 功能完备且迭代激进，Vim 模式 9 连 PR 显示产品野心 |
| **高成熟 × 中活跃** | Claude Code | 基础稳固，但 32K token 瓶颈等结构性问题制约突破 |
| **中成熟 × 高活跃** | Pi、Gemini CLI、Qwen Code | 核心功能可用，正通过密集迭代补齐短板（Pi 的 Codex 稳定性、Gemini 的 Agent 可靠性、Qwen 的 daemon 模式） |
| **低成熟 × 高活跃** | DeepSeek TUI/CodeWhale | v0.9.0 前瞻议题密集，架构范式未经验证，风险与机遇并存 |
| **低成熟 × 低活跃** | Kimi CLI | PR #1707 重构争议悬置 2 月+，社区信心消耗中 |
| **异常信号** | Copilot CLI | v1.0.55 快速发布但零公开 PR，Issues 高活跃，透明度下降 |

---

## 6. 值得关注的趋势信号

| 趋势信号 | 证据链 | 对开发者的参考价值 |
|:---|:---|:---|
| **🔴 "Agent 操作系统" 范式竞争白热化** | CodeWhale #2122 "缓存最大化的工具操作系统"、Qwen #4175 Mode B 守护进程、Gemini Agent 子系统分层 | **选型建议**：评估工具的"后台化"能力——能否脱离 TUI 作为服务运行、是否暴露 HTTP/SSE 接口、会话是否可跨客户端恢复 |
| **🔴 缓存策略从"优化项"变为"架构核心"** | Pi #4991 禁用无限 429 重试、CodeWhale cache-maximalism 6 议题、Claude Code #29966 子代理缓存关闭争议 | **成本意识**：关注工具的缓存命中机制（prompt caching、tool cache prefix、自动压缩策略），直接影响月度 API 账单 |
| **🟡 MCP 从"工具协议"扩展为"Agent 互操作标准"** | Codex #5059 prompts 支持高赞、Claude Code #30533 Office 365 深度集成、Gemini #27440 Skill/MCP 标签对齐 | **生态赌注**：优先选择 MCP 三要素（tools/prompts/resources）完整实现的工具，避免集成深度锁定 |
| **🟡 Windows 平台体验构成"公平性门槛"** | Codex #23740 TUI 崩溃、Gemini #22441 XML 泄露、OpenCode #29281 终端崩溃——无工具完全解决 | **团队选型**：Windows 开发者占比高的团队，建议暂缓激进采纳，或强制 WSL 路径 |
| **🟡 成本透明化成为付费转化关键** | Qwen #4479 "3000 万 Token 震惊"、OpenCode #28846 DeepSeek 降价后配额争议、Pi #4985 OpenRouter 精确成本 | **预算管理**：要求工具提供实时 token 计数、缓存命中统计、Provider 返回成本直采，拒绝黑盒估算 |
| **🟢 扩展/插件生态决定长尾覆盖** | Copilot CLI #2643 静默重写受限、Pi #4957 编辑器光标暴露、Claude Code #62099 社区安全贡献 | **定制化需求**：评估 Hook 点密度（pre/post tool use、on session start/end）、事件流完整性、设置注册类型化 |
| **🟢 中国模型生态从"可选项"变为"必选项"** | Pi #4964 DashScope 22 模型、CodeWhale #2142 Kimi OAuth、OpenCode #20650 Kimi k2.5 兼容、Qwen 自有模型 | **全球化部署**：关注工具对 Qwen/Gemini/DeepSeek 等模型的首级支持质量，非简单 OpenAI 兼容层 |

---

> **决策建议**：当前节点，**追求稳定生产力**选 Claude Code 或 Codex（接受平台绑定）；**追求模型自由与成本优化**选 OpenCode 或 Pi；**探索下一代 Agent 架构**跟踪 CodeWhale 与 Qwen Code 的 daemon 模式演进；**企业私有化部署**重点评估 Gemini CLI 的多模型路由与 Qwen Code 的 serve 模式成熟度。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（2026-05-26）

---

## 1. 热门 Skills 排行（按社区关注度）

| 排名 | Skill | 状态 | 功能概述 | 社区讨论热点 |
|:---|:---|:---|:---|:---|
| 1 | **document-typography** [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | AI 生成文档的排版质量控制：防止孤行、寡行、编号错位等排版问题 | 被视为"每个 Claude 文档都需要的底层修复"，讨论聚焦其普适性价值与是否应内置到核心产品 |
| 2 | **ODT skill** [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | OpenDocument 格式（.odt/.ods）的创建、模板填充与 HTML 转换 | 开源/ISO 标准文档格式的企业合规需求，与现有 DOCX/PDF skill 形成互补 |
| 3 | **frontend-design** 改进 [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | 提升前端设计 skill 的可执行性，确保单轮对话内可完成指令 | 社区关注 skill 的"可操作性"标准，成为 skill 编写质量范本的讨论案例 |
| 4 | **skill-quality-analyzer / skill-security-analyzer** [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | 元 skill：自动评估 skill 质量（结构、文档、安全性等五维度） | 生态自举工具，解决社区 skill 质量参差不齐问题，被呼吁尽快进入 marketplace |
| 5 | **SAP-RPT-1-OSS** [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | 集成 SAP 开源表格基础模型进行业务数据预测分析 | 企业 ERP/BI 场景落地，SAP TechEd 2025 新技术的快速跟进 |
| 6 | **AURELION skill suite** [#444](https://github.com/anthropics/skills/pull/444) | 🟡 Open | 四层认知框架：结构化思维模板、顾问模式、Agent 编排、持久记忆 | 认知架构级创新，讨论其是否过于复杂及与现有 memory skill 的关系 |
| 7 | **ServiceNow** [#568](https://github.com/anthropics/skills/pull/568) | 🟡 Open | 全平台覆盖：ITSM、ITOM、SecOps、FSM、SPM、IntegrationHub 等 | 企业 ITSM 市场最大单一平台，广度 vs 深度的设计权衡讨论 |
| 8 | **testing-patterns** [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | 全栈测试指南：测试哲学、单元测试、React 组件测试、E2E | 开发工作流刚需，Testing Trophy 模型与 Claude Code 场景的适配性 |

> **注**：所有热门 PR 均为 `OPEN` 状态，显示社区贡献活跃但官方合并节奏相对保守。

---

## 2. 社区需求趋势（Issues 提炼）

| 需求方向 | 代表 Issue | 核心诉求 |
|:---|:---|:---|
| **组织级 Skill 共享** | [#228](https://github.com/anthropics/skills/issues/228) (13 评论, 7 👍) | 企业团队需要共享技能库，而非手动传文件；呼吁 org-wide 分发机制 |
| **MCP 协议互通** | [#16](https://github.com/anthropics/skills/issues/16) | 将 Skills 暴露为 MCP 工具，实现跨 AI 应用的标准化 API 调用 |
| **企业安全与治理** | [#492](https://github.com/anthropics/skills/issues/492), [#1175](https://github.com/anthropics/skills/issues/1175) | 社区 skill 冒用 `anthropic/` 命名空间的信任边界问题；SharePoint 文档的权限与上下文安全 |
| **跨平台部署** | [#29](https://github.com/anthropics/skills/issues/29) | AWS Bedrock 等第三方模型托管平台的 skill 兼容性 |
| **开发工具链集成** | [#556](https://github.com/anthropics/skills/issues/556), [#1099](https://github.com/anthropics/skills/issues/1099), [#1050](https://github.com/anthropics/skills/issues/1050) | `skill-creator` 工具在 Windows 上的严重兼容性问题（subprocess/编码/pipe） |
| **插件生态治理** | [#189](https://github.com/anthropics/skills/issues/189), [#1087](https://github.com/anthropics/skills/issues/1087) | `document-skills` 与 `example-skills` 内容重复导致上下文膨胀；marketplace.json 声明与实际加载不一致 |

**趋势总结**：社区正从"个人效率工具"向**企业级生产系统**跃迁，共享机制、安全治理、跨平台兼容成为瓶颈。

---

## 3. 高潜力待合并 Skills

| Skill | PR | 潜力评估 | 关键障碍 |
|:---|:---|:---|:---|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | ⭐⭐⭐⭐⭐ | 零依赖、普适性强，可能直接合并或产品化 |
| **ODT skill** | [#486](https://github.com/anthropics/skills/pull/486) | ⭐⭐⭐⭐☆ | 政府/欧盟市场合规刚需，需确认与现有文档 skill 的边界 |
| **skill-quality-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | ⭐⭐⭐⭐⭐ | 生态自举基础设施，但需官方安全审计 |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | ⭐⭐⭐⭐☆ | 开发者场景高频需求，可能需拆分细化 |
| **n8n-builder / n8n-debugger** | [#190](https://github.com/anthropics/skills/pull/190) | ⭐⭐⭐☆☆ | 工作流自动化热门，但维护责任归属不明 |
| **shodh-memory** | [#154](https://github.com/anthropics/skills/pull/154) | ⭐⭐⭐⭐☆ | 持久记忆是社区反复诉求，需与官方 memory 功能协调 |

> **近期最可能落地**：`document-typography`（问题明确、方案干净）及 `skill-creator` 的 Windows 修复系列（[#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050)）。

---

## 4. Skills 生态洞察

> **核心矛盾**：社区正以"企业级基础设施"的标准在构建 Skills（组织共享、安全治理、跨平台兼容、质量审计），但官方仓库仍停留在"个人效率工具集市"的治理模式——**合并瓶颈、缺乏贡献指南、Windows 工具链长期破损、命名空间信任机制缺失**，导致高价值 PR 大量积压，生态创新速度受限于官方带宽。

---

---

# Claude Code 社区动态日报 | 2026-05-26

## 今日速览

今日社区无新版本发布，但 Issues 活跃度极高：32K 输出 token 上限崩溃问题持续发酵（133 评论），macOS 权限模式回退、子代理嵌套限制等结构性缺陷引发广泛讨论。PR 侧聚焦安全加固与流程修复，包括凭证泄漏防护、重复 Issue 治理优化及构建命令硬拦截等社区贡献。

---

## 社区热点 Issues

| # | 状态 | 标题 | 重要性 | 社区反应 | 链接 |
|---|------|------|--------|----------|------|
| **24055** | 🔴 OPEN | API Error: 32K 输出 token 上限崩溃 | **核心瓶颈** | 133 评论，85 👍，Windows/TUI/API 多域交叉，有复现。直接影响长代码生成/分析场景，用户被迫手动分段。 | [#24055](https://github.com/anthropics/claude-code/issues/24055) |
| **9258** | 🔴 OPEN | VS Code 插件历史会话丢失 | **数据安全** | 46 评论，46 👍，Linux 平台，存在复现。开发者工作流中断，历史上下文无法恢复。 | [#9258](https://github.com/anthropics/claude-code/issues/9258) |
| **61415** | 🔴 OPEN | macOS Bypass Permissions 模式无法启用（2.1.148） | **权限架构缺陷** | 30 评论，9 👍，5/22 新建，标记 duplicate 但仍在活跃更新。影响自动化工作流的安全策略配置。 | [#61415](https://github.com/anthropics/claude-code/issues/61415) |
| **61993** | 🔴 OPEN | 子代理无法嵌套 spawn 子代理：Task/Agent 原语未暴露 | **架构限制** | 11 评论，0 👍，5/24 新建。限制复杂多智能体工作流设计，Agent SDK 能力边界争议。 | [#61993](https://github.com/anthropics/claude-code/issues/61993) |
| **30726** | 🔴 OPEN | `effortLevel: "max"` 被 UI 静默降级 | **配置可靠性** | 10 评论，30 👍，有复现。用户显式配置被覆盖，涉及模型调用成本与性能预期管理。 | [#30726](https://github.com/anthropics/claude-code/issues/30726) |
| **30533** | 🔴 OPEN | Microsoft 365 MCP：支持读取邮件附件 | **生态扩展** | 14 评论，15 👍。企业用户高频需求，Office 365 集成深度不足。 | [#30533](https://github.com/anthropics/claude-code/issues/30533) |
| **62272** | 🔴 OPEN | 聊天 JSONL 被删除，尽管 `cleanupPeriodDays` 设极高值 | **数据丢失** | 3 评论，0 👍，5/25 新建，标记 duplicate。更新/重启触发清理，配置与实际行为不一致。 | [#62272](https://github.com/anthropics/claude-code/issues/62272) |
| **62309** | 🔴 OPEN | `--worktree` 分支命名与基准逻辑破坏多会话约定 | **CLI 契约稳定性** | 3 评论，0 👍，5/25 新建，有复现。强制前缀 `worktree-` 且基于 `origin/<default>` 而非 parent HEAD，团队协作受阻。 | [#62309](https://github.com/anthropics/claude-code/issues/62309) |
| **19976** | 🔴 OPEN | tmux 内终端通知支持 | **终端生态兼容** | 9 评论，23 👍。OSC 序列未通过 DCS 透传，远程/持久化会话场景体验缺失。 | [#19976](https://github.com/anthropics/claude-code/issues/19976) |
| **58192** | 🔴 OPEN | `/goal` Stop hook 因目标文本过长失败 | **Hook 系统鲁棒性** | 8 评论，9 👍，有复现。提示长度限制与 hook 机制耦合，大型项目目标管理受限。 | [#58192](https://github.com/anthropics/claude-code/issues/58192) |

---

## 重要 PR 进展

| # | 状态 | 标题 | 功能/修复内容 | 链接 |
|---|------|------|-------------|------|
| **62099** | 🟢 OPEN | Add credential-guard plugin for hardcoded secret detection | **安全加固**：PreToolUse hook 扫描 Write/Edit/MultiEdit/Bash 等工具的 20+ 凭证模式，防止密钥硬编码写入文件。回应 #62095。 | [#62099](https://github.com/anthropics/claude-code/pull/62099) |
| **62262** | 🟢 OPEN | fix: prevent dedupe from suggesting closed/duplicate issues as duplicates | **治理修复**：dedupe bot 不再将 Issue 标记为已关闭/duplicate Issue 的重复项，避免错误自动关闭链。 | [#62262](https://github.com/anthropics/claude-code/pull/62262) |
| **62264** | 🟢 OPEN | feat: add block-build-commands hook example | **执行管控**：硬拦截 cmake/make/ninja/gradle/npm build/gcc/cargo build 等构建命令，exit code 2 彻底阻止执行，提供安全沙箱示例。 | [#62264](https://github.com/anthropics/claude-code/pull/62264) |
| **62261** | 🟢 OPEN | feat: add sandbox filesystem example settings with allowSkillsWrites | **配置示例**：新增 `allowSkillsWrites` 沙箱文件系统配置示例，回应 #62259 的权限细化需求。 | [#62261](https://github.com/anthropics/claude-code/pull/62261) |
| **62260** | 🟢 OPEN | fix: handle empty bug report bodies in triage | **流程优化**：triage 指令新增空内容检测（仅标题/空白），自动打 `bug` + `needs-info` 标签并引导补充信息。 | [#62260](https://github.com/anthropics/claude-code/pull/62260) |
| **62315** | 🟢 OPEN | Fix hookify event filtering in pre/post hooks | **Hook 修复**：修正 hookify 事件过滤逻辑，pre/post hook 的事件匹配更精确。 | [#62315](https://github.com/anthropics/claude-code/pull/62315) |
| **62023** | 🔴 CLOSED | fix(workflow): word-boundary @claude trigger | **CI 修复**：`@claude` 触发器改为词边界匹配，避免 `@claude-plugins-official` 等插件名误触发 workflow。 | [#62023](https://github.com/anthropics/claude-code/pull/62023) |

> 注：PR #62252（测试 PR）、#1（SECURITY.md 历史 PR）无实质技术内容，未列入。

---

## 功能需求趋势

基于 50 条活跃 Issue 分析，社区当前聚焦五大方向：

| 趋势方向 | 代表 Issue | 核心诉求 |
|----------|-----------|----------|
| **输出容量突破** | #24055 | 32K token 上限已成为长文本生成、代码审查、文档编写的硬性瓶颈，需架构级扩展或流式分片机制 |
| **MCP 生态健壮性** | #48243, #22451, #10250, #62147, #43343 | 连接稳定性、OAuth 重连、远程触发器工具注入、跨平台配置持久化 |
| **数据主权与持久化** | #9258, #62272, #62104 | 会话历史不丢失、本地 JSONL 不被静默清理、Pinned 会话防误删 |
| **权限模型精细化** | #61415, #54716 | Bypass Permissions 可靠启用、内置 deferred 工具可选关闭以降低上下文基线 |
| **Agent/子代理能力扩展** | #61993, #29966, #58192 | 嵌套子代理、Prompt 缓存默认启用、Hook 系统对大负载的耐受性 |

---

## 开发者关注点

### 🔴 高频痛点

1. **Token 经济学失控**
   - #24055（32K 崩溃）、#30726（max 被降级）、#29966（子代理缓存关闭）形成成本-性能焦虑三角。开发者在长任务场景下被迫在"中断重试"和"超额计费"间权衡。

2. **配置契约不透明**
   - `cleanupPeriodDays` 高值仍触发删除（#62272）、`effortLevel` 被 UI 静默覆盖（#30726）、`--worktree` 隐式命名规则（#62309）——配置系统的"说一套做一套"严重侵蚀信任。

3. **MCP 的"最后一公里"断裂**
   - OAuth 认证成功但重连失败（#10250）、远程触发器工具不可见（#62147）、resume 后本地 MCP 丢失（#50172）——MCP 作为核心扩展机制，其状态管理在边界场景频繁失效。

### 🟡 新兴诉求

- **终端原生体验**：tmux 通知（#19976）、多会话 worktree 协调（#62309）反映远程/持久化开发场景的主流化
- **企业合规**：EU B2B VAT 错误征收（#42018）、VAT 号文档缺失（#51310）显示欧洲市场合规摩擦
- **安全左移**：凭证泄漏防护（#62099）、构建命令拦截（#62264）等社区安全贡献涌现，官方安全策略待整合

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-05-26

---

## 1. 今日速览

今日 Codex 社区无新版本发布，但开发活动高度活跃。**fcoury-oai 单日提交 9 个连贯 PR，将 TUI Vim 模式从基础行尾行为补全至完整的 dot-repeat 支持**，是近期最大规模的功能迭代。与此同时，**Windows 平台问题集中爆发**——TUI 渲染异常、沙箱配置失败、权限问题等成为社区反馈焦点，与 macOS 端的数据库访问故障共同构成稳定性挑战。

---

## 3. 社区热点 Issues

| # | Issue | 重要性 | 社区反应 |
|---|-------|--------|---------|
| [#16857](https://github.com/openai/codex/issues/16857) | **"思考"动画导致 GPU 高占用** — 微小无用的动画在推理期间持续消耗 GPU 资源 | 🔥 **性能标杆问题** | 35 评论 / 34 👍，用户实测定位到具体动画组件，已成为长期未修的高赞痛点 |
| [#10823](https://github.com/openai/codex/issues/10823) | **超长会话无法压缩上下文** — 运行数月的会话突然报"高需求"错误，无法 compact | 🔥 **数据可靠性** | 23 评论，核心用户工作流中断，暴露自动压缩策略的容量瓶颈 |
| [#20741](https://github.com/openai/codex/issues/20741) | **更新后项目聊天历史消失** — 26.429 版本更新导致 Desktop 端历史记录丢失 | 🔥 **数据丢失风险** | 19 评论 / 10 👍，Pro 用户受影响，涉及版本回滚与数据恢复 |
| [#21700](https://github.com/openai/codex/issues/21700) | **Computer Use Chrome 扩展下架** — Chrome Web Store 页面返回错误，无离线安装包 | ⚠️ **生态依赖断裂** | 11 评论 / 16 👍，企业部署受阻，急需官方提供替代分发渠道 |
| [#5059](https://github.com/openai/codex/issues/5059) | **MCP prompts 支持请求** — 希望 Codex 支持 MCP 的 prebuilt prompts，通过 `/` 触发 | 💡 **生态扩展** | 9 评论 / 30 👍，高赞功能请求，MCP 生态完整性的关键缺口 |
| [#23740](https://github.com/openai/codex/issues/23740) | **Windows Terminal 原始 ANSI 序列泄露** — 0.131.0+ 版本 TUI 渲染回归 | ⚠️ **Windows 体验崩溃** | 8 评论 / 7 👍，阻断性回归，0.130.0 为最后可用版本 |
| [#24373](https://github.com/openai/codex/issues/24373) | **Google Sheets 只读无法写入** — 重装插件后权限范围丢失，共享配额返回 429 | ⚠️ **集成故障** | 6 评论，OAuth 权限与配额管理的复合问题 |
| [#24006](https://github.com/openai/codex/issues/24006) | **macOS 更新后数据库无法访问** — 应用无法启动，本地数据库锁定 | ⚠️ **启动阻断** | 5 评论 / 5 👍，与 #20741 形成 macOS 端稳定性问题簇 |
| [#24145](https://github.com/openai/codex/issues/24145) | **$ 菜单被未配置的无关插件撑爆** — 技能列表出现用户从未见过的插件 | ⚠️ **配置污染** | 5 评论 / 3 👍，疑似 marketplace 同步或默认启用策略异常 |
| [#24431](https://github.com/openai/codex/issues/24431) | **GPT-5.5 性能显著下降** — 同一模型近期修复能力下滑，甚至破坏原有功能 | 🔥 **模型质量警报** | 4 评论，实时质量反馈，需与训练/推理团队联动排查 |

---

## 4. 重要 PR 进展

| # | PR | 功能/修复内容 |
|---|-----|-------------|
| [#24476-24498](https://github.com/openai/codex/pull/24476) | **Vim 模式完整栈（9 连 PR）** | fcoury-oai 系统性实现：行尾修正 → change 操作 → find/till 移动 → prose 文本对象 → tag 文本对象 → 数字前缀 → 命名寄存器 → 可视模式 → **dot-repeat**。Codex TUI 首次具备生产级 Vim 编辑体验 |
| [#24489](https://github.com/openai/codex/pull/24489) | **Markdown 表格 App 风格渲染** | 将终端表格从 box-drawing 改为行分隔的 App 风格，降低视觉重量，统一跨端体验 |
| [#24358](https://github.com/openai/codex/pull/24358) | **Review Story 交互驾驶舱** | 为 AI 生成的大规模变更提供"概念阅读顺序"引导式审阅界面，从文件级 diff 转向意图级 review |
| [#24350](https://github.com/openai/codex/pull/24350) | **Review Story 可复用 API** | 提取 review story 的底层数据结构，支持多审阅表面复用，为 #24358 提供基础 |
| [#24494](https://github.com/openai/codex/pull/24494) | **禁用 `request_user_input` 工具配置项** | 新增配置开关，允许自动化场景关闭人工输入请求，减少 CI/批处理场景的中断 |
| [#24468](https://github.com/openai/codex/pull/24468) | **`CODEX_ENV_FILE` 环境持久化** | 插件/hook 可通过写入 session env 文件向后续命令传递环境变量，无需重写用户可见命令 |
| [#24473](https://github.com/openai/codex/pull/24473) | **远程控制 WebSocket 任务停滞暴露** | 增强远程控制连接 setup/teardown 的日志可观测性，区分离线故障与预期关闭 |
| [#24474](https://github.com/openai/codex/pull/24474) | **Rollout 写入 OS 错误日志** | 修复 JSONL 损坏诊断：记录底层 OS 错误，定位部分写入后重试导致的重复追加 |
| [#24376](https://github.com/openai/codex/pull/24376) | **拒绝空 base64 图片输入** | 拦截已知"毒线程"模式，防止无效 `image_url` 在后续 turn/resume 中反复失败 |
| [#24459](https://github.com/openai/codex/pull/24459) | **macOS stderr 隔离修复** | 解决 `MallocStackLogging` 等诊断信息污染 TUI 视口的问题（修复 #17139） |

---

## 5. 功能需求趋势

基于 50 条活跃 Issue 分析，社区关注呈现 **"三极分化"**：

| 方向 | 热度 | 典型表现 |
|------|------|---------|
| **Windows 平台质量** | 🔥🔥🔥 | TUI 渲染崩溃、沙箱配置失败、权限问题、WSL 兼容——Windows 用户占比上升但体验明显滞后于 macOS |
| **数据持久性与可靠性** | 🔥🔥🔥 | 历史消失、数据库锁定、上下文压缩失败、auto-compact 策略——长周期工作流的信任危机 |
| **Vim/CLI 生产力** | 🔥🔥 | 9 连 PR 反映官方投入，社区同步反馈 TUI 各类边缘 case，终端体验进入快速迭代期 |
| **MCP 生态完整性** | 🔥🔥 | Prompts 支持（#5059）高悬，tools 已成熟但 prompts/resources 未对齐，制约代理互操作性 |
| **模型可控性与透明度** | 🔥 | 性能波动感知（#24431）、速率限制策略（#19607, #24366）、goal/plan 模式耦合——用户需要更细粒度控制 |
| **远程/子代理稳定性** | 🔥 | 子代理循环死亡（#23971）、重连风暴（#24475）、远程技能不可见（#24497）——分布式代理架构的韧性不足 |

---

## 6. 开发者关注点

**痛点矩阵：**

| 层级 | 具体问题 | 影响面 |
|------|---------|--------|
| **阻断性** | Windows TUI 完全不可用（0.131.0+）、macOS 数据库锁定、历史记录丢失 | 工作流终止，数据风险 |
| **高频摩擦** | GPU 空转（#16857）、上下文压缩失败（#10823）、Google 集成权限漂移（#24373） | 每日消耗注意力与资源 |
| **生态锁定** | Chrome 扩展下架无替代、MCP prompts 缺失 | 外部依赖不可控，集成深度受限 |
| **认知负担** | 未配置插件自动出现（#24145）、plan/goal 交互逻辑混乱（#24218, #24466） | 心智模型与系统行为不匹配 |

**开发者呼声最高的改进：**
1. **Windows 专项质量冲刺** — 当前版本差异已构成平台歧视感知
2. **上下文生命周期可观测性** — 压缩触发时机、token 消耗、剩余窗口的实时透明化
3. **离线/企业分发能力** — 扩展、插件、模型的可私有化部署路径
4. **模型版本锁定与回滚** — 针对 #24431 类质量漂移，允许用户固定推理版本

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-05-26

## 今日速览

今日社区无新版本发布，但代码活跃度较高：**Agent 子系统稳定性**仍是核心战场，多个 P1 级挂起/恢复问题持续获得维护者关注；同时 **Auto Memory 安全与质量**成为新焦点，3 个相关 Issue 同日更新。PR 侧可见开发者积极补位，从 Windows 粘贴支持到工具调用超时配置，社区贡献覆盖多个长尾场景。

---

## 社区热点 Issues（Top 10）

| # | 标题 | 优先级 | 关键动态 | 链接 |
|---|------|--------|---------|------|
| **#24353** | Robust component level evaluations | P1 | 行为评估体系 EPIC，已积累 76 个测试用例覆盖 6 个 Gemini 版本，维护者持续迭代评估基础设施 | [链接](https://github.com/google-gemini/gemini-cli/issues/24353) |
| **#21409** | Generalist agent hangs | P1 | **高赞（8👍）用户痛点**：generalist agent 无限挂起，简单如创建文件夹操作也会卡住一小时；绕过方案是显式禁用子 agent | [链接](https://github.com/google-gemini/gemini-cli/issues/21409) |
| **#22323** | Subagent recovery after MAX_TURNS reported as GOAL success | P1 | 严重状态误报：`codebase_investigator` 达到最大轮次后仍返回"success"，隐藏中断事实，影响用户信任 | [链接](https://github.com/google-gemini/gemini-cli/issues/22323) |
| **#22745** | AST-aware file reads, search, and mapping | P2 | 代码库智能导航的架构级探索，旨在减少 token 浪费和误读边界，关联 3 个子 Issue 形成工作流 | [链接](https://github.com/google-gemini/gemini-cli/issues/22745) |
| **#21968** | Gemini does not use skills and sub-agents enough | P2 | **典型能力闲置问题**：用户配置的 gradle/git skills 几乎不被自动调用，需显式指令才生效，反映 agent 调度策略缺陷 | [链接](https://github.com/google-gemini/gemini-cli/issues/21968) |
| **#22441** | Raw XML tags leaking into standard output | P2 | **今日更新** 的 UI 污染问题：`<function_calls>` 等内部标签直接输出到终端，Windows/WSL 环境报告 | [链接](https://github.com/google-gemini/gemini-cli/issues/22441) |
| **#25166** | Shell command execution stuck with "Waiting input" | P1 | 命令已完成但 UI 仍显示"Awaiting user input"，简单命令也会触发，影响核心交互闭环 | [链接](https://github.com/google-gemini/gemini-cli/issues/25166) |
| **#26525** | Deterministic redaction and reduce Auto Memory logging | P2 | **新批次**：Auto Memory 在模型上下文阶段才脱敏，存在隐私泄露窗口；需确定性规则前置处理 | [链接](https://github.com/google-gemini/gemini-cli/issues/26525) |
| **#26523** | Surface or quarantine invalid Auto Memory inbox patches | P2 | 无效 patch 被静默跳过，aggregate dismiss 仅清理有效项，导致"幽灵补丁"累积 | [链接](https://github.com/google-gemini/gemini-cli/issues/26523) |
| **#26522** | Stop Auto Memory retrying low-signal sessions indefinitely | P2 | 低价值会话因未被标记为"已处理"而反复提取，浪费计算资源 | [链接](https://github.com/google-gemini/gemini-cli/issues/26522) |

---

## 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 功能/修复要点 | 链接 |
|---|------|------|-------------|------|
| **#26088** | F10 fallback for approval mode cycling | 🟡 Open | Windows/WezTerm 兼容性修复：`Shift+Tab` 解析失败时 F10 作为备用快捷键循环审批模式 | [链接](https://github.com/google-gemini/gemini-cli/pull/26088) |
| **#27440** | `[Skill]` tag in slash command autocomplete | 🟡 Open | UI 一致性：为 skill 命令添加 `[Skill]` 标签，与现有 `[MCP]`/`[Agent]` 对齐，降低用户认知成本 | [链接](https://github.com/google-gemini/gemini-cli/pull/27440) |
| **#27438** | Configurable per-tool-call timeout (`tools.callTimeout`) | 🟡 Open | 全局工具执行超时机制：`withTimeout()` 工具函数 + `ToolExecutor` 统一 enforcement，解决挂起类问题 | [链接](https://github.com/google-gemini/gemini-cli/pull/27438) |
| **#27151** | `/compress` slash command for ACP | 🟡 Open | ACP 协议补齐：长会话历史压缩命令，防止上下文窗口耗尽时静默失败 | [链接](https://github.com/google-gemini/gemini-cli/pull/27151) |
| **#27054** | Windows image pasting and clipboard styling | 🟡 Open | Windows Terminal 图片粘贴支持：处理 bracketed-paste 空序列，添加粘贴图片的视觉样式 | [链接](https://github.com/google-gemini/gemini-cli/pull/27054) |
| **#27418** | Non-interactive shell respects `enableInteractiveShell: false` | 🟡 Open | **P1 修复**：native bridge 稳定性，非 UTF-8 字节和堆溢出场景的高保真处理 | [链接](https://github.com/google-gemini/gemini-cli/pull/27418) |
| **#27406** | Configurable numeric routing rules | 🟡 Open | 模型路由从硬编码二值阈值升级为多层级评分映射，用户可在 `settings.json` 自定义复杂度→模型分配 | [链接](https://github.com/google-gemini/gemini-cli/pull/27406) |
| **#27429** | Handle EBADF in resizePty catch block | 🟡 Open | `--resume` 场景 PTY fd 失效崩溃修复：将 EBADF 与 ESRCH 同等处理，避免 ioctl 失败 | [链接](https://github.com/google-gemini/gemini-cli/pull/27429) |
| **#27292** | Restore non-interactive stdin raw mode on exit | 🟡 Open | Ctrl+C 退出安全性：异常路径下恢复 raw mode，防止终端状态污染 | [链接](https://github.com/google-gemini/gemini-cli/pull/27292) |
| **#27179** | Local Gemma 4 support | 🟡 Open | 本地模型支持扩展：超时时间适配 Gemma 4 推理特性 | [链接](https://github.com/google-gemini/gemini-cli/pull/27179) |

---

## 功能需求趋势

基于 50 条活跃 Issue 分析，社区关注呈现 **"一核两翼"** 格局：

```
┌─────────────────────────────────────────┐
│           核心：Agent 可靠性              │
│  （子 agent 调度、状态报告、MAX_TURNS 恢复） │
├─────────────────────────────────────────┤
│  左翼：智能体能力深度        右翼：工程体验 │
│  • AST-aware 代码导航        • 终端 UI 性能 │
│  • Skill/Sub-agent 自动调用   • 跨平台兼容 │
│  • 自我验证（run changes）    • 配置灵活性  │
│  • 浏览器自动化增强           • 内存/上下文管理│
└─────────────────────────────────────────┘
```

**新兴趋势**：Auto Memory 三连 Issue（#26522-26525）标志着**长期记忆系统的质量与隐私**进入维护者优先队列，从"功能可用"转向"安全可控"。

---

## 开发者痛点与高频需求

| 痛点类别 | 具体表现 | 代表 Issue |
|---------|---------|-----------|
| **Agent 调度黑箱** | 子 agent 何时/为何被调用不可预测，用户被迫手动干预 | #21968, #22093 |
| **状态语义失信** | "success" ≠ 真正完成，MAX_TURNS 等边界条件被掩盖 | #22323, #21409 |
| **终端状态污染** | 退出后 raw mode 未恢复、PTY fd 失效、外部编辑器后屏幕损坏 | #27292, #27429, #24935 |
| **Windows 二等公民** | 粘贴解析、快捷键、图片输入等多处兼容缺口 | #26088, #27054, #22441 |
| **工具超时不可控** | 命令已完成但 UI 挂起，无全局 timeout 机制 | #25166 → #27438 |
| **记忆系统不透明** | patch 验证失败静默跳过、低价值会话无限重试、脱敏时机过晚 | #26523-26525 |

**高频需求关键词**：`backgroundable`（后台 agent）、`AST-aware`、 `self-validate`、`deterministic redaction`、`flicker-free`、`bracketed-paste`。

---

*日报基于 google-gemini/gemini-cli 公开数据生成，仅供技术参考。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-05-26

---

## 1. 今日速览

今日 Copilot CLI 发布 **v1.0.55-0** 补丁版本，重点修复 SEA（单可执行文件应用）模式下的扩展启动问题。社区 Issues 活跃度较高，过去 24 小时更新 18 条，其中 5 条为当日新建，聚焦会话恢复、Agent 编排、插件生命周期等核心场景；无新增 PR。

---

## 2. 版本发布

### v1.0.55-0
| 属性 | 内容 |
|:---|:---|
| 类型 | 补丁修复 |
| 核心修复 | Extensions 在 SEA（Single-Executable Application）模式下正确启动 |
| 影响范围 | 使用单文件分发格式的用户及企业部署场景 |

> **技术背景**：SEA 是 Node.js 20+ 支持的打包方案，将应用打包为独立可执行文件。此前扩展加载路径解析在 SEA 环境下存在兼容性问题，导致插件生态无法正常运行。

🔗 [Release 页面](https://github.com/github/copilot-cli/releases)

---

## 3. 社区热点 Issues

### 🔴 高优先级：功能缺陷与回归

| # | Issue | 标签 | 核心问题 | 社区反应 | 重要性 |
|:---|:---|:---|:---|:---|:---|
| **#3508** | [Extension lifecycle hooks receive empty workingDirectory since CLI ~1.0.51](https://github.com/github/copilot-cli/issues/3508) | `area:plugins` | **v1.0.51 回归缺陷**：插件生命周期钩子（`onSessionStart`/`onPreToolUse`/`onUserPromptSubmitted`）的 `workingDirectory` 字段变为空字符串，破坏依赖工作目录的插件功能 | 当日创建即关闭，微软员工 `brycecutt-msft` 快速响应，推测已内部修复 | ⭐⭐⭐⭐⭐ 插件生态基础能力断裂 |
| **#3515** | [resume-auto-cd sets CWD to / when session was created by external producer](https://github.com/github/copilot-cli/issues/3515) | `area:sessions` `area:configuration` | **新特性 `resume-auto-cd` 与外部工具链冲突**：通过 Agency CLI 等外部生产者创建的会话，恢复时工作目录被错误设置为根目录 `/` | 当日新建，无评论，需关注跨工具生态兼容性 | ⭐⭐⭐⭐⭐ 企业自动化场景阻断 |
| **#3514** | [list_agents returns empty while background agents are still visibly running in UI](https://github.com/github/copilot-cli/issues/3514) | `area:agents` `area:context-memory` `area:tools` | **Agent 编排状态不一致**：UI 显示 7 个后台 Agent 活跃，但 `list_agents` 工具返回空，导致助手错误创建重复任务 | 当日新建，涉及多 Agent 协作核心机制 | ⭐⭐⭐⭐⭐ 可靠性缺陷 |
| **#3517** | [Queued user messages + system_notifications delivered out of send order](https://github.com/github/copilot-cli/issues/3517) | `area:agents` | **消息队列时序混乱**：助手执行工具调用期间，用户消息与系统通知的队列出现非确定性乱序交付 | 当日新建，长会话高并发场景下的关键正确性问题 | ⭐⭐⭐⭐⭐ 对话状态一致性 |

### 🟡 用户体验与交互

| # | Issue | 标签 | 核心问题 | 社区反应 | 重要性 |
|:---|:---|:---|:---|:---|:---|
| **#2776** | [Shift+Enter currently submits the prompt instead of inserting a new line](https://github.com/github/copilot-cli/issues/2776) | `area:input-keyboard` | 多行输入体验缺陷：Shift+Enter 未实现换行而是直接提交，复杂提示词编辑困难 | 创建 40 天，5 条评论，持续有用户反馈，👍 待积累 | ⭐⭐⭐⭐ 高频交互痛点 |
| **#2643** | [preToolUse: silent command rewrite via updatedInput — confirmation dialog appears even with permissionDecision: allow](https://github.com/github/copilot-cli/issues/2643) | `area:plugins` | **插件静默重写能力缺失**：`preToolUse` 钩子设置 `permissionDecision: allow` 仍强制弹确认框，无法实现自动化命令重写 | 创建 45 天，9 条深度技术讨论，插件开发者核心诉求 | ⭐⭐⭐⭐ 扩展性受限 |
| **#3512** | [Notifications on the github app of remote sessions](https://github.com/github/copilot-cli/issues/3512) | `area:sessions` `area:agents` | 远程会话阻塞时无移动端通知，需主动轮询检查 Agent 状态 | 当日新建，远程协作体验缺口 | ⭐⭐⭐⭐ 异步工作流支持 |

### 🟢 企业/生态集成

| # | Issue | 标签 | 核心问题 | 社区反应 | 重要性 |
|:---|:---|:---|:---|:---|:---|
| **#3442** | [v1.0.51 Remote sessions are not enabled](https://github.com/github/copilot-cli/issues/3442) | `area:sessions` `area:enterprise` | 企业版远程会话功能被强制禁用，组织管理员配置不透明 | 创建 5 天，10 👍，企业用户集中反馈，影响规模化部署 | ⭐⭐⭐⭐⭐ 企业采用阻碍 |
| **#2979** | [GitHub Android app prevents Copilot remote use after monthly request limit reached](https://github.com/github/copilot-cli/issues/2979) | `area:sessions` | 计费策略与远程会话的冲突：达到 premium 限额后，Android 端远程会话变为只读，尽管仍有付费额度 | 创建 30 天，跨产品（GitHub App × Copilot CLI）计费逻辑不一致 | ⭐⭐⭐⭐ 商业逻辑缺陷 |
| **#2854** | [Google gemini is not available in copilot CLI?](https://github.com/github/copilot-cli/issues/2854) | `area:models` | 请求接入 Google Gemini 模型，目前 CLI 模型选择受限 | 创建 36 天，**15 👍 为今日最高**，社区强烈需求多模型支持 | ⭐⭐⭐⭐ 模型生态开放性 |

---

## 4. 重要 PR 进展

> **今日无新增或更新的 Pull Request**

过去 24 小时 PR 活动为零，结合 v1.0.55-0 的快速发布与 #3508 的当日开闭，推测团队可能处于 **内部冲刺或代码冻结期**，修复通过内部渠道直接合入主干。建议关注后续是否有批量 PR 同步公开。

---

## 5. 功能需求趋势

基于 18 条活跃 Issues 的聚类分析：

| 趋势方向 | 涉及 Issues | 热度指标 | 核心诉求 |
|:---|:---|:---|:---|
| **Agent 编排与状态一致性** | #3514, #3517, #3512, #2458 | 4 条，含 2 条当日新建 | 多 Agent 并行、消息时序、生命周期管理成为 CLI 从"聊天工具"向"自主执行引擎"演进的关键瓶颈 |
| **插件/扩展生态成熟度** | #3508, #2643, #3479, #2458 | 4 条 | 钩子 API 稳定性、静默自动化能力、扩展发现机制——企业定制化依赖此层 |
| **会话管理与跨设备连续性** | #3515, #3442, #2979, #3518, #1604 | 5 条 | `resume-auto-cd`、远程会话、归档恢复、外部工具链集成，反映"会话即工作空间"的产品定位 |
| **模型选择多元化** | #2854 | 15 👍 领跑 | 社区明确要求突破 OpenAI 独占，接入 Gemini 等替代模型 |
| **IDE/LSP 工具链深度整合** | #3516 | 当日新建 | 强制 LSP 使用规则被违反，反映对结构化代码理解能力的刚性需求 |

---

## 6. 开发者痛点总结

| 痛点层级 | 具体表现 | 代表 Issue |
|:---|:---|:---|
| **🔴 阻断性缺陷（Blockers）** | 版本回归导致插件失效、新特性与外部工具链冲突、Agent 状态 API 与 UI 不一致 | #3508, #3515, #3514 |
| **🟠 高频摩擦（Friction）** | 键盘交互不符合终端用户习惯（Shift+Enter）、远程会话权限配置黑盒、达到限额后跨端体验断裂 | #2776, #3442, #2979 |
| **🟡 扩展性天花板（Ceiling）** | 插件无法静默重写命令、扩展不可通过 `/env` 发现、模型选择受限 | #2643, #3479, #2854 |
| **🟢 异步协作缺口（Async Gap）** | 长时运行的远程 Agent 缺乏移动端通知、会话归档后无法恢复 | #3512, #3518 |

---

> **分析师备注**：今日数据呈现"高 Issues 活跃度、零 PR 可见度"的异常结构，建议持续关注 GitHub 是否调整公开开发流程。v1.0.51-v1.0.55 的快速迭代中，SEA 修复与 `resume-auto-cd` 新特性引入伴随明显回归，质量管控节奏值得观察。

---

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-05-26

## 1. 今日速览

今日社区无新版本发布，但开发者活跃度持续。核心关注点集中在 **Python→TypeScript 重构争议**（PR #1707 持续发酵）、**嵌套 Skill 目录兼容性问题**（与 Codex 生态互操作性），以及 **WebSocket API 下 Shell 工具卡死**的新 Bug 报告。后台任务超时调参需求亦反映 AI 代码生成场景下的实际运维痛点。

---

## 2. 版本发布

**无** — 过去 24 小时未发布新版本。

---

## 3. 社区热点 Issues

| # | Issue | 状态 | 重要性分析 | 社区反应 |
|---|-------|------|-----------|---------|
| [#1894](https://github.com/MoonshotAI/kimi-cli/issues/1894) | 递归加载嵌套 Skill 目录（Codex 兼容） | 🔴 OPEN | **生态互操作性关键缺口**。Codex 已支持 `.agents/skills/{name}/skills/xxx` 嵌套结构，Kimi 不兼容导致同一仓库无法跨工具复用 Skill，直接阻碍多 Agent 协作工作流标准化。 | 4 条讨论，作者提供完整复现案例，尚无官方回应 |
| [#2232](https://github.com/MoonshotAI/kimi-cli/issues/2232) | 后台任务支持调整 timeout | 🔴 OPEN | **运行时可控性刚需**。AI 生成代码常低估执行时长，中途 kill 后重跑浪费 Token 与时间，反映"乐观估计"是系统性问题而非个案。 | 2 条讨论，需求描述清晰，属高频痛点 |
| [#2365](https://github.com/MoonshotAI/kimi-cli/issues/2365) | `kimi-code-worker` WebSocket Shell 工具挂死 | 🔴 OPEN | **稳定性阻塞问题**。v1.44.0 中 WebSocket 模式下 Shell 工具无响应，影响远程/容器化部署场景，需紧急排查。 | 今日新建，0 评论，待官方确认 |
| [#2173](https://github.com/MoonshotAI/kimi-cli/issues/2173) | 为 Coding Plan 添加 crow-cli 支持 | 🟢 CLOSED | **第三方工具集成诉求**。作者因付费后发现 API 接入方式变更而提出，反映商业策略与开发者预期的错位。 | 0 评论即关闭，可能为私下沟通或策略性关闭 |

> 注：实际 24h 内更新 Issue 仅 4 条，以上为全部覆盖。

---

## 4. 重要 PR 进展

| # | PR | 状态 | 功能/修复内容 | 评估 |
|---|-----|------|------------|------|
| [#1707](https://github.com/MoonshotAI/kimi-cli/pull/1707) | 重构：Python → Bun + TypeScript + React Ink | 🔴 OPEN | **全量重写**：166 个 TS/TSX 文件、~32k 行代码、37 个测试文件、211 次提交。声称解决 Python 运行时性能与分发问题，采用 React Ink 构建 TUI。 | **极具争议**：标题"Python 是彻底的失败"引发社区分裂。技术债务清理 vs. 现有生态兼容性风险，维护成本与贡献者迁移成本极高。4 月创建至今仍在讨论，无合并迹象。 |

> 注：实际 24h 内更新 PR 仅 1 条。

---

## 5. 功能需求趋势

基于当前 Issues 提炼三大方向：

| 趋势方向 | 代表 Issue | 核心诉求 |
|---------|-----------|---------|
| **Agent 生态互操作** | #1894 | 与 OpenAI Codex、crow-cli 等工具链的 Skill/配置格式兼容，避免供应商锁定 |
| **运行时可控性** | #2232 | 任务超时、资源限制等执行参数的动态调整，适应 AI 生成代码的不确定性 |
| **远程/服务化部署稳定性** | #2365 | WebSocket API、Worker 进程在生产环境中的可靠性，支撑 CI/CD 与云端场景 |

---

## 6. 开发者关注点

| 痛点类别 | 具体表现 | 影响程度 |
|---------|---------|---------|
| **语言栈争议** | PR #1707 的激进重构引发"Python vs. TS"路线之争，现有 Python 插件/脚本生态面临废弃风险 | 🔴 高 |
| **AI 估计偏差** | 后台任务超时机制僵化，模型乐观估计导致频繁中断重试，浪费计算资源 | 🟡 中高 |
| **企业集成阻塞** | Skill 目录不兼容、API 接入方式变更（如 Coding Plan 去 API Key 化），增加迁移成本 | 🟡 中高 |
| **远程调试困难** | WebSocket 模式下 Shell 工具无响应，缺乏诊断接口，容器/K8s 场景排查成本高 | 🟡 中 |

---

*日报基于 GitHub 公开数据生成，不代表 Moonshot AI 官方立场。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-05-26

## 今日速览

今日社区活跃度极高，**模型兼容性与性能问题**成为焦点：Kimi k2.5/k2.6 工具调用故障、GPT 响应延迟、DeepSeek V4 Pro 降价后的配额调整引发广泛讨论。开发侧聚焦 TUI 体验优化与配置灵活性，多个修复 PR 进入评审阶段。

---

## 社区热点 Issues

| # | 状态 | 标题 | 作者 | 评论 | 👍 | 关键看点 |
|---|:---:|------|------|:---:|:---:|---------|
| [#20650](https://github.com/anomalyco/opencode/issues/20650) | 🔴 OPEN | Kimi k2.5 has issues with tool calling | kjj9 | 69 | 4 | **最高热度**。JSON 解析失败导致工具调用异常，模型尝试调用不存在的 `invalid` 工具，影响核心 Agent 工作流 |
| [#29079](https://github.com/anomalyco/opencode/issues/29079) | 🔴 OPEN | GPT Models takes too long to respond | MarcoLouisNarca | 44 | 24 | GPT 5.4 xhigh 响应时间极不稳定，简单指令耗时数分钟，24 个赞反映普遍痛点 |
| [#27167](https://github.com/anomalyco/opencode/issues/27167) | 🔴 OPEN | [FEATURE]: Add native session goals with /goal | jorgitin02 | 24 | 31 | **高赞需求**。提议原生持久化会话目标管理，替代自定义 slash 命令，获 31 赞 |
| [#2156](https://github.com/anomalyco/opencode/issues/2156) | 🟢 CLOSED | Stale LSP errors | tylerlaprade | 20 | 1 | Claude 修复后仍看到旧诊断信息，LSP 状态同步问题已关闭 |
| [#13838](https://github.com/anomalyco/opencode/issues/13838) | 🔴 OPEN | Compaction replay injects fake user message | jdocker8 | 15 | 3 | 会话压缩后注入合成消息 `"What did we do so far?"` 导致模型误生成摘要，干扰用户体验 |
| [#24722](https://github.com/anomalyco/opencode/issues/24722) | 🔴 OPEN | DeepSeek thinking mode: reasoning_content not passed back | moe5445 | 13 | 10 | DeepSeek V4 系列工具调用时遗漏 reasoning_content，触发 API 400 错误，影响推理链完整性 |
| [#29129](https://github.com/anomalyco/opencode/issues/29129) | 🔴 OPEN | OpenAI stream intermittently freezes | riccardo-algorime | 12 | 10 | 流式响应卡死：UI 显示工作中但无输出，CPU 空转，需手动重启 |
| [#27906](https://github.com/anomalyco/opencode/issues/27906) | 🔴 OPEN | v1.15.1+ Breaks Bun Installs | Silvenga | 11 | 7 | postinstall 脚本与 Bun 全局包安装冲突，阻断非 npm 用户升级路径 |
| [#28846](https://github.com/anomalyco/opencode/issues/28846) | 🔴 OPEN | Adjust Go usage limits after DeepSeek V4 Pro 75% price reduction | icocoon | 11 | 15 | **商业策略焦点**。DeepSeek 永久降价后，OpenCode Go 订阅配额未同步调整，用户呼吁性价比对齐 |
| [#5200](https://github.com/anomalyco/opencode/issues/5200) | 🔴 OPEN | /compact should use OpenAI Responses API compaction | ddbaron | 7 | 22 | 提议对接 OpenAI 原生压缩 API，替代当前方案，22 赞长期需求 |

---

## 重要 PR 进展

| # | 状态 | 标题 | 作者 | 功能/修复内容 |
|---|:---:|------|------|-------------|
| [#29285](https://github.com/anomalyco/opencode/pull/29285) | 🟢 CLOSED | feat(app): make server sdk + sync state global | Brendonovich | 全局化服务器 SDK 与同步状态，新增多服务器首页，为 Beta 版引入 Inter 字体 |
| [#29237](https://github.com/anomalyco/opencode/pull/29237) | 🔵 OPEN | feat(tui): add /disconnect command for providers | iiroak | **新功能**：TUI 新增 `/disconnect` 命令，无需编辑配置即可断开模型提供商（关闭 #23923） |
| [#29284](https://github.com/anomalyco/opencode/pull/29284) | 🔵 OPEN | fix(cli): add trailing newline to --help output | LifeJiggy | 修复 `--help` 输出缺少换行导致 shell 提示符粘连的 UI 问题（关闭 #28606） |
| [#26419](https://github.com/anomalyco/opencode/pull/26419) | 🔵 OPEN | fix(opencode): make bash tool description parameter optional | RheagalFire | 降低 bash 工具调用门槛，description 参数可选化（关闭 #20669） |
| [#29282](https://github.com/anomalyco/opencode/pull/29282) | 🔵 OPEN | fix(config): support ${env:VAR} syntax | LifeJiggy | 配置环境变量替换支持 `${env:VAR}` 标准语法，兼容用户既有习惯（关闭 #27853） |
| [#29281](https://github.com/anomalyco/opencode/pull/29281) | 🔵 OPEN | fix(opencode): prevent process.exit() killing parent terminal on Windows | LifeJiggy | **Windows 关键修复**：避免 ExitProcess() 向控制台组广播 CTRL_CLOSE_EVENT 导致父终端崩溃（关闭 #28673） |
| [#29265](https://github.com/anomalyco/opencode/pull/29265) | 🔵 OPEN | fix(app): restore queued follow-up setting | GriffinBoris | 批量修复 5 个相关 Issue，恢复队列化后续操作设置，解决会话中断问题 |
| [#29068](https://github.com/anomalyco/opencode/pull/29068) | 🔵 OPEN | refactor(core): move database schema ownership | thdxr | 核心重构：将 Drizzle schema 与迁移从 opencode 包移至 core 包，统一数据库所有权 |
| [#28592](https://github.com/anomalyco/opencode/pull/28592) | 🔵 OPEN | fix(cli): handle OSC52 clipboard passthrough under GNU screen | lingfish | 修复 GNU screen 下 OSC52 剪贴板透传，区分 tmux 与 screen 的 DCS 序列（关闭 #28590） |
| [#29280](https://github.com/anomalyco/opencode/pull/29280) | 🔵 OPEN | feat: add simplify built-in skill | AbdoKnbGit | **新功能**：内置 `simplify` 技能，基于 git diff 自动审查并清理代码（关闭 #29272） |

---

## 功能需求趋势

```
┌─────────────────────────────────────────────────────────┐
│  🔥 模型生态适配（最高优先级）                              │
│     • Kimi k2.5/k2.6 工具调用兼容性（#20650, #29154）      │
│     • DeepSeek V4 Pro 降价后配额重定价（#28846, #28962）    │
│     • GPT 系列响应延迟优化（#29079）                       │
├─────────────────────────────────────────────────────────┤
│  ⚡ 性能与稳定性                                          │
│     • 流式响应卡死/CPU 空转（#29129）                      │
│     • 会话压缩死循环（#27924）                             │
│     • 上下文 token 计数低估（#24143）                      │
├─────────────────────────────────────────────────────────┤
│  🛠️ 开发者体验（DX）                                      │
│     • 原生会话目标管理 /goal（#27167）                     │
│     • 单仓库子项目目录隔离（#29271）                        │
│     • Web UI 手动重载实例（#29266）                        │
├─────────────────────────────────────────────────────────┤
│  🔧 配置与部署灵活性                                       │
│     • Bun 等非 npm 包管理器兼容（#27906）                   │
│     • 环境变量语法标准化 ${env:VAR}（#29282）              │
│     • BSD 系统支持（#3476）                                │
└─────────────────────────────────────────────────────────┘
```

---

## 开发者关注点

| 痛点类别 | 具体表现 | 相关 Issue |
|---------|---------|-----------|
| **模型可靠性** | 工具调用 JSON 解析失败、reasoning_content 丢失、响应时间不可预测 | #20650, #24722, #29079 |
| **订阅价值感知** | DeepSeek 降价后 OpenCode Go 配额未调整，用户质疑性价比 | #28846, #29115, #28962 |
| **会话状态管理** | 压缩机制注入伪消息、无限压缩循环、LSP 诊断残留 | #13838, #27924, #2156 |
| **跨平台兼容性** | Windows 终端崩溃、Bun 安装阻断、GNU screen 剪贴板失效 | #29281, #27906, #28592 |
| **TUI/CLI 细节** | help 输出格式、Provider 断开命令缺失、fork 会话 ID 异常 | #29284, #29237, #29262 |

---

> 📌 **数据来源**: [anomalyco/opencode](https://github.com/anomalyco/opencode) | 统计周期: 2026-05-25 至 2026-05-26

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-05-26

## 今日速览

今日 Pi 社区活跃度极高，**mitsuhiko** 连续提交两个关键修复针对 OpenAI Codex 的 429 重试与 WebSocket 空闲超时问题，成为最受关注的技术焦点。同时社区密集关闭了 20+ 个 Issue/PR，涉及技能命令还原、终端渲染优化、成本计算准确性等多个用户体验改进。

---

## 社区热点 Issues

| # | 状态 | 标题 | 作者 | 评论 | 重要性 |
|---|------|------|------|------|--------|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | 🔴 OPEN | **openai-codex TUI 卡死 "Working..." 无响应** | liushuaiiu | 19 💬 | **核心痛点**：Codex/gpt-5.5 交互式 TUI 频繁卡住，需按 Escape 强制中断，已获 8 👍 高关注，mitsuhiko 已提交关联修复 |
| [#4942](https://github.com/earendil-works/pi/issues/4942) | ✅ CLOSED | coding-agent CLI 主进程完成后不退出 | ai-llt | 6 💬 | 异步 Promise 未 await 导致进程挂死，基础稳定性问题 |
| [#4801](https://github.com/earendil-works/pi/issues/4801) | 🔴 OPEN | DeepSeek v4 pro xhigh 的 reasoning_effort 参数 400 错误 | zaskara | 5 💬 | OpenRouter 模型参数兼容性问题，影响高端模型使用 |
| [#4929](https://github.com/earendil-works/pi/issues/4929) | 🔴 OPEN | `pi update` 与 pnpm minimumReleaseAge 静默保持旧版本 | ashwch | 5 💬 | 包管理器版本策略导致用户无法及时获取更新 |
| [#4666](https://github.com/earendil-works/pi/issues/4666) | 🔴 OPEN | 429 Retry-After 忽略 maxRetryDelayMs 上限；Esc /new 恢复异常 | tokenflood | 3 💬 | **mitsuhiko PR #4991 直接针对此问题**：Provider 重试延迟无上限导致"永久等待" |
| [#4990](https://github.com/earendil-works/pi/issues/4990) | ✅ CLOSED | 编辑工具全天失败：Validation failed for "edit" | F1LT3R | 3 💬 | 升级后出现的工具参数验证回归，影响核心编码工作流 |
| [#4841](https://github.com/earendil-works/pi/issues/4841) | 🔴 OPEN | Footer 忽略 modelOverrides.name 显示模型 ID | madeleineostoja | 3 💬 | 用户体验：配置覆盖后界面未同步反映友好名称 |
| [#4893](https://github.com/earendil-works/pi/issues/4893) | ✅ CLOSED | 系统提示词组装逻辑需澄清 | shillem | 3 💬 | AGENTS.md / 工具指南的 XML 包裹方式影响提示工程 |
| [#3146](https://github.com/earendil-works/pi/issues/3146) | ✅ CLOSED | TUI 编辑器/页脚粘性底部固定 | bechampion | 3 💬 | 长期 UX 痛点：内容滚动时输入框跳动问题终获解决 |
| [#4957](https://github.com/earendil-works/pi/issues/4957) | ✅ CLOSED | 扩展 API 暴露编辑器光标位置与插入方法 | tkorpos | 3 💬 | 扩展生态关键能力：允许插件精确操控编辑器状态 |

---

## 重要 PR 进展

| # | 状态 | 标题 | 作者 | 功能/修复内容 |
|---|------|------|------|---------------|
| [#4991](https://github.com/earendil-works/pi/pull/4991) | 🔵 OPEN | **fix(ai): 禁用隐藏的 Provider 429 重试** | mitsuhiko | **关键修复**：解决 #4666/#4945，停止信任服务端 `retry-after` 的无限重试（如 OpenCode Go 配额耗尽时延迟以天计），避免用户永久卡住 |
| [#4979](https://github.com/earendil-works/pi/pull/4979) | 🔵 OPEN | **fix(codex): 空闲 WebSocket 超时** | mitsuhiko | Codex 连接在 keepalive 帧存在时仍因空闲过久强制断开，此修复对齐 Codex 官方行为，缓解 #4945 相关症状 |
| [#4994](https://github.com/earendil-works/pi/pull/4994) | ✅ CLOSED | 修复技能命令在会话编辑器中的还原 | will-kim-querypie | `/tree`、`/fork` 编辑历史消息时，将展开的 `<skill>` 块折叠回 `/skill:<name>` 原始命令，保持 LLM 上下文不变 |
| [#4987](https://github.com/earendil-works/pi/pull/4987) | ✅ CLOSED | 沙箱模式文件快照追踪修复 + 性能优化 | dyyz1993 | 解除 `get_modified_files` 在沙箱下的空返回限制；优化 `SessionManager` 启动性能 |
| [#4985](https://github.com/earendil-works/pi/pull/4985) | ✅ CLOSED | OpenRouter 返回成本数据增强会话日志 | btobolaski | 解决成本报告与 OpenRouter 实际账单差异大的问题，直接采用 Provider 返回的精确成本 |
| [#4982](https://github.com/earendil-works/pi/pull/4982) | ✅ CLOSED | 修复交互模式瞬态终端 EPIPE 崩溃 | Caio-Nogueira | 大输出时 `write EPIPE` 未捕获导致 TUI 崩溃，增加错误处理 |
| [#4978](https://github.com/earendil-works/pi/pull/4978) | ✅ CLOSED | 扩展 input 事件暴露 streamingBehavior | any-victor | 扩展可感知 `steer`/`followUp` 流式行为，增强插件对流式交互的控制 |
| [#4974](https://github.com/earendil-works/pi/pull/4974) | ✅ CLOSED | 回滚修复、变更审查重设计、钩子兼容、自动记忆 RPC | dyyz1993 | 大型功能合集：修正 `fromEntryId` 传递、变更审查 UI 重构、hooks 兼容性、auto-memory 远程调用 |
| [#4971](https://github.com/earendil-works/pi/pull/4971) | 🔵 OPEN | Anthropic 兼容 Provider 空签名兼容选项 | pandada8 | 部分兼容 Provider 返回空 `thinkingSignature` 但接受回传，避免被重写为纯文本块导致 400 错误和缓存失效 |
| [#4964](https://github.com/earendil-works/pi/pull/4964) | ✅ CLOSED | 新增 DashScope Provider（22 个 Qwen 模型） | PhoenixCPH | 阿里云百炼平台首级支持，包含 Qwen 3.7 Max（宣称超越 Claude Opus 4.6），通过 OpenAI Responses API 接入 |

---

## 功能需求趋势

基于今日 36 个活跃 Issue 分析，社区聚焦五大方向：

| 趋势方向 | 代表 Issue/PR | 热度 |
|---------|-------------|------|
| **🤖 OpenAI Codex 稳定性** | #4945, #4991, #4979, #4969 | 🔥🔥🔥 |
| **💰 成本与计费准确性** | #4985, #4983 | 🔥🔥🔥 |
| **🔌 扩展 API 能力边界** | #4957, #4992, #4981, #4977 | 🔥🔥🔥 |
| **🌐 中国/亚洲模型生态** | #4964, #4926, #4973, #4972 | 🔥🔥 |
| **🎨 TUI/终端体验打磨** | #3146, #4962, #4965, #4947 | 🔥🔥 |

**Codex 稳定性** 成为绝对焦点：mitsuhiko 一日双 PR 表明核心维护者已将此列为最高优先级。成本透明度（OpenRouter 实际费用 vs 估算）和扩展生态的 API 完备性紧随其后。

---

## 开发者关注点

### 🔴 高频痛点

1. **Codex "假死" 问题（#4945）**
   - 现象：TUI 显示 `Working...` 但无流式输出、无工具调用、无错误
   - 根因：多层重试机制叠加——SDK 层信任服务端 `retry-after`，Provider 层又有独立重试，WebSocket 空闲超时策略不一致
   - 进展：mitsuhiko #4991 禁用隐藏 429 重试，#4979 对齐 WebSocket 超时

2. **升级回归风险（#4990, #4973）**
   - `edit` 工具参数验证失败、prompt 模板多行参数被折叠为空格
   - 开发者反馈："wish i had not [updated]"

3. **模型配置与显示不一致（#4801, #4841）**
   - `reasoning_effort` 大小写敏感、`modelOverrides.name` 被 Footer 忽略
   - 配置系统的边缘 case 处理仍需完善

### 🟡 生态建设需求

| 需求 | 现状 | 缺口 |
|-----|------|------|
| 扩展设置类型化注册 | #4981 已提出 `pi.settings.register` | 等待合并 |
| 持久化面板（非覆盖层）| #4992 提出右侧预留面板 | 避免选择器与扩展 UI 冲突 |
| 技能命令链式调用 | #4986 提出多 `/skill:name` 连续展开 | 当前仅加载单个技能 |

### 🟢 积极信号

- **DashScope/Qwen 生态**：PhoenixCPH 连续贡献，中国开发者模型选择大幅扩展
- **终端渲染打磨**：#4962/#4961 标题渲染美化、#4965 VS Code 终端焦点修复，TUI 精致度持续提升
- **XDG 规范合规**：#256 配置目录迁移，Linux 桌面集成更规范

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-05-26

## 今日速览

今日 Qwen Code 密集推进 v0.16.1 补丁版本，重点修复构建缓存与模型兼容性；社区围绕 `qwen serve` 守护进程模式展开高强度讨论，同时 VS Code 插件兼容性、Token 消耗统计等用户体验问题持续发酵。

---

## 版本发布

### v0.16.1-nightly.20260525.84f408017
| 属性 | 内容 |
|:---|:---|
| 版本 | v0.16.1-nightly.20260525.84f408017 |
| 核心修复 | 构建前清理 stale TypeScript 输出，解决 TS5055 错误 ([#4453](https://github.com/QwenLM/qwen-code/pull/4453)) |
| 性质 | 补丁版本，为 v0.16.1 正式版铺路 |

> 该 nightly 主要解决增量构建中旧输出残留导致的类型检查冲突，对 CI/CD 和本地开发稳定性有直接改善。

---

## 社区热点 Issues（10 条）

| # | Issue | 状态 | 核心看点 | 社区反应 |
|:---|:---|:---|:---|:---|
| [#4175](https://github.com/QwenLM/qwen-code/issues/4175) | Mode B (`qwen serve`) 功能优先级路线图 | 🔵 OPEN | **守护进程模式的纲领性议题**，定义 Stage 1 已合并能力到 v0.16 生产就绪的剩余工作，涉及 HTTP/SSE 路由、认证、会话多路复用 | 40 条评论，核心维护者 doudouOUC 主导，是 Mode B 的"总纲" |
| [#4514](https://github.com/QwenLM/qwen-code/issues/4514) | 守护进程能力缺口与优先级 backlog | 🔵 OPEN | **#4175 的战术补充**，系统盘点下游 SDK/IDE/WebUI 实际调用的 HTTP/SSE 缺口并按 ROI 排序 | 6 条评论，刚创建即成为迭代牵引单 |
| [#3803](https://github.com/QwenLM/qwen-code/issues/3803) | 守护进程模式完整设计提案 | 🔵 OPEN | wenshao 的 6 章设计系列，是 Mode B 的**架构源头**，持续跟踪实现进度 | 24 条评论，长期参考文档 |
| [#4488](https://github.com/QwenLM/qwen-code/issues/4488) | VS Code 1.120+ 插件侧边栏闪退 | 🔵 OPEN | **高影响 UI 兼容性 bug**，新版 VS Code 左侧栏无法稳定显示 Qwen Code 插件 | 6 条评论，用户急迫，需信息补充 |
| [#4479](https://github.com/QwenLM/qwen-code/issues/4479) | 每日 Token 消耗统计需求 | 🔵 OPEN | 用户一次使用消耗 3000 万 Token 的**震惊反馈**，暴露用量透明度缺失 | 3 条评论，标记 `welcome-pr` |
| [#4513](https://github.com/QwenLM/qwen-code/issues/4513) | qwen3.7-max OpenAI 兼容接口拒绝 inlineData PNG | 🔵 OPEN | **模型接口兼容性阻断**，多模态输入格式不匹配导致 400 Bad Request | 1 条评论，刚上报，影响 qwen3 系列集成 |
| [#4493](https://github.com/QwenLM/qwen-code/issues/4493) | Rider IDE 无法登录（OAuth 重定向死循环） | 🔵 OPEN | JetBrains 生态登录阻断，阿里云 Token Plan 无法调用 | 2 条评论，跨 IDE 认证链路问题 |
| [#4494](https://github.com/QwenLM/qwen-code/issues/4494) | 侧边查询忽略用户配置输出语言 | 🔵 OPEN | session recap、title、tool-use summary 等**固定输出英文**，中文用户体感差 | 1 条评论，已有对应 PR #4519 修复 |
| [#4506](https://github.com/QwenLM/qwen-code/issues/4506) | 任务执行死循环（法语区反馈） | 🔵 OPEN | Agent 卡在"读取文件→描述任务→永不执行"的循环，**长会话稳定性问题** | 1 条评论，与 #4471 任务卡住现象同源 |
| [#4442](https://github.com/QwenLM/qwen-code/issues/4442) | 批量文件编辑时 UI 冻结 | 🔵 OPEN | **性能/UX 严重问题**，Ctrl+C 无法退出，只能杀终端；长会话卡顿普遍 | 1 条评论，用户称"很多人遇到" |

---

## 重要 PR 进展（10 条）

| # | PR | 作者 | 功能/修复内容 | 关联 Issue |
|:---|:---|:---|:---|:---|
| [#4524](https://github.com/QwenLM/qwen-code/pull/4524) | fix(core): 限制前台 shell 输出捕获 | Jerry2003826 | 为 `ShellExecutionResult` 设置输出上限，超预算后丢弃而非保留超大字符串，**防止内存爆炸** | #4364 |
| [#4522](https://github.com/QwenLM/qwen-code/pull/4522) | fix(cli): ACP 会话关闭使用会话级 channel | Jerry2003826 | `closeSession`/`killSession` 改用 `channelInfoForEntry(entry)` 替代模块级 `channelInfo`，**修复通道重叠期的会话记账错误** | #4325 |
| [#4521](https://github.com/QwenLM/qwen-code/pull/4521) | fix(core): 容忍不支持的 Streamable HTTP GET SSE | Jerry2003826 | MCP transport 兼容性包装：GET SSE 返回 400/405 时降级到已有路径，**提升 MCP 服务器兼容性** | #4326 |
| [#4520](https://github.com/QwenLM/qwen-code/pull/4520) | fix(core): 截断模型侧 tool 输出 | Jerry2003826 | 调度层安全网：字符串 `llmContent` 转 `functionResponse` 前截断，**防止 tool 输出撑爆上下文** | #4049 |
| [#4519](https://github.com/QwenLM/qwen-code/pull/4519) | fix(core): 侧边查询尊重输出语言配置 | Jerry2003826 | session recap、auto title、tool summary、suggestions 等追加 `output-language.md` 规则，**解决 #4494** | #4494 |
| [#4518](https://github.com/QwenLM/qwen-code/pull/4518) | fix(core): 稳定 DeepSeek tool cache prefix | Jerry2003826 | DeepSeek 官方 API 时按函数名排序 `tools`，**提升缓存命中率**；非 DeepSeek 保持现状 | - |
| [#4517](https://github.com/QwenLM/qwen-code/pull/4517) | fix(models): 刷新 raw model 派生默认值 | Jerry2003826 | 切换 raw model ID 时重新计算默认值，**防止旧 provider 多模态设置污染文本模型**（如 `qwen3.7-max`） | #4513 |
| [#4516](https://github.com/QwenLM/qwen-code/pull/4516) | feat(serve): 会话压缩 + 元数据路由 | doudouOUC | `POST /session/:id/compress` 和 `POST /session/:id/_meta`，**补齐守护进程 Tier-1 能力** | #4514 |
| [#4515](https://github.com/QwenLM/qwen-code/pull/4515) | feat(serve+sdk): 会话统计 + 导出路由 | doudouOUC | `GET /session/:id/stats` + `/export`，**复用 TUI 现有 SSOT，保证 daemon/CLI 状态一致** | #4514 |
| [#4504](https://github.com/QwenLM/qwen-code/pull/4504) | feat(serve): 会话 recap 路由 | doudouOUC | `POST /session/:id/recap` 暴露 `generateSessionRecap`，**SDK/WebUI 可快速获取"上次做到哪"摘要** | - |

> **Jerry2003826** 今日贡献 6 个修复 PR，聚焦 core 稳定性（shell、channel、tool、model、language）；**doudouOUC** 主导 serve 模式能力补齐，与 #4514 backlog 紧密对齐。

---

## 功能需求趋势

从 27 条活跃 Issue 中提炼五大方向：

| 方向 | 热度 | 代表 Issue | 说明 |
|:---|:---|:---|:---|
| **🖥️ IDE 集成与兼容性** | 🔥🔥🔥🔥🔥 | #4488, #4493, #4442, #4508 | VS Code 新版兼容、JetBrains 登录、UI 冻结、MCP 上下文显示——**跨 IDE 体验是当前最大痛点** |
| **📊 可观测性与用量透明** | 🔥🔥🔥🔥 | #4479, #4444, #4501, #4486 | Token 统计、缓存命中、trace 正确性、thinking 开关生效——**企业用户和重度个人用户刚需** |
| **🚀 守护进程模式 (`qwen serve`)** | 🔥🔥🔥🔥 | #4175, #4514, #3803, #4503 | HTTP/SSE 路由补齐、ACP Message ID、side-channel 协调——**v0.16 核心战略** |
| **🛡️ 安全与权限** | 🔥🔥🔥 | #4370, #4425, #4493 | AUTO mode 危险解释器过滤、扩展凭证脱敏、OAuth 安全——**生产化必经之路** |
| **🌍 国际化与本地化** | 🔥🔥🔥 | #4494, #4481, #4506 | 输出语言尊重、英文响应问题、多语言任务循环——**非英语用户增长瓶颈** |

---

## 开发者关注点

### 🔴 高频痛点

| 痛点 | 典型反馈 | 紧迫性 |
|:---|:---|:---|
| **VS Code 插件稳定性** | "1.120.0 闪一下就没"、"长会话卡顿、Ctrl+C 无效" | **P0** — 直接影响留存 |
| **Token 消耗黑盒** | "一次用了 3 千万 token"、"stats 不显示 cache" | **P1** — 付费用户焦虑 |
| **任务执行死循环/卡住** | "Agent 描述任务永不执行"、"循环读取同一文件" | **P1** — 核心功能可靠性 |
| **JetBrains 生态登录阻断** | "Rider 无法调用阿里云 Token Plan" | **P2** — 跨 IDE 覆盖缺口 |

### 🟡 架构级关注

- **Mode B 生产就绪进度**：社区需要清晰的"哪些已可用、哪些在排队"信号，#4514 的 Tier 分级是良好开端
- **Raw model 切换的副作用**：#4513/#4517 暴露 model-derived defaults 的污染问题，提示配置系统需更彻底隔离
- **Trace 上下文断裂**：#4486 的 `qwen-code.interaction` span 逃逸 session root，可观测性链路存在断点

### 🟢 积极信号

- 守护进程模式有**成体系的设计文档**（#3803 六章系列、#4412 开发者深度文档、#4511 side-channel 设计）
- **PR 修复响应快**：#4494 语言问题从上报到 PR #4519 仅隔 1 天
- **社区贡献通道畅通**：多个 Issue 标记 `welcome-pr`，Token 统计等需求明确可接

---

*日报基于 github.com/QwenLM/qwen-code 2026-05-25 至 2026-05-26 的公开数据生成*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（CodeWhale）社区动态日报 | 2026-05-26

---

## 1. 今日速览

**v0.8.45 维护版本正式发布**，聚焦 RLM 会话对象、可取消目录/搜索工具、确定性代理命名等稳定性改进。与此同时，核心维护者 Hmbown 一次性抛出 **6 个 v0.9.0 前瞻性的 "cache-maximalism" 史诗级议题**，标志着项目正从"对话式 AI 终端"向"缓存最优化的工具操作系统"战略转型，引发社区高度关注。

---

## 2. 版本发布

### v0.8.45 已发布（2026-05-25）
- **PR #2118** `chore(release): prepare v0.8.45` | [链接](https://github.com/Hmbown/CodeWhale/pull/2118)

| 核心更新 | 说明 |
|---------|------|
| RLM 会话对象 | 支持可中断、可恢复的代理会话状态管理 |
| 可取消工具 | `/cancel` 支持中断目录读取、文件搜索等耗时操作 |
| 确定性代理命名 | 鲸鱼物种命名法替代随机名，提升可追踪性 |
| `/balance` 脚手架 | 余额查询功能框架（TUI 实现待 #2141） |
| 配置/运行时加固 | 隐藏未就绪的遗留 TUI 工作流，减少用户困惑 |
| 语音原型回退 | Cmd-K 快捷键冲突，v0.8.46 重新设计后再发布 |

---

## 3. 社区热点 Issues

| # | 议题 | 状态 | 评论 | 核心看点 |
|---|------|------|------|---------|
| **#1615** | [bug] docker 拉取直接跑乱码 | 🔴 CLOSED | **188** | 现象级吐槽 Issue，用户按文档操作仅替换 API 即触发严重乱码，需强制重启服务器。高评论量反映 Docker 部署路径的稳定性仍是新用户流失的关键瓶颈。[链接](https://github.com/Hmbown/CodeWhale/issues/1615) |
| **#2007** | [enhancement] 协调式多智能体工作流迁移 | 🟢 OPEN | 5 | 用"鲸鱼精准"的标准多智能体编排替代 School-mode 探索，支持可见的并行工作者分配、角色定义、分歧协调。v0.8.44 技术债，产品化路径待明确。[链接](https://github.com/Hmbown/CodeWhale/issues/2007) |
| **#1879** | v0.8.45 控制平面与恢复追踪 | 🔴 CLOSED | 4 | **"Power is being able to stop and steer"** — 定义了 v0.8.45 的核心产品哲学：自动化不等于强大，可控的中断与重定向才是。[链接](https://github.com/Hmbown/CodeWhale/issues/1879) |
| **#1186** | [enhancement] 持久化类型化权限规则 | 🟢 OPEN | 3 | 按工具名/命令前缀/路径模式配置 `allow/deny/ask`，从"每次确认"进化到"规则驱动"，与 PR #2062 形成配套。[链接](https://github.com/Hmbown/CodeWhale/issues/1186) |
| **#2104** | [bug] Homebrew 分发：codewhale 不在 PATH | 🟢 OPEN | 2 | `deepseek` 别名废弃后，`codewhale` 主程序未正确链接到 PATH，升级即不可用。分发渠道的质量把控问题。[链接](https://github.com/Hmbown/CodeWhale/issues/2104) |
| **#2018** | [enhancement] 低信息行可检查/可点击 | 🟢 OPEN | 2 | TUI 空间受限导致任务标题截断、代理摘要被裁剪，需交互式展开。直接影响多代理场景的可观测性。[链接](https://github.com/Hmbown/CodeWhale/issues/2018) |
| **#2128** | [enhancement] Rustfactor 试点：图驱动重构工具 | 🟢 OPEN | 1 | **v0.9.0 旗舰特性预览**：首个 cache-maximal 工作流，用代码图替代文本读写进行多文件重构，解决"模型能推理架构但工具只给文本"的结构性错配。[链接](https://github.com/Hmbown/CodeWhale/issues/2128) |
| **#2127** | [enhancement] Slop 账本：架构残留可视化 | 🟢 OPEN | 1 | 将"兼容垫片、未迁移调用方、重复概念"等隐性技术债显式追踪，让代理完成任务时留下的残留可查询、可治理。[链接](https://github.com/Hmbown/CodeWhale/issues/2127) |
| **#2122** | [EPIC] 缓存最大化的工具操作系统 | 🟢 OPEN | 1 | 6 个 cache-maximalism 议题的总纲：工具不应是聊天转录的偶尔侧调，而应是模型外部神经系统的核心接口。[链接](https://github.com/Hmbown/CodeWhale/issues/2122) |
| **#2134** | [bug] 粘贴表格文本直接触发对话 | 🟢 OPEN | 1 | 换行符被误识别为回车，VS Code 错误列表等表格数据粘贴即发送，且仅首行生效。输入层对富文本/多行粘贴的处理缺陷。[链接](https://github.com/Hmbown/CodeWhale/issues/2134) |

---

## 4. 重要 PR 进展

| # | PR | 状态 | 功能/修复 | 技术要点 |
|---|-----|------|----------|---------|
| **#2118** | chore(release): prepare v0.8.45 | 🔴 CLOSED | 版本发布 | 见上文"版本发布"章节。[链接](https://github.com/Hmbown/CodeWhale/pull/2118) |
| **#2143** | fix: simplify approval confirmation flow | 🔴 CLOSED | 简化确认流 | **破坏性操作从"双击确认"改为单次确认**，解决 #1257 长期痛点。移除 staged 状态，直接生效。[链接](https://github.com/Hmbown/CodeWhale/pull/2143) |
| **#2142** | Add Kimi OAuth provider support | 🔴 CLOSED | 新增 Kimi 提供商 | Moonshot/Kimi 作为一等公民接入：配置、模型注册、密钥管理、TUI 选择器全链路支持，含 `~/.kimi/credentials/kimi-code.json` OAuth 刷新。[链接](https://github.com/Hmbown/CodeWhale/pull/2142) |
| **#2120** | fix(tui): emit subagent completion before terminal update | 🔴 CLOSED | 修复子代理竞态 | 解决 #1961：`<codewhale:subagent.done>` 事件可能在父 turn 总结后才到达，导致"代理已结束却仍显示工作中"的幽灵状态。[链接](https://github.com/Hmbown/CodeWhale/pull/2120) |
| **#2060** | fix(engine): keep auto-compaction on sub-500K windows | 🔴 CLOSED | 小窗口上下文压缩 | 自托管小窗口场景下，`context_input_budget` 错误预留 262K 输出令牌导致输入空间被过度压缩。修复后按实际窗口比例分配。[链接](https://github.com/Hmbown/CodeWhale/pull/2060) |
| **#2057** | fix(engine): use user role for sub-agent completion | 🔴 CLOSED | 聊天模板兼容 | 子代理完成消息原用 `role: "system"` 注入父对话，部分 OpenAI 兼容后端要求 system 消息必须在前。改为 `user` 角色规避模板严格校验。[链接](https://github.com/Hmbown/CodeWhale/pull/2057) |
| **#2056** | fix(tui): keep model picker selection on Esc | 🔴 CLOSED | 模型选择器保留 | `/model` 选择器此前仅 Enter 生效，Esc 丢弃箭头键选择。修复后 Esc 保留高亮项，符合直觉。[链接](https://github.com/Hmbown/CodeWhale/pull/2056) |
| **#2141** | Implement TUI provider balance lookup | 🟢 OPEN | 余额查询 TUI 实现 | v0.8.45 脚手架的完整实现， provider 余额在 TUI 中可视化。待合并。[链接](https://github.com/Hmbown/CodeWhale/pull/2141) |
| **#2139** | Document macOS Gatekeeper workaround | 🟢 OPEN | 文档：macOS 手动安装 | 独立二进制下载被 Gatekeeper 拦截，添加 `xattr -d com.apple.quarantine` 清除隔离属性的官方指引。[链接](https://github.com/Hmbown/CodeWhale/pull/2139) |
| **#2133** | feat(runtime): bridge user-input events to external GUI | 🟢 OPEN | 外部 GUI 客户端支持 | 为 VSCode 等扩展暴露 `EngineEvent::UserInputRequired` 及 `submit_user_input`/`cancel_user_input` 的 API 层桥接，TUI→GUI 生态扩展的关键基础设施。[链接](https://github.com/Hmbown/CodeWhale/pull/2133) |

---

## 5. 功能需求趋势

基于今日 50 条活跃 Issue 的聚类分析：

| 趋势方向 | 代表议题 | 热度信号 |
|---------|---------|---------|
| **🎯 Cache-Maximalism（缓存最大化）** | #2122-#2128 系列 | 🔥🔥🔥 官方战略级，6 个关联议题同日抛出 |
| **🔧 多智能体编排** | #2007, #2018 | 🔥🔥🔥 从 School-mode 向工业级协调升级 |
| **🛡️ 权限与治理** | #1186, #2127, #2062 | 🔥🔥 持久化规则、Slop 账本、执行策略 |
| **🔌 提供商生态扩展** | #2142(Kimi), #2130/#2132(DDG 搜索), #2114/#2119(配置覆盖) | 🔥🔥 去 DeepSeek 中心化，多模型/多搜索后端 |
| **🎙️ 语音输入** | #2115, #2116 | 🔥 已回退，v0.8.46 重新设计 |
| **🖥️ 外部 IDE 集成** | #2133(GUI 桥接) | 🔥 从 TUI 向"引擎即服务"演进 |

**关键洞察**：v0.9.0 的 "cache-maximalism" 不是性能优化，而是**架构范式转移**——将工具从"聊天附属品"提升为"模型外部神经系统"，通过图结构、DSL 契约、微操作运行时等基础设施，让智能体从"每次重建理解"进化到"持续化认知"。

---

## 6. 开发者关注点

| 痛点/需求 | 具体表现 | 社区情绪 |
|----------|---------|---------|
| **Docker 即开即用体验崩塌** | #1615 乱码需强制重启服务器，188 条评论含情绪化表达 | 😤 高流失风险，文档与镜像质量需紧急加固 |
| **macOS 安全Gatekeeper 壁垒** | #2052, #2139 手动二进制被拦截，Homebrew 路径 #2104 也故障 | 😤 苹果生态分发链路全路径受阻 |
| **配置系统优先级混乱** | #2114/#2112 环境变量覆盖 profile 配置，#2109 模型名强制小写 | 😠 配置即代码的契约感缺失，调试成本高 |
| **搜索可靠性黑洞** | #2130 Bing 对技术查询静默返回空结果，用户无感知 | 😐 默认后端选型需重新评估（DDG 迁移中） |
| **确认流疲劳** | #1257 双击确认终于简化，但长期才响应 | 😌 已解决，反映社区反馈响应周期 |
| **粘贴行为不可控** | #2134 表格/多行文本粘贴即发送 | 😤 输入层对复杂内容类型处理粗糙 |

---

*日报基于 github.com/Hmbown/DeepSeek-TUI（实际重定向至 CodeWhale 组织）的公开数据生成。项目已品牌迁移为 CodeWhale，CLI 入口从 `deepseek` 迁移至 `codewhale`。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*