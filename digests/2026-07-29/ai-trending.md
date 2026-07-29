# AI 开源趋势日报 2026-07-29

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-29 01:26 UTC

---

# AI 开源趋势日报（2026-07-29）

## 今日速览

今日 GitHub AI 领域最热门的动向来自 **AI Agent 生态的爆发**：`moeru-ai/airi`（自托管 Grok 伴侣）和 `bradautomates/claude-video`（让 Claude 看视频）分别以 +797 和 +988 的日增 stars 领跑 Trending 榜。与此同时，**Andrew Ng 发布的新项目 `andrewyng/aisuite`** 为多生成式 AI 服务提供统一接口，虽刚上线但已获关注。**Agent 治理和安全**也出现新工具——微软的 `agent-governance-toolkit` 首次登榜，回应 OWASP Agentic Top 10 威胁。此外，**RAG 生态持续壮大**，`ragflow` 和 `mem0` 等项目保持高活跃度，向量数据库与知识图谱融合趋势明显。

## 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 196,573 | 老牌机器学习框架，持续维护，今天社区关注度稳定。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 177,137 | 本地运行最先进开源大模型的推理引擎，支持 Kimi、DeepSeek、Qwen 等，是个人部署 AI 的首选。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,074 | 模型定义与训练框架，支持文本/视觉/音频/多模态，生态核心。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 142,822 | Agent 工程平台，今天因大量 Agent 工具链依赖而持续高频更新。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 147,122 | 用户友好的 AI 界面，支持 Ollama/OpenAI 等后端，成为本地 AI 界面的标准。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 157,544 | 大规模网页搜索与抓取 API，为 AI Agent 提供实时网页数据。 |
| [andrewyng/aisuite](https://github.com/andrewyng/aisuite) | Python | 0（+62） | Andrew Ng 新作，统一的生成式 AI 多提供商接口，降低集成成本，今天刚发布即获关注。 |
| [scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn) | Python | 66,806 | 经典机器学习库，仍被大量传统 AI 项目依赖。 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 234,826（+636） | Agent 性能优化系统，为 Claude Code、Codex 等编码 Agent 提供技能、记忆、安全支持，日增 636 星。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 221,914 | 成长型 Agent 框架，强调可扩展性和自适应能力。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 185,740 | 早期 Agent 先驱，持续迭代，仍是自主任务执行的代表。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 107,135 | 让 AI Agent 能自动化操作浏览器，占领网页交互场景。 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | Python | 72,508 | 从零构建类 Claude Code 的 Agent harness，适合学习 Agent 原理。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 61,804 | 为 AI Agent 提供“眼睛”访问全网（Twitter/Reddit/YouTube等），零 API 费用，今天因生态扩展获关注。 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Python | 46,340 | 超轻量个人 AI Agent 框架，内置 WebUI、内存、MCP，可一键部署。 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | Python | 46,179 | 开源超级 AI 助手和 Agent 平台，支持任务规划、工具调用、记忆进化，多模型多通道。 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | Python | 0（+988） | 让 Claude 观看视频——下载、抽帧、转录，一站式交给 LLM，今日新增 stars 最高。 |
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | TypeScript | 0（+797） | 自托管的 Grok 伴侣，支持实时语音、Minecraft/Factorio 游戏操作，Web/macOS/Windows 全平台。 |
| [huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) | Python | 0（+227） | 用开源模型构建本地语音 Agent，Hugging Face 官方出品，语音交互新范式。 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | Python | 0（+423） | 将技术书籍 PDF 转为 Claude Code 可用的 Skill，极大降低知识迁移成本。 |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | Python | 71,132 | 开放金融数据平台，专为分析师、量化交易者和 AI Agent 设计。 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 62,034 | 开源 AI 求职工具：扫描职位、评分衡量、定制简历，本地运行在 CLI Agent 中。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 49,094 | 集成 300+ AI 助手的生产力工具，支持对话和自主 Agent，一站式 AI 工作站。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 59,417 | LLM 驱动的多市场股票智能分析系统，集成行情、新闻、决策看板。 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 100,059 | 从零实现类 ChatGPT 大模型，教程级代码，深度学习入门必读。 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 53,956 | 2 小时从零训练 64M 参数小模型，适合研究训练流程与快速原型。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,241 | 大模型评估平台，支持 100+ 数据集，模型评测领域标准工具。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,421 | 在 Apple Silicon 上学习 LLM 推理服务，从零构建 tiny vLLM + Qwen。 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 86,270 | 领先的开源 RAG 引擎，融合 Agent 能力，支持深度文档理解和上下文构建。 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 64,028 | 本地优先的强大 Agent 体验，主打“停止租赁智能，拥有它”。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | TypeScript | 61,952 | AI Agent 的通用记忆层，跨会话持久化上下文，与 RAG 深度结合。 |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | Rust | 58,769 | 闪电级搜索引擎，内置 AI 混合搜索，可直接嵌入应用。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,176 | 文档 Agent 和 OCR 平台，连接文档与大模型的核心桥梁。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,405 | 高性能云原生向量数据库，ANN 搜索场景标杆。 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | Python | 34,874 | 无向量化的基于推理的 RAG，存储节省，适合隐私场景。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 33,631 | 高可用向量数据库与搜索引擎，支持云端部署。 |

## 趋势信号分析

**Agent 生态进入“能力外挂”爆发期**：今日 Trending 榜中 4 个高增长项目均围绕给 Agent 赋予新能力——视频理解（`claude-video`）、语音交互（`speech-to-speech`）、书籍知识吸收（`book-to-skill`）、虚拟伴侣（`airi`），显示社区正从框架层转向应用层，追求一键式能力增强。**Agent 治理与安全成为新增长点**：微软的 `agent-governance-toolkit` 首次登榜，呼应 OWASP Agentic Top 10 威胁清单，表明企业级 Agent 部署的安全需求正在上升。**“技能化”趋势显著**：多个项目（如 `ECC`、`book-to-skill`）将复杂功能封装为 Agent 可调用的“Skill”，降低 AI 工具链集成门槛。此外，Andrew Ng 的 `aisuite` 虽才上线，但代表“统一接口”的标准化潮流，可能推动多模型编排更简洁。超大规模向量数据库（Milvus、Qdrant）和 RAG 引擎（RAGFlow）持续高星，表明检索增强仍是企业落地 AI 的核心路径。

## 社区关注热点

1. **`bradautomates/claude-video`** —— 让 Claude 具备视频理解能力，直接调用多模态，是 Agent 能力扩展的典范，适合需要分析视频内容的场景。
2. **`moeru-ai/airi`** —— 自托管 AI 伴侣，融合实时语音和游戏操作，展示了开源 Agent 在沉浸式交互上的潜力，尤其吸引个人化 AI 用户。
3. **`microsoft/agent-governance-toolkit`** —— 首个系统化 Agent 治理工具，覆盖策略执行、零信任身份、沙箱隔离，是 AI 工程化实践的重要里程碑。
4. **`andrewyng/aisuite`** —— Andrew Ng 背书的多 AI 提供商统一接口，可能成为简化多模型调用的标准方案，值得关注其后续生态发展。
5. **`graphify-labs/graphify`**（Stars 97,793）—— 将代码库、文档、SQL 模式转为可查询知识图谱，无需向量数据库，代表 RAG 新范式，适合企业内部知识管理。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*