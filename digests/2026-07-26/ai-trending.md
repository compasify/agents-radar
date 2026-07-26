# AI 开源趋势日报 2026-07-26

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-26 01:44 UTC

---

# AI 开源趋势日报 2026-07-26

## 今日速览
- **Agent 生态爆发**：`mattpocock/skills` 今日暴增 +1,740 stars，`citrolabs/ego-lite` +986，`ComposioHQ/awesome-claude-skills` +577，Agent 技能框架与浏览器 Agent 成为最热方向。
- **巨头布局 AI 开发工具**：阿里巴巴开源 `alibaba/open-code-review`（+431），将 LLM Agent 引入代码审查场景；Andrew Ng 的 `aisuite` 持续更新，统一多模型接口。
- **垂直领域模型崛起**：金融领域 `shiyu-coder/Kronos`（+319）推出基础模型，`palmier-io/palmier-pro`（+412）专为 AI 打造的 macOS 视频编辑器。
- **RAG 与向量搜索持续进化**：`RyanCodrai/turbovec` 发布基于 TurboQuant 的向量索引，`Graphify-Labs/graphify`（95,874 stars）以知识图谱方式解析代码库。
- **大模型学习热潮**：中文教程《动手学大模型》`Lordog/dive-into-llms` 今日 +408，反映社区对 LLM 原理的旺盛需求。

---

## 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [andrewyng/aisuite](https://github.com/andrewyng/aisuite) | Python | 0（+77） | 统一的生成式 AI 接口，支持多家模型供应商，从 Andrew Ng 团队出品，今日继续增长 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | 0（+431） | 阿里巴巴开源的代码审查工具，结合确定性流水线 + LLM Agent，提供精确行级评论 |
| [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec) | Python | 0（+86） | 基于 TurboQuant 的高效向量索引，Rust 内核 + Python 绑定，为 RAG 提供低延迟检索 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | Python | 87,151 | 高性能 LLM 推理引擎，支撑大量生产级部署，今日虽无新增数据但社区地位稳固 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 176,891 | 本地运行大模型的极简工具，支持 Kimi、DeepSeek、Qwen 等，是个人开发者的标配 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | 0（+1,740） | 今日新增最高！面向真实工程师的 Agent 技能集合，直接从 `.agents` 目录抽取，代表 Agent 技能复用趋势 |
| [citrolabs/ego-lite](https://github.com/citrolabs/ego-lite) | JavaScript | 0（+986） | 专为 AI Agent 打造的极速浏览器，支持与 Codex/Claude Code 共享登录状态，零成本零配置 |
| [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) | Python | 0（+577） | Claude AI 工作流的精选技能、资源和工具列表，帮助开发者快速定制 Claude |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0（+479） | Agentic 技能框架 & 软件开发方法论，强调「行之有效」的工程实践 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 233,318（+377） | Agent 运行时性能优化系统，覆盖技能、本能、记忆、安全，支持 Claude Code/Codex 等多种 CLI |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 150,245 | 可视化构建 Agentic 工作流与 RAG 管道，支持多种模型与工具，企业级协作平台 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 220,478 | 新一代智能体框架，强调「随你成长」的自适应能力，社区关注度极高 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro) | Swift | 0（+412） | macOS 视频编辑器，原生集成 AI 能力，代表 AI 在创意工具中的落地 |
| [OtterMind/Chat2DB](https://github.com/OtterMind/Chat2DB) | Java | 0（+360） | AI 驱动的数据库工具和 SQL 客户端，支持 MySQL、PostgreSQL 等，🔥 热门 GUI 工具 |
| [CoreBunch/Instatic](https://github.com/CoreBunch/Instatic) | TypeScript | 0（+426） | 开源自托管 CMS，替代 Webflow/Framer，支持 Agent 式编辑，输出纯净静态页面 |
| [Automattic/harper](https://github.com/Automattic/harper) | Rust | 0（+503） | 离线、隐私优先的语法检查器，Rust 驱动，速度快且开源；今日增长强劲 |
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Python | 0（+319） | 金融领域基础模型，用「金融市场的语言」预训练，面向量化投资场景 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 146,732 | 用户友好的 AI 交互界面，支持 Ollama 和 OpenAI API，本地部署首选 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [Lordog/dive-into-llms](https://github.com/Lordog/dive-into-llms) | Jupyter Notebook | 0（+408） | 《动手学大模型》系列编程实践教程，中文社区学习 LLM 的优质资源 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 53,841 | 2 小时从零训练 64M 参数小模型，极低门槛让开发者快速理解 LLM 训练全流程 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,407 | 面向系统工程师的 LLM 推理服务课程，在 Apple Silicon 上构建迷你 vLLM + Qwen |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,236 | 大模型评测平台，支持 Llama3、Mistral、Qwen 等 100+ 数据集，模型对比利器 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 95,874 | 将代码库、文档、SQL 模式转换为可查询知识图谱，无向量存储，纯 AST 解析 + 边缘解释 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 85,993 | 领先的 RAG 引擎，融合 Agent 能力，为 LLM 提供高质量上下文层 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | TypeScript | 61,685 | AI Agent 的通用记忆层，跨会话持久化上下文，支持多种 Agent 框架 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,381 | 云原生向量数据库，高性能 ANN 搜索，大规模 RAG 系统的支柱 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 33,585 | 高性能向量数据库与搜索引擎，专为下一代 AI 设计，提供云服务 |

---

## 趋势信号分析

1. **Agent 技能与浏览器自动化成为今日最大风口**：`mattpocock/skills` 和 `citrolabs/ego-lite` 分别以 +1,740 和 +986 的日增 stars 领跑，前者代表「Agent 技能市场」概念——开发者可以直接共享和复用技能脚本；后者则解决 Agent 访问网络时的登录状态共享问题，让 Agent 像人类一样使用浏览器。这反映了社区从「构建单一 Agent」向「构建 Agent 生态」的转变。

2. **LLM 代码审查工具进入实用阶段**：阿里巴巴的 `open-code-review` 采用混合架构（确定性管道 + LLM Agent），内置 NPE、SQL 注入等规则，今日 +431，说明企业对 AI 辅助代码审查有强烈需求，且开源方案开始获得信任。

3. **轻量级向量与知识图谱并行发展**：`turbovec` 专注极致性能（Rust 内核），`Graphify-Labs/graphify` 则完全抛弃向量存储，使用 AST + 图推理。这暗示 RAG 技术正在分化：一类追求海量文档检索，另一类追求精确的结构化知识抽取。

4. **金融 AI 垂直化加速**：`Kronos` 作为首个面向「金融语言」的基础模型，今日 +319，与近期量化交易、AI 金融分析师工具（如 `Vibe-Trading` 27k stars）形成呼应，AI 在金融领域从概念走向落地。

---

## 社区关注热点

- 🚀 **mattpocock/skills**：学习如何为 Claude Code、Codex 等 CLI 编写和复用 Agent 技能，可能是未来 Agent 开发的标准范式。
- 🌐 **citrolabs/ego-lite**：Agent 专用浏览器的兴起，解决 Agent 无法处理登录、验证码等难题，对 Web 自动化 Agent 影响深远。
- 🔧 **alibaba/open-code-review**：企业级 LLM 代码审查实践，开源后可能成为代码质量保障的新常态。
- 📚 **Lordog/dive-into-llms**：《动手学大模型》中文教程，适合希望深入理解 LLM 原理的开发者，Stars 增长表明教育需求旺盛。
- ⚡ **RyanCodrai/turbovec**：Rust 编写的向量索引，在低资源场景下可能替代 FAISS，值得关注性能敏感的 RAG 应用。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*