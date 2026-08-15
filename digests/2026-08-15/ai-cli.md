# AI CLI 工具社区动态日报 2026-08-15

> 生成时间: 2026-08-14 23:11 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告（2026-08-15）

## 1. 生态全景

当日 8 个主流工具中 7 个有版本活动：合计发布 7 个正式/补丁版本（Claude Code×2、Copilot CLI×2、Pi、Qwen Code、CodeWhale）与 10+ 个 alpha/nightly/preview 构建，合并/推进 100+ 个 PR，整体处于高速迭代期。竞争焦点已从“谁能生成代码”转向“谁能稳定编排多 Agent、管理长上下文并融入企业治理体系”。Windows/WSL 平台体验是当日最集中的负面主题（6/8 工具均有相关高热度 Issue），成本透明度与提示缓存效率则首次成为跨工具共识性焦虑。与此同时，AI 仓库自身开发流程也正被 AI 重构——机器人 PR、SSR Agent 自动修复已成为常态，这是本轮工具生态最独特的信号。

## 2. 各工具活跃度对比

| 工具 | 版本发布 | 热点 Issues / 峰值 | 重要 PR | Discussions | 活跃度 |
|------|---------|-------------------|---------|-------------|--------|
| Claude Code | v2.1.233 / v2.1.232（正式） | 10 / 73条 | 4 | N/A¹ | 高 |
| OpenAI Codex | 5×alpha | 10 / 101条 | 10 + ≈50合并 | ✅ #9200（188👍） | 极高 |
| Gemini CLI | v0.56.0-nightly | 10 / 12条 | 10 | 未报告 | 中 |
| Copilot CLI | v1.0.80 / v1.0.80-1（正式） | 10 / 6条 | 3 | N/A¹ | 中 |
| OpenCode | 无 | 10 / 12条 | 10 | 未报告 | 中高 |
| Pi | v0.84.2（正式） | 10 / 27条 | 10 | ✅ | 高 |
| Qwen Code | v0.21.12（正式）+ preview/nightly 系列 | 10 / 12条 | 10 | 未报告 | 中高 |
| CodeWhale | v0.9.8（正式） | 10 / 13条 | 10 | ✅ | 中 |
| DeepSeek Harness | 无活动 | N/A | N/A | N/A | 无活动 |

*注：各日报仅按热度列出 Top 10 热点 Issue，“峰值”为其中最高单条评论数，不代表当日全部 Issue 总量。N/A¹ 表示日报未提供该渠道数据，不代表社区不活跃。*

当日热点呈现“双峰”结构：Codex 以 101 条评论的 Windows 卡顿 Issue 和约 50 个机器人合入 PR 成为最活跃仓库；Claude Code 以 73 条评论的 token 浪费 Issue 紧随其后。Copilot CLI 的公开 Issue 评论数整体偏低（峰值 6），与其企业用户走官方支持渠道的社区形态一致。

## 3. 共同关注的功能方向

### 3.1 Windows / WSL 平台体验（6/8 工具涉及）
- **Codex**（最严重）：6+ 个独立 Issue 报告系统级鼠标延迟、CPU 忙循环、全局卡顿，用户通过 A/B 测试确认退出应用即恢复（#20214、#38547、#38583、#38554）。
- **Claude Code**：Git Bash 只读 `cd` 组合命令触发持续性权限弹窗（#86619）。
- **Pi**：Windows 使用方式大调研（#7547）、WSL 下设备授权登录挂起（#6187）。
- **Gemini CLI**：WSL2 剪贴板图片粘贴（PR #27588）、Windows ARM 下 ripgrep 修复（PR #25378）。
- **OpenCode**：WSL 下大量 stdout 写入导致 Bash 子进程被 SIGKILL（#42626）。
- **Copilot CLI**：并发会话下插件更新因文件锁失败（#4488）。

### 3.2 多 Agent/子代理的可靠性与可观测性
- **Gemini CLI**：子代理终止原因误报——`MAX_TURNS` 被伪装成 `GOAL` 成功（#22323）；generalist agent 挂起（#21409）；代理嵌套调用（PR #28738）。
- **Copilot CLI**：autopilot 模式 subtask 冻结无响应（#4306）。
- **OpenCode**：子代理 ID 对模型不可见导致猜测失败（PR #36883）；子任务权限请求被静默阻塞（PR #36898）。
- **CodeWhale**：子代理后台 shell 事件污染父模型流（PR #5339）。
- **Claude Code**：子代理 fork 默认开启，完整继承对话与 prompt cache（v2.1.232）。

### 3.3 上下文压缩 / 缓存 / 记忆
- **Codex**：上下文压缩丢失长任务操作连续性，用户建议逐字保留最后 5 步（#29356）；官方调研记忆功能（#12567）。
- **Copilot CLI**：BYOK 模式重建 transcript 导致字节级变化，服务端提示缓存失效、延迟与成本上升（#4500）。
- **Pi**：实验性 append 压缩模式，复用系统提示词以命中缓存（PR #8120）。
- **OpenCode**：模式切换/压缩时缓存整体失效，本地推理首响应延迟显著增加（#37489）。
- **Gemini CLI**：Auto Memory 对低信号会话无限重试（#26522）、脱敏滞后与日志泄漏（#26525）。

### 3.4 成本与配额透明度
- **Claude Code**：无图会话仍报“image could not be processed”，烧掉约 70% 的 5 小时使用窗口（#60334）；Max 20x 升级后周限额未同步（#79773）。
- **Pi**：Kimi 顶层 `cached_tokens` 被忽略并计入普通输入 token（#8075）。
- **OpenCode**：自定义 Provider 的缓存 token 统计被丢弃（PR #36861）。
- **Copilot CLI**：提示缓存失效直接影响计费与延迟（#4500）。

### 3.5 MCP 生态成熟化
- **Copilot CLI**：Atlassian 与 GitLab MCP OAuth 回归（RFC 8414 issuer 不匹配，1.0.79 引入且 1.0.80 未修复，#4480/#4439）；CI 中 MCP registry 策略返回 403（#4346）。
- **Claude Code**：`MCP_TIMEOUT` 超过 60 秒在 Linux 上不生效（#16837）。
- **Codex**：为 MCP 协议发现增加计数与耗时指标（PR #38634）。
- **OpenCode**：为 MCP 工具补上执行超时与中断恢复（PR #36869）。

### 3.6 安全沙箱与权限治理
- **Codex**：Windows 沙箱强制 deny-read 规则（PR #38660）；Guardian v2 风险分类可配置（PR #38628）。
- **Qwen Code**：只读 shell 分类器被续行符/`${var@P}` 绕过（#8582，已修复）；PAT 与宿主共享风险未闭环。
- **Gemini CLI**：零依赖 OS 沙箱架构提案（#19873）。
- **OpenCode**：桌面端 `openExternal` 增加协议白名单（PR #36862）。

### 3.7 企业治理与可观测性
- **Claude Code**：Analytics Admin API 不返回订阅/OAuth 用户（#27780）；OTLP endpoint 缺 header 导致遥测被拒（#82092）。
- **Copilot CLI**：企业模型目录与策略不一致（#4390/#4422）；OTLP 仅支持 JSON 而不支持 protobuf（#2934）。
- **Gemini CLI**：组件级评估系统（#24353）。

### 3.8 模型/Provider 中立性
- **Pi**：新增 Anthropic Vertex、Bedrock Mantle、xAI/Grok 4.6 等提供商支持（PR #5262、#6216、#8124）。
- **OpenCode**：动态模型发现，OpenAI 兼容 Provider 自动拉取 `/v1/models`（PR #42660，一次关闭 6 个 Issue）。
- **CodeWhale**：第三方模型预制模板（#5350）；NVIDIA NIM 兼容性（#1482）。

## 4. 差异化定位分析

| 工具 | 核心生态 / 技术路线 | 目标用户 | 当前最突出矛盾 |
|------|-------------------|---------|---------------|
| Claude Code | Anthropic 官方，企业治理 + Agent 能力并进 | Anthropic API / Max 订阅的专业开发者与企业 | 功能增长快，但 Windows / CJK 等本地化细节拖后腿 |
| OpenAI Codex | OpenAI 生态，Rust 核心 + Desktop + ChatGPT 联动 | OpenAI API 使用者、桌面端重度用户 | 核心 CLI 高速迭代，Windows 桌面端质量失控 |
| Gemini CLI | Google Gemini 模型，SSR Agent 自动修 PR，AST 感知探索 | Gemini 生态开发者、早期采用者 | P1 挂起/误报较多，可靠性欠账 |
| Copilot CLI | GitHub 企业生态，服务端策略强管控 | 已有 GitHub Copilot 企业订阅的团队 | 外部社区活跃度低，企业模型策略混乱 |
| OpenCode | 开源多模型，TUI + 桌面 + Go 中继，worktree API | 自托管、多模型切换的开发者 | 年轻架构（ID 回绕事故），TUI 性能波动 |
| Pi | 开源，Provider 覆盖最广（云厂商 + 本地 + 订阅 OAuth） | 极客、多模型重度用户、扩展开发者 | TUI 渲染性能与登录/鉴权链路 |
| Qwen Code | 通义/阿里云生态，Web Shell + 钉钉渠道 | 中文开发者、阿里云企业用户 | 架构重构期，图片加载等回归影响升级信心 |
| CodeWhale | 原 deepseek-tui，本地 DS4 一等公民，45 个注册供应商 | 本地模型 / DeepSeek 用户、独立开发者 | agent 工具 schema 复杂度过高 |
| DeepSeek Harness | 官方 Harness，聚焦 SWE-bench / Terminal-bench 评测 | 科研/评测导向用户 | 当日无可见社区活动 |

**补充观察：**
- **Claude Code 与 Copilot CLI 是企业双雄**，均在治理、审计、企业策略上投入最深；但前者的社区开放度明显更高（Issue 峰值 73 vs 6）。
- **Pi 与 OpenCode 是最接近“模型中立 Agent 前端”的候选者**；Claude / Codex / Gemini / Copilot 均绑定自家模型生态。
- **Qwen Code 是国内唯一同时具备 Web、IDE、IM 多渠道形态的工具**；CodeWhale 则代表社区驱动的本地模型伴侣路线。

## 5. 社区热度与成熟度

- **高活跃 + 高热度**：**Codex**（101 条峰值、188👍 Discussion、约 50 个 bot PR）与 **Claude Code**（73 条峰值、双版本）构成第一梯队，但热度背后有较高投诉密度。
- **快速迭代 / 增长期**：**Pi**（v0.84.2、10 PR，覆盖 Provider、性能、扩展生态）、**Qwen Code**（正式版 + preview + nightly 多线发布）、**OpenCode**（无版本但 10 个功能/修复 PR）、**Gemini CLI**（nightly + SSR Agent 自动合入）。
- **稳定维护期**：**Copilot CLI**（1.0.80，PR 少、节奏慢）与 **Claude Code**（2.1.x 已进入精细打磨）版本号最成熟。
- **早期 / 转型期**：**CodeWhale**（v0.9.8 更名 + 生态基建）、**DeepSeek Harness**（当日无活动，评测导向）。

一个值得注意的信号：Codex 的“高活跃”由机器人 PR 与负面性能 Issue 驱动，而非健康的社区贡献生态；Pi 虽版本号仅 0.84，却是功能扩张最全面的仓库之一，从云厂商适配到剪贴板细节均有 PR 落地。

## 6. 值得关注的趋势信号

1. **Windows 桌面端已成为 AI CLI 工具口碑的最大风险点。** Codex 用多组 A/B 测试证实了卡顿因果；Claude、Gemini、Pi、OpenCode 在 Git Bash / WSL 上均有摩擦。团队评估时，应将 Windows 质量记录作为选型的一票否决项。

2. **多 Agent 协作进入“可靠性竞赛”阶段。** 子代理已从“能不能调用”走向“终止原因是否真实、会不会挂起、压缩后是否认得任务”。先解决可观测性问题的工具将在长任务场景建立壁垒。

3. **提示缓存正在成为成本与性能的隐形胜负手。** Claude Code 的 fork 继承缓存、Pi 的 append 压缩复用缓存、Copilot 的 BYOK 打破缓存——多家都在为“缓存友好”而修改协议设计。未来的 Agent 框架需把缓存命中率当作一等性能指标。

4. **MCP 从“可用”走向“生产级”，OAuth 与策略治理是最大缺口。** Copilot CLI 连爆 Atlassian/GitLab 两处 OAuth 回归，Claude 的超时失效、Codex 的可观测性指标均表明：企业级可靠性要求已开始兑现。

5. **成本透明度成为开发者信任的基石。** “无图却报图像处理失败、烧掉 70% 窗口”“Kimi 缓存 token 被重复计费”这类诉求将推动各家 CLI 提供细粒度 token/成本审计能力，而非停留在笼统的用量提示。

