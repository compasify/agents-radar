# AI 开源趋势日报 2026-06-10

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-10 00:30 UTC

---

# AI 开源趋势日报 | 2026-06-10

---

## 一、今日速览

今日 AI 开源领域呈现**"Agent 技能化"**爆发态势：Trending 榜单中 4 个高星项目聚焦 AI 编码 Agent 的技能扩展与工程化（`agent-skills`、`career-ops`、`pm-skills`、`goose`），标志着社区正从"造 Agent"转向"精耕 Agent 能力层"。同时，**本地 LLM 选型工具** `whichllm` 以 633 今日新增星标登榜，反映开发者对硬件适配与真实性能评测的迫切需求。RAG 基础设施持续稳固，`dify`、`open-webui` 等头部项目保持活跃。值得关注的是，**向量索引性能优化**（`turbovec` 基于 Rust + TurboQuant）和**Wi-Fi 感知 AI**（`espectre` 基于 CSI 动作检测）两个技术方向首次获得显著关注，分别代表 AI 工程性能优化与边缘感知智能的新兴交叉点。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [goose](https://github.com/aaif-goose/goose) [Rust] | 489 today | 开源可扩展 AI Agent，突破代码建议边界，支持安装、执行、编辑、测试等全链路工程操作，兼容任意 LLM |
| [turbovec](https://github.com/RyanCodrai/turbovec) [Python/Rust] | 1,801 today | 基于 TurboQuant 的向量索引，Rust 核心 + Python 绑定，瞄准高性能向量检索的量化优化 |
| [whichllm](https://github.com/Andyyyy64/whichllm) [Python] | 633 today | **一键匹配本地最优 LLM**：基于真实硬件基准测试（非参数量）排名，解决"模型能跑但跑不好"的痛点 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) [Python] | 76,331 | AI 驱动开发平台，支持代码生成、调试、测试全流程自动化 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) [Python] | 82,359 | 高吞吐、内存高效的 LLM 推理与服务引擎，生产级部署标配 |
| [ollama/ollama](https://github.com/ollama/ollama) [Go] | 173,713 | 本地一键运行 Kimi-K2.6、GLM-5.1、DeepSeek 等主流模型，本地 AI 入口级工具 |

---

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [agent-skills](https://github.com/addyosmani/agent-skills) [Shell] | 443 today | **Addy Osmani 出品**：生产级工程技能库，为 Claude Code/Codex 等编码 Agent 提供可复用的专业工作流 |
| [career-ops](https://github.com/santifer/career-ops) [JavaScript] | 1,110 today / 51,644 total | 基于 Claude Code 的 AI 求职系统，14 种技能模式 + Go 仪表盘 + PDF 生成，Agent 垂直场景深度落地 |
| [pm-skills](https://github.com/phuryn/pm-skills) | 806 today | **100+ Agentic 技能市场**：覆盖产品发现、策略、执行、发布、增长全生命周期，PM 角色的 Agent 能力层 |
| [last30days-skill](https://github.com/mvanhorn/last30days-skill) [Python] | 3,191 today | **今日最高新增**：跨 Reddit/X/YouTube/HN/Polymarket/网页的多源研究 Agent，自动合成 grounded summary |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) [Python] | 70,829 | 字节开源长程 SuperAgent，支持沙箱、记忆、工具、技能、子 Agent 与消息网关，分钟到小时级任务 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) [Python] | 188,811 | "与你共同成长"的 Agent，强调持续学习与自适应进化 |
| [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) [Python] | 184,860 | 通用 Agent 平台愿景，降低 AI 使用与构建门槛 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) [Python] | 65,670 | 从零构建 Claude Code 式 Agent Harness，"Bash is all you need" 极简哲学 |

---

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [AiToEarn](https://github.com/yikart/AiToEarn) [TypeScript] | 402 today | "用 AI 赚钱"——AI 变现工具集合，切入 AI 应用商业化赛道 |
| [openmed](https://github.com/maziyarpanahi/openmed) [Python] | 191 today | 开源医疗 AI，垂直领域专业应用 |
| [espectre](https://github.com/francescopace/espectre) [Python] | 134 today | **Wi-Fi 频谱分析（CSI）动作检测** + Home Assistant 集成，边缘感知 AI 新方向 |
| [ppt-master](https://github.com/hugohe3/ppt-master) [Python] | 25,577 | AI 生成可编辑 PPT（非图片），支持原生动画、语音旁白与自定义模板 |
| [daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) [Python] | 41,528 | LLM 驱动 A/H/美股智能分析，多源数据 + 实时新闻 + 决策仪表盘，零成本定时运行 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) [Python] | 97,980 | 让网站对 AI Agent 可访问，在线任务自动化 |

---

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [huggingface/transformers](https://github.com/huggingface/transformers) [Python] | 161,459 | 文本/视觉/音频/多模态 SOTA 模型定义框架，推理与训练统一 |
| [LlamaFactory](https://github.com/hiyouga/LlamaFactory) [Python] | 72,032 | 100+ LLM/VLM 统一高效微调（ACL 2024），一站式模型定制 |
| [tiny-llm](https://github.com/skyzh/tiny-llm) [Python] | 4,263 | Apple Silicon 上的 LLM 推理服务课程：从零构建迷你 vLLM + Qwen |
| [stable-pretraining](https://github.com/galilai-group/stable-pretraining) [Python] | 251 | 可靠、极简、可扩展的基础模型与世界模型预训练库 |
| [opencompass](https://github.com/open-compass/opencompass) [Python] | 7,075 | 支持 100+ 数据集、主流模型的 LLM 评测平台 |

---

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [dify](https://github.com/langgenius/dify) [TypeScript] | 144,587 | 生产级 Agentic 工作流开发平台，RAG + Agent 融合标杆 |
| [open-webui](https://github.com/open-webui/open-webui) [Python] | 140,858 | 用户友好型 AI 界面，支持 Ollama/OpenAI API，本地优先 |
| [ragflow](https://github.com/infiniflow/ragflow) [Python] | 82,312 | 领先开源 RAG 引擎，深度融合检索增强与 Agent 能力 |
| [claude-mem](https://github.com/thedotmack/claude-mem) [JavaScript] | 81,483 | **跨会话持久记忆**：捕获 Agent 行为、AI 压缩、注入未来上下文，兼容 Claude Code/Codex/Gemini 等 |
| [graphify](https://github.com/safishamsi/graphify) [Python] | 64,224 | 代码/文档/图像/视频 → 可查询知识图，App + 数据库 + 基础设施统一图谱 |
| [mem0](https://github.com/mem0ai/mem0) [Python] | 58,201 | 通用 AI Agent 记忆层，长期记忆基础设施 |
| [milvus](https://github.com/milvus-io/milvus) [Go] | 44,703 | 云原生高性能向量数据库，可扩展 ANN 搜索 |
| [PageIndex](https://github.com/VectifyAI/PageIndex) [Python] | 32,812 | **无向量、基于推理的 RAG 文档索引**，挑战传统向量检索范式 |
| [cognee](https://github.com/topoteretes/cognee) [Python] | 17,745 | 开源 AI 记忆平台，自托管知识图谱引擎，跨会话持久记忆 |

---

## 三、趋势信号分析

**"Agent 技能化（Agent Skills）"成为今日最显著的爆发性趋势。** Trending 榜单前 16 名中，4 个项目直接以 "skill" 命名或为核心概念（`last30days-skill`、`pm-skills`、`agent-skills`），加上 `career-ops` 的 14 技能模式和 `goose` 的可扩展 Agent 架构，形成清晰的信号：社区正在**从构建通用 Agent 框架，转向沉淀垂直、可复用、工程化的 Agent 能力单元**。这一转变与 Claude Code、Codex、OpenCode 等编码 Agent 的快速普及直接相关——开发者需要"教会"这些工具如何专业地完成特定任务，而非重复造轮子。

**新兴技术栈层面**，两个方向首次获得显著关注：一是 **Rust + 量化优化的向量索引**（`turbovec` 基于 TurboQuant），反映向量检索在性能极致化上的新探索；二是 **Wi-Fi CSI（Channel State Information）的物理层感知 AI**（`espectre`），将 AI 推理与无线信号处理结合，开辟无摄像头、非接触式的边缘智能场景。此外，`PageIndex` 提出的"无向量、推理驱动 RAG"与 `LEANN` 的"97% 存储节省"共同指向 RAG 架构的**后向量检索创新**——在 embedding 饱和后，社区开始探索更轻量、更语义化的检索范式。

与近期行业事件的关联上，**Claude Code 生态的爆发尤为突出**：`career-ops`、`claude-mem`、`claude-context`、`learn-claude-code` 等多个项目围绕其构建，Anthropic 的编码 Agent 正形成类似 VS Code 的插件经济效应。同时，`whichllm` 的本地模型硬件适配需求，与 GLM-5.1、Kimi-K2.6、DeepSeek 等国产/开源模型的密集发布形成呼应——模型供给丰富后，"选什么、怎么跑"成为新痛点。

---

## 四、社区关注热点

- **🔥 `last30days-skill`（+3,191⭐）** — 多源信息聚合 Agent 的今日之星，横跨社交媒体、预测市场（Polymarket）、网页的实时研究能力，代表"情报型 Agent"的成熟化，适合投资研究、舆情监控等场景跟进。

- **🔥 `agent-skills` + `pm-skills` + `career-ops` — Agent 技能化三剑客** — 分别覆盖工程、产品、求职场景，共同验证"Agent 能力层"商业模式的可行性，建议关注技能标准化与跨平台复用机制。

- **🔥 `whichllm`（+633⭐）** — 本地 LLM 选型工具，解决"模型-硬件-性能"匹配的黑盒问题，随着端侧 AI 和私有部署需求增长，此类工具将成为基础设施级入口。

- **🔥 `turbovec`（+1,801⭐）+ `PageIndex` / `LEANN`** — 向量检索的性能优化与范式替代并行发生，前者追求极致工程性能（Rust + 量化），后者挑战向量本身的必要性，RAG 架构可能迎来分化拐点。

- **🔥 `espectre`（+134⭐）** — Wi-Fi CSI 动作检测虽星标不高，但代表 AI 与物理世界交互的新通道（无视觉、非接触、低功耗），在智能家居、养老监测、安防等边缘场景有长期潜力。

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*