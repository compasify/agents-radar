# ArXiv AI Research Digest 2026-08-01

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-01 01:47 UTC

---

## Today's Highlights

Today’s submissions emphasize a shift from static capability benchmarks toward dynamic, standardized, and trustworthy evaluation for agents and safety—seen in OSReward, ORCA-bench, PAIChecker, and InfoOps Bench. Reasoning research is questioning costly reflection loops: repeated sampling at equal token cost can beat self-refine and Reflexion, while new self-distillation and self-verification frameworks aim to stabilize test-time compute. Agent infrastructure is maturing with executable coding-task generation, adaptive multi-agent topologies, and standardized computer-use reward models. Domain-specific applications are increasingly built on weak supervision and structured extraction, from 280k colonoscopy reports to financial news and cybersecurity alerts. Safety and accountability also feature prominently through system-prompt auditing, fairness stress-testing, and live information-operations benchmarks.

---

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [AISPA: User-Centric System Prompt Auditing for Large Language Model Applications](http://arxiv.org/abs/2607.28617v1) | Xiangning Lin, Shenzhe Zhu, Shu Yang et al. | Introduces AISPA, a user-centric auditing framework for system prompts in commercial LLM apps, making hidden developer instructions inspectable and testable. It addresses the accountability gap around undisclosed system prompts in deployed AI products. |
| [Sample More, Reflect Less: Self-Refine and Reflexion Lose to Repeated Sampling at Equal Token Cost, from 1.5B to 7B](http://arxiv.org/abs/2607.28576v1) | Iliya Mirzaei | Shows that self-refine and Reflexion often gain accuracy only by generating extra text, and that repeated independent sampling matches or beats them at equal token cost across 1.5B–7B models. This provides a strong baseline and a caution for test-time compute strategies. |
| [$β$-OPSD: Deriving with Policy Optimization, Training with Self-Distillation](http://arxiv.org/abs/2607.28582v1) | Jiawei Xu, Minghui Liu, Juzheng Zhang et al. | Identifies vanilla on-policy self-distillation as a brittle special case and derives β-OPSD, a generalized policy-optimization/self-distillation framework for reasoning LMs. It makes OPSD substantially more stable and reproducible with less engineering effort. |
| [Frontis-MA1: Training an AI4AI Model towards Recursive Self-Improvement in Machine Learning Engineering](http://arxiv.org/abs/2607.28568v1) | Junlin Yang, Che Jiang, Yu Fu et al. | Presents OpenMLE, an open full-stack system for recursive self-improvement research in machine learning engineering, and trains Frontis-MA1, an AI4AI model. It provides a concrete executable testbed for studying AI systems that improve the process of building AI. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [OSReward: Instituting Standardized Evaluation for Cross-Platform Computer-Use Reward Models](http://arxiv.org/abs/2607.28609v1) | Qiushi Sun, Kanzhi Cheng, Yian Wang et al. | Institutes a standardized evaluation benchmark for reward models that verify computer-use agent trajectories across platforms. This addresses central needs in CUA evaluation, data curation, and reinforcement learning. |
| [ORCA-bench: How Ready Are Language Model Agents for Oncall?](http://arxiv.org/abs/2607.28545v1) | Albert Gong, Kyuseong Choi, Abhineet Agarwal et al. | Introduces a benchmark for oncall root cause analysis, requiring agents to reason over noisy metrics, logs, traces, and source code from ambiguous user-facing reports. It evaluates a practical, high-value agent capability beyond code generation. |
| [MANTA: Multi-Agent Network Topology Adaptation for Self-Evolving Multi-Agent Systems](http://arxiv.org/abs/2607.28527v1) | Mao-xun Huang, Jerry Wang, Yi-Cheng Lai et al. | Proposes adaptive communication topology for LLM multi-agent systems, allowing the network structure to evolve during problem solving. This improves coordination, task decomposition, and intermediate validation over fixed topologies. |
| [Change2Task: From Repository Changes to Executable Coding Agent Tasks and Environments](http://arxiv.org/abs/2607.28591v1) | Haomin Qi, Xingliang Wang, Xuanqi Gao et al. | Develops a system that turns repository changes into executable coding-agent tasks with realistic software states, tools, and verification. It expands the supply of high-quality training and evaluation data for coding agents. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [ReToken: One Token to Improve Vision-Language Models for Visual Retrieval](http://arxiv.org/abs/2607.28627v1) | Yao Xiao, Reuben Tan, Zhen Zhu et al. | Adds a single learnable retrieval token to vision-language models, enabling them to handle long visual contexts without processing all image tokens. This improves visual retrieval accuracy and reduces GPU memory cost. |
| [PAIChecker: Uncovering and Checking PR-Issue Misalignment in SWE-Bench-Like Benchmarks](http://arxiv.org/abs/2607.28587v1) | Manyi Wang, Junjielong Xu, Pinjia He | Uncovers and checks PR-issue misalignment in SWE-bench-like benchmarks, identifying cases where issue descriptions do not match the PRs used as solutions. It provides an automated method to validate benchmark integrity for LLM issue-resolution evaluation. |
| [LeanCSP: A Framework for Certifying Constraint Reformulation and Solving in Lean](http://arxiv.org/abs/2607.28459v1) | Pablo Manrique, Stefan Szeider | Presents a framework for certifying constraint reformulations and solver results in Lean, providing formal guarantees in constraint programming. This strengthens trust in combinatorial solvers used in scheduling, planning, and verification. |
| [Graph Neural Multilevel Preconditioners for Iterative Solvers](http://arxiv.org/abs/2607.28456v1) | Zechen Zhang, Rui Peng Li, Yousef Saad | Learns GNN-based multilevel preconditioners for large sparse linear systems, improving iterative-solver robustness on matrices where classical AMG struggles. It offers a learned alternative for scientific computing workflows. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [A report-grounded vision-language foundation model for colonoscopy from 280000 routine reports](http://arxiv.org/abs/2607.28466v1) | Jia Yu, Yan Zhu, Yili He et al. | Trains a vision-language foundation model for colonoscopy using weak supervision from 280,000 routine procedure reports. It links whole-procedure textual findings to frames, addressing annotation scarcity and enabling report-grounded endoscopic AI. |
| [Cybersecurity Detection Classification with Reasoning-enabled Language Models](http://arxiv.org/abs/2607.28460v1) | Amol Khanna, Manu Nandan, Cristian Viorel Popa et al. | Trains reasoning-enabled LLMs to classify cybersecurity detections with explanations rather than emitting triage labels directly. This reduces alert fatigue and makes SOC triage more interpretable and actionable. |
| [Beyond Sentiment: Structured Information Extraction from Financial News](http://arxiv.org/abs/2607.28496v1) | Daohan Zhu, Sitong Ge, Ruofei Wang et al. | Proposes structured information extraction from financial news across dimensions such as event type, impact scope, and temporal horizon. This moves beyond single-polarity sentiment to richer signals for stock prediction and financial analysis. |

---

## Research Trend Signal

Several submissions converge on making AI evaluation itself more trustworthy. OSReward standardizes trajectory verification for computer-use agents; PAIChecker audits PR-issue alignment in SWE-bench-like benchmarks; InfoOps Bench provides a live safety benchmark; AISPA audits undisclosed system prompts. This is a move from capability benchmarks toward validity, reproducibility, and accountability. A second trend is re-examining inference-time compute: one paper finds repeated sampling beats self-refine/reflexion at equal token cost, while β-OPSD seeks more stable self-distillation, and ReToken compresses long visual context into a single token. Finally, weak supervision is enabling domain-specific models in colonoscopy, financial news, and mental-health screening, suggesting that large routine corpora can substitute for curated labels. Together, these papers indicate increasing attention to efficiency, verification, and deployment realism across LLM research.

---

## Worth Deep Reading

1. **Sample More, Reflect Less** — This paper empirically challenges widely used self-refine and Reflexion methods by showing that repeated sampling matches or outperforms them at equal token cost. It is a crucial baseline for anyone designing or evaluating inference-time scaling strategies.

2. **OSReward** — Computer-use agents are advancing quickly, but reliable trajectory verification remains unsolved. OSReward provides a standardized cross-platform evaluation for reward models, likely becoming a reference benchmark for CUA RL and automatic evaluation.

3. **Frontis-MA1** — Recursive self-improvement is one of the most ambitious goals in AI. This paper’s OpenMLE system offers an open, executable testbed for studying AI4AI in machine learning engineering, making the direction more concrete and reproducible.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*