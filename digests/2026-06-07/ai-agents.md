# OpenClaw 生态日报 2026-06-07

> Issues: 296 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-07 00:27 UTC

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

# OpenClaw 项目动态日报 | 2026-06-07

---

## 1. 今日速览

OpenClaw 今日维持**极高活跃度**：24小时内 Issues 更新 296 条（149 新开/活跃，147 关闭），PR 更新 500 条（408 待合并，92 已合并/关闭），社区讨论密度显著高于平均水平。项目处于 **2026.6.5-beta 迭代周期**，核心团队聚焦三大方向：**Codex/OAuth 路由稳定性修复**、**MCP 工具结果类型强制转换**、**QQBot 推理内容过滤**。值得注意的是，P1 级 Bug 占比偏高，特别是 OpenAI ChatGPT Responses 传输层和 Cron 调度器存在系统性问题，需关注修复进度。

---

## 2. 版本发布

### v2026.6.5-beta.2
- **发布日期**：2026-06-06
- **全量变更**：`openclaw 2026.6.5-beta.2`

#### 核心更新
| 特性 | 说明 | 关联 Issue |
|:---|:---|:---|
| **QQBot 推理内容过滤** | 在原生投递前剥离模型的 `<thinking>` 推理脚手架，防止原始推理内容泄漏到频道回复 | #89913, #90132 |
| **MCP 工具结果类型强制转换** | 对 `resource_link`、`resource`、`audio`、畸形图片及未来新类型进行结果强制转换，提升工具链兼容性 | — |

#### 迁移注意事项
- QQBot 用户无需配置变更，过滤逻辑为服务端自动处理
- MCP 工具开发者需确认返回类型是否符合新的强制转换规则，避免隐式行为变化

