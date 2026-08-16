# OpenClaw 生态日报 2026-08-16

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-08-15 23:11 UTC

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

# OpenClaw 项目日报 — 2026-08-16

## 今日速览

过去 24 小时项目活跃度处于极高水平：Issues 更新 500 条（480 条新开/活跃、20 条关闭），PR 更新 500 条（其中 52 条合并/关闭），并发布了 v2026.8.1-beta.2 新版本。新版本侧重安全加固（Secret egress host binding）与 GPT-5.6 Ultra 运行时支持，同时安全策略警告确认机制（CLI + Control UI）今日正式合并。不过社区热度集中在 P1 级稳定性问题上：Codex hook CPU 占用、DeepSeek cron 停摆、Gemini 回归等多个获评 “platinum hermit” 的问题持续发酵。PR 合并率仅约 10%（52/500），审查积压明显；P1 级未修复问题存量约 20 个。整体判断：项目迭代速度与社区参与度极高，但稳定性债务与维护瓶颈同步上升，健康度处于“高活跃、高负载”状态。

---

## 版本发布

### v2026.8.1-beta.2

**发布说明摘要：**

- **Secret egress host binding（安全增强）**：将 shared-store secret 精确绑定到目标 HTTPS 主机，覆盖 CLI、Gateway RPC 与 Control UI 三条路径。未绑定的 sentinel 替换将在明文出口前 fail closed，防止 secret 泄露。感谢 @shakkernerd。
- **GPT-5.6 Ultra 与运行时切换**：发布说明提及该能力，但原文在此截断，完整变更内容需查看 [Release 页面](https://github.com/openclaw/openclaw/releases)。

**注意事项**：此为 beta 版本，涉及安全边界逻辑变更，生产环境升级前建议在 staging 验证 secret 绑定行为；同时确认插件/通道与核心版本对齐，避免出现 [#83337](https://github.com/openclaw/openclaw/issues/83337) 所报告的版本漂移问题。

---

## 项目进展

今日样本中合并/关闭的 PR 不多，但安全链路有实质性推进：

- **安装策略警告确认机制（CLI）合并**：[PR #116489](https://github.com/openclaw/openclaw/pull/116489) 已关闭。`security.installPolicy` 命令可返回 `warn`，交互式 CLI 安装会展示受限原因与发现项，并要求操作者输入精确目标名称确认后才继续。
- **安装策略警告确认机制（Control UI）合并**：[PR #120900](https://github.com/openclaw/openclaw/pull/120900) 已关闭。管理员可在 Web UI 中审查安装策略警告并显式确认继续插件安装，形成 CLI + UI 双端闭环。
- **测试基建去重**：[PR #124297](https://github.com/openclaw/openclaw/pull/124297) 已关闭，合并了 release-workflow 中超时评估器的重复逻辑，属于维护性改进。
- **积压 issue 消化**：[Issue #113181](https://github.com/openclaw/openclaw/issues/113181)（cron `delivery.mode="none"` + isolated agent 静默 no-op）已关闭，说明该 P1 问题已获处理。

值得关注的进行中 PR（尚未合并但方向明确）：

- **Windows cron 停摆修复**：[PR #124293](https://github.com/openclaw/openclaw/pull/124293) 解决 Windows 上所有 cron 任务因持久化 fence 无法读取进程身份而停止运行的严重问题（closes #124125）。
- **MSTeams 多 bot 支持**：[PR #112811](https://github.com/openclaw/openclaw/pull/112811) 允许同一 Gateway 配置多个 Teams bot 身份，已有截图证据，等待作者更新。

---

## 社区热点

今日讨论热度最高的 issue 集中在运行时稳定性与模型兼容性：

- **[#91009 Codex PreToolUse hook 派生 CPU-bound 进程（20 评论）](https://github.com/openclaw/openclaw/issues/91009)** — P1 / platinum hermit。Codex 集成在每次 `pre_tool_use` 事件时派生多个 `openclaw-hooks relay` 进程，每个进程 CPU 占用 100%+，并阻塞 Gateway RPC。背后诉求：自托管 hook 中继的进程模型需要重新设计，而不是简单增加超时。
- **[#121953 DeepSeek cron 任务停摆（19 评论）](https://github.com/openclaw/openclaw/issues/121953)** — P1 / platinum hermit。OpenClaw 为 cron 消息添加的 `[cron:<jobId> <jobName>]` 前缀导致 DeepSeek 边缘服务将请求降级，任务停顿数十秒。用户希望前缀可配置或调整发送策略。
- **[#79902 SQLite transcript/session seams（13 评论）](https://github.com/openclaw/openclaw/issues/79902)** — P3 功能请求。高级用户希望基于数据库优先的运行时构建可组合的 transcript/session 接口，而不是解析不透明 blob。
- **[#69208 跨渠道重复 transcript/replay/context 问题总括（13 评论）](https://github.com/openclaw/openclaw/issues/69208)** — P1 umbrella issue。MSTeams、webchat、Telegram、followup queue 等多条路径存在同类重复上下文问题，社区需要一个统一修复视角。
- **[#51429 工作路径被硬编码（13 评论）](https://github.com/openclaw/openclaw/issues/51429)** — 中文用户发现代码中硬编码了 `/Users/wangtao` 路径且被合并发布，引发对代码审查流程的质疑。
- **[#38327 Gemini 3.1 Pro 回归：Cannot convert undefined or null to object（13 评论）](https://github.com/openclaw/openclaw/issues/38327)** — P1 / platinum hermit。2026.3.2 起 google-vertex/gemini-3.1-pro-preview 全线不可用，影响面大。

**分析**：社区热点呈现三个主题——进程/资源管理、模型供应商兼容性、渠道消息可靠性。三者都直接威胁生产可用性，建议维护者优先响应有 “platinum hermit” 评级的 P1 问题。

---

## Bug 与稳定性

以下为今日活跃的重要 Bug（按严重程度排序，标注是否有 fix PR 跟进）：

### P0 — 紧急

| Issue | 描述 | 状态 |
|---|---|---|
| [#70903](https://github.com/openclaw/openclaw/issues/70903) | 持久化文件级 provider cooldown 在用户充值恢复后仍阻塞数小时 | 无 fix PR，且标记 `stale`，**需优先处理** |

### P1 — 高风险（无 fix PR）

| Issue | 描述 | 备注 |
|---|---|---|
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex hook relay CPU 占用 100%+，阻塞 Gateway RPC | platinum，20 评论 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | Gemini 3.1 Pro “Cannot convert undefined or null to object” | platinum，13 评论 |
| [#103231](https://github.com/openclaw/openclaw/issues/103231) | claude-cli 后端 `ownsNativeCompaction` 假设错误，会话无限增长 | platinum，8 评论 |
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | 跨渠道重复 transcript/replay/context（umbrella） | 13 评论 |
| [#86214](https://github.com/openclaw/openclaw/issues/86214) | Codex app-server 客户端中途关闭，image 请求丢失 | 8 评论 |
| [#78493](https://github.com/openclaw/openclaw/issues/78493) | `sudo openclaw update` 造成混合文件所有权，doctor 覆盖配置 | 7 评论 |
| [#83337](https://github.com/openclaw/openclaw/issues/83337) | 插件与核心版本漂移导致通道静默失败 | 7 评论 |
| [#92633](https://github.com/openclaw/openclaw/issues/92633) | `memory_search corpus="all"` 超时，各子 corpus 正常 | 7 评论 |
| [#43374](https://github.com/openclaw/openclaw/issues/43374) | 4 个并发 agent 时所有 LLM 调用同时超时 | 7 评论 |
| [#55694](https://github.com/openclaw/openclaw/issues/55694) | 工具调用失败死循环，向用户刷屏重复消息 | 6 评论 |
| [#84662](https://github.com/openclaw/openclaw/issues/84662) | Codex 每次 turn 写入运行时上下文，导致 `response.create` 输入失控增长 | 6 评论 |
| [#118793](https://github.com/openclaw/openclaw/issues/118793) | Claude CLI session limit 报错不触发 fallback 链 | 6 评论 |
| [#79293](https://github.com/openclaw/openclaw/issues/79293) | 微信 proactive 发送报告成功但用户看到“请稍后再试” | 6 评论 |
| [#49381](https://github.com/openclaw/openclaw/issues/49381) | 飞书主模型限流后 fallback 产生重复最终回复 | 6 评论 |
| [#123799](https://github.com/openclaw/openclaw/issues/123799) | 生产环境受 Codex compact 404 影响，急需升级/回滚指南 | 6 评论 |

### P1 — 已有 PR 跟进

| Issue | 描述 | 跟进 PR |
|---|---|---|
| [#121953](https://github.com/openclaw/openclaw/issues/121953) | DeepSeek cron 停摆 | 已有 linked PR |
| [#41744](https://github.com/openclaw/openclaw/issues/41744) | 飞书 read image 结果在 outbound 前丢失媒体 | 已有 linked PR |
| [#119087](https://github.com/openclaw/openclaw/issues/119087) | Gateway 冷启动回归 2.5x（1-vCPU 容器） | 已有 linked PR |
| [#94939](https://github.com/openclaw/openclaw/issues/94939) | 6.x state migration 使 channel SQLite 为 0 字节 | 已有 linked PR |
| [#90378](https://github.com/openclaw/openclaw/issues/90378) | cron 迁移 SQLite 后默认 `delivery.mode=announce` 导致报错 | 已有 linked PR |
| [#123073](https://github.com/openclaw/openclaw/issues/123073) | dev-channel 更新失败：`EUNSUPPORTEDPROTOCOL workspace:*` | queueable，PR 待验证 |

### P2 — 关注

- [#51429](https://github.com/openclaw/openclaw/issues/51429) 工作路径硬编码（13 评论）
- [#50165](https://github.com/openclaw/openclaw/issues/50165) 子代理在委托工作完成前显示已完成（8 评论）
- [#116512](https://github.com/openclaw/openclaw/issues/116512) Telegram progress 首条 commentary 重复（9 评论）
- [#77930](https://github.com/openclaw/openclaw/issues/77930) Discord 通道回归：5.4-beta.2 起不加载，beta.1 正常（6 评论，已有 linked PR）

---

## 功能请求与路线图信号

以下功能请求今日讨论活跃，可能进入下一版本候选：

| Issue | 功能 | 优先级 | 热度 | 信号 |
|---|---|---|---|---|
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | 完全动态的模型发现（OpenRouter 等） | P2 | 10 评论，3 👍 | 静态模型目录已不满足快速变化生态 |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) | 按模型记录 usage 日志，支持成本追踪 | P2 | 8 评论，1 👍 | 已有 linked PR，落地概率高 |
| [#79902](https://github.com/openclaw/openclaw/issues/79902) | SQLite transcript/session 正式接口 | P3 | 13 评论，2 👍 | database-first 运行时的自然延伸 |
| [#6625](https://github.com/openclaw/openclaw/issues/6625) | 子代理超时前的预警告 | P2 | 7 评论 | 防止超时丢工作，社区痛点明确 |
| [#45771](https://github.com/openclaw/openclaw/issues/45771) | 内置 pace-aware 限流 | P3 | 7 评论，2 👍 | 自治 agent 易烧穿 API 配额 |
| [#39343](https://github.com/openclaw/openclaw/issues/39343) | 网关层图片/媒体组分批缓冲 | P2 | 6 评论，1 👍 | 多图片消息体验优化 |
| [#63930](https://github.com/openclaw/openclaw/issues/63930) | 支持 Anthropic advisor tool（beta server-side tool） | P2 | 6 评论 | 影响 server-side tool 通用处理 |

**判断**：`#13219`（usage logging）已有 linked PR 且为 P2，最可能随近期版本落地；`#10687`（动态模型发现）呼声高但实现复杂，可能需要更长周期。

---

## 用户反馈摘要

- **对代码审查流程的信任受损**：[#51429](https://github.com/openclaw/openclaw/issues/51429) 中文用户指出 `/Users/wangtao` 被硬编码进代码并合并发布——“这位 wangtao 是谁？”，表达对质量门禁的担忧。
- **生产用户急需运维指南**：[#123799](https://github.com/openclaw/openclaw/issues/123799) 部署 2026.5.12 的用户受 Codex compact 404 影响，需要明确的升级/回滚路径；[#73537](https://github.com/openclaw/openclaw/issues/73537) 用户感谢 OpenClaw 融入家庭与业务自动化流，但呼吁增加 production-readiness 稳定性标签。
- **计费恢复体验差**：[#70903](https://github.com/openclaw/openclaw/issues/70903) 用户充值后仍被 cooldown 阻塞数小时，反馈“持久化禁用时间戳会不断延长”，严重影响信任。
- **模型生态兼容阵痛**：[#121953](https://github.com/openclaw/openclaw/issues/121953) DeepSeek 用户遇到 cron 停摆；[#119401](https://github.com/openclaw/openclaw/issues/119401) 小模型用户无法通过 `silentReply` 策略强制可见回复，因为 `NO_REPLY` 被无条件剥离。
- **升级风险顾虑**：[#78493](https://github.com/openclaw/openclaw/issues/78493) macOS 用户 `sudo openclaw update` 后遭遇混合文件所有权，doctor 进一步覆盖配置；[#77930](https://github.com/openclaw/openclaw/issues/77930) 用户提供了详细的 Discord 回归矩阵辅助排查。
- **开发者体验诉求**：[#55794? 实际是 #6625](https://github.com/openclaw/openclaw/issues/6625) 子代理超时直接被杀、工作全部丢失，用户请求注入预超时系统消息以保存进度。

---

## 待处理积压

### 长期未决的高优 Issue（按紧迫度排序）

| Issue | 创建时间 | 严重度 | 积压原因 |
|---|---|---|---|
| [#70903](https://github.com/openclaw/openclaw/issues/70903) | 2026-04-24 | **P0** | 已被标记 `stale`，无任何 fix PR，最需维护者介入 |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | 2026-06-06 | P1 / platinum | 20 评论高热，仍 `no-new-fix-pr` |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | 2026-03-06 | P1 / platinum | 3 月创建至今未修复，Gemini 用户持续受影响 |
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | 2026-04-20 | P1 | umbrella issue，跨渠道根因未统一 |
| [#103231](https://github.com/openclaw/openclaw/issues/103231) | 2026-07-10 | P1 / platinum | claude-cli compaction 路径设计缺陷 |
| [#56653](https://github.com/openclaw/openclaw/issues/56653) | 2026-03-28 | P1 | Slack reaction 事件从未送达，5 个 bot 账号全量复现 |
| [#56693](https://github.com/openclaw/openclaw/issues/56693) | 2026-03-29 | P1 | Codex OAuth 可能绑定已停用的 ChatGPT workspace |

### 长期未合并的 PR

- **[#90621 chore(codeowners)](https://github.com/openclaw/openclaw/pull/90621)**：6 月 5 日创建，为 heartbeat 模板与 doctor 修复增加 review gate，仍处于 waiting on author，属于低风险但长期搁置的治理改进。
- **[#112811 MSTeams 多 bot 支持](https://github.com/openclaw/openclaw/pull/112811)**：7 月 23 日创建，功能完整、有截图证据，但涉及兼容性与 session-state 风险，尚未合入，建议维护者安排 review。

---

**总结**：OpenClaw 社区活跃度极高，安全和功能迭代节奏快，但 P1/P0 稳定性问题存量偏大，PR 合并节奏跟不上提交速度。建议维护者优先处理 P0 的 [#70903](https://github.com/openclaw/openclaw/issues/70903) 与高热度 platinum issue，并关注 PR 审查瓶颈。

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告 — 2026-08-16

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态正处于"高活跃、高负载、分层演进"的密集迭代期：头部项目（OpenClaw、ZeroClaw、IronClaw）单日 PR/Issue 更新量达 50 条级，但普遍面临 P1 稳定性债积压与 PR 审查瓶颈，呈现出"功能迭代速度超越质量收敛"的典型高速成长期特征。生态内部已出现清晰的技术分层——通用型全能助手（OpenClaw、ZeroClaw）、轻量级桌面/本地优先实现（PicoClaw、NullClaw、Hermes Agent）、垂直行业封装（LobsterAI、CoPaw）与基础设施型框架（NanoBot、IronClaw）并行演进。跨项目涌现的共同技术方向高度一致：cron/定时任务可靠性、模型供应商兼容层、上下文与记忆系统性重构、安全与隐私边界加固构成当前四大主战场。

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 合并/关闭 PR | Release | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（480 活跃 / 20 关闭） | 500（52 合并/关闭） | 52 | v2026.8.1-beta.2 | ⚠️ 高活跃、高负载，P1 存量约 20，合并率仅 10% |
| **ZeroClaw** | 50（46 活跃 / 4 关闭） | 50（6 关闭/合并，44 待合并） | 6 | 无 | ⚠️ 讨论极热，架构 RFC 密集，决策速度成瓶颈 |
| **Hermes Agent** | 50（42 活跃 / 8 关闭） | 50（3 合并/关闭） | 3 | 无 | ✅ 高活跃，架构治理有里程碑；Windows 更新链短板 |
| **IronClaw** | 27（6 新开/活跃 / 21 关闭） | 13（6 合并/关闭） | 6 | 无 | ✅ 高活跃，性能债治理扎实，测试基建脆弱 |
| **NanoClaw** | 0 | 22（3 关闭/合并，19 待合并） | 3 | 无 | 🟡 中等偏高，核心团队驱动，外部输入弱 |
| **LobsterAI** | 18（2 开放 / 16 stale 关闭） | 6（2 合并/关闭） | 2 | 无 | 🟡 中等偏低，存量清理为主，安全漏洞待确认 |
| **CoPaw** | 10（9 活跃 / 1 关闭） | 11（0 合并，11 待合并） | 0 | 无 | ⚠️ 贡献活跃但合并空窗，7 条 first-time PR 排队 |
| **Moltis** | 0 | 6（3 合并/关闭） | 3 | 无 | 🟡 中等，维护者单核驱动，社区讨论缺失 |
| **NanoBot** | 2（1 新开 / 1 关闭） | 16（7 合并/关闭） | 7 | 无 | ✅ 修复闭环快，但 P0 PR 滞留 10 天 + conflict |
| **PicoClaw** | 0 | 2（0 合并，均 stale） | 0 | 无 | 🔴 低活跃，WhatsApp 通道瘫痪修复搁置 9 天 |
| **NullClaw** | 1（新开） | 1（待合并） | 0 | 无 | 🟡 低活跃但稳定，积压极少 |
| **ZeptoClaw** | 0 | 0 | 0 | 无 | ⚪ 无活动 |

## 3. OpenClaw 在生态中的定位

**OpenClaw 是当前生态中体量最大、迭代最快的通用型 AI 助手网关**，单日 500 条 Issue/PR 更新的活跃度远超同类（ZeroClaw 50 条、Hermes 50 条），社区规模约一个数量级差距。其核心优势在于**渠道覆盖面与安全机制的前瞻性**：Secret egress host binding 精确绑定共享凭据到目标主机、CLI + Control UI 双端安装策略警告确认机制，均领先于 ZeroClaw（webhook 审计导出仍在加固中）与 NanoBot（插件缓存路径安全回归刚修复）。技术路线上，OpenClaw 采用**"Gateway + 多运行时"的重型架构**，支持 Codex/Claude CLI 等外部 agent 运行时接入，这与 PicoClaw（Go 移植轻量版）、NanoClaw（Rust 实现）等"单二进制轻量部署"路线形成鲜明对比。与 ZeroClaw 相比，后者正如火如荼地进行架构级 RFC（运行时会话所有权、OpenAI 协议兼容），而 OpenClaw 的架构趋稳、重心转向稳定性债务治理。OpenClaw 当前最大风险是 20 个 P1 存量问题与仅 10% 的合并率——**规模优势尚未完全转化为质量优势**；但其修复了 cron 静默 no-op、合并安装策略确认等关键事件，表明核心链路仍在可控推进。

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **Cron/定时任务可靠性** | OpenClaw、NanoBot、ZeroClaw、CoPaw | DeepSeek cron 停摆（OpenClaw #121953）、Windows cron 全部停摆（#124125）、调度器被持久化异常杀死（NanoBot #5376）、cron 锁永久卡死（ZeroClaw #9320）、cron update 假成功（CoPaw #7048）——**定时任务已成为生产环境最高频故障点** |
| **模型供应商兼容与网关路由** | OpenClaw、ZeroClaw、CoPaw、NanoBot、NullClaw | OpenAI Chat Completions 协议兼容（ZeroClaw #8603）、OpenAI Responses API 适配（CoPaw #7061）、Anthropic 服务器端 fallback 链路（ZeroClaw #9262-#9268）、OrcaRouter 多模型网关接入（NanoBot #5328）、proxy 支持（NullClaw #988）——模型层正在成为标准化的"可插拔"基础设施 |
| **上下文/记忆系统重构** | OpenClaw、NanoBot、PicoClaw、NanoClaw、Hermes | SQLite transcript/session 正式接口（OpenClaw #79902）、记忆整合数据完整性丢失（NanoBot #5377）、前缀缓存优化（PicoClaw #3321）、跨会话上下文模块（NanoClaw #3257）、上下文压缩死循环（Hermes #84371）——**"记忆正确性"取代"记忆有无"成为新焦点** |
| **安全与权限边界加固** | OpenClaw、LobsterAI、ZeroClaw、CoPaw、Hermes | Secret egress binding（OpenClaw）、邮箱 SKILL 路径穿越（LobsterAI #1885）、webhook 审计凭据擦除（ZeroClaw #9995）、插件 API system_prompt 权限（CoPaw #7052）、危险命令包装器绕过（Hermes #84551）——安全已成为社区信任的基石 |
| **多会话/多租户隔离** | NanoBot、CoPaw、NanoClaw、ZeroClaw | 会话协作与服务端 `@name`（NanoBot #5358）、Matrix 群组按发送者隔离（CoPaw #7001）、跨会话消息 fan-out（NanoClaw #3257）、会话所有权 RFC（ZeroClaw #9487）——从"单会话"走向"多会话互联"的产品升级 |

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构 |
|---|---|---|---|
| **OpenClaw** | 全渠道接入 + 多 agent 运行时编排 | 进阶个人用户/小型团队，追求渠道广度 | Gateway + 多后端（Codex/Claude CLI），TypeScript 生态 |
| **ZeroClaw** | 架构标准化 + 可靠性工程 | 开发者/DevOps，看重协议兼容与安全 | Rust 实现，RFC 驱动的模块化设计，OpenAI 兼容方向 |
| **Hermes Agent** | 桌面优先 + 多平台 UX | 个人开发者、Linux/macOS/Windows 桌面用户 | 桌面应用（Electron）+ TUI/CLI，本地模型友好 |
| **IronClaw** | 性能极致 + 可观测性 | 基础设施型用户、高吞吐 agent 服务 | Rust + Wasmtime，性能写放大治理，轨迹评测系统 |
| **NanoBot** | 轻量可嵌入 + WebUI 体验 | 个人开发者、自托管用户 | 轻量级，WebUI 打磨深，插件安全生命周期管理 |
| **LobsterAI** | 网易生态 + 桌面 IM 集成 | 中文用户、网易云服务订阅者 | 桌面应用 + OpenClaw 上游兼容层 |
| **CoPaw / QwenPaw** | 视频多模态 + 数据分析 | 多模态重负载用户、企业集成方 | Qwen 模型深度适配，DataPaw 运行时扩展 |
| **PicoClaw** | 极致轻量 + 低成本 | 资源受限环境、Go 技术栈偏好者 | Go 单二进制，性能优先但迭代缓慢 |
| **NanoClaw** | Rust 原生 + 容器生命周期管理 | Rust 生态用户、容器化部署者 | Rust 实现，核心团队集中驱动 |
| **Moltis** | 连接器生态 + 远程沙箱 | 数据密集型企业用户 | 连接器持久化 + 多沙箱后端（Coder），开源协作待加强 |
| **NullClaw** | 无依赖最小化 | 本地低资源环境用户 | 极简架构，社区规模小 |

## 6. 社区热度与成熟度

**第一梯队 — 快速迭代期（日 PR 50+，版本节奏快，稳定性债同步累积）**：OpenClaw、ZeroClaw、Hermes Agent。三者均面临"讨论速度高于合并速度"的结构性矛盾，P1 Bug 存量与 PR 审查积压是共同短板。

**第二梯队 — 质量巩固期（合并率高、修复闭环快、功能趋稳）**：NanoBot、IronClaw。NanoBot 当日 7 个 PR 合并、新 Bug 约 2 天闭环；IronClaw 当日 6 个 PR 合并，并展现"评审意见结构化沉淀为 Issue"的健康文化。两者正从"功能扩张"转向"稳定性与性能精修"。

**第三梯队 — 功能扩展排队期（贡献活跃但合并停滞）**：CoPaw、NanoClaw、Moltis。CoPaw 当日 11 个 PR 零合并，Moltis 全部 PR 系维护者单核提交。贡献热情与实际落地之间存在明显时间差。

**第四梯队 — 沉寂/停滞期**：PicoClaw（PR stale 9 天无响应）、NullClaw（日常低活跃）、ZeptoClaw（无活动）。

## 7. 值得关注的趋势信号

1. **OpenAI 协议兼容正成为生态入场券**：ZeroClaw 的 Chat Completions RFC 获 20 条评论成为头条讨论，CoPaw 已开始针对 Responses API 做适配。未来 AI 助手若不能原生兼容 OpenAI 协议，将难以接入 Open WebUI、Aider、LangChain 等成熟工具链。

2. **"记忆"进入数据完整性时代**：NanoBot 用户精确报告"截断输入 + 推进游标"导致的静默丢失，OpenClaw 高级用户呼吁数据库优先的 transcript 接口，PicoClaw 贡献者主动优化前缀缓存。记忆功能从"有/无"之争进入"正确性/可审计性"阶段。

3. **cron/定时任务是生产环境最脆弱环节**：OpenClaw（Windows + DeepSeek）、NanoBot（调度器容错）、ZeroClaw（sqlite 锁）、CoPaw（假成功）四大项目同日出现 cron 相关问题，且多为 P1/P0。任何面向生产用户的 agent 平台，定时任务的可靠性都将是核心竞争力之一。

4. **安全边界从"外防"转向"内控"**：OpenClaw 的 Secret egress host binding、安装策略警告确认，LobsterAI 的 SKILL 路径穿越，Hermes 的危险命令包装器绕过，均指向**插件/技能供应链安全**——恶意 Skill 与漏洞插件已成为最大攻击面。

5. **多会话互联与多租户隔离是下一波产品叙事**：NanoBot 的会话协作、CoPaw 的 Matrix 按发送者隔离、NanoClaw 的跨会话 fan-out，三个独立项目不约而同地指向同一方向：agent 从"单用户单会话"走向"多会话协作 + 身份隔离 + 跨会话记忆"。

6. **桌面端与 Windows 平台是体验洼地**：Hermes（Windows 更新自锁、desktop 二次启动杀后端）、ZeroClaw（macOS 空白窗口）、LobsterAI（桌面端连接稳定性弱于 IM Bot）同期爆发桌面端问题，说明**桌面作为 AI 助手主入口的工程成熟度还远未达标**。

7. **模型成本优化进入深水区**：PicoClaw 前缀缓存优化、OpenClaw per-model usage 日志（#13219）、NullClaw 长任务 token 压缩，反映出社区从"关注 token 价格"转向"关注 token 使用效率"，这将是未来所有 agent 框架的默认性能指标。

---

*数据范围：2026-08-15 ~ 2026-08-16 各项目 GitHub 公开动态。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-16

## 1. 今日速览

过去 24 小时 NanoBot 保持高活跃度：共更新 16 条 PR（9 条待合并、7 条已合并/关闭），2 条 Issue（1 条新开、1 条关闭），无新版本发布。合并内容覆盖新模型提供商接入（OrcaRouter）、插件安全回归修复、会话文件状态无界增长收敛、Cron 调度器容错，以及多项 WebUI 体验优化，项目在生态扩展与稳定性建设上同步推进。需警惕的是，P0 级数据安全修复 PR（#5271）已滞留 10 天且带有合并冲突，另有 2 个新功能 PR（#5364、#5389）同样存在冲突，合并队列健康度有待改善。整体评估：社区贡献活跃、修复闭环速度快（#5368 从报告到修复合入约 2 天），但 conflict 清理与 P0 积压应成为未来 24 小时的首要维护事项。

## 2. 版本发布

本期无新版本发布。

## 3. 项目进展

今日共合并/关闭 7 个 PR，按主题归类如下：

**生态扩展**
- **新增 OrcaRouter 网关提供商**（[#5328](https://github.com/HKUDS/nanobot/pull/5328)，已合并）：接入 OpenAI 兼容路由网关 OrcaRouter，单端点/单 API Key 即可访问 OpenAI、Anthropic、Google、DeepSeek、Qwen、MiniMax、xAI 等 150+ 模型，并提供网关级零信任安全能力。NanoBot 提供商矩阵进一步扩大。

**安全与稳定性修复**
- **修复插件技能目录缓存安全回归**（[#5369](https://github.com/HKUDS/nanobot/pull/5369)，已合并）：插件包原地替换后，文件系统读取路径仍复用未校验的缓存技能目录，可能导致受限项目持续可读。修复后包变更即触发缓存根目录重新验证，属于安全边界补强。
- **收敛会话文件状态生命周期**（[#5370](https://github.com/HKUDS/nanobot/pull/5370)，已合并）：FileStateStore 原先为每个 session 键无限期保留 FileStates 对象，高基数 API/临时会话下内存无界增长；修复后状态随 /new、runtime discard、SDK 关闭等生命周期边界正确释放。
- **Cron 调度器持久化容错**（[#5376](https://github.com/HKUDS/nanobot/pull/5376)，已合并）：单次 job-store 保存失败（磁盘满、权限变更、文件锁）原先会经 `_save_store()` 抛出异常并永久杀死调度器；修复后调度循环获得异常隔离，不再因单点故障静默停摆。

**WebUI 体验**
- **运行中隐藏助手操作按钮**（[#5371](https://github.com/HKUDS/nanobot/pull/5371)，已合并）：Agent turn 未收到 `turn_end` 前不再显示复制/分叉按钮，消除与 "Working for ..." 指示、composer 锁定状态相互矛盾的完成信号（对应 Issue [#5368](https://github.com/HKUDS/nanobot/issues/5368)）。
- **保留范围选择与 turn 计时**（[#5397](https://github.com/HKUDS/nanobot/pull/5397)，已合并）：侧边栏批量删除支持 macOS 风格 Shift 范围选择；guidance 中途发送时运行时间归属规范 Agent turn；推理投影与恢复运行场景下保持 turn 身份一致。
- **模型预设显示名澄清**（[#5399](https://github.com/HKUDS/nanobot/pull/5399)，已合并）：预设显示标签与稳定 `/model` 命令名解耦，编辑已存在预设时展示命令名，避免 `openai` 预设被显示为 `minimax` 这类认知混淆，并完成多语言本地化。

**小结**：7 个合入 PR 中 3 个安全/稳定性修复、1 个 Bug 修复、2 个 WebUI 体验打磨、1 个新功能接入。项目在会话数据安全、插件隔离、调度可靠性、WebUI 交互一致性四个维度均有实质进展。

## 4. 社区热点

- **Issue [#5377](https://github.com/HKUDS/nanobot/issues/5377)（2 条评论，今日唯一有讨论的 Issue）**：记忆整合（consolidation）数据截断问题。用户 dajiaohuang 指出 `Consolidator.archive()` 将格式化对话截断至模型 token 预算，但调用方仍将 `Session.last_consolidated` 推进至完整原始批次，导致被截断的消息或后缀永久失去整合机会。背后的核心诉求是**记忆功能的数据完整性**——用户对静默丢失零容忍。该用户同时提交了修复 PR [#5379](https://github.com/HKUDS/nanobot/pull/5379)（无损分块方案），属于高价值的"报告 + 修复"组合。
- **PR [#5271](https://github.com/HKUDS/nanobot/pull/5271)（P0 + conflict）**：过期后台任务覆盖会话数据。该 PR 解决 `/new` 或生命周期替换后，in-flight compactor 的旧状态覆盖新会话的问题，是当前优先级最高、滞留时间最长的数据安全修复。社区关注点在于**会话生命周期隔离**的可靠性。
- **PR [#5358](https://github.com/HKUDS/nanobot/pull/5358)（会话协作功能）**：为每个持久化 WebUI 会话分配服务端持有的稳定 `@name`，扩展 composer 提及选择器以支持跨会话选择与协作。该 PR 触及从"单会话使用"到"多会话互联"的产品方向升级，需求潜力较大。

## 5. Bug 与稳定性

**今日新报告 Bug（按严重度排列）：**

| 严重度 | 编号 | 问题描述 | 状态 |
|---|---|---|---|
| 高（数据完整性） | [#5377](https://github.com/HKUDS/nanobot/issues/5377) | 记忆整合截断输入但游标推进至完整批次，被截断消息失去后续整合机会 | OPEN，已有对应修复 PR [#5379](https://github.com/HKUDS/nanobot/pull/5379) 待合并 |
| 中（UX 矛盾信号） | [#5368](https://github.com/HKUDS/nanobot/issues/5368) | Agent turn 生成中过早显示复制/分叉按钮，与运行指示和 composer 状态冲突 | 已关闭，修复 PR [#5371](https://github.com/HKUDS/nanobot/pull/5371) 已合并 |

**今日合入的稳定性修复：**
- 插件缓存路径安全回归（[#5369](https://github.com/HKUDS/nanobot/pull/5369)）：已合并，消除包替换后旧路径可读风险。
- 会话文件状态无界增长（[#5370](https://github.com/HKUDS/nanobot/pull/5370)）：已合并，内存占用不再随会话数线性膨胀。
- Cron 调度器被持久化异常杀死（[#5376](https://github.com/HKUDS/nanobot/pull/5376)）：已合并，调度器获得异常隔离，避免静默停摆。
- WebUI 操作时机错误（[#5371](https://github.com/HKUDS/nanobot/pull/5371)）：已合并，修复完成状态矛盾。

**仍在队列中的修复 PR：**
- [#5271](https://github.com/HKUDS/nanobot/pull/5271)（P0）：过期后台任务覆盖会话数据，需优先解决冲突并合并。
- [#5379](https://github.com/HKUDS/nanobot/pull/5379)（p2）：无损记忆整合，替换有损截断，待评审。
- [#5401](https://github.com/HKUDS/nanobot/pull/5401)（p2）：WebUI 断线重连后 mutation 重试/去重/防重放，待评审。

## 6. 功能请求与路线图信号

今日无新功能请求 Issue，但开放 PR 中的功能方向释放了明确的路线图信号：

- **会话协作**（[#5358](https://github.com/HKUDS/nanobot/pull/5358)）：以服务端持有的稳定 `@name` 标识持久化会话，composer 内可提及并选择 peer 会话，指向多会话协作能力。
- **DashScope 原生协议支持**（[#5398](https://github.com/HKUDS/nanobot/pull/5398)）：新增 `dashscope_native` 提供商，解锁阿里云百炼 OpenAI 兼容模式无法暴露的完整参数面（native thinking 等），与既有 `dashscope` 提供商共享 `DASHSCOPE_API_KEY`。
- **临时侧边会话**（[#5364](https://github.com/HKUDS/nanobot/pull/5364)）：`/side` 命令开辟临时会话，支持多标签隔离、独立草稿/消息/流状态、主/侧并行发送，会话保持瞬态性质。
- **拖拽式会话组织**（[#5389](https://github.com/HKUDS/nanobot/pull/5389)）：拖拽排序、拖拽到另一会话上创建分组，适配最新 pane 布局。
- **模型预设名称统一**（[#5400](https://github.com/HKUDS/nanobot/pull/5400)）：预设键作为 config、WebUI、命令、会话、fallbacks、Dream、运行时快照的全链路唯一规范名，支持 WebUI 重命名并迁移持久化数据。

其中 #5364、#5389、#5400 与今日合并的 #5397/#5399 同属 WebUI 会话管理/模型配置重构线，"会话组织 + 命名规范" 很可能成为下一版本迭代的核心主题。

## 7. 用户反馈摘要

- **记忆功能数据完整性是核心痛点**（[#5377](https://github.com/HKUDS/nanobot/issues/5377)）：用户 dajiaohuang 精确描述了"截断输入 + 推进游标"组合导致消息静默丢失的完整链路，并主动提交无损分块修复（[#5379](https://github.com/HKUDS/nanobot/pull/5379)），要求在 token 预算紧张时以"有界无损分块 + 全块成功后再写历史"替代有损截断。这反映出高级用户对记忆正确性的高要求，以及对失败回退原始行为的诉求。
- **WebUI 运行状态反馈一致性**（[#5368](https://github.com/HKUDS/nanobot/issues/5368)）：用户 ZhouJ-sh 反馈生成过程中操作按钮提前出现，与 "Working for ..." 和 composer 锁定状态并存，造成"到底跑完没有"的困惑。该 Issue 从创建到修复 PR 合入仅约 2 天，反馈闭环速度快，用户体验到维护者响应的高效。
- **社区"自报自修"文化**：今日 2 条 Issue 的报告者均同时交付或关联了修复方案（#5379、#5371），说明社区贡献者具备从问题定位到代码修复的完整能力，维护者主要承担评审与合入职责，整体协作模式健康。

## 8. 待处理积压

以下项目需维护者优先关注：

1. **PR [#5271](https://github.com/HKUDS/nanobot/pull/5271)（P0，开放 10 天，conflict）**：过期后台任务覆盖会话数据，属数据安全级别问题。自 08-06 创建至今未合并且存在冲突，建议立即解决冲突并安排评审。
2. **PR [#5291](https://github.com/HKUDS/nanobot/pull/5291)（p2，开放 9 天）**：子代理完整对话记录（工具调用、结果、推理步骤）持久化，自 08-07 后无新动态，需维护者推动 review。
3. **Issue [#5377](https://github.com/HKUDS/nanobot/issues/5377) + PR [#5379](https://github.com/HKUDS/nanobot/pull/5379)（3 天）**：记忆整合数据丢失问题已有无损修复方案，建议合入 #5379 后联动关闭 #5377，避免修复方案与问题报告长期分离。
4. **PR [#5364](https://github.com/HKUDS/nanobot/pull/5364)（conflict，3 天）**：临时侧边会话功能需解决冲突，否则影响后续会话管理重构线。
5. **PR [#5389](https://github.com/HKUDS/nanobot/pull/5389)（conflict，2 天）**：拖拽式会话组织功能同样需解决冲突。

---

*本日报基于 2026-08-16 采集的 GitHub 公开数据生成，数据源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-16

## 1. 今日速览

过去 24 小时项目保持高强度迭代：50 条 Issue 更新（42 条活跃、8 条关闭），50 条 PR 更新（47 条待合并、3 条合并/关闭），无新版本发布。架构重构迎来里程碑——大型文件分解史诗 [Issue #78647](https://github.com/NousResearch/hermes-agent/issues/78647) 以 20/20 完成率收官，"所有 god-file 一律分片、永不回退"政策全面落地。合并的 3 个 PR 分别修复了 Slack cron 频道路由、请求转储响应捕获和本地 UX/提供商选择稳定性。风险面集中在 Windows 更新文件锁、Desktop 会话状态异常与慢速本地模型超时，其中 3 个新 Bug 已附带修复 PR。技能索引退化（[#66616](https://github.com/NousResearch/hermes-agent/issues/66616)）和 Desktop 启动器 sandbox 问题（[#51327](https://github.com/NousResearch/hermes-agent/issues/51327)）是社区持续关注的热点。

## 2. 版本发布

无新版本发布（Releases: 0）。

## 3. 项目进展

### 合并/关闭的 PR（3 个）

| PR | 内容 | 意义 |
|---|---|---|
| [#87139](https://github.com/NousResearch/hermes-agent/pull/87139) | fix(cron): respect explicit Slack channel targets | 修复 cron 任务显式 `slack:CHANNEL_ID` 目标被继承创建线程的问题，仅当目标显式包含 `:THREAD_ID` 或使用 `origin` 时才保留线程投递，并补充回归测试 |
| [#66512](https://github.com/NousResearch/hermes-agent/pull/66512) | feat: capture model responses next to request dumps (`HERMES_DUMP_REQUESTS`) | 在请求转储旁捕获模型响应，补齐调试数据闭环，对排查提供商问题有直接价值 |
| [#13746](https://github.com/NousResearch/hermes-agent/pull/13746) | fix: stabilize local Hermes UX and provider selection | 裁剪 Telegram DM 会话提示开销、稳定 NVIDIA curated catalog 选择与回退、修复 TUI 状态栏换行重影 |

### 重要 Issue 关闭（8 个，以下为可见项）

- **[#78647](https://github.com/NousResearch/hermes-agent/issues/78647) [COMPLETE] 大型文件分解史诗 20/20 完成**——仓库级 god-file 分片全部落地，确立 "sharded, never reverted" 长期政策，是本周最重要的架构里程碑。
- **[#83569](https://github.com/NousResearch/hermes-agent/issues/83569) [P1] Windows 更新自锁 `cryptography._rust.pyd`**——更新进程自身持有 `.pyd` 映射导致 os error 5，已修复关闭。
- **[#85496](https://github.com/NousResearch/hermes-agent/issues/85496) Desktop `/api/ws?token=` 升级被 `auth_middleware` 401 拒绝**——桌面端启动循环的认证问题已修复。
- **[#69107](https://github.com/NousResearch/hermes-agent/issues/69107) `prompt.submit` 因陈旧内存历史拒绝有效序号**——多客户端同会话场景下的历史一致性问题已修复。
- [#70031](https://github.com/NousResearch/hermes-agent/issues/70031) TUI/CLI 状态行重复问题、[#62158](https://github.com/NousResearch/hermes-agent/issues/62158) Desktop 计时器重置问题、[#4178](https://github.com/NousResearch/hermes-agent/issues/4178) python-olm 构建失败等均于今日关闭。

## 4. 社区热点

| 排名 | Issue/PR | 评论数 | 热点分析 |
|---|---|---|---|
| 1 | [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) 大型文件分解史诗完结 | 78 | 社区对 god-file 分片策略展开了长时间、高密度讨论，最终确立 "all god files are sharded, never reverted" 的仓库级政策。背后诉求是**代码可维护性与模块化治理**，且已转化为 18+ 个分解切片 PR 持续推进 |
| 2 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) 技能索引停滞/退化 | 36 | 自动化新鲜度探针失败，索引 29.8h 未刷新（限制 26h），直接影响 /docs/skills 文档站。反映**自动化链路可靠性**问题，长期未解决已引发社区持续关注 |
| 3 | [#4178](https://github.com/NousResearch/hermes-agent/issues/4178) python-olm 构建失败 | 11 | 0.5.0→0.6.0 升级时出现但不影响运行，讨论聚焦**升级流程的报错噪音**与更新器健壮性 |
| 4 | [#51327](https://github.com/NousResearch/hermes-agent/issues/51327) Desktop `.desktop` 启动器静默失败 | 9 | P1 级别。Linux 下 Electron `chrome-sandbox` 缺少 setuid 4755 时**无窗口、无报错**地退出，是典型的桌面端冷启动体验陷阱 |
| 5 | [#79564](https://github.com/NousResearch/hermes-agent/issues/79564) Discord 功能对齐战役 meta-issue | 6 | 以 API v10 / discord.py 2.7.1 为基准推进 Discord 表面功能对齐，属于**平台生态扩展**的系列化治理 |

## 5. Bug 与稳定性

### P1 严重问题

- **[#51327](https://github.com/NousResearch/hermes-agent/issues/51327) [OPEN]** Desktop `.desktop` 启动器静默失败——Electron `chrome-sandbox` 未配置为 `root:root` + mode 4755，点击图标无窗口无报错。**尚无 fix PR**，Linux 桌面用户受影响。
- **[#83569](https://github.com/NousResearch/hermes-agent/issues/83569) [CLOSED]** Windows 更新自锁 `cryptography._rust.pyd`——更新进程自身 import 导致 `.pyd` 被映射占用，cryptography 升级 100% 失败。已修复。

### P2 问题（已有修复 PR）

- **[#87295](https://github.com/NousResearch/hermes-agent/issues/87295)** 二次启动 Desktop（dock 图标或 `hermes desktop`）静默杀死运行中后端、连接状态断裂 → 修复 PR [#87314](https://github.com/NousResearch/hermes-agent/pull/87314) 已提交。
- **[#87292](https://github.com/NousResearch/hermes-agent/issues/87292)** 慢速本地模型（>16 TPS）出现 WinError 10053 与 Provider unresponsive 两种超时 → 修复 PR [#87310](https://github.com/NousResearch/hermes-agent/pull/87310) 已提交，保留宿主模型看门狗的同时放行本地长响应。

### P2 问题（尚无 fix PR）

- **[#84551](https://github.com/NousResearch/hermes-agent/issues/84551)** `detect_dangerous_command` 不解包 `timeout` / `bash -c` 包装器，可绕过危险命令审批门——**安全边界风险**，建议优先处理。
- **[#87309](https://github.com/NousResearch/hermes-agent/issues/87309)** `delegate_task` 在目标 CLI 不支持 `--acp` 时挂起整个 `child_timeout_seconds`（默认 600s）。
- **[#84371](https://github.com/NousResearch/hermes-agent/issues/84371)** 上下文压缩死循环：preflight 计入完整推理回放，但 tail 预算排除导致 `middle_window_tokens=0`。
- **[#50159](https://github.com/NousResearch/hermes-agent/issues/50159)** Desktop 在 turn 完成并持久化后仍卡在陈旧 "Thinking" 状态。
- **[#75584](https://github.com/NousResearch/hermes-agent/issues/75584)** Windows 中断安装后更新失败：`hermes.exe` 缺失 + `node_modules` ENOTEMPTY + Desktop "UPDATE DIDN'T FINISH"。
- **[#85315](https://github.com/NousResearch/hermes-agent/issues/85315)** `auxiliary.free_only` 门控误拒绝显式请求的 `:free` 模型，并误报为支付/凭据错误。
- **[#87051](https://github.com/NousResearch/hermes-agent/issues/87051)** 网关重启后 `/loop` 响应投递到错误的 Telegram 主题。
- **[#87280](https://github.com/NousResearch/hermes-agent/issues/87280)** cron 生命周期守卫对 `$(( x / y ))` 算术除法误报，阻断合法 `hermes cron create`。
- **[#87268](https://github.com/NousResearch/hermes-agent/issues/87268)** `install.sh --commit <短SHA>` 静默安装未固定的 main 分支且 exit 0。
- **[#85868](https://github.com/NousResearch/hermes-agent/issues/85868)** macOS 热更新后残留旧渲染器、空白 reload 与陈旧退出守卫。
- **[#87200](https://github.com/NousResearch/hermes-agent/issues/87200)** Desktop 子代理超时后 "computing… / 1 Alt ajan" 指示器卡死至重启。
- **[#84350](https://github.com/NousResearch/hermes-agent/issues/84350)** `hermes kanban show` 崩溃：`Cannot operate on a closed database`。

## 6. 功能请求与路线图信号

### 新功能请求

- **[#40306](https://github.com/NousResearch/hermes-agent/issues/40306) 自动推理模式（ChatGPT 式）**——`reasoning_effort` 目前仅接受固定值，用户希望自动判断何时思考 vs 直接响应。P3，社区呼声存在但热度不高，可能进入下一版本候选。
- **[#86986](https://github.com/NousResearch/hermes-agent/issues/86986) Termux 原生 pkg 安装/升级作为一等 Android 路径**——解决滚动 Termux 环境不适合 manylinux 依赖图的问题。
- **[#87267](https://github.com/NousResearch/hermes-agent/issues/87267) 新增 MAX（max.ru）俄罗斯即时通讯平台插件**——VK 旗下 messenger，填补俄语区平台空白。

### 路线图信号（有对应 PR 在途）

- **Desktop 能力面板全面 profile 作用域 + Skills Hub 一键安装**：[PR #87312](https://github.com/NousResearch/hermes-agent/pull/87312) 将 profile 选择器扩展到 Skills/Tools/MCP/Browse Hub 全视图，并移植 Bot Mode 的一键 Skills 安装器。
- **插件编排器行为披露机制**：[PR #87311](https://github.com/NousResearch/hermes-agent/pull/87311) 要求声明编排/自动派发/worker 进程的插件提供操作契约，[PR #87313](https://github.com/NousResearch/hermes-agent/pull/87313) 同步披露 Kanban 自动 worker fan-out，安全透明度明显提升。
- **内存提供商超时可配置**：[PR #86948](https://github.com/NousResearch/hermes-agent/pull/86948) 使 `memory.prefetch_timeout` 与 ByteRover 超时可调。
- **TUI `/widgets` 子命令家族**：[PR #76772](https://github.com/NousResearch/hermes-agent/pull/76772) 实现 list/reload/load/unload/update，将单点调试命令升级为完整工具族。
- **`[Topic]` 前缀会话侧边栏聚类**：[PR #86625](https://github.com/NousResearch/hermes-agent/pull/86625) 提升多主题会话的组织效率。
- **子进程凭据继承收口史诗**：[#83565](https://github.com/NousResearch/hermes-agent/issues/83565) 将 #77027 类问题（敏感环境变量泄漏到模型子进程）统一治理，与安全类 PR [#81843](https://github.com/NousResearch/hermes-agent/pull/81843)（剥离 Kanban worker env）呼应。

**判断**：Desktop 体验打磨、插件安全披露、本地模型适配是当前三条迭代主线；#40306 自动推理模式与 Termux 原生路径具备纳入下一版本的潜力。

## 7. 用户反馈摘要

- **Windows 更新链路是最大痛点**：用户连续报告文件锁（[#83569](https://github.com/NousResearch/hermes-agent/issues/83569)）、中断后无法恢复（[#75584](https://github.com/NousResearch/hermes-agent/issues/75584)）、install.sh 短 SHA 静默装错版本（[#87268](https://github.com/NousResearch/hermes-agent/issues/87268)），说明 Windows 平台更新器仍需系统性加固。
- **Desktop 可靠性反馈集中**：二次启动杀死后端（[#87295](https://github.com/NousResearch/hermes-agent/issues/87295)）、陈旧 Thinking 状态（[#50159](https://github.com/NousResearch/hermes-agent/issues/50159)）、子代理超时指示器卡死（[#87200](https://github.com/NousResearch/hermes-agent/issues/87200)）、macOS 热更新残留渲染器（[#85868](https://github.com/NousResearch/hermes-agent/issues/85868)），表明桌面端会话状态机需要更严格的生命周期管理。
- **本地模型用户明确表达超时困扰**：慢速模型（>16 TPS）被误判为无响应（[#87292](https://github.com/NousResearch/hermes-agent/issues/87292)），已有 PR [#87310](https://github.com/NousResearch/hermes-agent/pull/87310) 定向解决，社区反馈积极。
- **安全边界担忧上升**：危险命令分类器可被 `timeout`/`bash -c` 绕过（[#84551](https://github.com/NousResearch/hermes-agent/issues/84551)），子进程凭据继承问题被提升为战役级史诗（[#83565](https://github.com/NousResearch/hermes-agent/issues/83565)）。
- **文档/配置一致性**：`delegation.max_iterations` 默认值已从 50 改为 250 但文档未同步（[PR #87032](https://github.com/NousResearch/hermes-agent/pull/87032)）；官方 `fitness-nutrition` 技能存在单位换算错误（[PR #78235](https://github.com/NousResearch/hermes-agent/pull/78235)），用户对细节质量有较高要求。
- **自动化监控失明**：技能索引持续退化（[#66616](https://github.com/NousResearch/hermes-agent/issues/66616)）说明 CI 探针的恢复机制与告警升级还需完善。

## 8. 待处理积压

### 长期未解决的重要 Issue

| Issue | 开启时间 | 备注 |
|---|---|---|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) 技能索引退化 | 2026-07-18 | 36 条评论，自动化探针持续告警，索引 29.8h 未刷新，影响文档站 |
| [#51327](https://github.com/NousResearch/hermes-agent/issues/51327) Desktop sandbox 静默失败 | 2026-06-23 | **P1**，无 fix PR，Linux 桌面用户受影响近两个月 |
| [#50159](https://github.com/NousResearch/hermes-agent/issues/50159) Desktop 陈旧 Thinking 状态 | 2026-06-21 | P2，疑难复现，跨 Desktop 与 session-state |
| [#40306](https://github.com/NousResearch/hermes-agent/issues/40306) 自动推理模式 | 2026-06-06 | 功能请求，2 个月无实质推进 |
| [#75584](https://github.com/NousResearch/hermes-agent/issues/75584) Windows 中断更新恢复 | 2026-07-31 | 更新器健壮性，需与 #83569 修复联动验证 |

### 长期待合并 PR（提醒维护者关注）

- **[#75154](https://github.com/NousResearch/hermes-agent/pull/75154)** fix(update): preserve local-only commits——自 07-31 起待合并，P2 + needs-decision，涉及更新器对本地提交的保护策略。
- **[#78058](https://github.com/NousResearch/hermes-agent/pull/78058)** fix(desktop): preserve session history after interrupted API calls——自 08-03 起待合并，P2 会话状态相关。
- **[#81843](https://github.com/NousResearch/hermes-agent/pull/81843)** fix(kanban): strip worker Kanban env from terminal-spawned subprocesses——自 08-08 起待合并，**安全相关**，建议优先评审。
- **[#85318](https://github.com/NousResearch/hermes-agent/pull/85318)** fix(webhook): bind signatures to explicit provider schemes——自 08-13 起待合并，P2 安全边界，关闭 #47451、#80327。
- 架构分解系列 **[#77719](https://github.com/NousResearch/hermes-agent/pull/77719) / [#77723](https://github.com/NousResearch/hermes-agent/pull/77723)** 及 [#76772](https://github.com/NousResearch/hermes-agent/pull/76772)、[#78235](https://github.com/NousResearch/hermes-agent/pull/78235) 为 P3 低风险，可批量推进。

---

**项目健康度总评**：迭代节奏活跃、架构治理有里程碑式进展、新 Bug 的 fix PR 响应速度较快（3 个当日修复）；但 Windows 更新链路、Desktop 会话状态与自动化监控三处系统性短板仍需持续投入。安全类问题（#84551、#81843、#85318）建议提升优先级。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

## PicoClaw 项目动态日报 — 2026-08-16

### 1. 今日速览

过去24小时 PicoClaw 项目整体活跃度较低：Issues 保持零新增/零关闭，PR 层面有 2 条更新但状态均为待合并且已被标记为 stale。项目无新版本发布。核心维护者的合并速度明显滞后于社区贡献节奏，尤其是 WhatsApp 通道修复已停滞多日。当前项目处于相对平静期，但存在两项不可忽视的积压工作。

### 2. 版本发布

过去24小时无新版本发布，近期也无 Releases。

### 3. 项目进展

**过去24小时无 PR 被合并或关闭**。团队未落地任何代码变更，项目主线进度停滞。

处于待合并状态的 2 个 PR 是当前项目进展的关键候选：

- **#3321** — 将动态上下文移到历史记录之后，以保留前缀缓存（[链接](https://github.com/sipeed/picoclaw/pull/3321)）
- **#3320** — 升级 WhatsApp 依赖，解锁原生通道（[链接](https://github.com/sipeed/picoclaw/pull/3320)）

这两项改动若能合并，将显著改善大对话场景下的推理性能，并恢复长期瘫痪的 WhatsApp 集成能力。但截至 2026-08-16，二者均未被维护者响应。

### 4. 社区热点

过去24小时内无 Issue/PR 产生新评论或表情反应。此前最受关注的议题是活跃的外部贡献者 [grrowl](https://github.com/grrowl) 提交的两项修复性 PR（#3321、#3320），均触及实际用户痛点：

- **#3320**（WhatsApp channel dead）— 直指用户核心功能不可用的问题，诉求迫切：
  - 用户无法通过 PicoClaw 连接 WhatsApp，机器人通道完全瘫痪
  - 由于依赖版本过旧，WhatsApp 服务端直接拒绝连接并返回 `Client outdated (405)`
  - 该问题属于典型的"上游依赖升级导致的集成失效"，社区用户的真实使用场景因此受损

- **#3321**（prefix caching）— 面向 API 成本与性能优化，理性诉求：
  - 当前动态上下文穿插在系统提示词中，破坏了 token 前缀缓存
  - 该设计问题导致每次请求的 token 缓存命中率下降，直接推高使用成本并增加响应延迟
  - 影响所有使用长对话上下文的 Agent 场景

### 5. Bug 与稳定性

| 严重程度 | 问题描述 | 状态 |
|---------|---------|------|
| **严重** | 原生 WhatsApp 通道彻底不可用，客户端版本被服务端拒绝（405） | 已有修复 PR（#3320），待合并 |
| **中等** | 动态上下文位置导致 token 前缀缓存失效，推理成本与延迟显著上升 | 已有优化 PR（#3321），待合并 |

**详细说明**：

**#3320** 是目前项目内最严重的稳定性问题。当前固定版本 `go.mau.fi/whatsmeow v0.0.0-20260219150138-7ae702b1eed4` 已被 WhatsApp 官方服务端淘汰，socket 连接约 5 秒后被强制断开，且没有自动重连机制。这意味着所有依赖 WhatsApp 通道的 PicoClaw 用户完全丧失该功能。修复方式为升级依赖版本，风险低。

**#3321** 是长期性能隐患。`## Current Time`、`## Runtime` 等动态上下文内容位于对话历史之前，每次生成新请求时都会改变系统消息前缀，导致所有缓存 token 失效。修复方式是将动态块移到历史记录之后，属纯内部结构调整，无 API 破坏。

### 6. 功能请求与路线图信号

过去24小时无新功能请求。但以下信号值得关注：

- **#3321** 反映维护者与社区对 LLM 成本优化的重视。鉴于 PicoClaw 此类 AI Agent 项目的 API 使用成本是主要运营负担，该优化很可能进入下一版本的合并清单。
- **#3320** 升级 whatsmeow 依赖属于兼容性维护，预计将同步进行。若维护者后续启用 WhatsApp 高级功能（如媒体消息、群组管理），此升级是必要前提。
- 无任何新功能提议，项目路线图未出现新信号。

### 7. 用户反馈摘要

过去24小时无新 Issue 或评论，但 PR 描述中透露了两类明确的用户痛点：

1. **WhatsApp 集成不可用**：用户依赖 WhatsApp 作为主要交互界面，通道故障导致 PicoClaw 在部分用户侧的实质"失联"。从代码层面看，版本过期后即使重连也不会成功，属于静默故障——用户直到主动发送消息时才发现通道早已不可用，缺乏健康检查与告警机制。
2. **成本敏感用户对 token 效率的期望**：尝试优化缓存行为的贡献者侧面反馈了部分用户在生产环境中遭遇的 Token 浪费问题，说明已有一定比例的用户在真实业务环境中重度使用长上下文。

维护者对这两类反馈的沉默是本日最需要关注的负面信号。

### 8. 待处理积压

以下 2 个 PR 均已超过 7 天未获维护者处理，且被 stale bot 标记，若不及时干预将面临自动关闭风险：

- **#3320** — WhatsApp 通道修复，创建于 2026-08-07，最后更新 2026-08-15，等待时间 9 天（[链接](https://github.com/sipeed/picoclaw/pull/3320)）
- **#3321** — 前缀缓存优化修复，创建于 2026-08-07，最后更新 2026-08-15，等待时间 9 天（[链接](https://github.com/sipeed/picoclaw/pull/3321)）

**强烈建议**：项目维护者在 24-48 小时内完成对这两项 PR 的 review 与 merge，否则将错失修复严重 Bug 和进行关键性能优化的窗口期，同时也将打击外部贡献者的积极性。若 PR 存在问题需要修改，应尽快给出明确反馈并移除 stale 标记。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-16

## 1. 今日速览

过去 24 小时 NanoClaw 仓库活跃度集中在 **Pull Request 通道**，共 22 条 PR 更新，其中 19 条处于打开/待合并状态，3 条已关闭/合并；Issues 侧无任何新开、活跃或关闭记录，新版本发布数为 0。核心团队（gavrielc）贡献了大量围绕权限、渠道适配、跨会话上下文和容器稳定性的 PR，显示出项目在架构扩展与稳定性加固两方面同时推进。整体判断：**项目活跃度中等偏高，但贡献高度集中于核心团队，社区外部输入较弱（Issue 侧 24 小时静默）**。

---

## 2. 版本发布

今日无新版本发布（最新 Releases 为空），无破坏性变更或迁移注意事项。

---

## 3. 项目进展

今日共 3 条 PR 被关闭（1 条合并、2 条关闭）。其中最重要的合并且有实质代码改动的是：

- **#3268 [CLOSED] fix(poll-loop): stopped loops leaked their active query's follow-up poller** — 修复 `runPollLoop` 在 `processQuery` 中驻留时无法响应停止信号的问题。根因是循环只在迭代间隙检查 `signal`，而循环通常停在保持打开状态的流上，导致 abort 后活动查询及其 500ms 后续轮询器泄漏。该修复对容器生命周期管理的可靠性有直接益处。
  链接: [PR #3268](https://github.com/nanocoai/nanoclaw/pull/3268)

- **#3117 [CLOSED] feat(skill): add-omarchy-statusbar — Waybar status indicator for NanoClaw** — 新增一个 Waybar 状态指示技能，供桌面端用户监控 NanoClaw 运行状态，被合并。
  链接: [PR #3117](https://github.com/nanocoai/nanoclaw/pull/3117)

- **#37 [CLOSED] Rename to DotClaw and switch from WhatsApp to Telegram** — 关闭（未合并）。该 PR 提议将项目重命名为 "DotClaw" 并将 WhatsApp 集成替换为 Telegram，但被关闭，可能与项目当前路线不符或替代 PR 已覆盖该需求。
  链接: [PR #37](https://github.com/nanocoai/nanoclaw/pull/37)

另外，19 条打开的 PR 中有 12 条来自核心团队成员 gavrielc，集中在权限系统（#3266、#3260）、渠道适配扩展（#3261、#3262、#3263）、跨会话上下文（#3257）、数据库迁移（#3256）和容器稳定性（#3252、#3254、#3255）等模块，构成一条清晰的**架构深化**主线。

---

## 4. 社区热点

今日 GitHub 界面未显示具体评论数（数据中评论字段为 undefined），因此无法断言"活跃讨论"最集中的条目。但从参与模式和 PR 标题/摘要看，以下几点值得关注：

- **gavrielc 的批量核心 PR（#3260-#3266）** 连续提交 7 条 PR，且均标记 `[follows-guidelines, core-team]`，表明核心团队正在集中推进一个较大范围的能力扩展批次，涉及权限策略、拦截器、渠道热启动和 Chat SDK 桥接。背后诉求可能是为多平台、多会话的复杂部署场景铺平基础设施。
  链接示例: [PR #3260](https://github.com/nanocoai/nanoclaw/pull/3260) · [PR #3263](https://github.com/nanocoai/nanoclaw/pull/3263) · [PR #3266](https://github.com/nanocoai/nanoclaw/pull/3266)

- **#37 品牌/渠道切换提案** 是唯一被构建为"全项目替换"的 PR（重命名 + WhatsApp→Telegram），虽然被关闭，但反映了部分用户对 Telegram 官方支持和品牌定位的期待。
  链接: [PR #37](https://github.com/nanocoai/nanoclaw/pull/37)

- **#2752 Discord 附件透传** 自 6 月提交以来至今未合并，是队列中历史最长的 PR 之一；它直接解决 Discord 上粘贴文本和图片不可读的实际问题，社区关注度较高。
  链接: [PR #2752](https://github.com/nanocoai/nanoclaw/pull/2752)

---

## 5. Bug 与稳定性

今日关闭了 1 条 Bug 修复 PR，另有 5 条 Bug 类 PR 正处于待合并状态。按严重程度排序：

| 严重度 | PR | 状态 | 问题描述 |
|-------|----|------|----------|
| 🔴 高 | [#3251](https://github.com/nanocoai/nanoclaw/pull/3251) | OPEN | **容器心跳停滞**：Claude API 限流时，心跳文件仅随 API 事件更新，可能 30+ 分钟无心跳，导致误杀仍在运行的容器 |
| 🟠 中高 | [#3255](https://github.com/nanocoai/nanoclaw/pull/3255) | OPEN | **消息投递解析错误**：多适配器实例共享同一 (channel_type, platform_id) 时，`deliverMessage` 可能将消息投递到错误的实例行 |
| 🟡 中 | [#3250](https://github.com/nanocoai/nanoclaw/pull/3250) | OPEN | **Telegram Markdown 降级**：legacy 清理器将 `**bold**` 降级为斜体，影响 agent 输出表现力 |
| 🟡 中 | [#3252](https://github.com/nanocoai/nanoclaw/pull/3252) | OPEN | **容器绝对上限杀死逻辑泄漏**：没有 `.heartbeat` 文件的空闲容器将永远豁免于绝对上限 kill |
| 🟢 已修复 | [#3268](https://github.com/nanocoai/nanoclaw/pull/3268) | CLOSED | **轮询循环泄漏**：停止的循环泄漏活动查询的 follow-up poller，已修复并合并 |

其中 #3251 是今日最值得关注的稳定性修复，因为它直接关系到容器生命周期管理的正确性；#3268 的合并则是今日最大的稳定性增益。

---

## 6. 功能请求与路线图信号

从今日提交的 PR 中可以看到以下功能性方向可能被纳入后续版本：

| 特性 | PR # | 说明 | 纳入可能性 |
|------|------|------|-----------|
| 渠道注册卡拦截器（interceptor seam） | [#3266](https://github.com/nanocoai/nanoclaw/pull/3266) | 在注册卡片构建前允许模块拦截 / 自定义审批流 | 高（核心团队提交） |
| `createAgent` 支持 `suppressCreatedNotify` | [#3265](https://github.com/nanocoai/nanoclaw/pull/3265) | 抑制创建成功消息但保留错误通知 | 高 |
| 未投递批次预览钩子 | [#3264](https://github.com/nanocoai/nanoclaw/pull/3264) | 交付前允许模块窥探整个未投递批次（如费用预取） | 高 |
| 渠道适配器热启动 | [#3263](https://github.com/nanocoai/nanoclaw/pull/3263) | 无需重启即可启动新注册的适配器实例 | 高 |
| Chat SDK 桥接 agent 模式 DM 表面 | [#3262](https://github.com/nanocoai/nanoclaw/pull/3262) | 应用上下文捕获 / DM 线程归一化 / dm-opened 钩子 | 高 |
| 额外可选适配器能力 | [#3261](https://github.com/nanocoai/nanoclaw/pull/3261) | `setTyping` 状态行、`setThreadTitle`、`setSuggestedPrompts` | 中高 |
| 新策略 `decline_notify` | [#3260](https://github.com/nanocoai/nanoclaw/pull/3260) | 未知发送者：礼貌拒绝 + 一句话通知所有者 | 高 |
| 跨会话上下文模块 | [#3257](https://github.com/nanocoai/nanoclaw/pull/3257) | 会话间消息 fan-out、DM 回填、`ncl sessions history` | 中高 |
| `messaging_groups.detached_at` 迁移 | [#3256](https://github.com/nanocoai/nanoclaw/pull/3256) | 记录 bot 被移出会话的时间，防止误投递 | 高 |

其中 #3256、#3260、#3266 面向的是权限与投递合规性问题，可能对应近期社区反馈的"误入老群发消息""未知用户打扰"等使用痛点。由于这些 PR 都来自 core-team 且遵循指南，预计会被优先合并。

---

## 7. 用户反馈摘要

从今日可见的 PR 描述中可提炼出以下真实用户痛点：

- **Telegram 输出格式损失**（[#3250](https://github.com/nanocoai/nanoclaw/pull/3250)）：用户观察到 agent 输出的加粗文本在 Telegram 上渲染为斜体，这是由冗余的 legacy sanitizer 造成的，直接影响消息可读性和视觉层级。该 PR 建议直接移除清理器，说明维护者对问题根源已有清晰判断。

- **Discord 附件无法读取**（[#2752](https://github.com/nanocoai/nanoclaw/pull/2752)）：用户粘贴文本（如代码）或图片到 Discord 后，agent 只看到 `[file: message.txt]` / `[image: foo.png]` 而没有任何字节或路径。这属于实际使用中的功能缺失，且从 6 月至今已有 2 个月未合并，可能是社区等待时间最长的修复之一。

- **API 限流期间误杀容器**（[#3251](https://github.com/nanocoai/nanoclaw/pull/3251)）：用户（PR 作者 DawoudIO）在真实运行中遇到 Claude API 限流 30+ 分钟无法触摸心跳文件，导致容器被误杀。这不仅是稳定性问题，也可视为**可靠性信任问题**——用户对项目在异常流量下的自我保护能力存在疑虑。

- **品牌与渠道方向的分歧**（[#37](https://github.com/nanocoai/nanoclaw/pull/37)）：该 PR 试图将项目重命名为 DotClaw 并迁移至 Telegram。虽然被关闭，但它的存在说明一部分贡献者希望项目更紧密绑定 Telegram 生态，并认为 "NanoClaw" 品牌不再贴合新方向。

---

## 8. 待处理积压

以下 PR / Issue 长期未合并或未关闭，建议维护者重点关注：

| 项目 | 创建时间 | 最后活动 | 状态 | 处理建议 |
|------|---------|---------|------|----------|
| [PR #2752](https://github.com/nanocoai/nanoclaw/pull/2752) — Discord 附件透传 | 2026-06-12 | 2026-08-15 | OPEN（2 个月+） | **高优先级**：Discord 用户实际功能缺失，且是明确的 bug 修复，应尽快 review 或给出计划 |
| [PR #37](https://github.com/nanocoai/nanoclaw/pull/37) — 重命名 + Telegram 迁移 | 2026-02-02 | 2026-08-15 | CLOSED | 已被关闭，但 6 个月长存本身说明早期 PR 审核周期过长；建议维护者发布关闭理由，避免贡献者困惑 |
| [PR #3117](https://github.com/nanocoai/nanoclaw/pull/3117) — Waybar 状态栏技能 | 2026-07-22 | 2026-08-15 | CLOSED | 已被合并，但此前在队列中约 3 周，对于纯技能类 PR 仍偏慢 |

> 提示：今日数据未展示 Issues 侧内容（最新 Issues 为空），因此"社区热点"和"用户反馈"部分主要依赖 PR 描述中的间接信号。在 Issue 活跃度接近零的情况下，PR 是当前社区输入的主通道，维护者可考虑从这些 PR 中归纳路线图。

---

**报告生成时间**: 2026-08-16  
**数据来源**: [NanoClaw GitHub 仓库](https://github.com/nanocoai/nanoclaw)  
**数据窗口**: 过去 24 小时

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-16

## 1. 今日速览
过去24小时内，NullClaw 仓库保持低活跃但有实质更新：新增 1 个 issue（功能请求）和 1 个待合并 pull request，无新版本发布。Issue #988 请求为 providers 增加 HTTP(S) 与 SOCKS(5h) 代理支持，反映真实部署环境中的网络需求；PR #987 针对长时间本地工具密集型运行进行了 agent 循环卫生优化，包含系统提示词拆分、工具输出压缩等改进，尚未合并。整体项目状态稳定，社区参与度处于日常水平，待办积压较少。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
- **PR #987 [OPEN] feat(agent): loop hygiene for long local tool-heavy runs**  
  [链接](https://github.com/nullclaw/nullclaw/pull/987)  
  由 vernonstinebaker 提交，当前处于待合并状态。该 PR 主要解决长时、本地工具密集运行场景下的上下文管理问题：
  - 将系统提示词拆分为缓存友好的稳定前缀（`buildStablePrefix`）与可变日期时间后缀（`buildVariableTail`），并通过 `stablePrefixHash` 提升缓存利用率；
  - 在历史注入前压缩工具输出（`result_compress.zig`），而 observer 日志仍保留完整输出；
  - 增加每轮相同调用的检测逻辑（摘要中被截断，未列出完整细节）。
  
  该改动若被合并，将显著降低长任务中的 token 消耗与上下文膨胀风险，提升 agent 运行的稳定性和可持续性。

## 4. 社区热点
今日仓库内无高评论量或高反应量的议题。最新的两个条目（Issue #988 与 PR #987）均为今日新开，尚未引发讨论，但代表了当前社区的主要关注方向：
- **Issue #988**：用户希望支持代理（proxy），这表明部分用户在网络受限环境（如企业防火墙、地区网络限制）中使用 NullClaw，需要灵活的网络出口配置。
- **PR #987**：开发者主动优化长任务场景下的提示词与上下文管理，体现对实际使用中“长时运行导致上下文膨胀”痛点的重视。

## 5. Bug 与稳定性
今日未报告新的 Bug、崩溃或回归问题。PR #987 中提及的“长时运行优化”可视为对稳定性间接改进，但并非 bug 修复。

## 6. 功能请求与路线图信号
- **Issue #988 [OPEN] [enhancement] proxy support**  
  [链接](https://github.com/nullclaw/nullclaw/issues/988)  
  用户明确要求为 providers 增加 HTTP(s) 和 SOCKS(5h) 代理支持。该请求对于需要访问外部模型 API 但受网络限制的用户至关重要。从现有 PR 来看，项目当前关注点主要在 agent 内部循环效率，尚未有代理相关实现。该功能很可能进入后续版本规划，尤其是如果社区持续呼声较高。

## 7. 用户反馈摘要
- 来自 Issue #988 的请求体现了用户在使用外部 provider 时可能遇到的网络障碍。用户未提供更多细节，但“please add HTTP(s) and SOCKS(5h) proxy support for providers”直接表明了生产环境中的真实需求。
- PR #987 的提交者（可能是核心贡献者或外部开发者）主动描述了对长任务运行体验的改进方向，侧面反映出当前在“本地工具重负载”场景下存在上下文管理效率不足的痛点。

## 8. 待处理积压
截至今日，仓库内无长期未响应的重要 Issue 或 PR。当前积压仅包含今日新增的 1 个 issue 和 1 个待合并 PR，维护者负载较低。建议关注 PR #987 的审核进度，以及 Issue #988 的后续反馈（如用户澄清具体使用场景），以便及时纳入路线图。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-16

## 1. 今日速览

过去 24 小时 IronClaw 保持高强度迭代：27 条 Issue 更新（6 条新开/活跃，21 条关闭），13 条 PR 更新（7 条待合并，6 条合并/关闭），无新版本发布。项目当前重心清晰落在**性能写放大治理（epic #7591）**与 **unbound-turns 架构切换收尾**上：心跳日志、线程索引合并、触发器状态剪枝等 Tier 1/2 优化项均有 PR 落地并带动对应 Issue 关闭，unbound-turns 设计+实现双 PR（#7562/#7634）同日合并，标志着该架构转向基本完成。此外 Live Canary 连续 30 次全红的测试基建问题被公开暴露并已有修复 PR，整体活跃度与问题响应速度均属健康水平。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭的关键 PR 集中在两条主线上：

**unbound-turns 架构切换完成**
- [#7634（已合并）](https://github.com/nearai/ironclaw/pull/7634) — feat(unbound-turns): complete the switchover to prepared-context turns：完成向 prepared-context 模式的全面切换，包含 #7633 全部 follow-up，并通过 71 条一致性审计；所有分歧均已闭合或显式记录。
- [#7562（已合并）](https://github.com/nearai/ironclaw/pull/7562) — feat(unbound-turns): design + phase 1：基础设计文档 + 阶段一实现（prepared-context accept door、unbound run lane、kernel binding-ref 删除），为 #7634 铺路。

**性能写放大治理（epic #7591）**
- [#7628（已合并/关闭）](https://github.com/nearai/ironclaw/pull/7628) — perf(processes): remove heartbeat journal churn：停止为每次心跳追加 `ProcessJournalKind::Heartbeat` 行并保留 lease 时间戳权威性，对应关闭 #7593。
- [#7629（已合并/关闭）](https://github.com/nearai/ironclaw/pull/7629) — perf: reduce trigger and outbound state writes：将 run-history 剪枝从每次 Running 行更新移到首次 fire claim，对应关闭 #7595。
- [#7676（已合并/关闭）](https://github.com/nearai/ironclaw/pull/7676) — perf(threads): coalesce thread index touches：合并突发性线程活动写入，单线程每轮最多 7 次 CAS 重写降为 ≤1 次，对应关闭 #7596。
- [#7670（已合并）](https://github.com/nearai/ironclaw/pull/7670) — chore(agents): refresh codebase knowledge graph：CI 例行代码库记忆快照刷新（无功能变更）。

伴随上述 PR，21 条 Issue 关闭，其中包含 Reborn 多条史诗级收尾（#4775 自动化 QA、#4629 遗留路径与配置删除、#4646 内部托管部署、#3423 循环输入恢复/取消语义、#3236 同线程 follow-up 策略），Reborn 迁移的遗留债务正在系统性清除。

## 4. 社区热点

- **[#467 Trajectory benchmark system（4 条评论，活跃跨度约 5 个月）](https://github.com/nearai/ironclaw/issues/467)**：由 zmanian 提出的智能体轨迹评测系统，主张以真实用户场景 + 真实 LLM 调用运行完整 agent loop，再用"硬断言 + LLM-as-judge"双层标准评估工具选择、响应内容、成本与延迟。该 Issue 创建于 3 月 2 日，8 月 15 日仍有更新，是当前最持久的讨论热点，反映社区对"可量化智能体质量评估"的强烈需求。

- **#7634 评审链催生 4 个新 Issue（#7671–#7674）**：来自 BenKurrek 的 unbound-turns 大 PR 在评审中产出了栈压力、类型化 ToolChoice、预算记账边界、架构测试符号级 allowlist 等系统性改进建议，并全部转为可追踪工作项。这是典型的健康评审文化：审查意见被结构化沉淀而非流失在评论流中。

- **Live Canary 连续 30 次变红（[#7679](https://github.com/nearai/ironclaw/pull/7679)）**：定时 canary 30/30 全红，但其中 3 个失败实为测试框架自身缺陷误报了"正确的产品行为"。维护者在 PR 描述中逐条列出失败率、根因与持久化证据对比，测试基建可靠性成为运维侧关注焦点。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 编号 | 描述 | Fix 状态 |
|---|---|---|---|
| 高 | [#7675](https://github.com/nearai/ironclaw/issues/7675) | E2E `qa_6c_gmail_to_sheet_live_chat` 偶发资源类能力失败，可级联拖垮整个 provider-contracts 会话；责任人已证实与 #7634 无关 | 无 fix PR，待跟进 |
| 高 | [#7679](https://github.com/nearai/ironclaw/pull/7679) | Live Canary 30/30 全红：3 个 harness 缺陷误报正确产品行为，1 个存活代理误伤有持久化证据支撑的用例 | 已有修复 PR #7679（XL，待合并） |
| 中 | [#7671](https://github.com/nearai/ironclaw/issues/7671) | LoopCapabilityPort 装饰器链编译为超大 poll frame，导致默认 2 MiB 测试线程栈溢出（`reborn_integration_model_recovery`） | 已缓解（f1f396cd8 chain-boxing），残余栈压力仍在跟踪 |
| 中 | [#6821](https://github.com/nearai/ironclaw/issues/6821) | IronHub 搜索将 free-text 命中也当作完整目录条目：问"可安装内容"只报 3 个工具（实际 18 个），且列出 20 个非目录技能 | 已关闭 |
| 中 | [#6835](https://github.com/nearai/ironclaw/issues/6835) | MCP `McpError::AuthRequired` 被错误归类为 Client 错误，永不触发 re-auth 门 | 已关闭 |
| 低 | [#5237](https://github.com/nearai/ironclaw/issues/5237) | `IRONCLAW_REBORN_LOG=debug` 时 Cranelift/Wasmtime 编译器 DEBUG 日志刷屏 Railway | 已关闭 |
| 低 | [#5239](https://github.com/nearai/ironclaw/issues/5239) | `turn_scheduler` 将运行完成后的陈旧心跳误判为 runner 故障，触发误报终态路径 | 已关闭 |

## 6. 功能请求与路线图信号

- **评测体系（#467）**：轨迹基准系统仍是最大的路线图悬案，若纳入规划将显著提升智能体质量评估能力；建议明确状态（规划中/搁置/待认领）。
- **类型化 ToolChoice（[#7672](https://github.com/nearai/ironclaw/issues/7672)）**：来自 #7634 评审，建议用强类型替代跨 provider 的 `tool_choice: Option<String>` 重载（rig_adapter、bedrock、nearai_chat、gemini_oauth、codex_chatgpt 等 6 个编码器均受影响），属于 API 健壮性改进，大概率随下一轮 provider 抽象重构纳入。
- **预算核算细化（[#7673](https://github.com/nearai/ironclaw/issues/7673)）**：BudgetLedger 存在"截断启动窗口双重计费"与"charge 持久化"两个边界缺口（均为保守方向错误，不会超支），预计小步快跑式修复。
- **确定性无结果抑制（[#7651，待合并](https://github.com/nearai/ironclaw/pull/7651)）**：automations 支持由模型从用户措辞推导 `result_delivery` 意图（仅通知/变更时通知/结果），中性措辞确定性回退为 `deliver`。已具备完整实现，可能进入下一版本。
- **OMP 核心工具契约（[#7491，待合并](https://github.com/nearai/ironclaw/pull/7491)）**：统一编码工具表面为 `read/write/edit/glob/grep/bash` 六个裸名字，移除旧文件工具与 `builtin__*` 派生拼写，属较大行为变更（风险 medium），需评估迁移影响。
- **IronHub agent 链接运维界面（[#7516，待合并](https://github.com/nearai/ironclaw/pull/7516)）**：为 WebUI Extensions 页新增 IronHub 注册 URL 与共享密钥安装面，补齐 CLI-only 的运维缺口。

## 7. 用户反馈摘要

- **IronHub 搜索结果误导（#6821）**：用户询问"可安装内容"时 agent 只报告 3 个工具（实际目录 18 个），且后续列出的 21 个技能中 20 个并非目录条目。反馈指向语义搜索与结构化目录之间的边界守卫不足，该问题已在 live preview 和本地 signed catalog 双环境复现。
- **QA 可靠性挫败感（#7679）**：维护者对"30 次全红但多为 harness 自身问题"明确提出不满，强调"durable evidence held"（持久化证据显示产品行为正确）。测试基建质量已成为团队运维侧的实际痛点，而非单纯的产品 bug。
- **测试置信度质疑（#6726）**：`register_generic_channel_outbound_targets` 可替换为 no-op 且所有测试层级仍通过（52 个变异体中 39 个被捕获、12 个不可行、该函数为唯一幸存者）。开发者对当前测试对扩展宿主通道注册路径的覆盖深度表达了不信任。
- **多轮长会话输入语义诉求（#3236/#3423）**：用户对"同一 canonical thread 内 follow-up、`/btw` 显式转向、队列可见性/排序、取消交互、blocked-run 行为"的确定性有明确要求；两条 Issue 均已关闭，语义已定义并落地，属于已解决的反馈。

## 8. 待处理积压

- **[#467 Trajectory benchmark system](https://github.com/nearai/ironclaw/issues/467)**：开放 167 天，仅 4 条评论。作为评测体系的关键提案长期未进入实施阶段，建议维护者明确规划状态或移交至 roadmap 跟踪。
- **[#7491 OMP core-tool contract（XL，待合并）](https://github.com/nearai/ironclaw/pull/7491)**：自 8 月 11 日开启，覆盖编码工具契约、引擎、benchmark 三部分，涉及行为变更，需关注 review 进展与迁移方案。
- **[#7516 WebUI 运维界面（XL，新贡献者）](https://github.com/nearai/ironclaw/pull/7516)**：8 月 12 日由新贡献者 neo-sky 提交，为 IronHub agent 链接补齐 WebUI 运维面；新贡献者的大型 PR 需要及时引导与 review 资源投入。
- **[#7651 automations 无结果抑制（XL，待合并）](https://github.com/nearai/ironclaw/pull/7651)**：8 月 14 日开启，功能完整但依赖模型对用户措辞的意图推导，需评估跨模型稳定性后再合入。

---

**项目健康度小结**：合并密度高、性能债治理推进扎实、Review 意见能系统性转化为 Issue（#7671–#7674 即为典型）；需要关注的是 Live Canary 连续变红暴露的测试基建脆弱性、#467 这类长期悬置的路线级提案，以及 3 个 XL 待合并 PR 的 review 积压风险。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI 项目动态日报 — 2026-08-16

> 数据来源: [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

## 1. 今日速览

过去 24 小时，LobsterAI 仓库共更新 **18 条 Issue**（16 条已关闭、2 条仍开放）与 **6 条 PR**（2 条已合并/关闭、4 条待合并），**无新版本发布**。项目当前处于"**存量清理 + 稳定性补丁**"阶段：16 条关闭的 Issue 全部带 `stale` 标记，说明主要是超期未处理被自动归档，而非功能交付；真正有价值的产出是 2 个合入的修复 PR——插件加载路径保留（#1879）与 cron yield 子 agent 终结逻辑（#2234）。此外，4 条 dependabot CI 依赖更新 PR 已搁置 2 个月未合并。**活跃度评估：中等偏低**——核心功能迭代放缓，社区反馈消化率不足，但仍有高价值用户持续提交深度架构分析与产品建议。

## 2. 项目进展

今日合入/关闭的 2 条 PR 均为实质性修复，无新功能上线：

### PR #1879（已合并/关闭）— 保留用户手动添加的插件加载路径
- 链接: https://github.com/netease-youdao/LobsterAI/pull/1879
- 作者: gvaiis
- **问题**：`OpenClawConfigSync.sync()` 写回 `openclaw.json` 时，会以 LobsterAI 管理的第三方扩展目录**覆盖**用户手动添加的 `plugins.load.paths`，导致通过 `pm install` 安装的社区插件（如 memory-lancedb-pro）配置在同步时被静默丢弃。
- **影响**：修复了高级用户安装社区插件后配置丢失的回归问题，是插件生态扩展能力的关键补丁。

### PR #2234（已合并/关闭）— 修复 cron yield 子 agent 完成事件驱动逻辑
- 链接: https://github.com/netease-youdao/LobsterAI/pull/2234
- 作者: btc69m979y-dotcom
- **问题**：`sessions_yield` 后，子 agent 完成事件无法驱动父 agent 继续运行；yielding 状态下 completion 事件被错误写入已结束的 run。
- **修复**：在 cron finalization 阶段增加 yield continuation 循环，覆盖普通会话并行子 agent、cron 并行子 agent、cron 串行子 agent 三种场景。
- **影响**：显著提升多 agent 编排（尤其定时任务场景）的稳定性。

**评估**：两个修复分别落在"插件生态"与"agent 编排"方向，说明维护团队仍在消化存量技术债，合入节奏（24h 2 个修复）处于可接受范围。

## 3. 社区热点

### 评论最活跃的 Issue（各 4 条评论）

- **Issue #1849 — 追问时无限 NO_REPLY 或输出中断**  
  https://github.com/netease-youdao/LobsterAI/issues/1849  
  用户 atdow 根据日志发现任务被提前标记 complete，但模型仍在输出，导致页面无数据响应。该问题涉及流式输出生命周期管理，直接损害核心对话体验，是今日讨论热度最高的 bug。

- **Issue #1878 — 微信接口扫码后无法输入验证码**  
  https://github.com/netease-youdao/LobsterAI/issues/1878  
  微信端扫码后，openclaw 要求输入 6 位数字验证码，但 LobsterAI 客户端无对应输入界面，整个 IM 机器人配置流程中断，反映 IM 生态集成的完成度问题。

### 深度社区讨论：用户 woxinsj 的"OpenClaw 解剖"系列

用户 woxinsj 在 5 月连续提交 4 条高信息量 Issue，形成一个小型系列：

| Issue | 主题 | 核心观点 |
|-------|------|----------|
| [#2036](https://github.com/netease-youdao/LobsterAI/issues/2036) | agent:turn/agent:loop 事件 | 建议 OpenClaw gateway 增加事件广播，实现主循环实时落盘 |
| [#2039](https://github.com/netease-youdao/LobsterAI/issues/2039) | Dreaming 开关 bug | 配置被写入 memory-core 不认的路径，重启后消失，属上游 bug |
| [#2040](https://github.com/netease-youdao/LobsterAI/issues/2040) | OpenClaw 五大薄弱点 | 记忆缺失、安全漏洞严峻（63 天 138 个漏洞、1467 个恶意 Skill）、Token 成本失控、部署繁琐 |
| [#2041](https://github.com/netease-youdao/LobsterAI/issues/2041) | 记忆系统对比分析 | 将 OpenClaw 与 self-evolver 框架逐维度对比，指出记忆层面差距 |

虽然多数被 stale 机制关闭，但代表了技术型社区对项目架构方向的高度投入，**对路线图有直接参考价值**，建议维护者系统消化。

## 4. Bug 与稳定性

今日更新的 18 条 Issue 中，9 条属于 Bug/稳定性类，按严重程度排序：

| 严重度 | Issue | 问题描述 | 当前状态 |
|--------|-------|----------|----------|
| 🔴 高 | [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) | **邮箱 SKILL 路径穿越漏洞**——`imap.js` 的 `downloadAttachments` 未过滤邮件附件名即拼接路径，存在任意文件写入风险 | 已 stale 关闭，未见 fix PR |
| 🔴 高 | [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) | **会员登录频繁失败**，无法使用网易付费模型 | 仍 OPEN ⚠️ |
| 🟠 中 | [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) | 追问时无限 NO_REPLY，任务提前 complete 但模型未停止输出 | 已 stale 关闭 |
| 🟠 中 | [#1988](https://github.com/netease-youdao/LobsterAI/issues/1988) | 更新后阿里百炼 coding plan 的 qwen3.6-plus 被**强制改写**为网易模型配置，手动改配置文件无效 | 已 stale 关闭 |
| 🟠 中 | [#1993](https://github.com/netease-youdao/LobsterAI/issues/1993) | 桌面端持续提示 "AI engine connection lost"，同一用户 IM Bot 却连接稳定 | 已 stale 关闭 |
| 🟠 中 | [#2017](https://github.com/netease-youdao/LobsterAI/issues/2017) | 本地运行提示"未检测到内置 OpenClaw runtime"，无法登录/建任务 | 已 stale 关闭 |
| 🟠 中 | [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) | 微信扫码后验证码输入界面缺失，配置流程中断 | 已 stale 关闭 |
| 🟡 低 | [#1971](https://github.com/netease-youdao/LobsterAI/issues/1971) | 含超长 Mermaid 元素时会话页滚动异常（虚拟滚动与大元素渲染冲突） | 已 stale 关闭 |
| 🟡 低 | [#2039](https://github.com/netease-youdao/LobsterAI/issues/2039) | Dreaming 开关重启后配置消失（上游 memory-core schema 限制） | 已 stale 关闭 |

**⚠️ 特别提醒**：#1885 是安全漏洞，用户已给出完整漏洞位置与代码片段。即使 Issue 已被 stale 关闭，也应尽快确认修复状态，避免"已知但未修复"的高危漏洞被流程掩埋。

## 5. 功能请求与路线图信号

### 仍开放的需求文档

- **Issue #2046（OPEN）— Agent 记忆体系产品建议**  
  https://github.com/netease-youdao/LobsterAI/issues/2046  
  用户 X9-laser 撰写了结构化产品建议：最高优先级为将 session 标题/元数据持久化到文件系统（当前存在浏览器 IndexedDB，Agent 读不到），其次是跨 session 记忆的自动检索与关联。这是目前内容最完整、可执行性最高的功能蓝图。

### 已关闭但信号明确的需求

- [#1836 整体 UI 重新设计](https://github.com/netease-youdao/LobsterAI/issues/1836) — 用户直言对比竞品"过于丑了"，体验层强诉求
- [#1880 增加 Hermes Agent 功能](https://github.com/netease-youdao/LobsterAI/issues/1880) — 参照 Open WebUI 的 agent 接入模式
- [#2016 增加 openhuman 引擎](https://github.com/netease-youdao/LobsterAI/issues/2016) — 新引擎接入请求
- [#2036 增加 agent:turn/agent:loop 事件广播](https://github.com/netease-youdao/LobsterAI/issues/2036) — 面向实时数据持久化的架构改进

### 路线图信号聚合

综合上述需求与 woxinsj 的系列分析，社区最集中的呼声是：**① Agent 记忆体系（#2046/#2041）；② 模型接入开放性（#1988）；③ UI 体验升级（#1836）；④ 多 agent 编排可观测性（#2036）**。其中记忆体系横跨 3+ 条高质量 Issue，且与 OpenClaw 上游能力绑定，建议视为下一版本的核心叙事。

## 6. 用户反馈摘要

**高频痛点：**

- **登录链路最伤体验**：[#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) 用户因会员登录失败无法使用已付费的网易模型；[#2017](https://github.com/netease-youdao/LobsterAI/issues/2017) 本地运行同样登录失败。两条 Issue 指向登录/运行时检测存在多处断点，且直接阻断付费能力，优先级应最高。
- **配置自主权不足**：[#1988](https://github.com/netease-youdao/LobsterAI/issues/1988) 用户反馈"修改配置文件也没用，系统会强制改成错误的"——对技术用户而言，这是信任度杀伤力极大的问题。
- **桌面端稳定性弱于 IM Bot**：[#1993](https://github.com/netease-youdao/LobsterAI/issues/1993) 明确指出同一用户不同入口连接稳定性不一致，暗示桌面端与网关的连接实现存在差异。
- **IM 集成细节粗糙**：[#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) 微信验证码无输入界面，功能呈"半成品"状态。

**正面信号：**

- 有用户（woxinsj、X9-laser 等）花费大量精力撰写深度对比分析和产品建议，说明项目在 AI Agent 技术圈层拥有忠实的高技术力用户基础，这是重要的社区资产。
- [#2040](https://github.com/netease-youdao/LobsterAI/issues/2040)/[#2041](https://github.com/netease-youdao/LobsterAI/issues/2041) 中用户对 skill-self-evolver、记忆系统等概念理解深入，形成了良好的技术讨论氛围。

## 7. 待处理积压

| 类型 | 项目 | 创建时间 | 说明 |
|------|------|----------|------|
| Issue | [#1903 会员登录频繁失败](https://github.com/netease-youdao/LobsterAI/issues/1903) | 2026-05-07 | 已开放超 100 天，带 stale 标记，直接阻断付费模型使用 |
| Issue | [#2046 Agent 记忆体系建议](https://github.com/netease-youdao/LobsterAI/issues/2046) | 2026-05-25 | 高质量功能文档，带 stale 标记，建议纳入 roadmap 评审 |
| PR | [#2164 trufflehog 安全扫描器升级](https://github.com/netease-youdao/LobsterAI/pull/2164) | 2026-06-15 | 依赖安全更新，搁置 2 个月 |
| PR | [#2165 actions/checkout 4→6](https://github.com/netease-youdao/LobsterAI/pull/2165) | 2026-06-15 | CI 依赖更新 |
| PR | [#2166 paths-filter 3→4](https://github.com/netease-youdao/LobsterAI/pull/2166) | 2026-06-15 | CI 依赖更新 |
| PR | [#2167 actions/stale 9→10](https://github.com/netease-youdao/LobsterAI/pull/2167) | 2026-06-15 | CI 依赖更新 |

**维护者行动建议：**

1. **优先处理 #1885 安全漏洞**，确认是否已有修复或安排 fix PR，勿让高危漏洞被 stale 流程掩埋。
2. **尽快合并 4 条 dependabot PR**——其中 trufflehog 属于安全扫描组件，长期搁置会削弱 CI 安全能力。
3. **对 #1903、#2046 明确表态**：安排排期或显式标记 backlog 意图，避免社区长期得不到反馈。
4. 今日批量关闭的 16 条 Issue 中，**至少 #1885、#1988 两条有实质价值**，建议作为 stale 清理的例外重新纳入 triage。

---

**总体健康度**：🔶 中性偏谨慎。项目有持续的稳定性修复与高粘性社区，但 Issue 消化率低、依赖更新滞后、无新版本释放，处于"守成"而非"进取"阶段。若 8 月下旬仍无 release 或核心特性 PR，社区热度可能进一步流失。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-08-16

## 1. 今日速览

过去 24 小时 Moltis 共产生 6 条 PR 更新（3 条合并/关闭、3 条待合并），无 Issue 新增/关闭，无新版本发布，整体处于中等活跃度。全部 PR 均来自同一作者（penso），呈明显的维护者驱动开发节奏，聚焦远程沙箱执行、连接器生态、Slack 原生体验与 OpenAI 推理链路修复。产出速度稳定，但 Issue 与评论数据均为 0，社区外部参与信号偏弱，项目健康度呈"开发活跃、讨论冷清"的特征。

## 2. 项目进展

今日合并/关闭 3 项 PR，分别落在稳定性修复、交互入口与模型链路三个方向：

- **[#1196 修复 ClawHub 技能搜索结果](https://github.com/moltis-org/moltis/pull/1196)**：改为直接消费搜索元数据，取消逐结果的额外 ClawHub 请求，避免 RPC 超时，并在 detail/scan/download/install 全流程中携带 owner-qualified 引用。这解决了技能搜索"搜不到/搜超时"的实际问题。
- **[#1197 从命令面板发起 Agent 对话](https://github.com/moltis-org/moltis/pull/1197)**：在命令面板查询末尾追加 "Ask agent" 操作，支持在会话搜索未完成时即可发起，创建新会话并立即发送查询。这是对日常使用路径的直观优化。
- **[#1198 OpenAI 推理工具调用改走 Responses API](https://github.com/moltis-org/moltis/pull/1198)**：当请求同时包含 function tools 与 `reasoning_effort` 时自动路由至 Responses API，并保证流式/非流式请求构造一致；对于无工具、无推理参数或 OpenAI 兼容供应商，则保留 Chat Completions 行为，兼容性考虑较周全。

整体来看，三项改动体量都不大，但分别补强了"搜索稳定性""入口体验""模型链路正确性"，属于稳步小幅推进。

## 3. 社区热点

今日所有 Issues/PR 的 👍 均为 0，评论数据缺失，**没有形成实际社区讨论**。从 PR 体量与内容看，以下两条开放 PR 最值得关注：

- [#1199 Coder 远程工作区沙箱支持](https://github.com/moltis-org/moltis/pull/1199)：通过 REST API 创建临时工作区，经 reconnecting PTY WebSocket 执行命令，支持模板 ID/名称、presets、rich parameters、TTL 及自动后端选择。这是执行环境的重大扩展。
- [#1190 持久化日历、频道与邮件连接器](https://github.com/moltis-org/moltis/pull/1190)：引入 provider-neutral 持久化、原子快照、调度、投影与本地全文搜索，覆盖 CalDAV、Gmail、Himalaya v2 及频道历史数据。

两者均缺少外部评论与反馈，建议维护者主动在相关渠道同步设计动机，吸引用户场景验证。

## 4. Bug 与稳定性

今日无新提交的 Bug Issue，但合并了 1 项稳定性修复：

- **中优先级**：ClawHub 技能搜索因逐结果请求元数据导致 RPC 超时（[#1196 已合并](https://github.com/moltis-org/moltis/pull/1196)），修复后搜索延迟与失败率应显著下降。

未发现崩溃、回归或数据安全类严重问题。需注意的是，[#1199](https://github.com/moltis-org/moltis/pull/1199) 涉及 PTY WebSocket 重连、TTL 生命周期与多后端切换，属于易出边界问题的改动，合并前建议补充沙箱会话超时与断线重连的回归测试。

## 5. 功能请求与路线图信号

今日无新功能请求 Issue，但 3 条开放 PR 构成了清晰的路线图信号：

- **多沙箱后端架构**（[#1199](https://github.com/moltis-org/moltis/pull/1199)）：新增 Coder 后端并支持"自动后端选择"，暗示未来会接入更多远程/隔离执行环境，是下一版本的重要能力方向。
- **数据连接器基础设施**（[#1190](https://github.com/moltis-org/moltis/pull/1190)）：连接器持久化 + 原子快照 + 调度 + 投影 + 本地全文搜索，说明项目正在构建可复用的数据接入层，或为长期记忆、跨渠道上下文功能铺路。
- **IM 原生交互增强**（[#1195 Slack 原生 live task 卡片](https://github.com/moltis-org/moltis/pull/1195)）：以 opaque per-run ID 保护卡片隐私，并做失败流的终端清理，兼顾功能与安全。

综合判断，下一迭代重点可能是"接入更多数据源 + 更多沙箱执行环境 + 更深度的 IM 集成"。

## 6. 用户反馈摘要

24 小时内无 Issue 评论或 PR 讨论数据，无法直接提炼用户声音。仅能从 PR 动机做间接推断：

- **ClawHub 技能搜索超时**（[#1196](https://github.com/moltis-org/moltis/pull/1196)）应是真实使用中遇到的痛点，修复响应及时。
- **命令面板直接发起 Agent 对话**（[#1197](https://github.com/moltis-org/moltis/pull/1197)）反映了用户"先检索、再追问"的连贯操作诉求。
- **Coder 沙箱的 TTL、presets、rich parameters 支持**（[#1199](https://github.com/moltis-org/moltis/pull/1199)）表明用户需要可配置、可自动回收的临时工作区。

建议在合并 #1190 与 #1199 前，通过 Issue 或社区讨论征集使用场景，验证设计假设是否贴合真实需求。

## 7. 待处理积压

- **[#1190 持久化日历/频道/邮件连接器](https://github.com/moltis-org/moltis/pull/1190)**：创建于 08-11，更新于 08-15，已开放约 5 天，是当前最久的开放 PR。涉及持久化、快照、调度、搜索与信任边界，复杂度高，建议尽快安排 review、拆分或明确集成排期，避免长期搁置。
- **[#1199 Coder 沙箱支持](https://github.com/moltis-org/moltis/pull/1199)** 与 **[#1195 Slack 原生任务卡片](https://github.com/moltis-org/moltis/pull/1195)**：均为 08-15 创建，急需 review 反馈或进入合并流程，以防在下一个发布窗口前堆积。

另外，近 24 小时全部 PR 均出自同一作者，存在 bus factor 风险；建议鼓励外部贡献者参与代码 review 与 Issue 讨论，以提升项目长期健康度。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-16

### 今日速览
过去 24 小时 CoPaw 项目（核心产品：QwenPaw）保持高活跃度：共 10 条 Issue 更新（9 条新开/活跃、1 条关闭）、11 条 PR 更新（全部待合并，0 条合并/关闭），无新版本发布。新增 Issue 高度集中在视频处理链路、OAuth2 刷新、附件持久化等稳定性问题，其中视频缺陷（#7059、#7060）已获 PR #7061 快速跟进，形成"当日报告、当日补丁"的高效协作。社区参与度健康：11 条 PR 中有 7 条来自首次贡献者，覆盖 DataPaw 运行时、Matrix 会话隔离、远程浏览器桥接等扩展方向。值得关注的是合并侧为空——0 条 PR 合并、0 个版本释出，维护者 review 速度可能正在成为社区贡献热情的瓶颈。整体状态：功能与修复大量排队，落地节奏有待加速。

---

### 项目进展
今日无 PR 被合并/关闭，项目处于合并空窗期，但待合并队列中已有多个高价值 PR 形成明确的推进信号：

**架构与平台扩展**
- [PR #6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)：统一提供商发现、模型元数据、模型路由与 agent 模型控制，是平台多模型能力的基础整合。
- [PR #6940](https://github.com/agentscope-ai/QwenPaw/pull/6940)（首次贡献者）：新增原生 DataPaw 应用运行时与持久化分析工作区，扩展至数据分析场景。

**修复性 PR**
- [PR #7061](https://github.com/agentscope-ai/QwenPaw/pull/7061)：修复 OpenAI Responses API 下 `view_video` 工具结果帧丢失及 promotion 门控失效，对应 #7059/#7060。
- [PR #7055](https://github.com/agentscope-ai/QwenPaw/pull/7055)：修复 `qwenpaw cron update --text` 静默失败（#7048）。
- [PR #7057](https://github.com/agentscope-ai/QwenPaw/pull/7057)：修复 systemd/容器环境下子进程 PATH 缺失导致用户级 CLI（gh、cmake 等）不可用的问题。
- [PR #6623](https://github.com/agentscope-ai/QwenPaw/pull/6623)（Under Review）：修复 ACP 会话通知与 prompt 响应竞争导致最终文本丢失的问题。

**新能力扩展**
- [PR #7033](https://github.com/agentscope-ai/QwenPaw/pull/7033)：动态技能加载、自动卸载与 frontmatter 修复，补足技能生命周期管理。
- [PR #7049](https://github.com/agentscope-ai/QwenPaw/pull/7049)：为 `GET /chats/{chat_id}` 新增 `limit/before` 分页，为 Console 长会话性能优化铺路。
- [PR #7050](https://github.com/agentscope-ai/QwenPaw/pull/7050)：Cron Jobs 抽屉增加单任务模型选择器，支持 `model_slot_override`。
- [PR #7054](https://github.com/agentscope-ai/QwenPaw/pull/7054)：支持远程桥接端点，使 Chrome 插件可连接 LAN/网络浏览器。
- [PR #7001](https://github.com/agentscope-ai/QwenPaw/pull/7001)：Matrix 群组房间内按发送者隔离会话与记忆，解决多成员共享上下文的串扰问题。

这些 PR 若在未来数日合并，项目将在多模态正确性、CLI 可靠性、多租户隔离和运维效率四个维度发生可感知的进步。

---

### 社区热点
- [Issue #6476（Matrix 端到端加密不可用）](https://github.com/agentscope-ai/QwenPaw/issues/6476)——3 条评论，已关闭。用户尝试 `apt install libolm-dev` + `uv pip install matrix-nio[e2e]` 等多重方案未果，是 Matrix 频道加密体验的真实痛点。该 issue 虽已关闭，但关闭原因未在数据中体现，建议维护者补充"已修复/已知限制"的说明，避免用户重复踩坑。

- [Issue #3915（Console WebUI 虚拟滚动）](https://github.com/agentscope-ai/QwenPaw/issues/3915)——3 条评论、1 👍，自 2026-04-28 开启后持续获得关注。长对话全量 DOM 渲染导致严重卡顿，PR #7049 的聊天分页 API 可视为官方在数据层的前置铺垫，但 UI 层虚拟滚动尚未落地。

- [Issue #7059 + #7060（视频功能组合问题）](https://github.com/agentscope-ai/QwenPaw/issues/7059)——同一用户在同日提交两个视频缺陷：静默丢失 + 2MB 硬编码限制；随后直接提交 PR #7061。该用户"报修+修复"的自驱模式是社区健康度的积极信号，也说明视频能力是当前用户关注的高频场景。

- [Issue #7048（cron update 静默成功）](https://github.com/agentscope-ai/QwenPaw/issues/7048)——命令返回 rc=0 和任务 JSON，但 prompt 实际未更新。这类"假成功"对自动化用户伤害最大，已有 PR #7055 待合并。

---

### Bug 与稳定性

| 严重度 | Issue | 描述 | 修复状态 |
|---|---|---|---|
| 严重 | [Issue #7059](https://github.com/agentscope-ai/QwenPaw/issues/7059) | `view_video` 工具结果视频帧在 OpenAI Responses API 下被静默丢弃，模型完全无法收到视频内容，且无任何错误或警告 | 已有 [PR #7061](https://github.com/agentscope-ai/QwenPaw/pull/7061) |
| 高 | [Issue #7060](https://github.com/agentscope-ai/QwenPaw/issues/7060) | 视频内联上限硬编码为 2 MB，provider 的 `max_inline_media_bytes` 设置对视频路径不生效 | 与 PR #7061 相关，配置暴露仍需补充 |
| 高 | [Issue #7053](https://github.com/agentscope-ai/QwenPaw/issues/7053) | OAuth2 刷新后不持久化轮换的 `refresh_token`，且无主动续期，远程 MCP（如 XMind）永久降级为手动重新认证 | 未关联 PR |
| 高 | [Issue #7048](https://github.com/agentscope-ai/QwenPaw/issues/7048) | `qwenpaw cron update --text` 返回成功但 prompt 实际未更新，造成数据不一致 | 已有 [PR #7055](https://github.com/agentscope-ai/QwenPaw/pull/7055) |
| 中 | [Issue #7051](https://github.com/agentscope-ai/QwenPaw/issues/7051) | Console 会话重载后图片附件丢失，后端返回 data URL 但前端渲染为失效缩略图 | 未关联 PR |
| 中 | [Issue #6476](https://github.com/agentscope-ai/QwenPaw/issues/6476) | Matrix 端到端加密不可用（olm/vodozemac 库安装失败），已关闭但未说明关闭原因 | 已关闭，建议补充结论 |

---

### 功能请求与路线图信号
- [Issue #3915（虚拟滚动）](https://github.com/agentscope-ai/QwenPaw/issues/3915) + [PR #7049（会话分页 API）](https://github.com/agentscope-ai/QwenPaw/pull/7049)：数据层分页已就绪，Console UI 虚拟化渲染很可能进入下一轮优化。

- [Issue #7058（恢复 native 上下文策略）](https://github.com/agentscope-ai/QwenPaw/issues/7058)：v2.1.0 移除 UI 入口但后端仍支持 `native` 策略，属于"功能回退"，预计会以设置项形式补回。

- [Issue #7056（后台任务回调/通知机制）](https://github.com/agentscope-ai/QwenPaw/issues/7056)：当前 `submit_to_agent` 只能轮询，用户明确要求完成通知/回调，可能推动 webhook 或 SSE 能力。

- [Issue #7052（插件 API 增加 system_prompt 权限）](https://github.com/agentscope-ai/QwenPaw/issues/7052)：企业集成方需要向终端用户隐藏私有提示词，释放出权限分级/角色控制的路线图信号。

- [PR #7001（Matrix 会话隔离）](https://github.com/agentscope-ai/QwenPaw/pull/7001)：将单房间共享上下文改为按发送者隔离，可能带动其他渠道的多租户能力升级。

---

### 用户反馈摘要
- **视频处理不透明（#7059）**：用户调用 `view_video` 后工具返回 "Video loaded"，但模型实际未收到任何画面——"没有错误、没有警告、完全静默失败"，这类问题对问题定位极不友好。
- **配置不生效（#7060）**：用户已设置更大的 `max_inline_media_bytes`，但视频路径仍按 2 MB 硬限制截断，导致模型无法看到完整视频内容。
- **OAuth2 重复认证（#7053）**：使用 XMind 等 MCP 服务器时，refresh token 旋转后未持久化，远程服务永久降级为手动重新认证，严重打断工作流。
- **数据持久性受损（#7051）**：关闭并重新打开会话后，图片附件从"正常显示"变为"失效缩略图"，用户对对话历史完整性的信任降低。
- **CLI 假成功（#7048）**：用户执行 `cron update --text "新提示词"` 后看到成功返回，但 `cron list` 内容未变化，自动化和脚本用户将因此对 CLI 输出失去信任。
- **企业隐私控制（#7052）**：公司接入方希望自定义 system_prompt 且不向会话界面用户展示，说明 B 端/企业定制场景已产生实际的权限边界需求。

---

### 待处理积压
- [Issue #3915（Console 虚拟滚动）](https://github.com/agentscope-ai/QwenPaw/issues/3915)：自 2026-04-28 开放至今约 111 天，属于被反复提及的性能需求，建议明确排期。
- [PR #6302（统一提供商/模型路由）](https://github.com/agentscope-ai/QwenPaw/pull/6302)：自 2026-07-21 开放约 26 天，体量大、影响面广，建议安排核心维护者专项 review，避免长期分叉。
- [PR #6623（ACP 最终文本丢失修复）](https://github.com/agentscope-ai/QwenPaw/pull/6623)：已标记 "Under Review" 约 15 天，属正确性问题，建议尽快合并或给出明确结论。
- **首次贡献者 PR 群**：现有 7 条 first-time-contributor PR 等待评审（#6940、#7061、#6623、#7054、#7001、#7050、#7049），长时间无合入或反馈会显著挫伤新贡献者积极性，建议按"先易后难"快速消化（如 #7049、#7050、#7054）。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-16

数据来源：github.com/zeroclaw-labs/zeroclaw
统计周期：2026-08-15 ~ 2026-08-16

---

## 1. 今日速览

过去 24 小时，ZeroClaw 的 Issue 与 PR 更新数量均达到 50 条，且绝大多数（46 条 Issue、44 条 PR）处于活跃讨论或待合并状态，项目讨论热度处于高位。当前有 **4 个 P1 级 Bug 处于待处理状态**（cron 锁超时、webhook 审计导出、macOS 桌面空白窗口等），其中 cron 锁卡死问题已有对应修复 PR 待合并。值得关注的是，社区讨论高度聚焦在 **架构级 RFC** 上：OpenAI Chat Completions 兼容、会话所有权与附件架构、安全基线策略等十余个 RFC 均在密集迭代，说明项目正处在从「功能堆叠」走向「架构收敛」的关键阶段。**整体活跃度极高，但维护者对 RFC 的决策速度（44 个待合并 PR、4 个 P1 Bug）可能成为近期瓶颈。**

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 项目进展

过去 24 小时共关闭/合并 4 条 Issue 和 6 条 PR。其中最重要的事件是 **Anthropic 服务器端 fallback 系列 PR 全部合并**（感谢 Contributors Like IftekharUddin、Audacity88 等），为 Anthropic 用户的可靠性体验补上了关键一环：

- **PR #9262** — 将 Anthropic 原生拒绝（HTTP 200 + `stop_reason: "refusal"`）识别为类型化错误，不再当作空成功处理。
- **PR #9263** — 路由拒绝到客户端 fallback 条目，使可靠性层能够响应 `AnthropicRefusalError`。
- **PR #9265** — 客户端 opt-in Anthropic 服务器端 fallback，支持 `server_fallback_models` 配置，让 Anthropic 在一次调用内降级服务。
- **PR #9266** — 读取本机响应信号，识别实际服务的模型和 usage 信息。
- **PR #9268** — 在 channel 编排器中向终端用户呈现 safeguard fallback 通知。

以上 5 个 PR 形成一条完整的「拒绝检测 → 路由 fallback → 用户通知」链路，显著改善了 Anthropic 场景下的对话连续性。

此外，以下高价值 PR 仍在待合并队列中（提交均已就绪，等待 review/author action）：

- **PR #9320**（P1）：为 cron agent job 增加 wall-clock 超时并释放 sqlite 锁，修复挂起 job 永久锁死的问题。影响所有使用 cron 调度的用户，建议优先合并。
- **PR #9995**（P1）：加固 webhook 审计导出，在应用字节限制前擦除常见凭据、provider token 模式和图片标记，降低审计日志敏感信息泄露风险。
- **PR #9745 / #9746**：为 knowledge 工具和 session 工具增加 per-agent 所有权归属与作用域隔离，修复多 agent 共享 SQLite graph 导致的越权读写隐患。

引用链接：
- https://github.com/zeroclaw-labs/zeroclaw/pull/9262
- https://github.com/zeroclaw-labs/zeroclaw/pull/9263
- https://github.com/zeroclaw-labs/zeroclaw/pull/9265
- https://github.com/zeroclaw-labs/zeroclaw/pull/9266
- https://github.com/zeroclaw-labs/zeroclaw/pull/9268
- https://github.com/zeroclaw-labs/zeroclaw/pull/9320
- https://github.com/zeroclaw-labs/zeroclaw/pull/9995
- https://github.com/zeroclaw-labs/zeroclaw/pull/9745
- https://github.com/zeroclaw-labs/zeroclaw/pull/9746

---

## 4. 社区热点

过去 24 小时讨论最密集的议题集中在 **OpenAI 协议兼容** 与 **运行时架构重构** 两大方向：

- **Issue #8603（20 评论）** — RFC：ZeroClaw Chat Completions profile。社区希望 ZeroClaw 能直接接入 OpenAI Chat Completions 协议，从而让 Open WebUI、LobeChat、Continue.dev、Aider、LangChain 等 OpenAI 生态客户端开箱即用。该 RFC 的风险等级为 high，涉及 gateway 与 runtime 的核心改动，目前标注 `needs-maintainer-review`。背后诉求是「降低接入门槛，拥抱更大生态」。

- **Issue #9487（16 评论）** — RFC：Runtime-owned conversation sessions and transport surface adapters。提出将会话所有权归运行时所有，并引入传输面适配器，使每个迁移入口点提交 `InboundAction`。与其姊妹 RFC #9488（15 评论，统一附件架构）共同构成会话与附件层的系统性重构方案。两个 RFC 均出自 NiuBlibing，且持续更新至 8 月 15 日，是当前架构讨论的核心。

- **Issue #8692（13 评论）** — Maintainer 决策队列 tracker。汇总所有待维护者决策的 RFC 与设计问题。该 tracker 本身 13 条评论的活跃度，恰恰说明 **决策积压本身就是社区最关心的问题之一**。

- **Issue #6954 / #6971 / #9103（各 12 评论）** — 分别对应「内部发起的 agent turn 的 provenance/回复契约」「安全态势与凭证边界/通用入口策略」「内存存储与可选 enrichment connector 分离」。三者均为 risk:high 的架构级 RFC，说明社区正在系统性地审视 ZeroClaw 的运行时所有权、安全边界与存储架构。

引用链接：
- https://github.com/zeroclaw-labs/zeroclaw/issues/8603
- https://github.com/zeroclaw-labs/zeroclaw/issues/9487
- https://github.com/zeroclaw-labs/zeroclaw/issues/9488
- https://github.com/zeroclaw-labs/zeroclaw/issues/8692
- https://github.com/zeroclaw-labs/zeroclaw/issues/6954
- https://github.com/zeroclaw-labs/zeroclaw/issues/6971
- https://github.com/zeroclaw-labs/zeroclaw/issues/9103

---

## 5. Bug 与稳定性

以下为过去 24 小时内活跃的 Bug/稳定性问题，按严重程度排列：

**P1 — 影响生产使用**

- **Issue #9965** — `cron::scheduler` 的 custom-shell 测试在 Parallel Runtime Test 门禁下偶发 `ETXTBSY` 错误，导致无关 PR 也出现红色检查。已有明确修复任务，属于测试基础设施问题。状态：accepted，待实现。
  https://github.com/zeroclaw-labs/zeroclaw/issues/9965

- **Issue #7527** — macOS 桌面应用重新打开时可能出现空白窗口或无窗口，且权限检测异常、界面无响应（S1，工作流阻断）。该 issue 虽然已在过去 24 小时关闭，但关闭原因为需作者补充复现步骤而非修复，实际修复尚未落地，需持续追踪。
  https://github.com/zeroclaw-labs/zeroclaw/issues/7527

**P2 — 重要缺陷/加固**

- **Issue #9995 关联** — webhook 审计导出中可能存在凭据/密钥泄漏。已有修复 PR：在字节截断前同步擦除敏感模式，建议保持关注直至合并。
  https://github.com/zeroclaw-labs/zeroclaw/pull/9995

- **Issue #9825** — 出站泄漏检测器将公共区块链地址（BTC/ETH 等）误判为高熵敏感数据并打码/阻断，导致支付链接无法投递。该问题被定性为「设计副作用」而非检测器缺陷，社区正在寻求发布安全例外规则。
  https://github.com/zeroclaw-labs/zeroclaw/issues/9825

- **Issue #7870** — agent 运行时选项可能从第一个配置的 provider 泄漏，而非 agent 实际选用的 provider。属于配置解析逻辑缺陷，已 accepted。

引用链接：
- https://github.com/zeroclaw-labs/zeroclaw/issues/9965
- https://github.com/zeroclaw-labs/zeroclaw/issues/7527
- https://github.com/zeroclaw-labs/zeroclaw/issues/9825
- https://github.com/zeroclaw-labs/zeroclaw/issues/7870

---

## 6. 功能请求与路线图信号

社区近期提出的新功能需求，按与现有 PR/路线图的关联强度排序：

**很可能进入下一版本（已有实现或对应 PR）**

- **OpenAI Chat Completions 兼容（#8603）** — 呼声最高。若 RFC 通过，ZeroClaw 将获得数千个 OpenAI 生态工具/客户端的接入能力。是打开生态的战略性功能。
- **Agent Plugins 1.0 标准支持（#9810）** — 加载社区 `plugin.json` + `skills/` + `mcp.json` 标准插件包，可复用全新插件生态。关联 PR #9137（插件共享 egress 策略基础）正在推动。

**高价值但处于设计阶段（risk: high，需先完成架构决策）**

- **Gemini Live 实时语音通道（#8780）** — 支持实时 speech-to-speech 的 voice channel，当前提案已重写为 broker 契约，仍有 11 条评论在磨合设计。
- **桌面计算机使用支持（#6909）** — 通过屏幕感知 + 可访问性数据 + 鼠标键盘输入控制本地桌面应用，属于 computer-use 类能力，风险较高。
- **会话所有权与传输适配器（#9487/#9488）** — 会话和附件架构的基础重构，后续所有 web/channel 功能都依赖该层决策。

**其他被 maintainer 接受但尚未排期**

- Discord mention-triggered 线程模式（#7849）、wecom_ws 主动消息与媒体发送（#7824）、Windows shell host 可配置化（#7089）等均已 accepted，等待实现。

引用链接：
- https://github.com/zeroclaw-labs/zeroclaw/issues/8603
- https://github.com/zeroclaw-labs/zeroclaw/issues/9810
- https://github.com/zeroclaw-labs/zeroclaw/pull/9137
- https://github.com/zeroclaw-labs/zeroclaw/issues/8780
- https://github.com/zeroclaw-labs/zeroclaw/issues/6909
- https://github.com/zeroclaw-labs/zeroclaw/issues/9487
- https://github.com/zeroclaw-labs/zeroclaw/issues/9488
- https://github.com/zeroclaw-labs/zeroclaw/issues/7849
- https://github.com/zeroclaw-labs/zeroclaw/issues/7824
- https://github.com/zeroclaw-labs/zeroclaw/issues/7089

---

## 7. 用户反馈摘要

从过去 24 小时的 Issue/PR 评论中提炼的真实用户声音：

- **「集成成本高」是普遍诉求**：多位用户提及希望 ZeroClaw 兼容 OpenAI Chat Completions（#8603），目的是直接使用 Open WebUI、Aider、LangChain 等现有工具；另有用户提出支持 Agent Plugins 标准（#9810），本质上是希望避免被锁定在私有集成方式。这类反馈指向同一信号：**用户希望 ZeroClaw 成为可嵌入现有 AI 工具链的标准组件，而非要求用户迁移到专属工作流。**

- **「敏感数据误报」干扰真实业务**：一位用户描述，泄漏检测器将公共区块链地址识别为敏感数据，导致支付请求 URL 无法送达（#9825）。用户明确表示「这是检测器工作正常，但设计目标与实际使用场景不匹配」，展现了较为克制的技术态度，也反映出安全特性需要「例外豁免」机制来平衡可用性。

- **「Cron 功能文档缺失」影响上手**：用户 touhidurrr 指出 cron 文档无从查找，且无法指定 cron job 使用特定模型（#7762）。该反馈体现了对「已上线但未完善」功能的不满，建议在文档和路由配置两个层面跟进。

- **「守护进程所有权」争议持续**：围绕 agent turn 与会话所有权的 RFC（#9487/#6954）评论中，讨论焦点集中在「用户断连后任务是否继续执行」「内部任务（如 cron）如何绑定会话上下文」等问题，反映用户在实际使用中已经遇到「刷新页面任务被取消」「后台 job 状态不可追踪」等具体痛点。

- **桌面端体验是重灾区**：macOS 用户报告安装后权限检测失败、重新打开窗口丢失（#7527）；Windows 用户期望 shell host 可配置以适配 PowerShell（#7089）。桌面端的稳定性和配置灵活性目前是用户满意度短板。

引用链接：
- https://github.com/zeroclaw-labs/zeroclaw/issues/8603
- https://github.com/zeroclaw-labs/zeroclaw/issues/9810
- https://github.com/zeroclaw-labs/zeroclaw/issues/9825
- https://github.com/zeroclaw-labs/zeroclaw/issues/7762
- https://github.com/zeroclaw-labs/zeroclaw/issues/7527
- https://github.com/zeroclaw-labs/zeroclaw/issues/7089

---

## 8. 待处理积压

以下项长期未决或已进入决策队列，需维护者重点关注：

- **Issue #6954**（创建于 2026-05-26，已 82 天）— 内部发起 agent turn 的 provenance/绑定/回复契约，修订 2 已按评审意见重写，仍等待最终决策。此 RFC 直接关系 cron job 的可观察性与可靠性。
  https://github.com/zeroclaw-labs/zeroclaw/issues/6954

- **Issue #6971**（创建于 2026-05-27，已 81 天）— 安全态势、凭证边界与通用入口策略。多条安全子任务依赖此 RFC 定稿（包括上文的 leak detector、telemetry 等），是安全制度的地基文件。
  https://github.com/zeroclaw-labs/zeroclaw/issues/6971

- **Issue #7108**（创建于 2026-06-02，已 75 天）— CI 缓存改进已被 accepted，但迟迟未进入实现阶段。考虑到 PR 平均等待时间较长，CI 性能优化对贡献者体验有直接影响。
  https://github.com/zeroclaw-labs/zeroclaw/issues/7108

- **Issue #7130**（创建于 2026-06-03，已 74 天）— 全 workspace `forbid(unsafe_code)` 的恢复被 accepted，但需要细化 unsafe 边界。进度缓慢，但该事项对安全信誉建设有标识性意义。
  https://github.com/zeroclaw-labs/zeroclaw/issues/7130

- **Issue #8692**（决策队列 tracker）— 自身已积累 13 条评论，不断有新的 RFC 进入待决策列表，而决策吞吐未明显提升。**维护者决策速度是当前项目最脆弱的环节**，建议明确每个 RFC 的 SLA，或增设「decide-in-2-weeks」机制。
  https://github.com/zeroclaw-labs/zeroclaw/issues/8692

---

**项目健康度总结**：ZeroClaw 正处于技术讨论与架构收敛的高峰期，社区贡献密度和质量俱佳，大量 P1 修复与架构 RFC 并行推进。但**合并速度（每日约 6 个 PR）显著低于讨论速度（每日约 50 条活跃更新）**，且 44 个待合并 PR 与多个长期未决 RFC 正在形成积压。若维护者能在未来 1-2 周内优先合并 #9320（cron 锁修复）与 #9995（webhook 审计加固），并对 #6954/#6971 两个基座级 RFC 给出明确裁决，将显著缓解社区等待焦虑，推动项目从「讨论期」进入「固化期」。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*