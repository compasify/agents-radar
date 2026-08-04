# AI CLI 工具社区动态日报 2026-08-04

> 生成时间: 2026-08-04 01:22 UTC | 覆盖工具: 10 个

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

# AI CLI 工具生态横向对比分析报告（2026-08-04）

## 1. 生态全景

AI CLI 工具正集体从"对话式辅助"向"多智能体运行时"演变，但稳定性、成本透明化和多会话协作已成为全行业的共同瓶颈。头部工具（Claude Code、OpenAI Codex、Gemini CLI）进入平台化阶段，构建 hooks、插件、MCP、子代理等扩展机制；中部力量（OpenCode、Pi、Qwen Code）以高密度版本迭代和社区驱动快速追赶；与此同时，一个显著信号是——**跨工具的社区诉求高度趋同**，多会话协调、用量可见性、Windows/WSL 体验和 Agent 可靠性反复出现在几乎所有热门 Issue 之中。这说明行业已过"模型能力够不够"的争论期，进入"工程化体验决定胜负"的贴身肉搏阶段。

## 2. 各工具活跃度对比

| 工具 | 热点 Issues | 活跃 PR | Release | 今日发布 |
|---|---|---|---|---|
| Claude Code | 10 | 2 | v2.1.221 | ✅ 正式版 |
| OpenAI Codex | 10 | 10（全合并） | 2 个 Rust alpha | ✅ 预发布 |
| Gemini CLI | 10 | 10 | 1 个 nightly | ✅ 预发布 |
| GitHub Copilot CLI | 10 | 0 | v1.0.78 / v1.0.78-3 | ✅ 正式版 |
| Kimi Code CLI | 3（全部） | 8（6 开放） | 0 | ❌ |
| OpenCode | 10 | 10 | v1.18.12 | ✅ 正式版 |
| Pi | 10 | 10 | 0 | ❌ |
| Qwen Code | 10 | 10 | v0.21.4（v0.21.5 发布失败） | ✅ 正式版 |
| DeepSeek TUI | 10 | 17 | 0（v0.9.4 列车启动） | ❌ |
| Grok Build | 0 | 0 | 0 | ❌ 无活动 |

*注：热点 Issues 指各日报中列出的 Top 10（Kimi 为全部活跃条目）；PR 数为日报提及的条目，非全量。*

关键数据：**OpenAI Codex** 昨日合入 10 个内部优化 PR，合并效率最高；**DeepSeek TUI** PR 数量最多（17 个），其中 5 个由 Copilot 自动生成；**Kimi Code** 体量最小，但社区贡献者已深入 Hook 任务生命周期等核心架构。

## 3. 共同关注的功能方向

### 3.1 多会话协调与跨会话记忆（6 个工具）
- **Claude Code**：请求并行会话间通信 #24798（61 评论）、独立会话协调 #76727
- **OpenCode**：原生 session goals #27167 获 **123 👍**（今日最高赞）、持久记忆 #16077
- **Gemini CLI**：Auto Memory 系列，#26525 暴露脱敏时序缺陷
- **Kimi Code**：Memory System #1283（15 评论，存活超 5 个月）
- **DeepSeek TUI**：#2492 明确反馈"重启后无记忆"
- **Pi**：Harness v2 引入会话存储抽象（PR #7503）

### 3.2 用量与配额透明化（4 个工具）
- **Claude Code**：#13585 CLI 配额信息访问（**115 👍**，居其榜首）、#65687 空闲 token 消耗质疑
- **OpenAI Codex**：#33685 周限额消耗速度与旧版一致，信任危机
- **Gemini CLI**：配额回退导致上下文损坏（PR #28671）
- **Qwen Code**：#8432 Bailian Token Plan 模型列表不同步

### 3.3 Windows/WSL 深度支持（6 个工具）
- **OpenAI Codex**：#20214 Windows 卡顿（88 评论 / 78 👍，今日最热单 issue）
- **Pi**：#7064 WSL 路径错误、#6187 WSL 登录挂起、#7547 社区收集帖
- **Copilot CLI**：#4328 Ctrl+H 被 WSL2 误判
- **Qwen Code**：#8400 Windows 会话静默删除（P1）
- **Kimi Code**：#2577 GBK 编码崩溃、#2582 Windows 流挂起
- **Gemini CLI**：#21983 Wayland 浏览器代理失败（跨平台同类问题）

### 3.4 Agent/子代理可靠性（3 个工具）
- **Gemini CLI**：#22323 MAX_TURNS 中断误报为"GOAL 成功"（P1）、#21409 generalist agent 无限挂起
- **Claude Code**：#83366 子代理在 Windows 静默挂起数小时
- **OpenAI Codex**：#35097/#34700 gpt-5.6-luna 与 MultiAgent V2 不兼容

### 3.5 模型聚合与 BYOK（4 个工具）
- **Copilot CLI**：#3282 多 BYOK 模型（20👍）、#3709 /model 切换本地模型（20👍）
- **Pi**：#7560 Grok 4.5 缺失、#7571 新增 Cortecs 提供商
- **Qwen Code**：#8368 新增 Kimi 和小米 MiMo 提供商
- **DeepSeek TUI**：#1481 支持 OpenCode Go/Zen 供应商

## 4. 差异化定位分析

| 工具 | 核心定位 | 技术路线 / 独特优势 | 主要短板 |
|---|---|---|---|
| **Claude Code** | 企业级软件工程 Agent | Hook 安全门禁、GitHub 连接器、Focus view 降低 UI 噪声；生态文档最完善 | 连接稳定性（macOS ECONNRESET 一年未解）；多会话能力缺失 |
| **OpenAI Codex** | ChatGPT 生态的编码入口 | Codex Cloud 自动代码审查、Responses API、Rust 重写提升性能 | Windows 桌面端性能问题突出；模型与多智能体元数据不同步 |
| **Gemini CLI** | 自治 Agent 探索者 | 子代理架构最激进（generalist、codebase_investigator）、Auto Memory、AST-aware 路线 | "静默失败"频发：挂起、误报成功、配置被忽略 |
| **GitHub Copilot CLI** | GitHub 生态的聚合层 | 托管模型 + BYOK 混合，插件机制，版本发布节奏最稳定 | 插件只支持全局作用域；模型上线联动滞后 |
| **Kimi Code** | 轻量级长会话工具 | Moonshot 模型 + 多协议兼容（Anthropic/ACP）；社区 PR 质量高 | 功能规模最小；Web UI 处于技术预览 |
| **OpenCode** | 社区驱动的全能型 CLI | 对 session goals、可点击链接等高赞诉求响应迅速；TUI + 桌面端双形态 | 桌面端稳定性问题密集（挂起、闪烁、滚动跳位） |
| **Pi** | Rust 高性能多提供商聚合 | 架构投入大（Harness v2、SessionStorage 抽象）；JSON 流输出性能专项优化 | 模型目录刷新循环等工程质量问题；Windows 路径硬伤 |
| **Qwen Code** | 阿里生态的 Agent 运行时 | 可信 Agent 运行时方向（Guard Provider #8125）、Web Shell 转正；模型生态开放 | 会话数据安全（P1 静默删除）；发布流程脆弱 |
| **DeepSeek TUI** | Rust / Fleet 自动化 + ACP 生态 | Fleet 多机计算负载调度、运行时 API 由 Copilot 自动生成；中文本地化讨论活跃 | 处于 v0.9.4 列车阶段尚未正式发版；跨会话记忆缺失 |
| **Grok Build** | xAI 的 AI CLI（观察中） | 数据不足，暂不评估 | — |

## 5. 社区热度与成熟度

**第一梯队（成熟稳定）**：**Claude Code** 与 **GitHub Copilot CLI**。前者在 issue 讨论深度（多会话协调 61 评论、GitHub 连接器回归 48 评论）和功能完整度上领先；后者以稳定的双版本发布节奏和 GitHub 深度整合见长。

**第二梯队（快速迭代）**：**OpenAI Codex**、**Gemini CLI**、**OpenCode**、**Pi**、**Qwen Code**。OpenAI Codex 单日合入 10 个 PR，工程效率极高；Gemini CLI 问题多但修复同样迅速（10 个 PR 针对性极强）；OpenCode 以"社区要什么给什么"的姿态获得今日最高赞功能请求（123👍）。

**第三梯队（早期成长）**：**Kimi Code**、**DeepSeek TUI**、**Grok Build**。Kimi 体量虽小但贡献者已进入异步任务生命周期等深层架构；DeepSeek TUI 的 Copilot 自动生成 PR 是独特现象，值得关注 AI 驱动开源贡献的可行性验证。

## 6. 值得关注的趋势信号

### 6.1 从"对话式工具"向"多智能体运行时"演进
Claude Code、OpenAI Codex、Gemini CLI 不约而同发力子代理、并行会话与 Fleet，但**会话间通信与协调机制几乎是所有工具的空白**。对开发者而言，评估工具不能只看单次对话质量，更需关注多会话工作流的编排能力。

### 6.2 成本与配额透明度已成为信任基石
Claude Code #13585 的 115 👍 与 OpenAI Codex #33685 的"幽灵消耗"现象指向同一诉求：**工具必须提供可审计的用量明细**。选型时建议优先选择对配额/成本可见性有明确规划的工具，否则规模化使用后可能面临不可控成本。

### 6.3 "静默失败"是 AI CLI 最危险的缺陷
Gemini CLI 的"MAX_TURNS 误报成功"、Qwen Code 的"会话静默删除"、Claude Code 的"子代理挂起数小时无反馈"——这些不是显式报错，而是**在用户不知情时产生错误结果**。对自动化工作流而言，静默失败的破坏力远超显式错误，建议将"失败透明度"作为选型关键指标。

### 6.4 Windows/WSL 体验是巨大的未开发机会
OpenAI Codex #20214 单 issue 88 评论 / 78 👍，Pi 专门开帖收集 Windows 问题，Kimi/Qwen 也各有 Windows 相关 Bug。**目前没有任何一个工具在 Windows 上提供顺畅体验**——选择对 Windows 优化到位的工具，可获得现实的体验优势。

### 6.5 模型中立 / BYOK 正在成为标配
Copilot CLI、Pi、OpenCode、Qwen Code 均在支持多模型/自定义提供商。模型快速迭代（gpt-5.6-luna、Opus 5）让用户对绑定单一模型产生抗拒。**模型可替换、协议开放**的工具更有利于对冲模型能力变化带来的风险。

### 6.6 AI 自动生成的 PR 开始进入开源项目
DeepSeek TUI v0.9.4 列车中出现了 5 个由 Copilot 自动生成的运行时 API 扩展 PR，并已进入合入流程。这是**AI 驱动开源开发自我进化的典型案例**，若该模式被验证有效，将重塑开源贡献形态。

### 6.7 安全边界从"提示词"走向"确定性执行"
Qwen Code #8102（可信 Agent 运行时）+ #8125（Guard Provider）、Claude Code 的 Hook 生态、Pi 的沙箱化 Issue 分析（#7548）——这些尝试都在将 Agent 的动作置于**可审计、可拦截、可回滚的执行框架**内。安全正从"约束模型行为"转向"约束运行时边界"，这是 Agent 大规模落地的前提。

---

**总结**：2026 年 8 月的 AI CLI 生态已进入充分竞争期。Claude Code 在功能成熟度上依然领跑，OpenAI Codex 在云服务与自动化方向独树一帜，Gemini CLI 在 Agent 自治上最激进也最不稳定，开源新势力（OpenCode、Pi、DeepSeek TUI）正以社区驱动和架构创新争夺生态位。建议技术决策者根据平台偏好（GitHub Enterprise / OpenAI 生态 / 开源可控）、Windows 使用比例、以及对成本透明度的要求综合选型，并密切关注多智能体协调、确定性执行和 Windows 支持这三个即将爆发的方向。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止：2026-08-04｜数据源：github.com/anthropics/skills**

---

## 一、热门 Skills 排行

以下按社区关注度（关联 Issue 引用数、复现频率、跨 PR 协作密度）排序：

