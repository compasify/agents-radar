# OpenClaw 生态日报 2026-05-18

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-18 00:23 UTC

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

# OpenClaw 项目动态日报 | 2026-05-18

---

## 1. 今日速览

OpenClaw 今日保持极高活跃度，24小时内 **500 条 Issues 更新**（481 活跃/新开，19 关闭）与 **500 条 PR 更新**（448 待合并，52 已合并/关闭），社区讨论密度处于峰值。项目连续发布两个 beta 版本（beta.4 → beta.5），聚焦 Mac 应用体验优化与安全审计功能。核心痛点集中在**多平台支持缺口**（Linux/Windows 客户端长期缺失）、**会话状态稳定性**（上下文混淆、消息丢失、重复发送）以及**安全加固**（API 密钥保护、沙箱隔离）。PR 队列中隐私流量过滤、会话目录权限加固等安全相关代码已进入 review 阶段，显示维护团队对安全债务的主动偿还。

---

## 2. 版本发布

### [v2026.5.16-beta.5](https://github.com/openclaw/openclaw/releases/tag/v2026.5.16-beta.5)
| 属性 | 内容 |
|:---|:---|
| 类型 | Beta 预发布 |
| 核心变更 | Mac 应用 Settings 页面重构 + Skills 命名规范化 |

**详细变更：**
- **Mac Settings 重设计**：采用统一卡片布局，优化权限、语音、Skills、Cron、执行、调试等面板的导航缓存与间距一致性，提升原生侧边栏稳定性
- **Skills 重命名**：将仓库本地 Codex closeout review skill 及辅助工具统一更名为 `autoreview`，保持向后兼容

**迁移注意**：使用旧名称 `codex-closeout-review` 的自定义配置需手动更新为 `autoreview`

---

### [v2026.5.16-beta.4](https://github.com/openclaw/openclaw/releases/tag/v2026.5.16-beta.4)
| 属性 | 内容 |
|:---|:---|
| 类型 | Beta 预发布 |
| 核心变更 | 安全审计抑制机制 + 子代理标签增强 |

