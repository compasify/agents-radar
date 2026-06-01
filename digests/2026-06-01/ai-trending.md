# AI 开源趋势日报 2026-06-01

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-01 00:26 UTC

---

# AI 开源趋势日报 | 2026-06-01

---

## 第一步：AI 相关性筛选

### Trending 榜单筛选结果（15→11）
| 保留项目 | 排除项目 | 排除理由 |
|---------|---------|---------|
| ✅ MoneyPrinterTurbo | ❌ github/docs | 通用文档平台 |
| ✅ markitdown | ❌ developer-portfolios | 开发者作品集列表 |
| ✅ Scrapling | ❌ build-your-own-x | 编程学习资源 |
| ✅ hermes-webui | | |
| ✅ compound-engineering-plugin | | |
| ✅ VoxCPM | | |
| ✅ harness | | |
| ✅ train-llm-from-scratch | | |
| ✅ supermemory | | |
| ✅ project-nomad | | |
| ✅ claude-code | | |
| ✅ pi-subagents | | |

> **注**：Scrapling 虽为通用爬虫框架，但明确标注"adaptive"及 AI 场景适配，予以保留。

---

## 第二步：分类体系

| 项目 | 主类别 | 次类别 |
|-----|--------|--------|
| claude-code | 🔧 AI 基础工具 | 🤖 AI 智能体/工作流 |
| markitdown | 🔧 AI 基础工具 | |
| compound-engineering-plugin | 🔧 AI 基础工具 | 🤖 AI 智能体/工作流 |
| pi-subagents | 🔧 AI 基础工具 | 🤖 AI 智能体/工作流 |
| harness | 🤖 AI 智能体/工作流 | |
| hermes-webui | 🤖 AI 智能体/工作流 | |
| project-nomad | 📦 AI 应用 | 🤖 AI 智能体/工作流 |
| MoneyPrinterTurbo | 📦 AI 应用 | |
| supermemory | 🔍 RAG/知识库 | 🤖 AI 智能体/工作流 |
| VoxCPM | 🧠 大模型/训练 | 📦 AI 应用 |
| train-llm-from-scratch | 🧠 大模型/训练 | |
| Scrapling | 🔧 AI 基础工具 | |

---

## 第三步：完整报告

---

# 1. 今日速览

