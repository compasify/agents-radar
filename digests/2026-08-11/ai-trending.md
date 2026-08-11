# AI 开源趋势日报 2026-08-11

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-11 00:52 UTC

---

说明：已按“显式包含 AI/ML/Agent/LLM/RAG 语义”进行过滤。Trending 中的 LadybirdBrowser（浏览器）、Dopamine（越狱）、MediaCrawler（通用爬虫）、t3code（描述缺失）未列入。Trending 源未提供可靠 total 的仓库以 `—` 表示，括号内为今日新增 stars。

## 1. 今日速览

今日 GitHub 热榜几乎被 AI Agent 工程化占据：`prime-agent` 单日 +2,642、`agency-agents` +1,349，同时 `agent-skills` 这类“技能包”项目也快速起量。RAG 正在从“向量检索”升级为“图结构上下文”：`code-graph-rag` 今日 +682，`Graphify` 已获超 10 万 stars。扩散模型生态依然活跃，`ComfyUI` 今日 +922。同时，科学/垂直 AI 开始发力：DeepMind 天气预测模型 `weathernext` +325，金融多智能体 `TradingAgents` +177，`RuView` 把 WiFi 信号变成空间智能。整体看，社区关注点正从单点对话转向 Agent 可工程化、上下文可记忆、场景可落地。

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 143,913 | Agent 工程化框架，提供模型调用、工具调用与 RAG 编排；是当前 RAG/Agent 应用的底层标准之一。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 178,237 | 本地大模型运行工具，持续跟进 Kimi-K2.6、GLM-5.2、DeepSeek 等新模型；是本地 AI 开发首选运行时。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,558 | 最主流的模型定义与推理/训练框架，覆盖文本、视觉、音频与多模态；社区新模型常在此首发权重。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,299 | 动态神经网络训练框架，是 AI 研究和生产训练的事实标准之一。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 165,070（+835） | 面向 LLM/Agent 的网页搜索、抓取与上下文 API；今日 Trending +835，是 Agent 获取实时数据的基础设施。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 65,821 | 在输出到达 LLM 前压缩工具日志、文件与 RAG 块；宣称可减少 20%~95% tokens，是 Agent 成本优化层。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 36,673 | 面向 Agent 与生成式 UI 的前端框架，支持 React/Angular/Mobile/Slack，加速 Agent 产品化。 |
| [semantica-agi/semantica](https://github.com/semantica-agi/semantica) | Python | —（+970） | 图原生的上下文与可问责 AI 系统基础设施；今日 +970 成为 Trending 新面孔，指向“图结构上下文管理”方向。 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 239,246 | Agent harness 性能优化系统，把技能、记忆、安全整合为统一层；是 Claude Code、Codex 等 CLI Agent 的增强底座。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 228,461 | 主打“与你一起成长”的自进化 Agent；代表新一代具备长期记忆与个性的 Agent 系统。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 186,501 | 最早出圈的通用 Agent 项目，愿景是让每个人都能使用和构建 AI；仍是开源 Agent 生态风向标。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 108,653 | 让 AI Agent 学会操作浏览器、自动完成线上任务；是 Agent 自动化落地的重要组件。 |
| [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) | TypeScript | —（+2,642） | 自改进 RLM Agent，面向编码与长时自主任务；今日热榜第一，说明“强化学习 + Agent”成为新焦点。 |
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | Shell | —（+1,349） | “一个完整的 AI 代理公司”，用 Shell 实现有性格、有流程的专家 Agent 团队；形式新鲜，增长凶猛。 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | —（+659） | 为 AI 编码 Agent 提供生产级工程技能；补齐 Agent 在真实项目中的“技能包”。 |
| [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) | TypeScript | —（+315） | 通用爬山式 AI Harness，帮助个人从当前状态推进到理想状态；是 Agent 用于生活/工作规划的独特尝试。 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 148,421 | 最流行的自托管 AI 对话界面，支持 Ollama/OpenAI 等后端；常被当作 RAG/Agent 应用的前端。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 102,497 | 用 AI 工作流一键生成高清短视频；是 AI 内容创作方向的代表性项目。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 50,239 | AI 生产力工作室，集合智能聊天、自主 Agent 与 300+ 助手；统一接入前沿 LLM。 |
| [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | Python | —（+922） | 模块化扩散模型 GUI/API/后端，图节点界面让图像生成工作流可复用；今日 +922 显示生态持续活跃。 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | —（+177） | 多智能体 LLM 金融交易框架，将多角色分析、决策串成完整交易 pipeline。 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 63,441 | AI 求职垂直应用，扫描职位、评估匹配、定制简历，并在本地 AI CLI 中运行。 |
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | TypeScript | —（+198） | 用于在工作中统一管理 Agent 的开源应用；今日 +198，显示企业级 Agent 治理需求升温。 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | Rust | —（+154） | 将普通 WiFi 信号转为空间智能、生命体征监测与存在检测；无需摄像头，是物理世界 AI 的新尝试。 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 102,305 | 从零手写 ChatGPT 类 LLM 的教学项目；帮助开发者深入理解模型架构与训练细节。 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 54,537 | 2 小时从零训练 64M 参数 LLM；大幅降低大模型入门门槛。 |
| [google-deepmind/weathernext](https://github.com/google-deepmind/weathernext) | Python | —（+325） | DeepMind 的 AI 天气预报项目；代表科学计算与气候预测的 AI 新方向。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,465 | 面向系统工程师的 Apple Silicon LLM 推理教学项目；带你实现精简版 vLLM + Qwen。 |
| [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) | Rust | 75 | 纯 Rust/Candle 从零构建 decoder-only LLM，加入 MoE 与量化训练；star 虽少但技术栈新颖。 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 151,998 | Agentic 工作流 + RAG pipelines 一体化平台；是企业级 AI 应用落地最常用的基础设施之一。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 104,996 | 将代码库/docs/SQL/PDF 转为可查询知识图谱；对 Claude Code、Cursor 等 Agent 提供本地确定性 AST 解析，无需向量库。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 90,336 | 为多款 CLI Agent 提供跨会话持久记忆；自动压缩并注入上下文，解决 Agent 记忆丢失问题。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 87,198 | 领先的开源 RAG 引擎，融合 Agent 能力做 LLM 上下文层；重视可解释与可调试。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 62,957 | 面向 AI Agent 的通用记忆层；让 Agent 在会话间保持长期记忆。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,537 | 文档 Agent 与 OCR 平台，也是 RAG 应用开发核心框架。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,596 | 云原生向量数据库，面向大规模向量 ANN 检索；是 RAG/语义搜索的存储基座。 |
| [vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag) | Python | —（+682） | 面向 monorepo 的代码库 RAG；用知识图谱查询、理解、编辑多语言代码，今日新增 stars 显著。 |

## 3. 趋势信号分析

今日最明显的信号是 Agent 正在从“能聊天”转向“能工程化”。`prime-agent`、`agency-agents`、`agent-skills` 同时登榜，社区开始补齐 Agent 的技能、记忆、安全和管理层。RAG 也在“图化”：`code-graph-rag`、`Graphify`、`semantica` 都以知识图谱或图原生上下文为核心，不再只靠向量检索。`ComfyUI` 继续领跑扩散模型应用层，生成视觉仍具稳定需求。科学和垂直 AI 在升温：DeepMind `WeatherNext` 带来天气预测模型，`TradingAgents` 深入金融，`RuView` 用 WiFi 做空间感知，AI 正进入非聊天场景。结合 `Ollama` 对新模型的快速跟进，本地模型与 Agent 工具链的耦合正在成为生态主线。

## 4. 社区关注热点

- **Agent Harness 与技能层**：`ECC`、`Hermes-Agent`、`LifeOS` 等把“技能 + 记忆 + 安全”做成通用层；`agent-skills` 则在补齐生产级 skill 库。
- **图结构 RAG**：`code-graph-rag` 今日 +682，`Graphify` 已超 10 万 stars，“知识图谱 / 图原生上下文”成为 RAG 升级方向。
- **Coding Agent 自改进**：`prime-agent` 今日 +2.6k，RLM + 长时自主任务值得开发者重点关注。
- **本地模型生态**：`ollama` 快速接入 Kimi、GLM、DeepSeek 等新模型，配合 `open-webui`、`ComfyUI`，自托管 AI 依然是主流路径。
- **物理世界 AI**：`RuView`（WiFi 感知）、`WeatherNext`（天气）表明 AI 开源正从数字内容扩展至传感器和科学场景。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*