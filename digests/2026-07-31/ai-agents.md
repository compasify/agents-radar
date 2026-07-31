# OpenClaw 生态日报 2026-07-31

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-07-31 01:46 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 — 2026-07-31

## 今日速览

过去24小时项目活跃度极高：**Issues 更新 500 条**（新开/活跃 483 条，关闭 17 条），**PR 更新 500 条**（合并/关闭 84 条），当日合并率约为 16.8%。最受关注的热点集中在三类问题上：**会话状态丢失/消息丢失**（#25592 文本泄漏、#115326 崩溃循环抑制频道、#91588 内存泄漏）、**认证与安全边界**（#51396、#37634）、以及**本地模型接入与多智能体协作**。今日无新版本发布，但 PR 队列中已有多个 P0/P1 修复处于"待维护者审查"或"待验证"状态，其中包括一个修复网关启动阻塞的 P1 PR（#116558）。整体判断：项目处于**高活跃度、高问题密度的密集修复期**，稳定性是当前社区最强烈的诉求。

---

## 项目进展

今日无版本发布。在合并/关闭的 84 个 PR 中，以下两个已关闭 PR 具有代表性：

### 已合并/关闭 PR

- **[PR #116216] fix(ai): prevent websocket cache clobber on concurrent acquire**（已关闭）— 修复了并发 Codex WebSocket 请求可能破坏共享会话缓存、导致后续轮次上下文损坏的问题。属于并发正确性修复，直接关涉 LLM 会话连续性。
  https://github.com/openclaw/openclaw/pull/116216

- **[PR #116613] fix(ci): settle custodian mobile layout assertions**（已关闭）— 修复了移动端布局 E2E 测试的 CI 稳定性问题，消除因响应式布局切换导致的测试抖动。
  https://github.com/openclaw/openclaw/pull/116613

### 待审查高价值修复（已具备充分验证证据，等待维护者处理）

- **[PR #116558] fix: gateway wedges on every startup when legacy runtime-state files conflict with SQLite**（P1，🦞 diamond lobster）— 修复 6.x 升级用户在旧版 runtime-state 文件与 SQLite 冲突时网关每次启动均无法就绪的严重问题。当前状态为 `ready for maintainer look`，验证证据充分。
  https://github.com/openclaw/openclaw/pull/116558

- **[PR #116593] fix(android): preserve device work across lifecycle changes**（P1，XL 规模）— 修复 Android 手机与 Wear 配对设备在 Activity 生命周期变化时丢失或错误路由任务的问题。
  https://github.com/openclaw/openclaw/pull/116593

- **[PR #116579] fix(gateway): avoid false port-busy reports behind Tailscale Serve**（P1）— 消除用户在 Tailscale Serve 后面运行网关时收到虚假端口占用误报的问题。
  https://github.com/openclaw/openclaw/pull/116579

- **[PR #116611] fix(google): stop offering unsupported CLI setup**（P1）— 移除 Gemini CLI OAuth 与 Antigravity CLI 的自动探测/引导，因为这两条 CLI 私有认证路径在 setup 阶段无法被安全验证。
  https://github.com/openclaw/openclaw/pull/116611

**趋势判断**：当前 PR 队列呈现典型的"存量问题集中清理"特征，大量修复面向多端兼容（macOS/Android/Wear OS）、本地模型接入（LM Studio/Ollama）以及会话状态一致性。合并率不高但队列质量整体在提升，多个高优修复已进入"待维护者查看"阶段，近期可能有集中合并。

---

## 社区热点

### 讨论热度最高的 Issues

1. **#25592 — Text between tool calls leaks to messaging channels**（38 条评论，🦞 diamond lobster，P1）
   智能体在工具调用之间产生的内部处理文本（错误处理、处理确认等）被错误地路由到 Slack/iMessage 等消息频道，对用户产生严重 UX 干扰。该问题横跨会话状态与安全两个维度，社区讨论热度最高（过去 24 小时新增评论最多）。
   https://github.com/openclaw/openclaw/issues/25592

2. **#91588 — Gateway Memory Leak: RSS grows from 350MB to 15.5GB over days**（22 条评论，P0，🦞 platinum hermit）
   OpenClaw 网关进程存在严重内存泄漏，2-3 天内 RSS 从 ~350MB 涨至 15.5GB，最终触发 OOM killer 和反复的 `launchd-handoff` 重启循环。这是当前最严重的稳定性问题之一，升级路径上对长跑用户影响极大。
   https://github.com/openclaw/openclaw/issues/91588

3. **#115326 — Crash-loop breaker suppresses Discord/WhatsApp permanently**（20 条评论，P1，回归缺陷）
   网关崩溃循环保护器在故障恢复后永久抑制 Discord/WhatsApp 频道，且文档中记载的恢复路径（`channels.start`）因 WebSocket 1006 错误而失效。用户被"卡死"在频道永远无法恢复的状态中。
   https://github.com/openclaw/openclaw/issues/115326

4. **#22438 — Tiered bootstrap file loading**（17 条评论，P2，功能建议）
   提出分层 bootstrap 文件加载机制，以解决大工作区用户在每个会话（包括子代理和 cron 任务）中都加载全部文件导致的 token 浪费问题。涉及的场景真实且广泛，是社区认可的优化方向。
   https://github.com/openclaw/openclaw/issues/22438

5. **#102175 — Embedded prompt cache breaks across boundaries**（16 条评论，P2，回归缺陷）
   嵌入式会话在跨 room-event、policy、Responses 等边界时丢失 provider prompt-cache 复用，同一会话的模型可见工具清单在 44 次调用中持续变动，导致缓存命中率严重下降、成本上升。
   https://github.com/openclaw/openclaw/issues/102175

**热点诉求分析**：当前社区最强烈的三个信号是——① **消息路由可靠性**（文本泄漏 + 频道被永久抑制 + 消息丢失）；② **长跑稳定性**（内存泄漏 + 崩溃循环）；③ **成本与 token 效率**（prompt cache 失效 + bootstrap 全量加载）。其中"消息路由"和"内存泄漏"已属于 P0/P1 级别且直接影响生产可用性，预计是下一阶段维护者优先投入的方向。

---

## Bug 与稳定性

### P0 — 严重崩溃/数据丢失

- **[#91588] Gateway 内存泄漏（RSS 350MB→15.5GB 直至 OOM）** — 2-3 天内导致 OOM 崩溃和反复重启，是当前最严重的稳定性问题。**尚无 fix PR**。相关 PR #116558 修复的是旧 runtime-state 文件冲突导致的启动阻塞，并非本问题。
  https://github.com/openclaw/openclaw/issues/91588

- **[#48920] Live Docs 领先于发布版本** — 文档中宣传的 `IsolatedSessions` 功能在 2026.3.13 版本中不存在，属于发布流程问题（P0，ux-release-blocker）。**尚无 fix PR**。
  https://github.com/openclaw/openclaw/issues/48920

### P1 — 高危回归/功能失效

- **[#115326] Crash-loop breaker 永久抑制 Discord/WhatsApp 且恢复路径失效**（回归）— WebSocket 1006 错误导致 `channels.start` 恢复失败。**尚无 fix PR**。
  https://github.com/openclaw/openclaw/issues/115326

- **[#25592] 工具调用间文本泄漏至消息频道**（P1，安全相关）— 内部处理输出对用户可见。**尚无 fix PR**。
  https://github.com/openclaw/openclaw/issues/25592

- **[#102175] 嵌入式 prompt cache 跨边界失效**（回归）— 导致缓存命中率下降与 token 成本上升。**尚无 fix PR**。
  https://github.com/openclaw/openclaw/issues/102175

- **[#29387] agentDir 中的 Bootstrap 文件被静默忽略** — 仅 workspace 目录下的文件被注入系统提示词。**尚无 fix PR**。
  https://github.com/openclaw/openclaw/issues/29387

- **[#51396] clearUnboundScopes 无条件剥离非本地 token-auth 客户端的 operator scopes**（回归，安全相关）— **已有 fix PR 关联（linked-pr-open）**。
  https://github.com/openclaw/openclaw/issues/51396

- **[#116201] Realtime voice 会话可无界保留 provider/consult 状态** — 资源上限缺失，慢速/突发场景下可能累积陈旧工作。**尚无 fix PR**（新开 issue，7 条评论）。
  https://github.com/openclaw/openclaw/issues/116201

### P1 — 已有修复 PR 在途

- **[#116558] 旧版 runtime-state 文件致网关每次启动即卡死**（PR 已就绪，待维护者审查）
  https://github.com/openclaw/openclaw/pull/116558

- **[#116216] Codex WebSocket 缓存并发覆写**（PR 已关闭，修复完成）
  https://github.com/openclaw/openclaw/issues/116216

- **[#116525] 无关会话清理永久停止 GPT-Live browser broker**（PR 状态为 `queueable-fix` + `source-repro`，关联修复已排队）
  https://github.com/openclaw/openclaw/issues/116525

- **[#116604] Codex 在最终答案后收到迟到事件时丢弃真实回答**（PR 待验证）
  https://github.com/openclaw/openclaw/pull/116604

### 值得注意的社区报告 Bug

- **[#51429] 工作路径被硬编码进代码并合入发布（"wangtao" 目录）** — 中文用户报告 OpenClaw 在 `~` 下创建了 `/Users/wangtao` 目录，疑似某位开发者将个人工作路径写死进代码。该问题引发社区对代码审查流程的质疑。
  https://github.com/openclaw/openclaw/issues/51429

- **[#53628] XDG_CONFIG_HOME 在技能安装时未被处理** — Docker 安装场景下环境变量未展开，导致技能安装路径错误。
  https://github.com/openclaw/openclaw/issues/53628

---

## 功能请求与路线图信号

### 可能进入下一版本的功能请求

| 功能请求 | Issue/PR | 信号强度 |
|---------|----------|---------|
| **分层 bootstrap 文件加载**（按需/分级加载上下文文件，节省 token） | [#22438](https://github.com/openclaw/openclaw/issues/22438) | ★★★ 17 条评论，有具体设计提案（tiered loading） |
| **Telegram Business Bot 支持**（business_message/business_connection） | [#20786](https://github.com/openclaw/openclaw/issues/20786) | ★★★ 8 条评论 + 6 👍，有 linked PR |
| **Per-agent 成本预算**（网关级别每日/每月上限） | [#42475](https://github.com/openclaw/openclaw/issues/42475) | ★★★ 12 条评论，linked PR 在途 |
| **插件工具 yield 机制**（工具可将执行权交还外部交互面，等待回调后继续） | [PR #101665](https://github.com/openclaw/openclaw/pull/101665) | ★★★ L 规模，已就绪待审查，feature 标记 |
| **技能自定义 setup 钩子**（SKILL.md 定义安装/更新后脚本） | [#80213](https://github.com/openclaw/openclaw/issues/80213) | ★★☆ 8 条评论 + 4 👍 |
| **streamTo="parent" 支持 subagent runtime** | [#47597](https://github.com/openclaw/openclaw/issues/47597) | ★★☆ 8 条评论，明确的使用场景 |
| **多智能体协作增强（能力画像 + 共享黑板 + 分层记忆 + token 治理）** | [#35203](https://github.com/openclaw/openclaw/issues/35203) | ★★☆ 10 条评论，RFC 提案 |
| **系统事件优先级/绕过队列模式**（保证告警在会话拥塞时可靠触达） | [#50739](https://github.com/openclaw/openclaw/issues/50739) | ★★☆ 8 条评论 + 2 👍 |
| **按失败类别隔离认证异常的 provider（quarantine auth-broken providers）** | [#47910](https://github.com/openclaw/openclaw/issues/47910) | ★★☆ 8 条评论，有真实日志佐证 |
| **OpenAI Jina v5 任务特定 embedding 配置**（queryTask/documentTask） | [PR #74444](https://github.com/openclaw/openclaw/pull/74444) | ★★☆ 已就绪 5 个月，待维护者查看 |

### 路线图信号解读

- **本地模型生态是明确方向**：今日有 **两个** 本地模型相关 PR（优化 LM Studio 引导流程的 #116606、修复 Ollama thinking 级别保留的 #116584），结合已有的 Ollama/LM Studio 扩展，说明项目正在加大本地模型接入体验的投入。
- **成本治理正在成为刚需**：per-agent 成本预算（#42475）与 bootstrap 分层加载（#22438）都直接指向 token 成本控制，与 prompt cache 失效问题（#102175）共同构成社区对"成本可预测性"的集中诉求。
- **多智能体协作仍是高频提案方向**：本周活跃提案含能力画像/共享黑板（#35203）、共享 LLM + 隔离会话（#48874）、`announceTarget` 路由控制（#27445）、post-subagent 钩子（#22358）等，说明社区对子代理工作流编排有持续且多样化的需求。

---

## 用户反馈摘要

### 高频痛点

1. **内部处理文本泄漏到用户频道**（#25592）：用户报告智能体在工具调用间隙产生的错误处理、处理确认等文本被当作正式消息发送到 Slack/iMessage 等频道，"内部处理输出对外可见"造成严重的 UX 和安全问题。
2. **频道被永久"静音"且无法恢复**（#115326）："网关启动成功但 Discord 和 WhatsApp 被永久抑制，因为 crash-loop breaker 处于活跃状态，文档中的 `channels.start` 恢复路径根本无效。" — 用户对"文档化恢复路径不可用"表达了强烈不满。
3. **内存泄漏导致反复 OOM 崩溃**（#91588）："正常使用 2-3 天后 RSS 达到 15.5GB 触发 OOM killer，`launchd-handoff` 反复重启循环。" — 长跑用户受影响最大。
4. **Bootstrap 文件被静默忽略**（#29387）："在 agentDir 中放置 SOUL.md/AGENTS.md 等文件完全没有效果，只有 workspace 目录下的才被加载。" — 用户对"静默失败"表示困惑和不信任。
5. **中文社区对代码审查的质疑**（#51429）："这位 wangtao 是谁？怎么把个人路径硬编码进代码还被合并发布了？" — 用户对发布流程的严谨性提出直接质疑。

### 积极反馈与期待

- **功能请求热情高**：Telegram Business Bot（+6 👍）、Per-agent dreaming 配置（+5 👍）、`announceTarget` 选项（+5 👍）、技能 setup 钩子（+4 👍）等请求获得较多社区支持，说明用户对 OpenClaw 的扩展性有明确期待。
- **本地模型接入受关注**：多个 PR 针对 LM Studio/Ollama 引导流程优化，用户对"本地模型 + OpenClaw"组合有明显需求。
- **成本控制需求急迫**：多个 issue/PR 围绕 token 优化（bootstrap 分层、prompt cache 修复、per-agent 预算），用户对成本敏感度正在上升。

---

## 待处理积压

### 长期未响应的重要 Issues（按严重程度排序）

1. **[#91588] Gateway 内存泄漏（P0，🦞 platinum hermit）** — 创建于 2026-06-09，至今已 52 天，仍为 OPEN 且无 fix PR。期间有 22 条评论持续跟进展，用户已提供完整的环境信息和复现路径。
   https://github.com/openclaw/openclaw/issues/91588

2. **[#29387] agentDir bootstrap 文件被静默忽略（P1，🦞 diamond lobster）** — 创建于 2026-02-28，已积压 153 天。5 👍，14 条评论，用户等待修复已有 5 个月。
   https://github.com/openclaw/openclaw/issues/29387

3. **[#37634] sandbox workspaceAccess=none 时工作区只读（P1，🦞 diamond lobster）** — 创建于 2026-03-06，已积压 147 天。7 👍，9 条评论。隔离工作区挂载为只读导致工具无法正常写入。
   https://github.com/openclaw/openclaw/issues/37634

4. **[#48003] Steer 模式无法在回合中注入消息（P1，🦞 platinum hermit）** — 创建于 2026-03-16，已积压 137 天。4 👍，15 条评论。已有根因分析（commit 9889c6da5 引入的 KeyedAsyncQueue），需要产品决策。
   https://github.com/openclaw/openclaw/issues/48003

5. **[#41744] Feishu 读取图片后媒体丢失（P1，🦞 platinum hermit）** — 创建于 2026-03-10，已积压 143 天。已有 linked PR，但处于 `needs-live-repro` 状态。
   https://github.com/openclaw/openclaw/issues/41744

6. **[#40001] write 工具缺少追加模式，cron 会话覆盖共享文件（P1）** — 创建于 2026-03-08，已积压 145 天。导致 `memory/YYYY-MM-DD.md` 等共享文件被静默覆盖。
   https://github.com/openclaw/openclaw/issues/40001

7. **[#50165] Subagent 显示已完成但底层任务仍在执行** — 创建于 2026-03-19，已积压 134 天。任务状态不可靠的问题直接关涉用户对系统的基本信任。
   https://github.com/openclaw/openclaw/issues/50165

### 长期未合并的 PR（提醒维护者关注）

1. **[PR #74444] Jina v5 任务特定 embedding 配置** — 已开放 93 天，状态 `ready for maintainer look`，功能简单明确，低风险。
   https://github.com/openclaw/openclaw/pull/74444

2. **[PR #72314] 无 ID 入站重试去重** — 已开放 96 天，状态 `ready for maintainer look`，属于消息可靠性增强。
   https://github.com/openclaw/openclaw/pull/72314

3. **[PR #102300] Google Chat 配置文档修复** — 已开放 23 天，纯文档修复，`clawsweeper:automerge` 循环中。
   https://github.com/openclaw/openclaw/pull/102300

### 积压风险提示

当前积压清单中，**P1 级别且超过 120 天未修复的问题**占比极高（#29387、#37634、#48003、#41744、#40001）。这些长期未解决的问题集中在**会话状态管理**和**文件系统行为**两个核心领域，正在持续消耗社区信任。建议维护团队在下一轮迭代中对上述"超龄 P1"做专项清理。

---

> 本报告由 AI 基于 OpenClaw 公开 GitHub 数据自动生成，数据统计周期为 2026-07-30 至 2026-07-31。所有链接均指向原始 Issue/PR。

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**报告日期：** 2026-07-31  
**覆盖项目：** OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、Moltis、CoPaw、ZeptoClaw、ZeroClaw  
**数据窗口：** 2026-07-30 至 2026-07-31（过去 24 小时）

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于「密集修复期」与「架构分化期」的交汇点。主流项目普遍面临会话状态一致性、内存泄漏、渠道消息可靠性等稳定性质疑，同时本地模型接入、成本治理、多智能体协作与更严格的安全边界成为跨项目共识。新进入者通过差异化切入细分场景：PicoClaw 主打 $10 硬件上的极致轻量，CoPaw 强化桌面 GUI 自动化，IronClaw 以 Rust 重构底层架构。整体生态活跃度极高——仅统计的 12 个项目中，有 9 个项目日 PR 更新超过 10 条，但**「功能丰富度」正向「可生产性」让位**，稳定性、安全与成本可预测性正成为用户选择框架的首要考量。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 合并/关闭 PR | Release | 活跃度判定 | 健康度评估 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500（新开/活跃 483，关闭 17） | 500（合并/关闭 84） | 84（16.8%） | 无 | 🔥 极高 | 高活跃、高问题密度，稳定性是核心诉求 |
| **CoPaw** | 25（活跃 18，关闭 7） | 48（合并/关闭 26） | 26（54.2%） | 无 | 🔥 高 | 中高活跃，合并效率高，但存性能回归与数据完整性隐患 |
| **NanoBot** | 7（活跃 5，关闭 2） | 48（合并/关闭 31） | 31（64.6%） | 无 | 🔥 高 | 活跃度高，响应及时，健康度良好 |
| **IronClaw** | 40（活跃 34，关闭 6） | 50（合并/关闭 21） | 21（42.0%） | 无（release PR 积压 28 天） | 🔥 高 | 高强度迭代，架构重构+技能系统双主线并行 |
| **Hermes Agent** | 50（全部活跃/新开） | 50（合并/关闭 2） | 2（4.0%） | v2026.7.30 (v0.19.1) | 🔥 高 | 评审积压严重，合并率极低，健康度中等 |
| **ZeroClaw** | 14（全部活跃/新开） | 50（全部待合并） | 0（0%） | 无 | 🔥 高输入 | 安全响应快，但合并瓶颈严重，输出阻塞 |
| **NanoClaw** | 2（新增） | 18（合并/关闭 6） | 6（33.3%） | 无 | 较高 | 基础设施与供应链安全方向清晰，核心交互 bug 需关注 |
| **LobsterAI** | 0 | 10（合并/关闭 8） | 8（80.0%） | 2026.7.29 | 较高 | 合并效率高，企业级能力+运营体系推进中 |
| **PicoClaw** | 7（活跃 4，关闭 3） | 17（合并/关闭 5） | 5（29.4%） | 无 | 中等偏上 | 稳定迭代，Bedrock 缓存合并，依赖更新占近半数 |
| **Moltis** | 2（新开） | 4（合并/关闭 1） | 1（25.0%） | 无 | 中等偏上 | 渠道功能完善+安全加固，Vault 漏洞需优先处理 |
| **ZeptoClaw** | 0 | 1（待合并） | 0 | 无 | 低 | 安全加固窗口期，仓库健康度良好 |
| **NullClaw** | 0 | 0 | 0 | 无 | 无活动 | 暂停/休眠 |

**关键观察：** 24 小时内 9 个项目 PR 更新 ≥10 条，生态整体高度活跃；但头部项目合并率差异悬殊——LobsterAI（80%）与 NanoBot（64.6%）交付顺畅，而 ZeroClaw（0%）与 Hermes（4.0%）出现「输入活跃、输出阻塞」的评审瓶颈。

---

## 3. OpenClaw 在生态中的定位

### 3.1 不可撼动的规模优势

| 指标 | OpenClaw | 其余项目对比 |
|---|---|---|
| 日 Issues 更新 | 500 条 | IronClaw（40）≈ OpenClaw 的 1/12 |
| 日 PR 更新 | 500 条 | Hermes/ZeroClaw（50）≈ OpenClaw 的 1/10 |
| P0/P1 级问题 | 8 个 P0/P1 在追踪 | 多数项目 1-3 个 |
| 功能请求信号 | 10 个 ★★☆ 以上提案 | 多数项目 2-5 个 |

OpenClaw 的社区规模是生态中第二梯队（IronClaw、CoPaw）的 **10 倍以上**，其 Issue/PR 密度本身即构成生态级的影响力——大量第三方适配（如 LobsterAI 的 cowork 功能通过 OpenClaw 工具流路由、ZeroClaw 引用 OpenClaw 的 PR 说明跨项目共性问题）表明它实质上是**事实标准参照系**。

### 3.2 技术路线差异

OpenClaw 采用 **「通用网关 + 多渠道适配 + 可插拔模型」** 的全能型路线，强调 macOS/Android/Wear OS 多端覆盖，以及对本地模型（LM Studio/Ollama）与主流云模型的同时支持；与之对比：

- **IronClaw**（Rust）走「内核收窄 + 组合层净化」的目标架构重构路线，更强调代码库工程化
- **PicoClaw**（Go）验证了「10MB RAM + 秒级启动」的极端轻量路线
- **Hermes Agent** 侧重桌面应用与多 profile 隔离
- **CoPaw** 深耕桌面 GUI 自动化（accessibility-first + Tauri 控制模式）

### 3.3 社区成熟度差异

OpenClaw 社区已出现 **「用户提交高质量复现报告 → 社区协同分析 → 修复 PR 排队」** 的成熟协作模式（如 #91588 内存泄漏已跟踪 52 天、22 条评论持续补充证据；#51429 中文用户发现硬编码路径）。其风险在于 P0/P1 积压（内存泄漏 52 天无 fix、多个 P1 超 120 天未修复），在稳定性和响应速度上正被 NanoBot、CoPaw 等轻量项目反超。**OpenClaw 的规模优势仍在，但「稳定性口碑」正成为其最大软肋。**

---

## 4. 共同关注的技术方向

### 4.1 会话状态一致性与消息可靠性（8 个项目）

| 具体诉求 | 涉及项目 |
|---|---|
| 工具调用间内部文本泄漏到用户频道 | OpenClaw（#25592）、PicoClaw（#3279 工具调用格式泄漏）、Hermes（记忆上下文被当作权威指令）、CoPaw（用户指令被系统重构漂移） |
| 崩溃循环/进程残留导致渠道永久不可用 | OpenClaw（#115326）、Hermes（更新器 PID 误判）、LobsterAI（NSIS 进程残留）、ZeroClaw（WATI 移除） |
| 消息丢失/重复/状态不可靠 | OpenClaw（#91588 内存泄漏、#116216 缓存覆写）、NanoBot（finish_reason 误路由）、CoPaw（#6558 多会话数据完整性）、NanoClaw（#3153 message_not_found） |

### 4.2 安全边界与权限治理（7 个项目）

| 具体诉求 | 涉及项目 |
|---|---|
| Webhook/端点认证缺失或 fail-open | ZeroClaw（#9565 S0）、Moltis（#1177 CWE-306）、NanoBot（#4791 DoS 速率限制） |
| 特权命令/operator 权限隔离 | OpenClaw（#51396）、Moltis（#1170）、IronClaw（#6931 角色门禁） |
| 密钥/环境变量泄漏 | Hermes（#62935 .env 泄漏）、ZeptoClaw（PR #645 子进程密钥清理）、OpenClaw（#116611 CLI 私有认证） |
| 多租户数据隔离 | IronClaw（#6900 跨用户内存泄漏、#6866 共享主目录）、LobsterAI（#2409 账号级隔离） |

### 4.3 成本控制与 Token 效率（6 个项目）

- **OpenClaw**：#22438 分层 bootstrap 加载、#102175 prompt cache 边界失效、#42475 per-agent 成本预算
- **Hermes Agent**：#75115 空响应重复计费（单次 $2.33）、#34823 语义级技能检索、#32827 失败重试成本放大
- **PicoClaw**：#3163 Bedrock 提示词缓存（读取成本 0.1×）——**已合并落地**
- **NanoBot**：#5172 持久化压缩上下文（采纳 ARC-AGI-3 报告能力）
- **CoPaw**：#6307 v2.0 固定 2s 开销
- **IronClaw**：技能系统可测量激活阈值

### 4.4 本地模型与混合路由（5 个项目）

- **OpenClaw**：两个本地模型 PR（LM Studio 引导 #116606、Ollama thinking 级别 #116584）
- **ZeroClaw**：#5287 compact local_small runtime profile、#7951 按任务难度路由本地/云
- **PicoClaw**：DashScope TTS + 微信语音（中国本地生态）
- **Hermes Agent**：Honcho 记忆 provider 集成（SIGABRT 问题）
- **CoPaw**：Qwen 生态原生支持

### 4.5 MCP 生态深化（5 个项目）

- **PicoClaw**：#3302 OAuth 2.1 MCP 支持（原 Issue 关闭当天被重提，需求极强）
- **CoPaw**：#6524 MCP server 重启自动恢复、#6557 工具名规范化
- **Hermes Agent**：#43633 MCP HTTP 带认证服务（积压 51 天）
- **IronClaw**：#6930 托管 MCP 服务器注册（支持 OAuth 自动检测）
- **NanoBot**：WebUI 与 MCP 工具链集成

### 4.6 渠道适配持续扩展（6 个项目）

Telegram Business Bot（OpenClaw #20786）、Telegram 内联按钮（Moltis #1178）、Telegram 自定义 API 端点（NanoBot #4919）、DingTalk 图片消息（PicoClaw #3283）、飞书会话身份分离（Hermes #75104）、Slack 原生斜杠命令（IronClaw #6931，已合并）、Signal 文档修复（NanoClaw #2685）——**渠道层竞争已进入「交互深度」阶段**，浅层消息收发已无法满足用户期望。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构 | 核心差异化 |
|---|---|---|---|---|
| **OpenClaw** | 全功能个人 AI 助手：多渠道、多模型、多端 | 追求功能全面的开发者/高阶用户 | 网关 + 渠道适配器 + 可插拔模型，支持云/本地混跑 | 生态最大、适配最广，事实标准 |
| **CoPaw** | 桌面 GUI 自动化 + 会话/Agent 管理 | 桌面端重度用户、Qwen 模型用户 | Tauri 桌面应用 + ACP 协议 + 前端状态管理 | accessibility-first 桌面自动化，中国生态（Qwen/AgentScope） |
| **Hermes Agent** | 桌面应用 + 多 profile 隔离 + 后台任务管理 | 多实例/企业级桌面用户 | Python + TUI + 桌面端，Honcho 记忆 | 多 profile 与 cron/后台任务编排 |
| **IronClaw** | Rust 原生实现 + 技能系统 + 严格架构治理 | 对性能与工程化要求高的开发者 | Rust + libSQL + WebUI v2，目标架构 WS0 重构 | 语言红利 + 可证明的架构演进路径 |
| **NanoBot** | 轻量级多渠道聊天机器人 + WebUI | 中小团队、个人快速部署 | Python + KDB 存储 + 多渠道 | 合并效率极高，Quick Chat/Temporary Chat 交互创新 |
| **LobsterAI** | 企业级协同 + 每日签到运营 | 企业用户、中国互联网用户 | Electron 桌面应用 + 账号隔离 + 活动系统 | 企业账号服务流隔离 + 用户留存体系建设 |
| **ZeroClaw** | local-first 可观测性 + 渠道安全 | 隐私敏感、本地模型偏好者 | Rust + WebSocket + 渠道 Webhook | 本地优先 + 严格 fail-closed 安全态度 |
| **PicoClaw** | 极致轻量（<10MB RAM） | 低资源硬件爱好者和嵌入式场景 | Go + 多渠道 | 「$10 硬件上运行 AI 助手」的硬件成本锚点 |
| **NanoClaw** | 供应链安全 + 容器化分发 | Docker/Kubernetes 部署者 | 容器镜像 + 签名验证 + 技能仓库 | 镜像加固（781MB→611MB）与 Vercel CLI 按需化 |
| **Moltis** | 渠道交互深度（Slack/Telegram） | 渠道集成重度用户 | 渠道适配器 + Block Kit + 可观测性埋点 | 逐消息确认反应、阶段状态管理等渠道生命周期治理 |
| **ZeptoClaw** | 运行时安全与资源治理 | 对安全合规敏感的生产用户 | Rust + 子进程隔离 + Docker 适配 | 进程环境变量清理与超时进程树回收 |
| **NullClaw** | — | — | — | 无活动，观察中 |

---

## 6. 社区热度与成熟度

### 第一梯队：快速迭代期（功能扩张 + 稳定性并行）
- **OpenClaw**、**CoPaw**、**IronClaw**：每日 PR 更新 48-500 条，新功能与修复并存，社区讨论量大，但头部项目面临 issue 积压和稳定性口碑考验。
- **NanoBot**：迭代速度与合并效率俱佳，处于「快速修复 + WebUI 功能增强」的良性循环。

### 第二梯队：质量巩固期（基础设施建设 + 安全加固）
- **ZeroClaw**：输入极活跃（50 条待合并 PR），集中在安全修复与 eval 体系，但 0 合并暴露交付瓶颈。
- **Hermes Agent**：发布了聚合性补丁版本，大量 PR 待评审，处于「质量收敛」而非「功能扩张」阶段。
- **NanoClaw**：基础设施方向（镜像加固、签名验证）清晰，但核心交互 bug（#3153）响应滞后。

### 第三梯队：稳定演进期（功能完善 + 生态拓展）
- **PicoClaw**、**LobsterAI**、**Moltis**：日均 PR 更新 4-17 条，合并率高，版本节奏稳定，社区讨论多为功能性请求。

### 第四梯队：低活跃/观察期
- **ZeptoClaw**（单一安全 PR 推进）、**NullClaw**（无活动）。

> **成熟度小结：** 生态中尚未出现“全面成熟”的项目——即使最大规模的 OpenClaw 也处于「高活跃、高问题密度」阶段。「性能 + 稳定性 + 合并效率」三维度均优的项目目前缺席，NanoBot 与 LobsterAI 最接近但规模尚小。

---

## 7. 值得关注的趋势信号

### 7.1 稳定性已取代功能丰富度，成为选型的第一要素
多项目出现“功能已就绪但生产不可用”的困境：OpenClaw 频道被永久抑制、CoPaw 会话数据丢失、NanoClaw 消息操作完全失败、Hermes 更新器自锁。**对开发者而言**：评估框架时应优先查看 P0/P1 积压时间而非功能列表；**对维护者而言**：超龄 P1 的清理速度直接影响社区信任。

### 7.2 「安全默认」正向供应链与运行时纵深延伸
安全焦点从「应用鉴权」扩展至供应链（NanoClaw 镜像签名、Hermes 依赖年龄门控）、运行时隔离（ZeptoClaw 子进程密钥清理、OpenClaw CLI 私有认证移除）、配置欺骗防御（ZeroClaw 命令审计默认关闭、IronClaw 密钥确定性编辑）。**信号：** 安全能力正从「可选项」变为「默认可信」的硬性要求。

### 7.3 成本可预测性成为 agent 框架的竞争新维度
空响应重复计费（Hermes）、prompt cache 失效（OpenClaw）、bootstrap 全量加载（OpenClaw）、缓存点优化（PicoClaw 已落地）——**token 成本已不仅是费用问题，而是架构设计决策**。具备成本治理能力（分层加载、预算上限、缓存感知）的框架将在企业采用中占优。

### 7.4 记忆架构面临「历史」与「长期记忆」的分离重构
ZeroClaw RFC #9048（会话历史 vs agent 管理记忆）与 Hermes #31584（记忆上下文 vs 用户显式指令）共同指向一个深层问题：**当前实现将对话历史、长期记忆、系统指令混为一谈，导致提示词注入威胁面扩大与 token 浪费**。这是一个即将到来的架构级重构方向。

### 7.5 MCP 协议生态从「能连」走向「能管」
多个项目同时发力 MCP 的 OAuth 认证、断线自动恢复、工具名规范化、服务质量上报——这意味着 MCP 从「实验室协议」正变为需要生产级治理的基础设施。

### 7.6 渠道竞争进入「交互深度」阶段
Slack Block Kit + 原生斜杠命令（Moltis、IronClaw）、Telegram 内联按钮与自定义 Bot API（Moltis、NanoBot）、飞书线程路由分离（Hermes）——**单纯的消息收发已无法满足需求，渠道特有的交互范式（按钮、回执、审批流）成为新战场**。

### 7.7 极端轻量与本地优先形成「反云」支流
PicoClaw 的 $10 硬件锚点、ZeroClaw 的 local_small 配置契约、CoPaw 的 Qwen 生态绑定——在云 API 成本波动与数据隐私担忧的背景下，**低资源运行 + 本地模型组合正在形成一股不可忽视的细分潮流**。

---

**结论：** 个人 AI 助手开源生态正处在「规模红利」与「质感瓶颈」并存的阶段。OpenClaw 拥有绝对生态优势但需解决稳定性信任危机；新兴项目通过轻量、安全、特定场景切入，正在蚕食「OpenClaw 太重/太不稳定」的用户群体。对于技术决策者，建议基于「任务关键性」分层选型——生产级任务优先考察安全默认与错误恢复能力（IronClaw、ZeroClaw、ZeptoClaw），快速迭代场景选择合并效率高的轻量框架（NanoBot、LobsterAI），需要完整生态时再权衡 OpenClaw 的规模与稳定性风险。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-07-31

> 数据窗口：过去 24 小时 | 数据来源：HKUDS/nanobot GitHub 仓库

---

## 1. 今日速览

过去 24 小时 NanoBot 项目活跃度处于**高位**：共 7 条 Issue 更新（5 条活跃、2 条关闭）、48 条 PR 更新（31 条已合并/关闭、17 条待合并），但无新版本发布。从 PR 内容看，项目当前正处于**密集的缺陷修复与稳定性加固阶段**：多个 P1 级回归修复（exec 输出缓冲、会话锁泄漏、配对持久化、length 恢复路由）已合并进主干，同时 WebUI 功能迭代（Quick Chat、Temporary Chat、侧栏高亮重构）和 Telegram 轮询自愈方案也在推进中。社区反馈集中在 **Telegram/WhatsApp 渠道稳定性、终端环境兼容性（Termux）和模型响应异常**三个方向。整体来看，项目合并节奏快、问题响应及时，健康度良好。

---

## 3. 项目进展

今日共有 **31 条 PR 被合并或关闭**，其中以下合并值得重点关注：

### 缺陷修复（P1，均已合并）

- **[#5147] fix(pairing): keep approvals across transient store read failures** — KDB-Wind
  修复 transient `pairing.json` 读取失败导致已批准用户被清空的问题。读取失败时 fail closed，写入失败时大声失败而非持久化空视图。
  https://github.com/HKUDS/nanobot/pull/5147

- **[#5136] fix(agent): route finish_reason='length' with blank content to length recovery** — Solaris-star
  修复 #5133：当 `finish_reason='length'` 且 `has_tool_calls=True` 且文本为空时，不再将 tool calls 丢弃并误路由到 empty-response 重试，而是正确进入 length recovery 流程。
  https://github.com/HKUDS/nanobot/pull/5136

- **[#5150] fix(exec): bound buffered session output** — yu-xin-c
  限制 exec 会话的 stdout/stderr 缓冲为固定 head/tail 预算，防止无界内存占用；同时保留拖尾检测能力。
  https://github.com/HKUDS/nanobot/pull/5150

- **[#5151] fix(agent): release idle session locks** — yu-xin-c
  将 session 锁改为 `WeakValueDictionary` 存储，空闲会话锁可被 GC 回收，修复 `AgentLoop._session_locks` 长期持有所有 session key 的内存泄漏。
  https://github.com/HKUDS/nanobot/pull/5151

### 新功能（已合并）

- **[#5172] feat: preserve Responses reasoning state and compact context** — chengyongru
  采纳 OpenAI ARC-AGI-3 报告中强调的两项 Responses API 能力：跨工具调用/用户轮次保留并回放完整的 opaque output-item 链（含加密推理），以及持久化压缩上下文。无需 A/B 实验即可启用。
  https://github.com/HKUDS/nanobot/pull/5172

### CI / 工程效率

- **[#5145] fix(ci): stabilize and speed up CI** — chengyongru
  用 stdin-gated 就绪握手替代时序敏感的 exec-session 超时测试，批量安装 channel 依赖减少 pip 解析次数，显著提升 CI 稳定性与速度。
  https://github.com/HKUDS/nanobot/pull/5145

### WebUI 功能整合（#5181 / #5182 合并进 #5184）

- **[#5184] feat(webui): add Quick Chat and Temporary Chat** — Re-bin
  新增持久化 **Quick Chat** 入口（复用正常 session/thread/streaming 栈，不进入普通话题列表），以及 opt-in 的 **Temporary Chat**（仅内存历史）。之前独立的 #5181（Quick Chat）和 #5182（侧栏高亮重构）已关闭，功能并入此 PR。
  https://github.com/HKUDS/nanobot/pull/5184

> **小结**：今日合并内容覆盖了配对安全、模型长度恢复、内存泄漏、exec 输出边界、WebUI 交互体验和 CI 工程效率，项目在稳定性和功能两个维度均向前推进。尤其是 #5172 将 ARC-AGI-3 报告中的关键能力落地，为后续复杂推理场景打下基础。

---

## 4. 社区热点

### 最热 Issue

- **[#5149] [bug] no audio?** — mxnbf（3 条评论）
  WhatsApp 渠道无法发送音频消息（但可以接收），日志中出现 `neonize.utils.ffmpeg WARNING`。这是目前评论数最多的 Issue，反映**多渠道媒体发送兼容性**是用户高频痛点。
  https://github.com/HKUDS/nanobot/issues/5149

### 高关注度 Issue

- **[#5185] Nanobot returning tool calls code in responses** — fablau（1 条评论）
  用户报告 Nanobot 突然开始在回复中直接输出 tool calls 代码（附截图），从"一切正常"到"突然出现"。这很可能是**模型/provider 行为变化触发的回归**，而非配置变更。
  https://github.com/HKUDS/nanobot/issues/5185

### 安全相关讨论

- **[#4791] DoS: No channel-level message rate limiting** — hamb1y（已关闭）
  指出任何已配对用户都可以无速率限制地发送消息，消耗 LLM tokens、触发工具执行、无限增长会话历史。该 Issue 已关闭，但没有看到对应的修复 PR 出现在今日列表中。
  https://github.com/HKUDS/nanobot/issues/4791

---

## 5. Bug 与稳定性

按严重程度排列：

### 严重

- **Telegram polling 静默永久停滞** — [#5171]（OPEN）
  瞬时网络故障后 bot 永久停止接收消息，进程存活但日志完全静默，消息在服务端堆积。**已有对应 fix PR #5156**（OPEN，待合并）：通过 watchdog 检测轮询停滞并自动恢复。
  https://github.com/HKUDS/nanobot/issues/5171
  https://github.com/HKUDS/nanobot/pull/5156

- **响应中直接输出 tool calls 代码** — [#5185]（OPEN，1 评论）
  用户反馈 Nanobot 回复中出现原始 tool calls 代码，影响所有使用该模型的用户。无对应 fix PR，需排查 provider 层是否漏处理 `tool_calls` 序列化。
  https://github.com/HKUDS/nanobot/issues/5185

### 中等

- **WhatsApp 无法发送音频** — [#5149]（OPEN，3 评论）
  日志显示 ffmpeg 相关警告。无对应 fix PR，建议关注音频编码/转码链路。
  https://github.com/HKUDS/nanobot/issues/5149

- **Termux 环境无法启动** — [#5187]（OPEN）
  时区数据缺失导致配置校验失败（`Config agents.defaults.timezone` validation error）。**已有对应 fix PR #5189**：安装 `tzdata` 作为 `zoneinfo` 的标准库回退，同时保留严格的时区校验。
  https://github.com/HKUDS/nanobot/issues/5187
  https://github.com/HKUDS/nanobot/pull/5189

- **finish_reason='length' 误路由** — [#5133]（CLOSED）
  已由 #5136 修复并合并，回归已解决。
  https://github.com/HKUDS/nanobot/issues/5133

### 低严重度 / 长期存在

- **工具步骤完成后无法生成最终答案** — [#3106]（OPEN，4 月创建）
  使用 GPT 设置定时任务时反复出现"完成了工具步骤但无法生成最终答案"，Gemini 4.7 无此问题。疑似 GPT provider 特定问题，长时间未解决。
  https://github.com/HKUDS/nanobot/issues/3106

### 安全

- **缺少消息级速率限制（DoS）** — [#4791]（CLOSED）
  任何已配对用户可无限速发送消息消耗资源。Issue 虽已关闭，但今日无对应修复 PR 出现，建议确认是否已在其他 PR 中覆盖或正在规划。
  https://github.com/HKUDS/nanobot/issues/4791

---

## 6. 功能请求与路线图信号

今日活跃的功能类 PR 和 Issue 释放了以下路线图信号：

| 方向 | PR / Issue | 状态 | 说明 |
|------|-----------|------|------|
| **会话存储架构升级** | [#5173] feat(session): migrate session storage from JSONL to SQLite | OPEN | `sessions.db` 成为唯一运行时存储，首次启动事务性导入 JSONL 并保留回滚备份。重大架构演进，值得重点跟进。 |
| **WebUI 新交互模式** | [#5184] feat(webui): add Quick Chat and Temporary Chat | OPEN | 持久 Quick Chat + 临时会话，完善 WebUI 日常使用体验。 |
| **Telegram 自定义 API 端点** | [#4919] feat(telegram): support custom Bot API base URL and extra headers | OPEN（P2） | 支持自建 Bot API 服务器/企业网关，对应 issue #4702 的功能请求。 |
| **子代理模型预设** | [#4291] feat(spawn): allow subagents to use configurable model presets | OPEN | 子代理可使用与父代理不同的模型预设，需在 `agents.defaults.spawnPresets` 显式配置。 |
| **心跳共享会话** | [#4551] feat(heartbeat): add isolated_session config | OPEN（有 conflict） | 允许 heartbeat 共享目标 channel 会话，对应 #1899。 |
| **skills.sh 来源兼容** | [#5186] fix(webui): support well-known skills.sh sources | OPEN（P2） | 保留知名 DNS 来源（如 `uizze.com`）的 skills 结果，避免被静默过滤。 |
| **cron 手动运行状态保持** | [#5183] fix(cron): preserve manual run completion state | OPEN（P1） | 保护手动执行期间 cron store 的完整性与运行历史。 |
| **memory 格式化健壮性** | [#5153] fix(memory): handle non-string timestamp and missing role in raw_archive | OPEN（P1） | 处理 raw archive 中 `timestamp: None`、数字时间戳、缺少 `role` 字段的异常。 |

> 从 PR 密度看，**WebUI 交互、会话存储持久化、Telegram 生态扩展**是当前社区贡献最集中的三个方向。其中 #5173（SQLite 迁移）与 #5172（Responses 状态保留）可能是近期最重要的架构级变更。

---

## 7. 用户反馈摘要

从今日活跃的 Issues 评论中提炼：

- **真实痛点：WhatsApp 媒体发送失败（#5149）** — 用户安装当前版本后请求 bot 发送任意音频文件均失败，但接收正常。ffmpeg 相关警告指向转码环节，疑似渠道适配器的音频编码处理存在缺陷。类似问题可能也影响其他媒体类型（图片/视频）的发送稳定性。

- **突然的模型行为变化（#5185）** — "All of a sudden" 是用户原话。这类问题通常不是配置变更导致，更可能是上游模型 API 行为漂移（如 tool_calls 格式变化）未被 client 层兼容，建议维护者关注 provider 适配层的防御性解析。

- **极简环境支持不足（#5187）** — 用户（"Why not? I was bored"）在 Termux 中测试时因系统缺少时区数据库而启动失败。反馈说明社区有在非常规环境运行 NanoBot 的真实需求，也侧面印证 P1 PR #5189 的必要性。

- **定时任务稳定性质疑（#3106）** — 中文用户反馈使用 GPT 设置定时任务时反复报"工具步骤完成后无法生成最终答案"，但切换到 Gemini 4.7 正常。该问题已存在 3 个月以上，长期未解决可能影响部分依赖定时自动化场景的用户信任度。

- **安全意识的社区呼声（#4791）** — 虽然该 Issue 已关闭，但"任何配对用户可刷爆 LLM 配额"的担忧真实存在。随着多用户场景增多，速率限制 / 配额控制可能成为后续版本的必要能力。

---

## 8. 待处理积压

以下为长期未响应或存在冲突、需要维护者关注的事项：

- **[#3106] 工具步骤完成后无法生成最终答案**（2026-04-13 创建，3.5 个月未解决）
  定时任务场景下 GPT 模型反复失败，用户已更换模型规避。建议排查 GPT provider 的工具调用收尾逻辑。
  https://github.com/HKUDS/nanobot/issues/3106

- **[#4021] fix(codex): dedup reasoning items before send, retry on duplicate-item 400**（2026-05-27 创建，带 conflict 标签）
  修复 Codex provider 偶发 `400 Duplicate item found` 的多轮对话中断问题。AI-assisted PR，因冲突待更新。
  https://github.com/HKUDS/nanobot/pull/4021

- **[#4551] feat(heartbeat): add isolated_session config**（2026-06-26 创建，带 conflict 标签，对应 #1899）
  允许 heartbeat 共享目标 channel 会话。功能简单但长期未合并，需解决冲突。
  https://github.com/HKUDS/nanobot/pull/4551

- **[#4819] fix(memory): replace WeakValueDictionary with plain dict for consolidation locks**（2026-07-06 创建，带 conflict 标签）
  修复 consolidation 锁因弱引用被 GC 回收导致并发重复合并的问题。与 #5151 的修复思路方向不同（一个改弱引用、一个改强引用），需维护者权衡取舍。
  https://github.com/HKUDS/nanobot/pull/4819

- **[#4919] feat(telegram): support custom Bot API base URL**（2026-07-14 创建，P2，OPEN）
  支持自建 Telegram Bot API 端点。PR 已存在 2 周以上，等待 review。
  https://github.com/HKUDS/nanobot/pull/4919

- **[#4791] DoS 速率限制**（7-30 关闭但无修复 PR 关联）
  安全类 Issue 关闭时应同步说明缓解方案或后续规划，避免社区误解为已解决。
  https://github.com/HKUDS/nanobot/issues/4791

---

> **编辑备注**：本日报基于 GitHub 公开数据自动汇总，PR 评论数在数据概览中显示为 undefined，故社区热点部分主要以 Issue 评论数为依据。所有链接指向 HKUDS/nanobot 仓库对应条目。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-07-31

## 1. 今日速览

过去 24 小时 Hermes Agent 仓库共产生 50 条 Issue 更新与 50 条 PR 更新，同时发布 v2026.7.30（v0.19.1）补丁版本，整体活跃度处于高位。今日 Issue 全部为新增或活跃讨论（关闭数为 0），PR 队列中 48 条待合并、仅 2 条合并/关闭，评审积压压力明显。社区讨论高度集中在三个方向：**会话状态与后台任务隔离**（cron/后台运行污染会话列表）、**配置与密钥隔离**（`.env` 泄漏、PYTHONPATH 污染）、**桌面端更新与体验问题**（更新器误判、链接失效、pin 竞争）。安全与成本控制（空响应重复计费、API key 外泄风险）也是今日 PR 的重要主题，多个修复 PR 正在等待评审。

---

## 2. 版本发布

### v2026.7.30 — Hermes Agent v0.19.1（补丁版本）

- **发布日期：** 2026 年 7 月 30 日
- **版本类型：** Patch release
- **内容：** 将自 v0.19.0 以来合并的 ~1,000+ 个 PR 滚动收编为一个稳定的标记版本，供下游消费者（Docker 镜像、托管部署、全新安装）使用。
- **破坏性变更：** 无（补丁版本，未提及 breaking changes）
- **迁移注意：** 建议下游部署从 v0.19.0 或更早版本升级至本版本以获得最新稳定性修复；由于是聚合性补丁，升级前建议留意仓库 CHANGELOG 中自 v0.19.0 以来关于配置项或行为调整的说明（release notes 未展开细项）。

---

## 3. 项目进展

今日合并/关闭 PR 数量仅 2 条（具体明细未在展示数据中列出），48 条 PR 待合并，评审积压较为突出。不过，今日新提交的 **#751xx 系列 PR（约 20 条）** 集中体现了项目正在推进的关键方向：

- **成本与计费修复**：[#75115](https://github.com/NousResearch/hermes-agent/pull/75115) 修复确定性空响应被重复计费的问题（NS-503），停止对每次重试全量收费；[#75102](https://github.com/NousResearch/hermes-agent/pull/75102) 修正 token 估算器中 `api_content` 被重复计算的问题。
- **桌面端体验集中改进**：[#75126](https://github.com/NousResearch/hermes-agent/pull/75126) 修复集成终端中链接点击无效；[#75110](https://github.com/NousResearch/hermes-agent/pull/75110) 防止 Markdown 代码块中的 URL 被误转成 chip；[#75127](https://github.com/NousResearch/hermes-agent/pull/75127) 修复关闭最后一个主标签页无响应及鼠标中键失效；[#75112](https://github.com/NousResearch/hermes-agent/pull/75112) 修复冷启动时主 profile 的竞争条件；[#75114](https://github.com/NousResearch/hermes-agent/pull/75114) 将 `projects.*` RPC 限定到选中的 profile。
- **Gateway/平台适配器**：[#75104](https://github.com/NousResearch/hermes-agent/pull/75104) 将飞书会话身份与线程路由分离；[#75117](https://github.com/NousResearch/hermes-agent/pull/75117) 持久化异步任务来源，防止 gateway 重启后返程路由丢失；[#75120](https://github.com/NousResearch/hermes-agent/pull/75120) 完善 BlueBubbles `send_message` 目标解析。
- **安全加固**：[#75106](https://github.com/NousResearch/hermes-agent/pull/75106) 防止 TTS/STT 的云 API key 被发送到配置覆盖的私有 `base_url`（self-host 场景）；[#75037](https://github.com/NousResearch/hermes-agent/pull/75037) 修复多个已知漏洞依赖（Pillow、mcp、pygments 等）并增加依赖发布年龄下限与 npm 脚本白名单机制。
- **CLI 健壮性**：[#75109](https://github.com/NousResearch/hermes-agent/pull/75109) 修复 `python -m main` 双重导入导致的 profile 重新归属问题；[#75125](https://github.com/NousResearch/hermes-agent/pull/75125) 在 gateway 重启前清理陈旧 `__pycache__`；[#75119](https://github.com/NousResearch/hermes-agent/pull/75119) 避免 setup 时主动升级可选依赖，防止运行中 gateway 的 import 不一致。
- **TUI/会话管理**：[#75116](https://github.com/NousResearch/hermes-agent/pull/75116) 默认在 `/resume` 选择器中隐藏 cron 会话，并增加 `Alt+C` 开关。

> 总体而言，项目正在向**降低运行成本、收紧安全边界、理顺多 profile/多平台会话模型**几个方向收敛，但 PR 评审速度（仅 2 个合并）可能会成为近期迭代的瓶颈。

---

## 4. 社区热点

| 排名 | 条目 | 评论数 | 核心诉求 |
|---|---|---|---|
| 1 | [#31584](https://github.com/NousResearch/hermes-agent/issues/31584) [OPEN] [Feature] 将 memory-context 视为背景上下文而非权威用户消息内容 | 10 | 用户（由 agent 代笔）担忧记忆上下文被当作权威指令对待，存在提示词注入/误判威胁面，要求从产品形态上区分"背景记忆"与"用户显式指令" |
| 2 | [#37968](https://github.com/NousResearch/hermes-agent/issues/37968) [OPEN] [Bug] 修复 cron：将 gateway 审批与环境污染隔离 | 8 | Issue 自带 CVSS 评估（v3.1 6.3 中危 / v4.0 7.0 高危），涉及 gateway 催生的 cron 子进程继承环境变量、污染审批流程，是权限/信任边界问题 |
| 3 | [#74942](https://github.com/NousResearch/hermes-agent/issues/74942) [OPEN] [Bug] 桌面应用更新器将**自身**误判为"另一个实例"（PID 检查误报） | 5 | 用户在安装更新时升级程序因误判自身 PID 而失败，直击桌面端分发可靠性 |

**分析：** 评论数前十中，多数围绕"会话/进程/配置的隔离"展开——用户对 Hermes 作为 agent 框架的**多实例、多 profile、后台任务与用户显式操作的边界安全**表现出强烈关注。特别是 #31584 呈现出典型的高级用户诉求：当 agent 本身成为日常工具后，记忆与指令之间的可信边界将成为核心安全议题。

---

## 5. Bug 与稳定性

### P1（严重）

- **[#74942](https://github.com/NousResearch/hermes-agent/issues/74942) 桌面端更新器 PID 误判自身**（👍 2，5 评论）— 更新引导程序在安装更新时错误地认为已有另一个更新实例在运行（实为自身），导致更新中断。暂无直接 fix PR，但今日有多个桌面端 PR 合入前奏，值得关注。

### P2（高）

- **[#37968](https://github.com/NousResearch/hermes-agent/issues/37968) cron gateway 审批受环境变量污染**（8 评论）— CVSS 4.0 高危，影响审批流程完整性。Issue 标题即含 `fix(cron)`，预计修复 PR 已在路上。
- **[#75018](https://github.com/NousResearch/hermes-agent/issues/75018) gateway 向 cron 子进程导出 PYTHONPATH/VIRTUAL_ENV，污染非虚拟环境 Python 解释器** — 当 cron 执行 `no_agent` 脚本时，子进程错误继承 venv 路径，导致脚本调用错误的 Python 解释器。属于环境隔离缺陷。
- **[#74836](https://github.com/NousResearch/hermes-agent/issues/74836) macOS 应用内更新被残留的 ~/.hermes/hermes-setup 永久阻断**（👍 1）— `resolveUpdaterBinary()` 仅凭文件存在性判断，无版本门控，残留旧二进制导致 Update 按钮永久失效，`hermes update` 也无法修复。
- **[#74570](https://github.com/NousResearch/hermes-agent/issues/74570) 桌面端 pin/unpin 被 pullRemotePins 竞争条件静默回滚** — 所有 pin 入口（Shift+Click、右键、快捷键）均受影响，根因是 commit `8ce8b70dc` 引入的 `pullRemotePins()` 竞态。
- **[#62935](https://github.com/NousResearch/hermes-agent/issues/62935) microsoft-teams-apps 导入副作用将外部 .env 加载进每个 gateway 进程** — 破坏 profile 密钥隔离，属于安全边界问题。

### P2/P3（中低）

- **[#72269](https://github.com/NousResearch/hermes-agent/issues/72269) 自我改进评审可将未解决失败误写成"已验证技能"** — agent 后台评审提示词虽已有"禁止捕获"清单，但覆盖不全，需要补全失败分类。
- **[#54354](https://github.com/NousResearch/hermes-agent/issues/54354) Docker 后端首次工具调用在镜像拉取前于宿主机执行** — 冷启动时沙箱容器延迟创建，第一条工具调用返回本地路径而非容器内路径。
- **[#33485](https://github.com/NousResearch/hermes-agent/issues/33485) / [#43186](https://github.com/NousResearch/hermes-agent/issues/43186) — 两个独立 SIGABRT（退出码 134）崩溃问题**：Honcho 混合记忆模式下 CLI 关闭时 daemon 线程残留；并发 `hermes chat -q` 子进程退出时 core dump。均在**成功输出结果之后**崩溃，隐蔽性高。
- **[#62835 / #62401] Matrix/macOS arm64 与 Teams 依赖问题** — mautrix 加密依赖被强制引入导致 python-olm 编译失败；Teams 平台插件引入外部 .env。

### 今日 Bug 修复 PR（待合并）

- [#75115](https://github.com/NousResearch/hermes-agent/pull/75115) 空响应重复计费（NS-503）
- [#75120](https://github.com/NousResearch/hermes-agent/pull/75120) BlueBubbles 消息目标解析
- [#75117](https://github.com/NousResearch/hermes-agent/pull/75117) 异步任务来源跨重启持久化
- [#75125](https://github.com/NousResearch/hermes-agent/pull/75125) gateway 重启前清理 __pycache__

---

## 6. 功能请求与路线图信号

- **[#34823](https://github.com/NousResearch/hermes-agent/issues/34823) 语义级/逐消息技能检索** — 当前整套技能索引固定注入系统提示词（20+ 技能约 800 tokens/次），`semantic_retrieval` 实验标志仅匹配首条消息。与今日 [#75102](https://github.com/NousResearch/hermes-agent/pull/75102)（token 估算修正）共同指向 **token 成本优化**方向。预计将在后续版本获得更高优先级。
- **[#39372](https://github.com/NousResearch/hermes-agent/issues/39372) 后台/集成 agent 运行不应污染用户可见会话列表** — 今日 [#75116](https://github.com/NousResearch/hermes-agent/pull/75116)（TUI `/resume` 默认隐藏 cron 会话）正是对该方向的直接响应，说明该诉求已被纳入实现队列。
- **[#26004](https://github.com/NousResearch/hermes-agent/issues/26004) 向平台适配器透传结构化 cron 元数据（job_id、response_id）** — 便于下游平台做任务追踪与去重，对集成方价值明确，等待决策中。
- **[#48683](https://github.com/NousResearch/hermes-agent/issues/48683) skills 创建 issue/PR 前应检查仓库自带模板** — 提升 agent 产出物与仓库规范的适配度，属于 agent 自治能力增强。
- **[#33436](https://github.com/NousResearch/hermes-agent/issues/33436) Honcho 记忆 provider 增加观察修剪控制** — 与 #33485（Honcho 导致 SIGABRT）叠加，反映 Honcho 集成成熟度仍需加强。
- **[#46467](https://github.com/NousResearch/hermes-agent/issues/46467) macOS TUI 增加 copy-on-select 配置开关** — 用户体验细节，可作为短期易贡献项。
- **[#29041](https://github.com/NousResearch/hermes-agent/issues/29041) Windows 管理员操作的高程执行支持** — 涉及 UAC 场景下的自主执行能力，目前没有关联 PR。

---

## 7. 用户反馈摘要

- **"让 agent 代写 issue"成为现实**：[#31584](https://github.com/NousResearch/hermes-agent/issues/31584) 的作者明确表示请求由 agent 代笔，并自述"细节超出我的理解范围，但我能看到这正在成为 agent 的混淆点和潜在威胁面"——这是高阶用户对 agent 自身可信边界的真切担忧，值得产品层重视。
- **更新机制脆弱打击用户信任**：[#74836](https://github.com/NousResearch/hermes-agent/issues/74836) 评论指出"残留的旧 binary 让 Update 按钮永久失效，且 `hermes update` 也无法修复"，用户对无法自愈的更新通道表达了明显挫败感。[#74942](https://github.com/NousResearch/hermes-agent/issues/74942)（PID 误判自身）进一步放大了安装/更新流程的不稳定性。
- **成本敏感度上升**：多个 Issue（[#32827](https://github.com/NousResearch/hermes-agent/issues/32827)、#34823、#75115 对应客服案例）显示用户开始关注 token/费用放大问题——`same_tool_failure_warning` 不阻断导致重试成本无上限；空响应重试 3 次全量计费产生 $2.33 账单。
- **冷启动/首次使用体验问题**：[#54354](https://github.com/NousResearch/hermes-agent/issues/54354) "第一次工具调用跑在宿主机上"与 [#31996](https://github.com/NousResearch/hermes-agent/issues/31996) "全新安装后 image_gen 和 vision 需要深入 debug 才能用"均属于 **开箱即用性** 短板。
- **安全实践用户被惩罚**：[#53082](https://github.com/NousResearch/hermes-agent/issues/53082) 用户在 `~/.npmrc` 设置 `ignore-scripts=true`（常见供应链安全加固），导致桌面构建失败——安全最佳实践与项目构建流程存在冲突。

---

## 8. 待处理积压

以下 Issue/PR 创建时间超过一个月且至今仍未关闭，持续被社区更新/讨论，建议维护者优先关注：

| 条目 | 创建时间 | 距今 | 说明 |
|---|---|---|---|
| [#26004](https://github.com/NousResearch/hermes-agent/issues/26004) | 2026-05-14 | ~78 天 | 向适配器透传 cron 元数据（job_id/response_id），集成方依赖此能力 |
| [#29041](https://github.com/NousResearch/hermes-agent/issues/29041) | 2026-05-20 | ~72 天 | Windows 高管程执行支持（UAC） |
| [#31584](https://github.com/NousResearch/hermes-agent/issues/31584) | 2026-05-24 | ~68 天 | **当前评论最多（10)**，memory-context 权威性问题，安全相关 |
| [#31996](https://github.com/NousResearch/hermes-agent/issues/31996) | 2026-05-25 | ~67 天 | 全新安装后 image_gen/vision 不可用，影响新用户第一印象 |
| [#31987](https://github.com/NousResearch/hermes-agent/issues/31987) | 2026-05-25 | ~67 天 | MCP HTTP transport anyio RuntimeError 导致重连失败循环 |
| [#32827](https://github.com/NousResearch/hermes-agent/issues/32827) | 2026-05-26 | ~66 天 | `same_tool_failure_warning` 不自动阻断，存在成本放大攻击面 |
| [#33436](https://github.com/NousResearch/hermes-agent/issues/33436) | 2026-05-27 | ~65 天 | Honcho 观察修剪控制（AI agent 撰写，人工审核） |
| [#33485](https://github.com/NousResearch/hermes-agent/issues/33485) | 2026-05-27 | ~65 天 | Honcho 混合记忆导致 CLI 退出 SIGABRT |
| [#34823](https://github.com/NousResearch/hermes-agent/issues/34823) | 2026-05-29 | ~63 天 | 语义/逐消息技能检索，token 优化方向 |
| [#43633](https://github.com/NousResearch/hermes-agent/pull/43633) | 2026-06-10 | ~51 天 | **MCP HTTP 带认证服务**（streamable HTTP + OAuth 兼容），功能性 PR 长期滞留未合并 |

> 建议：优先处理 #31584（安全）、#31996（新用户体验）、#32827（成本风险），并推动 #43633 的评审落地，该 PR 可为 MCP 远程访问场景提供基础能力。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-07-31

## 1. 今日速览

过去 24 小时，PicoClaw 共更新 7 条 Issue（新开/活跃 4 条、关闭 3 条）与 17 条 PR（待合并 12 条、合并/关闭 5 条），无新版本发布，整体活跃度中等偏上。AWS Bedrock 提示词缓存功能（#3163）今日关闭合并，是当日最重要的功能落地；DingTalk 图片消息、DashScope TTS、Seahorse 工具调用泄漏修复等 5 个功能/修复 PR 仍在待合并队列。社区侧，OAuth 2.1 MCP 支持在 #2546 关闭当天被 #3302 重新提出，Telegram 会话管理成为新需求热点。依赖更新（dependabot）占 PR 总量近一半，项目维护节奏稳定，但存在多条 stale 积压待清理。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日共关闭/合并 5 条 PR，其中 1 条功能合并、4 条依赖与 CI 更新：

- **PR #3163 [已关闭] feat(bedrock): leverage Converse prompt caching via cache points** — 为 AWS Bedrock Converse API 接入显式缓存点，在 system/tools/messages 中设置缓存前缀，缓存读取成本约为输入的 0.1×。对 Bedrock 用户是实质性的成本优化，该 PR 自 6 月 23 日提出历经约 5 周后合并。(https://github.com/sipeed/picoclaw/pull/3163)
- **PR #3290 / #3288 [已关闭]** — aws-sdk-go-v2/config 升级至 1.32.31、bedrockruntime 升级至 1.56.0。(https://github.com/sipeed/picoclaw/pull/3290 | https://github.com/sipeed/picoclaw/pull/3288)
- **PR #3262 / #3263 [已关闭]** — GitHub Actions setup-go、setup-node 升级至 v7。(https://github.com/sipeed/picoclaw/pull/3262 | https://github.com/sipeed/picoclaw/pull/3263)

同时关闭 3 条 Issue：#2546（OAuth MCP 支持）、#3258（Process Hook 反序列化缺陷）、#3257（gateway 无状态模式请求）。整体进展集中在「降本」（Bedrock 缓存）与「依赖现代化」，但 12 条 PR 仍待合并，其中不乏高价值功能（如 #3270 DashScope TTS、#3283 DingTalk 图片、#3200 fallback 链）。

## 4. 社区热点

- **Issue #2546（6 条评论，已关闭）** — 当日讨论度最高：支持 OAuth 2.1 + PKCE 的 MCP 服务器，并像 Claude.ai 一样在 Dashboard 粘贴 URL 即可添加，面向非技术用户、无需 shell 与 Node.js。该诉求虽随 Issue 关闭暂告一段落，但用户需求并未消失。(https://github.com/sipeed/picoclaw/issues/2546)
- **Issue #3257（2 条评论，已关闭）** — 用户反馈 `picoclaw gateway` 无法像 CLI 那样通过 `--session` 创建全新会话，会话 key 由 channel/chat 自动派生，缺少无状态模式。(https://github.com/sipeed/picoclaw/issues/3257)
- **Issue #3287（2 条评论，stale）** — IRCv3 长消息（>512 字节被客户端自动拆分）应被识别为单一完整消息，当前会破坏模型上下文连贯性。(https://github.com/sipeed/picoclaw/issues/3287)

## 5. Bug 与稳定性

按严重程度排列：

1. **Seahorse 工具调用格式泄漏（有修复 PR #3279 待合并）** — `partsToReadableContent` 将工具调用格式泄漏进用户消息/LLM 摘要，与既有 bug 同类但触发路径不同，会污染模型上下文质量，建议优先 review。(https://github.com/sipeed/picoclaw/pull/3279)
2. **Issue #3308 [新开] 并发隐患与 goroutine 泄漏** — 社区提交的 Code Review，指出 SeaHorse、Channel Manager、Hooks 存在并发安全风险、goroutine 泄漏及内存/速度优化空间。暂无评论与修复 PR，建议维护者尽快评估并回应。(https://github.com/sipeed/picoclaw/issues/3308)
3. **Issue #3258 [已关闭] Process Hook before_tool 反序列化缺陷** — `decision` 字段被丢弃、`args` 解析错误，影响 PicoClaw 0.3.1 + DeepSeek + Telegram 环境。今日关闭，但关闭原因未在数据中体现。(https://github.com/sipeed/picoclaw/issues/3258)

## 6. 功能请求与路线图信号

- **OAuth 2.1 MCP 支持（#3302，新开）** — 与 #2546 完全重复，且在原 Issue 关闭当天被再次提出，表明这是高频强需求，有较大概率进入下一版本规划。(https://github.com/sipeed/picoclaw/issues/3302)
- **Telegram 会话管理（#3307，新开）** — 要求聊天渠道具备 Web UI 同等的会话列表/切换/删除能力，补齐多端体验一致性，实现成本相对可控。(https://github.com/sipeed/picoclaw/issues/3307)
- **IRC 长消息支持（#3287，stale）** — 涉及 IRCv3 协议语义正确处理，小众但影响协议正确性。(https://github.com/sipeed/picoclaw/issues/3287)
- **模型默认 fallback 链（PR #3200，待合并）** — 在 Web UI 配置默认模型及回退顺序并持久化，直接提升生产可用性。(https://github.com/sipeed/picoclaw/pull/3200)
- **新增渠道/供应商能力（PR #3270、#3283，待合并）** — DashScope TTS + 微信语音发送、DingTalk 图片消息接入，若合并将显著加强国内 IM 渠道体验。(https://github.com/sipeed/picoclaw/pull/3270 | https://github.com/sipeed/picoclaw/pull/3283)

## 7. 用户反馈摘要

- **非技术用户配置门槛（#2546）**：用户希望在 Dashboard 粘贴 URL 即完成 OAuth MCP 服务器接入，折射出「零命令行」部署与运维诉求。(https://github.com/sipeed/picoclaw/issues/2546)
- **渠道能力不一致（#3307）**：Web UI 具备完整会话历史管理，Telegram 等聊天渠道却完全没有，「用户无法列出、切换或删除会话」是明显体验缺口。(https://github.com/sipeed/picoclaw/issues/3307)
- **gateway 会话不灵活（#3257）**：CLI 可自由指定 `--session` 创建新对话，gateway 模式下却无法按需重置，限制自动化/多租户使用场景。(https://github.com/sipeed/picoclaw/issues/3257)
- **性能定位获社区认可（#3308）**：报告者称赞 PicoClaw "a native Go AI assistant that runs on $10 hardware with <10MB RAM and sub-second boot times"，说明项目轻量级定位得到外部认可，但并发稳健性仍需加强。(https://github.com/sipeed/picoclaw/issues/3308)

## 8. 待处理积压

以下 stale 或长时间未合并的项目值得维护者关注：

- **PR #3222 [stale] refactor(deltachat): cleanup implementation, documentation -200LOC** — 7 月 3 日创建，已搁置近 4 周。涉及删除遗留特性、移除密码配置（密钥迁至 jsonrpc）、完善文档，建议确认后合并或关闭。(https://github.com/sipeed/picoclaw/pull/3222)
- **PR #3200 [待合并] feat(models): add configurable default fallback chain** — 7 月 1 日提交，近 1 个月未合并，功能完整且对生产部署价值明确。(https://github.com/sipeed/picoclaw/pull/3200)
- **PR #3291 / #3289 [stale] dependabot 依赖升级** — copilot-sdk-go 0.2.0→1.0.8（跨大版本）、pion/rtp 1.10.2→1.10.5，均已 stale，建议完成兼容性验证后合并或关闭。(https://github.com/sipeed/picoclaw/pull/3291 | https://github.com/sipeed/picoclaw/pull/3289)
- **Issue #3287 [stale] IRC 长消息支持** — 7 月 22 日提出后一周无维护者响应。(https://github.com/sipeed/picoclaw/issues/3287)
- **PR #3271 [待合并] chore(providers): update default model names to 2026-07 latest** — 已更新 9 个提供商的默认模型名（如 OpenAI `gpt-5.6-terra/luna/sol`），涉及面广但长期未合并，建议尽快处理以免模型名进一步过期。(https://github.com/sipeed/picoclaw/pull/3271)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-07-31）

## 1. 今日速览

过去24小时项目整体活跃度 **较高**，PR 侧有 18 条更新，其中 6 条已关闭/合并，12 条仍在审查中；Issue 侧活跃度较低，仅新增 2 条且均未关闭。核心团队（core-team）在镜像供应链加固、容器体积优化、签名验证修复等基础设施方向动作明显。值得注意的风险是：今日新报告的一个 Slack 消息 ID 处理 bug 会直接导致 `add_reaction` / `edit_message` 功能完全不可用，严重度较高，但尚无直接关联的修复 PR。无新版本发布。

## 3. 项目进展

今日共有 6 个 PR 被合并/关闭，主要集中在基础设施、镜像安全与技能管理方面：

- **[#3160] versions: repin the agent image to hardened-2026-07-30** — 合并。将 agent 镜像重新固定到加固版本，镜像从 781MB/18 层优化至 611MB/8 层，最大单层占比从 39% 降至 27%，显著改善拉取体验。[PR 链接](https://github.com/nanocoai/nanoclaw/pull/3160)
- **[#3159] container: make the Vercel CLI opt-in rather than baked into every image** — 合并。将 Vercel CLI 从默认镜像中移除，改为 `/add-vercel` 按需添加，减少默认攻击面和镜像体积。[PR 链接](https://github.com/nanocoai/nanoclaw/pull/3159)
- **[#3122] fix(opencode): main compatibility, custom-endpoint transport, memory parity** — 已关闭。修复了 opencode 技能与主分支的兼容性问题，并补齐了自定义 endpoint 传输和内存一致性。[PR 链接](https://github.com/nanocoai/nanoclaw/pull/3122)
- **[#2682] fix(update-skills): skip v1-only skill branches** — 已关闭。为 `update-skills` 增加 v2 兼容性检查，自动跳过仅支持 v1 的分支，避免错误合并。[PR 链接](https://github.com/nanocoai/nanoclaw/pull/2682)
- **[#3152] docs: link architecture docs from README** — 已合并。README 的 Architecture 部分增加指向 `docs/REQUIREMENTS.md` 和 `docs/SECURITY.md` 的链接，提升文档可发现性。[PR 链接](https://github.com/nanocoai/nanoclaw/pull/3152)
- **[#2476] Feat/restart no nanoclaw** — 已关闭。涉及不依赖 NanoClaw 进程的重启功能，具体改动内容待确认。[PR 链接](https://github.com/nanocoai/nanoclaw/pull/2476)

整体来看，项目在 **供应链安全**（镜像加固、签名验证、CLI 默认去除）和 **技能生态健壮性**（兼容性检查、跳过 v1 分支）两方面有明显推进。

## 4. 社区热点

今日 Discussion 热度不高，仅 [#3153](https://github.com/nanocoai/nanoclaw/issues/3153) 有 1 条评论，是今日唯一获得反馈的 Issue。该 Issue 报告了一个影响所有 inbound 消息的核心 bug：

> **#3153** [OPEN] `add_reaction` / `edit_message` 对 inbound 消息总是失败 — 作者在 Slack 上操作时每次都会收到 `message_not_found`，重试 3 次后最终标记为 `failed`。[Issue 链接](https://github.com/nanocoai/nanoclaw/issues/3153)

该问题直接指向平台消息 ID 的 agent-group 后缀未剥离，属于消息处理管线中的通用逻辑缺陷，波及 Slack 之外的其他渠道的可能性很高。虽然评论数不多，但功能完全不可用的严重性使其成为今日社区最需要关注的议题。

此外，PR [#3158](https://github.com/nanocoai/nanoclaw/pull/3158) 在标题中直接指出 "signature verification is skipped on every run and auto-merge can never fire"，反映了签名验证 gate 因为环境变量未定义而形同虚设的问题，属于基础设施层面的潜在隐患，值得维护者跟进。

## 5. Bug 与稳定性

按严重程度从高到低排列：

1. **[严重] #3153 — `add_reaction` / `edit_message` 对 inbound 消息总是失败**。agent-group 后缀未从平台消息 ID 中剥离，导致 Slack 返回 `message_not_found`，重试 3 次后标记 `failed`。尚未有直接关联的 fix PR，但 #3156（carry channel attachments to providers as structured parts）可能部分相关。[Issue 链接](https://github.com/nanocoai/nanoclaw/issues/3153)

2. **[高] #3155 — registry 分支与 main 漂移，provider payload 无法通过自身 install gates**。在 main 分支上运行 `/add-codex` 时，skill 自身构建步骤失败。用户按 `providers` 分支的 payload 手动应用后 typecheck 仍报错，说明分支间存在未同步的破坏性变更。[Issue 链接](https://github.com/nanocoai/nanoclaw/issues/3155)

3. **[中] #3119 — container-runner 无法调和未跟踪的孤儿容器**。长期运行的主机上观察到同一 agent group 出现 3 个并发容器，重复轮询同一个 session DB。PR #3119 已提交修复方案，处于待合并状态。[PR 链接](https://github.com/nanocoai/nanoclaw/pull/3119)

4. **[中] #3145 — 存量 wiring 缺少 channel destinations**。需要 migration 021 为既有 messaging-group wirings 补齐目的地，保留已有 destination 和自定义本地名称。已有 PR 待合并。[PR 链接](https://github.com/nanocoai/nanoclaw/pull/3145)

5. **[低] #3158 — verify-agent-image 的签名验证条件变量不存在**。`AGENT_IMAGE_SIGNER_IDENTITY` 和 `_ISSUER` 未定义，导致签名验证被跳过、auto-merge 永不触发。已有 PR 修复。[PR 链接](https://github.com/nanocoai/nanoclaw/pull/3158)

## 6. 功能请求与路线图信号

今日没有新的功能请求类 Issue，但 6 条开放 PR 提供了明确的路线图信号，按潜在纳入下一版本的可能性排序：

- **[#3154] fix(agent-runner): give scheduled tasks current run time** — 为定时任务提供当前运行时间（`process_after`），并增加任务级 `current_time`（含星期）。这填补了定时任务时间语义的空白，属于核心功能增强，预计会被优先合并。[PR 链接](https://github.com/nanocoai/nanoclaw/pull/3154)
- **[#3124] fix: report unavailable MCP servers** — 改进 MCP 服务器不可用时的错误上报机制，提升运维可观测性，被纳入下个版本的可能性较高。[PR 链接](https://github.com/nanocoai/nanoclaw/pull/3124)
- **[#2301] feat(add-github): polling mode, git access question, safe OneCLI secret merge** — 新增无端口轮询模式（Mode B），让 NAT/防火墙后的用户无需暴露入站端口即可使用 GitHub 集成，方向与易用性诉求契合。[PR 链接](https://github.com/nanocoai/nanoclaw/pull/2301)
- **[#2317] feat(skills): add /add-voice-transcription-free-whisper skill** — 免费语音转写技能，支持 openai-whisper 和 whisper.cpp 双后端，已积压 85 天。[PR 链接](https://github.com/nanocoai/nanoclaw/pull/2317)
- **[#2634] feat: add add-paws4claws skill** — 接入 AWS 凭证代理守护进程，面向需要临时 AWS 凭证的场景，积压 64 天。[PR 链接](https://github.com/nanocoai/nanoclaw/pull/2634)
- **[#2537] ci: add pre-commit hooks** — 引入 prettier/eslint/typecheck/vitest 自动检查，降低 contributor 提交门槛，积压 74 天。[PR 链接](https://github.com/nanocoai/nanoclaw/pull/2537)

## 7. 用户反馈摘要

从今日的 Issue 中提取的真实用户反馈：

- **Slack 用户反馈（#3153）**：用户在 Slack 上执行消息 reaction 和编辑操作时，平台持续返回 `message_not_found`。该用户描述中强调了 "every attempt"、"retries 3×"、"ends as failed"，说明此问题对日常交互是 **完全阻断性** 的，而非偶发故障。[Issue 链接](https://github.com/nanocoai/nanoclaw/issues/3153)

- **技能安装用户反馈（#3155）**：用户尝试安装 `/add-codex` 技能时遭遇构建失败，并尝试手动按 provider 分支的 payload 应用（"mechanically"）后 typecheck 仍失败。这里体现了两个痛点：一是 registry 分支与 main 的漂移让用户无法正常安装技能；二是 install gates 未能有效发挥作用，反而在用户侧暴露错误。该用户对问题根源（分支漂移）的判断较为明确，说明这是可复现的工程问题，而非用户误操作。[Issue 链接](https://github.com/nanocoai/nanoclaw/issues/3155)

## 8. 待处理积压

以下 PR/Issue 长期未获得维护者响应，建议优先关注：

- **[#2301] feat(add-github): polling mode, git access question, safe OneCLI secret merge** — 由 `ira-at-work` 提交，自 2026-05-06 至今（87 天）仍为 OPEN。该 PR 同时触及 GitHub 集成的轮询模式和安全改进，长期未审会增加与 main 分支冲突的风险。[PR 链接](https://github.com/nanocoai/nanoclaw/pull/2301)
- **[#2685] docs(signal): group typing, outbound reactions, quote-reply fix** — 由 `ira-at-work` 提交，自 2026-06-04 至今（57 天）仍为 OPEN。文档类 PR 审查成本低，建议尽快合入以避免持续偏离实际行为。[PR 链接](https://github.com/nanocoai/nanoclaw/pull/2685)
- **[#2317] feat(skills): add /add-voice-transcription-free-whisper skill** — 自 2026-05-07 积压 85 天。免费语音转写是一个呼声较高的功能方向，长期搁置可能降低社区贡献意愿。[PR 链接](https://github.com/nanocoai/nanoclaw/pull/2317)
- **[#2537] ci: add pre-commit hooks** — 自 2026-05-18 积压 74 天。CI 改进直接影响贡献者的开发体验和代码质量门槛，值得维护者排期评估。[PR 链接](https://github.com/nanocoai/nanoclaw/pull/2537)
- **[#2634] feat: add add-paws4claws skill** — 自 2026-05-28 积压 64 天。涉及 AWS 凭证代理的集成，属于企业级功能诉求，建议确认是否仍在路线图内。[PR 链接](https://github.com/nanocoai/nanoclaw/pull/2634)

---

**项目健康度总结**：NanoClaw 目前处于 **高频率迭代期**，核心团队持续投入基础设施加固和安全性优化（镜像加固、签名验证修复），社区侧也有稳定的新技能 PR 流。但需要警惕两个信号：一是 #3153 暴露的消息 ID 处理缺陷直接影响核心交互功能，需尽快定位修复；二是 5 个来自同一位贡献者（`ira-at-work`）的 PR 积压超过 2 个月，其中包含 #2301（87 天）和 #2317（85 天）两个较大功能，维护者若不及时响应，存在 contributor 流失风险。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-07-31

---

## 1. 今日速览

过去 24 小时 IronClaw 项目保持高强度迭代：共产生 40 条 Issue 更新（新开/活跃 34，关闭 6）与 50 条 PR 更新（待合并 29，已合并/关闭 21），无新版本发布。社区讨论热度集中于 #6284「错误可恢复性史诗」（15 条评论），同时技能系统（#6937/#6938）与目标架构重构（WS0 系列）两条主线均有实质性 PR 推进。值得关注的是，安全和隐私类问题（#6900 跨用户内存泄漏、#6866 共享主目录）被标记为 P0/P2，已进入维护者视野。整体项目健康度良好，但技能系统、架构重构等多个大型工作流仍在进行中，合并压力较大。

---

## 2. 版本发布

**无新版本发布。**

> 备注：PR [#5598](https://github.com/nearai/ironclaw/pull/5598)（`chore: release`）仍在开放中，涉及 `ironclaw_common` 0.4.2 → 0.5.0（含 API breaking changes）与 `ironclaw_skills` 0.3.0 → 0.4.0（含 API breaking changes）。该 PR 自 7 月 3 日创建至今已近一个月未合并，建议维护者关注并决策。

---

## 3. 项目进展

### 目标架构重构（WS0）正式启动
BenKurrek 今日提交了目标架构项目的第一批工作流（Workstream 0）共 9 个 Issue（[#6919](https://github.com/nearai/ironclaw/issues/6919) 至 [#6927](https://github.com/nearai/ironclaw/issues/6927)），涵盖：架构基线确认（[#6920](https://github.com/nearai/ironclaw/issues/6920)）、中性契约提取（[#6921](https://github.com/nearai/ironclaw/issues/6921)）、扩展包重构（[#6922](https://github.com/nearai/ironclaw/issues/6922)）、内核收窄（[#6923](https://github.com/nearai/ironclaw/issues/6923)）、组合层净化（[#6924](https://github.com/nearai/ironclaw/issues/6924)）、十家族目录布局（[#6926](https://github.com/nearai/ironclaw/issues/6926)）等。配套 PR 已落地两项：

- **PR [#6934](https://github.com/nearai/ironclaw/pull/6934)（已合并）** — `refactor(host_api): de-wildcard the contract prelude (WS0)`。移除了 45 个模块的扁平 `pub use <mod>::*` 预导入，所有消费者改为显式模块路径引用。这是行为保持的重构，为后续依赖控制奠定基础。
- **PR [#6936](https://github.com/nearai/ironclaw/pull/6936)（开放中）** — `test(architecture): baselines + shrink-only exception ratchet (WS0)`。为架构重组先建立度量基线，确保移动代码之前能阻止依赖债务增长。

该系列是 [#3773](https://github.com/nearai/ironclaw/issues/3773) 史诗的落地执行，标志着 IronClaw 从「讨论目标架构」进入「实际改造代码库」阶段。

### 技能系统双 PR 提交
- **PR [#6937](https://github.com/nearai/ironclaw/pull/6937)** — 修复关键词匹配缺陷（词边界问题，修复 #5417）并引入可测量的激活阈值。
- **PR [#6938](https://github.com/nearai/ironclaw/pull/6938)** — 技能激活被拒时现在会解释原因，并强制技能前置条件、在发现限制下存活。

两者对应 [#6565](https://github.com/nearai/ironclaw/issues/6565) 史诗的「路由/评分」与「缺失/不可用技能」两个半场。加上此前 [#6745](https://github.com/nearai/ironclaw/pull/6745) 的提交，技能系统的「发现 → 路由 → 激活 → 使用」链路正在全面补齐。

### Slack 原生斜杠命令落地
**PR [#6931](https://github.com/nearai/ironclaw/pull/6931)（已合并）** — 这是命令列车（command train）的最后一部分，实现了 `/ironclaw` 原生斜杠命令在 Slack 中的分发（前置为 #6873 角色门禁和 #6891 WebUI 命令面板）。

### 其他重要合并/修复
- **PR [#6935](https://github.com/nearai/ironclaw/pull/6935)** — 修复 libSQL 取消事务持有写锁导致的对话历史/时间轴 503 错误。

---

## 4. 社区热点

### #6284 — 错误可恢复性史诗（15 条评论）
🔗 [nearai/ironclaw Issue #6284](https://github.com/nearai/ironclaw/issues/6284)

这是当前社区讨论最集中的议题。该史诗要求：每一次运行中途的错误都必须满足「可恢复契约」——运行要存活、模型要看到错误、看到的内容要包含原因和成功条件、模型要有机会行动、最终不能报告非成功状态。15 条评论表明开发者们正在深入讨论这套契约的边界情况与实现路径。**诉求分析：** 社区关心的核心是「模型在真实运行中遇到错误时，系统不应让错误成为终点」，这与 AI Agent 在生产环境中的可靠性直接相关，也是 IronClaw 作为 AI 助手框架的核心竞争力。

### #6524 — Hermetic 能力与旅程测试平台（4 条评论）
🔗 [nearai/ironclaw Issue #6524](https://github.com/nearai/ironclaw/issues/6524)

该史诗指向「每个受支持的能力和关键用户旅程是否有确定性、有意义的覆盖」这一基本问题。4 条评论说明跨团队已有讨论，但尚未形成完整方案。**诉求分析：** 社区对测试基础设施的完整性有较高期待，希望从「有测试」走向「可证明覆盖」。

### #6565 — 技能发现/路由/激活史诗（1 条评论）
🔗 [nearai/ironclaw Issue #6565](https://github.com/nearai/ironclaw/issues/6565)

虽然评论数只有 1，但该史诗今日迎来了两个直接对应的 PR（#6937、#6938），说明项目方正在积极回应此史诗，后续讨论热度预计会上升。

---

## 5. Bug 与稳定性

按严重程度排列：

### 严重（安全/数据隐私）
| Issue | 描述 | 状态 |
|---|---|---|
| [#6900](https://github.com/nearai/ironclaw/issues/6900) | 共享频道默认主题绑定将多用户折叠进操作者的内存命名空间（跨用户内存泄漏），标记 suggested_P0 | 开放，无 fix PR |
| [#6866](https://github.com/nearai/ironclaw/issues/6866) | 所有用户共享同一主目录，工作区互相可见，存在隐私风险 | 开放，无 fix PR |

### 中等（功能故障）
| Issue | 描述 | 状态 |
|---|---|---|
| [#6752](https://github.com/nearai/ironclaw/issues/6752) | 实例删除报错，重新登录后卡在「Loading your agents...」 | 开放，无 fix PR |
| [#6834](https://github.com/nearai/ironclaw/issues/6834) | Slack 集成设置流程无法完成，集成后处于不可用状态 | 开放，无 fix PR |
| [#6940](https://github.com/nearai/ironclaw/issues/6940) | IronHub 技能 CTA 按钮在所有技能中均返回 404 | 开放，新增，无 fix PR |
| [#6916](https://github.com/nearai/ironclaw/issues/6916) | 预览弹窗将 `.md`/`.mdx` 文件当纯文本渲染 | 开放，无 fix PR |
| [#6915](https://github.com/nearai/ironclaw/issues/6915) | 助手消息中的工作区文件链接点击后不打开文件 | 开放，无 fix PR |

### 较低（分页/数据展示）
| Issue | 描述 | 状态 |
|---|---|---|
| [#6904](https://github.com/nearai/ironclaw/issues/6904) | 日志页无法加载首页之后的数据（`nextCursor` 未使用） | 开放，无 fix PR |
| [#6903](https://github.com/nearai/ironclaw/issues/6903) | 管理员用户列表无法加载超过 100 个用户 | 开放，无 fix PR |
| [#6902](https://github.com/nearai/ironclaw/issues/6902) | 项目页展示后端未提供的虚构指标（$0.00 spend、0 失败等） | 开放，无 fix PR |

**已有修复 PR 的稳定性问题：**
- **PR [#6935](https://github.com/nearai/ironclaw/pull/6935)** 已提交修复 libSQL 事务取消导致的 503 错误（对话历史/时间线）。
- **PR [#6855](https://github.com/nearai/ironclaw/pull/6855)** 已提交修复上下文溢出时的压缩失败，改为确定性秘密编辑（`[REDACTED]`）而非直接失败。

---

## 6. 功能请求与路线图信号

### 明确的路线图信号

**目标架构重构（[#3773](https://github.com/nearai/ironclaw/issues/3773)）** 是当前最大的路线图项目，今日密集创建的 WS0 系列 Issue（[#6919](https://github.com/nearai/ironclaw/issues/6919)–[#6927](https://github.com/nearai/ironclaw/issues/6927)）表明这个项目已从规划进入执行。每个 Issue 都有明确的验收标准，预计后续数周将有一系列「move-only」PR 陆续合入。

**技能系统史诗（[#6565](https://github.com/nearai/ironclaw/issues/6565)）** 随 #6937/#6938 的提交已进入「实现后半场」，预计下一版本会包含更可靠的技能激活与更好的失败解释。

### 新增用户功能请求

| Issue | 功能 | 说明 |
|---|---|---|
| [#6939](https://github.com/nearai/ironclaw/issues/6939) | 迁移工具，将 legacy agent（Hermes/Openclaw）的设置与记忆迁移到 IronClaw | 用户反馈：迁移成本高，阻碍采用 |
| [#6905](https://github.com/nearai/ironclaw/issues/6905) | 使用 keyless cosign 对发布进行签名以便验证 | 来自 AUR 打包者，建议纳入发布流程 |
| [#6839](https://github.com/nearai/ironclaw/issues/6839) | 为内容哈希的 JS/CSS 添加不可变缓存 | 性能优化，社区已提 | 

### 可能被纳入下一版本的信号

- **UI 组件库建设**（[#6910](https://github.com/nearai/ironclaw/issues/6910) Switch 组件、[#6909](https://github.com/nearai/ironclaw/issues/6909) 管理端删除流程迁移到共享 ConfirmDialog）—— 这些属于 WebUI 基础组件的一致性工作，规模不大，很可能会被排入近期迭代。
- **托管 MCP 服务器注册**（PR [#6930](https://github.com/nearai/ironclaw/pull/6930)）—— 扩展系统的新增能力，支持 OAuth 自动检测，XL 规模 PR，值得关注。
- **Agent 活动与流式 UX**（PR [#6901](https://github.com/nearai/ironclaw/pull/6901)）—— `webui_v2` 的可用性升级，来自新贡献者，属于「体验类」优化方向。

---

## 7. 用户反馈摘要

- **隐私担忧**（来源：[#6866](https://github.com/nearai/ironclaw/issues/6866)）：用户 `tobias.holenstein` 明确表示「所有用户共享同一主目录、互相可见工作区」是隐私隐患，期望每个用户拥有隔离的主目录。这表明多用户部署场景中数据隔离是刚需。
- **迁移成本阻碍采用**（来源：[#6939](https://github.com/nearai/ironclaw/issues/6939)）：用户反馈「从 Hermes/Openclaw 迁移到 IronClaw 需要从头开始，许多人不想这样做」。这是影响用户采纳率的关键摩擦点。
- **错误恢复的高期待**（来源：[#6284](https://github.com/nearai/ironclaw/issues/6284)）：该史诗 15 条评论显示社区对「模型能从每次错误中恢复」有明确且高的期待，特别是「错误信息必须包含原因和成功条件」这一条——表明开发者希望模型不仅能报告错误，还能从中学习并继续执行。
- **安全事件关注**（来源：[#6900](https://github.com/nearai/ironclaw/issues/6900)）：跨用户内存泄漏被标记为 suggested_P0，说明用户对多租户场景下的数据边界非常敏感。

---

## 8. 待处理积压

### 长期未关闭的重要 Issue

| Issue | 创建时间 | 说明 |
|---|---|---|
| [#3773](https://github.com/nearai/ironclaw/issues/3773) | 2026-05-19 | 目标架构史诗。已存在 2.5 个月，今日开始有实际执行。建议维护者对各 WS 设置预期的完成时间 |
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | 2026-07-19 | 错误可恢复性史诗。讨论热但尚未见对应 PR。考虑到 15 条评论的高关注度，建议尽快产出可行性方案 |

### 长期未合并的重要 PR

| PR | 创建时间 | 说明 |
|---|---|---|
| [#5598](https://github.com/nearai/ironclaw/pull/5598) | 2026-07-03 | Release PR（含 breaking changes），已开放 28 天。阻塞 `ironclaw_common` 0.5.0 与 `ironclaw_skills` 0.4.0 发布。如需变更发布策略或拆分发布，建议尽快决策 |
| [#6364](https://github.com/nearai/ironclaw/pull/6364) | 2026-07-20 | 跨通道附件流，XL 规模。已开放 11 天，涉及 WebUI/Telegram/Slack 多通道，建议安排 reviewer |
| [#5664](https://github.com/nearai/ironclaw/pull/5664) | 2026-07-05 | GitHub Actions 依赖批量更新（16 个），已开放 26 天。虽然风险低，但长期不合并会增加后续升级成本 |

### 需关注的中等规模待合并 PR

- **PR [#6780](https://github.com/nearai/ironclaw/pull/6780)**（XL，7 月 28 日提交）— IronHub 注册/安装网关 + 私有 manifest 源。对应 issue [#6940](https://github.com/nearai/ironclaw/issues/6940) 的 CTA 404 问题，说明 IronHub 相关能力正在建设中。
- **PR [#6889](https://github.com/nearai/ironclaw/pull/6889)**（XL，7 月 29 日提交）— CI 覆盖率和变异测试门槛。对项目质量保障有重要意义，建议优先 review。

---

## 总结

IronClaw 当前处于「架构重构 + 技能系统完善 + 安全和隐私加固」三大工作并行的密集开发期。项目活跃度高（日更新 90+），方向明确（架构可维护性、Agent 错误恢复、多租户安全），但需注意：多个 epic 级 Issue（#6284、#6565、#3773）和大型 PR（#6364、#6780、#6889）的长期开放可能带来技术债累积与社区耐心消耗。建议维护者在推进新功能的同时，对已开放的 release PR 和大型 PR 给出明确的合并时间预期。

---
*本日报由 AI 自动生成，数据来源：github.com/nearai/ironclaw（数据采集时间：2026-07-31）。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-07-31

> 数据来源：github.com/netease-youdao/LobsterAI · 数据窗口：过去24小时

---

## 1. 今日速览

过去24小时内，LobsterAI 保持较高开发活跃度：新 Issue 更新为 0 条，但 PR 更新达 10 条（其中 8 条已合并/关闭，2 条仍开放），并发布了 2026.7.29 新版本。项目重心明显落在 **cowork 协同体验完善、企业级账号隔离、每日签到/活动系统** 三大方向，同时包含一项 Windows 安装器进程残留修复和一项电子邮件附件安全漏洞修复，稳定性与安全性均有关注。整体来看，项目正处于 **功能密集迭代 + 企业级能力加固** 的快节奏阶段，合并效率较高，社区主动提交的长期积压 PR 也有所更新，健康度良好。

---

## 2. 版本发布

### LobsterAI 2026.7.29
🔗 [Releases · netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI/releases)

**主要更新内容：**

| 类型 | 内容 | 关联 PR |
|------|------|---------|
| ✨ 新功能 | cowork 侧边聊天支持为选中文本添加标签 | [#2405](https://github.com/netease-youdao/LobsterAI/pull/2405) |
| ✨ 新功能 | 支持 Kimi K3 模型 | [#2381](https://github.com/netease-youdao/LobsterAI/pull/2381) |
| 🔧 修复 | 加固会话生命周期与令牌刷新逻辑（auth） | 随版本附带 |

**破坏性变更：** 未从 changelog 中观察到明显破坏性变更。Kimi K3 为新增模型支持，不影响既有模型调用；cowork 侧边聊天标签为增量功能。

**迁移注意事项：** 涉及 auth 会话管理的改动，建议部署后关注令牌刷新异常和会话过期相关日志；使用 Windows NSIS 安装包的用户，建议升级后重新安装一次以确保进程残留修复生效（详见下文 Bug 与稳定性）。

---

## 3. 项目进展

今日合并/关闭的 8 条 PR 覆盖 5 个功能/修复方向，项目整体在 **体验细节、企业级能力、安全加固** 三个维度均有推进：

### 3.1 Cowork 协同体验持续补全
- **[#2397] feat(cowork): add isolated /btw side chat**（已合并）  
  🔗 https://github.com/netease-youdao/LobsterAI/pull/2397  
  新增可编辑浮动静默侧边聊面板，支持拖动/八向缩放/停止/追问，`/btw` 执行与主会话隔离，并通过 OpenClaw 工具流路径路由。这是一个较大的功能合入。
- **[#2406] fix(cowork): improve side chat input handling**（已合并）  
  🔗 https://github.com/netease-youdao/LobsterAI/pull/2406  
  优化侧边聊输入体验：面板开启时累积选中文本摘要、移除产品级提问长度上限、保留有界上下文与传输安全校验。

### 3.2 企业级账号/服务流隔离
- **[#2409] feat(enterprise): isolate account-scoped auth and service flows**（已合并）  
  🔗 https://github.com/netease-youdao/LobsterAI/pull/2409  
  按账号隔离 auth、媒体、排队跟进、分享、部署状态；防止异步响应串扰新登录账号；实施企业权益校验，增强失败回滚与清理能力。这是企业版方向的核心架构级改进。

### 3.3 活动/签到系统上线
- **[#2408] feat(activity): add native daily check-in experience**（已合并）  
  🔗 https://github.com/netease-youdao/LobsterAI/pull/2408  
  桌面侧边栏和账户菜单新增服务端驱动的原生每日签到；未登录用户引导到登录流程，已登录用户可领取每日积分且不向渲染进程暴露账户令牌。
- **[#2411] feat(sidebar): support check-in and banner carousel**（已合并）  
  🔗 https://github.com/netease-youdao/LobsterAI/pull/2411  
  侧边栏支持签到 + 图片横幅轮播，多条目可共存，单条目时自动隐藏导航控件。

### 3.4 平台稳定性与安全修复
- **[#2412] fix(nsis): re-kill survivor processes on every stop poll round**（已合并）  
  🔗 https://github.com/netease-youdao/LobsterAI/pull/2412  
- **[#2389] fix(email): prevent attachment path traversal**（已合并）  
  🔗 https://github.com/netease-youdao/LobsterAI/pull/2389

### 3.5 UI 一致性优化
- **[#2410] style(sites): align page layout with management views**（已合并）  
  🔗 https://github.com/netease-youdao/LobsterAI/pull/2410  
  Sites 页面在宽度、间距、搜索样式上与 Skills / MCP 管理页对齐。

---

## 4. 社区热点

今日无高评论量/高反应的 Issue 或 PR（所有关联讨论数据为 0 或未公开），未出现明显社区焦点事件。值得注意的信号是：**两条已长期搁置的社区 PR（#1228、#1231）在今日被更新**，表明社区贡献者仍在持续关注和同步自己的提交。

- [#1228] feat(cowork): 新增会话「标记为未读」功能（更新于 2026-07-30）  
  🔗 https://github.com/netease-youdao/LobsterAI/pull/1228
- [#1231] fix(agent): AgentCreateModal 支持 Escape 键关闭，并在重新打开时重置表单（更新于 2026-07-30）  
  🔗 https://github.com/netease-youdao/LobsterAI/pull/1231

这两条 PR 虽已标记为 `stale`，但社区作者仍在跟进，潜台词是 **希望维护者给予明确回应（合并/关闭/请求修改）**。

---

## 5. Bug 与稳定性

今日无新 Bug Issue 上报，但两条已合并 PR 涉及修复，按严重程度排列如下：

| 严重程度 | 问题描述 | 状态 | 关联 PR |
|---------|---------|------|---------|
| 🔴 高（安全） | 电子邮件附件存在路径遍历风险，恶意文件名可导致附件写出沙箱目录 | 已修复并合并，附带跨平台安全测试与邮件技能版本升级 | [#2389](https://github.com/netease-youdao/LobsterAI/pull/2389) |
| 🟡 中（稳定性） | Windows NSIS 卸载/更新时，进程内核拆除可能晚于轮询窗口，导致残留进程存活，阻塞安装流程 | 已修复并合并，改为每轮轮询重复发送停止指令，超时后记录进程明细（name/pid/path） | [#2412](https://github.com/netease-youdao/LobsterAI/pull/2412) |

两项修复均已随今日合入流程或 2026.7.29 版本发布触达用户，建议 Windows 用户在安装更新后关注卸载/覆盖安装是否出现异常进程残留；使用邮箱技能的团队建议升级技能版本并复查附件上传/下载链路。

---

## 6. 功能请求与路线图信号

从今日合入的 PR 与版本更新中，可识别出以下路线图信号：

| 方向 | 具体信号 | 来源 | 是否可能进入下一版本 |
|------|---------|------|--------------------|
| 模型生态扩展 | 支持 Kimi K3，模型接入节奏加快，可能未来持续跟进新模型 | [#2381](https://github.com/netease-youdao/LobsterAI/pull/2381) | 已随 2026.7.29 发布 |
| 协同办公体验 | `/btw` 侧边聊天已成型，文本标签、异步隔离等细节持续打磨 | [#2397](https://github.com/netease-youdao/LobsterAI/pull/2397) / [#2406](https://github.com/netease-youdao/LobsterAI/pull/2406) | 后续可能有更多交互增强 |
| 企业版能力 | 账号级隔离、权益校验、回滚清理——企业部署/多账号场景是当前重点投入方向 | [#2409](https://github.com/netease-youdao/LobsterAI/pull/2409) | 预计持续迭代 |
| 用户活跃运营 | 每日签到 + 横幅轮播表明项目开始构建用户留存/运营体系 | [#2408](https://github.com/netease-youdao/LobsterAI/pull/2408) / [#2411](https://github.com/netease-youdao/LobsterAI/pull/2411) | 新增线，或有更多活动类功能 |
| 社区请求 | 会话「标记为未读」、Modal Escape 关闭/重置表单，均为 UX 细节增强类需求 | [#1228](https://github.com/netease-youdao/LobsterAI/pull/1228) / [#1231](https://github.com/netease-youdao/LobsterAI/pull/1231) | 可能被纳入后续 UX 打磨批次 |

---

## 7. 用户反馈摘要

由于今日无新 Issue，且现有 PR/Issue 均未公开评论数据，无法提供直接的定性反馈。但从 PR 提交内容可以合理推断用户侧的核心诉求：

- **Windows 安装体验**：#2412 修复的进程残留问题直接指向用户在「升级/卸载」场景下可能遇到的卡死或失败，说明安装器健壮性是真实痛点。
- **安全信任**：#2389 修复邮件附件路径遍历，呼应企业用户对数据安全的关注，尤其是附件下载/上传类操作需要明确边界。
- **多账号/企业场景**：#2409 的隔离设计表明用户在使用多账号时可能遭遇状态串扰，影响工作台使用体验，企业用户是重要使用群体。

整体而言，社区反馈以「功能补齐」和「细节体验优化」为主，缺乏负面情绪信号。

---

## 8. 待处理积压

以下两条 PR 均创建于 2026-04-01，已存在约 4 个月，目前标记为 `stale` 但仍处于开放状态，今日有更新动作，值得维护者关注：

| PR | 标题 | 最后更新 | 状态 | 说明 |
|----|------|---------|------|------|
| [#1228](https://github.com/netease-youdao/LobsterAI/pull/1228) | feat(cowork): 新增会话「标记为未读」功能 | 2026-07-30 | OPEN / stale | 功能相对独立：列表/详情菜单新增未读标记、Redux action、中英文 i18n。实现完整，工作量可控 |
| [#1231](https://github.com/netease-youdao/LobsterAI/pull/1231) | fix(agent): AgentCreateModal 支持 Escape 键关闭，并在重新打开时重置表单 | 2026-07-30 | OPEN / stale | 修复两个明确的 UX 一致性问题，其他 Modal 已有相同模式，落地风险低 |

**建议：** 两条 PR 均已进行过更新同步，技术方案清晰且不涉及架构级改动，建议维护者在下一轮迭代中优先 review，尽早给出「合并/请求修改/关闭」的明确结论，避免社区贡献者长期等待。

---

*本日报由 AI 自动生成 · 数据源：LobsterAI GitHub 仓库 · 统计窗口为 2026-07-30 至 2026-07-31*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-07-31

## 今日速览

过去 24 小时项目保持中等偏上活跃度：新增 2 条 Issue（1 个安全 Bug、1 个功能请求），4 条 PR 有状态更新，其中 1 条 PR（#1166 Slack 渠道升级）完成合并。基础设施相关 PR #1174（埋点/反馈）与权限安全修复 PR #1170 均在持续更新，向合并方向推进。今日无新版本发布。

> 整体判断：项目正处于渠道功能完善与安全加固阶段，社区参与度良好，但安全类漏洞报告需重点关注其修复进度。

## 版本发布

今日无新 Release。

---

## 项目进展

### ✅ 已合并/关闭

- **#1166 [CLOSED] feat(slack): per-message acknowledgment reactions, phases, reconnect supervision, and Block Kit**
  链接：[moltis-org/moltis PR #1166](https://github.com/moltis-org/moltis/pull/1166)

  在 #1165 合并的确认反应机制基础上，进一步为 Slack 渠道补齐了完整的消息生命周期处理：包括逐消息确认反应、阶段状态管理、连接重连监督和 Block Kit 支持。该改动解决了 Slack bot 无法显示"正在输入"状态的问题，利用反应（reactions）作为消息接收与进度信号，并在排队、取消、重试、回调突发和投递失败等场景下保证生命周期安全。

### ⏳ 待合并 / 进行中

- **#1174 Add instrumentation and feedback collection infrastructure**
  链接：[moltis-org/moltis PR #1174](https://github.com/moltis-org/moltis/pull/1174)

  PR 提出构建后端无关的 agent 可观测性基础设施：不可变 completion-only turns 记录、streaming/non-streaming 一致性、provider failover 归因、缓存感知 token 用量、推理过程记录，以及 Langfuse v4 导出和 OTLP 后端支持，同时加入端用户反应反馈收集。该改动若落地，将显著增强 Moltis 在真实生产环境中的诊断能力。

- **#1170 fix(channels): gate /sh and privileged tools behind a per-account operators list**
  链接：[moltis-org/moltis PR #1170](https://github.com/moltis-org/moltis/pull/1170)

  此前通过访问 allowlist 的渠道发送者仍可触达特权命令与主机工具，该 PR 将"访问权限"与"操作员权限"分离，引入明确的 per-account `operators` 列表，并在 commands、callbacks、queue replay、chat execution 以及外部接口等边界强制实施。这项安全加固与今日报告的 Vault 认证缺失问题形成了呼应。

---

## 社区热点

今日 Comments 均为 0，无高讨论量 Issue/PR。但从更新频率和内容看，以下两条最受关注：

- **#1178 [Feature]: Let agents send Telegram inline buttons and receive structured callback responses** — 新开功能请求，代表用户对 Telegram 渠道交互深度的重要诉求。
  链接：[Issue #1178](https://github.com/moltis-org/moltis/issues/1178)

- **#1174 基础设施 PR** — 连续多日更新，涵盖可观测性、token 统计、反馈收集等横切能力，评审讨论大概率会持续数日。
  链接：[PR #1174](https://github.com/moltis-org/moltis/pull/1174)

---

## Bug 与稳定性

### 🔴 严重（安全漏洞，尚未有 fix PR）

- **#1177 [Bug]: Vault Unlock/Recovery Endpoints Missing Authentication (CWE-306)**
  链接：[Issue #1177](https://github.com/moltis-org/moltis/issues/1177)

  Vault 的解锁/恢复端点缺少认证机制，属于 CWE-306（关键功能缺少认证）。这是一个潜在的高危漏洞——未授权用户可能通过该端点对 Vault 进行操作。Issue 作者表示使用的是最新版本，目前尚未看到关联的修复 PR，建议优先处理，并考虑与 #1170 的权限分离工作一并评估。

---

## 功能请求与路线图信号

- **#1178 Telegram 内联按钮与结构化回调**
  链接：[Issue #1178](https://github.com/moltis-org/moltis/issues/1178)

  用户希望 agent 能够发送 Telegram inline buttons，并接收结构化 callback 响应。目前该功能尚未有对应 PR。结合刚合并的 Slack 渠道升级（#1166），可以判断项目正在系统性增强各 IM 渠道的交互能力——Telegram 的交互式回调极有可能被纳入近期渠道迭代计划。

- **#1176 Web 端 Markdown 复制与会话导出**
  链接：[PR #1176](https://github.com/moltis-org/moltis/pull/1176)

  这一功能请求已经以 PR 形式落地：保留复制助手回复时的原始 Markdown（包括实时和持久化回复），并新增会话级"另存为 Markdown"操作。说明用户对 Web 端数据可移植性的需求已被快速响应。

---

## 用户反馈摘要

由于今日 Issue/PR 评论均为 0，只能从 Issue 描述中提取有限信息：

- **安全审计的真实场景（#1177）**：提交者完成了预检清单、确认未重复报告、使用最新版本。这说明用户将 Moltis 部署在真实环境中，并且对认证边界有明确的安全预期。这类报告通常来自对自己基础设施有较高安全标准的团队，其诉求不仅是"修复这一个漏洞"，还希望项目在认证设计上更加系统化。

- **Telegram 深度集成需求（#1178）**：提交者在 Preflight Checklist 中明确表示已搜索过已有请求，确认没有 general-purpose agent 创建的 Telegram inline button 功能。这说明用户具备在 Telegram 上构建复杂交互工作流的真实场景，当前实现无法满足其需求。

---

## 待处理积压

以下 PR/Issue 处于等待处理状态，建议维护者重点关注：

| 项目 | 创建时间 | 状态 | 说明 |
|---|---|---|---|
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | 07-26 | 待合并 | 权限体系加固，与 #1177 安全漏洞直接相关，建议优先 review |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | 07-27 | 待合并 | 基础设施层的重要改动，review 范围大，已持续 4 天 |
| [#1177](https://github.com/moltis-org/moltis/issues/1177) | 07-30 | 新开，无响应 | 安全漏洞（CWE-306），尚未有维护者回复或 fix 方案 |

> 注：由于数据时间范围限制，以上为最近 5 天内的待处理项。若需识别更早期长期未响应的积压项，建议查阅完整 issue/PR 列表。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-07-31）

> 数据来源：GitHub `agentscope-ai/QwenPaw` 仓库 · 统计窗口：2026-07-30 → 2026-07-31

## 1. 今日速览

- 过去 24 小时 CoPaw 保持较高社区活跃度：共 25 条 Issue 更新（新开/活跃 18，关闭 7），48 条 PR 更新（22 条待合并，26 条已合并/关闭）。
- 无新版本 Release，但功能与修复收敛明显：26 个 PR 进入合并/关闭状态，覆盖 `/mission` TypeError、Matrix E2EE、sandbox 清理、CI 修复、computer-use 桌面自动化等多个方向。
- 社区讨论热度集中在三处：v2.0 性能回归（[#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307)）、MCP 断线恢复（[#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524)）、fork PR 被 CI 阻塞（[#6563](https://github.com/agentscope-ai/QwenPaw/issues/6563)）。
- 积极信号是阻塞外部贡献者的 CI 问题已关闭，且 [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524)、[#6557](https://github.com/agentscope-ai/QwenPaw/issues/6557) 均已出现待合并 fix PR，维护者响应速度较快。
- 整体健康度评估：中高活跃；但 [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) 性能回归、[#6558](https://github.com/agentscope-ai/QwenPaw/issues/6558) 会话数据完整性等问题仍无固定修复，需持续跟踪。

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合入/关闭的 PR 数量可观，共 26 条，其中以下 PR 对项目能力或稳定性有实质性推进：

- **[PR #6562](https://github.com/agentscope-ai/QwenPaw/pull/6562)（已关闭）**：修复 [#6533](https://github.com/agentscope-ai/QwenPaw/issues/6533) `/mission` 命令 TypeError、[#6506](https://github.com/agentscope-ai/QwenPaw/issues/6506) 子会话 approval_level 不继承问题。这是一次由 first-time contributor 提交的多 bug 修复，减少 Mission Mode 使用阻塞。
- **[PR #6424](https://github.com/agentscope-ai/QwenPaw/pull/6424)（已关闭）**：合入 `computer_use` 原生桌面 GUI 自动化能力，支持 Windows/macOS 上的 accessibility-first + Tauri 控制模式。这是桌面端 Agent 自动化能力的重要扩展。
- **[PR #6556](https://github.com/agentscope-ai/QwenPaw/pull/6556)（已关闭）**：QwenPaw Creator 插件大版本迭代，新增创建 checkpoint、首页改版、媒体恢复、导入导出与双语指南，同时包含 host 侧小修复。
- **[PR #6486](https://github.com/agentscope-ai/QwenPaw/pull/6486)（已关闭）**：修复 Matrix 通道 E2EE 在 Python 3.12 下不可用的问题；通过探测 vodozemac 替代 legacy `olm` 绑定。
- **[PR #6256](https://github.com/agentscope-ai/QwenPaw/pull/6256)（已关闭）**：sandbox 不可用时的 fallback 行为变为可配置，补上安全治理链路中的一个缺口。
- **[PR #6582](https://github.com/agentscope-ai/QwenPaw/pull/6582) / [PR #6584](https://github.com/agentscope-ai/QwenPaw/pull/6584)（已关闭）**：分别修复 sandbox 清理逻辑与 CI reload 变更检测问题。

当前待合并 PR 中，较关键的有：

- **[PR #6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)**：统一 provider 发现、模型元数据、路由与 Agent 控制，试图系统性解决 [#6167](https://github.com/agentscope-ai/QwenPaw/issues/6167) 中的 7 类 provider-model 痛点。属于架构级改动，已开放 10 天，需维护者重点评审。
- **[PR #6586](https://github.com/agentscope-ai/QwenPaw/pull/6586)**：MCP 服务端重启/会话过期后自动恢复，直指 [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524)。
- **[PR #6590](https://github.com/agentscope-ai/QwenPaw/pull/6590)**：修复 macOS 上 Computer Use 的屏幕录制权限归属问题。
- **[PR #6561](https://github.com/agentscope-ai/QwenPaw/pull/6561)**：确保 MCP 暴露给 LLM 的工具名以字母开头，修复 Kimi 等严格 API 的 400 报错。

---

## 4. 社区热点

- **[Issue #6307：v2.0 每次简单回复固定增加约 2s 开销](https://github.com/agentscope-ai/QwenPaw/issues/6307)**（7 条评论）
  这是当前社区最关心的性能回归。用户从 v1.1.12.post2 升级到 v2.0.0.post3 后，即使问题极简单，也会产生与模型延迟无关的约 2 秒固定开销。背后诉求是 v2.0 架构升级不应牺牲基础对话体验，性能回归已被视为升级最大阻力。

- **[Issue #6524：MCP 后端重启后客户端无法自动恢复](https://github.com/agentscope-ai/QwenPaw/issues/6524)**（5 条评论）
  远程 MCP Server 重启后，QwenPaw 仍复用旧 `mcp-session-id`，必须手动执行 `list mcp` 才能重新连接。该问题直接影响依赖 MCP 工具的日常自动化工作流，已有 PR [#6586](https://github.com/agentscope-ai/QwenPaw/pull/6586) 待合并。

- **[Issue #6563：CI workflow 阻塞所有 fork PR](https://github.com/agentscope-ai/QwenPaw/issues/6563)**（4 条评论）
  `real-behavior-proof.yml` 在 fork PR 上因权限问题全部失败，导致外部贡献者无法通过 CI。该问题已关闭，是社区贡献路径的重要疏通。

- **[Issue #6464：模型连接测试全部失败，模型下拉列表为空](https://github.com/agentscope-ai/QwenPaw/issues/6464)**（3 条评论）
  部署在 AgentScope Platform 上的 v2.0.1 无法连接任何模型，Pro/Free 模型均不可选。已关闭，但未关联 fix PR，需关注是否在后续版本彻底解决。

此外，[#6558](https://github.com/agentscope-ai/QwenPaw/issues/6558)、[#6559](https://github.com/agentscope-ai/QwenPaw/issues/6559)、[#6560](https://github.com/agentscope-ai/QwenPaw/issues/6560) 三个来自同一用户的会话 UX/数据完整性 Issue，集中反映了桌面端聊天界面在基础交互上的不完善，是当前 UI 迭代最重要的用户声音。

---

## 5. Bug 与稳定性

### 严重：数据丢失 / 核心功能不可用

- **[#6555：Dream 记忆压缩遗漏早期会话事件](https://github.com/agentscope-ai/QwenPaw/issues/6555)**（暂无 fix PR）
  用户早间的关键操作如果在当天 Dream 进程运行时已被上下文压缩滚出活跃窗口，将**永远不会写入当日 memory 文件**。这对依赖长期记忆的用户属于数据丢失级问题。
- **[#6558：多会话 UI 数据完整性问题](https://github.com/agentscope-ai/QwenPaw/issues/6558)**（暂无 fix PR）
  切换模式丢失最后一条消息、切换会话后 Agent 回复从头重新渲染、用户指令被系统重构漂移。属于前端状态管理严重缺陷，直接影响日常对话可信度。
- **[#6464：模型连接测试失败且模型下拉列表为空](https://github.com/agentscope-ai/QwenPaw/issues/6464)**（已关闭）
  核心模型链路不可用，已关闭但仍建议验证后续版本覆盖情况。

### 较高：功能性缺陷 / 性能回归

- **[#6307：v2.0 固定约 2s 请求开销](https://github.com/agentscope-ai/QwenPaw/issues/6307)**（暂无 fix PR）
  影响所有用户的所有简单对话请求，是当前最高优先级性能回归。
- **[#6589：`execute_shell_command` 大量输出导致 UI 冻结](https://github.com/agentscope-ai/QwenPaw/issues/6589)**（暂无 fix PR）
  数万行 stdout 一次性渲染阻塞主线程，用户只能强制关闭应用。
- **[#6512：`execute_shell_command` 大输出截断/Internal error](https://github.com/agentscope-ai/QwenPaw/issues/6512)**（暂无 fix PR）
  超过约 30KB 输出即被截断，无法获得完整报告/日志。
- **[#6565：`execute_shell_command` 多行命令换行被折叠 + PIPE 后台进程卡住](https://github.com/agentscope-ai/QwenPaw/issues/6565)**（暂无 fix PR）
  引号外换行被替换为空格，破坏多行命令语义；Linux PIPE 模式下后台进程会卡住。
- **[#6588：`spawn_subagent` 因 `batch` 必填导致 single-task 模式不可用](https://github.com/agentscope-ai/QwenPaw/issues/6588)**（暂无 fix PR）
  模型侧工具 schema 暴露 `batch` 为必填，导致无法创建前台单任务子代理。
- **[#6533：`/mission` 命令 TypeError](https://github.com/agentscope-ai/QwenPaw/issues/6533)**（已由 [PR #6562](https://github.com/agentscope-ai/QwenPaw/pull/6562) 修复）
- **[#6578：Cron 任务 `dispatch.mode: "final"` 不生效](https://github.com/agentscope-ai/QwenPaw/issues/6578)**（已关闭）

### 中等：生态 / 集成问题

- **[#6524：MCP server 重启后 session 不自动恢复](https://github.com/agentscope-ai/QwenPaw/issues/6524)**（已有 [PR #6586](https://github.com/agentscope-ai/QwenPaw/pull/6586)）
- **[#6557：MCP 工具名以连字符开头导致 LLM API 400](https://github.com/agentscope-ai/QwenPaw/issues/6557)**（已有 [PR #6561](https://github.com/agentscope-ai/QwenPaw/pull/6561)）
- **[#6506：`approval_level: OFF` 不传递给 `spawn_subagent` 子会话](https://github.com/agentscope-ai/QwenPaw/issues/6506)**（已由 [PR #6562](https://github.com/agentscope-ai/QwenPaw/pull/6562) 修复）
- **[#6476：Matrix 端到端加密不可用](https://github.com/agentscope-ai/QwenPaw/issues/6476)**（已由 [PR #6486](https://github.com/agentscope-ai/QwenPaw/pull/6486) 修复）

### 较低：基础设施 / CI

- **[#6563：CI workflow 阻塞所有 fork PR](https://github.com/agentscope-ai/QwenPaw/issues/6563)**（已关闭）

---

## 6. 功能请求与路线图信号

### 很可能进入下一版本

- **MCP 工具名规范化**：[#6557](https://github.com/agentscope-ai/QwenPaw/issues/6557) 已有 [PR #6561](https://github.com/agentscope-ai/QwenPaw/pull/6561)，修复方向明确。
- **上传文件提示保留原始中文名**：[#6453](https://github.com/agentscope-ai/QwenPaw/issues/6453) 已有两个相关 PR（[#6567](https://github.com/agentscope-ai/QwenPaw/pull/6567)、[#6492](https://github.com/agentscope-ai/QwenPaw/pull/6492)），预计会择优合入或整合。
- **会话管理基础体验**：[#6560](https://github.com/agentscope-ai/QwenPaw/issues/6560) 提出复制、ESC 停止、撤销指令、Code 模式优化等；[#6559](https://github.com/agentscope-ai/QwenPaw/issues/6559) 提出分叉会话树形分组；[#6408](https://github.com/agentscope-ai/QwenPaw/issues/6408) 提出 `/undo`。这组需求很可能推动 Console 会话 UI 的下一轮迭代。
- **`execute_shell_command` 输出机制改造**：[#6512](https://github.com/agentscope-ai/QwenPaw/issues/6512)、[#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) 共同指向“大输出截断/渲染卡死”，自动写入文件或流式读取是明确方向。

### 路线图信号

- **工作流 / 强逻辑流程**：[#6571](https://github.com/agentscope-ai/QwenPaw/issues/6571) 提出类 Dify 工作流，用于权限判断等强制逻辑，避免 skill 无法保证的越权风险。结合今日合入的 sandbox fallback 可配置（[PR #6256](https://github.com/agentscope-ai/QwenPaw/pull/6256)），可以看出项目正在往“可治理、可强制策略”的方向加强。
- **桌面端轻量交互**：[#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568) 建议参考豆包/Raycast，增加全局快捷键唤出浮动输入框，降低“随手提问”的摩擦。
- **主题/皮肤定制**：[PR #6312](https://github.com/agentscope-ai/QwenPaw/pull/6312) 仍以 draft 形式开放，等待维护者确认方向。
- **小 UX 优化**：[#6587](https://github.com/agentscope-ai/QwenPaw/issues/6587) 桌面应用名去掉 “Desktop”、[#6585](https://github.com/agentscope-ai/QwenPaw/issues/6585) 动态字符统计增加关闭开关、[#6583](https://github.com/agentscope-ai/QwenPaw/issues/6583) 拖入文件多行显示、[#6452](https://github.com/agentscope-ai/QwenPaw/issues/6452) 多模态能力提示优化。

---

## 7. 用户反馈摘要

- **性能是升级的最大痛点**：用户在 [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) 中明确表示，v2.0 相比 v1.x 每次简单回复多出约 2 秒固定开销，且“与模型延迟无关”。这会直接影响用户升级意愿。
- **MCP 稳定性影响生产工作流**：[#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) 用户描述了 Server 重启后需手动 `list mcp` 才能恢复连接的场景，说明运行时的自动恢复能力是集成场景的硬需求。
- **记忆机制引发信任顾虑**：[#6555](https://github.com/agentscope-ai/QwenPaw/issues/6555) 用户发现早间关键操作因上下文被压缩而无法写入当日记忆文件，担心 Agent 长期记忆不可靠。
- **界面细节直接影响注意力**：[#6585](https://github.com/agentscope-ai/QwenPaw/issues/6585) 用户反馈“已接收字符”动态刷新“闪的眼睛疼”，希望只显示加载完成状态；[#6587](https://github.com/agentscope-ai/QwenPaw/issues/6587) 用户认为 “QwenPaw Desktop” 中 “Desktop” 后缀“多此一举且很奇葩”。
- **贡献者体验仍需改进**：[#6563](https://github.com/agentscope-ai/QwenPaw/issues/6563) 中 first-time contributor 反映所有 fork PR 都无法通过 CI，现已关闭，但说明外部贡献路径需要持续保障。
- **安全/权限场景需要更强制的能力**：[#6571](https://github.com/agentscope-ai/QwenPaw/issues/6571) 用户提到仅靠 skill 无法强制权限判断流程，存在越权风险，希望引入工作流或更严格的逻辑编排。

---

## 8. 待处理积压

以下为当前值得维护者优先关注的开放 Issue/PR：

- **[Issue #6307：v2.0 固定 2s 性能开销](https://github.com/agentscope-ai/QwenPaw/issues/6307)**：创建于 2026-07-21，已 10 天，仍无 fix PR。影响面大，建议优先定位。
- **[Issue #6512：`execute_shell_command` 大输出截断](https://github.com/agentscope-ai/QwenPaw/issues/6512)**：创建于 2026-07-28，无 fix PR，且与 [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589)、[#6565](https://github.com/agentscope-ai/QwenPaw/issues/6565) 属于同一工具链问题，建议合并处理。
- **[Issue #6559 / #6558 / #6560：会话 UI 系列问题](https://github.com/agentscope-ai/QwenPaw/issues/6559)**：由同一用户集中提出，覆盖会话树形分组、数据完整性、基础交互，是 Console 体验的重要反馈，尚无专门 fix PR。
- **[PR #6302：统一 provider 平台](https://github.com/agentscope-ai/QwenPaw/pull/6302)**：架构级 PR，开放已 10 天，评论数据未展示但仍待合并，需要维护者投入评审资源。
- **[PR #6312：主题/皮肤模块 draft](https://github.com/agentscope-ai/QwenPaw/pull/6312)**：开放 10 天，等待维护者对方向给出反馈，避免 first-time contributor 长期悬空。
- **[PR #6531：ACP `new_session` 响应补充 `models` 字段](https://github.com/agentscope-ai/QwenPaw/pull/6531)**：影响 Multica、OpenCode、Zed 等外部 ACP 客户端的模型发现能力，已开放 3 天，建议尽快评审。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 (2026-07-31)

## 1. 今日速览

过去24小时内，ZeptoClaw 项目活跃度处于低位：无新Issue、无版本发布，仅有一项 Pull Request 更新。唯一活跃项为 PR #645——一项针对运行时子进程安全性与超时进程回收的关键修复，目前仍处于待合并状态。该项目正处于一次重要的安全加固窗口期，而非功能迭代阶段。整体项目节奏平稳，但需关注该修复的合并进程。

---

## 2. 版本发布

昨日无新版本发布。无版本更新内容可披露。

---

## 3. 项目进展

**关键修复推进中（未合并）：**
- **PR #645** — fix(runtime): scrub subprocess secrets and reap timed-out process trees  
  [链接](https://github.com/qhkm/zeptoclaw/pull/645)
  
  该 PR 修复了两个关联的运行时问题：
  1. **环境变量秘密泄露**：此前运行时 shell 命令会继承 ZeptoClaw 的完整进程环境，这可能导致 provider API 密钥或其他敏感凭据被传递到模型编写的命令环境中，形成安全漏洞。修复后将对子进程环境变量进行清理（scrub），隔离敏感凭据。
  2. **超时进程树残留**：当运行时超时发生时，原先会直接丢弃 `Command::output()` future，未采取可靠的进程终止策略，导致被派生的子进程树（descendants）可能残留并持续消耗系统资源。该 PR 补充了进程组终止与回收（reap）机制；同时对 Docker 容器场景做了相应适配处理。

  **项目意义**：该修复直接提升运行时安全隔离与资源管理可靠性，是 ZeptoClaw 在**生产环境安全加固**方向上迈出的重要一步。尽管尚未合并，但代码已进入最终更新阶段（最近更新于昨日），合并后将对所有依赖运行时执行命令的用户产生影响。

---

## 4. 社区热点

**今日无高讨论热度的 Issue 或 PR。**

唯一活跃项 PR #645 尚无公开评论，但考虑到其代码变更涉及 **安全** 与 **稳定性** 两大核心关注点，预计合并后可能引发关于运行时安全策略的讨论。建议关注该 PR 的评论动态。

---

## 5. Bug 与稳定性

**严重程度：高（安全相关）**

| 严重程度 | 问题描述 | 状态 | 关联修复 |
|---------|---------|------|---------|
| 高 | 运行时 shell 命令继承全量进程环境，导致 provider 密钥、无关凭据可被模型编写的命令访问（信息泄露风险） | 确认存在，修复已提交 | PR #645（待合并） |
| 中 | 运行时超时后未终止/回收被派生的子进程树，可能导致僵尸进程与资源泄漏；Docker 容器场景同理 | 确认存在，修复已提交 | PR #645（待合并） |

**今日无新增 Bug 报告、崩溃或回归问题。**

---

## 6. 功能请求与路线图信号

**今日无新功能请求。**

从 PR #645 的内容可推断两条可能的路线图信号：
- **安全隔离**：对运行时环境的敏感信息隔离（如凭据清理）可能成为框架级安全配置的一部分，未来或引入更细粒度的环境变量白名单/黑名单控制。
- **资源治理**：超时进程树回收机制暗示项目正在加强`运行时资源生命周期管理`，后续版本可能提供可配置的超时策略或进程回收观测指标。

---

## 7. 用户反馈摘要

**今日无用户评论或 Issue 讨论可提炼。**

PR #645 的提交本身通常源于社区或内部测试暴露的问题（如安全审计或异常进程残留），但公开数据中暂无用户直接表达的观点。待该 PR 合并并发布后，可通过 Release Notes 的后续反馈进一步观察。

---

## 8. 待处理积压

**长期未响应的 Issue / PR：无**  
当前仅有一项待合并 PR（PR #645），已开放 8 天（2026-07-23 创建，最新更新 2026-07-30），**建议维护者尽快安排 review 并完成合并**，以避免该安全修复的交付延迟。已有 Issue 积压为 0，仓库健康度良好。

---

*数据来源：GitHub 仓库 qhkm/zeptoclaw，数据采集时间 2026-07-31。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-07-31

> 数据源：github.com/zeroclaw-labs/zeroclaw | 统计窗口：2026-07-30 ~ 2026-07-31（24小时）


## 1. 今日速览

过去 24 小时项目保持高水平社区活跃度：**14 条 Issue 更新**（全部为活跃/新开，无关闭）、**50 条 PR 更新**（全部待合并，无合并/关闭）、**0 个新版本发布**。值得关注的是，今日集中出现了 **2 个安全相关 Bug（#9565 S0 级、#9566 S2 级）**，且均在当天即收到对应修复 PR（#9569、#9568），同时另有 PR #9571 直接提议移除存在安全隐患的 WATI 频道——维护者对安全问题的响应速度值得肯定。但另一方面，**待合并 PR 队列已达 50 条且 24 小时内无任何合并动作**，合并瓶颈正在累积，有成为项目交付节奏主要制约因素的趋势。整体判断：**输入活跃、输出阻塞、安全响应快、交付节奏需关注**。


## 2. 版本发布

本期（过去 24 小时）无新版本发布。最近可参考的发布为 v0.8.3（用户反馈#9562中提及的版本）。功能特性累积与发布节奏需结合后续周期观察。


## 3. 项目进展

今日 **无 PR 被合并或关闭**，项目主干未发生实际变更。但 50 条待合并 PR 揭示了项目正在推进的几条关键主线，可视为“已就绪但尚未落地”的前进方向：

### 3.1 安全加固与信任边界（高优先）
- [#9569 fix(gateway): fail closed when a WhatsApp Cloud or Linq webhook cannot be verified](https://github.com/zeroclaw-labs/zeroclaw/pull/9569) — 修复 webhook 未认证即放行问题（对应 S0 Bug #9565），是当前最重要的安全修复。
- [#9568 fix(security): match command allowlist entries case-insensitively on Unix](https://github.com/zeroclaw-labs/zeroclaw/pull/9568) — 修复 Unix 命令允许列表大小写敏感导致静默拒绝的回归（对应 #9566）。
- [#9571 chore(channels): remove the WATI channel](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) — 直接移除 WATI 频道模块、配置、CI 等相关代码，对问题根源做“断舍离”。
- [#9410 fix(security): default command audit logging to disabled](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) — 安全诚实性方向：将命令审计默认关闭并从示例配置移除，防止误导。

### 3.2 Agent 能力与运行时
- [#8688 feat(runtime): add trusted goal tools and delegation boundaries](https://github.com/zeroclaw-labs/zeroclaw/pull/8688)（size:XL）— 新增 `goal_start`/`goal_objective`/`goal_resume` 工具，仅在有受托目标上下文中注册，并为 `ask_user` 等增加目标感知的人审包装。
- [#9325 fix(runtime): make streamed user turns read as conversation, not log payloads](https://github.com/zeroclaw-labs/zeroclaw/pull/9325) — 修复流式路径下用户消息被本地小模型误读为日志/API 输出的问题。
- [#8937 fix(agent): stream-hash tool args in loop_detector](https://github.com/zeroclaw-labs/zeroclaw/pull/8937) — 消除循环检测器每次工具调用的深拷贝开销。

### 3.3 可观测性与评估体系
- [#8933 RFC: cross-turn conversation correlation to OTel export](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) — 以 `gen_ai.conversation.id` 打通跨轮次追踪，完善可观测性。
- [#9248 feat(eval): append-only run-history receipts](https://github.com/zeroclaw-labs/zeroclaw/pull/9248)、[#9244 feat(eval): seed and grade isolated case memory](https://github.com/zeroclaw-labs/zeroclaw/pull/9244)、[#9225 test(eval): seed regression suite from tracker failures](https://github.com/zeroclaw-labs/zeroclaw/pull/9225) — 评估基础设施三连：历史收据、记忆断言、回归种子套件。

### 3.4 配置与插件健壮性
- [#9311 feat(config): surface dangling peer_groups.*.channel refs as structured warnings](https://github.com/zeroclaw-labs/zeroclaw/pull/9311)（size:L）— 将拼写错误导致的“静默授权无人”问题转为结构化警告。
- [#9126 feat(plugins): validate typed instance config](https://github.com/zeroclaw-labs/zeroclaw/pull/9126)（size:XL）— 插件配置引入 JSON Schema 强制校验。

> 总评：项目正在安全加固、eval 体系、插件验证三条线上同步推进，但均卡在待合并状态，**尚未转化为用户可感知的版本交付**。


## 4. 社区热点

| 热帖 | 评论数 | 主题 | 热度信号 |
|---|---|---|---|
| [#9048 RFC: Separate conversation history from agent-curated long-term memory](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | 12 | 会话历史与长期记忆生命周期分离 | 架构级讨论，涉及 runtime/gateway/autosave 等核心路径，标签含 `risk:high` |
| [#8603 RFC: OpenAI Chat Completions compatibility adapter](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | 7 | OpenAI 兼容适配层 | 与 [#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) 构成双轨追踪，外部集成需求强烈 |
| [#8933 RFC: Cross-turn conversation correlation to OTel export](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | 7 | OTel 跨轮关联 | 可观测性方向，社区讨论集中 |
| [#5287 Feature: compact local_small runtime profile](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | 7（👍 2） | 本地小模型运行配置 | 唯一获得 👍 的 Issue，本地优先用户痛点明确 |

**热点诉求分析**：当前社区讨论集中在三件事——**(1) 架构层面**：要求把会话历史与长期记忆从实现上真正分离（#9048），反映用户对记忆行为可控性的高期待；**(2) 兼容性**：对 OpenAI Chat Completions 协议接入的呼声持续走高（#8603/#8550），说明 WebSocket + 渠道 Webhook 的现状限制了生态工具接入；**(3) 本地优先**：#5287/#7951 均指向本地小模型的体验优化（提示词膨胀、指令泄漏、路由策略），与 ZeroClaw 的 local-first 定位吻合。


## 5. Bug 与稳定性

按严重程度排列：

### S0 — 数据丢失 / 安全风险
- [#9565 gateway webhook handlers do not fail closed (WhatsApp Cloud, Linq, WATI)](https://github.com/zeroclaw-labs/zeroclaw/issues/9565)
  三个入站 Webhook 处理器在未配置密钥时直接跳过验签，将攻击者可控消息派发给 Agent。**已有修复 PR [#9569](https://github.com/zeroclaw-labs/zeroclaw/pull/9569)**（fail closed），另 [#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) 提出直接移除 WATI 频道。建议优先审查合并。

### S2 — 功能降级
- [#9566 uppercase allowed_commands entries never match on Unix (regressed from #4552)](https://github.com/zeroclaw-labs/zeroclaw/issues/9566)
  含大写字母的 `allowed_commands` 条目在 Unix 上永远无法匹配，命令被静默拒绝；Windows 分支有大小写折叠而 Unix 无。**已有修复 PR [#9568](https://github.com/zeroclaw-labs/zeroclaw/pull/9568)**。

### S3 — 次要问题
- [#8847 cargo test --doc fails with duplicated rustdoc theme flag](https://github.com/zeroclaw-labs/zeroclaw/issues/8847)
  Rust 1.96 下默认主题配置被视为重复。影响 CI，已有方向，相关 PR 待推进（见 #9545）。

### 潜在安全相关性
- [#9410 fix(security): default command audit logging to disabled](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) 指向 [#9391](https://github.com/zeroclaw-labs/zeroclaw/issues/9391)（命令审计配置误导），属于安全诚实性修复，建议同批审阅。

> 总结：今日新暴露的 2 个安全/功能回归 Bug 均已附带修复 PR，且 #9569 与 #9571 提供了“修复”和“移除”两条路径可选。**快响应是亮点，但修复落地需要尽快完成合并**。


## 6. 功能请求与路线图信号

| Issue | 状态标签 | 路线图判断 |
|---|---|---|
| [#8550 OpenAI-compatible chat completions endpoint](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) | `status:in-progress` + `status:accepted` | ⭐ 最接近落地，双轨追踪（#8603），大概率进入下一版本 |
| [#5287 compact local_small runtime profile and prompt-budget contract](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | `status:accepted`，开放 3 个月 + 2 👍 | 已接受但无对应 PR，可能是社区贡献机会 |
| [#7951 Effort-based local/cloud model routing](https://github.com/zeroclaw-labs/zeroclaw/issues/7951) | `status:accepted` | 与 #5287 形成本地优先组合拳，尚无对应 PR |
| [#9048 RFC: Separate conversation history from agent-curated long-term memory](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | RFC，12 评论，`risk:high` | 架构重构，讨论期，短期不会进入实现 |
| [#8780 RFC: Realtime speech-to-speech channel for Gemini Live](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | RFC | 新模态探索，长期方向 |
| [#8568 RFC: Mixture-of-Agents (MoA) virtual model provider](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) | RFC | 模型路由扩展，与 #7951 有协同可能 |
| [#9345 Recalculate PR risk and size labels on every update](https://github.com/zeroclaw-labs/zeroclaw/issues/9345) | `status:accepted` | 维护体验优化，自动化程度提升 |

**预计纳入下一版本的高概率项**：OpenAI 兼容端点（#8550/#8603）、本地/云端路由（#7951）、命令审计安全修复（#9410）、Webhook fail-closed（#9569）。**建议维护者关注**：#5287 虽已 accepted 但长期无实现，社区呼声（👍 2）与落地之间出现脱节。


## 7. 用户反馈摘要

从今日 14 条 Issue 及评论中提炼的真实用户声音：

- **记忆/历史混用是核心痛点（#9048，12 条评论）**：用户明确指出 ZeroClaw 文档中会话历史与长期记忆是不同生命周期概念，但实现上 runtime/gateway/autosave 均将对话轮次写入 `MemoryCategory::Conversation`。评论区讨论热烈，反映出用户对记忆数据可控性和生命周期管理的期望远高于当前实现。

- **外部工具接入受阻（#8603/#8550）**：Open WebUI、LobeChat 等 OpenAI 协议客户端“无法不构建自定义适配器就连接”。同一功能两个 Issue 追踪、评论数名列前茅，说明集成生态需求真实且迫切。

- **本地小模型用户的具体不满（#5287）**：使用本地模型时存在“提示词膨胀、宽松回退解析、内部工具/系统指令泄漏到用户可见输出”三大问题，用户明确要求“防止泄漏”。

- **WebChat 阅读体验问题（#9562）**：流式输出时自动滚动覆盖手动滚动，用户无法在 Agent 回复时阅读历史消息。引用了 openclaw 的既有 PR/Issue，说明这是一个跨项目共性问题。

- **配置错误难以排查（#9311 相关）**：`peer_groups.<name>.channel` 一旦拼写错误，“静默授权无人”，仅有一行通用启动日志——配置错误的可发现性不足，已有 PR 将其改为结构化警告。

> 总体评价：用户对 ZeroClaw 的本地优先和可观测性方向是认可的，但**记忆架构的清晰度、协议兼容性、本地模型体验**是当前满意度最低的三个区域，也恰好是项目正在通过 RFC 讨论和 PR 推进的领域——方向对得上，速度需跟上。


## 8. 待处理积压

### 长期未落地的重要 Issue
- [#5287 [Feature] define a compact local_small runtime profile（开放 118 天，2 👍，status:accepted，无对应 PR）](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)
  已接受近 4 个月，社区有认可度，但始终无实现。**建议**：标记为 `help wanted` 或由维护者认领。

### 长期未合并的 PR（等待作者或审阅者）
- [#8688 feat(runtime): add trusted goal tools and delegation boundaries（7-04 创建，27 天未合并，size:XL，needs-author-action）](https://github.com/zeroclaw-labs/zeroclaw/pull/8688)
- [#8313 feat(skills): default to compact injection, deprecate full mode（6-25 创建，36 天未合并，size:M）](https://github.com/zeroclaw-labs/zeroclaw/pull/8313)
- [#8970（如存在请以实际数据为准）]

### 合并瓶颈警示
- **50 个 PR 全部待合并，24 小时合并为 0**。其中至少 12 个 PR 带有 `needs-author-action` 标签（如 #8937、#8928、#9410、#9325、#8953、#8943、#8878、#8688、#8927、#9248、#9244、#9225），说明大量 PR 卡在作者未响应而非维护者未审阅。
- #8953 已被标记 `stale-candidate`，再不处理将进入关闭流程。

**给维护者的提醒**：建议优先处理 (1) S0 安全修复 #9569 / #9571 的合并决策；(2) 对 50 条待合并 PR 做一轮批量 triage，明确各 PR 需要的动作（作者更新 / 维护者审阅 / 关闭）；(3) 对 #5287 这类长期 accepted 的 Issue 给出明确时间表或转为 help wanted，避免社区热度流失。

---

*本日报由 AI 分析师基于 GitHub 公开数据自动生成，数据统计自 2026-07-30 至 2026-07-31 的 24 小时窗口。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*