**详细变更：**
- **安全审计抑制**（[#76949](https://github.com/openclaw/openclaw/pull/76949)）：新增 `security.audit.suppressions` 配置，允许开发者标记"已接受"的审计发现。被抑制的匹配项从活动摘要中移除，但保留在 JSON 输出中并附带活跃抑制通知——满足合规审计可追溯性要求
- **子代理委派标签**：为 delegated subagents 增加标签标识，提升多代理编排的可观测性

**破坏性变更**：无；`suppressions` 为新增可选字段，默认行为不变

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#83325](https://github.com/openclaw/openclaw/pull/83325) | [steipete](https://github.com/steipete) | **修复 Control UI 源站绑定漏洞**：为 `0.0.0.0` 等别名正确播种 allowed-origin，防止非环回绑定绕过安全检查；对齐 doctor 迁移步骤 | ✅ **已合并** |
| [#83326](https://github.com/openclaw/openclaw/pull/83326) | [yetval](https://github.com/yetval) | **修复 Cron 消息重复**：抑制显式 `delivery.to` 配置下的自动源回复，解决 Discord 等频道 2-3 条重复消息问题（P1 级消息丢失） | ✅ **新提交** |

### 待合并的高价值 PR（安全与稳定性聚焦）

| PR | 作者 | 规模 | 价值评估 |
|:---|:---|:---|:---|
| [#45783](https://github.com/openclaw/openclaw/pull/45783) | [bestcarly](https://github.com/bestcarly) | XL | **隐私流量过滤**：在 LLM 出向流量前增加 PII/密钥检测替换层，填补"日志脱敏但流量未脱敏"的安全真空 |
| [#45901](https://github.com/openclaw/openclaw/pull/45901) | [Tiooo111](https://github.com/Tiooo111) | XL | **会话目录权限加固**：`agents/<id>/sessions/` 从默认 `0755` 改为私有权限，防止敏感会话转录泄露 |
| [#45290](https://github.com/openclaw/openclaw/pull/45290) | [haiyuzhong1980](https://github.com/haiyuzhong1980) | XL | **投递回退硬化**：保留最后可投递通道、镜像会话投递上下文回退、处理 `input_length` 停止原因、剥离泄露的工具调用伪影 |
| [#45044](https://github.com/openclaw/openclaw/pull/45044) | [zijiegeng](https://github.com/zijiegeng) | M | **网关重启会话保护**：防止 mid-turn 网关重启导致整个会话文件清空（数据丢失 P1） |

**整体推进评估**：今日代码流动以**安全债务偿还**和**可靠性加固**为主线，无重大新功能落地。beta.5 的 Mac 体验优化 + 4 项安全/稳定性 PR 进入 review，项目健康度评分：**B+**（活跃度高，但 448 待合并 PR 显示 review 带宽瓶颈）

---

## 4. 社区热点

### 🔥 最高讨论热度 Issue：[#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)
| 指标 | 数值 |
|:---|:---|
| 评论数 | **104** |
| 👍 | 75 |
| 创建 | 2026-01-01（已持续 137 天）|
| 标签 | `enhancement`, `help wanted`, `P2`, `impact:security` |

**诉求分析**：这是 OpenClaw 最古老且持续高热的跨平台需求。macOS/iOS/Android 已有应用，但 **Linux/Windows 桌面端完全缺失**，企业用户无法将 OpenClaw 部署到标准开发环境。标签中的 `impact:security` 暗示非官方客户端可能存在私钥管理风险。高 👍 数（75）表明这是** blocking adoption** 级别的需求，但 `clawsweeper:needs-product-decision` 标签显示产品团队尚未拍板资源投入。

---

### 次高热议题

| Issue | 评论 | 核心诉求 | 状态信号 |
|:---|:---|:---|:---|
| [#22438 Tiered bootstrap file loading](https://github.com/openclaw/openclaw/issues/22438) | 16 | 大工作区用户希望按层级加载 bootstrap 文件，减少每会话 LLM token 浪费 | `linked-pr-open`，有 PR 在推进 |
| [#11829 Security Roadmap: API Keys](https://github.com/openclaw/openclaw/issues/11829) | 15 | 系统性保护 API 密钥不被泄露到 prompt 或 chat 的多层方案 | `security` 专项，无近期 PR |
| [#32473 Control UI HTTPS/localhost 安全上下文](https://github.com/openclaw/openclaw/issues/32473) | 15 | VPS + Docker 部署场景下设备身份验证失败 | 回归问题，`needs-security-review` |
| [#29387 Bootstrap files in agentDir 被静默忽略](https://github.com/openclaw/openclaw/issues/29387) | 13 | 每代理配置目录下的 `.md` 文件不生效，仅 workspace 目录有效 | `linked-pr-open`，P1 级 |

---

## 5. Bug 与稳定性

### 🔴 P1 级（严重/数据丢失/服务中断）

| Issue | 描述 | 回归？ | Fix PR |
|:---|:---|:---|:---|
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | `agentDir` 下 bootstrap `.md` 文件被静默忽略，仅 workspace 目录生效 | 否 | `linked-pr-open` |
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | Agent 回复前一条消息而非当前消息（会话上下文混淆） | 否 | `needs-live-repro` |
| [#31583](https://github.com/openclaw/openclaw/issues/31583) | `exec` 工具不继承 `skills.entries.*.env` 环境变量，密钥注入失败 | **是** | `linked-pr-open` |
| [#41744](https://github.com/openclaw/openclaw/issues/41744) | 飞书：read image 工具结果在最终出向 payload 前丢失媒体 | 否 | `linked-pr-open` |
| [#44905](https://github.com/openclaw/openclaw/issues/44905) | Discord 泄露内部工具调用痕迹（`NO_REPLY`, `to=functions` 等） | 否 | `needs-security-review` |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | `write` 工具无 append 模式，隔离 cron 会话覆盖共享文件 | 否 | `linked-pr-open` |
| [#40540](https://github.com/openclaw/openclaw/issues/40540) | Windows `openclaw update` 命令 EBUSY 错误 | 否 | `source-repro` |
| [#43661](https://github.com/openclaw/openclaw/issues/43661) | 压缩超时导致会话无限挂起，重复发送相同消息 | 否 | `needs-live-repro` |
| [#41165](https://github.com/openclaw/openclaw/issues/41165) | Telegram DM 仍落入 `agent:main:main`，污染主会话 | 否 | `linked-pr-open` |
| [#45049](https://github.com/openclaw/openclaw/issues/45049) | Agent 循环允许模拟工具调用而非强制真实调用 | 否 | 新报，无 PR |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 多代理编排不稳定：并发配置覆盖、会话锁失败、子任务脱管 | 否 | `linked-pr-open` |

### 🟡 P2 级（功能受损/体验下降）

| Issue | 描述 | 回归？ | Fix PR |
|:---|:---|:---|:---|
| [#45698](https://github.com/openclaw/openclaw/issues/45698) | Control UI 运行一段时间后逐渐卡死（2026.3.12） | 否 | `impact:crash-loop` |
| [#44993](https://github.com/openclaw/openclaw/issues/44993) | Heartbeat/Cron "当前时间" 时间戳不刷新 | **是** | [#44973](https://github.com/openclaw/openclaw/pull/44973) |
| [#43747](https://github.com/openclaw/openclaw/issues/43747) | 内存管理混乱：同团队 3 人出现 3 种不同存储行为 | **是** | `needs-maintainer-review` |
| [#38439](https://github.com/openclaw/openclaw/issues/38439) | Webchat avatar 端点 404 | **是** | `linked-pr-open` |

### ✅ 已关闭

| Issue | 说明 |
|:---|:---|
| [#81368](https://github.com/openclaw/openclaw/issues/81368) | 隔离 cron watchdog 仍在 beta.4 的 `attempt_dispatch` 后 60s 杀死任务——验证 beta.5 修复状态 |

---

## 6. 功能请求与路线图信号

### 高可行性（已有 PR 或明确路径）

| 需求 | Issue/PR | 纳入信号 |
|:---|:---|:---|
| **分层 bootstrap 加载** | [#22438](https://github.com/openclaw/openclaw/issues/22438) | `linked-pr-open`，节省 token 的刚需 |
| **Cron 直接执行模式** | [#18160](https://github.com/openclaw/openclaw/issues/18160) | 9 👍，避免 LLM 解释简单命令的 overhead |
| **memory_search 递归子目录** | [#34400](https://github.com/openclaw/openclaw/issues/34400) | 日常记忆文件累积场景明确 |
| **每代理成本预算** | [#42475](https://github.com/openclaw/openclaw/issues/42475) | 企业运维刚需，网关层拦截 |
| **子代理完成路由控制** | [#27445](https://github.com/openclaw/openclaw/issues/27445) | 4 👍，多步骤工作流编排关键 |

### 战略级（需产品决策）

| 需求 | Issue | 障碍 |
|:---|:---|:---|
| **Linux/Windows 原生应用** | [#75](https://github.com/openclaw/openclaw/issues/75) | `needs-product-decision` × 137 天 |
| **多代理协作增强**（能力画像+共享黑板+分层记忆+token 治理） | [#35203](https://github.com/openclaw/openclaw/issues/35203) | RFC 级别，架构改动大 |
| **SKILL.md 前置模型路由** | [#43260](https://github.com/openclaw/openclaw/issues/43260) | 需协调 agent/skill 配置层级 |
| **路径级 RWX 权限** | [#39979](https://github.com/openclaw/openclaw/issues/39979) | 替代二进制 allowlist，安全模型重构 |

### 近期可能落地（beta 周期内）

- **隐私流量过滤** [#45783](https://github.com/openclaw/openclaw/pull/45783)：XL 规模但设计清晰，beta.6 前可能合并
- **TTS 持久语音切换** [#45530](https://github.com/openclaw/openclaw/pull/45530)：Provider 无关机制，用户体验提升明确
- **MathJax/LaTeX Control UI 支持** [#42840](https://github.com/openclaw/openclaw/issues/42840)：4 👍，学术/技术用户刚需

---

## 7. 用户反馈摘要

### 💔 核心痛点

| 场景 | 来源 Issue | 情绪强度 |
|:---|:---|:---|
| **"我买了 Mac，同事用 Linux，没法协作"** | [#75](https://github.com/openclaw/openclaw/issues/75) | 😤 长期挫败 |
| **"Agent 突然开始回答上上个问题"** | [#32296](https://github.com/openclaw/openclaw/issues/32296) | 😰 信任崩塌 |
| **"Cron 日志被覆盖，每天的数据全丢了"** | [#40001](https://github.com/openclaw/openclaw/issues/40001) | 😡 数据愤怒 |
| **"3 个人 3 种内存行为，完全不可预期"** | [#43747](https://github.com/openclaw/openclaw/issues/43747) | 🤯 团队混乱 |
| **"Discord 用户看到 `NO_REPLY` 和原始 JSON"** | [#44905](https://github.com/openclaw/openclaw/issues/44905) | 😱 专业形象受损 |
| **"VPS + Docker 部署后 Control UI 打不开"** | [#32473](https://github.com/openclaw/openclaw/issues/32473) | 😤 部署阻塞 |

### 😊 满意点（从 PR 评论推断）

- Mac 用户认可 Settings 重构的"卡片布局一致性"（beta.5）
- 安全团队欢迎 `security.audit.suppressions` 的合规可追溯性（beta.4）
- 飞书用户期待 fetch 单条消息功能的补齐 [#81243](https://github.com/openclaw/openclaw/pull/81243)

### 🔍 使用模式洞察

- **企业/团队部署**显著增加：成本预算、审计抑制、路径权限、备份排除模式等需求均指向多租户/合规场景
- **Cron 作为核心工作负载**：直接执行模式、append 写入、时间戳刷新、隔离会话等 issue 显示 cron 已超越"简单定时任务"成为生产管道
- **多代理编排从实验走向生产**：并发冲突、子任务脱管、A2A 循环调用等问题表明用户正在构建复杂工作流

---

## 8. 待处理积压

### 🚨 需维护者紧急关注（>30 天无实质推进）

| Issue | 天数 | 风险 | 建议动作 |
|:---|:---|:---|:---|
| [#75 Linux/Windows Apps](https://github.com/openclaw/openclaw/issues/75) | **137 天** | 用户流失至竞品 | 产品负责人明确路线图或发布技术白皮书说明阻塞因素 |
| [#6615 exec-approvals denylist](https://github.com/openclaw/openclaw/issues/6615) | **106 天** | 安全策略不完整 | 与路径级 RWX 权限 [#39979](https://github.com/openclaw/openclaw/issues/39979) 合并评估 |
| [#16670  onboarding 强制记忆配置](https://github.com/openclaw/openclaw/issues/16670) | **92 天** | 新用户激活率低 | 快速 win：在 setup wizard 增加单一步骤 |
| [#17840 反应触发 Agent 轮次](https://github.com/openclaw/openclaw/issues/17840) | **91 天** | 交互模式创新停滞 | 评估与现有 event 系统的兼容性 |
| [#28300 主题定制系统](https://github.com/openclaw/openclaw/issues/28300) | **80 天** | 用户体验差异化 | 5 👍，社区贡献友好，可标记 `good first issue` |

### PR Review 带宽瓶颈

- **448 个待合并 PR** 中，XL 规模的安全/核心 PR（#45783, #45901, #45290）需要资深维护者深度 review
- 建议：建立 `security-fast-track` 标签，对 P1 安全 PR 保证 48h 内首次 review

---

*日报生成时间：2026-05-18 | 数据来源：GitHub API 快照 | 下次更新：2026-05-19*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析 | 2026-05-18

---

## 1. 生态全景

个人 AI 助手开源生态正处于**"功能扩张向质量巩固"的关键转折期**：头部项目（OpenClaw、ZeroClaw、Hermes Agent）日均 50+ PR/Issue 的高吞吐量显示技术迭代仍在加速，但 v1.1.7 模式化故障（CoPaw）、v0.13.0 打包回归（Hermes）、v0.28.2 UI 崩溃（IronClaw）等事件表明**稳定性债务正在集中到期**。国产大模型（DeepSeek-V4、Kimi、Qwen）的 reasoning/thinking 模式兼容性成为新的技术战场，而多平台桌面端支持（Linux/Windows）仍是最大公约数级别的 adoption 阻塞点。安全审计从"可选增强"演变为"合规刚需"，隐私流量过滤、API 密钥保护、沙箱隔离等需求在多项目同步涌现。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PR | Release | 健康度 | 关键信号 |
|:---|:---:|:---:|:---|:---|:---|
| **OpenClaw** | 500（481 活跃/新开，19 关闭） | 500（448 待合并，52 已合并/关闭） | v2026.5.16-beta.5（连续 beta） | **B+** | 安全债务主动偿还，但 448 待合并 PR 显 review 瓶颈 |
| **NanoBot** | 7（6 活跃，1 关闭） | 18（9 待审，9 合并/关闭） | 无 | **B+** | WebUI 稳定性 3 个关联 Bug 需专项排查 |
| **Hermes Agent** | 50（42 活跃，8 关闭） | 50（26 待审，24 合并/关闭） | 无（v0.13.0 打包回归） | **B** | 四层容错体系架构升级，但版本发布流程存质量缺口 |
| **PicoClaw** | 12（7 活跃，5 关闭） | 7（6 待合并，1 关闭） | v0.2.8-nightly | **B-** | 4 个 stale PR，review 带宽瓶颈，RISC-V 盲区暴露 |
| **NanoClaw** | 10（8 活跃，2 关闭） | 20（10 待审，10 合并/关闭） | 无 | **B+** | Signal 渠道紧急修复响应快，CLI 数据层攻坚中 |
| **NullClaw** | 3（全部活跃，0 关闭） | 0（0 待审，0 合并） | 无 | **C** | 连续 3 日零合并，核心 Bug 零响应，健康度下行 |
| **IronClaw** | 9（全部活跃，0 关闭） | 45（31 待审，14 合并/关闭） | 无（v0.28.2 回归） | **B-** | Reborn 架构里程碑达成，但产品表面质量承压 |
| **LobsterAI** | 0 | 9（7 stale 待合并，2 关闭） | 无 | **C+** | 全 stale PR，2 个月零合并，贡献者流失风险极高 |
| **Moltis** | 2（全部活跃） | 3（全部合并/关闭） | 20260517.03 | **B+** | 远程访问双轨方案落地，外部智能体持久化完成 |
| **CoPaw** | 18（16 活跃，2 关闭） | 16（12 待审，4 合并/关闭） | 无 | **B-** | 安全漏洞首次公开披露（#4470），v1.1.7 稳定性危机 |
| **ZeroClaw** | 20（16 活跃，4 关闭） | 50（39 待审，11 合并/关闭） | 无 | **B** | 国产模型 reasoning 兼容性危机，CI 静默失效，39 待合并 PR |
| **TinyClaw** | 0 | 0 | 无 | **—** | 24h 无活动 |
| **ZeptoClaw** | 0 | 0 | 无 | **—** | 24h 无活动 |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | 500 Issues + 500 PR / 24h，绝对量级领先 | ZeroClaw、Hermes Agent 同梯队（50/日），NanoBot、NanoClaw 低一个数量级 |
| **技术路线** | **"安全优先的渐进式演进"**：beta.4→beta.5 聚焦安全审计抑制 + Mac 体验优化，无重大新功能 | Hermes 激进推进辅助任务四层容错、Telegram 集群编排；ZeroClaw 押注国产模型生态；IronClaw 重构 Reborn 架构 |
| **核心优势** | ① **安全基础设施最完整**：审计抑制、PII 流量过滤、会话目录权限加固、沙箱隔离形成体系 ② **跨平台应用矩阵**：Mac/iOS/Android 原生应用覆盖最全 ③ **企业合规就绪**：`security.audit.suppressions` 满足可追溯性要求 | 对比：ZeroClaw 安全模块测试覆盖率 89%（CoPaw #4466）但功能侧暴露 RCE 漏洞；Hermes 安全边界因环境变量命名漂移被意外削弱 |
| **关键短板** | **Linux/Windows 桌面端完全缺失**（#75，137 天，75 👍），企业开发环境 adoption 被阻塞；448 待合并 PR 显示 review 带宽与社区规模不匹配 | ZeroClaw、Hermes 均有 Windows/Linux 支持（尽管质量参差）；NanoBot、PicoClaw 覆盖更全 |
| **差异化标签** | **"Apple 生态最优解 + 企业安全合规首选"**，但跨平台承诺兑现滞后正在侵蚀这一定位 | |

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---|
| **国产大模型 reasoning/thinking 兼容性** | ZeroClaw（#6059 DeepSeek-V4、#5600 Kimi、#6672 小米 mimo）、PicoClaw（#2745 OpenRouter reasoning 泄漏）、CoPaw | 抽象 `<think>` / `<thought>` / `reasoning_content` 协议差异，避免硬编码 OpenAI 行为假设 | 🔴 **极高** |
| **多平台桌面端支持（Linux/Windows）** | OpenClaw（#75，137 天）、Hermes（Windows 安装脚本修复 #27622）、IronClaw（PR #6710 关闭）、NanoBot（#3876 localhost 绑定限制） | 企业标准开发环境部署、远程访问、容器化场景的基础能力 | 🔴 **极高** |
| **安全审计与隐私保护** | OpenClaw（beta.4 审计抑制、#45783 PII 流量过滤、#45901 目录权限）、CoPaw（#4470 RCE 漏洞、#4466 安全测试 L1 硬门槛）、ZeroClaw（#6720-#6723 配置-代码脱节） | API 密钥防泄漏、流量脱敏、沙箱隔离、合规可追溯性 | 🟡 **高** |
| **配置系统可靠性** | ZeroClaw（nick-pape 4 连发：死代码、硬编码超时、无消费者配置）、Moltis（#1006 auto-compact 剥离默认值）、CoPaw（#2684 安装脚本依赖问题） | 配置 schema 与实际代码消费严格同步，避免"配置即谎言" | 🟡 **高** |
| **Cron/定时任务生产化** | OpenClaw（#18160 直接执行模式、#40001 append 写入、#44993 时间戳刷新）、NanoClaw（#2481 终止全 Agent 输出自抑制）、Hermes（#27585 goal 裁判错误 fail-open）、ZeroClaw（#6705 Windows cron 修复、#6739 时区不一致） | 从"简单定时任务"演进为可靠数据管道：幂等性、持久化、时区治理、跨平台兼容 | 🟡 **高** |
| **多代理编排可靠性** | OpenClaw（#43367 并发配置覆盖、会话锁失败）、Hermes（#27625 四层容错、#22201 独立 fallback_providers）、NanoClaw（#2404 MCP 双投递） | 子任务生命周期管理、上下文隔离、故障回退、可观测性 | 🟢 **中高** |
| **E2E/测试基础设施** | CoPaw（hanson-hex 5 个 E2E Issue + 2 PR，security 89% 覆盖率）、IronClaw（#3447 夜间 E2E 持续失败 8 天） | 从"补救性投入"到"质量门禁"，防止回归外泄 | 🟢 **中高** |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 企业级安全合规、Apple 原生体验、Skills 生态 | 企业 IT/安全团队、Apple 生态开发者 | Swift/Apple 原生技术栈深厚；模块化 Skills + Cron 架构；安全基础设施最完整 |
| **ZeroClaw** | 国产模型生态、多 Provider 兼容、桌面端覆盖 | 中国及开源模型用户、跨平台部署者 | Rust/Zig 混合底层；OpenAI-compatible 抽象层；配置系统问题暴露架构债务 |
| **Hermes Agent** | 辅助任务容错、多网关运营（Telegram 为主）、Kanban 工作流 | 多网关运营团队、高并发客服场景 | Node.js 运行时；四层 fallback 链式降级；Telegram 集群编排独特 |
| **IronClaw** | Reborn 架构（Configuration-as-Code）、IronHub 生态、WASM 扩展 | 高级开发者、可编程 Agent 平台构建者 | Rust 主导；WASM 沙箱执行；TOML 配置体系；MCP 协议层设计 |
| **NanoBot** | 长任务管理（`/goal`）、国产模型限流适配、Docker 部署 | 中国大陆自托管用户、长对话场景 | Python 技术栈；DeepSeek/MiniMax 原生集成；WebUI 稳定性待巩固 |
| **NanoClaw** | Signal 渠道、CLI 模式成本优化、容器化部署 | 隐私敏感用户（Signal）、成本敏感部署者 | Claude 生态深度集成；v2 数据模型模块化；MCP stdio/HTTP 双传输 |
| **CoPaw** | 多 IM 渠道（钉钉/微信）、Console 可视化、Skill 市场 | 中国企业用户、低代码运营者 | Python/Electron；E2E 测试激进投入；安全漏洞暴露架构风险 |
| **Moltis** | 远程访问基础设施、外部智能体持久化、语音合成 | 边缘部署、IoT/嵌入式场景 | NetBird/Cloudflare/Tailscale/ngrok 四方案矩阵；外部 Agent 会话绑定 |
| **PicoClaw** | 本地模型易用性（LM Studio/Ollama）、嵌入式/低资源场景 | 非技术用户、Android/Termux 边缘部署 | 轻量级设计；frontmatter 配置即代码；但新手友好度与安全性平衡失当 |
| **LobsterAI** | OpenClaw 插件封装、Electron 桌面端、Skill 统计可视化 | LobsterAI 产品用户、OpenClaw 生态扩展者 | 深度绑定 OpenClaw；React/Electron；维护节奏严重滞后 |
| **NullClaw** | Zig 底层高性能、自托管极简部署 | 系统级开发者、极致性能追求者 | Zig 全栈；SubagentManager 消息总线设计；但维护响应停滞 |

---

## 6. 社区热度与成熟度

### 快速迭代阶段（日均 20+ 更新，功能扩张为主）

| 项目 | 特征 | 风险 |
|:---|:---|:---|
| **OpenClaw** | 安全债务偿还 + Mac 体验优化，beta 周期密集 | 448 待合并 PR，review 瓶颈；Linux/Windows 承诺兑现压力 |
| **ZeroClaw** | 国产模型兼容性紧急响应，Skills v0.7.6 协调 | 39 待合并 PR，CI 静默失效，配置-代码脱节 |
| **Hermes Agent** | 辅助任务四层容错架构升级，Telegram 集群编排 | v0.13.0 打包回归，版本发布流程质量缺口 |
| **CoPaw** | E2E 测试基础设施 Phase 2 密集建设 | v1.1.7 稳定性危机 + 安全漏洞，信任崩塌风险 |
| **IronClaw** | Reborn 架构从文档到可运行二进制跨越 | v0.28.2 回归缺陷集群，产品表面质量承压 |

### 质量巩固阶段（修复响应快，功能交付保守）

| 项目 | 特征 | 风险 |
|:---|:---|:---|
| **NanoBot** | WebUI 稳定性 3 Bug 快速修复，`/goal` 长任务交付 | Docker/WebUI 部署体验仍需系统性打磨 |
| **NanoClaw** | Signal 渠道紧急修复当日响应，CLI 数据层攻坚 | v2 模块化带来的接口边界治理挑战 |
| **Moltis** | 远程访问双轨方案落地，外部智能体持久化完成 | 配置系统边缘情况（auto-compact）、模型适配滞后 |

### 停滞/下行风险（低更新或零响应）

| 项目 | 特征 | 风险 |
|:---|:---|:---|
| **NullClaw** | 连续 3 日零合并，3 个核心 Bug 零响应 | 维护者可用性危机，项目可能 archive |
| **LobsterAI** | 7 个 stale PR 全部 2 个月未审阅，今日零 Issue | 贡献者流失，OpenClaw 生态扩展位被替代 |
| **PicoClaw** | 4 个 stale PR，#1042 exec 安全规则 73 天未决 | 功能迭代速度受限于 review 带宽，社区挫败感累积 |
| **TinyClaw / ZeptoClaw** | 24h 零活动 | 项目活跃度存疑，可能为早期实验或已弃用 |

---

## 7. 值得关注的趋势信号

| 趋势 | 信号源 | 对开发者的参考价值 |
|:---|:---|:---|
| **"Thinking 模式"成为 Provider 兼容新战场** | ZeroClaw #6059/#5600/#6672、PicoClaw #2745、CoPaw 推理优化 | 设计 LLM 客户端时，**必须抽象 reasoning 协议层**，支持 `<think>` / `<thought>` / `reasoning_content` 变体，避免硬编码 OpenAI 假设。建议建立"推理标签注册表"机制。 |
| **配置系统的"语义一致性"危机** | ZeroClaw #6720-#6723、Moltis #1006、IronClaw v0.28.2 回归 | **配置 schema 与实际代码消费需自动化验证**。建议引入静态分析工具（如 Rust 的 `confique` 或代码生成）确保字段声明即消费，消除"死配置"信任侵蚀。 |
| **安全从"功能"演进为"质量门禁"** | CoPaw security L1 硬门槛、OpenClaw 审计抑制合规设计、Hermes 沙箱绕过失效 | **安全测试必须进入 CI 阻塞路径**，而非事后审计。建议参考 CoPaw #4466 的 481 单元测试 + 89% 覆盖率模式，但需避免 IronClaw #3447 的"测试持续失败却无人修复"形式主义。 |
| **Cron 从"定时任务"到"生产管道"** | OpenClaw #18160/#40001、NanoClaw #2481、ZeroClaw #6739 | 设计 Agent 调度系统时，**需预设幂等性、append 写入、时区治理、跨平台兼容**（尤其 Windows `sh` 替代），而非后期补丁。 |
| **"诊断黑箱"成为用户体验核心痛点** | CoPaw #3640（Agent 假死不报错）、#4453/#4469（无响应无日志）、Hermes #27555（静默失败） | **可观测性必须内建于架构**，而非外部附加。建议强制要求：所有异步操作必须有结构化日志、所有状态转换必须有事件溯源、所有失败路径必须有用户可见错误码。 |
| **IM 协议维护成为长期负债** | NanoBot #3863/#3882 微信、NanoClaw Signal #2528、Hermes Telegram #22385 | 第三方 IM 集成建议**抽象为独立服务/适配器层**，核心项目仅维护协议无关的 webhook/MCP 接口，避免协议变更导致核心代码频繁扰动。 |
| **"边缘用户"与"核心开发者"的体验断层** | PicoClaw #28（LM Studio 一键连接，19 评论）、#1042（exec 安全误杀） | 安全默认值与新手友好需显式分层：**"首次运行向导"自动放宽 + 生产环境强制收紧**，而非单一策略两端不讨好。 |

---

## 7. 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-18

## 1. 今日速览

NanoBot 今日呈现**高活跃度开发态势**：18 个 PR 更新（9 合并/关闭、9 待审）与 7 个 Issues 更新（6 活跃、1 关闭），显示社区与核心团队同步推进。WebUI 稳定性成为焦点——3 个独立 Bug 报告围绕会话渲染、连接断开和 localhost 绑定限制，同时 4 个 PR 已快速修复流式输出、竞态条件及 Docker 部署文档。微信渠道协议升级需求（#3882）虽被关闭，但暴露了第三方 IM 集成的长期维护风险。整体项目健康度良好，修复响应速度较快，但 Docker/WebUI 部署体验仍需系统性打磨。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR（9 个）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#3877](https://github.com/HKUDS/nanobot/pull/3877) | Re-bin | **WebUI 流式渲染与长会话性能优化**：减少 React/Markdown 重渲染，优化长历史记录加载 | 解决 WebUI 卡顿核心瓶颈，提升 Agent 长对话可用性 |
| [#3878](https://github.com/HKUDS/nanobot/pull/3878) | li-yazhou | **CLI 推理 token 缓冲显示**：DeepSeek-V4 等模型的推理 token 不再逐行输出 | 消除 CLI 体验痛点，模型兼容性提升 |
| [#3881](https://github.com/HKUDS/nanobot/pull/3881) | chengyongru | **修复 AutoCompact 与 Consolidator 竞态条件**：统一锁机制，避免会话数据损坏 | 关键稳定性修复，防止后台任务冲突导致的数据丢失 |
| [#3874](https://github.com/HKUDS/nanobot/pull/3874) | voidborne-d | **Docker 部署文档对齐**：`docker run gateway` 示例与 `docker-compose.yml` 一致化 | 减少用户部署踩坑，回应 #3873 反馈 |
| [#3870](https://github.com/HKUDS/nanobot/pull/3870) | ariedov | **Docker 构建修复**：`hatch_build.py` 复制问题 | 阻断性构建故障修复 |
| [#3872](https://github.com/HKUDS/nanobot/pull/3872) | huanglei214 | **Docker 构建 + WebUI 端口修复** | 补充前端端口暴露，完善容器化支持 |
| [#3788](https://github.com/HKUDS/nanobot/pull/3788) | Re-bin | **`/goal` 命令与长任务（long_task）端到端交付** | 重要功能里程碑：会话级持续目标状态管理 |
| [#3864](https://github.com/HKUDS/nanobot/pull/3864) | chengyongru | **中文服务商限流识别**：将"访问量过大"标记为瞬态错误，支持自动重试 | 中国大陆用户核心体验优化 |
| [#3866](https://github.com/HKUDS/nanobot/pull/3866) | olgagaga | **文档扩展：Secrets 环境变量示例** | 安全配置可操作性提升 |

**整体评估**：今日合并 PR 覆盖 **稳定性（竞态/限流/构建）、性能（流式/长会话）、功能（goal 系统）、文档（Docker/Secrets）** 四大维度，项目在技术债务偿还与功能演进间取得平衡。

---

## 4. 社区热点

### 最高讨论热度：[#3790 WebUI 会话打印内容显示错乱](https://github.com/HKUDS/nanobot/issues/3790)
- **14 条评论**，创建 5 月 14 日，持续活跃至今日
- **核心诉求**：v0.1.5.post3.2026.05.13 更新后，WebUI 会话内容渲染异常，需手动刷新恢复
- **背后信号**：WebUI 前端状态管理存在回归，可能与近期 React/Markdown 渲染优化（如 #3877）相关，需确认修复覆盖场景

### 其他高关注议题：
| Issue | 评论 | 核心矛盾 |
|:---|:---|:---|
| [#3863 微信不能 Login](https://github.com/HKUDS/nanobot/issues/3863) | 2 | 微信版本检测失效，第三方 IM 协议维护滞后 |
| [#3882 升级微信渠道底层协议](https://github.com/HKUDS/nanobot/issues/3882) | 0（已关闭） | 维护者主动关闭，可能已内部规划或判定为外部依赖问题 |

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 状态 | 关联 Fix |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#3790](https://github.com/HKUDS/nanobot/issues/3790) | WebUI 会话内容渲染错乱（14 评论，用户持续反馈） | **开放** | #3877 可能部分覆盖，需验证 |
| 🔴 **高** | [#3884](https://github.com/HKUDS/nanobot/issues/3884) | WebUI 首轮响应后会话自动关闭（Debian + WebSocket） | **开放，0 评论** | 无明确 fix，Gateway/WebSocket 连接管理问题 |
| 🟡 **中** | [#3863](https://github.com/HKUDS/nanobot/issues/3863) | 微信登录失败："版本较低"提示 | **开放** | #3882 关闭，未提供替代方案 |
| 🟡 **中** | [#3857](https://github.com/HKUDS/nanobot/issues/3857) | Bootstrap HTTP 500，Gateway 运行但前端无法访问 | **开放** | #3874/#3875 文档修复，可能涉及 #3876 的 localhost 限制 |
| 🟡 **中** | [#3873](https://github.com/HKUDS/nanobot/issues/3873) | Docker 部署文档与 v0.2.0 多处不一致 | **开放** | #3874/#3875 已合并，待用户验证 |

**关键风险**：WebUI 存在 **3 个独立但可能关联的稳定性问题**（渲染错乱、会话关闭、localhost 绑定限制），建议维护者专项排查 Gateway → WebSocket → Frontend 全链路。

---

## 6. 功能请求与路线图信号

| PR/Issue | 类型 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#3883](https://github.com/HKUDS/nanobot/pull/3883) CLI 模型配置管理 | 新功能 | **高** | 基础运维功能，代码完整，当日提交 |
| [#3879](https://github.com/HKUDS/nanobot/pull/3879) MiniMax 图像生成 | 新 Provider | **高** | 扩展现有 provider 体系，实现规范 |
| [#3847](https://github.com/HKUDS/nanobot/pull/3847) skill_load 工具 | 稳定性增强 | **中高** | 解决多轮对话技能内容丢失的实际痛点 |
| [#3865](https://github.com/HKUDS/nanobot/pull/3865) BM25-lite 技能路由 | 性能优化 | **中** | ~60% system prompt 缩减，但需评估与现有路由的兼容性 |
| [#3880](https://github.com/HKUDS/nanobot/pull/3880) 工具结果压缩归档 | 性能优化 | **中** | 解决长工具输出淹没 LLM 上下文的问题 |
| [#3368](https://github.com/HKUDS/nanobot/pull/3368) 心跳模型覆盖 | 成本优化 | **中** | 运营侧需求，实现干净，但已挂起近一个月 |
| [#3876](https://github.com/HKUDS/nanobot/issues/3876) WebUI 解除 localhost 绑定 | 部署需求 | **高** | Docker/远程部署的阻断性限制，社区强需求 |

**路线图信号**：CLI 工具链完善（#3883）与多 Provider 扩展（#3879）显示项目正向"可运维的生产级平台"演进；BM25 路由与工具压缩代表**上下文成本优化**成为新焦点。

---

## 7. 用户反馈摘要

### 痛点提炼

| 场景 | 具体表现 | 情绪强度 |
|:---|:---|:---|
| **Docker 部署** | "按照文档操作遇到 403、健康检查失败、bwrap 沙箱失效"（#3873） | 😤 高挫败感 |
| **WebUI 远程访问** | "任何标准部署场景下都无法从容器外访问"（#3876） | 😤 阻断性 |
| **微信集成** | "已更新到最新微信，仍提示版本低"（#3863） | 😤 功能完全不可用 |
| **CLI 输出体验** | 推理 token 逐行显示"像打字机故障"（#3788，已修复） | 😠 体验差 |

### 满意点
- 快速响应：#3788 的 CLI 问题当日提交当日合并
- 功能交付：`/goal` 长任务系统端到端落地（#3788）

### 关键使用场景
- **企业/自托管部署**：Docker + 反向代理 + 远程访问是主流诉求
- **多模型切换**：DeepSeek、MiniMax 等国产模型集成需求上升
- **IM 机器人**：微信作为关键渠道，协议维护压力显著

---

## 8. 待处理积压

| PR/Issue | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|
| [#2060](https://github.com/HKUDS/nanobot/pull/2060) Shell 工具路径白名单 | 2026-03-15 | 2026-05-17 | **挂起 2 个月**，`restrict_to_workspace` 场景的基础功能缺失 |
| [#2867](https://github.com/HKUDS/nanobot/pull/2867) Telegram 群组白名单 + 流式修复 | 2026-04-06 | 2026-05-17 | **挂起 6 周**，标记为 `[invalid]` 但未明确关闭原因，贡献者可能流失 |
| [#3368](https://github.com/HKUDS/nanobot/pull/3368) 心跳模型覆盖 | 2026-04-21 | 2026-05-17 | **挂起 4 周**，运营成本优化功能，实现已完成 |

**维护者行动建议**：
1. 对 #2060/#2867 明确审查结论或合并路径，避免贡献者倦怠
2. 对 #3790/#3884 建立 WebUI 稳定性专项跟踪，可能需协调 #3877 作者 Re-bin 深度介入

---

*日报基于 GitHub 公开数据生成，时间范围：2026-05-17 至 2026-05-18*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-18

## 1. 今日速览

Hermes Agent 今日呈现**高活跃度、高修复吞吐量**状态。过去24小时共处理 **50 条 Issues**（关闭 8 条，活跃 42 条）和 **50 条 PR**（合并/关闭 24 条，待审 26 条），无新版本发布。核心团队聚焦于**辅助任务容错体系重构**（多层 fallback 机制）、**Windows 安装体验修复**及**平台网关稳定性**（Telegram、Mattermost）。值得关注的是，今日出现多起 **v0.13.0 打包回归问题**（i18n 文件缺失、Homebrew 包不完整），表明版本发布流程存在质量控制缺口。

---

## 2. 版本发布

**无新版本发布**

> 注：v0.13.0 已于近期发布，但今日暴露出严重的打包回归问题（见 [#27632](https://github.com/NousResearch/hermes-agent/issues/27632)、[#27664](https://github.com/NousResearch/hermes-agent/issues/27664)），建议维护者评估是否需要紧急发布 v0.13.1。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 关闭 Issue |
|:---|:---|:---|:---|
| [#27625](https://github.com/NousResearch/hermes-agent/pull/27625) | teknium1 | **辅助任务四层容错体系**：链式 fallback → 主模型降级 → 显式 provider 容量错误门控 → 静默失败 | [#26803](https://github.com/NousResearch/hermes-agent/issues/26803), [#26882](https://github.com/NousResearch/hermes-agent/issues/26882) |
| [#26811](https://github.com/NousResearch/hermes-agent/pull/26811) | Bartok9 | 将配额耗尽识别为可 fallback 的支付错误；显式 provider 容量错误门控修复 | [#26803](https://github.com/NousResearch/hermes-agent/issues/26803) |
| [#26809](https://github.com/NousResearch/hermes-agent/pull/26809) | kagura-agent | 在 `_is_payment_error` 中检测配额关键词，允许显式 provider fallback | [#26803](https://github.com/NousResearch/hermes-agent/issues/26803) |
| [#27193](https://github.com/NousResearch/hermes-agent/pull/27193) | maxpunkt1337 | `hermes tools` ESC 键取消操作改为非变异行为，防止误配置 | - |
| [#27667](https://github.com/NousResearch/hermes-agent/pull/27667) | 5Hyeons | 稳定化环境隔离测试（`CONDA_PREFIX` 隔离、真实管道替换 MagicMock） | - |
| [#27668](https://github.com/NousResearch/hermes-agent/pull/27668) | gzsiang | **修复 11 项 CI 测试失败**，覆盖 provider 重配置、Telegram 网关等场景 | - |
| [#16308](https://github.com/NousResearch/hermes-agent/pull/16308) | briandevans | 具名 provider 凭证解析修复（`base_url` 覆盖时正确 Consult credential pool） | [#16290](https://github.com/NousResearch/hermes-agent/issues/16290) |
| [#16227](https://github.com/NousResearch/hermes-agent/pull/16227) | briandevans | Telegram 机器人集群编排：单管理 bot 调度多工作 bot 并行处理 | - |

**整体推进评估**：辅助任务可靠性从"单点故障"跃迁至"四层容错"，是架构级进步；CI 稳定性修复 unblock 了合并流水线；Telegram 集群编排能力扩展了高并发场景边界。

---

## 4. 社区热点

| 排名 | Issue/PR | 评论 | 热度分析 |
|:---|:---|:---|:---|
| 🔥1 | [#27339](https://github.com/NousResearch/hermes-agent/issues/27339) Prompt Cache 因动态工具重排失效 | 5 评论 | **核心架构痛点**：OpenAI 兼容后端的 KV Cache 优化被 agent 工具循环破坏，影响长对话成本与延迟。用户 zeljkokalezic 提供了 llama-server 复现路径，已关闭但需关注是否彻底修复。 |
| 🔥2 | [#27622](https://github.com/NousResearch/hermes-agent/issues/27622) Windows 安装脚本 PowerShell 语法错误 | 4 评论 | **新用户阻断问题**：`irm ... \| iex` 一键安装因 `[string]$Branch = "main"` 语法在 PowerShell 7.6.1 中失败，与 [#27397](https://github.com/NousResearch/hermes-agent/issues/27397) 同源，已关闭但影响 Windows 用户获取。 |
| 🔥3 | [#12058](https://github.com/NousResearch/hermes-agent/issues/12058) OpenAI Codex OAuth CLI/Telegram 网关凭证隔离 | 4 评论 | **长期悬案**：CLI 认证成功但 Telegram 网关报 "No Codex credentials"，暗示网关与 CLI 的凭证存储命名空间隔离，Docker/Coolify 部署场景受阻，4 月创建至今未解。 |
| 🔥4 | [#23496](https://github.com/NousResearch/hermes-agent/issues/23496) 浏览器工具环境变量命名不一致导致沙箱绕过失效 | 3 评论 | **安全相关**：`AGENT_BROWSER_CHROME_FLAGS` vs `AGENT_BROWSER_ARGS` 的命名漂移使 `--sandbox-bypass` 注入成为空操作，Headless VM 场景下的安全边界被意外削弱，已关闭。 |

**诉求洞察**：社区对**安装体验（Windows）**、**多网关凭证一致性**、**性能优化可预期性**的诉求强烈，且期望问题能被"彻底关闭"而非表面修复。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| **P1** | [#23496](https://github.com/NousResearch/hermes-agent/issues/23496) | ✅ 已关闭 | 浏览器工具沙箱绕过失效（安全边界缺口） | 已合并 |
| **P1** | [#26990](https://github.com/NousResearch/hermes-agent/issues/26990) | ✅ 已关闭 | xAI OAuth PKCE `code_verifier` 缺失导致 token 交换失败 | 已合并 |
| **P1** | [#27555](https://github.com/NousResearch/hermes-agent/issues/27555) | 🟡 开放 | Vision fallback_chain 参数名错误（`base_url` vs `explicit_base_url`）导致静默失败 | **待修复** |
| **P1** | [#27566](https://github.com/NousResearch/hermes-agent/issues/27566) | 🟡 开放 | 粗糙 token 估算导致上下文压缩死循环（50+ 工具场景） | **待修复** |
| **P1** | [#27632](https://github.com/NousResearch/hermes-agent/issues/27632) | 🟡 开放 | **v0.13.0 pip 包缺失 `locales/` 目录**，slash 命令显示原始 i18n 键 | **待修复** |
| **P1** | [#27664](https://github.com/NousResearch/hermes-agent/issues/27664) | 🟡 开放 | **Homebrew 包缺失 `hermes_cli.proxy` 子包**，`hermes proxy` 命令崩溃 | **待修复** |
| **P2** | [#26803](https://github.com/NousResearch/hermes-agent/issues/26803) | ✅ 已关闭 | 辅助 LLM 429 日配额不触发 fallback | [#27625](https://github.com/NousResearch/hermes-agent/pull/27625) |
| **P2** | [#27397](https://github.com/NousResearch/hermes-agent/issues/27397) | 🟡 开放 | Windows 一键安装 PowerShell 语法错误（同 #27622） | **待验证** |
| **P2** | [#27585](https://github.com/NousResearch/hermes-agent/issues/27585) | 🟡 开放 | `/goal` 目标裁判错误时 fail-open 导致消息 spam | **待修复** |
| **P2** | [#27592](https://github.com/NousResearch/hermes-agent/issues/27592) | 🟡 开放 | Telegram 网关自重启后 launchd job 卸载导致永久下线 | **待修复** |
| **P2** | [#27603](https://github.com/NousResearch/hermes-agent/issues/27603) | 🟡 开放 | `/indicator` slash 命令注册但无 handler 实现 | **待修复** |

**稳定性评估**：v0.13.0 存在**打包流程回归**（2 起 P1），建议立即阻断并修复；辅助任务容错体系虽架构升级，但 [#27555](https://github.com/NousResearch/hermes-agent/issues/27555) 显示参数契约漂移问题仍在侵蚀可靠性。

---

## 6. 功能请求与路线图信号

| Issue | 类型 | 信号强度 | 纳入可能性分析 |
|:---|:---|:---|:---|
| [#22201](https://github.com/NousResearch/hermes-agent/issues/22201) 各辅助任务独立 fallback_providers | Feature | ⭐⭐⭐⭐⭐ | **高**：与今日合并的 [#27625](https://github.com/NousResearch/hermes-agent/pull/27625) 架构完全对齐，下一版本自然延伸 |
| [#27630](https://github.com/NousResearch/hermes-agent/pull/27630) Kanban 原生 Codex worker lane | PR 待审 | ⭐⭐⭐⭐⭐ | **高**：扩展多 worker 执行模型至编码 CLI，符合 Kanban 产品方向 |
| [#27587](https://github.com/NousResearch/hermes-agent/issues/27587) Mattermost 交互式按钮审批 | Feature | ⭐⭐⭐⭐☆ | **中高**：网关安全交互的跨平台补齐，需评估 Mattermost API 限制 |
| [#4876](https://github.com/NousResearch/hermes-agent/issues/4876) Node.js 20→22 升级（LTS 4月 EOL） | Feature | ⭐⭐⭐⭐☆ | **中**：安全补丁截止迫在眉睫，但 Debian trixie 包可用性存疑 |
| [#4438](https://github.com/NousResearch/hermes-agent/issues/4438) 富电子表格 Skill | Feature | ⭐⭐⭐☆☆ | **中低**：技能生态扩展，但 openpyxl/pandas 抽象层优先级待排 |
| [#5041](https://github.com/NousResearch/hermes-agent/issues/5041) 工具调用的密码学审计追踪 | Feature | ⭐⭐⭐☆☆ | **低**：企业合规诉求，需 MCP 协议层配合，长期路线 |
| [#21525](https://github.com/NousResearch/hermes-agent/issues/21525) 统一超时配置替代硬编码 | Feature | ⭐⭐⭐⭐☆ | **中高**：本地模型用户痛点，与辅助任务容错体系可协同设计 |

---

## 7. 用户反馈摘要

### 😫 核心痛点

> **"安装即碰壁"** — Windows 用户 0thernes、bhattkunalb 连续报告 PowerShell 一键安装失败，错误信息 `The assignment expression is not valid` 对新用户极度不友好。

> **"认证迷宫"** — agencytechbot 的 Codex OAuth 在 CLI 与 Telegram 网关间行为不一致，Docker 部署场景的凭证隔离机制缺乏文档。

> **"压缩死循环"** — Nightmare928 描述 50+ 工具场景下"每 1-2 轮触发压缩，会话永不稳定"，直接影响长任务可用性。

> **"Telegram 图片黑洞"** — fwends 报告用户发送图片后 agent 耗时 30+ 分钟反复尝试读取而非快速失败，资源浪费严重。

### ✅ 满意信号

> briandevans 的 Telegram 集群编排 PR 显示团队正在积极扩展高并发场景能力；多层 fallback 体系（teknium1）回应了社区对可靠性的长期诉求。

### 📊 场景洞察

- **企业/自托管**：Docker、Homebrew、Windows Server 部署路径的打包质量成为采纳瓶颈
- **多网关运营**：Telegram 为主力，但 Mattermost、Feishu（[#27661](https://github.com/NousResearch/hermes-agent/pull/27661)）的交互深度追赶中
- **本地模型**：超时配置、token 估算粗糙等问题暴露本地与云端混合部署的成熟度差距

---

## 8. 待处理积压

| Issue | 创建日期 | 最后更新 | 天数 | 风险说明 |
|:---|:---|:---|:---|:---|
| [#12058](https://github.com/NousResearch/hermes-agent/issues/12058) OpenAI Codex OAuth Telegram 网关凭证隔离 | 2026-04-18 | 2026-05-17 | **30 天** | 🔴 **最高**：跨网关认证架构缺陷，影响 Docker 部署的核心功能 |
| [#4876](https://github.com/NousResearch/hermes-agent/issues/4876) Node.js 20→22 升级 | 2026-04-03 | 2026-05-17 | **45 天** | 🟡 Node 20 LTS 已 EOL（2026-04），安全补丁缺口扩大 |
| [#4438](https://github.com/NousResearch/hermes-agent/issues/4438) 富电子表格 Skill | 2026-04-01 | 2026-05-17 | **47 天** | 🟢 功能请求，非阻塞 |
| [#22385](https://github.com/NousResearch/hermes-agent/issues/22385) Telegram 图片无法读取 | 2026-05-09 | 2026-05-17 | **9 天** | 🟡 P1 级别，用户交互基础功能受损 |
| [#5041](https://github.com/NousResearch/hermes-agent/issues/5041) 密码学审计追踪 | 2026-04-04 | 2026-05-17 | **44 天** | 🟢 企业合规长期需求 |

**维护者行动建议**：
1. **紧急**：评估 v0.13.0 打包问题，考虑 hotfix 版本
2. **本周**：指派 [#12058](https://github.com/NousResearch/hermes-agent/issues/12058) 跨网关凭证隔离的根因分析
3. **本月**：制定 Node.js 22 迁移计划，响应安全 EOL

---

*日报生成时间：2026-05-18 | 数据来源：NousResearch/hermes-agent GitHub 公开数据*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-18

## 1. 今日速览

PicoClaw 今日保持**中等活跃度**，24小时内产生 **12 条 Issue 动态**（7 新开/活跃，5 关闭）与 **7 条 PR 更新**（6 待合并，1 关闭），无新版本发布。社区焦点集中在**提供商生态扩展**（SiliconFlow 原生支持、LM Studio 易用性）与**工具安全边界**（exec 路径守卫、frontmatter 策略过滤）。一个 nightly 构建持续迭代 v0.2.8 主线，但 6 个开放 PR 中 4 个标记为 stale，合并吞吐