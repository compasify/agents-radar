# AI 开源趋势日报 2026-05-23

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-05-23 00:24 UTC

---

# AI 开源趋势日报 | 2026-05-23

---

## 第一步：AI 相关性筛选

### Trending 榜单筛选结果（14 → 11 个 AI 相关）

| 项目 | 判定 | 说明 |
|:---|:---|:---|
| anthropics/claude-plugins-official | ✅ AI | Claude Code 官方插件目录 |
| colbymchenry/codegraph | ✅ AI | 代码知识图谱，服务 AI 编码 Agent |
| ruvnet/RuView | ✅ AI | WiFi 信号转空间智能，边缘 AI 感知 |
| rohitg00/ai-engineering-from-scratch | ✅ AI | AI 工程学习资源 |
| ChromeDevTools/chrome-devtools-mcp | ✅ AI | Chrome DevTools MCP 服务编码 Agent |
| dotnet/skills | ✅ AI | .NET/C# AI 编码 Agent 技能库 |
| Lum1104/Understand-Anything | ✅ AI | 代码交互知识图谱，多 Agent 兼容 |
| odoo/odoo | ❌ 排除 | ERP/CRM 通用业务软件，非 AI 原生 |
| byJoey/cfnew | ❌ 排除 | 信息不足，疑似 Cloudflare 工具 |
| trimstray/the-book-of-secret-knowledge | ❌ 排除 | 通用技术知识库，非 AI 专项 |
| Fincept-Corporation/FinceptTerminal | ✅ AI | AI 驱动的金融分析终端 |
| can1357/oh-my-pi | ✅ AI | 终端 AI 编码 Agent |
| yt-dlp/yt-dlp | ❌ 排除 | 音视频下载工具，非 AI |
| karpathy/nn-zero-to-hero | ✅ AI | 神经网络教学课程 |

### 主题搜索结果：80 个全部保留（已按 topic 筛选为 AI 相关）

---

## 第二步：多维度分类

---

## 第三步：完整报告

---

## 1. 今日速览

