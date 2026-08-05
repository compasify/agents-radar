# OpenClaw 生态日报 2026-08-05

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-08-05 01:26 UTC

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

# OpenClaw 项目动态日报 — 2026-08-05

## 1. 今日速览

过去 24 小时 OpenClaw 仓库保持极高活跃度：共 500 条 Issue 更新（其中 458 条新开/活跃、42 条关闭）和 500 条 PR 更新（其中 109 条已合并/关闭），无新版本发布。当前社区关注焦点集中在三方面：**实时语音（Realtime Voice/Talk）链路的状态管理与资源边界**、**Subagent 子任务完成消息在多故障模式下的静默丢失**、以及 **Gateway 主线程阻塞引发的级联稳定性问题**。P1 级高优问题占比显著，且若干中长期未决 Issue（#44925、#67777、#92433）持续获得新评论，说明维护者积压与社区诉求之间存在一定张力——但 109 条 PR 的合入/关闭量也表明项目修复吞吐正常，整体健康度处于"高流量、高压力、有产出"的状态。

## 2. 版本发布

过去 24 小时无新版本 Release。最近可参考的版本线为 2026.7.2（含 beta 系列）。

## 3. 项目进展

过去 24 小时共有 109 条 PR 被合并/关闭。虽然合并列表未逐条披露，但从当前处于"待维护者查看（ready for maintainer look）"或"等待作者（waiting on author）"状态的 PR 可以清晰看到项目当前的主攻方向：

### 实时语音（Talk / Realtime）——最大的推进集群
- **#119321** [feat(macos)] 为 macOS Talk 增加 Gateway 实时中继，使原生麦克风/播放会话与规范 Talk 生命周期对齐（XL，P1，⏳ 等作者）
- **#119212** [fix(talk)] Relay 断开时保留已启动的 agent consult，避免瞬态传输边界取消用户未请求取消的有用工作（M，P1，⏳ 等作者）
- **#119211** [fix(talk)] `talk.realtime.cancelOutput` 不再走完整 turn 取消路径，barge-in/播放停止不再销毁 turn 状态（M，P1，⏳ 等作者）
- **#119209** [fix(openai)] 将 GPT-Live 路由到受支持的 auth 端点，避免 ChatGPT OAuth 被发送到 Platform-only 端点（L，P1，⏳ 等作者）
- **#119210** [fix(talk)] 隐藏未配置的私有 GPT-Live 预览模型 ID，防止展示入口受限模型（XS，P1，👀 待维护者查看）
- **#112818** [refactor(talk)] 转发权威实时 session 事件，消除 Gateway relay 与 session harness 之间的重复状态机漂移（M，P2，👀 待维护者查看）
- **#112820** [feat(plugin-sdk)] 开放插件页面的 Gateway 托管实时语音会话能力，免去插件自行暴露凭据或重新实现实时工具调用（XL，P2，📣 待证明）

> 结论：实时语音从 macOS 原生端、Web UI、OpenAI/GPT-Live 认证、插件 SDK 到内部状态机在同步重构，是当前路线图上最明确的重点投入方向。

### 稳定性与交付可靠性修复
- **#119379** [fix(mcp)] 防护 MCP stdio stdout 帧解析超限崩溃——单个超大帧可拖垮整个宿主进程及所有并发会话（S，P1，👀 待维护者查看）
- **#119162** [fix(auto-reply)] 部分 payload 投递失败时保留 pending final，避免已证未发送的内容被误清除（S，P1，📣 待证明）
- **#118282** [fix(doctor)] `doctor --fix` 导入旧版 exec-approvals 时归一化 null 用法元数据，由 clawsweeper 自动生成（S，P1，👀 待维护者查看）
- **#118787** [fix(ui)] 清除 split-pane 问答后残留的等待指示器与禁用的聊天面板（XL，P1，👀 待维护者查看）
- **#118830** [fix(media)] 跨投递重试保留签名生成媒体 URL 的完整字节（S，P2，📣 待证明）
- **#102440** [fix] 直接 OpenAI 模型在 `cache-ttl` 模式下启用 idle-gap 工具结果修剪（S，P2，📣 待证明）

### QA 基础设施与性能
- **#119396** [fix(qa)] 防止 Linux 下仅剩 zombie 成员的 Gateway 进程组导致成功 lane 误报失败（M，新）
- **#119395** [fix(slack)] Slack Home/Assistant 事件在临时 API 失败后的恢复（XL，新）
- **#119378** [fix(qa)] 跟踪流式预览后的 durable final，修复并发 QA 场景误报（S，P2，📣 待证明）
- **#118965** [test(qa)] 覆盖托管 OTEL 运行时路径，验证 trace 保留失败工具恢复与成功出站响应（XL，P3，👀 待维护者查看）
- **#119374** [improve(xai)] 延迟加载 xAI 插件的可选能力运行时（图像/视频/语音/OAuth），削减启动导入时间（XL，P2，⏳ 等作者）

## 4. 社区热点

