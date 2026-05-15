# OpenClaw 生态日报 2026-05-15

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-15 00:23 UTC

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

# OpenClaw 项目动态日报 | 2026-05-15

---

## 1. 今日速览

OpenClaw 今日维持**极高活跃度**：24小时内 Issues 更新 500 条（95% 为活跃/新开，仅 25 条关闭），PR 更新 500 条（90% 待合并，50 条已处理），社区讨论密度显著。项目核心方向聚焦**策略合规框架建设**（4 个关联 XL 级 PR 并行推进）、**多平台稳定性修复**（Telegram/Line/WhatsApp 均有针对性修复）以及**安装包瘦身**（Bedrock/Slack/Vertex 等依赖外置化）。值得注意的是，PR 合并率仅 10%，大量高质量贡献处于待审积压状态，维护者带宽成为关键瓶颈。

---

## 2. 版本发布

### v2026.5.14-beta.1 | [Release 页面](https://github.com/openclaw/openclaw/releases/tag/v2026.5.14-beta.1)
| 属性 | 内容 |
|:---|:---|
| **类型** | Beta 预发布 |
| **核心变更** | 代理路由重构 + 国际化基线工具 |

**详细变更：**
- **依赖精简**：根级 Node 代理统一路由至 `@openclaw/proxyline`，移除 `proxy-agent`、`https-proxy-agent`、`minimatch` 三个直接依赖，降低供应链攻击面
- **开发体验**：新增 `pnpm ui:i18n:report` 基线报告，标记硬编码文案聚焦区域与 locale fallback 元数据，为后续多语言完整覆盖奠基

**迁移注意**：若下游项目直接依赖被移除的代理包，需迁移至 `@openclaw/proxyline` 或显式自行安装。

---

### v2026.5.12 | [Release 页面](https://github.com/openclaw/openclaw/releases/tag/v2026.5.12)
| 属性 | 内容 |
|:---|:---|
| **类型** | 稳定版 |
| **核心主题** | **Leaner installs（精益安装）** + Telegram 可靠性升级 |

**破坏性变更 / 迁移指南：**

| 变更项 | 影响 | 迁移操作 |
|:---|:---|:---|
| WhatsApp/Slack/Amazon Bedrock/Anthropic Vertex 依赖外置化 | 现有安装若使用这些 provider/plugin，升级后功能可能缺失 | 运行 `openclaw install @openclaw/provider-<name>` 显式补装 |
| Telegram 轮询机制重构 | 配置项 `channels.telegram.pollingMode` 行为变更 | 检查自定义轮询配置，确认 `isolatedPolling: true` 启用 |

**稳定性改进**：Telegram 实现隔离轮询、本地持久化队列、更安全的群组媒体处理，解决历史版本高并发场景下消息丢失与重复投递问题。

---

### v2026.5.12-beta.8 / beta.7 | [Release 页面](https://github.com/openclaw/openclaw/releases)
- 重复确认 Bedrock 与 Mantle provider 外置化，Slack/OpenShell sandbox/Anthropic Vertex plugin 外置化
- **beta.7→beta.8 无增量变更**，推测为 CI/CD 触发或签名重发

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR

