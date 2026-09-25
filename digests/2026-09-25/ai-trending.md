# AI 开源趋势日报 2026-09-25

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-25 00:45 UTC

---

# **AI 开源趋势报告 – 2026-09-25**

---

## **1. 今日亮点**

AI 开源生态正迎来爆发式增长，**原生代理工具链与记忆系统**成为核心焦点。*vectorize-io/hindsight* 今日斩获 +1,668 颗星，凸显了对持久化、可学习代理记忆系统的日益重视。谷歌以 **[ax](https://github.com/google/ax)** 进入代理编排领域，标志着机构级对代理框架的正式认可；而 *NVIDIA/Model-Optimizer* 则强调了模型压缩与高效推理部署的关键需求。值得注意的是，*dream-num/univer* 与 *HKUDS/CLI-Anything* 代表了新一代**原生代理应用平台**，使 AI 代理能够无缝对接真实世界软件环境（如电子表格与 CLI 工具），预示着向全栈 AI 集成的深刻转变。

---

## **2. 按类别划分的顶级项目**

### 🔧 AI 基础设施

| 项目 | 语言 | 星标数（总 / 今日） | 简述 |
| :--- | :--- | ---: | :--- |
| [google/ax](https://github.com/google/ax) | Go | 0 (+1,373) | 谷歌开源的代理编排运行时，支持可扩展、生产级的代理工作流。其快速崛起表明企业正在广泛采纳结构化的代理执行框架。 |
| [NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer) | Python | 0 (+44) | 一套统一的 SOTA 模型优化库，涵盖量化、蒸馏、推测解码等技术。对于在 TensorRT-LLM、vLLM 等推理后端高效部署 LLM 至关重要。 |
| [strands-agents/harness-sdk](https://github.com/strands-agents/harness-sdk) | Python, TypeScript | 0 (+455) | 用于构建和控制生产级 AI 代理的端到端 SDK。支持任意模型与云服务商，为代理开发提供模块化基础。 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Python | 56,547 | 从零开始构建并交付 AI 系统的实战指南——已成为开发者进入 AI 工程领域的奠基性资源。 |

### 🤖 AI 代理 / 工作流

| 项目 | 语言 | 星标数（总 / 今日） | 简述 |
| :--- | :--- | ---: | :--- |
| [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | Python | 0 (+1,668) | Hindsight 引入一种随时间演进的学习型代理记忆系统，将临时交互转化为持久、动态的知识。这是长期代理智能的重大突破。 |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | 0 (+1,082) | AI 代理的办公套件：将电子表格、文档、PDF 与关系表统一至单一运行时环境，使代理能原生嵌入业务应用中。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | 0 (+413) | “CLI-Anything：让所有软件原生支持代理”——将每个命令行工具转化为代理可用接口，实现终端层面的自动化。 |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0 (+611) | 一种代理技能框架，将软件开发编码为可重复、可学习的流程，标志着向基于技能的代理设计方法论的转变。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 266,907 | 针对 Claude Code、Codex 等优化的高性能代理运行时。注重令牌效率、安全性与研究导向开发，正成为代理运行时调优的事实标准。 |

### 📦 AI 应用

| 项目 | 语言 | 星标数（总 / 今日） | 简述 |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 153,083 | 用户友好的自托管 AI 界面，支持 Ollama、OpenAI API 等，广泛用于本地 LLM 访问与团队协作。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 125,536 | 通过 AI 工作流自动从关键词生成高清短视频——内容创作者与营销人员实现规模化视频生产的理想选择。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 65,604 | 由 LLM 驱动的股票分析系统，整合多源数据、新闻与决策仪表盘，支持本地运行与自动调度。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 56,291 | 将文档或主题一键生成带动画、图表与语音旁白的原生 PowerPoint 演示文稿——彻底革新 AI 辅助演示创作。 |

### 🧠 大语言模型 / 训练

| 项目 | 语言 | 星标数（总 / 今日） | 简述 |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 62,484 | 仅用 2 小时即可从零训练一个 6400 万参数的 LLM——为开发者与研究人员普及小型模型训练。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 105,514 | 在 PyTorch 中逐步实现类 ChatGPT 的 LLM——适合教学与深入理解 Transformer 机制。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,723 | 构建适用于 Apple Silicon 的微型 vLLM + Qwen 堆栈的实用指南——非常适合边缘推理与嵌入式 AI 实验。 |

### 🔍 RAG / 知识库

| 项目 | 语言 | 星标数（总 / 今日） | 简述 |
| :--- | :--- | ---: | :--- |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 147,017 | 主导性的代理工程平台，现正拓展至高级 RAG 与多代理工作流。仍是构建 LLM 应用的首选。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 91,277 | 领先的开源 RAG 引擎，融合检索与代理能力，支持复杂、上下文丰富的 LLM 交互。 |
| [Cognee](https://github.com/topoteretes/cognee) | Python | 30,969 | 自托管 AI 记忆平台，内置知识图谱引擎，使代理能在会话间保留并推理长期上下文。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 65,953 | AI 代理的即插即用记忆基础设施，提供持久化上下文，专为生产环境设计。在代理生态中迅速获得关注。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 121,219 | 将代码库、文档与模式转换为可查询的知识图谱，无需向量存储。是传统 RAG 的强大替代方案。 |

---

## **3. 趋势信号分析**

今日数据揭示了一次**范式转移**：**原生代理开发**正成为主流，AI 系统不再孤立存在，而是深度融入软件工作流。*vectorize-io/hindsight* 与 *affaan-m/ECC* 的爆炸式增长，反映出对**持久化、智能化代理记忆**与**运行时性能优化**的迫切需求——这正是自主系统的核心支撑。新的模式正在涌现：*dream-num/univer* 与 *HKUDS/CLI-Anything* 等项目展示了向**通用代理接口**的演进，覆盖电子表格、终端与文档编辑器，模糊了人机交互的边界。

这一趋势与近期大模型进展（尤其是 DeepSeek、Qwen、Gemini 等具备多模态与推理能力的模型）高度契合，其中上下文保持与工具使用至关重要。此外，NVIDIA 的 *Model-Optimizer* 反映出行业对**推理效率优化**的普遍压力，源于在成本敏感环境中部署大模型的需求。顶级代理框架中 Python 与 TypeScript 的主导地位，暗示出一种分化：**Python 用于核心 AI 逻辑，TypeScript 用于 UI 与集成层**。这些趋势共同指向一个成熟的生态系统——AI 代理正不仅变得“智能”，更趋向于**上下文感知、持久化，并嵌入日常软件之中**。

---

## **4. 社区热点**

- **[vectorize-io/hindsight](https://github.com/vectorize-io/hindsight)** – 具备学习能力的革命性代理记忆系统；构建长期演化型 AI 代理的必备工具。
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** – 代理运行时性能的新兴标杆；若需优化代理工作流中的令牌使用与安全性，请优先关注。
- **[dream-num/univer](https://github.com/dream-num/univer)** – 代表未来生产力：统一的工作空间，让代理可在各类办公工具中协同操作——企业自动化理想之选。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** – 通过知识图谱提供无向量、确定性的 RAG 替代方案——对注重隐私与可复现性的 AI 系统极具价值。
- **[NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer)** – 部署大规模 LLM 团队的必选项；将多种优化技术整合为统一流水线，最大化推理速度。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*