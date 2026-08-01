# OpenClaw 生态日报 2026-08-01

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-08-01 01:47 UTC

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

# OpenClaw 项目动态日报（2026-08-01）

## 1. 今日速览

过去 24 小时 OpenClaw 社区活跃度维持高位：共 500 条 Issue 更新，其中 443 条新开/活跃、57 条关闭，新问题涌入速度远超解决速度；PR 侧同样有 500 条更新，138 条已合并/关闭，362 条仍在排队等待审查。**无新版本发布**，但 P0/P1 级问题数量较多（含 2 个 P0 阻塞项），核心稳定性风险集中在会话状态、消息投递与内存管理层面。当前 Issue 关闭率仅 11.4%，积压压力明显，维护团队需优先处理高优先级存量问题。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

过去 24 小时共有 138 个 PR 被合并/关闭，关键进展包括：

- **[PR #116909]（已合并）**：修复回复操作中引用标记泄漏并避免触发 no-reply 回退逻辑。该 PR 处于 automerge 状态并已关闭，解决了用户收到含 `citation markers` 回复的体验问题。相关 Issue：[#85193](https://github.com/openclaw/openclaw/issues/85193)、[#116560](https://github.com/openclaw/openclaw/issues/116560)。
- **[PR #117148]（待审查）**：修复父 agent 在子任务完成唤醒后无法调用工具的问题，影响 OpenAI 兼容 GLM 路由等模型的工具声明完整性。修复 [#116461](https://github.com/openclaw/openclaw/issues/116461)。
- **[PR #117143]（待审查）**：统一斜杠命令与指令的所有权逻辑，涉及插件优先级、原生命令校验与渠道行为一致性，为后续命令系统扩展铺路。
- **[PR #117145]（待审查）**：重构回复轮次生命周期状态所有权，目标消除会话状态变化时 reply、后续队列、重启恢复等行为的重复/漂移问题。
- **[PR #117146]（待审查）**：整合插件描述符与启动激活逻辑，减少启动期重复的元数据检查。

以上重构类 PR 由同一维护者连续提交，表明项目正在系统性地收敛自动回复、会话生命周期与插件体系三类核心架构债务。另有多个 P1 修复（如 [#117132](https://github.com/openclaw/openclaw/pull/117132) canvas widget 冲突、[#117128](https://github.com/openclaw/openclaw/pull/117128) secrets 路径预检、[#116957](https://github.com/openclaw/openclaw/pull/116957) 敏感参数脱敏）处于"等待维护者查看"状态，整体修复管线保持活跃。

## 4. 社区热点

| Issue | 评论数 | 标题 | 关注点 |
|---|---|---|---|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 16 | Realtime voice 会话可保留无界 provider 与 consult 状态 | 会话资源回收边界缺失，慢/卡顿场景下可能堆积陈旧工作与音频帧 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | 15（👍 4） | Feature Request: Masked Secrets——防止 agent 读取原始 API 密钥 | 社区高需求安全功能，已持续讨论近 6 个月 |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | 13 | 有人把工作路径硬编码进代码且被合并发布 | 代码审查流程漏洞，用户困惑与不信任情绪突出 |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | 13（👍 1） | 5.20 更新后 Telegram 重复回复 2-10 次 | 回归问题，影响面广，5.22 仅部分缓解 |
| [#67288](https://github.com/openclaw/openclaw/issues/67288) | 13 | amazon-bedrock-mantle 缺少 discovery 开关 | 已关闭，说明该问题已有解决方案 |

**热点解析**：讨论度最高的 #116201 反映 Realtime voice 功能的资源治理尚未达到生产标准；#10659 则代表安全类功能在社区中的强烈呼声——用户希望 agent "能用但看不到"密钥，以抵御提示注入导致凭证泄露。两条线索都指向**资源边界与安全边界**仍是当前用户最关心的两个主题。

## 5. Bug 与稳定性

### P0（严重阻塞）

- **[#70903](https://github.com/openclaw/openclaw/issues/70903)（4/24 创建，仍开放）**：Provider 返回 402 后写入持久化 `disabledUntil` 冷却时间，即使充值恢复后仍风控数小时。**无对应 fix PR**，且已被标记 stale，需立即介入。
- **[#112395](https://github.com/openclaw/openclaw/issues/112395)（7/21 创建，仍开放）**：从 6.11 升级到 7.1 后，启动迁移预检阻塞网关，迁移表与租约均为空，导致 Gateway 无法启动。**无直接 fix PR**。

### P1（高优）

- **[#116201](https://github.com/openclaw/openclaw/issues/116201)（7/30 创建）**：Realtime voice 会话可保留无界状态。**无 fix PR**。
- **[#86519](https://github.com/openclaw/openclaw/issues/86519)（5/25 创建）**：Telegram 重复回复 2-10 次，5.22 缓解但未根除。**无 fix PR**。
- **[#115908](https://github.com/openclaw/openclaw/issues/115908)（7/29 创建）**：会话转录投影在持续写入下活锁，同步重建路径占用 Node 主线程，阻塞所有渠道传输。**无 fix PR**。
- **[#113306](https://github.com/openclaw/openclaw/issues/113306)（7/24 创建）**：SQLite 快照恢复缺少端到端崩溃与身份保证。**无 fix PR**。
- **[#87109](https://github.com/openclaw/openclaw/issues/87109)（5/27 创建）**：Gateway 空闲内存从 558MB 增至 1073MB+，cron 任务在内存压力下静默失败。**无 fix PR**。
- **[#51396](https://github.com/openclaw/openclaw/issues/51396)（3/21 创建）**：`clearUnboundScopes()` 无条件剥离远程 token-auth 客户端的 operator 权限，破坏 `chat.send` 等接口。**已有 linked PR**，等待合并。

### 已关闭修复（今日确认）

- [#116909](https://github.com/openclaw/openclaw/pull/116909)（回复引用标记泄漏）已合并。
- [#116391](https://github.com/openclaw/openclaw/issues/116391)（WebChat 跨日历史消失）、[#116409](https://github.com/openclaw/openclaw/issues/116409)（全渠道消息双写）、[#116868](https://github.com/openclaw/openclaw/issues/116868)（SQLite 回退冻结 JSONL）等 6 个 Issue 已关闭。

## 6. 功能请求与路线图信号

**高热度需求**

- **[#10659 Masked Secrets](https://github.com/openclaw/openclaw/issues/10659)**（P1，👍 4）：agent 可调用 API 但不可见明文密钥，防御提示注入泄露。已进入 needs-security-review，若实现将显著提升生产环境安全性。
- **[#10687 全动态模型发现](https://github.com/openclaw/openclaw/issues/10687)**（P2，👍 3）：OpenRouter 等快速迭代模型目录应动态拉取，而非依赖静态内置目录。
- **[#13219 每模型用量日志](https://github.com/openclaw/openclaw/issues/13219)**（P2，👍 1）：原生 token/成本聚合视图，用户目前需自行解析 JSONL。
- **[#87325 Azure Foundry GPT Realtime Talk](https://github.com/openclaw/openclaw/issues/87325)**：将 Talk 支持扩展至 Azure AI Foundry 部署。

**可能进入下一版本的信号**：PR [#88504](https://github.com/openclaw/openclaw/pull/88504)（多槽内存角色架构）与 [#117037](https://github.com/openclaw/openclaw/pull/117037)（本地项目作者生命周期）均为 XL 级大 PR，前者重构 memory 插件体系为"事实回忆、自动捕获、紧凑记忆"等独立槽位，若通过审查，将对插件生态产生深远影响；后者配合 RFCS 推进包管理闭环。另从 [#117143](https://github.com/openclaw/openclaw/pull/117143) 等重构动作看，**自动回复与命令系统的统一抽象**是当前主线，预计会在下一个 minor 版本集中体现。

## 7. 用户反馈摘要

- **对代码审查流程的质疑**（[#51429](https://github.com/openclaw/openclaw/issues/51429)）：用户安装最新版后发现程序创建了 `/Users/wangtao` 目录并将工作区指向该路径，评论直指"有人把个人路径硬编码进代码且被合并发布"，暴露 CI 和人工审查的双重漏洞，这类事件对社区信任伤害较大。
- **回归问题严重影响日常使用**（[#86519](https://github.com/openclaw/openclaw/issues/86519)）：Telegram 用户反馈每次交互收到 2-10 条相同回复，5.22 缓解至 2-3 条仍未修复，用户情绪偏向失望；同类问题还有 [#77930](https://github.com/openclaw/openclaw/issues/77930) Discord 渠道在 5.4 版本无法加载。
- **内存泄漏导致静默失败**（[#87109](https://github.com/openclaw/openclaw/issues/87109)）：用户指出 cron 任务在内存压力下"无输出、无推送、无错误上报"，自动化场景失去可信度。
- **成本敏感型用户的诉求**（[#67419](https://github.com/openclaw/openclaw/issues/67419)）：bootstrap 文件每轮重复注入占用 20-30% 上下文 token，用户明确表示这是长期使用中的首要成本浪费点。
- **配置不生效的挫败感**（[#116418](https://github.com/openclaw/openclaw/issues/116418)）：Ollama 配置为主力 provider 后始终回退到下一个模型，显示路由优先级存在逻辑缺陷。

## 8. 待处理积压

以下为长期未闭合或需维护者重点关注的高影响项：

- **[#70903](https://github.com/openclaw/openclaw/issues/70903)（P0，4/24 创建，已 stale）**：持久化 Provider 冷却阻塞用户，**最紧急的积压项**，多次标记 stale 可能被自动关闭风险极大。
- **[#10659](https://github.com/openclaw/openclaw/issues/10659)（P1，2/6 创建）**：Masked Secrets 需求讨论 6 个月未进入实现阶段，社区热度持续。
- **[#51396](https://github.com/openclaw/openclaw/issues/51396)（P1，3/21 创建）**：安全回归已有 linked PR，但 4 个月未合并，可能影响后端客户端集成方案。
- **[#51429](https://github.com/openclaw/openclaw/issues/51429)（P2，3/21 创建）**：硬编码路径事件，需维护者给出明确回应和防范措施，否则将反复被社区提及。
- **[#10687](https://github.com/openclaw/openclaw/issues/10687)（P2，2/6 创建）**：动态模型发现，关系到用户对 OpenRouter/新模型的支持体验，长期未排期。

---

**项目健康度评估**：社区参与度高、PR 流转活跃，但 Issue 关闭率偏低、P0/P1 积压较多，且今日无版本发布、修复管线集中在大规模重构上，短期可能继续积聚稳定性压力。建议维护团队优先处理 P0 积压项，并加快 [#51396](https://github.com/openclaw/openclaw/issues/51396)、[#112395](https://github.com/openclaw/openclaw/issues/112395) 等阻塞性问题的 fix PR 合并节奏。

---

## 横向生态对比

# AI Agent 开源生态横向对比分析报告（2026-08-01）

## 1. 生态全景

个人 AI 助手与自主智能体开源生态正处于**高速迭代与架构重构并行期**：头部项目日 PR 更新量达 50 级别（OpenClaw 500、IronClaw/ZeroClaw 各 50），但高活跃同时伴随积压——OpenClaw Issue 关闭率仅 11.4%，Hermes Agent 当日合并数为 0。安全与可靠性已成为跨项目最集中的社区诉求：密钥脱敏、工具白名单、签名验证、日志防泄漏在多个仓库同步推进。会话状态管理与上下文缓存稳定性正从“可用”走向“可运维”，SQLite 迁移、byte-stable prompt 前缀等底层改造密集落地。整体态势：功能扩张速度未减，但工程质量、安全边界与维护者审查带宽正成为生态健康度的决定性变量。

## 2. 各项目活跃度对比

| 项目 | Issue 更新（新开/活跃 / 关闭） | PR 更新（合并/关闭 / 待合并） | Release | 健康度评估 |
|---|---|---|---|---|
| OpenClaw | 500（443 / 57） | 500（138 / 362） | 无 | 🔴 高活跃但积压严重，关闭率仅 11.4%，P0 阻塞项未闭环 |
| NanoBot | 4（2 / 2） | 16（6 / 10） | 无 | 🟢 健康，3 个 bug 当日报告当日修复，架构迁移落地 |
| Hermes Agent | 50（46 / 4） | 50（0 / 50） | 无 | 🟠 提交密集但合并停滞，50 个 PR 全待合并，安全修复滞留 |
| PicoClaw | 2（2 / 0） | 3（0 / 3） | 无 | 🟡 稳定但审查慢，3 个 PR 已搁置 29–35 天 |
| NanoClaw | 8（8 / 0） | 10（4 / 6） | 无 | 🟡 中活跃，Issue 关闭率 0，Apple Container 与部署灵活性待解 |
| NullClaw | 0（0 / 0） | 1（0 / 1） | 无 | 🟢 低活跃但无风险，grok-cli provider 待审 |
| IronClaw | 38（30 / 8） | 50（32 / 18） | 无 | 🟢 高健康度，架构 Wave 1 三线合并，但 P0 安全项开放 |
| LobsterAI | 4（0 / 4，stale 清理） | 12（11 / 1） | 无（7/31 发布 PR 推进） | 🟢 质量巩固期，当日新 PR 全部合入，旧 PR 集中清理 |
| Moltis | 2（1 / 1） | 6（2 / 4） | 无 | 🟡 中活跃，两条安全修复 PR 待合并为最大风险 |
| CoPaw (QwenPaw) | 20（14 / 6） | 43（13 / 30） | 无 | 🟢 2.0 迁移后快速收敛，严重 bug 多有对应 PR，但 30 个 PR 待审 |
| ZeptoClaw | 0 | 0 | 无 | ⚪ 无活动 |
| ZeroClaw | 50（45 / 5） | 50（13 / 37） | 无 | 🟢 高活跃，RFC 密集，但维护者决策队列（#8692）压力大 |

## 3. OpenClaw 在生态中的定位

OpenClaw 是当前生态的**规模绝对龙头**：Issue/PR 日更新量均为 500，是第二梯队（IronClaw、ZeroClaw 各 50）的 10 倍；功能覆盖面最全，覆盖多渠道、Realtime voice、插件体系、命令系统与自动回复。其技术路线以**系统性地收敛架构债务**为主——今日连续提交的 4 个重构 PR 分别瞄准回复轮次生命周期、命令/插件所有权、启动激活逻辑，表明项目正从“功能堆叠”转向“统一抽象”。然而社区规模也是双刃剑：Issue 关闭率仅 11.4%，P0 项（#70903、#112395）长期无 fix PR，维护吞吐已跟不上社区声量。

相比同类，IronClaw 以目标架构 Wave 重构为主线，节奏更工程化；ZeroClaw 以 RFC 驱动安全与记忆架构演进，更偏设计先行；而 OpenClaw 则表现为“社区驱动 + 集中式债务清理”。其他项目多以 OpenClaw 为参照系：LobsterAI 直接围绕 OpenClaw 网关做优化（DeepSeek 缓存、BTW 泄漏），NanoClaw/PicoClaw 在命名与定位上向 OpenClaw 靠拢，或以 OpenClaw 的痛点为差异化切入点。**OpenClaw 的稳定性走向，事实上定义了整个生态的基准水位。**

## 4. 共同关注的技术方向

**4.1 会话与状态管理**
- OpenClaw：PR #117145 重构回复轮次生命周期状态所有权，消除 reply/队列/重启恢复的重复与漂移
- NanoBot：PR #5173 会话存储从 JSONL 全面迁移 SQLite（已合并），为查询与统计奠基
- Hermes：PR #75760 统一工具结果裁剪与持久化，修复多路径不一致问题
- CoPaw：PR #6602 修复多会话 UI 数据完整性（已合并），切换会话不再丢消息

**4.2 安全加固（最强共识）**
- OpenClaw：Issue #10659 Masked Secrets（agent 可调用 API 但不可见明文密钥）；PR #116957 敏感参数脱敏
- Hermes：Issue #43666 持久化边界明文密码泄漏；Issue #7484 会话固定漏洞
- ZeroClaw：PR #9433 修复 SecurityPolicy 遗漏工具 allowlist 的权限逃逸；RFC #9127 KeySource 密钥来源抽象
- Moltis：PR #1179 节点配对签名验证、PR #1180 zip 路径穿越修复（任意文件写入）
- NanoClaw：PR #3161 结构化日志敏感信息未脱敏

共同诉求：**将 agent 能力与凭证可见性解耦**，防御提示注入、日志泄漏与路径篡改。

**4.3 缓存稳定性与 Token 成本**
- OpenClaw：Issue #67419 bootstrap 文件每轮重复注入占用 20–30% 上下文 token
- IronClaw：pi-harness 计划 4 个 P0（#6984–#6987）直指 prompt 缓存前缀 byte 级稳定性
- LobsterAI：PR #2413/#2415 修复 DeepSeek 长会话缓存命中率从 ~57% 拉回 ~100%

**4.4 模型/Provider 管理与可观测性**
- OpenClaw：#10687 动态模型发现；#13219 每模型用量日志
- NanoBot：PR #5197 DeepSeek Responses API 支持
- Hermes：PR #58043 Mistral/Cohere/DeepInfra/SiliconFlow 自动发现注册表
- CoPaw：PR #6302 统一 provider 发现、模型元数据、路由
- ZeroClaw：RFC #8933 OTel 跨轮会话关联；PR #9556 Langfuse 可观测性后端

**4.5 部署形态多元化**
- NanoClaw：#1732 native runner（绕过 Docker）、#1225 无 Docker 运行、#1184 受限 K8s 部署
- NullClaw：PR #981 grok-cli 本地 CLI 桥接，延续 codex/gemini/claude-cli 模式
- PicoClaw：SimpleX/DeltaChat 去中心化通道扩展
- CoPaw：#6160 独立 Python 运行环境（不依赖系统解释器）

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键架构特征 |
|---|---|---|---|
| OpenClaw | 全功能通用 agent 框架（多渠道/语音/插件/命令） | 社区开发者、自托管用户 | 插件体系 + 自动回复 + 统一命令抽象；重构驱动 |
| NanoBot | 轻量多渠道消息机器人（微信/Slack/WebUI） | 个人日常自动化 | JSONL→SQLite 架构迁移，修复闭环快 |
| Hermes Agent | 企业级安全与多环境适配（Azure/Vertex/本地推理） | 安全敏感、企业集成用户 | 桌面端 + CLI + TUI；凭据/脱敏体系；合并瓶颈明显 |
| PicoClaw | 极简多协议网关（IRC/DeltaChat/SimpleX） | 嵌入式/去中心化/低资源 | 代码精简（重构减 200 行），审查节奏慢 |
| NanoClaw | 容器隔离的轻量安全 agent | 看重安全隔离的个人/企业 | Docker 微VM 隔离；K8s/裸机部署缺口 |
| NullClaw | 极简 CLI 聚合器 | 终端重度用户 | 本地 CLI provider 桥接，多后端扩展序列 |
| IronClaw | 企业级 agent 基础设施 | 高并发/多租户平台 | 目标架构 Wave 重构 + hosted MCP；性能/safety 攻坚 |
| LobsterAI | OpenClaw 垂直发行版（中文场景优化） | 中文用户、OpenClaw 深度用户 | 专注网关稳定、缓存命中率、前端体验；stale 清理 |
| Moltis | Nostr 生态原生 agent | Web3/隐私社区 | NIP-29 群聊 + 去中心化协作；安全 PR 待合入 |
| CoPaw (QwenPaw) | AgentScope 生态桌面 agent | 中文桌面用户、通义/飞书用户 | ReMe 记忆 + 桌面 UI；2.0 迁移修复期 |
| ZeroClaw | 安全合规强需求的 agent 平台 | 安全/企业部署 | Landlock 沙箱 + ChaCha20 凭据加密 + RFC 驱动架构 |

## 6. 社区热度与成熟度

**第一梯队：高活跃、快速迭代**
OpenClaw（500/500）、IronClaw（38/50）、ZeroClaw（50/50）、CoPaw（20/43）、Hermes Agent（50/50）。该梯队 PR 吞吐大，但 OpenClaw 关闭率仅 11.4%、Hermes 合并数为 0，**活跃度不等于交付效率**。

**第二梯队：中活跃、稳定推进**
NanoBot（4/16）、NanoClaw（8/10）、Moltis（2/6）、LobsterAI（4/12）。该梯队整体健康，NanoBot 与 LobsterAI 的修复闭环效率甚至优于第一梯队。

**第三梯队：低活跃/维护期**
PicoClaw（2/3）、NullClaw（0/1）、ZeptoClaw（无活动）。功能开发有信号但需维护者及时响应以避免贡献者流失。

**质量巩固阶段**：LobsterAI（核心合入集中在缓存与协议安全，stale 清理）、NanoBot（架构迁移落地）、CoPaw（2.x 回归系统修复）。三者均处于从“功能扩张”转向“打磨稳定”的阶段。

## 7. 值得关注的趋势信号

1. **“安全左移”从口号变为 PR 就绪**。密钥脱敏、日志脱敏、签名验证、工具白名单在至少 6 个项目中同时出现（OpenClaw #10659、Hermes #43666、ZeroClaw #9433、Moltis #1179/#1180、NanoClaw #3161）。提示注入与凭证泄漏已成为 agent 框架的默认威胁模型。

2. **上下文工程进入“字节级”精度**。IronClaw 将 prompt 前缀 byte 一致性列为 P0，LobsterAI 通过移除 aggregate cap 将缓存命中率从 57% 拉回 100%，OpenClaw 用户明确抱怨 bootstrap 浪费 20–30% token。开发者应意识到：**前缀稳定性是长会话成本与延迟的第一优化杠杆**。

3. **agent 记忆从“日志附件”升级为“一等公民架构”**。NanoBot 迁移 SQLite、ZeroClaw RFC #9048 要求会话历史与长期记忆解耦、OpenClaw PR #88504 将记忆拆分为事实/自动捕获/紧凑槽位。记忆的存储、生命周期与检索正在独立成层。

4. **“去 Docker 化”需求浮出水面**。NanoClaw 的 native runner 与无 Docker 诉求、NullClaw 的本地 CLI 桥接、PicoClaw 的极简多协议网关，共同指向一类用户：**容器隔离虽是安全优势，但在受限环境、低资源设备与裸机场景已成为采用门槛**。

5. **可观测性成为 agent 运维标配**。ZeroClaw 的 OTel 跨轮关联、OpenClaw 的每模型用量日志、Hermes 的 /status fallback 路由展示——agent 从 demo 走向生产后，用户开始要求“可追踪、可计量、可诊断”，而非仅关注对话质量。

6. **开源治理风险开始显性化**。CoPaw #6563 的 CI 阻塞所有 fork PR，直接伤害首次贡献者体验；OpenClaw #51429 硬编码个人路径被合并，引发社区对审查流程的信任质疑。**高活跃项目的下一竞争力不再只是代码，而是 PR 审查 SLA 与 CI 公平性**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-08-01**  
**数据窗口：过去24小时**  
**数据来源：** [HKUDS/nanobot GitHub 仓库](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

过去24小时内 NanoBot 项目保持**高度活跃**：16条 PR 更新，其中 6 条已合并/关闭、10 条待合并；Issues 更新 4 条（新开 2 条，关闭 2 条）。社区提交与维护者响应形成良好闭环——今日 4 条 Bug Report 中有 3 条已获得对应修复 PR（#5196、#5189、#5191）。值得关注的是 **session 存储从 JSONL 全面迁移至 SQLite 的大型重构 PR（#5173）已被合并**，标志着项目在核心数据架构上迈出了重要一步。目前暂无新版本发布。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 PR 在**架构升级、跨平台兼容性、渠道稳定性**三个方向上有实质性推进：

### 🏗️ 架构级进展

- **[#5173] feat(session): migrate session storage from JSONL to SQLite（已合并）**  
  [PR #5173](https://github.com/HKUDS/nanobot/pull/5173)  
  会话存储从 JSONL 文件全面迁移到 SQLite。首次启动时自动执行事务性导入，保留 JSONL 文件作为回滚备份，运行期读写全部走新存储。这为后续大规模会话数据的查询、统计和性能优化奠定了基础，也是项目技术债清理的关键一环。

### 🔧 重要修复

- **[#5189] fix(config): install timezone data on all platforms（已合并）**  
  [PR #5189](https://github.com/HKUDS/nanobot/pull/5189)  
  在**所有平台**安装 `tzdata` 作为标准库 `zoneinfo` 的兜底方案，解决了 Termux 等缺少系统时区数据库的环境下 `nanobot` 无法启动的问题（对应 Issue #5187）。

- **[#5196] fix(weixin): recover refreshed state after session expiry（已合并）**  
  [PR #5196](https://github.com/HKUDS/nanobot/pull/5196)  
  微信渠道在遇到 `errcode -14` 进入 60 分钟暂停后，如果期间外部刷新了 `account.json`，恢复后将重新加载持久化状态，避免旧 token 导致永久静默死循环（对应 Issue #5195）。此 PR 同时导致早期修复方案 #4223 被关闭。

- **[#5192] fix(slack): scope channel thread openers to their own session（已合并）**  
  [PR #5192](https://github.com/HKUDS/nanobot/pull/5192)  
  Slack 频道内直接开启的线程不再共享频道级 session，而是从首条消息就建立独立线程作用域，修复了多个无关线程互相看到对方开场白的会话串扰问题。

- **[#5193] fix(webui): preserve user scroll ownership near tail（已合并）**  
  [PR #5193](https://github.com/HKUDS/nanobot/pull/5193)  
  修复 WebUI 聊天界面中用户在接近底部时滚动，自动跟随逻辑与手动滚动争夺控制权的问题。

### 📌 整体评价

架构迁移与多个渠道稳定性修复同日落地，说明项目在**主动偿还技术债务**与**保障日常运行体验**两个维度上并行推进，整体较为健康。

---

## 4. 社区热点

### 讨论最活跃：微信扫码登录会话管理问题

- **[Issue #5195] [bug] [weixin] Re-scan QR login overwrites new token with old one（已关闭，2条评论）**  
  [Issue #5195](https://github.com/HKUDS/nanobot/issues/5195)  
  用户在 WebUI 中重新扫码登录微信后，新 token 被旧 token 覆盖，导致重启的渠道实例首次 `getupdates` 立即返回 `errcode -14`（会话过期），随后被暂停 60 分钟。  
  **背后的诉求**：微信作为个人版接入渠道，日常掉线重登是高频操作，60 分钟静默封禁给实际使用造成巨大困扰。社区对此问题反响强烈——出现了 PR #5196 和 #4223 两个修复方案，最终 #5196 被合并，说明**微信渠道的稳定性是当前社区关注的核心痛点之一**。

### 值得关注的新声量

- **[Issue #5198] Not possible to change models in a specific session（新开）**  
  [Issue #5198](https://github.com/HKUDS/nanobot/issues/5198)  
  用户指出 NanoBot 始终以固定模型作为首选，其他模型仅作 fallback；WebUI 中点击模型徽标无法切换（与 ChatGPT 等 SaaS 产品的交互体验形成对比），`/model` 命令也未按预期工作。  
  **背后诉求**：按会话动态切换模型是用户对比商业产品后的明确预期，涉及核心交互设计。

### 社区协作模式观察

今日 #5187（时区问题）、#5190（MIME 类型问题）均在同一天收到对应修复 PR，说明**社区自驱力强，用户在踩坑后愿意主动提交补丁**，p1 优先级修复响应速度在一日以内。

---

## 5. Bug 与稳定性

今日报告的 Bug 共 4 条，按严重程度排列如下：

| 严重程度 | Issue | 标题 | 状态 | Fix PR |
|---------|-------|------|------|--------|
| 🔴 高 | [#5195](https://github.com/HKUDS/nanobot/issues/5195) | 微信重新扫码后旧 token 覆盖新 token，导致 `errcode -14` 并暂停 60 分钟 | 已关闭 | ✅ [#5196](https://github.com/HKUDS/nanobot/pull/5196)（已合并） |
| 🔴 高 | [#5190](https://github.com/HKUDS/nanobot/issues/5190) | WebUI 前端模块脚本因 MIME type 为 `text/plain` 加载失败 | 开放 | ✅ [#5191](https://github.com/HKUDS/nanobot/pull/5191)（待合并） |
| 🟡 中 | [#5187](https://github.com/HKUDS/nanobot/issues/5187) | Termux 下因缺少时区数据库导致 `nanobot webui` 无法启动 | 已关闭 | ✅ [#5189](https://github.com/HKUDS/nanobot/pull/5189)（已合并） |
| 🟡 中 | [#5198](https://github.com/HKUDS/nanobot/issues/5198) | 无法在特定会话中切换模型，`/model` 命令无效 | 开放 | ❌ 暂无 |

**分析**：

- 高严重度问题集中在**登录态管理**与**前端资源服务**两个环节，均为阻断性故障。
- 其中 #5190 由 Windows 注册表将 `.js` 文件标记为 `text/plain` 导致，**属于平台特定环境问题**，但影响面覆盖所有 Windows 用户，修复路径清晰。
- 全部 4 个 Bug 中 3 个已有修复（2 个已合并、1 个待合并），仅 #5198 仍在讨论阶段，无对应 PR。

---

## 6. 功能请求与路线图信号

今日出现的功能相关信号如下：

### 🔮 可能进入下一版本的新功能

- **[PR #5197] feat(providers): support DeepSeek Responses API（新开，p1）**  
  [PR #5197](https://github.com/HKUDS/nanobot/pull/5197)  
  将 `deepseek-v4-flash` 路由到 DeepSeek 原生 Responses API，同时复用现有流式与函数调用机制。**信号意义**：NanoBot 正在向新模型/新 API 形态持续扩展，DeepSeek 生态是重点方向。

- **[PR #5184] feat(webui): add Quick Chat and Temporary Chat（待合并）**  
  [PR #5184](https://github.com/HKUDS/nanobot/pull/5184)  
  新增固定入口的 "Quick Chat"（复用正常会话/线程/流式链路）与可选的 "Temporary Chat"（仅内存历史）。**信号意义**：WebUI 交互场景正在向更轻量、更私密的对话模式延伸。

- **[PR #5191] Register correct MIME types for static assets on Windows（待合并）**  
  [PR #5191](https://github.com/HKUDS/nanobot/pull/5191)  
  修复 Windows 上 `mimetypes` 读取注册表导致的 `.js` 被识别为 `text/plain` 问题。**信号意义**：Windows 用户的体验问题在持续获得关注。

### 📋 长期开放的功能声量

- **#1565**（[PR #1565](https://github.com/HKUDS/nanobot/pull/1565)）会话导出/导入/搜索/统计命令，从 3 月开放至今，今日有更新。
- **#1319**（[PR #1319](https://github.com/HKUDS/nanobot/pull/1319)）`nanobot skill status` 诊断命令，从 2 月开放至今，今日有更新。

两条长期 PR 均为 CLI 侧功能增强，若维护者近期处理冲突并合并，可显著提升命令行使用者的**会话管理与技能诊断体验**。

---

## 7. 用户反馈摘要

从今日 Issues 与评论中提炼的真实用户声音：

1. **微信扫码重登体验脆弱**（[#5195](https://github.com/HKUDS/nanobot/issues/5195)）  
   用户详细描述了在 WebUI 中重新扫码登录后，新 token 被旧 token 覆盖的完整步骤，并定位到 `stop()` 阶段的竞态条件。这说明用户**具备较高的技术诊断能力**，能提交高质量 Bug 报告，是项目良性社区生态的标志。

2. **Termux 场景的探索性使用**（[#5187](https://github.com/HKUDS/nanobot/issues/5187)）  
   用户带着"为什么不试试？我就是无聊"的探索心态在 Termux 中测试，遇到时区问题后主动上报。修复 PR 同日提交，**社区反馈闭环质量高**。

3. **核心交互与主流 AI 产品存在差距**（[#5198](https://github.com/HKUDS/nanobot/issues/5198)）  
   用户对比 ChatGPT/Claude 等 SaaS 产品，明确指出"点击模型徽标无法切换"是明显短板。虽然语气克制，但表达了对**会话级模型切换**这一基本交互的强烈预期。

4. **Windows 平台兼容性仍是痛点**（[#5190](https://github.com/HKUDS/nanobot/issues/5190)）  
   用户发现 Windows 环境下 WebUI 完全无法加载前端资源，根源是 Windows 注册表将 `.js` 关联到 Script Host 导致 MIME 类型错误。此类平台差异问题对普通用户不友好，容易造成"项目跑不起来"的第一印象。

---

## 8. 待处理积压

以下长期开放或存在技术冲突的 PR/Issue 需要维护者关注：

| 类型 | 编号 | 标题 | 开放时长 | 状态 | 建议 |
|------|------|------|---------|------|------|
| PR | [#1656](https://github.com/HKUDS/nanobot/pull/1656) | fix(validation): handle None value in string schema validation | 约5个月 | 有冲突 | 冲突未解决，需要维护者介入处理或明确关闭 |
| PR | [#1565](https://github.com/HKUDS/nanobot/pull/1565) | feat(session): add session export, import, search and stats commands | 约5个月 | 有冲突 | 功能价值明确，建议解决冲突后合入 |
| PR | [#1319](https://github.com/HKUDS/nanobot/pull/1319) | feat: add skill status command | 约5个月 | 有冲突 | Skill 生态配套的诊断工具，有社区需求基础 |
| PR | [#5194](https://github.com/HKUDS/nanobot/pull/5194) | perf(webui): reduce JSONL session list overhead | 1天 | 待合并 | 性能优化，建议尽快 review |
| PR | [#5191](https://github.com/HKUDS/nanobot/pull/5191) | Register correct MIME types for static assets on Windows | 1天 | 待合并 | 修复 Windows 阻断性问题，建议优先 |
| Issue | [#5198](https://github.com/HKUDS/nanobot/issues/5198) | Not possible to change models in a specific session | 1天 | 开放 | 核心交互诉求，建议纳入短期路线图讨论 |

> ⚠️ **最长积压提醒**：#1656、#1565、#1319 三条 PR 均从 2-3 月开放至今，存在技术冲突且长期未处理。虽然今日均有状态更新，但若项目方向已变化，建议明确关闭或移交维护者处理，避免社区贡献者持续等待。

---

## 总结

NanoBot 今日整体**活跃度较高、项目健康度良好**：大型架构重构（JSONL→SQLite）如期合并，3 个 Bug 在一天内完成从报告到修复的闭环，微信渠道的长期稳定性问题取得实质进展。社区贡献者质量高、自驱力强，维护者响应速度在线。主要风险点集中在**长期积压的冲突 PR** 和 **Windows/Termux 等非主流环境的兼容性**上。建议下一阶段优先推进 #5191（Windows MIME 修复）的合并，并对三条长期冲突 PR 给出明确处理决定。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-01

## 今日速览

- 过去 24 小时项目活跃度极高：50 条 Issue 更新（新开/活跃 46，关闭 4），50 条 PR 更新（全部待合并），无新版本发布。
- Issue 侧社区讨论活跃，主要集中在**本地推理资源管理误判**（#52261）、**更新后稳定性回归**（#75598）以及**P1 级会话工作区劫持**（#72776）。
- PR 侧提交密集但**合并数为 0**，50 个待合并 PR 中不乏安全修复与重要功能，合并吞吐可能是当前项目健康度的主要瓶颈。
- 安全类议题持续占据注意力：凭据持久化脱敏缺口（#43666）、会话固定漏洞（#7484）等长期 Issue 仍处于开放状态。

---

## 版本发布

今日无新版本发布。

---

## 项目进展

今日 **0 个 PR 被合并或关闭**，50 个 PR 全部处于待合并状态。合并停滞一天，但 PR 提交活跃，以下待合并 PR 已展示出明确的项目推进方向：

### 稳定性与 Bug 修复
- **[#75760] fix(tools): bound and persist tool results consistently** — 统一工具结果大小裁剪与持久化逻辑，修复超大工具输出在多条执行路径上的不一致处理。涉及会话状态与兼容性，标注 `blast-broad`。 [PR #75760](https://github.com/NousResearch/hermes-agent/pull/75760)
- **[#75767] fix: use UUID for cross-session image upload filename uniqueness** — 直接修复 #75761：同 profile 多会话在同一秒内生成图片上传文件名冲突的问题。 [PR #75767](https://github.com/NousResearch/hermes-agent/pull/75767)
- **[#75771] fix(process): salvage #34711 — poll-loop guard + orphaned-pipe drain fix** — 接续旧 PR #34711，补全轮询循环守护与孤儿管道排空修复，所有返回路径均已接入脱敏包装。 [PR #75771](https://github.com/NousResearch/hermes-agent/pull/75771)
- **[#75773] fix(bootstrap): strip mismatched-Python-version site-packages from sys.path** — 在入口 bootstrap 阶段移除 Python 版本不匹配的 `site-packages`，防御多版本 Python 环境下的导入错乱。 [PR #75773](https://github.com/NousResearch/hermes-agent/pull/75773)
- **[#75549] fix(gateway): show the active fallback route in /status and /usage** — 解决 #75535 中 `billing_provider` 为空时无法显示真实 fallback 路由的问题。 [PR #75549](https://github.com/NousResearch/hermes-agent/pull/75549)
- **[#75774] fix(desktop): remove dead voice.record_key field** — 清理 Desktop 端失效的 `voice.record_key` 配置字段，关闭 #40855。 [PR #75774](https://github.com/NousResearch/hermes-agent/pull/75774)

### 安全加固
- **[#71723] fix(hermes_cli): stop unsigned skills-index from installing dangerous skills as builtin** — 将"官方/builtin"安装信任与本地验证绑定，防止未签名技能索引将危险技能以 builtin 信任级别安装。 [PR #71723](https://github.com/NousResearch/hermes-agent/pull/71723)
- **[#38938] fix(mcp): omit mcp-protocol-version header on initialize request** — 修复 Hermes 在 MCP `initialize` 请求上错误注入 `mcp-protocol-version` HTTP 头的问题，符合 MCP 规范（#27569）。 [PR #38938](https://github.com/NousResearch/hermes-agent/pull/38938)

### 新功能与平台扩展
- **[#75775] feat(discord): stream TTS into voice channels while the model is still writing** — 消费端打通 Discord 语音频道流式 TTS，模型边生成边合成播放。 [PR #75775](https://github.com/NousResearch/hermes-agent/pull/75775)
- **[#75764] feat(image-gen): add MiniMax image-01 and StepFun step-image-edit-2 backends** — 新增两个图像生成后端，自动注册到插件发现机制。 [PR #75764](https://github.com/NousResearch/hermes-agent/pull/75764)
- **[#70663] feat(vertex): add API key (Express Mode) auth + native API endpoint support** — 为 Google Vertex AI 增加 API Key 认证（Express Mode），保留 OAuth2/ADC 回退。 [PR #70663](https://github.com/NousResearch/hermes-agent/pull/70663)
- **[#75325] feat(discord): add conservative voice barge-in** — 为 Discord 语音频道加入保守的 TTS 播放打断机制，要求精确配置短语。 [PR #75325](https://github.com/NousResearch/hermes-agent/pull/75325)
- **[#75191] [codex] support named custom app-server providers** — 允许显式命名的自定义 provider 接入 `codex_app_server`，并传递模型信息。 [PR #75191](https://github.com/NousResearch/hermes-agent/pull/75191)
- **[#58043] feat(cli): add auto-discovery registry mappings for Mistral, Cohere, DeepInfra, SiliconFlow** — 完善 provider 注册表，自动填充终端凭据管理器（修复 #58029）。 [PR #58043](https://github.com/NousResearch/hermes-agent/pull/58043)

> 整体来看，今日 PR 队列涵盖稳定性、安全、多平台适配与媒体能力扩展，若全部合并将是相当大的一次前进。但当前合并吞吐为 0，未合并时间越长，冲突与返工风险越高。

---

## 社区热点

今日讨论最集中的议题：

- **[#52261] Provider memory/resource 400s (oMLX/MLX, local inference) misclassified as `context_overflow` → destructive compress/reset loop**（6 评论）  
  本地推理场景的资源不足错误被误判为上下文溢出，触发破坏性压缩/重置循环。用户从 local-inference、limited-resources 角度切入，认为任何运行本地 MLX/oMLX 的 Hermes 用户都可能受影响。**诉求：修正错误分类、避免资源受限下的自毁式行为。** [Issue #52261](https://github.com/NousResearch/hermes-agent/issues/52261)

- **[#75598] issue with updates**（5 评论）  
  用户反馈约一周前开始，更新后整个程序变得不稳定，多个 gateway 因不同 profile 相互冲突，切换 profile 不会停用其他组件。**诉求：更新机制回滚/修复，profile 隔离需要更彻底。** [Issue #75598](https://github.com/NousResearch/hermes-agent/issues/75598)

- **[#72776] Session workspace hijacked to unrelated git repo**（5 评论，P1）  
  任何工具调用进入 git 目录后，非 git workspace 的会话工作区被劫持到无关 git 仓库。**诉求：修复工作区解析逻辑。** [Issue #72776](https://github.com/NousResearch/hermes-agent/issues/72776)

- **[#43666] Redaction gaps at the persistence boundary**（4 评论，安全）  
  从 #43083 拆分出的安全问题：经审计在 `state.db` 单次会话后出现 23 处明文密码命中。**诉求：修复工具输出落盘、压缩块、DB URI 的脱敏覆盖。** [Issue #43666](https://github.com/NousResearch/hermes-agent/issues/43666)

- **[#72421] Auxiliary Azure Foundry calls fail with HTTP 401**（4 评论）  
  主会话使用 Azure Foundry + Entra ID 成功，但自动标题生成、智能审批等辅助 LLM 任务全部 401。**诉求：辅助任务复用主 provider 认证。** [Issue #72421](https://github.com/NousResearch/hermes-agent/issues/72421)

- **[#69161] Collapse thinking/reasoning blocks by default（Desktop）**（4 评论，👍 1）  
  桌面端 thinking 块默认展开且流式重排，导致聊天窗口上下跳动，用户需要"默认折叠"设置。 [Issue #69161](https://github.com/NousResearch/hermes-agent/issues/69161)

- **[#20717] Dynamic Context Pruning**（4 评论，👍 2）  
  用户指出当前上下文压缩是"反应式"的，希望给模型一等公民方式主动管理陈旧上下文。 [Issue #20717](https://github.com/NousResearch/hermes-agent/issues/20717)

- **[#66392] Linux/X11: computer_use CUA pointer can crash entire KDE Plasma/Qt session**（4 评论）  
  `cua-driver 0.8.3` 创建临时 uinput 指针触发整会 KDE Plasma/Qt 崩溃，上游报告已提交。 [Issue #66392](https://github.com/NousResearch/hermes-agent/issues/66392)

- **[#70422] Desktop — accidental composer drag/pop-out when selecting text**（4 评论，👍 1）  
  macOS 桌面端选择文本时频繁误触 composer 拖出/分离窗口，影响正常编辑。 [Issue #70422](https://github.com/NousResearch/hermes-agent/issues/70422)

---

## Bug 与稳定性

按严重程度排列（P1 > P2 > P3），标注是否存在对应 fix PR（今日 PR 均**未合并**）：

### P1
- **[#72776] Session workspace hijacked to unrelated git repo** — 非 git workspace 在工具调用进入 git 目录后被劫持，影响 CLI + TUI 双入口。尚无对应 fix PR。 [Issue #72776](https://github.com/NousResearch/hermes-agent/issues/72776)

### P2
- **[#52261] 本地推理资源 400 误判为 `context_overflow`** — 触发破坏性 compress/reset 循环，直接影响 oMLX/MLX 本地推理用户。无 fix PR。 [Issue #52261](https://github.com/NousResearch/hermes-agent/issues/52261)
- **[#75598] 更新导致程序不稳定、多 gateway 冲突** — 约一周前开始，更新后部分用户环境整体不可用。无 fix PR。 [Issue #75598](https://github.com/NousResearch/hermes-agent/issues/75598)
- **[#36645] `terminal`/`execute_code` 绕过 `HERMES_WRITE_SAFE_ROOT` 文件安全限制** — 安全边界缺陷，agent 可通过 shell 写任意路径。无 fix PR。 [Issue #36645](https://github.com/NousResearch/hermes-agent/issues/36645)
- **[#73060] Gateway `/stop` 只丢弃队列头，FIFO overflow 仍会执行** — 停止语义不完整，排队消息仍会运行。无 fix PR。 [Issue #73060](https://github.com/NousResearch/hermes-agent/issues/73060)
- **[#75724] 更新前备份遇到非 SQLite `.db` 文件即中止** — Windows 上 `hermes update --backup` 误将所有 `.db` 文件视为 SQLite，导致备份失败。无 fix PR。 [Issue #75724](https://github.com/NousResearch/hermes-agent/issues/75724)
- **[#75768] Telegram typing indicator 无限卡住** — v0.19.0 回归，多 profile 场景下"正在输入"状态永不消失。无 fix PR。 [Issue #75768](https://github.com/NousResearch/hermes-agent/issues/75768)
- **[#66392] Linux/X11 computer_use 可导致 KDE Plasma/Qt 整会话崩溃** — 上游 cua-driver 0.8.3 问题。无 fix PR。 [Issue #66392](https://github.com/NousResearch/hermes-agent/issues/66392)
- **[#70077] Restore checkpoint 报 "session not found"** — 停止生成并编辑提示词后，恢复检查点失败。无 fix PR。 [Issue #70077](https://github.com/NousResearch/hermes-agent/issues/70077)
- **[#75684] Multiplex `/memory` 和 `/skills` 使用默认 profile 而非路由 profile** — 写审批界面与 agent 工具的 profile 不一致。无 fix PR。 [Issue #75684](https://github.com/NousResearch/hermes-agent/issues/75684)
- **[#72421] Azure Foundry 辅助调用 401** — 主会话通过 Entra ID 认证成功，辅助 LLM 任务失败。无 fix PR。 [Issue #72421](https://github.com/NousResearch/hermes-agent/issues/72421)
- **[#70422] Desktop composer 选择文本时误触拖出** — 桌面端高频体验 bug，暂无 fix PR。 [Issue #70422](https://github.com/NousResearch/hermes-agent/issues/70422)
- **[#75761] 同 profile 桌面会话覆盖同秒图片上传** — **已有对应 fix PR #75767**。 [Issue #75761](https://github.com/NousResearch/hermes-agent/issues/75761) · [PR #75767](https://github.com/NousResearch/hermes-agent/pull/75767)
- **更新相关修复（关联 PR）**：配置写入保护 PR #29897（若合并将避免 `config set` 破坏无效 YAML）、bootstrap Python 版本隔离 PR #75773、进程轮询守护 PR #75771。

### P3
- **[#75725] MiniMax-M3 interleaved thinking 在首个工具调用后停止思考** — `/anthropic` 端点下思维链只保留第一轮。 [Issue #75725](https://github.com/NousResearch/hermes-agent/issues/75725)
- **[#66084] `_tui_need_npm_install()` 误用 monorepo 根 lockfile 导致每次启动都要求重装依赖**。 [Issue #66084](https://github.com/NousResearch/hermes-agent/issues/66084)
- **[#75708] mem0 插件忽略 `gateway_session_key`，API server 路径记忆落错用户**。 [Issue #75708](https://github.com/NousResearch/hermes-agent/issues/75708)
- **[#75647] `hermes doctor` 对默认 builtin memory provider 误报 "plugin not found"**。 [Issue #75647](https://github.com/NousResearch/hermes-agent/issues/75647)
- **[#74248] Codex app-server 最终消息在 Discord 上重复投递** — 已有同方向 fix PR #69457（待合并）。 [Issue #74248](https://github.com/NousResearch/hermes-agent/issues/74248) · [PR #69457](https://github.com/NousResearch/hermes-agent/pull/69457)
- **[#60637] Email gateway 大收件箱启动时可能重放旧未读邮件**。 [Issue #60637](https://github.com/NousResearch/hermes-agent/issues/60637)

---

## 功能请求与路线图信号

### 高热度/高价值需求
- **[#69161] Desktop 默认折叠 thinking/reasoning 块** — 解决流式渲染导致的窗口跳动问题，直接影响桌面端日常体验。 [Issue #69161](https://github.com/NousResearch/hermes-agent/issues/69161)
- **[#20717] Dynamic Context Pruning** — 将上下文压缩从"反应式"升级为"模型可主动管理"，4 评论 + 2 👍，需求方有明确设计思路。 [Issue #20717](https://github.com/NousResearch/hermes-agent/issues/20717)
- **[#19128] 为阿里云 provider 添加 `qwen3.6-flash`、`deepseek-v4-flash`、`deepseek-v4-pro`** — 企业用户诉求，5 月初提出至今未实现。 [Issue #19128](https://github.com/NousResearch/hermes-agent/issues/19128)
- **[#73990] Desktop 发送消息时保留阅读历史滚动位置** — 长时间对话场景的真实痛点。 [Issue #73990](https://github.com/NousResearch/hermes-agent/issues/73990)
- **[#69203] Discord adapter 出站 `@Name` → `<@id>` mention 解析** — 飞书已有此能力，Discord 缺失导致 agent 无法可靠 @ 用户。 [Issue #69203](https://github.com/NousResearch/hermes-agent/issues/69203)

### 可能纳入下一版本的方向（依据今日待合并 PR）
1. **流式 TTS 全链路打通**：PR #75775（Discord 流式 TTS）+ PR #75325（voice barge-in）说明语音交互是当前重点。
2. **图像生成后端扩展**：PR #75764 新增 MiniMax 与 StepFun 两个后端，插件发现机制使得扩展成本很低。
3. **Google Vertex AI 双重认证**：PR #70663 补齐 API Key Express Mode，降低企业接入门槛。
4. **Codex 集成深度增强**：PR #75191 支持命名自定义 provider，PR #69457 修复重复投递。
5. **Provider 自动发现扩展**：PR #58043 覆盖 Mistral/Cohere/DeepInfra/SiliconFlow，改善本地凭据管理体验。

---

## 用户反馈摘要

- **本地推理用户对资源误判容忍度低**（#52261）："任何运行 Hermes 连接本地 MLX/oMLX server 的人都可能受影响"——资源不足被当作上下文溢出处理，导致对话历史被破坏性压缩/重置，用户明确要求修正错误分类。
- **自动更新信任度下降**（#75598）：用户表示"大约一周前开始，之前所有更新都很顺利"，现在更新导致程序不稳定、多个 gateway 互相冲突，且切换 profile 不会停用其他组件。这对更新发布流程是一个警示信号。
- **桌面端高频操作受阻**（#70422）：macOS 用户反馈在输入框选择文本时"不断地"触发拖出/分离，严重干扰日常使用。
- **子代理工具集膨胀影响明显**（#75737）：一位 macOS M1 + DeepSeek 用户报告，`delegate_task` 让每个子代理继承全部 21 个工具集（包括 audiolla、darktable、chemigram、computer_use 等），系统提示词膨胀数千 token，直接拖慢推理。该 Issue 今日已关闭，但问题本身值得跟进。
- **安全边界诉求强烈**（#36645）：用户指出 `HERMES_WRITE_SAFE_ROOT` 只限制原生工具，`terminal`/`execute_code` 可完全绕过，"agent 可以在文件系统任意位置写文件"，对安全敏感部署是硬伤。
- **诊断工具可信度问题**（#75647）：`hermes doctor` 在默认配置下误报 "builtin plugin not found"，虽然功能正常，但用户表示"尽管 built-in memory 完全可用"，这类误报会损害对诊断工具的信任。
- **企业级认证场景受阻**（#72421）：Azure Foundry + Entra ID 下主会话正常，但辅助任务全部 401，影响标题生成、智能审批等自动化功能，企业用户反馈较为急切。

---

## 待处理积压

### 长期未修复的安全 Issue
- **[#7484] Session fixation via predictable session ID derivation** — 2026-04-11 创建，会话 ID 由 SHA256(第一条用户消息 + system prompt) 确定性推导，可被预判。近 4 个月未修复，属于安全边界问题。 [Issue #7484](https://github.com/NousResearch/hermes-agent/issues/7484)
- **[#43666] Redaction gaps at the persistence boundary** — 2026-06-10 创建，工具输出落盘、压缩块、DB URI 中存在明文密码泄漏。安全影响面较大。 [Issue #43666](https://github.com/NousResearch/hermes-agent/issues/43666)
- **[#36645] `terminal`/`execute_code` 绕过 `HERMES_WRITE_SAFE_ROOT`** — 2026-06-01 创建，文件安全限制可被 shell 完全绕过。 [Issue #36645](https://github.com/NousResearch/hermes-agent/issues/36645)

### 长期未合并的 PR
- **[#29897] fix(config): refuse config set on invalid yaml** — 2026-05-21 创建，2 个月以上未合并，修复 `hermes config set` 可能破坏无效 YAML 的问题。 [PR #29897](https://github.com/NousResearch/hermes-agent/pull/29897)
- **[#38938] fix(mcp): omit mcp-protocol-version header on initialize request** — 2026-06-04 创建，MCP 协议合规性修复。 [PR #38938](https://github.com/NousResearch/hermes-agent/pull/38938)
- **[#45888] Responses API guarded approvals 补全** — 2026-06-14 创建，涉及 gateway 消息投递与安全边界，`blast-moderate`，长期未合并。 [PR #45888](https://github.com/NousResearch/hermes-agent/pull/45888)
- **[#58043] Provider auto-discovery registry mappings** — 2026-07-04 创建，功能明确且有测试覆盖，仍待合并。 [PR #58043](https://github.com/NousResearch/hermes-agent/pull/58043)

### 关键观察
- 全部 50 个 PR 处于待合并状态，合并数为 0，可能形成**合并瓶颈**。
- 多个安全相关 PR（#71723、#38938）与高危 Bug fix（#75767、#75771）均未合并，建议维护者优先审阅。
- 长期 Issue 中安全类占比最高（#7484、#43666、#36645），且均无对应 fix PR，需尽早规划修复排期。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-01

## 1. 今日速览

过去 24 小时 PicoClaw 项目整体活跃度中等偏平静：未有新版本发布，Issues 侧更新 2 条（均为活跃状态、无关闭），PR 侧更新 3 条（全部待合并、无新合并）。值得关注的是，3 个等待合并的 PR 已分别开放 29~35 天，合并审查节奏偏慢，可能成为项目前进的瓶颈；同时 2 个活跃 Issue 均发生在 7 月底，说明社区反馈仍在持续流入。**项目健康度总体稳定，但维护者响应速度有待提升。**

---

## 2. 版本发布

过去 24 小时无新版本发布（最新 Releases 为空）。上次已知版本仍为 **v0.3.1**（来自 Issue #3292 的环境信息），目前未发现新版本预告或发布说明。

---

## 3. 项目进展

过去 24 小时 **无 PR 被合并或关闭**。但 3 个待合并 PR 的持续活跃表明项目正在以下方向推进：

- **DeltaChat 通道重构**：[PR #3222](https://github.com/sipeed/picoclaw/pull/3222)（trufae，创建于 07-03）精简 DeltaChat 实现并移除约 200 行代码，删除遗留特性、废弃基于密码的邮箱配置（改为 JSON-RPC 管理密钥），并更新邀请链接 API。若合并，将显著降低 DeltaChat 通道的维护成本。
- **新增 SimpleX 通道**：[PR #3193](https://github.com/sipeed/picoclaw/pull/3193)（dim，创建于 06-27）为项目增加 SimpleX 通道类型支持，拓展去中心化通信渠道覆盖。该 PR 已开放 35 天，是最早待处理的 PR。
- **模型默认回退链**：[PR #3200](https://github.com/sipeed/picoclaw/pull/3200)（lc6464，创建于 07-01）在 Web UI 和后端 API 中引入可配置的默认模型 fallback 链，允许用户设置默认模型、排序回退顺序并持久化。这直接改善多模型场景下的可用性。

> 总体来看，项目正在向「多通道通信（IRC / DeltaChat / SimpleX）」和「模型配置灵活性」两个方向积累变更，但全部处于等待审查状态，尚未落地到主分支。

---

## 4. 社区热点

当前最活跃的讨论集中在 **[Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)：IRC 长消息支持**，共获得 2 条评论，是过去 24 小时评论数最多的条目。

**核心诉求**：IRCv3 协议对单条消息有 512 字节限制，客户端会自动将长消息拆分传输；当前 PicoClaw 将拆分后的片段当作独立消息逐条处理，用户在 IRC 上发送结构化长文本时体验割裂。用户希望 PicoClaw 能识别并重组这些片段，将其视为一条完整消息处理。

该 Issue 虽由 superuser-does 于 07-22 创建，但直到 07-31 仍有评论更新，说明社区对跨协议消息一致性的关注度在上升。该需求会涉及 IRC 消息重组逻辑，与现有 PR 无直接冲突，属于独立功能演进。

---

## 5. Bug 与稳定性

过去 24 小时共报告 **1 个新活跃 Bug**，无已确认的崩溃或回归：

| 严重程度 | Issue | 问题 | 状态 |
|---|---|---|---|
| 中 | [#3292](https://github.com/sipeed/picoclaw/issues/3292) | 聊天界面输入框获得焦点时 CPU 占用过高（用户环境：v0.3.1 + Firefox/Linux，模型 deepseek-v4-flash） | 开放中，**暂无 fix PR** |

该问题已存在 8 天（创建于 07-24），目前仅 1 条评论，尚未看到维护者确认或定位。考虑到输入框聚焦触发高 CPU 往往涉及渲染循环或事件处理效率问题，建议尽快复现，避免影响日常聊天体验。

---

## 6. 功能请求与路线图信号

结合今日活跃 Issue 与待合并 PR，以下需求最有可能被纳入下一版本：

- **IRC 长消息重组（#3287）**：来自社区明确的功能请求，属于协议适配层改进，与项目「多平台消息聚合」定位一致。无技术阻碍，预计在后续 IRC 通道增强中实现。
- **模型默认回退链（PR #3200）**：若合并，将直接满足「多模型自动降级」场景需求。该功能与现有 Web UI 深度集成，已被社区期待（相关讨论见 #3287 作者对协议一致性的关注）。
- **SimpleX 通道（PR #3193）**：属于新通道类型扩展。SimpleX 以隐私保护为卖点，若合并将与 DeltaChat、IRC 形成差异化矩阵，适合作为 0.4.0 版本的功能亮点。
- **DeltaChat 精简（PR #3222）**：纯重构无新增功能，但为后续维护扫清障碍，预计将随代码审查一同合入。

> 路线图信号：当前所有新功能均处于代码就绪、等待审查状态，下一版本的发布节奏将直接取决于维护者能否在未来 1-2 周内完成对这三个 PR 的复审。

---

## 7. 用户反馈摘要

- **IRC 长消息处理是真实痛点**（[#3287](https://github.com/sipeed/picoclaw/issues/3287)）：用户明确描述了 IRC 512 字节限制下的消息拆分场景，并将其描述为「希望 PicoClaw 能理解长消息是单条延续」—— 说明当前 IRC 通道在真实使用中处理生成长文本时体验不佳，影响用户通过 IRC 使用 PicoClaw 的意愿。
- **前端性能问题已影响日常使用**（[#3292](https://github.com/sipeed/picoclaw/issues/3292)）：用户报告「输入框聚焦即高 CPU」，环境为 Firefox + Linux，且使用 deepseek-v4-flash 模型，说明该问题与浏览器渲染及前端状态管理相关，而非模型推理负载。评论中用户可能已补充更多复现细节（当前仅 1 条评论），值得维护者排查。
- **社区对配置灵活性有预期**：PR #3200 的模型回退链功能虽尚未合并，但其存在本身说明用户希望在多模型切换时拥有更细粒度的控制力，而非固定在单一模型上。

---

## 8. 待处理积压

以下 Issue/PR 已开放超过 20 天且长时间未获得维护者响应或合并，建议优先关注：

| 类型 | 编号 | 标题 | 开放天数* | 最后更新 | 说明 |
|---|---|---|---|---|---|
| PR | [#3193](https://github.com/sipeed/picoclaw/pull/3193) | Added simplex channel type | 35 天 | 07-31 | 新通道功能完整，长期待审，若已超出项目预期计划应明确回复 |
| PR | [#3200](https://github.com/sipeed/picoclaw/pull/3200) | feat(models): add configurable default fallback chain | 31 天 | 07-31 | 功能直接影响用户体验，建议尽快 review |
| PR | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup implementation, documentation -200LOC | 29 天 | 07-31 | 重构类 PR，涉及接口更名，需提前确认是否纳入破坏性变更版本 |
| Issue | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | [Feature] Better support long messages in IRC | 10 天 | 07-31 | 社区有明确诉求，建议标记 roadmap 或指派负责人 |
| Issue | [#3292](https://github.com/sipeed/picoclaw/issues/3292) | [BUG] CPU usage too high when focus on input box | 8 天 | 07-31 | 影响日常使用，暂无维护者回应，建议至少确认可复现 |

*\*开放天数按创建日期至今日（2026-08-01）估算，实际以 GitHub 数据为准。*

**重点关注**：3 个 PR 均在一周内被更新过，说明 PR 作者仍在积极维护；但缺维护者 merged 动作。长期搁置可能导致贡献者流失，建议维护团队制定明确的 PR 审查 SLA，并在 Issue #3287、#3292 上给出首次回应。

---

*本日报基于 sipeed/picoclaw GitHub 仓库公开数据生成，时间为 2026-08-01。所有链接均为 GitHub Issue/PR 真实地址，点击可跳转查看详情。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-08-01）

## 1. 今日速览

过去 24 小时 NanoClaw 项目整体活跃度中等偏高：共 8 条 Issue 更新（全部为开放状态，无关闭），10 条 Pull Request 更新（4 条已合并/关闭，6 条待合并），无新版本发布。讨论焦点集中在容器化部署限制（K8s、无 Docker 场景）、Apple Container 兼容性以及安全加固方向。值得关注的是 Issue 关闭率为 0，但存在多个长期未解决的老 Issue，维护者需加快响应节奏。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 项目进展

今日共有 4 条 PR 被合并/关闭，主要推进了以下方面：

- **[PR #3163] 修复 v2.1.54 release 路径**（`fix(release): restore the v2.1.54 release path`）：修复了发布流程中断的问题，保障后续版本可正常发布。  
  https://github.com/nanocoai/nanoclaw/pull/3163
- **[PR #3076] iMessage 统一本地 + Hosted 适配器**（`feat(imessage): unified local+hosted adapter targeting spectrum-ts v11`）：为 iMessage 集成做了统一适配层，瞄准 spectrum-ts v11，属于渠道集成的重要推进。  
  https://github.com/nanocoai/nanoclaw/pull/3076
- **[PR #1678] 更新语音转写技能文档**（`docs(skills): update voice transcription skills for Telegram + Linux`）：将 Whisper 本地转写支持扩展到 Telegram 与 Linux，并移除了 WhatsApp 的旧有限制。  
  https://github.com/nanocoai/nanoclaw/pull/1678
- **[PR #3165] Codex/copilot 变更**（`[follows-guidelines] Codex/copilot changes`）：已关闭，可能因不符合贡献指南或已被替代方案取代。  
  https://github.com/nanocoai/nanoclaw/pull/3165

此外还有 6 条 PR 仍在等待合并，涉及 Apple Container、Dial 渠道、安全加固等方向。整体来看项目在渠道扩展和发布稳定性上有实际推进，但 Issue 积压问题需要重视。

## 4. 社区热点

- **[Issue #1184] 受限 K8s 环境部署挑战**（3 评论，1 👍）：用户高度认可 NanoClaw 的极简轻量、安全替代方案，但希望在生产环境的受限 Kubernetes 集群中部署时遇到了阻碍。该话题反映了企业级用户在容器安全边界与部署灵活性之间的真实矛盾。  
  https://github.com/nanocoai/nanoclaw/issues/1184
- **[Issue #1732] native runner 模式——绕过 Docker 访问主机工具**（3 评论）：提出让 agent 直接运行在宿主机上，以使用 tmux、有头浏览器、macOS API 等工具。当前 Docker 隔离是安全优势，但也成为主机集成类场景的硬阻塞。该诉求与 #1184、#1225 形成共鸣。  
  https://github.com/nanocoai/nanoclaw/issues/1732
- **[Issue #1225] 无 Docker 运行询问**（2 评论）：用户明确表示其环境（Windows/Linux）无 Docker，希望获得非容器化运行方式。  
  https://github.com/nanocoai/nanoclaw/issues/1225

这些热点共同指向：用户对部署形态的灵活性要求愈发强烈，希望 NanoClaw 能覆盖更多受限环境和裸机场景。

## 5. Bug 与稳定性

按严重程度排列：

- **[高] Issue #3162：Telegram 配对因引导时 getMe 失败而静默失效**（`[Type: Bug, Priority: High]`）：一次启动时的 HTTP 调用失败会导致整个进程生命周期内配对功能失效，且无任何错误提示。已在 `channels` 分支验证，暂无对应 fix PR。  
  https://github.com/nanocoai/nanoclaw/issues/3162

- **[安全] Issue #2923：`ask_user_question` 卡片可被伪造点击篡改显示文本**：虽然响应本身会被 origin 校验拒绝，但伪造点击可覆盖卡片展示内容，属于展示/完整性欺骗。已有 PR #2651 处于开放状态，但尚未合并。  
  https://github.com/nanocoai/nanoclaw/issues/2923  
  对应修复 PR：https://github.com/nanocoai/nanoclaw/pull/2651

- **[中] Issue #2589：Apple Container 中 `host.docker.internal` 无法解析**：导致 OneCLI 代理 URL 在 microVM 内失效，且 Apple Container 不支持 `--add-host`，无 workaround。  
  https://github.com/nanocoai/nanoclaw/issues/2589

- **[中] Issue #2588：`skill/apple-container` 分支与 mainline 严重不同步**：引用不存在的 API、模块，且运行时从 Node+tsc 迁移到了 bun，导致 `/convert-to-apple-container` 技能一运行即失败。  
  https://github.com/nanocoai/nanoclaw/issues/2588

- **[待合并修复] PR #3161：结构化日志中敏感信息未脱敏**：`log.info/warn/error` 数据以 `JSON.stringify` 原样写入 `nanoclaw.log`，可能泄露凭据。该 PR 正在等待合并，属于安全修复。  
  https://github.com/nanocoai/nanoclaw/pull/3161

## 6. 功能请求与路线图信号

当前多项新功能请求与开放 PR 高度相关，可能进入下一版本：

- **原生 runner 模式（#1732）**：绕过 Docker 直接访问宿主机工具。该请求与 [PR #2809]（Apple Container runtime + remote OneCLI gateway）在“扩展运行时边界”方向一致，但 #1732 更强调非容器化执行。  
  https://github.com/nanocoai/nanoclaw/issues/1732  
  https://github.com/nanocoai/nanoclaw/pull/2809

- **Kubernetes 容器运行时（#2354）**：在用户提供的 K8s 集群上以 Pod 方式生成 agent 容器。该请求与 #1184（受限 K8s 部署）互相印证，说明 K8s 支持是较大的路线图缺口。  
  https://github.com/nanocoai/nanoclaw/issues/2354

- **渠道扩展持续活跃**：Dial 渠道（SMS + AI 语音）PR #3041、Hosted iMessage (Photon) PR #3164 均在开放中，社区对多渠道接入有明确需求。  
  https://github.com/nanocoai/nanoclaw/pull/3041  
  https://github.com/nanocoai/nanoclaw/pull/3164

- **安全加固成为显性投入**：PR #2651（交互响应 origin 校验）、PR #3161（日志脱敏）、PR #2954（安全报告与分诊策略）均处于待合并状态，说明项目正在系统性补齐安全能力。  
  https://github.com/nanocoai/nanoclaw/pull/2651  
  https://github.com/nanocoai/nanoclaw/pull/3161  
  https://github.com/nanocoai/nanoclaw/pull/2954

## 7. 用户反馈摘要

- **认可极简、轻量、安全**（#1184）：用户 JachinShen 表示“很欣赏这种极简方式，作为更臃肿 agent 框架的轻量安全替代品很棒”，但受阻于生产环境部署，说明口碑好但落地门槛需降低。
- **无 Docker 场景的强烈需求**（#1225）：用户 wzlu 的环境同时包含 Windows 和 Linux，且没有 Docker，直接询问能否无容器运行。这是对非 Docker 部署方式的直白诉求。
- **Apple Container 体验不佳**（#2588/#2589）：用户 snymanpaul 发现转换技能“一运行就失败”，且代理 URL 无法解析，反映出 macOS 原生容器支持虽在推进，但当前状态不可用。
- **Telegram 配对痛点**（#3162）：用户 glifocat 验证了配对功能会因启动期的一次 getMe 失败而“永久锁死”，且系统无任何提示，用户困惑且难以自诊断。

## 8. 待处理积压

以下 Issue/PR 长时间未获得有效响应或合入，建议维护者优先关注：

- **[Issue #2588 / #2589] Apple Container 分支不同步及网络解析问题**（5 月 22 日创建，至今未修复）：影响 macOS 用户的容器化功能，建议合并/参考 PR #2809 来统一解决。  
  https://github.com/nanocoai/nanoclaw/issues/2588  
  https://github.com/nanocoai/nanoclaw/issues/2589

- **[Issue #2354] Kubernetes 容器运行时需求**（5 月 8 日创建）：与 #1184、#1732 构成同一方向的路线图信号，但目前没有对应 PR 或维护者回应。  
  https://github.com/nanocoai/nanoclaw/issues/2354

- **[PR #2651] `ask_user_question` 响应来源校验修复**（5 月 30 日创建）：关联安全 Issue #2923，至今未合并，安全类补丁不应长期滞留。  
  https://github.com/nanocoai/nanoclaw/pull/2651

- **[PR #2809] Apple Container runtime + remote OneCLI gateway**（6 月 18 日创建）：是解决 #2588/#2589 的关键 PR，仍处于开放状态，建议推进评审和合并。  
  https://github.com/nanocoai/nanoclaw/pull/2809

- **[PR #2954] 安全报告与分诊策略文档**（7 月 4 日创建）：安全治理文档缺失，会影响外部安全研究者的上报流程，应尽快合并。  
  https://github.com/nanocoai/nanoclaw/pull/2954

---

*本日报基于 2026-08-01 的 GitHub 公开数据生成，所有链接均来自数据源标注的仓库路径（nanocoai/nanoclaw）。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-01

## 1. 今日速览

过去 24 小时 NullClaw 项目整体活跃度处于低位：**0 条 Issue 更新**（无新增、无关闭），**1 条 PR 更新**（`#981` 处于待合并状态，无合并/关闭），**0 个新版本发布**。当前唯一焦点是 `#981` 提出的 `grok-cli` provider 功能扩展，该 PR 在 7-31 有更新，说明社区提交者仍在推进功能完善。项目没有 Bug 报告、崩溃或回归问题，健康度良好，但维护者需要尽快对 `#981` 进行评审以避免功能积压。

## 3. 项目进展

- **今日无合并/关闭的 PR**，主分支未发生代码变更，项目进展主要体现在待合并功能的推进上。
- 值得关注的是 `#981`（待合并）：[feat(provider): add grok-cli provider for xAI Grok CLI](https://github.com/nullclaw/nullclaw/pull/981)
  - 该 PR 新增了基于本地 `grok` 命令行工具的 provider，遵循与已有 `codex-cli` / `gemini-cli` / `claude-cli` 相同的 spawn-per-request 模式。
  - `grok-cli` 被设计为**可选 provider**，需要用户自行安装并认证 `grok` CLI 后即可使用。
  - 如果合并，NullClaw 将新增第五种 CLI 类 provider，进一步扩展多后端接入能力。

## 4. 社区热点

- 今日项目唯一活跃的动态为 PR [#981](https://github.com/nullclaw/nullclaw/pull/981)。虽然该 PR 暂无评论和点赞，但其功能本身有明确信号：社区用户希望将 xAI Grok 本地 CLI 接入 NullClaw，以**较低门槛**扩展新模型来源。结合项目中已有的多个 CLI provider，可以看出“以本地 CLI 为桥接后端”的模式正在成为项目的重要扩展路径，后续可能持续增加对其他 AI CLI 工具的支持。

## 5. Bug 与稳定性

- 今日**无新增 Bug、崩溃或回归问题**报告。项目在稳定性和代码质量方面未有负面信号，近期没有需要紧急修复的缺陷。

## 6. 功能请求与路线图信号

- **新功能请求**：PR [#981](https://github.com/nullclaw/nullclaw/pull/981) 是当前最明确的功能请求信号，目标是将 `grok` CLI 作为新 provider。该 PR 的摘要和实现方式与现有 provider 保持一致，功能完整度较高，**有较大可能被纳入下一版本**。
- **路线图信号**：项目已形成 `codex-cli` → `gemini-cli` → `claude-cli` → `grok-cli` 的 CLI provider 扩展序列，说明路线图中“接入更多本地 AI 命令行工具”是一个持续推进的方向。

## 7. 用户反馈摘要

- 今日**无新增 Issues 评论**，缺乏足够的用户反馈数据。
- 唯一的用户信号来自 PR `#981` 的提交者：其核心诉求是“不需要在 NullClaw 中内置大型依赖，通过调用已有本地 CLI 即可接入 Grok”，并且希望保持 provider 的**可选择性**（可选安装）。这一模式已在多个 provider 中验证，属于社区接受度较高的使用场景。

## 8. 待处理积压

- **[PR #981] feat(provider): add grok-cli provider for xAI Grok CLI** — [链接](https://github.com/nullclaw/nullclaw/pull/981)
  - 创建于 2026-07-29，最近更新 2026-07-31，已经历约 3 天等待。
  - 目前无 reviewer 介入和评论，也没有 merge 状态变化。
  - 建议维护者尽快安排代码评审，确认是否与现有 provider 架构一致，并合入或给出反馈，以避免该功能长时间搁置。

---

> 数据说明：本报告基于 NullClaw 仓库 2026-08-01 的 GitHub 公开数据生成。`#981` 的评论数为 `undefined`，暂按无评论处理。项目整体活跃度偏低，但功能开发仍有信号，保持观察即可。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-01

## 1. 今日速览

过去 24 小时项目活跃度极高：共 38 条 Issue 更新（30 条活跃 / 8 条关闭）、50 条 PR 更新（18 条待合并 / 32 条已合并或关闭），无新版本发布。核心动态集中在三条线：① 目标架构重构 Wave 1 的契约抽取系列取得阶段性成果，WS1.1–WS1.3 三条 XL 级 PR 全部落地，WS1.4–WS1.7 已进入评审或在途；② ilblackdragon 一次性提交 7 个 pi-harness 采用计划 issue（含 4 个 P0），聚焦 prompt 缓存前缀稳定性与 token 计费准确性，是今日新增 issue 的主力；③ 安全面有一个 P0 级跨用户内存泄漏（[#6900](https://github.com/nearai/ironclaw/issues/6900)）仍在开放、暂无修复 PR。整体判断：项目正处于"架构收敛 + 性能/安全攻坚"双轨快节奏，健康度良好，但 P0 安全项与发布通道阻塞（[#5598](https://github.com/nearai/ironclaw/pull/5598)）需要重点关注。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 项目进展

过去 24 小时共 32 条 PR 合并/关闭。最重要的进展是目标架构（target architecture）Wave 1 契约抽取系列——三条 XL 级重构 PR 连续合并，将各层的 neutral contracts 从 `ironclaw_host_api` 中剥离：

| PR | 工作项 | 状态 | 说明 |
|---|---|---|---|
| [#6967](https://github.com/nearai/ironclaw/pull/6967) | WS1.1 | ✅ 已合并 | 完成 host_api turn 词汇表并退役 turns shim |
| [#6975](https://github.com/nearai/ironclaw/pull/6975) | WS1.2 | ✅ 已合并 | 抽取 `ironclaw_loop_contracts`，切换 `ironclaw_agent_loop` |
| [#6977](https://github.com/nearai/ironclaw/pull/6977) | WS1.3 | ✅ 已合并 | 抽取 `ironclaw_extension_contracts`，关闭双导入路径 |
| [#6980](https://github.com/nearai/ironclaw/pull/6980) | WS1.4 | 🔶 评审中 | 抽取 `ironclaw_product_contracts` + ChannelAdapter 半场 |
| [#6981](https://github.com/nearai/ironclaw/pull/6981) | WS1.5 | 🔶 评审中 | 密封证据铸造收敛到 witness grants（安全敏感） |
| [#6982](https://github.com/nearai/ironclaw/pull/6982) | WS1.6+1.7 | 🆕 今日新建 | 收窄 `ironclaw_common`、消除 product→runner 边 |

Wave 1 共 7 行，已完成 3 行。该系列为后续目标架构的执行扫清依赖债务，是项目当前的主线工程。

其他重要合并/关闭：

- [#6930](https://github.com/nearai/ironclaw/pull/6930) **feat(extensions): register hosted MCP servers**（已合并，+15,002/−1,818，153 文件）— 支持 tenant-runtime 注册 hosted MCP 服务器，自动检测 no-auth/bearer/OAuth，并接入既有扩展安装/激活/调用/移除生命周期。
- [#6908](https://github.com/nearai/ironclaw/pull/6908) **fix(webui): paginate admin users list**（已关闭）— 修复 [#6903](https://github.com/nearai/ironclaw/issues/6903) 管理员用户列表超过 100 人无法翻页的问题。
- [#6979](https://github.com/nearai/ironclaw/pull/6979) **docs(target-architecture): reconcile with #6930**（已合并）— 5 个 markdown 文件，让北向架构文档与实际合并的 hosted-MCP 注册保持一致。
- [#6932](https://github.com/nearai/ironclaw/pull/6932) **chore(deps): 34 项依赖升级**（已合并）— async-trait、thiserror、uuid 等常规更新。
- [#4022](https://github.com/nearai/ironclaw/pull/4022)、[#3942](https://github.com/nearai/ironclaw/pull/3942)、[#3952](https://github.com/nearai/ironclaw/pull/3952)（zmanian，均已关闭）— 三条长期挂起的修复/加固：HTTP 响应错误恢复为可恢复错误（撤销 #4014 引入的运行终止回归）、PilotAllowlist 枚举化、LocalFilesystem 基于 openat2/O_NOFOLLOW 的 TOCTOU 加固。

## 4. 社区热点

- [#6284](https://github.com/nearai/ironclaw/issues/6284) [EPIC] **error-recoverability endgame**（15 条评论，7/19 创建，持续活跃）— 讨论热度最高的 issue。核心诉求：每次 mid-run 错误都必须满足五条可恢复契约（run 存活、模型可见、携带原因与成功条件、模型获得行动回合、不报告非成功状态）。这直接反映 agent 可靠性是社区最关心的体验问题。
- [#6963](https://github.com/nearai/ironclaw/issues/6963) **Path-keyed CI gates**（5 条评论）— 追踪 #6946 未重写的 8 个路径键控 CI/dev gate 缺陷。发起人明确表示"checklist 一行不足以跟踪 8 个缺陷"，反映 CI 基础设施债务的治理需求。
- [#6524](https://github.com/nearai/ironclaw/issues/6524) [EPIC] **Hermetic capability and journey testing platform**（4 条评论）— 项目无法机械回答"每个能力/用户旅程是否有确定性覆盖"，社区在推动从 recorded-fixture 走向可机械验证的测试平台。
- 值得注意：[#6900](https://github.com/nearai/ironclaw/issues/6900) P0 跨用户内存泄漏虽然评论数只有 1，但属于最高优先级安全问题，热点权重应按严重性另计。

## 5. Bug 与稳定性

按严重程度排列：

**P0 安全**
- [#6900](https://github.com/nearai/ironclaw/issues/6900) [security, p0] **共享频道默认 subject 绑定将全部用户折叠进 operator 内存命名空间** — 未路由的共享会话（如多人 Slack 频道）中的身份相关操作会采用 operator 身份，构成跨用户内存泄漏。要求 fail-closed 或按 actor 绑定。**暂无 fix PR。**

**P0 性能/正确性（今日新增，pi-harness 采用计划）**
- [#6984](https://github.com/nearai/ironclaw/issues/6984) 缺少显式 Anthropic `cache_control` breakpoints（rig adapter 仅注入根级控制，依赖自动缓存）。
- [#6985](https://github.com/nearai/ironclaw/issues/6985) prompt 前缀被持续变更（nudges 位置、system block 内 timestamp、per-run memory retrieval），导致整个缓存前缀失效。
- [#6986](https://github.com/nearai/ironclaw/issues/6986) 工具数组在 mid-run 被渐进式披露改变，破坏 byte-identical 前缀。
- [#6987](https://github.com/nearai/ironclaw/issues/6987) 缺少 pin 住"跨轮字节一致 prompt 前缀"的集成回归测试。
- 以上 4 个均为 P0，由 ilblackdragon 于今日集中提交（对应 pi-harness 计划 P0 #1–#4），**暂无 fix PR**。

**P1（今日新增）**
- [#6988](https://github.com/nearai/ironclaw/issues/6988) compaction 上下文预算硬编码 128k，应基于实际模型窗口推导。
- [#6989](https://github.com/nearai/ironclaw/issues/6989) `ModelWorkRequest::for_assistant` 从 `content_ref` 字符串长度估算 token——估的是引用串本身而非被引用内容，属于明确计算 bug。
- [#6990](https://github.com/nearai/ironclaw/issues/6990) compaction 的 summarization 推理会污染 prompt 缓存/会话亲和性。

**性能回归**
- [#6974](https://github.com/nearai/ironclaw/issues/6974) libSQL `thread_store_writes` 病态：工具密集场景 p95 达 37–135s（#6696 之后）。已从 [#6973](https://github.com/nearai/ironclaw/pull/6973) 拆出独立跟踪。
- [#6973](https://github.com/nearai/ironclaw/pull/6973) [OPEN] **Postgres API 容量回归修复** — p95 从 3.74s 恶化到 12.0s，send_message 从 275ms 恶化到 4.78s，而 mock-LLM 延迟持平，定位为 row-native process journal（#6696）引入。**已有修复 PR 在评审。**

**功能 Bug**
- [#6940](https://github.com/nearai/ironclaw/issues/6940) [p2] IronHub 所有技能的 CTA 按钮均跳 404。**无 fix PR。**
- [#6972](https://github.com/nearai/ironclaw/issues/6972) [p2] 新账号 email 认证后无法登录。**无 fix PR。**
- [#6903](https://github.com/nearai/ironclaw/issues/6903) Admin 用户列表超过 100 人无法加载后续页 — ✅ 已由 [#6908](https://github.com/nearai/ironclaw/pull/6908) 修复。

**CI/工具链**
- [#6978](https://github.com/nearai/ironclaw/issues/6978) reborn-tests.yml 的 `workflow_dispatch` 结构性失败：`critical-mutation` 被跳过但 roll-up 判定不允许跳过，导致"零真实失败仍整体红色"。
- [#6947](https://github.com/nearai/ironclaw/issues/6947) `classify-test-scope.sh` 的 glob 早于 product-crate 合并，导致 `ironclaw_product` 被错误归类为 legacy-only。
- [#6963](https://github.com/nearai/ironclaw/issues/6963) 8 个路径键控 CI gate 缺陷的汇总跟踪。

## 6. 功能请求与路线图信号

- [#6971](https://github.com/nearai/ironclaw/issues/6971) [feature] **标准化 "Tools" vs "Extensions" 术语** — 用户对产品概念模型困惑，并追问 tools/channels 作为 extension 类型的模型是否保留。属于产品定义层的小改动，较易纳入下个迭代。
- [#6939](https://github.com/nearai/ironclaw/issues/6939) [feature] **迁移工具：将 legacy agent（Hermes/Openclaw）的设置/配置/内存迁入 IronClaw** — 用户明确表示"不愿从零开始"可能拒绝迁移。该需求直接影响获客与留存，建议评估为 onboarding 优先级。
- [#6983](https://github.com/nearai/ironclaw/issues/6983) [feature] **为 `ironhub` CLI 子命令添加 `hub` 别名** — 与既有 `iron-hub` 别名互补，低风险小改动。
- [#6854](https://github.com/nearai/ironclaw/issues/6854) [improvement] **扩展页描述 "Reborn" 品牌语改为 "Ironclaw 1.0"** — 外部口径一致性，纯文案改动。

路线图信号：

- **pi-harness 采用计划已实质化**：今日 7 个新 issue（#6984–#6990）全部来自该计划，且分包为 P0 缓存稳定性与 P1 计费/compaction 两条子线，说明该项目已有明确执行路径（参照 `docs/research/pi-agent-deep-dive.md` §7.3）。
- **技能选择权向模型移交**：新 epic [#6941](https://github.com/nearai/ironclaw/issues/6941)（从 #6565 拆出的可独立交付子集）+ PR [#6938](https://github.com/nearai/ironclaw/pull/6938)（"the model chooses the skill, not a keyword scorer"），预示下个版本技能激活机制将从关键词打分器转向模型自主决策。
- **Hosted MCP 生态扩展**：#6930 合并后，注册/生命周期主链路已通，后续 [#6778](https://github.com/nearai/ironclaw/issues/6778)（按安装而非扩展 id 发布目录）等安全补全会跟进。

## 7. 用户反馈摘要

过去 24 小时以 sergeiest 为入口提交了一批真实用户反馈（多为 p2），共性痛点集中在 onboarding、概念一致性、隐私隔离与无人值守运维：

- **基础流程损坏**：[#6940](https://github.com/nearai/ironclaw/issues/6940) IronHub 所有技能 CTA 404（用户不确定归属方）；[#6972](https://github.com/nearai/ironclaw/issues/6972) 新账号 email 认证不可用，直接阻断 onboarding。
- **概念与品牌**：[#6971](https://github.com/nearai/ironclaw/issues/6971) "Tools" vs "Extensions" 令用户困惑；[#6854](https://github.com/nearai/ironclaw/issues/6854) 扩展页仍用 "Reborn" 品牌语，与 "Ironclaw 1.0" 外部口径不一致。
- **隐私担忧**：[#6866](https://github.com/nearai/ironclaw/issues/6866) 所有用户共享同一 home 目录、工作区互相可见（security p2，由 tobias.holenstein 报告）。
- **无人值守运维**：[#6976](https://github.com/nearai/ironclaw/issues/6976) `ironclaw service install` 未启用 user lingering，导致 Proxmox VM/无头服务器场景无法可靠无人值守运行。
- **迁移成本**：[#6939](https://github.com/nearai/ironclaw/issues/6939) legacy 用户因无法携带配置与记忆而拒绝迁移。
- **已解决**：[#6903](https://github.com/nearai/ironclaw/issues/6903) Admin 用户列表翻页问题已被 #6908 修复，反馈闭环良好。

## 8. 待处理积压

需要维护者关注的长周期或未响应项：

- [#5598](https://github.com/nearai/ironclaw/pull/5598) **chore: release（发布 PR）** — 由 ironclaw-ci[bot] 于 07-03 创建，已挂起近一个月，包含 `ironclaw_common` 0.4.2→0.5.0 与 `ironclaw_skills` 0.3.0→0.4.0 的 breaking changes。**发布通道疑似被阻塞，建议优先处理。**
- [#6284](https://github.com/nearai/ironclaw/issues/6284) error-recoverability endgame epic — 07-19 创建、15 条评论，社区热度高但尚无对应实现 PR。
- [#6524](https://github.com/nearai/ironclaw/issues/6524) Hermetic 能力与旅程测试平台 epic — 07-22 创建，与 #6962（Notion 用户旅程与 E2E 同步）直接相关。
- [#6565](https://github.com/nearai/ironclaw/issues/6565) 技能发现/路由/激活 epic — 07-23 创建，21 条验收标准；[#6941](https://github.com/nearai/ironclaw/issues/6941) 已拆出可独立交付子集，建议按子集推进。
- [#6831](https://github.com/nearai/ironclaw/pull/6831) 标准化消息框架 PR（XL，含 16 个核心操作与 12 码错误分类法）— 07-28 创建，仍在评审。
- [#6780](https://github.com/nearai/ironclaw/pull/6780) IronHub deep-link 注册/安装网关 PR（XL）— 07-28 创建，仍在评审。
- [#6906](https://github.com/nearai/ironclaw/pull/6906) fix: 仅展示 API-backed 项目数据（L）— 07-30 创建，仍在评审。
- [#6917](https://github.com/nearai/ironclaw/pull/6917) fix(webui): workspace 文件链接走认证预览（XL）— 07-30 创建，仍在评审。

---

*数据窗口：2026-07-31 至 2026-08-01（GitHub 24h 更新）。报告基于公开 issue/PR 元数据生成，严重级别以 issue 标签为准。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-01

---

## 1. 今日速览

过去 24 小时项目无新版本发布，Issue 侧 4 条全部为 stale 自动清理（4 月创建、今日关闭），无新建 Issue；PR 侧共 12 条状态更新，其中 7 月 31 日当天创建的 5 条新 PR（#2413–#2417）当日即被合并或关闭，另有 6 条 4 月旧 PR 被 stale 机制关闭，唯一开放 PR #2234（cron yield 修复）继续挂起待审。整体来看，项目当前处于**稳定性与性能优化收尾期**，而非新功能密集开发期；社区公开讨论热度偏低，但维护者对近两日提交的 OpenClaw 网关稳定性修复响应迅速，合入节奏高效。

---

## 2. 版本发布

无。

---

## 3. 项目进展

今日合入的 PR 集中于 **OpenClaw 网关运行时稳定性、工具调用安全防护与前端易用性**，是近期质量改善的延续：

- **DeepSeek 长会话缓存命中率回归修复（高价值）**
  - [#2413 fix(openclaw): keep live prompt tool-result history byte-stable across turns](https://github.com/netease-youdao/LobsterAI/pull/2413)：修复 live prompt 投影中固定 4x aggregate 字符上限导致每次请求重写已缓存历史的问题，恢复前缀缓存稳定性。
  - [#2415 fix(openclaw): drop aggregate cap in live tool-result prompt projection](https://github.com/netease-youdao/LobsterAI/pull/2415)：彻底移除 live 请求中的 aggregate cap，使未变化历史保持字节级稳定。
  - **效果**：DeepSeek 长会话缓存命中率从 ~57% 拉回 ~100%，对长会话用户的自托管成本与响应延迟是显著改善。

- **工具协议安全性**
  - [#2414 fix(cowork): prevent BTW tool protocol leakage](https://github.com/netease-youdao/LobsterAI/pull/2414)：清洗侧聊结果中的 provider tool-call 标记、对需要工具的边车提问返回稳定引导，并保留错误元数据贯穿 OpenClaw 网关——修复潜在的工具协议信息泄漏面。

- **前端体验优化**
  - [#2417 fix(sites): add copy success feedback](https://github.com/netease-youdao/LobsterAI/pull/2417)：站点 URL 与分享码复制后复用会话复制的成功反馈交互，补齐交互确认闭环。

- **版本发布流程**
  - [#2416 Release/2026.7.31](https://github.com/netease-youdao/LobsterAI/pull/2416)：发布 PR（文档、main、openclaw 三域变更），说明 7 月 31 日存在一次发布流程推进，尽管公开 Releases 尚无对应条目。

> 说明：今日关闭的 #1315/#1318/#1320/#1321/#172/#1308 均为 4 月提交的旧 PR，因长期无后续活动被 stale 机制关闭，不属于本轮并入主线的新进展。

---

## 4. 社区热点

今日无高热度讨论。当前 Issues/PR 中评论数最多为 2 条（均为 stale 自动关闭前的历史评论），公开讨论活跃度整体偏低。

相对受关注的是唯一保持开放状态的 PR：

- [#2234 [OPEN] fix(openclaw): cron yield descendant finalization](https://github.com/netease-youdao/LobsterAI/pull/2234)：修复 `sessions_yield` 后子 agent 完成事件无法驱动父 agent 继续执行的问题，覆盖普通会话、cron 并行、cron 串行三种场景。该 PR 自 6 月 30 日创建至今已挂起 1 个月，今日获得更新但仍未合入，是当前积压中最需要维护者关注的代码贡献。

---

## 5. Bug 与稳定性

按严重程度排序：

1. **高｜DeepSeek 长会话缓存命中率暴跌（100% → 57%）**
   根因：live prompt 投影对已缓存的 tool-result 历史重复施加 aggregate cap，导致前缀被重写。典型症状为长会话请求耗时和成本显著上升。
   修复：#2413、[#2415](https://github.com/netease-youdao/LobsterAI/pull/2415) 已合入，命中率恢复至 ~100%。

2. **高｜BTW 工具协议向侧聊结果泄漏**
   根因：provider 的 tool-call 标记随侧聊透出，可能引发协议污染或被外部模型误解析。
   修复：[#2414](https://github.com/netease-youdao/LobsterAI/pull/2414) 已合入，对 tool-call 标记做清洗并在需工具时返回稳定引导。

3. **中｜设置页切换标签后悬浮遮罩层残留**
   表现：cowork 记忆编辑器/模型连通性测试弹窗在切换设置页后仍以全屏 overlay 形式存在，UI 点击被拦截，界面呈现“只读”假象。
   修复：PR [#1321](https://github.com/netease-youdao/LobsterAI/pull/1321) 已提交实现，但今日被 stale 关闭未合入——若 Bug 仍在，需在新 PR 基础上重新提交或直接 rebase。

4. **低｜站点 URL/分享码复制无反馈**
   修复：[#2417](https://github.com/netease-youdao/LobsterAI/pull/2417) 已合入。

---

## 6. 功能请求与路线图信号

今日关闭的 4 条 Issue 均为 4 月提出的功能增强，虽被 stale 清理，但其中 3 条已有完整可行的实现 PR（同样被 stale 关闭）。这类“有实现但未能合入”的信号值得路线图层面复核：

| Issue | 需求 | 对应 PR | 当前状态 | 路线图判断 |
|---|---|---|---|---|
| [#1319](https://github.com/netease-youdao/LobsterAI/issues/1319) | 会话列表骨架屏，区分“加载中”与“空状态” | [#1320](https://github.com/netease-youdao/LobsterAI/pull/1320) | 均已关闭 | 体验改善明显，且实现已具备，**建议优先评估重新合入** |
| [#1314](https://github.com/netease-youdao/LobsterAI/issues/1314) | 拖拽调整侧边栏宽度（180–480px） | [#1315](https://github.com/netease-youdao/LobsterAI/pull/1315) | 均已关闭 | 需求明确，PR 实现较完整，适合下个 UI 迭代周期 |
| [#1317](https://github.com/netease-youdao/LobsterAI/issues/1317) | 侧边栏按钮显示快捷键 kbd 提示（macOS/Windows 差异化） | [#1318](https://github.com/netease-youdao/LobsterAI/pull/1318) | 均已关闭 | 小而美，降低新用户学习成本 |
| [#1311](https://github.com/netease-youdao/LobsterAI/issues/1311) | 表格长文本截断后 hover 展示全文、换行不带原始标签 | — | 无关联 PR | 仍待实现，属内容展示层优化 |

此外，[#172 Antigravity OAuth integration](https://github.com/netease-youdao/LobsterAI/pull/172)（2 月创建、今日关闭）是一个较大的 provider 接入特性，被 stale 关闭可能意味着产品方向暂不包含第三方 OAuth 扩展，建议维护者明确关闭原因（产品或资源决策），避免社区重复提交。

---

## 7. 用户反馈摘要

从今日关闭的 4 条 Issue 内容提炼真实用户痛点：

- **表格内容可读性差**（#1311）：表格单元格换行时残留原始 HTML 标签；长文本被截断后无悬停全文能力，用户无法判断内容全貌——典型的数据密集场景使用受阻。
- **小屏 / 大屏适配受限**（#1314）：侧边栏固定 240px，小屏用户需要更多主内容区空间，大屏用户希望展示更多会话标题；固定宽度导致长会话标题被截断不可读。
- **快捷键发现成本高**（#1317）：Ctrl+N / Ctrl+F 绑定后无任何 UI 提示，新用户只能进入设置页发现，不符合直觉。
- **启动时空状态闪烁造成“数据丢失”错觉**（#1319）：应用初始化期间先展示“暂无历史记录”，再渲染真实列表，用户容易误以为历史数据被清空——属于信任感层面的负面体验。

以上反馈集中在**前端交互细节与信息呈现**，说明现有用户对核心 AI 对话链路的稳定性认可度较高，当前不满主要集中在界面可用性上。

---

## 8. 待处理积压

- **PR #2234（唯一开放 PR，已积压 1 个月）**
  [fix(openclaw): cron yield descendant finalization](https://github.com/netease-youdao/LobsterAI/pull/2234)
  修复 cron 场景下子 agent 完成事件无法驱动父 agent 继续执行的缺陷，覆盖三种测试场景，测试计划尚未完成勾选。这是当前 backlog 中唯一线程活跃的开放 PR，建议维护者尽快安排 review 或明确阻塞原因。

- **PR #1321（Bug 修复被 stale 关闭，问题或仍存在）**
  [fix(settings): dismiss overlays when switching settings tabs](https://github.com/netease-youdao/LobsterAI/pull/1321)
  涉及设置页 overlay 残留导致 UI“只读”假象。若该问题在 7.31 发布中未包含，需重新基于最新主线提交。

- **三个功能 PR 对应需求是否存活（#1314/#1317/#1319）**
  骨架屏、侧边栏拖拽、快捷键提示的功能请求与其实现 PR 均在今日被 stale 关闭。若产品侧确认这些需求仍有效，建议在下一迭代中指派负责人合入；若搁置，建议在 Issue 中留下说明，避免重复提交。

- **PR #172（Antigravity OAuth 接入）**
  [feat(oauth): add Antigravity OAuth integration and proxy compatibility](https://github.com/netease-youdao/LobsterAI/pull/172)
  较大的 provider 扩展能力，虽未合入，但对使用 Antigravity 的用户存在实际价值。如非方向性否决，建议维护者标注后续计划。

---

**整体健康度评估**：项目当前处于“稳定压倒一切”的状态——核心合入集中在缓存稳定性与协议安全，而非新功能扩张；维护者对新鲜 PR 的响应速度良好（当日提交当日合入），但对 3–4 个月前的既有贡献缺乏明确的处理策略，导致 stale 批量清理产生“PR 和 Issue 成对关闭但功能未落地”的悬置局面。建议维护者在下次 release notes 中公开说明 stale 清理的决策标准，以便社区理解并重新规划贡献路径。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-01

## 1. 今日速览

过去24小时项目活跃度中等偏上，PR 更新（6条）明显多于 Issue 更新（2条），开发推进重心在安全加固与 Nostr/Web 功能扩展。两条 PR（#1168、#1176）已完成合并/关闭，分别落地了 NIP-29 群聊支持与 Markdown 复制/导出能力。安全方向上，tsauvajon 提交的两条安全修复 PR（#1179、#1180）仍待合并，涉及签名验证与路径穿越防护，建议优先处理。Issue 侧仅 1 条新 Bug 报告和 1 条旧 Enhancement 关闭，整体社区反馈平稳。无新版本发布。

---

## 3. 项目进展

**已合并/关闭 2 条 PR**

- [PR #1176 — feat(web): add Markdown copy and session export](https://github.com/moltis-org/moltis/pull/1176)（已关闭）
  为 Web 端添加了 Markdown 复制与会话导出功能。保留 assistant 回复的原始 Markdown，并支持加载完整分页历史导出为 Markdown 文件。该 PR 直接响应了 Issue #1131 的功能请求。

- [PR #1168 — feat(nostr): add NIP-29 group chat support for Buzz channels](https://github.com/moltis-org/moltis/pull/1168)（已关闭）
  为 `moltis-nostr` 添加了 NIP-29 群聊支持，使 Moltis 可接入 Block 开源的 Buzz 工作区（Nostr relay），实现 AI agent 与人类在同一团队频道中协作。此前仅支持 NIP-XX（较基础协议），此次扩展了 Nostr 通道的互操作性。

**仍开放但值得关注的 PR**

- [PR #1170 — fix(channels): gate /sh and privileged tools behind a per-account operators list](https://github.com/moltis-org/moltis/pull/1170)（开放中）
  将访问权限与操作者权限分离，通过 per-account operators 名单限制特权命令与主机工具的触达范围，覆盖命令、回调、队列回放、聊天执行及外部调用等路径。安全评审价值高。

整体来看，项目在 Web 体验（复制/导出）、Nostr 生态接入和安全边界管理三个方向上均有实质推进。

---

## 4. 社区热点

今日无高讨论量 Issue/PR（各条目评论数为 0 或未标注），不过以下两个信号值得关注：

- [Issue #1131 — [Feature]: Add copy + export as Markdown](https://github.com/moltis-org/moltis/issues/1131)
  获得 1 个 👍，是近期少数带积极反应的 Enhancement 诉求。该需求已被 [PR #1176](https://github.com/moltis-org/moltis/pull/1176) 实现并关闭，表明维护者能快速响应用户呼声，形成需求到交付的闭环。

- [PR #1168 — feat(nostr): add NIP-29 group chat support](https://github.com/moltis-org/moltis/pull/1168)
  来自活跃贡献者 penso，且与外部生态（Block 的 Buzz）打通，技术方向前瞻性较强。该 PR 能顺利合并，说明项目对开放协议（Nostr）接入持积极态度。

---

## 5. Bug 与稳定性

**新报告 Bug（1 条）**

- [Issue #1181 — [bug] Issue with GPT 5.6 Luna](https://github.com/moltis-org/moltis/issues/1181)（开放，0 评论）
  用户在使用 GPT 5.6 Luna 时遇到问题，摘要未给出具体报错信息。由于是全新模型，怀疑为兼容性或 API 适配问题。当前无 fix PR 关联，待维护者复现与判断。

**安全修复 PR（2 条，尚未合并）**

- [PR #1180 — fix(security): harden model and zip paths](https://github.com/moltis-org/moltis/pull/1180)（开放）
  修复两类可导致**任意文件写入**的漏洞：恶意 zip 包与 HuggingFace 仓库可能覆盖用户信任的文件（配置、凭据、脚本）并最终达成代码执行。涉及 `clawhub.rs` 中 zip 解压路径校验不严的问题。**严重程度：高**。

- [PR #1179 — fix(gateway): verify node pairing signatures](https://github.com/moltis-org/moltis/pull/1179)（开放）
  修复节点配对流程中签名绑定的缺失，防止调用方自行提供 key 或 challenge。作者表示这是其使用 Moltis 前希望解决的安全问题。**严重程度：中高**。

> 提醒：两条安全修复 PR 均已开放数天，建议维护者尽快安排 review 与合并。

---

## 6. 功能请求与路线图信号

- **Markdown 复制/导出 — 基本落地**
  [Issue #1131](https://github.com/moltis-org/moltis/issues/1131) 的诉求已由 [PR #1176](https://github.com/moltis-org/moltis/pull/1176) 实现，Web 端复制保留原始 Markdown、完整历史导出为 Markdown 文件。该功能预计进入下一版本。

- **向量数据库内存后端 — 实验性功能**
  [PR #1158 — feat(memory): add zvec vector database memory backend](https://github.com/moltis-org/moltis/pull/1158)（开放中）
  作者以 vibe-coding 方式实现了基于 Zvec + redb 的替代记忆后端，由 `zvec` cargo feature 控制（`full` 特性默认启用）。该 PR 已开放两周，若被接纳，将丰富记忆后端的生态选择，为本地运行场景提供更轻量的方案。

---

## 7. 用户反馈摘要

- **安全顾虑推迟采用**：PR #1179 的作者 tsauvajon 在摘要中表示 *"I'd like to use Moltis, but I've got a couple of security fixes I'd like to get in before doing so"*。这是一个明确的信号：外部用户对 Moltis 的安全边界存在顾虑，尤其是配对签名验证与路径处理方面。建议维护者重视这一反馈，加快安全修复的合并节奏。

- **Web 端复制体验需求**：Issue #1131 请求复制 assistant 回复时保留 Markdown 格式并支持会话导出，使用场景是用户希望将对话记录用于文档或知识库整理。该需求已获实现，社区满意度预计提升。

- **Nostr 生态使用场景**：PR #1168 引入了针对 Buzz（Block 开源 Nostr workspace）的群聊支持，表明有用户将 Moltis 部署在 Nostr 生态中，希望 AI agent 与人类在团队频道中以平等成员身份协作。

---

## 8. 待处理积压

| 条目 | 类型 | 开放时间 | 说明 |
|---|---|---|---|
| [#1158 feat(memory): add zvec vector database memory backend](https://github.com/moltis-org/moltis/pull/1158) | PR | 2026-07-17 至今 | 已开放两周以上，被标记为实验性，但无维护者明确意见。建议给出初步 review 反馈，避免贡献者等待过久。 |
| [#1179 fix(gateway): verify node pairing signatures](https://github.com/moltis-org/moltis/pull/1179) | PR | 2026-07-31 至今 | 安全修复，作者明确表示合并后才打算使用 Moltis，应优先处理。 |
| [#1180 fix(security): harden model and zip paths](https://github.com/moltis-org/moltis/pull/1180) | PR | 2026-07-31 至今 | 高危任意文件写入漏洞修复，需优先 review。 |
| [#1181 [bug] Issue with GPT 5.6 Luna](https://github.com/moltis-org/moltis/issues/1181) | Issue | 2026-07-31 至今 | 新 Bug 无评论，需维护者指派处理并引导用户补充复现信息。 |

---

**项目健康度总结**：开发节奏稳定，Web 功能与 Nostr 接入持续产出；安全类 PR 已到位但未合入，是当前最大的潜在风险；Issue 侧反馈量偏低，说明用户活跃度一般，但维护者响应速度（#1131 → #1176 闭环）值得肯定。建议下一步优先合并 #1179/#1180 两条安全修复，并对 #1158 给出明确决策。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-01

> 数据来源：github.com/agentscope-ai/CoPaw（含关联仓库 QwenPaw）

---

## 1. 今日速览

过去 24 小时项目活跃度极高：共产生 20 条 Issue 更新（新开/活跃 14，关闭 6）和 43 条 PR 更新（待合并 30，合并/关闭 13），日均 Issue 与 PR 吞吐量均处于近两周高位。当前项目正处于 AgentScope 2.0 迁移后的稳定性修复集中期，今日关闭的多个 Issue（#6544、#6555、#6558、#6529）均与 2.x 迁移引入的回归有关，且大部分已有对应修复 PR 落地或处于待审状态。值得注意的是，今日涌现出多位首次贡献者（mohitdebian 一人提交 5 个修复 PR），社区参与热度明显上升，但 30 个待合并 PR 也反映出维护者 review 带宽可能成为瓶颈。今日无新版本发布。

---

## 3. 项目进展

### 今日已合并/关闭的 PR（重要）

| PR | 关联 Issue | 说明 |
|---|---|---|
| [#6573 fix(audio): restore transcription for channel audio messages](https://github.com/agentscope-ai/QwenPaw/pull/6573) | #6544 | 修复飞书等频道音频消息在 AgentScope 2.0 迁移后静默转写失败的问题。根因是 `AudioContent(data=...)` 消息未正确进入转写流程，该 PR 补上了缺失的适配逻辑。 |
| [#6606 fix(read_file): accept numeric string line ranges](https://github.com/agentscope-ai/QwenPaw/pull/6606) | — | 修复 `read_file` 工具无法处理数字字符串形式的行范围参数的问题。 |
| [#6602 Fix/issue 6558 session integrity](https://github.com/agentscope-ai/QwenPaw/pull/6602) | #6558 | 修复多会话 UI 数据完整性问题：切换模式/会话时消息丢失、回复从头重渲染、指令漂移。通过共享的 per-agent TaskTracker 保留 in-flight 流，并在 Workspace 热重载后重连事件流。 |
| [#6604 docs(memory): explain ReMe self-evolving knowledge base](https://github.com/agentscope-ai/QwenPaw/pull/6604) | — | 完善 ReMe 记忆机制的文档，说明捕获、索引、整合、召回的生命周期，以及每日/摘要记忆层和 Auto-Dream 集成。 |

**小结**：今日合入的 13 个 PR 主要集中在 2.x 回归修复（音频、UI 会话完整性）、工具参数健壮性和文档完善。加上此前合入的修复，2.0.1 发布后暴露的多数稳定性问题已有关闭或正在关闭的对应 PR，项目整体处于"迁移阵痛后快速收敛"的阶段。

### 值得关注的开放 PR（推进中）

- [#6615 fix(agentscope): resolve compatibility and config loading issues](https://github.com/agentscope-ai/QwenPaw/pull/6615) — 针对 #6612（与 agentscope 2.0.4.post1 不兼容）的双 bug 修复。
- [#6611 refactor(context): align Scroll and memory with AgentScope lifecycle](https://github.com/agentscope-ai/QwenPaw/pull/6611) — 将 Scroll 收敛为唯一上下文协议，按 AgentScope Agent 基类设计范式重整 memory 生命周期，意图消除 Native/Scroll 双路径的不一致风险，属于架构层面的主动改造。
- [#6528 fix: resolve agent.json corruption](https://github.com/agentscope-ai/QwenPaw/pull/6528) — 修复 Windows 下 `agent.json` 系统性损坏（BOM/缺引号/双重编码），已覆盖对应 Issue #6520。
- [#6609 Fix spawn subagent schema](https://github.com/agentscope-ai/QwenPaw/pull/6609) — 通过调整类型标注为 `list | str | None`，使 schema 生成器正确推断 `batch` 为可选，修复单任务子代理模式不可用的问题。
- [#6610 fix: shell command execution hangs and UI freezes](https://github.com/agentscope-ai/QwenPaw/pull/6610) — 同时修复 #6608（长命令阻塞会话）和 #6589（超大输出冻结 UI）。

---

## 4. 社区热点

今日讨论最活跃的议题集中在**工具执行稳定性**与**记忆机制可靠性**两大主题，均为 2.x 版本暴露的真实使用痛点：

| 议题 | 评论数 | 核心诉求 |
|---|---|---|
| [#6537 Skill tags disappear on restart](https://github.com/agentscope-ai/QwenPaw/issues/6537) | 10 | Skill Pool 中设置的标签在重启后丢失。虽然已通过 API 正确写入 `skill_pool/skill.json`，但启动时 manifest 同步（reconciliation）会将其覆盖。用户认为这是回归问题（#3270 曾修复过）。 |
| [#6601 QwenPaw 不报空响应错误](https://github.com/agentscope-ai/QwenPaw/issues/6601) | 5 | 长会话逼近上下文窗口上限时，模型空响应但 QwenPaw 不报错，导致会话彻底失去响应。用户认为这属于框架层问题，需要显式的空响应/上下文超限告警。 |
| [#6563 CI blocks all fork PRs](https://github.com/agentscope-ai/QwenPaw/issues/6563) | 5 | `real-behavior-proof.yml` 工作流在 fork PR 上全部失败（`Resource not accessible by integration`），阻塞了所有社区贡献者的 CI 通过。这直接影响了今日多位 first-time contributor 的 PR 体验。 |
| [#6588 spawn_subagent single-task mode unusable](https://github.com/agentscope-ai/QwenPaw/issues/6588) | 4 | 子代理工具 schema 将 `batch` 暴露为必填，导致单任务模式无法使用。属于 API 设计与实际语义不一致的问题。 |
| [#6083 Desktop 工作区产出物快捷访问](https://github.com/agentscope-ai/QwenPaw/issues/6083) | 4 | 非技术用户访问 agent 产出文件需手动导航到 `~\.qwenpaw\workspaces\<agent_id>\`，流程中断工作流。反映 Desktop 端的"最后一公里"体验问题。 |

**分析**：评论区情绪整体克制但诉求明确——用户希望 2.x 在"可靠性"（空响应、超时、记忆不丢）和"可用性"（文件访问、CI 门槛）上尽快补齐。其中 #6563 尤其值得重视，它直接影响了开源社区贡献者的参与体验，已有实际贡献者因 CI 阻塞而无法合入代码。

---

## 5. Bug 与稳定性

按严重程度排列（高 → 低）：

### 🔴 严重（阻塞使用或数据丢失）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#6612 QwenPaw 2.0.1 与 agentscope 2.0.4.post1 不兼容](https://github.com/agentscope-ai/QwenPaw/issues/6612) | 随 agentscope 升级，proactive/memory 子系统出现两类运行时崩溃：`Msg.content` 类型错误导致的崩溃，以及工具权限死锁。 | ✅ [#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615)（开放） |
| [#6608 长命令绕过超时并阻塞飞书会话 1.5 小时](https://github.com/agentscope-ai/QwenPaw/issues/6608) | `execute_shell_command` 长时间运行（如 Feishu Bitable API 调用）绕过 `shell_command_timeout`，阻塞整个渠道会话；取消后产生孤儿子进程，且缺少 per-channel 总超时。 | ✅ [#6610](https://github.com/agentscope-ai/QwenPaw/pull/6610)（开放） |
| [#6589 execute_shell_command 超长输出冻结 UI](https://github.com/agentscope-ai/QwenPaw/issues/6589) | 数万行 stdout 一次性渲染阻塞前端主线程，界面完全卡死，只能强制关闭。 | ✅ [#6610](https://github.com/agentscope-ai/QwenPaw/pull/6610)（开放） |
| [#6520 agent.json 系统性损坏](https://github.com/agentscope-ai/QwenPaw/issues/6520) | Windows 环境下 `agent.json` 出现 BOM、缺引号、中文双重编码三类损坏，涉及 20+ 字段，导致系统完全无法运行。 | ✅ [#6528](https://github.com/agentscope-ai/QwenPaw/pull/6528)（开放） |

### 🟠 中等（功能异常或回归）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#6537 Skill tags 重启后丢失](https://github.com/agentscope-ai/QwenPaw/issues/6537) | Skill tags 保存成功但启动时 manifest 同步丢失（#3270 回归）。 | 暂无 |
| [#6601 空响应不报错](https://github.com/agentscope-ai/QwenPaw/issues/6601) | 上下文近上限时模型静默空响应，QwenPaw 无告警，长会话失去响应。 | 暂无 |
| [#6588 spawn_subagent 单任务模式不可用](https://github.com/agentscope-ai/QwenPaw/issues/6588) | 模型工具 schema 将 `batch` 强制为必填，单任务模式无法创建。 | ✅ [#6609](https://github.com/agentscope-ai/QwenPaw/pull/6609)（开放） |
| [#6512 大输出截断并触发 Internal error](https://github.com/agentscope-ai/QwenPaw/issues/6512) | `execute_shell_command` 返回 >30KB 时内容被截断，偶尔触发 `Internal error`，无法获取完整结果。 | —（与 #6589 同源，可关注 #6610 是否覆盖） |
| [#6555 Dream 记忆遗漏早期会话事件](https://github.com/agentscope-ai/QwenPaw/issues/6555) | 上下文压缩（scroll-out）导致每日记忆文件中丢失早间关键操作记录。 | ✅ [#6592](https://github.com/agentscope-ai/QwenPaw/pull/6592)、[#6564](https://github.com/agentscope-ai/QwenPaw/pull/6564)（开放） |

### 🟡 轻微 / 已关闭

| Issue | 描述 | 状态 |
|---|---|---|
| [#6544 飞书音频消息静默转写失败](https://github.com/agentscope-ai/QwenPaw/issues/6544) | 2.x 迁移后通道音频消息无法进入转写流程。 | ✅ 已关闭（#6573 合入） |
| [#6558 多会话 UI 数据完整性](https://github.com/agentscope-ai/QwenPaw/issues/6558) | 切换模式/会话丢消息、回复重渲染、指令漂移。 | ✅ 已关闭（#6602 合入） |
| [#6549 输入框被遮挡](https://github.com/agentscope-ai/QwenPaw/issues/6549) | 2.0.1 Desktop 在 150% 缩放下输入框不可见。 | 已关闭（处理方式未明确） |
| [#6529 ACP new_session 缺少 models 字段](https://github.com/agentscope-ai/QwenPaw/issues/6529) | 外部 ACP 客户端无法发现可用模型。 | ✅ 已关闭（处理方式未明确） |

---

## 6. 功能请求与路线图信号

| Issue / PR | 诉求 | 路线图判断 |
|---|---|---|
| [#6083 Desktop 工作区产出物快捷访问](https://github.com/agentscope-ai/QwenPaw/issues/6083) | 在 Desktop 窗口内一键直达工作区文件夹或下载最近产出物，避免手动导航目录。 | **高概率纳入**。与 [#6607 全局热键快捷输入窗口](https://github.com/agentscope-ai/QwenPaw/pull/6607) 同属 Desktop 体验增强方向，且 #6607 已提交 PR，表明维护者认可该方向。 |
| [#6160 为 QwenPaw 配备独立 Python 运行环境](https://github.com/agentscope-ai/QwenPaw/issues/6160) | 桌面版执行 Python 脚本时不再依赖系统全局解释器，改为内置或复用后端 Python。 | **中高概率**，对非技术用户是刚需，但涉及打包体积和架构调整，短期落地难度较高。 |
| [#6260 结果呈现提升：折叠思考和工具调用过程](https://github.com/agentscope-ai/QwenPaw/issues/6260) | 将思考/工具调用过程折叠，直接突出 Agent 交付的结果，避免结果被过程淹没。 | **高概率纳入**（1 个 👍）。该诉求与多数 C端 AI 产品的交互趋势一致，且 #6602 已开始涉及 Workspace 状态管理重构，为 UI 改进奠定基础。 |
| [#6593 增加统一且专业的清理页面](https://github.com/agentscope-ai/QwenPaw/issues/6593) | 全局维度管理/清理 agent 产生的记忆、工作区文件、备份、历史对话等数据，支持自动清理。 | **中概率**，属于长期使用后的运维需求，项目当前优先级可能在稳定性修复，但已被维护者看到。 |
| [#6587 桌面应用改名为"QwenPaw"](https://github.com/agentscope-ai/QwenPaw/issues/6587) | 去掉"Desktop"后缀，理由是该后缀"多此一举"| **低概率但成本极低**，商标和应用名一致性需评估。 |
| [#6302 feat: unify provider discovery, model metadata, routing](https://github.com/agentscope-ai/QwenPaw/pull/6302) | 统一模型提供商发现、元数据、路由和控制台管理。 | 大功能 PR，涉及面广，已开放 10 天仍待审。如合入，将显著改善多模型管理体验，并支撑 [#6526 NVIDIA NIM 支持](https://github.com/agentscope-ai/QwenPaw/pull/6526) 的落地。 |

---

## 7. 用户反馈摘要

### 真实痛点与场景

1. **长会话死寂（#6601）**：用户反馈在使用某些模型的长会话中，"模型仍会空响应，QwenPaw 仍不报错"导致"会话中彻底失去响应"。这在生产使用中是致命体验，用户期望框架层能检测空响应或上下文超限并显式告警。

2. **Shell 超时失效（#6608）**：一次去重脚本阻塞飞书会话 1.5 小时，用户后续消息全部排队，"只有系统取消任务后才恢复"。用户明确提到缺少 per-channel 总超时、取消后孤儿子进程两个具体问题。

3. **记忆丢失（#6555）**：早间 10:00 的关键操作（数据迁移/配置修改），到晚间 22:49 Dream 运行时已被滚动出上下文窗口，导致"这些操作的信息永远不会被写入当天的记忆文件"。用户对时间窗口漏洞的描述非常具体。

4. **配置损坏（#6520）**：Windows 用户遇到 `agent.json` 系统性损坏（BOM、缺引号、双重编码），"造成完全系统失败"。这提示 Windows 编辑器/同步工具与 UTF-8 无 BOM 文件之间的兼容性问题需要更严谨的处理。

5. **飞书音频不可用（#6544）**：`whisper_api` 配置可用但音频消息"静默失败"，无任何错误提示。用户对静默失败尤其不满。

6. **桌面端文件可达性（#6083）**："这个流程中断了工作流，尤其对于非技术用户很不友好"，用户明确期望"一键直达工作区文件夹或直接下载最近产出物"。

### 满意点

- #6602 的修复（会话完整性）获得了对应 Issue 的关闭确认。
- #6573 修复了飞书音频转写问题，相关 Issue #6544 已关闭。
- 多位社区贡献者在同一时段内密集提交修复 PR（如 mohitdebian 提交 5 个），说明文档和代码结构对贡献者友好度尚可。

---

## 8. 待处理积压

### ⏳ 长期未合并 PR（>10 天，需关注）

| PR | 创建时间 | 说明 |
|---|---|---|
| [#6203 fix(utils): bound and hide the Windows tasklist liveness probe](https://github.com/agentscope-ai/QwenPaw/pull/6203) | 2026-07-16 | 修复 Windows `tasklist` 探测缺少 timeout 和窗口隐藏的问题。已开放 16 天，标记为 Under Review，但一直未合入。 |
| [#6302 feat: unify provider discovery, model metadata, routing, and agent controls](https://github.com/agentscope-ai/QwenPaw/pull/6302) | 2026-07-21 | 大功能 PR，统一 provider 发现/元数据/路由/控制台管理。已开放 11 天，无明确阻塞原因说明。 |

### ⏳ 长期未解决 Issue（>10 天，需要维护者回应）

| Issue | 创建时间 | 说明 |
|---|---|---|
| [#6083 Desktop 工作区产出物快捷访问](https://github.com/agentscope-ai/QwenPaw/issues/6083) | 2026-07-14 | 已开放 18 天，评论 4 条，无维护者明确表态。 |
| [#6160 独立 Python 运行环境](https://github.com/agentscope-ai/QwenPaw/issues/6160) | 2026-07-16 | 已开放 16 天，评论 4 条，无维护者回应。 |
| [#6260 结果呈现提升](https://github.com/agentscope-ai/QwenPaw/issues/6260) | 2026-07-19 | 已开放 13 天，有 1 个 👍，无维护者回应。 |

### ⚠️ 其他需要关注的积压信号

- **CI 阻塞社区贡献（#6563）**：该 Issue 虽然已关闭，但需要确认 `real-behavior-proof.yml` 对 fork PR 的权限问题是否已在流程层面彻底解决，否则将持续影响后续贡献者的 CI 体验。
- **首次贡献者 PR 堆积**：#6528、#6609、#6610、#6615 均来自首次贡献者且至少涉及一个严重 bug，建议维护者优先 review 这批 PR，以保持社区贡献热情。
- **同一问题多 PR 竞争**：针对 #6555（记忆遗漏）有两个修复 PR（#6592、#6564）同时开放，建议尽快协调合并策略，避免社区贡献者重复劳动。

---

> **健康度总结**：项目正从 AgentScope 2.0 迁移的稳定性修复期走向收敛，今日合入的多个修复已直接解决用户报告的严重问题。但开放 PR 积压（30 条）和 CI 对 fork 的限制仍是社区贡献的瓶颈。若维护者能优先处理当前 5 个首次贡献者的 bug-fix PR，并明确 #6592/#6564、#6610/#6589 等多 PR 竞争的处理方案，项目的社区活跃度和稳定性将进一步提升。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

## ZeroClaw 项目动态日报 — 2026-08-01

### 今日速览

过去 24 小时 ZeroClaw 项目保持**高活跃度**：共产生 50 条 Issue 动态（45 条新增/活跃、5 条关闭）与 50 条 PR 动态（37 条待合并、13 条已合并/关闭），无新版本发布。今日动态以 **8–10 条高权重 RFC 讨论**为核心，议题横跨记忆生命周期、密钥安全、shell 命令策略与可观测性四个方向。与此同时，安全类 Bug 修复 PR（P1 级别）与架构设计 RFC 并行推进，项目正处于**架构重设计 + 安全加固的密集期**。值得关注的是，大量 RFC 已进入 `needs-maintainer-review` 状态，维护者决策队列（[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)）的有效运转将是近期交付节奏的关键。

---

### 项目进展

过去 24 小时共 **13 条 PR 合并/关闭**（数据快照中展示到 3 条，其余 10 条未展示具体信息）。已展示的合并/关闭项如下：

| PR | 变更 | 状态 | 影响 |
|---|---|---|---|
| [#8438](https://github.com/zeroclaw-labs/zeroclaw/pull/8438) | `feat(cron): add shell_output_format config for raw stdout output` | 已合并 / 已关闭 | 为 shell 类 cron 任务新增 `shell_output_format` 配置项，操作员可选择输出裁剪后的原始 stdout，默认保持 `wrapped` 信封格式，兼容性不受影响。标签含 principal contributor，投入度较高 |
| [#9292](https://github.com/zeroclaw-labs/zeroclaw/pull/9292) | `fix(zerocode): keep session picker scroll offset for mouse hit-testing` | 已合并 / 已关闭 | 修复 Ratatui 渲染时因 `ListState` 拷贝导致鼠标命中测试与实际滚动位置错位的问题，并补充 CJK 相关回归测试 |
| [#9300](https://github.com/zeroclaw-labs/zeroclaw/pull/9300) | `test(agent): refresh parity harness row-1 evidence after Epic A cut-overs` | 已合并 / 已关闭 | 同步了 agent-policy parity harness 的实现与文档，并与 Epic A 切换后的状态保持一致 |

**项目里程碑判断**：这些合并/关闭项集中在 **cron 输出格式、zerocode 交互细节、agent 测试基建**三个方向，说明项目在推进新功能的同时也在持续打磨既有模块的稳定性。而同样值得关注的重磅特性（A2A 出站、OpenAI 兼容端点、记忆生命周期重构）仍停留在 RFC/实现中阶段，尚未进入主干。

---

### 社区热点

1. **[#9048] RFC: Separate conversation history from agent-curated long-term memory**（14 条评论）— [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)
   用户明确提出当前代码把会话历史写进 `MemoryCategory::Conversation`，与长期记忆生命周期混在一起，运行时、网关、channel autosave 路径均受影响。希望从生命周期层面将两者彻底分离。根因是产品语义混乱与存储耦合，属于**高风险架构改动**。

2. **[#9127] RFC: Abstract a `KeySource` trait**（11 条评论）— [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9127)
   讨论主密钥在不同部署形态（本地、K8s、云托管）下的接入方式。ZeroClaw 的凭据加密体系（93 个 `#[secret]` 字段，ChaCha20-Poly1305，`enc2:` 格式）已相当完善，用户建议将密钥来源抽象为 trait，以便适配外部 KMS 或环境变量注入。

3. **[#7155] RFC: Add a per-execution confirmation tier for high-risk shell commands**（9 条评论）— [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)
   用户希望引入 "allow / ask / deny" 三档命令级策略（参考 Claude Code 模式），在当前"整工具放行/整工具阻止"之间增加中间态，以实现安全性与实用性的平衡。

4. **[#8933] RFC: Add cross-turn conversation correlation to OTel export**（9 条评论）— [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)
   要求把会话级 ID（`gen_ai.conversation.id`）透传到 OpenTelemetry，解决当前 trace 只能按 turn 隔离、无法做跨轮追踪的问题。

5. **[#9106] RFC: A2A outbound client（A2ATool）**（8 条评论）— [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9106)
   ZeroClaw 在 v0.8.2 已提供 A2A Server（入站），但 agent 无法主动调用外部 A2A 服务。该 issue 要求补齐 A2A 出站能力，打通 agent-to-agent 协同。

> **共性分析**：今日热点高度集中在 **安全边界（KeySource、shell 策略）** 与 **可观测性/记忆架构（OTel、Memory）** 两方面。用户诉求很一致——`我们需要更细粒度的控制、更清晰的架构边界，而不只是增加新功能`。

---

### Bug 与稳定性

#### 高严重度（P1 / 核心功能崩溃）

| 编号 | 问题 | 状态 | 修复 PR |
|---|---|---|---|
| [#9424](https://github.com/zeroclaw-labs/zeroclaw/pull/9424) | `fix(runtime): reject semantic-empty terminal completions` — `<think>` 仅文本被当作"空输出"，导致重试/回退/空白成功响应 | 🟡 PR 开放，P1 | 自身即修复，等待审核 |
| [#9433](https://github.com/zeroclaw-labs/zeroclaw/pull/9433) | `fix(config): enforce tool allowlists in ensure_no_escalation_beyond` — `SecurityPolicy` 校验遗漏 `allowed_tools/excluded_tools`，存在权限逃逸风险 | 🟡 PR 开放，P1 | 自身即修复，等待审核 |
| [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) | `[Bug] Landlock blocks shell access to required system files on Fedora` — shell 工具因 `/dev/null` 无法访问而全量失败 | ✅ 已关闭 / accepted（S2） | 已修复 |

#### 中严重度（P2 / 部分功能异常）

| 编号 | 问题 | 状态 | 修复 PR |
|---|---|---|---|
| [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) | TUI/Web 上下文仪表盘使用 `max_context_tokens`（裁剪预算）作为容量上限，与模型真实窗口不符，显示误导 | 🟡 PR 开放 | 自身即修复，等待审核 |
| [#9576](https://github.com/zeroclaw-labs/zeroclaw/pull/9576) | 多模态 `trim_old_images` 按整条消息丢弃图片（而非逐张计算），大消息场景可能误删仍有价值的图片 | 🟡 PR 开放（新提交） | 自身即修复 |
| [#9424](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | Signal/Voice Call 空凭据导致 supervisor 崩溃循环（每 2 秒重启一次） | ✅ 已关闭 / accepted | 已修复 |
| [#6724](https://github.com/zeroclaw-labs/zeroclaw/pull/9424) | （同上为另一 bug 编号，此处以 PR 为准） | — | — |

> 注：#6724 的链接与 #9424 在草稿中易混，正式版以表格中正确链接为准。

#### 低严重度 / 兼容性问题（P2-P3）

| 编号 | 问题 | 状态 |
|---|---|---|
| [#8943](https://github.com/zeroclaw-labs/zeroclaw/pull/8943) | Bedrock Nova 2 请求中显式 `cachePoint` 被拒不合法（400）；现有白名单 `"nova"` 需排除 Nova 2 | 🟡 PR 开放 |
| [#9038](https://github.com/zeroclaw-labs/zeroclaw/pull/9038) | Lark `send_message_url` 硬编码 `receive_id_type=chat_id`，导致非 `oc_` 前缀 id 发送报错 230001 | 🟡 PR 开放 |

---

### 功能请求与路线图信号

**接近落地（已 accepted / in-progress + 存在对应 PR）**

| 功能 | Issue / PR | 信号 |
|---|---|---|
| OpenAI 兼容 chat completions 端点 | [#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) | `status:accepted` + `in-progress`，已确认进入实现阶段 |
| 细粒度沙箱策略（fs/network） | [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | `status:in-progress`，多个安全 PR 正在联动 |
| KeySource 抽象 | [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | `in-progress`，安全凭据体系正在演进 |
| Langfuse 可观测性后端 | [#9556](https://github.com/zeroclaw-labs/zeroclaw/pull/9556) | 新 PR，OTel 导出能力扩展中 |
| Provider 错误分类（用户友好报错） | [#9557](https://github.com/zeroclaw-labs/zeroclaw/pull/9557) | 新 PR，覆盖 AuthFailed / RateLimited / QuotaExceeded 等类别 |

**可能进入下一版本（RFC 活跃 + 社区呼声高）**

| 功能 | Issue | 理由 |
|---|---|---|
| 高风险 shell 命令策略（allow/ask/deny） | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | P1 且 9 条评论，用户需求明确，可参考 Claude Code 交互模式 |
| 跨轮会话 OTel 关联 | [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | 配合 Langfuse 后端 PR #9556，生态闭环必要能力 |
| 记忆生命周期解耦 | [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) + [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | 多个设计师连续关注，是架构健康度重要债务 |
| DAG 任务规划/执行工具 | [#9554](https://github.com/zeroclaw-labs/zeroclaw/pull/9554) | 新 PR 已出现，agent 自主规划能力增强 |

**长期路线图信号**

- **“Everything is a plugin” 统一插件目录**（[#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489)）：将 Integrations（channels/providers/tools）与 Plugins（Wasm）合并为单一插件目录，6 条评论，作为长期架构方向持续演化。
- **Wasm-first 插件运行时、WASI 硬件支持、计算机使用（Computer-use）桌面控制** 等均为 `risk:high` 的后续储备。

---

### 用户反馈摘要

1. **记忆/历史语义混乱**（[#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)、[#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)）
   多位用户在评论中指出：对话自动写进 memory backend 后，Agent 的长期记忆被普通会话噪音污染，导致长期记忆"不长久、不准确"。期待在生命周期层面彻底区分。

2. **安全策略非黑即白，不可用**（[#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)、[#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)）
   用户明确表示完全放行/完全禁止的两档设置不满足真实场景；希望有命令级、场景级的中间确认层，而不是要求用户 `auto_approve` 整个 shell 工具。

3. **dashboard 配置引导不佳**（[#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724)）
   用户添加 Signal/Voice Call 渠道时留空凭据，本意是禁用，结果触发 supervisor 崩溃循环；评论指出 UI 应明确提示`未填写凭据 = 禁用`，而非启动空 channel。

4. **沙箱策略误伤基本系统调用**（[#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973)）
   Fedora 用户报告：Landlock 沙箱开启后连 `/dev/null` 都不可访问，shell 工具全军覆没。说明沙箱默认策略需要更充分的系统文件白名单测试。

5. **UI 上下文仪表误导**（[#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966)）
   用户反映 TUI/Web 的 context meter 可能显示"剩余 40%"，而实际模型可用的上下文早已告警，希望以真实 model context window 作为展示基准。

---

### 待处理积压

#### 长期未响应的重点 Issue（超过 60 天）

| Issue | 标题 | 创建时间 | 等待类型 | 重要度 |
|---|---|---|---|---|
| [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) | RFC: Opt-in LSP support for ZeroCode coding workflows | 2026-04-19 | needs-author-action | 中等——编码场景落地关键，但已停滞 3.5 个月 |
| [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) | [Feature]: "Everything is a plugin" 统一插件目录 | 2026-05-06 | needs-maintainer-review | 高——长期架构方向 |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | RFC: Decouple memory lifecycle policy from storage backends | 2026-05-22 | needs-maintainer-review | 高——与 #9048 高度联动 |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | RFC: Security UX, runtime credential boundaries, and isolation defaults | 2026-05-27 | needs-maintainer-review | 高——安全基线 |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC: Granular sandbox policy — filesystem and network restrictions | 2026-05-28 | in-progress | 高——安全 |
| [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) | RFC: Schema-Guided Reasoning（SGR）跨 provider 结构化输出 | 2026-05-29 | needs-maintainer-review | 中——记忆/输出稳定性 |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | RFC: 高风险 shell 命令确认层级 + allow/ask/deny | 2026-06-03 | needs-maintainer-review，P1 | 高——社区呼声最高之一 |

#### 待合并/待审核的关键 PR（需要维护者介入）

| PR | 标题 | 状态 | 紧急度 |
|---|---|---|---|
| [#9424](https://github.com/zeroclaw-labs/zeroclaw/pull/9424) | fix(runtime): reject semantic-empty terminal completions | P1，开放，等待审核 | 🔴 高 |
| [#9433](https://github.com/zeroclaw-labs/zeroclaw/pull/9433) | fix(config): enforce tool allowlists in `ensure_no_escalation_beyond` | P1，开放（安全逃逸） | 🔴 高 |
| [#8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996) | fix(goal): preserve running goals across daemon reload | XL 改动，等待作者 | 🟡 中 |
| [#8674](https://github.com/zeroclaw-labs/zeroclaw/pull/8674) | fix(zerocode): drop `<unset>` sentinel before seeding config edit buffer | 维护者已推 commit 修复 blocker，等待合入 | 🟡 中 |

> **维护者提示**：约 **37 条开放 PR** 中有大量标签为 `needs-author-action` 或 `stale-candidate`（如 #9300、#9038，以及 #8943 等），存在贡献者流失风险。建议优先处理 P1 安全类 PR（#9424、#9433）并推进 #8692 维护者决策队列，以避免 RFC 积压继续膨胀。

---

*本日报由 ZeroClaw 开源项目数据分析生成，数据时间窗口为 2026-07-31 ~ 2026-08-01。所有链接均指向 github.com/zeroclaw-labs/zeroclaw。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*