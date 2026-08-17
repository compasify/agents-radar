# AI CLI 工具社区动态日报 2026-08-17

> 生成时间: 2026-08-16 23:09 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告（2026-08-17）

## 1. 生态全景

当日 9 个主流 AI CLI 工具中 8 个有活跃动态，整体处于"功能快速迭代与稳定性追赶并行"阶段。各工具不约而同地在 TUI 终端体验、MCP 生态兼容、Agent 权限边界、成本透明度四个方向投入修复。头部工具（Claude Code、Gemini CLI）已进入精细化打磨期，社区反馈从"缺少功能"转向"修复稳定性和信任问题"；而 Qwen Code、OpenCode、Pi 仍在高速迭代新功能（多智能体团队、自动化评审、扩展 API）。值得警惕的是：跨会话内容泄漏、子代理越权执行、误报成功等安全与信任类问题在同一时间点出现在多个工具中，行业对 AI CLI 可靠性的整体预期正在提高。

## 2. 各工具活跃度对比

| 工具 | Issue 动态 | PR 动态 | Discussions | Release |
|------|-----------|---------|-------------|---------|
| Claude Code | 约 50 条更新，精选 10 | 3 个新建 | N/A | 无新版本（2.1.207 系列） |
| OpenAI Codex | 约 30 条更新，精选 10 | 15 个合并/活跃，精选 10 | 6 条精选（Q&A / Ideas / Show&Tell） | rust-v0.148.0-alpha.20 |
| Gemini CLI | 精选 10（含 P1/P2 标签） | 精选 10（含 P1 修复） | N/A | v0.56.0-nightly.20260816 |
| GitHub Copilot CLI | 16 条更新，精选 10 | 1 个（疑垃圾/错误提交） | N/A | 无新版本 |
| OpenCode | 精选 11 | 10 个（多为 automated-pr-cleanup） | N/A | 未提及 |
| Pi | 精选 10 | 8 个精选 | 1 条论坛帖 | 无新版本 |
| Qwen Code | 精选 10 | 精选 10 | N/A | v0.21.12-preview.5 + nightly |
| CodeWhale | 精选 10 | 精选 10 | N/A | v0.9.8 tag 存在但发布取消 |
| DeepSeek Harness | 无活动 | 无活动 | N/A | 无 |

> 注：N/A 表示当日摘要未提供该仓库 Discussions 数据，不代表渠道关闭。

## 3. 共同关注的功能方向

**A. TUI 稳定性与终端体验（波及全部活跃工具）**
- Claude Code：SGR 鼠标报告泄漏进提示输入、TUI 渲染器与会话中途宕机
- Codex：TUI 撤销/重做缺失（#2379）、渲染列裁剪优化、键盘映射跨组件共享
- Gemini CLI：初始化挂起（#28812）、shell 命令执行后卡在 "Waiting input"（#25166）
- OpenCode：Ctrl+C 复制冲突（49 👍）、退出后终端残留鼠标转义序列、工具调用后永久 busy
- Pi：7000 行缓冲区单次按键 1650ms（#8029）、Windows 输入行重绘
- Qwen Code：tmux/远程屏幕闪烁、中文输入法失效（6 月起未解决）
- CodeWhale：TUI 崩溃、abort 类终端中毒（直接阻断 v0.9.8 发布）

**B. Agent/子代理可靠性与权限边界**
- Claude Code：跨会话内容泄漏导致捏造指令并执行未授权操作（#77147）
- Gemini CLI：子代理达 MAX_TURNS 后被误报为 GOAL 成功（#22323）、通用代理无限挂起（#21409）、子代理在禁用时仍自动运行（#22093）
- Qwen Code：多智能体团队消息误判、任务不派发、prompt 与行为矛盾等 5+ 个协作缺陷
- CodeWhale：scouts/reviewers 只读 shell 分类器过严、"delegation never widens authority"
- OpenCode：apply_patch 移动操作的越权写路径修复

**C. 成本与使用量透明度**
- Claude Code：/usage 的 5h 块与周限额百分比同步上升、Opus 消耗异常
- Gemini CLI：ACP 端缓存/思考 token 被静默丢弃，重度缓存场景成本高估约 3 倍
- Pi：缓存 token 按 1/120 费率计费却被计入总额，压缩预算最多被夸大 120 倍
- OpenCode：Zen 付费余额不生效（URGENT）、Go 订阅额度与 Zen 余额不联动
- Copilot CLI：内存压力看门狗在上下文使用率仅 23% 时反复强制压缩直至 OOM（#4506）

**D. MCP 生态稳定与可管理性**
- Copilot CLI：OAuth 回归（RFC 8414 §3.3）、Windows socket 10013、并发 token 刷新互相取消
- Codex：MCP 服务器启停管理（45 👍）、线程污染与 stdio 进程泄漏
- Gemini CLI：MCP tool schema 规范化以兼容 Vertex AI strict mode

**E. 会话生命周期与状态持久化**
- Claude Code：会话文件夹/分组更新被重置（两个多月未解决）
- Codex：VS Code 聊天按工作区隔离（62 👍）、自动压缩判断不准确
- Copilot CLI：恢复会话后连接 ID 失效且 /fork 无法自救、agent 状态未保留、静默归档无恢复入口

**F. Windows 平台质量**
- Codex：应用冻结（85 👍）、系统级鼠标光标卡顿、沙箱断电后 ACL 失效
- Copilot CLI：MCP OAuth 间歇失败、插件更新 Access denied
- OpenCode / Pi / Claude Code 均存在 Windows 专属交互缺陷

## 4. 差异化定位分析

| 工具 | 定位与目标用户 | 技术路线侧重 | 当日迭代信号 |
|------|--------------|-------------|-------------|
| **Claude Code** | 成熟的通用型 CLI，Claude 重度用户与企业开发 | 深度绑定 Claude 模型能力，个性化（自定义主题）与安全机制（Fable 5）并行演进 | 迭代放缓（无新版本、仅 3 PR），社区积压情绪上升 |
| **OpenAI Codex** | 追求新特性的一体化 Coding Agent，覆盖本机/远程/移动 | 高频预发布迭代，TUI 细节 + 沙箱 + 远程控制三线并进 | 15 个 PR 密集合并，产品打磨节奏最快 |
| **Gemini CLI** | 关注可评估、可治理的企业团队 | EPIC 驱动（组件级评估、AST 精确读取），P1/P2 优先级体系最规范 | Nightly 稳定输出，修复多直接对应热点 Issue |
| **GitHub Copilot CLI** | GitHub 生态重度用户、企业协作场景 | 与 Slack/VS Code/Atlassian 深度集成，官方闭门开发、社区 PR 贡献近零 | Issue 活跃但 PR 社区贡献为零，MCP 回归反复出现 |
| **OpenCode** | 寻求开源/可自托管方案的开发者 | 开放插件体系 + 商业化订阅（Zen/Go），社区 PR 活跃但质量参差 | 计费链路 bug 密集，商业化阵痛期 |
| **Pi** | 热衷扩展与多模型切换的技术爱好者 | 高度可扩展（session hooks、自定义消息队列），新模型接入速度最快（Kiro、MiniMax、Grok 4.6） | 扩展生态活跃，第三方贡献占比高 |
| **Qwen Code** | Qwen 模型生态用户、需要自动化代码评审的团队 | 多智能体团队模式 + /review 自动化管线（断点续审、像素级证据） | 双版本发布，多智能体功能密集曝 bug |
| **CodeWhale** | 自托管长上下文模型用户、早期采用者 | 强调细粒度权限语义（只读 shell 分类器、delegation 不扩大授权）、HarnessProfile 配置化 | 发布流程不稳定（v0.9.8 取消），CI 全红 |
| **DeepSeek Harness** | 沉寂期，暂无有效输出 | — | 24 小时内无任何活动 |

## 5. 社区热度与成熟度

**第一梯队（高活跃 + 高影响）**：OpenAI Codex 社区最为立体——Issue/PR/Discussions 全面活跃，Windows 性能问题获 85 👍、106 条评论，且当日即合入多个对应修复。Claude Code 虽 Issue 量大（50 条更新），但 PR 贡献少、无新版本，社区情绪偏向"老问题无人修"，处于维护疲劳期。

**快速迭代梯队**：Qwen Code（preview + nightly 双版本，多智能体功能密集探索）、Pi（8 个 PR 合入，新模型/新功能接入频繁）、Gemini CLI（nightly 稳定，P1 修复当日提交当日响应）。

**商业化阵痛梯队**：OpenCode 社区贡献多但 URGENT 级计费 bug 损害商业信任；Copilot CLI 官方主导特征明显，MCP 认证问题在 1.0.78→1.0.80 间出现回归，社区参与感最弱。

**工程成熟度待补梯队**：CodeWhale 发布被两个 blocker 取消、main 分支 4 次 CI 全部失败；DeepSeek Harness 当日无活动。

## 6. 值得关注的趋势信号

1. **"卡死"成为第一稳定性杀手**：OpenCode 断网卡死、Copilot CLI 内存看门狗误触发、Gemini CLI TUI 挂起、Pi 大缓冲延迟、Claude Code TUI 宕机——不同工具的卡死路径各异，但共同指向底层异步框架健壮性这一最大瓶颈。选型时应优先评估异常恢复能力（超时熔断、Esc 中断、看门狗）。

2. **安全机制从"黑名单拦截"走向"语义化权限"**：CodeWhale 的 "delegation never widens authority"、Gemini CLI 对子代理越权执行的修复、Claude Code 安全规则 glob 静默失效修复、Qwen Code 将验证 Gate 迁入临时容器——行业共识正在形成：Agent 安全应通过可组合的细粒度权限策略治理，而非堆叠拦截规则。

3. **Token 计费透明度直接决定用户信任**：Pi 缓存 token 计费夸大 120 倍、Gemini CLI ACP 端高估 3 倍、Claude Code /usage 指标逻辑可疑、OpenCode 付费余额不生效——当 AI CLI 走向生产工具，用户开始像审视云账单一样审视 token 消耗。内置准确用量可视化与成本预测的产品将获得显著差异化优势。

4. **多智能体协作正经历"早期采用者的阵痛"**：Qwen Code 一天暴露 5+ 个团队模式缺陷、Gemini CLI 子代理误报成功、CodeWhale agent 自阻断——多智能体从 demo 到生产可用的鸿沟大于预期。生产环境短期内仍应选择"单代理 + 显式子代理调用"的保守模式。

5. **远程/无头开发成为下一个主战场**：Codex 的"移动端控制无头 Linux 主机"请求获 48 👍；Qwen Code 远程 Web Shell 稳定性被集中反馈；Copilot CLI 的 Slack 集成问题同属此类。AI CLI 正从"本机终端工具"向"远程开发控制层"演进。

6. **开源与官方的社区治理模式分化加剧**：Copilot CLI 社区 PR 仅 1 个垃圾提交，而 OpenCode/Pi 的第三方 PR 已占主导。官方主导型更新可预期但反馈响应慢（Claude Code 的 macOS 网络权限问题 5+ 次关闭未修复）；社区驱动型迭代快但质量参差（OpenCode 大量 automated-pr-cleanup）。技术决策者需权衡反馈效率与可控性。

7. **发布工程健康度成为用户可感知的体验维度**：CodeWhale 发布取消、Gemini CLI Homebrew 渠道弃用导致新用户可能装到僵尸版本、Qwen Code 自动化评审产生大量 backlog——工具自身的 CI/CD 可靠性正在影响用户信任，应纳入选型评估。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-08-17）

---

## 1. 热门 Skills 排行

### ① PR #1298 — skill-creator 评估脚本修复（0% recall 致命 bug）
- **功能**：修复 `run_eval.py` 对所有 skill 描述均报告 recall=0% 的严重缺陷，覆盖 Windows 流读取、触发检测、并行 worker 三个根因；恢复 `run_loop.py` 和 `improve_description.py` 优化循环的有效性。
- **社区热点**：直接关联 Issue #556（12 评论、7 👍），已有 10+ 次独立复现；后续 Issue #1419 又补充了"skill 已安装 + 并行 worker"条件下同样复现。这是 skill-creator 工具链当前最大的可靠性障碍，已有多位作者提交修复但尚未合入。
- **状态**：OPEN
- **链接**：https://github.com/anthropics/skills/pull/1298

### ② PR #83 — skill-quality-analyzer 与 skill-security-analyzer 元技能
- **功能**：新增两个元技能，前者从结构文档、示例、资源等五个维度对 SKILL.md 进行质量评分；后者对 skill 做安全分析。
- **社区热点**：回应了社区对 skill 质量参差不齐、缺乏安全审查的普遍担忧，与安全信任问题 #492 形成呼应——是"元技能治理"方向的代表。
- **状态**：OPEN
- **链接**：https://github.com/anthropics/skills/pull/83

### ③ PR #1367 — self-audit 技能（机械验证 + 四维推理质量门，v1.3.0）
- **功能**：交付前先做机械层文件存在性验证，再按损害严重度优先级执行四维推理审计；宣称通用适配任意项目与模型。
- **社区热点**：与 Issue #1385"推理质量门流水线"提案（预校准 → 对抗审查 → 交付验证）联动，显示社区对 AI 输出质量保障的需求正在从单点技能走向体系化管线。
- **状态**：OPEN
- **链接**：https://github.com/anthropics/skills/pull/1367

### ④ PR #723 — testing-patterns 测试技能
- **功能**：系统化覆盖 Testing Trophy 模型、单元测试（AAA 模式、纯函数、边界用例）、React 组件测试（Testing Library）、测试哲学（什么该测 / 什么不该测）。
- **社区热点**：测试生成与测试模式是高频需求方向，该 PR 将方法论沉淀为可直接执行的操作性技能，讨论热度稳定。
- **状态**：OPEN
- **链接**：https://github.com/anthropics/skills/pull/723

