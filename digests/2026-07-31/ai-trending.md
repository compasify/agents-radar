# AI 开源趋势日报 2026-07-31

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-31 01:46 UTC

---

# AI 开源趋势日报（2026-07-31）

已从 Trending 榜单过滤非 AI/ML 项目：`Baileys`、`pascalorg/editor`、`dotnet/aspnetcore`、`PowerToys`、`Ansible`、`Jenkins`、`tuicr`、`awesome-systematic-trading` 等均未纳入。主题搜索结果中也仅保留与 AI/ML 明确相关的仓库。

## 1. 今日速览

今日 AI 开源热榜由 Agent Harness 与 Agent Skill 类项目主导：`openwork`（+915）、`ECC`（+804）、`speech-to-speech`（+628）、`last30days-skill`（+378）同时进入 Trending，社区注意力正从“单模型”转向“可组合、可优化的 Agent 工作流”。开源 “AI Cowork” 形态开始出现，`openwork` 与 `AionUi` 都瞄准 7×24 小时协作式智能体场景。MCP 工具链持续扩张，`chrome-devtools-mcp` 登榜，浏览器控制正在成为 coding agent 的标配能力。上下文工程/记忆层是另一条主线：`claude-mem`、`mem0`、`Graphify` 等项目说明开发者开始认真解决 Agent 的持久记忆与上下文压缩问题。

## 2. 各维度热门项目

### 🔧 AI 基础工具

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,182 | 最主流的开源模型定义/训练/推理框架，支持文本、视觉、音频与多模态模型。社区生态与模型接入量使其仍是 AI 开发基础设施的核心。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 177,343 | 本地一键运行 LLM 的 CLI/服务端工具，已支持 Kimi-K2.6、GLM-5.2、DeepSeek、Qwen 等新模型。本地推理体验持续向“即开即用”演进。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 143,033 | LLM 应用与 Agent 工程平台，提供工具调用、记忆、RAG 等模块化能力。依然是开发者搭建 Agent 工作流时绕不开的框架之一。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 158,374 | 面向 LLM/Agent 的搜索、抓取与网页交互 API。当 Agent 需要实时 web 数据时，这类“数据入口”基础设施的刚需会持续放大。 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | HTML | 166,538 | 社区驱动的提示词分享/发现平台（原 Awesome ChatGPT Prompts）。提示词工程仍有广泛需求，且可私有化部署。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 36,376 | Agent 前端与 Generative UI 栈，覆盖 React/Angular/Mobile/Slack。降低 Agent 产品界面层开发成本，是“Agent 应用化”的重要组件。 |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | TypeScript | 0（+80） | 为 coding agent 提供 Chrome DevTools 能力，今日新增 80 stars。MCP 正成为编码智能体与浏览器控制台之间的标准接口。 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | JavaScript | 94,664 | Claude Code 的 token 压缩 skill（“caveman”模式），号称可减少 65% token。开发者对 token 成本和上下文长度的强烈敏感在这类项目中得到体现。 |

