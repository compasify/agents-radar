# AI 开源趋势日报 2026-03-30

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-30 00:57 UTC

---

# AI 开源趋势日报 | 2026-03-30

---

## 第一步：AI 相关性过滤

**Trending 榜单筛选结果**：12 个项目中，**10 个明确 AI 相关**，2 个非 AI 项目已排除：
- `fastfetch-cli/fastfetch`（系统信息工具）
- `twentyhq/twenty`（CRM 平台，通用 SaaS）

**主题搜索**：80 个项目均为 AI/ML 相关，全部保留。

---

## 第二步：多维度分类

| 项目 | 主要分类 | 次要分类 |
|:---|:---|:---|
| luongnv89/claude-howto | 🔧 AI 基础工具 | - |
| microsoft/VibeVoice | 📦 AI 应用 | 🧠 大模型/训练 |
| NousResearch/hermes-agent | 🤖 AI 智能体/工作流 | - |
| OpenBB-finance/OpenBB | 📦 AI 应用 | 🤖 AI 智能体/工作流 |
| obra/superpowers | 🤖 AI 智能体/工作流 | 🔧 AI 基础工具 |
| thedotmack/claude-mem | 🔧 AI 基础工具 | 🔍 RAG/知识库 |
| hacksider/Deep-Live-Cam | 📦 AI 应用 | 🧠 大模型/训练 |
| mvanhorn/last30days-skill | 🤖 AI 智能体/工作流 | 📦 AI 应用 |
| shareAI-lab/learn-claude-code | 🔧 AI 基础工具 | 🤖 AI 智能体/工作流 |
| moeru-ai/airi | 📦 AI 应用 | 🤖 AI 智能体/工作流 |
| AutoGPT, ollama, transformers, langchain, dify, open-webui 等 | （主题搜索项目按标签归类） | - |

---

## 第三步：完整报告

---

### 1. 今日速览