### v2026.6.5-beta.1
- 内容与 beta.2 的 Highlights 部分重叠，beta.2 为完整发布

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 作者 | 状态 | 贡献说明 |
|:---|:---|:---|:---|
| [#91034](https://github.com/openclaw/openclaw/pull/91034) | steipete | **已合并** | ACPX 进程状态从遗留文件迁移至 SQLite 插件键值存储，含 doctor 迁移逻辑 |
| [#91030](https://github.com/openclaw/openclaw/pull/91030) | steipete | **已合并** | Device Pair 通知状态迁移至 SQLite，减少文件系统依赖 |
| [#91024](https://github.com/openclaw/openclaw/pull/91024) | hansraj316 | **已合并** | 新增 `webwright` 技能包，支持微软 Webwright 浏览器自动化代理 |
| [#90964](https://github.com/openclaw/openclaw/issues/90964) 关联修复 | piecesofcake | **已关闭** | `read` 工具修复 WebChat 上传图片 `media://inbound` 路径 ENOENT 问题 |

### 整体推进评估
- **基础设施现代化**：steipete 连续完成 ACPX 和 Device Pair 的 SQLite 迁移，标志项目核心状态存储正系统性脱离 JSON 文件
- **生态扩展**：Webwright 技能加入，强化浏览器自动化能力矩阵
- **稳定性债务**：大量 P1 Issue 仍待修复，合并/关闭 PR 以基础设施和边缘功能为主，核心 Bug 修复进度滞后

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 👍 | 核心诉求 |
|:---|:---|:---:|:---:|:---|
| 1 | [#90083](https://github.com/openclaw/openclaw/issues/90083) OpenAI ChatGPT Responses 传输失败 `invalid_provider_content_type` | 14 | 3 | **GPT-5.4/5.5 模型兼容性断裂**，升级 2026.6.1 后推理完全失败，用户被迫回退 |
| 2 | [#67035](https://github.com/openclaw/openclaw/issues/67035) Windows 聊天 UI 回归：输入吞字、流式回复不可见 | 14 | 0 | 长期未根治的 Windows 前端渲染问题，今日关闭但历史创伤深 |
| 3 | [#88312](https://github.com/openclaw/openclaw/issues/88312) Codex 应用服务器 turn-completion 停滞回归 | 13 | 3 | **#84076 修复后再次回归**，Codex 多工具代理回合可靠性存疑 |
| 4 | [#88929](https://github.com/openclaw/openclaw/issues/88929) 飞书流式卡片：异常打字机效果、最终内容截断至末字符 | 11 | 2 | 企业用户（飞书）的展示层严重体验问题 |
| 5 | [#73424](https://github.com/openclaw/openclaw/issues/73424) 图片工具预处理管道 "Failed to optimize image" | 10 | 1 | VLM 图片分析链路稳定性 |

### 诉求分析
- **企业级可靠性焦虑**：#90083、#88312、#90991（Cron 污染全局状态）指向同一信号——OpenClaw 作为生产基础设施的**版本升级风险不可控**，用户需要更严格的 LTS 承诺或金丝雀机制
- **渠道差异化质量**：飞书、QQBot、Discord 等渠道修复呈点状分布，缺乏统一的渠道质量基线

---

## 5. Bug 与稳定性

### P1 级 Bug（按严重性和紧急度排列）

| Issue | 状态 | 问题 | 影响范围 | Fix PR |
|:---|:---|:---|:---|:---|
| [#90083](https://github.com/openclaw/openclaw/issues/90083) | **OPEN** | OpenAI ChatGPT Responses `invalid_provider_content_type` | GPT-5.4/5.5 推理完全中断 | ❌ 无 |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | **OPEN** | Codex turn-completion 停滞回归 | Codex 多工具代理失败 | ❌ 无 |
| [#90991](https://github.com/openclaw/openclaw/issues/90991) | **OPEN** | Cron 调度触发器污染全局运行时状态 | 系统级瞬态过载 | ❌ 无 |
| [#90925](https://github.com/openclaw/openclaw/issues/90925) | **OPEN** | 子代理 announce compaction 落入 API-key 路由 | Codex/OAuth 高上下文会话中断 | ❌ 无 |
| [#90093](https://github.com/openclaw/openclaw/issues/90093) | **OPEN** | OpenAI 原生 replay 发送加密推理内容 | 次回合 `invalid_encrypted_content` | ❌ 无 |
| [#49603](https://github.com/openclaw/openclaw/issues/49603) | **OPEN** | 孤儿锁文件在 PID 匹配时未清理 | 网关重启后死锁 | ❌ 无 |
| [#71491](https://github.com/openclaw/openclaw/issues/71491) | **OPEN** | Kimi K2.6 `reasoning_content` 400 回归 | 长会话 LCM 压缩后失败 | ❌ 无 |
| [#72031](https://github.com/openclaw/openclaw/issues/72031) | **OPEN** | Bedrock `image` 工具 AWS SDK 认证失败 | AWS IAM 角色场景不可用 | ❌ 无 |
| [#68065](https://github.com/openclaw/openclaw/issues/68065) | **OPEN** | `sessions_send` 误分类首次超时 | 消息状态误判 | ❌ 无 |
| [#90428](https://github.com/openclaw/openclaw/issues/90428) | **OPEN** | WSL2 Node 24 `exec` 工具触发 SIGTERM | 开发环境网关重启 | ❌ 无 |

### 回归问题专项
- **Codex 稳定性**：#88312 明确标注为 #84076 修复后的**第二次回归**，说明该组件的测试覆盖或架构隔离存在根本缺陷
- **OpenAI 传输层**：#90083、#90093 形成"升级即断裂"模式，2026.6.1 迁移脚本可能存在未覆盖的 Responses API 变更

---

## 6. 功能请求与路线图信号

### 高潜力功能请求（已有 PR 或强烈信号）

| Issue/PR | 类型 | 纳入概率 | 判断依据 |
|:---|:---|:---:|:---|
| [#90916](https://github.com/openclaw/openclaw/issues/90916) Topic-session families（主题会话族） | Feature | ⭐⭐⭐⭐⭐ | 解决多主题隔离的核心架构需求，与现有 memory 系统互补 |
| [#91026](https://github.com/openclaw/openclaw/pull/91026) macOS 实时中继模式 | PR (XL) | ⭐⭐⭐⭐⭐ | 大体积 PR，talk 实时化是明确产品方向 |
| [#90101](https://github.com/openclaw/openclaw/pull/90101) 运行时自上下文配置与工具 | PR (XL) | ⭐⭐⭐⭐⭐ | 明确关联 #89537 路线图，runtime/offload/scale 核心切片 |
| [#91031](https://github.com/openclaw/openclaw/pull/91031) OpenRouter OAuth 登录 | PR (L) | ⭐⭐⭐⭐☆ | 扩展认证生态，降低自托管门槛 |
| [#78441](https://github.com/openclaw/openclaw/pull/78441) 子代理 `toolsAllow` 转发 | PR (L) | ⭐⭐⭐⭐☆ | 安全边界精细化，多代理场景刚需 |
| [#58818](https://github.com/openclaw/openclaw/issues/58818) 保证最近 N 条原始消息存活 | Feature | ⭐⭐⭐⭐☆ | 高频用户痛点，与 compaction 机制深度绑定 |
| [#89265](https://github.com/openclaw/openclaw/issues/89265) 更多本地提供商 | Feature | ⭐⭐⭐☆☆ | 社区情绪强烈，但商业优先级存疑 |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) 自托管 STT/TTS | Feature | ⭐⭐⭐☆☆ | WebUI 技术债阻碍，需前端重构 |

### 架构信号
- **SQLite 中心化**：steipete 的连续迁移 PR 表明项目正从"文件系统即数据库"向**插件键值状态层**转型，预计 2026.7 将完成核心子系统迁移
- **Codex 原生路径固化**：#90994（PreToolUse relay 修复）选择"修复而非禁用"原生 Codex 表面，暗示团队与 OpenAI 生态深度绑定的战略决心

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issue 评论提炼）

| 场景 | 痛点 | 情绪强度 |
|:---|:---|:---:|
| **版本升级** | "2026.6.1 升级后 OpenAI 完全不可用，被迫回退" | 🔴 极高 |
| **Windows 前端** | "输入消失、回复空白、刷新才出现" | 🔴 极高 |
| **飞书企业部署** | "卡片只剩最后一个问号，用户以为机器人坏了" | 🟡 高 |
| **Cron 告警疲劳** | "热重载和重试期间每秒收到失败通知" | 🟡 高 |
| **本地模型用户** | "本地模型是二等公民，配置复杂且文档分散" | 🟡 高 |
| **WSL 开发** | "exec 工具直接重启网关，开发循环断裂" | 🟡 高 |

### 满意点
- QQBot 推理过滤："终于不用在群里看到模型的 `<thinking>` 标签了"（#89913 关联反馈）
- 多平台覆盖：飞书、Discord、Telegram、iMessage 的及时修复响应获认可

### 不满意点
- **稳定性承诺落差**：beta 版本频繁引入生产级断裂，用户质疑版本号语义
- **Issue 处理周期**：大量 `clawsweeper:no-new-fix-pr` 标签 Issue 长期悬置，社区贡献者难以介入

---

## 8. 待处理积压

### 需维护者紧急关注

| Issue/PR | 悬置时间 | 风险 | 行动建议 |
|:---|:---|:---|:---|
| [#49603](https://github.com/openclaw/openclaw/issues/49603) 孤儿锁文件 | ~2.5 个月 | 网关重启死锁，生产环境隐性炸弹 | 分配网关核心维护者，或标记 `good-first-issue` 引导社区 |
| [#59413](https://github.com/openclaw/openclaw/issues/59413) 模型回退逐候选重试 | ~2 个月 | 代理提供商生态兼容性 | 产品决策：是否支持池化提供商的一等公民模式 |
| [#58730](https://github.com/openclaw/openclaw/issues/58730) exec() 沙箱隔离 | ~2 个月 | **安全边界**，Claude Code 泄露后行业敏感度上升 | 安全评审队列，建议提升优先级 |
| [#68065](https://github.com/openclaw/openclaw/issues/68065) sessions_send 超时误分类 | ~1.5 个月 | 消息可靠性语义混乱 | 已有 `linked-pr-open`，需推进合并 |
| [#77158](https://github.com/openclaw/openclaw/pull/77158) QMD 导出性能 | ~1 个月 | 大规模会话用户的网关 CPU 瓶颈 | 作者等待状态，需维护者反馈或接手 |

### PR 队列健康度
- **408 个待合并 PR** 中，大量标记 `📣 needs proof` 或 `⏳ waiting on author`，说明**评审带宽是瓶颈**而非代码产出不足
- 建议：批量清理僵尸 PR，或引入分级评审机制（安全边界/兼容性/纯文档分流）

---

*日报基于 GitHub 公开数据生成，时间范围：2026-06-06 至 2026-06-07 UTC*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析
**报告日期：2026-06-07 | 分析范围：10 个活跃项目**

---

## 1. 生态全景

个人 AI 助手开源生态正经历**从"功能验证"向"生产就绪"的关键跃迁**：头部项目（OpenClaw、ZeroClaw、Hermes Agent）日均 PR 处理量突破 50，但审查带宽瓶颈普遍显现；MCP 协议成为事实标准，超 60% 项目已接入或规划中；企业级需求（SSO/OIDC、多租户隔离、审计合规）从边缘进入核心路线图。与此同时，**稳定性债务与功能扩张的张力**成为最大共性挑战——v0.16.0、v1.1.10 等版本均出现显著回归集群，社区对"可安全升级"的诉求空前强烈。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新/活跃/关闭) | PR (待合并/已合并) | 今日 Release | 健康度评估 | 关键信号 |
|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 296 (149/147) | 500 (408/92) | v2026.6.5-beta.2 | 🟡 **高压运转** | P1 Bug 占比偏高，408 待合并 PR 创纪录，评审带宽严重瓶颈 |
| **NanoBot** | 7 (4/3) | 24 (14/10) | 无 | 🟢 **稳健迭代** | franciscomaestre 单日 6 PR，企业级功能（per-user memory、MCP ACL）密集落地 |
| **Hermes Agent** | 50 (48/2) | 50 (46/4) | v0.16.0 (6/5) | 🔴 **发布阵痛** | v0.16.0 后 Issue 关闭率仅 4%，46 PR 拥堵，安全漏洞 (#40863) 超 24h 无响应 |
| **PicoClaw** | 12 (10/2) | 18 (3/15) | nightly | 🟢 **质量巩固** | chengzhichao-xydt 6 个防御性修复，goroutine 泄漏等系统性隐患被主动清除 |
| **NanoClaw** | 2 (1/1) | 14 (11/3) | 无 | 🟡 **审查瓶颈** | 技能系统架构治理里程碑，但 5 个 PR 超 20 天未响应，cfis 等核心贡献者等待 |
| **NullClaw** | 0 | 0 | 无 | ⚪ **休眠** | 过去 24h 无活动 |
| **IronClaw** | 数据未完整披露 | 33 (22/11) | 无 | 🟡 **架构重构期** | Reborn 架构 35-40% 完成度，E2E 失败 11 天无响应，breaking changes 滞留 22 天 |
| **LobsterAI** | 6 (6/0) | 2 (0/0, 均 stale 关闭) | 无 | 🔴 **维护危机** | 实质进展为 0，63 天积压 Issue 无响应，PR 因无 review 废弃 |
| **TinyClaw** | 0 | 0 | 无 | ⚪ **休眠** | 过去 24h 无活动 |
| **Moltis** | 3 (3/0) | 0 | 无 | 🟡 **响应滞后** | 新 Issue 超 24h 无维护者标记，Docker 认证失效涉安全风险 |
| **CoPaw** | 11 (9/2) | 0 | 无 | 🔴 **修复停滞** | v1.1.10 regression 集群（本地模型不可用、Coding Mode 失效），PR 吞吐为 0 |
| **ZeptoClaw** | 2 (1/1) | 1 (1/0) | 无 | 🟢 **聚焦攻坚** | 单点聚焦二进制体积控制（7MB 机器人部署门槛），维护者驱动，外部参与低 |
| **ZeroClaw** | 37 (活跃/关闭未细分) | 50 (45/5) | 无 | 🟢 **生态扩张** | WASM 插件爆发（8 新插件 + 3 基础设施），安全修复响应快，45 PR 待审成隐忧 |

> **注**：NanoClaw 与 CoPaw 数据来自项目名混用上下文（QwenPaw/CoPaw），已按实际仓库归并。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **规模绝对领先** | 日 296 Issues / 500 PR，超第 2-5 名总和 | ZeroClaw 50 PR、Hermes 50 PR 为其 1/10，社区体量呈 **1-2 个数量级优势** |
| **企业级功能完备度** | 飞书/QQBot/Discord/Telegram/iMessage 全渠道覆盖，Cron 调度、OAuth、MCP 工具链成熟 | NanoBot 追赶中（WhatsApp/微信桥接加固），Hermes 桌面端领先但平台适配碎片化 |
| **稳定性债务突出** | 10 个 P1 Bug 无 Fix PR，"升级即断裂"模式（#90083 GPT-5.4/5.5 兼容性断裂） | PicoClaw 主动防御性修复、NanoBot 企业级隔离设计形成反差 |
| **技术路线：深度绑定 OpenAI 生态** | Codex 原生路径、Responses API 优先适配、ChatGPT 传输层硬编码 | ZeroClaw 走 WASM 插件中立路线，IronClaw 押注 Reborn 自研架构，Hermes 追求多提供者平等 |
| **社区治理模式** | 核心团队主导 + 高外部贡献，但 `clawsweeper:no-new-fix-pr` 标签导致社区贡献者难以介入 | ZeroClaw 插件生态去中心化、NanoClaw 技能市场治理模型更具开放性 |

**核心判断**：OpenClaw 是生态**"最大公约数"**——功能最全、用户最广、Issue 最多，但正遭遇**"成功者的诅咒"**：庞大代码库导致回归测试不可行，版本升级风险不可控，社区从"功能诉求"转向"稳定性承诺诉求"。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---:|
| **MCP 协议深度集成** | OpenClaw、NanoBot、NanoClaw、ZeroClaw、IronClaw | 工具结果类型强制转换（OpenClaw #89913）、MCP 服务器级 ACL（NanoBot #2533）、HTTP/SSE 传输扩展（NanoClaw #2208）、WASM 插件沙箱（ZeroClaw #7335-#7337）、MCP 仪表板（ZeroClaw #7320） | 🔴 **极高** |
| **多租户/用户隔离** | NanoBot、IronClaw、ZeroClaw | per-user memory（NanoBot #2968）、TenantId 反序列化（IronClaw #4523）、按技能权限（ZeroClaw #5775） | 🟡 **高** |
| **企业身份联邦 (OIDC/OAuth)** | OpenClaw、NanoBot、ZeroClaw、IronClaw | OpenRouter OAuth（OpenClaw #91031）、GitHub Enterprise Copilot（NanoBot #4220）、OIDC 提供商（ZeroClaw #7141，v0.9.0）、订阅原生 OAuth 4 家（ZeroClaw #5601） | 🟡 **高** |
| **上下文压缩与记忆优化** | OpenClaw、NanoBot、Hermes Agent | compaction 机制可靠性（OpenClaw #73424）、prompt caching 失效（NanoBot #4222，无 PR）、mem0-temporal-hygiene（Hermes #37661）、Dreaming 记忆整合（Hermes #25309） | 🟡 **高** |
| **确定性/可控性工作流** | Hermes Agent、OpenClaw、ZeroClaw | Lobster-style 确定性引擎（Hermes #5354，8👍）、Cron/SOP 前置钩子（ZeroClaw #5607）、技能级工具临时提升（ZeroClaw #6915） | 🟢 **中** |
| **边缘/嵌入式部署** | ZeptoClaw、PicoClaw | 7MB 二进制门槛（ZeptoClaw #629）、ARM64 预构建（PicoClaw #2625）、Raspberry Pi 支持 | 🟢 **中** |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 全渠道企业集成 + 复杂工作流编排 | 中大型企业、多平台部署运维 | 插件化通道适配器，SQLite 中心化状态迁移中，与 OpenAI 生态深度耦合 |
| **NanoBot** | 多用户共享部署 + 桥接健壮性 | SMB、家庭/团队共享实例 | 内存隔离架构、WhatsApp/微信桥接成熟，per-user 数据分离原生设计 |
| **Hermes Agent** | 桌面端体验 + TUI 会话管理 | 个人开发者、终端用户 | Electron + TUI 双前端，Hindsight 记忆系统，v0.16.0 "Surface" 重桌面 |
| **PicoClaw** | 轻量嵌入式 + 多通道覆盖 | IoT/边缘设备、硬件开发者 | Go 语言原生，6-7MB 二进制目标，goroutine 并发模型，Sipeed 硬件生态绑定 |
| **NanoClaw** | 技能市场治理 + 容器化自托管 | 技术爱好者、技能开发者 | 技能一致性标准（REMOVE.md/idempotent）、Podman/Docker 原生，Socket Mode 优先 |
| **IronClaw** | Reborn 架构重构 + 企业审计合规 | 金融/合规敏感企业 | Rust 全栈，ProductWorkflow 替代直接 LLM 调用，审批门控链，Phase A/B/C 合规框架 |
| **ZeroClaw** | WASM 插件生态 + 安全沙箱 | 隐私敏感用户、自托管极客 | WASM 组件模型，远程插件注册表，按请求分派 Webhook，SSRF/资源限制硬化 |
| **LobsterAI** | 长时任务监控 + 自动化脚本 | 开发者工具化使用 | 任务调度层为核心，但当前维护停滞 |
| **CoPaw/QwenPaw** | 千问模型深度优化 + Coding Mode | 中文开发者、阿里云用户 | 千问3.6 原生适配，Windows 路径处理，企业微信集成 |
| **ZeptoClaw** | 机器人嵌入式部署 | 机器人/无人机开发者 | 极致二进制体积控制，aarch64/x86_64 差异化门限 |

---

## 6. 社区热度与成熟度分层

```
┌─────────────────────────────────────────────────────────┐
│  🔥 快速迭代期（功能扩张）                                │
│  OpenClaw、ZeroClaw、Hermes Agent(v0.16.0后)、IronClaw   │
│  特征：PR>30/日，里程碑密集，但稳定性债务累积，review瓶颈   │
├─────────────────────────────────────────────────────────┤
│  🛡️ 质量巩固期（工程还债）                                │
│  PicoClaw、NanoBot、ZeptoClaw                            │
│  特征：防御性修复主导，架构治理（SQLite迁移、per-user隔离、  │
│        体积控制），PR合并率高，用户可见功能增量少           │
├─────────────────────────────────────────────────────────┤
│  ⏳ 审查瓶颈期（贡献活跃但响应滞后）                        │
│  NanoClaw、Moltis                                        │
│  特征：Issue/PR 创建正常，但维护者响应>24h，核心贡献者等待   │
├─────────────────────────────────────────────────────────┤
│  🚨 维护危机期（实质停滞）                                 │
│  LobsterAI、CoPaw、NullClaw、TinyClaw                    │
│  特征：PR吞吐≈0，Issue无响应，或完全休眠，社区信任流失       │
└─────────────────────────────────────────────────────────┘
```

---

## 7. 值得关注的趋势信号

| 趋势 | 证据链 | 对开发者的价值 |
|:---|:---|:---|
| **"可安全升级"成为核心购买决策** | OpenClaw #90083 "被迫回退"、CoPaw v1.1.10 "不敢升级"、Hermes v0.16.0 发布说明截断 | 设计**金丝雀发布 + 自动回滚**机制，版本号语义需与稳定性承诺严格对齐 |
| **MCP 从"支持"转向"安全治理"** | ZeroClaw WASM 沙箱硬化、NanoBot MCP allowFrom、IronClaw 工具参数审计框架 | MCP 工具链的**权限最小化、执行隔离、操作审计**将成为合规刚需 |
| **"机器人部署"开辟新战场** | ZeptoClaw 7MB 门槛、PicoClaw ARM64 边缘场景、MCP 硬件代理想象 | 资源受限环境的**模型压缩 + 运行时裁剪**技术（如 llama.cpp 模式）值得投入 |
| **记忆系统从"存储"到"生命周期治理"** | Hermes Dreaming (#25309)、OpenClaw compaction 回归、NanoBot prompt caching 失效 | 长期会话的**压缩时机、缓存失效、跨会话去重**需要系统性理论框架 |
| **企业身份联邦倒逼架构重构** | ZeroClaw OIDC (v0.9.0)、IronClaw TenantId 反序列化、OpenClaw OAuth 路由 | 多租户设计需从**数据层隔离**前置到**请求路由层**，避免后期补丁 |
| **插件生态的"安卓时刻"风险** | ZeroClaw 8 插件/日爆发但 review 单点瓶颈、NanoClaw 技能市场治理 | 需建立**自动化测试 + 代码签名 + 分级审核**的插件治理基础设施 |

---

*本报告基于 2026-06-07 各项目 GitHub 公开数据生成，健康度评估综合了 PR/Issue 比率、响应时效、回归密度、安全漏洞暴露窗口等维度。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-06-07

## 1. 今日速览

NanoBot 今日维持**高活跃度开发节奏**，24 小时内 24 个 PR 更新（14 待合并/10 已合并关闭）、7 个 Issues 更新（4 活跃/3 关闭），无新版本发布。核心聚焦**稳定性修复**（reasoning_content 处理、orphan tool 清理、微信/ WhatsApp 桥接健壮性）与**企业级功能扩展**（GitHub Enterprise Copilot、WebUI Cron 管理、AssemblyAI 转录）。社区贡献者 franciscomaestre 单日密集提交 6 个 PR，成为今日最活跃贡献者。

---

## 2. 版本发布

**无新版本发布**

当前最新版本仍为 `v0.1.4.post6`（Issues #2573 中用户报告版本）。值得注意的是，今日多个修复 PR 针对该版本的已知问题（如 GitHub Copilot 登录失败 #2573、image generation 兼容性问题 #4167），建议维护者考虑发布 patch 版本整合近期稳定性修复。

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#4228](https://github.com/HKUDS/nanobot/pull/4228) | Yuxin-Lou | **修复 custom provider 空 reasoning_content 被丢弃为 None 的问题**，保留空字符串以兼容 DeepSeek 等 thinking mode API | #4105 |
| [#4209](https://github.com/HKUDS/nanobot/pull/4209) | 04cb | **允许通过 `extraBody: {"response_format": null}` 显式移除 OpenAI image 默认参数**，解决兼容 Agnes AI 等 OpenAI-compatible API | #4167 |
| [#2968](https://github.com/HKUDS/nanobot/pull/2968) | franciscomaestre | **多用户内存隔离**：新增 `agents.defaults.per_user_memory` 配置，解决共享部署中 MEMORY.md/history.jsonl 数据混杂问题 | - |
| [#2555](https://github.com/HKUDS/nanobot/pull/2555) | franciscomaestre | **WhatsApp 桥接防重复消息**：新连接时关闭旧 WebSocket client，避免广播重复投递 | - |
| [#2533](https://github.com/HKUDS/nanobot/pull/2533) | franciscomaestre | **MCP 服务器级访问控制**：新增 `allowFrom` 列表，限制敏感工具仅特定用户可调用 | - |
| [#2529](https://github.com/HKUDS/nanobot/pull/2529) | franciscomaestre | **WhatsApp 语音消息下载转录**：检测 `audioMessage` 类型并下载为 `.ogg`，解决 `[Voice Message]` 无内容问题 | - |
| [#2528](https://github.com/HKUDS/nanobot/pull/2528) | franciscomaestre | **WhatsApp 启动时间戳保护**：丢弃重启前的历史消息，避免旧对话重放 | - |
| [#4195](https://github.com/HKUDS/nanobot/pull/4195) | Re-bin | **桌面端 Shell 与共享 WebUI 打磨**：为首次开源桌面端做准备，统一聊天/设置界面体验 | - |

**整体进展评估**：今日合并内容覆盖**核心数据一致性**（reasoning_content 保留、内存隔离）、**生产部署健壮性**（WhatsApp 桥接系列修复）、**安全管控**（MCP allowFrom、Exec 符号链接逃逸防护 #4221），项目在企业级部署就绪度上显著迈进。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 👍 | 热度分析 |
|:---|:---|:---|:---|
| [#2573](https://github.com/HKUDS/nanobot/issues/2573) GitHub Copilot 登录失败 | 3 | 9 | **最高关注度**：OAuth device flow 报错 `Authorization header is badly formatted`，用户定位根因为"openai 替代 litellm 后的新 bug"。已关闭但无关联修复 PR，需验证是否由其他变更间接解决 |
| [#4167](https://github.com/HKUDS/nanobot/issues/4167) Image generation `response_format` 不兼容 | 2 | 0 | 生产阻塞问题，OpenAI-compatible API 生态兼容性诉求强烈，已由 #4209 修复关闭 |
| [#4105](https://github.com/HKUDS/nanobot/issues/4105) Custom provider 丢弃空 reasoning_content | 1 | 0 | DeepSeek/Kimi 用户核心痛点，已有 **2 个竞争 PR**（#4228 已合并，#4227 待合并） |

### 背后诉求分析
- **#2573 高 👍 数** 反映 GitHub Copilot 集成是用户高频使用路径，任何认证层变更都影响广泛
- **reasoning_content 双 PR 竞争** 说明 custom provider + thinking model（DeepSeek/Kimi）已成为主流使用场景，社区对"空值语义保留"有强共识

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | Fix 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#4222](https://github.com/HKUDS/nanobot/issues/4222) | `max_messages` truncation 与 microcompact 导致 **prefix/prompt caching 持续失效**，每次对话边界漂移，显著增加 token 成本与延迟 | ❌ 无 PR |
| 🟡 **中高** | [#4105](https://github.com/HKUDS/nanobot/issues/4105) / [#4228](https://github.com/HKUDS/nanobot/pull/4228) / [#4227](https://github.com/HKUDS/nanobot/pull/4227) | Custom provider 空 `reasoning_content` 被转为 `None`，thinking mode API 历史记录断裂 | ✅ **已修复**（#4228 合并） |
| 🟡 **中** | [#4211](https://github.com/HKUDS/nanobot/issues/4211) | SDK 嵌入时 stdio MCP 未关闭 → 解释器关闭时 `RuntimeError: cancel scope 跨 task` | ✅ **已关闭**（无关联 PR，可能标记为 resolved） |
| 🟡 **中** | [#4229](https://github.com/HKUDS/nanobot/pull/4229) | Orphan tool result 导致 `find_legal_message_start` 返回 `len(messages)`，历史切片为空列表 | 🔄 **待合并** |
| 🟡 **中** | [#4223](https://github.com/HKUDS/nanobot/pull/4223) | 微信 session 过期后 60 分钟暂停，**醒来未 reload state**，过期 token 死循环 | 🔄 **待合并** |
| 🟢 **低** | [#4167](https://github.com/HKUDS/nanobot/issues/4167) | OpenAI-compatible image API `response_format` 不支持 | ✅ **已修复**（#4209） |

**关键风险**：[#4222](https://github.com/HKUDS/nanobot/issues/4222) 无修复 PR，prompt caching 失效直接影响运营成本，建议优先响应。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 成熟度评估 | 纳入可能性 |
|:---|:---|:---|:---|
| **GitHub Enterprise / Copilot Business 支持** | [#4220](https://github.com/HKUDS/nanobot/issues/4220) | 需求清晰，企业级场景明确 | ⭐⭐⭐⭐⭐ **高** — 与 #2573 Copilot 登录问题联动，企业用户 blocker |
| **WebUI Cron Job 管理** | [#4218](https://github.com/HKUDS/nanobot/issues/4218) | CLI 已成熟，WebUI 缺失是体验断层 | ⭐⭐⭐⭐⭐ **高** — 已有完整 CLI 实现，前端对接成本低 |
| **Cron silent mode + lock_recipient** | [#4225](https://github.com/HKUDS/nanobot/pull/4225) | PR 已提交，解决后台监控任务噪音问题 | ⭐⭐⭐⭐⭐ **高** — 与 #4218 协同，完善 cron 生态 |
| **AssemblyAI 转录** | [#4224](https://github.com/HKUDS/nanobot/pull/4224) | PR 已提交，多提供商策略明确 | ⭐⭐⭐⭐☆ **中高** — 与现有 OpenAI/Groq 转录形成互补 |
| **Chat sender identity 上下文** | [#4033](https://github.com/HKUDS/nanobot/pull/4033) | 多用户 Discord 场景，PR 待合并较久 | ⭐⭐⭐⭐☆ **中高** — 与 #2968 per-user memory 形成多用户完整方案 |
| **SSRF 防护增强（MCP HTTP）** | [#4123](https://github.com/HKUDS/nanobot/pull/4123) | 安全加固，PR 待审查 | ⭐⭐⭐⭐☆ **中高** |

**路线图信号**：franciscomaestre 的密集贡献（WhatsApp 桥接、内存隔离、MCP 访问控制、cron 增强）显示项目正从"个人助手工具"向**多租户、企业级、多通道部署平台**演进。

---

## 7. 用户反馈摘要

### 痛点
| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| GitHub Copilot 企业用户 | [#4220](https://github.com/HKUDS/nanobot/issues/4220) | "nanobot currently **only supports individual flows**" — 企业自托管 GHE 完全无法使用 |
| 生产监控 cron 用户 | [#4225](https://github.com/HKUDS/nanobot/pull/4225) | "every cron job **automatically delivers response**... problematic for background monitoring" — 噪音污染 |
| WebUI 管理员 | [#4218](https://github.com/HKUDS/nanobot/issues/4218) | "must use CLI or **manually edit config.json**, which is error-prone" — 缺少实时反馈的 GUI |
| DeepSeek/Kimi 用户 | [#4105](https://github.com/HKUDS/nanobot/issues/4105) | reasoning_content 空值被吞，thinking mode 历史断裂 |
| 微信长期运行用户 | [#4223](https://github.com/HKUDS/nanobot/pull/4223) | session 过期后**永久静默**，必须重新扫码 — 运维噩梦 |

### 满意点
- **WhatsApp 桥接系列修复**（#2555, #2529, #2528, #4226）显示生产用户认可 franciscomaestre 的"真实世界问题"导向贡献
- **per-user memory 隔离**（#2968）解决多用户部署核心痛点，社区长期诉求终得回应

---

## 8. 待处理积压

| 项目 | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|
| [#4094](https://github.com/HKUDS/nanobot/pull/4094) Channel dispatch durability | 2026-05-29 | 2026-06-06 | **8 天待合并**，修复 WebSocket 消息持久化、stream identity 等 4 个关联 issue（#4062-#4065），影响消息可靠性核心路径 |
| [#4033](https://github.com/HKUDS/nanobot/pull/4033) Chat sender identity | 2026-05-28 | 2026-06-06 | **9 天待合并**，与已合并的 #2968 per-user memory 形成完整多用户方案，单独存在功能不完整 |
| [#4123](https://github.com/HKUDS/nanobot/pull/4123) MCP SSRF 防护 | 2026-05-31 | 2026-06-06 | **6 天待合并**，安全类 PR 延迟合并增加暴露窗口 |
| [#4222](https://github.com/HKUDS/nanobot/issues/4222) Prompt caching 失效 | 2026-06-06 | 2026-06-06 | **今日新报，无 PR**，直接影响运营成本，需维护者快速响应设计修复方案 |

---

*日报基于 GitHub 公开数据生成，PR 评论数显示为 `undefined` 系原始数据字段缺失，已按提交活跃度排序。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-06-07

---

## 1. 今日速览

Hermes Agent 社区在 2026-06-07 保持极高活跃度：过去 24 小时 Issues 更新 **50 条**（新开/活跃 48，关闭仅 2），PR 更新 **50 条**（待合并 46，已合并/关闭 4）。项目刚刚发布 **v0.16.0 "The Surface Release"**，带来 874 个 commit 和 542 个已合并 PR 的大规模更新。当前社区重心明显偏向**桌面端稳定性修复**、**网关/平台适配加固**以及**v0.16.0 发布后的快速迭代补丁**，但关闭率偏低（Issue 关闭率 4%，PR 合并/关闭率 8%）显示审核队列正在快速堆积，需要维护者关注。

---

## 2. 版本发布

### [v2026.6.5 — Hermes Agent v0.16.0 "The Surface Release"](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.6.5)

| 指标 | 数据 |
|:---|:---|
| 发布日期 | 2026-06-05 |
| 距离上一版本 | 874 commits · 542 merged PRs |
| 代码变更 | 1,962 files changed · +205,216 / -46,217 lines |
| Issue 关闭 | 399（含 P0×2、P1×62、security-tagged×16） |
| 社区贡献者 | 170 人 |

**关键说明：** 发布说明在提供的数据中截断于 `> **The Surface`，仅能看到代号。基于变更规模判断，这是一个**重大版本更新**，涉及近 20 万行新增代码。建议用户：

- **升级前备份** `~/.hermes/config.yaml` 和记忆数据库
- **桌面用户**留意安装脚本兼容性（今日新增 #40815、#40820 均与桌面安装相关）
- **网关运维者**关注 launchd/systemd 行为变化（今日多个 PR 针对 macOS launchd 修复）
- **插件开发者**验证辅助模型槽位注册方式（#40880 显示前端存在硬编码回归）

> 注：完整 release notes 未在数据中提供，建议维护者尽快补全破坏性变更清单。

---

## 3. 项目进展

### 今日已合并/关闭的 PR（4 条）

| PR | 作者 | 状态 | 进展说明 |
|:---|:---|:---|:---|
| [#38255](https://github.com/NousResearch/hermes-agent/pull/38255) | OutThisLife | **已合并** | 明确桌面构建需要 Node ≥20.19/22.12，解决旧版 Node 导致的模糊构建失败 |
| [#35544](https://github.com/NousResearch/hermes-agent/pull/35544) | BROCCOLO1D | **已合并** | TUI 历史会话选择器现在能正确显示包含实际转录的子会话，修复空父会话隐藏可恢复会话的问题 |
| [#40870](https://github.com/NousResearch/hermes-agent/pull/40870) | ackalanka | **已关闭** | 为 Hindsight 记忆提供者增加 owned-log 镜像，强化 Tier-0 写入的审计轨迹（未合并原因待确认） |
| — | — | — | 第 4 条"已合并/关闭"未在详细数据中展示 |

**整体推进评估：** 今日合并节奏**明显偏慢**（50 个活跃 PR 仅 3-4 个落地）。进展集中在**桌面构建体验**和**TUI 会话管理**两个垂直领域，v0.16.0 发布后的"灭火"特征显著——大量修复类 PR 正在排队等待审核。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求 |
|:---|:---|:---:|:---:|:---|
| 1 | [#5354 Deterministic Workflow Engine (Lobster-style)](https://github.com/NousResearch/hermes-agent/issues/5354) | 8 | 8 | **高票长期需求**：用户希望为关键/重复任务提供确定性工作流引擎，降低 LLM 重复规划的 token 成本和延迟 |
| 2 | [#531 User Workspace & Knowledge Base](https://github.com/NousResearch/hermes-agent/issues/531) | 4 | 2 | **基础设施级需求**：要求替代 24 小时过期的临时缓存，建立持久化文档存储、搜索与 RAG 集成 |
| 3 | [#38412 Desktop Remote gateway WebSocket 4403](https://github.com/NousResearch/hermes-agent/issues/38412) | 3 | 0 | v0.16.0 桌面远程网关模式的关键连接阻断问题 |
| 4 | [#37661 mem0-temporal-hygiene 插件](https://github.com/NousResearch/hermes-agent/issues/37661) | 3 | 0 | 社区贡献者提交 Mem0 OSS 时间感知与去重插件，希望官方集成或认可 |
| 5 | [#27683 web_tools.py 插件发现缺失](https://github.com/NousResearch/hermes-agent/issues/27683) | 3 | 0 | 新安装场景下网页工具静默失效，影响首次体验 |
| 6 | [#25309 Dreaming — 自动后台记忆整合](https://github.com/NousResearch/hermes-agent/issues/25309) | 3 | 0 | 受 OpenClaw 启发的生物睡眠周期式记忆压缩功能请求 |

**热点分析：**
- **#5354** 以 8 评论/8 👍 成为今日最热议题，反映社区对"Agent 可控性"的强烈需求——在自主推理与确定性执行之间寻求平衡
- **#531** 创建自 3 月仍持续活跃，说明知识库持久化是**平台级短板**，可能制约企业采用
- **#25309** 和 **#37661** 显示社区在**记忆系统**上的创新活跃，官方需考虑是否设立 `memory-wg` 专项

### 今日新增高关注度 PR

| PR | 说明 |
|:---|:---|
| [#40876 Cursor provider integration](https://github.com/NousResearch/hermes-agent/pull/40876) | 新增 Cursor 作为一等提供者，含完整认证、传输、模型发现和 CLI 支持——可能显著扩大用户基数 |
| [#40878 probe macOS launchd domain](https://github.com/NousResearch/hermes-agent/pull/40878) | 修复 macOS 上 `hermes gateway start/stop/status` 的 launchd 域探测 |
| [#40879 honcho user_peer_aliases fix](https://github.com/NousResearch/hermes-agent/pull/40879) | 修复 Honcho 每调用 peer 参数未走别名映射的问题 |

---

## 5. Bug 与稳定性

按严重程度排列，标注修复状态：

### 🔴 P1（严重）

| Issue | 描述 | 修复 PR |
|:---|:---|:---:|
| [#8090](https://github.com/NousResearch/hermes-agent/issues/8090) | `RedactingFormatter` 未定义导致网关启动崩溃（#7991 回归） | **待修复** |
| [#40695](https://github.com/NousResearch/hermes-agent/issues/40695) | Discord 网关心跳被同步 SQLite 轮询阻塞，可能导致掉线 | **待修复** |
| [#40806](https://github.com/NousResearch/hermes-agent/pull/40806) | 上下文压缩旋转会话时 flush cursor 未重置，可能导致数据丢失 | [PR #40806](https://github.com/NousResearch/hermes-agent/pull/40806) 待合并 |
| [#40863](https://github.com/NousResearch/hermes-agent/issues/40863) | **安全**：Telegram 移除用户仍可在鉴权前注入 prompt | **待修复** |

### 🟡 P2（中等）

| Issue | 描述 | 修复 PR |
|:---|:---|:---:|
| [#38412](https://github.com/NousResearch/hermes-agent/issues/38412) | Electron 打包客户端 Remote gateway WebSocket /api/ws 4403 | **待修复** |
| [#40818](https://github.com/NousResearch/hermes-agent/issues/40818) | 钉钉主动消息（cron/跨平台 send_message）完全失效 | [PR #40817](https://github.com/NousResearch/hermes-agent/pull/40817) 待合并 |
| [#40820](https://github.com/NousResearch/hermes-agent/issues/40820) | macOS 桌面安装程序在用户目录含空格时失败 | **待修复** |
| [#32217](https://github.com/NousResearch/hermes-agent/issues/32217) | NVIDIA OpenShell 沙箱内 SSRF 检查误拦截网页工具 | **待修复** |
| [#39472](https://github.com/NousResearch/hermes-agent/issues/39472) | 桌面仪表板传递 ASAR 内部路径导致前端 404 | **待修复** |
| [#40840](https://github.com/NousResearch/hermes-agent/issues/40840) | Windows 工具向导向 .env 写入 ESC 字符，永久破坏 web_search | **待修复** |
| [#40852](https://github.com/NousResearch/hermes-agent/issues/40852) | Discord `/model` 命令用旧模型验证新提供者目录 | **待修复** |
| [#40862](https://github.com/NousResearch/hermes-agent/issues/40862) | `hermes model` 向导添加提供者时覆盖 `model.base_url` | [PR #40869](https://github.com/NousResearch/hermes-agent/pull/40869) 待合并 |
| [#34827](https://github.com/NousResearch/hermes-agent/issues/34827) | tool_executor 并发检查点前副作用 | 已关闭 |

### 🟢 P3（一般）

| Issue | 描述 | 修复 PR |
|:---|:---|:---:|
| [#40843](https://github.com/NousResearch/hermes-agent/issues/40843) | Camofox HTTP 客户端硬编码 30s 超时，忽略 `browser.command_timeout` | **待修复** |
| [#40484](https://github.com/NousResearch/hermes-agent/issues/40484) | 桌面文件树不支持 Delete 键/右键删除 | **待修复** |
| [#40676](https://github.com/NousResearch/hermes-agent/issues/40676) | 模型选择器隐藏不在精选列表中的默认模型 | **待修复** |
| [#40717](https://github.com/NousResearch/hermes-agent/issues/40717) | OpenRouter 模型选择器缺少 `openrouter/free` | **待修复** |
| [#40855](https://github.com/NousResearch/hermes-agent/issues/40855) | 桌面应用显示 `voice.record_key` 但不注册快捷键 | **待修复** |
| [#40815](https://github.com/NousResearch/hermes-agent/issues/40815) | 桌面首次启动引导因非 GitHub commit 的 install-stamp 404 失败 | **待修复** |

**稳定性评估：** v0.16.0 发布后**桌面端和网关层出现集中问题**，macOS/Windows 安装路径、Discord/Telegram/钉钉平台适配均有回归。安全类 Issue #40863 需要最高优先级响应。

---

## 6. 功能请求与路线图信号

| 功能方向 | 代表 Issue/PR | 纳入可能性评估 |
|:---|:---|:---|
| **确定性工作流引擎** | [#5354](https://github.com/NousResearch/hermes-agent/issues/5354) | ⭐⭐⭐ 高。8👍/8评论，企业场景刚需，可能进入 v0.17 核心路线图 |
| **持久化用户知识库** | [#531](https://github.com/NousResearch/hermes-agent/issues/531) | ⭐⭐⭐ 高。基础设施缺口，已有 3 个月讨论，官方可能已在规划 |
| **Cursor 提供者集成** | [PR #40876](https://github.com/NousResearch/hermes-agent/pull/40876) | ⭐⭐⭐ 高。完整 PR 已提交，若审核通过可快速落地 |
| **Dreaming 记忆整合** | [#25309](https://github.com/NousResearch/hermes-agent/issues/25309) | ⭐⭐☆ 中。概念吸引人，但需与现有 Hindsight/Mem0 架构协调 |
| **mem0-temporal-hygiene 插件** | [#37661](https://github.com/NousResearch/hermes-agent/issues/37661) | ⭐⭐☆ 中。社区已发布独立仓库，可作为官方插件候选 |
| **OpenAI 兼容 API 音频透传** | [#40873](https://github.com/NousResearch/hermes-agent/issues/40873) | ⭐⭐☆ 中。Ollama/Gemma4 本地部署场景需求，需评估语音处理架构 |
| **TUI 可折叠 verbose 输出** | [#40854](https://github.com/NousResearch/hermes-agent/issues/40854) | ⭐⭐☆ 中。开发者体验改进，实现成本较低 |
| **桌面字体/密度控制** | [PR #40868](https://github.com/NousResearch/hermes-agent/pull/40868) | ⭐⭐⭐ 高。PR 已提交，UI 定制化的小而美改进 |
| **会话存在发现** | [PR #40814](https://github.com/NousResearch/hermes-agent/pull/40814) | ⭐⭐☆ 中。TUI/多会话管理的基础设施 |

---

## 7. 用户反馈摘要

### 真实痛点

| 痛点 | 来源 | 场景 |
|:---|:---|:---|
| **"消息凭空消失"的恐慌感** | [#40416](https://github.com/NousResearch/hermes-agent/issues/40416) | Telegram 上下文压缩时视觉上删除用户消息，"看起来像 Agent 删了我的话" |
| **新安装即损坏** | [#27683](https://github.com/NousResearch/hermes-agent/issues/27683), [#40840](https://github.com/NousResearch/hermes-agent/issues/40840) | 网页工具/搜索工具在全新安装后静默失效，Windows 向导直接写入损坏配置 |
| **配置切换互相破坏** | [#40862](https://github.com/NousResearch/hermes-agent/issues/40862), [#40852](https://github.com/NousResearch/hermes-agent/issues/40852) | 切换模型/提供者时，旧 base_url 或旧模型名未被清理，导致连锁故障 |
| **桌面安装对非标准环境不友好** | [#40820](https://github.com/NousResearch/hermes-agent/issues/40820), [#39472](https://github.com/NousResearch/hermes-agent/issues/39472) | 外置硬盘空格路径、ASAR 内部路径等边缘情况缺乏处理 |
| **平台适配不完整** | [#40818](https://github.com/NousResearch/hermes-agent/issues/40818), [#38412](https://github.com/NousResearch/hermes-agent/issues/38412) | 钉钉主动消息、远程网关 WebSocket 等核心链路存在断点 |

### 满意/认可

- 社区高度认可 v0.16.0 的变更规模和"Surface"方向（发布数据获得广泛关注）
- 用户对 **Cursor 集成 PR #40876** 反应积极，认为可扩展使用场景
- **#37661** 等社区插件显示生态自组织能力较强

### 不满意/担忧

- **审核响应速度**：46 个 PR 待合并，大量当日提交的修复未获反馈
- **发布说明不完整**：v0.16.0 的 release notes 截断，升级风险不透明
- **安全响应**：#40863  Telegram 鉴权前处理的安全问题尚无 PR

---

## 8. 待处理积压

### 需要维护者重点关注

| 类型 | 条目 | 说明 |
|:---|:---|:---|
| 🔴 **安全未响应** | [#40863](https://github.com/NousResearch/hermes-agent/issues/40863) | Telegram 移除用户可注入 prompt，无修复 PR，已超过 24 小时 |
| 🔴 **P1 崩溃未修复** | [#8090](https://github.com/NousResearch/hermes-agent/issues/8090) | 网关启动即崩溃，4👍 显示影响面广 |
| 🟡 **长期高票需求** | [#5354](https://github.com/NousResearch/hermes-agent/issues/5354) | 创建于 4 月，8👍，需官方给出路线图回应 |
| 🟡 **基础设施需求** | [#531](https://github.com/NousResearch/hermes-agent/issues/531) | 3 个月未关闭，知识库是平台级缺口 |
| 🟡 **发布说明补全** | [v2026.6.5 release](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.6.5) | 当前 notes 截断，需补全破坏性变更和迁移指南 |
| 🟢 **PR 队列拥堵** | 46 个待合并 PR | 建议维护者进行 triage，优先合并 P1/P2 修复 |

---

**日报结论：** Hermes Agent 在 v0.16.0 发布后处于**高活跃、高压力**状态。社区动力和贡献规模健康，但审核吞吐量和安全响应速度是当前最大的健康度风险。建议未来 48-72 小时内优先处理：① Telegram 安全问题；② 桌面安装/网关 P1-P2 修复 PR 的合并；③ 补全 v0.16.0 发布说明。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-06-07

> **项目**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)  
> **日期**: 2026-06-07  
> **数据周期**: 过去 24 小时（2026-06-06）

---

## 1. 今日速览

PicoClaw 今日呈现**高强度开发态势**，24 小时内完成 **15 个 PR 的合并/关闭**（含 3 个待合并），同时处理了 **10 个活跃 Issue**。核心亮点在于：一位贡献者（`chengzhichao-xydt`）单日提交 **6 个防御性修复 PR**，集中消除 goroutine 泄漏、panic 和类型断言不安全等隐患；社区出现一组以加密货币交易为核心的功能规划（`jcafeitosa` 提交的 9 个 Issue），暗示项目可能向量化交易/金融 AI Agent 方向延伸。整体代码质量关注度显著提升，但新功能规划与主项目定位的契合度有待观察。

---

## 2. 版本发布

### 🌙 Nightly Build: `v0.2.9-nightly.20260606.89ee8f1b`

| 属性 | 详情 |
|:---|:---|
| **版本号** | `v0.2.9-nightly.20260606.89ee8f1b` |
| **类型** | 自动化夜间构建（Automated） |
| **稳定性** | ⚠️ **不稳定，谨慎使用** |
| **完整变更日志** | [Compare v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) |

**注意事项**：此为 CI 自动构建，未经过完整回归测试，生产环境建议等待正式版 `v0.2.9` 或后续稳定版本。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（15 个）

#### 🔧 稳定性与防御性修复（核心进展）

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| **#3014** / **#3016** | chengzhichao-xydt | **修复 `Manager.Reload()` goroutine 泄漏**：通道重载时旧 `dispatchTask` 未 `cancel()`，导致 `dispatchOutbound`/`dispatchOutboundMedia` 协程无限期运行 | [PR #3014](https://github.com/sipeed/picoclaw/pull/3014) · [PR #3016](https://github.com/sipeed/picoclaw/pull/3016) |
| **#3021** | chengzhichao-xydt | **防止 `nil agent` panic**：`GetStartupInfo()` 返回空 map 时，安全访问 `tools`/`skills` 键 | [PR #3021](https://github.com/sipeed/picoclaw/pull/3021) |
| **#3022** | chengzhichao-xydt | **3 处 `sync.Map` 类型断言加固**：Slack、Windows 平台、飞书通道的 `LoadAndDelete`/`Load` 添加 `ok` 检查 | [PR #3022](https://github.com/sipeed/picoclaw/pull/3022) |
| **#3023** | chengzhichao-xydt | **自更新提取完整性保障**：`extractZip`/`extractTarFromReader` 中 `Close()` 错误不再静默忽略，防止磁盘满/I/O 错误导致文件损坏 | [PR #3023](https://github.com/sipeed/picoclaw/pull/3023) |
| **#3017** | chengzhichao-xydt | **base64 编码器资源泄漏修复**：`io.Copy` 失败时确保 `encoder.Close()` 被调用，避免缓冲区内填充数据未刷新 | [PR #3017](https://github.com/sipeed/picoclaw/pull/3017) |
| **#3019** | chengzhichao-xydt | **三处防御修复**：WhatsApp 类型切换捕获、`FilterSensitive` nil guard、`LastInsertId` 错误检查 | [PR #3019](https://github.com/sipeed/picoclaw/pull/3019) |
| **#3018** | chengzhichao-xydt | **LINE 通道 + Evolution store + `os.Getwd` 错误处理**：待合并 | [PR #3018](https://github.com/sipeed/picoclaw/pull/3018) |

#### ✨ 功能增强

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| **#1112** | liugangjian | **ModelScope DeepSeek 协议支持**：修复 `deepseek-ai/DeepSeek-V3.2` 配置时 `unknown protocol` 错误 | [PR #1112](https://github.com/sipeed/picoclaw/pull/1112) |
| **#2711** | openapphub | **HTTP 环境复制按钮降级**：`navigator.clipboard` 不可用时自动降级至 `execCommand('copy')` | [PR #2711](https://github.com/sipeed/picoclaw/pull/2711) |
| **#830** | zilin | **Google Chat 通道支持** | [PR #830](https://github.com/sipeed/picoclaw/pull/830) |
| **#423** | Leeaandrob | **多 Agent 协作框架基座**（WIP 关闭）：Blackboard 共享上下文、Agent handoff、发现工具 | [PR #423](https://github.com/sipeed/picoclaw/pull/423) |
| **#3020** | bogdanovich | **Slack 格式优化与通道路由**：工具反馈跟踪改进、通道 allow/ignore 过滤器 | [PR #3020](https://github.com/sipeed/picoclaw/pull/3020) |
| **#2965** | maxmilian | **工作区 URL 守卫修复**：阻止 `curl wttr.in/Beijing?T` 等无 scheme URL 被误判为本地路径 | [PR #2965](https://github.com/sipeed/picoclaw/pull/2965) |
| **#3013** | shenjiecode | **文档修正**：移除 `skill-creator` 中不存在的辅助脚本引用 | [PR #3013](https://github.com/sipeed/picoclaw/pull/3013) |

#### 📚 文档

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| **#2662** | milseg | **供应商文档表统一** | [PR #2662](https://github.com/sipeed/picoclaw/pull/2662) |

---

## 4. 社区热点

### 最高讨论热度：WhatsApp ARM64 构建支持

| Issue | 指标 | 分析 |
|:---|:---|:---|
| **[#2625] Provide compiled builds with WhatsApp support** | 8 评论, 👍 1 | **边缘设备部署痛点**：Raspberry Pi Zero 2 用户需要预编译的 WhatsApp 支持 ARM64 构建，避免每次手动编译。已于今日关闭，可能已有解决方案或判定为超出核心范围 |
| **[#2929] Add first-class agent-to-agent communication** | 3 评论, 👍 2 | **多 Agent 架构演进需求**：当前 `spawn`/`subagent`/`delegate` 为层级调用，社区呼吁对等通信层（peer-to-peer）以支持协作工作流 |

**诉求解读**：  
- **#2625** 反映 IoT/边缘场景对**开箱即用二进制分发**的强烈需求，与项目"轻量 AI Agent"定位高度相关  
- **#2929** 表明用户已不满足于"主从式"多 Agent，期望**去中心化协作原语**（类似 AutoGen 的群聊模式）

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | **Goroutine 泄漏**：`Manager.Reload()` 覆盖 `dispatchTask` 未取消旧上下文，导致资源无限累积 | ✅ 已修复 | #3014 / #3016 | [Issue 关联](https://github.com/sipeed/picoclaw/pull/3014) |
| 🔴 **高** | **自更新文件损坏**：`Close()` 错误静默忽略，可能提取不完整二进制 | ✅ 已修复 | #3023 | [PR #3023](https://github.com/sipeed/picoclaw/pull/3023) |
| 🟡 **中** | **多通道 panic**：`sync.Map` 类型断言失败导致运行时崩溃（Slack/Windows/飞书/LINE） | 🔄 部分修复，#3018 待合并 | #3022, #3018 | [PR #3022](https://github.com/sipeed/picoclaw/pull/3022) |
| 🟡 **中** | **nil agent panic**：启动信息 map 空值访问 | ✅ 已修复 | #3021 | [PR #3021](https://github.com/sipeed/picoclaw/pull/3021) |
| 🟡 **中** | **base64 编码不完整**：媒体文件编码失败时输出截断 | ✅ 已修复 | #3017 | [PR #3017](https://github.com/sipeed/picoclaw/pull/3017) |
| 🟢 **低** | **QQ 通道 Windows 构建连接失败**：token 获取超时 | ⏳ 待处理 | 无 | [Issue #3015](https://github.com/sipeed/picoclaw/issues/3015) |

> **健康度评估**：今日防御性修复密度异常高，表明代码审计或静态分析工具可能发现了系统性模式问题。`chengzhichao-xydt` 的修复集群显著提升了运行时健壮性，但 QQ 通道的 Windows 特定问题尚无响应。

---

## 6. 功能请求与路线图信号

### 新兴方向：加密货币交易基础设施（⚠️ 需关注与主项目定位关系）

`jcafeitosa` 于 2026-06-06 批量提交 **9 个规划 Issue**，构成完整的量化交易 Agent 技术栈：

| Issue | 内容 | 技术规格 | 链接 |
|:---|:---|:---|:---|
| **#3024** | Exchange 接口 + Go 类型 | TDD 强制，遵循 SDD-001 | [Issue #3024](https://github.com/sipeed/picoclaw/issues/3024) |
| **#3025** | Binance WebSocket 连接器 | < 50μs/update | [Issue #3025](https://github.com/sipeed/picoclaw/issues/3025) |
| **#3026** | Binance REST 连接器 | TDD 强制 | [Issue #3026](https://github.com/sipeed/picoclaw/issues/3026) |
| **#3027** | 无锁订单簿 Ring Buffer | 1M updates/s, zero alloc | [Issue #3027](https://github.com/sipeed/picoclaw/issues/3027) |
| **#3028** | 交易所延迟基准测试 | 文档化结果 | [Issue #3028](https://github.com/sipeed/picoclaw/issues/3028) |
| **#3029** | 风险管理器接口 | TDD 强制，遵循 SDD-002 | [Issue #3029](https://github.com/sipeed/picoclaw/issues/3029) |
| **#3030** | ClawHub 消息类型 + 核心 | 遵循 SDD-009 | [Issue #3030](https://github.com/sipeed/picoclaw/issues/3030) |
| **#3031** | CI/CD GitHub Actions | 每 PR 触发 | [Issue #3031](https://github.com/sipeed/picoclaw/issues/3031) |
| **#3032** | `clawtrade` CLI 结构 | trade/backtest/agent/status | [Issue #3032](https://github.com/sipeed/picoclaw/issues/3032) |

**分析**：  
- 技术规格专业（TDD、SDD 规范、微秒级延迟、无锁数据结构），暗示这可能是**有组织的商业项目 fork 或插件系统预研**  
- 若纳入主线，将大幅扩展 PicoClaw 从"通用 AI Agent"向"金融/交易专用 Agent"演进  
- **建议维护者澄清**：此为官方路线图、社区插件、还是独立 fork？当前 0 评论、0 👍 表明社区尚未响应

### 已有关键功能请求

| Issue | 状态 | 纳入可能性 | 链接 |
|:---|:---|:---|:---|
| #2929 Agent-to-Agent 对等通信 | 已关闭 | ⭐⭐⭐⭐☆ 高，PR #423 已铺垫基础框架 | [Issue #2929](https://github.com/sipeed/picoclaw/issues/2929) |
| #2625 WhatsApp ARM64 预构建 | 已关闭 | ⭐⭐⭐☆☆ 中，构建系统复杂度 vs 边缘场景需求 | [Issue #2625](https://github.com/sipeed/picoclaw/issues/2625) |

---

## 7. 用户反馈摘要

### 😫 痛点

| 来源 | 反馈 | 场景 |
|:---|:---|:---|
| **#2625** `duckida` | "Raspberry Pi Zero 2 上每次更新 PicoClaw 都需手动编译 WhatsApp 支持，难以快速迭代" | **ARM64 边缘设备 / 持续部署** |
| **#3015** `cuandada` | "Windows 构建的 QQ 通道启动即超时，Pico 通道正常" | **Windows 生产环境 / 多通道可靠性** |
| **#2929** `afjcjsbx` | "现有 spawn/subagent/delegate 是层级调用，无法支持对等协作" | **复杂工作流 / 多 Agent 编排** |

### 😊 满意度信号

- **#2711** 修复获隐含认可：HTTP 环境复制按钮问题被快速响应，表明前端兼容性受重视
- **#830** Google Chat 通道合并：企业 IM 生态持续扩展

### 🔍 使用模式洞察

- **平台分布**：Issues 同时覆盖 Linux ARM64 (Pi)、Windows (QQ)、Web (HTTP/HTTPS 上下文），用户群体高度异构
- **通道偏好**：WhatsApp、QQ、Slack、LINE、飞书、Google Chat、Pico 多线并进，**通道维护负担显著**

---

## 8. 待处理积压

| 项目 | 年龄 | 风险 | 行动建议 |
|:---|:---|:---|:---|
| **[PR #2935] Traditional Chinese (zh-TW) locale** | 13 天，标记 `stale` | i18n 债务累积，华语社区体验受损 | 指派 i18n 审核者，或明确拒绝非核心语言支持范围 |
| **[Issue #3015] QQ Windows 连接失败** | 1 天 | 但 0 评论，Windows 用户阻断性问题 | 维护者确认是否可复现，需 Windows 环境测试 |
| **[PR #3018] LINE + Evolution + os.Getwd 修复** | 待合并 | 与已合并的 #3022 形成系列，延迟合并不利防御性修复完整性 | 优先审核，建议与 #3022 打包发布 |

---

## 附录：数据速查

| 指标 | 数值 |
|:---|:---|
| Issues 更新 | 12（新开/活跃 10，关闭 2）|
| PRs 更新 | 18（待合并 3，已合并/关闭 15）|
| 新版本 | 1（nightly）|
| 最活跃贡献者 | `chengzhichao-xydt`（6 PRs，全为防御性修复）|
| 最大批量提交者 | `jcafeitosa`（9 Issues，交易基础设施规划）|

---

> **明日关注**：① `jcafeitosa` 交易相关 Issue 是否获维护者回应；② QQ Windows 问题是否有修复 PR；③ #3018 合并进度；④ `v0.2.9` 正式版发布节奏。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-06-07

> **项目**: [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw) | **日期**: 2026-06-07 | **数据周期**: 过去24小时

---

## 1. 今日速览

NanoClaw 今日保持**中高频开发节奏**，14 个 PR 更新（3 个已合并/关闭，11 个待审）显示社区贡献活跃但审查队列压力显著。核心进展集中在**技能系统可维护性改造**（2 个 PR 关闭）和**Slack 适配器架构升级**（Socket Mode 迁移）。Signal 通道修复与 Google 生态工具扩展构成多通道并进态势。Issues 侧仅 1 条新 Bug 报告，整体稳定性关注度可控。项目处于**功能迭代与架构债务清理并行**的阶段，维护者需关注 PR 审查瓶颈。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### ✅ 已合并/关闭 PR（3 条）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2698](https://github.com/nanocoai/nanoclaw/pull/2698) | [gavrielc](https://github.com/gavrielc) | **技能库可维护性改造**：建立技能一致性标准（exemplars + fleet retrofit），要求每个技能具备测试、idempotent 的 `REMOVE.md`、禁止 `VERIFY.md`，否则退役/重写 | **架构层面里程碑**：解决核心变更时技能漂移的系统性风险，为后续核心迭代奠定"upgrade-maintainable"基础 |
| [#2696](https://github.com/nanocoai/nanoclaw/pull/2696) | [gavrielc](https://github.com/gavrielc) | **`/add-dashboard` 技能首个一致性范例**：修复因核心重组导致的 5 个 DB 模块导入漂移，添加 in-process 集成测试 | **验证 #2698 模型的可行性**，暴露并修复了"静默构建失败"的实际用户痛点 |
| [#2697](https://github.com/nanocoai/nanoclaw/pull/2697) | [simonstudios](https://github.com/simonstudios) | **单实例锁机制**：防止 `pnpm run dev` 与系统服务并行运行导致的消息重复投递 | 关闭高影响生产问题，提升部署可靠性 |

**整体评估**：今日关闭的 PR 覆盖**架构治理**（技能模型）、**质量基础设施**（测试范例）、**运行时稳定性**（单实例锁）三个维度，项目在技术债务管理和可靠性工程上迈出实质性步伐。

---

## 4. 社区热点

> 注：今日所有 Issues/PR 评论数均为 0 或 `undefined`，👍 均为 0，社区讨论热度整体偏低。以下按**技术影响力**和**多 PR 关联性**识别热点。

### 🔥 Slack Socket Mode 迁移（双 PR 联动）
- **PR #2702**: [fix(slack): switch adapter to Socket Mode](https://github.com/nanocoai/nanoclaw/pull/2702)
- **PR #2700**: [fix(skill/add-slack): switch to Socket Mode setup](https://github.com/nanocoai/nanoclaw/pull/2700)
- **作者**: [mperraillon](https://github.com/mperraillon)

**诉求分析**：当前 Slack 适配器使用 HTTP webhook 模式（`botToken` + `signingSecret`），强制要求公网可达 URL，这对自托管/内网部署用户构成**网络架构壁垒**。双 PR 分别修复运行时适配器和用户引导技能，形成端到端解决方案。背后反映的是**企业/私有部署场景**的强需求，与 NanoClaw 作为"个人 AI 助手"的定位存在张力——用户期望降低基础设施门槛。

### 🔥 技能系统架构治理
- **PR #2698**: [Skills conformance: exemplars + fleet retrofit](https://github.com/nanocoai/nanoclaw/pull/2698)
- **PR #2696**: [feat(add-dashboard): make the skill conformant](https://github.com/nanocoai/nanoclaw/pull/2696)

**诉求分析**：核心团队主动推动技能"可升级性"模型，表明项目已从**功能堆砌期**进入**平台治理期**。`REMOVE.md` 的 idempotent 要求、测试覆盖、禁止 `VERIFY.md` 等规则，实质是在构建**技能市场的质量门槛**——为未来的第三方技能生态做准备。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 来源 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | **`ncl groups restart --rebuild` 空包列表崩溃**：当 `packages_apt` 和 `packages_npm` 均为空时，重建流程错误触发 "No packages to install" 异常，正常重启无此问题 | [Issue #2701](https://github.com/nanocoai/nanoclaw/issues/2701) | **无** | ⏳ 待修复 |
| 🟡 **中** | **Slack HTTP webhook 模式部署壁垒**：需公网 URL，阻碍私有/内网部署 | [PR #2702](https://github.com/nanocoai/nanoclaw/pull/2702), [PR #2700](https://github.com/nanocoai/nanoclaw/pull/2700) | #2702, #2700 | 🔧 待审查合并 |
| 🟡 **中** | **Signal 图片附件容器不可读**：Signal 适配器传递宿主机路径，容器内无法访问 | [PR #2695](https://github.com/nanocoai/nanoclaw/pull/2695) | #2695 | 🔧 待审查合并 |
| 🟡 **中** | **Signal DM 被静默丢弃**：`isMention`/`isGroup` 未设置导致路由不创建 `messaging_group` | [PR #2694](https://github.com/nanocoai/nanoclaw/pull/2694) | #2694 | 🔧 待审查合并 |
| 🟡 **中** | **重复文本输出**：`send_message` 在 turn 中途触发时产生重复文本 | [PR #2531](https://github.com/nanocoai/nanoclaw/pull/2531) | #2531 | 🔧 待审查（20天）|
| 🟢 **低** | **Claude Code 会话过期错误暴露给用户**：`isSessionInvalid()` 清除 continuation 后仍向用户展示原始错误 | [PR #2184](https://github.com/nanocoai/nanoclaw/pull/2184) | #2184 | 🔧 待审查（36天）|
| 🟢 **低** | **rootless Podman 用户映射失败**：容器内权限问题 | [PR #2230](https://github.com/nanocoai/nanoclaw/pull/2230) | #2230 | 🔧 待审查（35天）|
| 🟢 **低** | **mount allowlist 缺少 path 字段容错**：配置健壮性 | [PR #2349](https://github.com/nanocoai/nanoclaw/pull/2349) | #2349 | 🔧 待审查（30天）|

**健康度评估**：无 P0 级崩溃，但 **Issue #2701** 为今日新报且影响核心 CLI 工作流，建议优先响应。Signal 通道双修复（#2695, #2694）显示该适配器成熟度不足，需持续投入。

---

## 6. 功能请求与路线图信号

| 功能方向 | 来源 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **MCP 传输协议扩展：HTTP + SSE** | [PR #2208](https://github.com/nanocoai/nanoclaw/pull/2208) | ⭐⭐⭐⭐☆ 高 | 符合 MCP 生态演进方向，作者 [cfis](https://github.com/cfis) 为持续贡献者，PR 已标记 `follows-guidelines` |
| **Google Contacts 工具** (`/add-google-contacts-tool`) | [PR #2693](https://github.com/nanocoai/nanoclaw/pull/2693) | ⭐⭐⭐⭐☆ 高 | 与现有 `/add-gmail-tool`、`/add-gcal-tool` 形成 Google 办公套件矩阵，模式成熟，纯技能无源码变更 |
| **Slack Socket Mode** | [PR #2702](https://github.com/nanocoai/nanoclaw/pull/2702), [PR #2700](https://github.com/nanocoai/nanoclaw/pull/2700) | ⭐⭐⭐⭐☆ 高 | 架构必要性明确，双 PR 覆盖完整，但需审查是否与现有 HTTP 模式保持兼容 |
| **CLI ID 生成规范化**（字母开头 UUID） | [PR #2699](https://github.com/nanocoai/nanoclaw/pull/2699) | ⭐⭐⭐☆☆ 中 | 修复 OneCLI 兼容性问题，技术债务清理，但影响面需评估 |

**路线图信号**：项目正从"通道扩展"转向**协议深度集成**（MCP 多传输）和**企业部署就绪**（Socket Mode、Podman 支持）。Google 工具链的补齐暗示**个人生产力助手**定位的强化。

---

## 7. 用户反馈摘要

> 基于 Issue #2701 及 PR 描述中的用户场景提炼

### 真实痛点

| 场景 | 反馈来源 | 核心不满 |
|:---|:---|:---|
| **空包组重建失败** | [Issue #2701](https://github.com/nanocoai/nanoclaw/issues/2701) 作者 [jtheducation-ctrl](https://github.com/jtheducation-ctrl) | "`--rebuild` 应该智能跳过无包配置的情况，而不是强制报错。正常重启能工作，重建却不行，行为不一致" |
| **Slack 部署复杂度** | [PR #2700](https://github.com/nanocoai/nanoclaw/pull/2700) 描述 | 用户需配置 `SLACK_SIGNING_SECRET`、Event Subscriptions URL、Interactivity URL、公网 webhook，"对自托管用户门槛过高" |
| **Signal 功能残缺** | [PR #2694](https://github.com/nanocoai/nanoclaw/pull/2694), [PR #2695](https://github.com/nanocoai/nanoclaw/pull/2695) | DM 被静默丢弃、图片无法读取，"适配器基础功能未完整实现即发布" |

### 满意度信号
- **技能可升级性改造**获核心团队主动推进，反映维护者对**长期用户体验**的重视
- `/add-google-contacts-tool` 等工具链扩展显示**生态完整性**持续提升

---

## 8. 待处理积压

> 长期未响应、可能影响项目健康度的 PR/Issue

| 项目 | 创建时间 | 距今 | 风险 | 建议行动 |
|:---|:---|:---|:---|:---|
| [PR #2184](https://github.com/nanocoai/nanoclaw/pull/2184) 会话过期错误暴露 | 2026-05-02 | **36天** | 用户体验瑕疵，每日影响 Claude Code 用户 | 标记 `priority: ux`，安排审查或关闭 |
| [PR #2230](https://github.com/nanocoai/nanoclaw/pull/2230) rootless Podman 用户映射 | 2026-05-03 | **35天** | 容器安全部署场景受阻，与项目"自托管"定位冲突 | 需要容器运行时专家审查，或请求作者 rebase |
| [PR #2349](https://github.com/nanocoai/nanoclaw/pull/2349) mount allowlist 容错 | 2026-05-08 | **30天** | 配置健壮性，低风险但长期挂起消耗审查注意力 | 快速审查合并或明确拒绝 |
| [PR #2531](https://github.com/nanocoai/nanoclaw/pull/2531) 重复文本抑制 | 2026-05-18 | **20天** | 消息渲染质量，用户可见 | 与 #2184 同属 poll-loop 模块，建议批量审查 |
| [PR #2208](https://github.com/nanocoai/nanoclaw/pull/2208) MCP HTTP/SSE 传输 | 2026-05-03 | **35天** | **高价值功能延迟**，MCP 生态关键能力 | **优先审查**，或拆分 SSE/HTTP 为独立 PR 加速迭代 |

**积压健康度警示**：11 个待合并 PR 中 **5 个超过 20 天**，其中 4 个为 [cfis](https://github.com/cfis) 贡献。该作者贡献密度高（今日 6 个活跃 PR）但响应周期长，可能存在：
- 审查者带宽不足
- 大 PR 审查门槛高（如 #2208 涉及协议扩展）
- 贡献者与维护者时区/沟通节奏错配

**建议**：核心维护者可考虑引入**分阶段审查**（如先合 HTTP 后合 SSE）、**贡献者配对机制**或**每周积压清理会议**。

---

> **日报生成依据**: GitHub API 数据快照 | **数据置信度**: 高（结构化数据完整）

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-06-07

> **项目**: [nearai/ironclaw](https://github.com/nearai/ironclaw)  
> **分析日期**: 2026-06-07  
> **数据周期**: 过去 24 小时（2026-06-06）

---

## 1. 今日速览

IronClaw 今日呈现**高强度开发态势**，33 个 PR 更新（22 个待合并）显示核心团队正在密集推进 Reborn 架构落地。值得注意的是，PR 数量虽多但评论互动为 `undefined`，反映团队可能依赖内部同步或快速迭代模式。CI 稳定性出现警示信号：[#4108](https://github.com/nearai/ironclaw/issues/4108) 夜间 E2E 测试持续失败，需关注是否阻塞合并流程。整体而言，项目处于**功能冲刺期**，Reborn 相关代码贡献占比超 60%，但质量门禁与社区参与度有待加强。

---

## 2. 版本发布

**无新版本发布**

> 待发布版本 [PR #3708](https://github.com/nearai/ironclaw/pull/3708) 仍处开放状态，包含多个 crate 的 breaking changes：
> - `ironclaw_common` 0.4.2 → 0.5.0 ⚠️
> - `ironclaw_skills` 0.3.0 → 0.4.0 ⚠️
> - `ironclaw` 0.24.0 → 0.29.1 ⚠️

---

## 3. 项目进展

### 已合并/关闭的关键 PR（11 条中的代表性进展）

| PR | 作者 | 核心贡献 | 项目意义 |
|:---|:---|:---|:---|
| [#4486](https://github.com/nearai/ironclaw/pull/4486) | henrypark133 | **子代理 + 上下文压缩统一设计文档** | 确立 Reborn 架构中 `PostCapabilityStage` 作为单一控制点，解决背景子代理与主动压缩的协同问题 |
| [#4485](https://github.com/nearai/ironclaw/pull/4485) | henrypark133 | 同上（含完整 scope 标记） | 覆盖 agent/channel/tool/db 等 20+ 模块，标志设计进入实施阶段 |
| [#4520](https://github.com/nearai/ironclaw/pull/4520) | henrypark133 | **CI 隔离：Reborn PR 脱离遗留测试** | 解决 Reborn 与 legacy 代码的 CI 冲突，提升并行开发效率 |
| [#4508](https://github.com/nearai/ironclaw/pull/4508) | serrrfirat | **重复调用警告门控机制** | 将"立即终止"改为"两阶段警告"，改善模型交互体验，减少误杀 |
| [#4509](https://github.com/nearai/ironclaw/pull/4509) | serrrfirat | Slack 频道主题路由 | 为 Slack 集成增加频道级路由配置，支撑企业多工作区场景 |
| [#3805](https://github.com/nearai/ironclaw/issues/3805) | serrrfirat | **Notion MCP 能力路径实现完成** | Reborn Lane 5 首个具体 MCP 工具包落地，验证 catalog/runtime 基线可用性 |

**整体推进评估**：Reborn 架构从设计文档（#4486）进入工程实施深水区，MCP 生态（Notion）、OpenAI 兼容层、WebUI v2 三条主线并行，项目完成度约 **35-40%**（基于里程碑 PR 占比估算）。

---

## 4. 社区热点

> ⚠️ **数据异常说明**：所有 PR 评论数显示为 `undefined`，Issues 评论均为 0，无法按常规指标判断讨论热度。以下基于 PR 规模、作者活跃度和变更影响面推断。

| 热点项 | 链接 | 热度推断依据 | 背后诉求分析 |
|:---|:---|:---|:---|
| **PR #4511** [codex] 出站偏好门面合约 | [链接](https://github.com/nearai/ironclaw/pull/4511) | XL 规模 + core 贡献者 + 跨模块 facade 设计 | 企业客户需要可配置的出站交付策略（邮件/Slack/等），要求类型安全且浏览器兼容 |
| **PR #4489** OpenAI 兼容产品引用 | [链接](https://github.com/nearai/ironclaw/pull/4489) | XL 规模 + 新增 `OpenAiCompatRefStore` + 双适配器 | 社区强烈需要 OpenAI API 兼容层以迁移现有应用，idempotency 和流恢复是生产级硬需求 |
| **PR #4495** 聊天补全路由至 ProductWorkflow | [链接](https://github.com/nearai/ironclaw/pull/4495) | XL 规模 + 直接替代 v1 gateway | 架构解耦诉求：将 LLM 调用从直接代理转向工作流编排，支持更复杂的审批/审计链 |
| **PR #4510** Slack 频道路由管理后台 | [链接](https://github.com/nearai/ironclaw/pull/4510) | 与 #4509 形成闭环，含 WebUI 管理面 | 运维团队需要自助配置频道路由，减少代码变更依赖 |

**核心诉求提炼**：企业集成深度（Slack/Notion）、API 兼容性（OpenAI）、运营可控性（偏好路由/管理后台）构成当前需求三角。

---

## 5. Bug 与稳定性

| 级别 | 问题 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | **夜间 E2E 持续失败** — `extensions` 任务失败，影响发布信心 | 开放，无评论互动 | 无明确关联 | [#4108](https://github.com/nearai/ironclaw/issues/4108) |
| 🟡 **中** | **系统哨兵反序列化不对称** — `TenantId`/`UserId` 拒绝 `\x1fSYSTEM\x1f`，导致 LLM 设置 API 返回 `service_unavailable` | 待合并 | [#4523](https://github.com/nearai/ironclaw/pull/4523) | [PR #4523](https://github.com/nearai/ironclaw/pull/4523) |
| 🟡 **中** | **JSON 清理器引入风险** — 新贡献者 PR，变更类型含 "Security" 但未详述 | 待合并 | 自身即为 fix/feature | [#4521](https://github.com/nearai/ironclaw/pull/4521) |

**稳定性评估**：E2E 失败已持续至少 11 天（5-27 创建），且无维护者响应，存在**流程风险**。[PR #4520](https://github.com/nearai/ironclaw/pull/4520) 的 CI 隔离可能是缓解步骤，但未根本解决测试失败本身。

---

## 6. 功能请求与路线图信号

| 信号源 | 功能方向 | 纳入下一版本概率 | 判断依据 |
|:---|:---|:---|:---|
| [PR #4517](https://github.com/nearai/ironclaw/pull/4517) Reborn 配置自动种子 | 首次启动体验优化 | **高** | 基础设施类，低风险，已覆盖测试 |
| [PR #4519](https://github.com/nearai/ironclaw/pull/4519) WebUI 会话能力端点 | 权限模型细化（isAdmin 服务端推导） | **高** | 安全改进，与 #4516 线程删除形成管理面闭环 |
| [PR #4522](https://github.com/nearai/ironclaw/pull/4522) tool_args.rs 解析原语 | RC3/M9 审计合规框架 | **高** | 标注为 Phase A，有明确后续阶段（B/C） |
| [PR #4186](https://github.com/nearai/ironclaw/pull/4186) 本地开发审批门控 | 安全开发工作流 | **中** | 5-28 创建，更新活跃但规模 XL，可能拆分 |
| [PR #4489](https://github.com/nearai/ironclaw/pull/4489) + [#4495](https://github.com/nearai/ironclaw/pull/4495) OpenAI 兼容层 | API 生态兼容 | **高** | 成对出现，ref 存储 + 路由缺一不可，设计完整 |

**路线图推断**：下一版本（0.29.x 或 0.30.0）核心主题为 **"Reborn 生产就绪"** — OpenAI 兼容、配置自举、管理后台、审批审计四条线收敛。

---

## 7. 用户反馈摘要

> ⚠️ **数据限制**：Issues 评论数为 0，无法提取真实用户对话。以下基于 Issue/PR 标题与摘要的**隐含痛点**推断：

| 痛点领域 | 具体表现 | 来源 |
|:---|:---|:---|
| **E2E 可靠性焦虑** | 夜间测试失败无响应，社区无法判断主线健康度 | [#4108](https://github.com/nearai/ironclaw/issues/4108) 零评论 |
| **配置门槛** | Reborn 需要手动准备 `config.toml`，首次体验断裂 | [#4517](https://github.com/nearai/ironclaw/pull/4517) 自动种子 |
| **权限模糊** | WebUI 前端自行判断 `isAdmin`，存在客户端篡改风险 | [#4519](https://github.com/nearai/ironclaw/pull/4519) 服务端能力下发 |
| **LLM 调用黑盒** | 工具参数解析错误无结构化反馈，调试困难 | [#4522](https://github.com/nearai/ironclaw/pull/4522) `arguments_parse_error` 规划 |
| **企业集成碎片化** | Slack/Notion 各自为政，缺乏统一路由抽象 | [#4510](https://github.com/nearai/ironclaw/pull/4510) + [#4511](https://github.com/nearai/ironclaw/pull/4511) facade 层 |

**满意度推测**：核心功能迭代快，但**可观测性、文档、社区响应**是明显短板。

---

## 8. 待处理积压

| 项目 | 创建时间 | 最后更新 | 滞留天数 | 风险说明 | 链接 |
|:---|:---|:---|:---|:---|:---|
| **PR #3708** 版本发布 | 2026-05-16 | 2026-06-06 | **22 天** | 多个 breaking changes 悬而未决，阻塞下游依赖升级 | [链接](https://github.com/nearai/ironclaw/pull/3708) |
| **Issue #4108** 夜间 E2E 失败 | 2026-05-27 | 2026-06-06 | **11 天** | 无维护者响应，可能已影响多个 PR 合并判断 | [链接](https://github.com/nearai/ironclaw/issues/4108) |
| **PR #4002** Dependabot 16 项 Actions 更新 | 2026-05-24 | 2026-06-06 | **14 天** | CI 基础设施债务，包含 checkout 等核心 action | [链接](https://github.com/nearai/ironclaw/pull/4002) |
| **PR #4186** 本地开发审批门控 | 2026-05-28 | 2026-06-06 | **10 天** | XL 规模 PR，长期未合可能产生冲突 | [链接](https://github.com/nearai/ironclaw/pull/4186) |
| **PR #3981** HTTP 脱敏标记测试覆盖 | 2026-05-24 | 2026-06-06 | **14 天** | 安全相关测试，标记 "Security" 但滞留 | [链接](https://github.com/nearai/ironclaw/pull/3981) |

**维护者行动建议**：
1. **优先诊断 #4108 E2E 失败** — 建议分配 owner 并更新 Issue 状态
2. **决策 #3708 发布时机** — 22 天滞留已超出合理窗口，需明确 blocking issues
3. **拆分或合入 #4186** — XL PR 建议按 commit 拆分或加速 review

---

*本日报基于公开 GitHub 数据生成，评论数 `undefined` 等异常字段已标注说明。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-06-07

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **日期**: 2026-06-07  
> **分析范围**: 过去 24 小时（2026-06-06 至 2026-06-07）

---

## 1. 今日速览

过去 24 小时，LobsterAI 项目呈现**低活跃、高积压**态势：Issues 新增/活跃 6 条但无一关闭，PR 侧 2 条陈旧 PR 被关闭却未合并，整体处于**"清理旧账但未实质推进"**的状态。社区反馈集中在任务执行中断、UI 交互体验缺陷及 Agent/MCP 配置易用性三大痛点，用户主动参与度（👍 总计仅 1 个）偏低，项目健康度需关注维护响应效率。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

今日 2 条 PR 均以 **Closed（未合并）** 状态收尾，属于**积压清理而非功能落地**：

| PR | 作者 | 状态 | 功能方向 | 关闭说明 |
|:---|:---|:---|:---|:---|
| [#1529](https://github.com/netease-youdao/LobsterAI/pull/1529) | MaoQianTu | Closed [stale] | 批量会话导出为 JSON | 4 月提交，今日因过期关闭，功能未进入主干 |
| [#1530](https://github.com/netease-youdao/LobsterAI/pull/1530) | gongzhi-netease | Closed [stale] | 多 Agent 环境下任务归属选择 | 4 月提交，今日因过期关闭，定时任务归属优化未落地 |

**评估**: 两条 PR 均涉及用户工作流核心场景（数据导出、多 Agent 任务管理），但因缺乏维护者 review 而沦为 stale。**项目实质进展为 0**，关闭操作仅减少队列长度，未解决用户需求。

---

## 4. 社区热点

| 排名 | Issue/PR | 互动量 | 核心诉求 |
|:---|:---|:---|:---|
| 🔥 1 | [#2120 建议](https://github.com/netease-youdao/LobsterAI/issues/2120) | 评论 1 | **工作流连续性优化**：预输入任务队列 + 延长单次任务超时 + 高分辨率屏幕 UI 适配 |
| 2 | [#1495 无缘无故中断进程](https://github.com/netease-youdao/LobsterAI/issues/1495) | 评论 1, 👍 1 | **稳定性焦虑**：任务执行中被 terminated，开发者场景受影响 |
| 3 | [#1496 任务显示完成，但是没有返回](https://github.com/netease-youdao/LobsterAI/issues/1496) | 评论 2 | **状态机不可靠**：UI 状态与实际执行结果脱节 |

**诉求分析**: 用户群体呈现**开发者工具化使用**特征——将 LobsterAI 用于数据获取脚本监控等长时任务，对任务持久性、超时机制、状态一致性有强需求。当前产品定位（个人 AI 助手）与实际使用场景（自动化/监控工具）存在张力。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 现象 | 影响场景 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#1495](https://github.com/netease-youdao/LobsterAI/issues/1495) | 进程无故中断，显示 terminated | 长时脚本监控、数据获取任务 | ❌ 无 |
| 🔴 **高** | [#1496](https://github.com/netease-youdao/LobsterAI/issues/1496) | 任务标记完成但实际无返回结果 | 异步任务执行、结果依赖型工作流 | ❌ 无 |
| 🟡 **中** | [#1468](https://github.com/netease-youdao/LobsterAI/issues/1468) | Agent 创建弹窗关闭无确认，内容静默丢失 | Agent 配置流程 | ❌ 无 |
| 🟡 **中** | [#1469](https://github.com/netease-youdao/LobsterAI/issues/1469) | Agent 设置面板关闭无确认，修改丢失 | Agent 迭代调优 | ❌ 无 |
| 🟡 **中** | [#1470](https://github.com/netease-youdao/LobsterAI/issues/1470) | MCP 服务器配置弹窗关闭无确认，环境变量等丢失 | MCP 集成配置 | ❌ 无 |

**模式识别**: #1468/#1469/#1470 构成**系统性交互缺陷**——所有 Modal 类组件均未实现 `beforeunload` 式的未保存确认机制，反映前端表单状态管理缺乏统一拦截层。建议维护者批量修复而非逐案处理。

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 与现有 PR 关联 | 纳入可能性评估 |
|:---|:---|:---|:---|
| [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) | 任务队列预输入（借鉴 WorkBuddy） | 无相关 PR | ⭐⭐⭐ 高——直接竞品对标，提升留存 |
| [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) | 延长单次任务运行时长/可配置超时 | 与 #1495/#1496 根因相关 | ⭐⭐⭐ 高——稳定性刚需 |
| [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) | 技能界面 3 列布局适配 2560×1600 | 无相关 PR | ⭐⭐☆ 中——UI 债务，影响专业用户 |
| [#1530](https://github.com/netease-youdao/LobsterAI/pull/1530) [已关闭] | 多 Agent 任务归属选择器 | PR 已 stale 关闭 | ⭐⭐⭐ 高——需求合理但需重新实现 |

**信号**: 用户明确提及 "WorkBuddy" 作为对标产品，暗示 LobsterAI 在**任务管理连续性**上落后竞品。建议维护者优先重构任务调度层（超时机制 + 状态持久化 + 队列预加载），而非仅做 UI 修补。

---

## 7. 用户反馈摘要

> **痛点提炼**（基于 Issue 描述与截图分析）

| 维度 | 具体反馈 | 代表 Issue |
|:---|:---|:---|
| **可靠性危机** | "脚本还在进行但监控停止了"——长时任务信任崩塌 | #1495, #1496 |
| **配置安全感缺失** | "所有内容静默丢失"——多次强调"静默"，用户心理冲击大 | #1468-1470 |
| **效率瓶颈** | "预输入下面的任务，提升项目运行连续性"——当前单任务串行模式阻塞工作流 | #2120 |
| **显示适配** | "2560*1600 全屏双列不好看"——高分屏用户群体被忽视 | #2120 |

> **使用场景画像**: 开发者将 LobsterAI 作为**自动化脚本的可视化监控面板**，而非纯聊天助手。任务中断 = 生产事故，此场景下的稳定性要求远高于普通对话场景。

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后更新 | 积压天数 | 风险说明 |
|:---|:---|:---|:---|:---|
| [#1468](https://github.com/netease-youdao/LobsterAI/issues/1468) | 2026-04-04 | 2026-06-06 | **63 天** | 系统性交互缺陷，批量修复成本低但用户每日受损 |
| [#1469](https://github.com/netease-youdao/LobsterAI/issues/1469) | 2026-04-04 | 2026-06-06 | **63 天** | 与 #1468 同源，建议合并处理 |
| [#1470](https://github.com/netease-youdao/LobsterAI/issues/1470) | 2026-04-04 | 2026-06-06 | **63 天** | MCP 配置丢失可能含敏感信息（API Key），安全风险 |
| [#1495](https://github.com/netease-youdao/LobsterAI/issues/1495) | 2026-04-07 | 2026-06-06 | **60 天** | 稳定性核心问题，有 👍 社区认同 |
| [#1496](https://github.com/netease-youdao/LobsterAI/issues/1496) | 2026-04-07 | 2026-06-06 | **60 天** | 状态机 Bug，可能与 #1495 根因耦合 |
| [#1529](https://github.com/netease-youdao/LobsterAI/pull/1529) | 2026-04-07 | 2026-06-06 | **60 天** | 功能已完成开发，仅因无 review 废弃 |
| [#1530](https://github.com/netease-youdao/LobsterAI/pull/1530) | 2026-04-07 | 2026-06-06 | **60 天** | 多 Agent 核心体验优化，代码已就绪 |

**维护者行动建议**:
1. **紧急**: 评估 #1529/#1530 代码是否可快速复活合并，避免重复开发
2. **短期**: 统一实现 Modal 未保存确认机制（#1468-1470），建议提取为通用 Hook
3. **中期**: 重构任务执行引擎，解决超时与状态不一致（#1495-1496, #2120）

---

*日报生成时间: 2026-06-07*  
*数据来源: GitHub API / 公开 Issue & PR 信息*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-06-07

> **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis)  
> **日期**: 2026-06-07  
> **分析师**: AI 智能体与个人 AI 助手领域开源项目分析

---

## 1. 今日速览

Moltis 今日社区活跃度处于**低活跃状态**。过去24小时内仅产生 3 条 Issue 更新，无 PR 活动及版本发布，表明项目处于相对平稳的维护期而非密集开发期。值得注意的是，全部 3 条 Issue 均为 6 月 6 日新创建且至今仍处于开放状态，其中 2 条为 Bug 报告、1 条为功能增强请求，反映出用户在 Docker 部署认证、定时任务（cron）管理方面的实际使用痛点。今日无社区成员提交修复 PR，维护团队尚未对上述问题作出正式响应。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

**今日无合并或关闭的 PR。**

代码层面零进展，项目功能迭代与缺陷修复处于停滞状态。结合连续 3 条新 Issue 无对应 PR 的情况，建议关注维护者响应时效与社区贡献者参与度。

---

## 4. 社区热点

| 排名 | Issue | 互动指标 | 链接 |
|:---|:---|:---|:---|
| 🔥 #1 | #1112 Docker 环境下禁用认证失效 | 1 条评论 | [→ Issue #1112](https://github.com/moltis-org/moltis/issues/1112) |

**热点分析**：  
- **#1112** 是目前唯一获得评论的 Issue，作者 `methompson` 的预检清单显示其已确认使用最新版本并搜索过历史问题，问题描述完整度较高。Docker 部署场景下的认证绕过失败属于**安全相关配置问题**，易引发部署生产环境时的信任危机，值得优先响应。
- **#1110** 与 **#1111** 虽无评论，但均由同一用户 `IlyaBizyaev` 提交，表明该用户正在深度使用 cron 功能模块，且连续遇到功能缺陷与体验瓶颈，是**高价值反馈用户**。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 严重程度 | 影响范围 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| P1 | #1112 禁用认证不生效（Docker） | 🔴 **高** | 安全/部署配置 | ❌ 无 | [→ #1112](https://github.com/moltis-org/moltis/issues/1112) |
| P2 | #1111 归档 cron 会话无可见效果 | 🟡 中 | 定时任务管理 UX | ❌ 无 | [→ #1111](https://github.com/moltis-org/moltis/issues/1111) |

**风险评估**：  
- **#1112** 涉及认证系统的配置失效，可能存在环境变量读取优先级、Docker 镜像默认配置覆盖或文档描述与实际行为不符等根因。若用户基于"已禁用认证"的假设暴露服务，将产生**未授权访问风险**。
- **#1111** 属于功能反馈型 Bug，"无可见效果"暗示状态变更缺乏 UI/CLI 反馈或归档操作本身未持久化，影响用户对 cron 会话生命周期的管控信心。

---

## 6. 功能请求与路线图信号

| Issue | 请求内容 | 与现有功能关联 | 纳入可能性评估 |
|:---|:---|:---|:---|
| #1110 | 新增 `NO_REPLY` 类关键字以抑制 cron 作业通知 | 现有 cron 通知系统 | ⭐⭐⭐☆☆ 中等 |

**分析**：  
该请求指向 cron 模块的**通知降噪**需求，与 #1111（cron 会话管理）形成场景闭环——用户可能因 cron 高频运行产生大量通知，进而需要归档+静默的组合策略。若维护团队计划优化 cron 体验，可将 #1110/#1111 打包纳入迭代。目前无相关 PR，短期落地概率有限。

---

## 7. 用户反馈摘要

| 维度 | 提炼内容 |
|:---|:---|
| **痛点** | Docker 部署时配置预期与实际行为不一致（认证开关）；cron 高频任务的通知噪音与状态管理盲区 |
| **使用场景** | 容器化生产部署、自动化定时任务编排（可能为 AI 智能体的周期性动作调度） |
| **满意度信号** | 用户主动填写预检清单、搜索历史 Issue，表明社区规范认知度高；但连续 2 日 3  Issue 零维护者响应，**参与感可能下降** |
| **隐含需求** | 更清晰的 Docker 环境配置文档、cron 操作的即时状态反馈机制、通知系统的细粒度控制 |

---

## 8. 待处理积压

⚠️ **新增积压预警**：今日 3 条 Issue 均创建于 2026-06-06，截至日报生成时已**超过 24 小时无维护者标记或回复**。

| Issue | 创建时间 | 当前状态 | 建议动作 |
|:---|:---|:---|:---|
| #1112 Docker 认证失效 | 2026-06-06 | 🟡 待分类 | 优先标记 `bug` + `docker` + `security`，指派核心维护者复现 |
| #1111 cron 归档无反馈 | 2026-06-06 | 🟡 待分类 | 标记 `bug` + `cron` + `ux`，评估前端/后端责任域 |
| #1110 cron 静默关键字 | 2026-06-06 | 🟡 待分类 | 标记 `enhancement` + `cron`，纳入功能请求池评估 |

> **建议**：连续新增 Issue 无响应可能引发" Issue 墓地"效应，建议维护者在 48 小时内至少完成初步分类与确认，维持社区信任度。

---

*日报基于 GitHub 公开数据生成，未包含私有讨论或分支活动信息。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-06-07

> 项目：CoPaw（github.com/agentscope-ai/CoPaw）  
> 数据周期：过去 24 小时（截至 2026-06-07）

---

## 1. 今日速览

过去 24 小时 CoPaw 社区保持**中低活跃水平**：Issues 更新 11 条，其中 9 条处于新开或活跃状态，仅 2 条关闭；**PR 更新为 0**，无代码合并且无新版本发布。这表明社区反馈以问题报告和功能建议为主，但核心维护团队的代码响应与修复节奏明显放缓，项目当日未产生直接的代码推进。值得关注的是，v1.1.10 版本集中出现多个回归问题（Coding Mode 会话切换、本地模型无响应、Windows 路径超限），可能对用户稳定性体验造成负面影响。

---

## 2. 版本发布

**无新版本发布。**

最新 Releases 为空，项目当前公开讨论主要围绕 **v1.1.10** 及 **v1.1.9** 版本的使用问题展开。

---

## 3. 项目进展

今日 **无 PR 合并或关闭**，代码层面无直接进展。

- 待合并 PR：0
- 已合并/关闭 PR：0

唯一正向闭环来自社区自助：Issue [#4984](https://github.com/agentscope-ai/QwenPaw/issues/4984) 用户自行确认 `/approval approve` 命令已存在并关闭。整体而言，项目今日在功能交付与缺陷修复上**未产生实质性推进**。

---

## 4. 社区热点

| 排名 | Issue | 评论数 | 热度原因 |
|:---|:---|:---|:---|
| 1 | [#4661](https://github.com/agentscope-ai/QwenPaw/issues/4661) 模型上下文长度配置，记忆压缩未生效 | 6 | 已关闭，但涉及核心配置机制，跨版本（v1.1.7→v1.1.8post1）回归 |
| 2 | [#4937](https://github.com/agentscope-ai/QwenPaw/issues/4937) `/compact` 命令忽略模型 `max_input_length`，仍使用 128K 默认 | 5 | 与 #4661 同类问题在 v1.1.10 复现，用户配置高上下文模型后压缩阈值未生效 |
| 3 | [#4886](https://github.com/agentscope-ai/QwenPaw/issues/4886) 请求接入 MAX Messenger 渠道 | 2 | 国际化/渠道扩展诉求，针对俄语区用户 |

**背后诉求分析：**

- **上下文压缩配置** 是近期最高频痛点：用户配置 200K/500K/512K 上下文模型后，系统仍以 131K/128K 触发压缩，涉及配置优先级、`/compact` 命令、运行配置三者不一致。该问题在 #4661 关闭后于 #4937 以不同路径复现，说明根因可能未彻底修复。
- **渠道扩展** 上，用户希望 QwenPaw 覆盖俄语区主流 IM MAX Messenger，呼应其"Every channel"产品定位。
- **交互效率** 上，#4971 反映会话切换路径过深，影响高频使用体验。

---

## 5. Bug 与稳定性

按严重程度排列（高 → 中 → 低）：

| 严重度 | Issue | 描述 | 版本 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 高 | [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) | 本地部署千问3.6-27B模型对话提交后无响应，仅加载动画，无报错；v1.1.5.post2 正常，v1.1.9/v1.1.10  regression | v1.1.9 / v1.1.10 | 无 |
| 🔴 高 | [#4987](https://github.com/agentscope-ai/QwenPaw/issues/4987) | Coding Mode 下会话切换始终失败，v1.1.9 正常，v1.1.10 regression | v1.1.10 | 无 |
| 🟡 中 | [#4988](https://github.com/agentscope-ai/QwenPaw/issues/4988) | Session 文件名重复拼接导致 Windows `PathTooLongException` | v1.1.10 | 无 |
| 🟡 中 | [#4937](https://github.com/agentscope-ai/QwenPaw/issues/4937) | `/compact` 忽略模型 `max_input_length`，仍用 128K 默认值 | v1.1.10 | 无 |
| 🟡 中 | [#4990](https://github.com/agentscope-ai/QwenPaw/issues/4990) | 企业微信关闭"调用工具信息"后返回固定错误话术 | v1.1.10 | 无 |
| 🟢 低 | [#4985](https://github.com/agentscope-ai/QwenPaw/issues/4985) | 删除文件请求命令显示不换行，需横向滚动查看 | v1.1.10 | 无 |
| 🟢 低 | [#4661](https://github.com/agentscope-ai/QwenPaw/issues/4661) | 上下文压缩按 131K 而非配置 200K/500K 生效（已关闭，但 #4937 显示未根治） | v1.1.8post1 | 无 |

**稳定性评估：** v1.1.10 存在明显的**回归集群**，覆盖核心对话流程（本地模型响应、Coding Mode 会话切换）、跨平台兼容性（Windows 路径）及配置生效机制（上下文压缩）。今日无对应修复 PR，建议维护者优先排查。

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 纳入下一版本可能性 |
|:---|:---|:---|
| [#4886](https://github.com/agentscope-ai/QwenPaw/issues/4886) | 接入 MAX Messenger 渠道 | 中 — 渠道扩展与项目定位一致，但需评估俄语区 API 适配成本 |
| [#4971](https://github.com/agentscope-ai/QwenPaw/issues/4971) | 增加会话栏，减少切换操作路径 | 高 — 纯前端交互优化，实现成本较低，用户高频诉求 |
| [#4986](https://github.com/agentscope-ai/QwenPaw/issues/4986) | Shell 执行/写文件时增加实时交互反馈 | 中 — 对标 Cursor/WorkBuddy，涉及工具执行流改造 |

**信号判断：** 当前社区能量集中于**稳定性修复**而非新功能，维护者若发布 v1.1.11，大概率以修复 v1.1.10 regression 为主。功能请求中 #4971 最可能作为补丁版本的小幅体验优化被纳入。

---

## 7. 用户反馈摘要

**真实痛点：**

- **v1.1.10 升级风险高：** 多名用户反馈升级后出现功能 regression（#4989 本地模型不可用、#4987 Coding Mode 会话切换失效），形成"不敢升级"的负面预期。
- **配置生效不透明：** 上下文长度、压缩阈值等关键参数存在"配置了但不生效"的感知，用户难以判断是配置位置错误还是产品 Bug（#4661、#4937）。
- **企业微信渠道体验差：** 关闭工具调用展示后直接返回固定错误话术，用户无法判断真实失败原因（#4990）。
- **长文本/代码类交互不友好：** 删除命令不换行（#4985）、Shell 执行无实时反馈（#4986），影响开发者场景信任感。

**使用场景：**

- 本地私有化部署（vLLM + 千问3.6-27B）
- 企业微信办公集成
- Windows 桌面端使用
- Coding Mode 编程辅助

**情绪倾向：** 不满集中于 v1.1.10 的稳定性退步；对渠道扩展和交互优化持积极期待。

---

## 8. 待处理积压

今日数据中无长期未响应 Issue（均为 6 月 2 日至 6 月 6 日创建），但以下问题因**影响面广、无修复 PR、且为 regression**，建议维护者 48 小时内优先响应：

| 优先级 | Issue | 原因 |
|:---|:---|:---|
| P0 | [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) | 本地模型完全不可用，阻断私有化部署用户 |
| P0 | [#4987](https://github.com/agentscope-ai/QwenPaw/issues/4987) | Coding Mode 核心功能 regression |
| P1 | [#4988](https://github.com/agentscope-ai/QwenPaw/issues/4988) | Windows 用户路径超限，已给出根因分析，修复成本低 |
| P1 | [#4937](https://github.com/agentscope-ai/QwenPaw/issues/4937) | 上下文压缩配置机制需统一，避免同类问题反复出现 |

**健康度提醒：** 今日 PR 吞吐为 0，而 Bug 报告密度高，建议维护团队尽快恢复代码合入节奏，避免社区反馈积压转化为信任损耗。

---

*日报基于 GitHub 公开 Issues/PR 数据生成，链接已附于各条目。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-06-07

> **项目定位**：AI 智能体与个人 AI 助手领域开源项目  
> **仓库**：https://github.com/qhkm/zeptoclaw  
> **报告日期**：2026-06-07（基于过去24小时数据）

---

## 1. 今日速览

ZeptoClaw 今日维持**低活跃但高度聚焦**的开发节奏。过去24小时内，社区完成1条 Issue 的闭环处理（#612），同时新开1条后续 Issue（#629），形成清晰的迭代链条。唯一活跃的 PR #611 仍处于待合并状态，是今日技术讨论的核心锚点。整体而言，项目正处于**CI 基础设施攻坚期**，全部注意力集中在二进制体积控制这一"机器人部署"战略门槛上，暂无功能代码层面的变动。

| 指标 | 数值 | 健康度 |
|:---|:---|:---|
| Issues 更新 | 2（新开1 / 关闭1） | ⚡ 正常流转 |
| PR 更新 | 1（待合并1） | ⏳ 单点阻塞 |
| 版本发布 | 0 | — |
| 社区互动量 | 低（评论1条，👍0） | 🔵 静默开发期 |

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### ✅ 已关闭：Issue #612 — 二进制体积审计闭环
- **链接**：https://github.com/qhkm/zeptoclaw/issues/612
- **性质**：`chore(perf)` | 优先级 P2-high
- **关键成果**：确认了自 6.2MB 历史低点以来约 **800KB 二进制膨胀**的根因，并将 PR #611 的体积门限从战略目标的 7MB 暂时放宽至 **7.5MB**
- **技术背景**：darwin-arm64 当前 stripped 体积为 6.98MB（距 7MB 仅余 21KB 缓冲），而 Linux x86_64 通常更大，7MB 硬门槛在跨平台场景下不具备安全余量
- **项目意义**：为 PR #611 的合理解释了妥协依据，避免 CI 因平台差异频繁失败，但**明确标记为临时措施**（"tighten gate to 7MB" 标题即体现还债意图）

### ⏳ 推进中：PR #611 — 二进制体积晋升 PR 门限
- **链接**：https://github.com/qhkm/zeptoclaw/pull/611
- **状态**：待合并（创建于 2026-06-01，最后更新 2026-06-06）
- **核心变更**：
  1. 移除 `if:` 守卫条件，使 `binary-size` job 从仅 main 分支推送触发 → **每 PR 必检**
  2. 门限从宽松值收紧至 **7.5MB**
- **当前阻塞**：PR 本身已就绪，但衍生出架构平台覆盖争议（见 Issue #629），可能等待架构对齐后再合并

---

## 4. 社区热点

### 🔥 最热议题：Issue #629 — aarch64 平台门限争议
- **链接**：https://github.com/qhkm/zeptoclaw/issues/629
- **创建者**：@qhkm（项目维护者）
- **核心诉求**：**拆分平台门限** — x86_64 接受 ~10.5MB 现实，aarch64 严守 7MB"机器人护城河"

| 维度 | 分析 |
|:---|:---|
| **技术真相** | PR #611 的 11MB x86_64 门限是"编码器/链接器现实"而非膨胀；真正的嵌入式场景（Pi/Jetson/Apple Silicon）依赖 aarch64 |
| **战略意图** | 维护"6MB 级可上机器人"的产品叙事，避免 x86_64 的体积现实稀释品牌定位 |
| **潜在张力** | 单一 `binary-size` job 可能无法表达平台差异化策略，需 CI 矩阵重构 |

**社区信号**：该 Issue 0 评论、0 👍，表明此为**维护者驱动的架构决策**，尚未引发外部贡献者广泛参与。建议关注后续是否引入 `cargo-bloat` 或按 target triple 拆分 job。

---

## 5. Bug 与稳定性

| 严重程度 | 条目 | 状态 | 说明 |
|:---|:---|:---|:---|
| — | — | — | **今日无 Bug/崩溃/回归报告** |

> 注：二进制体积膨胀（#612 审计的 800KB drift）属于**性能退化**而非功能缺陷，已纳入技术债务追踪。

---

## 6. 功能请求与路线图信号

| 来源 | 内容 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| Issue #629 | 按架构拆分 binary-size 门限（aarch64@7MB / x86_64@11MB） | 🔶 **高** | 维护者自建 Issue，且 PR #611 明确被引用为"已落地但平台覆盖不全" |
| Issue #612 隐含 | 从 7.5MB 进一步收紧至 7MB | 🔶 **中-高** | 标题即承诺 "tighten gate to 7MB"，但依赖体积优化或平台拆分先完成 |

**路线图推断**：下一阶段的 CI 基础设施迭代将围绕**多目标平台矩阵**展开，可能引入：
- `cargo build --target aarch64-unknown-linux-gnu` 独立 job
- 或利用 `matrix.include` 在现有 workflow 中表达差异化门限

---

## 7. 用户反馈摘要

> **今日无外部用户评论可提炼。** 全部 2 条 Issue 及 1 条 PR 均由维护者 @qhkm 创建/更新，呈现**核心团队单点驱动**特征。

**可间接推断的痛点/场景**：
- **嵌入式部署焦虑**："6MB fits on a robot" 反复出现，说明目标用户群体存在**资源受限边缘设备**部署需求（机器人、无人机、工业控制器）
- **跨平台 CI 可信度**：x86_64 与 aarch64 的体积差异被显性化，暗示社区曾遭遇"本地通过、机器人端失败"的发布事故
- **发布节奏谨慎**：PR #611 从创建（06-01）到待合并已逾 6 天，且期间持续调整门限数值，体现对 CI 变更的**保守态度**

---

## 8. 待处理积压

| 条目 | 创建时间 | 最后更新 | 风险等级 | 提醒 |
|:---|:---|:---|:---|:---|
| PR #611 | 2026-06-01 | 2026-06-06 | 🟡 **中等** | 已滞留 6 天，虽为 CI 变更但阻塞后续平台拆分工作。建议：① 明确是否等待 #629 决议后再合并；② 或先合 7.5MB 版本，再通过 follow-up PR 实现 aarch64 特化 |
| — | — | — | — | 整体积压健康，无长期未响应 Issue |

---

## 附录：今日关键链接速查

| 类型 | 编号 | 链接 |
|:---|:---|:---|
| 待合并 PR | #611 | https://github.com/qhkm/zeptoclaw/pull/611 |
| 已关闭 Issue | #612 | https://github.com/qhkm/zeptoclaw/issues/612 |
| 新开 Issue | #629 | https://github.com/qhkm/zeptoclaw/issues/629 |

---

*本日报基于 GitHub 公开数据生成，未包含私有分支或离线讨论信息。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-06-07

> **项目**: [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)  
> **日期**: 2026-06-07  
> **分析周期**: 过去 24 小时

---

## 1. 今日速览

ZeroClaw 今日保持**高强度开发节奏**，50 个 PR 更新（45 个待合并）与 37 个 Issue 更新显示社区极度活跃。核心看点：**WASM 插件生态爆发式增长**——单日涌现 8 个新插件 PR（n8n、ACE-Step、SD-WebUI、Nominatim、LanguageTool、Ollama Embed、RemoveBG），配合插件沙箱硬化与安全加固系列 PR，标志项目正从"功能验证"转向"生产就绪"的插件平台。v0.8.0 发布队列持续推进，安全与稳定性修复密集落地，但高风险的待合并 PR 堆积（45 个）提示 review 带宽可能成为瓶颈。

---

## 2. 版本发布

**无新版本发布**

- 最新 Release 空缺，v0.8.0 仍处于发布队列协调阶段（[#7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112)）

---

## 3. 项目进展

### 已合并/关闭的关键 PR（5 个）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#7334](https://github.com/zeroclaw-labs/zeroclaw/pull/7334) | rifuki | **Telegram 零间隔流式修复**：阻止 `draft_update_interval_ms=0` 导致的编辑洪水攻击 | [#7332](https://github.com/zeroclaw-labs/zeroclaw/issues/7332) |
| [#7281](https://github.com/zeroclaw-labs/zeroclaw/pull/7281) | singlerider | **路径策略假阳性修复**：heredoc 体与非路径 `~` 字符不再触发误拦截 | [#7133](https://github.com/zeroclaw-labs/zeroclaw/issues/7133) |
| [#7297](https://github.com/zeroclaw-labs/zeroclaw/pull/7297) | perlowja | **Webhook 按请求分派**：`POST /webhook?agent=` 支持按查询参数路由至指定 agent | - |
| [#7245](https://github.com/zeroclaw-labs/zeroclaw/pull/7245) | jokewithme110 | **技能系统修复**：`read_skill` 支持加载插件捆绑技能与 bounded skills，重构为 `Arc<Config>` | - |

### 里程碑推进

- **v0.8.0 Stable 队列**（[#7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112)）：配置与工具调用解析器晋升、破坏性变更清理
- **v0.8.1 集成队列**（[#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)）：通道/提供商/工具 PR 路由中
- **v0.8.2 WASM 插件程序**（[#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314)）：组件模型方向、WIT 接口文件
- **v0.8.3 MCP 仪表板**（[#7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320)）：Web/插件管理界面

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---:|:---|:---|
| 1 | [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) 订阅原生 OAuth：Ollama Cloud、z.ai、Kimi、MiniMax | 7 | **消除 API 密钥管理负担**，对标已有 3 家提供商的订阅认证模式 | 🔴 Blocked |
| 2 | [#7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184) RFC：翻译文件迁移至 git submodule | 4 | **隔离翻译变更历史**，减少主仓库噪音 | 🟡 Open |
| 3 | [#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715) 清理主仓库 200+ 废弃分支 | 4 | **仓库卫生治理**，合并后分支堆积 | 🟡 Open |
| 4 | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) OIDC 认证提供商支持（Tracking） | 4 | **企业级身份联邦**，v0.9.0 目标 | 🟡 Accepted |
| 5 | [#6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915) 技能级工具临时提升（已关闭） | 3 | **最小权限原则**：技能执行期间临时激活工具 | ✅ Closed |

### 热点分析

- **#5601** 长期停滞（创建 4 月 10 日，已 2 个月），高优先级安全特性被 block，反映**外部提供商 OAuth 对接的协调复杂度**
- **#7184** 引发架构讨论：i18n 分离是大型项目的典型治理议题，但 submodule 增加贡献者门槛
- **插件生态 vs. 核心安全**形成张力：社区疯狂提交插件 PR，而核心团队聚焦沙箱硬化（#7335-#7337）

---

## 5. Bug 与稳定性

### 今日修复的安全/稳定性问题

| 严重度 | 问题 | 修复 PR | 影响 |
|:---|:---|:---|:---|
| **S0** | [#7252](https://github.com/zeroclaw-labs/zeroclaw/issues/7252) `session/kill` 可从持久历史重新水化已杀死会话 | 已关闭 | 数据丢失/安全绕过 |
| **S0** | [#6978](https://github.com/zeroclaw-labs/zeroclaw/issues/6978) 嵌套 secret 在对象数组中未脱敏 | 已关闭 | 凭证泄露 |
| **S1** | [#7312](https://github.com/zeroclaw-labs/zeroclaw/issues/7312) Bedrock Qwen 第二次提示失败 | **待修复** | 工作流阻断 |
| **S1** | [#7227](https://github.com/zeroclaw-labs/zeroclaw/issues/7227) Quickstart 硬编码 `default` 别名冲突 | 已关闭 | 新用户引导失败 |
| **S2** | [#7332](https://github.com/zeroclaw-labs/zeroclaw/issues/7332) Telegram 零间隔流式编辑洪水 | [#7334](https://github.com/zeroclaw-labs/zeroclaw/pull/7334) ✅ | 性能降级 |
| **S2** | [#7133](https://github.com/zeroclaw-labs/zeroclaw/issues/7133) 路径策略 heredoc 假阳性 | [#7281](https://github.com/zeroclaw-labs/zeroclaw/pull/7281) ✅ | 合法命令被拦截 |
| **S2** | [#7068](https://github.com/zeroclaw-labs/zeroclaw/issues/7068) Telegram 接收 Codex scratchpad 作为最终响应 | 已关闭 | 用户体验劣化 |
| **S2** | [#7126](https://github.com/zeroclaw-labs/zeroclaw/issues/7126) Web UI "Clear all" 仅清前端 | 已关闭 | 会话状态不一致 |
| **S2** | [#7151](https://github.com/zeroclaw-labs/zeroclaw/issues/7151) 可观测性遥测泄漏至聊天 WebSocket | 已关闭 | UI 渲染异常 |
| **S2** | [#7197](https://github.com/zeroclaw-labs/zeroclaw/issues/7197) Windows 工具栏加载慢且弹出 cmd 窗口 | 已关闭 | 平台体验劣化 |

### 待修复风险

- **[#7312](https://github.com/zeroclaw-labs/zeroclaw/issues/7312)** Bedrock Qwen 集成：第二次提示报错 "unsupported model"，**无 PR 关联**，S1 级阻断

---

## 6. 功能请求与路线图信号

### 高优先级功能请求

| 功能 | Issue | 信号强度 | 纳入可能性 |
|:---|:---|:---:|:---|
| **OIDC 认证提供商** | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | ⭐⭐⭐⭐⭐ | v0.9.0 已 Accepted，Tracking Issue 完备 |
| **工具执行期权限强制** | [#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914) | ⭐⭐⭐⭐⭐ | v0.8.x 关键安全缺口，Blocked 待解 |
| **MCP/技能/插件/提供商仪表板** | [#7229](https://github.com/zeroclaw-labs/zeroclaw/pull/7229) | ⭐⭐⭐⭐⭐ | **PR 已开**，XL 规模，web 端管理能力 |
| **通用技能注册表** | [#6143](https://github.com/zeroclaw-labs/zeroclaw/pull/6143) | ⭐⭐⭐⭐☆ | 4 月 PR，需作者动作，可能延期 |
| **订阅原生 OAuth（4 家）** | [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) | ⭐⭐⭐☆☆ | 2 个月无进展，提供商协调复杂 |
| **按技能安全权限** | [#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) | ⭐⭐⭐⭐☆ | Accepted，架构风险高 |
| **Cron/SOP 前置钩子** | [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) | ⭐⭐⭐☆☆ | 轻量级，Blocked 原因不明 |

### 插件生态爆发信号

theonlyhennygod 单日提交 **8 个插件 PR + 3 个插件基础设施 PR**，覆盖：
- **生产力**：n8n 工作流触发 ([#7328](https://github.com/zeroclaw-labs/zeroclaw/pull/7328))
- **创意生成**：ACE-Step 音乐 ([#7331](https://github.com/zeroclaw-labs/zeroclaw/pull/7331))、SD-WebUI 图像 ([#7325](https://github.com/zeroclaw-labs/zeroclaw/pull/7325))、RemoveBG ([#7319](https://github.com/zeroclaw-labs/zeroclaw/pull/7319))
- **本地/隐私优先**：Ollama Embed ([#7324](https://github.com/zeroclaw-labs/zeroclaw/pull/7324))
- **实用工具**：Nominatim 地理编码 ([#7327](https://github.com/zeroclaw-labs/zeroclaw/pull/7327))、LanguageTool 语法检查 ([#7326](https://github.com/zeroclaw-labs/zeroclaw/pull/7326))

配套基础设施：**远程插件注册表** ([#7333](https://github.com/zeroclaw-labs/zeroclaw/pull/7333))、**沙箱隔离**（资源限制/SSRF 防护/环境作用域，[#7335](https://github.com/zeroclaw-labs/zeroclaw/pull/7335)）、**签名验证** ([#7336](https://github.com/zeroclaw-labs/zeroclaw/pull/7336))、**命名空间与限流** ([#7337](https://github.com/zeroclaw-labs/zeroclaw/pull/7337))

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 情绪 |
|:---|:---|:---:|
| **"我设置了仅 Bedrock + Qwen，第一次能算 1+1=2，第二次就报 unsupported model"** | [#7312](https://github.com/zeroclaw-labs/zeroclaw/issues/7312) | 😤 挫败 |
| **"安装 Python 技能要开全局 allow_scripts，等于给所有技能开权限"** | [#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) | 😰 安全焦虑 |
| **"200 多个分支，大多是已合并的，仓库太乱"** | [#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715) | 😤 维护负担 |
| **"Telegram 收到内部 scratchpad 而不是人话回答"** | [#7068](https://github.com/zeroclaw-labs/zeroclaw/issues/7068) | 😵 困惑 |
| **"Web UI 点了 Clear all，刷新后对话还在"** | [#7126](https://github.com/zeroclaw-labs/zeroclaw/issues/7126) | 😤 信任受损 |
| **"Windows 上工具栏弹黑框 cmd，还加载巨慢"** | [#7197](https://github.com/zeroclaw-labs/zeroclaw/issues/7197) | 😤 平台歧视感 |

### 积极信号

- **"~33 个插件已发布，但只能手动拷贝 .wasm"** → 远程注册表 PR ([#7333](https://github.com/zeroclaw-labs/zeroclaw/pull/7333)) 直接响应
- **"自己搭 n8n/SD/ACE-Step/Ollama，不用付费"** → 自托管插件集群明确瞄准隐私敏感用户

---

## 8. 待处理积压

### 需维护者关注的高龄/Blocked 项

| 项目 | 年龄 | 风险 | 行动建议 |
|:---|:---:|:---|:---|
| [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) OAuth 4 家提供商 | **58 天** | 竞品可能抢先支持 | 明确 block 原因（法律 review？技术依赖？） |
| [#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) 按技能权限 | **53 天** | 安全架构债务 | 与 #6914 工具强制合并评估 |
| [#5908](https://github.com/zeroclaw-labs/zeroclaw/issues/5908) Debian 容器 CI/CD | **49 天** | 发布流程缺口 | 容器化是生产部署前提 |
| [#6143](https://github.com/zeroclaw-labs/zeroclaw/pull/6143) 通用技能注册表 | **42 天** | `needs-author-action` | 协调作者或重新分配 |
| [#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715) 分支清理 | **22 天** | 仓库可维护性 | 可自动化：批量删除已合并分支 |
| [#6906](https://github.com/zeroclaw-labs/zeroclaw/issues/6906) Nix flake 改进 | **13 天** | Nix 社区采用 | 明确技术方案分歧 |

### Review 带宽预警

- **45 个待合并 PR** 中，theonlyhennygod 独占 **12 个插件/基础设施 PR**，存在**单点瓶颈**与**串行依赖**（#7335 → #7336/#7337 stacking）
- 建议：拆分插件 PR 的 review 责任（按类别分配维护者），或建立插件快速通道（自动化测试 + 代码所有者机制）

---

> **健康度评分**: 🟢🟢🟢🟡⚪ (7/10)  
> **优势**: 插件生态 momentum 极强，安全修复响应快，里程碑规划清晰  
> **风险**: PR 堆积可能延迟 v0.8.0，Bedrock Qwen 回归未修，核心/插件贡献者比例失衡

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*