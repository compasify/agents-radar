# AI 开源趋势日报 2026-08-24

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-23 23:10 UTC

---

# AI 开源趋势日报（2026-08-24）

## 第一步：AI 相关性过滤

从 **Trending 榜单 18 个仓库**中筛除 5 个与 AI/ML 无关的项目：

| 已排除项目 | 原因 |
| :--- | :--- |
| basecamp/omarchy | Linux 桌面配置美化 |
| AprilNEA/OpenLogi | 罗技外设驱动替代 |
| block/buzz | 通信平台 |
| dani-garcia/vaultwarden | 密码管理服务器 |
| ripienaar/free-for-dev | 免费 SaaS 资源清单 |

主题搜索中同样排除了 Netdata（通用可观测性）、Julia（编程语言）、Apache Airflow（通用工作流）、OceanBase（通用数据库）等带 AI 标签但本质为通用基础设施的项目。**最终筛选出 AI 相关项目进入以下分类。**

---

## 第二步 & 第三步：分类结果与报告

### 1. 今日速览

今日开源社区的最大爆点是 **"Agent Skills"**：mattpocock/skills（+2,448）、book-to-skill（+423）、awesome-agent-skills（+223）等多个 skills 项目同日登榜，"技能即代码"正成为智能体工程的新范式。OpenAI 的终端编码代理 **codex** 以单日 +2,729 stars 领跑全榜，**free-claude-code**（+1,040）则以 1.3B+ 免费 token 直击 AI 编码成本痛点。**NousResearch/hermes-agent** 总星数高达 234,949 且今日再涨 +519，"会成长的 agent" 理念被社区热捧。RAG 赛道重心正从单纯向量检索转向记忆层与知识图谱：claude-mem、mem0、graphify 持续活跃。此外，Anthropic 官方插件市场 **claude-plugins-community** 上线，头部厂商围绕 Agent 生态的卡位战已打响。

---

### 2. 各维度热门项目

