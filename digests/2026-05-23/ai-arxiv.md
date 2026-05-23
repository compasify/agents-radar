# ArXiv AI 研究日报 2026-05-23

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-05-23 00:24 UTC

---

# ArXiv AI 研究日报 | 2026-05-23

---

## 今日速览

今日50篇论文覆盖大语言模型核心机制、智能体自主进化、扩散模型理论及应用等方向。最突出的突破包括：**线性注意力架构的精细化控制**（Gated DeltaNet-2）、**智能体源代码级自我进化**（MOSS）、**RLVR训练不稳定性问题的系统性解决**（Clipping Bottleneck），以及**AI在科学发现预测中的首次大规模验证**。多智能体系统安全通信（LCGuard）和认知负荷评估的多模态融合（MambaGaze/CogAdapt）也显示出强烈的应用落地信号。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[Gated DeltaNet-2: Decoupling Erase and Write in Linear Attention](http://arxiv.org/abs/2605.22791v1)** | Hatamizadeh, Choi, Kautz | 将线性注意力的"遗忘"与"写入"解耦，解决压缩记忆编辑时的关联扰乱问题，为长上下文建模提供更精细的状态控制机制。 |
| **[Post-Training is About States, Not Tokens: A State Distribution View of SFT, RL, and On-Policy Distillation](http://arxiv.org/abs/2605.22731v1)** | Dong Nie | 从状态分布而非损失函数视角统一分析SFT/RL/蒸馏，揭示后训练本质是对状态分布的塑造，为理解不同后训练方法的等价性与差异提供新框架。 |
| **[Reducing Political Manipulation with Consistency Training](http://arxiv.org/abs/2605.22771v1)** | Phan, Kim, Pan et al. | 发现LLM存在"隐蔽政治偏见"——对对立政治话题的不对称处理，提出一致性训练方法，对AI系统的内容安全与公正性评估具有重要价值。 |
| **[AMEL: Accumulated Message Effects on LLM Judgments](http://arxiv.org/abs/2605.22714v1)** | Sid-ali Temkit | 揭示对话历史极性对LLM作为自动评估器时的累积偏见效应，对代码审查、内容审核等批量评分场景的方法论设计有直接影响。 |
| **[Understanding Data Temporality Impact on Large Language Models Pre-training](http://arxiv.org/abs/2605.22769v1)** | Hippolyte, Fabre, Talla Franck et al. | 系统研究预训练数据的时间动态对时序敏感知识获取的影响，挑战"随机打乱即最优"的默认假设，为知识时效性管理提供实证基础。 |
| **[Tokenisation via Convex Relaxations](http://arxiv.org/abs/2605.22821v1)** | Tempus, Whittington, Schmidt et al. | 将BPE/Unigram等贪心分词算法重新表述为线性规划问题，首次实现全局最优词汇表构建，可能重塑NLP基础流程。 |
| **[Tokenization with Split Trees](http://arxiv.org/abs/2605.22705v1)** | Schmidt, Krumdick, Wiemerslage et al. | 提出ToaST方法，通过完全二叉树结构直接优化压缩率，与词汇表无关的推理过程为子词分词开辟新路径。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[MOSS: Self-Evolution through Source-Level Rewriting in Autonomous Agent Systems](http://arxiv.org/abs/2605.22794v1)** | Cai, Zhang, Jia et al. | 突破现有智能体仅修改文本配置文件的局限，实现**源代码级别的自我重写与进化**，使部署后的智能体能从交互中持续学习修复。 |
| **[LCGuard: Latent Communication Guard for Safe KV Sharing in Multi-Agent Systems](http://arxiv.org/abs/2605.22786v1)** | Asif, Mohammadi Amiri, Abbas et al. | 针对多智能体系统通过KV Cache进行潜在通信的效率-安全权衡，提出安全守卫机制，为高效且隐私可控的多智能体协作奠定基础。 |
| **[DeltaBox: Scaling Stateful AI Agents with Millisecond-Level Sandbox Checkpoint/Rollback](http://arxiv.org/abs/2605.22781v1)** | Dong, He, Hou et al. | 实现毫秒级沙箱状态检查点/回滚，解决AI Agent在测试时树搜索和强化学习中的高频状态探索瓶颈，是Agent基础设施的关键突破。 |
| **[Vector Policy Optimization: Training for Diversity Improves Test-Time Search](http://arxiv.org/abs/2605.22817v1)** | Bahlous-Boldi, Puri, Shenfeld et al. | 针对AlphaEvolve等推理时搜索过程需要适配多种奖励函数的场景，提出向量策略优化，通过训练多样性提升测试时搜索的泛化能力。 |
| **[Advancing Mathematics Research with AI-Driven Formal Proof Search](http://arxiv.org/abs/2605.22763v1)** | Tsoukalas, Kovsharov, Shirobokov et al. | 首次大规模评估LLM生成Lean形式证明解决真实数学研究问题的能力，为AI辅助数学发现建立严格的方法论基准。 |
| **[Scout-Assisted Planning for Heterogeneous Robot Teams under Partially Known Environments](http://arxiv.org/abs/2605.22693v1)** | Bui, Khanal, Arnob et al. | 无人机-地面机器人异质协作规划，通过空中侦察减少物理遍历带来的回溯成本，对灾难响应、物流等真实场景有直接影响。 |

### 🔧 方法与框架（新技术、基准测试、效率优化）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[Clipping Bottleneck: Stabilizing RLVR via Stochastic Recovery of Near-Boundary Signals](http://arxiv.org/abs/2605.22703v1)** | Yang, Lu, Ma et al. | 系统剖析GRPO类裁剪目标的刚性约束导致训练不稳定与次优收敛的机制，提出随机恢复策略，为推理能力扩展的稳定性问题提供解决方案。 |
| **[The Matching Principle: A Geometric Theory of Loss Functions for Nuisance-Robust Representation Learning](http://arxiv.org/abs/2605.22800v1)** | Vishal Rajput | 统一鲁棒性、域适应、光照不变性、组合泛化等看似分离的问题为几何匹配问题，为表示学习的损失函数设计提供统一理论框架。 |
| **[Proxy-Based Approximation of Shapley and Banzhaf Interactions](http://arxiv.org/abs/2605.22738v1)** | Thies, Baniecki, Witter et al. | 提出ProxySHAP实现高阶Shapley/Banzhaf交互的高效精确估计，解决可解释性方法在速度与精度间的长期权衡。 |
| **[HarnessAPI: A Skill-First Framework for Unified Streaming APIs and MCP Tools](http://arxiv.org/abs/2605.22733v1)** | Edwin Jose | 统一HTTP端点与MCP工具注册的双轨开发负担，为LLM工具生态的基础设施标准化提供实用框架。 |

### 📊 应用（垂直领域、多模态、代码生成）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[MambaGaze: Bidirectional Mamba with Explicit Missing Data Modeling for Cognitive Load Assessment](http://arxiv.org/abs/2605.22775v1)** | Mousavi, Sirjani, Nourbakhsh et al. | 针对眼动追踪数据的高频缺失问题，双向Mamba结合显式缺失建模，为驾驶员警觉性监测、飞行甲板辅助等安全关键应用提供实时认知负荷评估。 |
| **[CogAdapt: Transferring Clinical ECG Foundation Models to Wearable Cognitive Load Assessment via Lead Adaptation](http://arxiv.org/abs/2605.22774v1)** | Mousavi, Sirjani, Nourbakhsh et al. | 将百万级临床ECG预训练模型迁移至可穿戴设备认知负荷评估，解决标注数据稀缺与跨被试泛化难题，同一团队连续两篇聚焦认知负荷的多模态融合。 |
| **[ChronoMedKG: A Temporally-Grounded Biomedical Knowledge Graph and Benchmark for Clinical Reasoning](http://arxiv.org/abs/2605.22734v1)** | Ahmed, Firoozbakht, Poech et al. | 构建首个时间感知的生物医学知识图谱，同一症状在不同年龄指向不同疾病，对临床决策支持系统的时序推理能力评估至关重要。 |
| **[Evaluating Commercial AI Chatbots as News Intermediaries](http://arxiv.org/abs/2605.22785v1)** | Suzgun, Shen, Bianchi et al. | 首次系统测量商业AI聊天机器人（含专有搜索集成）跨语言、跨地区处理新兴事实的准确性，对信息生态治理有紧迫的现实意义。 |
| **[Forecasting Scientific Progress with Artificial Intelligence](http://arxiv.org/abs/2605.22681v1)** | Wu, Lu, Chen et al. | 在受控知识约束下评估AI预测科学进展的能力，为理解AI在科学发现中的前置作用建立时间感知的评估框架。 |

---

## 研究趋势信号

**智能体自主性的"源代码革命"**：MOSS与DeltaBox共同指向智能体从"配置调参"向"基础设施级自主"的跃迁——不仅修改技能文件，更能重写自身源代码；不仅逻辑推理，还需毫秒级状态操控。这要求同时突破算法与系统层面。**RLVR稳定性成为推理扩展的核心瓶颈**：Clipping Bottleneck与Vector Policy Optimization从不同角度回应同一问题——如何在大规模推理训练中保持优化稳定性。**时序感知渗透全栈**：从预训练数据的时间动态（数据层面）、到生物医学知识图谱的时间 grounding（知识层面）、再到科学进展预测（应用层面），"时间"正成为AI系统与现实世界对齐的关键维度。

---

## 值得精读

### 1. [MOSS: Self-Evolution through Source-Level Rewriting in Autonomous Agent Systems](http://arxiv.org/abs/2605.22794v1)
**理由**：现有自进化智能体局限于文本可变的工件（技能文件、提示词），MOSS首次实现部署时代码级别的自我修改。这触及"递归自我改进"的核心安全议题——能力跃升与失控风险并存。论文的技术实现细节（如何约束重写范围、验证修改安全性）对AI安全研究具有范式意义，是理解下一代自主系统必须阅读的基准工作。

### 2. [Clipping Bottleneck: Stabilizing RLVR via Stochastic Recovery of Near-Boundary Signals](http://arxiv.org/abs/2605.22703v1)
**理由**：RLVR（可验证奖励强化学习）是当前扩展LLM推理能力的主流范式（DeepSeek-R1、OpenAI o系列均依赖此路径），但训练崩溃问题严重制约其可靠性。该论文从机制层面揭示裁剪目标的刚性约束如何造成信号丢失，并提出随机恢复方案。对任何从事推理模型训练的研究者，这是理解并解决实际工程瓶颈的关键文献。

### 3. [The Matching Principle: A Geometric Theory of Loss Functions for Nuisance-Robust Representation Learning](http://arxiv.org/abs/2605.22800v1)
**理由**：将八个看似无关的鲁棒学习问题统一为单一几何框架，这种"统一理论"在机器学习领域极为罕见。如果理论成立，将大幅简化损失函数设计的实践——不再需要为每个鲁棒性任务发明专用方法。其普适性主张需要仔细验证，但潜在影响足以支撑精读投入。

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*