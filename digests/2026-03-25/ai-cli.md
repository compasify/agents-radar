# AI CLI 工具社区动态日报 2026-03-25

> 生成时间: 2026-03-25 00:09 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告 | 2026-03-25

---

## 1. 生态全景

当前 AI CLI 工具生态呈现**"一超多强、垂直分化"**格局：Claude Code 凭借 Cowork 虚拟机和 MCP 生态占据企业级工作流高地，但 ARM 支持与权限安全漏洞引发信任危机；OpenAI Codex 以 Rust 重构和 TUI 创新追赶，计费透明度成为最大掣肘；Google Gemini CLI 依托 GSoC 推动行为评估体系开放，子代理架构领先；中国厂商（Kimi、Qwen）快速补齐 IDE 集成与插件生态，但在国际化场景稳定性上仍有差距。整体趋势从单一工具向**平台化、可扩展、多模态**演进，社区自组织修复成为填补官方响应空白的重要力量。

---

## 2. 各工具活跃度对比

| 工具 | Issues 更新 | PR 更新 | 版本发布 | 关键动态 |
|:---|:---:|:---:|:---:|:---|
| **Claude Code** | 50+ | 10+ | ❌ 无 | ARM Cowork 支持成最热议题（92👍），安全漏洞密集暴露 |
| **OpenAI Codex** | 50+ | 10+ | ✅ 4 个 alpha | Rust 核心密集迭代，`/btw` 旁路线程功能上线 |
| **Gemini CLI** | 50+ | 10+ | ✅ v0.36.0-preview | GSoC 项目启动，多注册表架构支持子代理过滤 |
| **GitHub Copilot CLI** | 50 | 0 | ❌ 无 | 组织 MCP 策略误报、模型可用性不一致成焦点 |
| **Kimi Code CLI** | 8 | 8 | ✅ v1.25.0 | 插件系统 Beta 化，writefile 工具稳定性退潮 |
| **OpenCode** | 50+ | 20+ | ✅ v1.3.1/v1.3.2 | 20+ 贡献者协同攻关内存泄漏，Claude OAuth 断裂 |
| **Qwen Code** | 50 | 20 | ✅ v0.13.0-nightly | Telegram 集成、循环任务、后续建议功能并进 |

> **活跃度梯队**：OpenCode ≈ Qwen > Claude Code ≈ Codex ≈ Gemini > Copilot CLI > Kimi（受版本事件影响）

---

## 3. 共同关注的功能方向

