# ArXiv AI 研究日报 2026-06-12

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-06-12 00:32 UTC

---

好的，这是为您生成的《ArXiv AI 研究日报》。

---

## ArXiv AI 研究日报 (2026-06-12)

### 今日速览

今日投稿揭示了 AI 研究在几个关键方向上的深化。**大语言模型 (LLM)** 方面，工作重心从单纯的性能提升转向了更精细的**后训练行为控制**、**外部依赖审计**以及**上下文压缩效率**。**具身智能与机器人**领域表现活跃，多项研究聚焦于如何让机器人利用**低成本传感器**、**次优数据**以及**更高效的推理策略**来学习复杂策略。此外，**推理时计算分配**、**模型可解释性**以及**多智能体协作**成为备受关注的新兴主题，标志着领域正从“造更大模型”转向“更聪明地使用模型”。

### 重点论文

#### 🧠 大语言模型（架构、训练、对齐、评估）

- **[Anatomy of Post-Training: Using Interpretability to Characterize Data and Shape the Learning Signal](http://arxiv.org/abs/2606.12360v1)**
  - *Bergen et al.*
  - 使用可解释性技术来剖析模型后训练过程，揭示数据实际教授了什么，为精细化控制模型行为提供了新视角。

- **[Which Models Are Our Models Built On? Auditing Invisible Dependencies in Modern LLMs](http://arxiv.org/abs/2606.12385v1)**
  - *Adhikesaven et al.*
  - 首次系统性地审计现代 LLM 训练 pipeline 中对其他模型（如数据生成器、评判模型）的递归依赖，揭示了“模型构建模型”这一隐蔽生态。

- **[Measuring Epistemic Resilience of LLMs Under Misleading Medical Context](http://arxiv.org/abs/2606.12291v1)**
  - *Zhou et al.*
  - 研究发现，尽管 LLM 在医学考试中得分很高，但面对误导性上下文时其判断力极其脆弱，对“高分数=安全决策”的假设提出了挑战。

- **[Doc-to-Atom: Learning to Compile and Compose Memory Atoms](http://arxiv.org/abs/2606.12400v1)**
  - *Diao et al.*
  - 提出将长文档压缩为“记忆原子”的新方法，旨在解决长上下文场景下的注意力计算成本问题，有望提升长文档理解的效率。

- **[The Impossibility of Eliciting Latent Knowledge](http://arxiv.org/abs/2606.12268v1)**
  - *Friedl et al.*
  - 从理论上论证了从高级AI中完全可靠地提取其“隐藏知识”是不可能的，对AI诚实性研究提出了根本性的挑战。

#### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

- **[DIRECT: When and Where Should You Allocate Test-Time Compute in Embodied Planners?](http://arxiv.org/abs/2606.12402v1)**
  - *Dao et al.*
  - 系统分析了在具身智能规划器中分配推理时计算（test-time compute）的收益递减问题，提出了何时何地分配计算资源的指导原则。

- **[UniIntervene: Agentic Intervention for Efficient Real-World Reinforcement Learning](http://arxiv.org/6.12372v1)**
  - *Deng et al.*
  - 提出一种“智能干预”范式，让AI Agent自身决定何时请求人类帮助，显著减少了机器人强化学习中对人类反馈的需求。

- **[FACTR 2: Learning External Force Sensing for Commodity Robot Arms Improves Policy Learning](http://arxiv.org/abs/2606.12406v1)**
  - *Oh et al.*
  - 提出一种无需专用力传感器的数据驱动方法 (NEXT)，通过估计外部关节扭矩，让低成本机器人手臂也能进行力敏感的操作，大幅降低了灵巧操作的门槛。

- **[Ambient Diffusion Policy: Imitation Learning from Suboptimal Data in Robotics](http://arxiv.org/abs/2606.12365v1)**
  - *Wei et al.*
  - 提出一种从次优、低质量演示数据中学习机器人策略的扩散模型方法，解决了高质量机器人数据难以获取的瓶颈问题。

- **[Verifiable Environments Are LEGO Bricks: Recursive Composition for Reasoning Generalization](http://arxiv.org/abs/2606.12373v1)**
  - *Xiang et al.*
  - 提出将可验证的强化学习环境像乐高积木一样递归组合，以生成大量新环境，从而提升LLM在复杂推理任务上的泛化能力。

#### 🔧 方法与框架（新技术、基准测试、效率优化）

- **[Redesign Mixture-of-Experts Routers with Manifold Power Iteration](http://arxiv.org/abs/2606.12397v1)**
  - *Wu et al.*
  - 从几何角度重新设计了混合专家 (MoE) 模型的路由器，使用流形幂迭代方法，有望提升专家选择的准确性和模型性能。

- **[Claw-SWE-Bench: A Benchmark for Evaluating OpenClaw-style Agent Harnesses on Coding Tasks](http://arxiv.org/abs/2606.12344v1)**
  - *Zheng et al.*
  - 专门为评估通用 Agent (如OpenClaw) 的编程能力而设计的基准测试，填补了现有基准测试的空白。

- **[Breaking Entropy Bounds: Accelerating RL Training via MTP with Rejection Sampling](http://arxiv.org/abs/2606.12370v1)**
  - *Li et al.*
  - 提出了结合多Token预测 (MTP) 和拒绝采样来加速强化学习训练中Rollout阶段的方法，有望显著降低LLM的RL训练成本。

- **[Fourier Features Let Agents Learn High Precision Policies with Imitation Learning](http://arxiv.org/abs/2606.12334v1)**
  - *Gyenes et al.*
  - 通过在模仿学习中引入傅里叶特征，使策略能够更好地处理高频空间信息，从而在无需深度传感器的情况下显著提升高精度操作的性能。

#### 📊 应用（垂直领域、多模态、代码生成）

- **[Latent World Recovery for Multimodal Learning with Missing Modalities](http://arxiv.org/abs/2606.12362v1)**
  - *Wang et al.*
  - 针对多模态学习中模态缺失的问题，提出“潜在世界恢复”框架，特别适用于生物科学等数据不完整场景。

- **[TAHOE: Text-to-SQL with Automated Hint Optimization from Experience](http://arxiv.org/abs/2606.12387v1)**
  - *Chen et al.*
  - 提出一种能够自动从历史交互中学习并优化提示 (Hint) 的Text-to-SQL系统，旨在解决原型到产品部署中的现实难题。

### 研究趋势信号

1.  **从“训练”到“治理”**：论文数量激增，关注点从模型训练转向**后训练行为分析** (Anatomy of Post-Training)、**运行时治理** (Runtime Governance) 和**依赖审计** (Auditing Dependencies)，反映了行业对AI安全和可控性的迫切需求。

2.  **推理时计算的精细化分配**：越来越多的研究 (如 DIRECT) 开始质疑“统一增加推理计算”的万能性，转而探索**在推理过程中动态、有选择地分配计算资源**，以提高效率和效果。

3.  **具身智能的“节俭”之道**：机器人领域涌现出大量利用**次优数据 (Suboptimal Data)**、**低成本传感器 (No Dedicated Sensors)**、**有限的干预 (Fewer Human Interventions)** 的研究，这标志着该领域正经历从“数据/计算暴力”向“算法/数据效率”的务实转型。

### 值得精读

- **[Anatomy of Post-Training: Using Interpretability to Characterize Data and Shape the Learning Signal](http://arxiv.org/abs/2606.12360v1)**
  - **理由**：这篇论文为理解“黑盒”式的大模型后训练提供了强有力的分析工具，对指导未来的对齐、微调实践具有重要的方法论价值，是该方向的一项奠基性工作。

- **[Which Models Are Our Models Built On? Auditing Invisible Dependencies in Modern LLMs](http://arxiv.org/abs/2606.12385v1)**
  - **理由**：揭示了LLM开发中一个被广泛忽视但极为关键的问题：模型间的递归依赖。这项工作对评估模型的安全性、公平性和鲁棒性具有深远影响，是每个AI从业者都值得了解的“惊险发现”。

- **[DIRECT: When and Where Should You Allocate Test-Time Compute in Embodied Planners?](http://arxiv.org/abs/2606.12402v1)**
  - **理由**：在“Scaling Law”被广泛讨论的今天，该论文直击了Test-Time Scaling的局限性，并提供了务实、可操作的指导。对于从事具身智能、Agent或任何依赖推理时计算的系统设计者来说，这是一篇发人深省的必读文章。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*