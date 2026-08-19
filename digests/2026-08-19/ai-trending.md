# AI 开源趋势日报 2026-08-19

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-18 23:11 UTC

---

# AI 开源趋势日报（2026-08-19）

> 说明：Trending 榜单中 `public-apis/omarchy/Motrix/PLFM_RADAR/OpenCut` 因与 AI 无关已略去；今日热榜部分仓库未抓取总星数，以“—”表示。

---

## 1. 今日速览

- 今日 GitHub Trending 的 13 个仓库中有 7 个 AI 相关项目，且高度集中在 **AI Agent 基础设施**：multi-agent harness、长期记忆、上下文数据库、技能包。
- **MoneyPrinterTurbo** 以今日 +2,306 stars 领跑，AI 视频生成仍是社区最易“破圈”的落地场景。
- **Volcengine/OpenViking** 与 **akitaonrails/ai-memory** 同日上榜，Agent 记忆与上下文持久化成为最明确的新兴赛道。
- **Anthropic-Cybersecurity-Skills** 单日 +726，结构化 Agent 技能包与安全框架结合，可能开启 Agent 技能生态标准化。
- 本地/边缘推理继续升温：**omlx** 专注 Apple Silicon 上的 LLM 推理，说明单机部署大模型的基础设施需求正在细化。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 178,901 | 本地运行 LLM 的一站式工具，已支持 Kimi、GLM、DeepSeek、Qwen 等模型。这是 local-first AI 的基础设施，也是社区使用最广的模型运行时之一。 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | Python | 89,375 | 高吞吐、内存高效的 LLM 推理与部署引擎。生产环境 Agent/RAG 服务的常见选择，生态位持续强化。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 144,498 | LLM/Agent 工程化框架，提供模型接入、工具调用、RAG 等模块。现已定位为 “agent engineering platform”，是 Agent 开发的基础层。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 36,829 | 面向 Agent 与 Generative UI 的前端开发栈，支持 React/Angular/Mobile/Slack，并提出 AG-UI 协议。适合将 Agent 能力嵌入产品界面。 |
| [jundot/omlx](https://github.com/jundot/omlx) | Python | —（+366） | Apple Silicon 上的 LLM 推理服务器，支持 continuous batching、SSD 缓存和菜单栏管理。今日 Trending +366，体现本地高效推理需求。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 8,313 | Rust 生态的模块化 LLM 应用框架，兼顾性能与类型安全。适合低延迟、高可靠性的 LLM/Agent 服务。 |
| [Mirrowel/LLM-API-Key-Proxy](https://github.com/Mirrowel/LLM-API-Key-Proxy) | Python | 542 | 通用 LLM 网关，提供 OpenAI/Anthropic 兼容端点与多提供商负载均衡。可降低多模型接入与 Key 管理成本。 |
| [apache/casbin-gateway](https://github.com/apache/casbin-gateway) | Go | 566 | AI/MCP 安全网关，专注 HTTP 层访问控制。随着 MCP 与工具调用普及，安全网关正成为 Agent 治理的新环节。 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 232,523 | “The agent that grows with you”的通用 Agent 框架。star 规模高居 Agent 赛道头部，社区关注度极高。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 240,960 | Agent Harness 性能优化系统，集 skills、instincts、memory、security 于一体。兼容 Claude Code、Codex、Cursor 等，是 Agent 工程化方向的突出代表。 |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 152,839 | 构建 Agentic Workflow 和 RAG 管线的开源平台，可云上或自托管部署。能让团队从原型到生产不换技术栈。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 109,649 | 让 AI Agent 直接控制浏览器完成在线任务。网页是 Agent 的最大工具集，该方向持续高热。 |
| [chaitanyagiri/munder-difflin](https://github.com/chaitanyagiri/munder-difflin) | TypeScript | —（+256） | 本地 multi-agent harness，今日新登 Trending。其特点是在本地进行多 Agent 协调，适合隐私敏感或离线场景。 |
| [akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) | Rust | —（+730） | 为 Agent Coding CLI 提供长期记忆，并支持不同 Agent 厂商之间的交接。今日 +730，验证“Agent 记忆”正在成为刚需。 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | Python | —（+726） | 包含 817 个结构化网络安全技能，映射 MITRE ATT&CK、NIST CSF 2.0 等 6 个框架，兼容 20+ Agent 平台。今日 +726，标志 Agent 技能包向专业安全领域标准化。 |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | Python | 39,083（+556） | 《深入理解 AI Agent》开源主仓库，包含全书正文、PDF 与按章代码。今日 +556，反映开发者对 Agent 原理和实战的双重学习需求。 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 108,464（+2,306） | 利用 AI 大模型与自动化工作流一键生成高清短视频。今日 +2,306 领跑 Trending，内容生成仍是最易破圈的 AI 应用。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 149,157 | 用户友好的 AI 对话界面，支持 Ollama、OpenAI API 等后端。是本地部署 AI 服务的常见入口，star 体量大。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 50,731 | AI 生产力工作室，支持智能聊天、自主 Agent 与 300+ 助手，统一访问主流 LLM。是桌面级 AI 产品的代表。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 47,759 | AI 将文档或主题转化为原生 PowerPoint，支持动画、图表、旁白与自定义模板。是办公场景中的典型垂直 Agent 应用。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 63,294 | LLM 驱动的多市场股票分析系统，融合行情、新闻、决策看板与自动推送。是金融垂直领域的高热度 Agent 应用。 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 65,331 | 开源 AI 求职助手，可扫描职位、评分、定制简历并跟踪申请。在本地 AI Coding CLI 中运行，体现“Agent 即应用”的分发趋势。 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 64,889 | local-first 的 AI 应用，集 RAG、Agent 与多模型管理于一体。强调数据主权和本地化部署。 |
| [jeecgboot/JeecgBoot](https://github.com/jeecgboot/JeecgBoot) | Java | 47,416 | 企业级 AI 低代码平台，可一句话生成系统，内置 AI 聊天、知识库、MCP 插件。代表 AI 与低代码融合的企业级方向。 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 197,046 | 通用机器学习框架，生态庞大。至今仍是生产级训练/推理的重要基础设施。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 164,227 | 模型定义、训练与推理的标准接口，覆盖文本/视觉/音频/多模态。新模型发布后通常第一时间集成到这里。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,468 | 动态图深度学习框架，是 Agent/RAG/LLM 项目训练与微调的重要依赖。社区活跃度极高。 |
| [keras-team/keras](https://github.com/keras-team/keras) | Python | 64,239 | 高层深度学习 API，适合快速原型和模型验证。与 TensorFlow/JAX 集成，仍有稳定用户群。 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | 60,737 | YOLO 系列目标检测/分割/分类的训练与部署套件。在 CV 落地项目中普及率极高。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,314 | 支持 100+ 数据集和主流模型的 LLM 评测平台。在模型快速迭代期，中立评测会越来越受重视。 |
| [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) | Rust | 78 | 纯 Rust + Candle 从零实现的 decoder-only LLM，支持 MoE、稀疏注意力与量化训练。展示小规模自研模型的工程可能性。 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 88,767 | 领先的开源 RAG 引擎，将 RAG 与 Agent 能力融合，为 LLM 提供上下文层。支持自托管，是 RAG 场景的高人气选择。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 107,923 | 将代码库、文档、SQL Schema、PDF 转化为可查询知识图谱。提供 `/graphify` skill 给 Claude Code、Cursor 等，本地确定性解析，无需向量库。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,679 | 云原生向量数据库，专为大规模向量 ANN 搜索构建。是 RAG/Agent 记忆场景中的常用基础设施。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 34,049 | 高性能向量数据库与向量搜索引擎，也提供云服务。与 AI 应用集成成熟，是 RAG 经典选型。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 63,542 | AI Agent 通用记忆层，支持跨会话持久化用户和上下文记忆。与今日 ai-memory 热点形成呼应，说明记忆层是 Agent 刚需。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 91,154 | 跨会话 Agent 持久上下文工具，自动压缩会话并注入相关记忆。兼容 Claude Code、Codex、Gemini 等，是 Agent 记忆工程的高星项目。 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | Python | —（+298） | 火山引擎开源自进化上下文数据库，统一 Agent Memory、Knowledge RAG 与 Skills。今日 Trending +298，代表大厂入局 Agent 上下文基础设施。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,733 | 文档 Agent 与 OCR 平台，前身为经典 RAG 框架。专注于企业文档理解与检索，仍是 RAG 生态的重要项目。 |

---

## 3. 趋势信号分析

今日最明显的信号是 **AI Agent 从“对话助手”走向“基础设施工程”**。Trending 上 `munder-difflin`（本地 multi-agent harness）、`ai-memory`（跨 Agent 交接记忆）、`OpenViking`（Agent 上下文数据库）同日上榜，说明长期记忆、上下文统一、多智能体协调开始成为独立工具品类。

`Anthropic-Cybersecurity-Skills` 以 817 个结构化技能包登榜，意味着 **Agent 技能生态正向安全、合规等专业领域标准化**。AI 视频生成方面，`MoneyPrinterTurbo` 依然以 +2,306 stars 领跑，说明自动化内容生产是大众市场最易感知的落地场景。

另一条线索是 **本地/边缘推理**：`omlx` 聚焦 Apple Silicon 上的 LLM 推理，`tiny-llm`、`ollama` 等持续活跃，显示开发者希望以更低成本和更高隐私运行模型。整体来看，Agent memory/skills 与本地推理是今日开源社区最明显的两个增量方向。

---

## 4. 社区关注热点

- **Agent 长期记忆/上下文管理**：`akitaonrails/ai-memory`、`volcengine/OpenViking`、`mem0ai/mem0`、`thedotmack/claude-mem` 等同步出现。跨会话记忆正在成为 Agent 能否“长跑”的关键。
- **Agent 技能包生态**：`mukul975/Anthropic-Cybersecurity-Skills` 将 817 个技能映射到安全框架，未来“技能市场”可能成为 Agent 应用分发的新形态。
- **AI 视频生成**：`harry0703/MoneyPrinterTurbo` 今日 +2,306，短视频自动生成是当前最容易规模化传播的 AI 应用。
- **本地/边缘 LLM 推理**：`jundot/omlx` 用 continuous batching + SSD 缓存为 Apple Silicon 提供服务；结合 `ollama`、`tiny-llm`，本地小模型体验会继续改善。
- **Agent 工程教育**：`bojieli/ai-agent-book` 今日 +556，`datawhalechina/hello-agents`、`shareAI-lab/learn-claude-code` 等教程项目也保持高关注，开发者教育是生态繁荣的重要信号。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*