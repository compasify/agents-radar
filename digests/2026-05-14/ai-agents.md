# OpenClaw 生态日报 2026-05-14

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-14 00:25 UTC

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

# OpenClaw 项目动态日报 | 2026-05-14

---

## 1. 今日速览

OpenClaw 今日保持极高活跃度，24小时内 **500 条 Issues 更新**（新开/活跃 437，关闭 63）与 **500 条 PR 更新**（待合并 477，已合并/关闭 23），社区参与密度显著。项目连续发布 3 个 beta 版本（v2026.5.12-beta.4~6），聚焦 iMessage 媒体发送、Gateway 协议升级与 Codex 运行时修复。核心痛点仍集中在 **Gateway 网络超时、Slack/Telegram 通道稳定性、多 Agent 协调性能**三大领域，Windows + Node 24 环境下的运行时退化问题获得最高社区关注度（17 评论）。PR 合并率偏低（4.6%），大量贡献等待行为验证审核，流程瓶颈明显。

---

## 2. 版本发布

### v2026.5.12-beta.6
| 属性 | 内容 |
|:---|:---|
| 发布日期 | 2026-05-12（今日推进至 beta.6）|
| 核心变更 | **iMessage 媒体发送修复** + Agent 会话初始化优化 |

**详细更新：**
- **iMessage 修复**（[#81209](https://github.com/openclaw/openclaw/issues/81209)）：停止向纯媒体原生图片发送中暴露 `<media:image>` 占位文本，同时保留内部 echo key 防止自回声重复回复。感谢 @homer-byte
- **Agent 会话**：在首次 `session` 前创建配置的主会话（摘要截断，完整内容见 release note）

**迁移注意**：iMessage 插件用户若依赖旧版占位文本进行调试，需调整监控逻辑。

---

### v2026.5.12-beta.5
| 属性 | 内容 |
|:---|:---|
| 核心变更 | **Gateway 协议 v4 强制升级** + Talk 会话作用域传递 |

**详细更新：**
- **Gateway 协议破坏性变更**（[#80725](https://github.com/openclaw/openclaw/issues/80725)）：**强制要求 v4 客户端**，新增显式 `deltaText`/`replace` 流式帧，SDK 客户端无需本地 diff 即可消费助手更新。感谢 @samzong
- **Talk 作用域修复**（[#81379](https://github.com/openclaw/openclaw/issues/81379)）：将 Talk 会话作用域传递至 resolver [AI]。感谢 @pgondhi987
- **GitHub Copilot**：支持截断（完整内容见 release note）

**⚠️ 破坏性变更**：v4 协议强制升级意味着旧版 SDK/客户端必须更新，否则将无法连接。建议所有集成方检查兼容性。

---

### v2026.5.12-beta.4
| 属性 | 内容 |
|:---|:---|
| 核心变更 | **Codex 运行时修复** + 迁移流程优化 |

**详细更新：**
- **Codex 运行时**（无独立 issue）：允许官方安装的 `@openclaw/codex` 包使用其私有 task-runtime SDK helper，修复迁移后的 OpenAI/Codex beta 运行时的 `MODULE_NOT_FOUND` 错误
- **Codex 迁移 UX**：Enter 键激活高亮复选框行后再继续，使 `Skip for now` 操作更符合直觉（摘要截断）

**迁移注意**：从 OpenAI Codex beta 迁移的用户需确保包版本匹配，避免模块解析冲突。

---

## 3. 项目进展

### 今日合并/关闭的关键 PR

| PR | 状态 | 贡献者 | 核心贡献 | 推进价值 |
|:---|:---|:---|:---|:---|
| [#81487](https://github.com/openclaw/openclaw/pull/81487) | **已合并** | @BunsDev | Control UI 浏览器本地字体大小设置（90%-140% 五档） | 可访问性重大提升，回应了 3 个月前的 [#8547](https://github.com/openclaw/openclaw/issues/8547) |
| [#81187](https://github.com/openclaw/openclaw/pull/81187) | **已合并** | @YB0y | `openclaw commitments --json` 输出路由至 stdout | 修复 CLI JSON 消费方的管道断裂问题 |
| [#81570](https://github.com/openclaw/openclaw/pull/81570) | 待合并 | @Kaspre | 插件元数据快照进程级 memoization | 性能优化，缓解 [#81143](https://github.com/openclaw/openclaw/issues/81143) 的 manifest 重复扫描问题 |
| [#81572](https://github.com/openclaw/openclaw/pull/81572) | 待合并 | @efpiva | Cron 任务增量持久化完成状态 | 可靠性：解决 cron 任务"假死"显示问题 |
| [#81573](https://github.com/openclaw/openclaw/pull/81573) | 待合并 | @freeter226 | 小米 MiMo 模型 DeepSeek 思考格式兼容检测 | 生态扩展：覆盖国产模型协议 |
| [#80749](https://github.com/openclaw/openclaw/pull/80749) | 待合并 | @sahilsatralkar | Slack 要求投递回执确认 | 稳定性：根治 Slack 消息"幽灵发送"问题 |

**整体推进评估**：今日合并以 UX 修复为主，核心架构 PR（性能、可靠性）大量积压待审。v4 协议升级标志着 Gateway 进入新一代，但客户端迁移压力同步增加。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 链接 |
|:---|:---|:---:|:---:|:---|:---|
| 1 | **Gateway 运行时退化**：Windows 11 + Node 24 多子系统网络/定时器降级 | 17 | 1 | 生产环境稳定性，跨版本回归根因 | [#73323](https://github.com/openclaw/openclaw/issues/73323) |
| 2 | **Slack 静默断连**：连接数天后无响应，无错误日志 | 16 | 2 | 企业 IM 可靠性，可观测性缺失 | [#72808](https://github.com/openclaw/openclaw/issues/72808) |
| 3 | **流式看门狗超时阈值可配置**：长思考模型（Kimi K2.5/DeepSeek-R1）频繁触发 30s 重置 | 12 | 7 | AI 原生模型适配，参数灵活性 | [#68596](https://github.com/openclaw/openclaw/issues/68596) |
| 4 | **Dreaming 插件停用词过窄**：tokenization 伪影污染主题提取 | 10 | 2 | 插件质量，数据清洗 | [#68449](https://github.com/openclaw/openclaw/issues/68449) |
| 5 | **卡死会话检测无恢复动作**：需外部重启 Gateway | 9 | 0 | 自治恢复能力，运维自动化 | [#71127](https://github.com/openclaw/openclaw/issues/71127) |

**诉求分析**：热点议题呈现 **"稳定性 > 性能 > 功能"** 的优先级特征。Windows/Node 24 组合成为新的问题高发区，可能与 libuv 定时器或网络栈变更相关。Slack 断连问题反映长连接通道的保活机制缺陷。高赞的看门狗配置请求（👍7）显示推理模型用户群体扩大，但基础设施未跟上模型演进。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 级别 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0-生产阻断** | [#73323](https://github.com/openclaw/openclaw/issues/73323) | Gateway 多子系统网络退化：定价获取 60s 超时、Telegram 轮询停滞 127-266s、RPC 慢速 8-83s | **开放**，跨 4 个版本未解 | 无 |
| 🔴 **P0-生产阻断** | [#72808](https://github.com/openclaw/openclaw/issues/72808) | Slack 静默断连，无自动重连或告警 | **开放** | 无 |
| 🟡 **P1-功能损坏** | [#72879](https://github.com/openclaw/openclaw/issues/72879) | `thought_signature` 400 错误在 2026.4.25 回归，此前 4.24 已修复 | **开放**，修复复现 | 无 |
| 🟡 **P1-功能损坏** | [#71992](https://github.com/openclaw/openclaw/issues/71992) | Control UI webchat 每条助手回复重复显示 | **开放**，源自 #5964/#39469 回归 | 无 |
| 🟡 **P1-功能损坏** | [#74358](https://github.com/openclaw/openclaw/issues/74358) | Slack streaming preview 在 `toolProgress: false` 时完全静默，verbose 模式失效 | **开放**，v2026.4.21 引入 | 无 |
| 🟡 **P1-功能损坏** | [#71127](https://github.com/openclaw/openclaw/issues/71127) | 卡死会话检测后无终止/恢复动作 | **开放** | 无 |
| 🟡 **P1-功能损坏** | [#71412](https://github.com/openclaw/openclaw/issues/71412) | `stopChannel` 中止超时遗留僵尸任务，阻止健康监控重启 | **开放** | 无 |
| 🟢 **P2-体验问题** | [#68944](https://github.com/openclaw/openclaw/issues/68944) | CLI 命令在 WebSocket 网关握手阶段挂起 | **开放** | 无 |
| 🟢 **P2-体验问题** | [#70628](https://github.com/openclaw/openclaw/issues/70628) | Telegram DM 无可见响应回合仍合成"无回复"气泡 | **开放** | 无 |

**今日关闭的关键 Bug**：
- [#80730](https://github.com/openclaw/openclaw/issues/80730) ✅ **TUI 重启后要求重新授权** — 已修复（6 评论）
- [#78851](https://github.com/openclaw/openclaw/issues/78851) ✅ **HTTP 连接池缺失导致模型解析 7-8s** — 已关闭，方案已实施（6 评论）
- [#74334](https://github.com/openclaw/openclaw/issues/74334) ✅ **片段规范化不匹配导致晋升候选静默失败** — 已修复（5 评论）
- [#71178](https://github.com/openclaw/openclaw/issues/71178) ✅ **更新导致 Telegram 消息全丢失** — 已修复（5 评论）

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 信号强度 | 纳入下一版本可能性 | 关键论据 |
|:---|:---|:---:|:---|:---|
| [#68596](https://github.com/openclaw/openclaw/issues/68596) 可配置流式看门狗超时 | 功能请求 | ⭐⭐⭐⭐⭐ | **高** | 👍7 为今日最高，推理模型用户刚需，改动边界清晰 |
| [#71736](https://github.com/openclaw/openclaw/issues/71736) Control UI 插件贡献插槽 | RFC | ⭐⭐⭐⭐⭐ | 中高 | 架构级提案，Plan Mode 解耦需求，需设计评审 |
| [#71195](https://github.com/openclaw/openclaw/issues/71195) macOS Talk Mode OpenAI Realtime 路径 | 功能请求 | ⭐⭐⭐⭐☆ | 中 | 与 voice-call 插件对标，延迟优化明确，但平台专属 |
| [#71058](https://github.com/openclaw/openclaw/issues/71058) 单 Gateway 多 Azure/Teams Bot | 功能请求 | ⭐⭐⭐⭐☆ | 中 | 企业多租户场景，配置结构变更，非破坏性 |
| [#71142](https://github.com/openclaw/openclaw/issues/71142) Control UI 上传大小限制可配置 | 功能请求 | ⭐⭐⭐☆☆ | 高 | 5MB 硬编码限制，改动极小，用户体验直接提升 |
| [#69066](https://github.com/openclaw/openclaw/issues/69066) 内部服务身份与用户认证分离 | RFC | ⭐⭐⭐☆☆ | 低-中 | 安全架构深层改造，周期长，需社区共识 |

**PR 实现追踪**：
- [#81570](https://github.com/openclaw/openclaw/pull/81570) 插件元数据 memoization → 直接回应性能类需求
- [#73991](https://github.com/openclaw/openclaw/pull/73991) 每 Agent 命令通道隔离 → 多 Agent 可靠性基础设施
- [#73967](https://github.com/openclaw/openclaw/pull/73967) Discord 原生组件暴露 → 通道能力补齐

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 原声摘录 | 来源 |
|:---|:---|:---|
| **演示失败** | *"今天午饭时想向朋友演示，结果完全没响应"* — Slack 数天后静默断连 | [#72808](https://github.com/openclaw/openclaw/issues/72808) |
| **推理模型适配焦虑** | *"streaming watchdog: no stream updates for 30s; resetting status. The backend may have dropped this run silently"* — 长思考模型频繁被误判死亡 | [#68596](https://github.com/openclaw/openclaw/issues/68596) |
| **运维凌晨告警** | *"affected sessions remain frozen indefinitely until external restart"* — 卡死检测无自治恢复 | [#71127](https://github.com/openclaw/openclaw/issues/71127) |
| **配置变更成本** | *"every change requires image rebuild in policy-locked sandboxes"* — 插件配置无 env-var 路径 | [#72950](https://github.com/openclaw/openclaw/issues/72950) |
| **Windows 生产环境** | *"chronic across 4.23/4.25/4.26 on Windows 11 + Node 24"* — 跨版本持续退化 | [#73323](https://github.com/openclaw/openclaw/issues/73323) |

### 满意点
- beta 版本快速迭代：*"appreciate how quickly the team is shipping fixes"*（[#80714](https://github.com/openclaw/openclaw/issues/80714)）
- 具体修复精准命中：config-reread fix (#79947) 和 SSRF IPv4 pinning fix (#80078) 直接帮助生产环境

### 不满意点
- 回归问题反复：thought_signature 400 在 4.24 修复后 4.25 复现（[#72879](https://github.com/openclaw/openclaw/issues/72879)）
- 调试信息不足：Slack 断连"无错误日志"，Gateway 退化仅 WARN 级别（[#72808](https://github.com/openclaw/openclaw/issues/72808), [#73323](https://github.com/openclaw/openclaw/issues/73323)）
- CLI 行为隐式：默认 `--channel last` 静默恢复最近会话，无警告横幅（[#71417](https://github.com/openclaw/openclaw/issues/71417)）

---

## 8. 待处理积压

### 长期未响应的高价值 Issue/PR

| 条目 | 创建日期 | 最后更新 | 积压天数 | 风险 | 行动建议 |
|:---|:---|:---|:---:|:---|:---|
| [#53408](https://github.com/openclaw/openclaw/issues/53408) 长会话后 write/exec 工具参数静默丢失 | 2026-03-24 | 2026-05-13 | **51天** | 🔴 数据完整性风险 | 关联上下文压缩逻辑，需核心团队介入 |
| [#40165](https://github.com/openclaw/openclaw/issues/40165) NO_REPLY 前后缀双重剥离 | 2026-03-08 | 2026-05-13 | **67天** | 🟡 回复抑制泄漏 | 已有相关 issue #28874/#39335，可打包修复 |
| [#54724](https://github.com/openclaw/openclaw/pull/54724) Agent 主模型选择与目录加载修复 | 2026-03-25 | 2026-05-14 | **50天** | 🟡 XL 规模 PR 审核瓶颈 | 需行为验证，建议拆分或优先审阅 |
| [#43810](https://github.com/openclaw/openclaw/pull/43810) 未批准用户重复接收配对码 | 2026-03-12 | 2026-05-14 | **63天** | 🟢 安全体验 | XS 规模，快速合并不应阻塞 |
| [#55596](https://github.com/openclaw/openclaw/pull/55596) CJK 字符 Markdown 表格列对齐 | 2026-03-27 | 2026-05-14 | **48天** | 🟢 国际化体验 | 需 Telegram 可见验证，流程卡壳 |

### 流程瓶颈警示
- **"needs-real-behavior-proof" triage 标签泛滥**：30 条展示 PR 中 12 条（40%）挂此标签，成为事实上的合并阻塞器
- **clawsweeper bot PR 积压**：@openclaw-clownfish[bot] 提交的 6 条修复 PR（#73950~#73991）均待审，自动化贡献未获优先处理

---

*日报生成时间：2026-05-14 | 数据来源：GitHub openclaw/openclaw 公开仓库*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**分析日期**: 2026-05-14 | **覆盖项目**: 12 个活跃仓库

---

## 1. 生态全景

个人 AI 助手开源生态正经历**从"功能验证"向"生产就绪"的集体跃迁**。头部项目（OpenClaw、ZeroClaw、CoPaw）日处理 50-500 条 Issues/PRs，但合并率分化显著——OpenClaw 仅 4.6% 的 PR 合并率暴露行为验证流程瓶颈，而 LobsterAI 一次性清理 22 个积压 PR 显示工程债务管理策略差异。推理模型（DeepSeek V4/R1、Kimi K2.5、GLM-5.1）的爆发式采用正倒逼全栈适配：流式看门狗超时、思考内容格式兼容、长上下文压缩成为共性基础设施挑战。与此同时，**企业级需求**（多租户凭证隔离、IM 渠道稳定性、可观测性、安全沙箱）已从边缘诉求进入核心路线图，标志着用户画像从极客向团队/组织的结构性迁移。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 合并/关闭 | 待合并 | Release | 健康度评估 |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| **OpenClaw** | 500 更新 | 500 更新 | 23 | **477** | v2026.5.12-beta.4~6 | ⚠️ 极高活跃度但合并瓶颈严重，"needs-real-behavior-proof" 标签阻塞 40% PR |
| **NanoBot** | 14 (5 待处理) | 8 (9 待合并) | 8 | 9 | 无 | ✅ 容灾里程碑落地，测试覆盖率提升，向生产可用期迈进 |
| **Hermes Agent** | 50 | 50 | 3 | **47** | 无 | 🔥 救火模式，v0.13.0 系统性回归引发数据丢失危机，紧急修复响应快但积压承压 |
| **PicoClaw** | 10 (5 活跃) | 42 (14 待审) | 28 | 14 | v0.2.8-nightly | ✅ 稳健迭代，多用户群聊、OAuth、图像生成等边缘场景覆盖积极 |
| **NanoClaw** | 8 (7 活跃) | 26 (5 待审) | 21 | 5 | 无 | ✅ 高密度交付，营销技能本地化与可观测性（LangFuse）战略清晰 |
| **NullClaw** | 1 | 1 | 0 | 1 | 无 | ⚠️ 极低活跃度，Cron 2.0 PR 滞留 37 天，安全审计流程化但无功能推进 |
| **IronClaw** | 22 (20 活跃) | 50 (35 待合并) | 15 | **35** | 无 | 🔥 Reborn 架构重构全面铺开，35 个待合并 PR 预示 review 带宽危机 |
| **LobsterAI** | 2 | 23 (1 待合并) | 22 | 1 | 2026.5.12 | ✅ 工程效率极高，一次性消化 50 天积压 PR，但新增虚拟滚动 Bug 需关注 |
| **Moltis** | 1 | 0 | 0 | 0 | 无 | ⚠️ 近乎停滞，仅 UI 回归 Bug，社区参与度严重下滑 |
| **CoPaw** | 30 (12 活跃) | 50 (29 待合并) | 21 | 29 | v1.1.7-beta.2 | 🔥 密集迭代，MCP 超时/内存耗尽等生产问题集中暴露，审查负载集中 |
| **ZeptoClaw** | 4 (全为自建自关) | 0 | 0 | 0 | 无 | ⚠️ 静默维护模式，安全审计内部化，零外部参与 |
| **ZeroClaw** | 34 (15 关闭) | 50 (16 合并) | 16 | 34 | 无 | ✅ 技能自治闭环（Hermes 风格审查分叉）与 OTel 可观测性双轨推进 |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | 日 500 Issues + 500 PRs，绝对量级第一 | ZeroClaw/CoPaw/IronClaw 约 50 PRs/日，为其 1/10；NanoBot/PicoClaw 更低 |
| **技术路线** | **Gateway 中心化架构**：协议驱动（v4 强制升级）、多通道统一抽象、插件生态开放 | Hermes Agent 偏向"单体 Agent + 技能市场"；IronClaw 押注 WASM 组件化 Reborn 架构；NanoClaw 聚焦营销自动化技能栈 |
| **核心优势** | ① **通道覆盖广度**（iMessage/Slack/Telegram/Discord 全矩阵）② **协议标准化能力**（Gateway v4 的 `deltaText`/`replace` 帧设计）③ **企业集成深度**（Azure/Teams 多 Bot、SSO、审计日志） | 对比：PicoClaw 群聊多用户归属刚追上；CoPaw 钉钉/微信/QQ 接入但稳定性差；ZeroClaw 企业安全（配对码、CA 信任）更激进 |
| **结构性短板** | **PR 合并率 4.6%**  vs ZeroClaw 的 32%、LobsterAI 的 96%；行为验证流程成为事实瓶颈；Windows + Node 24 环境退化跨 4 版本未解 | Hermes Agent 虽也有 6% 关闭率，但紧急修复 <24h；NanoBot 22 天容灾需求闭环 |
| **生态位** | **"基础设施层标准制定者"**——类似 Kubernetes 于容器编排，通过 Gateway 协议和插件 API 定义行业交互范式 | 风险：若合并瓶颈持续，贡献者可能流向 PicoClaw/ZeroClaw 等更"轻量可及"的替代方案 |

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---:|
| **推理模型适配基础设施** | OpenClaw、NanoBot、PicoClaw、ZeroClaw、CoPaw | 流式看门狗超时可配置（30s 硬编码误判 DeepSeek-R1/Kimi K2.5 死亡）；`reasoning_content` 字段格式兼容；思考内容防泄露 | 🔴 **极高** |
| **IM 渠道稳定性与可观测性** | OpenClaw、NanoBot、PicoClaw、NanoClaw、CoPaw | Slack 静默断连（无日志/无重连）；Telegram 轮询停滞；文件附件权限 scope 遗漏；webhook 上下文丢失 | 🔴 **极高** |
| **长上下文/记忆管理** | OpenClaw、NanoBot、LobsterAI、CoPaw | 上下文压缩策略（手动入口 + 自动触发）；会话归档历史保留；中断后上下文恢复；Token 用量实时可见 | 🟡 **高** |
| **多租户/凭证隔离** | NanoClaw、ZeroClaw、CoPaw | Per-group API quota 与身份分离；密钥环超时；环境变量配置路径（避免镜像重建） | 🟡 **高** |
| **可观测性（Tracing/Metrics）** | NanoClaw、ZeroClaw、IronClaw | LangFuse 集成；OTel 工具跨度与 turn-level trace；`doctor` 诊断 CLI；Cron 运行历史持久化 | 🟡 **高** |
| **安全沙箱与执行边界** | PicoClaw、CoPaw、ZeptoClaw | 工作区沙箱逃逸（`find /` 绕过）；shell 命令静默阻断与可用性平衡；MCP 未认证 RCE 面 | 🟡 **高** |
| **语音/多模态交互** | NanoClaw、CoPaw、LobsterAI | 纯本地 whisper.cpp 语音转写；独立语音输入流；视觉路由一致性（`.any()` vs `default`） | 🟢 **中** |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 企业级多通道 Gateway、协议标准化、插件生态 | 中大型团队/组织 IT 部门 | Node.js 运行时，Gateway 中心化，v4 协议强制升级策略 |
| **Hermes Agent** | 个人自动化（Cron）、区块链技能（EVM 多链）、Dashboard 管理 | 个人高级用户、Crypto 开发者 | Rust + TypeScript 混合，systemd/launchd 托管，profile 碎片化架构 |
| **NanoBot** | 模型容灾切换、MCP 工具生态、多 IM 轻量部署 | 中国大陆用户（网络不稳定场景）、个人开发者 | Python 为主，`fallback_models` 级联架构，测试驱动迭代 |
| **PicoClaw** | 边缘设备/嵌入式、多用户群聊、国产模型适配 | 硬件开发者、社区运营者 | Go 语言，夜间构建持续交付，严格模式 Provider 兼容 |
| **NanoClaw** | 营销自动化（Reddit/LinkedIn/广告）、语音隐私、可观测性 | 营销运营、隐私敏感用户 | TypeScript，自托管 Lighthouse 审计，whisper.cpp 纯本地方案 |
| **IronClaw** | WASM 沙箱组件化、NEAR 区块链原生、Reborn 架构 | Web3 开发者、去中心化倡导者 | Rust 全栈，WASMtime 运行时，hooks 信任原语设计 |
| **LobsterAI** | 桌面端深度集成（POPO/企业 IM）、工件外部编辑、语音输入 | 中国企业用户、有道生态 | Electron + SQLite，Redux 状态管理，跨平台系统调用 |
| **CoPaw** | 低代码 Agent 编排、预制模板、Console UI 国际化 | 非技术用户、东南亚市场（印尼语） | Python/FastAPI，插件注册 APIRouter，MobileNavContext 移动端适配 |
| **ZeroClaw** | 技能自治进化（Hermes 审查分叉）、OTel 全链路、网关安全 | 自托管企业、安全合规团队 | Rust/TypeScript，Schema v3 迁移，`skill_improvement.enabled` 动态闭环 |
| **NullClaw** | Cron 调度中枢、JIRA 集成、安全审计流程 | 企业研发流程自动化 | 未明确技术栈，防御性维护姿态 |
| **Moltis/ZeptoClaw** | — | — | 活跃度过低，定位模糊 |

---

## 6. 社区热度与成熟度分层

| 层级 | 项目 | 特征 | 关键指标 |
|:---|:---|:---|:---|
| **🔥 快速迭代期** | OpenClaw、CoPaw、IronClaw、ZeroClaw | 日 30-500 条 Issues/PRs，架构级重构并行，生产问题与功能扩展双线作战 | 待合并 PR 29-477，存在 review 带宽瓶颈；P0 Bug 响应 <24h 但回归风险高 |
| **✅ 质量巩固期** | NanoBot、PicoClaw、NanoClaw、LobsterAI | 里程碑功能落地（容灾/群聊/营销栈/积压清理），测试覆盖与工程债务主动管理 | 合并率 50-96%，历史 PR 清理果断；边缘场景（移动端/语音/国际化）扩展 |
| **⚠️ 维护停滞期** | Hermes Agent、NullClaw、Moltis、ZeptoClaw | 社区动能骤降，或救火式修复（v0.13.0 回归），或安全审计内部化，或近乎零活动 | Issue 自建自关、PR 滞留 37 天、零外部贡献；存在贡献者流失风险 |

**成熟度跃迁信号**: NanoBot 今日完成"可靠性三支柱"（模型容灾、MCP 健壮性、测试覆盖率），标志从 v0.1.x "功能验证期"进入"生产可用期"；LobsterAI 批量消化 50 天积压 PR，技术债务清偿后释放迭代加速度。

---

## 7. 值得关注的趋势信号

| 趋势 | 证据链 | 对开发者的参考价值 |
|:---|:---|:---|
| **"推理模型原生"成为基础设施假设** | OpenClaw #68596（👍7 看门狗配置）、NanoBot #3760（DeepSeek V4 400 错误）、PicoClaw #2306（thinking_level 修复）、ZeroClaw #6643（GLM-5.1 思考泄露） | 设计超时/重试/流式协议时，**默认按 120s+ 思考时间建模**；`reasoning_content` 字段处理需纳入 Provider 适配标准 checklist |
| **企业级安全从"功能"变为"准入门槛"** | ZeroClaw #6613（配对码强度）、#6528（系统 CA 信任）；NanoClaw #3768（dmPolicy 白名单）、#3770/#3771（Telegram 安全）；CoPaw #4244（shell 静默阻断） | 自托管部署需预设**最小权限原则**：默认阻断多行命令、强制 alphanumeric 配对码、IM 渠道聊天级 ACL；安全策略与可用性的平衡需可配置 |
| **"幽灵失败"比"显式报错"更具破坏性** | OpenClaw Slack 静默断连、NanoBot "No errors, nothing interesting"、NanoClaw 文件权限静默失败、CoPaw 配置与行为不一致 | 设计通道/工具/配置系统时，**强制要求 ERROR 级别日志 + 用户侧横幅提示**；避免"配置有效但运行时 fallback 到默认值"的隐式行为 |
| **可观测性从"锦上添花"到"生产必备"** | NanoClaw #2456（LangFuse）、ZeroClaw #6009/#6641/#6642（OTel 全链路）、NanoBot #3769（`doctor` CLI 提案） | 新项目启动时应**预埋 tracing 埋点**（工具调用时序、上下文压缩 token 数、Provider 延迟分位值）；开源 `doctor` 模式成为社区预期标准 |
| **技能/插件架构从"静态加载"走向"动态进化"** | ZeroClaw #6594（Hermes 审查分叉）、Hermes Agent #25302（memory 插件外置化）、IronClaw #3572（WASM 组件化）、CoPaw #4282（`/make-skill` 会话转技能） | 插件系统设计需预留**自我改进接口**：post-turn 审查、自动摘要提取、版本化回滚；WASM 作为安全沙箱与性能的平衡点值得预研 |
| **社区贡献的"单点瓶颈"风险** | NanoClaw `aqilaziz` 15/29 待合并 PR、PicoClaw `Alix-007` 密集贡献、Hermes Agent `fwends` 单日 6 Issue | 维护者需建立**审查轮值机制**，避免核心贡献者 burnout；自动化工具（clawsweeper bot）应获优先处理通道 |

---

*报告生成时间: 2026-05-14 | 分析基于各项目 GitHub 公开仓库 24h 动态数据*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-14

## 1. 今日速览

NanoBot 今日呈现**高活跃度维护状态**：24小时内处理 **14 个 Issue** 和 **8 个 PR**（合并/关闭），同时仍有 **5 个 Issue 待处理** 和 **9 个 PR 待合并**。社区核心诉求集中在**模型容灾切换**（已落地）、**会话上下文持久化**（修复中）和**多通道安全管控**（新提案）三大方向。值得注意的是，今日新增 2 个 Telegram 安全相关 PR 和 1 个诊断工具提案，显示项目正从"功能扩展"向"企业级可靠性"演进。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### ✅ 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#3756](https://github.com/HKUDS/nanobot/pull/3756) `feat(runner): model failover with fallback_models` | chengyongru | **模型级联容灾**：`fallback_models` 支持跨 Provider 自动切换，主模型失败时按序回退 | 🔴 **里程碑**：解决长期痛点 #3376，标志 NanoBot 从"单点模型"进入"多活架构" |
| [#3740](https://github.com/HKUDS/nanobot/pull/3740) `fix(mcp): probe HTTP port before connecting` | chengyongru | MCP 启动前 TCP 探活，防止事件循环崩溃 | 修复生产环境启动稳定性，关联关闭 #3739 |
| [#3655](https://github.com/HKUDS/nanobot/pull/3655) `feat(reason): display model reasoning content during streaming` | Flinn-X | 流式输出中展示模型推理过程（`show_reasoning` 配置） | 回应 #1860 需求，提升 DeepSeek/R1 等推理模型交互透明度 |
| [#1923](https://github.com/HKUDS/nanobot/pull/1923) `feat: add exec output truncation config` | ethanclaw | Exec 工具输出截断可配置（`max_output` + `truncate_mode: head/tail/both`） | 关闭 #1871，解决长输出场景下"头部/尾部信息取舍"痛点 |
| [#3766](https://github.com/HKUDS/nanobot/pull/3766) `test(agent): expand coverage and refactor test structure` | chengyongru | 新增 121 个测试，拆分 3313 行巨型测试文件为 9 个模块 | 技术债务清理，为后续快速迭代奠定质量基线 |

**整体里程碑评估**：今日合并的 PR 标志着 NanoBot 完成 **"可靠性三支柱"**（模型容灾、MCP 健壮性、测试覆盖率）的关键建设，项目成熟度从 v0.1.x 的"功能验证期"向"生产可用期"显著迈进。

---

## 4. 社区热点

### 🔥 讨论最活跃的议题

| 排名 | Issue/PR | 互动数据 | 核心诉求分析 |
|:---|:---|:---|:---|
| **#1** | [#235](https://github.com/HKUDS/nanobot/issues/235) `"I've completed processing but have no response to give."` | 👍 9, 💬 15, 已关闭 | **经典幽灵回复 Bug**：Telegram + DeepSeek 组合下模型返回空内容，用户侧无错误提示。高互动反映该问题影响面广，最终解决方案为模型切换/重试机制 |
| **#2** | [#3376](https://github.com/HKUDS/nanobot/issues/3376) `[enhancement] 支持模型异常自动切换` | 👍 1, 💬 13, 已关闭 | **生产容灾刚需**：用户明确对比"单 Provider 内重试" vs "跨 Provider 切换"，推动 #3756 落地。评论区出现多 Provider 配置最佳实践讨论 |
| **#3** | [#3689](https://github.com/HKUDS/nanobot/issues/3689) `[enhancement] 中断会话丢失上一轮会话的聊天记录` | 👍 0, 💬 5, **仍开放** | **交互体验断裂**：用户打断循环任务后，Agent 无法回溯上下文，被迫"重新开始"。诉求从"记住对话"升级为"记住执行步骤"，关联 PR #3765 修复中 |

**背后信号**：社区正从"能用"转向"好用"——空回复、上下文丢失、任务中断恢复等**边缘场景体验**成为关注焦点，反映真实用户负载增长。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#3760](https://github.com/HKUDS/nanobot/issues/3760) `deepseek-v4-flash + post3: reasoning_content 导致的 400 错误` | **开放** | DeepSeek V4 的 `reasoning_content` 字段触发 API 校验失败，影响推理模型核心场景 | ❌ 暂无；需适配 DeepSeek API 协议变更 |
| 🟡 **中** | [#3726](https://github.com/HKUDS/nanobot/issues/3726) `[bug] 上下文压缩bug。导致系统无法运行` | 已关闭 | Token 压缩时 `no safe boundary` 导致循环崩溃 | ✅ #3765 修复中（`AutoCompact._archive()` 指针推进逻辑） |
| 🟡 **中** | [#3739](https://github.com/HKUDS/nanobot/issues/3739) `[bug] mcp服务未启动的情况下，启动nanobot agent报错` | 已关闭 | MCP 未就绪时事件循环未捕获异常崩溃 | ✅ #3740 |
| 🟢 **低** | [#1640](https://github.com/HKUDS/nanobot/issues/1640) `session stuck even after manual memory file deletion` | 已关闭 | GLM-4.7 云模型会话状态持久化异常，手动删文件无法重置 | 已关闭，方案待确认 |
| 🟢 **低** | [#1777](https://github.com/HKUDS/nanobot/issues/1777) `请求 xxx.onrender.com 的接口会遇到 403` | 已关闭 | 系统提示词中的 Python 代码片段触发 Render WAF 拦截 | 已关闭，提示词优化 |

**关键风险**：[#3760](https://github.com/HKUDS/nanobot/issues/3760) 是**今日唯一未修复的高严重 Bug**，DeepSeek V4 系列模型的 `reasoning_content` 协议变更可能导致推理功能完全不可用，需紧急跟进。

---

## 6. 功能请求与路线图信号

| 提案 | 类型 | 状态 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|:---|
| [#3769](https://github.com/HKUDS/nanobot/issues/3769) `nanobot doctor` — 配置与通道健康诊断 CLI | 工具/可观测性 | **新开放** | ⭐⭐⭐⭐⭐ **极高** | 直接对标 `openclaw doctor` 成熟模式，社区高频调试痛点，实现成本低 |
| [#3768](https://github.com/HKUDS/nanobot/issues/3768) `dmPolicy` — 未知发件人配对/白名单 | 安全/访问控制 | **新开放** | ⭐⭐⭐⭐⭐ **极高** | 同日已有 2 个 Telegram 安全 PR（#3770 聊天级访问规则、#3771 健康检查），安全主题成今日焦点 |
| [#3746](https://github.com/HKUDS/nanobot/issues/3746) WebUI markdown 预加载 chunk 优化 (>1MB) | 性能 | **开放** | ⭐⭐⭐⭐☆ 高 | 明确性能数据，前端优化独立性强 |
| [#3742](https://github.com/HKUDS/nanobot/issues/3742) `/model` slash 命令动态切换模型 | 交互增强 | 已关闭 | — | 功能已被 #3756 `fallback_models` 覆盖，维护者引导使用配置方式 |
| [#3689](https://github.com/HKUDS/nanobot/issues/3689) 中断会话保留上下文 | 体验 | 开放 | ⭐⭐⭐⭐⭐ **极高** | PR #3765 已提交，预计近期合并 |

**路线图信号**：安全管控（DM 白名单 + 聊天级授权）和可观测性（doctor 诊断）形成**"企业准入"主题**，预示项目可能向团队/组织级部署场景扩展。

---

## 7. 用户反馈摘要

### 😤 核心痛点

| 场景 | 原声引用 | 频率 |
|:---|:---|:---|
| **模型单点故障** | "多 provider 已经提前配置好的情况下，任务仍然因为单点异常而中断" | 高频 |
| **幽灵回复** | "No errors, nothing interesting being outputted" — 失败静默 | 高频 |
| **上下文断裂** | "打断的时候应该让nanobot仍然记住对话，甚至记住它执行到了什么步骤" | 中频 |
| **安全裸奔** | "Anyone who knows (or guesses) your bot's handle can consume your API quota" | 新增 |

### 😊 满意点

- **配置灵活性**：exec 输出截断配置（#1871/#1923）被快速响应，用户认可"tail 模式更有用"
- **社区响应速度**：#3376 从提案到 #3756 合约为 22 天，容灾需求得到优先处理

### 🎯 典型使用场景

- **中国大陆用户**：Codex/GPT-5.5 网络不稳定，需要 `/model` 或自动 fallback 切换（#3742, #3756）
- **本地+云端混合**：Ollama/vLLM 本地端点 + 云模型，并发控制敏感（#3693）
- **多 IM 部署**：Telegram/WhatsApp/QQ 并行，各通道 UX 一致性诉求（#3761 WhatsApp 打字指示器）

---

## 8. 待处理积压

| 类型 | 项目 | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|:---|
| **PR** | [#3693](https://github.com/HKUDS/nanobot/pull/3693) `fix(agent): centralize LLM concurrency gate` | 2026-05-08 | 2026-05-13 | ⚠️ **6 天待审**：本地 LLM 并发控制修复，关联 Ollama/vLLM 用户连接超时，影响核心体验 |
| **PR** | [#3460](https://github.com/HKUDS/nanobot/pull/3460) `feat(long-task): add LongTaskTool` | 2026-04-26 | 2026-05-13 | ⚠️ **18 天待审**：多步 Agent 任务分解，与今日上下文丢失议题（#3689）高度相关，可能互为依赖 |
| **Issue** | [#3760](https://github.com/HKUDS/nanobot/issues/3760) DeepSeek V4 400 错误 | 2026-05-12 | 2026-05-13 | 🔴 **紧急**：推理模型核心功能损坏，无修复 PR |
| **PR** | [#3643](https://github.com/HKUDS/nanobot/pull/3643) `feat(provider): add Qiniu provider` | 2026-05-06 | 2026-05-13 | 8 天待审，国内云厂商扩展，与七牛云生态相关 |

**维护者行动建议**：
1. **优先**：评审 #3693 并发控制修复，缓解本地 LLM 用户痛点
2. **紧急**：为 #3760 分配开发者适配 DeepSeek V4 协议
3. **协调**：评估 #3460 与 #3765 的上下文持久化方案是否冲突，避免重复建设

---

*日报生成时间：2026-05-14 | 数据来源：HKUDS/nanobot GitHub 公开活动*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-14

---

## 1. 今日速览

Hermes Agent 今日呈现**高活跃度、高压力**态势：24小时内 **50 Issues + 50 PRs** 的吞吐量表明社区参与密集，但 **47:3 的开放/关闭比** 和 **22:28 的待合并/已处理比** 显示维护队列正在承压。v0.13.0 更新引发**系统性回归**——cron 数据丢失、模型配置清空、认证失效成为集中爆发的痛点，社区用户 `fwends` 单日提交 6 个相关 Issue。与此同时，核心贡献者快速响应，当日已有关键修复 PR 针对最严重的数据丢失问题。无新版本发布。

---

## 2. 版本发布

**无新版本发布**

> 注：v0.13.0（2026-05-07）的后续影响持续发酵，成为今日多数 Bug 报告的根因。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| **#25297** `fix(profile): exclude cron from distribution payload on update` | shanewas | **关键修复**：解决 v0.13.0 更新时 dashboard "Update" 按钮**清空所有 cron 任务**的严重 Bug（#25281） | [PR #25297](https://github.com/NousResearch/hermes-agent/pull/25297) |
| **#25298** `fix(cli): preserve systemd unit paths when service user differs from CLI user` | zccyman | 修复 `hermes update` 错误覆写 systemd 服务路径，解决服务账户部署场景下的配置破坏（#25282） | [PR #25298](https://github.com/NousResearch/hermes-agent/pull/25298) |
| **#25299** `feat(skills): unified EVM multi-chain skill` | teknium1 | 合并 8 链 14 命令的统一 EVM 技能，替代此前碎片化的 #25291/#2010/base 实现 | [PR #25299](https://github.com/NousResearch/hermes-agent/pull/25299) |
| **#25302** `docs: close in-tree memory plugins to new PRs` | teknium1 | **架构决策**：关闭 9 个内置 memory provider 的新 PR，强制外置插件化，降低核心维护负担 | [PR #25302](https://github.com/NousResearch/hermes-agent/pull/25302) |
| **#25301** `fix(deepseek): subclass ProviderProfile so reasoning_effort + thinking reach the API` | Unveiling9559 | 修复 DeepSeek 插件的 reasoning 参数传递断裂 | [PR #25301](https://github.com/NousResearch/hermes-agent/pull/25301) |
| **#25303** `fix(update): rebase local commits instead of git reset --hard origin` | Unveiling9559 | 将破坏性 `git reset --hard` 改为 rebase，保护用户本地提交 | [PR #25303](https://github.com/NousResearch/hermes-agent/pull/25303) |
| **#24182** `feat(codex-runtime): optional codex app-server runtime` | teknium1 | 为 OpenAI/Codex 模型提供可选的 codex app-server 运行时，对标 openclaw#78899 | [PR #24182](https://github.com/NousResearch/hermes-agent/pull/24182) |

**整体推进评估**：今日合并以 **"救火式修复"** 为主，核心解决 v0.13.0 的升级安全性和数据持久化问题。架构层面，memory 插件外置化和 EVM 技能统一是长期健康的决策，但短期内用户信任修复是首要任务。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|:---|
| 1 | **#18080** Improved Themes for Dashboard — currently hard to read | 6 | 15 | **可访问性危机**：当前主题使用低对比度衬线字体，严重影响可读性；用户要求符合 WCAG 标准的设计系统 | [Issue #18080](https://github.com/NousResearch/hermes-agent/issues/18080) |
| 2 | **#503** Platform-Native Rich Interactions | 4 | 0 | **交互范式升级**：要求从纯文本转向 Telegram/Discord/Slack 的原生内联键盘、执行计划结构化 UI | [Issue #503](https://github.com/NousResearch/hermes-agent/issues/503) |
| 3 | **#25290** Cron jobs split across profile directories | 2 | 0 | **数据架构混乱**：多 profile 系统下 cron 存储碎片化，gateway 与 CLI 互不可见 | [Issue #25290](https://github.com/NousResearch/hermes-agent/issues/25290) |
| 4 | **#25281** Update button deletes all scheduled cron jobs | 2 | 0 | **数据安全**：v0.13.0 的致命回归，已有 PR #25297 修复 | [Issue #25281](https://github.com/NousResearch/hermes-agent/issues/25281) |

**诉求分析**：社区正从"功能丰富度"转向"**质量与可靠性**"。#18080 的 15 个 👍 表明用户体验债务累积已久；#503 长期悬而未决（2026-03-06 创建）反映平台适配的架构债务。v0.13.0 的激进更新策略暴露了**缺乏升级回滚机制和配置迁移测试**的深层问题。

---

## 5. Bug 与稳定性

### 🔴 P1（严重）— 已影响生产

| Issue | 描述 | 根因 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| **#25281** | Dashboard "Update" 按钮清空所有 cron 任务 | profile 更新时 `cron/` 目录被空目录覆写 | ✅ **#25297** | [Issue #25281](https://github.com/NousResearch/hermes-agent/issues/25281) |
| **#25295** | CLI 创建的 cron 任务静默不执行 | profile 碎片化导致 gateway 读取错误路径 | ⏳ 待处理 | [Issue #25295](https://github.com/NousResearch/hermes-agent/issues/25295) |
| **#25272** | v0.13.0 更新后所有自定义模型配置消失 | 升级流程未迁移用户自定义配置 | ⏳ 待处理 | [Issue #25272](https://github.com/NousResearch/hermes-agent/issues/25272) |
| **#25205** | `_restore_primary_runtime` 使用已撤销的 stale api_key | 凭证池轮换后快照未更新 | ⏳ 待处理 | [Issue #25205](https://github.com/NousResearch/hermes-agent/issues/25205) |
| **#21549** | launchd 双实例触发无限重启死循环 | PID 文件竞争 + exit code 1 被 `KeepAlive` 误判 | ⏳ 待处理 | [Issue #21549](https://github.com/NousResearch/hermes-agent/issues/21549) |

### 🟡 P2（高优先级）

| Issue | 描述 | Fix PR | 链接 |
|:---|:---|:---|:---|
| **#25290** | Cron 任务跨 profile 目录碎片化 | ⏳ 待架构决策 | [Issue #25290](https://github.com/NousResearch/hermes-agent/issues/25290) |
| **#25275** | Analytics dashboard API 401 Unauthorized | ⏳ 待处理 | [Issue #25275](https://github.com/NousResearch/hermes-agent/issues/25275) |
| **#25282** | `hermes update` 覆写 systemd 服务路径 | ✅ **#25298** | [Issue #25282](https://github.com/NousResearch/hermes-agent/issues/25282) |
| **#25273** | `/model switch` 未加载新 provider 的凭证池 | ⏳ 待处理 | [Issue #25273](https://github.com/NousResearch/hermes-agent/issues/25273) |
| **#10199** | Agent 未经确认执行破坏性命令（`npm uninstall -g`） | ⏳ 待处理（安全边界缺失） | [Issue #10199](https://github.com/NousResearch/hermes-agent/issues/10199) |

### 🟢 P3（一般）

| Issue | 描述 | 链接 |
|:---|:---|:---|
| **#22999** | Classic CLI 终端 resize 清除启动横幅 | ✅ 已关闭 | [Issue #22999](https://github.com/NousResearch/hermes-agent/issues/22999) |
| **#18581** | ZWJ emoji（🤸‍♀️）触发 prompt injection 过滤器误杀 SOUL.md | ⏳ 待处理（Unicode 处理缺陷） | [Issue #18581](https://github.com/NousResearch/hermes-agent/issues/18581) |

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 纳入可能性 | 关键信号 | 链接 |
|:---|:---|:---|:---|:---|
| **#23717** Pluggable SessionDB Provider (PostgreSQL/MySQL) | 架构扩展 | 🔶 中-高 | 解决 SQLite 热更新死锁的明确痛点；RFC 格式完整 | [Issue #23717](https://github.com/NousResearch/hermes-agent/issues/23717) |
| **#23837** ContextEngine per-turn message observation hook | 插件 API | 🔶 中 | 已有下游插件作者（hermes-mneme）推动，但需避免 `compress()` 滥用 | [Issue #23837](https://github.com/NousResearch/hermes-agent/issues/23837) |
| **#17272** Google Workspace 服务账户 + 创建端点 | 企业功能 | 🔶 中 | 自主部署场景刚需；OAuth 桌面流不适合 CI/服务器 | [Issue #17272](https://github.com/NousResearch/hermes-agent/issues/17272) |
| **#8793** Cron 输出同步到交互会话历史 | 工作流集成 | 🔶 中 | 上下文感知 follow-up 的体验提升 | [Issue #8793](https://github.com/NousResearch/hermes-agent/issues/8793) |
| **#503** 平台原生富交互组件 | 前端重构 | 🔴 低 | 2026-03 创建至今无 PR，架构改动大；与当前"可靠性优先"优先级冲突 | [Issue #503](https://github.com/NousResearch/hermes-agent/issues/503) |

**路线图判断**：短期（v0.13.x）以 **稳定性修复和数据持久化** 为主；中期（v0.14.0）可能引入 **SessionDB 抽象层** 和 **凭证池架构重构**（解决 #25205/#25273 等系统性问题）。

---

## 7. 用户反馈摘要

### 💔 核心痛点

> *"Every time an update is applied, all cron job configurations are destroyed"* — `fwends`, #25281

> *"All custom model configurations have vanished. Only 2 models remain"* — `fwends`, #25272

> *"The selection of fonts and colours is non-standard... little contrast makes the dashboard hard to read"* — `ogermer`, #18080（15 👍）

> *"agents use `crontab -r` and similar commands which wipe the user's actual macOS system crontab, causing real damage"* — `fwends`, #25271

### ✅ 认可场景

- Codex 运行时集成（#24182）被视为对标 openclaw 的竞争力功能
- EVM 多链技能的统一获得快速合并，反映区块链技能社区需求明确

### 🔍 使用模式洞察

| 模式 | 证据 |
|:---|:---|
| **多 profile 生产部署** | `kimicoder`, `coder` 等 profile 与 gateway/CLI 混用导致配置碎片化 |
| **服务账户 + systemd 托管** | `/var/lib/hermes/` 等路径表明用户正将 Hermes 从个人工具转向基础设施 |
| **凭证轮换自动化** | 多个 Issue 涉及 token 过期、rate limit 后的凭证池行为 |

---

## 8. 待处理积压

### ⚠️ 需维护者关注的高龄/高影响 Issue

| Issue | 年龄 | 状态 | 风险 | 链接 |
|:---|:---|:---|:---|:---|
| **#503** Platform-Native Rich Interactions | ~2 个月 | 0 👍, 4 评论 | 平台竞争力差距（Discord/Slack 原生 bot 体验落后） | [Issue #503](https://github.com/NousResearch/hermes-agent/issues/503) |
| **#18080** Dashboard 主题可读性 | ~2 周 | 15 👍, 6 评论 | **可访问性合规风险**；高 👍 未获响应 | [Issue #18080](https://github.com/NousResearch/hermes-agent/issues/18080) |
| **#10199** 破坏性命令无确认 | ~1 个月 | 0 👍, 2 评论 | **安全边界缺失**；`rm -rf` 类风险 | [Issue #10199](https://github.com/NousResearch/hermes-agent/issues/10199) |
| **#21549** launchd 无限重启死循环 | ~1 周 | 0 👍, 1 评论 | macOS 生产部署稳定性 | [Issue #21549](https://github.com/NousResearch/hermes-agent/issues/21549) |
| **#20316** `should_compress_preflight()` 死代码 | ~1.5 周 | 0 👍, 2 评论, `duplicate` | LCM 插件维护状态不明 | [Issue #20316](https://github.com/NousResearch/hermes-agent/issues/20316) |

### 📊 维护健康度指标

| 指标 | 数值 | 评估 |
|:---|:---|:---|
| Issue 日关闭率 | 6% (3/50) | ⚠️ 偏低，积压风险 |
| P1 Bug 修复响应时间 | < 24h (#25281→#25297) | ✅ 紧急响应有效 |
| 用户 `fwends` 单日 Issue 数 | 6 个 | ⚠️ 可能为同一组织的多环境部署，建议主动沟通 |
| 无评论/无 👍 Issue 占比 | ~30% (15/50) | ⚠️ 噪声 Issue 需 triage |

---

*日报生成时间：2026-05-14 | 数据来源：NousResearch/hermes-agent GitHub*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-14

## 1. 今日速览

PicoClaw 今日保持**高活跃度**，24小时内处理 **42 个 PR**（合并/关闭 28，待审 14）和 **10 个 Issues**（关闭 5，活跃 5），社区贡献节奏稳健。项目发布 **v0.2.8-nightly.20260513** 夜间构建，主分支持续迭代。核心进展集中在 **Agent 错误恢复、多用户群聊上下文、工具沙箱安全** 三大方向，同时 **DeepSeek v4 thinking 模型** 和 **钉钉 SDK panic** 等关键 Bug 已获修复。待审 PR 积压中有多项高价值功能（图像生成、OAuth 支持、MCP 容错）等待维护者 review。

---

## 2. 版本发布

### 🔖 v0.2.8-nightly.20260513.223ebdf0
- **类型**: 自动化夜间构建（可能不稳定，生产环境慎用）
- **完整变更日志**: https://github.com/sipeed/picoclaw/compare/v0.2.8...main
- **状态**: 自 v0.2.8 以来的主分支累积更新，包含未进入稳定版的修复与功能

> ⚠️ **迁移注意**: 夜间构建无稳定性保证，建议测试环境验证后再部署。关注后续正式版 release note 以获取破坏性变更说明。

---

## 3. 项目进展

### ✅ 今日合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 影响 |
|:---|:---|:---|:---|
| [#2715](https://github.com/sipeed/picoclaw/pull/2715) | is-Xiaoen | **多用户群聊消息归属**: 为 Discord/Telegram/Slack 群聊添加按发送者归因历史消息 | 解决群聊场景下 AI 混淆用户身份的核心痛点，提升多用户体验 |
| [#2383](https://github.com/sipeed/picoclaw/pull/2383) | Alix-007 | **Gateway CLI 生命周期管理**: 新增 `picoclaw gateway status/stop` 命令 | 运维友好性提升，支持优雅停机和状态查询 |
| [#2311](https://github.com/sipeed/picoclaw/pull/2311) | Alix-007 | **会话归档历史保留**: 修复摘要截断后丢失归档聊天记录的问题 | 数据完整性保障，满足合规与审计需求 |
| [#2309](https://github.com/sipeed/picoclaw/pull/2309) | Alix-007 | **严格模式 Provider 工具调用规范化**: 按 turn 归一化 tool-call 历史 | 提升与 OpenAI 等严格 API 的兼容性，减少 400 错误 |
| [#2306](https://github.com/sipeed/picoclaw/pull/2306) | Alix-007 | **thinking_level 直连模型引用生效**: 修复通过 model ref 指定模型时思考级别被忽略 | DeepSeek/Claude 等推理模型配置正确性 |
| [#2199](https://github.com/sipeed/picoclaw/pull/2199) | Alix-007 | **Telegram 回复上下文保留**: 回复消息携带引用关系，同时避免命令冲突 | 对话连贯性提升 |
| [#2183](https://github.com/sipeed/picoclaw/pull/2183) | Alix-007 | **子 Agent 模型 ID 规范化**: 阻止 OpenRouter 前缀错误传递 | 子 Agent 稳定性 |
| [#2175](https://github.com/sipeed/picoclaw/pull/2175) | Alix-007 | **空闲轮询优化**: 避免重复本地模型探测 | 降低 Gateway 空闲负载 |
| [#2170](https://github.com/sipeed/picoclaw/pull/2170) | Alix-007 | **按模型自定义 HTTP Header**: OpenAI 兼容 Provider 支持 `extra_headers` | 企业代理/认证场景扩展性 |
| [#2153](https://github.com/sipeed/picoclaw/pull/2153) | Alix-007 | **Telegram /models 快捷命令**: 一键列出/切换模型 | 交互效率提升 |

**整体评估**: 今日合并 PR 以 **稳定性修复和边缘场景覆盖** 为主，Alix-007 贡献密集，项目基础设施（CLI、会话、Provider 兼容性）显著加固。多用户群聊支持是功能层面的重要里程碑。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 | 分析 |
|:---|:---|:---|:---|:---|
| 1 | [#1950](https://github.com/sipeed/picoclaw/issues/1950) Web Chat 流式输出 | 8 条 | Web 界面实时打字机效果 | **长期需求**（3月创建），标记为 nice-to-have，与 [#2404](https://github.com/sipeed/picoclaw/issues/2404) 配置层流式请求形成上下层联动，需架构层面统一设计 |
| 2 | [#2404](https://github.com/sipeed/picoclaw/issues/2404) 配置层流式 HTTP 请求 | 6 条 | 类似 Python OpenAI client 的 `stream=True` | 用户希望 **LLM 后端级流式**，非前端展示层；当前配置体系缺乏该开关，Provider 层需改造 |
| 3 | [#2368](https://github.com/sipeed/picoclaw/issues/2368) Android 本地模型配置失效 | 6 条 | APK 中模型显示"未配置"无法选择 | **已关闭**，但反映移动端配置同步存在 UX 断层，Web 端配置与 App 状态不一致 |

**社区信号**: 流式输出是 **双轨需求**（前端展示 + 后端传输），用户期待端到端体验，但项目当前分层实现可能导致体验割裂。WhatsApp 预编译构建 ([#2625](https://github.com/sipeed/picoclaw/issues/2625)) 获 👍1，边缘设备部署痛点明确。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 状态 | 问题描述 | Fix 可用性 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#2769](https://github.com/sipeed/picoclaw/issues/2769) 多 Provider 401 认证失败 | **OPEN** | Groq/OpenRouter/Nvidia 有效 API key 返回 401，疑似 key 解析/传递 Bug | ❌ **无 PR**，需紧急排查 |
| 🔴 **高** | [#2704](https://github.com/sipeed/picoclaw/issues/2704) 钉钉 SDK panic 致 Gateway 崩溃 | **CLOSED** | `dingtalk-stream-sdk-go` 竞态条件，向关闭 channel 发数据 | ✅ **已修复**（今日关闭） |
| 🔴 **高** | [#2706](https://github.com/sipeed/picoclaw/issues/2706) DeepSeek v4 thinking 模型 400 错误 | **CLOSED** | `reasoning_content` 未保存回传 | ✅ **已修复**（[#2306](https://github.com/sipeed/picoclaw/pull/2306) 关联） |
| 🟡 **中** | [#2859](https://github.com/sipeed/picoclaw/issues/2859) 小米 MIMO 多轮对话 400 | **OPEN** | 微信渠道，2-3 轮后参数错误 | ❌ **无 PR**，Provider 适配问题 |
| 🟡 **中** | [#2768](https://github.com/sipeed/picoclaw/pull/2768) 瞬态 HTTP 错误重试 | **OPEN** | OpenRouter 500 错误导致 Agent turn 立即失败 | 🔄 **PR 待审** |
| 🟡 **中** | [#2725](https://github.com/sipeed/picoclaw/pull/2725) MCP 初始化失败非致命化 | **OPEN** | 全部 MCP 连接失败时 Gateway 僵尸状态 | 🔄 **PR 待审** |
| 🟢 **低** | [#2693](https://github.com/sipeed/picoclaw/pull/2693) `find /` 沙箱绕过 | **OPEN** | 工作区沙箱逃逸漏洞 | 🔄 **PR 待审** |

**稳定性评估**: 今日关闭 2 个高危崩溃/兼容性问题，但 **[#2769](https://github.com/sipeed/picoclaw/issues/2769) 多 Provider 认证失败** 是新的回归风险，影响核心功能且无修复方案，建议优先级置顶。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 状态 | 纳入可能性评估 |
|:---|:---|:---|:---|
| **Web Chat 流式输出** | [#1950](https://github.com/sipeed/picoclaw/issues/1950) | Open | ⭐⭐⭐ 高，与 [#2404](https://github.com/sipeed/picoclaw/issues/2404) 形成完整链路，需架构协调 |
| **配置层流式 HTTP** | [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Open | ⭐⭐⭐ 高，实现成本低，用户呼声明确 |
| **WhatsApp 预编译构建** | [#2625](https://github.com/sipeed/picoclaw/issues/2625) | Open | ⭐⭐☆ 中，编译标志调整，但可能增加构建矩阵复杂度 |
| **Provider 图像生成工具** | [#2760](https://github.com/sipeed/picoclaw/pull/2760) | Open PR | ⭐⭐⭐ 高，PR 已提交，disabled-by-default 设计降低风险 |
| **OpenAI/Codex OAuth 支持** | [#2757](https://github.com/sipeed/picoclaw/pull/2757), [#2679](https://github.com/sipeed/picoclaw/pull/2679) | Open PR ×2 | ⭐⭐⭐ 高，双 PR 竞争，需维护者择一合并 |
| **update_plan 工具移植** | [#2765](https://github.com/sipeed/picoclaw/pull/2765) | Open PR | ⭐⭐☆ 中，OpenClaw 生态对齐，但非核心路径 |
| **get_current_time 工具** | [#2691](https://github.com/sipeed/picoclaw/pull/2691) | Open PR | ⭐⭐☆ 中，基础工具，但 Agent 已可通过代码获取时间 |
| **V3 配置格式文档同步** | [#2766](https://github.com/sipeed/picoclaw/pull/2766) | Open PR | ⭐⭐⭐ 高，26 文件变更，文档债务需清偿 |
| **OpenCode Provider 支持** | [#2671](https://github.com/sipeed/picoclaw/issues/2671) | Closed | ⭐☆☆ 低，已关闭，需求小众 |

**下一版本信号**: **v0.2.8** 正式版可能包含 OAuth 支持、图像生成工具、V3 文档同步；流式输出或需等待 v0.3.0 架构调整。

---

## 7. 用户反馈摘要

### 😫 痛点
- **认证层脆弱**: "[有效 API key 全返回 401](https://github.com/sipeed/picoclaw/issues/2769)" — 跨 Provider 的 key 管理存在系统性问题
- **移动端配置断层**: "[Web 配完 App 显示未配置](https://github.com/sipeed/picoclaw/issues/2368)" — 多端状态同步缺失
- **边缘设备部署难**: "[Raspberry Pi Zero 2 需手动编译 WhatsApp](https://github.com/sipeed/picoclaw/issues/2625)" — 预构建覆盖不足
- **第三方 SDK 质量**: "[钉钉 SDK panic 6 次](https://github.com/sipeed/picoclaw/issues/2704)" — 外部依赖稳定性拖累整体

### 😊 满意/期待
- **群聊场景认可**: 多用户消息归属 PR 被积极采纳，说明企业/社区群聊是真实使用场景
- **工具可扩展性**: 用户主动提出 `update_plan`、`get_current_time` 等工具移植，生态参与度高
- **快速迭代感知**: 夜间构建持续发布，用户愿意测试并反馈 nightly 问题

---

## 8. 待处理积压

### ⏰ 需维护者紧急关注

| 类型 | 条目 | 闲置时间 | 风险/价值 |
|:---|:---|:---|:---|
| **Bug 无修复** | [#2769](https://github.com/sipeed/picoclaw/issues/2769) 多 Provider 401 失败 | 10 天 | 🔴 **核心功能回归**，影响所有 OAuth/key 用户 |
| **PR 竞争** | [#2757](https://github.com/sipeed/picoclaw/pull/2757) vs [#2679](https://github.com/sipeed/picoclaw/pull/2679) OpenAI OAuth | 9-18 天 | 功能重复实现，需决策合并哪条路线 |
| **安全漏洞** | [#2693](https://github.com/sipeed/picoclaw/pull/2693) 沙箱绕过 | 16 天 | 工作区隔离失效，多租户场景高危 |
| **架构债务** | [#2766](https://github.com/sipeed/picoclaw/pull/2766) V3 文档同步 | 9 天 | 26 文件变更，文档与代码脱节越久迁移成本越高 |
| **Agent 韧性** | [#2725](https://github.com/sipeed/picoclaw/pull/2725) MCP 失败非致命化 | 13 天 | 生产环境 Gateway 僵尸状态风险 |
| **Provider 适配** | [#2859](https://github.com/sipeed/picoclaw/issues/2859) 小米 MIMO 多轮对话 | 1 天 | 新兴国产模型适配，需快速响应 |

---

**日报生成时间**: 2026-05-14  
**数据来源**: github.com/sipeed/picoclaw  
**下次关注**: [#2769](https://github.com/sipeed/picoclaw/issues/2769) 认证回归是否获紧急修复、OAuth PR 合并决策

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-14

## 1. 今日速览

NanoClaw 今日呈现**高强度开发活跃期**：24小时内26个PR流转（21条已合并/关闭，5条待审），8个Issue更新（7条活跃/新开，1条关闭），无新版本发布。核心特征是**营销/运营技能栈大规模本地化**（fresheldidea 单日贡献9个PR），同时**CLI基础设施与跨平台兼容性**成为社区痛点集中区。语音转写、可观测性、Slack/Teams集成修复等工程能力同步推进，项目处于功能扩张与稳定性加固并行的关键阶段。

---

## 2. 版本发布

**无新版本发布** — 今日未标记任何 Release。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（21条）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2455](https://github.com/nanocoai/nanoclaw/pull/2455) | fresheldidea | **audit-website 技能重写**：以自托管的 Lighthouse + axe + linkinator 替代 squirrelscan，解决 Cloudflare AI 工具防护导致的容器环境阻塞 | 消除外部依赖单点故障，企业合规审计场景可用性↑ |
| [#2452](https://github.com/nanocoai/nanoclaw/pull/2452) | fresheldidea | 容器内预装 Lighthouse 13.3.0，复用现有 Chromium | 为 #2455 提供运行时基础 |
| [#2458](https://github.com/nanocoai/nanoclaw/pull/2458) + [#2459](https://github.com/nanocoai/nanoclaw/pull/2459) | mtichikawa | **Chat SDK 桥接层语音转写** + **Discord 语音技能**：基于 whisper.cpp 的纯本地、零云 API 语音转文字 | 隐私敏感场景突破，与 #2317 形成完整方案 |
| [#2456](https://github.com/nanocoai/nanoclaw/pull/2456) | dustinlucien | **Claude Provider 接入 LangFuse 可观测性**：追踪延迟、API 错误、工具调用时序、上下文压缩 token 数 | 生产环境调试能力质变，AIOps 基础 |
| [#2460](https://github.com/nanocoai/nanoclaw/pull/2460) | madevizslove183 | **Slack 权限修复**：setup 流程补全 `files:read`/`files:write` scope | 关闭 [#2457](https://github.com/nanocoai/nanoclaw/issues/2457)，文件附件静默失败根因消除 |
| [#2443](https://github.com/nanocoai/nanoclaw/pull/2443) | flusterff | **Slack AI-to-AI 消息自动补全 peer mention**：`SLACK_PEER_MENTIONS` 环境变量配置 | 多 agent 协作场景的消息可达性修复 |
| [#2447](https://github.com/nanocoai/nanoclaw/pull/2447) ~ [#2450](https://github.com/nanocoai/nanoclaw/pull/2450) + [#2445](https://github.com/nanocoai/nanoclaw/pull/2445) + [#2446](https://github.com/nanocoai/nanoclaw/pull/2446) | fresheldidea | **营销技能矩阵本地化**：Reddit MCP、Serper 搜索、Firecrawl、社交聆听、LinkedIn 社区管理 + 广告投放 | 从"外部技能目录引用"转向"自包含可编辑"，降低上游移除风险 |
| [#2442](https://github.com/nanocoai/nanoclaw/pull/2442) | Koshkoshinsk | **核心指令修复**：单目的地 agent 强制要求 `<message to="name">` 包裹 | 消除消息静默丢失至 scratchpad 的隐性故障 |

**整体评估**：今日合并密度极高，覆盖**可观测性基础设施**、**隐私优先的 AI 能力**、**企业 IM 集成修复**、**营销自动化技能栈**四大战略方向，项目从"原型框架"向"生产级平台"的转型信号明确。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---:|:---|
| 1 | [#869](https://github.com/nanocoai/nanoclaw/issues/869) Per-group credential management | **3 评论** | **长期结构性需求**：多租户场景下 API quota 隔离与身份分离，涉及 .env 架构重构。3月创建至今未关闭，反映**安全与成本治理**在规模化部署中的优先级上升 |
| 2 | [#1787](https://github.com/nanocoai/nanoclaw/issues/1787) macOS `/setup` merge conflicts | **2 评论** | **Apple Silicon 开发者体验痛点**：skill/apple-container 分支与 v2 主线冲突，首次 setup 即失败，阻碍 macOS 原生容器运行时采纳 |
| 3 | [#2457](https://github.com/nanocoai/nanoclaw/issues/2457) → 已关闭 | **1 评论** | **快速响应范例**：Slack 文件权限缺失导致静默失败，当日即获 #2460 修复，体现文档-代码同步机制仍有漏洞 |

**诉求洞察**：开发者群体（尤其 macOS/Apple Silicon 用户）的**首次安装体验**与**多租户安全隔离**构成两大张力场。前者需要分支合并策略重构，后者触及核心凭证架构。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **High** | [#2465](https://github.com/nanocoai/nanoclaw/issues/2465) | **OPEN** | `ncl destinations add` 审批流程后，接收方 session-local `inbound.db` 未同步，导致 `send_message` 路由失败，**重启不可恢复** | ❌ 无 |
| 🔴 **High** | [#1787](https://github.com/nanocoai/nanoclaw/issues/1787) | **OPEN** | macOS `/setup` Apple Container 运行时 6 处 merge conflicts，**阻断新用户 onboarding** | ❌ 无 |
| 🟡 Medium | [#2464](https://github.com/nanocoai/nanoclaw/issues/2464) | **OPEN** | Group scope 下 `--agent-group-id` 被静默覆盖，无 stderr/exit code，**操作员信任链断裂** | ❌ 无 |
| 🟡 Medium | [#2462](https://github.com/nanocoai/nanoclaw/issues/2462) | **OPEN** | `setup/install-node.sh` 仅支持 Debian/Ubuntu，Fedora/RHEL/Arch/Alpine **全系列失败** | ❌ 无 |
| 🟡 Medium | [#2461](https://github.com/nanocoai/nanoclaw/issues/2461) | **OPEN** | Teams setup `supportsFiles: false` 硬编码，**文件附件静默失败**（Slack #2457 等价问题） | ❌ 无 |
| 🟢 Low | [#2463](https://github.com/nanocoai/nanoclaw/issues/2463) | **OPEN** | 文档未明确 `--agent-group-id` 为 **locked** 而非 default | ❌ 无 |

**稳定性评估**：CLI 基础设施存在**系统性脆弱性**——目的地同步、参数覆盖透明度、跨平台安装脚本、多 IM 平台文件能力配置，四个独立故障点指向同一根因：**边缘场景测试覆盖不足 + 配置即代码的验证缺失**。Teams 文件问题 (#2461) 与已修复的 Slack 问题 (#2457) 模式完全一致，表明**平台适配存在重复性遗漏**。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 成熟度判断 | 纳入可能性 |
|:---|:---|:---|:---|
| **Per-group 凭证隔离 + 交互式重认证** | [#869](https://github.com/nanocoai/nanoclaw/issues/869) | 3月提出，3评论，设计空间已展开（channels 重认证、token rotation、quota 隔离） | ⭐⭐⭐⭐☆ **高** — 多租户商业化前置条件 |
| **纯本地语音转写（whisper.cpp）** | [#2459](https://github.com/nanocoai/nanoclaw/pull/2459) + [#2458](https://github.com/nanocoai/nanoclaw/pull/2458) | **已合并**，覆盖 Discord 及全 Chat SDK 桥接 | ✅ **已纳入** |
| **LangFuse 可观测性** | [#2456](https://github.com/nanocoai/nanoclaw/pull/2456) | **已合并**，生产级 tracing | ✅ **已纳入** |
| **营销技能矩阵扩展** | fresheldidea 系列 PR | **已批量合并**，Reddit/Serper/Firecrawl/LinkedIn/社交聆听 | ✅ **已纳入** |
| **CLI 参数覆盖警告** | [#2464](https://github.com/nanocoai/nanoclaw/issues/2464) | 同日提出，与 #2463 文档澄清成对出现 | ⭐⭐⭐⭐☆ **高** — 低实现成本，高运维价值 |

**路线图信号**：项目正从"功能广度扩张"转向"企业深度适配"。凭证隔离 (#869) 是剩余的最大架构债务，预计将在 v2.x 周期内获得设计 RFC。

---

## 7. 用户反馈摘要

> **痛点提炼**（基于 Issue 描述与复现步骤）

| 场景 | 痛点 | 情绪信号 |
|:---|:---|:---|
| **Slack/Teams 首次配置** | 官方 walkthrough 遗漏权限 scope，文件功能**静默失败**无报错，用户需抓包或阅读源码才能定位 | 😤 **挫败感强** — "silently fail" 出现 3 次 |
| **macOS 开发环境** | `/setup` 即遭遇 merge conflicts，**"fresh fork + clone" 黄金路径断裂** | 😤 ** onboarding 阻断** |
| **Linux 多样性** | Fedora/RHEL 用户被 NodeSource 安装脚本直接拒绝，**无 fallback 路径** | 😤 **平台排斥感** |
| **CLI 多租户操作** | 显式传入参数被静默覆盖，**"believes they changed it, but nothing happened"** — 信任崩塌 | 😰 **安全感缺失** |
| **目的地审批流程** | 中央 DB 写入成功但本地 DB 未同步，**分布式状态不一致**，重启不恢复 | 😰 **数据可靠性焦虑** |

> **满意点**：语音转写的纯本地方案（"No cloud API, no OPENAI_API_KEY"）、LangFuse 可观测性、营销技能本地化 — **自主可控** 是核心价值锚点。

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后更新 | 风险等级 | 提醒 |
|:---|:---|:---|:---:|:---|
| [#869](https://github.com/nanocoai/nanoclaw/issues/869) Per-group credential management | 2026-03-09 | 2026-05-13 | 🔴 **高** | **66天未关闭**，多租户商业化 blocker，需维护者确认是否纳入 v2.x RFC |
| [#1787](https://github.com/nanocoai/nanoclaw/issues/1787) macOS setup merge conflicts | 2026-04-15 | 2026-05-13 | 🔴 **高** | **29天未关闭**，Apple Silicon 开发者体验持续受损，建议优先 rebase skill/apple-container 分支 |
| [#2187](https://github.com/nanocoai/nanoclaw/pull/2187) CLI bare platform id namespace fix | 2026-05-02 | 2026-05-13 | 🟡 **中** | **12天待合并**，修复 CLI channel 的 ID 命名空间问题，影响平台标识一致性 |
| [#2411](https://github.com/nanocoai/nanoclaw/pull/2411) Scheduled task silent skip | 2026-05-11 | 2026-05-13 | 🟡 **中** | **3天待合并**，定时任务静默无操作，生产环境可靠性风险 |

---

*日报生成时间：2026-05-14 | 数据来源：NanoClaw GitHub 仓库（github.com/qwibitai/nanoclaw）*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-14

> **项目**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **日期**: 2026-05-14  
> **分析周期**: 过去 24 小时（2026-05-13 至 2026-05-14）

---

## 1. 今日速览

NullClaw 今日活跃度**偏低**，仅产生 1 条 Issue 和 1 条 PR 更新，无版本发布。社区贡献以**工具生态扩展**和**调度引擎强化**两条主线推进：JIRA 集成工具的新需求表明企业项目管理场景正成为用户关注焦点；而沉寂多时的 Cron 子代理 PR 于昨日重新获得更新，显示核心调度能力仍在持续打磨。整体项目处于**功能积淀期**，尚未进入密集发布节奏。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

| 类型 | 编号 | 状态 | 说明 |
|:---|:---|:---|:---|
| PR | [#783](https://github.com/nullclaw/nullclaw/pull/783) | **待合并**（更新于 2026-05-13） | Cron 子代理引擎重大功能集 |

### PR #783 核心推进内容

该 PR 自 4 月 7 日创建后，于昨日（5 月 13 日）再次更新，虽仍未合并，但代表了 NullClaw 在**自动化调度基础设施**上的关键投入：

| 模块 | 能力 | 项目意义 |
|:---|:---|:---|
| **Cron 子代理引擎** | DB 持久化调度器、原子化 tick/enqueue/complete 流程、独立 worker 队列 | 从"触发器"升级为**生产级调度中枢** |
| **运行历史追踪** | `cron_runs` 历史表、完整生命周期记录 | 满足审计与可观测性需求 |
| **多类型作业支持** | skill / agent / shell 三类作业、时区偏移、投递路由、运维告警 | 覆盖复杂企业编排场景 |
| **JSON CLI 输出** | `cron list --json`、`cron schedule --json` | 便于 CI/CD 与外部系统集成 |

**项目整体迈进评估**：该 PR 若合并，将标志 NullClaw 的定时任务能力从"实验性"跃迁至"企业可用"，是**基础设施层的关键里程碑**。当前 37 天未合并周期提示需关注代码审查瓶颈。

---

## 4. 社区热点

### 最热议题：JIRA 集成工具需求 ([#914](https://github.com/nullclaw/nullclaw/issues/914))

| 指标 | 数值 |
|:---|:---|
| 创建时间 | 2026-05-13 |
| 评论数 | 0 |
| 👍 反应 | 0 |

**诉求分析**：

尽管表面互动量为零，该 Issue 的**战略信号显著**：

- **场景指向**：明确提及 "agents and workflows" 与 JIRA 的集成，反映 NullClaw 用户正将平台用于**企业研发流程自动化**（非单纯个人助手）
- **功能深度**：要求覆盖读 issue、创建 ticket、更新状态、添加评论、获取 sprint 信息——**全生命周期项目管理**
- **安全诉求**：强调 "securely authenticate"，表明企业用户对凭证管理的顾虑

**与现有 PR 的关联判断**：PR #783 的 Cron 引擎可为 JIRA 同步任务提供调度基础，但 JIRA 专用工具需独立开发。该 Issue 填补了 NullClaw 在 **SaaS 连接器矩阵** 中的明显空白。

---

## 5. Bug 与稳定性

**今日无新增 Bug 报告**

| 严重程度 | 数量 | 说明 |
|:---|:---|:---|
| 🔴 Critical | 0 | - |
| 🟠 High | 0 | - |
| 🟡 Medium | 0 | - |
| 🟢 Low | 0 | - |

> 注：PR #783 包含 "security hardening" 声明，但属于预防性强化，非响应已知漏洞。

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 纳入下一版本可能性 | 判断依据 |
|:---|:---|:---|:---|
| **JIRA 访问工具** | [Issue #914](https://github.com/nullclaw/nullclaw/issues/914) | ⭐⭐⭐ **中高** | 企业场景刚需；与现有 agent/workflow 架构天然契合；可作为官方工具包扩展 |
| **Cron 子代理引擎（含 JSON 输出、安全加固）** | [PR #783](https://github.com/nullclaw/nullclaw/pull/783) | ⭐⭐⭐⭐⭐ **极高** | 已处于 PR 阶段，功能完整度高，基础设施级优先级 |

**路线图推断**：
- **近期（1-2 周）**：PR #783 合并，释放 Cron 2.0 能力
- **中期（1-2 月）**：JIRA 工具可能以 `nullclaw-tools-jira` 或核心包扩展形式出现，需关注是否已有内部开发

---

## 7. 用户反馈摘要

### 从今日数据提炼

| 维度 | 内容 |
|:---|:---|
| **痛点** | 企业用户需要与现有项目管理工具链（JIRA）打通，避免"AI 孤岛" |
| **使用场景** | 研发团队的 sprint 管理、工单自动化、状态同步——**非通用聊天，而是工作流嵌入** |
| **满意度信号** | 无直接反馈；但用户主动提出详细需求（含认证安全考量），暗示对平台扩展机制的信任 |
| **不满意/缺口** | JIRA 缺失意味着 Atlassian 生态用户需自行开发集成，门槛较高 |

**关键洞察**：NullClaw 的用户画像正从"个人 AI 助手"向**"企业 AI 自动化平台"**迁移，需求的专业度和集成深度显著提升。

---

## 8. 待处理积压

| 编号 | 类型 | 创建时间 | 最后更新 | 滞留天数 | 风险等级 | 提醒 |
|:---|:---|:---|:---|:---|:---|:---|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) | PR | 2026-04-07 | 2026-05-13 | **37 天** | 🟠 **中高** | 核心基础设施 PR，功能集庞大可能导致审查疲劳；建议拆分或指定专门 reviewer 加速落地 |
| [#914](https://github.com/nullclaw/nullclaw/issues/914) | Issue | 2026-05-13 | 2026-05-13 | 1 天 | 🟢 低 | 新提交，正常响应周期内；建议维护者确认是否纳入官方工具路线图，避免社区重复开发 |

---

## 附录：数据完整性说明

| 数据项 | 状态 |
|:---|:---|
| Issues 24h 更新 | ✅ 完整捕获（1/1） |
| PRs 24h 更新 | ✅ 完整捕获（1/1） |
| Releases | ✅ 确认无 |
| 评论内容 | ⚠️ PR #783 显示 `评论: undefined`，可能存在 API 数据异常，实际评论数建议人工复核 |

---

*日报生成依据：GitHub 公开事件流与 Issue/PR 元数据分析*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-14

## 1. 今日速览

IronClaw 项目今日呈现**高强度迭代态势**：24小时内 Issues 更新 22 条（20 活跃/2 关闭）、PR 更新 50 条（35 待合并/15 已合并关闭），无新版本发布。核心特征是 **"Reborn" 架构重构进入全面落地期**——serrrfirat 单日批量创建 12 个 Reborn 相关 Issue/PR，覆盖渠道迁移、WASM 组件化、钩子框架、安全加固等关键领域；henrypark133 推进的 11 个工作流切片（ws-4 至 ws-8）进入密集集成阶段。社区安全关注度显著提升，zmanian 和 ilblackdragon 分别主导 hooks 框架安全审计与 secrets 路径加固。整体健康度：**活跃但积压压力大**，35 个待合并 PR 提示 review 带宽可能成为瓶颈。

---

## 2. 版本发布

**无新版本发布**

> crates.io 版本滞后问题持续：最新发布仍为 0.24.0（2026-03-31），而仓库已 tag 至 v0.27.0（2026-04-29）。下游依赖 wasmtime 28.x 的用户受 CVE 影响无法升级，详见 Issue #3259。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#3559](https://github.com/nearai/ironclaw/pull/3559) | ilblackdragon | **修复 Telegram 自动化配置回归**：恢复 `tool_install` 代理调用，修复双重调用与自动授权陷阱 | [#3533](https://github.com/nearai/ironclaw/issues/3533) |
| [#3586](https://github.com/nearai/ironclaw/pull/3586) | henrypark133 | **关闭**：canonical executor 策略分发 + 检查点合约（被 #3596 取代） | ws-6 系列 |
| [#3594](https://github.com/nearai/ironclaw/pull/3594) | serrrfirat | **关闭**：README Reborn crate map（被 #3593/#3595 拆分取代） | 文档 |

### 架构里程碑推进

- **Reborn 代理循环骨架**：henrypark133 的 ws-4（规划器门面）→ ws-5（默认策略）→ ws-6a（规范执行器）→ ws-7（计划驱动）→ ws-8（循环集成套件）形成完整流水线，[#3557](https://github.com/nearai/ironclaw/pull/3557) 作为钻石合并节点完成结构整合
- **渠道迁移启动**：Telegram/Slack/WeChat/WebUI 四大渠道 Reborn 迁移 Issue 批量创建（#3577-#3582），[#3590](https://github.com/nearai/ironclaw/pull/3590) 已实现 Telegram v2 端到端 webhook → 回复验证

---

## 4. 社区热点

### 高互动议题

| 议题 | 互动指标 | 核心诉求分析 |
|:---|:---|:---|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) Publish 0.25.0–0.27.0 to crates.io | 3 评论，创建于 5/5，持续活跃 | **供应链安全焦虑**：下游因 wasmtime 28.x CVE 被钉死在 0.24.0，crates.io 发布流程成为阻塞点。诉求：自动化发布流水线或明确发布节奏 |
| [#3533](https://github.com/nearai/ironclaw/issues/3533) Telegram v0.28.1 无法从 UI 自动设置 | 2 评论，已有关闭 PR | **QA-生产脱节**：staging 环境文档与 UI 行为不一致，用户配置路径断裂。反映 hosted 场景下"一键式"体验的优先级 |
| [#3573](https://github.com/nearai/ironclaw/pull/3573) feat(reborn): ironclaw_hooks 框架基础 | 安全审计 4 项发现 + 8 项集成测试 | **安全-功能张力**：社区对 hooks 的"信任原语"设计深度参与，zmanian 主导的四项安全发现（sealed decision types, dispatcher 等）显示 Reborn 安全模型正被严格审视 |

### 背后诉求洞察

- **企业用户**：需要可审计的发布节奏（#3259）和托管环境稳定性（#3533）
- **架构贡献者**：关注 Reborn 的边界清晰度——serrrfirat 批量创建 #3572（WASM 组件化）、#3578（HTTP ingress 边界）等 Issue，反映对 v1/v2 模糊边界的担忧

---

## 5. Bug 与稳定性

| 严重程度 | 议题 | 状态 | 修复情况 | 影响范围 |
|:---|:---|:---|:---|:---|
| **P1** | [#3533](https://github.com/nearai/ironclaw/issues/3533) Telegram 无法自动设置 | 已关闭 | ✅ PR #3559 已合并 | hosted-staging 用户 |
| **P1** | [#2905](https://github.com/nearai/ironclaw/issues/2905) 代理保存文件至 /home/agent 不可访问 | 已关闭 | 已修复 | hosted-production 文件系统 |
| **High** | [#3447](https://github.com/nearai/ironclaw/issues/3447) Nightly E2E 失败 | 开放 | ⏳ 无关联 PR | CI 可靠性，可能影响发布信心 |
| **High** | [#3592](https://github.com/nearai/ironclaw/pull/3592) Reborn secrets 路径加固 (H1, H3, M1, M2) | 待合并 | 🔄 PR 开放 | 安全审计发现，PoC 测试已附 |

> **关键风险**：Nightly E2E 持续失败（5/10 起）无明确修复进展，可能阻塞 Reborn 合并主线。

---

## 6. 功能请求与路线图信号

| 功能方向 | 代表 Issue/PR | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **Reborn Hooks 框架** | #3523, #3524, #3573 | ⭐⭐⭐⭐⭐ 高 | PR #3573 已提交（XL 规模），含安全审计与集成测试 |
| **WASM 组件化渠道** | #3572, #3583 | ⭐⭐⭐⭐⭐ 高 | 架构决策 Issue + PR #3583 组件运行时已实现 |
| **模型路由用户选择** | #3459 | ⭐⭐⭐⭐☆ 中高 | 已关闭，可能作为 Reborn 原生能力重开 |
| **日志调试工具** | #3534 | ⭐⭐⭐☆☆ 中 | 独立工具请求，无关联 PR |
| **内存扩展用户化** | #3537 | ⭐⭐⭐⭐☆ 中高 | 明确纳入 Reborn 扩展架构，依赖 #3090 |

### 路线图信号

- **"Reborn" 成为默认前缀**：今日 22 个 Issues 中 12 个带 `reborn` 标签，显示 v2 架构已取代 v1 成为开发主线
- **安全左移**：zmanian 的 #3567（自撰写 hooks）和 #3564（钱包签名不可伪造通道）显示安全设计从"修复"转向"原生架构"

---

## 7. 用户反馈摘要

### 真实痛点

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| #3259 评论 | "下游被钉死在 0.24.0，CVE 无法修复" | 企业依赖管理，cargo audit 失败 |
| #3533 复现步骤 | "UI 提示步骤与文档不符，用户困惑" | hosted-staging 首次配置 Telegram |
| #2905 关闭说明 | "/home/agent 在 hosted 环境不可访问，文件丢失" | 多租户隔离场景 |

### 满意度信号

- **#3559 修复获快速响应**：从 Issue 创建（5/12）到 PR 合并（5/13）仅 1 天，显示 P1 bug 修复流程高效
- **Reborn 架构文档完善**：#3593/#3595 主动补充 crate map，降低新贡献者认知门槛

---

## 8. 待处理积压

| 议题 | 创建时间 | 最后更新 | 风险 | 建议行动 |
|:---|:---|:---|:---|:---|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) crates.io 发布滞后 | 2026-05-05 | 2026-05-13 | 🔴 **供应链安全风险** | 指定发布负责人，或文档说明 crates.io 延迟原因 |
| [#3447](https://github.com/nearai/ironclaw/issues/3447) Nightly E2E 失败 | 2026-05-10 | 2026-05-13 | 🔴 **发布阻塞风险** | 分配 owner，关联修复 PR 或降级为非阻塞 |
| [#1566](https://github.com/nearai/ironclaw/pull/1566) 分层上下文摘要 | 2026-03-22 | 2026-05-13 | 🟡 长期开放 XL PR | 评估是否与 Reborn 内存模型 #3537 冲突，避免重复工作 |

> **维护者提醒**：35 个待合并 PR 中 XL 规模占主导（#3573, #3583, #3587, #3591, #3596, #3598 等），建议优先合并安全相关 PR #3592（secrets 加固）以阻断审计发现扩散。

---

*日报基于 GitHub 公开数据生成，时间范围：2026-05-13 至 2026-05-14 UTC*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-14

> **项目地址**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **报告日期**: 2026-05-14（数据覆盖 2026-05-13 24小时周期）

---

## 1. 今日速览

LobsterAI 今日呈现**高强度工程交付状态**：23个PR完成合并/关闭（含22个历史积压PR的一次性清理），仅1个待合并，代码流转效率极高。同步发布 `2026.5.12` 版本，聚焦记忆设置重构与UI迭代。Issues侧活跃度偏低，仅2条新增/活跃，但均为影响用户体验的实质性Bug（追问中断、虚拟滚动异常）。整体健康度良好，工程节奏紧凑，但需关注社区反馈的稳定性问题是否得到及时响应。

---

## 2. 版本发布

### [LobsterAI 2026.5.12](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.12)  
**发布日期**: 2026-05-12

| 维度 | 详情 |
|:---|:---|
| **核心变更** | ① **记忆设置页重构** (`#1943`)：重新设计 Memory Settings Tab 架构，新增 Dreaming 内容展示能力；② **UI 全局更新** (`#1946`)：未披露具体范围，推测为视觉一致性调整 |
| **作者** | @btc69m979y-dotcom（记忆功能）、@fisherdaddy（UI） |
| **破坏性变更** | 未声明；记忆设置页重构可能涉及用户配置迁移，建议关注设置项兼容性 |
| **迁移注意事项** | 若从早期版本升级，建议检查 `Memory Settings` 中自定义提示词（Custom Prompts）是否保留；Dreaming 内容展示为新增功能，无需手动启用 |

> ⚠️ **评估**: 本次为增量功能发布，无安全修复或紧急补丁，升级优先级为**常规**。

---

## 3. 项目进展

### 今日核心交付（5月13日新建PR）

| PR | 作者 | 领域 | 关键价值 |
|:---|:---|:---|:---|
| [#1969](https://github.com/netease-youdao/LobsterAI/pull/1969) | @liuzhq1986 | Cowork/OpenClaw | **上下文压缩机制完善**：新增上下文用量指示器、手动压缩入口，解决长会话场景下的内存膨胀与 `NO_REPLY` 静默失败问题 |
| [#1968](https://github.com/netease-youdao/LobsterAI/pull/1968) | @liugang519 | Artifacts | **跨平台文件打开生态打通**：支持调用系统原生应用打开工件（macOS/NSWorkspace、Windows/注册表、Linux/mimeinfo），并限定预览为文件类工件 |
| [#1963](https://github.com/netease-youdao/LobsterAI/pull/1963) | @btc69m979y-dotcom | Plugins | **插件管理系统落地**：支持 npm/clawhub/git/本地 四源安装，SchemaForm 从 hints-driven 重构为 schema-driven，为第三方生态奠基 |
| [#1966](https://github.com/netease-youdao/LobsterAI/pull/1966) | @btc69m979y-dotcom | IM/POPO | **企业集成体验优化**：POPO 渠道会话标题从硬截断改为智能解析（peerKind 识别、域名剥离），覆盖私聊/群聊/频道三种场景 |
| [#1965](https://github.com/netease-youdao/LobsterAI/pull/1965) | @liuzhq1986 | Artifacts/UI | 低分辨率显示器图标清晰度修复、技能列表悬停提示移除（减少视觉干扰） |
| [#1964](https://github.com/netease-youdao/LobsterAI/pull/1964) | @z189yis | DevEx | 开发模式会话ID可视化，提升调试效率 |
| [#1967](https://github.com/netease-youdao/LobsterAI/pull/1967) | @z189yis | 工程清理 | 移除遗留URL与文档，减少维护负担 |

### 历史积压清理（3月25日-26日陈旧PR，今日批量关闭）

| PR | 主题 | 技术价值 | 状态 |
|:---|:---|:---|:---|
| [#874](https://github.com/netease-youdao/LobsterAI/pull/874) | 并发Token刷新竞态修复 | **高**：解决积分显示为0的核心Bug | ✅ 已合并 |
| [#876](https://github.com/netease-youdao/LobsterAI/pull/876) | SQLite `getRowsModified` 时序修复 | 中：数据一致性 | ✅ 已合并 |
| [#877](https://github.com/netease-youdao/LobsterAI/pull/877) / [#889](https://github.com/netease-youdao/LobsterAI/pull/889) | `shell.openExternal` URL协议白名单 | **高**：安全加固，阻断 `file://`/`javascript:` 等危险协议 | ✅ 已合并 |
| [#878](https://github.com/netease-youdao/LobsterAI/pull/878) | 重复错误消息去重 | 中：用户体验 | ✅ 已合并 |
| [#880](https://github.com/netease-youdao/LobsterAI/pull/880) | 消息勾选分享与图片品牌化 | **高**：社交传播能力 | ✅ 已合并 |
| [#881](https://github.com/netease-youdao/LobsterAI/pull/881) | SQLite外键约束启用 | **高**：修复数据库膨胀（session删除不级联messages） | ✅ 已合并 |
| [#890](https://github.com/netease-youdao/LobsterAI/pull/890) | IPC通道白名单 | **高**：渲染进程安全隔离 | ✅ 已合并 |
| [#891](https://github.com/netease-youdao/LobsterAI/pull/891) | `store.getItem` nullish检查 | 中：修复 `0`/`false`/`""` 被误转为 `null` | ✅ 已合并 |
| [#892](https://github.com/netease-youdao/LobsterAI/pull/892) | Redux可变导出修复 | 中：状态管理不可变性合规 | ✅ 已合并 |
| [#901](https://github.com/netease-youdao/LobsterAI/pull/901) | 独立语音输入流 | **高**：GLM/Qwen ASR双适配器，端到端语音交互 | ✅ 已合并 |
| [#903](https://github.com/netease-youdao/LobsterAI/pull/903) | 收藏夹与对话导航 | **高**：消息级收藏、批量操作、轮次索引跳转 | ✅ 已合并 |

**整体推进评估**: 今日一次性消化了12个积压近50天的PR，涵盖**安全加固（3项）、数据一致性（2项）、核心功能（语音/分享/收藏夹）、工程健壮性**四大维度，项目技术债务显著降低，功能矩阵大幅扩展。

---

## 4. 社区热点

> 今日无高评论数议题，所有PR评论数均为 `undefined`（数据未采集或实际无评论），Issues侧0评论新增。以下分析基于内容影响力：

| 排名 | 议题 | 链接 | 热度信号 | 背后诉求分析 |
|:---|:---|:---|:---|:---|
| 1 | **#1969** OpenClaw上下文压缩 | [PR #1969](https://github.com/netease-youdao/LobsterAI/pull/1969) | 多领域交叉（renderer/main/openclaw/cowork） | **长会话可靠性**：用户/企业场景下，LLM对话易因上下文超限崩溃，`NO_REPLY` 是高频痛点；手动压缩入口赋予用户控制权 |
| 2 | **#1968** 跨平台应用打开 | [PR #1968](https://github.com/netease-youdao/LobsterAI/pull/1968) | 平台适配复杂度最高（macOS JXA/Windows PS/Linux cache） | **工件处理自由度**：用户不满足于内置预览，需要调用专业工具（如Typora编辑Markdown、Draw.io处理图表） |
| 3 | **#1849** 追问无限NO_REPLY | [Issue #1849](https://github.com/netease-youdao/LobsterAI/issues/1849) | 2条评论，4月28日创建持续未关闭 | **流式输出可靠性**：任务提前 `complete` 但模型仍在输出，属于竞态/状态机设计缺陷，直接影响核心对话体验 |

---

## 5. Bug 与稳定性

| 严重程度 | 议题 | 链接 | 现象 | 根因 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|:---|:---|
| 🔴 **P0-高** | #1849 追问无限NO_REPLY | [Issue #1849](https://github.com/netease-youdao/LobsterAI/issues/1849) | 追问时无响应或仅输出几个字 | 任务提前标记 `complete`，模型流式输出与状态机不同步 | **#1969** 部分相关（OpenClaw `NO_REPLY` 处理） | 🔄 可能缓解，未明确关闭 |
| 🔴 **P0-高** | #1971 会话滚动异常 | [Issue #1971](https://github.com/netease-youdao/LobsterAI/issues/1971) | 含Mermaid等超大元素时，上下滚动后无法滚动或异常 | 虚拟滚动 + 高度超大元素反复销毁渲染 → 列表高度剧变 → 滚动事件无限重渲染 | **无** | ❌ 待修复 |
| 🟡 **P1-中** | #874 并发刷新Token竞态（已修复） | [PR #874](https://github.com/netease-youdao/LobsterAI/pull/874) | 积分显示为0 | `main.ts` 3处独立Token刷新无互斥锁 | #874 | ✅ 已合并 |
| 🟡 **P1-中** | #881 外键约束缺失致数据库膨胀（已修复） | [PR #881](https://github.com/netease-youdao/LobsterAI/pull/881) | Session删除后messages残留，DB体积持续增长 | sql.js默认 `PRAGMA foreign_keys = OFF` | #881 | ✅ 已合并 |

> **关键风险**: #1971 虚拟滚动Bug今日新增且**无对应Fix PR**，影响长会话（尤其含代码图、Mermaid图表的技术场景）的基础可用性，建议优先响应。

---

## 6. 功能请求与路线图信号

| 来源 | 信号 | 下一版本纳入概率 | 判断依据 |
|:---|:---|:---|:---|
| **#1963 插件管理系统** | 第三方生态开放 | 🔥 **极高** | 已合并；含安装源扩展（npm/clawhub/git/local）、SchemaForm重构，为官方插件市场铺路 |
| **#1968 系统应用打开** | 工件外部编辑 | 🔥 **极高** | 已合并；跨平台实现完整，补齐与VS Code/Obsidian等工具的协作闭环 |
| **#901 独立语音输入** | 多模态交互 | 🔥 **高** | 已合并；GLM+Qwen双ASR适配，覆盖中英文场景 |
| **#903 收藏夹** | 知识管理 | 🔥 **高** | 已合并；全栈实现完整，含SQLite表、7个IPC handler |
| **#880 消息分享品牌化** | 社交传播 | 🔥 **高** | 已合并；企业场景品牌曝光需求明确 |
| #1969 上下文压缩手动入口 | 长会话可控性 | ⚡ **中** | 已合并；但自动压缩策略仍待优化，可能继续迭代 |
| #1971 虚拟滚动修复 | 渲染性能 | ⚡ **中** | 待PR；涉及虚拟滚动核心机制，改动风险较高 |

**路线图推测**: 下一版本（2026.5.x 或 2026.6.x）大概率围绕 **"插件生态首发 + 语音交互成熟 + 企业协作深化"** 三大主题展开。

---

## 7. 用户反馈摘要

> 基于Issues描述与PR摘要提炼真实用户场景：

| 痛点/场景 | 来源 | 情绪 |
|:---|:---|:---|
| **"追问就卡住，必须重开对话"** — 技术用户高频使用追问功能时遭遇流式输出中断，严重打断思路 | #1849 | 😤 **强负面** |
| **"长代码图滚不动，页面假死"** — 技术文档/架构图场景下，Mermaid渲染后滚动体验崩溃 | #1971 | 😤 **强负面** |
| **"积分突然变0，以为账号被封"** — 企业用户对额度敏感，显示错误引发恐慌 | #874（已修复） | 😰 **负面→缓解** |
| **"想直接用Typora编辑生成的Markdown"** — 专业用户需要工具链集成，不接受内置编辑器限制 | #1968 | 😊 **正向期待** |
| **"收藏的消息找不到，只能手动翻历史"** — 知识沉淀需求强烈，原生缺乏管理手段 | #903 | 😊 **正向期待** |
| **"语音输入要跳好几个设置页"** — 早期语音功能入口深，独立流程简化操作 | #901 | 😊 **正向期待** |

---

## 8. 待处理积压

| 议题 | 链接 | 创建时间 | 滞留天数 | 风险说明 |
|:---|:---|:---|:---|:---|
| **#1849 追问无限NO_REPLY** | [Issue #1849](https://github.com/netease-youdao/LobsterAI/issues/1849) | 2026-04-28 | **16天** | 核心对话路径Bug，#1969可能部分缓解但未明确关联关闭；需验证修复效果或专项跟进 |
| **#1971 会话滚动异常** | [Issue #1971](https://github.com/netease-youdao/LobsterAI/issues/1971) | 2026-05-13 | **1天** | 新增即高危，虚拟滚动为底层组件，修复涉及渲染引擎调整，建议 @atdow 补充最小复现仓库 |

> **维护者行动建议**: 
> 1. 对 #1849 执行 **修复验证** — 在 #1969 合并后的构建上复现追问场景，确认 `NO_REPLY` 是否消除；
> 2. 对 #1971 启动 **24小时响应机制** — 虚拟滚动Bug影响面随会话长度指数扩大，需快速评估是否回滚相关优化或紧急补丁。

---

*日报生成完毕。如需针对特定PR/Issue深度解析，或对比历史周期趋势，请指示。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-14

> **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis)  
> **日期**: 2026-05-14  
> **分析周期**: 过去 24 小时（2026-05-13 至 2026-05-14）

---

## 1. 今日速览

Moltis 项目今日活跃度处于**极低水平**。过去 24 小时内仅产生 **1 条 Issue 更新**，无 PR 活动及版本发布。社区贡献动能明显放缓，核心开发节奏进入平台期。唯一新增的 Issue 指向 UI 层回归缺陷——聊天界面水平滚动条复现，表明前端稳定性控制存在疏漏。整体健康度评估：**⚠️ 维护状态，需关注社区参与度下滑**。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**无 PR 合并或关闭**

今日零代码合入，项目主干未获任何功能推进或修复。结合连续无 Release 周期，建议维护者审视：
- 是否有大型功能在特性分支长期开发而未进入 review 阶段
- CI/CD 流水线是否存在阻塞导致贡献者信心下降

---

## 4. 社区热点

| 项目 | 数据 | 链接 |
|:---|:---|:---|
| #994 [Bug] chat has horizontal scrolling again | 0 评论, 0 👍 | [moltis-org/moltis#994](https://github.com/moltis-org/moltis/issues/994) |

**诉求分析**：该 Issue 标题中的 "again" 为关键信号——此 Bug 属于**回归缺陷**，此前曾被修复后再次触发。用户 vvuk 完成预检清单但未补充完整会话上下文，暗示问题复现可能依赖特定聊天内容（如长代码块、宽表格、非 ASCII 字符渲染）。零互动数据反映：① 该问题尚未引发广泛共鸣；② 社区前端贡献者响应不及时。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 严重度 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| P2-Medium | #994 聊天界面水平滚动条回归 | UI/UX 缺陷，影响可读性 | 🟡 Open | **无** | [#994](https://github.com/moltis-org/moltis/issues/994) |

**技术研判**：水平滚动条回归通常源于：
- CSS `overflow-x` 规则在组件重构中被覆盖
- 消息气泡最大宽度约束失效（如 `max-width: 100%` → 被内联样式突破）
- 代码高亮/ Markdown 渲染容器未正确截断

**建议**：关联此前修复该问题的 PR/commit，进行 `git bisect` 定位回归引入点。

---

## 6. 功能请求与路线图信号

**今日无新增功能请求**

社区未产生任何 `enhancement` 或 `feature request` 标签 Issue。结合零 PR 态势，项目路线图透明度存疑——建议维护者通过 Discussion 或 Project Board 公开迭代计划，激活社区预期管理。

---

## 7. 用户反馈摘要

| 维度 | 内容 |
|:---|:---|
| **痛点** | 聊天界面出现水平滚动条，破坏对话阅读流 |
| **使用场景** | 日常对话交互（具体触发条件待补充） |
| **满意度信号** | 用户主动完成预检清单，表明对项目质量有期待；但未勾选"包含完整会话上下文"，或暗示复现步骤准备成本较高 |
| **隐忧** | "again" 措辞透露用户对反复出现同类问题的不耐烦，品牌信任损耗风险 |

> 摘录：*"chat has horizontal scrolling **again**"* —— 回归类 Bug 对用户体验的伤害高于新发 Bug，因用户已形成"此问题已被解决"的心理预期。

---

## 8. 待处理积压

| 关注项 | 持续时间 | 风险 | 行动建议 |
|:---|:---|:---|:---|
| #994 水平滚动回归 | 1 天（新报，但 Bug 本身或存在更久） | 前端质量口碑下滑 | 维护者 48h 内响应，要求补充：① 浏览器/版本 ② 触发消息类型 ③ 截图/GIF |
| 长期 PR 积压 | — | 贡献者流失 | 公开审查队列长度，设立每周 triage 例会 |

---

## 附录：数据仪表盘

| 指标 | 数值 | 环比 |
|:---|:---|:---|
| Issues 更新 | 1 | — |
| PR 更新 | 0 | — |
| Release | 0 | — |
| 社区互动量（评论+反应）| 0 | — |

---

*本日报基于 GitHub 公开数据生成。如需深度分析特定 Issue 历史或贡献者网络，请联系获取扩展报告。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-14

## 1. 今日速览

CoPaw（QwenPaw）今日展现极高开发活跃度：24小时内 **30 条 Issues**（12 活跃/新开，18 关闭）与 **50 条 PR**（29 待合并，21 已合并/关闭）的处理量表明项目处于密集迭代期。核心贡献者 `aqilaziz` 单日提交 **10+ PR**，覆盖 MCP 超时/TLS 配置、上下文压缩、Console UI 国际化与移动端适配等关键领域。v1.1.7-beta.2 版本刚发布，社区同步涌现多个严重 Bug 报告（MCP 流式调用阻塞、内存耗尽、会话状态竞争），稳定性与功能扩展形成"双线作战"态势。

---

## 2. 版本发布

### v1.1.7-beta.2 已发布
**发布链接：** [agentscope-ai/QwenPaw/releases/tag/v1.1.7-beta.2](https://github.com/agentscope-ai/QwenPaw/releases)

| 变更类型 | 内容 | 作者 |
|---------|------|------|
| **feat(plugins)** | 支持通过插件注册 FastAPI `APIRouter` 实例，增强插件系统扩展能力 | @Osier-Yi |
| **feat** | 为 keyring 添加超时机制，避免密钥环操作无限挂起 | @rayrayraykk |
| **fix(console)** | 修复 TokenUsage 统计问题 | @zha |

**迁移注意事项：** 插件开发者可利用新的 `APIRouter` 注册能力构建更复杂的 RESTful 扩展；keyring 超时默认为新增行为，无需配置变更。

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 说明 | 关联 Issue |
|---|------|------|-----------|
| [#4283](https://github.com/agentscope-ai/QwenPaw/pull/4283) `chore(version): bumping version to 1.1.7b2` | @xieyxclack | 版本号升级至 1.1.7-beta.2 | — |
| [#4210](https://github.com/agentscope-ai/QwenPaw/pull/4210) `feat(cron & inbox): add inbox and optimize the cron job` | @lalaliat | **重大功能**：Cron 任务系统重构，支持一次性执行、固定次数重复、无限重复直至指定时间；新增 Inbox 收件箱机制 | #4029 |

**整体推进评估：** Cron/定时任务系统从"仅支持循环表达式"升级为完整调度框架，配合 Inbox 机制，使 CoPaw 具备企业级工作流编排能力；QA Agent 文档打包修复解决了一类安装场景下的运行时错误。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 |
|:---:|-------|:----:|---------|
| 1 | [#2642](https://github.com/agentscope-ai/QwenPaw/issues/2642) 钉钉/QQ/微信接入后生成 PPT 导致机器人崩溃 | 15 | **多平台文件生成稳定性**：IM 渠道与复杂任务（PPT 生成）的兼容性，错误后无法恢复会话 |
| 2 | [#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159) DashScope 配置未读取导致 401 | 8 | **配置系统可靠性**：provider 配置与运行时实际使用的模型后端不一致 |
| 3 | [#3932](https://github.com/agentscope-ai/QwenPaw/issues/3932) `read_file_safe` 1GB 参数导致内存错误 | 6 | **资源安全边界**：大参数传递的低内存系统兼容性 |
| 4 | [#4227](https://github.com/agentscope-ai/QwenPaw/issues/4227) MCP stream_http 401 时阻塞至超时 **[严重]** | 5 | **MCP 错误处理**：非 404 HTTP 错误码的流式响应未正确中断 |
| 5 | [#4244](https://github.com/agentscope-ai/QwenPaw/issues/4244) `shell_evasion_checks.newlines=True` 静默阻断多行命令 | 5 | **安全策略与可用性平衡**：默认安全规则过度拦截导致 Agent 思维链混乱 |
| 6 | [#4265](https://github.com/agentscope-ai/QwenPaw/issues/4265) 读取对话日志导致内存耗尽、系统卡死 | 5 | **日志系统资源控制**：循环压缩与读取的失控场景 |

**诉求分析：** 热点议题高度集中于**稳定性与资源安全**——从文件操作、内存管理到网络超时，用户在生产环境中遭遇的"硬边界"问题正在集中暴露。多平台 IM 集成仍是高优先级场景。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 描述 | Fix PR |
|:-------:|-------|:--:|------|:------:|
| 🔴 **P0-严重** | [#4227](https://github.com/agentscope-ai/QwenPaw/issues/4227) | OPEN | MCP stream_http 模式遇 401 阻塞至超时，非 404 错误码均受影响 | **[#4281](https://github.com/agentscope-ai/QwenPaw/pull/4281)** 已提交，待合并 |
| 🔴 **P0-严重** | [#4265](https://github.com/agentscope-ai/QwenPaw/issues/4265) | OPEN | 读取对话日志触发循环压缩，内存耗尽致 SSH 无法连接 | 无 |
| 🟡 **P1-高** | [#4244](https://github.com/agentscope-ai/QwenPaw/issues/4244) | OPEN | 默认安全规则静默阻断多行 shell 命令，Agent 行为不可预测 | 无 |
| 🟡 **P1-高** | [#4260](https://github.com/agentscope-ai/QwenPaw/issues/4260) | OPEN | Console 中 AI 发送文件标题空白、图片尺寸异常 | **[#4288](https://github.com/agentscope-ai/QwenPaw/pull/4288)** 已提交 |
| 🟡 **P1-高** | [#4232](https://github.com/agentscope-ai/QwenPaw/issues/4232) | OPEN | `SafeJSONSession` 无锁并发写导致会话状态丢失 | 无 |
| 🟡 **P1-高** | [#4257](https://github.com/agentscope-ai/QwenPaw/issues/4257) | OPEN | 浏览器管理：空闲超时过早、崩溃无自愈、僵尸进程残留 | 无 |
| 🟢 **P2-中** | [#2258](https://github.com/agentscope-ai/QwenPaw/issues/2258) | OPEN | Agent 思考后无反馈直接结束对话（0.2.0 遗留） | 无 |
| 🟢 **P2-中** | [#3528](https://github.com/agentscope-ai/QwenPaw/issues/3528) | OPEN | Markdown 表格使用 `<br>` 时自动换行异常 | 无 |

**关键进展：** MCP 流式 HTTP 错误处理补丁（#4281）已快速响应，采用 SDK 兼容层方案；文件预览修复（#4288）同步覆盖文件名解析与图片尺寸问题。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 状态 | 纳入可能性评估 |
|------|---------|:--:|-------------|
| **对话窗口实时上下文用量显示** | [#4284](https://github.com/agentscope-ai/QwenPaw/issues/4284) / [#4290](https://github.com/agentscope-ai/QwenPaw/pull/4290) | 需求+PR 同日出现 | **极高** — PR 已完整实现 SSE 事件透传 + UI 渲染 |
| **预制 Agent 模板降低门槛** | [#4259](https://github.com/agentscope-ai/QwenPaw/issues/4259) | OPEN | 高 — 明确指向非技术用户增长战略，需产品层面决策 |
| **Shell 命令运行时可观测性（查看/终止/延长超时）** | [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) | OPEN | 中高 — 复用现有 ApprovalCard 基础设施，技术可行性强 |
| **移动端全面适配** | [#4285](https://github.com/agentscope-ai/QwenPaw/pull/4285) | PR 待合并 | **高** — 首次贡献者提交完整方案，含 `MobileNavContext` 与触控优化 |
| **印尼语支持** | [#4287](https://github.com/agentscope-ai/QwenPaw/pull/4287) | PR 待合并 | **高** — 语言扩展成本低，国际化战略信号 |
| **`/make-skill` 会话转技能** | [#4282](https://github.com/agentscope-ai/QwenPaw/pull/4282) | PR 待合并 | 中高 — 技能生态建设关键功能，需评估与现有技能系统整合 |
| **自定义 Provider HTTP Headers** | [#4295](https://github.com/agentscope-ai/QwenPaw/pull/4295) | PR 待合并 | **高** — 企业代理/认证场景刚需 |
| **MCP 可配置超时与 TLS 验证** | [#4292](https://github.com/agentscope-ai/QwenPaw/pull/4292) / [#4291](https://github.com/agentscope-ai/QwenPaw/pull/4291) | PR 待合并 | **高** — 生产部署必备，与 #4227 严重 Bug 修复同步推进 |

---

## 7. 用户反馈摘要

### 😣 核心痛点

| 场景 | 来源 Issue | 典型表述 |
|-----|-----------|---------|
| **IM 渠道"一次崩溃永久失效"** | [#2642](https://github.com/agentscope-ai/QwenPaw/issues/2642) | "只能删除会话，但接入的会话不会删掉依旧报错，导致接入的机器人就用不了了" |
| **配置与行为不一致** | [#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159) | "配置文件验证无误，但运行时日志显示使用 backend:'openai' 且 api_key 为空" |
| **静默失败难以调试** | [#4244](https://github.com/agentscope-ai/QwenPaw/issues/4244) | "shell 命令被静默阻断，导致 agent thought chain chaos" |
| **资源失控无保护** | [#4265](https://github.com/agentscope-ai/QwenPaw/issues/4265) | "SSH 都进不去了" — 日志读取触发级联故障 |
| **重启即重置** | [#4264](https://github.com/agentscope-ai/QwenPaw/issues/4264) | "每次重启都会自动重新生成 QwenPaw_QA_Agent_0.2" |

### 😊 积极反馈方向

- **多平台接入意愿强烈**：钉钉、微信、QQ 等 IM 渠道活跃使用
- **定时任务需求明确**：一次性/多次调度场景被验证（#4029 → #4210）
- **国际化参与度高**：印尼语 PR（#4287）、移动端适配（#4285）来自社区贡献

---

## 8. 待处理积压

### 需维护者关注的高龄/重要 Issue

| Issue | 创建时间 | 最后更新 | 问题 | 行动建议 |
|-------|---------|---------|------|---------|
| [#2258](https://github.com/agentscope-ai/QwenPaw/issues/2258) | 2026-03-25 | 2026-05-13 | Agent 思考后无反馈（0.2.0 → 1.1.x 持续存在） | 标记为 `confirmed`，纳入核心推理流程诊断 |
| [#3528](https://github.com/agentscope-ai/QwenPaw/issues/3528) | 2026-04-17 | 2026-05-13 | Markdown `<br>` 表格换行 | 前端渲染层专项修复 |
| [#4232](https://github.com/agentscope-ai/QwenPaw/issues/4232) | 2026-05-12 | 2026-05-13 | `SafeJSONSession` 并发写竞争 | **高优先级** — 数据完整性风险，需文件锁或 SQLite 迁移评估 |
| [#4264](https://github.com/agentscope-ai/QwenPaw/issues/4264) | 2026-05-13 | 2026-05-13 | 默认 QA Agent 重复创建 | 产品决策：向导初始化 vs. 首次运行标记 |

### PR 积压风险

- **29 个待合并 PR** 中，`aqilaziz` 贡献占绝对多数（~15 个），存在**单点瓶颈**与**审查负载集中**风险
- 建议：拆分审查职责，优先合并安全修复类（#4281 MCP 超时、#4288 文件预览）

---

**日报生成时间：** 2026-05-14  
**数据来源：** agentscope-ai/CoPaw (GitHub)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-05-14

> **项目**: [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)  
> **日期**: 2026-05-14  
> **分析周期**: 过去 24 小时

---

## 1. 今日速览

ZeptoClaw 今日活跃度**极低**，社区处于静默维护状态。过去 24 小时内无新 Issue 开启、无 PR 活动、无版本发布，全部 4 条更新均为**同日创建并关闭的追踪型 Issue**，生命周期极短（<24 小时）。项目核心开发活动停滞，当前工作重心偏向**安全审计文档化与 CVE 治理流程建设**，而非功能迭代。维护者响应迅速但缺乏外部社区参与，整体健康度呈现"维护模式"特征。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

**无合并/关闭的 Pull Requests。**

今日无代码层面的功能推进。4 条关闭的 Issue 均属**流程追踪型工作项**，不涉及主分支代码变更：

| Issue | 类型 | 实质内容 | 项目推进度 |
|:---|:---|:---|:---|
| [#587](https://github.com/qhkm/zeptoclaw/issues/587) → [#588](https://github.com/qhkm/zeptoclaw/issues/588) | 安全审计追踪 | AI 辅助漏洞扫描的 web/control-plane 面深度审计 | 审计方法论沉淀，未产出可合并修复 |
| [#589](https://github.com/qhkm/zeptoclaw/issues/589) → [#590](https://github.com/qhkm/zeptoclaw/issues/590) | 安全文档追踪 | CVE/GHSA 公告的收集与补丁文件提取 | 安全响应流程标准化 |

**评估**: 项目整体未向前推进功能或修复，处于**防御性维护姿态**。

---

## 4. 社区热点

**无活跃社区讨论。** 全部 4 条 Issue 均为**内部维护者自建自关**，评论数均为 1（系统自动或自我关闭注释），👍 反应数为 0，零外部参与。

| Issue | 作者 | 评论 | 👍 | 外部参与 |
|:---|:---|:---:|:---:|:---:|
| [#590](https://github.com/qhkm/zeptoclaw/issues/590) | YLChen-007 | 1 | 0 | ❌ 无 |
| [#589](https://github.com/qhkm/zeptoclaw/issues/589) | YLChen-007 | 1 | 0 | ❌ 无 |
| [#588](https://github.com/qhkm/zeptoclaw/issues/588) | liey1 | 1 | 0 | ❌ 无 |
| [#587](https://github.com/qhkm/zeptoclaw/issues/587) | liey1 | 1 | 0 | ❌ 无 |

**诉求分析**: 两位维护者（YLChen-007、liey1）正构建**安全治理基础设施**——CVE 公告的自动化收集、补丁提取、AI 辅助漏洞验证流水线。该工作模式暗示项目可能：
- 处于**发布前安全硬ening 阶段**（准备重大版本）
- 或响应**未公开的安全压力**（监管/企业用户要求）

---

## 5. Bug 与稳定性

**今日无新报告的 Bug、崩溃或回归问题。**

值得注意的是，[#588](https://github.com/qhkm/zeptoclaw/issues/588) 的审计范围明确提及 **"unauthenticated HTTP MCP → shell exec"** 作为"最强已知候选漏洞"，表明维护者已识别**高危攻击面**（未经认证的 MCP 协议接口可能导致远程代码执行）。但该 Issue 已关闭且未关联修复 PR，**实际修复状态不透明**。

| 潜在风险项 | 严重程度 | 状态 | Fix PR |
|:---|:---|:---|:---|
| Unauthenticated HTTP MCP → shell exec (RCE) | 🔴 **Critical** | 审计中/状态不明 | **无** |

---

## 6. 功能请求与路线图信号

**今日无功能请求。**

从现有 Issue 反推**隐含路线图信号**：

| 信号 | 来源 | 解读 |
|:---|:---|:---|
| MCP 协议安全加固 | [#588](https://github.com/qhkm/zeptoclaw/issues/588) | 项目核心依赖 MCP（Model Context Protocol），正强化其安全边界 |
| AI 辅助安全审计流水线 | [#587](https://github.com/qhkm/zeptoclaw/issues/587)-[#588](https://github.com/qhkm/zeptoclaw/issues/588) | 将 AI 漏洞扫描集成到开发工作流（`.codex-work-memory`, `.codex-audit-work`） |
| 官方 CVE 数据库建设 | [#589](https://github.com/qhkm/zeptoclaw/issues/589)-[#590](https://github.com/qhkm/zeptoclaw/issues/590) | 建立结构化安全公告体系，可能为合规认证（SOC2/ISO27001）铺路 |

**下一版本预测**: 高概率为**安全修复版本**（patch release），而非功能版本。

---

## 7. 用户反馈摘要

**今日无真实用户反馈。** 全部 Issue 为内部追踪，无用户评论可提炼。

**间接推断的使用场景痛点**（基于审计范围）：
- **Docker/Compose 运行时可靠性**: 审计明确包含 "re-check Docker/Compose or Linux runtime viability"，暗示现有部署路径存在稳定性投诉或内部疑虑
- **控制面暴露面过大**: "web/control-plane surfaces" 作为重复审计对象，表明该攻击面是用户/部署者的核心担忧

---

## 8. 待处理积压

**需维护者关注的长期风险**:

| 风险项 | 说明 | 建议行动 |
|:---|:---|:---|
| **Critical 漏洞修复透明度缺失** | [#588](https://github.com/qhkm/zeptoclaw/issues/588) 识别的 RCE 候选未关联公开修复 | 如已修复，应发布安全公告；如未修复，需保持 Issue 开放至合并 |
| **零外部贡献者参与** | 连续周期无社区 PR/Issue | 评估项目治理开放性，考虑发布贡献者招募或路线图更新 |
| **安全审计 Issue 快速关闭无结论** | 4 条 Issue 均 <24h 生命周期 | 建立审计结论的持久化文档（如 `SECURITY_AUDIT_LOG.md`），避免知识流失 |

---

> **数据来源**: GitHub API 抓取 | **生成时间**: 2026-05-14  
> **日报置信度**: ⚠️ 受限（数据量极低，社区活动近乎静默，推断成分较高）

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-14

## 1. 今日速览

ZeroClaw 今日保持**高活跃度**，24小时内处理 34 条 Issues（关闭 15 条）和 50 条 PR（合并/关闭 16 条），无新版本发布。核心进展集中在**技能系统（Skills）架构升级**、**多模态/视觉路由修复**以及**网关可观测性增强**三大方向。社区对 #6594「背景审查分叉 + skill_manage 工具」的 Hermes 风格技能自治机制讨论热烈，同时安全方面出现配对码强度（#6613）和系统 CA 信任（#6528）两个关键议题。整体项目健康度良好，v0.8.0 集成分支持续推进，但部分高优先级 Bug 仍需维护者介入。

---

## 2. 版本发布

**无新版本发布**

今日未发布任何 Release。v0.7.6 技能支持主题（#6253）仍在推进中，v0.8.0 大规模集成分支（#6398）处于 Draft 状态，包含 Schema v3 迁移等破坏性变更。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 说明 | 关联 Issue |
|:---|:---|:---|:---|
| [#6591](https://github.com/zeroclaw-labs/zeroclaw/pull/6591) | Alix-007 | **Anthropic Opus 温度参数修复** — 允许原生 Anthropic 请求对拒绝 `temperature` 的 Opus 模型省略该参数，覆盖 chat/tool/streaming 路径 | [#6147](https://github.com/zeroclaw-labs/zeroclaw/issues/6147) |
| [#6597](https://github.com/zeroclaw-labs/zeroclaw/pull/6597) | yijunyu | **视觉路由一致性修复** — `supports_vision()` 改为反映 default/primary provider 而非 `.any()`，修复混合提供商设置中的静默绕过 | [#6589](https://github.com/zeroclaw-labs/zeroclaw/issues/6589) |
| [#6605](https://github.com/zeroclaw-labs/zeroclaw/pull/6605) | Alix-007 | **运行时启动顺序修复** — WorkspaceTool 注册前预加载现有 workspace profiles，解决启动时配置丢失 | [#6419](https://github.com/zeroclaw-labs/zeroclaw/issues/6419) |
| [#6635](https://github.com/zeroclaw-labs/zeroclaw/pull/6635) | mn13 | **Cron 线程上下文修复** — `deliver_announcement` 全路径携带 `thread_id`，修复定时 webhook 回调丢上下文 | [#6634](https://github.com/zeroclaw-labs/zeroclaw/issues/6634) |
| [#6629](https://github.com/zeroclaw-labs/zeroclaw/pull/6629) | Audacity88 | **工具结果图片防重放** — 阻止历史 tool-result 图片在后续 provider turns 中重复播放 | [#6627](https://github.com/zeroclaw-labs/zeroclaw/issues/6627) |

### 里程碑意义

- **技能自治闭环**：#6594 引入 Hermes 风格的**后台审查分叉（background review fork）**机制，使 `skill_improvement.enabled` 首次产生实际运行时效果，标志 ZeroClaw 从「静态技能加载」迈向「动态技能进化」
- **可观测性基座**：#6009（OTel 工具跨度丰富化）+ #6641/#6642（turn-level trace 关联）形成完整链路追踪体系，为生产环境排障奠定基础

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论 | 热度分析 |
|:---|:---|:---|:---|
| 🔥1 | [#6594](https://github.com/zeroclaw-labs/zeroclaw/pull/6594) **feat(skills): background review fork + skill_manage tool** | 活跃讨论中（XL 级 PR） | **核心架构变革**：采用 Nous Research Hermes Agent 的 post-turn 审查模式，实现技能自改进闭环。社区关注：① 与现有 `SKILL.toml`/`manifest.toml` 双文件体系的兼容性（衍生 #6645）；② `💾` 摘要解析器漏捕获 tool receipts（#6644）。这是 v0.7.6 的旗舰功能 |
| 🔥2 | [#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140) **plugins: skill capability — hybrid skills + WASM tools** | 2 评论 | **长期路线图信号**：markdown-only 技能之后的自然延伸——单插件同时交付 SKILL.md + WASM 二进制。JordanTheJet 持续推动插件架构分层，反映社区对「安全沙箱内高性能扩展」的强需求 |
| 🔥3 | [#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) **更强的配对码机制** | 1 评论（新提交） | **安全痛点爆发**：6 位纯数字配对码被质疑为暴力破解脆弱。用户要求 32 位 alphanumeric 默认值+可配置长度。与 #6528（系统 CA 信任）共同构成网关安全双议题 |
| 🔥4 | [#6604](https://github.com/zeroclaw-labs/zeroclaw/issues/6604) **Multi-Agent Support** | 1 评论（已关闭为 duplicate） | **需求被压制**：用户明确要求 OpenClaw 风格的多智能体编排（角色隔离、工具隔离、跨代理通信），但因与现有路线图重复而被标记 duplicate。需关注是否会在 v0.8.0+ 中实质性回应 |

### 诉求洞察

> **开发者体验 vs 安全合规** 的张力凸显：一方面社区渴望 #6594 的自动化技能进化降低维护成本，另一方面 #6613/#6528 显示企业级部署对安全基线的硬性要求。项目需在「快速迭代」与「生产就绪」间取得平衡。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 级别 | Issue | 状态 | 修复 PR | 影响范围 |
|:---|:---|:---|:---|:---|
| **S1 - workflow blocked** | [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) Onboarding: OpenAI Codex 误提示 API key | 🟡 OPEN | 无 | 新用户入门流失 |
| **S1 - workflow blocked** | [#6410](https://github.com/zeroclaw-labs/zeroclaw/issues/6410) google_workspace 工具 Windows 路径解析失败 + JSON 参数损坏 | ✅ CLOSED | 已修复 | Windows 企业用户 |
| **S1 - workflow blocked** | [#6514](https://github.com/zeroclaw-labs/zeroclaw/issues/6514) Gateway WebSocket turn 在客户端断开后空转 | ✅ CLOSED | 已修复 | 网关稳定性 |
| **S1 - workflow blocked** | [#6551](https://github.com/zeroclaw-labs/zeroclaw/issues/6551) 非首条 system message 导致 OpenAI-compatible 提供商拒绝 | ✅ CLOSED | 已修复 | 兼容层可靠性 |
| **S2 - degraded behavior** | [#6634](https://github.com/zeroclaw-labs/zeroclaw/issues/6634) Cron webhook 丢失 `thread_id` | 🟢 FIX PR 待审 | [#6635](https://github.com/zeroclaw-labs/zeroclaw/pull/6635) | 定时任务上下文断裂 |
| **S2 - degraded behavior** | [#6627](https://github.com/zeroclaw-labs/zeroclaw/issues/6627) 工具结果图片跨 turn 重放 | 🟢 FIX PR 待审 | [#6629](https://github.com/zeroclaw-labs/zeroclaw/pull/6629) | 多轮对话幻觉风险 |
| **S2 - degraded behavior** | [#6643](https://github.com/zeroclaw-labs/zeroclaw/issues/6643) GLM-5.1 思考内容泄露至最终消息 | 🟡 OPEN | 无 | 国产模型适配回归 |
| **S2 - degraded behavior** | [#6419](https://github.com/zeroclaw-labs/zeroclaw/issues/6419) WorkspaceManager 启动时未加载 profiles | ✅ CLOSED | [#6605](https://github.com/zeroclaw-labs/zeroclaw/pull/6605) | 运行时配置初始化 |
| **S2 - degraded behavior** | [#6589](https://github.com/zeroclaw-labs/zeroclaw/issues/6589) 视觉路由 `.any()` vs `default` 不一致 | ✅ CLOSED | [#6597](https://github.com/zeroclaw-labs/zeroclaw/pull/6597) | 多模态回退失效 |

### 回归风险警示

- **GLM-5.1 思考泄露（#6643）**：[#5285](https://github.com/zeroclaw-labs/zeroclaw/issues/5285) 的复发，提示 provider-specific 的 message format 处理缺乏回归测试覆盖
- **Stale tool-result images（#6627）**：#6183 引入的优化反噬，说明「状态ful 的多模态历史」需更严格的边界隔离

---

## 6. 功能请求与路线图信号

### 高概率纳入下一版本（v0.7.6 / v0.8.0）

| 功能 | Issue/PR | 信号强度 | 判断依据 |
|:---|:---|:---|:---|
| **技能系统完整闭环** | #6594 + #6645 + #6644 | ⭐⭐⭐⭐⭐ | XL 级 PR 已开，作者 JordanTheJet 为核心贡献者，v0.7.6 主题明确 |
| **OTel 全链路追踪** | #6009 + #6641 + #6642 | ⭐⭐⭐⭐⭐ | alexandme 已提供下游实现，维护者主动创建 follow-up issue 邀请 upstream |
| **Matrix SDK 0.17 兼容性验证** | #6576 | ⭐⭐⭐⭐☆ | 标记 `release-gate`，#6566 已合并，需冒烟测试 |
| **可配置视觉降级策略** | #6574 | ⭐⭐⭐⭐☆ | P2 优先级，有明确用户场景（Telegram 图片消息），待维护者评估 |

### 中长期路线图信号

| 功能 | Issue | 信号强度 | 阻碍因素 |
|:---|:---|:---|:---|
| **混合 WASM 技能插件** | #6140 | ⭐⭐⭐⭐☆ | 依赖 markdown-only 技能先落地，架构设计已完成 |
| **多智能体编排** | #6604 (duplicate) | ⭐⭐⭐☆☆ | 与 OpenClaw 对齐的愿景明确，但 v0.8.0 集成分支未包含相关 Schema 变更 |
| **更强的配对码安全** | #6613 | ⭐⭐⭐☆☆ | 安全合规驱动，但涉及向后兼容性（现有 6 位数字配对码的迁移策略） |

---

## 7. 用户反馈摘要

### 真实痛点

> **"6 numeric digits is too weak"** — [#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) @sken130

企业/自托管用户对网关配对安全基线的焦虑，反映 ZeroClaw 从「个人助手工具」向「团队/企业基础设施」演进时的身份张力。

> **"When using a slow local LLM... the model request is canceled"** — [#6156](https://github.com/zeroclaw-labs/zeroclaw/issues/6156) @rhinterndorfer

Nextcloud Talk 通道的 5 秒硬超时对 LocalAI 等边缘部署不友好，提示「云优先」的默认假设需增加本地/边缘场景的弹性配置。

> **"google_workspace tool fails to find gws on Windows"** — [#6410](https://github.com/zeroclaw-labs/zeroclaw/issues/6410) @BaroDevelopment

Windows 平台的 PATH 解析（`.cmd` 扩展名）和 shell fallback 的 JSON 参数转义问题，暴露跨平台测试覆盖不足。

### 满意点

- **OTel 集成深度**：alexandme 的下游 fork 实现被主动邀请 upstream（#6641/#6642），显示维护者对社区贡献的开放态度
- **技能系统迭代速度**：从 #4619（SkillImprover 无调用者）到 #6594（完整 Hermes 审查分叉）仅约 2 个月，架构演进节奏清晰

### 不满意点

- **文档与镜像同步**：#6500 指出官方文档引用的 `zeroclawlabs/tool-runner` Docker 镜像不存在，安全沙箱指南与实际情况脱节
- **配置迁移摩擦**：#6309 显示 `model_routing_config` 的 `upsert_agent` 动作会覆盖 schema_version=2 设置，自动化配置管理存在破坏性副作用

---

## 8. 待处理积压

### 需维护者紧急关注

| Issue/PR | 天数 | 风险 | 行动建议 |
|:---|:---|:---|:---|
| [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) **Integration/v0.8.0** | 9 天 | 🔴 **Schema v3 迁移阻塞全量发布** | 明确 Draft → Ready 的验收标准，协调 40+ 模块的合并冲突 |
| [#6297](https://github.com/zeroclaw-labs/zeroclaw/pull/6297) **WhatsApp/Signal 轮询事件 + send_choice** | 11 天 | 🟡 通道交互范式扩展 | 需架构 review：离散选择 API 是否应成为所有通道的强制 trait |
| [#6228](https://github.com/zeroclaw-labs/zeroclaw/pull/6228) **Slack session key 清理** | 15 天 | 🟡 标记 `needs-author-action` | 作者 thezillo 需响应 review 反馈，或维护者接管完成 |
| [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) **OTel tool spans 丰富化** | 22 天 | 🟡 标记 `needs-author-action` | alexandme 的下游实现已验证，建议维护者直接基于 #6641/#6642 的上下文协助 rebase |
| [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) **Onboarding Codex 混淆** | 18 天 | 🔴 **S1 阻塞新用户** | 需产品决策：Codex 是否作为独立 provider kind 还是 OpenAI 的变体 |

### 长期技术债

- **25 个通道模块的 allowlist 去重**（#6638 启动）：Discord 首个迁移后，剩余 24 个模块的 `is_user_allowed` 手工实现需系统性重构
- **`SKILL.toml` vs `manifest.toml` 双轨制**（#6645）：技能元数据文件的分裂状态需统一，否则工具链（SkillImprover, skill_manage, skill_view）将持续产生边缘 case

---

*日报生成时间：2026-05-14 | 数据来源：ZeroClaw GitHub 公开 API 与 Issue/PR 元数据*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*