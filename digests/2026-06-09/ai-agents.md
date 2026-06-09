# OpenClaw 生态日报 2026-06-09

> Issues: 500 | PRs: 494 | 覆盖项目: 13 个 | 生成时间: 2026-06-09 00:24 UTC

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

# OpenClaw 项目动态日报 | 2026-06-09

---

## 1. 今日速览

OpenClaw 项目今日呈现**高度活跃状态**，24小时内 Issues 更新 500 条（新开/活跃 447，关闭 53）、PR 更新 494 条（待合并 332，已合并/关闭 162），社区参与度极高。版本迭代节奏紧凑，连续发布 `v2026.6.5-beta.3` 和 `v2026.6.5-beta.5` 两个 beta 版本，聚焦 QQBot 内容过滤与 MCP 工具结果规范化。核心风险在于 **P1 级 Bug 积压严重**：OpenAI gpt-5.4/5.5 传输故障、子代理会话泄漏、Steer 模式失效等关键稳定性问题尚未完全收敛，332 个待合并 PR 的审阅队列形成显著瓶颈。

---

## 2. 版本发布

### v2026.6.5-beta.5 & v2026.6.5-beta.3
**发布时间**：2026-06-09 期间连续推送

| 版本 | 核心变更 | 影响面 |
|:---|:---|:---|
| `v2026.6.5-beta.5` | QQBot 剥离模型 reasoning/thinking 脚手架，阻止原始 `<thinking>` 内容泄漏至频道回复；MCP 工具结果强制转换 `resource_link`、`resource`、`audio`、异常图像及未来新类型 | QQ 频道用户、所有 MCP 工具调用场景 |
| `v2026.6.5-beta.3` | 同上 QQBot 修复；MCP 工具结果类型强制转换（初始版本，beta.5 扩展覆盖） | 同上 |

