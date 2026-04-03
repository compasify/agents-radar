# AI 开源趋势日报 2026-03-27

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-27 00:11 UTC

---

# AI 开源趋势日报 | 2026-03-27

---

## 1. 今日速览

今日 AI 开源领域呈现**"智能体基建"爆发态势**：字节跳动开源的 **Deer-Flow** 以 2394 星登顶，主打长周期超级智能体；**AgentScope** 与 **Oh-My-Claudecode** 等多智能体编排工具同步升温，反映社区对"可观测、可协作"Agent 架构的强烈需求。与此同时，**WiFi 感知 AI（RuView）** 和 **OCR 文档理解（Chandra）** 等边缘 AI 技术获得意外关注，显示 AI 正从云端向物理世界渗透。Claude Code 生态持续扩张，记忆增强与多智能体协作成为核心创新点。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [ollama/ollama](https://github.com/ollama/ollama) | 166,244 | 本地大模型运行的事实标准，今日新增支持 Kimi-K2.5、GLM-5 等前沿模型 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 74,439 | 高吞吐 LLM 推理引擎，生产环境部署首选 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 98,812 | 网站转 LLM-ready 数据的 Web Data API，RAG 流水线关键组件 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 84,609 | 让网站对 AI Agent 可访问的浏览器自动化基础设施 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 131,232 | Agent 工程平台，持续迭代工具调用与编排能力 |
| [Vaibhavs10/insanely-fast-whisper](https://github.com/Vaibhavs10/insanely-fast-whisper) | 0 (+1370 today) | 极速 Whisper 语音转录，今日爆发性关注 |
| [langgenius/dify](https://github.com/langgenius/dify) | 134,616 | 生产级 Agentic 工作流开发平台，可视化编排 + RAG 一体化 |

---

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 0 (+2394 today) | **今日之星**：字节开源长周期超级智能体，支持分钟到小时级任务，集成沙箱、记忆、子智能体 |
| [agentscope-ai/agentscope](https://github.com/agentscope-ai/agentscope) | 0 (+437 today) | "可看见、可理解、可信任"的 Agent 构建框架，强调可观测性 |
| [Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode) | 0 (+598 today) | 面向团队的 Claude Code 多智能体编排方案 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 0 (+2685 today) | 跨平台（Reddit/X/YouTube/HN/Polymarket）研究的 AI Agent Skill |
| [virattt/dexter](https://github.com/virattt/dexter) | 0 (+210 today) | 深度金融研究自主智能体 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 69,843 | AI 驱动软件开发，代码生成与调试一体化 |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | 21,438 | 支持 ~400 个 MCP 服务器的 AI 工作流自动化平台 |
| [trycua/cua](https://github.com/trycua/cua) | 13,283 | 计算机使用智能体（Computer-Use Agent）开源基础设施，支持 macOS/Linux/Windows 桌面控制 |

---

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 0 (+1002 today) | **突破性边缘 AI**：纯 WiFi 信号实现实时人体姿态估计、生命体征监测，无需摄像头 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 128,853 | 最热门的本地 LLM 交互界面，支持 Ollama/OpenAI API 统一接入 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 42,385 | 集成 300+ 助手的 AI 生产力套件，统一访问前沿大模型 |
| [twentyhq/twenty](https://github.com/twentyhq/twenty) | 0 (+117 today) | 社区驱动的现代 Salesforce 替代方案，AI 原生 CRM |
| [zhayujie/chatgpt-on-wechat](https://github.com/zhayujie/chatgpt-on-wechat) | 42,573 | 多平台超级 AI 助理（微信/飞书/钉钉/企微），支持主动思考与任务规划 |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | 63,606 | 面向分析师、量化研究员和 AI Agent 的金融数据平台 |

---

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 158,452 | 大模型定义框架，覆盖文本/视觉/音频/多模态 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 69,119 | 100+ LLM/VLM 统一高效微调（ACL 2024） |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 58,332 | 本地训练运行 Qwen/DeepSeek/gpt-oss/Gemma 的 Web UI |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 43,984 | 2 小时从零训练 64M 参数 GPT 的极简教程 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 89,295 | 逐步实现 ChatGPT 类 LLM 的 PyTorch 教程 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 6,671 | Rust 生态的模块化可扩展 LLM 应用框架 |

---

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 76,275 | 融合前沿 RAG 与 Agent 能力的检索增强生成引擎 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 51,156 | AI Agent 的通用记忆层，持久化上下文与个性化 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 43,490 | 云原生高性能向量数据库，可扩展 ANN 搜索 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 29,875 | 下一代 AI 的高性能大规模向量搜索引擎 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 48,022 | 领先的文档 Agent 与 OCR 平台 |
| [datalab-to/chandra](https://github.com/datalab-to/chandra) | 0 (+557 today) | **今日新星**：复杂表格、表单、手写体的 OCR 模型，完整布局保留 |
| [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) | 73,125 | 轻量级 OCR 工具包，100+ 语言支持，PDF/图像转结构化数据 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 41,110 | Claude Code 会话记忆自动捕获与压缩注入插件 |

---

## 3. 趋势信号分析

**"长周期智能体"成为新战场**：字节 Deer-Flow 的爆发（2394 星）标志着社区焦点从"单次对话"转向"分钟到小时级"的复杂任务执行。其"沙箱+记忆+子智能体+消息网关"的架构设计，正在定义下一代 Agent 基础设施的标准范式。

**Claude Code 生态裂变加速**：今日 3 个独立项目（Oh-My-Claudecode、Claude-Mem、Ralph-Claude-Code）同时围绕 Claude Code 做增强，分别解决多智能体编排、记忆持久化、自主开发循环三大痛点，显示 Anthropic 的 CLI 工具已成为开发者首选的 Agent 运行时。

**物理世界感知 AI 意外崛起**：RuView 将 WiFi 信号转为视觉感知的能力获得 1002 星，结合 Chandra 的文档 OCR 突破，表明 AI 正从"语言中心"向"多模态物理交互"扩展，隐私友好型传感（无摄像头）成为差异化创新点。

**MCP 协议进入主流实践**：ActivePieces 宣称支持 ~400 个 MCP 服务器，Agent-Reach 提供零 API 费的社交媒体访问，Model Context Protocol 正在快速成为 Agent 工具集成的"USB-C 标准"。

---

## 4. 社区关注热点

- **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)** — 字节跳动的长周期 SuperAgent 开源，"研究-编码-创作"一体化能力可能重塑 AI 工作流市场格局

- **[ruvnet/RuView](https://github.com/ruvnet/RuView)** — WiFi 感知 AI 的首次大规模开源，无摄像头实现 DensePose 与生命体征监测，隐私敏感场景（医疗、养老、安防）潜力巨大

- **[datalab-to/chandra](https://github.com/datalab-to/chandra)** — 复杂文档 OCR 的新 SOTA，表格/表单/手写体+完整布局保留，企业知识库建设的最后一公里方案

- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** — 跨平台信息聚合 Agent Skill，Polymarket 预测市场数据的纳入显示 AI 正在整合实时社会信号

- **[agentscope-ai/agentscope](https://github.com/agentscope-ai/agentscope)** — "可看见、可理解、可信任"的三可原则，回应了当前 Agent 黑箱化带来的治理焦虑

---

*报告基于 2026-03-27 GitHub Trending 与主题搜索数据生成*

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*