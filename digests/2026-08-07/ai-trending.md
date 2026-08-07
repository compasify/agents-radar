# AI 开源趋势日报 2026-08-07

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-07 02:02 UTC

---

# AI 开源趋势日报（2026-08-07）

> **过滤说明**：已剔除 Trending 榜单中与 AI/ML 无关的项目——`goauthentik/authentik`（身份认证）、`google/guava`（Java 基础库）、`TapXWorld/ChinaTextbook`（教材 PDF 合集）。其余 10 个 Trending 项目与本日主题搜索项目均与 AI 强相关，已纳入下方分类。

---

## 1. 今日速览

今日 GitHub Trending 几乎被「AI Agent 基础设施」包场：`cloudflare/computer` 单日 +2,802 stars 登顶，`mattpocock/skills`（+1,873）、`firecrawl/pdf-inspector`（+1,190）、`TencentDB-Agent-Memory`（+1,057）紧随其后，占据榜单前四。**「Agent Skills」作为一股新范式同日三项目上榜**（agent-skills、skills、superpowers），合计新增超 3,300 stars，编码 Agent 正从「单点工具」走向「技能生态」。Agent 记忆与长期运行状态管理加速工程化：腾讯云推出团队级记忆中心，`loopx` 发布循环工程状态内核，瞄准多 Agent 协作与持久化目标。DeepSeek 生态热度延续：`DeepSeek-Reasonix` 单日 +888 stars，成为终端编码 Agent 赛道新星。老牌项目 AutoGPT 虽仍在榜但仅 +37，热度明显让位于更聚焦的基础设施项目。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 177,948 | 本地/自托管大模型运行工具，一行命令拉起主流开源模型。现支持 Kimi-K2.6、GLM-5.2、MiniMax、DeepSeek、gpt-oss 等最新模型，是个人开发者本地推理首选入口。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,421 | HF 出品的事实标准模型框架，覆盖文本/视觉/语音/多模态的推理与训练。持续稳居 AI/ML 生态核心地位。 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | Python | 88,377 | 高吞吐、内存高效的 LLM 推理与服务引擎，是行业部署开源大模型的事实标准。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 8,190 | Rust 生态的模块化 LLM 应用开发框架，主打类型安全与高性能。Rust 在 AI 基础设施层的接受度持续上升。 |
| [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) | Rust | 0（+1,190） | 快速 PDF 检查/分类/文本抽取库，智能识别扫描版与文本版 PDF 以支持路由决策。今日热榜第 3，单日近 1,200 stars，反映 Agent 对文档预处理能力的强烈需求。 |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | Python | 0（+237） | 本地优先的代码智能图谱，供 MCP/CLI 使用，为 AI 编码工具提供精准上下文。宣称在代码评审与大型仓库工作流中显著降低上下文消耗。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,281 | 覆盖 100+ 数据集的 LLM 评测平台，支持 Llama、Qwen、GLM、GPT-4 等主流模型横向评测。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,444 | 面向系统工程师的 LLM 推理服务课程：在 Apple Silicon 上从零构建微型 vLLM + Qwen。 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [cloudflare/computer](https://github.com/cloudflare/computer) | TypeScript | 0（+2,802） | 给 AI Agent 一台「电脑」——Cloudflare 出品的 Agent 计算环境抽象。今日热榜第 1，云巨头正式入局 Agent 基础设施层。 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | 0（+1,873） | 来自知名 TypeScript 教育者 Matt Pocock 的 `.agents` 技能库，主打「写给真实工程师的 Skills」。单日 +1,873 stars，验证「Agent Skills」从概念走向工程实践。 |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | TypeScript | 0（+1,057） | 腾讯云推出的团队级 AI Agent 记忆中心，将对话、文档、代码沉淀为 Chat Memory、Skill、LLM-Wiki、Code-Graph 四类记忆资产。单日 +1,057 stars，云厂商开始提供 Agent 记忆中间层。 |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | Go | 32,467（+888） | DeepSeek 原生的终端 AI 编码 Agent，围绕 prefix-cache 稳定性设计，可长期驻留运行。今日 +888 stars，DeepSeek 生态在 Agent 工具链上持续扩张。 |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0（+858） | 「一套能用的」Agentic 技能框架与软件开发方法论。单日 +858 stars，与 skills 类项目共同构成今日最热细分方向。 |
| [huangruiteng/loopx](https://github.com/huangruiteng/loopx) | Python | 0（+847） | 面向长期运行 AI Agent 团队的轻量「循环工程状态内核」，与 Codex、Claude Code 等编码 Agent 框架无关，提供持久目标、配额感知自动唤醒、可验证交接。单日 +847 stars。 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | 0（+593） | 由 Google Chrome 团队前成员 Addy Osmani 开源的生产级工程技能库，专为 AI 编码 Agent 设计。单日 +593 stars。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 186,031（+37） | 老牌通用 AI Agent 平台，愿景是让每个人都能使用和构建 AI。今日仍位列 Trending 但增速放缓，热度被更细分的基础设施项目分流。 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 148,082 | 自托管、对用户友好的 AI 对话界面，支持 Ollama、OpenAI API 等后端。是个人/团队私有化部署 AI 助手的事实标准 UI。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 101,925 | 利用 AI 大模型与自动化工作流，根据主题/关键词一键生成高清短视频。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 67,660 | 让 AI Agent 拥有「眼睛」——通过一个 CLI 零 API 费用读取/搜索 Twitter、Reddit、YouTube、GitHub、小红书等平台。 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 63,084 | 开源 AI 求职助手：扫描招聘网站、按 A-F 评分标准评估职位、定制简历、跟踪申请进度。本地运行于 Claude Code、Codex、OpenCode 等 AI 编码 CLI。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 60,269 | LLM 驱动的多市场股票智能分析系统，含多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 49,911 | AI 生产力工作室：智能聊天、自主 Agent、300+ 助手，统一接入前沿 LLM。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 43,537 | AI 将文档/主题转化为原生 PowerPoint 演示文稿，支持原生形状、过渡动画、数据图表、音频旁白与自定义模板。 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 54,413 | 2 小时从零训练 64M 参数小模型 LLM 的完整教程项目，是入门 LLM 预训练最知名的开源资源之一。 |
| [llm-jp/awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) | TypeScript | 1,424 | 日语 LLM 生态综述，覆盖模型、数据集、评测与部署资源。 |
| [chrisliu298/awesome-llm-unlearning](https://github.com/chrisliu298/awesome-llm-unlearning) |  | 617 | 大模型机器遗忘（unlearning）主题资源库，随隐私与版权合规需求增长而受关注。 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | Python | 316 | 基于 X-Bit 量化技术的端侧 LLM 推理库，主打设备端高效运行。 |
| [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) | Rust | 64 | 纯 Rust + Candle 从零构建的 decoder-only LLM，无 Python/PyTorch 依赖，支持 Gated DeltaNet、稀疏注意力、MoE 与量化感知训练，规模 25M～1.3B。 |
| [AIDASLab/Awesome-Diffusion-LLM](https://github.com/AIDASLab/Awesome-Diffusion-LLM) |  | 96 | 大语言扩散模型（Large-Language-Diffusion-Models）论文精选列表，追踪生成式 LLM 的前沿方向。 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 151,601 | 构建 Agentic 工作流与 RAG 流水线的一体化协作平台，支持丰富模型与工具接入。团队从原型到生产无需重构技术栈。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 103,546 | 将任意代码库（含文档、SQL Schema、PDF）转化为可查询知识图谱的 `/graphify` 技能，适配 Claude Code、Cursor、Codex 与 Gemini CLI。无需向量库，纯本地确定性 AST 解析。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 89,879 | 为每个 Agent 提供跨会话持久上下文：捕获会话内容 → AI 压缩 → 注入未来会话。支持 Claude Code、Codex、Gemini、Copilot、OpenCode 等。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 86,981 | 领先的开源 RAG 引擎，将 RAG 与 Agent 能力融合，为 LLM 构建高质量上下文层。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 62,716 | AI Agent 的通用记忆层，提供跨应用/跨会话的持久记忆能力。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,541 | 云原生高性能向量数据库，面向大规模向量 ANN 检索。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 33,819 | 高性能、大规模向量数据库与向量检索引擎，提供云端版本。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 29,835 | 开源 AI Agent 记忆平台：通过自托管知识图谱引擎为 Agent 提供跨会话长期记忆。 |

---

## 3. 趋势信号分析

今日榜单释放强烈信号：AI Agent 竞争焦点正从「能做什么」转向「如何规模化、长期化运行」。Skills 类项目集中爆发（3 个上榜、合计新增超 3,300 stars），说明社区正为编码 Agent 沉淀可复用技能，形成类似插件生态的「技能市场」；TencentDB-Agent-Memory、loopx 等记忆/状态内核项目则回应多 Agent 协作、断点续跑与知识复用的生产级刚需。Cloudflare 以「给 Agent 一台电脑」切入，标志云巨头开始定义 Agent 运行时抽象。此外，pdf-inspector 单日 +1,190 stars，与 graphify 等知识图谱项目共同指向「为 LLM 准备高质量上下文」的中间层机会。DeepSeek-Reasonix 走红亦表明，围绕特定开源模型的垂直 Agent 工具链正在形成，与 ollama 快速支持 Kimi-K2.6、GLM-5.2、gpt-oss 等新模型的动作互相印证——开源模型生态的快速迭代持续催生周边工具需求。

---

## 4. 社区关注热点

- **cloudflare/computer** — Cloudflare 亲自下场定义「Agent 的电脑」抽象层，云基础设施巨头入局意味着该方向将快速标准化，值得深入研究其架构设计与多租户方案。
- **Agent Skills 生态**（addyosmani/agent-skills、mattpocock/skills、obra/superpowers）— 三项目同日霸榜，「技能」正成为编码 Agent 能力扩展的标准单元，关注 `.agents` 目录约定与跨 CLI 工具（Claude Code、Codex、Cursor）的兼容性。
- **TencentCloud/TencentDB-Agent-Memory** — 云厂商首次系统性提出团队级 Agent 记忆资产模型（Chat Memory / Skill / LLM-Wiki / Code-Graph），对多 Agent 协作、组织级知识复用有示范意义。
- **esengine/DeepSeek-Reasonix** — 以 prefix-cache 稳定性为核心的长期驻留编码 Agent，代表「Agent 也要讲运维效率」的新思路，DeepSeek 生态工具链值得持续跟踪。
- **firecrawl/pdf-inspector** — PDF 智能路由是 RAG 与文档智能的刚需，Rust 实现的高性能处理库有望成为 Agent 文档管线的基础组件，建议关注其与 firecrawl 主项目的协同演进。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*