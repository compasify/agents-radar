# AI 开源趋势日报 2026-08-23

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-22 23:10 UTC

---

# AI 开源趋势日报（2026-08-23）

> 筛选说明：已排除与 AI/ML 无关的通用项目，如 plane、OpenLogi、google-timeline-visualizer、free-for-dev、TypeScript、Julia、Airflow、Streamlit 等。Trending 原始数据未提供总 star 数时标为 0；若同一项目在主题搜索中有总量，则优先采用主题搜索总量。

## 1. 今日速览

- 今日 Trending 被 **AI 编程智能体与 Agent Skills** 霸榜：openai/codex 单日 +1,978，mattpocock/skills +2,684，superpowers +592，andrej-karpathy-skills +379。
- “技能工程”成为新热点：从 `.agents` 目录到 CLAUDE.md，社区开始把 Agent 经验打包成可复用、可分发的 **Skills**。
- 基础设施侧同步升温：LLM 订阅聚合网关 sub2api +264、AI 可观测性平台 PostHog +288、腾讯 AI 红队平台 AI-Infra-Guard +161。
- RAG 与向量数据库仍是主题搜索中最稳定的活跃板块：RAGFlow、LlamaIndex、Milvus、Qdrant、mem0 等持续处在高位。

## 2. 各维度热门项目

