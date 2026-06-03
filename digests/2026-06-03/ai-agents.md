# OpenClaw 生态日报 2026-06-03

> Issues: 456 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-03 00:36 UTC

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

# OpenClaw 项目动态日报 | 2026-06-03

---

## 1. 今日速览

OpenClaw 今日维持**极高活跃度**：24 小时内 Issues 更新 **456 条**（新开/活跃 273，关闭 183），PR 更新 **500 条**（待合并 390，已合并/关闭 110），但**零版本发布**。社区讨论集中在**会话状态稳定性**（session-state）与**消息投递可靠性**（message-loss）两大主题，多个 P1 级回归 Bug 持续发酵。PR 队列积压严重（390 待合并），Jerry-Xin、amittell、vincentkoc 等核心贡献者密集输出修复，但"needs proof"状态 PR 占比高，代码审查瓶颈明显。整体健康度：**活跃但承压，稳定性债务累积**。

---

## 2. 版本发布

**无新版本发布**

> 距上次发布已有一段时间，社区对稳定版期待升高。多个 P1 回归 Bug（如 #88312 Codex 会话停滞、#86519 Telegram 重复回复）尚未通过版本渠道修复，用户被迫依赖源码或等待。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 作者 | 状态 | 核心贡献 |
|:---|:---|:---|:---|
| [#89601](https://github.com/openclaw/openclaw/pull/89601) | codezz | **已合并** 🚀 | **修复出站消息被轮询修饰符阻塞**：`hasPollCreationParams` 误判导致非轮询消息发送失败，直接影响 Telegram/Discord 等渠道的消息投递可靠性 |
| [#71203](https://github.com/openclaw/openclaw/pull/71203) | FtlC-ian | **已关闭** | 启动时预热 `models.json` 缓存，减少首次调用延迟；因证明不足关闭 |

### 关键推进方向

- **消息投递可靠性**：amittell、Jerry-Xin 主导系列修复（#89590 插件审批回源、#88992 工具回复恢复、#89045 终端状态恢复），系统性解决"消息静默丢失"顽疾
- **会话状态持久化**：#82572 跟进队列持久化（跨网关重启不丢消息），#89643 插件扩展状态保护
- **TTS 体验优化**：#78172 跳过 emoji 符号朗读，#83988 消除 final 模式 TTS 文本抖动

> **整体评估**：修复密度高，但多为"打补丁"式应急，架构级重构（如 #88838 SQLite 迁移）仍处规划阶段。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 🔥1 | #52875 Session_send 返回 "no session found" — 升级后代理间通信断裂 | 21 | **跨代理会话发现机制在 2026-3-22 升级后失效**，cron 会话污染会话列表，核心代理无法定位目标会话 | [链接](https://github.com/openclaw/openclaw/issues/52875) |
| 🔥2 | #88838 核心会话/转录 SQLite 迁移追踪（accessor seam）| 17 | **要求分阶段低风险迁移**，拒绝"大爆炸式重写"，维护者 jalehman 推动架构纪律 | [链接](https://github.com/openclaw/openclaw/issues/88838) |
| 🔥3 | #63918 Cron agentTurn 向 gpt-5-nano 发送非法 thinking=none | 17 | **OpenAI 新模型兼容性**：模型能力变更（thinking 参数约束）未同步至 cron 执行路径 | [链接](https://github.com/openclaw/openclaw/issues/63918) |
| 🔥4 | #67035 Windows 聊天 UI 严重回归：输入吞字、流式回复不可见 | 14 | **桌面端体验崩溃**，影响 Windows 主力用户群体，标记"platinum hermit"高价值但难复现 | [链接](https://github.com/openclaw/openclaw/issues/67035) |
| 🔥5 | #39604 允许 web_fetch 访问私有网络（安全可控）| 13 👍9 | **企业内网场景刚需**，高赞反映社区对"安全地打破沙箱"的共识需求 | [链接](https://github.com/openclaw/openclaw/issues/39604) |

### 背后诉求分析

- **#52875 vs #88838**：表面是会话 Bug，深层是**文件型会话存储（sessions.json）的架构极限**——无索引、无清理、竞争写入，社区迫切要求 SQLite 迁移落地
- **#39604 高赞**：开发者场景从"公网 API 调用"扩展到"企业内网 Agent 编排"，网络策略需更精细

---

## 5. Bug 与稳定性

### P1 级（生产影响/数据丢失）

| Issue | 症状 | 回归？ | Fix PR 状态 | 链接 |
|:---|:---|:---:|:---|:---|
| #88312 Codex app-server 回合完成停滞 | "Codex stopped before confirming turn complete"，多工具调用中断 | ✅ 是，#84076 修复后复发 | **无**，clawsweeper 标记 needs-live-repro | [链接](https://github.com/openclaw/openclaw/issues/88312) |
| #67035 Windows UI 输入吞字、流式渲染失败 | 输入框失步、回复需刷新才可见 | ✅ 2026.4.14 引入 | **无**，needs-live-repro | [链接](https://github.com/openclaw/openclaw/issues/67035) |
| #86519 Telegram 重复回复 2-10x | 升级 5.20 后消息泛滥，5.22 部分缓解未根治 | ✅ 是 | **无**，needs-info | [链接](https://github.com/openclaw/openclaw/issues/86519) |
| #55334 sessions.json 无限增长致网关 OOM | skillsSnapshot 每会话重复存储，无清理 | ❌ 长期缺陷 | **无**，linked-pr-open 但未指明 | [链接](https://github.com/openclaw/openclaw/issues/55334) |
| #52249 ACP 父会话等待子完成时卡死 | 需手动刷新 UI 恢复，transcript 检查逻辑缺陷 | ❌ 架构问题 | **无** | [链接](https://github.com/openclaw/openclaw/issues/52249) |
| #86047 Codex 插件审批停滞致工具超时 | Nextcloud Talk 场景，5.22 升级后退化 | ✅ 是 | **无** | [链接](https://github.com/openclaw/openclaw/issues/86047) |
| #80715 Slack 回复静默丢弃 | 转录显示成功，实际未调用 postMessage | ❌ | **无**，linked-pr-open | [链接](https://github.com/openclaw/openclaw/issues/80715) |
| #88369 隔离 cron 仍自冲突 EmbeddedAttemptSessionTakeoverError | 专用 cron 代理+隔离配置无效 | ✅ 5.28-beta.3 | **无** | [链接](https://github.com/openclaw/openclaw/issues/88369) |

### P2 级

| Issue | 关键标签 | 链接 |
|:---|:---|:---|
| #52875 会话发现失败 | `regression`, `impact:session-state`, `impact:message-loss` | [链接](https://github.com/openclaw/openclaw/issues/52875) |
| #63918 gpt-5-nano thinking 参数不兼容 | `impact:auth-provider`（模型配置） | [链接](https://github.com/openclaw/openclaw/issues/63918) |
| #88788 GHCR 镜像配置 schema 过期 | `regression`, Discord 进度评论功能失效 | [链接](https://github.com/openclaw/openclaw/issues/88788) |

> **稳定性警示**：P1 级回归 Bug 中 **60% 为"修复后再发"**（#88312、#86519、#86047），表明测试覆盖不足，特别是 Codex 集成路径和 Windows 桌面端。

---

## 6. 功能请求与路线图信号

| Issue/PR | 需求 | 纳入可能性 | 信号强度 | 链接 |
|:---|:---|:---|:---:|:---|
| #88838 SQLite 会话/转录迁移 | 架构级重构，分阶段 PR | **高** — jalehman 主导，维护者背书，已开追踪 | ⭐⭐⭐⭐⭐ | [链接](https://github.com/openclaw/openclaw/issues/88838) |
| #39604 私有网络访问控制 | `tools.web.fetch.allowPrivateNetwork` 布尔开关 | **中高** — 高赞（9👍）、安全审查标签已打，PR 形态清晰 | ⭐⭐⭐⭐☆ | [链接](https://github.com/openclaw/openclaw/issues/39604) |
| #81061 入站消息预路由 Hook | `before_route_inbound_message` | **中** — 架构合理但需维护者决策，无 PR | ⭐⭐⭐☆☆ | [链接](https://github.com/openclaw/openclaw/issues/81061) |
| #76159 Per-job acceptSilentStop | 静默停止视为成功（无输出 cron 任务） | **中** — 场景明确，影响监控/告警语义 | ⭐⭐⭐☆☆ | [链接](https://github.com/openclaw/openclaw/issues/76159) |
| #84216 最近会话下拉折叠 | UI 空间优化 | **低-中** — P3 增强，PR 未现 | ⭐⭐☆☆☆ | [链接](https://github.com/openclaw/openclaw/issues/84216) |
| #89516 操作者安装策略（安全） | 技能/插件安装前策略校验 | **观察中** — XL 大型 PR，涉及安全边界，审查周期长 | ⭐⭐⭐☆☆ | [链接](https://github.com/openclaw/openclaw/pull/89516) |

---

## 7. 用户反馈摘要

### 真实痛点（引自 Issue 评论）

> *"after upgrading to 2026-3-22 my main agent is not able to contact other agents"* — #52875 najef1979-code
> 
> **跨代理通信是核心工作流**，升级即断裂，用户被迫回滚或手动管理会话。

> *"The bot connects and receives messages... but fails to dispatch"* — #87646 leo-afk-sudo（已关闭，但 #88234 同问题 reopen）
> 
> **飞书渠道反复出现 `TypeError: Cannot read properties of undefined (reading 'run')`**，企业用户部署信心受挫。

> *"Slack channel and DM replies composed by the runtime are silently dropped... This pattern has now hit me **twice this week**"* — #80715 cblustein-cpu
> 
> **"静默丢弃"比崩溃更危险**——用户无法区分"无回复"与"系统故障"，调试成本极高。

> *"sessions.json accumulating entries that are never pruned... ~50-100 MB/min"* — #55334 lisaage
> 
> **长期运行即崩溃**，网关 OOM 直接影响可用性，运维负担重。

### 满意度信号

- **Realtime Talk 获正面评价**：#76952 *"genuinely useful and low-latency"* — 但文档不足、移动端支持缺失
- **多平台覆盖受认可**：Telegram、Discord、Slack、飞书、QQ、Google Chat 等渠道活跃维护

---

## 8. 待处理积压

### 长期未响应的高价值 Issue

| Issue | 创建日期 | 天数 | 状态 | 风险 | 链接 |
|:---|:---|:---:|:---|:---|:---|
| #52875 Session_send 无会话发现 | 2026-03-23 | **72 天** | OPEN, stale, P2 | 🔴 **核心功能退化**，用户工作流中断 | [链接](https://github.com/openclaw/openclaw/issues/52875) |
| #55334 sessions.json OOM | 2026-03-26 | **69 天** | OPEN, P1 | 🔴 **生产稳定性威胁**，内存泄漏 | [链接](https://github.com/openclaw/openclaw/issues/55334) |
| #52249 ACP 父会话卡死 | 2026-03-22 | **73 天** | OPEN, P1 | 🔴 **多代理编排核心缺陷** | [链接](https://github.com/openclaw/openclaw/issues/52249) |
| #41199 代理间通信工具参数冲突 | 2026-03-09 | **86 天** | OPEN, P1, linked-pr-open | 🟡 LLM 调用可靠性，PR 待推进 | [链接](https://github.com/openclaw/openclaw/issues/41199) |
| #39604 私有网络访问 | 2026-03-08 | **87 天** | OPEN, P2, 9👍 | 🟡 企业场景刚需，安全审查 pending | [链接](https://github.com/openclaw/openclaw/issues/39604) |
| #77136 WebChat 部分消息不渲染 | 2026-05-04 | **30 天** | OPEN, stale, P2 | 🟡 TUI 正常=数据层完好，前端渲染 Bug | [链接](https://github.com/openclaw/openclaw/issues/77136) |

### 维护者行动建议

1. **优先闭环 P1 回归**：#88312、#86519、#86047 需 live repro 资源投入，或基于现有日志强制推进修复
2. **加速 SQLite 迁移决策**：#88838 是根治 sessions.json 系列问题的唯一路径，需产品/架构双确认
3. **清理"幽灵 PR"**：#41199 等 linked-pr-open 状态需核实关联 PR 是否仍有效，避免信息腐烂

---

*日报生成时间：2026-06-03 | 数据来源：openclaw/openclaw GitHub 公开活动*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告
**分析日期：2026-06-03 | 数据来源：GitHub 公开活动**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**"从功能竞赛转向可靠性攻坚"**的关键转折期。头部项目（OpenClaw、ZeroClaw、IronClaw）日均 Issues/PR 处理量突破 50+，但社区讨论主题已从"新增渠道/模型"转向会话状态稳定性、消息投递可靠性、安全策略硬化等生产级诉求。国产模型适配（DeepSeek-V4、Kimi、MiniMax-M3、Qwen3.6）成为跨项目共性刚需，MCP 协议标准化与 OAuth 凭证生命周期管理构成企业集成的新基础设施层。与此同时，终端体验（TUI/桌面端/WebUI）成为差异化焦点，zerocode、WebChat、Artifacts 等交互形态并行演进。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 待合并 PR | 版本发布 | 健康度评估 |
|:---|:---:|:---:|:---:|:---|:---|
| **OpenClaw** | 456 (新开/活跃 273, 关闭 183) | 500 (待合并 390, 已合并/关闭 110) | 390 | ❌ 无 | ⚠️ **活跃但承压** — 审查瓶颈严重，P1 回归 Bug 60% 为"修复后再发"，稳定性债务累积 |
| **NanoBot** | 10 (活跃 7, 关闭 3) | 28 (待审 10, 已合并/关闭 18) | 10 | ❌ 无 | 🟢 **质量夯实期** — 功能成熟期聚焦边缘兼容性与现代工具链适配 (uv) |
| **Hermes Agent** | 50 (新开/活跃 44, 关闭 6) | 50 (待合并 37, 已合并/关闭 13) | 37 | ❌ 无 | ⚠️ **B-** — P1 密度异常高（安全漏洞+数据损坏+无限循环），修复速度 < 新问题产生速度 |
| **PicoClaw** | 3 | 14 (待合并 9, 已合并/关闭 5) | 9 | ✅ v0.2.9-nightly | 🟢 **稳定推进** — 3 个高/中严重度问题已修复，v0.2.9 正式版条件成熟 |
| **NanoClaw** | 1 (垃圾信息) | 7 (待合并 3, 已合并/关闭 4) | 3 | ❌ 无 | 🟡 **维护期冷清** — 零社区互动，审查瓶颈（#2187 滞留 31 天），插件系统 (#1193) 为唯一亮点 |
| **NullClaw** | 1 | 1 (待合并 1) | 1 | ❌ 无 | 🟡 **极简维护** — 单一 PII 脱敏修复，社区参与度极低 |
| **IronClaw** | 29 (活跃/新开 27, 关闭 2) | 50 (待合并 19, 已合并/关闭 31) | 19 | ❌ 无 | 🟢 **快速迭代** — 合并吞吐量 > 关闭率，Reborn 架构审计系统化推进，但 E2E 连续 7 天失败为纪律红灯 |
| **LobsterAI** | 0 | 50 (待合并 3, 已合并/关闭 47) | 3 | ❌ 无 | 🟡 **工程活跃，社区静默** — 47 PR 批量处理但零 Issues/评论，内部迭代为主 |
| **CoPaw** | 48 (新开/活跃 26, 关闭 22) | 32 (待合并 23, 已合并/关闭 9) | 23 | ❌ 无 (v1.1.11b1 已合并) | ⚠️ **安全事件驱动峰值** — 7 漏洞/24h，AgentScope 2.0 迁移启动，P0 Bug (#4666) 9 天未修 |
| **ZeroClaw** | 49 (活跃/新开 34, 关闭 15) | 50 (待合并 33, 已合并/关闭 17) | 33 | ✅ v0.8.0-beta-2 | 🟢 **战略里程碑期** — zerocode TUI 发布，多 Agent 运行时落地，配置一致性为 Stable 阻塞项 |
| **TinyClaw** | — | — | — | — | ⚫ **无活动** |
| **Moltis** | — | — | — | — | ⚫ **无活动** |
| **ZeptoClaw** | — | — | — | — | ⚫ **无活动** |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | **绝对领先**：Issues 456 / PR 500 = 生态总量级 2-10 倍于次席 | ZeroClaw/IronClaw/CoPaw 约 50/50，NanoBot/PicoClaw 量级 10-30 |
| **技术路线** | **"全渠道覆盖 + 文件型存储"的务实扩展路径** | ZeroClaw 走 Rust/终端原生 + ACP 协议；IronClaw 押注 Reborn 安全沙箱；NanoBot 深耕 MCP 生态 |
| **核心优势** | ① 渠道矩阵最广（Telegram/Discord/Slack/飞书/QQ/Google Chat/Nextcloud Talk 等 10+）<br>② Realtime Talk 低延迟语音获正面评价<br>③ 多平台覆盖受企业用户认可 | ZeroClaw 终端体验最优；IronClaw 企业 SaaS 集成最深（Notion/GSuite/Slack Reborn）；PicoClaw 嵌入式/硬件场景独特 |
| **结构性劣势** | ① **sessions.json 架构债务**：无索引、无清理、竞争写入，#55334 50-100 MB/min 增长致 OOM<br>② **审查瓶颈**：390 待合并 PR，"needs proof"占比高，核心修复延迟<br>③ **回归测试覆盖不足**：60% P1 为"修复后再发" | ZeroClaw/IronClaw 已采用 libSQL/SQLite 结构化存储；NanoBot 轻量级 RAG 记忆检索更现代 |
| **差异化风险** | 若 #88838 SQLite 迁移延迟，文件型存储将成为规模化天花板 | |

> **定位结论**：OpenClaw 是生态中**"渠道覆盖最广、用户基数最大、但架构债务最重"**的标杆项目，其演进方向（SQLite 迁移、会话状态持久化）将直接影响"文件型存储派" vs "结构化存储派"的技术路线之争。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫度 |
|:---|:---|:---|:---:|
| **国产模型适配** | ZeroClaw (#6059 DeepSeek-V4, #5600 Kimi)、LobsterAI (#2093 MiniMax-M3 图像输入)、IronClaw (#4334 Claude Opus 4.7/4.8 兼容, #4341-#4344 Qwen3.6-35B 缺陷)、CoPaw (#3985 DeepSeek reasoning_content) | reasoning/thinking mode 格式解析、temperature 参数兼容性、流式调用工具 400 错误 | 🔴 极高 |
| **MCP 协议生态** | NanoBot (#4168 会话随机终止, #1168 Notion 连接失败, #4166 子代理访问 MCP)、IronClaw (#4354 Hosted MCP 协商, #4343 MCP 确认但驱动失败)、NanoClaw (#2672 MCP 联合类型兼容) | 会话保活/自动重连、子代理工具能力、协议版本锁定、错误诊断透明度 | 🔴 极高 |
| **终端/桌面体验** | ZeroClaw (zerocode TUI)、CoPaw (#4666 配置丢失, #4919 browser_use 失败, #4893/#4894 Windows 文件上传)、Hermes Agent (#37549 滚动闪烁, #37718 macOS 语音权限)、PicoClaw (#2984 WebSocket 显式 turn 完成) | 跨平台一致性、权限引导、状态管理、配置持久化 | 🟡 高 |
| **安全策略硬化** | IronClaw (L1-L11 Reborn 审计, #4373 子代理安全门控)、ZeroClaw (#7063 工具白名单绕过, #6977 私有主机白名单)、CoPaw (YLChen-007 7 漏洞/24h)、NullClaw (#944 PII 脱敏误报) | 工具权限最小化、提示安全布线、凭证零化、PII 精确性 | 🟡 高 |
| **配置系统一致性** | ZeroClaw (#7117 CLI/Quickstart/zerocode/Web 跨表面一致)、Hermes Agent (#20510 Cloud Sync, #18733 Per-model 压缩阈值)、OpenClaw (#88838 架构级重构) | 多设备同步、按模型差异化策略、配置即代码 | 🟡 高 |
| **消息投递可靠性** | OpenClaw (#89590 插件审批回源, #88992 工具回复恢复, #89601 轮询修饰符阻塞)、NanoBot (#4006 孤立 tool result)、CoPaw (#4878 微信定时任务投递失败) | "静默丢弃"比崩溃更危险，需端到端确认机制 | 🔴 极高 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 全渠道 IM 机器人 + 多代理编排 | 中小企业/开发者（需快速部署多平台客服/助手） | Node.js/TypeScript，文件型存储（sessions.json），插件化扩展 |
| **NanoBot** | 轻量化长期记忆 + MCP 工具生态 | 个人开发者/技术爱好者（DIY 智能体） | Python，SQLite + 本地嵌入 RAG，uv 现代工具链 |
| **Hermes Agent** | 桌面端原生体验 + 上下文压缩 | 个人生产力用户（跨设备工作流） | Rust/Electron，UV 管理器托管依赖，Cloud Sync 待建 |
| **PicoClaw** | 嵌入式/硬件场景 + 协议标准化 | 硬件开发者/边缘计算（Sipeed 生态） | Go，Pico Protocol，WebSocket 状态机，容器化部署 |
| **NanoClaw** | 宿主端插件系统 + 容器安全 | 企业级部署（需隔离与扩展性） | TypeScript，Codex 运行时，WASM 容器，宿主钩子系统 |
| **IronClaw** | 企业 SaaS 集成 + Reborn 安全沙箱 | 企业 IT/合规团队（B 端商业化） | Rust，libSQL 结构化记录，ACP 协议，OAuth/MCP 标准化 |
| **LobsterAI** | 产品化 IM 管理 + 思考层级控制 | 终端产品用户（网易有道生态） | Electron，内部迭代为主，Artifacts/HTML 预览差异化 |
| **CoPaw** | 中国本土模型生态 + AgentScope 2.0 | 中文开发者/企业（阿里生态） | Python，AgentScope 框架，Tauri 桌面端，Yuanbao/微信深度集成 |
| **ZeroClaw** | 终端原生体验 + 多 Agent 分布式 | 开发者/运维（偏好 CLI/TUI） | Rust，Ratatui TUI，WIT 接口，气隙执行模式规划 |

---

## 6. 社区热度与成熟度

| 层级 | 项目 | 特征 | 阶段判断 |
|:---|:---|:---|:---|
| **🔥 快速迭代期** | IronClaw、ZeroClaw、CoPaw | 日均 50 PR+，战略里程碑密集（Reborn GA、zerocode、AgentScope 2.0），但质量门禁参差（E2E 失败、P0 Bug 滞留） | 功能冲刺向生产就绪过渡，需 2-4 周纪律整顿 |
| **🌡️ 活跃承压期** | OpenClaw、Hermes Agent | 高吞吐量但审查瓶颈/回归债务突出，社区对稳定版期待升高 | 架构重构窗口期，SQLite 迁移/Cloud Sync 为关键解压阀 |
| **🛠️ 质量夯实期** | NanoBot、PicoClaw | 合并节奏稳健，聚焦边缘兼容、资源泄漏、协议完整性 | 功能成熟期，适合企业评估采用 |
| **🔧 维护冷清期** | NanoClaw、NullClaw | 极低互动，审查延迟，垃圾信息未治理 | 社区活力危机，需激活或归档决策 |
| **⚫ 停滞观察期** | TinyClaw、Moltis、ZeptoClaw | 24h 零活动 | 项目健康度存疑，建议关注维护者动态 |

---

## 7. 值得关注的趋势信号

| 趋势 | 信号来源 | 对开发者的参考价值 |
|:---|:---|:---|
| **"推理内容卫生"成为 UX 基线** | ZeroClaw (#6040 `<think>` 泄漏)、OpenClaw、CoPaw (#3985 reasoning_content) | 模型能力演进（thinking mode）倒逼渠道层过滤机制，需在协议设计阶段预留 `reasoning_content` / `internal_monologue` 字段，避免事后打补丁 |
| **MCP 从"能连"到"可靠"的鸿沟** | NanoBot (#4168 随机断连)、IronClaw (#4343 确认但失败)、社区"Claude 侧正常，NanoBot 失败"反馈 | MCP 生态进入**运维成熟度**竞争，会话保活、健康检查、诊断工具将成为差异化能力，而非协议支持本身 |
| **配置系统成为"隐性架构"** | ZeroClaw (#7117 跨表面一致性)、Hermes Agent (#20510 Cloud Sync)、OpenClaw (#88838 迁移) | 多表面（CLI/TUI/Web/桌面）配置一致性是用户体验的**信任基础设施**，建议早期采用统一 schema + 版本化迁移策略 |
| **国产模型适配的"格式碎片化"** | DeepSeek-V4/Kimi/Qwen3.6/MiniMax-M3 各自 API 差异 | 提供商抽象层需从"参数透传"升级为"能力协商"（capability negotiation），避免每个新模型触发全量修复 |
| **安全从"功能"变为"架构"** | IronClaw L1-L11 审计、ZeroClaw 工具白名单绕过、CoPaw 红队测试 | AI 智能体的安全设计需前置到**协议层**（如 ACP 的 diff/反提案）和**运行时层**（如 Reborn 的 gate replay），而非依赖后期审计 |
| **"静默失败"比"显性崩溃"更危险** | OpenClaw (#80715 Slack 静默丢弃)、NanoBot (#4006 孤立 tool result)、Hermes Agent (#37689 无限循环) | 生产级系统需建立**端到端可观测性**（如 PicoClaw 社区自建的 trace viewer），消息投递需确认机制而非"发送即成功" |

---

*报告生成时间：2026-06-03 | 分析框架：活跃度-质量-架构-生态四维评估*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-06-03

> **项目**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)  
> **日期**: 2026-06-03  
> **分析窗口**: 过去 24 小时

---

## 1. 今日速览

NanoBot 今日保持**高活跃度开发节奏**：28 个 PR 更新（18 条已合并/关闭，10 条待审），10 条 Issues 更新（7 条活跃，3 条关闭）。项目核心引擎、WebUI、渠道扩展三大模块同步推进，无新版本发布。值得关注的是，**WebUI 成为今日最密集的迭代区域**（5 个已合并 PR），同时 MCP 生态的稳定性问题持续暴露，社区对子代理能力和自定义 provider 的需求显著上升。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR（18 条中的核心项）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#3990](https://github.com/HKUDS/nanobot/pull/3990) | chengyongru | **重构 Dream 机制**：以 `cron + process_direct` 替代旧版两阶段 Dream 类 | 简化长期记忆处理架构，降低维护成本 |
| [#4146](https://github.com/HKUDS/nanobot/pull/4146) | chengyongru | **新增 Napcat (QQ) 渠道**：OneBot v11 Forward WebSocket 支持私聊/群聊 | 拓展中文社交生态接入能力 |
| [#4162](https://github.com/HKUDS/nanobot/pull/4162) / [#4160](https://github.com/HKUDS/nanobot/pull/4160) | chengyongru / Pringlas | **邮件渠道支持文件附件**（两个竞争实现，最终 #4162 胜出） | 完成多渠道文件传输闭环 |
| [#4155](https://github.com/HKUDS/nanobot/pull/4155) | jiehaoZ | **修复 `read_file` 卸载循环**：豁免其通用 tool-result offloading | 解决大文件读取导致的无限循环崩溃 |
| [#4115](https://github.com/HKUDS/nanobot/pull/4115) | chengyongru | **WebUI 网关依赖拆分**：HTTP 路由从 WebSocketChannel 解耦 | 提升 WebUI 架构可测试性与可扩展性 |
| [#4157](https://github.com/HKUDS/nanobot/pull/4157) | chengyongru | **WebUI 启动请求超时绑定** | 防止永久挂起的 fetch 导致白屏 |
| [#4151](https://github.com/HKUDS/nanobot/pull/4151) | chengyongru | **Chats 分组按最近活动时间排序** | 修复 UX 逻辑缺陷 |
| [#4150](https://github.com/HKUDS/nanobot/pull/4150) | chengyongru | **WebUI 刷新后路由恢复**（hash 路由持久化） | 解决单页应用核心痛点 |
| [#4149](https://github.com/HKUDS/nanobot/pull/4149) | chengyongru | **复制回退机制**：Clipboard API 不可用时降级至 `execCommand` | 覆盖非安全上下文/嵌入式场景 |
| [#4109](https://github.com/HKUDS/nanobot/pull/4109) | gqcao | **轻量级 RAG 记忆检索**：本地嵌入实现 | 为长期记忆引入语义检索能力 |

**整体评估**: 今日合并内容覆盖**架构重构**（Dream）、**生态扩展**（QQ 渠道）、**稳定性加固**（read_file 循环、fetch 超时）、**UX 打磨**（路由/排序/复制）四个维度，项目处于**功能成熟期的质量夯实阶段**。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论数 | 核心诉求 | 热度分析 |
|:---|:---|:---|:---|
| [#4167](https://github.com/HKUDS/nanobot/issues/4167) | 2 | OpenAI 兼容 API（如 Agnes AI）不支持 `response_format` 导致图片生成失败 | **兼容性扩展诉求**：社区希望 `generate_image` 能优雅降级或跳过不支持的参数，而非硬失败。与 #4132 形成"自定义 provider + 参数兼容"的组合需求 |
| [#4006](https://github.com/HKUDS/nanobot/issues/4006) | 2 | PR #3984 修复后仍存在孤立 tool result 消息，违反 OpenAI/Anthropic 规范 | **规范合规性焦虑**：对话历史完整性是 LLM 交互的底层契约，该问题导致严格校验的 API 直接拒绝请求，影响生产可用性 |
| [#4158](https://github.com/HKUDS/nanobot/issues/4158) | 1 | `uv tool` 安装环境下 WebUI CLI App 的 pip 安装失败 | **现代 Python 工具链适配**：`uv` 作为新兴包管理器的采用率上升，项目需跟进其隔离环境特性。已有 PR #4164 和 #4159 竞争修复 |

**热点洞察**: 社区正从"功能有无"转向**边缘场景兼容**和**现代工具链适配**，标志着用户基数扩大、生产环境部署增多。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#4006](https://github.com/HKUDS/nanobot/issues/4006) | 对话历史存在**孤立 tool result**，违反 LLM 提供商规范，导致 API 拒绝请求 | ❌ **无 fix PR**，需紧急关注 |
| 🔴 **高** | [#4168](https://github.com/HKUDS/nanobot/issues/4168) | MCP server 随机时间后不可达，`Session terminated` 错误，仅重启可恢复 | ❌ **无 fix PR**，影响长时运行稳定性 |
| 🟡 **中** | [#4167](https://github.com/HKUDS/nanobot/issues/4167) | `response_format` 参数硬编码导致 OpenAI 兼容 API 调用失败 | 🔄 **关联 PR #4132**（自定义 provider 支持），但非专门修复 |
| 🟡 **中** | [#4158](https://github.com/HKUDS/nanobot/issues/4158) | `uv tool` 环境下 pip 模块不可用 | ✅ **已修复**：PR #4164（优雅降级至 `uv pip`）和 #4159（Auto Fixer）竞争，#4164 方案更优 |
| 🟡 **中** | [#4153](https://github.com/HKUDS/nanobot/issues/4153) / [#4155](https://github.com/HKUDS/nanobot/pull/4155) | `read_file` 卸载后无法恢复持久化的 tool results，且存在卸载循环 | ✅ **已修复**：#4155 合并，豁免 `read_file` 的通用 offloading |
| 🟢 **低** | [#4081](https://github.com/HKUDS/nanobot/issues/4081) | `MemoryStore.append_history` 并发写入分配重复 cursor | ✅ **已关闭**（无独立 PR，可能随其他变更修复） |

**稳定性评估**: 今日修复 2 个中等严重度 Bug，但 **2 个高严重度问题（#4006 孤立 tool result、#4168 MCP 会话终止）仍无修复方案**，是项目健康度的主要风险点。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 纳入可能性评估 | 依据 |
|:---|:---|:---|:---|
| **子代理访问 MCP 服务** | [#4166](https://github.com/HKUDS/nanobot/issues/4166) | ⭐⭐⭐⭐⭐ **高** | 架构层面合理诉求，`spawn()` 创建的子代理当前被剥夺 MCP 工具能力，限制多步骤任务分解。配置化开关设计降低侵入性 |
| **自定义图片生成 provider（Agnes AI 等）** | [#4132](https://github.com/HKUDS/nanobot/issues/4132) | ⭐⭐⭐⭐⭐ **高** | 与 #4167 形成组合需求，社区有明确配置提案（`tools.imageGeneration` 扩展），技术路径清晰 |
| **云平台一键部署（HF Spaces / ModelScope）** | [#4139](https://github.com/HKUDS/nanobot/pull/4139) | ⭐⭐⭐⭐☆ **中高** | PR 已提交（+851 行，9 个文件），提供零依赖抽象层，但需维护者评审平台协议设计的长期兼容性 |
| **缓存未命中输入 Token 成本优化** | [#4142](https://github.com/HKUDS/nanobot/issues/4142) | ⭐⭐⭐☆☆ **中** | DeepSeek v4 引发的社区讨论，但属于模型层策略而非 NanoBot 核心能力，可能转化为文档/配置建议 |

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 情绪 |
|:---|:---|:---|
| "用 nanobot 连接 Notion MCP 多次核查 API 无误仍失败，Claude 侧正常" | [#1168](https://github.com/HKUDS/nanobot/issues/1168) | 😤 **挫败** — MCP 生态的调试体验差，错误信息不透明 |
| "MCP server 随机断连必须重启整个 nanobot" | [#4168](https://github.com/HKUDS/nanobot/issues/4168) | 😤 **挫败** — 长时运行可靠性不足，无热恢复机制 |
| "子代理没有 MCP 工具，复杂任务无法分解执行" | [#4166](https://github.com/HKUDS/nanobot/issues/4166) | 😐 **受限** — 架构能力缺口 |
| "Agnes AI 等兼容 API 因一个不支持参数完全不可用" | [#4167](https://github.com/HKUDS/nanobot/issues/4167) | 😐 **受限** — 参数硬编码的兼容性傲慢 |

### 满意信号

- WebUI 近期密集迭代（路由恢复、排序、复制回退、超时绑定）反映**前端体验团队响应迅速**
- 邮件附件、QQ 渠道等新功能**扩展了实用场景边界**

---

## 8. 待处理积压

### 需维护者紧急关注

| 项目 | 时长 | 风险 | 行动建议 |
|:---|:---|:---|:---|
| [#4006](https://github.com/HKUDS/nanobot/issues/4006) 孤立 tool result | 创建 8 天，近 24h 活跃 | **API 合规性断裂**，生产环境被拒绝请求 | 指派核心引擎维护者，优先于 #3984 的后续修复 |
| [#1168](https://github.com/HKUDS/nanobot/issues/1168) Notion MCP 连接失败 | 创建 **97 天**，昨日仍有更新 | 长期悬置损害 MCP 生态信任 | 提供标准化 MCP 调试指南或诊断工具 |
| [#4168](https://github.com/HKUDS/nanobot/issues/4168) MCP 会话随机终止 | 创建 1 天 | 长时运行稳定性核心缺陷 | 纳入高优先级，需设计会话保活/自动重连机制 |

### 待审 PR 提醒

| PR | 时长 | 阻塞风险 |
|:---|:---|:---|
| [#4169](https://github.com/HKUDS/nanobot/pull/4169) 修复 `last_consolidated` 越界导致历史丢失 | 1 天 | 数据损坏类修复，建议快速评审 |
| [#4139](https://github.com/HKUDS/nanobot/pull/4139) 云平台部署层 | 2 天 | +851 行大 PR，需架构评审避免技术债务 |

---

> **日报生成时间**: 2026-06-03  
> **数据完整性声明**: 基于提供的 GitHub API 快照，评论数为 `undefined` 的 PR 未计入评论排序分析

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-06-03

---

## 1. 今日速览

Hermes Agent 今日保持**高活跃度**：24小时内产生 **50 条 Issue 更新**（44 条新开/活跃，6 条关闭）和 **50 条 PR 更新**（37 条待合并，13 条已合并/关闭），无新版本发布。社区聚焦**网关可靠性**与**桌面端体验修复**，多个 P1 级稳定性问题获得快速响应。值得关注的是，今日出现**安全候选报告**（API 错误信息未脱敏）和**确定性失败任务无限循环**等严重问题，维护团队正密集推进修复。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的关键 PR（13 条中的核心项）

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#37679** | Fearvox | **修复网关文件描述符泄漏** — 关闭 reconnect 失败时未释放的 ResponseStore 与 adapter 连接，解决 ~12 小时网关僵死问题（对应 Issue #37011） | [PR #37679](https://github.com/NousResearch/hermes-agent/pull/37679) |
| **#37660** | ethernet8023 | **重构 UV 管理路径** — 统一为单一路径 `$HERMES_HOME/bin/uv`，消除多路径解析链的复杂性和权限提升漏洞 | [PR #37660](https://github.com/NousResearch/hermes-agent/pull/37660) |
| **#37622** | OutThisLife | **修复安装器 PATH 污染问题** — 优先信任托管版 uv 而非 PATH 中可能冲突的 conda/Anaconda 版本 | [PR #37622](https://github.com/NousResearch/hermes-agent/pull/37622) |
| **#37691** | ethernet8023 | **修复 Linux Electron sandbox 权限** — 配置 `chrome-sandbox` 为 `root:root 4755`，解决 Linux 桌面端启动崩溃（salvage #37529） | [PR #37691](https://github.com/NousResearch/hermes-agent/pull/37691) |

**整体推进评估**：今日合并集中在**基础设施可靠性**（网关生命周期管理、安装器健壮性、桌面端沙箱），属于"还债型"修复，对长期运行稳定性有显著改善，但无面向终端用户的新功能交付。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| Issue | 评论 | 👍 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| **#20510** Cloud Sync for All Configurations | 5 | 9 | **跨设备配置同步** — 用户要求将 `~/.hermes/` 中的配置、profile、skill、session、memory 云端同步，是多设备工作流的核心痛点 | [Issue #20510](https://github.com/NousResearch/hermes-agent/issues/20510) |
| **#18733** Per-model compression threshold overrides | 5 | 3 | **精细化压缩策略** — 1M+ 上下文模型普及后，全局 `compression.threshold` 导致"该压的没压、不该压的乱压"，需按模型/提供商差异化配置 | [Issue #18733](https://github.com/NousResearch/hermes-agent/issues/18733) |
| **#7725** session_search hangs 5+ minutes | 4 | 0 | **搜索超时失效** — 升级后 `session_search` 绕过超时/取消机制长时间挂起，严重影响交互体验 | [Issue #7725](https://github.com/NousResearch/hermes-agent/issues/7725) |
| **#13260** HTTP 404 Code Assist entity not found | 4 | 0 | **Gemini Code Assist 集成故障** — Google 服务端实体找不到，可能是 API 变更或配置问题 | [Issue #13260](https://github.com/NousResearch/hermes-agent/issues/13260) |
| **#36934** /steer flagged as prompt injection by Opus 4.8 | 3 | 0 | **合法操作被误识别为攻击** — 工具通道与注入防御的架构性冲突，需重新设计 steer 投递机制 | [Issue #36934](https://github.com/NousResearch/hermes-agent/issues/36934) |

**诉求分析**：社区最强烈的呼声是**配置可移植性**（#20510，9👍）和**大模型时代的上下文管理精细化**（#18733）。两者均涉及架构层面调整，非短期可解决。

---

## 5. Bug 与稳定性

### 按严重程度排列的今日 Bug

| 优先级 | Issue | 描述 | 状态 | 是否有 Fix PR |
|:---|:---|:---|:---|:---|
| **P1** | **#37733** | **安全漏洞**：API 服务器向认证 HTTP 客户端转发未脱敏的提供商错误信息（CVSS 6.5 Medium） | 新报告 | ❌ **无** — 需紧急评估 |
| **P1** | **#37677** | **会话永久损坏**：>8000px 图片因像素尺寸检查缺失导致 Anthropic 非重试 400 错误，且历史记录无法恢复 | 新报告 | ❌ **无** — 与 #25837 重复，长期未修 |
| **P1** | **#37721** | **定时任务注册表被误删**：disk-cleanup 从 stale tracked.json 删除 `cron/jobs.json` | 新报告 | ❌ **无** |
| **P1** | **#37731** | **Windows 更新失败**：安装器尝试删除仍被占用 venv 导致"Access denied"，更新循环中断 | 新报告 | ❌ **无** |
| **P1** | **#37011** | ~~网关文件描述符泄漏 → 12h 僵死~~ | **已关闭** | ✅ **#37679 已合并** |
| **P2** | **#36934** | `/steer` 被高抗性模型误标为注入攻击 | 活跃 | ❌ **无** |
| **P2** | **#37662** | IPv6 优先导致 httpx/OpenAI SDK 无限挂起（happy-eyeballs 缺失） | 新报告 | ❌ **无** |
| **P2** | **#37689** | **确定性失败任务无限循环**：circuit-breaker 被 `recompute_ready` 自动复活，11 小时 5400+ 次 protocol_violation | 新报告 | ❌ **无** — 架构级缺陷 |
| **P2** | **#37399** | Desktop remote mode WebSocket Origin 校验拒绝非回环地址 | 新报告 | ✅ **#37747 待合并** |
| **P2** | **#37609** | 平台限制工具集切换假成功（PUT 返回 200 实际未持久化） | 新报告 | ❌ **无** |
| **P3** | **#37549** | 桌面端聊天记录滚动闪烁、位置丢失 | 新报告 | ❌ **无** |
| **P3** | **#37718** | macOS 语音聊天麦克风权限缺失（Helper/Setup 二进制未继承 entitlement） | 新报告 | ✅ **#37745 待合并** |

**稳定性评估**：今日 P1 级问题密度异常高，且**安全漏洞 + 数据损坏 + 无限循环**三类严重问题均无现成修复。网关 FD 泄漏虽已关闭，但同类问题（#37677 图片损坏、#37721 cron 删除）显示**资源生命周期管理**和**输入校验**存在系统性薄弱。

---

## 6. 功能请求与路线图信号

| Issue | 类型 | 纳入可能性分析 | 链接 |
|:---|:---|:---|:---|
| **#20510** Cloud Sync | 配置可移植性 | **高优先级信号** — 9👍 为今日最高，但涉及加密、冲突解决、存储后端，需架构 RFC | [Issue #20510](https://github.com/NousResearch/hermes-agent/issues/20510) |
| **#18733** Per-model compression | 性能优化 | **中等** — 技术方案清晰（配置层级扩展），但需协调多提供商阈值数据库 | [Issue #18733](https://github.com/NousResearch/hermes-agent/issues/18733) |
| **#37709** Strict-confinement snap | 分发渠道 | **低-中等** — 维护成本高，且已有 curl/uv 路径；社区贡献驱动可能性更高 | [Issue #37709](https://github.com/NousResearch/hermes-agent/issues/37709) |
| **#37719** Re-budget context compressor for routers | 动态适配 | **中等** — 与 #18733 相关，router 生态（OpenRouter 等）的碎片化使问题更紧迫 | [Issue #37719](https://github.com/NousResearch/hermes-agent/issues/37719) |
| **#37746** Bundle ALL deps into .hermes (incl git) | 安装可靠性 | **高** — 延续 #37660 的"托管依赖"思路，技术路径明确，用户痛点具体 | [Issue #37746](https://github.com/NousResearch/hermes-agent/issues/37746) |
| **#37663** Desktop → VPS 连接 | 部署灵活性 | **待观察** — 当前 Desktop 设计假设本地网关，remote-first 需产品决策 | [Issue #37663](https://github.com/NousResearch/hermes-agent/issues/37663) |

**路线图信号**：社区正从"功能丰富度"转向**可靠性、可移植性、精细化控制**。压缩策略（#18733/#37719）和配置同步（#20510）可能构成下一版本的核心主题。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 Issue | 情绪强度 |
|:---|:---|:---|
| **"升级即损坏"恐惧** — 每次升级后搜索挂起、会话损坏、更新循环，用户不敢更新 | #7725, #37677, #37522, #37731 | 🔴 高 |
| **多设备配置碎片化** — 笔记本/台式机/VPS 各一套配置，手动 rsync 易出错 | #20510, #37663 | 🟡 中高 |
| **错误信息误导性** — "更新成功"后弹出安装器、工具切换"成功"实际未生效、404 无上下文 | #37522, #37609, #13260 | 🟡 中 |
| **企业/远程部署受阻** — Tailscale/LAN 绑定被拒、VPS 连接无文档、OAuth 成功但运行时失败 | #37399, #37515, #37663 | 🟡 中 |

### 满意点

- 网关 FD 泄漏快速修复（#37011 → #37679 2 天内关闭）显示**基础设施问题响应速度提升**
- UV 管理路径简化（#37660）减少"安装玄学"

---

## 8. 待处理积压

### 需维护者关注的高价值/高风险项

| Issue/PR | 积压原因 | 建议行动 | 链接 |
|:---|:---|:---|:---|
| **#7725** session_search 挂起 | 创建于 4-11，多次更新无维护者响应，影响基础功能 | 分配 agent 组件负责人复现超时逻辑 | [Issue #7725](https://github.com/NousResearch/hermes-agent/issues/7725) |
| **#25837** / **#37677** 图片尺寸砖化会话 | **重复报告** — 5-14 首次报告，6-2 再次报告且标记 duplicate，但原 issue 无进展 | 合并跟踪并制定像素校验实施计划 | [Issue #25837](https://github.com/NousResearch/hermes-agent/issues/25837) / [Issue #37677](https://github.com/NousResearch/hermes-agent/issues/37677) |
| **#18733** Per-model compression | 技术方案明确但 5-2 创建后无 PR，1M+ 上下文模型已普及 | 标记 good-first-issue 或纳入里程碑 | [Issue #18733](https://github.com/NousResearch/hermes-agent/issues/18733) |
| **#20510** Cloud Sync | 最高 👍 特性请求，无维护者评论，需产品决策 | 发起 RFC 讨论或明确拒绝/延期 | [Issue #20510](https://github.com/NousResearch/hermes-agent/issues/20510) |
| **#37733** 安全漏洞 | **今日新报，CVSS 6.5，无响应** | 24h 内安全团队 triage，评估是否需紧急补丁 | [Issue #37733](https://github.com/NousResearch/hermes-agent/issues/37733) |
| **#37689** 无限循环 | 架构级缺陷（circuit-breaker vs recompute_ready 交互），可能需设计变更 | 标记为 design-discussion，避免局部修复引入更多状态机复杂度 | [Issue #37689](https://github.com/NousResearch/hermes-agent/issues/37689) |

---

**日报生成时间**：2026-06-03  
**数据覆盖**：过去 24 小时 GitHub 活动  
**项目健康度评分**：⚠️ **B-** — 活跃度优秀，但 P1 级问题密度上升、安全漏洞待响应、长期积压未清理，需关注"修复速度 vs 新问题产生速度"的平衡。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-06-03

> **项目**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw) | **日期**: 2026-06-03 | **分析周期**: 过去24小时

---

## 1. 今日速览

PicoClaw 今日保持**高活跃度**，24小时内产生 **14 个 PR 更新**（含 5 个已合并/关闭）和 **3 个 Issue 更新**，并推送了 **v0.2.9-nightly** 夜间构建版本。核心开发节奏集中在**稳定性修复**与**上下文管理优化**两大主题：yuxuan-7814 和 chengzhichao-xydt 两位贡献者主导了今日大部分关键修复，涉及智谱 API 错误码识别、会话历史泄漏、goroutine 泄漏等生产级问题。社区方面，WebSocket 协议扩展需求获得关注，反映出外部客户端集成生态的成熟诉求。

---

## 2. 版本发布

### 🔖 v0.2.9-nightly.20260602.426046fc

| 属性 | 详情 |
|:---|:---|
| **标签** | `nightly` |
| **构建时间** | 2026-06-02 |
| **Commit** | `426046fc` |
| **稳定性** | ⚠️ 自动化构建，可能不稳定 |

**变更范围**: 自 `v0.2.9` 至 `main` 分支的全部增量提交  
**完整日志**: [Compare v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

> **迁移注意事项**: 夜间构建不建议用于生产环境。当前 `main` 分支包含多项关键修复（见下文），等待正式版发布的用户可关注 [#2986](https://github.com/sipeed/picoclaw/pull/2986)（goroutine 泄漏）、[#2989](https://github.com/sipeed/picoclaw/pull/2989)（智谱 API 错误处理）等 PR 的合并状态。

---

## 3. 项目进展

### ✅ 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#2989](https://github.com/sipeed/picoclaw/pull/2989) | yuxuan-7814 | **智谱 API 错误码 1210 识别修复** | 补齐供应商错误分类器，使微信渠道视觉模型故障能正确触发降级机制，直接解决生产环境 [#2943](https://github.com/sipeed/picoclaw/issues/2943) |
| [#2991](https://github.com/sipeed/picoclaw/pull/2991) | chengzhichao-xydt | **LLM 瞬态 HTTP 错误重试机制** | 统一 OpenRouter/OpenAI 500 错误的重试逻辑，消除无 fallback 候选时的 turn 崩溃，提升 agent 容错能力 |
| [#2986](https://github.com/sipeed/picoclaw/pull/2986) | chengzhichao-xydt | **SessionManager.Stop() 防 goroutine 泄漏** | 修复测试及高频创建场景下的资源泄漏，改善长期运行稳定性 |
| [#2993](https://github.com/sipeed/picoclaw/pull/2993) | afjcjsbx | **PicoClaw agent 自描述技能文档** | 为 AI agent 操作 PicoClaw 提供标准化技能定义，推动"AI 操作 AI 基础设施"的元能力构建 |
| [#2239](https://github.com/sipeed/picoclaw/pull/2239) | thanhtantran | **Docker Compose privileged 模式** | 容器部署权限配置优化（历史 PR 清理） |

**整体评估**: 今日合并的 5 个 PR 中，**3 个为生产稳定性修复**（错误分类、重试机制、资源泄漏），1 个为可观测性增强，1 个为基础设施文档化。项目在技术债务清理和可靠性工程方面迈出实质性步伐，v0.2.9 正式版的发布条件进一步成熟。

---

## 4. 社区热点

### 🔥 讨论最活跃的议题

| 排名 | 议题 | 互动指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 1 | [#2404](https://github.com/sipeed/picoclaw/issues/2404) 配置化流式 HTTP 请求 | 👍 1, 💬 10 条评论, 创建于 2026-04-07 | **LLM 后端兼容性扩展**：用户希望像 Python OpenAI 客户端一样通过 `stream=True` 控制流式传输，10 条评论显示该需求涉及 provider 架构的 config 系统设计，社区对"配置即策略"的灵活性有持续期待 |
| 2 | [#2984](https://github.com/sipeed/picoclaw/issues/2984) WebSocket 显式 turn 完成信号 | 👍 1, 💬 0 评论, 创建于 2026-06-02 | **协议完整性补全**：外部 Pico Protocol 客户端需要确定性状态机，当前 `typing.stop` 语义不足以区分"暂停输入"与"完全结束"，反映第三方客户端生态从"能连"到"好用"的成熟度跃迁 |
| 3 | [#2943](https://github.com/sipeed/picoclaw/issues/2943) 微信图片触发智谱 1210 错误 | 💬 1 评论, 已关闭 | **渠道-模型矩阵的边界情况**：微信渠道 × 视觉模型 × 智谱供应商的组合出现参数不兼容，已随 [#2989](https://github.com/sipeed/picoclaw/pull/2989) 修复关闭 |

**趋势洞察**: 社区焦点正从"基础功能可用"转向**协议标准化**（#2984）和**配置精细化**（#2404），表明 PicoClaw 作为基础设施平台的定位正在被更多下游集成方认可。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | Issue/PR | 状态 | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | **智谱 GLM-5-Turbo 视觉 API 错误码 1210 未被识别，导致 fallback 失效** | [#2943](https://github.com/sipeed/picoclaw/issues/2943) → [#2989](https://github.com/sipeed/picoclaw/pull/2989) | ✅ **已修复合并** | 微信渠道图片消息、智谱供应商用户 |
| 🔴 **高** | **SessionManager goroutine 泄漏** | [#2986](https://github.com/sipeed/picoclaw/pull/2986) | ✅ **已修复合并** | 测试环境、高频会话创建场景、长期运行实例 |
| 🟡 **中** | **LLM 瞬态 HTTP 500 错误导致 turn 直接失败（无 fallback 时）** | [#2991](https://github.com/sipeed/picoclaw/pull/2991) | ✅ **已修复合并** | OpenRouter/OpenAI 兼容端点用户 |
| 🟡 **中** | **升级 v0.2.9 后新会话继承旧 main session 历史** | [#2972](https://github.com/sipeed/picoclaw/issues/2972) → [#2992](https://github.com/sipeed/picoclaw/pull/2992) | 🔄 **PR 待合并** | Web UI 用户、升级后新会话 |
| 🟡 **中** | **Web UI 多用户消息会话仅显示最后一条** | [#2796](https://github.com/sipeed/picoclaw/issues/2796) → [#2990](https://github.com/sipeed/picoclaw/pull/2990) | 🔄 **PR 待合并** | Web UI 用户、多轮对话场景 |
| 🟡 **中** | **tool_calls 消息在流式会话中被错误过滤** | [#2958](https://github.com/sipeed/picoclaw/issues/2958) → [#2987](https://github.com/sipeed/picoclaw/pull/2987) | 🔄 **PR 待合并** | 流式传输 + 工具调用组合用户 |
| 🟢 **低** | **`/context` 命令压缩阈值显示固定值，忽略配置** | [#2968](https://github.com/sipeed/picoclaw/issues/2968) → [#2988](https://github.com/sipeed/picoclaw/pull/2988), [#2985](https://github.com/sipeed/picoclaw/pull/2985) | 🔄 **双 PR 待合并** | 使用 `summarize_token_percent` 配置的用户 |

> **健康度评估**: 今日 3 个高/中严重度问题已有修复合并，剩余 4 个待合并 PR 均指向明确的回归场景，修复路径清晰。项目稳定性响应速度良好。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 成熟度评估 | 纳入可能性 |
|:---|:---|:---|:---|
| **配置化流式 HTTP 请求** | [#2404](https://github.com/sipeed/picoclaw/issues/2404) | 有明确 API 设计提案（`"streaming": true`），10 条评论讨论充分，标记 `enhancement`+`provider`+`config` | ⭐⭐⭐⭐ **高** — 契合 provider 架构演进方向，配置系统已有扩展点 |
| **WebSocket 显式 turn 完成信号** | [#2984](https://github.com/sipeed/picoclaw/issues/2984) | 协议层需求，有明确 use case，无实现提案 | ⭐⭐⭐ **中高** — 协议兼容性需求，但需评估对现有客户端的 breaking change 风险 |
| **Debug Trace Viewer (picoclaw-tracer)** | [#2945](https://github.com/sipeed/picoclaw/pull/2945) | 完整独立二进制实现，实时渲染 LLM trace，功能完备 | ⭐⭐⭐ **中** — 可观测性价值显著，但需维护者评估是否纳入核心仓库或作为独立生态项目 |
| **PicoClaw Agent 自描述技能** | [#2994](https://github.com/sipeed/picoclaw/pull/2994) | 文档/技能定义 PR，覆盖 CLI、provider、配置等核心概念 | ⭐⭐⭐ **中** — 元能力基础设施，但需 review 技能格式与现有 agent 框架兼容性 |

**路线图信号**: 项目正从"功能实现期"进入**"配置精细化 + 协议标准化 + 可观测性"**的成熟化阶段，v0.3.0 或可能聚焦 provider 配置体系重构与 Pico Protocol v2 协议迭代。

---

## 7. 用户反馈摘要

### 痛点

| 反馈来源 | 具体问题 | 深层需求 |
|:---|:---|:---|
| [#2943](https://github.com/sipeed/picoclaw/issues/2943) weixshaw | 微信发图 → 智谱 1210 错误，无降级 | **供应商错误码覆盖完整性**：用户期望"任何供应商错误都能被优雅处理"，而非手动排查 |
| [#2972](https://github.com/sipeed/picoclaw/issues/2972) 隐含反馈 | 升级后新会话"继承"旧历史，隐私/混淆 | **会话隔离的确定性**：升级迁移不应破坏会话边界语义 |
| [#2796](https://github.com/sipeed/picoclaw/issues/2796) 隐含反馈 | Web UI 历史显示不完整，仅最后一条 | **多轮对话的可视化完整性**：用户需要完整的对话上下文回溯 |

### 场景与期待

- **流式传输场景**（#2404 OuSatoru）："像 Python 客户端一样简单"——用户期待 PicoClaw 的配置抽象与主流 SDK 体验对齐，降低心智负担
- **第三方集成场景**（#2984 Brook-sys）：外部 WebSocket 客户端需要**状态机确定性**，当前事件流语义存在"模糊地带"
- **调试场景**（#2945 aruntcet2010）：社区自发构建 trace viewer，反映 LLM 调用链的可观测性已成为**自服务刚需**

---

## 8. 待处理积压

### ⚠️ 需维护者关注的高龄/高价值议题

| PR/Issue | 创建时间 | 停滞原因 | 建议行动 |
|:---|:---|:---|:---|
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) 流式 HTTP 配置 | 2026-04-07（**57天**） | 标记 `stale`，10 条评论后无 maintainer 结论 | **优先评估**：配置系统已有扩展点，建议指定 milestone 或明确拒绝/接受设计方向 |
| [#2951](https://github.com/sipeed/picoclaw/pull/2951) web_search function type | 2026-05-26（**7天**） | 标记 `stale`，OpenAI 端点兼容性修复 | 快速 review：变更范围小，影响明确，建议合并或要求补充测试 |
| [#2948](https://github.com/sipeed/picoclaw/pull/2948) claude-opus-4-7 temperature | 2026-05-26（**7天**） | 标记 `stale`，模型参数兼容性修复 | 快速 review：Anthropic 模型适配，建议随模型支持策略统一处理 |
| [#2945](https://github.com/sipeed/picoclaw/pull/2945) picoclaw-tracer | 2026-05-26（**7天**） | 独立二进制，功能完整但架构决策待定 | **架构决策**：纳入核心 vs. 独立生态仓库 vs. 官方推荐工具 |

> **积压健康度**: 3 个 `stale` PR 均为近期创建但标记异常，实际长期积压仅 #2404 一项。建议维护者对 #2404 做出明确路线图表态，避免社区贡献者热情耗散。

---

## 附录：快速链接

| 类别 | 链接 |
|:---|:---|
| 项目首页 | https://github.com/sipeed/picoclaw |
| 最新 Nightly | [v0.2.9-nightly.20260602.426046fc](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) |
| 今日合并 PR 列表 | [#2989](https://github.com/sipeed/picoclaw/pull/2989), [#2991](https://github.com/sipeed/picoclaw/pull/2991), [#2986](https://github.com/sipeed/picoclaw/pull/2986), [#2993](https://github.com/sipeed/picoclaw/pull/2993), [#2239](https://github.com/sipeed/picoclaw/pull/2239) |
| 待合并关键 PR | [#2992](https://github.com/sipeed/picoclaw/pull/2992), [#2990](https://github.com/sipeed/picoclaw/pull/2990), [#2987](https://github.com/sipeed/picoclaw/pull/2987), [#2988](https://github.com/sipeed/picoclaw/pull/2988), [#2985](https://github.com/sipeed/picoclaw/pull/2985) |

---

*本报告基于 GitHub 公开数据自动生成，如需深度分析特定技术决策或社区治理议题，可进一步提供讨论。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-06-03

> **项目**: [NanoClaw](https://github.com/qwibitai/nanoclaw) | **分析日期**: 2026-06-03 | **数据周期**: 过去24小时

---

## 1. 今日速览

NanoClaw 今日维持**中等活跃度**，核心工程团队持续推进基础设施层修复。过去24小时内 4 个 PR 完成合并/关闭，3 个修复类 PR 仍在审查队列，无新版本发布。值得注意的是，今日唯一新开的 Issue #2673 为与项目技术方向无关的 AI 生成内容（疑似垃圾信息），社区讨论氛围偏冷清，Issues 互动率为零。整体项目处于**稳定维护期**，重点聚焦 Codex 运行时、容器安全及插件系统的工程债务清理。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### ✅ 今日合并/关闭的关键 PR（4 条）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#2674](https://github.com/nanocoai/nanoclaw/pull/2674) | [pinetreelic](https://github.com/pinetreelic) | **Codex 运行时状态消息标准化**：将长运行时状态消息改为机械标签，新增元数据与内部通道防护防止自循环 | 消除 Codex 运行时消息歧义，降低调试复杂度；自循环防护提升系统稳定性 |
| [#1193](https://github.com/nanocoai/nanoclaw/pull/1193) | [cyber-rye](https://github.com/cyber-rye) | **宿主端插件钩子系统**：新增 `src/plugin-loader.ts`，支持 `onStartup(ctx)`/`onShutdown()` 生命周期钩子，插件可在消息循环前启动 HTTP 服务等长驻进程 | **架构级扩展**：为第三方插件生态奠定基础，NanoClaw 从"封闭运行时"向"可扩展平台"演进的关键一步 |
| [#2069](https://github.com/nanocoai/nanoclaw/pull/2069) | [javexed](https://github.com/javexed) | **WebChat Skill v1**：新增 Web 聊天渠道技能（含 SKILL.md 文档） | 补齐渠道矩阵，支持浏览器端交互场景 |
| [#2538](https://github.com/nanocoai/nanoclaw/pull/2538) | [sebastiondev](https://github.com/sebastiondev) | **容器运行器安全加固**：`buildAgentGroupImage()` 新增包名输入验证，阻断 [CWE-78](https://cwe.mitre.org/data/definitions/78.html) OS 命令注入漏洞 | **安全红线修复**：消除容器构建环节的 RCE 风险，生产环境部署必要条件 |

**整体评估**：今日合并内容覆盖**运行时可靠性**、**平台扩展性**、**渠道覆盖**、**安全基线**四个维度，项目基础设施成熟度显著提升。插件系统（#1193）尤为关键，标志着 NanoClaw 开始构建开发者生态。

---

## 4. 社区热点

> **⚠️ 异常信号**：今日所有 Issues/PRs 评论数均为 **0**，👍 反应数均为 **0**，社区互动处于**冻结状态**。

### 相对关注度最高的条目

| 排名 | 条目 | 类型 | 分析 |
|:---|:---|:---|:---|
| 1 | [#2673](https://github.com/nanocoai/nanoclaw/issues/2673) | Issue | **垃圾信息/误报**：标题为"Automated Student Grading System"，内容为 AI 生成的巴布亚新几内亚教师场景图片提示词，与 NanoClaw 项目完全无关。疑似用户误用仓库或自动化垃圾发布 |
| 2 | [#2187](https://github.com/nanocoai/nanoclaw/pull/2187) | PR | **待合并最长 PR**：创建于 5 月 2 日，已滞留 **31 天**，修复 CLI 渠道平台 ID 命名空间问题，技术债务持续累积 |
| 3 | [#2672](https://github.com/nanocoai/nanoclaw/pull/2672) | PR | **今日最新复杂修复**：涉及 MCP 配置联合类型兼容性及代理后 HTTP-only 传输，技术深度高但零讨论 |

**背后诉求分析**：
- 社区参与机制失效：零评论零反应表明要么用户基数极小，要么讨论已迁移至 Discord/Slack 等外部渠道
- 维护者审查瓶颈：3 个待合并 PR 均缺乏反馈，#2187 超期一个月未决
- 垃圾信息治理缺失：#2673 未被及时标记或关闭，反映 Issue 分类流程缺位

---

## 5. Bug 与稳定性

| 严重程度 | 条目 | 状态 | 详情 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [CWE-78 OS 命令注入](https://github.com/nanocoai/nanoclaw/pull/2538) | **已修复**（昨日合并） | 容器构建时恶意包名可导致任意命令执行 | #2538 ✅ |
| 🟡 **High** | [附件目录未挂载至容器](https://github.com/nanocoai/nanoclaw/pull/2671) | **待合并** | 通道适配器格式化的附件路径在容器内不存在，导致文件处理失败 | #2671 ⏳ |
| 🟡 **High** | [MCP 联合类型兼容性断裂](https://github.com/nanocoai/nanoclaw/pull/2672) | **待合并** | Trunk 的 `McpServerConfig` 演进为 `stdio \| http \| sse` 联合类型后，Codex provider 仍假设旧版 stdio-only 接口 | #2672 ⏳ |
| 🟢 **Medium** | [CLI 平台 ID 错误命名空间化](https://github.com/nanocoai/nanoclaw/pull/2187) | **待合并**（31天） | CLI 渠道的裸平台 ID 被错误添加命名空间前缀，破坏命令行工具兼容性 | #2187 ⏳ |
| 🟢 **Medium** | [Codex 运行时状态消息歧义](https://github.com/nanocoai/nanoclaw/pull/2674) | **已修复** | 长运行时状态消息格式不统一，易引发误解析 | #2674 ✅ |

**风险评估**：当前存在 **2 个 High 级别修复待合并**（#2671、#2672），均涉及核心数据流路径（附件处理、MCP 配置解析），建议优先审查。历史漏洞 #2538 虽已修复，但需确认是否已发布至稳定版本——目前无 release 记录，用户可能仍在暴露状态。

---

## 6. 功能请求与路线图信号

### 已落地的新功能方向

| 功能 | 来源 PR | 纳入确定性 | 下一版本信号强度 |
|:---|:---|:---|:---|
| 宿主端插件生命周期系统 | #1193 | **已合并** | ⭐⭐⭐⭐⭐ 核心架构能力，预计成为 v0.x 系列主打特性 |
| WebChat 渠道技能 | #2069 | **已合并** | ⭐⭐⭐⭐☆ 渠道矩阵扩展，配套文档完整 |
| MCP 多传输协议支持 | #2672 | 审查中 | ⭐⭐⭐⭐☆ 跟进上游 Trunk 演进，必要兼容性工作 |

### 潜在路线图推断

基于今日合并内容，NanoClaw 正从"单一聊天机器人运行时"向"多渠道 AI 智能体平台"转型：
- **短期**（1-2 周）：合并剩余 3 个修复 PR，发布安全补丁版本
- **中期**（1-2 月）：基于 #1193 插件系统发布插件市场/文档，激活开发者生态
- **长期信号**：WebChat + CLI + Signal/WhatsApp/iMessage 的多渠道架构暗示企业级部署场景

**缺失的功能请求**：今日无真实用户功能请求（#2673 为垃圾信息），社区需求输入渠道需激活。

---

## 7. 用户反馈摘要

> **数据局限**：今日 Issues 零评论，无法提取真实用户对话。基于历史 PR 描述推断用户场景：

| 痛点/场景 | 来源 | 类型 |
|:---|:---|:---|
| **容器内附件路径断裂** | #2671 | 🔧 功能性 Bug：用户通过通道适配器上传的附件在 agent 容器内不可访问，阻断文件处理工作流 |
| **代理后 MCP 连接失败** | #2672 | 🔧 企业部署障碍：HTTP-only 传输需求暗示用户处于受限网络环境（防火墙/代理后），stdio/SSE 被阻断 |
| **CLI 工具集成受挫** | #2187 | 🔧 开发者体验：平台 ID 命名空间错误导致命令行脚本失效，自动化流程中断 |
| **插件扩展无门** | #1193（反向推断） | 💡 需求满足：此前用户无法在不修改核心代码的情况下扩展功能，钩子系统解决此痛点 |

**满意度推测**：安全修复（#2538）和插件系统（#1193）为正向信号；但 3 个修复 PR 长期滞留 + 零社区互动，表明**生产环境用户可能因审查延迟而受挫**。

---

## 8. 待处理积压

### 🚨 需维护者紧急关注

| 条目 | 滞留时间 | 风险/影响 | 建议行动 |
|:---|:---|:---|:---|
| [#2187](https://github.com/nanocoai/nanoclaw/pull/2187) | **31 天** | CLI 渠道核心功能持续损坏；作者 [alex-shepel](https://github.com/alex-shepel) 5 月 2 日后无更新，可能已放弃 | 维护者主动审查或请求 rebase；若设计有争议应明确反馈 |
| [#2671](https://github.com/nanocoai/nanoclaw/pull/2671) | 1 天 | 附件处理功能在容器部署模式下不可用 | 快速路径审查：变更范围小（单行 mount 配置），风险可控 |
| [#2672](https://github.com/nanocoai/nanoclaw/pull/2672) | 1 天 | MCP 配置解析在最新 Trunk 下崩溃 | 需 Codex 模块负责人技术审查；建议关联 Trunk 版本兼容性测试 |

### 流程债务

- **Issue #2673** 垃圾信息未清理：建议启用 GitHub 的 spam 标记功能或配置 Issue 模板过滤
- **PR 模板执行不一致**：部分 PR 标 `[follows-guidelines]` 部分未标，#2671 缺少 contributing-guide 声明头

---

## 附录：今日数据全景

```
Issues:  新开 1 | 活跃 1 | 关闭 0 | 净增 +1
PRs:     新开 3 | 待合并 3 | 已合并/关闭 4 | 吞吐量 4
Releases: 0
评论互动: 0 条（全站）
社区反应: 0 👍（全站）
```

---

*本日报基于 GitHub 公开数据生成，未包含私有讨论区信息。建议结合项目官方 Discord/Forum 获取完整社区动态。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-06-03

## 1. 今日速览

NullClaw 今日活跃度**偏低**，仅产生 1 条 Issue 和 1 条配套修复 PR，无版本发布。社区活动呈现典型的"问题驱动"模式——同一贡献者（vernonstinebaker）在报告 PII 脱敏误报缺陷后 24 小时内即提交了修复方案，响应效率较高但缺乏多元参与者。项目当前处于**稳定维护期**，核心关注点为生产环境可靠性打磨，而非功能扩张。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

今日无已合并或关闭的 PR。唯一活跃的 PR [#945](https://github.com/nullclaw/nullclaw/pull/945) 处于待合并状态，由缺陷报告者同步提交，形成完整的"问题-修复"闭环：

| PR | 状态 | 进展说明 |
|:---|:---|:---|
| [#945](https://github.com/nullclaw/nullclaw/pull/945) fix(redaction): reject ISO date/time patterns as false-positive phone matches | 🟡 **待合并** | 在 Zig 实现的 PII 脱敏引擎中新增 `isDateLike()` 守卫函数，阻断 ISO 8601 日期时间格式（`YYYY-MM-DD hh`、`DD-MM-YYYY hh`）被误识别为 `[PHONE_X]` 的伪阳性匹配 |

**技术细节**：该修复直接针对系统提示词模板 `appendDateTimeSection` 输出的 `{d}-{d:0>2}-{d:0>2} {d:0>2}` 格式（如 `2026-06-02 20:17`），属于**根因修复**而非症状缓解。合并后将消除 agent 执行 `date` 等基础命令时的输出污染问题。

**项目推进评估**：★★☆☆☆ — 修复了明确的用户体验缺陷，但单一 PR 未形成阶段性里程碑。

---

## 4. 社区热点

| 条目 | 类型 | 互动指标 | 链接 |
|:---|:---|:---|:---|
| #944 PII redactor falsely matches date/time output as phone numbers | Issue | 👍 0, 💬 0 | [nullclaw/nullclaw#944](https://github.com/nullclaw/nullclaw/issues/944) |
| #945 fix(redaction): reject ISO date/time patterns... | PR | 👍 0, 💬 undefined | [nullclaw/nullclaw#945](https://github.com/nullclaw/nullclaw/pull/945) |

**诉求分析**：尽管互动指标为零，该 Issue-PR 组合揭示了**生产环境部署中的关键痛点**——PII 脱敏作为默认启用（`enable_pii_redaction = true`，2026-05 月提交 `41cdb493` 变更）的安全机制，其**过度敏感**正在干扰 agent 的基础系统交互能力。用户核心诉求并非关闭安全功能，而是期望**精确性与可用性的平衡**：保留对真实电话号码的脱敏，同时豁免标准日期时间格式。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | #944 | PII 脱敏引擎将系统 `date` 命令输出中的日期时间误识别为 `[PHONE_X]`，导致 agent 无法获取准确时间戳信息，可能破坏依赖时间感知的工作流（日志排序、定时任务、证书有效期检查等） | ✅ **已有 PR #945 待合并** | [#944](https://github.com/nullclaw/nullclaw/issues/944) |

**回归风险**：该缺陷由 2026-05 月将 `enable_pii_redaction` 设为默认 `true` 的变更引入（`41cdb493`），属于**配置默认化后的边缘场景暴露**。修复 PR 采用白名单模式（识别并放行 ISO 日期格式），而非调整电话号码正则的敏感度，策略保守，引入新误报的风险可控。

---

## 6. 功能请求与路线图信号

**今日无新功能请求**

从现有 PR 推断下一版本可能方向：
- **PII 脱敏引擎精细化**：#945 的合并将建立"模式例外"机制（`isDateLike()` 守卫），该架构可扩展至其他常见伪阳性场景（如版本号 `1.2.3-4`、IP 地址段等），暗示维护者可能需系统性审计正则匹配规则集

---

## 7. 用户反馈摘要

**提炼自 Issue #944 的原始场景**：

| 维度 | 内容 |
|:---|:---|
| **使用场景** | 运行 `date` 等标准系统命令获取时间信息，用于 agent 的时序决策或输出格式化 |
| **痛点** | 输出被 `[PHONE_X]` 占位符替换，信息完全丢失而非模糊化处理；无配置项可精细调节脱敏规则 |
| **满意点** | 安全功能默认启用体现了安全优先的设计理念 |
| **不满意点** | 误报率过高时缺乏降级路径（如按模式白名单、按命令类型豁免、或实时反馈调参接口） |

**深层信号**：用户对"安全机制不可见但可预期"的需求强烈——接受脱敏存在，但要求**可解释、可预测、可微调**。

---

## 8. 待处理积压

| 条目 | 创建时间 | 当前状态 | 风险提示 |
|:---|:---|:---|:---|
| PR #945 | 2026-06-02 | 🟡 待合并（1 天） | 修复方案完整且由同一作者提交，合并成本低；但评论数为 `undefined` 可能指示 CI 状态或审查流程异常，需维护者确认是否因自动化检查阻塞 |

**维护者行动建议**：
1. **优先合并 #945**：该修复影响默认启用功能，延迟合并将持续影响所有新部署实例的时间相关操作
2. **审查 `undefined` 评论数**：排查 GitHub API 同步问题或 CI 报告异常，确保 PR 审查流程透明

---

*日报生成时间：2026-06-03 | 数据来源：NullClaw GitHub 仓库公开活动流*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-06-03

## 1. 今日速览

IronClaw 今日呈现**高强度开发态势**，24小时内 Issues 更新 29 条（27 条活跃/新开，仅 2 条关闭）、PR 更新 50 条（19 条待合并，31 条已合并/关闭），**合并吞吐量显著高于关闭率**，表明工程团队处于快速迭代周期。核心焦点集中在 **Reborn 架构的系统性加固**（安全、子代理、循环策略）与 **多平台 OAuth/MCP 集成修复**（Notion、Gmail、Google Calendar）。QA 团队在 hosted-staging 环境对 Qwen3.6-35B-A3B-FP8 和 MiniMax-M2.7 模型展开密集测试，暴露出 6 条 P2 级 UI/运行时缺陷。无新版本发布，所有变更通过主干合并持续集成。

---

## 2. 版本发布

**无新版本发布**（0 个）

---

## 3. 项目进展

### 已合并/关闭的关键 PR（31 条中的高价值项）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#4354](https://github.com/nearai/ironclaw/pull/4354) | serrrfirat | **Hosted MCP 协商 + Notion/GSuite OAuth 凭证复用** — 广告协议版本 `2025-06-18`，持久化 MCP 会话元数据，修复 Reborn Notion/GSuite OAuth 可靠性 | **打通企业 SaaS 集成主路径**：MCP 协议标准化 + OAuth 凭证生命周期管理，为 Reborn 商业化部署奠定基础设施 |
| [#4373](https://github.com/nearai/ironclaw/pull/4373) | henrypark133 | **子代理安全与能力门控修复** — 强制要求指令安全上下文，替换 profile-id 唯一检查为 profile+driver 联合谓词，路由子代理 flavor 允许列表 | **关闭 Reborn 核心安全缺口**：消除子代理目标静默跳过提示安全材料的漏洞，对应 Issue [#4351](https://github.com/nearai/ironclaw/issues/4351) |
| [#4372](https://github.com/nearai/ironclaw/pull/4372) | henrypark133 | **HTTP 凭证载体零化** — `RuntimeHttpEgressRequest`/`NetworkHttpRequest`/`NetworkHttpResponse` 的 URL/Header 值在 drop 时清零 | **安全基线提升**：修复 [#4222](https://github.com/nearai/ironclaw/issues/4222)，防止宿主注入凭证材料残留于内存 |
| [#4370](https://github.com/nearai/ironclaw/pull/4370) | henrypark133 | **压缩摘要重试幂等性** — `CompactionTask` 成功持久化后、后续 `BeforeModel` 检查点失败时的重试安全 | **可靠性加固**：消除 Reborn 状态机恢复时的静默数据丢失窗口，对应 [#4309](https://github.com/nearai/ironclaw/issues/4309) |
| [#4375](https://github.com/nearai/ironclaw/pull/4375) | henrypark133 | **触发轮询器生命周期接入** — 可选触发轮询运行时设置、就绪报告、有界关闭，组合拥有的可信触发提交器 | **Reborn 自动化能力闭环**：为定时/事件驱动代理工作流提供基础设施，PR18 里程碑完成 |
| [#4321](https://github.com/nearai/ironclaw/pull/4321) | danielwpz | **Slack Reborn 最终回复投递** — 异步最终回复通过 ProductAdapter 路径，审批-授权交互切片完成 | **企业 IM 集成收官**：对应 [#3857](https://github.com/nearai/ironclaw/issues/3857) 最后一块拼图，Slack 全功能 Reborn 就绪 |
| [#4371](https://github.com/nearai/ironclaw/pull/4371) | serrrfirat | **修复 Codex ChatGPT Reborn 空响应** — SSE 解析硬化（`[DONE]`/`response.output_text.done` 等），恢复 `to=<tool>` 调用语法 | **模型兼容性关键修复**：解除 ChatGPT 系列在 Reborn 模式下的输出断裂 |
| [#4357](https://github.com/nearai/ironclaw/pull/4357) | serrrfirat | **本地开发 Reborn 内存挂载** — `/memory` 挂载至 libSQL 根文件系统，无 libSQL 场景回退 `InMemoryBackend` | **开发者体验**：消除本地开发环境结构化记录后端缺失导致的隐蔽故障 |
| [#4336](https://github.com/nearai/ironclaw/pull/4336) | serrrfirat | **修复 WebUI v2 待处理消息回显** — 乐观用户气泡保留用户角色元数据，基于接受消息身份而非文本去重 | **UI 正确性**：消除消息重复渲染和角色混淆 |
| [#4337](https://github.com/nearai/ironclaw/pull/4337) | serrrfirat | **修复 Google OAuth 运行时认证门提示** — 静态 Google OAuth 门提供者，PKCE 从作用域密钥存储回退加载 | **认证流程完整性**：消除运行时凭证门的回退至手动令牌提示的降级路径 |

**整体推进评估**：今日合并覆盖 **安全基线（零化+门控）、Reborn 核心状态机（压缩/触发/子代理）、企业集成（Slack/MCP/OAuth）、模型兼容性（ChatGPT/Claude）** 四大战略维度，项目向生产就绪迈出实质性一步。

---

## 4. 社区热点

### 讨论最活跃的议题：Reborn 架构系统性审计系列（Issues #4358-#4368）

由 **henrypark133** 于 6 月 2 日批量创建的 **11 条 Reborn-loop 架构卫生 Issue** 构成今日绝对热点，形成完整的 L1-L11 技术债务图谱：

| 层级 | Issue | 核心关切 | 紧急度信号 |
|:---|:---|:---|:---|
| L1 | [#4358](https://github.com/nearai/ironclaw/issues/4358) | Gate replay 重验证当前策略 + 持久化调度记录 | **最高** — 安全关键：恢复时信任过期上下文 |
| L2 | [#4359](https://github.com/nearai/ironclaw/issues/4359) | 提示安全布线 — 强制 safety_context，SafetyLayer 扫描技能 | 高 — 静默绕过路径 |
| L3 | [#4360](https://github.com/nearai/ironclaw/issues/4360) | 能力验证硬化 — `$ref` 拒绝、深度守卫 | 高 — 静默绕过 |
| L4 | [#4361](https://github.com/nearai/ironclaw/issues/4361) | 恢复策略覆盖 + 退出检查点回退 | 中 — 可靠性 |
| L5 | [#4362](https://github.com/nearai/ironclaw/issues/4362) | 持久化 + 事件排序 + F-A1 重新调查 | 中 — 审计追踪 |
| L6 | [#4363](https://github.com/nearai/ironclaw/issues/4363) | 能力管道可观测性 + 批量回滚 | 中 — 运维 |
| L7 | [#4364](https://github.com/nearai/ironclaw/issues/4364) | 预算准确性 — 墙钟、输出令牌对账、CJK 令牌 | 中 — 成本/公平 |
| L8 | [#4365](https://github.com/nearai/ironclaw/issues/4365) | 取消传播 — 可中断模型等待 + 轮询退避 | 中 — 资源效率 |
| L9 | [#4366](https://github.com/nearai/ironclaw/issues/4366) | 压缩 + 检查点 — 延迟非错误、预大小检查 | 中 — 状态管理 |
| L10 | [#4367](https://github.com/nearai/ironclaw/issues/4367) | 循环策略 + 停止条件 — 耗尽上限、身份装箱 | 中 — 调度公平 |
| L11 | [#4368](https://github.com/nearai/ironclaw/issues/4368) | 架构卫生 — LoopHostDependencies 捆绑、debug! 降级 | 低 — 代码健康 |

**子代理专项 C1-C6**（[#4348](https://github.com/nearai/ironclaw/issues/4348)-[#4353](https://github.com/nearai/ironclaw/issues/4353)）同步创建，形成 **17 条成体系的架构加固 Issue 集群**。

**诉求分析**：这不是零散 bug 报告，而是 **生产就绪前的系统性架构审计（pre-production readiness audit）**。作者明确引用 `.claude/rules/architecture.md` 气味检测，表明团队正在用结构化方法消除"静默绕过"类缺陷——这类缺陷在 AI 代理系统中具有极高风险（安全策略失效、成本失控、状态不一致）。社区核心诉求是：**在 Reborn 成为默认路径前，建立可验证的正确性基线**。

---

## 5. Bug 与稳定性

### P2 级 QA 缺陷集群（Qwen3.6-35B-A3B-FP8 / MiniMax-M2.7）

| Issue | 模型 | 严重程度 | 现象 | 修复状态 |
|:---|:---|:---|:---|:---|
| [#4341](https://github.com/nearai/ironclaw/issues/4341) | Qwen3.6-35B | **P2** | Agent THINKING 思维链暴露给用户，卡在 thinking 状态 | ❌ 无 fix PR |
| [#4344](https://github.com/nearai/ironclaw/issues/4344) | Qwen3.6-35B | **P2** | Agent 镜像用户消息作为自身响应（加载时） | ❌ 无 fix PR |
| [#4343](https://github.com/nearai/ironclaw/issues/4343) | Qwen3.6-35B | **P2** | MCP 集成确认但驱动失败导致不可用（Notion/GitHub） | ❌ 无 fix PR |
| [#4342](https://github.com/nearai/ironclaw/issues/4342) | Qwen3.6-35B | **P2** | 认证模态框在页面刷新后持续存在并阻塞聊天 | ❌ 无 fix PR |
| [#4340](https://github.com/nearai/ironclaw/issues/4340) | Qwen3.6-35B | **P2** | Content 字段空白验证错误阻止消息提交 | ❌ 无 fix PR |
| [#4339](https://github.com/nearai/ironclaw/issues/4339) | MiniMax-M2.7 | **P2** | Provider 工具调用被误拒为 InvalidInvocation（有效能力模式） | ❌ 无 fix PR |
| [#4338](https://github.com/nearai/ironclaw/issues/4338) | MiniMax-M2.7 | **P2** | 断开状态显示误导性执行驱动错误 | ❌ 无 fix PR |

### 模型兼容性回归

| Issue | 严重程度 | 现象 | 修复状态 |
|:---|:---|:---|:---|
| [#4334](https://github.com/nearai/ironclaw/issues/4334) | **P1-P2** | Claude Opus 4.7/4.8 完全不可用：始终发送 `temperature` 导致 400 "temperature is deprecated" | ❌ 无 fix PR，影响 Anthropic 最新旗舰模型 |

### 基础设施

| Issue | 严重程度 | 现象 | 修复状态 |
|:---|:---|:---|:---|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) | **P1** | 夜间 E2E 持续失败（v2-engine 作业） | ❌ 自 5 月 27 日持续，今日更新失败记录，无修复 PR |

**稳定性评估**：**高风险信号**。7 条 P2 级 UI/运行时缺陷全部无修复 PR，且集中在 **Qwen3.6-35B-A3B-FP8**（6 条）——该模型可能是新的默认测试目标或近期集成的重点，但质量尚未达标。Claude Opus 4.7/4.8 的 `temperature` 参数兼容性问题属于 **快速跟进类修复**（条件发送或模型版本检测），但 24 小时内无响应令人担忧。夜间 E2E 连续 7 天失败是 **工程纪律红灯**。

---

## 6. 功能请求与路线图信号

### 已编码的近期功能（PR 已存在）

| 功能方向 | 对应 PR | 纳入置信度 |
|:---|:---|:---|
| 触发器第一方能力（创建/列表/删除） | [#4318](https://github.com/nearai/ironclaw/pull/4318)（已合并） | ✅ 已落地 |
| 飞书 WebSocket 事件接入 | [#4178](https://github.com/nearai/ironclaw/pull/4178)（开放，XL 级） | 🔶 高概率下一版本 |
| 禁用工具列表安全标志 | [#3548](https://github.com/nearai/ironclaw/pull/3548)（开放，XL 级，5 月 12 日） | 🔶 安全合规必需，可能延迟至审计完成 |
| Engine v2 通道线程/响应 ID 暴露 | [#3669](https://github.com/nearai/ironclaw/pull/3669)（开放，XL 级，5 月 14 日） | 🔶 工具生态依赖，可能近期合并 |

### 从 Issue 推导的路线图信号

| 信号 | 来源 | 解读 |
|:---|:---|:---|
| **Reborn 成为默认运行时的前提条件清单** | L1-L11 + C1-C6 Issue 集群 | 团队正在建立 **Reborn GA 的阻塞项清单**，预计需要 2-4 周完成 |
| **MCP 协议版本锁定至 2025-06-18** | [#4354](https://github.com/nearai/ironclaw/pull/4354) | 主动对接 MCP 标准演进，避免协议漂移 |
| **子代理审计追踪完整性** | [#4352](https://github.com/nearai/ironclaw/issues/4352) | 企业合规/安全审查的前置需求，暗示 **B 端商业化加速** |

---

## 7. 用户反馈摘要

### 真实痛点（来自 QA 测试场景）

| 痛点 | 来源 Issue | 场景深度 |
|:---|:---|:---|
| **"思考状态"可视化失控** | [#4341](https://github.com/nearai/ironclaw/issues/4341) | 用户看到内部 THINKING 标签，破坏代理幻觉，降低信任 |
| **消息身份混淆** | [#4344](https://github.com/nearai/ironclaw/issues/4344) | 加载态下 UI 将用户消息回显为 Agent 响应，**基础交互契约破裂** |
| **认证状态与页面生命周期脱节** | [#4342](https://github.com/nearai/ironclaw/issues/4342) | 刷新后模态框幽灵存在，SPA 状态管理缺陷 |
| **"已确认但未工作"的集成体验** | [#4343](https://github.com/nearai/ironclaw/issues/4343) | MCP 集成 UI 层确认，驱动层失败——**承诺与交付的落差** |
| **模型特定参数兼容性** | [#4334](https://github.com/nearai/ironclaw/issues/4334) | Claude Opus 4.7/4.8 的 temperature 拒绝，**模型适配滞后于模型发布** |

### 满意度暗示

- **满意**：OAuth/MCP 集成广度（Notion/GSuite/Gmail/Slack/Feishu）覆盖企业主流 SaaS
- **不满意**：**Qwen3.6-35B-A3B-FP8 的 UI/运行时质量** 成为测试瓶颈，可能阻碍该模型上线；**夜间 E2E 持续失败** 反映质量门禁松弛

---

## 8. 待处理积压

### 长期开放的重要 PR（需维护者决策）

| PR | 创建日期 | 阻塞信号 | 风险 |
|:---|:---|:---|:---|
| [#3669](https://github.com/nearai/ironclaw/pull/3669) Engine v2 通道 ID 暴露 | 2026-05-14（20 天） | XL 级，中等风险，依赖 #4355（已关闭） | **工具生态阻塞**：PR #4355 已关闭但 #3669 仍未合并，可能等待最终审查 |
| [#3548](https://github.com/nearai/ironclaw/pull/3548) DISABLE_TOOLS_LIST 安全标志 | 2026-05-12（22 天） | XL 级，多作用域，DB 迁移 | **安全合规债务**：注册+调度双层强制，但规模过大可能需拆分 |
| [#4178](https://github.com/nearai/ironclaw/pull/4178) 飞书 WebSocket 接入 | 2026-05-28（6 天） | XL 级，中等风险，扩展点 | **中国企业市场**：字节跳动生态接入，战略价值高但审查周期长 |

### 持续失败的自动化检查

| Issue | 持续时间 | 行动建议 |
|:---|:---|:---|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) 夜间 E2E | 7 天（5/27-6/2） | **立即冻结相关提交或降级为 non-blocking**，指派专人修复 v2-engine 作业，当前状态削弱所有合并的信心基础 |

### 新创建待跟进（24h 内无响应）

| Issue | 创建时间 | 关注理由 |
|:---|:---|:---|
| [#4376](https://github.com/nearai/ironclaw/issues/4376) HTTP 凭证载体非克隆类型 + DTO 边界 | 2026-06-02 | PR #4372 的后续强化，安全架构升级，需设计审查 |
| #4334 Claude Opus 4.7/4.8 不可用 | 2026-06-02 | **旗舰

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-06-03

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **报告日期**: 2026-06-03（数据覆盖：2026-06-02 00:00 - 24:00 UTC+8）

---

## 1. 今日速览

今日 LobsterAI 项目呈现**高代码吞吐、零社区讨论**的特征。过去24小时内，**50条 PR 被处理**（47条合并/关闭，3条待合并），但 Issues 活动完全静默（0条新开/活跃/关闭），PR 评论数也全部显示为 `undefined`，表明自动化合并或内部批量处理为主，缺乏公开社区互动。项目活跃度体现在工程推进层面，而非社区参与层面。MiniMax-M3 模型升级成为近期持续的技术主线，同时 IM 机器人管理、MCP 启动优化、Artifacts 体验等模块密集迭代，显示产品处于快速功能完善期。

---

## 2. 版本发布

**无新版本发布**

最新 Releases 区域为空，项目尚未发布基于近期密集提交的正式版本。

---

## 3. 项目进展

### 🔀 今日合并/关闭的关键 PR（共 47 条，精选核心功能）

| PR | 作者 | 领域 | 核心贡献 | 链接 |
|:---|:---|:---|:---|:---|
| #2096 | btc69m979y-dotcom | `main` | **插件系统治理**：隐藏 OpenClaw 内部/运行时捆绑插件 ID，防止用户误管理内部组件，并从 `user_plugins` 记录中过滤隐藏项 | [PR #2096](https://github.com/netease-youdao/LobsterAI/pull/2096) |
| #2095 | btc69m979y-dotcom | `renderer`+`main`+`cowork` | **子智能体批量删除**：支持侧边栏批量选中子智能体会话，异步清理网关 transcript，限流重试避免网关压力 | [PR #2095](https://github.com/netease-youdao/LobsterAI/pull/2095) |
| #2094 | liugang519 | `renderer`+`artifacts` | **分享弹窗信息层级优化**：调整分享链接/分享码展示样式，移除冗余状态标识，统一视觉层级 | [PR #2094](https://github.com/netease-youdao/LobsterAI/pull/2094) |
| #2093 | btc69m979y-dotcom | `renderer` | **MiniMax-M3 图像输入修复**：解除 `supportsImage: false` 硬编码，使 M3 的图像输入能力可用 | [PR #2093](https://github.com/netease-youdao/LobsterAI/pull/2093) |
| #2092 | liugang519 | 多领域 | **Artifacts 功能迭代**（2026.5.28 版本内容） | [PR #2092](https://github.com/netease-youdao/LobsterAI/pull/2092) |
| #2091 | btc69m979y-dotcom | `renderer`+`docs`+`main` | **MCP 启动性能优化**：`npx -y <package>@latest` 预解析为 `node <absolute-bin-path>`，新增首次响应计时日志，失败自动重试 | [PR #2091](https://github.com/netease-youdao/LobsterAI/pull/2091) |
| #1952 | btc69m979y-dotcom | `renderer`+`main`+`openclaw`+`cowork` | **macOS 语音输入权限引导**：拒绝辅助功能权限后 toast 提示用户前往系统设置开启 | [PR #1952](https://github.com/netease-youdao/LobsterAI/pull/1952) |
| #1962 | btc69m979y-dotcom | `renderer`+`main`+`openclaw`+`cowork` | **安全监控热切换**：`nsp-clawguard` 插件支持设置中动态启停，默认开启 | [PR #1962](https://github.com/netease-youdao/LobsterAI/pull/1962) |
| #1985 | btc69m979y-dotcom | `renderer`+`main`+`cowork` | **思考层级控制**：聊天会话支持 Off/Minimal/Low/Medium/High/Adaptive 六级思考深度，端到端完整实现 | [PR #1985](https://github.com/netease-youdao/LobsterAI/pull/1985) |
| #2015 | fisherdaddy | 多领域 | **OpenClaw 压缩重试与工具结果缺口处理** | [PR #2015](https://github.com/netease-youdao/LobsterAI/pull/2015) |
| #2022 | liugang519 | `renderer`+`main`+`cowork`+`artifacts` | **HTML 预览体验优化**：源码懒加载、明暗主题适配、文件存在性校验、tab 宽度优化 | [PR #2022](https://github.com/netease-youdao/LobsterAI/pull/2022) |
| #2018 | fisherdaddy | `main`+`openclaw` | **网关稳定性**：token 刷新时避免 OpenClaw gateway 重启 | [PR #2018](https://github.com/netease-youdao/LobsterAI/pull/2018) |
| #2023 | fisherdaddy | 多领域 | **浏览器/WebFetch 稳定性与成功率提升** | [PR #2023](https://github.com/netease-youdao/LobsterAI/pull/2023) |
| #2024 | fisherdaddy | 多领域 | **设置页网关重启优化** | [PR #2024](https://github.com/netease-youdao/LobsterAI/pull/2024) |
| #2031 | fisherdaddy | `renderer`+`main`+`openclaw` | **浏览器配置修复** | [PR #2031](https://github.com/netease-youdao/LobsterAI/pull/2031) |
| #2025 | fisherdaddy | 多领域 | **IM 机器人管理 UI 重设计** | [PR #2025](https://github.com/netease-youdao/LobsterAI/pull/2025) |
| #2028 | fisherdaddy | `renderer`+`im` | **UI 更新** | [PR #2028](https://github.com/netease-youdao/LobsterAI/pull/2028) |

### 技术主线总结

1. **MiniMax-M3 全面适配**（#388 待合并 + #2093 已合并）：模型升级从配置层深入到能力层（图像输入）
2. **MCP/OpenClaw 运行时优化**（#2091, #2015, #2018, #2023, #2024, #2031）：启动速度、稳定性、配置正确性三轮迭代
3. **IM 系统产品化**（#1464 待合并 + #2025, #2028 已合并）：从基础功能走向管理体验与重复校验
4. **Artifacts 体验打磨**（#2092, #2094, #2022）：分享、预览、源码展示全链路优化
5. **安全与权限**（#1962, #1952）：安全监控可管控、macOS 权限有引导

---

## 4. 社区热点

> ⚠️ **异常信号**：今日所有 PR 评论数均为 `undefined`，Issues 活动为零，**公开社区讨论完全缺失**。

| 项目 | 状态 | 分析 |
|:---|:---|:---|
| #388 MiniMax-M3 模型升级 | **待合并**（创建于 2026-03-12，stale 标记） | 3个月前提出的基础配置升级，与今日 #2093 的紧急图像输入修复形成对比，说明模型能力适配存在滞后 |
| #1277 Electron 依赖升级 | **待合并**（Dependabot，2个月前） | Electron 40.2.1 → 42.3.1 跨大版本升级，涉及 2 个目录，存在合并阻力或测试瓶颈 |
| #1464 IM 重复校验 | **待合并**（2个月前） | 钉钉/飞书/QQ 多实例重复添加问题，产品体验缺陷，长期未合可能涉及后端兼容或评审排队 |

**背后诉求推断**：项目以内部迭代节奏为主，社区贡献通道（外部 PR 评审、Issue 反馈）可能未充分开放，或维护团队优先处理内部需求。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 修复 PR | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | MiniMax-M3 图像输入被硬编码禁用，模型能力无法释放 | #2093 | ✅ **已合并**（2026-06-02） |
| 🟡 **中** | OpenClaw gateway token 刷新时意外重启 | #2018 | ✅ **已合并** |
| 🟡 **中** | 浏览器配置失效（`browswer` typo 推测） | #2031 | ✅ **已合并** |
| 🟡 **中** | MCP `npx` 启动慢路径，每次会话重复解析 | #2091 | ✅ **已合并**（优化为预解析） |
| 🟡 **中** | OpenClaw compaction 重试与工具结果缺口 | #2015 | ✅ **已合并** |
| 🟢 **低** | macOS 语音输入权限拒绝后无反馈 | #1952 | ✅ **已合并**（新增 toast 引导） |
| 🟢 **低** | 大文件源码预览卡顿、主题不适配、无效文件 Not Found | #2022 | ✅ **已合并**（懒加载+校验+主题适配） |

**稳定性趋势**：今日合并的修复覆盖模型适配、网关稳定性、工具链性能、权限体验，**无已知未修复高严重度问题**。

---

## 6. 功能请求与路线图信号

| 功能方向 | 信号来源 | 纳入可能性 | 说明 |
|:---|:---|:---|:---|
| **思考层级控制** | #1985（已合并） | ⭐⭐⭐⭐⭐ 已落地 | 六级思考深度，会话级+全局默认，产品差异化功能 |
| **安全监控热切换** | #1962（已合并） | ⭐⭐⭐⭐⭐ 已落地 | `nsp-clawguard` 企业安全场景必需 |
| **子智能体批量管理** | #2095（已合并） | ⭐⭐⭐⭐☆ 成熟中 | 多智能体场景的操作效率优化 |
| **IM 机器人重复校验** | #1464（待合并） | ⭐⭐⭐★☆ 待评审 | 产品体验基础能力，2个月未合需关注 |
| **Electron 42 升级** | #1277（待合并） | ⭐⭐⭐☆☆ 技术债 | 跨版本升级，可能涉及 Breaking Changes |
| **MiniMax-M3 默认模型** | #388（待合并，stale） | ⭐⭐★☆☆ 需激活 | 与 #2093 修复冲突，需协调合并优先级 |

---

## 7. 用户反馈摘要

> ⚠️ **数据缺失**：今日无 Issues 活动，无法从公开渠道提取用户反馈。

**间接推断的用户痛点**（基于修复反向推导）：

| 痛点 | 证据 PR | 场景推断 |
|:---|:---|:---|
| MCP 启动"每次都很慢" | #2091 | 用户频繁切换会话或重启应用，npx 解析成为瓶颈 |
| "分享后不知道链接在哪" | #2094 | 分享成功弹窗信息混乱，关键信息不突出 |
| "子智能体删不干净" | #2095 | 批量删除主智能体时，子智能体残留或网关数据未清理 |
| "语音按钮点了没反应" | #1952 | macOS 用户拒绝权限后无引导，误以为功能损坏 |
| "HTML 预览经常出不来" | #2022 | 大文件或主题切换时预览崩溃/卡顿 |

---

## 8. 待处理积压

| PR/Issue | 创建时间 | 停滞时长 | 风险 | 建议行动 |
|:---|:---|:---|:---|:---|
| #388 [OPEN] MiniMax-M3 默认模型升级 | 2026-03-12 | **82天** | 与 #2093 能力修复重复或冲突，stale 标记 | 评估是否被 #2093 部分覆盖，或协调合并为完整 M3 适配 |
| #1277 [OPEN] Electron 42 升级 | 2026-04-02 | **62天** | 安全更新滞后，Electron 40.x 已知漏洞风险 | 优先安排兼容性测试，或拆分 `electron-builder` 独立升级 |
| #1464 [OPEN] IM 重复校验 | 2026-04-04 | **60天** | 产品体验缺陷持续暴露，多实例功能已上线但无防护 | 加速评审，或确认是否被 #2025 UI 重设计覆盖 |

---

## 附录：项目健康度仪表盘

| 指标 | 数值 | 评估 |
|:---|:---|:---|
| 日 PR 处理量 | 47 条 | 🟢 极高（自动化/批量处理特征） |
| 日 Issues 活动 | 0 条 | 🔴 极低（社区反馈通道关闭或迁移） |
| 待合并 PR 积压 | 3 条 | 🟢 健康（但含 2 条超60天老 PR） |
| 评论互动率 | 0%（undefined） | 🔴 异常（需检查 API 数据或社区运营） |
| 版本发布节奏 | 无近期 release | 🟡 关注（密集提交未形成版本） |

---

*本日报基于 GitHub 公开数据生成，PR 评论数为 `undefined` 可能源于 API 限制或数据未公开，建议核实社区互动真实状态。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-06-03

> **项目**: agentscope-ai/QwenPaw | **日期**: 2026-06-03 | **数据周期**: 过去24小时

---

## 1. 今日速览

CoPaw（QwenPaw）今日社区活跃度**极高**，48个Issues更新、32个PR流转，安全审计成为绝对焦点。单日涌现**7个安全漏洞报告**（均由同一安全研究员提交），其中6个已快速关闭，显示团队安全响应机制运转高效。AgentScope 2.0 迁移进入实质性阶段，相关Breaking Change Issue与重构PR并行推进。Windows桌面端体验问题集中爆发（文件上传、浏览器驱动、多盘符支持），反映桌面用户群体扩大后的适配压力。无新版本发布，但v1.1.11b1版本提升PR已合并，正式版临近。

---

## 2. 版本发布

**无新版本发布**

- 最新Release：无
- 版本提升PR已合并：[PR #4907](https://github.com/agentscope-ai/QwenPaw/pull/4907) `chore(release): bump version to v1.1.11b1`，正式版v1.1.11预计即将发布

---

## 3. 项目进展

### 已合并/关闭的重要PR（9条）

| PR | 作者 | 进展说明 | 链接 |
|:---|:---|:---|:---|
| **#4907** | rayrayraykk | **版本提升**：v1.1.11b1，为正式版发布做准备 | [链接](https://github.com/agentscope-ai/QwenPaw/pull/4907) |
| **#4899** | hongxicheng | **关键修复**：Yuanbao频道proto JSON文件打包缺失，解决认证无限重连 | [链接](https://github.com/agentscope-ai/QwenPaw/pull/4899) |
| **#4883** | jc200808 | **渠道修复**：定时任务消息无法投递至微信/企业微信（share_session=false场景） | [链接](https://github.com/agentscope-ai/QwenPaw/pull/4883) |
| **#4689** | leoleils | **Provider增强**：非标准generate_kwargs路由至extra_body，解决DashScope等参数被静默丢弃 | [链接](https://github.com/agentscope-ai/QwenPaw/pull/4689) |
| **#1317** | listenMyheart | **体验优化**：cloudflared下载状态通知，减少用户等待焦虑 | [链接](https://github.com/agentscope-ai/QwenPaw/pull/1317) |
| **#4853** | wangfei010313 | **Windows稳定性**：浏览器进程树清理+锁文件清理，解决会话残留 | [链接](https://github.com/agentscope-ai/QwenPaw/pull/4853) |

**里程碑意义**：AgentScope 2.0迁移PR [#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846) 已进入Open状态，配合Issue [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)，标志着项目架构升级进入执行阶段。

---

## 4. 社区热点

### 讨论最活跃的Issues（按评论数排序）

| 排名 | Issue | 评论 | 状态 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|:---|
| 1 | **新建会话后Models配置页面丢失** | 6 | 🔴 Open | 数据持久化可靠性，影响用户核心工作流 | [#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666) |
| 2 | **AgentScope 2.0迁移** | 5 | 🔴 Open | 架构现代化，新API/runtime采纳 | [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) |
| 3 | **微信定时任务投递失败** | 5 | ✅ Closed | 企业场景下渠道可靠性 | [#4878](https://github.com/agentscope-ai/QwenPaw/issues/4878) |
| 4 | **未认证API修改全局设置** | 4 | ✅ Closed | 安全审计-访问控制缺失 | [#4908](https://github.com/agentscope-ai/QwenPaw/issues/4908) |
| 5 | **DeepSeek reasoning_content回传失败** | 4 | ✅ Closed | 推理模型兼容性 | [#3985](https://github.com/agentscope-ai/QwenPaw/issues/3985) |

**热点分析**：
- **#4666** 成为最长尾Bug（创建于5月25日，持续6天未解），涉及会话状态管理与前端配置持久化，用户被迫重启应用，严重影响生产力
- **安全研究员YLChen-007** 单日提交7个漏洞，形成"红队测试"效应，推动项目安全基线快速加固

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 描述 | 影响范围 | Fix状态 | 链接 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **P0** | **#4666** 新建会话Models配置丢失 | 配置页面完全不可用，需重启恢复 | 所有新建会话用户 | ❌ 无PR | [#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666) |
| 🔴 **P0** | **#4919** browser_use启动失败 | Managed CDP超时+浏览器闪退，Windows/Mac均受影响 | 浏览器自动化用户 | ❌ 无PR | [#4919](https://github.com/agentscope-ai/QwenPaw/issues/4919) |
| 🟡 **P1** | **#4903** 切换聊天时异常loading | Loading状态失控，滚动时显隐异常 | WebUI用户 | ❌ 无PR | [#4903](https://github.com/agentscope-ai/QwenPaw/issues/4903) |
| 🟡 **P1** | **#4837** v1.1.9系统级fallback回复 | "无法处理您的问题"伪降级，掩盖真实处理能力 | v1.1.9升级用户 | ❌ 无PR | [#4837](https://github.com/agentscope-ai/QwenPaw/issues/4837) |
| 🟡 **P1** | **#4877** Custom channel保存即停止监听 | 端口冲突导致监听丢失，需二次保存恢复 | 自定义渠道用户 | ❌ 无PR | [#4877](https://github.com/agentscope-ai/QwenPaw/issues/4877) |
| 🟡 **P1** | **#4895** 无限图片压缩循环 | 压缩→注入→再压缩，引发幻觉式重复 | 图片上传用户 | ❌ 无PR | [#4895](https://github.com/agentscope-ai/QwenPaw/issues/4895) |
| 🟢 **P2** | **#4898/#4890** Yuanbao proto文件缺失 | 认证失败+无限重连 | Yuanbao频道用户 | ✅ **#4899已合并** | [#4898](https://github.com/agentscope-ai/QwenPaw/issues/4898) |
| 🟢 **P2** | **#4878** 微信定时任务投递失败 | ret=-3错误码，share_session逻辑缺陷 | 微信渠道定时任务 | ✅ **#4883已合并** | [#4878](https://github.com/agentscope-ai/QwenPaw/issues/4878) |

---

## 6. 功能请求与路线图信号

| 功能请求 | 状态 | 纳入可能性 | 关键信号 | 链接 |
|:---|:---|:---:|:---|:---|
| **AgentScope 2.0迁移** | 🔴 Open + PR进行中 | **极高** | Breaking Change标签+官方PR #4846 | [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) |
| **工具定义按需加载** | 🔴 Open | **高** | 量化收益（55-65% token削减），性能优化刚需 | [#4836](https://github.com/agentscope-ai/QwenPaw/issues/4836) |
| **spawn_subagent多模型选择** | 🔴 Open | **中高** | 对标Claude Code模式，成本优化强需求 | [#4901](https://github.com/agentscope-ai/QwenPaw/issues/4901) |
| **Windows多文件拖拽上传** | ✅ Closed | **已实现** | 同日关闭，响应极快 | [#4894](https://github.com/agentscope-ai/QwenPaw/issues/4894) |
| **Windows文件大小限制解除** | ✅ Closed | **已实现** | 本地路径直传，无需网络传输 | [#4893](https://github.com/agentscope-ai/QwenPaw/issues/4893) |
| **侧边栏菜单简化** | 🔴 Open | **中** | 用户体验债务，对标Codex/Claude Desktop | [#4904](https://github.com/agentscope-ai/QwenPaw/issues/4904) |
| **字体大小调节+后台服务** | 🔴 Open（5月9日） | **低** | 长期无响应，优先级被淹没 | [#4154](https://github.com/agentscope-ai/QwenPaw/issues/4154) |

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 反馈来源 | 核心不满 |
|:---|:---|:---|
| **会话管理** | #4666, #4903 | "新建会话丢配置""切换聊天loading失控"——状态管理脆弱，用户信任受损 |
| **Windows桌面体验** | #4893, #4894, #4919, #4906 | 文件上传限制、单盘符锁定、浏览器驱动兼容性——桌面用户"二等公民"感 |
| **企业集成** | #4878, #4898 | 微信/Yuanbao渠道生产环境不稳定，影响业务自动化落地 |
| **成本敏感** | #4836, #4901 | 工具定义冗余token、全量模型调用——"希望能像Claude Code一样聪明地花钱" |

### 正面反馈

- **安全响应速度**：YLChen-007的7个漏洞6个24小时内关闭，社区对团队响应力认可
- **Windows问题快速修复**：#4893/#4894同日提出同日关闭，显示桌面体验优先级提升

---

## 8. 待处理积压

| Issue/PR | 创建日期 | 最后更新 | 积压天数 | 风险说明 | 链接 |
|:---|:---|:---|:---:|:---|:---|
| **#4154 字体大小调节+后台服务** | 2026-05-09 | 2026-06-02 | **25天** | 用户体验基础需求，长期无PR，DPI适配问题影响可及性 | [#4154](https://github.com/agentscope-ai/QwenPaw/issues/4154) |
| **#4551 无损上下文压缩** | 2026-05-20 | 2026-06-02 | **14天** | 长期对话核心痛点，有详细技术方案（DAG摘要+CJK修复），待评估 | [#4551](https://github.com/agentscope-ai/QwenPaw/issues/4551) |
| **#4666 Models配置丢失** | 2026-05-25 | 2026-06-02 | **9天** | **最高优先级**，P0 Bug无修复进展，用户被迫重启 | [#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666) |
| **#4683 Tauri桌面外部链接修复** | 2026-05-26 | 2026-06-02 | **8天** | 桌面端基础功能，PR Open待Review | [#4683](https://github.com/agentscope-ai/QwenPaw/pull/4683) |
| **#4722 小米MiMo Token Plan** | 2026-05-27 | 2026-06-02 | **7天** | 国产模型生态扩展，Provider接入低门槛 | [#4722](https://github.com/agentscope-ai/QwenPaw/pull/4722) |

---

## 附录：数据总览

| 指标 | 数值 | 环比评估 |
|:---|:---|:---|
| Issues更新 | 48条（新开/活跃26，关闭22） | ⚠️ 安全审计驱动异常峰值 |
| PR更新 | 32条（待合并23，已合并/关闭9） | 正常活跃 |
| 版本发布 | 0个 | v1.1.11b1已合并，正式版待发布 |
| 安全漏洞 | 7个报告，6个关闭 | 🔴 安全事件密集 |
| 首次贡献者PR | 4个（#4794, #4804, #4905, #4902） | 社区新鲜血液活跃 |

---

> **分析师备注**：今日数据呈现"安全审计+架构升级+桌面债偿还"三重主题。建议维护者优先处理#4666（P0数据丢失Bug），并关注AgentScope 2.0迁移PR的兼容性测试覆盖。Windows桌面体验问题集群化出现，建议设立专项里程碑。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-06-03

## 1. 今日速览

ZeroClaw 项目今日保持**高强度活跃状态**，24小时内 Issues 更新 49 条（34 活跃/新开，15 关闭）、PR 更新 50 条（33 待合并，17 已合并/关闭），并发布了 **v0.8.0-beta-2** 重大版本。社区聚焦三大主线：**终端体验升级**（zerocode TUI 正式发布）、**多提供商兼容性攻坚**（DeepSeek-V4、Kimi 等国产模型适配）、以及**安全加固**（工具权限绕过、配对码强度等高危修复）。项目整体健康度良好，但 v0.8.0 Stable 发布前仍有 P1 级阻塞项待清理。

---

## 2. 版本发布

### [v0.8.0-beta-2](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.0-beta-2)

**核心亮点：zerocode — 全功能终端 UI**

| 属性 | 详情 |
|:---|:---|
| **定位** | v0.7.5 以来最大版本，v0.8.0 线的第二个 Beta |
| ** headline 功能** | **zerocode**：无需离开终端即可运行和操作 Agent 的全新终端界面 |
| **架构升级** | 多 Agent 运行时（multi-agent runtime）正式落地 |
| **破坏性变更** | 无明确声明；TUI 从 `crates/zeroclaw-tui` 迁移至 `apps/zerocode`（[#6821](https://github.com/zeroclaw-labs/zeroclaw/issues/6821) 已关闭）|
| **迁移注意** | 构建时需确认 `channel-twitter` 已纳入 `default-channels` feature bundle（[#7070](https://github.com/zeroclaw-labs/zeroclaw/pull/7070) 已修复，但预构建二进制文件此前缺失 Twitter/X 支持）|

> **关联追踪**：TUI Agent Chat 实现追踪 [#6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824) 已关闭，ACP 协议扩展（diff/文件提案消息类型）[#6820](https://github.com/zeroclaw-labs/zeroclaw/issues/6820) 已关闭，为 zerocode 提供底层协议支撑。

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR & Issues

| 编号 | 类型 | 内容 | 推进价值 |
|:---|:---|:---|:---|
| [#7070](https://github.com/zeroclaw-labs/zeroclaw/pull/7070) | 修复 | Twitter/X 渠道纳入默认 feature bundle | 解决预构建二进制文件缺失社交渠道的长期痛点 |
| [#6821](https://github.com/zeroclaw-labs/zeroclaw/issues/6821) | 重构 | TUI 库迁移至 `apps/zerocode` | 项目结构规范化，为终端应用长期演进奠基 |
| [#6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824) | 功能 | TUI Agent Chat 追踪完成 | zerocode 核心交互能力交付 |
| [#6820](https://github.com/zeroclaw-labs/zeroclaw/issues/6820) | 协议 | ACP 协议扩展：diff/文件提案消息类型 | 支持终端和 Web 的 side-by-side diff 与反提案编辑 |
| [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | 修复 | DeepSeek-V4 API 格式不兼容（高危）| 国产大模型关键适配，15 轮讨论后关闭 |
| [#7069](https://github.com/zeroclaw-labs/zeroclaw/issues/7069) | 修复 | Twitter/X 预构建二进制缺失 | 文档与构建系统一致性修复 |
| [#6040](https://github.com/zeroclaw-labs/zeroclaw/issues/6040) | 修复 | `<think>` 推理块泄漏至渠道回复 | 渠道响应卫生清理，涉及安全与体验 |
| [#6975](https://github.com/zeroclaw-labs/zeroclaw/issues/6975) | 修复 | `zeroclaw onboard` 配置写入失败 | 新用户入职流程阻塞修复 |
| [#6079](https://github.com/zeroclaw-labs/zeroclaw/issues/6079) | 功能 | `web_dist_dir` 配置自检（`~`/`$HOME` 检测）| 运维体验优化 |
| [#7001](https://github.com/zeroclaw-labs/zeroclaw/issues/7001) | 修复 | 多 Agent 配置 TTS 语音回复解析错误 Agent | 多 Agent 运行时稳定性修复 |
| [#7063](https://github.com/zeroclaw-labs/zeroclaw/issues/7063) | 修复 | 渠道 Agent 绕过工具白名单（高危）| **安全漏洞修复**：`start_channels` 跳过 `apply_policy_tool_filter` |
| [#6977](https://github.com/zeroclaw-labs/zeroclaw/issues/6977) | 功能 | `http_request` 私有主机白名单与 `web_fetch` 对齐 | 安全策略一致性提升 |

**整体进展评估**：v0.8.0-beta-2 的发布标志着终端体验和多 Agent 运行时两大战略方向进入可用阶段，但 Stable 发布仍需清理配置系统、安全策略和渠道兼容性的遗留问题。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | 编号 | 标题 | 评论 | 👍 | 核心诉求分析 |
|:---|:---|:---|:---:|:---:|:---|
| 1 | [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | DeepSeek-V4 API 格式不兼容 | 15 | 4 | **国产模型适配紧迫性**：用户急需 DeepSeek-V4-Pro/Flash 的 thinking mode 兼容，涉及 provider 层的 API 格式解析重构 |
| 2 | [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | Kimi-code provider 流式调用工具报错 | 9 | 1 | **流式推理内容完整性**：`reasoning_content` 缺失导致 400 错误，S1 级工作流阻塞，4 月创建至今未关闭 |
| 3 | [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) | Daemon 节点真实心跳追踪 | 4 | 0 | **分布式运维可靠性**：当前 WS 半开连接无法检测，需从"存在即在线"改为基于最后消息时间的真实状态机 |
| 4 | [#7069](https://github.com/zeroclaw-labs/zeroclaw/issues/7069) | Twitter/X 预构建二进制缺失 | 3 | 0 | **构建系统与文档一致性**：feature 存在但二进制未打包，用户信任受损 |
| 5 | [#6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824) | TUI Agent Chat 追踪 | 3 | 0 | **终端体验期待**：Ratatui 基础的流式响应、工具调用、审批提示渲染 |
| 6 | [#5604](https://github.com/zeroclaw-labs/zeroclaw/issues/5604) | Mattermost 私信 Bot 功能 | 3 | 1 | **企业协作场景扩展**：从频道内交互扩展到 1:1 私信，涉及渠道架构变更 |

**热点洞察**：社区对**中国本土模型生态**（DeepSeek、Kimi）的适配需求极为迫切，已形成最高评论量的议题集群；同时**分布式部署**（心跳、节点注册）和**企业 IM 集成**（Mattermost、Slack）是向生产环境推进的关键瓶颈。

---

## 5. Bug 与稳定性

### 按严重程度排列的今日活跃 Bug

| 严重度 | 编号 | 标题 | 状态 | Fix PR | 风险说明 |
|:---|:---|:---|:---|:---|:---|
| **S1 - 工作流阻塞** | [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | Kimi-code provider 流式调用工具 400 错误 | 🔴 OPEN | 无 | 4 月遗留，Kimi 作为国产主流模型，阻塞生产使用 |
| **S1 - 工作流阻塞** | [#6975](https://github.com/zeroclaw-labs/zeroclaw/issues/6975) | `zeroclaw onboard` 配置写入失败 | 🟢 CLOSED | 已修复 | 新用户入职即遇空配置，体验致命 |
| **S2 - 行为降级** | [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | DeepSeek-V4 API 格式不兼容 | 🟢 CLOSED | 已修复 | thinking mode 解析错误，高危但已解决 |
| **S2 - 行为降级** | [#7068](https://github.com/zeroclaw-labs/zeroclaw/issues/7068) | Telegram 渠道接收 Codex scratchpad 作为最终响应 | 🔴 OPEN | 无 | 内部工具转录泄漏给用户，体验与安全问题并存 |
| **S2 - 行为降级** | [#5795](https://github.com/zeroclaw-labs/zeroclaw/issues/5795) | XML tool_result 标签泄漏至渠道响应 | 🔴 OPEN | [#5796](https://github.com/zeroclaw-labs/zeroclaw/pull/5796) | Gemini 等模型返回格式未过滤，PR 待合并 |
| **S2 - 行为降级** | [#7001](https://github.com/zeroclaw-labs/zeroclaw/issues/7001) | TTS 语音回复解析错误 Agent | 🟢 CLOSED | 已修复 | 多 Agent 配置下静默失效 |
| **S3 - 功能缺失** | [#7069](https://github.com/zeroclaw-labs/zeroclaw/issues/7069) | Twitter/X 预构建二进制缺失 | 🟢 CLOSED | [#7070](https://github.com/zeroclaw-labs/zeroclaw/pull/7070) | 文档承诺与实际交付不一致 |
| **S3 - 轻微问题** | [#7038](https://github.com/zeroclaw-labs/zeroclaw/issues/7038) | `zeroclaw check` WebSocket 401 | 🔴 OPEN | 无 | 认证配置有效但健康检查失败，诊断困难 |
| **S3 - 轻微问题** | [#7005](https://github.com/zeroclaw-labs/zeroclaw/issues/7005) | Quickstart CLI 裸字符串残留 | 🔴 OPEN | 无 | 国际化与专业度受损 |

**安全专项**：[#7063](https://github.com/zeroclaw-labs/zeroclaw/issues/7063)（渠道 Agent 绕过工具白名单）今日关闭，该漏洞允许通过 `start_channels` 启动的 Agent 无视 `SecurityPolicy.allowed_tools` 限制，属于**权限提升级风险**，修复对生产部署至关重要。

---

## 6. 功能请求与路线图信号

### 高优先级功能请求（结合 PR 状态判断纳入可能性）

| 编号 | 标题 | 优先级 | 状态 | 关联 PR | v0.8.1 纳入可能性 |
|:---|:---|:---:|:---|:---|:---:|
| [#7117](https://github.com/zeroclaw-labs/zeroclaw/issues/7117) | 配置 UX 跨表面一致性（CLI/Quickstart/zerocode/Web）| - | 🔴 NEW | 无 | ⭐⭐⭐⭐⭐ 刚创建，由核心维护者 singlerider 发起，v0.8.0/0.8.1 核心目标 |
| [#7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112) | **v0.8.0 发布队列与 Stable 阻塞项追踪** | P1 | 🔴 NEW | 多个 | ⭐⭐⭐⭐⭐ 发布协调中枢，必纳入 |
| [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) | v0.8.1 集成/渠道/提供商/工具 PR 队列 | P2 | 🔴 OPEN | 多个 | ⭐⭐⭐⭐⭐ 已建立追踪机制 |
| [#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) | 强化配对码（6位数字→32位字母数字）| P1 | 🔴 OPEN | 无 | ⭐⭐⭐⭐☆ 安全基线提升，用户呼声明确 |
| [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) | Daemon 节点真实心跳追踪 | P2 | 🔴 BLOCKED | 无 | ⭐⭐⭐☆☆ 被阻塞，需 WS 层架构调整 |
| [#6390](https://github.com/zeroclaw-labs/zeroclaw/issues/6390) | `zeroclaw node add <url>` CLI 远程注册 | P2 | 🔴 BLOCKED | 无 | ⭐⭐⭐☆☆ 与 #6391 依赖关系，需协同交付 |
| [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) | 气隙执行模式 + Unix Socket 隔离 | P2 | 🔴 BLOCKED | 无 | ⭐⭐☆☆☆ 高安全场景，架构复杂，长期路线 |
| [#5604](https://github.com/zeroclaw-labs/zeroclaw/issues/5604) | Mattermost 私信 Bot | P2 | 🔴 OPEN | 无 | ⭐⭐⭐☆☆ 企业场景，渠道架构扩展 |
| [#7113](https://github.com/zeroclaw-labs/zeroclaw/issues/7113) | Slack 生命周期进度可见性 | - | 🔴 NEW | 无 | ⭐⭐⭐⭐☆ 用户体验优化，实现成本可控 |
| [#7089](https://github.com/zeroclaw-labs/zeroclaw/issues/7089) | Windows Shell 主机可配置（PowerShell/Git Bash/cmd）| P2 | 🔴 NEW | 无 | ⭐⭐⭐☆☆ 跨平台体验，社区贡献入口 |

**路线图信号**：
- **v0.8.0 Stable 阻塞项**：配置系统 schema 清理、tool-call-parser Stable 层级提升、运行时/提供商配置正确性（[#7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112)）
- **v0.8.1 主题**：渠道/提供商/工具/集成扩展（[#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)），WASI 插件接口定义已启动（[#7060](https://github.com/zeroclaw-labs/zeroclaw/pull/7060)）
- **长期架构**：FND-001  intentional architecture（WIT 接口文件）、Plugins 目录替代 Integrations（[#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489)）

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心反馈 |
|:---|:---|:---|
| **国产模型接入** | [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059), [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | DeepSeek/Kimi 的 reasoning/thinking mode 格式解析是"最后一公里"难题，用户被迫在模型选择和功能完整性间取舍 |
| **新用户入职** | [#6975](https://github.com/zeroclaw-labs/zeroclaw/issues/6975) | `zeroclaw onboard` 交互完成但配置未落地，"看起来成功了，实际没生效"比报错更挫败 |
| **渠道响应卫生** | [#6040](https://github.com/zeroclaw-labs/zeroclaw/issues/6040), [#5795](https://github.com/zeroclaw-labs/zeroclaw/issues/5795), [#7068](https://github.com/zeroclaw-labs/zeroclaw/issues/7068) | 推理块、XML 工具结果、内部 scratchpad 反复泄漏到用户可见渠道，"像看到后台日志" |
| **分布式运维** | [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) | "节点显示在线但 WS 已死"，缺乏真实心跳导致故障排查方向错误 |
| **构建系统信任** | [#7069](https://github.com/zeroclaw-labs/zeroclaw/issues/7069) | 文档说支持 Twitter/X，下载的二进制没有，"文档和代码谁说了算？" |

### 满意点

- **zerocode TUI** 被期待为"无需离开终端"的完整体验，Ratatui 技术选型获认可
- **ACP 协议扩展** 的 diff/反提案能力被视为"终于有人把代码审查交互做进 Agent 协议"

---

## 8. 待处理积压

### 需维护者重点关注的长尾议题

| 编号 | 标题 | 创建时间 | 最后更新 | 阻塞原因 | 建议行动 |
|:---|:---|:---:|:---:|:---|:---|
| [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | Kimi-code provider 流式调用 400 错误 | 2026-04-10 | 2026-06-02 | 技术复杂，reasoning_content 协议对齐 | 指派 provider 核心维护者，或纳入 v0.8.1 专项 |
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | 153 commits 批量回滚审计追踪 | 2026-04-24 | 2026-06-02 | 历史债务，需逐 commit 评估恢复价值 | 建立社区认领机制，按模块拆分恢复任务 |
| [#5795](https://github.com/zeroclaw-labs/zeroclaw/issues/

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*