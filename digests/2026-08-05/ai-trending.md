# AI 开源趋势日报 2026-08-05

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-05 01:26 UTC

---

# AI 开源趋势日报 · 2026-08-05

> 已剔除与 AI/ML 无关的 cypress、webpack、spdlog、deno、kaneo、angular、tailwindcss 等项目。  
> 注：Trending 原始数据中未给出的 Stars 总量以 `0` 占位，括号内为今日新增；主题搜索数据无今日新增。

## 今日速览

- 今日 Trending 共 18 个仓库，其中 11 个与 AI 直接相关，AI 原生工程已明显占据开源热榜主流。
- Agent 的“记忆层”与“技能层”成为今日最热主题：TencentDB-Agent-Memory 今日 +1,111，obra/superpowers +653，叠加 claude-mem、mem0 的高星表现，说明社区正从“模型能力”转向“Agent 长期记忆与可复用技能”。
- 安全/逆向与 Agent 数据接入开始细分爆发：reverse-skill 单日 +2,297，pdf-inspector +2,540，AI Agent 正在向安全攻防、PDF 智能路由等垂直场景渗透。
- 轻量/本地推理依然是硬需求：airllm 用单张 4GB GPU 跑 70B 模型，今日 +1,711；DeepSeek-Reasonix 以常驻终端编码 Agent 身份 +922。
- 实时语音 Agent（livekit/agents）与企业级 Agent 安全（uber/ADR）进入榜单，预示下一波差异化方向。