### 1. skill-creator 评估回路修复簇 ⭐ 热度最高
**代表 PR：** [#1298](https://github.com/anthropics/skills/pull/1298)（run_eval.py 始终报告 0% recall）

- **功能**：修复 `run_eval.py`（及依赖它的 `run_loop.py`、`improve_description.py`）的评估信号失真问题。当前所有 skill 描述评估均错误地报 `recall=0%`，导致描述优化循环在噪声上迭代。
- **社区热点**：Issue [#556](https://github.com/anthropics/skills/issues/556)（👍7、12 评论）被 10+ 独立复现；另有 [#1169](https://github.com/anthropics/skills/issues/1169)、[#1061](https://github.com/anthropics/skills/issues/1061) 直接关联。该问题催生了至少 5 个修复 PR（[#1298](https://github.com/anthropics/skills/pull/1298)、[#1323](https://github.com/anthropics/skills/pull/1323)、[#1261](https://github.com/anthropics/skills/pull/1261)、[#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050)），是当前仓库最集中的工程痛点。
- **状态**：OPEN（多个修复相互竞争，尚未合并）

### 2. testing-patterns 测试模式 Skill
**PR：** [#723](https://github.com/anthropics/skills/pull/723)

- **功能**：覆盖完整测试栈的综合性 skill——Testing Trophy 模型、单元测试 AAA 模式、React 组件测试（Testing Library）、测试哲学（测什么 vs 不测什么）。
- **社区热点**：回应了社区对"可执行、可操作测试指南"的需求，内容深度和体系化程度是讨论焦点。
- **状态**：OPEN

### 3. document-typography 文档排版质检 Skill
**PR：** [#514](https://github.com/anthropics/skills/pull/514)

- **功能**：针对 AI 生成文档的常见排版缺陷——孤立单词换行（1-6 词溢出到下一行）、孤儿段落（标题滞留页底）、编号错位。
- **社区热点**：讨论点在于该问题"影响 Claude 生成的每一个文档"，但用户极少主动提出排版要求，属于典型的"被动质量"场景，适合用 Skill 自动兜底。
- **状态**：OPEN

### 4. color-expert 颜色专家 Skill
**PR：** [#1302](https://github.com/anthropics/skills/pull/1302)

- **功能**：自包含的颜色专业知识体系——ISCC-NBS、Munsell、RAL 等命名系统；OKLCH/OKLAB/CAM16 等色彩空间的选型对照表。
- **社区热点**：社区认可其专业性：不是泛泛的"颜色理论"，而是可直接执行的决策表，被视作高质量领域 Skill 的参考范本。
- **状态**：OPEN（最近更新 2026-07-21，仍在活跃迭代）

### 5. skill-quality-analyzer + skill-security-analyzer 元技能
**PR：** [#83](https://github.com/anthropics/skills/pull/83)

- **功能**：新增两个元技能——质量分析器按 5 个维度（结构/文档/示例/资源…）打分；安全分析器审计 Skill 的安全边界。
- **社区热点**：直接呼应了社区对 Skill 生态质量参差不齐的担忧（关联 Issue [#492](https://github.com/anthropics/skills/issues/492) 的信任问题），属"治理型"基础设施。
- **状态**：OPEN（自 2025-11 提交，持续更新至 2026-01）

### 6. self-audit 自我审计 Skill
**PR：** [#1367](https://github.com/anthropics/skills/pull/1367)

- **功能**：在交付前对 AI 输出做"机械文件验证 + 四维推理审计"（按损害严重度排序），声称与任何技术栈/模型无关。
- **社区热点**：与 Issue [#1385](https://github.com/anthropics/skills/issues/1385) 的"推理质量门控管道"提案构成系列，社区在讨论如何将质量保障从"事后检查"前移到"交付前门禁"。
- **状态**：OPEN（v1.3.0，2026-07-02 更新）

### 7. plan-file-hygiene 规划文件卫生 Skill
**PR：** [#1479](https://github.com/anthropics/skills/pull/1479)

- **功能**：解决规划产物（planning artifacts）无限堆积、无生命周期管理的问题，为规划文件引入"卫生"机制。
- **社区热点**：该 PR 明确引用了 Issue [#1417](https://github.com/anthropics/skills/issues/1417)，并致谢多位贡献者的命名与框架贡献，是社区协作的正面案例。讨论的焦点是"规划文件的生命周期缺口"。
- **状态**：OPEN（2026-07-25 创建，最新）

### 8. ODT 文档 Skill
**PR：** [#486](https://github.com/anthropics/skills/pull/486)

- **功能**：OpenDocument 格式（.odt/.ods）的创建、模板填充、读取及 ODT→HTML 转换。
- **社区热点**：响应了开源/ISO 标准格式的办公文档需求，与 PDF/DOCX 形成互补，讨论点集中在 LibreOffice 生态的兼容性。
- **状态**：OPEN

---

## 二、社区需求趋势（来自 Issues）

### 🔴 高优先：工具链可靠性与正确性
- **run_eval 0% 触发率**（[#556](https://github.com/anthropics/skills/issues/556)，👍7）：skill-creator 的评估管道完全失效，10+ 用户复现。这说明 **"创建 Skill 的 Skill"自身的可靠性**已成为生态发展的阻塞项。
- **Windows 兼容性**（[#1061](https://github.com/anthropics/skills/issues/1061)）：subprocess PATHEXT、cp1252 编码、select-on-pipes 三类 Unix 假设问题，反映社区对跨平台支持的硬需求。

### 🟠 高关注：安全与信任边界
- **命名空间信任滥用**（[#492](https://github.com/anthropics/skills/issues/492)，43 条评论）：社区技能在 `anthropic/` 命名空间下分发，构成信任边界漏洞——用户可能向非官方技能授予过高权限。
- **上下文窗口耗尽**（[#1487](https://github.com/anthropics/skills/issues/1487)）：`claude-api` 技能单次调用注入 ~156k tokens，直接挤爆上下文。这是"技能设计如何尊重资源边界"的典型案例。
- **SPO 权限内嵌风险**（[#1175](https://github.com/anthropics/skills/issues/1175)）：在 SKILL.md 中直接编写访问控制逻辑的安全隐患。

### 🟡 持续需求：组织级能力
- **组织内技能共享**（[#228](https://github.com/anthropics/skills/issues/228)，👍8）：当前只能通过下载 .skill 文件 + 手动上传，社区强烈期望共享链接或共享库。
- **重复技能去重**（[#189](https://github.com/anthropics/skills/issues/189)，👍9）：`document-skills` 与 `example-skills` 插件安装后内容重复，浪费上下文窗口。

### 🟢 新兴方向：新 Skill 提案
- **compact-memory**（[#1329](https://github.com/anthropics/skills/issues/1329)）：用符号化记法压缩 Agent 的持久记忆，降低长时运行时的上下文开销。
- **agent-governance**（[#412](https://github.com/anthropics/skills/issues/412)）：AI 代理系统的安全治理模式（策略执行、威胁检测、信任评分）。
- **Skills 即 MCP**（[#16](https://github.com/anthropics/skills/issues/16)）：将 Skill 能力暴露为标准 MCP 协议接口，推动"技能可编程化"。
- **Bedrock 支持**（[#29](https://github.com/anthropics/skills/issues/29)）：AWS Bedrock 用户无法使用 Skills，存在集成缺口。

---

## 三、高潜力待合并 Skills（近期可能落地）

以下 PR 均为 OPEN 状态，但讨论活跃、修复合力集中或内容成熟度高，近期合并概率较大：

| PR | Skill | 潜力依据 |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator eval 修复 | 直击 #556 核心问题（10+ 复现），与 [#1323](https://github.com/anthropics/skills/pull/1323)、[#1261](https://github.com/anthropics/skills/pull/1261) 竞争/互补，官方必须解决 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 问题普适性强，实现自包含，无依赖争议 |
| [#1302](https://github.com/anthropics/skills/pull/1302) | color-expert | 专业度高、更新活跃（7-21），作者维护意愿明确 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit | 与 #1385 提案联动，形成体系化 Quality Gate 方案 |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality/security-analyzer | 直接响应 #492 安全讨论，治理型基建需求迫切 |
| [#1479](https://github.com/anthropics/skills/pull/1479) | plan-file-hygiene | 最新 PR（7-25），社区协作基础好，Issue #1417 明确指向 |

---

## 四、Skills 生态洞察

> **当前社区最集中的诉求是「让 Skill 生态本身先可靠起来」——既包括修好 skill-creator 的评估工具链（正确性/Windows 兼容），也包括建立安全信任边界（命名空间治理、上下文资源约束），在此之上才谈得上更多领域技能的扩展。**

一句话总结：**社区正经历从"数量扩张"到"质量与信任建设"的转折点——工具链可靠性（run_eval）与安全边界（命名空间/上下文）是最大的堰塞湖，打通这两点后，组织级共享和领域技能（测试、颜色、文档排版）将迎来快速落地。**

---

# Claude Code 社区动态日报 — 2026-08-04

## 1. 今日速览

今日最值得关注的动态是 **v2.1.221 发布**，为 VSCode 用户带来全新的 Focus view，大幅改善工具活动可视性；同时为 Linux 沙箱凭据文件新增 `mask` 模式。社区方面，**GitHub 连接器回归问题（#71542）** 与持续一年之久的 **macOS ECONNRESET 错误（#5674）** 讨论热度最高，说明连接稳定性仍是开发者最关心的痛点。此外，**多会话协调**（#24798）与**配额信息可见性**（#13585，115 👍）的功能需求持续走强，反映出用户对复杂工作流协作和成本控制的强烈需求。

## 2. 版本发布

### v2.1.221

**VSCode 新增 Focus view**

- 添加了聊天菜单开关，可将工具活动隐藏在可展开的每轮摘要后面，并附带实时运行工具指示器
- 可通过 `Ctrl+Alt+F` 或 "Claude Code: Toggle Focus view" 命令切换
- 目标：减少长任务执行时界面噪声，让用户聚焦于对话与结果

**Linux 沙箱凭据文件**

- 新增 `mode: "mask"` 选项，用于屏蔽沙箱凭据文件，增强敏感信息保护

## 3. 社区热点 Issues（Top 10）

### 1. 多 Claude 工作流的会话间通信 — [#24798](https://github.com/anthropics/claude-code/issues/24798)
- **热度**：61 条评论 / 20 👍
- **内容**：请求为并行运行的多个 Claude Code 会话提供直接通信机制，以便在高层级流程中编排具有依赖关系的任务。
- **关注点**：大型项目中多个会话各司其职，但彼此完全隔离，无法协同完成端到端流程。

### 2. macOS 上持久 ECONNRESET 网络错误 — [#5674](https://github.com/anthropics/claude-code/issues/5674)
- **热度**：52 条评论 / 48 👍
- **内容**：macOS 上持续出现 `ECONNRESET` 连接错误，导致任务中断；同一网络下 Windows/Linux 服务器正常。
- **关注点**：存活近一年仍未解决，48 👍 表明受影响的用户面非常广，属平台级网络兼容性问题。

### 3. GitHub 连接器账号级内容访问回归 — [#71542](https://github.com/anthropics/claude-code/issues/71542)
- **热度**：48 条评论 / 42 👍
- **内容**：GitHub 连接器可成功链接仓库，但 Claude 无法访问**任何**仓库内容（公私有仓库、全账号范围），被标记为回归。
- **关注点**：虽被标为 `invalid` 标签，但讨论热度不减，GitHub 集成是开发者日常最高频的链路之一。

### 4. 实时引导：执行中重定向的优先消息通道 — [#30492](https://github.com/anthropics/claude-code/issues/30492)
- **热度**：31 条评论 / 60 👍
- **内容**：请求增加优先消息通道，允许用户在 Claude 执行复杂多步骤流程时**实时干预**并重定向方向，而非等待回合结束。
- **关注点**：60 👍 认可度极高——管线、多文件重构等长任务场景中，用户需要"中途拉一把"的能力。

### 5. Claude Code CLI 配额信息访问 — [#13585](https://github.com/anthropics/claude-code/issues/13585)
- **热度**：24 条评论 / **115 👍**
- **内容**：请求在 CLI 中暴露 API 配额/用量信息，便于用户实时掌握消耗。
- **关注点**：115 👍 居本次列表之首，成本透明化已成为社区最大的功能诉求之一。

### 6. Windows 桌面应用更新后崩溃 — [#80468](https://github.com/anthropics/claude-code/issues/80468)
- **热度**：12 条评论
- **内容**：Claude 桌面应用在 Windows 平台最新更新后频繁崩溃。
- **关注点**：桌面端稳定性问题，直接阻塞 Windows 用户的日常使用。

### 7. 意外 Token 用量激增：空闲状态持续消耗 — [#65687](https://github.com/anthropics/claude-code/issues/65687)
- **热度**：10 条评论 / 1 👍
- **内容**：Claude Code 在**空闲时**仍持续消耗 token，出现意外的用量尖峰。
- **关注点**：与成本直接相关，用户对 token 消耗的透明度提出质疑，与 #13585 形成呼应。

### 8. 独立启动的 Claude Code 会话跨会话协调 — [#76727](https://github.com/anthropics/claude-code/issues/76727)
- **热度**：9 条评论
- **内容**：针对同一仓库上多个独立启动的会话，目前只有 PreToolUse `deny` hook 作为基础组件，且存在静默失效的"洞"，请求第一方协调机制。
- **关注点**：与 #24798 共同构成"多会话协作"高热度主题。

### 9. `--continue` 无法恢复 `-p` 创建的会话 — [#82536](https://github.com/anthropics/claude-code/issues/82536)
- **热度**：5 条评论
- **内容**：`-p`（print/非交互模式）创建的会话无法被 `--continue` 找到，导致交互式恢复失败。
- **关注点**：破坏"脚本化执行 → 交互式接管"的典型开发者工作流。

### 10. 子代理（teammate agent）静默挂起 — [#83366](https://github.com/anthropics/claude-code/issues/83366)
- **热度**：2 条评论
- **内容**：Windows 平台下，子代理在 tmux 能力探测通过但 pane 创建失败时静默挂起数小时、无任何错误反馈。
- **关注点**：agent 稳定性问题，近 Opus 5 周期用户反馈频率上升，严重影响子代理工作流体验。

## 4. 重要 PR 进展

过去 24 小时 PR 活动较为清淡，仅 2 条，均为文档类更新：

### 1. docs(plugin-dev): 文档化 MessageDisplay 流式语义 — [#83374](https://github.com/anthropics/claude-code/pull/83374)
- **作者**：iCodeCraft
- **内容**：在插件开发指南中补充 `MessageDisplay` Hook 事件的触发描述、事件指引与速查表条目。此前该事件为受支持事件但被文档完全遗漏。
- **意义**：降低插件开发者对 Hook 事件的发现成本，明确流式消息展示的语义。

### 2. docs(plugin-dev): 文档化 skipLfs 市场来源 — [#77977](https://github.com/anthropics/claude-code/pull/77977)
- **作者**：superediaoDiao
- **内容**：为 `github` 和 `git` 两类插件市场源补充 `skipLfs` 选项文档，并添加跳过 Git LFS 下载的 GitHub 简写与 Git URL 示例（关联 #63035）。
- **意义**：解决插件市场在拉取含大文件仓库时的性能问题；纯文档变更，风险低。

## 5. 功能需求趋势

社区最关注的功能方向依次为：

1. **多会话协调与通信**（[#24798](https://github.com/anthropics/claude-code/issues/24798)、[#76727](https://github.com/anthropics/claude-code/issues/76727)）
   大型项目中并行运行多个 Claude Code 会话已是常态，但会话间能力隔离严重。两个独立 Issue 从不同角度提出同一诉求：提供第一方跨会话通信/协调机制。

2. **成本与配额透明化**（[#13585](https://github.com/anthropics/claude-code/issues/13585)、[#65687](https://github.com/anthropics/claude-code/issues/65687)、[#81015](https://github.com/anthropics/claude-code/issues/81015)）
   115 👍 的最高赞 Issue 即为配额信息请求。用户希望实时掌握 token 消耗与 API 配额，尤其警惕空闲状态下的异常消耗——用量可见性与配额管理已成社区头号功能诉求。

3. **执行中的实时干预能力**（[#30492](https://github.com/anthropics/claude-code/issues/30492)）
   长任务执行中，用户需要"优先消息通道"来打断并重定向 Claude 的方向，而不是被动等待回合结束。这与 agent 自主性提升带来的"失控感"直接相关。

4. **集成层稳定性与权限细化**（[#71542](https://github.com/anthropics/claude-code/issues/71542)、[#80874](https://github.com/anthropics/claude-code/issues/80874)）
   GitHub 连接器出现账号级内容访问回归和写操作 403，用户对第三方集成的可靠性要求正在提高，同时对 OAuth scope 粒度（如只读用量权限）也有明确需求。

5. **新模型访问与版本选择自由**（[#83683](https://github.com/anthropics/claude-code/issues/83683)、[#83691](https://github.com/anthropics/claude-code/issues/83691)）
   有用户请求恢复 claude-opus-4 变体访问，同时 Opus 5 错误率上升也被报告。强制模型升级策略引发反弹，用户期望保留模型版本选择权。

## 6. 开发者关注点

- **连接稳定性问题持续发酵**：macOS 的 ECONNRESET（[#5674](https://github.com/anthropics/claude-code/issues/5674)）已存活一年仍未解决；[#77733](https://github.com/anthropics/claude-code/issues/77733) 更进一步指出，Desktop 内嵌 CLI 与独立 CLI 在同一网络上表现不一致——网络层问题的优先级亟待提高。

- **GitHub 连接器回归影响面过大**：[#71542](https://github.com/anthropics/claude-code/issues/71542) 波及所有仓库（含私有），[#80874](https://github.com/anthropics/claude-code/issues/80874) 报告所有写操作被 403 拒绝。对于依赖 GitHub 集成做自动化的团队，这是阻塞级故障。

- **Hooks 生态存在"静默失效"风险**：[#83687](https://github.com/anthropics/claude-code/issues/83687) 发现 Stop hook 的 exit-2 裁决在特定场景下被静默丢弃（无 `stop_hook_summary` 日志）；[#82323](https://github.com/anthropics/claude-code/issues/82323) 指出缺失的 hook 脚本会 **fail-open**（失败放行），且没有任何系统信号。对用 Hook 做安全门禁的团队，这属于严重风险。

- **Token 消耗焦虑加剧**："空闲时仍在消耗"（[#65687](https://github.com/anthropics/claude-code/issues/65687)）表明用户对出站 token 计费缺乏信任感。且 [#81015](https://github.com/anthropics/claude-code/issues/81015) 指出 `setup-token` 签发的是 `user:inference` 范围的 token，无法访问 `/usage` 面板所需的 `user:profile`，导致用户难以审计自己的消耗——工具层面的限制加深了这一焦虑。

- **子代理可靠性成为新焦点**：[#83366](https://github.com/anthropics/claude-code/issues/83366) 反映 Windows 下子代理静默挂起、无错误反馈；[#83691](https://github.com/anthropics/claude-code/issues/83691) 报告 Opus 5 在会话中错误率上升。Agent 稳定性将是下一阶段社区关注的重点领域。

---

**数据来源**：[anthropics/claude-code](https://github.com/anthropics/claude-code) · 更新于 2026-08-04

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-04

## 今日速览

昨日社区讨论热度集中在 **Windows/WSL 体验问题**与**模型兼容性缺陷**上：Windows 桌面端性能卡顿、WSL 环境下 Git 检测失效、以及 `gpt-5.6-luna` 被子代理系统错误拒绝等 Issue 持续引发开发者共鸣。PR 方面，Codex 核心团队密集合入了 20+ 个内部优化 PR，覆盖 MCP 客户端兼容性、会话恢复、沙箱进程管理等方向，为即将到来的 0.147 版本做铺垫。

---

## 版本发布

过去 24 小时发布了两个 Rust 版本的 alpha 预发布：

- **[rust-v0.147.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6)**：`0.147.0-alpha.6`
- **[rust-v0.147.0-alpha.1.2](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.1.2)**：`0.147.0-alpha.1.2`

---

## 社区热点 Issues（10 个）

### 1. Windows 版 Codex App 频繁卡顿/掉帧
**Issue [#20214](https://github.com/openai/codex/issues/20214)**｜88 评论 · 78 👍

> 在系统资源充足（AMD Ryzen 5 5600 / 32GB RAM）的 Windows 11 Pro 上，Microsoft Store 版 Codex App 依然频繁冻结、卡顿。自 4 月底提出至今热度不减，是当前社区反馈最强烈的 Windows 性能问题。

### 2. gpt-5.6-luna 多智能体兼容性缺陷（两起关联 Issue）
**Issue [#35097](https://github.com/openai/codex/issues/35097)**｜14 评论 · 37 👍
**Issue [#34700](https://github.com/openai/codex/issues/34700)**｜9 评论 · 24 👍

> 两个独立 Issue 指向同一问题：`gpt-5.6-luna` 被标记为 MultiAgent V1，导致启用 V2 的 `spawn_agent` 拒绝调用该模型，且 `spawn_agent` 在模型选择器中根本不暴露 luna。社区呼吁尽快统一模型的多智能体元数据。

### 3. OneDrive 工作区导致 Codex Web 流反复断开
**Issue [#35420](https://github.com/openai/codex/issues/35420)**｜30 评论

> 在 Windows 上，当 ChatGPT Work/Codex 的选定工作区由 OneDrive 支持且 OneDrive 状态异常时，请求反复报 `stream disconnected before completion`，产生两个 request ID 但均未成功。暴露出 OneDrive 与 Codex Web 的集成存在链路健壮性问题。

### 4. 周限额被"快速耗尽"现象引起普遍质疑
**Issue [#33685](https://github.com/openai/codex/issues/33685)**｜25 评论 · 10 👍

> 用户反馈自 5 小时限额取消后，每周限额的消耗速度与旧版 5 小时限额几乎相同。使用场景为正常 GPT-5.5 High，并未使用 Sol 等重型模式。该 Issue 反映出用户对新的周限额计量方式的信任危机。

### 5. Codex App 将合法 WSL 仓库误判为"非 Git"
**Issue [#35119](https://github.com/openai/codex/issues/35119)**｜14 评论 · 13 👍

> Codex App 更新至 `26.721.3404` 后，位于 WSL ext4 文件系统上的合法 Git 仓库被标记为非 Git，并提示 "Git is unavailable"。附有完整体版本对比和前一个正常版本信息，便于定位回归。

### 6. 支持一个机器上使用多个账号
**Issue [#12029](https://github.com/openai/codex/issues/12029)**｜12 评论 · 62 👍

> 高赞老 Issue（2 月提出）。个人/企业双账号场景下，无法跨 Codex 各表面共享认证，成为实际工作流的严重阻碍。62 个 👍 说明这是社区普遍认同的核心缺失功能。

### 7. 桌面端线程工具间歇性丢失处理器
**Issue [#28080](https://github.com/openai/codex/issues/28080)**｜12 评论 · 2 👍

> Windows 桌面版的活跃会话中，线程工具会间歇性报 `No handler registered`。这类"会话中途失灵"的 Bug 会直接中断长时间运行的自动化流程，严重性不可小觑。

### 8. Codex Cloud 自动代码审查静默失败
**Issue [#15477](https://github.com/openai/codex/issues/15477)**｜11 评论 · 6 👍

> 三个 Bug 叠加：GitHub 自动 code review 静默失败、dashboard 显示配额可用但审查接口报"已达限制"、陈旧 GitHub 凭据未被正确识别。影响 Codex Cloud 的核心使用场景，信任度受损。

### 9. 新增 RTL 文本方向支持（阿拉伯语/希伯来语）
**Issue [#19504](https://github.com/openai/codex/issues/19504)**｜24 评论 · 19 👍

> 阿拉伯语用户请求在 Codex 与 Chat 面板中增加原生 RTL 支持。当前存在文本对齐、标点位置、阅读方向等问题，属于面向全球化用户的 Papercuts 级改进。

### 10. 会话并发导致 Workspace Root 上下文泄漏
**Issue [#24224](https://github.com/openai/codex/issues/24224)**｜6 评论 · 4 👍

> Codex Desktop 在多个并发会话间泄漏工作区/项目上下文，可能引发跨项目污染。对依赖多会话并行管理的用户而言，这是数据安全层面的隐患。

---

## 重要 PR 进展（10 个）

### 1. 在 token 预算上下文中按名称标识 Agent
**[PR #36815](https://github.com/openai/codex/pull/36815)**（已合并）

> 将 `<context_window>` 中的线程 ID 替换为会话的规范 agent 路径，根会话输出 `/root`，子代理输出自身路径。改善调试可读性与上下文管理。

### 2. 为 Code Mode 增加双 WebSocket 传输
**[PR #36812](https://github.com/openai/codex/pull/36812)**（已合并）

> 解决大型嵌套工具回调占用单一 WebSocket 导致同一连接上其他会话操作延迟的问题。引入可选的 `dual-websocket-v1` 能力，独占通道用于大回调。

### 3. 尊重每环境登录 Shell 策略
**[PR #36811](https://github.com/openai/codex/pull/36811)**（已合并）

> 在`每个 turn 环境`中存储有效的 `allow_login_shell` 设置（含继承环境），并在选定环境允许时暴露 shell 工具的 `login` 参数。修复了子线程策略不一致的问题。

### 4. 增加 MCP 客户端一致性回归门禁
**[PR #36810](https://github.com/openai/codex/pull/36810)**（已合并）

> 将 Codex 可执行文件对官方 MCP 客户端一致性测试套件的运行结果纳入 CI 门禁，覆盖 HTTP/stdio 传输、OAuth、多个协议版本。大幅降低 MCP 兼容性回归风险。

### 5. `exec resume --last` 优先查询状态数据库
**[PR #36809](https://github.com/openai/codex/pull/36809)**（已合并）

> 当状态数据库可用时，`exec resume --last` 不再遍历所有 rollout 文件，直接以数据库首个匹配项为准，提升查询效率并减少对文件系统的依赖。

### 6. 会话归档命令优先使用 SQLite 名称
**[PR #36808](https://github.com/openai/codex/pull/36808)**（已合并）

> `archive`/`delete`/`unarchive` 命令从 SQLite 解析目标，再回退到 rollout 扫描和修复，并校验每个匹配是否指向预期集合中的有效 rollout。

### 7. 将音频准备逻辑抽取为独立工具 crate
**[PR #36807](https://github.com/openai/codex/pull/36807)**（已合并）

> 新增 `codex-utils-audio` workspace crate，统一音频输入规范化与 token 用量估算，`codex-core` 改为消费该 crate，保持现有测试不变。

### 8. 命令审批后避免重复注入完整权限
**[PR #36800](https://github.com/openai/codex/pull/36800)**（已合并）

> 将已批准的命令前缀与稳定权限说明分离跟踪，exec-policy 更新后仅追加新批准的前缀，不再重发全量权限块，降低 token 消耗。

### 9. 超时后终止 Git 进程树
**[PR #36793](https://github.com/openai/codex/pull/36793)**（已合并）

> Git 元数据命令超时后，Unix 下通过进程组、Windows 下通过 Job Object 终止所有后台 helper 进程，避免孤儿进程残留。

### 10. 按模型能力门控插件使用说明
**[PR #36792](https://github.com/openai/codex/pull/36792)**（已合并）

> 为模型元数据新增 `include_plugin_usage_instructions` 字段（默认 false），仅在插件可用且模型支持时输出通用插件指南，并默认在交互式模型中启用。

---

## 功能需求趋势

结合 Issues 与 PR 中的用户呼声，社区目前最关注以下方向：

| 方向 | 代表 Issue / PR | 说明 |
|---|---|---|
| **WSL / Windows 深度支持** | #35119, #29639, #30529 | 合法仓库误判、文件系统路径映射、剪贴板截图不可用等问题频发 |
| **多账户与认证共享** | #12029 | 个人/企业双账号使用是普遍被认可的核心场景 |
| **多智能体模型兼容性** | #35097, #34700, #34964 | `gpt-5.6-luna` 无法用于 V2 子代理，需统一模型能力元数据 |
| **全球化与可访问性** | #19504 | RTL 支持需求强烈，社区筹齐 19+ 赞同 |
| **用量与配额透明度** | #33685, #32791, #28985 | 用户对周限额计量方式存疑，期望按客户端/会话/时间戳归因 |
| **MCP 生态治理** | PR #36810, #36781 | 官方开始投入 MCP 一致性门禁与细粒度工具暴露控制 |
| **进程/资源清理** | PR #36793, #36779 | 超时进程树终止、并发测试稳定性，是内部工程质量的持续打磨 |

---

## 开发者关注点

1. **Windows 性能瓶颈**：`#20214` 以 88 条评论成为社区最大热点，开发者普遍认为在 32GB 内存的现代 CPU 上频繁卡顿不可接受，期待官方给出根本性性能修复。

2. **"幽灵消耗"配额危机**：`#33685` 揭示的"周限额以 5 小时速度消耗"现象，正在侵蚀用户对新配额体系的信任。该问题与 `#32791`（Plus 账户 5 小时限额消失）形成组合效应，多名用户认为这是展示逻辑 Bug 而非有意为之。

3. **模型版本与多智能体机制的协调滞后**：`gpt-5.6-luna` 相关的 3 个 Issue 都获得高赞，评论区普遍建议 Codex 团队增加模型矩阵测试，确保新模型上线时 `spawn_agent`、模型选择器、能力元数据三者同步更新。

4. **WSL 集成仍然处处是坑**：Git 仓库误判、sandboxCwd 映射失败、剪贴板截图不可用、Remote SSH 审批按钮无响应，WSL/远程环境下的桌面 App 体验仍需系统性改进。

5. **静默失败是最危险的失败**：`#15477` 中"dashboard 显示配额充足但实际已限流"的案例，提示 Codex Cloud 的配额逻辑存在状态不同步问题，社区非常看重错误上报的一致性。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-04

## 1. 今日速览

今日社区焦点集中在 Agent 可靠性问题上：[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) 揭示了子代理在达到 MAX_TURNS 后仍被误报为 "GOAL 成功" 的状态误判，加上 generalist agent 无限挂起（[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)）等 P1 问题持续发酵。PR 侧则迎来一波稳定性修复潮，涉及上下文损坏、配额回退、畸形 JSON 解析崩溃等，并新增了 Gemini 3.6 Flash 与 3.5 Flash-Lite 模型配置支持。版本方面今日仅发布 nightly build，无功能更新。

## 2. 版本发布

### v0.55.0-nightly.20260803.gf47d6c6f7
- 为常规 nightly 增量版本，无独立变更日志
- 完整变更对比：[v0.55.0-nightly.20260802...v0.55.0-nightly.20260803](https://github.com/google-gemini/gemini-cli/compare/v0.55.0-nightly.20260802.gf47d6c6f7...v0.55.0-nightly.20260803.gf47d6c6f7)

## 3. 社区热点 Issues

以下为今日更新中最值得关注的 10 个 Issue：

**1. 子代理 MAX_TURNS 中断被误报为 GOAL 成功** [P1 · 12 评论]
[Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)
`codebase_investigator` 子代理实际因达到最大轮次而中断，未做任何分析，却上报 `status: "success"`、`Termination Reason: "GOAL"`。状态误报比失败更危险——它会掩盖资源耗尽问题，误导用户信任未完成的分析结果，是今日评论数最高的 Issue。

**2. Generalist agent 无限挂起** [P1 · 8 评论 · 8👍]
[Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)
只要任务被转发给 generalist agent 就会永久挂起，连"创建文件夹"这类简单操作也无法返回，用户最长等待 1 小时。8 个 👍 为今日最高，社区反应强烈；用户发现可通过提示词禁止 subagent 规避，但核心缺陷仍未修复。

**3. Shell 命令执行完却卡在 "Waiting input"** [P1 · 4 评论 · 3👍]
[Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)
极简单、绝不会交互的 CLI 命令在完成后，界面仍显示命令活跃并等待用户输入。Shell 工具是最高频路径之一，该假死问题严重影响日常使用体验。

**4. v0.33.0 起子代理无视禁用配置被调用** [P2 · 3 评论]
[Issue #22093](https://github.com/google-gemini/gemini-cli/issues/22093)
用户已在所有配置中禁用 agents 模式，升级后 generalist 子代理仍被自动调用（用户原本只期望使用 MCP 能力）。配置不被尊重会动摇用户对权限边界的信任，属回归类问题。

**5. Auto Memory 需确定性脱敏并降低日志量** [P2 · Security · 4 评论]
[Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)
后台提取代理先把本地 transcript 内容送入模型上下文，之后才在提示词中要求脱敏，且服务可能记录已有技能内容。该问题涉及敏感信息全生命周期保护，安全设计存在时序缺陷。

**6. 工具数量超过 128 个触发 400 错误** [P2 · 3 评论]
[Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)
可用工具超过 400 个时 API 直接返回 400，模型不会按需裁剪工具范围。随着 MCP 生态普及，工具数量膨胀是必然趋势，此限制直接制约可扩展性。

**7. Agent 应阻止/劝阻破坏性行为** [P2 · 3 评论 · 1👍]
[Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)
模型在复杂 git 操作中倾向使用 `git reset`、`--force` 等危险命令，对数据库等生产资源的修改缺乏风险认知。社区呼吁建立安全护栏，属 AI 安全核心诉求。

**8. Browser 子代理在 Wayland 下失败** [P1 · 4 评论 · 1👍]
[Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)
Browser Agent 在 Wayland 环境中直接以 GOAL 终止，无有效操作结果，影响 Linux 桌面用户的浏览器自动化能力。

**9. AST-aware 文件读取/搜索/代码库映射评估** [P2 · EPIC · 7 评论]
[Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)
维护者牵头的系列调研，评估基于 AST 的工具能否精确读取方法边界、减少 token 噪音、改善代码库导航。这可能是下一代代码理解能力的重要探索方向（关联 [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)）。

**10. Gemini 不会主动使用自定义 skills 和 sub-agents** [P2 · 6 评论]
[Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)
即使用户配置了 gradle、git 等高质量技能描述，模型在相关场景下仍不会自发调用，必须显式指示。这直接关系到自定义扩展体系的实际价值。

## 4. 重要 PR 进展

**1. 新增 Gemini 3.6 Flash 与 3.5 Flash-Lite 模型配置**
[PR #28673](https://github.com/google-gemini/gemini-cli/pull/28673)
在 core 中补充两款新模型的基础定义、`thinking`/`multimodalToolUse` 能力、别名及 Code Execution 配置。新模型支持是社区最关心的功能方向之一。

**2. 修复上下文损坏与配额回退导致的"前缀续写"行为**
[PR #28671](https://github.com/google-gemini/gemini-cli/pull/28671)
对历史记录做防御性加固，解决工具执行被中断（配额错误、用户 ESC 打断）后模型产生错误的自动补全/前缀延续行为。

**3. 修复 /compress 会话重载与配额回退丢响应**
[PR #28672](https://github.com/google-gemini/gemini-cli/pull/28672)
双修复：`/compress` 成功后磁盘会话重载不再硬抛错；配额降级回退时工具响应不再丢失，杜绝上下文损坏的两种来源。

**4. SDK sendStream 对畸形工具参数保持存活**
[PR #28660](https://github.com/google-gemini/gemini-cli/pull/28660)
防御性解析字符串型工具参数（拒绝数组、原始类型、null），将无效参数转为结构化 `functionResponse` 错误，避免 `JSON.parse` 异常从 `sendStream()` 逃逸导致流中断。

**5. 防止畸形 GitHub JSON 导致扩展崩溃**
[PR #28657](https://github.com/google-gemini/gemini-cli/pull/28657)
此前 `JSON.parse()` 在异步 `end` 回调中无错误处理，且响应流缺少 `error`/`aborted` 监听；该 PR 为扩展的 GitHub 请求补全了异常路径（同方向另有 [#28663](https://github.com/google-gemini/gemini-cli/pull/28663) 的 fetchJson 加固方案）。

**6. MCP OAuth 刷新改用已存储的 client ID** [P1 · Security]
[PR #28481](https://github.com/google-gemini/gemini-cli/pull/28481)
修复经 OAuth discovery + 动态客户端注册的 MCP 服务的 token 刷新失败问题。此前刷新在发起网络请求前即失败，且会删除已存凭据，迫使每次重启都要重新授权。

**7. GCA agent 模式容量错误正确回退**
[PR #28670](https://github.com/google-gemini/gemini-cli/pull/28670)
修复 `MODEL_CAPACITY_EXHAUSTED`/HTTP 429 时在同一失败模型上无限重试的问题，改为正确回退到其他可用模型（如 Flash）。

**8. GlobTool 校验所有实际搜索的工作区目录**
[PR #28666](https://github.com/google-gemini/gemini-cli/pull/28666)
修复 `validateToolParamValues()` 与 `execute()` 目录范围不一致：省略 `dir_path` 时前者只校验 targetDir，后者却搜索全部 workspace，导致校验形同虚设。

**9. MCP consent 展示完整服务端配置并加固 stdio 环境**
[PR #28664](https://github.com/google-gemini/gemini-cli/pull/28664)
扩展授权提示此前只展示 command/args/httpUrl，现在补全 `env`/`cwd`/`headers` 等执行影响字段的展示与变更比较，防止"悄悄变更"配置；同时硬化 stdio 的环境传递。

**10. 保留 functionCall 中的 thoughtSignature 修复 400 错误**
[PR #28586](https://github.com/google-gemini/gemini-cli/pull/28586)
修复 0.53.0 引入的回归：并行工具调用时 `thoughtSignature` 被意外剥离，导致 API 返回 400 Bad Request。

## 5. 功能需求趋势

从今日 50+ 条活跃 Issue 中可提炼出以下社区关注方向：

- **Agent 可靠性与自我管理（最密集）**：子代理权限边界（#22093）、阻止破坏性操作（#22672）、Agent 自我认知（#21432）、主动使用自定义技能（#21968）
- **Auto Memory 记忆系统加固**（#26516 系列）：低信号会话无限重试（#26522）、无效 patch 隔离（#26523）、确定性脱敏（#26525），显示记忆后台正经历系统性安全与质量治理
- **AST-aware 代码理解**：精确读取方法边界、减少 token 噪音、代码库映射（#22745、#22746），为 `codebase_investigator` 升级探路
- **浏览器 Agent 韧性**：会话锁自动恢复（#22232）、settings.json 覆盖生效（#22267）、Wayland 兼容（#21983）
- **可观测性与调试**：子代理轨迹分享（#22598）、bug 报告包含子代理上下文（#21763）、状态上报准确性（#22323）
- **新模型与评估基建**：Flash 级轻量模型支持（#28673）与组件级行为评估体系（#24353）并重

## 6. 开发者关注点

- **挂起与假成功并存**：generalist agent 无限挂起（#21409）+ shell 假死（#25166）+ MAX_TURNS 误报成功（#22323），说明 agent 状态机在异常终止路径上仍不可靠，"静默失败"比显式报错更令开发者不安
- **配置与权限未被执行**：禁用 agents 仍被调用（#22093）、settings.json 被浏览器代理忽略（#22267）、symlink agent 文件不识别（#20079）——用户对"配置即承诺"有强预期
- **会话/上下文损坏是回归高发区**：/compress 重载失败（#28672）、配额回退丢工具响应（#28671）、并行调用 400（#28586），多个 PR 正在集中补洞
- **安全与隐私敏感度高**：Auto Memory 脱敏时序（#26525）、MCP OAuth 凭据误删（#28481）、GitHub JSON 异常泄漏（#28657），均指向敏感数据全生命周期保护
- **平台兼容性仍是薄弱环节**：Wayland 浏览器代理（#21983）、macOS seatbelt 缺失（#28551）、终端 resize 闪烁（#21924），Linux/macOS 桌面体验的打磨仍需投入

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-08-04

## 1. 今日速览

今日发布 v1.0.78 与 v1.0.78-3，新增工具耗时展示、实验性 `/new-worktree` 命令等能力。社区讨论聚焦多模型/BYOK 配置、项目级插件作用域和终端渲染体验问题，另有 `gpt-5.6-luna` 模型 API 不一致、托管策略校验失败等新 Issue 抛出。

## 2. 版本发布

### v1.0.78
- Timeline headers 现在可显示每次工具调用的耗时，右对齐并实时跳动（仅针对至少 5 秒的调用）。默认开启，可通过 `/settings showToolDurations` 关闭。
- 首方插件（first-party plugins）会在会话启动时自动更新至最新版本。
- 另有补全项 "Add the ex..."（官方 notes 截断）。

### v1.0.78-3
- **新增**：实验性 `/new-worktree` 命令，可创建新 worktree 并在其中开始新会话。
- **改进**：交互式 shell 快捷方式现在在按 Enter 时启动，并在 "$" 武装时显示内联提示。
- **修复**：Copilot 登录在本地桌面环境中默认走浏览器流程。

## 3. 社区热点 Issues（10 个）

### #3282 Add multiple BYOK model capability in copilot cli
- 状态：开放 | 评论：7 | 👍：20
- 单 BYOK 模型限制导致用户无法在会话内切换模型；要求支持多 BYOK 模型配置。
- 链接：https://github.com/github/copilot-cli/issues/3282

### #3709 Allow /model to switch between multiple models, including BYOK/local providers
- 状态：开放 | 评论：3 | 👍：20
- 请求让 `/model` 选择器同时列出 BYOK/本地模型，而不只是 GitHub 托管模型。
- 链接：https://github.com/github/copilot-cli/issues/3709

### #1665 Support Copilot CLI Plugins Scoped to Project or Repository
- 状态：已关闭 | 评论：14 | 👍：18
- 目前插件只支持全局安装，无法按项目/仓库隔离；该 Issue 要求引入项目级插件作用域，已关闭但讨论热度高。
- 链接：https://github.com/github/copilot-cli/issues/1665

### #1464 Skills beyond alphabetical position ~32 appear unreachable
- 状态：开放 | 评论：6 | 👍：7
- 安装约 63 个 skills 时，系统提示因 token 限制只展示前 32 个，导致排序靠后的 skill 永远不会被模型选中。
- 链接：https://github.com/github/copilot-cli/issues/1464

### #4078 Scheduled prompts kill the existing prompt queue
- 状态：已关闭 | 评论：5
- `/every` 或 `/after` 定时提示触发后会打断当前队列，且不再弹出队列中的下一条，可能导致任务链中断。
- 链接：https://github.com/github/copilot-cli/issues/4078

### #2714 Feature Request: Allow toggling plugins enabled/disabled
- 状态：开放 | 评论：2 | 👍：11
- 希望在不卸载的情况下快速开关插件；Gemini CLI、Claude Code 已有类似能力，社区呼声较高。
- 链接：https://github.com/github/copilot-cli/issues/2714

### #4298 Sandbox config to selectively enable tools
- 状态：开放 | 评论：1 | 👍：1
- 请求在 settings.json 中为 sandbox 增加工具选择性启用/白名单能力。
- 链接：https://github.com/github/copilot-cli/issues/4298

### #4337 gpt-5.6-luna advertised in /models but not accessible via /chat/completions
- 状态：已关闭 | 评论：2
- 模型列表包含 `gpt-5.6-luna`，但标准 `/chat/completions` 无法调用，只支持 `/responses`，破坏依赖 OpenAI 兼容接口的聚合工具。
- 链接：https://github.com/github/copilot-cli/issues/4337

### #4328 Ctrl+H misinterpreted as Ctrl+Backspace under WSL2
- 状态：开放 | 评论：2
- WSL2 环境下因 Windows Terminal 的 `WT_SESSION` 泄漏，`ctrl+h`（删除前一字符）被误判为 `ctrl+w`（删除整个词）。
- 链接：https://github.com/github/copilot-cli/issues/4328

### #4313 Allow scrolling through the current conversation history
- 状态：开放 | 评论：3
- 用户希望用鼠标滚轮或 PageUp/PageDown 滚动查看当前对话历史。
- 链接：https://github.com/github/copilot-cli/issues/4313

## 4. 重要 PR 进展

过去 24 小时内无新增或更新的 Pull Requests（共 0 条）。

## 5. 功能需求趋势

从近 24 小时的 Issues 中可提炼出以下社区关注方向：

- **多模型与 BYOK 扩展**：要求在会话内自由切换多个 BYOK/本地模型（#3282、#3709），是当前最集中的功能诉求。
- **插件系统增强**：插件作用域（项目级/仓库级）、启用/停用开关、Windows 下 git symlink 支持（#1665、#2714、#2286）。
- **终端渲染与交互体验**：表格排版、流式链接导致表格跳动、会话历史滚动、终端转义序列处理（#2412、#4347、#4313、#4267）。
- **会话与队列管理**：定时提示不打断队列、stashed prompt 不丢失、恢复会话时模型/推理设置保持一致（#4078、#4334、#4340）。
- **配置与沙箱灵活性**：选择性启用工具、禁用 OSC 9;4 进度条、消除 "Memory is disabled" 一次性提示（#4298、#4352、#4332）。
- **模型可用性与兼容性**：`gpt-5.6-luna` 接口不一致、`claude-haiku-4.5` 不支持 `medium` reasoning effort（#4337、#4345）。

## 6. 开发者关注点

- **模型切换受限**：BYOK 模式下会话被固定为单一模型，`/model` 看不到本地模型，用户不得不重启会话来换模型。
- **插件管理不便**：全局安装、无法快速停用、项目级隔离缺失，在多项目协作场景中尤为突出。
- **终端渲染问题高频出现**：表格排版、转义序列误显示、进度条无法关闭等，影响日常使用体验。
- **会话状态丢失**：定时提示打断队列、stash 文本在会话切换后丢失，均会造成工作中的上下文中断。
- **Windows/WSL2 兼容性**：`ctrl+h` 误判、zellij 下输入框预填 DA1 转义序列等问题说明跨终端环境适配仍需加强。
- **策略与配置校验过严**：托管策略返回合法的 `"enable"` 时反而校验失败，阻塞所有本地 MCP 服务器；MCP registry 获取 403 也影响 CI 使用。
- **新模型/新参数的适配不够及时**：模型已出现在列表但不可用、reasoning effort 不被支持，说明模型上线的联动流程仍需完善。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

## Kimi Code CLI 社区动态日报
**日期：2026-08-04**  
**数据源：github.com/MoonshotAI/kimi-cli**  

> 说明：过去 24 小时仓库活跃条目有限（Issue 3 条、PR 8 条），以下覆盖全部活跃条目。今日**无新版本发布**。

---

### 1. 今日速览

过去 24 小时无新版本发布，社区动态集中在稳定性修复与长期功能需求推进上。活跃 Issue 中，新增 1 个 CLI 流挂起 Bug（#2582），Web UI 无限加载问题仍在讨论，Memory System 功能请求保持长期热度；活跃 PR 共 8 个，其中 2 个已关闭（kosong 0.56.0 版本更新、空 `anthropic-beta` 头修复），6 个开放 PR 聚焦 Hook 任务生命周期、Shell 子进程管道、ACP 协议语义、字符串替换计数等深层正确性修复。

---

### 2. 社区热点 Issues（共 3 条）

#### #1283 [Feature Request] Memory System —— 跨会话持久化上下文
- 作者：CatKang | 创建：2026-02-27 | 更新：2026-08-03 | 评论：15  
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/1283  
- **要点**：请求实现全面的记忆系统，包括自动记忆（AI 管理笔记）和手动记忆（用户自定义指令），以在会话之间保留项目上下文、代码模式与用户偏好。  
- **关注原因**：该 Issue 存活已超 5 个月，8 月 3 日仍有更新，15 条评论显示社区持续关注。跨会话记忆是 AI 编程工具的重要能力，直接影响项目级上下文连贯性，是极具代表性的长期演进需求。

#### #2573 [Bug] Web UI 切换会话时无限 "Connecting to session..." Spinner
- 作者：belenov-maker | 创建：2026-08-01 | 更新：2026-08-03 | 评论：1  
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/2573  
- **环境**：kimi-cli 1.48.0（Homebrew / macOS 26.4 / arm64），组件 `kimi web`（Technical Preview），浏览器 Chrome 150.0.7871.187  
- **关注原因**：Web UI 属于技术预览功能，会话切换是核心交互路径，无限 Spinner 直接阻断使用。目前评论较少，但严重级别高，预计官方需优先排查。

#### #2582 [Bug] CLI 流生成期间无限挂起，会话不可用
- 作者：bobtu56 | 创建：2026-08-03 | 更新：2026-08-03 | 评论：0  
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/2582  
- **环境**：kimi-cli 0.31.1 / Moonshot Platform API / kimi-k2.7-code / Windows NT 10.0.19045.0 x64  
- **关注原因**：新提交的严重稳定性问题——流式生成无限挂起会导致会话完全不可用。零评论说明尚未获得维护者回应，但复现可能性高，预期会快速被标记。  
- **补充观察**：该 Issue 中版本号 0.31.1 与其他（1.48.0）差异明显，需要确认是否为 CLI 独立版本线还是用户误报。

---

### 3. 重要 PR 进展（共 8 条）

#### #2577 [OPEN] fix(web,vis)：旧控制台编码下启动横幅不再崩溃
- 作者：ayaangazali | 创建：2026-08-01 | 更新：2026-08-03  
- 链接：https://github.com/MoonshotAI/kimi-cli/pull/2577  
- **内容**：`print_banner()` 中使用裸 `print()` 输出包含 U+279C 字符的 URL 横幅，在 GBK 等旧控制台代码页上会崩溃。修复后两个调用点（`web/app.py`、`vis/app.py`）不再受影响。该 PR 解决了 Windows 等旧编码环境下的启动阻塞问题。

#### #2575 [OPEN] fix(hooks)：通过 `fire_and_forget_trigger` 触发 PostToolUse Hooks
- 作者：ayaangazali | 创建：2026-08-01 | 更新：2026-08-03  
- 链接：https://github.com/MoonshotAI/kimi-cli/pull/2575  
- **内容**：原实现用 `asyncio.create_task(...)` 触发 `PostToolUse` / `PostToolUseFailure` Hook 后立即释放 Handle，而 asyncio 仅以 WeakSet 持有任务，导致挂起的 Hook 任务可能被 GC，造成 Hook 不触发。改用 `fire_and_forget_trigger` 确保任务被正确持有和调度。

#### #2554 [OPEN] fix(tools)：StrReplaceFile 替换计数基于运行中内容
- 作者：ayaangazali | 创建：2026-07-23 | 更新：2026-08-03  
- 链接：https://github.com/MoonshotAI/kimi-cli/pull/2554  
- **内容**：修复 `StrReplaceFile` 成功消息中替换次数统计不准确的问题——原实现基于初始内容计数，未考虑连续替换造成的偏移。修正确保工具反馈的替换数量与实际变更一致，提升自动化编辑场景的可信度。

#### #2530 [OPEN] fix(shell)：分离子进程持有管道时不再阻塞到超时
- 作者：ayaangazali | 创建：2026-07-21 | 更新：2026-08-03  
- 链接：https://github.com/MoonshotAI/kimi-cli/pull/2530  
- **内容**：在前台 Shell 路径中，`_run_shell_command` 等待 stdout/stderr EOF 后才检查退出码。若命令包含 `some_daemon & echo done` 这类分离守护进程，子进程持有管道会导致命令阻塞直到超时。修复为在子进程退出后立即停止等待，符合 Shell 语义。

#### #2507 [OPEN] fix(acp)：ACP 模式返回 QuestionNotSupported 而非空答案
- 作者：ayaangazali | 创建：2026-07-18 | 更新：2026-08-03  
- 链接：https://github.com/MoonshotAI/kimi-cli/pull/2507  
- **内容**：ACP 服务器模式下，每个 `QuestionRequest` 都被解析为空 dict，与用户实际取消问题无法区分，导致模型收到误导性的“用户已关闭问题”上下文。修复后改为发出 `QuestionNotSupported` 信号，保证协议语义清晰。

#### #2581 [CLOSED] chore(release)：kosong 升级至 0.56.0
- 作者：jackfish212 | 创建：2026-08-03 | 更新：2026-08-03  
- 链接：https://github.com/MoonshotAI/kimi-cli/pull/2581  
- **内容**：将 kosong 包版本从 0.55.0 升至 0.56.0，迁移 Release Notes 并更新根依赖 pin。属于标准版本发布流程，已关闭，推测已合并。

#### #2580 [CLOSED] fix(kosong)：无 Beta 特性时省略空 `anthropic-beta` 头
- 作者：7Sageer | 创建：2026-08-03 | 更新：2026-08-03  
- 链接：https://github.com/MoonshotAI/kimi-cli/pull/2580  
- **内容**：kosong 0.55.0 验证报告中指出 `Anthropic._streamed_request` 无条件构建 `anthropic-beta` 头，即使未声明 Beta 特性。修复为无 Beta 特性时不发送该头，避免与其他 Anthropic 兼容端点产生协议冲突。

#### #2535 [OPEN] fix(llm)：prompt cache keys 限定作用于 Moonshot API
- 作者：Sanjays2402 | 创建：2026-07-23 | 更新：2026-08-03  
- 链接：https://github.com/MoonshotAI/kimi-cli/pull/2535  
- **内容**：第三方 Kimi 兼容端点不再收到 Moonshot 特有的 `prompt_cache_key` 参数，而官方 Kimi / Moonshot API 保留会话缓存功能。此修复避免向第三方端发送不被支持的参数，提高生态兼容性。

---

### 4. 功能需求趋势

从全部活跃 Issue 与 PR 的讨论中，社区关注的功能方向如下：

- **跨会话记忆与持久化上下文**（#1283）：这是当前最受关注的功能请求，自动记忆 + 手动指令的双模式方案是社区主流诉求。
- **Web UI / 可视化组件稳定性**（#2573）：技术预览功能暴露出核心路径问题，会话管理与连接恢复是 Web 化的重要短板。
- **流式生成可靠性**（#2582）：CLI 在长生成任务中挂起，直接影响日常使用，是基础体验级别的稳定性需求。
- **协议与生态兼容性**（#2535、#2580、#2507）：第三方 Kimi 兼容端点、Anthropic 协议细节、ACP 语义正确性，表明用户生态较多元，协议边界需要精准控制。
- **异步任务与 Hook 生命周期**（#2575）：Hook 机制在任务调度层面的可靠性开始被关注，属于较深层的架构健康度议题。

---

### 5. 开发者关注点

- **稳定性压倒新功能**：本期 PR 几乎全是修复类，且指向实际阻塞性问题（挂起、崩溃、超时），稳定性是当前社区的核心诉求。
- **Windows / 旧平台兼容性**：GBK 控制台编码崩溃（#2577）与 Windows 环境挂起（#2582）说明跨平台适配仍存在盲区。
- **异步任务生命周期是隐藏雷区**：Hook 任务被 GC（#2575）、分离子进程持有管道（#2530）都是典型的异步资源管理问题，提示核心链路需要更严谨的任务持有与回收机制。
- **协议语义精确性**：ACP 空答案（#2507）、空 `anthropic-beta` 头（#2580）、`prompt_cache_key` 滥用（#2535）都属于“协议边界模糊”问题，开发者希望工具在标准兼容和厂商特性之间保持清晰的边界。
- **社区贡献活跃度提升**：贡献者 `ayaangazali` 一人贡献 5 个开放 PR（#2577、#2575、#2554、#2530、#2507），且均为定位清晰的修复型提交，说明社区已具备对源码进行深度维护的能力。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-04

## 今日速览

OpenCode 发布 v1.18.12，修复 Azure GPT-5.5+ 开启 reasoning 时请求失败，并改善桌面端大图片/附件草稿下的 composer 卡顿。社区侧，Feature 请求 #27167（原生 session goals）以 67 条评论、123 👍 成为当前最热议题；与此同时，多起连接错误、桌面端挂起和登录失败问题被集中反馈。PR 方面，流式请求超时重试、Unicode 补丁匹配、TUI 权限键位自定义等修复与功能正在推进。

---

## 版本发布

### v1.18.12
- **Core 修复**：修复 Azure GPT-5.5+ 在启用 reasoning 时的 completion 请求失败问题（由 @frederiknsgo 修复）。
- **Desktop 修复**：
  - 草稿中包含大型粘贴图片或附件时，降低 composer 卡顿。
  - 项目搜索现在可匹配所有已知最近项目，而非仅前五个。

---

## 社区热点 Issues（10 个）

1. **#27167 [FEATURE] Add native session goals with /goal**  
   - 作者：jorgitin02 | 评论 67 | 👍 123 | 更新 08-04  
   - 社区最热 Feature 请求。希望引入原生持久化 session goal/lifecycle，而非只用自定义 slash command。  
   - [GitHub Issue](https://github.com/anomalyco/opencode/issues/27167)

2. **#1168 [FEATURE] Make Links Clickable (Ctrl+Left Click to Open)**  
   - 作者：jay-tau | 评论 10 | 👍 118 | 更新 08-03  
   - 老牌高赞需求：希望终端/桌面 UI 中 URL 支持 Ctrl+点击打开浏览器，提升日常可用性。  
   - [GitHub Issue](https://github.com/anomalyco/opencode/issues/1168)

3. **#36942 [FEATURE] Vertical tabs**  
   - 作者：SkyElianneLavoie | 评论 10 | 👍 16 | 更新 08-03  
   - 新 UI 强制横向标签，难以同时查看超过 5 个 session 标题；用户希望提供垂直标签布局。  
   - [GitHub Issue](https://github.com/anomalyco/opencode/issues/36942)

4. **#16077 [FEATURE] Persistent Session Memory**  
   - 作者：ronique501-a11y | 评论 12 | 👍 3 | 更新 08-03  
   - 建议启动时从本地文件加载历史对话上下文，实现跨 session 的连续性，适合 CLI 陪伴型助手等场景。  
   - [GitHub Issue](https://github.com/anomalyco/opencode/issues/16077)

5. **#38932 [BUG] Pasting long text in prompt box make Desktop app hang**  
   - 作者：Itsnishant4 | 评论 4 | 更新 08-04  
   - 在桌面端粘贴约 5000+ 字符时应用无响应、无法自动恢复，是近期较严重的桌面稳定性问题。  
   - [GitHub Issue](https://github.com/anomalyco/opencode/issues/38932)

6. **#40314 [BUG] Unable to connect to the first certificate**  
   - 作者：papakojo16 | 评论 4 | 更新 08-03  
   - 用户通过 MTN Broadband 使用 OpenCode 时持续报“无法连接第一个证书”，影响正常请求。  
   - [GitHub Issue](https://github.com/anomalyco/opencode/issues/40314)

7. **#39207 [BUG] GitHub OAuth login fails with "Failed query: update `user`"**  
   - 作者：asmartin-ai | 评论 4 | 已关闭 | 更新 08-03  
   - GitHub OAuth 回调时 email 参数为空，导致服务端 SQL 更新失败，登录流程受阻。  
   - [GitHub Issue](https://github.com/anomalyco/opencode/issues/39207)

8. **#20600 [BUG] Desktop app randomly scrolls to middle of conversation during chat**  
   - 作者：elinx | 评论 4 | 👍 2 | 更新 08-03  
   - 桌面版 v1.3.13 在聊天中随机跳转到对话中部，影响阅读体验。同类问题还有 #29094、#17996，说明是长期痛点。  
   - [GitHub Issue](https://github.com/anomalyco/opencode/issues/20600)

9. **#40319 [BUG] OpenCode keeps attempting connection to unreachable provider without giving a connection error**  
   - 作者：grantwilliams-ai | 评论 3 | 更新 08-03  
   - 自定义 OpenAI Compatible provider 指向不可达地址时，`opencode run` 持续重试 60 秒以上且无错误提示，缺少超时反馈机制。  
   - [GitHub Issue](https://github.com/anomalyco/opencode/issues/40319)

10. **#40347 [BUG] Opencode app got freeze**  
    - 作者：justaniceday63-code | 评论 2 | 更新 08-04  
    - 应用在使用中冻结，重装最新版仍复现，并附带了 debug 日志，疑似更新相关问题。  
    - [GitHub Issue](https://github.com/anomalyco/opencode/issues/40347)

---

## 重要 PR 进展（10 个）

1. **#40268 fix(session): retry top-level stream request timeouts**  
   - 状态：OPEN | 更新 08-04  
   - 针对部分 OpenAI Responses 兼容 provider 返回 HTTP 200 后发出 SSE error 事件的问题，增加顶层流式请求超时重试。  
   - [GitHub PR](https://github.com/anomalyco/opencode/pull/40268)

2. **#40144 fix(tui): reject unavailable project destinations**  
   - 状态：CLOSED | 更新 08-04  
   - 修复 TUI 项目选择器中已删除目录仍可选的问题，选择前会校验目录是否存在。  
   - [GitHub PR](https://github.com/anomalyco/opencode/pull/40144)

3. **#40198 fix(opencode): match canonically equivalent Unicode in patches**  
   - 状态：OPEN | 更新 08-04  
   - 为 `seekSequence()` 增加最终 Unicode 规范等价匹配，修复文件名 Unicode 规范化差异导致的 patch 验证失败。  
   - [GitHub PR](https://github.com/anomalyco/opencode/pull/40198)

4. **#36710 fix(core): bound event log compaction**  
   - 状态：OPEN | 更新 08-04  
   - 增加只读事件日志状态和默认 dry-run 的有界压缩，避免事件日志无限增长。  
   - [GitHub PR](https://github.com/anomalyco/opencode/pull/36710)

5. **#40188 feat(plugin): add request-scoped chat.model hook**  
   - 状态：OPEN | 更新 08-03  
   - 新增请求级 `chat.model` 插件 hook，使插件可在单次请求中替换模型，满足动态路由需求。  
   - [GitHub PR](https://github.com/anomalyco/opencode/pull/40188)

6. **#38790 feat(app): add workspace flows to new layout**  
   - 状态：OPEN | 更新 08-03  
   - 为新版布局增加 Local/New/Existing workspace 选择流程，支持持久化、校验草稿和项目级默认值。  
   - [GitHub PR](https://github.com/anomalyco/opencode/pull/38790)

7. **#40334 feat(tui): make permission mode keybind configurable**  
   - 状态：OPEN | 更新 08-03  
   - 让 TUI 中切换 auto-approve 权限模式的快捷键可配置，当前已有 `permission.mode` 命令但无法自定义键位。  
   - [GitHub PR](https://github.com/anomalyco/opencode/pull/40334)

8. **#40337 feat(desktop): localhost browser preview for sessions**  
   - 状态：OPEN | 更新 08-03  
   - 为桌面端增加本地浏览器预览面板，可在应用内查看并交互当前 session 的 dev server。标记 `needs:compliance`。  
   - [GitHub PR](https://github.com/anomalyco/opencode/pull/40337)

9. **#40265 fix: gpt-5.5+ in combination with azure fails with reasoningEffort**  
   - 状态：CLOSED | 更新 08-03  
   - 修复 Azure 下 GPT-5.5+ 使用 `reasoningEffort` 的问题，对应 v1.18.12 release 中的 Core 修复。  
   - [GitHub PR](https://github.com/anomalyco/opencode/pull/40265)

10. **#40316 fix(core): apply safe defaults to all agents**  
    - 状态：CLOSED | 更新 08-03  
    - 将外部目录和 `.env` 读取策略统一收敛到所有 agent 默认配置中，收紧内置及自定义 agent 的目录访问权限，属于安全加固。  
    - [GitHub PR](https://github.com/anomalyco/opencode/pull/40316)

---

## 功能需求趋势

- **会话持久化与目标管理**：社区强烈希望引入原生 session goals（#27167）、跨会话持久记忆（#16077），而非仅依赖自定义 slash command。
- **UI/UX 改进**：高频诉求包括垂直标签页（#36942）、可点击链接（#1168）、毫秒级时间戳（#35348）、RTL/双向文本正确渲染（#40286）、任意文件作为工具上下文附加（#40341）。
- **桌面端 MCP/Skill 图形化管理**：多个用户要求桌面版提供 MCP server 与 skill 的 GUI 配置、编辑和连接测试能力（#31399、#40335）。
- **更灵活的安全/权限配置**：如 credential helper 的 `{cmd:}` 配置占位符（#12710）、TUI 权限模式键位自定义（#40334）。
- **连接与流式错误处理**：面对不可达 provider、不完整 SSE 流、证书错误等情况，社区需要更明确的超时、重试和错误透出机制（#40319、#40330、#40171、#40314）。

---

## 开发者关注点

- **桌面端稳定性是当前最大痛点**：粘贴长文本导致挂起（#38932）、聊天中随机滚动跳位（#20600、#29094、#17996）、应用整体冻结（#40347）。v1.18.12 已开始优化大附件草稿的 composer 卡顿，但相关反馈仍密集。
- **网络错误处理不透明**：provider 不可达时无错误输出且无限重试（#40319、#40330）；TLS 证书错误难以诊断（#40314）；SSE 流缺少关键事件导致客户端异常（#40171）。
- **登录与账号流程问题**：GitHub OAuth 因 email 为空失败（#39207）、Zen 注册在 Google/GitHub 认证后提示 Invalid email（#39414）、订阅后仍提示免费额度超限（#40308）。
- **模型响应偶发损坏**：DeepSeek V4 Flash 在长工具辅助生成中出现大量重复 Q 字符和乱码（#40321）；Azure GPT-5.5+ 的 reasoning 问题已在 v1.18.12 修复。
- **桌面端与 CLI 版本不同步**：Desktop 更新不会自动升级全局 CLI，导致 `opencode serve` 与桌面端版本不匹配、session 同步异常（#35122）。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-04

## 今日速览

- **Windows/WSL 支持问题集中爆发**：多个路径处理 Bug 持续活跃（#7064、#6817、#6104），社区发起 Windows 使用情况收集帖（#7547），开发者对 Windows 体验关注度显著提升。
- **Compaction（压缩）稳定性成为焦点**：#6768（Copilot Enterprise 无法压缩）获 18 👍，长会话压缩后不继续（#7020）和自动/手动压缩竞争（#7253）等问题引发大量讨论，已有多个修复 PR 进入合入流程。
- **JSON 模式输出性能问题获双 PR 修复**：#7395 提出的二次复杂度问题，已由 #7394 和 #7561 分别提交修复方案，流式输出即将线性化。

## 社区热点 Issues

### 1. [#6187 Pi login hangs in WSL after browser-based GitHub Copilot device authorization](https://github.com/earendil-works/pi/issues/6187)
> [bug] | 评论 20 | 👍 0 | 更新 2026-08-03

WSL 环境下设备授权流程完成后，Pi 客户端无法检测到授权状态，导致登录挂起。评论数高，影响 WSL 用户的日常使用。

### 2. [#6768 Compaction using Copilot Enterprise not possible](https://github.com/earendil-works/pi/issues/6768)
> [bug] | 评论 17 | 👍 18 | 更新 2026-08-03

使用 Copilot Enterprise 许可证时压缩功能不可用：OpenAI 路径返回 `421 Misdirected Request`，Anthropic 模型同样失败。点赞数高，是目前压缩功能的最大阻塞问题。

### 3. [#7064 WSL absolute windows paths are mishandled](https://github.com/earendil-works/pi/issues/7064)
> [bug] | 评论 11 | 👍 1 | 更新 2026-08-03

WSL2 下 `read`/`write`/`edit` 工具无法处理 Windows 绝对路径，导致 Agent 退化为命令行全量重写。属于 Windows 路径处理的核心缺陷。

### 4. [#7161 anthropic-messages never sends x-client-request-id, unlike all OpenAI paths](https://github.com/earendil-works/pi/issues/7161)
> [bug] [inprogress] | 评论 9 | 👍 0 | 更新 2026-08-03

Anthropic 路径不发送 `x-client-request-id`，导致依赖会话亲和性的网关（如 CliProxyAPI）无法将同一会话路由到同一个 Claude 账号。自定义网关用户关注。

### 5. [#7020 Sometimes Pi doesn't continue after compaction](https://github.com/earendil-works/pi/issues/7020)
> [bug] [CLOSED] | 评论 9 | 👍 2 | 更新 2026-08-03

长会话压缩后偶尔不继续，特别是在"协调者"型会话中频繁出现。压缩流程的稳定性隐患。

### 6. [#7547 How do you use Pi on windows? What issues are you seeing?](https://github.com/earendil-works/pi/issues/7547)
> [Windows] [sink-thread] | 评论 6 | 👍 0 | 更新 2026-08-04

社区焦点讨论帖：整理 Windows 上 Pi 的多种运行方式与问题，帮助维护者决定能量投入方向。

### 7. [#7399 truncateToWidth() leaves dangling OSC 8 hyperlink when it truncates inside one](https://github.com/earendil-works/pi/issues/7399)
> [bug] | 评论 5 | 👍 0 | 更新 2026-08-03

终端截断逻辑破坏 OSC 8 超链接平衡，导致悬空超链接写入终端。影响终端渲染正确性。

### 8. [#7047 Gemini 3.x tool-call IDs stripped from function calls/responses](https://github.com/earendil-works/pi/issues/7047)
> [bug] [CLOSED] | 评论 5 | 👍 1 | 更新 2026-08-03

Gemini 3.x 多轮工具对话中 `functionCall`/`functionResponse` 的 ID 字段被丢弃，违反模型要求，导致多轮工具调用失败。

### 9. [#7560 xai Grok 4.5 does not show up in the models list for GitHub Copilot Business subscription](https://github.com/earendil-works/pi/issues/7560)
> [bug] | 评论 3 | 👍 0 | 更新 2026-08-04

Copilot Business 订阅下 models 列表不显示 `grok-4.5`。新模型接入不及时的典型反馈。

### 10. [#7395 JSON mode serializes cumulative assistant state on every delta, causing quadratic output and long stdout drains](https://github.com/earendil-works/pi/issues/7395)
> [bug] | 评论 3 | 👍 0 | 更新 2026-08-03

JSON 模式下每个 delta 序列化完整累积状态，导致输出二次增长和 stdout 阻塞。对长响应场景影响严重，且已催生多个修复 PR。

## 重要 PR 进展

### 1. [#7503 feat(agent): implement harness v2 for in-memory storage](https://github.com/earendil-works/pi/pull/7503)
> [inprogress] | 更新 2026-08-03

引入 Harness v2 会话基础：新增后端无关的 `SessionStorage`/`SessionRepo` API，以及首个 `InMemorySessionStorage` 实现，是会话架构演进的重要一步。

### 2. [#7451 fix(coding-agent): bound model catalog refreshes](https://github.com/earendil-works/pi/pull/7451)
> [CLOSED] | 更新 2026-08-03

修复 5 个相关 Issue（#7027、#7113、#7153、#7418、#7443），通过限制模型目录刷新频率与取消/排队机制解决无限刷新问题。

### 3. [#7339 DRAFT: add openai background mode responses](https://github.com/earendil-works/pi/pull/7339)
> [OPEN] DRAFT | 更新 2026-08-03

为 OpenAI Responses API 实现 `background: true` 后台模式，草案中征求设计反馈。

### 4. [#7571 feat(ai): add built-in Cortecs provider support](https://github.com/earendil-works/pi/pull/7571)
> [CLOSED] | 更新 2026-08-03

新增欧洲 AI 路由器/提供商 Cortecs 支持，类似于 OpenRouter，依托 models.dev 提供模型列表。

### 5. [#7569 fix(coding-agent): normalize find root results](https://github.com/earendil-works/pi/pull/7569)
> [CLOSED] | 更新 2026-08-03

修复 `find` 工具路径相对化问题：改用 `.relative()` 替代手工切片，并正确处理路径选择器，解决路径规范化相关的多个 Bug。

### 6. [#7548 fix(coding-agent): sandbox issue analysis tools](https://github.com/earendil-works/pi/pull/7548)
> [OPEN] | 更新 2026-08-03

将 Issue 分析工具（`pi -p --approve` 和 `/is`）沙箱化：保留现有分析流程，同时捕获不可变 Issue 快照，避免 Agent 实时抓取，提升安全性。

### 7. [#7396 feat(coding-agent): add server session backend](https://github.com/earendil-works/pi/pull/7396)
> [OPEN] | 更新 2026-08-03

为 PiServer 添加持久化后端：以 JSONL 形式存储会话，支持跨进程排他锁、崩溃恢复和实时转录进度推送。

### 8. [#7562 feat(ai): support Anthropic server-side fallbacks](https://github.com/earendil-works/pi/pull/7562)
> [CLOSED] | 更新 2026-08-03

可选启用 Anthropic 服务端 fallback 载荷与 beta 支持，并保留回退转换记录、报告服务模型，不影响非启用请求的现有行为。

### 9. [#7552 fix(coding-agent): discover sessions through symlinked directories](https://github.com/earendil-works/pi/pull/7552)
> [CLOSED] | 更新 2026-08-03

修复 #7497：`listSessions` 现在可发现全局会话目录下符号链接目录中的会话，并复用按目录错误处理机制，附带回退链路与 Windows 兼容测试。

### 10. [#7394 fix(coding-agent): make JSON streaming output linear](https://github.com/earendil-works/pi/pull/7394)
> [CLOSED] | 更新 2026-08-03

修复 #7395：JSON/RPC 模式改为仅发送 delta 的 `message_update`，保留内部累计快照，并增加 stdout 背压处理，文档化 wire-protocol 迁移。另见 [#7561](https://github.com/earendil-works/pi/pull/7561) 为同类独立修复。

## 功能需求趋势

### 1. Windows/WSL 支持完善
大量 Issue 集中在 Windows 路径处理（#7064、#6817、#6104）、进程管理（#6596 taskkill ENOENT）以及整体体验（#7547 讨论帖）。Windows 已成为当前社区最关心的平台话题。

### 2. Compaction（压缩）控制增强
压缩功能的需求从"可用性"走向"可配置性"：#7553 提出独立配置压缩思考级别、#7253 反映自动/手动压缩冲突、#6768 要求 Enterprise 支持。压缩是长会话用户的核心痛点。

### 3. 新模型/提供商快速接入
社区对模型覆盖范围敏感：#7560 要求 Grok 4.5 出现在 Copilot 模型列表、#7546 希望支持自定义提供商的 opaque API 密钥、#7571 贡献 Cortecs 提供商支持。接入速度直接影响可用性。

### 4. 流式输出性能优化
#7395 的二次复杂度问题引发了设计层面的重新审视（#7394、#7561），方向是 delta-only 输出与背压控制。对长文档生成和脚本调用场景至关重要。

### 5. 终端兼容性与可访问性
Kitty 协议退格错误（#7130）、OSC 8 超链接截断（#7399）、iTerm2 图片 size 参数（#7465）、批处理颜色方案报告（#7550）等，终端生态的细碎兼容问题持续被修复。

### 6. SDK/API 灵活性
#7299 要求暴露 `shouldStopAfterTurn` 回调、#7568 添加通用采样参数、#7551 移除协议中的认证改为传输层责任。开发者希望嵌入 Pi 作为库时有更完整的控制面。

## 开发者关注点

- **Windows 路径处理是最大痛点**：`read`/`write`/`edit` 工具在 WSL 下失效、`find` 在 Windows 上无法匹配带路径模式、驱动根路径返回损坏结果。这些问题迫使 Agent 退化为低效的 shell 工具调用。
- **压缩流程稳定性**：Copilot Enterprise 的 421 错误、压缩后不继续、压缩重复触发等，是长会话和重活用户的主要阻力。相关修复 PR（#7370、#7540）正在快速跟进。
- **长会话性能退化**：JSON 模式二次复杂度、TUI 输入延迟（#7541）、image-heavy 会话卡顿，反映累积状态管理在超长会话中的性能瓶颈。
- **自定义网关/代理的兼容性**：`x-client-request-id` 缺失导致会话亲和性失效、opaque API 密钥不受支持、Cloudflare Gateway 的 provider 前缀被丢弃（#7030），企业和自建代理用户尤为关注。
- **进程与依赖管理**：Node.js 24 下 `spawn("taskkill")` 的 ENOENT、Windows 上 `git clean` 因文件占用失败，这类环境级问题也在高频出现。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-08-04

## 1. 今日速览

核心方向落在**可信 Agent 运行时**的讨论上（#8102，13条评论）——社区已在深入探讨如何让工具执行边界可确定、可审计。产品侧，Web Shell 正式成为具备原生生命周期管理、单实例行为和自动更新的 release-ready 桌面应用；同时 v0.21.5 发布流程在质量检查环节失败（#8476），**P1 级 Bug** 桌面端会话在重启后自动删除（#8400）值得高度关注。此外，Kimi / 小米 MiMo 新模型提供商 PR（#8368）已进入合入流程，模型生态在持续扩展。

## 2. 版本发布

### v0.21.4
- 发布 Web Shell 作为正式版桌面应用，支持原生生命周期管理、单实例行为及自动更新（[#8132](https://github.com/QwenLM/qwen-code/pull/8132)）
- Web Shell 历史分页已能优雅处理超长轮次
- 注意：v0.21.5 的发布工作流已在 quality 阶段失败（[#8476](https://github.com/QwenLM/qwen-code/issues/8476)），当前最新稳定版仍为 v0.21.4

## 3. 社区热点 Issues

### #8102 [P3 / 核心安全] 提议：为可信 Agent 运行时建立确定性工具执行边界
**评论 13 | 👍 0**
作者提出将语言模型置于信任边界之外，让运行时能对模型产生的动作进行确定性约束、授权、观测和评估。社区讨论热烈，直接关系 Qwen Code 作为 Agent 平台的安全基座如何设计。
→ https://github.com/QwenLM/qwen-code/issues/8102

### #8316 [Bug] Ctrl+C 取消 Prompt 后内容没有恢复到输入框
**评论 7**
用户取消正在思考的 prompt 后，原内容丢失、需重新输入。影响核心交互体验，属于高频操作路径上的 UX 问题。
→ https://github.com/QwenLM/qwen-code/issues/8316

### #8382 [P2 / Bug] 重复的 provider tool call id
**评论 6**
Agent 频繁报错 “Duplicate provider tool call id” 和 “not recorded”，导致工具调用失败，是影响日常可用性的核心 Bug。
→ https://github.com/QwenLM/qwen-code/issues/8382

### #8400 [P1 / Bug] 桌面端 Windows：ACP session/load 失败后会话被静默自动删除
**评论 3**
工作区路径（cwd）不匹配导致 provider 消息加载器返回 0 条消息，应用在无确认的情况下删除本地会话镜像。**P1 级别，涉及会话数据安全。**
→ https://github.com/QwenLM/qwen-code/issues/8400

### #8470 [P2 / Bug] 使用阿里云 token plan 时模型名过长
**评论 5**
`[Modelstuidio token plan]` 前缀过长，在手机端 Paseo 调用时模型名被截断，影响用户的模型选择判断。
→ https://github.com/QwenLM/qwen-code/issues/8470

### #8432 [P2 / Bug] Bailian 个人 Token Plan 模型列表不同步，图像/视频生成失败
**评论 4**
内置 `/auth` 模型列表与百炼控制台实际模型不一致，需人工排查或依赖社区修复。
→ https://github.com/QwenLM/qwen-code/issues/8432

### #8319 [P2 / Bug] Agent 思考区域动态高度导致界面上下跳动
**评论 3**
思考内容区域高度变化导致整个面板反复抖动，严重影响用户阅读。这说明**内容渲染稳定性**对体验的重要性。
→ https://github.com/QwenLM/qwen-code/issues/8319

### #8330 [P2 / Bug] Warp 终端下 Ctrl+Tab 与 @ 补全切换冲突
**评论 3**
Warp 终端中 Ctrl+Tab 被终端级别的标签切换拦截，`@` 补全选择器无法切换标签页。终端兼容性问题持续存在。
→ https://github.com/QwenLM/qwen-code/issues/8330

### #8398 [P2 / Bug] isAbortError 无法识别 OpenAI SDK 的 APIUserAbortError
**评论 3**
`auth_type=openai` 路径下用户取消请求被误分类，可能导致会话状态错乱。已有对应修复 PR #8399。
→ https://github.com/QwenLM/qwen-code/issues/8398

### #8123 [P3 / Bug] 桌面客户端无法用 @ 引用到正确的文件
**评论 5**
项目中存在 `KuaiShouOrderService.java` 文件但引用搜索不到。文件引用功能（@-mention）稳定性属于日常高频使用场景。
→ https://github.com/QwenLM/qwen-code/issues/8123

## 4. 重要 PR 进展

### #8125 [feat] 添加可选外部工具 Guard Provider（serve）
为受管理的 `qwen serve` ACP 部署添加 opt-in 的外部预执行策略 Provider，默认关闭。当设为 `required` 时 daemon 完成认证握手，仅允许与 loopback HTTP(S) Provider 通信。安全方向的重要基础设施。
→ https://github.com/QwenLM/qwen-code/pull/8125

### #8274 [feat] 支持从任意对话进行 fork
此前分支只能从最新会话状态出发，无法精准定位更早的 Assistant 响应。此 PR 把任意可见消息作为分支点，为会话分支管理提供更灵活的能力。
→ https://github.com/QwenLM/qwen-code/pull/8274

### #8488 [fix] 加固 Qwen 3.8 reasoning effort wire shape（4 项修复）
解决 `enable_thinking` 与 `thinking_budget` 竞争、DashesScope wire shape 等问题。对 Qwen 3.8 在 DashScope 上的推理行为正确性至关重要。
→ https://github.com/QwenLM/qwen-code/pull/8488

### #8399 [fix] 识别 OpenAI SDK APIUserAbortError 为 abort
修复 `isAbortError` 对该异常的漏检问题，是 #8398 的修复实现，直接影响取消操作后在 openai 兼容路径上的会话恢复行为。
→ https://github.com/QwenLM/qwen-code/pull/8399

### #7567 [feat] 新增 `/advisor` 命令：会话二次意见审查
类似 `/btw` 的机制，以只读 fork 方式让审查模型对当前会话提供独立的第二意见，同时保持共享上下文。
→ https://github.com/QwenLM/qwen-code/pull/7567

### #7837 [fix] 协调终端 teardown
统一交互式会话的同步、幂等终端清理流程，覆盖正常退出、直接进程退出、SIGINT/SIGTERM/SIGHUP，同时保留信号派生退出码，可修一组 Windows/终端清理类问题。
→ https://github.com/QwenLM/qwen-code/pull/7837

### #8260 [fix] 保留每次推理 episode 的 signature
修复 geminiChat 对话合并时将多段思考内容合并为单个 blob、仅保留第一个 `thoughtSignature` 的问题，避免 Anthropic/Gemini 等并行工具调用场景下推理签名丢失。
→ https://github.com/QwenLM/qwen-code/pull/8260

### #8276 [fix] 在延迟工具发现期间保持 prompt cache
使主会话的 provider 工具声明和缓存的系统指令保持稳定，`tool_search` 以模型可见形式返回匹配 schema，避免缓存失效带来的性能和成本损耗。
→ https://github.com/QwenLM/qwen-code/pull/8276

### #8368 [feat] 添加 Kimi 和 Xiaomi MiMo 第三方提供商
新增 Kimi（Coding Plan / 中国和海外 API Key）和小米 MiMo（按量付费 + 中国/新加坡等区域）的一体化提供商预置。社区对新模型支持的需求旺盛，该 PR 值得关注。
→ https://github.com/QwenLM/qwen-code/pull/8368

### #8496 [feat] Web Shell 中运行只读 info 命令
允许 `/stats`、`/about` 和 `/context` 等在流式回合中立即执行，此前这些命令在回合中被静默吞掉，没有反馈。
→ https://github.com/QwenLM/qwen-code/pull/8496

## 5. 功能需求趋势

- **可信任 Agent 运行时**：诉求从“能用”升维到“可信”——确定性工具执行、授权边界、审计观测（#8102），并配套外部 guard provider（#8125）。
- **更丰富的模型提供商支持**：新增 Kimi、小米 MiMo、Bailian Token Plan 品类（#8368、#8432），说明社区对模型选择和最新模型接入的关注度很高。
- **Web Shell 和 GitHub/渠道集成扩围**：Web Shell 出现 Git diff 源与分支切换（#8467）、本地 gh auth 复用（#8461）、session refresh 认证修复（#8445）、只读命令即时响应（#8496），桌面化/Web 化趋势明确。
- **更深层的工作流能力**：从任意会话 fork（#8274）、Plan & Review 工作流（#8389）、对话二次意见（#7567）、Email 渠道（#8281），均反映从单次交互走向可治理的长期工作流管理。
- **安全和平台化运管**：自动发布流程治理（#8435、#8436）、外部工具策略、MCP 同步可靠性，是项目从“CLI 工具”演进为“平台/运行时”的社区共识信号。

## 6. 开发者关注点

- **中断与取消的体验劣化**：取消 Prompt 后内容丢失（#8316）、Warp 下 Ctrl+Tab 冲突（#8330）、Ctrl+Shift+C 复制失效（#8317）——取消路径和终端兼容性仍需系统打磨。
- **会话管理稳定性**：P1 级会话静默自动删除（#8400）、APIUserAbortError 被误分类（#8398）、abort 后转录不落盘（#8356）——会话数据安全和状态一致性是用户最担心的问题。
- **MCP 工具链可靠性**：重复 tool call id（#8382）、SDK 嵌入的 MCP server 在恢复会话后调用失败（#8433）、MCP 热重载后 stale 注册（#8492）——MCP 作为扩展机制正处于高速迭代期，但稳定性是硬门槛。
- **性能与缓存**：大小触发的微压缩反复造成 prompt cache 失效（#8452）、deferred tool discovery 的缓存保持问题（#8276）——都是用户在意的实际成本与延迟问题。
- **UI/渲染**：思考面板上下跳动难以阅读（#8319）、模型名截断（#8470）、桌面端文件引用不到（#8123）——细节交互的完成度决定了日常体验的顺滑度。
- **Windows 兼容性**：ConEmu/Cmder 下整屏闪烁（#8385）、会话静默删除（#8400）——发布版对 Windows 用户的体验目前仍有明显短板。
- **发布流程治理**：v0.21.5 发布在 quality 步骤失败，自动 triage/发布流程对 cancellation 的兜底逻辑（#8436）和 scan-and-pick 并发串行化（#8435）正在被修复，以保障发布健康度。

---

**日报日期**：2026-08-04 · 数据来源：github.com/QwenLM/qwen-code

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-08-04

> 数据来源：GitHub Hmbown/DeepSeek-TUI（Issue/PR 链接指向 CodeWhale 仓库，应为项目更名后路径）

## 1. 今日速览

- v0.9.4 发布集成列车（#5135）正式启动，当前领先 main 77 个提交，多个由 Copilot 自动生成的运行时 API 扩展 PR 集中涌现。
- 社区讨论热度集中在三大方向：**ACP Registry 生态集成**（让 Zed 直接安装）、**OpenCode Go/Zen 等新供应商支持**、以及**中文输入法/翻译/乱码等本地化体验问题**。
- 无正式版 Release 发布；过去 24 小时有 17 个 PR 持续更新，其中 5 个由 Copilot 主导的 v0.9.4 runtime API 系列值得重点关注。

## 2. 版本发布

过去 24 小时无新 Release。不过 v0.9.4 的发布列车已启动，详见 PR #5135。

## 3. 社区热点 Issues（Top 10）

1. **#3192 申请加入 agentclientprotocol/registry** — 13 条评论
   社区用户请求将项目列入 ACP Registry，以方便 Zed 直接安装和调用。该 Issue 获得 0 👍，但 13 条评论说明围绕 ACP 集成方案的讨论非常活跃。
   🔗 https://github.com/Hmbown/CodeWhale/issues/3192

2. **#3205 v0.9.3：Fleet 模型类、loadout auto 与语义路由角色** — 11 条评论
   项目维护者 Hmbown 提出的核心架构演进：为 TUI、CLI、exec、subagents、Fleet workers 构建统一的 model/loadout 选择器。Fleet 需要的是**整机计算负载**的自动解析，而非单纯选模型或调 thinking 级别。
   🔗 https://github.com/Hmbown/CodeWhale/issues/3205

3. **#1481 支持 OpenCode Go/Zen 作为 DeepSeek 供应商** — 10 条评论，1 👍
   用户要求新增 OpenCode Go/Zen 供应商，理由是该服务提供 DeepSeek-V4 且价格低廉。反映出社区对**低成本 DeepSeek 接入渠道**的强烈需求。
   🔗 https://github.com/Hmbown/CodeWhale/issues/1481

4. **#4959 提议新增 'stop' 命令** — 7 条评论
   用户指出在 YOLO 模式下，`+ stop` 和 `stop` 等文本命令会被模型忽略，需要**运行时 STOP-word 拦截机制**来强制中止工具调用循环。这是自主工作流可靠性建设的关键一环。
   🔗 https://github.com/Hmbown/CodeWhale/issues/4959

5. **#4949 "Constitution" 中文翻译讨论：宪法？协作准则？** — 7 条评论
   中文用户就 "Constitution" 的准确译法展开社区投票式讨论。PR #4908 将其从"协作准则"改回"宪法"，引发对**中文语境政治敏感性**的争论，是本地化过程中典型的文化冲突案例。
   🔗 https://github.com/Hmbown/CodeWhale/issues/4949

6. **#4022 定义 subagent 与运行时控制面的 CLI/TUI 对等性** — 7 条评论
   维护者指出 subagent 的状态查看、展开/折叠、取消等控制目前被"困在 TUI 侧边栏里"，需要为未来的云应用和远程工作台定义一套**跨界面一致的子代理控制协议**。
   🔗 https://github.com/Hmbown/CodeWhale/issues/4022

7. **#2492 不具备跨会话记忆** — 5 条评论
   中文用户验证反馈：每次重启丢失上一轮会话记忆；即使强制要求写入记忆，重启后也不会主动读取。响应快是优点，但**记忆连续性缺失**严重影响实际使用。
   🔗 https://github.com/Hmbown/CodeWhale/issues/2492

8. **#1917 提议通用的 PreToolUse/PostToolUse 钩子层** — 5 条评论
   基于 #1886-#1900 的 slash 命令产品化分析提出：通过统一钩子层为**所有工具调用**提供 Cancel（含回滚）、Pause、Resume 能力，而非仅针对特定 action 类型。
   🔗 https://github.com/Hmbown/CodeWhale/issues/1917

9. **#2984 OpenAI Codex/ChatGPT OAuth 路由验证与用量展示** — 5 条评论
   维护者发起的 live-account 验证任务，目标是将 Codex/ChatGPT OAuth 路由从预览状态转正为支持状态，需通过 selected-route resolver 和 Responses wire protocol 验证。
   🔗 https://github.com/Hmbown/CodeWhale/issues/2984

10. **#4785 死代码清扫：464 个 #[allow(dead_code)] 正在掩盖代码漂移** — 4 条评论
    维护者统计了全仓库 143 个文件中共 464 处 `#[allow(dead_code)]`，导致编译器无法报告结构性漂移。直接删减后 `cargo check` 可发现大量已死代码，是 v0.9.3 质量债清理的重要信号。
    🔗 https://github.com/Hmbown/CodeWhale/issues/4785

## 4. 重要 PR 进展（Top 10）

1. **#5135 Codewhale v0.9.4 release train** — 开放中
   v0.9.4 集成列车，领先 main 77 个提交，包含 2026-08-01 全部源码候选。所有 v0.9.4 的 PR 最终都需要汇入此分支。
   🔗 https://github.com/Hmbown/CodeWhale/pull/5135

2. **#5233 修复 Model Studio 官方 chat 路由的 reasoning 展示** — 开放中
   仅在经过验证的阿里云 Model Studio OpenAI 兼容 Chat Completions 路由上，将 `reasoning_content` 分类为 Thinking 流；并按模型能力开放 `enable_thinking`、`preserve_thinking` 等控制项。
   🔗 https://github.com/Hmbown/CodeWhale/pull/5233

3. **#5231 清理阻塞 v0.9.4 列车的 clippy deny 级 lint** — 已合并
   CI 的 Lint 任务以 `-D warnings` 运行，codewhale-tui 当时存在 30 处 deny 级 lint（14 个 bin + 16 个 test），涉及 16 个独立代码点。本 PR 解除了 train→main 合并的 CI 阻塞。
   🔗 https://github.com/Hmbown/CodeWhale/pull/5231

4. **#5192 固定 ratatui 至 0.30.0** — 开放中
   ratatui-core 0.1.1+ 的 `Terminal::clear()` 会发起阻塞式光标位置查询，与 crossterm 事件读取锁竞争，导致 TUI 事件循环死锁。固定版本可规避启动时的竞争问题。
   🔗 https://github.com/Hmbown/CodeWhale/pull/5192

5. **#5225 在 ACP session/prompt 暴露 file/search/git/patch/shell 工具** — 开放中
   ACP 服务器的 `session/prompt` 原来只流式返回文本，模型请求的 tool_call 不会实际执行。本 PR 让 Zed 等 ACP 桥接器从"纯聊天的 agent"升级为**真正具备代码编辑能力**的工具执行器。
   🔗 https://github.com/Hmbown/CodeWhale/pull/5225

6. **#5228 rail unification 重构栈（基于 train 分支变基）** — 开放中
   维护者将 12 个 commit 的 rail 统一改造栈（agent/rail-unify-panels-20260802）重新变基到 v0.9.4 train 上，期间 train 分支移动导致二次变基。最终基线为 27c1c9ffe。
   🔗 https://github.com/Hmbown/CodeWhale/pull/5228

7. **#5133 运行时 API：暴露持久化 goal-loop 状态与完成控制** — 开放中（Copilot）
   为 `/v1/threads/{id}/goal` 新增 GET（读 goal 状态）与 DELETE/POST（生命周期控制）等端点，使托管客户端能通过规范边界驱动 goal 状态机。
   🔗 https://github.com/Hmbown/CodeWhale/pull/5133

8. **#5132 运行时 API：验证回执与证据暴露** — 开放中（Copilot）
   Fleet 此前只有 `verifier_failed` 聚合计数。本 PR 新增 `/v1/fleet/runs/{run_id}/receipts` 等只读端点，列出全部持久化任务回执，支持按 task/runner 维度查看失败原因。
   🔗 https://github.com/Hmbown/CodeWhale/pull/5132

9. **#5130 运行时 API：有边界的 MCP 服务器配置与生命周期管理** — 开放中（Copilot）
   之前的 runtime API 只读暴露 MCP 库存，客户端无法增删改。新增 `POST/DELETE /v1/apps/mcp/servers` 等路由，让桌面/Web 客户端无需直接编辑 TOML 即可管理 MCP 服务器。
   🔗 https://github.com/Hmbown/CodeWhale/pull/5130

10. **#5129 运行时 API：技能生命周

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*