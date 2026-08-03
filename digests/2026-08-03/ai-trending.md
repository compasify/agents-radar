# AI 开源趋势日报 2026-08-03

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-03 01:46 UTC

---

# AI 开源趋势日报（2026-08-03）

> 数据源：GitHub Trending 实时榜（15 仓库） + AI 主题搜索（79 仓库，7 天活跃，已去重）

## 过滤说明

- **Trending 榜单**：15 个仓库中剔除 4 个非 AI 项目——`usekaneo/kaneo`（项目管理）、`iv-org/invidious`（YouTube 前端）、`codecrafters-io/build-your-own-x`（编程教程）、`HarbourMasters/Lighthouse`（游戏逆向工程）；保留 11 个 AI/ML 相关项目。
- **主题搜索**：79 个仓库均带 AI 相关 topic，按主要属性归入五大维度；个别通用型项目（如 JuliaLang/julia、netdata、oceanbase）因非 AI 专属工具，不列入分类表格。
- **Stars 口径**：Trending 榜单未提供仓库总 star 数，表格中仅标注今日增量（如「今日 +2,629」）；主题搜索条目标注总 star 数。

---

## 一、今日速览

今日 GitHub AI 热榜呈现鲜明的「Agent 生态爆发」特征：11 个 AI 相关 Trending 仓库中，6 个为 Agent/Skill 类项目，另有 1 个 Agent 记忆项目，其中安全技能路由包 `reverse-skill` 单日 +1,141，信息获取 Agent `Agent-Reach` 单日 +659。DeepSeek 4 成为今日最强生态信号——Redis 作者 antirez 发布的 `ds4` 本地推理引擎与终端编码 Agent `DeepSeek-Reasonix` 同时登榜，DS4 的「本地推理 + 编码智能体」工具链正在成形。微软 AI 教育双雄再度霸榜，`AI-For-Beginners` 以 +2,629 领跑全榜。同时，企业级 Agent 记忆项目 `TencentDB-Agent-Memory`（+602）首次登榜，提示「上下文工程/记忆层」正成为新基础设施赛道；低资源推理热度不减，`airllm` 用单张 4GB 显卡跑 70B 模型的方案今日 +819。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [antirez/ds4](https://github.com/antirez/ds4) | C | 今日 +139 | Redis 作者出品的 DeepSeek 4 Flash/PRO 本地推理引擎，支持 Metal、CUDA、ROCm。在 DeepSeek 4 发布节点登榜，是连接「新模型」与「本地部署」的关键桥梁。 |
| [lyogavin/airllm](https://github.com/lyogavin/airllm) | Jupyter Notebook | 今日 +819 | 让 70B 级大模型在单张 4GB 显存显卡上完成推理的轻量方案。今日 +819，低资源推理赛道热度持续走高，极大降低个人开发者本地跑大模型的门槛。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 177,620 | 最流行的本地大模型运行工具，已跟进支持 Kimi-K2.6、GLM-5.2、MiniMax、DeepSeek、Qwen、Gemma 等最新模型。作为 17.7 万 stars 的社区入口，新模型发布总会快速反映在其兼容列表中。 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | Python | 87,980 | 高吞吐、内存高效的 LLM 推理与服务引擎，是生产级 AI 应用的事实标准。8.7 万 stars 的基础设施级项目，支撑大量 Agent/RAG 应用的大规模在线推理。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,263 | Hugging Face 的模型定义框架，覆盖文本、视觉、音频与多模态模型的训练与推理。16.3 万 stars 的 AI 开源生态基石，长期处于活跃榜前列。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 64,085 | 在内容进入 LLM 之前压缩工具输出、日志与 RAG 分块，对 JSON 类输入可减少 60–95% token。6.4 万 stars，是「LLM 降本增效」工具的典型代表。 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | Java | 12,762 | 面向 JVM 生态的 LLM 应用开发库，统一封装主流 LLM Provider 与向量存储，支持 MCP、工具调用与 RAG。12.7k stars，Java/Spring 后端接入 AI 的首选桥梁。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 8,143 | Rust 生态的模块化 LLM 应用开发框架，以高性能、低资源消耗著称。8.1k stars，代表 Rust 在 AI 基础设施层的持续渗透。 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 237,082 | 面向 Claude Code、Codex、Cursor 等编码 Agent 的性能优化系统，集 Skills、记忆、安全与研究优先开发于一体。23.7 万 stars，是当前 Agent 工具链中体量最大的项目之一。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 224,336 | 主打「与你一起成长」的通用 Agent 框架，强调持续学习与自我演进。22.4 万 stars，是开源 Agent 领域最具影响力的老牌项目之一。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 185,775 | 开源 Agent 领域的开创性平台，使命是让 AI 人人可用、人人可构建。18.5 万 stars，任何一次更新都牵动整个 Agent 社区。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 107,622 | 让 AI 智能体像人一样浏览和操作网页的开源库，自动化线上任务。10.7 万 stars，是 Web Agent 赛道的头部项目。 |
| [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | PowerShell | 今日 +1,141 | 面向逆向/渗透/安全研究场景的 AI 技能路由包，支持 Claude Code、Kiro、Cursor、Cline 等客户端。今日 +1,141，是热榜中增速最快的 Agent 类项目，带来自动化安全测试新玩法。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 今日 +659 | 让 AI Agent 通过一个 CLI 免费读取/检索 Twitter、Reddit、YouTube、GitHub、B 站、小红书等全网平台。今日 +659，「免 API 费用 + 全网信息获取」组合广受关注。 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | Go | 今日 +333 | DeepSeek 原生的终端编码 Agent，围绕前缀缓存（prefix-cache）稳定性设计，可常驻运行。今日 +333，标志着 DeepSeek 4 在 Agent 场景的落地开始发酵。 |
| [different-ai/openwork](https://github.com/different-ai/openwork) | TypeScript | 今日 +280 | 基于 opencode 的开源 Claude Cowork 替代品，主打开源协作式 AI 工作台。今日 +280，反映市场对「Agent 协作」类产品的旺盛需求。 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [f/prompts.chat](https://github.com/f/prompts.chat) | HTML | 166,643 | 前身为 Awesome ChatGPT Prompts 的提示词社区，支持自托管部署。16.6 万 stars，是提示词工程领域不可绕过的国民级资源库。 |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 151,108 | 构建 Agentic 工作流与 RAG 流水线的一站式协作平台，支持云端、VPC 或自托管。15.1 万 stars，是企业级 LLM 应用落地的中坚力量。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 147,646 | 用户友好的自托管 AI 交互界面，兼容 Ollama、OpenAI API 等。14.7 万 stars，是本地部署「类 ChatGPT」界面的首选。 |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Python | 129,859 | 收录 100+ 免费开源的 AI Agents、Agent Skills 与 RAG 应用。12.9 万 stars，是开发者寻找 AI 应用灵感的第一站。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 101,199 | 利用 AI 大模型与自动化工作流一键生成高清短视频。10.1 万 stars，内容创作自动化赛道的现象级项目。 |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | Python | 71,300 | 面向分析师、量化研究员与 AI Agent 的开放金融数据平台。7.1 万 stars，是 AI×FinTech 方向的重要数据基础设施。 |
| [microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) | Jupyter Notebook | 今日 +2,629 | 微软官方 12 周 24 课 AI 入门课程，面向所有人群。今日 +2,629 领跑全榜，说明 AI 初学者规模仍在高速扩张。 |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | Jupyter Notebook | 今日 +588 | 微软生成式 AI 入门教程，21 课覆盖从概念到动手构建。今日 +588，与 AI-For-Beginners 同登热榜，微软教育体系双线受追捧。 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 100,395 | 从零一步步用 PyTorch 实现类 ChatGPT LLM 的经典教程。10 万 stars，是开发者理解大模型原理的必读项目。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,431 | 面向系统工程师的 LLM 推理服务课程，教你构建一个微型 vLLM + Qwen 推理栈。4.4k stars，把推理引擎的工程细节拆解到可上手。 |
| [llm-jp/awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) | TypeScript | 1,423 | 日语 LLM 全景图，汇总日本本土大模型与相关资源。1.4k stars，反映多语言大模型社区的活跃度。 |
| [thinkwee/AwesomeOPD](https://github.com/thinkwee/AwesomeOPD) | — | 785 | On-Policy Distillation（在线策略蒸馏）精选论文与资源清单。785 stars，追踪大模型蒸馏技术的前沿进展。 |
| [chrisliu298/awesome-llm-unlearning](https://github.com/chrisliu298/awesome-llm-unlearning) | — | 616 | 大模型机器遗忘（LLM Unlearning）资源汇总，覆盖安全与合规场景。616 stars，是 AI 安全治理方向快速成长的列表。 |
| [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) | Rust | 59 | 纯 Rust + Candle 从零构建的 Decoder-only LLM，涵盖 Gated DeltaNet、稀疏注意力、MoE 与量化训练。59 stars，代表 Rust 原生 LLM 训练的极客探索。 |
| [ai-glimpse/toyllm](https://github.com/ai-glimpse/toyllm) | Python | 25 | 「从零学 LLM」的极简教学实现。25 stars，小而美，适合想彻底弄懂 Transformer 内部机制的开发者。 |
| [R-D-BioTech-Alaska/Qelm](https://github.com/R-D-BioTech-Alaska/Qelm) | Python | 27 | 量子增强语言模型实验项目，探索量子计算与 LLM 的结合。27 stars，属于纯前沿探索型项目。 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 101,120 | 将代码库、文档、SQL Schema、PDF 等转化为可查询的知识图谱，并作为 Claude Code、Cursor 等工具的 skill 使用。10.1 万 stars，代表「无向量库 RAG」的新技术路线。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 89,345 | 为所有 Agent 提供跨会话持久上下文：自动捕获会话、AI 压缩并注入未来会话。8.9 万 stars，支持 Claude Code、OpenClaw、Codex、Gemini 等主流客户端。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 86,637 | 开源 RAG 引擎，将 RAG 与 Agent 能力深度融合，为 LLM 打造高质量上下文层。8.6 万 stars，是企业级 RAG 部署的热门选择。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 62,335 | AI Agent 的通用记忆层，为智能体提供跨会话的长期记忆能力。6.2 万 stars，是 Agent 记忆赛道的代表性开源项目。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,321 | LlamaIndex 是领先的文档 Agent 与 OCR 平台，也是 RAG 应用开发的基础框架。5.1 万 stars，与 LangChain 并列的 LLM 应用基础设施双雄之一。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,470 | 高性能云原生向量数据库，专为可扩展的向量 ANN 检索构建。4.5 万 stars，是 AI 应用向量存储的首选基础设施之一。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 33,728 | 高性能大规模向量数据库与检索引擎，同时提供云服务。3.3 万 stars，是 Rust 系向量库的代表，性能与功能兼备。 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | TypeScript | 今日 +602 | 腾讯云推出的团队级 Agent 记忆中枢，将对话、文档、代码沉淀为 Chat Memory、Skill、LLM-Wiki、Code-Graph 四类记忆资产。今日 +602 首登热榜，标志云厂商正式入场 Agent 记忆基础设施赛道。 |

---

## 三、趋势信号分析

今日最显著信号是 **Agent Skills 编程范式的爆发**：`reverse-skill`（+1,141）、`last30days-skill`（+206）、`k-skill`（+177）等技能包集体登榜，它们均面向 Claude Code、Cursor、Cline 等 AI 编码客户端，将垂直能力封装为可复用「技能」，正在形成类似 App Store 的分发生态。其次，**DeepSeek 4 发布带动工具链快速更新**——`ds4` 提供本地推理、`DeepSeek-Reasonix` 主打编码 Agent，`ollama` 同步接入新模型，「模型 → 推理 → 应用」闭环迅速成形。再者，**Agent 记忆层成为新基建热点**：`TencentDB-Agent-Memory` 今日登榜，与 `claude-mem`、`mem0` 共同推动上下文工程从技巧走向产品化。最后，**RAG 路线出现分化**：Graphify 的无向量库知识图谱、PageIndex 的 vectorless RAG 等新方案，正与传统向量数据库并行演进，值得长期跟踪。

---

## 四、社区关注热点

- **🔥 DeepSeek 4 本地生态**：`antirez/ds4` 提供覆盖 Metal/CUDA/ROCm 的本地推理引擎，`DeepSeek-Reasonix` 则验证了 DS4 在编码 Agent 场景的实用性，建议持续跟踪 DS4 权重发布后的社区衍生项目。
- **🔥 Agent Skills 垂直化 + 本地化**：`reverse-skill` 将安全/渗透技能打包成跨客户端路由包，`k-skill` 针对韩语场景做本地化，Skills 生态开始出现明确分工，值得关注「技能包」是否会成为 Agent 时代的插件标准。
- **🔥 企业级 Agent 记忆赛道开启**：腾讯云 `TencentDB-Agent-Memory` 入局，与 `claude-mem`（8.9 万 stars）、`mem0`（6.2 万 stars）同台竞技，团队级记忆治理可能是下一个企业服务热点。
- **🔥 低资源推理平民化**：`airllm` 单卡 4GB 跑 70B，配合 `ds4` 多后端支持，本地/边缘部署大模型的门槛大幅下降，普通开发者也能玩转前沿模型。
- **🔥 信息获取型 Agent 走红**：`Agent-Reach`（免 API 费读全网）与 `last30days-skill`（多源研究 + 综合摘要）把「调研」变成 Agent 的通用能力，是内容消费与情报分析自动化的新方向。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*