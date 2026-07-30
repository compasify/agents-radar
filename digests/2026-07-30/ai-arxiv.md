# ArXiv AI 研究日报 2026-07-30

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-30 01:19 UTC

---

# ArXiv AI 研究日报 —— 2026-07-30

## 今日速览

今日 ArXiv 投稿呈现三大热点：**推理加速与蒸馏**（基于轨迹的 on-policy 蒸馏、并行解码蒸馏）与**实时反应式控制**（πR² 流策略、自博弈驾驶）并行突破；**智能体评估**从简单成功率转向因果状态理解（Desktop-Delta Bench）和跨基准统一（Messier）；**多模态与概率表示**（Schrödinger’s Cat 场景动力学、MODUS 任意到任意模型）在科学领域开辟新路径。此外，特定垂直应用（兽医筛查、仓库调度、机器人操控）正加速向可部署方案演进。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [**Pass the Baton: Trajectory-Relayed On-Policy Distillation**](http://arxiv.org/abs/2607.26057v1) | Haolei Xu et al. | 提出轨迹中继式 on-policy 蒸馏，让学生模型在自己的推理轨迹上接收监督信号，有效缓解前缀失败问题。对提升小模型推理能力具有里程碑意义。 |
| [**Spend Experts Where You Are Unsure: Confidence-Adaptive Routing for Mixture-of-Experts LoRA**](http://arxiv.org/abs/2607.26052v1) | Tom Saliencro et al. | 根据路由器输出分布动态调整每个 token 使用的专家数，简单但高效地平衡计算开销与模型效果。可直接用于现有 MoE-LoRA 系统。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [**Desktop-Delta Bench: Do Computer-Use Models Understand Desktop GUI Transitions?**](http://arxiv.org/abs/2607.26041v1) | Abhishek Pillai et al. | 构建专门评估桌面 GUI agent 能否重建动作导致的下一个状态（causal state transition）的基准。补全了现有评估体系缺失的关键维度。 |
| [**Pictura: Perspective-View Self-Play at Scale for Driving**](http://arxiv.org/abs/2607.26005v1) | Yuan Yin et al. | 通过自博弈在仿真中从透视图（perspective view）训练驾驶策略，弥合了感知与控制之间的表征鸿沟。有望推动仿真到实车的大规模迁移。 |
| [**Penelope: Localized Latent Recurrence for Efficient Structured Reasoning**](http://arxiv.org/abs/2607.25915v1) | Yutong Chen et al. | 在模型潜在空间引入局部循环机制替代长链思维（CoT），显著降低推理成本同时保持结构化推理能力。思路新颖且实用性强。 |
| [**Interactive Reward Agent: GUI Task Evaluation via Environment-State Verification**](http://arxiv.org/abs/2607.25904v1) | Chenrui Shi et al. | 通过环境状态验证判断 GUI 任务是否成功，将判断结果作为奖励信号用于测试时缩放或后训练。为 GUI agent 训练与评估提供了新范式。 |

### 🔧 方法与框架（新技术、基准测试、效率优化）

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [**πR²: Reactive Real-time Flow Policies**](http://arxiv.org/abs/2607.26055v1) | Sungjae Park et al. | 针对通用操控策略中动作分块的开环问题，提出反应式流策略，允许在执行中接收感官反馈并实时调整。极大提升了机器人的响应性与鲁棒性。 |
| [**Parallel Decoding Distillation for Fast Image and Video Generation**](http://arxiv.org/abs/2607.26004v1) | Neta Shaul et al. | 将并行解码蒸馏应用于扩散/流模型，替代传统串行采样，大幅加速图像与视频生成。在生成质量与速度之间取得了出色平衡。 |
| [**Schrödinger's Cat: Probabilistic Representation and Prediction of Potential Scene Kinematics**](http://arxiv.org/abs/2607.25984v1) | Timy Phan et al. | 从部分观测中概率建模场景内多个物体的未来运动分布，而非单一确定性预测。对自动驾驶、人机交互等多假设推理场景至关重要。 |
| [**MODUS: Decoder-Only Any-to-Any Modeling of Diverse Modalities**](http://arxiv.org/abs/2607.25948v1) | Mingqiao Ye et al. | 提出纯解码器架构实现任意模态到任意模态的预测，可利用现有预训练模型初始化，降低训练成本。适用于物理学、生态学等科学多模态任务。 |

### 📊 应用（垂直领域、多模态、代码生成）

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [**VetClaw: An Edge-Cloud Multimodal Agentic System for Veterinary Disease Screening**](http://arxiv.org/abs/2607.26042v1) | Syed Mhamudul Hasan et al. | 构建边缘-云协同的多模态智能体系统，通过摄像头+可选症状描述实现零样本兽医疾病筛查。展示了多模态 LLM 在真实部署场景中的价值。 |
| [**Large Language Model for Operations Research Formulation Selection in Multi-Warehouse Inventory Allocation**](http://arxiv.org/abs/2607.25956v1) | Jintao Xu et al. | 利用 LLM 自动选择混合整数规划（MIP）配方，使配方与每个实例的异构特征自适应匹配。为运筹优化与 LLM 的结合提供了实用范例。 |
| [**SAM3D-Guided Object-Centric Representation Alignment for Vision-Language-Action Models**](http://arxiv.org/abs/2607.25912v1) | Zonghe Liu et al. | 引入 SAM3D 提取物体级 3D 特征，对齐视觉-语言-动作（VLA）模型的表示，大幅提升机器人操作在遮挡、尺度变化下的泛化能力。 |
| [**HiFi-UMI: Learning Deployable Manipulation Policies from High-Fidelity UMI Data Alone**](http://arxiv.org/abs/2607.25895v1) | Simple AI et al. | 仅利用高保真 UMI 数据集（无需真实机器人遥操作）即可训练出可直接部署的操控策略。显著降低了机器人学习的数据获取成本。 |

---

## 研究趋势信号

- **轨迹级蒸馏与并行解码**：on-policy 蒸馏（Pass the Baton）与并行解码蒸馏（Parallel Decoding Distillation）共同指向“在保持生成质量的同时大幅加速推理”这一核心目标，有望成为下一阶段模型部署的关键技术。
- **反应式与闭环控制**：πR² 与 Pictura 从不同角度打破“感知-规划-执行”的开环假设，强调实时反应能力，在机器人、自动驾驶等低延迟场景中尤为重要。
- **智能体评估精细化**：Desktop-Delta Bench 聚焦因果状态转换理解，Messier（未详述但值得关注）统一多基准，评估正从“能否完成任务”转向“能否理解任务机制”。
- **概率与多模态表示去中心化**：Schrödinger’s Cat 与 MODUS 都试图跳出单一确定性/单一模态框架，为复杂科学决策提供更丰富的表示空间。

---

## 值得精读

1. **Pass the Baton** — 开创性地将 on-policy 蒸馏的思想扩展到学生自身的推理轨迹，理论上可显著改善小模型的复杂推理能力，方法简洁深刻，值得完整理解其机制。
2. **Desktop-Delta Bench** — 精准指出当前 CUAs 评估盲区，并设计了可操作的基准。读完可帮助研究者重新思考智能体“理解”的定义与测试方式。
3. **Schrödinger’s Cat** — 将概率未来表示应用于场景动力学，思路具有跨领域通用性（自动驾驶、机器人规划、视频预测），论文中模型设计值得深入研读。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*