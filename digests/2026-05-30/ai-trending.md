# AI 开源趋势日报 2026-05-30

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-05-30 00:25 UTC

---

# AI 开源趋势日报 | 2026-05-30

---

## 第一步：AI 相关性过滤

**Trending 榜单过滤结果**：17 个项目中，排除以下非 AI 项目后保留 **13 个 AI 相关项目**
- ❌ `byoungd/English-level-up-tips`（英语学习指南）
- ❌ `Biohub/esm`（无描述，生物学相关）
- ❌ `DigitalPlatDev/FreeDomain`（域名服务）
- ❌ `codecrafters-io/build-your-own-x`（编程学习）
- ❌ `DataTalksClub/data-engineering-zoomcamp`（数据工程课程，泛 IT 非核心 AI）

**主题搜索**：81 个项目全部保留（已按 topic 筛选）

---

## 第二步：分类体系

| 维度 | 说明 |
|:---|:---|
| 🔧 AI 基础工具 | CLI、SDK、文档解析、格式转换、开发环境 |
| 🤖 AI 智能体/工作流 | Agent 框架、编码 Agent、自动化、多 Agent 协作 |
| 📦 AI 应用 | 视频生成、CRM、PPT 生成、股票分析等垂直产品 |
| 🧠 大模型/训练 | 训练框架、微调工具、模型评估、推理优化 |
| 🔍 RAG/知识库 | 向量数据库、检索增强、记忆层、知识图谱 |

---

## 第三步：报告输出

---

### 1. 今日速览

今日 AI 开源领域呈现**"Agent 基础设施"与"内容生成"双主线爆发**态势：`MoneyPrinterTurbo` 以 3567 星登顶，AI 短视频生成工具持续验证商业化路径；"Stop Slop"运动兴起，`taste-skill` 和 `stop-slop` 同日登榜，反映社区对 AI 生成内容质量劣化的集体焦虑；Claude Code 生态加速扩张，插件规范、记忆层、性能优化工具形成完整工具链；字节跳动开源 `deer-flow` 长时程 Agent 框架，标志国产大厂在 SuperAgent 赛道的深度布局。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具