**Agent 基础设施爆发**：今日 Trending 榜单中，Anthropic 官方 [claude-code](https://github.com/anthropics/claude-code) 持续高热（+489 stars），叠加 [compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin)、[harness](https://github.com/revfactory/harness) 等"Agent 编排层"项目集体登榜，标志着社区正从"单点 Agent 工具"向"系统化 Agent 工程平台"迁移。**终端原生 AI**成为明确趋势——Claude Code、Hermes Agent、OpenClaw 等 CLI 优先的交互范式正在重塑开发者工作流。同时，[VoxCPM](https://github.com/OpenBMB/VoxCPM) 以 635 日新增 stars 领跑语音大模型赛道，"Tokenizer-Free TTS"技术路线引发关注；[train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch) 则反映出"极简 LLM 训练"教育内容的持续刚需。

---

# 2. 各维度热门项目

## 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 今日新增 | 一句话说明 |
|-----|-------|---------|-----------|
| **[anthropics/claude-code](https://github.com/anthropics/claude-code)** | — | +489 | Anthropic 官方终端 Agent 工具，支持代码理解、Git 工作流自动化，定义了"自然语言驱动开发"的新标准 |
| **[microsoft/markitdown](https://github.com/microsoft/markitdown)** | — | +2798 | 微软开源的文档转 Markdown 工具，为 LLM 预处理管道提供标准化输入格式，今日增速全场最高 |
| **[EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin)** | — | +251 | 面向 Claude Code/Codex/Cursor 的复合工程插件，体现"IDE 即 Agent 平台"的集成趋势 |
| **[nicobailon/pi-subagents](https://github.com/nicobailon/pi-subagents)** | — | +69 | Pi 扩展的异步子 Agent 委托机制，解决长对话上下文截断与产物管理痛点 |
| **[D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling)** | — | +606 | 自适应爬虫框架，为 Agent 提供结构化网页数据获取能力，适配动态渲染与反爬场景 |
| **[ollama/ollama](https://github.com/ollama/ollama)** | 172,754 | — | 本地大模型运行事实标准，已支持 Kimi-K2.5、GLM-5、DeepSeek 等最新模型 |
| **[vllm-project/vllm](https://github.com/vllm-project/vllm)** | 81,506 | — | 高吞吐 LLM 推理引擎，生产级 Serving 的核心基础设施 |

---

## 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 今日新增 | 一句话说明 |
|-----|-------|---------|-----------|
| **[revfactory/harness](https://github.com/revfactory/harness)** | — | +323 | "元技能"框架：自动设计领域专属 Agent 团队并生成其技能集，代表 Agent 系统设计的更高阶抽象 |
| **[nesquena/hermes-webui](https://github.com/nesquena/hermes-webui)** | — | +357 | NousResearch Hermes Agent 的 Web/移动端界面，降低非技术用户接触开源 Agent 的门槛 |
| **[Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad)** | — | +374 | 离线生存计算机，集成 AI 的极端环境自治系统，拓展 Agent 应用的物理边界 |
| **[affaan-m/ECC](https://github.com/affaan-m/ECC)** | 200,580 | — | Agent 性能优化系统（技能/本能/记忆/安全）， stars 数居主题搜索首位，反映 Agent 工程化成熟度需求 |
| **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** | 174,676 | — | "与你共同成长的 Agent"，强调长期记忆与个性化进化 |
| **[langgenius/dify](https://github.com/langgenius/dify)** | 143,304 | — | 生产级 Agentic 工作流开发平台，可视化编排与代码级灵活性兼备 |
| **[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)** | 75,496 | — | AI 驱动软件开发，从需求到 PR 的端到端自主执行 |
| **[browser-use/browser-use](https://github.com/browser-use/browser-use)** | 96,428 | — | 让网站对 AI Agent 可访问，浏览器自动化的事实标准组件 |

---

## 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 今日新增 | 一句话说明 |
|-----|-------|---------|-----------|
| **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** | — | +1937 | 一键 AI 生成高清短视频，LLM 驱动内容生产的典型爆款应用 |
| **[OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM)** | — | +635 | Tokenizer-Free 多语言 TTS，支持创意语音设计与真实克隆，语音大模型技术路线突破 |
| **[supermemoryai/supermemory](https://github.com/supermemoryai/supermemory)** | — | +264 | 极速可扩展的 AI 记忆引擎，为 Agent 时代提供专用 Memory API |
| **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** | 81,277 | — | 多 Agent LLM 金融交易框架，垂直领域多智能体协作的复杂场景验证 |
| **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** | 22,930 | — | 文档→可编辑 PPT + 语音旁白，AI 办公自动化的深度集成案例 |

---

## 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 今日新增 | 一句话说明 |
|-----|-------|---------|-----------|
| **[FareedKhan-dev/train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch)** | — | +626 | 从零训练 LLM 的极简教程，64M 参数完整流程，教育内容持续高关注 |
| **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** | 50,896 | — | 2 小时从零训练 64M 参数 LLM，中文社区现象级 LLM 教育项目 |
| **[huggingface/transformers](https://github.com/huggingface/transformers)** | 161,125 | — | 模型定义框架事实标准，覆盖文本/视觉/音频/多模态全栈 |
| **[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)** | 71,736 | — | 100+ LLM/VLM 统一高效微调，ACL 2024 成果的产业转化 |
| **[0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)** | 7,475 | — | Rust 生态模块化 LLM 应用构建框架，系统级语言的高性能推理方案 |
| **[open-compass/opencompass](https://github.com/open-compass/opencompass)** | 7,048 | — | 覆盖 100+ 数据集的 LLM 评测平台，模型选型的基础设施 |

---

## 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 今日新增 | 一句话说明 |
|-----|-------|---------|-----------|
| **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** | 81,604 | — | RAG + Agent 融合引擎，"为 LLM 提供卓越上下文层"的领先开源方案 |
| **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** | 79,900 | — | 跨会话持久化上下文，AI 压缩后注入未来会话，解决 Agent 记忆断层痛点 |
| **[mem0ai/mem0](https://github.com/mem0ai/mem0)** | 57,216 | — | 通用 AI Agent 记忆层，跨平台记忆共享的标准化尝试 |
| **[safishamsi/graphify](https://github.com/safishamsi/graphify)** | 57,349 | — | 代码/文档/多媒体→可查询知识图谱，多源异构数据的统一语义化方案 |
| **[milvus-io/milvus](https://github.com/milvus-io/milvus)** | 44,558 | — | 云原生高性能向量数据库，可扩展 ANN 搜索的基础设施 |
| **[qdrant/qdrant](https://github.com/qdrant/qdrant)** | 31,707 | — | 大规模向量搜索引擎，下一代 AI 的存储底座 |
| **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** | 32,369 | — | "无向量、基于推理的 RAG"文档索引，挑战传统 Embedding 检索范式 |

---

# 3. 趋势信号分析

**Agent 基础设施层进入"堆栈化"爆发期**。今日 Trending 中，[claude-code](https://github.com/anthropics/claude-code)、[compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin)、[harness](https://github.com/revfactory/harness)、[pi-subagents](https://github.com/nicobailon/pi-subagents) 形成清晰的"终端 Agent → 插件扩展 → 团队编排 → 子 Agent 委托"四层架构，表明社区正在构建**可组合、可扩展的 Agent 操作系统**，而非停留于单一聊天界面。这与 Anthropic 近期 MCP（Model Context Protocol）生态扩张、Claude 4 系列模型发布形成直接呼应——模型能力突破倒逼工具链升级。

**"Tokenizer-Free"成为语音/多模态新范式**。[VoxCPM](https://github.com/OpenBMB/VoxCPM) 的登榜并非孤立事件：跳过传统文本 Tokenizer、直接在连续信号空间建模，正从研究概念走向工程实现，可能重塑 TTS/语音克隆的延迟与质量权衡。

**教育型 LLM 项目持续验证"极简主义"需求**。[train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch)（+626）与 [minimind](https://github.com/jingyaogong/minimind)（50K+ stars）共同证明：在模型规模竞赛之外，"可理解、可复现、低成本"的训练教程具有极强的社区穿透力，这或许是应对 AI 黑箱焦虑的集体心理投射。

---

# 4. 社区关注热点

- **🔥 [markitdown](https://github.com/microsoft/markitdown)（+2798 今日 stars）** — 微软低调开源的文档转换工具，看似基础实则关键：为 RAG/Agent  pipeline 提供**标准化、无损的输入预处理**，可能成为 LLM 应用的新"基础设施依赖"

- **🔥 [harness](https://github.com/revfactory/harness)（+323）** — "元技能"设计领域 Agent 团队的概念极具前瞻性，将 [ECC](https://github.com/affaan-m/ECC) 的"性能优化"抽象升级为"组织架构自动化"，预示 **Agent 系统设计的下一波创新：从单体智能到组织智能**

- **🔥 [VoxCPM](https://github.com/OpenBMB/VoxCPM)（+635）** — Tokenizer-Free TTS 的技术路线若获验证，将直接冲击 ElevenLabs 等闭源方案的市场地位，**开源语音大模型的"LLaMA 时刻"或将来临**

- **🔥 [supermemory](https://github.com/supermemoryai/supermemory)（+264）** 与 **[claude-mem](https://github.com/thedotmack/claude-mem)**（79.9K stars）— 记忆层从"功能特性"进化为**独立基础设施品类**，"Memory API for the AI era"的定位精准卡位 Agent 长期运行痛点

- **🔥 [project-nomad](https://github.com/Crosstalk-Solutions/project-nomad)（+374）** — 离线自治 AI 计算机的极端场景设计，拓展了 Agent 应用的**物理边界与韧性需求**，与边缘 AI、主权 AI 的政治叙事形成共振

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*