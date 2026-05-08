# OpenClaw 生态日报 2026-05-08

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-08 00:20 UTC

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

# OpenClaw 项目动态日报 | 2026-05-08

---

## 1. 今日速览

OpenClaw 今日保持**极高活跃度**：24小时内 500 条 Issues 更新（285 活跃/新开，215 关闭）、500 条 PR 更新（353 待合并，147 已合并/关闭），形成 **1:1.4 的活跃/收敛比**，表明社区参与热烈但代码审查吞吐承压。v2026.5.7 维护版本发布，聚焦发布管道可靠性修复。技术债务与架构重构成为主线——SQLite 运行时状态重构（#78595）、Codex 原生插件支持（#78733）、ACP 会话事件账本（#79093）等 XL 级 PR 并行推进，显示项目正处于**基础设施升级周期**。稳定性方面，5.4→5.5 升级引发的回归问题集中爆发，微信、Discord、Telegram 等渠道适配器出现兼容性问题，维护团队响应迅速但修复验证周期紧张。

---

## 2. 版本发布

### [v2026.5.7](https://github.com/openclaw/openclaw/releases/tag/v2026.5.7) — 维护版本

| 属性 | 详情 |
|:---|:---|
| 类型 | 维护修复（Maintenance Release） |
| 核心目标 | 提升插件发布管道可靠性，缩短维护版本恢复时间 |

**关键修复：**
- **ClawHub CLI 依赖安装重试**：解决插件发布时因瞬时网络失败导致的发布中断
- **预览环境容错**：当单个预览单元（preview cell）出现 flaky 失败时，保持其他已通过预览的插件可发布状态，避免"一损俱损"
- **发布后版本验证**：自动校验所有预期的 ClawHub 包版本，确保发布完整性

**迁移注意事项：** 无破坏性变更，建议所有使用 ClawHub 插件市场的用户升级以获得更稳定的插件更新体验。

---

## 3. 项目进展

