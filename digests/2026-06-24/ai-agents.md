# OpenClaw 生态日报 2026-06-24

> Issues: 188 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-24 00:23 UTC

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

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 OpenClaw 项目 2026-06-24 的 GitHub 数据，我为您生成了以下项目动态日报。

---

### OpenClaw 项目动态日报 | 2026-06-24

---

### 1. 今日速览

OpenClaw 项目在 2026-06-24 保持了极高的活跃度，24 小时内处理了188条 Issue 和500条 PR，显示出社区参与度与开发强度均处于高位。尽管今日无新版本发布，但核心团队正在集中力量解决多个 P1 级别的关键稳定性问题，尤其是围绕**会话状态持久化**、**消息投递可靠性**以及**第三方模型兼容性**。项目整体处于一个“高强度维护与工程重构并行”的阶段，旨在解决因功能快速迭代而积累的技术债务和边界Case。

### 2. 版本发布

今日无新版本发布。

### 3. 项目进展

今日合并/关闭了31条 PR，展示了项目在多个维度上的推进。

- **关键修复关闭**：`#90991`（Cron 触发器污染全局状态）和 `#90404`（ACP TypeError）等 P1 级的严重 Bug 已被关闭，表明团队正在快速响应并修复影响用户正常使用的关键问题。
- **架构迁移推进**：PR `#96225` 将启动引导会话映射迁移至访问器（accessor），这与 Core Issue `#88838`（追踪核心会话/转录 SQLite 迁移）紧密相关，表明项目正在有条不紊地推进核心组件重构。
- **通道稳定性增强**：针对 Telegram 通道的多个 PR（如 `#95903` 修复长消息截断、`#96109` 修复内联按钮）今日处于开放状态，但已获得处理，表明项目正在集中精力解决近期版本中信道通信的回归问题。

**项目整体向前迈进了**：通过修复高频 Bug 和持续推进架构重构，项目的核心稳定性和可维护性得到提升。如果 `#88838` 的迁移成功，将显著改善会话持久化和状态恢复的能力。

### 4. 社区热点

今日讨论热度集中在少数几个高评论量的议题上，反映了用户对系统稳定性和响应延迟的普遍关切。

