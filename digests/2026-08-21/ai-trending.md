# AI 开源趋势日报 2026-08-21

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-20 23:15 UTC

---

## 筛选说明

今日 Trending 共 17 个仓库，其中 **13 个与 AI/ML 明确相关**；已剔除 `AprilNEA/OpenLogi`、`google-timeline-visualizer`、`makeplane/plane` 等非 AI 项目。主题搜索结果中也排除了 Julia、Airflow、Streamlit、paperless-ngx 等通用型技术栈。

> Stars 总量优先采用主题搜索数据；Trending 未提供总量且主题搜索未收录的项目，总量以 “—” 表示。

---

## 1. 今日速览

今天最核心的信号是 **Agent Skills 与上下文工程成为新增量**：`mattpocock/skills` 单日 +2,267，`obra/superpowers`、`cursor/plugins` 等围绕“可复用技能/插件”的项目集中登榜。其次是 **长时记忆与上下文基础设施**爆发，`volcengine/OpenViking` 当日 +955，`claude-mem`、`mem0`、`ai-memory` 等持续活跃。与此同时，**AI 安全与可观测性**首次成规模出现，腾讯 `AI-Infra-Guard`、PostHog AI observability 都在今天登上热榜。应用侧，`MoneyPrinterTurbo` 以 +2,774 的今日增量成为最抢眼的垂直 AI 工具。整体来看，AI 开源正在从“模型军备竞赛”转向 **Agent 生产力、上下文治理与安全管控**并行的阶段。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架 / SDK / 推理引擎 / CLI）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 179,060 | 本地运行 LLM 的最流行工具，已支持 Kimi-K2.6、GLM-5.2、MiniMax、DeepSeek、Qwen 等新模型。作为本地推理基础层项目，它持续跟随最新模型发布更新。 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | Python | 89,561 | 高吞吐、内存高效的 LLM 推理与 serving 引擎。生产环境部署 LLM 的关键基础设施，功能迭代速度一直处于第一梯队。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 67,018 | 在数据进入 LLM 前压缩工具输出、日志、文件与 RAG 块，最多可减少 60-95% 的 JSON token。它是“上下文经济”下很典型的 token 优化基础设施。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,320 | 支持 100+ 数据集和多种主流模型的 LLM 评测平台。模型选型和能力评估的通用工具，适合做 Agent 底座模型对比。 |
| [modular/modular](https://github.com/modular/modular) | Mojo | —（+340） | Modular 官方平台仓库，包含 MAX 与 Mojo 语言工具链。今日新增 340 stars，AI 编译器/运行时路线仍在吸引开发者关注。 |
| [cursor/plugins](https://github.com/cursor/plugins) | TypeScript | —（+473） | Cursor 插件规范与官方插件仓库，正在定义 AI 编辑器的扩展方式。今日 +473，说明 AI 编程工具生态开始标准化插件接口。 |
| [PostHog/posthog](https://github.com/PostHog/posthog) | Python | —（+100） | 产品分析平台，重点突出 AI 可观测性，可捕获 Agent 上下文并辅助诊断问题、推动修复。今日 +100，表明 AI 应用的可观测性成为新卖点。 |
| [Tencent/AI-Infra-Guard](https://github.com/Tencent/AI-Infra-Guard) | Python | —（+28） | 腾讯开源的 AI 红队平台，覆盖 Agent、Skills、MCP、AI 基础设施扫描与 LLM 越狱评估。AI 安全赛道开始出现系统性工具。 |

---

### 🤖 AI 智能体 / 工作流（Agent 框架 / 自动化 / 多智能体）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 241,444 | 面向 Claude Code、Codex、Cursor 等编码 Agent 的 harness 性能优化系统，整合 skills、memory、security 等能力。241k stars 说明 Agent 工程化已成为社区最热方向之一。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 186,687 | 让每个人都能使用和构建 AI 的通用 Agent 项目。老牌高星项目，依然是通用 Agent 框架的代表。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 144,651 | Agent 工程平台，提供模型、工具、记忆与 RAG 的统一抽象。构建 LLM 应用和 Agent 工作流时的默认选择之一。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 109,884 | 让 AI Agent 可以操作真实网站、自动化线上任务。网页自动化 Agent 领域的明星项目，109k stars 持续走高。 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | —（+2,267） | 作者从自己的 `.agents` 目录中提炼出的“真实工程师技能”集合。今日新增 2,267 stars，说明 Agent Skills 作为一种可复用能力包正在快速流行。 |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | —（+749） | 一套可落地的 agentic skills 框架与软件开发方法论。今日 +749，与 Skills 生态的集中爆发形成了呼应。 |
| [agent-substrate/substrate](https://github.com/agent-substrate/substrate) | Go | —（+66） | Agent Substrate 核心系统，以 Go 实现的底层 agent 运行基座。今日 +66，属于 Agent 底层基础设施方向的早期项目。 |
| [chaitanyagiri/munder-difflin](https://github.com/chaitanyagiri/munder-difflin) | TypeScript | —（+517） | 本地多智能体 harness，TypeScript 实现。今日 +517，表明“本地优先、轻量多 Agent 协作”正受到关注。 |

---

### 📦 AI 应用（具体应用产品 / 垂直场景解决方案）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [f/prompts.chat](https://github.com/f/prompts.chat) | HTML | 167,649 | 前身是 Awesome ChatGPT Prompts，社区贡献的提示词合集/资源库。167k stars，是提示词工程领域最大的共享阵地。 |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 153,049 | 可视化构建 Agentic Workflows、RAG 管道与多模型 AI 应用。已成为企业落地 LLM 应用的主流开源平台之一。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 149,387 | 用户友好的自托管 AI 对话界面，兼容 Ollama、OpenAI API 等。个人/团队本地部署 AI 服务的经典入口。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 112,889（+2,774） | 输入主题或关键词即可自动生成高清短视频。今日新增 2,774 stars，是当前内容自动化/短视频生成最具爆发力的应用项目。 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 66,618（+855） | 开源 AI 求职助手：扫描职位、按 A-F 评分、定制简历并追踪申请，可在 Claude Code 等 CLI 中本地运行。今日 +855，是垂直场景 Agent 的典型落地案例。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 63,498 | LLM 驱动的多市场股票智能分析系统，支持行情、新闻、看板与自动推送。金融垂直 AI 应用的代表性项目。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 50,841 | AI 生产力工作室，提供智能聊天、自主 Agent 与 300+ 助手，统一访问前沿 LLM。一体化客户端形态受到不少用户欢迎。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 48,231 | 将文档或主题转换为原生 PowerPoint，支持动画、图表、配音与自定义模板。办公场景 AI 内容生成的又一个爆款方向。 |

---

### 🧠 大模型 / 训练（模型权重 / 训练框架 / 微调工具）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 197,108 | 端到端开源机器学习框架，覆盖训练、部署与生产链路。虽然新框架不断出现，它仍是工业界基础 ML 栈之一。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 164,283 | Hugging Face 模型定义框架，支持文本、视觉、音频与多模态模型的训练和推理。它是开源模型生态最核心的枢纽项目。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,504 | 动态神经网络框架，研究/生产两开花。102k stars，AI 研究与模型训练的主力框架。 |
| [scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn) | Python | 66,987 | 经典机器学习库，覆盖分类、回归、聚类、降维等任务。传统 ML 工作流中不可替代的基础组件。 |
| [keras-team/keras](https://github.com/keras-team/keras) | Python | 64,241 | 面向人类的深度学习 API，强调低门槛与快速实验。与 TensorFlow/JAX 协同，是训练入门和原型验证的常用选择。 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | 60,806 | YOLO 系列目标检测、分割、分类、姿态估计工具链。60k stars，是 CV 任务中最流行的训练与推理库之一。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,510 | 在 Apple Silicon 上从零构建迷你 vLLM + Qwen 的 LLM 推理系统教学项目。对系统工程师理解 LLM 推理栈非常有价值。 |

---

### 🔍 RAG / 知识库（向量数据库 / 检索增强 / 知识管理）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 108,677 | 将代码库、文档、SQL 结构、配置与 PDF 解析为可查询知识图谱，不依赖向量库。代表 RAG 向结构化、推理化方向演进。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 91,366 | 跨会话记忆层，自动捕获 Agent 行为、压缩并注入后续上下文。91k stars，解决 coding agent 长期记忆痛点。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 88,929 | 领先的开源 RAG 引擎，将 RAG 与 Agent 能力结合，构建面向 LLM 的上下文层。企业知识库场景高频选择。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 63,704 | 面向 AI Agent 的通用记忆层，为不同应用提供跨会话长期记忆能力。是 Agent Memory 基础设施里的热门项目。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,773 | 文档 Agent 与 OCR 平台，围绕文档解析、索引与检索构建 RAG 应用。LlamaIndex 生态已从框架走向完整文档智能平台。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,715 | 云原生向量数据库，专为大规模向量 ANN 搜索设计。RAG/检索基础设施中的中坚力量。 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | Python | 35,270 | 无向量、基于推理的 RAG 文档索引方案，规避传统向量检索的局限。35k stars，代表“RAG 2.0”新思路。 |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | Python | —（+955） | 火山引擎开源的“自进化上下文数据库”，统一 Agent Memory、Knowledge RAG 与 Skills。今日 +955，长时记忆与上下文统一管理正成为 Agent 刚需。 |

---

## 3. 趋势信号分析

今天最明显的信号是 **Agent Skills 与上下文工程成为新增量**。`mattpocock/skills` 单日 +2,267，`obra/superpowers` +749，配合 `affaan-m/ECC`、`cursor/plugins`、`caveman` 等，说明“可复用技能/插件”正成为 AI 编程 Agent 的能力分发层。第二，**记忆/上下文从辅助功能提升为系统级需求**：`volcengine/OpenViking` +955，`claude-mem`、`mem0`、`ai-memory` 同时活跃，RAG 也出现 `Graphify`、`PageIndex` 这类“去向量库”的新路径。第三，**AI 安全与可观测性首次成规模登榜**：`Tencent/AI-Infra-Guard`、PostHog AI observability、`apache/casbin-gateway` 等反映了企业从“能做 Agent”转向“可控、可审计”。同时，Ollama 更新中出现的 Kimi-K2.6、GLM-5.2、MiniMax 等新模型，与近期开源/国产模型密集发布形成联动，继续拉动本地推理与 Agent 工具链升级。整体看，AI 开源正从模型竞赛转向 **Agent 生产力 + 上下文治理 + 安全管控**三线并行。

---

## 4. 社区关注热点

- **Agent Skills / Plugin 生态爆发**：关注 [mattpocock/skills](https://github.com/mattpocock/skills)（+2,267）、[obra/superpowers](https://github.com/obra/superpowers)、[cursor/plugins](https://github.com/cursor/plugins) 和 [affaan-m/ECC](https://github.com/affaan-m/ECC)。它们正在把 Agent 能力变成可复用、可分发的“技能包”。

- **长时记忆与上下文工程**：关注 [volcengine/OpenViking](https://github.com/volcengine/OpenViking)（+955）、[akitaonrails/ai-memory](https://github.com/akitaonrails/ai-memory) 和 [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)。跨会话记忆、Agent 交接与上下文压缩是当前 Agent 落地的关键瓶颈。

- **无向量 RAG 与知识图谱**：关注 [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) 和 [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)。两者都在尝试绕过传统向量库，用推理式或图谱式索引构建更可靠的 RAG。

- **AI 安全与红队工具**：关注 [Tencent/AI-Infra-Guard](https://github.com/Tencent/AI-Infra-Guard)、[apache/casbin-gateway](https://github.com/apache/casbin-gateway) 和 [RiccardoBiosas/awesome-MLSecOps](https://github.com/RiccardoBiosas/awesome-MLSecOps)。Agent 大规模接入 MCP、Skills 之后，安全扫描与越狱评估会成为刚需。

- **垂直场景 AI 自动化应用**：关注 [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)（+2,774）、[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) 和 [santifer/career-ops](https://github.com/santifer/career-ops)。社区更偏爱能直接产生业务价值的 AI 工作流，而不是停留在通用框架。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*