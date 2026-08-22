# ArXiv AI Research Digest 2026-08-22

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-21 23:13 UTC

---

## Today's Highlights

Today's submissions center on making LLMs more selective and self-corrective: new benchmarks target context-sensitive unlearning, evidence arbitration, and measurement artifacts in self-improvement. Agentic systems are moving toward adaptive behavior—models learn when to reason longer, transfer skills across tasks, and even improve their own training algorithms. Efficiency remains a cross-cutting theme, from semantic caching and model routing to CPU-first small language models. Domain applications in medicine, law, and robotics are increasingly evaluated with benchmarks that reflect realistic operating constraints.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [ConceptGuard: Benchmarking Context-Sensitive Unlearning in Large Language Models](http://arxiv.org/abs/2608.20338v1) | Sahil Kale, Ian Harris | Introduces a benchmark for context-sensitive unlearning, moving beyond disjoint forget/retain sets to cases where the same knowledge must be removed or kept depending on context. It provides a more realistic evaluation of unlearning methods and highlights the need for selective, context-aware knowledge removal. |
| [Phantom Gains: Auditing Self-Improvement Against a Measured Null](http://arxiv.org/abs/2608.20290v1) | Cheng Xu, Nan Yan, Liming Chen et al. | Audits self-improvement by examining per-problem transitions rather than mean accuracy, showing that apparent gains can be measurement artifacts from differencing noisy estimates. This is important for reliable evaluation of iterative LLM self-improvement. |
| [Inject, Align, Recover: Staged Post-Training for Retrieval-Free Document Knowledge Internalization](http://arxiv.org/abs/2608.20281v1) | Qian Kou, Xiaofeng Shi, Xiaosong Qiu et al. | Proposes a staged post-training pipeline to internalize bounded document knowledge into parametric memory for retrieval-free question answering. It addresses the practical need for LLMs to answer from fixed corpora without inference-time retrieval. |
| [When Text and Numbers Disagree: Evidence Arbitration in Large Language Models](http://arxiv.org/abs/2608.20116v1) | Mattia Carletti, Edward Phillips, Fredrik K. Gustafsson et al. | Studies how LLMs arbitrate conflicting textual, numerical, and tool-output evidence in controlled synthetic settings. It reveals weaknesses in evidence arbitration and informs reliability of LLMs in data-analysis contexts. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [AI4AI-Bench: Benchmarking LLM Agents in Algorithmic Design for Recursive Self-Improvement](http://arxiv.org/abs/2608.20318v1) | Yizhe Chi, Wenyi Li, Deyao Hong et al. | Benchmarks LLM agents on algorithmic design tasks for recursive self-improvement, testing whether agents can improve the training algorithms that produce AI systems. It provides a structured evaluation for RSI and highlights gaps in current agent capabilities. |
| [MidTool: Mid-training Data Synthesis for Agentic Tool Use](http://arxiv.org/abs/2608.20314v1) | Fengqing Jiang, Yite Wang, Boyi Liu et al. | Presents a method for synthesizing mid-training data to strengthen agentic tool-use abilities in LLMs. It targets the mid-training stage to improve planning and tool-use skills without full fine-tuning or large-scale instruction data. |
| [Break It Down, Pass It On: Cross-Task Skill Transfer in LLM Agents](http://arxiv.org/abs/2608.20274v1) | Yiyang Feng, Biddut Sarker Bijoy, Niranjan Balasubramanian et al. | Investigates when agent-induced skills transfer reliably across tasks, including cases where transfer can harm performance. The findings inform how to build agents that grow more capable with experience without negative interference. |
| [Learning When to Think: Adaptive Reasoning for Test-Time Compute Allocation](http://arxiv.org/abs/2608.20256v1) | Gijs Kassenaar, Zhao Yang, Vincent François-Lavet | Explores whether reasoning models can learn to allocate test-time compute adaptively instead of using a fixed token budget. It addresses over-computation on easy problems and under-computation on hard ones, making thinking-time usage more efficient. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Pandora's AI Model Routing Box: Efficient Allocation with Costly Value Estimation](http://arxiv.org/abs/2608.20316v1) | Adam Fisch, Shubhendu Trivedi, Fantine Huot et al. | Studies routing queries across heterogeneous AI specialists when estimating specialist quality is costly. It contributes allocation algorithms that balance exploration and exploitation for efficient model routing. |
| [Which Eviction Policy Should an LLM Cache Use? A Systematic Study Across Workloads, Capacities, and Encoders](http://arxiv.org/abs/2608.20280v1) | Yash Kulkarni, Shubham Harkare, Arvind Suresh Yogesh Babu | A systematic comparison of semantic cache eviction policies across workloads, capacities, and encoders using the CLEVER protocol. It provides practical guidance for serving LLMs at scale by identifying when each eviction policy works best. |
| [Discrete Diffusion Inference-Time Control with Nested Sequential Monte Carlo](http://arxiv.org/abs/2608.20123v1) | Lohithsai Yadala Chanchu, Hany Abdulsamad, Christian A. Naesseth | Develops nested sequential Monte Carlo for inference-time control in discrete diffusion language models, steering sampling toward sequence-level rewards without retraining. It improves upon best-of-n and bootstrap methods for constrained text generation. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [G-CARL: Grounded Checklist-Aligned Reward Learning for Patient-Oriented Medical Report Interpretation](http://arxiv.org/abs/2608.20331v1) | Shiao Xie, Siyu Chen, Jianwei Lv et al. | Proposes a grounded checklist-aligned reward learning approach for patient-oriented medical report interpretation. It combines evidence-grounded medical factuality with context-dependent communication, addressing an important clinical need. |
| [ContractScrub: A benchmark for final review of legal contracts](http://arxiv.org/abs/2608.20204v1) | Yejin Bang, Kirsty Fielding, Brandan Oliver et al. | Introduces a benchmark for final review of legal contracts, targeting error and inconsistency detection in transactional agreements. It provides a realistic high-value legal task for evaluating LLM precision and reliability. |
| [DARS: Dual-Level Credit Assignment RL with Structured Reasoning for Instruction-Based Image Editing](http://arxiv.org/abs/2608.20161v1) | Haoxiang Cao, Jiajiong Cao, Xuanpu Zhang et al. | Presents dual-level credit assignment RL for instruction-based image editing, assigning credit to both plan and execution in planner-renderer pipelines. It makes training with only final-image rewards more efficient by identifying which stage caused errors. |
| [DECOWAM: Decoupled Whole-Body World-Action Model for Legged Mobile Manipulation](http://arxiv.org/abs/2608.20114v1) | Siyuan Ma, Boshi Zhang, Yutian Zhang et al. | Introduces a decoupled whole-body world-action model for legged mobile manipulation, distinguishing camera ego-motion from base and arm actions. It improves prediction and control in mobile manipulation tasks, an important step toward deployable robots. |

## Research Trend Signal

An immediate signal is the shift from static accuracy benchmarks to transition-level and context-dependent evaluation: ConceptGuard, Phantom Gains, and MemTrapBench all treat behavior as a set of per-case decisions rather than an aggregate score. A second direction is adaptive and selective computation—Learning When to Think, model routing, and semantic caching all aim to spend compute only where it improves outcomes. Agentic self-improvement is also becoming a concrete benchmark target, with AI4AI-Bench and harness optimization methods treating the agent's own workflow as an object to learn and improve. Finally, domain applications are maturing: legal, medical, and robotics papers now include task-specific reward structures and evaluation protocols grounded in professional workflows. Together these trends indicate a field moving from raw capability toward controllability, reliability, and cost-aware deployment.

## Worth Deep Reading

- **Phantom Gains: Auditing Self-Improvement Against a Measured Null** — A critical methodological sanity check for every self-improvement claim. Its audit of per-problem gain/loss statistics shows how noise can masquerade as progress, making it essential reading for anyone evaluating iterative LLM training.

- **AI4AI-Bench: Benchmarking LLM Agents in Algorithmic Design for Recursive Self-Improvement** — Recursive self-improvement is one of the most consequential claims around LLMs. This paper turns it into a measurable algorithmic-design task and reveals concrete capability gaps in current agents.

- **Inject, Align, Recover: Staged Post-Training for Retrieval-Free Document Knowledge Internalization** — Retrieval-free knowledge internalization could meaningfully reshape the RAG-versus-parametric-memory tradeoff. The staged post-training recipe is directly actionable for domain adaptation and bounded-corpus question answering.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*