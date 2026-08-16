# AI 开源趋势日报 2026-08-16

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-15 23:11 UTC

---

## 今日速览

今日 GitHub Trending 共 13 个仓库，其中 9 个与 AI 明确相关；`cordis`、`public-apis`、`spec-kit`、`holehe` 等通用/非 AI 项目已略去。最突出的信号是 **AI Agent 工具链密集上榜**：Claude Code 相关设计资源 [diagram-design](https://github.com/cathrynlavery/diagram-design) 今日新增 1,619 stars，其次是 Agent 浏览器 [ego-lite](https://github.com/citrolabs/ego-lite)、Agent 化 CLI [CLI-Anything](https://github.com/HKUDS/CLI-Anything) 与低代码 Agent 平台 [ToolJet](https://github.com/ToolJet/ToolJet)。模型侧则出现 **“极小模型 + 极低资源微调”** 的明确热点，14MB 端侧模型、4GB 显卡微调 8B 均进入热榜。主题搜索中，RAG/知识图谱与 Agent 记忆层项目依然占据高 star 头部位置。

---

## 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 197,045 | 经典开源机器学习框架，覆盖训练、部署与端侧生态。仍是 AI 基础设施层最核心项目之一。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 178,602 | 本地运行 LLM 的一站式推理工具，已支持 Kimi-K2.6、GLM-5.2、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等模型。是个人与团队本地部署 AI 的事实标准入口。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 167,787 | 面向 LLM 的网页搜索、抓取与交互 API，为 Agent 和 RAG 提供规模化上下文数据。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 164,119 | 模型定义、推理与训练的统一框架，支持文本、视觉、音频和多模态模型。社区生态地位无可替代。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,393 | 动态神经网络框架，是学术研究与工业训练的主流底座。 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | 60,646 | YOLO26 / YOLO11 / YOLOv8 等目标检测、分割、姿态估计工具套件。计算机视觉领域最活跃的工程化工具之一。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,307 | 支持 100+ 数据集与主流模型的 LLM 评测平台。模型评测正在成为模型选型与发布前的标准环节。 |
| [cursor/plugins](https://github.com/cursor/plugins) | TypeScript | 0（+152） | Cursor 官方插件规范与插件仓库。今日上榜显示 AI 编辑器正在从“单点工具”走向“插件生态”。 |

---

## 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 240,292 | Agent harness 性能优化系统，面向 Claude Code、Codex、Cursor 等工具提供 skills、memory、security 能力。7 天内持续活跃，是编码 Agent 基建的代表项目。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 231,064 | “The agent that grows with you”，主打可成长的个人 Agent。star 总量极高，值得关注其后续设计。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 186,621 | AutoGPT 是“人人可用 AI Agent”愿景下最具象征性的开源项目，持续迭代自治任务能力。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 144,282 | Agent 工程平台，提供工具调用、记忆、多智能体编排等能力，是 LLM 应用开发的事实标准框架之一。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 109,343 | 让 AI Agent 直接操作网站、自动化线上任务。浏览器自动化是当前 Agent 落地最热赛道之一。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 36,783 | 面向 Agent 与 Generative UI 的前端栈，支持 React、Angular、Mobile、Slack，并提出 AG-UI 协议。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | 0（+100） | 提出“让所有软件 Agent-Native”，提供 CLI-Hub。今日上榜说明 CLI 正在成为 Agent 控制软件的新入口。 |
| [citrolabs/ego-lite](https://github.com/citrolabs/ego-lite) | JavaScript | 0（+546） | 专为 AI Agent 打造的浏览器，可共享登录态给 Codex、Claude Code 等 Agent。今日 +546，浏览器 + Agent 自动化热度显著上升。 |

---

## 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 152,544 | Agentic Workflow 与 RAG 一体化 LLM 应用平台，支持云部署与自托管。是从原型到生产最常见的开源应用底座之一。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 148,871 | 用户友好的本地 AI 聊天与管理界面，支持 Ollama、OpenAI API 等。个人与团队本地 AI 使用的高频入口。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 103,928 | 利用 AI 大模型和自动化工作流一键生成高清短视频。是 AIGC 内容生产领域最具代表性的开源应用之一。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 50,519 | AI 生产力工作室，支持智能聊天、自主 Agent 与 300+ 助手，统一接入前沿 LLM。Agent 个人助手产品化代表。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 47,062 | 将文档或主题转换为原生 PowerPoint，支持动画、图表、旁白和自定义模板。办公场景 AI 应用需求旺盛。 |
| [ToolJet/ToolJet](https://github.com/ToolJet/ToolJet) | JavaScript | 0（+553） | 开源低代码平台，用于构建内部工具、看板、工作流和 AI Agents。今日 +553，低代码 + AI Agent 结合趋势明显。 |
| [altic-dev/FluidVoice](https://github.com/altic-dev/FluidVoice) | Swift | 0（+165） | macOS 本地听写应用，使用端侧 STT 与自训练 AI 增强模型。作为本地 Wispr Flow 替代品，反映“本地优先”应用需求。 |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | HTML | 0（+1,619） | 为 Claude Code 提供的 29 种 editorial 图表类型，自包含 HTML + SVG。今日 AI 相关新增最高，说明 AI 编码输出质量正在成为新痛点。 |

---

## 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 102,731 | 从零一步步实现 ChatGPT 类 LLM 的 PyTorch 教程。是理解大模型内部机制最重要的开源学习资源。 |
| [cactus-compute/needle](https://github.com/cactus-compute/needle) | Python | 0（+551） | 14MB 的端侧 foundation model，面向手机、可穿戴、智能家居和机器人。今日 +551，端侧小模型热度快速上升。 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | Python | 0（+435） | 本地 UI 运行与训练 LLM 和扩散模型，支持 Qwen3.8、Kimi K3、MiniMax-H3、Gemma 4、DeepSeek-V4、FLUX 等新模型。 |
| [MakazhanAlpamys/Soup](https://github.com/MakazhanAlpamys/Soup) | Python | 0（+303） | 从单个 YAML 文件微调 LLM，layer streaming 可在 4GB 笔记本 GPU 上训练 8B 模型。极大降低微调硬件门槛。 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | Python | 317 | 基于 X-Bit 量化的设备端 LLM 推理库，面向离线、低资源终端部署。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,488 | 面向系统工程师的微型 LLM 推理项目，帮助理解 vLLM + Qwen 推理栈。是“学习推理系统”方向的新热门。 |

---

## 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 106,709 | 将代码库、文档、SQL Schema、PDF 转为可查询知识图谱，无向量库，基于确定性 AST 解析。是“去向量化 RAG”路线的代表。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 90,834 | 捕获 Agent 会话行为并压缩注入未来会话，支持 Claude Code、Codex、Gemini、Copilot 等。Agent 记忆层正成为刚需。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 88,551 | 开源 RAG 引擎，融合 Agent 能力，为 LLM 提供强上下文层。企业级 RAG 部署常用方案。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 63,329 | 面向 AI Agents 的通用记忆层，提供跨会话持久记忆。与 Agent 长期自主运行需求直接相关。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,662 | 主流文档 Agent 与 RAG 框架，提供索引、检索、OCR 等完整链路。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,646 | 云原生向量数据库，专为大规模向量 ANN 搜索设计。RAG 基础设施的核心选项之一。 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | Python | 35,198 | 面向“无向量、基于推理的 RAG”文档索引。与 Graphify 一同代表 RAG 新方向。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 33,992 | 高性能、大规模向量数据库与向量搜索引擎，专为下一代 AI 应用设计。 |

---

## 趋势信号分析

今日 AI Trending 明显向 **AI Agent 基建** 与 **端侧/低成本模型** 集中。Claude Code 生态尤其活跃：`diagram-design` 以今日 +1,619 成为 AI 相关增速第一，`cursor/plugins` 同步上榜；`CLI-Anything` 提出“让所有软件 Agent-Native”，`ego-lite` 试图用专用浏览器共享登录态给 Agent，说明开发者正从模型层转向 Agent 工具链与接入层。模型侧，`needle` 用 14MB 参数做端侧 foundation model，`Soup` 用 layer streaming 在 4GB 笔记本 GPU 上微调 8B，`unsloth` 则用本地 UI 支持 Qwen3.8、Kimi K3、MiniMax-H3、Gemma 4、DeepSeek-V4 等新模型，“低资源运行/微调新模型”成为明确刚需。RAG 方向出现 `graphify` / `PageIndex` 的“去向量化”知识图与推理式索引，可能挑战传统 vector-db 路线。

---

## 社区关注热点

- **Claude Code / 编码 Agent 插件生态**：[diagram-design](https://github.com/cathrynlavery/diagram-design)、[cursor/plugins](https://github.com/cursor/plugins)、[CLI-Anything](https://github.com/HKUDS/CLI-Anything)、[ECC](https://github.com/affaan-m/ECC)  
  AI 编码正从“能写代码”走向“可定制产出、可复用插件”，插件/技能市场可能是下一爆发点。

- **浏览器 Agent 自动化**：[ego-lite](https://github.com/citrolabs/ego-lite)、[browser-use](https://github.com/browser-use/browser-use)  
  共享登录态 + 零配置 Agent 浏览器，正在降低 AI 执行真实业务操作的门槛。

- **端侧小模型与低资源微调**：[needle](https://github.com/cactus-compute/needle)、[Soup](https://github.com/MakazhanAlpamys/Soup)、[unsloth](https://github.com/unslothai/unsloth)  
  14MB 模型和 4GB 显卡微调 8B 模型，预示着 AI 部署正在从云端向手机、PC、机器人等边缘设备扩散。

- **去向量化 RAG**：[graphify](https://github.com/Graphify-Labs/graphify)、[PageIndex](https://github.com/VectifyAI/PageIndex)  
  用 AST、知识图谱与推理替代向量检索，减少对向量数据库的依赖，是 RAG 技术栈中值得跟踪的新变量。

- **本地优先 AI 应用**：[FluidVoice](https://github.com/altic-dev/FluidVoice)、[open-webui](https://github.com/open-webui/open-webui)  
  隐私、离线、低延迟需求正在推动 on-device STT、本地知识库与自托管 AI 应用快速增长。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*