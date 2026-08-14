# AI 开源趋势日报 2026-08-14

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-14 00:59 UTC

---

# AI 开源趋势日报（2026-08-14）

## 今日速览

今日热榜呈现几大动向：**Agent 技能（Skills）生态集中爆发**——diagram-design 单日暴涨 +4,475 stars，anthropics/skills 与 obsidian-skills 同期登榜；**端侧微型模型成为新增长极**，needle 以 14MB 模型获 +769 stars；**AI 基础设施走向精细化**，semantica、Switchyard、RAGFlow 分别从上下文、模型路由、RAG 引擎加固生产底座；**AI 原生工作空间开始整合团队协作与 Agent**，macro（+1,239）与 holaOS（+241）获得高热度。

## 各维度热门项目

### 🔧 AI 基础工具（框架 / SDK / 推理引擎 / 开发工具 / CLI）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [semantica-agi/semantica](https://github.com/semantica-agi/semantica) | Python | 0（+713） | 图原生基础设施，为可追责 AI 系统提供上下文层。今日 +713，说明开发者对可控、可解释 Agent 基础设施的需求正在快速上升。 |
| [NVIDIA-NeMo/Switchyard](https://github.com/NVIDIA-NeMo/Switchyard) | Rust | 0（+408） | LLM 应用流量路由器，保持 OpenAI/Anthropic API 兼容，支持跨模型基准与成本优化。模型供给碎片化时代，这种控制平面工具成为刚需。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 164,079 | 模型定义与推理框架标杆。长期作为社区基础设施，几乎覆盖所有主流模型架构的推理与训练。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 178,484 | 本地 LLM 运行与分发平台。与端侧模型（如 needle）和本地训练 UI（如 unsloth）形成协同生态，是本地 AI 的入口级工具。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,359 | 核心深度学习框架。几乎所有新模型与训练工具都依赖它，是 AI 底层基础设施的地基。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 8,261 | Rust 生态的模块化 LLM 应用框架。随着 Rust 在高性能 AI 基础设施中的采用，rig 为强类型、高并发的 Agent 服务提供构建基础。 |

### 🤖 AI 智能体 / 工作流（Agent 框架 / 自动化 / 多智能体）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | Shell | 0（+778） | 一键启动“AI 代理机构”，包含前端、Reddit、创意等多个专属 Agent。今日 +778，显示社区对多智能体系统可落地玩法的追捧。 |
| [anthropics/skills](https://github.com/anthropics/skills) | Python | 0（+312） | Anthropic 官方的 Agent Skills 仓库，提供可复用的技能集合。官方下场定义技能生态标准，推动 Agent 能力模块化。 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) |  | 0（+292） | 将 Obsidian CLI 和开放格式（Markdown、Bases 等）封装成 Agent 技能。把个人知识管理与 Agent 工作流连接，是生产力场景的典型应用。 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | TypeScript | 0（+241） | 开源“All in One”Agent 工作空间，支持 Claude Code、Codex 等，集成 100+ 工具和 MCP。试图统一 Agent 的开发与运行环境。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 239,979 | Agent harness 性能优化系统，管理技能、记忆、安全等。总星近 24 万，是 Agent 工程领域事实上的性能调优标准。 |
| [LangChain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 144,187 | Agent 工程框架的基石，提供从链式调用到复杂 Agent 编排的完整工具集。虽然新框架不断涌现，它仍是大多数生产系统的起点。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 186,593 | 老牌通用 Agent 平台，倡导“人人可用的 AI”。持续搭载最新模型能力，仍是社区最广泛的 Agent 入门项目之一。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 109,120 | 让 AI Agent 像人一样操作浏览器。网页自动化已成为 Agent 落地最重要的入口，其 API 被大量上层应用集成。 |

### 📦 AI 应用（具体应用产品 / 垂直场景解决方案）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | HTML | 0（+4,475） | 为 Claude Code 准备的 29 种编辑型图表，自包含 HTML+SVG。单日 +4,475，说明高质量的“Agent 提示工程素材”正成为稀缺资源。 |
| [macro-inc/macro](https://github.com/macro-inc/macro) | Rust | 0（+1,239） | 统一团队工作空间，将邮件、聊天、文档、CRM 等与 Agent 和共享 AI 记忆 @链接。今日 +1,239，显示 AI 原生协作工具正在取代传统 SaaS 组合。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 148,718 | 自托管 AI 对话界面，支持几乎所有主流后端。作为终端用户使用 AI 的默认入口，star 持续稳定增长。 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | HTML | 167,094 | 社区驱动的高质量 Prompt 集合（原 Awesome ChatGPT Prompts）。自托管能力让企业可在私有环境安全复用。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 103,131 | 一键生成高清短视频的 AI 工作流。长期霸榜，反映内容创作自动化市场依然火热。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 50,429 | AI 生产力工作室，集聊天、自主 Agent 与 300+ 助手于一体。将多种 AI 功能整合到一个客户端，属于应用层聚合者。 |
| [lightningpixel/modly](https://github.com/lightningpixel/modly) | TypeScript | 0（+118） | 基于本地 AI 从图片生成 3D 模型，完全在 GPU 上运行。本地化生成工具正从文本/图像向 3D 扩展。 |
| [altic-dev/FluidVoice](https://github.com/altic-dev/FluidVoice) | Swift | 0（+76） | 最快的 macOS 本地听写应用，采用设备端 STT + 定制 AI 增强模型。作为 Wispr Flow 的开源替代，切中隐私敏感语音输入需求。 |

### 🧠 大模型 / 训练（模型权重 / 训练框架 / 微调工具）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [cactus-compute/needle](https://github.com/cactus-compute/needle) | Python | 0（+769） | 14MB 的 foundation model，面向手机、可穿戴、机器人和智能家居。今日 +769，端侧超轻量模型成为重要方向。 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | Python | 0（+328） | 本地训练/运行 LLM 和扩散模型的 UI，支持 Qwen3.8、Kimi K3、DeepSeek-V4 等新模型。大幅降低微调门槛，让个人也能“玩转”大模型。 |
| [Lightricks/LTX-2](https://github.com/Lightricks/LTX-2) | Python | 0（+205） | 官方音频-视频生成模型推理与 LoRA 训练包。视频生成从概念走向工程化，LTX-2 提供可本地运行的官方实现。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 102,612 | 从零手写 ChatGPT 级 LLM 的教程。随新模型发布持续更新，是学习 LLM 内部机制的首选资源。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,299 | 大模型评测平台，支持 100+ 数据集。在模型迭代加速的背景下，中立、全面的评测越来越受重视。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,483 | 在 Apple Silicon 上从零构建微型 vLLM + Qwen，面向系统工程师的 LLM 推理教学。兼具学习与工程价值。 |

### 🔍 RAG / 知识库（向量数据库 / 检索增强 / 知识管理）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 88,013（+465） | 领先的开源 RAG 引擎，融合 Agent 能力为 LLM 提供上下文层。今日 +465，持续是 RAG 领域的最热项目。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 90,654 | 为所有 Agent 提供跨会话持久记忆。将 Agent 每次行为压缩并注入未来上下文，解决“遗忘”痛点。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 63,209 | 通用 AI Agent 记忆层，以统一 API 服务多 Agent 框架。是 RAG 在记忆方向上的重要分支。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,623 | 文档 Agent 与 OCR 平台，连接数据与 LLM。在复杂文档理解场景中处于核心位置。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,628 | 云原生向量数据库，支撑大规模向量 ANN 检索。与 RAGFlow 等常有集成，是 AI 应用后端存储的重要选择。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 33,967 | 高性能向量数据库与搜索，提供云服务。Rust 实现的高性能和大规模特性使其在工业界广泛使用。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 30,004 | 开源 AI 记忆平台，用知识图谱为 Agent 提供长期记忆。自托管 + 知识图谱，是 RAG 与记忆融合的代表。 |

## 趋势信号分析

今日热榜呈现三条清晰主线：**第一，Agent 技能（Skills）生态集中爆发**。diagram-design 单日 +4,475，anthropics/skills 与 obsidian-skills 同时上榜，说明社区正从“构建 Agent”转向“给 Agent 装备技能包”，官方和第三方都在推动技能标准化。**第二，端侧/微型模型成为新增长极**。needle 以 14MB 模型登榜并获 +769，与 unsloth、ollama 等本地运行/训练工具形成呼应，边缘 AI 的工程化加速。**第三，AI 基础设施日趋精细化**。semantica 提供图原生上下文层、Switchyard 解决多模型路由、RAGFlow 巩固 RAG 引擎地位，表明 Agent 应用正在从原型走向生产，对可控、可观测、低成本调度的需求显著上升。此外，macro 和 holaOS 等“AI 原生工作空间”获得大量关注，显示 AI 正在重塑团队协作和开发者工具的产品形态。

## 社区关注热点

- **Claude Code / Agent Skills 生态**：diagram-design 和 obsidian-skills 表明“技能化插件”是当下最热入口，建议同步关注 Anthropic 官方 `anthropics/skills`。  
- **端侧 AI**：needle 的 14MB 模型为超低资源设备带来可能性，结合 FluidVoice 本地 STT，边缘 AI 应用将快速增加。  
- **AI 原生工作空间**：macro 和 holaOS 尝试统一通讯、办公、代码等场景，其“共享 AI 记忆”设计值得深入体验。  
- **LLM 流量治理**：NVIDIA Switchyard 为多模型路由和成本优化提供标准层，企业级部署应尽早评估。  
- **RAG 与长期记忆融合**：RAGFlow、mem0、claude-mem 正在把 RAG 从检索扩展到持久记忆，是知识基础设施演进的关键方向。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*