#### 🤖 AI 智能体 / 工作流

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [openai/codex](https://github.com/openai/codex) | Rust | —（+2,729） | OpenAI 出品的轻量终端编码代理。单日 +2,729 stars 登顶今日热榜，显示 OpenAI 将 coding agent 推向终端场景获得社区强烈反响。 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | —（+2,448） | 直接从个人 .agents 目录提炼的"真实工程师技能集"。单日 +2,448 stars，是 Agent Skills 生态爆发的最强信号。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 234,949（+519） | "与你一起成长"的智能体，主打记忆与自进化。总星数 234,949 且今日再登 Trending，是该理念的头部项目。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 242,532（+427） | Agent Harness 性能优化系统，将 skills、instincts、memory、security 一体打包。总星 242,532，是当前 agent 工程化的集大成者。 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | Python | —（+423） | 将任意技术书籍 PDF 转化为 Claude Code skill。单日 +423 stars，反映"知识即技能"的转化需求快速增长。 |
| [anthropics/claude-plugins-community](https://github.com/anthropics/claude-plugins-community) | Python | —（+257） | Anthropic 官方社区插件市场（只读镜像）。今日 +257 stars，标志 Claude 生态开始向插件化、市场化演进。 |
| [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) |  | —（+223） | 收录 1000+ 官方与社区 Agent Skills，兼容 Claude Code、Codex、Gemini CLI、Cursor 等。今日 +223 stars，是 skills 方向的导航站。 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | TypeScript | —（+134） | 多智能体 swarm 编排框架，支持自适应记忆、RAG 与 Claude Code/Codex/Hermes 集成。今日 +134 stars，多智能体协作持续升温。 |

#### 🔧 AI 基础工具（框架 / SDK / 推理引擎 / CLI）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code) | Python | —（+1,040） | 聚合 Claude Code、Codex、OpenCode 等工具并提供 1.3B+ 免费 token 的终端方案，且宣称 ToS-friendly。今日 +1,040 stars，是最受关注的 AI 编码成本替代方案。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 179,276 | 本地运行开源大模型的标准工具，已支持 Kimi-K2.6、GLM-5.2、gpt-oss 等最新模型。是本地推理基础设施的绝对头部。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 171,386 | 面向 LLM/Agent 的网页搜索、抓取与上下文 API。总星 171,386，是 RAG 与 Agent 数据管道的重要组件。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 164,374 | Hugging Face 模型定义、训练与推理框架。总星 164,374，是开源模型生态的事实标准接口。 |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 153,290 | 可视化 LLMOps/Agent 工作流平台，支持 RAG 与丰富模型/工具接入。总星 153,290，是团队从原型到生产的主流选择。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 144,841 | Agent 工程平台。总星 144,841，是构建 LLM 应用最广泛的中介层之一。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,560 | 动态神经网络框架。总星 102,560，是绝大多数开源模型训练与微调的基础框架。 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | Python | 89,806 | 高吞吐、内存高效的 LLM 推理与服务引擎。总星 89,806，支撑大量生产环境部署，持续受益于开源模型周更。 |

#### 📦 AI 应用（产品 / 垂直场景 / 资源平台）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | JavaScript | —（+440） | GPT-Image2 工业级提示词引擎与模板库，含 470+ 逆向案例、20+ 套模板。今日 +440 stars，体现多模态图像生成提示词工程化趋势。 |
| [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | Python | —（+179） | 最强大的模块化扩散模型 GUI、API 与后端。今日 +179 stars，仍是图像生成工作流的事实标准。 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | Rust | —（+106） | 个人 AI 超级智能：本地优先的生活记忆、agent 编排与深度研究。今日 +106 stars，是 "local-first + personal memory" 方向的新锐代表。 |
| [apache/maka](https://github.com/apache/maka) | TypeScript | —（+49） | Apache 孵化项目，本地优先的 AI Agent 工作区，以 append-only log 记录模型、工具调用与权限决策。今日 +49 stars，探索企业级 Agent 可审计性。 |
| [f/prompts.chat](https://github.com/f/prompts.chat) | HTML | 167,818 | 前 Awesome ChatGPT Prompts，社区提示词分享与自托管平台。总星 167,818，是提示词工程的基础资源库。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 149,680 | 友好的本地 LLM Web 界面，支持 Ollama/OpenAI API。总星 149,680，是自托管 AI 对话入口的热门选择。 |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Python | 133,721 | 100+ 开源 AI Agents、Agent Skills 与 RAG 应用合集。总星 133,721，是开发者寻找 AI 应用参考的最佳入口。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 115,270 | 利用 AI 大模型与自动化工作流一键生成高清短视频。总星 115,270，是 AIGC 内容生产方向的标杆应用。 |

#### 🔍 RAG / 知识库（向量数据库 / 检索增强 / 记忆层）

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 109,817 | 将代码库、文档、SQL 转化为可查询知识图谱，无向量库、纯确定性 AST 解析。总星 109,817，代表"图 + 确定性解析"对向量检索的替代叙事。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 91,608 | 捕获 agent 会话行为，用 AI 压缩并注入未来上下文，实现跨 session 持久记忆。总星 91,608，是 Agent 记忆层最热门工具之一。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 89,085 | 领先的开源 RAG 引擎，融合 Agent 能力构建 LLM 上下文层。总星 89,085，是企业级 RAG 的代表作。 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 65,111 | 本地优先的 All-in-One LLM 工作台，自带 RAG 与 Agent 能力。总星 65,111，"停止租用智能"的本地化理念广受认可。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 63,888 | AI Agent 的通用记忆层。总星 63,888，跨 session 记忆正成为 RAG 之后的新基础设施。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,824 | 领先的文档 Agent 与 OCR/检索框架。总星 51,824，是构建 RAG 应用的核心组件。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,751 | 云原生高性能向量数据库。总星 45,751，是向量检索基础设施的主要选择之一。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 34,147 | 高性能向量数据库与搜索引擎。总星 34,147，Rust 生态与云服务双线发展。 |

#### 🧠 大模型 / 训练（模型权重 / 训练框架 / 评测）

> 今日 Trending 中暂无模型训练/权重类项目登榜，本维度以主题搜索中 7 天活跃项目为主。

| 项目 | 语言 | Stars（总量 / 今日） | 简要说明 |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 54,945 | 从零训练 64M 参数 LLM 仅需 2 小时。总星 54,945，是最受欢迎的 LLM 入门与教学项目之一。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,330 | 开源大模型评测平台，支持 100+ 数据集与主流模型。总星 7,330，是模型横向对比的重要工具。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,512 | 面向系统工程师的 LLM 推理系统教学项目，在 Apple Silicon 上构建微型 vLLM + Qwen。总星 4,512，是"从零学推理"的好素材。 |
| [testtimescaling/testtimescaling.github.io](https://github.com/testtimescaling/testtimescaling.github.io) | HTML | 113 | "what, how, where, how well" 四维综述 Test-Time Scaling。总星 113，反映推理时扩展（test-time scaling）成为最新研究热点。 |
| [AIDASLab/Awesome-Diffusion-LLM](https://github.com/AIDASLab/Awesome-Diffusion-LLM) |  | 98 | 大型语言扩散模型（LLDM）论文精选列表。总星 98，持续跟踪 LLM 与扩散模型交叉的前沿方向。 |

---

### 3. 趋势信号分析

今日最明确的信号是 **Agent Skills 从概念走向工程化**：mattpocock/skills（+2,448）、book-to-skill（+423）、awesome-agent-skills（+223）同日登榜，ECC 等 harness 项目也将 skills 作为一等公民，"skill as code" 正成为新一代智能体组合基元。其次，**编码代理的免费化与本地化并行**：codex（+2,729）领跑热榜，free-claude-code 以 1.3B+ 免费 token 直击成本痛点。第三，**记忆层正取代纯向量检索成为 RAG 演进主线**：claude-mem、mem0、openhuman 均主打跨会话记忆与上下文注入，graphify 则用知识图谱挑战向量库范式。关联行业事件方面，ollama 已将 Kimi-K2.6、GLM-5.2 等新模型纳入本地运行，开源模型周更节奏加快，推理基座持续受益；Anthropic 官方插件市场 claude-plugins-community 上线，生态控制权竞争加剧。

---

### 4. 社区关注热点

- **openai/codex** — 单日 +2,729 stars 为全榜最高。OpenAI 将 coding agent 推向终端场景，轻量级架构与执行效率值得所有 agent 开发者深入拆解。
- **Agent Skills 生态（mattpocock/skills、book-to-skill、VoltAgent/awesome-agent-skills）** — 多个 skills 项目同日登榜，且 ECC 等 harness 已将其作为一等公民。技能的可组合、可复用与安全治理将是下一阶段焦点。
- **affaan-m/ECC** — 总星 242,532，将 skills、instincts、memory、security 全部纳入 agent harness 性能优化体系，是当前 agent 工程化方向的集大成者。
- **NousResearch/hermes-agent** — 总星 234,949、今日 +519，"agent that grows with you" 把记忆与自进化作为核心卖点，代表个人智能体的新叙事。
- **free-claude-code** — 今日 +1,040 stars；1.3B+ 免费 token、ToS-friendly 的多模型终端聚合方案，可能深刻改变个人开发者使用编码 agent 的成本结构。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*