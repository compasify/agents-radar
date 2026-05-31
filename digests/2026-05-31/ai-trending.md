# AI 开源趋势日报 2026-05-31

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-05-31 00:26 UTC

---

# AI 开源趋势日报 | 2026-05-31

---

## 第一步：AI 相关性过滤

从 Trending 榜单 19 个项目中，排除以下非 AI 项目：
- `chen08209/FlClash`（代理工具）、`codecrafters-io/build-your-own-x`（编程教程）、`DataTalksClub/data-engineering-zoomcamp`（数据工程课程）

保留 **16 个 AI/ML 相关项目**，与 81 个主题搜索项目合并去重后，共 **89 个有效项目**。

---

## 第二步：多维分类

---

## 第三步：完整报告

### 1. 今日速览

今日 AI 开源领域呈现**"Agent 基础设施"爆发态势**：Anthropic 的 `claude-code` 持续高热，围绕其生态的"Agent Harness"（ECC、harness）和插件体系（Compound Engineering）集体登榜，标志着终端 AI 编程助手正从单点工具向**可扩展、可定制、可协作的平台化架构**演进。同时，语音合成领域出现 `VoxCPM`、`MOSS-TTS` 双星并起，开源 TTS 正追赶商业产品。文档解析工具 `liteparse` 和 `markitdown` 的高增长，则反映出多模态 RAG 对**高质量文档预处理**的刚性需求。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | — | +592 | Anthropic 官方终端 AI 编程助手，支持自然语言执行代码理解、编辑与 Git 工作流，今日持续高热 |
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | — | +2470 | 微软官方文档转 Markdown 工具，为 RAG/Agent 提供标准化文本输入，今日增速全榜第二 |
| [run-llama/liteparse](https://github.com/run-llama/liteparse) | — | +925 | LlamaIndex 推出的 Rust 高性能文档解析器，填补多模态 RAG 流水线中的解析瓶颈 |
| [ollama/ollama](https://github.com/ollama/ollama) | 172,680 | — | 本地大模型运行的事实标准，已集成 Kimi-K2.5、GLM-5、DeepSeek 等最新模型 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 81,448 | — | 高吞吐 LLM 推理引擎，生产环境部署的核心基础设施 |
| [langgenius/dify](https://github.com/langgenius/dify) | 143,193 | — | 生产级 Agentic 工作流开发平台，支持从原型到部署的完整链路 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 139,298 | — | 用户友好的本地 AI 界面，Ollama/OpenAI API 的统一入口 |

#### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 199,289 | +908 | **"Agent Harness"性能优化系统**，为 Claude Code/Codex/Cursor 等提供技能、本能、记忆与安全层，今日爆发登榜 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | — | +2768 | **今日增速冠军**：一键 AI 生成高清短视频，LLM 驱动内容生产的极致落地 |
| [revfactory/harness](https://github.com/revfactory/harness) | — | +55 | 元技能框架：设计领域专属 Agent 团队并生成其技能，与 ECC 形成"Harness"技术路线呼应 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 173,718 | — | Nous Research 的"成长型 Agent"，强调持续学习与自我进化 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 63,706 | — | 从零构建类 Claude Code 的 nano Agent Harness，教育+工程双重价值 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 44,966 | — | 开源超级 AI 助手，支持任务规划、工具调用、自主成长与多模态多通道 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 96,315 | — | 让网站对 AI Agent 可访问，网页自动化的事实标准 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 75,429 | — | AI 驱动软件开发，从需求到 PR 的端到端自主编程 |

#### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) | — | +349 | **Claude Code 官方认证插件**，支持 Codex/Cursor 等多 IDE，标志 Agent 插件生态标准化 |
| [cursor/plugins](https://github.com/cursor/plugins) | — | +205 | Cursor 插件规范与官方插件，IDE 内 Agent 扩展能力的定义者 |
| [anthropics/skills](https://github.com/anthropics/skills) | — | +454 | Anthropic 官方 Agent Skills 仓库，Claude Code 的能力单元开源化 |
| [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) | — | +469 | 离线生存计算机，集成 AI 的极端场景应用，体现边缘 AI 的另类探索 |
| [dreammis/social-auto-upload](https://github.com/dreammis/social-auto-upload) | — | +73 | 自动化上传视频至多平台（抖音/小红书/TikTok/YouTube 等），AI 内容分发的自动化工具 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 22,689 | — | AI 生成真正可编辑的 PowerPoint，非图片式输出，突破文档生成天花板 |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | — | +655 | 将 WiFi 信号转为空间智能、生命体征监测与存在检测，**无视频隐私感知 AI** |

#### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | — | +779 | **Tokenizer-Free TTS**，多语言语音生成、创意声线设计与真实克隆，今日语音领域增速第一 |
| [OpenMOSS/MOSS-TTS](https://github.com/OpenMOSS/MOSS-TTS) | — | +62 | 高保真、高表现力语音与音效生成，覆盖长文本对话、实时流式 TTS |
| [FareedKhan-dev/train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch) | — | +327 | 从零训练 LLM 的完整教程，降低大模型训练门槛 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 161,078 | — | 模型定义框架的事实标准，支撑文本/视觉/音频/多模态全栈 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 71,724 | — | 100+ LLM/VLM 统一高效微调，ACL 2024 收录 |
| [galilai-group/stable-worldmodel](https://github.com/galilai-group/stable-worldmodel) | — | +318 | 可复现世界模型研究与评估平台，世界模型研究的基础设施 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,216 | — | Apple Silicon 上的 LLM 推理服务课程，构建微型 vLLM + Qwen |

#### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 今日新增 | 一句话说明 |
|:---|:---|:---|:---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 81,565 | — | RAG + Agent 融合的领先开源引擎，构建 LLM 的优质上下文层 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 79,753 | — | 跨会话持久化记忆，AI 压缩后注入未来会话，解决 Agent 记忆断层 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 57,159 | — | AI Agent 的通用记忆层，从 RAG 向"持续学习"演进 |
| [safishamsi/graphify](https://github.com/safishamsi/graphify) | 56,763 | — | 将代码/文档/图像/视频转为可查询知识图谱，多模态 RAG 的图增强方案 |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | 35,982 | — | EMNLP 2025 收录，简单快速的检索增强生成 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 44,549 | — | 云原生高性能向量数据库，可扩展 ANN 搜索 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 31,684 | — | 高性能大规模向量数据库与搜索引擎 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 32,342 | — | **无向量、基于推理的 RAG 文档索引**，挑战传统向量检索范式 |

---

### 3. 趋势信号分析

**"Agent Harness" 架构成为今日最大技术热点。** 以 `ECC`（+908）、`harness`（+55）、`learn-claude-code`（63,706★）为代表，社区正从"使用 AI 编程助手"转向"**构建可扩展的 Agent 基础设施**"——为 Claude Code、Codex、Cursor 等终端工具注入技能系统、记忆层、安全边界与性能优化。这一趋势与 Anthropic 近期密集发布 `claude-code`、`skills` 仓库、`compound-engineering-plugin` 形成生态共振，表明 **AI 编程助手正从"产品"进化为"平台"**。

**语音合成赛道出现技术跃迁信号。** `VoxCPM` 的 Tokenizer-Free 架构与 `MOSS-TTS` 的高表现力长文本生成，标志着开源 TTS 正在突破"机械感"瓶颈，向商业级情感语音逼近。这与近期多模态大模型（如 GPT-4o 原生音频）的行业方向一致。

**文档解析成为 RAG 新瓶颈。** `liteparse`（+925）和 `markitdown`（+2470）的高增长，揭示了一个被忽视的痛点：多模态 RAG 的成效高度依赖**前端解析质量**，社区正从"拼检索算法"转向"拼数据预处理"。

---

### 4. 社区关注热点

- **`affaan-m/ECC` — Agent Harness 的"性能优化操作系统"**  
  为 Claude Code/Codex/Cursor 提供技能、本能、记忆、安全四维增强，199K★ 的体量与今日 908 新增证明其已成为 Agent 基础设施的头部方案，开发者应关注其插件接入方式。

- **`run-llama/liteparse` — Rust 重写文档解析**  
  LlamaIndex 以 Rust 重构文档解析，针对 PDF/Office 等复杂格式的解析速度与准确性，直接决定下游 RAG 质量，是构建生产级知识库的关键组件。

- **`VoxCPM` — Tokenizer-Free TTS 的技术路线**  
  跳过传统文本到音素的 Tokenizer 环节，直接建模语义到声学特征，可能带来更自然的跨语言语音与更灵活的声线控制，值得语音应用开发者跟踪。

- **`VectifyAI/PageIndex` — "无向量 RAG" 的范式挑战**  
  以推理替代向量检索，声称实现 97% 存储节省，若验证有效将颠覆现有向量数据库主导的知识库架构，边缘设备部署场景尤为关键。

- **`EveryInc/compound-engineering-plugin` — 跨 IDE Agent 插件标准**  
  同时支持 Claude Code、Codex、Cursor 的插件规范，预示 Agent 工具链的"一次开发，多端运行"时代，插件开发者应优先适配此标准。

---

*报告基于 2026-05-31 GitHub Trending 与主题搜索数据生成*

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*