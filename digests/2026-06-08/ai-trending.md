# AI 开源趋势日报 2026-06-08

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-08 00:29 UTC

---

# AI 开源趋势日报 | 2026-06-08

---

## 第一步：AI 相关性过滤

**Trending 榜单筛选结果**（排除非 AI 项目）：

| 排除项目 | 排除原因 |
|---------|---------|
| [TapXWorld/ChinaTextbook](https://github.com/TapXWorld/ChinaTextbook) | 教育资源 PDF 仓库，无 AI 技术 |
| [HunxByts/GhostTrack](https://github.com/HunxByts/GhostTrack) | 定位追踪工具，与 AI 无关 |
| [refactoringhq/tolaria](https://github.com/refactoringhq/tolaria) | Markdown 知识库管理工具，通用效率工具 |

**保留 12 个 AI/ML 相关项目**，进入分类分析。

---

## 第二步：项目分类

### 🔧 AI 基础工具
- [opencv/opencv](https://github.com/opencv/opencv) · [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) · [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec) · [openai/plugins](https://github.com/openai/plugins) · [ollama/ollama](https://github.com/ollama/ollama) · [huggingface/transformers](https://github.com/huggingface/transformers) · [vllm-project/vllm](https://github.com/vllm-project/vllm)

### 🤖 AI 智能体/工作流
- [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) · [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) · [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) · [aaif-goose/goose](https://github.com/aaif-goose/goose) · [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) · [langgenius/dify](https://github.com/langgenius/dify) · [browser-use/browser-use](https://github.com/browser-use/browser-use) · [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) · [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) · [HKUDS/nanobot](https://github.com/HKUDS/nanobot) · [activepieces/activepieces](https://github.com/activepieces/activepieces)

### 📦 AI 应用
- [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) · [yikart/AiToEarn](https://github.com/yikart/AiToEarn) · [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) · [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) · [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) · [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) · [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) · [nocobase/nocobase](https://github.com/nocobase/nocobase)

### 🧠 大模型/训练
- [affaan-m/ECC](https://github.com/affaan-m/ECC) · [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) · [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) · [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) · [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) · [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining)

### 🔍 RAG/知识库
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) · [infiniflow/ragflow](https://github.com/infiniflow/ragflow) · [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · [mem0ai/mem0](https://github.com/mem0ai/mem0) · [run-llama/llama_index](https://github.com/run-llama/llama_index) · [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) · [milvus-io/milvus](https://github.com/milvus-io/milvus) · [qdrant/qdrant](https://github.com/qdrant/qdrant) · [topoteretes/cognee](https://github.com/topoteretes/cognee)

---

## 第三步：AI 开源趋势日报

---

## 1. 今日速览

今日 AI 开源领域呈现**"Agent 技能化"**爆发态势：Trending 榜单前三均为 AI Agent 技能/框架，单日新增 stars 均超 1100，显示开发者正从"搭 Agent"转向"打磨 Agent 的特定能力"。NousResearch 的 [Hermes Agent](https://github.com/NousResearch/hermes-agent) 以 185K 总 stars 登顶主题榜，印证社区对"可成长型 Agent"的高度期待。同时，**向量检索基础设施**持续升温，[turbovec](https://github.com/RyanCodrai/turbovec) 凭借 Rust 高性能实现单日斩获 1554 stars，而 [LEANN](https://github.com/StarTrail-org/LEANN) 提出的"无向量 RAG"（97% 存储节省）则代表了对传统向量数据库架构的颠覆性挑战。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec) | ⭐ 新上榜（+1554 today） | 基于 TurboQuant 的高性能向量索引，Rust 核心 + Python 绑定，今日增速全场最高，填补轻量级本地向量检索空白 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐173,495 | 本地大模型运行的事实标准，今日新增支持 Kimi-K2.6、GLM-5.1 等前沿模型，持续领跑模型分发基础设施 |
| [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) | ⭐ 高星（+158 today） | LLM 推理的 C/C++ 标杆，今日持续活跃，边缘部署场景不可替代 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐161,396 | 模型定义框架的绝对中心，多模态统一支持使其仍是研究到生产的首选路径 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | ⭐82,165 | 高吞吐推理引擎，生产级 LLM 服务的性能基线 |
| [openai/plugins](https://github.com/openai/plugins) | ⭐ 高星（+262 today） | OpenAI 插件体系今日回温，或预示 ChatGPT 生态扩展的新动作 |

---

### 🤖 AI 智能体/工作流

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐185,914（+1112 today） | "与你共同成长的 Agent"，今日 Trending + 主题榜双登顶，NousResearch 的社区号召力+长期迭代策略见效 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | ⭐ 新上榜（+1111 today） | 跨平台（Reddit/X/YouTube/HN/Polymarket）研究型 Agent 技能，"信息合成"能力精准切中知识工作者痛点 |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | ⭐ 新上榜（+1103 today） | 直击 AI 生成"平庸内容（slop）"的行业顽疾，以"品味"为差异化，代表 Agent 能力精细化的新方向 |
| [aaif-goose/goose](https://github.com/aaif-goose/goose) | ⭐ 新上榜（+322 today） | 超越代码建议的"全栈 Agent"——安装、执行、编辑、测试闭环，Rust 实现保障安全与性能 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐184,827 | Agent 运动的先驱，持续迭代中仍保持极高关注度 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐144,306 | 生产级 Agentic 工作流平台，企业落地的首选编排工具 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐97,636 | 让网站对 AI Agent 可访问，Web 自动化领域的核心基础设施 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | ⭐76,153 | AI 驱动开发（AI-Driven Development）的代表，代码生成到执行的全流程覆盖 |

---

### 📦 AI 应用

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) | ⭐ 新上榜（+554 today） | Notebook LM 的开源增强实现，"灵活性+功能扩展"直击 Google 产品封闭性痛点 |
| [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) | ⭐ 新上榜（+309 today） | 离线生存计算机集成 AI，极端场景（无网络/灾难）下的 AI 应用探索，差异化定位鲜明 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐47,026 | 300+ 助手的 AI 生产力工作室，国产开源客户端的标杆 |
| [nocobase/nocobase](https://github.com/nocobase/nocobase) | ⭐22,673 | AI + 无代码平台，"AI 在成熟基础设施上工作"而非从零生成，务实路线获认可 |
| [yikart/AiToEarn](https://github.com/yikart/AiToEarn) | ⭐ 新上榜（+183 today） | AI 变现工具集，切中开发者"技术→收入"的转化焦虑 |

---

### 🧠 大模型/训练

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐209,835 | "Agent 性能优化系统"——技能、本能、记忆、安全、研究优先开发，多 IDE/Agent 兼容，总 stars 全场最高 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | ⭐71,960 | 100+ LLM/VLM 统一高效微调，ACL 2024 背书，微调领域的事实标准 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐96,832 | 从零实现 ChatGPT 级 LLM，教育价值极高，持续吸引入门开发者 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | ⭐4,254 | Apple Silicon 上的 LLM 推理服务课程，"tiny vLLM + Qwen"组合瞄准边缘 AI 教育 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐7,555 | Rust 模块化 LLM 应用框架，系统级开发者的 LLM 基础设施新选择 |

---

### 🔍 RAG/知识库

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐82,114 | RAG + Agent 融合引擎，"深度文档理解"技术路线领先 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐81,114 | 跨会话持久化记忆，Claude Code/Codex 等 10+ Agent 兼容，解决 LLM 上下文断裂痛点 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐57,977 | 通用 AI Agent 记忆层，"记忆即服务"架构的先行者 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐49,979 | 文档 Agent + OCR 平台，RAG 生态的核心节点 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | ⭐11,888 | **无向量 RAG**，97% 存储节省 + 100% 隐私本地运行，对向量数据库范式构成直接挑战 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐17,716 | 6 行代码集成的 Agent 记忆平台，极低门槛的开发者体验 |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | ⭐58,000 | 混合搜索引擎，AI-powered 搜索的轻量替代方案 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) / [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐44,669 / ⭐31,899 | 云原生向量数据库双雄，企业级 ANN 搜索的基础设施 |

---

## 3. 趋势信号分析（298 字）

**Agent 技能化（Agent Skillzation）** 正成为今日最强劲的爆发信号。Trending 前三的 [last30days-skill](https://github.com/mvanhorn/last30days-skill)、[taste-skill](https://github.com/Leonxlnx/taste-skill)、[hermes-agent](https://github.com/NousResearch/hermes-agent) 共同指向一个范式转移：开发者不再满足于通用 Agent 框架，而是追求**可组合、可进化、有专长的 Agent 能力单元**。这与近期 Claude Code、Codex、Gemini CLI 等"编码 Agent"密集发布形成共振——基础设施就绪后，上层技能生态的繁荣是必然。

**新兴技术栈**方面，[turbovec](https://github.com/RyanCodrai/turbovec) 的 Rust+TurboQuant 组合和 [LEANN](https://github.com/StarTrail-org/LEANN) 的"无向量 RAG"值得高度关注。前者代表向量检索的**性能极致化**，后者则是对"万物皆向量"假设的**根本性质疑**——若推理型 RAG 能在 3% 存储成本下达到同等效果，向量数据库的市场逻辑将被重塑。

**行业关联**上，NousResearch、OpenClaw、Hermes 等"开源模型+开源 Agent"的垂直整合趋势明显，与 OpenAI/Anthropic 的封闭生态形成对冲。今日 [openai/plugins](https://github.com/openai/plugins) 的回温，或反映其在插件生态上的防御性动作。

---

## 4. 社区关注热点

- **🔥 [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) + [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) + [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)** — "Agent 技能化"三剑客同日爆发，标志着从框架竞争进入能力精细化阶段，建议关注 Skill 协议标准化机会

- **🔥 [RyanCodrai/turbovec](https://github.com/RyanCodrai/turbovec)** — Rust 实现的 TurboQuant 向量索引，1554 stars 单日增速全场第一，本地/边缘 AI 的检索基础设施正在重构

- **🔥 [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN)** — "无向量 RAG"挑战既定范式，97% 存储节省+100% 隐私，若经社区验证，将冲击 Milvus/Qdrant 等向量数据库的核心叙事

- **🔥 [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — 跨会话 Agent 记忆层获 81K stars，解决 LLM"金鱼记忆"痛点，与 mem0、cognee 共同构成"记忆基础设施"赛道

- **🔥 [aaif-goose/goose](https://github.com/aaif-goose/goose)** — Rust 全栈 Agent（安装-执行-编辑-测试），322 stars 首日表现稳健，系统编程语言+Agent 安全的组合具有长期竞争力

---

*报告生成时间：2026-06-08 | 数据来源：GitHub Trending & Search API*

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*