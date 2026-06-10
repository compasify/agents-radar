# ArXiv AI 研究日报 2026-06-10

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-06-10 00:30 UTC

---

# ArXiv AI 研究日报 | 2026-06-10

---

## 一、今日速览

今日 ArXiv 共 50 篇 AI 相关论文，核心热点集中在**智能体系统评估与架构**、**大语言模型对齐与安全**、**机器人世界-动作模型**三大方向。多篇工作直击当前痛点：长程研究的迭代反馈机制缺失（Multi-Turn Evaluation of Deep Research Agents）、LLM RL 中 KL 散度正则化的重新审视（Rethinking Divergence Regularization）、以及 VLA 模型的安全过滤（Attention-Guided Safety Filter）。此外，科学仿真中的自适应编码智能体（SIGA）、低资源语言翻译的数据主权方案、以及扩散模型表示学习的理论框架也展现了 AI 向垂直领域纵深发展的趋势。

---

## 二、重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 标题 | 作者 | 一句话说明 |
|:---|:---|:---|
| [Rethinking the Divergence Regularization in LLM RL](http://arxiv.org/abs/2606.09821v1) | Jiarui Yao, Xiangxin Zhou, Penghui Qi 等 | 指出 LLM RL 中 off-policy 训练导致 KL/α-散度正则化效果不佳，提出重新设计 trust-region 控制策略以提升训练稳定性。 |
| [The Neutral Mask: How RLHF Provides Shallow Alignment while Leaving Partisan Structure Intact in a Large Language Model](http://arxiv.org/abs/2606.09735v1) | Wendy K. Tam | 实证发现 RLHF 仅产生"浅层对齐"，未能改变模型内部党派化知识结构，对 AI 安全中的"价值观对齐"提出深刻质疑。 |
| [Tight Sample Complexity of Transformers](http://arxiv.org/abs/2606.09731v1) | Chenxiao Yang, Nathan Srebro, Zhiyuan Li | 首次紧刻画 Transformer 的 VC 维与样本复杂度，上下界几乎匹配，为理解 Transformer 泛化能力奠定理论基础。 |
| [Learning to Attack and Defend: Adaptive Red Teaming of Language Models via GRPO](http://arxiv.org/abs/2606.09701v1) | Blake Bullwinkel, Eugenia Kim, Amanda Minnich 等 | 用 GRPO 实现攻击者与防御者的自适应协同训练，为 LLM 安全测试提供可扩展的动态红队框架。 |
| [PsychoSafe: Eliciting Psychologically-Informed Refusals in Large Language Models](http://arxiv.org/abs/2606.09697v1) | Gianluca Barmina, Federico Torrielli, Sven Harms 等 | 提出基于心理学理论的拒绝生成框架，在高风险交互中用"有帮助的拒绝"替代生硬拒答，平衡安全性与可用性。 |
| [IS-CoT: Breaking the Long-form Generation Collapse via Interleaved Structural Thinking](http://arxiv.org/abs/2606.09709v1) | Zechen Sun, Yuyang Sun, Zecheng Tang 等 | 发现推理增强模型在开放式长文本生成中存在严重"长度崩溃"，提出交错结构思维链以恢复长程连贯性。 |

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 标题 | 作者 | 一句话说明 |
|:---|:---|:---|
| [Multi-Turn Evaluation of Deep Research Agents Under Process-Level Feedback](http://arxiv.org/abs/2606.09748v1) | Rishabh Sabharwal, Hongru Wang, Amos Storkey 等 | 首次对深度研究智能体进行多轮过程级反馈评估，发现多数 DRA 在迭代反馈中提升有限，揭示当前长程推理的关键瓶颈。 |
| [SearchSwarm: Towards Delegation Intelligence in Agentic LLMs for Long-Horizon Deep Research](http://arxiv.org/abs/2606.09730v1) | Pu Ning, Quan Chen, Kun Tao 等 | 提出"委托智能"架构，让主智能体动态分解任务并调度子智能体，突破长程研究中上下文窗口的固有限制。 |
| [Collaborative Human-Agent Protocol (CHAP)](http://arxiv.org/abs/2606.09751v1) | Arsalan Shahid, Gordon Suttie, Philip Black | 为生产级人机协作智能体设计标准化协议，明确责任边界、人类介入点与安全回退机制。 |
| [SIGA: Self-Evolving Coding-Agent Adapters for Scientific Simulation](http://arxiv.org/abs/2606.09774v1) | Matthew Ho, Brian Liu, Jixuan Chen 等 | 让编码智能体通过少量交互自主学习科学仿真器的专用输入语言，显著降低领域科学家的使用门槛。 |
| [Observability for Delegated Execution in Agentic AI Systems](http://arxiv.org/abs/2606.09692v1) | Abhinav Mishra, Kumar Sharad | 指出传统审计日志无法识别智能体系统中的委托执行关系，提出新的可观测性形式化框架以支撑安全审计。 |

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

| 标题 | 作者 | 一句话说明 |
|:---|:---|:---|
| [Evaluation Cards: An Interpretive Layer for AI Evaluation Reporting](http://arxiv.org/abs/2606.09809v1) | Avijit Ghosh, Anka Reuel, Jenny Chim 等 | 提出"评估卡片"标准化报告层，解决模型评估结果跨来源不可比、难追溯的结构性问题。 |
| [BrainSurgery: Reproducible and Reliable Declarative Weight Manipulations for Model Editing and Upcycling](http://arxiv.org/abs/2606.09707v1) | Gianluca Barmina, Annemette Broch Pirchert, Andrea Blasi Núñez 等 | 提供声明式权重操作工具，使模型编辑、精度转换、低秩分解等大规模 checkpoint 管理工作可复现、可审计。 |
| [AHA-WAM: Asynchronous Horizon-Adaptive World-Action Modeling with Observation-Guided Context Routing](http://arxiv.org/abs/2606.09811v1) | Jisong Cai, Long Ling, Shiwei Chu 等 | 打破世界模型与动作执行的时间分辨率耦合，通过异步自适应视界建模提升机器人策略学习效率。 |
| [Proxy Reward Internalization and Mechanistic Exploitation](http://arxiv.org/abs/2606.09711v1) | Mohammad Beigi, Ming Jin, Lifu Huang | 前置研究奖励篡改（reward hacking）的"学习前兆"，揭示代理奖励如何在模型内部被机制性利用。 |
| [FASE: Fast Adaptive Semantic Entropy for Code Quality](http://arxiv.org/abs/2606.09800v1) | Shizhe Lin, Ladan Tahvildari | 为 multi-agent 代码生成设计快速自适应语义熵，低成本检测 LLM 幻觉与错误传播。 |

---

### 📊 应用（垂直领域、多模态、代码生成）

| 标题 | 作者 | 一句话说明 |
|:---|:---|:---|
| [OmniGameArena: A Unified UE5 Benchmark for VLM Game Agents with Improvement Dynamics](http://arxiv.org/abs/2606.09826v1) | Mingxian Lin, Shengju Qian, Yuqi Liu 等 | 构建首个支持多智能体、多游戏、统一协议的 UE5 VLM 游戏智能体基准，特别强调"改进动态"而非单次得分。 |
| [iOSWorld: A Benchmark for Personally Intelligent Phone Agents](http://arxiv.org/abs/2606.09764v1) | Lawrence Keunho Jang, Mareks Woodside, Geronimo Carom 等 | 首个评估手机智能体"个人智能"的基准，要求模型基于用户身份、历史与偏好进行个性化推理与操作。 |
| [SpatialWorld: Benchmarking Interactive Spatial Reasoning of Multimodal Agents in Real-World Tasks](http://arxiv.org/abs/2606.09669v1) | Hongcheng Gao, Hailong Qu, Jingyi Tang 等 | 构建真实世界交互式空间推理基准，超越静态 VQA 评估多模态智能体的物理环境理解与操作能力。 |
| [Your Model Already Knows: Attention-Guided Safety Filter for Vision-Language-Action Models](http://arxiv.org/abs/2606.09749v1) | Seongbin Park, Fan Zhang, Baharan Mirzasoleiman 等 | 利用 VLA 模型自身注意力生成轻量安全过滤器，无需外部查询即可避免与无关物体的碰撞。 |
| [Data Synthesis and Parameter-Efficient Fine-Tuning for Low-Resource NMT: A Case Study on Q'eqchi' Mayan](http://arxiv.org/abs/2606.09767v1) | Alexander Chulzhanov, Soeren Eberhardt, Arjun Mukherjee | 通过合成数据与参数高效微调，在不抓取目标语言网络数据的前提下构建低资源土著语言 NMT 系统，尊重数据主权。 |

---

## 三、研究趋势信号

今日投稿释放出三个明确信号：**其一，"评估基础设施"成为智能体研究的核心竞争点**——从 Evaluation Cards 到 OmniGameArena、iOSWorld、SpatialWorld，学界正从"刷榜"转向构建更可解释、更贴近真实使用场景的评估体系；**其二，RLHF/RL 的对齐机制受到深度反思**——多篇论文从理论（divergence regularization）、实证（Neutral Mask）到机制（PRIME）揭示当前对齐训练的局限性；**其三，世界模型与机器人学习的融合加速**——AHA-WAM、Echo-Memory、VLA 安全过滤器等工作共同推动"感知-预测-行动"一体化架构走向实用化。

---

## 四、值得精读

### 1. [Multi-Turn Evaluation of Deep Research Agents Under Process-Level Feedback](http://arxiv.org/abs/2606.09748v1)
**理由**：深度研究智能体（DRA）是当前 Agentic AI 的前沿方向，但该工作首次系统质疑了"单次输出评估"的合理性。通过引入 self-reflection 与 oracle feedback 两种多轮设置，论文为长程推理研究建立了更严苛的评估范式，其结果很可能重塑该领域的基准设计。

### 2. [Rethinking the Divergence Regularization in LLM RL](http://arxiv.org/abs/2606.09821v1)
**理由**：PPO/GRPO 中的 KL 散度正则化是后训练 LLM 的标准配方，但该论文指出 off-policy 训练场景下其理论基础存在缺陷，并提出改进方向。对于从事 RLHF、推理模型训练的从业者，这项工作可能直接影响算法设计选择。

### 3. [The Neutral Mask: How RLHF Provides Shallow Alignment while Leaving Partisan Structure Intact in a Large Language Model](http://arxiv.org/abs/2606.09735v1)
**理由**：该研究以因果推断风格分析 RLHF 的真实效果，挑战"RLHF 成功植入人类价值观"的默认假设。若结论具有普遍性，将对 AI 安全治理、模型审计与更深层对齐方法（如 mechanistic interpretability-based alignment）产生重要影响。

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*