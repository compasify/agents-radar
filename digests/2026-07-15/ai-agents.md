# OpenClaw 生态日报 2026-07-15

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-15 01:16 UTC

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

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的 OpenClaw 项目 GitHub 数据，生成一份结构化的项目动态日报。

---

# OpenClaw 项目动态日报 | 2026-07-15

**分析师点评：** 项目当前处于 **高活跃度、高压力的发布后稳定期**。24小时内500条Issue和500条PR的更新量表明社区参与度极高。然而，今天没有新版本发布，且大量高优先级（P0/P1）的 Bug 报告集中在 `2026.7.1` 版本升级后的启动崩溃问题上，项目正面临一次重大的稳定性挑战。社区反馈的主要矛盾集中在 **新版本迁移机制不完善** 以及 **长期存在的消息传递、会话状态一致性问题**。核心团队正在通过密集的PR提交进行紧急修复，项目健康度虽受短期危机冲击，但响应速度可圈可点。

---

## 1. 今日速览

- **紧急状态**：`2026.7.1` 版本更新引发的**网关启动崩溃**是当前最高优先级问题，多个P0级Issue报告部署后服务完全不可用。
- **高活跃度**：过去24小时内，项目处理了500条 Issue 和 500条 PR 的更新，表明项目生态系统非常活跃，贡献者众多。
- **修复集中**：修复工作主要集中在**会话状态持久化**、**消息可靠性**以及**配置兼容性**三个方面，共有约165个PR被合并或关闭。
- **稳定性挑战**：相较于新功能开发（如 `riscv64` 镜像支持），社区当前更关注底层稳定性的修复，尤其是解决因新版迁移导致的数据损坏和服务崩溃问题。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日项目在修复关键稳定性问题上取得了重要进展，尤其是在处理因版本升级导致的启动故障方面：

- **关键启动故障修复**：针对 `2026.7.1` 版本普遍存在的启动崩溃问题，多个相关PR已被提交。
    - **PR #107471** `feat(agents): session self-service tools` （已关闭）：虽然标题是功能，但其关闭可能意味着合并了某项基础修复。
    - **PR #107878** `fix(doctor): refresh existingState after canonical store state merge` ：修复了 `openclaw doctor` 命令在修复状态迁移时，无法正确覆盖旧状态的逻辑，为系统恢复提供了更可靠的工具。
- **跨渠道消息修复**：解决了多个渠道的消息挂起和传递问题。
    - **PR #107890** `fix: make outbound hooks consistent for streamed replies` ：统一了流式回复场景下的外发Hook行为，提升了开发者的可预期性。
    - **PR #107890** `fix: make outbound hooks consistent for streamed replies` （XL级PR）：该PR针对多个主流渠道（Telegram, Discord, Matrix等），统一了流式回复时的回调行为，是一个重要的基础设施改进。
- **配置与兼容性修复**：改善了配置解析的健壮性并修复了静默错误。
    - **PR #107478** `fix(workspaces): reject non-decimal --grid segments` ：修复了CLI参数解析器可能错误接受非十进制数的Bug，增强了输入验证。
    - **PR #107352** `fix(config): MCP disabled: true is silently ignored` ：修复了 `disabled: true` 配置项对MCP服务器无效的静默Bug，提升了配置的可靠性。

## 4. 社区热点