### 已合并/关闭的核心 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#78733](https://github.com/openclaw/openclaw/pull/78733) | kevinslin | **Codex 原生插件应用支持**：将迁移后的 Codex 插件作为原生 Codex 应用能力暴露，消除旧桥接模式的额外线程语义与延迟 | Codex 集成架构现代化，为插件生态统一铺路 |
| [#79145](https://github.com/openclaw/openclaw/pull/79145) | hclsys | **npm 镜像支持**：`update-check` 尊重 `npm_config_registry` 环境变量 | 企业内网/中国开发者体验关键修复 |
| [#79136](https://github.com/openclaw/openclaw/pull/79136) | hclsys | **Node 25+ 兼容性**：`fetchWithSsrFGuard` 优先使用捆绑的 undici 8，修复 dispatcher 不匹配 | 前瞻性兼容最新 Node LTS |
| [#78572](https://github.com/openclaw/openclaw/issues/78572) | — | Discord `message` 工具 "Unknown Channel" 回归修复（已关闭） | 5.4 升级阻断性问题解除 |
| [#78846](https://github.com/openclaw/openclaw/issues/78846) | — | Mistral 思考模式 `[object Object]` 序列化污染修复（已关闭） | 输出质量关键修复 |

### 架构级进行中 PR

| PR | 规模 | 状态 | 战略意义 |
|:---|:---|:---|:---|
| [#78595](https://github.com/openclaw/openclaw/pull/78595) 运行时状态 SQLite 重构 | **XL** | 🔥 待合并 | 项目成立以来最大存储层重构，解决 JSON/JSONL 碎片化、锁竞争、修剪修复等系统性技术债务 |
| [#78678](https://github.com/openclaw/openclaw/pull/78678) `oc://` 工作空间寻址 CLI | **XL** | 待合并 | 统一文件寻址抽象，赋能编辑器扩展与自动化运维 |
| [#79093](https://github.com/openclaw/openclaw/pull/79093) ACP 会话加载事件账本 | **XL** | 待合并 | 桥接会话完整可回放，为多设备/长会话场景奠基 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|:---|
| 1 | **预构建 Android APK 发布请求** | 24 | 1 | 降低移动端部署门槛，非技术用户无法自行编译 | [#9443](https://github.com/openclaw/openclaw/issues/9443) |
| 2 | **`openclaw doctor --fix` 错误重写模型引用**（已关闭） | 16 | 3 | 升级安全性：自动修复工具不应破坏 OAuth 配置 | [#78407](https://github.com/openclaw/openclaw/issues/78407) |
| 3 | **Slack Block Kit 富消息支持** | 13 | 0 | 企业场景交互升级：从纯文本到结构化卡片 | [#12602](https://github.com/openclaw/openclaw/issues/12602) |
| 4 | **密钥掩码系统：让 Agent 用密钥但不可见** | 12 | 4 | **安全架构核心诉求**：防御提示词注入导致的凭证泄露 | [#10659](https://github.com/openclaw/openclaw/issues/10659) |
| 5 | **网关 WebSocket 连接风暴（事件循环饥饿）**（已关闭） | 11 | 2 | 高可用稳定性：卡住工具调用导致级联断开 | [#78402](https://github.com/openclaw/openclaw/issues/78402) |

### 诉求深度分析

- **#9443 Android APK**：由 AI 助手 QING 代提交，标志**"AI 代理代用户发声"**的新社区参与模式。技术门槛与移动端生态缺失是 OpenClaw 大众化的明显瓶颈。
- **#10659 密钥掩码**：获 4 👍 的高认同，与 #8719 "Security Profile v1.1"、#13610 "AWS Secrets Manager 集成" 形成**安全主题簇**，预示下一版本可能聚焦安全加固。
- **#12602 Slack Block Kit**：企业工作流集成深度需求，与 #78308 "MCP 工具调用渠道审批" 共同指向**B2B 场景成熟度**。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0-升级阻断** | [#78407](https://github.com/openclaw/openclaw/issues/78407) | `doctor --fix` 将 `openai-codex/*` 重写为 `openai/*`，锁定 ChatGPT-OAuth 用户 | ✅ 已关闭 | 已修复 |
| 🔴 **P0-服务崩溃** | [#78402](https://github.com/openclaw/openclaw/issues/78402) | 卡住工具调用导致事件循环饥饿，网关 WebSocket 大规模断开（1000/1005/1006） | ✅ 已关闭 | 已修复 |
| 🟡 **P1-渠道失效** | [#78232](https://github.com/openclaw/openclaw/issues/78232) | 微信插件 2.4.1 与 2026.5.4 `channelRuntime` API 变更不兼容 | ✅ 已关闭 | 已修复 |
| 🟡 **P1-渠道失效** | [#77837](https://github.com/openclaw/openclaw/issues/77837) | 微信 `getUpdates` fetch 失败（5.3→5.4 回归） | ✅ 已关闭 | 已修复 |
| 🟡 **P1-性能退化** | [#78604](https://github.com/openclaw/openclaw/issues/78604) | 压缩循环周期从 ~30min 缩短至 ~5min，上下文频繁丢失 | ✅ 已关闭 | 热修复未完全解决，待验证 |
| 🟡 **P1-模型异常** | [#78502](https://github.com/openclaw/openclaw/issues/78502) | Gemini 3.1 Pro/2.5 Pro 主会话挂起/超时，子代理正常 | 🟠 开放 | **无** |
| 🟡 **P1-输出污染** | [#78846](https://github.com/openclaw/openclaw/issues/78846) | Mistral 思考模式 `[object Object]` 污染消息与记忆 | ✅ 已关闭 | 已修复 |
| 🟢 **P2-渠道异常** | [#78572](https://github.com/openclaw/openclaw/issues/78572) | Discord `message` 工具 "Unknown Channel" | ✅ 已关闭 | 已修复 |
| 🟢 **P2-数据丢失** | [#76804](https://github.com/openclaw/openclaw/issues/76804) | WebChat 助手回复未持久化到会话转录（5.2 回归） | ✅ 已关闭 | 已修复 |

### 稳定性评估

**5.4→5.5 升级窗口为高风险期**：渠道运行时 API 变更（#78232、#77837）、模型引用迁移逻辑（#78407）、压缩调度（#78604）集中出现回归，表明**版本间兼容性测试覆盖不足**。维护团队响应速度优秀（多数 24-48h 内关闭），但 #78502 Gemini 主会话挂起尚无 fix PR，需重点关注。

---

## 6. 功能请求与路线图信号

### 高可能性纳入下一版本（已有 PR 或强信号）

| 功能 | Issue/PR | 信号强度 | 判断依据 |
|:---|:---|:---:|:---|
| **子代理工具允许列表透传** | [#78441](https://github.com/openclaw/openclaw/pull/78441) | ⭐⭐⭐⭐⭐ | PR 已开，guanbear 高频贡献，技术实现清晰 |
| **Discord 进度草稿渲染优化** | [#79146](https://github.com/openclaw/openclaw/pull/79146) | ⭐⭐⭐⭐⭐ | steipete 提交，当日创建，UX 改进明确 |
| **嵌入式运行器 prep 阶段可观测性** | [#78381](https://github.com/openclaw/openclaw/pull/78381) | ⭐⭐⭐⭐⭐ | 性能调优基础设施，guanbear 系列 PR 之一 |
| **iMessage 按组 systemPrompt** | [#78358](https://github.com/openclaw/openclaw/pull/78358) | ⭐⭐⭐⭐☆ | 修复 PR 已关联 Issue #78285，文档与实现同步 |
| **exec HTTP 工具显式白名单** | [#79106](https://github.com/openclaw/openclaw/pull/79106) | ⭐⭐⭐⭐☆ | 安全加固，outofcoffee 提交，解决文档与实现不一致 |

### 中长期路线图信号（无近期 PR，但社区强需求）

| 功能 | Issue | 需求热度 | 阻塞因素 |
|:---|:---|:---:|:---|
| **密钥掩码/安全架构** | [#10659](https://github.com/openclaw/openclaw/issues/10659)、[#8719](https://github.com/openclaw/openclaw/issues/8719)、[#13610](https://github.com/openclaw/openclaw/issues/13610) | 🔥🔥🔥🔥 | 需要架构级设计，与现有工具调用管道深度耦合 |
| **Slack Block Kit** | [#12602](https://github.com/openclaw/openclaw/issues/12602) | 🔥🔥🔥 | 渠道抽象层需扩展富消息协议 |
| **MCP 工具调用渠道审批** | [#78308](https://github.com/openclaw/openclaw/issues/78308) | 🔥🔥🔥 | 与现有 shell-exec 审批管道对齐，设计复杂度中等 |
| **会话快照保存/加载** | [#13700](https://github.com/openclaw/openclaw/issues/13700) | 🔥🔥 | 依赖 #78595 SQLite 重构完成后更易实现 |
| **Android 预构建 APK** | [#9443](https://github.com/openclaw/openclaw/issues/9443) | 🔥🔥 | CI/CD 管道与签名基础设施投入 |

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 Issue | 情绪 |
|:---|:---|:---:|
| **升级恐惧**：`doctor --fix` 自动修改配置导致服务中断，用户不敢自动更新 | [#78407](https://github.com/openclaw/openclaw/issues/78407) | 😰 焦虑 |
| **上下文黑洞**：压缩周期异常导致状态丢失，长会话用户被迫"重新开始" | [#2597](https://github.com/openclaw/openclaw/issues/2597)、[#78604](https://github.com/openclaw/openclaw/issues/78604) | 😤 挫败 |
| **渠道碎片化**：微信、Discord、Telegram 等渠道各自有独立 bug，多平台运维成本高 | 多个渠道 Issue | 😩 疲惫 |
| **成本失控**：故障转移无上限，昂贵模型链式调用导致账单飙升 | [#38248](https://github.com/openclaw/openclaw/issues/38248) | 😱 恐慌 |
| **安全裸奔**：Agent 可见完整 API 密钥，提示词注入即可泄露 | [#10659](https://github.com/openclaw/openclaw/issues/10659) | 😰 担忧 |

### 满意点

- **响应速度**：多数严重 bug 24-48h 内获得维护者响应与修复
- **渠道广度**：iMessage、微信、飞书、Telegram、Discord 等覆盖全面，"几乎能找到任何平台的接入方式"（#78285 评论隐含）
- **扩展性**：插件系统与 MCP 集成被多次提及为选择 OpenClaw 的核心原因

---

## 8. 待处理积压

### 需维护者重点关注

| Issue | 创建时间 | 最后更新 | 积压天数 | 风险 | 链接 |
|:---|:---|:---|:---:|:---|:---|
| **上下文/状态在意外压缩或会话重置后丢失** | 2026-01-27 | 2026-05-07 | **101天** | 长会话可靠性核心痛点，用户多次补充场景 | [#2597](https://github.com/openclaw/openclaw/issues/2597) |
| **Discord 图片以 base64 存储导致上下文溢出** | 2026-01-19 | 2026-05-07 | **109天** | 多媒体场景可用性瓶颈，技术方案明确（外部存储引用）但未实施 | [#1210](https://github.com/openclaw/openclaw/issues/1210) |
| **exec-approvals 拒绝列表支持** | 2026-02-01 | 2026-05-07 | **96天** | 安全策略灵活性，7 👍 高认同，与 #10659 安全主题关联 | [#6615](https://github.com/openclaw/openclaw/issues/6615) |
| **TUI 无障碍配置（禁用 emoji/unicode）** | 2026-02-05 | 2026-05-07 | **92天** | 包容性/合规风险，屏幕阅读器用户被排除 | [#9637](https://github.com/openclaw/openclaw/issues/9637) |
| **多会话架构 RFC** | 2026-03-17 | 2026-05-07 | **52天** | 架构级提案，与 #78595 SQLite 重构方向相关，需维护者反馈 | [#48874](https://github.com/openclaw/openclaw/issues/48874) |

### 积压健康度警示

- **>90 天未关闭 Issue 占比**：从样本看约 10%（5/50），主要为增强类功能，但 #2597、#1210 为**可用性缺陷**，建议提升优先级。
- **"AI 代提交"趋势**：#9443 由 QING 代 Lysen 提交，可能预示未来 Issue 流量结构变化，需评估 triage 流程适应性。

---

*日报生成时间：2026-05-08 | 数据来源：GitHub openclaw/openclaw 公开 API 与事件流*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析 | 2026-05-08

---

## 1. 生态全景

个人 AI 助手开源生态正经历**从"功能扩张"向"质量深化"的集体转型**：头部项目 OpenClaw 以 500 Issues/500 PR 的日吞吐量领跑，但 1:1.4 的活跃/收敛比暴露审查瓶颈；IronClaw、Moltis 推进激进的架构重构（Reborn/WASM），而 ZeroClaw 因 50 PR 零合并陷入"高输入、低吞吐"危机。共性痛点集中爆发——**会话持久化、多平台渠道稳定性、安全沙箱与用户体验的平衡**成为所有项目的攻坚焦点，同时桌面端（Tauri）和实时语音交互成为新一轮差异化战场。

---

## 2. 各项目活跃度对比

| 项目 | Issues (活跃/关闭) | PR (待合并/已合并) | 今日 Release | 健康度评估 | 关键信号 |
|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 (285/215) | 500 (353/147) | v2026.5.7 维护版 | 🟡 **高活跃、审查承压** | 1:1.4 活跃/收敛比，XL 级架构 PR 并行 |
| **NanoBot** | 9 (3/6) | 27 (19/8) | 无 | 🟢 **稳健推进** | 记忆系统深化，WebSocket 集群问题需审计 |
| **Hermes Agent** | 50 (42/8) | 50 (41/9) | v0.13.0 昨日发布 | 🟡 **发布后期、稳定性修复密集** | Gateway 层 P1 问题集中，295 贡献者规模 |
| **PicoClaw** | 36 (14/22) | 50 (31/19) | v0.2.8-nightly | 🟢 **高质量迭代** | Go 安全升级 + 会话管理修复，2 个新 P0 |
| **NanoClaw** | 9 (活跃) | 32 (9/23) | 无 | 🟢 **路由架构级修复完成** | A2A 多会话路由 24h 闭环，pnpm 危机解除 |
| **NullClaw** | 6 (5/1) | 7 (5/2) | 无 | 🟡 **审慎推进** | ACP/Cron 待审，低资源场景承诺待兑现 |
| **IronClaw** | 23 (16/7) | 50 (20/30) | **v0.28.0 Reborn 基板** | 🟡 **架构激进、用户场景滞后** | 8 PR 全为 Reborn 硬化，Telegram×Gmail P1 未修 |
| **LobsterAI** | 2 (2/0) | 45 (9/36) | **2026.5.7** | 🟡 **代码快、支持慢** | 4 P1 修复 vs 2 P0 用户阻断零响应 |
| **Moltis** | 4 (0/4) | 10 (1/9) | 2 个日期版本 | 🟢 **极高吞吐、零积压** | 语音→电话→图像全链路 + 去中心化身份 |
| **CoPaw** | 50 (30/20) | 33 (11/22) | 无 | 🟡 **高活跃、长债累积** | #280 技能讨论 2 月未决，#4101 Docker 回归 |
| **ZeroClaw** | 50 (50/0) | 50 (50/0) | **v0.7.5 被 CI 阻塞** | 🔴 **严重瓶颈** | 零合并、10 S1 bug 未修、文档-实现脱节 |
| **TinyClaw** | 0 | 0 | 无 | ⚫ **休眠** | — |
| **ZeptoClaw** | 0 | 0 | 无 | ⚫ **休眠** | — |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 | 核心差异 |
|:---|:---|:---|:---|
| **社区规模** | 500 Issues/500 PR 日吞吐量，11000+ open issues | Hermes 295 贡献者、CoPaw 50/33 为次量级；ZeroClaw 50/50 但零合并 | **绝对体量第一**，但"规模病"显著——issue 治理、审查瓶颈、升级回归 |
| **技术路线** | 插件市场（ClawHub）、多渠道运行时、SQLite 存储层重构 | Moltis 走 WASM+去中心化身份；IronClaw 押注 Reborn 宿主架构；NanoClaw 聚焦 A2A 路由 | **最大公约数策略**：最广渠道覆盖、最多模型适配、最活插件生态，而非架构激进创新 |
| **优势领域** | 渠道广度（微信/Discord/Telegram/飞书/iMessage 全覆盖）、Codex/MCP 集成深度、npm 生态兼容 | LobsterAI 偏桌面端；NullClaw 标榜低资源；PicoClaw 强在 Go 安全模型 | **"几乎能找到任何平台的接入方式"**——集成灵活性是核心壁垒 |
| **风险点** | 5.4→5.5 升级回归集中爆发；11000+ open issues 的治理焦虑；压缩周期导致上下文丢失 | Hermes #7335 已警觉 issue 失控；ZeroClaw 正经历类似危机 | **先发者的维护负担**：功能矩阵越全，兼容性测试覆盖越难 |

> **定位总结**：OpenClaw 是生态的**"最大公约数平台"**——不是任何单一技术方向的领跑者，但是开发者"先跑起来"的默认选择。其风险在于规模扩张与质量深化的平衡是否可持续。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---:|
| **会话持久化与长上下文可靠性** | OpenClaw (#2597, 101天积压)、NanoBot (Dream 记忆修复)、PicoClaw (#2796 历史丢失)、CoPaw (#4059, #3350)、ZeroClaw (#6517) | 压缩策略透明、状态不丢失、多轮对话不卡顿 | 🔥🔥🔥🔥🔥 |
| **多平台渠道稳定性** | OpenClaw (微信/Discord/Telegram 5.4→5.5 回归)、Hermes (Telegram 重连/Gateway 共享事件循环)、NanoBot (WebSocket 跨平台)、PicoClaw (Telegram 话题上下文)、LobsterAI (微信验证码流程断裂)、ZeroClaw (WhatsApp 协议升级中断) | 渠道运行时 API 变更兼容性、跨平台行为一致性、外部协议变更快速响应 | 🔥🔥🔥🔥🔥 |
| **安全沙箱与权限精细化** | OpenClaw (#10659 密钥掩码)、PicoClaw (exec guard 误拦截→修复)、ZeroClaw (#6516 ACP cwd 锁死, #6434 autonomy 假放行)、NullClaw (#167 curl 禁用争议) | Agent 可用密钥但不可见、沙箱规则理解语义而非纯文本、权限系统与 runtime 不断点 | 🔥🔥🔥🔥 |
| **桌面端原生体验** | LobsterAI (Windows 稳定性)、ZeroClaw (macOS Tauri 7 issue + 2 stacked PR)、Moltis (电话通道→实时语音) | 离线启动、系统级权限（截图/AX/AppleScript）、菜单栏托盘、universal binary | 🔥🔥🔥🔥 |
| **模型生态扩展与适配** | OpenClaw (Gemini 挂起、Mistral 序列化)、CoPaw (火山/DeepSeek)、ZeroClaw (Gemini CLI/Kimi/GLM-5)、NanoBot (DeepSeek-V4 reasoning_content) | 推理模型协议标准化、新模型快速接入、fallback 可控 | 🔥🔥🔥 |
| **MCP/工具调用基础设施** | OpenClaw (ACP 会话账本)、Hermes (MCP 审批子系统 IPC 缺失)、NanoClaw (A2A 路由)、NullClaw (ACP stdio 适配器)、CoPaw (MCP timeout 配置) | 工具发现异步化、审批持久化、跨 agent 调用路由正确性 | 🔥🔥🔥 |

---

## 5. 差异化定位分析

| 项目 | 核心用户画像 | 技术架构特色 | 功能侧重 | 关键短板 |
|:---|:---|:---|:---|:---|
| **OpenClaw** | 全栈开发者、多平台运营者 | Node.js/TypeScript 插件生态、SQLite 存储重构中 | 渠道全覆盖、插件市场、Codex 集成 | 规模病、升级回归、issue 治理 |
| **Hermes Agent** | 自托管爱好者、中文社区 | Python 异步、Gateway 中心化、Kanban 任务管理 | 任务完成可靠性、TUI 体验、飞书/QQ 等国内渠道 | Gateway 层稳定性、多代理架构滞后 |
| **PicoClaw** | Go 语言偏好者、安全敏感型 | Go 静态编译、Seahorse 记忆系统、exec 沙箱 | 安全模型、Telegram 深度优化、会话隔离 | LLM 重试机制缺失 75 天、附件支持 80 天 |
| **NanoClaw** | Claude Code 用户、多团队协作 | TypeScript/pnpm、A2A 显式路由、OneCLI 网关 | Claude 生态深度集成、多目的地会话、技能动态加载 | 多租户凭证隔离 2 个月未决 |
| **Moltis** | 隐私极客、去中心化信仰者 | Rust/WASM、Ed25519 TOFU、本地优先 | 语音全链路（STT/电话/TTS）、图像生成、联邦代理网络 | 社区极小（0 评论）、文档缺失 |
| **IronClaw** | NEAR 生态开发者、WASM 扩展者 | Rust Reborn 宿主架构、libSQL/PostgreSQL、WIT 接口 | 区块链邻近生态、WASM 沙箱、持久化状态 | 架构-产品落差大、crates.io 滞后、生产实例故障 15 天 |
| **LobsterAI** | 中文知识工作者、有道生态用户 | Electron/Tauri 混合、国产模型优先 | 桌面端协作、有道云笔记集成、小米/火山模型 | 用户支持响应滞后、付费链路阻断 |
| **CoPaw** | 企业 IT 管理员、AgentScope 迁移者 | Python 前后端一体、Web 控制台中心化 | 技能批量管理、飞书/微信企业渠道、Token 监控 | 长对话性能瓶颈、内置技能决策 2 月未决 |
| **ZeroClaw** | 早期技术采纳者、macOS 开发者 | Rust/Tauri、ACP 协议、Docker 可选 | 桌面端自动化（截图/AppleScript）、权限精细化 | **严重维护瓶颈**、10 S1 未修、CI 阻塞 release |
| **NullClaw** | IoT/边缘设备开发者、Zig 爱好者 | Zig 构建、弱设备优先（宣称） | 极致轻量、低资源占用 | 低资源场景承诺未兑现（web_search 不可用）、Zig 门槛 |
| **NanoBot** | 学术研究、轻量部署 | Python、aiohttp、模块化配置 | Dream 记忆、WhatsApp 商务、本地 Whisper | WebSocket 网关债务、媒体文件静默丢弃 |

---

## 6. 社区热度与成熟度

| 阶段 | 项目 | 特征 | 风险/机会 |
|:---|:---|:---|:---|
| **快速迭代期** | Moltis、NanoClaw、PicoClaw | 日合并 9+/23/19，零或极低积压，架构决策快速落地 | Moltis 需扩大社区；NanoClaw 需完成多租户；PicoClaw 需补齐重试机制 |
| **质量巩固期** | OpenClaw、Hermes、CoPaw | 高吞吐量但审查/治理承压，稳定性修复占比上升 | OpenClaw 的 11000+ issues；Hermes 的 Gateway 层；CoPaw 的长对话性能 |
| **架构重构期** | IronClaw、Moltis（身份层） | 底层架构激进变更，产品表面迁移滞后 | IronClaw 的 Reborn 生产化鸿沟；Moltis 的联邦网络需节点发现协议 |
| **瓶颈危机期** | **ZeroClaw** | 50 PR 零合并，10 S1 未修，CI 阻塞 release | **可能丧失社区信任**，需立即引入维护者或降低输入流速 |
| **休眠/边缘期** | TinyClaw、ZeptoClaw | 24h 零活动 | 资源不足或项目终止信号 |
| **产品化冲刺期** | LobsterAI | 代码迭代快（45 PR/36 合），用户支持慢 | 付费链路阻断（#1903）可能直接损害商业转化 |

---

## 7. 值得关注的趋势信号

| 趋势 | 证据链 | 对开发者的价值 |
|:---|:---|:---|
| **"AI 代提交"成为社区参与新常态** | OpenClaw #9443 由 QING 代 Lysen 提交 Android APK 请求 | 需重新设计 issue triage 流程——区分 AI 代理生成 vs 人类真实诉求，避免噪声淹没 |
| **实时语音从"功能"变为"基础设施"** | Moltis #920 电话通道 + #984 实时语音模型指引；NanoBot #3513 音频转录统一 | 语音交互正从附加功能变为 Agent 的默认 I/O 模态，STT/TTS 本地化成隐私刚需 |
| **桌面端成为差异化主战场** | ZeroClaw 7 issue + 2 stacked PR；LobsterAI Windows 三连修复；Moltis 电话通道 | 浏览器/CLI 不足以支撑"个人 AI 助手"的沉浸体验，系统级集成（截图/AX/权限）是壁垒 |
| **"安全-便利"张力激化** | OpenClaw #10659 密钥掩码、PicoClaw #1042 exec 误拦截→修复、ZeroClaw #6434 autonomy 假放行 | Agent 安全不能依赖"禁用一切"，需**语义级策略**（理解命令意图而非文本匹配） |
| **多代理架构从"讨论"到"阻塞"** | Hermes #7517（8 评论, 7👍）、OpenClaw 子代理工具允许列表透传 PR #78441 | 单 Gateway 多代理隔离是下一代架构门槛，先发者（OpenClaw/NanoClaw）正筑壁垒 |
| **外部协议变更成为系统性风险** | WhatsApp Web 协议 bump 致 ZeroClaw #6246 完全失效；微信扫码流程变更致 LobsterAI #1878 阻断 | 需建立**渠道协议变更监控机制**，将外部依赖纳入 CI 兼容性矩阵 |
| **pnpm/Node 生态的外部依赖脆弱性** | NanoClaw #2336 pnpm v11 破坏 Claude Code 安装；OpenClaw #79136 Node 25+ 兼容性 | 工具链版本锁定（`packageManager` 字段）应成为基础设施标配，非事后补救 |

---

*分析基于 2026-05-08 各项目 GitHub 公开数据，适合技术决策者评估项目健康度、选择技术栈参考，以及开发者识别贡献机会与风险规避。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-08

> **项目**: HKUDS/nanobot | **日期**: 2026-05-08 | **分析周期**: 过去24小时

---

## 1. 今日速览

NanoBot 今日保持**高活跃度**，27个PR更新（8条已合并/关闭，19条待审）与9个Issue更新（6条关闭，3条新开）显示社区贡献与维护节奏均衡。核心维护者 `chengyongru` 单日提交4个PR，聚焦**记忆系统持久化**、**微信渠道稳定性**与**日志规范化**三大方向。无新版本发布，但多个长期基础设施PR（音频转录统一、SimpleX渠道）持续迭代，项目处于**功能深化期**而非快速扩张期。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#3660](https://github.com/HKUDS/nanobot/pull/3660) | Jefsky | **Dream 记忆状态恢复**：将 `.dream_cursor` 纳入 GitStore 追踪，修复 restore 时 cursor 回滚问题 | 解决长期运行 Agent 的记忆一致性痛点，为 Dream 模块生产级可用奠定基础 |
| [#1835](https://github.com/HKUDS/nanobot/pull/1835) | alekwo | **LLM 后端自定义参数**：支持向任意后端 LLM 发送额外参数（如 Ollama 的 `stream: false`） | 解锁工具调用场景，打破原先"一刀切"的请求封装 |
| [#3677](https://github.com/HKUDS/nanobot/pull/3677) | zhw415876999-prog | **SSE 流式传输修复**：移除 `enable_compression` 解决 aiohttp 缓冲导致的伪流式问题 | 关键用户体验修复，300s 超时类问题 (#3681) 的可能根因之一 |
| [#3672](https://github.com/HKUDS/nanobot/pull/3672) | yorkhellen | **CI 质量门禁升级**：Ruff 从 F401/F841 扩展至全 F 规则集 | 代码质量基础设施现代化，减少运行时 NameError 风险 |
| [#3678](https://github.com/HKUDS/nanobot/pull/3678) | chengyongru | **日志规范化收尾**：补全剩余 `except` 块的 `logger.exception` 替换 | 完成 #3651 开启的技术债清理，调试效率提升 |

**整体评估**：今日合并以**稳定性与可观测性**为主，无 flashy 功能但夯实了生产运行基础。记忆系统（Dream/Consolidation）的连续修复表明该模块正从实验性向可靠性过渡。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | 议题/PR | 互动量 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥 | [#3682](https://github.com/HKUDS/nanobot/issues/3682) WebSocket 报错 | 3 评论 | **部署场景碎片化**：Linux 服务端 + Windows/Mac 浏览器跨平台访问 WebSocket 握手失败，与 [#3683](https://github.com/HKUDS/nanobot/issues/3683) 形成关联 issue 集群，反映 WebSocket 网关的跨平台兼容性债务 |
| 🔥 | [#3652](https://github.com/HKUDS/nanobot/issues/3652) 禁用 Dream 功能 | 2 评论 | **模块化控制诉求**：用户希望细粒度开关 Agent 子系统，而非全有或全无的架构 |
| 🔥 | [#3665](https://github.com/HKUDS/nanobot/issues/3665) DeepSeek-V4-Flash reasoning_content 传递 | 2 评论 | **推理模型适配滞后**：DeepSeek 等国产推理模型的 `reasoning_content` 回传协议未标准化，nanobot 在 reasoning 模式下的 API 兼容性存在断层 |

**深层信号**：WebSocket 相关问题在 24 小时内产生 3 个 issue（#3681-#3683），建议维护者将 WebSocket 网关列为近期专项审计目标。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#3682](https://github.com/HKUDS/nanobot/issues/3682) | ✅ 已关闭 | WebSocket 跨平台握手失败（Linux 服务端 ↔ Windows/Mac 浏览器） | 未明确关联，可能与 #3677 SSE 修复同源 |
| 🔴 **高** | [#3683](https://github.com/HKUDS/nanobot/issues/3683) | ✅ 已关闭 | WebSocket 端口 8765 无认证界面，5173 正常 | 同上 |
| 🟡 **中** | [#3665](https://github.com/HKUDS/nanobot/issues/3665) | ✅ 已关闭 | DeepSeek-V4-Flash 多轮后 `reasoning_content` 回传报错 | 待验证，[#3655](https://github.com/HKUDS/nanobot/pull/3655) 新增 `show_reasoning` 配置可能相关 |
| 🟡 **中** | [#3681](https://github.com/HKUDS/nanobot/issues/3681) | ✅ 已关闭 | LLM 调用 300s 超时 | **[#3677](https://github.com/HKUDS/nanobot/pull/3677)** 已合并，SSE 压缩缓冲为可能根因 |
| 🟡 **中** | [#3674](https://github.com/HKUDS/nanobot/issues/3674) | 🟢 开放 | WebSocket 渠道静默丢弃媒体文件（`media` 字段被忽略） | **无** — 需紧急关注 |
| 🟢 **低** | [#3604](https://github.com/HKUDS/nanobot/issues/3604) | ✅ 已关闭 | WhatsApp 语音消息未下载 | 未明确 |

**关键风险**：[#3674](https://github.com/HKUDS/nanobot/issues/3674) 为**唯一未关闭 Bug**，且涉及数据丢失（媒体文件静默丢弃），建议优先分配修复资源。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 成熟度评估 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| **Dream 启用/禁用开关** | [#3652](https://github.com/HKUDS/nanobot/issues/3652) | 需求明确，配置方案已提议 | ⭐⭐⭐⭐☆ 高 |
| **自定义 Bot 名称与图标** | [#3650](https://github.com/HKUDS/nanobot/issues/3650) | 有 `good first issue` 标签，配置方案具体 | ⭐⭐⭐⭐☆ 高 |
| **CLI 流式显示推理内容** | [#3655](https://github.com/HKUDS/nanobot/pull/3655) | **PR 已提交**，含 `show_reasoning` 配置 | ⭐⭐⭐⭐⭐ 极高 |
| **音频转录统一 + 本地 Whisper** | [#3513](https://github.com/HKUDS/nanobot/pull/3513) | 大型 PR，4 月 28 日至今持续迭代 | ⭐⭐⭐☆☆ 中（需更多审阅周期） |
| **SimpleX 消息渠道** | [#3486](https://github.com/HKUDS/nanobot/pull/3486) | 外部 CLI 依赖，架构耦合度待评估 | ⭐⭐⭐☆☆ 中 |
| **股票市场分析技能** | [#1219](https://github.com/HKUDS/nanobot/pull/1219) | 2 月 26 日至今，功能范围过大 | ⭐⭐☆☆☆ 低（建议拆分） |

**路线图信号**：记忆系统的持久化修复（#3660, #3685, #3687, #3680）形成**集群式投入**，表明 v0.2.x 可能以"**可靠的长对话记忆**"为核心发布主题。

---

## 7. 用户反馈摘要

### 真实痛点

> *"最近经常报 `Error calling LLM: timed out after 300s`"* — [#3681](https://github.com/HKUDS/nanobot/issues/3681) @bigsinger

**解读**：生产环境长时运行的稳定性焦虑，与 #3677 SSE 压缩修复形成因果链。

> *"访问 8765 端口没有出现让输入 secret 的界面...手机浏览器没有问题"* — [#3683](https://github.com/HKUDS/nanobot/issues/3683) @NewAlice

**解读**：WebSocket 网关的跨平台/跨浏览器兼容性测试覆盖不足，移动端与桌面端行为分叉。

> *"I want to disable Dream completely"* — [#3652](https://github.com/HKUDS/nanobot/issues/3652) @skyline75489

**解读**：Agent 子系统的"默认全启"架构对用户造成资源与认知负担，模块化诉求强烈。

### 满意点

- WhatsApp 商务渠道的功能完整性获认可（#3688 快速关闭，命令同步需求被响应）
- 社区对 `good first issue` 标签的响应积极（#3650 已吸引关注）

---

## 8. 待处理积压

### 需维护者关注的高龄/重要 PR

| PR | 创建日期 | 当前状态 | 风险说明 |
|:---|:---|:---|:---|
| [#3513](https://github.com/HKUDS/nanobot/pull/3513) 音频转录统一 | 2026-04-28 | 🟡 开放，持续更新 | **10 天未合并**，功能关键（语音交互基础设施），建议安排架构审阅 |
| [#3486](https://github.com/HKUDS/nanobot/pull/3486) SimpleX 渠道 | 2026-04-27 | 🟡 开放 | **11 天未合并**，新增外部依赖需安全评估 |
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) 心跳推理解耦 | 2026-03-02 | 🔴 开放 | **67 天未合并**，配置行为变更（默认 `sendReasoning: false`）需决策是否接受破坏性调整 |
| [#1219](https://github.com/HKUDS/nanobot/pull/1219) 股票分析技能 | 2026-02-26 | 🔴 开放 | **71 天未合并**，范围膨胀（股票+代码性能+测试生成），建议要求作者拆分 |

### 需维护者关注的开放 Issue

| Issue | 创建日期 | 风险说明 |
|:---|:---|:---|
| [#3674](https://github.com/HKUDS/nanobot/issues/3674) WebSocket 媒体丢弃 | 2026-05-07 | **数据丢失级 Bug**，24 小时内无响应 |

---

## 附录：核心贡献者负载

| 贡献者 | 今日 PR 数 | 聚焦领域 |
|:---|:---|:---|
| chengyongru | 4 | 记忆系统、微信渠道、日志规范 |
| Jefsky | 2 | Dream 修复、Token 估算优化 |
| 其他 | 分散 | 多渠道稳定性 |

**建议**：`chengyongru` 单日负载过高，考虑分散记忆系统相关 PR 的审阅压力。

---

*本日报基于 GitHub 公开数据生成，未包含私有讨论或线下决策信息。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-08

> **项目**: NousResearch/hermes-agent | **分析日期**: 2026-05-08 | **数据周期**: 过去24小时

---

## 1. 今日速览

Hermes Agent 在 v0.13.0 "The Tenacity Release" 发布后的首日展现出极高社区活跃度：**50 条 Issues 更新（42 活跃/新开，8 关闭）与 50 条 PR 更新（41 待合并，9 已合并/关闭）** 的双高数据标志着项目处于密集迭代期。社区贡献者规模显著（v0.13.0 周期内 295 人参与），但 P1/P2 级稳定性问题在 Gateway 层集中爆发——Telegram 重连机制、MCP 审批子系统、多平台 WebSocket 事件循环共享等问题成为今日焦点。Windows 原生支持、Eden AI 提供商接入、频道级模型路由等功能 PR 显示项目正加速扩展平台覆盖与部署场景。

---

## 2. 版本发布

### [v0.13.0 — The Tenacity Release](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.7) 
**发布日期**: 2026-05-07 | **距 v0.12.0 周期**: 864 commits · 588 merged PRs · 829 files changed · 128,366 insertions · 282 issues closed

| 维度 | 数据 |
|:---|:---|
| **关键修复** | 13 个 P0、36 个 P1 优先级问题关闭 |
| **社区规模** | 295 位贡献者（含共同作者） |
| **主题定位** | "Hermes Agent now finishes what it starts" — 强调任务完成可靠性 |

**核心改进方向**（基于 release note 片段推断）：
- 代理任务执行的持久化与恢复能力增强
- 长时运行对话的上下文保持机制优化
- 工具调用链的容错与重试策略改进

> ⚠️ **迁移提示**: 大规模文件变更（829 files）建议升级前完整备份 `~/.hermes/` 配置目录，特别关注 `config.yaml` 中新增或重命名的提供商配置键。

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#20710](https://github.com/NousResearch/hermes-agent/pull/20710) | yhwl8888 | **P0 紧急修复三联**: 工具调用 120s 超时、JSON 反序列化失败时保留原始数据、MCP 处理器变更检测 | ✅ 已合并 |
| [#20421](https://github.com/NousResearch/hermes-agent/pull/20421) | Mind-Dragon | TUI SSH 场景修复：快速粘贴丢字符、Cmd+C 误杀代理进程 | ✅ 已合并 |
| [#15525](https://github.com/NousResearch/hermes-agent/pull/15525) | foreverxdord | 飞书平台 `require_mention` 配置项生效，补齐最后一块平台适配短板 | ✅ 已合并 |
| [#21538](https://github.com/NousResearch/hermes-agent/issues/21538) | ewilhelm222 | Cron 调度器 per-job `enabled_toolsets` 功能（标记为 duplicate，功能或已在别处分支实现） | ❌ 已关闭 |
| [#21508](https://github.com/NousResearch/hermes-agent/issues/21508) | languageaddict | Ollama web search/fetch 后端接入请求（社区反馈已存在替代方案） | ❌ 已关闭 |

**整体推进评估**: v0.13.0 发布后首日即合并 P0 修复，显示维护团队对稳定性问题响应迅速。TUI 与飞书的边缘场景补齐、MCP 基础设施加固，标志着项目从"功能扩张"向"质量深化"阶段过渡。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 1 | **#7335** 千级 Issue 失控增长治理 | 13 | 项目规模化管理焦虑，对标 OpenClaw 11000+ open issues 的警示 | [#7335](https://github.com/NousResearch/hermes-agent/issues/7335) |
| 2 | **#14420** 上下文记忆失效（Ollama 场景） | 11 | 多轮对话中用户身份/历史丢失，严重影响中文用户体验 | [#14420](https://github.com/NousResearch/hermes-agent/issues/14420) |
| 3 | **#7517** 原生多代理架构支持 | 8 | 单 Gateway 多代理隔离（会话/人格/记忆/工具），对标 OpenClaw | [#7517](https://github.com/NousResearch/hermes-agent/issues/7517) |
| 4 | **#20249** 每轮专家模型按需升级 | 6 | 低成本模型常规运行，复杂任务自动切换 Opus 级推理 | [#20249](https://github.com/NousResearch/hermes-agent/issues/20249) |
| 5 | **#21498** `max_output_tokens` 被配置规范化器静默丢弃 | 5 | 自定义提供商参数丢失导致输出截断至 2048 token | [#21498](https://github.com/NousResearch/hermes-agent/issues/21498) |

### 👍 反应数最高的功能请求

| Issue | 👍 | 诉求 | 链接 |
|:---|:---:|:---|:---|
| **#5941** Searxng 作为默认搜索提供商 | 28 | 自托管、隐私优先的搜索替代方案 | [#5941](https://github.com/NousResearch/hermes-agent/issues/5941) |
| **#10644** Brave Search 原生后端 | 22 | 成本效益与免费额度优势 | [#10644](https://github.com/NousResearch/hermes-agent/issues/10644) |

**诉求分析**: 社区对**搜索后端多元化**（Searxng 28👍、Brave 22👍、Ollama web search 已关闭）和**模型路由智能化**（#20249、#16525）形成强共识。多代理架构（#7517）是长期架构级需求，但实现复杂度可能推迟至 v0.14+。Issue 治理（#7335）反映项目快速扩张中的元问题——需建立更精细的分类与自动清理机制。

---

## 5. Bug 与稳定性

### 按严重程度排列的今日 Bug

| 优先级 | Issue | 描述 | Fix PR 状态 | 链接 |
|:---|:---|:---|:---|:---|
| **P1** | **#17063** | Gateway 重连观察器 20 次失败后永久停止重试，长连接平台（Telegram）变永久中断 | 🔄 [#21548](https://github.com/NousResearch/hermes-agent/pull/21548) 待合并 | [#17063](https://github.com/NousResearch/hermes-agent/issues/17063) |
| **P1** | **#18086** | Telegram Updater 单次网络闪断后永久静默，重连阶梯吞掉清理超时 | ✅ 已在 v0.13.0 修复（今日关闭） | [#18086](https://github.com/NousResearch/hermes-agent/issues/18086) |
| **P2** | **#21498** | 自定义提供商 `max_output_tokens` 被 `config.py` 规范化器静默丢弃，默认跌至 2048 | ❌ 无 PR | [#21498](https://github.com/NousResearch/hermes-agent/issues/21498) |
| **P2** | **#21026** | 多平台 WebSocket 共享单一事件循环，级联断开（WeCom+Feishu+QQBot） | ❌ 无 PR | [#21026](https://github.com/NousResearch/hermes-agent/issues/21026) |
| **P2** | **#5729** | Telegram 冷启动解析器耗尽后无降级状态检测 | 🔄 [#21548](https://github.com/NousResearch/hermes-agent/pull/21548) 关联修复 | [#5729](https://github.com/NousResearch/hermes-agent/issues/5729) |
| **P2** | **#21559** | MCP 工具响应：图片内容静默丢弃 + 大文本截断 | ✅ 今日关闭（修复已合并） | [#21559](https://github.com/NousResearch/hermes-agent/issues/21559) |
| **P2** | **#21563/#21558** | MCP 审批子系统缺乏 Gateway IPC，功能完全失效（`permissions_list_open` 恒空） | ⚠️ #21558 关闭，#21563 仍 open，可能修复不完整 | [#21563](https://github.com/NousResearch/hermes-agent/issues/21563) |
| **P2** | **#21374** | Kanban 启动时 `_migrate_add_optional_columns` 竞态，重复列名崩溃 | 🔄 [#21395](https://github.com/NousResearch/hermes-agent/pull/21395) 待合并 | [#21374](https://github.com/NousResearch/hermes-agent/issues/21374) |
| **P2** | **#21503** | Kanban 迁移非幂等：`ALTER TABLE ADD COLUMN` 重复执行崩溃 | ❌ 无 PR（与 #21374 同源） | [#21503](https://github.com/NousResearch/hermes-agent/issues/21503) |
| **P2** | **#12534** | Docker 沙箱未接收 `docker_forward_env` 环境变量，CLI 凭证类工具失效 | ❌ 无 PR | [#12534](https://github.com/NousResearch/hermes-agent/issues/12534) |
| **P3** | **#21512** | TUI Warp 终端中 Shift+Enter/Alt+Enter 均提交而非换行 | ❌ 无 PR | [#21512](https://github.com/NousResearch/hermes-agent/issues/21512) |
| **P3** | **#21481** | `hermes doctor` 误报有效 Google AI Studio Gemini API key 为无效 | ❌ 无 PR | [#21481](https://github.com/NousResearch/hermes-agent/issues/21481) |

**稳定性评估**: **Gateway 层是今日重灾区**，Telegram 长连接可靠性、MCP 子系统完整性、多平台并发架构存在系统性风险。Kanban 模块的 SQLite 竞态问题（#21374/#21503）显示启动时序设计缺陷。P1 级 Telegram 重连问题已有针对性 PR #21548，但多平台事件循环共享（#21026）需架构级重构。

---

## 6. 功能请求与路线图信号

### 高可行性（已有 PR 或强信号）

| 功能 | Issue/PR | 状态 | 纳入预测 |
|:---|:---|:---|:---|
| **Eden AI 内置提供商** | PR [#21573](https://github.com/NousResearch/hermes-agent/pull/21573) | 🔄 待合并 | **v0.13.1** — 349 模型统一网关，降低多密钥管理成本 |
| **Windows 原生安装闭环** | PR [#21561](https://github.com/NousResearch/hermes-agent/pull/21561) | 🔄 待合并 | **v0.13.1** — UTF-8 stdio、tzdata 依赖、文档补齐 |
| **频道级模型绑定（Discord）** | PR [#21476](https://github.com/NousResearch/hermes-agent/pull/21476) | 🔄 待合并 | **v0.13.x** — 扩展 #20096 的通用频道路由框架 |
| **MCP 预连接钩子消除冷启动** | PR [#20422](https://github.com/NousResearch/hermes-agent/pull/20422) | 🔄 待合并 | **v0.13.x** — Docker 镜像预拉取，30-90s→0s |
| **MCP 发现异步化** | PR [#19326](https://github.com/NousResearch/hermes-agent/pull/19326) | 🔄 待合并 | **v0.13.x** — 网关启动 15s→即时 |
| **观察式记忆提供者** | PR [#12583](https://github.com/NousResearch/hermes-agent/pull/12583) | 🔄 待合并 | **v0.14.0** — 记忆架构升级，需充分测试 |
| **参考图像前向传播（Codex/FAL）** | PR [#21570](https://github.com/NousResearch/hermes-agent/pull/21570) | 🔄 待合并 | **v0.13.1** — 图像生成工作流完整性 |

### 中期规划（架构级需求）

| 功能 | Issue | 社区强度 | 技术复杂度 |
|:---|:---|:---:|:---|
| 原生多代理支持 | [#7517](https://github.com/NousResearch/hermes-agent/issues/7517) | 8 评论, 7👍 | **高** — 需 Gateway 会话隔离重构 |
| 模型自主路由工具化 | [#16525](https://github.com/NousResearch/hermes-agent/issues/16525) | 2 评论, 2👍 | **中** — 依赖 `/model` 命令与工具注册表解耦 |
| 主动式检查（Proactive Check-Ins） | [#9645](https://github.com/NousResearch/hermes-agent/issues/9645) | 2 评论, 3👍 | **中** — 预算感知、速率限制、人性化调度 |
| Telegram Business 助手模式 | [#21551](https://github.com/NousResearch/hermes-agent/issues/21551) | 1 评论 | **中** — `business_connection_id` 流程对接 |

---

## 7. 用户反馈摘要

### 😤 核心痛点

| 场景 | 来源 Issue | 典型引述 |
|:---|:---|:---|
| **本地部署体验断裂** | [#14420](https://github.com/NousResearch/hermes-agent/issues/14420), [#21524](https://github.com/NousResearch/hermes-agent/issues/21524) | "hermes agent 無法根據上下文與記憶去回答我" — Ollama 本地场景上下文丢失 |
| **配置参数静默失效** | [#21498](https://github.com/NousResearch/hermes-agent/issues/21498) | `max_output_tokens` "silently dropped"，无日志、无报错，输出被截断 |
| **网络韧性不足** | [#17063](https://github.com/NousResearch/hermes-agent/issues/17063), [#12607](https://github.com/NousResearch/hermes-agent/issues/12607) | "Restarting the gateway was required to restore connectivity" — 数小时断网后无法自愈 |
| **跨平台行为不一致** | [#15525](https://github.com/NousResearch/hermes-agent/issues/15525)（已修复） | 飞书是唯一忽略 `require_mention` 的平台 |
| **诊断工具误报** | [#21481](https://github.com/NousResearch/hermes-agent/issues/21481) | `hermes doctor` 报 key invalid，但运行时完全正常 |

### 😊 积极反馈方向

- **v0.13.0 发布节奏受认可**: 864 commits/588 PRs 的密集迭代显示项目活力
- **搜索后端多元化**: Searxng/Brave 请求高票，社区对隐私与成本控制敏感
- **Windows 支持推进**: PR #21561 显示对非 Linux 开发者的包容

### 💡 隐含需求

- **"专家按需"模型路由** (#20249): 用户希望在成本与质量间自动权衡，而非手动 `/model` 切换
- **工具调用前参数重写** (#18988): 插件开发者需要 Claude Code 级别的 `PreToolUse` 钩子能力

---

## 8. 待处理积压

### ⚠️ 需维护者重点关注

| Issue/PR | 创建时间 | 风险 | 行动建议 |
|:---|:---|:---|:---|
| **#7335** 千级 Issue 治理 | 2026-04-10 | 项目健康度元指标，社区信心 | 建立自动 stale bot + 优先级标签强制策略 |
| **#7517** 原生多代理架构 | 2026-04-11 | 架构债务累积，OpenClaw 竞争压力 | 发布 RFC 征集设计，或拆分里程碑 |
| **#5941** Searxng 支持（28👍） | 2026-04-07 | 高票功能长期悬置，社区流失风险 | 评估与现有 PR #21572 文档修复的联动，推进完整实现 |
| **#12583** 观察式记忆 PR | 2026-04-19 | 记忆架构升级关键路径 | 安排核心维护者 review，避免与 main 分支长期偏离 |
| **#19326/#20422** MCP 性能双 PR | 2026-05-03/05 | 网关启动体验瓶颈 | 合并前进行冷启动基准测试，量化收益 |
| **#21026** 多平台 WebSocket 事件循环共享 | 2026-05-07 | **架构级缺陷，级联故障** | 优先级提升至 P1，评估 asyncio 隔离或每个平台独立进程方案 |

---

> **日报生成说明**: 本报告基于 GitHub 公开数据自动生成，PR 评论数为 `undefined` 表示数据未返回或零评论。建议结合 CI 状态与代码 review 进度综合判断 PR 成熟度。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-08

---

## 1. 今日速览

PicoClaw 今日保持**高活跃度**，24小时内处理 36 条 Issues（关闭 22 条）和 50 条 PR（合并/关闭 19 条），社区协作效率显著。核心进展集中在 **Go 工具链安全升级**（1.25.9→1.25.10）、**Telegram 频道稳定性修复**（话题上下文、媒体组处理）以及 **Seahorse 会话管理安全加固**。值得注意的是，今日出现 2 个新的高优先级 Bug（#2721 会话竞态、#2796 历史记录丢失），且长期悬而未决的 LLM 重试机制缺失（#629）仍在等待方案。整体项目健康度良好，但会话一致性和历史记录可靠性成为用户集中痛点。

---

## 2. 版本发布

### Nightly Build: v0.2.8-nightly.20260507.788cda5c
- **发布链接**: [sipeed/picoclaw/releases](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)
- **性质**: 自动化构建，**可能不稳定，谨慎使用**
- **变更范围**: 自 v0.2.8 以来 main 分支累积提交，包含今日多项关键修复
- **⚠️ 注意事项**: 生产环境建议等待正式版本；该 nightly 包含 Go 1.25.10 安全修复，但未经完整回归测试

---

## 3. 项目进展

### 已合并/关闭的关键 PRs

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#2821](https://github.com/sipeed/picoclaw/pull/2821) | bogdanovich | **Go 工具链升级至 1.25.10**，修复 `govulncheck` 报出的 3 个标准库漏洞（GO-2026-4976/4971/4974） | 消除安全阻塞项，解锁其他 PR 的 CI 流程 |
| [#2819](https://github.com/sipeed/picoclaw/pull/2819) | bogdanovich | **非破坏性 `/reset` 命令**：新建会话不删除 Seahorse 历史记录，支持 `/reset clear` 回退 | 解决用户长期痛点（#2820），为 Seahorse 上下文管理提供优雅重置机制 |
| [#2814](https://github.com/sipeed/picoclaw/pull/2814) | bogdanovich | **exec 沙箱路径校验修复**：停止将相对脚本路径（如 `scripts/xxx.sh`）误判为逃逸路径；工具上下文透传话题元数据 | 修复 #1042 报告的误拦截问题，提升工具链可靠性 |
| [#2793](https://github.com/sipeed/picoclaw/pull/2793) | bogdanovich | **子代理工具发现修复**：`ToolRegistry.Clone()` 深拷贝修复，解决 BM25SearchTool/RegexSearchTool 在子代理回合中的工具提升失败 | 修复子代理场景下的工具可见性回归 |
| [#2790](https://github.com/sipeed/picoclaw/pull/2790) | bogdanovich | **spawn 工具路由修复**：`agent_id` 参数透传至子回合执行，支持指定目标代理的模型/工具/工作区/技能 | 多代理编排能力的关键修复 |
| [#2759](https://github.com/sipeed/picoclaw/pull/2759) | bogdanovich | **Seahorse 检索工具作用域收紧**：`short_grep`/`short_expand` 默认限定当前会话，防止跨会话信息泄露 | 会话隔离安全加固，回应 #2721 相关竞态问题 |
| [#2813](https://github.com/sipeed/picoclaw/pull/2813) | mrigangha | **PID 文件身份验证**：启动前验证占用 PID 的进程确为 PicoClaw 网关，防止 systemd-resolved 等进程误占导致启动失败 | 提升守护进程可靠性 |
| [#2811](https://github.com/sipeed/picoclaw/pull/2811) | afjcjsbx | **MCP 流式 HTTP 别名支持 + 请求-响应模式 + Docker 集成测试框架** | MCP 协议兼容性重大提升，测试基础设施现代化 |

**整体评估**: 今日合并代码聚焦**安全（Go 漏洞修复）、稳定性（Telegram/exec/Seahorse 修复）、基础设施（测试框架）**三大支柱，项目向 v0.2.8 正式版迈出坚实一步。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---|:---|:---|
| 🔥1 | [#629](https://github.com/sipeed/picoclaw/issues/629) LLM 调用失败无重试机制 | 13 | **生产级可靠性**：OpenRouter 500 错误导致任务挂死，需指数退避重试 | **OPEN 5个月** |
| 🔥2 | [#2408](https://github.com/sipeed/picoclaw/issues/2408) LLM 账户轮询（Cartridge-Belt） | 11 | **成本与配额优化**：多 API Key 自动轮换应对限流/额度耗尽 | CLOSED（方案待追踪）|
| 🔥3 | [#2171](https://github.com/sipeed/picoclaw/issues/2171) 迁移至 OpenAI Responses API | 10 | **技术债务**：Chat Completions → Responses API 的架构升级 | OPEN |
| 🔥4 | [#2468](https://github.com/sipeed/picoclaw/issues/2468) 定时任务执行失败 | 8 | **cron 工具权限模型**：内部频道限制导致调度命令被拒 | CLOSED |
| 🔥5 | [#1042](https://github.com/sipeed/picoclaw/issues/1042) exec 工具 guardCommand 误拦截 | 8 | **工具链精确性**：`restrict_to_workspace=true` 时正则误判无路径命令 | **有 PR #2814 修复** |

**诉求分析**: 社区核心矛盾在于 **"功能丰富度 vs 生产可靠性"**——用户既需要多模型编排、多频道接入等高级能力，又要求基础链路（LLM 调用、工具执行、会话管理）在故障时优雅降级。今日关闭的 #2408（账户轮询）和 #2468（定时任务）显示维护者正系统性回应运维诉求，但 #629 重试机制的长期悬置仍是信任缺口。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 描述 | 影响范围 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0** | [#2721](https://github.com/sipeed/picoclaw/issues/2721) | **Anthropic Messages API `tool_use_id` 400 错误**——会话历史竞态在 v0.2.5 仍复现 | Claude 用户，单聊场景 | 部分缓解：#2759 收紧检索作用域 |
| 🔴 **P0** | [#2796](https://github.com/sipeed/picoclaw/issues/2796) | **历史记录仅保留最后一条用户消息**——对话压缩逻辑污染用户可见历史 | 所有频道用户 | **无** |
| 🟡 **P1** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | exec 工具误拦截无路径命令（如 `curl wttr.in/Beijing?T`） | 启用工作区限制的用户 | ✅ **#2814** |
| 🟡 **P1** | [#2702](https://github.com/sipeed/picoclaw/issues/2702) | 多用户群聊历史缺乏发送者归因（`dimensions: ["chat"]` 默认作用域） | Discord/群组频道 | **无** |
| 🟡 **P1** | [#2472](https://github.com/sipeed/picoclaw/issues/2472) | `list_dir` Windows 路径分隔符与 `os.Root` 不兼容 | Windows 用户 | CLOSED（未标注修复版本）|
| 🟢 **P2** | [#2483](https://github.com/sipeed/picoclaw/issues/2483) | 网关启动按钮无响应 | Web UI 用户 | CLOSED |

**稳定性评估**: 今日关闭 22 个 Issues 中多为历史积压清理，但 **2 个新报 P0 级问题（#2721/#2796）揭示会话管理层存在系统性缺陷**——历史记录的竞态条件与可见性截断可能共享根因（Seahorse 的会话键管理或消息压缩策略）。建议维护者优先关联分析。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 成熟度 | 纳入下一版本概率 | 关键障碍 |
|:---|:---|:---|:---|:---|
| **通用附件支持**（文件/文档/媒体跨频道） | [#348](https://github.com/sipeed/picoclaw/issues/348) | 高优先级，3 评论，长期 OPEN | ⭐⭐⭐⭐☆ | 架构设计（多频道 MIME 处理统一） |
| **SMTP 邮件频道**（定时任务结果推送） | [#2465](https://github.com/sipeed/picoclaw/issues/2465) | 需求明确，7 评论 | ⭐⭐⭐⭐☆ | 频道抽象扩展，与现有 cron 集成 |
| **多飞书应用支持**（分离配置目录） | [#2493](https://github.com/sipeed/picoclaw/issues/2493) | 3 评论，CLOSED | ⭐⭐⭐☆☆ | 配置系统多租户改造 |
| **MCP 服务器密钥存入 `.security.yml`** | [#2444](https://github.com/sipeed/picoclaw/issues/2444) | 3 评论，👍2，CLOSED | ⭐⭐⭐⭐⭐ | 安全模型已支持，需配置扩展 |
| **非破坏性会话重置** | [#2820](https://github.com/sipeed/picoclaw/issues/2820) → **#2819** | 今日提出即实现 | ✅ **已合并** | — |
| **OpenAI Responses API 迁移** | [#2171](https://github.com/sipeed/picoclaw/issues/2171) | 10 评论，有 TODO 清单 | ⭐⭐⭐☆☆ | 向后兼容性，多供应商适配 |

**信号解读**: 社区对 **"企业运维集成"**（SMTP、多账户、密钥管理）和 **"多模态输入"**（附件）的需求明确且紧迫。今日合并的 #2819（`/reset`）显示维护者对 Seahorse 相关体验快速响应，但 #348 附件支持作为 2026-02 提出的高优先级需求仍未有 PR，可能成为 v0.3.0 的标志性功能。

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issue 评论提炼）

| 场景 | 用户原声/行为 | 深层需求 |
|:---|:---|:---|
| **长任务可靠性** | "Run a long task...Server may return HTTP 500...Task hang without retry" (#629) | 无人值守任务的自动恢复，而非人工重启 |
| **历史记录信任** | "先前对话多次消息中只能查看到最后一条用户消息" (#2796) | 对话数据的完整性与可审计性，压缩策略应对模型透明 |
| **多模型成本控制** | "Automatic API key rotation on rate limits/quotas" (#2408) | 高可用下的成本优化，避免单点配额耗尽 |
| **跨平台一致性** | "list_dir returns 'invalid argument' on Windows" (#2472) | Windows 作为一等公民，路径抽象统一 |
| **安全与便利平衡** | "Command blocked by safety guard (path outside working dir)" for `curl` (#1042) | 沙箱规则需理解命令语义，而非纯文本匹配 |

### 满意度信号
- ✅ **积极**: 飞书 @提及检测修复（#2091）、Telegram 流式草稿清理（#2090）获快速合并
- ❌ **消极**: #2429 用户情绪失控（"What kind of idiots give this one stars?"），反映控制台输入重复字符与模型配置失效的入门体验问题

---

## 8. 待处理积压

### 需维护者优先关注的长期项

| Issue | 创建时间 | 悬置天数 | 风险 | 建议行动 |
|:---|:---|:---|:---|:---|
| [#629](https://github.com/sipeed/picoclaw/issues/629) LLM 重试机制缺失 | 2026-02-22 | **75天** | 生产采用阻塞项，13 评论无方案 | 指定负责人，参考 #2408 的轮询设计实现指数退避 |
| [#348](https://github.com/sipeed/picoclaw/issues/348) 通用附件支持 | 2026-02-17 | **80天** | 高优先级标签，竞品差异化关键 | 发布设计 RFC，明确频道适配器接口 |
| [#2171](https://github.com/sipeed/picoclaw/issues/2171) Responses API 迁移 | 2026-03-30 | **39天** | OpenAI 官方推荐方向，技术债务累积 | 评估影响范围，分阶段迁移计划 |
| [#2721](https://github.com/sipeed/picoclaw/issues/2721) 会话竞态复现 | 2026-04-30 | **8天** | P0 级，#704 关闭后未根治 | 与 #2796 联合分析，可能需 Seahorse 架构审查 |

---

**日报生成时间**: 2026-05-08  
**数据来源**: sipeed/picoclaw GitHub 公开活动  
**分析师**: AI 智能体与个人 AI 助手领域开源项目分析师

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-08

> **项目**: [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)  
> **日期**: 2026-05-08（数据截止：过去24小时）

---

## 1. 今日速览

NanoClaw 今日呈现**高强度开发态势**：32 个 PR 更新（23 个已合并/关闭，9 个待审），9 个 Issues 活跃。核心团队聚焦 **A2A（Agent-to-Agent）消息路由正确性** 与 **多目的地会话稳定性**，连续合并 5 个相关修复 PR；基础设施层面紧急修复了 pnpm v11 导致的 Claude Code 二进制安装失败问题。社区贡献活跃，新增 4 个技能（skill）PR 涵盖 AWS、持久化记忆、OneCLI 网关等场景。整体健康度良好，但高优先级路由 Bug 仍需关注。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 🔀 今日已合并/关闭的重要 PR（23 个中的核心项）

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#2002** | jorgenclaw | **A2A 回复原会话线程绑定**：解决多活跃会话场景下 agent 回复错入最新会话的分裂脑问题 | [PR #2002](https://github.com/qwibitai/nanoclaw/pull/2002) |
| **#2267** | ddaniels | **A2A 路由根因修复**：`findSessionByAgentGroup` 的 `ORDER BY created_at DESC` 被替换为基于 `in_reply_to` 的精确路由 | [PR #2267](https://github.com/qwibitai/nanoclaw/pull/2267) |
| **#2277** | ddaniels | **查询中动态路由刷新**：修复 poll loop 冻结初始 `RoutingContext` 导致后续真实消息被错误分发的问题 | [PR #2277](https://github.com/qwibitai/nanoclaw/pull/2277) |
| **#2327** | glifocat | **SDK 自动压缩后目的地提醒注入**：防止 Claude Code SDK 压缩上下文后丢失 `<message to="name">` 包装规范 | [PR #2327](https://github.com/qwibitai/nanoclaw/pull/2327) |
| **#2328** | glifocat | **多目的地组默认回复路径**：未显式指定目的地时，默认回消息来源通道而非最新会话 | [PR #2328](https://github.com/qwibitai/nanoclaw/pull/2328) |
| **#2329** | gavrielc | **强制显式目的地寻址**：移除 `dispatchResultText` 的裸文本自动路由回退，消除路由漂移 | [PR #2329](https://github.com/qwibitai/nanoclaw/pull/2329) |
| **#2336** | pthanopassakul | **紧急修复：pnpm v11 破坏 Claude Code 安装**：修复容器内 `claude` 二进制变为 500 字节占位符导致所有 agent 首消息崩溃 | [PR #2336](https://github.com/qwibitai/nanoclaw/pull/2336) |
| **#2335** | adjohn | **pnpm 版本锁定至 10.33.0**：与主机 `packageManager` 字段对齐，阻断 pnpm 11 的 `only-built-dependencies` 静默失效 | [PR #2335](https://github.com/qwibitai/nanoclaw/pull/2335) |
| **#2321** | johnnyfish | **OneCLI 网关动态技能加载**：容器启动时从 API 实时获取技能，支持零发布热更新 | [PR #2321](https://github.com/qwibitai/nanoclaw/pull/2321) |
| **#2319** | ira-at-work | **AWS CLI 技能**：容器内 AWS 访问，集成 OneCLI CA bundle 与凭证代理 | [PR #2319](https://github.com/qwibitai/nanoclaw/pull/2319) |
| **#2318** | ira-at-work | **持久化语义记忆技能（/add-mnemon）**：知识图谱 survive 容器重启与上下文压缩 | [PR #2318](https://github.com/qwibitai/nanoclaw/pull/2318) |

**整体推进评估**：A2A 子系统经历**架构级修复**，从"按时间最新会话"的脆弱路由升级为**显式、可追溯、多目的地感知**的精确路由体系；基础设施韧性通过 pnpm 版本锁定得到加固；技能生态向云原生（AWS、OneCLI 动态加载）和长期记忆扩展。

---

## 4. 社区热点

### 🔥 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 1 | **#869** Per-group credential management | **3 评论** | 企业/多租户场景下，不同 group 共享单一 Claude 凭证导致 API 配额混用、身份无法隔离；要求支持按 group 的凭证隔离 + 交互式重新认证 | [Issue #869](https://github.com/qwibitai/nanoclaw/issues/869) |
| 2 | **#2343** OAuth-sync 凭证文件丢失时系统告警未触发 | 1 评论 | 可观测性缺口：告警策略声称第 3 次失败触发 `sendSystemAlert`，实际 9 次连续失败无告警 | [Issue #2343](https://github.com/qwibitai/nanoclaw/issues/2343) |
| 3 | **#2341** /restart 和 /build 命令权限管控 | 1 评论 | 安全加固：主群任意用户可重启宿主进程，要求增加 owner 角色校验 | [Issue #2341](https://github.com/qwibitai/nanoclaw/issues/2341) |

**诉求分析**：社区正从"能用"向"企业级可运营"演进——凭证隔离（#869）、权限最小化（#2341）、可观测性（#2343）构成生产部署的三大门槛。#869 创建于 3 月 9 日，持续活跃 2 个月，反映多租户是**长期未满足的结构性需求**。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复 PR | 链接 |
|:---|:---|:---|:---|:---|
| **🔴 CRITICAL** | **A2A 消息误路由至多会话错误目标** — `findSessionByAgentGroup` 的 `ORDER BY created_at DESC` 导致回复进入最新而非原会话 | **已修复** | #2267, #2002, #2329 | [Issue #2331](https://github.com/qwibitai/nanoclaw/issues/2331), [Issue #2332](https://github.com/qwibitai/nanoclaw/issues/2332) |
| **🔴 CRITICAL** | **pnpm v11 导致 Claude Code 二进制未安装** — 容器内 500 字节占位符，所有 agent 首消息崩溃 | **已修复** | #2336, #2335 | [PR #2336](https://github.com/qwibitai/nanoclaw/pull/2336) |
| **🟠 HIGH** | **SDK 自动压缩后丢失目的地包装规范** — 多目的地 agent 压缩后忘记 `<message to="name">` | **已修复** | #2327 | [Issue #2325](https://github.com/qwibitai/nanoclaw/issues/2325) |
| **🟠 HIGH** | **查询中后续消息路由冻结** — poll loop 缓存初始 `RoutingContext`，cron 任务后真实消息错发 | **已修复** | #2277 | [PR #2277](https://github.com/qwibitai/nanoclaw/pull/2277) |
| **🟡 MEDIUM** | **OAuth-sync 凭证文件丢失无系统告警** — 45 分钟故障期间告警策略未触发 | **已关闭**（需验证修复） | #2343 | [Issue #2343](https://github.com/qwibitai/nanoclaw/issues/2343) |
| **🟡 MEDIUM** | **Telegram Markdown 转义过度** — 奇数个 `*`/`_` 时整段删除，含下划线 URL 被破坏 | **待合并** | #2338 | [PR #2338](https://github.com/qwibitai/nanoclaw/pull/2338) |
| **🟡 MEDIUM** | **axios MCP 服务器无法通过 OneCLI 代理** — CONNECT-only 代理与 axios v1.x 绝对路径请求冲突 | **待合并** | #2330 | [PR #2330](https://github.com/qwibitai/nanoclaw/pull/2330) |
| **🟢 LOW** | **connectivity watchdog 自 5 月 1 日停止** — OrbStack 故障后 launchd 未复活 | **已关闭** | #2342 | [Issue #2342](https://github.com/qwibitai/nanoclaw/issues/2342) |

**稳定性评估**：今日是**A2A 路由的修复集中日**，3 个独立 Bug 报告（#2331, #2332, #2325）指向同一根因，团队响应迅速，24 小时内闭环。pnpm v11 的破坏性变更是**外部依赖风险**的典型案例，已通过版本锁定缓解。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 可行性信号 | 纳入预测 |
|:---|:---|:---|:---|
| **按 Group 的凭证隔离 + 交互式重认证** | Issue #869（High Priority, 3 月创建） | 架构改动大，需重构 `.env` 凭证存储；但评论活跃，企业用户刚需 | **vNext 核心候选**，可能需设计 RFC |
| **Web UI 文件附件支持** | Issue #2334（今日新提） | 纯前端 + 存储扩展，无架构阻塞；社区高频需求 | **高概率短期纳入** |
| **Claude Code 技能目录向非 Claude 提供商开放** | PR #2337（待审） | 已实现 `skill-catalog.ts` 共享层，技术路径清晰 | **即将合并** |
| **持久化语义记忆（mnemon）** | PR #2318（已合并） | 技能形态交付，非核心改动 | **已可用** |
| **AWS CLI 容器访问** | PR #2319（已合并） | 技能形态交付 | **已可用** |

**路线图信号**：项目正从"Claude Code 独占"向**多提供商、多技能、多租户**演进。#869 的凭证隔离是实现多租户的最后一块拼图；#2337 的技能目录泛化标志着**提供商抽象层**的成熟。

---

## 7. 用户反馈摘要

> 从 Issues 和 PR 描述中提炼的真实痛点

| 痛点场景 | 来源 | 情绪 |
|:---|:---|:---:|
| **"我们多个团队共用一套 Claude 凭证，API 限额互相挤占，账单无法拆分"** | #869 | 😤 长期困扰 |
| **"agent 突然把回复发到错误的 Signal 会话，客户看到内部对话"** | #2331, #2332 | 😱 生产事故 |
| **"安装完 NanoClaw，第一条消息就报错退出，查了两小时发现是 pnpm 版本问题"** | #2336 | 😤 入门挫败 |
| **"没有 Claude 订阅/OAuth/API key 的人，setup 里按 Ctrl-C 直接退出，没法跳过"** | #2324 | 😤 体验断裂 |
| **"URL 里的下划线被 Telegram 消息吃掉，链接点不开"** | #2338 | 😠 细节瑕疵 |
| **"选错 'Other…' 渠道后没有返回键，只能重来"** | #2316 | 😤 流程陷阱 |

**满意度亮点**：技能生态扩展（AWS、记忆、OneCLI 动态加载）获积极投入；A2A 修复响应速度显示团队对生产稳定性的重视。

---

## 8. 待处理积压

| 事项 | 创建时间 | 最后更新 | 风险 | 链接 |
|:---|:---|:---|:---|:---|
| **#869 Per-group credential management** | 2026-03-09 | 2026-05-07 | 🔴 **2 个月未解决**，多租户 blocker，评论持续活跃 | [Issue #869](https://github.com/qwibitai/nanoclaw/issues/869) |
| **#2339 A2A test objects 缺失 `in_reply_to`** | 2026-05-07 | 2026-05-07 | 🟡 阻塞构建，PR 已开待审 | [PR #2339](https://github.com/qwibitai/nanoclaw/pull/2339) |
| **#2338 Telegram Markdown 转义修复** | 2026-05-07 | 2026-05-07 | 🟡 用户体验，待合并 | [PR #2338](https://github.com/qwibitai/nanoclaw/pull/2338) |
| **#2330 axios MCP 代理兼容** | 2026-05-07 | 2026-05-07 | 🟡 基础设施，待合并 | [PR #2330](https://github.com/qwibitai/nanoclaw/pull/2330) |
| **#2337 技能目录泛化至非 Claude 提供商** | 2026-05-07 | 2026-05-07 | 🟡 架构扩展，待合并 | [PR #2337](https://github.com/qwibitai/nanoclaw/pull/2337) |

**维护者提醒**：#869 是**当前最老的开放高优先级 Issue**，建议启动 RFC 流程或至少给出技术方案时间表，避免社区信心损耗。A2A 路由修复密集合并后，需关注 #2339 的测试补全，防止回归。

---

*日报生成时间：2026-05-08*  
*数据来源：GitHub API / qwibitai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-08

## 1. 今日速览

NullClaw 今日保持**中高活跃度**，24小时内 Issues 更新 6 条（5 活跃/1 关闭）、PR 更新 7 条（5 待审/2 关闭），无新版本发布。社区焦点集中在**飞书(Lark)渠道功能增强**（2 条新 Issue）、**Zig 构建系统兼容性**（文档+编译修复），以及**AI 协议标准化**（ACP stdio 适配器）。值得关注的是，一条关于低资源设备 `web_search` 可用性的严重 Bug 仍在等待方案，可能成为边缘部署场景的阻塞点。

---

## 2. 版本发布

**无**

---

## 3. 项目进展

### 已合并/关闭的 PR

| PR | 作者 | 进展说明 |
|:---|:---|:---|
| [#790](https://github.com/nullclaw/nullclaw/pull/790) | fakhriaunur | **修复 OpenAI Responses API 工具格式兼容性**：解决 `buildResponsesRequestBody` 错误使用 Chat Completions 嵌套格式 (`{"type":"function","function":{...}}`) 的问题，改为 Responses API 原生扁平格式；同时修复空值错误处理。提升与 OpenAI 最新 API 的互操作性。 |
| [#893](https://github.com/nullclaw/nullclaw/pull/893) | EugOT | **关闭**：尝试集成 `zig-qm-toolkit`（4 层验证的 hooks/agents/skills 体系），但因与现有 AGENTS.md/CLAUDE.md 架构冲突未合并。反映项目对**外部工具链集成持审慎态度**，需与核心架构对齐。 |

**整体推进评估**：今日合并以**稳定性修复**为主，功能层面无重大突破。ACP 适配器 (#896) 和 Cron 子代理 (#783) 两个中大型功能仍在评审队列，预计构成下版本核心增量。

---

## 4. 社区热点

| 排名 | 议题 | 热度指标 | 诉求分析 |
|:---|:---|:---|:---|
| 🔥1 | [#167](https://github.com/nullclaw/nullclaw/issues/167) `curl/wget` 硬编码限制 | 10 评论, 👍1, 历经 2 个月+ | **核心矛盾**：安全沙箱 vs 用户自由度。用户质疑为何禁用基础网络工具，维护方需明确安全策略边界或提供替代方案（如受控的 HTTP 客户端）。今日关闭但未完全消解争议。 |
| 🔥2 | [#871](https://github.com/nullclaw/nullclaw/issues/871) 低资源设备 `web_search` 不可用 | 7 评论, 标记 Critical | **边缘部署场景阻塞**：Brave API 需外部密钥、DuckDuckGo 无原生支持，与项目"弱设备优先"定位直接冲突。用户呼吁**内置轻量级搜索**，涉及架构级决策（是否内嵌爬虫/无头浏览器）。 |
| 🔥3 | [#820](https://github.com/nullclaw/nullclaw/issues/820) Debian Zig 安装文档 | 5 评论 | **新用户入门摩擦**：Zig 作为构建依赖非常规，Docker 并非轻量方案。社区已响应 PR #897 补充文档。 |

**信号提取**：社区正从"早期采用者"向"更广泛开发者"扩散，**文档完备性**和**低资源场景承诺兑现**成为信任关键。

---

## 5. Bug 与稳定性

| 严重程度 | 议题/PR | 状态 | 详情 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#871](https://github.com/nullclaw/nullclaw/issues/871) | 开放 | `web_search` 在低资源设备无实用路径；Brave API 依赖外部服务，与项目定位矛盾 | **无** |
| 🟡 **Medium** | [#790](https://github.com/nullclaw/nullclaw/pull/790) | ✅ 已合并 | OpenAI Responses API 工具 schema 格式错误、空值处理缺陷 | #790（自修复） |
| 🟡 **Medium** | [#887](https://github.com/nullclaw/nullclaw/pull/887) | 待审 | Zig v0.16 构建失败（Win/Linux） | #887（待合并） |

**风险评估**：Critical 级 Bug #871 已存在 13 天无方案，可能损害项目在 IoT/边缘计算场景的公信力。建议维护者明确：
- 是否将 DuckDuckGo 内嵌实现纳入路线图？
- 或调整文档降低"低资源优先"的预期承诺？

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **飞书(Lark)渠道增强：禁用 typing 占位符** | [#895](https://github.com/nullclaw/nullclaw/issues/895) | ⭐⭐⭐⭐ 高 | 同作者同日提 2 条 Lark 改进，显示企业用户需求集中；实现轻量（配置项+条件判断） |
| **飞书(Lark)渠道增强：响应所有群消息** | [#894](https://github.com/nullclaw/nullclaw/issues/894) | ⭐⭐⭐⭐ 高 | 同上，企业群聊场景刚需；与现有 `@mention` 逻辑并列即可 |
| **ACP (Agent Client Protocol) stdio 适配器** | [#896](https://github.com/nullclaw/nullclaw/pull/896) | ⭐⭐⭐⭐⭐ 极高 | **协议级基础设施**，直接嵌入主二进制；符合 AI 智能体标准化趋势，可能打通 Claude Desktop 等生态 |
| **Cron 子代理 + 运行历史 + JSON 输出** | [#783](https://github.com/nullclaw/nullclaw/pull/783) | ⭐⭐⭐⭐ 高 | 已评审近 1 个月，功能完整（DB 调度、队列、时区、告警）；基础设施层能力 |
| **数据治理层 (Data Governance)** | [#885](https://github.com/nullclaw/nullclaw/pull/885) | ⭐⭐⭐ 中 | Hackathon 作品，概念先进但需评估与核心架构的耦合度；俄语文档需本地化 |
| **zig-qm-toolkit 集成** | [#893](https://github.com/nullclaw/nullclaw/pull/893) | ⭐⭐ 低 | **已关闭**，4 层验证体系与现有 AGENTS.md/CLAUDE.md 冲突；需架构级重构才可能接纳 |

**下版本预测**：Lark 双改进 + ACP 适配器 + Cron 子代理 极可能组成 **v0.x 功能 release**，数据治理层或作为实验性模块。

---

## 7. 用户反馈摘要

### 痛点
| 反馈 | 来源 |
|:---|:---|
| "curl/wget 被硬编码禁用，实际网络操作受阻" | [#167](https://github.com/nullclaw/nullclaw/issues/167) |
| "树莓派级别设备跑不起来 web_search，Brave API 不现实" | [#871](https://github.com/nullclaw/nullclaw/issues/871) |
| "README  benchmark 数据过时（二进制>1MB，内存>1MB），易引发争议" | [#473](https://github.com/nullclaw/nullclaw/issues/473) |
| "Zig 安装对 Debian 用户不友好，Docker 太重" | [#820](https://github.com/nullclaw/nullclaw/issues/820) |

### 场景诉求
- **企业 IM 集成**：飞书用户需要更自然的群聊交互（非强制 @mention）、更干净的 UX（无闪烁占位符）
- **边缘/IoT 部署**：弱设备上的完整功能闭环，尤其搜索能力
- **构建可复现性**：跨平台 Zig 版本兼容性（v0.16 已出构建问题）

### 满意度信号
- 文档改进响应快（#820 → #897 当日闭环）
- 安全修复及时（#790 从创建到合并约 1 个月，含 Responses API 新路径适配）

---

## 8. 待处理积压

| 积压项 | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) Cron 子代理 | 2026-04-07 | 2026-05-07 | **评审 1 个月未决**，功能庞大（调度+队列+JSON+安全）可能因审查负担搁置；建议拆分模块加速 |
| [#473](https://github.com/nullclaw/nullclaw/issues/473) README benchmark 过时 | 2026-03-13 | 2026-05-07 | **2 个月未处理**，虽小但损害项目可信度（"1MB 二进制"承诺与实际差距） |
| [#885](https://github.com/nullclaw/nullclaw/pull/885) 数据治理层 | 2026-05-04 | 2026-05-07 | Hackathon 截止后若无维护者接手，可能沦为孤儿 PR；需明确是否纳入实验分支 |

**维护者行动建议**：
1. 优先评审 #783 或指导作者拆分提交
2. 快速修复 #473（数据更新<30分钟工作量，信任收益高）
3. 对 #871 给出路线图回应，即使为"暂不支持"也需明确替代方案

---

*日报基于 GitHub 公开数据生成，链接均为 `https://github.com/nullclaw/nullclaw` 下对应资源。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-08

> **项目**: nearai/ironclaw | **日期**: 2026-05-08 | **分析周期**: 过去24小时

---

## 1. 今日速览

IronClaw 今日呈现**高强度交付状态**：v0.28.0 版本正式发布，标志"Reborn"架构主干代码落地；50个 PR 吞吐（30合/闭，20待审）显示核心团队正加速推进架构迁移。Issues 侧 23 条更新中，Reborn 相关集成测试与生产化 wiring 占据主导，同时 Telegram/Gmail 跨渠道认证链路的 P1 Bug Bash 问题集中爆发，社区反馈的稳定性诉求迫切。整体健康度：**架构升级激进，用户场景修复紧迫**。

---

## 2. 版本发布

### [ironclaw-v0.28.0](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.28.0) | 2026-05-07

| 维度 | 详情 |
|:---|:---|
| **版本类型** | 功能版本（minor bump: 0.27.0 → 0.28.0） |
| **核心变更** | **Reborn 集成基板正式入主分支** — 引入宿主基础 crate、能力宿主（capability host）、运行时调度器（runtime dispatcher）、进程生命周期管理、文件系统、密钥、网络及扩展清单注册边界 |
| **WASM 工具链** | 新增 WIT 兼容的 WASM 工具运行时支持 |
| **破坏性变更** | 未明确声明；但 Reborn 架构为底层重构，下游依赖 `ironclaw` crate 的扩展/适配器需验证兼容性 |
| **迁移注意** | ① 若使用自定义 WASM 扩展，需确认 WIT 接口契约；② `ironclaw_common` 同步升至 0.4.1（API 兼容）；③ 数据库迁移需关注 PR #3366、#3365 等关联的 `DB MIGRATION` 标记 |

> **供应链提醒**: [Issue #3259](https://github.com/nearai/ironclaw/issues/3259) 指出 crates.io 仍滞留 0.24.0，0.25.0–0.28.0 尚未发布，下游因 wasmtime 28.x CVE 被锁定。建议维护者同步发布 registry 版本。

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（10 项）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#3376](https://github.com/nearai/ironclaw/pull/3376) | ironclaw-ci[bot] | **v0.28.0 发布编排** | — |
| [#3377](https://github.com/nearai/ironclaw/pull/3377) | serrrfirat | **Reborn AgentLoopHost 契约门面** — 定义驱动级端口，替代空标记接口 | [#3016](https://github.com/nearai/ironclaw/issues/3016) |
| [#3369](https://github.com/nearai/ironclaw/pull/3369) | serrrfirat | **持久化对话状态后端** — libSQL/PostgreSQL 双后端，覆盖配对、线程参与者、消息路由等 9 张表 | — |
| [#3379](https://github.com/nearai/ironclaw/pull/3379) | serrrfirat | **持久化会话线程存储** — 规范 Reborn 线程/转录本持久化，含幂等性校验 | — |
| [#3349](https://github.com/nearai/ironclaw/pull/3349) | serrrfirat | **运行状态+审批请求联合存储** — 原子化审批持久化与运行阻塞 | — |
| [#3378](https://github.com/nearai/ironclaw/pull/3378) | serrrfirat | **运行状态存储后端选择器** — 生产 DB 句柄自动构建/迁移 | — |
| [#3368](https://github.com/nearai/ironclaw/pull/3368) | serrrfirat | **数据库能力租赁存储** — 作用域化能力租赁生命周期 | — |
| [#3382](https://github.com/nearai/ironclaw/pull/3382) | serrrfirat | **AgentLoopHost 门面加固** — 原始能力参数替换为有界不透明引用，缩小 syscall DTO 暴露面 | — |
| [#3351](https://github.com/nearai/ironclaw/pull/3351) | serrrfirat | **ProductAdapter 核心契约 crate** — 7 部曲之 1，定义进出站 DTO、密封协议认证、出口/投递特征 | — |
| [#3316](https://github.com/nearai/ironclaw/pull/3316) | nickpismenkov | **ProductAdapter 首片落地** — Telegram v2 追踪子弹，fake Reborn 服务端到端验证 | [#3285](https://github.com/nearai/ironclaw/issues/3285) |

**架构推进评估**: 今日合并 PR 几乎全部由 `serrrfirat` 驱动，聚焦 **Reborn 基础设施层"硬化"** — 从契约定义（#3377、#3351）到持久化实现（#3369、#3379、#3349、#3368）再到安全加固（#3382），形成完整闭环。项目整体从"Reborn 代码落地"（v0.28.0 发布说明）迈向"生产可运行状态"。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 🔥1 | [#3067](https://github.com/nearai/ironclaw/issues/3067) [TEST] Reborn: Add vertical-slice integration test suite | **28 评论** | **Reborn 质量门禁的核心瓶颈**。作者 serrrfirat 自 4/29 持续更新，今日仍有活跃讨论。诉求：证明 Reborn 基板通过公共入口点工作，而非仅 crate 本地单元测试。28 条评论反映测试策略反复迭代，当前 pickup plan 可能仍在调整。|
| 🔥2 | [#3022](https://github.com/nearai/ironclaw/issues/3022) Reborn cutover blocker: event substrate integration tests | **9 评论** | **用户可见 Reborn 切换的硬阻塞项**。需证明 V1 事件生产者写入脱敏、作用域化、可回放事件。与 #3067 形成"测试矩阵"的两翼。|
| 🔥3 | [#3016](https://github.com/nearai/ironclaw/issues/3016) Reborn cutover blocker: reference AgentLoopHost facade | **7 评论** | 今日已由 PR #3377、#3382 双关闭。原追踪 AgentLoopHost 参考实现，现进入"契约硬化"阶段。|

### 诉求洞察

> **核心矛盾**: 社区（含核心团队自身）对 Reborn 架构的 **"可验证正确性"焦虑** 高于功能交付速度。28 评论的 #3067 和 9 评论的 #3022 均指向同一诉求：**不要"相信"基板工作，要"证明"它工作**。这与 v0.28.0 发布说明中"landing...on main"的自信形成张力，暗示主分支代码与生产就绪之间存在感知差距。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| **P1** | [#3317](https://github.com/nearai/ironclaw/issues/3317) | 🟡 OPEN | Telegram 本地 IronClaw 设置失败 | **[#3381](https://github.com/nearai/ironclaw/pull/3381)** 待合并 |
| **P1** | [#3319](https://github.com/nearai/ironclaw/issues/3319) | 🟡 OPEN | Telegram 启动 Gmail 认证 400 错误 | **[#3381](https://github.com/nearai/ironclaw/pull/3381)** 待合并 |
| **P1** | [#3320](https://github.com/nearai/ironclaw/issues/3320) | 🟡 OPEN | Gmail 认证失败后对话永久卡住（/clear 无效） | **[#3381](https://github.com/nearai/ironclaw/pull/3381)** 待合并 |
| **P1** | [#2902](https://github.com/nearai/ironclaw/issues/2902) | 🔴 OPEN | NEAR Foundation 实例 Telegram 不可用（4/23 至今） | 无明确 PR |
| P2 | [#3082](https://github.com/nearai/ironclaw/issues/3082) | ✅ CLOSED | 启用工具自动审批后"重启中"无限挂起 | [#3364](https://github.com/nearai/ironclaw/pull/3364) |
| — | [#3225](https://github.com/nearai/ironclaw/issues/3225) | ✅ CLOSED | Gemini API-key 后端工具调用缺失 thought_signature | 已修复 |
| — | [#3229](https://github.com/nearai/ironclaw/issues/3229) | ✅ CLOSED | **关键**: LLM provider fallback 持久化到 DB，永久破坏用户配置 | 已修复（👍: 1）|
| — | [#3274](https://github.com/nearai/ironclaw/issues/3274) | ✅ CLOSED | 0.26.0→0.27.0 升级后数据缺失、项目标签失败线程警告 | 已修复 |
| — | [#3201](https://github.com/nearai/ironclaw/issues/3201) | ✅ CLOSED | DeepSeek 工具调用不工作 | 已修复 |

**稳定性评估**: 
- **好消息**: 4 个历史 Bug 今日关闭，含数据破坏性 Bug #3229（用户配置永久丢失）
- **坏消息**: **Telegram × Gmail 跨渠道认证链路出现系统性故障**，3 个 P1 问题同源（PR #3381 统一修复）。根因分析（PR 摘要）："per-channel auth tested in isolation; cross-channel flows had no coverage" — **渠道隔离测试的架构债爆发**。
- **遗留风险**: [#2902](https://github.com/nearai/ironclaw/issues/2902) 作为 NEAR Foundation 生产实例故障，已滞留 15 天无修复信号，可能涉及更深层部署配置问题。

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 内容 | 纳入可能性 |
|:---|:---|:---|:---|
| [#3327](https://github.com/nearai/ironclaw/issues/3327) | 功能请求 | **LLM 推理内容端到端透出** — UI thinking 显示 + 调试面板 + DB 持久化（reasoning_content, thought_signature, OpenRouter reasoning_details） | **高** — PR #3326 已关联，ilblackdragon 主导，契合当前 LLM 透明度趋势 |
| [#3334](https://github.com/nearai/ironclaw/issues/3334) | 功能请求 | **多 Slack workspace 支持** — 单 IronClaw 实例跨多 Slack 工作区 | 中 — 需 channel-relay 服务协同，架构上依赖 ProductAdapter 完成度 |
| [#3333](https://github.com/nearai/ironclaw/issues/3333) | 架构债务 | **Reborn 生产化 wiring 与缺失 crate 审计** — 发现多个 fake/in-memory/no-op 接缝 | **高（阻塞性）** — serrrfirat 自开自修，已转化为 PR 队列 |
| [#3290](https://github.com/nearai/ironclaw/issues/3290) | 迁移任务 | Mission/Job/遗留 routine 表面迁移到 Reborn MissionService | 中 — 依赖 #3333 生产化完成 |
| [#3289](https://github.com/nearai/ironclaw/issues/3289) | 迁移任务 | Secret/OAuth/认证设置产品流迁移 | 中 — 与 #3317-#3320 认证修复相关，可能优先 |
| [#3288](https://github.com/nearai/ironclaw/issues/3288) | 迁移任务 | Extension/Skill/MCP/WASM 生命周期 UX 迁移 | 中 |
| [#3287](https://github.com/nearai/ironclaw/issues/3287) | 迁移任务 | Memory/Workspace 产品表面迁移 | 中 |

**路线图信号**: 今日密集出现的 5 个 `[reborn] [Reborn] Migrate...` Issue（#3290、#3289、#3288、#3287 + 父追踪 #3031）表明 **Reborn 进入"产品表面迁移"阶段** —— 基础设施层（今日合并的 PR）已就绪，开始向上层业务逻辑推进。

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issue 评论与截图）

| 用户 | 场景 | 痛点 | 情绪 |
|:---|:---|:---|:---|
| **sergeiest** (Bug Bash) | Telegram 本地部署 → Gmail OAuth | "设置完全不可用"、"认证失败后对话死亡，/clear 都救不了" | 😤 挫败 — 基础链路断裂 |
| **sergeiest** | NEAR Foundation 生产实例 | Telegram 持续不可用（附 339×276 错误截图） | 😤 生产不可用的焦虑 |
| **thomasmaerz** | LXC 容器 fresh install | LLM provider fallback **永久覆盖用户配置**，重启后无法恢复 | 😱 数据破坏性 — "Critical" 自评 |
| **sunglow666** | 0.26.0→0.27.0 升级 | 升级后 Chat 标签空白、Projects 标签显示失败线程警告，需手动刷新 | 😕 升级信任受损 |
| **CaveNightingale** | DeepSeek 本地配置 | 工具调用完全失败 | 😕 多 provider 支持质量参差 |
| **dacoldest** | 下游依赖维护 | crates.io 锁定 0.24.0，CVE 无法修复 | 😤 供应链阻塞 |

### 满意点
- v0.28.0 Reborn 架构落地获技术认可（无负面反馈）
- Bug 修复响应速度较快（#3225、#3229、#3274、#3201 均 1-5 天内关闭）

### 不满意点
- **跨渠道认证测试覆盖缺失** — 同一用户旅程（Telegram→OAuth→resume）3 处断裂
- **升级体验脆弱** — 数据一致性、配置持久化反复出问题
- **Rust 生态发布滞后** — GitHub Release 与 crates.io 不同步

---

## 8. 待处理积压

| Issue/PR | 滞留时间 | 风险 | 提醒 |
|:---|:---|:---|:---|
| [#2902](https://github.com/nearai/ironclaw/issues/2902) Telegram 不工作（NEAR Foundation 实例） | **15 天** | 🔴 生产实例不可用，品牌损害 | 需区分是代码问题还是部署/配置问题，指派 SRE 介入 |
| [#3259](https://github.com/nearai/ironclaw/issues/3259) crates.io 发布滞后 | **3 天** | 🟡 供应链安全（CVE） | 需 CI/CD 流程修复，与 release-plz 配置相关 |
| [#3323](https://github.com/nearai/ironclaw/issues/3323) Nightly E2E 失败 | **1 天** | 🟡 质量门禁失效 | "cancelled" 非失败，需调查是资源耗尽还是流程缺陷 |
| [#3067](https://github.com/nearai/ironclaw/issues/3067) 垂直切片集成测试 | **9 天，28 评论** | 🟡 Reborn 质量信心 | 评论数膨胀反映方案未定，建议强制时间盒决策 |
| [#3022](https://github.com/nearai/ironclaw/issues/3022) 事件基板集成测试 | **9 天** | 🟡 Reborn 切换阻塞 | 与 #3067 合并评估，或定义最小可接受覆盖 |

---

## 附录：数据速查

| 指标 | 数值 |
|:---|:---|
| Issues 更新 | 23（新开/活跃 16，关闭 7） |
| PR 更新 | 50（待合并 20，已合并/关闭 30） |
| 版本发布 | 1（v0.28.0） |
| 核心贡献者（今日） | serrrfirat（8 PR）、ilblackdragon（3 PR）、nickpismenkov（2 PR）|
| DB Migration 标记 PR | #3366、#3365（待合并）；#3369、#3379、#3349、#3368（已合并）|

---

*本日报基于 GitHub 公开数据生成，不涉及未公开信息或代码审查意见。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-08

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **日期**: 2026-05-08  
> **分析师**: AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览

LobsterAI 今日展现**极高开发活跃度**，24小时内 45 个 PR 完成合并/关闭（仅 9 个待合并），同时发布 2026.5.7 版本，属于典型的"发布冲刺日"。开发重心集中在 **Windows 平台稳定性修复**、**会话系统性能优化** 和 **多模型兼容性增强**三大方向。社区侧有 2 个新增 Issue，均涉及用户登录/配置阻断问题，需关注用户体验连续性。整体项目健康度良好，代码迭代速度快，但用户支持响应存在滞后风险。

---

## 2. 版本发布

### [LobsterAI 2026.5.7](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.7) | 2026-05-07

| 维度 | 内容 |
|:---|:---|
| **版本类型** | 维护版本（patch/minor） |
| **核心变更** | ① Windows 技能删除可靠性提升 + 导入反馈优化 ② 有道云笔记技能升级至 1.0.8 |
| **关键 PR** | [#1881](https://github.com/netease-youdao/LobsterAI/pull/1881) `fix(skills): improve Windows skill delete reliability and import feedback` by @liuzhq1986<br>[#1882](https://github.com/netease-youdao/LobsterAI/pull/1882) `feat(skill): upgrade youdaonote skill to 1.0.8` by @liuzhq1986 |
| **破坏性变更** | 未发现 |
| **迁移注意事项** | 使用 Windows 平台的用户建议更新后重新测试技能安装/删除流程；有道云笔记用户将自动获得 1.0.8 版本技能 |

> **评估**: 此版本为稳定性导向的维护更新，未引入重大功能，适合全量用户平滑升级。

---

## 3. 项目进展

### 今日核心合并 PR（按影响力排序）

| # | 标题 | 作者 | 领域 | 进展意义 |
|:---|:---|:---|:---|:---|
| [#1907](https://github.com/netease-youdao/LobsterAI/pull/1907) | feat(cowork): 会话列表与消息历史分页加载 | @btc69m979y-dotcom | cowork | **性能架构升级**: 基于原 [#924](https://github.com/netease-youdao/LobsterAI/pull/924) 解决合并冲突后合入，解决长会话内存占用与渲染卡顿问题，标志核心 IM/协作架构进入可扩展阶段 |
| [#1904](https://github.com/netease-youdao/LobsterAI/pull/1904) | feature: 每个 Agent 支持独立的工作目录 | @fisherdaddy | multi-area | **多 Agent 隔离性突破**: 为复杂工作流场景（如同时运行代码分析、文档生成 Agent）提供文件系统隔离基础 |
| [#1910](https://github.com/netease-youdao/LobsterAI/pull/1910) | fix(startup): reduce false initialization failures and add in-app relaunch | @liuzhq1986 | renderer/main | **启动可靠性提升**: 增加初始化错误页内重启动作，降低冷启动超时误报，直接改善新用户首次体验 |
| [#1909](https://github.com/netease-youdao/LobsterAI/pull/1909) | fix: resolve Windows file preview duplicate cards and path errors | @btc69m979y-dotcom | renderer/cowork/artifacts | **Windows 平台关键修复**: 解决 `file:///` 与 `D:\path` 路径格式混用导致的重复卡片、ENOENT 错误，影响文件预览核心场景 |
| [#1908](https://github.com/netease-youdao/LobsterAI/pull/1908) | fix: 修复流式文本合并时重复字符被误吞的问题 | @btc69m979y-dotcom | main | **流式输出正确性**: 移除有缺陷的 `computeSuffixPrefixOverlap` 函数，修复 `.pptx` → `.ptx` 等字符丢失问题，保障 LLM 输出完整性 |
| [#1905](https://github.com/netease-youdao/LobsterAI/pull/1905) | fix: 修复重启后默认模型不是最后一次选择模型的问题 | @fisherdaddy | renderer/cowork | **状态持久化修复**: 提升用户偏好记忆的可靠性 |
| [#1900](https://github.com/netease-youdao/LobsterAI/pull/1900) | fix(cowork): harden assistant segment persistence for markdown table | @liuzhq1986 | docs/main | **数据持久化健壮性**: 防止并发会话下 markdown 表格截断损坏 |
| [#1830](https://github.com/netease-youdao/LobsterAI/pull/1830) | feat: 新增 ChatGPT 的 OAuth 登录支持 | @fisherdaddy | renderer/main/openclaw | **生态集成扩展**: 降低 OpenAI 服务接入门槛 |
| [#1862](https://github.com/netease-youdao/LobsterAI/pull/1862) | feature: 新增小米 mimo 模型 coding plan 支持 | @fisherdaddy | renderer | **国产模型生态扩展**: 跟进国内大模型新能力 |
| [#1818](https://github.com/netease-youdao/LobsterAI/pull/1818) | fix: 修复开启代理后 openai 原厂模型无法访问的问题 | @fisherdaddy | main/openclaw/cowork | **网络兼容性修复**: 解决企业/开发者代理环境下的模型访问阻断 |

**整体迈进评估**: 今日合并内容覆盖 **性能架构（分页加载）**、**平台稳定性（Windows 路径/启动/流式输出）**、**多模型生态（ChatGPT OAuth/小米 mimo/DeepSeek V4 兼容）** 三大战略方向，属于高质量迭代日。

---

## 4. 社区热点

> 注：今日 PR 评论数均显示为 `undefined`，Issues 评论数有限，以下基于内容重要性和用户影响分析。

### 热点 Issue: [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) IM机器人 微信接口 配置扫码后无法输入验证码
| 属性 | 内容 |
|:---|:---|
| 作者 | @iwos2610 |
| 状态 | OPEN（创建于 2026-04-30，最后更新 2026-05-07） |
| 评论数 | 2 |
| **核心诉求** | 微信最新版扫码流程变更：要求在 OpenClaw 端输入 6 位验证码，但 LobsterAI 客户端未提供输入界面，导致 **IM 机器人配置完全阻断** |

**背后分析**: 此问题属于**外部依赖变更导致的兼容性断裂**——微信修改了授权流程，LobsterAI 的 UI 未同步适配。影响所有依赖微信 IM 机器人的企业/个人用户，属于 P0 级体验阻断。2 条评论表明已有用户确认复现，但 8 天未获官方响应。

### 热点 Issue: [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) 会员登录频繁失败
| 属性 | 内容 |
|:---|:---|
| 作者 | @zhahongan-ctrl |
| 状态 | OPEN（创建于 2026-05-07，当日更新） |
| 评论数 | 1 |
| **核心诉求** | 会员登录系统不稳定，导致 **付费用户无法使用网易付费模型**，要求改进登录方式 |

**背后分析**: 直接影响 **付费收入转化** 和 **订阅用户留存**。用户上传截图表明为认证系统层面的故障，非个案。与今日发布的 2026.5.7 版本无直接关联，需紧急排查认证服务后端。

---

## 5. Bug 与稳定性

| 优先级 | 问题 | 来源 | 状态 | Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **P0 - 阻断性** | 会员登录频繁失败，付费模型无法使用 | [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) | **无 Fix** | ❌ 无 | 所有付费会员用户 |
| 🔴 **P0 - 阻断性** | 微信 IM 机器人配置流程断裂（无验证码输入界面） | [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) | **无 Fix** | ❌ 无 | 微信 IM 机器人用户 |
| 🟡 **P1 - 高** | Windows 技能删除 EPERM 权限错误 | 历史问题 | **已修复** | ✅ [#1891](https://github.com/netease-youdao/LobsterAI/pull/1891) | Windows 用户 |
| 🟡 **P1 - 高** | 启动初始化误报失败（冷启动超时） | 历史问题 | **已修复** | ✅ [#1910](https://github.com/netease-youdao/LobsterAI/pull/1910) | 全平台新用户 |
| 🟡 **P1 - 高** | Windows 文件预览路径错误/重复卡片 | 历史问题 | **已修复** | ✅ [#1909](https://github.com/netease-youdao/LobsterAI/pull/1909) | Windows 文件预览用户 |
| 🟡 **P1 - 高** | 流式输出字符误吞（`.pptx`→`.ptx`） | 历史问题 | **已修复** | ✅ [#1908](https://github.com/netease-youdao/LobsterAI/pull/1908) | 全平台流式输出场景 |
| 🟢 **P2 - 中** | 重启后默认模型偏好丢失 | 历史问题 | **已修复** | ✅ [#1905](https://github.com/netease-youdao/LobsterAI/pull/1905) | 多模型切换用户 |
| 🟢 **P2 - 中** | 代理环境下 OpenAI 模型访问失败 | 历史问题 | **已修复** | ✅ [#1818](https://github.com/netease-youdao/LobsterAI/pull/1818) | 企业代理环境用户 |

> **关键观察**: 今日代码层面修复了 4 个 P1 级稳定性问题，但 **2 个 P0 级用户阻断问题（登录、微信配置）尚无 Fix PR**，形成"代码质量提升"与"用户支持滞后"的反差。

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求描述 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#1904](https://github.com/netease-youdao/LobsterAI/pull/1904)（已合并） | Agent 独立工作目录 | ✅ **已纳入** | 已合入 release/2026.05.08，支持复杂多 Agent 工作流 |
| [#1907](https://github.com/netease-youdao/LobsterAI/pull/1907)（已合并） | 会话/消息分页加载 | ✅ **已纳入** | 解决 #817 长期性能问题，架构级改进 |
| [#1830](https://github.com/netease-youdao/LobsterAI/pull/1830)（已合并） | ChatGPT OAuth 登录 | ✅ **已纳入** | 降低 OpenAI 生态接入摩擦 |
| [#1862](https://github.com/netease-youdao/LobsterAI/pull/1862)（已合并） | 小米 mimo coding plan | ✅ **已纳入** | 国产模型生态跟进 |
| [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) | 微信验证码输入界面 | ⏳ **高优先级待开发** | 外部强制变更，不修复则功能废弃 |
| [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) | 会员登录方式改进 | ⏳ **高优先级待开发** | 直接影响付费转化，商业优先级最高 |

**下一版本预测**: 基于 release/2026.05.08 分支的合并节奏，预计 5 月中旬版本将聚焦 **多 Agent 工作流隔离** + **大规模会话性能** + **国产模型扩展** 三大主题。

---

## 7. 用户反馈摘要

### 痛点提炼（来自 Issues）

| 用户 | 场景 | 痛点 | 情绪强度 |
|:---|:---|:---|:---|
| @iwos2610 | 配置微信 IM 机器人 | "最新版微信扫码后要求输入6位数字，**客户端未给出输入界面**" | 😤 高（功能完全不可用）|
| @zhahongan-ctrl | 使用网易付费模型 | "**会员登录不进去**，无法使用网易付费的模型" | 😤 高（付费权益受损）|

### 隐含需求
- **认证系统韧性**: 会员登录失败表明后端认证服务或客户端登录逻辑存在单点故障，需支持降级/重试/备用登录方式
- **第三方平台变更响应机制**: 微信流程变更 8 天未响应，需建立外部 API/UI 变更的监控与快速响应流程
- **Windows 平台优先修复**: 今日 3 个 Windows 专项修复（技能删除、文件预览、路径处理）表明该平台的测试覆盖 historically 不足

---

## 8. 待处理积压

| # | 标题 | 创建时间 | 最后更新 | 滞留天数 | 风险等级 | 提醒 |
|:---|:---|:---|:---|:---|:---|:---|
| [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) | IM机器人 微信接口 配置扫码后无法输入验证码 | 2026-04-30 | 2026-05-07 | **8 天** | 🔴 **紧急** | 外部强制流程变更，功能废弃风险，需 UI/前端介入 |
| [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) | 会员登录频繁失败 | 2026-05-07 | 2026-05-07 | 1 天 | 🔴 **紧急** | 付费用户阻断，建议 24h 内响应并启动后端排查 |

> **维护者行动建议**: 
> 1. 立即将 #1878、#1903 标记为 `priority/P0` 并分配责任人
> 2. #1878 需产品经理确认微信新流程的完整交互设计，前端开发验证码输入组件
> 3. #1903 需后端团队排查认证服务日志，同步检查是否有批量用户受影响

---

## 附录：数据可信度说明

- PR 评论数字段存在 `undefined` 显示异常，实际社区讨论热度可能高于表面数据
- 本日报基于 GitHub 公开数据生成，未包含私有仓库或内部沟通信息

---

*日报生成时间: 2026-05-08*  
*数据来源: github.com/netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-08

> **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis)  
> **分析日期**: 2026-05-08  
> **数据周期**: 过去 24 小时（2026-05-07）

---

## 1. 今日速览

Moltis 今日展现出**极高的工程吞吐量**：24 小时内 9 个 PR 完成合并/关闭、4 个 Issue 全部闭环，并推送 2 个版本迭代。核心贡献者 `penso` 主导了 7 个 PR，覆盖语音、图像生成、浏览器沙箱、节点身份认证等关键模块，显示项目处于**密集功能交付期**。唯一待合并的语音实时模型指引 PR 表明团队仍在推进 OpenAI 生态的深度集成。整体健康度：**活跃且推进迅速**，但版本号格式（日期化）暗示可能采用持续部署模式，需关注变更稳定性。

---

## 2. 版本发布

| 版本 | 发布时间 | 状态 |
|:---|:---|:---|
| [`20260507.05`](https://github.com/moltis-org/moltis/releases/tag/20260507.05) | 2026-05-07 | 已发布 |
| [`20260507.04`](https://github.com/moltis-org/moltis/releases/tag/20260507.04) | 2026-05-07 | 已发布 |

**⚠️ 版本信息缺失**：两个版本均未提供 Release Notes（摘要字段为空）。基于同日合并的 PR 推断，版本可能包含以下内容：

| 推断更新内容 | 来源 PR | 风险等级 |
|:---|:---|:---|
| OpenAI Codex OAuth 图像生成 (`gpt-image-2`) | [#982](https://github.com/moltis-org/moltis/pull/982) | 中 — 新增外部服务依赖 |
| 本地 Whisper STT 支持 | [#981](https://github.com/moltis-org/moltis/pull/981) | 低 — 向后兼容 |
| 浏览器沙箱 Docker 修复 | [#980](https://github.com/moltis-org/moltis/pull/980) | **高** — 修复关键部署阻塞问题 |
| Ed25519 节点身份认证（TOFU） | [#979](https://github.com/moltis-org/moltis/pull/979) | **高** — 认证机制变更，需操作员介入 |
| 远程沙箱多后端支持 | [#942](https://github.com/moltis-org/moltis/pull/942) | 中 — 云部署场景扩展 |

**迁移注意事项**：
- **节点身份认证**：从 token-based 迁移至 Ed25519 TOFU 模型，现有节点首次连接需操作员手动批准指纹
- **浏览器沙箱**：Docker 部署需配置 `tools.exec.sandbox.host_data_dir` 或确保数据目录可被宿主机访问

---

## 3. 项目进展

### 已合并/关闭 PR（9 个）

| PR | 作者 | 核心贡献 | 项目推进度 |
|:---|:---|:---|:---|
| [#981](https://github.com/moltis-org/moltis/pull/981) | penso | **语音隐私架构升级**：新增 `whisper-local` STT 提供商，支持 faster-whisper-server / whisper.cpp / LocalAI 等本地部署；将语音提供商列表从白名单改为默认展示全部 | ⭐⭐⭐ 降低云端依赖，强化本地优先定位 |
| [#983](https://github.com/moltis-org/moltis/pull/983) | penso | **工具调用可靠性**：修复参数解析诊断信息丢失问题，空/畸形参数不再坍缩为 `{}`，支持空、缺失、畸形、修复四种来源标记 | ⭐⭐⭐ 关键稳定性修复，解决生产环境间歇性失败 |
| [#982](https://github.com/moltis-org/moltis/pull/982) | penso | **多模态能力扩展**：集成 OpenAI Codex OAuth 图像生成，内置 `generate_image` 工具返回频道兼容的截图媒体 | ⭐⭐⭐ 补齐视觉生成能力，与 GPT-4o 生态深度绑定 |
| [#920](https://github.com/moltis-org/moltis/pull/920) | penso | **电话通道落地**：新增 `moltis-telephony` crate，Twilio 提供商 + 状态机 + PCM↔μ-law 转换 + 完整 ChannelPlugin 集成 | ⭐⭐⭐⭐ 开启实时语音交互场景，架构完整度高 |
| [#980](https://github.com/moltis-org/moltis/pull/980) | penso | **容器化部署修复**：浏览器沙箱通过宿主机可见数据目录解析持久化配置绑定挂载，支持 Docker/Podman | ⭐⭐⭐ 解除 Docker 部署关键阻塞 |
| [#979](https://github.com/moltis-org/moltis/pull/979) | penso | **去中心化身份奠基**：Ed25519 挑战-响应节点认证替代 token 模式，SSH TOFU 信任模型 | ⭐⭐⭐⭐ 为跨代理互操作奠定密码学基础 |
| [#978](https://github.com/moltis-org/moltis/pull/978) | dependabot | 依赖安全更新：wasmtime 36.0.7 → 36.0.8 | ⭐ 常规维护 |
| [#976](https://github.com/moltis-org/moltis/pull/976) | vystartasv | **协议文档化**：Agent Identity + Onboarding Protocols 集成指南，定义 L1/L2 跨服务器信任流程 | ⭐⭐⭐ 将架构决策转化为可实施标准 |
| [#942](https://github.com/moltis-org/moltis/pull/942) | penso | **云原生沙箱**：远程/多后端沙箱支持（Vercel / Daytona / Firecracker），解决 Docker-in-Docker 不可用场景 | ⭐⭐⭐⭐ 大幅扩展部署灵活性 |

**整体评估**：今日合并内容覆盖**语音输入→电话通道→图像输出**的完整多模态链路，同时完成**身份层→沙箱层**的安全架构升级，相当于一次**小型里程碑交付**。

---

## 4. 社区热点

> **注**：所有 Issues/PRs 评论数均为 0，👍 数为 0，显示社区互动度**极低**，可能处于早期核心开发阶段或用户群体封闭。

| 条目 | 链接 | 潜在诉求分析 |
|:---|:---|:---|
| **Issue #973** — Onboarding + Identity protocols for interoperable personal agent servers | [#973](https://github.com/moltis-org/moltis/issues/973) | **架构愿景型提案**：作者 `vystartasv` 明确提出 Moltis 从"个人智能工具"向"可互操作代理网络"跃迁的需求，强调去中心化发现与能力交换。同日即被关闭并配套文档 PR，显示核心团队**高度认同且快速落地** |
| **Issue #977** — Browser sandbox fails when Moltis runs in Docker | [#977](https://github.com/moltis-org/moltis/issues/977) | **部署阻塞型痛点**：Proxmox + LXC + Docker 嵌套环境下的浏览器沙箱失败，代表自托管用户群体的典型复杂基础设施场景 |
| **Issue #963** — Tool calls with malformed or empty arguments collapse | [#963](https://github.com/moltis-org/moltis/issues/963) | **生产稳定性诉求**：`exec` 调用间歇性失败且错误信息误导（`missing=command`），影响自动化工作流可靠性 |

**信号提取**：社区虽小，但 Issue 质量高——覆盖架构设计、部署运维、核心功能稳定性三个层面，且团队响应速度极快（平均 1 日内关闭）。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | Fix PR | 根因 | 影响范围 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **高** | [#977](https://github.com/moltis-org/moltis/issues/977) Browser sandbox fails in Docker | **已关闭** | [#980](https://github.com/moltis-org/moltis/pull/980) | 沙箱容器无法解析宿主机数据目录绑定挂载 | Docker/容器化部署用户，浏览器工具完全不可用 |
| 🟡 **中高** | [#963](https://github.com/moltis-org/moltis/issues/963) Tool calls with malformed arguments collapse | **已关闭** | [#983](https://github.com/moltis-org/moltis/pull/983) | 参数解析错误时诊断信息丢失，空载荷坍缩为 `{}` | 所有工具调用场景，间歇性失败难以调试 |

**回归风险**：[#983](https://github.com/moltis-org/moltis/pull/983) 引入参数来源标记（`empty`/`missing`/`malformed`/`repaired`），需验证下游消费者是否兼容新字段结构。

---

## 6. 功能请求与路线图信号

| 需求来源 | 内容 | 纳入可能性 | 预计时间 |
|:---|:---|:---|:---|
| Issue #956 / PR #982 | OpenAI Codex OAuth 图像生成 (`gpt-image-2`) | ✅ **已发布** | 2026-05-07 |
| Issue #973 / PR #976 | 跨代理身份与上线协议 | ✅ **已发布** | 2026-05-07 |
| PR #920 | Twilio 电话通道 | ✅ **已合并** | 2026-05-07 |
| PR #981 | 本地 Whisper STT | ✅ **已合并** | 2026-05-07 |
| PR #942 | 远程沙箱多后端 | ✅ **已合并** | 2026-05-07 |
| **PR #984（待合并）** | OpenAI 实时语音模型指引 | 🔄 **评审中** | 近期 |

**路线图推断**：
- **近期**：实时语音（Realtime API）深度集成 — PR [#984](https://github.com/moltis-org/moltis/pull/984) 待合并
- **中期**：基于 Ed25519 + TOFU 的**联邦式代理网络** — 身份层已就绪，需节点发现协议
- **潜在方向**：更多本地模型提供商（LLM/STT/TTS 的去云化）

---

## 7. 用户反馈摘要

> 基于 Issue 描述提取真实使用场景与痛点

| 用户 | 场景 | 痛点 | 满意度 |
|:---|:---|:---|:---|
| `Cstewart-HC` | 自动化命令执行工作流 | 模型已正确调用 `exec` 工具，但参数解析失败导致**误导性错误**（`missing=command`），调试困难 | 😞 低 — 错误信息不透明 |
| `bashrusakh` | 通过 Codex OAuth 使用 OpenAI 最新能力 | 需手动申请/配置图像生成，缺乏内置集成 | 😐 中 — 已快速解决 |
| `vystartasv` | 多 Moltis 实例互操作（个人/家庭/团队代理） | 无标准协议实现跨代理信任，**去中心化愿景受阻** | 😊 高 — 提案被迅速采纳 |
| `TLA020` | Proxmox + LXC 自托管，追求资源隔离 | 浏览器沙箱在嵌套容器环境中**完全不可用**，阻断 Web 自动化场景 | 😞 低 — 部署复杂度高 |

**核心洞察**：Moltis 用户群体呈现**"高技术水平自托管者"**特征，基础设施复杂（Proxmox/LXC/Docker 嵌套），对隐私和去中心化有强诉求，同时期望**企业级稳定性**。

---

## 8. 待处理积压

| 条目 | 状态 | 创建时间 | 风险 | 建议行动 |
|:---|:---|:---|:---|:---|
| **PR #984** — feat(voice): surface OpenAI realtime model guidance | 🟡 **待合并** | 2026-05-07 | 阻塞实时语音功能发布 | 优先评审，与已发布的电话通道 PR #920 形成完整语音闭环 |
| 无长期未响应 Issue/PR | — | — | — | 团队当前处理速度极快（平均 <1 日），暂无积压风险 |

**健康度评估**：🟢 **优秀** — 4/4 Issue 当日闭环，9/10 PR 当日处理，无遗留技术债务。唯一关注点是 PR [#984](https://github.com/moltis-org/moltis/pull/984) 的评审进度，建议 24 小时内完成以避免功能发布断层。

---

*日报生成基于公开 GitHub 数据，版本推断内容仅供参考，请以官方 Release Notes 为准。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-08

> **项目地址**: [github.com/agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)  
> **数据周期**: 2026-05-07 至 2026-05-08（24小时）

---

## 1. 今日速览

CoPaw 今日保持**高活跃度**：50 条 Issues 更新（30 条新开/活跃，20 条关闭），33 条 PR 更新（11 条待合并，22 条已合并/关闭），无新版本发布。社区讨论聚焦于**内置技能/MCP 生态设计**、**长对话稳定性**、**渠道体验优化**三大主题。前端控制台获得多项 UI/UX 改进，微信/飞书等企业渠道的问题持续得到修复。整体项目健康度良好，但 Docker 部署场景下的配置持久化问题出现回归，需重点关注。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR（22 条中的核心项）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#4091](https://github.com/agentscope-ai/QwenPaw/pull/4091) | zhaozhuang521 | **技能批量启用/禁用**：控制台技能板块新增批量操作按钮，提升管理效率 | [#3503](https://github.com/agentscope-ai/QwenPaw/issues/3503) |
| [#4093](https://github.com/agentscope-ai/QwenPaw/pull/4093) | jinglinpeng | **修复 Windows 打包失败**：解决 `conda-pack` 与 `pip install qwenpaw[full]` 的冲突，恢复打包工具链稳定性 | [#3988](https://github.com/agentscope-ai/QwenPaw/issues/3988) |
| [#4094](https://github.com/agentscope-ai/QwenPaw/pull/4094) | zhaozhuang521 | **TokenUsage 组件重构**：样式优化、时间选择器限制、图表独立过滤 | - |
| [#4089](https://github.com/agentscope-ai/QwenPaw/pull/4089) | zhijianma | **修复文件预览路径处理**：移除冗余 URL 前缀剥离，缓解文件链接过期问题 | [#4047](https://github.com/agentscope-ai/QwenPaw/issues/4047) |
| [#4055](https://github.com/agentscope-ai/QwenPaw/pull/4055) | celestialhorse51D | **飞书用户昵称透传**：将发送者显示名传递至 Agent 环境上下文（后被 #4098 增强） | [#4050](https://github.com/agentscope-ai/QwenPaw/issues/4050) |
| [#3605](https://github.com/agentscope-ai/QwenPaw/pull/3605) | celestialhorse51D | **微信数据迁移集中化**：统一 `weixin` → `wechat` 标识重命名后的遗留数据迁移 | [#3573](https://github.com/agentscope-ai/QwenPaw/issues/3573) |
| [#3911](https://github.com/agentscope-ai/QwenPaw/pull/3911) | rayrayraykk | **GPT Image-2 工具插件**：新增图像生成能力扩展 | - |
| [#4073](https://github.com/agentscope-ai/QwenPaw/pull/4073) | CA-mambo | **默认 Agent 自定义名称生效**：修复用户设置名称被忽略的问题 | [#3465](https://github.com/agentscope-ai/QwenPaw/issues/3465) |
| [#4052](https://github.com/agentscope-ai/QwenPaw/pull/4052) | zhaozhuang521 | **消除重复渲染**：通过 `JSON.stringify` 比较优化审批轮询性能 | [#4023](https://github.com/agentscope-ai/QwenPaw/issues/4023) |

**整体推进评估**：今日合并集中在**前端体验优化**（4 项）、**渠道稳定性**（3 项）、**打包/部署可靠性**（2 项），属于"修修补补保交付"的节奏，无重大架构变更。

---

## 4. 社区热点

### 🔥 最高讨论热度：内置技能/MCP 生态设计

| 排名 | Issue/PR | 评论数 | 核心诉求 |
|:---|:---|:---:|:---|
| 1 | [#280 Discussion: Which Skills and MCPs Can Be Built-in?](https://github.com/agentscope-ai/QwenPaw/issues/280) | **27** | 社区长期争论：哪些技能/MCP 应预装以提升开箱即用体验，平衡包体积与功能丰富度 |
| 2 | [#4059 对话内容太长后无法正常回复](https://github.com/agentscope-ai/QwenPaw/issues/4059) | **8** | `/compact` 压缩后仍无法解决长对话截断，用户被迫开新对话，体验断裂 |
| 3 | [#3753 火山 Coding Plan 默认支持时间](https://github.com/agentscope-ai/QwenPaw/issues/3753) | **8** | 企业用户催更火山引擎模型适配进度 |
| 4 | [#3350 超200轮对话后页面滚动卡顿](https://github.com/agentscope-ai/QwenPaw/issues/3350) | **7** | 工程级代码迭代场景下，前端渲染性能瓶颈暴露，需方法论指导或组件优化 |
| 5 | [#1502 火山 Coding Plan 模型 Answers have stopped](https://github.com/agentscope-ai/QwenPaw/issues/1502) | **7** | 特定模型在 Windows 桌面版出现响应中断，疑似模型兼容性问题 |

**诉求分析**：
- **#280** 反映项目从"工具框架"向"完整产品"转型的核心矛盾：轻量 vs 全能
- **#4059 + #3350** 揭示**长上下文场景**是生产环境硬门槛，当前架构（前端渲染 + 对话压缩）尚未达标
- **#3753 + #1502** 火山引擎企业用户需求集中，模型适配优先级需提升

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 现象 | Fix PR 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#4101 升级后配置丢失/记不住会话](https://github.com/agentscope-ai/QwenPaw/issues/4101) | Docker 部署 v1.1.5.post2 出现**回归**：Agent 运行配置丢失、最后会话记忆失效 | ❌ **无 PR，今日新开** |
| 🔴 **高** | [#4056 微信渠道消息丢失](https://github.com/agentscope-ai/QwenPaw/issues/4056) | 正常网络下 Agent 突然停止响应，后续消息全部无回复，定时任务仍正常 | ❌ 无 PR |
| 🟡 **中** | [#4051 DeepSeek think 内容解析异常](https://github.com/agentscope-ai/QwenPaw/issues/4051) | DeepSeek V4 Flash 的 reasoning 内容未正确分离，导致"空回复" | ❌ 无 PR |
| 🟡 **中** | [#4006 OpenAI-Compatible Provider 未过滤 Reasoning Content](https://github.com/agentscope-ai/QwenPaw/issues/4006) | MiniMax API 的 reasoning 内容暴露给用户 | ❌ 无 PR |
| 🟡 **中** | [#3988 Windows 打包冲突](https://github.com/agentscope-ai/QwenPaw/issues/3988) | `conda-pack ≤0.7.1` 与 pip 升级动作冲突 | ✅ **已修复 #4093** |
| 🟢 **低** | [#4047 文件链接一天后过期](https://github.com/agentscope-ai/QwenPaw/issues/4047) | 聊天记录附件 Token 过期，前端无提示 | 🔄 **缓解 #4089** |

**关键风险**：**#4101** 是今日最大隐患——Docker 用户的配置持久化出现回归，直接影响生产环境稳定性，需紧急响应。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 可行性信号 | 纳入下一版本概率 |
|:---|:---|:---|:---:|
| **Web 控制台一键升级** | [#2235](https://github.com/agentscope-ai/QwenPaw/issues/2235) | 长期开放，评论少但 👍 1 | 中 |
| **Vertex AI Gemini 支持** | [#4030](https://github.com/agentscope-ai/QwenPaw/issues/4030) | 企业云需求，无 PR | 中高 |
| **Agent 测评/完整聊天记录导出** | [#4008](https://github.com/agentscope-ai/QwenPaw/issues/4008) | 生产环境汇报刚需，用户明确愿贡献场景 | **高** |
| **自定义工作区存储路径** | [#4067](https://github.com/agentscope-ai/QwenPaw/issues/4067) | 与 [#3967](https://github.com/agentscope-ai/QwenPaw/issues/3967) 核心配置区分离诉求一致，有 PR 潜力 | 高 |
| **文件模块增强（非 .md 支持）** | [#4087](https://github.com/agentscope-ai/QwenPaw/issues/4087) | 功能缺口明显，👍 1 | 中高 |
| **借鉴 Hermes 机制升级** | [#4024](https://github.com/agentscope-ai/QwenPaw/issues/4024) | 被标记 invalid，缺乏具体方案 | 低 |
| **MCP Client 可配置 timeout** | [#3997](https://github.com/agentscope-ai/QwenPaw/issues/3997) | 配置层小改动，影响 `streamable_http/sse` 稳定性 | **高** |

**路线图判断**：**Agent 测评功能**（#4008）和 **MCP timeout 配置**（#3997）是下一版本最可能落地的功能——前者解决生产环境采纳障碍，后者是配置完整性补全。

---

## 7. 用户反馈摘要

### 😤 痛点（按提及频率）

| 痛点 | 典型场景 | 代表 Issue |
|:---|:---|:---|
| **长对话崩溃/卡顿** | 工程级代码迭代，200+ 轮后无法继续使用 | #4059, #3350 |
| **配置/记忆丢失** | Docker 升级后 Agent"失忆"，需重新配置 | #4101 |
| **渠道体验不一致** | 微信与 Web 不同步、飞书昵称不识别、消息丢失 | #4000, #4050, #4056 |
| **模型适配滞后** | 火山 Coding Plan、DeepSeek 新模型支持不及时 | #3753, #1502, #4051 |
| **工作区混乱** | 核心配置与用户文档混放，误删风险高 | #3967 |

### 😊 满意点

- 技能/MCP 扩展机制灵活（#280 讨论的前提）
- 批量操作等前端效率优化持续迭代（#3503 解决）
- 社区响应速度较快（多数 Issue 24h 内有回复）

---

## 8. 待处理积压

> **提醒维护者关注：长期未响应或重复出现的高影响 Issue**

| Issue | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|
| [#280 内置 Skills/MCPs 讨论](https://github.com/agentscope-ai/QwenPaw/issues/280) | 2026-03-02 | 2026-05-07 | **2个月+ 开放**，27 评论未形成决议，阻塞生态扩张节奏 |
| [#3350 超200轮对话卡顿](https://github.com/agentscope-ai/QwenPaw/issues/3350) | 2026-04-14 | 2026-05-07 | 23 天，前端性能优化方案未明确，生产用户流失风险 |
| [#2235 Web 控制台升级](https://github.com/agentscope-ai/QwenPaw/issues/2235) | 2026-03-25 | 2026-05-07 | 43 天，远程运维刚需，竞品已有此能力 |
| [#3238 PlanNotebook 实验性支持](https://github.com/agentscope-ai/QwenPaw/pull/3238) | 2026-04-10 | 2026-05-07 | **PR 开放 28 天未合并**，任务规划能力关乎 Agent 智能上限 |

---

**日报生成时间**: 2026-05-08  
**数据置信度**: 基于 GitHub 公开 API 与 Issue/PR 元数据

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-08

## 1. 今日速览

ZeroClaw 项目在 2026-05-07 至 2026-05-08 期间呈现**极高活跃度**，24 小时内新增 50 个 Issues 和 50 个 PR，但**零合并/关闭记录**，表明社区贡献涌入速度远超维护者处理能力。项目当前处于**"高输入、低吞吐"状态**，存在明显的 review 瓶颈。桌面端（Tauri）和 WhatsApp 渠道成为两大焦点领域，安全/沙箱、Provider 兼容性、CI/CD 基础设施亦有显著问题暴露。无新版本发布，v0.7.5  release 因 CI 故障被阻塞。

---

## 2. 版本发布

**无新版本发布**

> ⚠️ **阻塞警报**：PR [#6502](https://github.com/zeroclaw-labs/zeroclaw/pull/6502) 明确指出 v0.7.5 release 因 `web` job 失败（`Cannot find module './api-generated'`）被卡住，master 已标记 v0.7.5 但无实际 release artifact。该 PR 为**解阻塞关键路径**。

---

## 3. 项目进展

**今日合并/关闭：0 个 PR**

尽管 50 个 PR 待合并，但无一项完成合流。以下高价值 PR 处于待审状态，代表项目潜在进展方向：

| PR | 作者 | 状态 | 意义 |
|:---|:---|:---|:---|
| [#6506](https://github.com/zeroclaw-labs/zeroclaw/pull/6506) | theonlyhennygod | OPEN, XL, stacked | macOS 桌面端 8 步引导向导 + TCC 权限原语，**桌面体验基石** |
| [#6507](https://github.com/zeroclaw-labs/zeroclaw/pull/6507) | theonlyhennygod | OPEN, S, stacked on #6506 | `take_screenshot` + `run_applescript` Tauri 命令，**macOS 自动化能力落地** |
| [#6502](https://github.com/zeroclaw-labs/zeroclaw/pull/6502) | singlerider | OPEN, M, release-gate | **v0.7.5 release 解阻塞**，含 `gen-api` 前置 + 本地 Act 测试脚本 |
| [#4944](https://github.com/zeroclaw-labs/zeroclaw/pull/4944) | yijunyu | OPEN, S, needs-author-action | 6 个工具的 bundle wrapper 迁移，**架构现代化** |
| [#6432](https://github.com/zeroclaw-labs/zeroclaw/pull/6432) | drbparadise | OPEN, S | SQLite 并发 schema 迁移安全修复，**稳定性加固** |
| [#6519](https://github.com/zeroclaw-labs/zeroclaw/pull/6519) | Gihan-1994 | OPEN | Gemini CLI provider 参数传递方式重构（pipe → arg），**修复崩溃** |
| [#6515](https://github.com/zeroclaw-labs/zeroclaw/pull/6515) | DjaPy | OPEN | history pruner 三阶段修复，**GLM-5/Z.AI 兼容性** |
| [#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779) | DjaPy | OPEN, M, needs-author-action | shell tool TOTP 分级门控（phase 1），**安全加固** |

**整体评估**：项目在技术层面持续推进，但**合流效率为零**，存在严重的维护者带宽瓶颈。stacked PR（#6506 → #6507）结构合理但依赖链增加了 review 复杂度。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 |
|:---|:---|:---|:---|
| 1 | [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) WhatsApp Web 协议升级后消息流中断 | **6** | **S1 阻断**：2026-04-24 服务端协议 bump 后，`whatsapp-web` feature 完全失效，pair 成功但消息不流通。用户急需官方适配 `wa-rs` 依赖更新。 |
| 2 | [#6516](https://github.com/zeroclaw-labs/zeroclaw/issues/6516) ACP `cwd` 变更导致 agent 无法读取自身 skill 文件 | **2** | **S1 阻断**：沙箱安全机制过度限制，agent 在 `cwd` 外工作时无法访问 workspace 内的 skill 文件，**核心工作流断裂**。 |
| 3 | [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) Telegram 渠道 Prompt Caching 失效 | **2** | **S2 降级**：CLI 正常但 Telegram 强制全量 prompt 重处理，LLM 成本激增。渠道间行为不一致。 |
| 4 | [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) `autonomy="full"` 时 shell tool 调用被静默拒绝 | **2** | **S1 阻断**：配置完全放行但 `tool_dispatch` 未到达 runtime，**权限系统与 runtime 之间存在断点**，用户无法诊断。 |
| 5 | [#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472) Gateway 无法使用 PostgreSQL | **2** | **S2 降级**：`Cannot start a runtime from within a runtime` — Tokio runtime 嵌套 panic，PostgreSQL 适配层存在架构级缺陷。 |

### 热点分析

- **WhatsApp 渠道危机**：#6246 是**时间炸弹型 issue**，外部依赖（WhatsApp Web 协议）变化导致功能完全失效，且影响面大（标注 `priority:p1`）。社区需要维护者明确 `wa-rs` 升级计划。
- **安全/沙箱信任危机**：#6516 和 #6434 共同指向**安全策略与用户体验的失衡**——过度保护导致合法工作流被阻断，且错误信息不透明。
- **桌面端密集投入**：theonlyhennygod 单日提交 2 个 stacked PR + 关联多个 feature issue，显示**桌面端是 2026 Q2 战略重点**。

---

## 5. Bug 与稳定性

### S1 - 工作流阻断（最高优先级）

| Issue | 领域 | 描述 | Fix PR |
|:---|:---|:---|:---|
| [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) | channel:whatsapp | WhatsApp Web 协议 bump 后消息流完全中断 | ❌ 无 |
| [#6516](https://github.com/zeroclaw-labs/zeroclaw/issues/6516) | security/sandbox | ACP `cwd` 变更锁死 skill 文件访问 | ❌ 无 |
| [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) | runtime/daemon | `autonomy="full"` 时 shell tool 调用被静默拒绝，无 `tool_dispatch` | ❌ 无 |
| [#6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399) | provider | 自定义远程 provider 发送本地文件路径而非 data URL，多模态请求崩溃 | ❌ 无 |
| [#6377](https://github.com/zeroclaw-labs/zeroclaw/issues/6377) | provider | Llama.cpp 默认 endpoint 应为 "responses" 而非 "chat.completions"，tool 调用 500 | ❌ 无 |
| [#6410](https://github.com/zeroclaw-labs/zeroclaw/issues/6410) | tool:google-workspace | Windows 上 `gws.cmd` 解析失败，JSON 参数通过 shell fallback 被篡改 | ❌ 无 |
| [#6500](https://github.com/zeroclaw-labs/zeroclaw/issues/6500) | docs/security | 文档引用不存在的 Docker image `zeroclawlabs/tool-runner`，**S0 安全风险** | ❌ 无 |
| [#6400](https://github.com/zeroclaw-labs/zeroclaw/issues/6400) | runtime/daemon | Docker bind mount 覆盖预构建 web dashboard，容器内 UI 404 | ❌ 无 |
| [#6402](https://github.com/zeroclaw-labs/zeroclaw/issues/6402) | core:cli | Bash completion 无限递归，SSH session 崩溃 | 🔄 [#6519](https://github.com/zeroclaw-labs/zeroclaw/pull/6519) 相关？ |
| [#6520](https://github.com/zeroclaw-labs/zeroclaw/issues/6520) | provider | Gemini CLI provider 因 `--print` vs `--prompt` 参数语法过时崩溃 | 🔄 [#6519](https://github.com/zeroclaw-labs/zeroclaw/pull/6519) |

### S2 - 行为降级

| Issue | 领域 | 描述 | Fix PR |
|:---|:---|:---|:---|
| [#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360) | channel:telegram | Prompt Caching Telegram 渠道失效 | ❌ 无 |
| [#6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472) | memory:postgres | Gateway PostgreSQL 适配 Tokio runtime 嵌套 panic | ❌ 无 |
| [#6373](https://github.com/zeroclaw-labs/zeroclaw/issues/6373) | tool:web_search | 全新安装 web_search 无结果，web_fetch 正常，DuckDuckGo API 可 curl | ❌ 无 |
| [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) | runtime/daemon | 长对话上下文溢出导致幻觉/主题漂移 | ❌ 无 |

### 稳定性评估

- **10 个 S1 阻断级 bug 零修复**，其中 3 个为安全/权限相关，2 个为 provider 兼容性，2 个为渠道核心功能。
- **CI/CD 基础设施脆弱**：#6502 揭示 release 流程依赖 `gen-api` 生成步骤但执行顺序错误，且缺乏本地验证手段。
- **文档-实现脱节**：#6500（不存在的 Docker image）、#6393（中文安装文档错误）显示文档维护严重滞后。

---

## 6. 功能请求与路线图信号

### 高优先级 Feature（P1/P2，已 accepted 或明确需求）

| Issue/PR | 类型 | 内容 | 纳入下一版本信号 |
|:---|:---|:---|:---|
| [#6465](https://github.com/zeroclaw-labs/zeroclaw/issues/6465) | enhancement, P1 | 桌面端 binary 内嵌 chat-ui 静态资源，无网关离线启动 | ⭐⭐⭐ **强信号**：#6506/#6507 正在实现基础设施 |
| [#6371](https://github.com/zeroclaw-labs/zeroclaw/issues/6371) | enhancement, P1 | WhatsApp Web 按 JID 群组白名单 `allowed_groups` | ⭐⭐⭐ 与 #6246 bug 修复天然配对 |
| [#6499](https://github.com/zeroclaw-labs/zeroclaw/issues/6499) | enhancement, P2 | 桌面端 macOS UI 控制 capability（截图、点击、按键、AX、AppleScript） | ⭐⭐⭐ **#6507 已实现核心 handler** |
| [#6485](https://github.com/zeroclaw-labs/zeroclaw/issues/6485) | enhancement, P3 | 按需懒加载权限提示（Contacts、Calendar、Photos 等） | ⭐⭐⭐ **#6506 onboarding wizard 已覆盖** |
| [#6375](https://github.com/zeroclaw-labs/zeroclaw/issues/6375) | enhancement, P2 | V3 环境变量覆盖机制（凭证 + runtime knobs） | ⭐⭐ 配置系统重构需求，有历史包袱 |
| [#6510](https://github.com/zeroclaw-labs/zeroclaw/issues/6510) | enhancement, P2 | cron `delivery.mode="announce"` 仅发送最终消息 | ⭐⭐ 明确需求，改动面可控 |
| [#6416](https://github.com/zeroclaw-labs/zeroclaw/issues/6416) | enhancement, P2 | `zeroclaw onboard` 配置验证 + provider 兼容性预警 | ⭐⭐ 与 #6377 等 provider bug 形成闭环 |
| [#6518](https://github.com/zeroclaw-labs/zeroclaw/issues/6518) | enhancement | 一等公民支持自定义/OpenAI-Compatible Provider（如 Kimi K2.5） | ⭐⭐ 社区呼声高，PR #6513 已添加 Atomic Chat |
| [#6339](https://github.com/zeroclaw-labs/zeroclaw/issues/6339) | enhancement, P2 | macOS universal binary (arm64 + x86_64) | ⭐⭐ CI 构建复杂度，非阻塞 |
| [#6329](https://github.com/zeroclaw-labs/zeroclaw/issues/6329) | enhancement, P2 | 菜单栏托盘菜单项（quit、restart、dashboard、token、logs） | ⭐⭐ 体验打磨，#6506 基础之上 |
| [#6327](https://github.com/zeroclaw-labs/zeroclaw/issues/6327) | enhancement, P2 | 桌面端 channels overview（同步 #5244） | ⭐⭐ 依赖 web 端先落地 |

### 路线图推断

**2026 Q2 核心主题 = 桌面端成熟化 + WhatsApp 渠道修复**

- theonlyhennygod 的 7 个 issue + 2 个 stacked PR 构成**桌面端 Tauri 体验的完整闭环**：onboarding → permissions → capabilities → tray → universal binary → crash reporting → accessibility
- WhatsApp 渠道因外部协议变化进入**紧急维护模式**，#6246 bug 与 #6371 feature 应捆绑处理
- Provider 生态扩张（Atomic Chat PR #6513、Kimi K2.5 issue #6518、Gemini CLI fix #6519）显示**多模型支持是增长驱动力**

---

## 7. 用户反馈摘要

### 🔴 核心痛点

| 痛点 | 来源 Issue | 典型用户原声/场景 |
|:---|:---|:---|
| **WhatsApp 完全不可用** | #6246 | "pair succeeds but messages don't flow" — 企业用户依赖 WhatsApp 渠道做客服自动化，协议升级后业务停摆 |
| **安全策略"假放行"** | #6434 | `level="full"` 配置下 shell 仍被静默拒绝，无日志无提示，调试成本极高 |
| **跨平台工具一致性差** | #6410 | Windows 上 `gws.cmd` 不被识别，JSON 参数被 shell 篡改，"works on my machine" 问题 |
| **Docker 体验破碎** | #6400, #6500 | bind mount 覆盖 dashboard、文档引用不存在 image，容器化部署信任崩塌 |
| **Provider 配置陷阱多** | #6377, #6399, #6373 | Llama.cpp 默认 endpoint 错误、自定义 provider 图片路径处理错误、web_search 新鲜安装即失效 — **"out of the box" 体验差** |
| **上下文管理失控** | #6517 | 长对话后幻觉/漂移，用户被迫手动重启会话 |

### 🟡 体验摩擦

| 反馈 | 来源 |
|:---|:---|
| Telegram 与 CLI 行为不一致（caching） | #6360 |
| 中文文档安装步骤错误 | #6393 |
| Bash completion 导致 SSH session 崩溃 | #6402 |
| ACP 会话 `cwd` 变更后 skill 文件访问断裂 | #6516 |

### 🟢 积极信号

- **桌面端愿景受期待**：用户 actively 追踪 theonlyhennygod 的 desktop feature 系列，对 macOS 原生控制（#6499）和离线启动（#6465）有明确需求
- **社区贡献活跃**：单日 50 PR 表明项目吸引力，但需维护者响应匹配

---

## 8. 待处理积压

### 长期未合流的高价值 PR（>30 天，风险未解除）

| PR | 创建 | 最后更新 | 状态 | 风险 |
|:---|:---|:---|:---|:---|
| [#5265](https://github.com/zeroclaw-labs/zeroclaw/pull/5265) | 2026-04-03 | 2026-05-07 | OPEN, XL, **needs-author-action** | 桌面端菜单栏 chat agent 核心 PR，**已积压 35 天**，可能已被 #6506/#6507 部分取代或需 rebase |
| [#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779) | 2026-04-15 | 2026-05-07 | OPEN, M, **needs-author-action, needs-maintainer-review** | shell TOTP 分级安全（#3767），**安全关键，积压 23 天** |
| [#4944](https://github.com/zeroclaw-labs/zeroclaw/pull/4944) | 2026-03-28 | 2026-05-08 | OPEN, S, **needs-author-action** | 6 工具 wrapper 迁移，**架构债务，积压 41 天** |
| [#5322](https://github.com/zeroclaw-labs/zeroclaw/pull/5322) | 2026-04-05 | 2026-05-07 | OPEN, S | Qwen 自定义模型输入修复，TUI onboarding，积压 33 天 |
| [#5300](https://github.com/zeroclaw-labs/zeroclaw/pull/5300) | 2026-04-05 | 2026-05-07 | OPEN, XS, **needs-author-action** | installer `set -u` 空特征守卫，**阻塞首次安装路径**，积压 33 天 |

### 需要维护者关注的 stale issue 模式

- **#6246 WhatsApp 协议问题**：

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*