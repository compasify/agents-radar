# ArXiv AI Research Digest 2026-08-19

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-18 23:11 UTC

---

## 1. Today's Highlights

Today's submissions show three converging fronts: long-horizon agentic control (BATON, HAF, neurosymbolic embodied agents), post-training RL for LLMs (PIHF, Le Critique, ClawGym), and a widening audit of model trust (Model Hypnosis, counterfactual explanation evaluation, compliance-probe audits). Several papers push AI-assisted discovery, including AlphaEvolve's attack on the matrix-multiplication exponent and AutoSR's open-ended symbolic regression. Another cluster targets physical calibration of video world models and grounded RAG, reflecting a shift from raw capability to reliability under uncertainty.

## 2. Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Proteus: Incremental Memory Activation for Long-Context Sequence Modeling](http://arxiv.org/abs/2608.16844v1) | Reza Bayat, Ali Behrouz, Vahab Mirrokni et al. | Introduces incremental memory activation to avoid static memory that lets early tokens dominate. This improves long-context modeling efficiency and fidelity. |
| [Model Hypnosis: Strong control of AI via additive subliminal effects](http://arxiv.org/abs/2608.16834v1) | Enric Boix-Adsera, Benedict Tessler | Demonstrates that combining individually weak prompt cues can strongly control model behavior across scales and families. The result exposes a broad, unobtrusive vulnerability in deployed LLMs. |
| [Policy Iteration with Human Feedback: Bringing Post-Training RL to In-context Learning](http://arxiv.org/abs/2608.16831v1) | Minh-Ha Nguyen, Cathy Shyr | PIHF applies policy iteration with human feedback directly to in-context learning, letting fixed models improve without weight updates. It connects post-training RL with prompt-based adaptation. |
| [Le Critique: Privileged Value Functions for LLM Reinforcement Learning](http://arxiv.org/abs/2608.16739v1) | Siddarth Venkatraman, Matthieu Dinot, Laurence Aitchison | Proposes privileged value functions to give LLM RL fine-grained token-level credit rather than sequence-level GRPO estimates. This improves variance reduction without blocking training with a separate frozen actor. |
| [GRIP: Grounded Reasoning via Information-Restricted Premises](http://arxiv.org/abs/2608.16776v1) | Lirui Teng | Identifies "query dominance" in RAG where query states overwhelm retrieved evidence. GRIP restricts query information to force reasoning on evidence, improving groundedness. |
| [Would this change your answer? Evaluating Explanations of LLM Behavior In The Wild with Counterfactual Experiments](http://arxiv.org/abs/2608.16747v1) | Adam Karvonen, Euan Ong, Subhash Kantamneni et al. | Uses counterfactual simulatability to decide whether an explanation actually predicts LLM behavior under interventions. Provides a practical, falsifiable standard for interpretability claims. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Don't Drop the BATON: Long-Horizon Robot Manipulation via Agentic Subtask Exploration and Transition-aware Memory](http://arxiv.org/abs/2608.16889v1) | Bingxin Xu, Yuzhang Shang, Emilio Ferrara et al. | Addresses error compounding in long-horizon VLA manipulation with agentic subtask exploration and transition-aware memory. Reduces cascading failures across contact-rich multi-stage tasks. |
| [Neurosymbolic Embodied Agents](http://arxiv.org/abs/2608.16794v1) | Mohammad Albinhassan, Yuming Feng, Alessandra Russo et al. | Combines LLM planning with symbolic verification and visual grounding to guarantee executable household plans. Bridges neural generation and environment dynamics constraints. |
| [TDD-Agent: Test-Driven Reasoning for Code Generation](http://arxiv.org/abs/2608.16742v1) | Hongyue Yu, Kefan Li, Jiakun Li et al. | Recasts generated tests from post-hoc validators into active drivers of implementation. Improves repository-level code generation by iterative test-then-implement reasoning. |
| [When Agents Coordinate: Measuring Coordination in Multi-Agent AI Coding](http://arxiv.org/abs/2608.16801v1) | Giuseppe Destefanis, Tomaso Aste | Proposes an instrument to measure coordination inside teams of AI coding agents. Moves evaluation beyond completion/cost to collaborative dynamics. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Improving the matrix multiplication exponent with modern optimization and AlphaEvolve](http://arxiv.org/abs/2608.16884v1) | Emilien Dupont, Marvin Eisenberger, Borislav Kozlovskii et al. | Combines modern optimization and AlphaEvolve to solve the core optimization problem behind the best matrix-multiplication exponent bounds. Opens a new AI-driven route to a fundamental theoretical computer science result. |
| [AutoSR: Automatic Symbolic Regression by Searching Research States](http://arxiv.org/abs/2608.16876v1) | Kejia Zhang, Youran Sun, Xinyu Ren et al. | Automates symbolic regression by searching persistent research states instead of isolated equations. Improves robustness on finite noisy data and supports scientific model discovery. |
| [CaliBench: Are the Stochastic Dynamics of Video World Models Physically Calibrated?](http://arxiv.org/abs/2608.16829v1) | Jonathan Sadeghi, Jenny Seidenschwarz, Jesse Allardice et al. | Benchmarks whether video world models capture fine-grained aleatoric uncertainty of physical outcomes. Proposes calibration tests for stochastic dynamics rather than whole-dataset distribution matching. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [MIRROR: Multimodal Intelligent Radiology Reasoning and Observation Reporter](http://arxiv.org/abs/2608.16709v1) | Vignesh Nagarajan, Sriram Venkatapathy | Separates multi-label classification from natural-language generation to avoid fabricated findings in radiology reports. Provides a transparent chain from images to text. |
| [GEO-Flag: Detecting and Measuring GEO-Optimized Web Content](http://arxiv.org/abs/2608.16824v1) | Junjie Chu, Ye Leng, Mingjie Li et al. | Detects web content optimized for generative engine visibility and citation. Helps quantify authority distortion and misinformation risks in AI search. |
| [The Ethical Decision Head: Operationalizing Normative Ethics in Autonomous Vehicles via Reinforcement Learning from Human Feedback](http://arxiv.org/abs/2608.16710v1) | Thomas Mbrice, Ammar Ali, Sami Mian et al. | Adds a normative ethics layer to AV decision-making using RLHF. Operationalizes ethical preferences in safety-critical control. |
| [zLend: A Dual-Scope Cash-Flow Reconstruction Framework for On-Chain Credit Underwriting](http://arxiv.org/abs/2608.16856v1) | Girish G N, Ashutosh Sahoo, Akshay SP et al. | Reconstructs wallet-level cash flows to underwrite decentralized loans without a credit bureau. Offers a deployed, interpretable credit-risk framework for on-chain finance. |

## 3. Research Trend Signal

The dominant trend is a shift from static models to agentic and adaptive systems. Papers like PIHF, Le Critique, and ClawGym bring reinforcement learning closer to in-context use, while BATON, HAF, and neurosymbolic agents target long-horizon physical execution. Another signal is reliability-focused evaluation: CaliBench tests world-model calibration, counterfactual explanations test interpretability, and compliance audits test detector trust. Security is also central: Model Hypnosis shows subtle prompt control, and state-semantic injection attacks embodied agents. Finally, AI for discovery appears in AlphaEvolve and AutoSR, where learned search accelerates mathematical and scientific research. Together these submissions suggest a field shifting from benchmark competence to robustness, calibratability, and verifiability in real-world deployment.

## 4. Worth Deep Reading

- **Model Hypnosis: Strong control of AI via additive subliminal effects** — Important for AI safety and alignment because it demonstrates a broad, easily overlooked control vulnerability across model families and scales. The implications for prompt injection and model governance are significant.

- **Improving the matrix multiplication exponent with modern optimization and AlphaEvolve** — A striking example of AI-assisted mathematical discovery applied to a foundational open problem in theoretical computer science. It shows how learned search can directly improve core algorithmic bounds.

- **Don't Drop the BATON: Long-Horizon Robot Manipulation via Agentic Subtask Exploration and Transition-aware Memory** — Worth reading for its practical attack on error compounding in long-horizon robot manipulation. It addresses a central bottleneck in applying vision-language-action models to real physical tasks.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*