| Issue/PR | 评论数 | 状态 | 核心诉求 |
|---|---|---|---|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) DeepSeek v4 Flash 静默回复失败 | 104 | 已关闭 | 模型静默失败后仅回退泛化消息，用户的 Telegram 群消息无任何实质回复；已闭环但仍引发大量讨论，关注重心在"静默失败"本身的可观测性 |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) Realtime voice 可无界保留 provider/consult 状态 | 59 | 开放 | 实时语音会话缺少硬性资源上限，慢/停滞/突发的 provider 行为可导致陈旧 consult、大帧、pre-ready 音频滞留 |
| [#115326](https://github.com/openclaw/openclaw/issues/115326) Crash-loop breaker 永久抑制 Discord/WhatsApp 且文档恢复路径失败 | 25 | 已关闭 | 崩溃循环熔断器触发后渠道被永久抑制，`channels.start` 恢复失败（WebSocket 1006）；用户被困在"文档写了但没用"的处境 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) Subagent 完成静默丢失——无重试、无通知、无自动重启 | 23 | 开放 | 子任务编排在多个故障模式下静默吞掉结果，用户（Telegram 论坛机器人）完全无感知；3 月提出至今仍开放，社区持续关注 |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) 中央文件名编码工具（多编码 Content-Disposition） | 20 | 开放 | Feishu 中文文件名 UTF-8 被误读为 Latin-1 的架构级修复，需跨渠道统一处理 Shift-JIS、EUC-KR、GB18030 等；👍1 |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) Control UI 增加 MathJax/LaTeX 渲染 | 9 | 开放 | 数学/科学内容在 WebChat 中无法正常显示公式；👍10，是本期 Issue 中👍数最高者之一 |

**需求侧观察**：高热度 Issue 的关键词高度集中——"静默丢失""无重试""无通知""无确认"。用户对系统在异常路径下不透明这件事的容忍度最低。即使 #116277 已关闭，其 104 条评论说明"模型不出声但系统谎称正常"的体验伤害巨大；Subagent 系列（#44925、#67777、#92433）则是同一诉求在编排层的延续。

## 5. Bug 与稳定性

### P1 级（按严重度排序）

| Issue | 问题 | 状态 | Fix PR |
|---|---|---|---|
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | Agent DB v14→v15 迁移失败：`no such column: entry_valid`，事务回滚、gateway 拒绝启动（2026.7.1→2026.7.2） | 开放（8/4 创建） | 无，**升级阻塞，需紧急响应** |
| [#118846](https://github.com/openclaw/openclaw/issues/118846) | Gateway 主线程自启动起 100% 饱和（plugin-metadata 快照 + fs statting），本地 RPC 在 ws_upgrade 以 1006 死亡 | 开放 | 无 |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | Session transcript 投影在持续写入下活锁，同步重建阻塞事件循环数十秒，停摆所有渠道 | 开放 | 无 |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | Realtime voice 可无界保留 provider/consult 状态（diamond lobster） | 开放 | 相关 PR #119212/#119211 已提交 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent 完成静默丢失——无重试/通知/自动重启（3 月提出，diamond lobster） | 开放 | 无 |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | Subagent 完成投递在 direct-announce 超时/drain/orphan prune 下丢失（4 月提出） | 开放 | 无 |
| [#92433](https://github.com/openclaw/openclaw/issues/92433) | Subagent 完成被 steer 进一个在消费前结束的 requester run，随后被静默丢弃（6 月提出） | 开放 | 无 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Hook/tool 子进程未回收，zombie 累积导致运行时劣化 | 开放 | 无 |
| [#115326](https://github.com/openclaw/openclaw/issues/115326) | Crash-loop breaker 永久抑制 Discord/WhatsApp，`channels.start` 恢复失败 | **已关闭** | — |
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | DeepSeek v4 Flash 静默失败，仅回退泛化文本 | **已关闭** | — |

### P2 级值得关注

- [#116010](https://github.com/openclaw/openclaw/issues/116010) 所有持久会话被硬编码 128k context 上限，无视模型/配置（diamond lobster）
- [#114690](https://github.com/openclaw/openclaw/issues/114690) Discord 同轮内原生 Codex compaction 后重复发送成功回复
- [#107873](https://github.com/openclaw/openclaw/issues/107873) Embedded prompt-lock session 接管在工具失败后中止可见 WebChat turn，而非重试

### 模式总结
Bug 集中在两个系统性强点：**① Subagent 完成消息的投递保障**（#44925、#67777、#92433、#92369 一脉相承，虽各有一个触发场景，但根因同源）；**② 实时语音链路的状态所有权与生命周期**（#116201 + 5 个 Talk PR 同期在修）。另有数据库迁移（#119263）属升级阻断级，需要最高优先级处理。

## 6. 功能请求与路线图信号

### 高潜力（已有 PR 对应或已进入实现轨道）

| 功能请求 | 信号 |
|---|---|
| 实时语音/Talk 全端能力（macOS 中继、GPT-Live 认证、插件 SDK 开放、UI） | 本期 7 个 PR 集群推进，**确定为近期路线图重点** |
| xAI 插件启动性能优化（延迟加载可选运行时） | PR #119374 已实现，合入后对使用 xAI 的用户是纯收益 |
| OpenAI 直接模型 idle-gap 工具结果修剪 | PR #102440 已提交，对应 issue #95840 |
| 有界内存 flush 在恢复 compaction 前执行 | PR #118681 已提交，修复"文档承诺但实际丢弃"的问题 |
| YAML 配置文件支持 [#45758](https://github.com/openclaw/openclaw/issues/45758)（👍2） | 开放，无维护者响应标记，属讨论/路线图阶段 |
| Control UI MathJax/LaTeX 渲染 [#42840](https://github.com/openclaw/openclaw/issues/42840)（👍10） | 开放，高社区呼声，暂无实现信号 |
| 自托管 STT/TTS 路由（WebChat 语音走 Gateway 而非浏览器 API）[#45508](https://github.com/openclaw/openclaw/issues/45508)（👍2） | 开放，与 Talk 重构方向天然协同，**建议合并规划** |
| 中央文件名编码工具 [#48788](https://github.com/openclaw/openclaw/issues/48788)（👍1） | 开放，已有对应 PR #48578 的部分修复 |

### 长尾需求（体现用户场景多样性）
- [#16555](https://github.com/openclaw/openclaw/issues/16555) 投递队列 TTL/过期机制，防止 gateway 重启后陈旧消息洪泛（P1，diamond lobster）
- [#9016](https://github.com/openclaw/openclaw/issues/9016) OpenRouter 成本暴露给 agent runtime
- [#46058](https://github.com/openclaw/openclaw/issues/46058) 社区成员独立探索 chat-first Android 端，询问上游协作意向
- [#44395](https://github.com/openclaw/openclaw/issues/44395) 标题感知 chunking + 实体抽取的 memory 搜索改进
- [#71736](https://github.com/openclaw/openclaw/issues/71736) Control UI 插件贡献槽位（RFC，需安全评审）

## 7. 用户反馈摘要

### 高频痛点
1. **"静默"是最不可接受的失败模式**：多个用户描述了任务/回复在无任何提示下消失的场景（#116277、#44925、#67777、#92433、#91363）。用户明确表达"宁可报错，不要假装成功"的诉求。
2. **恢复路径不可信**：#115326 用户按文档执行 `channels.start` 仍失败，且熔断后渠道被"永久"抑制；#89278 中 Codex OAuth 探测成功但 cron 10 秒超时。文档与行为不一致正在消耗信任。
3. **内存/状态行为因人而异**：#43747 中三位用户各自的 memory 存储方式完全不同（SQLite vs 其他），用户困惑"到底哪个才是对的"。
4. **告警疲劳**：#90595 用户反馈 cron "failed" 通知在热重载和重试期间重复触发，导致真实故障被淹没。
5. **计费冷却过长**：#115642 用户指出 provider 计费错误触发固定 5 小时冷却，订阅制用户在服务已恢复后仍被拒——希望有探测恢复机制与手动重置命令。

### 积极信号
- 社区对修复 PR 的响应及时：多个 autofix/autogenerated PR（#118282）已进入待维护者查看，说明 clawsweeper 自动化闭环在运转。
- 用户愿意提供详细复现：#118846 给出了 CPU profile 定位结论；#119398 贡献者直接提交了 abort signal 修复补丁，体现健康的开源协作生态。

## 8. 待处理积压

以下为**长期未关闭**且持续有社区关注的重要 Issue/PR，建议维护者优先处理或给出明确结论：

| 项目 | 提出时间 | 优先级/评级 | 阻塞点 |
|---|---|---|---|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) Subagent 完成静默丢失 | 2026-03-13 | P1 / 🦞 diamond lobster | 待维护者评审 + 产品决策 |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) Subagent 完成投递丢失（超时/drain/orphan） | 2026-04-16 | P1 / 🦞 diamond lobster | 待维护者评审 + 产品决策，**与 #44925 根因相关，建议合并处理** |
| [#92433](https://github.com/openclaw/openclaw/issues/92433) Subagent 完成被 steer 后随 run 结束丢弃 | 2026-06-12 | P1 / 🦞 diamond lobster | 待维护者评审 + 产品决策，同属 Subagent 投递家族 |
| [#92369](https://github.com/openclaw/openclaw/issues/92369) Cron 隔离会话中无法可靠编排 subagent | 2026-06-12 | P2 / 🦞 diamond lobster | 待维护者评审 |
| [#16555](https://github.com/openclaw/openclaw/issues/16555) 投递队列 TTL/过期 | 2026-02-14 | P1 / 🦞 diamond lobster | 待维护者评审 + 产品决策，已积压近 6 个月 |
| [#75380](https://github.com/openclaw/openclaw/issues/75380) provider-payload.jsonl / cache-trace.jsonl 无界增长 | 2026-05-01 | P1 / 🦞 diamond lobster / security | 待安全评审 + 产品决策，属长期运维隐患 |
| [#111498](https://github.com/openclaw/openclaw/issues/111498) Anthropic auth 恢复后主 agent 被 workspace-state 迁移卡死 | 2026-07-19 | P1 / 🦞 diamond lobster | 待维护者评审（clawsweeper-recovery-stuck） |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) 隔离 cron 始终 "LLM request failed" | 2026-06-08 | P1 / 🦐 gold shrimp（👍6） | 待维护者评审 + 更多信息 |
| [#44134](https://github.com/openclaw/openclaw/issues/44134) Google Antigravity 频繁工具 schema 重载触发反滥用封号 | 2026-03-12 | P1 / 🐚 platinum hermit | 待维护者评审 + live repro，**涉及账号安全，风险等级高** |
| [#54463](https://github.com/openclaw/openclaw/issues/54463) QMD 索引 symlink 循环 + ENAMETOOLONG | 2026-03-25 | P2 / 🐚 platinum hermit | 待维护者评审 + live repro |

**整体判断**：项目处于高活跃迭代期，实时语音与 Subagent 投递可靠性是两条最明确的攻坚决线；但 P1 级 issue 中多数仍停留在"needs-maintainer-review / needs-product-decision"状态，维护者评审带宽可能成为瓶颈。尤其 **#119263（DB 迁移失败）** 属升级阻断级，建议在下一个版本发布前优先闭环。

---

## 横向生态对比

# AI 智能体/个人 AI 助手开源生态横向对比分析报告

**报告日期：2026-08-05 ｜ 数据窗口：过去 24 小时 ｜ 覆盖项目：12 个**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**高活跃、高同质、强分化**的密集迭代期。以 OpenClaw 为参照原点的 Claw 家族（PicoClaw、NanoClaw、NullClaw、ZeroClaw、CoPaw、ZeptoClaw）与独立路线项目（Hermes、IronClaw、NanoBot、LobsterAI）并行发展，日均合计产生超 700 条 Issue 更新与 700 条 PR 更新，其中 OpenClaw 单项目占总量约 70%，呈明显头部效应。生态关注重心正从"功能添加"转向"生产可靠性"——静默失败、投递保障、安全隔离、上下文成本是各项目社区讨论重叠度最高的四类议题。与此同时，维护者评审带宽普遍成为瓶颈：多个项目出现"讨论热度高、合入吞吐低"的剪刀差，安全级缺陷（ZeroClaw S0×3、Hermes P0、LobsterAI key 泄漏）与功能性积压（Subagent 投递家族、45+ 条待合入 PR）并存。整体判断：生态仍处于快速扩张期，但下一阶段的分水岭将是谁先解决"可靠、安全、可观测"这三道生产级门槛。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | 合并/关闭 PR | Release | 当日健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（458 新开/活跃，42 关闭） | 500（109 合并/关闭） | 109 | 无 | 🟢 高流量高产出；P1 积压与 Subagent 长期 Issue 并存 |
| **NanoBot** | 5（4 新开/活跃，1 关闭） | 28（19 合并/关闭，9 待） | 19 | 无 | 🟢 维护者响应极快（Opus 5 兼容 24h 闭环）；API Key 安全 Issue 悬置 30 天 |
| **Hermes Agent** | 50（50 活跃，0 关闭） | 50（45 待合并，5 关闭） | 5（均为 duplicate） | 无 | 🟡 社区活跃但合并吞吐为零，45 条 PR 待审为最大流程风险 |
| **PicoClaw** | 3（2 活跃，1 关闭） | 4（2 合并/关闭，2 待） | 2 | 无 | 🟡 稳定迭代；两个稳定性 Bug 超两周无维护者回应 |
| **NanoClaw** | 0 新增 | 5（1 关闭，4 待） | 1 | 无 | 🟢 维护者驱动，无新 Issue；Discord 审批修复 PR 待 review |
| **NullClaw** | 0 | 1（待合并） | 0 | 无 | 🟡 低活跃；唯一 PR #981 悬置 7 天无评审 |
| **IronClaw** | 50（38 活跃，12 关闭） | 50（18 合并/关闭，32 待） | 18 | 无（1.1.0-rc.1 筹备） | 🟢 双线冲刺（v1.1.0 稳定化 + v1.2.0 架构重构）；工程质量管控强势 |
| **LobsterAI** | 1（安全相关） | 13（10 合并/关闭） | 10 | 2026.8.3 发布流程合并 | 🟢 发布收尾期，合入效率高；安全 Issue #1202 已 stale |
| **Moltis** | 0 | 1（dependabot） | 0 | 无 | 🟡 维护模式，无功能推进 |
| **CoPaw** | 28（17 活跃，11 关闭） | 50（22 合并/关闭，28 待） | 22 | 无（v2.1.0-beta.1 回归） | 🟡 高活跃但 Beta 版出现桌面端双回归（#6697/#6698） |
| **ZeptoClaw** | 0 | 0 | 0 | 无 | ⚪ 无活动 |
| **ZeroClaw** | 50（48 活跃，2 关闭） | 50（2 合并/关闭，48 待） | 2 | 无 | 🟡 高讨论低合并；3 个 S0 级安全缺陷无修复 PR 合入 |

> 注：OpenClaw 与部分项目 Issue/PR 数含同一线程的持续更新，绝对值反映流量而非独立问题数。

---

## 3. OpenClaw 在生态中的定位

**生态原点与规模标杆。** Claw 家族 8 个衍生产品（PicoClaw/NanoClaw/NullClaw/ZeroClaw/CoPaw/ZeptoClaw 等）直接沿袭其命名与架构思路，OpenClaw 单日 500 条 Issue、500 条 PR 的流量是 IronClaw/ZeroClaw（各 50 条）的 10 倍，是 NanoBot（28 条 PR）的 18 倍，社区规模断层领先。

**技术路线差异：全栈 vs 单点突破。** OpenClaw 是唯一同时深度投入实时语音（7 个 PR 集群：macOS 中继、GPT-Live 认证、插件 SDK、Web UI、状态机）、Subagent 编排、Gateway 稳定性三条战线的全栈型项目；IronClaw 侧重目标架构治理（WS 系列解耦、CI 门禁 sabotage-testing）；ZeroClaw 押注协议互操作与安全 RFC；Hermes 聚焦多智能体基础设施与插件标准化；NanoBot 以轻量快速见长。

**优势：**
- 渠道覆盖与集成深度最广（Telegram/Discord/Feishu/WhatsApp/WeChat 等）；
- 修复吞吐高（单日 109 条 PR 合并/关闭）；
- 自动化运维闭环（clawsweeper 自动生成修复 PR，如 #118282）；
- 社区反馈规模大，问题识别快（#116277 达 104 条评论）。

**劣势与风险：**
- P1 级长期 Issue 积压：Subagent 完成静默丢失家族（#44925 自 3 月开放）至今无产品决策；
- 升级阻断级故障：DB 迁移失败（#119263）威胁 2026.7.x 用户升级路径；
- Gateway 主线程饱和、transcript 活锁等核心稳定性问题仍缺修复 PR。

**结论：** OpenClaw 是生态的"风向标"而非"终点站"。其路线图（实时语音、Subagent 可靠性、插件 SDK）定义了行业方向，但评审带宽瓶颈与 P1 积压问题同样在向生态传导——衍生产品反而可能在局部（如 ZeroClaw 的协议兼容、IronClaw 的架构治理）形成单点超越。

---

## 4. 共同关注的技术方向

| # | 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|---|
| 1 | **静默失败治理** | OpenClaw、NanoBot、PicoClaw、Hermes、ZeroClaw、CoPaw | "宁可报错，不要假装成功"成为跨项目最强烈共识。典型：OpenClaw #116277（104 评论）、Subagent 家族（#44925/#67777/#92433）；NanoBot #5237（MCP 错误信封被当成功）；PicoClaw #3269（MCP 连接失败挂起）；ZeroClaw #9504（上下文耗尽无提示）；CoPaw #6655/#6695（审批提示不可达，静默等 300 秒超时） |
| 2 | **多步任务投递保障** | OpenClaw、Hermes、ZeroClaw、IronClaw | Subagent/cron 任务完成消息需要"确认/重试/通知"契约。OpenClaw 三个 P1 Issue 同根因；Hermes cron 挂起无 fallback；ZeroClaw Goal mode（#8303）将多轮有界执行提上 RFC |
| 3 | **上下文成本与记忆可靠性** | OpenClaw、IronClaw、PicoClaw、CoPaw、ZeroClaw | 内存/上下文管理进入"精细化运营"阶段：IronClaw #7185（跨会话记忆不可靠）；CoPaw #6699（27 个技能吃掉 25-30% 系统提示词）；PicoClaw #3251/#3317（prompt cache token 计量）；ZeroClaw #6850（内存生命周期解耦） |
| 4 | **模型/Provider 兼容性速配** | NanoBot、OpenClaw、ZeroClaw、CoPaw、LobsterAI | 新模型（Opus 5、GPT-5.6、DeepSeek v4）发布后 24 小时内社区即要求适配。NanoBot 当日修复闭环是标杆；ZeroClaw 需兼容 DeepSeek DSML/Qwen `<tools>` 非标准格式；CoPaw 遇 DeepSeek thinking mode 多轮失败 |
| 5 | **多租户安全隔离** | ZeroClaw、Hermes、NanoBot、LobsterAI | 从"功能需求"升级为"安全红线"：ZeroClaw S0×3（webhook 未鉴权、知识图/会话无 per-agent 归属）；Hermes P0（prompt cache 跨会话泄漏）；NanoBot #4784（API Key 全局 env 污染）；LobsterAI #1202（agent 可诱导泄漏 key 配置） |
| 6 | **OAuth/认证链路可靠性** | PicoClaw、OpenClaw、NanoBot、ZeroClaw | 真实部署场景（headless/远程/代理）下认证失败频发：PicoClaw #3280（回调失败致授权码作废）；OpenClaw #119209（GPT-Live 认证端点错配）；NanoBot #5210（可信代理认证） |
| 7 | **成本可观测性** | PicoClaw、IronClaw、LobsterAI | token 计量、用量展示、错误分类细化：PicoClaw 合入 prompt cache token 指标；IronClaw #7191（时间工具 + 自动化）；LobsterAI #2426（过载 vs 限流分开分类） |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全栈通用助手：实时语音、多渠道、Subagent、插件 SDK | 个人 power user + 团队 | Gateway 中继架构；talk/realtime 状态机；clawsweeper 自动化修复 |
| **IronClaw** | 工程质量与架构治理：release 稳定化 + 目标架构重构 | 工程化组织/企业 | Rust 多 crate 架构；CI 门禁 sabotage-tested；WS 系列端口解耦 |
| **Hermes Agent** | 多智能体基础设施：插件标准化、多租户、Telegram 对齐 | 平台开发者/企业 | 生命周期事件目录 + Hook 标准化；45 条 PR 合并积压是当前瓶颈 |
| **NanoBot** | 轻量快速多渠道：WebUI 精细打磨、Opus 5 秒级适配 | 快速上手型个人用户 | 极致合并效率（24h 内修复闭环）；可信代理认证 |
| **ZeroClaw** | 协议互操作与安全边界：OpenAI Chat Completions 兼容、per-agent 隔离 | 生态集成开发者 | RFC 驱动治理（#8692 决策队列）；A2A 外呼客户端落地中 |
| **CoPaw** | 桌面端 + 微信场景：文件处理、审批链路、Scroll 压缩 | 中文桌面用户 | Tauri 桌面 + WeChat(iLink)；Beta 版桌面回归是风险点 |
| **LobsterAI** | 商业化桌面产品：积分体系、广告开关、Windows 安装体验 | 中文消费级用户 | Electron；网课/办公场景；已形成发布节奏 |
| **PicoClaw** | 嵌入/轻量设备向 + 成本可观测性 | 硬件/maker 群体 | Sipeed 背景；OAuth 真实部署修复；provider 指标补全 |
| **NanoClaw** | 渠道接入驱动：Dial（SMS/语音）、Discord 审批 | 渠道自动化用户 | skill-owned capabilities host seams 重构 |
| **NullClaw** | 极简 CLI 聚合：codex/gemini/claude/grok CLI 代理 | CLI 重度用户 | spawn-per-request 模式；PR #981 或将扩展至 xAI Grok |
| **Moltis / ZeptoClaw** | — | — | 维护/静默状态，暂无方向性输出 |

---

## 6. 社区热度与成熟度分层

**第一梯队：快速迭代期（单日 50+ 活跃更新）**
- **OpenClaw**：全生态最高流量，实时语音重构深度投入，修复产出量大，但 P1 积压与维护者带宽成主要矛盾。
- **IronClaw**：v1.1.0-rc.1 发布冲刺 + v1.2.0 架构重构双线推进，工程管控质量生态最强（sabotage-tested 门禁、doc-truth audit），用户侧反馈刚开始规模化涌入。
- **ZeroClaw**：讨论极其活跃（RFC 评论数领先），但合入吞吐极低——48 条 PR 待合并 + 3 个 S0 缺陷无修复，处于"高民主、低决策"状态。

**第二梯队：质量巩固期（单日 13-50 条更新）**
- **NanoBot**：速度型项目标杆，19 条 PR 当日合入，WebUI 一致性批量优化；安全 Issue 悬置是唯一暗点。
- **Hermes Agent**：社区诉求清晰（插件标准化、多租户），但 45 条 PR 待合入 + 0 Issue 关闭，合并效率是健康度短板。
- **CoPaw**：功能收尾节奏好（22 条 PR 关闭），但 v2.1.0-beta.1 桌面端双回归提示发布验证流程需扩展到桌面冒烟场景。
- **LobsterAI**：商业发布节奏成熟（2026.8.3 合入），精细化错误处理；安全隐患（key 泄漏）需在下一迭代优先审视。

**第三梯队：稳定低活跃期**
- **PicoClaw**：有明确技术方向（成本可观测性），但两个稳定性 Bug 超两周无响应。
- **NanoClaw**：维护者驱动，功能管线清晰（Dial 渠道），无新 Issue 涌入。
- **NullClaw**：依赖外部贡献者单点推动（PR #981），维护者需尽快表态。

**第四梯队：维护/静默期**
- **Moltis**：dependabot 日常维护，无功能推进。
- **ZeptoClaw**：完全无活动。

---

## 7. 值得关注的趋势信号

**① "静默失败"成为产品信任基线，而非可选项。**
OpenClaw #116277（104 评论）、Subagent 家族、NanoBot MCP 错误信封、CoPaw 审批不可达、ZeroClaw 上下文耗尽无提示——跨 6 个项目的用户共同诉求是"系统必须让我知道发生了什么"。对开发者启示：**错误语义显式化（error envelope）、投递回执、重试/通知契约应作为 Agent 框架的一等公民设计**，而非事后补丁。

**② 多智能体数据隔离从"高级功能"升维为"安全红线"。**
ZeroClaw 将知识图/会话跨 agent 互见定性为 S0 安全事故，Hermes 的 prompt cache 跨会话泄漏被标 P0，NanoBot API Key 污染问题悬置 30 天仍被社区持续追问。**per-agent/per-tenant 的存储、缓存、环境变量隔离即将成为企业采用 Agent 的前置条件**，也是当前生态最大的架构欠账。

**③ 实时语音是下一轮架构竞赛的制高点。**
OpenClaw 单日 7 个 Talk/Realtime PR 集群表明头部项目已将语音链路整体重构（macOS 原生端、Gateway 中继、认证、插件 SDK、状态所有权）。**语音交互正在从"功能插件"变为"一等架构维度"**，涉及状态机、资源边界、认证等基础层重构，而非简单调 API。

**④ OpenAI API 兼容层 = 生态采纳的"标准入海口"。**
ZeroClaw #8603（16 评论）揭示了一个通用规律：用户希望"我的 OpenAI SDK/LangChain/Open WebUI 直接就能连"。**提供 OpenAI Chat Completions 兼容端点 + DeepSeek/Qwen 等国产模型的非标准 tool-call 解析，是获取第三方生态流量的最低成本路径。**

**⑤ 上下文经济学（Context Economics）成为新竞争维度。**
PicoClaw 补全 prompt cache token 计量、CoPaw 技能按需加载（省 25-30% 系统提示词）、OpenClaw idle-gap 工具结果修剪、ZeroClaw 上下文耗尽提示——**token 级精细化管理（缓存、压缩、按需注入、用量可视化）正在从优化项变成必备能力**。谁先建立完整的成本可观测性，谁就在长上下文场景占据优势。

**⑥ 生态瓶颈已从"功能创造"转移到"评审/决策带宽"。**
OpenClaw 的 Subagent 家族（3 月至今）、Hermes 的 45 条 PR 积压、ZeroClaw 的 48 条 pending + #8692 决策队列膨胀、NullClaw 的 7 天零评审——**维护者单点瓶颈正在系统性拖慢生态前进速度**。这为自动化评审工具、社区 Reviewer 制度、RFC 快速表决机制创造了明确需求空间；同时也提醒开发者：选择依赖项目时，合并效率与 Issue 响应周期应与功能丰富度同等权重。

**⑦ "CLI 代理型 Provider"模式被社区自发复制。**
NullClaw 的 grok-cli PR 沿袭 codex-cli/gemini-cli/claude-cli 的 spawn-per-request 模式，用户主动将新模型以 CLI 方式接入统一框架。**这是一个低成本、低风险、高扩展性的轻量集成范式**，对中小型 Agent 项目具有借鉴意义——不必等官方 SDK，CLI 即接口。

---

*报告基于 2026-08-05 各项目 GitHub 社区动态自动生成，数据窗口为过去 24 小时，仅供技术决策参考。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-05

## 1. 今日速览

过去24小时 NanoBot 保持高强度迭代节奏：共 **28 条 PR 更新**（19 条已合并/关闭，9 条待合并），**5 条 Issue 更新**（4 条新开/活跃，1 条关闭），无新版本发布。合并内容覆盖 WebUI 视觉一致性系列优化、Anthropic Opus 5 兼容性修复、WeCom/Telegram 渠道修复、可信代理认证与 Vite 开发模式等方向，核心维护者响应迅速，Opus 5 兼容问题从用户报告到修复 PR 合并不足 24 小时。项目健康度良好，但一条存在约 30 天的 Provider API 密钥安全 Issue 仍无对应修复，值得关注。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭 19 条 PR，其中值得关注的重要合并：

- **Anthropic Opus 5 兼容性修复（#5236，p1）**：以模型族版本阈值替代硬编码参数排除列表，支持 Opus 5 的 adaptive thinking 与 `output_config.effort` 控制，同时保留旧模型的手动 `budget_tokens` 行为；同步关闭 Issue #5235。 → https://github.com/HKUDS/nanobot/pull/5236
- **可信代理 Bootstrap 认证（#5210，p1，安全）**：为 Cloudflare Tunnel + Access 等场景新增无 token 的可信上游代理认证路径，需显式配置 IPv4/IPv6 CIDR 白名单。 → https://github.com/HKUDS/nanobot/pull/5210
- **集成 Vite 开发模式（#5239，p1）**：`nanobot webui --dev` 一键启动网关与前端 HMR，并附带文档与测试，显著降低 WebUI 贡献者门槛。 → https://github.com/HKUDS/nanobot/pull/5239
- **WebUI 一致性批量优化**：统一浮动控件（#5240）、时间戳 tooltip 样式（#5245）、自动化元数据与时间戳对齐（#5243）、prompt 预览 markdown 渲染（#5244）、拒绝畸形斜杠命令（#5242）、内联 token 高亮细化（#5241）等 6 条合并，前端体验趋于精细。
- **渠道修复**：WeCom 文件名净化空串时回退（#5223）、Telegram 代码块语言标签含特殊字符（如 `c++`）时保持完整（#5222）。

项目整体在「渠道健壮性、WebUI 一致性、安全基建、开发者体验」四个方向同步推进，且 p1 级 PR 均当日合并，效率较高。

## 4. 社区热点

- **#4784 Provider API 密钥跨 Provider 泄漏（安全问题）**：7 月 6 日创建，是当前讨论最多（2 条评论）且持续时间最长的未解决 Issue。核心矛盾是 `OpenAICompatProvider._setup_env()` 直接改写全局 `os.environ`，gateway 型 Provider 会覆盖既有 Key，社区诉求是环境变量写入应在 Provider 级隔离。 → https://github.com/HKUDS/nanobot/issues/4784
- **#5235 Opus 5 配置被 API 拒绝**：用户定位到 `omit_temperature` 子串列表遗漏 `"opus-5"`，而 Opus 5 已完全废弃温度参数，导致每次请求都被 API 拒绝。该问题当日即被 #5236 修复，反映社区对最新模型的支持速度有较高期待。 → https://github.com/HKUDS/nanobot/issues/5235
- **#5237 MCP 工具错误信封导致 Agent 空等超时**：当 MCP 返回 `isError=False` 但内容为业务错误信封时，LLM 无法得知调用失败，只能等到 `tool_timeout` 触发。触及工具错误语义传播的设计缺陷。 → https://github.com/HKUDS/nanobot/issues/5237

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 编号 | 问题 | 状态 |
|---|---|---|---|
| 高（安全） | [#4784](https://github.com/HKUDS/nanobot/issues/4784) | Provider API 密钥通过全局 `os.environ` 互相覆盖/泄漏 | 开放约 30 天，**无修复 PR**，建议优先排期 |
| 高 | [#5237](https://github.com/HKUDS/nanobot/issues/5237) | MCP 业务错误信封被当作成功调用，Agent 无法识别失败并空等至超时 | 开放，无修复 PR |
| 中 | [#5247](https://github.com/HKUDS/nanobot/issues/5247) | Matrix 被邀请入房失败：`Api.join()` 发送空 body，被 Continuwuity 以 `M_BAD_JSON` 拒绝 | 已有对应 PR [#5248](https://github.com/HKUDS/nanobot/pull/5248) |
| 中 | [#5235](https://github.com/HKUDS/nanobot/issues/5235) | Opus 5 因温度参数（已废弃）请求被 API 拒绝 | 已关闭，PR #5236 已合并 |

另有一条待合并的稳定性 PR **#5156（p2）**：修复 Telegram 轮询在瞬时网络抖动后静默停滞、进程存活但日志无声的生产问题（fixes #5171）。 → https://github.com/HKUDS/nanobot/pull/5156

## 6. 功能请求与路线图信号

- **会话权限模型重构（#5238，OPEN，p1）**：移除 #5211 引入的 request-scoped 访问授权层，删除 `SessionAccessScope`，让会话工具搜索/读取该用户全部持久会话。这是对权限模型的重要简化，可能进入下一版本。 → https://github.com/HKUDS/nanobot/pull/5238
- **mst-python 元搜索 Provider（#5234，OPEN）**：聚合 DuckDuckGo/Google/Brave/Bing 等多引擎并经 RRF 融合，提升搜索覆盖度与结果质量。 → https://github.com/HKUDS/nanobot/pull/5234
- **Mattermost 线程独立组策略（#5233，OPEN）**：#4459 的后续增强，新增 `groupPolicyInThread` 配置并暴露到 WebUI。 → https://github.com/HKUDS/nanobot/pull/5233
- **Telegram 自定义 Bot API Base URL（#4919，OPEN）**：支持自建 Bot API Server / 企业网关场景，已开放 3 周。 → https://github.com/HKUDS/nanobot/pull/4919
- **Quick Chat / Temporary Chat（#5184，OPEN）**：为 WebUI 增加固定快捷会话与内存级临时会话，当前带 conflict 标签，需解决冲突。 → https://github.com/HKUDS/nanobot/pull/5184
- **memory 目录 gitignore 规则补充（#5246，enhancement）**：当前 `.gitignore` 只放行 `memory/` 与 `memory/MEMORY.md`，导致 `.cursor` 与 `history.jsonl` 处于"未跟踪但不该提交"的尴尬状态。 → https://github.com/HKUDS/nanobot/issues/5246

## 7. 用户反馈摘要

- **Opus 5 用户（#5235）**：反馈精准——明确指出 `omit_temperature` 列表遗漏 `opus-5`，且新模型已彻底废弃温度参数，所有请求因此被拒。该反馈在 24 小时内得到修复并合并。
- **MCP 用户（#5237）**：期望 `CallToolResult` 中的业务错误信封能被识别并回传给 LLM，以便 Agent 重新规划，而不是空等 `tool_timeout`。反映用户对工具错误语义透明化的真实需求。
- **Matrix 用户（#5247）**：Continuwuity 服务器兼容性问题；用户同步提交了修复 PR（#5248），体现社区"发现问题即贡献修复"的良好循环。
- **安全关注者（#4784）**：对多 Provider 场景下 API 密钥写入全局环境变量表示担忧，期望写入逻辑更收敛、更可预测，避免 key 被意外覆盖。

## 8. 待处理积压

- **[#4784](https://github.com/HKUDS/nanobot/issues/4784)（安全，开放约 30 天）**：Provider API 密钥污染全局环境变量，属安全隐患且长期无修复 PR，建议维护者明确隔离方案并排期处理。
- **[#5156](https://github.com/HKUDS/nanobot/pull/5156)（PR，7 月 29 日创建，p2）**：Telegram 轮询静默停滞恢复，涉及生产环境可靠性，仍待合并。
- **[#4919](https://github.com/HKUDS/nanobot/pull/4919)（PR，7 月 14 日创建，已 3 周）**：Telegram 自定义 Bot API，长期开放未见明显推进，可能需补充测试或评审。
- **[#5184](https://github.com/HKUDS/nanobot/pull/5184)（PR，带 conflict 标签）**：Quick Chat / Temporary Chat 功能需解决分支冲突并更新基线。
- **[#1776](https://github.com/HKUDS/nanobot/pull/1776)（PR，3 月创建，今日关闭）**：Telegram `group_mode` 配置字段的旧 PR 最终以 conflict 关闭；建议确认该功能是否有其他实现方案在推进，避免需求丢失。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-05

## 1. 今日速览

过去24小时项目保持**中等偏高活跃度**：50条 Issue 更新（全部处于活跃状态，无新关闭）、50条 PR 更新（45条待合并，5条关闭/合并）。核心态势有三个方面：一是**社区讨论集中于架构演进**——插件接口扩展（#64182、#64231）和多租户隔离（#34352）是当前讨论热度最高的议题；二是**Bug 修复呈集群化涌现**——围绕 cron/terminal 生命周期守卫的 NUL 字节崩溃、HOME 解析崩溃等问题，一夜间出现至少4条相关修复 PR，说明近期该模块改动引入了一组回归；三是**合并效率仍是瓶颈**——待合并 PR 高达45条，今日展示的 3 条关闭 PR 均为重复提交（duplicate），实际没有功能代码被合并进主干。无新版本发布。

## 2. 版本发布

无。

## 3. 项目进展

今日 **没有功能 PR 被合并进主干**。被关闭的 3 条 PR 全部因重复（duplicate）被驳回，但反映了维护者正在清理重叠提交：

- [PR #78971](https://github.com/NousResearch/hermes-agent/pull/78971) `fix(terminal): guard NUL bytes in remote script read fallback` — 标记为 #76762 的 follow-up，因重复被关闭
- [PR #78992](https://github.com/NousResearch/hermes-agent/pull/78992) `fix(deps): update brace-expansion and undici to patched versions` — 与 #78998 重复，被关闭
- [PR #78988](https://github.com/NousResearch/hermes-agent/pull/78988) `fix(aux): don't use primary model for explicit custom fallback endpoint` — 与另一个修复重复，被关闭

值得关注的是，虽然未合并，但 **45 条 PR 正在等待审查**，其中包含多个高价值修复（如 P0 的 prompt cache 跨会话共享修复 #78959、Feishu 多路复用去重修复 #78889、终端 NUL 崩溃修复 #78994/#77729 等），合并积压是当前项目最需要关注的流程风险。整体上，项目今日处于"修复待整合、功能待合并"的蓄力状态。

## 4. 社区热点

今日讨论最活跃的 Issue 集中在**架构演进与生态扩展**方向，反映了社区对 Hermes 作为多智能体基础设施的期待：

### #64182 — Plugin Interface Expansion 跟踪 Issue（21 条评论）
[Issue #64182](https://github.com/NousResearch/hermes-agent/issues/64182)

> 社区讨论最热的议题，从 Discord 社区线程蒸馏出的插件接口扩展参考计划，目标是让长期排队的插件 PR 能稳定合入。

**诉求分析**：社区对插件生态的扩展有强烈需求，且已有大量 PR 排队等待（如 MCP 目录扩展 #64303 即引用此 Issue）。这本质是社区要求项目加快插件系统标准化，以便将已经开发好的功能正式纳入。

### #64231 — 生命周期事件目录与 Hook 分类标准（17 条评论）
[Issue #64231](https://github.com/NousResearch/hermes-agent/issues/64231)

> 提出定义统一的生命周期事件目录和 hook 验收标准，一次性处理整个待合并的 observer-hook PR 集群，而非一条条零散合入。

**诉求分析**：这是对 #64182 的落实路径——社区希望维护者批量处置积压的 hook 相关 PR，减少"十几条一次性 VALID_HOOKS 增补"式的碎片化合并。

### #34352 — 多租户 Hermes 问题（14 条评论，获 👍2）
[Issue #34352](https://github.com/NousResearch/hermes-agent/issues/34352)

> 提出 Memory 操作绕过 hook 系统导致租户隔离无法实现，作者已在生产环境运行多月修复方案。

**诉求分析**：这是平台级能力需求，来自真实生产用户。评论数高说明多租户场景是付费/企业用户关注的核心痛点，与 #78941（prompt cache 跨会话共享，已有 P0 修复 PR）共同指向一主题。

## 5. Bug 与稳定性

今日报告了大量 Bug，按严重程度排列如下：

### P0 — 数据隔离风险
- **[#78941] prompt cache 跨会话共享** — `prompt_cache_key` 仅基于静态请求前缀寻址，无会话/租户维度，任意两个共享相同系统提示和工具集的会话（不同用户、不同项目）会共享缓存桶。已有修复 [PR #78959](https://github.com/NousResearch/hermes-agent/pull/78959) `fix(cache): scope prompt_cache_key by session to stop cross-session bucket sharing`。⚠️ 这是今天最严重的问题，涉及多租户数据泄漏风险。

### P1 — 服务不可用
- **[#76435] Gateway 重连循环 + 桌面更新器不可用** — Hermes Cloud 将 Discord gateway 推入重连循环，Discord 在 1000+ 连接尝试后重置了 bot token；同时桌面端更新器报错 "managed outside"。尚未见修复 PR。详见 [Issue #76435](https://github.com/NousResearch/hermes-agent/issues/76435)

### P2 — 功能崩溃/错误行为（已有修复 PR 的）
| Issue | 问题 | 修复 PR |
|---|---|---|
| [#78942](https://github.com/NousResearch/hermes-agent/issues/78942) | lifecycle_guard 遇 NUL 字节路径直接崩溃整个终端调用 | [PR #78994](https://github.com/NousResearch/hermes-agent/pull/78994)（另一条重复 PR #78971 已关闭） |
| [#78974](https://github.com/NousResearch/hermes-agent/issues/78974) | HOME 不可解析时 lifecycle_guard 崩溃，所有终端命令不可用 | [PR #78982](https://github.com/NousResearch/hermes-agent/pull/78982) |
| [#78975](https://github.com/NousResearch/hermes-agent/issues/78975) | Feishu cron 投递失败，`receive_id_type="thread_id"` 不是有效值 | 未见 PR |
| [#78948](https://github.com/NousResearch/hermes-agent/issues/78948) | 辅助客户端将主 provider 的模型发给自定义 fallback 端点，404 | 对应 PR #78988 已关闭（duplicate），需确认是否另有修复 |
| [#78862](https://github.com/NousResearch/hermes-agent/issues/78862) | Cron 任务在推理模型非流式调用挂起时超时，fallback 不触发 | 未见 PR |
| [#78122](https://github.com/NousResearch/hermes-agent/issues/78122) | `max_in_progress` 按 board 而非 gateway 全局执行（回归） | [PR #78995](https://github.com/NousResearch/hermes-agent/pull/78995) |
| [#78514](https://github.com/NousResearch/hermes-agent/issues/78514) | Feishu 多路复用模式下消息去重是每 profile 独立，重放事件被处理两次 | [PR #78889](https://github.com/NousResearch/hermes-agent/pull/78889) |
| [#77047](https://github.com/NousResearch/hermes-agent/issues/77047) | `read_file` 将含 CJK 文本的合法 UTF-8 文件误判为二进制 | 未见 PR |

### P2/P3 — 其他值得关注的
- [#78406](https://github.com/NousResearch/hermes-agent/issues/78406) — OpenAI 兼容网关 mid-stream 断连，传输层直到重试预算耗尽才重建，峰值 161 次/天
- [#44349](https://github.com/NousResearch/hermes-agent/issues/44349) / [#76602](https://github.com/NousResearch/hermes-agent/issues/76602) — auxiliary vision 自定义 provider 解析有误，导致 401
- [#75791](https://github.com/NousResearch/hermes-agent/issues/75791) — Windows 11 25H2 上 `hermes dashboard --status` 误报无 dashboard 进程

## 6. 功能请求与路线图信号

- **[#78791] Telegram 功能对齐 Campaign（meta-issue）** — 将 Hermes Telegram 面与 Bot API 10.2 对齐，所有 Telegram 相关 issue/PR 互相关联。这说明 Telegram 集成将迎来一波集中改进。见 [Issue #78791](https://github.com/NousResearch/hermes-agent/issues/78791)
- **[#78997] 桌面端底部状态栏显示订阅/Token 用量** — 用户希望在桌面 App 实时查看 API 配额消耗，避免任务中途触限。目前无对应 PR，但实现成本低，可能被纳入下个桌面版本。见 [Issue #78997](https://github.com/NousResearch/hermes-agent/issues/78997)
- **[#54204] 允许将已有会话移动到另一个项目** — 桌面端侧边栏拖拽移动会话到不同 workspace。虽被标为 duplicate，但获 👍3，社区需求明确。见 [Issue #54204](https://github.com/NousResearch/hermes-agent/issues/54204)
- **[#64615] 增加禁用自动项目/仓库发现的选项** — 与 #53328 同源，均指向桌面端自动扫描家目录的行为缺乏控制开关。见 [Issue #64615](https://github.com/NousResearch/hermes-agent/issues/64615)
- **[#478] Study Deck 技能（学习卡片/测验生成、间隔重复）** — 获 👍4，是本月社区较受期待的新技能类功能。见 [Issue #478](https://github.com/NousResearch/hermes-agent/issues/478)

**路线图判断**：插件接口扩展（#64182）和生命周期 hook 标准化（#64231）是最明确的路线图信号，已形成"跟踪 Issue + 批量处置 PR"的推进模式；Telegram 对齐 Campaign 预示下一个重大平台更新方向；多租户相关修复（#78959）可能随 P0 修复进入下一个 patch 版本。

## 7. 用户反馈摘要

- **桌面端全盘扫描是当前最大的用户不满点**：[#53328](https://github.com/NousResearch/hermes-agent/issues/53328) 指出"项目范式"重构后每次启动扫描整个家目录搜索 git 仓库，无配置项可关闭。用户评论强调这既拖慢启动又带来隐私顾虑。同类反馈见 [#64615](https://github.com/NousResearch/hermes-agent/issues/64615)。
- **Windows 安全部署需要官方指南**：[#46199](https://github.com/NousResearch/hermes-agent/issues/46199) 用户希望获得官方支持的便携/隔离部署方案，尽量减少写入 PATH 和持久化系统修改。说明有相当一部分安全敏感型用户在 Windows 上评估 Hermes。
- **流式输出被误杀影响实际体验**：[#75801](https://github.com/NousResearch/hermes-agent/issues/75801) 用户报告 OpenCode Go 的 gpt-5.6-luna 因缺少 `finish_reason` 被误判为网络中断，产生 4 次虚假续写，桌面端还会剥离已完成的流式答案。这暴露了流式处理对"协议不完全合规"的 provider 兼容性不足。
- **多租户生产用户已自行打补丁数月**：[#34352](https://github.com/NousResearch/hermes-agent/issues/34352) 用户表示"已在生产环境运行修复方案数月，支撑多个多租户 agent"。这说明核心架构缺陷已影响真实付费场景，社区期望官方尽快跟进。

## 8. 待处理积压

以下重要 Issue/PR 长期未获维护者响应或解决，建议重点关注：

- **[#34352] 多租户 Hermes 问题**（自 2026-05-29 开放至今，14 条评论，含生产用户数月修复经验）— 架构级缺陷，无官方回应。见 [Issue #34352](https://github.com/NousResearch/hermes-agent/issues/34352)
- **[#54204] 会话移动到其他项目**（自 2026-06-28，8 条评论）— 虽标为 duplicate 但仍开放，用户需求明确（👍3），需要维护者给出明确处置。见 [Issue #54204](https://github.com/NousResearch/hermes-agent/issues/54204)
- **[#66668] encoding-safety lint 提议**（自 2026-07-18）— 文件备注为 "HELD" 状态，提交者在等待维护者邀请或环境类 PR 合入。见 [Issue #66668](https://github.com/NousResearch/hermes-agent/issues/66668)
- **[PR #26859] Discord 运行时状态刷新修复**（自 2026-05-16 开放，已按最新 main 重写）— 积压近 3 个月的 PR，等待审查。见 [PR #26859](https://github.com/NousResearch/hermes-agent/pull/26859)
- **[PR #47583] 拒绝读取密钥凭据文件**（自 2026-06-17，安全增强）— 阻止 read-file 读取 `.env` 之外的云服务账号 JSON、私钥等文件，涉及安全边界，值得优先审查。见 [PR #47583](https://github.com/NousResearch/hermes-agent/pull/47583)
- **[PR #70568] `hermes://chat/new` 深链**（自 2026-07-24，标记了 6 个 sweeper/risk 标签）— 功能完整但风险标签较多，可能需要维护者更多的评审投入。见 [PR #70568](https://github.com/NousResearch/hermes-agent/pull/70568)

---
**项目健康度评估**：社区活跃度高、Bug 反馈及时、修复 PR 响应快（P0 级问题当天即有 PR），但合并吞吐量低（45 条 PR 待合并）、关闭 Issue 数为 0，长期积压可能削弱贡献者积极性。建议维护者优先批量处理可快速合入的小修复（如 NUL 字节防护、Feishu 去重、依赖更新），并针对 #34352 多租户问题给出官方架构回应。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-05

## 1. 今日速览

PicoClaw 过去24小时保持活跃的开发与社区讨论节奏。共有 3 条 Issue 更新（2 条活跃、1 条关闭）和 4 条 PR 更新（2 条待合并、2 条合并/关闭）。值得注意的是，两个与提示缓存 token 计量相关的 PR（#3251 已合入、#3317 待合并）表明项目正在推进 LLM 成本可观测性方向。与此同时，Web UI 长对话输入卡顿与 MCP 连接失败导致服务挂起成为社区最关注的稳定性议题。新版本发布为 0，项目处于功能迭代与问题修复并行的稳步推进状态。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

过去24小时内有 2 个 PR 被合并/关闭，均为功能性修复：

- **[#3251] fix(providers): capture the prompt cache token usage in Anthropic providers**（已关闭/合并）— 修复 Anthropic SDK provider 和 Anthropic Messages API provider 丢弃 Claude 返回的缓存相关 token 指标的问题。此项修复使运维人员可以监控提示缓存是否生效，并准确核算成本，属于成本可观测性的基础能力补全。
- **[#3280] fix(auth): make browser OAuth login survive real-world callback conditions**（已关闭/合并）— 修复 `picoclaw auth login --provider <oauth-provider>` 在 headless/远程环境下几乎必然失败的问题。该 PR 解决了 4 个独立的回调失败原因，避免用户在授权后因回调问题导致授权码作废而需重新认证的糟糕体验。

另有 2 个 PR 处于待合并状态，分别是 #3299（Exa 原生 web 搜索 provider）和 #3317（在 LLM 响应调试输出中记录提示缓存 token），预计后续合并后将进一步提升项目功能完整度与可观测性。整体来看，项目在认证可靠性、token 计量准确性等方面有实质进展。

## 4. 社区热点

- **[#3281] [BUG] Web UI chat input is very laggy when history has a little bit long**（3 条评论，1 👍）— 由 xpader 报告的 Web UI 输入延迟问题。在单个会话中积累较多聊天历史后，输入框变得极其卡顿。该问题获得社区认可（有 👍），反映出长会话场景是 Web UI 用户的常见使用方式，输入流畅度直接影响核心使用体验。
- **[#3269] [BUG] If the MCP server connection fails, the agent loop will hang**（3 条评论，1 👍）— 当 MCP 服务器连接失败时，agent 循环会挂起，导致聊天界面停止回复。此问题涉及 agent 核心运行稳定性，MCP 作为扩展生态的关键组件，其故障处理能力的缺失会影响使用第三方工具的用户。
- **[#3182] [BUG] Android version**（已关闭，6 条评论）— 该 Issue 虽已因 stale 自动关闭，但累计 6 条评论显示 Android 用户确实遇到了应用无法启动服务、路径无法修改等问题。这是社区对移动端支持的明确诉求信号。

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue | 描述 | 状态 | 是否有修复 PR |
|---------|-------|------|------|--------------|
| 🔴 严重 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 服务器连接失败导致 agent 循环挂起，聊天界面停止回复 | OPEN | 暂无 |
| 🟠 中等 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 在长会话历史下输入延迟严重 | OPEN | 暂无 |
| ⚪ 已解决 | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Android 版本无法启动服务、无法修改路径 | CLOSED（stale 自动关闭） | 无明确修复 |

其中 #3269 直接影响核心对话功能的可用性，建议维护者优先关注，排查 agent 循环中对 MCP 连接异常的超时处理与错误恢复机制。#3281 涉及前端渲染性能，可能需要在历史渲染上引入虚拟滚动或消息窗格截断。

## 6. 功能请求与路线图信号

当前待合并的 PR 中透露了清晰的功能方向：

- **[#3299] Add native Exa web search provider**（OPEN，待合并）— 新增 Exa 作为原生 `tools.web` / `web_search` provider，支持 `d`/`w`/`m`/`y` 时间范围过滤。这表明项目正在持续扩展搜索提供方生态，为用户提供更多搜索后端选择。
- **[#3317] feat(providers): log prompt cache tokens in LLM response debug output**（OPEN，待合并）— 在 LLM 响应的调试日志中增加 prompt cache token 记录。结合已合入的 #3251，说明**成本可观测性**是当前明确的技术方向，未来版本很可能进一步完善 token 使用明细与成本统计能力。

用户在 #3182 中反映的 Android 使用问题，结合该 Issue 因 stale 被关闭的情况，可能意味着移动端并非当前维护重点，但社区对此仍有需求。

## 7. 用户反馈摘要

- **长会话体验不佳**（来自 #3281）：用户 PicoClaw 0.3.1 + Go 1.25.11 环境下，在 Web UI 单会话中积累一定量历史后，输入框操作出现明显迟滞。这表明 Web UI 在长上下文场景下的渲染性能需要优化。
- **MCP 故障恢复期望**（来自 #3269）：用户期望当 MCP server 连接失败时，agent 能够优雅降级或明确报错，而不是整体挂起导致完全无法对话。这反映了用户对系统健壮性的高要求。
- **认证流程需要支持真实部署场景**（来自 #3280 PR 解决的问题）：开发者在 headless/远程服务器上进行 OAuth 登录时频繁遭遇授权码被烧毁却认证失败的困境。该修复合入后，将显著改善服务器端部署的可用性。

## 8. 待处理积压

- **[#3281] Web UI 长会话输入卡顿** — 已开放 15 天（自 2026-07-21），无维护者回应记录。该问题直接影响重度用户的日常使用，建议维护者给出响应或 workaround。
- **[#3269] MCP 连接失败导致挂起** — 已开放 16 天（自 2026-07-20），属于 agent 稳定性关键问题，需要维护者排查确认触发条件并提供修复或临时规避方案。
- **[#3182] Android 版本无法使用** — 虽已因 stale 关闭，但 6 条评论表明存在真实用户诉求。建议维护者评估是否将移动端支持纳入路线图，或在 README/文档中明确移动端支持状态，避免用户反复提交同类问题。

---

**项目健康度总结**：PicoClaw 在过去24小时内展现出稳定的开发节奏，PR 合并与提交活跃。成本可观测性与 OAuth 认证可靠性得到实质改善。但两个已开放超过两周的稳定性 Bug（MCP 挂起、Web UI 卡顿）仍未获维护者响应，是本阶段需要重点关注的风险点。整体项目处于正常迭代轨道，社区参与度良好。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-08-05）

数据来源：github.com/nanocoai/nanoclaw | 统计周期：2026-08-04 至 2026-08-05

## 1. 今日速览

过去 24 小时，NanoClaw 仓库无新增 Issue、无新版本发布，PR 侧有 5 条更新（4 条开放、1 条关闭），整体活跃度处于**中等水平**。两条新 PR 于 8 月 4 日提交，其中 #3186 为通过贡献指南检查的架构重构，#3185 为影响 Discord 审批流程的严重 bug 修复，均等待维护者处理。一条 core-team 定时任务修复 PR 已关闭（#3154），两条已存在三周的 Dial 渠道功能 PR 在 8 月 4 日有再次更新，说明该功能仍在推进。项目目前处于**维护与功能扩展并行**的稳定阶段。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

- **[#3154 fix(agent-runner): give scheduled tasks current run time](https://github.com/nanocoai/nanoclaw/pull/3154) —— 已关闭**（core-team）  
  该 PR 修复了定时任务的时间渲染问题：现在任务时间从实际调度发生时间（`process_after`）渲染，并为旧数据保留创建时间作为兜底；同时为任务生成包含 weekday 的 `current_time`。定时任务运行时的时效性得到修复。

- **[#3186 refactor: add host seams for skill-owned capabilities](https://github.com/nanocoai/nanoclaw/pull/3186) —— 开放**（8 月 4 日提交，作者 zvi-fried）  
  架构级重构 PR，为 skill 自有能力增加 host 接缝，降低渠道与 skill 之间的耦合度。已标记 `follows-guidelines`，目前处于待合并状态。

- **[#3185 fix(discord): strip \n delimiter in webhook interaction custom_id so approvals resolve correctly](https://github.com/nanocoai/nanoclaw/pull/3185) —— 开放**（8 月 4 日提交，作者 omerh）  
  修复 Discord 审批卡片在 webhook 路径下解析 `custom_id` 错误的问题，属于用户可直接感知的关键修复，需要尽快 review。

此外，两条 Dial 渠道相关 PR（[#3041](https://github.com/nanocoai/nanoclaw/pull/3041)、[#3050](https://github.com/nanocoai/nanoclaw/pull/3050)）在 8 月 4 日有更新，说明该功能集成仍处于活跃推进中。

## 4. 社区热点

本次数据快照未提供 Issue/PR 评论数与讨论内容，无法量化话题热度。从 PR 内容本身来看，以下两个议题最值得关注：

- **[#3185 Discord 审批按钮全部被拒绝](https://github.com/nanocoai/nanoclaw/pull/3185)**：该 bug 导致用户点击 Approve 也会被拒绝，影响所有通过 Discord webhook 按钮交互的审批场景，是高影响问题的修复 PR，预计会受到较多使用者关注。
- **[#3041 / #3050 Dial 渠道接入](https://github.com/nanocoai/nanoclaw/pull/3041)**（[#3050](https://github.com/nanocoai/nanoclaw/pull/3050)）：将 Dial 作为新渠道接入，支持 SMS 与 AI 语音通话，并同步更新 channel picker 与 setup wizard。这表明社区对新增通信渠道有明确需求，且实现已进入最后的流程整合阶段。

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | 问题描述 | 修复状态 |
| --- | --- | --- |
| **高** | Discord 端 `ask_question` / 审批卡片点击任意按钮都会解析为错误选项，实际效果是**用户点击 Approve 也被拒绝**。根因是 Chat SDK bridge 的 webhook 路径解码 `custom_id` 时未剥离 `\n` 分隔符。 | 已有修复 PR：[#3185](https://github.com/nanocoai/nanoclaw/pull/3185)，待合并 |
| **中** | 定时任务无法获得“当前运行时间”，展示的时间与任务实际调度发生时间不一致。 | 修复 PR [#3154](https://github.com/nanocoai/nanoclaw/pull/3154) 已关闭 |

今日未发现崩溃、回归或数据丢失类问题。

## 6. 功能请求与路线图信号

- **Dial 渠道接入**（大概率进入下一版本）：[#3041](https://github.com/nanocoai/nanoclaw/pull/3041) 实现 Dial channel adapter（SMS + AI 语音通话），[#3050](https://github.com/nanocoai/nanoclaw/pull/3050) 将其接入 channel picker、wizard 与 `runChannelSkill` 模型。两条 PR 形成完整的功能闭环，是当前最明确的版本候选功能。
- **Skill 能力架构升级**：[#3186](https://github.com/nanocoai/nanoclaw/pull/3186) 为 skill-owned capabilities 增加 host seams，体现项目在扩展 skill 能力边界、降低渠道耦合方面的技术投入。该重构会为后续新渠道和复杂 skill 提供更清晰的扩展点，属于中长期路线图信号。

## 7. 用户反馈摘要

本次快照未提供 Issues 评论内容，暂无直接用户反馈可提炼。从 PR 摘要中可间接识别出以下使用者痛点：

- **Discord 审批流程不可用**：用户点击 Approve 却得到 rejected 结果，说明审批这一核心交互流程被 bug 阻断，修复需求迫切。
- **定时任务时间展示错误**：依赖计划任务执行自动化流程的用户会遇到执行时间与预期不符的问题，影响任务编排的可观测性与可靠性。

建议后续重点关注仓库 Issue 讨论区的直接用户反馈，补充更完整的体验画像。

## 8. 待处理积压

- **[#3041 feat(channels): add Dial channel adapter (SMS + AI voice calls)](https://github.com/nanocoai/nanoclaw/pull/3041)** 与 **[#3050 feat(setup): add Dial to the channel picker + wizard/skills](https://github.com/nanocoai/nanoclaw/pull/3050)**：两条 PR 均于 **7 月 14 日**创建，至今已超过三周仍未合并。虽在 8 月 4 日有更新，仍建议维护者明确合并计划，或与作者（OmriBenShoham）沟通剩余阻塞项，避免长时间滞留。
- **[#3186 refactor](https://github.com/nanocoai/nanoclaw/pull/3186)** 与 **[#3185 fix](https://github.com/nanocoai/nanoclaw/pull/3185)**：均为 8 月 4 日新提交的 PR，其中 #3186 已通过贡献指南检查，#3185 是用户可见的 bug 修复。建议优先安排 review，避免修复类 PR 在队列中停留过久。

---

**整体健康度小结**：项目在无新增 Issue 的情况下仍保持 PR 持续流动，开发节奏以维护者与核心贡献者驱动为主；严重 bug 修复已提交待合并，新渠道功能稳步推进，仓库整体状态健康。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-05

> 数据来源：github.com/nullclaw/nullclaw GitHub 仓库 | 统计周期：2026-08-04 ~ 2026-08-05

---

## 1. 今日速览

- 过去24小时内项目**无新 Issue、无 Issue 关闭**，社区问题反馈与讨论处于静默状态。
- 有 **1 个 PR #981** 处于打开/待合并状态，更新于 8 月 4 日，仍停留在 review 阶段，活跃度来自这一条新进展。
- 无新版本 Release 发布，版本迭代节奏暂缓。
- 综合来看，项目当前处于**低活跃但有条不紊**的阶段：无紧急 bug 报告，但新的 provider 扩展 PR 正在等待维护者处理。
- 建议关注 #981 的合并动向，它可能是近期唯一的功能增长点。

---

## 2. 版本发布

今日无新版本发布，本部分省略。

---

## 3. 项目进展

**今日无 PR 被合并或关闭**，项目代码库在合并层面没有前移。

值得关注的是 **PR #981**（打开，待合并）——这是当前积压中唯一可能有实质推进的 PR：

- **PR #981** [OPEN] feat(provider): add grok-cli provider for xAI Grok CLI
  - 作者：valonmulolli ｜ 创建：2026-07-29 ｜ 更新：2026-08-04 ｜ 评论：暂无（数据未显示）｜ 👍：0
  - 链接：https://github.com/nullclaw/nullclaw/pull/981
  - 摘要：新增一个基于 CLI 的 provider，委托本地 `grok` CLI（xAI Grok），遵循与现有 `codex-cli`/`gemini-cli`/`claude-cli` provider 相同的 spawn-per-request 模式。`grok-cli` 为**可选** provider，需本地安装并认证 `grok` CLI 方可使用。
  - 意义：如果合并，NullClaw 将多一个官方支持的 AI provider（xAI Grok），进一步扩展“CLI 代理型” provider 家族，使用户能在统一接口下调用更多模型后端。
  - 注意：该 PR 已存在约 7 天（创建于 7/29，更新于 8/4），仍未进入合并流程，需要维护者 review。

---

## 4. 社区热点

今日没有新增 Issue，也没有 PR 上的评论数据（`undefined`），社区讨论几乎为零。

唯一可视为“热点”的是上述 **PR #981**。虽然它当前没有评论和反应，但作为一个**新的 provider 扩展**，它是近期社区中唯一的活跃变更点。从 PR 摘要和项目现有 provider 模式（codex-cli / gemini-cli / claude-cli）来看，背后的诉求很清晰：

- 用户希望 NullClaw 支持 **xAI 的 Grok CLI**，从而在本地通过现有统一接口调用 Grok 模型；
- 已有的多个 CLI-based provider 证明这种 spawn-per-request 模式受社区认可，新增 provider 是低成本、高收益的扩展方式。

在无其他讨论的环境中，建议维护者对 #981 给予明确反馈（合并/关闭/请求修改），避免 PR 长期悬置。

链接：https://github.com/nullclaw/nullclaw/pull/981

---

## 5. Bug 与稳定性

**今日无新增 Bug 报告**，无崩溃、回归或稳定性问题被提交。

项目当前在稳定性方面处于“零报告”的安全状态，但这也可能意味着测试与反馈的活跃度偏低。从健康度角度，无紧急修复需要处理，可以正常推进功能开发。

---

## 6. 功能请求与路线图信号

今日无新 Issue 提出功能请求，但从 **PR #981** 可以读出明确的路线图信号：

- **新增 xAI Grok 支持**：社区成员主动实现了 grok-cli provider，说明对多 AI 后端支持有持续需求。考虑到已有 codex-cli / gemini-cli / claude-cli，如果该 PR 被合并，NullClaw 的“CLI 代理型” provider 将覆盖主流闭源/开源模型 CLI，进一步增强其作为“AI 助手统一前端”的定位。
- **模式延续性强**：该 PR 不是引入新架构，而是复用现有 spawn-per-request 模式，实现成本低、风险小，**很可能被纳入下一版本**。
- 反向信号：PR 已提交 7 天仍未合并，可能暗示维护者对 provider 扩展方向的优先级不高，或对 xAI CLI 的稳定性有顾虑。建议维护者积极表态，避免贡献者流失。

链接：https://github.com/nullclaw/nullclaw/pull/981

---

## 7. 用户反馈摘要

由于数据中无 Issue 评论、无 PR 评论（评论字段为 `undefined`），无法从文本评论中直接提炼用户反馈。

间接反馈可从代码贡献行为推断：

- 有外部贡献者（valonmulolli）主动提交新 provider，表明用户在使用现有 CLI-based providers（如 codex-cli、gemini-cli）时体验良好，愿意将这种模式复制到更多模型（Grok）；
- 用户对“本地 CLI + 统一 Agent 框架”的架构持积极态度，希望扩展支持的模型范围；
- 缺少负面反馈数据，暂无用户表达明显不满或痛点。

> 说明：评论数据缺失可能为数据采集不完整，不排除存在评论但未在本报告数据中体现的情况。

---

## 8. 待处理积压

当前唯一需要关注的事项：

| 事项 | 详情 | 状态 | 关注原因 |
|------|------|------|----------|
| **PR #981** | feat(provider): add grok-cli provider for xAI Grok CLI | 打开（待合并），创建于 7/29，最后更新 8/4 | 已等待约 7 天，无 review、无评论、无👍，维护者尚未表态 |

**建议**：维护者尽快对 #981 进行 review 并给出明确意见（合并/请求修改/关闭）。长时间悬置的 PR 会降低贡献者的参与意愿。若该 PR 符合项目方向但需要调整，也请主动留言说明下一步计划。

链接：https://github.com/nullclaw/nullclaw/pull/981

---

## 健康度总结

| 维度 | 状态 |
|------|------|
| Issue 处理速度 | 无新问题，无需处理 |
| PR 合并效率 | 低（当前仅 1 个待合并 PR，且已积压 7 天） |
| 社区活跃度 | 低（无评论、无讨论） |
| 功能开发节奏 | 缓慢推进（有外部贡献者提交新功能，但未落地） |
| 稳定性 | 良好（无 Bug 报告） |
| **总体评价** | **稳定但需提升响应效率，维护者应优先处理 #981** |

---
*本报告基于 NullClaw GitHub 仓库 2026-08-05 数据自动生成，仅供项目健康度参考。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-05

## 1. 今日速览

过去24小时项目异常活跃：**50条Issue更新（38条活跃/新开，12条关闭）**、**50条PR更新（32条待合并，18条已合并/关闭）**，无新版本发布。核心动态集中在两大主线：一是 **BenKurrek 主导的 WS（Wave）系列架构重构持续推进**，多个大型 PR（#7159、#7160、#7161）已关闭合并，目标架构（epic #3773）的落地节奏明显加快；二是 **1.1.0-rc.1 发布前的稳定性加固**，多个 Windows 阻塞问题（#7197、#7200）已被修复关闭。值得注意的是，社区反馈类 Issue（内存不回忆 #7185、网页抓取不稳定 #7180、用户级模型选择 #7183）开始密集涌入，说明产品已经进入真实用户验证阶段。

---

## 2. 版本发布

过去24小时内无新版本发布。但多个 PR 正为 **ironclaw-v1.1.0-rc.1** 铺路：

- [#7198 [OPEN] fix(migration): preserve rc1 state during 1.1 startup](https://github.com/nearai/ironclaw/pull/7198)：确保 1.0.0-rc.1 → 1.1.0-rc.1 启动迁移无损，这是 1.1.0 发布的关键前提。
- [#7200 [CLOSED] fix(composition): stop icacls writing to the CLI's stdout on Windows](https://github.com/nearai/ironclaw/pull/7200)：第四个 Windows 阻塞 defect，preflight 运行已推进到编译、`--version`、`--help` 全部通过。

---

## 3. 项目进展

今日关闭/合并的 PR 集中在 **架构重构（WS系列）** 和 **CI/构建系统修复** 两大方向，项目向前迈进的步伐非常明确：

### 架构重构 — 目标架构落地

- **[#7159 [CLOSED] WS5: sever `conversations -> turns` by port inversion](https://github.com/nearai/ironclaw/pull/7159)**：通过端口反转消除了 `conversations -> turns` 依赖边，注册数从 4 降到 3，零行为迁移。这是目标架构 CHECKLIST 中 WS5 行的关键执行。
- **[#7160 [CLOSED] WS3: lanes consume a narrow reserve/reconcile/release port](https://github.com/nearai/ironclaw/pull/7160)**：MCP 和 sandbox 不再直接依赖 `ironclaw_resources`，而是通过窄端口消费资源。
- **[#7161 [CLOSED] WS10: convert the loud path-keyed gates to inventory keying](https://github.com/nearai/ironclaw/pull/7161)**：将路径匹配型的 CI 门禁转换为基于清单的 keying，让门禁在家族迁移时不会误伤。
- **[#7156 [CLOSED] Enforcement: same-layer edge inventory, composition absolute-LOC ceiling](https://github.com/nearai/ironclaw/pull/7156)**：四个 CI 强制门禁缺陷修复并通过了“sabotage-tested”（故意引入违规→观察变红→恢复→观察变绿）。

### CI/构建系统修复

- **[#7167 [CLOSED] fix(ci): unbreak per-package clippy on bin-only crates](https://github.com/nearai/ironclaw/pull/7167)**：`--lib` 参数在纯 bin crate 上是硬错误，导致第一个 `ironclaw` 包变更的 PR 永远失败在标志位而非 lint 上。此 PR 从根上修复了该问题。
- **[#7197 [CLOSED] fix(ci): pass the Windows identity variables to the release smoke](https://github.com/nearai/ironclaw/pull/7197)**：修复 Windows 预检中的 `USERNAME is unset` 失败；PR 主动移除对已发布行为的改动，保守度值得认可。

### 新功能

- **[#7184 [OPEN] feat: Nostr host functions for WASM tools (reborn)](https://github.com/nearai/ironclaw/pull/7184)**：为 WASM 沙箱接口新增三款 Nostr 主机函数（签名、获取公钥、验证），私钥永不离主机。

---

## 4. 社区热点

以下 Issues/PRs 获得了最多讨论关注，反映了当前社区的注意力焦点：

- **[#6284 [CLOSED] [EPIC] error-recoverability endgame — 15 comments](https://github.com/nearai/ironclaw/issues/6284)**：v1.1.0 的错误可恢复性终极目标。该 epic 定义了完整的可恢复性契约（模型必须看到错误、看到原因和成功路径、并获得行动回合）。15 条评论表明内部对 ER 契约的细节讨论非常深入。
- **[#6752 [OPEN] Instance deletion fails with error, "Loading your agents..." stuck on re-login — 3 comments](https://github.com/nearai/ironclaw/issues/6752)**：实例删除失败且重新登录卡死。这是用户直接可见的严重功能缺陷，原反馈来自 Slack 用户。
- **[#7145 [OPEN] WS2: finish the extension_host → loops re-layer — 3 comments](https://github.com/nearai/ironclaw/issues/7145)**：架构重构中基于“四端口残留”而非文件数来规模估算的修正方案，延续了#7092 的讨论。
- **[#7119 [CLOSED] Code Style clippy is package-set-dependent — 4 comments](https://github.com/nearai/ironclaw/issues/7119)**：main 分支当前的 clippy 红，是 CI 门禁有效性的直接质疑。

**分析**：讨论最热的话题集中在内部架构治理（可恢复性、依赖剔除）和严重用户可见缺陷上，说明项目当前处于“技术债偿还”与“产品稳定性”双轨冲刺的阶段。社区（包括外部反馈者）对工程质量有较高期待。

---

## 5. Bug 与稳定性

按严重程度排列：

### 高严重度 — 用户功能受损

- **[#6752 [OPEN] Instance deletion fails, "Loading your agents..." stuck on re-login](https://github.com/nearai/ironclaw/issues/6752)**：实例删除失败 + 重新登录卡死。来自 Slack 用户报告，影响核心使用流程。无关联 fix PR。
- **[#7185 [OPEN] Memory not reliably recalled across conversations](https://github.com/nearai/ironclaw/issues/7185)**：多个测试者独立观察到的跨会话记忆不可靠问题，来自 2026-07-23 IronClaw Champions 周会。属于 AI 助手产品的核心能力缺陷。
- **[#7168 [CLOSED] Agent-installed skills are invisible](https://github.com/nearai/ironclaw/issues/7168)**：`skill_install` 返回 `{"installed":true}` 但技能在设置和模型中均不可见，也无法激活。本地 WebUI 手工复现。严重的产品逻辑断裂。

### 中严重度 — 功能/行为错误

- **[#7192 [OPEN] fix(webui): anchor optimistic user messages](https://github.com/nearai/ironclaw/issues/7192)**：用户消息渲染在 agent 回复下方，对话顺序错乱直至 durable 行到达。
- **[#7191 [OPEN] fix(builtin.time): add relative-offset arithmetic](https://github.com/nearai/ironclaw/issues/7191)**：真实生产线程中 agent 调用 `parse("24 hours ago")` 失败，时间工具缺少相对偏移解析。
- **[#7115 [OPEN] docker/reborn/entrypoint.sh gates migration on dead env var](https://github.com/nearai/ironclaw/issues/7115)**：文档跟随会导致迁移被跳过。
- **[#7104 [OPEN] Extractors report "no text found" as Failed rather than Empty](https://github.com/nearai/ironclaw/issues/7104)**：模型被错误告知“失败”而非“空”。

### 低严重度 — 资源效率/质量问题

- **[#7103 [OPEN] Latency-trace field computed even when tracing is off](https://github.com/nearai/ironclaw/issues/7103)**：不必要的每工具调用 JSON 字节计算。
- **[#7146 [OPEN] 121 sites use `target = "…"` instead of `target: "…"`](https://github.com/nearai/ironclaw/issues/7146)**：tracing 过滤器对这些事件完全不可见，121处。

### 已修复

- **[#7119 → #7167]**：clippy 包集依赖问题已通过 PR #7167 修复。
- **[Windows 阻塞 → #7197 / #7200]**：两个 Windows 发布阻塞问题均已关闭修复。

---

## 6. 功能请求与路线图信号

以下功能需求在今日数据中表现突出，结合已有 PR 可初步判断路线图走向：

- **[#7194 [OPEN] outbound shared channel as delivery target](https://github.com/nearai/ironclaw/issues/7194)**：让管理员允许的共享频道成为出站投递目标。属于**交付层能力扩展**，解决了“agent 能发消息但不能将频道设为出站目标”的断裂。**可能进入 1.1.x**。
- **[#7193 [OPEN] add run-now (manual fire) across automations](https://github.com/nearai/ironclaw/issues/7193)**：自动化缺“立即运行”。从模型、WebUI、产品表面三个层面提出的完整需求。**与 #7191 的自动化场景直接相关**，说明自动化是当前重点方向。
- **[#7177 [OPEN] Improve deferred tool retrieval with schema-aware ranked search](https://github.com/nearai/ironclaw/issues/7177)**：Reborn 渐进式工具披露的检索排序优化，建议将 canonical capability vocabulary 纳入索引。**与 reborn 性能路线相关**。
- **[#7183 [OPEN] per-user LLM model selection](https://github.com/nearai/ironclaw/issues/7183)**：营销用户提出每个用户应有模型选择权，当前仅管理员可配置。真实用户需求，但**涉及权限模型变更**，冲击面较大。
- **[#7105 [OPEN] Evaluate dedicated identity/session and payments service](https://github.com/nearai/ironclaw/issues/7105)**：支付问题反复出现，提议将 identity/session 和支付独立成服务。**架构级建议**，可能被纳入远期计划。
- **[#6731 [OPEN] Integrate IronHub into IronClaw](https://github.com/nearai/ironclaw/issues/6731)** + **[#6965 [OPEN] docs: adds documentation for IronHub](https://github.com/nearai/ironclaw/pull/6965)**：IronHub 集成（运行时市场化的工具/技能发现与安装）正处于文档阶段，是**明确的路线图大项**。
- **[#7184 Nostr host functions](https://github.com/nearai/ironclaw/pull/7184)**：外部 contributor 提交的 Nostr 支持 PR，为 WASM 工具开放三款主机函数，**如果质量过关可能作为新功能进入 1.1.0**。

---

## 7. 用户反馈摘要

从今日 Issues 中提炼的用户真实声音：

- **跨会话记忆是首要痛点**（#7185）：Champions 周会中多位测试者反馈“agent 无法在后续对话中回忆起此前建立的信息”，Devon（法律角色）与 Jeremy（营销角色）都遇到了。这说明**持续记忆功能在真实多轮工作流中的可靠性不足**。
- **网页抓取体验不稳定**（#7180）：Michael Kelly（builder ops）反馈“有些源能抓成功，有些直接失败，用户侧看不出规律”，且 agent 倾向使用 http 工具而非 web_search。**典型“工具选择策略 + 抓取可靠性”双重问题**。
- **权限模型在真实团队中受限**（#7183）：营销用户无法自行选择模型，只能等管理员（Tobias）配置。**团队协作场景下的灵活性诉求**。
- **支付相关问题反复出现**（#7105）：用户再次报告支付/账户信用问题，已是多次同类反馈，社区开始寻求结构性解法。
- **实例删除失败的挫败感**（#6752）：用户无法删除实例且重登录卡死——“Loading your agents...” 是直接可见的阻塞。
- **外部用户的测量建议**（#7199）：FaceSeek 开发者建议将“候选技能存在但未被选中”和“选中且改变了最终答案”分开记录，否则无法证明技能选择的收益。对 IronClaw 的技能路由度量有直接借鉴意义。

---

## 8. 待处理积压

以下重要项目/PR 已存在较长时间，值得维护者关注：

- **[#3773 [OPEN] Epic: Land the IronClaw Target Crate Architecture](https://github.com/nearai/ironclaw/issues/3773)**：创建于 2026-05-19，已持续近 3 个月，是当前 WS 系列工作的总纲领。今日有密集的 WS 系列 PR 关闭，说明该 epic 仍在活跃推进，但**作为 v1.2.0 的 epic，需要持续跟踪总进度**。
- **[#5598 [OPEN] chore: release](https://github.com/nearai/ironclaw/pull/5598)**：release PR 自 2026-07-03 起一直处于打开状态，涉及 `ironclaw_common` 和 `ironclaw_skills` 的 **API breaking changes**。等待合并时间已超一个月，**可能阻塞依赖方的迭代**。
- **[#5101 [OPEN] ci: reuse cargo-component installer in live canary](https://github.com/nearai/ironclaw/pull/5101)**：6 月 20 日创建，已悬置 6 周，属于 CI 稳健性改进，无争议但被长期搁置。
- **[#6565 [OPEN] Epic: Reliable Skill Discovery, Routing, and Activation](https://github.com/nearai/ironclaw/issues/6565)**：创建于 2026-07-23，是技能发现的核心 epic，衍生出 #6941 子 epic。#6565 本身更新停留在 2026-08-04，但评论区活跃度有限，**需确认责任归属与里程碑**。
- **[#6947 [OPEN] classify-test-scope.sh: ironclaw_product mis-bucketed](https://github.com/nearai/ironclaw/issues/6947)**：CI 脚本归类 bug，已记录但无 fix PR。此类问题会静默影响测试覆盖判断，**建议尽快修复**。

---

**总结**：IronClaw 当前处于 **v1.1.0-rc.1 发布冲刺 + 目标架构（v1.2.0）重构双线并行** 的高活跃状态。工程质量管控非常强势（sabotage-tested 门禁、doc-truth audit、clippy 包集修复），但用户侧反馈开始暴露记忆、WebScraping、权限模型等产品化短板。建议维护者在继续架构腾挪的同时，关注外部用户反馈的响应闭环，避免“内部重构火热、外部体验滞后”的剪刀差。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-05

---

## 今日速览

过去24小时项目处于**高活跃度**状态：共13条PR更新（其中10条已合并/关闭），1条Issue更新（安全相关），无新版本发布。合并的PR集中在**2026.8.3版本发布流程**（#2430）、**启动积分活动完善**（#2427/#2428/#2424）、以及**设置项增强**（#2425广告隐藏、#2425 Artifact预览开关）等方向，显示项目正在密集推进功能迭代与发布收尾工作。值得关注的是，一条历史安全Issue（#1202，agent泄漏模型key信息）仍处于开放状态且被标记为stale，建议维护团队优先审视。整体项目健康度良好，PR合并效率高，社区提交活跃。

---

## 版本发布

本日无新版本发布，但PR #2430 `Release: 2026.8.3` 已合并至main分支，实质上是完成了 **2026.8.3 版本的发布流程**。根据PR描述，该版本主要包含：

- **新增原生积分奖励活动**（native credit-reward activities）
- **优化首次运行登录体验**（streamline first-run login）
- **新增Artifact自动预览控制开关**
- **改进模型错误处理机制**
- **提升Windows安装程序可靠性**

上述变更涉及renderer、main、cowork等多个核心模块，建议用户关注官方Release说明获取完整更新日志。

🔗 [PR #2430 Release: 2026.8.3](https://github.com/netease-youdao/LobsterAI/pull/2430)

---

## 项目进展

今日合并/关闭的10条PR中，按功能板块分类如下：

### 🚀 版本发布与集成
- **#2430** 将 `release/2026.8.3` 合入 `main`，完成8月版本发布（见上节）。
- **#2429** 优化登录页面（chore: optimize login page），提升了首次登录流程的视觉与交互体验。
- **#2428** 补全启动积分活动的分析字段，包括完整登录重定向URL上报、错误信息透传等，增强活动数据可观测性。

### ✨ 新功能与设置增强
- **#2425** 新增 **Artifact自动预览开关**：允许用户关闭文件自动预览，同时保留手动预览功能与既有默认行为。
- **#2374**（待合并）新增 **侧边栏广告横幅永久隐藏**开关，置于 Settings → General，解决用户无法彻底关闭广告的痛点。

### 🔧 稳定性与错误处理
- **#2426** 将 **模型容量过载（overloaded）错误**与通用限流（rate-limit）分开分类，避免误导用户立即重试。该修复同时包含原始错误预览覆盖逻辑，防止OpenClaw自带限流文案掩盖真实过载原因。
- **#2424** 回滚此前对积分活动的移除，**恢复500积分领取流程**（含IPC、UI及素材），确保活动在存续期内正常工作。

🔗 [PR #2425](https://github.com/netease-youdao/LobsterAI/pull/2425) | [PR #2426](https://github.com/netease-youdao/LobsterAI/pull/2426) | [PR #2424](https://github.com/netease-youdao/LobsterAI/pull/2424) | [PR #2427](https://github.com/netease-youdao/LobsterAI/pull/2427) | [PR #2428](https://github.com/netease-youdao/LobsterAI/pull/2428)

---

## 社区热点

今日讨论热度总体不高，仅1条Issue含评论。但该Issue性质严重，值得重点关注：

### 🔒 Issue #1202（开放，安全风险）
**[【bug】agent泄漏model key信息，存在敏感信息泄漏风险](https://github.com/netease-youdao/LobsterAI/issues/1202)**

- **作者**：blueb0ne | 评论数：1 | 创建于2026-04-01，最近更新于2026-08-04
- **核心诉求**：用户发现通过自然语言向agent询问“当前key配置信息”，agent会主动回复配置文件位置、环境变量名称等敏感信息，并可进一步引导获取真实模型key。用户期望agent**拒绝泄露**此类信息，但实际行为未做防护。
- **分析**：该问题触及AI助手安全边界，属于**高风险模型行为漏洞**。当前Issue已被标记为 `[stale]`，意味着维护者可能已忽略数月。在AI Agent安全日益受重视的行业背景下，此问题不应继续积压。

---

## Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 修复状态 |
|---------|----------|------|----------|
| 🔴 高 | [Issue #1202](https://github.com/netease-youdao/LobsterAI/issues/1202) | Agent可被诱导泄漏模型key及配置敏感信息 | 无对应修复PR，已stale |
| 🟡 中 | [PR #2426](https://github.com/netease-youdao/LobsterAI/pull/2426) | 模型过载错误被误分类为“限流”，误导用户无意义重试 | 已合并修复 |
| 🟢 低 | [PR #1205](https://github.com/netease-youdao/LobsterAI/pull/1205) | 会话重命名失败时无任何用户提示（错误被静默吞掉） | 待合并，已stale |

> 说明：Issue #1202为今日唯一新报告的Bug（但创建于4月），暂无修复PR。PR #2426 属于backend稳定性修复，已随2026.8.3版本合并。

---

## 功能请求与路线图信号

从今日活跃的PR与Issue中，可以识别出以下功能需求信号：

### 可能纳入下一版本的功能
1. **广告横幅永久隐藏**（PR #2374，待合并） — 用户诉求明确（对应Issue #2342），实现简单，预计将在近期版本合入。
2. **Artifact自动预览开关**（PR #2425，已合并） — 已进入2026.8.3，属于用户可控性增强，符合“减少意外行为”的趋势。

### 值得关注的需求信号
3. **Agent敏感信息防护**（Issue #1202） — 虽非新功能需求，但强烈暗示社区对AI Agent隐私边界的要求正在提升。若项目未来建立“敏感操作白名单”或“安全回答策略”，将是重要的差异化竞争力。

---

## 用户反馈摘要

来自Issue #1202的评论（唯一有评论的内容）反映了以下关键用户声音：

- **痛点**：用户认为AI助手不应在未授权情况下暴露任何凭据或配置路径信息。该反馈体现了对Agent“越权泄露”的担忧，属于信任危机级别的反馈。
- **使用场景**：用户在测试/审计场景下向agent询问敏感信息，验证其安全边界。
- **不满意点**：agent不仅没有拒绝，反而提供了详细指引（文件位置、环境变量名），说明当前安全过滤机制存在明显漏洞。

> 建议：维护者优先回应该Issue，至少给出明确的安全策略说明（是否已知、计划如何修复），以安抚社区对数据安全的关切。

---

## 待处理积压

以下为长期未闭环且值得维护者关注的项目：

| 类别 | 编号 | 标题 | 时间线 | 风险提示 |
|------|------|------|--------|----------|
| ⚠️ Issue | [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) | agent泄漏model key信息 | 创建于2026-04-01，已stale | 安全问题，涉及用户数据与信任，长期未处理可能引发负面口碑 |
| ⚠️ PR | [#1205](https://github.com/netease-youdao/LobsterAI/pull/1205) | fix: 会话重命名失败时显示错误提示 | 创建于2026-04-01，已stale | 修复内容简单明确，长期未合入易产生合并冲突 |
| ⚠️ PR | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | electron依赖大版本升级（40→43） | 创建于2026-04-02 | 依赖已落后较多，electron 43包含大量安全与性能更新，建议尽快处理 |
| ℹ️ PR | [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) | 隐藏侧边栏广告横幅的永久开关 | 创建于2026-07-21，待合并 | 阻塞性较小，但长期开放可能积累冲突 |

---

## 结语

LobsterAI 今日整体动态呈**积极上升**态势：发布流程顺畅、功能迭代迅速（Artifact预览开关、积分活动完善）、错误处理精细化。但需警惕两个长期未闭环隐患：**敏感信息泄漏安全Issue** 与 **electron大版本升级依赖债**，建议维护团队在下一迭代周期优先安排。项目社区活跃度良好，外部贡献者持续参与（如bunnysayzz提交的广告隐藏PR），体现了开放协作的健康生态。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-05

## 今日速览

- 过去24小时项目整体活跃度极低，仅有一条依赖更新 PR，无新 Issue、无版本发布、无代码合并。
- 全部社区活动集中在网站（/website）目录的 npm 依赖升级，由 dependabot 自动发起，属日常维护性质。
- 项目目前处于维护模式下的平稳期，无功能性开发动态，也未出现用户反馈或问题报告。
- 从健康度角度看，项目运行稳定但社区参与度偏低，核心链路暂无风险信号，但也缺少新的进展牵引力。

---

## 版本发布

**今日无新版本发布。**

过去24小时没有检测到任何 Release。项目自上一版本以来，仍处于功能迭代间歇期，无破坏性变更或迁移注意事项需要关注。

---

## 项目进展

**今日无 PR 被合并或关闭。**

唯一动态为一条待合并的依赖更新 PR，尚未对项目代码产生实际影响。从项目整体进度来看，今日没有推动任何功能开发、架构改进或缺陷修复，项目主代码库保持不变。

---

## 社区热点

**今日无高互动 Issues/PRs。**

过去24小时内唯一一条 PR（[#1184](https://github.com/moltis-org/moltis/pull/1184)）为 dependabot 自动生成，无评论、无点赞，未引发社区讨论。没有出现用户自发讨论或争议性话题，社区活跃度处于极低水平。

---

## Bug 与稳定性

**今日无新报告的 Bug、崩溃或回归问题。**

过去24小时内有 0 条 Issue 更新，无新增缺陷报告，也没有与稳定性相关的 PR 被提出或修复。项目当前没有已知的新引入问题浮出水面，稳定性状态保持静态。

---

## 功能请求与路线图信号

**今日无新功能请求。**

未检测到用户提出的新需求或路线图相关讨论。唯一新动态是对 `undici` 依赖的例行升级（7.28.0 → 7.29.0），属于安全/性能补丁级别，不携带新功能信号。**建议**：维护者可关注 [undici 7.29.0 的 Release Notes](https://github.com/nodejs/undici/releases) 确认是否包含与项目相关的修复，及时合并 [#1184](https://github.com/moltis-org/moltis/pull/1184)。

---

## 用户反馈摘要

**今日无用户反馈可供提炼。**

由于没有新 Issue 或 PR 评论产生，无法从用户角度获取痛点、使用场景或满意度信息。此状态持续意味着社区反馈渠道处于静默期，可能需要主动触达用户来保持需求收集的畅通。

---

## 待处理积压

| 项目 | 类型 | 创建日期 | 等待时长 | 说明 |
|------|------|----------|----------|------|
| [#1184](https://github.com/moltis-org/moltis/pull/1184) | 依赖更新 PR | 2026-08-04 | < 24小时 | dependabot 将网站依赖 `undici` 从 7.28.0 升级至 7.29.0，目前待维护者审批合并。延迟较低，属常规批量依赖维护，建议尽快处理以避免依赖版本滞后。 |

除该 PR 外，无其他长期未响应的 Issue 或 PR 积压。项目 backlog 保持干净，不存在遗留问题堆积的风险。

---

**总体评价**：Moltis 项目今日处于例行维护的低活跃状态，日常依赖管理和社区参与均无异常，但也没有实质性的功能推进。建议维护者在保持稳定运行的同时，关注社区沉寂的趋势，适时规划下一阶段的用户互动或功能发布节奏。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-08-05）

## 1. 今日速览

过去 24 小时 CoPaw 仓库维持高活跃：28 条 Issue 更新（17 条新开/活跃、11 条关闭），50 条 PR 更新（28 条待合并、22 条关闭），无新版本发布。核心进展集中在**会话时间戳/时区修复收尾、Scroll 压缩兼容性、CI/测试补强**三个方向，多条相关 PR 于今日关闭。与此同时，v2.1.0-beta.1 的桌面端回归成为最受关注的稳定性风险（Windows 下 Python 子进程崩溃、Browser SDK open() 失败），需优先处理。社区讨论热点为 GPT-5.6 缓存支持（#6649，13 评论）与 Console 通道审批提示不可达（#6655，12 评论）。

## 2. 版本发布

今日无新版本发布。上一 Beta 版本 v2.1.0-beta.1 的安装验证任务 [Issue #6656](https://github.com/agentscope-ai/QwenPaw/issues/6656) 已关闭，但随后在 Windows 桌面端出现两个回归问题（见 §5），发布验证覆盖面有待扩展至桌面端冒烟场景。

## 3. 项目进展

过去 24 小时有 22 条 PR 关闭（含合并），其中较重要的收尾/落地包括：

- **会话时间戳与本地时区显示**：三条相关 PR 同时关闭 —— [#6309 fix(chats): convert session timestamps across timezones](https://github.com/agentscope-ai/QwenPaw/pull/6309)、[#6685 fix(timestamp): improve timestamp handling](https://github.com/agentscope-ai/QwenPaw/pull/6685)、[#6618 fix(console): remove forced UTC timestamp normalization](https://github.com/agentscope-ai/QwenPaw/pull/6618)。至此，[#6301](https://github.com/agentscope-ai/QwenPaw/issues/6301) 所反映的“UTC 会话时间被当作本地时间显示”问题在前后端得到系统性修复。
- **Scroll 压缩与模型 API 兼容**：[#6628 fix(scroll): use SystemMsg for compressed memory placeholder](https://github.com/agentscope-ai/QwenPaw/pull/6628) 关闭。该修复将压缩占位符从 `role=user` 改为 `SystemMsg`，解决 DeepSeek 等 OpenAI 兼容 API 报 `Messages with role 'tool'...` HTTP 400 的问题。
- **CI / 测试体系补强**：[#6678](https://github.com/agentscope-ai/QwenPaw/pull/6678)、[#6679](https://github.com/agentscope-ai/QwenPaw/pull/6679)、[#6686](https://github.com/agentscope-ai/QwenPaw/pull/6686) 三条一起关闭，分别为集成测试安装 Playwright Chromium、对齐 `/import-local` 源目录守卫、修复 Chrome 契约不匹配并补全 p-tier 标记。PR 门禁的覆盖盲区被补齐。
- **Console 迭代上限同步**：[#6682 fix(console): sync legacy max_iters](https://github.com/agentscope-ai/QwenPaw/pull/6682) 关闭，修复 Loop Engineering 迁移后 `max_iters` 与 `loop.iteration.max_iterations` 不同步的配置问题。
- **安全加固收尾**：[#4267 feat(security): Mac OS file path white list](https://github.com/agentscope-ai/QwenPaw/pull/4267) 结束近三个月的 Review 状态后关闭，该 PR 为 shell 命令执行引入基于 `sandbox-exec` 的文件路径白名单预检机制（具体合并结果请以仓库 timeline 为准）。

## 4. 社区热点

| Issue | 评论数 | 热点诉求 |
|---|---|---|
| [#6649 支持 GPT-5.6 prompt caching 参数](https://github.com/agentscope-ai/QwenPaw/issues/6649) | 13 | 用户希望 provider 支持 `prompt_cache_key`/`prompt_cache_options`/`prompt_cache_breakpoint`，复用多轮对话缓存前缀，降低延迟与成本。 |
| [#6655 Console 通道不渲染安全审批提示](https://github.com/agentscope-ai/QwenPaw/issues/6655) | 12 | agent 执行 `del`/`rm` 时在 console 通道没有可见的审批入口，用户无感知，等待 300 秒后自动超时拒绝。该 Issue 今日已关闭。 |
| [#6643 任务产出物按任务建目录](https://github.com/agentscope-ai/QwenPaw/issues/6643) | 6 | 用户对 media 目录文件堆积不满，希望按任务隔离产出物。 |
| [#6667 DeepSeek thinking mode 多轮失败](https://github.com/agentscope-ai/QwenPaw/issues/6667) | 5 | 多轮对话后 `reasoning_content` 丢失，退避注入 `" "` 只对首次生效。 |
| [#6642 拖入文件直接读原路径](https://github.com/agentscope-ai/QwenPaw/issues/6642) | 5 | 用户认为拖入文件先上传复制的流程多余，且会在 media 目录产生额外文件。 |

社区讨论主要体现三类诉求：**对最新模型（GPT-5.6 / DeepSeek）的适配速度**、**非 Web UI 通道下的审批可用性**、**本地文件与目录管理的轻量化**。

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高危（新 Beta 版回归）

- **[#6697 v2.1.0b1 desktop 注入 PYTHONHOME 导致所有 python 子进程崩溃](https://github.com/agentscope-ai/QwenPaw/issues/6697)**（OPEN）：Tauri Desktop 在 Windows 下向子进程注入 PYTHONHOME，导致每次 `python` 子进程启动即报 `encodings ModuleNotFoundError`，影响所有依赖子进程的 Python 工具链。**暂无 fix PR。**
- **[#6698 v2.1.0b1 Browser SDK open() 在隔离 Playwright 会话下失败](https://github.com/agentscope-ai/QwenPaw/issues/6698)**（OPEN）：`session_status` 显示 `connected=True`，但每次 `open()` 都报 `WireProtocolError: Target crashed`。**暂无 fix PR。**

### 🟠 中高危（通道 / 审批可靠性）

- **[#6655 Console 通道安全审批提示不可达](https://github.com/agentscope-ai/QwenPaw/issues/6655)**（已关闭）：高优 UX 缺陷，今日关闭，待确认修复版本。
- **[#6695 仅使用微信通道时审批提示不可达](https://github.com/agentscope-ai/QwenPaw/issues/6695)**（OPEN）：与 #6655 同类，发生在 WeChat(iLink) 通道，5 分钟自动拒绝。**暂无 fix PR。**
- **[#6696 微信 iLink 一次性 context_token 被打字指示器消费](https://github.com/agentscope-ai/QwenPaw/issues/6696)**（OPEN）：`context_token` 被 typing indicator 消耗，导致回复被拒（ret=-2）且 “working” 指示器卡死。**暂无 fix PR。**
- **[#6667 DeepSeek thinking mode 多轮推理失败](https://github.com/agentscope-ai/QwenPaw/issues/6667)**（OPEN）：`reasoning_content` 在多轮后缺失，已有重试注入 `" "` 的 workaround 但只覆盖首次。**暂无 fix PR。**

### 🟡 中危

- **[#6690 cron pause/resume 不持久化 enabled 状态](https://github.com/agentscope-ai/QwenPaw/issues/6690)**（OPEN）：重启后 pause/resume 状态丢失，`cron list` 显示值不变。已有修复 PR [#6691](https://github.com/agentscope-ai/QwenPaw/pull/6691)（OPEN）。
- **[#6683 App Center 安装 qwenpaw-creator 失败：`utils` 不是 package](https://github.com/agentscope-ai/QwenPaw/issues/6683)**（OPEN）：插件顶层模块名与系统 `utils` 冲突。已有修复 PR [#6688](https://github.com/agentscope-ai/QwenPaw/pull/6688)（OPEN）。
- **[#6624 自动压缩（Scroll）未触发 summarize_when_compact](https://github.com/agentscope-ai/QwenPaw/issues/6624)**（OPEN）：手动 `/compact` 可触发，自动压缩不能。已有修复 PR [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629)（OPEN）。
- **[#6687 OpenRouter 多模态 probe 覆盖文档能力为 false](https://github.com/agentscope-ai/QwenPaw/issues/6687)**（OPEN）：显式测试把已读取到的多模态支持错误覆盖为不支持。**暂无 fix PR。**
- **[#6633 Skills/Skill Pool 页面在慢网络下加载失败](https://github.com/agentscope-ai/QwenPaw/issues/6633)**（已关闭）：`/api/skills` 返回未压缩的 MB 级内容，超过前端 30 秒超时。

### 🟢 低危 / 已解决

- **[#6374 token usage 持久化在瞬时写失败后不重试](https://github.com/agentscope-ai/QwenPaw/issues/6374)**（已关闭）：`_dirty` 在保存前被清除，瞬时 OSError 导致用量丢失。
- **[#5906 防重复功能异常触发](https://github.com/agentscope-ai/QwenPaw/issues/5906)**（已关闭）：正常对话被误判为 “Doom loop”。
- **[#6301 时间戳时区转换错误](https://github.com/agentscope-ai/QwenPaw/issues/6301)**（已关闭）：由今日关闭的三条 PR（#6309 / #6685 / #6618）修复。

## 6. 功能请求与路线图信号

- **[按需加载技能（On-Demand Skill Loading）— #6699](https://github.com/agentscope-ai/QwenPaw/issues/6699)**：27+ 技能的描述占用约 8k-10k tokens（系统提示词的 25-30%），用户希望按需注入。这是对长上下文场景影响较大的性能优化信号，具备纳入路线图的合理性。
- **[新增全局规则（类似 .agent / .claude）— #6694](https://github.com/agentscope-ai/QwenPaw/issues/6694)**：用户希望有置顶的全局 system prompt，避免部分提示词无法生效。属于配置层增强，实现成本较低。
- **[频道启动重试功能 — #6684](https://github.com/agentscope-ai/QwenPaw/issues/6684)**：Matrix 自建频道在服务启动竞争时失败后无自动重试，需手动重新保存。已有实现 PR [#6689](https://github.com/agentscope-ai/QwenPaw/pull/6689)（OPEN），大概率进入下一版本。
- **[GPT-5.6 prompt caching 参数支持 — #6649](https://github.com/agentscope-ai/QwenPaw/issues/6649)**：社区讨论热度最高的功能请求，涉及 provider 层参数透传，可能随 Responses API 适配工作一并推进。
- **[任务产出物按任务建目录 — #6643](https://github.com/agentscope-ai/QwenPaw/issues/6643)** / **[拖入文件直接读原路径 — #6642](https://github.com/agentscope-ai/QwenPaw/issues/6642)**：两个请求都指向 media 目录混乱这一共同痛点，且 #6642 已有关闭记录，说明维护者已关注文件处理链路，方向上有较大概率被采纳。
- **[免费模型限流处理 — #6674](https://github.com/agentscope-ai/QwenPaw/issues/6674)**：deepseek-v4-flash 免费档 429 频繁导致任务中断，用户希望内置退避/重试。属于模型提供商适配的常见需求。
- **[新增 Volcengine Agent Plan 与小米 MiMo Standard API provider — #6490](https://github.com/agentscope-ai/QwenPaw/issues/6490)**：国内云厂商接入，已有一周且评论 3 条，若维护者认可 provider 生态拓展方向，可纳入后续版本。

## 7. 用户反馈摘要

- **审批链路在非 Web UI 通道不可达**是多用户痛点（[#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655)、[#6695](https://github.com/agentscope-ai/QwenPaw/issues/6695)）：在 console 或纯微信通道下，用户看不到审批请求、agent 静默等待 300 秒后超时拒绝。用户期望所有通道都有等价的审批交互或转义方案。
- **media 目录混乱**被多次提及（[#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643)、[#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642)）：用户认为“先上传再读取”会复制多余文件，建议像多数桌面 Agent 一样直接读取原路径，并按任务生成独立输出目录。
- **Matrix 通道启动不稳定**（[#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684)）：qwenpaw 启动快于 Matrix 服务导致连接失败，用户希望内置重试与健康检测，否则每次重启都要手动改配置。
- **多模型工作流需求真实存在**（[#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455)）：用户希望在“文件修改、事实核验”等场景用多个模型分别独立跑一遍再汇总并集，说明部分用户已把 CoPaw 当作“模型路由/编排器”使用。
- **Beta 版桌面端回归让用户犹豫升级**（[#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697)、[#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698)）：反馈者在 v2.1.0-beta.1 上升级后遇到 Python 子进程和浏览器工具完全不可用，对预发布版本稳定性表示顾虑。
- **技能注入占用过高**（[#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699)）：有 27+ 技能的用户提到技能描述占系统提示词 25-30%，长对话很快触达上下文窗口上限，已经在影响实际任务。

## 8. 待处理积压

- **[#6455 希望一个 agent 同时使用多个模型（7/24 创建，OPEN）](https://github.com/agentscope-ai/QwenPaw/issues/6455)**：两周无维护者回应。该需求涉及执行编排与结果合并，属于较大改动，建议明确排期或给出暂缓说明。
- **[#6490 新增 Volcengine / Xiaomi MiMo providers（7/27 创建，OPEN）](https://github.com/agentscope-ai/QwenPaw/issues/6490)**：一周以上无回应。若项目当前不打算扩充 provider 列表，建议关闭或以 `help wanted` 标记。
- **PR [#6398 ReMe 记忆搜索 reranker 支持（7/23，Under Review）](https://github.com/agentscope-ai/QwenPaw/pull/6398)**：已在 Review 中超两周。reranker 对记忆检索质量有实际提升，属于较重要的功能 PR，建议尽快给出 Review 结论。
- **PR [#6331 指定 Node.js 版本要求（7/22，first-time-contributor）](https://github.com/agentscope-ai/QwenPaw/pull/6331)**：14 天未合并。改动很小且对本地构建有明确帮助，适合作为首次贡献者引导样例，建议维护者快速处理。
- **PR [#6492 保留上传文件名（7/27，OPEN）](https://github.com/agentscope-ai/QwenPaw/pull/6492)**：9 天未合并。与 [#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642)、[#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) 的用户诉求同属文件处理体验优化，建议与相关 Issue 合并评估。
- **流程信号：v2.1.0-beta.1 发布验证已关闭（[#6656](https://github.com/agentscope-ai/QwenPaw/issues/6656)），但同一版本在 Windows 桌面端被报告 [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697)、[#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) 两个回归**。建议在 Release Duty 的验证清单中加入 Windows 桌面端 Python 子进程与 Browser SDK 冒烟用例，避免 Beta 版带病发布。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-05

> 数据窗口：过去 24 小时（2026-08-04 → 2026-08-05）｜数据来源：github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览

- 过去 24 小时 **50 条 Issue 更新**（新开/活跃 48，关闭 2）、**50 条 PR 更新**（待合并 48，合并/关闭 2），讨论量维持高位，但**合并吞吐显著低于讨论吞吐**，评审/作者响应是当前主要瓶颈。
- **无新版本发布**，项目正处于密集的 RFC 评审与安全加固窗口期；绝大多数 PR 仍处于 `needs-author-action` 等待作者跟进状态。
- 社区讨论集中在三条主线：**协议互操作**（OpenAI Chat Completions 兼容）、**运行时安全边界**（webhook fail-closed、工具权限分层、工作区路径策略）、**会话/内存所有权模型**（多 agent 数据隔离）。
- 两个 **S0 级安全缺陷**仍在处理中：gateway webhook 未鉴权即放行消息（#9565），以及知识图/会话工具缺少 per-agent 归属（#9647/#9646），尚无对应修复 PR 合入。
- 综合健康度：**社区活跃、安全意识强、功能管线丰富**，但交付端存在明显的待合并积压（48 条 PR pending），建议维护者优先推进安全类 PR 的合并。

---

## 2. 版本发布

今日无新版本发布，此部分省略。

---

## 3. 项目进展

今日关闭/合并仅各 2 条，快照未逐条列出合并明细，可确认的进展如下：

- **Issue #8568（MoA 虚拟模型提供商）已关闭**（[zeroclaw-labs/zeroclaw Issue #8568](zeroclaw-labs/zeroclaw Issue #8568)）：该 RFC 提议新增 Mixture-of-Agents 虚拟模型，先并行运行多个参考模型、再由聚合模型汇总。关闭原因待查，但需维护者明确结论是"接受、合并到其他 RFC"还是"暂缓"，以避免同类提案重复提交。
- 48 条 PR 仍在待合并队列，其中**具备明显收尾价值的 PR** 包括：
  - **#9324**（feat(a2a)）：A2A 外呼客户端 Phase 1，已实现 4 个 `a2a_*` 工具、共享 v1.0 Serde 线模型与默认关闭的 `[a2a.client]` 配置（[zeroclaw-labs/zeroclaw PR #9324](zeroclaw-labs/zeroclaw PR #9324)），是通往 #9106 落地的关键一步。
  - **#9362**（fix(browser)）：修复浏览器工具截图任意文件写入逃逸，补齐 `is_path_allowed`/`resolve_tool_path` 校验（[zeroclaw-labs/zeroclaw PR #9362](zeroclaw-labs/zeroclaw PR #9362)），属安全修复，建议优先合入。
  - **#9320**（fix(cron)）：为 cron 任务增加墙钟超时并释放 SQLite 锁（[zeroclaw-labs/zeroclaw PR #9320](zeroclaw-labs/zeroclaw PR #9320)），解决"挂起任务永久持锁"问题。
  - **#9723**（fix(tool-call-parser)）：支持 DeepSeek DSML 与 `<|tool_call|>` 信封解析（[zeroclaw-labs/zeroclaw PR #9723](zeroclaw-labs/zeroclaw PR #9723)），直接修复 DeepSeek 系模型的工具调用兼容性。
  - **#9224 / #9214**（feat(eval)）：评估子系统新增 `pass@k` / `pass^k` 重复运行、误差棒和沙箱 live 执行模式（[PR #9224](zeroclaw-labs/zeroclaw PR #9224)、[PR #9214](zeroclaw-labs/zeroclaw PR #9214)），对应 #7065 的路线图承诺。

**小结**：功能管线丰富（A2A、eval 增强、DeepSeek 解析、安全加固批量就绪），但整体推进速度受制于"作者未响应 + 维护者未决策"双重阻塞。

---

## 4. 社区热点

| 排名 | Issue/PR | 评论数 | 主题 |
|---|---|---|---|
| 1 | [#8603 RFC: ZeroClaw Chat Completions profile](zeroclaw-labs/zeroclaw Issue #8603) | 16 | OpenAI 兼容 API |
| 2 | [#8303 RFC: Goal mode v1](zeroclaw-labs/zeroclaw Issue #8303) | 14 | 有界多轮目标执行 |
| 3 | [#7155 RFC: 高风险命令确认分层](zeroclaw-labs/zeroclaw Issue #7155) | 13 | 工具权限 allow/ask/deny |
| 4 | [#9488 RFC: 统一附件架构](zeroclaw-labs/zeroclaw Issue #9488) | 12 | Web/频道附件 |
| 5 | [#8568 MoA 虚拟模型提供商（已关闭）](zeroclaw-labs/zeroclaw Issue #8568) | 10 | 多模型聚合 |
| 5 | [#6850 内存生命周期解耦](zeroclaw-labs/zeroclaw Issue #6850) | 10 | 内存治理 |
| 5 | [#9487 运行时会话与传输适配器](zeroclaw-labs/zeroclaw Issue #9487) | 10 | 会话所有权 |
| 5 | [#7141 可插拔入站认证](zeroclaw-labs/zeroclaw Issue #7141) | 10 | 身份与访问 |

**诉求分析**：

- **生态互操作是最大呼声**：#8603 的 16 条评论集中体现了用户"想用 Open WebUI / LobeChat / Continue.dev / Aider / LangChain / OpenAI SDK 直接接入 ZeroClaw"的强烈愿望。当前仅暴露 WebSocket、ACP、webhook 三套接口，成为外部生态采用的门槛。
- **安全分层是共性焦虑**：#7155 要求参考 Claude Code 的 `allow/ask/deny` 命令策略，且已从 shell 工具推广到全工具权限层（Revision 2）；#9488/#9487 则围绕"运行时拥有会话/附件所有权"重塑边界，反映社区对 agent 越权访问的担忧。
- **多轮目标执行被反复提及**：#8303 的 Goal mode 强调"跨多个 agent turn 持续有界目标"，说明单轮对话已无法满足真实工作流需求。
- **多模型编排是隐藏需求**：#8568 在关闭前仍获得 10 条评论，说明用户希望在不离开正常模型选择流程的情况下获得多模型交叉验证能力。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P0 / S0（数据丢失 / 安全风险）

- **[#9565] gateway webhook 处理器未 fail-closed（WhatsApp Cloud、Linq、WATI）**（[zeroclaw-labs/zeroclaw Issue #9565](zeroclaw-labs/zeroclaw Issue #9565)）
  - 已通过源码审查确认：三个入站 webhook 处理器在**未认证调用方**的情况下将攻击者可控消息分发给 agent。状态 `in-progress`，**暂无对应修复 PR**。
- **[#9647] 知识图无 per-agent 归属，任意 agent 可读/改其他 agent 的知识**（[zeroclaw-labs/zeroclaw Issue #9647](zeroclaw-labs/zeroclaw Issue #9647)）
  - `knowledge` 工具暴露单一全局共享知识图，S0 级数据安全风险。状态 `accepted + follow-up`，**暂无修复 PR**。
- **[#9646] 会话/频道读写工具缺少 per-agent 所有权隔离**（[zeroclaw-labs/zeroclaw Issue #9646](zeroclaw-labs/zeroclaw Issue #9646)）
  - `sessions_list/history/send`、`discord_search` 等工具直接信任模型参数中的 `session_id`/`channel_id`，任意 agent 可越权访问其他 agent 的会话。状态 `accepted + follow-up`，**暂无修复 PR**。

### 🟠 P1 / 高危（已有修复 PR，但未合入）

- **#9362** 浏览器工具 `screenshot` 任意文件写入逃逸（[PR](zeroclaw-labs/zeroclaw PR #9362)）— 待合入。
- **#9320** cron 任务挂起导致 SQLite 作业锁永久占用（[PR](zeroclaw-labs/zeroclaw PR #9320)）— 待合入。
- **#9313** WeChat 频道同步游标在消息入队前持久化，崩溃窗口内丢消息（[PR](zeroclaw-labs/zeroclaw PR #9313)）— 待合入。
- **#9304** 兼容端点拒绝"工具+推理"请求时未降级重试（[PR](zeroclaw-labs/zeroclaw PR #9304)）— 待合入。
- **#9548** Codex CLI `extra_args` 可改变沙箱/审批边界但无告警（[PR](zeroclaw-labs/zeroclaw PR #9548)）— 待合入。
- **#9715** JSONL 会话迁移非原子，重试可能产生脏数据（[PR](zeroclaw-labs/zeroclaw PR #9715)）— 待合入。

### 🟡 P2 / 体验与兼容性

- **#9723** DeepSeek 系列工具调用原始信封文本直接展示给用户（[PR](zeroclaw-labs/zeroclaw PR #9723)）— 待合入。
- **#9477** Qwen2.5-Coder-32B 在 `<tools>` 声明包裹下生成的调用无法恢复（[PR](zeroclaw-labs/zeroclaw PR #9477)）— 待合入。
- **#9504** 上下文耗尽结束 turn 时无终端提示，agent 表现为静默挂起（[PR](zeroclaw-labs/zeroclaw PR #9504)）— 待合入。
- **#9317** ZeroCode 长会话下瞬态帧渲染导致输入延迟增长（[PR](zeroclaw-labs/zeroclaw PR #9317)）— 待合入。

> ⚠️ 注意：以上修复 PR 全部处于 **pending** 状态（48 条待合并），**每日报告窗口内无任何安全 PR 完成合入**，S0 级缺陷的暴露窗口仍在持续。

---

## 6. 功能请求与路线图信号

- **OpenAI Chat Completions 兼容层（#8603）**（[链接](zeroclaw-labs/zeroclaw Issue #8603)）：若通过，将成为 ZeroClaw 对接 OpenAI 生态（SDK、Open WebUI、LangChain、Aider 等）的"标准入海口"，是当前呼声最高的功能，**大概率进入下一版本规划**。
- **A2A 外呼客户端（#9106 → PR #9324）**：Phase 1 代码已就绪（4 个工具 + 共享线模型 + 默认关闭配置），**最接近落地的功能 PR**，只待评审结论。
- **Goal mode v1（#8303）**：多轮有界目标执行，属控制面能力升级，讨论充分但实现边界仍在收敛，短期进入版本的可能性中等。
- **评估子系统 live 模式（#9224 / #9214）**：重复运行统计 + 沙箱真实执行，表明测试基建投入持续，与 #7065 路线图一致。
- **MoA 虚拟模型提供商（#8568）**：已关闭，需维护者给出明确结论；若为"暂缓"，建议在 #8692 决策队列中留痕，避免社区重复提案。
- **其他候选需求**：统一附件架构（#9488）、运行时会话所有权（#9487）、插件 Kanban（#8832）、Rust→Wasm 重写 Web UI（#8132）、cron 前置条件门（#5607）。

**判断**：下一版本最可能纳入的将是 **A2A Phase 1 + 一批安全修复（browser/wechat/cron/config）+ DeepSeek/Qwen 解析修复**；#8603 若进入 RFC 表决并快速通过，则可能成为下一个里程碑的旗舰功能。

---

## 7. 用户反馈摘要

- **互操作是采纳门槛**：#8603 的讨论中，用户明确表示"无法用 OpenAI SDK/LangChain 接入"是外部团队评估 ZeroClaw 时的最大障碍；现有 WebSocket/ACP/webhook 方案被评价为"各自为政、学习成本高"。
- **安全信任敏感度极高**：#9565 的反馈直指"未鉴权 webhook 即可注入消息"属于不可接受的基础安全缺陷；#7155 的讨论则显示用户期望获得 Claude Code 级别的命令审批体验（`allow/ask/deny`），而不是粗粒度全允许/全拒绝。
- **上下文与用量信息不透明**：#7100 指出 provider 族默认值可能误报视觉支持、未设置的 alias 上下文窗口静默回退 32K；#9504 相关反馈则是"turn 结束时无任何提示，看起来像卡死"，影响真实使用信心。
- **模型兼容性痛点真实存在**：（#9723/#9477）DeepSeek 与 Qwen 系模型的非标准 tool-call 格式导致"原始标签文本直接展示给用户"，说明 ZeroClaw 的解析层需要跟上国产模型生态的实际输出格式。
- **多 agent 数据隔离是明确诉求**：#9647/#9646 的反馈表明，用户把"知识图/会话跨 agent 互见"视为 S0 数据安全事故，而非普通功能缺陷——这直接关系到 ZeroClaw 作为多 agent 运行时是否可信。

---

## 8. 待处理积压

### ⏳ 长期未决 Issue（需维护者决策）

- **[#5607] cron 作业前置条件门（2026-04-10 创建）**（[链接](zeroclaw-labs/zeroclaw Issue #5607)）：已 `accepted` 且 `no-stale`，但近 4 个月无落地 PR，社区等待时间最长。
- **[#6653] 模拟安装的宿主架构策略（2026-05-14）**（[链接](zeroclaw-labs/zeroclaw Issue #6653)）：`needs-author-action`，建议作者尽快更新方案。
- **安全 RFC 积压群**：`#6850`、`#6971`、`#6996`、`#7141`、`#7142`、`#7155`、`#8424`、`#8398`（均属 5–6 月提交的安全/架构类 RFC），多数标记 `needs-maintainer-review` 或 `needs-author-action`——这些是决定 v0.9.0 安全架构的核心提案，建议维护者集中一次性评审，避免逐个拖沓。

### 📌 维护者决策队列

- **[#8692] RFC 与设计问题维护者决策 tracker**（[链接](zeroclaw-labs/zeroclaw Issue #8692)）：作为官方决策队列，当前已积累大量 `needs-maintainer-review` 条目，其本身的状态即可视为项目治理健康度的晴雨表。

### 📦 PR 合并积压（48 条 pending）

- 大量 PR 标记 `needs-author-action`，点名提醒以下作者尽快响应维护者意见，否则将阻塞关键修复合入：
  - **安全类（建议优先）**：#9362（browser 文件写入）、#9548（Codex CLI 告警）、#9715（迁移原子性）、#9304（推理降级重试）
  - **功能类**：#9324（A2A Phase 1）、#9224 / #9214（eval live 模式）
  - **兼容性修复**：#9723（DeepSeek）、#9477（Qwen `<tools>` 包裹）
  - **长期滞留**：#6622（WhatsApp LID allowlist 测试，2026-05-13 创建，维护者已代为刷新分支，等待最终评审）

---

**报告总结**：ZeroClaw 正处于"高讨论、低合并"的阶段——社区对协议兼容、安全分层、多轮目标执行有清晰且强烈的诉求，3 个 S0 级安全缺陷和 48 条待合并 PR 是当前最需要维护者投入的资源点。建议下个工作日优先处理：#9565 的修复方案评审、#9362/#9320 安全 PR 合入，以及 #8692 决策队列的集中清仓。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*