1.  **Issue #88838: [🎯 35 条评论] 核心会话/转录 SQLite 迁移**
    - **链接**: [OpenClaw Issue #88838](https://github.com/openclaw/openclaw/issues/88838)
    - **分析**: 这是当前最受关注的架构级议题。社区成员和开发者正在深入讨论如何通过“访问器接缝（accessor seam）”将核心会话和转录存储从文件系统平滑迁移到 SQLite。这个讨论的活跃度表明，用户对当前文件系统存储的性能和可靠性有迫切改进需求，而社区对架构层面的重大变更也保持了高度关注和积极参与。

2.  **Issue #96148: [📈 17 条评论] 追踪 iMessage 消息回复延迟**
    - **链接**: [OpenClaw Issue #96148](https://github.com/openclaw/openclaw/issues/96148)
    - **分析**: 用户对 iMessage 通道的响应速度非常敏感。该议题跟踪了相关延迟仪表化和性能调查，社区正在积极贡献数据点和本地测试结果，以帮助开发者定位和优化 iMessage 的慢回复问题。这反映出即使在 AI 助手领域，即时通讯通道的低延迟依然是核心体验。

3.  **Issue #92201: [💬 14 条评论] Embedded Runner 中 Anthropic thinking 签名无效**
    - **链接**: [OpenClaw Issue #92201](https://github.com/openclaw/openclaw/issues/92201)
    - **分析**: 这是一个复杂的 P1 级 Bug，涉及 Anthropic 专有的 `thinking` 块在回放时的签名验证问题。评论区的讨论表明，这个 Bug 对使用 Anthropic 高推理能力模型的用户影响很大，会导致有价值的思考过程丢失，且由于错误信息被泛化，诊断十分困难。用户对问题背后的技术细节和可能的修复方案表现出深度参与。

### 5. Bug 与稳定性

今日报告的 Bug 主要集中在**消息投递失败、会话卡死、第三方模型兼容**三个方面。

- **严重 (P1)**
    - **`#96148` (iMessage 延迟)**: 追踪 iMessage 回复延迟问题，严重影响用户体验。**无 fix PR**。
    - **`#94228` (Anthropic thinking 块导致线程崩溃)**: 在原生 Anthropic 路径下，历史 `thinking` 块回放会永久性破坏长线程工具使用会话。**有 open PR `#95621` 部分相关**。
    - **`#95833` (子代理锁定文件)**: 子代理中止后未能释放 `.jsonl.lock` 文件，导致会话永久性损坏。**有 open PR**。
    - **`#92201` (Anthropic thinking 签名无效)**: 作为已知的稳定性隐患，虽然今天评论不再新增，但仍是一个未解决的严重问题。**无 fix PR**。
    - **`#88870` (会话恢复误杀长任务)**: 粘滞会话恢复机制会误杀正在长时间工作的正常 agent 运行。**无 fix PR**。

- **中等 (P2)**
    - **`#95136` (提供商标识符重命名无迁移)**: `openai-codex` 重命名为 `openai` 导致 OAuth 配置被孤立。**有 open PR**。
    - **`#94939` (6.x 状态迁移后渠道对话存储损坏)**: 升级后渠道对话 SQLite 数据库为 0 字节，导致消息发送失败。**无 fix PR**，此为回归问题。
    - **`#94251` (Ollama 远程提供程序无法流式传输)**: 使用 Ollama 远程提供程序时，聊天会话卡在 `model_call:started` 状态。**无 fix PR**。

- **回归**
    - **`#95554` (Telegram 富消息渲染错乱)**: v2026.6.9 版本中，启用 Telegram 富消息后段落分隔和表格渲染出错。**有 open PR `#95822`**。
    - **`#96118` (Dreaming 功能失效)**: v2026.6.9 中，`Dreaming` 功能运行但无法促进记忆，UI 显示异常。**无 fix PR**。

### 6. 功能请求与路线图信号

用户今日提出的功能请求指向更灵活的架构、更好的开发者体验和更安全的网关配置。

- **高优先级信号**
    - **`#96156` (MCP 作为压缩提供者)**: 允许将 `agents.defaults.compaction.provider` 配置指向 MCP 服务器，以利用任何 MCP 工具进行会话压缩。这若实现，将极大拓展 OpenClaw 的可扩展性。**有潜力被纳入下一版本**。
    - **`#93068` (全局 SSRF 策略配置)**: 提议添加网关级别的 `allowRfc2544BenchmarkRange` 配置，统一管理各个子系统的防火墙策略。**有 open PR**，安全相关，优先级可能较高。
    - **`#93422` (会话命名 `/label` 命令)**: 为 WebChat 添加 `/label` 命令，使用户能更方便地标识和管理多个会话。**有 open PR**，需求明确，实现相对简单。

- **中优先级信号**
    - **`#92314` (工作看板卡片删除API)**: 请求为 Workboard 插件添加删除卡片的功能。**有 open PR**，需求合理，对项目管理流程闭环有好处。
    - **`#91945` (升级 Cloudflare AI Gateway 提供程序)**: 要求将内置的 Cloudflare 提供程序升级到其新的 REST API。**有 open PR**，这代表了与外部服务集成时的维护需求。

### 7. 用户反馈摘要

- **痛点**
    - **“消息丢了”**: 多起 Issue (`#86034`, `#88657`, `#95566`) 都描述了消息投递失败、消息错序或生产者明明成功但用户看不到结果的情况，这严重破坏了对话的连续性和可信度。
    - **“会话卡死了”**: `#95833` 和 `#92201` 描述了会话因文件锁或API错误导致永久性不可用，用户只能手动清理或重启，体验极差。`#88870` 中用户反馈合法任务被错误中止也加剧了对系统可靠性的担忧。
    - **“底层变慢了”**: `#92057` (网关在多会话下缓慢) 和 `#94518` (缓存命中率下降) 反映了系统在扩展或升级后出现的性能退化，用户感到整体响应变慢。
    - **“升级有风险”**: `#94939` (升级导致数据库空) 和 `#95554` (升级导致渲染错误) 等回归问题，让社区对快速迭代版本的安全性产生顾虑。用户在 `#68780` 中也提到首次用户看到的警告信息不够友好。

- **场景与期望**
    - 用户正广泛将 OpenClaw 用于更复杂的任务，如 `#92043` 中提到的长时间压缩、`#79047` 中跨后端模型切换、以及 `#90916` 中多话题管理会话，这些对系统的健壮性和状态管理提出了更高要求。
    - 用户期望模型间的切换、升级和数据迁移等操作应该是**平滑且有通知**的，如 `#95136` 中指出的提供商标识符变更没有警告和迁移路径。

### 8. 待处理积压

以下 Issue 和 PR 已存在一段时间，部分带有 `stale` 标签或处于“等待维护者审查”状态，需要关注：

-   **长期悬而未决的重要 Issue**
    -   **`#42840`** [Feature Request: 添加 MathJax/LaTeX 支持]: 创建于 3月，获得 7 个 👍，但标签为 `needs-product-decision`，至今未有明确结论。对于学术或科技用户是刚需。
    -   **`#38520`** [Feature: 预压缩代理通知]: 创建于 3月，提出了处理长时间工作流时压缩安全性的问题，但长期处于 `needs-maintainer-review` 状态。
    -   **`#46548`** [工具错误信息应包含失败原因]: 用户重复提出的体验改进点，但一直卡在 `needs-product-decision`，改进此点能极大提升调试体验。
    -   **`#49931`** [可配置的Shell (exec)]: 处理跨平台 shell 兼容性问题，对 Windows 用户至关重要，但状态久未更新。

-   **长期未响应的 PR**
    -   **`#75076`** (Harden Control UI auth): 巨大的安全增强 PR，但标签包括 `status: 📣 needs proof` 和 `triage: needs-real-behavior-proof`，仅证明缺失就可能使其无限期推迟。
    -   **`#63919`** (Wire coding tools into HTTP surface): 极具价值的 HTTP 接口拓展，但状态为 `⏳ waiting on author`，作者可能需要帮助才能完成。
    -   **`#56674`** (Return reasoning content in /v1/responses): 对于开放 API 场景十分关键，同样由于 `status: 📣 needs proof` 而处于停滞状态。

**分析师注**：团队应优先审查并回应那些带有 `needs-product-decision` 和 `needs-maintainer-review` 标签的积压 Issue，以避免社区宝贵的反馈和建议石沉大海，这有助于维护社区的积极性和贡献意愿。同时，推动高价值的遗留 PR（如 `#75076` 和 `#63919`）进入正式审查通道，将对项目长期发展产生积极影响。

---

## 横向生态对比

好的，作为AI智能体与个人AI助手领域开源项目的资深技术分析师，基于您提供的2026年6月24日各项目动态摘要，我为您生成以下横向对比分析报告。

---

## 个人AI助手开源生态横向对比分析报告 (2026-06-24)

### 1. 生态全景

2026年6月24日，个人AI助手/自主智能体开源生态呈现出**高度活跃、分化演进**的态势。生态总体处于从“功能验证”向“生产级稳定”过渡的关键阶段。一方面，头部项目如 **OpenClaw** 和 **ZeroClaw** 正面临规模化带来的“成长的烦恼”，社区对**会话持久化、消息可靠性、跨平台兼容性**的诉求空前集中，大量高优先级Bug正在被密集修复。另一方面，新兴项目如 **NanoBot** 和 **PicoClaw** 则在快速迭代新功能（如PWA支持、ADB控制、Slack Socket Mode），并通过频繁发版吸引用户。值得注意的是，**安全性**（SSRF防护、WASM权限管理、exec命令注入）和**运行时稳定性**（Agent死循环、Cron调度器失效）成为跨越所有项目级别的共性挑战，标志着行业共识正在形成：**强大的能力必须以可靠的底座为前提**。

### 2. 各项目活跃度对比

| 项目名称 | 24h Issue 更新 | 24h PR 更新 | 今日 Release | 健康度评估 | 核心阶段 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 188 条 | 500 条 | 无 | ⚠️ **高活跃，高压力** | 高强度维护与工程重构并行 |
| **NanoBot** | 11 条 (7 new) | 39 条 (7 merged) | **v0.2.2** | ✅ **健康，快速迭代** | 版本发布后的社区反馈与修复期 |
| **Hermes Agent** | 50 条 | 50 条 | 无 | ⚠️ **高活跃，稳定性冲刺** | 核心稳定性与安全边界修复高峰 |
| **PicoClaw** | 3 条 (new) | 17 条 (6 merged) | 无 | ✅ **健康，高效修复** | 安全加固与功能点增强 |
| **NanoClaw** | 1 条 (new) | 12 条 (8 merged) | 无 | ✅ **健康，架构演进** | 核心依赖升级与扩展性框架建设 |
| **CoPaw** | 38 条 | 50 条 (21 merged) | **v1.1.12.post2** | ⚠️ **高活跃，稳定修复承压** | “功能扩展”与“稳定修复”并行 |
| **ZeroClaw** | 高（>40条） | 高（>40条，19 merged） | 无 | ✅ **健康，规模化演进** | 安全加固、运行时稳定性与测试基建 |
| **IronClaw** | 21 条 | 42 条 | 无 | ⚠️ **极高活跃，架构重构期** | “Reborn”架构密集开发与修复 |
| **LobsterAI** | 低 | 11 条 (5 merged) | 无 | ⚠️ **维护风险高** | 积压修复为主，存在严重未响应Bug |
| **NullClaw** | 1 条 (closed) | 0 条 | 无 | 🟢 **稳定但低活跃** | 核心功能停滞，仅收尾旧Bug |
| **Moltis** | 0 条 | 1 条 (merged) | 无 | 🟢 **稳定，功能巩固** | 主干平稳演进，社区蛰伏 |
| **TinyClaw / ZeptoClaw** | 0 条 | 0 条 | 无 | 🟢 **无活动** | 停滞/休眠状态 |

**健康度说明**: ✅ 代表开发活跃、反馈闭环良好；⚠️ 代表活跃但面临较大稳定性压力或积压风险；🟢 代表稳定但活跃度低；🔴 (未出现) 代表存在致死性问题。

### 3. OpenClaw 在生态中的定位

- **生态位**: **平台级基础设施**。OpenClaw 是目前生态中规模最大、社区参与度最深的项目之一，其Issue和PR数量（188/500）远超其他项目，是生态的“核心参照”和“压力测试场”。
- **优势**:
    - **社区规模与深度**: 24h内处理188个Issue和500个PR，社区贡献者和维护者规模无出其右，问题发现和解决速度极快。
    - **架构演进的前沿**: 正在进行的会话/转录SQLite迁移（`#88838`）是生态中最早、最系统的核心存储重构，为后续项目提供了架构范本。
    - **问题覆盖的广度**: 其Bug报告涵盖了网关、通道（Telegram/iMessage/Cron）、模型兼容性等几乎所有维度，反映了作为一个成熟平台所面临的真实复杂性。
- **技术路线差异**:
    - 相比 **NanoBot** 的轻量敏捷、**ZeroClaw** 的WASM插件化，OpenClaw更强调**纯正的开源协作模式**和**社区驱动的架构讨论**。其路线图更多由社区高频Issue和深度讨论（如`#88838`）驱动。
    - **IronClaw** 正通过“Reborn”架构进行重大重写，这与OpenClaw的渐进式重构形成鲜明对比。OpenClaw的迁移策略（“访问器接缝”）更加温和，试图在保持兼容性的同时完成改造。
- **社区规模对比**: OpenClaw的社区活跃度（188 Issues / 500 PRs）是 **Hermes Agent** (50/50) 的3-4倍，是 **CoPaw** (38/50) 的4-10倍，是 **NanoBot** (11/39) 的10倍以上，是绝对的社区规模领导者。

### 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求/问题 | 说明 |
| :--- | :--- | :--- | :--- |
| **Agent运行时稳定性** | OpenClaw, NanoBot, Hermes Agent, PicoClaw, CoPaw, ZeroClaw | - 工具调用陷入死循环<br>- 子代理文件锁导致会话永久损坏<br>- Cron定时任务停止工作或无法触发<br>- 进程钩子崩溃 | **最普遍的痛点**。表明Agent自主决策的鲁棒性仍是行业难题，尤其在小模型或复杂任务场景下。 |
| **会话与状态持久化** | OpenClaw, NanoBot, Hermes Agent, CoPaw, ZeroClaw | - 消息投递失败/丢失/错序<br>- 会话恢复后上下文错乱/任务误杀<br>- 跨会话技能/配置丢失<br>- SQLite存储迁移 | 核心体验基石。项目正从文件存储向更可靠的数据库（SQLite）或分段存储迁移，以解决并发和崩溃恢复问题。 |
| **多通道/多平台兼容性** | OpenClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw | - Telegram/QQ/iMessage消息格式异常、延迟或连接失败<br>- 特定平台（Windows, Android/Termux, Railway）下的崩溃或配置失效 | “随处可用”是个人助手的基本要求，但跨平台的回归测试和差异处理消耗了大量开发资源。 |
| **安全与权限管理** | Hermes Agent, PicoClaw, ZeroClaw, LobsterAI | - exec命令注入绕过<br>- WASM插件不安全的权限（读env、SSRF）<br>- 密码脱敏策略干扰模型运行<br>- SSRF防护缺失 | 从“功能安全”到“系统安全”的觉醒。社区开始要求更精细、智能的权限模型，而非一刀切的防御。 |
| **外部模型/提供商兼容性** | OpenClaw, NanoBot, Hermes Agent, PicoClaw, CoPaw, ZeroClaw | - Anthropic `thinking` 签名无效<br>- 特定模型（Kimi, DeepSeek, Groq）的工具调用、思考过程、流式响应异常<br>- 提供商标识符变更导致配置孤立 | 模型生态碎片化是长期挑战。项目需要建立更健壮的中立抽象层来处理非标准行为。 |

### 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **全能平台** - 追求最广泛的协议支持、模型集成和社区功能 | **极客、开发者、全栈用户** | 社区驱动的大型单体/模块化架构，正在向Session/Accessor模式重构。 |
| **NanoBot** | **轻量敏捷** - 快速迭代，注重WebUI、Provider生态和用户即时反馈 | **普通用户、快速体验者** | 基于新框架（如`sendRichMessage`），通过频繁发版和社区PR快速响应。 |
| **ZeroClaw** | **插件化与安全** - 强调WASM插件系统、零代码TUI和细粒度权限控制 | **安全敏感型、自动化爱好者** | 核心组件（Gateway, TUI）独立且通过API通信，插件系统是核心。 |
| **Hermes Agent** | **IDE与开发者工具整合** - 强调ACP协议、MCP服务器集成和“Computer Use” | **开发者、AI原生IDE用户** | ACP客户端作为核心交互模式，关注IDE内嵌和高级自动化（如Cron、批准流）。 |
| **IronClaw** | **企业级重构** - 通过“Reborn”架构彻底现代化，整合集成（Slack, Gmail） | **团队、企业用户** | 正在进行的Reborn架构大改，强调查询化、自动化管理和统一的集成层。 |
| **CoPaw** | **融合创新** - 集成OpenClaw核心，并扩展移动端适配、定时任务等特定能力 | **跨平台、移动优先用户** | 基于OpenClaw开发，但在移动端和特定功能（如Dream Task）上深度定制。 |
| **PicoClaw** | **边缘与新平台** - 关注Android、ADB控制等边缘计算和移动端自动化 | **嵌入式、IoT、移动开发者** | 高度模块化，易于移植到不同平台（如Android/Termux），创新功能（如ADB）是其亮点。 |

### 6. 社区热度与成熟度

- **第一梯队 (快速迭代/高度活跃)**: **OpenClaw, ZeroClaw, IronClaw, CoPaw, Hermes Agent**。这些项目每日有大量Issue和PR流动，社区参与度高，但伴随显著的稳定性压力。它们代表了生态的风向标，也是问题暴露最充分的地方。
- **第二梯队 (版本巩固/稳步增长)**: **NanoBot, PicoClaw, NanoClaw**。这些项目处于快节奏的版本发布周期，通过新功能吸引用户，并迅速响应版本Bug。它们代表了生态中最有活力的增量部分。
- **第三梯队 (低活跃/维护模式)**: **LobsterAI, NullClaw, Moltis**。这些项目核心功能基本稳定，但社区互动和开发迭代已显著放缓。其中**LobsterAI**存在严重未响应Bug（`#1400`），维护风险最高。
- **停滞层级**: **TinyClaw, ZeptoClaw**。目前无任何活动，项目处于事实上的休眠状态。

### 7. 值得关注的趋势信号

1.  **“稳定性”超越“新功能”成为用户第一诉求**: 多个项目报告显示，用户开始呐喊“在添加新功能之前，请先稳定核心应用”（CoPaw `#5360`）。Agent死循环、Cron失效、内存泄漏这类基础稳定性问题，正成为阻碍用户采纳和留存的核心障碍。
2.  **安全策略的智能化和可配置化是必由之路**: 从Hermes Agent的密码脱敏导致模型循环（`#43083`）到ZeroClaw的WASM权限争议（`#5919`），都表明“一刀切”的安全防护不可取。未来的方向是**可配置的、上下文感知的、模型友好的安全策略**，要求Agent能理解并适应安全边界。
3.  **“Agent作为平台”的架构范式兴起**: **NanoBot**提出通用ACP客户端（`#5257`）和**PicoClaw**的ADB远程控制（PR `#3157`）都指向一个趋势：Agent不仅是一个工具使用者，更应是一个**能编排、管理其他Agent和外部设备的“主控”**。这要求架构具备更强的扩展性和委派能力。
4.  **MCP协议的深化与泛化**: MCP已成为生态共识，但问题开始从“是否支持MCP”转向“MCP集成的深度和质量”，如ZeroClaw报告的MCP工具在TUI中不可见（`#8193`），以及NanoBot的MCP重连崩溃（`#4441`）。**MCP集成正在从“连接”走向“无缝、健壮的集成”。**
5.  **移动端和边缘计算成为新的试验田**: **CoPaw**的大量移动端适配PR和**PicoClaw**的ADB工具、Android/Termux支持，表明生态正在向移动设备、IoT设备渗透。这将推动Agent的交互方式从“聊天框”向“系统级控制”演进。

**给开发者的建议**: 如果您在构建个人AI助手，请优先投资于**鲁棒的会话状态管理和Agent循环检测机制**，并尽早设计**可配置的安全策略**。关注**ZeroClaw**的WASM插件化和**OpenClaw**的架构迁移，它们正在解决未来你将面临的核心架构难题。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的NanoBot项目GitHub数据，我已为您生成2026年6月24日的项目动态日报。

---

### **NanoBot 开源项目动态日报 (2026-06-24)**

**分析师点评：** 项目今日呈现“高产出、强协作”的健康态势。v0.2.2 版本的发布激发出大量的社区反馈和代码贡献，特别是在 WebUI、Provider 兼容性和 Agent 行为稳定性方面。代码提交和Issue讨论均非常活跃，显示出项目正处于快速迭代演进的关键时期。

---

### **1. 今日速览**

- **活跃度：极高水平。** 过去24小时内，项目处理了11个Issue（其中7个为新开启），并接收/发起了39个PR（其中7个已合并/关闭），社区贡献者参与度非常高。
- **核心焦点：稳定性巩固与功能补全。** 随着 v0.2.2 发布，社区反馈聚焦于几个关键点：修复由新功能（如 `sendRichMessage`）引发的 Telegram 兼容性Bug、解决 Agent 无限循环调用工具的问题、以及完善Provider（特别是Kimi Coding）的流式处理逻辑。
- **重大进展：** 合并了多个关键修复，包括MCP重连时的崩溃问题、内存上下文引导的默认回退机制，并新增了对 OpenCode 系列 Provider 的 PR 支持，生态兼容性进一步增强。
- **关键信号：** “PWA支持”、“Agent循环控制”、“技能更新”等社区呼声很高的功能已有了对应的PR或深入讨论，新功能储备充足。

### **2. 版本发布**

- **v0.2.2**
    - **链接:** [v0.2.2 Release](https://github.com/HKUDS/nanobot/releases/tag/v0.2.2)
    - **核心内容：** 本次版本发布标志着项目在**耐久性 (Durability)** 上的重大飞跃。合并了140个PR，并有21位新贡献者参与。
    - **主要改进：**
        - **WebUI 会话持久化增强：** 将对话记录从单一的脆弱文件改为分段存储 (transcripts segmented)，并修复了分叉聊天 (forked chats) 中回复丢失的问题，显著提升了用户体验的可靠性。
        - **其他稳定性修复：** 概述中提及“Agent got sturdier!”，暗示了对核心Agent框架的稳定性提升。
    - **破坏性变更/迁移注意：** 变更日志内容有限。若涉及文件存储结构（如从单文件改为分段文件）的改动，建议用户备份旧的WebUI会话数据，并关注官方文档中的迁移指南。

### **3. 项目进展 (已合并/关闭的PR)**

过去24小时内，项目通过合并/关闭PR，在以下方面取得了实质性进展：

- **Provider 兼容性修复：** 合并了 `fix(provider): deduplicate parallel tool_use ids in AnthropicProvider` (#4474)。这直接解决了 Kimi Coding 端点因 `tool_use.id` 重复导致的400错误，为支持该新 Provider 扫清了关键障碍。
- **核心稳定性修复：**
    - `fix(context): fall back to default memory bootstrap` (#4387) 已合并。修复了在特定工作空间下，因缺少 `SOUL.md` 或 `USER.md` 文件而导致的内存引导失败问题，提高了系统对不同项目结构的鲁棒性。
    - `fix(mcp): force-close streamable_http generator on reconnect failure` (#4441) 虽标注为 [fix]，但未关闭。该PR旨在修复MCP服务器断连时引起的运行时崩溃，是Agent稳定性的关键一环，值得关注其后续动向。
- **CI/CD 与测试：** `test(exec): cover git commands in workspace subdirectories` (#4393) 和 `test(mcp): use resolvable timeout regression URL` (#4417) 合并，增强了项目回归测试的覆盖率和可靠性。
- **被关闭的早期功能请求：** `[Feature] Support hiding reasoning step display` (#2305) 这个自三月起的老请求被关闭。这通常意味着其功能可能已在 v0.2.2 中以其他方式实现，或者团队决定不实现此特定方案。社区用户可关注新版本中关于推理过程展示的交互变化。

### **4. 社区热点**

- **`[OPEN]` Breaking endless tool calling loops (#2298)**
    - **链接:** [Issue #2298](https://github.com/HKUDS/nanobot/issues/2298)
    - **热度：** 尽管创建时间较早（3月20日），但今日仍收到更新。这是社区普遍存在的核心痛点。
    - **诉求分析：** 用户（尤其是使用小参数量/本地模型的用户）期望Agent能在工具调用陷入死循环时具备“自我修复”或“中断”机制。这反映了社区对Agent自主性与安全性的更高要求，希望Agent不是一个只会盲目执行指令的机器，而是一个能评估自身行动效能的智能体。

- **`[OPEN]` Telegram display bug (#4470)**
    - **链接:** [Issue #4470](https://github.com/HKUDS/nanobot/issues/4470)
    - **热度：** 由 v0.2.2 版本更新直接引发，且产生了对应的修复PR (#4472)，是今日最活跃的问题之一。
    - **诉求分析：** 用户对于即时通讯平台的交互体验非常敏感。换行符被忽略和消息闪烁这两个Bug直接破坏了Telegram端的基本信息可读性和视觉稳定性。这提醒项目组在引入新功能（如 `RichMessage`）时，必须进行充分的多平台回归测试。

### **5. Bug 与稳定性**

| 严重程度 | Bug 描述 | Issue 链接 | 修复状态 |
| :--- | :--- | :--- | :--- |
| **高** | **Telegram消息显示异常**：换行符被忽略，消息闪烁 | [#4470](https://github.com/HKUDS/nanobot/issues/4470) | 已有PR [#4472](https://github.com/HKUDS/nanobot/pull/4472) `[OPEN]` |
| **高** | **模型陷入无限工具调用循环**，特别是使用小模型时 | [#2298](https://github.com/HKUDS/nanobot/issues/2298) | 暂无修复PR，处于讨论中 |
| **中** | **WebUI渲染`<thinking/>`标签**为可见文本，泄露模型原始内容 | [#4465](https://github.com/HKUDS/nanobot/issues/4465) | 暂无修复PR |
| **中** | **Kimi Coding Provider的并行工具调用ID重复**，导致API 400错误 | [#4473](https://github.com/HKUDS/nanobot/issues/4473) | 已由PR [#4474](https://github.com/HKUDS/nanobot/pull/4474) `[CLOSED]` 修复 |
| **低** | **`Dream`功能每次运行都创建新的技能文件**，而非更新已有技能 | [#4467](https://github.com/HKUDS/nanobot/issues/4467) | 暂无修复PR，属于功能增强性Bug |

### **6. 功能请求与路线图信号**

以下Issue/PR显示了对项目未来功能的潜在影响：

- **PWA 支持 (高概率纳入):** `feat(webui): add PWA support` (#4457, #4479, #4480)。一天内连续出现多个相关PR，表明项目组或社区核心贡献者正在积极推动此功能。这将是WebUI向“准原生应用”体验迈出的重要一步，符合移动端用户的使用习惯。
- **小型/本地模型的Agent可靠性 (路线图重点):** `Breaking endless tool calling loops` (#2298)。此问题已被长期讨论，它触及Agent系统最核心的稳定性问题。解决它将极大提升NanoBot的泛用性，是走向成熟的关键。预计会成为下一个版本的开发重点之一。
- **Provider生态扩展:** `feat: add OpenCode Zen and OpenCode Go` (#4475, #4476)。NanoBot正积极拓展其Provider生态，为用户提供更多样化、低成本的模型选择。此功能已进入PR阶段，很可能很快被合并。
- **Agent记忆与技能优化:** `[enhancement] Dream should update existing workspace skills` (#4467) 和 `feat: add lifecycle wiki memory writer` (#4477) 体现了社区对Agent知识管理精细化的需求。前者希望避免技能冗余，后者则引入了更复杂的记忆生命周期管理，预示着Agent的长期学习和知识积累能力正在被强化。

### **7. 用户反馈摘要**

- **痛点：**
    - “我的自定义技能每天都在用，但Dream每次运行都会创建新文件，导致技能文件夹越来越乱。” (来自 Issue #4467)
    - “升级到v0.2.2后，Telegram上的消息变成了一坨，换行全没了。” (来自 Issue #4470)
    - “用小模型的时候，Agent经常卡在同一个工具调用上，像个死循环一样，让人着急。” (来自 Issue #2298)
- **诉求：**
    - 希望增加对非标准Provider的思维链配置支持，例如VolcEngine/Doubao。 (来自 PR #4482)
    - 希望Agent能更智能地管理自己的技能和记忆，避免重复劳动。 (来自 Issue #4467)
    - 期待WebUI能够在移动端获得更好的安装和交互体验，比如像原生应用一样有图标和侧滑手势。 (来自 PR #4480)

### **8. 待处理积压**

- **长期未响应的重要 Issue：**
    - **[Issue #2298] `Breaking endless tool calling loops`** (创建于 2026-03-20)。该问题关乎Agent的核心稳定性，虽有讨论但迟迟未有修复PR。随着v0.2.2发布后新用户的涌入，该问题可能会被更频繁地提及，建议维护者优先规划解决。

- **待关注的开放PR：**
    - **[PR #4441] `fix(mcp): force-close streamable_http generator on reconnect failure`** (创建于 2026-06-21)。该PR修复了一个会导致Agent崩溃的运行时错误（`RuntimeError`），其重要性不言而喻。虽然未包含在今日的合并列表中，但极有可能在下一批中被合并。
    - **[PR #4444] `fix(providers): dedupe tool_use ids to prevent Anthropic 400s`** (创建于 2026-06-21)。与已经关闭的 #4474 问题类似，该PR也旨在修复工具调用ID重复的问题。请注意区分两者，确保修复方案被正确合并而不产生冲突。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，这是根据您提供的数据生成的 Hermes Agent 项目动态日报。

---

# Hermes Agent 项目动态日报 | 2026-06-24

**分析师点评：** 项目今日保持极高活跃度，Issues 和 PR 更新均达到50条，显示了庞大的社区参与度和快速的迭代节奏。虽然无新版本发布，但大量针对稳定性、安全性和多平台/多协议兼容性的修复与功能请求正在密集推进。项目健康状况良好，但 Bug 修复的优先级（P0/P1）较为集中，值得关注。

---

### 1. 今日速览

- **极高活跃度**：项目在过去24小时内同时处理了大量 Issues 和 PR（各50条），显示出社区贡献者和核心团队的强大工作流。
- **稳定性仍是焦点**：大量 Bug 报告集中在 Telegram、Windows、Docker 等平台/环境下的持久化连接、资源泄漏和会话状态问题，项目正处于一个重要的“稳定性冲刺”阶段。
- **安全与策略边界问题凸显**：多份报告（如 #35357、#51581）暴露了审批门控（Tirith）、后台自我修改等安全边界的薄弱环节，社区对此关注度高。
- **新功能方向明确**：功能请求集中在 ACP 客户端通用化、OAuth 支持完善、MCP 服务器深度整合以及 “Pets” 这类用户界面/体验增强功能上。

### 2. 版本发布

- 无新版本发布。

### 3. 项目进展

今日合并/关闭了13个 PR，重要的进展包括：

- **核心架构与稳定性**：
    - **PR #51572 (已合并)**：实现了 **网关侧的“空闲/缓冲翻转”原语**。这是一个旨在为未来“缩容至零”功能铺路的基础架构变更，有助于提升服务端资源利用效率。
    - **PR #14 (已合并)**：一个早期的稳定性和速度优化 PR 被合并，表明项目团队仍在关注历史遗留的性能问题。
- **安全与故障恢复**：
    - **PR #51593 (开放)**：修复了 **Photon 侧车在流中断时无法自动重启**的问题，增强了 iMessage 等长连接服务的健壮性。
    - **PR #51581 (开放)**：一个初步的 **安全修复方案**，旨在隔离后台对话审查线程对活跃技能文件进行未授权修改的行为。
- **功能迭代**：
    - **PR #46464 (已合并)**：**“Pets”动画吉祥物功能** 已在 CLI、TUI 和桌面端上线，增强了产品的趣味性和用户体验。
    - **PR #47959 (开放)**：在“Pets”基础上，进一步增加了通过 Cmd+K 菜单进行 **宠物生成、孵化、采用** 的完整交互流程。

**小结**：项目不仅在修复问题，也在积极构建新的用户交互范式和后端架构原语，技术栈和产品形态都在稳步演进。

### 4. 社区热点

- **🔥 #5257：通用 ACP 客户端** (评论: 11, 👍: 16)
    - **内容**：提议将现有只为 Copilot 设计的 ACP 客户端泛化，使其能作为“主控”**编排所有符合 ACP 协议的编码智能体**（如 Claude、Cursor 等）。
    - **分析**：这是本周最受关注的特性请求。它反映了社区对 **“AI 原生 IDE 多智能体协作”** 的强烈需求。用户希望 Hermes 成为智能体的“指挥中心”，而非只能被 IDE 调用的“工具”。这若实现，将极大提升 Hermes 在开发者生态中的战略地位。
    - **链接**: https://github.com/NousResearch/hermes-agent/issues/5257

- **🔥 #43083：密码安全保障机制导致的模型工具调用循环** (评论: 8)
    - **内容**：系统安全地将密码替换为`***`后，模型在读取自身历史对话时，因无法识别被替换的密码，导致在后续工具调用中反复失败并重试。
    - **分析**：这是一个典型的 **“安全与可用性冲突”** 案例。社区的讨论焦点在于如何平衡防御性安全机制（密码脱敏）和模型的正常运行逻辑，其对 AI 智能体的运行状态管理提出了更高要求。
    - **链接**: https://github.com/NousResearch/hermes-agent/issues/43083

### 5. Bug 与稳定性

- **P0 (紧急)**:
    - **#51585 [PR待合并]**: **Cron任务缓存未命中**。`session_id` 被用作 `prompt_cache_key`，导致重复的 Cron 任务无法命中缓存（如 xAI 的提供商缓存），产生额外的成本和延迟。已有修复 PR #51585。
        - 链接: https://github.com/NousResearch/hermes-agent/issues/51585

- **P1 (高优先级)**:
    - **#48648**: **Telegram 无限消息循环**。当流式响应超过4096字符限制时，网关进入无限嵌套回复循环，严重影响 Telegram 用户的使用。
        - 链接: https://github.com/NousResearch/hermes-agent/issues/48648
    - **#47237**: **Telegram 会话用户消息重复**。瞬态提供商认证失败会导致同一用户输入被持久化多次，导致 Agent 上下文错乱。
        - 链接: https://github.com/NousResearch/hermes-agent/issues/47237
    - **#49106**: **Web/WeChat 会话历史泄漏**。不同会话会互相污染历史记录，是严重的隐私和上下文隔离漏洞。
        - 链接: https://github.com/NousResearch/hermes-agent/issues/49106
    - **#51587**: **MCP 服务器工具不显示**。配置正确的 MCP 工具无法在 Agent 的工具集中展示，原因有待复现。
        - 链接: https://github.com/NousResearch/hermes-agent/issues/51587
    - **#51579**: **Docker 中 `.env` 文件被反复清除**。`gateway run` 的自动迁移脚本在每次Docker容器启动时都会清除环境变量，导致配置丢失。
        - 链接: https://github.com/NousResearch/hermes-agent/issues/51579

- **P2 (中优先级)**:
    - **#51560**: **`fallback_providers` 配置被静默清空**。通过 CLI 配置的 JSON 字符串格式的备用提供商链被错误解析，导致 Fallback 机制失效。
        - 链接: https://github.com/NousResearch/hermes-agent/issues/51560
    - **#38387**: **Windows 网关计划任务残留空白控制台窗口**。影响 Windows 用户的磁盘后台运行体验。
        - 链接: https://github.com/NousResearch/hermes-agent/issues/38387

### 6. 功能请求与路线图信号

- **高潜力加入下一版本的功能**：
    - **通用 ACP 客户端 (#5257)**：呼声最高，技术基础良好，可能推动 Hermes 从一个“被集成的工具”转型为“集成其他工具的智能体中心”。
    - **HTTPS OAuth 回调 URL (#29299)**: 大量专业 MCP 服务（如 Salesforce）要求 HTTPS 回调，此功能是 Hermes 进入企业级 MCP 生态的必备条件。
    - **Vertex AI 提供商 (PR #8427)**: 尽管 PR 已开放一段时间，但仍不断获得关注。它满足了 GCP 企业客户对原生 Vertex AI 支持的强需求。
    - **Turso 外部内存提供商 (PR #51591)**: 社区对扩展 Agent 记忆能力的兴趣持续增长，Turso 作为一个高性能、兼容 SQLite 的选项，是继 Chroma、Pinecone 后的有力补充。
    - **日志相关错误检测增强 (#42083)**: 社区自发的底层逻辑改进，建议将 502/503/504 等常见网关错误纳入支付错误检测逻辑，减少误报。

### 7. 用户反馈摘要

- **痛点与期待**：
    - **“MCP 准入太难了”**：多个 Issue (#29299, #51535) 反映，由于 OAuth 流程和回调 URL 限制 (仅支持 HTTP)，导致与 Salesforce、Any.do 等主流 MCP 服务的集成困难重重。这表明 **OAuth 流程的成熟度是当前用户的核心障碍**。
    - **“`computer_use` 看着美，用起来难”**：Issue #51578 中用户反馈，`computer_use` 功能无法识别系统上已经安装的 Qt6 应用。这表明 “Computer Use” 功能虽然在概念上强大，但在不同 Linux 桌面环境和图形工具包上的兼容性仍有待打磨。
    - **“安全，但别太安全”**：Issue #43083 的讨论表明，部分用户对过度严格的安全机制（如密码脱敏）感到困扰，因为它会“欺骗”模型并导致工作流中断。用户更希望有一个 **“可配置的、智能的安全策略”**，而非一刀切的“防御”。
    - **“官方 Docker 镜像体验不好”**：Issue #51579 指出，官方 Docker 镜像的自动迁移逻辑带有破坏性，会抹掉 `.env` 文件。这反映了用户在容器化部署中，倾向于 **“镜像即配置，不可变基础设施”** 的哲学，对自动的、有副作用的启动逻辑持批评态度。

### 8. 待处理积压

以下 Issue 评论数较多，且已在开放中度过了相对较长的时间，建议维护者重点关注：

- **#19566 (P1, 45天)**: **OpenAI-Codex 凭据池在轮换时丢失新凭证**。此问题涉及核心的认证凭据管理和多进程竞争，影响面广且等级为 P1，但一直处于开放状态。
    - 链接: https://github.com/NousResearch/hermes-agent/issues/19566
- **#25758 (P2, 40天)**: **Ollama 上 `reasoning_effort: none` 被静默忽略**。导致本地模型用户被迫等待长时间的“思考”过程，对本地优先的用户群影响较大。
    - 链接: https://github.com/NousResearch/hermes-agent/issues/25758
- **#26044 (P3, 39天)**: **Tirith 安全扫描器在 Windows 上安装失败**。此 Issue 阻挡了 Windows 用户的整条安全审批流水线（Cascading fail），应属于更高优先级。
    - 链接: https://github.com/NousResearch/hermes-agent/issues/26044
- **PR #22648 (46天)**: **为 Ollama Cloud 添加 Web 搜索/提取提供商**。这个 PR 非常大且复杂，经历了从硬编码架构迁移的重构，其状态直接关系到社区插件的可扩展性。
    - 链接: https://github.com/NousResearch/hermes-agent/pull/22648
- **PR #8427 (73天)**: **Vertex AI 提供商**。这是一个长期未合并的重要 PR，其是否存在潜在的冲突或设计分歧？
    - 链接: https://github.com/NousResearch/hermes-agent/pull/8427

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是为 PicoClaw (github.com/sipeed/picoclaw) 生成的项目动态日报。

---

# PicoClaw 项目动态日报 | 2026-06-24

**分析师点评**: 项目今日活跃度极高。虽然无新版本发布，但 Bug 修复和功能开发的提交量显著增加，社区参与热情高涨。尤其是 `exec` 安全策略和跨站认证修复的合并，表明项目正积极回应并解决用户反馈的安全与稳定性痛点。

### 1. 今日速览

PicoClaw 项目在过去 24 小时内展现了极高的开发活跃度。尽管没有新版本发布，但共有 **17 条 PR** 更新，其中 **6 条已合并/关闭**，涉及安全加固、功能增强（如 AWS Bedrock 缓存、Android ADB 工具）以及多项关键 Bug 修复。同时，**3 条新 Issues** 报告了在 Android/Termux 上的崩溃和任务重复等 BUG。整体来看，项目处于快速迭代和解决问题的健康状态。

### 2. 版本发布

- **无新版本发布，待办事项较多。**

### 3. 项目进展

今天项目在以下几个方面取得了实质性进展：

- **安全性与稳定性 (核心)**：
    - **PR #3161 [已关闭]**: 修复了 `exec` 工具中自定义允许规则可绕过拒绝模式的安全漏洞。合并后，即使命令匹配了允许列表，也会继续执行拒绝模式检查，有效防止了通过 `jq` 等工具读取敏感环境变量等潜在攻击。**(作者: danmobot)**
    - **PR #3160 [已关闭]**: 增加了跨站请求伪造（CSRF）防护，拒绝来自不同站点的 Launcher 密码设置请求，强化了首次运行的 dashboard 认证安全。**(作者: danmobot)**
    - **PR #3162 [已关闭]**: 修复了 WhatsApp 频道因 WebSocket 自动断开而无法接收消息的问题。实现自动重连（带指数退避）和异步消息处理，显著提升了该频道的可靠性。**(作者: Jh123x)**

- **功能增强与兼容性**:
    - **PR #3163 [新提交]**: 为 AWS Bedrock 模型引入了 Converse API 的提示缓存（Prompt Caching）功能，通过设置缓存点，可大幅降低长对话或工具使用场景下的 API 调用成本。
    - **PR #3157 [新提交]**: 新增了基于 ADB (Android Debug Bridge) 的实验性远程操作工具，允许 PicoClaw 控制连接的 Android 设备，实现截图、UI 检测、点击、滑动等操作。

- **Bug 修复**:
    - **PR #3158 [关闭]**: 增加了针对 Windows 环境下 sandbox 文件系统路径处理的回归测试，确保跨平台兼容性。**(作者: danmobot)**
    - **PR #3154 [已关闭]**: 修复了火山引擎“豆包” (`Doubao`) 模型在某些情况下将工具调用（Tool Call）泄露为 XML 文本的问题，确保了与其兼容性。**(作者: hanZeng-08)**

这些修复和功能填补了报告中的 Bug (#3153)，并增强了平台的扩展性和安全性。

### 4. 社区热点

- **讨论最活跃**: **Issues** 整体活跃度不高，但 `#3015 [CLOSED]` 关于 Windows 下 QQ 频道连接失败的问题，在关闭前仍有 **4 条评论**，说明该平台问题受到较多关注。
- **反响最大**: **PRs #3161, #3160** 虽然在今天迅速合并，但它们所解决的安全问题（命令注入绕过、CSRF）反映了社区对 PicoClaw Agent 安全性的普遍关切。它们能快速被处理，是社区需求与项目维护者响应迅速的良好信号。

**背后诉求**: 社区对 `exec` 工具的安全性高度关注，希望系统在提供强大能力的同时，能通过更严密的规则防止误用或“越狱”；同时，对 API 认证端点的安全加固是成熟项目的标志，社区对此表示欢迎。

### 5. Bug 与稳定性

- **严重程度：高**
    - **[BUG] Process hooks crash gateway on Android/Termux (v0.2.9)** `#3164 [OPEN]`
        - **描述**: 在 Android/Termux 环境下，即使是最简单的 `process hook`（基于 stdio 的 JSON-RPC）也会导致 gateway 在启动 2 秒内崩溃。
        - **影响**: 直接导致 Android 用户无法使用 PicoClaw 的进程钩子扩展功能，严重阻塞该平台的使用体验。
        - **状态**: 无 PR 关联，亟待诊断。

- **严重程度：中**
    - **[[BUG] 经常重复任务** `#3159 [OPEN]`
        - **描述**: 用户反馈在使用 DeepSeek 模型时，AI 经常重复执行之前的任务。例如，在询问法国新闻后，AI 会先重复回答美国新闻。这表明上下文理解或任务调度逻辑存在缺陷。
        - **影响**: 影响使用体验，浪费 Token 和时间。
        - **状态**: 无 PR 关联。
- **严重程度：低（已修复）**
    - **[[BUG] QQ Channel connection failure** `#3015 [CLOSED]`
        - **描述**: Windows 构建版本下 QQ 频道无法启动，提示 Token 获取超时。
        - **状态**: 已因 “stale” 被关闭，但根本原因是否已修复未知。

### 6. 功能请求与路线图信号

- **新功能信号**:
    - **AWS Bedrock Prompt Caching (PR #3163)**: 这是对云服务成本优化的直接回应，很可能成为连接企业级模型用户的下一个重要特性。
    - **Android ADB 远程操作工具 (PR #3157)**: 这暗示项目可能正将视线投向移动端自动化/控制领域，作为 Agent 能力的延伸。这是一个非常创新的方向。
    - **远程 Pico WebSocket 模式 (PR #3118)**: 此 PR 已开启数日，允许通过 WebSocket 远程连接 Agent，是扩展 Agent 部署形态的重要一步，可能进入下一个版本。

**综合判断**: 下一版本很可能包含**远程 Agent 模式 (PR #3118)**、**安全加固 (PR #3161, #3160)** 及 **WhatsApp 可靠性修复 (PR #3162)**。AWS Bedrock 和 ADB 功能由于是近期提交，可能会在下下个版本中稳定下来。

### 7. 用户反馈摘要

- **痛点**:
    - **稳定性问题**: Android/Termux 用户无法使用 Process Hooks (`#3164`)，严重影响了其在移动设备上的使用。
    - **任务重复执行**: 用户 `okatTjCc` 遇到任务重复执行的 BUG (`#3159`)，这反映了模型调用或会话管理上的缺陷。
    - **平台兼容性**: Windows 用户曾遇到 QQ 频道连接问题 (`#3015`)，平台相关 Bug 需持续关注。

- **正向反馈**:
    - 从 PR 修复速度来看，社区贡献者（如 `danmobot`, `Jh123x`, `hanZeng-08`）对项目活跃维护，能够快速响应安全问题和重要 Bug，这给予了用户信心。尤其是 `#3154` 对特定模型兼容性的修复，获得了用户的积极反馈。

### 8. 待处理积压

- **长期未响应 Issue**:
    - 关注 **Android / Termux 崩溃问题 (Issue #3164)**，这是当前影响具体平台的严重 Bug，应作为最高优先级排查。目前没有 assignee 和 PR。
- **长期搁置的 PR**:
    - **`[stale] feat(telegram)` PR #2975**: 此 PR 由 `Jlan45` 于 2026-05-30 提交，旨在优化 Telegram 机器人在群组中的回复体验。项目已标注为 `stale`，维护者需就是否接纳此功能或提出修改意见作出回应，避免打击社区贡献者的积极性。
    - **`[dependencies] build(deps)` PRs #3100, #3103, #3104**: 这些依赖更新 PR 由 `dependabot` 发起，并已停留超过10天未合并。建议维护者定期安排时间批量合并这些无冲突的依赖升级，确保项目使用的库保持最新，减少潜在安全风险。

**链接**:
- Issue #3164: [跳转链接](https://github.com/sipeed/picoclaw/issues/3164)
- Issue #3159: [跳转链接](https://github.com/sipeed/picoclaw/issues/3159)
- Issue #3015: [跳转链接](https://github.com/sipeed/picoclaw/issues/3015)
- PR #2975: [跳转链接](https://github.com/sipeed/picoclaw/pull/2975)
- PR #3163: [跳转链接](https://github.com/sipeed/picoclaw/pull/3163)
- PR #3157: [跳转链接](https://github.com/sipeed/picoclaw/pull/3157)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 2026-06-24

---

## 1. 今日速览

NanoClaw 项目今日保持高强度开发节奏，过去24小时内共处理 12 条 PR（其中 8 条已合并/关闭），新增 1 条活跃 Issue。**项目活跃度极高**，核心贡献者围绕 **Chat SDK 4.29.0 版本锁定**、**Slack Socket Mode 集成**、**扩展点框架**以及**审批机制增强**等关键方向进行了密集的合并和分支整理。社区参与积极，多个功能性 PR 处于待合并状态，整体健康度良好。

---

## 2. 版本发布

- **无新版本发布**

---

## 3. 项目进展

### 今日合并/关闭的重要 PR（共 8 条）

| PR | 标题 | 状态 | 影响 |
|----|------|------|------|
| [#2834](https://github.com/nanocoai/nanoclaw/pull/2834) | chore(deps): move chat SDK + channel-adapter pins to 4.29.0 | ✅ CLOSED | 核心依赖晋级：将 `main` 分支上所有 Chat SDK 及相关适配器锁至 **4.29.0** 生成，统一版本基线 |
| [#2835](https://github.com/nanocoai/nanoclaw/pull/2835) | chore(deps): bump @chat-adapter/* + chat to 4.29.0 (channels) | ✅ CLOSED | 同步升级 `channels` 分支适配器至 4.29.0 |
| [#2836](https://github.com/nanocoai/nanoclaw/pull/2836) | chore(deps): bump chat SDK to 4.29.0 (providers) | ✅ CLOSED | 同步升级 `providers` 分支适配器至 4.29.0 |
| [#2837](https://github.com/nanocoai/nanoclaw/pull/2837) | feat(slack): Socket Mode — adapter + guided setup | ✅ CLOSED | **Slack Socket Mode** 正式落地：支持 `SLACK_APP_TOKEN` 进行出站 WebSocket 连接，无需公网端点，提升本地开发和 NAT 环境友好度 |
| [#2839](https://github.com/nanocoai/nanoclaw/pull/2839) | chore(channels): bring Slack Socket Mode (#2837) into channels | ✅ CLOSED | 将 Socket Mode 适配器补丁同步至 `channels` 分支，修复分支合并遗留问题 |
| [#2826](https://github.com/nanocoai/nanoclaw/pull/2826) | fix(update-skills): nudge into skill updates, rebuild container on re-apply | ✅ CLOSED | 修复 `/update-nanoclaw` 流程中技能更新提示不足的问题：现在在应用更新时会**强制重建容器**，确保 Skill 变更生效 |
| [#2833](https://github.com/nanocoai/nanoclaw/pull/2833) | [follows-guidelines] Feat/hook surface guard | ✅ CLOSED | 新增钩子表面守卫机制（具体细节待文档补充） |
| [#2841](https://github.com/nanocoai/nanoclaw/pull/2841) | Generic inert extension-point seams (registerX/applyX) across host + container runtime | ✅ CLOSED | 基础架构层：在主机和容器运行时中注入**通用惰性扩展点**（`registerX/applyX` 模式），为后续插件化提供无侵入扩展能力 |

**项目前进总结**：今日项目完成了 **Chat SDK 跨分支的全面版本锁定（main + channels + providers）**，统一了依赖基线；**Slack Socket Mode 功能正式进入主线**；新增了**扩展点框架**和**容器更新修复**，整体向前迈进了一个稳定版本迭代。

---

## 4. 社区热点

### 最受关注的 Issue

- **#2840** [OPEN] [Nanoclaw v2 binds port 3000 of external host ip for slack](https://github.com/nanocoai/nanoclaw/issues/2840)
  - 作者：sirpy | 创建：2026-06-23 | 评论：0 | 👍：0
  - **核心诉求**：用户指出 NanoClaw v2 在 Slack 集成时的安装指引要求创建隧道到 3000 端口（正确做法），但 **3000 端口实际已被绑定在外部 IP 上**，导致隧道变得毫无意义。用户期望修复端口绑定逻辑或文档指引。
  - **分析**：此问题虽未被大量点赞，但触及了一个**安全配置的核心矛盾**——如果端口已被外部绑定，隧道方案就丧失了安全目的。随着 [#2837](https://github.com/nanocoai/nanoclaw/pull/2837) Slack Socket Mode 的合并（无需公网端点），此问题可能在 Socket Mode 下自动解决，但**传统 Webhook 模式仍可能受影响**，值得跟进。

### 活跃 PR 讨论

- **#2842** [OPEN] [Generic inert extension-point seams + reserve built-in MCP server names](https://github.com/nanocoai/nanoclaw/pull/2842)
  - 作为 [#2841](https://github.com/nanocoai/nanoclaw/pull/2841)（已合并）的增强版，新增了 **MCP 服务器名称保留机制**，防止下游 Fork 影响内置系统命名空间。这是架构演进的重要信号。

- **#2832** [OPEN] [feat(approvals): reject with reason](https://github.com/nanocoai/nanoclaw/pull/2832)
  - 引入授权的“拒绝原因”功能，让 Agent 能收到具体的拒绝原因而非简单的“declined”，提升人机协作效率。该功能已获得一个 **👍**（单一响应），但用户交互改进类 PR 通常需要更多社区测试反馈。

---

## 5. Bug 与稳定性

### 已报告 Bug（1 条）

| Issue | 标题 | 严重程度 | 状态 | Fix PR |
|-------|------|----------|------|--------|
| [#2840](https://github.com/nanocoai/nanoclaw/pull/2840) | Nanoclaw v2 binds port 3000 of external host ip for slack | ⚠️ **中** | OPEN | 无直接 Fix PR，但 [#2837](https://github.com/nanocoai/nanoclaw/pull/2837) Socket Mode 可能缓解 |

### 近期稳定性改进

- **[#2826](https://github.com/nanocoai/nanoclaw/pull/2826) (已合并)**：修复 `/update-nanoclaw` 在技能更新时容器未重建的问题。旧行为下用户更新技能后需手动重启容器，新行为自动强制重建，减少配置不一致导致的 bug 概率。

### 潜在回归风险

- **Chat SDK 4.29.0 升级**：`main`、`channels`、`providers` 三个分支在同一天内同步锁版本（#2834/#2835/#2836），虽然设计合理，但大版本跳跃可能存在未暴露的兼容性问题，建议在未来 48 小时内进行端到端测试。

---

## 6. 功能请求与路线图信号

### 可能被纳入下一版本的功能

| PR | 标题 | 状态 | 预计版本影响 |
|----|------|------|-------------|
| [#2842](https://github.com/nanocoai/nanoclaw/pull/2842) | Generic inert extension-point seams + reserve built-in MCP server names | OPEN | **下一大版本**：这是基础架构级变更，可能随 v3.x 或作为 v2.x 增量 |
| [#2832](https://github.com/nanocoai/nanoclaw/pull/2832) | feat(approvals): reject with reason | OPEN | **v2.x**：用户交互改进，风险低，可快速加入 |
| [#2838](https://github.com/nanocoai/nanoclaw/pull/2838) | feat(providers): add Manifest model router provider | OPEN | **v2.x**：新增 Manifest 模型路由 Provider，扩展了模型接入能力 |
| [#2771](https://github.com/nanocoai/nanoclaw/pull/2771) | perf(container): --shm-size=1g + --init for agent containers | OPEN（6月15日创建） | **v2.x 候选**：增强 Chromium 兼容性，已在 PR 中停留 9 天，可能因优先级低被搁置 |

### 竞争/替代方案信号

- **Slack Socket Mode** (#2837) 的合并表明项目团队正在推动“**零端口暴露**”安全架构，这可能成为 v2.x 阶段的默认推荐连接方式，替代传统的端口隧道方案（如 #2840 所批评的）。

---

## 7. 用户反馈摘要

### 真实用户痛点

1. **端口绑定冲突（#2840）**：`sirpy` 反馈 v2 的 Slack 集成中端口 3000 被外部 IP 绑定，使隧道安全方案失效。这对应一个**文档/默认配置问题**——用户按照指引操作却遇到配置冲突。
2. **技能更新遗漏（#2826 修复前）**：虽然已修复，但原行为（`/update-nanoclaw` 步骤 7 将技能更新标为“可跳过”）反映了用户可能**未经意间错过重要上游修复**的 UX 缺陷。

### 用户使用场景

- **本地开发/ NAT 环境**：Slack Socket Mode (#2837) 直接降低了本地开发 Slack Bot 的门槛，用户无需配置公网隧道。
- **审批流程**：`moshe-nanoco` 的 `reject with reason` (#2832) 来自内部场景——Agent 在审批被拒后无法自适应调整，需要一个“拒绝原因”闭环。

### 满意度信号

- 无直接“满意”评论，但 #2837 没有出现反对或测试失败报告，表明 Socket Mode 的集成获得初步认可。
- #2826 的修复直接回应了用户对“更新后容器未重建”的困惑，预计会降低投诉量。

---

## 8. 待处理积压

### 长期未响应的关键 PR（提醒维护者）

| PR | 标题 | 创建 | 最后更新 | 状态说明 |
|----|------|------|----------|----------|
| [#2771](https://github.com/nanocoai/nanoclaw/pull/2771) | perf(container): --shm-size=1g + --init for agent containers | 2026-06-15 | 2026-06-23 (由 reviewer 更新) | **⚠️ 积压 9 天**。虽然 reviewer 最近（6月23日）有交互，但距离创建已近 10 天。该 PR 解决的是 agent-browser（Chromium）在 Docker 默认 64MB `/dev/shm` 下崩溃的常见问题，影响所有使用浏览器技能的场景。建议加速合并或给出明确 feedback。 |

### 待合并的 PR（共 4 条，需 maintainer 审阅/合并）

1. **[#2842](https://github.com/nanocoai/nanoclaw/pull/2842)** - 扩展点框架 + MCP 保留名称（新增，架构级更改）
2. **[#2838](https://github.com/nanocoai/nanoclaw/pull/2838)** - Manifest 模型路由 Provider（新技能集成）
3. **[#2832](https://github.com/nanocoai/nanoclaw/pull/2832)** - 审批拒绝原因（用户互动改进）
4. **[#2771](https://github.com/nanocoai/nanoclaw/pull/2771)** - 容器性能优化（长期积压）

### 建议维护者优先处理顺序

1. **#2771**（性能/稳定性，已积压9天） > **#2832**（用户交互改进，风险低） > **#2838**（新功能，需测试） > **#2842**（架构级，需讨论）

---

*数据来源：GitHub `nanocoai/nanoclaw` 仓库，采集时间 2026-06-24 UTC。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，我将根据您提供的NullClaw项目数据，为您生成一份客观专业的项目动态日报。

---

# NullClaw 项目动态日报 | 2026-06-24

## 1. 今日速览

过去24小时内，NullClaw项目活跃度处于低水平。项目未发布新版本，仅有一个先前报告的Bug（#967）被关闭，同时存在一个长期未合并的大型功能PR（#783）。整体来看，项目维护节奏趋缓，社区讨论较为平静，主要工作量体现在对已知问题的收尾处理上。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

- **Bug修复确认**：一个影响用户高频对话的Bug（#967）已被关闭。该问题记录了用户在使用特定模型（Agnes-2.0-Flash）时，超过50%的对话请求返回`NoResponseContent`错误。此Bug的关闭表明项目已找到并应用了解决方案，对用户体验有直接改善。
- **功能开发停滞**：核心功能PR #783（Cron子代理、运行历史、JSON输出等）已开放近三个月，今日无合并或关闭动作。这表明该重大功能更新仍未准备好进入主分支，开发周期较长。

## 4. 社区热点

- **Bug #967：`error: NoResponseContent`**（[链接](https://github.com/nullclaw/nullclaw/issues/967)）
  - **状态**：已关闭
  - **热度分析**：该Issue是过去24小时内唯一有更新的Issue，且为已关闭状态。尽管评论数不多（2条），但其反映了用户在实际使用中的高频痛点（>50%失败率），引发了维护团队的关注并最终修复。背后的核心诉求是**保证模型调用的稳定性与成功率**，尤其是在Windows平台上的使用体验。

## 5. Bug 与稳定性

- **严重程度：高**
  - **问题**：`NoResponseContent` 错误（Issue #967）
  - **表现**：在Windows 11环境下，使用`Agnes-2.0-Flash`模型时，超过50%的对话请求无响应内容。
  - **状态**：**已关闭**，表明已有修复方案。未关联的Fix PR，疑似通过直接代码提交或配置调整解决。
  - **建议**：鉴于该Bug高频率出现，建议维护者在下一版本发布说明中公开其根因与修复方式。

## 6. 功能请求与路线图信号

当前无新增功能请求或路线图讨论。分析团队推测，以下功能点可能对下一版本产生影响：
- **Cron调度与扩展**：PR #783（[链接](https://github.com/nullclaw/nullclaw/pull/783)）涵盖了Cron子代理、运行历史、JSON输出和安全加固。这是一个重要的后台功能扩展，虽然开发周期长，但一旦合并，将极大增强NullClaw的自动化任务调度能力，是路线图中“任务自动化”方向的关键拼图。

## 7. 用户反馈摘要

- **用户痛点**：用户 `svier0` 在Issue #967中报告了频繁的API调用失败问题。该用户明确指出使用的是官方发布的Windows版本和指定模型，并对比了“在另一个客户端（picocla...）”的正常表现，以此强调这是NullClaw本身的兼容性或稳定性问题。这表明用户对工具的可信赖度有较高要求，且会进行横向对比。
- **使用场景**：用户尝试执行简单的`agent`对话命令（`agent -m "你好！"`）。
- **满意之处**：尽管报告了Bug，但该Issue在两天内得到标记并关闭，这表明项目团队对关键Bug的响应和处理速度得到了用户（或社区）的认可。

## 8. 待处理积压

- **PR #783：`feat(cron)`**（[链接](https://github.com/nullclaw/nullclaw/pull/783)）
  - **创建时间**：2026-04-07
  - **未更新天数**：1天（最后更新于2026-06-23），但开放总时长已超过75天。
  - **影响**：这是一个大型功能PR，涵盖了可扩展的任务调度、历史记录和输出格式优化。其长期未合并可能导致项目在自动化编排能力上落后于竞争对手。建议维护者明确其合并时间表或当前存在的阻碍（如测试覆盖率、代码审查意见等），以避免社区对该功能失去期待。

---

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，这是根据您提供的IronClaw (github.com/nearai/ironclaw) GitHub数据生成的2026-06-24项目动态日报。

---

## IronClaw 项目动态日报 | 2026-06-24

### 1. 今日速览

过去24小时，IronClaw 项目处于**极高活跃度**状态，核心开发团队正在集中推进 **“Reborn”** 架构的完善与修复。全天共有 **21条Issue更新** 和 **42条PR更新**，远超日常水平。关键动态包括：修复了多项影响用户体验的认证和UI Bug，如Gmail令牌验证和活动流（Activity Stream）显示问题；同时，Reborn架构下的自动化管理（删除/暂停/恢复）、上下文管理（工具按需披露）、以及Google/ Slack集成等核心功能正在密集开发或合并中。值得注意的是，有一个可能影响系统稳定性的 **潜在死锁问题** 被报告。项目健康度良好，但需警惕多线并进带来的回归风险。

### 2. 版本发布

本周暂无新版本发布。

### 3. 项目进展

今日项目在 **Reborn架构** 的功能打磨和稳定性修复上取得了显著进展。以下为今日合并/关闭的重要PR，它们共同推动了项目向前迈进：

- **自动化管理 (Automation) 增强**：
    - **PR #5133** [已合并]: 为Reborn自动化增加了 **删除支持**（`DELETE /api/webchat/v2/automations/{automation_id}` ），使用户可以在WebUI v2中直接管理自动化任务。
    - **Issue #5122** & **#5121** [已关闭]: 对应的自动化删除和暂停/恢复功能开发任务已完成。

- **集成层 (Integrations) 修复与重构**：
    - **PR #4969** [已合并]: 修复了Google Drive/ Docs/ Sheets WASM工具在认证失效时，返回的错误信息不明确的问题，现在会正确返回 `auth_required` 错误，为用户提供更清晰的指引。
    - **PR #5152** [已合并]: 将 **Slack集成** 的配置流程从TOML文件迁移到 **WebUI界面**，极大降低了用户的配置门槛。

- **E2E测试与CI优化**：
    - **PR #5155** [已合并]: 增加了针对Reborn的 **日历E2E测试**（通过Emulate提供程序），用于模拟安装、认证、代理交互和结果验证的完整流程，提升了测试覆盖率和可靠性。
    - **PR #5159** [已合并]: 优化了CI流程，**移除了V1遗留代码中对Reborn组件（composition/memory/secrets）的重复测试**，减少了不必要的CI耗时。

- **其他已合并的重要修复**：
    - **PR #5166** [已合并]: 实现了通过WebUI配置的 **动态Slack消息路由** 功能。
    - **PR #5164** [已合并]: 修复了Slack作为例行任务 (routine) 出站目标时路径丢失的问题。
    - **Issue #4592** [已关闭]: 完成了Reborn的 **首次运行引导API**，使新用户可以通过WebUI v2直接完成提供程序、模型、个人资料等基础配置。

### 4. 社区热点

今日讨论与交互集中在 **账户/令牌安全** 和 **框架稳定性** 两个方向。

- **#5169 [热]** [Bundled skills trip the prompt-safety vocabulary denylist](https://github.com/nearai/ironclaw/issues/5169)
    - **诉求分析**: 用户报告了一个 **严重的误杀问题**。一个“开箱即用”的Reborn安装，在执行一个良性的请求时，会因为其捆绑技能 (bundled skill) 的指令中包含“Authorization”、“Bearer”等常见的API词汇，而被 **模型安全词库错误拦截**，并误导性地提示“临时系统问题”。这暴露了当前安全过滤机制过于简单粗暴，缺乏上下文理解能力，严重影响了系统的可用性和信任度。

- **#3733/3732 [持续活跃]** [Invalid Gmail token shows success/activated toast](https://github.com/nearai/ironclaw/issues/3733) & [Gmail auth gate shows inconsistent UI](https://github.com/nearai/ironclaw/issues/3732)
    - **诉求分析**: 关于Gmail集成的 **用户体验问题** 讨论热度不减。用户报告了两个主要痛点：1）**错误反馈不准确**：输入错误的Google OAuth令牌，UI却错误地提示配置成功，随后立刻要求重新认证，造成困惑。2）**UI表现不一致**：在不同对话中，Gmail的认证入口有时显示OAuth链接，有时要求手动输入令牌。这反映了认证流程实现存在缺陷，用户体验割裂。

### 5. Bug 与稳定性

今日报告了多个Bug，其中**一个死锁问题和一项自动化创建失败问题需要高度关注**。

- **严重**:
    - **#5148** [Turn scheduler heartbeat can self-deadlock](https://github.com/nearai/ironclaw/issues/5148): **一个潜在的严重死锁问题**。当计划任务的“心跳”事件在执行器处于状态更新（transition）过程中触发时，可能会获取相同的异步存储锁，导致运行中的任务（turn） **永久卡死**。目前尚无关联的Fix PR，需要团队优先排查。

- **中高**:
    - **#5151** [Claude fails to create Reborn automation after trigger pause/resume tools are exposed](https://github.com/nearai/ironclaw/issues/5151): **核心体验Bug**。用户在暴露了暂停/恢复触发器工具后，使用Claude模型请求创建定时自动化任务，模型却无法正确调用`trigger_create`工具，而是调用其他无关工具并声称无法完成任务。这扰乱了核心自动化工作流。

- **中低**:
    - **#5157** [Inference section sometimes missing from Settings on Railway hosting](https://github.com/nearai/ironclaw/issues/5157): 在Railway托管环境下，设置页面的“推理”（Inference）部分偶尔不显示。这是一个影响特定环境的UI一致性问题。
    - **#5146** [No button to deactivate an extension](https://github.com/nearai/ironclaw/issues/5146): 功能可见性问题。扩展页面上缺少“停用”已激活扩展的按钮，用户无法在不离开该页面的情况下方便地管理扩展状态。
    - **#5147** [Flaky test: trigger_poller_does_not_submit_turn_for_unpaired_actor](https://github.com/nearai/ironclaw/issues/5147): 一个约1/3概率会失败的“不稳定”测试，它会阻塞合并队列，拖慢开发节奏。这需要被修复或重构。

### 6. 功能请求与路线图信号

- **#5167** [Stop tracking `dist` in git](https://github.com/nearai/ironclaw/issues/5167): 这是一个 **开发体验优化请求**。建议将构建产物`dist`目录从Git仓库中移除，改为在CI/CD和发布时再构建。这能减少PR中的代码变更噪音。此建议已有明确的实现思路，**很可能会在下一个版本中被采纳**。

- **#5144** [Show NEAR AI default base URL in provider card](https://github.com/nearai/ironclaw/issues/5144): **用户界面友好性请求**。当使用NEAR AI作为默认LLM提供者且未配置URL时，在提供者卡片上当前显示 `None`，建议显示一个有效的默认端点URL，以提升信息透明度。

- **#5120** [Unify gate declined semantics across auth, approval, and activity projection](https://github.com/nearai/ironclaw/issues/5120): **架构级清理请求**。提议统一不同场景下（如认证`Deny`、审批`Denied`）回绝（Declined）操作的命名和语义。这与即将合并的 **PR #5145** 密切相关，后者正在重构活动门（Activity Gate）的身份处理逻辑，表明该项目已被纳入开发计划。

### 7. 用户反馈摘要

从今日的issue评论中，可以提炼出一些真实的用户痛点和场景：

- **“空欢喜”的认证体验**：用户在提交Gmail认证时，**“对无效令牌显示成功”** (#3733) 的反馈非常尖锐。这表明用户对系统反馈的信任度已被这种误导性信息侵蚀。
- **“买椟还珠”的日历查询**：在 **#4640** 中，用户反馈`google-calendar.list_events`在查询“即将到来的会议”时，**竟返回了最早的事件**。这对于一个日历应用而言是破坏性的体验，暴露出API参数使用不当（缺少时间下限和排序）的根本问题。
- **“死胡同”般的错误处理**：在 **#4991** 中，用户反馈Google认证令牌过期后，WASM提供者仅返回一个通用的`operation_failed`，**没有给出认证失效的明确指引**，使用户陷入困境。这表明错误处理的设计应以用户为中心，提供可操作的下一步。

### 8. 待处理积压

以下为长期未解决或可能被忽视的重要议题，提醒维护者关注：

- **#4108** [Nightly E2E failed](https://github.com/nearai/ironclaw/issues/4108): **持续失败的CI信号**。这个问题自5月27日以来一直在更新（更新于6月23日），表明每日的端到端测试不稳定。这可能导致合并前无法准确判断代码健康状况，应优先解决。
- **#4640** [Reborn google-calendar list_events returns oldest events](https://github.com/nearai/ironclaw/issues/4640): **高影响力的体验Bug**。该问题于6月9日提出，至今已两周，尚无关联的Fix PR。考虑到这是一个基础功能的严重缺陷，建议提升优先级修复。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，这是为您生成的 LobsterAI 项目动态日报。

---

# LobsterAI 项目动态日报 - 2026年6月24日

**数据截止时间**: 2026-06-24 00:00 UTC

## 1. 今日速览

昨日LobsterAI项目活跃度较高，主要集中在代码合入与积压清理上。共有11个PR被处理，其中5个已合并/关闭，6个仍处于待合并状态。项目核心功能聚焦于**OpenClaw网关的稳定性、定时任务的UI/状态优化**以及**新增LiteLLM AI网关提供商支持**。此外，有一个遗留了两个半月之久的严重Bug Issue（#1400）仍在公开状态，用户报告了从3.30版本升级至4.1版本后服务反复重启的严重问题，目前尚无官方回复。

## 3. 项目进展

昨日合并/关闭的5个PR为项目带来了以下重要推进：

- **增强系统稳定性与兼容性**:
    - **[PR #2189]**: `fix(openclaw): migrate legacy cron storage on startup` (已关闭): 修复了OpenClaw旧版定时任务存储的迁移问题，确保旧数据能在新版本启动时被正确处理，对平滑升级至关重要。
    - **[PR #2190]**: `fix(openclaw): sync cron run sessions` (已关闭): 修复了OpenClaw中定时任务执行会话的同步问题，确保同一任务多次运行能正确复用本地会话，避免资源冲突和状态错乱。
- **优化用户体验**:
    - **[PR #2191]**: `fix(scheduled-task): clarify startup state` (已关闭): 明确了定时任务启动、加载、就绪和错误状态的区分，并在OpenClaw网关握手后立即刷新数据，提升了UI反馈的准确性。
    - **[PR #2192]**: `feat(cowork): add persistent plan confirmation flow` (已关闭): 一项重要的功能增强，为协同工作模式增加了“计划确认”流程，确保用户在确认执行前有调整计划的机会。
- **代码质量与维护**:
    - **[PR #2188]**: `Liuzhq/rlog` (已关闭): 此项为内部日志或日志格式优化，虽无详细描述，但表明团队在持续完善可观测性基础。

**总结**: 项目在解决旧版本遗留问题、提升系统健壮性和打磨用户体验方面有明显进展。

## 4. 社区热点

- **热点 Issue: [#1400] [OPEN] [stale] 4.1版本严重bug，网关反复启动失败...**
  - **链接**: [Issue #1400](https://github.com/netease-youdao/LobsterAI/issues/1400)
  - **热度**: 6条评论，0个👍
  - **分析**: 这是当前社区反馈的**最严重且最紧急的问题**。用户 `danielmonlite` 报告在从3.30升级到4.1后，项目完全瘫痪，且怀疑与自定义LLM配置冲突有关。该Issue自4月3日创建以来，**历经两个半月**仍未获得官方开发者的任何回复，成为了一个“stale”（过期）标签的Issue。这可能会引发其他用户对项目稳定性和维护响应速度的担忧。

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 问题描述 | 解决状态 |
| :--- | :--- | :--- | :--- |
| **致命** | [#1400](https://github.com/netease-youdao/LobsterAI/issues/1400) |  4.1版本升级后网关反复重启，服务完全瘫痪 | **未解决** (无官方回复) |
| 高 | [#1401](https://github.com/netease-youdao/LobsterAI/pull/1401) | `Math.random()`生成的流式请求ID可被预测，存在SSE数据流被订阅的安全风险 | **待合并** (已有`fix` PR) |
| 中 | [#1402](https://github.com/netease-youdao/LobsterAI/pull/1402) | 多选附件时，只有一个文件能被成功添加 | **待合并** (已有`fix` PR) |
| 低 | [#1403](https://github.com/netease-youdao/LobsterAI/pull/1403) | 国际化(i18n)中“删除”翻译缺失，导致中文界面显示英文单词`delete` | **待合并** (已有`fix` PR) |
| 低 | [#1406](https://github.com/netease-youdao/LobsterAI/pull/1406) | IM配置未开启时，通知渠道列表为空，导致新建任务时无法选择IM通知 | **待合并** (已有`fix` PR) |

## 6. 功能请求与路线图信号

- **新功能已落地**:
  - **[PR #2193] [OPEN]** `feat: add LiteLLM as AI gateway provider`: 这是一个重要的功能扩展。通过集成LiteLLM，用户可以将LobsterAI指向一个LiteLLM代理，从而访问**超过100种LLM提供商**，极大增强了模型的灵活性和选择性。该PR采用“零新依赖”策略，复用了现有OpenAI兼容接口，架构优雅。**该功能很可能被纳入下一版本。**
  - **[PR #2192] [CLOSED]** `feat(cowork): add persistent plan confirmation flow`: 该功能已被合入，为协作场景的“计划-执行”流程增加了确认环节，提升了可控性。

## 7. 用户反馈摘要

- **用户痛点**:
  - `danielmonlite` 在[Issue #1400](https://github.com/netease-youdao/LobsterAI/issues/1400)中表达了强烈的沮丧情绪，称项目“彻底瘫痪了”，并留下个人联系方式请求援助。这凸显了版本升级过程中的**兼容性问题**和**缺乏平滑迁移路径**。
  - 该用户同时指出，自定义LLM（qwen3.5-plus）无法调用，问题表现为“web-extractor无法在web-search未启用前提下启动”。这暗示了**功能模块间的依赖关系不够清晰**，用户配置时容易陷入死胡同。

## 8. 待处理积压

以下为长期未响应的重要Issue或PR，可能导致用户流失或影响项目声誉：

- **严重Bug**: [Issue #1400](https://github.com/netease-youdao/LobsterAI/issues/1400) “4.1版本严重bug” (已存在84天，无官方回复) - **优先级: 最高**
- **安全修复**: [PR #1401](https://github.com/netease-youdao/LobsterAI/pull/1401) “修复请求安全性问题” (已存在82天，状态: OPEN) - **优先级: 高**
- **UI/UX修复**:
  - [PR #1402](https://github.com/netease-youdao/LobsterAI/pull/1402) “keep all files from multi-select” (已存在82天，状态: OPEN)
  - [PR #1403](https://github.com/netease-youdao/LobsterAI/pull/1403) “add delete translation key” (已存在82天，状态: OPEN)
  - [PR #1406](https://github.com/netease-youdao/LobsterAI/pull/1406) “fallback notify channel list” (已存在82天，状态: OPEN)
- **功能优化**: [PR #1404](https://github.com/netease-youdao/LobsterAI/pull/1404) “定时任务创建界面时间控件优化” (已存在82天，状态: OPEN)

**分析**: 项目存在一批积压长达近3个月的PR。这些PR大多是明确的Bug修复和UI改进，其持续搁置可能会影响社区贡献者的积极性。特别是PR #1401涉及的安全性问题，应予以高度重视。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 (2026-06-24)

## 1. 今日速览

过去24小时内，Moltis项目处于“低活跃”状态，但有一条重要功能PR完成合并。无新Issues提交，也无新版本发布，说明项目主干演进趋于平稳，社区当前无紧急Bug反馈。唯一合并的PR（#215）为AI技能的跨平台图像发送能力扫清了最后一公里，整体推进了项目在多模态交互能力上的成熟度。项目健康度良好，但社区参与度处于蛰伏期。

## 2. 版本发布

无

## 3. 项目进展

- **PR #215 (已合并/关闭)** — 新增 `send_image` 工具，允许技能向Telegram等频道目标发送本地图像文件（PNG/JPEG/GIF/WebP）。该PR复用了现有的截图管道，在`screenshot`键中返回`data:` URI，由聊天运行器自动拾取，并支持可选的`caption`参数。该功能补全了从“截屏/生成图像”到“主动推送图像”的闭环，显著增强了Moltis在多模态交互场景中的实用性。
  - 链接: [https://github.com/moltis-org/moltis/pull/215](https://github.com/moltis-org/moltis/pull/215)

## 4. 社区热点

今日无活跃的Issues或PR讨论。唯一更新的PR #215在合并前处于长期待处理状态（从2026年2月创建到6月合并），可能反映了维护者对确定复用架构方式的谨慎，或社区对图像推送能力的实际需求尚未集中爆发。

## 5. Bug 与稳定性

今日未报告任何Bug、崩溃或回归问题。

## 6. 功能请求与路线图信号

当前无新的功能请求提交。但PR #215的合并暗示了项目路线图在向“富媒体交互”倾斜，后续可能继续推进：
- 支持除Telegram外的更多频道（如Slack、Discord）
- 添加图像处理/转换功能（如缩放、裁剪、滤镜）
- 支持视频/音频片段的发送与处理

## 7. 用户反馈摘要

今日无用户评论或反馈。

## 8. 待处理积压

**无长期未响应的重要Issue或PR。** 项目维护整体及时，无影响主干稳定的积压项。

---

**总结：** Moltis当前处于功能巩固阶段，PR #215的合入标志着项目在“复用管线”和“多模态输出”上的架构成果。社区活跃度较低，但核心基础设施持续完善，建议维护者后续关注图像发送实际场景中的兼容性问题，并适时考虑发布新版本以驱动用户测试。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是基于CoPaw项目（github.com/agentscope-ai/CoPaw）2026年6月24日数据生成的每日项目动态日报。

---

# CoPaw 项目动态日报 | 2026-06-24

## 1. 今日速览

CoPaw项目今日整体活跃度极高。过去24小时内，社区提交了38个Issue和50个Pull Request，项目维护者响应迅速，合并/关闭了21个PR和10个Issue，并发布了补丁版本 `v1.1.12.post2`。值得注意的是，社区贡献出现显著两极化：一方面，大量关于**移动端适配**和**前端单元测试**的PR被提出，显示出社区在积极贡献代码以提升用户体验和代码质量；另一方面，**Agent运行时稳定性**（定时任务、子代理、思考卡死）和**内存占用**问题成为用户反馈的焦点，多个高讨论度的Bug报告了核心功能的异常。项目当前处于“功能扩展”与“稳定修复”并行的关键阶段。

## 2. 版本发布

- **发布版本**: [v1.1.12.post2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.12.post2)
- **发布说明**: 这是一个紧急补丁版本，主要包含两项修复和一项增强。
    - **修复**: `fix: navigate to new chat after deleting the current session` - 修复了删除当前会话后导航到新会话的问题 (#5376)。
    - **增强**: `feat(console, chat): enhance file preview to support relative path` - 增强了控制台和聊天界面文件预览功能，以支持相对路径 (#5377)。
- **破坏性变更**: 无。
- **迁移注意事项**: 建议所有使用v1.1.12系列的版本升级至此补丁版，以修复删除会话后的导航Bug。

## 3. 项目进展

今日项目在稳定性和用户体验上有显著推进，主要集中在以下方面：

- **前端测试覆盖**: 两个仅包含测试的PR (#5437, #5433) 被 **关闭（已合并）** ，为前端核心模块（Inbox, Settings, Agents hooks等）新增了近300个单元测试用例，显著提升了前端代码的健壮性。
- **移动端适配**: 多个关于移动端布局的PR被**关闭（已合并）** ，包括Agent配置页(#5366)、模型管理页(#5397)和Chat头部的响应式布局(#5350)。这标志着移动端适配工作已从底层布局转向具体页面，项目对移动端的支持正在稳步推进。
- **记忆系统重构**: PR [#5450](https://github.com/agentscope-ai/QwenPaw/pull/5450) 被提出，对记忆管理进行了重构，旨在增强上下文处理能力，这或将对解决用户反馈的记忆召回和生命周期问题产生影响。

## 4. 社区热点

今日社区讨论焦点高度集中，反映了用户对核心功能的稳定性和易用性的强烈诉求。

- **Bug #1**: **[Bug]: 每次升级之后，被禁用的内置技能又会重新变回启用2.0** ([#5262](https://github.com/agentscope-ai/QwenPaw/issues/5262))
    - **热度**: 评论12条，为今日之最。这是用户第二次就该问题发起Issue，表明这是一个长期未决、且严重影响用户体验的痛点。
    - **诉求**: 用户期望应用能持久化用户配置（如禁用技能），在版本升级后保持旧有设置不变。

- **Bug #2**: **[Bug]: 由agnet生产的定时任务, 无法正常触发** ([#5064](https://github.com/agentscope-ai/QwenPaw/issues/5064))
    - **热度**: 评论12条，与#5262并列第一。
    - **诉求**: 用户强烈依赖Agent的定时任务功能进行自动化操作，该功能的不可用是严重稳定性问题。报告指出Agent生成的任务不仅无法触发，还不可编辑，导致功能完全瘫痪。

- **Bug #3**: **[Bug]: Cron scheduler stops dispatching enabled jobs** ([#5398](https://github.com/agentscope-ai/QwenPaw/issues/5398))
    - **热度**: 评论5条，与#5064问题类似，但背景更深，发生在应用进程仍在运行的情况下。
    - **诉求**: 用户揭示了`Cron`调度器存在更隐蔽的Bug，即在特定条件下（如未明确定义`thread_id`）调度器会“静默”停止工作，这对依赖定时任务的用户构成了严重风险。

**分析**: 围绕“定时任务”的多个高热度Bug表明，Agent的自动化能力存在系统性缺陷，是当前项目最需要优先解决的稳定性问题。

## 5. Bug 与稳定性

今日报告的Bug按严重程度排列如下：

- **【严重】系统级稳定**
    - **Cron调度器停止工作** (#5398): 调度器在应用运行期间“静默”失效。**状态**: 已关闭，表明已有修复。但问题#5064仍处于开放状态。
    - **Dream Task执行失败** (#5402): 三个Agent全部执行出错。**状态**: 已关闭。
    - **子代理审批请求无法推送至外部频道** (#5295): 重要安全机制缺陷。**状态**: 开放。

- **【中等】核心功能异常**
    - **Agent思考卡死** (#5328): 使用DeepSeek时，Agent在思考过程中频繁卡死，需手动干预。
    - **AGENT身份错位** (#5456): 在非默认Agent下，上下文构建错误，使用了错误的Agent ID。
    - **前端因大量工具调用而崩溃** (#5401): 会话历史中包含大量工具调用时，前端无法渲染。

- **【一般】使用体验问题**
    - **Shell命令解析失败** (#5373): 无法解析管道、重定向等标准Shell语法。
    - **自定义OpenAI兼容提供商不支持Function Calling** (#5345): 限制了模型选择。
    - **升级后内置技能重置** (#5262): 配置无法持久化。

**已有关联修复**: 定时任务相关Bug (#5398)已被关闭，推测已有修复计划。关于子代理权限和审批问题，社区成员已开始参与讨论。

## 6. 功能请求与路线图信号

今日用户提出的新功能需求反映出社区对更高的稳定性和更完善能力的期待：

- **稳定性优先**: 用户`Jailtonfonseca`明确提出“[在添加新功能前先稳定核心应用](https://github.com/agentscope-ai/QwenPaw/issues/5360)”，并列举了移动端适配、Agent交互、响应式、以及`replit`支持等问题。这代表了理性用户的心声，也验证了本日报“项目处于功能扩展与稳定修复并行阶段”的判断。
- **内存优化**: 多位用户集中反馈应用启动即占用1.4GB内存的问题 ([#5441], [#5439])，要求优化内存占用，这是对桌面端应用资源使用的核心诉求。
- **记忆系统增强**: Issue [#3995](https://github.com/agentscope-ai/QwenPaw/issues/3995) 和 [#5316](https://github.com/agentscope-ai/QwenPaw/issues/5316) 持续获得更新，用户期望引入更智能的记忆归档、清理和排序机制。这与今日提出的记忆重构PR [#5450] 高度契合，很可能被纳入下一版本。
- **其他**: 支持移动端访问、LaTeX公式渲染，以及对特定API提供商（如Kimi）的兼容性支持。

## 7. 用户反馈摘要

- **痛点**:
    - “每次升级都要手动禁用技能，很烦。”
    - “Agent创建的定时任务根本不能执行，等于废了。”
    - “启动就1.4G内存，太吓人了，希望能优化一下。”
    - “自定义模型要么用不了，要么界面体验很差。”

- **使用场景**:
    - 用户利用“定时任务”功能实现日常记忆更新和自动化工作流。
    - 用户深度依赖“技能”系统，但对应用升级丢失配置感到不满。
    - 社区贡献者正在通过补丁形式，积极为项目添移动端支持。

- **满意/表扬**:
    - 项目社区贡献活跃，从多个移动端适配PR和测试补充PR可以看出开发者对项目的认可度和贡献意愿。
    - 维护者对某些关键Bug和PR（如前端测试、移动端适配）响应迅速，合并效率高。

## 8. 待处理积压

以下是长期存在或重要的未响应/未处理Issue，需要维护者重点关注：

- **Issue #5262**: **【高优先级】** 升级后技能配置重置问题（2026-06-17创建）。该问题已有12条评论，是用户重复投诉的核心痛点，影响版本迭代体验。
- **Issue #5064**: **【高优先级】** Agent定时任务失效问题（2026-06-10创建）。与今日修复的Cron调度器问题相关，但用户报告的场景可能未完全覆盖，需确认是否已彻底解决。
- **Issue #3995**: **【中优先级】** 记忆系统增强（2026-05-01创建）。功能请求已提出近两个月，今日有新的PR对应此方向，但该Issue本身仍未正式被认领或关闭，建议维护者进行状态更新。
- **Issue #5166**: **【中优先级】** Python 3.13环境下TeamChat插件安装失败（2026-06-12创建）。Python版本兼容性问题，会阻碍新用户使用。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为ZeroClaw开源项目的AI分析师，我已根据您提供的GitHub数据，为您生成了2026年6月24日的项目动态日报。

---

## ZeroClaw 项目日报 — 2026-06-24

### 1. 今日速览

ZeroClaw 项目今日活跃度极高，社区与开发团队协作紧密。过去24小时内，Issue与PR的总处理量超过80条，显示出强大的社区参与度和项目维护效率。核心开发团队专注于**安全加固**、**运行时稳定性**和**跨入口点工具一致性**等关键领域，同时通过大量**单元测试**的补充（覆盖JSON-RPC、媒体分类、评估套件等），项目整体健康度显著提升。尽管暂无新版本发布，但RFC提案与Bug修复的快速推进表明，v0.9.0等相关里程碑正在稳步前进。

### 3. 项目进展

过去24小时，项目完成了19个PR的合并与关闭，以及13个Issue的关闭，功能与稳定性均取得实质性进展。

*   **关键功能修复与恢复**:
    *   **房间管理功能恢复**: PR [#8068](https://github.com/zeroclaw-labs/zeroclaw/pull/8068) 成功恢复了对Matrix聊天频道房间创建与用户邀请的支持，并将该功能与工具系统打通，为多用户协作场景奠定了基础。
    *   **Thinking 命令恢复**: PR [#8011](https://github.com/zeroclaw-labs/zeroclaw/pull/8011) 恢复了每个发送者独立的`/thinking`命令覆盖功能，允许用户在闲聊频道中精细化控制不同聊天对象的推理层级。
    *   **级联删除修复**: PR [#8074](https://github.com/zeroclaw-labs/zeroclaw/pull/8074) 修复了Gateway配置删除时的级联问题，确保删除Provider或Channel别名时，所有相关的引用和配置都会被正确清理，避免出现悬挂引用。

*   **测试基建强化**:
    *   **覆盖核心API**: PR [#8250](https://github.com/zeroclaw-labs/zeroclaw/pull/8250) 和 [#8248](https://github.com/zeroclaw-labs/zeroclaw/pull/8248) 为JSON-RPC消息助手和媒体附件分类增加了单元测试，锁定了关键数据结构与序列化契约。
    *   **覆盖评估与配置**: PR [#8244](https://github.com/zeroclaw-labs/zeroclaw/pull/8244) 和 [#8243](https://github.com/zeroclaw-labs/zeroclaw/pull/8243) 为评估套件的判分逻辑和配置模式的Markdown生成器增加了测试覆盖。
    *   **确定性测试**: PR [#8242](https://github.com/zeroclaw-labs/zeroclaw/pull/8242) 使控制面板的PID存活测试更加确定，不再依赖特定PID值，提高了测试在不同环境下的可靠性。

### 4. 社区热点

本周最受关注的议题集中在安全与架构领域。

1.  **插件系统安全（Issue #5919, #5918）**
    *   **链接**: [#5919](https://github.com/zeroclaw-labs/zeroclaw/issues/5919), [#5918](https://github.com/zeroclaw-labs/zeroclaw/issues/5918)
    *   **诉求**: 这两个已关闭的高优先级Issue讨论了WASM插件主机的安全风险。社区关注点在于，授予插件`env_read`权限后，其能读取任意环境变量（如API密钥），且`zc_http_request`函数缺乏SSRF防护。
    *   **分析**: 这表明项目在引入强大的WASM插件能力时，社区对于相应的权限模型和安全边界有极高要求。这两个Issue的快速讨论和关闭，反映了维护者已着手解决这些根本性安全问题。

2.  **零代码MCP工具可见性（Issue #8193）**
    *   **链接**: [#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)
    *   **诉求**: 用户报告了一个严重的工作流阻塞Bug：MCP服务器已连接并暴露了工具，但在ZeroCode的TUI界面中却无法看到和使用这些工具。
    *   **分析**: 这暴露了Gateway与ZeroCode TUI之间工具发现机制的不一致或同步延迟问题。作为最近大力推广的特性，此问题对用户体验影响很大，社区对此给予了高度关注。

### 5. Bug 与稳定性

过去24小时内，共报告了多个严重Bug，部分已有修复或正在修复中。

*   **S1 - 工作流阻塞**:
    *   `refreshed_new_session_system_prompt` 缺失技能加载 (Issue [#8202](https://github.com/zeroclaw-labs/zeroclaw/issues/8202)) - **进行中**。新会话会丢失捆绑的技能包。
    *   Groq Provider 多轮工具调用失败 (Issue [#8219](https://github.com/zeroclaw-labs/zeroclaw/issues/8219)) - **进行中**。特定模型在多次工具调用时序列化和响应结构有问题。
    *   系统提示工具可用性不匹配 (Issue [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054)) - **待修复**。已修复直接运行时路径但其他入口点仍存在同样问题。
    *   延期图片引用丢失 (Issue [#8151](https://github.com/zeroclaw-labs/zeroclaw/issues/8151)) - **待修复**。Bot在对话历史中无法再次引用之前看到的图片。

*   **S2 - 功能降级**:
    *   ZeroCode/TUI版本不匹配 (Issue [#8186](https://github.com/zeroclaw-labs/zeroclaw/issues/8186)，[PR #8186 已关闭](https://github.com/zeroclaw-labs/zeroclaw/issues/8186)) - **已修复**。ZeroCode TUI现在可以检测并警告版本不匹配。
    *   `voice_wake.rs`构建失败 (Issue [#8236](https://github.com/zeroclaw-labs/zeroclaw/issues/8236)) - **待修复**。编译错误导致`--all-features`构建失败。
    *   共享运行配置文件上下文压缩跨Provider失败 (Issue [#7964](https://github.com/zeroclaw-labs/zeroclaw/issues/7964)，[PR #7964 已关闭](https://github.com/zeroclaw-labs/zeroclaw/issues/7964)) - **已修复**。

### 6. 功能请求与路线图信号

*   **近期可期待的功能**:
    *   **支持每Agent自定义环境变量** (Issue [#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226))：社区需求强烈，已有初步讨论。这是一个提升安全性和灵活性的关键特性，很可能被纳入v0.8.3或v0.9.0。
    *   **独立委派模式** (Issue [#8238](https://github.com/zeroclaw-labs/zeroclaw/issues/8238))：允许专业Agent在其自有策略和工具集下运行，是对现有委派机制的增强，已进入开发状态。
    *   **钉钉频道流式消息** (Issue [#8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228))：跟随其他频道（如QQ、飞书）的趋势，减少用户长时间等待的焦虑，已提交RFC。

*   **架构级别信号**:
    *   **统一斜杠命令注册表** (RFC #7929)：计划用一个由Gateway提供的单一注册表取代Web、TUI和运行时中三个独立的命令注册表，提升一致性与可维护性。
    *   **废弃独立外部crate** (RFC #8043)：提议将`aardvark-sys` crate合并入`zeroclaw-hardware`，简化项目结构。

### 7. 用户反馈摘要

*   **痛点**:
    *   **MCP工具不可见**: 用户`Audacity88`在Issue #8193中反馈，配置好MCP服务器后，工具在TUI中“消失”，导致工作流完全中断。这揭示了新特性与用户界面集成的不畅。
    *   **跨会话技能丢失**: 用户`jokewithme110`报告，在启动`/new`新会话后，之前已经在workspace中配置好的技能包没有被加载，需要用户重复配置，体验不佳。
    *   **跨平台按键冲突**: 用户`tidux`在Issue #8075中提到，ZeroCode在macOS上的默认按键`ctrl+up`与系统/终端全局快捷键冲突，影响了使用流畅度。

### 8. 待处理积压 & 提醒

*   **未被解决的高风险安全问题**: Issue [#5919](https://github.com/zeroclaw-labs/zeroclaw/issues/5919) 和 [#5918](https://github.com/zeroclaw-labs/zeroclaw/issues/5918) 虽然已被关闭，但它们提出的WASM插件访问控制（环境变量白名单）和SSRF防护需求，目前尚未在Issue列表中看到对应的实现PR。**提醒维护者确认这些安全增强是否已被纳入下一个版本的工作计划。**
*   **长期积压的重构任务**: Issue [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) “audit: track 153 commits lost in bulk revert”，是一个历史遗留问题，旨在追踪和恢复被大规模回滚丢失的153个提交。该Issue自创建以来评论稀少，且状态为“in-progress”，可能需要维护者评估其当前优先级，是继续追踪还是归档。
*   **RFC等待维护者评审**:
    *   RFC: Retire the standalone aardvark-sys crate (Issue [#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043)) - 仍为 `needs-maintainer-review` 状态。
    *   RFC: In-app upgrade from web dashboard (Issue [#8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170)) - 仍为 `needs-maintainer-review` 状态。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*