# AI 开源趋势日报 2026-08-09

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-09 00:51 UTC

---

# AI 开源趋势日报（2026-08-09）

**过滤说明**：Trending 榜单共 12 个仓库，其中 **5 个与 AI 直接相关**；非 AI 项目（ChinaTextbook、authentik、guava、ladybird、celld、DevOps-Interview-Guide、fanqiang）已略去。Topic 搜索结果 79 个均与 AI/ML 相关，按最主要维度归类，不重复计数。

## 1. 今日速览

- 今日 Trending 中最突出的信号是 **“Agent Skills” 集中爆发**：google/skills、addyosmani/agent-skills、mattpocock/skills 同日上榜，大厂与个人开发者同时开始把工程经验封装成 AI Agent 的“技能包”。
- [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) 以今日 **+2,483 stars** 登顶 AI 项目增速第一，主打 self-improving RLM agent，面向长时自治编码任务。
- 金融垂直领域多智能体框架 [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) 进入热榜，说明 LLM Agent 正从通用助手走向专业决策场景。
- Topic 榜中，LLM 基础设施（ollama、transformers、langchain）与 RAG/记忆生态（claude-mem、ragflow、mem0）同时保持高热度，Agent 落地对记忆与检索层的依赖持续增强。
- “从零复现大模型”类项目（LLMs-from-scratch、minimind、tiny-llm）依旧活跃，社区对模型原理透明化和低成本训练的兴趣不减。

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 178,081 | 本地大模型运行/推理引擎，已支持 Kimi-K2.6、GLM-5.2、DeepSeek、Qwen 等最新模型。是个人部署和 Agent 后端最常用的基础设施之一。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,478 | 覆盖文本、视觉、音频和多模态的模型定义/训练/推理框架。作为 AI 开源生态核心，模型支持变化会直接影响整个行业。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,282 | 动态神经网络框架，是 LLM 训练与 ML 研究的事实标准之一。今天的稳定热度证明其长期统治力。 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 196,930 | 通用 ML 框架，生态成熟，仍被大量生产环境依赖。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 36,640 | 面向 Agent 与 Generative UI 的前端技术栈，支持 React、Angular、Mobile、Slack 等。推动 AG-UI 协议，是 Agent 前后端解耦的重要工具。 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | Java | 12,817 | 面向 JVM 的 LLM 应用 Java 库，支持主流 LLM Provider、向量库、工具调用/MCP 与 RAG。是企业 Java 技术栈接入 AI 的桥梁。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 8,213 | Rust 生态的模块化 LLM 应用开发框架。代表 Rust + AI 这一新兴技术栈正在积累开发者基础。 |
| [roboflow/supervision](https://github.com/roboflow/supervision) | Python | 49,191 | 可复用的计算机视觉工具库，封装检测、跟踪、标注等常用流程。是 CV 工程化落地的高频基础组件。 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) | TypeScript | 0（+2,483） | 今日热榜 AI 项目增速第一，主打 self-improving RLM agent，面向编程工作流和长期自治任务。首次登榜即出现高增长，是今天最值得关注的新项目。 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | 0（+779） | 面向 AI 编码 Agent 的生产级工程技能集。作者是前端圈知名工程师，体现个人开发者也在快速输出 Agent 技能包。 |
| [google/skills](https://github.com/google/skills) | Python | 0（+481） | Google 官方推出的 Agent Skills 库，覆盖 Google 产品与技术栈。大厂入局意味着 Agent Skills 可能走向标准化。 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | 0（+1,359） | 来自 TypeScript 社区知名教育者的 “真实工程师 skills”，直接来自其 .agents 目录。今日 +1,359 stars，显示技能市场正在爆发。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 227,532 | 主打 “grows with you” 的通用 Agent，是 ai-agent 话题下最头部的项目之一。其高星数量说明通用 Agent 需求仍然强劲。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 186,438 | 开源 Agent 的旗帜性项目，目标是让 AI 对所有人可用、可构建。虽然不在今日 Trending，但生态影响力依然显著。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 143,740 | Agent 工程化平台，提供编排、工具、记忆等完整开发套件。是当前 Agent 应用开发的事实标准之一。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 108,357 | 让 AI Agent 直接操作浏览器完成线上任务。作为连接 Agent 与真实网页的中间层，star 数已超 10 万。 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 0（+153） | 多智能体 LLM 金融交易框架，今日进入 Trending。它将 Agent 落地到量化研究与交易决策这一高价值垂直场景。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 148,263 | 用户友好的自托管 AI 对话/Agent 界面，支持 Ollama、OpenAI API 等。是本地部署场景的入口级产品。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 102,220 | 基于 AI 大模型和自动化工作流一键生成高清短视频。内容创作自动化仍是开源社区最活跃的应用方向之一。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 68,837 | 通过 CLI 让 AI Agent 读取/搜索 Twitter、Reddit、YouTube、GitHub 等平台信息，且零 API 费用。是 “Agent 获取互联网信息” 的轻量方案。 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 63,241 | 开源 AI 求职助手：自动扫描职位、按 A-F 规则评分、定制简历并追踪申请。是 LLM 在招聘场景的典型应用。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 60,767 | LLM 驱动的多市场股票智能分析系统，支持多源行情、实时新闻、决策看板和自动推送。金融 Agent 需求持续旺盛。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 50,098 | AI 生产力工作室，聚合 300+ 助手与主流 LLM，支持智能对话和自主 Agent。是多模型统一入口型产品。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 43,944 | 将文档或主题转为原生 PowerPoint，支持形状、动画、图表和配音。办公文档生成是 LLM 应用的另一大刚需。 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 101,457 | 手把手用 PyTorch 从零实现类似 ChatGPT 的 LLM。10 万+ stars 表明社区对模型原理透明度的强烈需求。 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 54,469 | 从零开始用 2 小时训练 64M 参数 LLM，极大降低 “大模型复现” 的门槛，适合教学与入门。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,286 | 支持 100+ 数据集与 Llama、Qwen、GLM、GPT-4 等多模型评测平台。模型评测是训练与选型闭环中不可缺的一环。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,449 | 面向系统工程师的 LLM 推理 serving 课程，在 Apple Silicon 上构建 tiny vLLM + Qwen。从推理侧理解大模型工程。 |
| [chrisliu298/awesome-llm-unlearning](https://github.com/chrisliu298/awesome-llm-unlearning) |  | 618 | 聚焦 LLM “遗忘/去学习” 的资源仓库。安全、隐私与合规正成为大模型训练和部署的新关注点。 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 90,104 | 为 Agent 提供跨会话持久记忆：捕获会话内容、用 AI 压缩并在未来注入上下文。是 agent memory 方向的高星项目。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 87,086 | 领先的开源 RAG 引擎，将 RAG 与 Agent 能力融合，为 LLM 提供更优质的上下文层。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 62,835 | AI Agent 的通用记忆层，解决多会话长期记忆与个性化问题。与 RAG 互补，是 Agent 基础设施的重要拼图。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,469 | 面向文档 Agent 与 OCR 的主流 RAG 框架，是企业知识库接入 LLM 的常用选择。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,568 | 高性能云原生向量数据库，专为大规模向量 ANN 检索设计，是 RAG 场景的核心存储层。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 33,866 | 高性能向量数据库与向量搜索引擎，提供云服务。Rust 实现在性能与资源占用上有明显优势。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 29,882 | 开源 AI 记忆平台，使用自托管知识图谱引擎为 Agent 提供跨会话长期记忆。 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | Python | 35,078 | 面向 “无向量、基于推理” 的 RAG 文档索引方案。反映 RAG 去向量化与混合检索的新探索。 |

## 3. 趋势信号分析

今日热榜释放出非常明确的信号：**“Agent Skills” 正在成为继 Agent 框架之后的新一层抽象**。google/skills、addyosmani/agent-skills、mattpocock/skills 同时进入 Trending，说明大厂、独立开发者和社区意见领袖都在抢占 “技能包” 这一生态位；这种以“可复用工程经验”为核心的封装，可能大幅降低 AI 编码 Agent 的成本。另一条主线是 **“可自我改进的长期自治 Agent”**：prime-agent 以 +2,483 stars 登顶，意味着社区已经不满足于单轮工具调用，而是追求能持续运行、自我优化的编码智能体。与此同时，TradingAgents 进入热榜，说明多智能体正在向金融等专业场景渗透。结合 ollama 近期快速跟进 Kimi、GLM、DeepSeek 等新模型，本地模型成本下降正在支撑更复杂的 Agent+Skills+Memory 工作流。

## 4. 社区关注热点

- **Agent Skills 生态**：重点关注 [google/skills](https://github.com/google/skills)、[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)、[mattpocock/skills](https://github.com/mattpocock/skills)。它们代表了 Agent 能力从“写死逻辑”向“可插拔技能包”演进的趋势。
- **自改进编码 Agent**：[PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) 今日 +2,483 stars，值得跟踪其 “self-improving + long-running autonomy” 的技术路线。
- **Agent 记忆与上下文层**：[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)、[mem0ai/mem0](https://github.com/mem0ai/mem0)、[topoteretes/cognee](https://github.com/topoteretes/cognee) 正在解决 Agent 跨会话记忆问题，是从 demo 走向生产的关键瓶颈。
- **垂直领域多智能体**：[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) 将 LLM 多智能体用于金融交易，同赛道还有股票分析类项目，垂直 Agent 应用正在加速分化。
- **从零复现大模型**：[jingyaogong/minimind](https://github.com/jingyaogong/minimind) 和 [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) 分别从训练与推理两侧降低学习门槛，适合开发者深入理解底层实现。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*