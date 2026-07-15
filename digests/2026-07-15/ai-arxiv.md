# ArXiv AI 研究日报 2026-07-15

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-15 01:16 UTC

---

好的，作为AI研究分析师，以下是基于您提供的2026年7月13日ArXiv论文列表生成的《ArXiv AI研究日报》。

---

### ArXiv AI 研究日报
**日期**: 2026-07-15（基于论文发布日 2026-07-13）

---

#### 1. 今日速览

今日论文呈现两个鲜明趋势：一是对大型语言模型（LLM）内部机理和偏见的深入探索，特别是通过“机械可解释性”方法揭示模型决策过程（如LLM-as-Judge的偏见来源）；二是强调可控性与鲁棒性，从模型压缩的“Requential Coding”到针对分布式后门攻击的检测，再到针对推理任务的“沙漏推理”优化。此外，面向具身智能体（如灵巧操作、统一具身合成）和多模态工具使用（MM-ToolSandBox）的工作也取得了显著进展，预示着下一代AI系统正朝着更可信、更强大、更可控的方向发展。

#### 2. 重点论文

##### 🧠 大语言模型（架构、训练、对齐、评估）

- **1. Requential Coding: Pushing the Limits of Model Compression with Self-Generated Training Data**
  - 作者: Shikai Qiu, Marc Finzi, Yujia Zheng et al.
  - 一句话说明：提出了名为“Requential Coding”的新型模型压缩范式，通过让模型自身生成训练数据来发现数据中的规律，从而实现远超凡参数数量的压缩率，挑战了模型压缩的极限。
  - 链接: http://arxiv.org/abs/2607.11883v1

- **2. Metacognition in LLMs: Foundations, Progress, and Opportunities**
  - 作者: Gabrielle Kaili-May Liu, Areeb Gani, Jacqueline Lu et al.
  - 一句话说明：全面综述了LLM领域“元认知”（即“思考如何思考”）的研究现状，指出了其在提升模型的学习、问题解决和透明度方面的关键作用，并展望了未来研究方向。
  - 链接: http://arxiv.org/abs/2607.11881v1

- **6. Inside the Unfair Judge: A Mechanistic Interpretability Account of LLM-as-Judge Bias**
  - 作者: Zixiang Xu, Sixian Li, Huaxing Liu et al.
  - 一句话说明：首次从模型内部表征（而非输入-输出层面）解释了LLM作为评判者时存在的偏见，揭示了隐藏在模型隐状态中的偏见机制，为校准和缓解偏见提供了全新视角。
  - 链接: http://arxiv.org/abs/2607.11871v1

- **8. AdvancedMathBench: A Benchmark Suite for Advanced Mathematical Proof Generation and Verification**
  - 作者: Lingkai Kong, Zijian Wu, Yuzhe Gu et al.
  - 一句话说明：提出了一个用于评估LLM高级数学定理证明与验证能力的新基准，填补了现有基准在学科范围和评估粒度上的不足。
  - 链接: http://arxiv.org/abs/2607.11849v1

- **21. From Expressivity to Sample Complexity: Narrow Teachers for Transformers via C-RASP**
  - 作者: Michael Rizvi-Martel, Satwik Bhattamishra, Guillaume Rabusseau et al.
  - 一句话说明：通过构建“窄教师”模型和形式化语言C-RASP，理论分析了Transformer的学习复杂度，沟通了模型表达能力与样本效率之间的桥梁，对理解LLM为何能高效学习提供了新洞见。
  - 链接: http://arxiv.org/abs/2607.11760v1

##### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

- **4. A Minimalist Retargeting-Guided Reinforcement Learning Recipe for Dexterous Manipulation**
  - 作者: Yunhai Feng, Natalie Leung, Jiaxuan Wang et al.
  - 一句话说明：将人形机器人的“运动重定向+强化学习”的成功范式迁移到灵巧手操作任务上，并成功应用，为复杂精细操作提供了简洁高效的训练方案。
  - 链接: http://arxiv.org/abs/2607.11874v1

- **12. MM-ToolSandBox: A Unified Framework for Evaluating Visual Tool-Calling Agents**
  - 作者: Kaixin Ma, Di Feng, Alexander Metz et al.
  - 一句话说明：推出了一个面向视觉工具调用智能体的统一评测框架和基准，包含500多个工具和16个领域，支持多图像、多轮交互的复杂场景评估，是工具使用智能体领域的重要基础设施。
  - 链接: http://arxiv.org/abs/2607.11818v1

- **24. When Local Monitors Miss Compositional Harm: Diagnosing Distributed Backdoors in Multi-Agent Systems**
  - 作者: Yibo Hu, Ren Wang
  - 一句话说明：揭示了一个严重的安全漏洞：在多智能体系统中，恶意行为可以“分布式后门”的形式分散到各个智能体，使每个局部检测都看似正常，而组合起来则产生有害结果。指出当前的安全监控存在结构性缺陷。
  - 链接: http://arxiv.org/abs/2607.11751v1

