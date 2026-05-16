# AI 开源趋势日报 2026-05-16

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-05-16 00:20 UTC

---

# AI 开源趋势日报 | 2026-05-16

---

## 第一步：AI 相关性过滤

**Trending 榜单排除项**（非 AI 核心）：
- `influxdata/telegraf` — 通用数据采集代理，无 AI 特性
- `oven-sh/bun` — JavaScript 运行时，与 AI 无关

**保留 10 个 AI 相关项目**，全部进入分析。

---

## 第二步：多维分类

| 项目 | 主要分类 | 次要分类 |
|:---|:---|:---|
| tinyhumansai/openhuman | 🔧 AI 基础工具 | 🤖 AI 智能体/工作流 |
| obra/superpowers | 🤖 AI 智能体/工作流 | 🔧 AI 基础工具 |
| K-Dense-AI/scientific-agent-skills | 🤖 AI 智能体/工作流 | 📦 AI 应用 |
| supertone-inc/supertonic | 📦 AI 应用 | 🔧 AI 基础工具 |
| ruvnet/RuView | 📦 AI 应用 | 🔧 AI 基础工具 |
| anthropic/skills | 🤖 AI 智能体/工作流 | 🔧 AI 基础工具 |
| czlonkowski/n8n-mcp | 🤖 AI 智能体/工作流 | 🔧 AI 基础工具 |
| NVIDIA-AI-Blueprints/video-search-and-summarization | 📦 AI 应用 | 🤖 AI 智能体/工作流 |
| mattpocock/skills | 🤖 AI 智能体/工作流 | 🔧 AI 基础工具 |
| joeseesun/qiaomu-anything-to-notebooklm | 📦 AI 应用 | 🤖 AI 智能体/工作流 |

---

## 第三步：完整报告

---

### 1. 今日速览

