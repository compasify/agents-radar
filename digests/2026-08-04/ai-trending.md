# AI 开源趋势日报 2026-08-04

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-04 01:22 UTC

---

# AI 开源趋势日报（2026-08-04）

## 过滤说明

从 GitHub Trending 中剔除了与 AI/ML 无关的通用项目：`system-design-primer`、`invidious`、`kaneo`。  
在 Topic 搜索结果中，剔除了 `siyuan`、`netdata`、`airflow`、`julia` 等通用性大于 AI 专项性的项目。  
以下聚焦与 **LLM / Agent / RAG / ML / CV / 语音** 明确相关的热门仓库。

## 今日速览

- **Agent 外围能力开始爆发**：今日热榜增速前几名不是模型本身，而是 Agent 技能包、记忆中枢和互联网接入工具，`reverse-skill`（+2,446）、`Agent-Reach`（+1,057）、`TencentDB-Agent-Memory`（+1,090）均表现突出。
- **DeepSeek 生态集中登榜**：`ds4`、`DeepSeek-Reasonix`、`airllm` 三个项目同时出现在 Trending，社区对 DeepSeek 4 本地推理和终端化编程 Agent 的关注度明显升温。
- **文档预处理成为 RAG 新战场**：`firecrawl/pdf-inspector` 今日新增约 1,699 star，说明“先分类、再路由”的 PDF 处理思路正被 AI Pipeline 开发者接受。
- **AI 教育热度不减**：`microsoft/AI-For-Beginners`（+1,902）与 `microsoft/generative-ai-for-beginners`（+775）双双登榜，新开发者持续涌入。

---

## 各维度热门项目

