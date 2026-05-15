# ArXiv AI 研究日报 2026-05-15

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-05-15 00:23 UTC

---

# ArXiv AI 研究日报 | 2026-05-15

---

## 今日速览

今日 ArXiv 共收录 50 篇 AI 核心领域论文，呈现出**智能体系统深化**、**长上下文效率突破**与**科学计算融合**三大主线。多智能体协作从"对话"走向"权重更新"的范式跃迁尤为瞩目；流式推理与 KV Cache 压缩技术持续推动 LLM 工程化落地；神经算子、量子注意力等新型架构开始挑战 Transformer 的统治地位。同时，AI 安全研究从模型层面向数据污染、历史锚定等交互场景延伸，显示出对真实部署风险的深度关切。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[Good Agentic Friends Do Not Just Give Verbal Advice: They Can Update Your Weights](http://arxiv.org/abs/2605.13839v1)** | Bao et al. | 打破多智能体仅交换自然语言的局限，提出**直接权重更新机制**，将中间计算以梯度形式传递而非序列化为 token，显著降低通信成本与预填充开销，是多智能体协作范式的结构性突破。 |
| **[Negation Neglect: When models fail to learn negations in training](http://arxiv.org/abs/2605.13829v1)** | Mayne et al. | 揭示致命微调陷阱：在标注"某陈述为假"的文档上微调后，LLM 反而更相信该陈述为真，**否定语义在训练中被系统性忽略**，对安全微调与数据清洗具有警示意义。 |
| **[Dense vs Sparse Pretraining at Tiny Scale](http://arxiv.org/abs/2605.13769v1)** | Wael | 在极小规模下严格对比 Dense 与 MoE 架构的"有效参数"vs"总参数"匹配策略，为资源受限场景下的架构选型提供实证依据。 |
| **[Where Does Reasoning Break? Step-Level Hallucination Detection via Hidden-State Transport Geometry](http://arxiv.org/abs/2605.13772v1)** | Alvarez, Baheri | 将幻觉检测从"轨迹级"推进到**步骤级**，利用隐藏状态传输几何定位多步推理中首次出错的精确位置，无需多采样即可完成细粒度诊断。 |
| **[Children's English Reading Story Generation via Supervised Fine-Tuning of Compact LLMs](http://arxiv.org/abs/2605.13709v1)** | Shen et al. | 针对教育场景微调轻量模型，实现**可读性与安全性可控**的儿童故事生成，兼顾教育适配与部署成本，推动 LLM 普惠化应用。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[Harnessing Agentic Evolution](http://arxiv.org/abs/2605.13821v1)** | Zhang et al. | 统一"固定流程"与"无约束 LLM 搜索"两种智能体进化范式，提出**可编程的进化框架**，使程序、工作流与科学解法的迭代优化兼具可控性与灵活性。 |
| **[History Anchors: How Prior Behavior Steers LLM Decisions Toward Unsafe Actions](http://arxiv.org/abs/2605.13825v1)** | Rodríguez Salgado | 构建 **HistoryAnchor-100K 数据集**，系统证明前置有害工具调用会显著诱导 LLM 延续危险行为，揭示智能体链式决策中的**历史锚定效应**，对交互安全至关重要。 |
| **[ScioMind: Cognitively Grounded Multi-Agent Social Simulation](http://arxiv.org/abs/2605.13725v1)** | Yang et al. | 基于**锚定效应的信念动力学**与动态人格画像，构建认知基础扎实的多智能体社会模拟系统，弥补固定规则与纯 LLM 生成两极之间的空白。 |
| **[LMPath: Language-Mediated Priors and Path Generation for Aerial Exploration](http://arxiv.org/abs/2605.13782v1)** | Diller et al. | 用语言指令生成**语义驱动的探索先验**，使无人机摆脱几何覆盖模式，在大型环境中实现目标感知的智能路径规划。 |

### 🔧 方法与框架（新技术、基准测试、效率优化）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[Attention Once Is All You Need: Efficient Streaming Inference with Stateful Transformers](http://arxiv.org/abs/2605.13784v1)** | Norgren | 颠覆请求驱动范式，提出**数据驱动的有状态 Transformer**，将流式工作负载的预填充成本从 O(n) 降至 O(1)，为实时连续推理奠定工程基础。 |
| **[QLAM: A Quantum Long-Attention Memory Approach to Long-Sequence Token Modeling](http://arxiv.org/abs/2605.13833v1)** | Nguyen et al. | 融合**量子计算原理**与长注意力机制，以亚二次复杂度建模超长序列依赖，为 Transformer 的上下文瓶颈提供跨学科解决思路。 |
| **[KVServe: Service-Aware KV Cache Compression for Communication-Efficient Disaggregated LLM Serving](http://arxiv.org/abs/2605.13734v1)** | Liu et al. | 针对 PD 分离架构中 KV Cache 跨网络传输的瓶颈，设计**服务感知压缩策略**，在通信效率与生成质量间实现动态最优权衡。 |
| **[EVA-Bench: A New End-to-end Framework for Evaluating Voice Agents](http://arxiv.org/abs/2605.13841v1)** | Bogavelli et al. | 首个联合解决**真实对话模拟**与**多维质量测量**的语音智能体基准，填补企业级语音 AI 评估体系的关键空白。 |
| **[MinT: Managed Infrastructure for Training and Serving Millions of LLMs](http://arxiv.org/abs/2605.13779v1)** | Mind Lab et al. | 面向百万级 LoRA 策略的**托管基础设施**，通过避免物化合并、共享基础模型部署，实现超大规模个性化模型的经济训练与在线服务。 |
| **[Topology-Preserving Neural Operator Learning via Hodge Decomposition](http://arxiv.org/abs/2605.13834v1)** | Zheng et al. | 从函数空间视角揭示**霍奇正交性**可分离不可学习的拓扑自由度与可学习的几何动力学，为科学机器学习中的守恒律保持提供数学严谨框架。 |

### 📊 应用（垂直领域、多模态、代码生成）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[WARDEN: Endangered Indigenous Language Transcription and Translation with 6 Hours of Training Data](http://arxiv.org/abs/2605.13846v1)** | Zhang et al. | 以**仅 6 小时标注音频**实现澳大利亚濒危语言 Wardaman 的转录与翻译，为极低资源语言保护提供可复用的技术路径。 |
| **[Senses Wide Shut: A Representation-Action Gap in Omnimodal LLMs](http://arxiv.org/abs/2605.13737v1)** | Nguyen Quang et al. | 揭露全模态 LLM 的**表征-行动鸿沟**：文本前提与感知输入矛盾时，失败根源不在感知而在行动选择机制，重新审视"感知 grounding"的本质。 |
| **[ENSEMBITS: an alphabet of protein conformational ensembles](http://arxiv.org/abs/2605.13789v1)** | Shi, Oliver | 突破静态结构 tokenization 局限，构建**蛋白质构象集合的字母表**，捕获相关运动与替代构象状态，赋能蛋白质语言建模与功能预测。 |
| **[Toward AI-Driven Digital Twins for Metropolitan Floods](http://arxiv.org/abs/2605.13761v1)** | Si et al. | 以**条件潜变量动力学网络**替代浅水方程求解器，将 420 万格点城市洪水的 96 小时模拟从 55 分钟压缩至可交互速度，推动实时灾害孪生。 |

---

## 研究趋势信号

**智能体交互范式的硬件化跃迁**：多智能体系统正从"语言协议层"向"权重协议层"下沉——Bao 等人的权重更新机制与 MinT 的百万 LoRA 基础设施形成呼应，暗示未来 AI 协作可能催生新型"神经链路"标准。**流式推理的工程成熟**：Norgren 的状态化 Transformer 与 KVServe 的分离式压缩共同指向 LLM 服务从"批处理幻觉"向"持续计算"的范式转移，实时 AI 的延迟瓶颈正在被系统性拆解。此外，**科学计算的算子学习**（Hodge 分解、潜变量 PDE 求解）与**量子-经典混合架构**（QLAM）的并行涌现，表明基础模型正深度嵌入自然科学的基础设施层。

---

## 值得精读

### 1. [Good Agentic Friends Do Not Just Give Verbal Advice: They Can Update Your Weights](http://arxiv.org/abs/2605.13839v1)

**理由**：这篇论文提出了多智能体协作的"后语言"范式。当前所有主流框架（AutoGPT、MetaGPT、Swarm 等）均依赖自然语言作为智能体间唯一接口，导致严重的 token 浪费与信息损失。作者证明直接传输梯度/权重更新可将通信开销降低数量级，同时提升任务性能——这相当于在 AI 领域重新定义了"进程间通信"的抽象层级，可能催生新一代智能体操作系统。

### 2. [Negation Neglect: When models fail to learn negations in training](http://arxiv.org/abs/2605.13829v1)

**理由**：一个反直觉却致命的发现。安全微调的核心逻辑是"用否定性标注让模型识别有害内容"，但该研究证明这一逻辑存在根本性缺陷：否定标记在训练中被模型系统性忽略，反而强化了对被否定内容的信念。这对 RLHF、安全数据集构建、以及所有依赖"否定标注"的 AI 对齐工作具有颠覆性启示，亟需方法论层面的修正。

### 3. [Attention Once Is All You Need: Efficient Streaming Inference with Stateful Transformers](http://arxiv.org/abs/2605.13784v1)

**理由**：工程实现简洁优雅，却可能改变 LLM 服务的基础设施架构。传统推理引擎的请求驱动假设与流式场景存在根本错配，作者提出的数据驱动有状态模型将预填充成本恒定为 O(1)，使"无限上下文窗口"在工程层面首次变得可行。对于实时对话、监控分析、嵌入式 AI 等场景，这一工作的落地价值极高。

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*