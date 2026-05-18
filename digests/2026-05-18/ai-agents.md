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
|:---|:---|:---|:---:|
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

*分析基于 2026-05-18 各项目 GitHub 公开数据生成 | 适合技术决策者评估项目健康度、开发者选择技术栈参考*

---

## 同赛道项目详细报告

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

**关键风险**：WebUI 存在 **3 个独立但可能关联的稳定性问题**（渲染错乱、会话关闭、localhost 绑定），建议维护者专项排查 Gateway → WebSocket → Frontend 全链路。

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
| **CLI 输出体验** | 推理 token 逐行显示"像打字机故障"（#3878，已修复） | 😠 体验差 |

### 满意点
- 快速响应：#3878 的 CLI 问题当日提交当日合并
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

PicoClaw 今日保持**中等活跃度**，24小时内产生 **12 条 Issue 动态**（7 新开/活跃，5 关闭）与 **7 条 PR 更新**（6 待合并，1 关闭）。社区焦点集中在**提供商生态扩展**（SiliconFlow 原生支持、LM Studio 易用性）与**工具安全边界**（exec 路径守卫、frontmatter 策略过滤）。一个 nightly 构建持续迭代 v0.2.8 主线，但 6 个开放 PR 中 4 个标记为 stale，合并吞吐量偏低，维护者 review 资源可能成为瓶颈。

---

## 2. 版本发布

| 版本 | 类型 | 说明 |
|:---|:---|:---|
| **[v0.2.8-nightly.20260517.0df050ff](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)** | Nightly | 自动化构建，基于 `main` 分支 `0df050ff` 提交 |

**⚠️ 注意事项**：此为自动化 nightly 构建，**可能不稳定**，不建议用于生产环境。完整变更日志见 [compare 页面](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)。当前 v0.2.8 稳定版与 nightly 之间差异尚未发布正式 release notes。

---

## 3. 项目进展

### 已合并/关闭 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| **[#2462](https://github.com/sipeed/picoclaw/pull/2462)** | Glucksberg | **修复 Codex 流式输出中断 + Telegram 重复重试问题**：针对 Android TV/Termux 等低资源场景，解决 `gpt-5.4` 流式响应在弱网环境下的稳定性，减少 Token 浪费与消息重复 | ✅ 已关闭 |

**进展评估**：今日仅 1 个 PR 完成闭环，且为 bugfix 而非功能交付。6 个待合并 PR 堆积，其中 3 个涉及核心架构（agent 策略过滤、session 时间戳、seahorse 检索作用域），**功能迭代速度受限于 review 带宽**。

---

## 4. 社区热点

### 🔥 讨论最活跃 Issue

