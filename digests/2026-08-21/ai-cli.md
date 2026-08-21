# AI CLI 工具社区动态日报 2026-08-21

> 生成时间: 2026-08-20 23:15 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告（2026-08-21）

## 1. 生态全景

当前 AI CLI 工具已从「单模型封装」全面转向 **agentic 工作流平台化竞争**，多子代理协作、MCP 生态集成、企业级权限治理成为各工具的标准配置。社区反馈重心也从「模型能做什么」转向「代理是否可靠、可控、可观测」——子代理状态误报、TUI 卡死、上下文压缩失效等稳定性问题在各仓库连环出现。版本迭代节奏明显分化：头部商业工具（Claude Code、Codex、Copilot CLI）以补丁和小步快跑稳住基本盘，而开源新锐（OpenCode、Gemini CLI、Qwen Code）正通过架构重构、安全沙箱和评估基建争夺下一阶段话语权。值得警惕的是，模型输出质量退化（Claude Code #77136，314 👍）与 `/undo` 撤销回归（Codex #9203，394 👍）成为两个热度断层领先的 Issue，说明用户对「基础体验可信度」的敏感度已超过对功能新奇度的追求。

## 2. 各工具活跃度对比

> 下表数据来自各仓库 2026-08-20 ~ 08-21 社区日报，为**日报筛出的热点条目数**，并非仓库当日全部流量。

| 工具 | 热点 Issues | 热点 PRs | Discussions | Release |
|---|---|---|---|---|
| Claude Code | 10（含 2 新报告） | 0（合并静默期） | 未提供 | v2.1.237 / v2.1.238 |
| OpenAI Codex | 10（含 1 新报告） | 10 | 4 | rust-v0.149.0 + 4 个 alpha 预发布 |
| Gemini CLI | 10 | 10 | 未提供 | v0.56.0-nightly |
| GitHub Copilot CLI | 10（33 条 Issue 更新） | 1（#4510 可疑 PR） | 未提供 | v1.0.81-5 / v1.0.81-6 |
| OpenCode | 10 | 10 | 未提供 | v1.18.19 |
| Pi | 10 | 10 | 2 | 无新版本（10 个 PR 合并） |
| Qwen Code | 10 | 10 | 未提及 | v0.21.15 |
| CodeWhale | 10 | 10 | 未提供 | v0.9.10 |
| DeepSeek Harness | 0 | 0 | 0 | 无（24 小时无活动） |

**说明**：各仓库 Issues/PR 均正常开放；"未提供/未提及"表示该期日报数据源未覆盖，不代表上游关闭社区渠道。Claude Code 与 Copilot CLI 的 Issue 讨论量（单条最高 132 / 71 评论）更大，反映其用户基数优势。

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **子代理可靠性与可观测性** | Gemini CLI（#22323 误报 GOAL 成功、#21409 通用代理挂起）、Codex（#38364 面板状态不同步）、Copilot CLI（#4533 并行子代理 UI 冻结）、Qwen（#9586 ACP 熔断残留） | 子代理状态真实上报、失败可追踪、资源开销透明化 |
| **上下文压缩与内存管理** | Pi（#6879 超阈值不压缩、#8133 按模型配置压缩参数）、CodeWhale（#5518 提前 Emergency Compaction）、Qwen（#2128 内存无界增长）、Claude（#46603 压缩后 resume 链路断裂）、Codex（#34061/#39808 子代理磁盘/上下文开销） | 上下文生命周期可控，压缩触发时机可靠，内存上限可预期 |
| **TUI/终端渲染稳定性** | OpenCode（#42657 渲染线程 CPU 97%、#20458 转义序列乱码）、Pi（#5023 随机滚动、#6300 Windows 每次按键重绘）、Gemini（#25166 Waiting input 卡死）、Copilot（#4532 pending 行残影） | 渲染层零打扰、输入焦点不抢占、长输出不崩溃 |
| **MCP 生态兼容性与安全** | Copilot CLI（#4096 OAuth 令牌未桥接、#3162 策略误判、#3698 子进程泄漏）、Claude（#88370 MCP Apps 渲染回归）、Gemini（#28863 扩展环境变量二次确认）、OpenCode（#40125 按服务器配置信任）、CodeWhale（#5515 MCP 图像类型化转发） | 连接状态真实化、认证打通、按需授权、资源生命周期收敛 |
| **企业治理与权限模型** | Copilot（#4528 非交互模式绕过企业设置、沙箱 git 不可用）、Gemini（#28828 模型被静默替换告警）、Claude（#84352 已批准组织仍被阻断）、Qwen（#9556 代码执行权限审查） | 沙箱与效率平衡、企业策略不绕过、模型目录同步可见 |
| **会话生命周期管理** | Claude（#61172 /clear 重名）、Codex（#39162 历史会话登录态失效）、Qwen（#9573 恢复后工具结果丢失）、Copilot（#4539 Ctrl+Z 后会话丢失）、OpenCode（#43619 子代理 sessionID 必填阻塞） | 恢复语义不损坏、命名不冲突、跨平台状态一致 |
| **记忆与规则遵循** | Claude（#88285 代理故意遗忘 CLAUDE.md）、Copilot（#4535 store_memory 回归）、Gemini（#26525/#26522 Auto Memory 脱敏与重试）、Qwen（#9597 QWEN.md 符号链接重复加载） | 长期记忆可信、脱敏前置、规则物理拦截兜底 |

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线/生态特征 |
|---|---|---|---|
| **Claude Code** | 全功能商用 agentic 编码助手 | 企业开发者、专业用户 | 商业闭源 + 插件市场；强调模型输出风格控制（Concise 风格）与商用网关；Issue 热度最高但迭代以稳定为主 |
| **OpenAI Codex** | OpenAI 模型原生的终端代理 | ChatGPT 订阅用户、自动化重度用户 | Rust 重写；与 ChatGPT 桌面版/订阅深度绑定；以 `codex agents` 交互式看板和 TUI 目录管理为差异化 |
| **Gemini CLI** | Google 生态的安全型代理框架 | Gemini 模型用户、对安全边界敏感的开发团队 | nightly 快速迭代；Seatbelt 沙箱、Auto Memory、组件级 eval 基建投入显著；多模型（Gemini 3.x/Llama）适配活跃 |
| **GitHub Copilot CLI** | GitHub/企业生态的托管代理 | Copilot Business 用户、组织管理员 | 强企业治理（组织策略、MCP 注册表）；v1.0.81 补丁密集但预发布质量受质疑；近期 PR 渠道异常（#4510）需关注维护健康度 |
| **OpenCode** | 开源可插拔的多 provider 终端 | TypeScript/Effect 生态开发者、v2 架构尝鲜者 | 插件 API + Web UI；架构重构（Session 垂直切片）活跃但 v2 稳定性拖累采用；关注多模型网关透传 |
| **Pi** | 极简高性能 TUI 前端 | Rust/终端美学偏好者、多模型用户 | 主题系统重构为亮点；命令别名诉求强烈（用户迁移成本）；与 Claude Code 形成「轻量替代」关系 |
| **Qwen Code** | 阿里云/通义生态的集成型 CLI | 阿里云 DSW 用户、中文开发者 | Web Shell + 流内表单体验；音频桥接、审查流水线自动化、CVE 硬门禁；国际化与中文化并行推进 |
| **CodeWhale** | DeepSeek 模型优先的独立 CLI | DeepSeek/本地 vLLM 用户、中文社区 | 由 deepseek-tui 更名而来；TUI crate 分解与工具调用流水线重构中；文档中文化是其国际化主线 |
| **DeepSeek Harness** | 模型评测/测试基础设施 | 模型开发者（非终端用户） | 仓库无社区动态，定位偏评估工具链，不参与 CLI 功能竞争 |

**共性路径**：除 Claude Code 外，所有工具都在做 **Rust/性能层重构** 与 **TUI 命令体系收敛**，同时向 MCP、多模型、沙箱三个方向扩展边界。

## 5. 社区热度与成熟度

- **用户基数最大、讨论深度最高**：**Claude Code** 与 **OpenAI Codex**。Claude #77136 单 Issue 获 314 👍，Codex #9203 获 394 👍，均为各仓库断层第一；Copilot CLI 单日 33 条 Issue 更新，说明企业用户反馈密度高。三者属「成熟商业产品，社区进入体验打磨期」，热点问题多为质量回归而非功能缺失。
- **快速迭代、社区信任正在建立**：**Gemini CLI**（nightly + 10 PR/日）、**Qwen Code**（P1 内存问题持续 5 个月 + 密集修复）、**OpenCode**（v2 重构伴随多 TUI 崩溃反馈）均处于「功能扩张与稳定性赛跑」阶段；Pi 无新版本但 10 个 PR 合并，验证其「低频发版、高密度合入」的稳健模式。
- **活跃但规模较小**：**CodeWhale** 社区体量最轻（单 Issue 评论多为个位数），但中文社区诉求（#5482 全量中文化文档、#5345 多行输入）清晰，属于「生态位明确、待放量」阶段；**DeepSeek Harness** 当日无活动，不参与本轮对比。
- **值得注意的信号**：Copilot CLI 出现删除整个 README 文档的可疑 PR（#4510），且 1.0.81 预发布系列集中暴露 5+ 个渲染/记忆回归，提示大型开源项目在 bot 防护与发布质量控制上需加强。

## 6. 值得关注的趋势信号

1. **「代理可信度」取代「模型能力」成为第一议程**：子代理误报成功、挂起、资源失控、静默回退模型等负面反馈横跨 5+ 工具，多代理范式的工程治理（状态机、观测、成本透明）将成为下一轮差异化竞争焦点。
2. **撤销与数据保护成为基础刚需**：Codex `/undo` 以 394 👍 高居全榜第一，反映用户对 AI 误删未跟踪/未提交文件的恐惧已超过对效率的追求；各工具应把「可回滚」内建为文件操作与上下文管理的默认契约。
3. **上下文压缩从「省 token 技巧」升级为「关键基础设施」**：Pi 压缩不触发、Qwen 内存无界、CodeWhale 提前压缩、Claude 压缩后链路断裂——跨工具同频故障说明 context 生命周期管理尚无最佳实践，可能出现独立解决方案/标准。
4. **安全沙箱进入「军备竞赛」**：Gemini 的 Seatbelt 隔离、Copilot 的 enforced sandbox、Qwen 的镜像 digest 绑定、OpenCode 的证书指纹信任，各工具正从「功能开关」走向「架构内置」；但沙箱过严破坏基本 git 流程（Copilot #4524、#4546）表明「安全与可用性的平衡点」远未收敛。
5. **企业治理面需求集中爆发**：组织策略绕过（Copilot #4528）、模型目录同步延迟（#4390）、计费状态不一致（Claude #64480）、认证在应用与 CLI 间不桥接（Copilot #4096、Codex #39162）——「账号/策略/配额」三件套正在成为商业工具的生命线。
6. **新模型接入速度成为生态卡位手段**：Bedrock multi-agent 兼容、Gemini 3.x thought_signature、Kimi 思维签名 base64url、Cloudflare AI Gateway 透传——各工具以「第一时间支持热门新模型」争夺开发者默认选择，这要求 CLI 架构具备模型无关的抽象层。
7. **开源贡献风险抬头**：Copilot CLI 的可疑文档删除 PR 提醒生态，AI 批量生成 PR 时代需要维护者强化 bot 检测与仓库保护策略；这也是所有高星项目的潜在隐患。

---

*报告数据来源：各仓库 2026-08-21 社区动态日报，统计周期为 2026-08-20 ~ 2026-08-21。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

*数据来源：github.com/anthropics/skills ｜ 数据截止：2026-08-21*

---

## 1. 热门 Skills 排行（TOP 8）

以下按 PR 评论热度排序，**全部处于 OPEN 状态**，尚无 merged/draft 标记。

