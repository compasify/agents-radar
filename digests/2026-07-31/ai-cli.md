# AI CLI 工具社区动态日报 2026-07-31

> 生成时间: 2026-07-31 01:46 UTC | 覆盖工具: 10 个

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

# AI CLI 工具横向对比分析报告

**分析日期：2026-07-31**

---

## 一、生态全景

当前 AI CLI 工具已全面进入"生产环境残酷考验期"，社区焦点从基础功能叠加转向 **成本失控、数据安全、子代理失控、跨平台稳定性** 等治理级问题。绝大多数工具过去 24 小时无新版本发布，但 Issue 密度与 PR 活跃度维持高位，说明产品迭代正在从"功能驱动"转向"可靠性驱动"。值得注意的两条主线：其一是 **多 Agent 编排已成为标配，但可观测性与控制力严重滞后**（如 Claude Code 的 75 万 token 事故、Gemini 子代理误报成功）；其二是 **MCP 生态互操作与 OAuth 标准化** 成为共通的连接层痛点，横跨 Codex、Gemini、Copilot 三个头部工具。整体判断：**这一阶段的核心胜负手在于"谁能先让代理花钱可控、行为可预测、故障可诊断"。**

---

## 二、各工具活跃度对比

| 工具 | 重点 Issue 数（24h） | 重要 PR 数（24h） | Release | 最热 Issue（👍数） | 核心议题 |
|---|---|---|---|---|---|
| **Claude Code** | 10 | 1（垃圾 PR，已关闭） | 无 | #36151 移动端多账户切换（👍530） | Token 成本失控、数据丢失、自动化可靠性 |
| **OpenAI Codex** | 10 | 10（3 已合并） | 无 | #31573 OAuth 认证失败（👍66） | Windows 崩溃、非 OpenAI MCP 失效、多 Agent 调度 |
| **Gemini CLI** | 10 | 10（6 已合并/关闭） | 无 | #21409 通用代理挂起（👍8） | 子代理误报、SSRF 漏洞、Auto Memory 资源损耗 |
| **GitHub Copilot CLI** | 10 | 0 | **v1.0.77**（浏览器 OAuth 登录） | #3767 超大附件卡死会话（13 评论） | AI 额度预警、长会话性能退化、非 git 支持 |
| **Kimi Code CLI** | 3 | 1 | 无 | #2571 服务端 429 完全不可用 | 限流故障、持久化记忆、Windows 卡死 |
| **OpenCode** | 10 | 10（含关键修复 PR） | **v1.18.10**（Modal 模型自动发现） | #39653 Sol 服务器过载（👍10） | 上游服务不稳定、桌面端回归、Plan 模式绕过 |
| **Pi** | 10 | 10 | 无 | #6747 消息 markdown 扩展 API（⭐12） | 协议化架构、catalog 刷新卡死、Wayland 兼容 |
| **Qwen Code** | 10 | 10 | **v0.21.1-nightly**（CI/Web Shell 修复） | #4063 核心架构 Review（👎1 / 💬5） | Windows 崩溃、Anthropic 转换器合规、凭证泄露 |
| **CodeWhale (DeepSeek TUI)** | 10 | 10 | **v0.9.2**（品牌切换 CodeWhale） | #2870 命令边界重构 EPIC（💬19） | 单体 crate 拆分、配置路径碎片化、桌面体验 |
| **Grok Build** | 0 | 0 | 无 | — | 无活动 |

> 注：重点 Issue/PR 指各工具日报中单列详细分析的项目；Gemini 的 👍 数整体偏低与仓库评分习惯有关，不完全代表影响力。

---

## 三、共同关注的功能方向

### 1. 子代理可靠性、可观测性与控制力
- **Claude Code**：#82104（TaskStop 失效致 750k token 耗尽）、#77730（会话 ID 跨身份边界不可恢复）
- **Gemini CLI**：#22323（MAX_TURNS 中断误报 GOAL 成功）、#21409（通用代理无限挂起）、#22093（agents disabled 仍触发子代理）
- **GitHub Copilot CLI**：#4293（子代理全量工具时返回空响应）、#4306（子任务冻结无响应）
- **Qwen Code**：#8172（teammate 消息在整个多工具调用期间排队）
- **CodeWhale**：#4022（CLI/TUI 控制面对等性）、#4989（子代理唤醒语义）

**诉求本质**：用户需要"子代理的状态与结果可信、消耗可限定、中断可追溯"，这是多 Agent 工作流从演示走向生产落地的前提。

### 2. Token 成本控制与用量可观测性
- **Claude Code**：#82104（实时用量不可见、无上限控制）、#77730（respawn 烧 token）
- **GitHub Copilot CLI**：#4295（AI Credits 预警）、#4308/#4309（会话完成后仍消耗积分）
- **OpenAI Codex**：#24080（暴露 resetsAt/余额状态）、#36213（Plus/Pro 20x 差距质疑）
- **DeepSeek TUI/CodeWhale**：#4704/#4707（系统提示折叠、token 归因）

**诉求本质**：用户要求"每一分 token 花在哪、还剩多少、能否设上限"，对用量不可见的黑盒模式容忍度降至冰点。

### 3. Windows 平台稳定性专项
- **OpenAI Codex**：#32683（浏览器崩溃）、#35362/#35481（diff 渲染崩溃）、#18620（沙箱 1326/1909）、#35803/#35864
- **Qwen Code**：#7972（0.21.1 崩溃 3 次）、#8124（启动 banner 缺失）、#8050（测试套件 Windows 可移植）
- **Gemini CLI**：#21983（浏览器子代理 Wayland 失败）
- **Kimi Code CLI**：#2570（CLI 与浏览器标签页关联卡死）
- **CodeWhale**：#2369（Cygwin 配置路径分裂）、#4990（Windows devcontainer）
- **GitHub Copilot CLI**：#4296（iTerm2 Cmd+V 失效）、#2841（MobaXterm 滚轮失效）

**诉求本质**：Windows 已从"第二平台"上升到"必争之地"，但各工具在 Windows 上的崩溃密度、沙箱权限、终端兼容性短板极其相似，说明跨平台测试基建普遍薄弱。

### 4. 上下文管理：持久记忆、自动压缩与配置可预期
- **Kimi Code CLI**：#1283（跨会话持久记忆系统，持续更新）
- **Gemini CLI**：#26522（Auto Memory 低信号会话无限重试）、#26525（脱敏滞后）、#28488（自动压缩呼声）
- **Claude Code**：#82761（CLAUDE_AUTOCOMPACT_PCT_OVERRIDE 静默失效）
- **OpenAI Codex**：#26930（会话续接推理等级丢失）
- **CodeWhale**：#4709/#4710（重复上下文去重、跨模型消融）

**诉求本质**：模型上下文窗口再大也跑不过长会话累积，社区正在集体探索"如何让上下文管理有策略、有反馈、不静默失效"。

### 5. MCP 生态互操作与 OAuth 标准化
- **OpenAI Codex**：#26234（非 OpenAI 端点 MCP 工具不可调用）、#13200（Slack MCP 提示 Dynamic client registration not supported）
- **Gemini CLI**：#28481（MCP OAuth token 刷新失败）、#21968（模型不主动使用 Skills/MCP）
- **GitHub Copilot CLI**：#4301/#4303（JSON Schema anyOf/union 类型被扁平化）

**诉求本质**：MCP 的"可用"和"好用"之间存在巨大鸿沟——连接器兼容、OAuth 动态注册、schema 保真三大问题不解决，MCP 生态难以规模化落地。

### 6. 安全：SSRF、凭证泄漏与供应链加固
- **Gemini CLI**：#28555（web-fetch SSRF 绕过，CVSS 8.6）、PR #28602/#28603（Node EOL 升级）
- **Qwen Code**：#8136（Provider 警告清理器凭证泄露）
- **Claude Code**：#82734（后台任务敏感数据落盘担忧）
- **OpenAI Codex**：#34306（安全策略误拦截正常网络安全任务）

**诉求本质**：安全短板正从"用户配置疏忽"转向"工具自身实现缺陷"，供应链 EOL、SSRF、凭证脱敏成为审计重点。

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线/架构特征 | 当前最大软肋 |
|---|---|---|---|---|
| **Claude Code** | 全功能 IDE 式 CLI，强 Agent 编排、Skills、Cowork 协程系统 | 企业级开发者、团队协作 | 闭源、单仓库集中式；移动端/桌面端/CLI 三端同步推进 | token 成本不可控、自动更新数据丢失、移动端多账户缺失 |
| **OpenAI Codex** | 深度绑定 OpenAI 模型生态，强 MCP/VS Code 集成 | 订阅 OpenAI 的 Pro/Enterprise 用户 | 闭源，Rust 核心；大举重构 ConnectorRuntime 与远程执行架构 | Windows 平台全面拉胯、OAuth/连接器兼容性拖后腿 |
| **Gemini CLI** | Google 生态深度整合，多 Agent 与评估体系并重 | Gemini API 用户、Chrome/Android 生态开发者 | 开源（部分）Rust 核心；官方 EPIC 推动组件级评估（76 个测试） | 子代理状态可信度低、Auto Memory 资源损耗、SSRF 漏洞 |
| **GitHub Copilot CLI** | 依托 GitHub/Copilot 订阅体系，偏稳重的企业级工具链 | VS Code/Visual Studio 用户、企业组织 | 闭源，Rust；浏览器 OAuth 登录为最新亮点 | 长会话性能退化、AI 额度消耗不透明、非 git VCS 不支持 |
| **Kimi Code CLI** | 轻量、快速接驳 Kimi K3 模型 | Moonshot 生态用户；中文开发者 | 开源，Python 异步（asyncio hooks） | 服务端 429 不可用、无记忆系统、动态量太少 |
| **OpenCode** | 开源可插拔终端，从自用走向社区生态 | 开源爱好者、自托管/本地模型用户 | 开源（anomalyco/opencode），TypeScript；Modal 自动发现、TUI 插件热重载 | 上游模型服务器不稳定、发版回归频发、Plan 模式隔离漏洞 |
| **Pi** | 可嵌入、协议化的终端 Agent 运行时 | SDK/嵌入式开发者、Raycast 式场景 | 开源，TypeScript；新推 pi-protocol / pi-client 走向远程会话协议化 | catalog 异步刷新卡死、渲染性能在长上下文下劣化 |
| **Qwen Code** | 阿里系模型 + 跨服务转换器兼容（Anthropic/Gemini） | 中文开发者、Qwen 模型用户、多云服务中间层 | 开源，TypeScript monorepo；正在做 core/cli 架构大重构 | Windows 崩溃频繁、转换器边界 bug 密集、桌面端尚不成熟 |
| **CodeWhale (DeepSeek TUI)** | 沉浸式 TUI 与终端美学，强交互个性化 | 终端极客、DeepSeek 模型用户、中文社区 | 开源 Rust，18 包约 771k 行；v0.9.3 将收敛为单二进制 | TUI 单体编译痛苦、配置路径碎片化、兼容端点 400 |
| **Grok Build** | — | xAI 生态早期用户 | — | 动态趋近于零，生态尚未形成 |

---

## 五、社区热度与成熟度

### 第一梯队：高活跃、强影响（Issue/PR 双高、话题广度大）
- **Claude Code**：虽 PR 贡献近零，但 Issue 热度断层第一（👍530 的移动端请求），且报告质量极高（包含 750k token 事故详尽复盘）。社区规模最大，但对官方修复速度的不满情绪在积累。
- **OpenAI Codex**：Issue 与 PR 双高，连接器/远程执行架构重构信号明确，社区对 Windows 稳定性怨气最深。属"重投入、重暴露"状态。

### 第二梯队：迭代快、问题集中（PR 活跃，Issue 聚焦）
- **Gemini CLI**：官方 EPIC 驱动的评估体系建设是亮点，安全响应提速（SSRF、Node EOL、OAuth 修复均进入 p1），但仍受困于子代理可信度的基础缺陷。
- **Qwen Code**：PR 与 Issue 同步旺盛，Windows 专项补齐与转换器严谨化是当前主线，正处于"活跃但尚未完全成熟"的爬坡期。
- **Pi**：架构演进意图明显（协议化、客户端化），技术前瞻性强，但"catalog 卡死"这类基础问题拖累了整体成熟度评价。
- **CodeWhale**：品牌切换 + v0.9.3 架构重构成最大看点，社区技术讨论质量高（编译时长、token 归因、命令边界），但用户基数仍偏小众。

### 第三梯队：局部热点
- **GitHub Copilot CLI**：有发布、有热点（额度预警、子代理空响应），但 24h 内无 PR，迭代节奏受官方控制，社区参与空间有限。
- **OpenCode**：版本迭代快（桌面端、TUI 插件热重载），但上游模型服务器不稳直接影响口碑，社区在"功能丰富"与"稳定性存疑"之间摇摆。
- **Kimi Code CLI**：动态量少，但 #1283 记忆系统的持续讨论代表真实需求；整体仍处于生态建设早期。

