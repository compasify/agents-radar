# AI 开源趋势日报 2026-05-28

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-05-28 00:27 UTC

---

# AI 开源趋势日报 | 2026-05-28

---

## 第一步：AI 相关性过滤

**Trending 榜单排除项**（非 AI 相关）：
- `DigitalPlatDev/FreeDomain` — 免费域名服务
- `byoungd/English-level-up-tips` — 英语学习指南
- `Axorax/awesome-free-apps` — 通用免费应用合集
- `iii-hq/iii` — 通用服务编排工具（无明确 AI 特性）
- `twentyhq/twenty` — CRM 系统，虽有 "designed for AI" 描述但属通用 SaaS

**保留 12 个 Trending AI 项目** + **80 个主题搜索项目**（去重后实际约 85 个）

---

## 第二步：分类体系

| 维度 | 说明 |
|:---|:---|
| 🔧 AI 基础工具 | 框架、SDK、推理引擎、CLI 工具、开发辅助 |
| 🤖 AI 智能体/工作流 | Agent 框架、自动化编排、多智能体系统、MCP 协议 |
| 📦 AI 应用 | 垂直场景产品（视频生成、金融、办公、安全等） |
| 🧠 大模型/训练 | 模型实现、训练框架、微调、量化、评估 |
| 🔍 RAG/知识库 | 向量数据库、文档检索、记忆层、知识图谱 |

---

## 第三步：完整报告

---

## 1. 今日速览

今日 AI 开源热榜呈现**"Agent 基础设施"爆发态势**：围绕 Claude Code、Codex、Cursor 等主流编码 Agent 的**技能文件（Skill Files）**和**性能优化框架**成为最大亮点，单日新增 stars 破万。同时，**反 AI 同质化（Anti-Slop）**运动兴起，多个项目致力于消除 AI 生成内容的"机器味"。金融时序基础模型 Kronos 和自动内容审核绕过工具 Heretic 分别代表垂直领域深化与对抗性技术的新方向。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具

