# AI 开源趋势日报 2026-08-10

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-10 00:52 UTC

---

# AI 开源趋势日报 · 2026-08-10

**筛选说明**：已剔除 goauthentik/authentik（身份认证）、pranshuparmar/witr（进程溯源）等与 AI/ML 无明显关联的项目；t3code 因缺少明确 AI 描述暂不纳入。

> 注：Trending 榜单中的总 star 数在源数据中显示为 0，下表保留原值，括号内为今日新增。

## 1. 今日速览

今天最突出的是 **Agent Skills 生态**：addyosmani/agent-skills 与 google/skills 同时登上 Trending，prime-agent 更以单日 +2,356 领跑，说明社区正从“造 Agent”转向“攒技能”。垂直化应用也在加速，股票分析、法律评测、天气预报均有 AI 项目上榜。RAG 方向出现“代码知识图谱”新面孔 code-graph-rag，与 Graphify 形成呼应。基础层方面，Transformers、Ollama、LangChain 等主题搜索保持高活跃，底层框架格局依然稳固。

## 2. 各维度热门项目

### 🔧 AI 基础工具

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,505 | 模型定义、训练与推理的标准框架。7 天主题搜索中仍是最活跃的 LLM 基础设施之一。 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 196,942 | 经典开源机器学习框架，生态完善。在 ML 主题搜索中持续活跃，仍被大量 AI 项目依赖。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,301 | 动态神经网络框架，科研与生产环境的主流选择。作为 AI 项目底座，热度稳定。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 143,812 | Agent 工程平台，提供 RAG、工具调用与工作流开发能力。在 RAG/Agent 话题下曝光度极高。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 178,140 | 本地大模型运行工具，支持 Kimi、GLM、DeepSeek、Qwen 等。是开源本地推理的事实标准之一。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 65,653 | 在到达 LLM 前压缩工具输出、日志与 RAG 分块，可为 coding agent 节省 20% 以上 token。长上下文成本优化方向值得关注。 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | 0（+680） | 生产级 AI 编码智能体技能库，面向 Claude Code、Cursor 等 Agent。今日 Trending 上榜，反映可复用 Agent Skills 需求暴涨。 |
| [google/skills](https://github.com/google/skills) | Python | 0（+528） | Google 官方推出的 Agent Skills 集合，覆盖 Google 产品与工具链。官方入局意味着 Agent Skills 正从社区实践走向标准。 |

### 🤖 AI 智能体/工作流

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 239,027 | Agent harness 性能优化系统，提供 skills、instincts、memory、security 等模块。在 LLM 主题中总星数最高，是 Agent 工程化的“全家桶”。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 227,935 | 可随使用成长的个人 Agent。定位“agent that grows with you”，在 ai-agent/LLM 话题中保持高热度。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 186,462 | 老牌自主 Agent 项目，使命是让 AI 人人可用。仍是 Agent 方向的重要参照。 |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 151,870 | Agentic workflow 与 RAG 流水线开发平台，支持云部署与自托管。是 RAG/Agent 生态中从原型到生产的核心工具。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 108,484 | 让 AI Agent 直接操作浏览器的自动化工具。随着 Agent 执行任务范围扩大，Web 操作层价值持续上升。 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | Python | 39,314 | 面向生产级 Agent 的状态化编排框架，强调 resilient agents。与 LangChain 配合，是复杂工作流常见选择。 |
| [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) | TypeScript | 0（+2,356） | 自我改进的 RLM 编码 Agent，面向长时自主任务。今日 Trending 第一，说明“自我进化 + 长跑型 Agent”正成为新卖点。 |
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | Shell | 0（+858） | 一组不同专长和人格的“AI 公司员工”Agent 集合。今日登榜体现社区对多智能体“角色化”的兴趣。 |

### 📦 AI 应用

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 148,328 | 支持 Ollama、OpenAI API 的友好 AI 对话界面。是本地部署 AI 应用的热门入口。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 102,336 | 输入主题或关键词自动生成短视频的 AI 工作流。内容创作自动化方向的热门开源方案。 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 64,528 | 本地优先的 AI 助手与 Agent 桌面应用，强调“Own your intelligence”。适合个人与企业把数据和模型留在本地。 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 63,314 | 开源 AI 求职工具：扫描职位、A-F 评分、定制简历并在本地 AI CLI 中运行。垂直场景 Agent 的高星示例。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 61,190（+306） | LLM 驱动的多市场股票智能分析系统，支持多源行情、实时新闻、决策看板与自动推送。今日 Trending 表明金融垂直 Agent 受到关注。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 50,181 | 智能聊天 + 自主 Agent 的 AI 生产力工作室，可接入 300+ 助手。面向多模型统一接入与日常 AI 办公。 |
| [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | Python | 0（+365） | Diffusion 模型图形化工作流 GUI/API/后端。以节点式界面成为图像生成生态的中心工具之一。 |
| [google-deepmind/weathernext](https://github.com/google-deepmind/weathernext) | Python | 0（+86） | DeepMind 的 AI 天气预报模型仓库。今日首次登榜，科学计算/天气大模型开源开始获得关注。 |

### 🧠 大模型/训练

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 102,049 | 从零用 PyTorch 实现 ChatGPT 级 LLM 的教程仓库。社区“手搓大模型”的经典资源。 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 54,498 | 2 小时训练 64M 小参数 LLM 的开源项目。大幅降低大模型训练门槛，适合入门与教学。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,287 | 大模型评测平台，支持 Llama、Qwen、GLM、GPT-4 等 100+ 数据集。是模型能力度量的基础设施。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,456 | 面向系统工程师的 Apple Silicon LLM 推理教学项目，构建微型 vLLM + Qwen。适合从底层理解推理栈。 |
| [llm-jp/awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) | TypeScript | 1,424 | 日语 LLM 资源汇总。非英语模型生态的重要观测窗口。 |
| [chrisliu298/awesome-llm-unlearning](https://github.com/chrisliu298/awesome-llm-unlearning) |  | 618 | 大模型“机器遗忘”方向资源仓库。随隐私合规与模型更新需求增加，该方向正在积累关注度。 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | Python | 316 | 基于 X-Bit 量化的端侧 LLM 推理库。面向移动和嵌入式设备上的本地 LLM 部署。 |

### 🔍 RAG/知识库

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 104,619 | 将代码库、文档、SQL、PDF 转化为可查询知识图谱，支持 Claude Code、Cursor、Codex、Gemini CLI。Graph RAG 代码理解方向的高星项目。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 90,215 | 把 Agent 会话压缩并注入未来会话，实现跨 session 持久记忆。Agent memory 类项目代表。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 87,126 | 开源 RAG 引擎，融合 Agent 能力构建 LLM context layer。企业级 RAG 热门选择。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 62,880 | 通用 AI Agent 记忆层，可持续存储和检索用户与任务上下文。在 memory/RAG 交叉领域存在感很强。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,509 | 文档 Agent 与 OCR 平台，也是经典 RAG 框架。负责连接文档、数据库与 LLM。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,573 | 高性能云原生向量数据库，支持大规模向量 ANN 搜索。RAG 基础设施层标配之一。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 33,889 | 高可扩展向量数据库与向量搜索引擎。Rust 实现，性能和部署灵活性好。 |
| [vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag) | Python | 0（+96） | “Monorepo 终极 RAG”：用知识图谱查询、理解、编辑多语言代码库。今日 Trending 上榜，反映代码级 RAG 需求。 |

## 3. 趋势信号分析

今日最强信号是 **AI Agent 工程加速走向“组件化/生态化”**。“Agent Skills”连续出现两个高增长仓库，且 Google 官方 repo 入局，意味着 skill 打包、分发与复用可能成为 Agent 开发的新事实标准；prime-agent 的“自我改进 + 长时运行”也指向下一代 Coding Agent 的关键能力。其次，RAG 正从向量检索向知识图谱演进，code-graph-rag 与 Graphify 都以代码仓库为对象，试图解决多语言、长上下文场景下的结构化理解。第三，AI 应用在金融、法律、科学计算等垂直领域陆续上榜，社区关注度正从通用 Agent 转向场景深度。底层框架如 LangChain、Ollama、Transformers 依然活跃，短期内基础格局不会改变。

## 4. 社区关注热点

- **Agent Skills 打包与复用**：[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) 与 [google/skills](https://github.com/google/skills) 同日上榜，前者主打生产级工程技能，后者是 Google 官方集合。这可能是 Agent 生态下一轮平台化机会。
- **自我改进型 Coding Agent**：[PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) 单日 +2,356，强调 self-improving 和 long-running autonomous tasks，标志 AI 编程正在从“辅助”走向“自主执行”。
- **代码知识图谱 RAG**：[vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag) 今日 +96，同方向的 [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) 已积累 104k stars。代码库查询与理解正成为 RAG 刚需场景。
- **垂直行业 Agent**：[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) 今日 +306，[harveyai/harvey-labs](https://github.com/harveyai/harvey-labs) 以法律 Agent benchmark 上榜。金融与法律等高价值场景正在成为开源 Agent 的新试验场。
- **科学计算 AI 开源**：[google-deepmind/weathernext](https://github.com/google-deepmind/weathernext) 今日 +86。AI 天气预报模型进入开源视野，可关注 AI for Science 的代码与权重分发趋势。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*