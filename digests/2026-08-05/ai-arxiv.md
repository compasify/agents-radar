# ArXiv AI 研究日报 2026-08-05

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-05 01:26 UTC

---

# ArXiv AI 研究日报

**2026-08-05** · 共 50 篇（cs.AI / cs.CL / cs.LG）


## 今日速览

今日投稿显示，连续潜在空间语言建模成为一个新兴方向（AURORA-LM 将扩散框架引入文本生成），同时测试时推理优化（GradCuit）和自适应记忆（LiveMem）继续推进大模型能力的边界。智能体研究从单智能体能力转向交互式评估与人机协作（SWE-Touch、ParEvalLayer），并且安全与对齐问题持续受到关注，出现了跨会话能力滥用检测（Magnet）与长期人机交互风险测量（Long-term Measurements）等新框架。此外，训练优化（CMuon）和推理加速（xPress、Pseudorandom Streams）等效率主题也有值得关注的技术贡献。


## 重点论文


### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [AURORA-LM: Autoencoding Unified Representation for Continuous-Latent Diffusion Language Modeling](http://arxiv.org/abs/2608.02602v1) | Jiajun Liang et al. | 提出用自编码统一表示将文本投射到连续潜在空间，再以扩散模型建模生成，首次在语言建模中实现与图像/视频一致的连续扩散范式。或可绕开离散 token 的熵瓶颈，重新定义语言生成框架。 |
| [GradCuit: Credit-Assigned Gradient Flow Enables Robust and Interpretable Test-Time Latent Reasoning](http://arxiv.org/abs/2608.02585v1) | Zhaoxin Yu et al. | 通过带信用分配的梯度流优化测试时潜在状态，避免将连续状态解码为 token 再反传的既有路径，提升推理的鲁棒性和可解释性。为不更新参数下的实例级推理提供了新机制。 |
| [LiveMem: Maintaining Memory State Continuity in Long-Running LLM Inference](http://arxiv.org/abs/2608.02515v1) | Zhichen Liu et al. | 针对长时运行代理的上下文超出问题，提出跨工作上下文变化持续保持记忆状态的推理框架。与现有摘要、检索方法互补，面向全生命周期的状态连续性。 |
| [Cultural Awareness is Represented but Not Decoded: Tracing Mythological Knowledge across 18 Open-Source LLMs](http://arxiv.org/abs/2608.02486v1) | Iaroslav Chelombitko et al. | 系统追踪 18 个开源模型中的神话知识，发现文化信息在表示层存在但解码层无法可靠输出。为多文化对齐与可解释性研究提供了重要的诊断视角。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [SWE-Touch: Benchmarking Coding Agents When Users Touch the Code](http://arxiv.org/abs/2608.02499v1) | Yuqiao Tan et al. | 首个允许用户在执行中修改代码的仓库级编码智能体基准，填补了交互式软件工程评估空白。结果显示当前智能体对用户中途改动适应能力有限，具重要实践意义。 |
| [Agentic Incident Response through Digital Twin-Enhanced Multiscale Planning](http://arxiv.org/abs/2608.02422v1) | Yiran Gao et al. | 将数字孪生与多尺度分层规划引入安全应急响应自动化，将决策问题建模为分层强化学习并支持前瞻推演。对安全运营自动化这一高价值场景是重要一步。 |
| [Intention Inference Under Execution Noise: Separating Aleatoric and Epistemic Uncertainty in Social Dilemmas](http://arxiv.org/abs/2608.02440v1) | Kival Mahadew et al. | 指出标准 MDP 将执行动作视为状态，无法区分“故意背叛”与“执行噪声”，提出分离偶然与认知不确定性的意图推断方法。对多智能体社会推理有理论贡献。 |
| [Magnet: Detecting Cross-Session AI Misuse Through Capability Accumulation](http://arxiv.org/abs/2608.02518v1) | Natalie Isak et al. | 针对多智能体协同部署中跨会话能力累积导致的滥用风险，提出基于能力积累信号的检测框架。补足了现有单次会话监控框架的关键盲区。 |

### 🔧 方法与框架（新技术、基准测试、效率优化）

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [CMuon: Accelerating and Stabilizing Diffusion Transformer Training via Chunked Momentum Orthogonalization](http://arxiv.org/abs/2608.02502v1) | Chuyan Chen et al. | 对 Muon 优化器进行分块动量正交化改造，使其适配扩散 Transformer 的训练需求，显著加速收敛并提升稳定性。对大规模视觉生成模型训练有直接工程价值。 |
| [xPress: Parallel Refinement for Diffusion Drafters in Speculative Decoding](http://arxiv.org/abs/2608.02438v1) | Zheng Wang et al. | 针对块扩散草稿模型的最后去噪步提出并行精炼方法，在保持单次前向优势的同时提升草稿质量。与 dFlash 类方法结合可进一步降低投机解码开销。 |
| [AtumAI: A Principled Framework for Agentic Generation of Datacenter Control-Plane Policies](http://arxiv.org/abs/2608.02569v1) | Qiushi Lin et al. | 将数据中心控制面策略设计建模为智能体搜索问题，以原则化框架自动生成并验证策略。为基础设施自动化这一复杂系统工程场景提供了可落地的智能体范式。 |
| [Pseudorandom Streams within Diffusion Models Act as Learnable Inputs That Affect Generation Quality](http://arxiv.org/abs/2608.02575v1) | Shengzhi Deng et al. | 揭示有限精度下扩散模型消费的伪随机数轨道可作为“可学习输入”影响生成质量。为扩散模型的采样鲁棒性与硬件无关性研究提供了新视角。 |
| [Analytic Planning under Uncertainty with Moment Closure](http://arxiv.org/abs/2608.02519v1) | Shishir Sharma et al. | 提出基于矩闭包的分析式不确定性传播规划方法，在无需采样的情况下获得状态分布的高阶近似。为模型化强化学习中的不确定性规划提供了新工具。 |

### 📊 应用（垂直领域、多模态、代码生成）

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [Syntax Meets Semantics: Understanding Scientific Formulae](http://arxiv.org/abs/2608.02457v1) | Yuni Susanti et al. | 对科学公式的语法结构与语义内容进行联合建模研究，推进公式在学术信息检索中的可发现性。是少有的同时关注公式双重重性的工作。 |
| [CTRAG: An In-Context Retrieval-based Framework for Automated Compliance Checking using LLMs](http://arxiv.org/abs/2608.02472v1) | Muhammad Roman et al. | 面向监管合规检查的上下文检索增强框架，将领域法规与项目文本检索后交由 LLM 完成合规判断。在高风险垂直领域（建筑、金融等）有明确应用潜力。 |
| [DyFrDet: Towards Accurate Small Object Detection via Dynamic Frequency Suppression with Label Disambiguation](http://arxiv.org/abs/2608.02495v1) | Zihan Yang et al. | 通过动态频率抑制滤除小目标的高频噪声，并引入标签消歧缓解低分辨率框的监督不一致。针对小目标检测中“特征不足+标注歧义”两大痛点给出联合方案。 |
| [MedPRESS: A Multi-turn Benchmark for Patient-Pressure-Induced Medical Sycophancy in LLMs](http://arxiv.org/abs/2608.02520v1) | Saman Sarker Joy et al. | 首个面向“患者施压引发医疗谄媚”的多轮基准，模拟真实医患对话中患者反复施压的场景。对医疗 LLM 安全评估具有直接价值。 |
| [Right Answer, Wrong Method: Shortcut Hacking Misleads the Evaluation of LLM Reasoning on Frontier Science Benchmarks](http://arxiv.org/abs/2608.02442v1) | Xuan Ren et al. | 系统识别前沿科学基准中“捷径攻击”现象——模型答对结果但推理路径完全错误。对当前以最终答案正确率评估推理能力的方法论提出有力质疑。 |


## 研究趋势信号

今日投稿中可以看到四个值得关注的新兴信号。其一，语言建模正在尝试突破离散 token 的边界，AURORA-LM 将连续扩散框架引入文本生成，可能打开新的能力维度。其二，智能体评估加速从“静态基准”转向“交互式、多轮、过程敏感”的范式，SWE-Touch 与 MedPRESS 分别从人机协作和用户施压两个方向推动评估的真实性。其三，安全研究从单次会话扩展到跨会话、跨智能体的能力积累风险（Magnet、Long-term Measurements），反映出对 AI 系统长期部署后果的更深入关切。其四，推理效率领域出现了有趣的理论与工程交叉——伪随机数可学习性（Pseudorandom Streams）与扩散草稿并行精炼（xPress）都指向“生成过程的细粒度控制”这一共同目标。


## 值得精读

1. **AURORA-LM**（[2608.02602](http://arxiv.org/abs/2608.02602v1)）——若连续潜在空间语言建模成立，将是从架构层面挑战离散 token 主导地位的范式级工作。值得完整阅读以判断其方法细节与局限。

2. **GradCuit**（[2608.02585](http://arxiv.org/abs/2608.02585v1)）——测试时推理是大模型能力扩展的重要方向，但梯度路径设计是长期难点。本文的信用分配机制可能成为后续工作的基础组件。

3. **Right Answer, Wrong Method**（[2608.02442](http://arxiv.org/abs/2608.02442v1)）——直接挑战当前科学推理基准的评估有效性。“捷径攻击”若普遍存在，将影响大量已发表结论的可信度，值得每一位做 LLM 评估的研究者阅读。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*