| 项目 | Stars | 今日新增 | 说明 |
|:---|:---|:---|:---|
| [microsoft/markitdown](https://github.com/microsoft/markitdown) | — | +1873 | 微软官方文档转 Markdown 工具，打通 Office 文档与 LLM 工作流的数据预处理瓶颈 |
| [run-llama/liteparse](https://github.com/run-llama/liteparse) | — | +701 | Rust 高性能文档解析器，LlamaIndex 生态补全"最后一公里"的文档理解基础设施 |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | — | +395 | Anthropic 官方终端 Agent 工具，定义"自然语言即代码"的交互范式 |
| [cursor/plugins](https://github.com/cursor/plugins) | — | +134 | Cursor 插件规范发布，IDE 层 Agent 生态标准化进程加速 |
| [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) | — | +353 | 跨平台工程插件（Claude/Codex/Cursor 通用），Agent 工具链互操作性突破 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 198,572 | +1406 | Agent 性能优化系统：技能、本能、记忆、安全四维.harness，多 CLI 通用 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 7,459 | — | Rust 模块化 LLM 应用框架，系统级语言构建高性能 Agent 的新选择 |

#### 🤖 AI 智能体/工作流

| 项目 | Stars | 今日新增 | 说明 |
|:---|:---|:---|:---|
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | — | +2062 | **今日最大黑马**：通过 Skill 文件遏制 AI "生成平庸内容（slop）"，Agent 质量治理新范式 |
| [hardikpandya/stop-slop](https://github.com/hardikpandya/stop-slop) | — | +617 | 移除 AI 文本"机器味"的 Skill 文件，与 taste-skill 形成反 slop 运动双子星 |
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 69,960 | — | 字节开源长时程 SuperAgent：分钟到小时级任务，沙箱/记忆/子 Agent/消息网关全栈 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 63,563 | — | "Bash is all you need"——从零构建 Claude Code 类 Agent harness，教育价值极高 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 44,948 | — | 开源超级 AI 助手，轻量级可扩展，"一行命令安装"降低 Agent 部署门槛 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 75,333 | — | AI 驱动开发平台，代码理解-修改-测试全闭环 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 96,198 | — | 让网站对 AI Agent 可访问，浏览器自动化基础设施 |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | 22,473 | — | ~400 个 MCP 服务器的 AI 自动化平台，MCP 生态集成度领先 |

#### 📦 AI 应用

| 项目 | Stars | 今日新增 | 说明 |
|:---|:---|:---|:---|
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | — | **+3567** | **今日榜首**：一键 AI 生成高清短视频，LLM 驱动内容生产的极致产品化 |
| [twentyhq/twenty](https://github.com/twentyhq/twenty) | — | +578 | "为 AI 设计的 Salesforce 开源替代"，CRM 赛道 AI 原生重构 |
| [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) | — | +318 | 离线生存计算机集成 AI，极端场景下的边缘 AI 应用创新 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 22,442 | — | 文档→原生可编辑 PPTX，非图片式生成，办公场景 AI 渗透深化 |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 47,830 | — | Claude Code 驱动的 AI 求职系统，14 种技能模式垂直场景深耕 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 39,390 | — | LLM 驱动 A/H/美股分析，零成本定时运行，金融 AI 平民化 |

#### 🧠 大模型/训练

| 项目 | Stars | 今日新增 | 说明 |
|:---|:---|:---|:---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 161,051 | — | 模型定义框架事实标准，文本/视觉/音频/多模态全覆盖 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 81,382 | — | 高吞吐内存高效推理引擎，生产级 LLM 服务基础设施 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 71,700 | — | 100+ LLM/VLM 统一高效微调，ACL 2024 背书 |
| [galilai-group/stable-worldmodel](https://github.com/galilai-group/stable-worldmodel) | — | +362 | 可复现世界模型研究平台，世界模型（World Model）方向重要基础设施 |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | 238 | — | 可靠极简可扩展的预训练库，基础模型预训练工程化 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,047 | — | 100+ 数据集、多模型评测平台，模型选型决策基础设施 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,216 | — | Apple Silicon 上的 LLM 推理服务课程，vLLM+Qwen 教学级实现 |

#### 🔍 RAG/知识库

| 项目 | Stars | 今日新增 | 说明 |
|:---|:---|:---|:---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 81,524 | — | RAG+Agent 融合引擎，"为 LLM 构建卓越上下文层" |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 79,615 | — | 跨会话持久记忆，AI 压缩注入，Claude Code 生态核心组件 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 57,096 | — | AI Agent 通用记忆层，记忆即服务（Memory-as-a-Service） |
| [safishamsi/graphify](https://github.com/safishamsi/graphify) | 56,172 | — | 代码/文档/图像→可查询知识图谱，多源异构数据统一语义层 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 49,763 | — | 文档 Agent 与 OCR 平台，RAG 赛道头部框架 |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | 35,961 | — | EMNLP 2025 简单快速 RAG，学术前沿落地 |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | 57,835 | — | AI 驱动混合搜索，向量+关键词融合，站点级搜索即插即用 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 31,660 | — | 大规模向量数据库，云原生架构，下一代 AI 搜索引擎 |

---

### 3. 趋势信号分析

**爆发性关注类别**：**Agent 质量治理工具**与**AI 内容生成**形成两极。`taste-skill`（+2062）和 `stop-slop`（+617）的同步登榜绝非偶然——这标志着社区从"能用 AI"转向"用好 AI"的关键拐点，Skill 文件作为 Agent 行为调控的轻量级机制正在标准化。与此同时，`MoneyPrinterTurbo` 以 3567 星验证 AI 视频生成的持续热度，内容生产工业化进入深水区。

**新兴技术栈**：**"反 slop"运动**首次以明确形态出现，与 2024-2025 年 AI 生成内容泛滥直接相关；**MCP（Model Context Protocol）** 生态快速扩张（`activepieces` 集成 ~400 服务器），协议层统一趋势显著；**世界模型（World Model）** 基础设施（`stable-worldmodel`）获资本级关注，预示物理 AI 仿真新赛道。

**行业事件关联**：Anthropic 近期 Claude Code 推广直接引爆插件生态（`compound-engineering-plugin`、`claude-mem`、`learn-claude-code` 集群）；字节 `deer-flow` 发布对标 OpenAI/Anthropic 的 SuperAgent 野心；微软 `markitdown` 强化 Office-LLM 数据管道，企业 AI 落地基础设施战白热化。

---

### 4. 社区关注热点

- **🔥 "Stop Slop" 运动** — `taste-skill` + `stop-slop` 双项目验证社区对 AI 内容质量劣化的集体反弹，Skill 文件或成为 Agent 行为约束的标准化手段，建议关注其向其他 CLI 工具的迁移路径

- **🎬 AI 视频生成工业化** — `MoneyPrinterTurbo` 单日 3567 星表明短视频赛道仍是 AI 应用层最确定性的变现场景，需关注其与大模型多模态能力的耦合深度

- **🧠 Claude Code 生态锁定效应** — 从 `claude-code` 本体到 `claude-mem` 记忆层、`compound-engineering-plugin` 跨平台插件、`learn-claude-code` 教育路径，Anthropic 正构建终端 Agent 的完整开发者生态，对 Cursor/Codex 形成差异化竞争

- **⚡ 长时程 Agent 框架** — `deer-flow`（字节）以"分钟到小时"级任务时长重新定义 Agent 能力边界，沙箱+子 Agent+消息网关的架构设计或成为 SuperAgent 新标准

- **🛠️ 文档解析基础设施** — `markitdown`（+1873）与 `liteparse`（+701）同日高增，反映非结构化数据向 LLM 可消费格式转换的痛点刚性，企业 RAG 部署的前置需求爆发

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*