### 🤖 AI 智能体/工作流

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 236,245（+804） | Agent harness 性能优化系统，面向 Claude Code、Codex、OpenCode、Cursor 等 CLI。今日 +804 stars，说明“给 Agent 做工程化优化”成为高热度赛道。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 222,904 | “会成长的 Agent”框架，强调持续进化与个性化。高 star 的 agent 项目，代表社区对可扩展 Agent 架构的长期关注。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 185,756 | 老牌通用 Agent 项目，目标是让 AI 自动完成任务。作为“Agent 平民化”的代表，依然保持极高 star 基础。 |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 150,842 | 可视化构建 Agentic workflow 与 RAG pipeline 的一站式平台。企业级 Agent 落地围绕它形成了完整工具链生态。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 107,344 | 让网站对 AI Agent 可访问，自动化在线任务。它与 MCP 类工具一起，推动 Agent 从“读 API”走向“直接操作网页”。 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | Python | 72,759 | 从 0 到 1 实现类 Claude Code 的“nano agent harness”，教学相长。帮助开发者理解 Agent 底层机制，是近期 Agent 学习类高星项目。 |
| [different-ai/openwork](https://github.com/different-ai/openwork) | TypeScript | 0（+915） | 开源的 Claude Cowork 替代品，基于 opencode。今日 +915 stars，是“AI Cowork/协作式智能体”这一新形态最受关注的案例。 |
| [huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) | Python | 0（+628） | 用开源模型构建本地语音 Agent，今日 +628 stars。语音到语音的多模态交互正在成为 Agent 新入口。 |

### 📦 AI 应用

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 147,393 | 用户友好的 AI 对话界面，支持 Ollama、OpenAI API 等。是本地/私有化 AI 应用中最受欢迎的“最后一公里”产品层。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 100,672 | 根据主题自动生成高清短视频的 AI 工作流。内容创作自动化仍是 AI 应用最大方向之一。 |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | Python | 71,200 | 面向分析师、量化人群和 AI Agent 的开放数据平台。金融垂直场景中“数据 + Agent”结合的代表项目。 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 62,321 | 开源 AI 求职助手：扫描职位、按 A-F 评分、定制简历。AI Agent 正在渗透招聘/求职等个人效率场景。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 59,618 | LLM 驱动的多市场股票智能分析系统，含实时新闻、看板和自动推送。金融数据分析是近期 AI 应用最密集的细分方向。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 49,172 | AI 生产力工作室，集成智能对话、自主 Agent 与 300+ 助手。统一接入前沿 LLM，是桌面 AI 客户端赛道的高热度项目。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 42,034 | AI 将文档/主题转化为原生 PowerPoint，包含动画、图表、配音等。面向办公场景的 AI 内容生成迭代明显。 |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | TypeScript | 31,143 | 本地、开源、7×24 小时运行的 AI Cowork 应用，支持 20+ CLI Agent。与 openwork 一同验证“AI Cowork”正在成为独立产品类别。 |

### 🧠 大模型/训练

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 196,619 | 经典开源机器学习框架，仍是生产环境重要选项。今日虽不在热榜，但基础生态地位稳固。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,080 | 深度学习研究与训练的事实标准框架，绝大多数开源大模型基于 PyTorch 生态。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 100,183 | 从零实现 ChatGPT 类 LLM 的教程仓库。大模型原理学习与训练细节仍是最受开发者关注的“硬核”方向。 |
| [microsoft/ML-For-Beginners](https://github.com/microsoft/ML-For-Beginners) | Jupyter Notebook | 88,782 | 微软出品的 12 周经典 ML 课程。教育类资源长期稳定吸引开发者入门。 |
| [microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) | Jupyter Notebook | 0（+155） | 微软的 12 周 AI 入门课程，今日 +155 stars。教培类内容在 Trending 上出现，说明 AI 开发者人群仍在快速扩大。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,248 | 大模型评测平台，支持多个主流模型与 100+ 数据集。评测作为模型选型基建，重要性随开源模型增多而上升。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,427 | 在 Apple Silicon 上从零构建 tiny vLLM + Qwen 的推理课程。面向系统工程师的 LLM 推理 serving 学习路径。 |
| [genieincodebottle/generative-ai](https://github.com/genieincodebottle/generative-ai) | Jupyter Notebook | 2,577 | 生成式 AI 综合资源，覆盖路线图、案例和面试准备。适合系统化学习 Generative AI。 |

### 🔍 RAG/知识库

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 99,155 | 将代码库、文档、SQL schema、PDF 转为可查询知识图谱，支持 Claude Code 等 skill。无需向量库即可做确定性 RAG，是“知识图谱 + Agent”的新代表。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 89,089 | 捕获 Agent 会话并压缩为跨会话记忆，兼容 Claude Code、Codex、Gemini 等。持久上下文正在成为 Agent 标配能力。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 86,450 | 开源 RAG 引擎，将深度检索与 Agent 能力融合。是 RAG 赛道中 star 增长最稳的项目之一。 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 64,140 | 本地优先的 All-in-One RAG/Agent 桌面应用。让非技术用户也能拥有私有知识库。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 62,151 | AI Agent 的通用记忆层，支持跨会话长期记忆。与 claude-mem 一起推动“Memory Layer”成为独立中间件。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,247 | 文档 Agent 与 OCR 平台，RAG 生态核心框架之一。在数据接入和检索编排方面仍是主流选择。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,435 | 云原生向量数据库，面向大规模向量 ANN 检索。是生产级 RAG/推荐系统的关键基础设施。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 33,685 | 高性能向量数据库与向量检索引擎。Rust 实现带来的性能优势使其在 AI 基础设施中持续受关注。 |

## 3. 趋势信号分析

今日热榜最清晰的信号是：Agent Harness 与 Agent Skill 类项目正在取代纯模型/纯聊天成为爆发点。ECC、openwork、speech-to-speech 等同时进入 Trending，分别对应 Agent 性能优化、开源 Claude Cowork、本地语音 Agent，说明开发者需要可组合、可优化、可持续运行的 Agent 工作流。另一个新信号是“AI Cowork”概念登榜：openwork 与 AionUi 都在做 24/7 协作式智能体界面，可能正在形成新品类。MCP 生态同步扩大，Chrome DevTools MCP 进入热榜，浏览器控制正成为 coding agent 的标准接口。上下文工程成为隐性主线：claude-mem、mem0、Graphify 等从记忆、压缩、知识图谱角度解决 Agent 长期上下文问题。与近期行业事件关联上，Ollama 已支持 Kimi-K2.6、GLM-5.2 等新模型，本地推理生态与大模型发布节奏耦合加深。

## 4. 社区关注热点

- [different-ai/openwork](https://github.com/different-ai/openwork)：今日 +915，开源 Claude Cowork 替代品，是“AI Cowork”品类最直接的信号，值得立即体验。
- [affaan-m/ECC](https://github.com/affaan-m/ECC)：总星 236k、今日 +804，聚焦 Agent Harness 的性能/安全/记忆，说明 Agent 工程化需求爆发。
- [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)：MCP 协议与浏览器控制结合，让 coding agent 能像开发者一样使用 DevTools，是 Agent 工具链标准化的关键一步。
- [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)：今日 +378，跨 Reddit/X/YouTube/HN/Polymarket 的 AI 研究 skill，显示“信息采集 + 综合摘要”类 Agent Skill 是热门方向。
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) 与 [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)：分别用知识图谱和跨会话记忆补足 Agent 长期上下文，是“上下文工程”落地最值得跟踪的两个项目。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*