- **39. Think Through a Bottleneck: Hourglass Reasoning for Rigorous Induction**
  - 作者: Huan Zhu
  - 一句话说明：提出“沙漏推理”框架，通过在推理阶段之间引入结构化的信息瓶颈，强制模型先归纳规则再应用规则，有效提升了少样本归纳推理的严谨性和准确性。
  - 链接: http://arxiv.org/abs/2607.11696v1

##### 🔧 方法与框架（新技术、基准测试、效率优化）

- **26. HiFi-LLP: High-Fidelity, Low-Cost Latency Predictors with Confidence for Robust HW-NAS**
  - 作者: Shambhavi Balamuthu Sampath, Behzad Shomali, Nael Fasfous et al.
  - 一句话说明：开发了一种兼具高保真度和低成本的延迟预测器，用于硬件感知的神经架构搜索（HW-NAS），并能同时提供置信度评估，使得在边缘设备上搜索高效架构变得更鲁棒和实用。
  - 链接: http://arxiv.org/abs/2607.11746v1

- **31. Active Offline-to-Online Reinforcement Learning**
  - 作者: Alper Kamil Bozkurt, Shangtong Zhang, Yuichi Motai
  - 一句话说明：提出了一种“主动式”离线到在线强化学习框架，通过主动筛选和利用最有价值的离线数据进行预训练，显著提升了在线微调的效率和策略性能，尤其适用于数据非平稳的动态环境。
  - 链接: http://arxiv.org/abs/2607.11720v1

- **43. RAGU: A Multi-Step GraphRAG Engine with a Compact Domain-Adapted LLM**
  - 作者: Mikhail Komarov, Ivan Bondarenko, Stanislav Shtuka et al.
  - 一句话说明：RAGU是一个模块化的图检索增强生成（GraphRAG）引擎，通过将知识图谱构建拆分为“提取-精炼-构建”的多步骤流程，配合领域微调的小模型，大幅提升了检索质量和鲁棒性，是个开源的实用解决方案。
  - 链接: http://arxiv.org/abs/2607.11683v1

##### 📊 应用（垂直领域、多模态、代码生成）

- **7. Evidence-Backed Video Question Answering**
  - 作者: Shijie Wang, Honglu Zhou, Ziyang Wang et al.
  - 一句话说明：提出了“有据可依”的视频问答（EB-VQA）任务，要求模型不仅给出答案，还必须提供可验证的视觉证据（如时间戳和空间区域），显著提升了VQA模型的可解释性和可信度。
  - 链接: http://arxiv.org/abs/2607.11862v1

- **50. Xiaomi-Robotics-U0: Unified Embodied Synthesis with World Foundation Model**
  - 作者: Xinghang Li, Jun Guo, Qiwei Li et al.
  - 一句话说明：提出了一个统一的世界基础模型“U0”，用于驱动具身智能体的合成数据生成，实现了多视角、几何一致且符合机器人动力学约束的高质量视频生成，是具身AI领域的重要进展。
  - 链接: http://arxiv.org/abs/2607.11643v1

#### 3. 研究趋势信号

今日投稿中涌现出两个重要趋势信号：**一是“外显化”与“可溯源”**，从视觉问答的证据化（Evidence-Backed VQA）到LLM身份机制的探索（Inside the Unfair Judge），再到对分布式安全风险的预警（Distributed Backdoors），都表明研究重点正从提升单一性能转向理解、解释并可控地部署模型。**二是“结构化”与“模块化”**，如沙漏推理（Hourglass Reasoning）和GraphRAG引擎（RAGU），通过将复杂任务分解为结构清晰、可独立优化的模块，来提升系统的鲁棒性和效率，这代表了构建复杂AI系统的一种新范式。

#### 4. 值得精读

1.  **《Inside the Unfair Judge: A Mechanistic Interpretability Account of LLM-as-Judge Bias》**
    - **理由**: 这是目前为数不多的从模型内部“神经”层面解释LLM偏见成因的工作，而不仅仅停留在行为层面。它对于构建可信赖的AI评判系统具有奠基意义，是机械可解释性在重要应用中的典范。

2.  **《When Local Monitors Miss Compositional Harm: Diagnosing Distributed Backdoors in Multi-Agent Systems》**
    - **理由**: 该论文指出了一个当前安全研究中的盲点——分布式后门攻击。它揭示了一个极其隐蔽且危险的安全漏洞，对任何正在部署多智能体系统的研究机构和公司都具有警示作用和指导意义。

3.  **《MM-ToolSandBox: A Unified Framework for Evaluating Visual Tool-Calling Agents》**
    - **理由**: 随着AI Agent的兴起，缺乏统一的、有挑战性的评估基准已成为制约发展的瓶颈。MM-ToolSandBox提供了一个全面、可扩展、且支持复杂交互的评估环境，有望成为该领域的标杆性基准，推动工具使用智能体研究的标准化。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*