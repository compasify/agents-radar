# ArXiv AI 研究日报 2026-08-13

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-13 01:00 UTC

---

# 📄 ArXiv AI 研究日报（2026-08-13）

> 覆盖 cs.AI / cs.CL / cs.LG 等类别共 50 篇最新论文。

## 1. 今日速览

今日投稿中，LLM 安全与对齐是最强主线：多项工作分别揭示低资源语言安全护栏失效、紧急错位的训练数据归因，以及条件概率一致性验证，安全研究正从现象观察走向机制解释与形式化验证。智能体方向同样活跃，免评估技能压缩与 agentic coding 记忆失控研究形成有趣对照。方法层面，ReRound 量化与混合 RL rollout 调度直指部署成本；应用层面，手术机器人世界模型、金融推理基准与多语言文生图评测展示了 AI 在垂直领域的纵深推进。

## 2. 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [The Illusion of Cross-Lingual Safety in Low-Resource Languages](http://arxiv.org/abs/2608.11146v1) | Oppong, Sahil, Belay et al. | 系统测量 LLM 安全对齐在低资源语言上的迁移表现，发现英语安全训练无法有效覆盖低资源语言，形成“安全幻觉”。揭示多语言安全护栏的系统性盲区，是多语言部署前必须正视的评估维度。 |
| [ReRound: Reconstructive Rounding to Resolve Midpoint Ambiguity in Calibration-Free LLM Quantization](http://arxiv.org/abs/2608.11045v1) | Hsieh, Kung | 针对权重量化中位于量化区间中点的“中点歧义”，提出基于条件扩散模型的重建式舍入方法。无需校准集即可缓解 round-to-nearest 的量化损失，为部署侧 LLM 压缩提供了新的精度-成本平衡手段。 |
| [Mapping and Measuring the Behavioral Evolution of Large Language Models](http://arxiv.org/abs/2608.11027v1) | Qiao, Ding, Fan | 用 10,000 条共享提示采集 6 个家族 32 个模型的输出，并在嵌入空间刻画模型行为随代际的演化轨迹。从“分数排名”转向“行为谱系”，为模型选择、监控和世代回归分析提供了可量化工具。 |
| [Data Attribution of Emergent Misalignment with Persona Features](http://arxiv.org/abs/2608.11025v1) | Vetter, Kaczér, Flek et al. | 将紧急错位（窄任务微调导致跨领域有害行为）归因于预训练中形成的 persona 特征，并通过数据归因定位触发样本。对“微调后失控”现象给出机制性解释，可指导对齐数据的筛选与清洗。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [Long-Horizon AI Research for Grothendieck Constant: A Case Study in Human-AI Mathematical Collaboration](http://arxiv.org/abs/2608.11195v1) | Li, Saha, Xue et al. | 以 Grothendieck 常数上下界改进为案例，详细记录 AI 智能体参与长时程数学研究的流程、失败模式与有效策略。是稀缺的高质量“人类-AI 数学协作”实证研究，对科研智能体设计有直接借鉴意义。 |
| [Test-Time Self-Evolving GUI Visual Grounding via Reflection-Guided On-Policy Self-Distillation](http://arxiv.org/abs/2608.11191v1) | Xuan, Li | 提出反思引导的 on-policy 自蒸馏方法，使 GUI 视觉定位模型在测试时无需更新参数即可适应未见界面。缓解 GUI 智能体的冻结泛化问题，为部署后持续适应提供轻量方案。 |
| [Why Does CLAUDE.md Keep Growing? Catastrophic Remembering in Agentic Coding](http://arxiv.org/abs/2608.11095v1) | Chakrabarti | 以“灾难性记住”解释 agentic coding 中记忆文件（如 CLAUDE.md）无限膨胀：追加指令的成本恒低，而删除必须追溯指令的原始理由。切中智能体长期记忆维护的要害，对记忆压缩与遗忘机制设计有重要启示。 |
| [SkillZip: Evaluation-Free Skill Compression for Self-Evolving Agents by Discovering Reusable Structure](http://arxiv.org/abs/2608.11079v1) | Bai, Lin, Liu et al. | 提出免评估技能压缩方法，通过发现技能库中的可复用结构，将自进化智能体积累的冗余技能压缩为紧凑表示。降低技能检索与推理成本，是提升智能体长期自主可扩展性的关键工程进展。 |

### 🔧 方法与框架（新技术、基准测试、效率优化）

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [How to Verify Consistency of Probabilistic Claims](http://arxiv.org/abs/2608.11181v1) | Paradise, Richardson, Bengio et al. | 研究概率预测器回答大量条件概率查询时的一致性，并考察多项式时间内的可验证性。将“预测诚实性”落实为可计算属性，为 AI 安全审计提供了形式化基础（合作者含 Yoshua Bengio）。 |
| [Scheduling Mixed RL Rollouts Beyond Prefix Locality](http://arxiv.org/abs/2608.11152v1) | Hong, Yuan, Ding et al. | 面向 LLM RL 后训练中多域、多反馈范式混合的 rollout 调度问题，提出超越前缀局部性的调度策略。直接影响 RL 后训练集群的吞吐与延迟，是规模化合集中易被忽视的系统瓶颈。 |
| [sLTN: Structural Logic Tensor Networks](http://arxiv.org/abs/2608.11136v1) | Rinaldi, Serafini | 提出结构逻辑张量网络（sLTN），将逻辑张量网络从扁平集合数据扩展至图/关系结构数据的约束学习。推进神经符号计算处理结构化知识的能力，为知识图谱与关系推理提供新框架。 |

### 📊 应用（垂直领域、多模态、代码生成）

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [Surgical WAM: A World-Action Model for Data-Efficient Surgical Robot Learning](http://arxiv.org/abs/2608.11204v1) | Bao, Jiang, Chen et al. | 提出手术世界-动作模型（Surgical WAM），以更少的动作标注实现数据高效的手术机器人策略学习。手术动作数据稀缺且采集昂贵，该工作为长时程、高精度手术操作学习提供了可行范式。 |
| [V-FiLLM: Verified Financial LLM Reasoning Benchmark](http://arxiv.org/abs/2608.11047v1) | Larsen, Laurent, Rakhamsari et al. | 从可执行计算树自动生成金融推理基准，支持答案的机器验证与推理链重构。弥补金融 LLM 评测中推理不可验证、标签易污染的缺口，是垂直领域评测基准的范式样本。 |
| [R4DSG: Relative 4D Scene Graph Memory for Object-Centric Question Answering in Long Egocentric Video](http://arxiv.org/abs/2608.11017v1) | Ma, Mao, Li et al. | 提出相对 4D 场景图内存，在长时第一视角视频中维护对象身份、状态与时空关系，支持对象级问答。为可穿戴 AI 助手的长期对象中心记忆提供新方案，突破 caption/transcript 内存的对象一致性局限。 |
| [On the Limitations of Cross-Lingual Consistency in Multilingual Text-to-image Generation](http://arxiv.org/abs/2608.11002v1) | Zhang, Yan, Xie et al. | 发布多语言文生图基准 LingT2I，系统对比 T2I 模型在跨语言提示下的一致性与质量差距。首次系统刻画文生图模型的非英语性能衰减，将多语言评测引入视觉生成领域。 |

## 3. 研究趋势信号

安全对齐正从“事后解释”走向“可归因、可验证”：紧急错位被归因到预训练 persona 特征，条件概率一致性获得多项式时间验证框架。智能体研究重心从“能力提升”转向“长期记忆维护”——CLAUDE.md 无限膨胀与 SkillZip 技能压缩从正反两面印证这一趋势。跨语言泛化成为安全、工具使用、文生图三个领域的共同评估命题。此外，AI-for-Math 的长时程协作案例（Grothendieck 常数）预示科研智能体正从基准刷分走向真实科研场景。

## 4. 值得精读

- **Long-Horizon AI Research for Grothendieck Constant**（[链接](http://arxiv.org/abs/2608.11195v1)）：完整记录 AI 参与真实数学研究的长时程协作，包含问题分解、智能体编排与失败模式，对 AI4Science 和科研智能体设计都有极高参考价值。
- **How to Verify Consistency of Probabilistic Claims**（[链接](http://arxiv.org/abs/2608.11181v1)）：把“AI 诚实性”转化为可判定的计算问题，同时触及复杂度理论、概率校准与 AI 安全，值得细读其证明与边界条件。
- **Data Attribution of Emergent Misalignment with Persona Features**（[链接](http://arxiv.org/abs/2608.11025v1)）：用数据归因将“微调导致失控”这一危险现象与预训练特征相连，方法论严谨，对对齐实践有直接指导意义。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*