**Claude 生态爆发成最大主线**：Anthropic 官方插件目录单日狂揽 2549 stars，同时涌现 `codegraph`、`claude-context`、`claude-mem` 等大量 Claude Code 配套工具，形成"核心平台+外围增强"的完整工具链。**终端 AI Agent 竞争白热化**：`oh-my-pi`、`shareAI-lab/learn-claude-code` 等轻量 Agent 框架密集上榜，"Bash is all you need" 的极简哲学挑战传统重型框架。**代码知识图谱成为新共识**：`codegraph` 与 `Understand-Anything` 双双登榜，通过预索引知识图谱降低 Token 消耗和工具调用次数，解决大模型上下文瓶颈。**边缘感知 AI 异军突起**：`RuView` 将 WiFi 信号转化为空间智能，开创无摄像头隐私感知新范式。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | 0 ⭐ (+2549 today) | **Anthropic 官方插件目录**，定义 Claude Code 插件标准与质量门槛，生态扩张的"官方认证体系" |
| [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) | 0 ⭐ (+501 today) | **浏览器调试能力 MCP 化**，让 AI Agent 直接操控 Chrome DevTools 进行前端诊断与自动化测试 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 0 ⭐ (+457 today) | **终端 AI 编码 Agent**，hash 锚定编辑、LSP 集成、子 Agent 调度，对标 Claude Code 的独立实现 |
| [colbymchenry/codegraph](https://github.com/colbymchenry/codegraph) | 0 ⭐ (+3684 today) | **预索引代码知识图谱**，100% 本地运行，为 Claude/Codex/Cursor 等 Agent 减少 Token 消耗和工具调用 |
| [Lum1104/Understand-Anything](https://github.com/Lum1104/Understand-Anything) | 0 ⭐ (+1393 today) | **交互式代码知识图谱**，支持自然语言查询，兼容 6+ 主流编码 Agent |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 188,532 ⭐ | **Agent 性能优化系统**，涵盖技能、本能、记忆、安全与研究优先开发，多 Agent 平台通用 |
| [ollama/ollama](https://github.com/ollama/ollama) | 172,046 ⭐ | **本地大模型运行标杆**，新增 Kimi-K2.5、GLM-5、MiniMax 等模型支持，持续领跑边缘推理 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 80,748 ⭐ | **高吞吐 LLM 推理引擎**，生产级 serving 基础设施，与 Ollama 形成"云-边"互补 |

---

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 62,041 ⭐ | **"Bash is all you need" 的 nano Agent 框架**，从 0 构建类 Claude Code 的 agent harness，教育意义与工程价值兼具 |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 54,184 ⭐ | **Claude 专属 Agent 编排平台**，多 Agent 集群、自学习群体智能、原生 Claude Code/Codex 集成 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 163,145 ⭐ | **"与你共同成长的 Agent"**，Nous Research 推出的长期演进型智能体框架 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184,460 ⭐ | **通用 Agent 平台愿景**，持续迭代降低 AI 使用与构建门槛 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 74,544 ⭐ | **AI 驱动软件开发**，端到端的代码生成、调试、PR 提交自动化 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 95,135 ⭐ | **网站 AI 可访问化**，让 Agent 像人类一样操作浏览器完成复杂在线任务 |
| [langgenius/dify](https://github.com/langgenius/dify) | 142,282 ⭐ | **生产级 Agentic 工作流平台**，可视化编排与运维一体化 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 31,676 ⭐ | **前端 Agent 技术栈**，React/Angular 原生集成，AG-UI 协议制定者 |

---

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 0 ⭐ (+978 today) | **WiFi 信号转空间智能**，零摄像头实现实时空间感知、生命体征监测与存在检测，隐私敏感场景的革命性方案 |
| [Fincept-Corporation/FinceptTerminal](https://github.com/Fincept-Corporation/FinceptTerminal) | 0 ⭐ (+367 today) | **AI 金融分析终端**，市场分析、投资研究与经济数据的交互式探索平台 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 78,604 ⭐ | **多 Agent LLM 金融交易框架**，投研、决策、执行分层协作 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 46,114 ⭐ | **AI 生产力工作室**，智能聊天、自主 Agent、300+ 助手，统一接入前沿 LLM |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 44,721 ⭐ | **超级 AI 助理**，主动思考、任务规划、技能创造，支持微信/飞书/钉钉等全平台接入 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 46,702 ⭐ | **Claude Code 驱动求职系统**，14 种技能模式、批量处理、PDF 生成 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 20,099 ⭐ | **Agent 互联网之眼**，零 API 费用聚合 Twitter/Reddit/YouTube 等平台信息 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 138,268 ⭐ | **用户友好型 AI 界面**，Ollama/OpenAI API 统一入口，本地部署首选 |

---

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | 0 ⭐ (+988 today) | **AI 工程实战课程**，Learn it. Build it. Ship it，强调从学习到产出的完整闭环 |
| [karpathy/nn-zero-to-hero](https://github.com/karpathy/nn-zero-to-hero) | 0 ⭐ (+159 today) | **Andrej Karpathy 经典神经网络课程**，从零构建理解深度学习本质 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 50,418 ⭐ | **2 小时训练 64M 参数 LLM**，极低门槛的大模型训练教学，从 0 完全手搓 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 160,882 ⭐ | **模型定义框架标杆**，文本/视觉/音频/多模态统一支持，推理训练全覆盖 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 95,395 ⭐ | **PyTorch 手搓 ChatGPT 级 LLM**，步骤详解的教科书级实现 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 7,380 ⭐ | **Rust 模块化 LLM 应用框架**，类型安全与高并发的系统级选择 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,197 ⭐ | **Apple Silicon 上的 vLLM+Qwen**，面向系统工程师的推理服务课程 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | 312 ⭐ | **X-Bit 量化端侧推理**，极致压缩的本地 LLM 运行方案 |

---

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 77,510 ⭐ | **跨会话持久记忆**，捕获-压缩-注入 Agent 全生命周期上下文，Claude/Codex/Gemini 等通用 |
| [safishamsi/graphify](https://github.com/safishamsi/graphify) | 51,815 ⭐ | **全类型知识图谱构建**，代码/SQL/文档/图像/视频统一图谱化，多 Agent 技能形态 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 81,055 ⭐ | **RAG+Agent 融合引擎**，前沿检索增强与智能体能力结合，构建 LLM 优质上下文层 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 56,458 ⭐ | **通用 Agent 记忆层**，跨平台、跨会话的持久化记忆基础设施 |
| [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | 11,525 ⭐ | **代码搜索 MCP**，将整个代码库转化为 Claude Code 的可用上下文 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 17,459 ⭐ | **6 行代码的 Agent 记忆控制平面**，极简集成的记忆管理方案 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 44,406 ⭐ | **云原生高性能向量数据库**，规模化 ANN 搜索的基础设施 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 31,507 ⭐ | **下一代 AI 向量搜索引擎**，高性能大规模向量检索 |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | 57,687 ⭐ | **AI 混合搜索引擎**，站点与应用级极速搜索 API |
| [yichuan-w/LEANN](https://github.com/yichuan-w/LEANN) | 11,664 ⭐ | **97% 存储节省的端侧 RAG**，MLsys2026 成果，个人设备上的快速准确私有检索 |

---

## 3. 趋势信号分析

**Claude 生态的"苹果时刻"**：今日热榜呈现罕见的生态共振——Anthropic 官方插件目录登顶同时，外围工具呈集群式爆发。`codegraph`（+3684）、`claude-mem`、`claude-context`、`ruflo` 等围绕 Claude Code 构建增强层，形成类似 iOS 应用商店的平台效应。这标志着 Claude Code 正从"好用工具"进化为"行业标准平台"，开发者押注其成为下一代 AI 原生开发的核心入口。

**"知识图谱预计算"成为性能优化共识**：`codegraph` 与 `Understand-Anything` 双双登榜，揭示 Agent 开发的新范式——不再依赖大模型的实时推理能力，而是通过预构建结构化知识降低 Token 消耗和延迟。这与传统 RAG 的"检索-生成"流水线不同，更接近"编译期优化"思维，可能重塑 AI 编码工具的性能基准。

**边缘 AI 感知开辟新赛道**：`RuView` 的 WiFi 信号空间智能代表感知技术的"去摄像头化"趋势，在隐私监管趋严背景下，射频信号、声学、热成像等替代感知模态将获得更多关注，形成"隐形 AI"的新品类。

**轻量 Agent 框架挑战重型架构**：`learn-claude-code` 的 "nano agent harness" 与 `oh-my-pi` 的极简终端 Agent，共同指向对 LangChain 等重型框架的反叛。社区开始追求"够用且透明"的 Agent 实现，而非全功能但黑盒的复杂系统。

---

## 4. 社区关注热点

- **[anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official)** — **生态位定义者**：官方插件目录的发布意味着 Claude Code 正式进入"平台化"阶段，早期插件开发者将获得类似 App Store 首发红利，建议关注认证标准与流量分发机制

- **[colbymchenry/codegraph](https://github.com/colbymchenry/codegraph)** — **性能优化新范式**：预索引知识图谱将代码理解从"实时推理"转为"预计算查询"，对大型代码库 Agent 的响应速度和成本结构有颠覆性影响，值得所有 AI 编码工具开发者研究

- **[ruvnet/RuView](https://github.com/ruvnet/RuView)** — **隐私感知前沿**：无摄像头空间感知在智能家居、养老监护、安防监控等场景有巨大替代潜力，射频 AI 可能成为计算机视觉之后的下一个感知范式

- **[shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)** — **工程教育新风向**："从 0 构建"的透明化教学正在取代"调用 API"的黑盒开发，反映社区对 AI 系统底层理解的渴求，预示人才技能要求的转变

- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** + **[zilliztech/claude-context](https://github.com/zilliztech/claude-context)** — **Claude 增强工具链**：记忆持久化与代码上下文增强是 Agent 实用化的两大瓶颈，这两个项目的成熟度表明 Claude 生态正快速补齐生产环境所需的周边基础设施

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*