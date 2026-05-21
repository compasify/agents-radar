# ArXiv AI 研究日报 2026-05-21

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-05-21 00:26 UTC

---

# ArXiv AI 研究日报 | 2026-05-21

---

## 今日速览

今日ArXiv共收录50篇AI核心论文，**推理与智能体**成为最活跃方向：思维链的显隐式推理分离、对比式策略思考、以及临床证据自动检索等研究推动LLM从"回答问题"向"主动求解"演进。**效率优化**方面，MoE扩散模型推理加速与投机解码的新树构造方法值得关注。**多模态医疗AI**持续升温，视觉归因可信度与低资源放射学报告标注成为临床落地的关键瓶颈。此外，时间序列基础模型进入"Scaling Era"，开源模型参数从4M扩展至25亿，验证了该领域的规模定律。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[TIDE: Efficient and Lossless MoE Diffusion LLM Inference with I/O-aware Expert Offload](http://arxiv.org/abs/2605.20179v1)** | Z. Chen, Y. Zhao, Y. Sui 等 | 针对MoE架构扩散大语言模型的I/O感知专家卸载系统，解决显存带宽瓶颈，实现无损加速——扩散LLM规模化部署的关键基础设施。 |
| **[From Seeing to Thinking: Decoupling Perception and Reasoning Improves Post-Training of Vision-Language Models](http://arxiv.org/abs/2605.20177v1)** | J. Wu, H. Chen, H. Tu 等 | 系统揭示VLM在视觉任务上的瓶颈在于**感知不足**而非推理，提出感知-推理解耦的后训练框架，为VLM能力诊断提供新范式。 |
| **[Not Every Rubric Teaches Equally: Policy-Aware Rubric Rewards for RLVR](http://arxiv.org/abs/2605.20164v1)** | U. Tyagi, X. Guo, M. Rezaei 等 | 为强化学习可验证奖励(RLVR)引入策略感知评分标准，解决多标准定性任务的信用分配问题——超越简单正确性检验的对齐新思路。 |
| **[KoRe: Compact Knowledge Representations for Large Language Models](http://arxiv.org/abs/2605.20170v1)** | D. Cavicchini, F. Giunchiglia, J. Staiano | 批判LLM将知识编码于参数中的根本缺陷，提出紧凑知识表示方案，指向更模块化、可解释的知识存储架构。 |
| **[MixRea: Benchmarking Explicit-Implicit Reasoning in Large Language Models](http://arxiv.org/abs/2605.20128v1)** | Y. Cai, Z. Huang, M. Liu 等 | 受人类"非注意盲视"启发，构建显式-隐式推理基准，发现LLM存在类似人类的注意力偏差导致推理失败——高 stakes 决策风险评估工具。 |
| **[ThoughtTrace: Understanding User Thoughts in Real-World LLM Interactions](http://arxiv.org/abs/2605.20087v1)** | C. Jin, B. Li, H. Xie 等 | 首个大规模"用户真实想法"数据集，捕获多轮对话中用户发送消息前的自我报告推理过程，为对话系统优化提供全新监督信号。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[ClinSeekAgent: Automating Multimodal Evidence Seeking for Agentic Clinical Reasoning](http://arxiv.org/abs/2605.20176v1)** | J. Wu, L. Zhang, Y. Wang 等 | 首个主动寻求、迭代规划、综合多模态证据的临床智能体，打破"证据已预先整理"的不切实际假设——临床AI从被动回答到主动探究的关键跨越。 |
| **[CopT: Contrastive On-Policy Thinking with Continuous Spaces for General and Agentic Reasoning](http://arxiv.org/abs/2605.20075v1)** | D. Shi, H. Zhu, X. Yuan 等 | 将思维链重构为"按需思考"的对比式策略学习，在连续隐空间中进行推理决策，显著降低不必要的token开销——推理效率与效果的双重提升。 |
| **[Rewarding Beliefs, Not Actions: Consistency-Guided Credit Assignment for Long-Horizon Agents](http://arxiv.org/abs/2605.20061v1)** | W. Tang, M. Li, S. Huang 等 | 针对部分可观察环境中的信念漂移问题，提出信念一致性奖励替代动作奖励，解决长程交互中的信用分配难题——RLVR在复杂环境中的扩展。 |
| **[A Methodology for Selecting and Composing Runtime Architecture Patterns for Production LLM Agents](http://arxiv.org/abs/2605.20173v1)** | V. Srinivasan | 形式化定义LLM智能体的"随机-确定性边界"(SDB)，提出四类架构模式的选择与组合方法论——生产系统从ad-hoc工程到系统设计的转折点。 |

### 🔧 方法与框架（新技术、基准测试、效率优化）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[Draft Less, Retrieve More: Hybrid Tree Construction for Speculative Decoding](http://arxiv.org/abs/2605.20104v1)** | Y. Shen, T. Liu, X. Hu 等 | 提出"检索增强+轻量草稿"的混合树构造策略，以检索token替代过度扩张的草稿树，突破VRAM带宽瓶颈——投机解码的工程实用化方案。 |
| **[Toto 2.0: Time Series Forecasting Enters the Scaling Era](http://arxiv.org/abs/2605.20119v1)** | E. Khwaja, C. Lettieri, G. Woo 等 | 证明时间序列基础模型遵循规模定律，开源4M-2.5B参数五款模型，刷新多项基准——该领域"GPT时刻"的前奏。 |
| **[Beyond Isotropy in JEPAs: Hamiltonian Geometry and Symplectic Prediction](http://arxiv.org/abs/2605.20107v1)** | R. Jenkinson Alvarez | 揭示JEPA各向同性正则化的结构性偏见，引入哈密顿几何与辛预测，为已知下游几何的任务提供最优表示——自监督学习的几何化深化。 |
| **[When Does Model Collapse Occur in Structured Interactive Learning?](http://arxiv.org/abs/2605.20151v1)** | Y. Wu, K. Zhou, W. Su | 理论刻画多智能体交互学习中模型崩溃的精确条件，区分"模型崩溃"与"误差累积"——合成数据训练的理论基础补完。 |

### 📊 应用（垂直领域、多模态、代码生成）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[Rethinking Visual Attribution for Chest X-ray Reasoning in Large Vision Language Models](http://arxiv.org/abs/2605.20158v1)** | G. Xiong, Q. Jin, S. Sinha 等 | 系统评估LVLM在胸部X光诊断中的视觉归因可信度，发现现有解释方法严重误导临床判断——医疗AI可解释性的警示性研究。 |
| **[VL-DPO: Vision-Language-Guided Finetuning for Preference-Aligned Autonomous Driving](http://arxiv.org/abs/2605.20082v1)** | Z. Xu, G. Jerfel, M. Haliem 等 | 将DPO偏好优化引入自动驾驶运动预测，用视觉语言反馈捕捉人类驾驶偏好的细微差别——模仿学习到偏好学习的范式迁移。 |
| **[PromptRad: Knowledge-Enhanced Multi-Label Prompt-Tuning for Low-Resource Radiology Report Labeling](http://arxiv.org/abs/2605.20052v1)** | Y.-J. Lin, T.-C. Lo, P.-C. Li 等 | 融合医学知识图谱的多标签提示微调，解决放射学报告自动标注的低资源困境——临床NLP落地的实用方案。 |
| **[Does Code Cleanliness Affect Coding Agents? A Controlled Minimal-Pair Study](http://arxiv.org/abs/2605.20049v1)** | P. Trivedi, O. Schmitt | 首个控制变量研究代码风格质量对AI编码代理的影响，发现"整洁度"显著影响任务完成率——代码库治理的新经济论证。 |

---

## 研究趋势信号

**"推理的精细化运营"成为核心主题**：今日多篇论文共同指向对LLM推理过程的拆解与优化——CopT将思维链从"必选项"变为"按需服务"，MixRea区分显隐推理路径，ClinSeekAgent将推理与证据获取闭环。这标志着社区从"Scaling推理长度"转向"优化推理结构"。同时，**生产系统的工程化方法论**正在形成：SDB架构模式、TIDE的I/O感知卸载、投机解码的混合策略，均指向LLM应用从研究原型到工业级系统的过渡。医疗AI领域出现**可信度危机与解决方案并进**的张力：视觉归因失效的警示与主动证据寻求、知识增强标注的改进同步出现。

---

## 值得精读

### 1. [ClinSeekAgent: Automating Multimodal Evidence Seeking for Agentic Clinical Reasoning](http://arxiv.org/abs/2605.20176v1)
**理由**：临床AI的"最后一英里"问题长期被忽视——现有系统假设证据已备好，但真实临床流程要求主动检索、跨模态整合、迭代验证。该工作首次构建完整闭环，其"证据寻求"框架可迁移至法律、科研等任何需要主动信息获取的专业领域。方法上结合了规划、检索、多模态融合与不确定性量化，是智能体设计的标杆案例。

### 2. [From Seeing to Thinking: Decoupling Perception and Reasoning Improves Post-Training of Vision-Language Models](http://arxiv.org/abs/2605.20177v1)
**理由**：该研究挑战了VLM领域的隐含假设——视觉任务失败源于推理不足。通过系统的控制实验，作者证明**感知瓶颈**才是主因，并给出可操作的解耦训练方案。这一诊断框架具有方法论层面的普适性：对于任何多模态系统，能力瓶颈的精确归因都是高效改进的前提。对当前追求"更长思维链"的潮流具有纠偏价值。

### 3. [Toto 2.0: Time Series Forecasting Enters the Scaling Era](http://arxiv.org/abs/2605.20119v1)
**理由**：时间序列是少数尚未被基础模型彻底征服的数据模态。该工作以严格的Scaling实验证明该领域存在明确的规模定律，并开源全参数系列模型。其"单一训练配方"的声明暗示了该领域可能正经历类似NLP 2018-2020年的预训练范式转变，对金融、能源、供应链等核心行业具有基础设施级意义。建议关注其数据构建与tokenization策略的细节。

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*