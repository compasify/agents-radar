# OpenClaw 生态日报 2026-06-26

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-06-26 00:29 UTC

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

好的，作为AI智能体与个人AI助手领域开源项目分析师，现根据您提供的OpenClaw项目数据，生成2026年6月26日的项目动态日报。

---

# OpenClaw 项目动态日报 | 2026-06-26

## 1. 今日速览

OpenClaw 项目在2026年6月26日处于**极高活跃度**状态，社区贡献和问题反馈非常密集。过去24小时内产生了近1000条Issues和PR的更新，但值得注意的是，其中有超过90%的新增PR和活跃Issue处于“待合并”或“待维护者审查”状态，反映出项目维护者资源可能面临瓶颈。安全问题（如提示注入、越权、SSRF）和稳定性问题（如内存泄漏、会话状态异常）是当前的关注焦点，多个高优先级问题亟待解决。尽管没有新版本发布，但项目在修复边界响应读取、改进Codex集成和优化CLI命令健壮性等方面有具体推进。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

尽管没有新版本发布，但社区提交的PR中包含了重要的质量改进和功能修复，整体项目代码质量和安全性正在稳步提升：

- **修复Vydra和TTS的边界读取问题 (PR #96875, #96874, #96873)**：由`Alix-007`提交的系列PR，为Vydra控制响应、TTS服务响应和OpenRouter媒体响应添加了读取大小限制，防止因响应体过大导致OOM或进程挂起。**这显著提升了项目在处理不可信数据源时的健壮性**。
- **修复Codex原生工具完成等待 (PR #96818)**：修复了通过Discord路由的Codex Computer Use任务中，原生工具尚未完成就被空闲看门狗终止的问题，保证了长时间运行的工具调用能够正确完成。
- **修复Stream中推理与可见内容的冲突 (PR #96870)**：修复了当推理模型在流式输出时，`reasoning_delta` 和可见 `content` 跨越内联代码块边界导致内容丢失的显示问题，**显著提升了用户交互体验**。
- **修复CLI中Cron命令参数校验 (PR #96516, #96826)**：修复了 `cron add` 命令允许无效参数（如字符串、0值）并静默忽略的问题，现在会明确拒绝不合法的 `no-output-timeout-seconds` 和 `output-max-bytes` 值，**增强了CLI的健壮性和用户预期一致性**。
- **修复Gateway中止状态 (PR #91000)**：修复了在 `chat.send` 请求被拒绝后，中止（abort）结果可能被覆盖或丢失的问题，**确保了中止操作的正确传递**。
- **改进Discord子代理进度反馈 (PR #95604)**：为Discord通道添加了子代理进度反馈功能（正在审查中），这是提升用户体验的重要特性。

**项目流动性评估**：今日合并/关闭了3个PR（#68936, #96143, #61329），但相对于约500条的PR更新总量，合入比例极低（0.6%）。这表明项目审查和合并流程存在拥堵，代码积压风险较高。

## 4. 社区热点

今日讨论热度最高的Issues主要聚焦于**数据一致性、安全性和用户体验**，反映了社区对生产级可靠性的强烈诉求。

- **#58450 - Agent承诺无行动 (🦞 P2, 评论: 15)**
  - **链接**: `openclaw/openclaw/issues/58450`
  - **核心诉求**: Agent在对话结束时承诺进行后续操作（如“我将检查记忆库并给你回复”），但实际上并未启动任何后台任务。用户会误以为Agent在工作，实则被“欺骗”。这是关于Agent行为可信度和状态同步的核心痛点。
  - **分析**: 此问题严重影响了用户对Agent自主执行能力的信任，是高优先级的体验问题。

- **#63918 - Cron Agent发送无效`thinking`值 (🦞 P2, 评论: 17)**
  - **链接**: `openclaw/openclaw/issues/63918`
  - **核心诉求**: Cron任务在调用OpenAI GPT-5-nano等模型时，发送了不支持的`thinking=none`参数，导致400错误。用户希望Cron任务能复用会话中已配置好的`thinking=minimal`。
  - **分析**: 这是一个典型的配置继承错误，暴露了Cron任务在执行时未能正确继承和传递会话级别的模型参数，导致定期任务可靠性降级。

- **#48788 - 统一文件名编码方案 (🦞 P2, 评论: 18)**
  - **链接**: `openclaw/openclaw/issues/48788`
  - **核心诉求**: 现有PR仅修复了UTF-8编码问题，而社区希望引入一个中央化的文件名编码工具，以根本性地解决多编码（如Shift-JIS, EUC-KR, GB18030）场景下的文件名乱码问题。
  - **分析**: 这表明社区追求一个更具扩展性和鲁棒性的架构方案，而非零碎的修补。

## 5. Bug 与稳定性

今日报告的Bug数量众多，且影响面广泛。以下是按严重程度排列的关键问题：

**P1 (严重)**

- **#91009 - Codex PreToolUse钩子导致CPU 100% 和RPC阻塞 (🦞)**
    - **摘要**: 原生钩子中继生成大量CPU密集型进程，导致服务假死。
    - **链接**: `openclaw/openclaw/issues/91009`
    - **Fix PR**: 有关联PR (#91000)，目标在于修复gateway层面的问题。

- **#49603 - 孤儿锁文件在Gateway重启后无法清理 (🦞)**
    - **摘要**: Gateway进程重启后，PID存活导致旧锁文件未被清理，可能引发状态或数据一致性问题。
    - **链接**: `openclaw/openclaw/issues/49603`

- **#63216 - 同一会话键反复硬重置 (🦞)**
    - **摘要**: 特定群组会话即使配置了高`reserveTokensFloor`，仍反复触发上下文溢出硬重置，形成重试死循环。
    - **链接**: `openclaw/openclaw/issues/63216`

- **#53599 - Chrome扩展浏览器中继被移除，无跨机器替代方案 (🦞)**
    - **摘要**: v2026.3.22移除了Extension驱动，新的DevTools MCP方案仅限本机使用，导致托管服务商无法远程控制浏览器。
    - **链接**: `openclaw/openclaw/issues/53599`

**P2 (中等)**

- **#65624 - Mattermost斜杠命令使用明文回调URL暴露令牌 (🦞)**
    - **摘要**: CVSS评分8.6 (High)，可导致令牌重用和越权访问。
    - **链接**: `openclaw/openclaw/issues/65624`

- **#51429 - 硬编码工作路径 (🦞)**
    - **摘要**: 用户个人路径`/Users/wangtao`被发现硬编码进代码并被合并发布，导致新安装用户的工作目录设置错误。**这是一个典型的开发人员疏忽导致的问题**。
    - **链接**: `openclaw/openclaw/issues/51429`

- **#43747 - 内存管理混乱 (🦞)**
    - **摘要**: 同团队不同用户的内存存储行为不一致，有的存到`main.sqlite`，有的分散存储，反映出配置或默认行为的混乱。
    - **链接**: `openclaw/openclaw/issues/43747`

## 6. 功能请求与路线图信号

今日的功能请求体现了社区对**安全合规、企业级记忆管理、技能生态系统**的强烈需求。

- **#64046 - 敏感数据脱敏 (🦞 P1)**
    - **描述**: 用户请求对配置文件(`openclaw.json`)、日志和UI中的API Key、Token等敏感信息进行脱敏处理。**这是生产部署和合规性的硬性需求，极有可能被纳入下一版本**。
    - **链接**: `openclaw/openclaw/issues/64046`
    - **关联PR**: (无) 目前仍是纯Feature Request。

- **#60572 - 多槽位记忆架构 (🦞 P2)**
    - **描述**: 提议将单一`memory`槽位拆分为多个专用记忆槽，以支持不同记忆提供商在项目中同时发挥作用。
    - **链接**: `openclaw/openclaw/issues/60572`

- **#50090 - 社区技能开发与ClawHub (🦞 P2)**
    - **描述**: 深入讨论OpenClaw技能生态系统的现状与差距，认为从“承诺”到“实践”之间存在巨大鸿沟，涉及分发、安全审查、认证等多个环节。
    - **链接**: `openclaw/openclaw/issues/50090`

- **#63930 - 支持Anthropic Advisor工具 (🦞 P2)**
    - **描述**: 请求支持Anthropic的新服务器端 `advisor` 工具，这是一个可能的下一版本特性。
    - **链接**: `openclaw/openclaw/issues/63930`

**路线图信号**: 安全加固（脱敏）、记忆架构升级（多槽位）、以及平台生态（技能市场）是社区的关注热点，可能成为未来版本的重点方向。

## 7. 用户反馈摘要

- **痛点**:
    1.  **配置与预期不符**: “我设置了`verboseDefault=full`，但工具卡片还是折叠的。” (Issue #49944)
    2.  **行为不一致**: “内存管理一片混乱，我和同事的存储行为完全不同。” (Issue #43747)
    3.  **数据丢失/不可靠**: “Agent说会跟进但什么都没做。” (Issue #58450) / “WhatsApp重连后消息丢失。” (Issue #50093) / “同一个会话反复重置。” (Issue #63216)
    4.  **功能回归**: “Chrome扩展远程浏览器控制没了，这对我托管服务的场景是重大打击。” (Issue #53599)
    5.  **安全疑虑**: “明文存储API Key太可怕了。” (Issue #64046) / “配置文件里有别人的名字和路径。” (Issue #51429)

- **满意点**:
    1.  **积极贡献**: 大量高质量的PR修复，如`Alix-007`的系列边界读取修复，表明社区的开发能力和参与度很高。
    2.  **功能丰富**: 对高级特性（如`Anthropic advisor`工具、`Multi-Slot Memory`）的讨论，说明用户认为OpenClaw具备承载更强大功能的潜力。
    3.  **社区互助**: 用户积极报告复杂的Bug（如会话死循环、跨机器兼容性），帮助提升项目质量。

## 8. 待处理积压

以下问题或PR长期未得到维护者响应，可能成为项目的风险点，建议重点关注：

- **P (Platinum Hermit) 和 D (Diamond Lobster) 级且带有 `needs-maintainer-review` 标签的 Issue**:
    - **#55334** - `sessions.json` 无限制增长导致Gateway OOM (P1)
    - **#57326** - CLI后台路径仍绕过分发 (P1, Security)
    - **#63216** - 同一会话键反复硬重置 (P1)
    - **#52249** - ACP父会话在等待子进程完成时卡死 (P1)
    - **#54155** - Gateway内存泄漏 (P1)
    - **#50090** - 社区技能开发与ClawHub (P2, Security)

- **带有 `stale` 标签且优先级较高的 Issue**:
    - **#49603** - 孤儿锁文件 (P1)
    - **#49876** - Cron会话在工具失败时生成幻觉输出 (P1, Security)
    - **#58957** - 模型切换静默失败 (P1)
    - **#53599** - Chrome扩展回归 (P1)

- **长期未更新的PR**:
    - **#62417** (4月7日创建) - 工作区文件管理功能。这是一个需求度很高的功能，但长期处于 `needs-real-behavior-proof` 状态，亟需维护者介入。
    - **#61519** (4月5日创建) - 报告循环依赖的CI功能。对项目维护质量很重要，但已等待2个多月。

**总结**: OpenClaw项目社区活性极强，技术讨论深度高，这得益于其开放和模块化的架构。然而，维护者的审查和合并速度成为了当前项目的明显短板。大量高质量的安全、性能和功能PR处于待命状态，若不及时处理，可能导致社区贡献者的积极性受挫，并让生产部署环境面临已知风险。**项目维护团队亟需加强审查力度，优先处理高优先级的安全和不稳定问题，并建立更高效的CI/CD和PR审查流程。**

---

## 横向生态对比

好的，作为资深技术分析师，现根据您提供的2026年6月26日各项目动态，为您生成一份横向对比分析报告。

---

# 个人AI智能体/自主智能体开源生态横向分析报告 (2026-06-26)

## 1. 生态全景

2026年6月26日，个人AI智能体与自主智能体（Agent）开源生态呈现出**高活跃度、强安全导向、积极分层演进**的态势。**安全与生产级可靠性**已成为全行业的共同焦点，从OpenClaw的严重安全漏洞到NanoBot的密集安全审计，再到ZeroClaw的供应链安全RFC，都证明了这一趋势。功能层面，**MCP（模型上下文协议）深度集成、记忆系统架构升级（如多槽位）、以及子代理（Sub-Agent）协作模式的精细化**是各项目共同攻坚的技术高地。同时，社区对**用户体验（如跨平台兼容性、UI稳定性）和运维便利性（如服务化、资源限制）的诉求**也日益强烈，推动项目从“能用”向“好用、易管”转变。生态正从早期的百花齐放，进入以OpenClaw为核心参照，其余项目各自寻求差异化定位的**竞合发展阶段**。

## 2. 各项目活跃度对比

| 项目名称 | Issues (24h) | PRs (24h) | Release (24h) | 健康度评估 | 核心动态关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~500 | ~500 | 无 | **极高活跃，但审查瓶颈显著** | 安全漏洞修复、Codex集成、边界健壮性 |
| **NanoBot** | 20+ | 15+ | 无 | **活跃，健康** | MCP安全绕过修复、子代理聚合、平台适配 |
| **Hermes Agent** | 50 | 50 | 无 | **活跃，社区驱动** | 桌面端启动崩溃、零知识凭证、稳定性修复 |
| **PicoClaw** | 少量 | 19 (6合并) | 无 | **高活跃，密集迭代** | 进化模式Token浪费、Matrix权限修复、加密库替换 |
| **NanoClaw** | 1 | 15 (11合并) | 无 | **高活跃，维护高效** | 审批系统增强、容器资源限制、技能生态扩展 |
| **NullClaw** | 0 | 0 | 无 | **停滞** | - |
| **IronClaw** | 50 | 50 (25关闭) | 无 | **极高活跃，攻坚阶段性** | Reborn架构稳定性、企业级权限(ACL)、批量性能优化 |
| **LobsterAI** | 1 | 9 (9合并) | 无 | **高效维护，聚焦修复** | OpenClaw插件集成、协作计划模式、子代理轮询 |
| **TinyClaw** | 0 | 0 | 无 | **停滞** | - |
| **Moltis** | 0 | 0 | 无 | **停滞** | - |
| **CoPaw** | 27 | 50 | 无 | **极为活跃，大量首次贡献** | 浏览器进程泄露、Runtime 2.0待办、长消息排版错乱 |
| **ZeptoClaw** | 0 | 0 | 无 | **停滞** | - |
| **ZeroClaw** | 50 | 50 | 无 | **极高活跃，架构变革前夜** | Wasm插件化RFC、委托绕过安全漏洞、数据泄露路径 |

## 3. OpenClaw 在生态中的定位

*   **生态核心与参照系**：OpenClaw无疑是当前生态的核心参照系，其庞大的Issue和PR量（24h近1000条）远超其他项目，但其“开发者>维护者”的模式也导致了严重的**审查和合并积压**，这成为其当前主要短板。
*   **技术路线差异**：
    *   **相比NanoBot/CoPaw**：OpenClaw作为更成熟的项目，其安全讨论更多集中在“配置绕过”（如`allowPatterns`），而后者则暴露了更底层的“架构性”安全问题（如MCP作用域绕过）。**OpenClaw的成熟度体现在社区对安全边界的理解更深，但安全事件也暴露得更充分。**
    *   **相比Hermes Agent**：Hermes在桌面应用稳定性上遇到了典型的打包问题（`simple-git`缺失），而OpenClaw则更多关注服务端的性能（如内存泄漏、会话重置）和API合规性（如`thinking`参数）。**OpenClaw更侧重于服务器端长期运行的健壮性，Hermes则在用户终端体验上遭遇挑战。**
*   **社区规模对比**：OpenClaw的社区活跃度是**断崖式领先**的，但其社区贡献者与维护者的比例极不平衡，形成了一个“高产出、低消化”的社区模型。其他项目如NanoBot、IronClaw则表现出更健康、更快的维护响应速度。

## 4. 共同关注的技术方向

以下需求在多个项目中同时涌现，构成行业共识：

1.  **安全加固与敏感信息管理**
    *   **覆盖项目**: OpenClaw, NanoBot, ZeroClaw, PicoClaw
    *   **具体诉求**:
        *   **凭证脱敏**：OpenClaw(#64046)， ZeroClaw(#8312)。
        *   **执行层白名单绕过**：NanoBot(#4514)， ZeroClaw(#8279)。
        *   **核心库安全替换**：PicoClaw(#3088, `vodozemac`替换`libolm`)。

2.  **MCP（模型上下文协议）深化与安全**
    *   **覆盖项目**: OpenClaw, NanoBot, Hermes Agent
    *   **具体诉求**:
        *   **MCP作用域与工具控制**：NanoBot(#4517/4519)， OpenClaw(Codex集成)。
        *   **MCP空闲超时与资源回收**：NanoBot(#4506)。
        *   **凭证代理守护进程**：Hermes Agent(#4656)，确保沙箱内安全使用API Key。

3.  **记忆系统架构升级**
    *   **覆盖项目**: OpenClaw, NanoClaw, IronClaw
    *   **具体诉求**:
        *   **多槽位记忆**：OpenClaw(#60572)。
        *   **长期记忆与自我学习**：IronClaw(#5260)。
        *   **审批流程中的记忆**：NanoClaw(#2857)。

4.  **子代理（Sub-Agent）协作模式精细化**
    *   **覆盖项目**: OpenClaw, NanoBot, LobsterAI
    *   **具体诉求**:
        *   **聚合结果模式**：NanoBot(#4414)。
        *   **子代理进度反馈**：OpenClaw(#95604)。
        *   **子代理轮询修复**：LobsterAI(#2199)。

5.  **跨平台与终端体验统一**
    *   **覆盖项目**: NanoBot (PWA), Hermes Agent (Desktop, Windows), CoPaw (TUI), OpenClaw (Discord/WhatsApp)
    *   **具体诉求**: 移动端、桌面端、服务端软件包（如Nix、Docker）的一致性与稳定性。

## 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | ZeroClaw | IronClaw | CoPaw |
|:---|:---|:---|:---|:---|:---|
| **核心用户** | 技术极客，高级开发者，追求高度可定制化的个人/团队 | 安全意识高的开发者，部署者，追求快速迭代与安全性 | 前瞻性架构师，WebAssembly拥护者，追求极限轻量和安全 | 团队协作，企业级部署，重视管理功能与RBAC | 初学者，AI研究者，追求快速上手与平台融合 |
| **技术架构** | 单体式/可插拔，Golang为主，功能极其丰富 | 模块化，Node.js/TypeScript为主，快速迭代 | 激进创新，**Wasm-first**，Rust驱动，追求零信任安全 | **Reborn架构**，大版本重构，强化ACL与审计 | **AgentScope框架**，Python生态，强依赖外部模型提供商 |
| **核心优势** | **生态最大，功能最全**，社区驱动一切 | **安全响应极快**，代码质量高，维护效率高 | **架构极具前瞻性**，安全设计最底层，Wasm化是趋势 | **企业级能力突出**，权限管理与可观测性强 | **上手门槛最低**，与通义千问/Coze等平台绑定深 |
| **核心挑战** | **维护者瓶颈**，代码积压严重，生产环境Bug修复慢 | **平台兼容性**（如Windows），功能深度不如OpenClaw | **功能完成度低**，大量RFC待落地，Wasm生态尚不成熟 | **Reborn阵痛**，前端用户体验被诟病，新旧功能衔接问题 | **平台依赖过重**，独立性与可扩展性受限 |

## 6. 社区热度与成熟度

*   **快速迭代（萌芽-增长期）**:
    *   **NanoBot**：周更3-5次，社区反馈闭环快，是典型的快速增长项目。
    *   **CoPaw**：首次贡献者数量多，功能修复迅速，处于快速吸纳社区力量的阶段。
    *   **ZeroClaw**：虽然活跃，但更多体现在RFC和架构讨论上，实际功能落地速度待验证，属于“曲高和寡”但非常有潜力的阶段。

*   **质量巩固（成熟期）**:
    *   **OpenClaw**：功能极其丰富，但社区已从“追求新功能”转向“呼吁Stability和Security”。今日大量高优Bug（会话重置、内存泄漏）无人解决表明，其已进入**质量巩固瓶颈期**。
    *   **IronClaw**：对Reborn架构进行系统性压力测试和bug修复，进入**功能修补与企业化加固阶段**。
    *   **Hermes Agent**：修复桌面端启动崩溃、模型切换等影响用户体验的“最后一公里”问题，处于**品质打磨期**。

*   **低活跃（停滞/休眠期）**:
    *   `NullClaw`, `TinyClaw`, `Moltis`, `ZeptoClaw` 在过去24小时内无任何活动，建议关注其是否已停止维护。

## 7. 值得关注的趋势信号

1.  **安全从“功能”走向“意识形态”**：不再仅仅是“修Bug”，而是**从架构设计层面（如Wasm沙箱、零知识凭证代理）去定义安全**。`ZeroClaw`的Wasm-first和`Hermes Agent`的凭证代理是典型信号。这对开发者意味着，**在选择Agent框架时，安全架构的先进性将比功能数量更重要**。

2.  **子代理架构成为Agent工作流标准**：从简单的`spawn`，到现在的`聚合结果模式`、`进度反馈`、`错误处理`，子代理正在被构建为一种更精细、更可靠的**并行/异步工作流引擎**。这启发开发者可以将复杂任务分解为更小的、可审计的原子Agent。

3.  **“运维”从DevOps走向“AIOps”**：`NanoClaw`的容器资源限制、`PicoClaw`的Token浪费修复、`OpenClaw`的会话重置解决，都指向了**Agent运行时的资源管理、稳定性保障和成本控制**将成为下一个竞争焦点。对于部署者而言，**一个缺乏可观测性和精细配置的Agent框架将不具备生产价值**。

4.  **从“对话”到“工具/动作”的UI转变**：`NanoBot`的PWA支持、`Hermes Agent`的桌面包体/独立窗口、`CoPaw`的TUI模式，以及各项目对“工具卡片”样式的修整，都说明Agent的交互界面正在从单纯的命令行/聊天框，**转变为更接近“操作系统”或“IDE”的形态**，Agent的“动作”和“工具”将成为UI的主角。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，现根据您提供的NanoBot项目GitHub数据，生成2026年6月26日的项目动态日报。

---

## NanoBot 项目动态日报 | 2026-06-26

### 1. 今日速览

今日NanoBot项目活跃度极高，尤其是在安全领域。社区贡献者集中报告并修复了多个关键的安全漏洞，涉及MCP作用域绕过和`exec`工具的命令注入，这表明项目在安全审计方面进入了密集期。与此同时，多个功能增强PR（如PWA支持、子代理聚合模式、MCP空闲超时）也在持续合并与推进中，显示项目正朝着更稳定、功能更丰富的方向快速演进。总体而言，项目处于高度活跃且健康的迭代阶段。

### 2. 版本发布

*   无新版本发布。

### 3. 项目进展

今日有14个PR被合并或关闭，标志着项目在多个方面取得了实质性进展：

*   **安全加固**：合并了多个针对`exec`工具安全漏洞的修复PR，包括防止通过命令链（chained commands）绕过`allowPatterns`白名单的修复（#4526），以及处理格式错误的工具调用（#4510）。这些修复有效提升了`exec`工具的安全性。
*   **平台集成修复**：合并了对钉钉（DingTalk）平台富文本格式和超时问题的修复（#4497）和对小米MiMo ASR语音转文字功能的前端适配修复（#4493）。
*   **文档与社区**：合并了为README添加HVTracker信任徽章的PR（#4503），增强了项目透明度和社区信任信号。
*   **功能优化**：关闭了关于允许自定义提供商配置思考模式的功能请求（#4429），表明该特性已得到解决。此外，关于子代理错误处理行为（#4198）的增强请求被关闭，暗示了相关改进已被纳入。

### 4. 社区热点

今日讨论最集中的是安全问题，由安全研究员 `YLChen-007` 贡献的一系列报告主导了社区讨论。

*   **核心议题：`exec`工具及MCP安全漏洞**
    *   报告者 `YLChen-007` 挖掘并报告了多个安全问题，包括：`exec.allowPatterns` 绕过问题（#4514, #4515, #4516, #4520, #4521）和MCP `enabledTools` 作用域绕过问题（#4517, #4519）。
    *   **背后诉求**：社区和贡献者高度关注NanoBot在生产环境下的安全性。这些报告揭示了配置白名单（`allowPatterns`, `enabledTools`）的实现缺陷，可能导致权限提升或意外命令执行。贡献者指出，当前机制未能彻底过滤shell命令，或未能限制MCP的资源/提示词暴露，这对部署有安全需求的用户构成严重风险。
    *   **响应**：项目组反应迅速，贡献者 `axelray-dev` 立即提交了修复PR #4524和#4526，针对性地解决了MCP和`exec`工具的绕过问题，展现了项目对安全漏洞的高度重视和快速响应能力。

### 5. Bug 与稳定性

今日报告的Bug主要集中在Windows平台兼容性和安全漏洞上。

*   **严重 - 安全漏洞 (已有修复PR)**
    *   `exec.allowPatterns` 多种绕过方式：报告了至少5种方式可绕过该白名单，导致执行未经授权的命令（#4514, #4515, #4516, #4520, #4521）。
    *   MCP `enabledTools` 作用域绕过：当配置为“禁止所有工具”时，资源（Resource）和提示词（Prompt）功能仍会暴露给模型（#4517, #4519）。
    *   `exec` 工具默认使用登录Shell：可能导致从Shell启动文件中泄露密钥（#4518）。
    *   **已有修复PR**：`axelray-dev` 提交的 #4524 和 #4526 旨在解决上述大部分安全问题。

*   **中等 - Windows平台兼容性问题**
    *   **`--background` 选项与 `/restart` 冲突** (#4511)：用户在Windows下使用`--background`后台运行，重启后程序状态与记录文件不一致。
    *   **nssm服务化后 `/restart` 异常** (#4513)：将NanoBot设为Windows系统服务后，重启命令会导致端口占用或服务意外停止。

*   **低 - 回归问题**
    *   Telegram Web版消息不兼容 (#4488)：一项富文本功能更新导致Telegram Web端出现“This message is not supported”的提示，但Android客户端正常。

### 6. 功能请求与路线图信号

*   **PWA与移动端体验**：社区提出为WebUI增加PWA支持和移动端侧边栏滑动手势 (#4479)。贡献者 `zpljd258` 不仅提出了需求，还提交了实现PR (#4494)，目前该PR仍为开放状态，可能进入下一版本。
*   **MCP服务器空闲超时**：`primit1v0` 提交了PR (#4506) 提议为MCP服务器添加空闲超时自动关闭功能，以防止资源泄漏。这是一个对服务器运维非常实用的功能，有较大概率被纳入后续版本。
*   **子代理功能增强**：`yu-xin-c` 提交了多个与子代理相关的增强PR，包括`aggregated result mode`（聚合结果模式，#4414）和 `spawn model override`（生成模型覆盖，#4415）。这些特性表明项目正在深化子代理的架构能力。
*   **新增`ask_clarification`工具**：用户`ZhouJ-sh` 提出 (#4508) 当用户输入模糊时，让Agent主动请求澄清。这是一个提升用户体验的经典功能请求，但与当前密集的安全修复相比，优先级可能稍低。

### 7. 用户反馈摘要

*   **对安全性高度敏感**：安全研究员 `YLChen-007` 的系列报告表明，社区中有专业力量在主动深入审计项目，并愿意公开分享发现，这有助于项目长期健康发展。
*   **Windows用户痛点明确**：多位用户（`Quincy-Zh`）报告了Windows平台下服务化和后台运行的问题，说明NanoBot在Windows上的运维体验仍有提升空间。
*   **功能需求与修复反馈**：用户`sseepsse` 报告的钉钉集成问题 (#4497) 和 `chengyongru` 报告的Telegram回归问题 (#4488) 及时获得了社区关注并得到修复，体现了用户声音被快速响应。关于子代理在没有`fail_on_tool_error`时无法自我纠正的反馈 (#4198) 也已关闭，应该进行了相应改进。

### 8. 待处理积压

*   **#1710**: **处理空响应问题** (2026-03-08 创建，已关闭)
    *   *状态更新*：该Issue已于2026-06-25日被关闭。虽然今日日报中它出现在列表里，但事实上已被处理。

*   **#4511 / #4513 (已开放)**: **Windows服务管理问题**
    *   这两个关于Windows环境下服务化与后台运行的Bug自创建至今（1天）尚未有官方回复或指派，建议维护者关注，以改善Windows用户的使用体验。
    *   [Issue #4511](https://github.com/HKUDS/nanobot/issues/4511)
    *   [Issue #4513](https://github.com/HKUDS/nanobot/issues/4513)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的 Hermes Agent 项目数据，生成 2026-06-26 的项目动态日报。

---

# Hermes Agent 项目动态日报 | 2026-06-26

## 1. 今日速览

今日项目活跃度**极高**，共处理 50 条 Issue 和 50 条 PR，社区贡献者非常活跃。核心亮点包括：桌面端因 `simple-git` 模块缺失引发的启动崩溃（#52735）已引发快速响应，至少出现两个修复 PR（#52741, #52745）；同时，一个关于“零知识凭证代理守护进程”的重要功能讨论在沉寂多日后获得社区关注。此外，新一轮的稳定性修复持续进行，涉及 DeepSeek 工具调用修复、LSP 内存泄漏等多个领域。总体而言，项目正处于高速迭代期，社区驱动的问题发现与修复循环健康且高效。

## 2. 版本发布

*(无新版本发布)*

## 3. 项目进展

今日有 **19 个 PR 被合并或关闭**，表明项目持续保持快速的迭代节奏。重要进展包括：

- **【紧急修复】桌面端启动崩溃**：针对用户报告的 `simple-git` 模块缺失问题，社区贡献者 `fshaan` (#52741) 和 `ethernet8023` (#52745) 分别提交了修复方案，通过将 `simple-git` 打包进应用程序来解决 Electron 打包后依赖缺失的问题。这是对用户报告的快速响应。
    - [PR #52741: fix(desktop): bundle simple-git into the packaged app](https://github.com/NousResearch/hermes-agent/pull/52741)
    - [PR #52745: desktop: bundle main.cjs for electron](https://github.com/NousResearch/hermes-agent/pull/52745)

- **【稳定性】其他已合并/关闭的修复**：包括修复了 `stored_prompt_matches_runtime` 返回最后一个匹配而非第一个的 Bug (#49462)，修复桌面渲染器崩溃 (#41693)，以及修复了 Nix 构建中 `extraPythonPackages` 硬失败的问题 (#48071) 等。这些修复共同提升了项目的稳定性和兼容性。
    - [Issue #49462: Bug:_stored_prompt_matches_runtime_line_value_returns_last_match_instead_of_first](https://github.com/NousResearch/hermes-agent/issues/49462)
    - [Issue #41693: [Bug]: Hermes Desktop renderer crashes...](https://github.com/NousResearch/hermes-agent/issues/41693)
    - [Issue #48071: [Bug]: Nix level-1 gateway install generates systemd unit...](https://github.com/NousResearch/hermes-agent/issues/48071)

## 4. 社区热点

今日讨论最集中的是以下两个议题：

- **[Feature]: credential proxy daemon** (#4656): 这个关于零知识凭证代理的提案在今日获得了 11 条评论，成为讨论最为热烈的 Issue。社区正在深入探讨如何在沙箱环境中安全地注入 API 密钥，而无需将其暴露给沙箱进程本身。这反映了项目在安全问题（尤其是凭证泄露）上引发的深度技术讨论。
    - [Issue #4656: [Feature]: credential proxy daemon...](https://github.com/NousResearch/hermes-agent/issues/4656)

- **[Bug]: Desktop app crashes on launch — Cannot find module 'simple-git'** (#52735): 此 Bug 引发 8 条评论，并迅速催生了修复 PR。它暴露了 Electron 桌面应用在打包时对 Node.js 原生模块或依赖（`simple-git`）处理不当的问题，是一个典型的回归或打包事故，对用户影响直接（应用无法启动）。
    - [Issue #52735: [Bug]: Desktop app crashes on launch...](https://github.com/NousResearch/hermes-agent/issues/52735)

## 5. Bug 与稳定性

今日报告的 Bug 主要集中在以下几个方面，按严重程度排列：

| 严重程度 | Issue | 摘要 | 状态 |
| :--- | :--- | :--- | :--- |
| **P1** | #14185 | `todo_tool` 因 LLM 返回字符串而非数组而崩溃 | 已关闭/已解决 |
| **P1** | #29912 | 策划器可能在合并技能时错误地归档活跃技能 | 开放 |
| **P1** | #43719 | 恶意第三方插件利用 Dashboard 漏洞发起攻击（安全事件） | 已关闭/已响应 |
| **P2** | #52735 | 桌面应用启动崩溃 (`simple-git` 缺失) | **已有fix PR (#52741, #52745)** |
| **P2** | #52753 | Windows 桌面应用更新后崩溃 (与#52735 重复) | 开放 (标记为重复) |
| **P2** | #36658 | Dashboard 聊天功能在更新后损坏 (React 错误) | 开放 |
| **P2** | #46260 | Windows 安装器在桌面阶段因 `npm install` 失败 | 开放 |
| **P2** | #20084 | TUI 中 Markdown 渲染错误地抹去了代码块中的星号 | 开放 (持续1个月) |

**重点关注**: `Curator may archive active skills` (#29912) 是一个潜在的严重问题，可能导致用户丢失关键技能。

## 6. 功能请求与路线图信号

新提出的功能请求和社区讨论显示了项目未来的发展方向：

- **广泛的语言/平台支持**：
    - 用户提出了**俄语本地化**请求 (#52137)，这是继法语、中文、葡萄牙语之后的新语言需求。
    - 增加 **Telegram Bot API 10.1 富消息**支持 (#44428)，紧跟平台功能演进。
    - 允许**按消息平台禁用工具集** (#52597)，赋予用户更精细的控制权。
    - 改进 **Discord gateway 的大文件上传**体验 (#50846)。

- **安全与基础设施增强**：
    - `credential proxy daemon` (#4656) 的讨论热度不减，指向了下一阶段的安全架构升级。
    - 为 Dashboard 添加 `--allowed-hosts` 标志 (#34390)，以适配反向代理和 Tailscale 网络，是提升企业级部署能力的关键需求。

- **确定性信号**：
    - 多个与 **`/model` 切换后 session 数据不同步**相关的 Issue (#48248, #48173) 被关闭/修复，表明项目团队正在积极清理这方面的问题。
    - 新增的 `i18n` 支持 PR (#38846) 和 `README` 改进 PR (#52755) 被提交，表明项目在用户体验和项目宣传上持续投入。

## 7. 用户反馈摘要

从议题评论和报告描述中，可以提炼出以下用户声音：

- **痛点**:
    - **更新/安装体验差**: “After an in-app desktop update... fails to launch” (#52735) 和 “INSTALL DIDN'T FINISH. Hermes installer fails... on Windows 10” (#46260) 直接反映了升级和安装环节的用户挫折感。
    - **模型切换不稳定**: “Mid-session model switch leaves stale provider in session DB and misleads dashboard model cards” (#48248) 指出切换模型后信息不同步，导致 Dashboard 界面误导用户。
    - **跨会话记忆失效**: “An AI that can't remember what happened 5 minutes ago is broken.” (#19434) 用户犀利地批评了会话搜索 `session_search` 功能的缺陷，认为其核心目标失败。
    - **不直观的UI/UX**: “Copying a Markdown-rendered table... does not preserve the table cleanly... carries over dark-theme table styling” (#52695) 表明复制粘贴功能无法很好集成到其他应用，影响了工作流。

- **使用场景与诉求**:
    - **安全敏感场景**: 用户对 `credential proxy daemon` (#4656) 的讨论表明，有相当一部分用户在用 Hermes 构建需要处理敏感凭据的自动化工作流。
    - **社交平台集成**: 许多功能请求和 Bug 报告聚焦于 Slack、Telegram、Discord、Matrix 等社交平台的行为，说明这些是 Hermes 的主要用户入口。
    - **企业级部署**: `--allowed-hosts` 标志 (#34390) 和 Nix 构建问题 (#43810, #48071) 的提出，说明有用户正在将 Hermes 运用于更正式的生产环境中。

## 8. 待处理积压

以下是未关闭且在过去48小时内无人响应的**长期未解决**或**重要**议题，建议维护团队关注：

- **[Bug]: Dashboard chat feature is broken after hermes update** (#36658): 自 6 月 1 日提出，已过去近一个月，且为 P2 级别 Bug，影响 Dashboard 核心功能。
    - [Issue #36658](https://github.com/NousResearch/hermes-agent/issues/36658)

- **[Bug]: Markdown rendering strips asterisks in code blocks** (#20084): 自 5 月 5 日提交，持续近两个月，严重影响 TUI 用户的开发体验（C/C++ 指针完全不可读）。
    - [Issue #20084](https://github.com/NousResearch/hermes-agent/issues/20084)

- **[Feature Request] Add Russian (ru-RU) localization** (#52137): 虽然提交时间不长，但作为多语言需求的延续，社区需求强烈，却未见维护者或社区成员认领。
    - [Issue #52137](https://github.com/NousResearch/hermes-agent/issues/52137)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，以下是根据您提供的PicoClaw GitHub数据生成的2026年6月26日项目动态日报。

---

# PicoClaw 项目动态日报 | 2026-06-26

## 1. 今日速览

PicoClaw 项目今日整体活跃度极高，尤其在代码维护和稳定性修复方面。过去24小时内，共有19个PR被创建或更新，其中6个已合并/关闭，显示出维护者团队正在积极清理和推进代码库。虽然没有新版本发布，但针对核心通道（LINE、Matrix）、进化（Evolution）特性以及OpenAI兼容性模块的BUG修复取得显著进展。同时，一个关于替换不安全加密库libolm的高优先级功能请求（#3088）获得了持续关注，表明社区对项目安全性的重视。总体来看，项目正处于一个密集的、以小幅度修复与依赖更新为主的健康迭代阶段。

## 2. 版本发布

*无。* 过去24小时内未有新版本发布。

## 3. 项目进展

今日合并/关闭了6个PR，主要推进了以下关键修复：

- **核心稳定性与资源泄漏修复**：
    - **`fix(evolution): skip cold path for heartbeat turns` (#3169)**: 修复了进化（Evolution）模式下，心跳检测（Heartbeat）会不必要的触发“冷路径”调度，从而浪费Token的问题。该PR还增加了回归测试。
    - **`fix(openai_compat): use structured logger for native_search warning` (#3166)**: 修复了`openai_compat`模块中因使用未定义的`log`导致的构建失败问题，提升代码健壮性。
    - **`fix(model): handle error response read failures` (#3168)**: 修复了在获取OpenAI兼容模型列表时，如果服务器返回错误且响应体读取失败，会给出空或误导性HTTP错误的问题。现在能正确返回底层读取错误。

- **用户权限与身份解析修复**：
    - **`fix(identity): allow_from fallthrough for Matrix user IDs with colon` (#3045)**: 修复了`allow_from`配置项无法正确匹配标准Matrix用户ID（如`@alice:example.com`）的BUG。此前正则解析会将冒号分隔错误，导致该功能失效并静默拒绝消息。

- **代码质量提升**：
    - **`fix(skills_install): add ok checks for version and force type assertions` (#3092)**: 为`skills_install`模块中的类型断言增加了安全校验，防止因参数类型不匹配导致静默失败或错误行为。

**项目进展总结**：项目在核心功能的异常路径处理和资源利用效率方面取得了扎实进展，同时修复了社区反馈的Matrix渠道兼容性问题，整体稳定性得到加强。

## 4. 社区热点

今日最受关注的议题是长期未决的高优先级功能请求：

- **`[Feature] use vodozemac instead of libolm` (#3088)**
    - **热度**：2个 👍，3条评论。
    - **链接**：https://github.com/sipeed/picoclaw/issues/3088
    - **分析**：该Issue呼吁用更安全、官方维护的`vodozemac`库替换已停止维护且有安全隐患的`libolm`。该Issue已被标记为 `help wanted`、`priority: high` 和 `stale`，表明这是一个重要的安全债问题，但长期未能解决。社区关注度较高，期望维护者能尽快推进。此外，针对同一主题的**PR #3063 (feat: add deltachat gateway)** 也仍在开放中，显示社区对通信底层安全的诉求非常强烈。

## 5. Bug 与稳定性

今日无新Bug报告，但维护者积极修复了多个此前报告的Bug，严重性如下：

| 严重程度 | 关键问题 | 状态 | 相关链接 & 备注 |
| :--- | :--- | :--- | :--- |
| **高** | **进化模式（Evolution）持续消耗Token** | **已关闭 (#3012)** | 用户`xpader`报告，启用进化模式后，代理每分钟都在消耗Token。PR #3169已修复心跳消耗的问题。 |
| **中** | **Matrix用户`allow_from`配置失效** | **已关闭 (#3045)** | 用户`chengzhichao-xydt`的PR修复了此问题，影响了使用标准Matrix ID的用户。 |
| **低** | **OpenAI兼容模块构建失败** | **已关闭 (#3166)** | 修复了由`log.Printf`引起的编译错误，确保了代码可构建。 |
| **低** | **`skills_install`参数类型断言缺陷** | **已关闭 (#3092)** | 修复了可能导致`version`或`force`参数被静默忽略的问题，增强了用户体验的确定性。 |

**总结**：今日没有新的严重回归或崩溃报告，重点在于解决已发现的稳定性问题。

## 6. 功能请求与路线图信号

- **高优先级**：
    - **`use vodozemac instead of libolm` (#3088)**: 这是一个安全驱动的核心库替换请求，是社区共识较高的需求，很可能被列入未来版本的里程碑规划。相关PR `#3063` (DeltaChat网关) 也间接依赖于此。
    - **`Add remote Pico WebSocket mode` (PR #3118)**: 该PR处于开放状态，为现有agent命令增加了远程WebSocket模式，是一个比较重要的能力扩展，可能被纳入下一个次版本更新。

- **中优先级**：
    - **`Fix inline data URL media extraction for generic tool output` (PR #3115)**: 修复了通用工具（如`read_file`）输出中包含Base64图片数据时导致的会话历史损坏问题。这对于代理的通用文件处理能力至关重要。
    - **`feat: add deltachat gateway` (PR #3063)**: 一个新增通讯渠道的请求，体现了项目对去中心化和安全通信的探索。

**路线图信号**：从大量Dependabot的依赖更新PR可以看出，维护者正在积极进行依赖的现代化更新，为项目注入持续的生命力。下一个小版本可能聚焦于渠道扩展（WebSocket、DeltaChat）和安全库的升级。

## 7. 用户反馈摘要

- **痛点**：
    - **进化模式Token消耗问题（#3012）**：用户`xpader`发现进化模式会导致Token被持续无意义消耗，这是一个影响使用成本的痛点。该问题已随PR #3169被修复。
    - **渠道兼容性问题（#1757, #3045）**：用户在Telegram出现“渠道错误”（#1757），以及Matrix的“allow_from”配置失效（#3045），这些都直接影响了特定渠道用户的实际使用体验。其中Matrix问题已被修复。
- **需求**：
    - **安全性**：用户`pbsds`明确提出用`vodozemac`替换`libolm`，这反映了用户对底层通信库安全性的高度重视。
- **满意度**：从PR的快速响应和合并情况看（如 #3166, #3168, #3169在一天内被合并），社区对维护者修复BUG的速度和效率应该是满意的。

## 8. 待处理积压

- **最需关注**：
    - **`[help wanted, priority: high, stale] [Feature] use vodozemac instead of libolm` (#3088)**
        - 链接：https://github.com/sipeed/picoclaw/issues/3088
        - **提醒**：此高优先级安全议题已停滞超过两周，并被打上了`stale`标签。亟需维护者给予明确回应、排期或社区开发者接手实现。

- **长期未响应的PR**：
    - **`feat: add deltachat gateway` (#3063)**: 已开放超过18天，作者`trufae`投入了相当的工作量，但尚未有维护者的代码审查反馈或合并意向。
    - **`fix(spawn): clear ForUser in sub-turn ToolResult to prevent duplicate messages` (#3142)**: 修复一个可能导致重复消息的BUG，已开放超过8天，应尽快审查。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，这是根据您提供的NanoClaw项目数据生成的2026年6月26日项目动态日报。

***

# NanoClaw 项目动态日报 | 2026-06-26

## 1. 今日速览
今日项目活跃度较高，主要体现为 **大量PR合并与关闭**，总计处理了15条PR，其中11条已被合并或关闭，显示维护者正在集中清理积压的贡献。社区提交的 `add-clidash` 技能及其相关修复PR (#2858) 是今日的焦点，但该PR与旧版PR (#2795) 同时存在，表明该功能的引入流程仍在进行中。值得注意的是，一个关于**多管理员审批**的Issues (#2857) 被提出，指出了当前审批流程的单点故障问题。整体来看，项目核心功能持续完善，社区贡献活跃，但部分功能整合流程有待规范。

## 2. 版本发布
*   过去24小时内无新版本发布。

## 3. 项目进展
今日项目向前迈进了多个关键领域，主要体现在以下几点：

*   **审批系统增强**：PR #2832 已合并，增加了“附带理由的拒绝”功能。现在审批人可以在拒绝时附加一行说明，反馈给Agent，使其能根据具体原因调整行为。这是对Agent协作流程的重要补充。
*   **平台与路由稳定性**：PR #2471 和 #2472 均已合并，共同解决了Slack DM频道下 `per-thread` 会话模式的bug，使得每个顶级的DM消息都能创建独立会话回复在对应线程中，修复了一个长期存在的混乱问题。
*   **容器资源管理**：PR #2856（`feat(container): per-container CPU/memory limits`）已合并。引入了`CONTAINER_CPU_LIMIT`和`CONTAINER_MEMORY_LIMIT`两个可选环境变量，允许管理员限制单个Agent容器的资源占用，防止其在多Agent共享主机上抢占资源。
*   **安全与基础设施修复**：多个由贡献者`mksocial19-code`提交的安全与稳定性修复PR已合并，包括：限制`send_file`读取到工作目录内、修复路由器JSON解析、修复CLI因字节数超限导致的socket响应截断问题、以及修复macOS环境下因TMPDIR路径导致的网关CA证书挂载失败问题。
*   **技能生态扩展**：PR #2843（`feat: add /learn skill`）已合并。新增了一个强大的`/learn`技能，允许用户从任何来源（本地目录、URL、粘贴文本等）“学习”并提炼出一个可复用的技能，极大地简化了用户自定义技能的创建流程。

## 4. 社区热点
*   **#2857: 审批功能应支持多管理员及CLI审批** ([链接](https://github.com/qwibitai/nanoclaw/issues/2857))
    *   这是今日唯一新开的Issues，虽然目前没有评论，但它触及了一个核心痛点：**单点故障**。当前审批流程只能发给一个管理员，若该管理员不可用，审批流程即停滞。提案要求支持轮询其他管理员或指定特定管理员，并允许拥有机器访问权限的owner通过CLI进行审批。这反映了用户对生产环境可靠性和容错性的实际需求。

## 5. Bug 与稳定性
*   **严重**： `v2`数据库迁移脚本 `1b-db` 步骤崩溃（PR #2859）。原因是从`v1`版本的`registered_groups`表中查询了一个在旧版（如1.1.0）中不存在的`is_main`列。此Bug会导致`v2`数据库无法创建，进而影响后续所有会话和任务。该PR (#2859) 目前处于待合并状态，正在修复中。
*   **严重**： macOS系统 (Rancher Desktop) 上的Agent容器因网关CA证书挂载路径问题，导致所有API调用失败（PR #2854）。该问题描述清晰且有明确根因，贡献者`rodrigocuriel`已提交修复PR，并已被合并。 [已修复]
*   **中等**： 卸载NanoClaw后，系统残留的launchd/systemd服务单元会因指向已不存在的二进制文件而反复尝试重启，导致系统资源浪费（PR #2830）。修复PR已合并，为`setup`环节增加了清理机制。 [已修复]

## 6. 功能请求与路线图信号
*   **多管理员与CLI审批** (Issue #2857): 在最新的审批功能（如带理由拒绝 #2832）之上，用户提出了更高级的管理流程需求。考虑到项目近期对审批功能多次开发，此功能被纳入下一版本的可能性很高。
*   **`/add-clidash` 技能优化** (PR #2795 & #2858): 用户可以快速创建一个“只读的CLI仪表盘”技能。PR #2858是在PR #2795的代码基础上，按维护者要求进行改进后的替代品。这显示出社区对快速制作系统管理面板有强烈兴趣，但流程上需要确保新旧PR的整合，该功能有望在本次迭代中落地。

## 7. 用户反馈摘要
*   **痛点**：用户`sirpy` (Issue #2857) 明确指出了审批流程的单点故障问题，“如果那个管理员不可用，其他管理员也无法批准”，这是一个真实的运维痛点。
*   **使用场景**：用户`leetwito` (PR #2795) 提交`/add-clidash`技能，表明用户希望利用NanoClaw的Agent能力，快速为自己熟悉的CLI工具创建一个可视化的只读界面，用于日常监控与信息获取，降低重复查询成本。
*   **满意点**：用户`rodrigocuriel` (PR #2854) 报告了macOS下的环境问题并提交了修复，表明平台兼容性受到关注，且社区有能力快速定位和解决问题。
*   **开发体验**：在多个由`mksocial19-code`提交的PR（如 #2817, #2815）中，可以看到维护者要求添加回归测试并替换旧PR的做法，这表明项目对代码质量和贡献流程的规范有较高要求。

## 8. 待处理积压
*   **PR #2859**: `[follows-guidelines] fix(migrate-v2): don't SELECT is_main from v1 registered_groups`
    *   **创建时间**: 2026-06-25
    *   **重要性**: 高。此PR修复了一个能导致整个`v2`数据库创建失败的严重迁移Bug。虽然刚创建，但应优先审合，以防止新用户升级时遭遇数据初始化失败。
    *   **链接**: [https://github.com/qwibitai/nanoclaw/pull/2859](https://github.com/qwibitai/nanoclaw/pull/2859)
*   **PR #2858**: `fix(add-clidash): apply install and engine fixes`
    *   **创建时间**: 2026-06-25
    *   **重要性**: 中。这是对PR #2795的修复与替换，确保了`/add-clidash`技能能正确安装和运行。此PR与积压的#2795存在关联，需要维护者决定如何处理两个PR以避免混淆。
    *   **链接**: [https://github.com/qwibitai/nanoclaw/pull/2858](https://github.com/qwibitai/nanoclaw/pull/2858)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，我已根据您提供的IronClaw项目数据，生成了2026年6月26日的项目动态日报。

***

### IronClaw 项目动态日报 | 2026-06-26

**分析师点评：** 项目今日活动极其活跃，Issues和PR更新数量均达到50条，显示出社区和核心团队的高强度投入。开发重心明确指向 **Reborn架构** 的稳定性、性能优化以及企业级能力（如基于角色的访问控制）的构建。尽管存在一些影响基础功能的Bug，但都得到了快速响应和修复，项目健康度良好。

---

### 1. 今日速览

过去24小时，IronClaw项目进入高强度迭代期，核心开发团队与社区贡献者围绕 **Reborn架构** 展开了一系列深度工作。Issue和PR数量均达到单日峰值，显示项目已进入关键的功能完善与稳定性攻坚阶段。

- **开发焦点**：项目进展高度集中在 **Capability Policy（能力策略）** 企业级功能的基础设施建设、**性能优化**（如批量写入、CAS锁优化）以及 **Bug修复**。
- **社区参与**：社区成员（如 `@sunglow666`， `@think-in-universe`）发现了多个影响WebUI日常使用的关键Bug，并通过“试吃（Dogfooding）”活动为项目提供了宝贵的早期反馈。
- **项目活跃度**：**极高**。24小时内共处理50个Issue和50个PR，其中17个Issue和25个PR已被关闭/合并，表明团队响应速度快，执行力强。

---

### 2. 版本发布

- **无新版本发布。** 项目仍处于功能开发和问题修复的密集建设期，尚未形成新的稳定发布版本。

---

### 3. 项目进展

今日，项目在以下几个关键方向取得了实质性进展，通过合并/关闭重要PR，显著推进了项目路线图。

- **稳定性与数据一致性修复 (Reborn)：**
  - **重要修复**：[PR #5222](https://github.com/nearai/ironclaw/pull/5222) 已合并，修复了触发式任务（如Slack通知）在处理处于“等待用户批准”状态的运行时，错误地将阻塞状态视为“失败”的问题，提升了自动化工作流的可靠性。
  - **核心修复**：[PR #5028](https://github.com/nearai/ironclaw/issue/5028) 被关闭，解决了被拒绝的工具活动ID的显式性和稳定性的长期问题，确保了审计追踪的清晰度。

- **企业级能力基础设施 (Capability Policy)：**
  - **体系搭建**：包含 `#5261`, `#5262`, `#5263`, `#5266`, `#5267`, `#5268`, `#5270`, `#5272`, `#5273`等一系列Issue和PR构成了 **Capability Policy（能力策略）** 功能的完整工作量。核心开发者 `@zetyquickly` 提交了关键PR [PR #5270](https://github.com/nearai/ironclaw/pull/5270) 和 [PR #5263](https://github.com/nearai/ironclaw/pull/5263)，分别实现了 **WebChat-v2用户角色系统** 和 **单能力默认策略源**。这标志着项目向支持“管理员共享工具与技能”的企业级需求迈出了坚实的第一步。

- **性能与架构优化：**
  - **性能优化**：[PR #5234](https://github.com/nearai/ironclaw/pull/5234) 通过引入共享的`cas_update`助手函数，消除了持久化存储中围绕文件读-改-写操作的独立锁并发问题，显著提升了系统在高并发下的响应能力。
  - **性能优化**：[PR #5257](https://github.com/nearai/ironclaw/pull/5257) 实施了事件日志的批量写入（write-behind），将多个单行INSERT合并为批量操作，减少了IO开销。
  - **数据库优化**：[PR #5255](https://github.com/nearai/ironclaw/pull/5255) 将Postgres CAS `put`操作的目录预检从3次数据库往返减少为1次，提升了写入效率。

---

### 4. 社区热点

今日的社区讨论热情高涨，主要集中在 **Reborn WebUI的易用性** 和 **自动化功能** 上。

- **#1 热议：Reborn WebUI 用户体验 Bug 合集**
  - **代表Issue**：[#5191](https://github.com/nearai/ironclaw/issue/5191), [#5196](https://github.com/nearai/ironclaw/issue/5196), [#5208](https://github.com/nearai/ironclaw/issue/5208), [#5210](https://github.com/nearai/ironclaw/issue/5210), [#5211](https://github.com/nearai/ironclaw/issue/5211), [#5212](https://github.com/nearai/ironclaw/issue/5212), [#5242](https://github.com/nearai/ironclaw/issue/5242), [#5243](https://github.com/nearai/ironclaw/issue/5243)
  - **背景**：在 `#5119` 试吃活动的推动下，社区成员 `@sunglow666` 报告了一系列影响用户体验的Bug。这些问题涵盖了从“聊天输入框在加载时被冻结”、“消息不自动滚动”、“批准‘始终允许’不生效”到“内部日志暴露在UI中”等多个方面。
  - **诉求分析**：社区用户希望IronClaw的WebUI能够提供成熟、流畅、符合直觉的交互体验。这些反馈表明，尽管Reborn架构功能强大，但其前端界面的“产品化”和“稳健性”仍有较大提升空间，社区期望其接近最终用户的商用产品。

---

### 5. Bug 与稳定性

今日报告的Bug主要集中在 **Reborn WebUI** 和 **自动化执行** 方面，严重程度不一，但均得到了团队的高度关注。

- **高严重程度：**
  - **[Critical] 定时自动化完全失败**：[Issue #5276](https://github.com/nearai/ironclaw/issue/5276) “Scheduled automation fails with ‘No thread attached’”。每日PR摘要自动化全部失败，成功率为0%。目前仅有报告，尚无关联的修复PR，需要紧急跟进。
  - **[High] 工具授权流程异常**：[Issue #5196](https://github.com/nearai/ironclaw/issue/5196) “Ask each time”模式批准后仍报错并触发重复授权。[Issue #5192](https://github.com/nearai/ironclaw/issue/5192) 拒绝工具后还能产生新的批准请求。这些问题严重破坏了用户对工具授权的信任感。

- **中低严重程度：**
  - **[Medium] UI/UX Bug 合集**：包括 [#5191](https://github.com/nearai/ironclaw/issue/5191) (内部日志暴露), [#5208](https://github.com/nearai/ironclaw/issue/5208) (输入框冻结), [#5211](https://github.com/nearai/ironclaw/issue/5211) (不自定滚动), [#5210](https://github.com/nearai/ironclaw/issue/5210) (批准打开时发送消息导致状态丢失)。
  - **[Low] 界面显示问题**：[#5242](https://github.com/nearai/ironclaw/issue/5242) (普通用户看到操作员错误), [#5212](https://github.com/nearai/ironclaw/issue/5212) (时间戳显示不一致)。

**已有相应修复PR的Bug：**
- `Blocked`状态处理错误：[PR #5222](https://github.com/nearai/ironclaw/pull/5222) (已合并/关闭)
- `“Approve & always allow”`不持久化：[Issue #5243](https://github.com/nearai/ironclaw/issue/5243)，可能由后续的Capability Policy工作解决。

---

### 6. 功能请求与路线图信号

今日的功能需求信号非常明确，项目在 **企业级管理和高级存储** 两个方向上的路线图已加速展开。

- **确定纳入：企业级权限管理 (Capability Policy)**
  - **信号源**：`#5261` 系列Issue，以及已提交的 `#5263` 和 `#5270` PR。
  - **功能描述**：允许管理员（Admin）为不同用户（Member）配置可用的工具（Tools）和技能（Skills），实现精细化的权限控制。这是产品从个人工具走向团队协作平台的关键一步。
  - **落地时间**：根据已有的PR和Issue来看，此功能正在活跃开发中，极有可能被纳入下一个或下下个主要版本。

- **大概率纳入：功能增强 & 性能优化 (内存与存储)**
  - **信号源**：[Issue #5260](https://github.com/nearai/ironclaw/issue/5260) (个人记忆与自我学习系统跟踪) 和 [Issue #5264](https://github.com/nearai/ironclaw/issue/5264) (内存功能后续改进)。
  - **功能描述**：在 `#3537` 的MVP基础上，计划实现原生SQL存储支持、用户管理的短期记忆流、第三方（如Mem0）接入能力，以及语义搜索。这表明项目正致力于构建一个多层级、安全、自管理的记忆系统。
  - **落地情况**：`#5264` 提出了具体的后续任务清单，而 `#5260` 作为更长期愿景的跟踪Issue，相关代码（如 `#5205` PR）已进入代码审查阶段，预计部分功能将在近期发布。

---

### 7. 用户反馈摘要

从今日的Issue评论可以提炼出以下真实用户痛点和场景：

- **自动化体验是核心痛点**：[Issue #5276](https://github.com/nearai/ironclaw/issue/5276) 真实地反映了一个用户“期待的”自动化功能完全失效的情况。用户在描述中强调“0%成功率和无输出”，表达了强烈的失望和挫败感。
- **工具授权流程不清晰、不稳定**：用户 `@sunglow666` 在多个Issue中详细描述了在“Ask each time”和“Always allow”模式下的困惑。例如在 `#5196` 中，用户遵循了“批准”的正常流程，却依然收到错误，这种不确定性会严重破坏用户对Agent的信任。在 `#5243` 中，用户发现“Approve & always allow”不生效，表明UI交互的反馈和系统的实际状态存在脱节。
- **对“试吃（Dogfooding）”活动的高度肯定**：由 `@think-in-universe` 发起的 `#5119` 试吃活动是今日大量用户反馈的来源。这表明用户使用自己构建的日常工具，能快速发现开发过程中可能忽略的细节问题，是提升产品质量的有效手段。用户愿意参与并提出详细步骤，体现了社区对项目发展的积极参与和良好期望。

---

### 8. 待处理积压

以下为需要维护者特别关注的待处理或长期未解决的问题：

- **[Critical] 调度自动化完全失败**：[Issue #5276](https://github.com/nearai/ironclaw/issue/5276) “Scheduled automation fails with ‘No thread attached’”。这是今日报告的最严重问题，直接导致一个核心功能（每日PR摘要）完全不可用。**此Issue目前为 OPEN 状态且无任何被认领的迹象，建议项目核心成员立即牵头处理或分配。**

- **[High] 长期跟踪的试吃Issue**：[Issue #5119](https://github.com/nearai/ironclaw/issue/5119) “IronClaw Reborn Local Dogfooding Findings 06/22/2026 - 06/28/2026”。这是一个持续一周的活动跟踪Issue，其中衍生出了大量子问题。虽然许多被快速关闭，但该Issue本身仍处于开放状态，作为一周试吃活动的“总纲”，需要在活动结束后进行总结和最终关闭。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 LobsterAI 项目数据，现为您生成 2026-06-26 的项目动态日报。

---

## LobsterAI 项目动态日报 (2026-06-26)

### 1. 今日速览

今日 LobsterAI 项目活跃度较高，主要集中在 Bug 修复和功能稳定性提升上。**9 个 Pull Request (PR) 全部被合并**，体现了高效的维护节奏。修复范围覆盖了 **OpenClaw 插件系统**、**协作文档**、**渲染器设置** 和 **构建流程** 等多个核心模块，有效解决了子代理轮询、计划模式消息重复等影响用户体验的关键问题。社区反馈方面，一个关于定时任务开关的遗留 Bug（#1392）被标记为 “stale”，需维护者关注。

### 2. 版本发布

*无新版本发布*

---

### 3. 项目进展

今日合并了 9 个重要 PR，项目在以下方面取得显著进展：

- **OpenClaw 插件系统深度优化：**
  - **预装IM插件**：实现了QQ和Discord官方插件的预安装与自动同步（#2198），降低了用户配置门槛。
  - **修复浏览器插件**：确保浏览器控制插件在严格的允许列表下仍能正常工作（#2202）。
  - **本地扩展加载**：修复了预编译脚本无法正确打包本地 `ask-user` 和 `media` 类型扩展入口的问题（#2203），提升扩展兼容性。
  - **消除同步冗余**：修复了子代理会话结束后，历史同步中的重复消息问题（#2201），优化了对话记录的准确性。

- **协作用户端 (Cowork) 稳定增强：**
  - **子代理持续轮询**：修复了父会话结束后，子代理仍在运行但停止轮询的问题（#2199），确保任务完整执行。
  - **修复计划模式UI**：替换了计划模式的提示图标为主题感知的SVG组件（#2205），优化视觉效果。
  - **修正计划标签解析**：优先解析块级 `proposed_plan` 标签，避免将标签内容泄露到用户消息中（#2204）。
  - **消除计划消息重复**：通过对流式抖动（jitter）的智能判断，防止计划模式下的消息被切分复制（#2200）。

- **渲染器设置自动同步：**
  - 修复了登录项（launch-at-login）状态与操作系统不同步的问题，在持久化本地状态前会与OS进行校验，并处理Windows上遗留的启动参数（#2206）。

**总结：** 项目今日聚焦于修复“OpenClaw插件体系”和“协作编辑体验”中的多个细节问题，整体稳定性和用户体验得到有效提升。

---

### 4. 社区热点

今日无特别热门的讨论或高互动Issue/PR。所有 PR 均在较短周期内完成从创建到合并，社区参与主要集中在核心开发团队的代码提交流程中。

**待关注 Issue：** #1392 定时任务开关问题，虽然评论数不多，但作为唯一的活跃 Issue，应视为社区用户的直接痛点反馈。

---

### 5. Bug 与稳定性

今日社区报告 1 个 Bug，同时有多个内部发现的 Bug 已被修复。

**- 严重 Bug：**
  - **定时任务开关失效 (#1392)**：用户报告在设置定时任务后，部分任务的开关无法点击关闭。此问题已存在约 3 个月，今日被标记为 “stale”（过期）。这是一个影响核心功能使用的 Bug，建议优先处理。

**- 已修复的稳定性问题：**
  - **子代理轮询中断**：父任务完成后，子任务不再更新，导致任务状态不一致。
  - **计划消息重复**：由于流式传输抖动导致消息被拆分为重复的多条，影响阅读体验。
  - **登录状态不同步**：启动时自启动设置未与操作系统实际状态同步。

---

### 6. 功能请求与路线图信号

今日无新功能请求提出。

**路线图信号：** 今日合并的 PR 内容显示，项目组正致力于：
1.  **IM集成平台化**：通过 `openclaw.plugins` 流程预安装 QQ、Discord 等插件，显示出构建开放、可扩展的即时通讯集成生态的意图。
2.  **协作功能精细化**：对计划模式（Plan Mode）的 UI 和消息处理逻辑的持续打磨，表明该功能是当前开发重点之一。

---

### 7. 用户反馈摘要

- **痛点：**
  - **定时任务开关无响应：** 部分用户遇到了无法关闭已设置的定时任务的严重问题，导致任务管理失控，影响自动化流程的可控性。

---

### 8. 待处理积压

- **[Issue #1392] 定时任务开关点击无反应**：该 Issue 自 2026年4月3日创建，在今日被打上了 `[stale]` 标签。由于涉及核心功能且有复现截图，其长达 3 个月未被修复可能会影响用户信任度。建议维护者迅速介入，评估修复优先级。此问题当前无关联的 Fix PR。
  - 链接： [netease-youdao/LobsterAI Issue #1392](https://github.com/netease-youdao/LobsterAI/issue/1392)

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

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 CoPaw 项目 GitHub 数据，以下是为您生成的 2026-06-26 项目动态日报。

---

# CoPaw 项目日报 | 2026-06-26

## 1. 今日速览

今日项目活跃度**极高**，主要体现在 Issue 与 PR 讨论和提交量上，达到了近期峰值。24小时内，社区提交了27条Issue和50条PR，反映出用户使用深度和贡献热情都在上升。核心开发团队在修复关键 Bug（如浏览器进程泄漏、长消息排版错乱）和推进新架构（Runtime 2.0集成、Slack频道）方面均有实质进展。尽管暂无新版本发布，但多个处于“Review”状态的PR预示着下一版本将有重要更新。

## 2. 版本发布

- **无**。过去24小时内无新版本发布。

## 3. 项目进展

今日项目向前迈出了关键几步，主要是对近期报告的严重问题进行修复，并持续推进重要的架构升级。

- **[CLOSED] PR #5471: feat: generalize match pattern**：一个通用的模式匹配增强，虽描述简略，但已合并。
- **[CLOSED] PR #5443: fix(tui): restore ACP commands and inline approvals**：在 AgentScope 2.0 迁移后，修复了 TUI 终端的命令、审批与状态显示问题，确保了 TUI 界面的基本可用性，由核心开发者 `ekzhu` 提交并合并。
- **[CLOSED] PR #5534: refactor(readme): add trending badge**：为项目添加了趋势徽章，有助于提升在 GitHub 上的可见度。
- **[OPEN] PR #5536: fix: kill orphaned Chrome renderer processes on browser stop (#5520)**：一项关键的 Bug 修复 PR，旨在解决 `browser_use` 停止后残留的 Chrome 渲染进程导致的内存泄漏问题，由首次贡献者提交，当前处于开放状态。
- **[OPEN] PR #5535: fix: don't cache content moderation errors as rejects_media (#5505)**：另一项关键修复，解决了 MiniMax 图片安全审核错误被错误缓存为“模型不支持图片”的问题，保护了后续视觉请求不受影响，同样由首次贡献者提交。

## 4. 社区热点

今日社区讨论热度最高的议题集中在用户体验和模型兼容性上。

- **[Bug] Console 长消息排版错乱 (Issue #5480)**：此 Issue 获得5条评论，用户反馈 Web 前端在显示长 Markdown 消息时排版混乱，但切换选项卡后恢复正常。这指向一个明确的前端渲染 BUG，已引发社区共鸣。有一个对应的 **PR #5538** 正在修复此问题。
    - **链接**: https://github.com/agentscope-ai/QwenPaw/issues/5480
- **[Bug] MiniMax-M3 图片安全审核错误被缓存为 `rejects_media=True` (Issue #5505)**：该Issue有3条评论，由一个复杂的用户问题引起。讨论核心是QwenPaw 对模型能力探测的错误归因逻辑，将一次内容安全拦截误判为模型不支持媒体。这暴露了缓存策略的缺陷，已由 **PR #5535** 修复。
    - **链接**: https://github.com/agentscope-ai/QwenPaw/issues/5505
- **[Bug]浏览器自动填充劫持搜索框 (Issue #5403)**：用户报告模型配置页面的搜索框被浏览器错误地识别为密码框，导致自动填充弹窗干扰操作。这虽然是一个小问题，但反映了前端交互细节的不完善。
    - **链接**: https://github.com/agentscope-ai/QwenPaw/issues/5403
- **[Bug] 对话思考逻辑进入死循环 (Issue #5162)**：此系统性问题的 Issue 持续获得关注，评论数达到5条。虽然细节描述不够具体，但它指向了一个可能严重影响用户连续对话的深层逻辑缺陷。

## 5. Bug 与稳定性

今日报告的 Bug 涉及多个方面，部分已有关联的修复 PR。

| 严重程度 | 问题描述 | Issue 链接 | 修复状态 |
| :--- | :--- | :--- | :--- |
| **严重** | `browser_use stop()` 后 Chrome 渲染进程残留，造成内存泄漏 (回归 #2733) | [Issue #5520](https://github.com/agentscope-ai/QwenPaw/issues/5520) | **已有修复 PR #5536** |
| **严重** | MiniMax M3 图片安全审核错误被缓存成“模型不支持媒体”，导致后续所有视觉请求失败 | [Issue #5505](https://github.com/agentscope-ai/QwenPaw/issues/5505) | **已有修复 PR #5535** |
| **中等** | Console 前端展示长 Markdown 消息时排版错乱 | [Issue #5480](https://github.com/agentscope-ai/QwenPaw/issues/5480) | **已有修复 PR #5538** |
| **中等** | 大会话文件（>500KB）打开时前端崩溃 | [Issue #5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) | 待认领 |
| **中等** | 对话思考逻辑进入死循环 | [Issue #5162](https://github.com/agentscope-ai/QwenPaw/issues/5162) | 待认领 |
| **低** | 浏览器自动填充劫持模型配置页面的搜索输入框 | [Issue #5403](https://github.com/agentscope-ai/QwenPaw/issues/5403) | 待认领 |
| **低** | 宽屏模式下聊天窗口发送按钮对不齐 (已关闭) | [Issue #5501](https://github.com/agentscope-ai/QwenPaw/issues/5501) | 已关闭（可能已修复） |

## 6. 功能请求与路线图信号

- **模型/提供商层面**：
    - **动态模型切换**：用户要求当主模型限流或不可用时，能自动切换到备用模型，避免任务中断 (Issue #5527)。这是提升 Agent 可靠性的关键需求。
    - **自定义提供商完整支持 Function Calling**：用户期望手动添加的 OpenAI 兼容提供商也能完美支持工具调用 (Issue #5345)。
    - **模型提供商在线数量统计错误**：用户报告显示4个在线，实际只有3个 (Issue #5512)。已有 **PR #5537** 尝试修复此计数逻辑，提示未来会优化提供商管理界面。
- **Agent 能力层面**：
    - **Resource 2.0 兼容性**：`spawn_subagent` 工具在 Runtime 2.0中无法使用 (Issue #5523)。这是一个关键的 API 迁移遗漏，已被报告并标记。
    - **对话管理能力**：用户建议增加对单次对话消息的编辑和删除功能，以便对话出错后能灵活修正 (Issue #5503)。
- **平台与扩展层面**：
    - **支持 PyPI 安装插件**：用户提出让 QwenPaw 插件可以直接通过 `pip` 从 PyPI 安装，以简化分发和安装流程 (Issue #5484)。这标志着社区对生态扩展有更高的期望。
    - **TUI 项目代码会话**：PR #5448 正在推进，让 TUI 终端支持绑定项目目录进行 Coding Mode 会话，这将是开发者体验的重大提升。
- **系统集成层面**：
    - **Slack 频道支持**：一个功能完整、支持多模态和流式输出的 Slack 频道 PR #5193 正在Review中，这将是项目在办公协作领域的一个重要拓展。

## 7. 用户反馈摘要

- **痛点**：
    - **浏览器自动化资源管理**：`browser_use` 功能反复出现进程残留和内存泄漏（Issues #2733, #5520），对长时间运行的用户是重大困扰，用户 `Echo-Note` 和 `feng183043996` 分别报告了此类问题。
    - **模型配置与兼容性困扰**：Ollama Cloud 模型无法访问 (Issue #5541)、自定义提供商工具调用失效 (Issue #5345)、以及内容审核错误导致的模型能力误判 (Issue #5505)，反映出配置与兼容性测试尚有盲区。
    - **Windows 本地 App 体验**：`send_file_to_user` 的预览链接在 Windows 上返回 404 (Issue #5508)，以及内网安装后页面白屏 (Issue #5497)，表明 Windows 平台的本地化测试和兼容性需要加强。
    - **性能瓶颈**：大会话文件导致前端崩溃 (Issue #5479)，以及文档打开卡顿 (Issue #4188)，成为高频用户的核心痛点。
- **满意点**：
    - 虽然 Issue #5501（发送按钮对齐）是一个小Bug，但从用户描述和快速关闭来看，表明开发团队对 UI 细节的反馈响应积极。
    - 社区贡献活跃，多个“first-time-contributor”成功提交了修复 PR（如 #5536, #5535, #5538），说明项目的入门门槛和社区支持做得较好。

## 8. 待处理积压

以下 Issue 和 PR 存在时间较长或讨论度较高，但尚未得到维护者的明确回复或进展，建议关注：

- **[Issue #5162] [Bug]: 对话思考逻辑进入死循环**：严重程度高，可能影响核心体验，但缺乏足够复现信息。自创建起已过两周，虽讨论中无官方介入，建议主动索取详细日志或复现步骤。
    - **链接**: https://github.com/agentscope-ai/QwenPaw/issues/5162
- **[Issue #5342] [Feature]: hard cap on tool result size at execution layer**：一个关于防止上下文爆炸的防御性设计提案，讨论已有时日但无明确行动。此功能对系统稳定性有长远价值。
    - **链接**: https://github.com/agentscope-ai/QwenPaw/issues/5342
- **[PR #4041] feat(desktop): add Tauri tray behavior**: 一个从5月初就开始Review的PR，旨在增加桌面端系统托盘行为。考虑到 Desktop 模式是重要使用场景，此 PR 的推进有助于提升用户体验。
    - **链接**: https://github.com/agentscope-ai/QwenPaw/pull/4041

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，这是为您生成的 ZeroClaw 项目动态日报。

---

# ZeroClaw 项目动态日报 | 2026-06-26

## 1. 今日速览

ZeroClaw 项目今日保持极高的开发活跃度，24小时内处理了近50条Issue和50个PR，社区讨论热度不减。项目正处于多个关键里程碑（v0.8.2, v0.8.3, v0.9.0）的并行推进阶段，**核心方向聚焦于安全强化、运行时稳定性、以及Wasm插件架构的重大革新**。尽管没有新版本发布，但大量重量级RFC和Bug修复表明了项目正在进行深层架构调整和安全性加固，这预示着未来版本将有重要变化。项目健康度良好，但积压的P1/P2高优先级问题需持续关注。

## 2. 版本发布

**无**

## 3. 项目进展

过去24小时内，项目主要进展体现在对近期报告的严重Bug进行紧急修复，以及对核心功能的持续打磨。

- **严重安全漏洞修复：** PR [#8317](https://github.com/zeroclaw-labs/zeroclaw/pull/8317) 修复了可靠provider封装器在遭遇 `429 (Rate Limited)` 错误后，未能正确处理退避冷却 (`cooldown`) 的问题。此修复确保了备用模型 (`fallback_models`) 机制在遇到限流时能按预期工作，避免后续请求立即失败。
- **核心架构推进：**
    - 新增了关于 **Wasm-first 插件运行时 ([RFC #8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135))** 和 **基于 OCI 的插件注册表 ([RFC #7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497))** 的详细RFC。这表明项目正在认真考虑将整个插件生态迁移至更安全、更标准的 WebAssembly 生态中。
- **技能系统改进：** PR [#8313](https://github.com/zeroclaw-labs/zeroclaw/pull/8313) 将技能的默认注入模式切换为 **“紧凑摘要”**，并在需要时才加载完整指令。这模仿了业界最佳实践，旨在减少上下文窗口占用并提升响应速度。
- **开发与文档：**
    - PR [#8316](https://github.com/zeroclaw-labs/zeroclaw/pull/8316) 新增了一份详尽的**内置工具清单文档**，为未来的工具分类和迁移提供了清晰的路线图。
    - PR [#8240](https://github.com/zeroclaw-labs/zeroclaw/pull/8240) 对齐了代码仓库中的标签引用，优化了维护者工作流程。

## 4. 社区热点

今日社区讨论焦点集中在几项关乎项目未来方向和架构的RFC上：

- **RFC: 工作流泳道与看板自动化（[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)，11条评论）**：此RFC旨在建立一套更自动化、更易路由的工作项管理机制，减少维护者的手动负担。作为一项治理性RFC，其高讨论度反映了社区对项目治理和协作效率的关心。
- **RFC: 供应链安全（[#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)，8条评论）**：提出对容器镜像和发布二进制实施硬件PGP签名、信构建和SLSA可溯源证明。这直接回应了当前软件供应链安全日益严峻的挑战，显示了社区对安全性的高度重视。
- **RFC: 通过外部集成精简核心（[#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)，5条评论）**：主张将Jira、GitHub等集成工具从核心代码中移除，改为通过“技能 (Skills)”实现。这是一个长期存在且争议性话题，有关“轻量级核心 vs. 功能丰富”的讨论仍在持续。
- **RFC: 目标模式（[#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)，1条评论，1个👍）**：提出一种“目标驱动”的自主会话模式，允许Agent长期持续地完成一个复杂目标。该提议获得了一个赞同，表明用户对更复杂的自主行为有明确需求。

**分析：** 社区热点清晰地指向两个方向：**1) 安全性**（供应链、ACL）和 **2) 架构演进**（轻量化核心、Wasm化、工作流自动化）。讨论了大量RFC，说明社区正积极参与项目的未来规划。

## 5. Bug 与稳定性

今日报告的Bug数量较多，部分问题严重性高，但已有多项获得快速响应或修复。

- **严重（S0/S1级）：**
    - **[S0] 委托工具绕过父级允许列表（[#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279)）**：子Agent可以调用父Agent策略禁止的工具，这是一个严重的安全漏洞。该Issue已关闭，疑似已被 `PR #8304` 或相关修复解决。
    - **[S1] Moonshot/Kimi API端点变更（[#8154](https://github.com/zeroclaw-labs/zeroclaw/issues/8154)）**：Kimi Code模型指向了过时且返回404的URL端点，导致功能阻塞。该Bug已关闭，表明已修复。
- **高风险：**
    - **[Bug]: 翻译修复后仍存在数据泄露路径（[#8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312)）**：在之前的“泄露文本”修复之后，发现了一个新的、更隐蔽的路径，可能导致已标记的敏感文本通过`write_po`命令再次泄露。
    - **[Bug]: 技能CLI在多Agent环境下失效（[#8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334)）**：`skills install`等命令指向的 `data_dir` 在某些多Agent运行时配置下不会被加载，导致核心的“安装并使用”流程损坏。PR [#8335](https://github.com/zeroclaw-labs/zeroclaw/pull/8335) 已提交用于修复此问题。
    - **[Bug]: 本地工具调用时图像标记被当做文本（[#8327](https://github.com/zeroclaw-labs/zeroclaw/issues/8327)）**：使用OpenAI兼容接口时，`[IMAGE:data:...]`标记未被正确解析为结构化`image_url`，而是作为纯文本发送，极大地浪费了Token。
- **稳定性修复：**
    - PR [#8329](https://github.com/zeroclaw-labs/zeroclaw/pull/8329) 修复了原生工具调用后，Agent的“叙述 (Narration)”文本被错误抑制的问题。
    - PR [#8323](https://github.com/zeroclaw-labs/zeroclaw/pull/8323) 通过引入时钟对齐机制，修复了响应缓存时间戳测试的不稳定性。

## 6. 功能请求与路线图信号

1.  **独立委托模式（[#8238](https://github.com/zeroclaw-labs/zeroclaw/issues/8238)）**：用户希望配置专属Agent以自己的策略和工具集独立运作。这从 `#7514` 演化而来，是项目构建多Agent系统的重要拼图。关联PR [#8237](https://github.com/zeroclaw-labs/zeroclaw/pull/8237) 已为ACP会话添加了MCP支持，预示着独立委托模式可能在后续版本中实现。

2.  **OpenRouter 模型降级数组（[#8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138)）**：用户希望ZeroClaw能利用OpenRouter原生的模型数组进行自动故障转移，当前只能发送单个模型字符串。这是一个用户呼声较高的可用性改进。

3.  **Web仪表盘内升级与重启（[#8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170) / PR [#8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173)）**：用户希望无需离开浏览器即可完成ZeroClaw更新。关联的RFC已被接受，且功能PR已提交，说明这个特性很可能被纳入 `v0.8.2` 或 `v0.9.0` 版本。

4.  **React/Vite UI 替换为 Rust→Wasm 框架（[#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)）**：提议将Web UI的构建方式从React改为基于Rust的Wasm框架，以消除对Node.js的构建依赖。与Wasm-first插件运行时（#8135）思路一致，是Wasm化整体战略的一部分。

## 7. 用户反馈摘要

- **痛点与不满：**
    - **MCP进程泄漏（[#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)）**：用户`rordd`报告了一个非常具体且影响严重的问题：守护进程在心跳机制启用时，每跳动一次就会泄漏一个MCP子进程，长时间运行后会产生大量孤儿进程。该Issue已被标记为“已接受”且不会被标记为过时，显示项目已认知至此问题。
    - **Telegram多图发送问题（[#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514)）**：用户`aq-uua`反馈，当Agent选择发送两张或更多图片时，每张图片都会触发一次独立的LLM请求，导致产生多余的回复。关联的 `#7873` 跟踪器已关闭，表明修复方案已确定。
    - **技能审计误报（[#6714](https://github.com/zeroclaw-labs/zeroclaw/issues/6714)）**：技能审计功能对“远程Markdown链接”的检查存在高误报率，导致多个真实可用的技能因引用文档URL而被判定为不合格。该Issue已关闭，显示此阻塞性问题已被解决。
- **满意与认可：**
    - 社区成员`optman`提交的关于“图像标记被当做文本”的Bug（#8327）非常细致，说明用户在使用高级特性（原生工具调用）时很深入。
    - 多个功能请求（如OpenRouter降级、Web UI升级）获得了明确支持，表明社区对ZeroClaw的健壮性和便捷性有较高期待。

## 8. 待处理积压

以下为长期开放、等待维护者回应或处理的高风险/高优先级问题，建议重点关注：

1.  **[#5903] MCP子进程泄漏（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)）**：自4月19日报告至今，虽然被接受但未见修复PR。鉴于其可能影响长期运行的守护进程稳定性，建议尽快安排。
2.  **[#5514] Telegram多图发送异常（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5514)）**：虽然跟踪器已关闭，但此主Issue仍为打开状态。需确保修复方案已彻底解决根本问题。
3.  **[#6165] “通过外部集成精简核心” RFC（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)）**：这是关于项目架构方向的深度讨论，但处于“blocked”状态。决策或实验性验证的进展需要同步给社区。
4.  **[#8309] SkillForge 功能孤立（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8309)）**：SkillForge自动技能发现引擎已合并上线，但未与当前运行时的任何部分连接。作为一个潜在强大但无人知晓的功能，是完成它还是删除它，需要进行决策。
5.  **[#8327] 图像标记被当做文本处理（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8327)）**：这是一个对使用本地模型（如llama.cpp）的用户影响重大的使用问题，会严重浪费Token。报告时间短，但优先级应为高。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*