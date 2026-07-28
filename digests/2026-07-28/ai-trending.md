# AI 开源趋势日报 2026-07-28

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-28 01:25 UTC

---

好的，作为专注于 AI 开源生态的技术分析师，以下是我根据您提供的 2026-07-28 数据生成的《AI 开源趋势日报》。

---

## AI 开源趋势日报 | 2026-07-28

### 1. 今日速览

今日 AI 开源社区呈现“基础工具稳健、智能体生态爆发、垂直应用多点开花”的格局。**AI Agent 领域**持续引领热度前沿，`hermes-agent` 等框架与 `claude-video` 等技能包项目获得大量关注。**企业级 AI 工具**开始崭露头角，阿里巴巴开源的代码审查工具 `open-code-review` 凭借其混合架构在今日 Trending 榜单中增长近千星，成为今日最大黑马。此外，金融领域的专用基座模型 `Kronos` 标志着 AI 在垂直行业落地进入深水区，而 RAG 技术栈作为基础设施依旧保持稳健发展。

### 2. 各维度热门项目

#### 🔧 AI 基础工具 (框架、SDK、推理引擎、CLI)

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 142,714 | AI Agent 工程化的事实标准平台，整个生态的基石。今日生态内 `langgraph` 等项目也保持活跃，共同构建了稳定的 Agent 开发管线。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 177,032 | 本地大模型运行和管理的首选工具，已支持包括 Kimi、GLM、DeepSeek 在内的主流开源模型。本地化推理的普及推动了大量下游应用的爆发。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,046 | 业界最权威的模型定义与训练框架，支持文本、视觉、音频等多模态。是大模型时代的“标准库”，生态地位无可撼动。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 157,038 | 为 AI Agent 设计的规模化网页数据采集 API。是 RAG 系统和 Agent 获取外部知识的“数据咽喉”，其 API 设计理念正被广泛模仿。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 146,981 | 用户友好的 AI 界面平台，兼容 Ollama 和 OpenAI API。极大降低了普通用户和开发者使用 AI 模型的门槛，是本地化部署的明星项目。 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | 0（+979） | 阿里开源的混合架构代码审查工具，集成确定性流水线与 LLM Agent 实现精准行级评论。今日爆火，证明了企业级“AI+工程实践”的巨大需求。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 49,052 | 集成智能聊天、自主 Agent 和 300+ 助手的 AI 生产力工作室。统一了前沿 LLM 的访问入口，是 AI 工作流平台的重要竞争者。 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | Go | 27,906 | 基于 DeepSeek 的 AI 编码 Agent CLI 工具，针对前缀缓存稳定性进行了深度优化。代表了面向专业开发者的轻量级 AI 辅助工具趋势。 |