**迁移注意事项**：
- **破坏性变更**：MCP 工具返回的非标准类型将被强制转换，依赖原始类型做下游判断的 Skill 需验证兼容性
- **无需迁移操作**：QQBot 过滤为服务端行为，自动生效
- **相关 Issue**：[#89913](https://github.com/openclaw/openclaw/issues/89913)、[#90132](https://github.com/openclaw/openclaw/issues/90132)

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 状态 | 贡献 |
|:---|:---|:---|:---|
| [#90666](https://github.com/openclaw/openclaw/pull/90666) | ai-hpc | ❌ CLOSED | Cron 活跃任务取消机制（因作者等待中关闭，功能未落地） |
| [#79386](https://github.com/openclaw/openclaw/pull/79386) | draix | ❌ CLOSED | 丢弃 FailoverError 后的中毒 resume ID，阻断 watchdog 级联（需真实行为证明，关闭待重提） |
| [#90507](https://github.com/openclaw/openclaw/pull/90507) | sahibzada-allahyar | ❌ CLOSED | Doctor 迁移保留 Codex 上下文元数据（作者等待中关闭） |
| [#91496](https://github.com/openclaw/openclaw/pull/91496) | RomneyDa | ❌ CLOSED | Codex app-server 升级至 0.137.0（依赖变更待作者更新） |
| [#91365](https://github.com/openclaw/openclaw/pull/91365) | dependabot[bot] | ❌ CLOSED | Android 依赖组更新（作者等待中关闭） |

**实际推进有限**：今日关闭的 162 个 PR 中，高价值功能多因"等待作者"状态关闭，**有效合并率偏低**。核心进展集中于 beta 版本的快速迭代发布。

---

## 4. 社区热点

### 讨论最活跃的 Issues（评论数 Top 5）

| # | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 1 | 集中式文件名编码工具（多编码 Content-Disposition） | 18 | 架构层统一处理 UTF-8/Latin-1/Shift-JIS/EUC-KR/GB18030 等编码，避免各频道适配器碎片化修复 | [#48788](https://github.com/openclaw/openclaw/issues/48788) |
| 2 | Control UI 要求设备身份（HTTPS/localhost 安全上下文） | 17 | Docker/VPS 部署场景下的 HTTPS 配置指导与回退方案 | [#32473](https://github.com/openclaw/openclaw/issues/32473) |
| 3 | OpenAI gpt-5.4/5.5 传输失败 `invalid_provider_content_type` | 15 | **P1 阻塞**：2026.6.1 升级后核心模型无法调用，影响生产环境 | [#90083](https://github.com/openclaw/openclaw/issues/90083) |
| 4 | 社区 Skill 开发与 ClawHub 生态建设 | 15 | 降低 Skill 发布门槛，建立可持续的社区贡献机制 | [#50090](https://github.com/openclaw/openclaw/issues/50090) |
| 5 | 代理回复历史消息而非当前消息（会话上下文混淆） | 14 | **P1 阻塞**：多轮对话状态漂移，严重影响交互可靠性 | [#32296](https://github.com/openclaw/openclaw/issues/32296) |

### 高热度 PR（待审阅关键项）

| PR | 说明 | 风险标记 | 链接 |
|:---|:---|:---|:---|
| [#88245](https://github.com/openclaw/openclaw/pull/88245) | WhatsApp 入站消息上下文重构（XL 规模） | 🚨 兼容性、消息投递 | [查看](https://github.com/openclaw/openclaw/pull/88245) |
| [#85104](https://github.com/openclaw/openclaw/pull/85104) | Fast Talks 自动模式 | 🚨 兼容性、认证、消息投递 | [查看](https://github.com/openclaw/openclaw/pull/85104) |
| [#91308](https://github.com/openclaw/openclaw/pull/91308) | xAI 实时语音提供商 | 🚨 兼容性、消息投递、安全边界 | [查看](https://github.com/openclaw/openclaw/pull/91308) |

**诉求分析**：社区核心焦虑集中在**多语言/多编码正确性**（国际化部署）、**生产环境稳定性**（gpt-5.x 支持、会话状态）、**生态可持续性**（ClawHub 建设）三大维度。

---

## 5. Bug 与稳定性

### P1 级（生产阻塞）

| Issue | 描述 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| #90083 | OpenAI gpt-5.4/5.5 Responses 传输失败 `invalid_provider_content_type` | 开放，需实时复现 | ❌ 无 | [#90083](https://github.com/openclaw/openclaw/issues/90083) |
| #32296 | 代理回复历史消息（会话上下文混淆） | 开放，需维护者审阅 | ❌ 无 | [#32296](https://github.com/openclaw/openclaw/issues/32296) |
| #41744 | 飞书：read 图像工具结果在最终出站前丢失媒体 | 开放，有 PR 链接 | ⚠️ PR 开放中 | [#41744](https://github.com/openclaw/openclaw/issues/41744) |
| #48003 | Steer 模式未向主会话注入消息 | 开放，有 PR 链接 | ⚠️ PR 开放中 | [#48003](https://github.com/openclaw/openclaw/issues/48003) |
| #51396 | `clearUnboundScopes` 无条件剥离非本地 token-auth 客户端的操作员作用域 | 开放，安全审查待进行 | ❌ 无 | [#51396](https://github.com/openclaw/openclaw/issues/51396) |
| #43367 | 多代理编排不稳定：并发配置覆盖、会话锁失败、分离子工作 | 开放，需产品决策 | ❌ 无 | [#43367](https://github.com/openclaw/openclaw/issues/43367) |
| #49876 | Cron 会话工具失败时产生幻觉输出而非干净失败 | 开放，安全审查待进行 | ❌ 无 | [#49876](https://github.com/openclaw/openclaw/issues/49876) |

### P2 级（显著影响）

| Issue | 描述 | 关键标签 | 链接 |
|:---|:---|:---|:---|
| #32473 | Control UI HTTPS 安全上下文要求 | `impact:auth-provider`, `regression` | [#32473](https://github.com/openclaw/openclaw/issues/32473) |
| #48573 | 嵌入式运行会话状态泄漏——僵尸代理持久化 | `impact:session-state` | [#48573](https://github.com/openclaw/openclaw/issues/48573) |
| #44993 | 心跳/Cron "当前时间" 时间戳陈旧不刷新 | `regression` | [#44993](https://github.com/openclaw/openclaw/issues/44993) |
| #85888 | MiniMax 503 过载——仅定时任务失败，手动触发成功 | `clawsweeper:queueable-fix` | [#85888](https://github.com/openclaw/openclaw/issues/85888) |
| #51429 | **Hardcode 工作路径 `/Users/wangtao`** | `bug:behavior` | [#51429](https://github.com/openclaw/openclaw/issues/51429) |

**稳定性评估**：🔴 **高风险**。P1 Bug 中 6 项无明确 fix PR，会话状态管理（#32296, #48003, #48573, #43367, #47975）形成系统性风险集群。今日 beta 版本未触及这些核心问题。

---

## 6. 功能请求与路线图信号

### 高可行性（已有 PR 或明确路径）

| 功能 | 状态 | 信号强度 | 链接 |
|:---|:---|:---:|:---|
| **Skill 优先级配置** | Issue 开放，社区需求明确 | ⭐⭐⭐⭐⭐ | [#50199](https://github.com/openclaw/openclaw/issues/50199) |
| **Fast Talks 自动模式** | PR #85104 待证明 | ⭐⭐⭐⭐⭐ | [#85104](https://github.com/openclaw/openclaw/pull/85104) |
| **xAI 实时语音提供商** | PR #91308 待作者更新 | ⭐⭐⭐⭐☆ | [#91308](https://github.com/openclaw/openclaw/pull/91308) |
| **WhatsApp 列表回复动作** | PR #83600 待维护者审阅 | ⭐⭐⭐⭐☆ | [#83600](https://github.com/openclaw/openclaw/pull/83600) |
| **频道回声/会话固定** | PR #88815 待作者更新 | ⭐⭐⭐☆☆ | [#88815](https://github.com/openclaw/openclaw/pull/88815) |

### 中长期方向

| 功能 | 核心诉求 | 阻碍 | 链接 |
|:---|:---|:---|:---|
| 按代理成本预算强制执行（网关层） | 防止失控支出 | 需产品决策、安全审查 | [#42475](https://github.com/openclaw/openclaw/issues/42475) |
| 内置 Skill 安装安全扫描 | 36% Skill 含安全缺陷（Snyk 2026） | 需集成第三方或自建扫描 | [#45031](https://github.com/openclaw/openclaw/issues/45031) |
| YAML 配置格式支持 | DevOps 可读性 | P3 优先级，资源竞争 | [#45758](https://github.com/openclaw/openclaw/issues/45758) |
| MathJax/LaTeX Control UI 支持 | 科学/数学内容展示 | 5 👍 社区支持度高 | [#42840](https://github.com/openclaw/openclaw/issues/42840) |

**下一版本预测**：`v2026.6.5` 正式版 likely 包含 QQBot/MCP 修复 + Fast Talks 自动模式；实时语音、WhatsApp 交互增强或推迟至 `v2026.7.x`。

---

## 7. 用户反馈摘要

### 🔴 核心痛点

| 场景 | 原声引用 | 关联 Issue |
|:---|:---|:---|
| **模型升级即故障** | "After upgrading to OpenClaw 2026.6.1... OpenAI/ChatGPT Responses inference fails" | #90083 |
| **会话状态不可预测** | "Agent replies to previous message instead of current message" | #32296 |
| **部署配置陷阱** | "I can't find how to solve this [HTTPS requirement]" | #32473 |
| **定时任务不可靠** | "Cron jobs consistently fail... manual triggers succeed" | #85888 |
| **编码问题碎片化** | "PR #48578 fixes the most common case... a proper architectural solution should handle multiple encodings" | #48788 |

### 🟡 体验摩擦

| 场景 | 反馈 | 关联 |
|:---|:---|:---|
| Control UI 代理选择 | "The Agents page hid every agent behind a single `<select>`" → 已提 PR #91520 | [#57067](https://github.com/openclaw/openclaw/issues/57067) |
| 工具卡片默认折叠 | "Tool cards remain collapsed even with verboseDefault=full" | #49944 |
| 内存管理混乱 | "I never see any of our memory is managed in same way" | #43747 |

### 🟢 积极信号

- **社区 Skill 生态意愿强烈**："Skills are how OpenClaw grows beyond what ships in the box" (#50090)
- **多频道覆盖价值认可**：WhatsApp/Telegram/Discord/飞书全链路需求活跃

---

## 8. 待处理积压

### ⚠️ 长期 stale 高优先级 Issue（>90 天无 fix PR）

| Issue | 创建日期 | 天数 | 风险 | 行动建议 |
|:---|:---|:---:|:---|:---|
| #32296 会话上下文混淆 | 2026-03-02 | **99天** | 核心交互断裂 | 指派核心维护者，关联 #48003 统一修复 |
| #32473 Control UI HTTPS 要求 | 2026-03-03 | **98天** | 部署门槛 | 文档补充 + 自动检测降级方案 |
| #41744 飞书图像丢失 | 2026-03-10 | **91天** | 媒体功能残缺 | 催促关联 PR 更新 |
| #43367 多代理编排不稳定 | 2026-03-11 | **90天** | 企业级场景阻塞 | 产品决策会议 |
| #42475 成本预算网关强制 | 2026-03-10 | **91天** | 商业化必需 | 路线图确认 |

### PR 审阅队列瓶颈

| 规模 | 数量 | 风险 |
|:---|:---:|:---|
| XL (>500 行) | 至少 4 个 | 审阅周期长，易冲突 |
| 待合并总数 | **332** | 累积技术债务 |

**维护者行动建议**：
1. **紧急**：建立 P1 Bug 快速通道，#32296/#90083/#48003 需本周内 owner 分配
2. **短期**：清理"等待作者"超过 14 天的 PR，释放审阅带宽
3. **中期**：针对会话状态管理问题集群（#32296, #48003, #48573, #43367, #47975, #50165）组织专项修复

---

*日报生成时间：2026-06-09 | 数据来源：GitHub openclaw/openclaw 公开活动流*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析 | 2026-06-09

---

## 1. 生态全景

个人 AI 助手开源生态正处于**架构迁移与生产就绪的阵痛期**：头部项目（OpenClaw、IronClaw、ZeroClaw）日均处理 50+ Issues/PR，但合并率普遍低于 35%，审阅瓶颈成为共性约束；多项目同步推进"Reborn/2.0"级架构升级（IronClaw ProductWorkflow、CoPaw AgentScope 2.0），同时会话状态管理、MCP 生态治理、安全默认配置构成三大技术债务集群；中小项目（NanoClaw、TinyClaw、Moltis、ZeptoClaw）活跃度断崖式分化，部分进入维护静默期，生态集中度提升信号明显。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 合并/关闭 | 待合并 | 新版本 | 健康度评估 |
|:---|:---:|:---:|:---:|:---:|:---|:---|
| **OpenClaw** | 500 (新开/活跃 447, 关闭 53) | 494 | 162 | **332** | v2026.6.5-beta.3/5 | 🔴 **高风险** — P1 Bug 积压 6 项无 PR，审阅队列严重阻塞 |
| **IronClaw** | 33 (活跃 19, 关闭 14) | 50 (处理 24, 待 26) | 24 | 26 | 无 (0.29.1 发布悬置 24 天) | 🟡 **承压** — Reborn 迁移最后集成阶段，0.29.1 回归风险待解 |
| **ZeroClaw** | 50 (关闭 1) | 50 (处理 11, 待 **39**) | 11 | **39** | 无 | 🟡 **高活跃低吞吐** — 39:11 待合并比为今日最高，S0/S1 修复率偏低 |
| **CoPaw** | 49 (活跃 26, 关闭 23) | 45 (处理 23, 待 22) | 23 | 22 | 无 | 🟢 **健康** — 生产问题响应快，插件生态战略清晰 |
| **Hermes Agent** | 50 (处理 5) | 50 (处理 5) | 各 5 | 45 | 无 (v0.16.0) | 🟡 **高谈低合** — 10% 合流率，v0.16.0 稳定性问题集中暴露 |
| **NanoBot** | 8 (活跃 4, 关闭 4) | 37 (处理 15, 待 22) | 15 | 22 | 无 | 🟢 **良好** — 安全响应 <3 天，转录子系统架构升级完成 |
| **PicoClaw** | 3 (关闭 1) | 18 (处理 9, 待 9) | 9 | 9 | v0.2.9-nightly | 🟢 **稳健** — 防御性修复主导，v0.2.9 RC 质量巩固期 |
| **LobsterAI** | 0 | 18 (处理 17, 待 1) | 17 | 1 | 无 | 🟢 **高效** — 唯一待合并为 Electron 大版本升级，stale PR 清零 |
| **NanoClaw** | 1 | 3 (处理 2, 待 1) | 2 | 1 | 无 | 🟡 **低活跃** — 安全主线明确，WhatsApp 多模态阻断需紧急响应 |
| **TinyClaw** | 0 | 1 (待 1) | 0 | 1 | 无 | ⚪ **静默** — 24h 零活动，维护者响应速度存疑 |
| **NullClaw** | 0 | 0 | 0 | 0 | 无 | ⚪ **停滞** — 完全无活动 |
| **Moltis** | 0 | 0 | 0 | 0 | 无 | ⚪ **停滞** — 完全无活动 |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | 无 | ⚪ **停滞** — 完全无活动 |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | 绝对领先：Issues/PR 数量级（500/494）为第二名 10 倍 | IronClaw/ZeroClaw/Hermes 约 50 量级；NanoBot/CoPaw 中等；其余 <20 |
| **技术路线** | **"全频道覆盖 + Skill 插件市场"** 的广度优先策略 | IronClaw 聚焦 **Reborn 多租户架构**；ZeroClaw 强调 **安全分级与本地优先**；CoPaw 绑定 **AgentScope 平台生态** |
| **核心优势** | 频道适配器生态最完整（QQ/Discord/Telegram/飞书/WhatsApp 全链路）；ClawHub Skill 市场初具规模 | 对比 Hermes 的 Teams/Outlook 缺失、PicoClaw 的国内 IM 薄弱、NanoBot 的微信通道脆弱 |
| **结构性风险** | **P1 Bug 集群（会话状态管理）与审阅队列（332 待合并）形成负反馈循环** | IronClaw 类似（Reborn 迁移债务），但 ZeroClaw/CoPaw 的合并吞吐更健康 |
| **差异化标签** | "中国的 Discord Bot + 个人助手"混合体，QQ 频道深度集成是独特壁垒 | LobsterAI 对标 Cursor 桌面体验；NanoBot 强调隐私/本地模型路由 |

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---:|
| **会话状态管理** | OpenClaw (#32296, #48003, #48573)、NanoBot (#4242)、ZeroClaw (#6361)、CoPaw (#4970, #4873) | 上下文漂移、历史注入泄漏、子 Agent 轮询失控、JSON 损坏致全局崩溃 | 🔴 **P0** |
| **MCP 生态治理** | OpenClaw (beta.3/5 强制类型转换)、CoPaw (#4834 进程泄漏, #4918 工具名合规)、ZeroClaw (#6699 前缀匹配失效)、NanoBot (#4074 SSRF) | 工具结果规范化、子进程生命周期、安全边界、延迟加载 | 🔴 **P0** |
| **安全默认配置** | NanoClaw (#2714 四合一修复, #2713 egress 锁闭争议)、ZeroClaw (#7142 可插拔安全层, #7155 Shell 分级)、Hermes (#27997 声明式策略)、OpenClaw (#51396 token-auth 剥离) | 从"可选加固"转向"默认安全"，企业合规审计 | 🟡 **P1** |
| **多模态原生支持** | CoPaw (#4992 视觉模型 fallback, #4895 图片压缩循环)、NanoClaw (#2715 WhatsApp 媒体不可达)、NanoBot (#4251 WebUI 上传)、OpenClaw (beta.5 图像/音频类型转换) | 容器-宿主机路径映射、前端原生上传、视觉模型解耦 | 🟡 **P1** |
| **模型路由灵活性** | NanoBot (#4253 对话级覆盖)、ZeroClaw (Local-First 小模型 #5287)、IronClaw (fallback_model reasoning_effort #42447)、OpenClaw (Skill 优先级 #50199) | 隐私/成本/速度场景化切换，非全局静态配置 | 🟡 **P1** |
| **桌面/本地体验** | LobsterAI (本地回调登录 #2122, 数据迁移 #2125)、Hermes (Desktop 状态丢失 #42401, 时间戳 #42409)、NanoBot (WebUI 版本显示 #4235) | 消除浏览器弹窗、跨设备数据可移植性、窗口管理 | 🟢 **P2** |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构特征 |
|:---|:---|:---|:---|
| **OpenClaw** | 多频道 Bot + Skill 市场 | 国内开发者、QQ/Discord 社群运营者 | Node.js 单体，频道适配器插件化，MCP 工具桥接 |
| **IronClaw** | 企业多租户 Agent 平台 | SaaS 运营商、企业 IT | Rust 核心 + ProductWorkflow 编排，Reborn 架构迁移中 |
| **ZeroClaw** | 安全分级 + 本地优先 | 隐私敏感用户、企业合规场景 | Rust/WASI 插件接口，MemoryStrategy 解耦，Shell 分级确认 |
| **CoPaw** | 平台化插件生态 + 微信/企业微信 | 中国中小企业、AgentScope 平台用户 | Python 绑定 AgentScope 2.0，前端插件扩展点设计 |
| **Hermes Agent** | 跨平台桌面 + Cron 自动化 | 个人生产力用户、多平台管理者 | Tauri/Electron 桌面，独立 cron 守护进程，多 profile 工作流 |
| **NanoBot** | 隐私优先 + 转录生态 | 中文用户、低资源部署者 | Python 异步，转录提供商抽象层，OpenRouter 动态路由 |
| **LobsterAI** | 桌面精致体验 + 数据可移植 | 竞品迁移用户（Cursor/VS Code） | Electron + 本地回调服务器，tar 归档迁移，动态模型发现 |
| **PicoClaw** | 嵌入式/边缘部署 | Sipeed RISC-V 硬件用户、IoT 开发者 | Go 轻量运行时，Agent 热重载，nightly 快速迭代 |
| **NanoClaw** | 容器化安全隔离 | 金融/医疗等敏感行业 | Docker 内部网络 egress 控制，v2 架构容器化回归 |
| **TinyClaw** | 极简本地优先 | 隐私极客、离线场景 | Node.js + better-sqlite3 本地数据库，近乎停滞 |

---

## 6. 社区热度与成熟度

| 层级 | 项目 | 特征 | 阶段判断 |
|:---|:---|:---|:---|
| **第一梯队：快速迭代** | OpenClaw、IronClaw、ZeroClaw、CoPaw | 日均 45+ PR，架构级变更并行，合并瓶颈显著 | **扩张期 → 治理转型期** |
| **第二梯队：质量巩固** | NanoBot、PicoClaw、LobsterAI | 15-20 PR/日，防御性修复主导，合并率 >60% | **巩固期** |
| **第三梯队：瓶颈突破** | Hermes Agent | 高提交低合流（10%），v0.16.0 稳定性债务集中 | **发布后的修复阵痛期** |
| **第四梯队：维护静默** | NanoClaw、TinyClaw | <5 PR/日，核心功能阻断待解，维护者响应慢 | **生存风险期** |
| **第五梯队：停滞观察** | NullClaw、Moltis、ZeptoClaw | 零活动 | **可能归档或重启** |

---

## 7. 值得关注的趋势信号

| 趋势 | 信号来源 | 对开发者的价值 |
|:---|:---|:---|
| **"安全默认"成为合规硬门槛** | NanoClaw #2713 关闭争议、ZeroClaw #7141/#7142/#7155 RFC 密集、OpenClaw #51396 安全审查待进行 | 企业部署需预置审计追踪、最小权限、网络隔离，而非事后补丁；"默认开放"设计哲学正在被淘汰 |
| **MCP 从"工具客户端"向"完整协议"演进** | ZeroClaw #4467 Resource/Prompt 支持高票、CoPaw #5014 进程治理、OpenClaw beta.5 类型强制转换 | MCP 生态将分化为"轻量工具调用"和"知识库/提示词管理"两轨，后者是下一个差异化战场 |
| **会话状态管理成为系统性工程挑战** | 6 个项目同时出现上下文漂移/泄漏/崩溃，OpenClaw 形成 5+ Issue 集群 | 简单的消息数组已不足够，需引入形式化状态机、校验和、降级熔断机制 |
| **"对话级模型覆盖"取代全局配置** | NanoBot #4253、IronClaw #42447、OpenClaw #50199 | 用户拒绝为"隐私任务"和"快速任务"维护多个 Agent 实例，动态路由是刚需 |
| **桌面登录体验成为产品分水岭** | LobsterAI #2122 本地回调、Hermes #42401 状态丢失、OpenClaw #32473 HTTPS 陷阱 | 浏览器 OAuth → 嵌入式登录 → 无感认证的三级跳，直接影响首次激活转化率 |
| **RISC-V/边缘部署的真实需求浮现** | PicoClaw #2887 22 天 stale、ZeroClaw #5287 Local-First 小模型 | ARM 之后的下一架构战场，但工具链成熟度（CGO/OpenSSL 交叉编译）严重滞后 |
| **"学习循环/自主进化"从噱头走向架构需求** | CoPaw #5017 对标 Hermes、Hermes #27997 Skill Protection、OpenClaw #50090 ClawHub 生态 | Agent 不再满足于"执行指令"，社区期待技能自优化、经验沉淀、安全约束下的自主迭代 |

---

*分析基准日期：2026-06-09 | 数据来源：各项目 GitHub 公开活动流*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-06-09

> **项目**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)  
> **分析日期**: 2026-06-09（基于过去24小时数据）  
> **数据周期**: 2026-06-08 至 2026-06-09

---

## 1. 今日速览

NanoBot 今日保持**高活跃度开发节奏**：24小时内处理 **37 个 PR**（合并/关闭 15，待审 22）和 **8 个 Issues**（关闭 4，活跃 4），无新版本发布。核心进展集中在**转录系统扩展**（AssemblyAI、小米 MiMo ASR 上线）、**安全加固**（SSRF 修复、符号链接逃逸防护）和**WebUI 体验优化**（版本显示、实时更新提醒）。项目整体健康度良好，代码审查吞吐量大，但待合并 PR 积压达 22 个，需关注审阅带宽。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#4175](https://github.com/HKUDS/nanobot/pull/4175) | zpljd258 | **小米 MiMo ASR 转录提供商**：新增 `xiaomi_mimo` 作为中文语音识别后端，补齐多语言 STT 能力 | ✅ 已合并 |
| [#4224](https://github.com/HKUDS/nanobot/pull/4224) | franciscomaestre | **AssemblyAI 转录提供商**：保守型低资源语音转文字选项，丰富转录系统生态 | ✅ 已合并 |
| [#4217](https://github.com/HKUDS/nanobot/pull/4217) | axelray-dev | **OpenAI 兼容提供商 `extra_query` 配置**：解决 Azure 网关 `api-version` 参数注入需求，关闭 [#4204](https://github.com/HKUDS/nanobot/issues/4204) | ✅ 已合并 |
| [#4219](https://github.com/HKUDS/nanobot/pull/4219) | yu-xin-c | **会话历史修剪安全性**：在边界修剪前丢弃孤儿工具结果，修复工具调用状态不一致 | ✅ 已合并 |
| [#4221](https://github.com/HKUDS/nanobot/pull/4221) | yu-xin-c | **Exec 工具沙箱加固**：阻止相对符号链接逃逸工作目录，修复 [#4072](https://github.com/HKUDS/nanobot/issues/4072) | ✅ 已合并 |
| [#4232](https://github.com/HKUDS/nanobot/pull/4232) | Re-bin | **共享语音输入**：将转录从频道级提升为全局能力，支持 WebUI 和桌面端语音输入 | ✅ 已合并 |
| [#4235](https://github.com/HKUDS/nanobot/pull/4235) | JiajunBernoulli | **WebUI 版本显示**：设置页展示当前版本及 PyPI 更新检测，关闭 [#4233](https://github.com/HKUDS/nanobot/issues/4233) | ✅ 已合并 |

**整体推进评估**：转录子系统完成从"频道插件"到"核心能力"的架构升级（[#4232](https://github.com/HKUDS/nanobot/pull/4232)），安全模型覆盖 SSRF、符号链接逃逸、工具状态不一致三类攻击面，企业级部署就绪度显著提升。

---

## 4. 社区热点

### 高讨论议题

| 议题 | 类型 | 热度信号 | 核心诉求分析 |
|:---|:---|:---|:---|
| [#4253](https://github.com/HKUDS/nanobot/issues/4253) **按对话覆盖模型** | Issue | 新提交，隐私/成本敏感场景 | 用户需在 **OpenRouter（快/贵）↔ 本地 llama.cpp（慢/免费/私密）** 间动态切换。反映多模型策略从"全局配置"向"场景化路由"演进的需求 |
| [#4251](https://github.com/HKUDS/nanobot/issues/4251) **输入框上传文件/图片** | Issue | 已关闭，中文用户 | 多模态交互刚需：PDF 总结、图像解析。当前需通过频道（微信/飞书）间接实现，WebUI 原生支持缺位 |
| [#4170](https://github.com/HKUDS/nanobot/pull/4170) **IMAP 邮件后处理** | PR | 评论最多（undefined 实际活跃） | 企业邮箱自动化场景：nanobot 作为"邮箱主操作员"需自动归档/删除已处理邮件，避免 inbox 堆积 |

**诉求洞察**：社区正从"能用"向"企业级托管"和"多模态原生"两方向延伸，模型路由灵活性成为高级用户核心痛点。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | Issue/PR | 状态 | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | **禁用 `dream.enabled` 后历史注入泄漏**：关闭 dream 后 `.dream_cursor` 停滞，导致完整聊天历史通过 Recent History 注入系统提示词，造成上下文污染和 token 浪费 | [#4242](https://github.com/HKUDS/nanobot/issues/4242) | 🔄 待修复（PR [#4256](https://github.com/HKUDS/nanobot/pull/4256) 已提交） | 所有禁用 dream 的实例 |
| 🟡 **中** | **Telegram 消息分割破坏代码块**：`split_message` 在围栏代码块内硬截断，导致 HTML 渲染错误 | [#4250](https://github.com/HKUDS/nanobot/issues/4250) | 🔄 修复中（PR [#4257](https://github.com/HKUDS/nanobot/pull/4257) 已提交） | Telegram 长消息场景 |
| 🟡 **中** | **微信会话过期死循环**：token 过期暂停 60 分钟后未重载 `account.json`，永久静默 | PR [#4223](https://github.com/HKUDS/nanobot/pull/4223) | 🔄 待合并 | 微信频道长期运行实例 |
| 🟢 **低** | **MCP HTTP/SSE SSRF 验证时序**：loopback 连接在拒绝前已尝试建立 | [#4074](https://github.com/HKUDS/nanobot/issues/4074) | ✅ 已关闭 | 安全合规审计 |

**修复响应速度**：高危问题 [#4242](https://github.com/HKUDS/nanobot/issues/4242) 24小时内即有配套 PR，安全类问题平均关闭时间 < 3 天，响应效率优秀。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 可行性信号 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| **对话级模型覆盖** | [#4253](https://github.com/HKUDS/nanobot/issues/4253) | 架构上需扩展配置作用域，与现有 preset 系统冲突 | ⭐⭐⭐ 中等（需设计评审） |
| **WebUI 文件/图片上传** | [#4251](https://github.com/HKUDS/nanobot/issues/4251) | 多模态基础设施已有（频道支持），需前端 + API 扩展 | ⭐⭐⭐⭐ 较高（PR 就绪后可快速跟进） |
| **WebUI 版本徽章 + PyPI 实时提醒** | PR [#4255](https://github.com/HKUDS/nanobot/pull/4255) | 直接扩展已合并的 [#4235](https://github.com/HKUDS/nanobot/pull/4235)，技术债低 | ⭐⭐⭐⭐⭐ 高（已提交 PR） |
| **跨 Agent 消息总线** | PR [#3992](https://github.com/HKUDS/nanobot/pull/3992) | 大型架构变更，测试覆盖完整但审阅复杂度高 | ⭐⭐⭐ 中等（积压 16 天，需维护者决策） |
| **上下文压力驱动的微压缩** | PR [#4238](https://github.com/HKUDS/nanobot/pull/4238) | 重构 AgentRunner 治理逻辑，影响核心路径 | ⭐⭐⭐⭐ 较高（性能优化优先级） |

---

## 7. 用户反馈摘要

### 痛点
- **"我知道 `/status`，但 UI 里找不到版本"** —— [#4233](https://github.com/HKUDS/nanobot/issues/4233) 作者 viblo，反映 CLI/HTTP API 与 WebUI 信息架构割裂
- **"上传 PDF 总结、解析图片意思"** —— [#4251](https://github.com/HKUDS/nanobot/issues/4251) 作者 JFPURE，多模态需求被迫通过"频道绕路"
- **"隐私任务用本地模型，快速任务用 OpenRouter"** —— [#4253](https://github.com/HKUDS/nanobot/issues/4253) 作者 rombert，模型切换成本打断工作流

### 满意点
- **转录提供商生态快速扩展**：小米 MiMo、AssemblyAI、OpenRouter 一周内集中上线，中文用户和低资源场景覆盖到位
- **安全响应及时**：SSRF、符号链接逃逸等问题 3 天内关闭并附回归测试

---

## 8. 待处理积压

| 类型 | 条目 | 创建时间 | 积压天数 | 风险说明 |
|:---|:---|:---|:---|:---|
| PR | [#3992](https://github.com/HKUDS/nanobot/pull/3992) 跨 Agent 消息总线 | 2026-05-24 | **16 天** | 大型架构 PR，阻塞多 Agent 协作场景商业化 |
| PR | [#4170](https://github.com/HKUDS/nanobot/pull/4170) IMAP 邮件后处理 | 2026-06-03 | **6 天** | 企业邮箱自动化刚需，评论活跃但无维护者响应 |
| PR | [#4193](https://github.com/HKUDS/nanobot/pull/4193) 内存生命周期测试框架 | 2026-06-04 | **5 天** | 测试基础设施，影响后续可靠性迭代速度 |
| PR | [#4053](https://github.com/HKUDS/nanobot/pull/4053) 只读根目录写入保护 | 2026-05-29 | **11 天** | 安全加固，与 [#4221](https://github.com/HKUDS/nanobot/pull/4221) 同属 Exec 沙箱系列，需合并形成完整防护 |
| PR | [#4119](https://github.com/HKUDS/nanobot/pull/4119) 符号链接逃逸修复（替代方案） | 2026-05-31 | **9 天** | 与已合并 [#4221](https://github.com/HKUDS/nanobot/pull/4221) 功能重叠，需确认是否关闭或合并差异 |

**维护者行动建议**：优先审阅 [#3992](https://github.com/HKUDS/nanobot/pull/3992)（路线图级功能）和 [#4170](https://github.com/HKUDS/nanobot/pull/4170)（企业场景），清理 [#4119](https://github.com/HKUDS/nanobot/pull/4119) 与 [#4221](https://github.com/HKUDS/nanobot/pull/4221) 的冗余关系。

---

> **日报生成时间**: 2026-06-09  
> **数据截止**: 2026-06-08 23:59 UTC  
> **下次建议关注**: PR [#4256](https://github.com/HKUDS/nanobot/pull/4256) 合并进度（dream 历史泄漏修复）、PR [#4257](https://github.com/HKUDS/nanobot/pull/4257) 代码审查（Telegram 代码块分割）

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-06-09

---

## 1. 今日速览

过去24小时 Hermes Agent 社区保持**高活跃度**：Issues 与 PR 各更新 50 条，但**关闭/合并比例仅 10%**（各 5 条），显示社区讨论热烈但代码合流速度偏慢。今日无新版本发布，核心工作集中在 **v0.16.0 稳定性修复**（Desktop、gateway、TUI、API server）与 **安全/隐私问题** 的紧急修补。值得关注的是，多个 PR 同时涉及 API server 的 session key 隔离、插件上下文传递、Claude worker 认证加固，表明项目正从"功能扩展"转向"企业级多租户安全"的深水区。

---

## 2. 版本发布

**无新版本发布。**

最新版本仍为 v0.16.0（2026.6.5），今日未发布 patch。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 进展 | 链接 |
|:---|:---|:---|:---|
| **#41372** / **#40882** | alaamohanad169-ship-it | 修复 `hermes model` 向导误覆盖 `model.base_url` 的问题，新增"设为默认"确认提示，避免配置损坏 | [PR #41372](https://github.com/NousResearch/hermes-agent/pull/41372) · [PR #40882](https://github.com/NousResearch/hermes-agent/pull/40882) |
| **#41363** / **#41167** | alaamohanad169-ship-it | 新增 `hermes cron daemon` 独立守护进程模式，使 cron 无需依赖 gateway 即可运行，解决 Windows/无服务场景调度失效 | [PR #41363](https://github.com/NousResearch/hermes-agent/pull/41363) · [PR #41167](https://github.com/NousResearch/hermes-agent/pull/41167) |
| **#42308** | ruangraung | 修复 Telegram 工具进度消息编辑时的 MarkdownV2 格式问题，关联安全泄漏修复 #41955、#41732 | [PR #42308](https://github.com/NousResearch/hermes-agent/pull/42308) |

**整体推进评估**：今日合并以**配置可靠性**和**部署灵活性**为主，独立 cron 守护进程是运维体验的重要进步；但大量高优先级 bugfix PR 仍在排队，合流瓶颈明显。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 1 | **#27997** Declarative Skill Protection Policy | 7 | 技能保护规则分散在 6+ 文件且执行不一致，`skill_manager_tool.py` 存在高危缺口，要求集中式声明式策略 | [Issue #27997](https://github.com/NousResearch/hermes-agent/issues/27997) |
| 2 | **#34457** s6-log lock collision 无限循环 | 6 | gateway + dashboard 共享卷场景下，s6-log 锁冲突导致 dashboard sidecar 亚秒级崩溃循环 | [Issue #34457](https://github.com/NousResearch/hermes-agent/issues/34457) |
| 3 | **#30399** Docker 镜像无法使用 Matrix gateway | 6 | 缺少 `mautrix[encryption]` 包，且只读 rootfs 无法临时安装 | [Issue #30399](https://github.com/NousResearch/hermes-agent/issues/30399) |
| 4 | **#9512** Microsoft Teams gateway 支持 | 6 | 要求原生 Teams 适配器，避免外部桥接 | [Issue #9512](https://github.com/NousResearch/hermes-agent/issues/9512) |
| 5 | **#42130** OpenRouter 认证头丢失 | 4 | 已配置凭证但请求未带 Authentication header，**今日已关闭** | [Issue #42130](https://github.com/NousResearch/hermes-agent/issues/42130) |

### 背后诉求分析

- **企业集成饥渴**：Teams (#9512)、Outlook/Graph (#25979) 高频出现，反映 Windows/Office 365 生态用户占比上升，但 Hermes 的微软适配明显落后于 Slack/Discord/Telegram。
- **部署健壮性焦虑**：Docker (#30399, #34457)、macOS plist (#42376)、Windows 环境诊断 (#41933) 同时爆发，v0.16.0 的跨平台打包质量承压。
- **安全策略债务**：#27997 直指技能系统的"保护规则碎片化"，属于架构级技术债务，评论数最高说明维护者和社区都意识到其严重性。

---

## 5. Bug 与稳定性

按严重程度排列，标注修复状态：

### P2（中高严重）

| Issue | 描述 | 状态 | 链接 |
|:---|:---|:---|:---|
| **#34457** | s6-log lock collision 导致 gateway+dashboard 共享卷场景无限崩溃循环 | ❌ 待修复 | [Issue #34457](https://github.com/NousResearch/hermes-agent/issues/34457) |
| **#30399** | Docker 镜像缺少 Matrix 加密依赖，只读 rootfs 无法补救 | ❌ 待修复 | [Issue #30399](https://github.com/NousResearch/hermes-agent/issues/30399) |
| **#36845** | Cron 脚本超时后被 LLM fallback 标记为 `last_status=ok`，生产监控失效 | ❌ 待修复 | [Issue #36845](https://github.com/NousResearch/hermes-agent/issues/36845) |
| **#42376** | `hermes gateway restart/install` 在 macOS 26.5.1 生成含 `LimitLoadToSessionType` 的 plist，导致 `launchctl bootstrap` 失败 | ❌ 待修复 | [Issue #42376](https://github.com/NousResearch/hermes-agent/issues/42376) |
| **#42405** | Memory 容量满时 `replace` 零匹配进入静默重试循环，无响应 | ❌ 待修复 | [Issue #42405](https://github.com/NousResearch/hermes-agent/issues/42405) |
| **#42362** | Discord slash 命令可用但确认按钮在无 allowlist 时返回"not authorized" | ❌ 待修复 | [Issue #42362](https://github.com/NousResearch/hermes-agent/issues/42362) |
| **#41955** | Gateway 工具进度向聊天泄漏原始 shell 命令/代码体（安全回归） | ✅ 已有关联 PR #42308 合并 | [Issue #41955](https://github.com/NousResearch/hermes-agent/issues/41955) |
| **#41732** | Discord 紧凑模式泄漏终端命令为代码块 | ✅ 已有关联 PR #42308 合并 | [Issue #41732](https://github.com/NousResearch/hermes-agent/issues/41732) |

### P3（一般严重）

| Issue | 描述 | 状态 | 链接 |
|:---|:---|:---|:---|
| **#41898** | Desktop + NVIDIA NIM 时助手回复闪一下就消失 | ❌ 待修复 | [Issue #41898](https://github.com/NousResearch/hermes-agent/issues/41898) |
| **#42267** | Gateway stop/restart 通知硬编码英文，绕过 i18n | ❌ 待修复 | [Issue #42267](https://github.com/NousResearch/hermes-agent/issues/42267) |
| **#42256** | Desktop composer 粘贴 Excel 多列数据插入 `\t` 导致排版混乱 | ❌ 待修复 | [Issue #42256](https://github.com/NousResearch/hermes-agent/issues/42256) |
| **#42270** | `hermes --tui /model` 硬上限 50 条模型，NVIDIA NIM 等大目录被截断 | ❌ 待修复 | [Issue #42270](https://github.com/NousResearch/hermes-agent/issues/42270) |
| **#42433** | Desktop Cron 视图不渲染 script/no_agent 任务，运行历史空白 | ❌ 待修复 | [Issue #42433](https://github.com/NousResearch/hermes-agent/issues/42433) |
| **#42409** | Desktop Artifacts 时间戳全部显示为 1970 年 1 月（秒级 epoch 传入毫秒 Date） | ❌ 待修复 | [Issue #42409](https://github.com/NousResearch/hermes-agent/issues/42409) |
| **#42401** | Desktop 切换页面时未发送的 prompt 被丢弃 | ❌ 待修复 | [Issue #42401](https://github.com/NousResearch/hermes-agent/issues/42401) |
| **#42422** | Desktop 删除 live Discord session 后自动复活 | ❌ 待修复 | [Issue #42422](https://github.com/NousResearch/hermes-agent/issues/42422) |
| **#42102** | `openai-codex auth add` 只能创建 `oauth-1`，无法添加多个 | ❌ 待修复 | [Issue #42102](https://github.com/NousResearch/hermes-agent/issues/42102) |
| **#40101** | mnemosyne-hermes 插件正确注册入口点但未被识别 | ❌ 待修复 | [Issue #40101](https://github.com/NousResearch/hermes-agent/issues/40101) |
| **#42306** | Langfuse GENERATION spans 缺少 usage/token/cost，无 post-LLM hook | ✅ 已关闭 | [Issue #42306](https://github.com/NousResearch/hermes-agent/issues/42306) |
| **#42130** | OpenRouter 凭证配置后请求未带认证头 | ✅ 已关闭 | [Issue #42130](https://github.com/NousResearch/hermes-agent/issues/42130) |

### 关键安全修复

| PR | 描述 | 链接 |
|:---|:---|:---|
| **#41446** | tirith 二进制 SIGSEGV 崩溃时返回负退出码，原代码误判为未知码并持续重试；现检测信号杀死进程并禁用该二进制 | [PR #41446](https://github.com/NousResearch/hermes-agent/pull/41446) |

---

## 6. 功能请求与路线图信号

| Issue/PR | 内容 | 纳入可能性评估 | 链接 |
|:---|:---|:---|:---|
| **#27997** | 声明式 Skill Protection Policy | **高** — 架构级安全债务，社区共识强，需维护者牵头设计 | [Issue #27997](https://github.com/NousResearch/hermes-agent/issues/27997) |
| **#9512** | Microsoft Teams gateway | **中** — 企业需求明确，但已有大量平台适配器维护负担，需评估是否优先于现有 gateway 债务 | [Issue #9512](https://github.com/NousResearch/hermes-agent/issues/9512) |
| **#25979** | `productivity/outlook` skill (Graph API) | **高** — 作者已有生产实现并愿 upstream，与 #9512 形成微软生态组合拳 | [Issue #25979](https://github.com/NousResearch/hermes-agent/issues/25979) |
| **#38357** | Desktop sidebar 显示所有 profile 的 sessions | **中高** — 多 profile 工作流痛点，改动面可控 | [Issue #38357](https://github.com/NousResearch/hermes-agent/issues/38357) |
| **#4581** | `read_file` 支持返回无行号的原始内容 | **中** — 工具输出格式长期争议，可能需新增参数保持兼容 | [Issue #4581](https://github.com/NousResearch/hermes-agent/issues/4581) |
| **#41988** | 自定义本地模型 provider 的默认采样参数 | **中高** — 本地部署场景（mlx-vlm/llama.cpp/vLLM）日益重要，配置缺口明显 | [Issue #41988](https://github.com/NousResearch/hermes-agent/issues/41988) |
| **#41979** | Gateway 附件持久化 | **中** — 15+ 平台已支持接收但无持久化，属于"功能完成度"问题 | [Issue #41979](https://github.com/NousResearch/hermes-agent/issues/41979) |
| **#42388** | 解耦 background-review fork 的写入权限与触发条件 | **高** — 安全架构改进，与 #27997 同属技能系统权限治理 | [Issue #42388](https://github.com/NousResearch/hermes-agent/issues/42388) |
| **#40259** | Telegram clarify 按钮显示选择文本而非纯数字 | **中** — UX 优化，改动小，适合快速合入 | [Issue #40259](https://github.com/NousResearch/hermes-agent/issues/40259) |
| **#42447** | fallback_model 链支持 per-entry `reasoning_effort` | **中高** — 已有 PR，直接回应企业级模型路由需求 | [PR #42447](https://github.com/NousResearch/hermes-agent/pull/42447) |
| **#42416** | 插件 hook 传递 session 上下文 | **高** — 已有 PR，是插件生态Stateful化的基础设施 | [PR #42416](https://github.com/NousResearch/hermes-agent/pull/42416) |
| **#42439** | Email 入站响应路由到 Discord | **中** — 跨平台桥接创新场景，但需评估维护边界 | [PR #42439](https://github.com/NousResearch/hermes-agent/pull/42439) |

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 |
|:---|:---|
| **"我已经在终端装好了工具，Hermes 还是报缺失"** — Windows 环境检查与 PATH 感知不一致，核心依赖（Node/npm/rg/ffmpeg/agent-browser）安装体验挫败 | #41933 |
| **"打好的 prompt 切个设置页就没了"** — Desktop 状态持久化基本功缺失 | #42401 |
| **"NVIDIA NIM 模型列表被截到 50 个，找不到要的模型"** — TUI 硬编码限制阻碍大目录 provider | #42270 |
| **"Discord 里满屏都是 bash 代码块"** — 工具进度泄漏严重干扰群聊体验 | #41732, #41955 |
| **"Cron 任务明明脚本超时了，状态却是 ok"** — 监控可信度危机 | #36845 |
| **"Memory 满了之后直接没反应了"** — 静默失败比报错更可怕 | #42405 |

### 满意/期待点

- 社区对 **clarify 工具** 认可度高，但希望 Telegram 等移动端渲染更友好 (#40259)
- **多 profile 工作流** 有深度用户，期待 Desktop 更好的跨 profile 会话管理 (#38357)
- 有用户已基于 Hermes 构建生产级 Outlook skill 并愿意贡献，显示上游吸引力 (#25979)

---

## 8. 待处理积压

以下 Issue/PR 创建较早、更新持续但尚未关闭，提醒维护者优先关注：

| 项目 | 创建 | 最后更新 | 风险 | 链接 |
|:---|:---:|:---:|:---|:---|
| **#27997** Skill Protection Policy | 2026-05-18 | 2026-06-08 | 已持续 22 天，涉及安全架构，评论最多但无 PR | [Issue #27997](https://github.com/NousResearch/hermes-agent/issues/27997) |
| **#34457** s6-log lock collision | 2026-05-29 | 2026-06-08 | 13 天，影响官方 Docker 栈稳定性 | [Issue #34457](https://github.com/NousResearch/hermes-agent/issues/34457) |
| **#30399** Matrix Docker 不可用 | 2026-05-22 | 2026-06-08 | 18 天，平台支持声明与实际镜像不符 | [Issue #30399](https://github.com/NousResearch/hermes-agent/issues/30399) |
| **#9512** Microsoft Teams | 2026-04-14 | 2026-06-08 | **56 天**，企业集成高票需求 | [Issue #9512](https://github.com/NousResearch/hermes-agent/issues/9512) |
| **#4581** read_file 无行号模式 | 2026-04-02 | 2026-06-08 | **68 天**，开发者体验基础问题 | [Issue #4581](https://github.com/NousResearch/hermes-agent/issues/4581) |
| **#35677** TUI `/sessions` 显示历史会话 | 2026-05-31 | 2026-06-09 | 9 天，PR 已开但待合并 | [PR #35677](https://github.com/NousResearch/hermes-agent/pull/35677) |
| **#41446** tirith 安全崩溃处理 | 2026-06-07 | 2026-06-09 | 2 天，P1 安全 PR，需加速 review | [PR #41446](https://github.com/NousResearch/hermes-agent/pull/41446) |

---

**日报结语**：Hermes Agent 今日呈现"高活跃、低合流"特征。v0.16.0 发布后的稳定性问题正在集中暴露，Desktop 和 gateway 是重灾区；同时，API server 的多租户隔离、插件上下文、安全策略等架构级改进密集出现，表明项目正在向更严肃的生产部署演进。建议维护者短期内优先合入 P1/P2 安全与崩溃修复，中长期需对微软生态集成、Windows 安装体验、技能权限架构做出路线图回应。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-06-09

> **项目**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw) | **日期**: 2026-06-09 | **分析师**: AI 智能体与开源项目分析

---

## 1. 今日速览

PicoClaw 今日呈现**高活跃度、高质量修复**的稳健发展态势。过去24小时共处理 **18 个 PR（合并/关闭 9 个，待审 9 个）** 和 **3 个 Issues（关闭 1 个）**，代码审查吞吐量大。核心亮点包括：DeltaChat 新网关进入代码审查、Telegram 地理位置消息长期忽略问题终获修复、以及由 `chengzhichao-xydt` 主导的大规模代码健壮性整治（单日提交 7+ 个防御性修复 PR）。项目发布 **v0.2.9-nightly.20260608** 夜间构建，显示 v0.2.9 正式版临近。整体健康度：**良好**，但 Matrix `allow_from` 身份验证缺陷和 RISC-V 平台 .deb 包兼容性问题仍需关注。

---

## 2. 版本发布

### 🔖 Nightly Build: v0.2.9-nightly.20260608.875cf4a2

| 属性 | 详情 |
|:---|:---|
| **标签** | `nightly` |
| **构建时间** | 2026-06-08 |
| **Commit** | `875cf4a2` |
| **稳定性警告** | ⚠️ 自动化构建，可能不稳定，谨慎使用 |
| **完整变更日志** | [compare/v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) |

**迁移与使用建议**：
- 当前 nightly 基于 `v0.2.9` 分支，表明 **v0.2.9 正式版已进入 RC 阶段**
- 生产环境建议等待正式版；测试环境可验证近期合并的 Telegram 地理位置修复、Agent 循环稳定性改进等
- 从 v0.2.8 升级需关注 Agent 重载行为变更（见 PR #2904）

---

## 3. 项目进展

### ✅ 今日合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#3052](https://github.com/sipeed/picoclaw/pull/3052) | wzg-gie | **Telegram 地理位置消息支持** | 终结了"位置消息被静默丢弃"的长期缺陷，补齐 Telegram 通道能力短板 |
| [#3050](https://github.com/sipeed/picoclaw/pull/3050) | chengzhichao-xydt | 统一结构化日志替换 `log.Printf`/`fmt.Printf` | 可观测性基础设施升级，消除生产环境日志散落问题 |
| [#3051](https://github.com/sipeed/picoclaw/pull/3051) | chengzhichao-xydt | 全链路错误包装改用 `%w` | 修复 `errors.Is`/`errors.As` 链断裂，提升下游错误处理能力 |
| [#3055](https://github.com/sipeed/picoclaw/pull/3055) ~ [#3058](https://github.com/sipeed/picoclaw/pull/3058) | chengzhichao-xydt | 4 个防御性类型断言修复 + `os.Getwd` 错误处理 | 系统性消除 panic 风险点，代码健壮性显著提升 |
| [#3018](https://github.com/sipeed/picoclaw/pull/3018) | chengzhichao-xydt | LINE 通道与 Evolution store 的类型安全修复 | 关闭累积的技术债务 |
| [#3062](https://github.com/sipeed/picoclaw/pull/3062) | trufae | 健康检查状态修复 | 已关闭，可能因方案调整或重复提交 |

**整体里程碑判断**：v0.2.9 版本聚焦于 **"稳定性加固 + 通道能力补全"**，今日合并的 9 个 PR 中 **7 个为防御性/可靠性修复**，显示项目从功能扩张期进入**质量巩固期**。

---

## 4. 社区热点

### 🔥 讨论最活跃的议题

| 排名 | 议题 | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 🥇 | [#2887](https://github.com/sipeed/picoclaw/issues/2887) RISC-V .deb 包 OpenAI 模型不工作 | **9 条评论** | **跨平台兼容性痛点**。RISC-V 生态用户增长信号明显，但 Debian 包存在运行时依赖缺陷（可能为 CGO/OpenSSL 或架构特定编译问题）。创建 22 天仍开放，用户持续追加环境信息，维护者需介入 |
| 🥈 | [#3015](https://github.com/sipeed/picoclaw/issues/3015) Windows QQ 通道连接失败 | **2 条评论** | **企业/国内 IM 集成需求**。QQ 通道 `bots.qq.com` Token 获取超时，Windows 特定问题，Pico 通道正常说明非网络全局问题，可能为 Windows 版 HTTP 客户端/代理配置差异 |

**诉求洞察**：
- **#2887**：RISC-V 作为 Sipeed 核心硬件生态（RISC-V 开发板厂商），.deb 包兼容性直接影响品牌承诺，需 P0 级响应
- **#3015**：国内开发者对 QQ 通道有明确需求，但第三方 Bot 平台认证流程脆弱，需更完善的错误诊断日志

---

## 5. Bug 与稳定性

### 🐛 今日 Bug 与修复状态

| 严重程度 | 问题 | 状态 | Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|
| **P1-高** | RISC-V Debian 包 OpenAI 模型完全不可用 | 🔴 开放，stale | 无 | RISC-V + Debian 用户，阻断 AI 功能 |
| **P1-高** | Windows QQ 通道 Token 获取超时 | 🔴 开放 | 无 | Windows + QQ Bot 用户，通道无法启动 |
| **P2-中** | Telegram 地理位置消息被静默忽略 | 🟢 **已修复** | [#3052](https://github.com/sipeed/picoclaw/pull/3052) | 所有 Telegram 用户，功能缺失 |
| **P2-中** | Agent 循环重载后 goroutine 泄漏 + panic 清理不稳定 | 🟡 修复中 | [#2904](https://github.com/sipeed/picoclaw/pull/2904)（开放，19天） | 长运行 Agent 实例，内存泄漏风险 |
| **P2-中** | Windows 启动器子进程控制台窗口闪烁 | 🟡 修复中 | [#3061](https://github.com/sipeed/picoclaw/pull/3061)（开放） | Windows GUI 模式用户，体验问题 |
| **P3-低** | 多处 unchecked type assertion 潜在 panic | 🟢 **批量修复** | [#3056](https://github.com/sipeed/picoclaw/pull/3056)-[#3058](https://github.com/sipeed/picoclaw/pull/3058), [#3018](https://github.com/sipeed/picoclaw/pull/3018) | 边缘场景稳定性 |
| **P3-低** | 健康检查始终返回 not ready | ⚪ 已关闭 | [#3062](https://github.com/sipeed/picoclaw/pull/3062) | 运维监控误报 |

**稳定性趋势**：今日通过 7+ 个防御性修复，系统性降低了 **sync.Map 类型断言 panic、HTTP 资源泄漏、错误链断裂** 三类风险。但 **两个 P1 平台特定问题（RISC-V/Windows）缺乏维护者响应**，可能损害用户信心。

---

## 6. 功能请求与路线图信号

### 🚀 新功能动态

| PR/Issue | 类型 | 纳入 v0.2.9 概率 | 分析 |
|:---|:---|:---|:---|
| [#3063](https://github.com/sipeed/picoclaw/pull/3063) **DeltaChat 网关** | 新通道 | ⭐⭐⭐⭐ 高 | 已提交 PR，文档完整，符合"去中心化/隐私优先"趋势；若代码审查通过，可能成为 v0.2.9 亮点功能 |
| [#3045](https://github.com/sipeed/picoclaw/pull/3045) Matrix `allow_from` 冒号处理 | 协议兼容修复 | ⭐⭐⭐⭐⭐ 极高 | 修复标准 Matrix ID 格式解析错误，直接影响身份验证安全，预计快速合并 |

**路线图信号**：
- **通道生态扩张**：DeltaChat（去中心化邮件式消息）加入，与现有 Telegram、LINE、QQ、Pico 形成覆盖**隐私极客-国内用户-企业用户**的矩阵
- **v0.3.0 可能方向**：Agent 运行时热重载稳定性（#2904 长期开放）、多模态消息支持（地理位置已启动，图片/文件待跟进）

---

## 7. 用户反馈摘要

### 💬 真实用户痛点提炼

| 来源 | 用户场景 | 痛点 | 满意度信号 |
|:---|:---|:---|:---|
| [#2887](https://github.com/sipeed/picoclaw/issues/2887) | RISC-V 开发板（Sipeed 硬件）运行 Debian，使用 OpenAI 最新模型 | **"安装包可用，但 AI 功能完全失效"** — 平台支持承诺与实际体验落差 | 😞 低：22天无修复，用户持续自证环境 |
| [#3015](https://github.com/sipeed/picoclaw/issues/3015) | Windows 部署 QQ Bot 用于社群管理 | **"Pico 通道正常，QQ 通道 timeout"** — 第三方平台集成脆弱，错误信息不足 | 😐 中：功能可用但调试困难 |
| [#3049](https://github.com/sipeed/picoclaw/issues/3049) | Raspberry Pi + Telegram 收集用户地理位置 | **"发送位置后完全无反应，无日志"** — 静默失败最难调试 | 😞→🙂 **已修复**：用户获得明确文本转换格式 |
| [#3063](https://github.com/sipeed/picoclaw/pull/3063) 隐含 | 隐私敏感用户寻求 Signal/邮件替代 | DeltaChat 需求出现，去中心化通信协议受关注 | 🙂 高：社区主动贡献 PR |

**关键洞察**：用户最不满的是 **"静默失败"**（无日志、无错误）和 **"平台承诺未兑现"**（RISC-V 包）。今日修复的 Telegram 地理位置问题正是典型——问题存在但用户无从知晓原因。

---

## 8. 待处理积压

### ⏰ 需要维护者关注的高龄/重要事项

| 项目 | 年龄 | 风险 | 建议行动 |
|:---|:---|:---|:---|
| [#2887](https://github.com/sipeed/picoclaw/issues/2887) RISC-V .deb OpenAI 失效 | **23 天**，stale 标签 | 🔴 **品牌声誉风险**：Sipeed 作为 RISC-V 硬件厂商，自家软件包在自家架构上失效 | 维护者分配 RISC-V 环境复现，优先于 v0.2.9 发布 |
| [#2904](https://github.com/sipeed/picoclaw/pull/2904) Agent 循环重载稳定性 | **20 天**，开放 | 🟡 内存泄漏 + panic 恢复缺陷，影响生产长运行实例 | 代码审查完成度评估，是否需拆分合并 |
| [#3015](https://github.com/sipeed/picoclaw/issues/3015) Windows QQ 超时 | **3 天**，但企业用户敏感 | 🟡 国内 IM 生态关键路径 | 请求用户补充 `-v` 调试日志，确认是 DNS/代理/证书问题 |
| [#3045](https://github.com/sipeed/picoclaw/pull/3045) Matrix allow_from 修复 | **2 天**，开放 | 🟢 安全相关，但修复清晰 | **建议 24h 内合并**，阻断标准 Matrix ID 的误拦截 |

---

## 附录：今日数据仪表盘

```
Issues:      3 更新  ├─ 开放/活跃: 2  ├─ 关闭: 1
PRs:        18 更新  ├─ 待合并: 9    ├─ 已合并/关闭: 9
Releases:    1 (nightly)
核心贡献者:  chengzhichao-xydt (8 PRs), trufae (2 PRs), SiYue-ZO (2 PRs)
```

> **明日关注**：DeltaChat PR #3063 审查进度、RISC-V 问题维护者响应、v0.2.9 正式版发布时间表。

---

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-06-09

> 项目地址: [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)  
> 分析周期: 2026-06-08 至 2026-06-09

---

## 1. 今日速览

NanoClaw 今日活跃度**中等偏低**，24小时内产生 **1 条 Issue** 和 **3 条 PR**（2 已关闭/合并，1 待审阅）。项目重心明显偏向**安全加固**：两份安全相关 PR 占据当日流量，其中 egress 网络隔离方案已关闭（可能因设计取舍未合并），而综合安全修复包仍在开放评审。WhatsApp 媒体附件的容器挂载路径问题成为唯一新增 Bug，直接影响 v2 版本的多模态 Agent 能力。无新版本发布，整体处于"修固期"而非"功能扩张期"。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已关闭 PR

| PR | 作者 | 状态 | 进展说明 |
|:---|:---|:---|:---|
| [#2713](https://github.com/nanocoai/nanoclaw/pull/2713) `feat(security): egress lockdown` | omri-maya | **CLOSED** | 提出可选的出站网络锁闭方案：将 Agent 容器置于 Docker `--internal` 网络，强制流量经 OneCLI 网关代理。该 PR 虽关闭，但为社区提供了"零信任网络架构"的参考实现，可能以修订形式回归。 |
| [#2712](https://github.com/nanocoai/nanoclaw/pull/2712) `[follows-guidelines] pull request` | juhojeon86 | **CLOSED** | 模板化 PR，无实质代码变更，按贡献指南规范关闭。 |

### 待合并 PR

| PR | 作者 | 状态 | 评审要点 |
|:---|:---|:---|:---|
| [#2714](https://github.com/nanocoai/nanoclaw/pull/2714) `security: fix four auth/security issues` | JorellDakasin | **OPEN** | 一次性修复 4 处安全漏洞，涵盖 webhook 绑定、随机数生成、认证逻辑。需优先审阅，建议拆分或补充 CVE 关联评估。 |

**整体推进评估**：安全基建成为当前主线，但 #2713 的关闭暗示网络隔离方案存在架构争议（可能与"默认关闭"的设计哲学冲突，或影响第三方集成灵活性）。

---

## 4. 社区热点

| 条目 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|
| [#2714](https://github.com/nanocoai/nanoclaw/pull/2714) `security: fix four auth/security issues` | 新建待审，👍×0 | **安全合规焦虑**：企业级部署用户需要可审计的安全修复，而非"默认不安全+可选加固"。`Math.random()` 用于审批 ID 的漏洞表明代码审计深度不足，社区期待系统性安全策略而非单点修补。 |
| [#2713](https://github.com/nanocoai/nanoclaw/pull/2713) `egress lockdown` | 已关闭，👍×0 | **网络零信任需求**：金融/医疗等敏感场景用户希望"默认拒绝出站"，但项目当前选择"默认开放+可选锁闭"。关闭可能反映维护者对易用性优先于安全性的产品定位。 |

**诉求洞察**：社区存在明显的"安全优先" vs "易用优先"张力。两份安全 PR 的差异化命运（关闭 vs 开放）表明项目尚未明确安全策略的激进程度。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#2715](https://github.com/nanocoai/nanoclaw/issues/2715) | **WhatsApp 入站媒体不可达**：附件下载至 `DATA_DIR/attachments`（宿主机路径），但 Agent 容器内收到 `/workspace/attachments/...` 路径，导致图像/文档/音频完全无法处理。v2 版本多模态能力**实质不可用**。 | **无** | 所有使用 WhatsApp 渠道 + 媒体消息的 v2 部署 |

**根因分析**：存储卷挂载配置与路径注入逻辑脱节，属于 v2 架构迁移中的容器化回归问题。该 Bug 阻断多模态 Agent 的核心场景（视觉理解、文档分析），需紧急修复。

---

## 6. 功能请求与路线图信号

| 来源 | 信号 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| #2713 (已关闭) | 可选出站网络隔离 | ⭐⭐⭐☆☆ 中低 | 设计争议大，但安全需求真实；可能以简化版或插件形式回归 |
| #2714 (开放) | 默认安全加固（webhook 绑定、加密随机数） | ⭐⭐⭐⭐⭐ 极高 | 无破坏性变更，修复明确漏洞，预计快速合并 |
| #2715 (隐含需求) | 统一存储抽象层 / 容器-宿主机路径映射配置 | ⭐⭐⭐⭐☆ 高 | 属于 v2 架构债务，必须解决以支撑多模态路线图 |

**下一版本预测**：安全修复包 (#2714) 极可能进入近期补丁版本；WhatsApp 媒体路径问题 (#2715) 若获快速响应，或触发 v2.0.x 紧急修复版。

---

## 7. 用户反馈摘要

> 基于 Issue 描述直接提炼，无评论数据时聚焦报告者视角

| 痛点 | 场景 | 情绪 |
|:---|:---|:---|
| **"Agent 成了瞎子/聋子"** | WhatsApp 用户发送截图、PDF、语音后，Agent 无法感知内容，对话中断 | 😤 沮丧 — 核心功能承诺未兑现 |
| **安全默认配置不可信** | 企业用户发现 webhook 监听 `0.0.0.0`、审批 ID 可预测，担心合规审计 | 😰 焦虑 — 生产环境风险敞口 |
| **安全与易用的两难** | 希望锁闭出站网络的用户，面对"默认关闭"的开关感到被忽视 | 😕 失望 — 安全作为二等公民 |

**满意点**：项目安全社区活跃，漏洞发现到 PR 响应周期短（同日创建）。

---

## 8. 待处理积压

> 本日新增即需关注项，历史积压需补充数据

| 条目 | 滞留时间 | 风险 | 行动建议 |
|:---|:---|:---|:---|
| [#2715](https://github.com/nanocoai/nanoclaw/issues/2715) WhatsApp 媒体不可达 | **<24h（但阻断核心功能）** | v2 多模态能力信誉受损；用户可能回退 v1 或弃用 | 🔴 **P0 紧急**：指派存储/容器模块维护者，确认 `DATA_DIR` 挂载规范与 Agent 工作目录的映射关系 |
| [#2714](https://github.com/nanocoai/nanoclaw/pull/2714) 四合一安全修复 | <24h | 漏洞细节公开后可能被利用 | 🟡 **P1 高优**：48h 内完成评审，建议拆分独立 commit 便于回滚 |

---

## 附录：数据健康度指标

| 指标 | 数值 | 评估 |
|:---|:---|:---|
| Issue 平均响应时间 | 待观察（新创建） | — |
| PR 合并率 | 66% (2/3 已关闭，含 1 未合并) | 安全方案 #2713 未合并，需关注关闭原因 |
| 社区参与度 | 👍 总计 0，评论 0 | 偏低，可能反映用户基数小或议题过于技术内部 |
| 安全相关流量占比 | 67% (2/3 PR) | 🔒 安全成为当前主导话题 |

---

*日报生成时间: 2026-06-09*  
*数据源: GitHub API / 项目公开活动流*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-06-09

## 1. 今日速览

IronClaw 今日呈现**高强度开发态势**，50 个 PR 更新（26 待合并/24 已处理）与 33 个 Issue 更新（19 活跃/14 关闭）显示核心团队正全力推进 **Reborn 架构迁移**。OpenAI 兼容 API 全面接入 ProductWorkflow（#4495、#4546、#4552）、LLM 工具调用规范化（#4576、#4583）以及触发器投递默认机制重构（#4574、#4581）构成今日三大主线。生产稳定性方面，Google Calendar 时间筛选、Codex 模型发现等用户-facing Bug 已快速修复，但 Telegram 会话断裂（#4556）和托管代理 403 问题（#4557）仍需紧急关注。

---

## 2. 版本发布

**无新版本发布**

> 注：PR #3708（chore: release）自 5 月 16 日起持续开放，计划将 `ironclaw` 从 0.24.0 升级至 **0.29.1**，含 `ironclaw_common` 0.5.0 和 `ironclaw_skills` 0.4.0 等破坏性变更。该发布分支今日仍有更新，预计即将合并。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（24 条中的核心项）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#4576](https://github.com/nearai/ironclaw/pull/4576) | henrypark133 | `ToolCall` 新增 `arguments_parse_error` 字段 | **LLM 工具调用可观测性基础设施**，为 Phase C 的 `NormalizingProvider` 强制规范化铺路 |
| [#4572](https://github.com/nearai/ironclaw/pull/4572) | henrypark133 | `planner` 子代理风味替代 `researcher`，`spawn_subagent` 参数重设计 | **Reborn 子代理架构定型**，结构化计划输出替代自由格式研究 |
| [#4578](https://github.com/nearai/ironclaw/pull/4578) | BenKurrek | Google Calendar `list_events` 默认 `timeMin=now` | 修复"查询 upcoming meetings 返回 2021 年事件"的生产痛点 |
| [#4566](https://github.com/nearai/ironclaw/pull/4566) | BenKurrek | Codex `client_version` 自动探测，解锁 gpt-5.5 等新模型 | 消除硬编码版本导致的**模型发现静默失败** |
| [#4523](https://github.com/nearai/ironclaw/pull/4523) / [#4575](https://github.com/nearai/ironclaw/pull/4575) | matiasbenary | `TenantId`/`UserId` `\x1fSYSTEM\x1f` sentinel 序列化/反序列化对称修复 | **系统级作用域 JSON 往返稳定性**，LLM 设置 API 可用性恢复 |
| [#4528](https://github.com/nearai/ironclaw/pull/4528) | serrrfirat | Slack host-beta 工作流状态持久化 | 多通道场景下的**幂等性与投递可靠性**基础设施 |
| [#4574](https://github.com/nearai/ironclaw/pull/4574) | henrypark133 | 作用域外发投递默认值模型 | 触发器自动化从"个人默认"演进至"个人/共享代理双轨默认" |

**架构里程碑**：Reborn OpenAI 兼容 API 三件套（Chat Completions / Responses / SSE 流式翻译）全部进入待合并队列（#4495、#4546、#4552），标志着 **v1 网关向 ProductWorkflow 的迁移进入最后集成阶段**。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| Issue | 评论 | 核心诉求 | 分析 |
|:---|:---|:---|:---|
| [#3283](https://github.com/nearai/ironclaw/issues/3283) | 3 | OpenAI 兼容 Chat/Responses API 迁移至 Reborn | **架构债务清偿的顶层设计**，serrrfirat 持续跟踪的 P2 史诗，今日被 #4495/#4546/#4552 实质性推进 |
| [#4175](https://github.com/nearai/ironclaw/issues/4175) | 3 | ProductAuth 生产后端与 OAuth PKCE HA 安全 | 身份认证是 Reborn 生产就绪的**硬门槛**，henrypark133 的系列 PR（#4161、#4174）后的剩余阻塞项 |
| [#3957](https://github.com/nearai/ironclaw/issues/3957) | 2 | 第三方 Hook 激活加固（安全审查前置） | **多租户生产的安全闸门**，zmanian 主导的 hook 子系统安全审计闭环 |
| [#3959](https://github.com/nearai/ironclaw/issues/3959) | 2 | `SecurityAuditSink` 剩余边界点采纳 | 与 #3957 形成"阻断决策留存"而非仅追踪的安全策略落地 |
| [#3958](https://github.com/nearai/ironclaw/issues/3958) | 2 → **已关闭** | Hook 组合可维护性重构（hooks.rs 拆分） | 技术债务清理完成，>1k 行文件模块化 |
| [#4488](https://github.com/nearai/ironclaw/issues/4488) | 2 → **已关闭** | `ProductWorkflow` 显式三入口（submit/read/subscribe） | **效果边界架构定型**，为 OpenAI API 接入奠定门面基础 |

**社区信号**：Reborn 核心贡献者（serrrfirat、henrypark133、zmanian、think-in-universe）形成**高度协同的模块认领模式**，史诗级 Issue 被系统性地拆分为可并行 PR，显示成熟的分布式架构治理。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 现象 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **P0-生产中断** | [#4556](https://github.com/nearai/ironclaw/issues/4556) | Telegram 升级 0.28.2→0.29.1 后**新建会话而非延续历史对话** | 无 | **待修复** — 用户上下文丢失，升级阻断 |
| 🔴 **P0-服务不可用** | [#4557](https://github.com/nearai/ironclaw/issues/4557) | 托管代理返回 `403 Forbidden [nearai-prod]`，实例仍显示 RUNNING | 无 | **待修复** — 自动恢复后根因未明，需深度调查 |
| 🟡 **P1-功能缺陷** | [#4548](https://github.com/nearai/ironclaw/issues/4548) | DeepSeek 请求含重复 `model` 字段导致 400 | 无 | **待修复** — 工具调用时序列化逻辑错误 |
| 🟡 **P1-功能缺陷** | [#4577](https://github.com/nearai/ironclaw/issues/4577) → **已关闭** | Google Calendar `list_events` 返回最旧事件 | [#4578](https://github.com/nearai/ironclaw/pull/4578) | ✅ **已修复** |
| 🟡 **P1-功能缺陷** | [#4564](https://github.com/nearai/ironclaw/issues/4564) → **已关闭** | Codex 硬编码 `client_version` 隐藏新模型 | [#4566](https://github.com/nearai/ironclaw/pull/4566) | ✅ **已修复** |
| 🟡 **P1-认证阻断** | [#4536](https://github.com/nearai/ironclaw/issues/4536) → **已关闭** | OAuth 用户无法聊天，重定向至 `/welcome` | 无（Issue 直接关闭） | ✅ **已修复**（验证通过） |
| 🟢 **P2-体验问题** | [#4554](https://github.com/nearai/ironclaw/issues/4554) | WebUI v2 i18n 覆盖不全，翻译器运行时崩溃 | 无 | **待修复** — 国际化基础设施完善中 |

**稳定性评估**：今日 Bug 修复响应速度优异（Google Calendar、Codex、OAuth 当日发现当日关闭），但 **0.29.1 升级引入的 Telegram 会话断裂** 是明确的回归风险，建议暂停该通道的自动升级推送。

---

## 6. 功能请求与路线图信号

| 需求来源 | 核心诉求 | 与现有 PR 的关联 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| [#4533](https://github.com/nearai/ironclaw/issues/4533) — Reborn 运维设置、配置、诊断、服务生命周期 | 替代 V1 的 operator 体验 | #4559（Trace Commons 代理驱动上线）、#4580（自动化运行历史 UI） | **高** — 生产就绪的必要条件 |
| [#4545](https://github.com/nearai/ironclaw/issues/4545) — 用户生成工具的自服务 secret 设置与授权 | 安全的多租户 secret 管理 | #4543（运行时服务配置文件） | **高** — 与 #4543 形成方案对 |
| [#4543](https://github.com/nearai/ironclaw/issues/4543) — 运行时服务配置文件（通用 HTTP 凭证注入） | Crisp/Stripe 等第三方 API 的凭证化访问 | #4545 | **高** — 技能生态扩展的基础设施 |
| [#4539](https://github.com/nearai/ironclaw/issues/4539) — Reborn 审批流程与 V1  parity | approve once / deny / always allow | #4186（codex 本地开发审批门） | **中** — 依赖 #4186 的模式验证 |
| [#4551](https://github.com/nearai/ironclaw/issues/4551) — Reborn 生产 PostgreSQL 存储配置 | 独立二进制连接 Postgres | 无直接 PR | **中** — 基础设施配置，阻塞 #3026 |
| [#3288](https://github.com/nearai/ironclaw/issues/3288) — 生产/作用域 capability 生命周期管理 | extension/skill/MCP/WASM 所有权迁移 | 无直接 PR | **中** — 能力市场的治理基础 |

**路线图信号**：今日密集出现的 Epic 级 Issue（#4533、#4543、#4545、#4539）显示团队正从**核心架构迁移**转向**生产运维与生态扩展**阶段，预计 0.30.x 系列将聚焦 operator 体验和第三方集成安全。

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issue 描述）

| 来源 | 场景 | 痛点 | 情绪信号 |
|:---|:---|:---|:---|
| sunglow666（WeCom 验证） | 企业微信通道深度测试 | 核心文本稳定，但存在**未公开的"若干重要问题"** | ⚠️ 谨慎乐观，细节待披露 |
| sunglow666（生产 Telegram） | 版本升级后用户对话历史断裂 | **"发送新消息创建新 Web UI 对话"** — 上下文完全丢失 | 🔴 强烈不满，升级阻断 |
| sunglow666（托管代理） | 代理运行中但返回 403 | **"Forbidden [nearai-prod c8aa964d]"** 且自动恢复 | 🔴 困惑与不安，根因不明 |
| italic-jinxin（OAuth 用户） | 多用户登录场景 | **"立即重定向至 /welcome，永远无法进入聊天"** — 功能完全不可用 | 🔴 愤怒，P0 阻断 |
| italic-jinxin（国际化） | 非英语用户 | 扩展/作业/例程/侧边栏硬编码英文，翻译器崩溃 | 🟡 失望，包容性受损 |
| BenKurrek（Google Calendar） | 查询 upcoming meetings | 返回 2021 年最旧事件，**"what are my upcoming meetings?" 完全失效** | 🟡 困惑，AI 可信度下降 |
| BenKurrek（Codex 订阅） | 使用 ChatGPT 订阅的 Codex | 新模型 gpt-5.5 **"静默隐藏"**，请求降级至旧模型 | 🟡 被欺骗感，功能阉割 |

### 满意点

- **快速修复响应**：Google Calendar、Codex 问题当日修复，显示工程效率
- **WeCom 核心流程**：配对/重连/持久化/多语言支持获验证通过

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后更新 | 阻塞时长 | 风险说明 |
|:---|:---|:---|:---|:---|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) Nightly E2E failed | 2026-05-27 | 2026-06-08 | **12 天** | 🔴 **持续失败的夜间 E2E** — 每次运行均失败，质量信号灯失效，可能掩盖真实回归 |
| [#3026](https://github.com/nearai/ironclaw/issues/3026) Reborn 生产接线与切换就绪 | 2026-04-28 | 2026-06-08 | **42 天** | 🟡 史诗级跟踪 Issue，#4551 等子项仍在推进，但缺乏明确的"完成定义"时间线 |
| [#3283](https://github.com/nearai/ironclaw/issues/3283) OpenAI API 迁移至 Reborn | 2026-05-06 | 2026-06-08 | **34 天** | 🟡 三件套 PR（#4495、#4546、#4552）全部待合并，存在集成冲突风险 |
| [#4186](https://github.com/nearai/ironclaw/pull/4186) Codex 本地开发审批门 | 2026-05-28 | 2026-06-08 | **12 天** | 🟡 XL 级 PR 长期开放，阻塞 #4539 审批 parity 的验证 |
| [#3708](https://github.com/nearai/ironclaw/pull/3708) Release 0.29.1 | 2026-05-16 | 2026-06-08 | **24 天** | 🟡 发布分支悬而未决，#4556 等 0.29.1 回归问题可能需热修复后再发布 |

**维护者行动建议**：
1. **立即**：调查 #4108 夜间 E2E 的根因并修复或降级为非阻塞
2. **本周**：合并 #4495/#4546/#4552 三件套，解决 #3283 长期悬挂
3. **发布决策**：评估 #4556 Telegram 回归是否需阻塞 0.29.1 发布，或准备 0.29.2 热修复

---

*日报生成时间：2026-06-09 | 数据来源：GitHub API 近 24 小时活动*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-06-09

## 1. 今日速览

LobsterAI 今日呈现**高强度代码合并态势**，过去24小时内 **18 个 PR 被合并/关闭**，仅 1 个依赖更新 PR 待合并，Issues 零活动。核心团队（fisherdaddy、liuzhq1986）主导了**认证流程重构**（本地回调登录）、**数据迁移服务**（用户数据备份/恢复）及 **OpenClaw 网关可观测性**三大主线，显示项目正从功能扩展期进入**稳定性与工程化深耕期**。值得注意的是，6 个标记为 `[stale]` 的陈旧 PR 今日被集中清理，涉及 IM 通知校验、日志导出、模型列表动态获取等社区贡献，维护者正在加速消化历史积压。

---

## 2. 版本发布

**无新版本发布。** 最新 Release 暂无更新。

---

## 3. 项目进展

### 🔐 认证体系重构：桌面端登录体验质变
| PR | 作者 | 核心进展 |
|:---|:---|:---|
| [#2122](https://github.com/netease-youdao/LobsterAI/pull/2122) | liuzhq1986 | **本地回调登录流**：Electron 客户端内嵌 `127.0.0.1` 临时回调服务器，彻底消除浏览器外部应用确认弹窗，实现无缝桌面登录 |
| [#2127](https://github.com/netease-youdao/LobsterAI/pull/2127) | liuzhq1986 | **Windows 登录后窗口聚焦**：通过 always-on-top 短暂切换 + 停止任务栏闪烁，解决浏览器登录完成后桌面应用未前置的历史痛点 |
| [#2129](https://github.com/netease-youdao/LobsterAI/pull/2129) | liuzhq1986 | **登录诊断增强**：记录 overmind/portal 登录 URL 选择及本地回调回退行为，为 Windows 开发模式排障提供遥测 |

### 💾 数据迁移服务：用户数据可移植性从零到一
| PR | 作者 | 核心进展 |
|:---|:---|:---|
| [#2125](https://github.com/netease-youdao/LobsterAI/pull/2125) | fisherdaddy | **用户数据备份/恢复**：全新数据迁移服务，将用户数据打包为 tar 归档，支持计划重启恢复与回滚机制，Settings 界面集成本地化操作 |
| [#2126](https://github.com/netease-youdao/LobsterAI/pull/2126) | fisherdaddy | **运行时锁文件保护**：改为就地替换而非重命名整个用户数据目录，保留 SingletonLock/Socket/Cookie 等运行时锁，避免多实例冲突 |
| [#2128](https://github.com/netease-youdao/LobsterAI/pull/2128) | fisherdaddy | **Network 目录隔离**：备份排除 Network 目录，恢复时保留，防止网络缓存污染迁移 |

### 🦾 OpenClaw 网关：可观测性与稳定性双提升
| PR | 作者 | 核心进展 |
|:---|:---|:---|
| [#2123](https://github.com/netease-youdao/LobsterAI/pull/2123) | fisherdaddy | **网关状态可视化**：暴露端口/HTTP URL，提供可复制的地址卡片、阶段感知状态徽章、带标签的启动进度条 |
| [#2110](https://github.com/netease-youdao/LobsterAI/pull/2110) | liuzhq1986 | **超大图片载荷防护**：前置检测 OpenClaw `chat.send` 载荷体积，1009/max-payload 错误归类为消息尺寸错误，区分单图/整消息限制提示 |

### ⚙️ 配置系统健壮性
| PR | 作者 | 核心进展 |
|:---|:---|:---|
| [#2117](https://github.com/netease-youdao/LobsterAI/pull/2117) | liuzhq1986 | **模型迁移版本追踪**：防止默认模型被重复注入，用户删除的 provider 模型在应用重启后得以保留，覆盖所有受影响 provider 的回归测试 |

### 🧹 陈旧 PR 集中清理（社区贡献吸纳）
| PR | 作者 | 原创建日期 | 功能领域 |
|:---|:---|:---|:---|
| [#1510](https://github.com/netease-youdao/LobsterAI/pull/1510) | MaoQianTu | 2026-04-07 | 定时任务 IM 通知 `notifyTo` 非空校验 |
| [#1514](https://github.com/netease-youdao/LobsterAI/pull/1514) | MaoQianTu | 2026-04-07 | QQ Bot 群组白名单 UI 输入框补全 |
| [#1515](https://github.com/netease-youdao/LobsterAI/pull/1515) | swuzjb | 2026-04-07 | 日志导出 DEFLATE 压缩超时修复（降压缩级别+流式处理） |
| [#1517](https://github.com/netease-youdao/LobsterAI/pull/1517) | MaoQianTu | 2026-04-07 | GitHub Copilot OAuth 轮询 cleanup 防 Token 丢失 |
| [#1521](https://github.com/netease-youdao/LobsterAI/pull/1521) | wowiscrazy | 2026-04-07 | `skills-changed` 事件防网关误重启 |
| [#1522](https://github.com/netease-youdao/LobsterAI/pull/1522) | leedalei | 2026-04-07 | 动态模型列表获取（`GET /v1/models`） |
| [#1524](https://github.com/netease-youdao/LobsterAI/pull/1524) | swuzjb | 2026-04-07 | 测试连接失败 i18n 化详细错误信息（13 个 key） |
| [#1526](https://github.com/netease-youdao/LobsterAI/pull/1526) | MaoQianTu | 2026-04-07 | 会话列表 7 色标注快速区分 |

**整体评估**：今日合并代码量相当于一次**小型功能版本**的交付密度，认证、数据迁移、OpenClaw 三大模块形成完整用户体验闭环。

---

## 4. 社区热点

> **注意**：今日所有 PR 评论数均为 `undefined`（数据未采集或项目未启用评论），👍 数均为 0，Issues 零活动。以下基于 PR 内容影响力分析：

| 热点 PR | 链接 | 潜在诉求分析 |
|:---|:---|:---|
| **#2125 用户数据备份/恢复** | [#2125](https://github.com/netease-youdao/LobsterAI/pull/2125) | 企业/团队用户跨设备迁移、重装系统后快速恢复工作环境的**刚需**，对标 VS Code Settings Sync、Cursor 等竞品的数据可移植性 |
| **#2122 本地回调登录** | [#2122](https://github.com/netease-youdao/LobsterAI/pull/2122) | 消除浏览器拦截弹窗是**桌面端产品精致度的分水岭**，直接影响首次登录转化率 |
| **#1522 动态模型列表** | [#1522](https://github.com/netease-youdao/LobsterAI/pull/1522) | 社区对**模型生态敏捷响应**的强烈需求——GLM-5.1 等模型发布后手动添加的滞后性已成为生产力瓶颈 |
| **#1515 日志导出超时** | [#1515](https://github.com/netease-youdao/LobsterAI/pull/1515) | 低配置设备用户的**排障权平等**——80MB/天的日志在旧机器上 30 秒超时门槛过高，阻碍问题上报 |

**诉求共性**：社区贡献者（MaoQianTu、swuzjb、leedalei 等）持续聚焦**边缘场景健壮性**（空值校验、超时处理、组件卸载清理），反映真实企业部署中的摩擦点。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | Fix PR | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | Windows 登录后应用窗口未前置，用户误以为登录失败 | [#2127](https://github.com/netease-youdao/LobsterAI/pull/2127) | ✅ 已合并 |
| 🔴 **高** | 数据恢复时重命名整个用户目录导致运行时锁丢失，引发多实例冲突 | [#2126](https://github.com/netease-youdao/LobsterAI/pull/2126) | ✅ 已合并 |
| 🟡 **中** | 日志导出 DEFLATE 压缩 80MB×7 天日志超 30 秒超时限制 | [#1515](https://github.com/netease-youdao/LobsterAI/pull/1515) | ✅ 已合并（降压缩级别+流式） |
| 🟡 **中** | OpenClaw 超大图片载荷导致网关 1009 错误，用户体验为静默失败 | [#2110](https://github.com/netease-youdao/LobsterAI/pull/2110) | ✅ 已合并（前置检测+错误分类） |
| 🟡 **中** | Settings 关闭时 GitHub Copilot OAuth 轮询未 cleanup，Token 静默丢失 | [#1517](https://github.com/netease-youdao/LobsterAI/pull/1517) | ✅ 已合并 |
| 🟡 **中** | `skills-changed` 事件触发不必要的网关重启 | [#1521](https://github.com/netease-youdao/LobsterAI/pull/1521) | ✅ 已合并 |
| 🟢 **低** | 模型迁移重复注入默认模型，覆盖用户删除选择 | [#2117](https://github.com/netease-youdao/LobsterAI/pull/2117) | ✅ 已合并（版本追踪） |

**今日无新增未修复 Bug。** 所有已知稳定性问题均已闭环。

---

## 6. 功能请求与路线图信号

| 功能方向 | 信号来源 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **云端/跨设备数据同步** | #2125 备份/恢复（本地 tar）→ 自然延伸 | ⭐⭐⭐⭐☆ | 已实现本地迁移，下一步极可能对接有道云服务或第三方存储 |
| **模型市场/自动发现** | #1522 动态模型列表 | ⭐⭐⭐⭐⭐ | **已合并**，下一版本核心功能，解决"手动追新模型"痛点 |
| **会话组织体系（颜色→文件夹→标签）** | #1526 7 色标注 | ⭐⭐⭐⭐☆ | 基础视觉层已落地，可能扩展为完整的工作区/项目管理功能 |
| **IM 生态深度集成** | #1510 定时任务通知校验、#1514 QQ 白名单 | ⭐⭐⭐☆☆ | 修复层完善中，Bot 平台适配（QQ/飞书/钉钉）持续投入 |
| **AI 辅助排障（日志智能分析）** | #1515 日志导出优化 + #2129 登录诊断 | ⭐⭐⭐☆☆ | 遥测数据积累阶段，远期可能集成 LLM-based 诊断建议 |

**路线图推断**：项目正从"功能可用"向"企业级可运维"跃迁，**数据可移植性 + 认证无缝化 + 网关可观测性**构成 2026 Q2-Q3 的交付主线。

---

## 7. 用户反馈摘要

> 基于 PR 描述中还原的真实用户场景：

| 痛点场景 | 来源 PR | 用户画像 |
|:---|:---|:---|
| "点击导出日志等 30 秒然后失败，无法上报问题" | [#1515](https://github.com/netease-youdao/LobsterAI/pull/1515) | 低配设备企业用户，排障链路断裂 |
| "GLM-5.1 发布了但要手动添加，同事早就用上了" | [#1522](https://github.com/netease-youdao/LobsterAI/pull/1522) | 前沿模型尝鲜者，配置更新滞后于模型发布节奏 |
| "QQ 白名单开了但没法加群，Bot 对所有人开放" | [#1514](https://github.com/netease-youdao/LobsterAI/pull/1514) | 企业安全合规管理员，UI 功能缺失导致安全策略悬空 |
| "登录完浏览器关了，找不到应用窗口在哪" | [#2127](https://github.com/netease-youdao/LobsterAI/pull/2127) | Windows 多任务用户，窗口管理混乱导致登录流程中断 |
| "重装系统后所有会话、设置、API Key 全丢" | [#2125](https://github.com/netease-youdao/LobsterAI/pull/2125) | 频繁换机/系统维护的开发者，数据资产无保障 |

**满意度提升点**：本地回调登录消除弹窗拦截、OpenClaw 网关 URL 一键复制、会话颜色快速视觉定位。

---

## 8. 待处理积压

| PR | 链接 | 创建日期 | 状态 | 提醒 |
|:---|:---|:---|:---|:---|
| chore(deps-dev): bump electron 40.2.1 → 42.3.3 + electron-builder | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | 2026-04-02 | ⏳ **待合并**（唯一 OPEN） | Electron 大版本跨代升级（40→42），含潜在 Breaking Changes，已积压 **68 天**，建议优先验证窗口管理、原生模块兼容性后合并 |

**历史 stale PR 清理完成度**：今日 8 个 `[stale]` PR 全部关闭，剩余积压风险显著降低。维护者需关注 #1277 的技术债务累积。

---

*日报生成时间：2026-06-09 | 数据来源：GitHub API 概览与 PR 元数据*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw 项目动态日报 | 2026-06-09

> **项目**: [TinyAGI/tinyagi](https://github.com/TinyAGI/tinyagi) | **分析日期**: 2026-06-09 | **数据周期**: 过去24小时

---

## 1. 今日速览

TinyClaw 今日活跃度处于**极低水平**。过去24小时内，项目仅产生 **1 条 PR 更新**，无 Issues 活动、无版本发布、无社区讨论。这是典型的"维护静默期"——项目核心开发可能处于阶段性收尾或等待 review 的状态。唯一待处理的 PR 聚焦于开发者体验优化（原生模块自动重建），属于基础设施层面的改进，而非功能迭代。整体健康度评估：**稳定但缺乏动能**，需关注维护者响应速度是否会影响贡献者积极性。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**今日无已合并/关闭的 PR**

| PR | 状态 | 进展说明 |
|:---|:---|:---|
| [#280](https://github.com/TinyAGI/tinyagi/pull/280) fix(install): add postinstall script to auto-rebuild better-sqlite3 | ⏳ **待合并** | 解决 `better-sqlite3` 原生模块在新安装后需手动重建的痛点，属于**首次安装体验的关键修复** |

**技术价值分析**：
- `better-sqlite3` 作为嵌入式数据库依赖，其 C++ 原生绑定在不同 Node.js 版本/平台下必须重新编译
- 当前手动 `npm rebuild` 步骤对新用户构成显著 onboarding 摩擦，可能导致项目第一印象负面
- `postinstall` 脚本方案是 Node.js 生态的标准实践，但需注意跨平台兼容性（Windows/ARM/macOS 等）

**项目推进度**: ⚠️ 今日无实质性功能推进，基础设施改进 pending review

---

## 4. 社区热点

| 排名 | 项目 | 热度指标 | 分析 |
|:---|:---|:---|:---|
| #1 | [PR #280](https://github.com/TinyAGI/tinyagi/pull/280) | 👍 0, 评论 undefined, 创建后24h未响应 | **贡献者诉求**: 简化安装流程，降低新用户门槛。作者 `dsy122` 在2026-06-08提交后尚未获得维护者反馈，"undefined"评论数暗示 review 流程可能存在工具链问题或确实无人响应 |

**社区活跃度警示**: 24小时内零评论、零 reaction，表明：
- 核心维护者团队可能时区错配或处于离线状态
- 项目 watch/star 用户参与度不足，未能形成自发 review 文化

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 来源 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🟡 **中** | `better-sqlite3` 首次安装后运行时错误（原生模块未重建） | 已知历史问题，PR #280 针对性修复 | [#280](https://github.com/TinyAGI/tinyagi/pull/280) | ⏳ 待合并 |

**注**: 今日无新报告的 Bug。PR #280 修复的是**已知易复现的安装失败场景**，影响所有新 clone 项目的开发者。

---

## 6. 功能请求与路线图信号

**今日无新增功能请求**

**从 pending PR 推断下一版本信号**：

| 信号 | 说明 |
|:---|:---|
| 🔧 **开发者体验优先** | PR #280 表明项目当前重心在"让现有功能稳定可用"，而非扩展新能力 |
| 📦 **原生依赖治理** | `better-sqlite3` 的引入暗示项目采用本地优先（local-first）架构，可能涉及离线 AI 能力或本地知识库 |

**潜在纳入下一版本的功能**: PR #280 本身为修复型改进，合并后应伴随 patch 版本发布（如 `v0.x.y+1`）。

---

## 7. 用户反馈摘要

**今日无新增 Issues/评论，无法提取实时用户反馈**

**基于历史模式推断的痛点**（需维护者验证）：
- **安装挫败感**: `better-sqlite3` 重建问题是 Node.js 原生模块的经典陷阱，新用户可能在不熟悉 `npm rebuild` 时直接放弃
- **文档缺口**: 若 README 未明确标注平台依赖（Python、C++ 编译工具链），会放大上述问题

---

## 8. 待处理积压

| 项目 | 创建时间 | 已等待 | 风险 | 建议动作 |
|:---|:---|:---|:---|:---|
| [PR #280](https://github.com/TinyAGI/tinyagi/pull/280) | 2026-06-08 | **~1天** | 贡献者 `dsy122` 可能因无响应而流失；其他潜在贡献者观察到 review 延迟后降低提交意愿 | 维护者应在 48h 内完成 review，或至少添加 `review-needed` 标签并指派负责人 |

**长期积压检查**: 因无完整 Issue/PR 历史数据，无法评估是否存在超过 30 天未响应的重要事项。建议维护者：
1. 配置 [stale bot](https://github.com/apps/stale) 自动标记长期无响应项
2. 在 README 显式标注平均 review 响应时间预期

---

## 附录：今日数据看板

| 指标 | 数值 | 环比趋势 |
|:---|:---|:---|
| Issues 更新 | 0 | → 持平 |
| PR 更新 | 1 (待合并) | ↓ 可能下降* |
| Releases | 0 | → 持平 |
| 社区评论 | 0 | → 持平 |
| 首次贡献者 | 1 (`dsy122`) | ↑ 新增 |

*基于单数据点无法确认趋势

---

> **分析师备注**: TinyClaw 作为 AI 智能体/个人助手工具，其技术选型（本地 SQLite、Node.js 原生模块）暗示"隐私优先、离线可用"的产品定位。当前极低活跃度若持续超过 72 小时，建议关注维护者健康状况或项目资金可持续性。PR #280 的 review 响应速度是观察社区治理质量的窗口指标。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-06-09

> **项目地址**: [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)  
> **数据周期**: 2026-06-08 至 2026-06-09（过去24小时）

---

## 1. 今日速览

CoPaw 今日保持**高活跃度**，24小时内产生 **49 条 Issue 更新**（26 新开/活跃，23 关闭）和 **45 条 PR 更新**（22 待合并，23 已合并/关闭），无新版本发布。社区聚焦三大主题：**AgentScope 2.0 迁移**（#4727）进入关键阶段，**微信/企业微信渠道稳定性**持续优化（#4477、#4990），以及 **MCP 生态治理**（子进程泄漏 #4834、工具名合规 #4918）成为工程重点。前端体验（卡顿、图片抖动）和记忆系统架构也有显著讨论。

---

## 2. 版本发布

**无新版本发布**  
今日未发布 Release，最新稳定版仍为 v1.1.10/v1.1.11 区间。注意：多个 PR（#5014、#5018、#5021）正为 v1.2.0 或 AgentScope 2.0 迁移做准备。

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#5018](https://github.com/agentscope-ai/QwenPaw/pull/5018) | qbc2016 | **关键修复**：将 `ModelInfo.max_input_length` 桥接到 AgentScope 2.0 的 `context_size`，使自动内存压缩尊重用户配置 | #5021 的依赖 |
| [#5014](https://github.com/agentscope-ai/QwenPaw/pull/5014) | rayrayraykk | **稳定性修复**：MCP 子进程在 Docker/ Supervisor 重启时泄漏问题，通过 `start_new_session` 进程组隔离 + 强制清理解决 | [#4834](https://github.com/agentscope-ai/QwenPaw/issues/4834) |
| [#4949](https://github.com/agentscope-ai/QwenPaw/pull/4949) | ekzhu | **ACP 协议增强**：为 `paw` TUI 客户端暴露命令列表、错误信息、工具参数、Agent/模型元数据、文件链接 | — |
| [#4286](https://github.com/agentscope-ai/QwenPaw/pull/4286) | aqilaziz | **国际化**：Session 和 Cron Job 控制页面的印尼语本地化补全 | — |
| [#2771](https://github.com/agentscope-ai/QwenPaw/pull/2771) | Kai-dev7 | **安装修复**：`mlx-lm` 限制为 Apple Silicon macOS，避免 x86 Mac 安装失败 | — |

**整体推进评估**：AgentScope 2.0 迁移的基础设施（上下文窗口桥接、模型元数据透传）已就位；MCP 生态的"进程泄漏-工具名合规"治理链形成闭环；ACP 协议向终端 UI 体验升级。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---:|:---|:---|
| 1 | [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) 微信 iLink 定时任务推送失败 | 15 | **企业级可靠性**：`context_token` 过期无重试、图片发送无日志，影响生产环境微信 Bot 稳定性 | ✅ CLOSED |
| 2 | [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) Windows 执行 shell 命令闪黑窗 | 9 | **桌面体验**：`execute_shell_command` 每次调用弹出控制台窗口，干扰用户 | ✅ CLOSED |
| 3 | [#5017](https://github.com/agentscope-ai/QwenPaw/issues/5017) 借鉴 Hermes Agent "学习循环" | 7 | **架构前瞻性**：用户主动建议对标 Hermes Agent（46k+ stars）的技能自进化机制，希望 QwenPaw 集百家之长 | 🟢 OPEN |
| 4 | [#4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) 工作目录默认文件统一收纳 | 7 | **工程整洁度**：类似 `.qwenpaw` 的隐藏目录，避免工作区杂乱 | ✅ CLOSED |
| 5 | [#4300](https://github.com/agentscope-ai/QwenPaw/issues/4300) Agent 响应重复 | 6 | **核心功能缺陷**：同一查询返回双份内容，Thinking 也执行两次 | ✅ CLOSED |

**诉求分析**：  
- **生产环境硬性需求**（微信稳定性、Windows 无感执行）已快速关闭，显示维护团队对 B 端场景的响应优先级  
- **#5017 学习循环** 反映社区对"Agent 自主进化"的期待，与现有 [#4994](https://github.com/agentscope-ai/QwenPaw/issues/4994) 记忆系统自进化、[#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) 视觉模型 fallback 共同构成"下一代 Agent 架构"的用户呼声

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 现象 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **P0-崩溃** | [#5019](https://github.com/agentscope-ai/QwenPaw/issues/5019) | 内存压缩期间 `as_msg_handler.py` 因 `source` 为 `str` 而非 `dict` 抛 `AttributeError` | — | ✅ CLOSED（当日关闭） |
| 🔴 **P0-数据损坏** | [#4970](https://github.com/agentscope-ai/QwenPaw/issues/4970) | `loop_config.json`/`prd.json` 损坏导致整个 Agent 会话崩溃，无法通过任何渠道交互 | — | 🟢 OPEN（6月5日报告，待修复） |
| 🟡 **P1-资源泄漏** | [#4834](https://github.com/agentscope-ai/QwenPaw/issues/4834) | MCP server 进程在重启时累积（如 firecrawl-mcp 达 9 进程），导致控制台加载缓慢 | [#5014](https://github.com/agentscope-ai/QwenPaw/pull/5014) | 🟢 OPEN（PR 已提） |
| 🟡 **P1-渠道失效** | [#4926](https://github.com/agentscope-ai/QwenPaw/issues/4926) | OneBot 零停机重载时 WebSocket 端口未释放，NapCat 无法连接 | — | 🟢 OPEN |
| 🟡 **P1-无限循环** | [#4895](https://github.com/agentscope-ai/QwenPaw/issues/4895) | 图片上传进入无限压缩循环：压缩→重新注入→再压缩，产生"幻觉" | — | 🟢 OPEN |
| 🟡 **P1-性能衰退** | [#5015](https://github.com/agentscope-ai/QwenPaw/issues/5015) | v1.1.11 及以下 Windows Desktop 前端加载不流畅，任务执行时会话切换卡顿、CPU 激增 | — | 🟢 OPEN |
| 🟢 **P2-体验瑕疵** | [#4993](https://github.com/agentscope-ai/QwenPaw/issues/4993) | 图片预览放大后拖动异常抖动 | — | 🟢 OPEN |

**关键观察**：  
- **#4970 JSON 损坏致全局崩溃** 是今日最严重的稳定性隐患，6月5日报告至今无 PR，需优先关注  
- MCP 进程泄漏（#4834/#5014）形成"报告-修复"闭环，显示工程治理效率

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue/PR | 用户价值 | 纳入可能性评估 |
|:---|:---|:---|:---|
| **独立视觉模型配置**（Visual Model Fallback） | [#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) | 纯文本主模型（如 deepseek-v4-flash）可处理图片，无需更换模型 | ⭐⭐⭐⭐ 高：架构解耦，PR 就绪条件好 |
| **记忆系统自进化/分层记忆** | [#4994](https://github.com/agentscope-ai/QwenPaw/issues/4994) | 吸收主流 Agent 记忆框架，支持长期记忆分层 | ⭐⭐⭐ 中：与 #5017 Hermes 学习循环形成协同需求 |
| **Plugin Market 插件市场** | [#5023](https://github.com/agentscope-ai/QwenPaw/pull/5023) | 集成 AgentScope Platform，支持搜索/浏览社区插件 | ⭐⭐⭐⭐⭐ 极高：PR 已提交，当日新增 |
| **前端插件扩展基础设施** | [#4997](https://github.com/agentscope-ai/QwenPaw/pull/4997) | 统一菜单/路由/插槽注册机制，插件可扩展 Chat UI | ⭐⭐⭐⭐ 高：WIP 状态，与 #5023 协同 |
| **DataPaw 数据分析插件**（12 BI skills） | [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) | 内置数据可视化、BI 分析能力 | ⭐⭐⭐ 中：首次贡献者，审核中（5月22日） |
| **Tauri 桌面自动更新** | [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) | 替代 PyPI/手动更新流程 | ⭐⭐⭐⭐ 高：依赖 #3813，持续迭代中 |
| **工具调用后静默模式** | [#4838](https://github.com/agentscope-ai/QwenPaw/issues/4838) | 交互渠道中仅返回工具输出，抑制 Agent 最终文本 | ⭐⭐⭐ 中：渠道级配置，场景明确 |
| **AgentScope 2.0 迁移** | [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) | 底层架构升级，新 API 和运行时模型 | ⭐⭐⭐⭐⭐ 极高：Breaking Change，已规划 |

**路线图信号**：  
- **插件生态**（#5023 市场 + #4997 扩展点 + #4622 DataPaw）形成"平台化"战略三角，可能定义 v1.2.0 核心叙事  
- **AgentScope 2.0 迁移**（#4727）是最大技术债务，[#5018](https://github.com/agentscope-ai/QwenPaw/pull/5018) 的上下文窗口桥接是迁移前置条件

---

## 7. 用户反馈摘要

### ✅ 满意点
- **本地化体验**：#5017 用户明确称赞"国内用起来特别舒服——本地化做得很到位，设置清晰无门槛，开箱即用"
- **快速响应**：微信 iLink 定时任务（#4477）、Windows 黑窗（#4123）等生产问题当日/近期关闭

### ❌ 痛点与场景

| 痛点 | 来源 Issue | 用户原声/场景 |
|:---|:---|:---|
| **微信渠道不可靠** | #4477 | "隔夜没有发送消息时，context_token 过期，仅打一行日志后放弃，不会重试" |
| **Windows 桌面性能差** | #5015 | "有任务执行时，会话切换卡顿，CPU 激增" —— 影响日常办公场景 |
| **企业微信工具调用反馈差** | #4990 | 关闭工具信息后返回"抱歉，我无法回答你的问题"，用户感知为"故障"而非"设计" |
| **子 Agent 轮询失控** | #4873 | "同时开两个 subagent 会导致主 agent 无限快速轮询，飞书侧无法打断" —— 多任务并行场景阻塞 |
| **KimiCode 思考过程不可见** | #5013 | "thinking content is not displayed"，与其他模型体验不一致 |
| **配置损坏即全局瘫痪** | #4970 | JSON 损坏后"无法通过 Telegram/控制台等任何渠道与 agent 交互" —— 缺乏降级机制 |

---

## 8. 待处理积压

> 以下 Issue/PR 已长期未获关键进展，建议维护者优先审视：

| 条目 | 创建日期 | 当前状态 | 风险/提醒 |
|:---|:---|:---|:---|
| [#4970](https://github.com/agentscope-ai/QwenPaw/issues/4970) JSON 损坏致全局崩溃 | 2026-06-05 | 🟢 OPEN，无 PR | **P0 稳定性**：数据损坏即服务完全不可用，缺乏容错/降级，已 4 天 |
| [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) AgentScope 2.0 迁移 | 2026-05-27 | 🟢 OPEN，讨论中 | **架构债务**：Breaking Change，影响后续所有功能依赖，需明确里程碑 |
| [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) DataPaw 插件 | 2026-05-22 | 🟢 OPEN，Under Review | **首次贡献者**：12 BI skills 大型 PR，审核周期已 17 天，需反馈或拆分 |
| [#4443](https://github.com/agentscope-ai/QwenPaw/pull/4443) 轻量目标模式 `/goal` | 2026-05-16 | 🟢 OPEN | **功能 PR**：MVP 已完成，搁置 23 天，可能因 AgentScope 2.0 迁移被阻塞 |
| [#4345](https://github.com/agentscope-ai/QwenPaw/pull/4345) 可折叠代码块 | 2026-05-14 | 🟢 OPEN | **前端体验**：Console 长代码可读性，搁置 25 天 |

---

*日报生成时间：2026-06-09*  
*数据来源：GitHub API / agentscope-ai/QwenPaw*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-06-09

## 1. 今日速览

ZeroClaw 今日维持**极高活跃度**：过去24小时 Issues 更新 50 条（仅关闭 1 条），PR 更新 50 条（11 条已合并/关闭，39 条待审），显示社区提交量井喷但代码审查吞吐成为瓶颈。核心战场集中在**运行时稳定性修复**（WSL2 OOM、文件写入静默失败、Cron 重复执行）与**安全架构升级**（OIDC、可插拔安全层、Shell 命令分级确认）。无新版本发布，v0.9.0 路线图的多项 RFC 正处于密集实现期。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 影响 |
|:---|:---|:---|:---|
| [#6701](https://github.com/zeroclaw-labs/zeroclaw/pull/6701) | Alix-007 | Telegram 消息分割时保留 Markdown 代码块格式 | 关闭 #6225，解决长消息渲染破碎问题 |
| [#7403](https://github.com/zeroclaw-labs/zeroclaw/pull/7403) | tidux | `trim_history` 防孤儿级联清空保护 | 避免对话历史被意外清空导致 agent 失效 |

### 推进中的重大 PR（待合并）

| PR | 关联 Issue | 里程碑意义 |
|:---|:---|:---|
| [#7129](https://github.com/zeroclaw-labs/zeroclaw/pull/7129) | [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) | **S0 数据丢失修复**：`file_write` 对临时工作区显式失败，终结"写入成功但文件不可见"幽灵 Bug |
| [#7234](https://github.com/zeroclaw-labs/zeroclaw/pull/7234) | [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | MemoryStrategy 架构最终切片，网关与频道编排接入策略层 |
| [#7367](https://github.com/zeroclaw-labs/zeroclaw/pull/7367) | [#6312](https://github.com/zeroclaw-labs/zeroclaw/issues/6312) | 多实例 Webhook 路由修复，终结"永远只发到第一个频道"问题 |
| [#7060](https://github.com/zeroclaw-labs/zeroclaw/pull/7060) | FND-001 §5.2 | WASI/Component Model 插件接口定义，奠定第三方插件生态基础 |

**整体进展评估**：运行时可靠性与安全架构双线并进，但 39:11 的待合并比例提示维护者资源紧张。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 | 热度驱动因素 |
|:---|:---|:---|:---|:---|
| 1 | [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) `tool_filter_groups` MCP 前缀匹配失效 + 延迟加载缺失 | 7 | MCP 工具过滤配置形同虚设，企业级部署受阻 | 配置与运行时行为不一致，"文档说行实际不行" |
| 2 | [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) Computer-use 桌面控制 RFC | 6 | 对标 OpenAI Codex/Hermes 的 GUI 自动化能力 | 多模态 Agent 竞赛压力，本地执行场景刚需 |
| 3 | [#7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184) i18n 文件 git submodule 迁移 | 5 | 翻译变更污染主仓库历史 | 国际化贡献者体验，CI 噪声治理 |

**诉求分析**：开发者正从"能用"向"企业级可控"迁移——工具过滤、审计追踪、桌面自动化构成三大增量需求。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | 修复 PR | 影响范围 |
|:---|:---|:---|:---|:---|
| **S0** | [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) `file_write` 静默失败，文件不可见 | 进行中 | [#7129](https://github.com/zeroclaw-labs/zeroclaw/pull/7129) | Docker 沙箱用户数据丢失风险 |
| **S0** | [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) WSL2 连续 OOM 杀死进程 | 需复现 | 无 | 17GB+ VM 内存，Linux 桌面用户阻塞 |
| **S1** | [#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) Gemini 400 历史序列化违规 | 进行中 | 无 | Gemini 全模型不可用 |
| **S1** | [#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) context_compression 丢弃 tool_calls 致循环 | 进行中 | 无 | MiniMax 等兼容提供商多轮工具对话崩溃 |
| **S1** | [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) `autonomy=full` 时 Shell 工具被静默拒绝 | 进行中 | 无 | 高权限配置下反而无法执行 shell |
| **S1** | [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) Gemini CLI OAuth 完全失效 | 进行中 | 无 | Gemini 认证流程阻断 |
| **S2** | [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) WhatsApp LID 联系人消息静默丢弃 | 进行中 | [#6973](https://github.com/zeroclaw-labs/zeroclaw/pull/6973) | 企业 WhatsApp 集成消息丢失 |

**稳定性健康度**：⚠️ **承压**。6 个 S0/S1 级 Bug 中仅 2 个有明确修复 PR，Gemini 相关缺陷形成集群（#6302、#4879、#5795 XML 泄漏），提示 Google 提供商适配层需要系统性审查。

---

## 6. 功能请求与路线图信号

### v0.9.0 路线图中已接受的 RFC（今日活跃）

| RFC | 状态 | 实现信号 | 预计纳入 |
|:---|:---|:---|:---|
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) OIDC 认证提供商 | 已接受 | 架构设计完成，待实现 | v0.9.0 |
| [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) 可插拔安全层接口 | 已接受 | 跟踪 Issue 细化中 | v0.9.0 |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) Shell 命令分级确认（allow/ask/deny） | 已接受 | 需求明确，待设计 | v0.9.0 |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) MemoryStrategy 解耦 | 进行中 | [#7234](https://github.com/zeroclaw-labs/zeroclaw/pull/7234) 最终切片 | **即将合并** |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) Computer-use 桌面控制 | 已接受 | 早期 RFC 阶段 | v0.10.0+ |

### 生态扩展信号

- [#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) MCP Resource/Prompt 支持（👍4，社区高票）：当前 MCP 仅为 Tool 客户端，完整协议支持将解锁知识库等场景
- [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) Local-First 小模型模式（👍2）：边缘部署需求上升，提示官方需关注 Ollama 等本地推理优化

---

## 7. 用户反馈摘要

### 真实痛点

> **"配置文档与运行时行为脱节"**
> - [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) 用户：`tool_filter_groups` "parses cleanly via AgentConfig, but for real MCP tool surfaces it has zero effect"
> - [#6877](https://github.com/zeroclaw-labs/zeroclaw/issues/6877) 用户：`[runtime_profiles.*].max_tool_iterations has no effect — must be set on [agents.*] instead`

> **"安全与便利的永恒张力"**
> - [#4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832) 用户：LeakDetector 高熵启发式误杀 MD5 文件名、微信媒体文件，"false positives on legitimate content"
> - [#3767](https://github.com/zeroclaw-labs/zeroclaw/issues/3767) 用户：需要"允许 shell 访问但 2FA 保护破坏性命令"的中间态

> **"本地部署的隐形天花板"**
> - [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) 用户：小模型下"prompt bloat, permissive fallback parsing, prompt leakage"三重打击

### 满意点

- 快速启动向导（[#7215](https://github.com/zeroclaw-labs/zeroclaw/pull/7215) 持续迭代）
- 多频道覆盖广度（Telegram/Matrix/WhatsApp/Slack 等）

---

## 8. 待处理积压

| Issue | 创建时间 | 最后更新 | 风险 | 提醒 |
|:---|:---|:---|:---|:---|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 153 commits 批量回滚恢复审计 | 2026-04-24 | 今日 | **高** | 2 个月无实质进展，历史代码资产持续流失 |
| [#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) MCP Resource/Prompt 支持 | 2026-03-24 | 今日 | 中 | 👍4 社区高票，3 个月无维护者响应 |
| [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) WSL2 OOM | 2026-04-09 | 今日 | **S0** | 标记 `needs-repro` 后无进一步诊断 |
| [#4873](https://github.com/zeroclaw-labs/zeroclaw/issues/4873) 飞书集成仅调 LLM 非 Agent | 2026-03-28 | 今日 | 中 | 中国企业用户关键场景，2 个月无修复 |

---

**日报生成时间**：2026-06-09  
**数据来源**：zeroclaw-labs/zeroclaw GitHub 公开活动流  
**健康度评分**：⭐⭐⭐☆☆（活跃度高，但 S0/S1 Bug 修复率偏低，审查队列积压严重）

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*