# AI 开源趋势日报 2026-08-13

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-13 01:00 UTC

---

# AI 开源趋势日报（2026-08-13）

> 数据来源：GitHub Trending 今日榜 + AI 主题搜索近 7 天活跃仓库。已过滤与 AI/ML 无关的通用工具；Trending 仓库未标注总 stars 时以“—”表示，括号内为今日新增。

## 今日速览

今日 GitHub AI Trending 的主线是“Agent 从单点走向编队”：orca、agency-agents、paperclip 同时出现在热榜，并行 Agent 调度与 Agent 团队管理成为新热点。diagram-design 以单日 +2,855 领跑，反映出 AI 编程对高质量、结构化设计资产的需求正在爆发。RAG 领域没有降温：RAGFlow 继续增长，semantica 以 graph-native context 拿下 +845。端侧小模型与垂直模型也出现新信号：needle 用 14MB 参数模型瞄准 IoT，Kronos 专注金融市场语言建模。Rust 在 AI 基础设施层的渗透仍在加速，NVIDIA NeMo 也带来了 Switchyard。

---

## 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 164,018 | 开源模型生态基座，支持文本/视觉/音频/多模态模型训练与推理；长期是社区默认的模型工程入口。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,351 | 主流深度学习框架，AI 研究与生产训练的事实标准之一；今日继续稳居最热 AI 基础设施。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 178,369 | 一键运行本地 LLM 的极简工具，近期已支持 Kimi、GLM、MiniMax、DeepSeek 等；本地推理的首选入口。 |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | HTML | —（+2,855） | 为 Claude Code 提供的 29 种编辑示意图类型，纯 HTML+SVG；今日热榜新增近 3k，显示 AI 编程对高质量设计素材的强烈需求。 |
| [NVIDIA-NeMo/Switchyard](https://github.com/NVIDIA-NeMo/Switchyard) | Rust | —（+421） | NVIDIA NeMo 生态中的 Rust 新项目，暂无完整描述；NeMo 品牌背书使其有望成为 LLM 系统工程新组件。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 8,251 | 模块化可扩展的 Rust LLM 应用框架；Rust 在 AI 基础设施层的热度持续上升。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,297 | 支持 100+ 数据集与主流模型的 LLM 评测平台；在模型迭代加速背景下评测工具价值凸显。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,480 | 面向系统工程师的微型 vLLM 学习项目，演示在 Apple Silicon 上实现 LLM 推理；学习型基础设施项目受到开发者欢迎。 |

---

## 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 239,759 | Agent harness 性能优化系统，为 Claude Code、Codex、Cursor 等提供 skills/memory/security；总量最高，体现 agent 工程化需求。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 186,563 | 最早引爆自主 Agent 概念的项目，现提供人人可用的 AI 工具与构建平台；仍是指标级 agent 项目。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 144,097 | Agent 工程平台，提供统一工具调用、记忆与 RAG 抽象；企业级 LLM 应用基础设施。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 108,970 | 让 AI Agent 直接操作浏览器完成任务；网页自动化 Agent 方向的代表作。 |
| [Eigenwise/atomic-agents](https://github.com/Eigenwise/atomic-agents) | Python | 6,165 | 以“原子化”方式构建 AI Agent 的框架；模块化组合思路适合复杂工作流。 |
| [stablyai/orca](https://github.com/stablyai/orca) | TypeScript | —（+1,235） | 面向并行 Agent 集群的 ADE，可叠加在自己订阅的编码 Agent 上；今日热榜 +1.2k，标志“管理 Agent 舰队”成为新需求。 |
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | Shell | —（+1,873） | “AI 代理公司”合集，每个角色都是带人格与流程的专家 Agent；今日新增近 1.9k，展示多智能体内容生产的趣味化方向。 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | TypeScript | —（+571） | 管理工作中各类 AI Agent 的开源应用；今日热榜增长明显，说明 agent 运维/治理需求开始出现。 |

---

## 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 152,249 | 构建 Agentic workflow 与 RAG pipeline 的协作平台；从原型到生产的一体化 AI 应用开发环境。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 148,612 | 用户友好的自托管 AI 对话界面，兼容 Ollama、OpenAI API；本地化 AI 使用的标配应用。 |
| [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 102,814 | 利用 AI 大模型与自动化工作流一键生成高清短视频；内容自动化生产方向的头部项目。 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 64,662 | 本地优先的全栈 AI 工作台，支持文档、知识库与 Agent 能力；强调“拥有自己的智能”。 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 63,639 | 开源 AI 求职助手，可扫描职位、打分并定制简历；垂直场景 AI 应用的典型代表。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 50,355 | AI 生产力工作室，集聊天、自主 Agent 与 300+ 助手于一体；统一接入前沿大模型。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 45,575（+476） | 将文档或主题转化为原生 PowerPoint，支持动画、图表与配音；今日热榜 +476，办公垂直 AI 赛道持续升温。 |
| [macro-inc/macro](https://github.com/macro-inc/macro) | Rust | —（+227） | 面向团队的统一 AI 工作空间，将邮件、聊天、文档、CRM 与 Agent 通过共享 AI 记忆连接；代表“AI-native 工作流”新产品形态。 |

---

## 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 102,532 | 从零实现 ChatGPT 类 LLM 的经典教程；模型原理学习领域的高 star 常青树。 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | Python | 316 | 基于 X-Bit 量化的设备端 LLM 推理库；端侧模型部署工具链的重要拼图。 |
| [Lightricks/LTX-2](https://github.com/Lightricks/LTX-2) | Python | —（+65） | LTX-2 音视频生成模型的官方推理与 LoRA 训练包；多模态生成模型开始开放训练生态。 |
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Python | —（+266） | 面向金融市场的语言基础模型；垂直行业基础模型正在加速出现。 |
| [cactus-compute/needle](https://github.com/cactus-compute/needle) | Python | —（+315） | 仅 14MB 的基础模型，目标设备为手机、穿戴、智能家居与机器人；端侧 AI 走向“极小模型”时代。 |
| [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) | Rust | 75 | 纯 Rust + Candle 从零构建的 decoder-only LLM，支持 MoE 与量化训练；Rust 训练/推理一体化的实验项目。 |

---

## 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 105,685 | 将代码库、文档、SQL 与 PDF 转化为可查询知识图谱；无需向量库，AIAgent 可解释检索的代表。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 87,550（+139） | 领先的开源 RAG 引擎，将 RAG 与 Agent 能力融合；今日继续出现在热榜，RAG 基建需求稳定。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 63,136 | 面向 AI Agent 的通用记忆层，为跨会话长期记忆提供自托管方案；Agent 记忆与 RAG 正在融合。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,600 | 领先的文档 Agent 与 RAG 框架，现也强化 OCR 与文档理解；企业知识检索核心依赖。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,615 | 高性能云原生向量数据库，专为大规模向量 ANN 搜索构建；AI 数据基础设施标配。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 33,941 | 高性能向量数据库与搜索引擎；Rust 实现，支撑下一代 AI 应用。 |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | Rust | 11,139 | 开发者友好的嵌入式向量检索库，面向多模态 AI；强调“少管理、多搜索”。 |
| [semantica-agi/semantica](https://github.com/semantica-agi/semantica) | Python | —（+845） | Graph-Native 的上下文基础设施，面向“可问责 AI 系统”；今日 +845，知识图谱与 RAG 结合的新叙事正在升温。 |

---

## 趋势信号分析

今日热榜最明显的信号是 Agent 从“单助手”切换到“编队/生态”：orca 的并行 Agent ADE、agency-agents 的 Agent 团队、paperclip 的 Agent 管理，说明社区已开始解决规模化 Agent 的编排与治理问题。

第二个信号是面向 AI 编程的“设计资产”成为独立品类：diagram-design 单日 +2,855，Claude Code 用户需要非 Mermaid 的编辑示意图，表明模型能力之外，输入结构质量正成为效率瓶颈。

第三，RAG 继续向“graph-native / 知识图谱”演进，semantica 与 Graphify 同时被关注，向量数据库不再是唯一答案。第四，端侧与垂直模型并行：needle 以 14MB 模型进入 IoT，Kronos 专注金融语言，边缘 AI 与行业大模型落地趋势明显。最后，Rust 在 AI 基础设施层的占比继续提升，NVIDIA NeMo/Switchyard、rig、Qdrant、LanceDB 共同构成值得跟踪的 Rust AI 工具链。

---

## 社区关注热点

- **Agent 运维与编队管理**：[paperclipai/paperclip](https://github.com/paperclipai/paperclip)、[stablyai/orca](https://github.com/stablyai/orca) 等表明 Agent 数量增长后，“管理 Agent、调度 Agent、治理 Agent”正成为新刚需。
- **AI 编程设计资产**：[cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) 单日 +2,855，为 Claude Code 提供高质量 HTML/SVG 图表，预示“喂给模型的创作资产”将成为一个新开源品类。
- **Graph-native RAG 新范式**：[semantica-agi/semantica](https://github.com/semantica-agi/semantica)、[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) 以及 [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) 都在探索“绕过向量库、用推理和知识图谱做检索”的路线，值得重点观察。
- **端侧与垂直基础模型**：[cactus-compute/needle](https://github.com/cactus-compute/needle) 的 14MB 模型与 [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) 金融模型，代表“超小模型”和“行业模型”两个极端方向。
- **Rust AI 基础设施**：[NVIDIA-NeMo/Switchyard](https://github.com/NVIDIA-NeMo/Switchyard)、[0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)、[qdrant/qdrant](https://github.com/qdrant/qdrant) 与 [lancedb/lancedb](https://github.com/lancedb/lancedb) 组成日益完整的 Rust AI 工具链，适合系统级开发者提前布局。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*