#### 🤖 AI 智能体/工作流 (Agent 框架、自动化、多智能体)

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 221,429 | 社区成长速度惊人的 AI Agent 框架，其“随着你成长”的设计理念深入人心。是当前 Agent 赛道最炙手可热的项目，代表了下一代 Agent 的发展方向。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 185,718 | 自动化 Agent 的先行者和定义者，愿景是让 AI 人人可用。虽然已不是唯一选择，但其在 Agent 技术普及方面的历史地位无可替代。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 107,031 | 让 AI Agent 能够操控浏览器的关键工具，实现网页任务自动化。是实现“数字员工”愿景的核心基础设施，解决了 Agent 与物理世界交互的最后一公里。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 36,320 | 为 React、Angular 等前端框架提供 Agent 和生成式 UI 的支架。倡导的 AG-UI 协议正在为 Agent 交互界面建立标准。 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | Python | 38,269 | LangChain 官方推出的 Agent 编排框架，专注于构建有状态的、弹性的多 Agent 系统。是构建复杂 Agentic Workflow 的利器。 |
| [thinkwee/AgentsMeetRL](https://github.com/thinkwee/AgentsMeetRL) | HTML | 1,726 | 一份关于 Agent 强化学习的精选资源列表。反映了 Agent 从“指令跟随”向“自主学习与决策”进化的前沿研究方向。 |
| [The-Pocket/PocketFlow](https://github.com/The-Pocket/PocketFlow) | Python | 11,049 | 仅用100行代码实现的 LLM 框架，核心理念是“让 Agent 构建 Agent”。其极简和自指的设计哲学，为元编程 Agent 提供了新范式参考。 |

#### 📦 AI 应用 (具体应用产品、垂直场景解决方案)

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | TypeScript | 0（+572） | 自托管的 AI 伴侣项目，旨在复现“Neuro-sama”的体验。支持实时语音、Minecraft 等场景，代表了个性化、陪伴型 AI 应用的快速发展。 |
| [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | Python | 0（+434） | 赋予 Claude 观看视频能力的轻量级工具，通过提取帧和转录文本让 LLM 理解视频。打开了多模态 Agent 应用的新市场。 |
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Python | 0（+441） | 金融领域的基座模型，学习市场语言。标志着 AI 开始深度“理解”并应用于量化交易等专业金融场景，行业大模型趋势凸显。 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | 0（+240） | 跨平台（Reddit、X、YouTube等）的话题研究 Agent 技能。展示了 Agent 如何通过 API 或爬虫整合碎片化信息，生成结构化摘要。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 99,565 | 利用 AI 自动化工作流（Agent）生成短视频的应用。其持续增长的热度表明，“AI+内容创作”仍然是开发者最关注的变现方向之一。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 59,254 | 一款 LLM 驱动的多市场股票智能分析系统，集成了行情、新闻和决策看板。与 Kronos 方向互补，展现了 AI 在金融信息聚合与分析中的价值。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 41,427 | 将文字或主题一键转化为原生 PowerPoint 的 AI 工具。解决了办公场景下的真实痛点，是“AI+Office”领域的高星标杆应用。 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | JavaScript | 0（+847） | 旨在提升 AI 设计能力的“设计语言”。今日增长显著，反映了社区对提升 AI 内容生成（尤其是 UI/UX 设计）质量的迫切需求。 |

#### 🧠 大模型/训练 (模型权重、训练框架、微调)

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 99,984 | 从零实现 ChatGPT 类大模型的系统性教程，是学习 LLM 原理的最佳实践之一。接近10万星，代表了社区对底层原理学习的持续热情。 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 53,906 | 仅2小时即可从零训练64M小参数 LLM 的项目。极大降低了参与大模型预训练的门槛，是模型民主化的重要尝试。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,416 | 面向系统工程师的 LLM 推理服务课程，在 Apple Silicon 上构建微型 vLLM。连接了“模型训练”和“模型部署”两个环节，专为开发者设计。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 8,075 | 基于 Rust 的模块化、可扩展 LLM 应用框架。代表了 LLM 生态向高性能、内存安全的语言扩展的趋势。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,240 | 全面的大模型评测平台，支持100+数据集，覆盖主流模型。随着开源模型爆发，公正、全面的评测成为刚需。 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | Python | 315 | 基于 X-Bit 量化技术的设备端 LLM 推理库。标志着大模型推理向边缘侧和终端设备延伸的重要技术路线。 |

#### 🔍 RAG/知识库 (向量数据库、检索增强、知识管理)

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,391 | 业界领先的云原生向量数据库，专为海量向量 ANN 搜索而设计。作为 RAG 架构下的核心存储引擎，其性能和稳定性已有广泛验证。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 33,613 | 高性能、大规模向量数据库，提供全托管云服务。其 Rust 实现带来的性能优势使其在要求严苛的场景下极受欢迎。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 86,169 | 领先的开源 RAG 引擎，将前沿 RAG 技术与 Agent 能力融合，为 LLM 提供卓越的上下文层。是当前 RAG 领域最受欢迎的端到端解决方案之一。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,146 | 领先的文档 Agent 和 OCR 平台。是连接非结构化数据与 LLM 的桥梁，其灵活的索引和查询能力是构建复杂 RAG 应用的基础。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | TypeScript | 61,861 | 专为 AI Agent 设计的通用记忆层组件。解决了 Agent 缺乏长期记忆的核心痛点，是实现持久化智能体的关键技术。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 29,468 | 面向 Agent 的开源 AI 记忆平台，利用自托管的**知识图谱引擎**管理长期记忆。与 mem0 思路互补，代表了知识图谱与 RAG 结合的趋势。 |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | TypeScript | 45,460 | 注重隐私的自托管个人知识管理软件。虽然定位为笔记应用，但其强大的本地化和结构化能力使其成为个人 RAG 应用的优质数据源。 |

### 3. 趋势信号分析

**AI Agent 生态全面成熟**：今天最强烈的信号是 Agent 领域不再单一依赖某个框架，而是形成了从基础 CLI (`DeepSeek-Reasonix`)、中间件 (`mem0`) 到高级框架 (`hermes-agent`) 和杀手级应用 (`claude-video`, `mvanhorn/last30days-skill`) 的完整生态。`hermes-agent` 超 22 万星数验证了这一方向的社区共识。

**企业级 AI 工具爆发**：`alibaba/open-code-review` 的突然登顶，是今日最明确的趋势。这表明在经历了个人开发者工具和通用聊天机器人热潮后，社区开始关注如何用 AI 改造耗时且复杂的工程化流程（如代码审查、安全扫描）。这预示着企业级 AI 应用市场正在打开。

**多模态与 Agent 深度结合**：`claude-video` 等项目首次登上热榜，表明社区正从“文本交互”转向“Agent 能看、能听、能操作”。让 LLM 理解视频、音频等非结构化数据，并据此执行任务，是 Agent 能力提升的下一个重要方向。

### 4. 社区关注热点

- **`NousResearch/hermes-agent` (22万+ Stars)**：AI Agent 框架领域的绝对霸主，其高增长背后是开发者对“自主生长式” Agent 的浓厚兴趣。建议深入研究其核心机制。
- **`alibaba/open-code-review` (今日增长近1000)**：企业级 AI 落地的标杆案例，其“确定性规则 + LLM”的混合架构代表了生产环境的务实选择。值得所有关注 DevTools 的开发者跟进。
- **`moeru-ai/airi` 与 `bradautomates/claude-video`**：这两者代表了 AI 应用向“虚拟陪伴”和“多模态理解”的两个不同方向延伸，是个人开发者创意爆发的体现，可能孕育出下一个明星应用。
- **`shiyu-coder/Kronos`**：作为专用领域的基座模型，它的出现标志着 AI 竞赛开始从通用大模型转向行业深耕。对金融NLP和数据科学家来说，这是一个必须关注的项目。
- **`topoteretes/cognee` 与 `mem0ai/mem0`**：两者分别从知识图谱和运行时记忆两个角度解决 Agent 的“长期记忆”问题。Agent 的记忆能力是决定其效用上限的关键，此方向的任何进展都值得高度关注。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*