今日 AI 开源领域呈现**"Agent 技能化"**爆发态势：Anthropic 官方 skills 仓库与社区 skills 项目同日高热，标志着 Agent 开发正从框架层下沉到可复用的技能原子层。边缘 AI 感知（RuView 的 WiFi 信号空间智能）与端侧 TTS（Supertonic）形成"无摄像头、无云端"的隐私计算双星。NVIDIA 视频分析 Blueprint 持续获关注，印证企业级视觉 Agent 需求升温。个人 AI 超智能（OpenHuman）与科学专用 Agent 技能集并起，AI 正从通用对话向**垂直场景深度渗透**。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 0 (+1271 today) | Rust 构建的本地个人 AI 超智能，强调隐私与极简，今日新增破千验证"本地优先"AI 基础设施需求 |
| [supertone-inc/supertonic](https://github.com/supertone-inc/supertonic) | 0 (+719 today) | Swift 原生 ONNX 多语言 TTS，端侧实时语音合成的性能标杆，边缘 AI 音频基础设施关键拼图 |
| [czlonkowski/n8n-mcp](https://github.com/czlonkowski/n8n-mcp) | 0 (+68 today) | 为 Claude Desktop/Cursor/Windsurf 等构建 n8n 工作流的 MCP 桥梁，AI Agent 与低代码自动化集成的连接器 |
| [NVIDIA-AI-Blueprints/video-search-and-summarization](https://github.com/NVIDIA-AI-Blueprints/video-search-and-summarization) | 0 (+308 today) | NVIDIA 官方 GPU 加速视觉 Agent 参考架构，企业级视频分析落地路径的权威蓝图 |

#### 🤖 AI 智能体/工作流

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [obra/superpowers](https://github.com/obra/superpowers) | 0 (+1648 today) | Agentic 技能框架与软件工程方法论，今日新增 Trending 榜首，"Agent 原生开发范式"正在形成 |
| [mattpocock/skills](https://github.com/mattpocock/skills) | 0 (+3132 today) | 工程师实战 skills 集合，直接来自 `.claude` 目录，社区 skills 共享运动的现象级爆发 |
| [anthropics/skills](https://github.com/anthropics/skills) | 0 (+689 today) | Anthropic 官方 Agent Skills 仓库，与社区 skills 项目形成共振，标志 skills 成为 Agent 生态标准件 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | 0 (+646 today) | 科研/金融/工程垂直领域即用型 Agent 技能集，Agent 专业化分工趋势的代表 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 51,546 | Claude 生态领先的 Agent 编排平台，多智能体集群与企业级工作流的核心基础设施 |

#### 📦 AI 应用

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 0 (+1859 today) | 将 WiFi 信号转化为空间智能、生命体征监测与存在检测，**无需任何摄像头**，隐私计算与感知 AI 的颠覆性融合 |
| [joeseesun/qiaomu-anything-to-notebooklm](https://github.com/joeseesun/qiaomu-anything-to-notebooklm) | 0 (+438 today) | Claude Skill 驱动的多源内容处理器，微信/YouTube/PDF → NotebookLM 播客/PPT/思维导图，内容消费 Agent 化 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 60,671 | 从零构建 nano Claude Code 的 Agent Harness，"Bash is all you need" 极简 Agent 工程教育标杆 |

#### 🔍 RAG/知识库

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 80,585 | RAG 与 Agent 能力融合的领先开源引擎，"上下文层"概念重新定义检索增强的边界 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 75,989 | 跨会话持久化记忆，AI 压缩与上下文注入，解决 Agent 长期记忆的核心痛点 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 55,802 | 通用 AI Agent 记忆层，"记忆即服务"架构成为 Agent 基础设施共识 |
| [safishamsi/graphify](https://github.com/safishamsi/graphify) | 48,360 | 代码/文档/多模态数据统一知识图谱化，RAG 从向量检索向图推理演进的关键工具 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 31,412 | "无向量、基于推理"的文档索引，挑战传统 RAG 架构，存储成本降低与准确性提升的新路径 |

#### 🧠 大模型/训练

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [ollama/ollama](https://github.com/ollama/ollama) | 171,474 | 本地大模型运行的事实标准，已支持 Kimi-K2.5、GLM-5、MiniMax 等最新模型，端侧模型生态枢纽 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 80,128 | 高吞吐内存高效 LLM 推理引擎，生产级 serving 的核心基础设施 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,179 | Apple Silicon 上的 vLLM+Qwen 迷你实现，LLM 推理系统教育的精品课程 |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | 230 | 可靠、极简、可扩展的基础模型预训练库，稳定预训练技术的工程化探索 |

---

### 3. 趋势信号分析（287 字）

**Agent Skills 原子化爆发**：今日 Trending 前三席中 skills 相关项目占据两席（superpowers +1648, mattpocock/skills +3132），叠加 Anthropic 官方 skills 仓库同步高热，表明 Agent 开发正经历从"框架搭建"到"技能组装"的关键跃迁。Skills 作为可复用、可共享、可组合的最小功能单元，正在取代传统插件/工具概念，成为 Agent 生态的标准件。

**无视觉感知 AI 崛起**：RuView 以 WiFi 信号实现空间智能与生命体征监测，无需摄像头即可完成存在检测与环境理解，代表隐私计算与感知 AI 的深度融合方向。这与欧盟 AI 法案对视觉监控的严格限制形成技术-政策共振。

**边缘-端侧闭环成型**：Supertonic（端侧 TTS）与 OpenHuman（本地个人 AI）同日登榜，配合 ollama 持续扩张的本地模型支持，"云端训练-边缘推理-端侧执行"的完整链路正在开源社区自发构建。

**Claude 生态锁定效应**：skills、mattpocock/skills、learn-claude-code、ruflo、claude-mem 等项目形成紧密的 Claude 技术栈集群，Anthropic 在 Agent 开发者心智中的主导地位进一步巩固。

---

### 4. 社区关注热点

- **🔥 Skills 即新 API**：mattpocock/skills 与 anthropic/skills 的共振表明，开发者正在将 `.claude` 目录中的私有实践转化为公共协议，Skills 市场可能复制 VS Code 插件生态的成功路径，建议提前布局技能标准化与分发基础设施。

- **🛡️ 零摄像头空间智能**：RuView 的 WiFi 感知技术路线对智能家居、养老监护、办公空间管理等场景具有颠覆性，建议关注 IEEE 802.11bf (WiFi Sensing) 标准进展与信号处理+AI 的交叉人才。

- **⚡ 推理优先的 RAG 革命**：PageIndex 提出的"无向量、基于推理"索引与 LEANN 的 97% 存储节省，标志 RAG 领域正从"嵌入竞赛"转向"推理效率竞赛"，向量数据库厂商需警惕架构颠覆风险。

- **🔬 科学 Agent 专业化**：scientific-agent-skills 的垂直分化预示 Agent 将从通用助手演进为领域专家系统，科研、金融、法律等知识密集型行业的 Agent 技能集将成为下一个竞争高地。

- **🌐 MCP 协议渗透加速**：n8n-mcp 将 MCP 接入低代码平台，activepieces 聚合 ~400 MCP 服务器，Model Context Protocol 正从 Claude 生态标准向跨平台 Agent 互操作基础设施演进，建议所有 AI 工具链评估 MCP 适配优先级。

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*