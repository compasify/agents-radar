# AI 开源趋势日报 2026-05-13

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-05-13 00:24 UTC

---

# AI 开源趋势日报 | 2026-05-13

---

## 第一步：AI 相关性过滤

**Trending 榜单筛选结果**（排除非 AI 项目）：
| 保留项目 | 排除项目 | 排除原因 |
|---------|---------|---------|
| tinyhumansai/openhuman | CloakHQ/CloakBrowser | 反检测浏览器，通用安全工具 |
| rohitg00/agentmemory | apernet/hysteria | 网络代理工具，与 AI 无关 |
| millionco/react-doctor | mattpocock/skills | 工程师技能清单，非技术项目 |
| rasbt/LLMs-from-scratch | anonfaded/FadCam | Android 录像工具，通用应用 |
| datawhalechina/hello-agents | | |
| yikart/AiToEarn | | |
| HKUDS/AI-Trader | | |

> **注**：`mattpocock/skills` 虽含 `.claude` 字样，但实质为工程师软技能清单，非 AI 技术项目，予以排除。

---

## 第二步：多维度分类

| 项目 | 主要类别 | 次要类别 |
|-----|---------|---------|
| tinyhumansai/openhuman | 🔧 AI 基础工具 | 🤖 AI 智能体 |
| rohitg00/agentmemory | 🤖 AI 智能体/工作流 | 🔍 RAG/知识库 |
| millionco/react-doctor | 🔧 AI 基础工具 | |
| rasbt/LLMs-from-scratch | 🧠 大模型/训练 | |
| datawhalechina/hello-agents | 🧠 大模型/训练 | 🤖 AI 智能体 |
| yikart/AiToEarn | 📦 AI 应用 | 🤖 AI 智能体 |
| HKUDS/AI-Trader | 📦 AI 应用 | 🤖 AI 智能体 |
| NousResearch/hermes-agent | 🤖 AI 智能体/工作流 | |
| shareAI-lab/learn-claude-code | 🔧 AI 基础工具 | 🤖 AI 智能体 |
| ruvnet/ruflo | 🤖 AI 智能体/工作流 | |
| CherryHQ/cherry-studio | 📦 AI 应用 | 🤖 AI 智能体 |
| zhayujie/CowAgent | 🤖 AI 智能体/工作流 | 📦 AI 应用 |
| langgenius/dify | 🤖 AI 智能体/工作流 | 🔍 RAG/知识库 |
| open-webui/open-webui | 🔧 AI 基础工具 | 🔍 RAG/知识库 |
| ollama/ollama | 🔧 AI 基础工具 | 🧠 大模型/训练 |
| vllm-project/vllm | 🔧 AI 基础工具 | 🧠 大模型/训练 |
| huggingface/transformers | 🧠 大模型/训练 | 🔧 AI 基础工具 |
| jingyaogong/minimind | 🧠 大模型/训练 | |
| milvus-io/milvus | 🔍 RAG/知识库 | |
| qdrant/qdrant | 🔍 RAG/知识库 | |
| mem0ai/mem0 | 🔍 RAG/知识库 | 🤖 AI 智能体 |
| infiniflow/ragflow | 🔍 RAG/知识库 | 🤖 AI 智能体 |

---

## 第三步：完整报告

---

### 1. 今日速览

今日 AI 开源领域呈现**"智能体基础设施"爆发态势**：AI 编码助手的**持久化记忆**成为核心痛点，`agentmemory` 与 `claude-mem` 等记忆层项目获巨量关注；**轻量级个人 AI 助手**赛道涌现新玩家，`openhuman` 以 Rust 实现强调隐私与本地化的超级智能体；**AI 金融交易**方向持续火热，`AI-Trader` 与 `TradingAgents` 代表"Agent-Native"垂直应用成熟化。同时，中国开发者社区在智能体教育（`hello-agents`）和零成本股票分析（`daily_stock_analysis`）方向表现活跃。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具

