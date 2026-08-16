# AI CLI 工具社区动态日报 2026-08-16

> 生成时间: 2026-08-15 23:11 UTC | 覆盖工具: 9 个

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

# AI CLI 工具社区动态横向对比分析报告（2026-08-16）

## 1. 生态全景

当前 AI CLI 工具生态整体处于"功能爆发后的稳定性补课期"——各工具已从"能否完成任务"的竞争，转向状态机正确性、跨会话可靠性、资源治理与安全边界等工程化命题。社区对 MCP 集成稳定性、OAuth 认证链路、子代理真实终止状态以及 Windows/macOS 桌面端性能回归的投诉高度集中，说明"能跑通 Demo"不再是门槛，"可长期无人值守运行"成为共同期待。版本迭代仍保持高速（Codex、Gemini CLI、Qwen Code 均以 alpha/nightly 节奏发布），但头部工具 Claude Code、Copilot CLI 的日 PR 活跃度明显低于扩张期项目（Codex、OpenCode），呈现成熟期与快速迭代期并存的格局。整体趋势是：AI CLI 正从开发者玩具演进为生产基础设施，稳定性、可观测性与安全边界成为新的护城河。

## 2. 各工具活跃度对比

| 工具 | Issues（24h 更新） | PRs（24h 更新） | Discussions | Release（24h） |
|------|:---:|:---:|:---:|:---:|
| Claude Code | 10 条热点（未披露总量） | 3 条 | 未披露 | 无 |
| OpenAI Codex | 50 条（Top 10） | 24 条（Top 10） | 3 条 | rust-v0.148.0-alpha.19 |
| Gemini CLI | 10 条热点（未披露总量） | 10 条 | 未披露 | v0.56.0-nightly.20260815 |
| GitHub Copilot CLI | 10 条热点（未披露总量） | 2 条 | 未披露 | v1.0.81-0 |
| OpenCode | 50 条（Top 10） | 50 条（Top 10） | 未披露 | 无 |
| Pi | 10 条热点（未披露总量） | 10 条 | 3 条 | 无 |
| Qwen Code | 10 条热点（未披露总量） | 10 条 | 未披露 | v0.21.11-nightly.20260815 |
| CodeWhale | 10 条热点（未披露总量） | 10 条 | 2 条 | 无 |
| DeepSeek Harness | 无活动 | 无活动 | 无活动 | 无 |

> **数据口径说明**：OpenCode 与 Codex 明确披露了当日全量更新数（OpenCode 50/50、Codex 50/24）；其余仓库日报仅披露 Top 10 热点，未公布总量，不代表不活跃。部分仓库若上游关闭 Issues/PR 而仅以 Discussions 作为社区渠道，表中对应列标注为 **N/A**，同样不判定为不活跃。

## 3. 共同关注的功能方向

### 3.1 MCP 生态稳定性（最集中的共性方向）
- **Copilot CLI**：Atlassian MCP OAuth 同一缺陷连续两版回归（#4480 → #4490）；`initialize` 握手固定 60s 超时且无重试（#4421）；CI 中 `GITHUB_TOKEN` 拉取 MCP 策略返回 403（#4346）。
- **Claude Code**：macOS filesystem MCP 工具完全不可用（#80094）；动态添加工具后会话内无法感知变更（#66084）。
- **Gemini CLI**：修复 web-fetch 的 SSRF 漏洞，CVSS 8.6（#28725）。
- **Codex**：Windows 下 MCP 子进程随会话泄漏（#34614）；新增 MCP tool handler 支持（#38705）。

### 3.2 状态真实性与会话生命周期管理
- **Claude Code**：会话限额自动续接（#13354，197 👍，全生态单日最高热度）。
- **Gemini CLI**：子代理 MAX_TURNS 被误报为 GOAL 成功（#22323）；generalist agent 无限挂起（#21409）。
- **Pi**：compaction 触发时机、安全边界、失败恢复、角色损坏等多个环节 bug（#6879、#8164、#8168）。
- **Codex**：分页历史丢失 rollout 记录并复用序号（#35746）；TUI 增加 resume/fork 状态提示（#38788）。
- **Qwen Code**：channel 级 `sessionRotation` 限制会话生命周期（#8927）。

### 3.3 认证与计费/成本可靠性
- **Claude Code**：OAuth 刷新返回 400、凭证损坏后跨会话 401 死循环（#54443、#61912）。
- **OpenCode**：订阅扣款后余额不更新（#37790）；DeepSeek token 疑似超扣（#32911）。
- **CodeWhale**：官方定价端点 503，导致所有会话成本显示"未验证"（#5241）。
- **Gemini CLI**：消息中的"401"子串被误判为认证错误（#28827）；Vertex AI 配置引导改进（#28679）。

### 3.4 跨平台桌面端稳定性
- **Codex**：Windows 系统级鼠标卡顿/Electron CPU 忙循环/空闲全局 stutter 多条回归（#20214、#38546、#38547、#38716、#38750）；macOS Crashpad 每天 5GB 磁盘占用（#25921）。
- **Claude Code**：Windows MSIX 安装版反复崩溃（#85199）。
- **Copilot CLI**：Windows autopilot 长时间运行后 OOM 崩溃（#4499）。
- **Pi**：WSL 登录挂起（#6187）；Windows bash 工具可执行 `taskkill` 杀死宿主进程（#8170）。
- **CodeWhale**：macOS 上 SSE Unicode 乱码（#5374）。

### 3.5 权限粒度、安全边界与自动化 Agent 的矛盾
- **Claude Code**：`dontAsk` 模式无视 allow 规则拒绝 Write/Edit（#74567）；安全过滤器误报修复 PR（#86870）。
- **Gemini CLI**：禁用子代理后仍被自动调用（#22093）。
- **Copilot CLI**：/spawn 模板自相矛盾，存在跨会话上下文注入风险（#4491）。
- **Pi**：bash `PI_*` 指导触发无关权限确认（#7787）；taskkill 自毁宿主（#8170）。
- **OpenCode**：声明 `"edit": "ask"` 后运行时不弹确认（#32787）。
- **Qwen Code**：autofix PAT 与不受信代码共享宿主机（#9089）；文件权限硬编码 0600（#9250）。

## 4. 差异化定位分析

| 工具 | 核心定位 | 差异化特征 | 主要目标用户 |
|------|---------|-----------|-------------|
| **Claude Code** | 通用 Agent CLI 标杆 | 社区声量最大，VS Code 集成深度领先；高赞需求（#13354，197 👍）与官方交付节奏形成反差，是生态成熟度的"晴雨表" | 追求成熟生态与开箱即用的开发者 |
| **OpenAI Codex** | 高性能编码 Agent + 桌面端 | Rust 化推进；可观测性与诊断前置（/healthz、`codex doctor` 存储诊断）；桌面端资源治理（CPU/磁盘）投入最密集 | 长时间无人值守、重视性能与诊断的重度用户 |
| **Gemini CLI** | 多代理编排 + 安全评估体系 | 子代理状态机透明化（#28815）；evals 基建成体系（#28822-#28824）；沙箱供应链加固（Node 22、SSRF） | 对 Agent 行为可信度与合规有高要求的团队 |
| **GitHub Copilot CLI** | GitHub 生态内嵌编码助手 | 与 Actions/Codespaces/模型目录深度绑定；OTel protobuf 企业级可观测性；当前短板是 MCP OAuth 反复回归 | GitHub 重度用户与企业 CI 环境 |
| **OpenCode** | 开源网关 + 云端工作区 | workspace 级隔离（Docker/Incus blueprint，#42831/#42829）；V2 基础设施重构；订阅计费体系尚在补齐 | 多模型聚合、多租户与沙箱隔离需求的平台型团队 |
| **Pi** | TUI 优先的通用 Agent 运行时 | compaction 机制精细化（#8153）；扩展宿主生态（pi2dsh 跨宿主运行）；多模型适配反应快 | 终端重度用户与扩展开发者 |
| **Qwen Code** | 代码审查自动化闭环 | /review 工具链高强度 dogfooding（当日 10+ Issue/PR 围绕该链路）；autofix 与 CI 自愈；Web Shell 演进 | 阿里/Qwen 生态、重视审查与自动化闭环的团队 |
| **CodeWhale** | 轻量 Rust TUI 客户端 | bwrap 沙箱可定制；第三方模型预制模板；社区驱动明显（中文术语三周共识投票） | 自托管模型、偏好轻量 TUI 的开发者 |

## 5. 社区热度与成熟度

- **成熟期头部（声量大、交付节奏放缓）**：**Claude Code** 以 #13354 的 197 👍/78 评论成为全生态单日最高热度需求，但当日无版本发布、PR 仅 3 条，呈现"社区期待高、官方交付慢"的成熟期特征。**Copilot CLI** 日 PR 仅 2 条且以仓库自动化维护为主，MCP OAuth 连续两版回归正在消耗社区信任。
- **高速迭代期（工程投入最密集）**：**OpenAI Codex**（50 Issues / 24 PRs）与 **OpenCode**（50 Issues / 50 PRs）构成当日最活跃双雄。前者聚焦 Windows 性能与存储治理，后者聚焦 V2 工作区隔离与计费问题。**Gemini CLI** 以子代理可靠性修复 + 多组 evals PR 展现体系化工程能力；**Pi** 在 compaction 链路上单日聚合 7+ 条 Issue/PR，属于深度打磨型迭代。
- **稳健推进期**：**Qwen Code** 以 nightly 发布节奏和 /review 内耗式 dogfooding 为特征，问题发现与修复闭环快；**CodeWhale** 处于 v0.9.8 稳定化收尾，社区规模较小但讨论质量高（中文术语三周共识）。
- **无活动**：**DeepSeek Harness** 当日零活动，需结合更长周期观察，不宜单日判定为不活跃。

## 6. 值得关注的趋势信号

1. **"假状态"比失败更破坏信任**：Gemini CLI 子代理中断被报为 GOAL 成功（#22323）、Pi shell 命令完成后仍显示等待输入（#25166），这类状态误报是社区最强烈的痛点。**参考价值**：评估工具时优先验证终止原因与状态机的可追溯性，而非只看任务成功率。

2. **MCP 正经历"标准普及 → 工程化阵痛"**：OAuth 兼容性反复回归、握手超时硬编码、动态工具索引失效、SSRF 漏洞、子进程泄漏——MCP 已是各工具共同的集成层，但生产级稳定性尚未达标。**参考价值**：关键路径上对 MCP 服务器采取保守版本策略，关注各工具的错误处理与重试机制改进。

3. **资源治理成为长时运行的新战场**：Crashpad 每天 5GB、Electron CPU 忙循环、Windows OOM、DOM 节点泄漏、compaction token 统计口径修正、`codex doctor` 存储诊断——随着 Agent 走向小时/天级无人值守，本地磁盘、内存与 CPU 占用将进入工具选型指标。

4. **安全边界从"功能"变为"默认属性"**：SSRF 修复（CVSS 8.6）、沙箱 Node 20→22、deny-by-default footprint gate、bwrap 自定义根路径、dontAsk 与 allow 规则的矛盾——具备文件写入与命令执行能力的 Agent 正接受企业级安全审查。**参考价值**：验证目标工具的权限模型是否支持细粒度作用域，而非一味追求"免打扰"。

5. **多模型/多供应商已是默认场景，但适配质量参差**：GPT-5.6 reasoning.mode 参数透传（#4495）、Sonnet 5 模型目录缓存刷新（#4494）、DeepSeek V4 Flash thinking 档位不一致（#8181）、grok-4.5 在网关持续不可用（#40206/#40886）——统一网关的供应商适配层已成为可用性瓶颈。**参考价值**：多模型工具应重点考察 gateway 层的参数映射完整性与故障响应速度。

6. **计费与成本可见性直接影响信任**：OpenCode 订阅扣款未到账（#37790）、DeepSeek token 疑似超扣（#32911）、CodeWhale 定价端点 503（#5241）、Copilot CLI 用量限制提示刷屏（#38712）——成本透明度与余额对账已是最敏感的情绪触发点。**参考价值**：生产环境使用前，确认工具是否提供可验证的本地用量记录与费用估算回退机制。

7. **中文社区参与度上升，本地化成为差异化因素**：CodeWhale 的 Constitution 译名经三周社区讨论定为"宪章"（#4949）、Qwen Code 聚集大量中文用户反馈（#9198、#5966）——中文支持、输入法兼容与本地化文档正在成为真实存在的选型维度，尤其对面向中国开发者的团队。

---

