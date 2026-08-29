# AI 开源趋势日报 2026-08-29

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-29 03:50 UTC

---

# **AI 开源趋势报告**  
*日期：2026-08-29*

---

## **1. 今日亮点**

当前的 AI 开源生态正迎来以“代理为中心”的工具链爆发式增长，框架与技能库主导了今日的趋势榜单。值得注意的是，**K-Dense-AI/scientific-agent-skills** 以 +720 颗星的惊人涨幅迅速崛起，已成为科学 AI 代理的事实标准，拥有 163 项经验证的技能，并已集成至主流编码助手。**OpenMontage**（新增 1,144 颗星）的兴起标志着人们对智能体视频制作的兴趣日益浓厚，而 **archify** 与 **screenshot-to-code** 则凸显出从视觉到代码抽象以及可验证 AI 工作流的转变趋势。与此同时，**RAG**、**向量数据库** 和 **LLM 编排工具** 在话题搜索中的持续主导地位，也再次印证了具备知识感知与上下文丰富性的 AI 系统仍是当前工程的核心焦点。

---

## **2. 按类别划分的顶级项目**

### 🤖 AI 代理 / 工作流

| 项目 | 语言 | 星标（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | Python | 0 (+720) | 科学领域排名第一的代理技能库，被超过 17.5 万名研究人员使用。提供 163 项经验证技能和 100 多个科学数据库——可将任意 AI 代理快速转变为 AI 科学家。 |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | Python | 0 (+1,144) | 全球首个开源智能体视频生成系统。包含 12 条流水线、700+ 代理技能，并与 AI 编码助手深度集成——可将提示词转化为专业级视频内容。 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 0 (+76,377) | 为 AI 代理赋予“视觉”能力，可通过命令行浏览 Twitter、Reddit、YouTube、GitHub 等网络资源。零 API 费用，单命令操作，具备极强扩展性。 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | Python | 0 (+46,712) | 轻量级、自托管的 AI 代理框架，支持记忆功能与多模型协作，一键安装。通过任务与工具不断进化——非常适合个人自动化场景。 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Python | 0 (+47,507) | 超轻量级、自托管的个人 AI 代理，配备 WebUI、MCP、多代理工作流与终端访问功能。专为持续运行且低开销设计。 |

### 🔍 RAG / 知识

| 项目 | 语言 | 星标（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 112,046 | 利用本地 AST 解析将代码库与文档转化为可查询的知识图谱——无需向量存储。真正确定性的 RAG 替代方案，边关系可解释。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 89,545 | 领先的开源 RAG 引擎，融合检索与代理能力。使 LLM 能够在大规模场景下对复杂结构化数据进行推理。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 92,526 | AI 代理的持久上下文层——压缩会话历史并注入相关过往上下文。兼容 Claude Code、Copilot、Gemini 等多种平台。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 64,280 | AI 代理的通用记忆层。支持跨会话的长期、持久记忆——对代理行为演化至关重要。 |
| [Cognee](https://github.com/topoteretes/cognee) | Python | 30,330 | 自托管 AI 记忆平台，内置知识图谱引擎。使代理能够在交互中保留并检索上下文知识。 |

### 🔧 AI 基础设施

| 项目 | 语言 | 星标（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | JavaScript | 0 (+4,562) | 从代码生成美观、可验证的架构图——自包含 HTML，支持动画与清晰导出。适用于文档编写与团队对齐。 |
| [freestylefly/awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) | JavaScript | 0 (+1,687) | GPT-Image2 的工业级“提示即代码”引擎。包含 530+ 反向工程案例、20+ 模板与可复用技能——显著加速图像生成工作流。 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 243,990 | 优化 Claude Code、Codex、Cursor、Opencode 等平台性能、安全、内存与本能的代理封装系统。专为高风险 AI 开发打造。 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | Go | 101,651 | Claude Code 技能插件，通过简化语言将令牌消耗减少 65%——“像原始人一样说话”。证明极简主义可提升效率与降低成本。 |

### 📦 AI 应用

| 项目 | 语言 | 星标（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 118,203 | AI 驱动的视频生成器，可根据关键词或主题自动生成高清短视频——全流程自动化，零成本，适合内容创作者。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 50,057 | 将文档或主题自动转换为原生 PowerPoint 演示文稿，支持动画、图表、过渡效果与语音旁白——专为真实场景演示设计。 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 64,220 | 基于 LLM 的股票分析系统，整合新闻、市场数据、决策仪表盘与自动推送通知——可零成本定时运行。 |

### 🧠 LLM / 训练

| 项目 | 语言 | 星标（总计 / 今日） | 摘要 |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 179,673 | 支持本地运行 Kimi-K2.6、GLM-5.2、Qwen、Gemma、DeepSeek 等模型。一键部署，适用于实验与生产环境。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 173,688 | 用于大规模网页抓取与搜索的上下文 API。使 AI 代理可在无速率限制条件下获取实时互联网数据。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 103,962 | 逐步实现类 ChatGPT 的 LLM（从注意力机制到训练过程）的 PyTorch 教程。适用于教育与科研。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,373 | 全面的 LLM 评估平台，支持 100+ 模型与数据集，包括 GPT-4、Llama3、Mistral、Claude 等——对基准测试至关重要。 |

---

## **3. 趋势信号分析**

今日的趋势揭示出一个明确的转向：**以代理为中心、工作流优先的 AI 开发模式**。诸如 *K-Dense-AI/scientific-agent-skills*、*OpenMontage* 与 *Panniantong/Agent-Reach* 等项目的激增表明，开发者已不再满足于孤立的 LLM 调用，而是追求能够跨领域执行复杂多步任务的自主型、多阶段智能体。这一趋势与近期行业动态高度契合：Anthropic 扩展其插件生态系统、Cursor 使用率上升，以及 *ECC* 与 *CowAgent* 中广泛出现的“代理封装”模式。

一种新的技术栈正在形成：**RAG + 代理记忆 + 视觉/代码抽象 + 模块化技能**。*Graphify*、*Caveman* 与 *Archify* 等工具代表了从纯推理向**结构化、可解释的 AI 工作流**的转变。这些并非简单的模型封装——它们是能管理状态、减少令牌浪费并提升可验证性的系统。

此外，*prompt-as-code* 类仓库如 *awesome-gpt-image-2* 的爆炸式增长，预示着**可复用、工业级提示工程**正趋于成熟——这标志着 AI 工具链正从新奇概念迈向生产就绪阶段。代理技能、持久记忆与领域特定知识（如科学、金融、视频）的融合，指向一个未来：AI 不再是单一模型，而是一个协同运作、自我进化的工具与记忆系统。

---

## **4. 社区热点**

- **[K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)** — 科学家的权威技能库；适合构建 AI 驱动发现流程的研究人员。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — 提供确定性、可解释的向量驱动 RAG 替代方案——对企业级 AI 的可审计性与可信度至关重要。
- **[OpenMontage](https://github.com/calesthio/OpenMontage)** — 首个同类开源智能体视频工作室；适合创作者、营销人员与教育者自动化内容生产。
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** — 性能、安全与本能优化的首选代理封装系统——对稳健的 AI 工作流至关重要。
- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** — 使 AI 代理可大规模交互实时网络数据——实现实时智能与动态决策的关键。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*