# AI 开源趋势日报 2026-08-06

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-06 01:24 UTC

---

## 筛选说明

- **Trending 榜单过滤**：`next.js`、`tailwindcss`、`system-design-primer` 为通用前端/系统设计项目，与 AI/ML 无关，已剔除。
- **保留的 Trending AI 项目**：`cloudflare/computer`、`loopx`、`TencentDB-Agent-Memory`、`pdf-inspector`、`DeepSeek-Reasonix`、`agent-skills`、`superpowers`、`supervision`、`ADR`、`airllm`。
- **主题搜索过滤**：`netdata`、`apache/airflow`、`julia` 等虽带 `ml` 标签，但本质属于可观测性/工作流/通用语言，未纳入核心 AI 分类。

---

## 一、今日速览

今日 AI 开源呈现明显的 Agent 基础设施爆发：智能体记忆、Agent 技能、计算机操作环境与终端编码 Agent 密集登榜。腾讯云开源的 **TencentDB-Agent-Memory** 以今日 +1,892 stars 成为增长最快项目，说明团队级 Agent 记忆正成为刚需。Cloudflare 发布 **computer**，尝试为 Agent 提供计算机操作层；Uber 开源 **ADR**，把企业级 Agent 安全、可观测性带入社区。推理效率方面，**AirLLM** 以 4GB 单 GPU 跑 70B 模型，继续拉低本地部署门槛。通用前端/系统设计类项目今日虽上榜，但已全部过滤。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) | Rust | —（+1,582） | Rust 编写的 PDF 检查/分类/文本抽取库，自动区分扫描版与文本 PDF。今日 +1,582，说明文档预处理在 RAG/Agent 管线中是强需求。 |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | —（+931） | Agentic 技能框架与软件开发方法论。今日 +931，是 Agent 技能生态快速膨胀的直接信号。 |
| [cloudflare/computer](https://github.com/cloudflare/computer) | TypeScript | —（+891） | 给 AI Agent 提供计算机操作环境（Computer Use）的开发者平台。今日 +891，Cloudflare 入局 Agent 环境层。 |
| [lyogavin/airllm](https://github.com/lyogavin/airllm) | Jupyter Notebook | —（+833） | 在单张 4GB GPU 上运行 70B LLM 的推理方案。今日 +833，持续降低本地/个人部署门槛。 |
| [uber/ADR](https://github.com/uber/ADR) | Python | —（+354） | Uber 开源的 AI Agent 安全、可观测性与威胁检测工具。今日 +354，企业级 Agent 治理走向开源。 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | —（+226） | 面向 AI 编码 Agent 的生产级工程技能集。今日 +226，与 superpowers 共同表明“技能资产”正成为 Agent 工程新抓手。 |
| [roboflow/supervision](https://github.com/roboflow/supervision) | Python | 48,929（+146） | 可复用的计算机视觉工具库，覆盖检测、分割、跟踪等。今日 +146，视觉 Agent 自动化场景常用依赖。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 177,874 | 本地 LLM 运行工具，支持 Kimi、GLM、DeepSeek、Qwen、Gemma 等。生态地位稳固，是 Agent 本地模型接入的主流入口。 |

---

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | TypeScript | —（+1,892） | 腾讯云开源的团队级 Agent 记忆中枢，将对话、文档、代码转化为 Chat Memory/Skill/LLM-Wiki/Code-Graph。今日 +1,892，是今日增长最快的项目。 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | Go | 31,636（+747） | DeepSeek 原生的终端 AI 编码 Agent，围绕 prefix-cache 稳定性设计。今日 +747，说明 DeepSeek 生态正在向开发工具链延伸。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 238,025 | Agent harness 性能优化系统，整合技能、本能、记忆与安全。在 llm 主题下拥有最高 Stars，是 Agent 工程化的现象级项目。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 226,082 | 强调“与用户一起成长”的个人 Agent。高 Stars 表明可演进式 Agent 设计受到社区认可。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 185,835 | 最早的自主 Agent 爆款项目，代表通用任务自动化的长期方向。 |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 151,464 | 可视化 Agentic Workflow/RAG 构建平台，支持云/VPC/自托管。是 Agent 应用从原型到生产的主要选择之一。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 143,509 | Agent 工程化平台，提供统一模型抽象、工具调用与 RAG 编排。是当前 Agent 开发的基础框架。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 107,990 | 让 AI Agent 能够像人一样使用网站，自动化在线任务。Web Agent 方向最受关注的基础项目之一。 |

---

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 147,978 | 用户友好的本地 AI 界面，支持 Ollama、OpenAI API 等。是自托管 LLM 最常见的 Web 入口。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 101,770 | 利用 AI 大模型与自动化工作流一键生成高清短视频。内容创作方向的标杆开源应用。 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 62,954 | 开源 AI 求职助手：扫描职位、按 A-F 评分、定制 CV 并跟踪申请。代表 Agent 在个人职场场景的落地。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 60,190 | LLM 驱动的多市场股票分析系统，含实时新闻、决策看板与自动推送。金融垂直领域的热门 Agent 应用。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 49,680 | AI 生产力工作室，支持智能对话、自主 Agent 和 300+ 助手。一站式接入主流 LLM 的桌面端产品。 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | Python | 46,347 | 开源超级 AI 助手 / Agent Harness，支持任务规划、工具调用、记忆自进化（原 chatgpt-on-wechat）。轻量可扩展，一行安装。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 43,265 | 将文档/主题转为原生 PowerPoint，支持图表、动画、音频讲解和自定义模板。办公自动化方向的代表。 |
| [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) | Python | 33,595 | 个人 AI 助手，可本地/云端部署，支持多个聊天应用与可扩展能力。通义 Agent 生态的落地产品。 |

---

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | 60,239 | 提供 YOLO26/YOLO11/YOLOv8 等目标检测、分割、姿态估计。视觉模型训练与推理使用最广的开源工具之一。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,277 | LLM 评测平台，支持 Llama、Qwen、GLM、GPT-4、Claude 等模型与 100+ 数据集。模型评测正成为选型标配。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,444 | 面向系统工程师的 LLM 推理服务课程：在 Apple Silicon 上构建微型 vLLM + Qwen。展示推理服务从使用到自研的学习路径。 |
| [genieincodebottle/generative-ai](https://github.com/genieincodebottle/generative-ai) | Jupyter Notebook | 2,586 | 综合生成式 AI 学习资源，含路线图、项目、用例与面试准备。适合系统学习 GenAI 的社区仓库。 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | Python | 316 | 端侧 LLM 推理库，基于 X-Bit 量化。关注低资源/端上模型部署。 |
| [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) | Rust | 63 | 纯 Rust + Candle 从零实现的 decoder-only LLM，集成稀疏注意力、MoE 与量化感知训练。系统级模型实现的新实验项目。 |

---

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 86,910 | 领先的开源 RAG 引擎，融合 Agent 能力，为 LLM 提供高质量上下文层。 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 64,395 | 本地优先的 Agent / RAG 应用，强调“拥有自己的智能”。适合个人与企业快速搭建知识库。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 62,612 | AI Agent 的通用记忆层，管理跨会话长期记忆。记忆正成为 RAG 之外的重要知识基础。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,407 | 文档 Agent 与 OCR 平台，是 RAG 应用的核心框架之一。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,523 | 云原生向量数据库，面向大规模向量 ANN 搜索。RAG 体系中最常用的基础组件之一。 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | Python | 35,025 | 提出 Vectorless、基于推理的 RAG 文档索引，探索不依赖向量库的检索新路径。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 33,804 | 高性能向量数据库与搜索引擎，Rust 实现的性能向基础设施。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 29,798 | 开源 AI 记忆平台，通过知识图谱为 Agent 提供持久跨会话记忆。与 TencentDB-Agent-Memory 方向互证。 |

---

## 三、趋势信号分析

今日热榜呈现出 Agent 基础设施的集中爆发：记忆（TencentDB-Agent-Memory）、技能（superpowers、agent-skills）、计算机操作（cloudflare/computer）、安全（Uber ADR）与终端编码 Agent（DeepSeek-Reasonix）同时登榜，说明社区已从“单点对话”转向“可治理、可记忆、可执行环境的 Agent 工程化”。推理效率仍是差异化重点：AirLLM 用 4GB GPU 跑 70B 模型，pdf-inspector 用 Rust 解决文档预处理，都是“降本”信号。Rust/Go 在 AI 基础设施层（pdf-inspector、DeepSeek-Reasonix、Milvus、Qdrant）中频繁出现，性能敏感模块正从 Python 向系统语言迁移。此外，DeepSeek-Reasonix 登榜与 DeepSeek 模型持续迭代形成呼应；Cloudflare 的 computer 项目则与 OpenAI/Anthropic 的 Computer Use 方向同频。大厂开源加速（腾讯、Uber、Cloudflare），也暗示 Agent 安全、共享记忆、执行环境将成为企业采用 AI Agent 的前置条件。

---

## 四、社区关注热点

- **团队级 Agent 记忆**：[TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) 今日 +1,892，把对话、文档、代码沉淀为可共享记忆资产，是 Agent 从个人工具迈向团队协作的关键信号。
- **Agent 技能与编码 Agent**：[obra/superpowers](https://github.com/obra/superpowers)（+931）与 [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)（+226）同时登榜，配合 [DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix)（+747），说明“可复用技能”与“终端编码 Agent”正在形成新开发范式。
- **Computer Use 方向**：[cloudflare/computer](https://github.com/cloudflare/computer) 今日 +891，“给 Agent 一台电脑”将 Agent 从对话扩展到真实环境操作，值得跟进云厂商后续 API 与协议设计。
- **低资源推理**：[lyogavin/airllm](https://github.com/lyogavin/airllm) 今日 +833，单张 4GB GPU 跑 70B 模型，可能进一步推动个人与小团队本地部署 Agent。
- **Agent 安全**：[uber/ADR](https://github.com/uber/ADR) 今日 +354，Uber 开源内部 Agent 安全工具，企业级 Agent 可观测性与威胁检测将成新赛道。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*