# OpenClaw 生态日报 2026-08-19

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-08-18 23:11 UTC

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

# OpenClaw 项目动态日报 — 2026-08-19

## 1. 今日速览

过去 24 小时项目活跃度处于**极高水平**：共 500 条 Issue 更新（其中 462 条新开或活跃、38 条关闭），500 条 PR 更新（333 条待合并、167 条已合并/关闭），说明社区提交与维护者处理双线并行。今日无新版本发布。值得关注的是，**多个 P1 级回归 Bug（如 Matrix 无限重启、事件循环周期性阻塞）在今日集中出现**，同时维护者也提交了对应修复 PR（如 #126059 修复工作区迁移阻塞、#126069 修复 Tailscale 升级后崩溃循环），项目处于"高活跃度 + 高积压"状态：PR 待合并池达 333 条，Issue 活跃池超 460 条。

---

## 2. 版本发布

无。

---

## 3. 项目进展

今日合并/关闭了 167 条 PR，覆盖**安全策略、CLI 生命周期、UI 稳定性、开发工具链**等多个方向，重点如下：

- **安全策略确认机制落地（[PR #116489](https://github.com/openclaw/openclaw/pull/116489)）**：`security.installPolicy` 命令新增 `warn` 返回类型，交互式 CLI 安装时要求操作者确认可疑插件/技能安装，强化供应链安全边界。
- **会话托管（session-host）接入准备（[PR #125879](https://github.com/openclaw/openclaw/pull/125879)）**：`openclaw connect --service` 新增 worker 会话托管同意路径，为全新机器场景提供一站式引导，替代原先假设 Node/npm 已安装的 one-paste 命令。
- **在线侧边栏 UI 体验改进（[PR #126061](https://github.com/openclaw/openclaw/pull/126061)）**：稳定 Plugins hub 导航，修复 Installed/Discover/Skills/Workshop 切换时标题、标签宽度、对齐方式、滚动归属不一致的问题。
- **开发工具链修复（[PR #126060](https://github.com/openclaw/openclaw/pull/126060)）**：恢复 release validation 技能中的 oxfmt 格式化，修复 `check-docs` 在 main 分支持续变红的问题。
- **在线成员列表可折叠（[PR #126032](https://github.com/openclaw/openclaw/pull/126032)）**：Online roster 改为标准侧边栏折叠区块，释放竖向空间，避免长列表把会话导航挤出可视区。

**整体判断**：项目在"安全基线加固、安装/托管流程完善、UI 精细化"三个维度持续推进，但协议层/状态层的重构（如会话 activeRunIds 清理 [PR #125983](https://github.com/openclaw/openclaw/pull/125983)、Codex 轨迹修复 [PR #126050](https://github.com/openclaw/openclaw/pull/126050)）仍处于等待审核/等待作者状态，离合入还有距离。

---

## 4. 社区热点

今日讨论最活跃的 Issues（按评论数排序）：

- **[Issue #80319](https://github.com/openclaw/openclaw/issues/80319) — QA tool-defaults suite conflates Codex-native tools with OpenClaw dynamic tool parity（17 条评论）**：核心争议是 QA 测试框架将 Codex 原生工具与 OpenClaw 动态工具混为一谈，报告方已自行更正结论——并非 Codex 运行时大规模丢弃工具调用，而是 QA harness 的 mock provider 问题。**社区诉求**：测试基础设施需要更精确地区分两层工具语义。

- **[Issue #112423](https://github.com/openclaw/openclaw/issues/112423) — 大型 SQLite transcript 清理阻塞网关事件循环（15 条评论，P1）**：归档大 SQLite transcript 时，完整物化、压缩、持久化 I/O 与回读全在网关线程执行，导致事件循环卡死。**社区诉求**：cleanup 路径必须异步化或分片。

- **[Issue #62505](https://github.com/openclaw/openclaw/issues/62505) — Coding Agent 从不完成任何工作（15 条评论，P1 回归，自 2026.4.2 起）**：用户报告配置好的编码代理只会输出模糊状态更新然后道歉，从不实际完成任务。这一条已经连续 4 个月未关闭，社区持续跟帖提供复现信息。**社区诉求**：回归问题需要更高优先级和更清晰的修复计划。

- **[Issue #38327](https://github.com/openclaw/openclaw/issues/38327) — google-vertex/gemini-3.1-pro-preview 报 "Cannot convert undefined or null to object"（14 条评论，P1 回归）**：2026.3.2 版本起任何消息都会让嵌入式 agent 失败。**社区诉求**：尽快修复或至少给出可行的版本回退指引。

- **[Issue #79902](https://github.com/openclaw/openclaw/issues/79902) — 为 database-first runtime 添加 SQLite transcript/session 友好接口（14 条评论，P3 Feature）**：高级用户希望基于规范运行状态构建应用，而非解析不透明 blob。**社区诉求**：开放稳定的运行时数据访问层。

---

## 5. Bug 与稳定性

今日报告的 Bug/回归问题按严重程度排列（⭐ 为今日新增）：

### 🔴 P1 严重级

| Issue | 问题 | 状态 | Fix PR |
|---|---|---|---|
| [#125679 ⭐](https://github.com/openclaw/openclaw/issues/125679) | Matrix 频道新账号/新房间初始同步永不完成，无限重启循环（回归，已 bisect 到 #125302） | Open，无 workaround | ❌ 无 |
| [#124788](https://github.com/openclaw/openclaw/issues/124788) | beta.2 网关事件循环每 ~10.9 分钟阻塞 ~100–120s，WebSocket 断连、HTTP /ready 无响应、cron 停摆；禁用所有 memory 插件仍复现 | Open，影响 2026.8.1-beta.2 用户 | ❌ 无 |
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | Coding Agent 完全不执行任务（回归，2026.4.2 起） | Open 4 个月，标记 `needs-maintainer-review` | ❌ 无 |
| [#111498](https://github.com/openclaw/openclaw/issues/111498) | Anthropic 认证恢复后持久 workspace-state 迁移阻塞主 agent，TUI 和 CLI 均被卡住 | Open | ✅ [PR #126059](https://github.com/openclaw/openclaw/pull/126059)（今日提交，关闭 #111498） |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | 大型 SQLite transcript 清理阻塞网关事件循环（未崩溃但行为异常） | Open | ❌ 无 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | google-vertex/gemini-3.1-pro-preview 全部消息失败 | Open 5 个月 | ❌ 无 |

### 🟡 P2 中级

| Issue | 问题 | 状态 |
|---|---|---|
| [#84516](https://github.com/openclaw/openclaw/issues/84516) | Codex app-server 长回复在 ~1000-1100 字符处静默截断（stop=null, aborted=false） | Open，影响 gpt-5.5 用户 |
| [#88657](https://github.com/openclaw/openclaw/issues/88657) | DeepSeek V4 Flash 2026.5.27/28 出现不完整 turn（2026.5.26 正常） | Open，等待二分定位 |
| [#91144](https://github.com/openclaw/openclaw/issues/91144) | Windows 原生 CLI 网关 Scheduled Task 无法保持运行（前台窗口正常） | Open，已链接 PR |
| [#94939](https://github.com/openclaw/openclaw/issues/94939) | 6.x 状态迁移导致频道 conversation-store SQLite 空文件（0 bytes），Teams 主动消息中断 | Open，已链接 PR |
| [#103231](https://github.com/openclaw/openclaw/issues/103231) | `claude-cli` 后端 `ownsNativeCompaction` 假设不成立，会话无压缩、无恢复 | ✅ **今日已关闭** |
| [#79614](https://github.com/openclaw/openclaw/issues/79614) | assistant 草稿在工具调用后可忽略最新用户消息（stale-reply re-anchoring） | ✅ **今日已关闭**（stale） |

### 🟢 P3 轻微

| Issue | 问题 | 状态 |
|---|---|---|
| [#75782](https://github.com/openclaw/openclaw/issues/75782) | embedded-run auth 阶段同步阻塞 10–15s，与认证配置无关 | Open，`not-repro-on-main` |
| [#62328](https://github.com/openclaw/openclaw/issues/62328) | node:sqlite 未编译 FTS5，memory 关键词搜索静默降级 | Open，已链接 PR |

---

## 6. 功能请求与路线图信号

今日活跃的功能请求反映了社区对**架构开放性和可扩展性**的强烈需求，按潜在纳入版本的可能性排序：

### 高可能性（与现有 PR 直接呼应）

- **[动态模型发现（Issue #10687）](https://github.com/openclaw/openclaw/issues/10687)**：社区要求 OpenRouter 等快速迭代目录实现完全动态模型发现。今日 [PR #126068](https://github.com/openclaw/openclaw/pull/126068) 修复了"models.providers 配置项仅固定 sizing 字段时模型被降级为纯文本输入"的问题，说明维护者正在这一方向布局。
- **[子代理完成隔离（Issue #96975）](https://github.com/openclaw/openclaw/issues/96975)**：要求子代理完成默认只返回状态 + 子会话链接，不注入全部内容。今日 [PR #126062](https://github.com/openclaw/openclaw/pull/126062) 修复子代理完成分发丢失 Gateway 实例的问题，二者同属子代理生命周期完善。

### 中可能性（有讨论热度，暂无 PR）

- **[Per-Agent TTS/STT 配置（Issue #66252）](https://github.com/openclaw/openclaw/issues/66252)**：多语言/多语音场景下全局 TTS/STT 配置不够用，9 条评论持续要求按 agent 覆盖。
- **[SQLite transcript/session 开放接口（Issue #79902）](https://github.com/openclaw/openclaw/issues/79902)**：14 条评论，P3，社区希望基于 database-first runtime 构建兼容层。
- **[Agent 自主触发上下文压缩（Issue #6757）](https://github.com/openclaw/openclaw/issues/6757)**：agent 自主调用 self-compact 工具，减少人工介入。
- **[Multi-Slot Memory 架构（Issue #60572）](https://github.com/openclaw/openclaw/issues/60572)**：多内存槽并行，7 条评论 + 3 👍。
- **[自托管 STT/TTS 进 WebChat（Issue #45508）](https://github.com/openclaw/openclaw/issues/45508)**：WebChat 的 Read aloud / Voice input 目前完全忽略 openclaw.json 中的 TTS/STT 配置，2 👍 + 7 条评论。

### 低可能性（信号弱）

- **[Kubernetes 文档改进（Issue #91455）](https://github.com/openclaw/openclaw/issues/91455)**：排版/表述细节问题。
- **[Image generation 用量元数据捕获（Issue #85461）](https://github.com/openclaw/openclaw/issues/85461)**：范围较大，无明确优先级。

---

## 7. 用户反馈摘要

从今日活跃 Issues 评论中提炼的真实痛点：

- **"编码代理什么都不做"已成为长期痛点**（[#62505](https://github.com/openclaw/openclaw/issues/62505)）：用户原话 *"doesnt do anything apart from vague status updates (and then apologies for the vagueness)"* —— 代理输出道歉但从不交付结果。4 个月未修复，用户信任度受损。
- **静默截断最令人困惑**（[#84516](https://github.com/openclaw/openclaw/issues/84516)）：模型未中止、无错误码、`stopReason` 全为 null，但回复在 1000 字符处断句。用户难以区分"模型问题"还是"产品问题"。
- **cron 覆盖文件导致数据丢失**（[#40001](https://github.com/openclaw/openclaw/issues/40001)）：隔离的 cron 会话用 `write` 工具覆盖共享文件（如 `memory/YYYY-MM-DD.md`），而非追加。用户原话 *"causes silent data loss when multiple sessions..."* —— 这是数据安全级别的缺陷。
- **Windows 本地体验缺失**（[#91144](https://github.com/openclaw/openclaw/issues/91144)）：前台 PowerShell 中网关正常，但 Scheduled Task 拉起后无法保持运行。Windows 用户被迫依赖前台窗口。
- **迁移过程"静默损坏"**（[#94939](https://github.com/openclaw/openclaw/issues/94939)）：6.x 迁移把 JSON 改名 `.migrated`、新 SQLite 却 0 字节，且没有报错——用户原话 *"orphans references"*，破坏 Bot Framework 主动消息。
- **Doctor 警告无法消除**（[#60612](https://github.com/openclaw/openclaw/issues/60612)）：Doctor 抱怨网关用了 NVM node 而非系统 node，但 OpenClaw 每次重启都会重新生成 launchd plist 并用 NVM 路径，手动修改无效——提示本身不可操作。

---

## 8. 待处理积压

以下为长期未关闭、且对用户影响较大的 Issue/PR：

### ⚠️ 高优先级积压（P1，超过 60 天未关闭）

| 项目 | 创建时间 | 标签 | 说明 |
|---|---|---|---|
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | 2026-04-07 | P1, regression, `needs-maintainer-review` | Coding Agent 完全失效，4 个月+ |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | 2026-03-06 | P1, regression | google-vertex 全量失败，5 个月+ |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | 2026-03-08 | P1, data-loss | write 工具无追加模式，cron 覆盖文件，5 个月+ |
| [#111498](https://github.com/openclaw/openclaw/issues/111498) | 2026-07-19 | P1, regression | workspace-state 迁移阻塞主 agent——**今日已有修复 PR #126059，等待合并** |
| [#91144](https://github.com/openclaw/openclaw/issues/91144) | 2026-06-07 | P1, crash-loop | Windows Scheduled Task 网关无法保持运行（已链接 PR） |

### ⚠️ P1 今日新增但需快速跟进

- [#125679](https://github.com/openclaw/openclaw/issues/125679)（Matrix 无限重启，已 bisect）— 无 fix PR，需维护者确认修复方向。
- [#124788](https://github.com/openclaw/openclaw/issues/124788)（beta.2 每 10 分钟阻塞 100 秒）— 影响 2026.8.1-beta.2 用户，无 PR，建议优先处理。

### 📌 长期 open 的功能类 PR（等待维护者决策）

- [PR #123209](https://github.com/openclaw/openclaw/pull/123209)（channel schema 所有权跟随 preferOver 替换，XL 级，等待作者响应）
- [PR #125983](https://github.com/openclaw/openclaw/pull/125983)（移除客户端可见 activeRunIds，XL 级，等待作者响应）
- [PR #125992](https://github.com/openclaw/openclaw/pull/125992)（安装生命周期避免"成功但未完成"，XL 级，等待审核）

---

**日报总结**：OpenClaw 社区活跃度处于高位，但 P1 级回归 Bug 的修复速度未能跟上新问题涌现的速度。积极信号是维护者今日密集提交了针对旧 Issue 的修复 PR（#111498、#125390 对应 #126069），且 session 模型、Codex 轨迹、UI 语义等结构性改进正在推进。建议维护者优先处理今日新增的两个 P1 阻塞类 Bug（#125679、#124788），并对已挂 4-5 个月的高频回归（#62505、#38327）给出明确的修复计划或状态更新，以维持社区信任。

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**日期：2026-08-19**


## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态正处于**高活跃度的密集迭代期**，核心项目日均 PR 更新量达到 20-50 条量级，围绕“安全基线加固、会话/记忆可靠性、多引擎可插拔架构、跨平台兼容性”四大方向快速演进。头部项目（OpenClaw、Hermes Agent、CoPaw、ZeroClaw）的社区规模与活跃度形成明显的第一梯队，同时 NanoClaw、IronClaw、LobsterAI 等垂直/衍生项目通过架构重构与差异化定位切入细分场景。值得警惕的是，**P1 级回归 Bug 的修复速度在各项目中普遍落后于新问题涌现速度**——OpenClaw 的 4-5 个月未关闭高频回归（#62505、#38327）、ZeroClaw 的 wasmtime CVE 未对齐、CoPaw 的 MCP 传输层 24-41 天无修复等，说明生态在快速扩张的同时，稳定性债正在累积。


## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃） | PR（待合并/合并关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（462 新开/活跃） | 500（333 待合并/167 合并） | 无 | 极高活跃 + 高积压；P1 回归集中出现，修复速度滞后于问题增速 |
| **Hermes Agent** | 50（40 新开/活跃） | 50（42 待合并/8 合并） | **v0.20.4** | 高活跃高产出；P2 级 bug 积压偏多，安装回归影响新用户 |
| **ZeroClaw** | 50（32 新开/活跃） | 50（18 待合并/32 合并） | 无 | 高活跃、合并效率高；但多处 PR 阻塞（needs-author-action / do-not-merge） |
| **CoPaw** | 46（30 新开/活跃） | 50（31 待合并/19 合并） | 无 | 中高活跃；first-time-contributor 生态向好；MCP 层稳定性积压明显 |
| **NanoClaw** | 1 新开 | 41（23 待合并/18 合并） | 无 | 高活跃（PR 侧）；数据库异步化重构主线清晰，待合并队列较长 |
| **IronClaw** | 21（15 新开/活跃） | 38（24 待合并/14 合并） | **v1.3.0-rc.1 & rc.2** | 健康度良好；24h 内完成 crash 修复闭环，修复速度 > 问题暴露速度 |
| **LobsterAI** | 9（历史 stale 更新） | 17+（含合并） | **2026.8.18** | 密集发布合并期；2 个 P0 修复落地；9 个 stale issue 需批量 triage |
| **NanoBot** | 9（6 新开/活跃） | 22（16 待合并/6 合并） | 无 | 高活性、响应快；安全 Issue（#4797 无资源限制）无主 6 周+ |
| **PicoClaw** | 6（5 活跃） | 4（2 待合并/2 合并） | 无 | 中等活跃；无高危新增，存量 PR 推进中 |
| **Moltis** | —（2 关闭） | 6（1 待合并/5 合并） | **20260818.06** | 健康、闭环效率高；功能版图持续扩张 |
| **NullClaw / ZeptoClaw** | — | — | — | 无活动 |


## 3. OpenClaw 在生态中的定位

**OpenClaw 是当前生态中社区规模最大、活跃度最高的核心参照项目**，其单日 500 条 Issue + 500 条 PR 的活动量级是第二梯队（Hermes/ZeroClaw/CoPaw 约 50 条）的 10 倍，呈现出明显的主干项目特征。技术路线上，OpenClaw 与其他项目相比的核心差异在于：

- **协议层/状态层重构深度**：OpenClaw 正在推进 session activeRunIds 清理、Codex 轨迹修复等结构性改造，而非仅停留在功能表面；而 Hermes、CoPaw 等更多聚焦于具体功能补全与 bug 修复。
- **安全基线先行**：`security.installPolicy` 确认机制、供应链安全边界强化，说明 OpenClaw 在规模化用户基数下将信任与安全放在首位。
- **生态辐射效应**：NanoClaw、IronClaw、LobsterAI 等项目的架构调整均明确参照或兼容 OpenClaw 的网关/配置体系——LobsterAI 修复 OpenClaw 网关非法字段兼容、IronClaw 的 omt 工具面收敛与 OpenClaw 动态工具语义形成呼应。

**社区规模对比**：OpenClaw（500/day）> ZeroClaw ≈ Hermes ≈ CoPaw（~50/day）> NanoClaw ≈ IronClaw ≈ LobsterAI（20-40/day）> NanoBot ≈ PicoClaw ≈ Moltis（<10/day）。OpenClaw 的 P1 积压问题（4-5 个月未关闭的高频回归）与其超大规模社区形成张力，是当前生态中最值得关注的风险点。


## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **会话/记忆可靠性** | OpenClaw（#62505 编码代理不完成任务、#112423 SQLite 阻塞）、NanoBot（#5372 跨会话记忆缺失）、IronClaw（#7185 跨会话记忆不可靠、#7731 Mnesis 集成）、CoPaw（#6921 任务自动中断需手动“继续”）、ZeroClaw（#9998 Session-scoped prompt attachments）、LobsterAI（#1632 切换模型后 skill 失效） | 多项目用户共同面临“代理不持久、记忆不可靠、任务半途而废”的核心痛点，持久化上下文与自主任务恢复是生态最强烈的共性需求 |
| **MCP 连接与传输层稳定性** | CoPaw（#6470 硬编码 SSE、#5900 无自动重连、#7053 OAuth2 轮换不持久化）、NanoBot（#5425 socks:// 代理兼容）、Hermes（#69255 provider_model_ids 吞错） | MCP 服务器连接失败/重连缺失/认证轮换失效成为多项目共性问题，协议兼容层的工程质量亟待提升 |
| **Windows 平台体验** | OpenClaw（#91144 Scheduled Task 无法保持运行）、Hermes（#73403 Windows ACP 挂起、#89542 Windows 维护）、ZeroClaw（#7462 Windows 74 个测试失败）、NanoBot（#5417/#5418/#5424/#5427 五个 Windows 相关 PR）、LobsterAI（#2481 统一 mac/win 样式） | Windows 作为重要用户环境，在多项目中同时暴露安装、CI、运行时稳定性、TUI 体验等多维度摩擦，正成为各项目集中修补的战场 |
| **安全加固与资源治理** | OpenClaw（installPolicy 确认机制）、NanoBot（#4797 子进程无资源限制）、ZeroClaw（#10070 SSRF 门禁、#8519 CVE 审计）、Hermes（#54354 Docker 首次调用在宿主机执行）、NanoClaw（#3339 登录 fail-open 修复）、CoPaw（#6775 安全误报） | 从供应链安全、命令执行沙箱、网络请求门禁到凭证管理，安全边界问题在各项目中同步凸显，标志生态从功能竞争进入信任竞争阶段 |
| **数据库异步化/可移植化** | NanoClaw（#3320-#3337 数据库异步与可移植驱动重构）、OpenClaw（#112423 事件循环阻塞）、IronClaw（#7714 libSQL 写通道饥饿） | 多个项目在同步阻塞型存储上遭遇性能/稳定性瓶颈，向异步化、可插拔驱动（Postgres/MySQL 等）演进成为架构升级的明确方向 |
| **安装与升级体验** | OpenClaw（#125879 session-host 引导）、Hermes（#87093 Debian 安装失败、#89533 libatomic1）、IronClaw（#7720 rc.1 升级崩溃）、LobsterAI（#1626 OpenClaw 网关兼容）、Moltis（#1209 配置静默重置） | 新用户安装受阻、升级路径崩溃、配置静默失效等“第一公里”问题持续消耗用户信任 |
| **多引擎/多 Provider 可插拔架构** | LobsterAI（dsh 引擎接入、社区请求 hermes-agent）、NanoBot（#5234 MST provider、#5419 DashScope）、PicoClaw（#1158 Anthropic 原生协议）、CoPaw（#7062 per-agent reasoning_effort） | 用户不再满足于单一模型后端，对模型/引擎/搜索 provider 的灵活接入和细粒度配置需求持续上升 |
| **WebUI/桌面端深度** | PicoClaw（#806 WebUI 支持）、Moltis（#1206 Files 库、#1210 Tesla 连接器）、CoPaw（#7072 后台任务列表 API）、Hermes（#88680 连接×profile 路由架构）、OpenClaw（#126061 在线侧边栏 UI） | 从 TUI/CLI 向图形界面、从单任务向多任务可视化管理演进，产品形态正在向更广泛的非技术用户扩展 |


## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全功能个人 AI 助手（多频道、插件生态、安全策略、会话托管） | 开发者和 prosumer，追求高度可定制与生态扩展 | 多语言/多运行时网关；强调协议层与状态层重构；大型插件市场 |
| **Hermes Agent** | 桌面端优先的 AI 助手（Bot Mode、桌面 UI、v0.20.4 patch 节奏） | 桌面用户、Bot 自动化场景 | Electron 桌面壳 + 网关；Bot Mode 多 profile 会话管理是当前重点；发布节奏快（~2 周/版本） |
| **ZeroClaw** | 开发者基础设施型助手（ZeroCode TUI、channel runtime、RFC 驱动） | 开发者/DevOps，注重可编程性与安全策略 | 多 runtime 统一（agent turn 引擎、SkillForge）；RFC 治理流程完善；安全/CI 治理文档系统化 |
| **CoPaw** | 企业协作场景 AI（飞书/钉钉/Matrix 集成、MCP 生态、沙盒） | 企业团队、多频道协作场景 | 对国内 IM 深度集成（飞书/钉钉）是其鲜明差异；沙盒 + 插件权限控制；向企业级控制平面演进（#7112） |
| **IronClaw** | 高性能自治 Agent（Reborn 运行时、PinchBench 基准、自动化任务） | 高端技术用户、自动化运维场景 | Rust 技术栈、libSQL 后端、资源治理器；v1.3.0 重点解决自动化任务执行语义（#6879） |
| **NanoClaw** | 轻量多渠道助手（Telegram/Slack/Webex 等） | 中小团队、自托管用户 | 数据库层正在从 better-sqlite3 向异步可插拔驱动重构；Slack 身份边界安全加固 |
| **LobsterAI** | 桌面 GUI 客户端聚合（多 AI 引擎：OpenClaw/dsh） | 桌面重度用户、多模型工作流 | 定位为“AI 引擎前端”，通过多引擎可插拔架构降低模型锁定；Electron 桌面端 |
| **NanoBot** | 极简轻量 Agent（WebUI 优先、Python 技术栈） | 个人开发者、快速原型验证 | 轻量级依赖；WebUI 优先策略；无重型插件体系 |
| **PicoClaw** | 轻量级多渠道助手（IRC 深度支持） | IRC/极简环境用户 | 专注 IRC 协议语义完整性；较小体量、低资源占用 |
| **Moltis** | 本地优先 AI 工作台（桌面端 + 连接器生态） | 本地优先/隐私敏感用户 | Podman/Docker 沙箱深度支持；连接器（snapshot 存储）模式扩展外部数据源；Files 库持久化管理 |


## 6. 社区热度与成熟度

**第一梯队：超大规模、主干生态（日 PR/Issue 500 级）**
- **OpenClaw**：生态核心，社区规模一骑绝尘；当前处于“高活跃 + 高积压”的张力期，P1 回归悬而未决时长（4-5 个月）值得警惕。成熟度：迭代极快但稳定性债显著。

**第二梯队：高活跃、快速迭代（日 PR/Issue 40-50 级）**
- **Hermes Agent**：发布节奏最稳定（patch 版本定期）；处于功能快速扩张期，但 P2 级 bug 积压偏多。健康度 B+。
- **ZeroClaw**：RFC/治理流程最完善，合并效率高；但多个功能型 PR 长期处于等待作者/Do-Not-Merge 状态，评审带宽不足。健康度 B+。
- **CoPaw**：外部贡献者生态（first-time-contributor）活跃，社区正循环形成中；MCP 传输层稳定性是最大短板。健康度 B。

**第三梯队：中高活跃、架构升级期（日 PR 20-40 级）**
- **NanoClaw**：处于密集架构重构期（数据库异步化），内部主线清晰但外部社区参与度相对有限；23 个待合并 PR 对维护者带宽构成压力。健康度 B。
- **IronClaw**：闭环效率最高（24h 内 crash 报告→修复→release），修复速度快于问题暴露速度；处于 rc 周期。健康度 A-。
- **LobsterAI**：密集发布与合并期，P0 修复节奏好；但 9 个 4 月 stale issue 未回应，社区沟通需加强。健康度 B+。

**第四梯队：中低活跃、精耕细作（日 PR <10）**
- **NanoBot**：社区响应快但规模有限；唯一安全高危（#4797）无主 6 周。健康度 B。
- **PicoClaw / Moltis**：小体量但闭环效率良好；Moltis 无积压、PicoClaw 有明确 roadmap 但推进缓慢。健康度 B / A-。


## 7. 值得关注的趋势信号

### 信号一：从“对话型助手”到“自主任务执行体”的范式转移
CoPaw #6921（多步骤任务自动中断）、OpenClaw #62505（编码代理从不完成任务）、IronClaw #6879（自动化运行一致性）——三大项目同时被“代理无法自主完成任务”的投诉困扰。这不是孤例，而是**整个生态从“聊天机器人”向“自主 Agent”转型过程中的系统性阵痛**。对于开发者而言，计划-执行的状态衔接、任务的确定性语义、失败的自愈恢复机制，将是下一阶段 Agent 框架的核心竞争点。

### 信号二：记忆/上下文持久化成为最大共性痛点，也是下一个架构分水岭
OpenClaw（SQLite transcript 阻塞）、IronClaw（Mnesis 集成、跨会话记忆不可靠）、NanoBot（ViBo 集成提案）、ZeroClaw（Session-scoped prompt attachments）等多个项目在同一天出现记忆可靠性相关讨论，说明**长期记忆已从“特性需求”升级为“基础能力需求”**。谁能率先提供可靠、可审计、可移植的工作记忆层，谁就能在生态中占据架构制高点。

### 信号三：安全边界从“功能选项”变为“生存底线”
OpenClaw 的 installPolicy 确认、ZeroClaw 的 SSRF 门禁、NanoBot 对子进程无资源限制的担忧、Hermes 的 Docker 首次调用在宿主机执行、CoPaw 的杀毒误报导致用户卸载——安全事件正在直接影响用户留存与信任。**供应链安全、命令执行沙箱、网络请求门禁将成为个人 AI 助手的标配能力**，而非加分项。

### 信号四：MCP 生态的“工程化欠账”集中爆发
CoPaw 的 MCP 硬编码 SSE/OAuth2 轮换失效、NanoBot 的 socks:// 代理解析失败、Hermes 的 provider_model_ids 吞错——MCP 作为工具生态标准已被广泛采纳，但**客户端实现的协议兼容性和异常处理远未成熟**。这为开发者提供了明确的机会窗口：MCP 客户端基础设施（传输层抽象、重连机制、认证持久化）仍有大量工程空间。

### 信号五：Windows 与安装体验成为“第一公里”战场
9 个项目中有 5 个在同一天涉及 Windows 相关修复或 CI 问题；同时 4 个项目有安装/升级脚本相关讨论。**跨平台体验的成熟度直接决定项目能否从“开发者自用”走向“主流用户采用”**。对开发者而言，优先补齐 Windows 支持与安装链路，是争夺增量用户的高杠杆动作。

### 信号六：多引擎/多 Provider 可插拔架构成为产品化共识
LobsterAI 的 dsh 引擎接入、NanoBot 的 DashScope/MST provider、PicoClaw 的 Anthropic 原生协议、CoPaw 的 per-agent 配置——**用户拒绝被单一模型绑定**，可插拔的模型/引擎/工具 provider 架构正在成为所有项目的默认设计约束。这预示着未来 AI 助手产品的竞争重心将从“模型能力”转向“模型无关的编排与体验层”。

---

*本报告基于 2026-08-19 各项目 GitHub 公开数据生成，数据源包括 OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、Moltis、CoPaw、ZeptoClaw、ZeroClaw 共 12 个仓库。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-19

## 今日速览

过去24小时内 NanoBot 仓库保持高活跃度：共产生 9 条 Issue 更新（6 新开/活跃、3 关闭）和 22 条 PR 更新（16 待合并、6 已合并/关闭）。值得关注的是，今日大量工作集中在**稳定性/可靠性修复**上：Windows 平台 gateway 进程生命周期、TUI 冷启动与体验、AgentLoop 后台任务状态管理、provider 代理兼容性等均有对应 PR 推进。与此同时，两个高优先级 PR（#5403 和 #5234）因冲突或长期未合入而需要维护者关注。整体来看，社区提交意愿强烈，maintainer 合并节奏需跟上以避免积压。

---

## 版本发布

无新版本 Release。

---

## 项目进展

今日共有 6 个 PR 被合并/关闭，集中在 **Windows 平台修复、TUI 体验优化、以及测试稳定性** 三个方向：

- **Windows Gateway PID 交接修复** — [#5418 [CLOSED] fix(gateway): allow Windows launcher PID handoff](https://github.com/HKUDS/nanobot/pull/5418) 已合入，使托管网关进程能接受来自虚拟环境启动器的 PID 交接，同时保留对真正竞争前台网关的拒绝逻辑。对应的 Issue #5417 也随之关闭。
- **TUI 冷启动与退出延迟优化** — [#5424 [CLOSED] perf(tui): reduce cold-start and exit latency](https://github.com/HKUDS/nanobot/pull/5424) 通过并行启动 TUI 与网关编排、延迟 classic-agent 导入等方式，降低了首帧阻塞时间。
- **TUI 输入框焦点与可见性** — [#5427 [CLOSED] fix(tui): keep composer visible and focused](https://github.com/HKUDS/nanobot/pull/5427) 修复了点击其他区域后焦点丢失的问题，并增强了 composer 的视觉区分度。
- **TUI API 凭据过期自动刷新** — [#5432 [CLOSED] fix(tui): refresh expired API credentials](https://github.com/HKUDS/nanobot/pull/5432) 在收到 HTTP 401 后通过 bootstrap 端点刷新凭据，并去重并发刷新。
- **跨会话轻量消息能力（功能合入）** — [#5358 [CLOSED] feat(webui): add lightweight cross-session messaging](https://github.com/HKUDS/nanobot/pull/5358) 为持久化会话引入服务端持有的 @handle，支持跨会话发送消息，为 WebUI 带来新的交互维度。
- **执行测试确定性** — [#5433 [CLOSED] test(exec): wait deterministically for truncation output](https://github.com/HKUDS/nanobot/pull/5433) 消除了固定 500ms 轮询导致的 Windows 测试抖动问题。

此外，今日待合并的高质量 PR 还包括 **#5430（释放已完成的任务组）**、**#5431（报告后台任务异常）**，分别直接对应 Issue #5428 和 #5429。另一个值得注意的候选是 **#5403 [OPEN] fix(memory): use API-reported prompt tokens to trigger consolidation**（P1 优先级），它修复了本地 tiktoken 估算比 API 实际计数低 30-50% 导致上下文压缩不触发的问题——该问题直接影响长对话场景，建议尽快解决冲突并入。

---

## 社区热点

- **#5149 [OPEN] [bug] no audio ?** — [Issue #5149](https://github.com/HKUDS/nanobot/issues/5149)（6 条评论，更新于 8 月 18 日）。用户报告 nanobot 无法在 WhatsApp 上发送音频文件（但可以接收）。此问题已开放三周仍无对应 fix PR，是当前评论最多、最受关注的未解决 Issue。从日志片段来看涉及 neonize 的 ffmpeg 处理，建议 maintainer 优先排查。

- **#5434 [OPEN] [bug, regression] fix(mattermost): ignore system posts** — [PR #5434](https://github.com/HKUDS/nanobot/pull/5434)。Mattermost 将系统事件（如频道加入/离开通知）与普通用户消息通过同一 WebSocket `posted` 事件推送，导致 nanobot 将系统消息当作用户输入处理，属于频道内误触发回归问题。该 PR 提供了直接修复方案。

- **#5420 [OPEN] feat(webui): add turn observability and safe recovery** — [PR #5420](https://github.com/HKUDS/nanobot/pull/5420)。将一次用户 turn 映射到单一答案面板，同时保留推理、工具调用、文件编辑等有序活动记录，并在网关重启时作为生命周期边界做安全恢复。这反映了用户对 **WebUI 中推理过程可视化和异常恢复能力** 的诉求。

- **#5425/#5426 Issue 与 PR 联动：socks:// 代理兼容** — [Issue #5425](https://github.com/HKUDS/nanobot/issues/5425) 与 [PR #5426](https://github.com/HKUDS/nanobot/pull/5426)。自定义 OpenAI 兼容 provider 在配置 `socks://` 代理 URL 时请求在到达 provider 前即失败。社区当天提交了修复 PR，属于典型的使用场景兼容性需求。

---

## Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 描述 | 状态 |
|---|---|---|---|
| 🔴 高 | [#4797](https://github.com/HKUDS/nanobot/issues/4797) | `ExecTool._spawn()` 创建子进程时无任何 OS 级资源限制（无 ulimit、cgroup、CPU/内存上限），LLM 可执行 `yes > /dev/null` 或 fork bomb 耗尽系统资源，仅靠 timeout 兜底 | OPEN，无 fix PR，已超 6 周 |
| 🔴 高 | [#5149](https://github.com/HKUDS/nanobot/issues/5149) | WhatsApp 无法发送音频文件（可接收不可发送），涉及 ffmpeg/neonize 链路 | OPEN，无 fix PR |
| 🟠 中 | [#5429](https://github.com/HKUDS/nanobot/issues/5429) | `AgentLoop.schedule_background()` 的完成回调从不调用 `task.result()`，后台任务异常被静默吞掉，无法检索/上报 | OPEN，已有对应 PR #5431 |
| 🟠 中 | [#5428](https://github.com/HKUDS/nanobot/issues/5428) | `AgentLoop._active_tasks` 在会话任务结束后保留空任务组，长时间运行导致内存/状态泄漏 | OPEN，已有对应 PR #5430 |
| 🟠 中 | [#5417](https://github.com/HKUDS/nanobot/issues/5417) | Windows 下 `nanobot webui --dev` 因网关拒绝自身前台进程的 PID 交接而退出 | CLOSED，PR #5418 (#5415 仍待合入) |
| 🟡 低 | [#5425](https://github.com/HKUDS/nanobot/issues/5425) | 自定义 OpenAI 兼容 provider 使用常见 `socks://` 代理别名时请求失败 | OPEN，已有对应 PR #5426 |
| 🟡 低 | [#5434 PR](https://github.com/HKUDS/nanobot/pull/5434) | Mattermost 系统消息被误当作正常用户消息处理 | 待合并，修复方案已就绪 |

今日新报告的 Bug 大多已有对应的修复 PR，体现出社区响应迅速。但 **#4797 的资源限制问题** 虽然严重度高、讨论早（7 月 6 日创建），至今无 PR 认领，建议项目组评估是否将 shell 子进程纳入 sandbox/容器化方案。

---

## 功能请求与路线图信号

- **新 Provider 扩展信号明确：**
  - **#5419 [OPEN] feat(providers): add native DashScope image generation client** — [PR #5419](https://github.com/HKUDS/nanobot/pull/5419)。对接阿里云百炼（DashScope）的原生 `multimodal-generation` 接口，支持 `qwen-image-*`、`wan2.7-image` 等模型，说明用户对国产模型提供商的原生接入有明确需求。
  - **#5234 [OPEN] feat(agent): integrate mst-python as a metasearch provider** — [PR #5234](https://github.com/HKUDS/nanobot/pull/5234)。将 Meta-Search Tool（MST）作为新的 Web 搜索 provider，聚合多引擎结果并通过 RRF 合并。该 PR 已开放 16 天且标记 `conflict`，建议维护者处理冲突或给出方向性反馈。

- **成本治理与记忆能力成为高频诉求：**
  - **#5409 [CLOSED] Prevent Margin Leaks & Surprise LLM Bills: Add a Hybrid Spend Firewall** — [Issue #5409](https://github.com/HKUDS/nanobot/issues/5409)。用户建议引入混合花费防火墙（hybrid spend firewall）防范围绕 LLM 无限循环造成的预算失控，暗示商业化场景下的成本风险治理需求。
  - **#5372 [CLOSED] Memory for your agents — integration proposal (ViBo)** — [Issue #5372](https://github.com/HKUDS/nanobot/issues/5372)。外部记忆系统 ViBo 的集成提案，指出当前 agent 跨会话无持久记忆、重新发送上下文浪费 token 的问题。虽然该 Issue 本质是推广帖且已关闭，但它指出了真实痛点——**跨会话记忆** 仍是用户期望的核心能力。

- **架构/设计问题需要 maintainer 表态：**
  - **#5421 [OPEN] Question: should idle compaction preserve provider state created by a concurrent turn?** — [Issue #5421](https://github.com/HKUDS/nanobot/issues/5421)。用户以 ASK-FIRST 方式提出 `Consolidator.compact_idle_session()` 的并发一致性设计问题，等待确认后续状态契约后再决定是否提交 PR。这是一个需要维护者参与的设计讨论。

---

## 用户反馈摘要

从今日更新/新增的 Issues 和 PR 讨论中可以提炼以下用户反馈：

- **代理兼容性**（#5425/#5426）：用户对自定义 OpenAI-compatible provider 的配置灵活性有明确预期。代理 URL 使用广泛兼容的 `socks://` 别名在大多数生态工具中被支持，nanobot 解析失败会让用户感到意外。社区当天即给出修复 PR，说明此问题在自托管/企业环境中具有一定普遍性。

- **Windows 体验持续被吐槽/改进**（#5417、#5415、#5418、#5424、#5427）：从 gateway 进程交接失败、TUI 启动慢、composer 焦点丢失，到 CI 测试在 Windows 3.14 job 上的不确定性——Windows 作为用户环境的重要组成，相关修复在今日就有 5+ 个 PR 涉及，说明该平台体验仍存在明显摩擦，但维护者/社区正在集中修补。

- **后台任务黑盒问题**（#5428、#5429）：开发者用户关注 AgentLoop 的内部状态卫生和异常可观测性。后台任务异常被静默吞噬、空任务组不被清理，这两类问题对中大型部署/长时间运行场景会产生实质性影响（内存泄漏 + 故障不可见）。

- **系统消息误触发**（#5434）：Mattermost 的 join/leave 系统消息被当作普通消息处理，会导致 agent 产生无意义回复，干扰频道秩序——这是一个直接影响生产可用性的回归类问题，社区希望尽快合入修复。

- **音频链路缺失**（#5149）：WhatsApp 音频只能收不能发，用户明确表达了对“发送音频文件”这一基础能力的预期。该 Issue 已有 6 条评论但无 fix，可能成为负面口碑点。

---

## 待处理积压

以下问题长期未得到有效处理，建议维护者优先关注：

1. **[#4797] shell 子进程无资源限制**（7 月 6 日创建，至今无 fix PR）
   - 高危安全问题：LLM 可能触发 fork bomb/资源耗尽，仅靠 timeout 约束不足。
   - [Issue #4797](https://github.com/HKUDS/nanobot/issues/4797)

2. **[#5234] MST 元搜索 provider 集成 PR**（8 月 3 日创建，16 天未合入，存在冲突）
   - P1 优先级 + `conflict` 标记，新 provider 功能长期悬置会打击贡献者积极性。
   - [PR #5234](https://github.com/HKUDS/nanobot/pull/5234)

3. **[#5341] weather skill 的 Windows 兼容修复 PR**（8 月 11 日创建，标记冲突）
   - 简单的 PowerShell 兼容修复（`curl` 别名问题），因冲突未合入。
   - [PR #5341](https://github.com/HKUDS/nanobot/pull/5341)

4. **[#5149] WhatsApp 音频发送失败**（7 月 28 日创建，已 3 周，6 条评论，无修复动作）
   - 功能缺失类 Bug，影响用户对多模态消息能力的信任。
   - [Issue #5149](https://github.com/HKUDS/nanobot/issues/5149)

5. **[#5403] 记忆压缩触发器改用 API-reported prompt tokens**（P1，PR 已就绪但存在冲突）
   - 直接影响长对话场景的上下文管理正确性，冲突解决优先级建议提高。
   - [PR #5403](https://github.com/HKUDS/nanobot/pull/5403)

---

**总体评价**：项目处于高活性迭代期，社区贡献者活跃、问题反馈详细、修复 PR 跟进及时。主要风险点在于：高优先级 PR 的冲突解决速度、安全类 Issue（#4797）的无主状态、以及 Windows 平台上的持续稳定性支出。建议 maintainer 集中处理挂起冲突 PR，并对核心安全议题给出明确路线图回应。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-19

## 1. 今日速览

过去 24 小时项目保持极高活跃度：**50 条 Issue 更新（40 新开/活跃，10 关闭）、50 条 PR 更新（42 待合并，8 合并/关闭）**，并发布了 **v0.20.4（v2026.8.18）** stable 补丁版本。社区讨论集中在 **Debian 安装失败（P1）、桌面端渲染进程 CPU 异常、Bot Mode 多 profile 会话可靠性**三大问题上；与此同时，网关会话状态修复（#88965/#89538）、Windows 周期性维护（#89542）等 PR 正在快速推进。整体来看，项目迭代节奏强劲，但 P2 级回归与安全边界问题数量偏多，建议维护者优先关注安装脚本与桌面 Bot Mode 的稳定性。

---

## 2. 版本发布

### Hermes Agent v0.20.4（v2026.8.18）
[发布链接](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.18)

- **类型**：Patch release，距离 v0.20.3 约两周
- **内容**：汇总自 v0.20.3 以来约 **74 个 PR** 的稳定 tagged 版本，供 Docker 镜像、托管部署和全新安装使用
- **破坏性变更**：未提及，patch 版本预期不包含破坏性变更
- **迁移注意**：建议下游消费者尽快同步至该 tag，尤其在已有 hotfix 部署的场景中

---

## 3. 项目进展

今日确认关闭/合并的 PR 中，最核心的是 **网关会话状态与辅助模块的两项修复**，以及针对 CI 红（#88965 失败后）的快速补救：

| PR | 内容 | 状态 | 意义 |
|---|---|---|---|
| [#88965](https://github.com/NousResearch/hermes-agent/pull/88965) | `fix(gateway): stop dropped goal writes on slow DB init and de-flake CI` | 已关闭/合并 | 修复冷启动时 `state.db` 初始化慢导致 GoalManager 在事件循环线程上初始化超时、goal 写入丢失的问题 |
| [#89538](https://github.com/NousResearch/hermes-agent/pull/89538) | `fix(gateway): /goal, /loop, /heartbeat stop false-acking on cold SessionDB cache (salvage #88965)` | 已关闭/合并 | 对 #88965 的补救：彻底解决冷缓存下首次写入静默丢弃+假确认问题 |
| [#89520](https://github.com/NousResearch/hermes-agent/pull/89520) | `fix(auxiliary): never hand a probe-mode stub to a real consumer` | 已关闭/合并 | 防止 `aux_probe_mode()` 返回的轻量 stub 被真实 consumer 使用，避免 CLI 启动路径上的工具门控误判 |

此外，一下 PR 处于活跃待合并状态，代表了项目当前的重点方向：

- **[#89540](https://github.com/NousResearch/hermes-agent/pull/89540)** `feat(desktop): group chats gain PDF/file attachments and drag & drop` — 补齐组聊与 1:1 聊天的附件能力，承接 #88983
- **[#89542](https://github.com/NousResearch/hermes-agent/pull/89542)** `fix: Windows maintenance 2026-08-18` — Electron 41.10.3 同步、npm audit 清理、桌面端 typecheck/lint 通过
- **[#89533](https://github.com/NousResearch/hermes-agent/pull/89533)** `fix(install): ensure libatomic1 on ubuntu` — 修复 Node 26 在 Ubuntu/Debian 上因缺少 libatomic.so.1 导致安装器静默失败的问题

整体项目向前迈进的判断：**网关核心路径的稳定性有明显改善，Windows/安装/桌面端兼容性正在被系统性地清扫**。

---

## 4. 社区热点

| 排名 | Issue/PR | 评论数 | 标题 | 主题 |
|---|---|---|---|---|
| 1 | [#87093](https://github.com/NousResearch/hermes-agent/issues/87093) | 13 | Debian installation broken; uv.lock & npm install failed | ⚠️ 新用户安装受阻，P1 级别，影响面大 |
| 2 | [#88275](https://github.com/NousResearch/hermes-agent/issues/88275) | 8 | Renderer process burns 40-70% CPU at idle since early August | Intel Mac 上桌面端 CPU 异常高，用户已尝试通过 `disable_gpu` 部分缓解 |
| 3 | [#80821](https://github.com/NousResearch/hermes-agent/issues/80821) | 7 | Feature Request: LaTeX/MathJax rendering support in desktop chat UI | 功能请求：桌面聊天 UI 的 LaTeX 渲染，已关闭 |
| 4 | [#89206](https://github.com/NousResearch/hermes-agent/issues/89206) | 6 | Desktop Bot Mode: non-primary chats remain blank and sent messages become unreachable | 桌面 Bot Mode 多 profile 会话数据不可达，已关闭 |
| 5 | [#69255](https://github.com/NousResearch/hermes-agent/issues/69255) | 4 | provider_model_ids swallows TypeError when plugin fetch_models omits base_url | 插件模型获取 TypeError 被吞，已关闭 |
| 6 | [#54354](https://github.com/NousResearch/hermes-agent/issues/54354) | 4 | Docker backend: first tool call before image is pulled runs on host | 安全边界：Docker 后端首次工具调用在主机上执行，已挂起 50+ 天 |

**趋势解读**：社区当前最大的关注点是 **安装体验**（#87093）、**桌面端性能**（#88275）与 **多 profile/Bot Mode 会话可靠性**（#89206、#89131、#88955）。这与 v0.20.4 刚发布、新用户涌入的时机高度相关——安装脚本的失败会直接造成新用户流失，是当前最高优先级的社区痛点。

---

## 5. Bug 与稳定性

按严重程度排列：

### P1（严重）
- **[#87093](https://github.com/NousResearch/hermes-agent/issues/87093)** `[Setup] Debian installation broken; uv.lock & npm install failed` — Debian 13.6 上官方安装脚本失败，仅额外安装 Yum 的干净环境即可复现。**已有相关修复 PR [#89533](https://github.com/NousResearch/hermes-agent/pull/89533)**（修复 Ubuntu libatomic1，但需确认是否完整覆盖）

### P2（高）
- **[#54354](https://github.com/NousResearch/hermes-agent/issues/54354)** `[Bug]: Docker backend: first tool call before image is pulled runs on host` — 冷启动首次工具调用在宿主机执行，存在安全边界风险，已挂起 50 天
- **[#73403](https://github.com/NousResearch/hermes-agent/issues/73403)** `[Bug]: Windows ACP adapter hangs when executing terminal tool` — Windows ACP 场景下 terminal 工具永久挂起。**已有修复 PR [#69083](https://github.com/NousResearch/hermes-agent/pull/69083)**，今日新增 duplicate [#89495](https://github.com/NousResearch/hermes-agent/issues/89495) 佐证问题仍存在
- **[#88964](https://github.com/NousResearch/hermes-agent/issues/88964)** `[Bug]: TUI arrow keys print raw escape sequences` — 0.20.3 引入的回归，方向键在 TUI 中输出原始转义序列
- **[#89131](https://github.com/NousResearch/hermes-agent/issues/89131)** `[Bug]: Bot Mode drops per-profile Cloud alias and starts inert local backend` — Bot Mode 丢 Cloud profile 别名
- **[#59030](https://github.com/NousResearch/hermes-agent/issues/59030)** `no_agent cron jobs deliver with stale os.environ credentials` — cron 任务使用陈旧环境变量凭据，已挂起 45 天
- **[#89477](https://github.com/NousResearch/hermes-agent/issues/89477)** `[Bug]: Hermes Gateway Crashes/Fails to Poll Inbound Telegram Messages with separate Bots on Named Profiles` — 多 profile Telegram bot 消息轮询失败
- **[#88955](https://github.com/NousResearch/hermes-agent/issues/88955)** `Bot Mode group chat: interrupted member turns persist empty display_kind=hidden assistant messages` — 组聊中断产生隐藏消息，反复触发 sanitizer
- **[#89415](https://github.com/NousResearch/hermes-agent/issues/89415)** `Credential pool caches provider cooldown; mid-cooldown credit top-up is never re-probed` — 凭据冷却后充值不再重新探测
- **[#89309](https://github.com/NousResearch/hermes-agent/issues/89309)** `hermes setup (Full) toolset picker silently discards selections` — v0.20.4 的 setup 向导工具选择被静默丢弃

### P3/P4（中低）
- **[#88275](https://github.com/NousResearch/hermes-agent/issues/88275)** 桌面渲染进程空闲时 CPU 40-70%，影响 macOS Intel 用户
- **[#89445](https://github.com/NousResearch/hermes-agent/issues/89445)** 辅助任务 `base_url` 路由被忽略，请求发往主 provider
- **[#89516](https://github.com/NousResearch/hermes-agent/issues/89516)** minimax-oauth 缺少 `api_key_env_vars`，报错信息给错 env 变量名。**已有对应 PR [#89541](https://github.com/NousResearch/hermes-agent/pull/89541)**

---

## 6. 功能请求与路线图信号

- **[#84580](https://github.com/NousResearch/hermes-agent/issues/84580)** `[Feature] supported inbound message hook with sender and message IDs`（P3, needs-decision）— WhatsApp 机器人场景下需要可信的入站消息元数据 hook，反映用户对消息平台集成深度的需求
- **[#88680](https://github.com/NousResearch/hermes-agent/issues/88680)** `[Architecture] Desktop: preserve connection × profile route identity end-to-end` — 架构级需求：桌面端路由身份需端到端保留，是当前 Bot Mode profile 问题的根因讨论，可能进入下一版本设计
- **[#89513](https://github.com/NousResearch/hermes-agent/issues/89513)** `feat(desktop): Models pane missing cron config` — 桌面端缺少 cron 模型漂移配置入口，已有明确功能诉求
- **[#82140](https://github.com/NousResearch/hermes-agent/issues/82140)** 已关闭 — 桌面连接模式暴露给 skills/MCP/plugins 的功能，相关 PR 已合入（今日关闭）
- **[#30112](https://github.com/NousResearch/hermes-agent/pull/30112)** `feat(tools): add Sprites stateful sandbox backend` — 提出了基于 Fly.io 的状态化云沙箱后端，已在待合并队列中 90 天

**路线图判断**：desktop 连接/配置文件正在经受 Bot Mode 大规模用户使用的检验，相关架构重构（#88680）与功能补齐（#89513）大概率将出现在 v0.21 中。

---

## 7. 用户反馈摘要

- **Debian 用户安装受阻**（#87093）：仅安装 Yum 的干净 Debian 13.6 环境，官方 `curl | bash` 安装脚本在 uv.lock / npm install 阶段失败，新用户体验受挫。
- **Intel Mac 用户性能吐槽**（#88275）：`Hermes Helper (Renderer)` 空闲时占用 40-70% CPU，导致 MacBook Pro 2019 热降频，用户已自行尝试 `desktop.disable_gpu=true` 缓解。
- **Windows ACP 场景挂起**（#73403/#89495）：通过 AionUi 等 ACP 宿主使用 Hermes 时，terminal 工具永久挂起，第三方生态集成受影响。
- **Bot Mode 是当前最热门使用场景，但多 profile 问题突出**（#89206/#89131/#88955）：非主 profile 聊天空白、消息不可达、Cloud 别名丢失等问题被密集报告。
- **插件生态反馈**（#88615/#69255）：CommandCode 提供商模型选择器显示 0 个模型，根因是 `fetch_models` 的 `base_url` kwarg 不兼容被吞掉，引发用户困惑。
- **本地模型兼容性**（#88762）：Qwen 3.8 在 llama.cpp 下失败而 3.6 正常，用户在官方渠道寻求排查方向。
- **桌面 LaTeX 渲染需求明确**（#80821）：用户期望聊天 UI 像 GitHub/Notion 一样渲染数学公式，该请求已关闭，推测有处理方案或已在路线图中。

---

## 8. 待处理积压

以下 Issue/PR 长期未获解决或合并，建议维护者重点关注：

| 类型 | 编号 | 标题 | 创建时间 | 搁置天数 | 优先级 / 备注 |
|---|---|---|---|---|---|
| Issue | [#54354](https://github.com/NousResearch/hermes-agent/issues/54354) | Docker backend: first tool call before image is pulled runs on host | 2026-06-28 | ~52 天 | **P2 安全边界问题，建议优先处理** |
| Issue | [#59030](https://github.com/NousResearch/hermes-agent/issues/59030) | no_agent cron jobs deliver with stale os.environ credentials | 2026-07-05 | ~45 天 | P2，影响 cron 脚本自动化场景 |
| Issue | [#73403](https://github.com/NousResearch/hermes-agent/issues/73403) | Windows ACP adapter hangs when executing terminal tool | 2026-07-28 | ~22 天 | P2，已有 fix PR #69083 未被合入，且今日新增 duplicate #89495 |
| PR | [#30112](https://github.com/NousResearch/hermes-agent/pull/30112) | feat(tools): add Sprites stateful sandbox backend | 2026-05-21 | ~90 天 | 功能 PR 长期未合入，建议明确是否纳入路线图 |
| PR | [#73871](https://github.com/NousResearch/hermes-agent/pull/73871) | fix(cron): persist interrupted shutdown output | 2026-07-29 | ~21 天 | P2，cron 中断输出持久化 |
| PR | [#83787](https://github.com/NousResearch/hermes-agent/pull/83787) | fix(tools): block messaging-platform writes to execution-trusting roots | 2026-08-11 | ~8 天 | 安全相关，建议优先评审 |
| PR | [#79636](https://github.com/NousResearch/hermes-agent/pull/79636) / [#79371](https://github.com/NousResearch/hermes-agent/pull/79371) | auth reset 绕过磁盘冷却合并/保留显式凭据重置 | 2026-08-05 | ~14 天 | 两个 PR 处理相似问题，建议协调合入避免分叉 |

---

**总结**：Hermes Agent 今日处于 **高活跃、高产出** 状态，v0.20.4 发布为下游用户提供了稳定基点；社区情绪整体积极，但对安装体验、桌面端性能和 Bot Mode 多 profile 的可靠性问题反馈强烈。健康度评估为 **良好（B+）**，主要风险集中在 P2 级 bug 积压过多、windows/安装脚本的兼容性缝隙、以及部分安全边界问题长期未解决。建议下一阶段优先处理 #87093 安装回归与 #73403/#69083 Windows ACP 合并。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-19

## 今日速览

过去 24 小时项目保持中等偏上的活跃度：共产生 6 条 Issue 更新（5 条活跃，1 条关闭）和 4 条 PR 更新（2 条待合并，2 条已关闭）；无新版本发布。值得关注的是，多条存量 issue/PR 在今日有维护者跟进，包括长期存在的高优先级 WebUI 功能需求（#806）和两个 Bug 修复 PR 的状态刷新。项目整体处于正常迭代节奏，既有功能开发落地，也有社区驱动的修复在推进。

## 项目进展

今日关闭的两个 PR 分别涉及协议兼容性与可观测性：

- **#1158 [CLOSED] feat: add anthropic-messages protocol for native Anthropic API format** — 这个从 2026-03-06 存活至今的 PR 于今日关闭，目标是为只支持 Anthropic 原生 Messages API（`/v1/messages`）的服务商提供接入能力，对应修复 #269。无论最终是合并还是关闭，这标志着该议题在近半年后有了明确收束，Anthropic 兼容协议的支持方案已稳定下来。  
  https://github.com/sipeed/picoclaw/pull/1158

- **#3317 [CLOSED] feat(providers): log prompt cache tokens in LLM response debug output** — 在网关的 LLM 响应调试日志中补充了 `prompt cache` 相关 token 指标，对使用 DeepSeek 等带缓存上报的 provider 用户有实际观测价值。  
  https://github.com/sipeed/picoclaw/pull/3317

整体来看，本次更新未引入大的架构变动，更多是兼容性打磨与可观测性补全。

## 社区热点

- **#806 [Feature] Add webUI support（👍 8 / 💬 9）** — 这是当前社区讨论热度最高、点赞最多且被打上 `priority: high` 与 `roadmap` 标签的 Issue。用户 Zepan 最早于 2026-02 提出通过 Web UI 降低非技术用户使用门槛，今天仍保持活跃更新。9 条评论表明社区对图形化界面有持续而明确的诉求，且这一需求已进入路线图层面。  
  https://github.com/sipeed/picoclaw/issues/806

- **#3287 [Feature] Better support long messages in IRC（💬 6）** — IRC 用户希望 PicoClaw 能将 IRCv3 下超长消息视为上下文连贯的整体，而非被默认的 512 字节限制截断。虽然不是高优先级标签，但 6 条评论反映了一线用户对 IRC 场景下消息完整性和语义连贯性的实际痛点。  
  https://github.com/sipeed/picoclaw/issues/3287

## Bug 与稳定性

按严重程度排序：

1. **#3339 [OPEN] Antigravity generation returns generic 429 despite valid OAuth scopes** — **严重**。Google Antigravity 的认证与模型发现均正常，但所有生成请求均返回 `RESOURCE_EXHAUSTED`（429），属于完全阻断用户使用的功能性故障，且错误信息缺乏可诊断细节。目前无对应 fix PR，创建于 2026-08-17，需尽快排查配额判断逻辑。  
   https://github.com/sipeed/picoclaw/issues/3339

2. **#3301 [OPEN] /clear and session auto-compression don't work in chats routed to non-default agent via dispatch rules** — **中等**。在通过 dispatch rules 路由到非默认 agent 的会话中，`/clear` 与自动压缩功能失效，涉及会话生命周期管理的一致性，影响多 agent 用户的日常操作。已有 4 条评论，尚无 fix PR。  
   https://github.com/sipeed/picoclaw/issues/3301

3. **#3328 [OPEN] line.settings.webhook_host / webhook_port are never read** — **中低**。配置项存在且有默认值和文档，但代码库中无任何地方消费它们，设置后静默失效且无警告。属于配置系统健壮性问题，已有对应修复 PR **#3329** 处于开放状态。  
   https://github.com/sipeed/picoclaw/issues/3328  
   https://github.com/sipeed/picoclaw/pull/3329

4. **#3292 [CLOSED] CPU usage too high when focus on input box in chat interface** — **已关闭**。此前反馈的聊天界面输入框聚焦时 CPU 占用过高的问题，今日已关闭，说明已被解决或定位到原因。  
   https://github.com/sipeed/picoclaw/issues/3292

## 功能请求与路线图信号

- **WebUI 支持（#806）**：自 2026-02 提出以来持续活跃，被标记为 `priority: high` 和 `roadmap`。虽然当前没有对应 PR，但这是 PicoClaw 降低门槛、从开发者工具走向更广泛用户群体的关键一步，很可能会进入下一个大版本的规划。  
  https://github.com/sipeed/picoclaw/issues/806

- **IRC 长消息语义支持（#3287）**：需求明确（将 IRCv3 拆分的超长消息合并为一条连贯消息），社区有讨论但暂无 PR。对于重视 IRC 渠道的用户来说，这是提升消息可读性和对话质量的重要改进。  
  https://github.com/sipeed/picoclaw/issues/3287

- **Anthropic 原生协议支持（#1158）**：虽然该 PR 已关闭，但对应 #269 的解决意味着项目在「兼容更多 provider / API 格式」的路线图上又迈出了一步，未来可能会有更多协议适配工作展开。

## 用户反馈摘要

- **WebUI 需求背后是「非技术用户入门」的强烈诉求**：#806 的提出者明确指出 TUI 对终端用户友好，但浏览器界面才是面向非技术用户最直观的方式。这暗示当前用户群体已不仅限于开发者，社区正在期待 PicoClaw 向更普适的 AI 助手形态演进。

- **IRC 长消息问题暴露了协议适配细节的不足**：#3287 的诉求来自实际使用中的 IM 集成场景，用户希望消息切分不应破坏语义完整性，说明跨平台接入的体验质量是用户关注的重点。

- **配置静默失效降低了信任感**：#3328 指出 `webhook_host` / `webhook_port` 的设置完全无效且无提示，这类「配置了却没生效」的情况容易造成用户困惑，尤其是对自托管用户而言。

- **Antigravity 用户的阻断性错误需要快速响应**：#3339 仅创建不到两天，但属于完全不可用的服务级故障，评论中暂未见维护者回复，建议优先跟进。

## 待处理积压

- **#806（WebUI）**：从 2 月至今已近 6 个月，8 个 👍 说明呼声很高。虽然已挂 `roadmap` 标签，但长期无实质性 PR 推进，建议维护者明确排期或在 roadmap 文档中给出时间预期。  
  https://github.com/sipeed/picoclaw/issues/806

- **#3287（IRC 长消息）**：开放近 1 个月，6 条评论，暂无 PR。对于渠道集成品质有明显影响的 feature，值得进入下一迭代的考量清单。  
  https://github.com/sipeed/picoclaw/issues/3287

- **#3301（/clear 在 dispatch 路由下失效）**：涉及多 agent 架构下的会话管理，属于功能性缺陷，并非边缘 corner case，建议给出修复计划。  
  https://github.com/sipeed/picoclaw/issues/3301

- **PR #3314（Fix: agent not able to execute shell command added to customAllowPatterns）**：创建于 8 月 3 日，修复 `customAllowPatterns` 被默认 deny 规则覆盖的权限问题。已开放两周以上且今日有更新，但仍然处于待合并状态，建议维护者及时 review 并根据测试情况合入或反馈修改意见。  
  https://github.com/sipeed/picoclaw/pull/3314

- **PR #3329（line webhook 配置告警）**：对应 #3328 的修复，处于 open 状态，逻辑简单（将无效配置改为显式 warn），建议尽快合入以避免用户继续踩坑。  
  https://github.com/sipeed/picoclaw/pull/3329

---

*本日报由 AI 基于 GitHub 公开数据自动生成，所有链接指向 sipeed/picoclaw 仓库。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-19

## 1. 今日速览

项目今日活跃度**极高**，主要集中在 PR 侧：过去 24 小时共产生 41 条 PR 更新，其中 18 条已关闭/合并、23 条仍在待合并状态。核心主线是 **中央数据库层的异步化与可移植驱动重构**——由 `moshe-nanoco` 主导的一系列 db 重构 PR 密集合并，为后续接入远程数据库后端铺路。Issues 侧相对平稳，仅 1 个新 Issue（#3338，Codex WebSocket 超时问题），另有 2 个长期 bug 关闭。今日无新版本发布。

---

## 2. 版本发布

今日无新版本 Release。

---

## 3. 项目进展

今日合并/关闭的 18 个 PR 中，绝大多数属于 **中央数据库重构系列**（#3320–#3330），项目在数据库层的架构升级上迈出了实质性一步。

### 3.1 数据库重构主线（已合并/关闭）

`moshe-nanoco` 今天完成了一条完整重构链，从 lint 约束到测试覆盖：

- **#3320** chore(lint): enforce async promise handling — 强制异步 Promise 处理，避免遗漏 `await`
- **#3321** refactor(db): centralize the central database path — 统一数据库路径管理
- **#3323** refactor(db): make central SQL portable — 将 SQL 从 `better-sqlite3` 特有语法中解耦
- **#3324** refactor(db): add async central database seam — 引入异步接缝
- **#3325** **[BREAKING]** refactor(db): adopt async central database seam — 正式切换到异步接缝（破坏性变更）
- **#3326** fix(db): close async concurrency races — 修复异步引入的并发竞争
- **#3327** refactor(db): add backend composition and migration modes — 支持后端组合与迁移模式
- **#3329** fix(db): make concurrent queue dequeue lossless — 修复 Chat SDK 队列并发出队时丢消息问题
- **#3330** test(db): run central suites through the driver — 将中央集成测试迁移到 `DbDriver` API

> 链接：[#3320](https://github.com/nanocoai/nanoclaw/pull/3320) · [#3321](https://github.com/nanocoai/nanoclaw/pull/3321) · [#3323](https://github.com/nanocoai/nanoclaw/pull/3323) · [#3324](https://github.com/nanocoai/nanoclaw/pull/3324) · [#3325](https://github.com/nanocoai/nanoclaw/pull/3325) · [#3326](https://github.com/nanocoai/nanoclaw/pull/3326) · [#3327](https://github.com/nanocoai/nanoclaw/pull/3327) · [#3329](https://github.com/nanocoai/nanoclaw/pull/3329) · [#3330](https://github.com/nanocoai/nanoclaw/pull/3330)

**意义**：这标志着 NanoClaw 的中央数据库从「SQLite 同步直连」向「异步、驱动可插拔」架构转型。合并后，后续可支持 Postgres/MySQL 等远程后端，且并发正确性得到显著加强（两个并发相关 fix 尤为关键）。

### 3.2 第二批 db 重构 PR（待合并中）

第一波重构落地后，`moshe-nanoco` 又开了新一代 db PR（#3332–#3337），目前均在待合并状态，预计是同一架构升级的后续阶段：

- #3333 / #3334 — 再次出现 async 接缝/安全采用（#3334 同样标 BREAKING）
- #3332 / #3335 — 可移植驱动准备与后端组合测试
- #3337 fix(codex): await central database operations — Codex 模块的异步适配

> 链接：[#3332](https://github.com/nanocoai/nanoclaw/pull/3332) · [#3333](https://github.com/nanocoai/nanoclaw/pull/3333) · [#3334](https://github.com/nanocoai/nanoclaw/pull/3334) · [#3335](https://github.com/nanocoai/nanoclaw/pull/3335) · [#3337](https://github.com/nanocoai/nanoclaw/pull/3337)

### 3.3 Slack/凭证相关修复（待合并）

`gavrielc` 提交了 4 个相互关联的修复 PR，方向是 Slack 集成中身份与实例管理的准确性：

- **#3339** fix(setup): fail closed when a stored sign-in cannot be verified — 登录凭证无法验证时按「失败」处理，而不是放行
- **#3340** fix(approvals): record the delivering instance on pending_approvals — 审批卡片记录投递实例，避免跨实例混乱
- **#3341** fix(provisioning): derive the Slack service from the credential's issuer — 让 Slack 服务的身份与凭证签发方对齐
- **#3342** feat(slack): decline owner-absent channel invites instead of carding them — 不再向所有者推送审批卡片，而是直接拒绝无主频道邀请

> 链接：[#3339](https://github.com/nanocoai/nanoclaw/pull/3339) · [#3340](https://github.com/nanocoai/nanoclaw/pull/3340) · [#3341](https://github.com/nanocoai/nanoclaw/pull/3341) · [#3342](https://github.com/nanocoai/nanoclaw/pull/3342)

---

## 4. 社区热点

### 4.1 Issue #3338 — Codex WebSocket 空闲重试被隐藏（新开，2 条评论）

今天唯一的新 Issue，也是评论最多的 Issue。用户 `ionescu77` 报告：当 Codex Responses WebSocket 空闲超时后，Codex CLI 内部会重试，但 `codex app-server` 未将失败事件透传给 NanoClaw，导致 Telegram 上的简单请求可能**静默等待长达 10 分钟**（直到 NanoClaw 自身的超时兜底）。这触及「失败可见性」的痛点——底层在重试，但用户侧感知不到，体验像是卡死。

> 链接：https://github.com/nanocoai/nanoclaw/issues/3338

热度虽不算高（2 条评论），但该 Issue 涉及用户可感知的长时间无响应，预计会较快得到维护者响应。

### 4.2 PR #3343 — Webex REST 轮询适配器（新功能，待合并）

`sfakam` 提交了 Cisco Webex 的 `webex-poll` 频道适配器，通过 REST 轮询方式接入，**无需入站 Webhook**。对于企业防火墙环境或无法暴露公网端点的团队，这是刚需场景。该 PR 标注为 "Feature skill"，属于新频道扩展。

> 链接：https://github.com/nanocoai/nanoclaw/pull/3343

### 4.3 PR #3334 — [BREAKING] 数据库异步化二次尝试

虽然 PR 列表未显示评论数，但 #3334 作为今天第二个标记 **BREAKING** 的 db 重构 PR（#3325 是第一个），且标题强调 "safely"，值得关注。考虑到 #3325 已经合并，#3334 可能是在 #3325 基础上补充了安全性措施，或以更稳妥的方式重新实现同一目标。这类破坏性变更 PR 通常社区关注度较高。

> 链接：https://github.com/nanocoai/nanoclaw/pull/3334

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 描述 | 状态 |
|---|---|---|---|
| 🔴 高 | [#3338](https://github.com/nanocoai/nanoclaw/issues/3338) | Codex WebSocket 空闲重试不透明，Telegram 请求可能静默 10 分钟无响应 | Open，**尚无 fix PR** |
| 🟠 中 | [#3339](https://github.com/nanocoai/nanoclaw/pull/3339) | 存储的账号凭证无法验证时，登录流程会「放行」（fail-open） | 已有 fix PR 待合并 |
| 🟠 中 | [#3337](https://github.com/nanocoai/nanoclaw/pull/3337) | Codex 模块未等待中央数据库操作完成，存在异步竞态隐患 | 已有 fix PR 待合并 |
| 🟡 低 | [#3326](https://github.com/nanocoai/nanoclaw/pull/3326) | 异步数据库引入的并发竞争 | 已合并修复 |
| 🟡 低 | [#3329](https://github.com/nanocoai/nanoclaw/pull/3329) | Chat SDK 队列并发出队可能丢消息 | 已合并修复 |
| 🟢 已解决 | [#2868](https://github.com/nanocoai/nanoclaw/issues/2868) | `/update-skills` 对已安装频道静默无操作，跳过代码/依赖更新 | 今日已关闭 |
| 🟢 已解决 | [#3194](https://github.com/nanocoai/nanoclaw/issues/3194) | `/update-nanoclaw` 可能在没有可恢复切换点的情况下标记成功 | 今日已关闭 |

**小结**：今日关闭的两个长期 bug（#2868、#3194）都与更新流程可靠性相关；新出现的 #3338 则暴露了 WebSocket 场景下的故障透明性问题。数据库并发类问题已通过 #3326 和 #3329 得到修复。

---

## 6. 功能请求与路线图信号

### 6.1 新频道/集成扩展

- **Webex REST 轮询适配器**（[PR #3343](https://github.com/nanocoai/nanoclaw/pull/3343)）：面向无法使用 Webhook 的企业场景，通过轮询 REST API 接入 Cisco Webex。如果合并，将新增一个频道集成，短期内可满足企业通信需求。
- **You.com MCP 工具 skill**（[PR #3322](https://github.com/nanocoai/nanoclaw/pull/3322)）：新增 `/add-youdotcom-tool`，将 You.com 的 MCP 工具引入 NanoClaw，属于 Utility skill 扩展，增加模型工具生态。

### 6.2 架构演进信号：数据库可移植化

从今日 14 个 db 相关 PR（含待合并）可以清晰看到路线图：

1. **异步化**：从同步 `better-sqlite3` 迁移到异步驱动接口（已完成）
2. **可移植 SQL**：消除 SQLite 特有语法（已完成）
3. **多后端支持**：为 Postgres/MySQL 等远程数据库做准备（进行中，[#3332](https://github.com/nanocoai/nanoclaw/pull/3332)、[#3335](https://github.com/nanocoai/nanoclaw/pull/3335) 待合并）

这意味着未来 NanoClaw 可能支持「中央数据库部署到远端」，对团队级多实例部署是重要能力。

### 6.3 Slack 安全策略收紧

`gavrielc` 的 4 个 PR 共同指向 Slack 集成的身份边界：**凭证与实例严格绑定、无法验证时失败关闭、无主频道直接拒绝**。这可以理解为对 Slack 多工作区/多实例场景的一次安全性加固。

---

## 7. 用户反馈摘要

### 7.1 真实用户痛点：WebSocket 故障无感知（#3338）

> "A simple Telegram request can remain silent for ten minutes when the Codex Responses WebSocket stalls."

用户 `ionescu77` 的核心困扰是：Codex CLI 内部已检测到 WebSocket 空闲超时并自动重试，但 NanoClaw 收不到任何信号，导致 Telegram 端看起来「死了一样」。这反映的是 **底层重试机制与上层用户反馈之间的断层**——即使系统在自愈，用户也没有获得任何进度提示。从使用场景看，这是 Telegram 上日常交互的真实阻塞点。

> 链接：https://github.com/nanocoai/nanoclaw/issues/3338

### 7.2 更新机制的用户信任问题（#2868、#3194）

这两个由 `glifocat` 报告的 Issue 均已在今日关闭：

- `/update-skills` 的「静默无操作」会让用户误以为技能已更新，实际代码和依赖都没变——**无声的失败比显式报错更损害信任**。
- `/update-nanoclaw` 在不可恢复的切出点标记成功，用户可能在一个「半更新」状态下操作。

两者本质都是**「报告成功 ≠ 真正成功」**，关闭说明项目已对这些问题做出处理。

### 7.3 维护者视角的稳定性关注

多数 db 重构 PR 来自 `moshe-nanoco`，Slack 修复来自 `gavrielc`，今日没有大量外部用户涌入的新反馈。整体而言，社区声音以**专业技术反馈**为主，外部终端用户的反馈较少。

---

## 8. 待处理积压

### 8.1 待合并 PR 队列较长

当前有 **23 个 PR 待合并**，其中今日新开的 db 重构第二批（#3332–#3337）与 Slack 修复（#3339–#3342）合计 9 个，均处于待合并状态。这些 PR 存在较强的关联性（同一作者、同一模块），建议维护者排期进行系列 review 而非逐条处理。

### 8.2 新 Issue #3338 等待响应

[#3338](https://github.com/nanocoai/nanoclaw/issues/3338) 是今日唯一新开 Issue，目前无 assignee、无 fix PR。考虑到问题影响（10 分钟静默无响应），建议尽快确认是否可通过转发 Codex CLI 的重试事件来解决。

### 8.3 无明显「僵尸 Issue」

今日活跃的 Issue（#2868、#3194）均已关闭，不存在长期无响应的遗留问题；但需注意 #2868 从 6 月 26 日到今日关闭，积压了约 7 周，说明部分 bug 的修复周期偏长。

---

**日报总结**：NanoClaw 今日处于高强度的内部架构升级期，数据库异步化/可移植化重构是绝对主线，已安全落地第一批合并，但仍有大量后续 PR 排队。Slack 相关修复显示项目正在收紧集成安全性。新出现的 WebSocket 超时可见性问题值得优先跟进。整体项目健康度良好，活跃度偏高，但 23 个待合并 PR 对维护者的 review 带宽构成一定压力。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-19

## 1. 今日速览

过去 24 小时，IronClaw 项目保持高强度迭代节奏：共产生 21 条 Issue 活动（15 条活跃 / 6 条关闭）与 38 条 PR 活动（24 条待合并 / 14 条已合并或关闭），并连续发布 1.3.0-rc.1 与 1.3.0-rc.2 两个预发布版本。最值得关注的是 rc.2 修复了 rc.1 在 1.2.x 升级场景下的启动崩溃循环问题（#7720），保障了升级路径的稳定性。与此同时，libSQL 后端资源治理级联故障已通过 PR #7717 修复合入；两个由社区贡献者提交的 WebUI 通知改进类 Issue（#7638、#7639）也已关闭，说明外部参与流程运转正常。整体项目健康度良好，修复速度明显快于新问题暴露速度。

## 2. 版本发布

### ironclaw-v1.3.0-rc.2（2026-08-18）
🔗 [查看 Release](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.3.0-rc.2)

**修复内容**
- **修复 1.2.x 升级崩溃**：从 1.2 升级至 1.3.0-rc.1 后启动即崩溃的问题已解决。根因是 v2 扩展安装记录中的新字段 `activation_state` 未被旧版本数据识别，现升级流程会正确接受并保留该字段，不再崩溃循环。
- **返回 Reborn 运行时镜像的 SSH 支持**：在运行 IronClaw 时，标准运行时镜像重新支持可选的、仅公钥认证的 worker SSH 服务（端口 2222）。该功能默认关闭，需显式启用。

**迁移注意事项**
- 1.3.0-rc.1 存在已知升级崩溃问题，**建议所有从 1.2.x 升级的用户直接使用 rc.2**。
- 升级过程会自动兼容旧的 extension 安装数据，无需手动迁移。

### ironclaw-v1.3.0-rc.1（2026-08-17）
🔗 [查看 Release](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.3.0-rc.1)

Release Notes 为空，安装脚本已提供：
```sh
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/nearai/ironclaw/releases/download/ironclaw-v1.3.0-rc.1/ironclaw-installer.sh | sh
```

## 3. 项目进展

今日合并/关闭的关键 PR 与关联推进：

### 🔧 libSQL 写通道饥饿修复 — PR #7717（已合入）
🔗 [PR #7717](https://github.com/nearai/ironclaw/pull/7717)

**修复 #7714**：解决了 PinchBench 负载下 libSQL 单共享写连接导致资源治理器增量日志约 40 秒停滞、进而级联触发权威失效、预留泄漏和 capability 调用失败的问题。修复后资源治理器的稳定性显著提升，该问题在 Issue #7714 中以完整分析和复现路径提交。

### 🧪 持续集成验证 — PR #7713（已关闭）
🔗 [PR #7713](https://github.com/nearai/ironclaw/pull/7713)

在 `qa-automation-preview` 上验证 `/benchmark` 路径的端到端流程，为新的 enterprise 类型自动化套件铺平验证道路。

### 📦 依赖更新 — PR #7684（已合入）
🔗 [PR #7684](https://github.com/nearai/ironclaw/pull/7684)

Rust 依赖组批量更新，涉及 `base64` 0.22→0.23、`toml` 0.9→1.1、`http-body-util` 等共 5 项，保持供应链及时跟进。

### ✅ 已关闭 Issue 对应进展

| Issue | 说明 | 状态 |
|---|---|---|
| [#7714](https://github.com/nearai/ironclaw/issues/7714) | libSQL 级联故障 | 已由 PR #7717 修复关闭 |
| [#7638](https://github.com/nearai/ironclaw/issues/7638) | 线程删除改用全局 toast | 已关闭，对应 WebUI 改进 |
| [#7639](https://github.com/nearai/ironclaw/issues/7639) | 共享 InlineNotice 组件 | 已关闭 |
| [#7185](https://github.com/nearai/ironclaw/issues/7185) | 跨会话记忆不可靠 | 已关闭（具体方案待观察） |
| [#7465](https://github.com/nearai/ironclaw/issues/7465) & [#7165](https://github.com/nearai/ironclaw/issues/7165) | 两个 Epic（Company Brain FDE / Customer Feedback Remedition） | 已收尾关闭 |

## 4. 社区热点

### Issue #7185 — 跨会话记忆缺失（2 条评论）
🔗 [Issue #7185](https://github.com/nearai/ironclaw/issues/7185)

来自 2026-07-23 IronClaw Champions 周会的反馈，多位独立测试者观察到上下文/信息在一个对话中建立后，在后续对话中不可靠地召回。涉及法律场景用户（Devon，由 Tobias 转述）。**诉求核心：长期记忆的可靠性和可预期性**，该问题已关闭，建议关注后续是否有对应实现。

### Issue #6879 — 自动化运行不稳定（1 条评论）
🔗 [Issue #6879](https://github.com/nearai/ironclaw/issues/6879)

关键 Epic：相同的存储提示词在无人值守时有时成功、有时产生无价值输出，尤其在小模型（DeepSeek V4 Flash）上更高频。审计发现是结构性问题：触发器触发后实际以普通交互式聊天轮次执行。**社区诉求：自动化任务语义必须独立于对话式交互**，预计在 v1.3.0 / v1.4.0 中重点解决。相关 PR #7650 正在推进通过运行时证据推导运行结果的方案。

### Issue #7720 — 1.3.0-rc.1 升级崩溃循环
🔗 [Issue #7720](https://github.com/nearai/ironclaw/issues/7720)

直接影响所有从 1.2.x 升级到 rc.1 的用户，属阻断级问题。社区反响强烈，但已在 rc.2 中快速修复，体现了项目组对升级路径的重视。

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue / PR | 描述 | 状态 |
|---|---|---|---|
| 🔴 严重 | [#7720](https://github.com/nearai/ironclaw/issues/7720) | 1.3.0-rc.1 启动即崩溃循环，1.2.x 升级后端口全部失联 | **已修复**（rc.2） |
| 🟠 高 | [#7714](https://github.com/nearai/ironclaw/issues/7714) | libSQL 单写连接饥饿导致资源治理器级联故障、预留永久泄漏 | **已修复**（PR #7717 已合入） |
| 🟡 中 | [#7727](https://github.com/nearai/ironclaw/issues/7727) | Catalog `capabilities` 工件被标记为必选但从不读取，包括 manifest v3 工具 | 待处理，无 fix PR |
| 🟡 中 | [#7726](https://github.com/nearai/ironclaw/issues/7726) | `IRONHUB_MANIFEST_URL` 可配置但实践中被编译期白名单硬编码，自托管目录被拒 | 待处理，无 fix PR |
| 🟢 低 | [#7185](https://github.com/nearai/ironclaw/issues/7185) | 跨会话记忆不可靠，影响用户体验但无数据损坏 | 已关闭 |

今日无新增回归类 Bug。两个由社区提交的中等 severity 问题（#7727、#7726）尚无对应修复 PR，建议维护者关注。

## 6. 功能请求与路线图信号

### 新增 Epic / 功能需求（今日创建）

| Issue | 标题 | 路线图信号 |
|---|---|---|
| [#7733](https://github.com/nearai/ironclaw/issues/7733) | DESIGN.md 治理与主题重设计阶段 2–3 | DESIGN.md 编写 + 设计原则 + 主题契约 + 无障碍标准，属 WebUI 设计系统的一部分 |
| [#7731](https://github.com/nearai/ironclaw/issues/7731) | Mnesis Spike | 集成 Mnesis 作为记忆提供者，呼应长期记忆痛点 |
| [#7732](https://github.com/nearai/ironclaw/issues/7732) | Sandboxing Solution with CLIs | E2E 沙箱化 CLI 执行环境 |

### 对应已有 PR 的路线图信号

- **Slack 私密连接引导**（[#7681](https://github.com/nearai/ironclaw/issues/7681)）：已有 [PR #7682](https://github.com/nearai/ironclaw/pull/7682) 实现私密投递 + 一键连接链接，预计合入 v1.4.0。
- **WebUI 语音转文字**：[PR #7724](https://github.com/nearai/ironclaw/pull/7724) 通过 NEAR AI Whisper 实现 composer 内语音输入，浏览器不接触推理凭据。
- **Google Docs 语义编辑**：[PR #7728](https://github.com/nearai/ironclaw/pull/7728) 新增结构化检查、批量编辑、表格填充、确定性验证四个语义能力。
- **运行时间证据审计**：[PR #7735](https://github.com/nearai/ironclaw/pull/7735) 为可下载的会话工件添加时间数据块，改善 Bug 上报质量。
- **omt 工具面替代**（#7392）：[PR #7491](https://github.com/nearai/ironclaw/pull/7491) 已落地统一工具契约的 1–4 切片，模型侧工具面收敛为 `read` / `write` / `edit` / `glob` / `grep` / `bash` 六个裸名称。

### 已关闭功能类 Epic

- [#7465](https://github.com/nearai/ironclaw/issues/7465) Company Brain FDE — 已关闭（完成或暂停待确认）
- [#7165](https://github.com/nearai/ironclaw/issues/7165) Customer Feedback Remedition — 已关闭

## 7. 用户反馈摘要

### 记忆可靠性（#7185）
多个测试者确认：在某一对话中让 agent 获得的信息，在后续对话中无法可靠访问。法律场景（用户 Devon）尤其受影响，因为需要跨会话维护客户上下文。**核心诉求：agent 需要持久的、可审计的工作记忆**，而非每次对话从零开始。

### 自动化运行一致性（#6879）
自动化运行的产出质量存在不可预测性，触发后有时表现为普通聊天轮次而非独立任务执行。生产环境用户依赖自动化完成无人值守工作，这种不一致会导致信任损失。**用户期待：自动化运行具备确定性的执行语义和结果可评估性**。

### BudgetLedger 计费疑虑（#7673）
社区成员在代码审查中发现两个保守倾向的计费间隙（截断启动窗口双重计费、charge 持久性），虽方向上偏保守（不会超上限），但用户对**费用透明度与精确性**提出更高要求。

### 升级体验（#7720）
rc.1 的升级崩溃对用户造成实际服务中断（HTTP/SSH 端口不可用），尽管 rc.2 快速修复，**升级流程中缺乏自动兼容层仍是需要持续关注的领域**。

## 8. 待处理积压

以下问题 / PR 长期未获得合并或关闭动作，建议维护团队关注：

| 类型 | 编号 | 创建时间 | 说明 |
|---|---|---|---|
| PR | [#3676](https://github.com/nearai/ironclaw/pull/3676) | 2026-05-15 | 安全文档全面重写（secrets、沙箱、泄漏检测），已从旧架构 rebase 到当前 main，等待评审并入 |
| Issue | [#6879](https://github.com/nearai/ironclaw/issues/6879) | 2026-07-29 | 自动化运行结构性缺陷的 Epic，涉及 v1.3.0 与 v1.4.0 两个版本 |
| Issue | [#6837](https://github.com/nearai/ironclaw/issues/6837) | 2026-07-29 | 添加 growth/usage 统计的最小 info 级日志（当前 52 个 info! 调用全部为基础设施型） |
| PR | [#6994](https://github.com/nearai/ironclaw/pull/6994) | 2026-08-01 | OOBE 自动化任务原型（轮播、内联卡片、agent-mode 切换），默认关闭标记位，等待设计评审 |
| PR | [#7257](https://github.com/nearai/ironclaw/pull/7257) | 2026-08-05 | 设计系统完整提案包（docs-only），是 Epic #7038 的北向指南，评审周期已近两周 |
| Issue | [#7467](https://github.com/nearai/ironclaw/issues/7467) | 2026-08-10 | Reborn 持久化 profile 无关化 Epic，涉及数据迁移风险，标记 risk: high |
| Issue | [#7392](https://github.com/nearai/ironclaw/issues/7392) | 2026-08-08 | 用 omp 工具面替换第一方编程工具的实验性 Epic（PR #7491 已覆盖前 4 个切片，待后续切片） |
| Issue | [#7447](https://github.com/nearai/ironclaw/issues/7447) | 2026-08-10 | agent 在调用过多工具后任务失败，涉及工具预算机制与分页策略，被标记为 v1.3.0 / v1.4.0 双版本目标 |

---

**总结**：IronClaw 今日整体处于活跃且可控的状态。两点积极信号——一是 24 小时内完成了从 rc.1 崩溃到 rc.2 修复的闭环，二是 libSQL 级联故障从报告到修复合入仅用一天。需要关注的是两个社区提交的 Catalog 配置类 Bug（#7727、#7726）尚未分配修复，以及多个设计/文档类 PR 的评审周期偏长。建议维护团队在推动 v1.3.0 正式版的同时，抽出评审带宽消化 5 月中旬即提交的安全文档 PR（#3676）。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI 项目动态日报 · 2026-08-19

> 数据来源：github.com/netease-youdao/LobsterAI | 统计周期：2026-08-18 至 2026-08-19

---

## 1. 今日速览

过去 24 小时项目活跃度极高，处于 **密集发布与合并周期**。核心动向：① 发布 2026.8.18 新版本，正式引入可选实验性 DeepSeek Harness (dsh) 引擎集成；② 合并 17 个 PR（含 2 个 P0 级修复），推动定时任务分页修复、模型加载重试、SQLite 级联删除修复等关键稳定性改进；③ 仍积压 9 个 4 月标记 [stale] 的未关闭 Issue，但其中 2 个对应修复 PR（#1597、#1621）已在今日合并，积压问题正在消化。社区讨论热度集中在 AI 引擎扩展（hermes-agent）与复杂任务崩溃场景。整体项目健康度 **偏优**，功能迭代与 bug 修复同步推进，但长期 stale Issue 需持续关注。

---

## 2. 版本发布

### 🔖 LobsterAI 2026.8.18
（[Releases 页面](https://github.com/netease-youdao/LobsterAI/releases)）

**更新内容：**
- **feat: dsh engine integration** — 引入 DeepSeek Harness（dsh）作为可选实验性 AI 引擎（[PR #2502](https://github.com/netease-youdao/LobsterAI/pull/2502)）
- **feat: update dsh to rc.7** — 将 dsh 依赖升级至 rc.7 版本（[PR #2509](https://github.com/netease-youdao/LobsterAI/pull/2509)）
- **feat: dsh process launcher** — 新增 dsh 独立进程启动器（[PR #2502 相关 / 发布说明截图](https://github.com/netease-youdao/LobsterAI/pull/2502)）

另据合并入 main 的发布分支 PR [#2510](https://github.com/netease-youdao/LobsterAI/pull/2510) 描述，本版本相比 main 分支领先 23 个提交、变更 57 个文件（+7,004/-39），还包含：

- **模型加载改进**：防止同账号 reload 失败时清空已加载模型列表（[PR #2508](https://github.com/netease-youdao/LobsterAI/pull/2508)）
- **定时任务历史分页修复**：修复 cron 运行历史超过网关上限导致的加载问题（[PR #2507](https://github.com/netease-youdao/LobsterAI/pull/2507)）

**⚠️ 破坏性变更 / 迁移注意：**
- dsh 集成是 **opt-in 实验性功能**，默认不启用，需用户主动开启，对现有配置无破坏性影响。
- 发布分支同时包含 OpenClaw 网关配置兼容性修复（[PR #1626](https://github.com/netease-youdao/LobsterAI/pull/1626)），该修复移除了新版 OpenClaw 已废弃的 `skipMissedJobs` 字段——若用户此前手动在配置中写入过该字段，升级后将被自动清理，无需手动干预。

---

## 3. 项目进展

过去 24 小时合并/关闭 17 个 PR，涵盖功能迭代、bug 修复和技术债清理，按价值分类如下：

### 🚀 核心功能推进
| PR | 内容 | 意义 |
|---|---|---|
| [#2509](https://github.com/netease-youdao/LobsterAI/pull/2509) | dsh 升级 rc.7 | 巩固新引擎稳定性 |
| [#2481](https://github.com/netease-youdao/LobsterAI/pull/2481) | 侧边栏任务搜索移至头部，统一 mac/win 样式 | UI 交互优化 |
| [#2425](https://github.com/netease-youdao/LobsterAI/pull/2425) | 新增 artifact 自动预览开关 | 用户可禁用自动打开文件预览 |
| [#2418](https://github.com/netease-youdao/LobsterAI/pull/2418) | 侧边栏多 Agent 任务活动过滤器（Codex 风格） | 提升多 Agent 任务管理效率 |
| [#1615](https://github.com/netease-youdao/LobsterAI/pull/1615) | 会话导出质量提升：本地化角色名、元信息、时间戳、非截断 tool_result、复制到剪贴板 | 核心协作功能体验升级 |
| [#1629](https://github.com/netease-youdao/LobsterAI/pull/1629) | 用户头像设置（预置 + 本地上传） | 个人化能力增强 |
| [#1631](https://github.com/netease-youdao/LobsterAI/pull/1631) | MCP 快速添加模板（File System / SQLite / Brave Search） | 降低 MCP 配置门槛 |

### 🛠️ 重要修复与技术债
| PR | 内容 | 严重度 |
|---|---|---|
| [#1626](https://github.com/netease-youdao/LobsterAI/pull/1626) | **修复 OpenClaw 网关因非法配置字段无法启动（P0 Blocker）**，并解决弹框闪烁问题 | 🔴 P0 |
| [#1597](https://github.com/netease-youdao/LobsterAI/pull/1597) | **启用 SQLite 外键约束，修复级联删除失效**（cowork_messages、user_memory_sources 孤儿数据） | 🟠 数据一致性 |
| [#2508](https://github.com/netease-youdao/LobsterAI/pull/2508) | 模型加载失败自动重试，防止 plan 模型组会话期间为空 | 🟡 |
| [#2507](https://github.com/netease-youdao/LobsterAI/pull/2507) | 定时任务历史超过网关上限时分页加载 | 🟡 |
| [#1621](https://github.com/netease-youdao/LobsterAI/pull/1621) | 定时任务完成后 OS 原生通知（默认关闭），并修复 pollOnce 首执行不触发回调 bug | 🟢 功能 + 修复 |

### 📦 其他
- [#2506](https://github.com/netease-youdao/LobsterAI/pull/2506) dsh 运行时搭建文档
- [#2510](https://github.com/netease-youdao/LobsterAI/pull/2510) 发布分支合并入 main

**总结**：项目今日完成了一次“大版本合并 + 高优先级修复”的密集交付。新增功能集中在协作体验（导出、搜索、技能、MCP、头像），稳定性修复覆盖网关、数据库、模型加载三大核心链路，整体向前迈进了 **一个完整发布版本 + 2 个 P0/P1 级风险解除**。

---

## 4. 社区热点

今日活跃讨论集中在历史 Issue 的持续互动上，评论数均在 1-2 条区间，热度不高但信号明显：

### 🔥 Issue #1614 — 建议引入 hermes-agent 作为 AI 引擎
[链接](https://github.com/netease-youdao/LobsterAI/issues/1614) | 作者：shanxinstart-lab | 创建于 2026-04-10 | 评论 2

用户提议将 hermes-agent 作为可选 AI 引擎，如 openclaw 一样。结合今日版本发布的 **dsh engine integration**，说明社区对“多引擎支持”有持续诉求，且项目团队正在积极布局（dsh 即为新增的第三种引擎），但 hermes-agent 是否会纳入路线图尚待官方回应。

### 🔥 Issue #1627 — 稍微复杂任务客户端崩溃
[链接](https://github.com/netease-youdao/LobsterAI/issues/1627) | 作者：godlike10 | 评论 2

用户贴出较长日志，指出当任务复杂度上升时客户端崩溃。这是典型的重负载场景稳定性问题，与今日合并的 #1626（网关启动）、#2507（大分页请求）等修复方向一致，说明稳定性相关 issue 正被持续转化进 PR。

### 💡 分析
社区讨论集中在“扩展性”与“稳定性”两极：一方面用户希望接入更多 AI 引擎（hermes-agent），另一方面对复杂任务下的稳定性表示担忧。项目团队的应对策略已明确——dsh 引擎+网关修复并行推进。

---

## 5. Bug 与稳定性

今日未新增 Bug 类 Issue（9 条更新均为 4 月创建的历史 [stale] 条目），但有 **2 个高优修复 PR 完成合并**。按严重程度梳理当前暴露的问题：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 P0 | **OpenClaw 网关无法启动**（非法配置字段 `skipMissedJobs`）——导致 100% 用户升级后网关崩溃、弹框闪烁 | ✅ 已修复（[PR #1626](https://github.com/netease-youdao/LobsterAI/pull/1626) 今日合并） |
| 🟠 P1 | **SQLite 级联删除失效**——删除会话/记忆后残留孤儿数据 | ✅ 已修复（[PR #1597](https://github.com/netease-youdao/LobsterAI/pull/1597) 今日合并） |
| 🟠 P1 | **复杂任务客户端崩溃**（[Issue #1627](https://github.com/netease-youdao/LobsterAI/issues/1627)） | ⏳ 开放中，无明确 fix PR，用户已提供日志 |
| 🟡 P2 | **更新后首次启动崩溃**（[Issue #1587](https://github.com/netease-youdao/LobsterAI/issues/1587)） | ⏳ 开放中，用户提供截图+日志 |
| 🟡 P2 | **会话功能/定时任务无法执行**（[Issue #1589](https://github.com/netease-youdao/LobsterAI/issues/1589)） | ⏳ 开放中，用户提供截图 |
| 🟡 P2 | **无法添加自定义模型，测试失败**（[Issue #1622](https://github.com/netease-youdao/LobsterAI/issues/1622)） | ⏳ 开放中 |
| 🟢 P3 | **技能删除后 UI 未同步，重启仍残留**（[Issue #1617](https://github.com/netease-youdao/LobsterAI/issues/1617)） | ⏳ 开放中，与 #1597 外键修复可能相关（前后端联调问题） |
| 🟢 P3 | **切换语言后部分内容未切换**（[Issue #1586](https://github.com/netease-youdao/LobsterAI/issues/1586)） | ⏳ 开放中，涉及「条款」与「工具风格」两处 |
| 🟢 P3 | **切换本地模型后 skill 不可用**（[Issue #1632](https://github.com/netease-youdao/LobsterAI/issues/1632)） | ⏳ 开放中，需补充说明 |

> 注意：今日释放的版本（2026.8.18）很可能已修复 #1587（启动崩溃）和 #1589（会话/定时任务异常）——这两个 issue 均在版本 2026.04.08 上报告，且发布分支内容包含大量会话与定时任务修复，建议维护者验证后主动关闭旧 issue。

---

## 6. 功能请求与路线图信号

### 已确认进入开发/已交付
| 功能请求 | 对应 PR | 状态 |
|---|---|---|
| 定时任务完成系统通知（[Issue #1620](https://github.com/netease-youdao/LobsterAI/issues/1620)） | [PR #1621](https://github.com/netease-youdao/LobsterAI/pull/1621) | ✅ 已合并 |
| 技能“最近使用”Tab + 使用频次统计 | [PR #1583](https://github.com/netease-youdao/LobsterAI/pull/1583) | ✅ 已合并 |
| MCP 快速添加模版 | [PR #1631](https://github.com/netease-youdao/LobsterAI/pull/1631) | ✅ 已合并 |
| 用户头像设置 | [PR #1629](https://github.com/netease-youdao/LobsterAI/pull/1629) | ✅ 已合并 |
| 会话导出复制到剪贴板 | [PR #1615](https://github.com/netease-youdao/LobsterAI/pull/1615) | ✅ 已合并 |

### 可能的下一版本候选（有对应 PR 待合并）
- **模型选择器 UI 重构**——供应商图标、图像标签、下拉面板修复（[PR #1628](https://github.com/netease-youdao/LobsterAI/pull/1628)）— 已开放 4 个月，今日仍有更新
- **全局搜索修复与 UX 升级**——修复搜索范围限于当前 Agent 的 bug，重构搜索面板（[PR #1634](https://github.com/netease-youdao/LobsterAI/pull/1634)）— 同理，已开放 4 个月，今日有更新

### 路线图信号
- **多 AI 引擎战略明确**：新版本加入 dsh 引擎（opt-in），连同 OpenClaw，产品正从“单引擎”走向“多引擎可插拔”架构。社区请求的 hermes-agent（[#1614](https://github.com/netease-youdao/LobsterAI/issues/1614)）是否会成为第四个引擎，值得关注官方回应。

---

## 7. 用户反馈摘要

从今日更新的 9 个 Issue 中提炼真实声音：

**😤 痛点聚焦：**
- **本地化不彻底**：切换英文后「条款」「工具风格」仍显示中文（[#1586](https://github.com/netease-youdao/LobsterAI/issues/1586)）——国际化仍需打磨
- **模型切换代价高**：切到本地模型后 skill 全部失效，用户不知道如何重新安装（[#1632](https://github.com/netease-youdao/LobsterAI/issues/1632)）——模型与 skill 的联动机制不透明
- **稳定性是最大门槛**：复杂任务崩溃（[#1627](https://github.com/netease-youdao/LobsterAI/issues/1627)）、启动崩溃（[#1587](https://github.com/netease-youdao/LobsterAI/issues/1587)）、会话功能异常（[#1589](https://github.com/netease-youdao/LobsterAI/issues/1589)）——用户对客户端可靠性的容忍度有限
- **自定义模型支持不友好**：添加模型后直接测试失败，无有效错误提示（[#1622](https://github.com/netease-youdao/LobsterAI/issues/1622)）

**👍 正面信号：**
- 用户主动为产品提出需求（定时任务通知 #1620），且详细描述功能要点（默认关闭、权限引导、点击唤起）——说明有一批深度用户愿意参与产品共建
- 社区对引擎扩展有期待（hermes-agent 请求 #1614），表明第三方引擎生态有望形成

---

## 8. 待处理积压

### ⚠️ 长期未关闭 Issue（均为 4 月创建，今日被 stale 标记更新）
| Issue | 创建时间 | 最后回复 | 状态 |
|---|---|---|---|
| [#1614](https://github.com/netease-youdao/LobsterAI/issues/1614) hermes-agent 引擎建议 | 04-10 | 08-18 | 无维护者回复 |
| [#1622](https://github.com/netease-youdao/LobsterAI/issues/1622) 自定义模型测试失败 | 04-10 | 08-18 | 无维护者回复 |
| [#1627](https://github.com/netease-youdao/LobsterAI/issues/1627) 复杂任务客户端崩溃 | 04-10 | 08-18 | 无维护者回复 |
| [#1632](https://github.com/netease-youdao/LobsterAI/issues/1632) 本地模型后 skill 失效 | 04-11 | 08-18 | 无维护者回复 |
| [#1586](https://github.com/netease-youdao/LobsterAI/issues/1586) 语言切换不完整 | 04-09 | 08-18 | 无维护者回复 |
| [#1587](https://github.com/netease-youdao/LobsterAI/issues/1587) 更新后首次启动崩溃 | 04-09 | 08-18 | 无维护者回复 |
| [#1589](https://github.com/netease-youdao/LobsterAI/issues/1589) 会话/定时任务功能异常 | 04-09 | 08-18 | 无维护者回复 |
| [#1617](https://github.com/netease-youdao/LobsterAI/issues/1617) 技能删除 UI 残留 | 04-10 | 08-18 | 无维护者回复 |
| [#1620](https://github.com/netease-youdao/LobsterAI/issues/1620) 定时任务系统通知（功能请求） | 04-10 | 08-18 | ✅ 已有 PR #1621 合并，**待关闭** |

### 📌 长期未合并 PR（今日有更新时间但未合入）
| PR | 创建时间 | 上次更新 | 说明 |
|---|---|---|---|
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) dependabot electron 依赖升级 | 04-02 | 08-18 | 4.5 个月未合并，建议确认冲突或关闭 |
| [#1628](https://github.com/netease-youdao/LobsterAI/pull/1628) 模型选择器 UI 重构 | 04-10 | 08-18 | 开放 4 个月+，今日有 activity，可能正在 review |
| [#1634](https://github.com/netease-youdao/LobsterAI/pull/1634) 全局搜索修复与升级 | 04-11 | 08-18 | 同上 |

### 🎯 维护者行动建议
1. **快速关闭 #1620**：对应 PR #1621 已合并，Issue 应同步关闭，避免误导。
2. **验证 #1587、#1589 是否在新版本修复**：两个 issue 均在 2026.04.08 版本报告，今日发布的 2026.8.18 包含大量会话/定时任务/网关修复，若已验证修复，建议主动关闭并通知用户。
3. **对 9 个 stale issue 做批量 triage**：明确标注“计划中 / 已修复待验证 / 不计划”等状态，至少给用户一个明确答复，避免社区对项目响应速度产生消极印象。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-19

## 1. 今日速览

过去24小时内 Moltis 项目保持较高活跃度，共处理 6 条 PR（5 条已合并/关闭，1 条待合并），关闭 2 条 Bug Issue，并发布新版本 `20260818.06`。值得关注的是，两条今日关闭的 Bug（#1187 心跳配置、#1095 Podman 兼容性）均已有对应修复 PR 合入，说明维护者对社区反馈响应及时。此外，项目新增了持久化 Files 库与 Tesla Fleet 数据连接器（待合并），功能版图持续扩张。整体项目健康度良好，闭环效率高。

## 2. 版本发布

**最新版本：`20260818.06`**

当前未获取到该版本的详细 Release Notes。不过结合当日合并的 PR 来看，该版本大概率包含以下变更（待确认）：

- **Podman 沙箱逃逸通道支持**（#1106）：增加宿主 socket 透传与特权嵌套 Podman 的互斥逃逸选项
- **心跳配置修复**（#1209）：`heartbeat.update` 改为部分更新语义，避免字段被默认值覆盖
- **README 星标历史图修复**（#1211）
- **OpenAI 推理工具调用路由优化**（#1198）
- **Files 库与 Settings 浏览器**（#1206）

> ⚠️ 提示：部分 PR 可能不包含在 `20260818.06` 中，如有升级需求请关注 Release Notes 确认。

## 3. 项目进展

今日有 5 条 PR 被合并/关闭，功能推进较为密集：

| PR | 内容 | 影响 |
|----|------|------|
| [#1198](https://github.com/moltis-org/moltis/pull/1198) | OpenAI 工具+推理场景路由至 Responses API | 优化内置 OpenAI 请求路径，保留兼容性 |
| [#1209](https://github.com/moltis-org/moltis/pull/1209) | `heartbeat.update` 参数按 patch 而非全量配置处理 | 修复配置字段被默认值静默覆盖的问题 |
| [#1211](https://github.com/moltis-org/moltis/pull/1211) | 修复 README 星标历史图失效 | 由第三方数据源替代，社区可读性修复 |
| [#1106](https://github.com/moltis-org/moltis/pull/1106) | Podman 沙箱逃逸通道 | 完善 rootless 诊断，新增宿主 socket 透传模式 |
| [#1206](https://github.com/moltis-org/moltis/pull/1206) | 新增 Files 库 + Settings 浏览器 | 大幅扩展桌面端文件管理与设置交互能力 |

综合来看，项目在**AI 网关兼容性、容器沙箱体验、桌面端功能深度**三线并进，其中 #1206 属于较大功能增量，代表 Moltis 向更完整的本地优先 AI 工作台演进。

## 4. 社区热点

今日讨论最活跃/受关注度最高的条目：

- **[#1187 Heartbeat 设置 UI 静默重置未展示字段](https://github.com/moltis-org/moltis/issues/1187)**（关闭，评论 0）
  虽然评论少，但 8/9 创建、8/18 关闭并附带修复 PR（#1209），属于典型的 "快速闭环" 型 issue，体现了官方对 UI/配置类 bug 的重视。

- **[#1095 Podman 无法通过 Moltis 工作](https://github.com/moltis-org/moltis/issues/1095)**（关闭，评论 2）
  创建于 6/3，经两个半月后终于在今日随 PR #1106 合入而关闭。虽然评论不多，但属于持有 2 个月的"长尾"问题，背后反映的是 **Linux 容器用户对 Podman 原生支持的强烈需求**，且该需求已转化为沙箱逃逸通道的功能落地。

## 5. Bug 与稳定性

今日关闭 2 条 Bug，严重程度及修复状态如下：

| 严重度 | Issue | 描述 | 修复状态 |
|--------|-------|------|----------|
| 🟡 中 | [#1187](https://github.com/moltis-org/moltis/issues/1187) | 心跳设置 UI 提交后，表单外的字段被静默重置为默认值 | ✅ PR #1209 已合并 |
| 🟠 较高 | [#1095](https://github.com/moltis-org/moltis/issues/1095) | Podman 在 Moltis 中无法正常工作（沙箱创建与 socket 处理存在阻断） | ✅ PR #1106 已合并 |

两者均有修复合入，无遗留未处理的新 Bug。项目稳定性信号积极。

## 6. 功能请求与路线图信号

今日功能信号主要来自 PR 而非 Issue：

- **Tesla Fleet API 数据连接器**（[PR #1210](https://github.com/moltis-org/moltis/pull/1210)，OPEN）  
  新增只读适配器，将 Tesla 车辆数据同步至连接器快照存储，不发送指令、不唤醒车辆。该 PR 当前为唯一待合并条目，暗示**连接器生态扩展**是项目当前方向之一。

- **持久化 Files 库**（#1206 已合入）  
  数据目录为后端的文件管理 API + 设置浏览器，支持 Docker/Podman/Apple Container 只读挂载。这为后续桌面端复杂工作流打下基础，有可能成为下一阶段迭代核心。

- **OpenAI 推理工具调用路由**（#1198 已合入）  
  官方对 OpenAI 工具+推理组合场景的主动适配，说明项目在**保持与主流云端模型 API 深度兼容**上持续投入。

综合判断，**连接器生态 + 文件管理能力 + AI 网关协议优化**是当前路线图的三个鲜明主题，下一小版本大概率围绕这些方向推进。

## 7. 用户反馈摘要

以下洞察源自今日关闭的 Issue 摘要及上下文：

- **Podman 用户存在明确的真实场景诉求**（#1095）：用户期望 Moltis 在 Linux 容器场景下直接使用 Podman 作为沙箱运行时，而非仅支持 Docker。修复后新增的逃逸通道（host socket 透传 + 特权嵌套 Podman）表明这类用户同时需要**跨容器访问宿主资源**的能力。

- **配置 UI 更新存在"静默丢失"隐患**（#1187）：用户通过界面修改心跳设置，发现未在表单中展示的配置项被后台恢复为默认值，这在生产环境中容易引发不可预期的行为变化。用户对这类"无声重置"的容忍度较低，且该类问题常发生在多字段配置页面上。

- 暂无公开的正面用户反馈（评论区数据有限，不做过泛推断）。

## 8. 待处理积压

- **[PR #1210 Tesla Fleet API 连接器](https://github.com/moltis-org/moltis/pull/1210)**（OPEN，创建于 8/18）  
  唯一待合并 PR，建议维护者尽快安排 code review。注意该 PR 涉及的连接器属于新模块，建议在合并前明确其与既有连接器 snapshot 存储的数据生命周期策略。

- **无长期未响应的重要 Issue**。今日关闭的两条 Issue 均得到了妥善处理，未发现滞留超过 60 天的严重未回复 Bug。

---

*本日报由 AI 生成，所有数据均来自 Moltis 公开 GitHub 仓库，数据截止时间为 2026-08-19。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-08-19）

> CoPaw (github.com/agentscope-ai/CoPaw) · 数据窗口: 2026-08-18 ~ 2026-08-19

## 1. 今日速览

过去 24 小时项目保持高活跃度：共产生 46 条 Issue 更新（30 条新开/活跃，16 条已关闭）和 50 条 PR 更新（31 条待合并，19 条已合并/关闭），无新版本发布。今日无新 Release，社区焦点集中于 MCP 连接稳定性、多步骤任务中断（需手动“继续”）以及 GLM 模型下的长时间卡死问题。值得注意的是，今日有多个 first-time-contributor 提交的 PR 被合入或进入评审，表明外部贡献者参与度正在上升。整体项目健康度中等偏上——核心功能迭代与生态建设双线推进，但 MCP/任务执行领域存在一批积压未决的稳定性问题需要维护者关注。

## 2. 版本发布

今日无新版本发布，项目处于 v2.1.0 稳定迭代期。上一个已知版本为 v2.1.0（Desktop / 2.1.0），当前社区反馈集中在 2.1.0 与 2.1.0b2 两个版本。

## 3. 项目进展

今日共有 19 个 PR 被合并/关闭，其中以下 4 个核心 PR 进入已合并/关闭状态：

| PR | 内容 | 影响 |
|---|---|---|
| [#6617](https://github.com/agentscope-ai/CoPaw/pull/6617) | fix(providers): honor the Retry-After cap on the streaming retry path | 修复流式重试路径对 `Retry-After` 上限的遵守问题，增强限流场景下的稳定性 |
| [#7072](https://github.com/agentscope-ai/CoPaw/pull/7072) | feat(console): add background chat task list API | 新增后台聊天任务列表 API，为多智能体协调提供任务可观测性基础 |
| [#7064](https://github.com/agentscope-ai/CoPaw/pull/7064) | fix(cli): sync top-level text on cron update for agent jobs | 修复 `cron update --text` 仅更新 request 内部字段导致显示不一致的问题 |
| [#7069](https://github.com/agentscope-ai/CoPaw/pull/7069) | fix(console): render data-URL images in historical messages on session reload | 修复会话重载后历史消息中 data-URL 图片无法显示的问题 |

其中 #7072 是 issue #7056 建议的最小实现，意味着多智能体后台任务的队列/状态查询能力开始落地。#7069 修复了影响日常使用的前端图片显示回归问题，属于高频痛点的修复。

整体来看，项目在短短 24 小时内完成 19 个 PR 的合并/关闭，代码合并节奏加快；且大量的 first-time-contributor 参与修复（#7061、#7064、#7066、#7069、#7071、#7072 等），说明社区修复生态正在形成正循环。

## 4. 社区热点

今日讨论最活跃的 Issue 集中在三个主题：**自动重试/健康检查、任务中断、会话隔离**。

- [#6684 [enhancement] 增加频道的重试功能](https://github.com/agentscope-ai/CoPaw/issues/6684)（10 条评论）
  用户使用自建 Matrix 添加频道时，QwenPaw 启动速度常快于 Matrix 服务，导致连接失败且无重试/健康检测，每次服务器重启后需手动重新保存频道。社区共鸣度高，属于 **基础设施自愈能力缺失** 的代表性诉求。

- [#6921 [bug] 多步骤任务输出规划后就停止，需说“继续”才继续](https://github.com/agentscope-ai/CoPaw/issues/6921)（8 条评论）
  用户反馈执行多步骤任务时模型经常在输出“Now 2.1, 3.1, 3.2. Let me do all three.”这类规划后无提示停止，必须人工回复“继续”才推进。该问题直接影响 Agent 的自动化核心价值，有较高舆情风险。

- [#7102 [bug] Freeze more than 10 minutes long](https://github.com/agentscope-ai/CoPaw/issues/7102)（7 条评论）
  使用 GLM 5.3 时出现超过 5-10 分钟的完全冻结（无 token 输出、思维链也冻结）。用户已尝试切换到其他模型验证，正在确认是否与 GLM 端相关。

- [#7011 [bug] Console stop request can cancel an active Feishu session under multiple UI sessions](https://github.com/agentscope-ai/CoPaw/issues/7011)（7 条评论）
  在多个 Console UI 会话下，一个会话的停止请求会错误地取消活跃的飞书会话，属于会话隔离/生命周期管理的严重缺陷。

**热点背后诉求分析**：社区对 Agent 的 **自治稳定性** 要求越来越高——连接失败要有自动重试、任务中断要能自主恢复、多个会话之间要强隔离。这些问题直接决定用户是否信任并脱离人工干预。

## 5. Bug 与稳定性

按严重程度排列（P0 = 立即影响核心体验）：

| 严重度 | Issue | 问题描述 | 状态 / 对应修复 PR |
|---|---|---|---|
| P0 | [#6921](https://github.com/agentscope-ai/CoPaw/issues/6921) | 多步骤任务输出规划后自动停止，需用户手动“继续” | 开放中，暂无修复 PR |
| P0 | [#7102](https://github.com/agentscope-ai/CoPaw/issues/7102) | GLM 5.3 下模型完全冻结 5-10 分钟无任何输出 | 开放中，待补充 provider 信息 |
| P0 | [#7110](https://github.com/agentscope-ai/CoPaw/issues/7110) | 会话上下文中出现无法下载的图片链接，后续整个会话不可用（仅 `/clear` 可恢复） | 开放中，[#7087](https://github.com/agentscope-ai/CoPaw/pull/7087) 提出了本地化远程媒体 URL 的修复 |
| P1 | [#7063](https://github.com/agentscope-ai/CoPaw/issues/7063) | Agent 执行工具调用时必现崩溃：`async for` 作用于 coroutine 导致 `TypeError` | 已关闭（疑似已修复） |
| P1 | [#6470](https://github.com/agentscope-ai/CoPaw/issues/6470) | MCP driver 硬编码 `sse_client`，完全忽略 `transport: streamable_http` 配置，导致 Streamable HTTP MCP 服务器连接全部失败 | 开放 24 天，暂无修复 PR |
| P1 | [#7053](https://github.com/agentscope-ai/CoPaw/issues/7053) | OAuth2 refresh 时不持久化轮换后的 refresh_token，远程 MCP 永久退化为手动重新认证 | 开放中，[#7066](https://github.com/agentscope-ai/CoPaw/pull/7066) 已提交修复 |
| P1 | [#7005](https://github.com/agentscope-ai/CoPaw/issues/7005) | 启用沙盒后 `uv run` 无法写入 `~/.cache/uv`，文档建议的 policy 配置不生效 | 开放中，[#7116](https://github.com/agentscope-ai/CoPaw/pull/7116) 修复路径 `~` 展开问题 |
| P1 | [#7011](https://github.com/agentscope-ai/CoPaw/issues/7011) | 多 UI 会话下 Console stop 请求会取消正在活跃的飞书会话 | 开放中，暂无修复 PR |
| P2 | [#7082](https://github.com/agentscope-ai/CoPaw/issues/7082) | Console 渠道初始化时报 `_StructuredOutputDynamicClass is not fully defined`（Pydantic model_rebuild 问题） | 开放中，暂无修复 PR |
| P2 | [#7074](https://github.com/agentscope-ai/CoPaw/issues/7074) | 正常运行期间高频崩溃，需手动刷新页面才能恢复 | 开放中，等待复现信息 |
| P2 | [#7046](https://github.com/agentscope-ai/CoPaw/issues/7046) | `execute_shell_command` 处理 heredoc/多行命令时损坏命令内容 | 已关闭 |
| P2 | [#7065](https://github.com/agentscope-ai/CoPaw/issues/7065) | 多轮对话（约 7 轮）后历史消息只显示最近 3-4 条，滚动到顶部也无法查看更早内容 | 已关闭 |
| P3 | [#6775](https://github.com/agentscope-ai/CoPaw/issues/6775) | Malware Bytes 在 Windows 桌面版检测到 Trojan Loader（疑似误报），用户已卸载等待澄清 | 开放中，属于信任/安全风险，需官方回应 |
| P3 | [#7009](https://github.com/agentscope-ai/CoPaw/issues/7009) | 平台误判 Cloudflare Tunnel + monitor 插件为挖矿进程，Pod 被自动终止 | 已关闭（误报确认） |
| P3 | [#7121](https://github.com/agentscope-ai/CoPaw/issues/7121) | nightly 测试 `test_sibling_sessions_run_without_serializing` 在 macOS runner 上间歇性超时 | 开放中，CI 稳定性问题 |

## 6. 功能请求与路线图信号

今日社区提出的功能需求指向几个清晰的方向，且部分已有对应 PR 跟进：

- **频道的自动重试与健康检测**（[#6684](https://github.com/agentscope-ai/CoPaw/issues/6684)）
  希望为 Matrix 等自建频道增加失败重试和健康检测能力。属于 Connector 自愈能力的基础需求，目前无 PR 跟进，建议纳入下个版本的连接层抽象。

- **插件 API 增加 system_prompt 权限控制**（[#7052](https://github.com/agentscope-ai/CoPaw/issues/7052)）
  企业用户希望在插件交互界面中注入公司提示词，同时防止其在 QwenPaw 会话界面中被用户可见。涉及提示词隐私边界设计，是插件生态的合规性需求。

- **智能体协作会话收敛到同一窗口**（[#6925](https://github.com/agentscope-ai/CoPaw/issues/6925)）
  用户对多智能体协作时每个任务创建独立会话，且需手动切换智能体查看对话内容表示困惑。对应 [#7072](https://github.com/agentscope-ai/CoPaw/pull/7072) 已合入后台任务列表 API，但离统一窗口还有距离。

- **per-agent / per-session 的 reasoning_effort 覆盖**（[#7062](https://github.com/agentscope-ai/CoPaw/issues/7062)）
  希望在 agent/会话级配置思考强度，而非在模型级全局生效。这是一个明确的产品化需求，可能进入 v2.2 的路由/配置体系。

- **技能池导入页面的搜索/过滤功能**（[#7090](https://github.com/agentscope-ai/CoPaw/issues/7090)）
  `qwenpaw skills config` 使用 questionary.checkbox，在数百个技能下无法搜索，体验差。属于 UI 体验优化，实现难度低。

- **视频内联上限可配置**（PR [#7071](https://github.com/agentscope-ai/CoPaw/pull/7071)，fixes #7060）
  将 `view_video` 硬编码的 2 MB 内联限制改为遵循 provider 的 `max_inline_media_bytes` 配置。该 PR 正在评审中，若合入将提升多模态场景的可用性。

- **本地 QwenPaw Pro 控制平面**（PR [#7112](https://github.com/agentscope-ai/CoPaw/pull/7112)）
  新增 `qwenpaw app --pro` 选项，引入多用户账号管理、租户隔离运行时和 tenant-scoped 凭据。这是一个较大的架构信号：QwenPaw 正在向 **多人/企业级控制平面** 方向演进。

- **智能邮件管理助手**（PR [#6800](https://github.com/agentscope-ai/CoPaw/pull/6800)）
  已开放 11 天等待评审，提供多邮箱接入、自动收件/分拣/回复的插件级能力。若合入，将显著扩展 Agent 的主动任务场景。

## 7. 用户反馈摘要

来自过去 24 小时 Issue 讨论的真实用户声音：

- **“自动任务不自动”是最伤体验的痛点**（#6921）
  “执行多步骤任务时经常自己停止且无任何提示消息……需要我说‘继续’才会继续任务。”——用户在 Windows 11 上使用 2.1beta2，这表明计划-执行之间的状态衔接存在缺陷，用户对 Agent 自主完成任务的核心信任受到影响。

- **MCP 生态的连接问题让用户反复挫败**（#6470、#5900、#7053）
  配置了 `streamable_http` 的 MCP 服务器在 QwenPaw 中完全不可用（硬编码 SSE）；session 断开后无自动重连；OAuth2 refresh_token 轮换后不持久化导致必须手动重新认证。用户反馈中“permanently degrades to manual re-auth”的描述，反映了协议兼容层面的体验割裂。

- **平台信任度受到安全误报侵蚀**（#6775）
  “IS this really malware or a false positive? I'm uninstalling until I hear back from your team. PS. I love your work.”——英文用户在 Malware Bytes 报毒后卸载了产品，即使喜爱产品也会因安全不确定性流失。

- **正面认可：2.1.0 的改进被看到**（#7039）
  “更新到2.1.0版本后，确实发现很多改善，比如公式显示正常了！”——用户对公式渲染等 UI 改进表示认可，但同一帖子也报告了“莫名其妙新建会话”的回归，说明增量升级存在稳定性代价。

- **沙盒安全策略与易用性的矛盾**（#7005）
  用户按文档添加 `Write(~/.cache/uv/**)` 到 policy.yaml 后依然无法写入 uv 缓存，显示安全沙盒的配置系统需要更直观的路径解析和文档同步。

- **多会话隔离问题影响真实办公场景**（#7011）
  Console UI 的停止请求可以取消活跃的飞书会话，这是典型的“一个界面操作影响另一个渠道”的会话管理设计缺陷，影响多端协同的可靠性。

## 8. 待处理积压

以下为长期未响应或已在队列中等待较久的重要 Issue / PR，提醒维护者重点关注：

| 类型 | 编号 | 内容 | 等待时长 | 优先级建议 |
|---|---|---|---|---|
| Issue | [#5900](https://github.com/agentscope-ai/CoPaw/issues/5900) | MCP streamable_http 会话终止后无自动重连，客户端被永久跳过 | 自 2026-07-09 开放，41 天 | 高——MCP 生态核心稳定性，长期无修复 PR，且与 #6470 同属 MCP transport 层问题，建议一并重构 |
| Issue | [#6470](https://github.com/agentscope-ai/CoPaw/issues/6470) | MCP driver 硬编码 SSE，忽略 `streamable_http` 配置 | 自 2026-07-26 开放，24 天 | 高——影响所有 Streamable HTTP 用户，根因已定位到 `_setup_transport` 约 800 行 |
| Issue | [#6775](https://github.com/agentscope-ai/CoPaw/issues/6775) | 杀毒软件误报 Trojan Loader，用户已卸载产品 | 自 2026-08-07 开放，12 天 | 高——安全和信任风险，需要官方发布声明或提供签名/哈希验证 |
| PR | [#6800](https://github.com/agentscope-ai/CoPaw/pull/6800) | feat(mailbox): 智能邮件管理助手，实时监控与访问控制 | 已开放 12 天，无 reviewer 响应 | 中——功能完整度较高，需维护者安排评审 |
| PR | [#6764](https://github.com/agentscope-ai/CoPaw/pull/6764) | feat(ci): gate main mergeability on tests（required checks） | 已开放 13 天 | 中——CI 门禁可防止“测试全红仍合入”的历史问题（如 #6418），对工程质量有长期价值 |
| Issue | [#6683](https://github.com/agentscope-ai/CoPaw/issues/6683) | App Center 安装 qwenpaw-creator 失败：`utils` 顶层模块命名冲突 | 已关闭，但安装问题仍可能在旧版本存在 | 低——建议在 2.1.x 发布说明中注明修复情况 |
| Issue | [#6900](https://github.com/agentscope-ai/CoPaw/issues/6900) | （未进入 Top30，但在过去 24h 有更新） | — | 需人工查看完整列表确认 |

---

**日报总结**：CoPaw 在过去 24 小时中保持了快速迭代节奏，社区修复生态活跃，多个 first-time-contributor 的 PR 进入主分支。然而 MCP 传输层（#5900、#6470、#7053）与任务自恢复能力（#6921、#6684）是本阶段最集中的稳定性短板，涉及 Agent 自治的核心体验，建议下一版本优先安排针对性修复与重构。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-19

## 1. 今日速览

- 过去 24 小时共更新 **50 条 Issues**（新开/活跃 32，关闭 18）和 **50 条 PR**（待合并 18，合并/关闭 32），无新版本发布。
- 项目活跃度 **高**，安全加固（`file_download` SSRF 门禁）、上下文压缩、Windows 测试修复、渠道功能（Teams、DingTalk、Telegram）是当前主要推进方向。
- 今日关闭了 18 个 Issue、合并/关闭 32 个 PR，其中多为历史 RFC 收尾、CI/治理文档清理和早期 PR 归档；但同时有 18 个 PR 仍待合并，且多个 PR 处于 `needs-author-action` / `needs-maintainer-review` / `do-not-merge` 状态，**评审侧存在一定积压**。
- 项目整体处于密集迭代期而非发布周期；社区讨论集中在安全策略、跨平台测试、Agent 长期目标执行等方向。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 项目进展

> 今日合并/关闭 PR 共 32 条，受展示样本限制，以下仅列出可见的关闭 PR 与已关闭 Issue 所反映的实质进展。

**已关闭/合并 PR（可见样本）：**

- [PR #5168](https://github.com/zeroclaw-labs/zeroclaw/pull/5168) — HMAC tool execution receipts，为工具调用结果提供可验证性，缓解 LLM 幻觉工具调用问题（已关闭，早期 PR 收尾）。
- [PR #5207](https://github.com/zeroclaw-labs/zeroclaw/pull/5207) — Web 端主题切换、会话崩溃与 CSS token 一致性修复。
- [PR #5648](https://github.com/zeroclaw-labs/zeroclaw/pull/5648) — PR 模板从 15 节精简至 7 节，降低贡献门槛。
- [PR #5684](https://github.com/zeroclaw-labs/zeroclaw/pull/5684) — 在贡献文档中新增 `pr-review-prompt`，为 AI/人工 reviewer 提供结构化流程。
- [PR #5780](https://github.com/zeroclaw-labs/zeroclaw/pull/5780) — 新增 `github-issue-triage` Claude Code skill，使 Issue 分诊流程可复用。

**已关闭 Issue 反映的实质进展：**

- [Issue #7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) — 统一三个 agent turn 引擎的 RFC 已执行完毕并关闭，实际落地形态见 PR #7540。
- [Issue #8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) — SOP 无法通过 Web Dashboard 提供给 Agent 的 S1 问题已关闭，疑似已修复。
- [Issue #8059](https://github.com/zeroclaw-labs/zeroclaw/issues/8059) — deny.toml / audit.toml 策略清理完成关闭，剩余 wasmtime 审计问题转入 [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) 继续追踪。
- [Issue #6679](https://github.com/zeroclaw-labs/zeroclaw/issues/6679) — CI 要求合并前重新跑 PR checks 已落地，防止 stale 分支合入。
- [Issue #5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833) — 破坏性操作的 session 所有权模型已完成。
- [Issue #3542](https://github.com/zeroclaw-labs/zeroclaw/issues/3542) — Webhook 支持 agent mode 的请求已关闭。

**整体判断：** 项目在运行时整合、CI/治理流程和渠道修复上持续推进；但大量功能型 PR（如 Teams 渠道、Hailo-Ollama、上下文压缩）仍处于待作者更新或待维护者评审状态，尚未真正合入主线。

---

## 4. 社区热点

今日讨论最活跃的 Issue 集中在**安全策略、架构 RFC、跨平台质量**三个主题：

- [Issue #8303 — RFC: Goal mode v1（22 评论）](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)  
  `p2 / accepted / no-stale / high risk`。讨论如何让 Agent 在多个 turn 之间持久地追求一个有边界的目标，当前焦点是避免把重启交接、渠道准入、Web 与异步子任务全部耦合进首个交付版本。

- [Issue #7155 — 高风险 shell 命令逐次确认策略（22 评论）](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)  
  `p1 / accepted / high risk`。社区对 `allow/ask/deny` 命令模式策略的诉求强烈，是当前安全方向的核心 RFC 之一。

- [Issue #7462 — Windows 上 74 个测试失败（17 评论）](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)  
  `p1 / accepted / high risk`。Windows 11 简体中文环境下 Unix-only 命令、路径语义、控制台编码导致大量测试失败，社区对 Windows CI 覆盖的呼声很高。

- [Issue #7929 — 统一 slash-command 注册表（8 评论）](https://github.com/zeroclaw-labs/zeroclaw/issues/7929)  
  `p2 / accepted / high risk`。Web UI、ZeroCode TUI 与 channel runtime 三套 slash command 列表长期漂移，开发者希望有单一注册源。

这些热点反映了社区对**安全可控、跨平台可靠、架构收敛**的明确需求。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 状态 | 说明 |
|---|---|---|---|
| S1 | [#8627 WhatsApp Web 设备链接被 passkey/SHORTCAKE 阻断](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) | `open` / `in-progress` / `p1` | 扫码后设备链接无法完成，工作流完全阻塞；尚无独立 fix PR。 |
| S1 | [#8563 SOP 无法通过 Web Dashboard 提供给 Agent](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) | `closed` | 已关闭，疑似已修复。 |
| S2 | [#7462 Windows 下 74 个测试失败](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | `open` / `p1` | 无完整修复；相关 PR [#10090](https://github.com/zeroclaw-labs/zeroclaw/pull/10090) 仅清理 Windows-only cfg 警告，根因修复仍待推进；[#7910](https://github.com/zeroclaw-labs/zeroclaw/issues/7910) 跟踪 Windows 运行时测试覆盖。 |
| S2 | [#8410 条件 channel 任务无结果时仍发送可见回复](https://github.com/zeroclaw-labs/zeroclaw/issues/8410) | `open` / `p2` | “有新邮件才通知，否则保持沉默”等场景行为不符合预期，尚无 fix PR。 |
| S2 | [#6679 stale 分支 merge 检查缺失](https://github.com/zeroclaw-labs/zeroclaw/issues/6679) | `closed` | 已关闭，CI 已要求合并前重新验证。 |
| 安全 | [#8519 wasmtime-wasi CVE 审计项未对齐](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) | `open` / `p1` | cargo-audit ignores 与 deny.toml 漂移，CVEs 待修复，无 fix PR。 |
| 安全 | [#8642 MCP/tool-schema 克隆导致 RSS 无限增长](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | `open` / `p1` | 从 OOM tracker #5542 拆出，agent loop 内内存增长路径未知，无 fix PR。 |

今日新增的安全相关 PR：

- [PR #10070 — 为 file_download 增加 SSRF 门禁](https://github.com/zeroclaw-labs/zeroclaw/pull/10070)（`do-not-merge` / 待维护者评审）
- [PR #10075 — 将 live config 穿透到 gateway chat 工具注册表](https://github.com/zeroclaw-labs/zeroclaw/pull/10075)（依赖 #10070，`needs-author-action`）
- [PR #10090 — 清理 Windows-only cfg 警告](https://github.com/zeroclaw-labs/zeroclaw/pull/10090)

---

## 6. 功能请求与路线图信号

**新提出的功能/RFC：**

- [Issue #9998 — RFC: Session-scoped persistent prompt attachments](https://github.com/zeroclaw-labs/zeroclaw/issues/9998)（8/14 创建，`needs-maintainer-review`）  
  为每个 session 持久化 prompt 附件，解决历史裁剪 / daemon 重启后目标丢失的问题。

- [PR #10096 — ZeroCode 日志文本可选与可复制](https://github.com/zeroclaw-labs/zeroclaw/pull/10096)（新增，`size:XL`）
- [PR #10102 — 定义 do-not-merge label](https://github.com/zeroclaw-labs/zeroclaw/pull/10102)（新增，治理文档）
- [PR #10099 — fork 环境下禁止维护者被提及](https://github.com/zeroclaw-labs/zeroclaw/pull/10099)（新增，CI 治理）

**已接受、待实现的高优功能：**

- [Issue #8303 — Goal mode v1](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)（`p2 / accepted / high risk`）
- [Issue #7155 — 高风险 shell 命令确认策略](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)（`p1 / accepted / high risk`）
- [Issue #8134 — 实现 `session_ttl_hours` 自动清理](https://github.com/zeroclaw-labs/zeroclaw/issues/8134)（`p2 / accepted / high risk`）
- [Issue #8228 — DingTalk 流式消息支持](https://github.com/zeroclaw-labs/zeroclaw/issues/8228)（`p2 / accepted / high risk`）
- [Issue #8383 — ZeroCode Dashboard 显示运行上下文](https://github.com/zeroclaw-labs/zeroclaw/issues/8383)（`p2 / accepted`）
- [Issue #8409 — cron shell 任务输出原始 stdout](https://github.com/zeroclaw-labs/zeroclaw/issues/8409)（`p2 / accepted`）
- [Issue #8358 — zerorelay 里程碑追踪](https://github.com/zeroclaw-labs/zeroclaw/issues/8358)（`p2 / accepted / high risk`）
- [Issue #8309 — 移除孤儿 SkillForge 引擎](https://github.com/zeroclaw-labs/zeroclaw/issues/8309)（`p2 / accepted / high risk`）

**可能进入下一版本的大 PR：**

- [PR #9535 — 按模型窗口比例压缩上下文](https://github.com/zeroclaw-labs/zeroclaw/pull/9535)（`p1 / needs-author-action`）
- [PR #9109 — 原生 Hailo-Ollama 支持](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)（`needs-author-action`）
- [PR #9241 — Microsoft Teams 渠道](https://github.com/zeroclaw-labs/zeroclaw/pull/9241)（`needs-author-action`）
- [PR #9935 — 保留未知约束类型并读取严格模式](https://github.com/zeroclaw-labs/zeroclaw/pull/9935)（`do-not-merge`）
- [PR #9985 — Blacksmith runner 扩展到 msrv / parallel-runtime-test / installer-drift](https://github.com/zeroclaw-labs/zeroclaw/pull/9985)（`do-not-merge`）

**路线图信号：** SSRF 加固明显是一个有序推进的专项（#10070 → #10072 → #10075）；Windows 测试覆盖（#7910）与上下文压缩（#9535）也是明确的 upcoming 方向。

---

## 7. 用户反馈摘要

从 Issues 与评论中提炼的真实用户痛点：

- **Windows 开发者被测试问题劝退**：  
  [Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) 中用户报告在 Windows 11 简体中文、代码页 936 下跑测试套件有 74 个失败，CI 却只在 Linux 上运行，导致 Windows 贡献者难以验证修改。

- **Channel 用户对“沉默”语义有强需求**：  
  [Issue #8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410) 指出“有新邮件才通知，否则保持沉默”的 cron/条件任务仍会发送可见回复，实际使用中干扰明显。

- **自托管 SOP 用户遭遇工作流阻塞**：  
  [Issue #8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) 中，用户按 StageHand 示例在 `/zeroclaw-data/.zeroclaw/shared/sops` 配置 SOP，但 Web Dashboard 会话中 Agent 完全感知不到，属于 S1 阻塞（已关闭）。

- **WhatsApp 渠道用户无法完成设备绑定**：  
  [Issue #8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) 中，Web 模式能生成二维码但设备链接永远不完成，被 WhatsApp 新 passkey/SHORTCAKE 机制阻断，S1。

- **Webhook 用户希望 agent mode 真正生效**：  
  [Issue #3542](https://github.com/zeroclaw-labs/zeroclaw/issues/3542) 用户发送 `"mode": "agent"` 后仍走 chat 模式，无法触发完整工具链路（已关闭）。

- **WSL2 / OOM 用户遭受多根因问题**：  
  [Issue #8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) 记录 MCP/tool-schema 克隆导致 RSS 无界增长，与重启风暴根因分离后仍在排查。

---

## 8. 待处理积压

**长期未关闭的高优 Issue（均已 accepted，且为 p1）：**

- [Issue #7155 — 高风险 shell 命令确认策略 RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)（6/3 创建，已开放 2.5 个月）
- [Issue #7462 — Windows 74 个测试失败](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)（6/10 创建，p1）
- [Issue #8519 — wasmtime-wasi CVE 审计对齐](https://github.com/zeroclaw-labs/zeroclaw/issues/8519)（6/30 创建，安全问题）
- [Issue #8627 — WhatsApp Web 设备链接失败](https://github.com/zeroclaw-labs/zeroclaw/issues/8627)（7/2 创建，S1）
- [Issue #8642 — MCP 工具 schema 导致 RSS 增长](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)（7/3 创建，p1）

**等待作者响应的 PR（`needs-author-action`）：**

- [PR #9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535)、[PR #10075](https://github.com/zeroclaw-labs/zeroclaw/pull/10075)、[PR #9229](https://github.com/zeroclaw-labs/zeroclaw/pull/9229)、[PR #9241](https://github.com/zeroclaw-labs/zeroclaw/pull/9241)、[PR #9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281)、[PR #9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)

**等待维护者评审 / 被 do-not-merge 标记的 PR：**

- [PR #9935](https://github.com/zeroclaw-labs/zeroclaw/pull/9935)、[PR #9985](https://github.com/zeroclaw-labs/zeroclaw/pull/9985)、[PR #10070](https://github.com/zeroclaw-labs/zeroclaw/pull/10070)

**建议关注：** 优先处理 #8519（安全 CVE）和 #7462（Windows 质量门禁）；同时为 `do-not-merge` 的 PR 明确处理时限，避免核心功能长期悬置在评审队列中。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*