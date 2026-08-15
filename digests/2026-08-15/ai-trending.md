# AI 开源趋势日报 2026-08-15

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-14 23:11 UTC

---

# AI 开源趋势日报（2026-08-15）

> 过滤说明：已从 Trending 中剔除 holehe、SpiderFoot、RustDesk、OpenCut、github/spec-kit 等非 AI/ML 项目；主题搜索中的 netdata、Julia、Airflow、Front-End-Checklist 等通用项目也未纳入统计表格。

## 一、今日速览

- 过滤后，今日 AI 热榜呈现两条主线：**AI Agent 工作台/工作流** 与 **端侧/本地 AI**。
- `diagram-design` 以 **+3,651** 登顶 Trending，`holaOS`、`macro`、`ego-lite` 等 Agent 整合型项目集中上榜，社区正从“单个 Agent”走向“All-in-One Agent 工作空间”。
- `needle` 以 14MB 端侧基础模型获得 **+661**，`modly` 用本地 GPU 生成 3D 模型获得 **+580**，端侧与本地 AI 热度显著。
- RAG 与知识图谱/长期记忆的融合信号明显：`semantica` **+1,183**、`RAGFlow` **+474** 同时出现在热榜。

## 二、各维度热门项目

### 🔧 AI 基础工具

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [semantica](https://github.com/semantica-agi/semantica) | Python | 0（+1,183） | 图原生 Context 基础设施，定位“可审计 AI 系统”的数据层。今日新增高企，说明 AI 上下文管理开始走向基础设施化。 |
| [cursor/plugins](https://github.com/cursor/plugins) | TypeScript | 0（+69） | Cursor 官方插件规范与插件库。AI 编辑器生态正在通过插件标准化形成新扩展市场。 |
| [ollama](https://github.com/ollama/ollama) | Go | 178,545 | 本地 LLM 运行的事实标准，支持 Kimi、GLM、DeepSeek、Qwen 等模型。社区关注度持续稳定。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 164,106 | 最主流的模型定义与训练/推理框架，覆盖文本、视觉、音频与多模态。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,375 | 动态神经网络框架，AI 研究与生产训练的核心底座。 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 197,024 | 经典机器学习框架，仍保持庞大的社区与生产部署生态。 |
| [headroom](https://github.com/headroomlabs-ai/headroom) | Python | 66,368 | 在进入 LLM 前压缩工具输出、日志和 RAG chunk，可降低 20%–95% token。面向 Coding Agent 的效率层工具。 |
| [opencompass](https://github.com/open-compass/opencompass) | Python | 7,301 | 大模型评测平台，支持 100+ 数据集与主流模型，是模型选型与能力评估的重要参考。 |

### 🤖 AI 智能体/工作流

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [diagram-design](https://github.com/cathrynlavery/diagram-design) | HTML | 0（+3,651） | 为 Claude Code 准备的 29 种编辑级图表类型，直接输出 HTML+SVG。今日 Trending 最高增速项目，是“Agent 原生内容模板”的代表。 |
| [holaOS](https://github.com/holaboss-ai/holaOS) | TypeScript | 0（+769） | 开源 All-in-One AI Agent 工作台，支持 Claude Code、Codex 等任意 Agent，并内置 100+ 集成与 MCP。 |
| [awesome-deepseek-agent](https://github.com/deepseek-ai/awesome-deepseek-agent) | — | 0（+203） | DeepSeek 官方 Agent 生态资源合集。DeepSeek 正在加速构建 Agent 方向的开发者基础设施。 |
| [ECC](https://github.com/affaan-m/ECC) | JavaScript | 240,165 | Agent Harness 性能优化系统，覆盖 Skills、记忆、安全与安全研究，兼容 Claude Code、Cursor、Codex 等。 |
| [hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 230,638 | 强调“随你成长”的 Agent 框架，具有极高社区关注度，适合个人化与长期演进的 Agent 场景。 |
| [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 186,625 | 老牌通用 AI Agent 项目，目标是把 AI 能力开放给所有人。 |
| [dify](https://github.com/langgenius/dify) | TypeScript | 152,459 | 开源 Agentic 工作流与 RAG 流水线平台，支持云端、VPC 或自托管部署。 |
| [langchain](https://github.com/langchain-ai/langchain) | Python | 144,262 | Agent Engineering 平台，是构建 LLM 应用、工具调用与 RAG 的主流框架之一。 |

### 📦 AI 应用

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [modly](https://github.com/lightningpixel/modly) | TypeScript | 0（+580） | 使用本地 AI 从图片或提示词生成 3D 模型的桌面应用，完全运行在 GPU 上。代表本地生成类 AI 正在扩散到 3D 内容领域。 |
| [macro](https://github.com/macro-inc/macro) | Rust | 0（+435） | 面向团队的统一工作空间，把邮件、聊天、文档、任务与 Agent 通过共享 AI 记忆连接起来。 |
| [ToolJet](https://github.com/ToolJet/ToolJet) | JavaScript | 0（+302） | 开源版 ToolJet AI 的基础，可低代码构建内部工具、工作流和 AI Agent。 |
| [ego-lite](https://github.com/citrolabs/ego-lite) | JavaScript | 0（+153） | 为 AI Agent 设计的浏览器，可共享登录态并执行浏览器自动化，零配置零成本。 |
| [open-webui](https://github.com/open-webui/open-webui) | Python | 148,802 | 用户友好的 AI 前端界面，支持 Ollama、OpenAI API 等，是本地 LLM 交互入口。 |
| [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 103,559 | 输入主题即可一键生成高清短视频的自动化 AI 工作流，覆盖脚本、素材与合成。 |
| [cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 50,478 | AI 生产力工作室，支持智能聊天、自主 Agent 和 300+ 助手。 |
| [ppt-master](https://github.com/hugohe3/ppt-master) | Python | 46,833 | AI 将文档或主题转换为原生 PowerPoint，支持动画、数据图表和音频旁白。 |

### 🧠 大模型/训练

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [needle](https://github.com/cactus-compute/needle) | Python | 0（+661） | 只有 14MB 的基础模型，面向手机、可穿戴设备、智能家居和机器人。是“超小模型”方向的高热度项目。 |
| [unsloth](https://github.com/unslothai/unsloth) | Python | 0（+502） | 本地运行和训练 LLM/扩散模型的 UI，已支持 Qwen3.8、Kimi K3、MiniMax-H3、Gemma 4、DeepSeek-V4、FLUX 等新模型。 |
| [LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 102,666 | 从零开始用 PyTorch 实现类 ChatGPT LLM 的教程，是学习模型训练与架构的经典资源。 |
| [tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,487 | 面向系统工程师的 LLM 推理系统学习项目，在 Apple Silicon 上构建微型 vLLM + Qwen。 |

### 🔍 RAG/知识库

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [ragflow](https://github.com/infiniflow/ragflow) | Go | 88,387（+474） | 领先开源 RAG 引擎，将 RAG 与 Agent 能力融合，为 LLM 提供上下文层。今日 Trending 再获 474 stars。 |
| [graphify](https://github.com/Graphify-Labs/graphify) | Python | 106,367 | 把代码库、文档、SQL 和 PDF 转为可查询知识图谱，不需要向量库，已支持 Claude Code、Cursor 等 Agent 工具。 |
| [claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 90,764 | 为 Claude Code、Codex、Gemini 等 Agent 提供跨会话持久上下文记忆，是 Agent Memory 基础设施。 |
| [mem0](https://github.com/mem0ai/mem0) | Python | 63,270 | AI Agent 的通用记忆层，解决多会话长期记忆问题。 |
| [llama_index](https://github.com/run-llama/llama_index) | Python | 51,641 | 领先的文档 Agent 与 OCR/RAG 数据平台，是构建知识索引的常用框架。 |
| [milvus](https://github.com/milvus-io/milvus) | Go | 45,637 | 云原生向量数据库，专为大规模向量 ANN 检索设计。 |
| [qdrant](https://github.com/qdrant/qdrant) | Rust | 33,977 | 高性能向量数据库与向量检索引擎，是 AI 应用常用的检索基础设施。 |
| [cognee](https://github.com/topoteretes/cognee) | Python | 30,024 | 开源 AI 记忆平台，用自托管知识图谱引擎为 Agent 提供跨会话长期记忆。 |

## 三、趋势信号分析

从今日热榜看，**AI Agent 生态是绝对主线**：`diagram-design` 以 +3,651 登顶，`holaOS`、`macro`、`ego-lite` 等 Agent 工作台/浏览器集中上榜，说明社区正从“单个 Agent”走向“All-in-One”整合。**端侧与本地 AI 也形成明显热点**：`needle` 以 14MB 模型切入物联网设备，`modly` 以本地 GPU 生成 3D 模型，`unsloth` 支持 Qwen3.8、Kimi K3、DeepSeek-V4 等新模型，表明“拿回数据控制权”成为重要动力。RAG 层面，`semantica` +1,183、`RAGFlow` +474 同时爆发，`graphify`、`PageIndex` 等“无向量库/知识图谱”方案开始受到关注。整体来看，今日热榜与近期新模型发布高度相关，DeepSeek 官方 Agent 仓库登榜、`unsloth` 快速适配新模型，说明开源社区对新模型生态的响应速度正在加快。

## 四、社区关注热点

- **[semantica](https://github.com/semantica-agi/semantica)**：图原生 Context 基础设施，今日 +1,183，可能是下一代可审计 AI 系统的基础层，值得关注。
- **[holaOS](https://github.com/holaboss-ai/holaOS)**：All-in-One Agent 工作台，支持 100+ 集成与 MCP、共享记忆，适合跑多种 Agent 的开发者。
- **[needle](https://github.com/cactus-compute/needle)**：14MB 端侧基础模型，重新定义“最小可部署模型”，边缘 AI 开发者应重点关注。
- **[unsloth](https://github.com/unslothai/unsloth)**：本地运行/训练新模型 UI，快速支持 Qwen3.8、Kimi K3、DeepSeek-V4，微调工具链更新明显加速。
- **[RAGFlow](https://github.com/infiniflow/ragflow) / [mem0](https://github.com/mem0ai/mem0) / [cognee](https://github.com/topoteretes/cognee)**：RAG 正在与长期记忆、知识图谱融合，“Agent 上下文管理”正成为标配能力。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*