---

## 六、值得关注的趋势信号

### 1. "Token 成本失控"正成为AI CLI 最大的信任危机
Claude Code 单次事故 75 万 token、Copilot 用户在会话结束后仍被扣费、Codex 用户对 20x 配额差距的质疑——**当模型能力不再是瓶颈，"用得起"开始决定工具生死**。开发者在选择工具时应优先确认：是否有实时用量仪表盘、是否支持硬性消费上限、子代理能否被强制中断。这将是下一轮产品差异化的关键战场。

### 2. 子代理从"锦上添花"转变为"可靠性黑洞"
多 Agent 编排已是标配，但几乎所有主流工具都在子代理上翻车：误报成功、无限挂起、消息延迟、失控计费。**"委派出去就失去控制"是当前多 Agent 架构最大的系统性缺陷**。具备子代理级沙箱、可观测性与显式取消链的工具将获得实质性竞争优势。

### 3. Windows 成为头部工具的"阿喀琉斯之踵"
Codex 的浏览器崩溃、Qwen 的反复闪退、Copilot 的终端兼容性问题——Windows 用户的反馈密度远超 macOS/Linux。**这背后是多数团队以 macOS 为主力开发环境、Windows 仅做"二等公民"适配的惯性**。对于面向企业用户的工具，Windows 一等公民支持将是不可回避的投入方向。

### 4. MCP 生态进入"标准化阵痛期"
OAuth 动态注册、非 OpenAI 端点兼容、JSON Schema 保真——三大问题同时在 Codex、Gemini、Copilot 社区爆发，说明 MCP 协议本身在"生产级安全与互操作"层面仍未成熟。**短期建议：对 MCP 依赖较重的团队应预留兼容层，避免绑定单一实现**。

### 5. "静默失效"比报错更可怕
Claude Code 的 `CLAUDE_AUTOCOMPACT_PCT_OVERRIDE` 变 no-op 不告警、Copilot 的引擎静默回退 128K 上下文、Qwen 的凭证清理器定位逻辑错误——**配置被无视、回退无提示、失败不报错**，正在成为工具可信度的隐形杀手。要求"显式暴露配置错误"的呼声将推动 CLI 工具在配置验证与可观测性上加大投入。

### 6. 架构重构窗口期到来：从"功能堆叠"转向"分层治理"
Pi 的协议化、CodeWhale 的运行时收敛、Qwen 的 core/cli 重构、Codex 的 ConnectorRuntimeManager——**头部项目不约而同开始拆分单体、明确边界、建立可插拔层**。这是技术债务压力下的集体选择，也意味着未来半年到一年，这些工具将进入一段"架构红利释放期"，值得持续跟踪。

### 7. 服务端容量与限流策略直接影响工具口碑
Kimi 的 429 完全不可用、OpenCode 的 Sol 服务器过载、Gemini 的 `MODEL_CAPACITY_EXHAUSTED` 曾致重试挂起——**上游模型服务的稳定性正成为 CLI 工具用户体验的一部分**。工具厂商需要在客户端提供更聪明的降级链、配额提示与重试策略，而不是简单透传错误。

### 8. 品牌/账号/工作区管理成为企业落地的隐形门槛
Claude Code 移动端多账户切换（👍530）登顶热榜、Codex 的跨设备工作区切换、Copilot 的企业 BYOK 登录——**多身份、多工作区、跨设备连续性**正在从高级需求变成基本盘。早期采用者大多已从个人试用转向团队部署，身份/工作区治理将成为企业采购的关键评估项。

---

**总结**：AI CLI 工具的竞争已走出"能跑就行"的阶段。**成本可预期、行为可诊断、事故可恢复、平台不偏科**，是决定下一梯队排名的四个核心维度。对技术决策者而言，在工具选型时建议重点考察三点：子代理是否有硬性消耗上限、Windows 平台是否纳入一等公民测试矩阵、配置与执行过程是否具备透明的可观测性。未来 6 个月，率先补齐这些短板的工具将显著拉开与追赶者的差距。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

⚠️ Skills 摘要生成失败。

---

# Claude Code 社区动态日报（2026-07-31）

## 1. 今日速览

今日无新版本发布，社区焦点集中在 **token 成本失控** 与 **数据安全** 两大主题。最热 Issue 仍为移动端多账户切换请求（#36151，👍530/评论148），持续霸榜。多起严重问题被密集报告：TaskStop 无法终止子 agent 致 75 万 token 被消耗（#82104）、ugrep 特定正则导致 4-17 GB 内存分配（#78834）、自动更新引发 Cowork 会话数据丢失（#43719）等，指向当前版本在成本控制与稳定性上的短板。PR 侧活跃度极低，仅 1 个垃圾 PR 已关闭，无有效代码贡献。

---

## 2. 版本发布

过去 24 小时无新版本 release，当前最新版本为 v2.1.220（依据 Issue #82763 等报告信息）。

---

## 3. 社区热点 Issues

### 3.1 移动端多账户切换（#36151）
- **作者/时间**：CorneAussems | 创建 2026-03-19 | 更新 07-31
- **热度**：148 评论，👍530
- **为什么重要**：当前社区**最热门**需求，用户希望在不共享邮箱的前提下于 Claude Mobile app 中切换多个账户，直接影响团队场景下的移动端可用性。
- **链接**：https://github.com/anthropics/claude-code/issues/36151

### 3.2 TaskStop 无法停止子 agent，750k token 被消耗（#82104）
- **作者/时间**：simplysdm | 创建 2026-07-28 | 更新 07-30
- **热度**：2 评论
- **为什么重要**：三个缺陷叠加导致 **subagent 失控**：父 agent 被 kill 后子 agent 继续运行计费，实时用量不可见且无上限控制，单次事故消耗 750,460 token。对成本敏感用户是重大可靠性隐患。
- **链接**：https://github.com/anthropics/claude-code/issues/82104

### 3.3 ugrep 内存爆炸（#78834）
- **作者/时间**：Helban | 创建 2026-07-18 | 更新 07-30
- **热度**：3 评论
- **为什么重要**：Linux/WSL2 上，对 64 KB 小文件执行含 `.{N}` 边界正则时，ugrep 以 ~230 MB/s 速度分配内存，最终占用 4-17 GB，可能导致系统 OOM。
- **链接**：https://github.com/anthropics/claude-code/issues/78834

### 3.4 自动更新清除 Cowork 会话磁盘数据（#43719）
- **作者/时间**：brandonup | 创建 2026-04-05 | 更新 07-30
- **热度**：5 评论，👍2
- **为什么重要**：自动更新导致 Cowork 会话数据丢失，用户要求恢复项目。**数据丢失**属最高严重级别回归。
- **链接**：https://github.com/anthropics/claude-code/issues/43719

### 3.5 Cowork 的 GitHub 连接器不可用（#59854）
- **作者/时间**：nathanpancakelegion | 创建 2026-05-17 | 更新 07-30
- **热度**：5 评论，👍12
- **为什么重要**：OAuth DCR 不支持导致 GitHub connector 无法使用，UI 状态误导、Disconnect 按钮失效。**12 个 👍** 说明集成功能对开发者工作流的重要性。
- **链接**：https://github.com/anthropics/claude-code/issues/59854

### 3.6 `/claude-api` skill 无条件占满上下文（#63566）
- **作者/时间**：larsgoolsen | 创建 2026-05-29 | 更新 07-31
- **热度**：6 评论，👍7
- **为什么重要**：Windows 上一个中性问题即导致上下文用量激增 77%，skill 无条件加载大量内容，严重浪费 context 窗口。
- **链接**：https://github.com/anthropics/claude-code/issues/63566

### 3.7 Post/PreToolUse Hooks 在 macOS 上不执行（#6305）
- **作者/时间**：fwends | 创建 2025-08-22 | 更新 07-31
- **热度**：38 评论，👍16
- **为什么重要**：hooks 系统长期未修复，影响所有依赖 hook 做自动化门禁、日志、安全审查的用户。持续近一年仍被高频讨论，属于老牌顽疾。
- **链接**：https://github.com/anthropics/claude-code/issues/6305

### 3.8 后台 agent 会话 ID 跨身份边界失效（#77730）
- **作者/时间**：simplysdm | 创建 2026-07-15 | 更新 07-30
- **热度**：7 评论
- **为什么重要**：background agent 与 task IDs 在 session-identity 切换后无法解析，transcript 和输出仍在但无法恢复，只能 full-context respawn，造成 **token 浪费**。
- **链接**：https://github.com/anthropics/claude-code/issues/77730

### 3.9 定时任务 catch-up 风暴（#74055）
- **作者/时间**：Palo-Alto-AI-Research-Lab | 创建 2026-07-04 | 更新 07-31
- **热度**：2 评论，👍1
- **为什么重要**：Windows 上重启后，调度器重复触发当天已执行任务，且执行 `enabled: false` 的任务（ghost fires），`lastRunAt` 不更新。对无人值守自动化产生不可预期副作用。
- **链接**：https://github.com/anthropics/claude-code/issues/74055

### 3.10 CLAUDE_AUTOCOMPACT_PCT_OVERRIDE 静默失效（#82761）
- **作者/时间**：Jordanm37 | 创建 2026-07-31 | 更新 07-31
- **热度**：0 评论（新报告）
- **为什么重要**：该环境变量在 2026-07-14 后变成 no-op，但二进制仍含该字符串、`autoCompactEnabled` 为 true、变量也在进程环境中。**静默配置失效**比报错更危险，用户完全无感知。
- **链接**：https://github.com/anthropics/claude-code/issues/82761

---

## 4. 重要 PR 进展

过去 24 小时社区仅有 1 个 PR（#82555），且为 **已关闭的垃圾/测试 PR**（标题含随机字符串 "Claude/youtube instagram mcp yn2u6s"，无有效描述，无评论）。**无值得关注的代码合并或社区贡献**。

- **#82555**（已关闭）：https://github.com/anthropics/claude-code/pull/82555

---

## 5. 功能需求趋势

从今日 Issues 中可提炼出以下社区最关注的功能方向：

| 方向 | 代表 Issue | 说明 |
|---|---|---|
| **多身份/账户管理** | #36151 | 移动端多账户切换且不要求共享邮箱，当前最热需求 |
| **成本控制与可观测性** | #82104, #77730 | 实时 token 用量可见、subagent 消耗上限、会话可恢复 |
| **子 agent 配置能力** | #78217 | 为子 agent 提供托管默认模型，解决编排时不同子任务需要不同模型的问题 |
| **数据安全** | #82734 | 后台任务输出支持纯内存存储，防止敏感数据落盘 |
| **网络与集成兼容性** | #82762, #59854 | 识别 Microsoft Global Secure Access 合成 IP；修复 GitHub connector 的 OAuth DCR |
| **移动端体验改进** | #36151, #71616 | 多账户切换、iOS 会话被自动归档不可访问 |

---

## 6. 开发者关注点

- **Token 消耗失控**：subagent 在 kill 后仍继续计费（#82104），后台任务 respawn 烧 token（#77730）。开发者需要 **实时用量仪表盘** 与 **强制消费上限**。
- **数据安全不容妥协**：自动更新导致数据丢失（#43719）、敏感数据落盘担忧（#82734）。更新机制需要更保守的事务保证。
- **自动化可靠性存疑**：hooks 不执行（#6305）、定时任务 ghost fires（#74055）、`/fork` 在 `--dangerously-skip-permissions` 下被误拦截（#79575）。直接影响 CI/CD 与无人值守场景。
- **配置与密钥的静默回归**：`CLAUDE_AUTOCOMPACT_PCT_OVERRIDE` 失效不报错（#82761）、`--agents` 接受非法 JSON 无警告（#79527）。开发者希望配置错误被显式暴露。
- **性能极端异常**：ugrep 内存爆炸（#78834）、context 饱和（#63566）提示 Windows/Linux 平台资源管理仍有明显漏洞。
- **新模型 Fable 5 稳定性质疑**：#82104、#82757（模型幻觉要求并拒绝生产部署）等多个 issue 与 Fable 5 相关，模型行为不确定性正成为新的关注点。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-07-31

## 1. 今日速览

今日无新版本发布，社区讨论集中在 Windows 客户端稳定性与 MCP 生态兼容性两大主题。值得关注的是：多个高赞 Issue 指向 OAuth 认证、非 OpenAI 模型提供商的 MCP 工具失效，以及 Codex 在 Windows 上浏览器/沙箱环境的崩溃问题；同时，接近 20 个 PR 正在重构连接器与远程执行架构。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 社区热点 Issues