| 项目 | Stars | 今日新增 | 说明 |
|:---|:---|:---|:---|
| **[Lum1104/Understand-Anything](https://github.com/Lum1104/Understand-Anything)** | ⭐0 | **+4,465** | 将任意代码转为可交互知识图谱，支持 Claude Code/Codex/Cursor 等主流 Agent 的上下文增强，今日增速全场最高 |
| **[affaan-m/ECC](https://github.com/affaan-m/ECC)** | ⭐196,001 | **+2,062** | Agent Harness 性能优化系统，整合技能、本能、记忆、安全四大模块，主题搜索中已积累近 20 万星 |
| **[anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins)** | ⭐0 | **+695** | Anthropic 官方发布的 Claude Cowork 插件集，标志厂商正式拥抱开源生态扩展 |
| **[shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)** | ⭐63,058 | — | 从零构建 Claude Code 类 Agent 的极简教程，"Bash is all you need" 理念降低 Agent 开发门槛 |
| **[vllm-project/vllm](https://github.com/vllm-project/vllm)** | ⭐81,183 | — | 高吞吐 LLM 推理引擎，持续为生产级部署提供基础设施 |
| **[ollama/ollama](https://github.com/ollama/ollama)** | ⭐172,460 | — | 本地大模型运行标杆，新增支持 Kimi-K2.5、GLM-5 等前沿模型 |

---

### 🤖 AI 智能体/工作流

| 项目 | Stars | 今日新增 | 说明 |
|:---|:---|:---|:---|
| **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** | ⭐170,231 | — | "与你共同成长"的 Agent，Nous Research 的旗舰开源项目，强调持续学习能力 |
| **[ruvnet/ruflo](https://github.com/ruvnet/ruflo)** | ⭐55,800 | — | Claude 生态领先的 Agent 编排平台，支持多 Agent 集群与自主工作流，原生集成 Claude Code |
| **[santifer/career-ops](https://github.com/santifer/career-ops)** | ⭐47,495 | — | 基于 Claude Code 的 AI 求职系统，14 种技能模式展示 Agent 垂直场景落地 |
| **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** | ⭐46,430 | — | 统一接入 300+ 助手的 AI 生产力工作室，智能聊天与自主 Agent 双模态 |
| **[zhayujie/CowAgent](https://github.com/zhayujie/CowAgent)** | ⭐44,899 | — | 开源超级 AI 助手，支持多模型多渠道，"一行命令安装"降低使用门槛 |
| **[activepieces/activepieces](https://github.com/activepieces/activepieces)** | ⭐22,440 | — | ~400 个 MCP 服务器的 Agent 自动化平台，MCP 生态集成度领先 |
| **[obra/superpowers](https://github.com/obra/superpowers)** | ⭐0 | **+1,511** | Agentic 技能框架与软件开发方法论，今日热榜验证方法论层创新需求 |
| **[Chachamaru127/claude-code-harness](https://github.com/Chachamaru127/claude-code-harness)** | ⭐0 | **+87** | 自主 Plan→Work→Review 循环的 Claude Code 专用开发框架 |

---

### 📦 AI 应用

| 项目 | Stars | 今日新增 | 说明 |
|:---|:---|:---|:---|
| **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** | ⭐0 | **+1,742** | AI 一键生成高清短视频，LLM 驱动内容生产的典型应用 |
| **[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)** | ⭐0 | **+401** | 金融市场语言基础模型，垂直领域 Foundation Model 新探索 |
| **[mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)** | ⭐0 | **+886** | 754 项结构化网络安全技能，映射 5 大框架，Agent 安全能力标准化 |
| **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** | ⭐21,754 | — | AI 生成原生可编辑 PPTX（非图片），办公自动化深度优化 |
| **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** | ⭐39,142 | — | LLM 驱动 A/H/美股智能分析，零成本定时运行，纯本地化部署 |
| **[acon96/home-llm](https://github.com/acon96/home-llm)** | ⭐1,349 | — | 本地 LLM 控制智能家居，Home Assistant 集成方案 |

---

### 🧠 大模型/训练

| 项目 | Stars | 今日新增 | 说明 |
|:---|:---|:---|:---|
| **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** | ⭐96,113 | — | 从零实现 ChatGPT 级 LLM，教育领域最具影响力的开源教材 |
| **[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)** | ⭐71,657 | — | 100+ LLM/VLM 统一高效微调，ACL 2024 成果持续迭代 |
| **[skyzh/tiny-llm](https://github.com/skyzh/tiny-llm)** | ⭐4,211 | — | Apple Silicon 上的 LLM 推理服务课程，tiny vLLM + Qwen 实战 |
| **[open-compass/opencompass](https://github.com/open-compass/opencompass)** | ⭐7,037 | — | 支持 100+ 数据集的 LLM 评测平台，模型选型基础设施 |
| **[Picovoice/picollm](https://github.com/Picovoice/picollm)** | ⭐311 | — | X-Bit 量化驱动的端侧 LLM 推理，边缘部署新选择 |
| **[galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining)** | ⭐236 | — | 可靠、极简、可扩展的基础模型预训练库 |

---

### 🔍 RAG/知识库

| 项目 | Stars | 今日新增 | 说明 |
|:---|:---|:---|:---|
| **[langgenius/dify](https://github.com/langgenius/dify)** | ⭐142,902 | — | 生产级 Agentic 工作流开发平台，RAG 与 Agent 能力深度融合 |
| **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** | ⭐81,377 | — | 开源 RAG 引擎，深度融合 Agent 能力构建 LLM 上下文层 |
| **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** | ⭐79,148 | — | 跨会话持久化记忆，AI 压缩注入，解决 Agent 上下文断层痛点 |
| **[safishamsi/graphify](https://github.com/safishamsi/graphify)** | ⭐55,012 | — | 代码/文档/多媒体统一知识图谱，RAG 向多模态结构化演进 |
| **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** | ⭐32,240 | — | 无向量推理型 RAG，97% 存储节省，个人设备 100% 隐私 |
| **[topoteretes/cognee](https://github.com/topoteretes/cognee)** | ⭐17,545 | — | 6 行代码实现的 AI Agent 记忆控制平面，记忆层极简抽象 |
| **[memvid/memvid](https://github.com/memvid/memvid)** | ⭐15,579 | — | 单文件无服务器记忆层，替代复杂 RAG 管道，Agent 即时检索 |

---

## 3. 趋势信号分析

**Agent 基础设施层爆发**是今日最显著信号。Trending 榜单中 6/12 项目直接围绕 Claude Code/Codex/Cursor 等编码 Agent 的**技能文件（Skill Files）**生态——从 ECC 的性能优化、Leonxlnx 的"品味提升"、到 mukul975 的网络安全技能库，形成完整的"Agent 增强工具链"。这标志着 AI 开发已从"模型能力竞赛"进入"**工程化封装竞赛**"：谁能让 Agent 更专业、更可靠、更有个性，谁就能获得开发者青睐。

**"反 Slop"运动兴起**是新兴文化信号。hardikpandya/stop-slop 与 Leonxlnx/taste-skill 同日登榜，反映社区对 AI 生成内容同质化的集体焦虑，"去除 AI 味"成为新的质量标尺。技术层面，p-e-w/heretic 的自动审核绕过则代表**对抗性开源**的暗线发展，与主流平台的审核收紧形成张力。

与行业事件的关联：Anthropic 近期推动 Claude Code 生态开放（官方 knowledge-work-plugins 发布），直接引爆了第三方技能文件的创新潮；同时 Kronos 金融模型的出现，呼应了 BloombergGPT 后**垂直领域 Foundation Model** 的持续探索。

---

## 4. 社区关注热点

- **🔥 Skill Files 即新 API** — 围绕 Claude Code 的技能文件格式正成为事实标准，anthropics/knowledge-work-plugins、mukul975/Anthropic-Cybersecurity-Skills、Leonxlnx/taste-skill 构成"官方-垂直-文化"三层生态，建议开发者尽早投入技能文件开发

- **🧠 记忆层抽象竞争白热化** — claude-mem（跨会话记忆）、cognee（6行代码记忆控制）、memvid（单文件记忆层）同日活跃，Agent 记忆正从"功能"进化为"基础设施"，存储效率与隐私保护是差异化关键

- **⚡ "无向量 RAG"挑战传统架构** — VectifyAI/PageIndex 的 97% 存储节省方案登榜，结合 LEANN 等技术，纯推理型检索可能重塑 RAG 技术栈，向量数据库厂商需关注替代风险

- **🎭 对抗性工具伦理边界** — p-e-w/heretic 的自动审核移除功能引发关注，技术中立性与滥用风险的平衡将成为社区治理新议题

- **🏦 金融 AI 垂直深化** — Kronos 金融语言模型与 daily_stock_analysis 零成本分析系统并进，金融市场正成为 LLM 落地最快、付费意愿最强的垂直场景之一

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*