| 排名 | Issue | 评论数 | 核心诉求 |
|:---|:---|:---|:---|
| 1 | **[#28 Feat Request: LM Studio Easy Connect](https://github.com/sipeed/picoclaw/issues/28)** | **19 条** | 非技术用户希望**一键连接 LM Studio**，降低本地模型部署门槛；作者明确承认技能不足，反映社区存在大量"边缘用户" |
| 2 | **[#2225 Ollama cloud credentials](https://github.com/sipeed/picoclaw/issues/2225)** | 12 条 | Ollama 云端服务需要身份凭证支持，**已于今日关闭**（推测已实现或确认 duplicate） |
| 3 | **[#1042 exec工具的guardCommand方法问题](https://github.com/sipeed/picoclaw/issues/1042)** | 12 条 | `curl` 等无路径命令被错误拦截，**安全规则过度保守影响正常功能** |

**诉求分析**：社区存在明显的**"易用性分层"**——核心开发者关注工具安全策略（#1042, #2837），而大量用户卡在**本地模型连接的第一步**（#28 LM Studio、#2884 SiliconFlow）。项目需平衡"安全默认值"与"新手友好"。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 影响域 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **高** | **[#1042](https://github.com/sipeed/picoclaw/issues/1042)** | `exec` 工具 `guardCommand` 正则误将 URL 参数识别为相对路径（`../../../../Beijing?T`），阻断合法 `curl` 命令 | 工具安全 | 无 | **开放 73 天，12 评论** |
| 🔴 **高** | **[#2887](https://github.com/sipeed/picoclaw/issues/2887)** | **RISC-V 架构 .deb 包功能异常**：OpenAI 模型在 Debian GNU/Linux (riscv64) 上无法正常工作 | 跨平台/发行版 | 无 | **今日新建** |
| 🟡 **中** | **[#2839](https://github.com/sipeed/picoclaw/issues/2839)** | steering-chain 最终回复错误地**编辑旧 placeholder** 而非发送新消息，导致 UI 状态混乱 | 前端/消息流 | 无 | 开放 8 天 |
| 🟡 **中** | **[#2749](https://github.com/sipeed/picoclaw/issues/2749)** | Bash 工具将相对路径解析为绝对路径（已关闭，确认修复） | 工具路径 | #2462 相关 | ✅ 已关闭 |
| 🟡 **中** | **[#2745](https://github.com/sipeed/picoclaw/issues/2745)** | OpenRouter reasoning 模型**泄漏 thinking 内容**到 assistant 消息 | 提供商/推理 | 无 | ✅ 已关闭 |
| 🟢 **低** | **[#2878](https://github.com/sipeed/picoclaw/issues/2878)** | `load_image` 工具无法通过 `config.json` 配置启用/禁用 | 配置系统 | **[#2888](https://github.com/sipeed/picoclaw/pull/2888)** | **有 PR 待 review** |

**稳定性信号**：RISC-V 支持缺陷（#2887）表明项目在多架构覆盖上仍有盲区；exec 安全规则的"误杀"问题（#1042）长期未决，已影响实际使用场景。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 成熟度 | 纳入可能性 |
|:---|:---|:---|:---|
| **SiliconFlow 原生提供商** | **[#2884](https://github.com/sipeed/picoclaw/issues/2884)** + **[#2885](https://github.com/sipeed/picoclaw/pull/2885)** | 🔥 **PR 已提交**（lc6464，今日新建） | **高** — 完整实现后端 factory + 前端 registry，OpenAI-compatible 模式已有基础 |
| **AGENT.md 工具策略过滤** | **[#2837](https://github.com/sipeed/picoclaw/issues/2837)** + **[#2838](https://github.com/sipeed/picoclaw/pull/2838)** | PR 待合并 9 天，标记 stale | 中高 — 多 agent 治理的核心基础设施，bogdanovich 持续推动 |
| **LM Studio 一键连接** | **[#28](https://github.com/sipeed/picoclaw/issues/28)** | 开放 3 个月，19 评论，无 PR | 中 — 需求明确但实现路径模糊，需产品层面决策 |
| **OAuth 2.1 + PKCE for MCP** | **[#2546](https://github.com/sipeed/picoclaw/issues/2546)** | 已关闭 | 低/已搁置 — 非技术用户友好度 vs 实现复杂度权衡 |
| **聊天详情可见性选择器** | **[#2886](https://github.com/sipeed/picoclaw/pull/2886)** | PR 已提交（今日新建） | 高 — 纯前端 UX 改进，风险低 |

**路线图判断**：v0.2.9 或下一版本大概率包含 **SiliconFlow 支持**（#2885）与 **chat UX 改进**（#2886）。Agent 工具策略（#2838）是架构级特性，若合并将显著提升多 agent 场景的可维护性。

---

## 7. 用户反馈摘要

### 😫 真实痛点

> *"i'm trying to get this installed on an android... its just outside my reach"* — [#28](https://github.com/sipeed/picoclaw/issues/28) Franzferdinan51

**本地模型连接门槛过高**：LM Studio、Ollama 等本地方案缺乏"零配置"路径，非技术用户在 Android/Termux 等环境寸步难行。

> *"I can only use the openai compatible mode to connect siliconflow, which is inconvenient"* — [#2884](https://github.com/sipeed/picoclaw/issues/2884) myourscom

**提供商配置的"二等公民"感**：OpenAI-compatible 模式作为通用 fallback，但缺少原生支持时模型发现、文档、错误提示均不友好。

> *"Command blocked by safety guard (path outside working dir)"* — [#1042](https://github.com/sipeed/picoclaw/issues/1042) icyfire

**安全规则"误伤"正常操作**：`curl` 查询天气被阻断，用户理解安全必要性，但当前启发式规则过于粗糙。

### ✅ 满意场景

- Android TV/Termux 低资源节点在 [#2462](https://github.com/sipeed/picoclaw/pull/2462) 修复后流式输出稳定
- 社区对 frontmatter 配置（#2837）的响应积极，认可"配置即代码"方向

---

## 8. 待处理积压

### ⚠️ 需维护者关注的长期项

| 类型 | 条目 | 闲置时间 | 风险 |
|:---|:---|:---|:---|
| **PR** | **[#2838](https://github.com/sipeed/picoclaw/pull/2838)** feat(agent): frontmatter tool policy filters | 9 天（stale） | 架构级特性，阻塞多 agent 场景落地 |
| **PR** | **[#2788](https://github.com/sipeed/picoclaw/pull/2788)** feat(session): per-message created_at timestamps | 12 天（stale） | 前端数据准确性，API 契约变更 |
| **PR** | **[#2759](https://github.com/sipeed/picoclaw/pull/2759)** fix(seahorse): retrieval tools to current session | 14 天（stale） | 隐私/安全：跨会话消息泄漏风险 |
| **Issue** | **[#1042](https://github.com/sipeed/picoclaw/issues/1042)** exec guardCommand 误拦截 | **73 天** | 每日影响工具使用，社区反复报告 |
| **Issue** | **[#28](https://github.com/sipeed/picoclaw/issues/28)** LM Studio Easy Connect | **96 天** | 用户入门流失，19 评论无 maintainer 回应 |

**建议行动**：
1. **优先 review #2838**：agent 策略过滤是 v0.3.0 架构基础，bogdanovich 已投入 3 个相关 PR
2. **为 #1042 分配 owner**：安全规则修复需明确是"放宽正则"还是"引入命令语义分析"
3. **回应 #28 路线图**：即使暂不实现，需明确"本地模型易用性"是否在项目优先级中

---

*日报基于 GitHub 公开数据生成，时间范围：2026-05-17 00:00 - 2026-05-17 23:59 UTC*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-18

> **项目**: [NanoClaw](https://github.com/qwibitai/nanoclaw) | **日期**: 2026-05-18 | **分析师**: AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览

NanoClaw 今日呈现**高活跃度修复冲刺**态势：24小时内 20 个 PR 更新（合并/关闭 10 个，待审 10 个），10 个 Issue 更新（8 个活跃/新开，2 个关闭）。核心信号是 **Signal 渠道紧急修复**与 **CLI 数据层稳定性攻坚**并行——brentkearney 一日内连发 2 个 PR 解决 Signal 附件可达性与容器权限问题，glifocat 主导的 CLI 级联删除修复进入待合并队列。无新版本发布，项目处于"修稳优先、功能跟进"的迭代节奏。

---

## 2. 版本发布

**无新版本发布**（今日 0 个 Release）

---

## 3. 项目进展

### 今日合并/关闭的重要 PR（10 个）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2510](https://github.com/nanocoai/nanoclaw/pull/2510) | glifocat | **fix(cli)**: 审批流程目的地添加时自动填充接收方 `inbound.db` | 关闭 [#2465](https://github.com/nanocoai/nanoclaw/issues/2465)，解决 v2 核心组网流程的"幽灵目的地"问题——审批通过后需重启才能生效的阻塞性缺陷 |
| [#2469](https://github.com/nanocoai/nanoclaw/pull/2469) | dwudwu | **fix(whatsapp)**: 修正解密失败与 401 登出的恢复指引 | 将错误的 `launchctl kickstart` 提示替换为实际的 `store/auth/` 清理操作，降低运维误操作率 |
| [#2481](https://github.com/nanocoai/nanoclaw/pull/2481) | zoryon-dev | **fix(cron)**: 终止全 Agent 的 cron 输出自抑制 | 根治 Lili/Lobby 定时任务"静默失败"——任务实际执行但输出被吞， symptom 伪装成"crons not running" |
| [#2476](https://github.com/nanocoai/nanoclaw/pull/2476) | andrefogelman | **feat**: 无 NanoClaw 重启机制 | 提升边缘部署的运维弹性 |
| [#2470](https://github.com/nanocoai/nanoclaw/pull/2470) | tier2tech-tian | **feat(cli-mode)**: CLI 模式替代 Agent SDK，走交互式配额 | 关键成本优化路径：通过 `claude --print --resume` 绕过 Agent SDK 配额，40 单元测试覆盖 |
| [#2519](https://github.com/nanocoai/nanoclaw/pull/2519) | mayur-tolexo | **chore**: M1 平台适配 | 扩展 Apple Silicon 部署矩阵 |
| [#2487](https://github.com/nanocoai/nanoclaw/pull/2487) + [#2486](https://github.com/nanocoai/nanoclaw/pull/2486) | zoryon-dev | **feat(finance)**: Plan 3 两阶段落地（schema + Levis behavior） | 金融模块技能模板体系化，纯文档/模板阶段，无 src 变更 |
| [#2524](https://github.com/nanocoai/nanoclaw/pull/2524) | dkroetz | **chore**: latest 同步 | 常规依赖/代码同步 |
| [#2209](https://github.com/nanocoai/nanoclaw/pull/2209) | cfis | **fix(host-sweep)**: 补充 #2183 回归测试 | 关闭孤儿声明清理的测试覆盖缺口 |

**整体推进评估**: 今日合并集中在 **运维可靠性**（cron、目的地组网、WhatsApp 恢复指引）与 **部署灵活性**（CLI 模式、M1、无重启）两大主题，v2 核心路径的"隐式失败"模式被系统性清理。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---:|:---|
| 🔥1 | [#2404](https://github.com/nanocoai/nanoclaw/issues/2404) Double delivery when agent uses send_message MCP tool and `<message>` blocks | 2 | **架构级设计冲突**: MCP 子进程与主轮询循环的双通道输出竞合，需决策是"去重层"还是"统一出口"——涉及 MCP 服务器与核心消息总线的耦合方式 |
| 🔥2 | [#2525](https://github.com/nanocoai/nanoclaw/issues/2525) `ncl groups delete` FOREIGN KEY constraint failed | 1 | **数据层完整性危机**: 任何非空组都无法删除，CLI CRUD 的通用 handler 未处理级联，直接影响生产数据清理 |
| 🔥3 | [#2386](https://github.com/nanocoai/nanoclaw/issues/2386) UUID 生成违反 OneCLI 标识符规则 | 1 | **跨组件契约断裂**: `bin/ncl` 生成的 UUID 被下游 OneCLI 拒绝，CLI 与 Agent 标识体系未对齐 |

**背后诉求**: 社区核心痛点从"功能有无"转向"**生产级数据一致性与跨组件契约稳定性**"——v2 架构的模块化带来接口边界治理挑战。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 根因 | Fix PR |
|:---|:---|:---:|:---|:---:|
| **🔴 High** | [#2525](https://github.com/nanocoai/nanoclaw/issues/2525) `ncl groups delete` FOREIGN KEY 失败 | 🟡 Open | 单表 DELETE 无级联，依赖行残留 | [#2526](https://github.com/nanocoai/nanoclaw/pull/2526) ✅ 待合并 |
| **🔴 High** | [#2520](https://github.com/nanocoai/nanoclaw/issues/2520) Signal 会话密钥材料泄露至日志 | 🟡 Open | 传递依赖序列化 `SessionEntry` 含 `privKey`/`rootKey`/`chainKey` | ❌ 无 |
| **🟡 Medium** | [#2404](https://github.com/nanocoai/nanoclaw/issues/2404) MCP tool + `<message>` 双投递 | 🟡 Open | `StdioServerTransport` 子进程与主轮询双输出路径 | ❌ 无 |
| **🟡 Medium** | [#2415](https://github.com/nanocoai/nanoclaw/issues/2415) `ncl groups create` 跳过 `container_configs` | 🟡 Open | CLI 仅写 `agent_groups` 表，容器启动时配置缺失 | ❌ 无 |
| **🟡 Medium** | [#2528](https://github.com/nanocoai/nanoclaw/issues/2528) Signal 渠道 image/PDF 附件容器内不可达 | 🟡 Open | 主机路径未内联为 base64，容器命名空间隔离 | [#2529](https://github.com/nanocoai/nanoclaw/pull/2529) ✅ 待合并 |
| **🟡 Medium** | [#2522](https://github.com/nanocoai/nanoclaw/issues/2522) Telegram 审批卡片未走 `transformOutboundText` | 🟡 Open | `ask_question`/`card` 路径硬编码绕过文本转换 | [#2523](https://github.com/nanocoai/nanoclaw/pull/2523) ✅ 待合并 |
| **🟢 Low** | [#2386](https://github.com/nanocoai/nanoclaw/issues/2386) UUID 格式违反 OneCLI 规则 | 🟡 Open | UUID 含数字起始段，超 50 字符限制 | ❌ 无 |

**今日关闭**: [#2512](https://github.com/nanocoai/nanoclaw/issues/2512) Ubuntu 默认安装 OneCLI-Postgres 容器互通失败（Docker 网络 hostname 解析）、[#2465](https://github.com/nanocoai/nanoclaw/issues/2465) 审批路径目的地未填充接收方 `inbound.db`

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 纳入可能性评估 |
|:---|:---|:---|
| [#2521](https://github.com/nanocoai/nanoclaw/pull/2521) crookies | XML 消息属性增加 `from-channel` / `from-type` | **高** — 已提 PR，纯增字段无破坏性，多通道监控场景明确 |
| [#2518](https://github.com/nanocoai/nanoclaw/pull/2518) schonarth | 新增 Codex Provider（并行 Claude） | **中** — 架构层面需隔离状态/认证/内存，文档完整但涉及容器镜像膨胀 |
| [#2208](https://github.com/nanocoai/nanoclaw/pull/2208) cfis | MCP 服务器支持 HTTP/SSE 传输（当前仅 stdio） | **中** — 网络传输模式扩展，长期看解耦子进程必要，但测试覆盖待补 |
| [#2470](https://github.com/nanocoai/nanoclaw/pull/2470) tier2tech-tian | CLI 模式替代 Agent SDK（交互式配额） | **高** — 已合并，成本敏感部署的核心路径 |
| [#2517](https://github.com/nanocoai/nanoclaw/issues/2517) kenansun-dev-bot | MGA 引用已归档 `agent_groups` — 需反归档 + GC | **待评估** — 数据治理需求，涉及归档策略与引用完整性 |

**路线图信号**: 项目正从"Claude 单一生态"向**多 Provider（Codex）、多传输（HTTP/SSE MCP）、成本优化（CLI 模式）**演进，同时 v2 数据模型的生命周期管理（归档/GC）进入审计视野。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **Signal 多模态交互** | [#2528](https://github.com/nanocoai/nanoclaw/issues/2528) brentkearney | "发图问 agent 能否看见" → 完全不可达，PDF 静默丢弃，多模态渠道名存实亡 |
| **CLI 数据操作恐惧** | [#2525](https://github.com/nanocoai/nanoclaw/issues/2525) glifocat | "任何非空组都删不掉" — 生产环境数据清理能力缺失，FOREIGN KEY 错误暴露实现细节 |
| **跨渠道监控盲区** | [#2521](https://github.com/nanocoai/nanoclaw/pull/2521) crookies | 转录日志无通道来源，需 hack 解析 `.jsonl`，多通道运营效率低 |
| **安全合规焦虑** | [#2520](https://github.com/nanocoai/nanoclaw/issues/2520) participo | 日志含 Signal 协议私钥材料，"传递依赖"不是免责理由，需主机层过滤 |

### 隐性满意

- **快速修复响应**: Signal 问题从报告（#2528，5-18）到 PR（#2529，同日）仅数小时
- **审批流程闭环**: #2465 → #2510 的"发现-修复-合并"周期 4 天，组网可靠性提升可感知

---

## 8. 待处理积压

### 需维护者关注的高龄/重要项

| 条目 | 创建 | 最后更新 | 风险 | 行动建议 |
|:---|:---:|:---:|:---|:---|
| [#2208](https://github.com/nanocoai/nanoclaw/pull/2208) MCP HTTP/SSE 传输支持 | 05-03 | 05-17 | 15 天待审，架构扩展阻塞 | 指定 MCP 模块维护者评审 |
| [#2230](https://github.com/nanocoai/nanoclaw/pull/2230) rootless Podman `keep-id` 映射 | 05-03 | 05-17 | 15 天待审，安全部署场景 | 容器运行时专家介入 |
| [#2184](https://github.com/nanocoai/nanoclaw/pull/2184) 过期会话立即重试而非报错 | 05-02 | 05-17 | 16 天待审，用户体验优化 | 低复杂度，建议快速合并 |
| [#2349](https://github.com/nanocoai/nanoclaw/pull/2349) 挂载安全白名单容错 | 05-08 | 05-17 | 10 天待审，安全边界 | 与 #2230 统筹容器安全策略 |
| [#2404](https://github.com/nanocoai/nanoclaw/issues/2404) MCP 双投递 | 05-10 | 05-17 | 8 天无响应，架构设计问题 | 需核心维护者决策输出路径统一方案 |

**积压健康度**: 10 个待合并 PR 中 4 个超 10 天，集中于 **容器运行时**（Podman/Docker 权限、rootless）与 **MCP 协议扩展**，建议按模块分配专职审阅人避免瓶颈。

---

> **日报生成时间**: 2026-05-18 | **数据截止**: 过去 24 小时（UTC）

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-18

> **项目地址**: [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **报告周期**: 2026-05-17 00:00 — 2026-05-17 23:59 UTC

---

## 1. 今日速览

今日 NullClaw 项目活跃度**偏低**，无代码合并活动，社区讨论集中在 3 个 Bug 报告上。值得关注的是，全部 3 个 Issues 均为**核心功能缺陷**——分别涉及调度器授权、子代理消息投递和全局内存可见性，且均来自近期版本引入的回归问题。项目已连续 3 天无 PR 合并，维护响应速度出现明显放缓信号，建议核心团队关注 Issue 处理积压风险。

---

## 2. 版本发布

**无新版本发布。**

最近一次版本发布需追溯至更早周期，当前 3 个活跃 Bug 均未被标记修复版本。

---

## 3. 项目进展

**今日无 PR 合并或关闭。**

- 待合并 PR: **0**
- 已合并/关闭 PR: **0**

项目代码层面今日零进展，核心功能修复依赖维护者介入。

---

## 4. 社区热点

| 排名 | Issue | 热度指标 | 核心诉求 |
|:---|:---|:---|:---|
| 🔥 | [#915 [bug] Problem with scheduler unauthorized](https://github.com/nullclaw/nullclaw/issues/915) | 评论: 1, 👍: 0 | **多用户部署场景下的调度器权限隔离** — 用户在 Ubuntu + Ollama 外置主机环境中，调度器触发时遭遇未授权错误，Telegram 聊天与 cron 定时任务均受影响。反映出自托管部署场景下认证链路的覆盖缺口。 |
| 2 | [#918 spawn tool results never delivered to Telegram (bus=null in channel_loop)](https://github.com/nullclaw/nullclaw/issues/918) | 评论: 0, 👍: 0 | **子代理执行结果的消息回传可靠性** — `spawn` 工具创建子代理后任务静默丢失，根因定位至 `channel_loop.zig:1296` 的 `SubagentManager` 初始化时 `bus=null`。 |
| 3 | [#917 memory_list tool always passes session_id, making global (session_id=NULL) entries invisible](https://github.com/nullclaw/nullclaw/issues/917) | 评论: 0, 👍: 0 | **全局内存条目的跨会话共享** — `memory_list` 强制过滤当前 session，导致 NULL session 的全局记忆无法被检索，破坏长期记忆架构设计。 |

**诉求分析**: 今日热点呈现明显的**"工具链完整性"焦虑**——`spawn`、`memory_list`、`scheduler` 均为 Agent 编排的核心基础设施，三处缺陷分别击中**任务分发→执行→记忆沉淀**的全链路，对生产环境可用性构成实质性阻碍。

---

## 5. Bug 与稳定性

| 严重等级 | Issue | 影响范围 | 修复状态 | 根因定位 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#918](https://github.com/nullclaw/nullclaw/issues/918) spawn 工具结果丢失 | 所有使用子代理的 Telegram 场景 | ❌ 无 fix PR | `channel_loop.zig:1296` `SubagentManager` 未正确注入 event bus |
| 🟡 **中高** | [#915](https://github.com/nullclaw/nullclaw/issues/915) 调度器未授权 | Ubuntu + 外置 Ollama 的自托管部署 | ❌ 无 fix PR | 待诊断（可能与跨网络认证令牌传递有关） |
| 🟡 **中** | [#917](https://github.com/nullclaw/nullclaw/issues/917) 全局内存不可见 | 跨会话记忆共享场景 | ❌ 无 fix PR | `memory_list` 工具硬编码 session_id 参数 |

**稳定性评估**: 三个 Bug 均已有明确复现路径或根因定位，但**零修复响应**，存在缺陷堆积风险。`#918` 因涉及 Zig 底层消息总线初始化，修复复杂度较高，建议优先分配核心维护者。

---

## 6. 功能请求与路线图信号

**今日无新功能请求。**

现有 Issues 均为**回归修复需求**，隐含以下路线图信号：

| 信号 | 说明 |
|:---|:---|
| 子代理架构加固 | `#918` 暴露 `spawn` 与消息总线的耦合脆弱性，需重构 SubagentManager 的生命周期管理 |
| 内存系统分层优化 | `#917` 显示 session-scoped 与 global memory 的查询接口设计存在语义混淆，需明确 `memory_list` 的过滤策略（默认全局？默认当前会话？显式参数？） |
| 自托管认证完善 | `#915` 提示外置 LLM  + 定时调度器的认证链路未覆盖，需补全文档或增加配置灵活性 |

---

## 7. 用户反馈摘要

> 提炼自 Issue 描述与评论

| 维度 | 反馈内容 |
|:---|:---|
| **使用场景** | 自托管生产部署（Ubuntu + RTX 3090 + Ollama 外置主机），Telegram 作为交互前端，依赖 cron/scheduler 实现定时任务 |
| **满意点** | "LLM is working fine, and tool calling in nullclaw in general also works mostly fine" — 核心 LLM 调用与工具链基础功能获认可 |
| **痛点** | 1. **静默失败**: spawn 结果丢失无错误提示，调试困难<br>2. **语义不一致**: memory 存储时支持全局（NULL session），读取时却强制过滤，API 契约违背直觉<br>3. **部署摩擦**: 外置 LLM 场景下认证配置缺乏文档指引 |
| **情绪指标** | 中性偏负面 — 用户认可项目方向，但对近期版本的稳定性信心下降 |

---

## 8. 待处理积压

| Issue | 创建时间 | 最后更新 | 滞留天数 | 提醒 |
|:---|:---|:---|:---|:---|
| [#915](https://github.com/nullclaw/nullclaw/issues/915) | 2026-05-15 | 2026-05-17 | **3 天** | 调度器为高频使用功能，外置 LLM 部署场景日益普遍，建议 48h 内响应诊断 |
| [#917](https://github.com/nullclaw/nullclaw/issues/917) | 2026-05-17 | 2026-05-17 | 1 天 | 已提供精确根因，修复面可控，可标记 `good first issue` 引导社区贡献 |
| [#918](https://github.com/nullclaw/nullclaw/issues/918) | 2026-05-17 | 2026-05-17 | 1 天 | Zig 底层代码，需核心维护者介入，建议优先分配 |

**维护建议**: 连续 3 日无 PR 合并且新增 3 个核心 Bug，项目健康度指标下行。建议：
1. 对 `#917` 快速发布 patch（参数透传修复）
2. 对 `#918` 安排 Zig 核心开发者评估 SubagentManager 重构
3. 对 `#915` 补充自托管认证故障排查文档作为临时缓解

---

*本报告基于公开 GitHub 数据生成，未包含私有讨论或分支信息。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-18

> **项目**: [nearai/ironclaw](https://github.com/nearai/ironclaw)  
> **日期**: 2026-05-18  
> **数据周期**: 过去 24 小时（2026-05-17 至 2026-05-18）

---

## 1. 今日速览

IronClaw 今日呈现**高活跃度、高问题暴露**的双重特征。过去 24 小时内，9 条 Issues 全部为新开且零关闭，45 条 PR 中 31 条待审，仅 14 条完成合并/关闭。核心贡献者 `sunglow666` 集中爆发 7 条 Gmail 工具链与 v0.28.2 回归缺陷报告，显示 **v0.28.2 版本存在显著的 UI/UX 稳定性问题**。与此同时，Reborn 架构迭代持续推进（#3704、#3703、#3721 等），IronHub 生态扩展（#3737）进入代码审查阶段，表明项目正处于"**基础设施快速演进、产品表面质量承压**"的关键窗口期。

---

## 2. 版本发布

**无新版本发布。**

> 注：v0.28.2 作为当前活跃版本，今日暴露出多项回归缺陷（详见第 5 节），建议维护者评估是否需要紧急补丁版本 v0.28.3。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 状态 | 核心贡献 |
|:---|:---|:---|:---|
| [#3695](https://github.com/nearai/ironclaw/pull/3695) | serrrfirat | **已合并** | **Reborn 架构里程碑**：将 `ironclaw_reborn_composition` 提升为官方组合根，发布可启动真实 Agent 的 `ironclaw-reborn` 二进制文件，并通过边界测试锁定公共 API 表面。为 #3036 "Configuration-as-Code" 史诗奠定基础设施。 |
| [#3723](https://github.com/nearai/ironclaw/pull/3723) | henrypark133 | **已合并** | **文档工程化**：以 CLAUDE.md 替代冗长的 Reborn agent-loop 规划文档，清理过时引用，提升 AI 辅助开发的可维护性。 |
| [#3131](https://github.com/nearai/ironclaw/pull/3131) | zmanian | **已关闭** | Trace Commons 客户端集成完成，支持可观测性数据的本地捕获、确定性脱敏、凭据上传与撤销机制。 |

### 架构演进评估

Reborn 子系统本周完成"**从设计文档到可运行二进制**"的关键跨越。#3695 的合并意味着：
- ✅ 组合根单一职责确立
- ✅ 运行时入口标准化（`build_reborn_runtime` / `RebornRuntime`）
- ⚠️ 后续需关注 #3726 提出的"crate 拆分与公共表面收窄"技术债

---

## 4. 社区热点

### 最高关注度议题

| 排名 | 议题 | 类型 | 热度信号 | 核心诉求分析 |
|:---|:---|:---|:---|:---|
| 1 | [#3737](https://github.com/nearai/ironclaw/pull/3737) | PR (XL) | 全新贡献者、跨 4 个 scope | **IronHub 生态闭环**：用户渴望"运行时安装"能力——CLI 搜索/安装 + Agent 自扩展 + 网关 HTTP 端点 + 实时目录，打破当前仅构建时安装的限制 |
| 2 | [#3736](https://github.com/nearai/ironclaw/issues/3736) ~ [#3731](https://github.com/nearai/ironclaw/issues/3731) | Issue 集群 | 同一作者 6 条连续报告 | **Gmail 工具链信任危机**：认证流程的 UI 不一致、状态持久化错误、错误反馈误导，共同指向"用户无法可靠判断系统真实状态" |
| 3 | [#3573](https://github.com/nearai/ironclaw/pull/3573) | PR (XL) | 4 个继任 PR 并行 | **Hooks 框架成为新扩展热点**：生产门控工厂 (#3633)、WASM 执行路径 (#3634)、事件触发钩子 (#3640) 形成完整路线图，社区期待可编程安全策略 |

### 诉求深层解读

- **#3737 的 `undefined` 评论数异常**：可能表明讨论集中在审查行注而非顶层评论，或数据抓取边界情况，建议维护者确认审查深度。
- **Gmail 集群报告模式**：`sunglow666` 作为核心测试者，其高密度、细粒度报告暗示该功能正处于**预发布验收测试阶段**，而非生产环境偶发问题。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 标题 | 版本/环境 | 状态 | 修复 PR |
|:---|:---|:---|:---|:---|:---|
| 🔴 **P0-回归** | [#3734](https://github.com/nearai/ironclaw/issues/3734) | v0.28.2 回归：Provider 配置缺失 API Key 和"获取可用模型"控件 | Non-TEE v0.28.2（v0.28.1 正常） | **无修复** | ❌ 无 |
| 🔴 **P0-回归** | [#3736](https://github.com/nearai/ironclaw/issues/3736) | v0.28.2 回归：未配置 Provider 在 TEE Agent 中仍显示 Use 按钮 | TEE `still-frog.agent2.near.ai` | **待确认** | ❌ 无 |
| 🟡 **P1-功能缺陷** | [#3733](https://github.com/nearai/ironclaw/issues/3733) | 无效 Gmail Token 显示成功/已激活 Toast | `wise-ram-rozur` | **无修复** | ❌ 无 |
| 🟡 **P1-UX 不一致** | [#3732](https://github.com/nearai/ironclaw/issues/3732) | Gmail 认证门 UI 不一致：OAuth 链接 vs 手动 Token 输入 | 同实例 | **无修复** | ❌ 无 |
| 🟡 **P1-状态管理** | [#3731](https://github.com/nearai/ironclaw/issues/3731) | Chat 重复提示 `tool_install(gmail)` 尽管已安装 | 同实例 | **无修复** | ❌ 无 |
| 🟡 **P1-状态持久化** | [#3729](https://github.com/nearai/ironclaw/issues/3729) | 拒绝的 `tool_install` 调用刷新后显示为成功 | 同实例 | **无修复** | ❌ 无 |
| 🟡 **P1-交互逻辑** | [#3728](https://github.com/nearai/ironclaw/issues/3728) | 拒绝 Gmail 安装后重复提示，最终响应仍要求批准 | 同实例 | **无修复** | ❌ 无 |
| 🔵 **P2-持续失败** | [#3447](https://github.com/nearai/ironclaw/issues/3447) | 夜间 E2E 失败（自 5-10 起持续） | CI `v2-engine` | **8 天未修复** | ❌ 无 |

### 风险评估

> **v0.28.2 版本质量警报**：2 项 Provider 配置回归 + 5 项 Gmail 工具链缺陷，全部集中于**用户可见的配置与认证流程**。建议立即冻结该版本推广，优先发布热修复。

---

## 6. 功能请求与路线图信号

| 来源 | 功能方向 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#3737](https://github.com/nearai/ironclaw/pull/3737) | IronHub 运行时工具/技能安装 | ⭐⭐⭐⭐⭐ **极高** | PR 已开，XL 规模，覆盖 CLI/Agent/Gateway/Web 全通道，M2 里程碑核心 |
| [#3704](https://github.com/nearai/ironclaw/pull/3704) | TOML + Provider 目录配置体系 | ⭐⭐⭐⭐⭐ **极高** | 直接支撑 #3036 史诗，镜像 v1 配置格式降低迁移成本 |
| [#3703](https://github.com/nearai/ironclaw/pull/3703) | Configuration-as-Code 基板 | ⭐⭐⭐⭐⭐ **极高** | 显式标注为 #3036 前置，类型化仓库 + 蓝图 + 测试工具链 |
| [#3681](https://github.com/nearai/ironclaw/pull/3681) | 第一方 HTTP Egress 工具 | ⭐⭐⭐⭐☆ **高** | 填补 Reborn 内置能力空白，依赖现有 `RuntimeHttpEgress` 路径 |
| [#3721](https://github.com/nearai/ironclaw/pull/3721) | 运行配置文件控制个人上下文 | ⭐⭐⭐⭐☆ **高** | 隐私合规关键，向后兼容默认排除 |
| [#3633](https://github.com/nearai/ironclaw/pull/3633) ~ [#3640](https://github.com/nearai/ironclaw/pull/3640) | Hooks 框架全功能栈 | ⭐⭐⭐☆☆ **中** | 均为 Draft 状态，scope doc 先行，实现待跟进 |

### 路线图信号

- **M2 里程碑临近**：#3735（`get_run_state` facade）、#3725（WebUI 线程绑定）、#3722（Provider 工具元数据保留）均为 WebUI-Reborn 集成收尾工作。
- **#3726 技术债提醒**：`ironclaw_reborn_composition` 需拆分为"仅 substrate facade"与"组装运行时"两个 crate，避免 #3695 的合并引入职责混淆。

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issues 直接引用）

| 痛点 | 来源 | 场景 |
|:---|:---|:---|
| **"我无法判断系统真实状态"** | [#3733](https://github.com/nearai/ironclaw/issues/3733), [#3729](https://github.com/nearai/ironclaw/issues/3729) | 提交无效 token 显示成功，拒绝操作刷新后变成功——**反馈信号与系统状态完全脱节** |
| **"同样的操作得到不同的界面"** | [#3732](https://github.com/nearai/ironclaw/issues/3732) | 同一 Gmail 未认证状态，不同对话线程触发 OAuth 链接或手动输入——**路由/状态机不一致** |
| **"版本升级破坏现有工作流"** | [#3734](https://github.com/nearai/ironclaw/issues/3734), [#3736](https://github.com/nearai/ironclaw/issues/3736) | v0.28.1 → v0.28.2 的 Provider 配置 UI 消失/异常——**回归测试覆盖不足** |
| **"重复确认消耗信任"** | [#3731](https://github.com/nearai/ironclaw/issues/3731), [#3728](https://github.com/nearai/ironclaw/issues/3728) | 已批准安装仍被反复询问，拒绝后系统"假装没听见"——**对话状态与持久状态未同步** |

### 满意度推测

- ✅ **架构透明度**：#3723 的 CLAUDE.md 替换规划文档，显示团队重视 AI 辅助开发体验
- ❌ **产品稳定性**：v0.28.2 的 7 条缺陷报告集中在同一测试者、同一功能域，暗示**内部 QA 流程未能拦截基础 UX 问题**

---

## 8. 待处理积压

| 积压项 | 创建时间 | 最后更新 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| [#3447](https://github.com/nearai/ironclaw/issues/3447) 夜间 E2E 失败 | 2026-05-10 | 2026-05-17 | 🔴 **8 天持续失败** | **立即升级 P0**：CI 红灯掩盖其他回归，v2-engine 测试套件可能已失效 |
| [#3726](https://github.com/nearai/ironclaw/issues/3726) Reborn composition crate 拆分 | 2026-05-17 | 2026-05-17 | 🟡 架构债务 | 在 #3695 合并后 1-2 周内安排，避免公共 API 固化后难以调整 |
| [#3361](https://github.com/nearai/ironclaw/pull/3361) 依赖批量更新（43 个） | 2026-05-07 | 2026-05-17 | 🟡 供应链风险 | Dependabot PR 堆积 11 天，建议分批合并或评估自动化策略 |
| [#3247](https://github.com/nearai/ironclaw/pull/3247) WASM 依赖更新 | 2026-05-05 | 2026-05-17 | 🟡 安全相关 | wasmtime 等核心组件更新滞后 13 天，需关注 CVE |

---

## 附录：数据健康度指标

| 指标 | 数值 | 评估 |
|:---|:---|:---|
| Issue 关闭率 | 0% (0/9) | ⚠️ 异常偏低，全部为新暴露问题 |
| PR 合并率 | 31% (14/45) | ⚠️ 偏低，大量 XL 规模 PR 在审 |
| 核心贡献者 Issue 占比 | 78% (7/9 by sunglow666) | ⚠️ 社区外部反馈渠道待激活 |
| 无评论 Issue 比例 | 100% (9/9) | 🔴 严重异常，可能表明报告即分配、或讨论转移至其他渠道 |

> **维护者行动建议**：优先处理 v0.28.2 回归缺陷集群与 #3447 CI 失败，考虑建立"版本质量门禁"机制防止类似回归外泄。

---

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-18

> **项目地址**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **报告日期**: 2026-05-18  
> **数据周期**: 过去 24 小时（2026-05-17 至 2026-05-18）

---

## 1. 今日速览

LobsterAI 今日活跃度**偏低**，Issues 零活动，PR 队列以**存量积压**为主。过去 24 小时内无新 Issue 开启或关闭，9 条 PR 更新全部来自历史提交的**批量同步更新**（更新时间均落在 2026-05-17），实际新增代码贡献为 0。7 条 PR 仍处于待合并状态且均标记为 `[stale]`，2 条 PR 被关闭，整体呈现**维护节奏放缓、社区贡献等待审阅**的状态。项目健康度需关注 PR 积压时长与维护者响应速度。

---

## 2. 版本发布

**无新版本发布。**

最新 Release 暂无更新，项目仍处于持续集成阶段。

---

## 3. 项目进展

### 今日关闭 PR（2 条）

| PR | 作者 | 状态 | 进展说明 |
|:---|:---|:---|:---|
| [#812](https://github.com/netease-youdao/LobsterAI/pull/812) `perf(sqlite): debounce save() 并缓存 getConfig() 减少主线程阻塞` | noransu | **已关闭** | 针对 Issue #562 的 SQLite 同步写入性能优化方案，通过 500ms 防抖 + 异步写入缓解 Electron 主线程阻塞。该 PR 关闭可能意味着方案需重新设计或已被替代实现。 |
| [#871](https://github.com/netease-youdao/LobsterAI/pull/871) `feat(skills): 新增skill执行统计展示` | tiamy | **已关闭** | 提供 Skill 调用统计分析 UI，解析 OpenClaw 会话数据并在 SkillsManager 中弹窗展示。功能完整度较高（含截图），关闭原因待确认——可能因产品规划调整或需重构数据层。 |

**整体推进评估**：今日无代码合入主分支，2 条关闭 PR 均为 3 月提交的存量提案，实际功能交付为 **0**。项目在技术债务治理（SQLite 性能）和可观测性（Skill 统计）两条线上有探索，但未形成最终产出。

---

## 4. 社区热点

今日无活跃讨论、无新增评论、无 👍 反应。所有 9 条 PR 的交互指标均为 **0 评论 / 0 👍**，社区参与度处于冰点。

**存量 PR 价值分析**（按技术影响力排序）：

| PR | 潜在价值 | 用户诉求洞察 |
|:---|:---|:---|
| [#762](https://github.com/netease-youdao/LobsterAI/pull/762) 自动检测 API 格式 | **降低配置门槛** | 非技术用户难以区分 Anthropic/OpenAI 协议，"一键测试自动识别"直击配置痛点 |
| [#768](https://github.com/netease-youdao/LobsterAI/pull/768) Opik 可观测性集成 | **企业级运维需求** | 通过 OpenClaw 插件体系接入 Opik，预留 LangFuse/LangSmith 扩展位，反映生产环境对 LLM 调用链追踪的刚需 |
| [#770](https://github.com/netease-youdao/LobsterAI/pull/770) React.memo 渲染优化 | **流式体验优化** | 每次 streaming token 触发全量重渲染，性能敏感型用户（长对话场景）的流畅度诉求 |
| [#771](https://github.com/netease-youdao/LobsterAI/pull/771) 图片附件缩略图 | **协作体验升级** | 从文本 pill 到卡片式预览，反映多模态协作场景下对视觉反馈的期待 |

> **核心诉求总结**：用户希望 LobsterAI 在**易用性（配置简化）、性能（渲染/存储）、可观测性、多模态交互**四个维度持续进化，但存量 PR 的长期悬置可能导致贡献者流失。

---

## 5. Bug 与稳定性

| 等级 | 问题 | 来源 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | 底部输入框截断（布局 Bug） | [#783](https://github.com/netease-youdao/LobsterAI/pull/783) | #783 待合并 | **2 个月未审阅** |
| 🟡 **中** | 定时任务重启后重复创建（数据去重缺失） | [#788](https://github.com/netease-youdao/LobsterAI/pull/788) | #788 待合并 | **2 个月未审阅，含 Issue #775 关闭引用** |
| 🟡 **中** | SQLite 同步写入阻塞主进程（性能退化） | Issue #562 | #812 已关闭 | **方案失效，需重新设计** |
| 🟢 **低** | ThemeService 内存泄漏（未清理 media query 监听） | [#787](https://github.com/netease-youdao/LobsterAI/pull/787) | #787 待合并 | **2 个月未审阅** |

**风险评估**：#783 的输入框截断直接影响核心交互可用性，#788 的任务重复可能导致调度系统状态膨胀，两者均为**有 PR 待合并但缺乏维护者响应**的典型积压。

---

## 6. 功能请求与路线图信号

| 方向 | 相关 PR | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **智能配置（Auto-Detect）** | [#762](https://github.com/netease-youdao/LobsterAI/pull/762) | ⭐⭐⭐⭐ 高 | 降低用户流失的关键体验改进，实现轻量（仅扩展 `apiFormat` 枚举 + 探测逻辑），合并成本低 |
| **可观测性基础设施** | [#768](https://github.com/netease-youdao/LobsterAI/pull/768) | ⭐⭐⭐☆ 中 | 架构设计良好（多 provider 预留位），但依赖 OpenClaw 插件生态成熟度，可能需版本对齐 |
| **Skill 执行分析** | [#871](https://github.com/netease-youdao/LobsterAI/pull/871) | ⭐⭐☆☆ 低 | PR 已关闭，数据层与 OpenClaw 深度耦合，产品优先级可能调整 |
| **渲染性能优化** | [#770](https://github.com/netease-youdao/LobsterAI/pull/770) | ⭐⭐⭐⭐ 高 | 变更极小（单行 `React.memo`），收益明确，适合快速合并 |

**路线图信号**：项目正围绕 **OpenClaw 插件体系**（#768、#871）构建扩展能力，同时聚焦 **Electron 端性能治理**（#770、#812）和 **AI 服务配置简化**（#762），符合"桌面端 AI 助手"的产品定位。

---

## 7. 用户反馈摘要

> ⚠️ **数据局限**：今日无新增 Issue/评论，以下反馈基于存量 PR 描述逆向推断用户场景。

| 痛点/场景 | 来源 | 情绪 |
|:---|:---|:---|
| "配置 DeepSeek/智谱时要选 Anthropic 还是 OpenAI？完全不懂" | #762 | 😵 困惑 |
| "贴图后只看到文件名，不知道传上去的是什么" | #771 | 😐 失望 |
| "长对话时界面卡顿，每出一个字都要闪一下" | #770 | 😤 烦躁 |
| "重启后同样的定时任务跑了好几遍，数据库里一堆重复" | #788 | 😠 愤怒 |
| "Skill 用了多少次、成功率多少，完全黑盒" | #871 | 🤔 好奇 |

**满意度缺口**：LobsterAI 在**技术用户**（理解 API 协议差异）和**普通用户**之间存在体验断层，自动检测、可视化反馈、运行透明度是弥合差距的关键。

---

## 8. 待处理积压

### 🔴 紧急关注（>2 个月 stale，高价值/高影响）

| PR | 创建日期 | 最后更新 | 风险 |
|:---|:---|:---|:---|
| [#762](https://github.com/netease-youdao/LobsterAI/pull/762) 自动检测 API 格式 | 2026-03-24 | 2026-05-17 | 贡献者 Aoxiang-001 可能因无响应放弃维护 |
| [#770](https://github.com/netease-youdao/LobsterAI/pull/770) React.memo 渲染优化 | 2026-03-24 | 2026-05-17 | 零成本优化，拖延无意义 |
| [#783](https://github.com/netease-youdao/LobsterAI/pull/783) 输入框截断修复 | 2026-03-25 | 2026-05-17 | **直接影响每日活跃用户** |
| [#788](https://github.com/netease-youdao/LobsterAI/pull/788) 定时任务去重 | 2026-03-25 | 2026-05-17 | 关联已关闭 Issue #775，需确认是否已被其他方案修复 |

### 📊 积压统计

- **Stale PR 总数**：7 条（占待合并 100%）
- **最久未合并**：#762、#768、#770（均创建于 2026-03-24，**距今 55 天**）
- **维护者行动建议**：建议本周内批量审阅 3 月 PR，或明确标注 `needs-review`/`waiting-for-author` 状态以减少贡献者不确定性。

---

## 附录：今日 PR 完整清单

| # | 状态 | 标题 | 作者 | 更新 |
|:---|:---|:---|:---|:---|
| [#762](https://github.com/netease-youdao/LobsterAI/pull/762) | 🟡 OPEN [stale] | feat(settings): 自定义模型 API 格式新增"自动检测"选项 | Aoxiang-001 | 2026-05-17 |
| [#768](https://github.com/netease-youdao/LobsterAI/pull/768) | 🟡 OPEN [stale] | feat(observability): add Opik observability integration via OpenClaw plugin | mmengLong | 2026-05-17 |
| [#770](https://github.com/netease-youdao/LobsterAI/pull/770) | 🟡 OPEN [stale] | perf(renderer): wrap MarkdownContent with React.memo | stone333 | 2026-05-17 |
| [#771](https://github.com/netease-youdao/LobsterAI/pull/771) | 🟡 OPEN [stale] | feat(cowork): show image thumbnail preview for pasted attachments | vdorchan | 2026-05-17 |
| [#783](https://github.com/netease-youdao/LobsterAI/pull/783) | 🟡 OPEN [stale] | fix(cowork): add bottom spacing and margin-auto to input area | 15990187550 | 2026-05-17 |
| [#787](https://github.com/netease-youdao/LobsterAI/pull/787) | 🟡 OPEN [stale] | Implement destroy method for theme service | cdhyay | 2026-05-17 |
| [#788](https://github.com/netease-youdao/LobsterAI/pull/788) | 🟡 OPEN [stale] | fix(scheduled-task): deduplicate tasks before migration | coderliguoqing | 2026-05-17 |
| [#812](https://github.com/netease-youdao/LobsterAI/pull/812) | 🔴 CLOSED [stale] | perf(sqlite): debounce save() 并缓存 getConfig() | noransu | 2026-05-17 |
| [#871](https://github.com/netease-youdao/LobsterAI/pull/871) | 🔴 CLOSED [stale] | feat(skills): 新增skill执行统计展示 | tiamy | 2026-05-17 |

---

*本报告基于 GitHub 公开数据自动生成，PR 评论数显示为 `undefined` 可能因 API 数据权限或字段映射问题，实际讨论情况建议直接访问 PR 页面核实。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-18

> **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis)  
> **日期**: 2026-05-18  
> **分析窗口**: 过去 24 小时（2026-05-17 至 2026-05-18）

---

## 1. 今日速览

Moltis 今日保持**中高活跃度**，核心工程团队推进了远程访问基础设施的重大扩展。3 个 PR 全部完成合并/关闭，标志着 NetBird/Cloudflare Tunnel 双轨远程访问方案正式落地，同时外部智能体持久化会话能力（PR #566）历经 41 天迭代后终于合入主干。版本发布节奏稳健（`20260517.03`），但社区侧出现 2 个新报 Bug，均涉及配置/解析层的边缘情况，暂无修复 PR 跟进。整体健康度：**功能迭代积极，稳定性细节待打磨**。

---

## 2. 版本发布

### `20260517.03` 
- **发布时间**: 2026-05-17
- **版本标签**: [20260517.03](https://github.com/moltis-org/moltis/releases/tag/20260517.03)

> ⚠️ **注**: 发布说明未提供详细变更日志，建议维护者补充 release notes。根据同日合并的 PR 推断，本版本可能包含：
> - NetBird 与 Cloudflare Tunnel 远程访问支持（PR #1002）
> - 外部智能体持久化会话能力（PR #566）
> - 远程访问引导流程扩展（PR #1008）

**迁移注意事项**: 若从早期版本升级且使用自定义远程访问配置，建议验证 `VoiceCoquiTtsConfig` 等配置项在 auto-compact 后的完整性（参见 Issue #1006 已知问题）。

---

## 3. 项目进展

| PR | 状态 | 核心贡献 | 项目推进度 |
|:---|:---|:---|:---|
| [#1002](https://github.com/moltis-org/moltis/pull/1002) feat(remote-access): add NetBird and Cloudflare Tunnel support | **已合并** | 完成远程访问基础设施的**第三方方案解耦**：NetBird（私有 mesh + 环回保留 TCP 转发器）与 Cloudflare Tunnel（`cloudflared` 运行时 + WebAuthn 主机名更新 + Token 处理）双轨并行 | 🔷🔷🔷🔷🔷 **架构级扩展** — 从 Tailscale/ngrok 二选一演进为四方案矩阵，企业部署灵活性显著提升 |
| [#566](https://github.com/moltis-org/moltis/pull/566) feat(external-agents): add persistent agent sessions | **已合并** | 外部智能体（ACP / Codex CLI / Claude Code）会话**跨轮次持久化**：绑定/解绑/状态查询/实时会话生命周期全链路 | 🔷🔷🔷🔷◯ **核心能力补全** — 解决多轮对话中外部 Agent 上下文丢失的关键痛点，41 天迭代显示设计审慎 |
| [#1008](https://github.com/moltis-org/moltis/pull/1008) Add NetBird and Cloudflare Tunnel to onboarding | **已关闭** | 将新远程访问方案纳入用户引导流程，E2E 测试覆盖全部四方案 Tab | 🔷🔷🔷◯◯ **体验闭环** — 功能上线即配套引导，降低新用户配置门槛 |

**今日合并代码当量评估**: 远程访问子系统完成从"功能可用"到"生产就绪"的关键跨越，外部智能体集成进入成熟阶段。

---

## 4. 社区热点

> 今日 Issues/PRs **均无评论、无反应**（👍: 0, 评论: 0/undefined），社区互动处于**静默期**。以下为按技术影响力排序的潜在热点：

| 条目 | 链接 | 热度分析 |
|:---|:---|:---|
| Issue #1007 — gemma-4-31b-it `<thought>` 标签解析异常 | [#1007](https://github.com/moltis-org/moltis/issues/1007) | **模型兼容性诉求**: Google 新一代推理模型 Gemma 4 的 `<thought>` 标签未被识别为 reasoning block，影响思维链展示。信号：社区对前沿模型适配的敏感度提升，需建立标准化推理标签解析机制 |
| Issue #1006 — VoiceCoquiTtsConfig auto-compact 导致配置"消失" | [#1006](https://github.com/moltis-org/moltis/issues/1006) | **配置系统可靠性诉求**: 默认值在自动压缩中被剥离，属于数据丢失类问题。信号：配置持久化层的边缘情况测试覆盖不足 |

**背后诉求研判**: 两个 Bug 均指向"**新功能扩展与既有系统稳定性之间的张力**"——远程访问和外部智能体快速迭代的同时，配置系统和模型解析层的基础设施需要同步加固。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 影响范围 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **P1** | [#1006](https://github.com/moltis-org/moltis/issues/1006) | `VoiceCoquiTtsConfig` 默认值在 auto-compact 流程中被错误剥离，导致配置项"消失" | TTS 语音合成配置持久化 | **无** | ⏳ 待修复 |
| 🟡 **P2** | [#1007](https://github.com/moltis-org/moltis/issues/1007) | `gemma-4-31b-it` 的 `<thought>` 推理标签被当作纯文本渲染，而非结构化 reasoning block | 特定模型的思维链展示 | **无** | ⏳ 待修复 |

**稳定性评估**: 
- 无崩溃/回归类致命问题，但 #1006 涉及**配置数据完整性**，存在用户配置丢失风险，建议 48 小时内响应
- #1007 为**模型适配滞后**，不影响核心功能，但阻碍最新开源模型体验

---

## 6. 功能请求与路线图信号

> 今日无显式功能请求（Feature Request）标签的 Issues，但从 Bug 和 PR 中可提取**路线图信号**：

| 信号源 | 推断需求 | 纳入下一版本概率 | 依据 |
|:---|:---|:---|:---|
| PR #1002 + PR #1008 | 远程访问方案持续扩展（WireGuard/Zerotier 等？） | 🔷🔷🔷◯◯ **中** | 架构已抽象为插件化，新增方案成本降低 |
| PR #566 | 外部智能体生态深化（更多 Agent 协议支持） | 🔷🔷🔷🔷◯ **中高** | ACP/Codex CLI/Claude Code 已覆盖主流，GitHub Copilot Chat 等或为下一步 |
| Issue #1007 | 标准化推理标签解析器（支持 `<think>`, `<thought>`, `<reasoning>` 等变体） | 🔷🔷🔷🔷◯ **中高** | 模型碎片化加剧，硬编码标签不可持续 |
| Issue #1006 | 配置系统防御性编程增强（auto-compact 白名单/Schema 校验） | 🔷🔷🔷🔷🔷 **高** | 数据丢失类问题，技术债需立即偿还 |

---

## 7. 用户反馈摘要

> 基于 Issues 原文提炼（今日无评论互动，反馈来自 Bug 报告本身）：

| 维度 | 内容 |
|:---|:---|
| **痛点** | 配置系统"静默失败"：auto-compact 后默认值消失，用户难以察觉直至功能异常（#1006） |
| **使用场景** | 生产环境中部署 Coqui TTS 语音合成管道；尝试集成 Google Gemma 4 最新推理模型 |
| **不满** | 前沿模型适配存在时滞；配置持久化层缺乏透明度和可调试性 |
| **隐含期待** | 模型支持矩阵需更及时更新；配置变更应有审计日志或 dry-run 预览 |

---

## 8. 待处理积压

> 以下为**跨日未关闭且需维护者关注**的条目（基于今日数据推断）：

| 条目 | 链接 | 滞留时间 | 风险提醒 |
|:---|:---|:---|:---|
| PR #566 的后续文档/测试债务 | [#566](https://github.com/moltis-org/moltis/pull/566) | 41 天（2026-04-06 创建） | 虽已合并，但长期迭代周期可能积累了未同步的文档更新，建议检查 README/CHANGELOG 完整性 |
| Issue #1006 / #1007 | [#1006](https://github.com/moltis-org/moltis/issues/1006) / [#1007](https://github.com/moltis-org/moltis/issues/1007) | < 24 小时 | **新增即积压** — 两 Bug 均来自同一报告者（`maop`），可能为升级 `20260517.03` 后集中暴露，建议优先批次响应 |

---

## 附录：数据可信度说明

- PR #1008 评论数显示为 `undefined`，可能为 API 数据异常，实际合并讨论内容未完整捕获
- Release `20260517.03` 无详细 release notes，版本内容基于同日合并 PR 推断

---

*日报生成完毕。如需针对特定 PR/Issue 深入代码级分析，或对比历史同期活跃度，可进一步指令。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-18

> **项目**: CoPaw (github.com/agentscope-ai/CoPaw)  
> **数据周期**: 过去 24 小时（截至 2026-05-18）  
> **分析师**: AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览

CoPaw 今日社区活跃度**极高**，24 小时内产生 **18 条 Issues 更新**（16 活跃/新开，2 关闭）和 **16 条 PR 更新**（12 待合并，4 已合并/关闭），无新版本发布。核心信号：**前端 E2E 测试基础设施进入 Phase 2 密集建设期**，hanson-hex 单日提交 5 个 E2E 相关 Issue 和 2 个 PR；**稳定性问题集中爆发**，v1.1.7 版本出现多起"聊天无响应"和 Console 卡死报告；**安全漏洞首次被公开披露**，插件接口存在未授权 RCE 风险需紧急关注。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的 PR（4 条）

| PR | 作者 | 进展说明 | 链接 |
|:---|:---|:---|:---|
| **#4466** | hanson-hex | **安全模块测试里程碑**：Phase 0-1 完成，481 个单元测试，89% 覆盖率，security 测试升级为 CI L1 硬门槛 | [PR #4466](https://github.com/agentscope-ai/QwenPaw/pull/4466) |
| **#3605** | celestialhorse51D | **微信数据迁移重构**：集中化遗留 weixin→wechat 数据迁移，消除运行时回退路径，降低技术债务 | [PR #3605](https://github.com/agentscope-ai/QwenPaw/pull/3605) |
| **#1669** | saltapp | **修复 Workspace 路径分隔符**：解决 Windows 系统下 workspace 路径"loading..."无限加载问题 | [PR #1669](https://github.com/agentscope-ai/QwenPaw/pull/1669) |
| **#1661** | saltapp | **修复记忆文件获取**：按 agent ID 隔离每日记忆文件，避免全局 API 导致的数据串扰 | [PR #1661](https://github.com/agentscope-ai/QwenPaw/pull/1661) |

**整体推进评估**：测试基础设施成为今日最大增量——security 模块从"零硬门槛"跃升至 L1 强制检查，E2E 测试从独立仓库向主仓库迁移。但**功能交付侧偏保守**，4 个合并 PR 均为修复/重构类，无新功能进入主干。

---

## 4. 社区热点

### 高互动 Issues

| 排名 | Issue | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 🔥1 | **#2291 Help Wanted: Open Tasks** — 长期任务看板 | **61 评论** | 社区贡献入口的核心枢纽，持续吸引新贡献者认领任务，但 P0-P2 优先级体系执行效果待观察 [Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) |
| 🔥2 | **#2684 Ubuntu 安装后启动出错** | 7 评论 | 脚本安装第三步 `copaw app` 失败，`websockets.legacy` 弃用警告暴露依赖管理问题，影响新用户 onboarding [Issue #2684](https://github.com/agentscope-ai/QwenPaw/issues/2684) |
| 🔥3 | **#3640 MCP client TaskGroup 异常导致 Agent 假死** | 7 评论 | **生产环境高危问题**：Agent 无响应但不报错，钉钉/微信渠道失效但 Console 正常，诊断困难，用户被迫重启 [Issue #3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) |
| 🔥4 | **#4453/#4469 聊天窗口无回应**（关联） | 6+5 评论 | **v1.1.7 集中爆发**，Event loop 停止导致消息无限转圈，重启/回退/重装均无效，用户挫败感极强 [Issue #4453](https://github.com/agentscope-ai/QwenPaw/issues/4453) [Issue #4469](https://github.com/agentscope-ai/QwenPaw/issues/4469) |

### 高互动 PRs

| PR | 说明 | 链接 |
|:---|:---|:---|
| **#4467** | hanson-hex 接替 #4466，**967 测试、89% security 覆盖率**，Phase 1+2 合并推进，CI 硬门槛升级 | [PR #4467](https://github.com/agentscope-ai/QwenPaw/pull/4467) |

**诉求分析**：社区核心矛盾从"功能不足"转向**"稳定性焦虑"**——v1.1.7 成为问题版本标签，用户反复报告"无响应"类症状却缺乏有效诊断手段；同时**测试基础设施的激进投入**（E2E + 单元测试双轨）反映维护团队对质量底线的补救性重视。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 级别 | Issue | 描述 | 影响版本 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **Critical** | **#4470 插件接口未授权 RCE 漏洞** | Console 前端插件接口存在远程代码执行，无需认证即可利用 | v1.1.7 | **无** | 🚨 **0-day 暴露，需紧急响应** |
| 🔴 **Critical** | **#4454 /mission 指令导致 Console 完全卡死** | 界面 freeze，进程存活但不可操作，清空 missions 目录无效 | v1.1.7 | **无** | 待修复 |
| 🟡 **High** | **#3640 MCP client TaskGroup 异常 → Agent 假死** | 渠道无响应、无错误日志，仅能通过重启恢复 | 1.1.2+ | **无** | 待诊断 |
| 🟡 **High** | **#4453/#4469 聊天窗口无回应** | Event loop stopped before Future completed，多模型切换无效 | v1.1.7 | **无** | 集中爆发 |
| 🟡 **High** | **#3854 chromadb Rust binding segfault** | SIGSEGV 杀死整个进程，45+ 次/会话，无 Python 异常可捕获 | Ubuntu 25.10, Py3.13 | **无** | 需 graceful fallback |
| 🟢 **Medium** | #2684 Ubuntu 安装启动失败 | websockets 弃用警告阻塞安装流程 | - | **无** | 影响新用户 |
| 🟢 **Medium** | #4468 LLM 执行频率限制 | "Operation LLM execution is too frequent, retry after 300s" | v1.1.7 | **无** | 限流策略过严 |

**稳定性健康度评估**：🔴 **风险偏高**。v1.1.7 出现**模式化故障**（Event loop / 无响应），暗示该版本存在系统性回归；同时安全漏洞首次被公开披露，项目面临**信任危机**。

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 纳入下一版本概率 | 判断依据 |
|:---|:---|:---|:---|
| **#4472 CLI 迁移至 `typer`** | Enhancement | ⭐⭐⭐⭐ 高 | 现代化 CLI 体验，社区呼声明确，改动面可控 |
| **#4455 多外部 skill 路径配置** | Feature | ⭐⭐⭐⭐ 高 | 有配套 PR 需求，skill 生态扩展的关键基础设施 |
| **#4463/#4465 上下文 token 估算优化** | Enhancement | ⭐⭐⭐⭐⭐ **极高** | **已有 PR #4465**，缓存 provider-reported usage，性能优化明确 |
| **#4433 每轮对话 token 用量展示** | Feature | ⭐⭐⭐⭐ 高 | **已有 PR #4433**，Console UI 增强，用户可见性需求 |
| **#4444 xAI OAuth + Grok provider** | Provider | ⭐⭐⭐⭐ 高 | **已有 PR #4444**，多 provider 战略延续，net additive 安全 |
| **#3813 Tauri 2.x 桌面端支持** | Feature | ⭐⭐⭐ 中 | first-time-contributor，Under Review 状态较久，需维护者推动 |
| **#4041 系统托盘启动（Win32）** | Feature | ⭐⭐⭐ 中 | 独立入口设计合理，但平台限定 Win32，长期运行场景需求 |
| **#3452 LLM routing UI** | Console | ⭐⭐⭐ 中 | **依赖 #3550 后端**，阻塞状态，需后端优先 |
| **E2E 测试系列 (#4457-#4460, #4458)** | Infrastructure | ⭐⭐⭐⭐⭐ **极高** | **已有 PR #4464**，Phase 2 里程碑核心，维护者重点投入 |

**路线图信号**：**质量基础设施优先于功能交付**。hanson-hex 的 E2E 测试矩阵（Login → Settings → Control → Agents）和 suntp 的 token 优化形成"**测好现有功能 > 添加新功能**"的明确策略。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 原声摘录 | Issue |
|:---|:---|:---|
| **v1.1.7 成为"灾难版本"** | "重启docker，回退版本依旧无法聊天"、"清空重新安装，结果都一样" | #4453, #4469 |
| **诊断黑箱** | "后台看了看，程序并没退出，还在正常运行。登录console试了下，可以正常对话" — 渠道层与核心层状态不一致 | #3640 |
| **安装即放弃** | "用的是脚本安装，到第三步copaw app出错" | #2684 |
| **安全信任崩塌** | "The plugin interface has an unauthorized remote code execution" — 公开披露无修复 | #4470 |

### 满意点

- **Console 独立可用性**：即使渠道失效，Console 仍可对话（#3640），说明核心架构有一定韧性
- **社区响应速度**：新 Issue 当日即有评论互动（#4469 5 评论均产生于 5-17）

### 不满意点

- **版本回退无效**：用户尝试的常规恢复手段（重启、重装、回退、清空目录）均失效，**恢复策略缺失**
- **错误信息不透明**："三个点在跳动"、"freeze" 类症状无明确错误码或日志指引

---

## 8. 待处理积压

### 需维护者紧急关注

| Issue/PR | 创建时间 | 积压天数 | 风险说明 |
|:---|:---|:---|:---|
| **#2291 Help Wanted 任务看板** | 2026-03-25 | **54 天** | 61 评论但 P0 任务完成率不透明，可能消耗贡献者热情 [Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) |
| **#2684 Ubuntu 安装失败** | 2026-03-31 | **48 天** | 新用户流失直接原因，与 websockets 依赖升级相关 [Issue #2684](https://github.com/agentscope-ai/QwenPaw/issues/2684) |
| **#3640 MCP 假死** | 2026-04-21 | **27 天** | 生产环境核心故障，无 assignee，无诊断进展 [Issue #3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) |
| **#3854 chromadb segfault** | 2026-04-27 | **21 天** | 45+ 次崩溃/会话，Rust binding 替代方案未评估 [Issue #3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) |
| **#3813 Tauri 桌面端** | 2026-04-24 | **24 天** | Under Review 状态，first-time-contributor 可能流失 [PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) |
| **#3452 LLM routing UI** | 2026-04-15 | **33 天** | 前端就绪但阻塞于后端 #3550，跨团队协作瓶颈 [PR #3452](https://github.com/agentscope-ai/QwenPaw/pull/3452) |

---

## 健康度评分

| 维度 | 评分 | 说明 |
|:---|:---|:---|
| 社区活跃度 | ⭐⭐⭐⭐⭐ | 24h 34 条更新，贡献者多元 |
| 代码质量趋势 | ⭐⭐⭐⭐☆ | E2E + 单元测试双轨投入，但为"补救性" |
| 稳定性 | ⭐⭐☆☆☆ | v1.1.7 模式化故障 + 安全漏洞，风险极高 |
| 响应速度 | ⭐⭐⭐⭐☆ | Issue 当日有互动，但关键 bug 无 fix |
| 路线图清晰度 | ⭐⭐⭐☆☆ | 测试基础设施明确，但功能交付节奏模糊 |

**综合建议**：立即成立 **v1.1.7 稳定性攻坚小组**，优先处理 #4470（安全）、#4453/#4469/#4454（无响应/卡死）、#3640（假死）三类问题；考虑发布 **v1.1.8-hotfix** 或回滚建议，阻断用户流失。

---

*日报生成时间: 2026-05-18*  
*数据来源: GitHub API /agentscope-ai/CoPaw*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-18

## 1. 今日速览

ZeroClaw 今日呈现**高活跃度、高修复压力**态势：24小时内 **20 条 Issues 更新**（16 活跃/新开，4 关闭）、**50 条 PR 更新**（39 待合并，11 已合并/关闭），无新版本发布。核心矛盾集中在 **Provider 兼容层与 reasoning/thinking 模式的系统性缺陷**（DeepSeek-V4、Kimi、小米 mimo、Qwen 均受影响），同时 CI 基础设施出现**静默失效**（PR 标题校验工作流自合并以来从未成功运行）。社区正以密集 PR 响应，但待合并队列高达 39 条，合并吞吐压力显著。

---

## 2. 版本发布

**无今日发布。**

---

## 3. 项目进展

### 今日关闭的重要 Issues/PR

| 项目 | 说明 | 链接 |
|:---|:---|:---|
| **#5994** 官方文档网站 + 端到端文档 | 文档基础设施里程碑关闭，降低新用户上手门槛 | [Issue #5994](https://github.com/zeroclaw-labs/zeroclaw/issues/5994) |
| **#6431** SQLite 内存模式并发启动竞态 | 并发 schema 初始化失败修复，提升多进程部署稳定性 | [Issue #6431](https://github.com/zeroclaw-labs/zeroclaw/issues/6431) |
| **#6548** Channel 运行时命令绕过 Fluent 本地化 | 硬编码英文串修复，国际化体验改善 | [Issue #6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) |
| **#6705** Windows cron 作业 `spawn error` | **关键修复**：解除 Windows 平台 cron 完全不可用状态，替换硬编码 `sh` 为 `RuntimeAdapter` | [Issue #6705](https://github.com/zeroclaw-labs/zeroclaw/issues/6705) |
| **#6710** [CLOSED] 桌面端 Windows/Linux 支持 | 大型 PR 被关闭，Linux 截屏诚实标记为不支持，Windows 支持推进但可能需重构后重新提交 | [PR #6710](https://github.com/zeroclaw-labs/zeroclaw/pull/6710) |

**整体推进评估**：今日关闭 4 条 Issue 中 2 条为 P1/P2 级别实际问题修复，但 39 条待合并 PR 显示**代码审查瓶颈**显著。桌面端跨平台支持 PR 的关闭可能延缓 v0.8 桌面战略。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 1 | **#6059** DeepSeek-V4 API 格式不兼容 | **9** | **Thinking 模式协议解析缺陷**：DeepSeek-V4-Pro/Flash 的 reasoning 内容格式变更导致调用失败，用户急需 provider 兼容层更新 | [Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) |
| 2 | **#5600** Kimi-code provider 流式调用工具报错 | **9** | ** reasoning_content 缺失检测过严**：Kimi 的 thinking 启用时 assistant message 缺少 reasoning_content 即 400 错误，阻塞工作流 | [Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) |
| 3 | **#6672** 小米 mimo-v2.5 reasoning_content 未传递 | **3** | **多轮 agentic 工具调用中的 reasoning 上下文丢失**：OpenAI-compatible provider 未将首轮 reasoning_content 转发至后续 turn，导致思维链断裂 | [Issue #6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) |

**诉求分析**：三条高评论 Issue 形成**清晰的模式——"国产大模型 thinking/reasoning 模式兼容性危机"**。DeepSeek、Kimi、小米、Qwen（#6734）均因 reasoning_content 处理逻辑缺陷而受阻，用户核心诉求是：**provider 兼容层需抽象 thinking 模式协议差异，而非硬编码 OpenAI 行为假设**。这直接影响 ZeroClaw 在中国及开源模型生态的竞争力。

---

## 5. Bug 与稳定性

### 按严重程度排列的今日 Bug

| 严重度 | Issue | 状态 | 描述 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| **S0** | **#6747** | 🆕 OPEN | `amannn/action-semantic-pull-request` 未加入 Actions 允许列表，完全无法运行 | **#6752** 已提交（inline regex 替代方案） | [Issue #6747](https://github.com/zeroclaw-labs/zeroclaw/issues/6747) |
| **S0** | **#6672** | OPEN | 小米 thinking 模型 reasoning_content 在多轮工具调用中丢失 | 无直接 PR | [Issue #6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) |
| **S1** | **#5600** | OPEN | Kimi-code 流式调用工具因 reasoning_content 缺失报 400 | 无直接 PR | [Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) |
| **S1** | **#6721** | 🆕 OPEN | `tool_search` 不在 `default_auto_approve`，deferred_loading+webhook 静默挂起 120s 后自动拒绝 | 无 | [Issue #6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721) |
| **S2** | **#6059** | OPEN (in-progress) | DeepSeek-V4 API 格式不兼容 | 无直接 PR | [Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) |
| **S2** | **#6739** | 🆕 OPEN | Cron 时区约定在工具/CLI/API 间不一致 | **#6740**, **#6741** 已提交 | [Issue #6739](https://github.com/zeroclaw-labs/zeroclaw/issues/6739) |
| **S2** | **#6734** | 🆕 OPEN | Qwen 3.6 工具调用信封泄漏至 Matrix 回复 | 无 | [Issue #6734](https://github.com/zeroclaw-labs/zeroclaw/issues/6734) |
| **S2** | **#6733** | 🆕 OPEN | Matrix 流式草稿状态仅按 room 键控，同 room 多 turn 竞态 | 无 | [Issue #6733](https://github.com/zeroclaw-labs/zeroclaw/issues/6733) |
| **S2** | **#6723** | 🆕 OPEN | Native OpenAI provider 硬编码 120s 超时，忽略 `timeout_secs` 配置 | 无 | [Issue #6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723) |
| **S2** | **#6720** | 🆕 OPEN | `context_aware_tools` 配置字段声明但未读取（死代码） | 无 | [Issue #6720](https://github.com/zeroclaw-labs/zeroclaw/issues/6720) |
| **S2** | **#6722** | 🆕 OPEN | `MemoryConfig.rerank_enabled`/`rerank_threshold` 脚手架无消费者 | 无 | [Issue #6722](https://github.com/zeroclaw-labs/zeroclaw/issues/6722) |

**关键风险**：
- **CI 静默失效**：#6396 合并的 PR 标题校验工作流从未运行，导致规范约束名存实亡。**#6752** 紧急提交 inline regex 替代方案，但需快速审查合并。
- **配置系统信任危机**：nick-pape 单日提交 4 条配置相关 Issue（#6720-#6723），揭示**配置 schema 与实际代码严重脱节**——字段存在但无消费者、硬编码值忽略用户配置，这指向架构层面的配置-代码同步机制缺失。

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 纳入可能性 | 信号分析 | 链接 |
|:---|:---|:---|:---|:---|
| **#6253** Skills v0.7.6 支持跟踪 | 路线图协调 | **高** | 官方标记 `accepted`，多子系统（CLI/loader/audit/install/sandbox/test）协调中，社区输入被明确邀请 | [Issue #6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) |
| **#6714** 移除 skill audit 的 remote-markdown-link 阻塞 | 体验优化 | **高** | 高误报率已造成真实 marketplace 插件失败，维护者友好，PR 就绪即可合并 | [Issue #6714](https://github.com/zeroclaw-labs/zeroclaw/issues/6714) |
| **#6742** `--log-llm` 流式负载追踪测试 | 测试覆盖 | **高** | **#6744** PR 已同日提交，Audacity88 自产自销，推进效率极高 | [Issue #6742](https://github.com/zeroclaw-labs/zeroclaw/issues/6742) |
| **#6636** `browser.headed` 配置 | 功能增强 | **中** | PR 开放中，需求明确（headless/headed 模式显式控制），但需作者响应 `needs-author-action` | [PR #6636](https://github.com/zeroclaw-labs/zeroclaw/pull/6636) |
| **#6666** IMAP/SMTP 分离凭证 | 功能增强 | **中** | 邮件通道企业场景刚需（relay 服务、不可控用户名），PR 已开放 | [PR #6666](https://github.com/zeroclaw-labs/zeroclaw/pull/6666) |
| **#6074** 153 commits 批量回滚审计 | 技术债务 | **中** | 长期跟踪 issue，标记 `in-progress`，影响历史 bugfix/feature 恢复，需维护者持续投入 | [Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) |

**下一版本信号**：v0.7.6 以 Skills UX 为主题已明确，但 **thinking/reasoning 兼容性修复可能迫使紧急补丁版本**。nick-pape 的配置系统问题集群（#6720-#6723）若批量修复，可能构成 v0.7.7 或 v0.8.0 的核心内容。

---

## 7. 用户反馈摘要

### 真实痛点（从 Issues 提炼）

| 痛点 | 来源 | 场景 | 情绪强度 |
|:---|:---|:---|:---:|
| **"国产模型二等公民"** | #6059, #5600, #6672, #6734 | 企业用户选用 DeepSeek/Kimi/小米/Qwen 作为主力模型时，thinking 模式反复触发兼容故障 | 🔴 高 |
| **"配置即谎言"** | #6720-#6723 | 用户按文档设置 `timeout_secs`、`rerank_enabled`、`context_aware_tools` 后发现完全无效，调试时间浪费 | 🔴 高 |
| **Webhook 静默失败** | #6721 | 自动化部署场景下，MCP deferred loading 因审批挂起 120s 后自动拒绝，无日志无告警 | 🟡 中高 |
| **Windows 平台边缘化** | #6705（已修复）, #6750 | cron 完全不可用、snapshot TTL 与轮询间隔不匹配，感觉"事后补丁" | 🟡 中 |
| **国际化半成品** | #6548（已修复） | 配置 `zh-CN` 后仍见硬编码英文，产品 polished 感受损 | 🟢 中 |

### 满意点

- **响应速度**：#6705 Windows cron 修复从报告到关闭仅 1 天
- **审计透明**：#6074 对 153 commits 回滚的公开跟踪获得技术社区认可

---

## 8. 待处理积压

| Issue/PR | 天数 | 风险 | 提醒 | 链接 |
|:---|:---:|:---|:---|:---|
| **#5600** Kimi-code provider 流式工具报错 | **38 天** | S1 阻塞工作流 | 评论数最高（9）却无 in-progress 标记，无关联 PR，可能因涉及流式协议重构而被回避 | [Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) |
| **#6059** DeepSeek-V4 不兼容 | **24 天** | S2 高优先级 | 标记 `in-progress` 但无可见 PR，用户持续反馈（👍 4），竞争窗口收窄 | [Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) |
| **#6074** 153 commits 回滚恢复 | **24 天** | 技术债务 | 标记 `in-progress` 但进展缓慢，影响多个已修复 bug 的恢复 | [Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) |
| **#6209** SkillMeta 严格化 + SkillForge 架构迁移 | **19 天** | 架构阻塞 | PR 开放中，关联 #6128/#6210，Skills 系统基础重构，v0.7.6 前置依赖 | [PR #6209](https://github.com/zeroclaw-labs/zeroclaw/pull/6209) |
| **#6607** 尊重显式 provider kind | **5 天** | 配置正确性 | 标记 `needs-author-action`，Alix-007 需响应审查意见，阻塞 provider 选择逻辑修复 | [PR #6607](https://github.com/zeroclaw-labs/zeroclaw/pull/6607) |

---

## 健康度评估

| 维度 | 评分 | 说明 |
|:---|:---:|:---|
| 社区活跃度 | ⭐⭐⭐⭐⭐ | 50 PR/20 Issue 日更新量极高 |
| 响应速度 | ⭐⭐⭐⭐☆ | 新 Issue 快速分类标记，但老 Issue 消化不足 |
| 代码审查吞吐 | ⭐⭐⭐☆☆ | 39 待合并 vs 11 已处理，瓶颈明显 |
| 架构一致性 | ⭐⭐☆☆☆ | 配置-代码脱节、provider 抽象泄漏问题集中爆发 |
| 跨平台成熟度 | ⭐⭐⭐☆☆ | Windows 修复被动，Linux 桌面支持 PR 关闭 |

**关键行动建议**：优先合并 **#6752**（修复 CI 静默失效）、为 thinking/reasoning 兼容性问题集群（#6059/#5600/#6672）指定专项 owner，并建立**配置字段消费验证**的自动化检查防止 #6720-#6723 模式复发。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*