### ⑤ PR #568 — ServiceNow 平台技能
- **功能**：覆盖 ServiceNow 全平台：ITSM、ITOM、ITAM/SAM Pro、FSM、HRSD/CSM、SPM/PPM、漏洞响应、安全事件响应、IntegrationHub。
- **社区热点**：企业级平台技能的标杆性 PR，体量大、覆盖面广；更新至 2026-08-12，仍在持续迭代，是当前最活跃的待合并 PR 之一。
- **状态**：OPEN
- **链接**：https://github.com/anthropics/skills/pull/568

### ⑥ PR #525 — pyxel 复古游戏开发技能
- **功能**：基于 pyxel-mcp（MCP server）的复古/像素/8-bit 游戏开发工作流：write → run_and_capture → inspect → iterate。
- **社区热点**：作者 kitao 即 pyxel-mcp 原作者，属于"自带生态"的高质量贡献；是创意/游戏开发方向人气最高的 PR。
- **状态**：OPEN
- **链接**：https://github.com/anthropics/skills/pull/525

### ⑦ PR #514 — document-typography 文档排版质量技能
- **功能**：修复 AI 生成文档的常见排版问题：孤行（1-6 词溢出到下一行）、寡段（章节标题滞留页尾）、编号错位等。
- **社区热点**：直击 AI 生成文档的普适痛点——用户极少主动提出排版要求，需要技能兜底；轻量但实用价值高。
- **状态**：OPEN
- **链接**：https://github.com/anthropics/skills/pull/514

### ⑧ PR #486 — ODT 文档技能
- **功能**：OpenDocument 格式（.odt/.ods/.odf）的创建、填充、读取与转换，支持模板填充及 ODT→HTML 解析。
- **社区热点**：补齐 docx/pdf 之外的开放文档格式拼图，符合开源/ISO 标准办公格式的诉求，与 #538（pdf 大小写引用修复）、#541（docx 书签冲突修复）共同构成文档格式修复潮。
- **状态**：OPEN
- **链接**：https://github.com/anthropics/skills/pull/486

---

## 2. 社区需求趋势（来自 Issues）

| 趋势方向 | 代表性 Issue | 信号 |
|---|---|---|
| **安全与信任边界** | #492 社区技能在 anthropic/ 命名空间下分发，构成信任边界滥用 | 43 条评论，全仓库最高热度；社区第一关切 |
| **组织级共享与协作** | #228 组织内直接共享 skill（共享库/分享链接替代手动传文件） | 16 评论、8 👍；企业采用的关键卡点 |
| **Skill 工具链可靠性** | #556 run_eval.py 0% 触发率；#1419 已装 skill 场景下同样失效 | 12 评论、7 👍；skill-creator 评估闭环不可信 |
| **AI 输出质量治理** | #412 agent-governance 安全模式提案；#1385 推理质量门流水线；#202 skill-creator 应改为操作性指令而非文档 | 质量保障从技能清单走向体系化治理 |
| **上下文效率与记忆管理** | #1487 claude-api 技能单次注入 ~156k tokens 挤爆上下文；#1329 compact-memory 符号化紧凑记忆 | 长上下文场景下的效率诉求上升 |
| **文档安全与格式稳健** | #1175 SharePoint 权限/上下文安全设计；#12 docx 空白重排导致文档损坏 | 企业文档场景的安全和质量双重焦虑 |
| **互操作与平台支持** | #16 将 Skills 暴露为 MCP；#29 AWS Bedrock 使用支持 | 生态开放性与多云适配需求 |

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃、持续更新且尚未合并，落地概率较高：

