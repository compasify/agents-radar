# AI 开源趋势日报 2026-08-26

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-26 00:00 UTC

---

# AI 开源趋势日报（2026-08-26）

> 过滤说明：已从 Trending 榜单中排除与 AI 无关的通用工具（如 basecamp/omarchy、asciimoo/hister），保留 14 个 AI 相关项目；并整合 79 个 AI 主题搜索结果，去重后按主要维度分类。

## 1. 今日速览

今日 AI 开源生态呈现三个鲜明信号：一是 Claude 插件生态集中发布，官方与社区双市场同时上榜；二是以 GPT-Image2 为代表的提示词工程走向工业化，模板库拿下今日最高星增；三是 AI 求职、个人知识管理等垂直 Agent 应用快速起量。与此同时，终端编码代理（OpenAI Codex）与本地优先 Agent 工作区（Apache Maka、OpenHuman）成为新焦点。RAG 与向量数据库赛道依旧稳固，多个基建项目保持高 star 总量。

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 144,982 | LangChain 是主流的 agent 工程平台，支撑大量 LLM 应用开发。本期仍占据 RAG/agent 生态核心位置。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 164,440 | 最广泛使用的模型定义与推理框架，支持文本/视觉/音频多模态。作为 AI 基础设施，社区活跃度常年第一梯队。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,592 | 深度学习核心框架，训练与研究的主流选择。star 持续稳步增长。 |
| [openai/codex](https://github.com/openai/codex) | Rust | 0（+1181） | OpenAI 推出的轻量级终端编码代理。今日新增 1181 星，反映开发者对本地 CLI AI 编程工具的需求。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 179,428 | 本地一键运行主流大模型的工具，支持 Kimi、GLM、DeepSeek、Qwen 等，成为个人 AI 基础设施首选。 |
| [anthropics/claude-plugins-community](https://github.com/anthropics/claude-plugins-community) | Python | 0（+351） | Claude 社区插件市场（只读镜像）。今日新增 351 星，插件生态正在快速积累。 |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Python | 0（+55） | Anthropic 官方维护的高质量 Claude Code 插件目录，是官方生态的权威入口。 |
| [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) |  | 0（+830） | 基于 Karpathy 对 LLM 编码缺陷的观察，把改进 Claude Code 行为的经验浓缩为一个 CLAUDE.md。今日 +830 星。 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 186,868 | 通用 AI Agent 的先行者，提供让 AI 自主完成任务的能力，仍是最受关注的 agent 框架之一。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 236,403 | 强调“与你共同成长”的 Agent，在 llm 主题中 star 数最高，体现对长期陪伴式 Agent 的兴趣。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 110,513 | 让 AI Agent 像人一样操作浏览器的工具，是 AI 自动化线上任务的热门选择。 |
| [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | Python | 40,440 | LangChain 官方推出的可控、可复用 Agent 状态图框架，适合构建复杂多步骤 Agent。 |
| [apache/maka](https://github.com/apache/maka) | TypeScript | 0（+543） | Apache 孵化中的本地优先 AI Agent 工作区，以 append-only log 记录模型消息、工具调用等事件。今日 +543 星。 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | Rust | 0（+542） | “个人 AI 超级智能”，构建本地优先的生活记忆与 Agent 编排。今日 +542 星，代表个人 AI 管家方向。 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 0（+218） | 多智能体 LLM 金融交易框架。今日 +218 星，垂直金融 AI Agent 需求旺盛。 |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | JavaScript | 0（+982） | 让 AI Agent “像最懒的资深开发者一样思考”，减少无效代码输出。今日 +982 星。 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | --- |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | JavaScript | 0（+1698） | GPT-Image2 工业级提示词引擎，含 530+ 逆向工程案例与 20+ 模板。今日新增 1698 星，是今日增长最高的 AI 项目。 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | Python | 0（+1265） | 基于 Claude Code 的 AI 求职框架：评估职位、定制简历、写求职信、准备面试。今日 +1265 星。 |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Python | 134,216（+161） | 100+ 免费开源的 AI Agents、Agent Skills 与 RAG 案例合集，是高质量应用案例入口。 |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 153,499 | 一站式 Agentic 工作流与 RAG 开发平台，支持云/私有化部署，是生产级 AI 应用落地的热门选择。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 116,446 | 输入主题或关键词自动生成高清短视频，长期霸榜的 AI 内容创作应用。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 49,314 | AI 将文档转为原生 PowerPoint，支持动画、图表、音频旁白，办公场景 AI 应用代表。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 63,844 | LLM 驱动的多市场股票分析系统，集成行情、新闻、决策看板，金融垂直场景热度不减。 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 68,401 | 开源 AI 求职助手，将职位扫描结果输出为 A-H 结构化报告。与 ai-job-search 同属今日“AI+求职”热点。 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [marin-community/marin](https://github.com/marin-community/marin) | Python | 0（+231） | 开源的基础模型研发框架。今日进入 Trending，反映基础模型研究工具需求。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 103,778 | 手把手用 PyTorch 从零实现类 ChatGPT LLM，是理解大模型内部原理的经典资源。 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 55,001 | 仅需 2 小时从零训练 64M 参数 LLM，大幅降低个人研究者训练门槛。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,519 | 面向系统工程师的微型 vLLM + Qwen 推理系统，可在 Apple Silicon 上学习 LLM 推理。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,349 | 支持 100+ 数据集的 LLM 评估平台，是模型横向比较与评测的基础设施。 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Python | 48,937（+569） | 从零开始学习 AI 工程并交付的开源路径。今日新增 569 星，社区对体系化学习内容需求明显。 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | --- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 149,919 | 用户友好的 AI 界面，支持 Ollama、OpenAI API 等，是 RAG 与本地模型交互的主要入口。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 110,491 | 将代码库、文档、SQL schema 等转换为可查询知识图谱，无需向量库，主打确定性 AST 解析。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 89,241 | 领先的开源 RAG 引擎，融合 RAG 与 Agent 能力，是检索增强生成赛道的热门基建。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 91,838 | 为多种 AI Agent 提供跨会话持久记忆，自动压缩并注入上下文，解决长期记忆痛点。 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 65,194 | 本地优先的一体化 AI 知识库与 Agent 体验，主打“拥有自己的智能”。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 64,029 | AI Agent 的通用记忆层，与 RAG 结合为 Agent 提供长期记忆能力。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,788 | 高性能云原生向量数据库，专为可扩展的向量 ANN 搜索设计，是 RAG 基础设施的中坚力量。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | Python | 0（+813） | 基于 Claude Code 的自组织 AI 第二大脑，将任意来源整理为 Markdown 知识图谱。今日 +813 星。 |

## 3. 趋势信号分析

今日热榜显示，AI 编码与 Agent 工具链是最强增长极：OpenAI Codex 单日新增 1181 星，Claude 插件生态（官方 + 社区）合计新增 400+ 星，Ponytail 等“优化 Agent 输出”的项目也获近千星，说明开发者正从“能用 Agent”转向“用好 Agent”。提示词工程迎来爆发，GPT-Image2 模板库以 +1698 星登顶，提示词正在从个人经验沉淀为标准化模板。新兴方向方面，个人 AI 记忆与第二大脑（OpenHuman、Claude-Obsidian）首次成规模上榜，本地优先、隐私可控的长期记忆正成为 Agent 竞争新焦点。此外，AI 求职自动化（AI-Job-Search、Career-Ops）频繁出现，垂直场景 Agent 落地成为社区关注点。这些动向与 Claude 插件目录发布、GPT-Image2 生态兴起、以及 Karpathy 对 LLM 编码缺陷的点评密切相关，推动社区朝更工程化、产品化的方向演进。

## 4. 社区关注热点

- [Claude 插件生态](https://github.com/anthropics/claude-plugins-community)：官方目录与社区市场同时开放，插件化扩展 Claude Code/Cowork 能力，建议开发者重点跟进。
- [AI 求职自动化](https://github.com/MadsLorentzen/ai-job-search)：AI-Job-Search 与 Career-Ops 同榜出现，垂直 Agent 应用被验证有真实需求，可参考其实现思路。
- [提示词工程化](https://github.com/freestylefly/awesome-gpt-image-2)：Awesome-GPT-Image-2 将 530+ 案例逆向工程为模板，提示词正成为可复用资产。
- [个人 AI 记忆](https://github.com/tinyhumansai/openhuman)：OpenHuman 和 Claude-Obsidian 探索本地优先的长期记忆与知识图谱，值得关注。
- [终端编码代理](https://github.com/openai/codex)：OpenAI Codex、DeepSeek-Reasonix、CodeWhale 等纷纷进入 CLI Agent 赛道，轻量级开发体验是明显趋势。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*