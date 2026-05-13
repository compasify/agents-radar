# OpenClaw 生态日报 2026-05-13

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-13 00:24 UTC

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

# OpenClaw 项目动态日报 | 2026-05-13

---

## 1. 今日速览

OpenClaw 今日呈现**极高活跃度**：24小时内 Issues 与 PR 各更新 500 条，社区讨论密集。项目正加速推进 **Codex 运行时迁移**（#80171 系列），同时密集修复 beta 版本中的认证、媒体工具和渠道稳定性问题。3 个 beta 版本连续发布显示迭代节奏紧凑，但 438 个待合并 PR 提示代码审查队列压力较大。整体健康度良好，核心架构演进与稳定性修复并行。

---

## 2. 版本发布

### v2026.5.12-beta.3 / beta.2 / beta.1
**发布日期**: 2026-05-12

| 版本 | 核心修复 |
|:---|:---|
| [v2026.5.12-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.5.12-beta.3) | Codex harness: 修复当 OpenAI 认证存储于 agent 的 auth-profile 而非环境变量时，`image_generate` 等 media tools 被错误置为不可用的问题 |
| [v2026.5.12-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.12-beta.2) | 同上（重复修复，可能为构建标记问题） |
| [v2026.5.12-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.12-beta.1) | **安全修复**: memory-wiki 权限收紧——ingest 操作需 admin scope，Obsidian search 需 write scope（[#80897](https://github.com/openclaw/openclaw/issues/80897), [#80904](https://github.com/openclaw/openclaw/issues/80904) by @pgondhi987）；Build 优化：跳过被排除 bundled plugins 的复制元数据 |

**迁移注意事项**: beta.1 包含**权限模型变更**，依赖 memory-wiki 的自动化流程需检查 scope 配置；beta.3 的 auth-profile 修复意味着使用环境变量注入 OpenAI 密钥的部署方式可逐步迁移至更安全的 auth-profile 存储。

---

## 3. 项目进展

### 今日合并/关闭的关键 PR

| PR | 作者 | 状态 | 进展说明 |
|:---|:---|:---|:---|
| [#79112](https://github.com/openclaw/openclaw/pull/79112) | kevinslin | **已合并** | 修复 runtime alias 与 compat wrapper 的冲突，解决 TUI/local run 失败模式 |
| [#78444](https://github.com/openclaw/openclaw/pull/78444) | kevinslin | **已合并** | **Codex 原生插件迁移**——将 `openai-curated` 插件从 OpenClaw tool config 迁移至 Codex app-server native 激活，核心架构演进 |
| [#78443](https://github.com/openclaw/openclaw/pull/78443) | kevinslin | **已合并** | Codex 原生插件线程支持，替代 dynamic tools 模式，为 Pi→Codex 运行时切换铺路 |

**整体推进**: Codex 迁移进入**落地执行阶段**——从 RFC（#80171）到原生插件线程（#78443）再到迁移工具（#78444），形成完整闭环。今日合并的 62 个 PR 中，Codex 相关占主导。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|
| **Slack 静默断连** | 16 | 生产环境稳定性——Slack 连接在演示场景下无声失效，无自动恢复机制 | [#72808](https://github.com/openclaw/openclaw/issues/72808) |
| **QA 工具默认套件混淆 Codex-native 与 OpenClaw dynamic tools** | 14 | **Codex 迁移质量保障**——测试框架需区分原生工具与动态工具对等性，避免误报 | [#80319](https://github.com/openclaw/openclaw/issues/80319) |
| **可配置流式看门狗超时** | 12 | **长推理模型支持**——Kimi K2.5/DeepSeek-R1 的 extended thinking 触发 30s 看门狗误杀 | [#68596](https://github.com/openclaw/openclaw/issues/68596) |
| **Codex-vs-Pi 运行时对等性 QA 框架 (RFC)** | 11 | **迁移验证体系**——建立系统性 parity 证明，覆盖 token 效率、工具调用、Testbox | [#80171](https://github.com/openclaw/openclaw/issues/80171) |
| **Image tool: sharp 未安装时错误信息不透明** | 10 | 开发者体验——可选依赖缺失导致 cryptic error，需 fallback 与清晰提示 | [#73148](https://github.com/openclaw/openclaw/issues/73148) |

**背后诉求分析**: 社区核心关切已从"功能有无"转向**迁移质量与生产可靠性**。Slack 断连、看门狗误杀、错误信息不透明均为**运维痛点**；QA 框架系列（#80171/#80319/#80411/#80397/#80936）显示用户对 Codex 迁移的**系统性验证**有强烈需求，而非仅靠信心证明。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#71127](https://github.com/openclaw/openclaw/issues/71127) | **卡死会话检测后永不中止**——gateway 需外部重启恢复 | 开放 | 无 |
| 🔴 **高** | [#80777](https://github.com/openclaw/openclaw/issues/80777) | **敏感凭证持久化明文**——升级后历史 config-audit 日志未清理 Slack/Telegram token | **已关闭** | [#75095](https://github.com/openclaw/openclaw/pull/75095)（部分修复，历史数据需手动处理） |
| 🟡 **中** | [#72879](https://github.com/openclaw/openclaw/issues/72879) | `thought_signature` 400 回归——2026.4.24 修复后在 .25 复发 | 开放 | 无 |
| 🟡 **中** | [#71992](https://github.com/openclaw/openclaw/issues/71992) | Control UI webchat **每条回复重复显示**——#5964/#39469 回归 | 开放 | 无 |
| 🟡 **中** | [#71412](https://github.com/openclaw/openclaw/issues/71412) | `stopChannel` 超时后僵尸任务阻止健康监控重启 | 开放 | 无 |
| 🟡 **中** | [#81114](https://github.com/openclaw/openclaw/issues/81114) | Codex app-server **近窗口期超时回退**——大上下文触发固定超时，降级至 gpt-5.4 | 开放 | 无 |
| 🟢 **低** | [#80437](https://github.com/openclaw/openclaw/issues/80437) | Discord native-slash-command-deploy 失败 | **已关闭** | 未标注 |
| 🟢 **低** | [#70856](https://github.com/openclaw/openclaw/issues/70856) | WhatsApp Windows 反复断连 | **已关闭** | 未标注 |
| 🟢 **低** | [#70734](https://github.com/openclaw/openclaw/issues/70734) | 新会话 `[object Object]` 幻觉——#69079 修复分支回归 | **已关闭** | 未标注 |

**稳定性评估**: 存在**2个高危开放问题**（会话僵死、凭证残留），均需维护者优先响应。Codex 大上下文超时（#81114）是架构性挑战，需评估是否调整固定超时策略。

---

## 6. 功能请求与路线图信号

| 功能请求 | 热度 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **可配置流式看门狗超时** ([#68596](https://github.com/openclaw/openclaw/issues/68596)) | 👍 7 | **高** | 长推理模型已成主流，30s 硬编码不可持续；社区呼声高 |
| **Skill 作者定义 setup hook** ([#80213](https://github.com/openclaw/openclaw/issues/80213)) | 👍 4 | **高** | 关闭 install kinds 与复杂后配置 gap；PR 就绪度高 |
| **Control UI 浏览器面板** ([#63926](https://github.com/openclaw/openclaw/issues/63926)) | 👍 0 | 中 | 登录交接痛点明确，但需 UI 设计投入 |
| **per-agent 隔离浏览器实例 + 代理** ([#37487](https://github.com/openclaw/openclaw/issues/37487)) | 👍 0 | 中 | 多代理并发需求，但架构改动大 |
| **macOS Talk Mode OpenAI Realtime** ([#71195](https://github.com/openclaw/openclaw/issues/71195)) | 👍 1 | 中 | 与 voice-call 插件 parity 需求，但平台限定 |
| **exec() 沙箱隔离与权限模型** ([#58730](https://github.com/openclaw/openclaw/issues/58730)) | 👍 0 | 低-中 | 受 Claude Code 泄露启发，安全敏感，但可能冲击现有插件生态 |

**路线图信号**: Codex 迁移完成后，**长推理模型适配**（看门狗、token 成本）与 **Skill 生态工具链**（setup hook、权限模型）将成为下一波重点。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 Issue | 核心不满 |
|:---|:---|:---|
| **演示/生产突发失效** | [#72808](https://github.com/openclaw/openclaw/issues/72808) | Slack 连接"静默"丢失，无告警、无自愈，演示场景极度尴尬 |
| **运维调试困难** | [#73148](https://github.com/openclaw/openclaw/issues/73148) | 错误信息 opaque（`Failed to optimize image`），需翻源码才知缺 sharp |
| **升级风险不可控** | [#71178](https://github.com/openclaw/openclaw/issues/71178) | `openclaw update` 执行中导致消息全丢，无事务保护 |
| **配置与运行时脱节** | [#63265](https://github.com/openclaw/openclaw/issues/63265) → [#63268](https://github.com/openclaw/openclaw/pull/63268) | `doctor --fix` 以 root 运行误写 /root/.openclaw，覆盖生产配置 |

### 满意点

- **Codex 迁移方向获认可**——#80171 系列讨论积极，用户愿意参与 QA 验证
- **权限收紧及时**——beta.1 的 memory-wiki scope 修复响应迅速

---

## 8. 待处理积压

### 长期未响应的高价值 Issue/PR

| 项目 | 创建 | 最后更新 | 天数 | 风险 | 链接 |
|:---|:---|:---|:---|:---|:---|
| **Session lane starvation** — followup drain 垄断会话通道 20-30min | 2026-03-25 | 2026-05-12 | **48天** | 🔴 高——影响多代理网关核心调度 | [#54488](https://github.com/openclaw/openclaw/issues/54488) |
| **Chrome extension browser relay 移除无跨机替代** | 2026-03-24 | 2026-05-12 | **50天** | 🔴 高——托管服务商生产中断 | [#53599](https://github.com/openclaw/openclaw/issues/53599) |
| **sandbox workspaceAccess none 时 workspace 只读** | 2026-03-06 | 2026-05-12 | **68天** | 🟡 中——隔离模型与工具写入需求冲突 | [#37634](https://github.com/openclaw/openclaw/issues/37634) |
| **PR: 网关工具调用审计日志** | 2026-04-09 | 2026-05-13 | **34天** | 🟡 中——安全合规基础能力，标记需真实行为证明 | [#63557](https://github.com/openclaw/openclaw/pull/63557) |
| **PR: WhatsApp 拒绝列表 denyFrom** | 2026-04-08 | 2026-05-13 | **35天** | 🟢 低——基础访问控制，dirty-candidate 待清理 | [#63302](https://github.com/openclaw/openclaw/pull/63302) |

**维护者提醒**: #54488 与 #53599 已超 45 天未关闭，分别触及**核心调度架构**与**托管服务商生态**，建议纳入下一 sprint 优先级评审。

---

*日报生成时间: 2026-05-13 | 数据来源: github.com/openclaw/openclaw*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析 | 2026-05-13

---

## 1. 生态全景

个人 AI 助手开源生态正经历**从"功能可用"向"生产就绪"的关键跃迁**。头部项目（OpenClaw、Hermes Agent、ZeroClaw）日均处理 50+ PR/Issues，聚焦运行时迁移、网关稳定性与多模态能力；中型项目（NanoBot、CoPaw、IronClaw）在模型弹性路由、Agent 协作协议、Reborn 架构等方向形成差异化技术纵深；边缘设备（PicoClaw）与企业集成（LobsterAI、NanoClaw）场景出现专门化分支。整体呈现**"核心框架收敛、垂直场景分化"**态势，但生产稳定性（长连接自愈、配置一致性、错误可观测性）仍是全生态共同短板。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 版本发布 | 健康度评估 | 阶段定位 |
|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 更新 | 500 更新 | v2026.5.12-beta.1~3 | 🟢 极高活跃，审查队列承压 (438 待合并) | **架构迁移期** |
| **Hermes Agent** | 50 (39新开/活跃, 11关闭) | 50 (30待合并, 20已合并) | 无 | 🟢 高活跃，并发安全债集中爆发 | **质量巩固期** |
| **ZeroClaw** | 13 (5新开, 8关闭) | 50 (32待合并, 18已合并) | 无 | 🟢 高活跃，工具重构收官 | **架构治理期** |
| **CoPaw** | 31 (17活跃, 14关闭) | 39 (13待合并, 26已合并) | v1.1.7-beta.1 | 🟢 高活跃，企业认证突破 | **功能迭代期** |
| **IronClaw** | 29 (关闭13) | 50 (关闭27) | 无 (v0.28.1 QA中) | 🟢 高活跃，Reborn 内核收尾 | **架构重构期** |
| **NanoBot** | 8 (3关闭) | 18 (10已合并) | 无 (v0.1.5.post3) | 🟡 中高活跃，DeepSeek V4 兼容性危机 | **快速迭代期** |
| **LobsterAI** | 0 (数据异常) | 26 (25已合并, 1待处理) | Release/2026.5.11 合入 | 🟡 高合并效率，社区互动缺失 | **功能发布期** |
| **PicoClaw** | 16 | 16 (12待合并) | v0.2.8-nightly | 🟡 中高活跃，安全修复待审 | **边缘场景攻坚期** |
| **NanoClaw** | 5 (全开放) | 19 (15待合并, 4关闭) | 无 | 🟡 中等活跃，容器运行时脆弱 | **基础设施加固期** |
| **NullClaw** | 1 (新开) | 2 (待合并) | 无 | 🟡 低活跃，生产稳定性 PR 积压 | **集成加固期** |
| **ZeptoClaw** | 0 | 3 (2待合并, 1关闭) | 无 | 🔴 低活跃，仅依赖维护 | **维护停滞期** |
| **TinyClaw** | 0 | 0 | 无 | 🔴 无活动 | — |
| **Moltis** | 0 | 0 | 无 | 🔴 无活动 | — |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | 24h 500 Issues + 500 PR，量级碾压（Hermes/ZeroClaw/IronClaw 约 50 级） | **绝对头部**，但 438 待合并 PR 显示治理带宽瓶颈 |
| **技术路线** | **Codex 运行时迁移**——从自研 Pi 引擎向 OpenAI Codex 原生架构切换 | 差异化显著：ZeroClaw 坚守自研工具链，IronClaw 并行 Reborn 双轨，NanoBot 走预设模型路由 |
| **核心优势** | ① 多通道覆盖最全（Slack/Discord/Telegram/WhatsApp/Matrix 全矩阵）；② 权限模型细化（memory-wiki admin/write scope）；③ 迁移 RFC 流程规范（#80171 系列） | Hermes 网关体验更优，CoPaw MCP/OAuth 企业集成更深，ZeroClaw 可观测性更成熟 |
| **相对短板** | ① 生产稳定性债重（Slack 静默断连 #72808、会话僵死 #71127 长期开放）；② 配置运行时脱节（`doctor --fix` 误写 root 配置 #63265）；③ 长推理模型适配滞后（30s 看门狗误杀 Kimi/DeepSeek #68596） | NanoBot 已推 ModelPresetConfig，CoPaw 有流式看门狗讨论，OpenClaw 硬编码策略显僵化 |
| **生态位** | **"最大公约数"框架**——功能最全、社区最大，但创新深度被中型项目局部超越 | 类似 Kubernetes 在早期容器生态的角色：事实标准，但非所有场景最优解 |

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫度 |
|:---|:---|:---|:---:|
| **长推理模型适配** | OpenClaw (#68596)、NanoBot (DeepSeek V4 flash)、Hermes (Kimi-k2.6 覆盖) | 看门狗超时硬编码、reasoning_content 注入兼容性、上下文长度被覆盖 | 🔴 **极高** |
| **生产级网关稳定性** | OpenClaw (Slack 断连 #72808)、Hermes (Telegram PID 锁 #16376/#24067)、ZeroClaw (Discord 媒体 #6556)、PicoClaw (Cron channel error #1757)、NullClaw (WebSocket 长连接 #910) | 静默失效无自愈、连接僵尸无告警、macOS PID 复用退化 | 🔴 **极高** |
| **配置一致性与可预期行为** | OpenClaw (#4159-like 配置漂移)、CoPaw (#4159 DashScope 空 api_key)、NanoClaw (mount 配置丢失 #2424)、IronClaw (onboard DB 错误 #2752) | 配置存在但运行时未生效、变更未原子持久化、重启后状态丢失 | 🟡 **高** |
| **多模态/媒体管道可靠性** | ZeroClaw (Discord/Telegram/WebSocket 媒体修复)、CoPaw (浏览器下载 #4243)、NanoBot (WhatsApp 语音 #3752)、OpenClaw (image_generate auth-profile 修复) | 图片/语音/视频在渠道间传输断裂、容器内外路径隔离、格式标记泄漏 | 🟡 **高** |
| **隐私优先搜索基础设施** | Hermes (Searxng #5941, 28👍)、ZeroClaw (SearXNG #5316)、CoPaw (DuckDuckGo CAPTCHA 痛点) | 商业搜索服务 CAPTCHA/成本/隐私不可控，需自托管替代 | 🟡 **高** |
| **Agent 协作与互操作协议** | CoPaw (ACP/MCP)、IronClaw (Reborn SkillContext)、NullClaw (A2A 性能 #913)、Hermes (多 Agent Discord #14853) | 跨 Agent 通信标准、能力发现、生命周期同步、ack 循环防护 | 🟢 **中** |
| **边缘/本地推理支持** | PicoClaw (OpenVINO #2703, RISC-V/ARM 生态)、NanoBot (Atomic Chat 本地 LLM #3750)、Hermes (MLX 本地) | 低功耗硬件部署、离线场景、数据主权 | 🟢 **中** |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 全通道覆盖 + 企业级权限 + 运行时迁移 | 中大型团队、多平台部署需求 | Pi→Codex 双运行时切换，auth-profile 安全模型 |
| **Hermes Agent** | 网关体验完整性 + 多平台消息基础设施 | 个人极客、小团队、IM 重度用户 | 强调"消息不截断、有按钮、能协作"，网关层优先于 Agent 内核 |
| **ZeroClaw** | 工具链治理 + 可观测性 + 媒体生成基础设施 | 开发者、自托管运维者 | Rust 核心，RateLimitedTool 统一包装器，SSE 健康心跳 |
| **CoPaw** | 企业 MCP 集成 + ACP 异步协作 + 桌面端体验 | 企业开发者、多 Agent 工作流 | OAuth 2.1 PKCE、FastAPI 插件路由、Tauri 2.x 桌面 |
| **IronClaw** | Reborn 架构（TurnRunner/AgentLoop/SkillContext） | 平台开发者、NEAR 生态 | 独立二进制 `ironclaw-reborn`，capability-grant 安全模型，Payroll sidecar |
| **NanoBot** | 模型弹性路由 + 多 IM 记忆隔离 + 轻量部署 | 中国大陆用户、成本敏感型 | ModelPresetConfig + fallback_models，飞书/企业微信深度适配 |
| **LobsterAI** | 长期记忆（梦境巩固）+ 多 Agent 隔离 + 语音输入 | 个人知识管理、创意工作者 | Electron 桌面优先，Agent 级工作目录，记忆自动整合 |
| **PicoClaw** | 边缘 AI + 硬件生态 + Agent 自我进化 | IoT 开发者、嵌入式场景 | 绑定 Sipeed RISC-V/ARM 硬件，Self-Evolution 差异化 |
| **NanoClaw** | 轻量 OpenClaw 替代 + 容器化部署 | 追求简化的开发者 | OneCLI 争议性依赖，容器 mount 配置 CLI 工具 |
| **NullClaw** | 企业工作流嵌入 + A2A 协议 | 调度系统集成者 | `nullboiler` 同步 Webhook，原生消息 vs A2A 性能权衡 |

---

## 6. 社区热度与成熟度分层

```
┌─────────────────────────────────────────────────────────────┐
│  🚀 快速迭代期（功能扩张，Issue/PR 密度高，版本频繁）          │
│     OpenClaw (beta 三连发)、NanoBot (v0.1.6 蓄势)、CoPaw      │
│     特征：新功能快速落地，技术债务同步累积，用户容忍度较高       │
├─────────────────────────────────────────────────────────────┤
│  🏗️ 架构重构期（核心引擎替换，双轨并行，迁移验证）             │
│     IronClaw (Reborn)、OpenClaw (Pi→Codex)                   │
│     特征：长期竞争力投资，短期稳定性牺牲，需 RFC 流程保障        │
├─────────────────────────────────────────────────────────────┤
│  🛡️ 质量巩固期（Bug 修复为主，并发安全/稳定性攻坚）           │
│     Hermes Agent、ZeroClaw、PicoClaw                         │
│     特征：生产环境阻塞问题优先，新功能放缓，测试覆盖强化         │
├─────────────────────────────────────────────────────────────┤
│  🔧 基础设施加固期（容器/配置/部署体验）                       │
│     NanoClaw、NullClaw                                       │
│     特征：运维痛点驱动，架构哲学争议（OneCLI/A2A），社区待激活  │
├─────────────────────────────────────────────────────────────┤
│  💤 维护停滞期（仅依赖更新，无核心开发）                      │
│     ZeptoClaw、TinyClaw、Moltis                              │
│     特征：自动化运维完善，贡献者流失风险，需 Roadmap 信号       │
└─────────────────────────────────────────────────────────────┘
```

---

## 7. 值得关注的趋势信号

| 趋势 | 信号来源 | 对开发者的参考价值 |
|:---|:---|:---|
| **"推理即服务"倒逼运行时适配** | OpenClaw 看门狗误杀、NanoBot reasoning_content 400、Hermes Kimi 端点覆盖 | 长推理模型（Kimi K2.5/DeepSeek-R1/GPT-5.5 extended thinking）已成标配，**流式超时策略必须从静态配置演进为模型感知的动态协商** |
| **网关即产品——IM 体验决定采纳** | Hermes 截断痛点 24 评论、CoPaw Telegram 无流式、OpenClaw Slack 静默断连 | 用户将 Agent 框架视为**消息基础设施**而非 AI 内核，"消息到没到位"比"模型强不强"更影响留存 |
| **MCP + OAuth 2.1 PKCE = 企业集成新标配** | CoPaw #4256、NanoClaw Google Drive MCP #2430 | MCP 从"酷炫协议"变为**企业安全准入门槛**，无认证层的服务器将被排除在合规场景外 |
| **工具链治理进入"统一包装器"阶段** | ZeroClaw RateLimitedTool 系列、OpenClaw Codex native 插件迁移 | 工具数量爆炸后，**限流/审计/生命周期统一治理**成为架构刚需，重复代码模式不可持续 |
| **记忆系统从"能存"到"会整理"** | LobsterAI 梦境巩固、CoPaw 自动摘要+向量索引、NanoBot session 隔离困惑 | 长期记忆竞争点已从容量转向**语义整合质量**，但隔离边界（session/user/agent/global）的设计仍混乱 |
| **边缘 AI 的"硬件-框架"绑定深化** | PicoClaw OpenVINO + Sipeed 芯片、NanoBot Atomic Chat 本地 LLM | 云端模型成本与隐私焦虑驱动，**框架需预设本地推理降级路径**，而非事后补丁 |
| **A2A 协议的性能合法性危机** | NullClaw #913 实测原生更快 | 协议标准化价值 vs 性能开销的张力浮现，**互操作层需证明其延迟成本可接受**，否则将被绕过 |

---

*分析基于 2026-05-13 各项目 GitHub 公开数据，健康度评估综合考量代码活动、社区互动、问题响应速度与架构债务。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-13

## 1. 今日速览

NanoBot 今日维持**高活跃度开发节奏**：18 个 PR 更新（10 个已合并/关闭）、8 个 Issues 更新（3 个关闭），无新版本发布。核心贡献者 `chengyongru` 持续主导架构重构与功能迭代，社区围绕 **DeepSeek V4 兼容性**、**多用户记忆隔离** 和 **模型动态切换** 三大主题展开密集讨论。项目整体健康度良好，但需关注 `deepseek-v4-flash` 的 `reasoning_content` 兼容性问题已形成重复 Bug 报告，存在用户流失风险。

---

## 2. 版本发布

**无新版本发布。** 当前最新版本仍为 `v0.1.5.post3`（2026-05-08 前后发布），该版本引入的飞书 topic 隔离功能正引发用户配置诉求。

---

## 3. 项目进展

### 已合并/关闭的重要 PR（10 个）

| PR | 作者 | 核心进展 | 链接 |
|:---|:---|:---|:---|
| **#3714** `feat(config): add ModelPresetConfig and runtime preset switching` | chengyongru | **里程碑：模型预设系统落地** — 支持命名模型配置包与运行时原子切换，为后续 `/model` 斜杠命令和故障转移奠定基础 | [PR #3714](https://github.com/HKUDS/nanobot/pull/3714) |
| **#3747** `feat(feishu): add topic_isolation config switch` | yorkhellen | **响应社区诉求** — 飞书群组 topic 隔离支持开关（默认开启），解决 Issue #3692 的多文件处理场景痛点 | [PR #3747](https://github.com/HKUDS/nanobot/pull/3747) |
| **#3751** `fix(wecom): preserve real filename from SDK` | 04cb | **修复企业微信文件识别** — 解决 Issue #3737 的 `unknown` 文件名回退问题，恢复 SDK 返回的真实文件名 | [PR #3751](https://github.com/HKUDS/nanobot/pull/3751) |
| **#3757** `refactor(agent): remove ask_user tool` | chengyongru | **架构简化** — 移除基于异常的 `ask_user` 工具，模型现在以自然文本提问，降低控制流复杂度 | [PR #3757](https://github.com/HKUDS/nanobot/pull/3757) |
| **#3758** `fix(provider): preserve Bedrock tool config for history` | Re-bin | **AWS 兼容性修复** — 保留历史 tool 调用的 `toolConfig`，修复 Bedrock Converse 的无工具轮次报错 | [PR #3758](https://github.com/HKUDS/nanobot/pull/3758) |
| **#3729** `refactor(tools): plugin architecture with self-describing tools` | chengyongru | **工具系统插件化** — 硬编码注册（~50 行）→ 自描述插件模式（~25 行），支持动态发现与配置 | [PR #3729](https://github.com/HKUDS/nanobot/pull/3729) |
| **#3738** `fix(providers): set supports_max_completion_tokens for VolcEngine` | AlbertWang688 | **火山引擎兼容性** — 避免 `max_tokens` 与 `max_completion_tokens` 同时发送导致的请求拒绝 | [PR #3738](https://github.com/HKUDS/nanobot/pull/3738) |
| **#3635** `fix(agent): soften SSRF guard recovery` | Re-bin | **安全策略优化** — SSRF 拦截从运行时中止改为非重试工具错误，防止代理陷入代理绕过循环 | [PR #3635](https://github.com/HKUDS/nanobot/pull/3635) |
| **#3755** `chore: remove dead code` | chengyongru | **代码健康** — 经 vulture + coverage 三重验证，移除 5 处死代码（103 行） | [PR #3755](https://github.com/HKUDS/nanobot/pull/3755) |
| **#3759** `fix(webui): default to new chat on load` | XJPeng12 | **UX 微调** — 关闭，未合并（可能需迭代） | [PR #3759](https://github.com/HKUDS/nanobot/pull/3759) |

**整体迈进评估**：配置系统（ModelPresetConfig）与通道隔离（topic_isolation）两大基础设施就位，工具架构完成插件化转型，为下一阶段的多模型智能路由和第三方扩展生态奠定基础。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 🔥1 | **#3744** session 级别 MEMORY 功能请求 | **3** | 多 IM 用户共享同一 Agent 时的 `USER.md`/`MEMORY.md` 隔离机制困惑，`session/` 目录作用不明 | [Issue #3744](https://github.com/HKUDS/nanobot/issues/3744) |
| 🔥2 | **#3689** 中断会话丢失上一轮聊天记录 | **2** | 用户打断循环任务后，Agent 无法通过"最近的任务和会话"定位上下文，要求保留中断状态 | [Issue #3689](https://github.com/HKUDS/nanobot/issues/3689) |
| 🔥3 | **#3742** 支持 `/model` 斜杠命令动态切换模型 | **1** | 中国大陆 Codex/GPT-5.5 网络不稳定时的应急切换需求 | [Issue #3742](https://github.com/HKUDS/nanobot/issues/3742) |

### 背后诉求分析

- **#3744** 反映 NanoBot 的记忆模型文档缺失：用户不理解 `session/` 与 `USER.md`/`MEMORY.md` 的层级关系，多租户场景下的数据隔离策略未明确
- **#3689** 暴露 Agent 循环中断的上下文持久化缺陷，与 #3460 `LongTaskTool` 的多步骤状态恢复需求形成呼应
- **#3742** 的网络稳定性诉求已被 PR #3714（预设系统）和 **#3756**（`fallback_models`）部分响应，但缺少用户触发的动态切换界面

---

## 5. Bug 与稳定性

| 优先级 | Issue | 状态 | 描述 | 已有 Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **P0-重复** | **#3753** / **#3760** | 一关一开 | `deepseek-v4-flash` + `v0.1.5.post3` 的 `reasoning_content` 注入导致 API 400 错误：`"The reasoning_content in the thinking mode must be passed back"` | ❌ **无** — #3753 关闭原因不明，#3760 为同一问题新报告 | [#3753](https://github.com/HKUDS/nanobot/issues/3753) [#3760](https://github.com/HKUDS/nanobot/issues/3760) |
| 🟡 **P1** | **#3754** | OPEN | `deepseek-v4-flash` 跳过 `read_file` 工具调用，对小文件/常见知识（元素周期表）编造内容 | ❌ 无 | [Issue #3754](https://github.com/HKUDS/nanobot/issues/3754) |
| 🟡 **P1** | **#3752** | PR OPEN | WhatsApp 语音转录后 `media_paths` 未清空，LLM 误将 `.ogg` 文件当作未处理附件 | ✅ **PR #3752** 待审 | [PR #3752](https://github.com/HKUDS/nanobot/pull/3752) |

**关键风险**：DeepSeek V4 兼容性问题已形成 **用户侧 workaround 扩散**（切换 `deepseek-chat` 或禁用 `thinking_style`），但官方未给出自动检测方案。PR #3655（显示 reasoning 内容）可能与此相关，需评估是否引入更多不兼容模型。

---

## 6. 功能请求与路线图信号

| 功能需求 | 来源 | 已有 PR 支撑 | 纳入下一版本概率 | 关键路径 |
|:---|:---|:---|:---|:---|
| **模型故障转移 (`fallback_models`)** | 社区痛点 + 架构演进 | ✅ **PR #3756**（今日新建） | **高** | 依赖 #3714 ModelPresetConfig，已形成完整方案 |
| **`/model` 斜杠命令动态切换** | Issue #3742 | ⚠️ 间接支撑（#3714 预设系统） | **中-高** | 需 CLI/通道层接入预设切换 API |
| **session 级记忆隔离** | Issue #3744 | ❌ 无 | **中** | 需明确 `session/` 目录设计意图，可能涉及存储层重构 |
| **中断会话状态恢复** | Issue #3689 | ⚠️ 概念相关（PR #3460 LongTaskTool） | **中** | LongTaskTool 的 `progress` 机制可复用 |
| **工具进度 SSE 事件流** | PR #3745（已开） | ✅ 自支撑 | **高** | 解决 Issue #3698，提升长任务可观测性 |
| **Atomic Chat 本地 LLM 支持** | PR #3750（已开） | ✅ 自支撑 | **中** | 遵循 LM Studio/Ollama 模式，接入成本低 |

**路线图信号**：`fallback_models` + `/model` 命令 + 预设系统形成**弹性模型路由**主题，预计 `v0.1.6` 的核心叙事。

---

## 7. 用户反馈摘要

### 真实痛点

> *"多个 im 用户使用同一个这个 agent 时，产生 USER.md 和 MEMORY.md 机制如何解决？"*
> — **IamWWT**, Issue #3744

> *"发消息打断它，让它重新开始测试。它会回复说：让我看看最近的任务和会话，找一下你提到的'测试'是什么。"*
> — **lyh161**, Issue #3689（上下文丢失的挫败感）

> *"codex gpt-5.5 model... not stable in China Mainland, like request timeout/error"*
> — **futurist**, Issue #3742（网络基础设施限制）

> *"使用 deepseek-v4-flash 时，post3 自动注入 reasoning_content 字段，导致 API 报错"*
> — **renyizhongguo**, Issue #3753/3760（版本升级引入的兼容性回归）

### 满意点

- 飞书 topic 隔离功能快速响应社区反馈（Issue #3692 → PR #3747，4 天闭环）
- 企业微信文件名修复及时（Issue #3737 → PR #3751，1 天闭环）

### 不满意/困惑点

- `session/` 目录文档缺失，多用户场景行为不可预测
- `v0.1.5.post3` 的 post-release 版本号策略未解释，用户不确定是否为稳定版
- DeepSeek V4 支持"看起来可用但实际报错"，测试覆盖不足

---

## 8. 待处理积压

| 类型 | 条目 | 创建时间 | 风险 | 建议行动 |
|:---|:---|:---|:---|:---|
| **长期 PR** | **#3460** `LongTaskTool` | 2026-04-26（**17 天**） | 架构级功能，阻塞多步骤任务场景 | 评估与 #3689 中断恢复的协同设计，明确里程碑 |
| **重复 Bug** | **#3753** 已关 / **#3760** 新开 | 同日 | 关闭策略不一致，用户困惑 | 统一 `reasoning_content` 兼容性处理方案，确认 #3753 关闭是否为误操作 |
| **待审 PR** | **#3756** `fallback_models` | 今日 | 高价值功能，需快速迭代 | 优先 review，与 #3714 预设系统形成完整发布叙事 |
| **待审 PR** | **#3745** 工具进度 SSE | 2 天前 | 长任务可观测性基础设施 | 确认与现有 streaming 协议的兼容性 |
| **待审 PR** | **#3655** 显示 reasoning 内容 | 7 天前 | 与 DeepSeek V4 兼容性直接相关 | 评估是否加剧 #3753/#3760 问题，或可作为修复载体 |

---

*日报生成时间：2026-05-13 | 数据来源：HKUDS/nanobot GitHub 公开活动*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-13

---

## 1. 今日速览

Hermes Agent 今日保持**高活跃度**，24小时内产生 **50 条 Issues 更新**（39 新开/活跃，11 关闭）与 **50 条 PR 更新**（30 待合并，20 已合并/关闭），无新版本发布。社区聚焦**并发安全修复**（TOCTOU 竞态条件）、**多平台网关稳定性**（Telegram/Matrix/WhatsApp）及**新兴模型适配**（MiMo、Kimi-k2.6、DeepSeek）。值得关注的是，今日出现 **3 组重复 PR 竞争**（#24638/#24662 均修复 MiMo reasoning，#24661/#24665 均修复 gateway_restart_notification），反映贡献者协作需加强同步。整体项目健康度良好，但 P1/P2 级 Bug 修复压力较大。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 说明 | 关联 Issue |
|:---|:---|:---|:---|
| [#17065](https://github.com/NousResearch/hermes-agent/pull/17065) | 0xsir0000 | **修复 Kimi 兼容端点的 thinking 抑制**：`build_anthropic_kwargs` 跳过 Kimi `/coding` 端点的 Anthropic `thinking` 参数，避免消息历史验证失败 | #17057 |
| [#24659](https://github.com/NousResearch/hermes-agent/pull/24659) | teknium1 | **修复 Cron WhatsApp 投递静默丢失**：`_HOME_TARGET_ENV_VARS` 补充 `whatsapp` 条目，使定时任务可正确获取环境变量 | [#22997](https://github.com/NousResearch/hermes-agent/issues/22997) |
| [#24658](https://github.com/NousResearch/hermes-agent/pull/24658) | teknium1 | **修复 Tavily /crawl 端点认证缺失**：补充 `Authorization: Bearer` 请求头 | — |

**进展评估**：今日合并以**补丁级修复**为主，未引入重大功能。Cron-WhatsApp 集成修复填补了生产环境关键路径；Kimi 端点兼容性修复维护了多提供商生态的稳定性。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 评论 | 👍 | 核心诉求 |
|:---|:---|:---|:---|
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) **Response truncated due to output length limit** | 24 | 4 | **长期痛点**：CLI/网关场景下长文本生成被截断，影响 Telegram/Discord/Slack 用户体验。已关闭但社区仍在寻求根本解决方案（流式分块？可配置上限？） |
| [#22714](https://github.com/NousResearch/hermes-agent/issues/22714) **Matrix gateway: no in-band channel for per-message LLM orchestration** | 7 | 0 | **企业级需求**：Matrix 房间中无法按消息驱动下游调度器，限制多智能体协作架构 |
| [#14853](https://github.com/NousResearch/hermes-agent/issues/14853) **Multi-Agent Discord channel collaboration** | 6 | 1 | **多智能体互操作**：3 个 Hermes 实例共享频道时彼此消息不可见，需历史注入与级联预防机制 |
| [#15311](https://github.com/NousResearch/hermes-agent/issues/15311) **Generic action buttons / inline keyboard support** | 5 | 4 | **交互体验**：Telegram 内联键盘需泛化到多平台，而非硬编码单功能 |
| [#5941](https://github.com/NousResearch/hermes-agent/issues/5941) **Add Searxng as default web search provider** | 4 | **28** | **隐私与成本**：社区强烈希望替代 Firecrawl/Tavily 等商业服务，👍 数显示广泛支持 |

**诉求分析**：热点议题呈现 **"网关体验 > 核心 Agent"** 的分布特征。用户将 Hermes 作为**多平台消息基础设施**使用，对交互完整性（不截断、有按钮）、多智能体协作、隐私可控搜索有强烈需求。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| **P1** | [#24268](https://github.com/NousResearch/hermes-agent/issues/24268) | **Kimi-k2.6 上下文长度被错误覆盖为 32K**：OpenRouter 返回 32K 覆盖硬编码 256K，导致初始化失败 `ValueError: below minimum 64,000` | ❌ 无 PR |
| **P1** | [#24592](https://github.com/NousResearch/hermes-agent/issues/24592) | **API Server 路径返回无空格文本**：流式响应词间空白被剥离，#2049 修复未覆盖此路径 | ❌ 无 PR |
| **P1** | [#22714](https://github.com/NousResearch/hermes-agent/issues/22714) | **Matrix 网关缺乏消息级编排通道**：架构级限制，影响下游调度器集成 | ❌ 无 PR |
| **P2** | [#24067](https://github.com/NousResearch/hermes-agent/issues/24067) | **macOS PID 锁检查失效**：系统进程复用 PID 导致僵尸锁，网关重启失败 | ❌ 无 PR |
| **P2** | [#24640](https://github.com/NousResearch/hermes-agent/issues/24640) | **gateway_restart_notification 配置被静默忽略**：配置存在但逻辑未桥接 | ✅ **#24661, #24665 竞争修复** |
| **P2** | [#24544](https://github.com/NousResearch/hermes-agent/issues/24544) | **Homebrew 安装 --tui 崩溃**：ui-tui 目录未打包 | ❌ 无 PR |
| **P2** | [#24623](https://github.com/NousResearch/hermes-agent/issues/24623) | **URL 安全 TOCTOU 竞态**：`_allow_private_resolved` 提前置 True 导致并发脏读 | ✅ **#24636** |
| **P2** | [#16376](https://github.com/NousResearch/hermes-agent/issues/16376) | **macOS Telegram token 锁因 PID 复用阻塞** | ✅ 已关闭 |
| **P2** | [#24541](https://github.com/NousResearch/hermes-agent/issues/24541) | **`hermes update` 触发 `git reset --hard` 清空 12 个助手**：数据丢失事故 | ❌ 无 PR（设计级问题） |
| **P3** | [#24218](https://github.com/NousResearch/hermes-agent/issues/24218) | **deepseek-v4-pro 成本显示为 unknown**：定价表缺失新模型 ID | ✅ 已关闭 |
| **P3** | [#24443](https://github.com/NousResearch/hermes-agent/issues/24443) | **MiMo reasoning_content 未在多轮对话中保留** | ✅ **#24638, #24662 竞争修复** |

**稳定性评估**：**并发安全类 Bug 集中爆发**（#24651 Event 非原子性、#24623 TOCTOU），反映高并发网关场景下的工程债务。建议维护者优先 review 并统一合并 #24666/#24668（重复 PR 需协调）。

---

## 6. 功能请求与路线图信号

| Issue | 类型 | 纳入可能性 | 信号强度 |
|:---|:---|:---|:---|
| [#5941](https://github.com/NousResearch/hermes-agent/issues/5941) Searxng 搜索支持 | 基础设施 | **高** | ⭐⭐⭐⭐⭐ 28 👍，社区呼声最高，改动范围明确（`web_tools.py`） |
| [#15311](https://github.com/NousResearch/hermes-agent/issues/15311) 泛化内联键盘 | 网关交互 | **中高** | ⭐⭐⭐⭐ 已有 Telegram 硬编码实现，需抽象层 |
| [#14853](https://github.com/NousResearch/hermes-agent/issues/14853) 多 Agent Discord 协作 | 架构 | **中** | ⭐⭐⭐ 需历史注入协议设计，可能依赖 ACP |
| [#21303](https://github.com/NousResearch/hermes-agent/issues/21303) 持久化专用子 Agent | 架构 | **中** | ⭐⭐⭐ 与自改进循环重构相关，长期路线图 |
| [#24617](https://github.com/NousResearch/hermes-agent/issues/24617) DeepSeek prompt caching | 性能优化 | **高** | ⭐⭐⭐⭐ 已有 PR #24639，OpenCode 网关已验证可行 |
| [#24512](https://github.com/NousResearch/hermes-agent/issues/24512) Groq 提供商支持 | 提供商扩展 | **中** | ⭐⭐⭐ 速度/免费 tier 诉求，但提供商生态维护负担需权衡 |

**路线图判断**：**Searxng 集成**与 **DeepSeek prompt caching** 最可能进入下一版本，前者社区驱动力强，后者已有成熟 PR。

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 场景 | 来源 Issue | 用户原声提炼 |
|:---|:---|:---|
| **数据安全焦虑** | [#24541](https://github.com/NousResearch/hermes-agent/issues/24541) | *"sb Hermes 误删了我的所有助手，12个助手全都被清空"* — `hermes update` 的 `git reset --hard` 机制对用户数据毁灭性，无备份警告 |
| **配置即代码的脆弱性** | [#24644](https://github.com/NousResearch/hermes-agent/issues/24644) | 配置字段存在但逻辑未连接，"静默忽略"比报错更令人困惑 |
| **macOS 生产环境不稳定** | [#24067](https://github.com/NousResearch/hermes-agent/issues/24067), [#16376](https://github.com/NousResearch/hermes-agent/issues/16376) | PID 锁机制在 macOS 上因 `/proc` 缺失而退化，企业部署受阻 |
| **长文本场景不可用** | [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | "Response truncated" 频繁打断网关对话流，用户被迫拆分请求 |

### 😊 满意点

- **多平台网关覆盖**（Telegram/Discord/Matrix/WhatsApp）是用户选择 Hermes 的核心原因
- **自定义 provider 机制**（OpenRouter、本地 MLX 等）获得高级用户认可

### 🔍 使用场景洞察

- **教育场景**：[#24512](https://github.com/NousResearch/hermes-agent/issues/24512) 大学生寻求 Groq 免费 tier 构建课程 Agent，成本敏感型用户增长
- **运维场景**：[#22714](https://github.com/NousResearch/hermes-agent/issues/22714) 企业运维团队将 Hermes 作为 Matrix 房间中的长期驻留 Agent，需要与现有工单系统编排

---

## 8. 待处理积压

### ⚠️ 需维护者重点关注

| Issue | 创建时间 | 状态 | 风险 |
|:---|:---|:---|:---|
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) 输出截断 | 2026-04-10 | 已关闭但 24 评论持续 | **声誉风险**：高频痛点，关闭方案未根治，用户反复 reopen |
| [#5941](https://github.com/NousResearch/hermes-agent/issues/5941) Searxng | 2026-04-07 | 开放，28 👍 | **社区流失风险**：高票功能长期无响应，贡献者可能 fork 自行实现 |
| [#5352](https://github.com/NousResearch/hermes-agent/issues/5352) Open WebUI 无工具进度 | 2026-04-05 | 开放，3 👍 | 生态兼容性债务 |
| [#10175](https://github.com/NousResearch/hermes-agent/issues/10175) GPT-5 加密内容降级 | 2026-04-15 | 开放 | 前沿模型适配滞后 |

### 🔧 PR 协调提醒

- **#24638 vs #24662**：两者均修复 MiMo reasoning_content，作者分别为 wesleysimplicio 和自身（？），需确认是否为重复提交
- **#24661 vs #24665**：均修复 gateway_restart_notification，建议统一 review 避免冲突合并

---

*日报生成时间：2026-05-13 | 数据来源：NousResearch/hermes-agent GitHub 公开活动*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-13

---

## 1. 今日速览

PicoClaw 今日保持**高活跃度**，24小时内 Issues 和 PR 各更新 16 条，社区互动密集。项目发布 **v0.2.8-nightly.20260512** 夜间构建，主线持续迭代。值得关注的是，2 个高优先级 Bug（PID 崩溃循环、沙箱逃逸）均有活跃 PR 待审，安全与稳定性成为近期焦点。12 个待合并 PR 中，工具透明度、多模态推理、Web UI 增强是主要方向，显示项目正从"能用"向"好用"演进。

---

## 2. 版本发布

### 🔧 Nightly Build: v0.2.8-nightly.20260512.777269b4

| 属性 | 详情 |
|:---|:---|
| 发布日期 | 2026-05-12 |
| 构建类型 | 自动化夜间构建（可能不稳定） |
| 对比基线 | [v0.2.8 → main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) |

**迁移注意事项：** 此为自动化构建，**不建议生产环境使用**。从变更日志范围看，main 分支较 v0.2.8 有显著累积更新，包含多项未发布功能。关注稳定性的用户建议等待正式版。

---

## 3. 项目进展

### ✅ 今日合并/关闭的 PR（4 条）

| PR | 作者 | 贡献 | 链接 |
|:---|:---|:---|:---|
| **#2505** | MichelSantos | **构建优化**：修复工作区文件嵌入逻辑，确保二进制仅包含最新 `workspace` 内容，消除残留文件导致的 onboard 污染 | [PR #2505](https://github.com/sipeed/picoclaw/pull/2505) |
| **#2490** | MichelSantos | **配置修复**：更新 onboard 向导中的配置文件说明，适配 v0.2.5+ 的 `config.json` + `.security.yml` 双文件体系 | [PR #2490](https://github.com/sipeed/picoclaw/pull/2490) |
| **#2852** | lxowalle | **文档补齐**：为 Agent 自我进化功能添加 `evolution` 配置块文档及 Web UI 支持 | [PR #2852](https://github.com/sipeed/picoclaw/pull/2852) |
| **#2854** | lxowalle | **社区运营**：添加 LicheeRV-Claw 开发板 AliExpress 上架资讯 | [PR #2854](https://github.com/sipeed/picoclaw/pull/2854) |

**里程碑意义**：MichelSantos 的两项修复清除了 v0.2.5 配置重构后的技术债务，lxowalle 的文档工作标志着 **Agent 自我进化（Self-Evolution）** 功能正式面向用户可配置，这是 PicoClaw 区别于基础 Agent 框架的核心差异化能力。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 1 | **#2513** [CLOSED] gateway start abnormal | **9** | 网关启动异常排查，涉及 `picoclaw gateway -E` 进程行为 | [#2513](https://github.com/sipeed/picoclaw/issues/2513) |
| 2 | **#1950** [OPEN] Streaming Output for Web Chat | **8** | Web 端流式输出体验，"Nice-to-Have"但用户长期期待 | [#1950](https://github.com/sipeed/picoclaw/issues/1950) |
| 3 | **#1757** [OPEN] 定时任务触发 channel error | **8** | Cron 调度与 Telegram 通道的稳定性，边缘设备（Rpi Zero W）场景 | [#1757](https://github.com/sipeed/picoclaw/issues/1757) |

**诉求分析**：Web 流式输出（#1950）和 Cron 任务可靠性（#1757）均属于**"低频刚需"**——日常使用不频繁，一旦需要则体验断裂。Raspberry Pi Zero 等低功耗硬件的持续出现，表明 PicoClaw 在 IoT/边缘 AI 场景有真实用户基础，但资源受限环境下的稳定性仍需加强。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **HIGH** | **#2720** | **PID 文件残留导致崩溃循环**：OS 复用 PID 后，单例检查未验证进程身份，gateway 无法启动 | **OPEN** | **#2813** 待审 | [#2720](https://github.com/sipeed/picoclaw/issues/2720) |
| 🔴 **HIGH** | **#2688** | **沙箱逃逸**：`find /` 可绕过工作区目录限制，枚举全文件系统 | **OPEN** | **#2693** 待审 | [#2688](https://github.com/sipeed/picoclaw/issues/2688) |
| 🟡 MEDIUM | **#2742** | v0.2.8 gateway 启动无通道（Telegram 配置失效） | **OPEN** | 无 | [#2742](https://github.com/sipeed/picoclaw/issues/2742) |
| 🟡 MEDIUM | **#2753** | 源码构建后 `picoclaw-launcher` 二进制缺失（文档/构建链不一致） | **OPEN** | 无 | [#2753](https://github.com/sipeed/picoclaw/issues/2753) |
| 🟡 MEDIUM | **#1757** | 每小时定时任务触发 channel error | **OPEN** | 无 | [#1757](https://github.com/sipeed/picoclaw/issues/1757) |

**风险评估**：两个 HIGH 优先级 Bug 均有成熟 PR 待合并，建议优先审阅 #2813（PID 身份验证）和 #2693（沙箱加固），这是阻断生产部署的关键路径。

---

## 6. 功能请求与路线图信号

| 功能方向 | Issue/PR | 信号强度 | 纳入可能性 | 链接 |
|:---|:---|:---:|:---|:---|
| **Web 流式输出** | #1950 | ⭐⭐⭐⭐⭐ | **高**（基础设施已具备，需前端适配） | [#1950](https://github.com/sipeed/picoclaw/issues/1950) |
| **配置系统可靠性** | #2771 + #2831/#2832/#2833 系列 | ⭐⭐⭐⭐⭐ | **极高**（维护者主动拆分 PR，正在推进） | [#2771](https://github.com/sipeed/picoclaw/issues/2771) |
| **Gemini 联网搜索** | PR #2763 | ⭐⭐⭐⭐☆ | **高**（Provider 扩展模式成熟） | [#2763](https://github.com/sipeed/picoclaw/pull/2763) |
| **Intel OpenVINO 本地推理** | PR #2703 | ⭐⭐⭐⭐☆ | **中高**（边缘场景刚需，契合 Sipeed 硬件生态） | [#2703](https://github.com/sipeed/picoclaw/pull/2703) |
| **Xiaomi Mimo 多模态** | PR #2755 | ⭐⭐⭐☆☆ | **中**（streaming reasoning + video，技术前瞻但生态绑定） | [#2755](https://github.com/sipeed/picoclaw/pull/2755) |
| **无限上下文/记忆压缩** | #2774 | ⭐⭐☆☆☆ | **低**（参考外部插件，架构改动大） | [#2774](https://github.com/sipeed/picoclaw/issues/2774) |
| **WhatsApp 预编译构建** | #2625 | ⭐⭐⭐☆☆ | **中**（构建系统调整，非核心功能） | [#2625](https://github.com/sipeed/picoclaw/issues/2625) |

**路线图判断**：配置系统重构（#2771 系列）是当前最明确的**进行中特性**，三个拆分 PR（#2831 配置校验、#2832 模型目录、#2833 连接测试）显示维护者采用增量交付策略，预计 v0.2.9 将包含完整的配置体验升级。

---

## 7. 用户反馈摘要

### 😤 痛点

| 场景 | 来源 | 具体描述 |
|:---|:---|:---|
| **构建/部署体验断裂** | #2753, #2625 | "按 README 源码构建后 launcher 不存在"；"arm64 预编译包缺少 WhatsApp，每次更新需手动重编" |
| **配置迁移困惑** | #2771 | `config.example.json` 仍用 V2 格式，新用户复制即用会失败 |
| **边缘设备稳定性** | #1757, #2720 | Rpi Zero W 上 Cron + Telegram 组合不可靠；PID 残留导致"莫名其妙"无法启动 |
| **安全感知落差** | #2688 | "以为沙箱安全，结果 `find /` 能跑通"，安全承诺与实际实现存在 gap |

### 😊 满意点

| 场景 | 来源 | 具体描述 |
|:---|:---|:---|
| **硬件兼容性** | #2646 | NXP i.MX93 EVK 验证成功，ARM64 嵌入式场景覆盖扩展 |
| **配置备份机制** | #2771 | 用户认可 V0→V3 增量迁移 + 日期戳备份设计，认为是"成熟的表现" |

---

## 8. 待处理积压

### ⚠️ 需维护者关注的长期项

| Issue/PR | 创建时间 | 最后更新 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| **#1950** Web Chat 流式输出 | 2026-03-24 | 2026-05-12 | 用户期待高，竞品普遍支持，长期悬置影响口碑 | 评估前端 SSE/WebSocket 实现成本，或标记 "help wanted" |
| **#1757** Cron 定时任务 channel error | 2026-03-18 | 2026-05-12 | 边缘设备核心场景，8 条评论无结论 | 复现 Rpi Zero W 环境，确认是资源竞争还是通道生命周期 bug |
| **#2491** Session 管理命令 (/status, /compact, /new) | 2026-04-12 | 2026-05-12 | PR 已提交但无审阅，上下文压缩是长期痛点 | 安排代码审阅，与 #2774 记忆管理议题统筹考虑 |
| **#2703** Intel OpenVINO 支持 | 2026-04-28 | 2026-05-12 | 硬件生态战略契合，但 PR 无评论 | Sipeed 官方评估与自有硬件线（RISC-V/ARM）的协同价值 |

---

*日报基于 GitHub 公开数据生成，时间范围：2026-05-12 UTC*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-13

## 1. 今日速览

NanoClaw 今日保持**高活跃度**，24 小时内产生 **5 条新 Issue**（全部开放）和 **19 条 PR 更新**（15 条待合并，4 条已关闭/合并）。项目核心关注点集中在**安全加固**（OneCLI 网络绑定漏洞）、**附件处理链路修复**（Discord/WhatsApp 双通道）以及**容器运行时稳定性**（mount 配置持久化、daemon 重启恢复）。社区贡献者活跃，PR 提交质量较高，多条 PR 标注 `follows-guidelines`，但无新版本发布，功能迭代以修复和技能扩展为主。

---

## 2. 版本发布

**无新版本发布。** 最新 Release 暂无更新。

---

## 3. 项目进展

### 已合并/关闭的 PR（4 条）

| PR | 作者 | 状态 | 进展说明 |
|:---|:---|:---|:---|
| [#2439](https://github.com/nanocoai/nanoclaw/pull/2439) | jesolsen | **CLOSED** | `webhook` 通道类型（Supabase/GitHub Actions 推送入站）—— **关闭未合并**，可能因设计方向调整或需重构 |
| [#2422](https://github.com/nanocoai/nanoclaw/pull/2422) | TriKro | **CLOSED** | Google OAuth 基础技能 + 诊断 MCP 工具——**关闭未合并**， foundation skill 的合并策略待明确 |
| [#1912](https://github.com/nanocoai/nanoclaw/pull/1912) | boskodev790 | **CLOSED** | 空容器 stdout 回退解析器修复——**关闭未合并**，可能因方案替代或长期无响应 |
| [#2425](https://github.com/nanocoai/nanoclaw/pull/2425) | davekim917 | **CLOSED** | 容器 CLI 版本升级（`claude-code` 2.1.119→2.1.139 等）——**已合并**，基础设施维护完成 |

**关键推进**：容器依赖版本完成安全刷新；webhook 通道和 Google 生态技能虽关闭，但相关代码可能以其他 PR 形式继续演进（如 [#2430](https://github.com/nanocoai/nanoclaw/pull/2430) 的 Google Drive MCP 技能）。

---

## 4. 社区热点

| 议题 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|
| [#2437](https://github.com/nanocoai/nanoclaw/issues/2437) 移除/改进 OneCLI 依赖 | 0 👍, 0 评论 | **架构哲学冲突**：项目定位"轻量、可推理的 OpenClaw 替代"，但 OneCLI 引入额外部署复杂度。作者 `carderne` 质疑这与核心价值主张矛盾，反映社区对**简化部署路径**的强烈诉求 |
| [#2433](https://github.com/nanocoai/nanoclaw/issues/2433) OneCLI 安装后 admin API/Postgres 暴露于 docker0 | 0 👍, 0 评论, **Priority: High** | **安全红线问题**：裸机 Linux 上 OneCLI 自动绑定 docker0 桥接 IP，导致 admin API (`:10254`) 和 Postgres (`:5432`) 可被同网段容器访问。NanoClaw agent 容器运行在同一 bridge，形成**横向移动风险**。已有配套修复 PR [#2434](https://github.com/nanocoai/nanoclaw/pull/2434) |

**热点洞察**：OneCLI 成为今日**双重焦点**——既被质疑为架构负担，又暴露实际安全漏洞。维护者需在"生态整合"与"独立轻量"之间明确优先级。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#2433](https://github.com/nanocoai/nanoclaw/issues/2433) | OneCLI 安装后 admin API + Postgres 绑定 docker0，同 bridge 容器可未授权访问 | ✅ **已有 Fix PR** [#2434](https://github.com/nanocoai/nanoclaw/pull/2434)（High Priority，待合并） |
| 🟡 **High** | [#2426](https://github.com/nanocoai/nanoclaw/issues/2426) / [#2427](https://github.com/nanocoai/nanoclaw/pull/2427) | Discord 图片消息仅显示 `[image: file.png]`，LLM 无法实际解析图像内容 | ✅ **Fix PR 已提交** [#2427](https://github.com/nanocoai/nanoclaw/pull/2427)（`b1ek` 自修复） |
| 🟡 **High** | [#2429](https://github.com/nanocoai/nanoclaw/pull/2429) | WhatsApp 入站媒体存储于 host `<repo>/data/attachments/`，容器因 mount 隔离无法访问 `localPath` | 🔄 **Fix PR 待合并**（路由至共享 session inbox） |
| 🟡 **High** | [#2424](https://github.com/nanocoai/nanoclaw/issues/2424) | Daemon 重启后容器 mount 配置部分丢失（`/workspace/agent` bind 缺失），无错误提示 | 🔄 **相关 PR 待合并** [#2432](https://github.com/nanocoai/nanoclaw/pull/2432)（add-mount/remove-mount CLI 工具） |
| 🟠 **Medium** | [#2423](https://github.com/nanocoai/nanoclaw/issues/2423) | 出站消息投递失败（API 非 2xx/限流/内容过滤）静默丢弃，agent 无感知 | ❌ **尚无 Fix PR** |
| 🟠 **Medium** | [#2435](https://github.com/nanocoai/nanoclaw/pull/2435) | Webhook server 硬编码端口 3000，冲突时 `EADDRINUSE` 崩溃 | 🔄 **Fix PR 待合并**（`WEBHOOK_PORT` 环境变量配置） |

**稳定性评估**：容器运行时和消息投递链路的**可靠性缺口**明显——mount 配置持久化、失败通知机制、端口冲突处理均为生产部署阻塞项。

---

## 6. 功能请求与路线图信号

| 需求来源 | 功能方向 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#2437](https://github.com/nanocoai/nanoclaw/issues/2437) | 移除/替代 OneCLI 依赖 | ⭐⭐⭐ 中 | 架构级决策，需维护者权衡生态整合成本；若 OneCLI 安全问题持续，可能倒逼解耦 |
| [#2439](https://github.com/nanocoai/nanoclaw/pull/2439)（已关闭） | Webhook 通道类型（Supabase/GitHub Actions 推送） | ⭐⭐⭐⭐ 中高 | 设计已完整（bearer/auth header 认证、绕过 Chat SDK），关闭或因时机问题，预计重构后回归 |
| [#2430](https://github.com/nanocoai/nanoclaw/pull/2430) | `/add-gdrive-tool` Google Drive MCP 技能 | ⭐⭐⭐⭐⭐ 高 | 明确跟随 `/add-gmail-tool`、`/add-gcal-tool` 模式，Google 办公套件生态补齐，代码已就绪 |
| [#2431](https://github.com/nanocoai/nanoclaw/pull/2431) | Slack DM/频道差异化线程策略 | ⭐⭐⭐⭐ 中高 | 接口扩展（`shouldUseThreadsFor`）设计优雅，向后兼容，解决实际 UX 痛点 |
| [#1545](https://github.com/nanocoai/nanoclaw/pull/1545) | `/add-model-config` 每调用模型配置技能 | ⭐⭐⭐⭐ 中高 | 3 月提交，今日更新，长期维护中，模型灵活性是 AI 助手核心竞争点 |
| [#2432](https://github.com/nanocoai/nanoclaw/pull/2432) | `ncl groups config add-mount/remove-mount` CLI | ⭐⭐⭐⭐⭐ 高 | 直接关联 [#2424](https://github.com/nanocoai/nanoclaw/issues/2424) 生产故障，运维刚需 |

---

## 7. 用户反馈摘要

> **部署体验痛点**
> - *"NanoClaw 标榜轻量可替代，但 OneCLI 依赖显著削弱这一点"* —— `carderne` [#2437](https://github.com/nanocoai/nanoclaw/issues/2437)
> - 核心诉求：**`pnpm run dev` 即运行的零配置体验** vs 当前 OneCLI 的额外认知负担

> **安全运维焦虑**
> - *"admin API 和 Postgres 绑定 docker0，agent 容器在同一 bridge"* —— `glifocat` [#2433](https://github.com/nanocoai/nanoclaw/issues/2433)
> - 裸机部署场景下，**默认安全边界不清**是生产采纳障碍

> **消息链路黑盒**
> - *"agent 已 ack 消息，但投递失败后无任何信号回传"* —— `jumprope-jesse` [#2423](https://github.com/nanocoai/nanoclaw/issues/2423)
> - **可观测性缺失**：失败静默 vs 显式反馈，直接影响 agent 行为一致性

> **容器状态脆弱性**
> - 文件夹重命名 + daemon 重启 → mount 部分丢失，**无错误 surfaced** —— `jumprope-jesse` [#2424](https://github.com/nanocoai/nanoclaw/issues/2424)
> - 期望：配置变更的**原子性持久化**和重启后的**完整性校验**

---

## 8. 待处理积压

| PR/Issue | 创建时间 | 最后更新 | 积压天数 | 风险说明 |
|:---|:---|:---|:---|:---|
| [#1845](https://github.com/nanocoai/nanoclaw/pull/1845) v2: 时间戳 ISO 8601 规范化 | 2026-04-18 | 2026-05-12 | **25 天** | 数据格式不一致影响跨适配器互操作，v2 分支关键基础修复 |
| [#1917](https://github.com/nanocoai/nanoclaw/pull/1917) / [#1913](https://github.com/nanocoai/nanoclaw/pull/1913) 重命名 `@Andy` 触发引用 | 2026-04-22 | 2026-05-12 | **21 天** | 品牌定制场景下的体验断裂，两条 PR 内容重叠需合并决策 |
| [#1916](https://github.com/nanocoai/nanoclaw/pull/1916) 数值配置环境变量 NaN 防护 | 2026-04-22 | 2026-05-12 | **21 天** | 配置解析鲁棒性，同类模式已在同文件应用，低风险的收尾工作 |
| [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) 未知 slash 命令视为普通聊天 | 2026-05-08 | 2026-05-12 | **5 天** | SDK 集成体验问题，影响用户自然交互 |

**维护者行动建议**：`boskodev790` 的 4 条 4 月 PR（#1912/#1913/#1916/#1917）形成**批量积压**，建议集中 review；`evenisse` 的 v2 时间戳修复跨月未决，可能阻塞 v2 发布节奏。

---

*日报生成时间：2026-05-13 | 数据来源：NanoClaw GitHub 公开活动流*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-13

> **项目地址**: [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **分析周期**: 2026-05-12 至 2026-05-13（UTC）

---

## 1. 今日速览

NullClaw 本日维持**低度活跃**状态。社区贡献节奏平稳：2 个功能/修复 PR 处于待合并队列，1 个性能相关 Issue 新开启。无版本发布，代码库未发生合并动作。值得注意的是，两个 PR 均聚焦**网关层稳定性与集成能力**——分别针对 Discord/WebSocket 长连接可靠性（PR #910）和同步 Webhook 工作流（PR #912），显示项目正从核心协议向**生产级部署韧性**演进。整体健康度良好，但 PR 积压需维护者及时审阅。

---

## 2. 版本发布

**无新版本发布。**

最近一次 Release 待维护者确认。两个高价值 PR（#910、#912）均处于 Open 状态，建议合并后评估是否触发 patch/minor 版本。

---

## 3. 项目进展

| PR | 状态 | 进展说明 | 健康度影响 |
|:---|:---|:---|:---|
| [#912](https://github.com/nullclaw/nullclaw/pull/912) `feat(gateway): synchronous /webhook for paired-token workers` | ⏳ 待合并 | 填补 `docs/integration-analysis.md` 中标记为 **HIGH PRIORITY** 的 Gap 3——为 `nullboiler` 调度系统提供 Worker 端点。实现同步 Webhook 机制，使 paired-token 工作节点能接收即时指令，降低异步轮询延迟 | 🔵 中等正向——补齐集成架构关键缺口 |
| [#910](https://github.com/nullclaw/nullclaw/pull/910) `fix(discord,websocket): gateway stability — watchdog, backoff, interrupt-safe stop, TLS leak fix` | ⏳ 待合并 | **5 项 Discord 网关稳定性修复**，跨 4 架构（macOS arm64 / Linux aarch64 musl / Linux riscv64 musl / Android aarch64）完成 **12 小时 soak test**。覆盖：看门狗心跳、指数退避重连、中断安全关闭、TLS 内存泄漏修复 | 🟢 **高正向**——解决生产环境长连接崩溃风险，多架构验证增强可移植性承诺 |

**今日合并数：0** | 项目整体推进：★★★☆☆（架构加固期，代码未入库）

---

## 4. 社区热点

| 条目 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|
| [#913](https://github.com/nullclaw/nullclaw/issues/913) `a2a performance?` | 新开 0 评论 0 👍 | **协议性能透明度诉求**。用户 `jacktang` 实测发现 NullClaw 原生消息/响应速度优于其 A2A（Agent-to-Agent）协议实现，质疑 A2A 层引入的开销。此 Issue 触及项目核心架构决策：A2A 作为互操作性标准 vs. 原生协议的性能优势如何平衡？需维护者提供基准数据或优化路线图 |

| [#912](https://github.com/nullclaw/nullclaw/pull/912) | 待合并 | 企业集成场景驱动。`nullboiler` 作为外部调度系统，需要同步回调能力；当前异步模式可能阻塞工作流编排 |
| [#910](https://github.com/nullclaw/nullclaw/pull/910) | 待合并（跨日更新） | 运维痛点驱动。12 小时 soak test 说明作者 `vernonstinebaker` 在生产环境遭遇实际断线/泄漏问题，非理论修复 |

---

## 5. Bug 与稳定性

| 严重程度 | 条目 | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | Discord 网关稳定性 | 长连接场景下：无看门狗导致僵尸连接、无退避导致雪崩重连、TLS 泄漏导致内存膨胀、中断不安全导致资源泄漏 | ✅ **PR #910 待合并** — [链接](https://github.com/nullclaw/nullclaw/pull/910) |
| 🟡 中 | A2A 协议性能退化 | 用户实测 A2A 层较原生协议存在可感知延迟，可能为序列化/握手开销；待确认是否为设计局限或实现优化空间 | ❌ 无 Fix PR，需维护者响应 #913 |

> **风险评估**：PR #910 的 12 小时 soak test 覆盖 3 指令集架构，数据可信度高。建议优先合并以阻断生产环境稳定性风险。

---

## 6. 功能请求与路线图信号

| 信号来源 | 需求内容 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| PR #912 | Gateway 同步 Webhook 支持 | ⭐⭐⭐⭐⭐ **极高** | 直接对应官方文档标记的 HIGH PRIORITY 缺口，作者 `Kures` 明确引用路线图文档 |
| Issue #913 | A2A 性能基准与优化 | ⭐⭐⭐☆☆ 中等 | 属于架构级优化，需维护者确认是否有独立优化里程碑；若 A2A 为战略方向，则需回应性能承诺 |

**路线图洞察**：项目当前处于「**集成加固 → 生产就绪**」阶段。`docs/integration-analysis.md` 中的 Gap 系统性填补表明，NullClaw 正从单一 Agent 框架向**可嵌入企业工作流的基础设施**转型。

---

## 7. 用户反馈摘要

> 提炼自 Issue #913 原始反馈：

| 维度 | 内容 |
|:---|:---|
| **使用场景** | 对比评估 NullClaw 原生消息 vs. A2A 协议实现，用于 Agent 间通信选型 |
| **痛点** | A2A 协议层引入性能开销，"raw nullclaw messaging/response is faster" |
| **隐含需求** | 1) 官方性能基准数据（latency p50/p99、throughput）；2) A2A 优化路线图；3) 场景化选型指导（何时用原生/何时用 A2A） |
| **满意度信号** | 原生协议性能获认可；对 A2A 实现有期待但存疑 |

**建议维护者回应模板**：提供 `benchmarks/a2a/` 目录下的标准化测试套件，或引用 CI 性能回归数据。

---

## 8. 待处理积压

| 条目 | 积压天数 | 风险说明 | 行动建议 |
|:---|:---|:---|:---|
| [PR #910](https://github.com/nullclaw/nullclaw/pull/910) | 2 天（5-11 创建，5-12 更新） | 生产级稳定性修复，soak test 已完成但未入库；延迟合并增加社区生产部署风险 | 🔴 **优先审阅**——建议 24h 内完成 code review，利用已提供的多架构测试数据加速决策 |
| [PR #912](https://github.com/nullclaw/nullclaw/pull/912) | 1 天 | HIGH PRIORITY 路线图缺口，阻塞 `nullboiler` 集成用户 | 🟡 **次优先审阅**——确认 Webhook 同步语义与现有异步网关的兼容性 |
| [Issue #913](https://github.com/nullclaw/nullclaw/issues/913) | 1 天 | 性能质疑若长期无回应，可能削弱 A2A 协议采用信心 | 🟡 分配 `performance` `a2a` 标签，维护者 48h 内回应数据可用性或测试方法 |

---

## 附录：数据速查

```
Issues:  1 open / 0 closed (24h)
PRs:     2 open / 0 merged / 0 closed (24h)
Releases: 0
Contributors active: 3 (jacktang, Kures, vernonstinebaker)
```

---

*本日报基于 GitHub 公开数据生成，未包含私有仓库或讨论区(Discussions)信息。如需扩展分析维度，建议启用 GitHub GraphQL API 的 Discussion 与 Wiki 数据抓取。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-13

## 1. 今日速览

IronClaw 今日保持**高活跃度**，过去24小时共处理 **29 条 Issues**（关闭 13 条）和 **50 条 PR**（合并/关闭 27 条），无新版本发布。核心开发力量集中在 **Reborn 架构迭代**（AgentLoop、SkillContext、TurnRunner 等基础设施）和 **生产稳定性修复**（Google/Gmail OAuth、Telegram 配对、本地 Web UI 发现性）两大主线。值得关注的是，QA 团队在 v0.28.1 验证中集中暴露了一批 P1 级 Telegram 和 Gmail 集成问题，同时社区贡献者开始介入文档和 onboarding 体验优化。

---

## 2. 版本发布

**无新版本发布**（v0.28.1 为当前最新版本，昨日 QA 验证中）

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| **#3355** | serrrfirat | **Telegram v2 ProductAdapter "tracer bullet" 落地** — Reborn 架构下 Telegram 通道的首个完整产品适配器实现，包含出站渲染和契约测试，标志 Reborn 从内核层向通道层渗透 | [PR #3355](https://github.com/nearai/ironclaw/pull/3355) |
| **#3493** | serrrfirat | **Reborn 内存错误脱敏 + SQL 游标修复** — 防止内存后端/Provider 的原始 SQL 错误泄露到外部，同时修复事件存储 replay 时 `next_cursor` 跳过过滤记录的问题 | [PR #3493](https://github.com/nearai/ironclaw/pull/3493) |
| **#3476** | serrrfirat | **SkillContextService 接入循环提示路径** — 将技能上下文选择逻辑正式接入 Reborn 的模型提示流程，是 #3091 闭环的关键一步（但 #3547 指出仍有信任强制执行的残余问题） | [PR #3476](https://github.com/nearai/ironclaw/pull/3476) |
| **#3538** | serrrfirat | **First-party 内置工具能力** — 为 Reborn 添加 echo/time/json 等宿主级内置能力，验证 capability-grant 拒绝和 v1 stash-ref 拒绝路径 | [PR #3538](https://github.com/nearai/ironclaw/pull/3538) |
| **#3546** | errol-t3 | **Payroll v2 Sidecar 安全加固** — 凭证注入 + SSE 硬化，含 Unix 传输断线重连和 `retry_after` 退避，**高风险变更，含 DB 迁移** | [PR #3546](https://github.com/nearai/ironclaw/pull/3546) |

### 架构里程碑

- **Reborn 可执行文件边界确立**：Issue #3069 关闭，确认 `ironclaw-reborn` 将作为独立二进制与现有 `ironclaw` 并存
- **TurnRunner 工人组合完成**：Issue #3404 关闭，`TurnRunner` 正式具备认领队列/恢复运行、心跳租约、循环驱动选择等完整能力

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论数 | 核心诉求 | 链接 |
|:---|:---|:---|:---|
| **#2229** Google Sheets OAuth 400 错误 | **11 条** | 扩展 OAuth 流程在 Telegram 入口的 `redirect_uri` 不匹配问题，最终确认为 secrets 作用域配置缺陷 | [Issue #2229](https://github.com/nearai/ironclaw/issues/2229) |
| **#3069** 独立 `ironclaw-reborn` 二进制 | **4 条** | 产品形态决策：Reborn 是渐进替换还是并行部署？结论为安全发布的独立二进制 | [Issue #3069](https://github.com/nearai/ironclaw/issues/3069) |
| **#3092** AgentLoop 参考实现 | **2 条** | 社区关注 Reborn 的循环抽象是否足够通用以支持 CodeAct/RoutineLoop 后续扩展 | [Issue #3092](https://github.com/nearai/ironclaw/issues/3092) |

### 背后诉求分析

- **扩展开发者**：OAuth 配置文档和错误诊断工具严重缺失（#2229 的 11 条评论多为反复验证环境）
- **自托管用户**：Reborn 与 v1 的迁移路径、功能对等时间表不明确
- **企业用户**：SkillContext 的信任边界（#3547）直接关系到多租户场景能否投产

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| **P1** | **#3533** | Telegram v0.28.1 无法从 UI 自动设置，流程文档与实际行为脱节 | 🟡 开放 | 无 |
| **P1** | **#3320** | Gmail auth 失败后对话永久卡住，`/clear` 无法恢复 | 🟡 开放 | 无 |
| **P1** | **#3319** | Telegram 入口 Gmail 认证 400 错误（与 #2229 同源） | 🟡 开放 | 无 |
| **P1** | **#2752** | `onboard` 命令在 provider 步骤抛出 DB 错误 | 🟡 开放 | 无 |
| **P2** | **#2991** | V2 审批流提示不清、路由错误、强制串行执行 | 🟡 开放 | 无 |
| **P2** | **#3535** | UI 消息时间戳显示错误 | 🟡 开放 | 无 |
| **P2** | **#2283** | Web UI 不支持文件上传 | 🟡 开放 | 无 |

### 已修复

| Issue | 修复内容 | 验证 |
|:---|:---|:---|
| **#3128** | Gmail 502 错误（聊天助手路径） | 设置页面安装可绕过，根因待确认 |
| **#3034** | V2 HTTP 工具默认禁用且无引导 | 配置/文档修复 |
| **#2229** | Google Sheets OAuth 400 | secrets 作用域配置修复 |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 可行性信号 | 链接 |
|:---|:---|:---|:---|
| **Hook 框架（内联 + 异步）** | Issue #3523/#3524 | **高** — 架构 spec 已出，serrrfirat 主导，与 Reborn 主线绑定 | [Issue #3524](https://github.com/nearai/ironclaw/issues/3524) |
| **Memory 作为用户态 Capability Package** | Issue #3537 | **高** — 直接对应 Reborn 的 capability 模型重构意图 | [Issue #3537](https://github.com/nearai/ironclaw/issues/3537) |
| **日志下载调试工具** | Issue #3534 | **中** — 运维刚需，但需设计多租户隔离 | [Issue #3534](https://github.com/nearai/ironclaw/issues/3534) |
| **WeChat 通道文档** | Issue #3515 | **高** — v0.28.1 已可用，纯文档工作，社区贡献者已认领 | [Issue #3515](https://github.com/nearai/ironclaw/issues/3515) |
| **本地 Web UI 可发现性** | Issue #3500 → PR #3510 | **已实施** — thisisjoshford 贡献， onboarding 流程注入 URL 提示 | [PR #3510](https://github.com/nearai/ironclaw/pull/3510) |

### 路线图判断

- **Reborn 内核层**（TurnRunner/AgentLoop/SkillContext）已进入 **"收尾-硬化" 阶段**，未来 2-4 周焦点将转向 **通道适配器**（Telegram v2 已启动）和 **信任边界审计**（#3547 为阻塞项）
- **v1 维护模式**：OAuth/配对/上传等 v1 体验问题仍有人口流入，但修复优先级明显低于 Reborn 基础设施

---

## 7. 用户反馈摘要

### 痛点（直接引用场景）

> *"Gmail auth 失败后，即使 `/clear` 也无法继续对话"* — **sergeiest**, #3320  
> *"本地安装后完全不知道 `localhost:3000` 存在"* — **thisisjoshford**, #3500  
> *"Telegram 设置指南与 UI 实际步骤不符，用户被引导完成额外步骤"* — **joe-rlo**, #3533

### 满意度

- **Slack 共享应用注册完成**（#906 关闭）：企业用户不再需要自建 Slack app
- **邮箱/密码注册选项**（#1494 关闭）：降低 NEAR 钱包依赖，onboarding 门槛降低

### 关键模式

**QA 团队（joe-rlo）** 正执行系统性 v0.28.1 回归测试，问题密度高但分类清晰（`bug_bash_P1/P2`），表明发布流程趋于规范。**sergeiest** 作为高频终端用户，持续暴露多通道（Telegram/Web）× 多扩展（Gmail/Sheets）的交叉集成缺陷。

---

## 8. 待处理积压

| 时长 | Issue/PR | 风险 | 行动建议 |
|:---|:---|:---|:---|
| **34 天** | **#2902** Telegram 在 NEAR Foundation 实例失效 | 生产环境阻塞 | 需基础设施团队介入排查实例级配置漂移 |
| **33 天** | **#2283** Web UI 文件上传缺失 | 功能缺口，竞品对标劣势 | 需产品决策：v1 补齐 or Reborn 原生支持 |
| **23 天** | **#2752** `onboard` DB 错误 | 新用户流失点 | 本地部署路径的 PostgreSQL 连接模式兼容 |
| **16 天** | **#3447** 夜间 E2E 持续失败 | 质量门禁失效 | 需 CI 团队优先止血，避免缺陷漏出 |
| **待审 6 天** | **#3356** Telegram v2 默认关闭配置守卫 | Reborn 通道切换安全 | 7/7 ProductAdapter 栈的最后一块，建议加速 review |

---

*日报生成基于 GitHub 公开数据，时间范围：2026-05-12 至 2026-05-13 UTC*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-13

> **项目地址**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **报告日期**: 2026-05-13（数据覆盖过去24小时）

---

## 1. 今日速览

LobsterAI 今日呈现**高强度代码合并态势**，24小时内完成 **25 个 PR 的合并/关闭**，仅余 1 个依赖更新 PR 待处理。无新增 Issues，社区讨论活跃度偏低，但工程交付节奏紧凑。核心亮点为 **Release/2026.5.11 版本合入**，涵盖"梦境记忆巩固"重大功能、有道笔记技能升级及多项跨平台稳定性修复。项目整体健康度良好，处于**功能迭代与质量打磨并行阶段**。

---

## 2. 版本发布

**无独立新版本发布**，但今日合并了版本发布 PR：

| PR | 说明 |
|:---|:---|
| [#1961 Release/2026.5.11](https://github.com/netease-youdao/LobsterAI/pull/1961) | **核心版本合入**，覆盖 8 个代码区域（renderer/main/openclaw/skills/cowork/im/artifacts/docs） |

### Release/2026.5.11 关键变更摘要

| 类别 | 内容 |
|:---|:---|
| **🌟 重大功能** | **Dreaming memory consolidation（梦境记忆巩固）**：后台自动记忆整合，支持开关控制、cron 定时调度、时区配置、模型覆盖；记忆设置重构为标签页布局，新增 Dreaming 状态与日记展示 |
| **🔧 技能升级** | **Youdao Note Skill 升级至 v1.0.9** |
| **🐛 Bug 修复** | （详见下方 Bug 与稳定性章节）|

> ⚠️ 该版本涉及记忆系统架构重构，建议关注迁移文档与配置兼容性。

---

## 3. 项目进展

### 今日合并的核心 PR（按功能域分类）

#### 🔮 AI 记忆与智能体架构
| PR | 作者 | 进展 |
|:---|:---|:---|
| [#1961](https://github.com/netease-youdao/LobsterAI/pull/1961) | liuzhq1986 | **梦境记忆巩固功能上线**，标志项目从"即时对话"向"长期记忆管理"演进 |
| [#1904](https://github.com/netease-youdao/LobsterAI/pull/1904) | fisherdaddy | **每个 Agent 支持独立工作目录**，多智能体隔离性重大提升 |
| [#1960](https://github.com/netease-youdao/LobsterAI/pull/1960) | fisherdaddy | 修复多 Agent 切换时 IM 失效问题 |

#### 🎙️ 语音输入（macOS 专项攻坚）
| PR | 作者 | 进展 |
|:---|:---|:---|
| [#1956](https://github.com/netease-youdao/LobsterAI/pull/1956) | liuzhq1986 | macOS 听写触发机制重构：优先使用 Edit 菜单 → 回退 key code 96 → 最终 Fn+Fn 三阶降级 |
| [#1952](https://github.com/netease-youdao/LobsterAI/pull/1952) | btc69m979y-dotcom | 权限拒绝后 Toast 引导用户至系统设置修复 |
| [#1957](https://github.com/netease-youdao/LobsterAI/pull/1957) | btc69m979y-dotcom | 语音输入技术规格文档同步更新 |

#### 🖼️ 制品（Artifacts）与跨平台兼容
| PR | 作者 | 进展 |
|:---|:---|:---|
| [#1958](https://github.com/netease-youdao/LobsterAI/pull/1958) | liugang519 | PNG/JPEG 复制支持 + Mermaid 缩放滚动修复 |
| [#1955](https://github.com/netease-youdao/LobsterAI/pull/1955) | btc69m979y-dotcom | **中文路径下"在浏览器中打开"修复**（Windows 专用 `shell.openPath` 替代方案）|

#### ✨ UI/UX 持续优化
| PR | 作者 | 进展 |
|:---|:---|:---|
| [#1954](https://github.com/netease-youdao/LobsterAI/pull/1954) / [#1953](https://github.com/netease-youdao/LobsterAI/pull/1953) | fisherdaddy | 模型选择器、输入框、已选技能 UI 更新 |
| [#1937](https://github.com/netease-youdao/LobsterAI/pull/1937) | fisherdaddy | 主界面优化 |
| [#1924](https://github.com/netease-youdao/LobsterAI/pull/1924) / [#1911](https://github.com/netease-youdao/LobsterAI/pull/1911) | fisherdaddy | Agent 布局与 UI 优化 |
| [#1935](https://github.com/netease-youdao/LobsterAI/pull/1935) | fisherdaddy | 空历史标题默认样式更新 |

#### 🔧 稳定性与配置持久化
| PR | 作者 | 进展 |
|:---|:---|:---|
| [#1905](https://github.com/netease-youdao/LobsterAI/pull/1905) | fisherdaddy | 修复重启后默认模型未记忆最后一次选择的问题 |
| [#1936](https://github.com/netease-youdao/LobsterAI/pull/1936) | fisherdaddy | IM 频道聊天历史时间错误修复 + 显示优化 |
| [#1929](https://github.com/netease-youdao/LobsterAI/pull/1929) | fisherdaddy | 本地 Agent 头像覆盖支持 |

---

## 4. 社区热点

> ⚠️ **数据异常说明**：所有 PR 评论数均显示为 `undefined`，👍 均为 0，Issues 零活动。以下为基于 PR 内容复杂度和涉及范围的**推断性热点分析**。

| 排名 | PR | 热点理由 | 链接 |
|:---|:---|:---|:---|
| 1 | **#1961 Release/2026.5.11** | 唯一跨 8 个 area 的巨型 PR，架构级功能发布 | [PR #1961](https://github.com/netease-youdao/LobsterAI/pull/1961) |
| 2 | **#1956 / #1952 / #1957** | macOS 语音输入三连击，权限工程复杂度高，涉及系统级 API 调用 | [PR #1956](https://github.com/netease-youdao/LobsterAI/pull/1956) · [PR #1952](https://github.com/netease-youdao/LobsterAI/pull/1952) · [PR #1957](https://github.com/netease-youdao/LobsterAI/pull/1957) |
| 3 | **#1904** | 多 Agent 独立工作目录——企业级多租户场景的关键基础设施 | [PR #1904](https://github.com/netease-youdao/LobsterAI/pull/1904) |
| 4 | **#1955** | 中文路径 Unicode 处理——国际化用户的隐性痛点 | [PR #1955](https://github.com/netease-youdao/LobsterAI/pull/1955) |

**社区诉求信号**：语音输入的跨平台一致性、非 ASCII 路径兼容、多 Agent 隔离机制是用户/开发者的核心关切。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | Fix PR | 状态 | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | macOS 语音输入权限拒绝后无反馈，用户陷入沉默失败 | [#1952](https://github.com/netease-youdao/LobsterAI/pull/1952) | ✅ 已修复 | macOS 全量用户 |
| 🔴 **高** | 多 Agent 切换时 IM 功能完全失效 | [#1960](https://github.com/netease-youdao/LobsterAI/pull/1960) | ✅ 已修复 | 多 Agent 用户 |
| 🟡 **中** | Windows 中文路径下 artifact "在浏览器打开"无反应 | [#1955](https://github.com/netease-youdao/LobsterAI/pull/1955) | ✅ 已修复 | Windows 中文用户 |
| 🟡 **中** | Mermaid 图表缩放控件滚动锚定失效 | [#1958](https://github.com/netease-youdao/LobsterAI/pull/1958) | ✅ 已修复 | 制品预览用户 |
| 🟡 **中** | 重启后默认模型选择丢失 | [#1905](https://github.com/netease-youdao/LobsterAI/pull/1905) | ✅ 已修复 | 全量用户 |
| 🟢 **低** | IM 频道聊天历史时间显示错误 | [#1936](https://github.com/netease-youdao/LobsterAI/pull/1936) | ✅ 已修复 | IM 功能用户 |

> **风险评估**：今日无未修复的高严重度 Bug，但 [#1950](https://github.com/netease-youdao/LobsterAI/pull/1950) 显示存在**误推代码至上游仓库**的操作失误，需关注分支管理流程。

---

## 6. 功能请求与路线图信号

| 已落地功能 | 来源 PR | 下一版本可能性 | 说明 |
|:---|:---|:---|:---|
| 梦境记忆巩固（后台自动整合） | [#1961](https://github.com/netease-youdao/LobsterAI/pull/1961) | ✅ 已发布 | 长期记忆基础设施 |
| Agent 级工作目录隔离 | [#1904](https://github.com/netease-youdao/LobsterAI/pull/1904) | ✅ 已发布 | 多租户/多项目场景 |
| macOS 语音输入三阶降级 | [#1956](https://github.com/netease-youdao/LobsterAI/pull/1956) | ✅ 已发布 | 无障碍/效率输入 |
| Electron 依赖升级（40.2.1 → 42.0.1） | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | ⏳ 待合并 | 安全与性能基础 |

**路线图推测**：项目正从"对话工具"向"长期陪伴型 AI 助手"转型，记忆系统、多 Agent 协作、跨平台输入体验是三大支柱。Electron 大版本升级 pending 可能带来 Chromium 引擎级能力扩展。

---

## 7. 用户反馈摘要

> ⚠️ 今日零 Issues 活动，以下从 PR 描述中**逆向提炼**用户痛点：

| 痛点场景 | 关联 PR | 用户画像推断 |
|:---|:---|:---|
| "拒绝权限后再次点击按钮无任何反馈" | [#1952](https://github.com/netease-youdao/LobsterAI/pull/1952) | macOS 用户，对系统权限机制不熟悉，需要明确引导 |
| "项目存储目录含中文时...无反应" | [#1955](https://github.com/netease-youdao/LobsterAI/pull/1955) | 中文 Windows 用户，使用默认用户文件夹名 |
| "IM 频道聊天历史时间错误" | [#1936](https://github.com/netease-youdao/LobsterAI/pull/1936) | 高频使用 IM 协作功能的团队用户 |
| "重启后默认模型不是最后一次选择" | [#1905](https://github.com/netease-youdao/LobsterAI/pull/1905) | 多模型切换的进阶用户，注重配置持久化 |

**满意度信号**：PR #1950 作者自述 "Wrongly pushed to upstream repo" 后主动关闭，显示社区成员对代码质量有自我要求。

---

## 8. 待处理积压

| PR | 创建时间 | 滞留天数 | 说明 | 行动建议 |
|:---|:---|:---|:---|:---|
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | 2026-04-02 | **41 天** | Electron + electron-builder 重大版本升级（40.2.1 → 42.0.1） | 🔴 **高优先级**：涉及安全补丁与 Chromium 特性，建议尽快 review 合并或明确阻断理由 |

> 其他 PR 均在 5 月 7-12 日内完成闭环，整体周转效率优秀。唯一长期滞留项为依赖自动化 PR，需维护者人工介入决策。

---

## 附录：数据可信度说明

- 评论数 `undefined` 可能为 GitHub API 限制或数据采集异常，实际讨论热度可能被低估
- 所有 PR 链接格式：`https://github.com/netease-youdao/LobsterAI/pull/{number}`

---

*本日报基于公开 GitHub 数据生成，不代表项目官方立场。*

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

# CoPaw 项目动态日报 | 2026-05-13

---

## 1. 今日速览

CoPaw 项目今日保持**高活跃度**，24小时内产生 **31 条 Issues 更新**（17 活跃/新开，14 关闭）与 **39 条 PR 更新**（13 待合并，26 已合并/关闭），并发布 **v1.1.7-beta.1** 预发布版本。社区讨论聚焦三大主线：**Provider 配置与认证稳定性**（DashScope/VolcEngine）、**浏览器工具生命周期管理**（idle 超时、崩溃恢复、僵尸进程），以及**多智能体协作模式下的运行时安全**（Matrix Team Room 的 ack 循环与任务生命周期守卫）。PR 侧可见 MCP 生态扩展（OAuth 2.1 PKCE、插件化 FastAPI 路由）与桌面端体验深化（Tauri 2.x、系统托盘）的持续推进，整体项目处于功能迭代与稳定性加固并行的健康节奏。

---

## 2. 版本发布

### v1.1.7-beta.1
**发布时间**：2026-05-12  
**标签**：预发布版本（beta）

| 变更项 | 详情 |
|--------|------|
| **Provider 修复** | 修复 VolcEngine Provider 中的模型配置问题（[#4169](https://github.com/agentscope-ai/QwenPaw/pull/4169)） |
| **版本号更新** | 升级至 1.1.7b1（[#4196](https://github.com/agentscope-ai/QwenPaw/pull/4196)） |
| **UI 优化** | 改善 Plan Panel 的文本对比度（console 前端） |

**评估**：本次 beta 为**增量修复版本**，无破坏性变更。VolcEngine 修复直接回应了社区关于火山引擎模型配置的反馈（见 [#4199](https://github.com/agentscope-ai/QwenPaw/issues/4199)），建议火山引擎用户优先验证。正式版发布前需关注 beta 周期内的 Provider 兼容性回归测试。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（26 条中的核心项）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#4248](https://github.com/agentscope-ai/QwenPaw/pull/4248) | @rayrayraykk | **新增 Qwen-Image、Wan 2.7 插件**，重构 GPT-Image2；修复工具配置 UI 前端 bug | **多模态能力扩展**：DashScope 生态的图像/视频生成工具链补齐，插件体系成熟度提升 |
| [#4256](https://github.com/agentscope-ai/QwenPaw/pull/4256) | @rayrayraykk | **MCP 远程服务器 OAuth 2.1 PKCE 认证支持** | **企业级 MCP 集成突破**：解决此前 401 静默循环问题，为阿里云等内网 MCP 服务接入铺平道路 |
| [#4250](https://github.com/agentscope-ai/QwenPaw/pull/4250) | @zhijianma | 重构 agent_stats：精简会话文件处理，移除冗余代码 | 技术债务清理，维护性提升 |
| [#4197](https://github.com/agentscope-ai/QwenPaw/pull/4197) | @x1n95c | `delegate_external_agent` 异步执行支持 | ACP（Agent Communication Protocol）长时工作流的关键基础设施 |
| [#4224](https://github.com/agentscope-ai/QwenPaw/pull/4224) | @aqilaziz | **自动记忆摘要后的向量索引刷新**（修复 [#4220](https://github.com/agentscope-ai/QwenPaw/issues/4220)） | 记忆系统核心 bug 修复，RAG 体验一致性保障 |
| [#2843](https://github.com/agentscope-ai/QwenPaw/pull/2843) | @x1n95c | 浏览器 idle 看门狗自取消修复 | 浏览器工具稳定性基石修复 |

**整体迈进评估**：今日合并 PR 呈现**"工具生态扩张 + 企业级认证 + 记忆系统修复 + ACP 异步化"**的四维推进，项目在 Agent 互操作性（ACP/MCP）、多模态能力、企业安全合规三个战略方向均有实质性进展。

---

## 4. 社区热点

### 评论数 TOP Issues（按讨论热度排序）

| 排名 | Issue | 评论 | 状态 | 核心诉求分析 |
|:---|:---|:---:|:---|:---|
| 1 | [#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159) DashScope Provider 配置正确但 api_key 为空，返回 401 | 6 | 🔴 OPEN | **配置解析层与运行时 Provider 选择的脱节**：`dashscope.json` 存在但 `as_llms.default` 回退到 `backend:"openai"`，暴露配置加载优先级与 Provider 匹配逻辑的深层问题 |
| 2 | [#3499](https://github.com/agentscope-ai/QwenPaw/issues/3499) 访问页面时快时慢 | 6 | ✅ CLOSED | 性能波动根因已定位，关闭说明社区对响应稳定性高度敏感 |
| 3 | [#4220](https://github.com/agentscope-ai/QwenPaw/issues/4220) auto_memory_interval 写入记忆但不同步向量索引 | 4 | 🔴 OPEN | **记忆系统的最终一致性缺陷**：文件写入与索引更新异步解耦，新会话搜索失效——已有修复 PR [#4224](https://github.com/agentscope-ai/QwenPaw/pull/4224) 待合并 |
| 4 | [#3969](https://github.com/agentscope-ai/QwenPaw/issues/3969) `FunctionCallOutput` validation error + `loop_config.json` 损坏 | 4 | ✅ CLOSED | 工具调用输出的 schema 严格性与容错边界问题 |
| 5 | [#4185](https://github.com/agentscope-ai/QwenPaw/issues/4185) 持久化历史含畸形 `tool_use` 时聊天无法打开 | 4 | ✅ CLOSED | 数据持久化的前向兼容性：历史数据 schema 演进中的降级处理缺失 |

**热点洞察**：社区最强烈的诉求集中在**"配置即代码"的可预期行为**（#4159 的配置漂移、#4183 的自定义模型名被加前缀）与**状态一致性**（#4220 的记忆索引、#4185 的持久化兼容性）。这反映出用户将 CoPaw 用于生产级长时运行场景时，对系统确定性的苛刻要求。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| 🔴 **P0-严重** | [#4227](https://github.com/agentscope-ai/QwenPaw/issues/4227) | **stream_http 模式 MCP 调用返回 401 时整体阻塞至超时**——非 404 错误码均存在类似问题，导致 Agent 假死 | 🟡 **待修复**（无关联 PR，但 #4256 OAuth 支持可缓解认证类 401） |
| 🟡 **P1-高** | [#4251](https://github.com/agentscope-ai/QwenPaw/issues/4251) | **Matrix Team Room 中 Team Leader 与 specialist worker 形成 ack mirror loop**——运行时缺少 turn-end / task-closed 生命周期守卫与 ack-only 入站抑制 | ✅ **已关闭**（架构级根因分析，需运行时原语支持） |
| 🟡 **P1-高** | [#4244](https://github.com/agentscope-ai/QwenPaw/issues/4244) | `shell_evasion_checks.newlines=True` **静默阻断多行命令**，导致 Agent 思维链混乱——默认配置即触发 | 🟡 **待修复**（无 PR） |
| 🟡 **P1-高** | [#4257](https://github.com/agentscope-ai/QwenPaw/issues/4257) | 浏览器管理：**活跃会话期间过早 idle 超时、崩溃无自愈、关闭后残留僵尸进程** | 🟡 **有 PR #4254 待合并** |
| 🟢 **P2-中** | [#4213](https://github.com/agentscope-ai/QwenPaw/issues/4213) | 网页对话内容未分片传输/分页，高 Token 对话重新进入时页面卡死 | 🟡 **待修复**（无 PR） |
| 🟢 **P2-中** | [#3816](https://github.com/agentscope-ai/QwenPaw/issues/3816) | macOS Desktop 版本 `file://` 超链接无法打开本地文件 | 🟡 **待修复**（无 PR） |
| 🟢 **P2-中** | [#4239](https://github.com/agentscope-ai/QwenPaw/issues/4239) | 打包桌面客户端外部链接无法在浏览器打开 | 🟡 **待修复**（无 PR） |
| 🟢 **P2-中** | [#4243](https://github.com/agentscope-ai/QwenPaw/issues/4243) | 浏览器无法下载文件 | 🟡 **待修复**（无 PR） |

**稳定性评估**：今日暴露的 bug 呈现**"工具执行层脆弱性"**集中特征——MCP 流式错误处理、Shell 安全策略副作用、浏览器生命周期管理，均为 Agent 与外部系统交互边界。建议优先投入 [#4227](https://github.com/agentscope-ai/QwenPaw/issues/4227) 的通用 HTTP 错误码处理重构。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 信号强度 | 纳入下一版本可能性 |
|:---|:---|:---:|:---|
| **会话生命周期钩子**（`session.create`/`session.reset` 等） | [#4249](https://github.com/agentscope-ai/QwenPaw/issues/4249) | ⭐⭐⭐⭐⭐ | **高**——架构基础设施，社区多次提及，实现成本低 |
| **聊天内 Shell 命令可观测性**（查看/终止/延长超时） | [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) | ⭐⭐⭐⭐⭐ | **高**——复用现有 ApprovalCard 管道，UX 痛点明确 |
| **消息回滚 + 合作日记模块** | [#4258](https://github.com/agentscope-ai/QwenPaw/issues/4258) | ⭐⭐⭐⭐☆ | **中**——用户已自行实现但体验欠缺，官方可标准化 |
| **Telegram 等频道流式传输** | [#4247](https://github.com/agentscope-ai/QwenPaw/issues/4247) | ⭐⭐⭐⭐☆ | **中**——竞品（OpenClaw/Hermes）已支持，渠道体验差距 |
| **多 Agent 协作 Skill 与内置工具对齐** | [#4211](https://github.com/agentscope-ai/QwenPaw/issues/4211) | ⭐⭐⭐⭐☆ | **高**——PR 已有雏形，与 ACP 战略方向一致 |
| **Tauri 2.x 桌面端支持** | [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) | ⭐⭐⭐⭐⭐ | **高**——PR 已 Open 且标记 first-time-contributor，生态扩展关键 |
| **插件注册 FastAPI APIRouter** | [#4255](https://github.com/agentscope-ai/QwenPaw/pull/4255) | ⭐⭐⭐⭐☆ | **高**——插件体系基础设施，架构解耦 |
| **Cron 定时任务 + Inbox 收件箱** | [#4210](https://github.com/agentscope-ai/QwenPaw/pull/4210) | ⭐⭐⭐⭐⭐ | **高**——PR 已 Open，Agent 自主调度核心能力 |

**路线图判断**：v1.2.0 或正式版可能聚焦 **"Agent 运行时可观测性 + 插件生态基础设施 + 桌面端体验"** 三大主题，MCP/OAuth 企业集成与 ACP 异步化是明确的差异化竞争点。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 Issue | 情绪强度 |
|:---|:---|:---:|
| **"配置正确但就是不工作"**——DashScope json 配置存在，运行时却用 openai backend | [#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159) | 😤😤😤😤😤 |
| **"Agent 执行任务我以为它死了"**——Telegram 无流式，长时间等待无反馈 | [#4247](https://github.com/agentscope-ai/QwenPaw/issues/4247) | 😤😤😤😤😤 |
| **"百万 Token 对话重新打开页面直接卡死"**——前端无分页/虚拟滚动 | [#4213](https://github.com/agentscope-ai/QwenPaw/issues/4213) | 😤😤😤😤😤 |
| **"回滚操作内容和记忆无法同时清除"**——用户自行实现回滚但状态不一致 | [#4258](https://github.com/agentscope-ai/QwenPaw/issues/4258) | 😤😤😤😤 |
| **"打包完安装后黑窗口一闪就关"**——Desktop 打包调试困难 | [#4230](https://github.com/agentscope-ai/QwenPaw/issues/4230) | 😤😤😤😤 |

### 满意点

- **多 Agent 协作模式**有明确需求（[#4211](https://github.com/agentscope-ai/QwenPaw/issues/4211)），用户愿意深度使用
- **自定义模型接入**活跃（[#4183](https://github.com/agentscope-ai/QwenPaw/issues/4183)），生态开放度受认可
- **记忆自动摘要**功能设计获认可，但索引同步问题影响信任（[#4220](https://github.com/agentscope-ai/QwenPaw/issues/4220)）

---

## 8. 待处理积压

| 类型 | 条目 | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---:|:---:|:---|
| **长期 Issue** | [#3816](https://github.com/agentscope-ai/QwenPaw/issues/3816) macOS Desktop `file://` 链接失效 | 2026-04-24 | 2026-05-12 | **19天未解决**，Desktop 核心体验缺陷，影响文件交互工作流 |
| **长期 PR** | [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) Tauri 2.x 桌面端支持 | 2026-04-24 | 2026-05-12 | **19天 Under Review**，first-time-contributor，需维护者主动推进避免流失贡献者 |
| **长期 PR** | [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) Win32 系统托盘启动 | 2026-05-05 | 2026-05-12 | **8天 Under Review**，后台常驻运行关键功能，与 Tauri 路线需协调 |
| **待合并修复** | [#4224](https://github.com/agentscope-ai/QwenPaw/pull/4224) 记忆索引刷新 | 2026-05-11 | 2026-05-12 | 关联高热度 Issue #4220，建议优先合并验证 |
| **待合并修复** | [#4254](https://github.com/agentscope-ai/QwenPaw/pull/4254) 浏览器生命周期管理 | 2026-05-12 | 2026-05-12 | 关联 #4257，解决僵尸进程与过早超时，稳定性关键 |

**维护者行动建议**：
1. **立即**：Review 并合并 [#4224](https://github.com/agentscope-ai/QwenPaw/pull/4224)（记忆修复）与 [#4254](https://github.com/agentscope-ai/QwenPaw/pull/4254)（浏览器修复）
2. **本周**：决策 Tauri 2.x（[#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)）与 Win32 系统托盘（[#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041)）的桌面端技术路线整合方案
3. **关注**：[#4227](https://github.com/agentscope-ai/QwenPaw/issues/4227) MCP 流式错误阻塞——需设计通用 HTTP 错误处理框架，非单点修复

---

*日报生成时间：2026-05-13 | 数据来源：CoPaw GitHub (agentscope-ai/CoPaw / agentscope-ai/QwenPaw)*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-05-13

> **项目**: [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)  
> **日期**: 2026-05-13  
> **分析范围**: 过去 24 小时（2026-05-12 至 2026-05-13）

---

## 1. 今日速览

ZeptoClaw 今日维持**低活跃维护状态**。过去 24 小时内无新增 Issues，PR 活动全部来自自动化依赖更新（Dependabot），无人工代码贡献。社区互动指标（评论、Reaction）均为零，表明项目处于**稳定维护期而非功能迭代期**。唯一关闭的 PR #574 为 GitHub Actions 依赖补丁，说明维护者仍在处理基础运维事务，但响应存在约 7 天延迟（创建 5 月 5 日，关闭 5 月 12 日）。整体健康度评估：**基础设施维持运转，核心开发停滞**。

---

## 2. 版本发布

**无新版本发布。**

最近一次 Release 需追溯至历史版本，今日无版本计划或预发布动态。

---

## 3. 项目进展

### 已合并/关闭 PR

| PR | 类型 | 说明 | 链接 |
|:---|:---|:---|:---|
| #574 | 依赖更新 | 将 `taiki-e/install-action` 从 2.75.17 升级至 2.75.22 | [PR #574](https://github.com/qhkm/zeptoclaw/pull/574) |

**进展评估**：该更新为 GitHub Actions 工作流中的 Rust 工具链安装动作补丁版本。2.75.17 → 2.75.22 的跨度包含 5 个中间版本，属于常规 bugfix 累积，**无功能性变更**。项目 CI/CD 基础设施保持最新，但未推进任何业务代码。

**技术债务信号**：PR #574 与同日创建的 PR #586 存在**版本追赶重叠**——#574 关闭时（2.75.22），上游已发布至 2.75.29，导致 #586 立即被创建。这种"关闭即过时"模式表明依赖更新流水线存在**批处理延迟或手动合并瓶颈**。

---

## 4. 社区热点

**今日无社区热点。**

所有 PR 均为 Dependabot 自动化提交，零人工评论、零 Reaction、零审查互动。

| 指标 | 数值 |
|:---|:---|
| 人工评论数 | 0 |
| 👍/👎 反应数 | 0 |
| 审查者参与 | 0 |

**诉求分析**：无活跃社区诉求表达。项目当前缺乏用户驱动的讨论，可能反映：
- 用户基数小或处于静默使用阶段
- 项目功能已满足核心场景，无迫切需求
- 社区参与渠道未被有效激活

---

## 5. Bug 与稳定性

**今日无新报告 Bug。**

| 严重程度 | 数量 | 状态 |
|:---|:---|:---|
| Critical | 0 | - |
| High | 0 | - |
| Medium | 0 | - |
| Low | 0 | - |

**稳定性观察**：两个待合并 PR 涉及基础镜像和 CI 依赖更新，潜在影响：
- **PR #585**（Debian 镜像更新）：`cedb1ef` → `109e2c6` 为 `trixie-slim` 标签的 digest 更新，涉及底层系统库安全补丁，建议优先验证容器构建稳定性
- **PR #586**（Actions 更新）：纯 CI 侧变更，风险极低

---

## 6. 功能请求与路线图信号

**今日无功能请求。**

| 信号源 | 内容 | 纳入可能性 |
|:---|:---|:---|
| - | - | - |

**路线图推断**：基于过去 24 小时及可见 PR 历史，项目当前**无活跃功能开发**。全部工程资源集中于：
1. 依赖维护（GitHub Actions、Docker 基础镜像）
2. 安全补丁跟进（通过 Dependabot 自动化）

**下一版本预测**：若维持此模式，下一版本（如有）将以依赖升级和安全修复为主，无新功能交付预期。

---

## 7. 用户反馈摘要

**今日无用户反馈。**

Issues 区零活动，无法提取真实用户痛点或使用场景。建议维护者关注：
- 是否需主动征集用户反馈（如 Discussion 区、社区问卷）
- 项目文档是否充分覆盖常见使用场景，减少 Issue 必要性

---

## 8. 待处理积压

### 需维护者关注的待合并 PR

| PR | 创建时间 | 等待时长 | 内容 | 优先级建议 | 链接 |
|:---|:---|:---|:---|:---|:---|
| #586 | 2026-05-12 | ~1 天 | `taiki-e/install-action` 2.75.17 → 2.75.29 | **低**（CI 工具链） | [PR #586](https://github.com/qhkm/zeptoclaw/pull/586) |
| #585 | 2026-05-12 | ~1 天 | Debian `trixie-slim` digest 更新 | **中**（容器安全基线） | [PR #585](https://github.com/qhkm/zeptoclaw/pull/585) |

**积压风险**：当前无长期未响应项，但需警惕：
- PR #586 可能再次上演 #574 的"关闭即过时"循环，建议合并前确认是否为最新版本
- 若维护者持续 7 天级别的响应延迟，依赖更新将形成**永久追赶队列**

---

## 附录：今日数据总览

| 指标 | 数值 |
|:---|:---|
| Issues 新开/活跃/关闭 | 0 / 0 / 0 |
| PR 待合并/已合并关闭 | 2 / 1 |
| Releases | 0 |
| 人工贡献者参与 | 0 |
| 自动化贡献（Dependabot）| 3 |

---

> **分析师备注**：ZeptoClaw 作为 AI 智能体/个人助手领域的开源项目，当前状态符合**早期项目或维护模式项目**特征——基础设施自动化完善（Dependabot 配置健全），但缺乏核心功能迭代和社区互动。建议关注项目长期 Roadmap 是否公开，以及是否有核心维护者持续投入的信号。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-13

---

## 1. 今日速览

ZeroClaw 今日维持**高活跃度**，24小时内50个PR更新（32个待合并、18个已合并/关闭），Issues处理效率显著（5个新开/活跃、8个关闭）。项目核心推进方向集中在**可观测性修复**（SSE日志流恢复）、**渠道生态扩展**（Discord媒体修复、Matrix线程优化）、**工具链治理**（RateLimitedTool统一重构收官）以及**多Provider兼容性**（Anthropic温度参数、系统CA信任等）。社区贡献者 `yijunyu` 单日提交6个PR，成为今日最活跃贡献者。整体健康度良好，但高风险的RunPod图像生成PR和153 commits恢复审计仍需维护者重点关注。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 贡献者 | 核心进展 |
|:---|:---|:---|
| [#6553](https://github.com/zeroclaw-labs/zeroclaw/pull/6553) | WareWolf-MoonWall | **可观测性基础设施恢复**：修复损坏的SSE `/logs`流，新增构建版本戳和健康心跳，解决远程/Docker部署的监控盲区；整合并替代了[#5986](https://github.com/zeroclaw-labs/zeroclaw/pull/5986) |
| [#5986](https://github.com/zeroclaw-labs/zeroclaw/pull/5986) | FTDGRT | 被#6553取代关闭，其Agent生命周期追踪和SSE广播设计已被吸收 |
| **RateLimitedTool 重构系列收官**（#5772, #4947, #4954, #4953, #4952, #4949） | yijunyu | 历时近两个月的工具层治理完成：将`GlobSearchTool`、`ContentSearchTool`、`BrowserTool`、`HttpRequestTool`、`WebFetchTool`、`SkillTool`、`ClaudeCodeRunnerTool`、`GeminiCliTool`、`ClaudeCodeTool`、`CodexCliTool`、`OpenCodeCliTool`、`CronAddTool`、`CronRemoveTool`、`CronUpdateTool`全部迁移至统一的`RateLimitedTool`包装器模式，消除大量重复代码 |

**整体推进评估**：可观测性从"不可用"恢复至"生产就绪"；工具层架构债务大幅清偿，为后续工具扩展奠定统一基础。

---

## 4. 社区热点

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 1 | [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) 企业微信渠道支持 | 4 | **企业级部署刚需**：WeCom(WebSocket+Webhook双模式)是中文企业市场核心IM，OpenClaw已有扩展但ZeroClaw缺失。标签含`help wanted`、`status:accepted`，社区等待认领实现 |
| 2 | [#6097](https://github.com/zeroclaw-labs/zeroclaw/issues/6097) 本地图片读取失败 | 3 | **技能系统与运行时耦合问题**：技能生成的本地路径图片无法被API模型读取，已关闭说明有修复 |
| 3 | [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) SearXNG搜索支持 | 3 | **隐私优先搜索+反爬对抗**：DuckDuckGo CAPTCHA导致搜索工具不可靠，社区呼吁SearXNG作为自托管替代方案，`risk: high`标注反映架构影响 |

**核心诉求洞察**：企业渠道覆盖（WeCom）、隐私基础设施（SearXNG）、多模态可靠性（图片读取）构成社区三大痛点，均指向"生产环境就绪度"。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 修复PR | 影响范围 |
|:---|:---|:---|:---|:---|
| **S1 - 工作流阻断** | [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) Onboarding误引导：选择OpenAI Codex却要求OpenAI API Key | **OPEN** | 无 | 新用户首次体验，Codex订阅用户无法正确接入 |
| S2 - 功能降级 | [#6556](https://github.com/zeroclaw-labs/zeroclaw/issues/6556) Discord媒体收发完全损坏 | **CLOSED** | 已修复 | Discord渠道：入站图片丢失、非图片类型丢弃、出站标记泄漏 |
| S2 - 功能降级 | [#6415](https://github.com/zeroclaw-labs/zeroclaw/issues/6415) Telegram TTS在stream_mode="partial"时静默禁用 | **CLOSED** | 已修复 | Telegram渠道语音交互 |
| S2 - 功能降级 | [#5453](https://github.com/zeroclaw-labs/zeroclaw/issues/5453) WebSocket /ws/chat不处理[IMAGE:]多模态标记 | **CLOSED** | 已修复 | WebSocket API多模态能力 |
| S2 - 功能降级 | [#6097](https://github.com/zeroclaw-labs/zeroclaw/issues/6097) 本地图片读取失败 | **CLOSED** | 已修复 | 技能系统→运行时图片传递 |
| S3 - 轻微问题 | [#5687](https://github.com/zeroclaw-labs/zeroclaw/issues/5687) rust-analyzer报错 | **CLOSED** | 已修复 | 开发者体验 |
| S3 - 轻微问题 | [#6359](https://github.com/zeroclaw-labs/zeroclaw/issues/6359) labeler.yml未覆盖crates/**路径 | **CLOSED** | 已修复 | CI自动化标签 |

**风险评估**：唯一未修复的S1级Bug[#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120)直接阻断Codex新用户 onboarding，需紧急响应。Discord/Telegram/WebSocket的多模态/媒体问题集中修复显示渠道层近期质量投入显著。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 信号强度 | 纳入可能性分析 |
|:---|:---|:---|:---|
| **ComfyUI/Comfy Cloud作为媒体Provider** | [#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) | ⭐⭐⭐⭐⭐ | **高**。已有PR[#6555](https://github.com/zeroclaw-labs/zeroclaw/pull/6555)（RunPod ComfyUI）并行开发，且`gen_video`工具路线图明确，媒体Provider抽象正在形成 |
| **SearXNG隐私搜索** | [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) | ⭐⭐⭐⭐☆ | **中高**。`status:accepted`且标注`needs-maintainer-review`，CAPTCHA问题已影响现有DuckDuckGo工具可靠性 |
| **WeCom企业微信渠道** | [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) | ⭐⭐⭐⭐☆ | **中**。`status:accepted`+`help wanted`，企业市场关键渠道，但需社区贡献者认领 |
| **Home Assistant工具** | [#6464](https://github.com/zeroclaw-labs/zeroclaw/pull/6464) | ⭐⭐⭐⭐☆ | **中高**。PR已开，填补`ComingSoon`占位，IoT/智能家居集成需求明确 |
| **Claude Code Provider视觉输入** | [#6549](https://github.com/zeroclaw-labs/zeroclaw/pull/6549) | ⭐⭐⭐⭐☆ | **高**。PR已开，修复`vision: false`错误声明，直接影响多模态Agent能力 |

**路线图判断**：媒体生成基础设施（Comfy生态）和视觉能力补齐是近期最确定的演进方向；搜索工具多元化（SearXNG）和企业渠道扩展（WeCom）构成中期增长极。

---

## 7. 用户反馈摘要

### 真实痛点
- **"选择Codex却要OpenAI API Key"** ([#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120))：新用户首次配置即困惑，品牌/产品区分度不足
- **"stream_mode=partial时TTS静默消失，无日志警告"** ([#6415](https://github.com/zeroclaw-labs/zeroclaw/issues/6415))：配置组合的行为不可预期，缺乏显性错误反馈
- **"Discord里图片永远到不了Agent"** ([#6556](https://github.com/zeroclaw-labs/zeroclaw/issues/6556))：渠道媒体管道存在系统性断裂

### 使用场景
- **企业部署**：WeCom支持请求显示中文企业用户试图将ZeroClaw接入现有办公IM栈
- **隐私敏感环境**：SearXNG请求反映部分用户拒绝依赖商业搜索引擎
- **远程/Docker运维**：#6553的health pulse需求来自容器化部署的监控刚需

### 满意度信号
- 153 commits恢复审计[#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)显示社区对代码资产保护的重视，项目治理透明度获认可
- RateLimitedTool系列重构的持续推进反映架构治理的执行力

---

## 8. 待处理积压

| 优先级 | 事项 | 滞留时间 | 风险说明 |
|:---|:---|:---|:---|
| **P0** | [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 153 commits恢复审计 | ~19天（2026-04-24创建） | **技术债务炸弹**。2026-03-28的bulk revert移除了已合并的bug修复和功能，当前`status:in-progress`但无关联PR，恢复进度不透明 |
| P1 | [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) Codex onboarding误导 | ~17天 | 新用户流失风险，S1级未修复 |
| P2 | [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) WeCom渠道 | ~64天 | 企业市场窗口期，竞品（OpenClaw）已有扩展 |
| P2 | [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) SearXNG搜索 | ~38天 | `needs-maintainer-review`标签长期未处理 |
| P2 | [#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) ComfyUI Provider | 3天 | 虽新但已有竞争PR[#6555](https://github.com/zeroclaw-labs/zeroclaw/pull/6555)，需协调避免重复建设 |

**维护者行动建议**：
1. 为#6074设立专项恢复里程碑，公开优先级队列
2. #6120建议24小时内响应，或提供临时文档 workaround
3. 评估#6555与#6563的架构兼容性，避免Comfy生态PR冲突

---

*日报基于 GitHub 公开数据生成，不含未公开讨论或私有频道信息。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*