# AI 开源趋势日报 2026-08-22

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-21 23:13 UTC

---

# AI 开源趋势日报 · 2026-08-22

> 数据来源：GitHub Trending 实时榜 + AI 主题搜索（7 日活跃）。Trending 中 `google-timeline-visualizer`、`OpenLogi`、`TypeScript`、`Ghost`、`protobuf` 等非 AI 项目已略去。Trending 源数据总量字段缺失，表中按原文保留为 `0（+今日）`，实际总量以仓库页为准。

## 一、今日速览

今日热榜呈现非常明显的 **Agent 工程化**主线：`mattpocock/skills` 以 +3,368 领跑，`obra/superpowers`、`ECC`、`ruflo`、`apache/maka` 等 Agent Skills/Harness 项目集体登榜。AI 应用层同步爆发，`MoneyPrinterTurbo`（+1,187）与 `career-ops`（+918）分别代表 AI 视频生成与 AI 求职两大垂直场景。RAG 方向出现“无向量化/降 token”新趋势，`PageIndex`、`LEANN`、`headroom` 均以存储或 token 压缩为卖点。基础设施层面，`modular/modular`（+905）与 `cursor/plugins`（+391）说明 Mojo 生态和 AI 编辑器插件规范也正在走热。

## 二、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [modular/modular](https://github.com/modular/modular) | Mojo | 0（+905） | Modular Platform 核心仓库，包含 MAX 与 Mojo。今日 +905，AI 基础设施层关注度明显回升。 |
| [PostHog/posthog](https://github.com/PostHog/posthog) | Python | 0（+334） | 面向“自驱产品”的 AI 可观测性与产品分析平台。今日 +334，Agent 运行诊断与可观测性开始成为刚需。 |
| [cursor/plugins](https://github.com/cursor/plugins) | TypeScript | 0（+391） | Cursor 官方插件规范与插件仓库。今日 +391，AI 编辑器生态正在走向标准化。 |
| [microsoft/onnxruntime](https://github.com/microsoft/onnxruntime) | C++ | 0（+5） | 跨平台高性能 ML 推理与训练加速器。今日增量虽小，但仍是生产级 AI 部署的基础依赖。 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | Python | 89,657 | 高吞吐、内存高效的 LLM 推理与服务引擎。7 日活跃榜中持续位居核心位置。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 179,129 | 本地大模型运行工具。已支持 Kimi-K2.6、GLM-5.2、MiniMax、DeepSeek 等新模型，生态更新速度极快。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 164,317 | 最广泛使用的模型框架，覆盖文本、视觉、音频与多模态。是训练与推理社区的事实标准之一。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 67,118 | 在进入 LLM 前压缩工具输出、日志与 RAG 分块。宣称可减少 60–95% JSON token，是“token 经济学”方向代表项目。 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | 0（+3,368） | 面向真实工程师的 Agent Skills 集，直接来自 `.agents` 目录。今日 +3,368，为全天热榜最高增量。 |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0（+789） | Agentic Skills 框架与软件开发方法论。今日 +789，说明“Agent 技能+工程方法论”正被社区快速接受。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 241,774（+348） | Agent Harness 性能优化系统，支持 Skills、记忆与安全。24 万+ Stars 仍保持增长，是 Agent 工程化的现象级项目。 |
| [apache/maka](https://github.com/apache/maka) | TypeScript | 0（+141） | Apache 孵化中的 local-first AI Agent 工作区。以 append-only log 记录消息、工具调用与权限决策，今日 +141。 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | TypeScript | 0（+140） | 原生 Agent meta-harness，支持多智能体 swarm、自适应记忆与 RAG。今日 +140，主打“智能体编排”能力。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 144,736 | Agent 工程平台，是 LLM 应用与 RAG 生态的基础框架。7 日活跃榜中持续被大量项目引用。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 91,457 | 跨会话 Agent 记忆工具，自动捕获、压缩并注入上下文。支持 Claude Code、Codex、Gemini 等，是记忆赛道头部项目。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 63,770 | 面向 AI Agent 的通用记忆层，提供长期会话记忆能力。与 claude-mem 一同说明“记忆”成为 Agent 核心组件。 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 113,864（+1,187） | 基于 AI 大模型与自动化工作流，一键生成高清短视频。今日 +1,187，AI 内容创作热度持续高涨。 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 67,421（+918） | 开源 AI 求职助手，支持职位扫描、A-F 评分、简历定制与进度跟踪。今日 +918，跑在 Claude Code、Codex 等本地 CLI 中。 |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 153,147 | Agentic Workflow 与 RAG 应用开发平台。提供云端/私有化部署，是当前 AI 应用层重要基础设施型产品。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 149,515 | 用户友好的 AI 交互界面，支持 Ollama、OpenAI API 等多种后端。本地 AI 应用首选入口之一。 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 65,025 | Local-first 的 All-in-One AI Agent 体验，内置文档管理与 RAG。强调“拥有自己的智能”，是自托管 AI 应用的典型代表。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 63,580 | LLM 驱动的多市场股票智能分析系统，支持实时新闻、决策看板与自动推送。AI 量化/投研场景的落地案例。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 48,473 | AI 将文档或主题生成原生 PowerPoint，支持动画、图表、旁白与模板。办公自动化垂直场景表现突出。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 50,885 | AI 生产力 Studio，支持智能对话、自主 Agent 与 300+ 助手。统一接入主流前沿 LLM，属于通用 AI 应用入口。 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,526 | 核心深度学习训练框架，支撑大量大模型训练与微调工作。仍是 AI 研究与工程的基础底座。 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 54,913 | 从零训练 64M 参数 LLM 仅需 2 小时。轻量教学与快速验证实验的明星项目。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,512 | 面向系统工程师的微型 LLM 推理系统学习项目，构建 tiny vLLM + Qwen。帮助理解推理栈底层原理。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,325 | LLM 评测平台，支持 Llama、Qwen、GLM、GPT-4 等 100+ 数据集。模型能力对比与基准测试的重要工具。 |
| [llm-jp/awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) | TypeScript | 1,426 | 日语 LLM 资源汇总，涵盖模型、工具与论文。反映多语言大模型生态正在细分深化。 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 88,998 | 开源 RAG 引擎，融合深度文档理解与 Agent 能力。RAG+Agent 的代表性基础设施。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,790 | 领先的文档 Agent 与 OCR 平台，也是 RAG 框架核心。被大量知识库项目依赖。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,728 | 高性能云原生向量数据库，专为大规模向量 ANN 搜索设计。RAG 存储层的常见选择。 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | Python | 35,284 | 主打“无向量、基于推理的 RAG”文档索引。代表 RAG 领域去向量化/免向量存储的新尝试。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 34,117 | 高性能大规模向量数据库与搜索引擎，提供云服务。Rust 生态中最重要的向量数据库之一。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 109,244 | 将代码库、文档、SQL Schema 等转换为可查询知识图谱。支持 Claude Code、Cursor、Codex，且无需向量库。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 30,172 | 开源 AI Agent 记忆平台，基于自托管知识图谱引擎提供长期记忆。RAG 与记忆能力叠加。 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | Python | 12,823 | MLsys2026 论文项目，宣称可节省 97% 存储同时保持高准确率 RAG。面向个人设备的私有 RAG 方向。 |

## 三、趋势信号分析

今日最清晰的信号是 **“Agent 工程化”从概念走向沉淀**：`mattpocock/skills`、`obra/superpowers`、`ECC`、`apache/maka`、`ruflo` 都在围绕 Agent Skills、Harness、记忆与工作区做产品化，说明社区已开始为 Claude Code、Cursor、Codex 等工具构建可复用的“技能资产”。

第二，**token/成本优化成为新热点**。`headroom` 宣称减少 60–95% JSON token，`caveman` 声称用极简语言省 token，`PageIndex` 与 `LEANN` 则从“无向量 RAG”和存储压缩切入。这与 Agent 长会话、大规模上下文落地的成本瓶颈直接相关。

第三，**AI 应用垂直化明显加速**。AI 不再只是聊天框，而是快速渗透到求职（`career-ops`）、股票分析（`daily_stock_analysis`）、PPT 生成（`ppt-master`）和短视频制作（`MoneyPrinterTurbo`）等具体场景。

此外，`ollama` 已跟进 Kimi-K2.6、GLM-5.2 等新模型，`DeepSeek-Reasonix` 等 DeepSeek 原生工具也出现在 7 日活跃榜中，显示本地推理与新模型发布之间的联动正在加强。

## 四、社区关注热点

- **Agent Skills 标准化**：`mattpocock/skills`、`obra/superpowers`、`cursor/plugins` 正在推动 Agent 技能从个人配置走向跨编辑器/框架的通用规范。
- **Agent 记忆与上下文工程**：`claude-mem`、`mem0`、`cognee` 解决长期记忆；`headroom` 解决 token 成本，二者共同决定 Agent 能否真正长时运行。
- **“无向量”RAG 路线**：`PageIndex`、`LEANN`、`Graphify` 从不同角度尝试摆脱传统向量库依赖，值得关注是否形成新范式。
- **AI 垂直应用快速落地**：`career-ops` 的求职评分、`daily_stock_analysis` 的投研自动化、`ppt-master` 的办公生成，显示“小而准”的 Agent 应用正在爆发。
- **本地推理与可观测性**：`ollama` 对新模型的支持速度，以及 `PostHog` 对 Agent 可观测性的强调，说明 AI 基础设施层仍在加速补位。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*