| PR | Skill | 近期更新 | 入选理由 |
|---|---|---|---|
| [#568](https://github.com/anthropics/skills/pull/568) | ServiceNow 平台技能 | 2026-08-12 | 企业级刚需、体量完整、持续迭代最活跃 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit 质量审计 | 2026-07-02 | 与 #1385 提案联动，质量治理方向共识强 |
| [#1479](https://github.com/anthropics/skills/pull/1479) | plan-file-hygiene 计划文件生命周期管理 | 2026-07-27 | 针对已确认 issue #1417，问题定义清晰 |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns 测试模式 | 2026-04-21 | 测试方向刚需，内容系统完整 |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel 复古游戏开发 | 2026-07-15 | 作者自带 MCP 生态，社区关注度高 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography 排版质检 | 2026-03-13 | 轻量高价值，直击文档普适痛点 |

---

## 4. Skills 生态洞察

**一句话总结**：社区在 Skills 层面最集中的诉求是让技能"可信且可靠"——既要消除 anthropic 命名空间下的信任边界风险（#492），也要修复 skill-creator 评估工具失灵（#556/#1419），并以此为基础建立从质量审计（#83/#1367）、企业级共享（#228）到文档/平台场景落地（#568/#486）的完整治理与扩展链路。

---

# Claude Code 社区动态日报 — 2026-08-17

## 今日速览

过去 24 小时内无新版本发布（当前最新仍为 2.1.207 系列）。Issue 侧有三条主线值得关注：一是多个长期悬而未决的 bug（如 macOS 本地网络访问权限、跨会话内容泄漏）持续发酵；二是 8 月 11 日新提交的增强请求（自定义主题覆盖 diff 语法高亮）进入社区视野；三是 3 个新 PR 中，2 个来自同一开发者，针对安全规则 glob 匹配和 PR 审查工具包的 YAML 解析问题提出修复。

## 社区热点 Issues

以下是从过去 24 小时更新的 50 条 Issue 中精选的 10 个最值得关注的问题：

### 1. [BUG] Session folders/groups reset after app update
- **Issue**: [#65669](https://github.com/anthropics/claude-code/issues/65669)
- **状态**: OPEN · 创建于 2026-06-05 · 最后更新 2026-08-16 · 评论 6 · 👍 5
- **要点**: 应用更新后，会话文件夹/分组被重置。该问题自 6 月提出至今已两个多月仍未解决，是评论区互动最多的 Issue。Windows 桌面版用户受影响，属于跨版本数据持久化的痛点。

### 2. [BUG] Claude Code CLI/Bash tool cannot access LAN devices on macOS — missing Info.plist/NSLocalNetworkUsageDescription
- **Issue**: [#74378](https://github.com/anthropics/claude-code/issues/74378)
- **状态**: OPEN · 创建于 2026-07-05 · 最后更新 2026-08-16 · 评论 4
- **要点**: macOS 上 CLI/Bash 工具无法访问局域网设备。提交者 Fatih75 明确指出，该问题在 5+ 个已关闭/锁定的 Issue 中反复出现但从未被修复，情绪激烈。涉及 macOS 权限配置（Info.plist/NSLocalNetworkUsageDescription）缺失，且波及 VS Code 扩展场景。

### 3. [BUG] Cross-session content bleed (incl. remote) led assistant to confabulate user instructions and execute unauthorized actions
- **Issue**: [#77147](https://github.com/anthropics/claude-code/issues/77147)
- **状态**: OPEN · 创建于 2026-07-13 · 最后更新 2026-08-16 · 评论 2
- **要点**: 跨会话内容泄漏（包括远程会话）导致助手捏造用户指令并执行未经授权的操作。这是安全隐患极高的信任问题，发生在 Windows 桌面版上，被标记为 needs-repro。如果属实，影响面极大。

### 4. [BUG] Scroll-wheel SGR mouse report split across stdin reads leaks into prompt input
- **Issue**: [#76816](https://github.com/anthropics/claude-code/issues/76816)
- **状态**: OPEN · 创建于 2026-07-12 · 最后更新 2026-08-16 · 评论 2 · 👍 2
- **要点**: 滚动鼠标滚轮/触控板时，终端的 SGR 鼠标报告片段会作为字面文本泄漏进提示输入（如 `<65;92;34M5;92;34M;34M`）。带 has repro 标签，属于高复现性的 TUI 输入处理 bug，严重影响交互体验。

### 5. Malformed tool calls leaking into chat + disproportionate usage-limit consumption on Opus (regression, ~1 week)
- **Issue**: [#75740](https://github.com/anthropics/claude-code/issues/75740)
- **状态**: OPEN · 创建于 2026-07-08 · 最后更新 2026-08-16 · 评论 2
- **要点**: 格式错误的工具调用泄漏到聊天中，同时 Opus 模型的 usage-limit 消耗不成比例（回归问题，约持续一周）。涉及成本与模型行为双重问题，对重度用户影响显著，被标记为 duplicate。

### 6. [BUG] `deep-research` skill permanently disappears from autocomplete after a session hits usage limit mid-run
- **Issue**: [#77064](https://github.com/anthropics/claude-code/issues/77064)
- **状态**: OPEN · 创建于 2026-07-13 · 最后更新 2026-08-16 · 评论 2
- **要点**: `deep-research` 技能在一次会话达到使用限制后，从自动补全中永久消失，而所有其他内置技能不受影响。Windows 平台（含 VS Code 扩展）上的状态管理 bug，行为非常诡异。

### 7. [BUG] /usage: 5h block and weekly limit percentages rise in lockstep
- **Issue**: [#77036](https://github.com/anthropics/claude-code/issues/77036)
- **状态**: OPEN · 创建于 2026-07-13 · 最后更新 2026-08-16 · 评论 2
- **要点**: `/usage` 命令显示的 5 小时块与周限额百分比同步上升——这两个数值本应有着非常不同的时间尺度。用户 DMC82-web 指出这不符合预期，可能导致用户对使用量的误判。

### 8. [BUG] TUI renderer + stdin die mid-session while the engine keeps running
- **Issue**: [#76838](https://github.com/anthropics/claude-code/issues/76838)
- **状态**: CLOSED · 创建于 2026-07-12 · 最后更新 2026-08-16 · 评论 2
- **要点**: macOS 上 TUI 渲染器和 stdin 在会话中途宕掉，但引擎继续运行，CPU 空闲、无 SIGWINCH 重绘、transcript 仍在写入。在 Ghostty 和 tmux 上均能复现，是终端无关的 TUI 稳定性问题，发生在 2.1.207 上。

### 9. [BUG] Settings schema: `extraKnownMarketplaces` git source requires `.git` suffix, but runtime accepts suffix-less URLs
- **Issue**: [#77315](https://github.com/anthropics/claude-code/issues/77315)
- **状态**: OPEN · 创建于 2026-07-13 · 最后更新 2026-08-16 · 评论 1
- **要点**: 设置模式中 `extraKnownMarketplaces` 的 git 源要求带 `.git` 后缀，但实际运行时接受不带后缀的 URL，导致 Azure DevOps 等场景配置校验失败。带 has repro 和 reproduced 标签，是插件市场配置的兼容性坑。

### 10. [FEATURE] Custom themes should be able to override the diff syntax-highlighting palette
- **Issue**: [#85821](https://github.com/anthropics/claude-code/issues/85821)
- **状态**: OPEN · 创建于 2026-08-11 · 最后更新 2026-08-16 · 评论 1
- **要点**: 当前最新提交的功能请求。自定义主题可以覆盖 diff 背景色和所有 UI 颜色，但 diff 内部的语法高亮调色板在二进制中硬编码，完全忽略主题配置。对于高度定制 TUI 外观的开发者来说，这是视觉一致性的缺口。

## 重要 PR 进展

过去 24 小时内共有 3 个 PR 更新，均于 2026-08-16 创建。虽然数量不多，但质量值得关注：

### 1. fix(security-guidance): make ** glob patterns match zero-depth paths
- **PR**: [#87079](https://github.com/anthropics/claude-code/pull/87079)
- **作者**: anishsamant · 👍 0
- **要点**: 修复安全规则中 `**` glob 模式不匹配零深度路径的问题。`_glob_match` 委托给 fnmatch，而裸 `*` 已经跨越 `/`，导致 `**/*.ts` 需要字面的 `/`，从而静默排除顶级文件——对安全规则而言，静默失效是严重缺陷。该 PR 直接改善安全模式的可靠性。

### 2. fix(pr-review-toolkit): repair invalid YAML frontmatter in all agents
- **PR**: [#87077](https://github.com/anthropics/claude-code/pull/87077)
- **作者**: anishsamant · 👍 0
- **要点**: 修复 PR 审查工具包中所有 agent 的无效 YAML frontmatter。每个 agent 的 description 都是包含对话行的未引用标量，YAML 会将其解析为嵌套映射，导致 agent 加载后 frontmatter 为空（name/description/model 丢失）。这解释了此前该工具包中 agent 行为异常的原因。

### 3. Create python-package-conda.yml
- **PR**: [#87125](https://github.com/anthropics/claude-code/pull/87125)
- **作者**: Salamyamadi · 👍 0
- **要点**: 新增 Python 包 Conda CI 工作流配置。内容相对简单，可能是来自社区的环境配置模板，质量有待评估（无评论、无测试验证）。

## 功能需求趋势

从近期的 Issue（结合 #85821 及持续出现的文档类 Issue）中可以提炼出以下社区关注方向：

1. **TUI 可定制性增强**：自定义主题希望覆盖更多层级（如 diff 语法高亮），目前仍有硬编码部分。
2. **文档补齐与行为一致性**：coygeek 在 7 月 23 日批量提交了至少 6 个文档类 Issue（如 `context: fork` 默认后台运行、plan-mode 与自动模式交互、深研需显式调用等），社区对"文档与实际行为不一致"的关注度显著上升。
3. **跨环境一致性与权限问题**：macOS 网络权限、Keychain 写入等问题反复出现，用户期望官方彻底解决而不是一次次关闭重复 Issue。
4. **模型安全筛选的精细化**：Fable 5 误将合法的代码审计/安全编码工作标记为网络安全活动（#75583/#75581/#75821 等多条重复 Issue），希望规则更精准，减少对日常开发的中断。另外确认的还有：Fable 5（#76068）过度宽松地拦截了简单的正常编码任务。
5. **成本与使用量透明度**：/usage 指标逻辑可疑（#77036）、Opus 使用量消耗异常（#75740），用户对成本可预测性的焦虑在上升。

## 开发者关注点

综合来看，开发者在反馈中最突出的几个高频痛点：

1. **"老问题无人修"情绪积累**：macOS 局域网访问权限问题（#74378）被明确吐槽"5+ 个相关 Issue 被关闭/锁定但从未修复"，这种处理方式正在消耗社区信任。
2. **安全机制误伤正常开发**：Fable 5 的安全筛选器将代码审计误判为网络安全活动（多条重复 Issue），且官方给出的解释是"安全措施是有意保持宽泛的"，开发者希望的是更智能的上下文判断。
3. **会话数据完整性与信任**：跨会话内容泄漏导致执行未授权操作（#77147）、会话分组更新被重置（#65669）、技能在使用限制后消失（#77064）——这些问题都触及用户对工具可靠性的根本信任。
4. **TUI 稳定性细节**：SGR 鼠标泄漏到输入框（#76816）、TUI 渲染器中途宕掉（#76838）等终端层面的问题虽然小众，但严重影响使用体验，且复现路径清晰。
5. **成本焦虑**：格式错误的工具调用 + 不成比例的使用量消耗（#75740）属于双重打击——既污染对话上下文，又以异常速度消耗配额，让用户对 Opus 的实际使用成本缺乏安全感。

---

*本日报由 AI 根据 GitHub 公开数据自动整理，数据截至 2026-08-17 00:00 UTC。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-17

## 今日速览

Codex 社区今日新增 rust-v0.148.0-alpha.20 预发布版本，持续迭代 CLI 与桌面端。最受关注的话题集中在 Windows 平台性能问题（#20214、#38546）、远程无头开发支持（#23200）以及 VS Code 扩展的工作区会话隔离（#25319）。PR 侧则密集合并了一批 TUI 体验改进与内部架构调整，显示团队在近端加速打磨终端交互与配置系统。

## 版本发布

- **rust-v0.148.0-alpha.20** — 今日发布 0.148.0-alpha.20 预发布版本，暂无详细更新说明。适合关注 CLI 新特性的开发者抢先体验。
  https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.20

## 社区热点 Issues

以下按关注度与影响力筛选 10 个最值得关注的 Issue：

1. **#20214 — Codex App 在 Windows 11 Pro 上频繁冻结/卡顿**  
   106 条评论、85 👍，是目前社区最热门的性能问题。作者报告即使系统资源充足（Ryzen 5 5600 / 32GB RAM），应用仍出现严重卡顿。Windows 平台稳定性持续成为用户痛点。
   https://github.com/openai/codex/issues/20214

2. **#38546 — Windows 桌面应用导致系统级鼠标光标卡顿（未提权时）**  
   31 条评论，两天内即成为热点。问题影响的是整个系统鼠标体验，而非仅 Codex 应用内，严重度较高。
   https://github.com/openai/codex/issues/38546

3. **#25319 — 将 Codex VS Code 聊天限定到当前工作区/项目**  
   28 条评论、62 👍。社区强烈希望聊天历史按工作区隔离，避免跨项目污染上下文。这是一个明确的产品功能需求，已有维护者关注。
   https://github.com/openai/codex/issues/25319

4. **#23200 — 支持无头远程 Linux 主机（无需桌面应用保持在线）**  
   18 条评论、48 👍。开发者希望 Codex 移动端能直接控制 SSH 上的 Linux 服务器，而不依赖个人桌面机在线。直击远程开发工作流的核心诉求。
   https://github.com/openai/codex/issues/23200

5. **#11765 — MCP 服务器管理 UX**  
   45 👍，来自 2 月的长期功能请求依然活跃。用户希望能够在应用/CLI 中直接启用/禁用 MCP 服务器，而不是仅依赖团队仓库中的 `config.toml`。
   https://github.com/openai/codex/issues/11765

6. **#2379 — TUI 输入撤销/重做（Cmd-Z / Shift-Cmd-Z）**  
   32 👍，提出一年后仍在讨论中。简单的编辑器基础能力，却长期未得到满足，体现 TUI 交互完整性的缺失。
   https://github.com/openai/codex/issues/2379

7. **#37487 — Codex CLI 0.147.0 向 Azure Responses API 发送空工具描述**  
   12 条评论。影响 Azure 用户的工具调用场景，CLI 与 Azure 服务的兼容性问题。
   https://github.com/openai/codex/issues/37487

8. **#28248 — Windows 沙箱在断电后所有读操作失败**  
   11 条评论。断电后 ACL 拒绝读取，导致沙箱无法使用。沙箱状态持久化可靠性问题，对离线恢复场景影响较大。
   https://github.com/openai/codex/issues/28248

9. **#34652 — Windows 远程 SSH 会话中文件编辑审批按钮无响应**  
   10 条评论。CLI 下审批正常，但桌面 App 在 Remote SSH 场景下按钮失灵，说明 App 与远程主机的交互链路存在 bug。
   https://github.com/openai/codex/issues/34652

10. **#19166 — macOS 26.4.1 重复崩溃（dyld SIGABRT + 大线程内存分配失败）**  
    7 条评论。涉及 AppleSystemPolicy 限制与大对话序列化时的内存崩溃，macOS 用户在高负载场景下的稳定性隐患。
    https://github.com/openai/codex/issues/19166

## 重要 PR 进展

过去 24 小时内合并/活跃的 15 个 PR 中，以下 10 个最值得关注：

1. **#38913 — 填充区域后停止渲染列**  
   性能优化：减少不必要的渲染遍历，提升 TUI 渲染效率。
   https://github.com/openai/codex/pull/38913

2. **#38907 — 使用 Vim 历史上一条命令编辑排队消息**  
   TUI 体验改进：在 Vim 模式下支持从队列恢复最近消息进行编辑，并避免重复入队。
   https://github.com/openai/codex/pull/38907

3. **#38902 — 遵守各环境 shell 变量策略**  
   核心逻辑：让每个环境的 `ShellEnvironmentPolicy` 实际生效，修正了策略未应用到 shell 命令和统一执行的问题。
   https://github.com/openai/codex/pull/38902

4. **#38899 — 将需求策略所有权迁移至 execpolicy**  
   架构重构：统一策略管理，将 `RequirementsExecPolicy` 下沉到 `codex-execpolicy`，保持配置 API 的兼容性。
   https://github.com/openai/codex/pull/38899

5. **#38894 — TUI 新增 `/cd` 工作目录命令**  
   功能增强：支持在会话中切换工作目录并保留历史，相对路径与省略参数（回 `~`）均可用。
   https://github.com/openai/codex/pull/38894

6. **#38893 — 独立恢复线程时间戳最大值**  
   Bug 修复：解决 `updated_at_ms` 与 `recency_at_ms` 最大值分属不同线程时无法正确恢复的边角问题。
   https://github.com/openai/codex/pull/38893

7. **#38840 — 远程控制握手中识别 Mac mini 主机**  
   设备识别：在 WebSocket 握手中发送 `x-codex-host-device-kind: mac_mini`，并做缓存优化。
   https://github.com/openai/codex/pull/38840

8. **#38837 — 跨 TUI 编辑器组件共享键盘映射**  
   交互一致性：通过 Arc 共享 keymap，使文本域与聊天编辑器保持相同的自定义快捷键。
   https://github.com/openai/codex/pull/38837

9. **#38830 — 隔离外部编辑器缓冲区与沙箱可写路径**  
   安全加固：外部编辑器临时文件不再存放在沙箱可写目录下，防止策略逃逸。
   https://github.com/openai/codex/pull/38830

10. **#38827 — `codex doctor` 新增端点保护检查**  
    诊断增强：检测 macOS/Windows 端点保护产品，并提示 Codex 需要验证的排除项，有助于排查干扰问题。
    https://github.com/openai/codex/pull/38827

## 热门 Discussions

### Q&A
- **#9277 — 使用 Codex 时反复出现创建 Codex 账号提示**  
  用户反馈在 PR 代码审查中持续看到"connect to github.v"提示，8 条评论，怀疑是连接问题或已知 bug。
  https://github.com/openai/codex/discussions/9277

### Ideas
- **#38834 — 为 Codex/ChatGPT 桌面端增加 Reader Mode（阅读并朗读）**  
  建议为长输出提供音频阅读模式，类似 ChatGPT 网页端的体验。
  https://github.com/openai/codex/discussions/38834

### Show and tell
- **#38869 — AI Commit Standard：让 AI 辅助提交携带可验证证据**  
  作者分享了为 AI 辅助项目设计的提交规范，确保每条提交来源可追溯、验证方式可复现。
  https://github.com/openai/codex/discussions/38869

- **#38868 — Codexless：让 ChatGPT 先复用本地 Codex 能力，必要时再调用 Agent**  
  独立开源方案：在 ChatGPT 对话中直接调用轻量本地代码能力，避免每次任务都启动完整 Codex Agent。
  https://github.com/openai/codex/discussions/38868

- **#38815 — 用 Codex 构建的九大 LLM API 成本对比工具（质量校准）**  
  TokenGauge Workbench：不只比最低单价，而是结合质量维度做成本评估，作者使用了 Codex 作为实施与操作 Agent。
  https://github.com/openai/codex/discussions/38815

### General
- **#38903 — agent-runner-mcp：沙箱化任务执行 + EXIT 协议 + 验尸报告**  
  零依赖 MCP 服务器：在证据保护沙箱中执行命令并返回结构化执行证明，兼容 Codex 等 MCP 客户端。
  https://github.com/openai/codex/discussions/38903

## 功能需求趋势

从近期 Issues 与 Discussions 中可提炼出以下社区最关注的功能方向：

1. **远程/无头开发工作流**  
   #23200（无头 Linux 主机）、#24295（远程线程按项目分组）、#34652（远程 SSI 审批按钮）等表明，开发者渴望 Codex 成为真正面向远程开发的控制层，而非仅限本机桌面。移动端 + 远端 Linux 的组合被反复提及。

2. **工作区/项目级上下文隔离**  
   #25319（VS Code 聊天按工作区隔离）、#18253（项目时间线路径身份不一致）说明多项目并行开发者对上下文串扰问题非常敏感，希望 Codex 能像 IDE 一样天然区隔项目边界。

3. **TUI/编辑器交互完善**  
   #2379（撤销/重做）、#26819（快捷键切换模型/推理档位）以及 PR #38907、#38894、#38837 均围绕终端 UI 的编辑体验展开。Vim 键位支持、工作目录切换正成为 TUI 用户的基本预期。

4. **MCP 可管理性与稳定性**  
   #11765（MCP 服务器启停管理）持续高票；#23051、#38754 暴露了 MCP 线程污染与 stdio 进程泄漏问题。社区期待 MCP 生态走向更成熟的可配置、可观测状态。

5. **Windows 平台质量**  
   今天更新最频繁的 30 条 Issue 中约 1/3 标注 Windows 相关 bug（冻结、鼠标卡顿、沙箱 ACL、崩溃等），Windows 已成为社区反馈最大的质量洼地。

## 开发者关注点

- **Windows 性能与稳定性是最大痛点**：#20214（85 👍）和 #38546 分别在长时间与刚发布场景下引发大量共鸣，系统级鼠标卡顿问题尤其影响日常使用。开发者希望 Codex 团队将 Windows 端作为下阶段质量重点。
- **沙箱可靠性**：断电后沙箱无法读文件（#28248）、提权时 CreateProcessW 参数超限（#32315）等问题说明沙箱在异常场景下的容错与恢复能力尚不完善。
- **会话与上下文断续**：自动压缩判断不准确（#29426）、压缩 404（#38856）、恢复线程游标错位（#38792）、历史线程损坏（#19267）等多类问题并存，大线程与长时间会话场景需要更稳定的状态模型。
- **远程连接断连后的控制丢失**：#23699 指出 SSH 重启会禁用移动端远程控制能力，这类环境关联 bug 对于依赖远程开发的用户造成实际阻碍。
- **对 TUI 细节的追求**：除了基本编辑操作，用户对 `/cd`、命令面板、快捷键定制等已提出明确期望，显示 Codex 终端用户群体正从早期采纳者转向日常重度使用阶段。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**2026-08-17** | 数据来源: `google-gemini/gemini-cli`

---

## 今日速览

今日发布 1 个 Nightly 版本（v0.56.0-nightly.20260816）。社区讨论集中在 **子代理稳定性** 与 **自动化记忆系统** 两大主题上：#22323 揭示子代理在达到 MAX_TURNS 后被误报为成功，#21409 的通用代理挂起问题依然是开发者最集中的痛点之一。PR 侧则有多个 P1 修复在推进，包括 TUI 无限期挂起与子代理恢复逻辑修复，另外 Homebrew 安装渠道的弃用提示与 `--list-models` 新功能也值得关注。

---

## 版本发布

### v0.56.0-nightly.20260816.g2a87e7be1
- 常规 Nightly 构建，`20260815` → `20260816` 的增量变更内容尚未附带说明
- **Full Changelog**: https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260815.g2a87e7be1...v0.56.0-nightly.20260816.g2a87e7be1

---

## 社区热点 Issues

挑选过去 24 小时内更新的 10 个最值得关注的问题。

### 1. 子代理恢复后被误报为 GOAL 成功（#22323）
- **优先级/标签**: P1 / agent / bug
- **链接**: https://github.com/google-gemini/gemini-cli/issues/22323
- **重要性**: 子代理 `codebase_investigator` 已达到 MAX_TURNS，但外层框架仍将其终止原因记录为 `GOAL` 成功，导致用户收到错误的成功信号。属于 agent 核心正确性问题。
- **社区反应**: 12 条评论，2 👍，维护者已标记 `need-retesting`。

### 2. 通用代理（Generalist agent）无限期挂起（#21409）
- **优先级/标签**: P1 / agent / bug
- **链接**: https://github.com/google-gemini/gemini-cli/issues/21409
- **重要性**: 只要 Gemini CLI 委托给通用代理处理的变更（如创建文件夹）都会永久挂起，等待最长 1 小时无响应。属于高影响稳定性问题。
- **社区反应**: 8 条评论，8 👍（当前 Issue 列表最高赞），同时 8 个 👍 也说明受到较多开发者影响。

### 3. 利用模型 bash 亲和力的零依赖沙箱设计（#19873）
- **优先级/标签**: P2 / agent / enhancement, effort/large
- **链接**: https://github.com/google-gemini/gemini-cli/issues/19873
- **重要性**: 提议让 Gemini 3 以原生 POSIX 工具链方式安全操作 OS，通过 zero-dependency sandbox 做隔离。是一个长期演进的设计方向，且与当前“shell 执行受限后产生临时脚本”的问题形成呼应。
- **社区反应**: 8 条评论，1 👍。

### 4. 组件级评估体系（#24353）
- **优先级/标签**: P1 / agent / EPIC
- **链接**: https://github.com/google-gemini/gemini-cli/issues/24353
- **重要性**: 现有 76 个行为评估测试覆盖 6 个 Gemini 模型，这个 EPIC 试图向“组件级”扩展，是官方质量保证体系的基础设施建设。
- **社区反应**: 7 条评论，0 👍（维护者主导的内部 EPIC）。

### 5. AST 感知的文件读取与代码库映射评估（#22745）
- **优先级/标签**: P2 / agent / EPIC
- **链接**: https://github.com/google-gemini/gemini-cli/issues/22745
- **重要性**: EPIC 跟踪基于 AST 的方法精确读取、语义搜索与代码库映射，若能落地可减少 token 噪声和无效轮次。
- **社区反应**: 7 条评论，1 👍。

### 6. Gemini 不主动使用 skills 与 sub-agents（#21968）
- **优先级/标签**: P2 / agent / bug
- **链接**: https://github.com/google-gemini/gemini-cli/issues/21968
- **重要性**: 用户反馈即使配置了 `gradle`、`git` 等内置技能，Gemini 也极少主动使用，需要显式指令才触发。直接削弱了自定义 skill 与 agent 体系的价值。
- **社区反应**: 6 条评论，0 👍，虽然赞不多但描述具体，属于普遍体验问题。

### 7. 自动记忆（Auto Memory）对低信号会话无限重试（#26522）
- **优先级/标签**: P2 / agent / bug
- **链接**: https://github.com/google-gemini/gemini-cli/issues/26522
- **重要性**: Auto Memory 将未读取的 session 视为“未处理”，因此在低信号会话上不断重试，造成无效的 token 消耗与后台噪音。
- **社区反应**: 5 条评论，0 👍。

### 8. Auto Memory 的确定性脱敏与过度日志问题（#26525）
- **优先级/标签**: P2 / security / bug
- **链接**: https://github.com/google-gemini/gemini-cli/issues/26525
- **重要性**: 记忆抽取 agent 在将本地 transcript 发送到模型之前，没有确定性的脱敏逻辑——提示词要求“红act”的时机落后于内容进入模型上下文。涉及隐私保护的重要安全短板。
- **社区反应**: 4 条评论，0 👍。

### 9. Shell 命令执行完毕后卡在 “Waiting input”（#25166）
- **优先级/标签**: P1 / core / bug, effort/medium
- **链接**: https://github.com/google-gemini/gemini-cli/issues/25166
- **重要性**: 简单的 CLI 命令完成后，TUI 仍显示命令激活并停留等待输入，必须手动干预。P1 优先级配合 4 条评论、3 👍。
- **社区反应**: 4 条评论，3 👍。

### 10. 子代理在未授权的情况下运行（#22093）
- **优先级/标签**: P2 / agent / bug
- **链接**: https://github.com/google-gemini/gemini-cli/issues/22093
- **重要性**: 自 v0.33.0 起，即使 `agents` 模式被显式禁用，子代理仍会被自动调用。权限边界被突破，触达用户对安全性的担忧。
- **社区反应**: 3 条评论，0 👍，但属于安全语义变更，值得优先关注。

---

## 重要 PR 进展

挑选 10 个在功能或修复层面有代表性的 PR。

### 1. [SSR Agent] 保留子代理恢复时的原始终止原因（#28815）
- **状态/优先级**: OPEN / P1 / agent
- **链接**: https://github.com/google-gemini/gemini-cli/pull/28815
- **内容**: 修复 #22323——子代理在达到 MAX_TURNS/TIMEOUT 后在最后一次“宽限恢复轮”调用了 `complete_task`，导致终止原因从“超时”误改为“成功”。本 PR 保留了原始终止原因。
- **意义**: 直接回应今日热点 Issue，并修复 agent 行为透明性。

### 2. [SSR Agent] 防止 TUI 无限期挂起：为执行加入超时（#28812）
- **状态/优先级**: OPEN / P1 / core
- **链接**: https://github.com/google-gemini/gemini-cli/pull/28812
- **内容**: 在裸机 Linux 终端启动时，`getProcessInfo()` 的 `execAsync` 调用 `ps` 可能阻塞，导致界面卡在 “Initializing...”。本 PR 增加了执行超时，修复 #21477。
- **意义**: TUI 启动挂起属于阻断性问题，加入超时是最直接的兜底方案。

### 3. 新增 `--list-models` 标志（#28843）
- **状态/优先级**: CLOSED / size/s
- **链接**: https://github.com/google-gemini/gemini-cli/pull/28843
- **内容**: 允许以 JSON 形式输出可用模型列表并退出，便于外部集成与编排工具做模型发现。走 `--help` / `--version` 相同的 early-exit 路径。
- **意义**: 完善 CLI 的可脚本化能力，集成商和 MCP 服务将受益。

### 4. 修复 ACP PromptResponse 缓存/思考 Token 丢失（#28840）
- **状态/优先级**: OPEN / non-interactive
- **链接**: https://github.com/google-gemini/gemini-cli/pull/28840
- **内容**: ACP `PromptResponse` 的 `_meta.quota` 只填入 `input_tokens` / `output_tokens`，导致 `usageMetadata` 中的缓存 token 与思考 token 被静默丢弃，让使用方在重度 prompt caching 场景下高估成本约 3 倍。
- **意义**: 对 ACP 客户端的成本监控与配额管理影响直接。

### 5. A2A Server settings 深度合并覆盖（#28842）
- **状态/优先级**: CLOSED / size/s
- **链接**: https://github.com/google-gemini/gemini-cli/pull/28842
- **内容**: 修复 workspace 与 user settings 浅合并导致配置丢失（如 `fileFiltering.respectGitIgnore` 覆盖 `enableRecursiveFileSearch`）的问题，改为一级深度合并。
- **意义**: 影响使用 A2A 模式的多级配置用户，防止数据被静默覆盖。

### 6. 规范化 MCP 工具 schema（#28839）
- **状态/优先级**: OPEN / P2 / agent, size/m
- **链接**: https://github.com/google-gemini/gemini-cli/pull/28839
- **内容**: 部分 MCP 服务器暴露的 tool schema 缺少根级 `type: object`，在 Vertex AI strict mode 下会被拒绝。修复是在转发前规范化 schema。
- **意义**: 提升与第三方 MCP 生态的兼容性，减少接入摩擦。

### 7. 修复 Home 目录下的 Duplicate Agent 警告（#28835）
- **状态/优先级**: OPEN / P2 / core, size/m
- **链接**: https://github.com/google-gemini/gemini-cli/pull/28835
- **内容**: 当 workspace 为 `~` 时，project agents 目录和 user agents 目录解析为同一路径，注册器因此产生误导性的“Duplicate agent name”警告。修复为跳过 workspace 即 home 的情况。
- **意义**: 直接消除在 home 目录使用 CLI 时的噪音提示。

### 8. `/model` 选择器中遗漏 `Auto` 选项（#28836）
- **状态/优先级**: OPEN / P2 / core, size/s
- **链接**: https://github.com/google-gemini/gemini-cli/pull/28836
- **内容**: `auto` 别名被标记为 `isPreview: true`，当用户无预览权限时，`/model` 列表不会出现 “Auto”，即使 dynamic model configuration 已启用。修复为特殊放行 `auto`。
- **意义**: 恢复非 preview 用户对自动模型的访问。

### 9. Homebrew 弃用提示与文档更新（#28844）
- **状态/优先级**: CLOSED / size/s
- **链接**: https://github.com/google-gemini/gemini-cli/pull/28844
- **内容**: `gemini-cli` 已在 homebrew-core 中弃用，新用户可能装到不再更新的版本。PR 在安装文档与 README 中加入指引 npm 替代的提示，并更新更新提示消息。
- **意义**: 渠道变更直接影响现有 brew 用户，提前预警避免新用户安装到“僵尸版本”。

### 10. 修复 perf-tests 的 ripgrep 导入（#28838）
- **状态/优先级**: OPEN / P1 / core, size/xs
- **链接**: https://github.com/google-gemini/gemini-cli/pull/28838
- **内容**: `perf-tests/globalSetup.ts` 仍在引用已移除的 `canUseRipgrep`，导致 nightly 性能测试在 global setup 阶段中止。修复为新的 `resolveRipgrepPath` 并调整类型判断。
- **意义**: 修复 CI/性能回归链路的基础设施问题（P1），保障 nightly 测试稳定性。

> 另有关闭的 PR #28813（tsconfig composite）与 #28814（strict-null 修复）属于工程基建，此处不展开。

---

## 功能需求趋势

> 本期无 Discussions 数据，从 Issues 与 PR 中提炼功能方向。

### 1. Agent 可靠性与自主性
- 案例：#22323（误报成功）、#21409（通用代理挂起）、#21968（不主动使用 skills/sub-agents）
- 趋势：社区对子代理的正确性、资源上限处理和自主决策质量提出了更高要求，期望 CLI 在“何时成功、何时失败、何时需要用户介入”上更透明。

### 2. 自动化记忆系统的治理
- 案例：#26522（低信号会话重试）、#26525（确定性脱敏）、#26523（无效补丁隔离）、#26516（记忆质量总跟踪）
- 趋势：Auto Memory 已从“能用”进入“合规与效率”阶段：需要避免无效 token 消耗，并对本地数据进入模型上下文提供更严格的隐私保障。

### 3. AST 驱动的代码智能
- 案例：#22745（AST-aware 文件读取 EPIC）、#22746（AST CLI 代码库映射）
- 趋势：通过 AST 精确提取方法边界与符号信息，降低多轮读取带来的噪声与 token 开销，是下一步提升代码理解质量的重要方向。

### 4. 安全沙箱与权限边界
- 案例：#19873（零依赖 os sandbox）、#22093（子代理越权执行）、#22672（破坏性操作护栏）
- 趋势：社区同时呼吁“更自由的 bash 调用”与“更严格的权限控制”。未来版本需要在模型原生能力和用户安全之间找到更好的默认配置。

### 5. 终端的现代化体验
- 案例：#25166（shell 命令卡死）、#21924（resize 闪烁）、#24935（外部编辑器退出后终端损坏）、#28812（TUI 初始化挂起）
- 趋势：terminal 渲染层的稳定性问题仍是高频反馈。除了功能叠加，基础体验的扎实程度将成为留存用户的关键。

### 6. 工具链与生态集成
- 案例：#28843（--list-models）、#28844（Homebrew 弃用）、#28839（MCP schema 规范化）、#28840（ACP token 计费）
- 趋势：CLI 正在向可编程、可嵌入的方向演进。自动化和成本可见性成为新增量场景（MCP、ACP 协议支持方都在快速接入）。

---

## 开发者关注点

### 1. 代理行为的不确定性（高频痛点）
   - 通用代理和子代理仍存在挂起、误报成功、越权执行等问题。多个 Issue 追溯到执行上下文丢失、恢复轮次逻辑不当等根因；用户不得不通过 prompt 提示“不要使用子代理”来规避。

### 2. Token 成本与资源浪费敏感
   - 自动记忆重试低信号会话、ACP 端 token 计费偏差、AST 缺失导致的多次读取，均指向 token 成本透明度不足。开发者不仅关心“能否完成”，也开始要求“花了多少量”。

### 3. 配置系统复杂且易错
   - `settings.json` 嵌套覆盖、用户级与项目级同名 agent 冲突、browser agent 忽略全局设置——配置往往在静默中出错，且诊断成本高。

### 4. 隐私保护滞后于功能上线
   - Auto Memory 在上传 transcript 之前没有确定性脱敏，让开发者意识到“功能虽方便，但机制上存在隐私突破点”。相关后置修复（如缓冲/脱敏）预计会成为本周后续讨论热点。

### 5. 安装渠道与更新路径
   - Homebrew core 弃用消息释放后，大量 brew 用户的更新渠道失效。建议关注官方迁移到 npm 的指引，以及本地安装的升级策略。

---

> 日报生成于 2026-08-17 · 数据截至 2026-08-16 23:59 UTC · 完整 Issue/PR 列表见 GitHub 仓库。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-08-17

## 今日速览

过去 24 小时 Copilot CLI 社区的核心议题集中在 **MCP 认证与并发稳定性**（多条 Issue 涉及 OAuth/Streamable HTTP 的回归与竞态问题）以及 **会话/插件管理体验**（无归档恢复入口、插件依赖机制缺失）。另有一条值得注意的新增 Issue 揭示了 **内存压力误触发上下文压缩** 的潜在严重问题。社区活跃度较高，16 条 Issue 在过去 24 小时内有更新，但 PR 进展方面社区贡献较为冷清。

## 版本发布

过去 24 小时内无新版本发布。

## 社区热点 Issues

以下为过去 24 小时内更新的 16 条 Issue 中，最值得关注的 10 条：

**1. 内存压力看门狗在上下文使用率仅 23% 时强制压缩对话，循环直至 OOM**
`#4506` | 作者: jay-tau | 创建/更新: 2026-08-16 | 评论: 0
🔗 [github/copilot-cli Issue #4506](https://github.com/github/copilot-cli/issues/4506)

**摘要**：长会话在上下文窗口使用率仅 23%（40 万 token）时，进程内存压力看门狗反复触发强制压缩，压缩仅回收 0.003% token 却持续循环直至 OOM。触发条件与上下文压力无关，可能导致严重性能问题与数据丢失。

**为什么重要**：这是一个潜在的严重稳定性缺陷，影响所有长会话用户。社区虽暂无回复，但问题描述详实，指向明确的 watchdog 逻辑缺陷，值得官方优先排查。

---

**2. SDK server 未认证即报告就绪，导致 Slack 会话创建失败**
`#4503` | 作者: meagancojocar | 创建/更新: 2026-08-16 | 评论: 5 | 👍: 0
🔗 [github/copilot-cli Issue #4503](https://github.com/github/copilot-cli/issues/4503)

**摘要**（已关闭）：用户通过 Slack DM 调用 Copilot CLI，SDK server 启动后报告就绪，但环境中没有 `COPILOT_SDK_AUTH_TOKEN`，导致会话创建时返回 "I couldn't create a session for this chat"。

**为什么重要**：认证初始化顺序缺陷会影响 SDK/集成场景的可靠性。5 条评论表明社区有较多关注，官方已关闭该 Issue，但尚不清楚修复方式。

---

**3. Atlassian MCP OAuth 在 1.0.80 版本回归（RFC 8414 §3.3 兼容性破坏）**
`#4490` | 作者: ChandrasekarCK | 创建: 2026-08-14 | 更新: 2026-08-16 | 评论: 1
🔗 [github/copilot-cli Issue #4490](https://github.com/github/copilot-cli/issues/4490)

**摘要**：1.0.80 版本开始，连接 Atlassian 等 MCP 服务器时抛出 `MCPOAuthError`：授权服务器的 issuer 与 metadata 发现 URL 不匹配（RFC 8414 §3.3）。1.0.78 版本正常，属于回归。

**为什么重要**：MCP OAuth 回归影响使用 Atlassian/Jira/Confluence 等企业 MCP 服务器的用户。1 条评论可能来自维护者确认，值得跟进修复。

---

**4. MCP OAuth 在 Windows 上间歇性失败：socket 错误 10013**
`#4463` | 作者: msosav | 创建: 2026-08-12 | 更新: 2026-08-16 | 评论: 1
🔗 [github/copilot-cli Issue #4463](https://github.com/github/copilot-cli/issues/4463)

**摘要**：Windows 平台上，远程 HTTP MCP 服务器的 OAuth 认证在浏览器授权流程打开前间歇性失败，报错 `os error 10013`（socket 访问权限被禁止）。

**为什么重要**：Windows 平台特有的间歇性 MCP 认证问题，可能涉及端口绑定或网络堆栈兼容性，影响面广且难以复现。

---

**5. 仓库级 enabledPlugins 配置在非交互模式（copilot -p）下被忽略**
`#4507` | 作者: RezaJooyandeh | 创建/更新: 2026-08-16 | 评论: 0
🔗 [github/copilot-cli Issue #4507](https://github.com/github/copilot-cli/issues/4507)

**摘要**：`.github/copilot/settings.json` 中的仓库级 `enabledPlugins` 在 `copilot -p` 非交互模式中不生效，但交互模式和 `plugins list` 命令均正确应用该配置。各界面行为不一致。

**为什么重要**：插件配置在交互/非交互模式间不一致，会导致 CI/自动化脚本中插件行为不可预期。

---

**6. 恢复的会话在响应中断后保留过期连接 item ID，所有提示失败**
`#4505` | 作者: Adamkadaban | 创建/更新: 2026-08-16 | 评论: 0
🔗 [github/copilot-cli Issue #4505](https://github.com/github/copilot-cli/issues/4505)

**摘要**：重新打开并恢复现有会话后，每个提示都失败并返回 `CAPIError: 400 input item ID does not belong to this connection`。会话无法通过重试恢复，`/fork` 也无法解决。

**为什么重要**：会话恢复后完全不可用，且无恢复手段，属于核心功能的数据一致性问题。需要更大的复现样本确认影响范围。

---

**7. Edit 权限请求开始"超时"**
`#4486` | 作者: dscho | 创建: 2026-08-14 | 更新: 2026-08-16 | 评论: 0
🔗 [github/copilot-cli Issue #4486](https://github.com/github/copilot-cli/issues/4486)

**摘要**：用户未立即处理编辑权限请求时，请求会超时。用户经常并行打开多个会话且会隔夜保持会话开启，这一变化自某次更新后开始出现。

**为什么重要**：权限请求超时机制对多任务用户造成实际困扰，可能需要在交互设计上提供更宽松的窗口或异步处理能力。

---

**8. 远程 MCP 并发工具调用在 token 刷新时互相取消：transport closed 错误**
`#4472` | 作者: jmtt89 | 创建: 2026-08-13 | 更新: 2026-08-16 | 评论: 0
🔗 [github/copilot-cli Issue #4472](https://github.com/github/copilot-cli/issues/4472)

**摘要**：当多个工具调用并发发往同一 OAuth 保护的 Streamable HTTP MCP 服务器且 token 过期时，每个调用都独立创建新的 rmcp service 实例来刷新认证，导致某些 in-flight 工具调用报错 "transport closed before the tool responded"。

**为什么重要**：暴露了认证刷新逻辑的竞态条件，并发场景下 MCP 工具调用可靠性受影响。
</reaoning>

---

**9. claude-haiku-4.5 子代理不支持 'medium' reasoning effort**
`#4473` | 作者: philtillman | 创建: 2026-08-13 | 更新: 2026-08-16 | 评论: 0
🔗 [github/copilot-cli Issue #4473](https://github.com/github/copilot-cli/issues/4473)

**摘要**：CLI 内部将子代理任务路由到 `claude-haiku-4.5` 时应用了该模型不支持的 `medium` reasoning effort 参数，导致执行失败：`Reasoning effort 'medium' is not supported for model 'claude-haiku-4.5'`。

**为什么重要**：模型能力与 CLI 内部配置不匹配的兼容性问题，可能影响使用子代理/AI agent 功能的用户。

---

**10. 恢复旧会话时不会自动选择该会话使用的 agent**
`#4489` | 作者: Lythenas | 创建: 2026-08-14 | 更新: 2026-08-16 | 评论: 0
🔗 [github/copilot-cli Issue #4489](https://github.com/github/copilot-cli/issues/4489)

**摘要**：使用 `/agent x` 指定 agent 的会话在第二天恢复后，需要手动重新选择 agent，会话不保留运行时的 agent 状态。

**为什么重要**：影响多 agent 工作流的会话连续性和用户预期，是一个简单但影响体验的缺陷。

---

**其他值得关注但未展开的条目：**
- `#4504` - account.getQuota 返回的 resetDate 是错误字段（应该返回配额重置时间而非请求时间）🔗 [Issue #4504](https://github.com/github/copilot-cli/issues/4504)
- `#4488` - Windows 上多会话/VS Code 打开时插件更新报 Access denied 🔗 [Issue #4488](https://github.com/github/copilot-cli/issues/4488)
- `#4474` - 会话恢复超时后 General Chat 被静默归档，无恢复 UI 🔗 [Issue #4474](https://github.com/github/copilot-cli/issues/4474)
- `#4498` - 模型在代码中使用了不当措辞 "enslaved"（涉及模型对齐问题）🔗 [Issue #4498](https://github.com/github/copilot-cli/issues/4498)
- `#4487` - 插件市场缺少依赖声明与自动安装机制 🔗 [Issue #4487](https://github.com/github/copilot-cli/issues/4487)
- `#4502` - 会话标记为 Done 后无取消归档功能 🔗 [Issue #4502](https://github.com/github/copilot-cli/issues/4502)

---

## 重要 PR 进展

过去 24 小时仅有 1 条 PR 更新，但需要特别说明：社区 PR 贡献相对较少，且该 PR 内容与 Copilot CLI 本身无关。

**#3163 [OPEN] ViewSonic monitor**
作者: tijuks | 创建: 2026-05-06 | 更新: 2026-08-16 | 评论: 无
🔗 [github/copilot-cli PR #3163](https://github.com/github/copilot-cli/pull/3163)

**摘要**：该 PR 标题为 "ViewSonic monitor"，内容与 Copilot CLI 完全无关，疑为垃圾/错误提交。Description 提到 "monitor for #2591, #3561, #3559" 并包含无关的 GitHub Actions 文本。

**说明**：此类垃圾 PR 在活跃的开源仓库中偶有出现，社区维护者通常会在 triage 阶段关闭。由于技术相关性为零，此处仅作记录，不展开分析。

---

## 功能需求趋势

从过去 24 小时更新的 Issues 中，可以提炼出社区关注的几个核心功能方向：

1. **MCP 生态稳定性与成熟度**（占比最高）
   - OAuth 认证流程需更健壮：RFC 8414 兼容性、Windows 平台兼容、token 刷新并发控制
   - 多个 Issue 均指向 MCP 集成在不同平台和并发场景下的可靠性问题，说明 MCP 已成为 Copilot CLI 的核心使用场景，但体验仍有较大提升空间

2. **会话生命周期管理**
   - 会话恢复后应保留 agent、连接等完整运行状态（#4489、#4505）
   - 需要取消归档/恢复 Done 会话的功能（#4502）
   - 超时/归档行为应更透明，不能静默丢弃或替换用户会话（#4474）

3. **插件系统深化**
   - 插件依赖管理：支持跨/内部 marketplace 的依赖声明与自动安装（#4487）
   - 插件配置一致性：交互与非交互模式下行为对齐（#4507）
   - Windows 平台插件更新时的文件锁冲突需解决（#4488）

4. **性能与资源管理**
   - 内存压力与上下文压缩的联动逻辑需优化，避免误触发（#4506）
   - 模型参数配置需与实际模型能力对齐（#4473）

5. **企业级使用场景**
   - Slack 集成、Atlassian MCP 服务器等企业工具的稳定性受到关注（#4503、#4490）

---

## 开发者关注点

1. **MCP 认证反复出现问题，社区显露疲态**
   多条 Issue（#4490、#4463、#4472）均围绕 MCP OAuth/Streamable HTTP 的认证流程。从 1.0.78 到 1.0.80 的版本升级出现回归，加上 Windows 平台间歇性失败和并发 token 刷新竞态，开发者对此类问题的反馈集中在 "希望一次修好，不要反复" 的态度上。

2. **会话恢复与状态保留是高频痛点**
   多条 Issue 涉及会话恢复后状态丢失、连接 ID 失效、agent 未保存、静默归档等。开发者期望会话是可持续的、可恢复的工作单元，而不是一次性交互。特别是 #4505 中用户反馈 "Fork 也无法解决"，说明目前缺少有效的故障转移机制。

3. **权限请求交互设计需要再思考**
   #4486 反映的 Edit 权限超时问题，暴露了交互时序设计中对真实工作流（多会话、隔夜保持）的考虑不足。

4. **内存压力引发上下文压缩的连锁反应值得警惕**
   #4506 描述的现象（低上下文占用但高内存压力时反复压缩）如果属实，会直接损害大上下文窗口本身的可用价值。社区期待官方在内存管理策略上给出更明确的说明和修复。

5. **模型措辞引发的对齐讨论（#4498）**
   模型在代码命名中使用 "enslaved" 一词引发了用户对模型对齐和措辞敏感性的讨论。虽然属于个例，但也表明开发者对模型输出的专业性和包容性有更高期待。

---

> 注：日报数据基于 2026-08-16 全天及 2026-08-17 凌晨的 GitHub 活动。Discussions 数据未提供，故省略该部分。所有链接均可通过 [github.com/github/copilot-cli](https://github.com/github/copilot-cli) 访问。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 2026-08-17

## 今日速览
今日社区最突出的声量集中在**稳定性与计费一致性**：多个 Issue 报告 OpenCode 在工具调用后、断网等场景下进入无法中断的卡死状态；同时多条付费相关 Bug——Zen 余额不生效、Go 订阅额度与 Zen 余余额不联动——引发用户不满。PR 侧则以自动化清理合入为主，TUI 交互、权限校验、内容过滤错误提示等一批修复落地。

---

## 社区热点 Issues

### 1. Ctrl+C 退出与系统复制快捷键冲突（#7957）
👍 49 · 评论 16 · 更新于 08-16

Windows 和 Linux 用户习惯性使用 `Ctrl+C` 复制文本，在 OpenCode TUI 中却直接退出应用。该 Issue 已积累 49 个 👍，是当前社区共鸣最强的 UX 问题，呼吁改为安全退出或支持自定义快捷键。
https://github.com/anomalyco/opencode/issues/7957

### 2. [URGENT] Zen 付费余额仍触发 FreeUsageLimitError（#33318）
评论 9 · 更新于 08-16

用户充值 $20 后仍未到 1 小时即被提示 `Free usage exceeded`，付费余额完全不生效。此 Bug 直接影响商业用户信任，已被标记为 **URGENT**。
https://github.com/anomalyco/opencode/issues/33318

### 3. Desktop 对 slow local provider 强制 5 分钟 Headers Timeout（#26602）
评论 11 · 更新于 08-16

即使用户在 provider 配置中设置 `"timeout": false` 或更大的超时值，Desktop 版仍会在整 5 分钟时中断本地 OpenAI-compatible 请求。本地模型用户受影响明显。
https://github.com/anomalyco/opencode/issues/26602

### 4. 工具调用后永久卡在 "busy"（#40468）
评论 5 · 更新于 08-16

多次成功工具调用后，某一次 toolcall 结束 TUI 便永久处于 ping-pong 动画状态，双击 ESC 也无法中断，最后日志停在 `message=loop session.id=...`。卡死问题已成为最高频稳定性投诉。
https://github.com/anomalyco/opencode/issues/40468

### 5. TUI 退出后终端残留鼠标转义序列乱码（#20458）
👍 4 · 评论 7 · 更新于 08-16

退出 TUI（quit / Ctrl+C / 进程被杀）后，终端输出大量 `35;89;19M` 格式的 garbled 序列，破坏复用终端的体验。该问题被标记为独立于会话内鼠标乱码的新缺陷。
https://github.com/anomalyco/opencode/issues/20458

### 6. V2 CLI headless 命令加载 OpenTUI 并泄漏 `libopentui.so`（#37671）
👍 2 · 评论 5 · 更新于 08-16

`--version`、`--help`、`service status`、`api` 等无 TUI 的命令仍会加载 13.1 MiB 的 `libopentui.so` 到临时目录，重复调用导致临时文件累积。摘要指出这是 V2 引入的资源管理缺陷。
https://github.com/anomalyco/opencode/issues/37671

### 7. opencode 在 /tmp 高速生成 .so 文件，用户担忧 SSD 磨损（#42880）
评论 2 · 更新于 08-16

用户反映工作中 `.so` 文件以"极高速率"写入 /tmp，已自行用 tmpfs 挂载 /tmp 规避。与 #37671 高度同源，进一步暴露临时文件管理的硬件健康风险。
https://github.com/anomalyco/opencode/issues/42880

### 8. 网络不稳定导致 OpenCode 永久卡死无报错（#40625）
评论 4 · 更新于 08-16

丢包时 OpenCode 不报错也不重试，界面一直显示 "Esc to interrupt" 但按键无效。用户尝试用 watchdog 脚本检测，但脚本同样被卡住。真实网络场景下的鲁棒性缺口。
https://github.com/anomalyco/opencode/issues/40625

### 9. Qwen 3.8 渲染器拒绝多个 system message（#42909）
评论 3 · 更新于 08-16 · 新建

`qwen3.8:27b` 对 `/v1/chat/completions` 的多个 system message 返回 `system message must be at the beginning`，而 agentic 客户端（如 OpenCode）恰恰会发送多条系统指令。新模型兼容层问题，关注度上升中。
https://github.com/anomalyco/opencode/issues/42909

### 10. Go 订阅额度耗尽后不消耗 Zen 余额（#42938）
评论 2 · 更新于 08-16 · 新建

用户 Go 订阅达到 100% 后被锁 12 小时，尽管余额有 $39.89 且已开启 "Use balance"，仍无法按文档回退到 Zen 付费。计费链路联动的又一异常。
https://github.com/anomalyco/opencode/issues/42938

### 11. Stripe 支付后验证失败，影响中国大陆用户（#33112）
评论 4 · 更新于 08-16

中国大陆用户通过支付宝完成 Anomaly Innovations Inc. 的收款授权后，付款验证仍失败，无法开通订阅，涉及支付链路与地域可用性。
https://github.com/anomalyco/opencode/issues/33112

---

## 重要 PR 进展

### 1. fix(app): 更正后台子代理状态展示（#42944）
OPEN · 更新于 08-16

避免把活动中的前台子代理标记为后台工作；修复后台子代理活跃时的进度指示器，并补充回归测试。目前唯一一条仍在开放的 app 修复 PR。
https://github.com/anomalyco/opencode/pull/42944

### 2. fix(app): 技能时间线展示优化（#42945）
CLOSED · 更新于 08-16

在时间线工具行中显示技能图标、标签、分隔符和解析后的技能名，技能详情使用弱化文本展示，并新增 focused timeline 回归覆盖。
https://github.com/anomalyco/opencode/pull/42945

### 3. refactor(app): 使用当前会话消息替代双轨转录（#42766）
OPEN · 更新于 08-16

桌面端此前同时维护 V2 会话消息流与旧版 `Message` / `Part` 转录，存在状态不同步风险。该重构统一为单一消息来源。
https://github.com/anomalyco/opencode/pull/42766

### 4. fix(core): 展示内容过滤器拒绝原因与类别（#37392）
CLOSED · 更新于 08-16

Anthropic 返回 `stop_reason: "refusal"` 时不再只展示一条硬编码提示，而是透出具体拒绝原因。此前此行为在 #35736 中被要求改进。
https://github.com/anomalyco/opencode/pull/37392

### 5. fix(core): share 导入失败时正确返回失败（#37387）
CLOSED · 更新于 08-16

无效 URL、share 请求失败等情况此前只打印诊断却返回成功。该修复使失败路径正确抛出，避免上游误判导入成功。
https://github.com/anomalyco/opencode/pull/37387

### 6. fix(core): apply_patch 移动操作校验目标路径（#37386）
CLOSED · 更新于 08-16

`apply_patch` 的 move 此前仅用源路径请求编辑权限，实际却写入目标路径，存在越权写风险。现在目标路径同样进入权限校验。
https://github.com/anomalyco/opencode/pull/37386

### 7. fix(core): 保留文件 API 文本内容原貌（#37385）
CLOSED · 更新于 08-16

实例文件 API 此前对解码文本调用 `trim()`，会改变前导/尾随和空行空白。该修复改为原样返回内容。
https://github.com/anomalyco/opencode/pull/37385

### 8. fix(tui): truncateLeft 在 len=1 时的截断错误（#37369）
CLOSED · 更新于 08-16

`str.slice(-0)` 在 JS 中等价于 `slice(0)`，导致 len=1 时截断输出完全错误。已修正为单字符省略显示。
https://github.com/anomalyco/opencode/pull/37369

### 9. fix(tui): 提示框激活时禁用会话快捷键（#37352）
CLOSED · 更新于 08-16

权限或表单弹窗出现时，会话子代理快捷键（如向下箭头）仍可能触发并打开背后的活动视图。此 PR 在提示期间禁用基础会话键绑定。
https://github.com/anomalyco/opencode/pull/37352

### 10. feat(plugin): 新增 session request 钩子（#37347）
CLOSED · 更新于 08-16

为插件提供 `ctx.session.hook("request")` 扩展点，可在请求序列化与鉴权之后、发出之前替换 Web Request，并借助 async local context 贯穿 AI SDK fetch 链路。
https://github.com/anomalyco/opencode/pull/37347

> 注：以上多数 PR 带 `automated-pr-cleanup` 标签，由机器人例行合入维护，但均为实际修复。

---

## 热门 Discussions

本期未提供 Discussions 数据，此部分省略。

---

## 功能需求趋势

从今日 Issue 与 PR 中提炼社区最关注的功能方向：

- **计费与订阅联动一致性**：Zen 余额、Go 订阅额度、免费限制三者之间的判定逻辑多次被投诉。用户期望付费余额"随时兜底"，并且订阅配额与 Zen 余额能按文档正确联动（#33318、#42938、#33112）。
- **卡死自愈与可观测性**：工具调用后、断网、桌面端场景下的永久 busy/thinking 反复出现，社区期望增加超时熔断、看门狗或可中断的底层重试机制（#40468、#40625）。
- **TUI/终端体验精细化**：Ctrl+C 快捷键冲突（#7957）、退出后终端序列残留（#20458）、权限提示期间误触快捷键（#37352）等，体现出对终端交互细节的高要求。
- **资源管理与临时文件收敛**：headless 命令不应加载 TUI 原生库，临时 `.so` 文件应集中清理，避免 SSD 磨损（#37671、#42880）。
- **模型兼容性适配**：Qwen 3.8 多 system message 报错（#42909）、GLM-5.3 在启用 MCP 时返回 400（#42917），说明新模型接入的兼容测试需前置。
- **会话管理增强**：有用户要求持久化、有序的会话评审导航（#42863），同时桌面端消息流正通过重构收敛为单一来源（#42766）。

---

## 开发者关注点

- **"卡死三连"是当前最大痛点**：网络断包（#40625）、工具调用后（#40468）、桌面端（#36370）都会导致无法中断的挂起。用户普遍反馈 "Esc to interrupt" 形同虚设，且日志中看不到明确的错误原因。
- **付费用户被免费额度误伤**：既有 Zen 余额不生效（#33318），也有 Go 订阅额度与 Zen 余额不联动（#42938）。用户对计费系统的一致性和透明度提出质疑。
- **临时文件泄漏引发硬件担忧**：`--version` 都产生 13 MiB 临时文件，有用户直言"这是不可接受的行为"；SSD 磨损问题更是将评级提升到硬件健康层面。
- **WebUI 版本号恒低一位**：多个 Issue（#24286、#29301、#42920）指向同一现象：WebUI 显示的版本号总是比 CLI 实际版本低一版，影响升级确认与问题排查。
- **终端状态恢复不被重视**：鼠标转义序列乱码、SGR 残留对 tmux/多终端用户造成持续困扰，相关 Issue 已存在数月仍有复现报告。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

## Pi 社区动态日报（2026-08-17）

### 1. 今日速览

过去 24 小时社区聚焦于三类问题：一是 **pi.dev 模型目录超时**引发关于客户端重试机制的讨论（#8198、#8205、PR #8204）；二是 **缓存 Token 统计错误**导致压缩预算被提前触发（#8075、PR #8119、PR #8218）；三是 **自定义消息注入破坏工具调用序列**的严重 bug 已由 PR #8209 修复（#8166、#8210）。此外，Kiro OAuth 设备登录（PR #8217）与 xAI 模型默认切换至 Grok 4.6（PR #8124）等新功能也已合并。

### 2. 版本发布

过去 24 小时无新版本 Release。

### 3. 社区热点 Issues

1. **[#8029] 提示编辑器大缓冲区性能严重下降**
   - 作者: affanali2k3 | 更新: 2026-08-16 | 评论: 9 | 状态: OPEN（inprogress）
   - 7000 行缓冲区时单次方向键操作耗时 1650ms，移动操作呈线性增长，社区对该问题关注度极高，已进入修复流程。
   - https://github.com/earendil-works/pi/issues/8029

2. **[#5023] 终端无故滚动至会话开头**
   - 作者: markokocic | 更新: 2026-08-16 | 评论: 14 | 👍 2 | 状态: CLOSED
   - 模型生成期间终端随机跳转至缓冲开头，24 小时内评论区仍有讨论，是近期评论数最多的 Issue。
   - https://github.com/earendil-works/pi/issues/5023

3. **[#8166] 工具批次中途注入自定义消息导致工具调用顺序损坏（DeepSeek 400）**
   - 作者: CarloCattano | 更新: 2026-08-16 | 评论: 2 | 状态: CLOSED
   - 扩展在流式途中调用 `sendMessage(triggerTurn:false)` 会破坏 tool_calls→tool 邻接关系，导致后续每轮请求都报 400。PR #8209 已修复。
   - https://github.com/earendil-works/pi/issues/8166

4. **[#8198] pi.dev 模型目录端点多网络环境超时**
   - 作者: markusylisiurunen | 更新: 2026-08-16 | 评论: 2 | 状态: OPEN
   - `pi update --models` 持续超时，服务端接受 TLS 连接后返回 0 字节，已由 PR #8204 添加客户端重试机制。
   - https://github.com/earendil-works/pi/issues/8198

5. **[#8061] 上下文预算忽略 maxTokens 输出预留，压缩重试亦失败**
   - 作者: Nuctori | 更新: 2026-08-16 | 评论: 2 | 👍 1 | 状态: OPEN
   - 输入仅占窗口 78% 时请求即被拒绝，自动压缩重试因同样原因失败。涉及最大上下文模型（1M）下的预算算法缺陷。
   - https://github.com/earendil-works/pi/issues/8061

6. **[#7870] 远程目录覆盖内置 contextWindow：GLM-5.2 被锁定为 262k 而非 1M**
   - 作者: tcf909 | 更新: 2026-08-16 | 评论: 3 | 状态: OPEN（inprogress）
   - pi.dev 目录返回的 262k 覆盖了 OpenRouter 实际支持的 1M 窗口，导致长上下文任务被截断。社区正在定位目录覆盖优先级问题。
   - https://github.com/earendil-works/pi/issues/7870

7. **[#8157] 将 grok-mermaid 迁移至 lovely-mermaid**
   - 作者: xl0 | 更新: 2026-08-16 | 评论: 5 | 状态: OPEN
   - grok-mermaid 为低人工干预移植版本，inherited 了大量上游缺陷；lovely-mermaid 解析器投入了更多打磨工作，迁移可显著改善图表渲染质量。
   - https://github.com/earendil-works/pi/issues/8157

8. **[#7994] OpenAI 兼容层 reasoning_details 仅支持加密条目，签名文本回放不可用**
   - 作者: LukasParke | 更新: 2026-08-16 | 评论: 3 | 状态: OPEN
   - OpenRouter 基于 870 次基准测试提交，`openai-completions` 解析器只处理 `reasoning.encrypted`，无法往返非加密的 `reasoning_details`。
   - https://github.com/earendil-works/pi/issues/7994

9. **[#5581] `sendMessage(triggerTurn:true)` 绕过 `before_agent_start` 事件**
   - 作者: dljsjr | 更新: 2026-08-16 | 评论: 4 | 👍 1 | 状态: OPEN（inprogress）
   - 自定义消息直接调用 `_runAgentPrompt`，跳过 `emitBeforeAgentStart`，导致扩展钩子失效并引入特定场景竞态问题。
   - https://github.com/earendil-works/pi/issues/5581

10. **[#6300] Windows TUI 每次按键重绘输入行，字符频繁换行**
    - 作者: polemotionkor-arch | 更新: 2026-08-16 | 评论: 7 | 状态: OPEN
    - cmd.exe 与 Windows Terminal 均复现，严重影响 Windows 用户体验，急需修复。
    - https://github.com/earendil-works/pi/issues/6300

### 4. 重要 PR 进展

1. **[#8218] `getStats()` 的 tokens.total 仅计费部分（排除缓存）**
   - 作者: sebbuntu | 更新: 2026-08-16 | 状态: CLOSED
   - 修复缓存 Token 按 1/120 费率计费时 inflate 约 120 倍的问题，避免压缩预算过早触发。
   - https://github.com/earendil-works/pi/pull/8218

2. **[#8217] 添加 Kiro OAuth 设备登录**
   - 作者: fanbaoyu1024 | 更新: 2026-08-16 | 状态: CLOSED
   - 实现设备码登录、令牌刷新、错误处理（authorization_pending / slow_down / fatal error）及回归测试，Kiro 提供商正式接入。
   - https://github.com/earendil-works/pi/pull/8217

3. **[#8209] 流式期间非轮次自定义消息延迟至轮次结束处理**
   - 作者: alexkalinohooijunyi | 更新: 2026-08-16 | 状态: CLOSED
   - 修复 #8166：`triggerTurn:false` 消息不再直接 push 到实时消息数组，而是进入流式队列，避免破坏 tool_calls/tool 邻接关系。
   - https://github.com/earendil-works/pi/pull/8209

4. **[#8119] 跟踪 Kimi 顶层 `cached_tokens` 用量**
   - 作者: cristinaponcela | 更新: 2026-08-16 | 状态: CLOSED
   - 对应 #8075，将 Kimi 的 `usage.cached_tokens` 计入 cache-read input tokens，修正 OpenAI 兼容层用量统计。
   - https://github.com/earendil-works/pi/pull/8119

5. **[#8124] xAI 模型路由至 Responses API，默认模型切换为 Grok 4.6**
   - 作者: Jaaneek | 更新: 2026-08-16 | 状态: CLOSED
   - 从 Completions 迁移到 Responses API，发送用户代理，并将默认模型从 Grok 4.5 升级到 Grok 4.6。
   - https://github.com/earendil-works/pi/pull/8124

6. **[#8204] 对 pi.dev 目录刷新增加客户端重试**
   - 作者: enzofrasca | 更新: 2026-08-16 | 状态: CLOSED
   - 为 #8198 提供修复：为单个提供商抓取添加逐次超时与整体重试，缓解 pi.dev 返回 0 字节导致 `pi update --models` 失败的问题。
   - https://github.com/earendil-works/pi/pull/8204

7. **[#8193] 图像生成端点增加 MiniMax 图像互生（image-to-image）后端**
   - 作者: octo-patch | 更新: 2026-08-16 | 状态: CLOSED
   - 新增 `minimax-images` API 模块并注册到运行时图像 API 注册表，补齐图像互生能力。
   - https://github.com/earendil-works/pi/pull/8193

8. **[#8076] DRAFT: 包含新 harness 的开发分支**
   - 作者: davidbrai | 更新: 2026-08-16 | 状态: CLOSED（草稿）
   - 新 harness 的早期开发分支，适合关注架构演进的开发者跟进。
   - https://github.com/earendil-works/pi/pull/8076

### 5. 热门 Discussions

1. **[#3373] [General] 你最喜欢使用哪些 Pi 插件、加载项或扩展？**
   - 作者: eterps | 更新: 2026-08-16 | 评论: 10 | 👍 8
   - 社区成员分享日常使用的扩展与工具，是了解 Pi 生态实际玩法的高价值讨论帖。
   - https://github.com/earendil-works/pi/discussions/3373

### 6. 功能需求趋势

- **新模型与提供商支持**：GLM-5.3 思考级别接入（#8190）、xAI 迁移至 Responses API（#8124）、Qwen Token Plan 目录对齐（#8194）、opencode-go 模型路由修复（#8206）——社区对新模型适配保持高频需求。
- **Token 计费与预算准确性**：Kimi `cached_tokens` 跟踪（#8075）、`getStats()` 计费修正（#8218）表明缓存 Token 计价已成为影响压缩、成本统计的关键问题。
- **远程目录与网关稳定性**：pi.dev 超时（#8198）、客户端重试（#8205、#8204）体现了对远程模型目录可靠性的强烈诉求。
- **TUI 交互增强**：组件级鼠标事件（#7683）、IME/听写实时重排（#8211）、主题切换残留（#8212）——终端 UI 体验正向更细微的交互场景深入。
- **扩展 API 能力扩展**：`agent_end` veto（#8213）、斜杠命令参数补全 RPC（#8214）、自定义消息排队安全（#8209）——开发者希望获得更精细的流程控制点。

### 7. 开发者关注点

- **上游服务不稳定**：pi.dev 目录超时是当前最集中的抱怨点，直接阻断模型更新流程。
- **大缓冲区性能瓶颈**：提示编辑器在数千行文本下操作延迟不可接受（#8029），有待算法优化。
- **计费与预算误导性**：缓存 Token 计入总额导致预算被 120 倍夸大，开发者对成本可见性要求明确。
- **扩展安全性**：`pi-devin-auth` 报告疑似恶意行为（#8216），映射出第三方包生态仍需建立信任机制。
- **平台兼容性**：Windows 下的输入重绘问题（#6300）持续影响体验，需要在跨平台渲染层投入更多修复。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-08-17

## 今日速览

多智能体团队模式昨日集中暴露了一批协作缺陷（成员消息、任务派发、会话崩溃），社区已提交对应修复 PR 予以响应；同时 `/review` 自动评审管线持续高强度演进，新增断点续审、像素级渲染证据、发布收敛策略等能力，并发布 v0.21.12-preview.5 预览版。此外，CI/autofix 安全加固继续推进——验证 Gate 迁入临时容器是昨日标志性进展。

---

## 版本发布

### v0.21.12-preview.5
Release notes 未包含具体变更说明，完整变更对比见 [Full Changelog](https://github.com/QwenLM/qwen-code/compare/v0.21.12...v0.21.12-preview.5)。

### v0.21.11-nightly.20260816.5677823abb
- **feat(autofix)**: deny-by-default footprint gate and positional window censuses（[@wenshao](https://github.com/wenshao)，[PR #9156](https://github.com/QwenLM/qwen-code/pull/9156)）

### DSW EAS 全端到端基准复跑（r2 / r3）
团队基于 v0.21.12 对 DSW SWE-bench Verified（500 条）与 Terminal-Bench 2.0（89 条）执行了全端到端复跑（r2、r3），确认将 DSW 包代理收敛至 verifier 依赖出口后无回归。基准结果细节建议关注仓库后续公告。

---

## 社区热点 Issues

### 1. [P1] [autofix 安全] PAT 任务与不可信分支代码共享主机，需 runner 级隔离 —— [#9089](https://github.com/QwenLM/qwen-code/issues/9089)
评论 5。这是 autofix 加固中发现的一类**无法从 GitHub Actions 内部修复**的问题：持有 PAT 的 job 与不可信分支代码运行在同一台 runner 上。PR #9214 的容器化方案正是该设计的 Phase 1+2。

### 2. [P2] 团队成员无法向 leader 发送普通消息，被误判为 shutdown —— [#9276](https://github.com/QwenLM/qwen-code/issues/9276)
评论 5。多智能体协作的阻塞性缺陷：成员的正常完成/状态消息被当成关闭请求，并报错"Only the team leader can request shutdowns"。

### 3. [P2] 打开报错的 agent-team 标签页导致交互会话崩溃 —— [#9290](https://github.com/QwenLM/qwen-code/issues/9290)
评论 3。当队友返回错误且未走正常完成路径时，点击该成员标签页会触发 FATAL 渲染错误，整个会话退出。PR #9292 正在修复。

### 4. [P2] 手动分配团队任务后状态持久化但不派发工作 —— [#9282](https://github.com/QwenLM/qwen-code/issues/9282)
评论 3。leader 将任务置为 `in_progress` 并指定 owner 后，更新成功且持久化，但空闲的 Alice 收不到任何任务提示——自动认领路径只处理无主 `pending` 任务。

### 5. [P2] Agent-team prompt 与实际投递行为矛盾，且承诺不可用的 peer 摘要 —— [#9283](https://github.com/QwenLM/qwen-code/issues/9283)
评论 3。运行时会在队友空闲时自动转发未上报的最终答案给 leader，但普通/plan 模式的 prompt 却要求显式 `send_message`；同时 prompt 承诺的 peer 摘要功能实际上并不存在。

### 6. [P2] task_list 将空白可选过滤器视为有效过滤器 —— [#9281](https://github.com/QwenLM/qwen-code/issues/9281)
评论 3。`task_list` 的 `owner`/`blockedBy` 被序列化为空字符串时返回 `No tasks found.`，工具描述声称空白过滤器等同缺省，行为与文档矛盾。

### 7. [P2] 不支持的图片 MIME 可中止 Responses 兼容会话 —— [#9291](https://github.com/QwenLM/qwen-code/issues/9291)
评论 2。真实 `.heic` 图片被作为 `image/heic` data URI 转发后，端点在请求校验阶段直接拒绝并中止会话，缺少上传前 MIME 校验/转换。

### 8. [P2] [长期未决] 0.19.3 UI 中文输入法完全无效（仅能输入拼音） —— [#5966](https://github.com/QwenLM/qwen-code/issues/5966)
评论 5。该 issue 自 6 月创建以来评论区持续活跃，最新更新仍为 8 月 16 日，说明中文用户输入法问题在近期版本中仍未得到解决。

### 9. [P2] [长期未决] tmux / 远程环境下屏幕闪烁无法使用 —— [#8962](https://github.com/QwenLM/qwen-code/issues/8962)
评论 3。画面持续闪烁，缩小显示尺寸（如 400x300）后接近正常，严重影响远程与复用终端场景的用户体验。

### 10. [P2] /review 并发评审在固定 worktree 路径上竞争，worktree 中途被删 —— [#9205](https://github.com/QwenLM/qwen-code/issues/9205)
评论 2。`fetch-pr` 将评审 worktree 固定在 `.qwen/tmp/review-pr-<n>`，同一 PR 的另一个评审会话清理时删除了正在使用的 worktree（记录到 5 次无凭证删除）。

---

## 重要 PR 进展

### 1. [fix(core)] 手动分配的团队任务派发给对应 owner —— [#9289](https://github.com/QwenLM/qwen-code/pull/9289)
修复 #9282。按 issue 预期方向实现：在分配时触发派发而非拒绝式重设计，与 #9276 / #9281 / #9283 独立分开处理。

### 2. [fix(core)] 对齐 Agent-team prompt 与 TeamCreate 描述和真实投递行为 —— [#9284](https://github.com/QwenLM/qwen-code/pull/9284)
修复 #9283。修正 prompt 与运行时不匹配的表述，使描述与实际自动转发行为一致，不新增 leader 可观测性功能。

### 3. [fix(cli)] 收敛 agent-tab 渲染错误而非退出会话 —— [#9292](https://github.com/QwenLM/qwen-code/pull/9292)
修复 #9290 的收敛部分。为 agent-tab 渲染路径增加独立的错误边界，避免任何渲染错误直达全局 FATAL 出口导致会话退出。

### 4. [feat(review)] 在发布边界强制已解析的严重级别下限 —— [#9279](https://github.com/QwenLM/qwen-code/pull/9279)
当评审发布楼层解析为 Critical-only（显式 `--severity-floor critical` 或第 6 轮自适应默认）时，CLI 自动将草稿中的 Suggestion 移入 review body 的 deferral 列表，防止绕过收敛机制。

### 5. [feat(review)] 支持从磁盘状态恢复中断的 PR 评审 —— [#9092](https://github.com/QwenLM/qwen-code/pull/9092)
`fetch-pr` 新增 `--resume`，基于自收集的事实（报告可解析且为同一 PR、worktree 仍在 fetchedSha、磁盘 diff 哈希匹配 plan）决定是否可续跑，是评审管线的断点续审能力。

### 6. [refactor(review)] 增量评审范围改为从 PR diff 构建，而不是事后检查 —— [#9267](https://github.com/QwenLM/qwen-code/pull/9267)
用"收窄步骤"替代原来的 containment oracle，不再"先发布 `anchor..head` 作为本轮范围、再事后证明它在 `base..head` 内"，避免无效评审轮次。

### 7. [feat(review)] capture-tui：渲染结论用像素证据而非文字描述 —— [#9273](https://github.com/QwenLM/qwen-code/pull/9273)
新增 `qwen review capture-tui` 命令：在私有 tmux server 中运行命令，捕获 pane 文本为 `.ans`，并用 `freeze` 渲染 `.png`，可验证的 TUI 渲染证据。

### 8. [fix(review)] 修复线上运行发现的 7 个管线缺陷 —— [#9175](https://github.com/QwenLM/qwen-code/pull/9175)
来自对 4 个真实 PR 的完整评审观察：2 个结构性缺陷（incremental anchor 错误抑制、维度判断错误）加 5 个边界/一致性问题，全部在真实运行中复现修复。

### 9. [fix(review)] verifier 探针在私有 scratch worktree 中运行 —— [#9221](https://github.com/QwenLM/qwen-code/pull/9221)
修复 #9207。verifier 是评审管线中唯一的写入代理（写探针、跑探针、应用 flip-check 修复、恢复现场），现从共享评审 worktree 中隔离到私有临时 worktree，避免污染其他 agent 的工作目录。

### 10. [feat(autofix)] 在临时容器中运行验证 Gate —— [#9214](https://github.com/QwenLM/qwen-code/pull/9214)
#9089 安全设计的 Phase 1+2：将 autofix 验证 Gate（Verification steps）移入临时容器，并用结构性测试固定信任边界，从宿主隔离不可信代码。

---

## 热门 Discussions

未提供 Discussions 数据，本节省略。

---

## 功能需求趋势

- **多智能体协作可靠性**：成员消息路由、任务指派/认领、prompt 与运行时一致性、UI 容错是当前最集中的功能需求方向。
- **自动评审管线工程化**：断点续审、增量范围精确化、渲染证据（像素）化、发布收敛与 deferral 机制，显示 `/review` 正从"能跑"走向"可维护、可收敛"。
- **CI/autofix 安全沙箱化**：容器化验证 Gate、runner 级隔离、worktree 擦除保护、反垃圾评论，安全边界持续收紧。
- **终端体验优化**：tmux/远程渲染闪烁、Web Shell 白屏与崩溃、中文输入法失效，均为真实用户高频场景。
- **认证扩展**：社区明确提出 GitHub Copilot 认证接入请求（[#9275](https://github.com/QwenLM/qwen-code/issues/9275)），未来可能扩展更多 OAuth 提供商。
- **图像与多媒体支持**：HEIC 等非常见 MIME 需要完整的预检/转换链；PR #9127 已展示 session 媒体引用端到端的探索。
- **ACP 主机服务配置化**：`qwen serve` 新文件权限硬编码 0600、忽略 umask 且不可配置（[#9250](https://github.com/QwenLM/qwen-code/issues/9250)），需要设置项或 env 支持。

---

## 开发者关注点

- **多智能体团队模式仍处于早期不稳定阶段**：昨天一天集中出现 5 个以上相关 bug（消息误判、任务不派发、prompt 矛盾、会话崩溃、过滤器误判），社区反馈积极但修复需跟上。
- **中文与远程用户的两个长期痛点未见明显改善**：#5966 中文输入法失效（0.19.3 至今）、#8962 tmux/远程闪烁，均持续 1-2 个月仍未关闭。
- **`/review` 自动化环路产生大量 backlog**：多个 PR 经历 5-17 轮评审，需依赖 round cap、deferral 列表与自动化工单来管理系统性溢出——这本身已成为一个新的工作类别。
- **Web Shell 作为远程 UI 的稳定性不足**：SSE 大帧导致浏览器标签崩溃（#9234）、dev-server 重启后白屏无恢复 UI（#9253），开发者对"打开即用"的远程开发体验期待较高。
- **安全加固正在付出开发成本**：#9089、#9214、#9265、#9277 等多线程推进隔离与防护，体现了项目对供应链与 runner 安全的态度，但相关 review 成本也随之增加。

---
*本日报由 AI 根据 GitHub 公开数据自动整理，数据截至 2026-08-16 更新。*

</details>

<details>
<summary><strong>CodeWhale</strong> — <a href="https://github.com/Hmbown/CodeWhale">Hmbown/CodeWhale</a></summary>

# CodeWhale 社区动态日报（2026-08-17）

## 今日速览

CodeWhale 的 v0.9.8 进入发布收尾阶段，但发布流程因 `sudo` 回归和终端中毒两个 blocker 被取消，实际 npm/crates/GitHub Release 产物尚未发布。社区讨论与开发主线集中在 TUI 稳定性、scouts/reviewers 只读 shell 策略、self-hosted 长上下文模型的预算可配置性，以及 CI/发布可靠性上。

## 版本发布

### v0.9.8

- 发布说明重点：CodeWhale 是 Shannon Labs 的公开产品；`codewhale` 命令、npm 包及 release 资产名称继续使用小写技术标识；旧 legacy npm 包 `deepseek-tui` 正式弃用，不再有后续版本。
- 注意：根据 [PR #5425](https://github.com/Hmbown/CodeWhale/pull/5425)，v0.9.8 tag 虽已存在，但发布运行被取消，npm/crates/GitHub Release 均未实际发布。原因是发现 `sudo` 回归（#5413）与 abort 类终端中毒（#5424）两个 release blocker。
- 查看：[GitHub Releases v0.9.8](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.8)

## 社区热点 Issues

以下按讨论热度与影响面选出 10 条：

1. **[#5123 Agent spawn surface has too many knobs — labeled builder runs read-only and self-BLOCKED](https://github.com/Hmbown/CodeWhale/issues/5123)**（6 条评论）  
   核心问题：delegate builder 被标记为 `builder`/`gates-shell-writer`，但实际工具契约是只读的，导致“self-BLOCKED”。这直接暴露 agent 权限标签与真实执行能力不一致，对 subagents/agent-ready 影响很大。

2. **[#2693 HarnessPosture: model-specific context and subagent policy](https://github.com/Hmbown/CodeWhale/issues/2693)**（6 条评论）  
   讨论如何按 provider/model 路由设置不同的 harness 策略。来自 DeepSeek V4、Xiaomi MiMo v2.5 的测试反馈：它们更适合 cache-heavy/prefix-stable 的启动上下文。

3. **[#1917 Proposal: universal PreToolUse/PostToolUse hook layer for Cancel/Pause/Resume across all action types](https://github.com/Hmbown/CodeWhale/issues/1917)**（5 条评论）  
   提出统一 Hook 生命周期层，为所有动作类型提供 Cancel/Pause/Resume 能力。这是 slash commands 产品化重构后的关键架构方向。

4. **[#5424 v0.9.7: Codewhale TUI crashing](https://github.com/Hmbown/CodeWhale/issues/5424)**（5 条评论）  
   用户等待输出约 1 分钟后 TUI 直接退出。属于高影响用户侧 bug，并已成为 v0.9.8 发布阻断条件。

5. **[#5322 Regression: output area doesn't fill wide terminals](https://github.com/Hmbown/CodeWhale/issues/5322)**（5 条评论，已关闭）  
   v0.9 中将输出区域限制在最大宽度，宽屏终端大量留白，属于明显 UX 回归。

6. **[#5367 Configurable model-visible read/tool-result size limits for self-hosted long-context models](https://github.com/Hmbown/CodeWhale/issues/5367)**（4 条评论）  
   自托管 DeepSeek V4 用户希望可配置 `read` 等工具结果的体积上限，否则约 64 KiB 文件需要额外约 20 次读取，成本偏高。

7. **[#5403 main is red on both platforms across all four completed runs](https://github.com/Hmbown/CodeWhale/issues/5403)**（2 条评论）  
   macOS 与 Windows 上共 4 次完成的 main 分支 CI 运行全部失败，属于工程健康度 P0 类问题。

8. **[#5426 give scouts/reviewers a usable read-only shell (split the classifier)](https://github.com/Hmbown/CodeWhale/issues/5426)**（2 条评论，已关闭）  
   只读 shell 分类器过严，scouts/reviewers 连 `git -C … log` 这类常规检查命令都被拒绝。团队已通过 PR #5428/#5438/#5435 进行修复和策略明确。

9. **[#5413 Regression: sudo](https://github.com/Hmbown/CodeWhale/issues/5413)**（2 条评论，已关闭）  
   v0.9.7 在 wheel group + yolo 模式下无法使用 `sudo`，相比 v0.8.65 是权限回归，被列为 v0.9.8 blocker。

10. **[#5370 P0: web UI looks broken](https://github.com/Hmbown/CodeWhale/issues/5370)**（2 条评论，已关闭）  
    公共 web UI 被报告“看起来完全坏了”，涉及功能与外观两个层面，需要对照 harness 参考重做。

## 重要 PR 进展

1. **[PR #5425 v0.9.8 blockers: sudo/NNP opt-out (#5413) and abort-class terminal poisoning (#5424)](https://github.com/Hmbown/CodeWhale/pull/5425)**（已关闭）  
   修复两个 v0.9.8 阻断问题：`sudo` 回归、abort 类终端中毒。虽然 tag 已存在，但发布产物尚未公开。

2. **[PR #5428 feat(fleet): usable read-only shell for scouts/reviewers (#5426)](https://github.com/Hmbown/CodeWhale/pull/5428)**（已关闭）  
   拆分只读 shell 分类器，让 `ShellPolicy::ReadOnly` agent 在不影响父级 parallel auto-approve 的前提下，可执行 git、find、glob、pipeline 等常用只读命令。

3. **[PR #5438 fix(fleet): the scout posture gate must honor #5428's read-only shell (#5426)](https://github.com/Hmbown/CodeWhale/pull/5438)**（打开）  
   针对 #5428 的实机 dogfood 结果，修正在新 binary 上 scout 仍被拒绝 `git log` 等三条标准检查命令的问题。

4. **[PR #5435 fix(fleet): delegation never widens authority (#5426)](https://github.com/Hmbown/CodeWhale/pull/5435)**（已关闭）  
   明确策略：delegation 只转移工作，不转移权限；scout → builder 不扩大授权边界。补充文档到 `docs/SUBAGENTS.md`。

5. **[PR #5401 fix: CodeQL Highs (#107, #88–#106) and prepare GHSA-8hp3 / GHSA-3mgh](https://github.com/Hmbown/CodeWhale/pull/5401)**（打开）  
   修复 CodeQL 报告的高危问题，包括明文日志泄露、潜在安全公告准备等。不涉及 v0.9.8 发布内容。

6. **[PR #5404 fix(client): fail closed on SSE UTF-8 split across HTTP/2 DATA (#5374)](https://github.com/Hmbown/CodeWhale/pull/5404)**（打开）  
   修复 DeepSeek Flash 在 macOS 上流式输出乱码的问题。根因是 HTTP/2 DATA 帧可能拆分多字节 UTF-8 字符，旧的 `String::from_utf8_lossy` 会造成 U+FFFD/CJK 乱码。

7. **[PR #5405 feat(tui): configurable model-visible read/tool-result budgets (#5367)](https://github.com/hmbown/CodeWhale/pull/5405)**（打开）  
   将 `read` 50 KiB、`read_file` 16 KiB、tool-result 上下文 12,000 字符等上限改为可按模型/HarnessProfile 配置，面向自托管长上下文模型。

8. **[PR #5406 feat(tui): prefab provider templates and test-connection (#5350)](https://github.com/Hmbown/CodeWhale/pull/5406)**（打开）  
   为 OpenCode Zen、OpenCode Go、Agnes、SenseNova 等第三方 provider 提供预置模板，用户只需填入 API key；同时新增连接测试能力。

9. **[PR #5422 feat: register Eden AI as a named provider](https://github.com/Hmbown/CodeWhale/pull/5422)**（已关闭）  
   以与 OpenRouter 相同的方式将 Eden AI 注册为命名 provider，支持 500+ 模型及欧盟区域 endpoint。

10. **[PR #5431 fix(release): asset freshness vs the successful release job's started_at (#5429)](https://github.com/Hmbown/CodeWhale/pull/5431)**（已关闭）  
    修复 `gh run rerun --failed` 导致 release 资产被误判为 stale 的问题；此前一次 v0.9.8 发布因此多耗费三次尝试。

## 功能需求趋势

- **模型上下文与工具结果预算可配置化**：社区明显希望支持自托管长上下文模型，按模型/HarnessProfile 调整 read 和 tool-result 的体积上限。代表：[#5367](https://github.com/Hmbown/CodeWhale/issues/5367)、[#5405](https://github.com/Hmbown/CodeWhale/pull/5405)、[#2693](https://github.com/Hmbown/CodeWhale/issues/2693)。

- **Agent 沙箱与权限语义细化**：多个 issue 指向“只读 shell 过严”“sudo 失效”“bwrap 沙箱无法访问系统库/`/dev/null`”“SPM 编译失败”等边界问题。代表：[#5426](https://github.com/Hmbown/CodeWhale/issues/5426)、[#5123](https://github.com/Hmbown/CodeWhale/issues/5123)、[#5413](https://github.com/Hmbown/CodeWhale/issues/5413)、[#2617](https://github.com/Hmbown/CodeWhale/issues/2617)、[#5410](https://github.com/Hmbown/CodeWhale/issues/5410)。

- **新模型/Provider 接入成本降低**：除 Eden AI 外，DeepSeek dsh 集成与 provider 预置模板也体现了“更简单接入第三方模型”的方向。代表：[#5422](https://github.com/Hmbown/CodeWhale/pull/5422)、[#5434](https://github.com/Hmbown/CodeWhale/issues/5434)、[#5406](https://github.com/Hmbown/CodeWhale/pull/5406)。

- **TUI 可发现性与信息密度优化**：包括 Hotbar 默认隐藏、workflow/goal/auto 模式入口不够显眼、宽屏下 transcript 左偏、状态栏颜色语法未文档化等。代表：[#5442](https://github.com/Hmbown/CodeWhale/issues/5442)、[#5439](https://github.com/Hmbown/CodeWhale/issues/5439)、[#5436](https://github.com/Hmbown/CodeWhale/issues/5436)、[#5437](https://github.com/Hmbown/CodeWhale/issues/5437)。

- **数据诚实性与元数据 provenance**：社区审计关注“把猜测当事实”：未知模型输出上限被标成 documented、`_Nk` 后缀暗示验证过的上下文窗口。代表：[#5440](https://github.com/Hmbown/CodeWhale/issues/5440)、[#5441](https://github.com/Hmbown/CodeWhale/issues/5441)、[#4170](https://github.com/Hmbown/CodeWhale/issues/4170)。

- **发布与 CI 可靠性**：main 全红、npm 发布卡在 2FA、release asset freshness 误判，都是发布自动化中的高优先级问题。代表：[#5403](https://github.com/Hmbown/CodeWhale/issues/5403)、[#5299](https://github.com/Hmbown/CodeWhale/issues/5299)、[#5429](https://github.com/Hmbown/CodeWhale/issues/5429)、[#5431](https://github.com/Hmbown/CodeWhale/pull/5431)。

## 开发者关注点

- **TUI 稳定性与终端恢复**：v0.9.7 的 TUI 崩溃、abort 类终端中毒直接影响日常使用，且与发布阻塞直接相关（[#5424](https://github.com/Hmbown/CodeWhale/issues/5424)、[#5425](https://github.com/Hmbown/CodeWhale/pull/5425)）。

- **权限回归与沙箱边界问题**：`sudo` 从可用变不可用、只读 shell 分类器过严、bwrap 沙箱拒绝常见开发操作，说明沙箱策略需要更细粒度的控制与说明（[#5413](https://github.com/Hmbown/CodeWhale/issues/5413)、[#5123](https://github.com/Hmbown/CodeWhale/issues/5123)、[#5410](https://github.com/Hmbown/CodeWhale/issues/5410)）。

- **自托管长上下文模型成本过高**：默认工具结果上限保守，导致大文件多次读取，社区希望可配置 budget 并落到底层 HarnessProfile（[#5367](https://github.com/Hmbown/CodeWhale/issues/5367)、[#5405](https://github.com/Hmbown/CodeWhale/pull/5405)）。

- **CI 与测试稳定性需要优先治理**：主分支全红、flaky verifier 测试、macOS plugin PTY 挂起、12 个未 triage 的 `#[ignore]` 测试，正在消耗维护者大量精力（[#5403](https://github.com/Hmbown/CodeWhale/issues/5403)、[#5056](https://github.com/Hmbown/CodeWhale/issues/5056)、[#5408](https://github.com/Hmbown/CodeWhale/pull/5408)）。

- **发布流程仍有手工摩擦**：npm 发布依赖浏览器登录 + 2FA，release asset 在 job rerun 后误判为 stale，社区期望向 trusted publishing 和无人工介入方向演进（[#5299](https://github.com/Hmbown/CodeWhale/issues/5299)、[#5429](https://github.com/Hmbown/CodeWhale/issues/5429)）。

</details>

<details>
<summary><strong>DeepSeek Harness</strong> — <a href="https://github.com/deepseek-ai/deepseek-harness">deepseek-ai/deepseek-harness</a></summary>

过去24小时无活动。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*