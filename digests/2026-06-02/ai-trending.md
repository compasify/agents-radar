# AI 开源趋势日报 2026-06-02

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-02 00:31 UTC

---

# AI 开源趋势日报 | 2026-06-02

---

## 第一步：AI 相关性过滤

**Trending 榜单排除项**：`godotengine/godot`（游戏引擎，非 AI）、`codecrafters-io/build-your-own-x`（通用编程教育）、`stefan-jansen/machine-learning-for-trading`（金融书籍代码，非活跃 AI 项目）

**保留项目**：14 个（见下方分类）

---

## 第二步：多维度分类

---

## 第三步：完整报告

### 1. 今日速览

今日 AI 开源热榜呈现"工具层爆发"特征：微软文档转换工具 **markitdown** 以 3034 星登顶，反映企业对非结构化数据向 LLM 可消费格式转化的刚性需求；**MoneyPrinterTurbo** 获 3375 星，AI 视频生成赛道持续高热。智能体基础设施成为隐形主线——从 **hermes-webui** 到 **harness** 再到 **oh-my-pi**，"Agent 操作系统"概念正在具象化。语音领域 **VoxCPM** 以无 Tokenizer TTS 技术引发关注，而 **train-llm-from-scratch** 的走热则显示开发者对模型训练底层原理的求知欲不减。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | 0 ⭐ (+3034 today) | 微软官方文档转 Markdown 工具，打通 Office/PDF 等非结构化数据与 LLM 工作流的"最后一公里"，企业 RAG  pipeline 的基础设施级组件 |
| [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) | 0 ⭐ (+1486 today) | 自适应 Web 爬虫框架，从单请求到全站爬取，为 AI Agent 提供动态数据获取能力 |
| [dmtrKovalenko/fff](https://github.com/dmtrKovalenko/fff) | 0 ⭐ (+135 today) | 面向 AI Agent、Neovim 等场景的最快文件搜索工具，Rust 重写代表开发工具链向 AI 原生演进 |
| [ollama/ollama](https://github.com/ollama/ollama) | 172,857 ⭐ [topic:llm] | 本地大模型运行的事实标准，已支持 Kimi-K2.5、GLM-5、DeepSeek 等最新模型 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 81,626 ⭐ [topic:llm] | 高吞吐、内存高效的 LLM 推理引擎，生产环境部署的核心基础设施 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 161,175 ⭐ [topic:llm] | 模型定义框架的事实标准，覆盖文本/视觉/音频/多模态全场景 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 0 ⭐ (+335 today) | 终端 AI 编程代理，支持哈希锚定编辑、LSP、浏览器、子代理，"AI 原生 IDE"的终端形态探索 |

#### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 0 ⭐ (+945 today) | Hermes Agent 的 Web/移动端界面，Agent 从 CLI 走向多模态交互界面的标志性产品 |
| [supermemoryai/supermemory](https://github.com/supermemoryai/supermemory) | 0 ⭐ (+647 today) | 极速可扩展的 Memory API，专为 AI 时代设计的记忆引擎，Agent 长期记忆的基础设施 |
| [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) | 0 ⭐ (+417 today) | 面向 Claude Code/Codex/Cursor 的复合工程插件，"AI 编程工具的工具"生态成型信号 |
| [revfactory/harness](https://github.com/revfactory/harness) | 0 ⭐ (+524 today) | 元技能框架：设计领域特定 Agent 团队、定义专业 Agent 并生成其技能，多智能体编排的抽象层 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 175,968 ⭐ [topic:llm] | "与你共同成长"的 Agent，社区驱动迭代，代表开放 Agent 生态的另一种路径 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 75,601 ⭐ [topic:llm] | AI 驱动开发平台，从代码生成到全栈开发的 Agent 化实践 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 96,574 ⭐ [topic:llm] | 让网站对 AI Agent 可访问，浏览器自动化是 Agent 落地最关键的接口层之一 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 64,081 ⭐ [topic:ai-agent] | 从零构建 Claude Code 级 Agent Harness，"Bash is all you need"的极简主义宣言 |

#### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 0 ⭐ (+3375 today) | 一键 AI 生成高清短视频，LLM 驱动的内容生产工具持续占领 C 端想象力 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 0 ⭐ (+299 today) / 81,757 ⭐ [topic:llm] | 多 Agent LLM 金融交易框架，垂直场景（FinTech）+ 多智能体协作的典型落地 |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 0 ⭐ (+485 today) | 让 AI 更擅长设计的"设计语言"，AI 辅助设计的范式从"生成"走向"规范约束" |
| [p-e-w/heretic](https://github.com/p-e-w/heretic) | 0 ⭐ (+249 today) | 语言模型全自动审查移除工具，AI 安全与自由博弈的技术回应 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 23,316 ⭐ [topic:ai-agent] | 文档转可编辑 PPT + 语音旁白，AI 办公自动化向"交付级成品"进化 |
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | 79,227 ⭐ [topic:rag] | 百语种 OCR 工具，图像/PDF 到结构化数据的桥梁，LLM 时代文档理解的基础设施 |

#### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | 0 ⭐ (+888 today) | VoxCPM2：无 Tokenizer 多语言 TTS，支持创意语音设计与真实克隆，语音合成技术的架构级创新 |
| [FareedKhan-dev/train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch) | 0 ⭐ (+861 today) | 从数据下载到文本生成的完整 LLM 训练指南，开发者对"黑盒解密"的强烈需求 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 50,966 ⭐ [topic:llm-model] | 2 小时从零训练 64M 参数 LLM，大模型教育的极致简化 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 71,768 ⭐ [topic:llm] | 100+ LLM/VLM 统一高效微调，ACL 2024 背书的生产级工具 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 202,201 ⭐ [topic:llm] | Agent Harness 性能优化系统：技能、本能、记忆、安全、研究优先开发，Agent 基础设施的"性能工程"维度 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184,701 ⭐ [topic:llm] | 通用 AI Agent 的先驱，持续迭代中定义"人人可用 AI"的边界 |

#### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [langgenius/dify](https://github.com/langgenius/dify) | 143,441 ⭐ [topic:rag] | 生产级 Agentic 工作流开发平台，RAG + Agent 的融合范式领导者 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 139,565 ⭐ [topic:rag] | 用户友好的 AI 界面，Ollama/OpenAI API 统一接入，RAG 应用的最简入口 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 138,241 ⭐ [topic:rag] | Agent 工程平台，从 RAG 到复杂工作流的编排层事实标准 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 81,672 ⭐ [topic:rag] | 融合前沿 RAG 与 Agent 能力的检索增强引擎，"上下文层"概念的提出者 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 80,100 ⭐ [topic:rag] | 跨会话持久化上下文，AI 压缩记忆注入，解决 Agent "金鱼记忆"痛点 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 57,325 ⭐ [topic:rag] | AI Agent 的通用记忆层，从 RAG 到"持续学习"的进化 |
| [safishamsi/graphify](https://github.com/safishamsi/graphify) | 57,934 ⭐ [topic:rag] | 代码/文档/多媒体转可查询知识图，RAG 从"向量检索"走向"图推理" |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 44,580 ⭐ [topic:rag] | 云原生高性能向量数据库，可扩展 ANN 搜索的基础设施 |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | 36,045 ⭐ [topic:rag] | EMNLP 2025 简单快速 RAG，学术前沿向工程落地的快速转化 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 32,415 ⭐ [topic:vector-db] | 无向量、基于推理的 RAG 文档索引，"Vectorless RAG"挑战传统范式 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 17,624 ⭐ [topic:vector-db] | 6 行代码实现 AI Agent 记忆平台，记忆即服务的极致简化 |

---

### 3. 趋势信号分析

**爆发性关注类别**：**AI 智能体基础设施**正经历从"框架"到"操作系统"的跃迁。今日热榜中，`hermes-webui`（Agent 界面）、`harness`（Agent 团队编排）、`oh-my-pi`（终端 Agent）、`compound-engineering-plugin`（AI 编程工具插件）形成完整光谱，显示社区不再满足于单点 Agent 能力，而是追求**可组合、可扩展、多模态的 Agent 运行环境**。这与 Claude Code、Codex 等商业产品的普及直接相关——开源生态正在快速填补"商业工具无法覆盖的定制化需求"。

**新兴技术栈**：**无 Tokenizer 语音合成**（VoxCPM）和 **Vectorless RAG**（PageIndex）代表两条值得关注的架构创新路径。前者挑战文本-语音转换的底层范式，后者质疑"向量检索 = RAG"的默认假设，均可能引发后续模仿潮。

**行业事件关联**：Kimi-K2.5、GLM-5 等新模型在 Ollama 的快速上架（见 ollama 描述），以及 ECC 等"Agent Harness 优化"项目的存在，表明**模型能力竞争正在让位于"模型利用效率"竞争**——社区焦点从"哪个模型更强"转向"如何让现有模型在特定场景发挥 100% 效能"。

---

### 4. 社区关注热点

- **[microsoft/markitdown](https://github.com/microsoft/markitdown)** — 微软官方出品，3034 日星验证企业级文档解析的刚需，RAG pipeline 的"隐形基础设施"，建议关注其对企业格式（.docx/.xlsx/.pptx）的解析精度进展

- **[revfactory/harness](https://github.com/revfactory/harness)** — "元技能"设计领域特定 Agent 团队，多智能体编排的抽象层创新，可能定义下一代 Agent 开发范式，需跟踪其实际编排复杂度上限

- **[OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM)** — 无 Tokenizer TTS 的首次大规模开源实践，若音质与推理效率达标，可能复现 Whisper 对语音 ASR 的颠覆效应，语音 Agent 入口级技术

- **[FareedKhan-dev/train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch)** — 861 日星反映"祛魅"需求：开发者不再满足于调用 API，而是要求理解 Transformer 训练的全流程，LLM 教育资源的供给侧机会

- **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** — "Vectorless, Reasoning-based RAG"直接挑战 Milvus/Pinecone 等向量数据库的默认地位，若推理成本持续下降，可能引发 RAG 架构的范式迁移

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*