### 🔧 AI 基础工具

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 179,203 | 本地运行大模型的标杆工具，目前支持 Kimi-K2.6、GLM-5.2、DeepSeek、gpt-oss 等最新模型。是个人与团队私有化部署 LLM 的重要入口。 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | Python | 89,720 | 高吞吐、内存高效的 LLM 推理与服务引擎。生产环境部署大模型的核心基础设施之一。 |
| [modular/modular](https://github.com/modular/modular) | Mojo | 0（+395） | Modular Platform 包含 MAX 与 Mojo，主打 AI 原生语言与统一编译/推理体验。今日 +395，说明 AI 基础设施层的开发者关注度仍在升温。 |
| [PostHog/posthog](https://github.com/PostHog/posthog) | Python | 0（+288） | 面向“自驱型产品”的开发者工具平台，提供 AI 可观测性、分析、session replay、flags、MCP 等能力。今日 +288，反映 Agent 应用的可观测与调试需求快速上升。 |
| [cursor/plugins](https://github.com/cursor/plugins) | TypeScript | 0（+286） | Cursor 官方插件规范与插件集合，正在把 AI IDE 能力插件化。今日 +286，意味着 Agent 时代的编辑器生态开始标准化。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,327 | LLM 评测平台，支持 Llama、Qwen、GLM、GPT-4 等模型和 100+ 数据集。是 Agent 能力和模型效果验收的重要基础设施。 |
| [Wei-Shaw/sub2api](https://github.com/Wei-Shaw/sub2api) | Go | 0（+264） | 将 Claude/OpenAI/Gemini/Grok 订阅统一转成 API 的中转服务，支持拼车与成本分摊。今日 +264，显示 LLM 订阅聚合和网关类服务正在成为新需求。 |
| [Tencent/AI-Infra-Guard](https://github.com/Tencent/AI-Infra-Guard) | Python | 0（+161） | 腾讯开源的 AI 红队/安全平台，覆盖 Agent、Skills、MCP、AI 基础设施扫描与 LLM 越狱评估。今日 +161，Agent 安全赛道开始受大厂推动。 |

### 🤖 AI 智能体/工作流

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [openai/codex](https://github.com/openai/codex) | Rust | 0（+1,978） | OpenAI 官方终端 Coding Agent，轻量、专注命令行开发流程。今日 +1,978，是当天增量最大的 Agent 项目之一。 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | 0（+2,684） | 来自资深工程师的 Agent Skills 集合，直接从 `.agents` 目录提取。今日 +2,684，为当日 Trending 最高新增，“可复用技能”成为社区热点。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 242,159（+428） | Agent Harness 性能优化系统，统一管理技能、记忆、安全与研究型开发。今日 +428，总量已超 24 万星，覆盖 Claude Code、Codex、OpenCode、Cursor 等。 |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0（+592） | Agentic Skills 框架与软件开发方法论，强调在真实工程中“可用”。今日 +592，与 Skills 类项目一起推高 Agent 工程化热度。 |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | Python | 0（+141） | Anthropic 官方终端 Agent 编程工具，能理解代码库并通过自然语言执行例行开发任务。今日 +141，继续作为 Coding Agent 核心选手被关注。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 234,380 | 总星数超 23 万的 Agent 项目，主打“能伴随用户成长的个人智能体”。在主题搜索的 ai-agent 类别中热度最高。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 144,787 | Agent 工程化平台，提供工具调用、记忆、编排等标准能力。是当前构建生产级 LLM Agent 的最常用框架之一。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 186,773 | 开源 Agent 赛道的常青树，愿景是让 AI 对所有人可用。总星数仍达 18.7 万，代表通用 Agent 方向的长期关注。 |

### 📦 AI 应用

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [n8n-io/n8n](https://github.com/n8n-io/n8n) | TypeScript | 0（+202） | 可自托管的工作流自动化平台，内置原生 AI 能力，支持 400+ 集成。今日 +202，AI 工作流自动化正在持续渗透低代码/无代码场景。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 149,592 | 用户友好的 AI 接口，支持 Ollama、OpenAI API 等后端。是本地部署 LLM 时最常用的前端之一。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 114,628 | 输入主题或关键词即可通过 AI 大模型与自动化工作流一键生成高清短视频。是典型 AIGC 内容生产应用。 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 67,783 | 开源 AI 求职助手，自动扫描职位、按 A-F 评分、定制简历并跟踪投递。垂直场景 Agent 应用正在快速增加。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 63,633 | LLM 驱动的多市场股票智能分析系统，支持实时新闻、决策看板与自动推送。金融垂直场景的典型 AI 应用。 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 65,067 | 本地优先、可自托管的全栈 AI 应用，内置 RAG、多模型管理与 Agent 能力。主打“拥有你自己的智能”。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 50,920 | AI 生产力工作室，集成智能聊天、自主 Agent 与 300+ 助手。统一接入主流 LLM，是热门 AI 应用入口。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 48,627 | 将文档或主题直接转换为原生 PowerPoint，支持形状、动画、图表、语音旁白与自定义模板。AI 办公场景的代表项目。 |

### 🧠 大模型/训练

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 197,330 | 老牌开源机器学习框架，覆盖训练、推理与工具链生态。在主题搜索 ml 类别中仍保持近 20 万星。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 164,344 | 模型定义、微调与推理的标准框架，支持文本、视觉、音频与多模态。是开源大模型生态的枢纽项目。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,548 | 动态图深度学习框架，学术研究与产业训练的事实标准之一。依托 GPU 加速，是 AI 开发底层主力。 |
| [keras-team/keras](https://github.com/keras-team/keras) | Python | 64,248 | 面向人的高层深度学习 API，适合快速原型研究与实验。与 JAX/TensorFlow/PyTorch 生态互通。 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | 60,864 | YOLO 系列目标检测、实例分割、姿态估计等模型的一站式训练与部署工具。CV 领域热度极高。 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 54,926 | 从零训练 64M 参数 LLM 的教学项目，宣称仅需 2 小时。对想了解 LLM 训练全流程的开发者非常友好。 |
| [roboflow/supervision](https://github.com/roboflow/supervision) | Python | 49,666 | 可复用计算机视觉工具库，封装推理、追踪、标注与可视化。适合快速构建 CV 应用。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,512 | 面向系统工程师的微型 LLM 推理系统教程，可在 Apple Silicon 上构建小型 vLLM + Qwen。是推理系统学习的新入口。 |

### 🔍 RAG/知识库

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 109,553 | 将代码库、文档、SQL schema 等解析为可查询知识图谱，无需向量库，可作为 Claude Code、Cursor、Codex 的 skill。是知识管理方向的新明星。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 91,529 | 跨会话捕获 Agent 操作并在未来会话中注入相关上下文，实现持久记忆。支持 Claude Code、Codex、Gemini、Hermes 等多个 Agent。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 89,039 | 开源 RAG 引擎，将 RAG 与 Agent 能力融合，为 LLM 构建上下文层。企业知识库场景的热门选择。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 63,832 | 为 AI Agent 提供通用记忆层，实现跨应用、跨会话记忆。可结合向量库与知识图谱使用。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,801 | 文档 Agent 与 OCR 平台，是 RAG 生态最核心的数据框架之一。覆盖文档加载、检索到生成全链路。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,737 | 云原生向量数据库，专为大规模向量 ANN 搜索构建。在 AI 应用与 RAG 生产环境中有大量部署。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 34,127 | 高性能向量数据库与检索引擎，支持超大规模 AI 检索。Rust 实现，性能和架构受到广泛关注。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 30,186 | 开源 AI 记忆平台，以自托管知识图谱引擎为 Agent 提供长期记忆。可与多种 Agent 框架配合。 |

## 3. 趋势信号分析

今日最明确的爆发点是 **AI 编程智能体及其“技能层”**。openai/codex 单日 +1,978，mattpocock/skills +2,684，superpowers +592，说明社区正从“聊天助手”转向“可复用的 Agent Skills”。值得注意的新兴方向是“技能工程”集中出现：`.agents` 目录、CLAUDE.md、Cursor 插件规范都在尝试把 Agent 经验标准化；ECC 甚至把技能、记忆、安全打包成“harness 性能优化系统”，总量已超 24 万星。另一个明显信号是 **AI 基础设施安全与网关需求上升**：sub2api、LLM-API-Key-Proxy 做统一接入，Tencent/AI-Infra-Guard 做红队安全，PostHog 做 Agent 可观测性。与近期多模型发布相关，Ollama 已同步支持 Kimi-K2.6、GLM-5.2、MiniMax、DeepSeek、gpt-oss 等，模型供给碎片化正在推动统一网关、推理与安全基建快速升温。

## 4. 社区关注热点

- **Agent Skills / 技能工程**：mattpocock/skills 今日 +2,684、superpowers +592、andrej-karpathy-skills +379，技能正在成为可分发、可复用的“AI 资产”。
- **OpenAI Codex**：今日 +1,978，官方终端 Coding Agent 正在与 Claude Code 展开直接竞争，值得跟踪后续迭代。
- **LLM 聚合网关与成本分摊**：sub2api 今日 +264，加上 LLM-API-Key-Proxy，统一接入多家模型 API 的需求正在成为新基建方向。
- **AI 安全与可观测性**：Tencent/AI-Infra-Guard 做 Agent/MCP/Skills 扫描，PostHog 做 Agent 可观测性，说明 Agent 规模化落地后，安全与调试成为刚需。
- **无向量 RAG / 知识图谱化**：Graphify 总星数已超 10 万，把代码库变成可查询知识图谱，且无需向量库，是 RAG 技术路线中值得关注的新变量。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*