*本报告基于各工具 2026-08-16 社区公开数据自动生成，聚焦横向对比，供技术决策者与开发者参考。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据截止 2026-08-16 · 来源: [anthropics/skills](https://github.com/anthropics/skills)（热门 PR / Issue Top 50）
> 说明：所有高评论 PR 均为 OPEN 状态，无已合并样本；PR 评论数数据未标注具体值，以下按数据源给定排序。

## 1. 热门 Skills 排行

| # | PR | 技能/主题 | 社区讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评估脚本修复 | `run_eval.py` 恒报 recall=0%（Issue #556，10+ 独立复现），描述优化循环实为"针对噪声优化"；同步修复 Windows 管道读取、触发检测与并行 worker | OPEN |
| 2 | [#514](https://github.com/anthropics/skills/pull/514) | document-typography 排版质检 | 针对 AI 生成文档的孤词换行、段落孤儿、标题滞留页底、编号错位等高频缺陷，社区认为是全文档类型刚需 | OPEN |
| 3 | [#538](https://github.com/anthropics/skills/pull/538) | pdf 技能大小写引用修复 | 修复 SKILL.md 中 8 处大小写不匹配的文件引用，在大小写敏感文件系统上直接导致技能失效 | OPEN |
| 4 | [#486](https://github.com/anthropics/skills/pull/486) | ODT / OpenDocument 技能 | 补全 LibreOffice/ISO 标准格式空白：创建、模板填充、读取及 ODT→HTML 转换 | OPEN |
| 5 | [#210](https://github.com/anthropics/skills/pull/210) | frontend-design 技能改进 | 社区批评技能"像开发者文档而非操作指令"，要求每条指导可被 Claude 单次对话内执行 | OPEN |
| 6 | [#83](https://github.com/anthropics/skills/pull/83) | skill-quality-analyzer + skill-security-analyzer | 新增两个元技能：五维质量评估（结构/文档/示例等）与安全分析，回应 Skills 生态"自净化"需求 | OPEN |
| 7 | [#541](https://github.com/anthropics/skills/pull/541) | docx 修订 ID 冲突修复 | OOXML 中 `w:id` 为书签/修订/注释共享 ID 空间，硬编码低 ID 导致文档损坏 | OPEN |
| 8 | [#539](https://github.com/anthropics/skills/pull/539) | skill-creator YAML 校验增强 | 前置校验未加引号的 `description` 含 `:` 导致的 YAML 静默解析失败 | OPEN |

**解读**：Top 8 呈现两个主战场——**文档类**（#514/#538/#486/#541）与 **skill-creator 工具链**（#1298/#539，另有 #1099/#1050 Windows 修复紧随其后），加一个元技能方向（#83）。

## 2. 社区需求趋势

从 Issues（Top 50）提炼五大方向：

- **安全与信任边界（最热议题）** — [#492](https://github.com/anthropics/skills/issues/492) 以 43 条评论居全仓库之首：社区技能被置于 `anthropic/` 命名空间冒充官方技能，用户可能向非官方技能授予过高权限；[#1175](https://github.com/anthropics/skills/issues/1175) 关注 SharePoint 权限逻辑写入 SKILL.md 的安全与上下文窗口风险。
- **组织级分享与协作** — [#228](https://github.com/anthropics/skills/issues/228)（👍 8）呼吁 Claude.ai 内建组织级技能库/分享链接，取代"下载→发送→手动上传"的低效链路。
- **技能工具链可靠性** — [#556](https://github.com/anthropics/skills/issues/556)（👍 7）、[#1169](https://github.com/anthropics/skills/issues/1169)、[#202](https://github.com/anthropics/skills/issues/202) 集中反映：评估脚本触发率恒为 0%、优化循环失效、技能文档风格过度教学化。
- **新技能方向储备** — 长期记忆管理（[#1329](https://github.com/anthropics/skills/issues/1329) compact-memory）、代理系统治理（[#412](https://github.com/anthropics/skills/issues/412) agent-governance）、推理质量门禁管道（[#1385](https://github.com/anthropics/skills/issues/1385)）——社区开始关注 Agent 自身的质量与治理。
- **平台与互操作** — [#16](https://github.com/anthropics/skills/issues/16) 希望将 Skills 暴露为 MCP、[#29](https://github.com/anthropics/skills/issues/29) 询问 AWS Bedrock 支持、[#189](https://github.com/anthropics/skills/issues/189)（👍 9）反馈插件重复安装导致技能重复。

## 3. 高潜力待合并 Skills

以下 PR 均 OPEN、功能完整、讨论活跃，近期落地概率较高：

- **[#514 document-typography](https://github.com/anthropics/skills/pull/514)** — 排版质检，全文档类型高频刚需
- **[#486 ODT skill](https://github.com/anthropics/skills/pull/486)** — OpenDocument 格式创建/填充/转换
- **[#723 testing-patterns](https://github.com/anthropics/skills/pull/723)** — 全栈测试技能：Trophy 模型、单元测试、React Testing Library、边界用例
- **[#568 ServiceNow 平台技能](https://github.com/anthropics/skills/pull/568)** — 覆盖 ITSM/ITOM/SecOps/ITAM/FSM/CSDM 等企业场景（更新至 2026-08-12，近期最活跃）
- **[#525 Pyxel 复古游戏开发](https://github.com/anthropics/skills/pull/525)** — 基于 pyxel-mcp 的 8-bit/像素风游戏"写→跑→看→迭代"工作流
- **[#1367 self-audit](https://github.com/anthropics/skills/pull/1367)** — 交付前机械文件校验 + 四维推理审计通用质量门禁
- **[#1479 plan-file-hygiene](https://github.com/anthropics/skills/pull/1479)** — 规划产物生命周期管理，解决规划文件无治理堆积
- **[#181 SAP-RPT-1-OSS 预测](https://github.com/anthropics/skills/pull/181)** — 基于 SAP 开源表格基础模型的预测分析

## 4. Skills 生态洞察

> 社区最集中的诉求是：**修稳 skill-creator 工具链、建立安全信任与组织化分发机制，并持续释放高质量的文档处理、测试与企业级技能**——即"基建补课 + 安全补位 + 技能补全"三线并行。

---

# Claude Code 社区动态日报 — 2026-08-16

---

## 今日速览

过去 24 小时无新版本发布，社区讨论焦点集中在 Session 限额自动续接的高票需求（#13354，👍 197）与 Windows 桌面端崩溃问题（#85199）。此外，OAuth 会话刷新、VS Code 扩展的焦点抢占及安全策略误报类 Issue 持续活跃，开发者对认证稳定性与 IDE 集成体验的诉求明显。

---

## 版本发布

过去 24 小时内无新版本发布。请关注官方 Release 页面获取后续更新：[anthropics/claude-code releases](https://github.com/anthropics/claude-code/releases)

---

## 社区热点 Issues

### 1. [FEATURE] 会话限额达到后自动继续 — #13354
- **作者**: massyn | **评论**: 78 | **👍**: 197 | **状态**: OPEN
- **链接**: https://github.com/anthropics/claude-code/issues/13354
- **要点**: 呼声最高的功能需求，希望会话达到限额后能自动继续而无需手动操作。该需求已获得近 200 个赞，反映出大量用户在日常工作中常被会话中断打断。
- **社区反应**: 78 条评论中用户普遍反馈“手动/continue 很烦”，是当前社区最期待的功能之一。

### 2. [BUG] Claude Desktop 在 Windows 上反复崩溃并提示“Advanced Options → Repair” — #85199
- **作者**: romers352 | **评论**: 23 | **👍**: 3 | **状态**: OPEN
- **链接**: https://github.com/anthropics/claude-code/issues/85199
- **要点**: Windows 用户通过 MSIX/Store 安装 Claude Desktop 后频繁崩溃，必须手动修复。涉及平台稳定性的严重问题。
- **社区反应**: 多人跟帖复现，可能涉及包安装的权限或依赖问题。

### 3. [BUG] OAuth 刷新返回 400，并发会话被迫重新登录 — #54443
- **作者**: wvandaal | **评论**: 15 | **👍**: 6 | **状态**: CLOSED（stale）
- **链接**: https://github.com/anthropics/claude-code/issues/54443
- **要点**: 本地存储的 `expiresAt` 与服务端实际过期时间不一致，导致提前收到 401 后在 OAuth 刷新时返回 400，多个并发会话被强制 `/login`。
- **影响面**: 涉及认证核心链路，多人复现，虽标记 stale 但持续被关注。

### 4. [BUG] `tools/list_changed` 未刷新交互会话中的 deferred-tool / ToolSearch 索引 — #66084
- **作者**: LudaThomas | **评论**: 8 | **👍**: 3 | **状态**: OPEN
- **链接**: https://github.com/anthropics/claude-code/issues/66084
- **要点**: 动态添加工具后，交互会话无法通过 `tools/list_changed` 感知变更，需重启会话。在 2.1.165 上仍可复现。
- **相关**: #4118 / #60626

### 5. [BUG] AskUserQuestion 弹窗在 VS Code 中抢占焦点并吞掉用户输入 — #45374
- **作者**: FrankLedo | **评论**: 7 | **👍**: 7 | **状态**: CLOSED（stale）
- **链接**: https://github.com/anthropics/claude-code/issues/45374
- **要点**: 用户在 VS Code 输入框打字时弹窗出现会抢走键盘焦点，导致输入内容被弹窗选项“吃掉”。
- **开发者影响**: VS Code 扩展的核心交互痛点，UI/UX 层面优先级较高。

### 6. [BUG] OAuth 刷新在 5xx 瞬态错误期间损坏凭证状态 → 跨会话持续 401 循环 — #61912
- **作者**: BitMatrixIT | **评论**: 7 | **👍**: 0 | **状态**: CLOSED（stale）
- **链接**: https://github.com/anthropics/claude-code/issues/61912
- **要点**: 上游 Cloudflare 5xx 响应导致 OAuth 刷新路径错误地覆盖本地凭证，造成后续所有会话 401 死循环，需手动清理凭据。
- **与 #54443 关联**: 两个 Issue 均曝光 OAuth 刷新逻辑的脆弱性。

### 7. [BUG] Claude Desktop macOS：filesystem MCP 服务器在两种包世代中均不可用 — #80094
- **作者**: inddev | **评论**: 6 | **👍**: 0 | **状态**: OPEN
- **链接**: https://github.com/anthropics/claude-code/issues/80094
- **要点**: 新 schema 从未分发，旧 schema 在注册时被丢弃，导致 MCP filesystem 工具完全不可用。影响 macOS 桌面版用户。

### 8. [BUG] VS Code 扩展：多会话打开时输入框闪烁、焦点来回“乒乓” — #71809
- **作者**: You-lius | **评论**: 6 | **👍**: 4 | **状态**: CLOSED（stale）
- **链接**: https://github.com/anthropics/claude-code/issues/71809
- **要点**: 同一窗口打开多个 Claude Code 会话 Tab 时，输入框焦点在两个会话间反复横跳，几乎无法输入。多任务场景下的严重 UI 问题。

### 9. [BUG] 模型在中断的工具调用后编造用户消息与工具结果 — #70148
- **作者**: cassiexflowceo | **评论**: 5 | **👍**: 0 | **状态**: CLOSED（stale）
- **链接**: https://github.com/anthropics/claude-code/issues/70148
- **要点**: 网络延迟较高时中断工具调用，模型后续竟“虚构”出用户消息与伪工具结果，破坏会话上下文可信度。

### 10. [BUG] `--permission-mode dontAsk` 无条件下放 Write/Edit 权限，忽略 allow 规则 — #74567
- **作者**: Bronek | **评论**: 3 | **👍**: 0 | **状态**: OPEN
- **链接**: https://github.com/anthropics/claude-code/issues/74567
- **要点**: 在 `dontAsk` 模式下，即使配置了 `--allowedTools` 或 `permissions.allow` 限定路径，Write/Edit 仍被无条件拒绝。对于 headless agent 无任何可用的作用域写入选项，严重阻碍自动化场景。

---

## 重要 PR 进展

> 本节仅列出过去 24 小时有更新的 PR（共 3 条）。

### 1. Enable frontend-design plugin at project scope — #84600
- **作者**: DanWebOps | **创建**: 2026-08-06 | **更新**: 2026-08-15 | **状态**: CLOSED
- **链接**: https://github.com/anthropics/claude-code/pull/84600
- **内容**: 注册官方 anthropics/claude-code marketplace 并在 `.claude/settings.json` 启用 frontend-design 技能，使项目内所有使用者自动加载该技能。属于工作流配置类改动。

### 2. Claude/automatizar inventario insumos w4n98s — #82981
- **作者**: Eduardo-neira | **创建**: 2026-07-31 | **更新**: 2026-08-15 | **状态**: OPEN
- **链接**: https://github.com/anthropics/claude-code/pull/82981
- **内容**: 无描述。推测为个人工作流自动化脚本（西班牙语标题意为“自动化库存清单”），可能属于示例/实验性 PR，需谨慎参考。

### 3. fix: prevent false-positive CVP status changes during authorized security research — #86870
- **作者**: JoTalbot | **创建**: 2026-08-15 | **更新**: 2026-08-15 | **状态**: OPEN
- **链接**: https://github.com/anthropics/claude-code/pull/86870
- **内容**: 在 `security-guidance/hooks/review_api.py` 中增加上下文验证机制：为 `cap_diff_for_prompt()` 扩展 CVS 状态与教育实验室元数据，新增 `is_authorized_lab()` 标志，防止授权安全研究期间出现误报的 CVP 状态变更。该 PR 直接回应了社区多起安全过滤器误报反馈（如 #72101~#72105 等）。

---

## 热门 Discussions

本期数据源未包含 Discussions 数据，整节省略。

---

## 功能需求趋势

| 方向 | 代表 Issue | 热度信号 |
|------|-----------|---------|
| **会话生命周期增强** | #13354 会话限额自动继续 | 78 评论 / 197 👍，最高热度需求 |
| **认证与 OAuth 稳定性** | #54443、#61912 刷新/凭证损坏 | 两个 CLOSED 但持续被关注，核心链路可靠性问题 |
| **IDE 集成（VS Code）** | #45374 焦点抢占、#71809 多会话焦点抖动、#57691 聊天滚动受限 | 多个 UI 交互缺陷，体验类需求集中 |
| **MCP 工具动态刷新** | #66084 工具列表更新 | 直接影响动态工具链工作流 |
| **权限与安全策略精度** | #74567 dontAsk 模式、#86870 安全误报修复 | Agent 自动化场景的关键阻塞点 |
| **桌面端跨平台稳定性** | #85199 Windows 崩溃、#80094 macOS MCP 不可用 | 桌面版基础可用性问题 |

## 开发者关注点

### 1. 认证流程可靠性
OAuth 刷新与过期时间处理是近几个月的高频痛点。开发者希望客户端能更健壮地处理服务端瞬态错误，避免凭证状态损坏后陷入 401 死循环。

### 2. VS Code 扩展的 UI/UX 细节
弹窗抢焦点、多会话输入框抖动等问题严重影响日常使用。社区期待官方在扩展层增加更精细的焦点管理与事件防抖机制。

### 3. Session 限额的自动化续接
#13354 以压倒性优势成为社区最关心功能之一。长期跑批任务的开发者希望无需人工干预即可跨会话继续工作。

### 4. 安全过滤器误报
多条 Issue（#72101~#72105 等）反馈合法安全研究/固件分析被误判为违规，直接导致会话中断。PR #86870 已开始针对该问题进行修复，但社区期望更系统的解决方案。

### 5. 权限模式与 Agent 自动化的矛盾
`dontAsk` 模式对 Write/Edit 的一刀切拒绝使得无人值守的 headless agent 无法完成文件修改任务。开发者期待更细粒度的作用域写入授权方式。

---

*本日报基于 GitHub 公开数据自动生成，仅供参考。链接均指向 anthropics/claude-code 仓库对应条目。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-08-16）

## 今日速览

过去 24 小时，Codex 社区讨论热度集中在 **Windows 桌面客户端系统级卡顿、CPU 忙循环和存储膨胀** 等稳定性问题上，多个新 Issue 指出更新后出现回归。版本侧发布了 `rust-v0.148.0-alpha.19`；PR 侧则围绕 TUI 状态展示、存储诊断、MCP 钩子支持、可观测性传输等方向持续迭代。

## 版本发布

- **rust-v0.148.0-alpha.19**  
  发布说明仅包含 release 标题 `0.148.0-alpha.19`，未附带详细变更日志。作为 Rust 版 Codex CLI/运行时的 alpha 迭代，社区可关注后续 changelog 或二进制行为变化。  
  https://github.com/openai/codex/releases

## 社区热点 Issues

过去 24 小时更新的 Issue 共 50 条，以下筛选 10 个最值得关注的问题：

1. **#20214 Codex App 在 Windows 11 Pro 上频繁卡顿/掉帧，尽管系统资源充足**  
   持续更新的老 Issue，累计 104 条评论、85 👍，是目前社区反馈最强烈的 Windows 性能问题之一。用户认为问题与 App 自身资源管理有关，而非硬件瓶颈。  
   https://github.com/openai/codex/issues/20214

2. **#38546 [Windows] 非管理员运行时 ChatGPT/Codex 桌面应用导致系统级鼠标卡顿**  
   新近上报，25 条评论，10 👍。用户指出应用在未提权时会造成全局鼠标光标跳动，疑似与输入处理或渲染路径有关。  
   https://github.com/openai/codex/issues/38546

3. **#38750 [Windows] Codex 空闲时系统全局卡顿，完全退出后立即恢复**  
   最新构建 `26.810.50856` 上的回归报告，9 条评论。即使没有任何 Codex 任务运行，应用进程仍影响整个 Windows 交互响应。  
   https://github.com/openai/codex/issues/38750

4. **#38547 [Windows] 空闲时 Electron 主进程 CPU 忙循环，Chrome 插件 app-server hashing 占用 CPU**  
   16 条评论，7 👍。用户定位到从 `26.803.10989` 升级到 `26.810.4967` 后出现持续 CPU 占用，已关闭但修复方案值得关注。  
   https://github.com/openai/codex/issues/38547

5. **#38716 [Windows] Electron 主进程忙循环导致系统鼠标卡顿，完整退出可解决**  
   7 条评论，3 👍。确认是 `26.810.6296.0` 引入的回归，用户给出复现路径和包版本信息。  
   https://github.com/openai/codex/issues/38716

6. **#25921 Codex Desktop 持续生成 Crashpad pending dumps，每天至少 5GB 磁盘占用**  
   17 条评论，8 👍。macOS 用户报告 `Crashpad/pending` 目录一天内增长到 4.9GB、54504 个文件，属于典型的存储失控问题。  
   https://github.com/openai/codex/issues/25921

7. **#3550 [enhancement] 将 Codex 聊天隔离到 VS Code 项目/工作区**  
   34 条评论，79 👍。用户希望 Recent Tasks 不再显示其他项目的会话，按 workspace 隔离聊天上下文，提升多项目工作流效率。该 Issue 已关闭，但需求呼声很高。  
   https://github.com/openai/codex/issues/3550

8. **#38769 [macOS] 即使禁用 Computer Use，ChatGPT 仍反复拉起 SkyComputerUseService 并崩溃**  
   2 条评论。应用版本 `26.810.52044` 上出现后台服务反复 respawn 直到 OOM 崩溃的问题；同类问题也见 #38771。  
   https://github.com/openai/codex/issues/38769

9. **#35746 分页历史会丢失有效的 rollout 记录并复用序号**  
   13 条评论。Codex CLI 在分页加载 rollout 历史时出现 `RolloutLine` 解析不一致，可能导致会话恢复不完整。  
   https://github.com/openai/codex/issues/35746

10. **#34614 [Windows] MCP suite 随会话重复累积，终止时遗漏 cmd.exe/node.exe 子进程**  
    9 条评论。用户建议 Windows MCP spawn 路径复用仓库中已有的 Job Object 模式，否则子进程会泄漏并持续堆积。  
    https://github.com/openai/codex/issues/34614

## 重要 PR 进展

过去 24 小时更新 PR 共 24 条，以下为 10 个值得关注的变化：

1. **#38806 为 code-mode gRPC listener 增加健康检查端点**  
   新增 `GET /healthz`，支持 HTTP/1.1 与 HTTP/2，同时确保 gRPC 方法不暴露在 HTTP/1.1 上，提升服务可观测性与安全边界。  
   https://github.com/openai/codex/pull/38806

2. **#38800 将 executor 策略审计改为仅日志遥测**  
   转发网络策略决策不再写入持久化状态日志，而是发送到 `codex_otel.log_only` target，减少状态日志噪声。  
   https://github.com/openai/codex/pull/38800

3. **#38795 为 `codex doctor` 增加存储诊断**  
   报告 `CODEX_HOME` 和活动 worktree 剩余空间：低于 5GiB 告警、低于 1GiB 失败；Windows 下额外检测是否位于受信任 Dev Drive 并给出修复提示。直接回应用户对磁盘膨胀的担忧。  
   https://github.com/openai/codex/pull/38795

4. **#38788 TUI 启动时显示 resume/fork 状态**  
   在 composer 上方显示“Resuming session…”或“Forking session…”提示，解析完成后更新或清除状态，提升会话恢复的可感知性。  
   https://github.com/openai/codex/pull/38788

5. **#38785 保持活动 turn 的模型设置在更新期间稳定**  
   避免线程设置变更在采样请求之间中途改变模型配置，确保当前 turn 的模型设置保持一致。  
   https://github.com/openai/codex/pull/38785

6. **#38774 persistent exec 线程使用分页历史**  
   `codex exec` 启动持久线程时请求分页历史；若配置的线程存储不支持分页，则保持临时线程逻辑并回退到 legacy history。  
   https://github.com/openai/codex/pull/38774

7. **#38767 token exchange 时转发 workload identity 上下文**  
   从 `OPENAI_WORKLOAD_IDENTITY_CONTEXT` 读取可选上下文，原样转发为 token exchange 字段，并在会话记录中脱敏处理。  
   https://github.com/openai/codex/pull/38767

8. **#38743 将 TUI app 目录状态限定到当前活动上下文**  
   在 account/workspace/thread 切换时使缓存失效，避免旧上下文中的 app 数据泄漏到当前 TUI 环境。  
   https://github.com/openai/codex/pull/38743

9. **#38705 hooks 引擎支持 MCP tool handler**  
   发现同步 `mcp_tool` hook 处理器，并通过 executor 调用对应 MCP server/tool；同时支持嵌套 hook-event 占位符展开，保留 JSON 类型。  
   https://github.com/openai/codex/pull/38705

10. **#38704 粘贴文本时规范化 CRLF 行尾**  
   修复将每个 CRLF 拆成两个换行的问题，保证 Windows 用户粘贴多行文本时格式正确。  
    https://github.com/openai/codex/pull/38704

## 热门 Discussions

### Ideas

- **#26397 同时使用 Codex 与 Claude Code，如何在两处维护项目上下文？**  
  作者希望统一项目记忆，避免两套工具各自维护上下文并逐渐漂移。3 条评论，2 👍。  
  https://github.com/openai/codex/discussions/26397

- **#38712 限制“You have reached your Codex usage limits for code reviews.”重复提醒**  
  用户抱怨 @chatgpt-codex-connector 每次 push 都弹出用量限制提示，希望减少打扰。  
  https://github.com/openai/codex/discussions/38712

### Q&A

- **#38633 `include_instructions` 是否会静默关闭 Worker/Explorer 的 skills？**  
  用户想确认在 `worker.toml` / `explorer.toml` 中设置 `include_instructions = false` 后，子代理是否还能使用 skills。  
  https://github.com/openai/codex/discussions/38633

## 功能需求趋势

从过去 24 小时的 Issues 和 Discussions 看，社区关注点集中在以下几类：

- **Windows 桌面客户端稳定性**：多条 Issue 报告系统级鼠标卡顿、Electron 主进程 CPU 忙循环、空闲时全局 stutter，且多个版本反复回归。
- **磁盘占用治理**：Crashpad dumps、rollout/session JSONL 无上限增长、subagent fork 遗留历史、图片文件被反复复制导致数百 GiB 消耗，社区希望 Codex 提供主动清理、存储诊断和上限控制。
- **用量/限速可见性**：持续有需求希望 CLI status_line、`/status`、SDK 暴露 `resetsAt`、`credits.balance`、`planType` 等完整限速与配额信息。
- **会话生命周期与项目隔离**：VS Code 中按 workspace 隔离聊天、TUI resume/fork 状态提示、分页历史数据一致性修复。
- **可扩展性与平台化**：MCP tool handler、hooks engine、connector runtime 管理、插件变更后刷新 hook runtime，显示 Codex 正在加强第三方工具集成能力。
- **模型行为配置**：对 reasoning summary 输出质量、子代理 skills 指令开关、Bedrock GPT-5.6 Sol 显式缓存控制等有更细粒度控制需求。

## 开发者关注点

- **Windows 回归频繁**：用户在多个新版本上都遇到“升级后立刻出现 stutter/CPU 占用”，并且“完全退出应用立即恢复”，说明问题可能来自渲染层或主进程事件循环，而非功能负载。
- **存储失控是普遍痛点**：从 macOS Crashpad 到 Windows rollout 文件，从 CLI subagent 到 Desktop session，开发者反馈本地数据增长达到 GB 甚至 TB 量级，且缺少透明清理机制。
- **限速提示“只报红灯不给细节”**：CLI 状态栏只看得到百分比，无法得知 reset 时间、余额、计划类型，影响对 Codex 用量的主动管理。
- **后台服务行为不可预期**：macOS 上禁用 Computer Use 后 `SkyComputerUseService` 仍被反复拉起并导致崩溃，类似后台服务缺乏明确开关与退出机制。
- **项目管理上下文缺失**：VS Code 扩展的 Recent Tasks 是全局的，用户希望 Codex 会话能像代码一样限定在项目/工作区内，减少多项目串联导致的混乱。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-08-16）

## 1. 今日速览

今日社区焦点集中在**子代理（Subagent）可靠性**上：核心 Bug #22323（子代理达到 MAX_TURNS 却被误报为 GOAL 成功）以 12 条评论成为最热门 Issue，并已有对应修复 PR #28815 进入审查。安全方面有两项重要进展：修复 web-fetch 的 SSRF 漏洞（CVSS 8.6）以及沙箱镜像升级至 Node 22。此外，昨日发布了一个 nightly 版本（v0.56.0-nightly.20260815）。

## 2. 版本发布

**v0.56.0-nightly.20260815.g2a87e7be1**
- [SSR Agent] Issue Fix (19826)：将 a2a-server 测试中直接修改 `process.env` 的写法迁移为 Vitest 的 `vi.stubEnv`（@joneba-google，PR [#28811](https://github.com/google-gemini/gemini-cli/pull/28811)）
- 完整变更：[v0.56.0-nightly.20260814...v0.56.0](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260814.gc0d192452...v0.56.0)

## 3. 社区热点 Issues

### 高优先级 Bug

1. **[#22323] 子代理 MAX_TURNS 中断被误报为 GOAL 成功**（P1 / Bug / 12 评论）
   https://github.com/google-gemini/gemini-cli/issues/22323
   `codebase_investigator` 子代理在达到最大轮次限制、实际未完成任何分析时，仍被报告为 `status: "success"`、`Termination Reason: "GOAL"`。这种"假成功"会掩盖执行中断，误导用户对分析结果的信任。今日评论数最高，已有修复 PR 提交。

2. **[#21409] Generalist 代理无限期挂起**（P1 / Bug / 8 👍 / 8 评论）
   https://github.com/google-gemini/gemini-cli/issues/21409
   一旦 CLI 将任务委托给 generalist agent，连"创建文件夹"这类简单操作都可能挂起一小时以上。社区通过指示模型"不要使用子代理"规避，足见该问题对日常使用的破坏性。

3. **[#25166] Shell 命令执行完成后卡在"Waiting input"**（P1 / Bug / 3 👍 / 4 评论）
   https://github.com/google-gemini/gemini-cli/issues/25166
   简单的 CLI 命令执行完毕后，界面仍显示命令活动并等待输入。极简命令也会触发，说明状态机对命令生命周期跟踪存在缺陷。

4. **[#21983] Browser 子代理在 Wayland 下失败**（P1 / Bug / 1 👍 / 4 评论）
   https://github.com/google-gemini/gemini-cli/issues/21983
   浏览器子代理在 Wayland 显示服务器环境下运行失败，属于 Linux 桌面用户的兼容性阻塞问题。

5. **[#24246] 工具数量过多时触发 400 错误**（P2 / Bug / 3 评论）
   https://github.com/google-gemini/gemini-cli/issues/24246
   启用的工具数量超过阈值后，Gemini CLI 直接返回 400 错误。社区期望代理能按任务作用域智能裁剪工具，而非全量携带。

### 安全与隐私

6. **[#26525] Auto Memory 需确定性脱敏并减少日志记录**（P2 / Security / 4 评论）
   https://github.com/google-gemini/gemini-cli/issues/26525
   本地 transcripts 内容被发送给提取模型后，才依赖提示词指示脱敏——敏感信息在脱敏前已进入模型上下文；服务还会记录已有 skill 内容。属于隐私架构层面的隐患。

7. **[#26522] Auto Memory 无限重试低信号会话**（P2 / Bug / 5 评论）
   https://github.com/google-gemini/gemini-cli/issues/26522
   低信号会话因提取代理决定不读取而永远无法标记为"已处理"，导致反复出现、反复消耗 token。记忆系统的调度策略需要更明确的状态转移。

### Agent 能力与控制

8. **[#21968] Gemini 不会主动使用 skills 和子代理**（P2 / Bug / 6 评论）
   https://github.com/google-gemini/gemini-cli/issues/21968
   用户反馈模型几乎从不会主动调用自定义 skills（如 gradle、git），即使已配置详细描述。自定义 agent 生态价值因此大打折扣。

9. **[#22093] v0.33.0 起子代理绕过配置权限强制运行**（P2 / Bug / 3 评论）
   https://github.com/google-gemini/gemini-cli/issues/22093
   用户已在配置中禁用 agents 模式并仅启用 MCP，升级后子代理仍被自动调用。"配置了就必须生效"是开发者的基本预期。

10. **[#22745] 评估 AST 感知的文件读取、搜索与代码库映射**（P2 / Feature EPIC / 7 评论）
    https://github.com/google-gemini/gemini-cli/issues/22745
    跟踪调查 AST 感知工具的价值：单次调用精确读取方法边界、减少错位读取的 token 开销、提升代码库导航效率。属前瞻性架构方向，已在 #22746 中建议以 tilth/glyph 为起点验证。

## 4. 重要 PR 进展

### 安全修复

1. **[#28725] 修复 web-fetch 中 DNS 绕过导致的 SSRF 漏洞（CVSS 8.6）**（P2 / Security）
   https://github.com/google-gemini/gemini-cli/pull/28725
   恶意用户可通过自定义域名指向私网/回环 IP（如 `169.254.169.254`）绕过现有 DNS 防护，构成服务端请求伪造。该 PR 对 DNS 解析结果增加二次校验。

2. **[#28726] 沙箱 Dockerfile 升级至 node:22-slim**（P1 / Security）
   https://github.com/google-gemini/gemini-cli/pull/28726
   Node 20 即将 EOL 且不再接收安全修复（近期 CVE 仅覆盖 Node 22/24/26）。将 Sandbox 及 `tools/caretaker-agent/cloudrun/*` 全部升级到 Node 22。

### 核心稳定性

3. **[#28815] 子代理恢复时保留原始终止原因**（P1 / Agent，修复 #22323）
   https://github.com/google-gemini/gemini-cli/pull/28815
   子代理在达到 MAX_TURNS/TIMEOUT 后的宽限恢复轮中调用 `complete_task`，会被误记为 GOAL 成功。该 PR 修复今日最热 Issue #22323 的根因，确保终止原因不被覆盖。

4. **[#28828] 预览模型被静默替换时向用户发出警告**（P1 / Core）
   https://github.com/google-gemini/gemini-cli/pull/28828
   当用户请求 `gemini-3.1-pro-preview` 但账户无对应权限时，`Config` 会无提示地改写为 `auto-gemini-2.5`。该 PR 让模型降级行为透明化。

5. **[#28827] 修复"401"子串导致的误判认证错误**（P2 / Core，修复 #28203）
   https://github.com/google-gemini/gemini-cli/pull/28827
   `isAuthenticationError` 会把消息中出现的任何"401"（如端口号、退出码）误判为认证失败。新的 fallback 逻辑限定"401"仅在消息开头或 HTTP 状态上下文中才生效。

6. **[#28812] 为 TUI 增加执行超时，防止无限期挂起**（P1 / Core，修复 #21477）
   https://github.com/google-gemini/gemini-cli/pull/28812
   从裸 Linux 终端启动时，TUI 可能卡在"Initializing..."。根因是 `getProcessInfo()` 依赖 `execAsync` 执行 Unix `ps`，现通过超时机制兜底。

### 认证与开发者体验

7. **[#28679] 改进 Vertex AI 401 错误提示**（P2 / Auth）
   https://github.com/google-gemini/gemini-cli/pull/28679
   仅配置了标准 Gemini API key 却使用 vertex-ai 认证类型时，此前直接请求后失败；现在可在请求前给出清晰的配置引导。

### 评估体系

8. **[#28824] 新增多工具链、上下文安全与安全边界行为评估**（evals）
   https://github.com/google-gemini/gemini-cli/pull/28824
   新增 `multi_tool_chain.eval.ts` 等行为评估，覆盖多工具链编排执行、大文件的上下文安全处理，以及敏感文件/目录的安全边界强制。

9. **[#28822] 新增任务规划与追踪器行为评估**（evals）
   https://github.com/google-gemini/gemini-cli/pull/28822
   为 `write_todos`、`complete_task`、`tracker_list_tasks`、`tracker_get_task` 补齐行为评估，保障任务追踪链路的功能回归安全。

### 其他

10. **[#28608] 预览模型 404 时回退到稳定模型（已关闭）**（P2 / Agent）
    https://github.com/google-gemini/gemini-cli/pull/28608
    Gemini API key 对应的项目若无预览模型访问权限，请求会收到 404。该 PR 试图在回退策略中处理此场景（最终关闭，方向已并入 #28828 的警告方案）。

## 5. 热门 Discussions

（今日未提供 Discussions 数据，本节省略）

## 6. 功能需求趋势

- **子代理调度稳定性成为第一优先级**：MAX_TURNS 误报（#22323）、无限挂起（#21409）、权限绕过（#22093）、Wayland 失败（#21983）在同一天集中活跃，说明子代理链路的状态管理与异常恢复是当前最大的技术债。
- **安全左移与供应链加固**：多个方向并行推进——Auto Memory 脱敏（#26525）、SSRF 修复（#28725）、Node 20→22 升级（#28726）、劝阻破坏性命令（#22672），安全已从"功能"走向"默认属性"。
- **"智能"与"可控"的平衡**：一方面社区希望模型主动使用 skills/子代理（#21968），另一方面要求禁用配置被严格尊重（#22093）。自主调用与用户控制权之间需要更明确的边界设计。
- **工具链规模化与 token 效率**：工具数量上限问题（#24246）与 AST 感知代码读取（#22745、#22746）显示，社区关注点正从"能完成任务"转向"在大仓库中以更低 token 成本高效完成"。
- **记忆系统工程化**：Auto Memory 系列问题（#26522、#26523、#26525）暴露了重试策略、无效补丁隔离、日志安全等工程细节，记忆功能正经历从"可用"到"可靠"的成熟过程。
- **系统化评估基建**：多批 evals PR（#28822-28824）及组件级评估 EPIC（#24353）表明，团队正将行为评估覆盖到任务追踪、多工具链、安全边界等场景，以建立更全面的回归防御网。

## 7. 开发者关注点

- **"假状态"比失败更破坏信任**：子代理中断被报告为成功（#22323）、shell 命令完成后仍显示等待输入（#25166），这类状态误报让开发者无法判断真实执行结果，是反馈最强烈的痛点。
- **配置透明性与确定性不足**：子代理在禁用后仍被调用（#22093）、Browser Agent 忽略 settings.json 覆盖（#22267）、预览模型被静默替换（#28828），开发者期望"配置了就必须生效，降级了必须告知"。
- **Bug 报告缺少子代理上下文**：#21763 指出 `/bug` 收集的报告仅包含主会话信息，无法还原子代理内部的执行轨迹，给问题诊断带来很大困难。
- **智能特性的"自作主张"增加清理成本**：模型在随机目录创建临时脚本（#23571）、Auto Memory 对低信号会话无限重试（#26522），这类低信噪比行为浪费 token 并污染工作区。
- **浏览器代理需要自愈能力**：#22232 提出浏览器会话接管与锁恢复机制，#22267 指出其不读取全局/项目级 maxTurns 配置。浏览器自动化场景的健壮性仍有明显短板。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-08-16** | 数据来源：[github/copilot-cli](https://github.com/github/copilot-cli)

---

## 1. 今日速览

今日发布 v1.0.81-0 模型配置更新；当前社区焦点集中在 **MCP OAuth 兼容性反复回归**（#4480/#4490）、**NixOS 平台 Bash 工具失效**（#3392）以及 **CI 环境下 MCP 策略权限问题**（#4346）等稳定性缺陷上。此外，Windows 平台上的 OOM 崩溃与 BYOK 模式下 prompt 缓存失效等新问题也在持续发酵。

---

## 2. 版本发布

### v1.0.81-0
- **改进**：更新模型配置（Update model configurations）
- **说明**：该版本紧随 1.0.80 发布，主要针对模型配置进行调整，推测与当日多个模型相关 Issue（#4494/#4495）反馈有关。
- 链接：[Release v1.0.81-0](https://github.com/github/copilot-cli/releases)

---

## 3. 社区热点 Issues

挑选当日更新中最值得关注的 10 个 Issue，涵盖高热度讨论与最新上报的回归问题。

### 3.1 高热度/高赞 Issue

**#3392 | Bash tool breaks on NixOS with version >=1.0.49** ⭐ 9👍
- **作者**：CircuitCoder | 状态：OPEN（更新于 2026-08-15）
- **摘要**：自 v1.0.49 起 Bash 工具在 NixOS 上无法启动命令，报错 `Failed to start bash process`，strace 追踪显示进程启动异常。1.0.50 仍存在。
- **重要性**：平台兼容性回归，影响 NixOS 用户超过 3 个月仍未修复，社区持续关注。
- [查看详情](https://github.com/github/copilot-cli/issues/3392)

**#4480 | Atlassian MCP OAuth fails with "Incompatible authorization server" on 1.0.79 — regression from 1.0.71** ⭐ 6👍
- **作者**：jfrost-fabric | 状态：CLOSED（更新于 2026-08-15）
- **摘要**：升级到 1.0.79 后，Atlassian 远程 MCP 服务器的 OAuth 发现流程报错 `MCPOAuthError: Incompatible authorization server (RFC 8414 §3.3)`，1.0.71 正常。
- **重要性**：该问题在 1.0.80 中再次出现（见 #4490），说明修复未彻底，MCP OAuth 稳定性成疑。
- [查看详情](https://github.com/github/copilot-cli/issues/4480)

**#2934 | Support protobuf OTLP export (OTEL_EXPORTER_OTLP_PROTOCOL=http/protobuf)** ⭐ 6👍
- **作者**：loganrosen | 状态：CLOSED（更新于 2026-08-15）
- **摘要**：Copilot CLI 的 OpenTelemetry 导出只支持 `application/json`，忽略标准的 `OTEL_EXPORTER_OTLP_PROTOCOL` 环境变量，无法使用 protobuf 协议。
- **重要性**：可观测性基础设施的关键缺口，影响将 Copilot CLI 纳入统一 OTel 管道的企业用户。
- [查看详情](https://github.com/github/copilot-cli/issues/2934)

**#4346 | MCP registry policy fetch returns 403 for Actions GITHUB_TOKEN, blocking all non-default MCP servers in CI** ⭐ 3👍
- **作者**：ben-ogp | 状态：CLOSED（更新于 2026-08-15）
- **摘要**：在 GitHub Actions 中使用内置 `GITHUB_TOKEN`（官方推荐的 PAT-less 方案）认证时，MCP 注册表策略获取返回 403，导致所有非默认 MCP 服务器无法在 CI 中使用。
- **重要性**：直接影响 CI/CD 场景下 MCP 扩展的可用性，官方倡导的免 PAT 方案存在阻断性缺陷。
- [查看详情](https://github.com/github/copilot-cli/issues/4346)

### 3.2 最新上报的回归与高影响问题

**#4490 | Atlassian MCP OAuth authentication broken in 1.0.80 (RFC 8414 §3.3 regression)** 🔄 回归再现
- **作者**：ChandrasekarCK | 状态：OPEN（更新于 2026-08-15）
- **摘要**：1.0.80 再次出现 RFC 8414 §3.3 认证失败，与 #4480 相同，而 1.0.78 正常。当前版本已多次反复。
- **重要性**：同一 MCP OAuth 缺陷在两个版本中连续复发，社区对版本质量产生疑虑。
- [查看详情](https://github.com/github/copilot-cli/issues/4490)

**#4499 | v1.0.79 fatal "Committing semi space failed" OOM in autopilot with V8 heap only ~0.6/4.3 GB** 🐛 严重崩溃
- **作者**：AndreiTkachyov | 状态：OPEN（更新于 2026-08-15）
- **摘要**：长时间 autopilot 会话中 `copilot.exe` 崩溃，错误为 `FATAL ERROR: Committing semi space failed`，但崩溃时 V8 堆仅使用 607 MB / 4.3 GB，属于宿主内存提交失败而非堆上限问题。
- **重要性**：Windows 平台上的严重稳定性问题，崩溃场景与内存配置相关，影响长时间无人值守运行。
- [查看详情](https://github.com/github/copilot-cli/issues/4499)

**#4491 | /spawn command template instructs the agent to reuse an existing session, contradicting its own singular-spawn contract** 🚨 潜在数据安全
- **作者**：apcsb | 状态：OPEN（更新于 2026-08-15）
- **摘要**：`/spawn` 命令的提示模板存在自相矛盾：既声明"创建子会话"，又指引 agent 复用已有会话，可能将上下文注入无关的运行中会话，且无审批门槛。
- **重要性**：可能导致跨会话数据污染或意外写入，属于指令注入层面的逻辑缺陷。
- [查看详情](https://github.com/github/copilot-cli/issues/4491)

**#4494 | Newly enabled model remains unavailable until local Copilot state/cache/login is cleared** 🧠 模型缓存问题
- **作者**：obonn1 | 状态：OPEN（更新于 2026-08-15）
- **摘要**：在 GitHub 设置中启用新模型（如 Sonnet 5）后，CLI 和 Visual Studio 的模型目录不刷新，需手动清除本地 Copilot 状态/缓存/登录信息才能生效。
- **重要性**：直接阻碍新模型的采用，影响用户体验与模型上新节奏。
- [查看详情](https://github.com/github/copilot-cli/issues/4494)

**#4495 | Add support for GPT-5.6 reasoning.mode parameter** ✨ 新模型支持
- **作者**：csdivad | 状态：OPEN（更新于 2026-08-15）
- **摘要**：GPT-5.6 新增 `reasoning.mode` 参数（"standard" / "pro"，默认 standard），请求支持在 CLI 中选择 "pro" 模式。
- **重要性**：社区对新模型的跟进需求，体现用户对前沿模型能力接入的期望。
- [查看详情](https://github.com/github/copilot-cli/issues/4495)

**#4501 | Codespaces ships Copilot CLI 1.0.3 and `copilot update` only installs with `sudo`** ⚙️ 环境分发问题
- **作者**：bazaarjapan | 状态：OPEN（更新于 2026-08-15）
- **摘要**：新打开的 GitHub Codespaces 预装 Copilot CLI 1.0.3（严重过期），`copilot update` 虽显示下载 1.0.80，但实际二进制未被替换，需手动 `sudo` 安装。
- **重要性**：官方 Codespaces 镜像版本滞后，且自动更新机制失效，影响开箱即用体验。
- [查看详情](https://github.com/github/copilot-cli/issues/4501)

**#4421 | MCP initialize handshake has a fixed, non-configurable 60s budget with no retry** ⏱️ 协议稳定性
- **作者**：devinj-msft | 状态：OPEN（更新于 2026-08-15）
- **摘要**：MCP `initialize` 握手硬编码 60 秒超时，超时后记录失败且**整个会话不再重试**该服务器，无退避机制，也无法调整预算。npx 启动的 stdio 服务器约有 29% 概率初始化失败。
- **重要性**：MCP 生态的可靠性瓶颈，影响所有使用 npx 启动 MCP 服务器的用户。
- [查看详情](https://github.com/github/copilot-cli/issues/4421)

> 💡 其余值得留意的新增 Issue：#4502（会话取消归档）、#4493（`/restart` 与 `-w` 冲突）、#4500（BYOK prompt 缓存失效）、#4438（skill 显式调用不可达）。

---

## 4. 重要 PR 进展

当前仅 2 个 PR 在 24 小时内有更新，均与仓库自动化维护相关，本次不做数量凑整。

**#4497 | Handle fork PR associations in invalid-label writer** 🔧 仓库自动化修复
- **作者**：mrecachinas | 状态：OPEN（更新于 2026-08-15）
- **摘要**：更新 invalid-label 写入器，处理 fork PR 工作流运行时 GitHub 未填充 PR 关联信息的情况。当关联缺失时，通过受信任的工作流运行元数据进行搜索，并要求恰好存在一个匹配的公开 PR。
- **重要性**：提升 fork PR 场景下自动化标签处理的可靠性，是 #4449 迁移工作的后续补充。
- [查看详情](https://github.com/github/copilot-cli/pull/4497)

**#4449 | Migrate pull request automation away from pull_request_target** 🔧 安全加固（已合并）
- **作者**：mrecachinas | 状态：CLOSED（更新于 2026-08-15）
- **摘要**：将 invalid-label 自动化从 `pull_request_target` 迁移出来，同时保留 issue/PR 关闭行为。具体包括：用 issue 级写权限 token 直接关闭无效 issue；用无权限的 `pull_request` 信号处理可合并 PR；特权操作在独立环境中运行。
- **重要性**：消除了 `pull_request_target` 的权限提升风险，属于仓库供应链安全加固。
- [查看详情](https://github.com/github/copilot-cli/pull/4449)

---

## 5. 热门 Discussions

⚠️ 本次数据源未提供 Discussions 数据，该部分暂缺。

---

## 6. 功能需求趋势

综合分析当日 Issue/PR 内容，社区关注的功能方向如下：

| 方向 | 代表 Issue | 热度/趋势 |
|------|-----------|----------|
| **MCP 协议稳定性** | #4480、#4490、#4346、#4421 | 🔥 高 — MCP OAuth 反复回归问题尤为突出，多个 issue 相互关联，用户对版本质量关注度显著 |
| **新模型支持** | #4495（GPT-5.6 reasoning）、#4494（Sonnet 5 不可见） | 📈 上升 — 对前沿模型参数透传和模型目录实时刷新的需求 |
| **平台兼容性** | #3392（NixOS）、#4499（Windows OOM）、#4501（Codespaces） | 📊 稳定 — NixOS 问题长达 3 个月未解决，Windows OOM 属新发现的严重问题 |
| **会话管理增强** | #4502（取消归档）、#4493（`/restart` + `-w` 冲突） | 📈 上升 — 用户对会话生命周期精细控制的需求增加 |
| **可观测性** | #2934（OTLP protobuf） | 📊 稳定 — 企业级 OTel 集成的长期需求，虽已关闭但关注度高 |

**趋势解读**：MCP 生态稳定性是当前社区最大的痛点，OAuth 兼容性问题在两个版本中连续回归，严重消耗社区信任；同时，随着模型快速迭代，用户对"新模型即时可用"与"高级参数透传"的诉求也在快速增长。

---

## 7. 开发者关注点

- **MCP OAuth 反复回归**：同一 RFC 8414 §3.3 认证问题在 1.0.79 和 1.0.80 中连续出现（#4480 → #4490），且 #4346 显示 CI 场景下 MCP 策略权限也存在 403 阻断。开发者普遍担忧 MCP 功能的版本稳定性。
- **平台兼容性修补不及时**：NixOS issue（#3392）自 5 月起持续未修复，新上报的 Windows OOM（#4499）和 Codespaces 镜像版本滞后（#4501）进一步暴露官方对非主流环境关注不足。
- **模型配置与管理体验**：新模型启用后本地缓存不刷新（#4494）、子 agent 模型被静默降级（#3565）等问题，让开发者在模型选型上缺乏可控性和可预测性。
- **命令/状态管理的隐性风险**：`/spawn` 模板矛盾可能造成跨会话数据污染（#4491），`/restart` 与 `-w` 冲突（#4493），反映命令设计在边界情况下的考虑不足。
- **长时运行稳定性**：autopilot 模式下 Windows OOM（#4499）与 BYOK prompt 缓存失效（#4500）意味着长时间无人值守会话仍存在不稳定因素。

---

*日报由 GitHub Copilot CLI 仓库公开数据自动生成，仅供技术参考。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-08-16

## 今日速览

过去 24 小时 OpenCode 仓库保持高活跃度，共 50 条 Issue 和 50 条 PR 更新，暂无新版本发布。社区声量集中在 **grok-4.5 在 OpenCode Go 网关持续不可用**（HTTP 500/503）与 **订阅扣款后余额不更新**；核心团队则将 **workspace 级隔离（Docker/Incus）** 从功能原型推进到 SDK 与合规审查阶段，V2 基础设施正在快速成型。此外，一批 7 月中旬的贡献 PR 被 automated-pr-cleanup 自动清理/关闭，仓库处于存量清理与功能加速双轨节奏。

## 社区热点 Issues

### 1. 订阅已支付但 workspace 显示 "Insufficient balance"
- **#37790**（开放，14 评论）— [链接](https://github.com/anomalyco/opencode/issues/37790)
- 用户通过 Stripe 完成 OpenCode Go 订阅支付，但控制台仍提示余额不足，无法调用任何模型。本期最高评论数 issue，直接暴露订阅与余额系统的对账 bug。

### 2. Go Pro `$20` 订阅层级 + 首月折扣
- **#24879**（功能请求，11 评论，👍 11）— [链接](https://github.com/anomalyco/opencode/issues/24879)
- 用户希望增加 Go Pro 订阅上限，并用首月折扣缓解价格跳跃；评论区普遍认为当前“按量付费兜底”的计费模式缺乏预算控制。

### 3. 官网宣称 100% 免费，为何强制要求订阅？
- **#42143**（开放，10 评论）— [链接](https://github.com/anomalyco/opencode/issues/42143)
- 用户质疑官网免费宣传与实际订阅墙之间的落差。虽然技术属性不高，但社区信任层面的影响较大。

### 4. Plan Mode + Question 工具自动切换 Build Mode
- **#7801**（功能请求，10 评论，👍 31）— [链接](https://github.com/anomalyco/opencode/issues/7801)
- 计划模式完成后，用户需手动确认才能进入执行阶段；社区希望 Question 工具能自动触发模式切换，大幅减少操作摩擦。本期 👍 最高的请求。

### 5. grok-4.5 在 opencode go 上自 8 月 2 日不可用
- **#40206**（已关闭，9 评论）— [链接](https://github.com/anomalyco/opencode/issues/40206)
- 通过 OpenAI Chat Completions 兼容端点调用 grok-4.5 始终返回 500。虽是关闭状态，但同主题后续 issue 仍在不断出现。

### 6. OpenCode Go grok-4.5 返回 HTTP 503
- **#40886**（开放，3 评论）— [链接](https://github.com/anomalyco/opencode/issues/40886)
- 同一网关下 deepseek-v4-flash 正常，grok-4.5 稳定 503，用户猜测是上游路由或配额配置问题，而非本地配置错误。

### 7. DeepSeek API 烧 token 速度异常，疑似超收费用
- **#32911**（开放，3 评论）— [链接](https://github.com/anomalyco/opencode/issues/32911)
- 1.17 之后通过 OpenCode 调用 DeepSeek 会明显多消耗 token；Reddit 已有复现讨论。涉及真实资金损耗，用户情绪较强烈。

### 8. V2 无头命令加载 OpenTUI 并泄漏临时文件
- **#37671**（开放，4 评论）— [链接](https://github.com/anomalyco/opencode/issues/37671)
- `--version`、`--help`、`service status` 等非 TUI 命令也会加载 13.1 MiB 的 `libopentui.so`，并在临时目录中残留。资源浪费 + 磁盘泄漏的双重问题。

### 9. Provider.list 因 Cloudflare 环境变量不完整而崩溃
- **#42739**（开放，4 评论）— [链接](https://github.com/anomalyco/opencode/issues/42739)
- 系统存在 `CLOUDFLARE_*` 环境变量但缺少 `CLOUDFLARE_API_TOKEN` 时，TUI 直接崩溃且无法启动。属于未处理的异常路径，影响本地研发环境兼容性。

### 10. Poe Provider 全部内置工具回归失败
- **#42818**（开放，2 评论）— [链接](https://github.com/anomalyco/opencode/issues/42818)
- OpenCode 1.18.18 下 Poe provider 所有内置工具报 “Unknown Bedrock client tool”，新装环境即可复现。Poe 系模型用户近期升级需谨慎。

## 重要 PR 进展

> 以下 PR 中部分为 7 月中旬提交、在本次窗口期被 automated-pr-cleanup 标记关闭，但功能内容仍具参考价值。

### 1. 新增 Docker 蓝图工作区（Blueprint Workspaces）
- **#42831**（开放）— [链接](https://github.com/anomalyco/opencode/pull/42831)
- 核心改动：本地 Docker 容器作为隔离工作区、基于 commit 的容器 fork、通过 SDK Next 暴露 workspace fork、子代理自动 fork 至独立目录、空闲容器休眠唤醒。当前处于 needs:compliance 审查阶段。

### 2. Incus 工作区 Fork 支持
- **#42829**（已关闭）— [链接](https://github.com/anomalyco/opencode/pull/42829)
- 与 Docker 方案互补：新增 Incus 容器/VM 蓝图 provider、快照式 fork、子代理隔离、空闲实例休眠。两位一体地构建“工作区即基础设施”能力。

### 3. 插件事件订阅细化
- **#42830**（开放）— [链接](https://github.com/anomalyco/opencode/pull/42830)
- 插件可只订阅感兴趣的公开事件类型，不再强制通配事件流。对事件量敏感的插件将获得明显性能收益。

### 4. 批量合并流式会话增量事件
- **#42826**（已关闭）— [链接](https://github.com/anomalyco/opencode/pull/42826)
- 当前每个文本/推理/工具输入片段都发布为独立事件；该 PR 将增量事件按批次合并，可显著降低长会话高并发时的服务端负载。

### 5. 释放虚拟化时间线 DOM 节点
- **#42825**（已关闭）— [链接](https://github.com/anomalyco/opencode/pull/42825)
- 修复 renderer 内存泄漏：长会话中 TanStack Virtual 的 elementsCache 会滞留约 37,500 个已卸载 DOM 节点，本次在 Solid 移除节点时同步释放。

### 6. 全端统一树形目录选择器
- **#42820**（已关闭）— [链接](https://github.com/anomalyco/opencode/pull/42820)
- 将 Web UI 的扁平目录选择器替换为树形 picker，支持进入子目录；移除了旧回退逻辑，Add Project 交互更接近桌面原生体验。

### 7. 同步模型收藏到多 TUI 实例
- **#37172**（已关闭）— 修复 #37053 — [链接](https://github.com/anomalyco/opencode/pull/37172)
- 模型收藏（favorites）从独立 `model.json` 迁移到托管 CLI 配置；多个 TUI 进程间自动感知配置变更，避免收藏名单互相覆盖。

### 8. 修复 bwrap PID 命名空间下 SSE 事件丢失
- **#37156**（已关闭）— 修复 #37128 — [链接](https://github.com/anomalyco/opencode/pull/37156)
- `opencode serve` 在 bwrap `--unshare-pid` 沙箱内运行时，SSE 流首个 chunk 后即断流。稳定了沙箱/容器场景下的远程服务模式。

### 9. 终止连续空结果的工具循环
- **#37110**（已关闭）— 修复 #31942 — [链接](https://github.com/anomalyco/opencode/pull/37110)
- 当 discovery 工具连续 3 次返回空结果时停止循环，即使模型每次更换查询词；避免 Agent 因“无发现”而陷入无限轮询。

### 10. 增加模型覆盖（Override）设置
- **#37087**（已关闭）— 修复 #23666 — [链接](https://github.com/anomalyco/opencode/pull/37087)
- 新增通用设置项，固定当前会话的模型选择不被自动切换；解决了“每次新开话题后模型被重置”的长期体验问题。

## 功能需求趋势

- **工作区隔离与云端化（最重点）**：Docker blueprint workspaces (#42831)、Incus workspace forks (#42829)、子代理隔离均指向“让每个任务跑在独立沙箱”的架构方向，预计将打开多租户/远程开发/安全执行等场景。
- **订阅与计费体系急需补全**：Go Pro 订阅层级 (#24879)、首月折扣、订阅到账状态一致性 (#37790)、官网免费口径与订阅墙矛盾 (#42143) 等诉求集中出现，计费透明度已成为社区信任的关键问题。
- **模型兼容性仍是短板**：grok-4.5 在 OpenCode Go 上的长期故障 (#40206, #40886)、GLM 的 reasoning toggle 未生效 (#42793)、MiMo V2.5 视频输入丢失 (#40642) 表明 gateway 层面对多模型参数适配仍不充分。
- **TUI/终端体验优化**：Plan/Build 模式自动切换 (#7801)、跨行链接可点击 (#35649)、鼠标禁用后滚轮行为修正 (#35295) 是高频交互改进需求。
- **性能与资源治理**：无头命令不加载 TUI、不泄漏临时文件 (#37671)、SSE 事件增量批处理 (#42826)、虚拟化列表内存释放 (#42825) 反映了社区对长会话资源消耗的敏感。

## 开发者关注点

- **扣费与余额问题信任破坏力最大**：#37790 订阅扣款未到账、#32911 DeepSeek token 被超量扣费，都在直接影响用户真金白银的体验，也是 24h 内评论最集中的类别。
- **grok-4.5 可用性处理流程需改进**：相关 issue 频繁被关闭或标记重复，但 #40886 仍在开放且持续报错；用户更希望看到网关侧的状态公告与赔付/补偿方案。
- **V2 资源消耗控制需前置**：无头命令加载 13.1 MiB 原生库、长会话 DOM 滞留等泄漏问题，均被社区视为 V2 正式推送前的 go/no-go 条件。
- **权限规则执行缺失引发安全担忧**：#32787 指出代理声明 `"edit": "ask"` 后运行时不弹确认，工具照常执行——对于需要审计的企业用户是明显阻塞项。
- **集成回归需要回归测试清单**：Poe provider 在 1.18.18 全量工具失效 (#42818)，且此类问题往往要等用户报告才被发现；建议官方在发版 pipeline 中覆盖主要 provider 的 smoke test。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

# Pi 社区动态日报 — 2026-08-16

## 今日速览

过去 24 小时内，Pi 仓库主要围绕**上下文压缩（compaction）可靠性**与 **TUI 交互细节**展开密集修复：多条 PR 针对压缩触发时机、失败恢复、统计口径，以及光标闪烁、渲染崩溃等问题落地。社区侧，**DeepSeek Harness 兼容层**成为新讨论热点，同时多个模型提供商适配（DeepSeek V4 Flash、xAI、LLMTR）也在持续推进。

---

## 社区热点 Issues

### 1. #6879 auto-compaction never triggers after context grows past 100% until provider overflow
- **标签**：[OPEN] [bug] | **👍 17 | 💬 21**
- **链接**：https://github.com/earendil-works/pi/issues/6879
- **要点**：在 gpt-5.6-sol 上单个 agentic turn 运行超 2 小时，context 超过 100% 后 compaction 仍未触发，直到 API 在 373k tokens 处拒绝请求才被动进入压缩。作者建议每次 agent 操作后检查上下文水位。
- **重要性**：高赞 + 大量评论说明这是社区普遍遇到的稳定性痛点，直接影响长任务可靠性。

### 2. #6187 Pi login hangs in WSL after browser-based GitHub Copilot device authorization
- **标签**：[CLOSED] [bug] | **💬 27**
- **链接**：https://github.com/earendil-works/pi/issues/6187
- **要点**：WSL 环境下安装成功、浏览器设备授权也显示已注册，但 WSL 终端中的 pi 客户端无法感知授权完成，登录一直挂起。
- **重要性**：评论数最高，暴露 WSL 集成中的关键流程缺陷，对 WSL 用户影响很大。

### 3. #8170 Windows: bash tool can kill its own host via image-wide taskkill
- **标签**：[CLOSED] [untriaged] | **💬 2**
- **链接**：https://github.com/earendil-works/pi/issues/8170
- **要点**：模型生成的命令 `cmd.exe /c "taskkill /F /IM node.exe"` 未经确认即执行，直接杀死了 pi-web 所在的 node.exe 宿主进程。
- **重要性**：严重安全/自毁问题，说明 bash 工具在 Windows 上缺乏足够的命令沙箱防护。

### 4. #8028 TUI fullRender crashes with RangeError when rendered output exceeds V8 string limit
- **标签**：[OPEN] [bug] | **💬 2**
- **链接**：https://github.com/earendil-works/pi/issues/8028
- **要点**：视频分析 agent 读取大量图片后，`fullRender` 因输出超过 V8 字符串长度限制而崩溃（`RangeError: Invalid string length`）。
- **重要性**：影响大规模多模态任务，TUI 在大输出场景下缺少保护。

### 5. #8003 Cursor in input box flickers aggressively while the assistant is streaming
- **标签**：[OPEN] [bug] | **💬 2**
- **链接**：https://github.com/earendil-works/pi/issues/8003
- **要点**：流式输出时输入框光标异常快速闪烁，且边生成边打字会加剧。已有对应 PR #8155 修复。
- **重要性**：高频交互体验问题，直接影响日常使用的舒适度。

### 6. #8168 Compaction + session restore corrupts tool-result role → 422
- **标签**：[CLOSED] [untriaged] | **💬 1**
- **链接**：https://github.com/earendil-works/pi/issues/8168
- **要点**：压缩后工具结果消息角色被破坏，下轮请求返回 422 `Input should be <ChatMessageRole.TOOL: 'tool'>`。
- **重要性**：压缩流程的隐藏数据完整性问题，会导致会话中断且错误信息难以排查。

### 7. #8171 TUI: fixed-height scrollable thinking blocks + auto-collapse on completion
- **标签**：[CLOSED] [untriaged] | **💬 2**
- **链接**：https://github.com/earendil-works/pi/issues/8171
- **要点**：建议给 thinking 块增加最大高度内部滚动，或完成后自动折叠，避免 transcript 被无限拉长。
- **重要性**：代表了 TUI 信息密度管理的典型需求，社区对 thinking 块的展示方式有明确优化期望。

### 8. #8157 Migrate grok-mermaid → lovely-mermaid
- **标签**：[OPEN] | **💬 2**
- **链接**：https://github.com/earendil-works/pi/issues/8157
- **要点**：作者认为 grok-mermaid 是原 grok 构建的 1:1 移植，继承了大量边界缺陷；lovely-mermaid 解析器和渲染质量更好，建议迁移。
- **重要性**：关联 PR #8158，直接影响终端内 Mermaid 图表的渲染质量。

### 9. #8105 openai-codex-responses: Codex materializes optional tool parameters (gpt-5.6-sol)
- **标签**：[CLOSED] [no-action] | **💬 4**
- **链接**：https://github.com/earendil-works/pi/issues/8105
- **要点**：`openai-codex-responses` 序列化工具时将可选参数变成必填，gpt-5.6-sol 下强制调用方提交所有属性。
- **重要性**：模型/API 兼容性 bug，影响工具调用的灵活性和下游集成。

### 10. #7787 Bash PI_* guideline triggers unnecessary permission prompts during unrelated tasks
- **标签**：[OPEN] | **💬 3**
- **链接**：https://github.com/earendil-works/pi/issues/7787
- **要点**：`exposeSessionEnvironment: true` 会在每次会话注入“请检查 PI_* 环境变量”的指导，模型因此在无关任务中反复执行 `env` 触发多余权限确认。
- **重要性**：代表 AI Agent 的“指令污染”问题，已有 PR #8148 缩小指导范围。

---

## 重要 PR 进展

### 1. #8153 fix: compact at safe turn boundaries
- **作者**：adnichols | **状态**：[CLOSED]
- **链接**：https://github.com/earendil-works/pi/pull/8153
- **要点**：新增 run 级边界压缩请求 API，在完整 turn 之间执行压缩，重建同 run 内的 live context，且不破坏原生 recent tail；核心溢出恢复保持有界。
- **价值**：直接回应 #6879 等压缩时机问题，是近期压缩机制最重要的结构性改进。

### 2. #8155 fix(tui): avoid resetting cursor blink during renders
- **作者**：muyiyr | **状态**：[OPEN]
- **链接**：https://github.com/earendil-works/pi/pull/8155
- **要点**：跟踪终端光标可见性，只在状态变化时发送命令；常规与全屏渲染器行为一致，保留生命周期/覆盖层/设置调用。
- **价值**：修复 #8003 光标闪烁问题，提升流式输出时的输入体验。

### 3. #8151 fix(extensions): contain widget render failures and tear down ctx-owned widgets on invalidation
- **作者**：tryingET | **状态**：[CLOSED]
- **链接**：https://github.com/earendil-works/pi/pull/8151
- **要点**：第三方扩展在小部件渲染闭包中捕获 ctx，`/reload` 后 runner 失效但 widget 注册仍存活，导致渲染崩溃。此 PR 将渲染失败隔离并回收 ctx 所属 widget。
- **价值**：增强扩展系统的容错性，避免单个扩展拖垮整个 TUI。

### 4. #8148 fix(coding-agent): scope the bash PI_* guideline to session questions
- **作者**：white-hat | **状态**：[CLOSED]
- **链接**：https://github.com/earendil-works/pi/pull/8148
- **要点**：修复 #7787，将“可检查 PI_* 环境变量”的 guideline 限定在会话相关问题时，避免模型在普通任务中执行 `env`。
- **价值**：减少无关权限提示，让 bash 工具的行为更可预测。

### 5. #8165 fix(coding-agent): tokens.total = billable only (exclude cacheRead/cacheWrite)
- **作者**：sebbuntu | **状态**：[CLOSED]
- **链接**：https://github.com/earendil-works/pi/pull/8165
- **要点**：token 统计中排除 cacheRead/cacheWrite（按 1/120 输入价格计费），total 仅计 input+output，缓存单独报告，避免压缩预算和状态统计失真。
- **价值**：修正核心数据口径，让上下文压缩决策和用户看到的统计更准确。

### 6. #8164 fix(agent-session): never continue from trailing assistant message (compaction crash)
- **作者**：sebbuntu | **状态**：[CLOSED]
- **链接**：https://github.com/earendil-works/pi/pull/8164
- **要点**：静默溢出压缩在已完成 turn（stopReason 'stop'）上调用 `agent.continue()`，导致 “Cannot continue from message role: assistant” 崩溃。现在只在 turn 因错误被中断时重试，正常完成则直接运行。
- **价值**：修复压缩后偶发崩溃，避免“压缩本身导致会话死亡”的尴尬情况。

### 7. #8146 fix(ai): cap Baseten DeepSeek V4 Flash output at 384k tokens
- **作者**：white-hat | **状态**：[CLOSED]
- **链接**：https://github.com/earendil-works/pi/pull/8146
- **要点**：models.dev 报告 Baseten 上 DeepSeek V4 Flash 支持 1,048,576 token 输出，但实际服务上限为 384k；超限请求失败。此 PR 将 `maxTokens` 限制为 384,000。
- **价值**：修正模型能力元数据与实际服务不一致导致的请求失败。

### 8. #8181 fix(ai): expose low thinking level for DeepSeek V4 Flash on opencode/opencode-go
- **作者**：tianshuang | **状态**：[CLOSED]
- **链接**：https://github.com/earendil-works/pi/pull/8181
- **要点**：`DEEPSEEK_V4_FLASH_THINKING_LEVEL_MAP` 只作用于 `deepseek/deepseek-v4-flash`，通过 opencode/opencode-go 提供同一模型时回退到 `DEEPSEEK_V4_THINKING_LEVEL_MAP`，导致 `low` 档缺失。此 PR 补全映射。
- **价值**：修复同一模型在不同 provider 下能力不一致的问题。

### 9. #8149 fix(ai): omit invalid OpenAI session header
- **作者**：rolandgvc | **状态**：[CLOSED]
- **链接**：https://github.com/earendil-works/pi/pull/8149
- **要点**：OpenAI Responses 请求携带 `session_id` HTTP 头，部分 HTTP/1 代理拒绝下划线头名（Envoy 400 `http1.unexpected_underscore`）。此 PR 移除该头部。
- **价值**：消除生产环境的代理兼容性故障，零上游耗时即失败的问题得到修复。

### 10. #8158 feat(coding-agent): upgrade Mermaid terminal rendering
- **作者**：xl0 | **状态**：[OPEN]
- **链接**：https://github.com/earendil-works/pi/pull/8158
- **要点**：将终端 Mermaid 渲染从 grok-mermaid 迁移至 lovely-mermaid（Closes #8157、#7832），提升图表渲染质量。
- **价值**：直接改善文档和图表在 TUI 中的可读性。

---

## 热门 Discussions

### Q&A
- **#3373 Which plugins, add-ons, or extensions do you most enjoy using with the Pi agent?**
  - 作者：eterps | 💬 9 | 👍 7
  - 链接：https://github.com/earendil-works/pi/discussions/3373
  - 要点：用户询问社区常用的 Pi 插件/扩展，是了解生态偏好的窗口。

### Show and tell
- **#8090 Your Pi extensions now have a second host: run them unmodified on DeepSeek Harness**
  - 作者：weijiafu14 | 💬 2 | 👍 1
  - 链接：https://github.com/earendil-works/pi/discussions/8090
  - 要点：介绍 [pi2dsh](https://github.com/weijiafu14/pi2dsh) 兼容引擎，Pi 扩展包可不经修改直接运行在 DeepSeek Harness 上。对扩展作者是重要生态扩展。

- **#8179 pi-dsh-minimal — official DeepSeek Harness minimal surface inside Pi**
  - 作者：Averyyy | 💬 0 | 👍 1
  - 链接：https://github.com/earendil-works/pi/discussions/8179
  - 要点：社区扩展将 Pi 映射到 DeepSeek Harness 官方“minimal”评测面（相同 system prompt + 两个工具），便于对齐 DeepSeek V4 Pro 的模型卡效果。

- **#5951 Thanks!**
  - 作者：RichardScottOZ | 💬 2 | 👍 5
  - 链接：https://github.com/earendil-works/pi/discussions/5951
  - 要点：用户表达对 Pi 的感谢，侧面反映社区满意度。

---

## 功能需求趋势

1. **压缩机制精细化**：多起 issue/PR 围绕“何时压缩、在哪个边界压缩、压缩失败如何通知”，核心诉求是压缩不应打断长任务，也不应产生数据损坏。代表：#6879、#8153、#8164、#8168。

2. **TUI 交互体验优化**：光标闪烁控制、thinking 块限高/自动折叠、全屏鼠标滚轮步长配置、隐藏块不留空白行。代表：#8003、#8171、#8154、#7765、#8155。

3. **安全边界收敛**：bash 工具会话变量泄漏、Windows 下 `taskkill` 自毁宿主、乱用环境变量检查。代表：#8170、#7787、#8148。

4. **扩展系统生态化**：扩展事件通知（UI 对话框、压缩失败）、widget 容错、跨宿主兼容（DeepSeek Harness）。代表：#7147、#8175、#8151、#8090、#8179。

5. **新模型/提供商适配**：DeepSeek V4 Flash thinking 档位、Baseten 输出上限、xAI 切换 Responses API 并默认 Grok 4.6、LLMTR 内建 provider。代表：#8181、#8146、#8124、#8178。

6. **文档与引导明确化**：如何中止当前生成并输入新提示、Windows Terminal 快捷键冲突说明。代表：#8058、#8183。

---

## 开发者关注点

- **Compaction 是最集中的痛点**：从触发时机（#6879）、安全边界（#8153）、失败恢复（#8174）、角色损坏（#8168）到扩展不可见的失败信号（#8175），多个环节都有问题，社区正推动系统性修复。
- **Windows/WSL 兼容性问题突出**：登录挂起（#6187）、bash 工具可杀死宿主进程（#8170），在 Windows 环境使用 Pi 的稳定性仍有较大提升空间。
- **模型参数映射一致性**：同一模型经不同 provider 暴露时，thinking 档位、可选工具参数等行为不一致，给用户带来“同一模型不同表现”的困扰。
- **扩展开发者在运行时可见性上受限**：压缩失败、UI 对话框等关键生命周期没有对应事件，扩展难以感知和干预内部状态。
- **TUI 细节决定日常体验**：光标闪烁、thinking 块高度、滚动步长这些看似微小的问题，因高频使用而被频繁反馈，相关修复也很快跟进。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-08-16

## 今日速览

过去 24 小时内，Qwen Code 发布了 `v0.21.11-nightly.20260815`，核心变更包括 autofix footprint gate 默认拒绝策略，以及 Web Shell 修复；随附的 DSW EAS SWE-bench Verified + Terminal-Bench 2.0 端到端 smoke 验证完成 5 轮迭代。社区层面，`/review` 工具链在实战中集中暴露了重叠检测、路径冲突与并发竞争等问题，已成为当前开发修复的主战场；同时多个 main 分支 CI E2E 失败（P1）正由 autofix 流程自动跟进。

## 版本发布

**v0.21.11-nightly.20260815.c396fe3d12**

- **feat(autofix)**: deny-by-default footprint gate 与 positional window censuses — 对 autofix 的审查范围采取更严格的默认拒绝策略（[PR #9156](https://github.com/QwenLM/qwen-code/pull/9156)）。
- **fix(web-shell)**: 修复 Web Shell 相关问题（release notes 截断，具体内容待释放）。
- 随附 5 轮 DSW EAS SWE-bench Verified + Terminal-Bench 2.0 组合 smoke 发布（r1–r5），核心链路已验证跑通；r2–r5 的 SWE-bench Verified 均 1/1 resolved，基准参考版本为 `Benchmark-Qwen-Ref: v0.21.12`。

## 社区热点 Issues（10 个）

1. **[#9250] qwen serve 写文件权限硬编码 0600，忽略 umask 且不可配置** — 社区用户 `VorlMaldor` 指出 `write_file`/`edit` 等工具创建新文件时无条件使用 `0600`，无任何配置项可覆盖。这会影响团队协作场景下的文件共享，目前有 4 条评论讨论解决方案。  
   https://github.com/QwenLM/qwen-code/issues/9250

2. **[#7427] web-shell artifact 面板自动刷新时持续报 'Load artifacts failed: Failed to fetch'** — 这是持续约一个月的 UI 高频错误，非用户操作触发的自动刷新每次都会弹错，社区有 5 条评论跟进，已标记 need-retesting，值得关注。  
   https://github.com/QwenLM/qwen-code/issues/7427

3. **[#9200] 用户对推理过程稳定性表达不满** — 相同任务、相同本地模块，结果相同但过程差异巨大，发帖用户直言 "qwencode 这么拉跨吗？" 并附上三份详细日志。该 issue 反映了社区对过程可复现性和稳定性的高期待，目前 4 条评论。  
   https://github.com/QwenLM/qwen-code/issues/9200

4. **[#9219] /review presubmit 重叠匹配仅支持精确单行，多行范围与语义重复会漏检** — 社区核心贡献者 `wenshao` 提交，多行 inline comment 与语义重复的 finding 无法被检测为冲突，影响审查准确性，4 条评论深度讨论。  
   https://github.com/QwenLM/qwen-code/issues/9219

5. **[#9218] /review presubmit --new-findings 拒绝 Step 6 的 findings artifact** — 文件路径与 skill 自身示例冲突，导致按规范执行的命令被误拒绝，4 条评论讨论设计矛盾。  
   https://github.com/QwenLM/qwen-code/issues/9218

6. **[#9089] autofix: PAT 任务与不受信分支代码共享宿主机，需 runner 级隔离** — P1 安全类 issue，`wenshao` 指出 GitHub Actions 步骤内无法闭环修复，需要架构层面调整。4 条评论，社区关注度高。  
   https://github.com/QwenLM/qwen-code/issues/9089

7. **[#9230] 前缀缓存失效问题** — 开启 prefix caching（如 llama.cpp）时，主 session 的 prompt cache 命中率约为 0%，每条消息都重新预填充整个上下文；`enableCacheSharing` 又默认关闭，性能开销显著，3 条评论讨论。  
   https://github.com/QwenLM/qwen-code/issues/9230

8. **[#9208] /review overlap-drop 吞掉 ledger 重投，且静默丢弃同行不同 claim** — 位置相等的内容盲删导致已确认的 finding 丢失，4 条评论，与 #9215、#9212 两个 PR 直接相关。  
   https://github.com/QwenLM/qwen-code/issues/9208

9. **[#9198] qwen 长时间运行后 OOM，且终端按键/鼠标完全错乱** — 1TB 内存服务器上跑一周后 OOM，退出后 tmux 终端出现乱码、无法复制粘贴。用户对比 Kimi Code 表现正常，反馈较强烈，3 条评论。  
   https://github.com/QwenLM/qwen-code/issues/9198

10. **[#9011] ask_user_question 静默返回 'User declined'** — 用户未看到问题内容就被静默取消，且无法区分真实取消原因与内部错误，交互体验有明显缺陷，3 条评论。  
    https://github.com/QwenLM/qwen-code/issues/9011

## 重要 PR 进展（10 个）

1. **[#9220] fix(ci): 复用 review runner 上失败的 checkout 自愈** — 自动审查任务在复用 self-hosted runner 时，checkout 失败会直接终止任务且无人修复；此 PR 让失败后自动恢复 runner 工作区，属于 CI 可靠性的关键补丁。  
   https://github.com/QwenLM/qwen-code/pull/9220

2. **[#9222] fix(review): 规范化 last-gate 输入，支持 mid-line 片段锚定** — 对应 #9209，解决 /review 管道最后关卡拒绝自身前序产物的问题，避免数小时分析在终点线失败。  
   https://github.com/QwenLM/qwen-code/pull/9222

3. **[#9215] fix(review): 为 duplicate-dropped Suggestions 增加独立 compose 状态与正文** — 对应 #9208，将已确认但未重投的 finding 记录在独立状态字段，并注明来源（历史 round 或并发审查者）。  
   https://github.com/QwenLM/qwen-code/pull/9215

4. **[#9212] fix(review): exempt carried-id re-posts from presubmit overlap drop** — 让 `--new-findings` 携带 ledger id（如 `R4-3`），同一位置的已有评论若带相同 id 则视为重投而非重复，修复 #9208 中的误删问题。  
   https://github.com/QwenLM/qwen-code/pull/9212

5. **[#9211] fix(review): 为 PR review 工作树增加租约锁** — 解决同 PR 并发审查时工作树被另一会话误删的问题（对应 #9205），租约从记录升级为互斥锁。  
   https://github.com/QwenLM/qwen-code/pull/9211

6. **[#9191] feat(review): 跨 rebase 保留 per-file 内容判定** — 当前 rebase 或 force-push 会让增量审查退化为全量审查；此 PR 将审查结论从绑定 commit 改为绑定文件内容对，实现跨 rebase 复用。  
   https://github.com/QwenLM/qwen-code/pull/9191

7. **[#9189] feat(autofix): 将验证过的 out-of-footprint finding 延迟到后续队列** — 为 autofix 审查循环增加"Defer to follow-up"结果：确认为真实问题但修复范围超出 PR 的 finding 会进入可持续的队列，而非丢失或强行修复。  
   https://github.com/QwenLM/qwen-code/pull/9189

8. **[#9122] feat(web-shell): 改进侧边栏会话管理** — 悬停显示会话详情、文件夹预览最多 5 行、过长标题自适应省略，持续打磨 Web Shell 的日常操作体验。  
   https://github.com/QwenLM/qwen-code/pull/9122

9. **[#8467] feat(web-shell): 增加 Git diff 来源与已有分支切换** — 支持 Uncommitted / Unstaged / Staged / Committed / Branch 对比，新增可搜索的 commit 与分支选择器，大幅扩展 Web Shell 的 Git 能力。  
   https://github.com/QwenLM/qwen-code/pull/8467

10. **[#8927] feat(channels): sessionRotation 限制会话生命周期** — 为每个 channel 增加 `maxTurns` / 时间上限，到期后自动开启新会话，防止长驻路由中会话状态无限膨胀。  
    https://github.com/QwenLM/qwen-code/pull/8927

## 功能需求趋势

- **/review 审查工具链的工程化加固**：过去 24 小时的 Issues / PRs 中，约半数围绕 `/review` 的重叠检测、输入校验、并发控制、增量复用等主题。内部高强度使用已将该工具从"能用"推向"工程化"，这将是近期最集中的改进方向。
- **Web Shell 体验深化**：从 Git diff 来源、分支切换（#8467）、侧边栏管理（#9122），到 HTML 导出重构（#9186）、手工会话名保留（#8977），Web Shell 正从"聊天界面"演进为完整的开发工作台。
- **CI/CD 可靠性与自愈能力**：多个 main 分支 E2E 失败（#9241、#9239、#9237），配合 runner 自愈（#9220）与安全加固（#9228），说明自动化基础设施的稳定性成为重点投入。
- **配置化与细粒度控制**：文件权限（#9250）、缓存共享开关（#9230）、会话生命周期（#8927）等"默认值争议"频繁出现，社区对可配置性的需求持续上升。
- **多通道集成扩展**：DingTalk 文件投递（#9167）、音频桥接（#8332）、channel sessionRotation（#8927）显示社区渠道集成正在向"生产力工具"方向演进。

## 开发者关注点

- **/review 实战缺陷集中爆发**：围绕 `/review` 的 issue 在一天内出现超过 10 个，涉及匹配粒度（#9219）、路径冲突（#9218）、并发竞争（#9205、#9207）、输入校验（#9209）等，反映出该功能被高频使用，但仍未达到生产级稳定。
- **CI 稳定性与自动修复效率**：main 分支 E2E 多次失败，均为 P1 且已进入 autofix/approved 流程，开发者对自动修复效率与 CI 可靠性高度关注，尤其是先前曾有 4 轮修复仍未根治的案例（#9159）。
- **本地化与终端体验问题**：中文输入法失效（#5966）和 OOM 后的终端乱码（#9198）直接影响国内开发者日常使用，此类问题虽 P2/P3 但社区情绪强烈，建议提高排期优先级。
- **性能调优诉求明确**：前缀缓存失效（#9230）与长时间运行 OOM（#9198）是当前性能方向最突出的两个反馈，一个影响 API 成本，一个影响长任务稳定性。
- **安全与权限透明度**：文件权限硬编码（#9250）与 PAT 泄露面（#9089）提示用户希望在使用便利与安全控制之间有显式、可配置的边界。

</details>

<details>
<summary><strong>CodeWhale</strong> — <a href="https://github.com/Hmbown/CodeWhale">Hmbown/CodeWhale</a></summary>

# CodeWhale 社区动态日报 — 2026-08-16

## 今日速览
- **v0.9.8 稳定化持续推进**：多个修复 PR（#5393-#5400）集中落地，解决 CI 红色、macOS 兼容性、宽终端布局回归等关键问题。
- **社区就中文术语达成共识**：经过三周讨论，`Constitution` 中文译名确定为"宪章"（#4949），Web 与 TUI 翻译已同步更新。
- **新功能与安全修复并行**：第三方模型配置模板、可配置长上下文预算、SSE UTF-8 乱码修复等项目均有实质进展。

---

## 版本发布
过去 24 小时内无新 Release。

---

## 社区热点 Issues

### 1. [CLOSED] Discussion: The Chinese Translation of "Constitution" — "宪法", "协作准则", or Something Else?  
**#4949** · 评论 17 · 作者 SparkofSpike  
[链接](https://github.com/Hmbown/CodeWhale/issues/4949)  
经历了三周讨论后，社区决定将 `Constitution` 的中文翻译定为“宪章”。此译法同时兼顾含义准确性与中文语境敏感性，已同步应用到 TUI 与 Web 端。

### 2. [OPEN] EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)  
**#5316** · 评论 7 · 作者 aboimpinto  
[链接](https://github.com/Hmbown/CodeWhale/issues/5316)  
TUI 模块拆分的总跟踪 Issue，所有子 EPIC/PR 均需在此登记。这是影响后续架构演进的关键重组工程。

### 3. [OPEN] [bug] The writing its weird (the agent)  
**#5374** · 评论 5 · 作者 all-lopezg  
[链接](https://github.com/Hmbown/CodeWhale/issues/5374)  
macOS 上 Agent 写作时文本乱码（大量 U+FFFD / CJK 乱码），疑似 SSE 流在 HTTP/2 下 Unicode 分片解码问题。相关修复 PR #5404 已提交。

### 4. [OPEN] [enhancement] 简化第三方模型配置，增加预制模板  
**#5350** · 评论 3 · 作者 shadapang  
[链接](https://github.com/Hmbown/CodeWhale/issues/5350)  
社区希望为 OpenCode Zen、Agnes、SenseNova 等第三方服务商提供预制配置模板，用户只需填入 API Key，并增加“测试连接”按钮。PR #5406 已实现该特性。

### 5. [OPEN] [enhancement] Feature Request: Configurable model-visible read/tool-result size limits for self-hosted long-context models  
**#5367** · 评论 3 · 作者 hxfhd  
[链接](https://github.com/Hmbown/CodeWhale/issues/5367)  
自托管 DeepSeek V4 等长上下文模型用户请求开放 `read` 等工具结果的体积上限配置，减少大文件场景下的额外读取开销。PR #5405 已提供解决方案。

### 6. [CLOSED] [bug] Regression: output area doesn't fill wide terminals (worked in v0.8.65)  
**#5322** · 评论 3 · 作者 M-Maciej  
[链接](https://github.com/Hmbown/CodeWhale/issues/5322)  
v0.9.x 在宽终端下输出区无法撑满屏幕，回归到 v0.8.65 行为迫在眉睫。PR #5400 已修复。

### 7. [OPEN] [needs-info] Pricing endpoint returns 503 - all sessions show unverified_live_pricing  
**#5241** · 评论 2 · 作者 alitvak69  
[链接](https://github.com/Hmbown/CodeWhale/issues/5241)  
升级到 v0.9.3 后，所有会话成本均显示 `unverified_live_pricing`，且官方接口返回 503。PR #5402 已着手修复定价回退逻辑。

### 8. [OPEN] [enhancement] Allow to configure additional roots in the bwrap sandbox  
**#5410** · 评论 1 · 作者 redstar  
[链接](https://github.com/Hmbown/CodeWhale/issues/5410)  
开发者希望 bwrap 沙箱允许自定义额外根路径，以支持 Zig 工具链重定向输出和系统库链接。当前沙箱限制导致 `access denied` 问题。

### 9. [OPEN] main is red on both platforms across all four completed runs  
**#5403** · 评论 1 · 作者 Lstarsky0  
[链接](https://github.com/Hmbown/CodeWhale/issues/5403)  
在 #5395 修复 CI 相互取消后，四个完成的 CI 运行在 macOS 和 Windows 上均失败，暴露出更深层的测试问题。

### 10. [CLOSED] agy_credentials tests fail on every macOS run  
**#5392** · 评论 1 · 作者 Lstarsky0  
[链接](https://github.com/Hmbown/CodeWhale/issues/5392)  
macOS 临时目录 `/var` 是符号链接，而安全打开函数拒绝符号链接路径，导致四个测试全挂。PR #5396 已解决。

---

## 重要 PR 进展

### 1. [OPEN] v0.9.8: finish the assigned cut  
**#5407** · 作者 Hmbown  
[链接](https://github.com/Hmbown/CodeWhale/pull/5407)  
将 v0.9.8 的最终裁剪合并到 main，包括会话几何修复（#5322/#5400）等关键收尾工作。

### 2. [OPEN] feat(tui): prefab provider templates and test-connection (#5350)  
**#5406** · 作者 Hmbown  
[链接](https://github.com/Hmbown/CodeWhale/pull/5406)  
实现第三方模型预制模板：为 OpenCode Zen、OpenCode Go、Agnes、SenseNova 提供内置配置，用户仅需填 Key，并支持“测试连接”。

### 3. [OPEN] fix(tui): restore session cost when live pricing is unverifiable (#5241)  
**#5402** · 作者 Hmbown  
[链接](https://github.com/Hmbown/CodeWhale/pull/5402)  
修复定价接口 503 时所有会话成本显示 `unverified_live_pricing` 的问题；当实时定价无法验证时回退到本地估算，避免价格永久缺失。

### 4. [OPEN] feat(tui): configurable model-visible read/tool-result budgets (#5367)  
**#5405** · 作者 Hmbown  
[链接](https://github.com/Hmbown/CodeWhale/pull/5405)  
为自托管长上下文模型（如 DeepSeek V4）提供可配置的 `read` 和工具结果体积上限，减少大文件场景下的额外读取次数。

### 5. [OPEN] fix(client): fail closed on SSE UTF-8 split across HTTP/2 DATA (#5374)  
**#5404** · 作者 Hmbown  
[链接](https://github.com/Hmbown/CodeWhale/pull/5404)  
修复 macOS 上 Agent 输出乱码问题：SSE 流在 HTTP/2 下 Unicode 字符被拆分时不再用 `from_utf8_lossy` 硬解码，改为 fail-closed 机制。

### 6. [CLOSED] fix(tui): fill transcript to full terminal width (#5322)  
**#5400** · 作者 Hmbown  
[链接](https://github.com/Hmbown/CodeWhale/pull/5400)  
恢复 v0.8.65 行为，让 transcript 和 composer 在宽终端/tmux 下撑满全宽，消除侧边空白。

### 7. [CLOSED] fix(tui): v0.9.8 stabilization — turn-owned agents, compaction quality, Blue Stage web  
**#5399** · 作者 Hmbown  
[链接](https://github.com/Hmbown/CodeWhale/pull/5399)  
重构 v0.9.8 Rust 稳定化到当前 main，包含 turn-owned 默认直接子代理、压缩质量改进、Web 蓝屏阶段修复等。

### 8. [CLOSED] fix(ci): stop cancel-in-progress from killing concurrent main pushes  
**#5395** · 作者 Hmbown  
[链接](https://github.com/Hmbown/CodeWhale/pull/5395)  
修复 main 分支 CI 由于共享 concurrency group 导致后续 push 取消前一运行的问题，确保失败的断言能真正暴露。

### 9. [CLOSED] fix: unred v0.9.8 provider-count assertions and google ModelRegistry drift  
**#5394** · 作者 Hmbown  
[链接](https://github.com/Hmbown/CodeWhale/pull/5394)  
修复 CLI provider-count 断言与实际 v0.9.8 注册表（45/40）不一致，并解决 Google ModelRegistry 漂移。

### 10. [CLOSED] fix(web): call the constitution a charter on the website  
**#5397** · 作者 Lstarsky0  
[链接](https://github.com/Hmbown/CodeWhale/pull/5397)  
根据 #4949 讨论结果，将官网中文翻译中的 `Constitution` 由“宪法”统一改为“宪章”，与 TUI 保持一致。

---

## 热门 Discussions

### Q&A
- **Behavioural shift? How much? And Why?**  
  **#5386** · 作者 JayBeest · 评论 2 · 👍 1  
  [链接](https://github.com/Hmbown/CodeWhale/discussions/5386)  
  用户讨论 CodeWhale 近 3-4 周行为模式巨大变化，猜测与 DeepSeek-v4-Flash 升级及自身更新相关，关注精确性和操作性能的变化。

### Ideas
- **不要Web 界面，可以直接开发app页面 exe**  
  **#2748** · 作者 Ciciella · 评论 0 · 👍 1  
  [链接](https://github.com/Hmbown/CodeWhale/discussions/2748)  
  建议抛弃 Web 界面，直接开发原生桌面应用（exe），满足部分用户对独立客户端的偏好。

---

## 功能需求趋势
- **第三方模型配置简化**：预制模板 + 单 Key 接入（#5350/#5406），降低非第一方模型使用门槛。
- **长上下文模型适配**：可配置工具结果大小上限（#5367/#5405），优化自托管模型大文件读取效率。
- **沙箱灵活性**：允许自定义 bwrap 根路径（#5410），支持更多开发工具链（如 Zig）。
- **定价与成本透明度**：修复定价接口不可用时成本显示异常（#5241/#5402）。
- **界面与布局回归**：宽终端下输出区自动填充满（#5322/#5400），恢复旧版体验。
- **国际化术语统一**：Web/TUI 同步中文翻译（#4949/#5397）。

## 开发者关注点
- **macOS 平台稳定性**：多个问题集中在 macOS（乱码、测试失败、PTY 卡死），开发者对 macOS 支持关注度持续走高。
- **CI 可靠性**：CI 相互取消、断言漂移、跨平台失败等问题频发，影响合并与发布效率。
- **沙箱限制阻碍开发**：bwrap 限制导致 Zig 等工具链无法正常工作，需要更灵活的配置能力。
- **定价服务依赖**：官方定价端点返回 503 导致所有会话成本显示“未验证”，用户期待更健壮的本地回退机制。
- **老用户回归体验**：v0.9 系列的宽终端布局、配置迁移等问题让部分用户产生“行为突变”的困惑（#5386），需要官方明确变更说明。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*