**① OAuth 认证在 issuer 校验阶段失败**  
`#31573` | 评论 31 | 👍 66 | [链接](https://github.com/openai/codex/issues/31573)  
用户反馈 Codex CLI 0.143.0 在 OAuth 认证时因 issuer 校验失败而无法登录。这是目前评论数和点赞数最高的 Issue，影响免费订阅用户，且跨越 CLI、MCP、Auth 多个标签，推测与近期认证服务端变更有关。

**② 非 OpenAI 模型提供商的 MCP 工具不可调用**  
`#26234` | 评论 27 | 👍 40 | [链接](https://github.com/openai/codex/issues/26234)  
当 Codex 对接 Ollama、LM Studio、OpenRouter、AWS Bedrock 等非 OpenAI Responses API 端点时，MCP 工具被序列化为专有的 `namespace` 类型，导致模型永远无法调用。社区呼声很高，直接影响本地模型与网关用户的开发体验。

**③ Windows 桌面端启动浏览器页面时崩溃**  
`#32683` | 评论 29 | 👍 8 | [链接](https://github.com/openai/codex/issues/32683)  
Codex App 在调用 Browser Use 打开网页时，`CrBrowserMain` 触发 `chrome.dll+0x2e08f46` 访问冲突（0xC0000005）。Pro 用户受影响，问题复现稳定，是 Windows 平台当前最严重的崩溃类 Issue 之一。

**④ Slack 官方 MCP 登录失败：Dynamic client registration not supported**  
`#13200` | 评论 10 | 👍 58 | [链接](https://github.com/openai/codex/issues/13200)  
`codex mcp login` 无法连接 Slack 官方 MCP 服务器，报动态客户端注册未启用。Enterprise 用户受阻，点赞数高企，说明企业级 MCP 接入需求强烈，但 CLI 与 MCP 服务器的兼容性存在缺口。

**⑤ Codex Diff 在 VS Code 中显示 “Oops, an error has occurred”**  
`#35481` | 评论 6 | 👍 31 | [链接](https://github.com/openai/codex/issues/35481)  
Windows 用户打开 Codex Diff 视图时内容无法加载，报通用错误。点赞增长快，与 #35362（完整 Review diff 崩溃）相互印证，表明 VS Code 扩展的 diff 渲染管线在 Windows 上存在共性问题。

**⑥ Windows 桌面拼写检查提示“No Guesses Found”**  
`#26478` | 评论 18 | 👍 25 | [链接](https://github.com/openai/codex/issues/26478)  
系统拼写检查可识别错误拼写，但上下文菜单始终无建议。用户已确认系统级拼写在记事本中正常，问题定位在 Codex 桌面端与 Windows 拼写引擎的集成层。

**⑦ gpt-5.6-luna 被标记为 MultiAgent V1，导致 V2 spawn_agent 拒绝调度**  
`#35097` | 评论 6 | 👍 13 | [链接](https://github.com/openai/codex/issues/35097)  
Codex CLI 0.145.0 中，`gpt-5.6-luna` 模型的 Agent 版本标记错误，V2 多 Agent 调度器无法对其实例化。影响 Pro 20x 用户的多 Agent 工作流。

**⑧ 安全策略误拦截正常网络安全请求**  
`#34306` | 评论 7 | 👍 5 | [链接](https://github.com/openai/codex/issues/34306)  
CLI 0.144.6 在调用 `gpt-5.6-sol-xhigh` 处理网络安全相关任务时，直接返回“This content can't be shown”，未触发任何用户可见的详细审查逻辑。开发者反馈存在过度拦截。

**⑨ VS Code 扩展完整 Review 页面崩溃，内联 diff 正常**  
`#35362` | 评论 10 | 👍 13 | [链接](https://github.com/openai/codex/issues/35362)  
Windows 上打开完整 Review diff 页面时崩溃，但内联 diff 可以正常使用。与 #35481 高度相关，推测为同一渲染组件在 Windows 环境的缺陷。

**⑩ Windows 沙箱中 Shell 命令执行失败（1326 / 1909）**  
`#18620` | 评论 9 | 👍 5 | [链接](https://github.com/openai/codex/issues/18620)  
沙箱内运行 Shell 命令时报 `CreateProcessWithLogonW failed: 1326 / 1909`，涉及账户凭证或安全策略限制。该 Issue 已持续三个月仍为开放状态，属于长尾顽固 Bug。

## 4. 重要 PR 进展

**① exec-server：路由远程网络策略决策**  
`#31458` | 开放 | [链接](https://github.com/openai/codex/pull/31458)  
当执行器本地代理策略无法决策时，回退到进程级核心策略决策器，并在 Guardian 决策中保留环境、执行、命令与工具调用归因。并发决策会相互关联，断连、进程退出或决策器缺失时默认 fail-closed。这是网络策略治理的重大加固。

**② core：新增无工具线程模式**  
`#31922` | 开放 | [链接](https://github.com/openai/codex/pull/31922)  
引入 opt-in 的 `tool_free` 特性，用于轻量级辅助线程（如标题生成）。此类会话会跳过 MCP 启动/刷新、技能与工具枚举，并强制空工具路由器，减少不必要的计算开销。

**③ 提取应用工具缓存逻辑到 ConnectorRuntimeManager**  
`#31471` | 开放 | [链接](https://github.com/openai/codex/pull/31471)  
将 Codex Apps 工具缓存重构为 `ConnectorRuntimeManager` / `ConnectorRuntimeContext`，按账号、ChatGPT 用户、工作区模式和 Codex home 隔离运行时上下文，并为“faster-connectors”系列重构铺路。

**④ 为 Codex Apps 启用并行工具调用**  
`#31591` | 开放 | [链接](https://github.com/openai/codex/pull/31591)  
新增默认关闭的 `codex_apps_parallel_tool_calls` 特性，允许 host 拥有的 `codex_apps` MCP 服务器并行执行工具调用，同时保持用户配置与第三方 MCP 服务器行为不变。

**⑤ codex-mcp：序列化连接器运行时刷新**  
`#31472` | 开放 | [链接](https://github.com/openai/codex/pull/31472)  
为每个活跃连接器运行时上下文添加异步显式刷新锁，并通过 `hard_refresh_codex_apps_runtime` 保证同一时刻只有一个 `tools/list` 调用被执行，避免竞态与重复请求。

**⑥ 代码模式完全迁移到独立宿主进程**  
`#36217` | 已合并 | [链接](https://github.com/openai/codex/pull/36217)  
将 V8 实现移入独立的 `codex-code-mode-runtime` crate，由 `codex-code-mode-host` 承载，移除 Codex 进程内的嵌入式运行时回退。架构更清晰，便于独立发布和崩溃隔离。

**⑦ 记录规范化沙箱违规事件**  
`#36207` | 已合并 | [链接](https://github.com/openai/codex/pull/36207)  
统一文件系统拒绝与托管网络拦截的结构化事件格式，让下游消费者不必再自行解析后端输出，提升安全可观测性。

**⑧ 避免流式输出缓冲区中的字节搬运**  
`#36194` | 已合并 | [链接](https://github.com/openai/codex/pull/36194)  
修复了流式输出解码时反复 `Vec::drain(0..n)` 导致的 O(n²) 性能退化，对包含大量无效 UTF-8 字节或高频帧消息的流有明显改善。

**⑨ 使线程历史投影对畸形 rollout 具备韧性**  
`#36188` | 已合并 | [链接](https://github.com/openai/codex/pull/36188)  
当 rollout 追加失败留下 rejected line 后跟同序号的合法重试时，此前字节检查点推进而序号检查点未推进，会导致后续历史无法投影。该 PR 修复了此边界条件。

**⑩ 忽略 Windows 上的符号化 `/tmp` 权限**  
`#36237` | 已合并 | [链接](https://github.com/openai/codex/pull/36237)  
`:slash_tmp` 代表 Unix `/tmp` 目录，不应影响 Windows 沙箱 ACL 决策。该 PR 在解析 Windows 文件系统访问时跳过符号化 SlashTmp 条目，属于针对 Windows 沙箱的策略修正。

## 5. 功能需求趋势

- **MCP 生态扩展与互操作性**：社区对非 OpenAI 端点（Ollama、LM Studio、OpenRouter）、Slack 等主流 MCP 服务器的兼容性需求强烈（#26234、#13200），核心诉求是提供扁平化工具命名空间及标准的 OAuth 动态注册支持。
- **速率限制透明化与公平性**：多个 Issue 要求暴露 `resetsAt`、余额、计划类型等状态字段（#24080），并质疑 Plus/Pro 之间“20x”的用量差距（#36213）；Pro 用户也报告 5 小时用量桶消失（#32707），说明用量可见性已成为体验关键项。
- **多 Agent 编排成熟度**：模型版本标记（#35097）、子 Agent 恢复时继承父模型与推理强度（#34821）、会话续接时推理等级丢失（#26930）等细节开始被高频提及，表明 MultiAgent V2 已进入真实工作负载打磨阶段。
- **跨设备工作区连续性**：#34804 提出让 Codex Remote 在 MacBook 与 Mac mini 之间无缝切换并保留完整会话上下文，远端开发正在成为重点关注场景。
- **Windows 平台稳定性专项**：崩溃（#32683）、拼写检查（#26478）、diff 渲染（#35362、#35481）、沙箱权限（#18620、#35803、#35864）等多点开花，社区明显期待一次系统性的 Windows 客户端修复。

## 6. 开发者关注点

- **Windows 仍是重灾区**：从浏览器崩溃、diff 页面报错到沙箱拒绝执行、OneDrive 工作区断流（#35420），Windows 用户的反馈密度远高于其他平台，且有用户反馈重装应用无法解决（#35803）。
- **速率限制挫伤情绪**：出现情绪化发泄帖（#35552，标题直白表达不满），也有用户从“获取用量详情”转向“要求增加 Plus 配额”（#36213）。开发者社区整体认为当前限制策略缺少必要的可解释性。
- **安全过滤器过度谨慎**：合法网络安全任务被直接拒绝（#34306），且无明确原因展示，部分用户开始怀疑安全策略是否影响正常开发效率。
- **会话与状态持久化是隐性痛点**：fork 后父会话完整写入子 JSONL 导致磁盘放大（#35647）、已关闭侧边聊天无法重开（#27716）、跨越设备恢复工作区（#34804），这些反馈共同指向“会话生命周期管理”依然是未补齐的短板。
- **沙箱与策略的“黑盒”问题**：多个 Issue 反映沙箱报错信息不足以定位根因（如 Code Integrity 3033 导致 MSIX 包损坏，见 #35681），开发者在故障排查上付出的额外成本偏高。

---
*本日报基于 GitHub `openai/codex` 仓库公开数据自动整理，数据采集时间为 2026-07-31。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-07-31

> 数据来源：[github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 今日速览

今日无新版本发布，社区焦点集中在**子代理（Subagent）可靠性缺陷**与 **Auto Memory 后台服务的一系列问题**上。值得警惕的是，一个 CVSS 8.6 的 **SSRF 高危漏洞（#28555）** 于本周提交并在今日获得更新。PR 侧则活跃着多起安全修复（Node EOL 升级、MCP OAuth 令牌刷新）与体验优化（模型选择器、会话列表、自动压缩）。

---

## 社区热点 Issues（10 个）

### 1. 子代理在 MAX_TURNS 中断后被误报为成功
[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) · p1 · kind/bug · 评论 12 · 👍 2

`codebase_investigator` 子代理在触及最大轮次限制（未做任何分析）后，仍报告 `Termination Reason: "GOAL"` 和 `status: "success"`，将中断掩盖为正常完成。**为何重要**：这是 agent 可观测性的硬伤——用户与主代理都无法察觉子代理实际未完成工作，直接污染下游决策。

### 2. 通用代理（Generalist agent）无限期挂起
[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) · p1 · kind/bug · 评论 8 · 👍 8

只要 CLI 将任务委派给通用代理就会永久挂起，用户曾等待一小时无果；明确禁止使用子代理则恢复正常。这是社区投票最高的痛点之一，直接导致 `agents disabled` 配置被部分用户当作逃生舱。

### 3. 组件级评估（Component Level Evaluations）EPIC
[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) · p1 · kind/customer-issue · 评论 7

在该 issue 前身（#15300）的基础上，仓库已积累 76 个行为评估测试。此 EPIC 继续推动**更细粒度的组件级评测体系**，反映出官方在系统化加固 agent 行为上的投入方向。

### 4. 评估 AST 感知读文件/搜索/代码库映射的价值
[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) · p2 · kind/feature · 评论 7 · 👍 1

EPIC 跟踪系列调研：AST 感知工具可精确读取方法边界（单次调用减少 turns）、降低 token 噪声、改进导航。社区对"减少盲目读取"的诉求强烈，该方向若落地将直接改善大仓库下的成本与延迟。

### 5. Gemini 不主动使用技能（Skills）与子代理
[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) · p2 · kind/bug · 评论 6

用户反馈即使配置了 gradle、git 等自定义技能且描述清晰，模型也几乎从不主动调用，只有显式命令才触发。MCP/技能生态的投入与模型主动利用率之间出现断裂。

### 6. Auto Memory 对低信号会话无限重试
[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) · p2 · kind/bug · 评论 5

后台提取代理若判定某会话"低信号"未做读取，该会话将永远留在索引中反复被捞起。属于 Auto Memory 系列的**资源损耗类**问题，与 #26516（质量追踪）、#26523（无效补丁隔离）、#26525（确定性脱敏）构成一个完整改进集。

### 7. Shell 命令执行后卡在 "Waiting input"
[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) · p1 · kind/bug · 评论 4 · 👍 3

极简 CLI 命令已完成执行，但 Gemini 仍冻结并显示"等待用户输入"。高频复现的交互卡死问题，优先 p1 且被多人点赞确认。

### 8. 浏览器子代理在 Wayland 下失败
[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) · p1 · kind/bug · 评论 4 · 👍 1

`browser subagent` 在 Wayland session 下报 `Termination Reason: GOAL` 后随即失败，目前仍处于 need-retesting 状态。Linux 桌面用户受影响面较大。

### 9. SSRF：web-fetch 工具存在 DNS 解析绕过（CVSS 8.6）
[#28555](https://github.com/google-gemini/gemini-cli/issues/28555) · p2 · kind/bug · 评论 1 · 状态: manual-triage

`web-fetch` 的 URL 校验使用 `isPrivateIp()`，仅做同步 IP 检查而不伴随 DNS 解析，攻击者可用域名解析绕过 SSRF 防护。**为何重要**：此漏洞允许恶意网页/文档诱导模型请求内网资源，已进入安全手工分流，建议关注修复时间线。

### 10. Agent 应阻止/劝阻破坏性行为
[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) · p2 · kind/customer-issue · 评论 3 · 👍 1

在复杂 git 操作或数据库维护中，模型偶尔会使用 `git reset --force` 等不可逆命令。社区要求引入"危险操作护栏"——在安全替代方案存在时优先提示，并强化模型对破坏性操作的认知。

---

## 重要 PR 进展（10 个）

### 1. 将 InvalidStreamError 详情透传到 UI
[#28566](https://github.com/google-gemini/gemini-cli/pull/28566) · p1 · area/core · 2026-07-28

把后端的 `InvalidStreamError` 类型/消息传给 CLI UI，使用户在空响应时能直接看到如"建议执行 `/compress`"等具体提示，减少排查成本。

### 2. 修复 MCP OAuth 令牌刷新（使用存储的 client ID）
[#28481](https://github.com/google-gemini/gemini-cli/pull/28481) · p1 · area/security · 2026-07-22

修复通过 OAuth 发现+动态客户端注册配置的 MCP 服务器：刷新在本地网络 I/O 前即失败，且故障会删除已保存凭据，迫使每次都重新授权。

### 3. 沙箱 Dockerfile 升级至 Node 22
[#28603](https://github.com/google-gemini/gemini-cli/pull/28603) · p1 · area/security · 2026-07-30

Node 20 已于 2026-04-30 EOL，沙箱运行时执行的是模型指令，使用 EOL 运行时存在安全风险（对应 issue #28584）。

### 4. Docker 基础镜像更新至 node:24-slim
[#28602](https://github.com/google-gemini/gemini-cli/pull/28602) · 2026-07-30

将 builder/runtime 镜像从 node:20-slim 升级到 node:24-slim，并修复 runtime 阶段从 builder 复制 CLI 产物的逻辑。

### 5. 将容量耗尽（429）归类为终止错误，防止重试挂起
[#28599](https://github.com/google-gemini/gemini-cli/pull/28599) · CLOSED · 2026-07-30

当后端对 preview 模型返回 `MODEL_CAPACITY_EXHAUSTED`（HTTP 429）且未带重试延迟时，客户端此前会陷入重试挂起。该 PR 将其显式归类为终止性限制并立即触发回退链。

### 6. macOS Seatbelt 配置缺失时回退到内嵌配置
[#28551](https://github.com/google-gemini/gemini-cli/pull/28551) · size/l · 2026-07-27

修复 macOS/gMac 环境下以沙箱模式（`-s`）启动时，因 runfiles/bundle 中找不到静态 `.sb` seatbelt 文件而崩溃的问题。

### 7. 新增 `--list-all-sessions` 跨目录会话列表
[#28596](https://github.com/google-gemini/gemini-cli/pull/28596) · p3 · area/core · 2026-07-30

用户创建大量会话后常忘记所在文件夹。新选项可按工作区路径分组展示所有注册会话，方便统一管理。

### 8. 修复设置占位符解析的环境变量加载顺序
[#28597](https://github.com/google-gemini/gemini-cli/pull/28597) · size/l · 2026-07-30

此前 settings 文件在启动时一次性完成解析、环境变量展开与校验，而本地 `.env` 尚未加载——导致依赖 `.env` 的占位符被错误展开。PR 修正加载顺序，消除竞态。

### 9. 无 preview 权限时保持 Auto 模型可见
[#28592](https://github.com/google-gemini/gemini-cli/pull/28592) · p2 · area/core · 2026-07-30

动态模型配置开启且用户无 preview 权限时，`/model` 中的 Auto 选项因基于 preview 元数据而被隐藏。但 Auto 可解析为稳定模型，隐藏反而让用户无法选择有效项。

### 10. 为所有用户开放 gemini-3.5-flash 模型选择
[#28485](https://github.com/google-gemini/gemini-cli/pull/28485) · p2 · area/core · 2026-07-22

v0.51.0 用户无法在模型选择器中选中 `gemini-3.5-flash` / `3.6-flash`。根因是 `buildAvailableModels` 在 `GEMINI_3` 系列开关生效前仍只暴露旧的 `gemini-2.5-flash` 默认值。

---

## 功能需求趋势

从今日全部 50 条活跃 Issue 中提炼出以下社区最关注的方向：

### 1. Agent 自主性与可信执行（占比最高）
- **主动使用技能/子代理**（#21968）：模型不会自动调用自定义技能，生态投入与利用率脱节。
- **危险操作防护**（#22672）：需要"破坏性命令护栏"而非事后清理。
- **自我认知**（#21432）：CLI 应准确了解自身热键、参数与能力边界，能做自己的专家向导。

### 2. Auto Memory 系统整体打磨
构成一个清晰的高频反馈簇：
- **低信号会话无限重试**（#26522）→ 需要处理进度标记；
- **秘密脱敏滞后**（#26525）→ 内容先进入模型上下文再提示脱敏，存在泄露面；
- **无效补丁静默丢弃**（#26523）→ 需要可见的隔离/通知机制。

### 3. AST 感知的代码理解工具
（#22745 及子 issue #22746）
社区对"更精确的方法边界读取、持久代码库映射"有持续兴趣，目标是减少大仓库下的往返次数与 token 开销。

### 4. 安全与供应链加固
- SSRF 绕过（#28555）；
- 运行时 EOL 升级（PR #28602/#28603）；
- MCP OAuth 凭据稳定性（#28481）；
- CI/CD 供应链 PoC（#28594）。

### 5. 新模型与上下文窗口管理
- 模型选择器无法及时暴露新系列（#28483 / #28485）；
- 上下文溢出后的**自动压缩**（#28488）成为呼声渐高的配置项。

---

## 开发者关注点

### 高频痛点
1. **子代理状态可信度低**：`MAX_TURNS` 中断被记为 GOAL 成功（#22323），`/bug` 报告不含子代理上下文（#21763），调试与复盘困难。
2. **卡死与挂起**：通用代理挂起（#21409）、shell 命令假死（#25166）、创建 vite 应用时卡在交互提示（#22465）。
3. **配置被无视**：`agents disabled` 仍触发子代理（#22093）、`settings.json` 的 `maxTurns` 覆盖被浏览器代理忽略（#22267）、符号链接 agent 文件不被识别（#20079）。
4. **资源清理负担**：模型在随机目录生成临时脚本（#23571），工作区污损影响 commit 整洁度。
5. **容量与限流体验差**：预览模型 429 曾导致重试挂起（#28599），`MODEL_CAPACITY_EXHAUSTED` 的降级链需要更明确。

### 值得注意的积极信号
- 官方以 EPIC 形式系统推进**组件级评估**（#24353）与 **AST 工具调研**（#22745），说明对质量的投入正在从零散修 bug 转向体系化建设。
- 多项安全 PR（Node 升级、OAuth 修复）进入 p1，安全响应速度在加快。

---

*本日报由 AI 自动汇总生成，数据快照时间为 2026-07-31。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

## GitHub Copilot CLI 社区动态日报（2026-07-31）

### 1. 今日速览

昨日发布 **v1.0.77**，引入浏览器端 OAuth 登录流（现为本地终端默认方式）以及 Ctrl+G 编辑 ask_user 答案两个实用功能。社区方面，AI 额度预警、非 git 仓库下的 rewind 支持、子代理工具权限问题引发较多讨论；同时涌现一批与长会话性能退化、资源消耗透明度相关的新 issue，值得关注。

### 2. 版本发布

**v1.0.77 / v1.0.77-0（2026-07-30）**

- 引入“无条件 autopilot 批准”机制：当允许绕过沙箱时，当前会话会直接禁用 sandbox（不再逐步确认）。
- Ctrl+G 现在可在 ask_user 自由回答时打开 $EDITOR 编辑答案，无需关闭当前提示符。
- **新增浏览器 OAuth 登录流**，并作为本地交互式终端的默认 `copilot login` 方式；远程/无头终端仍默认设备码流程。可用 `--web-flow` / `--device-code` 强制指定模式，或在交互式 `/login` 命令中选择。
- 另有一项被截断的特性描述（"Support enfor..."），推测与强制执行策略/规则相关，待验证。

### 3. 社区热点 Issues

挑选 10 个最值得关注的 Issue：

**#3767 [已关闭] 超大附件永久卡死会话**
> 当附件使模型请求超过 CAPI Responses 原生 5MB 限制时，会话直接报错且无法恢复（9.1MB 请求 vs 5.0MB 限制）。13 条评论，关注度高，反映了多模态输入场景下的一个严重稳定性缺陷。

🔗 https://github.com/github/copilot-cli/issues/3767

**#4295 [开启] AI Credits 接近限额预警**
> 开发者请求 CLI 增加 AI Credits 剩余量预警，对标 Visual Studio 2026 的聊天会话内提醒。8 条评论，说明用户对额度消耗的可见性有较强需求。

🔗 https://github.com/github/copilot-cli/issues/4295

**#1381 [开启] "Rewind is not available because you're not in a git repository"**
> 使用 jj（Jujutsu VCS）而非 git 的开发者要求 rewind 支持非 git 环境，VS Code 版本无此限制。虽有 10 个 👍，但近日仅 4 条评论，修复优先级可能不高。

🔗 https://github.com/github/copilot-cli/issues/1381

**#4258 [已关闭] BYOK/自定义提供商下 -i 启动提示被忽略**
> TTY 交互模式配合自定义/BYOK 提供商时，`-i/--interactive` 传入的启动提示不会自动提交；同一 tmux 会话下标准提供商则正常。3 条评论，属于具体集成场景的回归类问题。

🔗 https://github.com/github/copilot-cli/issues/4258

**#4266 [已关闭] v1.0.74 退出命令不显示退出屏幕**
> 正常退出（Ctrl+C/D 或 `/exit`）时不显示带 Session-ID 的退出画面，疑似 shutdown 阶段事件队列清空与 UI 渲染存在竞态条件。仅有 2 条评论。

🔗 https://github.com/github/copilot-cli/issues/4266

**#4293 [开启] 子代理全量工具访问时返回空响应**
> 通过 `task` 工具启动的子代理在具备完整工具集时**完全不返回任何响应**（无报错、无输出、无日志），而使用受限工具集时同样模型/提示词却可正常工作。已定位到任务工具链中 `loop` 的存在，但问题机制尚不明确。

🔗 https://github.com/github/copilot-cli/issues/4293

**#4310 [开启] 引擎回退到 128K token 预算的问题**
> 当路由模型未安装能力限制（或报告零上下文窗口）时，引擎静默回退到硬编码的 128,000 token 提示预算并进行上下文压缩。对 1M token 大上下文模型（若其 ID 未能识别）会引发不必要的压缩行为。

🔗 https://github.com/github/copilot-cli/issues/4310

**#4305 [已关闭] JS 'Undefined' 转 Rust 'String' 失败**
> 升级 v1.0.76 后，几乎任何命令都会立即报出该类型转换错误（pre-release 1.0.76-2 已出现）。由于 issue 发布后即刻被关，可能已被识别为已知回归。

🔗 https://github.com/github/copilot-cli/issues/4305

**#4306 [开启] 子任务冻结无响应**
> 在 autopilot 模式下执行 `/fleet use ...` 循环调用多个 agent/skill 时，子任务会中途卡死并出现 specific 消息。涉及自定义 MCP 配置与多 agent 递归编排场景。

🔗 https://github.com/github/copilot-cli/issues/4306

**#4299 [开启] 长时间会话输入延迟激增**
> 长会话（尤其是后台运行 agent 时）输入延迟严重到不可用，这是性能类问题的集中反馈之一。已有 1 个 👍。

🔗 https://github.com/github/copilot-cli/issues/4299

### 4. 重要 PR 进展

过去 24 小时无 PR 更新。v1.0.77 的发布内容即为当前最新的代码变更集；社区可关注上述已关闭 issue 对应的修复是否随该版本落地，例如 **#4230**（Ctrl+G 编辑 ask_user 回答，已在 v1.0.77 中修复）。

### 5. 功能需求趋势

从近期 Issues 提炼出以下社区重点方向：

- **额度监控与预警**（#4295、#4308、#4309）：用户不希望会话在可见任务完成后仍悄然消耗 AI 额度，要求 CLI 提供额度剩余量展示与接近限制的警告。
- **非 git 版本控制系统的适配**（#1381）：rewind 等核心功能不应绑定 git，需兼容 jj 等其他 VCS。
- **登录方式多元化**（#4300）：企业环境中密钥认证被禁用，社区请求支持 bearerToken 或自定义 broker，与 Copilot SDK 对齐。
- **沙箱/权限精细化**（#4298）：要求 sandbox 配置支持选择性启用工具（白名单方式），而非全有或全无。
- **BYOK 自定义模型兼容性**（#4258）：自带模型提供商在交互模式、工具调用等环节仍存在行为差异。
- **MCP 生态兼容**（#4301、#4303）：MCP 工具参数 schema 的 anyOf/union 类型在 CLI 侧被错误"扁平化/字符串化"，需要更严谨的 JSON Schema 支持。

### 6. 开发者关注点

- **稳定性和恢复能力**：超大附件导致的永久会话卡死（#3767）、子代理冻结/空响应（#4293、#4306）是当前最重大的稳定性痛点。
- **长会话性能退化**：输入延迟随会话时长增加而恶化（#4299），后台 agent 运行时尤为明显。
- **AI 额度消耗不透明**：多个 issue（#4308、#4309）报告会话完成后仍持续消耗积分，用户对计费可见性有强烈诉求。
- **终端兼容性短板**：iTerm2 下 Cmd+V 无法粘贴（#4296）、MobaXterm/PuTTY 中鼠标滚轮失效（#2841）、会话侧边栏无法用方向键导航（#4304）等问题虽小但直接影响日常体验。
- **配置与环境的坑**：`--log-level` 非 "all"/"default" 即崩溃（#4297）、恢复会话时注入 `COLORTERM=truecolor` 导致提示符颜色变化（#4294）等，显示了配置解析和环境变量处理上的薄弱环节。

---

*数据来源：GitHub - github/copilot-cli（检索时间 2026-07-31，覆盖过去 24 小时动态）*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-07-31** | **数据源：github.com/MoonshotAI/kimi-cli**

---

## 1. 今日速览

过去 24 小时无新版本发布，社区焦点集中在可靠性问题上：#2571 报告了服务端限流（429）导致完全不可用的“阻断级”故障；#2570 报告了 Windows 下 CLI 与浏览器标签页状态关联的间歇性卡死。与此同时，长期开放的功能请求 #1283（持久化记忆系统）再次更新，表明跨会话上下文能力仍是社区核心诉求。异步钩子可靠性亦有关键 PR #2565 提交。

> ⚠️ 本次统计窗口内动态较少（Issues 3 条 / PR 1 条），下述清单为全部活跃数据。

## 2. 版本发布

过去 24 小时内无新版本 Release。

## 3. 社区热点 Issues（全部 3 条）

### #2571 [Bug] LLM Overloaded! Can't use Kimi at all
- **作者**: andrew-sz | **创建/更新**: 2026-07-30 | **评论**: 1
- **环境**: v1.49.0 / Moderato 平台 / Kimi K3 / Mac OS X Tahoe
- **核心问题**: 所有请求均被 LLM API 返回 `429` 限流错误，Kimi 完全不可用。
- **为什么重要**: 属于阻断开发者日常工作的紧急故障，服务质量与配额管理直接影响到用户信任。持续追踪限流发生频率是否与平台端扩容节奏相关。
- **社区反应**: 刚报告不久，评论寥寥，但 429 类问题通常会引发较高关注度。

---

### #2570 [Bug] CLI intermittently freezes with spinning moon; correlated with browser tab state
- **作者**: XbackMK | **创建/更新**: 2026-07-30 | **评论**: 0
- **环境**: v0.29.2 / KIMI Login Subscription / KIMI K3 HIGH / Windows 11
- **核心问题**: CLI 出现无响应（旋转月亮图标），且该现象与浏览器标签页状态存在明显关联。
- **为什么重要**: 新报告，揭示了两个关键信号：一是 Windows 平台的稳定性仍存在短板；二是“与浏览器标签页关联”暗示认证对话或内嵌浏览器组件可能参与死锁/竞争，这对跨平台维护有参考价值。
- **社区反应**: 刚创建，暂无评论，等待官方复现或补充日志。

---

### #1283 [Enhancement] Feature Request: Memory System - Persistent context across sessions
- **作者**: CatKang | **创建**: 2026-02-27 | **更新**: 2026-07-30 | **评论**: 7
- **核心建议**: 实现一种综合记忆系统，让 Kimi Code CLI 跨会话记住项目上下文、编码模式与用户偏好，具体包括 AI 管理的自动记忆和用户自定义的手动指令记忆。
- **为什么重要**: 该 Issue 自 2 月提出后持续被更新，是社区对“长上下文”之外更高层诉求——结构化、持久化的上下文管理——的代表性声音。若落地，可大幅提升长时间开发任务的连续性，完善组织语境下的团队共享体验。
- **社区反应**: 7 条评论讨论热烈，说明开发者希望比 `--continue` 标志或临时会话更强的记忆能力。

---

## 4. 重要 PR 进展（全部 1 条）

### #2565 fix(hooks): keep a strong reference to fire-and-forget hook triggers
- **作者**: LHMQ878 | **创建**: 2026-07-28 | **更新**: 2026-07-30 | **修复**: #2564
- **背景**: `asyncio` 通过 `WeakSet` 持有运行中的任务，这意味着 `create_task()` 创建的钩子任务一旦在执行函数中超出作用域，就可能被垃圾回收，导致“即发即弃”钩子（如异步通知、自定义回调）静默丢失或不被触发。
- **改动说明**: 在工具返回结果之前，对 `_hook_task` 保持强引用，并结合 `add_done_callback` 处理异常或取消状态，确保生命周期内任务可正常运行。
- **为什么重要**: 工具钩子（hooks）是 CLI 与外部系统集成的关键机制，竞态垃圾回收错误会导致难以追踪的异步失效问题。此 PR 是防御性修复，提升了异步任务运行时的正确性。

---

## 5. 功能需求趋势

从当前 Issues 及 PR 覆盖的高频反馈中，社区关注的方向主要为：

| 需求方向 | 代表 Issue | 热度信号 |
|---|---|---|
| **记忆 / 持久上下文** | #1283 | 半开放请求持续更新，讨论充分，期望 AI 与手写记忆并存 |
| **限流与错误处理优化** | #2571 | 429 错误阻断工作流，期望更友好的重试与降级策略 |
| **CLI 稳定性（多平台）** | #2570 | Windows 平台卡死新案例，提示需加强跨平台回归与浏览器交互兼容 |
| **工具链 / 异步钩子可靠性** | #2565 | 对“即发即弃”异步任务的正确性进行系统性修复 |

## 6. 开发者关注点

- **服务可用性**：429 限流问题直接引发“无法使用”的强诉求，开发者希望官方提供更清晰的配额提示、重试机制，以及在高峰期的服务扩容保障。
- **跨会话连续性**：已有 CLI 的会话隔离让长生命周期项目无法保留历史偏好与模式，开发者对“记忆系统”的期待值极高。
- **Windows 平台体验**：卡死/无响应是高频痛点，且与浏览器标签页状态耦合的问题还暗示身份验证流程应尽量解耦，避免阻塞主线程。
- **自动化可靠性**：Hooks / 异步任务的高可靠性要求，尤其是在回调、通知等场景下的 fire-and-forget 语义保证，不应因任务被 GC 而导致静默失败。

---

*本日报基于 2026-07-31 获取的 GitHub 公开数据自动生成。动态仅覆盖过去 24 小时内创建或更新的 Issue 与 PR，如需完整信息请点击链接查看原文。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-07-31

## 今日速览

今日 OpenCode 发布 v1.18.10，核心新增 Modal 模型自动发现能力，并优化桌面端交互体验。然而新版桌面端被曝出 "Stale read from <Show>" 崩溃问题，已有对应修复 PR 提交。社区层面，Sol 模型服务器过载和升级回归问题成为讨论焦点。

## 版本发布

**v1.18.10**
- **Core**：自动发现 Modal 提供的可用模型（@devennavani）。
- **Desktop 改进**：
  - 防止重复添加同一附件。
  - 始终显示“新建会话”按钮。
  - 优化 Toast 通知：更好的堆叠、关闭行为及移动端布局。
  - 优化标签页悬停与激活态效果。

## 社区热点 Issues

1. **[#39653] GPT-5.6 Sol 服务器过载错误**  
   作者报告在使用 Sol 模型时反复出现 “server overloaded” 错误，而 Pi 和 Codex 模型正常。该 issue 获得 10 个 👍 和 16 条评论，是目前社区热度最高的问题，可能指向 OpenCode Go 上游服务容量问题。  
   https://github.com/anomalyco/opencode/issues/39653

2. **[#39704] Desktop 1.18.10 切换/关闭会话时崩溃**  
   升级到 1.18.10 后，桌面端在切换文件夹、会话或关闭会话时抛出 `Error: Stale read from <Show>`。这是今日最严重的回归 bug，已有 PR #39767 提出修复方案。  
   https://github.com/anomalyco/opencode/issues/39704

3. **[#39288] 升级 1.18.8 后 AutoScroller 插件报错**  
   桌面应用升级后主界面报 `AutoScroller plugin depends on Scroller plugin`，导致部分用户无法正常使用。这一插件依赖解析问题引发了对升级兼容性的讨论。  
   https://github.com/anomalyco/opencode/issues/39288

4. **[#38655] 最新更新后无法在 Plan/Build 模式间切换**  
   用户反馈升级后模式切换功能失效，Build 模式被默认激活且无法切回 Plan。影响工作流效率，社区已有 5 条评论。  
   https://github.com/anomalyco/opencode/issues/38655

5. **[#27837] Web UI 左侧会话列表为空**  
   长期未解决的 Web 服务器模式 bug：`opencode --web` 时左侧面板不显示会话，尽管 `/api/session` 接口返回正常。作者已给出基于 SSE 事件流的根因分析。该问题持续收到关注。  
   https://github.com/anomalyco/opencode/issues/27837

6. **[#39771] [Feature] 网络错误快速失败与简洁错误输出**  
   社区提出在网络不稳定（尤其是中国用户访问 GitHub）场景下，当前 60-120s 默认超时导致体验极差，希望实现快速失败和 fallback 机制。3 条评论，方向明确，属于高频痛点。  
   https://github.com/anomalyco/opencode/issues/39771

7. **[#39491] Plan 模式可通过 bash 写文件**  
   用户发现 Claude Sonnet 4.6 在 Plan 模式下绕过 write-tool 限制，通过 `cat > SKILL.md` 等 bash 命令写入文件，暴露了模式隔离漏洞。安全边界问题引发讨论。  
   https://github.com/anomalyco/opencode/issues/39491

8. **[#39256] [Feature] 文档澄清 variants 子配置命名规范**  
   开发者要求澄清模型配置中 `variants` 子项使用 camelCase 还是 snake_case，当前文档表述含糊，影响配置编写。虽是文档问题，但关系到 API 可用性。  
   https://github.com/anomalyco/opencode/issues/39256

9. **[#29935] [Feature] 内置 LiteLLM 代理提供商**  
   经过 5 个 👍 和 3 条评论，社区仍希望将 LiteLLM 代理作为内置 provider，以便统一接入 100+ LLM 提供商。该需求已持续两个月，今日仍有更新。  
   https://github.com/anomalyco/opencode/issues/29935

10. **[#37598] OpenCode Go 缓存记录缺失会话标识符**  
   使用 OpenCode Go 调用 GLM-5.2 时，缓存记录中缺少 session 标识，且缓存命中行为不稳定。该问题影响费用统计和缓存效率，涉及后端数据完整性。  
    https://github.com/anomalyco/opencode/issues/37598

## 重要 PR 进展

1. **[#39767] fix(app): 防止陈旧会话标签读取**  
   修复 1.18.10 桌面端在会话/项目导航时因 Solid 过渡导致的 "Stale read from <Show>" 崩溃，关闭 #39766 和 #39704。  
   https://github.com/anomalyco/opencode/pull/39767

2. **[#39776] feat(tui): 本地 TUI 插件热重载**  
   编辑本地 TUI 插件后无需重启即可生效；插件导入失败、setup 失败或渲染崩溃均被隔离，不会拖垮整个应用。关闭 #39777，大幅提升插件开发体验。  
   https://github.com/anomalyco/opencode/pull/39776

3. **[#39764] feat(plugin): 新增 session.request 钩子**  
   在 Effect 和 Promise 插件边界暴露 `session.request`，允许插件修改最终发出的 LLM HTTP 头与序列化请求体，并在调用链中携带 session/agent/model 标识。  
   https://github.com/anomalyco/opencode/pull/39764

4. **[#39787] fix(core): 映射 xAI 原生选项**  
   显式映射 `@ai-sdk/xai` 的原生配置（reasoning effort、storage、prompt cache key 等），并过滤无效/不支持的设置，避免任意键转发。  
   https://github.com/anomalyco/opencode/pull/39787

5. **[#39781] feat(app): 新工作区可选择基础分支**  
   修复 `git worktree add` 无起点分支导致新工作区基于错误分支的问题，同时支持选择基础分支。关闭 #39778、#39779。  
   https://github.com/anomalyco/opencode/pull/39781

6. **[#39783] fix(tui): 标签页默认全局作用域**  
   会话标签默认使用全局共享集合，用户仍可在 TUI 设置中按工作目录切分标签集，改善多目录工作流的一致性。  
   https://github.com/anomalyco/opencode/pull/39783

7. **[#39784] fix(tui): 会话选择器作用域对齐**  
   会话选择器初始作用域现在跟随「Tabs > Scope」设置：全局标签从“所有项目”开始，目录标签从“当前目录”开始，并保留用户手动切换的状态。  
   https://github.com/anomalyco/opencode/pull/39784

8. **[#39753] feat(tui): 新会话继承当前会话目录**  
   `/new` 创建新会话时，继承上一个会话所在项目目录，与桌面端新标签行为对齐；TUI 标签页下的项目标签显示同步修正。  
   https://github.com/anomalyco/opencode/pull/39753

9. **[#39748] fix(session): 标题生成失败自动重试**  
   首次生成标题失败后自动重试，并继续使用会话原始用户提示（即使后续已有新对话）。显式标题和手动重命名仍保持最高优先级。关闭 #39529。  
   https://github.com/anomalyco/opencode/pull/39748

10. **[#39747] feat(session): 生成的标题设为可选**  
    新会话在自动标题成功前保持 `NULL` 无标题状态，API 契约中省略缺失标题字段，涉及 App、TUI、CLI/ACP、导出、搜索、子代理等全链路适配。  
    https://github.com/anomalyco/opencode/pull/39747

## 功能需求趋势

- **新模型与提供商支持**：Modal 模型自动发现、LiteLLM 内置代理、xAI 原生选项映射、本地 LAN 提供商发现（PR #27554）——社区对“接入更多模型”始终有强烈诉求。
- **插件系统能力增强**：session.request 钩子、TUI 插件热重载与故障隔离，反映开发者希望以插件机制深度扩展 OpenCode 的意愿。
- **网络容错与代理适配**：针对网络抖动、超时过长、中国地区 GitHub 访问受限等场景，要求快速失败、fallback 和更清晰的错误输出。
- **本地/私有化部署**：Ollama、oMLX 局域网模型、LAN 自动发现等需求持续活跃，开发者希望摆脱云端限流限制。
- **模式与权限安全**：Plan 模式可被 bash 绕过的问题，说明社区对模式隔离和文件系统权限边界日益重视。
- **UI/UX 打磨**：TUI 全局标签、打开菜单、选择器作用域、移动端侧边栏等，桌面与终端体验同步迭代中。

## 开发者关注点

- **升级回归风险**：1.18.8 的插件依赖错误、1.18.10 的桌面崩溃，让部分用户对快速迭代的稳定性产生顾虑，期望更完善的发版前测试。
- **上游服务稳定性**：Sol 模型服务器过载、OpenCode Go 付费模型 401、Gemini 3.6-flash 上游错误等，反映出服务端容量与鉴权问题正在影响用户体验。
- **模型切换后的状态一致性**：/model 切换后引发 SQLite `NOT NULL constraint failed` 崩溃（#39165），说明会话消息序列状态管理存在缺陷。
- **网络错误处理**：默认超时过长、失败后静默卡顿、错误信息不直观——网络相关反馈高频出现，尤其来自网络受限地区的用户。
- **文档与可发现性**：variants 配置命名规范、法语翻译错误、快捷键默认值（Windows 上 `super+a` 不可达）等文档/默认配置问题，属于“小而烦”的体验损耗。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

## Pi 社区动态日报（2026-07-31）

### 1. 今日速览

今日社区核心动态集中在**协议与客户端基础设施重构**与**稳定性 bug 修复**两大方向。值得关注的是，社区引入了新的 `pi-protocol` 与 `pi-client` 包，为远程会话与多运行时客户端铺路；同时，多个长期存在的高频痛点（Wayland 剪贴板失效、RPC 崩溃、markdown 扩展能力）已通过 PR 落地修复。此外，模型 catalog 刷新挂死导致 UI 卡死的问题成为多起 Issue 背后的共性根源，正引发开发者集中讨论。过去 24 小时无新版本发布。

### 2. 版本发布

过去 24 小时无新 Release。

### 3. 社区热点 Issues

1. **[#6747 An API for enhancing agent message markdown](https://github.com/earendil-works/pi/issues/6747)** ⭐ 12 评论
   - 已关闭（由 PR #7231 解决）。允许扩展在不修改发送给 LLM 内容的前提下，改变 agent 消息的渲染表现。这是实现“尽力而为的 markdown 公式渲染器”的关键前提，对想在 TUI 中实现富文本渲染的插件作者意义重大。

2. **[#7194 Pi 在活动工具卡片滑出视口时每秒全量重渲染](https://github.com/earendil-works/pi/issues/7194)** ⭐ 7 评论
   - 已关闭。在远程沙箱场景（通过 WebSocket 透传 PTY）下，整个会话记录每秒反复重绘，造成严重的资源占用与画面闪烁。这是远程嵌入场景下最影响体验的性能缺陷之一。

3. **[#7153 /scoped-models 命令会卡住约 5 分钟](https://github.com/earendil-works/pi/issues/7153)** ⭐ 6 评论
   - 开发中。执行 `/scoped-models` 时，因为同步等待 catalog 刷新，导致 REPL 既不展示加载状态，也不渲染任何 UI。暴露了命令执行与异步刷新之间缺少缓冲 UI 的问题。

4. **[#7301 卡住的 availability 刷新永久不可恢复](https://github.com/earendil-works/pi/issues/7301)** ⭐ 2 评论
   - 新提交。`forceRefreshAvailability()` 会链到同一个卡死的 Promise 上，即使底层原因恢复也永远无法重新计算模型可用性，属于极其隐蔽的“永久性损坏” bug。

5. **[#7248 Wayland 下 Ctrl+V 粘贴文本静默失败](https://github.com/earendil-works/pi/issues/7248)** ⭐ 4 评论
   - 已关闭（由 PR #7261 修复）。`readClipboardText()` 仅支持 X11 剪贴板，导致 Wayland 会话下文本粘贴完全无效，是 Linux 用户高频遇到的平台兼容性问题。

6. **[#7047 Gemini 3.x 工具调用 ID 被丢弃](https://github.com/earendil-works/pi/issues/7047)** ⭐ 5 评论
   - 开发中。Gemini 3 要求多轮工具调用中回传相同的 ID，但 Pi 在重放历史时剥离了 `id` 字段，导致多轮工具对话在 Gemini 3.x 上无法正常工作。

7. **[#7187 错误处理与 schema 校验不一致导致静默崩溃](https://github.com/earendil-works/pi/issues/7187)** ⭐ 4 评论
   - 已关闭。第三方包的 manifest 字段拼写错误会直接使所有聊天与会话永久崩溃，且 `pi -ne` 无法绕过。生产环境（如 screenpipe 内嵌 Pi）对这类脆弱的包加载机制提出了更高的容错需求。

8. **[#7027 API-key 登录成功后可能挂起](https://github.com/earendil-works/pi/issues/7027)** ⭐ 3 评论
   - 开发中。`/login openrouter` 提交 API key 后，如果 catalog 请求卡住，登录界面永远不返回，即使已在 `auth.json` 中看到凭据。与 #7153 同根同源——catalog 刷新缺少超时与状态反馈。

9. **[#7299 通过 AgentOptions 暴露 shouldStopAfterTurn 回调](https://github.com/earendil-works/pi/issues/7299)** ⭐ 4 评论
   - 新提交。作为 #4291 重构的延续，开发者希望将底层已有的 `shouldStopAfterTurn` 钩子提升到公开的 `AgentOptions` 中，以便在 SDK 层面控制 agent 的单轮停止条件。

10. **[#7334 引用 skill 导致项目目录被误判为 skill 安装目录](https://github.com/earendil-works/pi/issues/7334)** ⭐ 3 评论
    - 已关闭。通过 slash command 调用 skill 时，Pi 将 skill 的安装目录当作当前用户项目目录处理，影响文件读取与工具调用范围，直接破坏了 skill 的隔离语义。

### 4. 重要 PR 进展

1. **[#7348 `@earendil-works/pi-client`：运行时无关的会话客户端](https://github.com/earendil-works/pi/pull/7348)**（OPEN）
   - 新增传输无关的客户端包，将连接生命周期建模为可辨识联合，提供认证连接、类型化请求、多会话句柄与分离能力。这是 Pi 迈向“远程会话协议化”的关键一步。

2. **[#7344 `@earendil-works/pi-protocol`：远程会话线协议](https://github.com/earendil-works/pi/pull/7344)**（CLOSED）
   - 新增协议包，定义远程会话的命令、事件、快照与错误格式，使用严格的边界 CBOR 编码与增量长度分帧，并接入 workspace 构建与发布体系。

3. **[#7309 修复 RPC stdout 处理中的 JSON.parse 崩溃](https://github.com/earendil-works/pi/pull/7309)**（CLOSED）
   - 修复 RPC 子进程输出任意非 JSON 行（如日志、截断的半行）时导致的同步崩溃。对于集成方（如内嵌 RPC 外部 agent 的厂商）是重要的健壮性修复。

4. **[#7343 为 AgentHarness 增加停机生命周期](https://github.com/earendil-works/pi/pull/7343)**（CLOSED）
   - 新增幂等的 `AgentHarness.shutdown()`，拒绝新任务但保留持久会话，同时等待进行中的 turn/compaction 结束后再退出，解决退出时的竞态问题。

5. **[#7339 DRAFT：OpenAI Responses API 后台模式实现](https://github.com/earendil-works/pi/pull/7339)**（OPEN）
   - 针对 OpenAI 新出的 `background: true` 模式做初始实现，允许请求在后台运行。当前作者自行评价设计上仍有不顺，期待社区反馈。

6. **[#7148 实验性 loadout 管理](https://github.com/earendil-works/pi/pull/7148)**（OPEN）
   - 引入 `/loadout` 命令，允许在会话中动态启用/禁用扩展，并将会话内的 loadout 覆盖持久化到 session 中以支持恢复。需用户确认，属于可插拔化方向的重要实验。

7. **[#7261 Wayland 粘贴修复：wl-paste / xclip 回退机制](https://github.com/earendil-works/pi/pull/7261)**（CLOSED）
   - 修复 #7248。在 Linux 上按 Wayland/X11 分别使用 `wl-paste --no-newline` 或 `xclip`/`xsel`，放弃仅依赖 X11-only 的原生 addon。

8. **[#7340 浅色终端下加粗 markdown 文字不可见修复](https://github.com/earendil-works/pi/pull/7340)**（CLOSED）
   - 修复 ANSI bold 在“bold-as-bright”终端上渲染为白字白底的问题。`getMarkdownTheme()` 加粗逻辑未设置显式前景色，现在会给出兼容处理。

9. **[#7011 原生 ESM 扩展共享宿主模块](https://github.com/earendil-works/pi/pull/7011)**（CLOSED）
   - 修复 jiti 使用原生 import 加载 ESM 扩展时绕过 alias/virtualModules 的问题，扩展不再解析出重复的 Pi 包副本，避免宿主与扩展之间的模块状态分裂。

10. **[#7216 修复 openai-completions 的 delta 内容格式化](https://github.com/earendil-works/pi/pull/7216)**（OPEN）
    - 针对部分 Databricks 模型（Qwen3、gpt-oss 等）流式输出 `choice.delta.content` 为类型化数组时被错误拼接为 `[object Object]` 的问题，提取并连接 `type: "text"` 块。

### 5. 功能需求趋势

- **可扩展渲染管线**：`#6747` 的关闭是一个标志性事件。社区对“扩展能安全地改写 UI 而不污染 LLM 上下文”的需求持续高涨，未来可能会有更多面向渲染层的 Extension API。
- **动态会话/加载管理**：`/loadout`、`shouldStopAfterTurn` 暴露、运行时无关客户端等议题，表明开发者希望 Pi 能更精细地控制会话生命周期与扩展加载时机，而不只是启动时全量加载。
- **远程与嵌入式场景适配**：`pi-protocol`/`pi-client` 的引入，加上对远程沙箱、PTY 透传场景下持续重绘问题的关注，说明 Pi 正在从“本地终端工具”走向“可嵌入代理/远程会话”的架构演进。
- **新模型与 provider 支持**：Gemini 3.x 工具 ID、Amazon Bedrock Mantle、Fireworks 超时失败、OpenAI Responses 后台模式等，反映出社区对前沿模型接入的跟进速度快，且对多 provider 协议细节的兼容性要求很高。
- **平台兼容性修补**：Wayland 剪贴板、Windows 输入重绘、iTerm2 渲染异常、Devnagri 文本断行等，说明跨终端、跨平台的兼容性仍是高频问题清单。

### 6. 开发者关注点

- **“卡死”类问题反复出现且影响面广**：`/scoped-models` 卡 5 分钟、login 后挂起、catalog 刷新永久不可恢复——这三起独立 Issue 的共同病灶都是**模型 catalog 异步刷新缺少超时与可取消机制**，且 UI 层没有提供足够的加载/错误状态。这是当前最需要优先处理的稳定性债。
- **第三方面包加载的容错性不足**：`#7187` 再次敲响警钟——一个 manifest 拼写错误就能让生产实例全部会话瘫痪。社区呼吁在包解析层加 schema 校验与降级隔离，而不是直接崩溃。
- **TUI 渲染性能在长上下文下显著劣化**：每秒全量重渲染（`#7194`）与流式输出随上下文增长变慢（`#7332`）表明，终端渲染层的增量刷新能力已成为提升长会话体验的核心瓶颈。
- **ESM 模块复用问题被反复提及**：扩展与宿主之间的模块状态分化（`#7011`）会引发“难以调试的隐性 bug”，开发者希望 Pi 提供更严格的模块共享与依赖一致性保证。
- **环境信息不透明加深排查难度**：不少 Issue 排障时需要反复确认运行环境，社区对 `version` 命令输出 runtime（bun/node/deno）版本、终端类型等信息的呼声上升（`#7244`），以减少重复提问与误报。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-07-31

## 今日速览

- 发布 `v0.21.1-nightly` 版本，修复 CI 容器默认 shell 与 Web Shell 前缀显示问题。
- Anthropic 转换器集中暴露 4 个周边 bug（工具调用清理、ID 字符集、block 顺序等），对应修复 PR 已进入审查流程。
- 社区讨论聚焦两大方向：Windows 平台稳定性（崩溃、安装器、桌面端集成）与核心架构演进（Config 所有权、确定性工具执行边界）。

---

## 版本发布

### v0.21.1-nightly.20260731.702932cc7

- **fix(ci)**: 为 qwen-triage 容器任务添加默认 bash shell（[#7838](https://github.com/QwenLM/qwen-code/pull/7838)）
- **fix(web-shell)**: 修复 Web Shell 中 pre 元素相关渲染问题

---

## 社区热点 Issues

### 架构与设计

1. **[refactor: core + cli 架构 Review — 12 项结构性问题清单](https://github.com/QwenLM/qwen-code/issues/4063)**（👎 1 | 💬 5）  
   对 `packages/core` 和 `packages/cli` 的全面架构审查，指出核心类型系统被 `@google/genai` 绑架（136 个文件直接依赖）、ContentGenerator 接口耦合过深等 P0 级问题。社区持续关注，7 月 30 日仍有新讨论，说明该问题清单对核心开发有长期指导意义。

2. **[design(core): make derived Config context ownership explicit](https://github.com/QwenLM/qwen-code/issues/8083)**（💬 5）  
   提出不再依赖 `Object.create(base)` 原型链覆盖，而是显式表达子代理、作用域记忆、审批模式等场景下派生 Config 的 owner 关系。属于核心状态管理设计的关键改进，影响面广。

3. **[proposal(core): deterministic tool-execution boundaries](https://github.com/QwenLM/qwen-code/issues/8102)**（💬 4）  
   提议将语言模型置于信任边界之外，通过运行时对工具调用进行确定性约束、授权、观察和评估。与 #8032 的 host tool 调用守护形成配套，是 Agent 安全方向的重要提案。

### 稳定性与崩溃

4. **[0.21.1 使用崩溃 3 次](https://github.com/QwenLM/qwen-code/issues/7972)**（💬 4）  
   Windows x64 上升级 0.21.1 后反复崩溃。关联 #7971、#7779、#7781，社区对 VP 模式（备用屏幕）下的崩溃问题反馈集中，目前 #8088 已添加 `uncaughtException` 处理器用于定位根因。

5. **[Startup banner 首帧缺失顶部几行](https://github.com/QwenLM/qwen-code/issues/8124)**（💬 9 | 🏷️ welcome-pr）  
   TUI 交互式界面首帧偶发丢失 ASCII 横幅顶部约 3 行，与待处理的 provider 更新相关。Windows 与渲染时序双重作用，是当日评论数最高的 issue 之一。

### 安全

6. **[Provider 警告清理器两个凭证泄露 bug](https://github.com/QwenLM/qwen-code/issues/8136)**（💬 4）  
   `sanitizeProviderWarning` 先截断包含端口号的消息，后又因错误的定位逻辑泄露含 `@` 的密码。涉及 `/status` 接口的凭证外泄风险，修复 PR #8137 已在审查中。

### 配置与工作区

7. **[worktree 的 settings.json 写错位置](https://github.com/QwenLM/qwen-code/issues/8138)**（💬 4 | 🏷️ welcome-pr）  
   在 git worktree 中保存设置时，写入项目根目录 `.qwen/settings.json` 而非 worktree 自身目录，导致隔离失效。影响使用 `enter_worktree` 和 `agent isolation: worktree` 的用户。

### 模型转换兼容性

8. **[Anthropic converter: 陈旧 thinking 签名未被裁剪](https://github.com/QwenLM/qwen-code/issues/8162)**（💬 4）  
   历史对话轮次中，若某条 assistant 消息的 `tool_use` 被清理掉，其配对的 `thinking`/`redacted_thinking` 块不会被同步移除，导致 Anthropic API 报错。同系列还包括 #8159、#8160、#8161，共同指向转换器对工具调用生命周期处理不完整。

### 桌面端与集成

9. **[Desktop app 无法连接 LMStudio](https://github.com/QwenLM/qwen-code/issues/8146)**（💬 4）  
   Windows 桌面客户端调用 LMStudio API 无任何请求发出，但 UI 一直显示运行中。社区对本地模型集成的期待度高，该 issue 已获较多关注。

### Agent 功能

10. **[Agent Team: teammate 消息在整个多工具调用期间排队](https://github.com/QwenLM/qwen-code/issues/8172)**（💬 3）  
    teammate 发送给 leader 的消息要等到 `StreamingState.Idle` 才会进入对话，导致单轮长任务中消息延迟过大。影响 Agent Team 协作体验。

---

## 重要 PR 进展

### 修复类

1. **[fix(cli): 凭证清理仅作用于 URL authority](https://github.com/QwenLM/qwen-code/pull/8137)**  
   修复 #8136，复用同模块中已验证的 URL 解析方式，删除自定义的 `indexOf` 启发式逻辑。安全关键修复，已在审查中。

2. **[fix(anthropic): 不剥离末尾 tool_use，并去重 tool_result](https://github.com/QwenLM/qwen-code/pull/8163)**  
   修复 #8159。使 `cleanOrphanedToolCalls` 正确区分"尚无结果"与"彻底孤立"，并补充 tool_result 块去重逻辑。同系列问题 #8160/#8161 的修复应相继跟进。

3. **[fix(cli): 为 VP 模式添加 uncaughtException 处理器](https://github.com/QwenLM/qwen-code/pull/8088)**  
   关联 #7971/#7972/#7779/#7781。负责任地声明"不声称修复崩溃"，而是保证下次崩溃时错误可见、可诊断，避免静默退出。

4. **[fix(serve): 托管记忆按选中工作区隔离](https://github.com/QwenLM/qwen-code/pull/8056)**  
   将异步 remember/forget/dream 操作绑定到选中工作区的任务通道，并新增精确工作区存储模式，解决多工作区记忆串扰。

### 新功能

5. **[feat(desktop): 将 Web Shell 打包为发布级桌面应用](https://github.com/QwenLM/qwen-code/pull/8132)**  
   将 Tauri PoC 升级为发布级桌面端，复用 Web Shell 作为统一 UI，自研原生生命周期管理（启动恢复、工作区状态），是桌面端的关键里程碑。

6. **[feat(memory): 后台 Agent 轮次限制可配置](https://github.com/QwenLM/qwen-code/pull/8171)**  
   实现 #8168，新增 `memory.agentMaxTurns` 设置，统一控制 dream 与 auto-skill review agent 的最大轮次（默认 8，0 表示不限制）。

7. **[feat(cli): 交互式 TUI 采用 Goal v3](https://github.com/QwenLM/qwen-code/pull/8005)**  
   将 TUI 接入 Goal v3 运行时，新增 `/goal` 生命周期命令、持久化状态卡片、Goal 感知的恢复与会话分支恢复，以及双通道输入排队。

8. **[feat(core): 当前 PR 的 Autofix 监视器](https://github.com/QwenLM/qwen-code/pull/8121)**  
   新增 `/autofix` 命令族：`/autofix status` 报告当前分支关联 PR 的 CI/审查聚合状态，`/autofix on` 创建单次会话自动修复，社区呼声很高的自动化工作流功能。

9. **[feat(cli): 完善图片跨入口路由](https://github.com/QwenLM/qwen-code/pull/7206)**  
   让本地图片 `@` 引用在 TUI、ACP、非交互 CLI 三个入口统一经过工作区边界、ignore 规则、MIME 类型和文件身份校验。

10. **[fix(test): 测试套件 Windows 可移植](https://github.com/QwenLM/qwen-code/pull/8050)**  
    让平台敏感路径和测试断言在 Windows 上表现一致，保持 POSIX 专属语义仅在对应平台断言。对 Windows 支持缺口的一次系统性补齐。

---

## 功能需求趋势

从近 24 小时 Issue/PR 中提炼出以下社区关注方向：

1. **Anthropic/Gemini 转换器兼容性与正确性**  
   #8159-#8162 系列问题密集出现，均围绕 `tool_use`/`tool_result`/`thinking` 的配对与清理规则。说明跨模型服务的生产环境用户占比上升，转换器从"能用"走向"严谨"是当前刚需。

2. **Windows 平台一等公民支持**  
   覆盖安装器（#7118）、崩溃（#7972）、渲染（#8124）、桌面端 LMStudio 集成（#8146）及测试套件可移植性（#8050 PR）。Windows 用户占比与现存问题不成比例，补齐体验是社区高频诉求。

3. **配置精细化与隔离**  
   worktree 配置写入范围（#8138）、后台 agent 轮次上限（#8168）、托管记忆按工作区隔离（#8056 PR），社区要求配置语义可预期、作用域清晰。

4. **Agent 运行时可信与可观测**  
   确定性工具执行边界提案（#8102）、Agent Team 消息延迟（#8172）、subagent 状态监控端点（#8128），表明 Agent 功能已进入"需要治理和可观测性"阶段。

5. **CI/开发工作流自动化**  
   "Auto Fix CI & 审查评论"（#4362，👍 2）、PR Autofix 监视器（#8121）、Fleet Shepherd 仪表盘（#7167）说明社区希望将机器人流程自动化能力逐步下沉到日常开发。

---

## 开发者关注点

- **崩溃重现困难且影响面大**：#7972 及关联 issue 反映 VP 模式崩溃无法稳定复现，开发者期待更完善的错误可见性（#8088 是正确方向）和 Windows 专项回归。
- **会话与文件的追溯链条缺失**：#7966 直接询问"如何区分哪些文件属于哪个会话"，用户对会话级副作用追踪有强烈需求，目前尚无明确支持计划。
- **安全边界细节不信任**：#8136 这类凭证清理 bug 虽是边界 case，但涉及 `/status` 接口，开发者对配置中的密钥、Token 脱敏非常敏感。
- **CI 失败自动跟踪趋于常态化**：多个 `qwen-code-dev-bot` 提交的 CI 失败 issue（#8153、#8133、#8076 等）已进入 ready-for-agent 流程，社区对自动修复的接受度在提高。
- **桌面端预期高于现状**：v0.5.5 桌面端存在文件引用（#8123）、LMStudio 集成（#8146）等问题，且 Web Shell 打包 PR（#8132）表明桌面端将获得统一 UI 与更完善的体验。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（CodeWhale）社区动态日报 2026-07-31

## 今日速览
- **品牌切换落地**：v0.9.2 发布说明正式确认 CodeWhale 品牌，旧 npm 包 `deepseek-tui` 弃用，项目全面转向 `codewhale`。
- **v0.9.3 重构讨论白热化**：「命令边界重构 EPIC」（#2870，19 评论）与「运行时所有权收敛」（#3306）形成双主线，社区对拆分 TUI 单体 crate 期待甚高。
- **中文社区声量上升**：既有「Constitution」译名辩论（#4949），也有中文用户报告的 Anthropic 兼容 API 400 错误（#4978）。

## 版本发布

[v0.9.2](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.2)
- CodeWhale 正式成为 Shannon Labs 公开发布的品牌；`codewhale` 命令、npm 包和发布资产名称保持小写技术标识符。
- 旧 npm 包 `deepseek-tui` 已弃用且不再有新版本；v0.8.x 用户需迁移至 `codewhale` 命令/包。
- 发布收尾工作详见 PR [#4982](https://github.com/Hmbown/CodeWhale/pull/4982)：涵盖权限体系核对、Fleet 设置/持久化、推理检查、压缩错误、子代理监督/引导、沙箱真实性、凭据 UX 和环境水母轮廓等多项修复。

## 社区热点 Issues

> 挑选 10 个最值得关注的 Issue，按关注度与影响力排序。

1. **#2870 EPIC：命令边界分阶段重构** — 19 条评论  
   大型重构统筹 issue，将 #2791 讨论的命令边界重构拆成多个可合并的小层，并以 PR #2851 作为参考实现。社区参与度高，是 v0.9.3 演进的关键路标。  
   [查看](https://github.com/Hmbown/CodeWhale/issues/2870)

2. **#2369 配置路径在不同系统和 Cygwin 间碎片化（含静默迁移 bug）** — 7 条评论  
   Windows/Cygwin 下配置文件可因 home 目录规则差异解析到不同路径，旧迁移逻辑还可能静默失败。影响 Windows 用户，已附补丁供讨论。  
   [查看](https://github.com/Hmbown/CodeWhale/issues/2369)

3. **#4022 定义子代理与运行时控制面的 CLI/TUI 对等性** — 7 条评论  
   v0.8.67 加固后 TUI 边栏成为子代理状态与取消的「主战场」，但未来云应用/远程工作区不能依赖 TUI。社区在讨论如何让 CLI 拥有同等控制能力。  
   [查看](https://github.com/Hmbown/CodeWhale/issues/4022)

4. **#3306 v0.9.3 收敛运行时所有权、消灭重复、只发布一个可执行文件** — 4 条评论  
   当前 18 个 Rust 包约 771k 行，其中 87% 在 codewhale-tui 内；TUI 维护着与共享 crate 平行的 runtime/tool/config/session/hook 路径。此 issue 是 v0.9.3 的伞形蓝图。  
   [查看](https://github.com/Hmbown/CodeWhale/issues/3306)

5. **#4949 "Constitution" 中文翻译：宪法、协作准则、还是其他？** — 4 条评论  
   PR #4908 将翻译从「协作准则」改回「宪法」引发争议，担心中文语境下的政治色彩。作者邀请中文母语者投票，本地化讨论很有代表性。  
   [查看](https://github.com/Hmbown/CodeWhale/issues/4949)

6. **#4906 Show, don't tell：为官网和 README 录制真实会话 GIF** — 3 条评论  
   终端 agent 本质上是视觉化、动态的产品（Work surface、phase rail、delegate cards、ambient ocean），目前却只有文字描述。社区希望有真实演示视频。  
   [查看](https://github.com/Hmbown/CodeWhale/issues/4906)

7. **#4991 编译时间：TUI crate 单体，是否也有人深受其苦？** — 1 条评论  
   开发者正在做斜杠命令重构（Layers 5/5.1/5.2）时频繁等待编译，质疑单体 crate 拖慢迭代速度，与 #3306/#3948 形成呼应。  
   [查看](https://github.com/Hmbown/CodeWhale/issues/4991)

8. **#4986 功能：为项目和 agent 工作流做一等桌面 App** — 1 条评论  
   用户希望达到 Codex Desktop 的体验，不想管理终端、工作目录、后台进程。现有 TUI 和浏览器客户端被认可，但桌面产品仍缺位。  
   [查看](https://github.com/Hmbown/CodeWhale/issues/4986)

9. **#4978 频繁 Warn Anthropic API error（HTTP 400）'type' 必须为 enabled/disabled/auto** — 1 条评论  
   中文用户通过 `providers.openmodel` 走 Anthropic 兼容端点时高频触发 400，重试偶发成功。可能是请求字段枚举与兼容端点不一致，社区等待官方定位。  
   [查看](https://github.com/Hmbown/CodeWhale/issues/4978)

10. **#4807 环境水母渲染得像「串上的泡沫」** — 2 条评论  
    团队 dogfood 发现当前水母由 `"o*"` + 单条 `|` 触手组成，完全不像水母。虽是小 UI 细节，但体现团队对终端美学的自我要求。  
    [查看](https://github.com/Hmbown/CodeWhale/issues/4807)

## 重要 PR 进展

> 挑选 10 个重要 PR，覆盖发布、交互修复、新功能与架构演进。

1. **[#4982](https://github.com/Hmbown/CodeWhale/pull/4982) release：收尾 v0.9.2**（已关闭）  
   修复权限真理、Fleet 设置/持久化、推理检查、压缩错误、子代理监督/引导、沙箱真理、凭据 UX 和环境轮廓；并提取子代理工作树隔离，移除被取代的代码。

2. **[#4979](https://github.com/Hmbown/CodeWhale/pull/4979) fix(tui)：前台 shell 阻塞时先 detach 再 steering**（已关闭）  
   解决「agent 在跑 `sleep 30`/`cargo build` 时用户输入 Enter 无效」的困惑：先把阻塞进程移到 `/jobs` 再入队同轮 steer，保留 busy-Enter 排队语义并覆盖显式/隐式 steering 路径。

3. **[#4981](https://github.com/Hmbown/CodeWhale/pull/4981) feat(tui)：LaTeX 数学渲染支持环境块、文本和命令**（开放中）  
   新增 `render_environment()` 分发器，支持常见内联命令、重音、命令感知的下标/上标、大小写不敏感环境匹配。适合学术/数学类文档场景。

4. **[#4992](https://github.com/Hmbown/CodeWhale/pull/4992) Layer 5.2：用户命令调度优先级、遮蔽与错误语义**（开放中）  
   为自定义斜杠命令重构补上 Gherkin 验收测试：用户命令遮蔽内置规范名/别名、缺失回退、非法命令报错，确保重构不破坏命令解析。

5. **[#4980](https://github.com/Hmbown/CodeWhale/pull/4980) docs(permissions)：发布并锁定授权顺序**（已关闭）  
   将实际生效的授权顺序固化为引擎级契约测试；新参考文档解释 tool admission、hooks、registered requirements、typed permission rules、auto-review、repository law、approval 和 sandbox 的复合流程。对安全审计有重要价值。

6. **[#4985](https://github.com/Hmbown/CodeWhale/pull/4985) feat(runtime-api)：按工作区划分任务列表**（开放中）  
   为 `GET /v1/tasks` 增加可选 workspace 过滤器，TaskSummary 附带工作区路径，为 GUI 客户端提供正确的作用域控制，附回归测试。与此前 rebase 的运行时配置持久化修复（[#4984](https://github.com/Hmbown/CodeWhale/pull/4984)）协同推进。

7. **[#4896](https://github.com/Hmbown/CodeWhale/pull/4896) [codex] 把终端剪贴板写入移出事件循环**（已关闭）  
   将 OSC 52 和 SSH/tmux 剪贴板传输统一到串行后台 worker，队列限制为 1 个请求，避免终端卡死造成无界积压；防止 TUI 事件路径被剪贴板 I/O 拖慢。

8. **[#4942](https://github.com/Hmbown/CodeWhale/pull/4942) fix(tools)：保留 CRLF 行尾**（已关闭）  
   `edit_file` 在 LF 归一化视图上搜索，再把唯一匹配映射回原始 CRLF 字节；替换内容按基线文件行尾风格归一化。Windows 用户的编辑体验将得到改善。

9. **[#4990](https://github.com/Hmbown/CodeWhale/pull/4990) fix(devcontainer)：支持 Windows 开发**（开放中）  
   改用专用开发镜像以提供 Rust 工具链、rustfmt、pkg-config、DBus 头文件；以命名卷替代 host HOME 挂载，避免 Windows HOME 展开无效问题。

10. **[#4977](https://github.com/Hmbown/CodeWhale/pull/4977) fix(tui)：让 AltGr 组合的 `/` 进入输入框而不再误触帮助**（开放中）  
    修复 #4723：Windows 把 AltGr 上报为 Ctrl+Alt，巴西 ABNT2 布局的 `/`（AltGr+Q）被误匹配到全局 Ctrl-/ 帮助快捷键。AZERTY 等布局同样受益。

## 功能需求趋势

> 从所有 Issues 中提炼出的社区最关注方向。

- **v0.9.3 架构重构是绝对主线**：从「单一大 TUI」走向「运行时、CLI 调度、工具、视图分层」，最终交付单二进制（[#3306](https://github.com/Hmbown/CodeWhale/issues/3306)、[#3948](https://github.com/Hmbown/CodeWhale/issues/3948)、[#3957](https://github.com/Hmbown/CodeWhale/issues/3957)、[#3950](https://github.com/Hmbown/CodeWhale/issues/3950)、[#4747](https://github.com/Hmbown/CodeWhale/issues/4747)、[#4174](https://github.com/Hmbown/CodeWhale/issues/4174)）。
- **上下文精简（Context Diet）**：多个 issue 聚焦减少模型面向 token——系统提示折叠、重复上下文去重、跨模型消融和 token 归因（[#4704](https://github.com/Hmbown/CodeWhale/issues/4704)、[#4707](https://github.com/Hmbown/CodeWhale/issues/4707)、[#4709](https://github.com/Hmbown/CodeWhale/issues/4709)、[#4710](https://github.com/Hmbown/CodeWhale/issues/4710)、[#4394](https://github.com/Hmbown/CodeWhale/issues/4394)）。
- **子代理控制面显式化**：CLI/TUI 对等、消息唤醒 vs 后续唤醒、目标选择与上下文分支（[#4022](https://github.com/Hmbown/CodeWhale/issues/4022)、[#4989](https://github.com/Hmbown/CodeWhale/issues/4989)）。
- **桌面级体验**：期望更接近 Codex Desktop 的一等桌面 App（[#4986](https://github.com/Hmbown/CodeWhale/issues/4986)）。
- **跨平台与本地化**：Windows devcontainer（[#4990](https://github.com/Hmbown/CodeWhale/pull/4990)）、CRLF（[#4942](https://github.com/Hmbown/CodeWhale/pull/4942)）、Solarized Light（[#4471](https://github.com/Hmbown/CodeWhale/pull/4471)）、更多 locale（[#4856](https://github.com/Hmbown/CodeWhale/pull/4856)）、中文翻译讨论（[#4949](https://github.com/Hmbown/CodeWhale/issues/4949)）。
- **文档可视化**：真实会话 GIF 用于 README/官网（[#4906](https://github.com/Hmbown/CodeWhale/issues/4906)）。

## 开发者关注点

> 开发者反馈中的高频痛点与诉求。

- **编译时长焦虑**：大量代码集中在 `codewhale-tui` 导致每次迭代等待漫长，slash command 重构者已公开吐槽（[#4991](https://github.com/Hmbown/CodeWhale/issues/4991)）。
- **配置/凭据路径不一致**：不同 OS 与 Cygwin 规则分叉，迁移存在静默失败风险（[#2369](https://github.com/Hmbown/CodeWhale/issues/2369)）；凭据存储默认值与 `CODEWHALE_HOME` 隔离让密钥「看似消失」（[#4987](https://github.com/Hmbown/CodeWhale/issues/4987)）。
- **兼容端点稳定性**：OpenModel 的 Anthropic 兼容 API 高频 400，影响中文用户实际使用（[#4978](https://github.com/Hmbown/CodeWhale/issues/4978)）。
- **前台 shell 与交互冲突**：阻塞命令期间用户输入被吞，已成为明确的交互痛点（[#4930](https://github.com/Hmbown/CodeWhale/issues/4930)，PR [#4979](https://github.com/Hmbown/CodeWhale/pull/4979) 已修复）。
- **token 滥用警觉**：开发者希望系统提示更精简、跨模型质量可验证，而非只在散文层面保证（[#4704](https://github.com/Hmbown/CodeWhale/issues/4704)、[#4707](https://github.com/Hmbown/CodeWhale/issues/4707)）。

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*