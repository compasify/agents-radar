# AI 开源趋势日报 2026-08-01

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-01 01:47 UTC

---

# AI 开源趋势日报（2026-08-01）

## 今日速览

今日 AI 开源生态呈现明显的 **Agent 技能化** 特征：多个 AI agent skill 类仓库（last30days-skill、reverse-skill）和开源协作 Agent 产品（openwork）冲上 Trending，单日新增数百 star。微软 **AI-For-Beginners** 以 +1,592 的今日增长领跑，说明新一波 AI 学习热潮正在形成。在基础设施侧，上下文/内存优化（headroom、claude-mem）与无向量库 RAG 知识图谱方案（Graphify）持续获得关注。GitHub 官方 **Copilot SDK** 也出现在榜单中，显示 AI 工程化正在向平台级 SDK 方向演进。

---

## 各维度热门项目

> 说明：Trending 榜单条目总 star 数未完整获取，以 **今日新增** 作为热度指标。

### 🔧 AI 基础工具

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 177,458 | 本地运行 LLM 的推理引擎，支持 Kimi-K2.6、GLM-5.2 等最新模型。是个人部署大模型的核心基础设施。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 143,120 | Agent 工程平台，被大量 RAG 和 Agent 项目依赖。框架层面的稳定生态位让它在今日依然保持强存在感。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 158,737 | 面向 AI 的网页搜索/抓取 API，为 RAG 和 Agent 提供高质量数据。数据获取是 AI 应用落地的关键环节。 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | TypeScript | 55,075 | 可视化构建 AI Agent 工作流的低代码工具。降低了 Agent 应用开发门槛，社区讨论持续活跃。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 36,385 | Agent 前端栈，支持 React、Angular 等，用于构建生成式 UI。也是 AG-UI 协议的推动者之一。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 63,577 | 压缩工具输出和 RAG 块，为 coding agent 最多减少 95% token。Token 优化正在成为 Agent 工程的刚需。 |
| [microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) | Jupyter Notebook | 今日 +1,592 | 微软的 12 周 AI 入门课程，今日 trending 上涨明显。说明 AI 学习资源仍然被大量开发者需求。 |
| [github/copilot-sdk](https://github.com/github/copilot-sdk) | Java | 今日 +7 | GitHub 官方 Copilot Agent 多平台 SDK，用于将 Copilot 集成到各类应用与服务中。官方 SDK 的生态信号值得关注。 |

### 🤖 AI 智能体/工作流

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 236,647 | Agent harness 性能优化系统，支持技能、本能、记忆、安全与研发优先开发。是目前最高 star 的 Agent 基础设施之一。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 223,431 | 强调“与用户一起成长”的自演进 Agent 框架。高 star 表明社区对自适应、长期记忆 Agent 有强烈兴趣。 |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 150,938 | Agentic workflow + RAG 一体化工作台，可云部署或自托管。是从原型到生产的主要开源 LLM 应用平台之一。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 107,429 | 让 AI Agent 自动操作浏览器的库，解决真实网页交互问题。是 Agent 落地高频场景的基础工具。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 89,188 | 为多个 Agent 提供跨会话持久记忆，自动捕获并压缩上下文。恰好命中“记忆缺失”这一核心痛点。 |
| [different-ai/openwork](https://github.com/different-ai/openwork) | TypeScript | 今日 +806 | Claude Cowork 的开源替代方案，底层由 opencode 驱动。今日 trending 激增，反映协作型 Agent 产品需求高涨。 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | 今日 +658 | AI Agent 技能：调研 Reddit、X、YouTube、HN、Polymarket 等平台并生成带依据的总结。内容聚合类技能正在爆发。 |
| [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | PowerShell | 今日 +335 | 面向逆向/渗透/安全的 AI 技能路由包，支持自动化工具链自举。安全垂直场景的 Agent skill 是一个新兴方向。 |

### 📦 AI 应用

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 147,484 | 用户友好的 AI 交互界面，支持 Ollama、OpenAI API 等。本地化 AI 应用的首选前端之一。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 100,817 | 根据主题或关键词一键生成高清短视频的 AI 自动化工作流。内容创作 AIGC 的代表项目。 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 64,170 | 本地优先的 Agent 与 RAG 应用，支持多文档与个人知识库。强调“不租用智能，拥有智能”。 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 62,405 | 开源 AI 求职助手：自动扫描职位、A-F 评分、定制简历。垂直场景 AI 应用的新热点。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 59,703 | LLM 驱动的多市场股票分析系统，支持实时新闻、决策看板与自动推送。量化 + LLM 的应用代表。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 49,214 | AI 生产力工作室，集成 300+ 助手，统一访问前沿 LLM。桌面级 AI 应用体验的重要案例。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 42,206 | AI 将文档或主题生成原生 PowerPoint，支持动画、图表、音频旁白与自定义模板。办公 AIGC 场景的亮点。 |
| [deepfakes/faceswap](https://github.com/deepfakes/faceswap) | Python | 今日 +93 | 老牌 Deepfake 换脸软件，基于深度学习。今日重新登上 trending，或与 AI 生成内容伦理讨论相关。 |

### 🧠 大模型/训练

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,212 | 最主流的模型定义/训练/推理框架，支持文本、视觉、音频与多模态。社区事实标准。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,093 | 动态图深度学习框架，提供强 GPU 加速。几乎所有现代 LLM 的训练基座。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 100,241 | 从零实现 ChatGPT-like LLM 的逐步教程。高 star 说明深入理解 LLM 原理的需求依然旺盛。 |
| [microsoft/ML-For-Beginners](https://github.com/microsoft/ML-For-Beginners) | Jupyter Notebook | 88,813 | 微软经典机器学习入门课程，12 周 26 课。与 AI-For-Beginners 形成系统化入门组合。 |
| [keras-team/keras](https://github.com/keras-team/keras) | Python | 64,191 | 高层次深度学习 API，适合快速原型实验。在工程和研究场景中被广泛使用。 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | 60,091 | YOLO 系列目标检测/分割/跟踪工具，是 CV 领域最热门的模型库之一。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,252 | 支持 100+ 数据集的大模型评测平台。模型评估是当前 LLM 工程化的关键基础设施。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,427 | 面向系统工程师的 LLM 推理课程：在 Apple Silicon 上构建 tiny vLLM 与 Qwen。小而硬核的造轮子教材。 |

### 🔍 RAG/知识库

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 99,761 | 将代码库、文档等转换为可查询知识图谱，无需向量库。定位为 Claude Code/Cursor 的 /graphify 技能，思路新颖。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 86,528 | 领先的开源 RAG 引擎，融合 Agent 能力，为 LLM 提供上下文层。RAG 领域头部项目。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 62,223 | Agent 的通用记忆层，跨会话保存与检索信息。记忆型 RAG 的代表，与上下文工程结合紧密。 |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | Rust | 58,810 | 快速搜索引擎 API，支持 AI 混合检索。可轻松嵌入 RAG 流程，性能表现突出。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,264 | 文档 Agent 与 OCR 平台，是构建 RAG 的核心框架之一。生态成熟，功能覆盖全面。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,440 | 云原生向量数据库，面向大规模向量 ANN 搜索。RAG 架构中的常见基础设施选型。 |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | TypeScript | 45,546 | 隐私优先、自托管的个人知识管理软件。与 AI 结合后成为本地知识库和 RAG 的重要载体。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 33,698 | 高性能向量数据库与搜索引引擎，专为 AI 应用设计。Rust 生态中备受关注。 |

---

## 趋势信号分析

今日热榜呈现出三个明确信号：

1. **Agent“技能化”与小型 harness 爆发**：last30days-skill、reverse-skill 这类单文件/轻量级 skill 在数小时内收获数百 star，说明社区正在把 AI 能力封装为可复用、可组合的“技能包”，并围绕 Claude Code、Cursor、Codex 等 CLI 客户端形成生态。
2. **协作型开源 Agent 产品出现竞品**：`openwork` 以 Claude Cowork 的开源替代身份出现，并获得 +806 的今日增长，表明闭源 Agent 产品正在被快速复刻与超越，协作式 AI 代理或成下一阶段热点。
3. **RAG 架构出现“去向量库”范式**：`Graphify` 提出无向量库、基于知识图谱的确定性 RAG 方案，已积累近 10 万 star。这可能预示 RAG 正从“向量相似检索”走向“结构化上下文推理”，值得持续观察。

结合 Ollama 中出现的 Kimi-K2.6、GLM-5.2 等新模型，以及 GitHub Copilot SDK 的发布，可以判断：**开源社区正处在模型快速迭代与 Agent 工程深化互相促进的窗口期**。

---

## 社区关注热点

- **Agent skill 生态（reverse-skill / last30days-skill）**：单日数百 star 级的轻量技能仓库，说明“技能包”正成为 Agent 能力分发的新形态，值得开发者提前布局。
- **openwork**：Claude Cowork 的开源替代，底层基于 opencode，针对协作式 AI Agent 场景。今日 trending 第 2 名，产品定位清晰。
- **Graphify**：无向量库的知识图谱 RAG 方案，99k+ star，可能改写 RAG 的技术选型逻辑。适合关注知识密集型应用架构的团队深入研究。
- **GitHub Copilot SDK**：官方多平台 SDK，虽然今日 star 增量不高，但它意味着 Copilot Agent 开始向第三方应用开放集成，生态信号强烈。
- **上下文/记忆优化（claude-mem、headroom）**：Agent 的 token 压缩与跨会话记忆是当前工程痛点，这两个项目分别从记忆层和输入压缩层切入，增长空间大。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*