| PR | 作者 | 状态 | 推进内容 |
|:---|:---|:---|:---|
| [#44051](https://github.com/openclaw/openclaw/pull/44051) | libeibei-22 | **已关闭** | 修复 WSL 环境下 clawhub 官方 skill 的 `Skipping skill path` 错误，回归测试覆盖 WSL2 路径解析 |

**整体进展评估**：今日合并率极低（50/500=10%），但**策略合规基础设施**通过 4 个 XL 级 PR 形成完整技术栈：

| PR 链 | 功能 | 状态 |
|:---|:---|:---|
| [#80407](https://github.com/openclaw/openclaw/pull/80407) → [#80056](https://github.com/openclaw/openclaw/pull/80056) → [#80783](https://github.com/openclaw/openclaw/pull/80783) → [#81104](https://github.com/openclaw/openclaw/pull/81104) | 渠道检查 → 工具元数据合规 → 模型/网络/MCP 合规 → 运行时审计与证明强制执行 | 全部 **OPEN**，形成递进依赖 |

该系列由 `giodl73-repo` 主导，代表 OpenClaw 向**企业级可审计 AI 代理平台**演进的核心架构投资。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 链接 |
|:---|:---|:---:|:---:|:---|:---|
| 1 | **Linux/Windows Clawdbot Apps** — 跨平台桌面端缺失 | 104 | 74 | macOS/iOS/Android 已有，Linux/Windows 用户强烈呼吁功能对等，企业部署刚需 | [#75](https://github.com/openclaw/openclaw/issues/75) |
| 2 | **Docker 中 skill 安装失败：`brew not installed`** | 29 | 17 | Linux 容器内不应依赖 Homebrew，需支持原生包管理器或预编译二进制 | [#14593](https://github.com/openclaw/openclaw/issues/14593) |
| 3 | **工具调用间文本泄漏至消息渠道** | 26 | 0 | 内部处理/错误恢复文本被用户可见，严重 UX 缺陷，需路由层区分 `internal` vs `user-facing` 输出 | [#25592](https://github.com/openclaw/openclaw/issues/25592) |
| 4 | **预编译 Android APK 发布请求** | 24 | 1 | 降低非开发者用户门槛，与 [#75](https://github.com/openclaw/openclaw/issues/75) 形成移动端体验闭环 | [#9443](https://github.com/openclaw/openclaw/issues/9443) |
| 5 | **Gateway 运行时退化：定价获取 60s 超时、Telegram 轮询停滞** | 17 | 1 | Windows 11 + Node 24 环境下的慢性网络/定时器退化，跨版本回归，需系统性诊断 | [#73323](https://github.com/openclaw/openclaw/issues/73323) |

**诉求分析**：社区核心矛盾集中在**平台覆盖完整性**（桌面端/预编译包）与**生产环境可靠性**（容器化部署、长运行稳定性）。高赞 Issue #75 持续 5 个月未解决，已成为用户流失风险点。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0-崩溃/悬挂** | [#71127](https://github.com/openclaw/openclaw/issues/71127) | 卡死处理会话仅 WARN 无恢复动作，需外部重启 Gateway | OPEN | 无 |
| 🔴 **P0-数据丢失风险** | [#71412](https://github.com/openclaw/openclaw/issues/71412) | `stopChannel` 超时残留僵尸任务，健康监控误判重启成功 | OPEN | 无 |
| 🟡 **P1-回归** | [#32473](https://github.com/openclaw/openclaw/issues/32473) | Control UI 要求设备身份（HTTPS/localhost），VPS Docker 部署阻断 | OPEN | 无 |
| 🟡 **P1-功能失效** | [#31583](https://github.com/openclaw/openclaw/issues/31583) | `exec` 工具不继承 `skills.entries.*.env`，密钥注入断裂 | OPEN | 无 |
| 🟡 **P1-功能失效** | [#81368](https://github.com/openclaw/openclaw/issues/81368) | 隔离 cron watchdog 60s 杀死 beta.4 运行，#80888 修复未生效 | OPEN | 无 |
| 🟡 **P1-UX 缺陷** | [#25592](https://github.com/openclaw/openclaw/issues/25592) | 工具调用间内部文本泄漏至用户渠道 | OPEN | 无 |
| 🟢 **P2-行为异常** | [#70628](https://github.com/openclaw/openclaw/issues/70628) | Telegram DM 无可见回复时伪造静默回复气泡 | OPEN | 无 |
| 🟢 **P2-行为异常** | [#32296](https://github.com/openclaw/openclaw/issues/32296) | Agent 回复前一条消息而非当前消息，会话上下文混淆 | OPEN | 无 |

**今日修复 PR**：
- [#81964](https://github.com/openclaw/openclaw/pull/81964) Telegram 默认发送客户端超时边界限定（解决"挂起数分钟"感知）
- [#81704](https://github.com/openclaw/openclaw/pull/81704) Line 推送静默失败修复（小写 recipient 导致 HTTP 400）
- [#81883](https://github.com/openclaw/openclaw/pull/81883) WhatsApp 上传文件媒体发送降级处理

---

## 6. 功能请求与路线图信号

### 高潜力纳入下一版本的需求（已有 PR 或强信号）

| 需求 | Issue/PR | 纳入信号 | 预估版本 |
|:---|:---|:---|:---|
| **子 Agent 完成路由控制** | [#27445](https://github.com/openclaw/openclaw/issues/27445) + [#80242](https://github.com/openclaw/openclaw/pull/80242) | PR 已开，修复 announce 路由至父会话而非渠道会话 | v2026.5.15-beta |
| **Slack Block Kit 富消息** | [#12602](https://github.com/openclaw/openclaw/issues/12602) | 13 评论，企业用户高频需求，与 [#33413](https://github.com/openclaw/openclaw/issues/33413) 工具进度状态形成体验闭环 | v2026.6.x |
| **Cron 直接执行模式** | [#18160](https://github.com/openclaw/openclaw/issues/18160) | 9 👍，避免 `agentTurn` LLM 解释开销，可靠性关键 | v2026.6.x |
| **策略合规框架** | PR 链 #80407→#81104 | 4 个 XL PR 并行，企业安全合规刚需，架构级投资 | v2026.5.x 稳定版 |
| **会话快照 save/load** | [#13700](https://github.com/openclaw/openclaw/issues/13700) | 开发工作流 A/B 测试刚需，与 tiered bootstrap [#22438](https://github.com/openclaw/openclaw/issues/22438) 协同 | 待评估 |

### 长期架构信号

| 需求 | Issue | 技术方向 |
|:---|:---|:---|
| **Multi-Agent 协作增强** | [#35203](https://github.com/openclaw/openclaw/issues/35203) | Capability Profiling + Shared Blackboard + Layered Memory + Token Cost Governance — 对标 AutoGen/Magma 的多智能体研究前沿 |
| **安全沙箱 bubblewrap** | [#39244](https://github.com/openclaw/openclaw/pull/39244) | 内核级命名空间隔离，Linux safeBins 终极方案 |
| **Claude CLI 交互后端** | [#81851](https://github.com/openclaw/openclaw/pull/81851) | 本地 TLS MITM 代理捕获 reasoning_delta，实验性订阅计费模式支持 |

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 痛点 | 来源 Issue | 典型原话提炼 |
|:---|:---|:---|
| **容器化部署体验断裂** | [#14593](https://github.com/openclaw/openclaw/issues/14593), [#31331](https://github.com/openclaw/openclaw/issues/31331) | "Docker 里跑 `openclaw onboard` 直接报 brew 未安装"；"Docker + Sandbox workspace 挂载完全失效" |
| **密钥管理原始** | [#10659](https://github.com/openclaw/openclaw/issues/10659), [#13610](https://github.com/openclaw/openclaw/issues/13610), [#31583](https://github.com/openclaw/openclaw/issues/31583) | "Agent 能看到完整 API key"；"`exec` 工具不继承 skill 环境变量，密钥注入断裂" |
| **长运行稳定性焦虑** | [#73323](https://github.com/openclaw/openclaw/issues/73323), [#71127](https://github.com/openclaw/openclaw/issues/71127), [#81368](https://github.com/openclaw/openclaw/issues/81368) | "Windows 上 Gateway 跑几天就定时器退化"；"卡死会话只能外部重启" |
| **平台覆盖不均** | [#75](https://github.com/openclaw/openclaw/issues/75), [#9443](https://github.com/openclaw/openclaw/issues/9443) | "我们有 macOS/iOS/Android，Linux/Windows 缺失" |

### 😊 满意点

- **Telegram 可靠性升级获认可**：v2026.5.12 的隔离轮询与持久化队列解决历史消息丢失问题
- **安装包瘦身受好评**：按需安装 provider 减少无关依赖，容器镜像体积显著下降

### 💡 使用场景洞察

- **企业安全合规**：[#8719](https://github.com/openclaw/openclaw/issues/8719) 提出"数据为中心的安全，不依赖 LLM 判断"，与官方策略合规 PR 链方向一致
- **量化/金融硬规则**：[#13583](https://github.com/openclaw/openclaw/issues/13583) 要求"机械阻止 Agent 在调用工具 X 前发出最终答案"，soft prompt 不足够
- **多语言社区**：[#13751](https://github.com/openclaw/openclaw/issues/13751) 飞书插件需降低权限要求，中国区企业采纳障碍

---

## 8. 待处理积压

### ⚠️ 维护者关注提醒

| Issue/PR | 创建时间 | 最后更新 | 积压天数 | 风险 | 链接 |
|:---|:---|:---|:---:|:---|:---|
| **Linux/Windows 桌面端** | 2026-01-01 | 2026-05-14 | **134天** | 最高赞 Issue（74 👍），跨平台战略缺口，竞品已覆盖 | [#75](https://github.com/openclaw/openclaw/issues/75) |
| **Discord 图片 base64 膨胀** | 2026-01-19 | 2026-05-14 | **116天** | 7 张图片即触达 200K token 上限，会话可用性崩溃 | [#1210](https://github.com/openclaw/openclaw/issues/1210) |
| **安全/不安全 ClawdBot 模式** | 2026-02-02 | 2026-05-14 | **102天** | Rust 重写提议，社区分裂风险，需官方技术立场 | [#6731](https://github.com/openclaw/openclaw/issues/6731) |
| **exec 审批 denylist** | 2026-02-01 | 2026-05-14 | **103天** | 7 👍，安全关键，与现有 allowlist 形成完整策略 | [#6615](https://github.com/openclaw/openclaw/issues/6615) |
| **XL 级策略 PR 链** | 2026-05-10~12 | 2026-05-15 | 3~5天 | 4 个 PR 相互依赖，任一阻塞则全线停滞，需优先审阅 | [#80407](https://github.com/openclaw/openclaw/pull/80407) 等 |

---

**报告生成时间**：2026-05-15  
**数据覆盖**：过去 24 小时 GitHub 活动  
**项目健康度评分**：⭐⭐⭐⭐☆（4/5）  
- 活跃度：★★★★★  
- 合并吞吐量：★★☆☆☆（瓶颈）  
- 稳定性修复响应：★★★★☆  
- 长期需求满足：★★★☆☆（跨平台/容器化滞后）

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析
**报告日期**: 2026-05-15 | 数据周期: 过去24小时

---

## 1. 生态全景

个人 AI 助手开源生态正处于**"功能扩张与质量巩固"的并行期**：头部项目（OpenClaw、ZeroClaw、CoPaw）日均 50+ PR/Issues 的高强度迭代持续，但合并率普遍偏低（4%-12%），审阅带宽成为共性瓶颈；企业级合规（策略审计、TLS 安全、容器隔离）从边缘需求上升为核心架构投资方向；多平台渠道适配（Telegram/飞书/Discord）和推理模型兼容性（DeepSeek V4/MiMo/Claude extended thinking）成为差异化竞争焦点。与此同时，部分项目（PicoClaw、Moltis）活跃度骤降，呈现明显的**马太效应**。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 合并/关闭 | 待合并 | 版本发布 | 健康度评估 |
|:---|:---:|:---:|:---:|:---:|:---|:---|
| **OpenClaw** | 500 更新 | 500 更新 | 50 | 450 | v2026.5.14-beta.1 / v2026.5.12 | ⭐⭐⭐⭐☆ 活跃度极高，合并率仅10%成瓶颈，企业合规架构投资明确 |
| **NanoBot** | 21 更新 | 24 更新 | 7 | 17 | 无 | ⭐⭐⭐⭐☆ 高活跃，DeepSeek V4兼容性危机待解，Agent规划进入工程化 |
| **Hermes Agent** | 50 更新 | 50 更新 | 14 | 36 | 无 | ⭐⭐⭐⭐☆ 高活跃，终端TUI技术债集群化，安全边界加固中 |
| **PicoClaw** | 7 更新 | 24 更新 | 1 | 23 | Nightly v0.2.8 | ⭐⭐⭐☆☆ 中等活跃，核心功能合并停滞，稳定性信任受损 |
| **NanoClaw** | 1 活跃 | 22 更新 | 13 | 9 | 无 | ⭐⭐⭐⭐☆ 高强度技能生态扩张，供应商中立化战略清晰 |
| **NullClaw** | 无 | 无 | 0 | 0 | 无 | — 零活动，项目休眠 |
| **IronClaw** | 50 更新 | 50 更新 | 6 | 44 | 无 | ⭐⭐⭐☆☆ 极高活跃但合并率12%，Reborn重构风险累积，生产故障22天未响应 |
| **LobsterAI** | 0 | 28 更新 | 27 | 1 | **2026.5.14** | ⭐⭐⭐⭐⭐ 集中发版窗口期，技术债务清理果断，社区参与薄弱 |
| **TinyClaw** | 无 | 无 | 0 | 0 | 无 | — 零活动，项目休眠 |
| **Moltis** | 2 新开 | 0 | 0 | 0 | 无 | ⭐⭐☆☆☆ 连续两日零代码进展，新Issue沉没风险高 |
| **CoPaw** | 50 更新 | 50 更新 | 2 | 48 | **v1.1.7** | ⭐⭐⭐☆☆ 极高活跃，合并率4%严重告警，发布当日即暴露P0缺陷 |
| **ZeptoClaw** | 无 | 无 | 0 | 0 | 无 | — 零活动，项目休眠 |
| **ZeroClaw** | 23 更新 | 50 更新 | 7 | 43 | 无 | ⭐⭐⭐⭐☆ 高强度开发，Cron系统重构+技能自治2.0双主线，153 commits回滚债务悬置 |

---

## 3. OpenClaw 在生态中的定位

### 核心优势
| 维度 | 具体表现 |
|:---|:---|
| **规模效应** | 单日 500 Issues/PR，社区体量是第二梯队（NanoBot/Hermes/ZeroClaw）的 **10-20 倍**，形成事实标准势能 |
| **企业合规领先** | 4 个 XL 级策略合规 PR 链（#80407→#81104）并行推进，覆盖渠道检查→工具元数据→模型/网络/MCP合规→运行时审计，**全生态唯一完成"可审计AI代理平台"架构闭环** |
| **国际化基础设施** | `pnpm ui:i18n:report` 基线工具落地，多语言覆盖从"社区补丁"转向"工程化治理" |
| **安装包精益化** | Bedrock/Slack/Vertex 等依赖外置化，按需安装模式被 NanoBot、LobsterAI 等追随 |

### 技术路线差异
| 对比项 | OpenClaw | 同类典型（ZeroClaw/NanoClaw） |
|:---|:---|:---|
| 核心语言 | Node.js/TypeScript | Rust（ZeroClaw）、Python（NanoBot） |
| 架构哲学 | **插件化扩展**（provider/skill 外置） | **一体化内核**（ZeroClaw 强调内存安全，NanoClaw 强调多CLI适配） |
| 安全模型 | **策略合规框架**（声明式规则+运行时审计） | 传统沙箱/权限控制（ZeroClaw 的 bubblewrap 实验性） |
| 商业路径 | 开源核心 + 企业合规增值 | 技能市场/多供应商配额优化（NanoClaw #2470） |

### 社区规模对比
- **OpenClaw** 的 Issue #75（Linux/Windows 桌面端）单议题 74 👍、134 天持续更新，其**单一议题热度超过多数项目的全日活跃总量**
- 但 **合并率 10%** 远低于 LobsterAI（96%）、NanoClaw（59%），维护者带宽与社区贡献量的**剪刀差**是最大风险

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---:|
| **推理模型深度兼容** | NanoBot (#3754, #3760)、ZeroClaw (#6269, #5652)、CoPaw (#4314)、PicoClaw (#2859) | DeepSeek V4 `reasoning_content` 处理、MiMo 思考模式+工具调用、Anthropic extended thinking 的原生支持 | 🔴 **极高** |
| **Cron/定时任务可靠性** | ZeroClaw (#6647, #6105, #6654, #6634)、NanoBot (#3718)、Hermes Agent (#26004) | 输出路由至渠道、会话上下文继承、事务化持久化、结构化元数据透传 | 🔴 **极高** |
| **Telegram 渠道精细化** | OpenClaw（轮询重构）、ZeroClaw (#6286, #6663)、Hermes Agent (#25710)、PicoClaw (#2798)、CoPaw | 隔离轮询、mention_only 媒体过滤、工具调用进度展示、语音支持 | 🟡 **高** |
| **容器化部署体验** | OpenClaw (#14593, #31331)、NanoBot (#3780)、Hermes Agent (#24099, #15290)、PicoClaw (#2812) | Docker 内技能安装不依赖 brew、沙箱与 restrictWorkspace 平衡、NAS 权限适配 | 🟡 **高** |
| **企业安全合规** | OpenClaw（策略PR链）、ZeroClaw (#5122, #6657)、LobsterAI (#842)、CoPaw (#3957) | 运行时审计、TLS hostname 验证、exec 审批 denylist、Agent 身份隔离 | 🟡 **高** |
| **多平台桌面端覆盖** | OpenClaw (#75, #9443)、NanoBot（无）、LobsterAI（Electron基座） | Linux/Windows 功能对等、预编译 APK 降低门槛 | 🟢 **中** |
| **会话可观测性/导出** | NanoBot (#3777, #3778)、LobsterAI (#853)、ZeroClaw (#6641, #6642) | CLI 会话管理、JSON/JSONL/Markdown 导出、OTel trace 关联 | 🟢 **中** |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 | 核心差异化叙事 |
|:---|:---|:---|:---|:---|
| **OpenClaw** | 多平台渠道聚合、企业合规、国际化 | 中大型团队/企业开发者 | Node.js 插件化生态，策略合规框架 | **"可审计的 AI 代理平台"** |
| **NanoBot** | Agent 规划与目标追踪、模型路由降本 | 开发者/技术型用户 | Python，AgentHook 动态路由，LiteLLM 兼容 | **"智能降本的 Agent 工作流"** |
| **Hermes Agent** | 自改进代理、终端 TUI、容器化 | 极客/自托管用户 | Rust + Ink/Rich，Docker 优先，技能自治 | **"唯一可自修改的 AI 助手"** |
| **ZeroClaw** | Cron 自动化、技能管理、内存系统 | 自动化运维/个人超级用户 | Rust，事务化存储，OTel 原生 | **"Set and forget 的自主代理"** |
| **NanoClaw** | 多供应商 CLI 适配、技能市场、营销运营 | 企业运营/多平台投放用户 | TypeScript，MCP 集成，配额优化 | **"供应商中立的 AI 运营平台"** |
| **CoPaw** | 浏览器自动化、多 Agent 协作、Qwen 生态 | 中国开发者/钉钉飞书用户 | Python，Browser Use，AgentScope 基座 | **"国产模型原生的 Agent 框架"** |
| **LobsterAI** | 桌面端封装、Artifacts 预览、插件生态 | 非技术终端用户/企业办公 | Electron，OpenClaw 内核封装 | **"开箱即用的 AI 办公套件"** |
| **IronClaw** | WASM 组件化、Reborn 架构、NEAR 链集成 | Web3/去中心化开发者 | Rust，WASM 运行时，事件溯源 | **"去中心化可验证的 Agent 基础设施"** |
| **PicoClaw** | 轻量级部署、微信/小米生态 | 中文社区/边缘设备用户 | Python，Pico 硬件适配 | **"轻量化中文优先的代理"** |
| **Moltis** | P2P 代理通信、隐私中继 | 隐私极客/去中心化倡导者 | 未知（活跃度不足） | **"无信任第三方的代理网络"** |

---

## 6. 社区热度与成熟度

### 快速迭代阶段（日均 50+ 活动量，功能扩张期）
| 项目 | 迭代特征 | 关键风险 |
|:---|:---|:---|
| **OpenClaw** | 合规架构投资、安装包瘦身、多平台修复 | 合并率 10%，450 PR 积压，审阅瓶颈 |
| **CoPaw** | 浏览器自动化增强、测试覆盖补债 | 合并率 4% 严重告警，发布即暴露 P0 缺陷 |
| **IronClaw** | Reborn 架构七模块重构、Hook 框架爆发 | 44/50 PR 待合并，生产故障 22 天零响应 |

### 质量巩固阶段（高活跃但聚焦修复与优化）
| 项目 | 巩固特征 | 关键风险 |
|:---|:---|:---|
| **ZeroClaw** | Cron 系统重构、技能自治 2.0、安全加固 | 153 commits 回滚 48 天未恢复，历史债务 |
| **Hermes Agent** | 终端 TUI 集群修复、安全边界加固 | 终端 resize 技术债需系统性重构而非补丁 |
| **NanoBot** | Agent 规划工具、CLI 诊断、飞书/Telegram 修复 | DeepSeek V4 兼容性危机，#2880 stale 标签误判 |

### 发版冲刺/债务清理阶段
| 项目 | 特征 | 关键风险 |
|:---|:---|:---|
| **LobsterAI** | 集中发版 2026.5.14，批量关闭 8 条 50+ 天 stale PR | 社区参与近乎为零，外部贡献生态薄弱 |
| **NanoClaw** | 13/22 高合并率，技能生态大规模扩张 | 计费模式合规性（#2470）需产品决策 |

### 低活跃/维护缓冲期
| 项目 | 状态 | 风险 |
|:---|:---|:---|
| **PicoClaw** | 中等活跃，核心功能合并停滞，文档同步为主 | 稳定性 issue 关闭透明度不足，社区信任损耗 |
| **Moltis** | 连续两日零 PR，新 Issue 零响应 | 生产级 Bug（#996 TLS 限制）48h 无响应即信任危机 |
| **NullClaw / TinyClaw / ZeptoClaw** | 完全休眠 | 项目可持续性存疑 |

---

## 7. 值得关注的趋势信号

### 信号一：推理模型兼容性成为"入场券"而非"加分项"
> **数据支撑**: NanoBot 3 个 DeepSeek V4 相关 Bug（#3754, #3760, #1998）、ZeroClaw #6269 reasoning_content 丢失、CoPaw #4314 MiMo 思考模式 400 错误、PicoClaw #2859 小米 MIMO 参数错误

**行业含义**: 随着 DeepSeek V4、Claude 4、Qwen3 等推理模型成为性价比首选，"支持推理模型"从早期采用者需求变为**基础兼容性要求**。开发者需在设计阶段即纳入 `reasoning_content` 的生命周期管理（压缩、透传、展示），而非事后补丁。

### 信号二："自动化最后一公里"从功能可用转向体验闭环
> **数据支撑**: ZeroClaw #6647 Cron 输出仅 Dashboard 不推渠道、#6105 Agent 无 cron 上下文；NanoBot #3689 中断会话丢失上下文；OpenClaw #18160 Cron 直接执行模式请求

**行业含义**: 用户不再满足于"定时任务能跑"，而是要求**结果可达、状态可续、失败可察**。Cron 系统正从"触发器"演进为"工作流编排器"，需内置渠道路由、会话继承、错误重试、进度通知的完整闭环。

### 信号三：企业合规从"安全功能"上升为"架构核心"
> **数据支撑**: OpenClaw 4 个 XL 级策略合规 PR 链、ZeroClaw #5122 安全策略失效 47 天未修、LobsterAI #842 安全环境扫描、CoPaw #3957 Agent 身份混淆

**行业含义**: "数据为中心的安全，不依赖 LLM 判断"（OpenClaw #8719）成为共识。未来企业采购评估将从"有没有权限控制"转向"能不能证明合规"——**可审计、可重放、可证明**的架构设计将成为差异化壁垒。

### 信号四：多 CLI/多供应商适配成为"去锁定"战略
> **数据支撑**: NanoClaw #2474/#2475 Claude Code ↔ Codex 对等化、#2470 CLI 模式替代 Agent SDK 优化配额；OpenClaw 依赖外置化降低供应商绑定

**行业含义**: 随着 AI 编码 CLI（Claude Code、Codex、Gemini CLI、Aider）格局未定，"供应商锁定"焦虑从模型层上升至工具链层。**抽象适配层 + 配置化切换**成为平台型项目的必备架构，纯单供应商绑定项目将面临迁移成本质疑。

### 信号五：终端 TUI 的"富交互"与"稳定性"矛盾激化
> **数据支撑**: Hermes Agent 终端 resize 问题集群（8+ 个关联 Issue），Ink/Rich 的 reflow 机制补丁失效；对比 OpenClaw 的 WebUI 优先、LobsterAI 的 Electron 封装

**行业含义**: 终端作为"开发者最亲密界面"的叙事遭遇技术瓶颈——**流式输出、动态布局、窗口 resize** 的组合对现有 TUI 框架形成系统性压力。未来可能出现"终端 WebView 化"（如 Warp 终端）或"CLI 退化为 API 客户端"的分化。

---

**分析师结论**: 2026-05-15 的生态图景显示，个人 AI 助手赛道已从"功能竞赛"进入"质量与合规深水区"。OpenClaw 凭借规模效应和合规架构投资维持领导地位，但合并瓶颈是最大隐患；ZeroClaw 和 NanoClaw 在垂直场景（自动化、运营）建立差异化；IronClaw、CoPaw 的重构激进与质量门禁缺失形成警示案例。对开发者而言，**推理模型原生支持、Cron 工作流闭环、可审计架构**是下一代 Agent 平台的必选项。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-15

---

## 1. 今日速览

NanoBot 今日保持**高活跃度**，24小时内 Issues 更新 21 条（10 新开/活跃，11 关闭），PR 更新 24 条（17 待合并，7 已合并/关闭）。项目核心开发节奏密集，**chengyongru** 成为今日最活跃贡献者，单日提交 5 个 PR，覆盖 Agent 规划工具、飞书修复、配对流程等关键模块。社区侧围绕 **DeepSeek V4 Flash** 兼容性、**Windows 无沙箱安全**、**企业代理 SSL** 等生产环境痛点展开激烈讨论。整体健康度良好，但待合并 PR 积压达 17 个，需关注 review 瓶颈。

---

## 2. 版本发布

**无新版本发布**

最新版本仍为 **v0.1.5.post3.2026.05.13**，昨日无热修复或补丁发布。值得注意的是，Issue #3790 报告了该版本 WebUI 会话打印内容显示错乱的问题，可能影响用户体验。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（7 个）

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#3779](https://github.com/HKUDS/nanobot/pull/3779) | chengyongru | **修复快捷命令持久化**：`/help`、`/pairing` 等命令跳过 BUILD/SAVE 状态导致 WebUI 会话为空 | 解决 WebUI 历史记录断裂的基础架构问题，为后续配对流程 PR 奠基 |
| [#3775](https://github.com/HKUDS/nanobot/pull/3775) | chengyongru | **飞书机器人事件无操作处理**：注册 `im.chat.member.bot.added/deleted_v1` 的 no-op handler | 根治飞书群聊中其他机器人 @ 导致的 "processor not found" 崩溃（关联 Issue #3772、#3787） |
| [#3786](https://github.com/HKUDS/nanobot/pull/3786) | liflovs | **Telegram 语音转录配置透传**：修复 `transcription_provider` 等配置被忽略的问题 | 语音消息工作流完整性修复，影响多语言部署场景 |
| [#3783](https://github.com/HKUDS/nanobot/pull/3783) | HengWeiBin | **企业代理 SSL 验证配置**：新增 `ssl_verify` 选项解决自签名证书链失败 | 企业内网部署的关键阻塞解除（后被 #3784 替代优化） |
| [#3483](https://github.com/HKUDS/nanobot/pull/3483) | flyzstu | **OpenCode Go 文档补充**：新增聚合网关提供商配置说明 | 降低国内模型接入门槛 |
| [#3121](https://github.com/HKUDS/nanobot/pull/3121) | JiajunBernoulli | **模型路由 AgentHook 支持**：通过 `AgentHookContext.model` 实现动态路由 | 关闭长期功能请求 Issue #3070，为智能降本提供扩展点 |
| [#3773](https://github.com/HKUDS/nanobot/pull/3773) | shen-baise | **[关闭] 合并为三个独立 PR**：`doctor` 命令、会话管理、`/export` | 大型 PR 拆分，提升 review 效率 |

**整体迈进**：今日合并聚焦 **稳定性修复**（飞书/Telegram/SSL）与 **开发者体验**（CLI 诊断、会话管理），同时完成 **模型路由** 这一社区长期诉求的架构落地。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 热度分析 |
|:---|:---|:---|:---|
| 🔥1 | [#2880](https://github.com/HKUDS/nanobot/issues/2880) 任意消息报错（stale bug） | **17 评论** | **4月7日遗留的高频阻塞问题**，用户反馈"卸载重装清空均无效"，但仅 Agent 模式正常。疑似核心消息处理管道与 Agent 路径分叉，需维护者介入定性 |
| 2 | [#3689](https://github.com/HKUDS/nanobot/issues/3689) 中断会话丢失上下文 | 5 评论 | **已关闭**，用户核心诉求：打断循环任务时需保留执行步骤记忆。反映长任务状态管理的用户预期与实现 gap |
| 3 | [#3780](https://github.com/HKUDS/nanobot/issues/3780) Windows 无沙箱安全控制 | 3 评论 | **已关闭**，小企业共享部署的典型场景：`restrictWorkspace` 阻断外部数据读取 vs 安全风险的矛盾，需更精细的 ACL 设计 |

### 热点诉求提炼

- **#2880 的沉默成本**：17 评论无维护者明确回应，用户反复尝试自救，存在流失风险
- **安全与便利的权衡**：#3780 揭示 Windows 企业部署的结构性困境——沙箱缺失下的最小权限原则难以落地
- **长任务可靠性**：#3689 与 PR #3460、#3788 形成需求-实现闭环，社区正从"能跑"向"跑得稳"演进

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | Fix 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#2880](https://github.com/HKUDS/nanobot/issues/2880) | 任意输入必现报错，非 Agent 模式完全不可用 | ❌ **无 fix**，stale 标签存疑（5月14日仍有更新） |
| 🔴 **高** | [#3790](https://github.com/HKUDS/nanobot/issues/3790) | WebUI 会话内容显示错乱，需手动刷新 | ❌ **无 fix**，影响最新 post3 版本 |
| 🟡 **中** | [#3772](https://github.com/HKUDS/nanobot/issues/3772) → [#3775](https://github.com/HKUDS/nanobot/pull/3775) | 飞书群聊被其他机器人 @ 时崩溃 | ✅ **已修复**（no-op handler） |
| 🟡 **中** | [#3760](https://github.com/HKUDS/nanobot/issues/3760) | DeepSeek V4 Flash `reasoning_content` 400 错误 | ❌ **无 fix**，第一轮对话即失败，阻断模型接入 |
| 🟡 **中** | [#3754](https://github.com/HKUDS/nanobot/issues/3754) | DeepSeek V4 Flash 忽略外部文件、编造内容 | ❌ **无 fix**，小文件/常见知识场景必现 |
| 🟡 **中** | [#1998](https://github.com/HKUDS/nanobot/issues/1998) | Coder 类模型（GLM5/Qwen3.5）JSON 格式参数错误 | ❌ **无 fix**，post4 回归，LiteLLM 层兼容性问题 |
| 🟢 **低** | [#3787](https://github.com/HKUDS/nanobot/issues/3787) | 飞书 bot reply mention 事件未处理 | ✅ **已修复**（同 #3775 root cause） |
| 🟢 **低** | [#3718](https://github.com/HKUDS/nanobot/issues/3718) | Cron 提醒流式输出缺少 streamId | ❌ **无 fix**，服务端事件溯源不完整 |

**关键信号**：DeepSeek V4 Flash 相关 Bug 密集爆发（#3754、#3760），该模型作为性价比首选被广泛采用，但 NanoBot 对其 `reasoning_content`、文件读取行为的适配存在系统性缺口。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **Agent 任务规划工具** | PR [#3791](https://github.com/HKUDS/nanobot/pull/3791) | ⭐⭐⭐⭐⭐ **极高** | 已提交 PR，支持 create/update/show/done 全生命周期，跨 turn 持久化 |
| **Goal 状态流式同步 + WebUI** | PR [#3788](https://github.com/HKUDS/nanobot/pull/3788) | ⭐⭐⭐⭐⭐ **极高** | Re-bin 主导的大型重构，端到端实现，替换旧版 orchestrator |
| **LongTaskTool 多步子代理** | PR [#3460](https://github.com/HKUDS/nanobot/pull/3460) | ⭐⭐⭐⭐☆ **高** | 4月26日 pending，与 #3788 可能存在架构重叠，需协调合并策略 |
| **CLI `doctor` 诊断命令** | PR [#3776](https://github.com/HKUDS/nanobot/pull/3776) + Issue [#3769](https://github.com/HKUDS/nanobot/issues/3769) | ⭐⭐⭐⭐⭐ **极高** | 社区强烈需求（对标 OpenClaw），已拆分为独立 PR |
| **会话管理 CLI（list/export/delete）** | PR [#3777](https://github.com/HKUDS/nanobot/pull/3777) | ⭐⭐⭐⭐☆ **高** | 与 #3778 `/export` 斜杠命令形成互补，UX 覆盖完整 |
| **DM 发送者配对/白名单** | Issue [#3768](https://github.com/HKUDS/nanobot/issues/3768) | ⭐⭐⭐⭐☆ **高** | 安全刚需，PR #3774 已实现 chat-native pairing，可自然延伸 |
| **Token 历史用量追踪 `/insights`** | Issue [#3731](https://github.com/HKUDS/nanobot/issues/3731) | ⭐⭐⭐☆☆ **中** | 付费场景痛点，但需持久化层支持，短期可能依赖外部集成 |
| **本地 Tokenizer 估算** | Issue [#3647](https://github.com/HKUDS/nanobot/issues/3647) | ⭐⭐⭐☆☆ **中** | 离线环境刚需，改动面小，适合 good-first-issue |
| **Provider 托管搜索工具回退** | Issue [#3741](https://github.com/HKUDS/nanobot/issues/3741) | ⭐⭐⭐☆☆ **中** | Azure OpenAI 专属，通用性受限 |
| **API Server 流式注入 tool 事件** | Issue [#3698](https://github.com/HKUDS/nanobot/issues/3698) | ⭐⭐⭐⭐☆ **高** | 15 行改动，Hermes-agent 模式对齐，实现成本低 |

**下一版本信号**：**Agent 规划与目标追踪** 成为明确主题（#3791、#3788、#3460 三 PR 协同），**CLI 开发者体验** 大幅补强（doctor + 会话管理），**安全配对** 从企业需求进入核心架构。

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 场景 | 来源 | 原声摘录 |
|:---|:---|:---|
| **模型兼容性灾难** | #1998, #3754, #3760 | "Coder 类模型必现 400 错误""DeepSeek V4 Flash 自己编造元素周期表""reasoning_content 第一轮就报错" |
| **WebUI 可靠性** | #3790 | "更新最新源码后显示错乱，需刷新页面才可恢复" |
| **Windows 企业部署安全焦虑** | #3780 | "无法启用沙箱，担心误修改或删除工作区外文件""restrictWorkspace 阻止读取外部数据，导致无法分析" |
| **飞书生产环境脆弱性** | #3772, #3787 | "被其他机器人 @ 就出错""长连接推送所有群组事件，没有 handler 就崩溃" |

### 😊 满意与期待

| 场景 | 来源 | 原声摘录 |
|:---|:---|:---|
| **Agent 模式稳定性** | #2880 评论 | "用 nanobot agent 的话就能正常回复"——暗示 Agent 路径比传统消息路径更可靠 |
| **开源扩展性** | #3070 → #3121 | "可以自建模型库，简单任务选性价比高的"——社区已实现 hook 层路由 |
| **CLI 诊断期待** | #3769 | "Inspired by `openclaw doctor`... one of the most useful debugging tools" |

### 💡 深层洞察

- **"Agent 模式可用，普通模式崩"**（#2880）暗示核心架构存在双轨制技术债，传统消息处理管道可能因某次重构被边缘化
- **Windows + 多用户共享** 是未被充分服务的细分市场，安全控制需求与 Linux 容器化假设冲突
- **DeepSeek V4 Flash 的"性价比陷阱"**：用户因成本选择该模型，却因兼容性损失更多调试时间

---

## 8. 待处理积压

### 🔴 需维护者紧急关注

| Issue/PR | 创建 | 最后更新 | 风险 |
|:---|:---|:---|:---|
| [#2880](https://github.com/HKUDS/nanobot/issues/2880) 任意消息报错 | 2026-04-07 | **2026-05-14** | **38 天未解决**，17 评论用户自救无果，stale 标签与活跃更新矛盾，可能为错误标记 |
| [#3460](https://github.com/HKUDS/nanobot/pull/3460) LongTaskTool | 2026-04-26 | 2026-05-14 | **19 天 pending**，与 #3788 目标重叠，需决策合并或拆分 |
| [#3693](https://github.com/HKUDS/nanobot/pull/3693) LLM 并发门控 | 2026-05-08 | 2026-05-14 | **7 天 pending**，本地 LLM 并发崩溃的系统性修复，影响 Ollama/vLLM 用户 |
| [#3762](https://github.com/HKUDS/nanobot/pull/3762) Codex 重试修复 | 2026-05-12 | 2026-05-14 | **3 天 pending**，测试完备但 review 停滞 |

### 🟡 需社区协调

| Issue/PR | 阻塞原因 |
|:---|:---|
| [#3774](https://github.com/HKUDS/nanobot/pull/3774) 配对流程 | **依赖 #3779**（已合并），可推进 rebase |
| [#3784](https://github.com/HKUDS/nanobot/pull/3784) SSL 验证 | #3783 关闭后的优化版，需确认与 #3783 的差异边界 |
| [#3785](https://github.com/HKUDS/nanobot/pull/3785) OpenCode Go 提供商 | 文档 PR #3483 已合并，代码实现待 review |

---

**日报生成时间**：2026-05-15  
**数据来源**：HKUDS/nanobot GitHub 公开活动流  
**分析师备注**：建议维护者优先处理 #2880 的 stale 标签误判，并建立 DeepSeek V4 系列模型的专项兼容性测试矩阵。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-15

---

## 1. 今日速览

Hermes Agent 今日保持**高活跃度**：50 条 Issues 更新（38 活跃/新开，12 关闭）、50 条 PR 更新（36 待合并，14 已合并/关闭），无新版本发布。社区焦点集中在**终端 TUI/CLI 渲染稳定性**（终端 resize 导致的多类视觉故障）和**多平台网关适配**（Telegram、Discord、Feishu 等）。值得注意的是，今日出现 2 个 P1 级安全/稳定性 PR（guardrails 硬停止默认启用、root 目录 chmod 防护），显示项目正加强生产环境安全边界。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR

| PR | 作者 | 核心改进 | 状态 |
|:---|:---|:---|:---|
| [#26000](https://github.com/NousResearch/hermes-agent/pull/26000) | alaamohanad169-ship-it | **子代理 fallback 修复**：`delegate_task` 回退时 deep-copy fallback 链，优先使用 fallback entry 的 `base_url` 而非父代理配置 | ✅ 已关闭 |
| [#24099](https://github.com/NousResearch/hermes-agent/pull/24099) | helix4u | **Docker 技能包修复**：无同步 `skills/` 目录时回退到 bundled skill 文件，解决容器化部署技能加载失败 | ✅ 已关闭 |
| [#25710](https://github.com/NousResearch/hermes-agent/pull/25710) | andkulikov | **Telegram 流式渲染修复**：解决最终消息 MarkdownV2 格式未应用、残留原始 Markdown 的回归问题 | ✅ 已关闭 |

**整体推进评估**：今日合并集中在**代理委托链可靠性**和**容器化部署体验**，属于 v0.13.x 补丁级稳定性迭代。大规模 TUI 重构 PR（#25981 等）仍在评审队列，尚未进入主干。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|
| **#15080** Anthropic OAuth 400 错误（Claude Max 20x 订阅） | 12 | 企业级订阅用户的认证链路断裂，怀疑 OAuth scope 或 token 刷新机制与 Anthropic 最新 API 不兼容 | [链接](https://github.com/NousResearch/hermes-agent/issues/15080) |
| **#11692** 自改进代理的"收据"溯源机制 | 9 | 提出 Hermes 核心差异化特性（自修改代理）的**治理与审计**需求：如何证明哪个技能版本产生了哪个输出 | [链接](https://github.com/NousResearch/hermes-agent/issues/11692) |
| **#15290** NAS Docker 权限被拒绝（UGOS Pro） | 7 | 消费级 NAS 用户的容器化部署痛点，`/opt/data/config.yaml` 的 UID/GID 映射与 UGOS Pro 的权限模型冲突 | [链接](https://github.com/NousResearch/hermes-agent/issues/15290) |

### 背后诉求分析

- **#15080**：付费企业用户的**认证可靠性**成为信任瓶颈，12 条评论无官方回应，存在升级风险
- **#11692**：Tom Farley（知名贡献者）提出的**代理治理框架**需求，触及 Hermes 核心叙事（"唯一可自修改的 AI 助手"），长期可能影响项目定位
- **#15290**：家用 NAS/边缘部署场景增长，Docker 权限模型需适配更多宿主 OS

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue/PR | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| **P1** | [#26015](https://github.com/NousResearch/hermes-agent/pull/26015) | Guardrails `hard_stop_enabled` 默认 `false` → 模型无视警告持续重试至 90 次迭代，单次任务可能消耗过量 token | 🔄 **待合并** |
| **P1** | [#26003](https://github.com/NousResearch/hermes-agent/pull/26003) | `os.chmod(path.parent, 0o700)` 可能作用于 `/` 根目录，破坏系统服务（DNS、Docker、journald） | 🔄 **待合并** |
| **P1** | [#23496](https://github.com/NousResearch/hermes-agent/issues/23496) | 浏览器工具沙箱绕过失效：`AGENT_BROWSER_CHROME_FLAGS` 变量名错误，实际读取 `AGENT_BROWSER_ARGS` | 🔄 **待合并** [#25998](https://github.com/NousResearch/hermes-agent/pull/25998) |
| **P1** | [#25921](https://github.com/NousResearch/hermes-agent/issues/25921) | Gateway 压缩分裂后进入**无限预压缩循环**，父级历史被错误复用 | ❌ 无 Fix PR |
| **P1** | [#26009](https://github.com/NousResearch/hermes-agent/issues/26009) | Discord `clarify` 工具无限挂起，选择型澄清未被拦截 | 🔄 **待合并** [#26008](https://github.com/NousResearch/hermes-agent/pull/26008) |
| **P2** | 终端 Resize 类问题集群（#19280, #17975, #24164, #24944, #22976, #25418, #18449, #17961 等） | 幽灵行、空白分隔线累积、布局撕裂、重渲染整个历史 | 🔄 部分修复中 [#25981](https://github.com/NousResearch/hermes-agent/pull/25981) |
| **P2** | [#25551](https://github.com/NousResearch/hermes-agent/issues/25551) | Windows 全新安装失败，PowerShell 安装脚本兼容性问题 | ❌ 无 Fix PR |
| **P2** | [#25886](https://github.com/NousResearch/hermes-agent/issues/25886) | 飞书/Lark 卡片授权按钮错误 200343 | ❌ 无 Fix PR |

**关键观察**：终端 Resize 问题已形成**集群化技术债**，过去 24 小时关闭 4 个相关 Issue，但新增/活跃仍有多起，显示底层渲染架构（Rich + prompt_toolkit / Ink）的 reflow 机制需系统性重构而非补丁修复。

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 成熟度信号 | 纳入可能性 |
|:---|:---|:---|:---|
| **GitHub Enterprise Copilot 支持** | PR [#6468](https://github.com/NousResearch/hermes-agent/pull/6468)（4 月 9 日创建，今日更新） | 完整实现，环境变量配置，零破坏默认行为 | 🔶 高，企业合规刚需 |
| **语音输入（Web UI STT）** | PR [#26013](https://github.com/NousResearch/hermes-agent/pull/26013) | 复用内置 Whisper 栈，含幻觉过滤、快捷键 | 🔶 高，v0.14 功能级 |
| **Cron 结构化元数据透传** | Issue [#26004](https://github.com/NousResearch/hermes-agent/issues/26004) + PR [#26012](https://github.com/NousResearch/hermes-agent/pull/26012) | 插件适配器需求明确，PR 已提交 | 🔶 高，当日闭环 |
| **每用户代理隔离 + 身份权限** | Issue [#21574](https://github.com/NousResearch/hermes-agent/issues/21574) |  girlfriend 的 prompt injection 攻击引发，安全叙事强 | 🔶 中，架构改动大 |
| **第三方 API 可配置 Headers/User-Agent** | Issue [#12785](https://github.com/NousResearch/hermes-agent/issues/12785) | Cloudflare WAF 拦截场景，企业部署刚需 | 🔶 中，实现简单但需设计 |
| **自改进代理的收据溯源** | Issue [#11692](https://github.com/NousResearch/hermes-agent/issues/11692) | 触及核心差异化，但需长期治理框架设计 | 🔴 低，路线图级 |

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 情绪 |
|:---|:---|:---|
| "女朋友通过 Telegram gateway 做 prompt injection，瞬间成功冒充我" | [#21574](https://github.com/NousResearch/hermes-agent/issues/21574) | 😰 安全焦虑 |
| "Claude Max 20x 订阅，OAuth token 有效，但每条请求 400" | [#15080](https://github.com/NousResearch/hermes-agent/issues/15080) | 😤 付费挫败 |
| "NAS Docker 部署，权限问题折腾几天，config.yaml 无法写入" | [#15290](https://github.com/NousResearch/hermes-agent/issues/15290) | 😫 部署门槛 |
| "终端 resize 后全是幽灵行，被迫重启 session" | 多个 resize Issue | 😤 日常摩擦 |
| "Windows 全新安装直接失败，rm 命令不存在" | [#25073](https://github.com/NousResearch/hermes-agent/issues/25073) | 😤 平台歧视感 |

### 满意点

- 容器化技能回退修复（#24099）获认可，Docker 用户"终于不用手动复制 skills 目录"
- Telegram 流式 Markdown 修复（#25710）响应迅速，当日关闭

---

## 8. 待处理积压

### 需维护者重点关注

| Issue/PR | 天数 | 风险 | 行动建议 |
|:---|:---|:---|:---|
| [#15080](https://github.com/NousResearch/hermes-agent/issues/15080) Anthropic OAuth 400 | 21 天 | 付费用户流失、企业信任危机 | 联系 Anthropic 确认 OAuth scope 变更，或提供诊断工具 |
| [#11692](https://github.com/NousResearch/hermes-agent/issues/11692) 代理收据溯源 | 28 天 | 核心叙事空转、竞品追赶 | 维护者回应路线图意向，或转 Discussion |
| [#6468](https://github.com/NousResearch/hermes-agent/pull/6468) GHE Copilot | 36 天 | 企业市场窗口期 | 评审合并，或明确阻塞原因 |
| [#12785](https://github.com/NousResearch/hermes-agent/issues/12785) 可配置 Headers | 25 天 | 企业部署被 WAF 拦截 | 标记 good-first-issue 或快速实现 |
| 终端 Resize 集群 | 持续 | 用户体验技术债累积 | 指派专项 owner，评估 Ink 3 / 替代渲染方案 |

---

*日报基于 GitHub 公开数据生成，时间范围：2026-05-14 至 2026-05-15 UTC*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-15

## 1. 今日速览

PicoClaw 今日保持**中等活跃度**，社区以**依赖维护自动化**和**Bug 修复积压处理**为主旋律。Dependabot 集中推送了 8 个依赖升级 PR，占今日 PR 总量的 1/3；Issues 侧 7 个活跃 Issue 中有 5 个标记为 `stale`，反映出社区贡献者力量与 issue 增长速度之间存在明显缺口。唯一合并的 PR 是文档同步（V3 配置格式），核心功能代码的合并停滞值得关注。Anthropic API 竞态条件问题（#2721）已关闭但社区质疑修复完整性，稳定性信任度承压。

---

## 2. 版本发布

### Nightly Build: v0.2.8-nightly.20260514.eb065307
- **发布类型**: 自动化夜间构建（⚠️ 可能不稳定）
- **变更范围**: 自 `v0.2.8` 至 `main` 分支的所有提交
- **迁移注意**: 生产环境不建议使用；如需测试最新修复，建议备份会话数据
- **完整变更日志**: https://github.com/sipeed/picoclaw/compare/v0.2.8...main

> 无正式版本发布。夜间构建未包含破坏性变更说明，需用户自行审查 commit 历史。

---

## 3. 项目进展

| PR | 状态 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| #2766 | **已合并** | 文档全面同步至 V3 配置格式（`api_key` → `api_keys`, `channels` → `channel_list`, version 2 → 3），覆盖 26 个文件 | [sipeed/picoclaw#2766](https://github.com/sipeed/picoclaw/pull/2766) |
| #2171 | **已关闭** | 拒绝/完成了"迁移 OpenAI 端点至 Responses API"的增强请求，11 条评论讨论后结案 | [sipeed/picoclaw#2171](https://github.com/sipeed/picoclaw/issues/2171) |
| #2721 | **已关闭** | Anthropic Messages API `tool_use_id` 竞态条件问题，社区报告 v0.2.5 仍可复现，维护者关闭但未获完全认可 | [sipeed/picoclaw#2721](https://github.com/sipeed/picoclaw/issues/2721) |

**整体评估**: 今日代码层面的实质推进有限。文档合并降低了新用户配置错误率，但**零个功能/修复类 PR 合并**，23 个待合并 PR 中多个为社区贡献的 Telegram 体验优化和 Agent 工具反馈改进，合并瓶颈明显。

---

## 4. 社区热点

### 🔥 讨论最活跃

| 排名 | Issue/PR | 评论数 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 1 | **#629** LLM 调用失败未重试 | **14** | 长任务场景下 OpenRouter HTTP 500 导致任务挂死，要求实现指数退避重试机制 | [Issue #629](https://github.com/sipeed/picoclaw/issues/629) |
| 2 | **#2171** 迁移至 OpenAI Responses API | **11** | 跟随 OpenAI 官方推荐迁移 API 形态，讨论后关闭 | [Issue #2171](https://github.com/sipeed/picoclaw/issues/2171) |
| 3 | **#2702** 群聊会话历史缺少发送者归因 | **3** | Discord 等多用户频道中，历史消息无法区分说话人，导致 Agent 角色混乱 | [Issue #2702](https://github.com/sipeed/picoclaw/issues/2702) |

**诉求分析**: 
- **可靠性优先于新功能**: #629 自 2 月悬而未决，直接影响生产环境可用性，用户情绪累积明显
- **多 Agent 架构身份隔离**: #2775 和 #2702 共同指向一个深层架构问题——PicoClaw 的会话/角色隔离模型在复杂场景（子 Agent、群聊）下设计不足

---

## 5. Bug 与稳定性

| 优先级 | Issue | 现象 | 影响范围 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| **🔴 High** | #2721 | Anthropic API `tool_use_id` 400 错误，会话历史竞态条件 | Claude 用户，Telegram 频道 | ❌ 关闭但社区质疑 | [Issue #2721](https://github.com/sipeed/picoclaw/issues/2721) |
| **🟡 Medium** | #629 | LLM HTTP 500 无重试，长任务挂死 | OpenRouter 用户，长任务场景 | ❌ 无 | [Issue #629](https://github.com/sipeed/picoclaw/issues/629) |
| **🟡 Medium** | #2702 | 群聊历史消息丢失发送者信息 | Discord/多用户频道 | ❌ 无 | [Issue #2702](https://github.com/sipeed/picoclaw/issues/2702) |
| **🟡 Medium** | #2798 | Telegram PDF 附件导致流/会话断裂 | Telegram Docker 部署用户 | ❌ 无 | [Issue #2798](https://github.com/sipeed/picoclaw/issues/2798) |
| **🟡 Medium** | #2795 | 对话历史仅显示最后一条用户消息 | Web UI 用户，v0.2.8-64-g4d3070e8 | ❌ 无 | [Issue #2795](https://github.com/sipeed/picoclaw/issues/2795) |
| **🟡 Medium** | #2787 | 会话消息无独立时间戳，全部显示 session.updated | API 消费者/前端开发者 | ❌ 无 | [Issue #2787](https://github.com/sipeed/picoclaw/issues/2787) |
| **🟢 Low** | #2859 | 小米 MIMO 模型多轮对话后参数错误 | 微信+小米 MIMO 用户 | ❌ 无 | [Issue #2859](https://github.com/sipeed/picoclaw/issues/2859) |

**稳定性信号**: 
- **#2721 的信任危机**: 维护者关闭 issue 但报告者明确说明"同一竞态在 v0.2.5 仍可复现"，关闭理由未公开透明，可能损害社区信心
- **会话系统多面受损**: #2702、#2795、#2787 均指向会话存储/展示层的系统性缺陷，建议优先安排专项重构

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 已有 PR | 纳入可能性 | 链接 |
|:---|:---|:---|:---|:---|
| **Telegram 话题组触发器覆盖** | 社区 | #2779（待合并） | ⭐⭐⭐⭐⭐ 高 | [PR #2779](https://github.com/sipeed/picoclaw/pull/2779) |
| **Agent 工作摘要工具反馈** | 社区 | #2778（待合并） | ⭐⭐⭐⭐⭐ 高 | [PR #2778](https://github.com/sipeed/picoclaw/pull/2778) |
| **抑制 Cron 调度任务的反馈消息** | 社区 | #2777（待合并） | ⭐⭐⭐⭐⭐ 高 | [PR #2777](https://github.com/sipeed/picoclaw/pull/2777) |
| **Pico Web 聊天流式传输** | 社区 | #2587（待合并，4/19 起） | ⭐⭐⭐⭐ 中高 | [PR #2587](https://github.com/sipeed/picoclaw/pull/2587) |
| **根 Dockerfile** | 社区 | #2812（待合并，AI 生成） | ⭐⭐⭐ 中 | [PR #2812](https://github.com/sipeed/picoclaw/pull/2812) |
| **子 Agent 独立角色身份** | 社区 | ❌ 无 | ⭐⭐ 低（需架构设计） | [Issue #2775](https://github.com/sipeed/picoclaw/issues/2775) |

**路线图判断**: 
- **bogdanovich** 贡献的 Telegram 体验优化四连 PR（#2776-#2779）形成完整功能闭环，是近期最成熟的合并候选
- **#2587** 流式传输已等待近一个月，涉及前后端协同，合并可能伴随回归风险测试
- **子 Agent 角色隔离**（#2775）无 PR 且触及核心架构，短期内难以解决

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 痛点 | 典型场景 | 来源 Issue |
|:---|:---|:---|
| **"任务跑一半就挂死"** | 长任务+OpenRouter，HTTP 500 后无重试，必须人工重启 | #629 |
| **"子 Agent 全是克隆人"** | 多 Agent 协作时，Planner/Builder 都以为自己是根 Agent，输出混乱 | #2775 |
| **"历史记录像失忆"** | 切换对话后只能看到最后一条消息，前面全丢；或群聊分不清谁说了什么 | #2795, #2702 |
| **"时间全是假的"** | 前端展示所有消息同一个时间戳，用户体验粗糙 | #2787 |
| **"PDF 一传就崩"** | Telegram 发 PDF 后流断裂，同配置 OpenClaw 正常，PicoClaw 特有问题 | #2798 |

### 😐 中性观察
- 用户开始**跨项目对比**（#2798 明确对比 OpenClaw），竞争压力显现
- Docker Compose 部署成为主流，但**根目录缺少官方 Dockerfile** 导致上手摩擦（#2812 动机）

---

## 8. 待处理积压

### ⚠️ 长期未响应的高价值 PR（建议优先审阅）

| PR | 等待天数 | 价值 | 风险 | 链接 |
|:---|:---:|:---|:---|:---|
| **#2587** Pico Web 流式传输 | **26 天** | 核心 UX 提升，现代聊天标配 | 前后端协同，需充分测试 | [PR #2587](https://github.com/sipeed/picoclaw/pull/2587) |
| **#2551** 频道标识标准化 | **29 天** | 架构债务清理，支持多实例 | 触及消息总线，回归面大 | [PR #2551](https://github.com/sipeed/picoclaw/pull/2551) |
| **#2836** PowerShell 编码绕过安全修复 | **5 天** | 安全漏洞，IEX 注入防护 | 需安全专家审阅 | [PR #2836](https://github.com/sipeed/picoclaw/pull/2836) |

### ⚠️ Stale Issue 预警

| Issue | 最后更新 | 危险信号 | 链接 |
|:---|:---|:---|:---|
| #629 无重试机制 | **84 天** 无实质进展 | 14 评论仍 open，生产阻塞级 | [Issue #629](https://github.com/sipeed/picoclaw/issues/629) |
| #2775 子 Agent 角色混淆 | 9 天 | 架构级问题，无维护者回应 | [Issue #2775](https://github.com/sipeed/picoclaw/issues/2775) |

---

**健康度评分**: 🟡 **C+**  
- ✅ 依赖维护自动化成熟  
- ⚠️ 核心 Bug 修复响应滞后，社区 PR 合并瓶颈明显  
- 🔴 稳定性 issue 关闭透明度不足，存在信任损耗风险

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-15

> **项目**: [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw) | **日期**: 2026-05-15 | **数据周期**: 过去24小时

---

## 1. 今日速览

NanoClaw 今日呈现**高强度开发态势**，22 个 PR 更新（13 条已合并/关闭，9 条待审），活跃度显著高于平日均值。社区贡献者 `fresheldidea` 单日密集输出 10 个已合并 PR，主导了技能生态（skills）与 MCP 集成的大规模扩张。核心架构层面出现两条重要分支：一是 CLI 模式替代 Agent SDK 的配额优化路径（[#2470](https://github.com/nanocoai/nanoclaw/pull/2470)），二是多 AI 编码 CLI 适配器框架（[#2474](https://github.com/nanocoai/nanoclaw/pull/2474)），显示项目正从"Claude 绑定"向"多提供商中立平台"演进。安全加固方面，附件转发漏洞修复（[#2468](https://github.com/nanocoai/nanoclaw/pull/2468)）已进入评审。唯一活跃 Issue 为低优先级容器竞态 Bug（[#2466](https://github.com/nanocoai/nanoclaw/issues/2466)），整体稳定性风险可控。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭 PR（13 条）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2455](https://github.com/nanocoai/nanoclaw/pull/2455) | fresholdidea | **自托管审计栈**：Lighthouse + axe + linkinator 替代 squirrelscan | 解除对外部 Cloudflare 防护服务的依赖，容器环境审计能力完全自主可控 |
| [#2452](https://github.com/nanocoai/nanoclaw/pull/2452) | fresholdidea | Lighthouse 13.3.0 容器化集成 | 复用现有 Chromium，构建时间 ~47s，零额外系统依赖 |
| [#2454](https://github.com/nanocoai/nanoclaw/pull/2454) | fresholdidea | OneCLI vault 密钥参考文档 | 运营安全基线文档化，20 行配置表明确消费方与格式 |
| [#2453](https://github.com/nanocoai/nanoclaw/pull/2453) | fresholdidea | `copy-grader` 技能本地化 | 营销文案评分能力脱离上游 squirrelscan，可 per-install 定制 |
| [#2451](https://github.com/nanocoai/nanoclaw/pull/2451) | fresholdidea | `audit-website` 技能本地化 | 同上，外部技能目录→本地持久化 |
| [#2450](https://github.com/nanocoai/nanoclaw/pull/2450) | fresholdidea | **LinkedIn Ads 复合技能**（4 子命令） | 广告运营场景闭环：性能报表、创意审计、受众分析、预算建议 |
| [#2449](https://github.com/nanocoai/nanoclaw/pull/2449) | fresholdidea | **LinkedIn 社区管理技能**（agent-browser 驱动） | 有机运营自动化：发帖、回评、互动、指标拉取、连接请求分类 |
| [#2448](https://github.com/nanocoai/nanoclaw/pull/2448) | fresholdidea | **社交聆听复合技能** | 6 源并行搜索（Serper/Reddit/Brave/RSS/WebSearch）→ 去重 → 固定格式报告 |
| [#2447](https://github.com/nanocoai/nanoclaw/pull/2447) | fresholdidea | Reddit MCP + `/reddit-research` 技能 | 零认证公开 JSON 访问，4 大研究剧本：ICP 语言挖掘、竞品痛点、社区发现、验证 |
| [#2446](https://github.com/nanocoai/nanoclaw/pull/2446) | fresholdidea | Firecrawl MCP + `/firecrawl` 技能 | 结构化提取与爬取能力，明确与 Parallel/Serper/agent-browser 的分工边界 |
| [#2445](https://github.com/nanocoai/nanoclaw/pull/2445) | fresholdidea | Serper MCP 环境透传 + `/serper-search` 技能 | 补齐 SERP 原始数据通道，`collectMcpEnvPassthrough` 机制可复用 |
| [#2473](https://github.com/nanocoai/nanoclaw/pull/2473) | Koshkoshinsk | 修正 `internal` 标签描述中的误导性条款 | 系统提示一致性修复，消除"标签外内容视为 scratchpad"的矛盾表述 |

**整体进展评估**：今日合并量占近 24h 更新量的 59%，技能生态从"单一 Claude 通道"扩展为**多平台（LinkedIn/Reddit/Web）、多工具（Lighthouse/axe/Firecrawl/Serper）、多场景（广告/社区/聆听/审计）**的完整矩阵。基础设施层面完成外部依赖内化（squirrelscan → 自托管栈），降低供应链风险。

---

## 4. 社区热点

### 讨论最活跃议题

| 排名 | 议题 | 互动指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 1 | [#2466](https://github.com/nanocoai/nanoclaw/issues/2466) 容器竞态 Bug | 1 评论，0 👍 | **架构级可靠性诉求**：`wakeContainer` 与 host sweep 并发时重复 spawn，反映分布式状态同步机制缺乏原子性保证。评论数为 1 但 Issue 刚创建，预计后续会有复现讨论 |
| 2 | [#2470](https://github.com/nanocoai/nanoclaw/pull/2470) CLI 模式替代 Agent SDK | 待审，0 评论 | **成本与配额优化诉求**：企业用户受限于 Agent SDK 的 `x-client-app` 配额计费，寻求交互式配额路径降低运营成本 |
| 3 | [#2474](https://github.com/nanocoai/nanoclaw/pull/2474) + [#2475](https://github.com/nanocoai/nanoclaw/pull/2475) 多 CLI 适配器 + Codex 对等 | 待审，各 0 评论 | **供应商锁定解除诉求**：Claude Code 与 Codex 的 setup/persona/skill 对等化，切换成为纯配置变更 |

**热点趋势判断**：社区正从"功能丰富度"竞争转向"成本效率 + 供应商中立性"竞争。CLI 模式 PR（[#2470](https://github.com/nanocoai/nanoclaw/pull/2470)）若合并，可能触发计费模式文档的配套更新需求。

---

## 5. Bug 与稳定性

| 严重程度 | 议题 | 状态 | 详情 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔶 **Low** | [#2466](https://github.com/nanocoai/nanoclaw/issues/2466) | **OPEN** | `wakeContainer` 脚本与 host sweep 并发导致重复容器 spawn，同一 brief 被独立处理两次 | ❌ 无 |
| 🔷 **Security** | [#2468](https://github.com/nanocoai/nanoclaw/pull/2468) | **待审** | Agent 间附件转发时，host 跟随容器控制的符号链接，可能导致目录遍历/未授权文件访问 | ✅ [#2468](https://github.com/nanocoai/nanoclaw/pull/2468) 自身（待合并） |

**风险评估**：#2466 为 hardening 级别的竞态条件，实际影响取决于 brief 处理的幂等性（当前未明确说明）。建议维护者评估是否需要在 `wakeContainer` 加分布式锁或 spawn 前状态校验。#2468 安全修复应尽快进入评审，涉及容器间隔离边界。

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求描述 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#2475](https://github.com/nanocoai/nanoclaw/pull/2475) | Codex agents 获得与 Claude 对等的 persona + skill catalog | **高** | PR 已开，parity 是明确目标，技术路径清晰 |
| [#2474](https://github.com/nanocoai/nanoclaw/pull/2474) | Setup 流程支持 AI 编码 CLI 选择器（Claude Code/Codex/未来 Aider/Gemini CLI） | **高** | 框架化设计（registry + adapter），扩展性已预留 |
| [#2470](https://github.com/nanocoai/nanoclaw/pull/2470) | CLI 模式替代 Agent SDK，走交互式配额 | **中-高** | 40 单元测试全过，但涉及计费合规性，需产品决策 |
| [#2476](https://github.com/nanocoai/nanoclaw/pull/2476) | `restart` 命令不依赖 NanoClaw 自身 | **待评估** | 标题暗示运维解耦需求，详情未完整展示 |
| [#2472](https://github.com/nanocoai/nanoclaw/pull/2472) + [#2471](https://github.com/nanocoai/nanoclaw/pull/2471) | Slack per-thread session 的 threadId 重写 | **高** | 平台适配层改进，无用户面变更，风险低 |

**路线图推断**：下一版本（假设 v2.x）可能聚焦 **"Provider Neutrality"** 主题——多 LLM 后端对等、多 AI CLI 适配、配额模式可选。

---

## 7. 用户反馈摘要

> 基于 Issue #2466 的复现报告与 PR 描述提炼

| 维度 | 反馈内容 |
|:---|:---|
| **痛点** | 容器编排的并发控制不足：脚本触发与系统 sweep 的时序冲突导致资源浪费（双容器处理同一任务） |
| **场景** | 自动化脚本 (`inject-gamma-brief.ts`) 与常驻 host service 的协同部署模式 |
| **不满** | 缺乏 spawn 唯一性保证；10s 间隔暗示无去重/锁机制；brief 重复处理可能产生副作用（如重复计费、状态冲突） |
| **期望** | `wakeContainer` 需具备幂等性或原子性检查，或提供"等待现有容器"而非"强制新建"的选项 |

---

## 8. 待处理积压

| 积压项 | 创建时间 | 当前状态 | 风险提示 |
|:---|:---|:---|:---|
| [#2466](https://github.com/nanocoai/nanoclaw/issues/2466) | 2026-05-14 | 新开，1 评论 | **短期关注**：竞态条件虽标 Low，但若 brief 处理非幂等，可能升级为数据一致性问题。建议 48h 内评估是否需要 hotfix |
| 9 条待合并 PR | 2026-05-14 | 待审 | **评审带宽风险**：单日 9 条 OPEN PR 堆积，其中 3 条为核心架构变更（CLI 模式、多 CLI 适配、安全修复），建议优先评审 #2468（安全）、#2470（计费模式）、#2474/#2475（供应商中立） |

---

## 附录：今日 PR 状态总览

```
已合并/关闭: ████████████████░░░░░ 13/22 (59%)
待合并 OPEN: ████████░░░░░░░░░░░░░  9/22 (41%)
  ├─ 架构/核心: #2468 #2470 #2471 #2474 #2475 #2476 (6)
  ├─ 平台适配: #2472 (1)
  └─ 其他: (2)
```

---

*日报生成依据：GitHub API 公开数据 | 分析视角：AI 智能体平台架构与开源治理*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-15

## 1. 今日速览

IronClaw 今日处于**高强度重构冲刺期**，过去24小时产生 **50 条 Issues 更新**（48 活跃/新开，仅 2 关闭）和 **50 条 PR 更新**（44 待合并，6 已合并/关闭），活跃度极高但合并率偏低（12%）。核心焦点集中在 **"Reborn" 架构落地**——这是项目历史上最大规模的重构，涉及 Agent 循环框架、Host 内核、事件流、WebUI Beta 等七大模块。值得注意的是，今日新开的 **WebUI Beta 专项追踪器 #3607** 及相关 4 个子任务表明团队正将产品化优先级提升至 P0，但大量 PR 仍处于 Draft/待合并状态，技术债务累积风险需关注。

---

## 2. 版本发布

**无新版本发布。** 项目当前处于 `reborn-integration` 分支密集开发期，尚未达到可发布状态。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 状态 | 贡献者 | 进展说明 |
|:---|:---|:---|:---|
| [#3550](https://github.com/nearai/ironclaw/pull/3550) `arch(ws-0)` | **CLOSED** | henrypark133 | Agent 循环框架**基础层**落地：状态管理、检查点、BoundedRing、CapabilityCallSignature、NoProgressDetected 等核心抽象。为后续 9 个策略 trait 分支奠定根基。 |
| [#3282](https://github.com/nearai/ironclaw/issues/3282) | **CLOSED** | serrrfirat | 浏览器聊天路由迁移至 ProductAdapter 路径完成，WebChat v2 的 Reborn 化取得阶段性成果。 |

### 待合并的关键 PR 群（Agent 循环框架工程）

| PR | 规模 | 说明 |
|:---|:---|:---|
| [#3551](https://github.com/nearai/ironclaw/pull/3551)-[#3553](https://github.com/nearai/ironclaw/pull/3553) `ws-1/2/3` | M/XL/XL | 三层策略 trait：α（上下文/能力/模型）、β（批处理/门控/恢复）、γ（停止/排空/预算） |
| [#3643](https://github.com/nearai/ironclaw/pull/3643) `ws-3.5` | L | 新增**循环家族注册表**，profile 解析为家族而非暴露单个策略槽 |
| [#3554](https://github.com/nearai/ironclaw/pull/3554) `level1-merged` | XL | 整合 ws-1~ws-3.5 的集成分支 |
| [#3555](https://github.com/nearai/ironclaw/pull/3555)-[#3556](https://github.com/nearai/ironclaw/pull/3556) `ws-4/5` | XL/XL | Planner 外观层 + 全部 9 个 trait 的默认策略实现 |
| [#3557](https://github.com/nearai/ironclaw/pull/3557) `level2-merged` | XL | 整合 ws-4+ws-5，为规范执行器提供基础 |
| [#3596](https://github.com/nearai/ironclaw/pull/3596) `ws-6a` | XL | **规范循环执行器**：将策略/家族/规划器模型转化为可复用的循环 tick |

**整体评估**：Agent 循环框架的"理论设计→代码实现"完成了约 **60-70%**，但大量集成分支待合并，存在**集成风险**。

---

## 4. 社区热点

### 最高讨论热度

| 排名 | Issue/PR | 评论数 | 核心诉求 |
|:---|:---|:---|:---|
| 🔥1 | [#2987](https://github.com/nearai/ironclaw/issues/2987) **[EPIC] Reborn 架构落地策略与分组 PR 计划** | **44** | 整个 Reborn 重构的**总协调器**。今日更新显示 PR0 合约冻结已完成，分组实现 PR 已完成至"低级别合并"，但"最终集成 PR → staging"仍待推进。社区核心关切：**如何避免一个巨大的堆叠 PR 压垮审阅者**。 |
| 🔥2 | [#3022](https://github.com/nearai/ironclaw/issues/3022) **Reborn 切换阻塞项：事件基质集成测试** | 9 | 用户可见 Reborn 切换前的**硬性质量门槛**——需证明所有 V1 事件生产者输出"已编辑、有作用域、可重放"的事件。这是生产就绪的**关键路径阻塞项**。 |
| 🔥3 | [#3087](https://github.com/nearai/ironclaw/issues/3087) **Compose ironclaw_host_runtime services** | 4 | HostRuntime 服务编排的具体技术方案讨论，涉及 CapabilityHost、ExtensionRegistry、CapabilityDispatcher 等组件的组装方式。 |

### 背后诉求分析

- **#2987 的 44 条评论** 反映了大型重构的**组织协调复杂性**：贡献者需要清晰的"何时合并什么"信号，审阅者需要可管理的 review 单元，而当前"低级别合并已完成"但"最终 staging PR"未到的状态造成了**预期管理压力**。
- **#3022 的高关注度** 表明社区对**质量门禁**的共识——不愿为赶进度牺牲事件系统的可观测性和审计能力。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0-生产影响** | [#2902](https://github.com/nearai/ironclaw/issues/2902) | OPEN | **NEAR Foundation 实例的 Telegram 完全失效**（附截图）| **无** |
| 🟡 **P1-架构风险** | [#3022](https://github.com/nearai/ironclaw/issues/3022) | OPEN | 事件基质集成测试缺失 = Reborn 切换**硬性阻塞** | 待 #2987 分组 PR |
| 🟡 **P1-安全边界** | [#3576](https://github.com/nearai/ironclaw/issues/3576) | OPEN | 需从 `pi_agent_rust` 提取运行时/扩展/安全模式，标记为 **risk: high** | 无 |
| 🟢 **P2-技术债务** | [#3419](https://github.com/nearai/ironclaw/issues/3419) | OPEN | 存储层碎片化：多个 domain-local SQL 适配器（libsql/postgres/db.rs）跨 crate 重复 | 无 |

**关键风险**：[#2902](https://github.com/nearai/ironclaw/issues/2902) Telegram 生产故障已持续 **22 天**（2026-04-23 创建），无响应无修复，直接影响 NEAR Foundation 运营，**严重损害项目可靠性声誉**。

---

## 6. 功能请求与路线图信号

| 功能方向 | 代表 Issue | 成熟度 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| **Configuration-as-Code** | [#3036](https://github.com/nearai/ironclaw/issues/3036) | 概念验证 | ⭐⭐⭐ 高 — ilblackdragon 创建，有 👍，解决多类操作员的声明式配置痛点 |
| **运行时预设与策略** | [#3045](https://github.com/nearai/ironclaw/issues/3045) | 设计完成 | ⭐⭐⭐⭐ 极高 — 直接关联 Reborn 核心体验，serrrfirat 主导 |
| **循环钩子框架** | [#3523](https://github.com/nearai/ironclaw/issues/3523) / [#3524](https://github.com/nearai/ironclaw/issues/3524) | PR 已开 | ⭐⭐⭐⭐⭐ 确定 — zmanian 已提交 6 个 successor PR（#3633-#3640），覆盖持久化计数器、WASM 执行路径、事件触发钩子等 |
| **WASM 组件化 ProductAdapter** | [#3572](https://github.com/nearai/ironclaw/issues/3572) | 设计阶段 | ⭐⭐⭐ 高 — 架构方向明确，Telegram v2 的边界模糊问题需根治 |
| **通道迁移（Slack/Telegram/WeChat）** | [#3577](https://github.com/nearai/ironclaw/issues/3577)-[#3582](https://github.com/nearai/ironclaw/issues/3582) | 刚启动 | ⭐⭐ 中 — 依赖 #3572 的 WASM 组件化决策 |

**信号**：Hook 框架是今日**最密集的 PR 爆发点**（zmanian 单日提交 6 个 Draft PR），表明该功能已进入**工程化快车道**。

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issue 评论与描述）

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| [#3036](https://github.com/nearai/ironclaw/issues/3036) | "hand-edit a mix of `.env`, workspace docs, settings JSON, extension installs, and runtime flags — **with no schema, no diff, no audit trail**" | 运维团队需要声明式配置，当前"拼凑式"配置导致**无法溯源、无法审计** |
| [#3045](https://github.com/nearai/ironclaw/issues/3045) | 操作员需"hand-wiring low-level grants, mounts, process backends, network policy..." | 用户想要"安全模式"或"性能模式"的一键切换，而非理解 20+ 个底层标志 |
| [#2902](https://github.com/nearai/ironclaw/issues/2902) | Telegram 完全不可用，仅附截图无错误详情 | **生产可靠性危机**，用户甚至无法获得调试支持 |
| [#3419](https://github.com/nearai/ironclaw/issues/3419) | "no shared storage substrate, no shared secret-store boundary" | 跨 crate 的存储重复导致**运维复杂度和数据一致性风险** |

### 满意度信号
- **#3036 获 1 👍**，表明 CaC 需求有社区共鸣
- Reborn 架构的模块化设计（M1-M5 划分）获得**结构化认可**，但执行速度受质疑

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后更新 | 阻塞天数 | 风险说明 |
|:---|:---|:---|:---|:---|
| [#2902](https://github.com/nearai/ironclaw/issues/2902) Telegram 生产故障 | 2026-04-23 | 2026-05-14 | **22 天** | 🔴 **最高优先级** — 生产实例完全不可用，零维护者响应，严重损害信任 |
| [#2987](https://github.com/nearai/ironclaw/issues/2987) Reborn EPIC | 2026-04-27 | 2026-05-14 | 18 天 | 协调成本持续累积，需明确"最终 staging PR"时间线 |
| [#3118](https://github.com/nearai/ironclaw/issues/3118) 原生 Reborn 内存存储 | 2026-04-30 | 2026-05-14 | 15 天 | 废弃旧适配器方向，新方向待工程资源 |
| [#3278](https://github.com/nearai/ironclaw/issues/3278) MissionService 集成 | 2026-05-06 | 2026-05-14 | 9 天 | TurnCoordinator 核心依赖，阻塞产品化路径 |

**维护者行动建议**：
1. **立即响应 #2902**：分配专人诊断 NEAR Foundation Telegram 故障，即使暂无修复也需给出时间表
2. **#2987 需要发布"Reborn 切换倒计时"**：当前"低级别合并完成"的状态已维持多日，社区需要明确的 staging → production 里程碑
3. **审视 PR 合并瓶颈**：44/50 PR 待合并，建议设立**每日合并目标**或拆分审阅责任矩阵

---

*日报基于 GitHub 公开数据生成，反映 2026-05-14 至 2026-05-15 期间的项目活动。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-15

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **报告日期**: 2026-05-15（数据覆盖：2026-05-14 24小时周期）

---

## 1. 今日速览

LobsterAI 今日呈现**高强度交付状态**：单日合并/关闭 **27 条 PR**，发布 **1 个正式版本**（2026.5.14），零 Issues 活动。开发节奏显示团队处于集中发版窗口期，核心工作围绕 **OpenClaw 架构升级、Artifacts 预览引擎重构、插件系统完善**三大主线展开。值得注意的是，今日关闭的 PR 中包含 8 条积压超 50 天的 "stale" PR，表明团队正在进行债务清理。整体健康度：**活跃且聚焦，但需关注技术债务清理质量**。

---

## 2. 版本发布

### 🚀 [LobsterAI 2026.5.14](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.14) | 2026-05-14

| 维度 | 详情 |
|:---|:---|
| **发布类型** | 功能版本（非补丁） |
| **核心变更** | 三大功能模块 + 架构迁移 |

**What's Changed:**

| PR | 作者 | 变更内容 | 影响面 |
|:---|:---|:---|:---|
| [#1969](https://github.com/netease-youdao/LobsterAI/pull/1969) | @liuzhq1986 | **feat(cowork)**: OpenClaw 上下文压缩处理优化 | 长会话场景 Token 消耗降低 |
| [#1963](https://github.com/netease-youdao/LobsterAI/pull/1963) | @btc69m979y-dotcom | **feat(plugins)**: 插件管理高级配置 | 第三方插件生态扩展能力 |
| *（更多变更见下方 PR 详情）* | — | 上下文使用指示器、Artifacts 增强、多区域修复 | — |

**⚠️ 迁移注意事项：**
- **MCP 架构变更**（[#1980](https://github.com/netease-youdao/LobsterAI/pull/1980)）：自建 `mcp-bridge` 中转层已移除，迁移至 OpenClaw 原生 MCP Client。用户需将原有 `mcp-bridge` 配置转换为 `mcp.servers` 字段格式，支持 `stdio` / `sse` / `streamable-http` 三种传输类型。
- **插件目录迁移**（[#1979](https://github.com/netease-youdao/LobsterAI/pull/1979)）：用户安装的第三方插件从应用安装目录迁移至 `userData` 目录，**升级前需手动备份** `vendor/openclaw-runtime/current/third-party-extensions/` 或 `resources/cfmind/third-party-extensions/` 下内容，否则将被覆盖丢失。
- **心跳配置调整**（[#1978](https://github.com/netease-youdao/LobsterAI/pull/1978)）：默认心跳间隔从 30 分钟延长至 1 小时，配合 `isolatedSession: true` + `lightContext: true`，可能影响依赖高频心跳的实时协作场景。

---

## 3. 项目进展

### 🔥 今日核心交付（按技术域分类）

#### **OpenClaw 架构升级**
| PR | 状态 | 关键进展 |
|:---|:---|:---|
| [#1980](https://github.com/netease-youdao/LobsterAI/pull/1980) | ✅ 已合并 | **MCP 原生迁移完成**：移除自建 mcp-bridge，直接对接 OpenClaw 原生 Client，减少一层故障点与维护负担 |
| [#1978](https://github.com/netease-youdao/LobsterAI/pull/1978) | ✅ 已合并 | **心跳 Token 优化**：实测单会话每小时节省 ~3k tokens，长会话场景成本显著降低 |
| [#1969](https://github.com/netease-youdao/LobsterAI/pull/1969) | ✅ 已合并（发版） | 上下文压缩处理增强，支持实时刷新指示器 |

#### **Artifacts 预览引擎重构**
| PR | 状态 | 关键进展 |
|:---|:---|:---|
| [#1983](https://github.com/netease-youdao/LobsterAI/pull/1983) | ✅ 已合并 | **Excel/PPTX/HTML 全格式升级**：本地 HTTP 服务器预览、深色模式修复、iframe 生命周期管理 |
| [#1977](https://github.com/netease-youdao/LobsterAI/pull/1977) | ✅ 已合并 | **HTML 预览安全架构**：127.0.0.1 本地服务器 + session/token 鉴权 + 路径遍历防护，替代不安全的内联 srcDoc 方案 |
| [#1982](https://github.com/netease-youdao/LobsterAI/pull/1982) | ✅ 已合并 | **Artifact 检测精度修复**：消除 `ls` 等工具输出路径误识别，修复 macOS 路径空格截断（`Application Support`） |

#### **插件系统完善**
| PR | 状态 | 关键进展 |
|:---|:---|:---|
| [#1963](https://github.com/netease-youdao/LobsterAI/pull/1963) | ✅ 已合并（发版） | **高级插件管理配置** |
| [#1979](https://github.com/netease-youdao/LobsterAI/pull/1979) | ✅ 已合并 | **插件持久化**：目录迁移至 userData，解决升级丢插件痛点；UI 图标与位置优化 |
| [#1981](https://github.com/netease-youdao/LobsterAI/pull/1981) | ✅ 已合并 | **macOS 插件安装修复**：解决 Dock/Launchpad 启动时 PATH 缺失导致的 `npm ENOENT` |

#### **稳定性与兼容性**
| PR | 状态 | 关键进展 |
|:---|:---|:---|
| [#1973](https://github.com/netease-youdao/LobsterAI/pull/1973) | ✅ 已合并 | **中文 Windows 编码修复**：PowerShell GBK 输出导致应用名乱码（`Microsoft Word �j�`），强制 UTF-8 |
| [#1974](https://github.com/netease-youdao/LobsterAI/pull/1974) | ✅ 已合并 | **IM 通道工作目录修复** |
| [#1976](https://github.com/netease-youdao/LobsterAI/pull/1976), [#1975](https://github.com/netease-youdao/LobsterAI/pull/1975) | ✅ 已合并 | UI 细节修复 |

#### **技术债务清理（Stale PR 批量关闭）**
| PR | 原创建日期 | 积压天数 | 内容 | 关闭状态 |
|:---|:---|:---|:---|:---|
| [#841](https://github.com/netease-youdao/LobsterAI/pull/841) | 2026-03-25 | ~50d | 运行时轮询防重叠 | 已合并 |
| [#842](https://github.com/netease-youdao/LobsterAI/pull/842) | 2026-03-25 | ~50d | 安全环境扫描 + 权限管理 | 已合并 |
| [#847](https://github.com/netease-youdao/LobsterAI/pull/847) | 2026-03-25 | ~50d | Markdown 单波浪线保留 | 已合并 |
| [#848](https://github.com/netease-youdao/LobsterAI/pull/848) | 2026-03-25 | ~50d | Cowork 配置批量事务写入 | 已合并 |
| [#852](https://github.com/netease-youdao/LobsterAI/pull/852) | 2026-03-25 | ~50d | 窗口销毁后 event.sender 崩溃修复 | 已合并 |
| [#853](https://github.com/netease-youdao/LobsterAI/pull/853) | 2026-03-25 | ~50d | Markdown/JSON/JSONL 会话导出 | 已合并 |
| [#860](https://github.com/netease-youdao/LobsterAI/pull/860) | 2026-03-25 | ~50d | JSON.parse 错误处理增强 | 已合并 |

**整体推进评估**：今日交付相当于一次**中型版本当量**，覆盖架构层（MCP）、引擎层（Artifacts）、平台层（macOS/Windows 兼容性）、生态层（插件）四个维度，项目技术栈向 OpenClaw 原生深度整合迈出关键一步。

---

## 4. 社区热点

> ⚠️ **数据说明**：今日所有 PR 评论数均为 `undefined`（数据未采集或零评论），👍 反应均为 0。社区讨论活跃度**极低**，呈现典型的"内部团队集中开发、外部参与薄弱"特征。

### 唯一开放 PR（待处理）
| PR | 状态 | 风险 |
|:---|:---|:---|
| [#1765](https://github.com/netease-youdao/LobsterAI/pull/1765) | ⏳ **OPEN** 待合并 | Dependabot 依赖升级：`@headlessui/react` 1.7.19 → 2.2.10（**跨 major 版本**）|
| | | 创建于 2026-04-20，已积压 **24 天**，可能因 major 版本破坏性变更需人工验证 |

**诉求分析**：Headless UI v2 引入 React 18 依赖及全新组件 API，团队可能因兼容性测试未完成而搁置。建议优先处理，避免依赖安全漏洞。

---

## 5. Bug 与稳定性

| 严重程度 | PR | 问题描述 | 修复状态 | 影响平台 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#852](https://github.com/netease-youdao/LobsterAI/pull/852) | 窗口关闭后异步 IPC 调用导致**主进程崩溃**（`event.sender` 销毁后访问） | ✅ 已合并 | All |
| 🔴 **高** | [#1981](https://github.com/netease-youdao/LobsterAI/pull/1981) | macOS 插件安装**完全不可用**（PATH 缺失导致 npm ENOENT） | ✅ 已合并 | macOS |
| 🟡 **中** | [#1982](https://github.com/netease-youdao/LobsterAI/pull/1982) | Artifact 误识别 + 路径空格截断（macOS `Application Support`） | ✅ 已合并 | macOS |
| 🟡 **中** | [#1973](https://github.com/netease-youdao/LobsterAI/pull/1973) | 中文 Windows 应用名**乱码**（GBK/UTF-8 编码冲突） | ✅ 已合并 | Windows |
| 🟡 **中** | [#860](https://github.com/netease-youdao/LobsterAI/pull/860) | SSE 流式 JSON.parse 异常导致**整个流中断/应用崩溃** | ✅ 已合并 | All |
| 🟢 **低** | [#1974](https://github.com/netease-youdao/LobsterAI/pull/1974) | IM 通道工作目录不正确 | ✅ 已合并 | All |
| 🟢 **低** | [#1976](https://github.com/netease-youdao/LobsterAI/pull/1976), [#1975](https://github.com/netease-youdao/LobsterAI/pull/1975) | UI 细节问题 | ✅ 已合并 | All |

**稳定性趋势**：今日修复的 2 个高严重问题（主进程崩溃、插件安装完全失效）均为**生产环境阻断性缺陷**，修复及时性良好。JSON.parse 错误处理（[#860](https://github.com/netease-youdao/LobsterAI/pull/860)）属于防御性编程增强，降低极端场景下的崩溃概率。

---

## 6. 功能请求与路线图信号

> 今日零 Issues，无新增功能请求。基于已合并 PR 推断路线图方向：

| 信号来源 | 推断方向 | 纳入下一版本概率 |
|:---|:---|:---|
| [#1980](https://github.com/netease-youdao/LobsterAI/pull/1980) MCP 原生迁移 | OpenClaw 深度整合，逐步废弃自建中间层 | 🔒 **已发布** |
| [#1963](https://github.com/netease-youdao/LobsterAI/pull/1963) + [#1979](https://github.com/netease-youdao/LobsterAI/pull/1979) 插件管理 | **第三方插件市场/生态**即将开放 | 🔒 **已发布** |
| [#842](https://github.com/netease-youdao/LobsterAI/pull/842) 安全环境扫描 | 企业级安全合规（权限管控、敏感操作审计） | ⭐⭐⭐⭐☆ 高概率 |
| [#853](https://github.com/netease-youdao/LobsterAI/pull/853) 多格式会话导出 | 数据可移植性、企业集成（JSONL 便于 NLP 二次处理） | ⭐⭐⭐⭐☆ 高概率 |
| [#1977](https://github.com/netease-youdao/LobsterAI/pull/1977) + [#1983](https://github.com/netease-youdao/LobsterAI/pull/1983) Artifacts 本地服务器 | **预览引擎架构统一**（HTTP 服务器模式向更多格式扩展） | ⭐⭐⭐☆☆ 中概率 |

---

## 7. 用户反馈摘要

> ⚠️ **数据局限**：今日零 Issues 活动，无直接用户反馈。基于 PR 描述反推历史痛点：

| 痛点领域 | 具体表现 | 修复/缓解情况 |
|:---|:---|:---|
| **插件数据持久化** | "升级后插件全部消失，需重新安装" | ✅ [#1979](https://github.com/netease-youdao/LobsterAI/pull/1979) 目录迁移至 userData |
| **macOS 启动兼容性** | "从 Dock 启动无法安装插件，终端启动正常" | ✅ [#1981](https://github.com/netease-youdao/LobsterAI/pull/1981) 内置 npm-cli.js 兜底 |
| **中文系统兼容性** | "打开方式菜单显示乱码，无法识别应用" | ✅ [#1973](https://github.com/netease-youdao/LobsterAI/pull/1973) PowerShell UTF-8 强制 |
| **长会话成本** | "长时间挂机 Token 消耗过高" | ✅ [#1978](https://github.com/netease-youdao/LobsterAI/pull/1978) 心跳优化，每小时省 ~3k tokens |
| **Artifact 预览稳定性** | "Excel 切换文件崩溃、HTML 外部资源 403" | ✅ [#1983](https://github.com/netease-youdao/LobsterAI/pull/1983) 架构重构 |

**满意度推断**：今日发版集中解决了一批高频痛点，尤其是 macOS 用户和中文 Windows 用户的体验将有显著提升。

---

## 8. 待处理积压

| 项目 | 类型 | 状态 | 风险 | 建议行动 |
|:---|:---|:---|:---|:---|
| [#1765](https://github.com/netease-youdao/LobsterAI/pull/1765) `@headlessui/react` major 升级 | PR | ⏳ OPEN 24 天 | 依赖安全漏洞、API 兼容性断裂 | 优先安排 QA 验证，或拆分渐进升级方案 |
| — | — | — | — | — |

**积压健康度**：整体良好。今日批量清理 8 条 stale PR 后，待处理队列仅剩 1 条依赖升级 PR，维护负担显著降低。建议关注 Dependabot 配置的自动化策略，避免 major 版本升级长期悬置。

---

## 附录：数据完整性声明

| 指标 | 实际值 | 备注 |
|:---|:---|:---|
| Issues 24h 更新 | 0 | 无新增/活跃/关闭 |
| PR 24h 更新 | 28 | 27 已关闭/合并，1 开放 |
| 评论数据可用性 | 0% | 所有 PR 评论数为 `undefined`，可能影响社区热度分析精度 |
| 反应数据可用性 | 0% | 所有 👍 为 0，无法判断社区偏好 |

> **建议**：GitHub API 数据采集需验证 `comments` 字段解析逻辑，当前 `undefined` 可能为解析异常而非真实零评论。

---

*本日报基于 GitHub 公开数据生成，如需深度分析特定技术决策或社区治理模式，可进一步提供 Issues 评论全文、PR review 讨论等明细数据。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-15

> **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis)  
> **日期**: 2026-05-15  
> **分析周期**: 过去 24 小时（2026-05-14 至 2026-05-15）

---

## 1. 今日速览

Moltis 项目今日活跃度**偏低**，仅产生 2 条 Issue 更新，无 PR 活动及版本发布。社区讨论尚未形成热度，两条新增 Issue 均处于零评论、零反应的初始状态，表明议题尚处于早期曝光阶段，未引发广泛参与。项目代码层面今日无实质推进，整体处于**维护缓冲期**。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

**今日无合并或关闭的 Pull Requests。**

代码层面零进展，主干未获任何功能交付或缺陷修复。结合昨日同样无 PR 活动的背景，项目连续两日处于代码冻结或维护者注意力外移状态，建议关注核心贡献者可用性。

---

## 4. 社区热点

| 议题 | 状态 | 互动量 | 链接 |
|:---|:---|:---|:---|
| #996 TLS 证书仅适用于 localhost | 🔴 Open | 0 评论 / 0 👍 | [moltis-org/moltis#996](https://github.com/moltis-org/moltis/issues/996) |
| #995 集成 `portal-tunnel` 作为无信任中继通道 | 🔵 Open | 0 评论 / 0 👍 | [moltis-org/moltis#995](https://github.com/moltis-org/moltis/issues/995) |

**诉求分析**：
- **#996** 直指文档与实现不一致的信任基础设施问题——用户依据文档配置 TLS 后期望获得非 localhost 环境的可用证书，实际受限。该议题若属实，将影响 Moltis 作为分布式 AI 代理基础设施的**生产部署可行性**，属于文档债务与功能缺陷的交叉地带。
- **#995** 反映社区对**去中心化通信层**的诉求，提议将 `portal-tunnel` 整合为无需信任第三方的中继方案。这与 Moltis 定位的"个人 AI 助手"隐私主张高度契合，但实现复杂度（密钥交换、NAT 穿透、抗审查性）尚未展开讨论。

两条议题均未形成讨论热度，存在**沉没风险**。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 严重程度 | 修复状态 | 链接 |
|:---|:---|:---|:---|:---|
| P1 | #996 TLS 证书 localhost 限制 | **高** — 阻断非本地部署 | ❌ 无 Fix PR | [moltis-org/moltis#996](https://github.com/moltis-org/moltis/issues/996) |

**风险评估**：该 Bug 若确认，意味着 Moltis 的 TLS 自动化机制存在**设计级缺陷**——文档承诺与实际行为背离，且影响多节点组网场景。作者 IlyaBizyaev 已完成预检（使用最新版本、搜索重复议题），报告质量较高，建议维护者优先复现。

---

## 6. 功能请求与路线图信号

| Issue | 功能领域 | 纳入可能性评估 | 链接 |
|:---|:---|:---|:---|
| #995 `portal-tunnel` 集成 | P2P 网络层 / 隐私中继 | ⭐⭐⭐☆☆ 中期候选 | [moltis-org/moltis#995](https://github.com/moltis-org/moltis/issues/995) |

**判断依据**：
- **契合度**：与项目"个人 AI 助手"的去中心化愿景一致，可强化代理间通信的**抗审查性与隐私性**
- **阻碍因素**：无现有 PR、无技术方案草案、`portal-tunnel` 成熟度待验证；且 Moltis 当前网络层架构（基于何种传输？QUIC/WebSocket/纯 TCP？）未在议题中澄清
- **路线图信号**：若维护者近期关注 #995，可能预示网络层重构意图；反之则表明核心团队聚焦其他优先级（如 #996 暴露的 TLS 问题）

---

## 7. 用户反馈摘要

| 痛点 | 来源 | 场景推断 |
|:---|:---|:---|
| **文档信任危机** | #996 | 用户按文档操作后遭遇"意料外限制"，产生"文档不可信"的负面体验 |
| **生产部署受阻** | #996 | 非 localhost 证书需求暗示用户尝试将 Moltis 部署至远程服务器或边缘设备 |
| **对无信任架构的主动诉求** | #995 | 用户 gg582 不仅接受去中心化设计，更主动寻求强化方案，反映核心用户群的**密码学意识**与**主权数据诉求** |

**满意度信号**：两条议题均未出现情绪化表达，预检清单完成度高，社区整体**理性且建设性**。

---

## 8. 待处理积压

⚠️ **新增议题沉没风险预警**

| Issue | 创建时间 | 当前状态 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| #996 TLS 证书限制 | 2026-05-14 | 0 评论，无维护者响应 | 🔴 高 — 生产阻断问题若 48h 内无响应，将损害社区信心 | 指派网络/安全模块维护者复现 |
| #995 `portal-tunnel` 集成 | 2026-05-14 | 0 评论，无标签 | 🟡 中 — 功能请求正常沉淀，但需 `enhancement` + `network` 标签分类 | 维护者添加标签并关联现有网络层议题 |

**历史上下文提示**：本日报仅覆盖 24 小时数据，无法评估更长期的积压状态。建议结合项目 Issue 全景（尤其 30+ 天无响应项）进行专项清理。

---

## 健康度评分

| 维度 | 评分 | 说明 |
|:---|:---|:---|
| 代码活跃度 | ⭐⭐☆☆☆ | 连续两日零 PR |
| 社区响应度 | ⭐⭐☆☆☆ | 新 Issue 零响应 |
| 议题质量 | ⭐⭐⭐⭐☆ | 报告规范，预检完整 |
| 稳定性风险 | ⭐⭐⭐☆☆ | #996 待验证，潜在生产影响 |

> **综合评估**：项目处于**低活跃维护期**，核心风险在于生产级 Bug (#996) 的响应延迟可能放大为信任危机。建议维护者在 48 小时内对 #996 进行首次响应，以维持社区动能。

---

*本日报基于 GitHub 公开数据生成，未包含私有频道或线下协作信息。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-15

> **仓库**: [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)（注：数据中部分链接显示为 QwenPaw，应为同一项目）
> **数据周期**: 过去 24 小时（2026-05-14 至 2026-05-15）

---

## 1. 今日速览

今日 CoPaw 项目呈现**极高活跃度**，24 小时内产生 **50 条 Issues 更新**（40 条新开/活跃，10 条关闭）和 **50 条 PR 更新**（48 条待合并，仅 2 条已合并/关闭），PR 合并率偏低（4%），显示代码审查队列严重积压。社区贡献者 **aqilaziz** 单日爆发式提交 **15+ 个 PR**，聚焦单元测试覆盖与缺陷修复，形成"测试驱动补债"的集中攻坚态势。同时 **v1.1.7 版本发布**，浏览器自动化能力显著增强，但生产环境稳定性问题（MiMo 思考模式 400 错误、Agent 身份混淆、响应重复等）仍在持续暴露，用户痛点与工程债务并行凸显。

---

## 2. 版本发布

### v1.1.7 已发布
**发布链接**: [v1.1.7](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.7)

| 类别 | 内容 |
|:---|:---|
| **新增功能** | **Browser Use — Batch Actions**: 支持在单次工具调用中执行多步骤浏览器操作（导航、点击、输入、截图等）([#4139](https://github.com/agentscope-ai/QwenPaw/pull/4139)) |
| | **Browser Use — File Download**: 支持通过点击页面元素触发文件下载 |
| **迁移注意事项** | Batch Actions 为新增 API，现有单步浏览器调用保持兼容；需注意批量操作的超时配置 |
| **已知风险** | 同日 Issues 显示 Browser CDP 模式在 Ubuntu 26.04 存在超时问题（见 [#4360](https://github.com/agentscope-ai/QwenPaw/issues/4360)），虽已关闭但需验证修复是否包含在本版本 |

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（仅 2 条，48 条滞留）

| PR/Issue | 状态 | 说明 |
|:---|:---|:---|
| [#4360](https://github.com/agentscope-ai/QwenPaw/issues/4360) Browser CDP mode fails on Ubuntu 26.04 | **已关闭** | CDP 模式超时问题，20+ 次测试失败，关闭状态暗示已有修复但未明确关联 PR |
| [#4018](https://github.com/agentscope-ai/QwenPaw/issues/4018) embedding_model_config 更新后被重置 | **已关闭** | `qwenpaw update` 导致向量搜索配置丢失的回归问题已修复 |
| [#4323](https://github.com/agentscope-ai/QwenPaw/issues/4323) execute_shell_command 不继承自定义 PATH | **已关闭** | `envs.json` 中自定义 PATH 未被 shell 命令继承，影响本地工具链调用 |
| [#3864](https://github.com/agentscope-ai/QwenPaw/issues/3864) 备份无轮转机制 | **已关闭** | 长期存在的存储膨胀问题，关闭表明可能已有清理策略 |

**整体评估**: 今日"前进"有限——关闭 4 个 Issues 但无显性合并的 feature PR，48 个待合并 PR 中大量为测试覆盖（aqilaziz 的 PR 集群），**功能交付停滞，工程债务偿还加速**。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 1 | **Phase 5 单元测试覆盖** — local_models + providers + tunnel + utils | 11 | 后端测试覆盖率里程碑的最后冲刺，hanson-hex 主导的分阶段补债 | [#4342](https://github.com/agentscope-ai/QwenPaw/issues/4342) |
| 2 | **copaw app 启动后信息错误** | 7 | 启动日志显示 "Workspace stopped" 等误导信息，从 v1.0.1 存在至今的 UX 债务 | [#2953](https://github.com/agentscope-ai/QwenPaw/issues/2953) |
| 3 | **MiMo 思考模式 + 工具调用多轮对话 400 错误** | 7 | **生产阻断**: 小米 MiMo 模型开启思考模式后，历史含工具调用即触发 `missing reasoning_content` 400 错误 | [#4314](https://github.com/agentscope-ai/QwenPaw/issues/4314) |
| 4 | **Agent workspace 身份混淆** | 7 | **安全/稳定性**: 主控 Agent 接收其他 Agent 的频道消息后错误切换 workspace，导致身份盗用式行为 | [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) |
| 5 | **Telegram AudioContent 不支持** | 6 | 语音消息无法转换为 LLM 可理解格式，多模态通道能力缺口 | [#1516](https://github.com/agentscope-ai/QwenPaw/issues/1516) |

**诉求分析**: 社区核心矛盾——**测试基础设施狂奔（hanson-hex + aqilaziz）vs 生产稳定性失血（MiMo 400、身份混淆、响应重复）**。用户迫切需要的是模型兼容性修复和 Agent 运行时可靠性，而非更多测试代码。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0-阻断** | [#4314](https://github.com/agentscope-ai/QwenPaw/issues/4314) | MiMo 思考模式 + 工具调用 → 400 错误，影响所有多轮工具调用场景 | 开放，7 评论 | ❌ 无 |
| 🔴 **P0-阻断** | [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) | Agent workspace 身份混淆，可导致权限逃逸/数据泄露 | 开放，7 评论 | ❌ 无 |
| 🟡 **P1-严重** | [#4300](https://github.com/agentscope-ai/QwenPaw/issues/4300) | Agent 响应完全重复（含思考过程），v1.1.6 回归 | 开放，5 评论 | ❌ 无 |
| 🟡 **P1-严重** | [#4299](https://github.com/agentscope-ai/QwenPaw/issues/4299) | `write_file()` 死循环/参数缺失错误，长内容必现 | 开放，5 评论 | ❌ 无 |
| 🟡 **P1-严重** | [#4354](https://github.com/agentscope-ai/QwenPaw/issues/4354) | 读取大 Excel 文件导致 Agent 强制中断 | 开放，4 评论 | ❌ 无 |
| 🟡 **P1-严重** | [#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) | chromadb Rust binding SIGSEGV 段错误，45+ 次/会话，进程级崩溃 | 开放，3 评论 | ❌ 无 |
| 🟢 **P2-一般** | [#2953](https://github.com/agentscope-ai/QwenPaw/issues/2953) | 启动日志信息误导，长期 UX 问题 | 开放，7 评论 | ❌ 无 |
| 🟢 **P2-一般** | [#2751](https://github.com/agentscope-ai/QwenPaw/issues/2751) | Anthropic API `content.type 'file'` 不支持，send_file_to_user 后交互失败 | 开放，3 评论 | ❌ 无 |

**关键信号**: 
- **v1.1.7 发布当日即暴露兼容性漏洞**（MiMo + 思考模式），版本质量门禁存疑
- **身份混淆**（#3957）与 **workspace 上下文污染**（#4394 尝试修复）指向 Agent 运行时隔离架构缺陷
- aqilaziz 的 [#4394](https://github.com/agentscope-ai/QwenPaw/pull/4394) `fix(app): preserve agent-scoped root session context` 可能关联 #3957，但未明确引用

---

## 6. 功能请求与路线图信号

| 功能请求 | 热度 | 可行性评估 | 纳入下一版本信号 |
|:---|:---:|:---|:---|
| **Session 生命周期钩子** (`session.create`, `session.reset`) — [#4249](https://github.com/agentscope-ai/QwenPaw/issues/4249) | 3 评论 | 高，扩展性强，开发者生态关键能力 | ⭐⭐⭐ 强信号：架构级需求，无替代方案 |
| **Auto-Memory 排除心跳/定时任务** — [#3944](https://github.com/agentscope-ai/QwenPaw/issues/3944) | 4 评论, 👍1 | 中，配置层过滤即可 | ⭐⭐⭐ 强信号：明确痛点，实现路径清晰 |
| **"All Chats" 分页** — [#3570](https://github.com/agentscope-ai/QwenPaw/issues/3570) | 3 评论 | 高，前端性能优化 | ⭐⭐ 中信号：性能问题明确，但控制面板已有分页"故障" |
| **AgentScope tracing 初始化支持** — [#4057](https://github.com/agentscope-ai/QwenPaw/issues/4057) | 3 评论 | 中，需统一初始化入口 | ⭐⭐ 中信号：可观测性基础设施，企业用户需要 |
| **钉钉引用消息读取** — [#3109](https://github.com/agentscope-ai/QwenPaw/issues/3109) | 2 评论 | 中，PR [#4390](https://github.com/agentscope-ai/QwenPaw/pull/4390) 已覆盖测试 | ⭐⭐⭐ **已实现测试覆盖，待合并** |
| **可配置 base path**（反向代理支持）— [#1853](https://github.com/agentscope-ai/QwenPaw/issues/1853) | 3 评论, 👍1 | 中，影响部署灵活性 | ⭐⭐ 中信号：长期存在，PR [#4387](https://github.com/agentscope-ai/QwenPaw/pull/4387) 解除 Anthropic URL 冻结显示类似思路 |

**世界杯技能** ([#4407](https://github.com/agentscope-ai/QwenPaw/pull/4407)): 首个外部贡献者技能 PR，含赛程、比分、预测、伤病追踪、视频生成等，**事件驱动型功能**，2026 世界杯临近，合并紧迫性高。

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issues 原文提炼）

| 场景 | 痛点 | 情绪强度 |
|:---|:---|:---:|
| **企业部署** | "每次 `qwenpaw update` 后 embedding 配置被重置，向量搜索失效" — 更新即破坏生产配置 | 😤 高 |
| **多 Agent 协作** | "主控 Agent 收到消息后认为自己是别的 Agent" — 身份认同危机，不可预测行为 | 😱 极高 |
| **模型兼容性** | "MiMo 思考模式 + 工具调用必现 400" — 特定模型组合完全不可用 | 😤 高 |
| **离线环境** | "桌面版离线使用，已装 whisper+ffmpeg，仍强制联网" — 离线承诺未兑现 | 😤 高 |
| **大文件处理** | "读取大 Excel 直接被中断，重复提交仍失败" — 工作流断裂 | 😤 高 |
| **日常摩擦** | "Agent 回复完全重复，思考过程也重复两遍" — 体验粗糙，信任损耗 | 😒 中 |

### 满意点
- 浏览器自动化 Batch Actions 获版本发布，效率场景认可
- 社区贡献者活跃（aqilaziz 单日大量 PR），开源生态有活力

---

## 8. 待处理积压

### 长期未响应的高价值 Issue（>30 天，今日仍有更新）

| Issue | 天数 | 风险 | 行动建议 |
|:---|:---:|:---|:---|
| [#1853](https://github.com/agentscope-ai/QwenPaw/issues/1853) 可配置 base path | **57 天** | 企业反向代理部署阻塞，👍1 显示真实需求 | 关联 PR [#4387](https://github.com/agentscope-ai/QwenPaw/pull/4387) 思路，统一 URL 配置策略 |
| [#1516](https://github.com/agentscope-ai/QwenPaw/issues/1516) Telegram 语音不支持 | **61 天** | 多模态通道能力缺口，语音交互趋势 | 需 AudioContent 格式转换管道设计 |
| [#2751](https://github.com/agentscope-ai/QwenPaw/issues/2751) Anthropic `file` type 不支持 | **44 天** | 文件发送后 API 交互完全断裂 | 需内容类型白名单/转换层 |
| [#2953](https://github.com/agentscope-ai/QwenPaw/issues/2953) 启动信息错误 | **39 天** | 从 v1.0.1 至今的 UX 债务，7 评论未解决 | 日志文案修复，低投入高感知 |
| [#2982](https://github.com/agentscope-ai/QwenPaw/issues/2982) 聊天排序/日期逻辑错误 | **39 天** | 基础交互逻辑缺陷，影响日常使用 | 前端状态管理重构 |

### PR 审查队列警报

**48 个待合并 PR 中**，aqilaziz 贡献占 **15+ 个**，形成单点依赖和审查瓶颈。建议：
1. **优先审查生产修复类 PR**：[#4394](https://github.com/agentscope-ai/QwenPaw/pull/4394)（session 上下文）、[#4389](https://github.com/agentscope-ai/QwenPaw/pull/4389)（chats.json 恢复）、[#4388](https://github.com/agentscope-ai/QwenPaw/pull/4388)（通道原始回复）
2. **批量合并测试覆盖 PR**：aqilaziz 的 test(*) 系列可集中审查，减少队列噪音
3. **明确 #4314、#3957、#4300 的修复负责人**：当前无关联 PR，需紧急分配

---

> **日报生成时间**: 2026-05-15  
> **数据置信度**: 基于 GitHub API 公开数据，PR 评论数部分显示为 `undefined` 系原始数据缺失

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-15

## 1. 今日速览

ZeroClaw 今日保持**高强度开发节奏**，24小时内 Issues 更新 23 条（19 活跃/新开，4 关闭）、PR 更新 50 条（43 待合并，7 已合并/关闭），无新版本发布。社区焦点集中在 **Cron 系统可靠性**（输出路由、会话隔离、schema 写入优化）、**Telegram 渠道完善**（mention_only 媒体消息过滤、工具调用进度展示）以及 **安全依赖升级**（lettre TLS 漏洞修复）。项目整体健康度良好，但 P1 级 Bug 密集涌现，维护者审阅队列压力显著。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 说明 | 关联 Issue |
|:---|:---|:---|:---|
| [#6594](https://github.com/zeroclaw-labs/zeroclaw/pull/6594) | JordanTheJet | **技能系统里程碑**：落地 Hermes 风格的后台 review fork + `skill_manage` 工具，补全 #4619 的集成缺口，使 `skill_improvement.enabled` 真正生效 | #4619 |
| [#6286](https://github.com/zeroclaw-labs/zeroclaw/pull/6286) | theonlyhennygod | **Telegram 渠道修复**：`mention_only=true` 现在正确过滤照片、文档、语音等媒体消息，解决群聊中 bot 被非 @提及媒体触发的问题 | #6229 |
| [#6664](https://github.com/zeroclaw-labs/zeroclaw/pull/6664) | Dongik | **OAuth 体验优化**：OpenAI OAuth 回调成功后自动关闭浏览器标签页，减少用户手动操作 | - |
| [#5557](https://github.com/zeroclaw-labs/zeroclaw/pull/5557) | ceo0x | **安装脚本修复**：解决 macOS bash 3.2 上 `CARGO_FEATURE_ARGS` 未绑定变量导致的安装失败 | - |
| [#5540](https://github.com/zeroclaw-labs/zeroclaw/pull/5540) | tre508 | **内存系统加固**：强化 memory recall 和 session resume 的可靠性（因需作者操作而关闭，代码已部分吸收） | - |

### 关键推进方向

- **技能自治闭环**：#6594 的合并标志着 ZeroClaw 从"静态技能加载"迈向"动态自我改进"，agent 可在后台 fork 中评估并管理自身技能
- **Cron 系统治理**：#6656（事务化持久化）、#6654（只读查询绕过 schema-ensure）等 PR 正在重构 cron 存储层，解决长期以来的数据一致性和性能问题
- **渠道体验精细化**：Telegram 的 mention_only 修复和即将落地的工具调用进度展示（#6663），显示团队对多平台交互细节的持续关注

---

## 4. 社区热点

### 讨论最活跃的 Issues/PRs

| 排名 | 条目 | 评论数 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥1 | [#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647) Cron 输出未路由至配置渠道 | 4 | **S1 级工作流阻断**：用户期望 cron job 结果自动推送到 Telegram，目前仅能在 Web Dashboard 查看。这是自动化工作流的最后一公里问题，直接影响"无人值守"场景可用性 |
| 🔥2 | [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) 上下文压缩丢弃 reasoning_content | 4 | **DeepSeek 等推理模型兼容性**：压缩逻辑未保留推理内容，导致长对话后模型行为退化。反映社区对"推理型 LLM"深度集成的迫切需求 |
| 🔥3 | [#6659](https://github.com/zeroclaw-labs/zeroclaw/issues/6659) 缺失 Gateway 通知推送 API | 3 | **第三方插件生态扩展**：klodi-plugin 等下游项目需要向操作员的 Gateway 会话注入通知，当前 0.7.4 无此能力。体现 ZeroClaw 作为"平台"的 API 完备性诉求 |

### 背后诉求洞察

- **"Set and forget" 自动化**：Cron 相关 Issue 密集（#6647, #6105, #6648, #6654, #6634）表明用户强烈需要可靠的定时任务系统，而非仅"能跑起来"
- **推理模型原生支持**：#6269 和 #5652（Anthropic/Bedrock extended thinking）显示社区正从"通用 LLM 接入"转向"差异化能力深度利用"
- **可观测性标准化**：#6641, #6642 的 OTel 改进请求来自同一用户（JordanTheJet），且明确指向 upstream 贡献，反映企业级部署对标准化监控的刚性需求

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重程度 | Issue | 状态 | 说明 | Fix PR |
|:---|:---|:---|:---|:---|
| **S1 - 工作流阻断** | [#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647) Cron 输出未路由至渠道 | OPEN, P1, accepted | Cron job 结果仅出现在 Web Dashboard，不投递 Telegram | **[#6665](https://github.com/zeroclaw-labs/zeroclaw/pull/6665)** (WIP, Fix #2) |
| **S1 - 工作流阻断** | [#6646](https://github.com/zeroclaw-labs/zeroclaw/issues/6646) Telegram 中 web_search_tool/web_fetch 不触发 | OPEN, P1, accepted | v0.7.5 中工具调用在 Telegram 渠道失效，LM Studio 兼容 provider | 暂无明确 PR |
| **S1 - 安全漏洞** | [#6657](https://github.com/zeroclaw-labs/zeroclaw/issues/6657) Advisory scan 失败 - RUSTSEC-2026-0141 | OPEN, P1, in-progress | lettre 0.11.21 TLS hostname verification 被禁用 | **[#6662](https://github.com/zeroclaw-labs/zeroclaw/pull/6662)** (已开，待合并) |
| **S2 - 行为降级** | [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) 上下文压缩丢失 reasoning_content | OPEN, P1, in-progress | 长对话触发压缩后 DeepSeek reasoning_content 丢失 | 暂无 |
| **S2 - 行为降级** | [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) Agent 无 cron job 上下文 | OPEN, P2, blocked | Cron 触发的 agent 无法引用自己之前发送的消息 | 暂无 |
| **S2 - 行为降级** | [#6659](https://github.com/zeroclaw-labs/zeroclaw/issues/6659) 缺失 Gateway 通知推送 API | OPEN, P1, needs-review | 外部进程无法向操作员 Gateway 会话推送通知 | 暂无 |
| **S2 - 行为降级** | [#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) allowed_private_hosts 对解析到私有 IP 的域名无效 | OPEN, P1, no-stale | DNS 解析后 IP 检查绕过白名单，安全策略失效 | 暂无 |
| **S2 - 行为降级** | [#6651](https://github.com/zeroclaw-labs/zeroclaw/issues/6651) Matrix 渠道 /admin/reload 内存泄漏 | OPEN, P2, blocked | 每次 reload 泄漏 ~1MB Pss，上游 matrix-sdk Arc 循环引用 | 暂无（依赖上游 #6573） |
| **S3 - 轻微问题** | [#6654](https://github.com/zeroclaw-labs/zeroclaw/issues/6654) Cron 只读查询仍走 writable schema-ensure | OPEN, P3, in-progress | 不必要的 schema 检查影响性能和并发 | **[#6656](https://github.com/zeroclaw-labs/zeroclaw/pull/6656)** (事务化重构) |

### 今日关闭的 Bug

| Issue | 说明 |
|:---|:---|
| [#6547](https://github.com/zeroclaw-labs/zeroclaw/issues/6547) | Homebrew 合并失败（无 0.7.5 版本），低风险支持类问题 |
| [#6229](https://github.com/zeroclaw-labs/zeroclaw/issues/6229) | Telegram `mention_only=true` 不抑制媒体消息响应，已由 #6286 修复 |
| [#6634](https://github.com/zeroclaw-labs/zeroclaw/issues/6634) | Cron 调度的 webhook 回调丢失 thread_id |
| [#6627](https://github.com/zeroclaw-labs/zeroclaw/issues/6627) | 工具结果图片在后续 provider turn 中重复播放 |

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 成熟度评估 | 纳入下一版本可能性 |
|:---|:---|:---|:---|
| **Turn-level OTel trace 关联** (#6641) | JordanTheJet | 有明确技术方案（#6009 已讨论），@alexandme 已承诺贡献 | **高** — 依赖 #6009, #6190 的延续，企业级可观测性刚需 |
| **llm.call span 完整 prompt/completion 捕获** (#6642) | JordanTheJet | 下游 Micra-io fork 已实现，作者主动提出 upstream | **高** — 与 #6641 配套，技术债务低 |
| **Telegram 工具调用进度展示** (#6663) | Audacity88 | 需求清晰，技术可行（`update_draft_progress`） | **中高** — 提升 partial streaming 体验，用户感知强 |
| **WebSocket steering 时保留已流式输出** (#6661) | Audacity88 | PR #5161 已探索，需解决 transcript 完整性 | **中** — 涉及核心对话状态机，需谨慎 |
| **IMAP/SMTP 分离凭证** (#6666) | r4mmer | PR 已开，实现直接 | **高** — 邮件渠道企业部署常见需求 |
| **musl aarch64 Linux 安装支持** (#6658) | allenmagic | 需求明确，脚本层改动 | **中高** — 边缘/IoT 部署场景 |
| **主机架构策略定义** (#6653) | Audacity88 | 设计决策类，需维护者裁定 | **中** — 涉及更新机制架构 |

### 路线图信号

- **技能系统 2.0**：#6594 合并后，#6645（manifest.toml vs SKILL.toml 不一致）、#6644（review fork 摘要解析缺陷）等跟进 Issue 表明技能系统进入"打磨期"，预计 0.8.x 将成为核心卖点
- **Cron 系统重构**：存储层事务化（#6656）、会话目标修复（#6648）、只读路径优化（#6654）密集出现，暗示 cron 可能是 0.8 的第二个重点

---

## 7. 用户反馈摘要

### 真实痛点

> *"Cron job results only appear in web dashboard... No output is delivered to configured channels"* — icemann521, [#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647)

**核心场景**：用户配置定时任务期望"静默自动化"（如每日报告推送到 Telegram），但被迫每天打开 Web Dashboard 检查，**自动化承诺未兑现**。

> *"When asking Clawconsigliere to search for... web_search_tool and web_fetch not firing"* — icemann521, [#6646](https://github.com/zeroclaw-labs/zeroclaw/issues/6646)

**核心场景**：Telegram + 自托管模型（LM Studio）用户发现工具调用完全失效，**渠道与 provider 的交叉兼容性**成为盲区。

> *"A backend process... needs to push notifications into an operator's gateway session"* — blackbak (代 klodi-plugin), [#6659](https://github.com/zeroclaw-labs/zeroclaw/issues/6659)

**核心场景**：第三方插件生态尝试构建在 ZeroClaw 之上，但 Gateway 作为"会话中心"缺乏对外通知能力，**平台扩展性受限**。

### 满意之处

- **社区响应速度**：JordanTheJet 多次 @alexandme 并获快速回应（#6641, #6642），"your responsiveness... has been excellent"
- **技能自治方向**：Hermes-style review fork 的引入获得积极跟进，显示架构决策得到社区认同

### 不满意之处

- **版本发布与包管理**：Homebrew 0.7.5 缺失（#6547）、安装脚本 musl 支持缺失（#6658），**发行工程**滞后于功能开发
- **长期技术债务**：153 commits 批量回滚（#6074）仍未恢复，社区对"丢失的修复和功能"持续关切

---

## 8. 待处理积压

### 需维护者紧急关注

| Issue/PR | 天数 | 风险 | 提醒 |
|:---|:---|:---|:---|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 153 commits 批量回滚恢复审计 | **48 天** | 高 | **最长停滞**。3月28日的 c3ff635 回滚导致大量已审代码丢失，Audacity88 持续跟踪但无维护者承诺恢复计划。建议设定恢复里程碑或明确弃用范围。 |
| [#5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652) Anthropic/Bedrock native extended thinking | **34 天** | 中 | 大型 PR（size: L），跨 8 个 provider，需作者行动（needs-author-action）。推理模型差异化竞争关键，长期停滞可能被社区 fork 抢先。 |
| [#5592](https://github.com/zeroclaw-labs/zeroclaw/pull/5592) Docker.debian 构建修复 | **35 天** | 中 | 基础构建管道问题，needs-author-action，影响自托管用户入门体验。 |
| [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) Agent 无 cron job 上下文 | **20 天** | 高 | **blocked 状态未解释**。Cron 系统的核心体验缺陷，用户 radther 4月25日报告后无维护者响应，今日仅被被动更新。 |
| [#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) allowed_private_hosts 安全策略失效 | **47 天** | 高 | 安全相关，no-stale 标签防止关闭，但无修复进展。私有网络访问控制是 enterprise 部署的合规要点。 |

### 审阅队列压力

- **43 个待合并 PR** 中，大量标记 `needs-author-action` 或 `needs-maintainer-review`，建议维护者进行队列梳理，区分"等待作者"与"等待审阅"以避免双向阻塞。

---

*日报生成时间：2026-05-15 | 数据来源：zeroclaw-labs/zeroclaw GitHub 公开数据*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*