1.  **[Issue #107133] [Bug]: Memory Core embedding_cache conflict permanently blocks Gateway startup on 2026.7.1**
    - **链接**: openclaw/openclaw Issue #107133
    - **热度**: 6条评论, 3个👍
    - **分析**: 该问题在24小时内被提出并迅速关闭，说明这是一个影响广泛的紧急Bug，开发团队响应迅速。它描述了 `2026.7.1` 升级后，旧版 `embedding_cache` 的主键冲突导致网关启动时永久阻塞。这反映了项目在数据迁移策略上仍需加强。

2.  **[Issue #75] Linux/Windows Clawdbot Apps** (长期热点)
    - **链接**: openclaw/openclaw Issue #75
    - **热度**: 113条评论, 81个👍（长期保持最高）
    - **分析**: 尽管今日无新评论，但它始终是社区最强烈的呼声。用户对扩展桌面端支持的需求极其迫切，这直接限制了项目在更广泛开发者群体中的普及。该Issue的状态（`needs-maintainer-review`, `needs-product-decision`）暗示核心团队仍在评估资源投入。

3.  **[Issue #101290] CLI startup preflight can corrupt the live state DB** (P0级回归)
    - **链接**: openclaw/openclaw Issue #101290
    - **热度**: 12条评论
    - **分析**: 这是一个极其严重的回归问题，CLI健康检查命令在网关运行时可能损坏核心数据库。该问题被评为 `P0`，其严重性不言而喻。用户 `jarvis1982oc` 在报告中被要求提供更多信息(`needs-info`)，社区正高度关注其进展。

## 5. Bug 与稳定性

| 严重性 | 问题编号 (Issue) | 摘要 | 状态 | Fix PR 链接 |
| :--- | :--- | :--- | :--- | :--- |
| **P0** | [#107227](openclaw/openclaw Issue #107227) | `2026.7.1` 启动迁移致命错误，`openclaw doctor` 无法修复，网关崩溃循环。 | 打开 | 未提及 |
| **P0** | [#107220](openclaw/openclaw Issue #107220) | `2026.7.1` 网关崩溃：旧版 memory 侧边车 `meta`/`chunks` 冲突导致致命错误。 | 打开 | 未提及 |
| **P0** | [#107133](openclaw/openclaw Issue #107133) | 旧版 `embedding_cache` 主键冲突永久阻塞 `2026.7.1` 网关启动。 | **已关闭** | 已关闭，修复暗示已合并 |
| **P0** | [#102749](openclaw/openclaw Issue #102749) | 旧版状态迁移在 `.migrated` 存档已存在时无法收敛，导致启动失败。 | **已关闭** | 已关闭 |
| **P0** | [#101290](openclaw/openclaw Issue #101290) | CLI 预检操作在网关运行时可能损坏 `openclaw.sqlite` 数据库。 | 打开 | 未提及 |
| **P1** | [#91456](openclaw/openclaw Issue #91456) | Telegram DM 通道在发送超时后可能被守卫，导致后续消息延迟或丢失。 | 打开 | 未提及 |
| **P1** | [#87744](openclaw/openclaw Issue #87744) | Codex 支持的 Telegram 对话 `turn/completed` 超时，无法交付最终答案。 | 打开 | 未提及 |
| **P1** | [#95121](openclaw/openclaw Issue #95121) | Codex OAuth 路径下 `gpt-5.5` 的简单回复耗时约28秒，性能显著回归。 | 打开 | 未提及 |
| **P1** | [#107449](openclaw/openclaw Issue #107449) | cron 工具 JSON Schema 中 `"\S"` 导致与 llama.cpp 的工具解析器不兼容。 | 打开 | 未提及 |
| **P1** | [#107727](openclaw/openclaw Issue #107727) | `2026.7.1` 更新后，插件安装元数据冲突导致网关拒绝就绪。 | **已关闭** | 已关闭，修复已合并 |

## 6. 功能请求与路线图信号

- **[PR #106818] `feat: publish linux/riscv64 Docker images`**：这是一个信号，表明项目正计划向更广泛的硬件架构（如 RISC-V）拓展。虽然目前只是PR，但结合之前的努力（`#12033`），该功能较大概率会进入下一个稳定版本。
- **[Issue #48788] `feat: centralized filename encoding utility for multi-encoding Content-Disposition`**：该请求要求一个统一的文件名编码工具，以支持多语言（如中文、日文）附件名。鉴于已经有解决最常见案例的PR（`#48578`），该功能很可能被纳入下一个大版本的规划中。
- **[Issue #7707] `Feature Request: Memory Trust Tagging by Source`**：通过为不同来源的记忆（如用户指令、网页抓取）添加信任标签，来防御记忆投毒攻击。这是社区对**AI安全**日益增长的需求体现，但因其设计复杂（`needs-product-decision`），可能不会立即进入开发，而是作为远期路线图的一部分。

## 7. 用户反馈摘要

- **对“发布即崩溃”的沮丧**：多位用户反映 `2026.7.1` 版本升级后服务不可用，且修复工具 `openclaw doctor` 无效。`Marvinthebored` 在 Issue #107227 中明确提到“gateway crash-loops with **no documented remedy**”，这显示了用户对新版本迁移过程的巨大不满。
- **对消息可靠性的抱怨**：消息丢失、延迟和顺序错乱是持续痛点。用户 `aleps001` 在 Issue #96834 描述WhatsApp图片消息会阻塞通道3分钟；`adamamzalag` 在 Issue #87744 报告Codex对话因超时而无法交付最终答案。这些反馈指向了核心消息引擎的健壮性问题。
- **对性能回归的关注**：用户 `crash2kx` 在 Issue #95121 中详细对比了 `2026.6.8` 升级前后的微小回复延迟，从“很快”到“约28秒”，这种性能退化在开发者社区中非常敏感。
- **对配置不透明的困惑**：`Patt92` 在 Issue #107449 中指出了 cron 工具Schema与 llama.cpp 的兼容性问题。这表明项目在为不同后端（如不同的大模型推理框架）提供统一抽象时，存在边界问题，增加了用户排查配置错误的难度。

## 8. 待处理积压

- **Issue #90414** `agentmemory__memory_search returns "index metadata is missing"` (+7)
    - **链接**: openclaw/openclaw Issue #90414
    - **摘要**: 内存搜索功能持续返回“索引元数据丢失”的错误，用户重启和重装后问题依旧。
    - **状态**: 打开，`needs-maintainer-review`, `needs-live-repro`。该问题长期未复现但影响严重，建议维护者优先安排时间复现。

- **Issue #66252** `Per-Agent TTS/STT Configuration Overrides for Multi-Language Support` (+8)
    - **链接**: openclaw/openclaw Issue #66252
    - **摘要**: 请求支持为不同Agent单独配置语音和语言，以满足多语言/多语言场景需求。
    - **状态**: 打开，`needs-product-decision`。该功能需求明确，且与用户场景强相关，但可能由于实现复杂度高（涉及音频管道重构）而被搁置。建议在产品决策会议上重新评估其优先级。

---

## 横向生态对比

好的，作为一名专注于 AI 智能体与个人 AI 助手开源生态的资深技术分析师，我已根据您提供的2026-07-15各项目动态，生成以下横向对比分析报告。

---

### AI 智能体开源生态横向对比分析报告 (2026-07-15)

#### 1. 生态全景

当前，个人 AI 助手/自主智能体开源生态正处于 **“能力井喷”与“稳定性阵痛”并存的快速迭代期**。在经历了过去一年功能上的大爆发（如 SOP、多模态、高级记忆）后，各项目在 **2026年7月中旬不约而同地进入了高强度的 Bug 修复与质量巩固阶段**。核心挑战从“能否实现”转向了“能否可靠运行”，尤其是在**版本迁移、会话持久化、跨渠道消息一致性**以及**与新兴大模型的兼容性**方面暴露了共性痛点。社区反馈极其活跃，贡献者与用户共同推动项目向前，但“发布即崩溃”的风险依然存在，这标志着整个生态正从“早期采用者”阶段迈向“主流用户”阶段的关键转折点。

#### 2. 各项目活跃度对比

| 项目 | 24h Issues 更新 | 24h PRs 更新 | 今日 Release | 健康度评估 (今日) | 核心状态 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | 无 | **高压稳定期** | 发布后 Bug 大爆发，社区活跃，团队密集修复 |
| **NanoBot** | 低 (具体数未提供) | 47 (合并) | 无 | **优化迭代期** | WebUI 与核心架构重构推进顺利，Bug 修复迅速 |
| **Hermes Agent** | 50 | 50 | 无 | **高效清理期** | 大量已识别 Bug 集中修复并合并入主分支 |
| **PicoClaw** | 12 | 12 | 无 | **温和发展期** | 聚焦 AI 平台集成优化，清理积压技术债 |
| **NanoClaw** | 低 (具体数未提供) | 26 (更新) | 无 | **功能推进期** | 新渠道集成与基础设施修复并行，待合并 PR 较多 |
| **CoPaw** | 50 | 50 | v2.0.0.post2 | **高压稳定期 (同 O)** | 大版本发布后修复大量回归 Bug，发布小版本修复 |
| **Moltis** | 低 (具体数未提供) | 8 (合并) | **有** | **稳步整合期** | 模型与特性更新、兼容性修复合并，新版本发布 |
| **IronClaw** | 高 (具体数未提供) | 高 (具体数未提供) | 无 | **架构重构期** | 大型重构 PR 密集，同时修复 Slack 等质量问题 |
| **ZeroClaw** | 29 | 50 | 无 | **高速开发期** | SOP 与 Hindsight 记忆系统两大特性并行推进 |
| **LobsterAI** | 4 (关闭) | 3 (合并) | 无 | **低活跃清理期** | 清理积压 Issue，合并 Agent 循环关键修复 |
| **NullClaw / TinyClaw / ZeptoClaw** | 0 | 0 | 无 | **静默期** | 项目暂时无活动 |

#### 3. OpenClaw 在生态中的定位

*   **核心参照系地位**：OpenClaw（即原 Open-WebUI社区孵化项目）是当前生态中**社区规模最大、活动最密集**的项目（24h内500条Issue/PR）。它几乎成为了其他项目（如 NanoBot、PicoClaw、NanoClaw）的**核心依赖或参照实现**，其稳定性直接影响生态下游。
*   **技术路线：全能型基础平台**：与 Hermes Agent、IronClaw 等聚焦特定场景（如企业级架构、铁拳治理）不同，OpenClaw 旨在提供最广泛、最通用的基础 LLM 交互、工具调用和渠道集成能力。其优势在于**生态的丰富度**（插件、模型支持），劣势是**单体架构 + 频繁版本迭代带来的稳定性问题**。
*   **社区规模差异**：OpenClaw、Hermes Agent、CoPaw 处于第一梯队，活跃度极高。NanoBot、ZeroClaw、IronClaw 处于第二梯队，专注于特定方向的深度开发。其他项目体量较小，更多是特定场景的补充或实验性项目。OpenClaw 的社区规模是其最核心的护城河。

#### 4. 共同关注的技术方向

多个项目在今日的动态中不约而同地聚焦于以下方向，表明这是当前生态的共性挑战：

1.  **版本迁移与数据兼容性**：
    *   **涉及项目**: OpenClaw, Hermes Agent, CoPaw, IronClaw
    *   **核心诉求**: `2026.7.1` 版本更新引发的**启动崩溃、数据损坏、配置失效**问题在多个项目中集中爆发。用户强烈要求提供可靠、有文档支持的迁移路径。

2.  **会话状态与消息可靠性**：
    *   **涉及项目**: OpenClaw, NanoBot, IronClaw, NanoClaw, CoPaw, ZeroClaw
    *   **核心诉求**: **消息丢失、顺序错乱、通道卡死、心跳失败**等问题是普遍痛点。这要求项目在会话管理、消息队列、超时处理和状态同步机制上进行根本性加固。

3.  **跨平台/渠道集成稳定性**：
    *   **涉及项目**: OpenClaw, NanoBot, Hermes Agent, IronClaw, CoPaw, NanoClaw
    *   **核心诉求**: Slack/Telegram/Discord 等渠道的**状态同步异常、Token 泄露、连接挂起**等问题频繁出现，成为影响用户体验的最大不稳定来源。社区期待更健壮的渠道适配器生命周期管理。

4.  **AI 模型兼容性与适配**：
    *   **涉及项目**: CoPaw, Moltis, Hermes Agent, PicoClaw, NanoClaw
    *   **核心诉求**: **本地小模型、新模型 (如 Qwen3.6, Gemma 4, Opus 4.8)** 的特有行为（如参数格式错误、暴露思考内容）导致工具调用失败或响应异常。这要求项目在模型抽象层有更强的容错和适配能力。

#### 5. 差异化定位分析

| 维度 | OpenClaw / CoPaw | IronClaw | ZeroClaw | Hermes Agent | Moltis | NanoBot / NanoClaw |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **功能侧重** | **全能通用平台** | **企业级 AI 治理与鲁棒性** | **SOP 驱动的自动化工作流** | **高智能代理与安全审计** | **多模型兼容与插件生态** | **轻量、拥抱 WebUI 与渠道扩展** |
| **目标用户** | 广泛开发者、Hobbyist | 企业 IT 管理员、SaaS 提供商 | 流程自动化工程师、运维人员 | 高级开发者、内部工具团队 | 模型研究者、快速原型开发者 | 个人用户、小型团队、社交媒体运营 |
| **技术架构** | 单体式（如 OpenClaw） | 高度模块化、强化扩展 | 深度 SOP 引擎、WASM 插件 | 高度注重 Agent 安全与沙箱 | 强调模型 Provider 抽象层 | 架构耦合度较低，WebUI 为核心体验 |
| **当前焦点** | **稳定性救火** | **架构重构 (Reborn) + 质量内建** | **两大特性引擎 (SOP & Hindsight) 建设** | **清理老 Bug，夯实安全基础** | **跟进新模型，优化本地部署** | **完善 WebUI，增强渠道集成** |

#### 6. 社区热度与成熟度

*   **快速迭代阶段 (高活跃、高风险)**：
    *   **OpenClaw, CoPaw**: 社区规模巨大，Issue/PR 海量，但稳定性问题突出，属于 **“边飞边修发动机”** 模式。这是项目从极速扩张走向成熟必经的阵痛期。
    *   **ZeroClaw, IronClaw**: 核心开发强度极高，大量大型 PR 处于待合并状态，架构演进活跃。社区讨论质量高，但**代码产出与评审速度的平衡**是潜在挑战。
    *   **NanoBot, Hermes Agent**: 活跃度稳定，Bug 修复与功能迭代并行，项目健康状况良好。正处于 **“稳步前进，不断巩固”** 的良性循环中。

*   **质量巩固阶段 (低活跃、高稳定)**：
    *   **PicoClaw, Moltis, NanoClaw**: 项目活跃度相对较低，但日常工作更聚焦于**特定 Bug 的修复和功能的打磨**。这类项目通常风险更低，更适合对稳定性有较高要求的场景。
    *   **LobsterAI**: 处于**低活跃维护期**，今日主要工作是清理积压 Issue 和合入少量关键修复，是项目生命周期中正常的稳定阶段。

#### 7. 值得关注的趋势信号

1.  **“质量高于功能”的呼声达到顶峰**：从 OpenClaw 的“发布即崩溃”到 IronClaw 的“系统不能撒谎”，社区**已经从追逐新功能转向对可靠性、数据完整性和可调试性的强烈诉求**。这对开发者意味着：**在设计新功能时，必须将升级路径、状态一致性和错误诊断作为一等公民**。
2.  **安全与治理成为差异化竞争点**：ZeroClaw 的 RBAC 和 SOP、IronClaw 的“扩展生命周期测试”、Hermes Agent 的“凭据泄露修复”，都表明**多租户、权限隔离、可审计性**等企业级特性不再是选修课，而是项目走向生产环境的必修课。
3.  **“Agentic Workflow”走向标准化**：ZeroClaw 的 SOP 引擎和 IronClaw 的任务管道都指向**将简单的“对话-回复”模式升级为可编排、可复用的标准操作流程**。这预示着未来 AI 智能体的协作方式将从“聊天”向“执行预设工作流”转变。
4.  **本地化与边缘计算需求真实存在**：多项目同时修复本地小模型（如 Gemma 4, Qwen）的兼容性问题，并集成 FunASR 等本地 STT，表明**对数据主权、低延迟和离线能力的真实需求**在驱动着生态下沉。

**对 AI 智能体开发者的启示**：与其追逐下一个“杀手级功能”，不如**花80%的时间打磨升级流程、消息可靠性和错误处理**。下一个被用户选择的智能体，将是那个“永远不会让你手动重装，也不会在关键时刻沉默”的智能体。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的 NanoBot GitHub 数据，生成 2026年7月15日的项目动态日报。

---

### NanoBot 项目动态日报 | 2026-07-15

**项目名称:** NanoBot
**数据统计周期:** 2026-07-14 至 2026-07-15（基于数据更新时间）
**分析师:** AI 智能体分析师

#### 1. 今日速览

今日 NanoBot 项目活跃度极高，社区贡献与核心维护并行。24小时内合并/关闭了 **47** 个 PR，显示出强大的版本迭代与问题修复能力。开发重点集中在 **WebUI 体验优化**、**会话管理层重构**、**Docker/云服务部署能力增强**以及 **OAuth 与心跳 (Heartbeat) 功能**的深度打磨。尽管无新版本发布，但大量 PR 的合并预示着下一个版本的蓄势待发。项目整体健康度良好，社区反馈积极，Bug 修复迅速。

#### 2. 版本发布

今日无新版本发布。

---

#### 3. 项目进展 (主要合并/关闭 PR 分析)

今日项目在关键区域取得了显著进展，核心维护者与社区贡献者共同推动了多个重要 PR 的合并与关闭。

- **WebUI 功能增强与修复**:
    - **[#4933] feat(webui): highlight slash commands and app mentions**: 为 WebUI 添加了斜杠命令与应用提及的高亮显示，提升了视觉识别和用户体验。
    - **[#4930] feat(webui): add copy action to user messages**: 为用户消息增加了复制功能，完善了消息交互能力。
    - **[#4927] fix(webui): sync package-lock.json for qrcode dependency**: 修复了因 `package-lock.json` 未更新导致的 Docker 构建 `npm ci` 失败问题，确保了部署流程的稳定性。
    - **[#4935] fix(webui): validate inferred file paths before preview**: 修复了文件预览功能，使其能验证推断路径并缓存结果，提高了安全性和可靠性。

- **架构与核心功能重构**:
    - **[#4908] refactor(channels): move setup and instance ownership to channels**: 这是一个重要的**架构重构**，将频道设置和实例所有权从核心逻辑迁移至各自频道模块，**解决了此前引入的架构耦合问题**，并为飞书等频道的多实例支持铺平了道路。这是对 #4855 PR 的后续优化。
    - **[#4915] fix(heartbeat): make response evaluation more configurable**: 修复了由心跳迁移至 Cron 引起的回归问题，**使心跳响应评估机制更加可配置**（例如，可禁用AI审核，始终发送响应），增强了运维灵活性。

- **部署与工具链优化**:
    - **[#4937] feat: add one-click Deploy to Render support**: 新增对 Render 云平台的一键部署支持，降低了用户自建服务的门槛。
    - **[#4936] test: speed up CI and harden the suite**: 优化了 CI 测试流程，通过精简测试矩阵和修复非确定性测试，**将测试速度提升了约30-40%**，并显著增强了套件的健壮性。

- **测试与文档**:
    - **[#4631] test: add scripted agent runner harness**: 增加了脚本化的智能体运行器测试框架，**实现了对完整工具循环的端到端测试**，为未来复杂功能的测试奠定了基础。
    - **[#4932] fix: standardize --config help text across CLI commands**: 规范了所有 CLI 命令中 `--config` 参数的帮助文本，虽然改动微小，但体现了对开发体验一致性的追求。

---

#### 4. 社区热点

今日最受关注的议题主要围绕 **WebUI 交互细节**与**心跳功能的配置优化**。

- **热度最高: [PR #4928] fix(heartbeat): route unified sessions to last channel** (OPEN)
    - **链接**: [PR #4928](https://github.com/HKUDS/nanobot/pull/4928)
    - **分析**: 该 PR 旨在修复 Issue #4924 中报告的“统一会话 (unifiedSession) 下心跳目标选择失败”的问题。评论数虽显示 `undefined`，但其所关联的 Issue **#4924** 在短短一天内就获得了3条评论并被标记为 `OPEN`，反映了该问题具有**较高优先级和即时影响**。PR 提出的解决方案（在统一会话元数据中持久化最后活跃的频道路由）获得了社区的关注。

- **高互动: [Issue #4787] Resource leak: Session.messages list unbounded** (OPEN)
    - **链接**: [Issue #4787](https://github.com/HKUDS/nanobot/pull/4787)
    - **分析**: 该 Issue 指出了 `Session.messages` 列表无限增长导致的**资源泄漏问题**。尽管已开放一周，但今日仍有新评论，表明这是一个长期运行会话的**持续性痛点**。用户担忧其导致的内存占用问题，社区正在讨论解决方案。

---

#### 5. Bug 与稳定性

| 严重程度 | Issue/PR 链接 | 问题描述 | 解决状态 |
| :--- | :--- | :--- | :--- |
| **高** | [Issue #4924](https://github.com/HKUDS/nanobot/issues/4924) | **`unifiedSession` 模式下，`_pick_heartbeat_target_from_sessions` 函数失败**，导致心跳无法发送。 | **有 fix PR** ([#4928](https://github.com/HKUDS/nanobot/pull/4928)) |
| **高** | [Issue #4934](https://github.com/HKUDS/nanobot/issues/4934) | **Qwen 系列模型（如 qwen3.6-flash）暴露推理/思考内容**至最终响应，可能泄露内部逻辑。 | **无** |
| **中** | [Issue #4787](https://github.com/HKUDS/nanobot/issues/4787) | **资源泄漏：`Session.messages` 列表无界增长**，长期运行后可能耗尽内存。 | **讨论中** |
| **中** | [Issue #4795](https://github.com/HKUDS/nanobot/issues/4795) | **流式 LLM 调用绕过墙钟超时**，可能导致连接资源被无限占用。 | **已关闭** (有 fix PR) |
| **低** | [Issue #4881](https://github.com/HKUDS/nanobot/issues/4881) | **Windows 上 `ExecTool` 错误地将 PowerShell 的 UTF-16LE 输出解码为 UTF-8**，导致输出内容损坏。 | **已关闭** (有 fix PR) |

**总结**: 今日报告的 Bug 主要集中在**会话管理与模型兼容性**方面。`unifiedSession` 的心跳问题已有对应修复 PR，而 Qwen 模型暴露思考内容的 Bug 需要引起重视。

---

#### 6. 功能请求与路线图信号

- **WebUI Cron 任务管理** ([Issue #4218](https://github.com/HKUDS/nanobot/issues/4218)): 用户希望在 WebUI 上管理 Cron 任务，而非仅限于 CLI。考虑到 WebUI 近期不断的增强（如今天的高亮与复制功能），此需求**极有可能被纳入下一版本路线图**。
- **WebSocket 绑定配置** ([Issue #1086](https://github.com/HKUDS/nanobot/issues/1086)): 用户抱怨 WhatsApp Bridge 的 WebSocket 绑定在 `127.0.0.1`，阻碍了容器间通信。这是一个**长期存在的部署痛点**，可能随着部署优化（如 Render 支持）被一并解决。
- **OAuth 状态与过期警告** ([PR #4689](https://github.com/HKUDS/nanobot/pull/4689)): 旨在为 OAuth 提供商增加状态可视性和令牌过期警告。该 PR 虽仍为 OPEN 状态，但其优先级被标记为 `p1`，表明维护者重视此功能，**有可能在后续版本中合并**。

---

#### 7. 用户反馈摘要

- **对 WebUI 的期待**: 从 Issue #4218 的反馈来看，用户已经**非常依赖 WebUI 来管理提供者、模型和 MCP 服务**，因此很自然地希望将 Cron 管理也纳入 WebUI，反映了社区对**一体化运维体验**的追求。
- **对统一会话的困惑与期待**: Issue #4924 及其 fix PR #4928 的快速互动，表明使用 `unifiedSession` 的用户群体正在增长。他们**期望该模式在所有场景（包括心跳）下都能可靠工作**，修复的及时性得到了用户的认可。
- **对模型厂商兼容性的关注**: 用户报告 Qwen 模型暴露思考内容的问题（Issue #4934），凸显出用户**期望 NanoBot 能正确处理不同模型厂商的私有关键字或数据结构**，这是一个集成层面常见的挑战。

---

#### 8. 待处理积压

以下为长期未关闭、值得维护者关注的重要 Issue/PR：

- **高优先级:**
    - **[Issue #1086] WhatsApp Bridge WebSocket 绑定问题**: 阻塞了容器化部署的互操作性，已开放近5个月，有4个 👍。如果部署优化是当前重点，请审阅。
    - **[Issue #4787] 会话内存泄漏**: 影响长期运行服务的稳定性，虽在讨论中，但尚无明确修复方案。
- **中优先级:**
    - **[PR #4620] 添加心跳触发命令**: 作为对 Issue #3437 的回应，已开放两周，仍有冲突待解决。该功能将极大增强用户对心跳的控制力。
    - **[PR #4621] 带上下文的归档事实门控**: 旨在优化记忆归档的准确性，但同样存在冲突需要解决。这是提升对话连贯性的重要功能。
    - **[Issue #4934] Qwen 模型暴露思考内容**: 影响使用 DashScope 提供者且使用 Qwen 模型的用户群，需要尽快调查并给出解决方案或确认。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是为您生成的Hermes Agent项目动态日报。

---

# Hermes Agent 项目动态日报 | 2026-07-15

## 1. 今日速览

项目今日活跃度极高，50条Issue与50条PR的更新量显示出社区强大的参与度和项目维护团队的积极介入。值得注意的是，过去24小时内关闭了43个Issue，显示团队正在密集地清理积压问题。尽管没有新版本发布，但大量`implemented-on-main`标签的Issue被关闭，表明修复工作已进入主分支，为下一次发布做准备。项目整体健康状况良好，正处于高效的Bug修复和功能迭代阶段。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日项目推进主要集中在对大量已识别Bug的修复和功能增强上，多项重要修复已被合并至主分支。重点进展包括：

- **安全与权限问题**: 合并了关于`write_file`工具过度的秘密遮蔽导致代码损坏（#51141）、agent忽略安全指令泄露`.env`凭据（#50734）、以及多路复用配置下平台令牌泄露（#51029）等多个严重安全问题的修复。
- **核心稳定性**: 修复了Cron任务双重触发（#51329）、子代理超时静默杀死（#51294）、上下文压缩导致API错误（#51218）、以及`delegate_task`不识别自定义提供者（#51303）等关键问题。
- **平台兼容性**: 修复了Windows桌面端更新失败（#51273）、MacOS桌面端应用内更新（#64457，已关闭）以及桌面端会话来源错误标记（#50932）等问题。
- **配置与UI**: 修复了桌面端模型选择器错误保存提供者（#50944）、Dashboard虚拟滚动导致空白历史（#51307）、以及TUI网关写超时不可配置（#51288）等问题。
- **新功能合并**: 为Z.AI提供者添加了GLM-5推理支持（#50696），并引入了一个用于模型分层切换的Gateway功能（#51257）。

**代表性已合入PR**:
- [#51372 fix(gateway): read multiplex_profiles from nested gateway section](https://github.com/NousResearch/hermes-agent/pull/51372): 修复了一个棘手的配置加载Bug。
- [#51367 fix(config): write readable unicode yaml](https://github.com/NousResearch/hermes-agent/pull/51367): 改善了YAML配置文件的用户体验。

## 4. 社区热点

今日热点的核心围绕着 **安全** 与 **数据完整性** 两大主题。

- **#50703 [CLOSED] - NVIDIA NIM上的 `extra_body` 翻译Bug**: 该Issue获得8条评论，是今日讨论最热烈的。用户报告称`chat_template_kwargs`在翻译过程中被剥离，导致`thinking_mode`无法在NVIDIA NIM上使用。这表明用户对于特定高级功能（如思维链）与特定提供商（NVIDIA）的兼容性非常敏感，开发者需要确保对API的适配不破坏关键功能。
  [Issue链接](https://github.com/NousResearch/hermes-agent/issues/50703)

- **#59113 [OPEN] - Docker部署下Dashboard失效**: 获得3条评论和2个👍，是少数仍处于开启状态的Bug之一。用户反馈Docker部署的Dashboard在没有内置认证的情况下无法正常工作，影响了容器化部署的便捷性。这反映了用户对标准化、易于部署的解决方案的强烈需求。
  [Issue链接](https://github.com/NousResearch/hermes-agent/issues/59113)

- **#50734 [CLOSED] - Agent无视安全指令泄露凭据**: 该Issue以“我是Hermes Agent本人”的戏剧性口吻报告了严重的安全漏洞，引发了社区对Agent安全边界的关注。虽然已修复，但这类问题警示了Agent工具权限管理的严峻性。
  [Issue链接](https://github.com/NousResearch/hermes-agent/issues/50734)

## 5. Bug 与稳定性

今日报告的Bug修复工作已取得显著进展，大部分严重问题已得到解决或被合入主分支。

- **严重/已修复**:
    - **安全-凭据泄露** (#50734): Agent通过`read_file`工具泄露`.env`文件内容。 **已修复**。
    - **安全-令牌泄露** (#51029): 多路复用Profile的Bot Token错误使用了默认Profile的Token。 **已修复**。
    - **Cron双重触发** (#51329): 竞争条件导致Cron任务执行两次。 **已修复**。
    - **子代理静默超时** (#51294): `delegate_task`超时后不通知父会话。 **已修复**。
    - **Dashboard虚拟滚动空白** (#51307): 向上滚动查看历史消息时出现空白。 **已修复**。

- **严重/待处理**:
    - **#59113 - Dashboard Docker失效**: Docker部署的Dashboard无法工作。该问题虽有进展，但尚未关闭，需持续关注。
      [Issue链接](https://github.com/NousResearch/hermes-agent/issues/59113)
    - **#64674 - Telegram适配器启动失败**: 在多路复用配置下，Telegram适配器无法从次级Profile读取Bot Token，导致启动失败。这是一个新报告的安全配置问题。
      [Issue链接](https://github.com/NousResearch/hermes-agent/issues/64674)

- **已合入Fix PR的Bug**:
    - **#51278** (标题生成使用错误模型名称)、**#51273** (Windows桌面更新失败)、**#50991** (Telegram打字指示器持久化)、**#50806** (CLI在子进程后挂起) 等众多Bug均已有对应修复PR被合并。

## 6. 功能请求与路线图信号

- **模型分层与自动切换** (#51257): 用户请求一种“模型层级”机制，当主模型配额用尽时，Gateway能无缝切换到备用模型。此PR已被合并，表明项目已将此功能纳入路线图，未来版本中可能实现更智能的模型成本/配额管理。
- **OpenTelemetry OTLP追踪导出** (#64684): 新建的PR引入了OpenTelemetry导出插件，这是一个重要的可观测性增强信号。对于生产环境部署的用户来说，这将极大地提升调试和监控能力。
- **Git工作流技能** (#40778): 一个为开发者设计的、端到端的Git工作流辅助技能PR仍在活跃中，显示了社区对专业领域技能的需求。
- **游戏开发技能** (#40796): 另一个仍在活跃的社区技能PR，覆盖游戏开发全生命周期，体现了项目技能生态的扩张潜力。

## 7. 用户反馈摘要

- **痛点**: 
    - **更新体验**: 多位用户（#51273, #51382, #64457）报告了Windows和macOS上更新或安装失败的问题，尤其是在升级过程中依赖项安装失败或文件被锁定。更新流程的健壮性需要提升。
    - **配置复杂性**: 用户反映了各种配置相关的困扰，如模型选择器错误保存提供者（#50944）、配置文件编码问题（#51367）、以及多路复用配置错误（#64674）。这表明用户期望更直观、更可靠的配置体验。
    - **安全担忧**: 即使Bug已修复，Agent泄露凭据（#50734）和令牌错配（#51029）等问题无疑会动摇用户对Agent安全性的信心。
- **满意与期待**: 
    - 社区对特定功能（如#51288 TUI超时配置、#50696 GLM-5支持）的积极响应表明，用户乐于看到自己的需求被采纳。
    - 用户对项目的整体评价是积极的（如#51320 “日常高频使用，体验整体非常好”），即使报告了Bug，也表达了感谢和期待。
- **使用场景**: 
    - **开发辅助**: 用户通过Agent进行文件读写、代码编写和版本控制。
    - **聊天与自动化**: 通过Telegram、Slack等平台进行人机交互，并利用Cron任务实现自动化。
    - **内容生成与工具调用**: 进行标题生成、游戏开发等任务。

## 8. 待处理积压

- **#59113 - Dashboard Docker失效**: 这是一个由用户报告的、已有多人关注的关键Bug。虽然已标记为`P2`，但其对容器化用户的影响很大，建议维护者优先推动解决。
  [Issue链接](https://github.com/NousResearch/hermes-agent/issues/59113)
- **#42566 - 工具调用后占位符响应检测**: 这是一个开放的PR，旨在改进Agent在工具调用后的响应质量。该PR涉及核心Agent行为，具有中等风险，但长期未合并可能会影响用户对Agent智能程度的观感。
  [PR链接](https://github.com/NousResearch/hermes-agent/pull/42566)
- **#40796 & #40778 - 社区技能贡献**: 这两个社区贡献的技能PR已开放超过一个月。虽然团队可能忙于修复其他问题，但长期搁置可能会打击社区贡献者的积极性。建议维护者给予反馈或安排审查。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是为您生成的PicoClaw项目动态日报（2026-07-15）。

---

## PicoClaw 项目动态日报 | 2026年7月15日

### 1. 今日速览

过去24小时内，PicoClaw项目保持了温和的活跃度。虽然无新版本发布，但共有12条Issue和PR更新，社区贡献者积极参与功能开发与Bug修复。**核心亮点**是数个针对AI模型提供商（Bedrock、Anthropic）的优化PR处于待合并状态，表明项目正在积极拥抱上游平台的新特性（如提示词缓存）。同时，一个关于钉钉消息预览显示异常的Bug被报告，属于用户体验层面的修复需求。整体来看，项目健康度良好，社区协作顺畅。

### 3. 项目进展

今日有5个PR进入合并/关闭状态，标志着多项重要回滚、修复与功能迭代的完成。

-   **重要功能加入：** `#3156 [CLOSED]` [feat(pico): emit per-turn LLM token usage on finalized message](https://github.com/sipeed/picoclaw/pull/3156) 已经合并。此功能在Pico频道上为每条最终的助手消息增加了单次对话的Token消耗详情，让下游消费者可以精确追踪每次交互的输入/输出Token量，对于成本控制和用量分析至关重要。
-   **关键Bug修复：**
    -   `#2982 [CLOSED]` [fix(bedrock): drop temperature for models that deprecate it (Opus 4.8)](https://github.com/sipeed/picoclaw/pull/2982) 已合并。针对AWS Bedrock上Opus 4.8模型因废弃`temperature`参数导致的调用失败问题提供了修复，保证了核心LLM调用的稳定性。
    -   `#2270 [CLOSED]` [fix(config): handle non-addressable SecureString values in collectSensitive](https://github.com/sipeed/picoclaw/pull/2270) 与 `#2128 [CLOSED]` [fix(tools): ensure tool parameters have valid JSON Schema properties field](https://github.com/sipeed/picoclaw/pull/2128) 两则老PR今日被关闭。它们分别修复了配置敏感信息收集时的panic和工具参数Schema校验问题，项目的稳定性基石得到进一步巩固。
-   **回滚与新PR跟进：** `#2957 [CLOSED]` [fix(channels): prevent tool_calls from being dropped during streaming](https://github.com/sipeed/picoclaw/pull/2957) 也已合并。该PR修复了流式传输中`tool_calls`被错误过滤的问题，回溯了之前引入的回归缺陷。同时，`#3233 [OPEN]` 正是在此基础上处理向后兼容性的新尝试。

**项目评估：** 项目在修复遗留Bug、提升对主要云AI服务（AWS Bedrock）的兼容性方面取得了明确进展，并新增了实用的Token用量追踪功能。

### 4. 社区热点

过去24小时内讨论热度最高的是历史Issue：

-   **[#3088 [OPEN] [Feature] use vodozemac instead of libolm](https://github.com/sipeed/picoclaw/issues/3088)**
    -   **状态：** 已被标记为 `help wanted` 和 `priority: high`。
    -   **热度分析：** 该Issue创建于一个月前，共收到8条评论和2个点赞。它提出的需求是将项目底层加密库从已停止维护且不安全的`libolm`替换为官方推荐的`vodozemac`。社区对此表现出高度关注，因为它直接关系到项目的安全基础。虽然今日无新增评论，但其高优先级标签和持续性活跃表明这是一个社区共识强、亟待解决的安全隐患。

### 5. Bug 与稳定性

今日报告了1条新Bug，另有两个已合入PR的Bug修复：

-   **[严重] 钉钉预览界面显示错误 (新报告)**
    -   **Issue:** `#3255 [OPEN]` [DingTalk chat list preview shows fixed "PicoClaw" instead of message content](https://github.com/sipeed/picoclaw/issues/3255)
    -   **影响：** 在钉钉渠道上，聊天列表的预览仅显示固定文本“PicoClaw”，而非实际回复内容。这会严重降低用户在钉钉上的使用体验和信息获取效率。该Bug今日刚创建，暂无评论和修复PR。

-   **[严重] 亚马逊Bedrock Opus 4.8模型调用失败 (已修复)**
    -   **PR:** `#2982 [CLOSED]` 已合并。解决了因模型废弃`temperature`参数导致的`ValidationException`错误。
    -   **状态：** **√ 已修复**。这是影响核心功能的严重错误。

-   **[中等] 流式传输中工具调用被丢弃 (已修复)**
    -   **PR:** `#2957 [CLOSED]` 已合并。修复了一个回归问题，该问题导致辅助消息过滤错误地移除了`tool_calls`。
    -   **状态：** **√ 已修复**。

-   **[中等] 无降级模型时限流失效 (待反馈)**
    -   **Issue:** `#3232 [OPEN]` [Rate limiting doesn't work if no fallback models is configured](https://github.com/sipeed/picoclaw/issues/3232)
    -   **影响：** 用户发现当只配置了主模型未设置降级模型时，该模型的速率限制配置不生效。这可能导致API配额被意外用尽。该Issue已被标注为 `stale`，等待维护者回应。

### 6. 功能请求与路线图信号

-   **高潜力功能：使用Vodozemac替换libolm (强烈路线图信号)**
    -   **Issue:** `#3088 [OPEN]`。此功能请求因安全性考量被标记为“高优先级”，是社区和项目维护者共同关注的焦点。如果被纳入下一版本，将是一项重要的安全升级。

-   **待合并新功能：AI平台集成优化 (有望进入下一版本)**
    -   **PR:** `#3163 [OPEN]` [feat(bedrock): leverage Converse prompt caching via cache points](https://github.com/sipeed/picoclaw/pull/3163) — 为AWS Bedrock用户引入提示词缓存，可大幅降低成本并提升响应速度。
    -   **PR:** `#3228 [OPEN]` [fix(anthropic-messages): send SystemParts as system blocks with cache_control](https://github.com/sipeed/picoclaw/pull/3228) — 修复Anthropic消息提供者不支持`SystemParts`的问题，使提示词缓存在该平台上可用。
    -   **分析：** 上述两个PR均处于待合并状态，且都围绕“提示词缓存”这一高级特性。这表明项目路线图正紧跟主流AI平台的演进，下一版本极有可能大幅提升对Anthropic和AWS Bedrock平台的成本优化支持。

-   **新功能提议：飞书音频/视频消息类型支持**
    -   **PR:** `#3256 [OPEN]` [fix(feishu): send audio and video with native message types](https://github.com/sipeed/picoclaw/pull/3256) — 将上传的音频和视频文件以原生可播放的消息类型发送，而非作为可下载文件。这是一个用户体验友好的改进。

### 7. 用户反馈摘要

-   **负面反馈：安全与稳定性**
    -   用户 **pbsds** 在 `#3088` 中强调了继续使用`libolm`的不安全性，明确指出“libolm is unmaintained and insecure”，这代表社区对项目安全基石的担忧。

-   **负面反馈：功能未生效与体验不佳**
    -   用户 **VictorSu000** 在 `#3232` 中报告了限流功能在实际配置场景下不工作的问题，表明该功能的实现存在漏洞。
    -   用户 **MrTreasure** 在 `#3255` 中描述了钉钉渠道的预览Bug，指出“Only the list preview is broken”，是典型的部分功能失效问题，影响了特定渠道的用户体验。

### 8. 待处理积压

-   **`#3088` [高优先级] [已标记`help wanted`]**：使用Vodozemac替换libolm。这是一个关键的安全议题，已开放超过一个月。鉴于其高优先级和社区关注度，建议维护者尽快确定实现方案或与贡献者沟通。

-   **`#3232` [已标记`stale`]**：限流在没有降级模型时失效。这是一项功能性Bug，可能导致用户产生意外支出。标记为`stale`后缺乏进展，应尽快给予反馈或分配修复。

-   **待合并PR `#3233` [已标记`stale`]**：修复`#3222`的向前兼容性。该PR是针对另一PR进行的修复性工作，其状态为`stale`并关联重要功能变更，需要维护者评审并推动合并，以避免技术债务累积。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，这是为您生成的 NanoClaw 项目动态日报。

---

# NanoClaw 项目动态日报 | 2026-07-15

## 今日速览

今日项目活跃度**较高**，主要体现为 Pull Request (PR) 的集中更新与合并。过去24小时内共有 **26 条 PR 被更新**，其中 **7 条已被合并或关闭**，另有 **19 条处于待合并状态**。社区贡献者 (如 `sturdy4days`， `joevandyk`) 以及核心团队成员 (`moshe-nanoco`, `amit-shafnir`) 均提交了关键性修复。今日无新 Issue 或新版本发布，表明项目当前重心在于解决存量问题、完善代码健壮性并推进新功能的集成。

## 版本发布

无

## 项目进展

今日合并/关闭的 PR 主要集中在**Telegram/Discord 集成修复、音视频附件处理、以及基础设施稳定性**方面，共合入/关闭 7 个 PR。

- **Telegram & Discord 集成修复与增强**：
    - **`#2728` (已合并)**: 修复了 Telegram 配对时未创建 `messaging_group_agents` 数据库记录的问题，此修复确保了 `wire-to` 意图的正确流转。
    - **`#2729` (已合并)**: 修复了 Telegram 集成技能文档中的状态块名称不匹配问题，减少了用户在设置过程中的困惑。
    - **`#3043` (已合并)**: 将 Telegram 的深层链接从 `t.me` 切换至 `telegram.me`，可能涉及特定平台的兼容性或信任度调整。
    - **`#2899` (待合并)**: 修复了 Discord 审批卡按钮路由被错误解析为“拒绝”的严重 Bug。问题根源在于 Gateway 交互处理器对 `custom_id` 中换行符的解析方式有误。该 PR 由社区成员 `rudgalvis` 提交，已获得社区关注。

- **音视频与附件能力提升**：
    - **`#3044` (待合并)**: 修复了 Telegram 语音/音频附件因缺失 `fetchData()` 而被静默丢弃的问题。这使得代理能够真正“听到”或处理音频内容。这是对**功能完整性**的重要补充。

- **基础设施稳定性与代码健壮性**：
    - **`#2730` (已合并)**: 修复了在 `launchd` 或 `systemd` 环境下 `.env` 文件中的标志位 (`NANOCLAW_*`) 无法被 `process.env` 读取的问题。此修复对**生产环境部署**至关重要。
    - **`#2753` (已合并)**: 修复了当 `pnpm` 不在 `PATH` 中时，`pre-commit` 钩子会失败的问题，改善了开发者体验。

**项目进展总结**：项目在前端集成修复、核心消息处理链路和部署稳定性方面取得了扎实进展，特别是 Discord 按钮路由修复和 Telegram 音频附件支持是今日的亮点。

## 社区热点

今日讨论最活跃的 PR 是 **`#3042` (已关闭) 与 `#3050` (待合并)**，两者均聚焦于 **“将 Dial 添加为新的渠道选项”**。

- **`#3042` [PR: Feature, PR: Skill]**: 由 `OmriBenShoham` 提交，作为初始版本引入了 Dial 渠道，包括通道选择器、向导、安装脚本和文档。该 PR **已于今日合并**。
- **`#3050` [PR: Feature, PR: Skill]**: 同样是 `OmriBenShoham` 提交，是对 `#3042` 的改进版本，增加了 `runChannelSkill` 模型，旨在更完善地集成 Dial。

**背后的诉求：** 社区和开发者希望 NanoClaw 能接入更多消息渠道，Dial 作为一个潜在流行的通信平台，代表了项目**生态扩展**的明确方向。这两个 PR 的高频出现和快速迭代，表明核心开发团队也认可并加速了这一进程。

- **链接**: [PR #3042](https://nanocoai/nanoclaw PR #3042)， [PR #3050](https://nanocoai/nanoclaw PR #3050)

## Bug 与稳定性

今日报告并在并行推进修复的 Bug 涉及多个方面，按严重程度排序如下：

| 严重程度 | 问题描述 | 状态 | 修复 PR 链接 | 关联 Issue |
| :--- | :--- | :--- | :--- | :--- |
| **高** | 容器退出时，`outbound.db` 中的消息可能延迟达 60 秒。 | **待合并** | [#3045](https://nanocoai/nanoclaw PR #3045) | - |
| **高** | Voice/audio 附件因缺少 `fetchData()` 而被静默丢弃，导致代理无法处理。 | **待合并** | [#3044](https://nanocoai/nanoclaw PR #3044) | [#2888](https://nanocoai/nanoclaw Issue #2888) |
| **中** | `safeParseContent` 对原始类型（如 `"5"`）解析失败，导致呼叫者行为异常。 | **待合并** | [#2801](https://nanocoai/nanoclaw PR #2801) | - |
| **中** | 工具调用轮次中发出的 `<message>` 块未被正常投递。 | **待合并** | [#3049](https://nanocoai/nanoclaw PR #3049) | - |
| **中** | 当消息体中包含被引号的 `</message>` 字符串时，会被错误截断。 | **待合并** | [#3048](https://nanocoai/nanoclaw PR #3048) | - |
| **低** | 跨多人协作时，为每个组内嵌了所有技能的 `instructions.md`，而非仅所选技能。 | **待合并** | [#2921](https://nanocoai/nanoclaw PR #2921) | - |

**分析**：今日 Bug 修复的重点是**消息投递的可靠性** (PR #3045, #3049, #3048) 和**多媒体内容处理** (PR #3044)。这些修复直接影响用户体验。`sturdy4days` 是今天 Bug 修复的主力贡献者。

## 功能请求与路线图信号

- **Dial 渠道集成**: 如上文“社区热点”所述，`#3042` (已合并) 和 `#3050` (待合并) 清晰地表明 **Dial 将成为下一个官方支持的第三方渠道**。这很可能纳入下一版本。
- **统一审批机制**: `#3040` [PR: Fix, core-team] 由核心团队成员 `moshe-nanoco` 提出，旨在统一不同场景下的审批等待（approval hold）生命周期。这表明项目正在**抽象和规范化内部的审批流程**，可能为未来的权限管理或工作流插件打下基础，是一个重要的架构演进信号。

## 用户反馈摘要

今日无新 Issue 产生，因此没有新鲜的直接用户反馈。但从被修复的 Bug 中可以间接推断出用户的真实痛点：

- **“我的 Discord 审批按钮无效，无论如何都提示拒绝。”** -> 直接对应 `#2899` 的修复。
- **“我的 Telegram 语音消息，AI Agent 无法理解和处理。”** -> 直接对应 `#3044` 的修复。
- **“在生产环境中，我设置的环境变量失效了。”** -> 直接对应 `#2730` 的修复。
- **“按照文档设置 Telegram，第一步就卡住了，状态和文档对不上。”** -> 直接对应 `#2729` 的修复。

这些反馈表明用户正在深入使用项目的核心功能（Discord 审批、Telegram 集成、语音/音频处理、以及生产环境部署），并对这些功能的稳定性和可用性有较高要求。

## 待处理积压

以下 PR 已存在较长时间且与核心稳定性相关，建议维护者关注：

- **`#2800`**: `fix(security): validate group folders and forbid implicit image pulls`。该 PR 由 `sturdy4days` 于6月17日提交，旨在增强安全性和防止 Docker 隐式拉取。此修复涉及安全基线，不应被长期积压。
  - **链接**: [PR #2800](https://nanocoai/nanoclaw PR #2800)

- **`#2750`**: `fix: recover stale outbound.db journals after container kills`。该 PR 关联了两个严重 Issue (`#2516`, `#2640`)，旨在解决容器被杀后 `outbound.db` 陈旧日志的恢复问题。这也是一个持续了近一个月的关键修复。
  - **链接**: [PR #2750](https://nanocoai/nanoclaw PR #2750)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，这是根据您提供的 IronClaw GitHub 数据生成的 2026-07-15 项目动态日报。

---

# IronClaw 项目日报 | 2026-07-15

## 今日速览

今日，IronClaw 项目保持了极高的活跃度，主要聚焦于解决近期 QA 大扫除 (Bug Bash) 中暴露的致命 Bug 和稳定性问题，并对核心架构（尤其是扩展运行时）进行深度重构。
- **Bug 修复集中**: 大量关于“Slack 连接状态混乱”、“消息顺序错乱”以及“虚假成功状态”的 P2/P3 级 Bug 被报告并快速得到了 PR 修复，如 #6095 和 #6096 已经合并。
- **架构重构加速**: 团队正在持续推进“统一扩展模型” (NEA-25 Train A/B) 这一大型架构重构项目，今日有超过 5 个大尺寸的 XL 级别 PR 被创建或合并，表明项目底层能力正在发生质变。
- **CI/CD 与质量保证**: 维护者 `ilblackdragon` 提出了多个关于提升 CI 信号质量和修复流程（如 SLA 24 小时）的增强请求，显示团队正在从“发现 Bug”向“系统性防止 Bug 回归”进化。
- **新兴贡献者友好**: 今日有来自 `Anubhav-Koul` 的新贡献者提交了修复 Windows 平台兼容性的 PR #6098，项目对新人的接入支持良好。

**活跃度评估**: **极高**，处于快速迭代和修复问题的高强度开发周期。

## 版本发布

今日无新版本发布。

## 项目进展

尽管没有新版本发布，但项目在代码层面取得了实质性进展，主要体现在以下已合并/关闭的重要 PR 中：

- **修复 Slack 集成稳定性**: 修复了 Slack 扩展状态冲突 (#6091)、因 Token 吊销导致的错误提示不准确 (#5884/#6095) 等问题。这些修复直接提升了 Slack 作为关键沟通渠道的可靠性。
- **修复消息顺序错乱**: 通过 PR #6096 修复了多任务消息处理时的乱序问题 (#6047)，解决了在快速连续发送消息时，UI 显示和逻辑处理顺序颠倒的严重 Bug。
- **推广 Reborn 架构**: PR #5977 实现了技能（Skills）的懒加载，将全量技能提示词从约 7K tokens 压缩为仅加载相关摘要，显著优化了 `reborn` 架构的 Prompt 开销。
- **资源治理恢复**: 合并了来自 `BenKurrek` 的 PR #6089，修复了在 libSQL 数据库竞争条件下，资源管理器可能崩溃的问题，提升了系统在高并发下的鲁棒性。

这些修复和优化表明，项目在修复“关键但不优美”的 Bug 和推进“核心架构演进”（如扩展运行时）上保持着平衡。

## 社区热点

今日讨论最活跃的议题主要集中在 Bug 报告和架构设计讨论：

1.  **Issue #6105**: [Extension/channel lifecycle state-machine test (install→connect→disconnect→reconnect→uninstall) + put channel canary lanes on cron](https://github.com/nearai/ironclaw/issues/6105)
    - 这是由核心成员 `ilblackdragon` 发起的一个增强请求，旨在将扩展的生命周期测试自动化。该议题凝聚了社区对 Slack 等扩展频繁出现回归问题的共识，并提出了系统性的解决方案，立即获得了关注并产生了关联 PR #6110。

2.  **Issue #6108**: [Error fidelity: no generic failures, status must not lie (delivery-confirmed success, real test-connection), enforced by rule/check](https://github.com/nearai/ironclaw/issues/6108)
    - 该议题讨论的是“错误保真度”，即系统不应返回泛化的失败信息或谎报成功。它直击多个 Bug 的根本原因（如 #6099 `test-connection` 端点对无效配置返回成功），引发了社区对“可信赖系统”的强烈共鸣。

**分析**: 社区正在从报告单个 Bug 的行为模式，进化为讨论如何构建一套防止 Bug 泛滥的“基础设施”和“硬性规则”。用户的诉求不再是“修复这个问题”，而是“确保这类问题永远不再发生”。

## Bug 与稳定性

今日报告的 Bug 问题较为集中，风险等级高：

- **P2 - 严重:**
    - **#6092** [Slack conversation hangs in thinking state after reconnecting the integration](https://github.com/nearai/ironclaw/issues/6092): Slack 重连后无限卡死，严重影响用户体验。暂无明确修复 PR。
    - **#6091** [Slack extension reports conflicting connection states after disconnect](https://github.com/nearai/ironclaw/issues/6091): 状态混乱，核心是 UI 与后端状态不一致。已在 PR #6095 中得到部分修复。
    - **#6047** [Task messages are processed and displayed out of chronological order](https://github.com/nearai/ironclaw/issues/6047): 消息顺序错乱，任务处理逻辑存在缺陷。**已由 PR #6096 修复。**
- **P3 - 轻微/可用性问题:**
    - **#6099** [POST /llm/test-connection reports ok:true for an unreachable endpoint with an invalid key](https://github.com/nearai/ironclaw/issues/6099): “成功”状态误导。暂无明确修复 PR。
    - **#6087** [Extension catalog load failures are shown as an empty state](https://github.com/nearai/ironclaw/issues/6087): 网络故障被掩盖。暂无明确修复 PR。
    - **#6085** [Admin user details expose a broken Create token action](https://github.com/nearai/ironclaw/issues/6085): 管理面板的 UI 按钮指向一个不存在的后端接口。暂无明确修复 PR。

## 功能请求与路线图信号

今日收到的功能请求具有很强的工程导向性，显示了社区的成熟度：

- **#6105 (自动化集成测试)**: 提出要为 Slack 等关键扩展的生命周期创建自动化的状态机测试。关联 PR #6110 的创建表明此请求极可能被采纳，并成为 CI 流程的一部分。
- **#6106 (发布/部署门禁)**: 要求发布前必须通过引导烟雾测试和升级路径测试，以阻止像 #5966 那样的部署后崩溃问题。这表明社区对发布质量的严肃要求。
- **#6107 (模型输入兼容性测试)**: 建议构建一个真实世界工具调用参数的测试语料库，在 CI 中针对模式、解析器和安全检查进行回放，以彻底解决模型输入校验过于严格的问题。

**判断**: 这些请求不再是简单的“添加一个按钮”或“增加一个功能”，而是针对 **“开发流程缺陷”** 和 **“质量保障基础建设”** 提出的强烈需求。它们将极大地塑造 IronClaw 未来几个迭代周期的工程文化。

## 用户反馈摘要

从近期 Issue 评论中可以提炼出用户的核心痛点：

1.  **“我不信任你展示的状态”**: 无论是插件状态 (#6091)、连接测试结果 (#6099) 还是错误消息 (#6108)，用户多次反馈 UI 展示的状态与实际后端状态不符。**用户最不满的是系统“撒谎”**。
2.  **“Slack 让我们很头疼”**: 以 Slack 为代表的扩展集成是目前用户体验最大的不稳定来源。从断联到重连，再到消息卡死，频繁的回归让用户感到疲惫。
3.  **“错误消息毫无帮助”**: 当遇到“模型提供者不可用”等泛化错误时，用户无法进行任何故障排查。他们需要精确、可操作的信息（例如“你的 X 服务 Token 已过期”）。

**场景**: 一位 SaaS 管理员在配置自动汇报 Routine 时，Token 过期后遇到报错。系统没有明确提示 Token 问题，而是抛出一个笼统的错误，这导致用户需要花费额外的 Round-trip 与支持团队沟通才能发现问题根源（如 #5884）。

## 待处理积压

以下 Issue 和 PR 已存在一段时间，需要维护者关注：

1.  **[CLOSED] Issue #3483** [Package ironclaw-reborn in release artifacts](https://github.com/nearai/ironclaw/issues/3483): 该 Issue 在今日更新了评论，但标记为已关闭。其核心诉求是将 `ironclaw-reborn` 作为独立的发布包打包，这标志着 Reborn 架构即将进入稳定发布阶段，值得社区关注其后续的 Release 动作。
2.  **Issue #5884** [[bug_bash_P2] Routine loses credentials after external token revocation](https://github.com/nearai/ironclaw/issues/5884): 虽然是 P2 级别的严重问题，且关联的 PR #6095 已修复部分问题，但 Issue 本身还处于开放状态。维护者需确认所有相关场景是否都已覆盖，或是否需要补充文档说明。
3.  **PR #5598** [chore: release](https://github.com/nearai/ironclaw/pull/5598): 一个距今已有 12 天的 Release PR，且包含了破坏性变更 (`ironclaw_common` 和 `ironclaw_skills`)。该 PR 还处于开放状态，社区应密切关注它何时被合并，以便为新版本的破坏性变更做好准备。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，这是根据您提供的 GitHub 数据生成的 LobsterAI 项目动态日报。

---

# LobsterAI 项目动态日报 | 2026-07-15

## 今日速览

今日 LobsterAI 项目活跃度处于**中等偏低**水平。过去24小时内，项目未产生新议题或新拉取请求，所有更新均集中在“关闭”与“合并”环节。4个因长期未活动而标记为“stale”的旧 Issue 被批量关闭，3个 Pull Request 被合并，其中2个为针对核心模块 `openclaw` 的关键运行时修复。整体来看，项目团队近期侧重于**清理积压问题**与**稳定核心系统**，而非引入新功能。

## 版本发布

今日无新版本发布。

## 项目进展

今日合并的3个 PR 主要聚焦于 Bug 修复和稳定性提升，对项目整体而言是“向内夯实”的一天。

- **修复 `openclaw` 智能体循环问题 (PR #2331, #2330)**：
    - **内容**：这两个 PR 均由 `btc69m979y-dotcom` 提交并合并，核心目标是修复 `openclaw` 模块中 Agent 运行时的“工具循环”问题。当关键的“工具运行被中止”时，智能体会陷入无限循环。PR #2331 引入了双重锁定机制来终止 Agent 运行，同时保留正常的插件行为；PR #2330 则是一个更基础的后向移植修复，确保在工具执行和异步钩子边界处停止循环。
    - **影响**：这是对 Agent 运行机制的**关键修复**，直接关系到任务执行的可靠性和资源消耗，预计将显著减少偶发性任务挂死或无限循环的问题。
    - **链接**：[PR #2331](https://github.com/netease-youdao/LobsterAI/pull/2331)，[PR #2330](https://github.com/netease-youdao/LobsterAI/pull/2330)

- **修复协作模式下的滚动跳跃问题 (PR #2329)**：
    - **内容**：由 `liuzhq1986` 提交，修复了 `cowork`（协作）模式下，在流式输出过程中，用户手动滚动查看历史消息时，视图会被强制跳转回当前输出的问题。
    - **影响**：这是一个非常实用的体验优化，解决了用户在高频对话流式加载时干扰阅读的问题，提升了协作场景的使用流畅度。
    - **链接**：[PR #2329](https://github.com/netease-youdao/LobsterAI/pull/2329)

## 社区热点

今日没有产生高讨论度的新议题或 PR。榜单上的热点均为昨日事件。

- **讨论焦点**：昨日讨论最热烈的是 PR #2330 和 #2331，社区对 `openclaw` 的 Agent 循环问题表现出高度关注，合并后的修复方案也得到了核心贡献者的认可。这表明社区对 Agent 运行的稳定性和可靠性要求很高。
- **分析**：由于今日无新活跃议题，社区的热点趋势从“发现问题”转向了“评估修复”，项目需关注此轮修复后是否会产生新的回归问题。

## Bug 与稳定性

今日新报告的 Bug 数量为 **0**。所有在 2026-07-14 更新的 Issue 均为被标记为“**stale**”而关闭的旧 Bug。这表明社区报告的新问题较少，或问题在昨日已获得修复（如滚动跳跃问题）。以下是昨日更新的历史 Bug 列表（均已关闭）：

1.  **中度 - 邮箱配置测试连通性无响应 (Issue #1388)**：配置邮箱时，输入错误密码后点击“测试连通性”会导致前端界面无任何反馈，重启亦无法解决。**状态**: 已关闭（stale）。**暂无关联 PR**。
2.  **中度 - 定时任务偶现无法更新 (Issue #1390)**：编辑定时任务后，点击“更新任务”按钮无响应，为偶发问题。**状态**: 已关闭（stale）。**暂无关联 PR**。
3.  **轻度 - 会话分享长图内容不全 (Issue #1386)**：当聊天内容过长时，生成的分享长图存在内容缺失。**状态**: 已关闭（stale）。**暂无关联 PR**。
4.  **轻度 - 语言选择显示错误 (Issue #1389)**：界面语言设置为英文时，“中文”选项应显示为“Chinese”，但实际仍显示为中文。**状态**: 已关闭（stale）。**暂无关联 PR**。

## 功能请求与路线图信号

今日没有收到新的功能请求。鉴于团队今日主要精力在处理积压 Bug 的核心运行时修复，短期内路线图可能仍会侧重于稳定现有功能，而非快速扩展新特性。PR #2329 对协作模式体验的优化，可以看作是提升现有功能用户体验的路线图信号。

## 用户反馈摘要

从今日关闭的 Issue 评论中，我们可以提炼出用户的部分痛点：

- **配置易用性**：邮箱配置的“测试连通性”功能在失败时没有任何反馈，容易让用户陷入“操作后无反应”的迷茫状态，直接破坏了配置流程的可用性。**用户痛点**：功能需要明确的成功/失败状态提示。
- **任务可靠性**：定时任务更新无响应的偶发问题，虽然难以复现，但对依赖定时任务的核心用户来说，这种不确定性是严重的使用风险。**用户痛点**：核心依赖功能需要高可靠性，偶发Bug会动摇用户信心。
- **内容导出体验**：会话分享长图的内容不全是日志、报告等长内容用户的核心痛点。分享功能输出不完整，意味着功能“不可用”。**用户痛点**：导出或分享功能必须保证数据完整。

## 待处理积压

今日所有更新的 Issues 和 PRs 均已处理完毕。目前无长期未响应的关键积压项。建议维护者关注之前关闭的4个《Bug 与稳定性》中提到的历史 Bug，虽然因“stale”而关闭，但问题本身未得到实质性解决，未来仍有复现可能。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

好的，这是根据您提供的 Moltis 项目 GitHub 数据生成的 2026-07-15 项目动态日报。

---

## Moltis 项目动态日报 | 2026-07-15

### 1. 今日速览

今日 Moltis 项目活跃度较高，社区贡献与核心开发并行。过去24小时内，项目合并/关闭了8个 Pull Requests，并在新版本中引入了 GPT-5.6 模型支持等核心更新。同时，社区提交的 Bug 修复（特别是 MCP OAuth 和本地模型兼容性）已成功合并，显著提升了系统的稳定性和兼容性。目前仍有4个 PR 处于待合并状态，涉及依赖更新、新功能（如浏览器自动截图）和功能扩展，项目整体处于稳步推进阶段。

### 2. 版本发布

*   **新版本：** `20260714.11`
    *   **链接:** [moltis-org/moltis Releases](https://github.com/moltis-org/moltis/releases)
    *   **内容推测:** 该版本很可能包含了今日合并的多个重要修复和功能，如 GPT-5.6 模型支持、对本地模型（如 Gemma 4, oMLX）的兼容性修复、以及 MCP OAuth 的修复。建议用户及时更新。

### 3. 项目进展

今日项目通过合并以下关键 PR，在功能性和稳定性上均有显著推进：

*   **模型支持扩展:**
    *   **PR #1146 [CLOSED]: [Add GPT-5.6 model support](https://github.com/moltis-org/moltis/pull/1146)** - 已合并。正式注册了 GPT-5.6 Sol, Terra 和 Luna 模型，更新了上下文窗口限制，并替换了过时的模型引用。这是对最新大模型生态的快速跟进。
*   **稳定性和健壮性修复:**
    *   **PR #1120 [CLOSED]: [fix(mcp): use direct fetch for resource_metadata URL from WWW-Authenticate](https://github.com/moltis-org/moltis/pull/1120)** - 已合并。修复了与 Notion, Linear 等 MCP 服务器进行 OAuth 授权时因 `resource_metadata` 参数导致的 `invalid_target` 错误，解决了关键的集成阻塞问题。
    *   **PR #1098 [CLOSED]: [fix(browser): tolerate null optional params in browser tool calls](https://github.com/moltis-org/moltis/pull/1098)** 和 **PR #1136 [CLOSED]: [fix(agents): coerce stringified scalar tool args before validation](https://github.com/moltis-org/moltis/pull/1136)** - 均已合并。这两项修复专门针对 Gemma 4 等本地小型模型，解决了它们可能传递空值或字符串化参数导致浏览器工具调用失败的问题，大大提升了与本地模型的兼容性。
    *   **PR #1139 [CLOSED]: [fix(gateway): don't force-enable matrix-sdk via the metrics feature](https://github.com/moltis-org/moltis/pull/1139)** - 已合并。修复了构建依赖的 Bug，避免在开启 `metrics` 功能时强制拉取整个 `matrix-sdk`，优化了构建体积和依赖管理。
*   **数据持久化优化:**
    *   **PR #1089 [CLOSED]: [Cap persisted tool results before rehydration](https://github.com/moltis-org/moltis/pull/1089)** - 已合并。在会话历史恢复时对工具结果进行容量限制，防止因数据过大导致的问题，提升了会话恢复的稳健性。

### 4. 社区热点

*   **热点 Issues:**
    *   **Issues #1102 [Feature: Add FunASR/SenseVoice as local STT engine](https://github.com/moltis-org/moltis/issues/1102):** 该功能请求虽然创建已久，但在昨日（7月14日）获得了许可证和能力澄清的重要更新。这表明有用户或开发者正在积极推动此功能的落地，并对其实现细节（如 FunASR 工具包与单一检查点的区别）进行深入讨论。社区对本地语音识别引擎的需求依然强烈。
    *   **Issues #1119 [CLOSED] [[Bug]: MCP OAuth fails with `invalid_target`](https://github.com/moltis-org/moltis/issues/1119):** 此 Bug 报告者同时也是 PR #1120 的作者，形成了高效的“报告-修复”闭环。该问题因影响了 Notion 和 Linear 等主流 MCP 服务器的集成而备受关注，从报告到修复解决了约一个月，其关闭标志着项目对 MCP 生态兼容性的重要改进。

### 5. Bug 与稳定性

*   **已修复 - 严重:**
    *   **Issue #1119 [Bug]: MCP OAuth fails with `invalid_target`** - *影响范围: Notion, Linear 等 MCP 集成。* **已通过 PR #1120 修复。**
*   **已修复 - 中等:**
    *   **Issue (来自 PR #1098): 浏览器工具调用因空参数失败** - *影响范围: 使用 Gemma 4 等本地模型的用户。* **已通过 PR #1098 修复。**
    *   **Issue (来自 PR #1136): 标量类型参数被字符串化导致验证失败** - *影响范围: 使用 Gemma 4, oMLX 等本地模型的用户。* **已通过 PR #1136 修复。**
*   **新 Bug 报告（进行中）:**
    *   **Issue #1132 [Bug]: "main" session can't be deleted/archived** - *严重程度: 中等。* 用户无法删除或归档默认的主会话，这可能对会话管理造成不便。目前尚无对应的 Fix PR，需关注。

### 6. 功能请求与路线图信号

*   **待纳入版本:**
    *   **Issue #1102 [Feature: Add FunASR/SenseVoice as local STT engine](https://github.com/moltis-org/moltis/issues/1102):** 这是社区呼声很高的功能，近期的讨论提示其实现可能提上日程。结合项目此前对本地模型的支持力度，此功能很可能会被纳入未来版本。
    *   **PR #1124 [OPEN]: [Add context command support for chat turns](https://github.com/moltis-org/moltis/pull/1124):** 该 PR 提出让代理在每次对话回合前执行命令并将输出注入上下文。这是一个强大的功能，允许部署自定义的动态上下文注入，可能被用于集成外部数据源或状态。鉴于其已存在一个月且更新活跃，有较高可能性被合并。
*   **未来路线图信号:**
    *   **PR #1135 [OPEN]: [browser: optional auto-screenshot after each action](https://github.com/moltis-org/moltis/pull/1135):** 实现浏览器自动截图功能，可以显著提升用户体验，特别是在调试或记录自动化流程时。该功能正在开发中，是浏览器自动化能力增强的重要信号。
    *   **PR #1093 [OPEN]: [Add channel activity log visibility settings](https://github.com/moltis-org/moltis/pull/1093):** 增加对频道活动日志的细粒度权限控制，表明项目正在向更成熟的企业级协作特性迈进。

### 7. 用户反馈摘要

*   **主要痛点（已解决）:** 用户反馈在与 Notion, Linear 等 MCP 服务集成时遇到 OAuth 失败 (`invalid_target`) 问题（Issue #1119）。此问题已于今日通过 PR #1120 修复，解决了集成阻塞。
*   **模型兼容性需求:** 多位用户（或开发者）通过提交 PR #1098 和 PR #1136 反映了本地小模型（如 Gemma 4, oMLX）存在 JSON 参数格式错误的问题。这表明社区中有相当比例的用户正在尝试或依赖本地模型运行，并且对 Moltis 与这些模型的兼容性有较高期待。相关修复已在今日合并。
*   **功能期待:** Issue #1102 的持续活跃表明，社区对集成高质量的本地语音转文字 (STT) 引擎（如 FunASR/SenseVoice）有强烈需求，期望在不依赖云端服务的情况下实现语音交互。

### 8. 待处理积压

以下为长期未响应或存在潜在风险的重要 Issue/PR，提醒维护者关注：

*   **Issue #1132 [[Bug]: "main" session can't be deleted/archived](https://github.com/moltis-org/moltis/issues/1132):** 报告于2026年6月18日，至今已近一个月，尚无关联的 Fix PR 或维护者响应。此问题影响基本的会话管理功能，建议优先评估并分配。
*   **PR #1124 [OPEN]: [Add context command support for chat turns](https://github.com/moltis-org/moltis/pull/1124):** 创建于6月15日，是一个功能强大的新特性，但已等待合并超过一个月。为避免分支冲突和社区挫败感，建议维护者尽快进行审查和决策。
*   **PR #1093 [OPEN]: [Add channel activity log visibility settings](https://github.com/moltis-org/moltis/pull/1093):** 此PR创建于6月3日，时间较早，且涉及安全隐私相关的权限控制，应被视为重要功能。建议尽快审查，避免长期搁置。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 CoPaw 项目数据，我为您生成了 2026-07-15 的项目动态日报。

---

# CoPaw 项目动态日报 | 2026-07-15

## 1. 今日速览

今日 CoPaw 项目活跃度极高，社区反馈和贡献者响应均非常积极。过去24小时内，项目处理了大量问题（50条 Issues 更新）和代码提交（50条 PR 更新），显示出项目在 v2.0.0 大版本发布后进入了密集的迭代优化期。**核心焦点集中在修复 v2.0.0 引入的稳定性与兼容性问题**，特别是围绕“沙箱/治理系统”、“上下文压缩（Scroll）”和“内存系统”等关键模块。同时，社区贡献者也开始提交特性（如 Zalo 频道集成）和测试改进，项目健康度良好，正向更为稳定的方向迈进。

## 2. 版本发布

- **v2.0.0.post2**: 今日发布了一个小版本，主要包含以下更新：
    - **新功能**: 增加对更敏感文件的识别，并允许全局读取配置。
    - **依赖更新**: 更新了 `agentscope` 核心依赖包。
    - **测试**: 新增了运行时、安全性和安装相关的回归测试。
    - **迁移注意事项**: 本次为修复性小版本更新，无破坏性变更。建议所有 v2.0.0 用户尽快升级以获取修复。

    **相关链接**: [Release v2.0.0.post2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0.post2)

## 3. 项目进展

过去24小时内，项目在修复关键 Bug 和夯实基础方面取得了显著进展：

- **上下文压缩问题修复**: **[PR #6108](https://github.com/agentscope-ai/QwenPaw/pull/6108)** 修复了使用 DeepSeek 等 API 时，上下文压缩可能破坏消息顺序（tool result 与 assistant call 不匹配）导致会话永久损坏的严重问题。
- **沙箱与治理系统优化**:
    - **[PR #6109](https://github.com/agentscope-ai/QwenPaw/pull/6109)** 修复了当 `sandbox_enabled` 设置为 `false` 时，OFF 模式沙箱路径仍强制使用沙箱的问题，尊重了用户的配置开关。
- **内存系统增强**: **[PR #6098](https://github.com/agentscope-ai/QwenPaw/pull/6098)** 合入，显著提升了 ReMe（长期记忆）系统的稳定性和可观测性，特别修复了中文文本在部分 Embedding 模型上触发错误的问题。
- **CI/CD 与测试加固**:
    - **[PR #6103](https://github.com/agentscope-ai/QwenPaw/pull/6103)** 提升了测试覆盖率基线（后端 45%，前端 22%），确保代码质量不会滑坡。
    - **[PR #6102](https://github.com/agentscope-ai/QwenPaw/pull/6102)** 引入了边界测试，以捕获特定测试在独立运行时通过、但全量测试时失败的模式。

## 4. 社区热点

今日最受关注的议题主要围绕 v2.0.0 版本带来的严重回归问题，反映出社区对稳定性的强烈诉求。

1.  **Windows 沙箱问题** [Issue #5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) (已关闭)
    - **讨论热度**: 9 条评论，深度分析了 pwsh 窗口递归爆炸、内存泄漏、沙箱无法关闭等多个严重问题。用户情绪激动，问题影响了工具的基本可用性。
    - **核心诉求**: 希望从根本上解决 Windows 沙箱对系统环境的破坏性影响。类似问题还包括 [Issue #5829](https://github.com/agentscope-ai/QwenPaw/issues/5829)（污染系统目录导致其他应用崩溃）。

2.  **“搜索记忆”循环** [Issue #6113](https://github.com/agentscope-ai/QwenPaw/issues/6113) (开放中)
    - **讨论热度**: 5 条评论，用户反馈 v2.0 版本每次提问都会触发无休止的记忆检索，严重影响使用体验，并直言 “好烦”。
    - **核心诉求**: 希望优化记忆检索的逻辑，避免过度检索导致的性能问题和用户交互中断。

3.  **审批系统路由错误** [Issue #6020](https://github.com/agentscope-ai/QwenPaw/issues/6020) (已关闭)
    - **讨论热度**: 4 条评论，暴露了钉钉渠道审批推送到桌面端的 Bug，以及 `approval_level: OFF` 配置失效的问题。
    - **核心诉求**: 要求审批流程在各渠道间的正确路由，并严格遵守用户的安全配置。

## 5. Bug 与稳定性

今日报告的 Bug 主要集中在 v2.0.0 版本的回归问题上，大部分已有关联的修复 PR。

| 严重程度 | Bug 描述（Issue 编号） | 状态 | 关联修复 PR |
| :--- | :--- | :--- | :--- |
| **严重** | Windows 沙箱爆炸、内存封顶 ([#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951)) | **已关闭** | - |
| **严重** | 上下文压缩破坏消息格式，导致 DeepSeek API 400 错误 ([#6077](https://github.com/agentscope-ai/QwenPaw/issues/6077), [#6009](https://github.com/agentscope-ai/QwenPaw/issues/6009)) | **已关闭** | [#6108](https://github.com/agentscope-ai/QwenPaw/pull/6108) |
| **高** | 升级后 Agent 配置被覆盖 / 工作区丢失 ([#6100](https://github.com/agentscope-ai/QwenPaw/issues/6100)) | **开放中** | - |
| **高** | 审批路由错误 & `approval_level: OFF` 失效 ([#6020](https://github.com/agentscope-ai/QwenPaw/issues/6020)) | **已关闭** | - |
| **中** | 自动记忆模块报 `ModuleNotFoundError` ([#5952](https://github.com/agentscope-ai/QwenPaw/issues/5952)) | **已关闭** | - |
| **中** | Frozen 构建丢失关键模块，导致 Glob 工具崩溃 ([#6097](https://github.com/agentscope-ai/QwenPaw/issues/6097)) | **已关闭** | - |
| **中** | 消息队列功能回归 ([#6088](https://github.com/agentscope-ai/QwenPaw/issues/6088)) | **已关闭** | - |

## 6. 功能请求与路线图信号

社区在反馈 Bug 的同时，也提出了高价值的功能请求，部分已有关联 PR 或获得维护者关注：

- **“实时注入”用户消息** [Issue #6087](https://github.com/agentscope-ai/QwenPaw/issues/6087): 用户希望在 Agent 迭代循环中能实时插入新消息以纠正方向，避免计算浪费。这代表了提升人机协同效率的重要方向，可能影响未来交互设计。
- **更灵活的工具调用结果控制** [Issue #5976](https://github.com/agentscope-ai/QwenPaw/issues/5976): 用户希望可以独立控制工具调用参数和结果的发送，并支持结果截断，以优化频道内的信息展示，降低噪音。
- **免认证主机支持 CIDR 段** [Issue #6048](https://github.com/agentscope-ai/QwenPaw/issues/6048): 用户希望安全白名单能支持网段配置，以覆盖更广泛的企业内部网络场景。此功能请求具有较高的企业级价值。
- **Zalo 频道集成**: 社区贡献者提交了 Zalo Bot 频道的 PR ([#6118](https://github.com/agentscope-ai/QwenPaw/pull/6118)， [#6112](https://github.com/agentscope-ai/QwenPaw/pull/6112))，表明项目在东南亚市场的应用潜力正在被社区挖掘。`#6112` 已合入，`#6118` 是新提交的优化版本。

## 7. 用户反馈摘要

从今日的 Issues 评论中，可以提炼出以下真实用户反馈：

- **痛点**:
    - **“几乎不可用”**: 有用户用此词形容升级到 v2.0.0 后遇到的 Windows 沙箱问题。
    - **“好烦啊”**: 用户直接表达了对“搜索记忆”循环功能的失望和烦躁情绪。
    - **“要崩溃了”**: 用户对“说不了两句话会话就挂”的问题表达了强烈的挫败感。
    - **配置不生效**: 用户感到困惑，当明确设置了 `approval_level: OFF` 后，工具仍强制进行审批。
- **使用场景**:
    - **企业办公**: 用户通过钉钉、飞书等渠道使用 CoPaw 进行自动化工作流。
    - **桌面自动化**: 用户试图使用 Agent 运行 shell 命令或 Electron 应用（如 Obsidian CLI），但被沙箱问题阻塞。
    - **模型多样性**: 用户广泛尝试 DeepSeek、本地 Ollama 等多种模型，也对稳定性提出了更高要求。
- **满意/不满意**:
    - 用户对 v2.0.0 带来的低层架构变更和强大潜力是认可的，但对变更引发的稳定性回退感到极度不满。
    - 当问题能很快被维护者响应并关闭（如 #5951）时，用户情绪会得到缓解。

## 8. 待处理积压

- **重大问题**: [Issue #6100](https://github.com/agentscope-ai/QwenPaw/issues/6100) (开放中) - 升级后 Agent 配置丢失，影响用户会话连续性，建议优先处理。
- **长期未响应**: [Issue #5333](https://github.com/agentscope-ai/QwenPaw/issues/5333) (已关闭，但讨论持续到今日) - Agent 卡住且界面无响应的问题，虽然标记为已关闭，但讨论中有新情况，建议重新评估。
- **等待合入的长期 PR**:
    - **[PR #5187](https://github.com/agentscope-ai/QwenPaw/pull/5187)** (feat: Windows desktop GUI automation) - 这是一个重要的新功能 PR，已存在一个月，目前仍为开放状态。鉴于 Windows 沙箱问题多，此功能可能导致更多复杂交互，建议维护者评估是否与当前稳定性目标冲突，或推动其合入并加强测试。
    - **[PR #5731](https://github.com/agentscope-ai/QwenPaw/pull/5731)** (fix: honor per-request model override) - 一个简化用户操作的修复 PR，已等待近两周，建议评估合并。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 ZeroClaw 项目的 AI 智能体与个人 AI 助手领域开源项目分析师，我已根据您提供的 GitHub 数据，生成以下项目动态日报。

---

# ZeroClaw 项目动态日报 | 2026-07-15

## 1. 今日速览

ZeroClaw 项目在过去24小时内展现出极高的活跃度，核心团队正在密集推进 **SOP (标准操作程序) 引擎** 和 **Hindsight 记忆系统** 两大里程碑。尽管未有新版本发布，但庞大的 PR 队列（50条，其中 34 条待合并）和不断涌现的 Issue 讨论（29条）表明开发正处于高速迭代期。社区讨论焦点集中在**安全**（RBAC、Landlock、工具门控）与**运维**（SOP 联动、OIDC、OpenTelemetry）两大方向。项目健康状况良好，但大量待合并的 PR 和优先级高的 Bug 提示维护者需要加速评审与整合。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日无新合并的 PR 或关闭的版本发布，但过去24小时内关闭了 16 个 PR 和 6 个 Issue，表明团队仍在高效处理技术债务。重点推进的领域包括：

- **文档修复与优化**：PR #9077 和 #9076 修复了`channel start`和`zeroclaw channel doctor`等 CLI 命令的错误文档示例，提升了用户初次上手的顺畅度。
- **核心 Bug 修复**：PR #9029 （`needs-author-action`）修复了 OpenAI 兼容提供商的视觉能力配置问题；PR #9018 （已合入）修复了`config-dir`在区域检测中的优先级问题。
- **大型功能分支推进**：多个大型 PR（如 `feat(sop)` #8979，`feat(plugins)` #8923，`feat(gateway)` #8862）正在等待作者跟进或进一步评审，这些是 SOP 和 WASM 通道插件化的关键组成部分。

## 4. 社区热点

今日最受关注的讨论集中在以下议题：

- **权限与安全隔离 (Issue #5982)**：关于为多租户部署添加“每发送者 RBAC”的功能请求获得了 10 条评论。社区对如何在一个实例中隔离不同用户（客户、运维人员、开发者）的工作区和工具集表现出强烈兴趣，这直接关系到 ZeroClaw 在企业级场景的落地。背后反映了用户对 **“单实例、多租户”** 部署模式的安全性与管理细粒度的高度需求。
    - **链接**：[Issue #5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)
- **Slack 线程上下文补全 (Issue #6055)**：该功能请求旨在当机器人在 Slack 线程中第一次被 @ 时，自动拉取历史线程内容，获得 7 条评论。用户对 #5992 中“严格 @ 提及”模式的不便提出了改善期望，这体现了用户对 **“无缝上下文”** 和 **“智能对话记忆”** 的追求。
    - **链接**：[Issue #6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055)
- **Hindsight 记忆栈大合并 (PR #9064-#9069)**：由 `logical-and` 提交的 7 个堆叠式 PR（堆 2/7 至堆 7/7 以及一个最终修复）构成了 Hindsight 记忆系统的全面升级。这些 PR 涵盖了共享/系统记忆层级、召回注入调优、数据持久化与去重、以及仪表盘显示。虽然评论不多，但这明显是项目内部推进的重大工程，表明团队正在将 Hindsight 整合为默认的记忆后端。

## 5. Bug 与稳定性

过去24小时内报告的 Bug 主要集中在以下几个方面，按严重程度排列：

- **S0 - 数据丢失/安全风险**：
    - **execute_pipeline 绕过工具门控 (Issue #7947)**：严重性最高，核心问题在于管道执行的子工具步骤绕过了每个 Agent 的 `ToolAccessPolicy`，导致“混淆代理”攻击可能。目前标记为 `status:in-progress`，**尚无直接修复 PR**。
        - **链接**：[Issue #7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947)

- **S1 - 工作流程阻塞**：
    - **SOP 在 Web 仪表盘不可用 (Issue #8563)**：用户无法通过 Web 聊天界面使用配置好的 SOP，直接阻塞了通过 Web 端进行 SOP 驱动的工作流。**尚无直接修复 PR**。
        - **链接**：[Issue #8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563)
    - **malformed 工具调用参数导致空回复 (Issue #8675)**：OpenRouter/OpenAI 等提供商的工具调用参数未经验证即发送，导致 400 错误和空回复。**尚无直接修复 PR**。
        - **链接**：[Issue #8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675)
    - **channel-line 被 CI 覆盖遗漏 (Issue #9052)**：新的 `channel-line` 功能特性未被包含在 CI 测试覆盖范围内，可能导致回归。**尚无直接修复 PR**。
        - **链接**：[Issue #9052](https://github.com/zeroclaw-labs/zeroclaw/issues/9052)

- **S2 - 降级行为**：
    - **Landlock 沙箱阻止 Shell 工具 (Issue #8973)**：Landlock 安全模块的启用导致 Shell 工具无法访问 `/dev/null`，影响 Fedora 用户。**尚无直接修复 PR**。
        - **链接**：[Issue #8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973)
    - **Provider 失败诊断信息被通用重试错误掩盖 (Issue #9001)**：不同原因导致的 Provider 失败（如 LM Studio 未启动、Ollama 模型未加载）统一显示为“所有模型失败”，增加了调试难度。
        - **链接**：[Issue #9001](https://github.com/zeroclaw-labs/zeroclaw/issues/9001)

## 6. 功能请求与路线图信号

- **多租户 RBAC (Issue #5982)**：这是实现企业级多租户部署的核心需求，已得到社区认可（10条评论），很可能被纳入后续的“多用户里程碑”。
- **对话历史与长短期记忆分离 (Issue #9048)**：这个 RFC 直接指向当前架构中会话历史与长短期记忆混淆的问题，其解决是提升记忆系统清晰度和性能的关键，很可能被接收。
- **OIDC 与统一身份 (Issue #8289)**：该跟踪器（Tracker）定义了“OIDC 里程碑”，旨在实现插件化身份验证和统一主体模型，是 RBAC 和权限隔离的基础。
- **SOP 路由与多阶段 SOP (Issue #8719)**：允许 `when` 条件为 false 时进入下一步而非结束运行，是实现复杂、多阶段工作流（如审批循环后接最终步骤）的关键，表明社区对 SOP 引擎有更高级的编排需求。

## 7. 用户反馈摘要

从评论和分析中，可以提炼出以下真实的用户声音：

- **安全隔离是核心痛点**：Issue #5982 中，用户（`metalmon`）明确表示需要“隔离的工作区、工具集、速率限制和系统提示”，反映了在多用户共享实例场景下的真实需求。
- **文档与实践存在偏差**：多个 Issue（#6685, #6689, #8587, #9076）均指出文档中描述的功能在实际上并不工作或文档示例有误。这表明用户确实在按文档操作，并遇到了“文档-实现”不一致的问题，这对新手用户尤其不友好。
- **SOP 功能强大但“难用”**：Issue #8587 直言“SOP 引擎是个很棒的概念，但当前文档缺乏足够的语法示例”，用户（`susyabashti`）在尝试配置后表示“无法显示”。这揭示了强大的新功能需要配套更完善的用户教育材料。

## 8. 待处理积压

以下是一些长期未响应或等待核心维护者关注的重要 Issue 和 PR：

- **重要功能请求积压**：
    - **Cron 任务预钩子 (Issue #5607)**：自 4月10日创建，已标记为`status:blocked`，等待实现。
    - **SOP 控制平面 5/5 里程碑 (Issue #8288)**：大型跟踪器，协调多项 PR，当前仍处于开放状态。
- **长期未响应的 PR**：
    - **WASM 插件 TCP/TLS 支持 (PR #8923)**：大型功能 PR，已标记`needs-author-action`，作者需以 `git merge` 而非 `git rebase` 方式更新。
    - **代理工具门控绕过修复 (PR #8353)**：小型修复 PR，已标记`needs-author-action`，作者需要回复审查意见并更新提交。
    - **OpenTelemetry 跨轮次关联 RFC (Issue #8933)**：架构级 RFC，已标记`needs-author-action`，作者需基于反馈更新提案。
- **提醒**：多个“SOP HTTP Fan-in”、“SOP Cron 触发”等功能的 Bug 和功能请求（如 #6685、#6686）已被发现数月，且核心组件的 SOP 引擎正在快速发展中，**强烈建议维护者评审并标记这些 Issue 的状态**，以避免重复工作或与新版设计冲突。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*