# OpenClaw 生态日报 2026-06-02

> Issues: 469 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-02 00:31 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 | 2026-06-02

---

## 1. 今日速览

OpenClaw 项目今日保持**极高活跃度**，24小时内产生 **469 条 Issues 更新**（292 新开/活跃，177 关闭）和 **500 条 PR 更新**（396 待合并，104 已合并/关闭），版本迭代节奏紧凑，连续发布 3 个 beta 版本。社区焦点集中在 **Codex 运行时稳定性**、**多通道消息投递可靠性**（Telegram/WhatsApp/Slack/Feishu）以及 **SQLite 会话存储迁移** 三大主题。项目整体健康度良好，但待合并 PR 积压较高（396:104 的合并比），提示审阅带宽可能成为瓶颈。

---

## 2. 版本发布

### v2026.6.1-beta.2 | [Release 页面](https://github.com/openclaw/openclaw/releases/tag/v2026.6.1-beta.2)
### v2026.6.1-beta.1 | [Release 页面](https://github.com/openclaw/openclaw/releases/tag/v2026.6.1-beta.1)
### v2026.5.31-beta.4 | [Release 页面](https://github.com/openclaw/openclaw/releases/tag/v2026.5.31-beta.4)

| 版本 | 核心更新 | 状态 |
|:---|:---|:---|
| **v2026.6.1-beta.2** | Agent 与 CLI 运行时恢复能力增强：中断工具调用、过期会话绑定、compaction 交接、媒体投递重试等场景更干净地恢复 (#88129, #88136, #88141, #88162, #88182)；Telegram/WhatsApp/iMessage/Slack 通道及移动端投递稳定性提升 | **最新** |
| v2026.6.1-beta.1 | 同上，通道覆盖 Telegram/WhatsApp/iMessage/Slack | 已迭代 |
| v2026.5.31-beta.4 | 同上，通道覆盖 Telegram/WhatsApp/iM（iMessage 截断） | 已迭代 |

**迁移注意事项**：三个版本 Highlights 高度重复，表明这是**同一批修复的渐进式发布**。从 beta.4 到 beta.2 的演进显示 iMessage 支持从截断到完整。使用 2026.5.27 版本的用户建议尽快升级，该版本存在多个已确认的 Codex 运行时回归问题。

---

## 3. 项目进展

### 已关闭/合并的关键 Issues（今日推进）

| Issue | 类型 | 说明 | 链接 |
|:---|:---|:---|:---|
| **#80171** Codex-vs-Pi runtime parity QA harness | 基础设施 | Codex 作为 OpenAI agent turns 默认运行时的 QA 框架 RFC 完成，关闭 stale | [→](https://github.com/openclaw/openclaw/issues/80171) |
| **#84038** `doctor --fix` 静默迁移配置破坏 PI+OAuth | **P1 数据丢失** | `doctor --fix` 将 `openai-codex/` 配置错误迁移至 `openai/`，导致 PI+OAuth 运行时失效并引发 3-4x token 膨胀 | [→](https://github.com/openclaw/openclaw/issues/84038) |
| **#86820** Codex OAuth compaction 回退直接 OpenAI API | **P1 回归** | 无 `OPENAI_API_KEY` 时 Codex OAuth compaction 失败，已修复 | [→](https://github.com/openclaw/openclaw/issues/86820) |
| **#87177** QQBot 消息重复 | **P1 消息丢失** | 心跳会话消息泄漏 + 多因素导致的重复消息问题 | [→](https://github.com/openclaw/openclaw/issues/87177) |
| **#88102** Codex runtime 拒绝 `openai/gpt-5.5` | **P1 回归** | 2026.5.27 升级后路由失效，`codex/gpt-5.5` 绕过方案导致 Telegram `/status` 不可用 | [→](https://github.com/openclaw/openclaw/issues/88102) |
| **#87536** Native hook relay bridge 无法启动 | **P1 功能丧失** | 2026.5.26 所有 native/local 工具调用返回 "Native hook relay unavailable" | [→](https://github.com/openclaw/openclaw/issues/87536) |
| **#84820** 未关闭 FileHandle 导致 gateway 崩溃 | **P1 崩溃循环** | Node ≥24 下会话 JSONL 锁文件句柄泄漏引发 `ERR_INVALID_STATE` | [→](https://github.com/openclaw/openclaw/issues/84820) |
| **#87641** `opencode-go/kimi-k2.6` 多轮任务被拒 | **P2** | 多轮工具调用后 400 "format" 错误并回退 fallback | [→](https://github.com/openclaw/openclaw/issues/87641) |
| **#88499** `openai-responses` 404 on `previous_response_id` | **P2** | `store=false` 时后续轮次引用失效 | [→](https://github.com/openclaw/openclaw/issues/88499) |

**整体推进评估**：今日关闭的 177 个 Issues 中，**P1 级别核心回归问题占主导**，集中在 Codex 运行时切换阵痛期（2026.5.27 版本引入的多项问题）。项目正处于 **Pi 运行时向 Codex 运行时迁移的关键收尾阶段**，稳定性修复优先于新功能。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 链接 |
|:---|:---|:---:|:---:|:---|:---|
| 1 | **#80171** Codex-vs-Pi runtime parity QA harness | 15 | 1 | **运行时迁移的可验证性**：社区需要系统化的 parity 测试框架确保 Codex 替换 Pi 后行为一致，而非依赖生产环境试错 | [→](https://github.com/openclaw/openclaw/issues/80171) |
| 2 | **#80380** 升级至 gemini-3.1-flash-lite GA | 14 | 4 | **模型版本跟进**：Google 已发布 GA 版本，要求替换 preview 版本以避免未来弃用风险 | [→](https://github.com/openclaw/openclaw/issues/80380) |
| 3 | **#88838** SQLite 会话/转录迁移追踪 | 12 | 1 | **架构演进透明度**：核心状态存储从文件系统向 SQLite 迁移，社区要求分阶段、可审查的 PR 序列，避免"大爆炸式"重写 | [→](https://github.com/openclaw/openclaw/issues/88838) |
| 4 | **#84038** `doctor --fix` 配置迁移破坏 PI+OAuth | 12 | 3 | **工具安全性**：自动修复工具不应破坏用户显式配置，尤其是涉及认证和成本敏感的运行时选择 | [→](https://github.com/openclaw/openclaw/issues/84038) |
| 5 | **#86820** Codex OAuth compaction 回退失败 | 12 | 6 | **认证链可靠性**：OAuth 刷新失败时的降级路径必须保持功能完整，不能静默回退到需要 API key 的路径 | [→](https://github.com/openclaw/openclaw/issues/86820) |
| 6 | **#87177** QQBot 消息重复 | 11 | 1 | **通道特定稳定性**：QQ 平台心跳机制与 OpenClaw 会话模型不兼容，需要平台适配层重构 | [→](https://github.com/openclaw/openclaw/issues/87177) |
| 7 | **#78308** MCP 工具调用的通道审批 | 11 | 1 | **安全治理**：MCP 服务器的外部状态变更操作（发邮件、写保险库）需要与 shell-exec 同等的人工审批流程 | [→](https://github.com/openclaw/openclaw/issues/78308) |
| 8 | **#88102** Codex runtime 拒绝 `openai/gpt-5.5` | 11 | 1 | **升级兼容性**：补丁版本升级不应破坏现有模型路由配置，需要更严格的回归测试 | [→](https://github.com/openclaw/openclaw/issues/88102) |

**诉求分析**：社区核心焦虑集中在 **"运行时迁移的稳定性承诺"** 与 **"自动工具的安全性边界"**。高 👍 的 #86820（6👍）和 #80380（4👍）显示用户对**认证可靠性**和**模型版本时效性**的强需求。

---

## 5. Bug 与稳定性

### 按严重程度排列的活跃 Bug（未关闭）

| 优先级 | Issue | 描述 | 影响 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| **P1** | **#86519** | Telegram 重复回复 2-10x（2026.5.20 升级后，5.22 部分缓解未根治） | 消息丢失/用户体验 | 待确认 | [→](https://github.com/openclaw/openclaw/issues/86519) |
| **P1** | **#88312** | Codex app-server turn-completion stall 回归（#84076/#85107 修复后复发） | 会话阻塞 | 待确认 | [→](https://github.com/openclaw/openclaw/issues/88312) |
| **P1** | **#87744** | Codex-backed Telegram turns 超时等待 `turn/completed` | 消息丢失/超时 | 待确认 | [→](https://github.com/openclaw/openclaw/issues/87744) |
| **P1** | **#88039** | 会话选定模型错误包含在 fallback 列表中 | 冗余回退/成本 | 待确认 | [→](https://github.com/openclaw/openclaw/issues/88039) |
| **P1** | **#87938** | Feishu DM 会话网关重启后重建——重复键 + 维护修剪 | 会话状态混乱 | 待确认 | [→](https://github.com/openclaw/openclaw/issues/87938) |
| **P1** | **#86215** | Codex OAuth 刷新失败可阻塞 agent 数小时无告警 | 可用性/运维盲区 | 待确认 | [→](https://github.com/openclaw/openclaw/issues/86215) |
| **P1** | **#77717** | Feishu 机器人身份恢复竞态导致永久断连 | 通道不可用 | 待确认 | [→](https://github.com/openclaw/openclaw/issues/77717) |
| **P1** | **#89139** | webchat 每消息新建 agent run，破坏 prompt cache（93%→29%） | 性能/成本剧增 | 待确认 | [→](https://github.com/openclaw/openclaw/issues/89139) |
| **P1** | **#88369** | 隔离 cron 仍可在专用 cron agent 上自冲突 | 定时任务失败 | 待确认 | [→](https://github.com/openclaw/openclaw/issues/88369) |
| **P2** | **#88838** | 核心会话/转录 SQLite 迁移追踪 | 架构债务 | **#89261, #89262** | [→](https://github.com/openclaw/openclaw/issues/88838) |

### 已有 Fix PR 的 Bug（待合并验证）

| PR | 修复目标 | 状态 | 链接 |
|:---|:---|:---|:---|
| **#89039** | 防止 `EmbeddedAttemptSessionTakeoverError` 导致静默消息丢失 | 📣 needs proof | [→](https://github.com/openclaw/openclaw/pull/89039) |
| **#88992** | `message_tool_only` 模式下恢复 stranded replies | 📣 needs proof | [→](https://github.com/openclaw/openclaw/pull/88992) |
| **#89045** | 可见入站 turn 恢复终端会话状态 | 📣 needs proof | [→](https://github.com/openclaw/openclaw/pull/89045) |
| **#89038** | qqbot 重连时跳过仅设置通道插件并排空待处理投递 | 📣 needs proof | [→](https://github.com/openclaw/openclaw/pull/89038) |
| **#88968** | 防止 memory flush 失败中止用户回复 | 📣 needs proof | [→](https://github.com/openclaw/openclaw/pull/88968) |
| **#89040** | 避免 `embedded_run` bootstrap-context 事件循环阻塞（14-22s） | 📣 needs proof | [→](https://github.com/openclaw/openclaw/pull/89040) |

**稳定性评估**：2026.5.27 版本引入的 **Codex 运行时回归问题集群** 仍是最大风险点。今日发布的 v2026.6.1-beta.2 声称修复了"中断工具调用、过期会话绑定、compaction 交接"等场景，但 #88312 和 #87744 显示 **turn-completion 类问题尚未完全根治**。建议用户暂缓生产环境使用 2026.5.27，等待 2026.6.1 正式版。

---

## 6. 功能请求与路线图信号

| Issue/PR | 主题 | 纳入可能性 | 信号强度 | 链接 |
|:---|:---|:---|:---|:---|
| **#80380** gemini-3.1-flash-lite GA 升级 | 模型版本跟进 | **高** | 🔥🔥🔥 已有明确 PR 需求，Google 官方弃用时间表压力 | [→](https://github.com/openclaw/openclaw/issues/80380) |
| **#78308** MCP 工具调用的通道审批（consent envelope） | 安全治理 | **中-高** | 🔥🔥 架构设计完整，与现有 shell-exec 审批管道对齐，需产品决策 | [→](https://github.com/openclaw/openclaw/issues/78308) |
| **#35203** 多智能体协作增强（Capability Profiling + Shared Blackboard + Layered Memory + Token Cost Governance） | 核心架构 | **中** | 🔥🔥 RFC 级别，问题定义清晰，但涉及面广，可能分阶段实现 | [→](https://github.com/openclaw/openclaw/issues/35203) |
| **#79077** Telegram bot-to-bot 和 guest-bot 模式支持 | 通道功能 | **中** | 🔥🔥 Telegram 官方 2026-05-07 发布新平台能力，社区需求明确（7👍） | [→](https://github.com/openclaw/openclaw/issues/79077) |
| **#79458** slash command 描述的 i18n 字段 | 本地化 | **中** | 🔥 中国用户需求明确，实现面小，但需产品决策 | [→](https://github.com/openclaw/openclaw/issues/79458) |
| **#87072** Telegram 交错进度 lane（opt-in） | 用户体验 | **高** | 🔥🔥🔥 PR 已开，XL 规模，有 proof，待维护者审阅 | [→](https://github.com/openclaw/openclaw/pull/87072) |
| **#89261/#89262** 公共转录身份 API + 作用域转录目标写入器 | 架构债务 | **高** | 🔥🔥🔥 SQLite 迁移的前置基础设施，jalehman 主导，已 ready for review | [→](https://github.com/openclaw/openclaw/pull/89261) |

**下一版本（2026.6.x）预测**：**稳定性修复绝对优先**，功能侧最可能纳入的是 **gemini-3.1-flash-lite GA 支持** 和 **Telegram 交错进度 lane**。SQLite 会话迁移将是 2026.7.x 的核心主题。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 原声引用 | 来源 |
|:---|:---|:---|
| **升级即故障** | "After upgrading a live VPS from OpenClaw 2026.5.26 to 2026.5.27, the previously working `openai/gpt-5.5` + Codex runtime route began failing" | #88102 |
| **自动工具的破坏性** | "`doctor --fix` silently migrates intentional openai-codex/ config to openai/, breaking PI+OAuth runtime and causing 3-4x token inflation" | #84038 |
| **消息重复噩梦** | "the agent sends duplicate identical replies on Telegram (2-10x per user message)" | #86519 |
| **调试成本高昂** | "silent failures on legacy/invalid plugin contracts cost hours of debugging" | #78301 |
| **性能断崖** | "Each message incurs a 10-17 second initialization overhead before the model starts thinking" | #80607 |
| **Prompt cache 失效** | "Cache hit rate plummets from 93% (Feishu, stable) to 29% (webchat)" | #89139 |

### 满意点

- **多通道覆盖**：Telegram/WhatsApp/iMessage/Slack/Feishu/QQ/Discord 的广泛支持是核心差异化价值
- **Codex 运行时前景**：社区认可向 Codex 迁移的长期方向，但要求更平滑的过渡

### 不满意点

- **版本质量波动**：2026.5.20-5.27 系列引入的回归问题密度过高
- **错误信息不透明**："Provider returned error" (reason=format)、opaque 400 等错误阻碍自助排查
- **文档/工具链滞后**：plugin SDK 的静态工具描述符验证缺失、`doctor` 工具的破坏性自动修复

---

## 8. 待处理积压

### 长期未响应的重要 Issue（stale 但高价值）

| Issue | 创建时间 | 最后更新 | 天数 | 风险 | 链接 |
|:---|:---|:---|:---:|:---|:---|
| **#35203** 多智能体协作增强 RFC | 2026-03-05 | 2026-06-01 | **88天** | 架构债务，竞品可能抢先实现共享黑板/能力画像 | [→](https://github.com/openclaw/openclaw/issues/35203) |
| **#428

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析 | 2026-06-02

---

## 1. 生态全景

个人 AI 助手开源生态正处于**"从功能竞赛转向可靠性攻坚"的关键转折期**。头部项目（OpenClaw、IronClaw、ZeroClaw）日均 PR 吞吐量达 35-50 条，但社区核心焦虑已从"能否连接更多渠道"转向"运行时是否稳定不死"——Codex/Pi 运行时迁移阵痛、定时任务 session 隔离、MCP 进程爆炸等生产级问题成为共性瓶颈。同时，**"企业就绪"信号显著增强**：Azure AD、OAuth 2.0/SSO、多租户隔离、审计合规等需求从边缘进入主路线，预示 C 端工具向 B 端平台化跃迁的集体试探。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 版本发布 | 健康度评估 | 关键特征 |
|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 469 (292活跃/177关闭) | 500 (396待合/104已合) | **3个beta** (v2026.6.1-beta.2 等) | ⚠️ **高活跃·高积压** — 合并比 1:3.8，审阅瓶颈显著 | 渠道覆盖最广(8+ IM)，Codex运行时迁移阵痛 |
| **NanoBot** | 28 (关闭率89%) | 30 (合并率57%) | **v0.2.1** "The Agent Workbench" | ✅ **高活跃·健康** — 维护响应快，关闭率高 | WebUI工作台化转型，本地Whisper ASR |
| **Hermes Agent** | 50 (41:9) | 50 (25:25) | 无 | ✅ **高活跃·平衡** — 合并比 1:1，质量基础设施增强 | 网关可靠性优先，搜索去中心化诉求强烈 |
| **PicoClaw** | 7 (0关闭) | 11 (5合/6待) | nightly v0.2.9 | ⚠️ **中活跃·消化滞后** — 问题关闭率为0 | 嵌入式/边缘场景，Agent协作架构前瞻 |
| **NanoClaw** | 3 (2新/1关) | 5 (4待/1关) | 无 | ✅ **中活跃·响应极快** — 高危Bug 24h内出PR | Runner韧性建设，A2A路由修复 |
| **NullClaw** | 0 | 1 (待合) | 无 | 🔴 **极低活跃·休眠监测** | Telegram体验边际修复，长期可持续性存疑 |
| **IronClaw** | 12 (11新/1关) | 47 (14待/33合) | 无 | ⚠️ **极高活跃·质量门禁风险** — E2E连续6天失败 | Reborn架构冲刺，计费/企业OAuth/定时触发 |
| **LobsterAI** | 1 (新开) | 12 (1待/11合) | **2026.6.1** | ✅ **高交付·运营风险** — 技术迭代快，付费争议未响应 | Kit生态+Cowork分叉，网易有道商业化产品 |
| **Moltis** | 0 | 4 (1待/3合) | 无 | ✅ **中活跃·维护者驱动** — 零社区互动，代码质量高 | 协议兼容性深度，NEAR AI Cloud TEE接入 |
| **CoPaw** | 50 (32新/18关) | 35 (26待/9合) | **v1.1.10 + beta.2** | ⚠️ **高活跃·Windows债务重** — 桌面端Bug集中 | 300+智能体MCP治理，AgentScope 2.0重构 |
| **ZeptoClaw** | 1 (新开) | 18 (1待/17合) | 无 | ✅ **高维护·低社区** — 17/18为dependabot自动化 | 二进制体积极致控制(7MB红线)，Rust安全优先 |
| **ZeroClaw** | 36 (28新/8关) | 37 (24待/13合) | 无 | ⚠️ **高活跃·XL阻塞** — PR #6848阻塞v0.8.0-beta-2 | 渠道精简策略，技能Token成本焦虑突出 |
| **TinyClaw** | 0 | 0 | 无 | 🔴 **零活跃** | 数据缺失，疑似停滞 |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **规模优势** | 469 Issues/500 PR 日吞吐量 = **2-10x于同类**，渠道覆盖 8+ IM（Telegram/WhatsApp/iMessage/Slack/Feishu/QQ/Discord/webchat） | NanoBot 6渠道、Hermes 5渠道、ZeroClaw 精简至4个默认渠道 |
| **技术路线** | **"全栈统一运行时"** — 强推 Codex 替代 Pi，自研 doctor 配置迁移、compaction 会话压缩、SQLite 存储迁移 | NanoBot 事件总线解耦、IronClaw Reborn 云原生重构、ZeroClaw WASI 插件化 — OpenClaw 偏向**垂直整合而非模块化** |
| **社区结构** | **"核心团队+高频贡献者"** — jalehman 主导架构，但 396:104 合并比显示**审阅带宽瓶颈**；15-30评论的热点Issue深度高 | NanoBot 17新贡献者/版本、CoPaw 多外部PR并行、ZeptoClaw 几乎纯维护者驱动 |
| **风险特征** | **"大版本迁移创伤"** — 2026.5.27 引入的 Codex 回归问题集群（#88102/#86820/#84038 等 P1 级）密度高于同类 | NanoClaw 24h修复Runner死循环、Hermes 今日合并Discord/WeCom可靠性修复 — OpenClaw 修复周期相对长（beta渐进发布） |
| **差异化壁垒** | **多通道消息投递可靠性**的极端场景覆盖（iMessage截断→完整、QQ心跳泄漏修复）+ **原生移动端支持** | 多数项目聚焦单一平台深度（如NanoBot WebUI、LobsterAI桌面端） |

> **核心判断**：OpenClaw 是生态中**"最像基础设施的平台"**——功能广度无人匹敌，但正经历从"渠道路由器"向"智能体运行时"的艰难身份转换，质量波动是转型代价。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与紧迫度 |
|:---|:---|:---|
| **运行时稳定性与自愈** | OpenClaw, NanoClaw, IronClaw, ZeroClaw, CoPaw | OpenClaw Codex compaction 交接失败；NanoClaw "Poisoned Resume"死循环；IronClaw checkpoint 一致性；ZeroClaw 流式错误回退；CoPaw session 隔离崩溃 → **共识：Agent 不能因单点故障僵死，需超时/熔断/自动恢复** |
| **定时任务/Cron 可靠性** | OpenClaw, NanoBot, Hermes, CoPaw, PicoClaw | NanoBot 心跳静默执行(#3126)、Hermes jobs.json 崩溃(#36867)、CoPaw 任务被用户消息中断(#4653)、PicoClaw cron get/update(#2977) → **从"能触发"到"可观测、可隔离、不吵闹"** |
| **MCP/工具治理** | NanoBot, CoPaw, Hermes, ZeroClaw | CoPaw 300+智能体 MCP 进程爆炸→SharedMCPPool(#4849)；NanoBot MCP 断连重试(#1536)；Hermes MCP 审批流(#78308)；ZeroClaw 技能Token膨胀(#5146) → **工具生态从"开放接入"转向"资源隔离+安全审批"** |
| **企业认证与多租户** | IronClaw, NanoBot, ZeroClaw, CoPaw | IronClaw GSuite/Notion OAuth(#4297/#4300)；NanoBot Azure AAD(#4126)；ZeroClaw Linq多租户(#7041)；CoPaw 智能体级账户隔离(#4859) → **SaaS化前提条件集中涌现** |
| **本地/隐私优先部署** | NanoBot, Hermes, Moltis, ZeptoClaw | NanoBot 本地Whisper(#3723)；Hermes Searxng自托管(30👍)；Moltis NEAR AI TEE(#1031)；ZeptoClaw 二进制极致精简 → **对抗云依赖与数据出境风险** |
| **Token 成本优化** | OpenClaw, ZeroClaw, CoPaw, NanoBot | OpenClaw prompt cache 93%→29%(#89139)；ZeroClaw 技能编译降Token(#5146，64天积压)；CoPaw 上下文压缩(#4872)；NanoBot 缓存未命中成本(#4142) → **从"功能可用"到"经济可持续"** |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 全渠道消息路由 + 统一智能体运行时 | **技术极客/小团队** — 需同时覆盖多IM平台的自动化需求 | 单体式，强运行时（Codex/Pi），自研配置迁移工具 |
| **NanoBot** | WebUI 工作台化 + 本地优先体验 | **个人开发者/隐私敏感用户** — 情感陪伴+任务管理混合场景 | 事件总线解耦，v0.2.1 明确"Agent Workbench"产品定位 |
| **Hermes Agent** | 网关可靠性 + 搜索去中心化 + 自我改进哲学 | **自托管爱好者/去中心化信仰者** — 拒绝商业API锁定 | 插件化搜索后端，Honcho外部记忆，Kanban多智能体编排 |
| **IronClaw** | 云原生 Reborn 架构 + 企业SaaS化 | **企业IT/多租户平台运营者** — 需计费、SSO、审计 | 完全重构（Reborn分支），事件流持久化，TriggerPoller定时基础设施 |
| **LobsterAI** | 专家套件市场 + 非线性对话管理 | **知识工作者/企业团队** — 可复用的专业工作流 | 商业化产品（网易有道），Kit生态+Cowork分叉，闭源插件市场 |
| **CoPaw** | 超大规模智能体编排 + IDE级体验 | **企业自动化团队/AI IDE用户** — 300+智能体并发，Trae式交互 | AgentScope底层，SharedMCPPool资源治理，Windows桌面端重投入 |
| **ZeroClaw** | 轻量可嵌入 + 技能成本极致优化 | **系统集成商/边缘部署** — 控制二进制体积与Token账单 | Rust核心，WASI插件化，7MB体积红线，渠道精简策略 |
| **ZeptoClaw** | 安全合规 + 极致精简 | **金融/医疗等监管敏感行业** — RUSTSEC零容忍，审计友好 | Rust全栈，dependabot自动化，cargo-deny安全门禁 |
| **Moltis** | 协议兼容性 + Web3/TEE生态 | **多链开发者/隐私计算场景** — NEAR AI等去中心化算力 | OpenAI兼容层抽象，显式能力策略，协议跟进速度优先 |
| **PicoClaw** | 嵌入式边缘 + 多Agent协作 | **IoT/边缘设备开发者** — RISC-V等平台，硬件资源受限 | nightly构建，Agent协作总线(mailbox)前瞻设计 |
| **NanoClaw** | Runner韧性 + 容器化部署 | **DevOps/SRE** — 需要自愈、可观测的生产级Agent基础设施 | A2A协议，rootless Podman，Provider故障恢复全链路 |

---

## 6. 社区热度与成熟度分层

```
【快速迭代期】功能扩张为主，版本密集，新贡献者涌入
├── NanoBot (v0.2.1, 17新贡献者, WebUI工作台化)
├── LobsterAI (月度版本, Kit生态闭环)
└── IronClaw (Reborn冲刺, 47PR/日, 但E2E失败6天)

【质量巩固期】稳定性修复优先，回归问题集群治理，审阅瓶颈
├── OpenClaw (396待合PR, Codex迁移收尾, beta渐进发布)
├── ZeroClaw (v0.8阻塞, #6074回滚后残余清理, 技能Token债务)
└── CoPaw (Windows桌面债, AgentScope 2.0重构, 300+智能体治理)

【生产就绪期】低缺陷率，自动化维护，响应快但扩张保守
├── NanoClaw (24h高危Bug响应, Runner韧性, 低吞吐量高置信)
├── Hermes (1:1合并比, 网关可靠性优先, 搜索后端扩展)
└── ZeptoClaw (dependabot主导, 安全零容忍, 体积红线)

【架构前瞻/休眠期】长期方向明确但短期活跃度不足
├── PicoClaw (Agent协作总线#2937, 文档滞后, stale PR多)
├── Moltis (零社区互动, 协议跟进及时, NEAR AI生态待激活)
└── NullClaw (近乎休眠, 单一PR维持, 可持续性存疑)

【停滞观测】
└── TinyClaw (零活动)
```

---

## 7. 值得关注的趋势信号

| 趋势信号 | 证据来源 | 对开发者的参考价值 |
|:---|:---|:---|
| **"智能体运行时"正在替代"聊天机器人框架"成为核心品类** | OpenClaw Codex迁移、IronClaw Reborn、NanoClaw Runner韧性、ZeroClaw v0.8 Schema迁移 | 选型时评估**session管理、compaction、checkpoint、故障恢复**而非仅看渠道数量 |
| **Token经济学从"隐性成本"变为"显性架构约束"** | ZeroClaw #5146(64天积压)、OpenClaw #89139(cache暴跌)、NanoBot #4142 | 设计阶段即纳入**prompt压缩、缓存策略、技能预编译**，避免上线后账单失控 |
| **"企业就绪"成为开源项目分水岭** | IronClaw计费闭环、NanoBot Azure AD、CoPaw MCP共享池、Hermes多角色路由 | C端项目若计划B端转化，需提前布局**OAuth/SSO、审计日志、资源配额、多租户隔离** |
| **去中心化/本地优先从边缘进入主路线** | Hermes Searxng(30👍)、NanoBot本地Whisper、Moltis NEAR AI TEE、ZeptoClaw体积控制 | 云API依赖存在**合规风险与成本风险**，混合架构（本地模型+云端Fallback）成为稳健选择 |
| **MCP生态从"开放繁荣"转向"治理刚需"** | CoPaw 300+进程爆炸→SharedMCPPool、NanoBot断连重试、Hermes审批流 | 接入MCP服务器时需设计**进程生命周期管理、超时熔断、操作审批、资源隔离**，而非简单调用 |
| **Windows桌面端成为新的工程债务重灾区** | CoPaw 进程残留/弹窗/目录锁、OpenClaw无原生桌面 | 跨平台项目中**Windows进程管理、UAC弹窗、升级残留**需专项投入，不能依赖Linux经验移植 |
| **"评估基础设施"成为质量飞轮的启动器** | ZeroClaw #7065 `zeroclaw eval`、OpenClaw #80171 Codex-vs-Pi parity harness | 生产部署前建立**确定性评估框架**（非仅人工测试），是Agent从demo到可靠服务的关键跃迁 |

---

> **分析师结语**：2026年6月的生态图景显示，个人AI助手开源项目正集体穿越"功能丰富但不可靠"的峡谷，向"生产级智能体基础设施"攀登。OpenClaw的规模优势与转型阵痛、NanoBot的产品化锐度、IronClaw的企业化豪赌、ZeroClaw的成本极致主义，代表了四条可验证的路径。对技术决策者而言，**匹配自身场景的可靠性需求与Token预算约束，比追逐功能清单更重要。**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-06-02

## 1. 今日速览

NanoBot 今日展现**极高活跃度**：24小时内 Issues 处理 28 条（关闭率 89%）、PR 处理 30 条（合并/关闭率 57%），并发布 **v0.2.1 重要版本**。社区聚焦三大方向：**WebUI 成为核心工作台**（v0.2.1 主题）、**心跳/定时任务系统稳定性**（关闭 4 个相关 Issue）、**渠道生态扩展**（QQ/Napcat、Signal、WebSocket 等）。项目健康度优秀，维护响应迅速，但需关注内存并发安全（#4147）和会话归档语义（#4136）等深层架构问题。

---

## 2. 版本发布

### [v0.2.1](https://github.com/HKUDS/nanobot/releases/tag/v0.2.1) — "The Agent Workbench"

| 属性 | 详情 |
|:---|:---|
| **合并 PRs** | 84 个 |
| **新贡献者** | 17 位 |
| **核心主题** | WebUI 从"聊天界面"升级为"实际工作空间" |

**关键更新：**
- **实时文件编辑可视化**：文件修改以活动流形式呈现，工具调用轨迹渲染更透明
- **聊天体验优化**：更流畅、更快速、更可信赖的交互表面
- **工作台化转型**：WebUI 成为 Agent 实际执行任务的核心场所，而非仅消息收发

**迁移提示：** 从 v0.1.x 升级需关注 WebUI 配置变更，建议查看 `webui` 相关配置项是否需手动启用新特性。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（17 条）

| PR | 作者 | 进展说明 |
|:---|:---|:---|
| [#3509](https://github.com/HKUDS/nanobot/pull/3509) → 由 [#4146](https://github.com/HKUDS/nanobot/pull/4146) 接替 | LZDQ / chengyongru | **QQ/Napcat 渠道落地**：OneBot v11 Forward WebSocket 支持私聊/群聊，含图片收发、群回复策略、入群欢迎。原 PR 关闭，由维护者重构后重新提交 |
| [#3723](https://github.com/HKUDS/nanobot/pull/3723) | dilidin2 | **本地 Whisper 语音转录**：基于 faster-whisper 的纯本地 ASR，零 API 密钥、零网络依赖 |
| [#4016](https://github.com/HKUDS/nanobot/pull/4016) | lmzopq | **钉钉群聊用户隔离**：`group_user_isolation` 配置解决多用户上下文串扰问题 |
| [#4135](https://github.com/HKUDS/nanobot/pull/4135) | chengyongru | **WebUI 运行时状态重构**：基于事件总线的状态管理，解耦 AgentLoop 与 WebUI 硬编码 |
| [#4143](https://github.com/HKUDS/nanobot/pull/4143) | hamb1y | **会话保留语义清晰化**：`RetentionResult` 具名返回替代元组推断，修复归档边界 bug |
| [#3126](https://github.com/HKUDS/nanobot/pull/3126) | yeyitech | **Cron 静默执行**：`deliver: false` 时彻底抑制中间思考消息，解决定时任务噪音问题 |
| [#2482](https://github.com/HKUDS/nanobot/pull/2482) / [#2435](https://github.com/HKUDS/nanobot/pull/2435) / [#2415](https://github.com/HKUDS/nanobot/pull/2415) | yonghuname / c7ozkan | **心跳 LLM 调用优化**：HEARTBEAT.md 无活跃任务时跳过 LLM 调用，节省 Token |

**整体推进评估：** 渠道生态（QQ+钉钉+Signal+WebSocket）趋于完整，定时任务系统（心跳+Cron）从"能用"走向"好用"，WebUI 架构完成解耦重构——为 v0.3 的插件化/多模态奠定基础。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 |
|:---|:---|:---|:---|
| 🔥 | [#2880](https://github.com/HKUDS/nanobot/issues/2880) 无论发什么消息都回复报错 | 18 条 | **稳定性焦虑**：Agent 模式正常但主模式崩溃，卸载重装无效，用户怀疑状态污染或配置残留 |
| 2 | [#1932](https://github.com/HKUDS/nanobot/issues/1932) 技能不支持禁用只能删除 | 8 条 | **配置灵活性**：用户希望像插件管理器一样开关技能，而非破坏性删除 |
| 3 | [#101](https://github.com/HKUDS/nanobot/issues/101) 免费 API 替代 OpenRouter | 6 条 | **成本敏感**：个人用户寻求 Grok/Google 免费层方案，文档示例不足 |

### 高反应 Issues（👍 数）

| Issue | 👍 | 信号 |
|:---|:---|:---|
| [#49](https://github.com/HKUDS/nanobot/issues/49) Signal 渠道支持 | 6 | 隐私优先用户群体的强需求 |
| [#1536](https://github.com/HKUDS/nanobot/issues/1536) MCP 断连重试 | 3 | 生产环境稳定性刚需 |
| [#1862](https://github.com/HKUDS/nanobot/issues/1862) restrictToWorkspace 媒体路径 | 3 | 企业/安全部署场景 |

**诉求分析：** 社区正从"功能有无"转向"体验好坏"——配置灵活性、成本可控性、生产稳定性成为新焦点。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 说明 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#4133](https://github.com/HKUDS/nanobot/issues/4133) 工具调用后响应静默丢失 | **已关闭** | Claude/DeepSeek V4 Flash 工具调用成功后，最终文本响应未送达 Telegram，用户仅见工具结果 | 疑似由 #4080 后续修复 |
| 🔴 **高** | [#4147](https://github.com/HKUDS/nanobot/pull/4147) 并发写入导致重复游标 | **待合并** | `append_history()` 无锁分配 cursor，并发场景产生重复历史记录 | [#4147](https://github.com/HKUDS/nanobot/pull/4147)（今日提交）|
| 🟡 **中** | [#4128](https://github.com/HKUDS/nanobot/issues/4128) `retain_recent_legal_suffix` 用户消息重复归档 | **已关闭** | else 分支 `cut` 值计算错误，用户消息同时进入 archive 与 kept | [#4143](https://github.com/HKUDS/nanobot/pull/4143) |
| 🟡 **中** | [#3633](https://github.com/HKUDS/nanobot/issues/3633) GPT Codex "Duplicate item found with id" | **已关闭** | GPT-5.5 模型特定错误，导致会话无法恢复 | 未标注具体 PR |
| 🟡 **中** | [#4069](https://github.com/HKUDS/nanobot/issues/4069) Dream cron 无条件注册 | **已关闭** | Dream 系统任务缺少 `enabled` 开关，与心跳机制不一致 | 未标注具体 PR |
| 🟢 **低** | [#2071](https://github.com/HKUDS/nanobot/issues/2071) DUCKDUCKGO 搜索默认不生效 | **已关闭** | 未配置参数时工具未自动加载 | 用户自行解决 |
| 🟢 **低** | [#1350](https://github.com/HKUDS/nanobot/issues/1350) gateway 模式 progress/tool_hints 配置失效 | **已关闭** | 配置项在网关模式未生效 | 已修复 |

**风险评估：** [#4147](https://github.com/HKUDS/nanobot/pull/4147) 并发安全问题需优先合并——直接影响多用户/多线程部署的数据一致性。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 成熟度 | 纳入可能性 |
|:---|:---|:---|:---|
| **自定义图片生成 Provider** | [#4132](https://github.com/HKUDS/nanobot/issues/4132) | 🟡 有明确配置提案 | **高** — 架构上已有 `tools.imageGeneration` 配置位 |
| **火山引擎搜索 Provider** | [#4141](https://github.com/HKUDS/nanobot/pull/4141) | 🟢 PR 已提交 | **极高** — 今日待合并，补全中国厂商生态 |
| **Azure AAD 身份认证** | [#4126](https://github.com/HKUDS/nanobot/pull/4126) | 🟡 PR 待审 | **高** — 企业 Azure 部署刚需 |
| **文件系统工具开关** | [#4138](https://github.com/HKUDS/nanobot/pull/4138) | 🟢 PR 已提交 | **极高** — 与现有 `tools.exec.enable`/`tools.web.enable` 模式一致 |
| **WebUI 语音录制+本地 ASR** | [#4122](https://github.com/HKUDS/nanobot/pull/4122) | 🟡 PR 待审（标记 invalid）| **中** — 需与 #3723 本地 Whisper 方案整合 |
| **HF Spaces/ModelScope 云部署** | [#4139](https://github.com/HKUDS/nanobot/pull/4139) | 🟡 PR 待审 | **中高** — 851 行零依赖抽象，降低云部署门槛 |
| **Hooks 生命周期机制** | [#2182](https://github.com/HKUDS/nanobot/issues/2182) | 🔴 仅需求描述 | **中** — 对标 Claude Code，需架构设计 |
| **缓存未命中 Token 成本优化** | [#4142](https://github.com/HKUDS/nanobot/issues/4142) | 🔴 讨论阶段 | **中** — DeepSeek V4 带来的新命题，需社区共识 |

**路线图信号：** v0.3 可能聚焦 **"企业就绪"**（Azure AD、云部署、安全隔离）与 **"多模态交互"**（语音、图片生成扩展）。

---

## 7. 用户反馈摘要

### 😤 痛点
> *"用 nanobot agent 的话就能正常回复，卸载重装清空都无效"* — [#2880](https://github.com/HKUDS/nanobot/issues/2880) breeze303
- **状态污染/配置残留** 是用户最大恐惧，缺乏彻底重置机制

> *"当前在各类 IM 上没有指令能直接获取 bot 当前的状态"* — [#2131](https://github.com/HKUDS/nanobot/issues/2131) PaomianPomix
- **黑盒运行焦虑**：Agent 执行任务时用户无法感知进度，强行 `/stop` 又怕损坏任务

> *"Cron 任务发送多条中间思考消息，非常吵闹"* — [#3064](https://github.com/HKUDS/nanobot/issues/3064) kronk307
- **定时任务噪音** 已解决（#3126），但反映用户对"静默可靠"的强需求

### 😊 满意
> *"The agent got a real workbench"* — v0.2.1 发布说明
- WebUI 工作台化获得认可，实时文件编辑可视化增强信任感

> *"本地 Whisper 零 API 密钥"* — [#3723](https://github.com/HKUDS/nanobot/pull/3723)
- 隐私/成本敏感用户对本地方案高度期待

### 💡 使用场景洞察
- **"少爷，最近忙不忙？"** — [#3028](https://github.com/HKUDS/nanobot/issues/3028) 揭示中文用户将 NanoBot 定位为**情感陪伴+任务管理**的混合体，而非纯工具
- **多 bot 协作** — [#3217](https://github.com/HKUDS/nanobot/issues/3217) Discord 场景下 bot 间通信需求，指向未来"Agent 社交网络"可能

---

## 8. 待处理积压

| 类型 | 条目 | 创建时间 | 风险 | 建议行动 |
|:---|:---|:---|:---|:---|
| **架构债务** | [#4136](https://github.com/HKUDS/nanobot/issues/4136) 重构会话保留结果语义 | 2026-06-01 | 中 | #4143 已部分解决，但 API 设计需维护者最终拍板 |
| **成本优化讨论** | [#4142](https://github.com/HKUDS/nanobot/issues/4142) 缓存未命中 Token 成本 | 2026-06-01 | 低 | 需核心维护者参与 DeepSeek V4 适配策略 |
| **企业认证** | [#4126](https://github.com/HKUDS/nanobot/pull/4126) Azure AAD | 2026-05-31 | 中 | 企业用户 blocker，建议优先 review |
| **语音交互** | [#4122](https://github.com/HKUDS/nanobot/pull/4122) WebUI 语音+本地 ASR | 2026-05-31 | 低 | 与 #3723 能力重叠，需决策是否合并或替代 |
| **云原生** | [#4139](https://github.com/HKUDS/nanobot/pull/4139) HF Spaces/ModelScope 部署 | 2026-06-01 | 低 | 851 行零依赖，review 成本高但收益明确 |

---

*日报基于 HKUDS/nanobot 2026-06-01 至 2026-06-02 的公开 GitHub 数据生成。项目链接：https://github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-06-02

---

## 1. 今日速览

Hermes Agent 今日保持**高活跃度**，24小时内 Issues 和 PR 各更新50条，形成41:9的新开/关闭比与25:25的待合并/已合并平衡。社区讨论焦点集中在**网关稳定性**（Discord/WeCom 消息丢失、工作目录配置）、**搜索生态扩展**（Brave/Searxng 原生支持呼声高涨）以及**cron 子系统可靠性**（jobs.json 解析崩溃、定时任务交付不可见）。值得关注的是，两个长期痛点——Discord 工具调用响应静默丢失（#29346）和 WeCom 异步超时集群——今日已有关键修复合并，显示维护团队对生产级稳定性的优先投入。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#35117](https://github.com/NousResearch/hermes-agent/pull/35117) | banditburai | **修复 WeCom 企业微信 asyncio.wait_for 超时集群**，含回归测试与资源清理；整合 @caojiguang 生产修复与 @ryan-flow 独立方案 | 网关消息超时 |
| [#34336](https://github.com/NousResearch/hermes-agent/pull/34336) | banditburai | **根治 Discord 网关工具调用响应静默丢失**，双因修复+强不变量断言（非空响应必须送达） | [#29346](https://github.com/NousResearch/hermes-agent/issues/29346) |
| [#35988](https://github.com/NousResearch/hermes-agent/pull/35988) | athebolt | **修复 Honcho 记忆结论静默失败**，根因为 workspace_id 缺失导致 create/delete_conclusion 调用异常 | 记忆子系统可靠性 |
| [#31818](https://github.com/NousResearch/hermes-agent/pull/31818) | bernardopg | **关闭 babel 插件弃用警告**（标记为 duplicate/依赖清理） | 构建体验优化 |

**整体推进评估**：今日合并聚焦**网关消息送达可靠性**（Discord/WeCom 两大平台）和**记忆后端稳定性**，属于生产环境核心路径的加固。无功能型大特性落地，但质量基础设施（回归测试、错误断言）得到实质性增强。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 评论 | 👍 | 核心诉求 |
|:---|:---|:---|:---|
| [#5354](https://github.com/NousResearch/hermes-agent/issues/5354) **确定性工作流引擎（Lobster 风格）** | 7 | 8 | 反对"每次重新规划"的 LLM 模式，要求 mission-critical 任务可预定义、低成本、低延迟执行 |
| [#11312](https://github.com/NousResearch/hermes-agent/issues/11312) ⛔ **Gateway 工作目录配置不被尊重，update 后重置** | 6→已关闭 | 1 | systemd 单元修改被 `hermes update` 覆盖，运维配置持久化缺失 |
| [#5143](https://github.com/NousResearch/hermes-agent/issues/5143) **多角色自动路由 v2（Gateway Hooks）** | 5 | 14 | 基于 v0.14.0 架构重设计的上下文分类器+误路由恢复，企业多租户场景刚需 |
| [#10644](https://github.com/NousResearch/hermes-agent/issues/10644) **Brave Search 原生后端** | 5 | 23 | 成本敏感用户要求替代 Firecrawl/Tavily，免费额度吸引力 |
| [#5941](https://github.com/NousResearch/hermes-agent/issues/5941) **Searxng 默认搜索提供者** | 5 | **30** ⭐ | 自托管/隐私优先用户的最高票功能请求，社区自建基础设施偏好明显 |

### 诉求分析

- **搜索去中心化**：Brave（23👍）+ Searxng（30👍）合计53👍，远超现有任何单一商业方案，反映社区对**供应商锁定**和**调用成本**的深层焦虑
- **企业级治理**：#5143（多角色路由）、#35408（Dashboard 身份透传）显示 B 端部署的权限与审计需求上升
- **确定性 vs 自主性张力**：#5354 的 Lobster 工作流与 Hermes 原生"自我改进"哲学形成路线辩论

---

## 5. Bug 与稳定性

| 优先级 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| **P1** | [#36867](https://github.com/NousResearch/hermes-agent/issues/36867) | 🆕 新开 | `cron/jobs.json` 非 dict 顶层值导致整个 cron 子系统崩溃（AttributeError） | **待修复** — 高危，所有 cron 路径必经 |
| **P1** | [#29346](https://github.com/NousResearch/hermes-agent/issues/29346) | ✅ 已关闭 | Discord 工具调用响应静默丢弃 | [#34336](https://github.com/NousResearch/hermes-agent/pull/34336) 已合并 |
| **P1** | [#37036](https://github.com/NousResearch/hermes-agent/issues/37036) | 🆕 新开 | `skills_guard` 误报 DANGEROUS：社区 skill `mksglu/context-mode` 被12条虚假发现阻塞安装 | **待修复** — 安全扫描规则过拟合 |
| **P2** | [#19776](https://github.com/NousResearch/hermes-agent/issues/19776) | 活跃 | Discord 斜杠命令同步 >30s 触发连接超时，网关启动失败 | **待修复** — 需可调超时配置 |
| **P2** | [#35703](https://github.com/NousResearch/hermes-agent/issues/35703) | ✅ 已关闭 | MCP 工具在 api_server 平台缺失（Slack/CLI 正常） | 已关闭，根因待确认是否完全修复 |
| **P2** | [#37044](https://github.com/NousResearch/hermes-agent/issues/37044) | 🆕 新开 | API server 不暴露 reasoning/thinking 块，Open WebUI 无法显示 | **待修复** — 影响推理模型集成 |
| **P2** | [#29711](https://github.com/NousResearch/hermes-agent/issues/29711) | 活跃 | Discord 混合附件误将非图片序列化为 `input_image`，400 错误 | **待修复** |
| **P2** | [#10149](https://github.com/NousResearch/hermes-agent/issues/10149) | 活跃 | "No auxiliary LLM provider configured" 配置误导性警告（16👍高共鸣） | **待修复** — 文档/检测逻辑问题 |

**稳定性健康度**：生产级修复（Discord/WeCom 消息丢失）有积极进展，但 **cron 子系统存在单点崩溃风险**（#36867）且为今日新开，需紧急响应。skills_guard 误报（#37036）阻碍社区生态扩展。

---

## 6. 功能请求与路线图信号

| 功能 | Issue | 信号强度 | 纳入可能性评估 |
|:---|:---|:---|:---|
| **Searxng 搜索后端** | [#5941](https://github.com/NousResearch/hermes-agent/issues/5941) | ⭐⭐⭐⭐⭐ 30👍 | **高** — 代码变更面小（web_tools.py + 配置），社区呼声最高，符合去中心化趋势 |
| **Brave Search 后端** | [#10644](https://github.com/NousResearch/hermes-agent/issues/10644) | ⭐⭐⭐⭐☆ 23👍 | **高** — 与 Searxng 互补（托管 vs 自托管），商业 API 生态完整性 |
| **Google Vertex AI 原生支持** | [#13484](https://github.com/NousResearch/hermes-agent/issues/13484) | ⭐⭐⭐⭐☆ 10👍 | **中** — 需要 OAuth 令牌刷新机制，架构工作量大 |
| **Gemini Flex 推理层级** | [#12700](https://github.com/NousResearch/hermes-agent/issues/12700) | ⭐⭐⭐☆☆ 6👍 | **中高** — 单行配置扩展，契合 cron/背景任务场景，成本优化明确 |
| **确定性工作流引擎** | [#5354](https://github.com/NousResearch/hermes-agent/issues/5354) | ⭐⭐⭐☆☆ 8👍 | **低-中** — 与 Hermes 核心"自主规划"哲学冲突，需架构层面辩论 |
| **自动备份与版本控制** | [#12238](https://github.com/NousResearch/hermes-agent/issues/12238) | ⭐⭐⭐☆☆ 13👍 | **中** — ~/.hermes/ 数据安全刚需，但实现路径多样 |
| **Kanban 多智能体编排加固** | [#35986](https://github.com/NousResearch/hermes-agent/issues/35986) | ⭐⭐⭐☆☆ 1👍 | **中** —  umbrella issue，可靠性缺口清单，需长期投入 |
| **Google Meet 实时语音插件** | [#36903](https://github.com/NousResearch/hermes-agent/issues/36903) | 🆕 1👍 | **低** — 实验性，NAIV 组织特定需求，Gemini Live 依赖 |
| **per-channel 斜杠命令白名单** | [#37004](https://github.com/NousResearch/hermes-agent/issues/37004) | 🆕 0👍 | **中** — Signal/企业场景访问控制，安全合规刚需 |

**PR 先行信号**：beardthelion 同日提交双 PR（[#37073](https://github.com/NousResearch/hermes-agent/pull/37073)、[#37071](https://github.com/NousResearch/hermes-agent/pull/37071)）解决 cron 交付可见性，显示**定时任务可观测性**正从需求进入实现。

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 场景 | 来源 Issue | 情绪强度 |
|:---|:---|:---|
| **"我配置了 API key 为什么还报 missing？"** — 辅助 LLM 提供者检测逻辑混乱，用户无法区分 primary/auxiliary | [#10149](https://github.com/NousResearch/hermes-agent/issues/10149) | 🔴 高（16👍共鸣） |
| **"cron 任务发了消息，但 agent 根本不知道"** — 定时任务与交互会话完全割裂，用户期望"我的 agent 应该有全局记忆" | [#37070](https://github.com/NousResearch/hermes-agent/issues/37070) | 🔴 高（今日新开） |
| **"update 后我的 systemd 配置被覆盖"** — 运维配置持久化缺失，升级即回滚 | [#11312](https://github.com/NousResearch/hermes-agent/issues/11312) | 🟡 中 |
| **"Discord 工具调用后没反应，日志说 ready 但没发送"** — 静默失败最难调试 | [#29346](https://github.com/NousResearch/hermes-agent/issues/29346) | 🔴 高（已修复） |

### 😊 满意/期待点

- **多搜索后端选择权**：用户积极为 Searxng/Brave 投票，认可现有插件架构的扩展性
- **Honcho 记忆集成**：虽有 bug（#35988），但社区认可外部记忆后端的设计方向
- **Dashboard OAuth 认证**：身份验证链路工作良好，但期望"认证后身份能透传到 agent 会话"（#35408）

### 💡 使用场景洞察

> *"Brave Search 免费额度 generous，Firecrawl 对我们太贵了"* — [#10644](https://github.com/NousResearch/hermes-agent/issues/10644)

> *"Gemini flex 完美匹配 cron jobs 和 background subagents"* — [#12700](https://github.com/NousResearch/hermes-agent/issues/12700)

> *"Signal group chat 里 bot 应该只响应特定命令，其他全部拒绝"* — [#37004](https://github.com/NousResearch/hermes-agent/issues/37004)

---

## 8. 待处理积压

| Issue | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|
| [#9220](https://github.com/NousResearch/hermes-agent/issues/9220) WhatsApp `/sethome` 配置不持久 | 2026-04-13 | 2026-06-01 | **跨平台配置持久化模式问题** — 与 #11312 同源，可能需统一修复 |
| [#5495](https://github.com/NousResearch/hermes-agent/issues/5495) ⛔ 官方 MongoDB 记忆提供者 | 2026-04-06 | 2026-06-01 | 社区需求明确，但官方未响应；私有 fork 碎片化风险 |
| [#31388](https://github.com/NousResearch/hermes-agent/issues/31388) 多 profile 共享记忆存储 RFC | 2026-05-24 | 2026-06-01 | 架构级提案，无维护者反馈，可能错失企业多租户场景 |
| [#24229](https://github.com/NousResearch/hermes-agent/pull/24229) BlueBubbles 隐私泄漏修复 | 2026-05-12 | 2026-06-02 | **P1 安全 PR 悬置近一个月**，1:1 消息误路由到群聊的隐私风险 |
| [#27610](https://github.com/NousResearch/hermes-agent/pull/27610) 遗留目录空壳误导 | 2026-05-17 | 2026-06-02 | 配置迁移边缘情况，影响升级体验 |

**维护者行动建议**：
1. **紧急**：审查 #36867（cron 崩溃）和 #37036（skills_guard 误报）
2. **本周**：决定 #24229（BlueBubbles 安全修复）合并或替代方案
3. **本月**：回应搜索后端扩展（#5941/#10644）的社区 PR 意向，避免生态分裂

---

*日报生成时间：2026-06-02 | 数据来源：NousResearch/hermes-agent GitHub 公开活动*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-06-02

---

## 1. 今日速览

PicoClaw 今日保持**中等活跃度**，社区围绕 v0.2.9 版本迭代持续发力。11 条 PR 中有 5 条完成合并/关闭，6 条待审阅，代码流动健康；7 条 Issues 全部处于开放状态，无当日关闭，显示问题消化速度略滞后于代码产出。核心焦点集中在 **Anthropic 模型兼容性修复**（temperature 弃用、model ID 格式）和 **Agent 协作架构**两大方向。nightly 构建持续发布，但文档更新任务 (#2981) 已正式提上议程，提示版本功能与文档存在脱节风险。

---

## 2. 版本发布

### 🔖 Nightly Build: v0.2.9-nightly.20260601.ba806592

| 属性 | 详情 |
|:---|:---|
| 版本号 | `v0.2.9-nightly.20260601.ba806592` |
| 类型 | 自动化构建（可能不稳定） |
| 变更范围 | [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) |

**⚠️ 使用注意**：此为自动化 nightly 构建，未经完整稳定性验证，生产环境建议继续使用稳定版 v0.2.8。

**迁移提示**：当前 main 分支相对 v0.2.9 的累积变更尚未发布正式版，涉及 Bedrock temperature 修复 (#2982)、cron 工具增强 (#2977) 等，建议等待正式 release notes。

---

## 3. 项目进展

### ✅ 今日合并/关闭的 PR（5 条）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2982](https://github.com/sipeed/picoclaw/pull/2982) | loafoe | **fix(bedrock)**: 为 Claude Opus 4.8 弃用 temperature 参数 | 阻断性修复：解决 AWS Bedrock 上 Opus 4.8 的 100% 调用失败，保障企业级部署可用性 |
| [#2977](https://github.com/sipeed/picoclaw/pull/2977) | SutraHsing | **feat(cron)**: 新增 `get`/`update` 操作 | Agent 工具链完善：避免 cron 任务"删后重建"导致的调度中断，提升 Agent 自治能力 |
| [#2893](https://github.com/sipeed/picoclaw/pull/2893) | dtapps | ~~feat: Server酱³ Bot 通道支持~~ **CLOSED** | 中国本地化通知方案，关闭原因待确认（stale 标记） |
| [#2890](https://github.com/sipeed/picoclaw/pull/2890) | dtapps | ~~fix: macOS 符号链接路径解析~~ **CLOSED** | 修复 `/var` → `/private/var` 导致的 cwdPath 验证失败，关闭原因待确认 |
| [#2781](https://github.com/sipeed/picoclaw/pull/2781) | cstroie | ~~perf: 减少技能目录 token 消耗~~ **CLOSED** | 优化多轮工具调用场景下的 prompt 成本，关闭原因待确认 |

**整体进展评估**：今日合并以**紧急兼容性修复**和**Agent 工具增强**为主，核心基础设施（Bedrock、Anthropic 双主干模型）的稳定性得到加固。但 3 条带 `stale` 标记的 PR 被关闭，提示社区贡献的审查周期存在瓶颈。

---

## 4. 社区热点

### 🔥 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 核心诉求 | 深层分析 |
|:---|:---|:---:|:---|:---|
| 1 | [#1042](https://github.com/sipeed/picoclaw/issues/1042) `exec` 工具 `guardCommand` 误杀 | **15 条** | 安全策略过度保守导致正常命令被拦截 | **经典安全-可用性张力**：`restrict_to_workspace=true` 时的路径正则过于粗暴，将 URL 参数误判为路径遍历。用户真实场景是调用天气 API，却被安全守卫阻断。诉求：区分"实际文件路径"与"字符串中的路径样片段" |
| 2 | [#2887](https://github.com/sipeed/picoclaw/issues/2887) RISC-V .deb 包 OpenAI 模型失效 | **8 条** | 边缘架构（RISC-V）的二进制分发质量 | 嵌入式/边缘部署场景增长信号，Debian on RISC-V 的 Go runtime 或依赖链存在平台特定问题 |
| 3 | [#2720](https://github.com/sipeed/picoclaw/issues/2720) PID 文件陈旧导致启动崩溃循环 | **7 条** | 生产环境可靠性：PID 复用未验证进程身份 | 云原生/容器场景下的典型运维痛点，[PR #2813](https://github.com/sipeed/picoclaw/pull/2813) 已提供修复待合并 |

**社区情绪**：安全策略 (#1042) 和平台兼容性 (#2887) 是最大摩擦点，两者均指向"功能在主流场景工作，边缘场景体验断崖下降"。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR 状态 | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#2720](https://github.com/sipeed/picoclaw/issues/2720) | PID 复用导致网关无法启动，进入崩溃循环 | [PR #2813](https://github.com/sipeed/picoclaw/pull/2813) **待合并**（stale） | 所有 Linux 生产部署，尤其容器重启场景 |
| 🔴 **高** | [#2887](https://github.com/sipeed/picoclaw/issues/2887) | RISC-V .deb 包 OpenAI 模型完全不可用 | ❌ 无 | RISC-V/Debian 用户 |
| 🟡 **中** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | `exec` 安全守卫误拦截合法命令 | ❌ 无（讨论中，方案待决） | 启用 `restrict_to_workspace` 的用户 |
| 🟡 **中** | [#2796](https://github.com/sipeed/picoclaw/issues/2796) | 历史记录仅显示同轮最后一条用户消息 | ❌ 无 | 多轮对话用户，消息压缩逻辑缺陷 |
| 🟢 **低** | [#2941](https://github.com/sipeed/picoclaw/issues/2941) | 默认配置 model ID 格式错误（点号→连字符） | [PR #2942](https://github.com/sipeed/picoclaw/pull/2942) **待合并**（stale） | 新安装用户首次使用 Anthropic |
| 🟢 **低** | [#2939](https://github.com/sipeed/picoclaw/issues/2939) | `claude-opus-4-7` temperature 参数弃用 | [PR #2940](https://github.com/sipeed/picoclaw/pull/2940) **待合并**（stale） | Anthropic Opus 4.7 用户 |

**稳定性健康度**：⚠️ **中等风险**。3 条高/中严重度 bug 仅 1 条有 pending PR，且该 PR (#2813) 已 stale；Anthropic 双 bug 均有 PR 但长期未合并，存在"修复就绪但发布阻滞"现象。

---

## 6. 功能请求与路线图信号

| 方向 | 来源 | 信号强度 | 纳入 v0.3.0 可能性 |
|:---|:---|:---:|:---|
| **Agent 协作总线** | [PR #2937](https://github.com/sipeed/picoclaw/pull/2937) | ⭐⭐⭐⭐⭐ | **高**。一等公民架构（mailbox、线程隔离、权限感知），作者 afjcjsbx 为核心贡献者，设计完整 |
| **NEAR AI Cloud 提供商** | [PR #2917](https://github.com/sipeed/picoclaw/pull/2917) | ⭐⭐⭐⭐☆ | 中高。TEE-capable 模型是差异化卖点，OpenAI-compatible 协议接入成本低 |
| **LLM 空响应重试** | [PR #2983](https://github.com/sipeed/picoclaw/pull/2983) | ⭐⭐⭐⭐☆ | 高。当日新开 PR，修复边界情况可靠性，符合 v0.2.9 稳定性主题 |
| **cron 工具增强** | [PR #2977](https://github.com/sipeed/picoclaw/pull/2977) | ⭐⭐⭐⭐☆ | ✅ **已合并**。Agent 自治能力基础设施 |
| **Server酱³ 通知通道** | [PR #2893](https://github.com/sipeed/picoclaw/pull/2893) | ⭐⭐⭐☆☆ | 低。已关闭，需重新评估中国市场需求优先级 |
| **文档全面更新** | [Issue #2981](https://github.com/sipeed/picoclaw/issues/2981) | ⭐⭐⭐⭐⭐ | **阻塞性需求**。官方已认领，v0.2.9 发布前提条件 |

**路线图判断**：Agent 协作 (#2937) 是最大架构级赌注，若合并将标志 PicoClaw 从"单 Agent 工具"向"多 Agent 编排平台"跃迁。

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 痛点 | 来源 | 典型场景 |
|:---|:---|:---|
| **安全策略"一刀切"** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | "查询天气被当黑客拦截"——用户理解安全必要性，但无法理解为何纯网络命令触发路径守卫 |
| **平台二等公民** | [#2887](https://github.com/sipeed/picoclaw/issues/2887) | RISC-V 用户："没有编译器 onsite，只能依赖预编译包，但包是坏的"——边缘计算场景被忽视 |
| **配置即踩坑** | [#2941](https://github.com/sipeed/picoclaw/issues/2941) | 新用户首次安装即 404，"Did you mean claude-sonnet-4-6?"——默认配置不工作 |
| **历史不可信** | [#2796](https://github.com/sipeed/picoclaw/issues/2796) | 用户视角："消息压缩对大模型，但对用户显示应该完整"——透明度缺失导致不信任 |

### 😊 满意点

- cron 工具增强 (#2977) 体现"Agent 自治"设计哲学获认可
- nightly 构建持续可用，迭代响应快

---

## 8. 待处理积压

### ⏰ 需维护者紧急关注

| 类型 | 条目 | 闲置时间 | 风险 | 建议动作 |
|:---|:---|:---:|:---|:---|
| **PR** | [#2813](https://github.com/sipeed/picoclaw/pull/2813) 修复 PID 复用崩溃 | ~25 天 | 生产环境稳定性，已有多人踩坑 | 优先审阅合并，或至少反馈是否需要 rebase |
| **PR** | [#2942](https://github.com/sipeed/picoclaw/pull/2942) 修复 Anthropic model ID | ~7 天 | 新用户体验首因效应 | 低工作量高影响，建议快速合并 |
| **PR** | [#2940](https://github.com/sipeed/picoclaw/pull/2940) 修复 Opus 4.7 temperature | ~7 天 | 已有关闭替代方案 (#2982)，但上游 provider 修复仍有价值 | 评估是否与 #2982 重复，或覆盖更广 |
| **PR** | [#2937](https://github.com/sipeed/picoclaw/pull/2937) Agent 协作总线 | ~8 天 | 架构级 PR，审阅成本高但战略价值大 | 安排架构 review，或拆分模块逐步合并 |
| **Issue** | [#2981](https://github.com/sipeed/picoclaw/issues/2981) 文档更新 | 当日新建 | v0.2.9 发布阻塞项 | 指派专人，建立文档-代码同步机制 |

---

*日报生成时间：2026-06-02 | 数据来源：GitHub API 与公开仓库活动*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-06-02

> **项目**: [NanoClaw](https://github.com/qwibitai/nanoclaw) — AI 智能体与个人 AI 助手开源框架  
> **分析周期**: 2026-06-01 至 2026-06-02（UTC）

---

## 1. 今日速览

今日 NanoClaw 保持**中高活跃度**，核心工程团队聚焦**稳定性与韧性建设**。24小时内产生2个新Issue、4个待合并PR，无新版本发布。社区正集中攻关三类问题：A2A多路会话路由的高危Bug已修复关闭；Agent Runner的崩溃自愈能力成为当日最紧迫议题（已有对应PR #2670）；同时容器层对rootless Podman的支持进入代码审查阶段。整体信号显示项目从功能扩张转向**生产级可靠性打磨**。

---

## 2. 版本发布

**无新版本发布**（最新Release待更新）

---

## 3. 项目进展

### ✅ 已关闭 PR

| PR | 说明 | 影响 |
|:---|:---|:---|
| [#2664](https://github.com/nanocoai/nanoclaw/pull/2664) - run browser scraping sidecar in v2 container | 浏览器抓取sidecar在v2容器中的运行支持 | 扩展了v2容器架构的插件能力，为网页自动化场景铺路 |

### 🔧 已关闭 Issue（关联修复）

| Issue | 修复内容 | 技术债务清除 |
|:---|:---|:---|
| [#2331](https://github.com/nanocoai/nanoclaw/issues/2331) - `findSessionByAgentGroup` A2A回复路由错误 | 多通道群组中A2A回复被错误路由到最新会话（而非目标会话）的SQL排序Bug | **高危Bug清零**；修复了`created_at DESC`的语义缺陷，预计改为基于消息目标匹配 |

> **整体推进评估**: 今日合并量偏低（1/5），但关闭了积压近一个月的A2A核心Bug，多Agent协作可靠性提升。容器兼容性和自愈机制两个PR集群若合并，将标志着Runner层达到生产可用标准。

---

## 4. 社区热点

| 排名 | 条目 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥1 | [#2669](https://github.com/nanocoai/nanoclaw/issues/2669) Agent Runner崩溃死循环 | 创建即获PR响应（<24h） | **"Poisoned Resume"模式识别**: 用户需要会话从腐败状态自动恢复，而非人工介入清理Docker容器 |
| 🔥2 | [#2666](https://github.com/nanocoai/nanoclaw/pull/2666) Provider故障恢复全链路 | 跨PR依赖（#2667），架构级改动 | **供应商韧性**: 用户要求LLM调用失败时可回滚、重放、降级，而非单点故障导致会话僵死 |
| 3 | [#2668](https://github.com/nanocoai/nanoclaw/issues/2668) MCP工具无超时机制 | 与#2669同属Runner可靠性主题 | **可观测性缺口**: 30分钟冷杀周期 unacceptable，需要工具级SLI/SLO |

**诉求聚合**: 社区正从"能跑通"转向"跑不死"——要求Runner具备**故障隔离、超时控制、自动修复**三重能力。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | 根因 | Fix PR | 风险窗口 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **High** | [#2669](https://github.com/nanocoai/nanoclaw/issues/2669) 腐败transcript死循环 | 🆕 新报 | Claude SDK对`thinking`块的400错误以result event返回，未触发现有`isSessionInvalid`恢复路径 | [#2670](https://github.com/nanocoai/nanoclaw/pull/2670) 已提交 | **当前活跃**：任何含thinking块的会话恢复都可能触发 |
| 🟡 **Medium** | [#2668](https://github.com/nanocoai/nanoclaw/issues/2668) MCP工具无超时 | 🆕 新报 | SDK同步调用阻塞事件流，heartbeat机制失效 | ❌ 暂无 | 生产环境工具调用=潜在30分钟挂起 |
| 🟢 **Resolved** | [#2331](https://github.com/nanocoai/nanoclaw/issues/2331) A2A会话路由错误 | ✅ 已关闭 | SQL `ORDER BY created_at DESC` 语义错误，未考虑消息目标归属 | 已修复 | 已关闭 |

> **稳定性健康度**: ⚠️ **承压**。Runner层存在两个关联缺陷（死循环+超时缺失），但社区响应速度优秀（#2669 24小时内出PR）。

---

## 6. 功能请求与路线图信号

| 需求来源 | 隐含功能方向 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#2666](https://github.com/nanocoai/nanoclaw/pull/2666) Provider故障恢复 | **统一重试/熔断/降级框架** | ⭐⭐⭐⭐⭐ 高 | 架构级PR，依赖容器修复#2667，显示维护者将其作为基座能力 |
| [#2667](https://github.com/nanocoai/nanoclaw/pull/2667) rootless Podman支持 | **多运行时兼容层** | ⭐⭐⭐⭐⭐ 高 | 阻塞#2666，属于基础设施必选项 |
| [#2668](https://github.com/nanocoai/nanoclaw/issues/2668) 工具超时 | **可配置工具SLA + 取消令牌** | ⭐⭐⭐⭐☆ 中高 | 与#2669同作者领域，可能打包进Runner韧性迭代 |
| [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) 未知slash命令透传 | **命令协议兼容性** | ⭐⭐⭐☆☆ 中 | 5月PR，今日更新，可能随格式化层重构合并 |

**路线图推测**: 下一版本（预计v2.2或v2.1.x patch）核心主题为 **"Resilient Runner"** —— 自愈、超时、供应商容错三合一。

---

## 7. 用户反馈摘要

> 从Issue描述中提取的真实场景与情绪

| 痛点 | 来源 | 场景细节 | 情绪信号 |
|:---|:---|:---|:---|
| **"docker logs里全是poll-loop"** | [#2669](https://github.com/nanocoai/nanoclaw/issues/2669) ddaniels | 生产环境会话恢复时陷入无限400循环，日志爆炸，无自愈迹象 | 😤 运维噩梦——需要人工删容器 |
| **"30分钟冷杀前完全黑盒"** | [#2668](https://github.com/nanocoai/nanoclaw/issues/2668) mshirel | MCP工具调用期间无事件、无heartbeat、无状态反馈 | 😰 可观测性真空——用户不知道Agent是死是活 |
| **"rootless Podman被拒绝启动"** | [#2667](https://github.com/nanocoai/nanoclaw/pull/2667) dtreskunov | 安全策略`--dangerously-skip-permissions`与root容器冲突 | 😤 企业安全合规 vs 功能可用的两难 |
| **"A2A回复发到错误会话"** | [#2331](https://github.com/nanocoai/nanoclaw/issues/2331) glifocat | 多通道群组中Agent间协作消息路由混乱 | 😐 架构债务——排序语义未考虑业务目标 |

**满意度/不满意比值**: 今日样本偏负面（3个新Issue均为缺陷报告），但**修复响应速度极快**（#2331关闭、#2669当日有PR），社区信任度维持。

---

## 8. 待处理积压

| 条目 | 创建时间 | 最后更新 | 积压天数 | 风险提示 |
|:---|:---|:---|:---|:---|
| [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) fix(formatter): treat unknown slash commands as normal chat | 2026-05-08 | 2026-06-01 | **24天** | ⚠️ 用户体验Bug：未知命令静默丢弃，用户困惑；今日有更新但未合并，需维护者review |
| ~~[#2331](https://github.com/nanocoai/nanoclaw/issues/2331)~~ | ~~2026-05-07~~ | ~~已关闭~~ | ~~25天~~ | ✅ **今日清除** |

> **维护者提醒**: 仅剩#2346一个超期PR，格式化层的小幅修复，建议随Runner韧性版本打包发布，减少用户命令误用场景。

---

## 附录：数据速查

| 指标 | 数值 |
|:---|:---|
| Issues 24h | 3（新开2 / 关闭1）|
| PRs 24h | 5（待合并4 / 关闭1）|
| Releases | 0 |
| 平均响应→PR时间 | ~0.5天（#2669）|
| 高危Bug清零 | 1（#2331）|

---

*本日报基于GitHub公开数据生成，未包含私有仓库或讨论区信息。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-06-02

> **项目地址**: [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **报告日期**: 2026-06-02（基于过去24小时数据）

---

## 1. 今日速览

NullClaw 项目今日活跃度**极低**，处于典型的维护期静默状态。过去24小时内仅产生 **1 条 PR 更新**，无 Issues 活动、无版本发布、无社区讨论。唯一活跃的 PR #943 针对 Telegram 平台的交互体验进行修复，属于细分场景的边缘优化，未涉及核心架构变动。整体而言，项目今日未出现功能性推进，健康度指标偏向"休眠监测"区间，需关注长期维护节奏是否可持续。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**今日无已合并/已关闭的 PR**

| 状态 | 数量 | 说明 |
|:---|:---|:---|
| 已合并 | 0 | — |
| 已关闭（未合并） | 0 | — |
| 待合并 | 1 | 交互体验修复，详见下方 |

**待审阅 PR 详情**：

- **PR #943** `[OPEN]` [fix(telegram): show typing indicator during callback-query processing](https://github.com/nullclaw/nullclaw/pull/943)  
  作者: [@raskevichai](https://github.com/raskevichai) | 创建于 2026-06-01

  **技术摘要**：修复 Telegram 平台 `callback_query`（如内联按钮 `nc_choices` 选项）处理期间聊天界面"完全静默"的问题。此前，用户点击按钮后，5–30 秒的模型调用过程中既无"typing…"输入指示器，也无任何状态反馈，导致用户感知为"卡死"或"无响应"。

  **项目推进评估**：该 PR 属于**体验层修复**，未扩展核心能力，但补齐了 Telegram 适配器在异步交互场景下的反馈闭环。对生产环境用户留存有边际改善，对架构演进无实质影响。

---

## 4. 社区热点

| 排名 | 条目 | 互动指标 | 诉求分析 |
|:---|:---|:---|:---|
| #1 | PR #943 | 👍 0, 评论 undefined | **唯一活跃条目**，反映社区对 Telegram 端用户体验的持续关注；作者主动认领并修复 #942，显示贡献者对边缘场景的维护责任感 |

> **深层诉求**：Telegram 作为 NullClaw 的重要接入端，其交互完整性直接影响终端用户对"AI 智能体响应速度"的主观评价。该修复暗示社区存在一批将 NullClaw 部署于 Telegram 客服/对话场景的生产用户。

---

## 5. Bug 与稳定性

| 严重程度 | 条目 | 状态 | 说明 |
|:---|:---|:---|:---|
| 🔶 中 | Issue #942（由 PR #943 关闭）| **Fix PR 已提交，待合并** | Telegram callback_query 处理期间缺失 typing 指示器，导致用户感知延迟/假死 |

- **无新增崩溃、回归或高危安全报告**
- **风险点**：PR #943 尚未合并，Issue #942 仍处于开放状态，生产环境用户暂时无法获得修复

---

## 6. 功能请求与路线图信号

**今日无新增功能请求**

| 现有信号 | 来源 | 纳入下一版本可能性 |
|:---|:---|:---|
| Telegram 交互体验优化 | PR #943 | **高**（修复类，合并门槛低）|

> **路线图观察**：今日数据未透露新功能方向。项目近期缺乏"Agent 能力扩展""多模态支持""记忆系统升级"等战略性 PR，路线图信号处于空白期。

---

## 7. 用户反馈摘要

**今日无 Issues 评论可供提炼**

基于现有 PR #943 的上下文推断：

| 维度 | 内容 |
|:---|:---|
| **痛点场景** | Telegram 内联按钮交互后的"静默等待"，用户无法区分"处理中"与"系统故障" |
| **用户期望** | 跨平台交互反馈一致性（文本消息有 typing 指示器，callback_query 也应有） |
| **满意度缺口** | 长耗时模型调用（5–30s）缺乏进度感知，损害对话流畅度 |

> ⚠️ 数据局限：今日零 Issues 活动导致真实用户声音样本不足，反馈摘要依赖单一 PR 推断。

---

## 8. 待处理积压

| 条目 | 滞留时间 | 风险等级 | 提醒 |
|:---|:---|:---|:---|
| PR #943 | ~1 天（2026-06-01 创建）| 🟢 低 | 新提交，正常审阅周期内 |
| **整体积压评估** | — | 🟡 中 | 项目 Issues/PR 总量未知，但今日零 Issue 活动可能反映：① 产品成熟稳定；② 社区活跃度衰减；③ 问题反馈渠道迁移至 Discord/论坛等站外平台 |

**维护者关注建议**：
- 优先审阅合并 PR #943，修复已确认的用户体验问题
- 若连续多日维持"零 Issue"状态，建议检查社区反馈渠道健康度，排除数据抓取遗漏或用户流失风险

---

## 附录：今日数据总览

| 指标 | 数值 |
|:---|:---|
| Issues 更新 | 0 |
| PR 更新 | 1（待合并 1）|
| Releases | 0 |
| 社区互动总量 | 极低 |

> **健康度评分**：⭐⭐☆☆☆（2/5）—— 功能维护持续，但社区活力与迭代节奏显著不足。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-06-02

> **项目**: [nearai/ironclaw](https://github.com/nearai/ironclaw) | **分析日期**: 2026-06-02 | **数据周期**: 过去24小时

---

## 1. 今日速览

IronClaw 今日呈现**极高活跃度**，PR 吞吐量达 47 条（合并/关闭 33 条，待审 14 条），Issues 新增 11 条活跃项。核心团队（henrypark133、serrrfirat）主导了 Reborn 架构的深度迭代，聚焦 **Agent 循环稳定性**（compaction、context overflow、checkpoint 一致性）与 **WebUI v2 产品化**（OAuth、扩展注册表、事件流）。值得关注的是，Nightly E2E 持续失败（[#4108](https://github.com/nearai/ironclaw/issues/4108)）已延续 6 天，质量门禁存在风险。整体判断：功能迭代高速推进，但工程债务与测试稳定性需同步关注。

---

## 2. 版本发布

**无新版本发布**。

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（33 条中的核心项）

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#3899](https://github.com/nearai/ironclaw/pull/3899) | ilblackdragon | Reborn 成本预算端到端闭环：Provider token 计费、usage attribution、预算超限优雅降级 | **里程碑级**：完成 #3841 全部跟进项，Reborn 商业化计费基础设施就绪 |
| [#4293](https://github.com/nearai/ironclaw/pull/4293) | serrrfirat | GSuite 能力模型化：动态 secret 消费、Google API 网络策略、激活工具回归覆盖 | 企业集成能力扩展，SaaS 化关键路径 |
| [#4280](https://github.com/nearai/ironclaw/pull/4280) | serrrfirat | GitHub 能力完整移植至 Reborn：issue→全功能 v1 表面、host-stamped 调用上下文 | 开发者生态核心能力补齐 |
| [#4301](https://github.com/nearai/ironclaw/pull/4301) | henrypark133 | Trigger Poller 核心：`TriggerPollerWorker::tick_once`、backend-agnostic 调度端口 | Reborn 定时触发基础设施奠基 |
| [#4297](https://github.com/nearai/ironclaw/pull/4297) | serrrfirat | GSuite OAuth 设置与恢复：PKCE、静态重定向 URI、Reborn serve/runtime 配置贯通 | 企业 SSO 产品化 |
| [#4300](https://github.com/nearai/ironclaw/pull/4300) | serrrfirat | Notion MCP OAuth 接入：替换 Google-only 适配器为共享 host-mediated 客户端 | 多 SaaS OAuth 统一架构 |
| [#4299](https://github.com/nearai/ironclaw/pull/4299) | serrrfirat | 扩展 manifest hash 启动迁移：消除二进制更新后的硬失败 | 运维体验关键修复 |
| [#4305](https://github.com/nearai/ironclaw/pull/4305) | serrrfirat | Reborn 技能激活渐进披露：按请求名过滤、6000 token 预算对齐 | 性能与成本优化 |
| [#4295](https://github.com/nearai/ironclaw/pull/4295) | serrrfirat | Gate 取消/拒绝后停止处理：清除 stale pending 状态 | WebUI 状态机正确性 |
| [#4277](https://github.com/nearai/ironclaw/pull/4277) | henrypark133 | 产品出站编排接缝：出站策略验证前置、适配器目标不可自选 | 安全架构强化 |

**整体迈进评估**：Reborn 从"功能可用"向"生产就绪"跨越——计费闭环、企业 OAuth、定时触发、状态一致性四大支柱同日推进。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | 议题 | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 1 | [#3281](https://github.com/nearai/ironclaw/issues/3281) | 6 评论 | **已关闭**。Reborn `EventStreamManager` 持久化投影扇出，关联 9 个子议题。高评论量反映事件流架构的复杂协调需求——SSE/WebSocket/API 多订阅者、可重放、产品安全流的设计权衡。 |
| 2 | 其余 11 条 Issues | 0 评论 | **信号异常**：全部为新开议题，0 评论、0 👍，呈现"批量报告"特征，疑似核心团队内部缺陷跟踪外溢或自动化工具生成，非典型社区讨论模式。 |

**诉求解读**：社区外部参与者（liaoqianchuan）提出 Reborn 路线图咨询（[#4279](https://github.com/nearai/ironclaw/issues/4279)）与 ENGINE_V2 无界对话增长性能担忧（[#4278](https://github.com/nearai/ironclaw/issues/4278)），反映**早期采用者对架构透明度和规模上限的焦虑**。

---

## 5. Bug 与稳定性

| 严重度 | 议题 | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| 🔴 **P0-持续** | [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E 连续 6 天失败（v2-engine），始于 2026-05-27 | ❌ **无 Fix PR**，最后一次更新 2026-06-01 |
| 🟡 **P1-新报** | [#4309](https://github.com/nearai/ironclaw/issues/4309) | Compaction summary write 可 outlive 失败的 BeforeModel checkpoint，导致重试阻塞 | ❌ 无 Fix PR |
| 🟡 **P1-新报** | [#4310](https://github.com/nearai/ironclaw/issues/4310) | Context-overflow recovery 发出 `ShrinkContext` 但 executor 未执行，重试不缩减 | ❌ 无 Fix PR |
| 🟡 **P1-新报** | [#4311](https://github.com/nearai/ironclaw/issues/4311) | Model gateway 将预算治理失败错误归类为 context-overflow recovery | ❌ 无 Fix PR |
| 🟡 **P1-新报** | [#4312](https://github.com/nearai/ironclaw/issues/4312) | Compaction 进度未向用户暴露，长 prompt 准备期看起来像卡住 | ❌ 无 Fix PR |
| 🟡 **P1-新报** | [#4313](https://github.com/nearai/ironclaw/issues/4313) | Compaction milestone payload schema 与 live enum 不匹配，阻塞 projection | ❌ 无 Fix PR |
| 🟡 **P1-新报** | [#4314](https://github.com/nearai/ironclaw/issues/4314) | `CompactionLeakDetected` milestone 死代码：生产路径不 emit，应移除或实现 | ❌ 无 Fix PR |

**稳定性判断**：henrypark133 批量开启 6 条 Reborn compaction/budget/context 相关缺陷，揭示 **M3-agentloop-turns 模块存在系统性正确性问题**。结合 E2E 持续失败，建议暂停该模块功能新增，聚焦修复。

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 纳入可能性 | 依据 |
|:---|:---|:---|:---|
| [#4279](https://github.com/nearai/ironclaw/issues/4279) | Reborn 分支路线图与云原生架构公开文档 | ⭐⭐⭐⭐⭐ 高 | 官方已回应（implied by 项目方向），需正式 RFC |
| [#4287](https://github.com/nearai/ironclaw/issues/4287) | WebUI OAuth 登录集成（Google/GitHub） | ⭐⭐⭐⭐⭐ **已实现** | PR [#4294](https://github.com/nearai/ironclaw/pull/4294) 同日开启，产品化冲刺中 |
| [#4303](https://github.com/nearai/ironclaw/issues/4303) | `TriggerPollerWorker` 拆分为专注模块 | ⭐⭐⭐⭐☆ 高 | PR [#4301](https://github.com/nearai/ironclaw/pull/4301) 已合并核心，重构跟进 |
| [#4304](https://github.com/nearai/ironclaw/pull/4304) | Runtime context prompt stage 规划 | ⭐⭐⭐⭐☆ 高 | Codex 计划 PR，#4149 的实现设计 |
| [#4307](https://github.com/nearai/ironclaw/pull/4307) | WebUI v2 扩展注册表管理 | ⭐⭐⭐⭐☆ 高 | 生命周期扩展注册表产品化 |
| [#4298](https://github.com/nearai/ironclaw/pull/4298) | MiniMax 默认模型升级至 M3 | ⭐⭐⭐☆☆ 中 | 第三方模型维护，社区贡献待审 |

---

## 7. 用户反馈摘要

### 真实痛点

| 用户 | 场景 | 痛点 | 来源 |
|:---|:---|:---|:---|
| liaoqianchuan | 评估 Reborn 多租户部署 | **状态管理解耦的扩展上限不明确**：对话历史单 JSON 对象存储，context window 耗尽风险 | [#4278](https://github.com/nearai/ironclaw/issues/4278) |
| liaoqianchuan | 架构选型决策 | **路线图透明度不足**：云原生架构演进节奏、reborn-integration 合并策略无公开文档 | [#4279](https://github.com/nearai/ironclaw/issues/4279) |

### 团队内部质量信号（从 Issues 推断）

- **Compaction 子系统"带病前行"**：6 条相关缺陷同日暴露，设计文档（#4313）与实现脱节，milestone 语义不完整（#4314），用户可见性缺失（#4312）
- **Error taxonomy 债务**：预算超限、context overflow、security rejection 归类混乱（#4310, #4311），调试与用户体验双重受损

---

## 8. 待处理积压

| 风险等级 | 事项 | 天数 | 行动建议 |
|:---|:---|:---|:---|
| 🔴 **紧急** | [#4108](https://github.com/nearai/ironclaw/issues/4108) Nightly E2E 失败 | 6 天 | **立即指派专人**：阻断发布流水线，影响所有 reborn 变更的信心 |
| 🟡 **高** | [#4178](https://github.com/nearai/ironclaw/pull/4178) Feishu websocket 事件接入 | 5 天 | XL 级 PR，中等风险，需核心评审资源 |
| 🟡 **高** | 14 条待合并 PR 中的 XL 级项 | - | PR [#4308](https://github.com/nearai/ironclaw/pull/4308)（trigger poller harness）、[#4307](https://github.com/nearai/ironclaw/pull/4307)（扩展注册表）需优先审阅 |
| 🟢 **中** | [#4302](https://github.com/nearai/ironclaw/pull/4302) AGENTS.md 文档校正 | 1 天 | 新贡献者 docs-only PR，快速合并可提升社区参与感 |

---

## 附录：数据速查

| 指标 | 数值 | 环比判断 |
|:---|:---|:---|
| Issues 更新 | 12（11 活跃/新开, 1 关闭） | 活跃度高，关闭率低（8%）|
| PR 更新 | 47（14 待合并, 33 已合并/关闭）| 吞吐量极高，合并率 70% |
| 版本发布 | 0 | - |
| 核心贡献者活跃 | henrypark133(8), serrrfirat(9), italic-jinxin(2), others | 双核驱动 |
| 外部贡献 | liaoqianchuan(2 Issues), octo-patch(1 PR), thisisjoshford(1 PR) | 社区渗透初显 |

---

*本日报基于 GitHub 公开数据自动生成，未包含私有讨论或内部 Slack 信息。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-06-02

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **日期**: 2026-06-02  
> **分析周期**: 过去24小时（2026-06-01 至 2026-06-02）

---

## 1. 今日速览

LobsterAI 今日展现**高活跃度交付态势**：24小时内完成 **11 个 PR 的合并/关闭**，并发布 **2026.6.1 月度版本**，核心围绕 Kit（专家套件）生态建设、对话本地分叉能力及插件更新机制三大方向推进。社区侧出现 **1 条用户投诉类 Issue**，涉及订阅积分月底清零的计费争议，目前尚无官方回应。整体项目健康度良好，工程节奏紧凑，但用户运营侧需关注付费权益的透明度问题。

---

## 2. 版本发布

### 🚀 [LobsterAI 2026.6.1](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.6.1)（2026-06-01）

| 维度 | 详情 |
|:---|:---|
| **发布类型** | 月度功能版本 |
| **核心贡献者** | @btc69m979y-dotcom（2 项 feat） |
| **主要变更** | **3 项功能增强** |

#### 更新内容

| 变更 | PR | 说明 |
|:---|:---|:---|
| **Expert Kit Store 与对话集成** | [#2060](https://github.com/netease-youdao/LobsterAI/pull/2060) | 新增 Kit 商店与对话流程的深度集成，支持在对话中直接选择专家套件并触发 try-asking 跳转 |
| **插件更新检查（npm/clawhub 源）** | [#2069](https://github.com/netease-youdao/LobsterAI/pull/2069) | 扩展插件更新检测能力，覆盖 npm 与 clawhub 双源，解决第三方插件版本滞后问题 |
| **MCP 相关修复** | — | 修复 MCP（Model Context Protocol）模块的稳定性问题（Release Note 截断，详情待补） |

#### 迁移与兼容性评估

| 项目 | 状态 |
|:---|:---|
| 破坏性变更 | **未发现** — 均为增量功能 |
| 用户操作 | Kit 用户需留意商店 UI 新版交互；插件开发者可关注自动更新机制 |
| 依赖升级 | 未提及重大依赖变更 |

> **注**: Release Note 中 MCP fix 条目存在截断（`* fix(mcp): k`），建议维护者补全完整描述。

---

## 3. 项目进展

### 今日合并/关闭的 11 个 PR 功能图谱

```
主线交付（版本发布）
├── #2090 [release: 2026.5.28] ──► 73 commits 大版本合流
│   └── Kit 市场、Cowork 会话分叉、插件手动更新、MCP/Gateway/Artifacts 修复
│
├── #2089 [chore] minimax m3 模型接入 + BYOK 默认上下文窗口更新
│
├── #2088-#2087 [chore] Kits UI 迭代与性能优化
│
├── #2086 [fix] 微信更新/重装流程 Bug 修复
│
├── #2085 [feat] ⭐ Cowork 本地会话分叉 ──► 核心能力
│   └── 从任意助手消息分叉新本地会话，保留压缩上下文，支持长会话断点续用
│
├── #2084 [fix] Kits 卸载前确认弹窗 ──► 体验防错
│
├── #2083 [feat] 已安装 Kit 技能描述本地化 ──► 国际化
│
├── #2082 [chore] 日志增强
│
└── #2080 [chore] Kits 与文件上传 UI 优化
```

### 关键能力演进

| 能力域 | 进展 | 战略意义 |
|:---|:---|:---|
| **Kit 专家套件生态** | 商店 UI → 安装/卸载/本地化 → 对话集成 → 更新检查，形成**完整闭环** | 从"工具集合"升级为"可交易、可迭代的专业能力市场" |
| **Cowork 协作对话** | 新增**本地分叉**能力，突破线性对话限制 | 支持复杂工作流的分支探索与回溯，对标 Cursor/Claude 的会话管理 |
| **插件治理** | 手动更新 + 双源自动检查 | 降低第三方插件维护成本，提升安全性 |
| **IM 稳定性** | 微信更新/重装场景 Bug 修复 | 企业用户部署可靠性提升 |

**整体迈进评估**: 本月版本将 LobsterAI 从"单机会话工具"向"可扩展的 AI 工作平台"推进显著，Kit 生态与 Cowork 分叉构成差异化竞争力。

---

## 4. 社区热点

### 🔥 唯一活跃议题：订阅积分清零争议

| 项目 | 详情 |
|:---|:---|
| **Issue** | [#2081 订阅](https://github.com/netease-youdao/LobsterAI/issues/2081) |
| **作者** | @zjk648491625 |
| **状态** | 🟡 OPEN，1 条评论，0 👍 |
| **核心诉求** | **5500 订阅积分未使用即月底清零，质疑计费规则合理性** |

#### 用户原声
> "来搞笑的吧??? 我订阅的5500积分 还没用 月底直接清零了???"

#### 背后诉求分析

| 层次 | 解读 |
|:---|:---|
| **表层** | 积分有效期/清零规则未充分告知 |
| **深层** | 订阅制 SaaS 的"使用权 vs 所有权"认知冲突——用户认为付费即获得资源储备，平台采用"周期配额"模式 |
| **风险信号** | 付费用户信任受损，可能引发舆情或退款潮；截图证据表明用户保留维权意识 |

> **建议**: 需产品/运营侧紧急介入，明确积分规则说明位置（注册页？订阅页？），并考虑"积分结转"或"到期提醒"等缓和机制。

---

## 5. Bug 与稳定性

| 优先级 | 问题 | 来源 | 修复状态 | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **P1-用户阻塞** | 订阅积分清零争议（计费逻辑/规则透明度） | [#2081](https://github.com/netease-youdao/LobsterAI/issues/2081) | ❌ **无修复**，无官方回应 | 付费订阅用户信任 |
| 🟡 **P2-体验受损** | 微信更新/重装流程异常 | [#2086](https://github.com/netease-youdao/LobsterAI/pull/2086) | ✅ **已修复**（2026.5.28） | Windows 平台 IM 集成用户 |
| 🟡 **P2-体验受损** | Artifacts 本地文件缺失时无错误提示 | [#2073](https://github.com/netease-youdao/LobsterAI/pull/2073) | ✅ **已修复** | 使用本地文件生成内容的用户 |
| 🟢 **P3-预防性** | Kits 卸载无确认，易误操作 | [#2084](https://github.com/netease-youdao/LobsterAI/pull/2084) | ✅ **已修复** | Kit 市场用户 |

> **注**: 今日代码层面 Bug 修复充分，但 **P1 级计费争议属于商业规则/用户运营问题**，无技术 PR 可关联，需组织层面响应。

---

## 6. 功能请求与路线图信号

### 已落地功能（本月版本验证）

| 需求方向 | 实现 PR | 成熟度 |
|:---|:---|:---|
| 专家套件市场化（安装/卸载/更新/对话集成） | #2060, #2069, #2083, #2084, #2087-#2088, #2080 | **已发布** |
| 会话本地分叉（非线性对话管理） | #2085 | **已发布** |
| 插件自动更新机制 | #2069 | **已发布** |

### 待观察信号

| 信号 | 来源 | 可能性评估 |
|:---|:---|:---|
| **IM 多实例重复校验** | [#1464](https://github.com/netease-youdao/LobsterAI/pull/1464)（stale 状态，4月创建，昨日更新） | ⚠️ 中等 — 技术已完成，但长期未合并，可能因优先级或架构调整搁置 |
| **BYOK 模型上下文窗口动态配置** | #2089 | ✅ 已常态化维护，预计持续迭代 |
| **minimax m3 新模型接入** | #2089 | ✅ 模型供应商扩展策略持续 |

### 下一版本预测

基于交付节奏，2026.6.x 版本可能聚焦：
- Kit 生态：**评分/评论、付费分发、开发者工具链**
- Cowork：**分叉会话的合并/对比、团队协作分叉**
- 插件：**签名验证、沙箱隔离**（安全加固）

---

## 7. 用户反馈摘要

### 直接反馈（来自 Issues）

| 用户 | 场景 | 痛点 | 情绪 |
|:---|:---|:---|:---|
| @zjk648491625 | 月度订阅用户，持有 5500 积分 | **规则不透明**：清零前无提醒，购买时未明确"不用即作废" | 😤 愤怒/被欺骗感 |

### 间接反馈（来自 PR 设计推断）

| 用户群体 | 需求 | 项目响应 |
|:---|:---|:---|
| 专业/企业用户 | 需要可复用的专家工作流 | → Kit 商店 + 对话集成 |
| 长会话深度用户 | 线性对话无法满足探索性工作 | → 本地分叉能力 |
| 插件使用者 | 第三方插件版本混乱、更新滞后 | → 双源自动检查 + 手动更新 |
| 多语言用户 | Kit 技能描述英文理解成本高 | → 已安装技能描述本地化 |

### 满意度评估

| 维度 | 评分 | 依据 |
|:---|:---|:---|
| 功能迭代速度 | ⭐⭐⭐⭐⭐ | 月度大版本，73 commits |
| 技术稳定性 | ⭐⭐⭐⭐☆ | 主动修复微信、Artifacts、Kits 体验问题 |
| 付费透明度 | ⭐⭐☆☆☆ | 积分清零规则引发投诉，暴露说明缺失 |
| 社区响应 | ⭐⭐⭐☆☆ | 技术 Issue 处理快，用户运营 Issue 无响应 |

---

## 8. 待处理积压

### ⚠️ 高优先级关注项

| 项目 | 时长 | 风险 | 建议行动 |
|:---|:---|:---|:---|
| **[#1464](https://github.com/netease-youdao/LobsterAI/pull/1464) IM 多实例重复校验** | **2 个月**（2026-04-04 创建，stale 标签） | 钉钉/飞书/QQ 企业用户可能因重复实例导致消息重复处理，影响生产环境稳定性 | 维护者评估：是合并到 IM 重构分支，还是因架构变更废弃？需明确结论 |
| **[#2081](https://github.com/netease-youdao/LobsterAI/issues/2081) 订阅积分清零争议** | **1 天**（但情绪紧急） | 付费用户信任危机，可能扩散至社交媒体 | 产品运营 24h 内响应，提供规则说明截图位置，考虑补偿或规则调整 |

### 维护者提醒

> @netease-youdao/LobsterAI-maintainers  
> - **#1464** 的技术实现已完整（含校验逻辑、i18n、测试），建议尽快决策合并或关闭，避免贡献者流失。  
> - **#2081** 需跨团队（产品/法务/客服）协同，非纯技术问题，建议建立"用户权益"响应 SLA。

---

## 附录：数据速查

| 指标 | 数值 |
|:---|:---|
| Issues 更新 | 1（新开/活跃 1，关闭 0）|
| PRs 更新 | 12（待合并 1，已合并/关闭 11）|
| 版本发布 | 1（2026.6.1）|
| 核心贡献者 | @fisherdaddy（6 PRs）、@btc69m979y-dotcom（3 PRs）、@liuzhq1986（2 PRs）|
| 最活跃标签 | `area: renderer`（8 次）、`area: cowork`（5 次）、`area: main`（4 次）|

---

*本日报基于 GitHub 公开数据生成，未包含私有讨论或内部工单信息。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-06-02

> **项目**: moltis-org/moltis | **日期**: 2026-06-02 | **数据周期**: 2026-06-01 00:00 - 2026-06-02 00:00 UTC

---

## 1. 今日速览

Moltis 今日呈现**中等活跃度的代码清理与架构优化节奏**。过去24小时内无新增 Issues，4 条 PR 中有 3 条完成合并/关闭，1 条进入待评审状态。核心工作聚焦于**OpenAI 兼容层的工程债务清偿**（显式能力策略替代隐式 URL 检测）和**NEAR AI Cloud 新提供商接入**，同时 Codex 工具调用协议的边缘场景得到补全。项目整体健康度良好，合并速率稳定，但社区互动指标（👍/评论）处于低位，反映当前以核心贡献者驱动为主、外部用户参与度有限的状态。

---

## 2. 版本发布

**无新版本发布**

今日未发布任何 Release。近期功能积累（NEAR AI Cloud 支持、Codex 协议完善、工具结果持久化限制）尚未打包，推测维护者可能在等待 PR #1089 合并后形成更完整的特性集合。

---

## 3. 项目进展

### ✅ 已合并/关闭 PR（3 条）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#1090](https://github.com/moltis-org/moltis/pull/1090) | penso | **OpenAI 提供商能力策略显式化** | 消除基于 URL/名称的隐式行为推断，代之以注册时注入的 capability policy；降低新提供商接入的认知负担，减少"看起来像 OpenAI 实际行为不同"的 bug 类别 |
| [#1031](https://github.com/moltis-org/moltis/pull/1031) | PierreLeGuen | **NEAR AI Cloud 提供商接入** | 扩展多提供商矩阵至 TEE（可信执行环境）场景，支持 `NEARAI_API_KEY` 认证与模型目录自动发现；为隐私敏感型 AI 应用提供基础设施选项 |
| [#1088](https://github.com/moltis-org/moltis/pull/1088) | s-salamatov | **Codex 最终工具调用参数处理** | 补齐 OpenAI Codex 流式协议的边缘 case：当服务端直接下发完整参数而非增量 delta 时，正确合成流式事件；修复下游工具调用参数丢失导致的静默失败 |

**整体里程碑判断**：今日合并标志着 Moltis 在**"协议兼容性深度"**与**"提供商生态广度"**两个维度同步推进。PR #1090 的架构清理为后续更多 OpenAI 兼容提供商（如 PR #1031 的 NEAR AI）的快速接入奠定工程基础，形成"清理→扩展"的正向循环。

### 🔄 待合并 PR（1 条）

| PR | 作者 | 状态 | 阻塞风险 |
|:---|:---|:---|:---|
| [#1089](https://github.com/moltis-org/moltis/pull/1089) | s-salamatov | **OPEN** | 需代码评审；涉及会话历史 rehydration 的内存安全，建议优先处理 |

---

## 4. 社区热点

**今日无显著社区热点**

所有 PR 的 👍 数均为 0，评论数为 `undefined`（数据未采集或实际为零），Issues 活动为零。反映以下特征：

| 指标 | 数值 | 解读 |
|:---|:---|:---|
| 外部贡献者 PR | 1/3（PierreLeGuen 的 NEAR AI Cloud） | 存在生态伙伴驱动的功能接入 |
| 核心维护者自驱 PR | 2/3（penso, s-salamatov） | 技术债务主动清偿 |
| 社区互动 | 近乎静默 | 项目处于"工具库"使用模式，用户"拿来即用"而非参与共建 |

**潜在信号**：NEAR AI Cloud 的接入（[#1031](https://github.com/moltis-org/moltis/pull/1031)）可能吸引 Web3/去中心化 AI 开发者群体，但尚未转化为 GitHub 上的可见互动。建议维护者关注后续是否有相关生态的 Issue 涌入。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 来源 | Fix 状态 |
|:---|:---|:---|:---|
| 🔶 **中** | Codex 流式协议中，服务端直接下发完整 `function_call_arguments.done` 时，参数增量事件缺失导致下游处理中断 | PR #1088 修复 | **已合并** |
| 🔶 **中** | 会话历史 rehydration 时，`tool`/`tool_result` 内容无上限，可能导致超长上下文超出模型窗口或内存溢出 | PR #1089 修复 | **待评审** |
| 🟢 **低** | OpenAI 兼容提供商的隐式能力检测基于 URL 模式匹配，易误判（如自定义域名部署的 OpenAI 代理） | PR #1090 修复 | **已合并** |

**稳定性评估**：今日修复的均为**边缘场景下的确定性 bug**，非线上崩溃类问题。PR #1089 的内存安全修复建议优先合并，避免用户在大规模工具调用场景下遭遇 OOM。

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求推断 | 纳入下一版本可能性 |
|:---|:---|:---|
| PR #1031（NEAR AI Cloud） | 多提供商生态扩展，尤其 TEE/隐私计算场景 | ⭐⭐⭐⭐⭐ **高** — 已合并，将随下一版本发布 |
| PR #1089（工具结果上限） | 长会话/高频工具调用的生产级鲁棒性 | ⭐⭐⭐⭐⭐ **高** — 待合并，属于质量门槛型功能 |
| PR #1090（显式能力策略） | 架构可扩展性，为更多提供商铺路 | ⭐⭐⭐⭐☆ **中高** — 已合并，基础设施升级 |
| PR #1088（Codex 协议补全） | 追赶 OpenAI 最新协议演进 | ⭐⭐⭐⭐☆ **中高** — 已合并，协议兼容性维护 |

**路线图推测**：Moltis 正从"功能扩展期"转入"**质量加固与生态对接期**"。短期内（1-2 个 release）重点可能是：
1. 会话历史管理的内存安全（#1089 及后续）
2. 更多 Web3/去中心化 AI 提供商（跟随 NEAR AI 的模式）
3. Codex/Realtime 等新协议的持续跟进

---

## 7. 用户反馈摘要

**今日无可用用户反馈数据**

Issues 零活动、PR 评论为零，无法提炼真实用户痛点。基于代码变更反向推断用户场景：

| 变更 | 隐含用户场景 | 满意度风险 |
|:---|:---|:---|
| NEAR AI Cloud 支持 | 用户需要在 TEE 环境中运行 AI 代理，要求密钥管理与模型发现流程与现有 OpenAI 兼容层一致 | 低 — 新功能，无历史包袱 |
| Codex 参数合成 | 用户在使用 OpenAI Codex CLI/agent 模式时，遇到工具调用偶尔无响应 | **中** — 此前存在静默失败，修复前用户可能已流失或自行 workaround |
| 工具结果上限 | 用户在长时间运行的 agent 会话中遭遇上下文溢出或性能骤降 | **高** — 生产环境阻塞问题，修复紧迫性强 |

---

## 8. 待处理积压

| 项目 | 类型 | 创建时间 | 当前状态 | 提醒 |
|:---|:---|:---|:---|:---|
| PR #1089 | 待合并 PR | 2026-06-01 | **OPEN**，需代码评审 | ⚠️ **建议 24h 内响应** — 涉及内存安全，且作者 s-salamatov 今日已连续产出 #1088/#1089，处于高效贡献窗口期 |

**长期积压风险评估**：当前 Issues 总数未知（本日数据为零活跃），但 PR #1031 从创建（2026-05-21）到合并耗时 **11 天**，对于提供商接入类功能属于合理周期。未发现显著流程阻塞信号。

---

> **分析师备注**：Moltis 今日呈现"**健康的维护者驱动型项目**"特征——代码质量关注度高（主动重构）、协议跟进及时（Codex）、生态扩展有选择（NEAR AI）。关键缺口在于**社区互动层**：零 Issues、零评论、零反应，可能意味着文档/示例/讨论区建设需要加强，以降低用户反馈门槛，捕获更多真实使用场景。建议维护者考虑在 NEAR AI Cloud 功能发布后，配合发布者教程或集成案例，激活相关社区。

---

*本报告基于 GitHub API 公开数据生成，未包含私有讨论或外部沟通渠道信息。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-06-02

> **数据周期**：2026-06-01 00:00 - 2026-06-01 23:59 UTC+8  
> **项目地址**：github.com/agentscope-ai/CoPaw（原 QwenPaw）

---

## 1. 今日速览

CoPaw 今日维持**高活跃度运行**，24小时内产生 **50 条 Issues 更新**（32 活跃/新开，18 关闭）与 **35 条 PR 更新**（26 待合并，9 已合并/关闭），并发布 **v1.1.10 正式版及 beta.2 预发布版**。社区焦点集中在**定时任务系统稳定性**（session 隔离、幽灵任务清理）、**Windows 桌面端体验优化**（进程残留、启动性能、弹窗干扰）以及**多智能体场景下的 MCP 服务治理**。值得注意的是，一个针对 AgentScope 2.0 的重构 PR 已启动，预示底层架构可能发生重大升级。

---

## 2. 版本发布

### v1.1.10（正式版）
| 属性 | 内容 |
|:---|:---|
| **发布时间** | 2026-06-01 |
| **核心变更** | 新增 `spawn_subagent` 工具（工作区内临时子智能体执行）、Coding Mode 新增"Open Directory"标签页支持引用本地项目目录 |
| **关联 PR** | [#4867](https://github.com/agentscope-ai/QwenPaw/pull/4867) |

### v1.1.10-beta.2（预发布）
| 属性 | 内容 |
|:---|:---|
| **发布时间** | 2026-06-01 |
| **修复内容** | 官网 header 样式修复、视频自动续播；skill 标签保留及启用/禁用状态持久化 |
| **关联 PR** | [#4812](https://github.com/agentscope-ai/QwenPaw/pull/4812), [#4861](https://github.com/agentscope-ai/QwenPaw/pull/4861) |

> ⚠️ **迁移注意**：v1.1.10 修复了 [#4807](https://github.com/agentscope-ai/QwenPaw/issues/4807) 中"升级后内置技能启用状态丢失"的问题，但历史版本升级至 v1.1.10 前仍需手动备份技能配置。

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR

| PR | 作者 | 说明 | 项目推进 |
|:---|:---|:---|:---|
| [#4867](https://github.com/agentscope-ai/QwenPaw/pull/4867) | rayrayraykk | v1.1.10 版本发布及 Release Notes | 正式交付子智能体 spawning 与代码目录引用能力 |
| [#4849](https://github.com/agentscope-ai/QwenPaw/pull/4849) | wangfei010313 | **SharedMCPPool**：跨智能体复用 MCP 服务进程 | 解决 300+ 智能体场景下 MCP 进程爆炸问题，资源治理关键突破 |
| [#4839](https://github.com/agentscope-ai/QwenPaw/pull/4839) | heyxiong22-lang | 修复 Windows pip 升级后 `~` 前缀幽灵技能目录残留 | 消除技能池污染，升级体验净化 |

**整体评估**：今日合并聚焦**资源治理**（MCP 进程共享）与**升级体验修复**，正式版发布标志 v1.1.x 迭代进入稳定维护期。AgentScope 2.0 重构 PR 的启动（[#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846)）暗示长期技术债开始偿还。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---:|:---|:---|
| 1 | [#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) 定时任务与用户消息共享 session 导致任务被中断 | 9 | **核心架构缺陷**：cron 任务需独立的 session 隔离机制，避免用户消息抢占 | ✅ 已关闭 |
| 2 | [#4789](https://github.com/agentscope-ai/QwenPaw/issues/4789) 希望支持 Trae 式对话删除/回退及文件状态同步 | 9 | **IDE 级体验对标**：要求对话级版本控制、文件变更原子回退、沙箱精细化 | 🟡 开放中 |
| 3 | [#4808](https://github.com/agentscope-ai/QwenPaw/issues/4808) Agent [person_stat_skill] not exists | 7 | **技能注册机制困惑**：自定义 skill 按文档配置后无法被识别命中 | 🟡 开放中 |

### 诉求分析
- **#4653/#4789 形成对照**：前者代表"后台任务可靠性"的企业级需求，后者代表"前端交互精致度"的消费者级需求，CoPaw 正试图同时服务两类场景
- **#4789 的"照着 Trae 抄"直白表述** 反映用户对 AI IDE 体验基准的快速迁移，Cursor/Trae/Windsurf 正在重塑用户预期

---

## 5. Bug 与稳定性

| 严重等级 | Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#4835](https://github.com/agentscope-ai/QwenPaw/issues/4835) | `jobs.json` 单条无效任务导致整个工作区无法启动（校验过于严格） | 待响应 | 🟡 开放 |
| 🔴 **高** | [#4834](https://github.com/agentscope-ai/QwenPaw/issues/4834) | MCP 服务进程重启后未清理，多次重启后进程累积导致控制台加载缓慢 | [#4849](https://github.com/agentscope-ai/QwenPaw/pull/4849) | 🟡 部分修复（共享池） |
| 🟡 **中** | [#4872](https://github.com/agentscope-ai/QwenPaw/issues/4872) | 新 session 加载原始上下文未压缩，导致无限上下文膨胀 | 待响应 | 🟡 开放 |
| 🟡 **中** | [#4844](https://github.com/agentscope-ai/QwenPaw/issues/4844) | Windows 浏览器进程及临时目录锁 session 结束后未释放 | [#4853](https://github.com/agentscope-ai/QwenPaw/pull/4853) | 🟡 待合并 |
| 🟡 **中** | [#4864](https://github.com/agentscope-ai/QwenPaw/issues/4864) | v1.1.9 安装后发送消息无响应（DeepSeek/DashScope 均复现） | 已关闭，需验证 | ✅ 关闭 |
| 🟢 **低** | [#4880](https://github.com/agentscope-ai/QwenPaw/issues/4880) | Custom LiteLLM OpenAI provider 无法使用 ChatGPT Responses API 路由 | 待响应 | 🟡 开放 |

> **趋势观察**：Windows 平台成为今日 Bug 报告重灾区（进程管理、目录锁、升级残留），桌面端工程化债务显著。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 可行性信号 | 纳入下一版本概率 |
|:---|:---|:---|:---:|
| **模型降级链（Model Fallback Chain）** | [#4882](https://github.com/agentscope-ai/QwenPaw/issues/4882) | 现有 `RetryChatModel` + `RoutingChatModel` 可扩展；架构设计清晰 | ⭐⭐⭐⭐ 高 |
| **智能体级 Web 登录账户隔离** | [#4859](https://github.com/agentscope-ai/QwenPaw/issues/4859) | 现有认证为管理员导向，多租户改造需数据模型变更 | ⭐⭐⭐ 中 |
| **飞书交互卡片内容提取** | [#4879](https://github.com/agentscope-ai/QwenPaw/pull/4879) | **PR 已提交**，功能实现完整 | ⭐⭐⭐⭐⭐ 极高 |
| **MiniMax M3 模型内置支持** | [#4881](https://github.com/agentscope-ai/QwenPaw/pull/4881) | **PR 已提交**，仅配置表更新 | ⭐⭐⭐⭐⭐ 极高 |
| **QQ 扫码授权** | [#4848](https://github.com/agentscope-ai/QwenPaw/pull/4848) | **PR 已提交**，复用钉钉现有模式 | ⭐⭐⭐⭐ 高 |
| **对话级 Token 用量可视化** | [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) | **PR 待审 17 天**，功能完整但缺乏维护者响应 | ⭐⭐⭐ 中（积压风险） |
| **Windows 静默执行 Shell** | [#4777](https://github.com/agentscope-ai/QwenPaw/issues/4777) | 桌面端需求明确，需 Tauri 层改造 | ⭐⭐⭐ 中 |

### 路线图信号
- **AgentScope 2.0 重构 PR** ([#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846)) 标记为 `[Breaking Change] [WIP]`，长期看可能统一解决配置管理、模型路由、通道抽象等底层问题，但短期会冻结大量并行开发

---

## 7. 用户反馈摘要

### 😤 核心痛点

| 痛点 | 来源 Issue | 典型引述 |
|:---|:---|:---|
| **升级体验断裂** | [#4807](https://github.com/agentscope-ai/QwenPaw/issues/4807), [#4839](https://github.com/agentscope-ai/QwenPaw/issues/4839) | "每次更新完都要手动禁用一次内置技能" / "Windows 升级后幽灵技能目录残留" |
| **Windows 桌面端粗糙** | [#4777](https://github.com/agentscope-ai/QwenPaw/issues/4777), [#4844](https://github.com/agentscope-ai/QwenPaw/issues/4844), [#4733](https://github.com/agentscope-ai/QwenPaw/issues/4733) | "执行 shell 总是弹 cmd 窗口，非常干扰" / "重启后不恢复上次智能体和对话" |
| **定时任务不可靠** | [#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653), [#4818](https://github.com/agentscope-ai/QwenPaw/issues/4818), [#4878](https://github.com/agentscope-ai/QwenPaw/issues/4878) | "任务被用户消息中断" / "share_session=true 时执行轨迹为空" / "微信推送失败 ret=-3" |
| **配置调试困难** | [#4871](https://github.com/agentscope-ai/QwenPaw/issues/4871), [#4808](https://github.com/agentscope-ai/QwenPaw/issues/4808) | "max_input_length 设置了没效果，原来要配 active_model" / "按文档写的 skill 无法命中" |

### 😊 满意点
- **子智能体 spawning** 能力被期待（v1.1.10 发布）
- **多通道支持**（微信、飞书、QQ、Telegram、企微）持续扩展，企业集成场景覆盖广

### 💡 使用场景洞察
- **"育儿经验提醒"**（#4653）揭示个人/家庭自动化场景与专业开发场景的 session 隔离需求冲突
- **"300+ 智能体 MCP 进程爆炸"**（#4842）反映 CoPaw 正被用于超大规模多智能体编排，超出最初设计容量

---

## 8. 待处理积压

> 以下 Issue/PR 已长期未获维护者响应，存在**价值衰减**或**社区挫败感**风险

| 积压项 | 创建时间 | 当前状态 | 风险说明 |
|:---|:---|:---|:---|
| [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) Token 用量可视化 | 2026-05-15 | **待审 17 天** | 功能完整、UI 就绪，缺乏代码审查；贡献者可能流失 |
| [#4154](https://github.com/agentscope-ai/QwenPaw/issues/4154) 字体大小调节/后台服务模式/可点击文件路径 | 2026-05-09 | **开放 23 天** | 桌面端基础体验，用户呼声持续但无响应 |
| [#4824](https://github.com/agentscope-ai/QwenPaw/issues/4824) ACP 协议与 Claude Code 不兼容 | 2026-05-30 | **开放 2 天，技术深度高** | 协议层兼容性问题，需核心维护者介入，延迟将阻碍 MCP 生态互通 |
| [#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846) AgentScope 2.0 重构 | 2026-06-01 | **[WIP] 标记** | 破坏性变更，需明确迁移时间表以协调社区开发节奏 |

---

**日报生成时间**：2026-06-02 00:00 UTC+8  
**数据完整性声明**：基于 GitHub API 公开数据，Issues/PR 摘要可能存在截断，关键细节建议访问原始链接核实。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-06-02

**项目**: [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)  
**日期**: 2026-06-02  
**分析周期**: 过去24小时（2026-06-01 至 2026-06-02）

---

## 1. 今日速览

今日 ZeptoClaw 展现出**高维护活跃度、低社区参与度**的典型特征。18 个 PR 中 17 个为 dependabot 自动化依赖更新及合并，仅 1 个人工 PR 待合并（#611），同时 1 个新 Issue #612 对二进制体积控制提出更高要求。核心维护者 qhkm 主导了 CI 基础设施升级与 RUSTSEC 安全漏洞清理，但无外部社区成员的新功能贡献或深度讨论。项目处于**稳健维护期**，依赖生态保持最新，但战略层面的体积优化压力正在上升。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#610](https://github.com/qhkm/zeptoclaw/pull/610) | qhkm | **修复关键生产 Bug**：关键词回退机制错误声明未配置的 provider | 消除 NIM 服务 Photon 实例 100% 错误率；修复 `infer_provider_name_for_model` 忽略 `available_providers` 的缺陷 |
| [#594](https://github.com/qhkm/zeptoclaw/pull/594) | qhkm | **安全基线修复**：升级 lettre 0.11.22、diesel 2.3.8 清除 6 项 RUSTSEC 告警 | 解除零容忍安全策略下的全仓库 CI 阻塞，恢复 PR 合并能力 |
| [#592](https://github.com/qhkm/zeptoclaw/pull/592) | Sisuthros | 原始 Bug 修复（#610 的上游来源） | 社区贡献经 cherry-pick 后合入，保留作者归属 |

### 批量依赖现代化（14 项自动化 PR 全部关闭）

| 类别 | PR 列表 | 覆盖范围 |
|:---|:---|:---|
| **Rust 核心依赖** | [#601](https://github.com/qhkm/zeptoclaw/pull/601), [#603](https://github.com/qhkm/zeptoclaw/pull/603), [#605](https://github.com/qhkm/zeptoclaw/pull/605), [#606](https://github.com/qhkm/zeptoclaw/pull/606), [#598](https://github.com/qhkm/zeptoclaw/pull/598) | uuid, mail-parser, clap, tower-http, bcrypt |
| **JavaScript/文档站点** | [#599](https://github.com/qhkm/zeptoclaw/pull/599), [#602](https://github.com/qhkm/zeptoclaw/pull/602), [#600](https://github.com/qhkm/zeptoclaw/pull/600), [#607](https://github.com/qhkm/zeptoclaw/pull/607), [#608](https://github.com/qhkm/zeptoclaw/pull/608) | Astro 6.3.x, Starlight 0.39.2, ESLint 10.3.0 |
| **CI/CD 工具链** | [#604](https://github.com/qhkm/zeptoclaw/pull/604), [#597](https://github.com/qhkm/zeptoclaw/pull/597) | taiki-e/install-action, cargo-deny-action |
| **容器基础镜像** | [#596](https://github.com/qhkm/zeptoclaw/pull/596), [#595](https://github.com/qhkm/zeptoclaw/pull/595) | Rust 1.93→1.95, Debian trixie-slim 最新 digest |

**整体进展评估**: 今日合并的 #610/#594 解决了**生产级稳定性与安全合规**两大硬约束，依赖矩阵全面刷新至 2026-06 最新状态。项目技术债务处于低位，但二进制体积控制成为新的战略瓶颈。

---

## 4. 社区热点

> **注**：今日所有 Issues/PR 评论数均为 0 或 undefined，👍 反应数为 0，**无典型社区热点**。以下分析基于内容重要性推断。

| 条目 | 链接 | 隐含诉求分析 |
|:---|:---|:---|
| **#612 二进制体积审计** | [Issue #612](https://github.com/qhkm/zeptoclaw/issues/612) | **核心矛盾暴露**: 7MB 战略目标 vs 6.98MB 实际值（仅 21KB 余量）。维护者主动将 #611 的 gate 放宽至 7.5MB 是**战术妥协**，Issue #612 的提出表明 qhkm 意图**逆转这一妥协**、重建更严格的体积预算。诉求本质是：在功能增长与"zeptoclaw"品牌暗示的轻量性之间找到可持续平衡。 |
| **#611 PR gate 升级** | [PR #611](https://github.com/qhkm/zeptoclaw/pull/611) | 将二进制体积从"事后测量"转为"准入门槛"，但 7.5MB 天花板与 #612 的 7MB 目标存在**0.5MB 政策缺口**，是当前最需要维护者决策的争议点。 |

---

## 5. Bug 与稳定性

| 严重程度 | 条目 | 状态 | 详情 |
|:---|:---|:---|:---|
| 🔴 **P0-生产崩溃** | [#610](https://github.com/qhkm/zeptoclaw/pull/610) / [#592](https://github.com/qhkm/zeptoclaw/pull/592) | **已修复** | NIM 服务 `openai/gpt-oss-120b` 模型 100% 错误率；根因：`infer_provider_name_for_model` 关键词回退未校验 `available_providers` |
| 🟡 **P1-安全合规阻塞** | [#594](https://github.com/qhkm/zeptoclaw/pull/594) | **已修复** | 6 项 RUSTSEC 告警导致 `cargo-deny` 零容忍策略下全仓库 CI 失败 |
| 🟢 **P2-体积回归风险** | [#612](https://github.com/qhkm/zeptoclaw/issues/612) | **待处理** | 自 6.2MB 低点漂移 ~800KB，当前 6.98MB 逼近 7MB 红线；无直接修复 PR，需系统性审计 |

**健康度评估**: 生产稳定性问题响应迅速（#592 报告至 #610 关闭约 12 天，含 cherry-pick 流程），安全漏洞修复机制有效。当前无未修复的高危 Bug。

---

## 6. 功能请求与路线图信号

| 信号来源 | 类型 | 纳入下一版本可能性 | 分析 |
|:---|:---|:---|:---|
| [#612 体积审计](https://github.com/qhkm/zeptoclaw/issues/612) | 工程效能/品牌约束 | **高** | 由维护者主动发起，与项目"zepto-"（10⁻²¹，极微量）命名语义强相关；预计触发代码生成优化、feature flag 精简、或依赖裁剪 |
| [#611 7.5MB gate](https://github.com/qhkm/zeptoclaw/pull/611) | CI 基础设施 | **中-高** | 可能被修订为 7MB 或阶梯式 gate（警告@7MB / 阻塞@7.5MB） |

**无外部用户功能请求**。项目当前方向由维护者主导，聚焦**工程卓越性**而非功能扩张。

---

## 7. 用户反馈摘要

> **今日无用户评论数据**。从 Issue/PR 内容间接推断：

| 维度 | 观察 |
|:---|:---|
| **痛点** | 生产环境中模型 provider 解析的"静默错误"——配置未生效时无明确报错，导致 100% 错误率的级联故障（#610） |
| **使用场景** | NIM (NVIDIA Inference Microservices) 托管的 Photon 实例，模型 ID 采用 `openai/gpt-oss-120b` 这类跨 provider 命名空间格式 |
| **满意度信号** | 依赖自动化程度高（dependabot 批量处理无冲突），安全策略严格（RUSTSEC 零容忍） |
| **不满意信号** | 二进制体积增长可能削弱"轻量 AI 助手"定位的竞争力；7.5MB gate 被视为临时妥协而非长期方案 |

---

## 8. 待处理积压

| 条目 | 创建时间 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|
| [#611](https://github.com/qhkm/zeptoclaw/pull/611) | 2026-06-01 | 与 #612 的 7MB 目标存在政策冲突 | **维护者决策 needed**: 合并为 7.5MB 临时方案，或修订为 7MB 并配套体积削减计划 |
| ~~#592~~ | 2026-05-20 | ~~原始 fork 无法 rebase~~ | ~~已通过 #610 解决，可关闭~~ ✅ |

**风险提醒**: #611 若长期悬置，可能导致：
- 7.5MB 标准被默认接受，7MB 战略目标虚化
- 或 #612 无关联 PR，体积审计沦为无行动跟踪的议题

---

## 附录：数据验证

| 指标 | 数据 | 状态 |
|:---|:---|:---|
| Issues 更新 | 1 新开 (#612), 0 关闭 | ✅ 匹配 |
| PRs 更新 | 1 待合并 (#611), 17 已合并/关闭 | ✅ 匹配 |
| Releases | 0 | ✅ 匹配 |
| 人工贡献者 | qhkm, Sisuthros | 2 人 |
| 自动化贡献 | dependabot[bot] | 14 项 PR |

---

*本日报基于 GitHub 公开数据生成，未包含私有讨论或外部沟通渠道信息。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-06-02

## 1. 今日速览

ZeroClaw 今日维持**高活跃度开发节奏**：24小时内 Issues 更新 36 条（28 活跃/新开，8 关闭），PR 更新 37 条（24 待合并，13 已合并/关闭），无新版本发布。社区焦点集中在 **v0.8.0-beta-2 集成冲刺**（PR #6848）与 **v0.7.6 技能系统完善**两条主线上。安全与稳定性方面，渠道层（channel）和 Provider 兼容层仍是 Bug 高发区，但修复响应迅速——今日 8 个关闭 Issues 中 7 个有对应 PR 合并。整体健康度：**活跃开发期，合并吞吐健康，但 XL 级集成 PR 阻塞部分路线图功能**。

---

## 2. 版本发布

**无新版本发布**

> 注：PR #6848 明确标注为 **v0.8.0-beta-2 基础分支**，待合并后将触发预发布标签。当前 `master` 仍停留在 v0.7.x 系列。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR（13 条中的关键项）

| PR | 作者 | 核心变更 | 项目推进意义 |
|:---|:---|:---|:---|
| [#7049](https://github.com/zeroclaw-labs/zeroclaw/pull/7049) | Yyukan | **修复 Kimi-K2 模型 400 错误**：`compatible.rs` 对 `kimi-k2.5/k2.6` 省略 `temperature` 字段 | 解除 Moonshot/Kimi 用户工作流阻塞；对应关闭 Issue [#7022](https://github.com/zeroclaw-labs/zeroclaw/issues/7022) |
| [#7031](https://github.com/zeroclaw-labs/zeroclaw/pull/7031) | Audacity88 | **Discord 渠道安全加固**：投递失败日志脱敏，移除原始 marker targets | 减少敏感信息泄露面 |
| [#6983](https://github.com/zeroclaw-labs/zeroclaw/pull/6983) | Audacity88 | **流式错误恢复**：`turn_streamed` 在客户端可见前失败时回退非流式路径 | 恢复 #4675 的可靠性保证，保守策略避免用户可见抖动 |
| [#6979](https://github.com/zeroclaw-labs/zeroclaw/pull/6979) | Audacity88 | **Email 渠道 SMTP 凭证回退修复**：空字符串视为未设置 | 关闭 Issue [#6881](https://github.com/zeroclaw-labs/zeroclaw/issues/6881)，解决配置覆盖误用 |
| [#6974](https://github.com/zeroclaw-labs/zeroclaw/pull/6974) | Audacity88 | **web_fetch 私有 DNS 白名单**：`allowed_private_hosts` 显式条目绕过公网 IP 校验 | 企业内网部署关键修复，安全与功能平衡 |
| [#6972](https://github.com/zeroclaw-labs/zeroclaw/pull/6972) | Audacity88 | **image_info 路径策略修复**：通过 `PathGuardedTool` 重新接入路径安全策略 | 补全 #6074 回滚审计遗漏，关闭 #3774 残余问题 |
| [#6931](https://github.com/zeroclaw-labs/zeroclaw/pull/6931) | Audacity88 | **渠道日期上下文恢复**：wall-clock 改为 date+UTC offset，减少缓存抖动 | 恢复 #3271 功能切片，优化运行时性能 |
| [#6904](https://github.com/zeroclaw-labs/zeroclaw/pull/6904) | Audacity88 | **精简默认渠道包**：仅保留 ACP server、webhook、email、Telegram | 控制二进制体积增长，长尾渠道移出核心默认构建 |
| [#6833](https://github.com/zeroclaw-labs/zeroclaw/pull/6833) | h03-xydt | **Jina AI 搜索提供商**：新增 `jina_api_key` 配置与路由 | 关闭 Issue [#6827](https://github.com/zeroclaw-labs/zeroclaw/issues/6827)，免费 tier 友好 |

**整体推进评估**：今日合并以**"修复+精简"**为主轴——Audacity88 单日产出 7 个合并 PR，集中清理渠道层债务与 #6074 大规模回滚后的残余问题。v0.7.6 的稳定性基础进一步夯实，但 XL 级集成 PR #6848 仍待合并，是 v0.8.0-beta-2 的主要阻塞项。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| 1 | **Token 消耗最小化：Skill 编译机制** | 8 | 每次天气查询注入 400+ 行 SKILL.md 的浪费；要求预编译/压缩技能提示 | [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) |
| 2 | **Ollama Provider 工具调用崩溃** | 6 | 本地模型 + 工具场景会话级阻塞；S1 严重度 | [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) |
| 3 | **Discord 频道白名单限制** | 6 | 与 Matrix/Nextcloud 的 `allowed_rooms` 模式对齐；多租户场景刚需 | [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) |
| 4 | **Gemini 400：历史序列化违反约束** | 4 | assistant tool_call 不能作为首个非 system turn；LiteLLM 兼容层缺陷 | [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) |

**诉求分析**：
- **#5146** 反映**成本敏感型用户**的深层焦虑：技能系统的设计假设（全量注入）与云 LLM 按 token 计费模型直接冲突。该 Issue 被标记 `status:accepted` 但 `priority:p2`，存在优先级与商业影响不匹配的张力。
- **#5962 / #6302** 暴露 **Provider 兼容层的系统性脆弱**：Ollama（本地）和 Gemini（Google）均因 LiteLLM/`compatible.rs` 的序列化假设而断裂，说明"兼容层统一抽象"策略在边缘 case 上代价高昂。
- **#6378** 属于 **v0.8 多租户/企业化路线图** 的配套需求，与 PR #7041（Linq 多租户）形成功能矩阵。

---

## 5. Bug 与稳定性

### 今日活跃 Bug（按严重度排列）

| 严重度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| **S1 - 工作流阻塞** | [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) | `in-progress` | Gemini 400：历史序列化违反约束 | 无明确 PR |
| **S1** | [#5155](https://github.com/zeroclaw-labs/zeroclaw/issues/5155) | `in-progress` | Delegate agents 无视 `prompt_injection_mode=compact`，始终全量注入技能 | 无明确 PR |
| **S1** | ~~[#7022](https://github.com/zeroclaw-labs/zeroclaw/issues/7022)~~ | ✅ **已关闭** | Kimi-K2 温度参数 400 | [#7049](https://github.com/zeroclaw-labs/zeroclaw/pull/7049) |
| **S1** | ~~[#6881](https://github.com/zeroclaw-labs/zeroclaw/issues/6881)~~ | ✅ **已关闭** | Email SMTP 空凭证覆盖导致认证失败 | [#6979](https://github.com/zeroclaw-labs/zeroclaw/pull/6979) |
| **S2 - 降级行为** | [#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472) | `in-progress` | Gateway PostgreSQL 内存后端崩溃：`Cannot start a runtime from within a runtime` | 无明确 PR |
| **S2** | [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) | `in-progress` | WhatsApp Web `allowed-numbers` 被 LID 联系人绕过，消息静默丢弃 | 无明确 PR |
| **S2** | [#7059](https://github.com/zeroclaw-labs/zeroclaw/issues/7059) | 新开 | 渠道编排器虚构"默认模型提供商"概念，与 V3 Schema 冲突 | [#7066](https://github.com/zeroclaw-labs/zeroclaw/pull/7066) **已开 PR** |
| **S2** | [#7068](https://github.com/zeroclaw-labs/zeroclaw/issues/7068) | 新开 | Telegram 渠道将 Codex scratchpad/工具转录作为最终响应发出 | 无明确 PR |
| **S3 - 轻微** | [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) | `in-progress` | 渠道运行时命令回复硬编码英文，绕过 Fluent 本地化 | 无明确 PR |

**关键信号**：
- **今日新开 2 个 S2 级 Bug**（#7059、#7068）均与**渠道-模型编排层**相关，反映 v0.8 Schema 迁移的阵痛。
- **PostgreSQL 运行时嵌套崩溃**（#6472）是 Rust async 运行时经典陷阱，修复复杂度可能较高。
- **WhatsApp LID 绕过**（#6350）属于安全-隐私交叉问题，静默丢弃行为对运营可见性伤害大。

---

## 6. 功能请求与路线图信号

### 高优先级功能请求（`priority:p1`）

| Issue | 主题 | 路线图关联 | 纳入可能性评估 |
|:---|:---|:---|:---|
| [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) | v0.7.6 技能支持与 UX 协调跟踪 | **v0.7.6 发布主题** | ⭐⭐⭐ 已接受，协调中 |
| [#6250](https://github.com/zeroclaw-labs/zeroclaw/issues/6250) | 认证中间件化：`require_auth` 从 per-handler 提至 route-layer | 安全架构债务 | ⭐⭐⭐ 已接受，依赖 #6848 |
| [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) | Gemini 历史序列化修复 | Provider 兼容 | ⭐⭐⭐ `in-progress` |
| [#6345](https://github.com/zeroclaw-labs/zeroclaw/issues/6345) | 单渠道回复最小间隔（节流） | 渠道治理 | ⭐⭐⭐ `in-progress` |
| [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) | WhatsApp 安全修复 | 渠道安全 | ⭐⭐⭐ `in-progress` |
| [#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) | Agent 评估框架 `zeroclaw eval` | 质量基础设施 | ⭐⭐⭐ **今日新开**，PR #7067 已同步提交 Phase 0 |

### 路线图信号解读

- **v0.8.0-beta-2 阻塞项**：PR #6848（XL 级，评论 `undefined` 暗示可能为草稿/复杂冲突）是最大不确定性。其包含的 TUI、RPC socket、DenyWithEdit 审批等功能是后续多项 Issue 的基础设施。
- **评估基础设施萌芽**：Issue #7065 + PR #7067 组合显示项目正从"能跑"向"可验证"演进，对生产化部署至关重要。
- **WASI/插件架构**：PR #7060（WIT 接口定义）是 [FND-001 5.2](https://docs.zeroclawlabs.ai/en/foundations/fnd-001-intentional-architecture.html#52-plugin-interface-wasi-and-wit) 的第一步，长期架构信号明确。

---

## 7. 用户反馈摘要

### 提炼自 Issues 的真实痛点

| 痛点领域 | 具体表现 | 来源 Issue |
|:---|:---|:---|
| **Token 成本焦虑** | "每次问天气都发 400+ 行 SKILL.md"——技能系统的提示膨胀直接转化为云 LLM 账单 | #5146 |
| **本地模型可靠性** | Ollama + 工具 = 会话崩溃，用户被迫重启整个 daemon | #5962 |
| **企业部署摩擦** | 私有 CA TLS 证书无法配置；内网 DNS 被公网 IP 校验拦截 | #5797, #6974 |
| **多租户/隔离缺失** | Discord 无法限制频道；WhatsApp LID 绕过号码白名单 | #6378, #6350 |
| **配置认知负担** | SMTP 覆盖空字符串 vs 未设置的行为不一致；V3 Schema 与遗留"默认提供商"概念冲突 | #6881, #7059 |
| **国际化盲区** | 渠道运行时硬编码英文，非英语用户感知差 | #6548 |

### 满意点
- **Jina AI 免费 tier** 受社区欢迎（#6827 → #6833 快速落地）
- **Audacity88 的修复响应速度** 形成正向预期（单日 7 PR 合并）

---

## 8. 待处理积压

### 需维护者关注的高风险长期 Issue

| Issue | 创建日期 | 最后更新 | 风险 | 提醒原因 |
|:---|:---|:---|:---|:---|
| [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) 技能编译降 Token | 2026-03-29 | 2026-06-01 | 🔴 **商业可持续性** | 创建 64 天，`priority:p2` 与成本影响不匹配；评论最多但无 assignee |
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) `.well-known` URI 安装技能 | 2026-03-27 | 2026-06-01 | 🟡 生态标准化 | Agent Skills 工作组标准推进中，Cloudflare/Vercel 已采纳，ZeroClaw 滞后 |
| [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) 真实心跳跟踪 | 2026-05-05 | 2026-06-01 | 🔴 生产可靠性 | `status:blocked`，但无阻塞原因说明；与 #6346 节点管理功能耦合 |
| [#6390](https://github.com/zeroclaw-labs/zeroclaw/issues/6390) `zeroclaw node add` CLI | 2026-05-05 | 2026-06-01 | 🟡 多机舰队 | `status:blocked`，依赖 #6346 未完成的节点基础设施 |
| [#5797](https://github.com/zeroclaw-labs/zeroclaw/pull/5797) TLS CA 自定义证书 | 2026-04-16 | 2026-06-01 | 🟡 企业采用 | PR 开放 46 天，无合并信号；企业部署刚需 |

### 特别警示
- **PR #6848** 作为 XL 级变更集，若继续阻塞，将连锁影响 #6250（认证中间件化）、#6365（Dashboard 更新按钮）、#6390（节点注册 CLI）等 `status:blocked` 或 `status:accepted` 项的交付节奏。建议维护者评估是否可拆分为独立可合并的子 PR。

---

*日报生成时间：2026-06-02 | 数据来源：ZeroClaw GitHub 仓库公开活动*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*