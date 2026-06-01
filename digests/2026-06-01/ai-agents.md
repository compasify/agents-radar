# OpenClaw 生态日报 2026-06-01

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-01 00:26 UTC

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

# OpenClaw 项目动态日报 | 2026-06-01

> **项目**: openclaw/openclaw | **分析日期**: 2026-06-01 | **数据周期**: 过去24小时

---

## 1. 今日速览

OpenClaw 在 2026-06-01 保持**极高活跃度**：24小时内 Issues 与 PR 各更新 500 条，社区讨论密集。版本迭代节奏紧凑，连续发布 3 个 beta 版本（beta.1→beta.3）聚焦运行时恢复与通道稳定性。核心痛点集中在 **Codex 运行时可靠性**（启动失败、会话卡住、认证路由）和 **多通道消息投递**（Telegram/Matrix/Discord 的线程/回复/流式渲染问题）。PR 侧出现多个"ready for maintainer look"的高质量修复，但 XL 级大型 PR（多槽内存架构、插件索引持久化）仍需充分审查。整体项目健康度：**功能迭代积极，稳定性债务累积，需加速 Codex 路径的 hardening**。

---

## 2. 版本发布

### v2026.5.31-beta.3 / beta.2 / beta.1（连续迭代）
- **发布时间**: 2026-05-31
- **变更性质**: 补丁级 beta，无破坏性变更
- **核心改进**:
  - **运行时恢复增强**: Agent 与 CLI-backed 运行时在中断工具调用、过期会话绑定、compaction 交接、媒体投递重试等场景下更干净地恢复（[#88129](https://github.com/openclaw/openclaw/issues/88129), [#88136](https://github.com/openclaw/openclaw/issues/88136), [#88141](https://github.com/openclaw/openclaw/issues/88141), [#88162](https://github.com/openclaw/openclaw/issues/88162), [#88182](https://github.com/openclaw/openclaw/issues/88182)）
  - **通道稳定性**: Telegram、WhatsApp、iMessage 的移动投递更稳健
- **迁移注意**: 从 2026.5.30-beta.1 升级无需配置变更；Slack 支持在 beta 系列中持续迭代

### v2026.5.30-beta.1
- **发布时间**: 2026-05-30（基准版本）
- **相同修复集**: 上述运行时恢复与通道稳定性改进

---

## 3. 项目进展

### 已合并/关闭的关键 PR（24h 内 290 条已关闭 PR 中的高价值项）

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#77279](https://github.com/openclaw/openclaw/pull/77279) | MoerAI | **媒体去重修复**: Telegram 相册媒体的 `path \| path` 冗余渲染问题，减少上下文污染 | ✅ 已合并，proof sufficient |
| [#88834](https://github.com/openclaw/openclaw/pull/88834) | charles-openclaw | **静态目录模型解析**: skip-PI 路径下 Google Vertex 模型（gemini-2.5-pro）的误报缺失修复 | ✅ 已关闭（mock-only-proof，需真实行为验证） |
| [#87801](https://github.com/openclaw/openclaw/pull/87801) | kai-ocean-kurt | **Claude Opus 4-8 推理适配**: `supportsAdaptiveThinking()` 遗漏 opus-4-8 导致 400 错误 + 静默降级 | ✅ 已合并 |
| [#88020](https://github.com/openclaw/openclaw/issues/88020) | bryanbaer | **Anthropic 思考块签名失效恢复**: `REPLAY_INVALID_RE` 缺失 "Invalid signature in thinking block" 导致硬失败而非重试 | ✅ 已关闭 |
| [#88443](https://github.com/openclaw/openclaw/issues/88443) | MrMaturin | **auth.cooldowns 热重载修复**: 配置变更不再强制全网关重启、丢弃进行中 CLI 运行 | ✅ 已关闭 |
| [#71709](https://github.com/openclaw/openclaw/issues/71709) | nikolaykazakovvs-ux | **计费失败误分类修复**: slug-generator HTTP 400 不再被误判为全 profile 计费失败（5h 冷却） | ✅ 已关闭 |
| [#81214](https://github.com/openclaw/openclaw/issues/81214) | GreyWolfRon | **子代理回归修复**: 2026.5.7 Ollama 子代理执行回归 | ✅ 已关闭 |
| [#72824](https://github.com/openclaw/openclaw/issues/72824) | jakepresent | **GitHub Copilot Claude Opus 1M 上下文**: 修正 128K 误标为 1M 的问题 | ✅ 已关闭 |

**整体推进评估**: 今日合并集中在**模型适配层**（Vertex、Claude、xAI、Copilot）和**运行时错误恢复**两个主题，为 2026.6.x 稳定版奠定可靠性基础。但 Codex 原生运行时的深层问题（启动时序、会话卡住、Active Memory 交互）仍有大量开放 Issue。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---:|:---|:---|
| 1 | [#32296](https://github.com/openclaw/openclaw/issues/32296) Agent 回复前一条消息而非当前消息（会话上下文混淆） | 13 | **会话状态正确性**: P1 级长期 bug，clawsweeper 多标签标记（needs-maintainer-review, needs-product-decision, needs-live-repro），社区急需确定性修复 | 🔴 开放，platinum hermit |
| 2 | [#87307](https://github.com/openclaw/openclaw/issues/87307) Matrix 线程回复退化为普通回复；/status /model 静默 | 11 | **Matrix 通道完整性**: 2026.5.22 回归，影响生产部署的线程化工作流 | 🔴 开放，gold shrimp |
| 3 | [#13583](https://github.com/openclaw/openclaw/issues/13583) 强制工具调用/策略规则的预响应执行钩子（硬门控） | 11 | **安全与合规**: 金融/量化场景要求机械强制而非软提示，需产品决策和安全审查 | 🔴 开放，diamond lobster |
| 4 | [#78308](https://github.com/openclaw/openclaw/issues/78308) MCP 工具调用的通道中介审批（同意信封） | 11 | **MCP 安全扩展**: 将 shell-exec 的 `/approve` 模式推广到所有 MCP 状态变更操作 | 🔴 开放，platinum hermit |
| 5 | [#88788](https://github.com/openclaw/openclaw/issues/88788) GHCR 2026.5.28 镜像发出过时的 Discord 进度评论配置 schema | 9 | **配置 schema 一致性**: Docker 制品与源码标签不同步，影响容器化部署 | 🔴 开放，platinum hermit |

### 高反应 Issues（👍 数）

| Issue | 👍 | 信号 |
|:---|:---:|:---|
| [#77666](https://github.com/openclaw/openclaw/issues/77666) 飞书群消息 replies=0 | 4 | 中国企业用户飞书集成阻断，升级回归 |
| [#86047](https://github.com/openclaw/openclaw/issues/86047) Codex 审批停滞导致 Nextcloud Talk 会话中断 | 3 | 企业协作场景 Codex 可靠性危机 |
| [#53242](https://github.com/openclaw/openclaw/issues/53242) chat.history 12k 字符截断 | 3 | 长消息场景用户体验受损 |
| [#75739](https://github.com/openclaw/openclaw/issues/75739) Codex harness 迁移 fallback 路由错误 | 3 | 迁移路径复杂性 |

**诉求分析**: 社区核心焦虑从"功能有无"转向**"生产可靠性"**——会话状态不漂移、通道消息不丢失、升级不回归、审批不卡死。企业用户（飞书、Nextcloud、Matrix）对稳定性敏感度高于个人用户。

---

## 5. Bug 与稳定性

### P1（严重）开放 Bug

| Issue | 症状 | 影响 | Fix PR 状态 |
|:---|:---|:---|:---|
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | Agent 回复历史消息，上下文混淆 | 会话状态损坏、消息丢失 | ❌ 无新修复 PR，需维护者审查+产品决策+现场复现 |
| [#87307](https://github.com/openclaw/openclaw/issues/87307) | Matrix 线程回复退化为普通回复 | 消息线程结构破坏 | ❌ 需现场复现 |
| [#83959](https://github.com/openclaw/openclaw/issues/83959) | Codex app-server 启动重试耗尽 | 定时后台任务崩溃循环 | ❌ 需现场复现 |
| [#85251](https://github.com/openclaw/openclaw/issues/85251) | Codex 发出 turn/started 后静默，embedded run 卡住 360s | 会话完全阻塞直至强制恢复 | ❌ 修复形状已明确，需队列化修复 |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) | Cron 任务在 LLM API 持续 500 时静默超时而非快速失败 | 资源浪费、任务堆积 | ❌ 回归 bug，需现场复现 |
| [#86047](https://github.com/openclaw/openclaw/issues/86047) | Codex 审批停滞导致 Nextcloud Talk 中断 | 企业协作场景中断 | ❌ 需维护者审查+现场复现 |
| [#86996](https://github.com/openclaw/openclaw/issues/86996) | Active Memory + Codex 路径高延迟、钩子超时、启动中止、事件循环停滞 | 复合性能与可用性灾难 | ❌ 多影响域，platinum hermit |
| [#87616](https://github.com/openclaw/openclaw/issues/87616) | GatewayClientRequestError: FailoverError LLM 请求 3 秒超时 | 本地 LM Studio 用户体验极差 | ❌ 需现场复现 |
| [#88020](https://github.com/openclaw/openclaw/issues/88020) | Anthropic 思考块签名失效导致硬失败 | 长会话必然崩溃 | ✅ **已关闭** |
| [#88443](https://github.com/openclaw/openclaw/issues/88443) | auth.cooldowns 配置变更强制全网关重启 | 进行中运行被 SIGTERM | ✅ **已关闭** |

### 回归问题集群（2026.5.22 前后）

- **Matrix 线程**: [#87307](https://github.com/openclaw/openclaw/issues/87307)
- **Discord 通道加载**: [#77930](https://github.com/openclaw/openclaw/issues/77930)（2026.5.4 beta.2/beta.3 损坏，beta.1 正常）
- **Codex 原生行为**: [#86047](https://github.com/openclaw/openclaw/issues/86047)（2026.5.12→2026.5.22 退化）
- **子代理/Ollama**: [#81214](https://github.com/openclaw/openclaw/issues/81214)（2026.5.7，已修复）

**稳定性评估**: Codex 运行时构成当前**最大稳定性风险面**，涉及启动时序、会话恢复、审批交互、Active Memory 耦合四个子域。建议维护团队设立专项。

---

## 6. 功能请求与路线图信号

### 高价值开放功能请求

| Issue/PR | 描述 | 纳入可能性 | 阻塞因素 |
|:---|:---|:---|:---|
| [#13583](https://github.com/openclaw/openclaw/issues/13583) 预响应硬门控钩子 | 强制工具调用/策略规则 | ⭐⭐⭐ 高 | 安全审查、产品决策、需现场复现 |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) MCP 通道中介审批 | 扩展 `/approve` 到 MCP | ⭐⭐⭐ 高 | 产品决策、现场复现 |
| [#88504](https://github.com/openclaw/openclaw/pull/88504) 多槽内存角色架构 | memory.recall/compaction/capture/warmth 分离 | ⭐⭐⭐ 高（XL PR 已开） | 兼容性风险、会话状态风险、需充分审查 |
| [#18860](https://github.com/openclaw/openclaw/pull/18860) after_tools_resolved 钩子暴露工具 schema | 插件可发现可用工具 | ⭐⭐ 中 | 需真实行为证明，AI 辅助编写 |
| [#79458](https://github.com/openclaw/openclaw/issues/79458) 斜杠命令 i18n | 中文用户本地化 | ⭐⭐ 中 | 产品决策、平台限制 |
| [#73699](https://github.com/openclaw/openclaw/issues/73699) Discord 语音桥接文本会话 | voice-as-IO | ⭐⭐ 中 | 架构复杂性，已有关闭 PR |
| [#32496](https://github.com/openclaw/openclaw/issues/32496) frequency/presence_penalty 支持 | OpenAI 兼容提供商 | ⭐⭐⭐ 高（已有关闭 PR） | 可能已部分实现，需验证 |

### 路线图信号

- **内存架构演进**: [#88504](https://github.com/openclaw/openclaw/pull/88504) 多槽角色架构 + [#88704](https://github.com/openclaw/openclaw/pull/88704) 每日列表提升重水合 + [#88830](https://github.com/openclaw/openclaw/pull/88830) 梦境阴影试验评分 → **2026.6.x 可能发布内存子系统重大重构**
- **认证路由统一**: [#88748](https://github.com/openclaw/openclaw/pull/88748) Gemini OAuth 桥接 CLI + [#88723](https://github.com/openclaw/openclaw/pull/88723) doctor 尊重 PI 运行时策略 → **多提供商 OAuth 标准化**
- **Telegram 体验优化**: [#87072](https://github.com/openclaw/openclaw/pull/87072) 交错进度通道 + [#88832](https://github.com/openclaw/openclaw/pull/88832) 慢轮询重启风暴修复 + [#88810](https://github.com/openclaw/openclaw/pull/88810) 空文本跳过 → **Telegram 作为 showcase 通道持续投入**

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issue 评论与描述）

| 场景 | 痛点 | 代表 Issue |
|:---|:---|:---|
| **企业定时任务** | Cron 任务在 API  outage 时静默挂起 180s，无快速失败；MiniMax 早高峰 503 仅影响定时触发、手动正常 | [#45494](https://github.com/openclaw/openclaw/issues/45494), [#85888](https://github.com/openclaw/openclaw/issues/85888) |
| **长会话可靠性** | Anthropic 思考块签名过期导致硬失败；会话 transcript 文件锁残留；Active Memory + Codex 复合延迟 | [#88020](https://github.com/openclaw/openclaw/issues/88020), [#87217](https://github.com/openclaw/openclaw/issues/87217), [#86996](https://github.com/openclaw/openclaw/issues/86996) |
| **多通道部署** | Telegram 流式中间文本丢失；Matrix 线程退化；Discord 多 bot 斜杠命令缺失；飞书群消息无回复 | [#87326](https://github.com/openclaw/openclaw/issues/87326), [#87307](https://github.com/openclaw/openclaw/issues/87307), [#77359](https://github.com/openclaw/openclaw/issues/77359), [#77666](https://github.com/openclaw/openclaw/issues/77666) |
| **配置与升级** | `openclaw update` 静默重写 protected 路由；GHCR 镜像 schema 与源码不同步；插件加载静默失败 | [#80628](https://github.com/openclaw/openclaw/issues/80628), [#88788](https://github.com/openclaw/openclaw/issues/88788), [#78301](https://github.com/openclaw/openclaw/issues/78301) |
| **本地/私有部署** | LM Studio 3 秒超时（配置不生效）；Windows exec/read 命令损坏 | [#87616](https://github.com/openclaw/openclaw/issues/87616), [#48780](https://github.com/openclaw/openclaw/issues/48780) |

### 满意度信号

- **积极**: 静态目录模型解析修复（[#88837](https://github.com/openclaw/openclaw/pull/88837)）减少 Vertex 用户配置困惑；媒体去重（[#77279](https://github.com/openclaw/openclaw/pull/77279)）改善 Telegram 多图体验
- **不满**: Codex 运行时"比原生 Codex App/CLI 慢 25 秒"（[#78947](https://github.com/openclaw/openclaw/issues/78947)）；升级路径"花费数小时调试插件加载静默失败"（[#78301](https://github.com/openclaw/openclaw/issues/78301)）

---

## 8. 待处理积压

### 长期未响应的重要 Issue（Stale 标记 + 高影响）

| Issue | 创建时间 | 最后更新 | 阻塞天数 | 风险 |
|:---|:---|:---|:---:|:---|
| [#78301](https://github.com/openclaw/openclaw/issues/78301) 插件加载静默失败 | 2026-05-06 | 2026-05-31 | 25 | 开发者体验持续受损，调试成本极高 |
| [#78435](https://github.com/openclaw/openclaw/issues/78435) Slack start-account 阻塞事件循环 5+ 分钟 | 2026-05-06 | 2026-05-31 | 25 | Windows 生产环境网关

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析
**分析日期**: 2026-06-01 | 数据来源: 各项目 GitHub 公开活动

---

## 1. 生态全景

个人 AI 助手开源生态正处于**从功能扩张向生产可靠性跃迁的关键拐点**。头部项目（OpenClaw、ZeroClaw）日均处理 50+ Issues/PR，聚焦运行时稳定性、多通道消息投递与企业级认证；中型项目（NanoBot、Hermes Agent、CoPaw）加速安全加固与跨平台修复；尾部项目（LobsterAI、ZeptoClaw、TinyClaw）则陷入维护静默或停滞。**核心矛盾已从"能否运行"转向"能否可靠运行"**——会话状态一致性、工具权限沙箱、MCP 供应链安全成为全生态共同焦虑。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PR (24h) | 版本发布 | 健康度评估 | 关键特征 |
|:---|:---:|:---:|:---|:---|:---|
| **OpenClaw** | 500 | 500 | v2026.5.31-beta.3 连续迭代 | 🔶 **高活跃/高债务** | 生态标杆，Codex 运行时稳定性债务累积 |
| **ZeroClaw** | 46 (34活跃/12关闭) | 50 (41待合并/9关闭) | 无 (冲刺 v0.8.0-beta-2) | 🟢 **高活跃/结构良好** | 硬件/IoT 集成突破，Rust 架构，企业多租户需求涌现 |
| **Hermes Agent** | 50 (47活跃/3关闭) | 50 (42待合并/8关闭) | 无 | 🔶 **高活跃/Windows 债务** | Windows 原生支持成最大未满足诉求 |
| **CoPaw/QwenPaw** | 17 (14活跃/3关闭) | 2 (1待合并/1关闭) | 无 | 🔶 **中活跃/Windows 危机** | Windows 平台 Bug 集中爆发，MCP 进程管理失控 |
| **NanoBot** | 6 (2新增/4关闭) | 19 (12待合并/7关闭) | 无 | 🟢 **中高活跃/安全响应快** | Heartbeat 安全加固体系化，Azure 企业认证推进 |
| **NanoClaw** | 5 (全新增/0关闭) | 9 (7待合并/2关闭) | 无 | 🔴 **高贡献/低吞吐** | OneCLI 网关 P0 级故障无响应，维护带宽瓶颈 |
| **PicoClaw** | 7 (4活跃/3关闭) | 11 (7待合并/4关闭) | v0.2.9-nightly | 🟡 **中活跃/版本焦虑** | 社区质问"好久没发新版本"，Codex 兼容性快速修复 |
| **IronClaw** | 4 (3活跃/1关闭) | 21 (15待合并/6关闭) | 无 | 🔶 **高活跃/E2E 阻塞** | Reborn 架构重构，Nightly E2E 失败 4 天未修复 |
| **Moltis** | 0 | 1 (待合并) | 无 | ⚪ **极低活跃/维护模式** | Codex 流式协议边缘 case 防御性修复 |
| **NullClaw** | 2 (全新增) | 0 | 无 | 🔴 **停滞/待响应** | 核心功能静默失败，48h 响应窗口承压 |
| **LobsterAI** | 0 | 1 (stale 58天) | 无 | 🔴 **严重滞后** | PR 平均响应 >58 天，100% stale 占比 |
| **ZeptoClaw** | 0 (1关闭) | 0 | 无 | ⚪ **静默期** | 安全扫描流程性关闭，零技术推进 |
| **TinyClaw** | 0 | 0 | 无 | ⚫ **无活动** | — |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **规模地位** | 24h 500 Issues + 500 PR，**量级碾压**所有竞品（次高 ZeroClaw 仅 46+50） | 社区规模 ≈ 10× 中型项目，形成**事实标准引力** |
| **技术路线** | **多通道优先**（Telegram/Matrix/Discord/iMessage/飞书全覆盖）+ **Codex 原生运行时**深度集成 | ZeroClaw 侧重 Rust/硬件/IoT；NanoBot 聚焦 WebUI/Heartbeat；Hermes 强调跨平台/IDE 集成 |
| **优势领域** | ① 通道生态最完整（企业 IM 全覆盖）；② 模型适配层响应最快（Claude/Gemini/xAI/Copilot 当日修复）；③ 内存架构演进领先（多槽角色架构 XL PR） | 竞品多在单点领先：ZeroClaw 的硬件抽象、NanoBot 的安全响应、Hermes 的 ACP 协议 |
| **核心劣势** | **Codex 运行时稳定性债务**（启动失败、会话卡住、Active Memory 耦合）构成最大风险面；XL 级 PR 审查周期过长 | ZeroClaw 的 Rust 架构更稳健；NanoClaw 的网关故障已暴露系统性风险 |
| **社区治理** | "platinum hermit" 等标签体系化，但 P1 Issue 长期未解（#32296 会话上下文混淆）显示**规模扩张与维护带宽的错配** | NanoBot 的 2 天安全漏洞闭环是响应速度标杆 |

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---:|
| **MCP 安全与治理** | OpenClaw (#78308)、NanoClaw (#2641)、NanoBot (#4120 关闭)、IronClaw (#2923) | 从 shell-exec `/approve` 扩展到全 MCP 操作审批；供应链审计机制（恶意服务器诱导密码输入）；SSRF 前置防护 | 🔴 **P0** |
| **Windows 平台原生支持** | Hermes (#2512/#10359, 14👍)、CoPaw (#4123 等 5 个 Bug)、OpenClaw (#48780) | WSL2 受限企业环境需原生支持；cmd 窗口闪烁、进程残留、目录锁 | 🔴 **P0** |
| **会话状态与上下文可靠性** | OpenClaw (#32296 回复历史消息)、CoPaw (#4653 定时任务打断)、NanoClaw (#2665 单线程冻结) | 多任务调度隔离；会话状态不漂移；定时任务与用户消息并发安全 | 🔴 **P0** |
| **企业认证与多租户** | NanoBot (#4125 Azure AAD)、ZeroClaw (#5982 RBAC/#7041 多租户 Linq)、OpenClaw (auth.cooldowns 热重载) | API Key 策略被封禁后的替代方案；单实例多用户隔离；按发送者权限控制 | 🟡 **P1→P0** |
| **Codex/OpenAI 兼容性** | OpenClaw (核心运行时)、PicoClaw (#2967 流式空值)、Moltis (#1088 工具参数流)、ZeroClaw (#7022 Kimi 温度兼容) | 流式响应边缘 case；OAuth 认证路由；工具调用参数增量缺失 | 🟡 **P1** |
| **进程与资源管理** | CoPaw (#4842 MCP 进程爆炸)、NanoClaw (#2655 fd 耗尽)、ZeroClaw (#5122 私有 IP 绕过) | MCP 进程生命周期管控；文件描述符限制；容器孤儿清理 | 🟡 **P1** |
| **输出路由灵活性** | ZeroClaw (#6969 从 Letta 迁移落差)、OpenClaw (多通道消息投递)、CoPaw (#4843 聊天模式配置) | 控制回复投递方式与位置；TTS/语音通道重构；邮件/XOAUTH2 | 🟢 **P2** |

---

## 5. 差异化定位分析

| 项目 | 核心用户画像 | 技术架构特征 | 功能侧重 | 竞争壁垒 |
|:---|:---|:---|:---|:---|
| **OpenClaw** | 多平台部署者、企业 IM 集成需求 | TypeScript/Node，插件化架构，内存子系统演进中 | **全通道覆盖** + **模型适配广度** | 生态规模、通道完整性 |
| **ZeroClaw** | 硬件黑客、边缘计算开发者、Rust 偏好者 | Rust，强类型安全，feature 聚合管理 | **IoT/ESP32 集成** + **语音/TTS 管道** | 性能、安全、硬件抽象 |
| **NanoBot** | 安全敏感型企业、定时任务重度用户 | Python，WebUI 优先，Heartbeat 机制 | **安全加固** + **通知可靠性** | 安全响应速度、Heartbeat 独特设计 |
| **Hermes Agent** | IDE 深度用户、跨平台开发者 | Python，Tauri 桌面端，ACP 协议 | **IDE 集成** + **Trace 可观测性** | ACP 生态双向布局 |
| **CoPaw/QwenPaw** | 中文用户、Windows 桌面端用户 | Python，PyQt/Tk 桌面端，技能系统 | **国产模型适配** + **桌面交互体验** | 中文生态、DashScope 等国产 API |
| **NanoClaw** | 家庭共享场景、小团队非技术用户 | Node，OneCLI 网关集中式 | **低代码部署** + **多用户隔离**（愿景） | 易用性（尚未兑现） |
| **IronClaw** | NEAR 生态开发者、Reborn 早期采用者 | Rust，libSQL， capability 安全模型 | **产品认证体系** + **触发器基础设施** | NEAR 区块链集成（差异化但小众） |
| **PicoClaw** | 轻量部署者、QQ/中文渠道用户 | Go，单二进制，nightly 构建 | **极速启动** + **中文渠道** | 体积、启动速度 |

---

## 6. 社区热度与成熟度

```
快速迭代阶段（高活跃 + 明确方向）
├── OpenClaw ──────► 功能迭代积极，稳定性债务累积，需 Codex 专项 hardening
├── ZeroClaw ──────► 硬件/IoT 突破 + 企业多租户，Rust 架构稳健，beta-2 冲刺
├── Hermes Agent ──► 安全加固 + 跨平台修复，Windows 专项缺位是最大风险
└── NanoBot ───────► 安全体系化 + Azure 企业认证，Heartbeat 机制成熟

质量巩固阶段（中活跃 + 聚焦修复）
├── CoPaw ─────────► Windows 危机 + MCP 进程失控，需架构级修复而非补丁
├── IronClaw ──────► Reborn 重构深水区，E2E 阻塞需立即解决
└── PicoClaw ──────► 版本节奏焦虑，Codex 修复快但系统性不足

维护瓶颈/停滞阶段（低活跃或高贡献低吞吐）
├── NanoClaw ──────► 🔴 危险：P0 故障零响应，7 PR 堆积，维护带宽崩溃
├── Moltis ────────► 防御性维护，社区参与度枯竭
├── NullClaw ──────► 核心功能静默失败，48h 信任修复窗口
├── LobsterAI ─────► 58 天 PR stale，100% 积压，贡献者流失风险
├── ZeptoClaw ─────► 安全扫描流程性活动，零技术推进
└── TinyClaw ──────► 完全静默
```

---

## 7. 值得关注的趋势信号

| 趋势 | 信号来源 | 对开发者的价值 |
|:---|:---|:---|
| **"可靠性优先"范式转移** | OpenClaw 社区焦虑从"功能有无"转向"生产可靠性"；NanoClaw "检测能力强但反应弱"的复盘；全生态 P0 级 Issue 集中在"静默失败"而非"崩溃" | 智能体框架的**可观测性、故障自愈、状态一致性**将成为下一个竞争高地，单纯功能覆盖不再足够 |
| **MCP 生态的"npm 时刻"** | NanoClaw 供应链安全事件（恶意 Gmail MCP 服务器）；OpenClaw 扩展 `/approve` 到全 MCP；IronClaw 认证端点发现混乱 | **MCP 服务器审计、沙箱隔离、供应链签名**将快速标准化，早期建立安全基础设施的项目获得信任溢价 |
| **Windows 成为"第二移动端"** | Hermes 14👍 最高需求、CoPaw 45% 新增 Issue 为 Windows、OpenClaw 长期 Windows exec 损坏 | 企业环境 WSL2 受限背景下，**原生 Windows 支持**是从开发者工具向企业基础设施跃迁的准入门槛，技术债务项目将丧失 B 端市场 |
| **输出路由的"管道化"重构** | ZeroClaw #6969 Letta 迁移用户的落差诉求；OpenClaw 多通道消息投递修复密集；CoPaw 聊天模式配置请求 | 用户不再满足于"能回复"，而要求**控制如何、在哪、以何种格式回复**——TTS/语音/邮件/定时任务的统一路由抽象将成为架构升级重点 |
| **边缘/IoT 智能体的崛起** | ZeroClaw ESP32 模拟器 + 硬件能力工具；Raspberry Pi 部署需求 | **端侧模型 + 传感器/执行器集成**开辟新场景，Rust 项目（ZeroClaw、IronClaw）在资源约束环境有架构优势 |
| **"配置即代码"的幻觉破灭** | ZeroClaw #6720 `context_aware_tools` 字段无实现；CoPaw #4835 单无效 job 全崩；NanoBot Heartbeat 模板脆弱 | 用户容忍度下降：**文档承诺与实际代码的 gap 直接摧毁信任**，配置校验、功能开关的真实生效机制需工程级保障 |
| **企业认证的"云锁定"博弈** | NanoBot Azure AAD 紧急需求；OpenClaw Gemini OAuth 桥接；ZeroClaw XOAUTH2 邮件认证 | 企业安全策略强制禁用 API Key，**OAuth/Identity 集成**从"加分项"变为"必选项"，与云厂商生态绑定加深 |

---

**结论**: 2026-06-01 的个人 AI 助手生态呈现**"头部规模扩张、中部质量攻坚、尾部生存危机"**的分化格局。OpenClaw 的规模优势与其 Codex 稳定性债务形成对冲；ZeroClaw 的 Rust 架构与硬件突破指向差异化未来；而 NanoClaw、LobsterAI 等项目的维护带宽危机警示：**社区活力 ≠ 交付能力，工程治理与响应速度才是可持续竞争力的核心**。对于开发者选型，建议优先评估**运行时可靠性、MCP 安全机制、目标平台的原生支持度**三项硬指标。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-06-01

## 1. 今日速览

NanoBot 今日保持**高活跃度**，24小时内处理 **19 个 PR**（合并/关闭 7 个，待审阅 12 个）和 **6 个 Issues**（关闭 4 个，新增 2 个）。项目呈现**"安全加固+体验优化"双主线并行**特征：核心团队快速响应修复了 WebUI 白屏崩溃、WebSocket 未授权令牌发放等高危问题，同时社区贡献者在 Azure 企业认证、本地 ASR 语音输入等方向积极提案。无新版本发布，整体代码库处于密集迭代期，维护者审阅压力较大。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR（7 个）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#4127](https://github.com/HKUDS/nanobot/pull/4127) | Re-bin | **Agent 持续目标迭代预算扩展** — 为 `/goal` 任务添加可持续目标的内部延续路径，达到常规工具调用预算上限后自动续期 | 解决长周期任务中途断链痛点，提升复杂工作流完成率 |
| [#4121](https://github.com/HKUDS/nanobot/pull/4121) | Re-bin | **WebUI 渲染与宿主运行时优化** — 通用化宿主边界检查、稳定流式聊天渲染（推理块有序化、文件编辑动作可见化） | 消除桌面产品硬编码，为跨平台部署铺路 |
| [#4117](https://github.com/HKUDS/nanobot/pull/4117) | Flinn-X | **修复 WebUI 代码块白屏崩溃** — `undefined` language 回退至 `"text"` | 关闭高危崩溃 Issue #4116，保障会话加载稳定性 |
| [#4112](https://github.com/HKUDS/nanobot/pull/4112) | Re-bin | **Heartbeat 安全加固** — 通知评估器可配置化，内部检查期间静默推理、防止模型输出绕过通知门控 | 与 #4114 形成纵深防御，根治"All clear."误报 |
| [#4114](https://github.com/HKUDS/nanobot/pull/4114) | 04cb | **Heartbeat 空文件跳过+失败关闭** — 修复模板匹配过于严格导致的误触发，投递逻辑改为默认静默 | 关闭 #4111，消除飞书骚扰通知 |
| [#4103](https://github.com/HKUDS/nanobot/pull/4103) | hamb1y | **WebSocket 令牌发放强制鉴权** — 配置静态 token 时，token_issue_path 必须携带 Authorization | 关闭安全漏洞 #4077，阻断未授权短期令牌铸造 |
| [#4118](https://github.com/HKUDS/nanobot/pull/4118) | wzonce | Test push（无实质内容） | — |

**整体迈进评估**：今日合并 PR 覆盖 **Agent 核心循环、WebUI 稳定性、安全基础设施、定时任务可靠性** 四大支柱，项目健康度显著提升。特别是安全类修复（#4103、#4112、#4114）形成体系化加固，表明维护团队对生产环境风险高度敏感。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | 议题 | 互动指标 | 诉求分析 |
|:---|:---|:---|:---|
| 🔥 | [#4125](https://github.com/HKUDS/nanobot/issues/4125) Azure AAD 企业认证支持 | 1 评论，0 👍，**关联 PR #4126 已提交** | **企业合规刚需**：Azure 订阅策略强制禁用 API Key 认证，用户需要 Azure Identity（Entra ID）集成。诉求本质是 NanoBot 从"个人开发者工具"向"企业级部署"跃迁的准入门槛 |
| 🔥 | [#4120](https://github.com/HKUDS/nanobot/issues/4120) Vest MCP 工具推荐/商业化合作 | 1 评论，0 👍，**已关闭** | 外部 SaaS 工具市场方试图嵌入 NanoBot 生态，被快速关闭。反映社区对**商业化边界敏感**——核心团队倾向保持框架中立性，工具推荐可能引发幻觉与利益冲突争议 |

**深层信号**：企业级认证需求（#4125）与 MCP 生态商业化试探（#4120）形成对照，显示 NanoBot 正处于**社区扩张与商业诱惑的交叉路口**。维护者选择关闭 #4120 同时积极跟进 #4126，表明"先夯实基础设施，再谈生态变现"的优先级判断。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | Issue/PR | 状态 | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **High** | WebUI 无语言标识代码块导致白屏崩溃 | [#4116](https://github.com/HKUDS/nanobot/issues/4116) → [#4117](https://github.com/HKUDS/nanobot/pull/4117) | **已修复合并** | 特定会话加载时整个 WebUI 不可用，用户数据可达性风险 |
| 🔴 **High** | WebSocket 令牌路由未鉴权铸造短期令牌 | [#4077](https://github.com/HKUDS/nanobot/issues/4077) → [#4103](https://github.com/HKUDS/nanobot/pull/4103) | **已修复合并** | 静态 token 配置场景下的权限绕过，潜在会话劫持 |
| 🟡 **Medium** | Heartbeat 无任务时误发 "All clear." 到飞书 | [#4111](https://github.com/HKUDS/nanobot/issues/4111) → [#4114](https://github.com/HKUDS/nanobot/pull/4114) + [#4112](https://github.com/HKUDS/nanobot/pull/4112) | **已修复合并** | 通知噪音，用户信任损耗 |
| 🟡 **Medium** | `retain_recent_legal_suffix` 用户消息重复归档 | [#4128](https://github.com/HKUDS/nanobot/issues/4128) | **待修复**，无关联 PR | LLM 上下文不一致，可能导致对话逻辑断裂 |
| 🟢 **Low** | Heartbeat 内部检查期间模型输出绕过通知门控 | — → [#4112](https://github.com/HKUDS/nanobot/pull/4112) | **已修复合并** | 防御性加固，实际利用条件苛刻 |

**稳定性态势**：今日 **3/4 已知 Bug 已闭环修复**，剩余 [#4128](https://github.com/HKUDS/nanobot/issues/4128) 为代码逻辑缺陷，影响上下文压缩机制，需优先分配开发者跟进。

---

## 6. 功能请求与路线图信号

| 需求来源 | 功能方向 | 成熟度评估 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| [#4125](https://github.com/HKUDS/nanobot/issues/4125) / [#4126](https://github.com/HKUDS/nanobot/pull/4126) | Azure AAD/Identity 认证 | **PR 已提交，待审阅**，代码完整覆盖新旧流程切换 | ⭐⭐⭐⭐⭐ **极高** — 企业合规硬需求，PR 与 Issue 同日出现显示贡献者准备充分 |
| [#4122](https://github.com/HKUDS/nanobot/pull/4122) | WebUI 语音录制 + 本地 ASR (FunASR) | **PR 待审阅**，标记 `[invalid]` 标签存疑，可能需调整实现方式 | ⭐⭐⭐☆☆ **中等** — 多模态交互趋势明确，但标签暗示架构或代码规范需返工 |
| [#4124](https://github.com/HKUDS/nanobot/pull/4124) | mimo/glm 模型 XML 工具调用解析 | **PR 待审阅**，解决特定模型兼容性，影响 Telegram/WebSocket 消息洁净度 | ⭐⭐⭐⭐☆ **较高** — 国产模型生态适配，社区呼声可能推动快速合并 |
| [#4123](https://github.com/HKUDS/nanobot/pull/4123) | MCP SSRF 前置防护 | **PR 待审阅**，安全加固类，回归测试已覆盖 | ⭐⭐⭐⭐☆ **较高** — 与今日安全主题一致，合并不存疑 |
| [#4115](https://github.com/HKUDS/nanobot/pull/4115) | GatewayHTTPHandler 提取重构 | **PR 待审阅**，架构解耦第一步，为热重载铺路 | ⭐⭐⭐☆☆ **中等** — 长期架构债务，非紧急但战略价值明确 |
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) | Heartbeat 推理与通知解耦 | **PR 开放超 3 个月**，配置化字段 `sendReasoning` 已实现 | ⭐⭐⭐⭐☆ **较高** — 今日 Heartbeat 系列修复可能为该 PR 扫清合并障碍 |

**路线图信号**：短期（1-2 周）聚焦 **Azure 企业认证 + 安全加固收尾**；中期（1 个月）关注 **多模态输入（语音）与国产模型适配** 的社区贡献质量；长期架构目标 **WebUI/传输层/AgentLoop 解耦**（#4115、#3990）持续推进。

---

## 7. 用户反馈摘要

### 真实痛点

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| [#4125](https://github.com/HKUDS/nanobot/issues/4125) | Azure API Key 策略被企业安全团队封禁 | 大型企业/政府云订阅强制启用 Azure Identity，NanoBot 无法部署 |
| [#4116](https://github.com/HKUDS/nanobot/issues/4116) | 历史会话含裸代码块时 WebUI 彻底崩溃 | 用户无法回溯查看过往对话，数据"软锁定" |
| [#4111](https://github.com/HKUDS/nanobot/issues/4111) | 飞书每 30 分钟收到无意义 "All clear." | 夜间/周末持续骚扰，几乎导致停用 Heartbeat 功能 |

### 满意点

- **安全响应速度**：[#4077](https://github.com/HKUDS/nanobot/issues/4077) 从报告到修复仅 2 天，hamb1y 的漏洞报告与修复 PR 形成闭环
- **架构透明度**：Re-bin 的 PR 摘要持续说明设计决策（如 "keep continuation policy in `turn_continuation`"），便于社区理解代码演进

### 不满意/风险点

- **Heartbeat 模板机制脆弱**：#4111 根因是"跳过检查匹配精确模板"，任何措辞编辑即破坏行为，表明配置即代码（Configuration as Code）的容错性不足
- **MCP 生态商业化侵入**：#4120 被快速关闭，但类似试探可能反复出现，需建立明确的 **第三方工具准入/合作政策**

---

## 8. 待处理积压

### 需维护者重点关注

| PR/Issue | 创建时间 | 滞留原因 | 风险/行动建议 |
|:---|:---|:---|:---|
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) Heartbeat 推理与通知解耦 | 2026-03-02（**91天**） | 长期未合并，可能与 Heartbeat 系列快速修复存在冲突 | ⚠️ **高优先级审阅** — 今日 #4112/#4114 已重构相关逻辑，建议评估是否 rebase 后合并或提取有效部分 |
| [#3990](https://github.com/HKUDS/nanobot/pull/3990) Dream 技能两阶段重构 | 2026-05-24（**8天**） | 架构级变更，影响 Agent 定时任务核心 | 建议安排架构 review，确认与 #4101（Dream 所有权标记）的兼容性 |
| [#4128](https://github.com/HKUDS/nanobot/issues/4128) 消息重复归档 Bug | 2026-05-31（**今日**） | 无关联 PR，核心代码路径（`session/manager.py`） | 🔴 **建议 48 小时内分配** — 上下文压缩是 Agent 可靠性基石，重复归档可能导致级联对话故障 |
| [#4122](https://github.com/HKUDS/nanobot/pull/4122) 语音录制+本地 ASR | 2026-05-31 | `[invalid]` 标签含义不明，贡献者可能未获明确反馈 | 建议维护者澄清标签标准（架构不符？代码规范？测试缺失？），避免贡献者流失 |

---

*日报生成时间：2026-06-01 | 数据来源：HKUDS/nanobot GitHub 公开活动*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-06-01

---

## 1. 今日速览

Hermes Agent 今日呈现**极高活跃度**：24小时内 Issues 更新 50 条（47 条新开/活跃，仅 3 条关闭）、PR 更新 50 条（42 条待合并，8 条已合并/关闭），**无新版本发布**。社区焦点集中在**跨平台支持**（Windows 原生支持呼声持续高涨）、**网关稳定性**（Telegram/Discord/Feishu 多平台修复密集）以及**安全加固**（ traceback  sanitization、Open WebUI 安装竞态修复）。值得注意的是，今日出现 6 条 P1/P2 高优先级安全与稳定性 PR，显示项目正加速生产环境就绪。

---

## 2. 版本发布

**无新版本发布。** 最新版本仍为历史版本，今日 50 个 PR 中 42 个待合并，预计近期将有集中发布。

---

## 3. 项目进展

### 今日已合并/关闭 PR（8 条中的关键项）

| PR | 作者 | 核心进展 | 链接 |
|:---|:---|:---|:---|
| **#36134** [CLOSED] | OutThisLife | **macOS/Linux 瘦安装器端到端修复**：解决 Tauri 安装器 `desktop` 阶段因未调用 `check_node` 导致静默跳过桌面构建的问题 | [PR #36134](https://github.com/NousResearch/hermes-agent/pull/36134) |
| **#36129** [CLOSED] | forschzachary | **跨平台网关稳定性**：非 Linux 系统（macOS/Windows）回退至 `psutil` 获取进程启动时间，修复网关重启抖动 | [PR #36129](https://github.com/NousResearch/hermes-agent/pull/36129) |

### 待合并高价值 PR（42 条中的核心推进）

| PR | 优先级 | 功能/修复领域 | 链接 |
|:---|:---|:---|:---|
| **#36145** | — | **HF Trace Viewer 集成**：新增 `/upload-trace` 与 `hermes trace upload`，支持会话转储至 Hugging Face 私有数据集 | [PR #36145](https://github.com/NousResearch/hermes-agent/pull/36145) |
| **#36143** [P1] | 安全 | **Open WebUI 安装安全加固**：关闭 LAN 首设备抢注管理员账户的竞态漏洞（`OPEN_WEBUI_ENABLE_SIGNUP` 默认改 `false`） | [PR #36143](https://github.com/NousResearch/hermes-agent/pull/36143) |
| **#36141** [P1] | 核心修复 | **Gemini 自前缀剥离**：`google/gemini-2.0-flash` 等自前缀模型 ID 不再 404 | [PR #36141](https://github.com/NousResearch/hermes-agent/pull/36141) |
| **#36140** [P2] | 安全 | **Traceback 与路径信息脱敏**：防止绝对路径与敏感信息泄露至客户端/LLM | [PR #36140](https://github.com/NousResearch/hermes-agent/pull/36140) |
| **#36146** [P2] | 核心修复 | **Honcho 自托管五连修**：API 密钥继承、localhost 多配置、方言错误修复 | [PR #36146](https://github.com/NousResearch/hermes-agent/pull/36146) |
| **#36139** [P2] | 网关修复 | **Telegram DM 话题锚定通知**：网关重启后消息通知可正确锚定回复 | [PR #36139](https://github.com/NousResearch/hermes-agent/pull/36139) |
| **#36138** [P3] | 工程质量 | **36 文件代码质量与测试加固**：MagicMock 产物清理、上下文压缩器状态修复等 | [PR #36138](https://github.com/NousResearch/hermes-agent/pull/36138) |

**整体评估**：今日 PR 呈现**"安全加固 + 跨平台修复 + 可观测性增强"**三主线，项目在生产部署就绪度上迈进显著。

---

## 4. 社区热点

### 最高讨论热度 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 链接 |
|:---|:---|:---:|:---:|:---|:---|
| **#1** | **Native Windows Support** | 10 | 6 | Windows 原生支持（非 WSL2），开发者体验重大缺口 | [#2512](https://github.com/NousResearch/hermes-agent/issues/2512) |
| **#2** | **native windows support**（重复/补充） | 9 | 8 | 同上，强调 WSL2 替代需求，👍 更高显示用户基数 | [#10359](https://github.com/NousResearch/hermes-agent/issues/10359) |
| **#3** | **kanban dispatcher WAL/SHM 缓存污染** [CLOSED] | 5 | 0 | 多线程 + 子进程并发下的 SQLite 连接生命周期竞争 | [#31158](https://github.com/NousResearch/hermes-agent/issues/31158) |
| **#4** | **本地 LLM prefill 阶段流超时无限重试** | 5 | 2 | 大模型预热时间超过 180s 默认超时导致死循环 | [#7069](https://github.com/NousResearch/hermes-agent/issues/7069) |
| **#5** | **ACP Registry Zed 编辑器集成** | 5 | 0 | IDE 生态扩展，Agent Client Protocol 标准化接入 | [#16028](https://github.com/NousResearch/hermes-agent/issues/16028) |

### 热点分析

- **Windows 支持**：两条 Issue 合计 **14 👍**，是社区**最强烈未满足需求**。项目目前依赖 WSL2，但开发者期望原生体验，涉及 CI、测试、文档全链条（标记为 Large Scope）。今日 PR #36129（macOS 进程时间修复）显示跨平台投入在增加，但 Windows 专项仍缺。
- **本地 LLM 适配**：[#7069](https://github.com/NousResearch/hermes-agent/issues/7069) 反映边缘部署场景痛点——prefill 超时与重试策略需智能化（如动态超时或预检模型加载状态）。

---

## 5. Bug 与稳定性

按严重程度排列，标注修复状态：

| 优先级 | Issue | 描述 | 状态 | 链接 |
|:---|:---|:---|:---|:---|
| **P1** | **#30411** | Telegram DM 自动话题重命名与工具调用路由断裂 | 🔧 **PR #36139 修复中** | [#30411](https://github.com/NousResearch/hermes-agent/issues/30411) |
| **P1** | **#32574** | 网关缺乏跨平台僵尸连接检测机制（Discord/Telegram 等） | ⏳ 待修复 | [#32574](https://github.com/NousResearch/hermes-agent/issues/32574) |
| **P1** | **#25516** | GPT 池类型错误导致所有 OpenAI 家族请求失败 | ⏳ 待修复 | [#25516](https://github.com/NousResearch/hermes-agent/issues/25516) |
| **P2** | **#36144** ⭐ **NEW** | Agent 会话 `HOME` 指向错误路径，工具搜索用户实际 home | ⏳ **今日新报** | [#36144](https://github.com/NousResearch/hermes-agent/issues/36144) |
| **P2** | **#35908** | GoogleDrive MCP 登录阶段失败（配置正确） | ⏳ 部分修复后仍失败 | [#35908](https://github.com/NousResearch/hermes-agent/issues/35908) |
| **P2** | **#36108** ⭐ **NEW** | Discord 网关适配器非默认配置下未注册/发现 | ⏳ **今日新报** | [#36108](https://github.com/NousResearch/hermes-agent/issues/36108) |
| **P2** | **#32737** | Tirith shell 扫描器误报管道至解释器（用户自有可执行文件） | ⏳ 待修复 | [#32737](https://github.com/NousResearch/hermes-agent/issues/32737) |
| **P2** | **#32049** | Docker 终端后端文件工具写入沙箱镜像而非权威配置状态 | ⏳ 跟进 #31290 | [#32049](https://github.com/NousResearch/hermes-agent/issues/32049) |
| **P2** | **#36070** ⭐ **NEW** | Gemini vision provider 拒绝 `image_url` 格式 | ⏳ **今日新报** | [#36070](https://github.com/NousResearch/hermes-agent/issues/36070) |
| **P2** | **#36052** ⭐ **NEW** | 错误 MCP HTTP 端点（返回 HTML）阻塞发现 60 秒 | ⏳ **今日新报** | [#36052](https://github.com/NousResearch/hermes-agent/issues/36052) |
| **P2** | **#36054** ⭐ **NEW** | 网关图像自动路由忽略会话模型覆盖 | ⏳ **今日新报** | [#36054](https://github.com/NousResearch/hermes-agent/issues/36054) |

**关键信号**：今日 **6 条新增 P2 Bug**，集中在**网关多平台适配**（Discord/Telegram/Feishu）、**MCP 工具链**、**模型提供商边缘情况**（Gemini vision）。P1 级别的网关僵尸连接检测（#32574）和 GPT 池类型错误（#25516）长期未解，影响生产稳定性。

---

## 6. 功能请求与路线图信号

| Issue/PR | 功能 | 社区热度 | 纳入可能性 | 链接 |
|:---|:---|:---:|:---|:---|
| **#25267** | **Claude Agent SDK 订阅制 OAuth**（Codex 风格，避免双重付费） | 12 👍 | **高** — 提供商生态扩展，PR #36137（Anthropic User-Agent 可配置）已铺垫 | [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) |
| **#20510** | **全配置云同步跨设备** | 9 👍 | 中 — 基础设施需求明确，但涉及安全与存储架构 | [#20510](https://github.com/NousResearch/hermes-agent/issues/20510) |
| **#21910** | **rewind/edit-and-resubmit**（Claude Code 双 Esc） | 5 👍 | 中 — CLI/TUI 体验增强，与 #36145 trace 上传形成工作流闭环 | [#21910](https://github.com/NousResearch/hermes-agent/issues/21910) |
| **#36113 / #36136** | **web_search_tool 分类过滤参数** | 1 👍 / PR 待合并 | **高** — PR 已提交，多提供商支持（Firecrawl/SearXNG/Exa/Brave/Tavily） | [#36113](https://github.com/NousResearch/hermes-agent/issues/36113) / [PR #36136](https://github.com/NousResearch/hermes-agent/pull/36136) |
| **#36057** ⭐ **NEW** | **ACP client 模式**（Hermes 作为外部 ACP agent 控制器） | 1 👍 | 中 — 与 #16028 ACP Registry 服务器模式互补，生态双向扩展 | [#36057](https://github.com/NousResearch/hermes-agent/issues/36057) |
| **#27877** | 辅助任务 `enabled` 开关（title_generation 等） | 2 👍 | 高 — 配置灵活性，错误处理体验 | [#27877](https://github.com/NousResearch/hermes-agent/issues/27877) |

**路线图信号**：**可观测性（trace 上传）+ 提供商生态（Claude OAuth、Gemini/xAI 修复）+ 搜索增强** 构成近期功能交付主力。ACP 双向（服务器/client）布局显示 Hermes 正定位为中心化 agent 编排层。

---

## 7. 用户反馈摘要

### 痛点

| 场景 | 来源 Issue | 核心不满 |
|:---|:---|:---|
| **Windows 开发者被边缘化** | #2512, #10359 | "需要原生 Windows 支持而不是 WSL2" — 企业环境 WSL2 受限 |
| **本地大模型部署体验断裂** | #7069 | prefill 超时导致无限重试，"agent 完全不可用" |
| **配置同步困境** | #20510 | 多设备工作需手动复制 `~/.hermes/`，"没有内置方式" |
| **MCP 工具链调试困难** | #35908, #36052 | 登录失败无明确错误、错误端点阻塞 60 秒无反馈 |
| **网关多平台"僵尸"状态** | #32574, #30411, #36108 | Telegram 话题错乱、Discord 配置丢失、连接假死无检测 |

### 满意/期待

- **Trace 可观测性**：PR #36145 的 HF Trace Viewer 集成获期待，解决会话调试黑盒问题
- **安全响应速度**：#36143 Open WebUI 竞态漏洞当日提 PR 当日修复，显示安全响应敏捷

---

## 8. 待处理积压

### 长期高价值未响应 Issue

| Issue | 创建时间 | 现状 | 风险 | 链接 |
|:---|:---|:---|:---|:---|
| **#2512 Native Windows Support** | 2026-03-22 | 3 个月前提出，10 评论 6 👍，无维护者明确回应 | 社区最大声诉求，竞品可能借此差异化 | [#2512](https://github.com/NousResearch/hermes-agent/issues/2512) |
| **#7069 本地 LLM 无限重试** | 2026-04-10 | 2 个月，5 评论，无 PR 关联 | 边缘部署场景核心体验断裂 | [#7069](https://github.com/NousResearch/hermes-agent/issues/7069) |
| **#16028 ACP Registry Zed 集成** | 2026-04-26 | 1 个月，5 评论，步骤清晰但未启动 | IDE 生态扩展窗口期 | [#16028](https://github.com/NousResearch/hermes-agent/issues/16028) |
| **#32574 网关僵尸连接检测** | 2026-05-26 | 6 天，P1 优先级，仅 1 评论 | 生产环境稳定性根基问题 | [#32574](https://github.com/NousResearch/hermes-agent/issues/32574) |

### 维护者关注提醒

> **🔴  urgent**：#32574 网关僵尸连接检测（P1）影响所有平台适配器，与今日密集的多平台修复（#36139 Telegram、#36133 Feishu、#36108 Discord）直接相关，建议统筹设计而非逐个打补丁。
> 
> **🟡  important**：Windows 原生支持（#2512/#10359）社区声量最高，需评估是否纳入 Q3 路线图并公开里程碑。

---

*日报基于 GitHub 公开数据生成，时间范围：2026-05-31 至 2026-06-01*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-06-01

> **项目**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw) | **报告日期**: 2026-06-01 | **数据周期**: 过去24小时

---

## 1. 今日速览

PicoClaw 今日保持**中高活跃度**，24小时内产生 **7 条 Issues 更新**与 **11 条 PR 更新**，形成健康的 1.6:1 PR/Issue 比率。社区核心痛点集中在 **OpenAI/Codex OAuth 流式响应空值问题**——该 Bug 今日同时出现独立 Issue 报告、重复 Issue 关闭及专项修复 PR 合并，显示维护响应迅速。功能层面，cron 工具增强、Telegram 交互优化及 Anthropic SDK 兼容性修复并行推进。值得注意的是，**3 个 PR 因 stale 状态被标记**，技术债务开始累积，需关注评审带宽。

---

## 2. 版本发布

### 🔧 Nightly Build: v0.2.9-nightly.20260531.1ce353ba
- **发布时间**: 2026-05-31
- **性质**: 自动化构建（可能不稳定）
- **变更范围**: [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
- **迁移提示**: 生产环境建议继续使用稳定版 v0.2.9；夜间构建包含未发布的主分支变更，需自行承担稳定性风险

> ⚠️ 用户 Issue [#2952](https://github.com/sipeed/picoclaw/issues/2952) 直接反馈"好久没发新版本了"，社区对正式版本发布的期待值正在上升。

---

## 3. 项目进展

### ✅ 已合并/关闭 PR（4 条）

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#2967](https://github.com/sipeed/picoclaw/pull/2967) | miruchigawa | **修复 Codex 流式输出空值问题**：在 `response.output` 为 null 时，保留累积的 `output_text.delta` 流式文本 | **关键稳定性修复**——解决 ChatGPT Codex 后端集成失败的核心障碍，直接影响 OAuth 用户体验 |
| [#2969](https://github.com/sipeed/picoclaw/pull/2969) | lc6464 | Web 前端支持图片粘贴与拖拽上传，含 MIME 类型规范化 | 提升多模态交互体验，补齐 Web 渠道媒体能力短板 |
| [#2980](https://github.com/sipeed/picoclaw/pull/2980) | OmegaSoftDLL | `.gitignore` 追加调试输出文件 | 开发者体验微调 |
| [#2856](https://github.com/sipeed/picoclaw/pull/2856) | bogdanovich | [CLOSED] message 工具媒体附件与 Telegram 富文本投递 | **功能回退/未采纳**——关联 Issue #2855 同步关闭，富媒体消息方案可能需重新设计 |

**今日里程碑**: Codex 兼容性修复直接关闭两条重复 Bug 报告（#2674, #2953），维护效率显著。

---

## 4. 社区热点

### 🔥 讨论最活跃 Issue: [#28](https://github.com/sipeed/picoclaw/issues/28) — LM Studio Easy Connect
| 指标 | 数值 |
|:---|:---|
| 评论数 | **21** |
| 存在周期 | 109 天（2026-02-11 创建） |
| 状态 | **CLOSED**（stale 关闭） |
| 👍 | 2 |

**诉求分析**: 该 Issue 代表大量**低代码能力用户**的接入困境——他们希望 PicoClaw 提供 LM Studio 的"一键连接"能力，而非手动配置 endpoint。stale 关闭而非实现，暗示本地模型接入的易用性尚未进入核心路线图，存在用户流失风险。

### 🔥 技术深度最高 Issue: [#2674](https://github.com/sipeed/picoclaw/issues/2674) — Codex OAuth 空响应
| 指标 | 数值 |
|:---|:---|
| 评论数 | 7 |
| 👍 | 4（Issues 中最高） |
| 状态 | OPEN（修复 PR 已合并，待验证关闭） |

**诉求分析**: 高级用户已深入追踪到 `response.output_item.done` 事件与流式处理的竞态条件，体现社区技术能力分层明显。

---

## 5. Bug 与稳定性

| 优先级 | Issue/PR | 描述 | 状态 |
|:---|:---|:---|:---|
| **P0-已修复** | [#2953](https://github.com/sipeed/picoclaw/issues/2953) / [#2674](https://github.com/sipeed/picoclaw/issues/2674) | Codex OAuth 返回空响应（`response.output_text.delta` 被忽略） | **✅ Fix PR [#2967](https://github.com/sipeed/picoclaw/pull/2967) 已合并** |
| **P1-待验证** | [#2968](https://github.com/sipeed/picoclaw/issues/2968) | `/context` 始终显示 `Compress at: 76800 tokens`，与配置的 128K max_tokens 不符（MiniMax 提供商） | OPEN，3 条评论，无 PR |
| **P1-待处理** | [#2952](https://github.com/sipeed/picoclaw/issues/2952) | exec 命令首次默认不带 actions:run 导致模型报错；QQ 渠道重启循环；agent.md 遵循问题 | OPEN，综合体验 Bug |

**风险评估**: 
- **Codex 修复**虽合并，但需关注是否覆盖所有流式事件边界（`response.completed` 与 `response.output_item.done` 的时序组合）
- **#2968** 涉及上下文压缩逻辑与提供商特定行为，可能暴露 token 计数抽象层的系统性缺陷

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 可行性信号 | 纳入可能性 |
|:---|:---|:---|:---|
| **cron 工具 get/update 操作** | PR [#2977](https://github.com/sipeed/picoclaw/pull/2977) | 直接扩展现有工具，当日提交 | 🔴 **高** — 解决 agent 重调度时的破坏性重建问题 |
| **Telegram 回复即 @提及** | PR [#2975](https://github.com/sipeed/picoclaw/pull/2975) | 单渠道行为微调，已完整实现 | 🔴 **高** — 提升群组交互自然度 |
| **Anthropic SDK v1.46.0 兼容** | PR [#2979](https://github.com/sipeed/picoclaw/pull/2979) | 外部依赖强制升级，阻塞性 | 🟡 **必做** — SDK  breaking change 倒逼 |
| **OmniRoute 提供商** | Issue [#2978](https://github.com/sipeed/picoclaw/issues/2978) | 新提供商请求，附参考实现 | 🟢 **中** — 需评估维护成本，用户愿自行配置 |
| **message 工具富媒体** | PR [#2856](https://github.com/sipeed/picoclaw/pull/2856) [CLOSED] | 首次迭代关闭，设计可能需重构 | 🟢 **中** — 需求真实（#2855），但实现路径存疑 |
| **LM Studio 简易连接** | Issue [#28](https://github.com/sipeed/picoclaw/issues/28) | stale 关闭，无 PR | ⚫ **低** — 本地模型易用性非当前重点 |

---

## 7. 用户反馈摘要

### 😫 核心痛点
> *"exec命令的actions:run问题，多数模型首次会默认不带，导致报错模型额外多余运行命令"* — [#2952](https://github.com/sipeed/picoclaw/issues/2952)

**解读**: 工具调用契约的"首次默认行为"不一致，导致 agent 循环冗余执行，直接影响可靠性信任。

> *"QQ渠道进行重启时，重启成功后再次向QQ渠道发送任意信息，QQ渠道会再次重启，只有清除历史上下文才不会继续重启"* — [#2952](https://github.com/sipeed/picoclaw/issues/2952)

**解读**: 渠道状态机与上下文持久化存在耦合 Bug，重启后历史消息触发重复处理逻辑。

> *"picoclaw好像不太遵循agent.md"* — [#2952](https://github.com/sipeed/picoclaw/issues/2952)

**解读**: 系统提示词/行为指南的实际执行偏差，反映 prompt 工程与运行时行为的 gap。

### 😊 积极反馈
- Web 图片拖拽上传（#2969）补齐了用户长期期待的多模态交互能力
- Codex 修复响应速度获得技术用户认可（从报告到合并约 24-48 小时）

### 📊 满意度指标
- **版本节奏焦虑**: Issue #2952 标题直接质问"好久没发新版本了"，👍 虽为 0，但反映核心用户关注
- **配置复杂度**: OmniRoute 请求者主动询问"how to add a combo"，显示文档/配置抽象仍有优化空间

---

## 8. 待处理积压

### ⏳ Stale PR 预警（需维护者评审决策）

| PR | 创建日期 | 停滞天数 | 风险 |
|:---|:---|:---|:---|
| [#2936](https://github.com/sipeed/picoclaw/pull/2936) | 2026-05-24 | **7 天** | 技能系统 PATH 依赖过滤——影响边缘设备部署体验 |
| [#2906](https://github.com/sipeed/picoclaw/pull/2906) | 2026-05-20 | **11 天** | 消息总线背压与健康可见性——**生产稳定性关键** |
| [#2904](https://github.com/sipeed/picoclaw/pull/2904) | 2026-05-20 | **11 天** | Agent 循环重载与 panic 清理——**运行时可靠性关键** |
| [#2902](https://github.com/sipeed/picoclaw/pull/2902) | 2026-05-20 | **11 天** | Android Termux 指南——生态扩展 |

**维护建议**: 
- **#2906 + #2904** 形成"运行时稳定性"组合，均涉及 `pkg/` 核心包，建议优先批量评审
- 若评审带宽不足，可考虑拆分 #2906 的背压统计与网关健康两个独立变更

### ⏳ 长期未决 Issue

| Issue | 创建日期 | 状态 | 建议动作 |
|:---|:---|:---|:---|
| [#28](https://github.com/sipeed/picoclaw/issues/28) | 2026-02-11 | stale 关闭 | 若本地模型易用性纳入路线图，应 reopen 并分配 `good first issue` |

---

## 附录：24小时数据摘要

| 指标 | 数值 |
|:---|:---|
| Issues 更新 | 7（新开/活跃 4，关闭 3）|
| PRs 更新 | 11（待合并 7，已合并/关闭 4）|
| 新版本 | 1（nightly）|
| 社区评论总数 | ~34 |
| 最高 👍 Issue | #2674（4 👍）|

---

*本报告基于 GitHub 公开数据生成，不代表 sipeed 官方立场。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-06-01

## 1. 今日速览

NanoClaw 今日呈现**高活跃度、高工程压力**态势。过去24小时内，社区贡献了 **5 条新 Issue（0 关闭）** 和 **9 条 PR（2 关闭、7 待合并）**，无新版本发布。核心信号表明项目正处于**基础设施韧性攻坚期**：mshirel 连续提交 3 条生产级稳定性问题（单线程阻塞、网关故障自愈、fd 耗尽崩溃），GiladShoham 单日爆发 4 条 PR 聚焦技能系统与容器生命周期修复。社区对多用户部署、MCP 协议扩展、供应链安全等长期需求持续发酵，但维护者响应带宽明显承压——7 条 PR 堆积待审，5 条 Issue 全部零评论闭环。

---

## 2. 版本发布

**无新版本发布。** 最新 Release 暂无更新。

---

## 3. 项目进展

### 已合并/关闭 PR

| PR | 作者 | 状态 | 进展说明 |
|:---|:---|:---|:---|
| [#2648](https://github.com/nanocoai/nanoclaw/pull/2648) 添加 `/upload-trace` 命令上传会话 trace 至 Hugging Face | gavrielc | **已关闭** | 遵循贡献指南的功能技能，因未明确合并原因关闭，可能为作者主动撤回或维护者策略性搁置 |
| [#2658](https://github.com/nanocoai/nanoclaw/pull/2658) 实际部署文档/配置 | cyber-chris | **已关闭** | 部署相关贡献，关闭原因未注明，推测与项目部署策略未对齐 |

**整体评估**：今日无实质性功能合入主分支，项目代码层面**未向前推进**。2 条关闭 PR 均属流程性收尾，核心工程产出全部堆积在待审队列。

---

## 4. 社区热点

### 讨论热度排序（按信息量与潜在影响）

| 排名 | 条目 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥1 | [#2641](https://github.com/nanocoai/nanoclaw/issues/2641) MCP 供应链安全风险 — `gongrzhe/server-gmail-autoauth-mcp` | 1 评论，引用外部安全事件 | **信任危机信号**：NoamGit 援引 Medium 文章警示某 Gmail MCP 服务器诱导用户输入密码并执行陌生人代码。这是 NanoClaw 生态首次公开的**供应链安全事件**，诉求是建立 MCP 服务器审计机制、沙箱强化、或官方可信仓库 |
| 🔥2 | [#2665](https://github.com/nanocoai/nanoclaw/issues/2665) 单线程主机被同步操作冻结，`/health` 无法检测 | 0 评论，架构级缺陷 | **可观测性革命诉求**：mshirel 指出 Node 单事件循环架构的根本缺陷——`execSync` 镜像构建、`await` 阻塞可冻结全部服务，而健康检查过于浅层。社区需要**深度健康探针**与**异步化重构** |
| 🔥3 | [#2653](https://github.com/nanocoai/nanoclaw/issues/2653) 单实例多用户支持（家庭共享场景） | 0 评论，用户场景明确 | **民主化部署诉求**：elancode 代表非技术用户群体，希望 NanoClaw 从"个人黑客工具"演进为"家庭/小团队基础设施"，需隔离的 Telegram Bot、记忆空间、agent group |

**背后深层诉求**：今日热点呈现**"安全焦虑"**（#2641）、**"可靠性焦虑"**（#2665）、**"普惠化焦虑"**（#2653）三重叠加，项目正从早期采用者向更广泛用户群跨越，基础设施成熟度成为瓶颈。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重等级 | Issue | 描述 | 影响范围 | Fix PR 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **P0 - 生产崩溃** | [#2655](https://github.com/nanocoai/nanoclaw/issues/2655) | OneCLI 网关 fd 软限制 1024，突发负载下硬退出 → **全量 Agent 静默断网** | 所有经 `HTTPS_PROXY` 路由的生产部署 | ❌ **无 Fix PR** |
| 🔴 **P0 - 系统冻结** | [#2665](https://github.com/nanocoai/nanoclaw/issues/2665) | 单线程事件循环被 `execSync`/`await` 阻塞 → **主机完全冻结**，健康检查失效 | 所有单节点部署 | ❌ **无 Fix PR** |
| 🟡 **P1 - 故障无法自愈** | [#2657](https://github.com/nanocoai/nanoclaw/issues/2657) | OneCLI 网关 worker 死亡但容器存活，Docker `restart:` 不触发，**Agent 孤儿运行** | 依赖 OneCLI 代理的部署 | ❌ **无 Fix PR** |
| 🟡 **P1 - 容器泄漏** | — | 关联 PR [#2659](https://github.com/nanocoai/nanoclaw/pull/2659) | 非特权 LXC/VM 环境 `docker stop` 权限拒绝 + 内存状态丢失 → **每次重启泄漏一个孤儿容器** | ✅ **有 Fix PR #2659**（待审） |

**稳定性健康度评估**：**危急**。3 条 P0/P1 级 Issue 全部无修复方案进入代码审查，唯一相关 Fix PR (#2659) 仅覆盖容器泄漏的旁支场景。OneCLI 网关作为**所有 Agent API 流量的单一故障点**，其 fd 限制与自愈能力缺失构成系统性风险。

---

## 6. 功能请求与路线图信号

| 功能方向 | 来源 | 纳入下一版本概率 | 判断依据 |
|:---|:---|:---|:---|
| **HTTP/SSE MCP 服务器支持** | PR [#2662](https://github.com/nanocoai/nanoclaw/pull/2662) GiladShoham | **高（80%）** | 架构扩展清晰，补全协议覆盖，与现有 stdio 配置向后兼容，社区远程 MCP 需求明确 |
| **Per-group 技能自动注册为 Claude Code Slash 命令** | PR [#2661](https://github.com/nanocoai/nanoclaw/pull/2661) GiladShoham | **高（75%）** | 修复"技能存在但不可见"的明显 UX 断裂，与 #2660 形成技能系统改进组合 |
| **外部 Symlink 技能挂载** | PR [#2660](https://github.com/nanocoai/nanoclaw/pull/2660) GiladShoham | **高（75%）** | 共享技能库的基础设施需求，改动边界清晰 |
| **多用户单实例隔离** | Issue [#2653](https://github.com/nanocoai/nanoclaw/issues/2653) elancode | **中（50%）** | 数据模型已支持，阻塞点明确（`sr...` 截断，推测为 `storage` 或 `secrets` 层），需架构决策 |
| **浏览器 Scraping Sidecar v2 容器化** | PR [#2664](https://github.com/nanocoai/nanoclaw/pull/2664) whahnize | **中（50%）** | 功能丰富但体积大（NotebookLM、Mer audio、Paris rental 等硬编码技能），可能引发镜像膨胀争议 |
| **平台 ID 前缀信任策略放宽** | PR [#2654](https://github.com/nanocoai/nanoclaw/pull/2654) elancode | **中（60%）** | 适配器注册灵活性改进，但涉及身份解析核心逻辑，需安全审查 |

---

## 7. 用户反馈摘要

### 真实痛点

| 用户 | 场景 | 痛点 | 情绪信号 |
|:---|:---|:---|:---|
| **elancode** | 家庭 Mac Mini 共享，夫妻各需独立 Bot | "The blocker is `sr..."（存储/密钥层未隔离） | 😤 **挫败** — 数据模型已就绪，临门一脚被基础设施卡住 |
| **mshirel**（运维视角） | 生产环境 5-31 事故复盘 | "NanoClaw has good failure *detection* but little failure *reaction*" | 😰 **焦虑** — 检测能力被浪费，自动化运维缺失 |
| **NoamGit** | 安全事件受害者/预警者 | 引用外部文章，贴出可疑 MCP 截图 | ⚠️ **警惕** — 生态信任基石动摇 |

### 满意点
- 数据模型设计获认可：elancode 明确肯定 `user/role/agent_group` 模型"already supports this cleanly"

### 不满意点
- **运维闭环缺失**：Docker `unhealthy` 状态仅标记不行动
- **健康检查虚假安全**：`/health` 返回 200 但服务已冻结
- **贡献流程摩擦**：`entrypoint.sh` 建议实际不生效（#2656），文档与代码脱节

---

## 8. 待处理积压

### 紧急需维护者响应

| 条目 | 等待时间 | 风险说明 |
|:---|:---|:---|
| **PR #2659** — 容器孤儿修复 | 1 天 | 生产泄漏问题，有现成方案，延迟合并导致更多环境累积技术债 |
| **PR #2662-2660** — GiladShoham 技能系统三连 | 1 天 | 作者集中产出，建议批量审查以保持架构一致性 |
| **Issue #2655** — fd 耗尽崩溃 | 1 天 | **无维护者评论**，P0 级故障，需立即分配 owner 评估 ulimit 调整 vs 连接池重构方案 |
| **Issue #2665** — 单线程冻结 | 1 天 | **无维护者评论**，需架构决策：渐进式异步化 vs 工作线程拆分 vs 健康探针深度改造 |

### 长期积压风险
- **Issue #2641 供应链安全**：目前仅 1 条评论，无官方回应。MCP 生态扩张速度与审计机制建设速度不匹配，存在**品牌声誉黑天鹅风险**

---

**日报结论**：NanoClaw 今日呈现**"高贡献、低吞吐、重技术债"**特征。社区工程活力充沛（单日 4 人贡献 9 PR），但维护者审查带宽成为瓶颈，7 条 PR 堆积且 3 条 P0/P1 稳定性 Issue 零响应。建议优先调度资源至 OneCLI 网关韧性改造与 MCP 安全审计框架，否则生产可靠性危机可能抵消功能迭代 momentum。

---

*数据来源：GitHub nanocoai/nanoclaw | 统计周期：2026-05-31 至 2026-06-01*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报

**日期**: 2026-06-01  
**项目**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
**标签**: AI 智能体框架 | 多平台消息编排 | 开源

---

## 1. 今日速览

今日 NullClaw 项目活跃度处于**低位运行状态**。过去24小时内仅产生 **2 条新 Issues**，无 PR 活动及版本发布，社区交互量（评论、反应数）均为零。两位新 Issue 均由同一用户 `weissfl` 提交，且均聚焦于 **Telegram 平台的消息交互缺陷**——分别涉及内联按钮的打字指示器缺失与定时任务子进程派生失败。项目当前无待合并代码，维护团队尚未对今日问题进行响应，整体进展处于**停滞观察期**。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

**今日无合并或关闭的 PR。**

代码层面零推进，项目整体未产生功能性进展或修复。结合连续24小时无 PR 活动的现状，建议关注维护者可用性及发布节奏规划。

---

## 4. 社区热点

| 排名 | 议题 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| #1 | [#942 Telegram: missing typing indicator when pressing inline buttons](https://github.com/nullclaw/nullclaw/issues/942) | 新提交，0👍 0评论 | **交互一致性诉求**：用户期望 `callback_query` 场景下的 UX 与常规文本消息对齐，打字指示器的缺失会造成"系统无响应"的认知断层，对依赖 `nc_choices` 等内联组件的交互式 Agent 体验影响显著 |
| #2 | [#941 Agent-type cron jobs don't spawn a subprocess — Telegram delivery never happens](https://github.com/nullclaw/nullclaw/issues/941) | 新提交，0👍 0评论 | **核心功能可靠性诉求**：`job_type: "agent"` 的定时任务存在执行链路断裂——任务状态标记为完成但实际子进程未启动、消息未投递，属于"静默失败"模式，直接影响生产环境可用性 |

**热点洞察**：两则 Issue 均指向 **Telegram 适配层的健壮性缺口**，且均由同一用户连续提交，暗示该用户可能正处于生产环境部署阶段，遇阻后集中反馈。社区尚未形成讨论扩散。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 严重程度 | 状态 | Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|:---|
| P0 | [#941 Agent-type cron jobs don't spawn a subprocess — Telegram delivery never happens](https://github.com/nullclaw/nullclaw/issues/941) | **🔴 严重 — 功能完全失效** | 待响应 | ❌ 无 | 所有使用 `job_type: "agent"` + `delivery_channel: "telegram"` 的定时任务场景；任务状态与实际执行分离，存在监控盲区 |
| P1 | [#942 Telegram: missing typing indicator when pressing inline buttons](https://github.com/nullclaw/nullclaw/issues/942) | **🟡 中等 — UX 降级** | 待响应 | ❌ 无 | 所有使用内联按钮（`callback_query`/`nc_choices`）的 Telegram 交互流程 |

**稳定性评估**：今日暴露的 #941 属于**架构级缺陷**——任务调度与执行子系统的状态同步机制存在漏洞，可能导致更广泛的"假成功"问题，建议优先排查 `schedule` 模块的进程派生逻辑及错误捕获机制。

---

## 6. 功能请求与路线图信号

**今日无新功能请求。**

现有 Issue 均为缺陷报告而非功能扩展诉求。结合零 PR 的现状，下一版本的方向信号尚不明确。建议维护者：

- 将 #941 的修复纳入**紧急补丁版本**（如 `v0.x.1`）
- 同步审视 `schedule` 模块在其他 `delivery_channel`（如 Discord、Slack）下是否存在同类子进程派生问题

---

## 7. 用户反馈摘要

> **来源**: [#941](https://github.com/nullclaw/nullclaw/issues/941) 描述、[#942](https://github.com/nullclaw/nullclaw/issues/942) 描述

| 维度 | 内容 |
|:---|:---|
| **用户画像** | `weissfl` — 活跃部署者，正使用 `schedule` + Telegram 构建定时触发型 Agent |
| **使用场景** | 通过 `job_type: "agent"` 实现定时任务自动执行，并依赖 `delivery_mode: "always"` 确保消息必达 |
| **核心痛点** | ① 任务"完成"却无实际输出，调试成本极高；② 内联按钮交互缺乏即时反馈，用户流失风险 |
| **满意点** | 常规文本消息的打字指示器工作正常（说明基础能力已具备） |
| **不满意点** | Telegram 平台适配存在**场景覆盖不全**（`callback_query` vs 文本消息）、**执行链路不透明**（状态与实际脱节） |

**深层信号**：用户正在将 NullClaw 推向**生产级定时任务场景**，框架的可靠性承诺（`delivery_mode: "always"`）与实际行为出现落差，信任修复窗口有限。

---

## 8. 待处理积压

| Issue | 创建时间 | 滞留天数 | 风险说明 |
|:---|:---|:---|:---|
| #941 | 2026-05-31 | 1 天 | **高** — 核心功能静默失败，生产阻断级 |
| #942 | 2026-05-31 | 1 天 | 中 — UX 一致性，影响产品专业感 |

> ⚠️ **维护者提醒**：两则 Issue 均于昨日提交，虽尚在正常响应周期内，但 #941 的严重程度要求**48小时内首次响应**。建议：
> 1. 确认 `schedule` 模块在 `job_type: "agent"` 时的子进程派生逻辑
> 2. 检查 `callback_query` 处理路径是否复用了文本消息的 `send_chat_action`（打字指示器）调用

---

**日报生成时间**: 2026-06-01  
**数据截止**: 2026-05-31 24:00 UTC  
**下次关注**: #941 维护者响应进度、是否有关联 PR 提交

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-06-01

> **项目**: nearai/ironclaw | **日期**: 2026-06-01 | **分析周期**: 过去24小时

---

## 1. 今日速览

IronClaw 今日维持**高活跃度开发节奏**，21 个 PR 更新（15 待合并/6 已关闭）显示核心团队持续推进"Reborn"架构重构。`serrrfirat` 与 `henrypark133` 主导产品认证体系与触发器基础设施，`dependabot` 批量依赖更新反映 Rust 生态同步压力。值得关注的是 **Nightly E2E 持续失败**（[#4108](https://github.com/nearai/ironclaw/issues/4108)）已 4 天未修复，可能阻塞发布管道。无新版本发布，项目处于密集集成期而非稳定交付期。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#4262](https://github.com/nearai/ironclaw/pull/4262) | henrypark133 | **P0 出站通信解析引擎** — 候选选择逻辑 | Reborn 架构核心能力：实现通信投递决策的"选择即隔离"，为后续目标验证、投递记录、产品渲染铺路 |
| [#4257](https://github.com/nearai/ironclaw/pull/4257) | serrrfirat | **AuthPromptView 挑战丰富化 + WebUI OAuth 卡片** | 完成 GSuite/Notion MCP/GitHub PAT 三大认证流的 Rust 线型变更与 WebUI v2 组件，产品认证体验闭环 |
| [#4261](https://github.com/nearai/ironclaw/pull/4261) | henrypark133 | `ironclaw_triggers` crate 骨架 | 触发器领域类型、CRON 校验、租户级点火身份等基础设施就绪，支撑定时任务体系 |
| [#4033](https://github.com/nearai/ironclaw/pull/4033) | dependabot[bot] | 依赖批量更新（45 项，已关闭） | 被 [#4268](https://github.com/nearai/ironclaw/pull/4268)  superseded，体现依赖管理的滚动迭代 |
| [#4000](https://github.com/nearai/ironclaw/pull/4000) | dependabot[bot] | `serde_json` 1.0.149→1.0.150（已关闭） | 被 [#4267](https://github.com/nearai/ironclaw/pull/4267) 合并覆盖 |

**整体评估**: 今日进展集中在 **Reborn 认证体系产品化** 与 **触发器/出站通信基础设施** 两大战略主线，属于架构债务清偿与能力补全阶段。`serrrfirat` 的认证相关 PR 形成清晰堆叠链（#4234 → #4239 → #4257 → #4256），显示工程化成熟度。

---

## 4. 社区热点

### 讨论最活跃的 Issue

| 排名 | Issue | 评论数 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥 1 | [#2923](https://github.com/nearai/ironclaw/issues/2923) stdio MCP 激活失败 | **4 评论** | **维护者决策权威性问题**：原 Issue #2474 被非维护者评论错误关闭，作者 `rajulbhatnagar` 明确重开并界定 bug 边界（v0.25.0 已端到端支持 stdio，仅激活预检失败）。反映社区对 MCP 传输层支持的认知混乱，需维护者明确文档与 issue 治理规则 |
| 2 | [#3289](https://github.com/nearai/ironclaw/issues/3289) 迁移 secrets/OAuth/auth 产品流 | 1 评论 | 已关闭，作为 #3031 子任务完成，属内部路线图执行 |
| 3 | [#228](https://github.com/nearai/ironclaw/issues/228) 子任务创建默认拒绝策略 | 1 评论 | **安全架构诉求**：`ilblackdragon` 指出 `CreateJobTool` 无限制创建子任务的风险（LLM 幻觉/提示注入 → 任务失控），要求策略层介入。与当前 Reborn 的 capability 安全模型直接相关 |

**深层信号**: MCP 生态集成（#2923）与 安全策略硬化（#228）是社区最关心的两大外部能力，但维护者响应存在延迟——#228 创建于 2026-02-19，已 **102 天未关闭**。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0 - 阻塞发布** | [#4108](https://github.com/nearai/ironclaw/issues/4108) | **OPEN** | Nightly E2E 持续失败（`Full E2E / E2E (extensions)` job），始于 2026-05-27，已 4 天 | **无** |
| 🟡 **P1 - 功能损坏** | [#2923](https://github.com/nearai/ironclaw/issues/2923) | OPEN | stdio MCP 激活预检失败：`Failed to discover authorization endpoints` | **无** |
| 🟡 **P1 - 安全风险** | [#228](https://github.com/nearai/ironclaw/issues/228) | OPEN | 子任务创建无默认拒绝策略，存在 runaway job creation 风险 | **无** |

**稳定性评估**: E2E 管道红灯是最大健康度隐患。`github-actions[bot]` 自动报告无人工跟进，需核心团队分配资源。MCP stdio 问题虽边界清晰（非传输层），但涉及认证端点发现逻辑，可能与 `serrrfirat` 正在推进的产品认证重构存在交集。

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#4263](https://github.com/nearai/ironclaw/pull/4263) `ironclaw_triggers` libSQL 仓库后端 | 触发器持久化 | **高** | 已提交 PR，"backend 1 only" 策略显式预留 poller/lifecycle 后续迭代 |
| [#4264](https://github.com/nearai/ironclaw/pull/4264) Gateway routine 创建端点 | 外部系统定时任务集成 | **高** | 复用现有 `routine_create` 工具路径，设计保守，201 Created 语义清晰 |
| [#4229](https://github.com/nearai/ironclaw/pull/4229) WebUI v2 GitHub SSO | 身份提供商扩展 | **高** | Google SSO (#4182) 的姊妹实现，架构已验证，provider-agnostic 路由器就绪 |
| [#4265](https://github.com/nearai/ironclaw/pull/4265) CodeAct 实时 E2E 测试 | 多场景智能体验证 | **中** | 社区贡献（`denbite`），7 个场景覆盖数学/提醒/格式转换/文档摘要，需维护者评审质量 |
| [#228](https://github.com/nearai/ironclaw/issues/228) 默认拒绝委托策略 | 安全策略层 | **中** | 安全关键但设计复杂（需平衡 `max_parallel` 与显式 allow-list），可能纳入 Reborn 权限模型 |

**路线图推断**: 下一版本（推测 v0.26.0）核心主题将是 **"Reborn 认证体系 GA + 触发器基础设施预览"**，出站通信引擎（#4262）与触发器仓库（#4263）构成事件驱动架构的底座。

---

## 7. 用户反馈摘要

### 从 Issues 评论提炼的真实痛点

| 用户 | 场景 | 痛点 | 情绪 |
|:---|:---|:---|:---|
| `rajulbhatnagar` (#2923) | 尝试激活 stdio MCP 服务器 | **维护者治理混乱**：非维护者评论导致有效 bug 被错误关闭，需反复重开并自证边界 | 😤 挫败 |
| `ilblackdragon` (#228) | 构建安全敏感型智能体应用 | **安全模型不完备**：`CreateJobTool` 的"默认允许"与最小权限原则冲突，无策略层保护 | 😰 担忧 |
| `denbite` (#4265, #4090) | 调试生产环境/开发 E2E 测试 | **可观测性不足**：日志截断限制（500 bytes）阻碍调试，需环境变量覆盖 | 😐 务实解决 |

**满意度信号**: `denbite` 持续贡献（日志配置 + CodeAct E2E），显示开发者体验改进获得社区响应。

**不满意信号**: Issue 治理流程（#2923）与安全架构响应速度（#228）是信任损耗点。

---

## 8. 待处理积压

### 需维护者优先关注的长期项

| 项 | 创建时间 | 当前状态 | 风险 | 建议行动 |
|:---|:---|:---|:---|:---|
| [#228](https://github.com/nearai/ironclaw/issues/228) 子任务默认拒绝策略 | 2026-02-19 | **OPEN 102 天**，1 评论 | 安全审计红线；Reborn 发布 blocker 潜在风险 | 纳入 Reborn 权限模型设计评审，或标记 `good first issue` 引导社区方案 |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) Nightly E2E 失败 | 2026-05-27 | **OPEN 4 天**，0 评论，bot 报告 | 发布管道阻塞；回归检测失效 | 立即分配 on-call 工程师，分析 `extensions` job 失败日志 |
| [#4002](https://github.com/nearai/ironclaw/pull/4002) GitHub Actions 16 项更新 | 2026-05-24 | **OPEN 7 天**，待合并 | CI/CD 基础设施老化；安全补丁延迟 | 与 E2E 修复协同评审，可能涉及 action 版本兼容性 |

---

## 附录：数据摘要

| 指标 | 数值 | 趋势判断 |
|:---|:---|:---|
| Issues 更新 | 4（3 开/活跃，1 关闭） | 正常 |
| PR 更新 | 21（15 待合并，6 已合并/关闭） | 🔥 高活跃 |
| 新版本 | 0 | 集成期，非发布期 |
| 核心贡献者 | `serrrfirat`(4 PR), `henrypark133`(3 PR) | 认证 + 触发器双主线 |
| 机器人贡献 | dependabot(5 PR), github-actions[bot](1 Issue) | 依赖管理自动化成熟 |

---

*本报告基于 GitHub 公开数据生成，不构成项目官方立场。链接均为 `https://github.com/nearai/ironclaw` 下的相对路径。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-06-01

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **日期**: 2026-06-01  
> **分析周期**: 过去 24 小时（2026-05-31 至 2026-06-01）

---

## 1. 今日速览

LobsterAI 今日活跃度处于**极低水平**。过去 24 小时内无 Issues 活动，仅 1 条 PR 处于待合并状态且已被标记为 `stale`（陈旧）。项目已连续多日无新版本发布，社区讨论近乎停滞。唯一值得关注的 #1465 号 PR 修复了一个影响用户体验的数据一致性问题，但自 4 月初创建以来已闲置近两个月，合并进度受阻。整体健康度评估：**维护响应滞后，存在 PR 积压风险**。

---

## 2. 版本发布

**无新版本发布。**

- 最新 Release 状态：无更新
- 距离上次版本发布周期：数据未提供（建议维护者检查发布节奏）

---

## 3. 项目进展

**今日无已合并或已关闭的 PR。**

| PR | 状态 | 进展评估 |
|:---|:---|:---|
| [#1465](https://github.com/netease-youdao/LobsterAI/pull/1465) | `OPEN` + `stale` | **零进展** — 修复定时任务幽灵会话问题，但 58 天未合并 |

**技术价值分析**：#1465 解决了核心数据一致性问题——删除定时任务时仅清理网关侧 `cron` 记录，未同步删除本地 SQLite `cowork_sessions` 表中的关联会话，导致重启后产生"幽灵会话"。该修复涉及：
- 在任务删除流程中追加本地会话清理逻辑
- 阻断 `resolveOrCreateCronSession()` 对已标记删除任务的重复创建

**项目推进评估**：⭐☆☆☆☆（零推进，修复方案已就绪但未被采纳）

---

## 4. 社区热点

**今日无活跃讨论。**

| 排名 | 议题 | 互动量 | 诉求分析 |
|:---|:---|:---|:---|
| #1 | [#1465](https://github.com/netease-youdao/LobsterAI/pull/1465) | 👍 0, 评论 undefined | **隐性诉求**：用户期望定时任务管理具备数据一致性保障；贡献者 `linlihua` 提供完整修复方案后长期未获维护者 review，反映社区参与门槛高 |

> **深层信号**：`stale` 标签的自动添加表明项目缺乏主动的 PR 维护机制，可能挫伤外部贡献者积极性。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 来源 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔶 **中-高** | 定时任务删除后重启复现幽灵会话 | Issue #1359 → PR #1465 | [#1465](https://github.com/netease-youdao/LobsterAI/pull/1465) | **Fix 就绪，待合并**（58 天）|

**影响面评估**：
- **用户场景**：频繁使用定时任务（如定时摘要、定时数据同步）的重度用户
- **体验损害**：反复删除无效，产生"操作未生效"的心理挫败感
- **数据风险**：长期累积可能导致 `cowork_sessions` 表膨胀，查询性能下降

---

## 6. 功能请求与路线图信号

**今日无新增功能请求。**

**基于现有 PR 的路线图推断**：

| 方向 | 信号强度 | 依据 |
|:---|:---|:---|
| 定时任务系统健壮性 | ⭐⭐⭐⭐☆ | #1465 修复数据清理闭环，暗示该模块近期可能有迭代计划 |
| 本地-网关状态同步机制 | ⭐⭐⭐⭐☆ | 根因分析揭示架构层面缺乏统一的删除事务管理，可能需要更系统性重构 |

> **建议**：若维护者计划发布下一版本，#1465 应作为稳定性修复优先纳入。

---

## 7. 用户反馈摘要

**今日无新增用户评论可提炼。**

**基于历史 Issue #1359 的痛点还原**（关联 #1465）：

| 维度 | 反馈内容 |
|:---|:---|
| **痛点** | "删了还在"——操作反馈与系统状态不一致，破坏用户信任 |
| **使用场景** | 定时任务作为自动化工作流入口，用户需要精确控制任务生命周期 |
| **不满意点** | 删除操作未给出警告或二次确认，且静默失败（实际未完全清理）|
| **期望** | 删除即彻底删除，或至少提供"软删除+回收站"的显式机制 |

---

## 8. 待处理积压

### 🚨 高优先级关注

| PR/Issue | 创建时间 | 闲置天数 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| [#1465](https://github.com/netease-youdao/LobsterAI/pull/1465) | 2026-04-04 | **58 天** | `stale` 标签已触发，可能被自动关闭；贡献者流失风险 | **立即 review/合并**，或回复维护计划 |

### 维护健康度指标

| 指标 | 数值 | 健康阈值 | 状态 |
|:---|:---|:---|:---|
| PR 平均响应时间 | >58 天（样本：1）| <7 天 | 🔴 **严重超标** |
| Issue 日活跃量 | 0 | — | ⚪ 无活动 |
| Stale PR 占比 | 100%（1/1）| <10% | 🔴 **全部积压** |

---

## 附录：原始数据速查

```
Issues:  0 更新 (新开/活跃: 0, 关闭: 0)
PRs:     1 更新 (待合并: 1, 已合并/关闭: 0)
Releases: 0
```

---

*本日报基于 GitHub 公开数据自动生成。如需订阅或反馈，请通过项目 Discussion 联系。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-06-01

> **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis)  
> **日期**: 2026-06-01（覆盖 2026-05-31 活动）  
> **分析师**: AI 智能体与个人 AI 助手领域开源项目分析

---

## 1. 今日速览

Moltis 项目在 2026-05-31 呈现**极低活跃度**，社区处于相对静默状态。过去 24 小时内仅产生 **1 条 PR 更新**，无 Issues 活动、无版本发布、无评论互动。PR #1088 针对 OpenAI Codex 的流式工具调用参数处理进行边缘 case 修复，属于基础设施层的精细化打磨，表明项目仍在持续维护但缺乏大规模功能迭代。整体健康度评估：**维护模式**，核心团队保持技术债务清理，社区参与度有待提振。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

| PR | 状态 | 进展说明 | 链接 |
|:---|:---|:---|:---|
| #1088 [codex] Handle OpenAI Codex final tool-call arguments | ⏳ **待合并** | 修复 OpenAI Codex provider 中工具调用参数流的边缘 case：记录 `response.function_call_arguments.done` 载荷、在无增量参数时合成流式增量、保持空参数字符串流经诊断管道以避免误报缺失参数错误 | [PR #1088](https://github.com/moltis-org/moltis/pull/1088) |

**整体推进评估**：该 PR 属于**防御性工程改进**，针对 Codex 集成中的流式协议兼容性进行加固。未引入新功能，但提升了与 OpenAI 最新 API 行为的适配鲁棒性。项目今日**未产生可交付的用户可见进展**。

---

## 4. 社区热点

| 项目 | 热度指标 | 分析 | 链接 |
|:---|:---|:---|:---|
| PR #1088 | 👍 0 / 评论 undefined / 作者 s-salamatov | **唯一活跃项**，但零社区互动。技术方向聚焦 Codex 集成的协议层细节，反映维护者对 AI 智能体核心基础设施（LLM provider 适配）的持续投入，但缺乏更广泛的社区审阅兴趣 | [PR #1088](https://github.com/moltis-org/moltis/pull/1088) |

**诉求解读**：该 PR 的孤立状态暗示两点——(1) Codex 集成仍是相对小众/早期的使用路径；(2) 社区贡献者可能更关注应用层功能而非底层协议适配。维护者需评估是否需主动寻求审阅以加速合并。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR |
|:---|:---|:---|:---|
| — | **今日无新报 Bug** | — | — |

**存量风险评估**：PR #1088 本身即针对潜在稳定性问题——Codex 流式响应中参数增量缺失导致的诊断管道异常。该修复**预防性**地避免了下游可能触发的"missing-argument"误报错，属于**低严重度但高频率边缘 case**。

---

## 6. 功能请求与路线图信号

| 来源 | 信号 | 纳入可能性评估 |
|:---|:---|:---|
| PR #1088 技术方向 | OpenAI Codex 深度集成持续投入 | **高** — 维护者明显将 Codex 作为一等公民支持，预计后续版本将完善相关文档与示例 |
| 全局静默 | 无新功能请求 | **N/A** — 社区需求输入匮乏，路线图透明度不足 |

**下一版本预测信号**：基于现有 PR，下一版本可能聚焦：
- Codex 集成的生产级稳定性（非功能扩张）
- 流式工具调用协议的跨 provider 标准化

---

## 7. 用户反馈摘要

**今日无可用用户反馈数据**（0 Issues / 0 评论）。

**历史推断痛点**（基于 PR #1088 技术上下文）：
- **痛点**：使用 Codex 时工具调用参数流可能出现"静默失败"或误报错误
- **场景**：构建依赖 Codex 的 AI 智能体工作流，需可靠的工具调用中间状态观测
- **满意度缺口**：流式处理的调试可观测性（decode diagnostics）仍需加强

---

## 8. 待处理积压

| 类型 | 项目 | 悬停时间 | 风险说明 | 链接 |
|:---|:---|:---|:---|:---|
| PR 待审阅 | #1088 | 1 天（新提交） | 虽为新增，但**零审阅者响应**；技术债务类 PR 易因优先级低长期悬停，建议 3 日内分配审阅人 | [PR #1088](https://github.com/moltis-org/moltis/pull/1088) |

**维护者行动建议**：
1. 为 PR #1088 指定具备 Codex 协议经验的审阅人
2. 考虑补充集成测试覆盖该边缘 case
3. 评估社区静默是否因近期无版本发布导致——建议发布 patch 版本以激活社区关注

---

> **数据来源**: GitHub API | **生成时间**: 2026-06-01 | **置信度**: 高（原始数据完整，无推断冲突）

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-06-01

> **项目**: [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)（注：实际 Issue/PR 链接指向 QwenPaw 仓库）  
> **数据周期**: 2026-05-31 至 2026-06-01（24小时）  
> **报告日期**: 2026-06-01

---

## 1. 今日速览

今日 CoPaw/QwenPaw 社区活跃度**极高**，24小时内产生 **17 条 Issue 更新**（新开/活跃 14 条，关闭 3 条）及 **2 条 PR 更新**，无新版本发布。社区呈现显著的"Windows 平台问题集中爆发"特征——单日新增 5 个 Windows 相关 Bug（cmd 窗口闪烁、进程残留、目录锁、pip 升级幽灵文件、MCP 进程爆炸），同时伴随 2 个高价值功能请求（聊天模式可配置、工具按需加载降 token）。维护团队响应迅速，当日关闭 3 个 Issue，但新增积压压力显著，整体健康度**中等偏上**，需警惕 Windows 体验债务累积。

---

## 2. 版本发布

**无新版本发布。**

最新版本仍为此前发布版本。值得注意的是，[#4837](https://github.com/agentscope-ai/QwenPaw/issues/4837) 报告 v1.1.9 存在**高频系统级 fallback 回复回归问题**，可能影响当前版本稳定性评估。

---

## 3. 项目进展

### 已合并/关闭的 PR

| PR | 状态 | 进展说明 |
|:---|:---|:---|
| [#4810](https://github.com/agentscope-ai/QwenPaw/pull/4810) | **CLOSED** | 优化聊天输入框 `/` 技能提示：当前 Agent 可用技能加入 slash 建议、仅显示技能名保持弹窗紧凑、限制 5 项可见+滚动、增加调试日志。提升控制台交互效率。 |

### 待合并 PR

| PR | 状态 | 进展说明 |
|:---|:---|:---|
| [#4689](https://github.com/agentscope-ai/QwenPaw/pull/4689) | **OPEN** | 将非标准 `generate_kwargs` 参数（如 DashScope `enable_search`）路由至 `extra_body`，解决 OpenAI SDK 静默拒绝未知参数的问题。扩展多提供商兼容性，**待审阅**。 |

**整体推进评估**: 今日代码层面进展有限，[#4810](https://github.com/agentscope-ai/QwenPaw/pull/4810) 为体验优化型合并，[#4689](https://github.com/agentscope-ai/QwenPaw/pull/4689) 虽解决实际兼容性问题但仍在队列。项目核心架构痛点（Windows 稳定性、MCP 资源管理、定时任务调度）尚未有 PR 跟进。

---

## 4. 社区热点

### 高讨论度 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 |
|:---|:---|:---|:---|
| 🔥1 | [#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) [CLOSED] 定时任务与用户消息共享 session 导致中断 | **8** | **多任务调度隔离**——用户需要定时任务（如育儿提醒）不被即时消息打断，涉及会话架构 redesign |
| 🔥2 | [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) [OPEN] Windows cmd 窗口闪烁 | **8** | **Windows 桌面体验**——长期存在的 subprocess 窗口闪现问题，社区多次报告（[#4828](https://github.com/agentscope-ai/QwenPaw/issues/4828) 同日关闭为重复） |
| 3 | [#4649](https://github.com/agentscope-ai/QwenPaw/issues/4649) [CLOSED] 孤儿 cron job 未清理 | **5** | **配置热更新可靠性**——jobs.json 修改后旧任务幽灵执行，影响生产稳定性 |

### 诉求分析

- **架构层面**: [#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) 与 [#4843](https://github.com/agentscope-ai/QwenPaw/issues/4843)（聊天模式配置请求）形成呼应——社区明确需要**从"单会话串行"升级为"多模式并发调度"**的 Agent 消息处理能力
- **平台债务**: Windows 相关问题占今日新增 Issue 的 **45%**（5/11），且存在长期未根治的 [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123)（创建日期 2026-05-08，已活跃 23 天），反映 Windows 测试覆盖不足

---

## 5. Bug 与稳定性

> **严重级别定义**: 🔴 P0-系统崩溃/数据丢失 | 🟠 P1-功能阻塞/高频异常 | 🟡 P2-体验受损/偶发问题 | 🟢 P3-轻微缺陷

| 级别 | Issue | 描述 | 影响范围 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0** | [#4835](https://github.com/agentscope-ai/QwenPaw/issues/4835) | `jobs.json` 单条无效 job 导致**整个 workspace 启动失败** | 生产部署可靠性 | ❌ 无 |
| 🔴 **P0** | [#4837](https://github.com/agentscope-ai/QwenPaw/issues/4837) | v1.1.9 **高频系统 fallback 回复**"无法处理您的问题"——非真实 Agent 回复，疑似超时/降级链路 bug | 所有 v1.1.9 用户核心体验 | ❌ 无 |
| 🟠 **P1** | [#4842](https://github.com/agentscope-ai/QwenPaw/issues/4842) | **MCP server 进程爆炸**: 300+ Agent 创建数百进程，系统资源耗尽 | Windows 大规模部署 | ❌ 无 |
| 🟠 **P1** | [#4834](https://github.com/agentscope-ai/QwenPaw/issues/4834) | **MCP 进程重启累积**: 服务重启后旧进程未清理，firecrawl-mcp 达 9 进程实例 | 所有平台长期运行 | ❌ 无 |
| 🟠 **P1** | [#4844](https://github.com/agentscope-ai/QwenPaw/issues/4844) | **浏览器进程/目录锁残留**，阻塞备份、级联失败 | Windows 浏览器工具用户 | ❌ 无 |
| 🟡 **P2** | [#4839](https://github.com/agentscope-ai/QwenPaw/issues/4839) | pip 升级后 `~` 前缀幽灵 skill 目录，旧版 `SKILL.md` 污染技能池 | Windows pip 升级用户 | ❌ 无 |
| 🟡 **P2** | [#4833](https://github.com/agentscope-ai/QwenPaw/issues/4833) | `pre_reasoning` hook 内存压缩失败 | 1.1.9 记忆功能用户 | ❌ 无 |
| 🟡 **P2** | [#4832](https://github.com/agentscope-ai/QwenPaw/issues/4832) / [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) | Windows 执行 shell 命令 **cmd 窗口闪烁**（`CREATE_NO_WINDOW` 标志缺失） | Windows 桌面端用户 | ❌ 无（[#4828](https://github.com/agentscope-ai/QwenPaw/issues/4828) 关闭为重复） |

**已关闭 Bug**:
- [#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) 定时任务中断（架构修复）
- [#4649](https://github.com/agentscope-ai/QwenPaw/issues/4649) 孤儿 cron job 清理（配置热更新修复）
- [#4828](https://github.com/agentscope-ai/QwenPaw/issues/4828) cmd 闪烁（确认为 [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) 重复）

---

## 6. 功能请求与路线图信号

| Issue | 功能 | 价值评估 | 纳入下一版本可能性 |
|:---|:---|:---|:---|
| [#4843](https://github.com/agentscope-ai/QwenPaw/issues/4843) | **可配置聊天模式**: Interrupt / Queue / Insert | ⭐⭐⭐⭐⭐ 核心架构升级，直接回应 [#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) 痛点 | **高**——与已关闭 Bug 形成需求闭环，社区呼声强烈 |
| [#4836](https://github.com/agentscope-ai/QwenPaw/issues/4836) | **工具定义按需加载**: 降初始 token 55-65% | ⭐⭐⭐⭐⭐ 显著成本优化，作者已提供详细数据与实现思路 | **高**——性能优化类，实现路径清晰 |
| [#4840](https://github.com/agentscope-ai/QwenPaw/issues/4840) | **对话窗口 thinking effort 选择器 UI** | ⭐⭐⭐⭐ 体验优化，参考 OpenClaw 实现 | **中**——依赖 [#3996](https://github.com/agentscope-ai/QwenPaw/issues/3996) 配置层完成 |
| [#4838](https://github.com/agentscope-ai/QwenPaw/issues/4838) | **工具调用后静默模式**: 抑制最终文本回复 | ⭐⭐⭐⭐ 交互场景扩展（自动化/通知场景） | **中**——需设计 channel-level 配置协议 |
| [#4841](https://github.com/agentscope-ai/QwenPaw/issues/4841) | **Before You Build Skill**: 实现前审查最佳实践 | ⭐⭐⭐ 生态扩展，第三方 skill 提案 | **低-中**——需评估 skill 审核流程 |

**路线图信号**: [#4843](https://github.com/agentscope-ai/QwenPaw/issues/4843) + [#4836](https://github.com/agentscope-ai/QwenPaw/issues/4836) 组合暗示社区正推动 **"高性能、高并发、低成本"** 的 Agent 运行时升级，可能定义 v1.2.x 或 v2.0 的核心特性。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 情绪强度 |
|:---|:---|:---|
| **"20:00 育儿提醒被用户消息打断，脚本执行一半"** — 定时任务可靠性关乎用户信任 | [#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) | 😤 高 |
| **"执行一次 dir 闪一次黑窗，连续命令连续闪"** — Windows 桌面体验极差 | [#4828](https://github.com/agentscope-ai/QwenPaw/issues/4828) | 😤 高 |
| **"300 个 Agent 把机器卡死，MCP 进程像病毒一样繁殖"** — 规模化部署灾难 | [#4842](https://github.com/agentscope-ai/QwenPaw/issues/4842) | 😱 极高 |
| **"升级后技能池里有 ghost，旧版 skill 阴魂不散"** — 升级信任危机 | [#4839](https://github.com/agentscope-ai/QwenPaw/issues/4839) | 😠 中高 |
| **"v1.1.9 频繁说'无法处理'，但明明能处理"** — 版本回归挫败感 | [#4837](https://github.com/agentscope-ai/QwenPaw/issues/4837) | 😤 高 |

### 满意点

- 定时任务/session 隔离问题 [#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) 获得快速关闭（8 评论内解决），显示核心架构问题响应效率
- 社区贡献活跃：单日出现 3 位新贡献者（heidis168 提交 3 issue、bin1874 技能提案）

### 不满意/担忧

- **Windows 二等公民感**: 5 个 Windows 专属 Bug 同日爆发，部分为长期已知问题（[#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) 已 23 天未修复）
- **v1.1.9 质量疑虑**: 系统 fallback 高频触发 + 内存压缩失败，版本稳定性受质疑

---

## 8. 待处理积压

> 以下 Issue/PR 需维护者优先关注，避免社区挫败感累积

| 时长 | 条目 | 风险 | 建议行动 |
|:---|:---|:---|:---|
| **23 天** | [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) Windows cmd 闪烁 | 重复报告消耗社区精力（[#4828](https://github.com/agentscope-ai/QwenPaw/issues/4828) 已关闭为重复），[#4832](https://github.com/agentscope-ai/QwenPaw/issues/4832) 同日再报 | 单行修复（`CREATE_NO_WINDOW`），建议 24h 内发 patch |
| **23 天** | [#4689](https://github.com/agentscope-ai/QwenPaw/pull/4689) `extra_body` 路由 | DashScope 等国产模型用户阻塞，PR 已就绪 | 安排代码审阅，纳入 v1.1.10 或 v1.2.0 |
| **新但高危** | [#4837](https://github.com/agentscope-ai/QwenPaw/issues/4837) v1.1.9 fallback 回归 | 影响当前版本口碑，可能需 hotfix | 优先复现，确认是否为超时/流式处理 bug |
| **新但高危** | [#4835](https://github.com/agentscope-ai/QwenPaw/issues/4835) 单无效 job 全崩 | 生产环境配置容错为零，不符合 SaaS 标准 | 紧急修复，建议 `pydantic` 校验改为跳过无效项+告警 |

---

## 附录：数据速查

| 指标 | 数值 |
|:---|:---|
| 24h Issue 更新 | 17（新开/活跃 14，关闭 3） |
| 24h PR 更新 | 2（待合并 1，已合并/关闭 1） |
| 新版本 | 0 |
| Windows 相关 Issue | 5（占新增 45%） |
| P0/P1 严重 Bug | 4（均无 Fix PR） |
| 功能请求 | 4 |

---

*本报告基于 GitHub 公开数据生成，Issue/PR 链接指向实际仓库地址。如需进一步分析特定技术细节或维护者响应策略，可补充数据后继续深化。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-06-01

---

## 1. 今日速览

ZeptoClaw 今日活跃度处于**极低水平**，过去24小时内仅有一条安全相关的 Issue 被关闭，无新增 Issue、无 PR 活动、无版本发布。项目处于典型的**维护静默期**，核心开发活动暂停，主要工作聚焦于安全合规扫描的收尾。考虑到该 Issue 为自动化安全工具（Codex Security scan）触发的流程性任务，而非社区驱动的功能迭代，项目的实际技术推进几乎为零。整体健康度评估：**稳定但停滞**，需关注核心维护者是否正在筹备下一阶段的开发周期。

---

## 2. 版本发布

*无新版本发布*

---

## 3. 项目进展

**今日无合并/关闭的 Pull Requests**，亦无功能性或修复性 PR 推进。

唯一关闭的 Issue #609 为安全扫描流程任务，其技术实质为：

| 属性 | 内容 |
|:---|:---|
| 类型 | 安全合规 / 流程自动化 |
| 范围 | 全仓库（repository-wide） |
| 聚焦点 | Webhook 请求身份流（identity flow）的准入控制与路由安全 |
| 执行方式 | 通过 Codex Security scan 工作流自动触发 |

**进展评估**：该 Issue 的关闭标志着一次安全审查周期的完成，但未产生可见的代码变更或安全公告，属于**运营维护层面的闭环**，而非产品功能演进。项目整体技术债务未增加亦未减少，处于**零净推进**状态。

🔗 [Issue #609](https://github.com/qhkm/zeptoclaw/issues/609)

---

## 4. 社区热点

| 排名 | 议题 | 互动量 | 分析 |
|:---|:---|:---|:---|
| #1 | [Issue #609: chore(security): repository-wide Codex Security scan...](https://github.com/qhkm/zeptoclaw/issues/609) | 1 评论, 0 👍 | **非社区驱动议题**。由 `daneschneider-oai`（疑似 OpenAI 关联账户，`-oai` 后缀）发起，Codex Security scan 工作流自动执行。无真实用户参与讨论，反映社区今日**零活跃**状态。 |

**诉求分析**：该 Issue 背后无用户诉求，体现的是项目依赖的自动化安全基础设施的常规运转。值得注意的隐性信号是：**Webhook 身份路由被单点列为扫描重点**，暗示该组件可能是历史安全敏感区域或近期有变更计划。

---

## 5. Bug 与稳定性

| 严重程度 | 数量 | 详情 |
|:---|:---|:---|
| 🔴 严重（P0） | 0 | — |
| 🟠 高（P1） | 0 | — |
| 🟡 中（P2） | 0 | — |
| 🟢 低/信息（P3） | 0 | — |

**今日无新报告 Bug**。已关闭的 Issue #609 为预防性安全扫描，非响应性漏洞修复，**不纳入 Bug 统计**。

---

## 6. 功能请求与路线图信号

| 类型 | 数量 | 详情 |
|:---|:---|:---|
| 新功能请求 | 0 | — |
| 路线图相关 PR | 0 | — |

**无功能信号**。基于今日数据，无法判断下一版本规划方向。建议关注：
- Webhook 身份路由组件（Issue #609 扫描焦点）是否会有安全加固后的功能重构
- `daneschneider-oai` 账户的参与是否预示与 OpenAI/Codex 生态的集成深化

---

## 7. 用户反馈摘要

**今日无用户生成内容**（Issue #609 为工具自动创建，评论疑似扫描结果摘要或关闭说明）。

从项目历史模式推断的潜在观察：
- 若安全扫描成为周期性自动化任务，需评估其噪音水平：频繁的无发现扫描 Issue 可能稀释社区对真实安全事件的注意力
- 零 PR/Issue 的静默期若持续超过 3-5 个工作日，可能表明核心维护者资源紧张或项目处于重大重构前的准备阶段

---

## 8. 待处理积压

| 警示项 | 状态 | 建议 |
|:---|:---|:---|
| 长期无响应 Issue/PR | **数据不足，无法评估** | 今日输入仅含24小时快照，未提供历史积压列表 |
| 社区活跃度衰退 | ⚠️ 需关注 | 连续零互动日建议维护者发布状态更新或路线图沟通 |

**维护者行动建议**：
1. 若静默期为计划内安排（如集中开发 vNext），建议在 README 或 Discussion 中公告预计恢复时间
2. 审查 Codex Security scan 的 Issue 自动创建策略，避免无发现扫描产生过多流程噪音
3. 关注 `daneschneider-oai` 扫描结果的后续处置——若发现中高风险项，需优先披露

---

*日报基于 2026-05-31 至 2026-06-01 的 GitHub 活动数据生成。数据来源：[qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-06-01

## 1. 今日速览

ZeroClaw 今日保持**高度活跃**状态，24小时内 Issues 更新 46 条（34 活跃/新开，12 关闭）、PR 更新 50 条（41 待合并，9 已合并/关闭），无新版本发布。社区焦点集中在**硬件集成（ESP32 智能家居演示）**、**多通道输出路由重构**以及**v0.8.0-beta-2 集成分支**的冲刺上。值得关注的是，今日出现 5 个由同一作者（alex-nax）提交的关联安全增强 PR 集群，显示核心团队正在强化工具权限与沙箱隔离机制。项目整体健康度良好，但 XL 级集成 PR #6848 仍未合并，beta-2 发布节奏需关注。

---

## 2. 版本发布

**无新版本发布**

- 最后一个标记版本仍为待定的 v0.8.0-beta-2，由 PR [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) 承载，目前标记为 **"DO NOT MERGE"** 寻求首轮反馈
- 该 PR 明确移除了所有旧版 model-provider fallback 行为，计划作为 beta 时间框内的有意简化

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| **#7044** | Rhoahndur | **重构 Cargo feature 聚合**：将 channels-all 从 agent-runtime 抽离为独立聚合 feature，简化依赖管理 | [PR #7044](https://github.com/zeroclaw-labs/zeroclaw/pull/7044) |
| **#7049** | Yyukan | **修复 Kimi-K2 温度参数兼容性**：`compatible.rs` 对 `kimi-k2.5`/`kimi-k2.6` 省略 `temperature` 字段，解决 400 错误（关联 Issue #7022） | [PR #7049](https://github.com/zeroclaw-labs/zeroclaw/pull/7049) |

### 重大推进中的功能集群

**硬件/IoT 集成（Rhoahndur 主导，从 #6148 拆分）**
- [#7045](https://github.com/zeroclaw-labs/zeroclaw/pull/7045) 智能家居命名设备工具（set_device/read_device）+ 外设 wiring 支持
- [#7046](https://github.com/zeroclaw-labs/zeroclaw/pull/7046) dev-sim 特性 + `/tmp/zc-sim-*` 串口白名单
- [#7047](https://github.com/zeroclaw-labs/zeroclaw/pull/7047) hardware_capabilities 工具暴露 pin_devices 和 description
- [#7048](https://github.com/zeroclaw-labs/zeroclaw/pull/7048) ESP32 模拟器示例（模拟器二进制 + Web 前端）

**TTS/语音通道重构（mov-xound-glitch 主导）**
- [#7050](https://github.com/zeroclaw-labs/zeroclaw/pull/7050) OGG/Opus 转码支持 Telegram + WhatsApp 语音消息
- [#7019](https://github.com/zeroclaw-labs/zeroclaw/pull/7019) 非 Opus TTS 通过 sendAudio 投递 + 转写 provider 接入

**邮件通道增强（mov-xound-glitch）**
- [#7021](https://github.com/zeroclaw-labs/zeroclaw/pull/7021) XOAUTH2 认证、观察者模式、只读 IMAP 工具（size: L, risk: high）

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 1 | **#5937** 统一 Provider 架构与 reqwest 客户端管理 | 9 | 社区长期痛点：provider 模块 reqwest 使用不一致、配置碎片化，需重构为统一 builder 模式 | [Issue #5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) |
| 2 | **#5847** 文档化 gateway.web_dist_dir 与 ZEROCLAW_WEB_DIST_DIR | 8 ⭐已关闭 | 新用户 onboarding 受阻：Web 仪表盘"不可用"提示缺乏文档解释 | [Issue #5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) |
| 3 | **#5982** 多租户 Agent 部署的按发送者 RBAC | 8 | 企业级需求：单实例服务多用户类别（客户/运营/开发者），需隔离工作空间、工具集、速率限制 | [Issue #5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) |
| 4 | **#4842** aarch64 更新命令下载错误架构二进制 | 7 ⭐已关闭 | ARM64/树莓派用户无法使用 `zeroclaw update`，影响边缘部署场景 | [Issue #4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) |

### 诉求分析

- **架构债务集中爆发**：#5937 获得最多评论，反映 provider 层的技术债务已影响外部贡献者体验
- **企业多租户刚需**：#5982 与 #6909（computer-use 支持）共同指向 ZeroClaw 从个人工具向团队/企业平台的演进压力
- **边缘/IoT 场景崛起**：硬件相关 PR 集群显示社区正在探索 Raspberry Pi、ESP32 等边缘部署

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 描述 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| **S1 - workflow blocked** | **#7022** kimi-k2.6 400 无效 temperature | 新报 | `compatible.rs` 硬编码 baseline 0.7，Kimi-K2 系列拒绝非固定温度 | **#7049** ✅ 已提交 | [Issue #7022](https://github.com/zeroclaw-labs/zeroclaw/issues/7022) |
| S1 | #4879 Gemini CLI OAuth 完全不工作 | 开放 2 月+ | 认证成功后立即 rate_limited 错误，阻塞 Gemini 全量用户 | ❌ 无 | [Issue #4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) |
| S1 | #5962 Ollama Provider 工具调用失败 | 开放 | 需要工具时抛出错误并阻塞同会话后续消息 | ❌ 无 | [Issue #5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) |
| S1 | #5866 Telegram 群组 mention_only=true 时忽略回复 | 开放 | 直接回复机器人消息被忽略，必须 @提及 | ❌ 无 | [Issue #5866](https://github.com/zeroclaw-labs/zeroclaw/issues/5866) |
| S1 | #6647 Cron 作业输出未路由到配置通道 | ⭐已关闭 | 仅出现在 Web 仪表盘，未投递至 Telegram | 已修复 | [Issue #6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647) |
| S2 - degraded | #5122 `allowed_private_hosts` 对解析到私有 IP 的域名无效 | 开放 | DNS 解析后检查绕过白名单，安全策略失效 | ❌ 无 | [Issue #5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) |
| S2 | #6720 `context_aware_tools` 配置字段声明但未读取（死代码） | 开放 | 文档承诺功能实际不存在，误导用户 | ❌ 无 | [Issue #6720](https://github.com/zeroclaw-labs/zeroclaw/issues/6720) |

### 回归风险

- **#6074** 153 个 commit 在大规模回滚中丢失，正在审计恢复，可能影响历史 bugfix 的完整性 [Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)

---

## 6. 功能请求与路线图信号

| 功能方向 | Issue/PR | 纳入 beta-2 概率 | 判断依据 |
|:---|:---|:---:|:---|
| **Computer-use / 桌面控制** | #6909 | 低 | RFC 阶段，需安全审计，依赖 browser/screenshot 工具链成熟 |
| **统一输出路由模型** | #6969 + #7020 + #7050 | **高** | PR 已集群提交，mov-xound-glitch 主导，与现有 TTS 重构深度绑定 |
| **Cron 任务走 Orchestrator 管道** | #6954 | 中 | 明确关联 5 个 bug 的根因修复，但标记 needs-maintainer-review |
| **MemoryStrategy trait 解耦** | #6850 | 中 | 架构级改进，blocked 等待维护者评审 |
| **MCP 资源与 Prompt 支持** | #4467 | 中 | 4 个 👍 高需求，size 大，in-progress 但进展缓慢 |
| **Skill 范围工具激活** | #6915 | **高** | alex-nax 安全 PR 集群的一部分，与 #6914 工具权限强制执行配套 |
| **Twilio SMS 通道** | #6429 | 中 | needs-author-action，网关集成已完成但等待作者响应 |
| **多租户 Linq 通道** | #7041 | **高** | 今日新提，与 #5982 RBAC 需求呼应，架构清晰 |

### 路线图信号

- **v0.8.0-beta-2 核心主题**：zerocode TUI + RPC socket + DenyWithEdit 审批流（#6848）
- **安全加固冲刺**：alex-nax 的 4 个关联 PR（#6914-#6917）显示工具权限沙箱是 beta-2 后的重点

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 引述/观察 |
|:---|:---|:---|
| **OAuth 认证地狱** | #4879 | "Right after successfully authenticated Gemini CLI: Error: All providers/models failed" — 认证成功即失败，用户体验断裂 |
| **配置即代码的幻觉** | #6720 | `context_aware_tools = true` "does literally nothing" — 配置字段存在但无实现，文档与代码脱节 |
| **边缘部署架构混乱** | #4842, #5937 | 树莓派用户下载 x86_64 二进制；provider 层代码重复导致配置碎片化 |
| **从 Letta 迁移的功能落差** | #6969 | "one behaviour I relied on heavily is gone: the ability to control *how* and *where* a reply is delivered" — 输出路由灵活性不足 |
| **安全策略的文档缺口** | #6876 | `allowed_tools` 不限制 MCP 工具是 "by design or documentation gap?" — 用户无法区分意图与 bug |

### 满意度信号

- **Docker 文档贡献**：#6760 用户主动提供测试过的 v0.7.5-debian Docker Compose，显示社区愿意填补文档缺口
- **硬件黑客精神**：#6148 拆分出的 4 个 PR 显示有用户愿意按规范重构 hackathon 代码

---

## 8. 待处理积压

### 长期未响应的高优先级 Issue

| Issue | 创建 | 最后更新 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|:---|
| **#4879 Gemini CLI OAuth 完全不工作** | 2026-03-28 | 2026-05-31 | 2 个月开放，2 个 👍，无维护者分配 | 标记 P0，分配 provider 模块负责人 |
| **#5122 私有 IP 域名白名单失效** | 2026-03-29 | 2026-05-31 | 安全漏洞，in-progress 但无可见进展 | 与 #6914 工具权限重构统筹处理 |
| **#4467 MCP 资源与 Prompt 支持** | 2026-03-24 | 2026-05-31 | 4 个 👍 最高需求功能，in-progress 2 月+ | 明确里程碑，或拆分 MVP 交付 |
| **#3100 Mattermost oncall 模式** | 2026-03-10 | 2026-05-31 | 3 个月开放，与 OpenClaw 功能 parity 需求 | 评估与 #7041 多租户 Linq 的通用抽象 |

### 维护者关注提醒

- **#6848** (XL 集成 PR) 已开放 10 天，标记 "DO NOT MERGE"，但 8 个 stacked PR（#7028, #7029 等）依赖其分支，形成合并瓶颈
- **#6074** 153 commit 丢失审计：历史 bugfix 可能需 cherry-pick，建议设定恢复截止日期

---

*日报基于 GitHub 公开数据生成，时间范围：2026-05-31 至 2026-06-01*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*