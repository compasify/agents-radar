# OpenClaw 生态日报 2026-08-02

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-08-02 01:43 UTC

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

好的，这是 2026-08-02 的 OpenClaw 项目动态日报。

---

## OpenClaw 项目日报 (2026-08-02)

### 1. 今日速览

今日 OpenClaw 项目活跃度极高，过去24小时内共有 500 条 Issue 和 500 条 PR 更新，显示出强劲的开发动能。虽然新版本发布仅一个，但重点集中在**状态安全与恢复**这一核心主题上。社区讨论聚焦于多个 P0/P1 级稳定性问题，特别是在**会话状态管理、数据持久化和模型调用可靠性**方面存在集中痛点。维护者响应迅速，已有多个针对关键 Bug 的修复 PR 处于开放或待审查状态，项目整体处于密集迭代和问题修复阶段。

### 2. 版本发布

- **[v2026.7.2-beta.6](https://github.com/openclaw/openclaw/releases)** (2026-08-02)
  - **核心主题：状态安全与恢复。** 此版本显著增强了系统在故障情况下的数据持久性和恢复能力。
  - **主要亮点：**
    - 引入**隔离存储**（Quarantine Store），在主数据库受损时保护持久化数据。
    - 采用**可崩溃恢复的 SQLite 快照**，确保数据在异常退出后不丢失。
    - 实现**崩溃持久的文件系统发布**机制。
    - 增加**模式升级数据丢失拒绝**逻辑，防止因升级导致数据损坏。
    - 提供**回滚写入器快照恢复**功能。
  - **迁移注意事项：** 由于涉及底层存储和状态管理逻辑的重大修改，用户在升级后应密切关注首次启动时的数据迁移和完整性校验日志。如遇回滚场景，新机制会自动生成快照，但建议在升级前备份重要数据。

### 3. 项目进展

今日合并的 PR 数量相对较少，但新提交的 PR 清晰地指向了项目正在攻克的关键难题。

- **会话状态与稳定性修复**：多个新 PR 直接针对长期存在的稳定性顽疾。
  - **[fix(compaction): use canonical session context projection for post-turn estimator](https://github.com/openclaw/openclaw/pull/117400)**：修复压缩后令牌估算不准确的问题，避免不必要的压缩操作。
  - **[fix: prevent lost subagent replies, stale runs, and Codex turn stalls](https://github.com/openclaw/openclaw/pull/117731)**：解决子代理回复丢失、运行状态陈旧及 Codex 回合停滞等并发问题。
- **核心功能与 UI 修复**：
  - **[fix(ui): decode artifact previews as UTF-8](https://github.com/openclaw/openclaw/pull/117657)**：修复控制 UI 中工作区预览乱码问题，提升用户体验。
  - **[fix(control-ui): restore sandbox media previews](https://github.com/openclaw/openclaw/pull/117689)**：修复沙盒媒体文件预览功能。
  - **[fix(providers): reject provider-owned binary downloads returning JSON, HTML, or empty bodies](https://github.com/openclaw/openclaw/pull/117735)**：增强 FAL 等生成式媒体提供者的下载健壮性。
- **平台兼容性与运维**：
  - **[fix(macos): avoid self-named defaults suite](https://github.com/openclaw/openclaw/pull/117690)**：修复 macOS 应用启动时的警告信息。
  - **[fix(ci): repair release validation regressions](https://github.com/openclaw/openclaw/pull/117723)** 和 **[fix(release): prevent bundled plugin lock timeouts](https://github.com/openclaw/openclaw/pull/117730)**：修复发布流程中的验证和超时问题，保障发布管道畅通。

项目整体正在从**功能快速扩展**转向**核心稳定性加固**，重点解决由复杂会话、并发操作和状态持久化引发的一系列深层次问题。

### 4. 社区热点

今日社区讨论热度最高的议题集中在**消息丢失、会话中断和数据损坏**等影响核心体验的问题上。

- **[Issue #116277: DeepSeek v4 Flash silent reply failure](https://github.com/openclaw/openclaw/issues/116277)** (评论: 73)
  - **诉求**: 模型在未生成回复时，系统仅发出通用回退消息，用户无法获知具体失败原因。该问题在 Telegram 群组场景下尤为突出，高评论数表明大量用户可能正遭受类似问题。
- **[Issue #25592: Text between tool calls leaks to messaging channels](https://github.com/openclaw/openclaw/issues/25592)** (评论: 39)
  - **诉求**: 这是一个存在已久的 UX 问题。用户在 Slack、iMessage 等渠道看到代理的内部处理输出（如错误处理、确认信息），这些信息不应作为面向用户的可见消息发送。社区对此有强烈共识，希望系统能区分“内部思考”与“对外发言”。
- **[Issue #116201: Realtime voice work can retain unbounded provider and consult state](https://github.com/openclaw/openclaw/issues/116201)** (评论: 38)
  - **诉求**: 音频会话在慢速或不稳定的网络环境下，可能出现资源占用无上限的问题。用户担忧这会耗尽系统资源，影响整体性能和稳定性。

### 5. Bug 与稳定性

今日报告的 Bug 数量众多，严重等级高，稳定性问题成为社区关注的首要焦点。以下按严重程度排列：

**P0 级 (紧急):**
- **[Issue #101290: CLI startup preflight can corrupt the live state DB](https://github.com/openclaw/openclaw/issues/101290)** - **核心数据损坏**。CLI 健康检查命令导致运行中的网关数据库损坏 ("database disk image is malformed")，该问题在 macOS 上已被多次触发。尽管是 P0，但尚无直接修复 PR，风险极高。
- **[Issue #115421: Schema downgrade recovery must not quarantine/wipe state DB](https://github.com/openclaw/openclaw/issues/115421)** - **核心数据丢失**。当版本升级后回滚时，恢复机制会隔离或清空状态数据库，导致用户的 cron 任务等关键配置丢失。已有相关 PR 在讨论中，但未直接修复。

**P1 级 (高):**
- **[Issue #31583: `exec` tool does not inherit `skills.entries.*.env` environment variables](https://github.com/openclaw/openclaw/issues/31583)** - 回归 Bug。此问题阻碍了用户通过技能配置注入密钥等敏感信息，且影响安全认证流程。已有相关 PR 链接。
- **[Issue #114234: Usage-cost refresh lock is never releasable after a restart that reuses the owner PID](https://github.com/openclaw/openclaw/issues/114234)** - 在容器环境中，PID 重用导致成本刷新锁永久占用，缓存被冻结。这是一个环境相关的特定性问题，但影响所有容器化部署。
- **[Issue #115908: Session transcript projection reconcile can livelock](https://github.com/openclaw/openclaw/issues/115908)** - 持续写入下，会话记录投影可能陷入死循环，阻塞主线程，导致所有通道传输停滞。
- **[Issue #106231: Loop detection blocks exec but does not terminate stuck agent run](https://github.com/openclaw/openclaw/issues/106231)** - 循环检测系统未能彻底终止卡住的代理会话，导致资源被持续消耗。
- **[Issue #115909: Bundled browser-copilot Gateway client can never pair](https://github.com/openclaw/openclaw/issues/115909)** - 浏览器扩展客户端因认证逻辑缺陷，永远无法绑定网关。
- **[Issue #115424: Gateway V8 heap OOM during main-session turn; restart-recovery hot-resumes the session and converts one crash into a 7-core-dump loop](https://github.com/openclaw/openclaw/issues/115424)** - 内存溢出导致崩溃，且恢复机制会引发更严重的连环崩溃。

**P2 级 (中):**
- **[Issue #116010: All persistent sessions capped at 128k context regardless of model](https://github.com/openclaw/openclaw/issues/116010)** - 所有会话上下文被硬编码限制在 128k，与模型能力不匹配。
- **[Issue #98976: Provider refusals never trigger the model fallback chain](https://github.com/openclaw/openclaw/issues/98976)** - 模型因安全策略拒绝请求时，不会触发备用模型配置。

### 6. 功能请求与路线图信号

社区对新功能的需求主要集中在提升用户体验和工作流效率上。

- **[Issue #113251 [Feature]: Add image viewing in the webchat file viewer](https://github.com/openclaw/openclaw/issues/113251)** - 请求在 WebChat 文件查看器中支持图片预览。这是一个常见的 UI 增强类需求。
- **[Issue #17840 [Feature]: opt-in reaction-triggered agent turns](https://github.com/openclaw/openclaw/issues/17840)** - 请求允许将消息上的 Emoji 反应作为触发 Agent 执行任务的机制，以支持投票、快捷操作等交互模式。
- **[Issue #73537: Add production-readiness stability label to releases](https://github.com/openclaw/openclaw/issues/73537)** - 用户希望有更明确的版本稳定性标识，以便在生产环境中更自信地选择版本。
- **[Issue #110171: Voice chat should behave identically to text chat](https://github.com/openclaw/openclaw/issues/110171)** - 用户指出实时语音对话（Talk）功能缺乏与文本聊天等量的上下文（如 MEMORY.md, USER.md），导致体验割裂。这是一个重要的功能对齐需求。

目前暂无直接实现这些新功能的公开 PR，但它们为项目的未来迭代提供了清晰的方向。

### 7. 用户反馈摘要

- **对稳定性的高度关注**: 大量用户反馈集中在数据损坏、消息丢失、进程卡死等稳定性问题上。尤其对于依赖 OpenClaw 进行自动化任务和家庭/商业助理的用户（如 Issue #73537 中提到的用例），这类问题严重影响了他们对项目的信任度。
- **对配置和调试复杂度的抱怨**: 诸如 `exec` 工具不继承环境变量（Issue #31583）、`bundle-mcp` 配置无效（Issue #114154）等问题，暴露了配置系统在一致性和可预测性上的不足，增加了用户的上手和排错成本。
- **对细节体验的期待**: 用户不仅关注核心功能，也注重细节体验。例如，对 `messages` 代码块渲染回归（Issue #112906）、WebChat 消息顺序错乱（Issue #95566）等问题的反馈，表明用户对产品完成度有较高要求。

### 8. 待处理积压

以下 Issue 因长期未解决或近期讨论热度高，可能阻塞用户升级或影响核心体验，需维护者重点关注。

- **[Issue #25592: Text between tool calls leaks to messaging channels](https://github.com/openclaw/openclaw/issues/25592)** - 自 2 月提出，持续活跃至今，评论多、影响面广，是影响用户体验的核心问题之一。
- **[Issue #101290: CLI startup preflight can corrupt the live state DB](https://github.com/openclaw/openclaw/issues/101290)** - 作为 P0 级数据损坏问题，虽无直接修复，但极大概率是当前版本发布所推行的“状态安全与恢复”机制更新的主要驱动。需尽快提供明确的修复方案或规避措施。
- **[Issue #48920: Live Docs are ahead of release](https://github.com/openclaw/openclaw/issues/48920)** - 文档与版本不同步的问题持续存在，会误导用户尝试不可用的功能，需建立更严格的文档与版本绑定机制。
- **[Issue #88079: reasoning_content not streamed for Kimi Code & DeepSeek Reasoner](https://github.com/openclaw/openclaw/issues/88079)** - 该问题已存在数月，影响 WebChat 中推理过程的可视化，是集成新模型时常见的兼容性问题。

---

## 横向生态对比

# 个人AI助手/自主智能体开源生态横向对比报告

**报告日期**：2026-08-02  
**数据窗口**：过去24小时（2026-07-31 至 2026-08-01）  
**分析对象**：12个开源项目动态

---

## 1. 生态全景

当前个人AI助手/自主智能体开源生态正从“功能数量竞赛”全面转向“稳定性、安全性与可运维性”的深水区。全生态范围内，State持久化、会话一致性与权限边界成为交叉涌现的共性焦点，多项目单日处理50+条Issue/PR已成为常态。值得注意的转向是：OpenClaw以“状态安全与恢复”为主题的beta版本发布、IronClaw的Wave 2架构重构、ZeroClaw的S1安全Bug响应，共同标志着头腰部项目已进入**基础设施加固期**。与此同时，OrcaRouter作为第三方模型路由层在三个独立项目中同日出现，预示着**统一的模型接入与路由层正在成为新一代Agent的“标配中间件”**。生态整体表现出高活跃度、高度对标的竞争格局，但项目间健康度分化明显。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 合并/关闭效率 | 健康度评级 |
|------|------------|---------|---------|---------------|-----------|
| **OpenClaw** | 500 ✅ | 500 | v2026.7.2-beta.6 | PR审查队列最大；维护者响应快 | 🟢 高活跃，密集迭代 |
| **NanoBot** | 5（4关/1开） | 25（13合并/12待） | 无 | 合并率52%，P1当日闭环 | 🟢 健康度最佳 |
| **Hermes Agent** | 50（34活跃/16关） | 50（8关/42待） | 无 | 修复吞吐高，积压42条 | 🟡 高输出+高积压 |
| **PicoClaw** | 1 | 3（1关/2待） | 无 | 关键Bug被stale标记 | 🟡 功能活跃，Bug响应待加强 |
| **NanoClaw** | 2（1开/1关） | 15（5合并/10待） | v2.1.54 | 当日Issue即关并修复 | 🟢 良好，有破坏性变更 |
| **NullClaw** | 0 | 0 | 无 | — | ⚫ 无活动 |
| **IronClaw** | 11 | 24（5合并/16待） | 无 | Wave 2重构密集合入 | 🟢 高强度推进 |
| **LobsterAI** | 7（1活/6关） | 2待 | 无 | stale清理为主，0合并 | 🟡 存量维护期 |
| **Moltis** | 0 | 3（2合并/1待） | 无 | 安全修复+可观测性落地 | 🟢 稳健，社区声量偏弱 |
| **CoPaw** | 9（全活跃） | 13（1合并/12待） | 无 | 修复PR密集提交 | 🟡 高活跃，队列积压 |
| **ZeptoClaw** | 0 | 0 | 无 | — | ⚫ 无活动 |
| **ZeroClaw** | 50（47活/3关） | 50（0合并） | 无 | 合并流水线停滞 | 🟡 设计活跃，交付阻塞 |

**总体分布**：3个头部项目（OpenClaw/Hermes/ZeroClaw）贡献了当生态90%以上的讨论量；2个项目完全休眠；其余项目处于差异化发展阶段。

---

## 3. OpenClaw在生态中的定位

### 优势
- **社区规模断层领先**：单日500条Issue+500条PR，是第二梯队（~50条）的10倍；顶热Issue获73条评论（DeepSeek v4静默失败），相当于Moltis全月讨论量。
- **稳定性问题驱动的版本迭代**：v2026.7.2-beta.6将“状态安全与恢复”首次提升为版本核心主题（Quarantine Store、崩溃可恢复SQLite快照、模式升级数据丢失拒绝），在生态内首次系统化解决Agent **数据持久化**问题，成为其他项目的参照坐标。
- **维护者响应速度**：P0级Issue（CLI损坏活动DB、子代理回复丢失）均有直接修复PR跟进。

### 技术路线差异
- **隔离存储与恢复机制**：无竞品有等效设计（NanoBot仅有持久化摘要容错，ZeroClaw停留在RFC阶段）。
- **跨渠道深度**：Telegram/Slack/iMessage + browser-copilot，覆盖面远超Hermes（Discord/Teams为主）或ZeroClaw（WhatsApp/Telegram）。
- **并发会话治理**：Compaction、subagent回复追踪、Codex turn stall修复，指向“长时间运行的自治体”场景，竞品中只有CoPaw的ACP竞态修复可类比。

### 相对短板
- 合并吞吐率低于NanoBot（后者P1全部24h合入）；大量PR待审查状态与Hermes类似。
- 已知P0数据损坏风险（#101290）尚未有直接fix PR，仍处于“高风险运行期”。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|------|---------|----------|
| **统一模型路由层** | PicoClaw PR #3309；IronClaw #7009；CoPaw PR #6622 | 三个项目同日请求将OrcaRouter添加为内置provider，叠加ZeroClaw #9631的OpenRouter session_id缓存优化，表明“多供应商路由+成本优化”是刚需 |
| **状态安全与数据持久化** | OpenClaw（隔离存储/快照）；NanoBot（持久化摘要容错）；NanoClaw（迁移脚本SyntaxError）；ZeroClaw（记忆架构分离RFC #9048） | 防崩溃、防数据损坏、防静默丢失成为Agent生命周期管理的共同底线 |
| **会话/上下文边界** | OpenClaw（128k硬编码、子代理丢失）；NanoBot（跨会话搜索PR #5211）；Hermes（session-scoped toolsets）；Moltis（main会话删除#1182） | 从“单一长会话”走向“多会话可管理、可隔离、可搜索” |
| **权限与安全边界** | Moltis（operators列表）✅；ZeroClaw（WhatsApp令牌泄露/空allowlist放行）；Hermes（跨profile凭据泄漏）✅；NanoBot（通道限流）✅ | “访问权≠操作权”成为共识，密钥与令牌隔离是S1级关注 |
| **强制可观测性** | Moltis（OTLP/Langfuse v4）✅；ZeroClaw（Eval评估子系统7个PR）；Hermes（gateway心跳缺失#32887） | 插桩、trace、评估从“可选”变为“基础设施” |
| **CI/发布质量门禁** | IronClaw（fail-closed门禁修复）；CoPaw（evidence块剥离误伤）；OpenClaw（release验证、plugin lock timeout）；ZeroClaw（v0.8.4标签指向错误） | 全生态共同面临“自动化质量基础设施自身的可靠性”问题 |
| **轻量/桌面交互** | CoPaw（全局快捷键）；Hermes（桌面字体/TTS）；NanoClaw（setup向导） | 从“API优先”转向“终端用户体验打磨” |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构特征 |
|------|---------|---------|----------|
| **OpenClaw** | 全功能个人AI助理：多渠道、子代理、技能、状态安全 | 极客/家庭自动化/小型团队 | 大规模并发会话架构，隔离存储 |
| **NanoBot** | 后端服务+WebUI，cron/memory/exec自动化深度 | 开发者/自部署者 | 轻量，P1当日修复能力 |
| **Hermes Agent** | 桌面优先+多profile+Discord/Teams集成 | 开发者/桌面生产力用户 | Node.js生态，插件生命周期管理 |
| **PicoClaw** | 嵌入式/资源受限Agent | IoT/边缘硬件（Sipeed） | 轻量级，外部服务集成靠社区PR |
| **NanoClaw** | iMessage/Apple生态集成，滚动发布 | Apple全家桶用户 | 双后端（本地+Hosted） |
| **IronClaw** | 架构重构驱动的core | 平台型开发者 | Rust，Wave 2模块化，CI治理 |
| **LobsterAI** | 写作/内容生成场景，UI/i18n | 中文内容创作者 | 前端体验为主，存量维护 |
| **Moltis** | 多租户/团队安全，权限精确控制 | 企业/团队协作 | 可观测性先行，operators角色 |
| **CoPaw** | 多智能体协作，Qwen生态，国内云接入 | 中文用户/多Agent编排 | 合并队列积压，社区驱动 |
| **ZeroClaw** | 社交渠道Agent，安全敏感配置 | 部署规模较大的运营者 | RFC驱动，Eval基础设施，v0.9.0前夜 |

---

## 6. 社区热度与成熟度分层

### 第一梯队：超高压迭代期（单日50+条更新）
- **OpenClaw**：讨论量最大，版本迭代与Issue解决并行，典型“高增长下的稳定性补课”阶段。
- **Hermes**：修复吞吐高（16条Issue关闭），但42条PR积压构成反馈闭环瓶颈。
- **ZeroClaw**：设计讨论活跃，0合并暴露“规划多、交付少”的结构性问题。

### 第二梯队：良性活跃期
- **NanoBot**：合并率52%、P1全数当日合入——**生态内最佳“响应闭环”样板**。
- **IronClaw**：Wave 2重构按计划推进，CI治理同步迭代。
- **NanoClaw**：v2.1.54落地iMessage统一，Issue当日关闭。
- **CoPaw**：修复PR供给充足，但12条待合并与1条39天悬置PR需警惕。

### 第三梯队：平稳维护期
- **Moltis**：安全修复与可观测性落地，无公共讨论声量。
- **LobsterAI**：stale清理为主，仅有2条PR待合入。
- **PicoClaw**：功能PR有活力，但关键Bug被stale标记，维护力度偏弱。

### 休眠
- **NullClaw / ZeptoClaw**：零活动。

**整体判断**：生态呈现“头部拥挤、尾部休眠”的漏斗结构。处于“质量巩固期”的项目（NanoBot/Moltis）往往比“快速迭代期”项目（Hermes/ZeroClaw）展现出更好的健康度指标。

---

## 7. 值得关注的趋势信号

### 信号一：安全默认值正在经历全生态“找零”
ZeroClaw的“空allowlist=放行所有群聊”（S1）与Moltis的“访问白名单=可执行特权命令”同属一类陷阱——**配置的缺省语义与用户的直觉安全预期相悖**。叠加Hermes跨profile凭据泄漏、NanoClaw凭证过期后不可读报错，说明“默认安全”设计原则正在从理论走向强制实践。

### 信号二：OrcaRouter现象预示着“Agent的模型接入层”即将标准化
同日三个独立项目（PicoClaw/IronClaw/CoPaw）同时请求同一供应商支持 + ZeroClaw的缓存复用提案。模型路由不再是“配一个API key”，而是需要**统一的路由语义、session亲和性、成本度量与故障转移**。这对Agent开发者意味着：选择支持多路由平台将极大降低后续供应商切换成本。

### 信号三：静默失败成为用户信任的第一杀手
OpenClaw的“通用回退消息”（73评论）、NanoBot的“返回工具调用代码”、ZeroClaw的“cron任务显示ok但输出丢失”、CoPaw的“空响应不汇报”——各项目不约而同在修复“成功模式的假象”。**显式报错正在取代尽力而为**，成为生产级Agent的基本要求。

### 信号四：可观测性基建一旦启动，标志项目进入“成年期”
Moltis上线OTLP/Langfuse插桩、ZeroClaw构建7-PR Eval子系统、Hermes着手gateway心跳——当Agent开始度量自己的行为与成本时，说明该生态已走过“能不能用”，进入“用得好不好、贵不贵、可不可审计”的阶段。对开发者而言，优先选择具备此基础设施的项目，可规避后续大规模重构成本。

### 信号五：发布质量门禁成为新的竞争维度
IronClaw修复6个静默CI门禁、CoPaw的Evidence剥离误伤、ZeroClaw的发布标签指向错误——自动化质量工具自身的可靠性已开始受到挑战。**CI/CD管线的可信度正在成为项目成熟度的隐形指标**。

---

## 结语

2026年8月初的个人AI Agent生态，一句话概括：**基础设施的“还债时刻”已经到来**。用户反馈最激烈的议题不再是“缺什么功能”，而是“为什么数据会丢”“为什么权限会漏”“为什么卡死不报错”。建议技术决策者选型时，将“状态安全设计、权限模型粒度、显式错误报告、可观测性基建”四项纳入与功能清单同等权重的评估维度——NanoBot的高合并率与ZeroClaw的零合并对照，正是执行力的直接分水岭。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-02

## 1. 今日速览

过去 24 小时 NanoBot 仓库活跃度**非常高**：共 25 条 PR 更新，其中 13 条已合并/关闭（合并率 52%），12 条待处理；Issues 侧 5 条更新中 4 条已关闭（多数由当日合入的修复 PR 直接解决），仅 1 条新开。🟢 **项目健康度良好**——多个 P1 级 Bug 在 24 小时内即完成修复并合入，且代码质量类重构（Pyright 抑制收窄）与安全增强（通道限流、可信代理认证）同步推进。无新版本发布，当前处于高频迭代的"功能/修复双轨"阶段。

---

## 2. 版本发布

今日无新版本发布（最新 Releases 为空）。

---

## 3. 项目进展

今日合入 13 条 PR，覆盖 **稳定性修复、安全加固、架构重构、新功能基础** 四大方向：

### 🔧 稳定性修复（P1，均已合入）
- **[#5183](https://github.com/HKUDS/nanobot/pull/5183) fix(cron): 保留手动运行完成状态** — 修复 #5163（手动 cron 运行时 WebUI 轮询导致状态回退），合入后该 Issue 已关闭。保护实时 cron 存储在手动和定时执行期间的一致性。
- **[#5153](https://github.com/HKUDS/nanobot/pull/5153) fix(memory): 处理非字符串时间戳与缺失 role 字段** — 对应修复 #4801 的 KeyError，增强 `raw_archive` 回退路径的容错性。
- **[#5200](https://github.com/HKUDS/nanobot/pull/5200) fix(exec): 保持 wait_for 目标跨越响应截断** — 修复 `write_stdin(wait_for=...)` 在 head/tail 截断后失效的问题，并补充回归测试。
- **[#5201](https://github.com/HKUDS/nanobot/pull/5201) fix(session): 容忍格式错误的持久化会话摘要** — `AutoCompact.prepare_session()` 不再因损坏的 `_last_summary` 元数据崩溃。
- **[#5208](https://github.com/HKUDS/nanobot/pull/5208) fix(dream): 持久更改后推进游标** — 修复 Dream cron 任务重复处理历史批次的问题（ephemeral 运行产生编辑时游标不前进）。

### 🛡️ 安全与资源控制
- **[#5108](https://github.com/HKUDS/nanobot/pull/5108) fix(channels): 添加按发送者消息限流** — 为所有通道适配器补充 per-user/per-chat 限流，防止已配对用户无限消耗 LLM token。属重要成本控制措施。

### 🧠 核心功能增强
- **[#5172](https://github.com/HKUDS/nanobot/pull/5172) feat: 保留 Responses 推理状态与紧凑上下文** — 采用 OpenAI ARC-AGI-3 报告中的 Responses API 能力，完整保留并重放跨工具调用的输出项链（含加密推理内容）。

### ⚙️  Provider 修复（合入）
- **[#3732](https://github.com/HKUDS/nanobot/pull/3732) fix(providers): 要求 api_base 后本地 provider 方可按关键字匹配** — 修复本地 provider 静默劫持云托管模型的问题（该 PR 自 5 月发起，合入耗时近 3 个月，值得关注）。

### 🧹 代码质量
- **[#5199](https://github.com/HKUDS/nanobot/pull/5199)** refactor(cli): 收窄 Pyright 抑制范围（gateway/onboarding 模块）。
- **[#5209](https://github.com/HKUDS/nanobot/pull/5209)** refactor(webui): 复用侧边栏选中高亮组件，消除掩模闪烁。

**项目进展评估**：核心稳定性（cron、memory、exec、session）的 P1 修复已在 24 小时内全部合入，说明维护者对 Bug 响应迅速；同时新功能 PR（跨会话搜索、快速聊天、spawn 预设）已排队等待合并，整体处于"修复存量 + 增量功能"并行推进的良性状态。

---

## 4. 社区热点

今日讨论最活跃的是 **[Issue #5185](https://github.com/HKUDS/nanobot/issues/5185)（已关闭，4 条评论）**：用户反馈 Nanobot 突然在响应中返回工具调用代码（附截图）。该问题最终被标记为 invalid/provider 相关，但其引发的高讨论度反映了两个深层诉求：
1. **响应纯净性** —— 用户期望对话中不出现工具调用的原始代码结构，这类问题会直接动摇对产品的信任感。
2. **提供方兼容性** —— 问题疑似与 provider 行为相关，社区对模型/provider 层的异常格外敏感。

另一值得关注的讨论是 **[Issue #5198](https://github.com/HKUDS/nanobot/issues/5198)（打开中，1 条评论）**：用户抱怨无法在特定会话中切换模型（`/model` 命令对非首选模型无效），对比 Cloud SaaS AI 的体验差距明显。该讨论指向 WebUI 模型切换的可用性缺陷，已有对应 PR **[#5202](https://github.com/HKUDS/nanobot/pull/5202)** 在待合并队列中尝试改善。

---

## 5. Bug 与稳定性

今日报告的 Bug/回归按严重程度排列：

| 严重度 | Issue/PR | 描述 | 状态 |
|--------|----------|------|------|
| 🔴 P1 | [#5198](https://github.com/HKUDS/nanobot/issues/5198) | **无法在特定会话中切换模型**——模型 blip 点击无效，`/model` 命令对其他模型无效，需重新配置整个实例 | 打开中；[#5202](https://github.com/HKUDS/nanobot/pull/5202) 改进切换可发现性，待合并 |
| 🟠 P1 | [#5205](https://github.com/HKUDS/nanobot/issues/5205) | `nanobot plugins enable feishu` 报错 `No module named ensurepip`（uv 工具安装缺省） | 已关闭（可能为环境问题） |
| 🟠 P1 | [#5185](https://github.com/HKUDS/nanobot/issues/5185) | 响应中返回工具调用代码（provider/invalid 类型） | 已关闭（标记 invalid） |
| 🟡 P2 | [#4801](https://github.com/HKUDS/nanobot/issues/4801) | `MemoryStore._format_messages()` 对缺失 `role` 的畸形消息触发 KeyError | 已关闭，[#5153](https://github.com/HKUDS/nanobot/pull/5153) 修复 |
| 🟡 P2 | [#5163](https://github.com/HKUDS/nanobot/issues/5163) | 手动 cron 运行因 WebUI 轮询读取而丢失完成状态（数据竞争） | 已关闭，[#5183](https://github.com/HKUDS/nanobot/pull/5183) 修复 |

**评估**：今日报告的 5 个 Issue 中 4 个已关闭（3 个有对应修复 PR）。唯一的"开放性 P1"是 #5198 的模型切换限制，虽不影响稳定性但直接影响用户体验，且解决方案（#5202）仍在待合并队列。

---

## 6. 功能请求与路线图信号

从今日的 PR 队列中可明确看到下一版本的功能方向：

| 方向 | PR | 说明 | 潜在价值 |
|------|-----|------|----------|
| 🔍 **跨会话搜索与提及** | [#5211](https://github.com/HKUDS/nanobot/pull/5211) | 新增 `search_sessions`/`read_session` 工具；WebUI 支持 `@` 提及另一会话并自动分组 | 对话管理效率大幅提升 |
| ⚡ **快速聊天 / 临时聊天** | [#5184](https://github.com/HKUDS/nanobot/pull/5184) | 固定身份的 Quick Chat + 连接级内存的 Temporary Chat | 轻量交互入口，优化多场景使用 |
| 🧩 **子代理模型预设** | [#5207](https://github.com/HKUDS/nanobot/pull/5207) | `spawn` 工具新增 `preset` 参数，允许子代理独立指定模型+温度，不受 caller 会话 preset 限制 | 多智能体编排灵活性增强 |
| 🔐 **可信代理引导认证** | [#5210](https://github.com/HKUDS/nanobot/pull/5210) | 为 `/webui/bootstrap` 提供可选的可信上游代理认证路径（支持 Cloudflare Tunnel + Access） | 企业部署安全增强 |
| 📚 **skills.sh 发现源支持** | [#5186](https://github.com/HKUDS/nanobot/pull/5186) | 支持知名技能发现主机（如 uizze.com），不仅限于 GitHub 仓库源 | 技能生态接入扩展 |
| 🎛️ **模型预设切换可发现性** | [#5202](https://github.com/HKUDS/nanobot/pull/5202) | 将隐藏的长按拖拽手势改为点击/下拉菜单 | 直接回应 #5198 的用户痛点 |

**判断**：#5211、#5184、#5207 属新功能的第一梯队，若合并将显著增强 WebUI 交互与多智能体能力。#5210 和 #5186 则分别面向部署安全与生态扩展，体现项目在 B 端场景的布局。

---

## 7. 用户反馈摘要

- **对模型输出纯净性的敏感**（#5185）：用户截图展示响应中插入工具调用代码，这种"突发异常"即便被标记为 provider 问题，也会显著损害产品信任感。社区对响应中不应出现原始工具调用细节的期望非常明确。
- **对配置复杂度的不满**（#5198）：用户明确表示"每次换模型都要重新配置整个实例"不可接受，并对比 Cloud SaaS AI 的一键切换体验。说明有相当一部分用户将 Nanobot 当作日常生产力工具使用，对交互便捷性的要求正在提高。
- **环境安装的摩擦**（#5205）：Debian 服务器上 uv 工具安装缺少 ensurepip 模块，导致插件启用失败。虽然可能是环境特定问题，但提示**插件系统的前置依赖检查**值得加强。
- **WebUI 状态一致性的重视**（#5163）：用户详细描述了"任务实际执行成功但界面仍显示 Failed"的竞态现象，说明数据一致性问题会被用户敏锐捕捉并认真报告。

---

## 8. 待处理积压

| 项目 | 创建时间 | 类型 | 状态 | 需关注原因 |
|------|----------|------|------|------------|
| [#3869](https://github.com/HKUDS/nanobot/pull/3869) DeepSeek 消息加固 | 2026-05-16 | PR（question, conflict） | 打开中，已近 3 个月 | 涉及 DeepSeek API 的 null 内容拒绝、"(empty)" 占位符泄漏、assistant 文本丢弃三类问题；标记为 conflict，需维护者决策 |
| [#5139](https://github.com/HKUDS/nanobot/pull/5139) 会话合并时保留媒体路径 | 2026-07-28 | PR（regression, conflict, P1） | 打开中，标记 conflict | 直接影响归档后的媒体文件可恢复性，已修复 #5118/#5135 两个 Issue，但出现冲突需协调 |
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) 会话级模型切换限制 | 2026-07-31 | Issue（bug，P1） | 打开中 | 对用户体验影响明确，虽有 [#5202](https://github.com/HKUDS/nanobot/pull/5202) 缓解，但不解决根因 |
| [#5194](https://github.com/HKUDS/nanobot/pull/5194) JSONL 会话列表加速 | 2026-07-31 | PR（performance, P2） | 打开中 | 性能优化 PR，涉及索引缓存与权限决策分离，需仔细审查 |

---

**总结**：NanoBot 项目今日展现出高健康度——Bug 修复响应快（P1 全部 24 小时内合入）、新功能供给充足（5+ 个功能 PR 排队）、社区讨论聚焦明确（模型交互与输出纯净性）。需关注的是两个标有 `conflict` 的 PR（#3869、#5139）长期积压，以及 #5198 背后所反映的"多模型管理"体验缺口。建议维护者优先处理 #5139 的冲突解决，并在下一版本中纳入 #5202 与 #5211，以回应社区对模型切换和对话管理的直接诉求。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-02

## 1. 今日速览

过去 24 小时项目活跃度极高：**50 条 Issue 更新**（新开/活跃 34，关闭 16）、**50 条 PR 更新**（待合并 42，已合并/关闭 8），无新版本发布。今日主线有三条：一是**安装与兼容性问题集中爆发**（npm engine 约束、Windows Bootstrap 失败、Termux 依赖解析）占据新 Issue 近三分之一；二是**安全边界类修复持续推进**，多个已标记 `implemented-on-main` 的 P2 安全 Issue 被关闭（如跨 profile 凭据泄漏 #51603、Teams 导入副作用 #62935）；三是**插件生命周期**成为当前开发热点（#64229 功能请求已有对应 PR #76490 落地）。整体判断：项目修复吞吐量高、社区反馈及时，但 42 条 PR 待合并的积压需引起维护者注意。

## 2. 版本发布

无。

## 3. 项目进展

今日合并/关闭的 PR 数量为 8 条，其中在评论数 Top 20 中可见的 2 条均已关闭：

- **[PR #76513 – feat(gateway): key Discord auto-thread sessions on prospective_thread_id](NousResearch/hermes-agent PR #76513)**：修复 Discord 同一 channel 中后续 auto-thread 无法获得自动标题/重命名的问题。根因是连接器按消息粒度分组，而会话层按 thread 粒度关联，导致分组模型不匹配。
- **[PR #76492 – feat(gateway): support session-scoped toolsets](NousResearch/hermes-agent PR #76492)**：为 `session.create` 增加可选的 `enabled_toolsets` 参数，支持会话级 toolset 控制，同时防止后台和预览子代理扩大权限范围。这是平台 API 能力的一次重要扩展。

今日关闭的 Issue 中，多条标记 `implemented-on-main`，代表对应修复已合入主分支：

| Issue | 内容 | 影响 |
|---|---|---|
| [#51603](NousResearch/hermes-agent Issue #51603) | `resolve_anthropic_token()` 绕过 profile secret scope，multiplex 模式跨 profile 凭据泄漏 | 安全边界修复 |
| [#62935](NousResearch/hermes-agent Issue #62935) | `microsoft-teams-apps` 导入副作用加载外部 .env，破坏 profile 配置隔离 | 配置隔离修复 |
| [#76511](NousResearch/hermes-agent Issue #76511) | Copilot token exchange 在 `_is_suppressed()` 前执行，启动阻塞约 4.5s | 启动性能修复 |
| [#76484](NousResearch/hermes-agent Issue #76484) | Windows Bootstrap 因 npm 版本约束 `EBADENGINE` 失败 | 安装流程修复 |
| [#76482](NousResearch/hermes-agent Issue #76482) | kanban notifier 在 adapter-less gateway 持有 dispatcher 时静默跳过所有订阅 | 通知可靠性修复 |

**效率评估**：24 小时内关闭 16 条 Issue（其中约 1/3 为含安全标签的问题）+ 8 条 PR 合并/关闭，Bug 闭环速度良好。但需注意 #76484 对应的修复（#76499）目前仍处于 OPEN 状态，Issue 关闭与修复合入之间存在时间差。

## 4. 社区热点

**[Issue #75598 – [Bug]: issue with updates（7 条评论，已关闭）](NousResearch/hermes-agent Issue #75598)**：今日讨论度最高的 Issue。用户报告大约一周前开始更新后程序变得不稳定，多个 gateway 实例相互冲突，profile 切换也不会停用其他配置。这一反馈揭示了两个深层诉求：**更新回归的快速响应**和**多 profile 并存的可靠隔离**。

**[Issue #65274 – Desktop project-scoped fresh sessions fall back to home cwd on Windows（6 条评论，OPEN，👍1）](NousResearch/hermes-agent Issue #65274)**：Windows 桌面上在活动 Project 中新建会话时 cwd 回退到用户主目录，而现有会话使用正确路径。该 Issue 自 7 月 16 日创建至今已近三周仍无 fix PR，持续被社区关注，反映 Windows 平台路径一致性是用户高频痛点。

**[Issue #51603 – resolve_anthropic_token() bypasses profile secret scope（5 条评论，已关闭）](NousResearch/hermes-agent Issue #51603)**：跨 profile 凭据泄漏的安全问题虽然已修复，但讨论热度说明用户对 multiplex 模式下的密钥隔离有很高敏感度，也侧面说明该功能被广泛使用。

## 5. Bug 与稳定性

### 已修复（closed，标记 implemented-on-main）
- **跨 profile 凭据泄漏**（[#51603](NousResearch/hermes-agent Issue #51603)，P2/security）：已修复。
- **Teams 插件加载污染所有 gateway 进程**（[#62935](NousResearch/hermes-agent Issue #62935)，P2/security）：已修复。
- **Copilot token 交换导致启动延迟 ~4.5s**（[#76511](NousResearch/hermes-agent Issue #76511)，P2）：已修复。
- **Windows Bootstrap `EBADENGINE` 安装失败**（[#76484](NousResearch/hermes-agent Issue #76484)，P2）：已关闭（修复 PR #76499 尚在审查）。
- **kanban notifier 静默跳过订阅**（[#76482](NousResearch/hermes-agent Issue #76482)，P2/P3）：已修复。
- **MCP 超大工具结果导致 compression 耗尽 3 次尝试**（[#76352](NousResearch/hermes-agent Issue #76352)，P2）：已关闭。

### 待处理（Open，按严重程度排序）

**高（P1/P2，功能受影响，暂无修复 PR）**
- **[#76435 – Gateway reconnect loop plus unusable desktop updater](NousResearch/hermes-agent Issue #76435)**（P2）：Discord 网关在 Cloud 托管下进入重连循环，超过 1000 次连接尝试导致 Discord 重置 Bot token；桌面端更新器也提示 `managed outside` 无法使用。两条故障叠加严重影响用户。
- **[#60845 – queued follow-up responses bypass MEDIA extraction](NousResearch/hermes-agent Issue #60845)**（P2）：Telegram 平台 `busy_input_mode: queue` 下，排队任务产出的附件以纯文本路径发送而非真实 MEDIA 附件。消息投递可靠性问题。
- **[#65274 – Windows 项目会话 cwd 回退](NousResearch/hermes-agent Issue #65274)**（P2）：已开放超两周，无修复 PR。
- **[#43757 – Responses API function_call_output 被剥离](NousResearch/hermes-agent Issue #43757)**（P2）：通过 input 数组发送历史时工具调用结果跨轮丢失，影响 API 兼容性。
- **[#76491 – Desktop 终端在本地而非网关执行](NousResearch/hermes-agent Issue #76491)**（P2，标记 duplicate）：桌面客户端连接远程 gateway 后，终端工具在本地执行而非远程，对依赖远程执行的工作流是功能性破坏。
- **[#75651 – 安装与同步边界情况：EBADENGINE、配置 Schema 错误、LXC/macOS Git Sync 卡死](NousResearch/hermes-agent Issue #75651)**（P2）：聚合多个安装/同步问题。

**中（有修复 PR 在途）**
- **[#76481 – OpenRouter xAI :online 重复 web_search 工具](NousResearch/hermes-agent Issue #76481)**（P2）：xAI 返回 `HTTP 400: Duplicate tool names`。已有 [PR #76496](NousResearch/hermes-agent PR #76496) 提交修复，待合并。
- **[#76486 – package.json npm engine >=12 阻断 Node 22 / npm 11](NousResearch/hermes-agent Issue #76486)**（P2）：已有关联 PR [#76499](NousResearch/hermes-agent PR #76499) 放宽约束。
- **[#76469 – Termux 安装失败（nemo-relay 依赖解析）](NousResearch/hermes-agent Issue #76469)**（P2）：等待复现。

**低（P3，桌面端体验类）**
- [#76381](NousResearch/hermes-agent Issue #76381)：PluginSlot 已声明但未在 App.tsx 渲染。
- [#76064](NousResearch/hermes-agent Issue #76064)：demo 插件默认启用造成 UI 杂乱。
- [#75960](NousResearch/hermes-agent Issue #75960)：日文/中日韩输入法 preedit 位置错误。
- [#76414](NousResearch/hermes-agent Issue #76414)：honcho peers 非默认 profile 显示 `(not set)`。

**特别提及**：两条 cron lifecycle guard 误报 Issue（[#76448](NousResearch/hermes-agent Issue #76448)、[#76510](NousResearch/hermes-agent Issue #76510)）均以 `cannot-reproduce` 关闭，但同日有 [PR #76507](NousResearch/hermes-agent PR #76507) 提交修复（将目录引用视为非脚本）。建议维护者复核该 `cannot-reproduce` 判断是否有误。

## 6. 功能请求与路线图信号

**可能纳入下一版本的功能：**

- **插件生命周期管理**（[#64229](NousResearch/hermes-agent Issue #64229)）：请求注册句柄、所有权账本、`on_unload` 回调和受监督后台任务。已有 [PR #76490](NousResearch/hermes-agent PR #76490) 提交完整实现（含 idempotent 注册句柄、逆序注销、强制重新发现前先卸载）。这是目前最强的路线图信号。
- **会话级 toolset 支持**（[PR #76492](NousResearch/hermes-agent PR #76492)，已关闭）：`session.create` 接受 `enabled_toolsets`，保留显式空数组语义，限制子代理权限扩展。该能力已合入，预期后续可用于沙箱/受限会话场景。
- **Discord 审批反应路由**（[PR #76506](NousResearch/hermes-agent PR #76506)）：将 `reaction:added` 标准化为审批输入，👍/👎 映射到 approve/deny。为审批流程增加平台原生交互方式。

**有热度但无对应实现：**

- **[#37566 / #64790 – 桌面字体选择器](NousResearch/hermes-agent Issue #37566)**：两个字体选择器请求均已关闭（总计 👍5），可能已实现或合并为同一需求，但今日无 release 佐证。
- **[#76466 – 使用 OpenAI 兼容 TTS 端点返回的采样率](NousResearch/hermes-agent Issue #76466)**：本地 TTS 服务 44.1kHz 音频被硬编码假定为 24kHz，属实际使用阻断。
- **[#34992 – 策略/审计授权层](NousResearch/hermes-agent Issue #34992)**：外部项目 Agent_Sudo 提议为 Hermes 增加策略授权层，仍处于讨论阶段。
- **[#25849 – EMAIL_ACCOUNT 环境变量](NousResearch/hermes-agent Issue #25849)**：邮箱账户名与地址的区分需求，自 5 月 14 日开放至今无动态。

**路线图张力观察**：PR [#76499](NousResearch/hermes-agent PR #76499)（允许 Node 22 / npm 11 安装）与 PR [#76459](NousResearch/hermes-agent PR #76459)（managed 工具链统一升级到 Node 26）方向相左。前者满足当前稳定版用户，后者激进推进工具链版本。二者若同时合入，需要明确系统 Node 与 Hermes-managed Node 的边界定义。

## 7. 用户反馈摘要

- **升级回归是最大不满来源**（[#75598](NousResearch/hermes-agent Issue #75598)）：用户明确表示“约一周前所有更新都很顺利，之后程序变得完全不稳定”，多 gateway 相互冲突、切换 profile 不彻底。这类反馈直接指向发布质量管控需求。
- **长连接平台稳定性信任受损**（[#76435](NousResearch/hermes-agent Issue #76435)）：Discord 网关重连 1000+ 次导致 token 被平台重置，用户同时遭遇桌面更新器失效。社区对“Cloud 托管是否过度干预自托管网关”存在疑问。
- **桌面端与远程网关的语义不一致**（[#76491](NousResearch/hermes-agent Issue #76491)）：通过 gateway 连接远程实例时，终端命令在本地执行而非远程——用户对此感到困惑，因为这打破了“桌面只是客户端”的预期。
- **非开发者用户诉求清晰**（[#64790](NousResearch/hermes-agent Issue #64790)）：用户表示自己用 Hermes Desktop 作为日常生产力工具，无法接受修改 CSS 这类定制方式。桌面端需要更多开箱即用的可配置性。

## 8. 待处理积压

**长期未关闭的 Issue：**

- **[#25849 – EMAIL_ACCOUNT 缺失](NousResearch/hermes-agent Issue #25849)**：创建于 2026-05-14，近三个月无实质进展。邮箱账户名配置缺失影响非标准邮箱账户用户。
- **[#32887 – gateway_state.json 心跳缺失](NousResearch/hermes-agent Issue #32887)**：创建于 2026-05-27，闲置 2 分钟以上的 gateway 被跨容器 WebUI 误判为宕机。已标记 `needs-decision`，等待维护者裁决心跳写盘策略。
- **[#43757 – Responses API 工具结果跨轮丢失](NousResearch/hermes-agent Issue #43757)**：创建于 2026-06-10，为 API 兼容性核心缺陷，至今无修复。
- **[#34992 – 策略/审计授权层](NousResearch/hermes-agent Issue #34992)**：创建于 2026-05-29，有外部贡献者表达实施意愿，但项目方未回应。

**长期未合并的 PR（安全相关需优先关注）：**

- **[PR #56040 – 流式响应中脱敏 secrets](NousResearch/hermes-agent PR #56040)**（security）：已开放一个月以上。该 PR 解决长响应对半分片时中间块泄漏密钥和工具追踪横幅的问题，属安全风险，建议优先审查。
- **[PR #71996 – 绝对路径拼写绕过 hardline floor](NousResearch/hermes-agent PR #71996)**（security）：`/sbin/shutdown`、`C:\Windows\System32\shutdown.exe` 等形式可绕过命令黑名单，开放一周，等待决策。

---

**项目健康度总结**：今日数据呈现“高输出、高积压、高安全关注”的特征。修复吞吐能力值得肯定（16 条 Issue 关闭，含多条安全与稳定性修复），但 42 条 PR 待合并的队列长度对反馈闭环速度构成潜在威胁；npm/Node 工具链的方向分歧（Node 22 vs Node 26）是短期内需要明确的技术决策点。建议维护者优先处理流式脱敏 PR（#56040）与 Node 版本策略，两者分别影响安全承诺与安装成功率。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

## 📋 PicoClaw 项目动态日报 — 2026-08-02

### 1. 今日速览

过去 24 小时内，PicoClaw 项目共有 1 条 Issue 更新和 3 条 PR 更新，无新版本发布。开发活动主要围绕新功能贡献展开：两条新的 Open PR 分别提出了 Exa 搜索供应商和 OrcaRouter 兼容供应商支持，显示社区对扩展外部服务集成的兴趣持续上升。值得注意的是，长期存在的 Matrix 同步稳定性问题 #3203 被标记为 stale，但仍持续引发讨论（7 条评论，2 个 👍），其未修复状态已对项目健康度构成隐患。整体活跃度处于中等水平，功能开发方向活跃，但维护层面对关键 Bug 的响应仍有待加强。

### 2. 版本发布

无新版本发布。

### 3. 项目进展

- **PR #3261：添加繁体中文（zh-TW）界面与文档翻译** — 已关闭（CLOSED），带 [stale] 标签，从创建到关闭跨越半个月，最终未进入主线合并。
  - 该 PR 旨在将 WebUI 与文档整体本地化为台湾繁体中文，并统一术语风格。关闭可能意味着维护者拒绝了此项改动，也可能是因长期未活动被自动清扫。若后者，项目将错失一次免费的国际化和本地化贡献。
  - [GitHub: sipeed/picoclaw PR #3261](https://github.com/sipeed/picoclaw/pull/3261)

另外，今天还有 2 个新功能 PR 正处于待合并状态，它们代表了项目当前正在积累的能力增量（详见第 6 部分）。

### 4. 社区热点

- **Issue #3203：Matrix 同步循环缺少重连机制 — 网络中断后彻底静默死亡**  
  **评论数: 7 | 👍: 2 | 标签: [BUG] [stale]**
  这是过去 24 小时内唯一在评论区产生互动的 Issue，也是当前社区最关切的技术痛点。用户 weissfl 报告了 Matrix 频道 `/sync` 长轮询循环在网络抖动或 homeserver 重启后永久终止的问题。由于主进程并未退出，systemd 的 `Restart=on-failure` 无法触发，导致 bot 陷入“看起来在线、实际上失联”的假死状态。这引发了 7 条评论的讨论，说明不少用户可能也遭遇过类似部署事故。其背后的核心诉求是**对网络不稳定环境的自适应能力与可自愈的健壮性**，而非简单的错误提示。
  - [GitHub: sipeed/picoclaw Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)

### 5. Bug 与稳定性

当前唯一活跃的 Bug 即上文的 #3203，按严重程度归为**高**：

- **Matrix `/sync` 假死（#3203）**  
  任何网络中断或服务器重启都会使同步循环永久停止，且无自动恢复机制，需要人工介入重启进程。在无人值守的部署场景下，这会直接导致服务的不可用状态持续数小时至数天。**目前尚无关联的 Fix PR 被提出**，且该 Issue 已进入 stale 状态，存在被自动关闭的风险。这应当是维护者优先处理的事项。
  - [GitHub: sipeed/picoclaw Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)

### 6. 功能请求与路线图信号

今日活跃的两条 Open PR 均指向扩展外部服务集成，反映了项目向更灵活的多供应商架构演进的趋势：

- **PR #3299：添加原生 Exa 网络搜索供应商**  
  Exa 是一个主打 AI 优化的 Web 搜索 API。该 PR 将其接入 `tools.web` / `web_search` 能力，支持现有 `d/w/m/y` 时间范围过滤器，并附带了配置和测试改动。若合并，将填补 PicoClaw 在“AI 原生搜索”方面的能力空白，对需要实时信息检索的 Agent 场景有直接价值。
  - [GitHub: sipeed/picoclaw PR #3299](https://github.com/sipeed/picoclaw/pull/3299)

- **PR #3309：添加 OrcaRouter 作为 OpenAI 兼容供应商**  
  该 PR 新增 `orcarouter` 作为一级供应商，OrcaRouter 以 `vendor/model` 格式路由多个上游模型，通过 OpenAI Chat Completions 协议提供统一接入，与现有供应商配置模式完全一致。这条 PR 暗示社区正尝试将 PicoClaw 接入更多聚合路由层，以打破单一云厂商锁定，是低成本高兼容性的架构演进。
  - [GitHub: sipeed/picoclaw PR #3309](https://github.com/sipeed/picoclaw/pull/3309)

这两个 PR 虽然尚未合并，但都带有完整的配置描述和实现细节，体现了外部贡献者对项目接入新供应商路径的熟悉程度。它们很可能被纳入下一个次版本（如 v0.3.0）的功能列表中。

### 7. 用户反馈摘要

从 #3203 的讨论中可以提炼出以下真实用户声音：

- **痛点明确**：用户在部署 PicoClaw 作为常驻 Agent 时，对网络环境的可靠性有较高要求。一次简单的网络闪断或服务器维护，就可能导致整个服务“死透”，且没有任何迹象告知管理员。
- **场景反思**：评论区的讨论很可能涉及 systemd 配置的替代方案（如 watchdog、心跳检测等），反映出用户为了维持服务可用，不得不自行编写外围监控脚本，本质上是对内置稳定性机制不足的补充。
- **满意度谨慎**：用户对功能面可能认可，但对“后台稳定性”和“无人值守运行能力”持有明确的保留态度。这提示开发团队，健壮性（resilience）和可观测性（observability）是赢得 Agent 类项目用户信任的关键指标。

### 8. 待处理积压

- **Issue #3203（已 stale）**  
  这是当前列表中唯一被标记为 stale 的 Issue，也是唯一被报告的高严重度 Bug。长期未修复并进入 stale 状态，意味着该项目可能存在“Bug 得不到及时响应”的维护风险。建议维护者移除 stale 标记、确认复现步骤，并给出明确的修复计划或 workaround（如进程级 watchdog 或自动重连补丁）。
  - [GitHub: sipeed/picoclaw Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)

- **PR #3261（已关闭但价值尚存）**  
  该 PR 提供了完整的繁体中文翻译，属于对面向用户部分的质量贡献。虽然显示为 CLOSED，但若其关闭并非出自维护者主观拒绝（例如被 stale bot 自动关闭），那么依然有待回收和重新评估的价值。建议维护者自查 PR 关闭原因，确认是否需要向贡献者反馈具体修改意见。
  - [GitHub: sipeed/picoclaw PR #3261](https://github.com/sipeed/picoclaw/pull/3261)

- **待合并 PR 审核速度**  
  PR #3299 已存在 7 天仍未合并或收到维护者的修改请求；PR #3309 是今日新开，尚在观察窗口内。对于功能完整、已完成配置补全的 PR，建议维护者尽快安排 review，以免贡献者等待过久导致外部贡献热情下降。
  - [GitHub: sipeed/picoclaw PR #3299](https://github.com/sipeed/picoclaw/pull/3299)
  - [GitHub: sipeed/picoclaw PR #3309](https://github.com/sipeed/picoclaw/pull/3309)

---

**项目健康度评估**：功能性 PR 活跃，外部贡献意愿良好；但存在一个高严重度 Bug 长时间未响应、且核心模块稳定性缺口未弥合的问题。若近期能合并第 6 部分的两条功能 PR，并在 #3203 上给出一个临时重启方案或长期修复计划，项目整体的社区信任和交付质量将达到更健康的水平。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-02

## 1. 今日速览

过去 24 小时 NanoClaw 保持高强度迭代：2 条 Issue 更新（1 新开、1 关闭）、15 条 PR 更新（10 条待合并、5 条已合并/关闭），并发布 v2.1.54 滚动版本。最重要的变化是 **iMessage 统一为单一 `imessage` 频道（本地 + Hosted Photon 双后端）**，属于破坏性变更。社区提交聚焦于设置流程对用户选择的尊重（#3170）、rootless Docker 支持（#3174）与捆绑技能清理（#3172）。维护者对 Issue 响应迅速（#3169 当日关闭并合并修复），整体项目健康度良好；但 10 条 PR 长期待合并仍是主要积压风险。

## 2. 版本发布

### v2.1.54（Rollup Release）

- **覆盖范围**：v2.1.18 至 v2.1.54，即自 v2.1.17 tag 以来合并的全部内容。
- **核心变更（破坏性）**：iMessage 统一为单一 `imessage` 频道，通过 `/add-imessage` 安装，支持两种后端：
  - **Local**：基于本机 Mac 的 `chat.db`（经 Chat SDK 桥接）；
  - **Hosted**：基于原生 [Photon](https://photon.codes)（说明文字截断，以 PR #3164 实现的注册流程为准）。
- **迁移注意**：旧版独立 iMessage 频道用户需通过 `/add-imessage` 重新配置；#3164 取代了早期实现 #2999，最终落地了可工作的 Hosted 注册流程。

🔗 [GitHub Releases](https://github.com/nanocoai/nanoclaw/releases/tag/v2.1.54)

## 3. 项目进展

今日 5 条 PR 已合并/关闭，集中在四个方向：

1. **iMessage 频道正式落地**（[#2999](https://github.com/nanocoai/nanoclaw/pull/2999)、[#3164](https://github.com/nanocoai/nanoclaw/pull/3164)）：统一频道进入 v2.1.54，其中 #3164 修复了 #2999 在 Hosted 注册流上的缺陷，属于典型的"先合并、再用更完善实现迭代"演进。
2. **Setup 体验修复**（[#3170](https://github.com/nanocoai/nanoclaw/pull/3170)）：失败诊断不再强推 Claude CLI，而是派发给用户实际选择的 provider，直接关闭 Issue #3169。
3. **凭证到期告警**（[#3167](https://github.com/nanocoai/nanoclaw/pull/3167)）：新增 provider 凭证过期告警。该 PR 由一次真实事故驱动——Codex 凭证过期时操作者只看到 `Read-only file system (os error 30)` 的晦涩报错。
4. **发布流程安全加固**（[#3168](https://github.com/nanocoai/nanoclaw/pull/3168)）：修复 release 流程中 merge 后遗留的安全缺口。

**已合并/关闭 PR 清单**：
- [#3170 fix(setup): dispatch failure assist to the picked provider](https://github.com/nanocoai/nanoclaw/pull/3170)
- [#3168 fix(release): close post-merge safety gaps](https://github.com/nanocoai/nanoclaw/pull/3168)
- [#3167 feat(credentials): alert when a provider credential expires](https://github.com/nanocoai/nanoclaw/pull/3167)
- [#3164 Hosted iMessage (Photon): supersede #2999 with a working registration flow](https://github.com/nanocoai/nanoclaw/pull/3164)
- [#2999 feat(channels): unify iMessage into a single imessage channel](https://github.com/nanocoai/nanoclaw/pull/2999)

整体评估：**iMessage 双后端架构从实验走向正式可用，设置流程与凭证管理两大稳定性短板得到补强**。

## 4. 社区热点

今日新增 Issue/PR 大多为 0 评论，讨论尚处早期；但从更新关联度看，以下构成事实热点：

- **Qodo 技能争议（[#3171](https://github.com/nanocoai/nanoclaw/issues/3171) + [#3172](https://github.com/nanocoai/nanoclaw/pull/3172)）**：用户指出两个内置技能依赖仓库中从未配置的 Qodo SaaS 账号（读取 `~/.qodo/config.json`），且会拦截正常编码请求。直接催生删除 PR #3172，背后诉求是**内置技能的默认质量与开箱即用体验**。
- **Setup 向导的"供应商偏见"（[#3169](https://github.com/nanocoai/nanoclaw/issues/3169) + [#3170](https://github.com/nanocoai/nanoclaw/pull/3170)）**：用户选择 codex 后，失败步骤仍以 Yes 预选方式推销 Claude CLI 并拉起 Anthropic 登录。Issue 当日关闭，反映社区对向导尊重用户选择的强烈期待。
- **Rootless Docker 支持（[#3174](https://github.com/nanocoai/nanoclaw/pull/3174)）**：用户出于安全考虑将 agent 账号移出 docker 组，随即触发两个独立故障。该 PR 为纯社区贡献，反映**安全敏感型部署需求**未被默认环境覆盖。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | **内置 Qodo 技能拦截正常编码请求**（[#3171](https://github.com/nanocoai/nanoclaw/issues/3171)）：依赖从未配置的 `~/.qodo/config.json`，干扰常规工作流 | 有修复 PR [#3172](https://github.com/nanocoai/nanoclaw/pull/3172)（删除技能），待合并 |
| 🔴 高 | **migrate-v2 迁移脚本崩溃**（[#3166](https://github.com/nanocoai/nanoclaw/pull/3166)）：`tasks.ts` 引用已改名的 `insertTask`（现为 `insertTaskRow`），静态 ESM import 导致迁移在启动前即抛 `SyntaxError` | 修复 PR 已提交，待合并 |
| 🟠 中 | **凭证过期时错误信息不可读**（[#3167](https://github.com/nanocoai/nanoclaw/pull/3167) 动机）：只显示 `Reconnecting... Read-only file system (os error 30)`，日志仅有容器 kills 记录 | 告警功能已合并，但模糊报错路径是否根治待观察 |
| 🟠 中 | **setup 强推 Claude CLI**（[#3169](https://github.com/nanocoai/nanoclaw/issues/3169)）：非 Claude provider 场景仍预选 Yes 安装 | 已关闭（由 #3170 修复） |
| 🟠 中 | **agent 最终输出重复投递**（[#2956](https://github.com/nanocoai/nanoclaw/pull/2956)）：`send_message` 工具发送后再复述相同文本导致双重投递 | 修复 PR 自 7/5 起待合并 |
| 🟡 低 | **outbound.db 陈旧 journal**（[#2750](https://github.com/nanocoai/nanoclaw/pull/2750)）：容器 SIGKILL 后 host 只读句柄残留脏 journal | 修复 PR 自 6/12 起待合并 |
| 🟡 低 | **router 解析原始类型 payload 返回非对象**（[#2801](https://github.com/nanocoai/nanoclaw/pull/2801)）：`JSON.parse("5"/"true")` 成功后调用方读 `.text` 得 `undefined` | 修复 PR 自 6/17 起待合并 |

## 6. 功能请求与路线图信号

- **iMessage 双后端架构**：本地 Chat SDK + Hosted Photon 已随 v2.1.54 发布，为当前版本最大路线图信号。
- **凭证全生命周期管理**（[#3167](https://github.com/nanocoai/nanoclaw/pull/3167)）：由真实事故驱动，说明 provider 凭证监控正成为稳定性建设重点，未来可能扩展更多告警维度。
- **Rootless Docker 支持**（[#3174](https://github.com/nanocoai/nanoclaw/pull/3174)）：若合并将显著拓宽 agent 容器的部署面，吸引安全敏感型用户。
- **Reaction 投递 best-effort**（[#3121](https://github.com/nanocoai/nanoclaw/pull/3121)）：将次要功能降级为尽力而为，反映项目在"通道稳定性 vs 功能完整性"上的取舍方向。
- **Rollup 发布策略**：v2.1.54 一次性打包 36 个版本的变更，表明维护者倾向滚动批次发布，以降低发布频率与回归风险。

## 7. 用户反馈摘要

- **"请尊重我选择的 provider"**（[#3169](https://github.com/nanocoai/nanoclaw/issues/3169)）：用户明确选择 codex 后，setup 仍以 Yes 预选方式要求安装 Claude CLI 并拉起 Anthropic 登录。对"被预设路径绑架"的不满已驱动 #3170 修复。
- **"内置技能不应依赖未配置的外部服务"**（[#3171](https://github.com/nanocoai/nanoclaw/issues/3171)）：开箱即用的技能需要 `~/.qodo/config.json` 中的 API key，且无任何配置入口，还拦截正常请求——对默认技能包质量的直接批评。
- **"安全部署方式被忽视"**（[#3174](https://github.com/nanocoai/nanoclaw/pull/3174)）：用户刻意让 agent 账号脱离 docker 组（rootless），结果完全无法使用。表明测试/文档默认只覆盖"用户属于 docker 组"的常见环境。
- **"错误信息需要可操作"**（[#3167](https://github.com/nanocoai/nanoclaw/pull/3167) 背景）：凭证过期导致的神秘重连错误让操作者无从排查，最终促成告警功能。

## 8. 待处理积压

以下长期未合并 PR 值得维护者优先关注（按等待时长排序）：

- [#2750 修复容器杀死后 outbound.db 陈旧 journal](https://github.com/nanocoai/nanoclaw/pull/2750) — 2026-06-12 开启，约 7 周，关联 #2516/#2640 两个历史 issue
- [#2801 加固 router 对不可信输入的处理](https://github.com/nanocoai/nanoclaw/pull/2801) — 2026-06-17 开启，约 6.5 周
- [#2956 抑制 agent 最终输出重复投递](https://github.com/nanocoai/nanoclaw/pull/2956) — 2026-07-05 开启，约 4 周，影响消息可靠性
- [#3046 对齐 init-first-agent 文档与 status blocks](https://github.com/nanocoai/nanoclaw/pull/3046) — 2026-07-14 开启，纯文档、低风险
- [#3090 模板上下文 Markdown 前置](https://github.com/nanocoai/nanoclaw/pull/3090) — 2026-07-19 开启
- [#3121 reaction 投递改为 best-effort](https://github.com/nanocoai/nanoclaw/pull/3121) — 2026-07-23 开启

其中 **#2750 与 #2801 等待时间最长且均涉及稳定性修复**，建议优先审阅；**#3046 为低风险文档 PR，可快速合入**。此外新增的 #3172（删除 Qodo 技能）与 #3166（修复迁移崩溃）虽开启时间短，但涉及开箱体验与迁移可用性，建议同步排期。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

## IronClaw 项目动态日报 — 2026-08-02

### 1. 今日速览

过去 24 小时项目保持高强度活跃：11 条 Issue 更新、24 条 PR 更新，其中 5 个 PR 被合并/关闭、16 个 PR 等待合并。核心团队正密集执行 **Wave 2 架构重构**（WS2.1/WS2.2/WS2.4/WS5 多槽位并行推进），其中 WS2.1 与 WS5 的关键 PR 已合入 `main`，同时 CI 门禁体系完成一轮重大修复（#6996）。无新版本发布。值得关注的是：一位新贡献者（ogarciarevett）的测试 PR 被合并，且长期开放的发布 PR（#5598）已静默搁置近一个月，需维护团队关注。

---

### 2. 版本发布

无新版本发布。

---

### 3. 项目进展

今日合入/关闭的 5 个 PR 清晰展示了「架构重构 + CI 治理 + 测试补强」三条主线：

| PR | 类型 | 核心内容 | 对项目的意义 |
|---|---|---|---|
| [#6998](https://github.com/nearai/ironclaw/issues/6998) ✅ | 重构 | WS2.1：`ironclaw_extension_host` 面向产品的端口反转至 `ironclaw_product_contracts`（行为零变化） | Wave 2 首个合入 PR，解除 `extension_host` 对 `ironclaw_product` 的直接依赖，是依赖边界收敛的基石 |
| [#7002](https://github.com/nearai/ironclaw/issues/7002) ✅ | 重构 | WS5：WebUI + OpenAI Compat 端口反转至 `product_contracts`（与 #7000 已做合并降级） | 完成 Web 层对产品契约的统一切换，`product_wire.rs` 达到 1,923 行并触发 large_file 豁免（引出 #7008） |
| [#6996](https://github.com/nearai/ironclaw/issues/6996) ✅ | CI/基础设施 | 关闭 #6963：基于清单驱动的剩余路径键控 CI 门禁排查 + fail-closed 修复 | 一次性修复 6 个静默门禁 + 2 个 loud 重指向，显著提升 CI 可信度 |
| [#6995](https://github.com/nearai/ironclaw/issues/6995) ✅ | 文档/治理 | Wave 1 事实审计：对照已合入 `main`（`a50ad0638`）校对目标架构决策记录 | 保证架构文档与代码现实一致，为 Wave 2 提供准确基线 |
| [#6761](https://github.com/nearai/ironclaw/issues/6761) ✅ | 测试 | 新增通用出站注册的回归测试（新贡献者 ogarciarevett） | 社区贡献的测试补强，覆盖 registry 边界行为，防止 `register_generic_channel_outbound_targets` 被误改为 no-op |

**整体推进判断**：Wave 2 重构已从「规划 + Wave 1 基础」进入「落地合入」阶段。WS2.1 和 WS5 的合入意味着产品契约层正在成为 Web 与扩展系统的共同依赖轴心，后续 #7000、#7003、#7004、#7005 均以此为基础堆叠，预计未来 2-3 天将迎来合并高峰。

---

### 4. 社区热点

**🔥 最热 Issue：[#6963](https://github.com/nearai/ironclaw/issues/6963) — 路径键控 CI 门禁幸存者清单（7 条评论）**
由 BenKurrek 发起，追踪 #6946 重构后遗留的 8 个未重写的路径键控门禁。该 Issue 由 PR 评审意见升级为独立跟踪条目，已通过 #6996 关闭。评论区的核心争论点在于：**这类门禁缺陷应如何系统性发现，而非逐个 patch**。最终方案是「清单驱动发现 + fail-closed」——为后续 CI 重构提供了方法论模板。

**📌 持续活跃 PR（更新时间表明仍在迭代）**：
- [#6973](https://github.com/nearai/ironclaw/issues/6973)（serrrfirat）：托管 Postgres API 容量回归修复，涉及 `send_message` p95 从 275ms → 4.78s 的严重回归分析
- [#6780](https://github.com/nearai/ironclaw/issues/6780)（serrrfirat）：IronHub 注册/安装深度链接网关，已开放 5 天仍待合并
- [#5981](https://github.com/nearai/ironclaw/issues/5981) / [#5982](https://github.com/nearai/ironclaw/issues/5982)（ilblackdragon）：排队消息转向 + 预算审批门禁，两个大型功能 PR 已跨越 3 周仍未合入

**关注点分析**：社区讨论集中在两类诉求——**CI 基础设施可信度**（门禁必须是 fail-closed 而非静默放行）和**功能 PR 的长期滞留**（#5981/#5982 已 21 天未合并，可能造成大量后续 rebase 成本）。

---

### 5. Bug 与稳定性

按严重程度排列（🔴 高 / 🟡 中 / 🟢 低）：

| 严重度 | Issue | 问题描述 | 当前状态 |
|---|---|---|---|
| 🔴 高 | [#6974](https://github.com/nearai/ironclaw/issues/6974) | **libSQL `thread_store_writes` 性能严重恶化**：工具密集型压力场景 p95 达 37-135s（目标 2.5s）。#6973 的修复使瓶颈测试套件首次能跑完，但工具重载场景仍远超阈值 | 有指向性分析（拆自 #6973），**尚无 fix PR**，已阻塞 nightly 容量门禁 |
| 🔴 高 | [#6978](https://github.com/nearai/ironclaw/issues/6978) | **CI 结构性缺陷**：`workflow_dispatch` 触发的 reborn-tests 运行在结构上必然失败——`critical-mutation` 作业的 `if:` 条件排除了非 PR/merge_group 事件，但 roll-up 检查又要求其必须执行 | 已从工作流源码层面完整证明链路，等待修复 PR |
| 🟡 中 | [#7011](https://github.com/nearai/ironclaw/issues/7011) | **extension_manager 五个预存缺陷**（由 WS2.4 拆分暴露）：错误的 WriteFilesystem 效果、未测试的锁谓词、两个缺失的 dispatch 测试、六个被丢弃的错误原因。全部在 100% 重命名相似度的搬移代码中 | 已记录，待分配修复 |
| 🟡 中 | [#7006](https://github.com/nearai/ironclaw/issues/7006) | **变更覆盖率门禁盲区**：steering-queue 切片约 180 行错误路径（故障注入、CAS 冲突、序列化失败等）因受限于 hermetic 集成测试框架而无法覆盖，导致 PR #5981 被误伤 | 等待门禁逻辑调整或测试框架扩展 |
| 🟢 低 | [#6999](https://github.com/nearai/ironclaw/issues/6999) | **依赖边界规则与文档不一致**：`reborn_dependency_boundaries` 的服务器生命周期规则从未覆盖其文档所声称的 WebChat v2 路由面 | 已记录为架构决策项，明确「不应静默混入 CI 门禁 PR」 |

**稳定性判断**：今日无新增崩溃级 bug，但 #6974 的性能回归和 #6978 的 CI 结构性失败是当前两大红线问题——两者都直接影响 CI 门禁的「绿」或「红」可信度。

---

### 6. 功能请求与路线图信号

**新提出的功能需求**：

| Issue/PR | 需求 | 分析 |
|---|---|---|
| [#7009](https://github.com/nearai/ironclaw/issues/7009) | **将 OrcaRouter 添加为内置 LLM 提供商** | 用户指出 `providers.json` 已包含 OpenRouter、Together、Fireworks 等 9 家聚合网关，唯独缺少 OrcaRouter。属于「补齐生态位」类型请求，实现成本低（仅配置条目 + 基础验证），**很可能被纳入下一版本** |
| [#6993](https://github.com/nearai/ironclaw/issues/6993) | **OOBE 自动化任务原型后端接线** | 前端 UI 原型已随 #6994 合入（纯 mock 数据），此 Issue 要求将其落地为真实后端服务，并引用了 `AUTOMATION-TASKS-CONTRACT.md`。属于已规划功能的第二阶段，合入概率高 |
| [#7001](https://github.com/nearai/ironclaw/issues/7001) + [#6997](https://github.com/nearai/ironclaw/issues/6997) | **LLM 前缀缓存优化**（两个配套 PR） | #7001 保持系统前缀字节稳定，#6997 添加显式 `cache_control` 断点。这是 pi-harness 采用计划（§7.3）的 P0 项，说明**缓存成本优化是当前基础设施的重点方向**，预计将随审查通过后合入 |

**路线图信号**：从今日 PR 堆栈（#6998 → #7000 → #7003 → #7004 → #7005）可见，**Wave 2 重构进入密集合入期**，所有 PR 均标注 `size: XL` 且 `risk: low`——团队正在以「小步快跑 + 行为零变化」策略推进大规模架构改造。

---

### 7. 用户反馈摘要

- **性能痛点（来自 #6974）**：用户 serrrfirat 指出，libSQL 在工具重型场景下 p95 高达 37-135s，与 2.5s 的目标相差 15-54 倍。即使是修复了 Postgres 回归之后，「工具调用密集」类负载仍不可用——这可能是当前**最真实的用户痛点**，涉及实际使用中多工具链式调用的场景。

- **CI 信任问题（来自 #6978 评论）**：BenKurrek 用「clean isolate: zero real lane failures, roll-up still red」精确描述了 CI 的挫败感——零真实失败但门禁仍红，说明开发者对 CI 结果的解读成本已经很高。这解释了为何 #6996 的「fail-closed 门禁」修复会获得高度关注。

- **对第三方服务集成的渴望（来自 #7009）**：用户 jinhaosong-source 主动对比了 9 个已支持网关，指出 OrcaRouter 缺失，显示用户期待项目保持对主流 LLM 网关的「平权覆盖」，且会主动对比功能差距。

- **社区贡献意愿（来自 #6761）**：新贡献者 ogarciarevett 的测试补丁被合入，说明项目的贡献门槛和引导文档对新手友好——这是项目健康度的积极信号。

---

### 8. 待处理积压

**⏳ 长期未合入的关键 PR**：

| PR | 开放时长 | 阻塞风险 |
|---|---|---|
| [#5598](https://github.com/nearai/ironclaw/issues/5598) — `chore: release`（ironclaw-ci[bot]） | **30 天**（自 2026-07-03） | ⚠️ **已进入危险区**。包含 `ironclaw_common` 0.4.2 → 0.5.0 和 `ironclaw_skills` 0.3.0 → 0.4.0 的破坏性变更。长时间未合并意味着所有基于旧版本的下游项目无法升级，且与 `main` 的冲突将持续累积。建议维护者优先处理 |
| [#5981](https://github.com/nearai/ironclaw/issues/5981) — Reborn 排队消息转向（ilblackdragon） | **21 天**（自 2026-07-11） | 🟡 大型功能 PR（XL），且 #5982（预算审批门禁）堆叠在其上。每多等一天，rebase 成本就增加一分。今日 #7006 又指出其触发覆盖率门禁盲区——阻塞因素正在累积 |
| [#5982](https://github.com/nearai/ironclaw/issues/5982) — Reborn 预算审批门禁（ilblackdragon） | **21 天**（自 2026-07-11） | 🟡 依赖 #5981 先合入，属于「二次阻塞」。两个 PR 合计涉及预算控制、资源门禁两大功能，对 Reborn 路线图完整性至关重要 |

**📋 长期开放但无新动态的 Issue**：
- 无超 48 小时无响应的新 Issue（所有今日更新 Issue 均在 24 小时内获得活跃响应），说明维护者响应速度良好。

**建议**：将 #5598（发布 PR）列为最高优先级积压项——30 天的发布延迟可能并不是技术原因，而是流程阻塞。建议维护团队明确：是等待 Wave 2 重构完成后统一发布，还是立即安排一次独立发版。

---

*本日报由 AI 分析 GitHub 公开数据自动生成，数据窗口：2026-07-31 至 2026-08-01。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 | 2026-08-02

## 1. 今日速览

LobsterAI 过去24小时整体活跃度一般：共7条 Issue 更新（1条活跃、6条关闭），2条 PR 处于待合并状态，无新版本发布。值得关注的是，今日关闭的6条 Issue 均为 stale（停滞）标记后的清理操作，其中包括若干真实 Bug 和功能需求，提醒维护者注意“清理积压”与“实际修复”之间的差异。项目主线代码今日无新增合入，整体处于存量维护与待合并积累阶段。

## 2. 版本发布

无。

## 3. 项目进展

今日无 PR 被合并或关闭，但有 2 条 PR 等待合入，分别对应两处用户体验修复：

- **[PR #1224](https://github.com/netease-youdao/LobsterAI/pull/1224)（fix(agent)）**：修复 `CoworkPromptInput.tsx` 中硬编码中文标签导致的 i18n 问题，同时为 Agent 弹窗增加 Escape 键关闭和删除防重复点击保护。该 PR 对应修复 Issue #1223，是社区用户提报的真实体验问题。
- **[PR #2358](https://github.com/netease-youdao/LobsterAI/pull/2358)（fix(cowork)）**：为会话重命名失败增加本地化错误提示，修复 Issue #670，解决用户在重命名失败时无任何反馈的交互盲区。

此外，今日有 6 个 stale Issues 被批量关闭（#1293、#1296、#1298、#1302、#1305、#1307），表明维护者正在集中处理积压的旧 Issue，但需确认其中未修复的 Bug 是否有内部跟进。

## 4. 社区热点

今日没有讨论热度特别高的议题（评论数均在 1-2 条），相对受关注的是：

- **[#1293 自定义 studio http 的 mcp 无法使用](https://github.com/netease-youdao/LobsterAI/issues/1293)**（👍 1）：用户反馈自定义的 HTTP MCP 实际未在 openclaw 引擎中更新，导致无法被调用，仅 SSE 类型可用。背后诉求是希望 MCP 配置能覆盖更多协议类型，且配置保存后能即时生效。
- **[#1223 CoworkPromptInput 硬编码中文及弹窗交互问题](https://github.com/netease-youdao/LobsterAI/issues/1223)**：唯一仍处于开放状态的 Issue。包含 i18n、键盘交互、防误触三方面改进，已停留 4 个月，是长期未解决的体验细节问题。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 是否已有 Fix PR |
|--------|-------|------|----------------|
| 高 | [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | 上传 3M 长图解析导致页面报错，且新开任务持续报错、整体不可用 | 无（今日被 stale 关闭） |
| 高 | [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | 自定义 HTTP MCP 无法被 openclaw 引擎识别和调用 | 无（今日被 stale 关闭） |
| 中 | [#1307](https://github.com/netease-youdao/LobsterAI/issues/1307) | 关闭模型提供方编辑面板后，切换至其他提供方无法编辑配置（面板变为只读） | 无（今日被 stale 关闭） |
| 中 | [#1305](https://github.com/netease-youdao/LobsterAI/issues/1305) | 定时任务运行成功后删除，历史记录中标题名称展示错误 | 无（今日被 stale 关闭） |
| 低 | [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | 输入两个字符即提示“超出模型限制”，疑似上下文窗口计算或模型选择配置有误 | 无（今日被 stale 关闭） |
| 低 | [#1223](https://github.com/netease-youdao/LobsterAI/issues/1223) | 英文用户提示词混入中文“输入文件”；弹窗无 Escape 键关闭、删除按钮缺防重复点击保护 | 有（[PR #1224](https://github.com/netease-youdao/LobsterAI/pull/1224)） |

需要警惕：今日关闭的 6 条 stale Issue 中，#1296 和 #1293 属于实际功能缺陷，若未真正修复而仅因长期无响应被关闭，存在复发和用户流失风险。

## 6. 功能请求与路线图信号

- **[#1302 代码块行号显示切换按钮](https://github.com/netease-youdao/LobsterAI/issues/1302)**：用户请求在代码块工具栏中增加行号切换按钮，覆盖有语言标识和无语言标识两种代码块场景。该 Issue 今日被 stale 关闭，但属于明确的 UI/UX 增强，很可能在未来版本中以类似形式落地。
- **[PR #2358](https://github.com/netease-youdao/LobsterAI/pull/2358)** 对应 Issue #670：会话重命名失败提示，说明团队正在补齐用户操作反馈链路，方向是“交互体验精细化”。
- **[#1223](https://github.com/netease-youdao/LobsterAI/issues/1223)** 中的 Escape 键关闭弹窗和删除防重复点击保护同样属于高频操作体验优化，且 PR #1224 已实现。

综合信号：下一版本可能重点覆盖 i18n 完善、代码块编辑体验增强、以及会话/重命名等关键操作的错误反馈机制。

## 7. 用户反馈摘要

- **MCP 集成不透明（#1293）**：用户配置的自定义 HTTP MCP 显示已保存但引擎实际未加载，仅 SSE 可用。反映出配置界面与后端执行之间缺少校验和同步。
- **上传解析稳定性差（#1296）**：长图上传解析直接报错，且“新开任务会一直报错，整体不可用”，属于 P0 级体验问题，需要优先处理。
- **长文本误判（#1298）**：用户输入几个字即被提示超出模型限制，疑似上下文窗口计算或模型选择有误，影响基础使用。
- **数据一致性（#1305）**：定时任务删除后历史记录标题展示错乱，影响用户对任务历史的管理和追溯。
- **交互细节（#1223）**：英文用户遇到硬编码中文提示词，i18n 覆盖仍有盲区；弹窗缺少 Esc 关闭、删除缺少防重复，属于高频操作下的体验短板。

## 8. 待处理积压

| 类型 | 条目 | 备注 |
|------|------|------|
| Issue | [#1223](https://github.com/netease-youdao/LobsterAI/issues/1223)（开放 4 个月） | 已有对应 PR #1224，等待 review / merge |
| PR | [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224)（创建 4 个月） | 修复 i18n 硬编码与弹窗交互，长时间未合入，存在冲突风险，需尽快处理 |
| PR | [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358)（创建约 2 周） | 会话重命名失败反馈，功能独立、合并难度低，建议优先合入 |
| 风险项 | 今日 stale 关闭的 #1293 / #1296 | 均为真实 Bug，建议维护者二次确认是否已有内部修复方案，避免问题残留 |

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-02

## 1. 今日速览

过去 24 小时内，Moltis 项目保持稳健推进：**无新开或关闭的 Issue**，社区反馈层面较为平静；**3 条 PR 更新**中 2 条已合并/关闭、1 条仍在待合并状态，核心工作集中在会话管理修复与可观测性基础设施的落地。**无新版本发布**，当前主线仍处于功能整合与加固阶段。整体活跃度中等，代码库侧进展正常，但公开讨论与用户侧声音偏少，建议关注透明沟通。

## 3. 项目进展

今日合并/关闭了两条重要 PR，一条针对权限边界，一条针对可观测性基础设施，另有 1 条核心修复待合并：

- **[PR #1170] fix(channels): gate /sh and privileged tools behind a per-account operators list** — 已关闭/合并
  此前通过访问白名单（allowlist）的渠道发送者，仍可能触达特权命令与主机工具。此次变更将“访问权限”与“操作权限”分离，引入按账号配置的 `operators` 列表，并在命令、回调、队列回放、聊天执行、外部接入等路径强制校验。这是**一项重要的安全加固**，修复了潜在的权限提升面，对多租户/团队协作场景尤为关键。
  链接: https://github.com/moltis-org/moltis/pull/1170

- **[PR #1174] Add instrumentation and feedback collection infrastructure** — 已关闭/合并
  为项目引入了**后端无关的 Agent 插桩体系**，并落地 Langfuse v4 导出、OTLP 后端支持，以及终端用户对回复的“反应式反馈”收集。该 PR 实现了不可变 completion-only 记录、流式/非流式一致性、provider 故障转移归属、缓存感知 token 计量、推理记录等能力。这意味着项目在**可观测性、成本核算与用户体验闭环**上迈出了结构性的第一步，为后续数据驱动优化奠定了基础。
  链接: https://github.com/moltis-org/moltis/pull/1174

- **[PR #1182] fix(sessions): allow deleting and archiving the main session** — 待合并
  修复 `main` 会话无法像其他会话一样被删除或归档的问题，移除了 `delete_impl` 与 `is_archivable_entry` 中的 `main` 限制，同时保留了“当前活跃频道会话不可归档”约束及 `sessions.clear_all` 对主/频道会话的保留逻辑。**这是对会话管理灵活性的直接补全**，预计将合并至下一迭代。
  链接: https://github.com/moltis-org/moltis/pull/1182

综合来看，项目在**权限安全、可观测性基础设施、会话管理体验**三个维度均有实质推进，整体走向更成熟、更可运维的阶段。

## 4. 社区热点

今日无高评论量或高点赞量的 Issue/PR（公开数据中评论与 👍 均为 0），公开讨论热度较低。

相对受关注的为 **[PR #1182]（会话主会话删除/归档修复）**，它直接回应用户对会话管理灵活性的诉求——`main` 会话此前被视为“不可变”实体，但用户可能有清理侧栏、重新组织会话树的现实需要。该 PR 表明项目团队在**用户可控性与既有约束之间寻找平衡**，预计是用户向的产品细节优化方向。

链接: https://github.com/moltis-org/moltis/pull/1182

## 5. Bug 与稳定性

今日无新报告的 Bug 或崩溃，但以下两个 PR 属于潜在的稳定性/安全修复：

| 严重程度 | 问题描述 | 修复状态 |
|---------|---------|---------|
| 高（安全） | 通过访问白名单的渠道发送者可能触达特权命令与主机工具，权限边界不清晰 | 已修复（PR #1170 已合并） |
| 中（功能） | `main` 会话无法删除或归档，导致会话管理能力不完整、用户操作受限 | 已有修复 PR（#1182 待合并） |

无回归或崩溃相关报告。项目当前稳定性状态良好，未出现紧急问题。

## 6. 功能请求与路线图信号

今日无新功能请求 Issue。但两条合并/关闭的 PR 透露出明确的路线图信号：

- **可观测性与反馈闭环**（PR #1174）：插桩 + 用户反馈收集的上线，意味着项目正在**构建数据反馈回路**，未来可能将行为数据用于推理优化、成本控制和产品决策。这通常是“进入成熟期”的标志。
- **权限模型精细化**（PR #1170）：将“可访问”与“可操作”解耦，指向 `operators` 角色的概念，未来可能扩展出更细粒度的 RBAC / 角色管理体系。
- **会话管理灵活化**（PR #1182）：解除“主会话”的特殊性，提示未来可能支持更自由的多会话组织方式（如自定义固定会话、批量操作等）。

以上方向有望在接下来 1-2 个版本中继续深化，特别是 `operators` 权限文档化与用户反馈数据的界面呈现。

## 7. 用户反馈摘要

今日无新增 Issue 评论，公开数据中不包含可直接引用的用户反馈。

从已合并 PR 的动机可以推测用户侧痛点：

- **权限困扰**：组织内部分配了渠道访问权限的用户，仍能执行特权命令，暴露出“访问即特权”的隐患——这往往是团队协作中真实发生过的权限边界事故驱动的修复。
- **会话管理不自由**：`main` 会话不可删除/归档，对长期使用产生大量会话的用户而言，主会话造成列表冗余或操作顾虑，修复后用户可根据自身工作流清理历史会话。

待用户反馈数据通过新插桩体系积累后，有望获得更系统的需求画像。

## 8. 待处理积压

当前无长期未响应的 Issue 或 PR。唯一待合并的 PR 为：

- **[PR #1182] fix(sessions): allow deleting and archiving the main session**（作者：shixi-li，更新于 2026-08-01）
  等待维护者 review/merge。涉及会话管理核心逻辑，且附带了较全面的约束说明，建议尽快安排合并与回归测试，避免与后续会话相关改动冲突。
  链接: https://github.com/moltis-org/moltis/pull/1182

---

**总体健康度评估**：代码侧推进稳定，安全修复及时，基础设施投资显著；社区讨论热度偏低，建议通过 CHANGELOG、升级迁移指南或开发者通讯等方式主动对外传递变化。无 Blocking 级问题，项目状态健康。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-02

> 数据来源：github.com/agentscope-ai/QwenPaw（当前项目仓库实际名称；以下“项目”均指该仓库）

## 1. 今日速览

- 过去 24 小时项目活跃度显著上升：**9 条 Issue 更新**（全部为新增或活跃讨论，无关闭）、**13 条 PR 更新**（12 条待合并，1 条已合并/关闭）。
- 今日**无新版本发布**，但合并了 1 个修复 PR（#6598，技能标签持久化），同时有多个针对近期回归缺陷的修复 PR 集中提交，显示项目正处于**密集修 bug 与功能收尾阶段**。
- 值得关注的是，今日有多位 **first-time contributor** 提交 PR（#6623、#6622、#6620、#6618），社区参与度良好，维护者评审压力也相应增大。
- 需注意：目前 **12 条 PR 处于待合并状态**，其中包含 #5490（6/24 提交）等已悬置较久的 PR，合并队列存在一定积压风险。
- 整体来看，项目处于**高活跃度、低发布频率**的状态，社区反馈集中在数据清理、多智能体协作体验与桌面端交互效率三个方向。

## 3. 项目进展

今日**唯一合并/关闭的 PR**，以及几条值得关注的待合并 PR：

### ✅ 已合并/关闭

| PR | 说明 |
|---|---|
| [#6598 fix(skills): preserve plugin-sourced skill tags across reconcile cycles](https://agentscope-ai/QwenPaw PR #6598) | 修复插件来源技能（plugin-sourced skills）的标签在重启后丢失的问题（#6537）。核心修复点是 `reconcile_pool_manifest()` 与 `reconcile_workspace_manifest()` 之前会无条件移除磁盘目录不存在但来源为插件（`plugin:...`）的技能条目。 |

> 注：同一问题今日出现了一个新的开放性 PR #6632（fix 相同问题），可能意味着 #6598 的修复并不完整、需要补充，值得维护者关注。

### 🔍 值得关注的待合并 PR（反映项目正在推进的方向）

- [#6630 fix(agents): report empty model response to user instead of silently failing](https://agentscope-ai/QwenPaw PR #6630) — 修复模型返回空响应时静默失败的问题，提升长会话可用性
- [#6629 fix(memory): trigger summarize on auto-compression when summarize_when_compact is enabled](https://agentscope-ai/QwenPaw PR #6629) — 修复自动压缩不触发记忆 summarize 的问题（对应 issue #6624）
- [#6628 fix(scroll): use SystemMsg for compressed memory placeholder in _rebuild_context](https://agentscope-ai/QwenPaw PR #6628) — 修复压缩占位符使用 user role 导致 DeepSeek 等 API 返回 400 的问题
- [#6631 fix(providers): align Aliyun coding plan models with official website](https://agentscope-ai/QwenPaw PR #6631) — 修正阿里云 coding plan 模型列表不匹配问题
- [#6622 feat(provider): add OrcaRouter as built-in provider](https://agentscope-ai/QwenPaw PR #6622) — 新增内置模型路由提供商，降低用户配置成本
- [#6620 fix(providers): relay Gemini thought_signature without mutating strict ToolCallBlock](https://agentscope-ai/QwenPaw PR #6620) — 修复 Gemini 流式 tool call 每次都崩溃的问题（对应 issue #6619）
- [#6623 fix(acp): prevent final text loss when notifications race the prompt response](https://agentscope-ai/QwenPaw PR #6623) — 修复 ACP 通知与 prompt 响应竞争导致文本丢失的问题（对应 issue #6625）
- [#6618 fix(console): remove forced UTC timestamp normalization in session list](https://agentscope-ai/QwenPaw PR #6618) — 修复会话列表时间戳强制 UTC 的问题，改为尊重本地时区

**项目推进总结**：今日虽仅合并 1 个 PR，但新提交的修复 PR 均针对用户实际反馈的缺陷（空响应静默失败、自动压缩记忆不触发、Gemini 崩溃、ACP 丢文本、UTC 时区等），说明项目能快速响应用户反馈。若这 12 个 PR 在接下来几天陆续合并，将是一次**较大的稳定性提升**。

## 4. 社区热点

今日评论数最高的 Issues（均为 2 条评论）：

### 🔥 #6593 数据清理需求 — [链接](https://agentscope-ai/QwenPaw Issue #6593)

> **标题**：[enhancement] [Feature]: 增加统一且专业的 qwenapw 专用清理页面  
> **作者**：MCQSJ | 更新：2026-08-01 | 评论：2

用户提出长期使用后 QwenPaw 会产生大量数据（自动记忆、工具调用产物、历史对话备份等），空间占用越来越臃肿，希望增加**统一清理页面**，支持手动/自动清理，且需要全局化而非单 agent 管理。这是今日讨论度最高的功能需求，说明**数据治理已成为老用户的显著痛点**。

### 🔥 #6480 nohup 命令卡住 — [链接](https://agentscope-ai/QwenPaw Issue #6480)

> **标题**：[question] [Question]: 运行 nohup 命令 agent 都会卡住  
> **作者**：focus883 | 更新：2026-08-01 | 评论：2

用户报告 `execute_shell_command` 中使用 `nohup` 或 `&` 分离进程后，工具永远无法返回 idle 状态，agent 会一直卡住。该 Issue 自 7/26 创建以来持续更新，说明**这是影响真实自动化流程的关键问题**。

### 🔥 #6568 全局快捷键快速输入框 — [链接](https://agentscope-ai/QwenPaw Issue #6568)

> **标题**：[enhancement] [Feature]: 全局快捷键唤出浮动快速输入框（豆包式）  
> **作者**：WilShi | 更新：2026-08-01 | 评论：2

用户希望桌面端支持全局快捷键（如 macOS `Option+Space`）唤出居中浮动输入框，实现“随手问一句”的轻量交互，类似豆包/Raycast。当前方案需唤起整个 1280×800 主窗口，太重。该需求代表**桌面端交互体验优化**的明确诉求。

### 社区热点分析

今日热门议题从“功能缺失”转向“**体验打磨**”与“**可靠性修复**”——数据清理、轻量交互、命令执行可靠性，均属于深度使用后的真实痛点，而非简单的 feature 拼图。这些信号对产品路线图有较强参考价值。

## 5. Bug 与稳定性

按严重程度排列（🔴 高 / 🟠 中 / 🟡 低）：

### 🔴 #6619 Gemini 流式 ToolCallBlock 崩溃 — [链接](https://agentscope-ai/QwenPaw Issue #6619)

- **现象**：`ToolCallBlock" object has no field "extra_content"`，Gemini 流式响应携带 thought_signature 时每次请求都会崩溃
- **影响**：使用 Gemini 模型时全部相关请求失败，属于崩溃级 Bug
- **状态**：已有修复 PR [#6620](https://agentscope-ai/QwenPaw PR #6620) 待合并

### 🔴 #6480 nohup/& 命令导致 agent 永久卡住 — [链接](https://agentscope-ai/QwenPaw Issue #6480)

- **现象**：`execute_shell_command` 中命令使用 `nohup` 或 `&` 后永远无法返回 idle
- **影响**：所有使用后台进程的自动化脚本均受影响；用户已在 DingTalk 渠道复现
- **状态**：**无修复 PR**，已持续 7 天，需重点跟进

### 🟠 #6625 ACP 通知竞态导致文本丢失 — [链接](https://agentscope-ai/QwenPaw Issue #6625)

- **现象**：外部 ACP agent 同时发送 `session/update` 通知与 `session/prompt` 响应时，`delegate_external_agent` 有时返回 “completed without text output”
- **影响**：偶发性的外部 agent 结果丢失，影响多 agent 协作可靠性
- **状态**：已有修复 PR [#6623](https://agentscope-ai/QwenPaw PR #6623) 待合并

### 🟠 #6624 自动压缩不触发记忆 summarize — [链接](https://agentscope-ai/QwenPaw Issue #6624)

- **现象**：Scroll 自动压缩（token 超阈值触发 eviction）时 `summarize_when_compact` 不生效，手动 `/compact` 可以触发
- **影响**：上下文自动压缩时记忆流程缺失，可能导致长期使用的记忆不完整
- **状态**：已有修复 PR [#6629](https://agentscope-ai/QwenPaw PR #6629) 待合并

### 🟡 #6626 CI “Real behavior proof” 门禁剥离 fenced Evidence 块 — [链接](https://agentscope-ai/QwenPaw Issue #6626)

- **现象**：PR 的 `## Evidence` 部分如果**只包含** fenced code block（如终端记录），内容会被完全剥离，导致 CI 门禁拒绝通过
- **影响**：贡献者提交有完整证据但无 prose 说明的 PR 会被误拒
- **状态**：**无修复 PR**，属贡献者体验问题

### 稳定性小结

今日报告的 5 个 Bug 中有 3 个已有对应修复 PR、1 个持续未解决（#6480）、1 个属 CI/流程问题（#6626）。整体修复跟进速度较好，但 **#6480 的长时间未解决**需要维护者优先关注，因为它直接影响生产环境使用。

## 6. 功能请求与路线图信号

### 今日新功能请求

| Issue/PR | 诉求 | 可能纳入下一版本？ |
|---|---|---|
| [#6593 统一数据清理页面](https://agentscope-ai/QwenPaw Issue #6593) | 手动/自动清理记忆、文件、备份的全局清理功能 | 可能性较高。涉及数据治理与存储优化，属长期使用必需能力，但实现范围较大，可能进入远期路线图 |
| [#6568 全局快捷键浮动输入框](https://agentscope-ai/QwenPaw Issue #6568) | 桌面端轻量快速问答交互 | 中等。属于体验优化，已有详细代码现状分析，实现难度可控 |
| [#6627 loongsuite 追踪集成](https://agentscope-ai/QwenPaw Issue #6627) | 如何使用 loongsuite 对 QwenPaw 做 LLM trace | 需求较小众，但可考虑作为集成文档补充 |
| [#6621 多智能体协作引导缺失](https://agentscope-ai/QwenPaw Issue #6621) | 默认不自动调用其他 agent，文档未说明，用户损耗大量时间 | 强烈建议。**这是文档与产品引导问题**，修复成本低、用户收益大，大概率纳入下一版本迭代 |

### 已有 PR 对应的路线图信号

- [#6622 OrcaRouter 内置 provider](https://agentscope-ai/QwenPaw PR #6622)：从“自定义 provider”变成“内置”，降低模型路由场景的接入门槛，说明项目在拓展第三方生态集成
- [#6631 阿里云 coding plan 模型对齐](https://agentscope-ai/QwenPaw PR #6631)：修正国内云厂商模型列表，贴合国内用户实际可用模型
- [#6630 空响应汇报机制](https://agentscope-ai/QwenPaw PR #6630)：将静默失败改为用户可见的错误提示，属于可靠性体验优化

### 下一版本预测

综合来看，**2.0.x 的下一个 patch 版本**大概率包含以下修复：#6619（Gemini 崩溃）、#6625（ACP 丢文本）、#6624（自动压缩记忆）、#6541（compressed placeholder role 错误）、#6601（空响应静默失败）、#6537（技能标签持久化补充）。

功能层面，**多智能体协作引导（#6621）与数据清理（#6593）** 是用户呼声最高、也最影响长期使用体验的两项，建议纳入近期迭代规划。

## 7. 用户反馈摘要

从今日 Issues 评论中提炼的真实用户反馈：

**😤 数据膨胀困扰老用户**
> #6593：agent 运行使用过程，特别是自动记忆、各种工具调用，会产生大量数据，日积月累越来越臃肿。目前“连删除会话都无法选择删除对应工作区目录”。自动记忆累积的过期记忆、各种无关紧要文件、agent 协作产生的混乱数据、自动备份、历史对话内容，长期使用后会混乱不堪且占用空间大，自己处理麻烦且可能误删。—— 典型的长周期用户痛点，涉及数据所有权与空间治理。

**😟 多智能体协作“引导缺失”让用户白费功夫**
> #6621：用户自 7 月起进行了 50+ 轮多智能体对话，直到 8 月 1 日才发现 Default Agent 不会自动调用其他已创建的 Agent，必须在 PROFILE.md 中显式写入指令。期间大量无效调试和时间损耗。该用户明确表示“引导缺失，而非用户未读文档”——已完整阅读官方文档，但文档只描述功能、未说明默认不调用的行为。—— 这是**文档 + 产品引导双重缺失**的问题，建议尽快改进。

**😕 桌面端轻量交互摩擦**
> #6568：当前桌面端只能通过托盘/Dock 图标唤起整个主窗口（1280×800）。对于“随手问一句”这种轻量场景太重——需要切到应用、等主窗口加载、再输入。置顶迷你输入框能显著降低随手提问的摩擦。

**😠 后台命令执行可靠性问题**
> #6480：`nohup`/`&` 分离进程后 `execute_shell_command` 永远不返回 idle，导致 agent 卡死，影响所有后台自动化任务，特别是通过钉钉等外部渠道使用时的体验。

**😐 自动压缩与手动压缩行为不一致**
> #6624：对用户来说，“自动压缩不触发 summarize 而手动压缩可以”是不符合预期的。（用户本人比较克制，表示“不确定是设计如此还是缺陷”，但期望按配置执行）

## 8. 待处理积压

以下为长时间未解决、或已处于待合并状态较久的重要 Issue/PR，建议维护者关注：

### ⏳ 长期未解决的关键 Issue

| Issue | 创建时间 | 现状 | 建议 |
|---|---|---|---|
| [#6480 nohup 命令卡住](https://agentscope-ai/QwenPaw Issue #6480) | 2026-07-26 | 已持续 7 天，无 fix PR | **高优先级**。影响自动化场景核心功能，建议尽快安排修复 |
| [#6621 多智能体协作引导缺失](https://agentscope-ai/QwenPaw Issue #6621) | 2026-08-01 | 文档/产品引导问题，非代码 bug | 低成本高收益，建议纳入文档迭代 |

### ⏳ 待合并时间较长的 PR

| PR | 创建时间 | 已等待 | 说明 |
|---|---|---|---|
| [#5490 feat(console): show tool-card images inline and add gallery navigation](https://agentscope-ai/QwenPaw PR #5490) | 2026-06-24 | 约 39 天 | 控制台工具卡片图片内联展示与画廊导航，涉及 UI 改动，可能需较多评审 |
| [#6302 feat: unify provider discovery, model metadata, routing, and agent controls](https://agentscope-ai/QwenPaw PR #6302) | 2026-07-21 | 约 12 天 | 大型综合改动（对应 #6167），涉及 provider 发现、模型元数据、路由等 |
| [#6306 feat(desktop): add workspace shortcut to sidebar](https://agentscope-ai/QwenPaw PR #6306) | 2026-07-21 | 约 12 天 | 桌面端侧边栏添加工区快捷入口，涉及桌面端交互 |

### ⚠️ 特殊提醒

- **重复修复风险**：#6598（已合并）与 #6632（开放中）都声称修复 #6537（插件技能标签丢失）。请维护者确认 #6598 是否完整，若 #6632 有额外补充，建议尽快处理避免混淆。
- **CI 门禁可能误伤贡献者**：#6626 指出的 “Real behavior proof” 剥离 fenced evidence 问题，可能导致社区贡献者 PR 被误拒，影响贡献积极性。

---

**报告总结**：CoPaw/QwenPaw 当前处于 2.0 版本后的高活跃迭代期，社区贡献活跃、反馈及时，但合并队列积压与个别关键 Bug（如 #6480）长期未解决是当前主要健康度风险。建议维护者在未来 1-2 天内优先合入已就绪的 8 个修复 PR，并回应 #6480 与 #6621 这两个高热度 Issue。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-02

## 1. 今日速览

过去 24 小时项目保持高活跃度：共 50 条 Issue 更新（47 条活跃、3 条关闭）和 50 条 PR 更新（全部待合并），但 **PR 合并/关闭数为 0**，审查积压值得关注。社区讨论重心集中在记忆/存储架构（#9048、#9103、#6850）与安全相关 RFC（#9127、#7141）上；同时 WhatsApp 渠道连续曝出 2 个安全级 Bug（#9348 S1、#9417 S1），相关修复 RFC #9397 已跟进。版本方面无新 Release，但 PR #9648 正在准备 v0.8.4，须注意翻译目录 pin 修正后再发布。总体来看，项目正处于 v0.9.0 安全/架构里程碑前的密集设计讨论期，健康度良好但合并吞吐偏慢。

## 2. 版本发布

今日无新版本发布。需关注的是 PR [#9648](https://github.com/zeroclaw-labs/zeroclaw/pull/9648)（chore(release): bump version to v0.8.4），该 PR 明确提示：修正后的目录已 pin 到翻译 commit `a9757c23`，且现有翻译 `v0.8.4` 标签仍指向旧目录，**发布前必须先修正标签**。建议维护者尽快处理此阻塞项。

## 3. 项目进展

今日 **0 个 PR 被合并/关闭**，合并流水线停滞。但从 50 条活跃 PR 的更新状态可看出项目正在以下方向集中推进：

- **Eval 评估体系**（contributor: IftekharUddin）：PR #9220（运行回执与失败转储）、#9221（基线文件与回归门禁）、#9222（LLM-judge 分维度评分）、#9223（JUnit XML 报告）、#9224（内存断言）、#9248（历史回执）、#9225（回归套件），已形成完整的评估子系统，目前多数标记 `needs-author-action`。
- **渠道与安全修复**：PR #9571 移除 WATI 渠道（p0）；#9634 修复 Telegram `mention_only` 群组消息误触发；#9417 修复 WhatsApp Cloud 审批令牌泄露。
- **桌面控制（computer-use）**：[#9091](https://github.com/zeroclaw-labs/zeroclaw/pull/9091) 新增 macOS/Linux X11/Windows 原生驱动，对应 RFC #6909。
- **安全传输层**：[#9080](https://github.com/zeroclaw-labs/zeroclaw/pull/9080) 为远程 WSS 添加 inner mTLS、CA 管理与浏览器注册 frontdoor。
- **运行时架构**：#9319 将工具注册表封装为 `ScopedToolRegistry`；#8313 默认启用紧凑技能注入。

## 4. 社区热点

| 讨论焦点 | 链接 | 评论数 | 关注点 |
|---|---|---|---|
| 会话历史与长期记忆分离 RFC | [Issue #9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | 16 | 运行时/gateway/渠道将对话写入 `MemoryCategory::Conversation`，与 agent 长期记忆混杂，呼吁架构分离 |
| KeySource 密钥来源抽象 RFC | [Issue #9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | 13 | 93 个 `#[secret]` 字段、59 个凭据分类，但主密钥来源区分不足，需按部署形态分类 |
| OpenAI Chat Completions 兼容层 RFC | [Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | 12 | 仅支持 WebSocket/webhook，Open WebUI/LobeChat 等生态无法接入，社区呼声高 |
| OTel 跨轮会话关联 RFC | [Issue #8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | 12 | 在 `gen_ai.conversation.id` 属性上导出对话 ID，提升可观测性 |
| Shell 高危命令确认层 RFC | [Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | 11 | 工具级 `auto_approve` 粒度过粗，需 allow/ask/deny 三层策略 |

**核心诉求分析**：热门议题高度集中在两方面——一是**架构边界澄清**（记忆/存储/会话/密钥），反映项目快速成长后职责划分的阵痛；二是**生态兼容与安全**（OpenAI 适配、shell 命令分级审批），说明用户真实部署中需要更精细的控制和互操作性。

## 5. Bug 与稳定性

### S1 严重（安全风险）
- **[Bug]: WhatsApp Web 配置"锁定"却全部放行**（[#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348)）— `mode = business` 下 `allowed_groups` 空列表被解释为"允许所有群"，与个人模式策略混用。状态 `in-progress + accepted`，已有 follow-up RFC [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397)（将空列表视为 permit-none）。
- **[Bug]: WhatsApp Cloud 审批令牌在发送失败/取消时泄露**（[#9417](https://github.com/zeroclaw-labs/zeroclaw/issues/9417)）— `request_approval` 在失败路径仍返回提交给远端 API 的 live token（S2 降级行为，但安全影响重大）。状态 `in-progress`，暂无 fix PR。

### P1 高优
- **[Bug]: CLI 创建的 cron 任务输出被硬编码丢弃**（[#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340)）— `delivery.mode = "none"` 导致任务运行成功但结果无处可去，且无任何提示。状态 `in-progress + accepted`，暂无 fix PR。

### 其他
- **Nextcloud Talk 错误消息 API**（[#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157)）— S3 次要问题，用错 bot 消息端点，`in-progress`。

### 已有修复 PR 的 Bug
- Telegram `mention_only` 群组误触发 → PR [#9634](https://github.com/zeroclaw-labs/zeroclaw/pull/9634)
- OpenAI STT 凭据环境变量被忽略 → PR [#8576](https://github.com/zeroclaw-labs/zeroclaw/pull/8576)（fix #7899）
- 模型提供者失败诊断信息笼统 → PR [#9056](https://github.com/zeroclaw-labs/zeroclaw/pull/9056)（fix #9001）

## 6. 功能请求与路线图信号

- **[Feature]: 向 OpenRouter 发送稳定 `session_id` 以节省 prompt 缓存**（[#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631)，8/1 创建，2 评论）— 用户指出单轮对话数十次 LLM 请求重复发送 system prompt 和工具 schema，成本高。实现简单、收益明确，有较大概率进入 v0.8.4 或后续版本（已带 `security`、`domain:architecture` 标签）。
- **Computer-use 桌面控制**（[#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)）— 对应大型 PR #9091 已就绪，若审查通过可能进入 v0.9.0。
- **A2A 出站客户端（A2ATool）**（[#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106)）— 与 #3566 关联，目标打通跨 agent 主动协作。
- **Gemini Live 实时语音通道**（[#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)）— 模型驱动语音对话，ZeroClaw 负责工具/审批/记忆。
- **Eval 评估系统** — IftekharUddin 的 7 个 PR 若合并，将建立起完整的回归测试与能力跟踪能力，是评估基础设施的重要拼图。

## 7. 用户反馈摘要

- **安全默认值逆向**（#9348）：用户评论中强调"看起来是锁定的配置实际上完全开放"，operator 按文档配置 allowlist 后 agent 回复所有群聊消息，信任被严重破坏。S1 定级获得多人认同。
- **静默失败困扰**（#9340）：cron 任务显示 `ok` 但输出丢失，用户难以察觉，直到抽查才发现。类似"成功但无产出"的模式在 #9348 中也有提及。
- **成本敏感**（#9631）：OpenRouter 用户明确量化了"每轮对话数十次请求"的开销，希望留存 session_id 来复用缓存，说明实际部署中 token 成本是真实痛点。
- **生态接入诉求**（#8603）：多位用户提到 Open WebUI、LobeChat 无法直接使用 ZeroClaw 能力，需要自建适配器，这增加了使用门槛。
- **记忆/会话混淆**（#9048）：社区对"对话历史"和"长期记忆"在实现层面混用表示担忧，认为这会导致未来的数据治理和缩放出现困难。

## 8. 待处理积压

### 长期未决的关键 Issue
| Issue | 创建时间 | 标签 | 备注 |
|---|---|---|---|
| [RFC: Granular sandbox policy](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | 2026-05-28 | p2, needs-maintainer-review | 文件系统/网络沙箱策略分层，已搁置 2 个月 |
| [RFC: Confirmation tier for shell](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | 2026-06-03 | p1, needs-maintainer-review | 高危命令分级审批，社区讨论热但无维护者结论 |
| [Tracker: Capability catalog](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) | 2026-05-06 | p2, in-progress | "Everything is a plugin" 路线图协调，推进缓慢 |
| [RFC: Security UX & isolation](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | 2026-05-27 | p2, needs-maintainer-review | 安全控制可观测性/默认值 |

### 存量 PR 积压警示
- **50 条 PR 全部处于待合并状态**，其中多条已标记 `stale-candidate`（#8546、#8576、#8655、#9056），且有大量 `needs-author-action`，说明不少 PR 在等待作者响应或已被忽略。
- 建议维护者优先处理：p0 PR #9571（WATI 渠道移除）、版本发布 PR #9648、以及两个 WhatsApp S1 安全 Bug 的修复方案。

---

**数据来源**：ZeroClaw GitHub 仓库（zeroclaw-labs/zeroclaw），统计窗口为 2026-08-01 至 2026-08-02。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*