| 项目 | Stars | 今日新增 | 一句话说明 |
|-----|-------|---------|-----------|
| [mattpocock/skills](https://github.com/mattpocock/skills) | — | +3,867 | **已排除**：工程师软技能清单，非 AI 技术项目 |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 0 | **+1,014** | Rust 构建的个人 AI 超级智能体，主打私有化部署与极简架构，对标 OpenAI 生态的本地替代方案 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 60,037 | — | 从零构建类 Claude Code 的 Agent  harness，"Bash is all you need" 的极简主义实践教程 |
| [ollama/ollama](https://github.com/ollama/ollama) | 171,283 | — | 本地大模型运行的事实标准，今日已支持 Kimi-K2.5、GLM-5 等前沿模型 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 79,803 | — | 高吞吐 LLM 推理引擎，生产级 Serving 的核心基础设施 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 136,802 | — | 最友好的本地 AI 界面，Ollama + OpenAI API 的统一入口 |
| [millionco/react-doctor](https://github.com/millionco/react-doctor) | 0 | **+788** | AI 生成 React 代码的实时质量检测工具，填补"AI 编码 → 代码审查"的空白环节 |

#### 🤖 AI 智能体/工作流

| 项目 | Stars | 今日新增 | 一句话说明 |
|-----|-------|---------|-----------|
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 0 | **+1,048** | 基于真实基准测试的 AI 编码 Agent 持久化记忆方案，解决多会话上下文丢失的行业痛点 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 146,851 | — | Nous Research 的"成长型"智能体，强调与用户共同进化的长期记忆架构 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 49,740 | — | Claude 生态领先的 Agent 编排平台，支持多智能体 Swarm 与自学习集群 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 44,375 | — | 国产"超级 AI 助理"，集成微信/飞书/钉钉等多平台，比 OpenClaw 更轻量的企业数字员工方案 |
| [langgenius/dify](https://github.com/langgenius/dify) | 141,126 | — | 生产级 Agentic 工作流开发平台，从 RAG 到复杂多步 Agent 的完整工程化方案 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 42,278 | — | 港大出品的超轻量级个人 AI Agent，"极简主义"智能体的新标杆 |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | 22,164 | — | 集成 ~400 个 MCP 服务器的 AI 自动化平台，MCP 生态的关键节点 |

#### 📦 AI 应用（垂直场景）

| 项目 | Stars | 今日新增 | 一句话说明 |
|-----|-------|---------|-----------|
| [yikart/AiToEarn](https://github.com/yikart/AiToEarn) | 0 | **+1,282** | "用 AI 赚钱"的实战聚合平台，瞄准 AI 变现的开发者经济赛道 |
| [HKUDS/AI-Trader](https://github.com/HKUDS/AI-Trader) | 0 | **+229** | 港大推出的"100% 全自动化 Agent-Native 交易"系统，金融 AI 的端到端闭环 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 45,524 | — | 300+ 助手的 AI 生产力工作室，统一接入前沿 LLM 的"瑞士军刀" |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 35,591 | — | LLM 驱动的 A/H/美股智能分析，零成本定时运行，"白嫖经济学"的极致实践 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 74,398 | — | 多智能体 LLM 金融交易框架，投研 → 决策 → 执行的 Agent 协作范式 |

#### 🧠 大模型/训练

| 项目 | Stars | 今日新增 | 一句话说明 |
|-----|-------|---------|-----------|
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 93,761 | **+772** | 经典 PyTorch 手搓 ChatGPT 教程持续高热，LLM 原理教育的"圣经级"项目 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 49,606 | — | 2 小时从零训练 64M 参数 LLM，大模型教育的"极速入门"标杆 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 160,536 | — | 模型定义框架的事实标准，文本/视觉/音频/多模态的统一基础设施 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 7,251 | — | Rust 生态的模块化 LLM 应用框架，系统级语言构建高性能 AI 的新选择 |

#### 🔍 RAG/知识库

| 项目 | Stars | 今日新增 | 一句话说明 |
|-----|-------|---------|-----------|
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 75,219 | — | 跨会话持久化上下文捕获，Claude Code/Codex/Gemini 等全兼容的"记忆中间件" |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 55,523 | — | AI Agent 的通用记忆层，从个性化到长期学习的记忆基础设施 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 80,360 | — | RAG + Agent 融合引擎，"深度文档理解"的下一代检索增强方案 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 44,256 | — | 云原生高性能向量数据库，规模化 ANN 搜索的基础设施 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 31,264 | — | Rust 构建的高性能向量搜索引擎，下一代 AI 的向量基础设施 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 30,845 | — | "无向量、基于推理"的 RAG 文档索引，挑战传统 Embedding 检索的新范式 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 17,199 | — | 6 行代码实现的 AI Agent 记忆控制平面，记忆管理的极致简化 |

---

### 3. 趋势信号分析

**爆发性关注类别：AI Agent 的"记忆层"与"持久化上下文"**。今日 `agentmemory`（+1,048）、`claude-mem`（75K stars）、`mem0`（55K stars）共同指向一个核心痛点：当前 AI 编码助手（Claude Code、Codex、Cursor 等）的会话隔离导致知识无法累积，开发者迫切需要**跨会话的记忆基础设施**。这标志着 Agent 生态从"单次对话智能"向"长期演进智能"的关键跃迁。

**新兴技术栈/方向**：**Rust 在 AI 基础设施的渗透加速**——`openhuman`（个人 AI）、`qdrant`（向量搜索）、`rig`（LLM 框架）均以 Rust 构建，强调性能、安全与私有化部署；**"Agent-Native"垂直应用**首次明确出现（`AI-Trader` 的 100% 全自动交易），预示 Agent 从通用工具向端到端闭环解决方案进化。

**行业事件关联**：Claude 4 / Gemini 2.5 Pro 等模型的长上下文能力发布，反而凸显了**"长上下文 ≠ 长期记忆"**的架构缺陷，催生记忆层项目的爆发；同时，MCP（Model Context Protocol）生态的扩张（`activepieces` 集成 ~400 服务器）表明标准化工具调用已成为 Agent 互操作性的关键。

---

### 4. 社区关注热点

- **🔥 Agent 记忆层成为新战场**  
  `agentmemory` + `claude-mem` + `mem0` 形成"记忆三剑客"，解决 Claude Code/Codex 等工具的多会话失忆问题，预计将成为 AI IDE 的标准组件

- **🔥 轻量级本地 AI 助手替代云端方案**  
  `openhuman`（Rust，+1,014）与 `nanobot`（港大，42K stars）代表"去 OpenAI 化"趋势，隐私优先 + 极简架构的个人智能体挑战 ChatGPT 生态

- **🔥 AI 金融交易的端到端闭环成熟**  
  `AI-Trader`（229 today）+ `TradingAgents`（74K）+ `daily_stock_analysis`（35K）形成"投研-决策-执行"完整链条，Agent-Native 金融应用进入可部署阶段

- **🔥 中国开发者社区的 Agent 教育普惠**  
  `hello-agents`（DataWhale，+599 today，48K total）与 `minimind`（49K）代表"从零开始"的本土化 AI 教育路径，降低智能体开发门槛

- **🔥 "无向量 RAG"挑战传统检索范式**  
  `PageIndex`（30K）提出基于推理的文档索引，可能颠覆 Embedding + Vector DB 的主流架构，值得技术决策者关注

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*