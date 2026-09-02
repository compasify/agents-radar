# AI 开源趋势日报 2026-09-02

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-02 00:29 UTC

---

# **AI 开源趋势报告 – 2026-09-02**

---

## **1. 今日亮点**

AI 开源生态正迎来以“代理为中心”的创新爆发，能够实现自主研究、编程和真实世界任务执行的项目迅速走红。值得注意的是，**K-Dense-AI/scientific-agent-skills** 与 **Imbad0202/academic-research-skills** 正在吸引广泛关注，它们将 AI 代理转变为科学合作者——提供经过验证的研究、写作与专利撰写工作流。与此同时，**THU-MAIC/OpenMAIC** 展示了沉浸式多代理学习环境的兴起，反映出对交互式、教育型 AI 系统日益增长的需求。像 **affaan-m/ECC** 与 **mem0ai/mem0** 这样的代理框架，以及 RAG 和记忆工具的高速成长，共同预示着一个专注于持久智能与上下文推理的成熟技术栈正在形成。

---

## **2. 按类别划分的顶级项目**

### 🤖 AI 代理 / 工作流

| 项目 | 语言 | 星标（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | Python | 912 (+912) | 一套包含 165+ 经验证技能的库，可将任意 AI 代理转化为“AI 科学家”。全球超过 19 万名科学家使用，兼容主流编码代理，支持药物发现、生物学与化学工作流。 |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 69,756 (+69,756) | 一款开源 AI 求职引擎，本地运行，通过 CLI 代理（如 Claude Code 与 Codex）扫描招聘平台、评分职位、定制简历并追踪申请状态。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 77,380 (+77,380) | 赋予 AI 代理全网视野——仅需一条 CLI 命令即可读取 Twitter、Reddit、YouTube、GitHub 等内容，无需支付任何 API 费用。 |
| [nanobot](https://github.com/HKUDS/nanobot) | Python | 47,620 (+47,620) | 超轻量级、自托管个人 AI 代理框架，支持 WebUI、记忆、MCP 与多代理工作流——非常适合希望实现极简且可扩展自动化的开发者。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 51,343 (+51,343) | 集成 300+ 助手、智能聊天与前沿大模型统一访问的 AI 生产力工作室——专为构建自主工作流的开发者设计。 |

### 🔍 RAG / 知识

| 项目 | 语言 | 星标（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 89,842 (+89,842) | 领先的开源 RAG 引擎，融合前沿检索能力与代理功能，为大模型构建更优的上下文层，支撑企业级知识系统。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 113,446 (+113,446) | 利用确定性 AST 解析，将代码库、文档、SQL 模式与 PDF 转化为可查询的知识图谱——无需向量存储，兼容 Cursor、Claude Code 等工具。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 92,907 (+92,907) | 通过 AI 压缩会话数据并注入相关历史记录，实现跨会话的持久上下文——兼容 Claude Code、Copilot、Gemini 等多种平台。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 68,330 (+68,330) | 在工具输出、日志与 RAG 数据块进入大模型前进行压缩，使令牌消耗减少 20%（编码场景）至 95%（JSON 场景），同时保持精度。 |
| [Cognee](https://github.com/topoteretes/cognee) | Python | 30,402 (+30,402) | 自托管 AI 记忆平台，基于知识图谱引擎实现持久的长期记忆——适用于需要跨会话召回的代理。 |

### 🧠 大语言模型 / 训练

| 项目 | 语言 | 星标（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 57,040 (+1005) | 仅用 2 小时即可从零训练一个 6400 万参数的大语言模型——让开发者可在无大规模基础设施的前提下探索小型模型训练。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,381 (+7,381) | OpenCompass 是一个全面的大模型评估平台，支持超过 100 个模型（如 Llama3、Qwen、Claude 等）在 100+ 数据集上的评测——对新兴模型的基准测试至关重要。 |
| [ScrapeGraphAI/Scrapegraph-ai](https://github.com/ScrapeGraphAI/Scrapegraph-ai) | Python | 30,345 (+30,345) | 基于 AI 的 Python 爬虫，能智能提取并结构化网页内容——非常适合用于训练数据收集与知识库构建。 |

### 🔧 AI 基础设施

| 项目 | 语言 | 星标（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 245,756 (+623) | 针对性能优化的代理框架：集成技能、直觉、记忆、安全机制与以研究为导向的开发流程——被广泛应用于 Claude Code、Codex、Cursor 与 Opencode。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 175,302 (+175,302) | 大规模网络交互的“上下文 API”——支持大规模爬取、搜索与基于 AI 的导航，赋能下一代代理工具链。 |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 179,921 (+179,921) | 简化 GLM-5.2、Qwen、DeepSeek、Gemma 等模型的本地部署——现已支持 Kimi-K2.6，使设备端大模型实验触手可及。 |

### 📦 AI 应用

| 项目 | 语言 | 星标（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | Python | 193 (+193) | 基于 Claude Code 的学术研究工作流框架：从文献综述到最终论文撰写——非常适合希望自动化学术写作的学生与研究人员。 |
| [handsomestWei/patent-disclosure-skill](https://github.com/handsomestWei/patent-disclosure-skill) | Python | 501 (+501) | 中文专利技能，支持挖掘发明点、起草披露文件、解读政策变化并辅助回应——弥合法律与技术类 AI 的需求鸿沟。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 51,147 (+51,147) | AI 可将文档或主题一键生成原生 PowerPoint 演示文稿，支持动画、图表、音频旁白与模板适配——完美适用于快速创建演示材料。 |

---

## **3. 趋势信号分析**

今日数据清晰揭示了一个重大转变：**自主、人机协同的 AI 代理**已成为开源 AI 领域的主导趋势。像 **K-Dense-AI/scientific-agent-skills**、**career-ops-hq/career-ops** 与 **Panniantong/Agent-Reach** 这类项目反映出社区正日益聚焦于“代理赋能”——不再局限于提示工程，而是推动 AI 在科研、求职、网络导航等多个领域独立行动。这一趋势与近期发布的大型语言模型（如 Qwen、DeepSeek、GLM-5.2）所强调的推理与工具调用能力高度契合，进一步激发了对高效利用这些能力的代理框架的需求。

一种新的技术栈正在浮现：**RAG + 记忆 + 工具调用 + 本地执行**。像 **Graphify-Labs/graphify**、**Cognee** 与 **thedotmack/claude-mem** 这类工具表明，社区正大力推动具备持久性与结构化的知识体系，使其突破会话边界——这正是当前大模型的核心短板。与此同时，**firecrawl/firecrawl** 与 **browser-use/browser-use** 显现出对“代理网络可达性”的日益重视，暗示未来的 AI 工作流将深度整合实时、动态的数据源。

尤为值得注意的是，**源自中国的项目**（如 **K-Dense-AI**、**THU-MAIC**、**handsomestWei/patent-disclosure-skill**）正获得全球关注，标志着创新中心已不再局限于西方枢纽。这既反映了亚洲地区开源生态的日益成熟，也体现了在专利、教育与科研等垂直领域对本地化 AI 解决方案的旺盛需求。

---

## **4. 社区热点**

- **[K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)** – 拥有超 19 万名用户与 165+ 经验证技能，是目前最成熟的科学领域代理技能库。非常适合研究人员与开发者构建基于 AI 的实验室助手。
- **[THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC)** – 一键启动的多代理课堂环境，代表了新一代由 AI 驱动的教育平台，提供沉浸式、互动式学习体验。
- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** – 作为“网络上下文 API”，它正成为任何需要实时数据的代理的基础组件。高采用率预示其将成为关键基础设施层。
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** – 实现了小模型训练前所未有的速度（6400 万参数仅需 2 小时）。对于探索轻量级模型微调与边缘部署的开发者而言，是必备工具。
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** – 一款性能优化的代理框架，被多个 IDE 广泛采用。其庞大的星标数量表明，它正成为代理工程领域的事实标准。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*