## 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 177,794 | 本地/自托管 LLM 运行时，支持 Kimi、GLM、DeepSeek、Qwen 等最新模型。仍是个人与企业本地模型部署的首选入口。 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | Python | 88,191 | 高吞吐、内存友好的 LLM 推理与 Serving 引擎。开源大模型生产部署的事实标准之一。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 161,058 | 面向 AI Agent 的网页搜索/抓取上下文 API。今日旗下 `pdf-inspector` 登榜，说明 Agent 数据接入层正持续组件化。 |
| [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) | Rust | 0（+2,540） | Rust 编写的 PDF 检查/分类/文本抽取库。单日 +2,540 stars，解决 Agent 读取企业 PDF 时扫描版/文本版路由问题。 |
| [lyogavin/airllm](https://github.com/lyogavin/airllm) | Jupyter Notebook | 0（+1,711） | 70B 模型在单张 4GB GPU 上完成推理。今日 +1,711，说明低资源跑大模型仍是社区高频需求。 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | Java | 12,788 | Java 生态的 LLM 应用框架。集成主流模型、向量库、RAG 与工具调用，适合 JVM 技术栈。 |
| [livekit/agents](https://github.com/livekit/agents) | Python | 0（+432） | 实时语音 AI Agent 开发框架。今日 +432，显示多模态/语音交互 Agent 热度上升。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 8,170 | Rust 生态的模块化 LLM 应用开发框架。适合对性能与类型安全有要求的 Agent 工程。 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 237,710 | Agent harness 性能优化系统，覆盖技能、记忆、安全与研发优先开发。是主题搜索中体量最大的 Agent 基础设施之一。 |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 151,346 | 可视化构建 Agentic 工作流与 RAG 管道。151k Stars，是企业从原型到生产的最常用平台之一。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 143,428 | Agent 工程平台，提供工具调用、记忆、编排等能力。143k Stars，仍是 RAG/Agent 生态最核心框架。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 185,817 | 面向所有人的自主 AI Agent 平台。185k Stars，见证了自主 Agent 从实验到工具化的发展。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 107,882 | 让 AI Agent 直接操作浏览器、完成线上任务。107k Stars，与今日 `video-use` 同属“Agent 做真实工作”路线。 |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0（+653） | Agentic 技能框架与软件开发方法论。今日 +653，为编码 Agent 提供可复用的技能组织方式。 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | Go | 30,794（+922） | DeepSeek 原生的终端编码 Agent。围绕 prefix-cache 稳定性设计，可长期常驻运行。今日 +922。 |
| [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | PowerShell | 0（+2,297） | 面向逆向/渗透/安全的 AI 技能路由包，支持 Claude Code、Cursor、Cline 等客户端。今日 +2,297，安全攻防与 Agent 技能结合的新热点。 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 147,859 | 开源 AI 交互界面，支持 Ollama、OpenAI API 等。147k Stars，本地模型用户首选 Web UI。 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 64,339 | 本地优先的一体化 AI Agent 工作台。支持文档问答、模型管理、知识库，强调数据自主。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 49,410 | 智能聊天、自主 Agent、300+ 助手的 AI 生产力工作室。聚合前沿大模型入口。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 101,617 | 利用大模型与自动化工作流一键生成高清短视频。101k Stars，内容创作类 AI 应用头部项目。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 43,014 | AI 把文档/主题变成原生 PowerPoint，支持动画、图表、旁白。办公场景典型落地。 |
| [browser-use/video-use](https://github.com/browser-use/video-use) | Python | 0（+320） | 让编码 Agent 直接编辑视频。今日 +320，展示 Agent 从网页自动化走向多模态内容生产。 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | Jupyter Notebook | 0（+783） | 微软 21 节生成式 AI 入门课程。今日 +783，开发者学习生成式 AI 的需求依然旺盛。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 60,066 | LLM 驱动的多市场股票分析系统，含实时新闻、决策看板、自动推送。金融垂直场景 Agent 案例。 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 196,804 | 通用机器学习框架。196k Stars，企业级训练与部署的重要底座。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,182 | 动态神经网络训练框架。102k Stars，AI 研究与训练事实标准。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,338 | 模型定义、推理与微调框架。支持文本、视觉、音频、多模态 SOTA 模型。 |
| [keras-team/keras](https://github.com/keras-team/keras) | Python | 64,219 | 以易用性见长的深度学习 API。适合快速原型与教学场景。 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | 60,210 | YOLO26/YOLO11/YOLOv8 等 CV 训练/推理框架。目标检测、分割、跟踪任务首选。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,273 | 大模型评测平台，支持 100+ 数据集与主流模型。模型评测正成为发布标配。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,441 | LLM 推理 Serving 教学项目。从零构建微型 vLLM + Qwen，适合系统工程师学习。 |
| [AIDASLab/Awesome-Diffusion-LLM](https://github.com/AIDASLab/Awesome-Diffusion-LLM) | — | 94 | 大语言扩散模型论文清单。关注扩散模型与 LLM 结合的前沿方向。 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 102,525 | 把代码库、文档、SQL schema 等转换为可查询知识图谱。无向量库、确定性 AST 解析是差异化亮点。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 89,572 | 跨会话持久上下文/记忆工具。自动压缩并注入相关上下文，解决 Agent 的长时记忆问题。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 86,823 | 开源 RAG 引擎，融合 Agent 能力为 LLM 提供上下文层。RAG 生产落地的热门选择。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 62,527 | AI Agent 的通用记忆层。多平台、可自托管，面向跨会话长期记忆。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,510 | 云原生向量数据库。45k Stars，高并发向量 ANN 检索基础设施。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 33,780 | 高性能向量数据库/搜索引擎。33k Stars，AI 应用首选向量存储之一。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 29,779 | 自托管知识图谱 AI 记忆平台。给 Agent 提供跨会话长期记忆。 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | TypeScript | 0（+1,111） | 团队级 Agent 记忆中枢。把会话、文档、代码沉淀为可治理、可共享的记忆资产。今日 +1,111。 |

## 趋势信号分析

今日 Trending 中 18 个仓库有 11 个与 AI 直接相关，明显占据主流。爆发性关注集中在 AI Agent 的“记忆层”与“技能层”：TencentDB-Agent-Memory 单日 +1,111，obra/superpowers +653，叠加 claude-mem、mem0 的高星表现，说明跨会话记忆正成为 Agent 走向生产的关键基础设施。安全/逆向是今日新增热点：reverse-skill +2,297，pdf-inspector +2,540，配合 uber/ADR，Agent 的安全防护与数据接入工具化开始成势。终端/本地推理同样突出：airllm +1,711、DeepSeek-Reasonix +922，后者围绕 prefix-cache 稳定性做常驻终端 Agent，呼应大模型在开发者工作流中的轻量化落地。整体上，社区关注点正从“跑大模型”转向“让 Agent 更持久、更会用工具、更安全可信”。

## 社区关注热点

- **Agent 记忆层**：关注 [TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)、[claude-mem](https://github.com/thedotmack/claude-mem)、[mem0](https://github.com/mem0ai/mem0)。跨会话记忆是长任务 Agent 落地的核心瓶颈。
- **Agent 技能/Skill 生态**：关注 [obra/superpowers](https://github.com/obra/superpowers)、[EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin)、[reverse-skill](https://github.com/zhaoxuya520/reverse-skill)。技能包正成为编码 Agent 的能力分发单元。
- **RAG + 知识图谱**：关注 [Graphify](https://github.com/Graphify-Labs/graphify)、[RAGFlow](https://github.com/infiniflow/ragflow)、[Milvus](https://github.com/milvus-io/milvus)。RAG 正从向量检索走向结构化知识语义层。
- **Agent 安全与治理**：关注 [uber/ADR](https://github.com/uber/ADR)。企业级 Agent 需要可观测性、安全基准与威胁检测，这是 Agent 进入生产环境的必要条件。
- **低成本/本地推理与 Token 优化**：关注 [airllm](https://github.com/lyogavin/airllm)、[picollm](https://github.com/Picovoice/picollm)、[caveman](https://github.com/JuliusBrussee/caveman)。低资源部署与 Token 成本压缩已成为 Agent 规模化使用的显性需求。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*