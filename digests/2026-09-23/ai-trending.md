# AI 开源趋势日报 2026-09-23

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-23 00:59 UTC

---

# **AI 开源趋势报告 – 2026-09-23**

---

## **1. 今日亮点**

谷歌推出的开源智能体编排运行时 [`google/ax`](https://github.com/google/ax) 今日猛增 **+2,305** 颗星，标志着 AI 智能体基础设施的强劲势头。与此同时，`dream-num/univer` 成为面向 AI 的生产力新标杆，将电子表格、文档和 PDF 整合进统一的智能体运行时——清晰反映出对 *集成化 AI 工作空间* 的日益增长需求。**RAG + 持久记忆系统** 如 `mem0ai/mem0`、`thedotmack/claude-mem` 和 `Cognee` 的兴起，体现了生态系统正逐步成熟，聚焦于长期上下文保留能力。值得注意的是，**开源大模型智能体正越来越多地采用自托管、模块化与终端优先的设计**，典型代表如 `Hmbown/Codewhale`（Rust）和 `esengine/DeepSeek-Reasonix`。

---

## **2. 按类别排名的顶级项目**

### 🤖 AI 智能体 / 工作流

| 项目 | 语言 | 星标数（总计 / 今日） | 简述 |
| :--- | :--- | ---: | :--- |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 146,896 | 基础性智能体工程平台；现已成为企业与研究领域中多智能体、工具调用工作流的核心枢纽。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 265,450 | 针对 Claude Code 等模型的高性能优化智能体框架——在真实场景执行中显著降低令牌消耗，提升可靠性。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 248,120 | 会随时间演化的智能体；代表了从静态提示向可适应、可定制的 AI 助手转变的趋势。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 52,083 | 全栈式 AI 生产力工作室，内置 300 多个自主智能体，统一接入前沿大模型——是开发者寻求即插即用智能体体验的理想选择。 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Python | 48,491 | 超轻量级、自托管个人智能体框架，支持 WebUI、记忆、MCP 及多智能体协作——是 DIY AI 智能体的绝佳入门方案。 |

### 🔍 RAG / 知识库

| 项目 | 语言 | 星标数（总计 / 今日） | 简述 |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 91,174 | 领先的开源 RAG 引擎，融合检索与智能体逻辑——使大模型具备智能、动态的知识锚定能力。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 65,844 | 可即插即用的智能体记忆层，具备生产级持久化能力——对跨会话保持上下文至关重要。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 94,486 | 持久化上下文系统，压缩会话历史并重新注入——兼容多种智能体与大模型，实现真正的连续性体验。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 73,533 | 在输入大模型前压缩工具输出与日志——可将令牌消耗降低高达 95%，同时保持准确性，对低成本智能体流水线至关重要。 |
| [Cognee](https://github.com/topoteretes/cognee) | Python | 30,922 | 自托管 AI 记忆平台，基于知识图谱构建——为智能体提供跨会话的结构化持久记忆。 |

### 🧠 大模型 / 训练

| 项目 | 语言 | 星标数（总计 / 今日） | 简述 |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 62,192 | 仅用 2 小时即可从零训练一个 6400 万参数的大模型——让小模型训练对开发者与研究人员更加普惠。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,468 | 全面的大模型评估平台，支持超过 100 个数据集，覆盖推理、编码、安全等维度——是评测新模型的必备工具。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,680 | 构建针对 Apple Silicon 优化的微型 vLLM + Qwen 技术栈——非常适合边缘推理与本地大模型实验。 |

### 🔧 AI 基础设施

| 项目 | 语言 | 星标数（总计 / 今日） | 简述 |
| :--- | :--- | ---: | :--- |
| [google/ax](https://github.com/google/ax) | Go | 2305 | 谷歌开源的智能体编排运行时——推动大规模、可生产部署智能体系统的重大基础设施进展。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 181,492 | 支持快速本地部署 Kimi、GLM、DeepSeek、Qwen、Gemma 等模型——仍是本地大模型实验的首选工具。 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | Python | 42,152 | 基于图结构控制流构建健壮、有状态的智能体——是实现复杂多步自动化的关键支撑。 |
| [agent-substrate/substrate](https://github.com/agent-substrate/substrate) | Go | 245 | 核心智能体系统框架——正成为下一代智能体架构的基础组件。 |

### 📦 AI 应用

| 项目 | 语言 | 星标数（总计 / 今日） | 简述 |
| :--- | :--- | ---: | :--- |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | 255 | AI 智能体的“办公套件”——将电子表格、文档、幻灯片与 PDF 整合至同一运行时，支持强大的多模态智能体工作流。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 125,168 | 通过自动化 AI 工作流生成高清短视频——反映出人们对 AI 驱动内容创作的兴趣持续上升。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 65,505 | 基于大模型的股票分析系统，集成实时新闻、决策仪表盘与自动通知——垂直领域 AI 工具的典范之作。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 72,446 | 开源的 AI 求职代理，可扫描招聘门户、评分职位、定制简历——可在 Claude Code 等 CLI 环境中本地运行。 |

---

## **3. 趋势信号分析**

当前最迅猛的趋势是 **AI 智能体基础设施的成熟化**，尤其体现在 **持久记忆、上下文压缩与智能体编排** 方面。`mem0ai/mem0`、`headroomlabs-ai/headroom` 与 `thedotmack/claude-mem` 等项目清晰表明行业正从单任务智能体转向长生命周期、上下文感知的系统，能够持续推理与学习。这一趋势与近期大模型进展如 **Claude 3.5 Sonnet** 与 **Qwen-VL 2.5** 相契合，后者强调推理能力与多模态融合，进一步推动了对更优记忆与检索层的需求。

一种新的技术栈正在浮现：**终端优先、自托管、基于 Rust 或 Go 构建的智能体**（如 `Hmbown/Codewhale`、`esengine/DeepSeek-Reasonix`、`agent-substrate/substrate`）——表明开发方向正转向轻量、高性能、低延迟的智能体执行。这些工具专为追求完全控制权与隐私保护的开发者设计，而非依赖云端服务。

尤为值得注意的是，**RAG 已不再只是检索**——它正演变为 **赋能智能体的知识引擎**（如 `infiniflow/ragflow`、`Cognee`）。RAG、记忆与智能体工作流的融合，预示着我们正超越“聊天机器人”，迈向 **自主数字员工** 的时代。谷歌发布 `ax` 标志着这一方向获得机构背书，强化了“智能体编排将成为下一代 AI 基础设施”的共识。

---

## **4. 社区热点**

- **[google/ax](https://github.com/google/ax)** — 谷歌开源的智能体编排运行时具有里程碑意义；预计将成为构建可扩展、生产级智能体系统的事实标准。
- **[dream-num/univer](https://github.com/dream-num/univer)** — 首个真正集成的 AI 办公套件（电子表格、文档、PDF、画布），专为智能体打造——是未来 AI 生产力的远见之作。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — 行业顶尖的即插即用记忆层；任何构建长期、上下文感知型 AI 应用的开发者都不可或缺。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** — 将 RAG 与智能体能力融合于单一开源引擎中——高级知识驱动型 AI 应用的必备之选。
- **[langchain-ai/langgraph](https://github.com/langchain-ai/langgraph)** — 支持稳健、有状态的智能体工作流；构建可靠、多步骤 AI 自动化系统的核心要素。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*