### 🔧 AI 基础工具

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,301 | 模型定义、训练与推理的统一框架，覆盖文本、视觉、音频和多模态。仍是 LLM 生态中引用最广的基础设施项目。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 177,711 | 本地运行 LLM 最主流的工具，已适配 Kimi、GLM、DeepSeek、Qwen、Gemma 等。持续降低个人设备上运行大模型的门槛。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 143,354 | Agent 工程化的核心框架，统一封装模型、工具调用、记忆与工作流。是大量 LLM 应用和智能体的底层底座。 |
| [livekit/agents](https://github.com/livekit/agents) | Python | 0（+148） | 实时语音 AI Agent 框架，支持构建音视频对话智能体。今日登 Trending，反映多模态实时交互需求正在上升。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 64,366 | 在上下文进入 LLM 前压缩工具输出、日志和 RAG 块，最多可减少 95% token。是当前降本增效型 AI 基建的代表项目。 |
| [lyogavin/airllm](https://github.com/lyogavin/airllm) | Jupyter Notebook | 0（+1,085） | 让 70B 模型在单张 4GB GPU 上完成推理，主打显存受限场景。今日新增超千星，说明本地大模型推理是社区刚需。 |
| [antirez/ds4](https://github.com/antirez/ds4) | C | 0（+384） | DeepSeek 4 Flash/PRO 本地推理引擎，支持 Metal、CUDA、ROCm。今日热榜显示 DeepSeek 模型本地化部署热情高涨。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 8,155 | Rust 生态的模块化 LLM 应用框架，支持构建可扩展的 LLM 应用。是 AI 工具链语言多样性增强的明确信号。 |

### 🤖 AI 智能体/工作流

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 237,337 | 面向 Claude Code、Codex、Cursor 等 Agent 的性能优化系统，覆盖技能、记忆、安全与研究优先开发。超高 star 表明 Agent 工程化已成为社区核心主题。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 224,913 | 主打“陪你成长”的 Agent 框架，强调长线记忆与能力进化。与今日 Agent Memory 热潮高度一致。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 185,793 | 经典通用自动化 Agent 项目，愿景是让 AI 人人可用。历经多轮迭代，仍是 Agent 生态的重要风向标。 |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 151,234 | 一站式 Agentic 工作流 + RAG 平台，支持多模型协作与从原型到生产的部署。企业级采用非常广泛。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 107,754 | 让 AI Agent 能够自动化操作浏览器、完成线上任务。是 Agent 与真实网页交互的关键开源方案。 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | Go | 29,953（+883） | DeepSeek 原生的终端 AI 编程 Agent，围绕 prefix-cache 稳定性设计，可常驻运行。今日新增 883 star，是 DeepSeek 编程工具链新星。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 0（+1,057） | 通过一个 CLI 让 Agent 搜索和阅读 Twitter、Reddit、YouTube、GitHub、B 站、小红书，且零 API 费用。今日新增超千 star，开放互联网数据接入需求强烈。 |
| [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) | PowerShell | 0（+2,446） | 面向逆向/渗透/安全研究的 AI 技能路由包，支持 Claude Code、Kiro、Cursor、Cline 等。今日热榜增速第一，安全场景 Agent 技能包是新兴方向。 |

### 📦 AI 应用

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 147,745 | 自托管 AI 对话界面，支持 Ollama、OpenAI API 等。是个人与团队部署 LLM 应用的首选 UI 之一。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 101,416 | 基于 AI 大模型和自动化工作流一键生成高清短视频。是内容创作垂直赛道的明星开源应用。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 49,365 | AI 生产力工作室，聚合智能聊天、自主 Agent、300+ 助手能力。体现 AI 应用从单点工具走向一体化工作台。 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 62,664 | 开源 AI 求职助手，自动扫描职位、评估打分、定制简历并跟踪投递。可在 Claude Code、Codex 等 CLI 中本地运行。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 59,950 | LLM 驱动的多市场股票分析系统，整合行情、新闻、决策看板与自动推送。金融 AI 应用热度依旧很高。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 42,777 | AI 将文档或主题转换为原生 PowerPoint，支持图表、动画、旁白和自定义模板。直击办公生产力场景。 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 29,463 | 个人交易 Agent，结合 LLM 做市场情绪与交易决策辅助。与 Kronos、股票分析项目共同组成今日 finance AI 热点。 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | TypeScript | 0（+412） | 开源 AI 语音工作室，支持克隆、听写、创作语音。今日登 Trending，显示音频生成应用关注度回升。 |

### 🧠 大模型/训练

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,164 | 动态神经网络与 GPU 加速训练框架，是目前 LLM 训练与微调的事实标准之一。在 ml topic 中持续位居前列。 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 196,778 | 老牌开源机器学习框架，覆盖训练、部署与完整生态。是 ml topic 中 star 总数最高的项目。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 100,474 | 从零用 PyTorch 实现 ChatGPT 类 LLM，逐步讲解预训练与微调。是系统学习大模型原理的首选教程。 |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | 60,177 | YOLO 系列目标检测、分割、分类的训练与推理框架。最新 YOLO26 发布后，仍保持 CV 领域高热度。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,266 | 支持 100+ 数据集和主流 LLM 的评测平台。随着模型版本快速迭代，中立评测工具的价值持续上升。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,436 | 面向系统工程师的 LLM 推理 serving 课程，在 Apple Silicon 上从零构建 tiny vLLM + Qwen。是推理性能学习的热门资源。 |
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Python | 0（+200） | 面向金融市场语言的 foundation model，尝试用大模型建模金融时序与语义。今日登 Trending，垂直领域基础模型开始受关注。 |
| [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) | Rust | 59 | 纯 Rust + Candle 从零构建的 decoder-only LLM，不依赖 Python/PyTorch。探索极轻量、可量化的本地模型训练路径。 |

### 🔍 RAG/知识库

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 160,111 | 面向 AI 的网页搜索、抓取与交互 API，为 RAG 和 Agent 提供上下文。是数据采集层最重要的开源基础设施之一。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 101,862 | 把代码库、文档、SQL schema 等解析为可查询的知识图谱，无需向量库。作为 Claude Code / Cursor 的 skill 使用，代表 RAG 新范式。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 86,738 | 开箱即用的 RAG 引擎，深度融合 RAG 与 Agent 能力。在文档处理和上下文工程领域处于领先位置。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 89,441 | 跨会话为 Agent 保留持久上下文，自动压缩并注入历史信息。支持 Claude Code、Codex、Gemini 等，是 Agent Memory 热门项目。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 62,423 | 面向 AI Agent 的通用记忆层，跨 session 管理用户与任务状态。正成为让 Agent 具备长期记忆的标配组件。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,494 | 云原生向量数据库，支持大规模向量 ANN 检索。是生产级 RAG 架构中最常用的向量存储之一。 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | TypeScript | 0（+1,090） | 腾讯云推出的团队级 Agent Memory Hub，将对话/文档/代码沉淀为 Chat Memory、Skill、LLM-Wiki、Code-Graph。今日新增千星，云厂商已入局 Agent 记忆层。 |
| [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) | Rust | 0（+1,699） | 高性能 PDF 检查、分类与文本提取库，可识别扫描版与文本版 PDF，为 RAG 路由做智能决策。今日新增近 1,700 star，文档预处理成为 RAG 链路差异化重点。 |

---

## 趋势信号分析

今日热榜的高增项目集中在 **Agent 技能包、记忆中枢、互联网接入和文档预处理**：`reverse-skill`（+2,446）、`Agent-Reach`（+1,057）、`TencentDB-Agent-Memory`（+1,090）、`pdf-inspector`（+1,699）均非模型本身，而是围绕 Agent 构建的可复用外围能力。这说明社区关注点正从“训练模型”转向“让 Agent 在真实场景中更可靠地工作”。

DeepSeek 生态是另一条主线：`ds4`、`DeepSeek-Reasonix`、`airllm` 同时登榜，其中 `ds4` 直接针对 DeepSeek 4 Flash/PRO 做本地推理，很可能受近期 DeepSeek 新模型发布带动，社区正快速补齐本地部署、终端编程、低成本推理等配套工具。

此外，“token 节约”和“上下文压缩”正在成为独立赛道，`headroom`、`caveman` 等项目受到关注，显示生产环境对 LLM 成本非常敏感。AI 入门课程今日合计新增约 2,677 star，也说明新开发者仍在大量涌入。

## 社区关注热点

- **Agent Memory / 持久上下文**：`TencentDB-Agent-Memory`、`claude-mem`、`mem0` 等持续走热，“记忆”正在成为 Agent 基础设施的核心竞争点。
- **技能包（Skill）生态**：`reverse-skill`、`Graphify`、`ECC`、`AionUi` 等围绕 Claude Code / Cursor 的 skill 体系快速涌现，正形成类似插件市场的新分发机制。
- **DeepSeek 本地部署**：`ds4`、`DeepSeek-Reasonix`、`airllm` 显示社区对低成本运行 DeepSeek 4 / 70B 级模型的强烈需求。
- **RAG 数据预处理**：`pdf-inspector`、`PageIndex`、`RAGFlow` 说明文档类型识别、结构化解析在检索之前已经决定 RAG 效果上限。
- **AI 编程 Agent 终端化**：`DeepSeek-Reasonix`、`free-claude-code`、`Agent-Reach` 代表开发者正追求常驻、零成本、可脚本化的 CLI Agent 体验。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*