今日 AI 开源领域呈现**"Claude Code 生态爆发"**与**"Agent 基础设施下沉"**两大主线。Trending 榜单中 4 个项目直接围绕 Claude Code 构建工具链（教程、记忆插件、轻量复刻），反映开发者对 AI 编程助手的高度关注；同时，微软开源语音 AI 项目 VibeVoice、NousResearch 的 hermes-agent 等标志着多模态 Agent 与自主智能体进入实用化阶段。值得关注的是，"Agent 技能框架"（superpowers）和"跨平台研究 Agent"（last30days-skill）等新兴形态首次登榜，显示社区正从"对话式 AI"向"任务执行型 Agent"快速演进。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto) | 1,165 | +1,165 | **今日最热教程项目**：可视化、示例驱动的 Claude Code 完全指南，从基础概念到高级 Agent 模板，提供即插即用的代码片段。 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 42,668 | +919 | **"Bash is all you need"**：从零构建类 Claude Code 的 Agent  harness，揭示核心原理的极简实现，适合深入理解 Agent 架构。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 42,591 | +373 | Claude Code 会话记忆插件，自动捕获、压缩并注入历史上下文，解决 AI 编程助手"遗忘"痛点。 |
| [ollama/ollama](https://github.com/ollama/ollama) | 166,424 | - | 本地大模型运行的事实标准，已支持 Kimi-K2.5、GLM-5、DeepSeek 等最新模型。 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 74,643 | - | 高吞吐、内存高效的 LLM 推理引擎，生产环境部署首选。 |
| [langgenius/dify](https://github.com/langgenius/dify) | 134,914 | - | 生产级 Agent 工作流开发平台，可视化编排复杂 AI 流程。 |

#### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [obra/superpowers](https://github.com/obra/superpowers) | 2,230 | +2,230 | **今日新增 Stars 最高**：Agentic 技能框架与软件开发方法论，首次系统提出"Agent 原生开发"的工程实践体系。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 16,750 | +917 | "与你共同成长的 Agent"，强调长期记忆与持续学习能力，来自知名开源研究组织 NousResearch。 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 1,308 | +1,308 | **新兴 Agent 形态**：跨 Reddit、X、YouTube、HN、Polymarket 等平台的研究 Agent，自动合成 grounded 摘要，信息获取自动化新范式。 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 70,126 | - | AI 驱动的软件开发平台，可自主完成代码编写、测试、调试全流程。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 84,938 | - | 让网站对 AI Agent 可访问，浏览器自动化任务执行的基础设施。 |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | 21,481 | - | 集成 ~400 个 MCP 服务器的 AI 自动化平台，Agent 与工具生态的连接器。 |
| [trycua/cua](https://github.com/trycua/cua) | 13,325 | - | 计算机使用 Agent（Computer-Use Agent）的开源基础设施，支持 macOS/Linux/Windows 沙箱环境。 |

#### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice) | 1,056 | +1,056 | **微软开源语音 AI 前沿项目**：实时语音交互的完整解决方案，可能对标 GPT-4o 原生音频能力。 |
| [hacksider/Deep-Live-Cam](https://github.com/hacksider/Deep-Live-Cam) | 1132+ | +1,132 | 单图实时换脸与一键视频 deepfake 工具，技术门槛低但争议性高，反映生成式 AI 的民用化趋势。 |
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | 224 | +224 | **"自托管 Grok 伴侣"**：多模态 AI 角色容器，支持实时语音、Minecraft/Factorio 游戏互动，追求 Neuro-sama 级别的虚拟主播体验。 |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | 64,019 | +137 | 面向分析师、量化研究员和 AI Agent 的金融数据平台，垂直领域 Agent 化的代表。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 42,565 | - | AI 生产力工作室，集成 300+ 助手，统一接入前沿大模型。 |

#### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 158,531 | - | 最广泛使用的模型定义框架，覆盖文本、视觉、音频、多模态全场景。 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 69,214 | - | 统一高效微调 100+ LLM/VLM，ACL 2024 成果，微调工程的事实标准。 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 44,523 | - | 2 小时从零训练 64M 参数 GPT，大模型教育的极简实现。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 89,481 | - | 从零实现 ChatGPT 类 LLM，PyTorch 逐步教程，深度学习经典教材。 |

#### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 76,525 | - | 领先的开源 RAG 引擎，融合深度文档理解与 Agent 能力，构建 LLM 的卓越上下文层。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 51,397 | - | AI Agent 的通用记忆层，解决长期上下文与个性化问题。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 43,489 | - | 云原生高性能向量数据库，可扩展的 ANN 搜索基础设施。 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 48,116 | - | 领先的文档 Agent 与 OCR 平台，RAG 应用开发的核心工具。 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 14,765 | - | 6 行代码构建 AI Agent 记忆的知识引擎，极简集成方案。 |

---

### 3. 趋势信号分析

**爆发性关注类别**：**Claude Code 生态工具链**呈现井喷态势。Trending 榜单中 40% 项目直接围绕 Anthropic 的 Claude Code 构建——从教程（claude-howto）、记忆增强（claude-mem）到极简复刻（learn-claude-code），显示开发者对"AI 原生编程"的强烈需求。这与近期 Claude Code 在开发者社区的口碑爆发直接相关，社区正快速补齐工具链缺口。

**新兴技术栈/方向**：**"Agent 技能框架"**（superpowers）首次以方法论形态登榜，标志着 Agent 开发从"手工作坊"向"工程化"演进；**跨平台研究 Agent**（last30days-skill）整合社交媒体、预测市场、代码平台等多源信息，代表"信息获取 Agent"成为新赛道；**语音 AI 基础设施**（VibeVoice）则显示多模态交互从演示走向开源工程化。

**行业事件关联**：微软开源 VibeVoice 或对标 OpenAI GPT-4o 原生音频能力；NousResearch hermes-agent 的发布延续其在开源模型生态的影响力；Claude Code 生态的爆发与 Anthropic 近期在编码 Agent 领域的产品迭代高度同步。

---

### 4. 社区关注热点

- **🔥 [obra/superpowers](https://github.com/obra/superpowers)** — 今日新增 Stars 最高（+2,230），首次系统提出 Agentic 技能框架与软件工程方法论，可能定义下一代 AI 原生开发范式。

- **🔥 [microsoft/VibeVoice](https://github.com/microsoft/VibeVoice)** — 微软开源语音 AI 前沿项目，实时语音交互的完整解决方案，多模态 AI 基础设施的重要补充。

- **🔥 [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** — 跨平台研究 Agent 新形态，整合 Reddit/X/YouTube/HN/Polymarket 等多源信息，信息获取自动化的创新实践。

- **🔥 [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto)** — Claude Code 生态的"缺失手册"，可视化 + 即插即用模板，降低 AI 编程助手上手门槛。

- **🔥 [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)** — "从零构建 Agent harness"的极简实现，适合深入理解 Claude Code 核心架构，教育与工程价值兼具。

---

*报告生成时间：2026-03-30 | 数据来源：GitHub Trending & Search API*

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*