| 功能方向 | 涉及工具 | 具体诉求 |
|:---|:---|:---|
| **IDE 深度集成** | OpenCode (#11176)、Kimi (#1334, #1560)、Qwen (#1370)、Copilot CLI (#1703) | VS Code 原生扩展、JetBrains 插件、设置入口统一、远程开发支持 |
| **权限与安全加固** | Claude Code (#33126, #34819)、Codex (#15680)、Gemini (#23717)、Qwen (#2640, #2637) | 凭证泄露防护、权限门强制执行、审批持久化、沙箱边界一致性 |
| **上下文/记忆管理** | Claude Code (#36582, #27140)、Codex (#13784)、Gemini (#22819)、Qwen (#2523) | 长对话稳定性、MEMORY.md 限制放宽、全局/项目记忆分离、后续建议 |
| **性能与资源优化** | Claude Code (#27897)、Codex (#11981, #15620)、OpenCode (#16697)、Qwen (#2632) | 内存泄漏根治、CPU 空转、空闲断连、流式响应终止 |
| **MCP/插件生态** | Claude Code (#3426, #38045)、Codex (#15169)、Kimi (#1566)、Gemini (#22712) | 工具暴露稳定性、官方 MCP 支持、插件互通、生命周期钩子 |
| **终端体验精细化** | Claude Code (#36582)、Codex (#15701)、Gemini (#21109)、Qwen (#241) | 滚动行为修复、快捷键可配置、语音可视化、Shift+Enter 换行 |

---

## 4. 差异化定位分析

| 工具 | 核心功能侧重 | 目标用户画像 | 技术路线特征 |
|:---|:---|:---|:---|
| **Claude Code** | Cowork 虚拟机、Computer Use、MCP 生态 | 企业级全栈开发者、需要隔离执行环境 | 闭源核心+开放插件，Electron 桌面优先，1M token 长上下文 |
| **OpenAI Codex** | TUI 交互创新、Rust 性能、/compact 压缩 | 追求极致效率的终端用户、OpenAI 生态深度用户 | Rust 重构迁移中，多模态（屏幕录制），YOLO 模式激进 |
| **Gemini CLI** | 子代理架构、行为评估、GSoC 开放生态 | 研究者、需要可解释 AI 的工程师 | Effect 架构、多注册表、强调评估体系透明化 |
| **GitHub Copilot CLI** | 与 GitHub 生态无缝集成、组织级策略 | 现有 Copilot 订阅用户、企业合规场景 | 微软生态绑定，模型路由层复杂，Windows 优先 |
| **Kimi Code CLI** | 插件系统、生命周期钩子、压缩模型配置 | 中国开发者、需要灵活扩展的中间用户 | 快速跟进竞品功能，Wire 架构，Beta 阶段激进迭代 |
| **OpenCode** | 多提供商灵活接入、内存诊断、Effect 架构 | 多模型策略用户、TypeScript 生态开发者 | Effect 函数式架构，Poe/Bedrock 快速集成，社区驱动 |
| **Qwen Code** | 中文场景优化、循环任务、Telegram 集成 | 中文开发者、需要定时/监控自动化场景 | 阿里生态，国际化功能快速补齐，ACP 协议扩展 |

**关键差异点**：
- **架构哲学**：Claude/Codex 重"智能体能力"，Gemini/OpenCode 重"可观测/可扩展"，Kimi/Qwen 重"场景覆盖"
- **开放程度**：OpenCode/Gemini 最开放（Effect/行为评估），Claude 插件生态繁荣但核心闭源
- **地缘特征**：中国工具（Kimi/Qwen）在中文路径、国内 IM 集成上响应更快，国际化稳定性滞后

---

## 5. 社区热度与成熟度

### 社区热度矩阵

| 维度 | 领导者 | 快速追赶者 | 稳定期 |
|:---|:---|:---|:---|
| **Issue 讨论深度** | Claude Code（安全议题 70+ 评论） | OpenCode（内存泄漏 20+ 贡献者协同） | Copilot CLI（议题分散，官方响应慢） |
| **PR 贡献活跃度** | OpenCode（20 PR）、Qwen（20 PR） | Kimi（8 PR，架构升级密集） | Codex（10 PR，官方主导） |
| **版本迭代频率** | Codex（4 alpha/24h）、OpenCode（2 版本/2 天） | Gemini（preview 频道） | Claude Code（无发布，依赖社区补丁） |
| **生态自组织能力** | Claude Code（scroll-fix、tool-mutex 等社区插件） | OpenCode（多提供商适配社区驱动） | — |

### 成熟度评估

| 工具 | 成熟度阶段 | 关键风险 |
|:---|:---|:---|
| Claude Code | **成熟期/平台期** | 安全漏洞信任危机、ARM 支持滞后、官方响应延迟 |
| OpenAI Codex | **重构阵痛期** | Rust 迁移稳定性、计费透明度争议、Windows 边缘化 |
| Gemini CLI | **架构升级期** | flaky 测试基础设施、子代理复杂度、评估体系开放进度 |
| GitHub Copilot CLI | **维护期** | 无 PR 更新信号、组织策略 Bug、模型生态割裂 |
| Kimi Code CLI | **快速扩张期** | v1.25.0 稳定性退潮、IDE 集成粗糙、插件生态早期 |
| OpenCode | **社区驱动快速迭代期** | Claude OAuth 断裂、内存问题根治、Windows 体验差距 |
| Qwen Code | **功能补齐期** | 中文路径等技术债、国际化场景测试覆盖、文档缺失 |

---

## 6. 值得关注的趋势信号

### 🔮 技术趋势

| 信号 | 证据 | 开发者参考价值 |
|:---|:---|:---|
| **Rust 重构成为性能竞争标配** | Codex 4 个 alpha/24h，Kimi 提及 Rust 组件 | 终端工具性能敏感，Rust/原生代码占比将成选型指标 |
| **Effect/函数式架构兴起** | Gemini、OpenCode 全面采用 | 复杂代理状态管理需要可组合、可测试的架构模式 |
| **屏幕录制/视觉输入 CLI 化** | Codex #15597 本地录屏、Claude Computer Use 下沉诉求 | 多模态从"演示功能"变为"生产必需"，关注隐私与性能平衡 |
| **生命周期钩子标准化** | Kimi #1561（13 种钩子）、Codex Pre/PostToolUse | 工具链可编程性成为平台化关键，Hook 生态将分化 |

### 🏢 生态趋势

| 信号 | 证据 | 开发者参考价值 |
|:---|:---|:---|
| **社区插件填补官方空白** | Claude scroll-fix、tool-mutex、lean-agents | 评估工具时需考察社区自组织能力，非仅官方 Roadmap |
| **MCP 成为事实标准但实现分化** | 所有工具均提及，但暴露方式、超时、信任模型各异 | 投资 MCP 工具开发需关注具体实现的兼容性承诺 |
| **"别让我离开 IDE" 成为硬需求** | OpenCode #11176（23👍）、Kimi/Qwen IDE 议题密集 | 独立 TUI 应用面临 VS Code 扩展化压力，架构需预留嵌入能力 |
| **计费透明度成为信任基础设施** | Codex #14593（231 评论）、Claude 凭证泄露事件 | 企业采纳需审计计费模型与数据泄露防护机制 |

### ⚠️ 风险预警

| 信号 | 影响范围 | 建议 |
|:---|:---|:---|
| **权限门绕过类漏洞密集** | Claude #33126、Codex #15680 | 生产环境禁用自动模式，强制人工确认关键操作 |
| **长上下文场景稳定性未解** | 所有工具均有内存/CPU/断连议题 | 1M token 宣传与实际可用存在差距，需分阶段验证 |
| **中国工具国际化债务累积** | Kimi/Qwen 中文路径、编码问题 | 跨国团队需评估非 ASCII 场景测试覆盖度 |

---

*报告生成时间：2026-03-25 | 数据来源：各工具 GitHub 社区公开数据*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（2026-03-25）

---

## 1. 热门 Skills 排行

| 排名 | Skill | 功能概述 | 社区热点 | 状态 |
|:---|:---|:---|:---|:---|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | AI 生成文档的排版质量控制，解决孤行、寡行、编号错位等排版问题 | 触及 Claude 文档生成的普遍痛点，作者指出"影响每一份 Claude 生成的文档" | 🔵 Open |
| 2 | **[skill-quality-analyzer](https://github.com/anthropics/skills/pull/83)** + [skill-security-analyzer](https://github.com/anthropics/skills/pull/83) | Skill 质量五维评估（结构、指令、工具使用等）与安全审计的元技能 | 首个系统性 Skill 自检工具，填补生态质量标准的空白 | 🔵 Open |
| 3 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | 跨会话持久化记忆系统，维护 AI Agent 的长期上下文 | 解决 Claude Code 无状态的核心限制，社区对"记忆"需求强烈 | 🔵 Open |
| 4 | **[plan-task](https://github.com/anthropics/skills/pull/522)** | 将多步骤计划持久化为 Markdown，支持 Git 追踪或本地存储 | 与 shodh-memory 形成互补，聚焦任务执行连续性 | 🔵 Open |
| 5 | **[session-memory](https://github.com/anthropics/skills/pull/629)** | 在上下文压缩中保留关键技术事实，零依赖实现 | 针对上下文压缩导致工具输出丢失的具体痛点 | 🔵 Open |
| 6 | **[SAP-RPT-1-OSS](https://github.com/anthropics/skills/pull/181)** | 集成 SAP 开源表格基础模型进行业务数据预测分析 | 企业级集成案例，连接 Claude 与 SAP 生态 | 🔵 Open |
| 7 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | 前端设计技能改进，提升指令的可执行性和一致性 | 讨论 Skill 设计的最佳实践：指令应"可执行"而非"解释性" | 🔵 Open |
| 8 | **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** | 代码库清理审计，识别孤儿代码、未使用文件、文档缺口 | 10 步系统化工作流，输出 CODEBASE-STATUS.md 作为单一真相源 | 🔵 Open |

---

## 2. 社区需求趋势

从 Issues 高频主题提炼四大方向：

| 方向 | 代表 Issue | 核心诉求 |
|:---|:---|:---|
| **状态持久化** | [#62](https://github.com/anthropics/skills/issues/62), [#522](https://github.com/anthropics/skills/pull/522), [#629](https://github.com/anthropics/skills/pull/629) | 解决 Claude Code"每次会话从零开始"的根本限制，需求覆盖任务计划、技术知识、用户记忆三层 |
| **Skill 治理与质量** | [#202](https://github.com/anthropics/skills/issues/202), [#83](https://github.com/anthropics/skills/pull/83) | 建立 Skill 编写标准、自动化评估、安全审计机制，避免"解释性"Skill 浪费 token |
| **企业集成与部署** | [#29](https://github.com/anthropics/skills/issues/29), [#532](https://github.com/anthropics/skills/issues/532) | AWS Bedrock 支持、SSO 企业认证、无 API Key 环境适配 |
| **MCP 协议融合** | [#16](https://github.com/anthropics/skills/issues/16), [#369](https://github.com/anthropics/skills/issues/369) | 将 Skills 暴露为 MCP 端点，统一 AI 软件接口标准 |

---

## 3. 高潜力待合并 Skills

以下 PR 讨论活跃、功能明确，预计近期可能落地：

| Skill | 链接 | 合并潜力评估 |
|:---|:---|:---|
| **record-knowledge** | [#521](https://github.com/anthropics/skills/pull/521) | 与 plan-task 同作者，形成"知识+任务"双持久化方案，架构简洁 |
| **x402 BSV 支付** | [#374](https://github.com/anthropics/skills/pull/374) | 加密货币微支付场景明确，自然语言驱动 AI 服务付费，差异化定位 |
| **management-consulting** | [#384](https://github.com/anthropics/skills/pull/384) | 填补商业分析技能空白，覆盖战略框架、商业案例、高管沟通 |
| **ODT 文档处理** | [#486](https://github.com/anthropics/skills/pull/486) | 开源文档格式（ISO 26300）支持，LibreOffice 生态刚需 |
| **Google Workspace 集成** | [#299](https://github.com/anthropics/skills/pull/299) | 6 个 Agent Skills 覆盖邮件、日历、任务，个人助理场景完整 |

---

## 4. Skills 生态洞察

> **核心诉求：让 Claude Code 从"无状态工具"进化为"有记忆、可延续、能自治"的持久化工作伙伴。**

社区正通过 Skills 层自行解决 Claude Code 原生缺乏的**跨会话状态管理**——从任务计划到技术知识再到用户偏好，三层记忆系统（plan-task / record-knowledge / shodh-memory / session-memory）并行涌现，反映出用户对"连续性"的迫切需求远超官方当前架构设计。

---

*报告基于 github.com/anthropics/skills 公开数据，截止 2026-03-25*

---

# Claude Code 社区动态日报 | 2026-03-25

## 今日速览

今日社区无新版本发布，但 Issues 活跃度极高，ARM 架构支持、Cowork 功能稳定性和权限安全成为讨论焦点。插件生态持续繁荣，多个社区 PR 针对终端滚动、内存泄漏、BSOD 等关键问题提供解决方案。

---

## 社区热点 Issues（Top 10）

| 优先级 | Issue | 核心看点 |
|:---|:---|:---|
| 🔥 | [#30864](https://github.com/anthropics/claude-code/issues/30864) **ARM 处理器 Cowork 支持** | 92 👍 高票需求，开发者迫切需要在 Apple Silicon 及 ARM Linux 上运行 Cowork 虚拟机，评论数达 70 条，是今日最热话题 |
| 🔥 | [#30640](https://github.com/anthropics/claude-code/issues/30640) **FreeBSD 原生安装器失效** | 52 👍，被 bot 误关后用户强制重开，反映小众系统支持被忽视的问题 |
| ⚠️ | [#27897](https://github.com/anthropics/claude-code/issues/27897) **Win11 Insider Cowork VM 完全损坏** | EXDEV 重命名 bug 持续未解，影响 Windows 云文件驱动（Dropbox/OneDrive）用户 |
| ⚠️ | [#36582](https://github.com/anthropics/claude-code/issues/36582) **长对话终端自动滚动到顶部** | 56 👍，严重影响使用体验，已有社区 PR 提供修复方案 |
| ⚠️ | [#3426](https://github.com/anthropics/claude-code/issues/3426) **MCP 工具无法暴露给 AI 会话** | Playwright MCP 本地服务器集成失败，影响自动化测试工作流 |
| ⚠️ | [#2142](https://github.com/anthropics/claude-code/issues/2142) **CLAUDE.md 安全规范被系统性忽略** | API 密钥多次意外提交到版本控制，暴露 AI 助手对文档指令的遵循缺陷 |
| ⚠️ | [#33126](https://github.com/anthropics/claude-code/issues/33126) **"编辑前询问"权限模式失效** | 安全关键 bug：Claude 绕过确认提示直接修改文件 |
| ⚠️ | [#34819](https://github.com/anthropics/claude-code/issues/34819) **凭证文件内容完整暴露** | 安全事件：Claude 将 `~/.netrc` 完整内容输出到对话 |
| 📌 | [#27263](https://github.com/anthropics/claude-code/issues/27263) **外部 URL 白名单配置** | 45 👍，OAuth 等第三方流程需要灵活的预览白名单 |
| 📌 | [#32982](https://github.com/anthropics/claude-code/issues/32982) **Remote Control 空闲 20 分钟断连** | 34 👍，服务器 TTL 忽略 keepalive，影响远程开发体验 |

---

## 重要 PR 进展（Top 10）

| PR | 作者 | 功能/修复内容 |
|:---|:---|:---|
| [#36614](https://github.com/anthropics/claude-code/pull/36614) | Debaq | **git-branch-info 插件**：会话开始时显示分支状态，用户输入时注入紧凑分支信息，解决上下文丢失问题 |
| [#38182](https://github.com/anthropics/claude-code/pull/38182) | ruspg | **会话重命名插件**：新增 `/rename` 命令，通过 `.meta.json` 侧载文件存储自定义标题，零破坏性 |
| [#38045](https://github.com/anthropics/claude-code/pull/38045) | moxer-mmh | **lean-agents 插件**：6 个轻量子代理替代方案，解决 MCP 工具 schema 膨胀导致的 "prompt too long" 错误 |
| [#35683](https://github.com/anthropics/claude-code/pull/35683) | cruzlauroiii | **终端滚动修复插件**：自动修复长对话滚动到顶部问题，提供 Ctrl+6 冻结切换 |
| [#35710](https://github.com/anthropics/claude-code/pull/35710) | VRDate | **关键修复：Windows BSOD (Wof.sys)**：工具互斥锁防止并行文件系统枚举导致蓝屏，针对 #32870 |
| [#38105](https://github.com/anthropics/claude-code/pull/38105) | Rich627 | **WhatsApp 频道插件**：通过 Baileys 协议实现双向消息，与 Telegram/Discord 功能对齐 |
| [#27140](https://github.com/anthropics/claude-code/pull/27140) | powerpig99 | **memory-bridge 插件**：会话边界结构化上下文整合，`/bridge` 命令持久化学习成果 |
| [#37159](https://github.com/anthropics/claude-code/pull/37159) | Cazador0 | **持久化记忆与会话管理系统**：完整的多轮会话管理、上下文窗口自动处理、记忆库提取 |
| [#38085](https://github.com/anthropics/claude-code/pull/38085) | Ayush-Patel-56 | **文档修复**：补全 v2.1.72 changelog 中 `/plan` 描述的截断句子 |
| [#31701](https://github.com/anthropics/claude-code/pull/31701) | rios0rios0 | **$TMPDIR 支持**：修复硬编码 `/tmp/claude` 路径，支持 Termux/Android 等受限环境 |

---

## 功能需求趋势

| 方向 | 热度 | 典型诉求 |
|:---|:---|:---|
| **ARM/异构架构支持** | ⭐⭐⭐⭐⭐ | Cowork 虚拟机 ARM 化、FreeBSD/aarch64 Linux 原生支持 |
| **Cowork 可靠性** | ⭐⭐⭐⭐⭐ | VHDX 重命名失败、Windows 云文件驱动冲突、项目文件夹可迁移性 |
| **权限与安全加固** | ⭐⭐⭐⭐⭐ | 凭证泄露防护、权限门绕过修复、编辑确认强制执行 |
| **终端/TUI 体验** | ⭐⭐⭐⭐☆ | 滚动行为修复、可配置快捷键、语音多语言支持 |
| **远程/移动协同** | ⭐⭐⭐⭐☆ | Remote Control 稳定性、移动端会话监控、Cowork 远程访问 |
| **MCP 生态完善** | ⭐⭐⭐⭐☆ | 工具暴露稳定性、官方 Computer Use MCP、外部 URL 白名单 |
| **记忆与上下文管理** | ⭐⭐⭐⭐☆ | MEMORY.md 行数限制放宽、思考 effort 持久化、CLAUDE.md 指令遵循 |

---

## 开发者关注点

### 🔴 关键痛点

| 问题 | 影响面 | 社区情绪 |
|:---|:---|:---|
| **Cowork 在 Windows/ARM 上不稳定** | 广泛 | 挫败感强，多个长期未解 issue |
| **AI 不遵守 CLAUDE.md 安全规范** | 严重 | 信任危机，多次凭证泄露事件 |
| **权限模式执行不一致** | 安全关键 | 对自动化工作流信心下降 |
| **Remote Control 断连** | 远程开发者 | 生产力中断，workaround 需求迫切 |

### 🟡 高频需求

- **插件生态官方化**：社区插件质量参差不齐，期待官方采纳或认证机制
- **Computer Use CLI 化**：桌面独占功能下沉到终端场景（#38471）
- **上下文窗口利用率**：1M token 可用但 MEMORY.md 限制 200 行，配置灵活性不足

### 💡 今日亮点

社区自组织修复活跃：`scroll-fix`、`tool-mutex`、`lean-agents` 等插件直接回应核心痛点，显示开发者正在填补官方响应延迟的空白。

---

*数据来源：github.com/anthropics/claude-code | 生成时间：2026-03-25*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-03-25

---

## 1. 今日速览

今日社区焦点集中在**token 消耗异常**（Issue #14593 已累积 231 条评论）与**TUI 交互增强**两大主题。Rust 核心库连续发布 4 个 alpha 版本迭代，同时 `/btw` 旁路提问线程功能正式登陆 TUI，标志着 Codex 在对话流管理上的重要探索。

---

## 2. 版本发布

### Rust 核心库密集迭代（v0.117.0-alpha.11 ~ alpha.14）
| 版本 | 发布时间 |
|:---|:---|
| [rust-v0.117.0-alpha.14](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.14) | 24小时内 |
| [rust-v0.117.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.13) | 24小时内 |
| [rust-v0.117.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.12) | 24小时内 |
| [rust-v0.117.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.11) | 24小时内 |

> 注：Release Note 仅标注版本号，具体变更需结合 PR 历史追踪。高频 alpha 发布表明 Rust 迁移进入关键稳定期。

---

## 3. 社区热点 Issues（精选 10 项）

| # | 标题 | 状态 | 评论 | 👍 | 核心看点 |
|:---|:---|:---|:---:|:---:|:---|
| [#14593](https://github.com/openai/codex/issues/14593) | VS Code 扩展更新后 token 消耗过快 | 🔴 OPEN | **231** | 83 | **社区最火议题**。Business 订阅用户反馈 26.311.21342 版本仍存在异常扣费，OpenAI 官方尚未给出根因说明，用户呼吁透明化计费机制 |
| [#10450](https://github.com/openai/codex/issues/10450) | Codex Desktop 支持远程开发 | 🔴 OPEN | 78 | 439 | **最高赞需求**。用户希望桌面版支持 SSH/容器远程开发，对标 VS Code Remote，目前仅限浏览器版的限制严重影响工作流迁移 |
| [#11981](https://github.com/openai/codex/issues/11981) | 单 agent 运行时 100% CPU 占用 | 🔴 OPEN | 18 | 0 | 性能 regression 典型案例，Mac 用户反馈即使仅运行一个 agent 也出现 CPU 爆满，与 [#15620](https://github.com/openai/codex/issues/15620) 共同指向 Electron/Node 后台进程调度问题 |
| [#13784](https://github.com/openai/codex/issues/13784) | `/compact` 远程压缩任务报错 | 🔴 OPEN | 17 | 8 | 上下文压缩功能稳定性问题，Windows 平台高发，错误信息 "Error running remote compact task" |
| [#14860](https://github.com/openai/codex/issues/14860) | Linux `/compact` 超时问题修复方案 | 🔴 OPEN | 13 | 9 | 社区贡献者 Grallen 主动提交 bug fix，展示开源协作价值，等待官方合并 |
| [#15277](https://github.com/openai/codex/issues/15277) | Windows `apply_patch` 沙箱目录写入失败 | 🔴 OPEN | 7 | 0 | 沙箱权限边界问题，首次写入成功后后续操作失败，影响 Windows 开发者体验 |
| [#15503](https://github.com/openai/codex/issues/15503) | 正常使用中 CPU 飙升 | 🔴 OPEN | 5 | 6 | 26.318.11754 版本回归，debug 日志显示毫秒级循环输出，疑似轮询逻辑缺陷 |
| [#15620](https://github.com/openai/codex/issues/15620) | 空闲时高 CPU：后台 git/subprocess 空转 | 🔴 OPEN | 4 | 1 | **新增关键议题**。Electron 应用闲置时仍持续 CPU 活动，进程监控显示 git 子进程频繁启动 |
| [#15169](https://github.com/openai/codex/issues/15169) | Playwright MCP 会话记忆丢失 | 🔴 OPEN | 4 | 7 | macOS 应用更新后，"approve for this session" 选项消失，MCP 工具调用体验倒退 |
| [#15680](https://github.com/openai/codex/issues/15680) | Agent 可未经权限修改 `.codex/config.toml` | 🔴 OPEN | 3 | 0 | **安全边界问题**。沙箱隔离失效，agent 能自主修改项目级配置，引发权限模型担忧 |

---

## 4. 重要 PR 进展（精选 10 项）

| # | 标题 | 作者 | 核心功能 |
|:---|:---|:---|:---|
| [#15701](https://github.com/openai/codex/pull/15701) | TUI: 新增 `/btw` 旁路提问线程 | charley-oai | **交互创新**。支持从当前会话 fork 出临时侧线程提问，按 Esc/Ctrl+C 返回主线程，保持主对话流不被打断——对标 Claude 的边聊功能 |
| [#15699](https://github.com/openai/codex/pull/15699) | 延迟 fork 上下文注入至首回合 | charley-oai | 优化 fork 性能，移除启动时的 `build_initial_context` 注入，减少内存开销 |
| [#15597](https://github.com/openai/codex/pull/15597) | 本地临时屏幕录制 v1 | kliu128 | **新功能**。进程级后台录屏，需双开关启用（`features.screen_recording` + `recording.screen.enabled`），为 agent 视觉理解铺路 |
| [#15531](https://github.com/openai/codex/pull/15531) | PostToolUse 非流式 shell 钩子 | eternal-openai | 扩展 hooks 系统，支持 shell 命令执行后的同步回调，与 [#15211](https://github.com/openai/codex/pull/15211) PreToolUse 形成完整生命周期 |
| [#15583](https://github.com/openai/codex/pull/15583) | 复用 app-server 状态 DB 冷路径 | charley-oai | 架构优化，避免重复打开 `StateRuntime`，提升 SQLite 查询效率 |
| [#15548](https://github.com/openai/codex/pull/15548) | 提取 rollout 为独立 crate | aibrahim-oai | 代码重构，将 rollout 录制、元数据、策略等模块从 core 分离，为分布式训练/回放系统奠基 |
| [#15667](https://github.com/openai/codex/pull/15667) | Guardian 审查超时显式处理 | charley-oai | 超时时间 90s→120s，新增 `TimedOut` 终端状态，超时转为模型可见的失败文本而非直接拒绝 |
| [#15693](https://github.com/openai/codex/pull/15693) | 修复旧版 bubblewrap 兼容性 | viyatb-oai | 解决 `--argv0` 参数在老版本 bwrap 上的兼容问题，优先使用系统 `/usr/bin/bwrap` |
| [#15695](https://github.com/openai/codex/pull/15695) | 配置加载异步化迁移 | pakrym-oai | 从 `resolve_root_git_project_for_trust` 开始推进全链路 async，为 I/O 密集型操作铺路 |
| [#15688](https://github.com/openai/codex/pull/15688) | 插件显式引导语序调整 | charley-oai | 将插件 mention 指导置于用户输入之前，优化模型对插件意图的理解优先级 |

---

## 5. 功能需求趋势

基于 50 条活跃 Issue 分析，社区关注呈 **"一核两翼"** 分布：

```
┌─────────────────────────────────────────┐
│           🔥 核心痛点：计费透明          │
│    token 消耗异常、速率限制、用量重置      │
│         (Issue #14593, #14349)          │
├─────────────────────────────────────────┤
│  🛠️ 左翼：IDE/编辑器生态深度集成         │
│    • 远程开发支持 (#10450)               │
│    • VS Code 扩展 changelog (#4323)      │
│    • 持久化 agent 进程 (#14110)          │
├─────────────────────────────────────────┤
│  ⚡ 右翼：性能与资源效率                 │
│    • CPU/内存占用优化 (#11981,#15503,#15620) │
│    • 沙箱隔离强化 (#15680, #15277)       │
│    • 上下文压缩稳定性 (#13784, #14860)    │
└─────────────────────────────────────────┘
```

**新兴趋势**：TUI 交互创新（`/btw`, `/loop`, YOLO 模式快捷键）与 MCP 工具链成熟度成为差异化竞争点。

---

## 6. 开发者关注点

| 痛点类别 | 具体表现 | 代表 Issue |
|:---|:---|:---|
| **计费焦虑** | token 消耗不可预测、速率限制骤降、Business/Teams 账户未获预期重置 | [#14593](https://github.com/openai/codex/issues/14593), [#14349](https://github.com/openai/codex/issues/14349) |
| **Windows 二等公民** | `apply_patch` 沙箱故障、路径空格处理、权限错误 (EPERM) | [#15277](https://github.com/openai/codex/issues/15277), [#14594](https://github.com/openai/codex/issues/14594), [#14688](https://github.com/openai/codex/issues/14688) |
| **性能 regression** | 空闲 CPU 空转、Electron 后台进程失控、git 子进程频繁启动 | [#11981](https://github.com/openai/codex/issues/11981), [#15620](https://github.com/openai/codex/issues/15620), [#15503](https://github.com/openai/codex/issues/15503) |
| **企业级工作流缺口** | 无远程开发、无持久化 agent、缺乏任务调度/定时能力 | [#10450](https://github.com/openai/codex/issues/10450), [#14110](https://github.com/openai/codex/issues/14110), [#8317](https://github.com/openai/codex/issues/8317) |
| **安全边界模糊** | agent 可自修改配置、沙箱逃逸风险 | [#15680](https://github.com/openai/codex/issues/15680) |
| **hooks 生态待完善** | PreToolUse/PostToolUse 刚落地，社区期待代码质量门禁、破坏性操作拦截 | [#14754](https://github.com/openai/codex/issues/14754), [#15531](https://github.com/openai/codex/pull/15531) |

---

> 📊 数据来源：[openai/codex](https://github.com/openai/codex) | 统计周期：2026-03-24 至 2026-03-25

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-03-25

---

## 今日速览

今日社区聚焦**稳定性提升**与**智能体架构演进**：v0.36.0-preview.0 发布引入多注册表架构支持子代理工具过滤，同时 CI 基础设施持续加固，多项 flaky 测试被移除非阻塞套件。GSoC 项目启动带动行为评估与开源社区建设议题升温。

---

## 版本发布

### v0.36.0-preview.0 & v0.35.0

| 版本 | 核心更新 |
|:---|:---|
| **v0.36.0-preview.0** | • **多注册表架构**：支持子代理工具过滤，提升代理协作灵活性 [#22712](https://github.com/google-gemini/gemini-cli/pull/22712) |
| **v0.35.0** | • **可定制键盘快捷键**：用户可自定义 CLI 交互快捷键 [#21945](https://github.com/google-gemini/gemini-cli/pull/21945)<br>• **AgentLoopContext 线程化**：核心架构优化，为复杂代理工作流奠基 [#21944](https://github.com/google-gemini/gemini-cli/pull/21944) |

---

## 社区热点 Issues

| # | 议题 | 重要性 | 社区反应 |
|:---|:---|:---|:---|
| [#23331](https://github.com/google-gemini/gemini-cli/issues/23331) | **GSoC：行为评估、质量与开源社区建设** | 🔥 **战略级** | 52 评论，14 👍。Google 官方 Summer of Code 项目，直接决定外部开发者参与质量评估体系的开放程度 |
| [#23328](https://github.com/google-gemini/gemini-cli/issues/23328) | 优化测试套件输出日志 | 工程效率 | 41 评论。成功测试输出数十万字符日志，严重拖慢 CI 反馈速度，急需治理 |
| [#23230](https://github.com/google-gemini/gemini-cli/issues/23230) | 退出 plan 模式未切换模型 | 用户体验 | 10 评论。gemini-3-flash-preview 切换逻辑缺陷，影响成本优化策略落地 |
| [#21109](https://github.com/google-gemini/gemini-cli/issues/21109) | 语音模式动画波形可视化 | 交互创新 | 9 评论。GSoC 项目 11 明确需求，Live API 需要状态反馈增强 |
| [#23717](https://github.com/google-gemini/gemini-cli/issues/23717) | 工作空间边界用户审批不一致 | **安全漏洞** | 2 评论。bash 工具与文件系统工具对外部目录的审批策略存在差异，需紧急修复 |
| [#22855](https://github.com/google-gemini/gemini-cli/issues/22855) | `/plan` 支持直接传参 | 效率优化 | 2 评论。减少交互步骤，一键启动规划模式 |
| [#23728](https://github.com/google-gemini/gemini-cli/issues/23728) | 子代理模型 steering 支持 | 架构能力 | 1 评论。当前子代理无法被 steering，限制精细化控制 |
| [#23724](https://github.com/google-gemini/gemini-cli/issues/23724) | 持久化项目级 Tracker 存储 | 数据管理 | 1 评论。任务状态从临时目录迁移至 `.gemini/tracker/`，支持 Git 协作 |
| [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) | 子代理感知活跃审批模式 | 一致性 | 1 评论。策略引擎与代理指令冲突，需统一认知 |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | 记忆路由：全局 vs 项目 | 个性化 | 1 评论。用户偏好与代码库特定记忆分离存储 |

---

## 重要 PR 进展

| # | 功能/修复 | 技术价值 |
|:---|:---|:---|
| [#23732](https://github.com/google-gemini/gemini-cli/pull/23732) | 将 flaky ctrl-c 测试移入非阻塞套件 | CI 稳定性：遵循 #23259 模式，解除 PR 阻塞 |
| [#23731](https://github.com/google-gemini/gemini-cli/pull/23731) | 跳过 macOS  flaky Ctrl+C 测试 | 临时止损：E2E 测试在 macOS 信号处理不可靠 |
| [#23729](https://github.com/google-gemini/gemini-cli/pull/23729) | 条件暴露 shell 工具 `additional_permissions` | 安全加固：仅沙箱启用时向模型暴露权限参数 |
| [#23719](https://github.com/google-gemini/gemini-cli/pull/23719) | 引入安全/丰富双主题，支持真彩色 | 可访问性：256 色终端显式映射，解决一致性 issue |
| [#23720](https://github.com/google-gemini/gemini-cli/pull/23720) | 新增 CI Skill：自动化失败复现 | 开发者体验：推送后主动诊断，替代被动等待 |
| [#23727](https://github.com/google-gemini/gemini-cli/pull/23727) | 网页工具选择行为评估 | 质量基建：区分 `web_fetch` 与 `google_web_search` 的智能选择 |
| [#23282](https://github.com/google-gemini/gemini-cli/pull/23282) | 沙箱 `forbiddenPaths` 跨平台实现 | 安全能力：macOS/Linux/Windows 统一路径管控 |
| [#23725](https://github.com/google-gemini/gemini-cli/pull/23725) | 夜间评估运行次数 3→10 | 数据精度：消除噪声基底，建立高保真稳定性基线 |
| [#22869](https://github.com/google-gemini/gemini-cli/pull/22869) | 动态切换备用缓冲区模式 | 灵活性：会话中无缝切换全屏/内联模式 |
| [#23064](https://github.com/google-gemini/gemini-cli/pull/23064) | 上下文压缩 UI 重设计 | 体验优化：强制自动压缩，灰色斜体弱化干扰 |

---

## 功能需求趋势

基于 50 条活跃 Issue 分析，社区关注焦点呈现三大方向：

```
┌─────────────────────────────────────────────────────────┐
│  1. 智能体架构深化 (35%)                                 │
│     • 子代理 steering / 记忆路由 / 审批模式感知           │
│     • AST 感知代码工具（#22745 #22746）                   │
│     • SDD 工作流与 Task Tracker 深度集成                  │
├─────────────────────────────────────────────────────────┤
│  2. 开发者体验与质量工程 (30%)                           │
│     • 行为评估体系开放（GSoC 核心）                       │
│     • CI 稳定性与 flaky 测试治理                          │
│     • 技能（Skills）打包分发机制                          │
├─────────────────────────────────────────────────────────┤
│  3. 交互与可视化增强 (25%)                               │
│     • 语音模式波形动画 / 动态主题切换                     │
│     • Plan 模式终端高度自适应 / 任务列表 UX               │
├─────────────────────────────────────────────────────────┤
│  4. 安全与沙箱 (10%)                                    │
│     • 工作空间边界一致性 / 动态权限扩展                   │
└─────────────────────────────────────────────────────────┘
```

---

## 开发者关注点

| 痛点类别 | 具体表现 | 代表 Issue |
|:---|:---|:---|
| **测试基础设施脆弱** | macOS 信号测试不可靠、日志洪水阻塞反馈 | #23733 #23328 |
| **代理行为不可预测** | 临时脚本散落各处、模型切换失效 | #23571 #23230 |
| **质量评估门槛高** | 外部开发者难以参与 prompt/tools 评估 | #23331 |
| **记忆管理混乱** | 全局/项目记忆未分离、主动写入不足 | #22819 #22809 |
| **沙箱策略不一致** | 跨工具审批逻辑差异、权限参数暴露时机 | #23717 #23729 |

---

*数据来源：google-gemini/gemini-cli | 生成时间：2026-03-25*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-03-25

## 今日速览

今日社区活跃度较高，共 50 个 Issues 有更新，但无新版本发布。核心矛盾集中在**组织级 MCP 服务器策略误报**（多个用户反馈第三方 MCP 被错误禁用）以及**模型可用性不一致**（CLI 与 VS Code 模型列表不同步）。此外，WSL 性能问题和终端兼容性需求持续发酵。

---

## 社区热点 Issues

| # | 标题 | 状态 | 关键度 | 社区反应 | 核心要点 |
|---|------|------|--------|----------|----------|
| [#1703](https://github.com/github/copilot-cli/issues/1703) | CLI 未列出组织已启用的模型（如 Gemini 3.1 Pro） | 🔵 OPEN | ⭐⭐⭐⭐⭐ | 13 评论, 22 👍 | **企业用户痛点**：同一账户下 VS Code 可见的模型 CLI 不可见，影响工作流一致性 |
| [#2236](https://github.com/github/copilot-cli/issues/2236) | 组织注册表 MCP 服务器消失，误报"被组织禁用" | 🔵 OPEN | ⭐⭐⭐⭐⭐ | 3 评论, 7 👍 | **v1.0.11 回归问题**：与 #1707 类似，组织策略解析存在 Bug |
| [#172](https://github.com/github/copilot-cli/issues/172) | MCP 超时配置不被尊重 | 🔵 OPEN | ⭐⭐⭐⭐ | 7 评论, 2 👍 | 长期运行 MCP 服务器场景受阻，`mcp-config.json` 配置失效 |
| [#2050](https://github.com/github/copilot-cli/issues/2050) | Claude Sonnet 4.6 执行失败：503 GOAWAY 错误 | 🔵 OPEN | ⭐⭐⭐⭐ | 6 评论, 3 👍 | 模型层稳定性问题，Gemini 3 Pro 正常，指向 Anthropic 侧或路由问题 |
| [#1477](https://github.com/github/copilot-cli/issues/1477) | "Continuing autonomously" 计费提示异常 | 🔵 OPEN | ⭐⭐⭐⭐ | 6 评论, 7 👍 | 自动模式计费逻辑争议，用户认为模型已完成仍触发 premium 请求 |
| [#2208](https://github.com/github/copilot-cli/issues/2208) | WSL 下 CPU 100% 且 TUI 无响应 | 🔵 OPEN | ⭐⭐⭐⭐ | 1 评论 | 长会话（Claude Opus 4.6 1M）状态管理问题，已收集性能 trace |
| [#2101](https://github.com/github/copilot-cli/issues/2101) | 瞬态 API 错误导致速率限制 | 🔵 OPEN | ⭐⭐⭐⭐ | 5 评论, 2 👍 | 重试机制与速率限制策略冲突，影响可用性 |
| [#989](https://github.com/github/copilot-cli/issues/989) | `--acp` 模式工具 ID 返回错误 | 🔵 OPEN | ⭐⭐⭐ | 5 评论, 3 👍 | ACP 协议实现缺陷，影响客户端集成 |
| [#2269](https://github.com/github/copilot-cli/issues/2269) | CLI SDK 多会话 CPU 占用过高 | 🔵 OPEN | ⭐⭐⭐ | 0 评论 | 4 核 Codespace 无法使用，GitHub Support 已确认问题 |
| [#2272](https://github.com/github/copilot-cli/issues/2272) | GPT-5.4 表现劣于 GPT-5.3-codex | 🔵 OPEN | ⭐⭐⭐ | 0 评论 | 模型升级质量回归，Codex 在相同模型下表现更优 |

---

## 重要 PR 进展

**今日无 Pull Request 更新。**

---

## 功能需求趋势

基于今日 50 个活跃 Issue 分析，社区关注方向呈以下分布：

| 趋势方向 | 代表 Issue | 热度 |
|----------|-----------|------|
| **终端兼容性扩展** | [#1257](https://github.com/github/copilot-cli/issues/1257) Termux/Android, [#2246](https://github.com/github/copilot-cli/issues/2246) Warp, [#2252](https://github.com/github/copilot-cli/issues/2252) Windows Terminal 滚动条 | 🔥🔥🔥🔥 |
| **权限与沙箱精细化** | [#2256](https://github.com/github/copilot-cli/issues/2256) 持久化二进制白名单, [#2273](https://github.com/github/copilot-cli/issues/2273) PowerShell 只读命令免确认 | 🔥🔥🔥🔥 |
| **性能与资源优化** | [#2208](https://github.com/github/copilot-cli/issues/2208) WSL CPU 100%, [#2269](https://github.com/github/copilot-cli/issues/2269) SDK 多会话高负载 | 🔥🔥🔥🔥 |
| **模型生态一致性** | [#1703](https://github.com/github/copilot-cli/issues/1703) 模型列表同步, [#2272](https://github.com/github/copilot-cli/issues/2272) GPT-5.4 质量回归 | 🔥🔥🔥 |
| **MCP 生态成熟度** | [#172](https://github.com/github/copilot-cli/issues/172) 超时配置, [#2236](https://github.com/github/copilot-cli/issues/2236) 组织策略误报 | 🔥🔥🔥 |
| **启动模式可编程** | [#2268](https://github.com/github/copilot-cli/issues/2268) `--plan`/`--autopilot` 标志, [#2227](https://github.com/github/copilot-cli/issues/2227) 自动分享会话 | 🔥🔥 |

---

## 开发者关注点

### 🔴 高频痛点

1. **组织策略解析不可靠**  
   - [#1707](https://github.com/github/copilot-cli/issues/1707) [#2236](https://github.com/github/copilot-cli/issues/2236) 显示"第三方 MCP 被组织禁用"警告与实际策略不符，降级到 v0.0.417 可恢复，确认为 v1.0.11 回归

2. **跨端体验割裂**  
   - VS Code 与 CLI 的模型可用性、技能目录（`~/.agents/skills`）不一致，企业用户难以统一工作流

3. **长会话稳定性**  
   - Claude Opus 4.6 1M 上下文场景下 WSL CPU 飙升、TUI 卡死，状态管理疑似内存泄漏

### 🟡 新兴需求

- **Shell 显式配置** ([#2271](https://github.com/github/copilot-cli/issues/2271))：Windows 下强制使用 Bash 而非 PowerShell
- **PLAN 模式强制执行** ([#2270](https://github.com/github/copilot-cli/issues/2270))：`/fleet` 代理绕过计划模式直接修改代码
- **会话可恢复性** ([#2227](https://github.com/github/copilot-cli/issues/2227))：自动 `/share` 避免工作丢失

---

*数据来源：github.com/github/copilot-cli | 统计周期：2026-03-24*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-03-25

---

## 今日速览

今日社区活跃度较高，**v1.25.0 版本引发多起工具稳定性问题**，`writefile` 工具在 Windows 和 Linux 平台均出现参数解析错误。同时，**插件系统正式标记为 Beta 状态**，生命周期钩子系统和可配置压缩模型等新功能进入代码审查阶段。

---

## 社区热点 Issues

| # | 状态 | 标题 | 核心问题 | 社区关注度 |
|---|:---|:---|:---|:---:|
| [#1564](https://github.com/MoonshotAI/kimi-cli/issues/1564) | 🔴 OPEN | v1.25.0 writefile 工具频繁报错 | Windows 平台文件写入工具稳定性退化，用户反馈报错率显著上升 | 👍 0 |
| [#1565](https://github.com/MoonshotAI/kimi-cli/issues/1565) | 🔴 OPEN | WriteFile/Shell 工具 HTML 内容引号解析失败 | 含引号的 HTML 内容触发 `Invalid arguments` 错误，影响前端开发场景 | 👍 0 |
| [#1566](https://github.com/MoonshotAI/kimi-cli/issues/1566) | 🔴 OPEN | 插件系统兼容性与安装疑问 | 用户询问是否支持 Claude Code/Open Code 插件生态，文档指引不足 | 👍 1 |
| [#1334](https://github.com/MoonshotAI/kimi-cli/issues/1334) | 🔴 OPEN | JetBrains IDE 集成不可用 | 长期存在的 IDE 兼容性问题，影响专业开发者工作流 | 👍 0 |
| [#1567](https://github.com/MoonshotAI/kimi-cli/issues/1567) | 🔴 OPEN | Mac 平台 Ctrl+W 剪贴板污染问题 | 终端快捷键与系统剪贴板行为冲突，用户体验痛点 | 👍 0 |
| [#1560](https://github.com/MoonshotAI/kimi-cli/issues/1560) | 🔴 OPEN | VS Code 插件 Skill 交互优化 | 选择 Skill 后自动触发请求，与 CLI 行为不一致 | 👍 0 |
| [#1559](https://github.com/MoonshotAI/kimi-cli/issues/1559) | 🔴 OPEN | 官网安装命令报错 | 新用户入门障碍，影响用户获取 | 👍 0 |
| [#1476](https://github.com/MoonshotAI/kimi-cli/issues/1476) | ✅ CLOSED | Plan 模式状态检测异常 | v1.22.0 中模式状态提示与实际不符，已修复 | 👍 0 |
| [#1380](https://github.com/MoonshotAI/kimi-cli/issues/1380) | ✅ CLOSED | ACP TerminalHandle 模块属性错误 | v1.17-1.18 版本 ACP 终端工具崩溃，依赖 API 变更 | 👍 0 |

> **关键洞察**：v1.25.0 版本发布后出现**工具链稳定性退潮**，`writefile` 相关 Issue 占今日新增 Bug 的 40%，建议用户暂缓升级生产环境。

---

## 重要 PR 进展

| # | 状态 | 标题 | 技术价值 | 作者 |
|---|:---|:---|:---|:---|
| [#1561](https://github.com/MoonshotAI/kimi-cli/pull/1561) | 🟡 OPEN | 生命周期钩子系统 (Wire 1.7) | **重大架构升级**：13 种钩子事件类型，覆盖工具调用前后、会话启停等关键节点，对标 Claude Code 生态 | tempurai |
| [#1549](https://github.com/MoonshotAI/kimi-cli/pull/1549) | 🟡 OPEN | 可配置压缩模型支持 | 允许独立配置上下文压缩模型，避免占用主对话模型配额，长会话场景性能优化 | CanerKocak |
| [#1512](https://github.com/MoonshotAI/kimi-cli/pull/1512) | 🟡 OPEN | ACP 初始化 ValueError 修复 | 解决 IDE 集成中 `sys.argv` 不含 `kimi` 导致的启动失败，提升第三方工具兼容性 | zhang-xzh |
| [#1562](https://github.com/MoonshotAI/kimi-cli/pull/1562) | ✅ CLOSED | YOLO 模式 QuestionRequest 自动解析 | 修复 `--print` 模式下工具调用挂起问题，非交互式场景稳定性提升 | RealKai42 |
| [#1563](https://github.com/MoonshotAI/kimi-cli/pull/1563) | ✅ CLOSED | Jinja2 include 指令支持 | 系统提示词模板化能力增强，支持多文件组合，便于团队提示工程管理 | bigeagle |
| [#1558](https://github.com/MoonshotAI/kimi-cli/pull/1558) | ✅ CLOSED | 插件系统 Beta 标记 | 官方明确插件系统处于测试阶段，管理用户预期，降低稳定性投诉风险 | tempurai |
| [#1400](https://github.com/MoonshotAI/kimi-cli/pull/1400) | ✅ CLOSED | ACP 0.8 TerminalHandle API 迁移 | 完成 ACP 库重大版本适配，终端工具链现代化 | howardpen9 |
| [#1213](https://github.com/MoonshotAI/kimi-cli/pull/1213) | 🟡 OPEN | Nix 开发环境支持 | 拓展开发者生态，支持声明式开发环境配置 | jetjinser |

> **架构趋势**：本周集中出现**扩展性基础设施**建设（钩子系统、插件系统、压缩模型配置），表明产品正从单一工具向平台化演进。

---

## 功能需求趋势

基于今日 Issues 与近期社区讨论，提炼三大核心方向：

| 优先级 | 方向 | 证据 |
|:---|:---|:---|
| 🔥 **P0** | **工具链稳定性** | v1.25.0 writefile、Shell 工具连续报错，#1564 #1565 为今日最高优先级 |
| 🔥 **P0** | **IDE 生态集成** | JetBrains (#1334)、VS Code (#1560) 双平台均有活跃未解决问题 |
| ⚡ **P1** | **插件生态开放** | #1566 询问第三方插件兼容，#1549 #1561 构建扩展基础设施 |
| ⚡ **P1** | **终端体验优化** | Mac 快捷键冲突 (#1567)、Skill 交互一致性 (#1560) |
| 📌 **P2** | **模型配置灵活性** | 压缩模型独立配置 (#1549) 进入审查，长上下文场景需求显现 |

---

## 开发者关注点

### 🔴 高频痛点

1. **版本升级风险**  
   v1.25.0 引入插件系统的同时，核心文件操作工具出现回归，开发者呼吁建立 **Canary 发布通道** 或更完善的集成测试。

2. **跨平台行为一致性**  
   VS Code 插件与 CLI 在 Skill 交互逻辑上存在差异（#1560），Mac 终端快捷键与 Linux 行为冲突（#1567），**统一 UX 规范**需求迫切。

3. **IDE 集成成熟度**  
   JetBrains 系列长期不可用（#1334 创建于 3 月 4 日），专业 Java/Python 开发者群体流失风险。

### 🟡 新兴需求

- **插件生态互通**：开发者明确询问 Claude Code/Open Code 插件兼容路径（#1566），生态开放性成为选型考量
- **非交互式场景优化**：YOLO 模式下的自动化流水线支持（#1562 相关场景）

---

*日报基于 GitHub 公开数据生成，关注 [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) 获取最新动态。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 | 2026-03-25

---

## 1. 今日速览

OpenCode 今日连发 **v1.3.1** 和 **v1.3.2** 两个版本，聚焦内存诊断与认证扩展；社区热议 **Claude OAuth 失效** 和 **TUI 浅色模式可读性** 问题，20+ 贡献者正协同攻关内存泄漏顽疾。

---

## 2. 版本发布

### v1.3.2（今日发布）
| 特性 | 说明 |
|:---|:---|
| **堆内存快照** | TUI 新增 "Write heap snapshot" 命令，可捕获 TUI 与 server 进程的内存快照，输出至 `tui.heapsnapshot` 和 `server.heapsnapshot`，助力调试内存问题 |

### v1.3.1（昨日发布）
| 特性 | 说明 |
|:---|:---|
| **Poe 认证集成** | 内置 Poe 作为认证提供商，支持 OAuth 与 API key（#18477） |
| **Bedrock 令牌缓存** | 自定义 Amazon Bedrock 提供商启用令牌缓存（#18959） |
| **语法高亮扩展** | 新增 Kotlin、HCL、Lua、TOML 支持（#18198） |
| **主题模式手动锁定** | 支持手动锁定/解锁主题模式 |

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 评论 | 核心看点 |
|:---|:---|:---|:---:|:---|
| [#16470](https://github.com/anomalyco/opencode/issues/16470) | 浅色模式下代码输出不可读 | 🔴 OPEN | 24 | **高优先级 UI 缺陷**：`opencode` 配色方案下代码几乎隐形，26 👍 声量高，影响基础可用性 |
| [#16697](https://github.com/anomalyco/opencode/issues/16697) | 多源内存泄漏导致 RAM 无限增长 | 🔴 OPEN | 14 | **史诗级协作攻关**：20+ 贡献者独立报告并提交 PR，v1.3.2 堆快照功能直接响应此问题 |
| [#17910](https://github.com/anomalyco/opencode/issues/17910) | Claude 模型 OAuth + cache_control 导致 HTTP 400 | 🔴 OPEN | 11 | **紧急回归**：3/17 起所有 Claude 模型失效，根因为 `@ai-sdk/anthropic` 无条件注入 `cache_control: ephemeral` |
| [#4804](https://github.com/anomalyco/opencode/issues/4804) | 高 CPU 占用（已关闭） | 🟢 CLOSED | 17 | 长期悬案的 Intel Mac 性能问题，昨日关闭，或已随版本迭代缓解 |
| [#7467](https://github.com/anomalyco/opencode/issues/7467) | GitHub 驱动的 Agent 市场 | 🔴 OPEN | 10 | **生态建设**：用户呼吁官方 Agent 共享/发现机制，避免手动复制文件 |
| [#11176](https://github.com/anomalyco/opencode/issues/11176) | 官方 VS Code 扩展 | 🔴 OPEN | 9 | **23 👍 高需求**：用户希望 OpenCode 作为原生 VS Code 扩展运行，而非独立应用 |
| [#17418](https://github.com/anomalyco/opencode/issues/17418) | Windows 远程服务器路径断裂 | 🔴 OPEN | 8 | 1.2.25 起 Windows 桌面端连接 Linux 服务器时路径显示异常，远程工作流受阻 |
| [#19034](https://github.com/anomalyco/opencode/issues/19034) | `opencode web` 完全失效（已关闭） | 🟢 CLOSED | 6 | 1.3.2 发布后即使未升级的用户也遭遇模型加载失败、会话丢失，疑似服务端变更 |
| [#18950](https://github.com/anomalyco/opencode/issues/18950) | Web UI 无法连接 Claude | 🔴 OPEN | 4 | 1.3.x 更新后 Anthropic 认证方式只剩 API key，OAuth 入口消失，用户困惑 |
| [#18364](https://github.com/anomalyco/opencode/issues/18364) | Windows TUI 输入时崩溃 | 🔴 OPEN | 4 | 输入过程中频繁崩溃且编辑状态丢失，严重影响 Windows 用户体验 |

---

## 4. 重要 PR 进展

| # | 标题 | 作者 | 核心内容 |
|:---|:---|:---|:---|
| [#19041](https://github.com/anomalyco/opencode/pull/19041) | 自动重读陈旧文件防止重试循环 | anandgupta42 | 解决外部格式化工具修改文件后的 `FileTime.assert` 冲突，避免模型数百次无效重试 |
| [#18900](https://github.com/anomalyco/opencode/pull/18900) | 恢复 git-backed 审查模式 | nexxeln | 桌面用户可检视未提交变更与分支级 diff，基于 Effect 原生 Git 服务重构 |
| [#18679](https://github.com/anomalyco/opencode/pull/18679) | Worktree 服务 Effect 化 | kitlangton | 核心架构迁移：Worktree 服务全面采用 Effect 模式，统一 git/文件系统操作 |
| [#18433](https://github.com/anomalyco/opencode/pull/18433) | AI SDK v6 支持 | rekram1-node | **WIP** 升级至 AI SDK 6.0，涉及模型转换、Copilot SDK、GitLab AI SDK 迁移 |
| [#19038](https://github.com/anomalyco/opencode/pull/19038) | 桌面应用内嵌浏览器 | atmikshetty | 用户无需离开应用即可浏览网页内容，提升工作流连续性 |
| [#19035](https://github.com/anomalyco/opencode/pull/19035) | 复制格式选项（Markdown/Email HTML） | andrewdunndev | 助手文本支持三种复制模式：原始 Markdown、纯文本、邮件友好 HTML |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | 移动端触摸优化 | noahbentusi | 针对手机/平板优化触摸交互，同时保持桌面体验不变 |
| [#18419](https://github.com/anomalyco/opencode/pull/18419) | 文件搜索迁移至 fff | nexxeln | 以 `fff` 层统一替换 ripgrep 后端，覆盖文件搜索、树形浏览、grep 操作 |
| [#16069](https://github.com/anomalyco/opencode/pull/16069) | Windows 原生 PowerShell 支持 | Hona | 优先使用 PowerShell 替代 Git Bash，移除 `realpath` 子进程依赖 |
| [#6629](https://github.com/anomalyco/opencode/pull/6629) | OpenTelemetry 可观测性 | Hona | 全链路 OTEL 埋点，支持 Aspire Dashboard，`bun run dev:otel` 一键启动 |

---

## 5. 功能需求趋势

基于 50 条活跃 Issue 分析，社区关注焦点呈 **三极分布**：

| 方向 | 热度 | 典型诉求 |
|:---|:---:|:---|
| **IDE 生态集成** | 🔥🔥🔥 | VS Code 官方扩展（#11176）、JetBrains 插件、远程开发优化 |
| **稳定性与性能** | 🔥🔥🔥 | 内存泄漏根治（#16697）、CPU 占用、Windows 崩溃、TUI 渲染缺陷 |
| **认证与模型接入** | 🔥🔥🔥 | Claude OAuth 修复、Poe 集成（已部分实现）、多提供商灵活切换 |
| **协作与共享** | 🔥🔥 | GitHub Agent 市场（#7467）、会话历史搜索（#11819）、P2P 远程访问（#19013） |
| **移动端体验** | 🔥🔥 | 触摸优化（PR #18767）、手机端远程连接、WebRTC 直连 |
| **开发者工具链** | 🔥 | 更多格式化器（black、taplo）、MCP 服务器运行时开关（#514） |

---

## 6. 开发者关注点

### 🔴 紧急痛点
- **Claude 接入断裂**：OAuth 路径消失 + `cache_control` 冲突导致 Anthropic 用户大规模受阻
- **Windows 二等公民**：路径处理、权限匹配、输入崩溃等问题密集，跨平台一致性不足
- **主题/可访问性**：浅色模式代码不可读、系统主题对比度失效等 UI 基础体验缺陷

### 🟡 高频诉求
- **"我想留在熟悉的环境里"**：VS Code 扩展呼声最高，开发者不愿切换独立应用
- **"别让我手动管内存"**：内存泄漏虽有多 PR 修复，但用户期待根本性架构解决而非诊断工具
- **"Agent 怎么分享"**：团队场景下 Agent 配置同步困难，社区市场机制缺失

### 🟢 积极信号
- 核心架构向 **Effect** 迁移加速（Worktree、Git 服务），长期可维护性提升
- **Poe 集成** 快速落地，显示团队对多提供商战略的响应能力
- 社区协作氛围活跃：20+ 贡献者自发协同攻关内存问题，PR 审查与重构迭代频繁

---

*数据来源：github.com/anomalyco/opencode | 统计周期：2026-03-24 至 2026-03-25*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-03-25

---

## 今日速览

今日社区活跃度高涨，共 50 个 Issues 和 20 个 PR 更新。v0.13.0 夜间版本发布，重点修复 IDE 集成问题；社区最关注的是 VSCode 扩展体验优化、中文路径处理 bug，以及权限系统的 UX 改进。多个高价值功能进入开发阶段，包括 Telegram 频道集成、循环任务执行和后续建议功能。

---

## 版本发布

### v0.13.0-nightly.20260324.aebe889b3
- **类型**: 夜间构建版
- **变更**: 完整变更日志见 [compare 页面](https://github.com/QwenLM/qwen-code/compare/v0.13.0...v0.13.0-nightly.20260324.aebe889b3)

---

## 社区热点 Issues

| # | 状态 | 标题 | 重要性与社区反应 |
|---|:---:|---|---|
| [#1370](https://github.com/QwenLM/qwen-code/issues/1370) | 🟢 OPEN | VSCode 扩展设置入口缺失 | **高关注度**（6 评论）。用户反馈找不到设置 UI 和 IDE 命令，文档缺失严重，影响新用户上手体验。 |
| [#241](https://github.com/QwenLM/qwen-code/issues/241) | 🟢 OPEN | Shift+Enter 无法换行直接发送消息 | **长期痛点**（4👍）。与 Claude Code 等工具行为不一致，严重影响编码场景下的多行输入体验。 |
| [#2626](https://github.com/QwenLM/qwen-code/issues/2626) | 🟢 OPEN | Linux 下权限请求导致 CLI 崩溃 | **严重 bug**（4 评论）。Ubuntu Server 24.04 上必现崩溃，影响生产环境使用，已确认回滚版本可解决。 |
| [#2632](https://github.com/QwenLM/qwen-code/issues/2632) | 🟢 OPEN | 回答永不结束（10-15 分钟） | **严重体验问题**。流式响应无法正常终止，需手动 ESC 中断，影响核心交互流程。 |
| [#2498](https://github.com/QwenLM/qwen-code/issues/2498) | 🔴 CLOSED | Agent 无法定位项目配置文件 | **已解决**。Agent 缺乏目录探索能力导致找不到 settings.json 等文件，修复后提升配置感知能力。 |
| [#2605](https://github.com/QwenLM/qwen-code/issues/2605) | 🟢 OPEN | Windows 命令行支持剪贴板粘贴图片 | **实用功能请求**。避免手动输入路径，提升 Windows 开发者效率。 |
| [#1897](https://github.com/QwenLM/qwen-code/issues/1897) | 🟢 OPEN | LLM 错误在中文路径添加空格 | **中文用户痛点**。`DNF私服研究` 被错误处理为 `DNF 私服研究`，导致路径验证失败，长期未修复。 |
| [#2640](https://github.com/QwenLM/qwen-code/issues/2640) | 🟢 OPEN | 会话内权限选择不保存 | **高赞问题**（5👍）。"Always allow in this project" 重复询问，严重打断工作流。 |
| [#2523](https://github.com/QwenLM/qwen-code/issues/2523) | 🟢 OPEN | Web UI 集成后续建议功能 | **对标竞品**。请求类似 Claude Code 的任务完成后智能建议，提升交互连贯性。 |
| [#2304](https://github.com/QwenLM/qwen-code/issues/2304) | 🟢 OPEN | VSCode 插件 `<think>` 标签导致中断 | **模型输出处理 bug**。思考标签被错误截断，浪费多次 API 调用，成本敏感问题。 |

---

## 重要 PR 进展

| # | 状态 | 标题 | 功能/修复内容 |
|---|:---:|---|---|
| [#2643](https://github.com/QwenLM/qwen-code/pull/2643) | 🟢 OPEN | 新增 `/loop` 循环任务命令 | **重磅功能**。支持周期性执行提示词，可配置间隔时间，适用于监控、定时任务等场景。 |
| [#2628](https://github.com/QwenLM/qwen-code/pull/2628) | 🟢 OPEN | Telegram 频道集成（ACP 桥接） | **生态扩展**。通过 Agent Client Protocol 实现 Telegram 消息平台交互，开启多通道支持。 |
| [#2525](https://github.com/QwenLM/qwen-code/pull/2525) | 🟢 OPEN | 后续建议功能（Follow-up Suggestions） | **体验升级**。任务完成后智能推荐下一步操作（如"提交代码"、"运行测试"），对标 Claude Code NES。 |
| [#2637](https://github.com/QwenLM/qwen-code/pull/2637) | 🟢 OPEN | 权限系统 UX 改进 | **可读性优化**。权限标签从 `Read(//Users/alice/**)` 改为"read files in /Users/alice/"，并显示拒绝规则反馈。 |
| [#2645](https://github.com/QwenLM/qwen-code/pull/2645) | 🟢 OPEN | Windows Git Bash/MSYS2 壳层检测 | **兼容性修复**。解决 Windows 下 Git Bash 环境被错误识别为 cmd/PowerShell 的问题。 |
| [#2642](https://github.com/QwenLM/qwen-code/pull/2642) | 🟢 OPEN | 恢复 MCP `trust: true` 权限检查 | **回归修复**。v0.13.0 权限重构后 `trust: true` 失效，此 PR 恢复原有行为。 |
| [#2631](https://github.com/QwenLM/qwen-code/pull/2631) | 🟢 OPEN | 修复 IDE diff 确认卡死问题 | **IDE 集成修复**。子 Agent 触发的 diff 标签在用户确认后仍卡住等待的问题。 |
| [#2636](https://github.com/QwenLM/qwen-code/pull/2636) | 🟢 OPEN | 接受纯思考内容的 Gemini 响应 | **模型适配修复**。Gemini 思考模型仅返回 reasoning 内容时不再抛 `InvalidStreamError`。 |
| [#2548](https://github.com/QwenLM/qwen-code/pull/2548) | 🟢 OPEN | VSCode `/skills` 二级选择器 | **交互优化**。输入 `/skills` 后弹出技能列表二次选择，而非直接发送命令。 |
| [#2611](https://github.com/QwenLM/qwen-code/pull/2611) | 🟢 OPEN | PTY 竞态条件错误优雅处理 | **稳定性提升**。处理 `EIO`、`EBADF` 等伪终端退出时的良性错误，避免应用崩溃。 |

---

## 功能需求趋势

基于今日 50 个 Issues 分析，社区关注焦点集中在：

| 方向 | 热度 | 典型需求 |
|:---|:---:|---|
| **IDE 集成体验** | 🔥🔥🔥 | VSCode 扩展设置入口、剪贴板图片粘贴、会话重命名、diff 确认流程 |
| **国际化/中文支持** | 🔥🔥🔥 | 中文路径空格 bug、中英混合文件名处理、中文场景稳定性 |
| **权限系统优化** | 🔥🔥🔥 | 持久化许可白名单、人类可读权限标签、Policy Engine（类 Gemini CLI） |
| **交互效率** | 🔥🔥 | Shift+Enter 换行、后续建议、循环任务、YOLO 模式完善 |
| **多平台兼容性** | 🔥🔥 | Windows Git Bash 支持、Linux 崩溃修复、终端序列处理 |
| **模型适配** | 🔥 | OpenRouter 兼容、Gemini 思考模式、流式响应稳定性 |

---

## 开发者关注点

### 🔴 高频痛点
1. **权限确认疲劳** — "Always allow" 选项在会话内不生效，重复打断开发流（#2640）
2. **中文路径处理** — 长期存在的编码问题，影响中文开发者基础使用（#1897, #2496）
3. **IDE 集成粗糙** — VSCode 扩展缺乏设置 UI、文档缺失、diff 确认卡死（#1370, #2631）

### 🟡 体验差距
- **对标 Claude Code**：后续建议、Shift+Enter 换行、图片粘贴等功能存在明显差距
- **终端兼容性**：Windows 非标准壳层、Linux 服务器环境支持不足

### 🟢 积极信号
- 社区贡献活跃，Telegram 集成、循环任务等创新功能由开发者主动提交
- 权限系统持续迭代，UX 改进 PR 响应迅速

---

*日报生成时间：2026-03-25 | 数据来源：github.com/QwenLM/qwen-code*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*