6. **AI 工具自身正被 AI 重构开发流程。** Codex 单日合并约 50 个 bot PR、Gemini 的 SSR Agent 自动修复 P1、Qwen 的 autofix 机器人——开源贡献方式可能从“提 PR”转向“写 Agent 规则 / 评估数据集”，对开发者是新的参与机遇。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据来源：github.com/anthropics/skills ｜ 截止 2026-08-15
> 说明：PR 评论数字段缺失，热门度按关联 Issue 热度、讨论深度与更新活跃度综合推断；以下 PR 均为 OPEN。

## 1. 热门 Skills 排行

| # | Skill / PR | 功能与社区热点 | 状态 |
|---|---|---|---|
| 1 | **skill-creator 评估链路修复** [PR #1298](https://github.com/anthropics/skills/pull/1298) | 修复 `run_eval.py` 恒定 0% recall 的严重 bug——将评估产物安装为真实 skill，并修复 Windows 流读取、触发检测与并行 worker。对应最热 bug Issue [#556](https://github.com/anthropics/skills/issues/556)（12 评论、7 👍）及 [#1169](https://github.com/anthropics/skills/issues/1169)，另有 [#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050) 同题竞争，是社区最集中的"工具链不可用"问题。 | OPEN |
| 2 | **ServiceNow 平台 Skill** [PR #568](https://github.com/anthropics/skills/pull/568) | 覆盖 ITSM/ITOM/ITAM/SecOps/FSM/SPM/CSDM/IntegrationHub 的 ServiceNow 全平台助手。企业级覆盖最广的提交，8 月 12 日仍有更新，属持续活跃的长线 PR。 | OPEN |
| 3 | **testing-patterns 测试模式 Skill** [PR #723](https://github.com/anthropics/skills/pull/723) | 覆盖测试全栈：Testing Trophy 模型、单元测试 AAA 模式、React Testing Library 及"测什么/不测什么"的测试哲学。体现社区对 AI 生成代码质量兜底的诉求。 | OPEN |
| 4 | **document-typography 文档排版 Skill** [PR #514](https://github.com/anthropics/skills/pull/514) | 纠正 AI 生成文档的孤行、寡段（标题滞留页底）、编号错位等排版问题。直接回应"每份 AI 文档都有排版瑕疵"的普遍痛点。 | OPEN |
| 5 | **self-audit 交付自检 Skill** [PR #1367](https://github.com/anthropics/skills/pull/1367) | 先做机械性文件核查，再按损害严重度进行四维推理审计。对应提案 Issue [#1385](https://github.com/anthropics/skills/issues/1385)，代表社区对"交付质量门禁"的方向性探索。 | OPEN |
| 6 | **Pyxel 复古游戏开发 Skill** [PR #525](https://github.com/anthropics/skills/pull/525) | 为 pyxel-mcp（Pyxel 引擎的 MCP 服务器）提供 write → run_and_capture → inspect → iterate 工作流。由 Pyxel 作者 kitao 提交，兼具创意与 MCP 生态示范意义。 | OPEN |
| 7 | **ODT 文档 Skill** [PR #486](https://github.com/anthropics/skills/pull/486) | 创建/填充/读取/转换 ODF 格式（.odt/.ods），支持 ODT 转 HTML。填补官方文档技能（docx/pdf）之外的开源文档格式空白。 | OPEN |
| 8 | **skill-quality-analyzer / skill-security-analyzer 元技能** [PR #83](https://github.com/anthropics/skills/pull/83) | 从结构文档、安全性等五维度评估 Claude Skill 质量并做安全分析。与最热 Issue #492（信任边界滥用）形成呼应——社区在自制"质检/安检"工具。 | OPEN |

## 2. 社区需求趋势

从 Issues 提炼的六大需求方向：

1. **安全与信任边界（压倒性第一）** — [Issue #492](https://github.com/anthropics/skills/issues/492)（43 评论）：社区技能挂 `anthropic/` 命名空间导致的信任滥用，是当前热度最高的议题。
2. **企业级共享与治理** — [Issue #228](https://github.com/anthropics/skills/issues/228)（16 评论、8 👍）：组织级技能库与直接分享链接；[#412](https://github.com/anthropics/skills/issues/412) 提出 agent-governance（策略执行、威胁检测、审计追踪）。
3. **Skill 工具链可靠性** — [#556](https://github.com/anthropics/skills/issues/556)（12 评论、7 👍）与 [#202](https://github.com/anthropics/skills/issues/202)、[#62](https://github.com/anthropics/skills/issues/62)：eval 循环 0% 触发率、技能文件丢失、creator 文档化风格而非可执行指令。
4. **上下文与内存管理** — [Issue #1487](https://github.com/anthropics/skills/issues/1487)（claude-api 一次性注入 ~156k tokens）、[#1329](https://github.com/anthropics/skills/issues/1329)（compact-memory 紧凑符号化记忆）：长会话上下文耗尽成为新痛点。
5. **文档生态稳定化** — [#189](https://github.com/anthropics/skills/issues/189)（插件重复安装产生重复技能）、[#12](https://github.com/anthropics/skills/issues/12)（docx 空白符破坏文件）：文档类 skill 从"能用"走向"可靠"。
6. **互操作与部署场景** — [#16](https://github.com/anthropics/skills/issues/16)（Skills 暴露为 MCP）、[#29](https://github.com/anthropics/skills/issues/29)（AWS Bedrock 支持）、[#1175](https://github.com/anthropics/skills/issues/1175)（SharePoint 权限与上下文安全）。

## 3. 高潜力待合并 Skills

以下 OPEN PR 近期活跃、且精准回应社区需求，有望近期落地：

| PR | Skill | 最后更新 | 潜力点评 |
|---|---|---|---|
| [#568](https://github.com/anthropics/skills/pull/568) | ServiceNow 平台 | 2026-08-12 | 全平台覆盖 + 持续维护，最可能合入的企业级 Skill |
| [#1538](https://github.com/anthropics/skills/pull/1538) | 两个技能回退 Agent Skills 规范 | 2026-08-12 | 仓库自证的规范修复，维护者接受成本低 |
| [#525](https://github.com/anthropics/skills/pull/525) | Pyxel 游戏开发 | 2026-07-15 | 官方项目作者背书，生态价值高 |
| [#1479](https://github.com/anthropics/skills/pull/1479) | plan-file-hygiene 规划产物生命周期 | 2026-07-27 | 回应 #1417，解决规划文件无限堆积的真实痛点 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit 交付自检 | 2026-07-02 | 有配套提案 #1385，方法论完整 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator eval 修复 | 2026-06-23 | 修复最热 bug，需与 #1099 / #1050 竞争合入 |

## 4. Skills 生态洞察

当前社区最集中的诉求已从"增加更多功能型 Skill"转向**为 Skill 生态建立信任与质量基础设施**——命名空间信任边界、技能质量/安全分析、可用的评估工具链（eval 修复）与交付质量门禁，标志着 Claude Code Skills 正从"数量扩张期"进入"治理与可靠性建设期"。

---

# Claude Code 社区动态日报（2026-08-15）

> 数据来源：github.com/anthropics/claude-code | 覆盖周期：过去 24 小时

## 1. 今日速览

过去 24 小时内 Claude Code 连续发布 v2.1.233 和 v2.1.232，核心变化包括 GitLab MR 链接支持、子代理 fork 默认开启、后台代理默认运行等。社区讨论热度集中在图像处理报错导致的 token 浪费、桌面端会话管理、CJK 输入回车键行为，以及一批 Windows/Git Bash 权限误报和安全策略误伤合法工作的反馈。

## 2. 版本发布

### v2.1.233
- `--worktree` 标志和 `claude agents` 视图新增 **GitLab Merge Request URL 支持**，MR 显示为 `!N` 形式。
- Anthropic upstreams 新增 opt-in `forward_user_identity` apps gateway 设置，可将会话登录用户身份以 headers 形式透传给背后的代理服务。

### v2.1.232
- **子代理 forking 默认开启**：`subagent_type: "fork"` 会继承完整对话与 prompt cache。
- 非 teammate 代理在交互式会话中默认改为**后台运行**。
- 在 prompt 中输入 `@` 可按名称提及另一个 Claude session。

## 3. 社区热点 Issues

以下为过去 24 小时内讨论热度最高的 10 个 Issue：

1. **[#60334] Anthropic API Error: Image processing failures causing conversation token waste**  
   https://github.com/anthropics/claude-code/issues/60334  
   **73 条评论 / 19 👍**。用户反馈没有图片仍出现“image could not be processed”错误，烧掉了约 70% 的 5 小时使用窗口。虽已标记关闭，但仍是当前成本浪费类问题中讨论度最高的一条。

2. **[#30869] Unarchive Claude Code sessions in desktop app**  
   https://github.com/anthropics/claude-code/issues/30869  
   **29 条评论 / 57 👍**。桌面端长期缺少“取消归档会话”能力，社区高赞功能请求，说明桌面端会话管理是用户关心的重点方向。

3. **[#2054] Insert a new line with Enter key instead of sending a message**  
   https://github.com/anthropics/claude-code/issues/2054  
   **28 条评论 / 147 👍**。当前 Issue 中点赞数最高。CJK 用户深受“误触 Enter 直接发送不完整消息”之苦，呼吁增加回车换行、其他快捷键发送的配置。

4. **[#27780] Claude Code Analytics Admin API does not return subscription/OAuth users**  
   https://github.com/anthropics/claude-code/issues/27780  
   **26 条评论 / 23 👍**。企业管理员无法从 Analytics Admin API 获取订阅/OAuth 用户数据，影响用量统计和治理能力。

5. **[#16837] Claude Code does not obey values of MCP_TIMEOUT longer than 60 seconds**  
   https://github.com/anthropics/claude-code/issues/16837  
   **15 条评论 / 16 👍**。Linux 平台 MCP 超时配置超过 60 秒不生效，带有 repro，影响依赖长耗时 MCP 工具的用户。

6. **[#82092] Apps gateway serves OTLP endpoint without otlpHeaders; Desktop telemetry rejected**  
   https://github.com/anthropics/claude-code/issues/82092  
   **13 条评论 / 5 👍**。Apps gateway 返回的 OTLP endpoint 缺少 `otlpHeaders`，导致 Claude Desktop 遥测数据每次 flush 都因 `missing_token` 被拒绝。

7. **[#11791] Browser automation tools incompatible with web sandbox proxy**  
   https://github.com/anthropics/claude-code/issues/11791  
   **11 条评论 / 16 👍**。Playwright/Puppeteer/Selenium 在 Web sandbox 中无法使用，因为安全代理不支持 HTTPS CONNECT 隧道。属于架构性限制，社区希望至少能补充文档。

8. **[#66117] Add option to disable prompt suggestions in Claude.ai web/app interface**  
   https://github.com/anthropics/claude-code/issues/66117  
   **9 条评论 / 10 👍**。用户希望关闭 Web/App 端的 prompt 建议，减少干扰，提升专注度。

9. **[#86619] Windows Git Bash: false-positive permission prompts on read-only cd-compound commands**  
   https://github.com/anthropics/claude-code/issues/86619  
   **8 条评论 / 9 👍**。2.1.232 auto-mode 后在 Windows Git Bash 中，静态分析对只读 `cd` 组合命令产生持续且无法抑制的权限弹窗，影响 Windows 用户日常操作。

10. **[#79773] Max 20x upgrade not reflected in weekly limits**  
    https://github.com/anthropics/claude-code/issues/79773  
    **7 条评论 / 0 👍**。用户升级 Max 20x 后周限额仍按旧档位消耗，涉及订阅计费与限额同步问题，值得 Anthropic 核查。

## 4. 重要 PR 进展

当前可观察到的 PR 共 4 条，全部列出：

1. **[#86746] fix(security-guidance): preserve Python probe errors**  
   https://github.com/anthropics/claude-code/pull/86746  
   修复 #86709：不再丢弃 Python 解释器探测的 stderr，当 `python3`、`python`、`py -3` 全部失败时输出具体诊断信息，改善安全引导脚本的可排查性。

2. **[#86626] feat: add shell completions (bash, zsh, fish)**  
   https://github.com/anthropics/claude-code/pull/86626  
   为 `claude` CLI 新增 bash、zsh、fish 补全脚本，且与已安装 CLI 保持同步。对日常 CLI 使用者是直接体验提升。

3. **[#83890] Create pylint.yml**  
   https://github.com/anthropics/claude-code/pull/83890  
   新增 Pylint CI 工作流，属于代码质量/静态检查基础设施改进。

4. **[#41611] add the missing source to claude code**  
   https://github.com/anthropics/claude-code/pull/41611  
   描述较模糊，长期处于 Open 状态。如果社区有补充上下文，建议关注作者后续说明。

## 5. 热门 Discussions

未提供 Discussions 数据，本节省略。

## 6. 功能需求趋势

综合 Issues 与 PR，社区最关注的功能方向包括：

- **桌面端与 IDE 体验**：桌面会话反归档、VS Code “Background Tasks” 面板、长 prompt 折叠、关闭 prompt 建议等需求密集。
- **输入交互与本地化**：Enter 键行为可配置是当前最高赞需求之一，尤其影响 CJK 用户。
- **企业治理与可观测性**：Analytics Admin API 覆盖订阅/OAuth 用户、`forward_user_identity`、OTLP 遥测 header 透传等，说明企业级部署场景的需求在上升。
- **CLI 可定制性**：shell 补全、MCP 超时时间自定义、GitLab MR 集成、子代理 fork 后台化等，都是围绕“更自由地接入现有工作流”。
- **成本与配额透明度**：图像处理失败导致的 token 浪费、Max 20x 升级后周限额未同步，反映出用户对用量计费透明度的敏感度很高。

## 7. 开发者关注点

- **安全/策略误报仍是最大痛点之一**：多起“cyber/AUP 误伤合法逆向工程、固件分析、设备调试”的 Issue 被批量关闭或标记为重复，但用户强调会话被直接中断，影响严重。
- **Windows 平台稳定性**：Git Bash 下只读命令触发权限弹窗、静态分析误报等问题，在 2.1.232 后集中出现，Windows 用户反馈强烈。
- **成本浪费与限额同步**：图像处理报错在无图会话中反复出现，以及更高档位订阅未正确反映到周限额，都直接影响开发者实际使用成本和信任度。
- **MCP/Telemetry 等基础设施兼容性**：`MCP_TIMEOUT` 超过 60 秒不生效、OTLP 遥测缺 header 被拒绝、PR 评论静默失败等，属于“表面可用但细节不可靠”的问题，社区希望官方优先修复。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-08-15）

数据基于 GitHub openai/codex 仓库截至 2026-08-14 的过去 24 小时更新。


## 1. 今日速览

过去 24 小时，Codex 仓库异常活跃：连续发布了 5 个 `rust-v0.148.0-alpha` 系列预发布版本，并合并了约 50 个由自动化机器人提交的 PR，涵盖 Windows 沙箱安全加固、TUI 启动体验优化、gRPC 协议改进等基础设施领域。社区侧最集中的声音来自 Windows 桌面端——自 26.810.4967.0 版本更新后，大量用户反馈系统级鼠标延迟、空闲 CPU 飙高和整机卡顿问题，已成为当前最严重的质量隐忧。


## 2. 版本发布

过去 24 小时内发布了 5 个连续 alpha 版本（均为 Rust 核心 CLI 的预发布构建）：

- **rust-v0.148.0-alpha.18** — Release 0.148.0-alpha.18
- **rust-v0.148.0-alpha.17** — Release 0.148.0-alpha.17
- **rust-v0.148.0-alpha.16** — Release 0.148.0-alpha.16
- **rust-v0.148.0-alpha.15** — Release 0.148.0-alpha.15
- **rust-v0.148.0-alpha.14** — Release 0.148.0-alpha.14

官方 Release Notes 暂未附带详细变更说明，但从当日合并的 PR 推断，这批 alpha 版本很可能包含 Windows 沙箱策略增强（`#38660`）、MCP 发现指标（`#38634`）、TUI 启动优化（`#38639` ~ `#38644` 等）等最新改动。建议关注升级后的行为变化，尤其是 Windows 沙箱 deny-read 规则的强制实施。


## 3. 社区热点 Issues（10 个）

### 🔥 Windows 性能问题集群（社区最强烈反馈）

**#20214 — Codex App 在 Windows 11 Pro 上频繁卡顿/掉帧，尽管系统资源充足**
- 👤 作者: squarepots | 💬 101 评论 | 👍 84
- 摘要: 用户在 AMD Ryzen 5 5600 + 32GB RAM 的 Win11 Pro 机器上使用 Microsoft Store 版的 Codex App，即便系统资源充足仍频繁遇到界面冻结与卡顿。这是当前仓库中评论数和 👍 数最高的 Issue，持续近 4 个月仍未解决。
- 链接: https://github.com/openai/codex/issues/20214

**#38547 — Codex Windows 26.810.4967.0 空闲时 Electron 主进程陷入 CPU 忙循环**
- 👤 作者: 123kkksss | 💬 11 评论 | 👍 5
- 摘要: 从 26.803.10989.0 更新到 26.810.4967.0 后，应用在完全空闲状态下进入了持续的主进程 CPU 忙循环，无需打开浏览器功能即可复现。
- 链接: https://github.com/openai/codex/issues/38547

**#38583 — [Windows 11][26.813.12317] ChatGPT/Codex 导致持续的系统级鼠标延迟和约 10% 空闲 CPU**
- 👤 作者: spirosin | 💬 10 评论 | 👍 6
- 摘要: 更新到 26.813.12317 后，整个系统出现鼠标移动和输入的持续性延迟，同时空闲 CPU 占用约 10%。
- 链接: https://github.com/openai/codex/issues/38583

**#38554 — [Windows][26.810.4967.0] 此更新让整台 PC 卡顿——完全退出 Codex 可立即解决**
- 👤 作者: smlhd1993 | 💬 7 评论 | 👍 3
- 摘要: 从 26.803.10989.0 更新到 26.810.4967.0 后，整台 PC 出现严重卡顿。用户做了 A/B 测试：完全退出 Codex 后卡顿立即消失。
- 链接: https://github.com/openai/codex/issues/38554

**#28855 — Codex Desktop 26.611.8604.0 导致 Windows 间歇性系统输入延迟**
- 👤 作者: Yassycodes | 💬 17 评论 | 👍 20
- 摘要: 在应用启动/重新打开后以及后续的爆发式使用期间，鼠标移动和打字变得明显卡顿。同一台机器处理更重的负载时没有此问题。该 Issue 已持续近两个月，说明问题非单一版本引入。
- 链接: https://github.com/openai/codex/issues/28855

### 🛠 其他值得关注的问题

**#34260 — Windows Desktop: 无界 taskkill.exe/conhost.exe 清理风暴耗尽 WMI**
- 👤 作者: RocStone | 💬 35 评论 | 👍 11
- 摘要: Codex Desktop 在 Windows 上会进入无界的进程清理循环，数百个 `taskkill.exe` 进程同时存活，每个伴随一个 `conhost.exe`。大量实例反复查询 `Win32_Process`，耗尽 WMI provider 配额，拖慢整个系统。
- 链接: https://github.com/openai/codex/issues/34260

**#29356 — 上下文压缩在长任务中丢失操作连续性；建议逐字保留最后 5 个操作步骤**
- 👤 作者: 1dZb1 | 💬 21 评论 | 👍 1
- 摘要: Codex Desktop 的自动上下文压缩会在长任务中丢失关键操作上下文，导致模型遗忘正在进行的操作。用户建议在压缩时逐字保留最后 5 个操作步骤。
- 链接: https://github.com/openai/codex/issues/29356

**#22733 — Android ChatGPT 远程连接 Windows Codex 卡在 "Waiting for desktop…"**
- 👤 作者: yanivavrahami | 💬 16 评论 | 👍 19
- 摘要: 从 Android ChatGPT 应用的 Codex 入口发起远程会话时，一直卡在等待桌面连接的页面，无法建立会话。该 Issue 已持续 3 个月，是移动端远程控制类需求中最活跃的问题。
- 链接: https://github.com/openai/codex/issues/22733

**#35871 — Windows 沙箱: 当解析到的 shell 是 MSIX (Store) 版 pwsh 时，CreateProcessAsUserW 失败并报错误码 5**
- 👤 作者: dgx80 | 💬 14 评论 | 👍 3
- 摘要: 只要目标 shell 是 Microsoft Store 安装的 PowerShell 7，Windows 沙箱就会因受限令牌拒绝启动 MSIX 打包二进制而失败，导致沙箱不可用。
- 链接: https://github.com/openai/codex/issues/35871

**#38546 — [Windows] ChatGPT/Codex 桌面应用在非提权运行时导致系统级鼠标卡顿**
- 👤 作者: 7C93F3-L | 💬 7 评论 | 👍 1
- 摘要: 在非管理员权限下运行时，应用仍会导致严重的系统级鼠标光标卡顿。这是又一个与权限/进程模型相关的性能问题。
- 链接: https://github.com/openai/codex/issues/38546


## 4. 重要 PR 进展（10 个）

过去 24 小时内，约 50 个 PR 被合并（绝大多数来自 `copyberry[bot]` 的自动化提交），以下为最值得关注的 10 个：

**#38660 — 在 Windows 沙箱中强制执行受管理的 deny-read 规则** 🔒
- 关键变更: 确保 Windows 沙箱请求在所有执行路径和设置刷新中保留受管理的文件系统 deny 规则；不支持的策略将 fail-closed，而非让命令在缺少保护的情况下运行。这是一项安全加固变更，使用沙箱的开发者建议留意行为变化。
- 链接: https://github.com/openai/codex/pull/38660

**#38645 — 无截断地传递 gRPC code-mode 通知**
- 关键变更: 移除了之前 1,024 字节的通知截断和截断后缀，超大多字节通知文本现在可以完整转发到 session delegate。
- 链接: https://github.com/openai/codex/pull/38645

**#38664 — 解析 Code Mode 类型中的本地 JSON Schema 引用**
- 关键变更: 文档内引用的 JSON Schema `$ref` 之前被渲染为 `unknown`，现在可以正确解析片段引用，生成的 TypeScript 声明将展示完整的输入和结构化输出类型。
- 链接: https://github.com/openai/codex/pull/38664

**#38651 — 将权限配置文件快照移入协议层**
- 关键变更: 在 `core-api` 中定义 `PermissionProfileSnapshot` 协议模型，核心权限状态直接存储快照，同时保持对具体 `PermissionProfile` 的约束应用。
- 链接: https://github.com/openai/codex/pull/38651

**#38650 — 规范化 gRPC 订阅过滤器中的默认命名空间**
- 关键变更: 在匹配前对工具调用和订阅过滤器同时做归一化；缺失和空的命名空间视为 `functions` 命名空间的别名，同时保留每次调用上报的实际命名空间。
- 链接: https://github.com/openai/codex/pull/38650

**#38641 — 加固 TUI 启动输入处理**
- 关键变更: 终端探测等 bootstrap 工作可能在启动画面可见前留下按键或部分控制序列缓冲，这些输入现在不会误触选择/确认操作；同时保留用户为编辑器输入的 typeahead。
- 链接: https://github.com/openai/codex/pull/38641

**#38642 — 保持编辑器在 TUI 启动期间可编辑**
- 关键变更: 配置和 app-server 初始化可能需要时间，现在启动期间会显示一个临时编辑器，携带用户输入的文本、光标位置等，待主 TUI 就绪后无缝接续。
- 链接: https://github.com/openai/codex/pull/38642

**#38643 — 延迟启动编辑器直到首次登录引导完成**
- 关键变更: 在全新的默认安装中，临时编辑器可能在首次登录引导接管终端前出现。该 PR 通过保守地检测全新本地安装来解决此问题。
- 链接: https://github.com/openai/codex/pull/38643

**#38634 — 添加 MCP 协议发现指标**
- 关键变更: 为 MCP 客户端协议发现记录计数器和耗时指标，按 `legacy` 或 `auto` 模式打标，并将结果分类为 `modern` / `legacy` / `failure`。
- 链接: https://github.com/openai/codex/pull/38634

**#38628 — 使 Guardian v2 风险分类可配置**
- 关键变更: `features.guardianv2` 现在既可作为布尔开关，也可指定分类器指令、审查阈值、推理力度以及操作/指令 token 上限；并新增来源和逐条目的转录控制。
- 链接: https://github.com/openai/codex/pull/38628

另外：**#38646**（从 Key Vault 读取 Apple 公证 issuer ID，移除环境变量）和 **#38649**（TUI 启动时复用账户响应，减少一次网络请求）也值得关注。


## 5. 热门 Discussions

### 💡 Ideas

**#9200 — 支持从 ChatGPT 应用远程控制 Codex** 👑 社区最高赞
- 👤 作者: sluongng | 💬 44 评论 | 👍 188
- 摘要: 用户希望在桌面端以 headless/daemon 模式运行 Codex，然后从 ChatGPT 移动应用远程控制。目前用户通过 Tailscale + Terminus (SSH) 自行实现了类似体验，但原生支持将大幅改善移动端工作流。
- 链接: https://github.com/openai/codex/discussions/9200

**#12567 — Codex 中的记忆（Memories）功能**
- 👤 作者: jif-oai | 💬 32 评论 | 👍 14
- 摘要: 官方团队正在调研为 Codex 添加记忆功能，向社区征集两个问题：(1) 如果模型引用过往线程中的记忆，是否需要看到引用来源（1=无用，5=必须）；(2) 偏好什么样的记忆管理方式。
- 链接: https://github.com/openai/codex/discussions/12567

**#37045 — 提议：开放、社区可扩展的任务板和 Agent 编排层**
- 👤 作者: zc52406 | 💬 1 评论 | 👍 1
- 摘要: 建议为 Codex 构建一个开源的社区可扩展任务协调层，支持 issue 板、优先级、依赖、标签和 assignee 等管理功能。
- 链接: https://github.com/openai/codex/discussions/37045

### ❓ Q&A

**#6109 — [已解决] 如何使用 Codex CLI 创建自定义 agents（如 Review、Test、Refactor）？**
- 👤 作者: grandimam | 💬 4 评论 | 👍 5
- 摘要: 用户希望实现类似 Claude Code 的多角色 agent 设置（代码审查、测试生成、重构），社区已给出解决方案。
- 链接: https://github.com/openai/codex/discussions/6109

**#38633 — `include_instructions = false` 是否会静音 Worker/Explorer 的 skills？**
- 👤 作者: XxUnkn0wnxX | 💬 0 评论 | 👍 1
- 摘要: 用户想确认在 `worker.toml` 和 `explorer.toml` 子代理配置中设置 `include_instructions = false` 的确切语义——是否需要同时禁用 skills 的指令注入。
- 链接: https://github.com/openai/codex/discussions/38633

**#38588 — Codex 无法正常读取/写入工作区文件，读取内容疑似模型幻觉**
- 👤 作者: yuanshaojing | 💬 0 评论 | 👍 1
- 摘要: 中文用户反馈 Codex 读取文件时没有读取限定文件夹内的真实内容，而是"自己编的"内容，同时无法正常写入工作区。
- 链接: https://github.com/openai/codex/discussions/38588

### 🎨 Show and tell

**#38563 — 我构建了一个用于监控并行 Codex Desktop 会话的 Windows HUD**
- 👤 作者: wakadorimk2 | 💬 0 评论 | 👍 1
- 摘要: 用户经常并行运行多个 Codex Desktop 会话，开发了一个轻量级 Windows 悬浮窗，在屏幕边缘实时显示各会话状态。
- 链接: https://github.com/openai/codex/discussions/38563

**#38520 — Engineer Software：一个有界、证据驱动的工作流插件**
- 👤 作者: KirschBluteX | 💬 0 评论 | 👍 1
- 摘要: 发布了一个 MIT 许可的 Codex 插件，将实质性软件开发工作路由到一个个有界、证据驱动的模块中，防止编码 agent 在契约明确前过早进入实现。
- 链接: https://github.com/openai/codex/discussions/38520


## 6. 功能需求趋势

从过去 24 小时的 Issues 与 Discussions 来看，社区最关注的功能方向集中在五个维度：

1. **Windows 桌面端性能修复（最紧迫）**：大量 Issue 集中指向新版 Windows 应用导致系统级鼠标延迟、CPU 忙循环和全局卡顿。这不是单一功能请求，而是当前影响面最大的质量问题，已形成"发布—反馈—再发布—再反馈"的循环。

2. **远程/移动控制**：Discussion #9200 以 188 👍 成为社区最高赞的需求，与 Issue #22733（Android 远程连接卡住）相互呼应。用户期望能在手机端安全地远程驱动桌面 Codex。

3. **跨会话上下文与记忆**：官方已在调研记忆功能（#12567），而 Issue #29356、#31375 反映了上下文压缩导致长任务中断的实际痛点，上下文管理是 Agent 类工具持续被提及的短板。

4. **沙箱安全边界与可配置性**：Windows 沙箱遇到 MSIX pwsh 启动失败（#35871），deny-read 策略开始强制执行（PR #38660），Guardian v2 风险分类变为可配置（PR #38628），安全与可用性的平衡是持续演进的领域。

5. **可扩展性与自定义工作流**：社区持续提出自定义 agents（#6109）、任务板/编排层（#37045）、per-project/per-chat 执行环境选择（#36098）、仓库感知的任务交接（#34582）等需求，说明开发者正在把 Codex 从"对话式编程助手"推向"可编排的工程团队基础设施"。


## 7. 开发者关注点

综合当前 Issues 和 PR 反馈，开发者的核心痛点集中在以下高频主题：

- **Windows 版性能问题已成最大集中投诉点**：26.810.4967.0 成了"众矢之的"，多个独立 Issue 用 A/B 测试证实了应用与系统卡顿之间的因果关系。开发者普遍希望官方要么快速热修，要么提供回退途径。此外，taskkill.exe 清理风暴和 `logs_2.sqlite` 无限膨胀等资源泄漏问题，进一步加重了 Windows 平台的不信任感。

- **上下文压缩的"断片"问题严重干扰长任务体验**：压缩后丢失推理过程、流中断、转向无关方案，让开发者在长任务中不敢依赖自动压缩。用户建议的"逐字保留最后 5 步操作"等具体方案值得官方参考。

- **新版本更新焦虑**：每轮桌面端更新都会带来新的性能回归（从 26.611 到 26.810 到 26.813），开发者被迫在功能更新和系统流畅度之间做选择。社区期待更严格的发布前性能回归测试，尤其是对 Windows 平台的覆盖。

- **沙箱进程模型与受限 token 兼容性**：MSIX Store 应用与沙箱受限令牌的冲突、WMI 被高频率进程清理操作耗尽，这类系统级集成问题需要更仔细的 Windows 原生层设计。

- **IDE 扩展可靠性**：VS Code 扩展的 Git 轮询导致系统句柄增长（#35775）、多窗口间会话所有权迁移（#38629），说明 IDE 集成层面仍存在会话生命周期管理的精细化空间。

---

> 💡 **小编点评**：今天的社区动态清晰地呈现出"基础设施大步前进、Windows 桌面端拖后腿"的局面。自动化 PR 流水线证明了核心 CLI 和协议层在快速迭代；但若 Windows 端卡顿问题持续发酵，很可能影响社区对桌面产品的信任。建议官方优先响应 #20214 和 #38547/#38554 等高频性能 Issue，并在下一个桌面版本中附带明确的性能回归修复说明。

*本日报由 AI 自动生成，数据抓取时间为 2026-08-15 08:00 UTC。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-08-15）

## 今日速览

今日发布 v0.56.0-nightly，主要优化 e2e 测试稳定性与容量错误重试机制。社区讨论集中在子代理终止原因误报（#22323）与 generalist agent 挂起（#21409）两处 P1 级 bug，多个 SSR Agent 自动修复 PR 已同步落地。

## 版本发布

**v0.56.0-nightly.20260814.gc0d192452**

- test(e2e)：在慢速 CI runner 上稳定 file-system-interactive 测试（[#28793](https://github.com/google-gemini/gemini-cli/pull/28793)）
- fix(core)：对容量错误实现上下文感知的静默重试与可用性 TTL（[#28761](https://github.com/google-gemini/gemini-cli/pull/28761)）

## 社区热点 Issues

1. **[#22323] 子代理 MAX_TURNS 恢复被误报为 GOAL 成功** [P1/12 评论]
   `codebase_investigator` 子代理在达到最大轮次后仍报告 `status: "success"` 与 `Termination Reason: "GOAL"`，实际中断被隐藏。已有对应修复 PR（#28815）合入。
   [链接](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **[#21409] Generalist agent 挂起** [P1/8 评论/8 👍]
   简单操作（如创建文件夹）也会导致挂起一小时以上，禁用子代理后可规避。影响面较大。
   [链接](https://github.com/google-gemini/gemini-cli/issues/21409)

3. **[#19873] 零依赖 OS 沙箱与执行后意图路由** [P2/8 评论]
   提议利用 Gemini 3 模型的原生 bash 能力，通过零依赖沙箱安全执行 POSIX 工具链（grep/cat/sed/awk），属于架构级增强。
   [链接](https://github.com/google-gemini/gemini-cli/issues/19873)

4. **[#24353] 组件级评估系统** [P1/7 评论]
   已有 76 个行为评估测试、覆盖 6 个 Gemini 模型版本，需要更健壮的组件级 eval 基础设施支撑后续迭代。
   [链接](https://github.com/google-gemini/gemini-cli/issues/24353)

5. **[#22745] AST 感知文件读取、搜索与代码库映射** [P2/7 评论]
   探索通过 AST 感知工具精确读取方法边界、减少 token 噪声，被定位为提升代码库理解效率的关键路径。
   [链接](https://github.com/google-gemini/gemini-cli/issues/22745)

6. **[#21968] Gemini 不使用已有 skills 和子代理** [P2/6 评论]
   用户反馈模型几乎从不自主调用自定义 skills（如 gradle/git 技能说明），仅在显式指令下才会使用。
   [链接](https://github.com/google-gemini/gemini-cli/issues/21968)

7. **[#26522] Auto Memory 对低信号会话无限重试** [P2/5 评论]
   低信号会话未标记已处理，会被后台提取代理反复拉起，造成配额浪费，缺少终止条件。
   [链接](https://github.com/google-gemini/gemini-cli/issues/26522)

8. **[#26525] 确定性脱敏与减少 Auto Memory 日志** [P2/安全]
   Auto Memory 在内容已进入模型上下文后才提示脱敏，存在隐私风险；且日志可能包含已有 skill 数据。
   [链接](https://github.com/google-gemini/gemini-cli/issues/26525)

9. **[#25166] Shell 命令卡在 "Waiting input"** [P1/4 评论/3 👍]
   简单 CLI 命令执行完毕后，终端仍显示为激活并等待输入，需手动干预。
   [链接](https://github.com/google-gemini/gemini-cli/issues/25166)

10. **[#21983] Wayland 下浏览器子代理失败** [P1/4 评论]
    Browser Agent 在 Wayland 环境无法正常工作，影响 Linux 桌面用户。
    [链接](https://github.com/google-gemini/gemini-cli/issues/21983)

## 重要 PR 进展

1. **[#28815] 保留子代理恢复时的原始终止原因**（已关闭·SSR Agent）
   修复 #22323——子代理在最后恢复轮次调用 `complete_task` 后，不再将 MAX_TURNS/TIMEOUT 掩盖为 GOAL 成功。
   [链接](https://github.com/google-gemini/gemini-cli/pull/28815)

2. **[#28816] 修复 MessageBus.request 静默挂起**（已关闭·SSR Agent）
   `publish()` 失败时 floating promise 会导致 60 秒无响应，现在正确注册失败路径避免静默 hang。
   [链接](https://github.com/google-gemini/gemini-cli/pull/28816)

3. **[#28817] 保留子代理执行中的工具调用钩子状态**（已关闭·SSR Agent）
   修复 #22589——首次出现且无需审批的后台工具调用（如 backup）不再被过滤丢弃。
   [链接](https://github.com/google-gemini/gemini-cli/pull/28817)

4. **[#28812] 防止 TUI 无限挂起（添加执行超时）**（已关闭·SSR Agent）
   修复 #21477——裸 Linux 终端下 `getProcessInfo()` 依赖 `ps`，增加超时避免永久卡在 "Initializing..."。
   [链接](https://github.com/google-gemini/gemini-cli/pull/28812)

5. **[#20916] 修复 PTY 文件描述符泄漏**（已关闭·P1）
   修复 #15945——PTY master fd 未正确关闭，导致 macOS 上 PTY 耗尽（`kern.tty.ptmx_max` 511）。
   [链接](https://github.com/google-gemini/gemini-cli/pull/20916)

6. **[#27154] 修复 PTY 内存泄漏**（已关闭·P2）
   `activePtys.delete()` 从 Promise `.then()` 中移出改为同步执行，避免日志流未清理时条目永久驻留。
   [链接](https://github.com/google-gemini/gemini-cli/pull/27154)

7. **[#28738] 允许代理调用代理**（开放·P2）
   通过 `tools:` frontmatter 支持子代理嵌套或自我递归，修复 #22092，扩展 agent 编排能力。
   [链接](https://github.com/google-gemini/gemini-cli/pull/28738)

8. **[#25378] Windows 下 ripgrep EFTYPE 修复**（开放·P2）
   处理 `child_process.spawn` 在架构不匹配（如 ARM 二进制在 x64 上）时的 `spawn EFTYPE` 错误。
   [链接](https://github.com/google-gemini/gemini-cli/pull/25378)

9. **[#27588] WSL2 剪贴板图片粘贴支持**（开放·P2）
   通过 PowerShell interop 从 Windows 剪贴板读取 PNG，修复 #22274，补齐 WSL 环境下的图片粘贴能力。
   [链接](https://github.com/google-gemini/gemini-cli/pull/27588)

10. **[#28597] 环境变量加载顺序修复**（已关闭·P2）
    解决 settings 占位符在 `.env` 加载前展开的竞态条件，确保系统/用户/工作区设置按正确顺序解析。
    [链接](https://github.com/google-gemini/gemini-cli/pull/28597)

## 功能需求趋势

- **子代理可观测性与自主性**：终止原因透明化（#22323）、子代理轨迹分享（#22598）、嵌套调用（#28738）是最集中的方向。
- **记忆系统可靠性**：Auto Memory 的终止条件（#26522）、确定性脱敏（#26525）、无效补丁隔离（#26523）构成完整改进闭环。
- **AST 感知工具链**：从"读文件"升级到"读方法/符号"，被列为降低 token 开销、提升精度的关键路径（#22745、#22746）。
- **平台兼容性扩展**：Wayland 支持（#21983）、WSL2 剪贴板（#27588）、Windows ARM 修复（#25378）持续收到反馈。
- **安全与权限治理**：零依赖 OS 沙箱（#19873）、限制破坏性命令（#22672）、未授权子代理执行（#22093）表明安全边界受关注。

## 开发者关注点

- **子代理行为不透明**：termination reason 误导、子代理轨迹不可见，直接影响调试效率与结果可信度。
- **挂起问题频发**：generalist agent、shell "Waiting input"、TUI 初始化多处出现卡死，开发者被迫手动取消长任务。
- **资源泄漏**：PTY 文件描述符与内存泄漏在长会话中引发系统级问题（如 macOS PTY 耗尽），社区提交了多轮修复。
- **配置不生效**：settings.json 覆盖被忽略（#22267）、symlink 自定义代理无法识别（#20079），降低生态扩展性。
- **模型工具使用不足**：即使定义了相关 skills，模型仍倾向临时脚本而非既有工具，影响用户对自定义 Agent 的投入信心。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-08-15

## 今日速览

v1.0.80 和补丁版 v1.0.80-1 于昨日发布，主要更新模型配置并包含多项修复。社区讨论焦点集中在 MCP OAuth 认证回归（Atlassian / GitLab）、企业账户 Claude 模型意外被禁用，以及 autopilot 模式下的内存崩溃与提示缓存失效问题。

---

## 版本发布

### v1.0.80（2026-08-14）
- 更新模型配置

### v1.0.80-1（2026-08-14）
- 修复与变更

---

## 社区热点 Issues（Top 10）

### 1. Atlassian MCP OAuth 认证回归：1.0.79 起报 RFC 8414 错误
**#4480** | 👍 6 | 💬 4 | 状态：OPEN  
升级到 1.0.79 后，连接 Atlassian 远程 MCP 服务器（`mcp.atlassian.com`）在 OAuth 发现阶段失败：`MCPOAuthError: Incompatible authorization server: authorization server advertised an issuer that does not match the URL its metadata was discovered from (RFC 8414 §3.3)`。1.0.71 中可正常工作，确认回归。  
🔗 https://github.com/github/copilot-cli/issues/4480

### 2. 支持 protobuf OTLP 导出（OTEL_EXPORTER_OTLP_PROTOCOL=http/protobuf）
**#2934** | 👍 6 | 💬 2 | 状态：CLOSED  
Copilot CLI 的 OpenTelemetry 实现仅支持 `application/json` OTLP 导出，标准环境变量 `OTEL_EXPORTER_OTLP_PROTOCOL` 被静默忽略。该 issue 要求补齐 `http/protobuf` 协议支持，以符合 OpenTelemetry 标准生态。  
🔗 https://github.com/github/copilot-cli/issues/2934

### 3. Reasoning effort 'medium' 与 claude-haiku-4.5 不兼容
**#4345** | 👍 4 | 💬 6 | 状态：OPEN  
当 `copilot_cli_opus_medium_effort_default` 与 `copilot_cli_gpt_5_4_mini_for_explore` 两个服务端功能标志同时启用时，子代理执行期间反复报错：`Reasoning effort 'medium' is not supported for model 'claude-haiku-4.5'`。暴露了功能标志组合与模型能力映射的冲突。  
🔗 https://github.com/github/copilot-cli/issues/4345

### 4. 企业组织已启用的模型缺失于目录（Claude Sonnet 5/Opus 5、Kimi K3）
**#4390** | 👍 4 | 💬 6 | 状态：OPEN  
Copilot Business 组织明确启用的模型在 CLI 有效目录中缺失。选择 `claude-sonnet-5` 时提示 `This model is disabled by your...`。所有 Anthropic 模型均不可用，疑似目录同步或策略评估逻辑缺陷。  
🔗 https://github.com/github/copilot-cli/issues/4390

### 5. 企业账户下所有 Claude 模型被禁用
**#4422** | 👍 3 | 💬 3 | 状态：OPEN  
个人企业账户突然无法使用任何 Claude 模型（sonnet 5、4.8 等），尽管 GitHub Copilot 设置中显示已启用。回滚 CLI 版本无效，说明问题不在客户端版本，而在服务端策略或模型目录刷新机制。  
🔗 https://github.com/github/copilot-cli/issues/4422

### 6. MCP registry 策略获取在 CI 中返回 403
**#4346** | 👍 3 | 💬 2 | 状态：CLOSED  
在 GitHub Actions 中使用内置 `GITHUB_TOKEN` 认证（copilot-requests: write）时，MCP 注册表策略获取返回 403，导致 CI 中所有非默认 MCP 服务器不可用。影响依赖 MCP 的自动化流水线。  
🔗 https://github.com/github/copilot-cli/issues/4346

### 7. GitLab MCP OAuth 元数据被拒（RFC 8414 issuer 不匹配）
**#4439** | 👍 2 | 💬 3 | 状态：OPEN  
Copilot CLI 1.0.79 拒绝 GitLab Self-Managed MCP 服务器的 OAuth 2.0 动态客户端注册，报 RFC 8414 issuer 不匹配。与 Atlassian 问题（#4480）症状一致，疑似同一认证逻辑回归。  
🔗 https://github.com/github/copilot-cli/issues/4439

### 8. Autopilot 模式下 Subtasks 冻结无响应
**#4306** | 👍 2 | 💬 3 | 状态：OPEN  
在 autopilot 模式中执行 `/fleet use speckit-automate implement skill` 命令，多个 agent/skill 循环切换后，子任务冻结并停止响应。长时间运行的复杂任务稳定性堪忧。  
🔗 https://github.com/github/copilot-cli/issues/4306

### 9. v1.0.79 致命崩溃：Committing semi space failed（OOM）
**#4499** | 👍 0 | 💬 0 | 状态：OPEN  
`copilot.exe` v1.0.79 在长时间 autopilot 会话中崩溃：`FATAL ERROR: Committing semi space failed. Allocation failed - JavaScript heap out of memory`。关键细节：崩溃时 V8 堆仅使用约 607 MB / 4.30 GB，并非堆限制问题，而是主机 RAM 提交失败（宿主内存不足），属于底层资源管理异常。  
🔗 https://github.com/github/copilot-cli/issues/4499

### 10. BYOK：autopilot 提示轮次重建 transcript 破坏提示缓存
**#4500** | 👍 0 | 💬 0 | 状态：OPEN  
在 `--autopilot` 完成提示轮次中，CLI 会从内部状态重建整个 `input` 数组，而非逐字节重发先前的项目（BYOK `responses` wire API）。虽然 item id 保留，但字节内容变化，导致服务端提示缓存失效，增加延迟与成本。  
🔗 https://github.com/github/copilot-cli/issues/4500

---

## 重要 PR 进展

### #4449 [CLOSED] 将 PR 自动化从 pull_request_target 迁移
作者：mrecachinas | 更新：2026-08-14  
将 invalid-label 自动化从 `pull_request_target` 迁移，使用 issue 级写令牌关闭无效 issue；对可合并 PR 使用无权限的 `pull_request` 信号。提升供应链安全性，减少 Token 滥用风险。  
🔗 https://github.com/github/copilot-cli/pull/4449

### #4497 [OPEN] 修复 fork PR 工作流的关联处理
作者：mrecachinas | 更新：2026-08-14  
当 GitHub 未填充工作流运行中的 PR 关联时，writer 现在会基于受信任的工作流运行元数据查找，并要求恰好存在一个打开的 PR。这是 #4449 迁移后的配套修复，确保 fork PR 自动化在边缘情况下仍能正确工作。  
🔗 https://github.com/github/copilot-cli/pull/4497

### #4496 [CLOSED] 验证 PR 工作流迁移的临时 canary
作者：mrecachinas | 更新：2026-08-14  
包含一个仅文档文件的草稿 PR，用于验证针对 fork 来源 PR 的迁移后自动化行为。验证完成后即关闭，无需审查。  
🔗 https://github.com/github/copilot-cli/pull/4496

---

## 功能需求趋势

- **模型支持扩展**：社区持续要求新增模型（如 GPT-5.6 的 `reasoning.mode` 参数支持，见 #4495），同时大量反馈模型目录同步与可用性问题（#4390、#4422、#4494），说明模型生命周期管理已成为企业用户的核心痛点。
- **MCP 体系成熟化**：MCP OAuth 兼容性（#4480、#4439、#4490）、分页支持（#4006）、配置碰撞检测（#4478）、CI 环境策略（#4346）等问题密集出现，MCP 集成正在从"可用"迈向"可靠"。
- **可观测性标准化**：#2934 要求支持 protobuf OTLP 导出，反映开发者希望将 Copilot CLI 纳入已有 OpenTelemetry 基础设施的诉求。
- **插件系统深化**：#4487 提出插件依赖模型，支持 marketplace 中的插件间依赖声明和自动安装，预示插件生态将进入更复杂的依赖管理阶段。
- **稳定性与资源管理**：#4499（OOM）、#4306（subtask 冻结）、#4477（会话丢失）表明长时运行场景的可靠性是当前短板。

---

## 开发者关注点

- **MCP OAuth 回归影响面广**：Atlassian 和 GitLab 的 MCP 服务器均在 1.0.79/1.0.80 上出现 RFC 8414 issuer 不匹配错误，且 1.0.80 未修复（#4490），开发者对此类"升级即破坏"的回归反应强烈。
- **企业模型策略混乱**：多个 issue 指向组织级模型启用状态与 CLI 实际行为不一致（#4390、#4422、#4481），涉及 Copilot 政策门控与模型目录缓存问题。用户反馈"昨天还能用，今天就不行了"，影响信任度。
- **本地状态缓存陈旧**：#4494 指出新启用的模型需清空本地 Copilot state/cache 才能生效，模型目录缺少主动刷新机制，增加排障成本。
- **编辑权限请求超时**：#4486 反映编辑权限请求在未及时响应时会超时，对并行会话较多的用户造成困扰，是工作流中断的高频来源。
- **会话与上下文丢失**：#4477（停止操作导致整个会话丢失）、#4493（`-w` 会话 `/restart` 失败）、#4489（恢复会话未保留 agent 选择）共同指向会话持久化与恢复机制的不足。
- **文件锁导致的更新失败**：#4488 指出多个 CLI/VS Code 会话同时打开时，插件更新因文件锁失败，高并发场景下的资源冲突需更温和的处理策略。

---

*注：本次日报未提供 GitHub Discussions 数据，故省略热门讨论分栏。以上信息基于 GitHub Issues / PR 元数据整理，链接均来自 `github.com/github/copilot-cli`。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## OpenCode 社区动态日报 — 2026-08-15

### 今日速览

昨日（2026-08-14）发生了严重的 **48 位 ID 时间戳回绕事故**（#42608），导致大量旧会话在 `12:39:55 UTC` 后静默停止响应，成为社区最关注的紧急问题。此外，动态模型发现 PR #42660 一次性关闭了 6 个相关 Issues，是功能开发上的重要进展。过去 24 小时无新版本发布。

---

### 社区热点 Issues

1. **[#42608] 48 位 ID 时间戳回绕导致旧会话全部卡死（已关闭）**
   👍 3 | 评论 5
   48 位 ID 生成器的时间戳在 2026-08-14 12:39:55 UTC 发生回绕，**所有在此时间之前创建的会话**静默停止处理新提示。该 Issue 同时被指认为 #42605 等一批“会话无响应”报告的根因。评论中用户确认重启也无法恢复旧会话，是近期影响面最大的故障。
   https://github.com/anomalyco/opencode/issues/42608

2. **[#42605] 会话保持打开，但 Agent 不再处理后续消息**
   评论 4
   用户报告 Agent 完成任务并提问后，发送新消息无任何响应。与 #42608 时间戳回绕高度相关，可能是同一底层故障的另一个表现。该问题当前仍为 OPEN 状态。
   https://github.com/anomalyco/opencode/issues/42605

3. **[#36997] Desktop App v1.18.1 新布局隐藏了 Plan/Build 切换 UI**
   👍 6 | 评论 12
   新布局设计（`newLayoutDesigns: true`）导致 Plan/Build 模式切换指示器在 UI 中消失，用户无法看到或切换当前 Agent。社区反映 Tab 键切换也随之失效，UI 回归明显。
   https://github.com/anomalyco/opencode/issues/36997

4. **[#38791] Run loop 永不退出：消息 ID 无法按时间排序时陷入死循环**
   评论 6
   核心原因：`SessionPrompt.runLoop` 仅按字符串比较消息 ID 判断轮次结束，这依赖 opencode 自带的时间戳 ID 格式。第三方导入的会话 ID 不满足该假设时，循环会一直执行到 Provider 返回 400。该问题直接影响了会话导入功能的可靠性。
   https://github.com/anomalyco/opencode/issues/38791

5. **[#41518] gpt-5.6-luna 经 OpenCode Go 中继访问返回 403 “model not available in your region”**
   评论 6
   用户通过 `opencode.ai` 的 Go 中继访问 `gpt-5.6-luna` 时被上游拒绝（403），报错显示区域限制。该问题已持续 4 天仍为 OPEN 状态，涉及 OpenCode 官方中继路由的可用性。
   https://github.com/anomalyco/opencode/issues/41518

6. **[#25000] DeepSeek V4 Pro：`reasoning_content` 不一致导致多轮工具调用报错（已关闭）**
   评论 7
   DeepSeek V4 Pro 在多轮工具调用中偶发返回 `reasoning_content` 不一致，触发 `must be passed back to the API` 错误。已定位为思考模式下 Provider 返回内容格式漂移。社区确认问题可复现，当前已关闭，但类似模型的兼容性问题仍在持续出现。
   https://github.com/anomalyco/opencode/issues/25000

7. **[#42657] 多子 Agent 会话下 TUI 严重卡顿（渲染线程 97% CPU）**
   评论 2
   同时运行 2-4 个并发子 Agent 时，TUI 输入延迟 1-3 秒，动画卡顿。在 Warp、Windows Terminal、WezTerm 中均复现，说明是渲染层问题而非终端兼容性。
   https://github.com/anomalyco/opencode/issues/42657

8. **[#37489] 切换模式/上下文压缩时缓存失效，导致性能严重下降**
   👍 1 | 评论 5
   使用本地推理引擎（vLLM/Ollama）时，切换 Agent 模式或执行 compaction 会触发上下文缓存整体失效，显著增加首次响应延迟。社区希望优化缓存复用策略。
   https://github.com/anomalyco/opencode/issues/37489

9. **[#42626] Bash 工具子进程在 stdout 大量小写入时被 SIGKILL**
   评论 3
   在 WSL (Ubuntu 24.04) 上运行 `pytest tests/` 这类产生大量小输出块的命令时，子进程会被 SIGKILL 杀死。内存显示 19GB 可用，初步怀疑与输出缓冲区管理或管道写入竞争有关。当前已关闭，但未在摘要中找到修复方案。
   https://github.com/anomalyco/opencode/issues/42626

10. **[#27553] 功能需求：自动发现 OpenAI 兼容 Provider 的模型**
    👍 4 | 评论 3
    社区长期诉求：当配置了 `baseURL` 的 OpenAI 兼容 Provider（如 llama-swap、Ollama、LM Studio）时，自动调用 `/v1/models` 获取模型列表，免去在 `opencode.json` 中手工枚举。PR #42660 已着手实现此功能。
    https://github.com/anomalyco/opencode/issues/27553

---

### 重要 PR 进展

1. **[#42660] feat(provider): 为自定义 Provider 添加动态模型发现**
   动态模型发现功能落地。该 PR 一次性关闭 **6 个相关 Issues**（#13891、#29308、#28999、#25624、#23327、#26863），允许 OpenAI 兼容 Provider 通过 `/v1/models` 自动发现模型，大幅降低自定义接入成本。
   https://github.com/anomalyco/opencode/pull/42660

2. **[#42656] refactor(protocol): 将 worktree 路由移出 experimental 命名空间**
   将 worktree 相关 API 从 `/api/experimental/project/:projectID/worktree` 提升为顶层资源 `/api/worktree/:projectID`，标志着 worktree 功能向稳定 API 过渡。
   https://github.com/anomalyco/opencode/pull/42656

3. **[#36869] feat(opencode): 为每个工具添加执行超时（含中断与会话恢复）**
   为内置工具和 MCP 工具引入独立的执行超时机制，超时后中止并支持会话恢复。解决了工具长时间阻塞 Agent 循环的问题，并关联了 #20096、#34888 等 5 个相关 Issues。
   https://github.com/anomalyco/opencode/pull/36869

4. **[#36898] fix(cli): 处理后代表权限请求**
   此前无头模式 `opencode run` 只响应根会话的权限请求，子 Task 的权限询问会被静默阻塞。该 PR 使子会话的权限请求也能被正确响应。
   https://github.com/anomalyco/opencode/pull/36898

5. **[#36883] fix(core): 在 subagent 工具中向模型暴露有效的子 Agent ID**
   模型此前因不知道可用的 Agent ID 列表，会猜测名称（如 `explorer` 而非实际 ID）。该修复让模型在调用 subagent 工具时获得准确可用的 ID 列表，减少了工具调用失败。
   https://github.com/anomalyco/opencode/pull/36883

6. **[#36862] fix(desktop): 通过协议校验 `openExternal` URL**
   安全修复：`shell.openExternal` 原先接受任意 URL，存在 `file://`、`javascript:` 等危险协议的安全隐患。现在增加了协议白名单校验。
   https://github.com/anomalyco/opencode/pull/36862

7. **[#36861] fix(session): 从 openai-compatible 元数据中的 usage 回退恢复缓存 token**
   自定义 baseURL 的 Provider 通过元数据（如 `prompt_tokens_details.cached_tokens`）上报缓存 token 时，此前会被忽略。该修复恢复了缓存 token 的统计与计费信息。
   https://github.com/anomalyco/opencode/pull/36861

8. **[#36860] fix(opencode): 去除 MiniMax 输出中泄漏的 tool_call 尾缀**
   MiniMax 模型会在普通 assistant 文本后附加一段序列化的 tool_call 标记残片。该 PR 在输出前将其剥离，避免下游解析出错。
   https://github.com/anomalyco/opencode/pull/36860

9. **[#36854] fix(app): 避免会话切换时触发不必要的 Suspense 闪屏**
   会话时间轴资源此前在 JSX 中直接读取，每次切换会话都错误触发 Suspense 边界。改为正确读取后，消除了切换时的加载闪屏。
   https://github.com/anomalyco/opencode/pull/36854

10. **[#36853] fix(app): 降低会话切换时的响应式级联开销**
    重构会话切换为合并的状态更新，减少 SolidJS 响应式系统的级联派生计算，提升会话切换速度。为 #31517 的重提版本。
    https://github.com/anomalyco/opencode/pull/36853

---

### 功能需求趋势

1. **OpenAI 兼容 Provider 的自动化配置** — 除了动态模型发现（#27553、#42660），还有多个相关 Issue 被一并关闭（#13891、#29308 等），说明用户对自定义模型接入的“零配置”体验有强烈诉求。
2. **运行时权限控制** — 社区提出 `/approve on|off` 命令（#41909），希望在会话运行中按需切换逐步审批模式，而非锁定在启动时的配置。
3. **会话可靠性与恢复** — 48 位时间戳回绕（#42608）、导入会话死循环（#38791）、工具执行超时恢复（#36869）等问题的集中出现，反映用户对会话长期运行稳定性的重视。
4. **TUI 性能优化** — 多子 Agent 渲染卡顿（#42657）和上下文缓存失效（#37489）表明，随着 OpenCode 功能增加，性能调优成为社区关注的新焦点。

---

### 开发者关注点

- **会话静默无响应是最紧急痛点**：Timewrap 事故导致大量存量会话无法继续，且用户难以自行恢复。多个“会话不响应”类 Issue（#42605、#42594、#42611）在一天内集中出现，社区期待更健壮的 ID 生成方案和故障快速恢复机制。
- **UI 回归影响升级信心**：Desktop App v1.18.1 隐藏 Plan/Build 切换的问题（#36997）反馈最为集中，用户对自动更新后 UI 行为异变颇为敏感。
- **多 Provider 兼容性问题频发**：DeepSeek、GLM、Kimi、gpt-5.6-luna 等模型在 OpenCode Go 中继上均有报错（#25000、#41518、#42616、#41120），开发者希望官方中继能更快适配各家模型的特有返回格式与区域策略。
- **付费/配额体验仍需打磨**：多起“已付费但余额未到账”“免费配额未重置”类反馈（#42606、#42637、#42385、#42215），虽然多为账号侧问题，但官方计费系统的消息同步与错误提示精度有待提升。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 — 2026-08-15

## 今日速览

昨日发布 v0.84.2，带来全屏对话搜索与可配置默认工具两项新特性。社区方面，Windows/WSL 支持问题（#7547、#6187）持续保持最高热度，同时多项模型兼容性修复（xAI 默认切换、Kimi 缓存计费、Baseten 输出上限）集中落地，显示出跨提供商适配已成为当前迭代重点。

---

## 版本发布

### [v0.84.2](https://github.com/earendil-works/pi/releases/tag/v0.84.2)

- **全屏对话搜索（Fullscreen transcript search）**：在 TUI 全屏模式下支持搜索与导航匹配结果，详见 [TUI Fullscreen Viewport 按键文档](https://github.com/earendil-works/pi/blob/v0.84.2/packages/coding-agent/docs/keybindings.md#tui-fullscreen-viewport)。
- **可配置默认工具（Configurable default tools）**：允许在启动时自定义默认启用的工具集。

---

## 社区热点 Issues

### 1. [Windows 上如何使用 Pi？你在 Windows 上遇到了哪些问题？](https://github.com/earendil-works/pi/issues/7547) — #7547 · OPEN · 27 评论
社区发起的大范围调研，讨论 Windows 上运行 Pi 的多种方式（原生、WSL、容器等）及痛点，旨在确定核心支持优先级。迄今 27 条评论，是当前最活跃的讨论帖。

### 2. [Pi 登录在 WSL 中挂起：浏览器完成 GitHub Copilot 授权后无法继续](https://github.com/earendil-works/pi/issues/6187) — #6187 · CLOSED · 26 评论
WSL 下设备授权流程完成但客户端检测不到授权状态，进程挂起。26 条评论显示大量用户受此影响，是 WSL 体验的核心阻塞问题。

### 3. [Anthropic 提供商改写最新助手消息中的 thinking 块，导致 Opus 4.8 自适应思考返回 400](https://github.com/earendil-works/pi/issues/5223) — #5223 · CLOSED · 17 评论 · 6 👍
多轮对话中途因 `thinking`/`redacted_thinking` 块被改写而触发 400 错误。获得 6 个 👍，是近期最受关注的模型协议兼容性问题。

### 4. [TUI 在流式输出时占满整个 CPU 核心：Intl.Segmenter 未缓存 + 逐块 Markdown 重建](https://github.com/earendil-works/pi/issues/6665) — #6665 · OPEN · IN PROGRESS · 12 评论
长会话下 TUI 单核满载，`spindump` 定位到 `Markdown.render` → `Intl.Segmenter` 未缓存的分词调用。已确认是核心问题（非扩展导致），标记为进行中。

### 5. [终端无原因滚动到会话开头](https://github.com/earendil-works/pi/issues/5023) — #5023 · CLOSED · 12 评论
模型输出期间终端随机跳转到会话开头并迅速回到底部，影响阅读连续性。12 条评论表示复现频率较高。

### 6. [大型组织的 GitHub Copilot 登录返回 429（限流）](https://github.com/earendil-works/pi/issues/7850) — #7850 · CLOSED · 9 评论 · 7 👍
当组织的 Copilot 启用 20+ 可用模型时，设备授权成功后 Pi 登录 Copilot 报 `429 Too Many Requests`。获得 7 个 👍，是昨日评论数增长最快的问题之一。

### 7. [Z.AI Coding Plan 默认配置引用了已移除的模型](https://github.com/earendil-works/pi/issues/8096) — #8096 · CLOSED · 5 评论
`defaultModelPerProvider` 仍默认选择 `glm-5.1`，但 models.dev 的 `zai-coding-plan` 目录已不再包含该模型，导致默认配置失效。暴露了模型目录自动生成与硬编码默认值之间的同步问题。

### 8. [扩展加载器无法解析 pnpm 安装扩展的声明依赖（jiti + 隔离 node_modules 布局）](https://github.com/earendil-works/pi/issues/8092) — #8092 · CLOSED · 5 评论
pnpm 的 `.pnpm` 符号链接布局导致 jiti 解析依赖失败。影响使用 npm 安装方式的扩展作者，已有对应 PR #8112 修复。

### 9. [编辑工具渲染大型 diff 时导致 TUI 崩溃（执行中与会话恢复时）](https://github.com/earendil-works/pi/issues/8036) — #8036 · OPEN · 2 评论
一次编辑成功但产生约 14.5MB 的 diff（HTML 长行），渲染时立即崩溃，会话恢复时再次崩溃。属于极端输入下的稳定性问题。

### 10. [openai-completions：追踪 Kimi 顶层 cached_tokens 用量](https://github.com/earendil-works/pi/issues/8075) — #8075 · OPEN · IN PROGRESS · 2 评论
Kimi 将缓存命中报告为顶层 `usage.cached_tokens`，当前被忽略并计入普通输入 token，导致用量与成本统计不准。已有对应 PR #8119。

---

## 重要 PR 进展

### 1. [feat(ai): 新增 ChatGPT OAuth 图像生成能力](https://github.com/earendil-works/pi/pull/8139) — #8139 · CLOSED
复用现有 OpenAI Codex OAuth 与 Responses 基础设施，新增原生 ChatGPT 图像生成/编辑传输。用户无需 OpenAI API key 即可通过 ChatGPT 订阅权益生成图像。

### 2. [feat(ai): 将 xAI 模型路由到 Responses API 并将默认模型切换为 Grok 4.6](https://github.com/earendil-works/pi/pull/8124) — #8124 · OPEN
默认响应 API 从 Completions 切换为 Responses，同时将默认模型从 Grok 4.5 升级为 Grok 4.6，并按照其他提供商模式发送 Pi 用户代理。

### 3. [feat(coding-agent): 实验性 append 压缩模式](https://github.com/earendil-works/pi/pull/8120) — #8120 · OPEN
`PI_EXPERIMENTAL=1` 时启用 append 压缩：复用现有系统提示词、工具、变换后的上下文与路由会话，使压缩前缀能复用提供商侧的 prompt 缓存。

### 4. [fix: 追踪 Kimi 缓存 token 用量](https://github.com/earendil-works/pi/pull/8119) — #8119 · OPEN
解决 #8075：将 Kimi Chat Completions 响应中顶层 `usage.cached_tokens` 计入 `rawUsage` 并作为缓存读取输入 token 处理。

### 5. [fix(ai): 将 Baseten DeepSeek V4 Flash 输出上限调整为 384k tokens](https://github.com/earendil-works/pi/pull/8146) — #8146 · CLOSED
models.dev 标记该模型支持 1,048,576 输出 tokens，但 Baseten 实际仅提供 384k 上限。在模型目录中为 `deepseek-ai/DeepSeek-V4-Flash-0731` 修正 `maxTokens`。

### 6. [perf(tui): 全屏会话窗口化渲染](https://github.com/earendil-works/pi/pull/8143) — #8143 · CLOSED
全屏模式现在保留完整的活跃人类对话记录（含压缩前历史），同时模型上下文保持压缩状态。渲染器按精确块高只绘制视口相交的块，大幅减少渲染负担，配合 v0.84.2 发布。

### 7. [fix(coding-agent): jiti 导入前对扩展入口做 realpath 解析](https://github.com/earendil-works/pi/pull/8112) — #8112 · OPEN
关闭 #8092：扩展入口先经过 `realpath` 再交给 jiti，解决 pnpm 隔离布局下符号链接导致的上游依赖解析失败。

### 8. [fix(tui): 选区复制走宿主剪贴板，让 "Copied!" 名副其实](https://github.com/earendil-works/pi/pull/8110) — #8110 · CLOSED
修复 #7761：旧实现直接写裸 OSC 52 序列并无条件提示 "Copied!"。对于忽略 OSC 52 的终端（macOS Terminal.app、VTE 系、无转发的 tmux），改为回退到宿主剪贴板方案，确保提示真实有效。

### 9. [feat(ai): 新增 Anthropic Vertex 提供商](https://github.com/earendil-works/pi/pull/5262) — #5262 · OPEN
为 Google Cloud Vertex AI 上的 Claude 增加内置 `anthropic-vertex` 提供商，基于 `AnthropicVertex` SDK 适配现有 Anthropic Messages 流式链路，复用共享的请求/流/工具/思考块处理逻辑。

### 10. [feat: 新增 Amazon Bedrock Mantle OpenAI Responses 提供商](https://github.com/earendil-works/pi/pull/6216) — #6216 · OPEN
基于 OpenAI 官方的 Bedrock Provider，为 Amazon Bedrock Mantle 的 OpenAI Responses API 提供支持，企业用户的云上部署又多了一个选择。

---

## 热门 Discussions

### Show and tell
- **[pi2dsh：Pi 扩展无需修改即可运行在 DeepSeek Harness 上（前 50 验证：39/50 可挂载，32/50 实测可用）](https://github.com/earendil-works/pi/discussions/8090)** — #8090 · 1 评论 · 1 👍
  第三方兼容层 `pi2dsh`（npm 包）让 Pi 扩展生态直接复用到新开源的 DeepSeek Harness 运行时，大幅扩展了 Pi 扩展的适用范围。
- **[pi-acp-jetbrain：在 JetBrains IDE 中运行 Pi](https://github.com/earendil-works/pi/discussions/8142)** — #8142 · 0 评论 · 1 👍
  基于 Agent Client Protocol（ACP）的适配器，支持在 IntelliJ 2026.2+ 中直接使用 Pi 会话，IDE 集成方向又进一步。

### Q&A
- **[问题：扩展工具 schema 中的 $ref 导致 OpenAI 兼容提供商报错（Dahl、LMSpeed 等）](https://github.com/earendil-works/pi/discussions/8136)** — #8136 · 0 评论 · 1 👍
  非严格 OpenAI 兼容提供商在严格校验 JSON Schema 时，拒绝 `tools[N].function.parameters` 中的 `$ref` 关键字，返回 400 错误。扩展作者需注意 schema 的兼容性写法。

---

## 功能需求趋势

综合昨日 Issues、PRs 与 Discussions，社区聚焦以下方向：

1. **新模型与提供商支持（最活跃）**：xAI 切换 Responses API 并默认 Grok 4.6（#8124）、SiliconFlow 内置提供商（#8113）、Anthropic Vertex（#5262）、Bedrock Mantle（#6216）、Kimi/Moonshot 端点识别修复（#8109、#8104），以及模型目录正确性修正（#8096、#8146）。

2. **TUI 性能与渲染优化**：#6665 单核满载问题标记进行中，配合 #8143 全屏窗口化渲染，以及 #5023 的滚动跳动，说明长会话下 TUI 渲染路径仍有系统性地优化空间。

3. **Windows / WSL 体验**：#7547 大范围调研 + #6187 WSL 登录挂起 + #8047 Windows 下 Unix socket 测试失败，表明 Windows 是当前平台支持的薄弱环节。

4. **扩展生态与可脚本化**：pnpm 扩展依赖修复（#8112）、pi2dsh 跨运行时兼容（#8090）、JetBrains ACP 适配（#8142）、纯 CLI 参数/环境变量调用（#8114）、扩展基础操作的原子会话状态提案（#8100）——开发者希望 Pi 更容易嵌入自己的工具链。

5. **成本与用量透明度**：Kimi 缓存 token 统计（#8075/#8119）、按模型配置压缩参数（#8133），社区对 token 成本可见性和精细控制的需求上升。

6. **输入体验细节**：技能名在提示词中间自动补全（#8144）、命令补全弹窗位置可配置（#8132），属于高频交互的小改进诉求。

---

## 开发者关注点

- **鉴权与登录是最大痛点**：GitHub Copilot 组织账户 429 限流（#7850、#8010）连续两天出现；WSL 登录挂起（#6187）；Anthropic OAuth 刷新在 signal 为 `undefined` 时崩溃（#8131），鉴权链路的健壮性仍有欠账。
- **提供商协议兼容性参差**：Anthropic thinking 块被改写导致 400（#5223）、`strict: null` 使可选参数变必填（#8105）、`$ref` 被严格校验拒绝（#8136）、WebSocket 瞬断后永久钉死在 SSE（#8125）——每接入一个新模型/网关都可能踩到协议边缘情况。
- **极端输入导致崩溃**：14.5MB 大 diff 渲染崩溃（#8036）、冷恢复时重放已被压缩移除的失败响应（#7724），开发者希望 Pi 在异常数据下能有更稳健的降级表现。
- **“假成功”式的剪贴板与用量反馈引发信任问题**：TUI 显示 "Copied!" 但剪贴板为空（#7761/#8110）、未识别 Kimi 缓存 token 导致计费虚高（#8075）——两个问题虽小，但直接影响用户对工具可靠性的判断。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-08-15）

## 今日速览

昨日发布正式版 **v0.21.12**，并推进了多个 web-shell 预览版本，核心新增为工作区文件拖拽上传能力。社区侧围绕 **CI 稳定性**（多条 E2E 失败）、**会话/资源管理** 与 **架构重构** 展开高频讨论，同时有 2 个安全相关 issue 被关闭或修复，整体质量治理节奏明显加快。

## 版本发布

- **v0.21.12** — 正式版发布，改进内容详见 Release notes。
- **v0.21.12-preview.4 / preview.3** — 主要包含两项变更：
  - `fix(web-shell): preserve standalone session target`（[PR #9038](https://github.com/QwenLM/qwen-code/pull/9038)）
  - `feat(web-shell): support workspace file uploads`（[PR #8874](https://github.com/QwenLM/qwen-code/pull/8874)）
- **v0.21.11-nightly.20260814.45c2e73080** — 夜间构建，包含上述 web-shell 修复与上传支持。
- **dsw-eas-tb-e2e 系列验证版本**（r1/r2/r3/r6）— 用于 DSW SWE-bench Verified 与 Terminal-Bench 端到端验证，r6 显示 SWE-bench Verified 500、Terminal-Bench 2.0 89，基准版本为 v0.21.2。

## 社区热点 Issues

选取 10 个最受关注的 Issue（按评论数排序）：

1. **[#8957] [Regression] Qwen Code 加载图片即崩溃（自 0.21.2 起）** — 12 条评论，P2 回归缺陷，影响版本升级用户，社区反馈明确“0.21.1 是最后一个正常版本”。  
   [查看 Issue](https://github.com/QwenLM/qwen-code/issues/8957)

2. **[#8678] fix(serve): 大会话恢复超时时保留当前会话（已关闭）** — 9 条评论，P1 等级，最终结论为“部分解决并被替代”，涉及请求级恢复超时、附件身份隔离等复杂修复。  
   [查看 Issue](https://github.com/QwenLM/qwen-code/issues/8678)

3. **[#8051] tracking(serve): 限制多工作区守护进程资源使用** — 9 条评论，P2 特性请求，指出仅计数限制无法约束请求体、WebSocket 缓冲等内存占用，社区持续关注服务端资源治理。  
   [查看 Issue](https://github.com/QwenLM/qwen-code/issues/8051)

4. **[#4063] refactor: core + cli 架构 Review — 12 项结构性问题清单** — 8 条评论，包含 P0 级“核心类型系统被 @google/genai 绑架”等架构债，已吸引 1 个 👍，是长期重构最重要的入口。  
   [查看 Issue](https://github.com/QwenLM/qwen-code/issues/4063)

5. **[#9143] Main CI failed: E2E Tests on c5bf222474** — 7 条评论，自动追踪的 CI 失败 issue，E2E 测试在报告结果前即失败，影响主分支稳定性判断。  
   [查看 Issue](https://github.com/QwenLM/qwen-code/issues/9143)

6. **[#9002] SDK Python 拒绝 permission_mode="auto" 而 CLI 支持** — 6 条评论，P3，客户端校验与 CLI 能力不一致，导致 SDK 用户无法使用自动授权模式。  
   [查看 Issue](https://github.com/QwenLM/qwen-code/issues/9002)

7. **[#6806] /compress 后状态栏上下文百分比不刷新** — 5 条评论，P2 UI 问题，压缩后 token 显示仍为旧值，影响交互体验。  
   [查看 Issue](https://github.com/QwenLM/qwen-code/issues/6806)

8. **[#8582] 安全：只读 shell 分类器自动批准隐藏命令替换（已关闭）** — 5 条评论，P1 安全漏洞，通过续行符或 `${var@P}` 绕过检查，现已关闭，属于高危安全修复。  
   [查看 Issue](https://github.com/QwenLM/qwen-code/issues/8582)

9. **[#8871] ACP 子进程报错 “Unknown argument: acp”** — 5 条评论，P2，`qwen serve` 的 HTTP 桥接模式下子进程参数解析失败，连带导致 401 鉴权失败。  
   [查看 Issue](https://github.com/QwenLM/qwen-code/issues/8871)

10. **[#9146] refactor(core,cli): 让 utils/ 成为叶子层** — 4 条评论，P2，统计显示 51 个文件对 utils/ 存在 107 次向上引用，目录图存在循环依赖，是架构治理关键任务。  
    [查看 Issue](https://github.com/QwenLM/qwen-code/issues/9146)

## 重要 PR 进展

选取 10 个重要 PR，涵盖功能、修复和架构改进：

1. **[#9196] fix(core): 重试耗尽后接受安静的 tool-result 结束** — 修复 `NO_TOOL_RESULT_PROGRESS` 误判，立即解决 headless 运行被中断的问题。  
   [查看 PR](https://github.com/QwenLM/qwen-code/pull/9196)

2. **[#9127] feat: 端到端支持会话媒体引用** — 在守护进程、ACP 桥、TypeScript SDK 与 Web Shell 中统一媒体 ID 引用机制，图片可只上传一次并复用。  
   [查看 PR](https://github.com/QwenLM/qwen-code/pull/9127)

3. **[#9171] fix(devx): 单元测试构建前置缺失时给出可操作提示** — 为 CLI 单测增加 vitest globalSetup 检查，避免因缺少 dist 输出而报出晦涩错误。  
   [查看 PR](https://github.com/QwenLM/qwen-code/pull/9171)

4. **[#9027] feat(cli): /review 评论改为平实语言，严重程度跟随 attribution** — 提升 PR 评论可读性，并区分不同归属下的措辞策略。  
   [查看 PR](https://github.com/QwenLM/qwen-code/pull/9027)

5. **[#9118] feat(review): 采用轮次感知的收敛姿态** — 随 review 轮次增加自动提高发帖门槛，默认促进 review→fix→re-review 循环收敛，避免无休止扩大 diff。  
   [查看 PR](https://github.com/QwenLM/qwen-code/pull/9118)

6. **[#9122] feat(web-shell): 改进侧边栏会话管理** — hover 显示详情、文件夹预览 5 行、长标题滚动、运行中会话状态标识等，提升 Web Shell 可用性。  
   [查看 PR](https://github.com/QwenLM/qwen-code/pull/9122)

7. **[#9049] feat(channels): 添加钉钉工作台渠道** — 复用已认证 DWS CLI 配置，支持 DM、@提及、文档通知和待办变更等，进一步扩展企业 IM 集成。  
   [查看 PR](https://github.com/QwenLM/qwen-code/pull/9049)

8. **[#9082] fix(ci): 强制推送 release 分支使重试替换失败尝试** — 修复 release 发布重试时因陈旧分支导致无法提交的问题，提升发布流程韧性。  
   [查看 PR](https://github.com/QwenLM/qwen-code/pull/9082)

9. **[#9007] fix(serve): 按字节限制 ACP HTTP 预附加缓冲区** — 从“数量限制”升级为“字节限制”，防止内存被大请求体打爆，对应 #8051 的资源治理方向。  
   [查看 PR](https://github.com/QwenLM/qwen-code/pull/9007)

10. **[#9136] fix(core): 限制 workflow meta 的求值** — 为 `meta` 提取增加 vm 超时，避免恶意/异常字面量导致进程卡死。  
    [查看 PR](https://github.com/QwenLM/qwen-code/pull/9136)

## 功能需求趋势

综合 Issues 与 PR，社区主要关注以下方向：

- **Web Shell 体验**：文件上传、会话管理、媒体引用、Electron 桌面宿主评估等近期高频出现。
- **服务端资源治理**：多工作区守护进程的内存限制、缓冲字节控制、会话恢复超时处理。
- **架构质量与重构**：核心类型解耦、utils/ 叶子化、依赖方向治理，多名资深开发者持续提交架构 issue。
- **CI/CD 稳定性与安全**：E2E 失败自动追踪、release 重试修复、PAT 隔离、只读 shell 安全加固。
- **模型多模态能力**：图片加载崩溃修复、音频桥接、会话内媒体引用，反映多模态输入场景需求上升。
- **新渠道与模型支持**：钉钉工作台、Kimi / 小米 MiMo 供应商预置。

## 开发者关注点

- **崩溃与回归**：0.21.2 起图片加载崩溃属高危回归，需尽快定位；空跑 headless 场景被 `NO_TOOL_RESULT_PROGRESS` 误杀的问题已有 PR 修复，等待合并。
- **内存与性能**：长会话 UI History 无界增长、滚动缓冲/内联图片渲染重复计算等问题依旧开放，资源上限管理是服务端核心诉求。
- **安全**：只读 shell 分类器绕过已修复，但 PAT 共享宿主风险仍未闭环，社区关注自动化流程中的隔离措施。
- **SDK 一致性**：Python SDK 与 CLI 参数校验不一致（如 `permission_mode="auto"`）影响实际使用，需要尽快对齐。
- **架构债治理**：`utils/` 循环依赖、`@google/genai` 核心类型绑定等 P0/P2 问题被反复提及，开发者期待系统性重构而非零散修补。
- **自动化维护效率**：多条 CI 失败自动 issue 与 autofix 相关 PR 表明团队正在加强机器人辅助的可持续开发流程，但 runner 隔离问题仍未解决。

</details>

<details>
<summary><strong>CodeWhale</strong> — <a href="https://github.com/Hmbown/CodeWhale">Hmbown/CodeWhale</a></summary>

## CodeWhale 社区动态日报 — 2026-08-15

## 今日速览

v0.9.8 正式发布，Codewhale 品牌全面接管 legacy `deepseek-tui`，并新增 Gemini 独立后端与本地 DS4 一等公民支持。社区围绕 agent tool 32 字段 schema 简化（#5324）与 `/dryrun` 调试命令（#1004）展开高热度讨论；同时维护者报告 Web UI “totally broken” 的 P0 问题（#5370），CI 红（#5383/#5377）已被快速修复。

## 版本发布

**v0.9.8** — Codewhale 成为 Shannon Labs 公开产品的正式名称，`codewhale` 命令、npm 包与发布资产名称保持小写技术标识符；legacy npm 包 `deepseek-tui` 弃用，不再有后续版本。综合合并记录推断，本版本还带来：registry 供应商从 43 增至 45（含 Google Gemini 独立后端）、本地 DS4/DwarfStar 路由成为一等公民、Auto-Review 升级为双层模式并引入 model guardian（见 #5353）。v0.8.x 的 legacy `deepseek` 用户需关注迁移指引。

## 社区热点 Issues

1. **[#5324] agent tool: 简化 32 字段 JSON schema** — 维护者亲自发起。模型端 `agent` 工具承载 8 个动作、32 个属性且零必填字段，运行时还接受别名袋，导致模型频繁报错。8 条评论，社区基本认可拆分 schema 的方向，PR #5369 已先行落地 Moonshot schema 降级。
2. **[#5370] P0: Web UI 外观与功能“完全损坏”** — 维护者报告公开 Web UI 需全面审计重建，需区分 codewhale.net 与独立 CWC 应用。虽然仅 1 条评论，但 P0 级别意味着最高优先级，与 #5289/#5290 的 Web 修复同属一条战线。
3. **[#3192] 申请加入 agentclientprotocol/registry** — 13 条评论，为本轮 Issue 最高热度。社区希望通过 ACP 注册表让 Zed 等编辑器一键安装 Codewhale，是生态集成的高频呼声。
4. **[#1004] `/dryrun` — 预览即将发送的 chat completion 请求** — 9 条评论。DeepSeek V4 Pro 长 turn（长 system prompt、多缓存文件、工具定义、@提及、多步思考）下，开发者无法在不真正发送的情况下确认请求内容，`/dryrun` 是明确刚需。
5. **[#4326] 32-worker 风暴取消后 RSS 不回落** — 6 条评论。新的 32-worker PTY 基准证明高扇出可操作，但取消后一次性 RSS 采样不降反升，需要区分分配器高水位留存与真实 worker/运行时泄漏。
6. **[#5374] agent 输出文字乱码（macOS）** — 最新 bug 报告，4 条评论并附截图。agent 写入时文本整体损坏，用户表示“完全无法阅读”，属直接影响使用的显示层问题。
7. **[#1482] NVIDIA NIM 不工作** — 6 条评论。调用 API 返回 404 page not found，且 `deepseek doctor` 输出仍为 0.8.29 版本，暴露第三方兼容服务商接入与诊断信息滞后的双重问题。
8. **[#5293] TUI 默认审批改为 deny-by-default 引发误操作** — 5 条评论、1 👍。用户发现 v0.9.4 起权限对话框默认高亮项变化，打破既有交互模式，可能让用户本想快速确认却误拒操作；要求可配置并明确解释。
9. **[#5350] 简化第三方模型配置，增加预制模板** — 中文社区需求。手动填 Base URL/模型名/密钥环境变量门槛高，保存后还常卡在 `not checked` / `cache failed`；建议内置模板、文档说明、测试连接按钮。
10. **[#5311] v0.9.8: Kimi 级插件系统与联邦市场** — 插件安全安装基础已有，但缺完整产品形态：需 Agent Plugins v1 的 `plugin.json` 之上继续补齐发现、更新、联邦市场与生命周期管理，向 Kimi 看齐。

## 重要 PR 进展

1. **[#5353] feat(tui): Auto-Review 引入 model guardian 层** — Auto-Review 变为真正的双层模式：确定性底层保持不可绕过，fallback 升级为一次性 model guardian 而非静默阻断；采用 Codex `auto_review` 语义与 Kimi 模式词汇，Codewhale 保持 fail-closed 默认。
2. **[#5358] feat(engine): 拒绝理由 + turn 断路器** — 修复被拒动作反复重试耗尽 step 预算的问题。`AutoReviewPlanDecision::Block` 现在携带明确理由，并增加断路器中止循环。
3. **[#5369] fix(tools): Moonshot schema 降级而非拒绝条件式 schema** — 为 #5324 铺路的关键前置。处理 Moonshot 模型对条件 schema 支持不佳的问题，先单独合入保持 schema 切面纯净。
4. **[#5365] feat(provider): 本地 DS4/DwarfStar 一等公民接入** — 不新增协议适配器，复用 OpenAI 兼容传输；`/setup provider ds4` 与 provider-picker `D` 快捷键直达预填 keyless 回环预设。
5. **[#5382] fix(state): session-index 写入串行化** — 修复 `StateStore::append_thread_name` 在 `Arc<Mutex<Connection>>` 之外读写索引导致的并发静默数据丢失；修复 #5380 的数据一致性问题。
6. **[#5381] fix(hooks): webhook HTTP client 构建失败不再 panic** — `WebhookHookSink::new` 的 fallback 路径原以 `.expect()` 结束，TLS 后端配置错误等环境问题会直接崩溃宿主；改为优雅错误传播。
7. **[#5339] fix(engine): 过滤子代理持有的 shell 补全事件** — 防止子代理后台 shell 完成事件污染父模型流，同时保留父级未持有补全与任务/状态可见性，关闭 #5325。
8. **[#5364] feat(tui): Markdown 引用块渲染 quote rail** — 用真正的引用栏渲染 `>` 行，替代原先的纯文本段落展示；支持嵌套、行内格式、自动换行与正确的选择复制行为。
9. **[#5384] test(cli): 重新固定 provider-count 断言** — v0.9.8 的 registry 从 43 增至 45、catalog 从 38 增至 40，旧断言导致 main 红；两个整数更新即关闭 #5383。
10. **[#5378] test(tui): 重新固定 thinking-ladder 断言** — 9 个测试仍断言旧版 off/high/max 词汇，合并 `6f6c35183` 后 macOS/Windows CI 全红；本 PR 修复 #5377。
    - 另有 5 个 dependabot 依赖升级 PR（rusqlite 0.40.2、rmcp 3.1.2、thiserror 2.0.20、ratatui 0.30.2、tower-http 0.7.0）。

## 热门 Discussions

**General**
- **[#5273] In a galaxy far, far away - The Marker Strikes Again** — 9 条评论。作者分享上下文窗口接近填满时的模型行为片段：400K tokens 时开始出现异常，548K 时任务完成。引发社区对超长上下文下模型稳定性与压缩策略的讨论。

**Q&A**
- **[#5386] Behavioural shift? How much? And Why?** — 0 条评论但 1 👍。作者对比 3-4 周前后 Codewhale 的行为明显变化，难以区分是 DeepSeek-v4-Flash 升级还是 Codewhale 自身更新所致；提问精确度提升的幅度与原因，等待社区验证。

**Show and tell**
- **[#5385] codewhale-dsh：把 DeepSeek Harness（9.3 万 star）变成 codewhale 子 agent** — 社区开发者将 DeepSeek 官方 Harness 通过 MCP bridge + 官方 ACP 接入 Codewhale，DSH 作为子 agent 在后台干活，支持实时吐字、权限求助、优雅取消与 token 账单拆分。演示了插件化生态的实际玩法。

## 功能需求趋势

- **新模型与本地路由支持**：DS4 本地一等公民落地、Gemini 独立后端加入；NVIDIA NIM 兼容性 (#1482)、第三方服务商预制模板 (#5350) 是持续诉求。
- **可观测性与调试能力**：`/dryrun` (#1004) 预览请求、session peek 剔除内部运行时事件 (#5376)、输出 token 上限修正 (#5373) — 开发者要求“看得见、可控制”。
- **插件与生态集成**：ACP 注册表 (#3192)、Kimi 级插件系统与联邦市场 (#5311) — 从“可用”走向“生态”。
- **可靠性兜底**：并发写串行化 (#5382)、webhook panic 修复 (#5381)、RSS 内存边界 (#4326)、CI 红快速修复 — 稳定性成为 v0.9.8 关键词。
- **TUI/UX 打磨**：宽终端回归 (#5322)、Markdown 引用渲染 (#5364)、子代理身份统一 (#5287)、更新提示 (#5053)、审批默认值可配置 (#5293)。

## 开发者关注点

- **agent tool schema 复杂度过高**导致模型频繁报错，是当前模型交互层面最大痛点（#5324）。
- **上下文窗口管理困难**：长上下文下行为漂移、压缩契约缺失（#5273、#5386、#4394）。
- **升级回归问题频现**：宽终端输出区、doctor checkpoint 卡住、默认审批项改变（#5322、#5340、#5293）。
- **第三方服务商配置门槛高**且状态反馈不可靠（#5350、#1482）。
- **CI 稳定性与测试断言失配**：v0.9.8 上线后连续出现 provider-count 与 thinking-ladder 两类 CI 红（#5383、#5377、#5355）。
- **并发与崩溃风险**：StableStore 克隆场景下 session-index 静默丢数据、webhook 构建失败直接 panic（#5380、#5379）。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*