### ① skill-creator 评估工具链修复（#1298）
- **功能**：修复 `run_eval.py` 对所有 skill 描述一律报告 `recall=0%` 的关键缺陷（安装 eval artifact 为真实 skill、修复 Windows 流读取、触发检测与并行 worker）。
- **社区热点**：对应 Issue #556（12 评论、7 👍，已有 10+ 独立复现），skill-creator 的优化循环当前"对着噪声优化"；另有 #1099、#1050 等多个 PR 从不同角度修复同一 Windows 兼容问题，是社区公认的阻塞级 Bug。
- **链接**：[PR #1298](https://github.com/anthropics/skills/pull/1298)

### ② 文档排版质量 skill（#514）
- **功能**：检测 AI 生成文档的典型排版问题——孤行（1-6 个词溢出到下一行）、寡段（标题滞留页底）、编号错位。
- **社区热点**：用户几乎不会主动提出排版要求，但此类问题普遍存在于所有 Claude 生成文档中，属于典型的"用户无感但高频"质量痛点。
- **链接**：[PR #514](https://github.com/anthropics/skills/pull/514)

### ③ ODT / OpenDocument skill（#486）
- **功能**：创建、填充、读取、转换 OpenDocument 格式（.odt/.ods），支持模板填充与 ODT→HTML 解析，补齐开源办公格式能力。
- **社区热点**：与既有 pdf/docx skill 形成文档格式矩阵，回应 LibreOffice 用户与 ISO 标准格式需求。
- **链接**：[PR #486](https://github.com/anthropics/skills/pull/486)

### ④ frontend-design skill 可执行性改进（#210）
- **功能**：修订前端设计 skill，确保每条指令可在单次对话内落实、行为引导足够具体。
- **社区热点**：本质是 skill 编写方法论的争论——skill 应作为"可执行指令"而非"开发文档"，与 Issue #202「skill-creator 应更新为最佳实践」相互呼应。
- **链接**：[PR #210](https://github.com/anthropics/skills/pull/210)

### ⑤ skill 质量/安全分析器（#83）
- **功能**：新增两个 meta skill——`skill-quality-analyzer`（五维评估：结构与文档 20%、示例、资源……）与 `skill-security-analyzer`。
- **社区热点**：直接回应 Issue #492（43 评论，全仓最高）的信任边界安全担忧，社区对 skill "本身的质量与安全性审查"需求正在显性化。
- **链接**：[PR #83](https://github.com/anthropics/skills/pull/83)

### ⑥ self-audit 交付自检 skill（#1367）
- **功能**：交付前先做机械文件验证（确认每个声明的产物文件存在），再按损害严重度优先级执行四维推理审计；宣称"任意项目、任意技术栈、任意模型"通用。
- **社区热点**：与 #1385「推理质量门流水线」提案联动，反映社区对 AI 输出"交付前把关"的强需求。
- **链接**：[PR #1367](https://github.com/anthropics/skills/pull/1367)

### ⑦ testing-patterns 测试模式 skill（#723）
- **功能**：覆盖 Testing Trophy 测试哲学、单元测试（AAA 模式）、React 组件测试（Testing Library）、"该测什么 vs. 不该测什么"。
- **社区热点**：测试生成是 Claude Code 最高频使用场景之一，"测试哲学"维度使其区别于普通脚手架类 skill。
- **链接**：[PR #723](https://github.com/anthropics/skills/pull/723)

### ⑧ ServiceNow 平台 skill（#568）
- **功能**：面向 ServiceNow 全平台（ITSM/ITOM/ITAM/SAM Pro/FSM/HRSD/CSM/SPM/SecOps/CSDM/IntegrationHub）的宽口径助手，而非单一脚本工具。
- **社区热点**：企业级平台集成需求旺盛；作者更新至 2026-08-12，维护活跃度高。
- **链接**：[PR #568](https://github.com/anthropics/skills/pull/568)

---

## 2. 社区需求趋势（来自 Issues）

| 趋势方向 | 代表 Issue | 热度信号 |
|---|---|---|
| **安全与信任边界治理** | [#492](https://github.com/anthropics/skills/issues/492)：社区 skill 借 `anthropic/` 命名空间分发，形成信任边界滥用漏洞 | 43 评论，全仓第一 |
| **组织级共享与协作** | [#228](https://github.com/anthropics/skills/issues/228)：要求 org 内 skill 直接共享/链接分发，替代"下载→IM 传输→手动上传" | 16 评论，8 👍 |
| **评估工具链可靠性** | [#556](https://github.com/anthropics/skills/issues/556)：`claude -p` 永不触发 skill（0% 触发率），eval 工具不可信 | 12 评论，7 👍 |
| **Skill 质量标准与审计** | [#202](https://github.com/anthropics/skills/issues/202)（已关闭）：skill-creator 应改为可操作指令；[#1385](https://github.com/anthropics/skills/issues/1385)：三级质量门流水线 | 8 + 4 评论 |
| **Agent 状态与记忆管理** | [#1329](https://github.com/anthropics/skills/issues/1329)：compact-memory 符号化记忆，压缩长程 agent 的上下文占用 | 9 评论 |
| **生态集成（Bedrock / MCP）** | [#29](https://github.com/anthropics/skills/issues/29)：Bedrock 支持；[#16](https://github.com/anthropics/skills/issues/16)：Skill 暴露为 MCP 协议 | 各 4 评论 |

**小结**：社区最期待的新方向已从"更多功能型 Skill"转向 **Skill 生态的基础设施**——安全分发、组织级共享、评估工具可靠性与技能质量标准。

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃、问题明确，且仍在持续更新，**近期落地概率较高**：

| PR | Skill / 修复 | 潜力理由 |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator eval 全面修复 | 直击阻塞性 bug（0% recall），多 PR 汇聚同一问题，合入后效应最大 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit 交付自检 | 结构化完整（v1.3.0），与 #1385 提案形成延续，作者跟进积极 |
| [#568](https://github.com/anthropics/skills/pull/568) | ServiceNow 平台 | 企业级需求明确，最近更新（08-12）显示作者仍在维护 |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel 复古游戏开发 | 绑定知名开源引擎（kitao/pyxel）与 MCP server，生态基础好，更新至 07-15 |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | 测试方法论完整，填补高频场景空白 |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT 文档处理 | 格式矩阵补全，需求可预期，不依赖外部系统 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 问题普遍、修复独立，改动面小易合入 |

> 注意：以上 PR 全部标注 [OPEN]，无一合并——官方合并节奏偏慢是社区当前的一个隐忧（部分 PR 已悬挂 3-8 个月）。

---

## 4. Skills 生态洞察

> **社区最集中的诉求已从"新增功能 Skill"转向 Skill 生态的可信基础——安全分发的信任边界、评估工具的正确性、以及 Skill 自身的质量与审计标准。**

这一判断有三重证据：最高热度的 Issue（#492，43 评论）指向仓库命名空间的信任滥用；第二高热度的缺陷（#556，12 评论）指向评估工具链"对着噪声优化"这一信任坍塌点；而 #83 / #1367 / #1385 等 meta-skill 提案则显示，社区开始自发为 Skill 生态补齐"质检员"与"审计员"角色。

---

# Claude Code 社区动态日报 — 2026-08-21

## 今日速览

过去 24 小时连续发布 **v2.1.237** 与 **v2.1.238**：新增「Concise」输出风格与 readline 键位绑定，并修复了 LLM 网关场景下的提示缓存问题。社区讨论焦点集中在**模型输出质量退化**（#77136，314 👍）与**网络安全阻断误报**（#84352，132 评论）两大长期议题上。此外，8 月 20 日晚间新浮现的 **MCP Apps 小部件渲染回归**与**桌面端 GitHub 速率消耗**问题也迅速获得社区关注。

---

## 版本发布

### v2.1.238
[查看 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.238)

- 新增 `keybindingFlavor` 设置：设为 `"readline"` 可让提示符中的 **Ctrl+W** 删除到前一个空白字符（与 Bash 行为一致）；默认 `"classic"` 行为不变。
- 插件市场：位于 URL 市场或目录条目上的 `headersHelper` 现在可运行一条命令（原 release note 此处截断，详见官方发布说明）。

### v2.1.237
[查看 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.237)

- 修复了使用 **LLM 网关**或自定义 base URL 会话的提示缓存问题。
- 新增内置 **「Concise」输出风格**：Claude 会直接给出结果，跳过前言与叙述，但工作完成度不变。可在 `/config` 的 Output style 中选择。

---

## 社区热点 Issues

### 1. 模型输出质量：重复修辞套路与连贯性退化 🚨
[#77136](https://github.com/anthropics/claude-code/issues/77136) | 49 评论 | 314 👍 | 开放

Claude 4.7、4.8、5.0 及 Fable 模型被反馈「越来越倾向于输出重复的修辞口头禅」，即便给出明确的风格指示，仍难以生成连贯的散文。这是当前社区关注度最高的 Issue（👍 数断层第一），反映了开发者对模型文本生成质量的普遍担忧。

### 2. 已批准组织仍遭网络安全阻断
[#84352](https://github.com/anthropics/claude-code/issues/84352) | 132 评论 | 21 👍 | 开放

已通过 Cyber Verification Program 批准的 Claude.ai 组织再次遭遇 cyber-safeguard 阻断，验证门户显示「Under review」而非已批准状态。132 条评论说明影响范围较广，且涉及「批准后失效」的信任问题。

### 3. Task 工具缺少 cwd 参数，Git worktree 场景受阻
[#12748](https://github.com/anthropics/claude-code/issues/12748) | 16 评论 | 26 👍 | 开放

请求为 Task 工具添加 `cwd` 参数，以支持为子代理设置工作目录（如 Git worktrees）。这是一个自 2025 年 11 月提出的长期增强请求，社区关注度持续累积。

### 4. /clear 继承旧会话名称，导致 /resume 列表重名
[#61172](https://github.com/anthropics/claude-code/issues/61172) | 12 评论 | 15 👍 | 开放

macOS 上执行 `/clear` 后，新会话继承了上一会话的名称，导致 `/resume` 中出现多个同名会话。问题已确认可复现，影响日常会话管理。

### 5. Claude Max 付款成功但账户仍为 past_due
[#64480](https://github.com/anthropics/claude-code/issues/64480) | 10 评论 | 0 👍 | 开放

发票已支付但账户仍处于 past_due 状态，Claude Code 访问被阻止，且取消页面卡死。属于账户/计费同步问题，可能影响付费用户的正常使用。

### 6. MCP Apps 小部件在版本协商后停止渲染 🆕
[#88370](https://github.com/anthropics/claude-code/issues/88370) | 3 评论 | 开放

2026-08-20 晚间，客户端与服务端均无相关变更的情况下，所有 MCP Apps 小部件（`_meta.ui.resourceUri`）停止渲染。用户推测与 2.1.234 起分阶段上线的 `server/discover` 版本协商有关。新报告，值得密切关注。

### 7. 桌面端 GhRestClient 耗尽 GitHub GraphQL 速率限制 🆕
[#88320](https://github.com/anthropics/claude-code/issues/88320) | 2 评论 | 开放

macOS 桌面应用中，每次会话聚焦消耗约 640 点、每轮开始约 2,000 点 GitHub GraphQL 配额，正常使用几分钟内即可耗尽 5,000 点/小时的个人限制。属于典型的资源消耗异常，会影响重度依赖 GitHub API 的开发者。

### 8. 代理对 CLAUDE.md 规则与记忆的遵循仍不理想
[#88285](https://github.com/anthropics/claude-code/issues/88285) | 3 评论 | 开放

用户投诉代理「不学习」、会故意遗忘 CLAUDE.md 中的规则，目前最有效的强制手段仍是 hook 物理拦截违规行为。该问题延续了社区对代理长期记忆与规则遵循能力的持续关注。

### 9. resume 显示陈旧消息：上下文压缩导致 parentUuid 链断裂
[#46603](https://github.com/anthropics/claude-code/issues/46603) | 5 评论 | 1 👍 | 开放

`claude --resume <session-id>` 可能显示数天前的消息而非最近对话，根因是上下文压缩创建的新消息引用了已删除的 `parentUuid`。问题已定位到根因，等待官方修复。

### 10. Windows 路径编码剥离非拉丁字符，存在数据丢失风险
[#70674](https://github.com/anthropics/claude-code/issues/70674) | 5 评论 | 2 👍 | 已关闭

Windows 上路径编码会剥离所有非拉丁字符，导致不同目录互相冲突、会话跨项目可见、清理时造成数据丢失。该问题已关闭，但严重性极高（涉及数据安全），值得开发者关注后续修复验证。

---

## 重要 PR 进展

过去 24 小时内**无新增或更新的 Pull Requests**，可能处于版本发布后的合并静默期。

---

## 功能需求趋势

从近期 Issues 中可提炼出以下社区重点关注的功能方向：

- **代理长期记忆与规则遵循**（#88285、#77136）：社区不仅要求模型生成更优质的文本，还要求代理更可靠地遵守 CLAUDE.md 与项目内规则。
- **子代理工作目录控制**（#12748）：Git worktree 等场景需要 Task 工具支持 `cwd` 参数。
- **代理团队外部写入契约**（#88332）：为外部进程与代理团队 `inboxes` 通信定义明确的 entry schema 与锁机制。
- **会话状态管理**（#61172、#46603）：会话命名、resume 恢复链路的可靠性成为高频诉求。
- **MCP 生态稳定性**（#88370）：服务端版本协商不应破坏既有小部件与客户端渲染。
- **精细化权限配置**（#76509）：更灵活的 Docker 等命令的权限规则，避免「全有或全无」的授权困境。
- **终端与 IDE 体验**（#65715、#61609）：VS Code 快捷键、WSL2 图片粘贴等交互细节仍被持续提及。

---

## 开发者关注点

- **模型输出质量是当前最大痛点**：#77136 以 314 👍 断层领先，说明多个模型版本均存在文本质量的退化问题，已影响到开发者对模型输出的信任。
- **安全过滤器误报破坏信任**：#84352 中「已批准组织仍被拦截」的反复，动摇了用户对审核体系的信心。
- **计费状态同步问题**：#64480 显示付费墙状态同步异常可能直接阻断工具使用，对商业用户影响较大。
- **Windows 平台数据安全**：#70674 的路径编码问题涉及数据丢失风险，社区希望确保修复方案彻底可靠。
- **新 bug 涌现频率较高**：#88370 与 #88320 均为 8 月 20 日新报告，反映近期版本在 MCP 兼容性与桌面端资源管理上引入了新的回归问题。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-08-21）

> 数据来源：github.com/openai/codex ｜ 覆盖过去 24 小时更新

## 今日速览

今日 Codex 发布 `rust-v0.149.0`，重点带来 `codex agents` 交互式看板和 TUI 目录管理命令 `/cd`、`/pwd`、`/cwd`。社区讨论热度集中在 `/undo` 功能回归、Windows 桌面端稳定性、子代理资源消耗与 Remote/WebSocket 可靠性。PR 侧则密集推进统一 exec、macOS 签名校验、MCP 升级与多模型适配。

## 版本发布

- [rust-v0.149.0](https://github.com/openai/codex/releases/tag/rust-v0.149.0)
  - 新增交互式 `codex agents` 看板：支持搜索、启动、打开、重命名和停止任务，快捷键可配置。
  - 新增 `/cd`、`/pwd`、`/cwd` 命令，用于 TUI 会话中的工作目录管理。
- 另有 `rust-v0.150.0-alpha.1`、`rust-v0.149.0-alpha.7`、`rust-v0.149.0-alpha.4`、`rust-v0.149.0-alpha.3` 预发布版本推送，暂无额外变更说明。

## 社区热点 Issues

以下为过去 24 小时更新最值得关注的 10 个 Issue：

- [Issue #9203：请求恢复 `/undo` 功能](https://github.com/openai/codex/issues/9203)  
  💬 71 ｜ 👍 394  
  社区呼声最高的功能回归请求。用户反馈 Codex 会误删 git 未跟踪文件或修改未提交内容，急需 `/undo` 进行回滚。该 Issue 自 1 月起持续活跃，至今未关闭。

- [Issue #38455：ChatGPT 桌面版反复生成 Computer Use worker 并因 V8 OOM 崩溃（macOS）](https://github.com/openai/codex/issues/38455)  
  💬 33 ｜ 👍 13  
  macOS 上应用空闲约 98 秒后触发 SIGABRT，崩溃时存在 187 个 `computer-use` 线程。旧版本正常，疑似回归问题，影响范围较大。

- [Issue #39162：macOS 打开历史会话会使 ChatGPT 登录态失效并跳回登录页](https://github.com/openai/codex/issues/39162)  
  💬 28 ｜ 👍 21  
  用户打开已有会话后 auth 被重置，被迫重新登录，严重干扰日常使用。

- [Issue #38350：周期性定时任务成功运行后会自动停用](https://github.com/openai/codex/issues/38350)  
  💬 25 ｜ 👍 0  
  多个定时任务未经用户授权从 enabled 变为 paused，影响 Codex Web/Automation 的可信度。

- [Issue #34061：子代理导致 Codex 磁盘占用异常膨胀](https://github.com/openai/codex/issues/34061)  
  💬 20 ｜ 👍 2  
  多子代理会话产生大量磁盘写入，用户反馈 `0.144.6` 下资源消耗不可接受，涉及性能与存储管理。

- [Issue #39771：高推理模式下 WebSocket 空闲超时造成“假死流”](https://github.com/openai/codex/issues/39771)  
  💬 3 ｜ 👍 0  
  模型在 8.5 分钟无文本帧后仍在继续推理，但客户端误判为断流。长推理任务需要更合理的 idle 策略。

- [Issue #39808：子代理 fan-out 会因固定 context/tool/skill 开销反而增加用量](https://github.com/openai/codex/issues/39808)  
  💬 2 ｜ 👍 0  
  多代理并不一定更省用量，每个子代理都要重建上下文。社区开始关注 subagent 的成本模型。

- [Issue #38157：ChatGPT Pro（20x）账户实际获得的是 Pro 5x 的 Codex 用量额度](https://github.com/openai/codex/issues/38157)  
  💬 6 ｜ 👍 5  
  官方 usage API 仍识别为 `plan_type: "pro"`，但实际容量疑似被降级，涉及套餐计费与配额一致性问题。

- [Issue #39161：Windows 桌面版无法归档会话](https://github.com/openai/codex/issues/39161)  
  💬 9 ｜ 👍 14  
  Windows 用户无法归档旧对话；[Issue #39627](https://github.com/openai/codex/issues/39627) 进一步显示 legacy 本地任务仍存在同类问题，新任务则可正常归档。

- [Issue #38364：Windows 子代理面板把已完成代理长期显示为 Active/Working](https://github.com/openai/codex/issues/38364)  
  💬 11 ｜ 👍 0  
  UI 状态与真实执行状态不同步，影响多代理任务的可观测性。

## 重要 PR 进展

- [PR #39809：在 Windows 核心 shell 环境中保留 WINDIR](https://github.com/openai/codex/pull/39809)  
  将 `WINDIR` 加入 Windows 核心环境变量 allowlist，并覆盖 `WinDir` 大小写变体场景，修复 Windows 环境兼容性。

- [PR #39804：Amazon Bedrock 模型改用 multi-agent V1](https://github.com/openai/codex/pull/39804)  
  因 Bedrock 不支持 multi-agent V2 所需的 response items，通过归一化模型目录让其使用 V1，兼容性问题修复。

- [PR #39802：优化大小写不敏感的线程历史匹配](https://github.com/openai/codex/pull/39802)  
  用单调 span cursor 避免每次匹配都重扫全部字符，降低长历史会话下的搜索开销。

- [PR #39798：更新 `rmcp` 到 3.1.3](https://github.com/openai/codex/pull/39798)  
  升级 MCP 相关依赖，保留认证/可重试传输分类，并防止无关 discovery 错误触发 legacy fallback。

- [PR #39786：支持 host 已接受的 exec-server WebSocket](https://github.com/openai/codex/pull/39786)  
  允许 embedding host 通过已认证的 Axum WebSocket 构造远程环境，对 Remote/Embedding 场景很重要。

- [PR #39785：为自定义模型提供商增加 turn 成本遥测](https://github.com/openai/codex/pull/39785)  
  非 OpenAI provider 的 turn cost 可走各自 endpoint 上报，并排除 Amazon Bedrock，提升多云成本可观测性。

- [PR #39784：为 rollout 迁移失败增加分类](https://github.com/openai/codex/pull/39784)  
  将迁移失败原因序列化为结构化 `RolloutMigrationFailureReason`，便于分组分析和排查。

- [PR #39776：启动或安装前校验 Codex App 签名](https://github.com/openai/codex/pull/39776)  
  macOS 上强制对 Codex bundle 进行 OpenAI 签名团队校验，提升供应链安全。

- [PR #39772：统一 shell 执行为 unified exec](https://github.com/openai/codex/pull/39772)  
  用 `exec_command` / `write_stdin` 统一 shell 交互面，移除旧 shell-selection 配置，同时保留兼容旧模型元数据。

- [PR #39777：初始 exec 连接时重试瞬时 registry 故障](https://github.com/openai/codex/pull/39777)  
  对 Noise rendezvous 连接过程中的超时、HTTP 状态码、离线环境等瞬时错误增加重试，增强 Remote/exec 稳定性。

## 热门 Discussions

### Ideas

- [Discussion #2807：为 Codex 生成的提交追加 `Co-authored-by: Codex`](https://github.com/openai/codex/discussions/2807)  
  💬 10 ｜ 👍 78  
  希望 Codex 支持 GitHub 可识别的 co-author trailer，提升 AI 贡献的透明度和可审计性。

- [Discussion #39801：`/loop` 定时唤醒与可选安全退避](https://github.com/openai/codex/discussions/39801)  
  💬 0 ｜ 👍 1  
  提议增加 cron 定时唤醒能力，让 Codex 在无人值守时继续跟踪外部数据源或定时恢复任务。

### General

- [Discussion #9956：更新 Codex 贡献指南](https://github.com/openai/codex/discussions/9956)  
  💬 9 ｜ 👍 22  
  社区讨论 AI 大规模生成代码对开源贡献模式的冲击，建议重新设计 contribution guidelines。

### Show and tell

- [Discussion #38815：用 Codex 构建跨九家 LLM API 的质量调整成本对比工具](https://github.com/openai/codex/discussions/38815)  
  💬 1 ｜ 👍 1  
  分享 TokenGauge Workbench：不只比较最低 token 单价，而是做质量调整后的成本对比。

- [Discussion #39579：清理 Codex Desktop 陈旧全局状态的保守脚本](https://github.com/openai/codex/discussions/39579)  
  💬 0 ｜ 👍 1  
  提供 zsh 脚本清理桌面端 sidebar 缓存/全局状态映射，且不删除对话数据。

## 功能需求趋势

- **撤销与会话安全**：`/undo` 回归呼声极高；新增 `/cd`、`/pwd`、`/cwd` 也表明社区需要更强的 TUI 会话控制。
- **任务编排与自动化**：`codex agents` 看板、定时任务可靠性、`/loop` 提议显示开发者希望 Codex 能承担更多长期/无人值守任务。
- **成本与资源管理**：子代理磁盘占用、subagent fan-out 固定开销、turn cost 遥测都指向“多代理成本透明化”需求。
- **平台兼容性**：Windows 桌面端问题大量出现，同时 PR 侧也在补 WINDIR、exec-server WebSocket、Bedrock multi-agent 兼容性。
- **可配置性与可观测性**：从可配置快捷键、TUI status line 到 tool-result 遥测限制，社区希望更多行为可自定义、可观测。

## 开发者关注点

- **Windows 桌面端稳定性最突出**：归档失败、子代理面板状态不同步、`apply_patch` 挂起、应用无法重启等问题高频出现。
- **数据保护意识增强**：`/undo` Issue 获得 394 个 👍，说明用户越来越担心 Codex 对未跟踪/未提交文件的破坏性操作。
- **Remote 与异步任务可靠性不足**：WebSocket 假死、Android Remote 30 秒超时、定时任务自动停用等，削弱了无人值守场景的信任度。
- **账号/配额问题影响用户体验**：macOS 登录态失效、MFA 误导向、Pro 20x 容量被降级等账号相关问题需要优先处理。
- **子代理成本需要更透明**：开发者不仅关注速度，也在关注多代理模式下磁盘、context、token 和总用量的实际开销。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-08-21）

> 数据来源：github.com/google-gemini/gemini-cli | 覆盖过去 24 小时更新

## 今日速览

过去 24 小时 Gemini CLI 以稳定性与安全修复为主：发布 nightly v0.56.0，修复了“带工具/媒体时空白文本轮次被丢弃”的问题；多个 P1 级 bug 仍在发酵，集中在子代理误报成功、通用代理挂起、shell 执行卡死。PR 侧重点则覆盖 Git 环境变量错误、macOS 沙箱逃逸防护、扩展环境变量注入、Whisper 本地语音可靠性等关键修复。

## 版本发布

### v0.56.0-nightly.20260820.ge90c63fa1

- 修复：保留带工具或媒体时的空文本轮次（@DavidAPierce，PR [#28892](https://github.com/google-gemini/gemini-cli/pull/28892)）
- 生成 v0.57.0-preview.0 的 Changelog（@gemini-cli-robot，PR [#28918](https://github.com/google-gemini/gemini-cli/pull/28918)）

发布链接：[v0.56.0-nightly.20260820.ge90c63fa1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260820.ge90c63fa1)

## 社区热点 Issues

1. **子代理 MAX_TURNS 后误报 GOAL 成功，中断被隐藏** [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)  
   `codebase_investigator` 子代理实际已达到最大轮次、未执行分析，却向上层报告 `success / GOAL`。对自动化工作流是严重误导，当前为 P1 且进入 `need-retesting`。社区讨论活跃，共 12 条评论。

2. **通用代理（generalist agent）挂起** [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)  
   一旦交由 generalist agent 执行，即使只是创建文件夹也会永久卡住，用户等待 1 小时后只能取消。临时 workaround 是明确禁止 defer 到子代理。P1、8 条评论、8 👍，社区反应强烈。

3. **shell 命令执行完成后卡在 “Waiting input”** [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)  
   极简单的 CLI 命令执行完后，Gemini 仍显示命令处于活动状态并等待输入。属于高频交互卡死问题，P1、4 条评论、3 👍。

4. **Auto Memory 日志缺少确定性脱敏** [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)  
   本地 transcript 内容会在后台提取 agent 的 prompt 要求脱敏之前，就已经进入模型上下文；同时服务日志可能记录已有 skill 内容。P2 安全类问题，社区关注隐私风险。

5. **Auto Memory 对低信号 session 无限重试** [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)  
   低质量 session 因为 agent 决定不读取 transcript 而始终未被标记处理，导致反复被捞起重试。P2、5 条评论，属于记忆系统效率问题。

6. **利用模型 bash 能力：零依赖 OS 沙箱 + 执行后意图路由** [Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873)  
   提议让 Gemini 3 原生 bash 工具链在安全沙箱内运行，并在命令执行后进行意图路由。P2 enhancement，8 条评论，代表“模型能力 + 安全边界”的重要架构方向。

7. **评估 AST-aware 文件读取、搜索与代码库映射** [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)  
   EPIC，旨在通过 AST 工具减少误读 token 开销、提升多轮代码导航效率。P2、7 条评论，是当前 token 优化方向的关键议题。

8. **组件级评估（Component Level Evals）** [Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353)  
   在已有 76 个 behavioral eval tests 基础上，继续建设面向 6 个 Gemini 模型的组件级评估体系。P1 EPIC，共 7 条评论，反映官方对评估基建的投入。

9. **browser 子代理在 Wayland 下失败** [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)  
   browser subagent 在 Wayland 环境直接以 `GOAL` 结束但实际未完成任务。P1、4 条评论，影响 Linux 桌面用户。

10. **工具数量超过 128 时触发 400 错误** [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)  
    当可用工具过多时 Gemini CLI 会直接遇到 400 错误，社区期望能按需裁剪工具范围。P2、3 条评论，暴露了工具扩展性的边界。

## 重要 PR 进展

1. **修复 GIT_CONFIG_\* 环境变量三元组不一致** [PR #28938](https://github.com/google-gemini/gemini-cli/pull/28938)  
   `sanitizeEnvironment()` 可能生成 git 无法解析的 `GIT_CONFIG_*`，导致所有 git 调用直接失败。该 PR 让环境变量保持内部一致，属于高影响修复。

2. **移除不安全的 `diff.external` 覆盖** [PR #28930](https://github.com/google-gemini/gemini-cli/pull/28930)  
   之前 PR 给 git 环境添加 `diff.external=''` 试图禁用外部 diff，但 git 不会把空值当作“禁用”，反而会破坏 git 操作。该 PR 回退此行为。

3. **避免持久化“响应中断”占位文本** [PR #28939](https://github.com/google-gemini/gemini-cli/pull/28939)  
   修复被中断的工具响应回合后，模型中插入并持久化 `[The previous response was interrupted...]` 占位文本的问题，避免后续上下文污染。

4. **History rollback 与 retry nudge 优化** [PR #28934](https://github.com/google-gemini/gemini-cli/pull/28934)  
   优化工具调用的取消回滚与重试提示，减少上下文膨胀、降低 API 请求量，并最大化 prefix caching 命中率。

5. **扩展安装需对环境变量变更二次确认** [PR #28863](https://github.com/google-gemini/gemini-cli/pull/28863)  
   将 MCP server 环境配置纳入 consent 字符串，并过滤自定义环境变量，防止扩展在未授权情况下注入运行时环境变量。

6. **macOS Seatbelt 沙箱隔离 Docker/容器运行时资源** [PR #28935](https://github.com/google-gemini/gemini-cli/pull/28935)  
   拒绝访问容器运行时 daemon socket、CLI 二进制、XPC 服务与 POSIX 共享内存，防止通过 Docker Desktop VirtioFS 等挂载点逃逸沙箱。

7. **预览模型被静默替换时发出警告** [PR #28828](https://github.com/google-gemini/gemini-cli/pull/28828)  
   当用户请求 preview 模型但账号无对应 entitlement 时，当前实现会静默回退到 `auto-gemini-2.5`。该 PR 要求明确警告用户。

8. **WhisperModelManager 原子下载与失败清理** [PR #28917](https://github.com/google-gemini/gemini-cli/pull/28917)  
   模型下载改为写入 `.downloading` 临时文件，完成后原子重命名；失败时清理残留，避免本地语音模式下模型文件损坏。

9. **WhisperTranscriptionProvider 支持 stdout 行缓冲** [PR #28916](https://github.com/google-gemini/gemini-cli/pull/28916)  
   修复任意 stdout chunk 边界导致时间戳文本行被拆开、最终丢弃的问题，提升本地语音识别稳定性。

10. **修复 agents mode 禁用后仍运行子代理** [PR #28867](https://github.com/google-gemini/gemini-cli/pull/28867)  
    修复 v0.33.0 引入的回归：即使用户在配置中禁用 agents mode，`loadBuiltInAgents()` 仍会在 `AgentRegistry` 初始化时注册并运行子代理。

## 功能需求趋势

- **Agent 可靠性与可控性**：子代理不应误报成功、不应无故挂起；用户希望禁用 agents mode 后能彻底关闭子代理，同时也希望 subagent 轨迹可分享、可审计。
- **安全与沙箱边界**：多个需求/修复指向“让模型自由使用 bash 但必须沙箱化”，包括零依赖 OS 沙箱、macOS Seatbelt 隔离、扩展环境变量授权、Auto Memory 脱敏前置化。
- **上下文与 Token 效率**：AST-aware 文件读取、tactful extraction、history rollback 优化、工具数量超限规避，都是社区持续关注的方向。
- **记忆系统改进**：Auto Memory 的低信号 session 处理、无效 patch 隔离、日志脱敏与去重，正在成为独立关注主题。
- **可观测性与评估**：组件级 eval、subagent trajectory 分享、bugreport 携带子代理上下文、模型被静默替换时告警，都体现了开发者对“可解释、可评估”的需求。
- **平台与模型生态**：Windows longpaths、Wayland browser、Whisper 本地语音、Gemini 3.7/3.6 Flash 新模型配置，显示社区对跨平台支持和新模型接入的关注。

## 开发者关注点

- **挂起与卡死是最高频痛点**：通用代理挂起、shell “Waiting input”、vite 创建交互提示卡住、get-shit-done 输出崩溃等，均严重影响实际使用。
- **错误状态报告会误导自动化**：子代理 MAX_TURNS 被当作 GOAL 成功、中断占位文本被持久化，都会污染后续 Agent 决策。
- **Git 与环境安全需要更高优先级**：`GIT_CONFIG_*` 解析失败、`diff.external` 覆盖、扩展环境变量注入、Docker socket 逃逸风险，都是开发者在真实环境中遇到的问题。
- **配置生效与一致性需要加强**：`settings.json` 对 browser agent 不生效、agents mode 禁用后子代理仍运行、preview 模型被静默替换，反映出配置层应有的可预期性不足。
- **Mac/Windows 开发者体验仍待完善**：Windows 下测试套件因权限和 PowerShell 7 缺失而误报失败，macOS 沙箱则需要更严格的容器隔离。

> 说明：本次抓取的数据中未提供 GitHub Discussions 内容，故按简报格式省略该分区。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-08-21）

## 今日速览

今日发布 v1.0.81-6 与 v1.0.81-5 两个补丁版本：前者新增 `defaultMode` / `defaultPermissionMode` 启动设置以及 `copilot login --with-token` stdin 认证方式；后者修复了代理工作期间发送提示词后残留 `(pending)` 副本的渲染问题。社区讨论集中在 **MCP 服务器集成**（OAuth 令牌未桥接、策略误判、检测到但未连接）与**沙箱权限过严**（Windows 下 git 不可用、WSL 受限）两大方向。值得警惕的是，过去 24 小时内唯一更新的 PR #4510 试图删除 README 中全部 Copilot CLI 文档，疑为非预期变更，建议维护者立即关注。

## 版本发布

### v1.0.81-6
- **新增**：`defaultMode` 和 `defaultPermissionMode` 设置，用于为新的交互式会话指定启动模式与审批行为
- **新增**：`copilot login` 支持 `--with-token`，可从 stdin 读取认证令牌
- **改进**：ACP 客户端现在可接收子代理 ID、原始事件订阅，以及实时标题、mod 信息

### v1.0.81-5
- **修复**：代理工作期间发送的提示词在得到回复后，不再于 transcript 底部残留一个重复的 `(pending)` 条目

## 社区热点 Issues

过去 24 小时共有 33 条 Issue 更新，以下为最值得关注的 10 条：

### 1. [#1481 [已关闭] SHIFT + ENTER 应换行却执行了提示词](https://github.com/github/copilot-cli/issues/1481)
- 创建于 2026-02-16，更新于 2026-08-20 | 28 条评论 | 👍 17
- 评论数最高。大多数聊天应用的通用惯例是 `SHIFT + ENTER` 换行、`ENTER` 发送，而 Copilot CLI 恰好对调（`CTRL + ENTER` 换行，`SHIFT + ENTER` 发送），用户普遍反馈“轻微恼人”。长时间未修复，社区关注度持续走高。

### 2. [#4390 [已关闭] 组织已启用模型在目录中缺失（Claude Sonnet 5 / Opus 5 与 Kimi K3）](https://github.com/github/copilot-cli/issues/4390)
- 创建于 2026-08-06，更新于 2026-08-20 | 15 条评论 | 👍 7
- Copilot Business 组织已在后台明确启用 Anthropic 新模型与 Kimi K3，但 Copilot CLI 的模型目录中不可见；选择 `claude-sonnet-5` 直接报 “disabled by your organization”。跨模型提供方的目录同步 bug，直接影响企业用户使用新模型。

### 3. [#4535 [开放] `store_memory` 在 v1.0.81 预发布版中失败：`Instance id is required`](https://github.com/github/copilot-cli/issues/4535)
- 创建于 2026-08-20 | 3 条评论
- 新报告的回归 bug。Rust 运行时调用原生 memory writer 时缺少 instance ID，导致上下文记忆功能整体不可用，影响依赖长期记忆的 agent 工作流。

### 4. [#4439 [已关闭] Copilot CLI 1.0.79 以 RFC 8414 issuer mismatch 拒绝 GitLab MCP OAuth 元数据](https://github.com/github/copilot-cli/issues/4439)
- 创建于 2026-08-11，更新于 2026-08-20 | 5 条评论 | 👍 3
- GitLab Self-Managed MCP 服务器使用 OAuth 2.0 Dynamic Client Registration，但 CLI 对 RFC 8414 issuer 的校验过严，导致自建 GitLab 企业无法完成 MCP 认证。

### 5. [#4096 [已关闭] 第三方 MCP 服务器显示“Connected”但工具缺失（OAuth 令牌未桥接到会话）](https://github.com/github/copilot-cli/issues/4096)
- 创建于 2026-07-11，更新于 2026-08-20 | 6 条评论 | 👍 2
- 在 GitHub Copilot App 中完成 Atlassian Remote MCP 的 OAuth 登录后，UI 显示绿色 “Connected” 徽章，但 CLI 会话始终不出现其工具。OAuth 令牌没有从应用桥接到 CLI 会话，属于身份认证集成缺口。

### 6. [#3162 [已关闭] 1.0.42 将注册表中已列出的自定义 MCP 服务器误报为“被策略阻止”](https://github.com/github/copilot-cli/issues/3162)
- 创建于 2026-05-06，更新于 2026-08-20 | 7 条评论
- 自定义 MCP 服务器已存在于 MCP 注册表中，CLI 仍判定为 “blocked by policy”，属 registry 校验/匹配的 false-negative。

### 7. [#4524 [已关闭] 沙箱模式下 copilot 无法再使用 git](https://github.com/github/copilot-cli/issues/4524)
- 创建于 2026-08-18，更新于 2026-08-20 | 3 条评论
- 最新 enforced-sandbox 版本过于严格：用户已授权整个工作目录和 `~/.copilot`，但 git 操作仍被拦截。沙箱限制已影响基本开发流程。

### 8. [#4206 [已关闭] 组织 MCP 策略下环境页脚永久卡在“Loading:”状态](https://github.com/github/copilot-cli/issues/4206)
- 创建于 2026-07-21，更新于 2026-08-20 | 4 条评论 | 👍 3
- 环境状态页脚永远显示 `◎ Loading: 1 instruction, 40 skills, 1 plugin, 2 agents`，即使 `/env` 显示全部加载完成。当 org 的 MCP 策略存在时，内置 GitHub MCP 握手会卡住，造成 UI 状态与实际不符。

### 9. [#3698 [已关闭] MCP 服务器连接泄漏：卡住的 stdio 服务器无限生成子进程](https://github.com/github/copilot-cli/issues/3698)
- 创建于 2026-06-05，更新于 2026-08-20 | 1 条评论 | 👍 3
- stdio MCP 服务器慢或上游不可达时，CLI 反复生成子进程且从不回收，进程无界堆积，CPU 飙升、整机卡顿。已在 1.0.73 验证，目前仍未合并修复。

### 10. [#4533 [开放] 并行子代理产生时终端 UI 停止消费事件（输入与滚动均失效）](https://github.com/github/copilot-cli/issues/4533)
- 创建于 2026-08-20 | 0 条评论
- 在 1.0.81-4 / 1.0.81-5 预发布通道，当一次对话触发并行子代理块时，终端 UI 立刻失去响应，但 Rust runtime 仍在后台继续工作，子代理模型调用持续数分钟。渲染层事件消费中断，属于预发布通道的严重稳定性问题。

## 重要 PR 进展

过去 24 小时仅有 1 条 PR 更新：

### [#4510 [开放] 从 README 中删除 GitHub Copilot CLI 文档](https://github.com/github/copilot-cli/pull/4510)
- 作者：prioritizedprotection086 | 创建：2026-08-17 | 更新：2026-08-20
- 该 PR 删除了 README 中关于 GitHub Copilot CLI 的全部安装说明与使用指南（含详细文档链接），未附带任何解释。仅有这一条 PR 变化，且未合并。
- **注意**：此变更与项目利益相悖，疑似恶意或非预期提交，强烈建议维护者审查作者身份与动机。

## 热门 Discussions

> 过去 24 小时未提供 Discussions 数据，此部分省略。

## 功能需求趋势

从今日 Issue 与 Release notes 中可提炼出以下高关注功能方向：

1. **MCP 生态稳定性与可观测性**：OAuth 令牌桥接（#4096）、注册表策略误判（#3162）、GitLab 等第三方 MCP 兼容（#4439）、子进程泄漏（#3698）、检测到但未连接（#4542）——MCP 是当前集成层面最大的问题集合。
2. **企业托管策略的灵活性与一致性**：`disableBypassPermissionsMode` 合法枚举值在校验时被拒绝（#4349）、非交互模式绕过该设置（#4528）——企业管理员需要细粒度但不僵化的权限控制。
3. **沙箱/权限模型可用性**：Windows 沙箱破坏 git（#4524）、WSL 沙箱内无法启动 VSCode Remote（#4546）——沙箱在安全与日常开发可用性之间需要更好的平衡。
4. **终端渲染与交互稳定性**：pending 行重复、填满屏幕（#4532）、并行子代理时 UI 冻结（#4533）、`(pending)` 副本（v1.0.81-5 刚修复）——终端 UI 问题是 1.0.81 系列的主要发布阻塞项。
5. **会话状态与跨环境一致性**：Ctrl+Z 后最近会话丢失（#4539）、Remote-SSH 重连后空 transcript（#4529）、WSL 会话语义锚定到 Windows 主机（#4543）、推理 effort 持久化（#4530）——会话生命周期管理需要跨平台统一。
6. **认证与登录流程**：新增 `--with-token` stdin 登录（v1.0.81-6）响应了自动化诉求；同时社区希望解决 SDK 服务器未认证即报 ready 的问题（#4503）。
7. **交互细节**：允许在问题输入框中粘贴图片（#4544）、`/ask` 支持多轮对话（#4538）、`SHIFT+ENTER` 换行（#1481）——开发者对交互体感的细节要求高频出现。

## 开发者关注点

- **MCP “假连接”问题突出**：多个 Issue（#4096、#3162、#4206、#4542）显示 MCP 服务器在 UI 上显示为已连接 / 已批准 / 已检测，但工具在 CLI 会话中实际不可用，排查成本极高，社区对此有明显不满。
- **1.0.81 预发布质量堪忧**：`store_memory` 回归（#4535）、UI 冻结（#4533）、pending 行残影（#4532）在 1.0.81-4/-5/-6 系列密集出现，部分用户已对 pre-release 通道表达信任危机。
- **Windows / WSL 双环境摩擦严重**：#4524、#4543、#4546 显示 Windows 用户同时受沙箱拦截、WSL 路径问题、会话锚定错误困扰，跨平台一致性仍是明显短板。
- **企业管理员对模型目录同步缺乏可见性**：#4390 暴露了组织级模型配置与 CLI 实际取值之间的同步延迟，管理员无法快速判断“模型为什么不可用”是配置问题还是产品 bug。
- **非交互模式权限语义不清晰**：#4528 显示 `-p --allow-all`/`--yolo` 可绕过企业 `disableBypassPermissionsMode` 设置，对安全敏感型组织构成实际风险。
- **对可疑 PR 的警惕**：#4510 这类删除核心文档的 PR 能进入待审队列，也侧面反映了大型开源项目维护中需要加强 bot/恶意提交的自动识别。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-21

## 1. 今日速览
- **v1.18.19 正式发布**，重点新增 Cloudflare AI Gateway 的 OpenAI/Anthropic 原生透传，并进一步对齐 Codex 与 ChatGPT 订阅的速率限制。
- **v2 稳定性成最大焦点**：多起 TUI 崩溃（“remove expects a renderable child object”）及子代理会话初始化被 `sessionID` 阻塞的 Bug 被集中反馈。
- **核心修复节奏密集**：多个 PR 今日关闭/合并，覆盖权限评估规则、配置热重载、并发提示序列化等深度稳定性问题。

## 2. 版本发布
**v1.18.19** ([Release Link](https://github.com/anomalyco/opencode/releases/tag/v1.18.19))

**Core 改进：**
- 为 Cloudflare AI Gateway 模型新增原生 OpenAI 与 Anthropic 透传支持。
- 将 Codex 的速率限制策略与 ChatGPT 订阅限制进一步对齐（感谢 @GameOn223 贡献）。

**Bug 修复：**
- 移除了内置的 Qwen 采样默认值，避免因模型不支持导致请求参数报错。
- 修复了其他已知行为问题（Release 原文尾部截断）。

## 3. 社区热点 Issues
> 以下精选 10 个最具讨论价值与影响范围的 Issue：

- **[#30158] Web UI 终端按钮神秘消失（BUG）** — 12条评论 · 14 👍
  自 v1.15.12 起，Web UI 右上角的终端按钮及部分图标消失，回退至 v1.15.11 才能恢复。这是一个跨多个版本的 UI 回归，影响面较大。
  [查看详情](https://github.com/anomalyco/opencode/issues/30158)

- **[#7675] 安装脚本忽略 OPENCODE_INSTALL_DIR 环境变量** — 10条评论 · 9 👍
  安装脚本硬编码安装至 `$HOME/.opencode/bin`，无视用户自定义路径偏好。开发者呼吁应按 `OPENCODE_INSTALL_DIR` → `XDG_BIN_DIR` 的优先级处理。
  [查看详情](https://github.com/anomalyco/opencode/issues/7675)

- **[#43619] [2.0] 子代理必须使用 sessionID 导致无法创建首个子会话（BUG）** — 9条评论
  文档指明创建新会话时省略 `sessionID`，但实际工具 Schema 要求必填。该冲突直接阻塞了所有依赖子代理的编码协作流程，v2 迁移的严重阻断性问题。
  [查看详情](https://github.com/anomalyco/opencode/issues/43619)

- **[#20458] TUI 退出后鼠标转义序列乱码（BUG）** — 8条评论
  退出 TUI 后终端残留大量乱码（如 `35;89;19M`），该问题与粘滞键/鼠标事件捕获相关，且在不同终端下表现一致。
  [查看详情](https://github.com/anomalyco/opencode/issues/20458)

- **[#42657] TUI 在多子代理会话下延迟严重，渲染线程 CPU 97%** — 3条评论
  同时运行 2-4 个子代理时，TUI 输入延迟高达 1-3 秒。该问题在 Warp、Windows Terminal 和 WezTerm 中均存在，指向并发渲染性能瓶颈。
  [查看详情](https://github.com/anomalyco/opencode/issues/42657)

- **[#34574] AI SDK Effect 运行时内存泄漏，EventTarget 监听器未被清理** — 2条评论
  `opencode web` 服务 RSS 内存从 127MB 在 20 分钟内膨胀至 4.9GB，最终进程无响应。部署在 systemd 下的用户风险极高。
  [查看详情](https://github.com/anomalyco/opencode/issues/34574)

- **[#35107] 会话内存持续增长直至 Bun 进程被杀死** — 4条评论
  `updatePart` 对每次更新执行 `structuredClone(part)`，单个 Part 最高达 488KB。在 200 个会话中存在约 93K 个更新事件，导致 mimalloc 堆压力骤增。
  [查看详情](https://github.com/anomalyco/opencode/issues/35107)

- **[#43726] filesystem_move_file 竞态条件导致数据丢失（严重）** — 2条评论
  当 `source == destination` 时触发竞态条件（10 次测试中 3 次复现），造成静默数据丢失。官方标记为 CRITICAL 级别。
  [查看详情](https://github.com/anomalyco/opencode/issues/43726)

- **[#41078] TUI 首次渲染被 4.5MB Provider 配置阻塞** — 1条评论
  首帧画面约 0.6s 出现，但完整 UI 加载需等待约 3s。开发者建议渲染 Shell 骨架，异步加载模型列表等数据。
  [查看详情](https://github.com/anomalyco/opencode/issues/41078)

- **[#43054] 特定模型报错 Forbidden: {"model":"big-pickle"}** — 4条评论
  仅 `hy3-free` 和 `deepseek flash free` 可用，其他模型请求均被强制拒绝。疑似网关层模型 ID 映射错误，影响用户模型选择范围。
  [查看详情](https://github.com/anomalyco/opencode/issues/43054)

## 4. 重要 PR 进展
> 综合筛选 10 条实质性开发或刚关闭的高价值 PR：

- **[#43718] feat(plugin): 暴露会话选择方法** — [查看详情](https://github.com/anomalyco/opencode/pull/43718)
  为 Effect 插件暴露 `session.switchAgent` 和 `session.switchModel` 方法，并适配了 Promise 插件宿主。该 PR 进一步完善了插件 API 的操控能力。

- **[#43637] refactor(app): 建立 Session 垂直切片** — [查看详情](https://github.com/anomalyco/opencode/pull/43637)
  将原本只分布在 `pages/session.tsx`（2005 行）及相关组件中的 Session 逻辑抽取为独立垂直切片，重构了路由解析与数据投影关系，极大降低后续维护成本。

- **[#40125] feat(opencode): 允许按 MCP 服务器配置信任** — [查看详情](https://github.com/anomalyco/opencode/pull/40125)
  通过证书指纹固定信任指定的自签名证书，替代全局禁用验证的粗粒度方案，解决私有 CA 场景下的安全问题。

- **[#43728] fix(tui): 对齐信息对话框** — [查看详情](https://github.com/anomalyco/opencode/pull/43728)
  统一了 Debug 对话框与 Status 对话框的尺寸及布局逻辑。关闭 #42180 与 #42181。

- **[#37968] fix(core): 限制工具结构化输出大小为 16 KiB** — [查看详情](https://github.com/anomalyco/opencode/pull/37968)
  超限内容溢出至托管存储，仅保留紧凑摘要，防止对 SQLite 行和全局事件的膨胀。对降低内存与磁盘压力有显著作用。

- **[#37936] fix(opencode): 权限评估采用“最具体模式优先”** — [查看详情](https://github.com/anomalyco/opencode/pull/37936)
  用 `findLast()` 的优先级逻辑改为“最具体模式获胜”，修复了权限匹配顺序不确定的问题，关闭 #37935、#24335 等四个相关 Issue。

- **[#37983] fix(tui): 重连后重新挂载会话** — [查看详情](https://github.com/anomalyco/opencode/pull/37983)
  修复了全局 SSE 异常后 TUI 停止接收事件、已挂载会话不同步的问题，保证断线重连后的会话状态一致性。

- **[#37980] fix(core): 序列化提示结果** — [查看详情](https://github.com/anomalyco/opencode/pull/37980)
  避免并发回复对同一个表单、提问或权限请求进行多次结算，防止状态污染。关闭 #34853。

- **[#37979] fix(core): 重新加载配置文件目录变更** — [查看详情](https://github.com/anomalyco/opencode/pull/37979)
  修复了配置文件目录内部文件被修改但不触发重载的问题，此前仅监听条目列表变化。关闭 #37429。

- **[#37932] fix(console): 为 Zen/Go API 增加 CORS 预检支持** — [查看详情](https://github.com/anomalyco/opencode/pull/37932)
  修正仅 `/zen/v1/models` 等带有 OPTIONS 支持的现状，为所有 Zen/Go 端点补齐 CORS 头，修复浏览器端跨域调用 404 问题。

## 5. 热门 Discussions
（本期数据源未提供 Discussion 板块内容，故省略）

## 6. 功能需求趋势
综合今日 Issues 与 PR，社区对 OpenCode 的功能期待明显集中在以下四个方向：

- **UI 自定义与交互增强**：要求增加消息 “Fork” 按钮（#36960）、持久化禁用右下角上下文侧边栏（#40086）、自定义根目录文件存放位置（#43700），以及桌面端记住与跟踪项目文件夹迁移（#31074）。
- **性能优化（内存与渲染）**：围绕 TUI 并发渲染卡顿（#42657）、Web 服务内存泄漏（#34574）、Bun 运行时堆压力（#35107）引发大量讨论，开发者呼吁优先优化渲染线程与 `structuredClone` 的调用频率。
- **v2 迁移稳定性**：v2 的 TUI 崩溃（#43591、#43696）、子代理创建阻塞（#43619）令早期采用者受阻，社区急需 v2 与现有 CLI/配置的兼容性确认及更稳健的调度逻辑。
- **模型与网关接入灵活性**：多起模型被网关拒绝（#43054）以及对 Bedrock 中 DeepSeek 版本错误前缀的反馈（#43679），说明用户对跨区域推理、模型 ID 映射的准确性和 SaaS 厂商透传能力十分敏感。

## 7. 开发者关注点
- **副作用与数据安全**：`filesystem_move_file` 竞态条件导致数据丢失（#43726）让开发者对文件操作类工具的安全边界深感担忧，期待更严谨的原地移动短路保护。
- **内存与资源占用失控**：`opencode web` 的 RSS 在活跃使用中数倍增长，开发者希望框架层能提供更可预期的内存上限，并彻底修复 EventTarget 监听器泄漏。
- **配置系统反直觉**：安装脚本忽略环境变量（#7675）与 Web UI 按钮因版本升级消失（#30158）暴露了配置/UI 变更缺乏迁移文档与基线测试，开发者在升级前后需要频繁手动回退。
- **并发与权限逻辑**：多个会话同时执行时权限请求被多次结算、配置目录修改无感知重载、权限最终匹配逻辑不确定（#37980、#37979、#37936），均是影响多人协同时端的重要稳定性隐患。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 · 2026-08-21

## 今日速览

过去 24 小时 Pi 仓库无新版本发布，社区讨论热度集中在 Windows 使用体验、上下文压缩失效、以及命令别名等易用性需求上。TUI 渲染与稳定性相关修复迎来一波 PR 合并潮，同时 Gemini 3.x 系列模型兼容性问题成为新焦点。

## 社区热点 Issues

1. **#7547 [Windows] 你如何在 Windows 上使用 Pi？遇到了哪些问题？** — 评论 35 · 👍 1 · 开放中
   [链接](https://github.com/earendil-works/pi/issues/7547)
   作者发起社区调研，试图弄清 Windows 下 Pi 的多种运行方式，以便核心团队确定优先修复方向。35 条评论反映出 Windows 用户群体庞大且痛点分散。

2. **#6879 [bug] 上下文超 100% 后自动压缩永不触发，直到 provider 溢出** — 评论 18 · 👍 17 · 开放中
   [链接](https://github.com/earendil-works/pi/issues/6879)
   高强度 agentic 会话中上下文占用超过阈值后自动压缩未触发，直到 API 在 373k tokens 处拒绝请求。17 个 👍 表明大量用户深受其害。

3. **#5023 [bug] 终端无故滚动到开头** — 评论 17 · 已关闭
   [链接](https://github.com/earendil-works/pi/issues/5023)
   模型工作时终端随机跳转到会话开头并快速滚动回末尾，用户无任何操作。这是一个长期存在的 TUI 渲染问题。

4. **#6300 [bug] Windows 下每次按键输入行均被重绘** — 评论 8 · 开放中
   [链接](https://github.com/earendil-works/pi/issues/6300)
   Windows 10 的 cmd.exe 和 Windows Terminal 下，输入时每个字符都换行显示，TUI 交互几乎不可用。

5. **#8157 [refactor] 将 grok-mermaid 迁移至 lovely-mermaid** — 评论 7 · 👍 1 · 开放中
   [链接](https://github.com/earendil-works/pi/issues/8157)
   作者指出 grok-mermaid 是原 grok 渲染器的 1:1 移植，继承了大量 corner case，建议迁移到维护更活跃的 lovely-mermaid。

6. **#6996 [bug] Gemini 3.x 工具调用因缺少 thought_signature 失败** — 评论 5 · 开放中
   [链接](https://github.com/earendil-works/pi/issues/6996)
   使用 gemini-3.5/3.6-flash 时，工具结果回传会因历史中缺失 thought_signature 而报错，阻断多轮工具调用。

7. **#8133 [feature] 按模型配置压缩参数** — 评论 3 · 👍 3 · 开放中
   [链接](https://github.com/earendil-works/pi/issues/8133)
   提议在 settings.json 中增加 `compaction.profiles`，按模型 ID 设置不同的 reserveTokens 等参数，全局值作为回退。

8. **#8409 [bug] 回归：中止的 turn 以 stopReason "error" 而非 "aborted" 结束** — 评论 3 · 已关闭
   [链接](https://github.com/earendil-works/pi/issues/8409)
   0.84.2 中，在工具调用期间中止时，部分 turn 错误地以 error 结尾，结果取决于中止时机。

9. **#5340 [feature] 为 /settings 和 /quit 添加 /config 与 /exit 别名** — 评论 5 · 已关闭
   [链接](https://github.com/earendil-works/pi/issues/5340)
   用户从 Claude Code 等工具迁移后，肌肉记忆让他们习惯输入 /exit；同一诉求在 #4538、#5161、#5863、#6193、#8081 中反复出现。

10. **#8396 [bug] 自动重试在持久化会话分支中留下已被取代的 assistant 错误** — 评论 2 · 已关闭
    [链接](https://github.com/earendil-works/pi/issues/8396)
    AgentSession 在决定自动重试前先将所有 assistant 消息持久化，重试成功后错误消息仍残留在 SessionManager 的活动分支中，污染会话记录。

## 重要 PR 进展

1. **#8416 fix: 将 triggerTurn-false 自定义消息持有至工具批次结束**
   [链接](https://github.com/earendil-works/pi/pull/8416)
   修复流式输出中自定义消息可能插入 toolCall 与 toolResult 之间、导致严格 provider 拒绝下一轮请求的问题。

2. **#8398 feat: 新增 color values 与主题样式**
   [链接](https://github.com/earendil-works/pi/pull/8398)
   由 mitsuhiko 提交的大规模 TUI 与主题重构，直接暴露颜色值，既方便 agent 做更高级的样式控制，也为未来非终端 UI 铺路，同时保留旧 API 兼容。

3. **#8407 fix(tui): 复制软换行文本时保留逻辑行**
   [链接](https://github.com/earendil-works/pi/pull/8407)
   全屏 TUI 下鼠标选择复制会把视觉换行变成硬换行，破坏段落与 URL，此 PR 修复选区边界的逻辑行判断。

4. **#8395 fix(coding-agent): 避免大 diff 渲染时 spread 导致崩溃**
   [链接](https://github.com/earendil-works/pi/pull/8395)
   修复 #8036：约 14.5MB 的大 diff 在 ToolExecutionComponent 渲染时因 `lines.push(...contentLines)` 超出 V8 调用栈上限而崩溃，改为循环 push。

5. **#8405 FD-2120: kimi-coding 思维签名归一化为 base64url**
   [链接](https://github.com/earendil-works/pi/pull/8405)
   修复 kimi-coding 在推理启用后第二轮回合报 “malformed encrypted reasoning content: invalid base64url encoding” 的问题。

6. **#8118 feat(ai): 新增 requiresNonNullAssistantContent 兼容标志**
   [链接](https://github.com/earendil-works/pi/pull/8118)
   部分 OpenAI 兼容网关拒绝 content 为 null 的 assistant 消息（如纯工具调用消息），此标志允许强制发送空字符串，且不影响 tool result 之间的 assistant 插入逻辑。

7. **#8383 fix(ai): gemini-3.7-flash 禁用思考时发送 LOW**
   [链接](https://github.com/earendil-works/pi/pull/8383)
   解决 gemini-3.7-flash 在思考级别为 MINIMAL 时返回 400 INVALID_ARGUMENT 的问题，需改用 LOW。

8. **#8399 feat(settings-selector): 显示 “default” 并使其可搜索**
   [链接](https://github.com/earendil-works/pi/pull/8399)
   配合 ctrl+S 保存模型/思考设置的热键，/model 与 /thinking 选择器现在会显示默认标记并支持按 “default” 搜索。

9. **#8363 fix(tui): 防止表格链接颜色泄漏**
   [链接](https://github.com/earendil-works/pi/pull/8363)
   修复 markdown 表格中链接颜色在单元格填充与边框处泄漏的问题，并补充了回归测试。

10. **#8302 feat(ai): Amazon Bedrock Mantle 支持**
    [链接](https://github.com/earendil-works/pi/pull/8302)
    Amazon 通过新 Mantle API 提供 GPT-5.x 等模型，此前这些模型被错误路由到 Converse 导致 Validation error。PR 处于 WIP，等待 API key 进行端到端测试。

## 热门 Discussions

**General**

- **#8397 System Prompt in Session**（评论 0 · 👍 1）
  [链接](https://github.com/earendil-works/pi/discussions/8397)
  提问：为何系统提示词没有写入会话的 jsonl 文档？缺乏完整上下文使得会话可观察性分析困难。

- **#8389 repeated Kitty command-finish notifications**（评论 0 · 👍 1）
  [链接](https://github.com/earendil-works/pi/discussions/8389)
  与 #8264 相关：Pi 在 assistant 消息周围重复发送 OSC 133 序列，Kitty 终端将其解释为 shell 集成命令标记，导致重复通知。作者表示 issue 被标记为 not-planned，因此转向讨论区。

## 功能需求趋势

1. **CLI 命令别名（高频）**：至少 6 个 issue（#5340、#4538、#5161、#5863、#6193、#8081）请求添加 `/exit`、`/config`、`/bye` 等通用别名，反映 Pi 用户大量从 Claude Code / Codex 等工具迁移而来，肌肉记忆成本真实存在。
2. **Windows 平台支持**：#7547 发起大规模用户调研，#6300 暴露输入重绘 bug，Windows 体验是当前最主要的多平台短板。
3. **上下文与压缩管理**：自动压缩触发时机（#6879）、按模型配置压缩参数（#8133）、分叉会话的 prompt cache 失效（#8348）——长会话可靠性仍是核心关切。
4. **新模型 / 提供商适配**：Gemini 3.x 兼容性（#6996、#8383）、Bedrock Mantle（#8302）、Umans AI（#8404）、Concentrate（#8412），社区对快速接入新模型有持续需求。
5. **TUI 渲染稳定性**：终端滚动（#5023）、颜色泄漏（#8363）、软换行复制（#8407）、大 diff 崩溃（#8395）——渲染层 bug 直接影响日常使用。
6. **会话可观察性**：#8397 呼吁将系统提示词纳入会话记录；#8396 的持久化错误残留暴露了会话数据一致性问题。

## 开发者关注点

- **命令别名呼声最高**：多个 issue 不约而同地请求 `/exit`，且用户明确表示“每次输入它都会浪费约 10 个 token”，这种小而具体的痛点最容易积累社区共识。
- **上下文压缩可靠性**：超过 100% 才压缩、API 报错才触发，用户对大上下文场景的信心不足；同时 fork 会话后 prompt cache 完全失效，成本敏感型用户可能因此犹豫。
- **Windows 体验碎片化**：运行方式太多导致官方难聚焦，社区期待官方明确支持的 Windows 配置组合。
- **新模型适配速度**：Gemini 3.x 的 thought_signature 和 thinking level 问题在 issue 出现后 PR 跟进迅速，开发者希望这种节奏能保持。
- **TUI 稳定性**：从滚动跳变到输入重绘、从颜色泄漏到复制换行，渲染 bug 虽小但发生频繁，直接影响日常使用体验，多个 PR 已合并修复，值得用户及时升级验证。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 2026-08-21

## 今日速览

今日发布正式版 **v0.21.15**，核心亮点是 Web Shell 支持通过 composer 或 @ 插入文件附件，并显著提升流式性能与侧边栏同步体验。社区侧，长期存在的 P1 内存无限增长问题（#2128）持续发酵，多个会话恢复与工具调用可靠性 bug 成为热议焦点；安全方面，关于流水线代码执行权限分配的重要讨论（#9556）引发关注。

## 版本发布

**v0.21.15（正式版）**
- Web Shell 支持通过 composer 或 @ 选择插入文件附件
- 改进流式传输性能，侧边栏即时同步
- 相关 PR：[#9405](https://github.com/QwenLM/qwen-code/pull/9405)、[#9477](https://github.com/QwenLM/qwen-code/pull/9477)

**v0.21.11-nightly.20260820**
- Web Shell 审批和 ask-user 对话框改为流内表单
- 修复后台代理假失败问题

此外，多项 DSW EAS SWE + TB smoke 验证（r1-r3）通过，SWE-bench Verified 全部成功。

## 社区热点 Issues

### 1. [#2128](https://github.com/QwenLM/qwen-code/issues/2128) [P1] 长时间会话内存无限增长
创建于 2026-03-05，持续活跃。根因是 UI History 数组无界增长，导致进程内存随运行时间持续攀升且不回收。P1 优先级，影响深度用户。

### 2. [#8382](https://github.com/QwenLM/qwen-code/issues/8382) [P2] 重复 provider 工具调用 ID
用户频繁遇到 "Duplicate provider tool call id" 错误，导致工具调用失败。会话管理核心问题，社区反馈较多（7 条评论）。

### 3. [#9573](https://github.com/QwenLM/qwen-code/issues/9573) [P1] 恢复的会话显示"Tool result missing from saved history"
新报告的 P1 核心 bug：恢复会话时，原本正常完成的工具调用被错误标记为失败。影响会话恢复可信度。

### 4. [#9309](https://github.com/QwenLM/qwen-code/issues/9309) [P3] 压缩功能计数不正确
用户执行 `/compress-fast` 后再次 `/compress`，上下文压缩行为与显示数值异常。token 管理相关，6 条评论。

### 5. [#9556](https://github.com/QwenLM/qwen-code/issues/9556) 安全审查：是否继续授予代码执行权限
关于流水线是否应以调用用户身份执行代码的讨论，涉及 20 轮审查遗留问题，5 条评论，值得安全和 CI/CD 维护者关注。

### 6. [#9597](https://github.com/QwenLM/qwen-code/issues/9597) [P2] 分层内存通过符号链接重复加载 QWEN.md
当 workspace 级 `QWEN.md` 是指向祖先文件的符号链接时，同一物理文件被加载两次。内存管理边界 bug，3 条评论。

### 7. [#9571](https://github.com/QwenLM/qwen-code/issues/9571) [P2] 确认框被默认选中问题
用户输入文字时弹出的确认框会抢占键盘焦点并默认选中，导致误操作。Web Shell UX 问题，3 条评论。

### 8. [#9485](https://github.com/QwenLM/qwen-code/issues/9485) [P2] Web Shell 剪贴板 API 在 HTTP 远程访问时不可用
通过非 localhost HTTP 地址访问 Web Shell 时，所有复制按钮报 "Clipboard API is not available"。已关闭但代表了远程部署场景的常见痛点，5 条评论。

### 9. [#9586](https://github.com/QwenLM/qwen-code/issues/9586) [P2] ACP 重复工具调用断路器留下无结果调用
ACP daemon 会话中，重复 provider 工具调用的熔断逻辑可能使持久化的 `functionCall` 缺少终端 `tool_result` 记录。

### 10. [#8724](https://github.com/QwenLM/qwen-code/issues/8724) 跨会话消息传递功能需求
请求实现同机多个 Qwen Code 会话互相发现、寻址和收发消息，并带有 fail-closed 安全门控。面向 Agent 协作场景，7 条评论。

## 重要 PR 进展

### 1. [#9584](https://github.com/QwenLM/qwen-code/pull/9584) 依赖 CVE 基线清理与安全门强化
升级 OpenTelemetry 至 0.221.x，清除全部高危 CVE；依赖漏洞门从报告转为硬性门禁。

### 2. [#9609](https://github.com/QwenLM/qwen-code/pull/9609) Web Shell 不抢占用户输入焦点
工具审批对话框不再在输入法活跃时强行抓焦点，修复 #9571。

### 3. [#9602](https://github.com/QwenLM/qwen-code/pull/9602) 修复工具显示列表清除时序
将 `checkAndNotifyCompletion()` 中的工具显示清除从 `finally` 块提前至回调前，附回归测试。

### 4. [#9260](https://github.com/QwenLM/qwen-code/pull/9260) 手动会话名称跨 /clear 保留
Web Shell 的手动会话名在 `/clear` 后不再被自动标题覆盖，且标题来源可跨刷新保留。

### 5. [#9527](https://github.com/QwenLM/qwen-code/pull/9527) 沙箱镜像绑定到拉取的摘要
将导出沙箱镜像绑定到 pull 解析的 digest，修复此前未解决的 R11-1、R11-2 Critical。

### 6. [#9500](https://github.com/QwenLM/qwen-code/pull/9500) 同步加载技能状态与历史驱逐
Skill 工具的已加载技能跟踪在 microcompaction、`/compress-fast` 等历史重写后与实际情况对齐。

### 7. [#9596](https://github.com/QwenLM/qwen-code/pull/9596) 审查循环要求测试并裁决不收敛
review 技能三项改进：finding 附带自身验收标准、测试要求、两轮仍未收敛时的明确裁决。

### 8. [#8332](https://github.com/QwenLM/qwen-code/pull/8332) CLI 附件音频桥
新增音频桥接：主模型不支持音频时，通过批量语音模型转写附件，支持交互式、headless 和 ACP 音频提示。标记为不可信的机器转写。

### 9. [#9305](https://github.com/QwenLM/qwen-code/pull/9305) VP 模式短内容底部对齐
修复 VP（Virtual Pager）模式下短对话顶部对齐、composer 与内容间留白的问题（#9300）。

### 10. [#9461](https://github.com/QwenLM/qwen-code/pull/9461) 审查循环不收敛时告知作者
当 review 循环停止收敛时，以一段话向 PR 作者说明原因与信号依据，辅助决策。

## 功能需求趋势

- **Web Shell 体验优化**：文件附件、焦点管理、会话名保留、侧边栏固定与同步稳定性
- **审查流水线自动化**：capture-tui 渲染证据、内容锚定增量审查、收敛裁决与自动修复
- **安全性强化**：CVE 硬门禁、沙箱镜像摘要绑定、代码执行权限最小化
- **会话管理**：跨会话消息传递（#8724）、sessionRotation 会话轮换、内存与上下文生命周期治理
- **多模态扩展**：音频桥接（#8332）为非音频模型提供附件转写通道
- **渠道集成**：DingTalk Workspace 渠道（#9394）、通道类型持续扩展

## 开发者关注点

- **内存与性能**：#2128 内存无界增长是长期 P1 痛点；压缩功能计数准确性存疑（#9309）
- **工具调用可靠性**：重复工具调用 ID（#8382）、工具结果缺失（#9573）是日常使用高频故障
- **会话恢复稳定性**：恢复后工具状态失真、标题刷新风暴等影响长会话体验
- **Web Shell 远程部署可用性**：HTTP 非 localhost 下剪贴板失效、焦点抢占、固定操作卡顿
- **安全与权限**：CVE 基线治理、代码执行权限边界、沙箱镜像完整性受到社区广泛关注

</details>

<details>
<summary><strong>CodeWhale</strong> — <a href="https://github.com/Hmbown/CodeWhale">Hmbown/CodeWhale</a></summary>

# CodeWhale 社区动态日报 — 2026-08-21

## 1. 今日速览

v0.9.10 正式发布，带来保留（retention）、身份（identity）与持久审批（durable approvals）三大主题能力。与此同时，社区反馈聚焦于 v0.9.9 升级后出现的 `max_tokens` 超限错误、提前触发 Emergency Compaction 等问题；代码层面则密集推进 TUI 命令重构与工具调用流水线拆分，数个大PR在今日合并。

## 2. 版本发布

### v0.9.10
- **发布 PR:** [#5513](https://github.com/Hmbown/CodeWhale/pull/5513) — "Codewhale v0.9.10 — retention, identity, and durable approvals"，包含完整 76 个提交的发布通道，已基于公共 `main` 基线重排。
- **关键说明:** Codewhale 是 Shannon Labs 的公共产品，`codewhale` 命令、npm 包及发布资产名称继续使用小写技术标识符。旧 npm 包 `deepseek-tui` 已弃用，不再发布新版本。从 v0.8.x 旧版 `deepseek` / `d...` 迁移的用户需注意配置变更（原文截断，建议查阅发布说明）。
- **配套 Issue:** [#5522](https://github.com/Hmbown/CodeWhale/issues/5522) 要求 v0.9.10 将首次运行改为渐进式配置引导，而非前置满屏设置。

## 3. 社区热点 Issues（10 个）

### 🔶 #5522 — [OPEN] v0.9.10：首次运行应渐进引导而非前置配置
- 作者: Hmbown | 创建: 2026-08-20 | 更新: 2026-08-20 | 评论: 0
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/issues/5522)
- **内容**: 直接用户反馈：首次启动心理成本过高——非英语用户先碰到英文遥测披露，之后才面对一整套设置、快捷键说明和选项。建议首次启动即进入工作流，配置按需逐步呈现。
- **重要性**: 直接关联 v0.9.10 发布验收标准，影响新用户留存与上手体验。

### 🔶 #5518 — [CLOSED] DeepSeek V4 在 85K–105K tokens 时提前触发 Emergency Compaction
- 作者: hxfhd | 创建: 2026-08-19 | 更新: 2026-08-20 | 评论: 3
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/issues/5518)
- **内容**: 本地 vLLM 托管 DeepSeek-V4-Flash，路由配置 `context_window = 327680`、`auto_compact = false`，却能稳定复现约 85K–105K tokens 时的意外紧急压缩。作者怀疑与输出 headroom 预算及 handoff 状态污染有关。
- **重要性**: 高影响 bug——长会话开发者被意外压缩打断，且与 `auto_compact = false` 语义冲突。

### 🔶 #5516 — [CLOSED] 升级 v0.9.9 后 HTTP 400：max_tokens=384000 超出模型限制
- 作者: sfdzhmr | 创建: 2026-08-19 | 更新: 2026-08-20 | 评论: 1
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/issues/5516)
- **内容**: 升级 v0.9.8 → v0.9.9 后，所有请求失败：`HTTP 400 Bad Request: max_tokens=384000 cannot be greater than max_model_len=max_total_tokens=262144`。用户声明未手动改过配置。
- **重要性**: 升级后立刻全量不可用，说明 v0.9.9 引入的 token 计算或默认值回归，属于阻断性发布问题。

### 🔶 #4683 — [CLOSED] DeepSeek completions URL 错误
- 作者: demian-welt | 创建: 2026-07-22 | 更新: 2026-08-20 | 评论: 4
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/issues/4683)
- **内容**: 请求 `https://api.deepseek.com/v1/chat/completions` 偶发失败（`Request failed: error sending request for url`）。长时间提问后规律性出现。
- **重要性**: 网络层稳定性问题，影响长会话的可靠性，社区 4 条评论说明并非个例。

### 🔶 #5316 — [OPEN] EPIC-005：CodeWhale TUI Crate 分解（总跟踪）
- 作者: aboimpinto | 创建: 2026-08-10 | 更新: 2026-08-20 | 评论: 10 | 👍: 0
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/issues/5316)
- **内容**: TUI crate 分解的总跟踪 Epic；所有子 EPIC、FEAT、PR 均在此汇报。属于架构级重构的核心枢纽。
- **重要性**: 10 条评论表明社区关注度高，直接催生今日多个重构 PR（#5523/#5524/#5525）。

### 🔶 #4070 — [OPEN] feat: 独立 read_lints 工具，按需获取诊断
- 作者: Hmbown | 创建: 2026-07-07 | 更新: 2026-08-20 | 评论: 2
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/issues/4070)
- **内容**: 当前 LSP 诊断只在编辑后通过 patch/edit 工具附带，缺少按需读取任意文件 lint/类型错误的途径（Cline 已有类似能力）。
- **重要性**: 已被 PR #5524 实现并关闭，但作为功能需求仍有代表意义。

### 🔶 #5345 — [CLOSED] [FR] 增加多行模式或自定义"发送"快捷键
- 作者: AiurArtanis | 创建: 2026-08-13 | 更新: 2026-08-20 | 评论: 2
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/issues/5345)
- **内容**: 中文用户希望像 Grok Build / Codex 一样支持 `Enter` 换行 + `Shift+Enter` 发送等多行输入模式，或允许自定义发送快捷键。
- **重要性**: 典型中文社区编辑体验诉求，评论少但使用场景普遍。

### 🔶 #5508 — [CLOSED] feat: 连续循环（continuous loop）
- 作者: M-Maciej | 创建: 2026-08-18 | 更新: 2026-08-20 | 评论: 3
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/issues/5508)
- **内容**: 用户用 AI 充当其他 AI 的协调者，目前靠单轮内收集报告、分配任务后跑无限 sleep 模拟；更希望有无限轮次直至用户中断的模式。
- **重要性**: 反映 AI 编排 / 自主循环类工作流需求，对 Agent 场景有直接价值。

### 🔶 #5482 — [OPEN] EPIC(docs)：审阅、部分重构并全量中文化文档
- 作者: SparkofSpike | 创建: 2026-08-17 | 更新: 2026-08-20 | 评论: 1
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/issues/5482)
- **内容**: CodeWhale 的中国用户快速增长，大量 `docs/` 仍为英文；机器翻译有误且源文档已过时。提议系统性中文本地化。
- **重要性**: 与 #5337（Web 字典干线）同属国际化主线，评论区承认中文社区价值。

### 🔶 #5526 — [OPEN] Shell 补全已弃用
- 作者: RepentStar | 创建: 2026-08-20 | 更新: 2026-08-20 | 评论: 1
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/issues/5526)
- **内容**: pwsh 用户发现 `codew completions powershell` 生成的脚本内容过时，触发命令仍是 `codewhale-tui`；仓库中也未找到可修改位置或相关文档。
- **重要性**: 新命令名与补全脚本不一致，直接影响工具链使用。

## 4. 重要 PR 进展（10 个）

### ✅ #5513 — release: Codewhale v0.9.10（已合并）
- 作者: Hmbown | 创建: 2026-08-19 | 更新: 2026-08-20
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/pull/5513)
- **内容**: 完整 76 提交发布通道，主题为 retention / identity / durable approvals；已基于公共 `main` 重排并纳入社区已接纳的改动。今日版本发布的核心 PR。

### ✅ #5524 — [OPEN] feat(tui): 多文件 read_lints 操作
- 作者: wuisabel-gif | 创建: 2026-08-20 | 更新: 2026-08-20
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/pull/5524)
- **内容**: 落实 #4070 的已批准范围：现有模型可见的 `lsp` 工具新增 `read_lints` 操作，支持多工作区文件；复用会话 `LspManager` 与传输池，不新建语言服务器生命周期。

### ✅ #5525 — [OPEN] refactor(tui): 工具组采用命令形状（FEAT-018）
- 作者: aboimpinto | 创建: 2026-08-20 | 更新: 2026-08-20
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/pull/5525)
- **内容**: 将完整 TUI 工具命令组迁移到 FEAT-014/015 引入的外部命令形状，注册 `/a...` 等 7 个命令文件，仅改变执行边界、不移动物理位置。TUI 命令体系收敛的关键步骤。

### ✅ #5523 — [OPEN] refactor(tui): 从 turn loop 中提取工具调用阶段
- 作者: bistack | 创建: 2026-08-20 | 更新: 2026-08-20
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/pull/5523)
- **内容**: 拆分为 `plan_tool_calls`、`execute_planned_tools`、`process_tool_results` 三个阶段；保持原有控制顺序、可变状态流、取消语义与索引化结果收集。

### ✅ #5514 — [CLOSED] refactor(tui): 从 turn loop 提取流处理
- 作者: bistack | 创建: 2026-08-19 | 更新: 2026-08-20
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/pull/5514)
- **内容**: 将响应流状态机从 `handle_deepseek_turn` 抽到 `process_stream`，通过 `StreamOutcome` 仅返回流相关状态；外层保留 post-stream 组装与输出上限处理。属于 turn loop 拆解的姊妹 PR。

### ✅ #5515 — [CLOSED] fix(tui): MCP 图像结果按类型化内容转发
- 作者: cacdcaecawae | 创建: 2026-08-19 | 更新: 2026-08-20
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/pull/5515)
- **内容**: 将标准 MCP `image` 内容转为 CodeWhale 的 provider-neutral 富 tool-result 块；从文本收据移除内联 base64 并保留 `text`、`structuredContent`、`isError` 语义；复用 5 MiB、单图等校验。

### ✅ #5509 — [CLOSED] fix(tui): 恢复 /title 为独立终端窗口标题
- 作者: SparkofSpike | 创建: 2026-08-18 | 更新: 2026-08-20
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/pull/5509)
- **内容**: 修复 #5430：此前 `/title` 与 `/rename` 合并为一个命令导致两者都只改会话名；本 PR 恢复 `/title` 的独立窗口标题职责，区分 composer/picker/tab 中的名称与终端 tab 标题。

### ✅ #5520 — [CLOSED] feat(web): docs/sandbox 与 docs/web 迁入字典干线
- 作者: Lstarsky0 | 创建: 2026-08-20 | 更新: 2026-08-20
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/pull/5520)
- **内容**: #5337 系列的下一组：`docs/sandbox`（14 个 `isZh` 分支）与 `docs/web`（15 个）清零，采用每页双字典 + `types.ts`/`index.ts` 接法，并加入 `check-locales.mjs` 的 `OPTIONAL_FILES` 以强制 key/token 对齐。

### ✅ #5517 — [CLOSED] feat(web): docs/constitution 与 docs/runtime-api 迁入字典干线
- 作者: Lstarsky0 | 创建: 2026-08-19 | 更新: 2026-08-20
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/pull/5517)
- **内容**: 国际化 Phase 2 继续：两页面各 14 个 `isZh` 分支归零，结构与 #5504 一致，中文被严格约束在 key 与 token 对齐上。Web 文档中文化基础设施的持续推进。

### ✅ #5521 — [CLOSED] chore(tui): 移除非必要的单参数 concat!
- 作者: Lstarsky0 | 创建: 2026-08-20 | 更新: 2026-08-20
- [GitHub 链接](https://github.com/Hmbown/CodeWhale/pull/5521)
- **内容**: 修复 `clippy::useless-concat` 导致的 Lint 失败（`crates/tui/src/runtime_handoff.rs:83`），按 clippy 建议替换；下方双参数 `concat!` 保留。小而必要的 CI 绿修。

## 5. 热门 Discussions

> 本次数据源未提供 Discussions 数据，本节省略。

## 6. 功能需求趋势

从今日 Issues 与 PR 中提取的社区关注方向：

| 方向 | 相关 Issue/PR | 热度信号 |
|---|---|---|
| **Agent 自主循环 / 多 AI 编排** | #5508 continuous loop | 3 评论，协调者模式用例明确 |
| **输入体验** | #5345 多行模式 / 自定义发送键 | 中文用户典型诉求，引用 Grok/Codex |
| **按需诊断与代码理解** | #4070 / #5524 read_lints | 已进入实现，PR 刚开 |
| **首次运行引导体验** | #5522 渐进式配置 | 直接来自用户反馈，纳入 v0.9.10 验收 |
| **中文文档与国际化** | #5482 / #5337 / #5520 / #5517 | 文档字典干线持续推进，双线并行 |
| **MCP 能力扩展** | #4170 能力元数据 / #5515 图像类型化 | 图像支持已合入，元数据仍在 backlog |
| **命令可发现性** | #5442 高级命令隐藏于 palette 根部 | 产品审计发现 34+ 命令不可见 |
| **TUI 架构重构** | #5316 EPIC-005 / #5523 / #5525 / #5514 | 今日 3 个重构 PR，节奏密集 |
| **Shell 生态与新命令名对齐** | #5526 shell completion 过时 | 新命令 `codew` 与补全脚本不一致 |
| **长会话稳定性** | #5518 提前 Emergency Compaction / #4683 网络错误 | 高影响 bug，长会话用户直接受影响 |

## 7. 开发者关注点

- **🔴 max_tokens 回归（#5516）**: v0.9.9 升级后默认请求 `max_tokens=384000` 超出服务端 `262144` 上限，且用户未手动配置——属发布级阻断问题，社区期待 v0.9.10 中有修复确认。
- **🔴 Emergency Compaction 提前触发（#5518）**: `auto_compact = false` 且上下文窗口 327K 的情况下 ~100K tokens 就出现压缩，开发者怀疑 headroom 预算与 handoff 状态污染，要求调查。
- **🟠 Windows 体验持续被吐槽**: IME 候选窗口跳动（#5023）、header 状态指示器 0.9.7 后消失（#5512）、默认启动非 Windows Terminal（#1854）——Windows 用户对渲染与输入稳定性要求高。
- **🟠 首次启动配置负担**: 非英语用户的英文遥测披露 + 满屏设置（#5522）——国际化与 onboarding 需联动优化。
- **🟠 网络层稳定性**: DeepSeek completions URL 偶发失败（#4683），常见于长时间会话后，提示连接池或超时策略需改进。
- **🟡 文档与命令一致性**: `codew completions` 生成脚本仍引用 `codewhale-tui`（#5526）；文档大量英文且部分过时（#5482）——工具链与文档的同步维护是高频痛点。
- **🟡 已知测试脆弱性**: parallel-load 与 config-fixture 抖动在 v0.9.8 遗留（#5355），CI 稳定性仍需加固。

---
*本日报由 CodeWhale 社区数据自动整理，统计周期为 2026-08-20 ~ 2026-08-21。*

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*