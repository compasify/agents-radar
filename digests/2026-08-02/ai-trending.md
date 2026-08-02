# AI 开源趋势日报 2026-08-02

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-02 01:43 UTC

---

# AI 开源趋势日报 · 2026-08-02

> 说明：Trending 仓库的原始数据中总 star 显示为 0，因此表格中按 `0（+今日新增）` 呈现；主题搜索项目仅列总 star 数。

## 1. 今日速览

今日最值得关注的动向是 **AI Agent 基础设施正在取代单点聊天机器人成为社区主线**：`bytedance/deer-flow` 与 `zhaoxuya520/reverse-skill` 分别从长周期任务执行和安全技能路由切入，后者单日新增 1320 stars，为今日 Trending 最高。**记忆/RAG 层正在成为 Agent 标配**，`TencentDB-Agent-Memory` 今日 +227，主题搜索中 `claude-mem`、`mem0`、`cognee` 等记忆项目均保持高热度。**语音与 3D 多模态生成出现新爆点**：Hugging Face `speech-to-speech` 今日 +442，微软 `TRELLIS.2` 则以结构化潜空间推进 3D 生成。GitHub 官方 `copilot-sdk` 今日 +142，标志 Copilot 生态开始向“可嵌入应用的 Agent 平台”开放。此外，微软 AI/GenAI 入门课程依旧霸榜，新开发者持续涌入开源 AI 社区。

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架 / SDK / 推理引擎 / 开发工具 / CLI）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [github/copilot-sdk](https://github.com/github/copilot-sdk) | Java | 0（+142） | GitHub 官方多平台 SDK，可将 Copilot Agent 集成进各类应用和服务。今日入榜说明 Copilot 正从 IDE 插件走向可编程基础设施。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 177,526 | 本地运行开源大模型的最流行工具，已支持 Kimi、GLM、DeepSeek、Qwen 等新模型。是个人和团队本地部署 LLM 的首选入口。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,229 | Hugging Face 模型框架，覆盖文本、视觉、音频和多模态模型的训练与推理。开源 AI 生态中最核心的基础组件之一。 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | Python | 87,883 | 高吞吐、内存高效的 LLM 推理与服务引擎。是当前开源模型生产环境部署的关键基础设施。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 143,185 | 定位为“Agent 工程平台”，提供构建 LLM 应用和智能体的工程化抽象。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 159,118 | 面向 AI Agent 的网页搜索、抓取与交互 API。Agent 获取实时网络数据的重要基础设施。 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | Java | 12,759 | JVM 上的 LLM 应用开发库，统一对接模型、向量库和工具调用。适合 Java/Spring 生态的企业级 AI 应用开发。 |

### 🤖 AI 智能体 / 工作流

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | Python | 0（+209） | 开源 long-horizon SuperAgent harness，通过沙箱、记忆、工具、子代理处理分钟到小时级的长任务。代表“长周期 Agent”方向正在升温。 |
| [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | PowerShell | 0（+1,320） | AI 驱动的逆向/渗透安全技能路由包，支持 Claude Code、Cursor、Cline 等 AI 编码客户端。今日全榜最高新增，安全与 Agent 交叉方向受高度关注。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 236,845 | 面向 Claude Code、Codex、Cursor 等 Agent 的性能优化系统，覆盖技能、记忆、安全与研究优先开发。是主题搜索中 star 最高的 Agent 项目之一。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 223,851 | 主打“随你成长”的 Agent 框架，强调长期记忆和持续进化的能力。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 185,751 | 开源 Agent 运动最著名的项目之一，愿景是让每个人都能使用和构建 AI Agent。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 107,523 | 让网站对 AI Agent 可访问并自动化完成线上任务，是 Agent 操作浏览器生态中的明星项目。 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | Python | 72,928 | 从 0 到 1 构建“nano Claude Code”式 agent harness 的教学项目，适合深入理解 Agent 底层原理。 |
| [NomaDamas/k-skill](https://github.com/NomaDamas/k-skill) | JavaScript | 0（+53） | 面向韩国语用户的 Agent 技能包集合，尝试让 AI Agent 更懂本地语言与文化。今日入榜反映 Agent 技能正在走向本地化细分。 |

### 📦 AI 应用

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) | Python | 0（+442） | 使用开源模型构建本地语音 Agent。今日 +442，说明实时语音交互正在成为 AI 应用的重要新场景。 |
| [abus-aikorea/voice-pro](https://github.com/abus-aikorea/voice-pro) | Python | 0（+58） | Gradio WebUI，集成 TTS、零样本声音克隆、Whisper 音频处理、YouTube 下载等功能。面向创作者的一站式语音应用。 |
| [microsoft/TRELLIS.2](https://github.com/microsoft/TRELLIS.2) | Python | 0（+107） | 使用原生紧凑结构化潜空间进行 3D 生成。今日入榜，提示 3D 生成模型仍是社区关注的新前沿。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 147,550 | 用户友好的自托管 AI 交互界面，支持 Ollama、OpenAI API 等。是本地部署 AI 应用的高人气入口。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 101,014 | 利用 AI 大模型和自动化工作流一键生成高清短视频。AI 内容创作领域的高 star 应用。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 42,395 | AI 将文档或主题转换为原生 PowerPoint，支持图表、动画、配音和自定义模板。面向办公场景的垂直 AI 应用。 |
| [microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) | Jupyter Notebook | 0（+949） | 微软出品的 12 周、24 课时 AI 入门课程。今日 +949，说明新开发者持续涌入 AI 开源学习生态。 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | Jupyter Notebook | 0（+108） | 21 课时的生成式 AI 入门课程，与 AI-For-Beginners 共同构成微软 AI 教育矩阵。 |

### 🧠 大模型 / 训练

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,113 | 动态神经网络与 GPU 加速训练框架，是当前 AI 研究与生产的事实标准之一。 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 196,651 | 最老牌的开源机器学习框架，覆盖从研究到生产的完整训练和部署流程。 |
| [keras-team/keras](https://github.com/keras-team/keras) | Python | 64,208 | 面向快速实验的深度学习 API，强调易用性和对人类友好的设计。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 100,315 | 手把手用 PyTorch 从零实现 ChatGPT 类 LLM。是学习大模型原理和训练细节的首选教程仓库。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,256 | 支持 100+ 数据集和主流模型的 LLM 评测平台，帮助社区客观比较模型能力。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,428 | 面向系统工程师的 LLM 推理服务课程，在 Apple Silicon 上从零构建 tiny vLLM + Qwen。 |

### 🔍 RAG / 知识库

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | TypeScript | 0（+227） | 团队级 Agent 记忆中枢，把对话、文档、代码沉淀为 Chat Memory、Skill、LLM-Wiki、Code-Graph 四类资产。今日 +227，企业级 Agent 记忆需求正在上升。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 86,575 | 领先的开源 RAG 引擎，将 RAG 与 Agent 能力结合，为 LLM 提供高质量上下文层。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 89,262 | 为 Agent 提供跨会话持久上下文，自动压缩并注入相关上下文，支持 Claude Code、Codex、Gemini 等。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 62,278 | 通用 AI Agent 记忆层，可为不同 Agent 框架提供长期记忆能力。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,281 | 文档 Agent 与 OCR 平台，也是 RAG 生态中广泛使用的数据连接和索引框架。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,457 | 云原生高性能向量数据库，专为大规模向量 ANN 搜索构建。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 33,712 | 高性能向量数据库与向量搜索引擎，面向下一代 AI 应用。 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | Python | 34,950 | 提出“无向量、基于推理的 RAG”文档索引方案，代表 RAG 领域的新探索方向。 |

## 3. 趋势信号分析

今日最集中的信号是 **Agent 基础设施正在取代单点聊天机器人成为社区主线**。热榜上的 `deer-flow` 和 `reverse-skill` 分别从长周期任务执行与安全渗透技能路由切入，主题搜索中的 `ECC`、`hermes-agent` 等高 star 项目同样围绕“Agent Harness”展开。其次，**记忆/RAG 层正在成为 Agent 标配**：腾讯云 `TencentDB-Agent-Memory` 今日 +227，`claude-mem`、`mem0`、`cognee` 等记忆项目持续活跃，Milvus、Qdrant 等向量数据库依然稳固。**语音与 3D 是今日热榜上的新兴爆发点**：Hugging Face `speech-to-speech` 今日 +442，微软 `TRELLIS.2` 以结构化潜空间推进 3D 生成，本地语音 Agent 和 3D 资产生成可能成为下一阶段热门方向。最后，GitHub 官方 `copilot-sdk` 入榜，也表明 **AI 编程助手生态正在向可嵌入、可编程的开放平台演进**。

## 4. 社区关注热点

- **Agent Harness / 长周期 Agent 底座**：`bytedance/deer-flow`、`affaan-m/ECC`、`NousResearch/hermes-agent` 都在做带记忆、沙箱、工具和子代理的长期运行 Agent 基础设施，是当前最明显的技术主线。
- **Agent 记忆层**：`TencentDB-Agent-Memory` 今日 +227，`thedotmack/claude-mem`（89,262）与 `mem0ai/mem0`（62,278）证明跨会话上下文已成为 Agent 应用的刚需。
- **本地语音 Agent**：`huggingface/speech-to-speech` 今日 +442，`abus-aikorea/voice-pro` 提供 TTS、声音克隆与翻译一体化 WebUI，端侧实时语音交互正在升温。
- **Copilot SDK 开放生态**：`github/copilot-sdk` 今日 +142，GitHub 官方把 Copilot Agent 封装成多平台 SDK，意味着开发者可以在自己的应用中接入 Copilot 能力。
- **3D 生成新范式**：`microsoft/TRELLIS.2` 今日 +107，以结构化潜空间做 3D 生成，可能带动“3D Agent”和原生 3D 资产生成工具链的后续发展。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*