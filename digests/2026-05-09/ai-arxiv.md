# ArXiv AI 研究日报 2026-05-09

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-05-09 00:21 UTC

---

# ArXiv AI 研究日报 | 2026-05-09

---

## 今日速览

今日ArXiv共收录50篇AI核心论文，研究热点集中在**智能体自主进化**与**模型效率优化**两大方向。MoE架构迎来新范式，UniPool提出全局共享专家池打破逐层隔离的固有设计；递归智能体RAO和技能自进化系统SkillOS推动Agent向"自我迭代"迈进。数学推理领域出现Verifier-Backed难题生成与AI Co-Mathematician工作平台，显示AI for Science正从辅助工具向协作伙伴升级。安全评估方面，无基准比较评分和动态越狱预算分配等研究回应了实际部署中的紧迫需求。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[UniPool: A Globally Shared Expert Pool for Mixture-of-Experts](http://arxiv.org/abs/2605.06665v1)** | Huang M. et al. | 打破MoE逐层专家隔离的惯例，提出全局共享专家池，实现专家容量与模型深度的解耦，参数效率显著提升。 |
| **[EMO: Pretraining Mixture of Experts for Emergent Modularity](http://arxiv.org/abs/2605.06663v1)** | Wang R., Bhagia A., Min S. | 通过预训练诱导MoE自发形成功能模块化，使模型可按需激活特定能力子集，解决"全模型部署"的冗余问题。 |
| **[Optimizer-Model Consistency: Full Finetuning with the Same Optimizer as Pretraining Forgets Less](http://arxiv.org/abs/2605.06654v1)** | Liu Y., Wang J., Zhang T. | 发现预训练与微调使用相同优化器可显著缓解灾难性遗忘，为LLM持续学习提供简单有效的实践准则。 |
| **[Why Global LLM Leaderboards Are Misleading](http://arxiv.org/abs/2605.06656v1)** | Moondra J. et al. | 基于8.9万条多语言对比数据，证明全局Bradley-Terry排名对2/3模型对产生误导，呼吁采用异构小组合评估。 |
| **[Weight-Decay Turns Transformer Loss Landscapes Villani](http://arxiv.org/abs/2605.06599v1)** | Das A., Dutta S. | 首次从泛函分析角度严格刻画权重衰减对Transformer损失景观的影响，为优化理论奠定数学基础。 |
| **[UniSD: Towards a Unified Self-Distillation Framework for Large Language Models](http://arxiv.org/abs/2605.06597v1)** | Jin Y. et al. | 统一自蒸馏框架解决自回归LLM中自生成轨迹的正确性判定与合理推理提取难题，无需外部强教师模型。 |
| **[The Structural Origin of Attention Sink](http://arxiv.org/abs/2605.06611v1)** | Li S. et al. | 从方差差异、超级神经元和维度差异三方面给出注意力汇聚现象的机制性解释，为KV Cache优化提供理论依据。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[Recursive Agent Optimization](http://arxiv.org/abs/2605.06639v1)** | Gandhi A. et al. | 提出RAO方法训练递归智能体，可自主生成子任务实例并委托执行，实现推理时的自然规模扩展。 |
| **[SkillOS: Learning Skill Curation for Self-Evolving Agents](http://arxiv.org/abs/2605.06614v1)** | Ouyang S. et al. | 为流式任务部署设计技能策展系统，使Agent能从历史交互中蒸馏、评估和复用高质量技能，突破"一次性解题"局限。 |
| **[MASPO: Joint Prompt Optimization for LLM-based Multi-Agent Systems](http://arxiv.org/abs/2605.06623v1)** | Wang Z. et al. | 首次实现多智能体系统中跨角色提示的联合优化，解决交互复杂性带来的非独立同分布挑战。 |
| **[StraTA: Strategic Trajectory Abstraction for Agentic RL](http://arxiv.org/abs/2605.06642v1)** | Xue X. et al. | 通过策略性轨迹抽象将长期决策分解为可重用的子程序，改善LLM Agent在扩展轨迹中的探索与信用分配。 |
| **[Can RL Teach Long-Horizon Reasoning to LLMs? Expressiveness Is Key](http://arxiv.org/abs/2605.06638v1)** | Wang T. et al. | 构建ScaleLogic可控推理框架，系统揭示RL提升LLM长程推理的关键瓶颈在于策略表达力而非数据规模。 |
| **[AI Co-Mathematician: Accelerating Mathematicians with Agentic AI](http://arxiv.org/abs/2605.06651v1)** | Zheng D. et al. | 专为数学家设计的交互式Agent工作台，覆盖从构思、文献到证明验证的完整研究闭环，推动AI数学协作范式。 |

### 🔧 方法与框架（新技术、基准测试、效率优化）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[SoftSAE: Dynamic Top-K Selection for Adaptive Sparse Autoencoders](http://arxiv.org/abs/2605.06610v1)** | Stępień J. et al. | 动态Top-K选择机制使稀疏自编码器自适应调整激活稀疏度，提升LLM与ViT可解释性的特征提取质量。 |
| **[Beyond Negative Rollouts: Positive-Only Policy Optimization](http://arxiv.org/abs/2605.06650v1)** | Xu M., Fang H. | 仅利用正样本进行策略优化，通过隐式负梯度避免RLVR中负轨迹采样的方差问题，简化推理模型训练流程。 |
| **[When and Why SignSGD Outperforms SGD](http://arxiv.org/abs/2605.06615v1)** | Tao H. et al. | 基于ℓ₁范数下界理论解释SignSGD/Muon在大模型训练中的优势，为符号优化算法的适用场景提供判据。 |
| **[Verifier-Backed Hard Problem Generation for Mathematical Reasoning](http://arxiv.org/abs/2605.06660v1)** | Lai Y. et al. | 验证器驱动的难题生成框架，确保数学问题的有效性、挑战性和新颖性，为LLM训练提供高质量自动标注数据。 |

### 📊 应用（垂直领域、多模态、代码生成）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[NeuroAgent: LLM Agents for Multimodal Neuroimaging Analysis](http://arxiv.org/abs/2605.06584v1)** | Zhong L. et al. | 面向多模态神经影像的LLM Agent，自动化预处理流程配置、质量控制和跨工具链协调，降低神经科学研究门槛。 |
| **[AI CFD Scientist: Open-Ended CFD Discovery with Physics-Aware AI Agents](http://arxiv.org/abs/2605.06607v1)** | Somasekharan N. et al. | 将AI Agent闭环扩展至计算流体力学高保真模拟，通过物理感知验证机制解决"求解器完成≠物理有效"难题。 |
| **[ActCam: Zero-Shot Joint Camera and 3D Motion Control](http://arxiv.org/abs/2605.06667v1)** | El Khalifi O. et al. | 零样本联合控制角色动作与相机轨迹的视频生成方法，为影视创作提供细粒度的表演与摄影双重操控。 |
| **[DINORANKCLIP: DINOv3 Distillation for Vision-Language Pretraining](http://arxiv.org/abs/2605.06592v1)** | Jiang S. et al. | DINOv3蒸馏注入CLIP，通过高阶排序一致性损失解决全局池化导致的细粒度视觉信息丢失问题。 |

---

## 研究趋势信号

**"Agent自我迭代"正成为新范式**：今日多篇论文指向智能体从"被调用"到"自进化"的跃迁——RAO的递归委托、SkillOS的技能策展、StraTA的策略抽象，共同构成Agent自主提升的能力闭环。与此同时，**MoE架构进入"后固定设计"时代**，UniPool和EMO从专家共享与功能模块化两个维度挑战传统MoE的刚性假设。值得关注的是，**AI for Science从工具向"协作者"升级**：AI Co-Mathematician和AI CFD Scientist均强调人机交互式探索，而非单向自动化，反映科学研究对AI的需求正从"加速计算"转向"加速发现"。

---

## 值得精读

### 1. [Recursive Agent Optimization](http://arxiv.org/abs/2605.06639v1) — Gandhi et al.
**理由**：递归智能体是Agent架构的根本性创新。RAO不仅提出训练方法，更重新定义了Agent的能力边界——通过自我实例化实现推理时的规模扩展，这与当前主流的"更大模型=更强能力"路径形成鲜明对比。其强化学习框架中的递归信用分配机制具有广泛的算法借鉴价值，对构建可扩展的自主系统至关重要。

### 2. [UniPool: A Globally Shared Expert Pool for Mixture-of-Experts](http://arxiv.org/abs/2605.06665v1) — Huang et al.
**理由**：MoE是当前大模型效率化的核心方案，但逐层专家隔离已成为隐性共识。UniPool打破这一惯例，证明全局共享不仅可行且更优，可能引发MoE设计的范式转移。论文对专家专业化模式的分析（跨层共享vs.层内隔离）为理解MoE的内部工作机制提供了新视角，对模型压缩和动态推理有直接工程价值。

### 3. [Why Global LLM Leaderboards Are Misleading](http://arxiv.org/abs/2605.06656v1) — Moondra et al.
**理由**：基于近9万条真实对比数据的实证研究，直接挑战当前行业评估基础设施的合理性。其"小组合评估"提案若被采纳，将改变模型选型、采购和监管的实践方式。对多语言场景的深入分析尤其重要，揭示了英语中心排名对非英语模型的系统性低估，具有显著的公平性政策含义。

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*