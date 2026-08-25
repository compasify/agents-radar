# AI 开源趋势日报 2026-08-25

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-24 23:13 UTC

---

# AI 开源趋势日报（2026-08-25）

> 筛选说明：已剔除 Trending 中与 AI/ML 无关的项目（如 plane、OpenLogi、omarchy、vaultwarden）；以下表格按主要类别归入项目。

## 1. 今日速览

今天 GitHub AI 生态最热的关键词是“可组合的 Agent、记忆层与免费 token”。OpenAI Codex 单日 +1,990 领跑编码代理，Claude 插件市场、1000+ Agent Skills、Karpathy Skills 等同时登榜，说明 Agent 能力正被拆解为可复用“技能包”。本地优先的记忆/上下文基础设施也集中出现：apache/maka 用 append-only log 记录 Agent 全程，openhuman 主打 local-first memory，claude-obsidian 做知识图谱式第二大脑。GPT-Image2 提示词模板库以 +2,442 成为今日增长最快项目，“Prompt as Code”趋势明显。此外，free-claude-code、freellmapi 以“亿级免费 token”切入，显示成本优化与多供应商路由正在成为当前 AI 开发的刚需。

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 144,912 | Agent 工程平台，提供工具调用、RAG 与记忆等标准组件。今日主题搜索中仍是 RAG/Agent 生态的核心依赖。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 179,352 | 本地 LLM 运行工具，一行命令即可部署开源模型。已快速支持 Kimi-K2.6、GLM-5.2 等新模型，是自托管推理的首选入口。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 164,402 | 模型训练/推理的标准框架，覆盖文本、视觉、音视频与多模态。今日仍以 16.4 万 star 稳居 LLM 生态基础层。 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | Java | 12,941 | JVM 上的 LLM 应用开发库，统一对接多家大模型与向量库。与 Spring Boot/Quarkus 集成，是企业 Java AI 落地的重要桥梁。 |
| [tashfeenahmed/freellmapi](https://github.com/tashfeenahmed/freellmapi) | TypeScript | 0（+153） | 将 34 个免费 LLM Provider、635 个模型端点聚合为一个 /v1 接口。提供智能路由与自动故障转移，主攻个人低成本实验。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 67,415 | 在上下文进入 LLM 前压缩工具输出、日志与 RAG 分块。对编码 Agent 可减少 20% token，对 JSON 可减少 60-95%。 |
| [apache/casbin-gateway](https://github.com/apache/casbin-gateway) | Go | 570 | 面向 AI 与 MCP 的 HTTP 安全网关。随着 Agent 调用外部工具增多，这类细粒度权限控制层开始受到关注。 |
| [PostHog/posthog](https://github.com/PostHog/posthog) | Python | 0（+106） | 产品分析平台，但重点面向 AI 可观测性，捕获 Agent 所需上下文。支持 MCP、Slack、Web 等多端控制，是 Agent 调试与诊断工具。 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 235,763（+899） | 主打“陪你成长”的 Agent，同时进入 Trending 与 AI Agent 主题搜索。今日新增 +899，代表通用个人 Agent 的活跃路线。 |
| [openai/codex](https://github.com/openai/codex) | Rust | 0（+1,990） | OpenAI 官方轻量级终端编码代理，用 Rust 实现。今日 +1,990 是 Trending 中增长最快的编码 Agent 项目之一。 |
| [apache/maka](https://github.com/apache/maka) | TypeScript | 0（+408） | Apache 孵化的本地优先 Agent 工作区，以 append-only 日志记录消息、工具调用与权限决策。强调可审计、可重放的 Agent 运行轨迹。 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | TypeScript | 0（+160） | 跨平台个人 AI 助手，支持任意 OS/平台。与 AionUi 等 Cowork 应用联动，正在形成“助手 + 界面”的小生态。 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | Rust | 0（+515） | Personal AI superintelligence，主打本地优先的终身记忆与 Agent 编排。以 Rust 实现，代表资源敏感型本地 Agent 方向。 |
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | — | 0（+600） | 收录 1000+ Agent Skills，兼容 Claude Code、Codex、Gemini CLI、Cursor 等。说明社区正把技能当作可复用的“软件包”。 |
| [anthropics/claude-plugins-community](https://github.com/anthropics/claude-plugins-community) | Python | 0（+490） | Anthropic 官方社区插件市场，支持 Claude Cowork 与 Claude Code。今日 +490，显示官方开始推动 Agent 插件生态标准化。 |
| [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | — | 0（+491） | 用单个 CLAUDE.md 改善 Claude Code 行为，源自 Karpathy 对 LLM 编码缺陷的观察。提供了一种低成本、可复用的 Agent 调优思路。 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | JavaScript | 0（+2,442） | GPT-Image2 工业级提示词引擎与模板库，含 530+ 反工程案例和 20+ 模板。今日热榜增速第一，体现多模态图像生成需求爆发。 |
| [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | Python | 0（+889） | 在终端/App/IDE 免费使用 Claude Code、Codex、Pi、OpenCode 等，宣称 13 亿+免费 token。直击 API 成本痛点。 |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | Python | 0（+378） | 本地运行的 AI 求职框架，基于 Claude Code 评估职位、定制简历、准备面试。Agent 在垂直招聘场景的具体落地。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | Python | 0（+272） | 为 Obsidian + Claude Code 打造的自组织 AI 第二大脑，把任意资料整理为 Markdown 知识图谱。主打个人知识管理（PKM）。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 51,007 | AI 生产力工作室，统一接入前沿 LLM，提供 300+ 助手与自主 Agent。适合普通用户通过桌面端使用多样化 AI 能力。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 149,802 | 开源、用户友好的 AI 对话界面，支持 Ollama 与 OpenAI API 等。仍是自托管聊天/Agent 界面的首选。 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 65,152 | 本地优先的“一切 LLM”桌面应用，内置 RAG、Agent 与多用户支持。强调私有化与数据所有权。 |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Python | 48,255（+330） | “Learn it. Build it. Ship it.”的 AI 工程实战教程。今日 +330，说明开发者对从零起步的 AI 工程路线需求旺盛。 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 103,682 | 手写 PyTorch 实现类 ChatGPT LLM 的教程，逐步构建。是社区中“从零训练大模型”最经典的学习路径之一。 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 54,972 | 2 小时训练 64M 参数 LLM 的极简项目。对算力有限的开发者非常友好，展示小型化训练路线。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,515 | 面向系统工程师的 LLM 推理系统教程，在 Apple Silicon 上构建 mini vLLM + Qwen。结合硬件实战理解推理栈。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,333 | 大模型评测平台，支持 Llama、Qwen、GLM、GPT-4、Claude 等超 100 数据集。随新模型快速迭代，评测需求同步上升。 |
| [genieincodebottle/generative-ai](https://github.com/genieincodebottle/generative-ai) | Jupyter Notebook | 2,607 | 汇总生成式 AI 学习路线、项目案例与面试准备。适合系统化补齐从理论到工程的知识。 |
| [llm-jp/awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) | TypeScript | 1,426 | 日语 LLM 资源清单。体现非英语社区在多语言模型上的跟进。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 8,390 | Rust 生态的模块化 LLM 应用框架。与 Codex 等 Rust Agent 项目呼应，Rust 在 AI 基础设施层渗透加速。 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 89,162 | 领先的开源 RAG 引擎，融合 Agent 能力构建 LLM 上下文层。面向企业级知识库与问答场景。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,849 | 文档 Agent 与 OCR 平台，也是 RAG 应用构建的主流框架。与 LangChain 互补，覆盖数据接入到检索。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,771 | 云原生向量数据库，支持大规模 ANN 搜索。是 RAG 检索层的常见基础设施。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 34,167 | 高性能向量数据库与搜索引擎，为 AI/下一代智能应用设计。Rust 实现，性能与资源占用表现突出。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 63,964 | Agent 通用记忆层，为 AI Agent 提供长期记忆。解决会话间遗忘问题，是记忆基础设施的代表项目。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 91,718 | 跨会话捕获 Agent 行为并用 AI 压缩后注入未来会话。兼容 Claude Code、OpenClaw、Codex 等，记忆复用生态正在形成。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 110,118 | 把代码库、文档、SQL Schema、PDF 转成可查询知识图谱。无需向量库，使用确定性 AST 解析，适合本地知识管理。 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | Python | 35,314 | 面向“无向量、基于推理”的 RAG 文档索引方案。代表 RAG 在向量检索之外的路径探索。 |

## 3. 趋势信号分析

今日最明显的爆发点是编码代理与 Agent 技能生态：OpenAI Codex 官方开源（Rust）单日 +1,990，Claude 社区插件、VoltAgent 的 1000+ Skills、Karpathy 风格 CLAUDE.md 同步上榜，意味着单体 Agent 正让位于可跨 CLI 复用的 skill 层。第二，本地优先的记忆/知识基础设施成为新赛道：apache/maka 的 append-only log、openhuman 的 local-first memory、claude-obsidian 以及 mem0/claude-mem，都在解决上下文连续性问题。第三，免费/低成本 LLM 访问和网关项目首次集中出现：free-claude-code、freellmapi 以“13 亿+ token”“34 家免费 Provider”吸引开发者，反映 API 成本压力和多家模型并用的生产需求。第四，GPT-Image2 提示词模板库以今日最高增长登顶，显示多模态模型发布后提示词工程正走向模板化、工程化。第五，AI 求职、股票分析、PPT/视频生成等垂直 Agent 应用密集出现，智能体正从通用助手进入具体场景。

## 4. 社区关注热点

- **OpenAI Codex 官方开源（Rust）**：今日 +1,990，是终端编码代理中增速最高的官方项目。可关注其轻量级设计与 Rust 实现如何影响后续编码 Agent 架构。
- **Agent Skills 生态**：VoltAgent/awesome-agent-skills（1000+ skills）、anthropics/claude-plugins-community、multica-ai/andrej-karpathy-skills 同时登榜。Skill 正成为 Agent 时代的“可安装包”，建议关注如何跨 Claude Code/Codex/Gemini CLI 复用。
- **Agent 记忆/上下文基础设施**：apache/maka 的 append-only 日志、tinyhumansai/openhuman、mem0/claude-mem 都在做“记忆层”。长会话与跨会话上下文是当前 Agent 落地最大瓶颈之一。
- **GPT-Image2 提示词工程**：awesome-gpt-image-2 今日 +2,442 登顶，530+ 案例反工程与 20+ 工业级模板。多模态生成正在从“写 prompt”走向“Prompt as Code”的标准化。
- **免费/多供应商 LLM 网关**：free-claude-code、freellmapi 分别提供 13 亿+ 与 74 亿 token/月的免费额度。成本敏感型个人开发与初创团队可借此快速试错。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*