# ArXiv AI Research Digest 2026-08-26

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-26 00:00 UTC

---

# ArXiv AI Research Digest — 2026-08-26

## Today’s Highlights

Today’s submissions center on making LLM post-training more reliable: several papers tackle safety degradation from reasoning-only fine-tuning, while others propose self-reflective credit assignment and stable critic training. Agent research is shifting toward long-horizon autonomy, with new benchmarks for whole-repository code migration, persistent REPL-based harnesses, and open-world skill creation — alongside a cautionary study showing that multi-agent interaction can reduce diversity. Efficiency is another strong theme, including proxy-token architectures for ultra-long context and training-free acceleration for diffusion transformers. Applications span high-stakes domains such as road safety auditing, clinical agents, and scientific analysis.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [How to Train a Critic Stably and Efficiently](http://arxiv.org/abs/2608.23566v1) | Penghui Qi et al. | Proposes a stable and efficient recipe for training token-level critics, enabling advantage estimation from a single response rather than group sampling. This could reduce the computational overhead of RLHF-style methods. |
| [ConvergeFlow: Language Flow with Provable Convergence to Token Embeddings](http://arxiv.org/abs/2608.23551v1) | Na Li et al. | Introduces a continuous flow LM whose trajectories provably terminate at valid token embeddings, reducing reliance on cross-entropy decoders. This strengthens the case for continuous diffusion/flow LMs as competitive alternatives to discrete LMs. |
| [Mitigating Reasoning-Induced Misalignment via Safety-Direction Penalty](http://arxiv.org/abs/2608.23497v1) | Yipeng Zhao et al. | Addresses the worrying finding that fine-tuning on benign reasoning data can induce harmful LLM behavior across architectures. The proposed safety-direction penalty offers a practical safeguard for reasoning-stage alignment. |
| [SRPO: Self-Reflective Policy Optimization for Long-Horizon Reasoning](http://arxiv.org/abs/2608.23493v1) | Jialong Liu et al. | Uses self-reflection to convert sparse outcome feedback into actionable credit assignment during post-training. The method improves long-horizon reasoning by making RL rewards more informative. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [SWE Refactor Bench: Can Coding Agents Complete a Long-Horizon, Whole-Repository Stack Migration?](http://arxiv.org/abs/2608.23564v1) | Deyao Hong et al. | Introduces a benchmark for whole-repository stack migration, moving beyond bug-fixing tasks to evaluate long-horizon refactoring. It provides a realistic testbed for autonomous coding agents on technical debt. |
| [Prime Agent: A Self-Improving RLM Harness](http://arxiv.org/abs/2608.23552v1) | Seth Karten et al. | Presents an open-source harness with a persistent IPython REPL for recursive language-model-driven workflows. It targets long-horizon evaluation and coding-agent reliability. |
| [The Interaction Tax: When Communication Erases Diversity in Multi-Agent Teams](http://arxiv.org/abs/2608.23541v1) | Summer Eunhyung Ann et al. | Shows that multi-agent LLM interaction can reduce output diversity and even hurt quality under equal budgets. The paper challenges assumptions that debate and critique loops are inherently beneficial. |
| [SkillAlchemy: Open-World Agent Skill Creation](http://arxiv.org/abs/2608.23417v1) | Hengjun Wang et al. | Proposes a framework for automatically creating reusable agent skills in open-world settings. This reduces reliance on manual authorship or execution-trace mining. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [ProxyFormer: A Dual-Stream Proxy Architecture for Ultra-Long Context and High-Resolution Generation](http://arxiv.org/abs/2608.23463v1) | Zhongpan Tang | Introduces a dual-stream architecture based on proxy tokens to break the quadratic bottleneck of attention and KV-cache growth. It is designed for ultra-long-context LMs and high-resolution generative models. |
| [ChebBooster: A Training-Free Approach for Efficient Diffusion Transformer Inference via Chebyshev-Inspired Extrapolation](http://arxiv.org/abs/2608.23429v1) | Chengjie Lu et al. | Offers a training-free acceleration method for Diffusion Transformers using Chebyshev-inspired extrapolation. This reduces sampling cost while maintaining generation quality. |
| [Interpretable AI with Local Distillation](http://arxiv.org/abs/2608.23538v1) | Erin Craig et al. | Distills complex tabular models into local linear explanations, preserving predictive accuracy while providing built-in interpretability. This is especially relevant for high-stakes decision-making. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [EG-ARSA: An Expert-Grounded Open Model for Visual Road Safety Auditing in Low-Resource Settings](http://arxiv.org/abs/2608.23563v1) | Md Thamed Bin Zaman Chowdhury et al. | Builds a visual road-safety auditing model tailored to low- and middle-income countries. It helps compensate for incomplete crash records and scarce qualified auditors. |
| [Towards Comprehensive Basketball Understanding](http://arxiv.org/abs/2608.23435v1) | Yirong Hu et al. | Introduces a benchmark that jointly evaluates event recognition, action localization, player identification, and structured game knowledge. The work targets the under-explored interactions between these multimodal abilities. |
| [Photorealistic Novel View Synthesis of Human Faces using Next-Scale Transformers](http://arxiv.org/abs/2608.23410v1) | Federico Stella et al. | Adapts the next-scale autoregressive paradigm to high-resolution human-face view synthesis. The method preserves identity, fine detail, and geometric coherence across multiple target cameras. |

## Research Trend Signal

A clear trend today is the maturation of LLM post-training beyond simple supervised or RL fine-tuning: papers on critic stability, self-reflective credit assignment, and safety-direction penalties indicate that the field is now targeting *how* models learn from sparse and potentially misleading feedback. Agent research is also moving from isolated tool-use to system-level concerns — persistent memory, reusable skills, and long-horizon benchmarks. Meanwhile, multi-agent interaction is being scrutinized with controlled experiments, suggesting that communication is not free. Efficiency work continues through architectural innovation (proxy tokens) and training-free inference shortcuts. Finally, there is growing emphasis on credible measurement and interpretability in scientific and high-stakes applications, from road safety auditing to clinical monitoring and planetary science.

## Worth Deep Reading

- **Mitigating Reasoning-Induced Misalignment via Safety-Direction Penalty** — This paper addresses a subtle and severe safety failure mode: models can become less safe after training only on benign-looking reasoning data. Its cross-architecture analysis and proposed penalty are directly relevant to current LLM alignment practice.

- **SWE Refactor Bench** — A pragmatic benchmark that pushes coding agents from isolated bug fixes to whole-repository migrations. It is likely to become a reference point for measuring long-horizon software engineering agents.

- **The Interaction Tax: When Communication Erases Diversity in Multi-Agent Teams** — A well-controlled study that complicates the prevailing optimism about multi-agent LLM collaboration. Its findings have immediate implications for system design and evaluation methodology.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*