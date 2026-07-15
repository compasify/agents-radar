# ArXiv AI Research Digest 2026-07-15

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-07-15 01:16 UTC

---

Here is the structured ArXiv AI Research Digest for July 15, 2026.

---

### Today's Highlights

Today's submissions reveal a strong push toward mechanistic understanding and safety in deployed AI systems, moving beyond benchmark chasing to diagnose *why* models behave as they do. A significant cluster of papers focuses on the security and reasoning of multi-agent systems, identifying fundamental vulnerabilities like "distributed backdoors" that evade local monitors. On the methods front, there is a notable trend toward "frugal" and efficient architectures, including a new framework for model compression via self-generated data and a recipe for dexterous manipulation that sidesteps complex reward engineering. Finally, the boundary between language models and physical reasoning continues to blur, with new work on world action models and embodied synthesis providing a roadmap for open-world physical intelligence.

### Key Papers

#### 🧠 Large Language Models

1.  **Requential Coding: Pushing the Limits of Model Compression with Self-Generated Training Data**
    Authors: Shikai Qiu, Marc Finzi, Yujia Zheng et al.
    Link: [http://arxiv.org/abs/2607.11883v1](http://arxiv.org/abs/2607.11883v1)
    Introduces a compression method where a model uses its own representations as training data, pushing the limits of model compression and suggesting a deep link between compression and generalization.

2.  **Inside the Unfair Judge: A Mechanistic Interpretability Account of LLM-as-Judge Bias**
    Authors: Zixiang Xu, Sixian Li, Huaxing Liu et al.
    Link: [http://arxiv.org/abs/2607.11871v1](http://arxiv.org/abs/2607.11871v1)
    Provides the first representation-level analysis of scoring bias in LLM judges, moving beyond input-output perturbation to show that biases can be traced to specific neurons in the model's hidden state.

3.  **An Exact Instrument for State Usage in Selective State-Space Models, and the Input-Driven Migration It Reveals**
    Authors: Raktim Bhattacharya
    Link: [http://arxiv.org/abs/2607.11796v1](http://arxiv.org/abs/2607.11796v1)
    Proposes an exact mathematical instrument to measure how Mamba-style models utilize their internal states, revealing a surprising "input-driven migration" of information across channels.

4.  **From Expressivity to Sample Complexity: Narrow Teachers for Transformers via C-RASP**
    Authors: Michael Rizvi-Martel, Satwik Bhattamishra, Guillaume Rabusseau et al.
    Link: [http://arxiv.org/abs/2607.11760v1](http://arxiv.org/abs/2607.11760v1)
    Connects the expressivity of Transformers to their sample complexity, proving that "narrow" teachers can efficiently teach complex tasks, with direct implications for data-efficient training.

#### 🤖 Agents & Reasoning

5.  **When Local Monitors Miss Compositional Harm: Diagnosing Distributed Backdoors in Multi-Agent Systems**
    Authors: Yibo Hu, Ren Wang
    Link: [http://arxiv.org/abs/2607.11751v1](http://arxiv.org/abs/2607.11751v1)
    Identifies a critical security flaw in multi-agent LLM systems: a "distributed backdoor" where a harmful payload is split across agents, passing any per-message safety check while being assembled into an attack.

6.  **Think Through a Bottleneck: Hourglass Reasoning for Rigorous Induction**
    Authors: Huan Zhu
    Link: [http://arxiv.org/abs/2607.11696v1](http://arxiv.org/abs/2607.11696v1)
    Proposes a new reasoning architecture ("Hourglass Reasoning") that enforces a strict information bottleneck between stages, dramatically improving few-shot inductive reasoning by preventing information leakage.

7.  **An Explainable Agentic System for Detection of Conversational Scams with Summary-Based Memory**
    Authors: Ahmed Omar Salim Adnan, Yogananda Manjunath, Shivanjali Khare
    Link: [http://arxiv.org/abs/2607.11707v1](http://arxiv.org/abs/2607.11707v1)
    Presents an explainable agentic system for detecting long-term conversational scams, using summary-based memory to track gradually built trust across weeks or months of interaction.

#### 🔧 Methods & Frameworks

8.  **A Minimalist Retargeting-Guided Reinforcement Learning Recipe for Dexterous Manipulation**
    Authors: Yunhai Feng, Natalie Leung, Jiaxuan Wang et al.
    Link: [http://arxiv.org/abs/2607.11874v1](http://arxiv.org/abs/2607.11874v1)
    Transfers a successful recipe from humanoid control to dexterous manipulation, using simple motion retargeting as a guide for RL, offering a surprisingly effective and minimalist alternative to complex reward design.

9.  **Relaxing Faithfulness with Intervention-Only Causal Discovery**
    Authors: Bijan Mazaheri, Jiaqi Zhang, Caroline Uhler
    Link: [http://arxiv.org/abs/2607.11816v1](http://arxiv.org/abs/2607.11816v1)
    Shows that the standard "faithfulness" assumption in causal discovery can be relaxed if one has access to interventional data, enabling more robust causal graph learning from combined observational and experimental datasets.

10. **Transformer-Guided Swarm Intelligence for Frugal Neural Architecture Search**
    Authors: Romain Amigon
    Link: [http://arxiv.org/abs/2607.11826v1](http://arxiv.org/abs/2607.11826v1)
    Proposes a "frugal" NAS method that uses a Transformer to guide a swarm intelligence algorithm, achieving competitive architecture search on consumer-grade hardware rather than thousands of GPU-days.

11. **From Global to Factor-Wise Expert Composition in Discrete Diffusion Models**
    Authors: Haozhe Huang, Yudong Xu, Abhijoy Mandal et al.
    Link: [http://arxiv.org/abs/2607.11758v1](http://arxiv.org/abs/2607.11758v1)
    Introduces factor-wise expert mixing weights for discrete diffusion models, improving compositional generation for complex reasoning tasks by allowing different modules to specialize on different sub-problems.

#### 📊 Applications

12. **Evidence-Backed Video Question Answering**
    Authors: Shijie Wang, Honglu Zhou, Ziyang Wang et al.
    Link: [http://arxiv.org/abs/2607.11862v1](http://arxiv.org/abs/2607.11862v1)
    Moves Video LLMs beyond black-box QA by requiring them to provide verifiable visual evidence (e.g., segmentation masks) for their answers, significantly improving trustworthiness and interpretability.

13. **From World Action Models to Embodied Brains: A Roadmap for Open-World Physical Intelligence**
    Authors: Yuanzhi Liang, Xufeng Zhan, Haibin Huang et al.
    Link: [http://arxiv.org/abs/2607.11689v1](http://arxiv.org/abs/2607.11689v1)
    Provides a comprehensive roadmap for building World Action Models (WAMs) that combine world models with action policies, framing them as a key pathway toward agents that can reason and act in the physical world.

14. **Imputation-free transformer learning enables robust Alzheimer's disease prediction and calibrated uncertainty quantification across heterogeneous clinical cohorts**
    Authors: Christelle Schneuwly Diaz, Narmina Baghirova, Duy-Thanh Vu et al.
    Link: [http://arxiv.org/abs/2607.11656v1](http://arxiv.org/abs/2607.11656v1)
    Develops an imputation-free Transformer for Alzheimer's prediction that handles real-world heterogeneous, incomplete clinical data natively, providing robust predictions with well-calibrated uncertainty estimates.

### Research Trend Signal

A clear and critical signal in today's submissions is a **shift from "how well does it perform?" to "how does it fail?"** This is evident across multiple domains: mechanistic studies of LLM judge bias (Paper 6), distributed backdoors in agent systems (Paper 23), and compositionality in diffusion models (Paper 22). There is a growing recognition that as models are deployed more autonomously, their failure modes become more complex and composable. This is driving a new demand for **explainability that is not just a post-hoc rationale, but a built-in structural constraint**—as seen in the "Hourglass Reasoning" architecture (Paper 39) and the "Evidence-Backed" video QA system (Paper 7). Expect to see more research on "safe-by-design" architectures in the coming months.

### Worth Deep Reading

1.  **Requential Coding: Pushing the Limits of Model Compression with Self-Generated Training Data** (Paper 1). This paper presents a potentially paradigm-shifting result: the best data to compress a model is the model's own output. The implications for both compression *and* understanding generalization are profound and warrant a close read of the underlying theory.

2.  **When Local Monitors Miss Compositional Harm: Diagnosing Distributed Backdoors in Multi-Agent Systems** (Paper 5). This is a must-read for anyone deploying multi-agent systems. It clearly demonstrates a fundamental vulnerability that current safety stacks cannot handle, providing a concrete and alarming example of emergent, compositional failure.

3.  **Inside the Unfair Judge: A Mechanistic Interpretability Account of LLM-as-Judge Bias** (Paper 2). This paper sets a new standard for bias analysis in LLMs. By moving to a representation-level account, it provides a much deeper and more actionable understanding of *why* judges are biased, opening the door to surgical, neuron-level mitigation strategies.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*