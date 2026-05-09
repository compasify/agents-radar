# ArXiv AI Research Digest 2026-05-09

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-05-09 00:21 UTC

---

# ArXiv AI Research Digest — May 9, 2026

---

## 1. Today's Highlights

Today's submissions reveal a strong convergence toward **agentic AI systems with recursive self-improvement capabilities**, alongside continued maturation of mixture-of-experts architectures and training efficiency research. Notably, multiple papers address the critical gap between LLM reasoning and long-horizon decision-making, with [Recursive Agent Optimization](http://arxiv.org/abs/2605.06639v1) and [StraTA](http://arxiv.org/abs/2605.06642v1) proposing fundamentally new approaches to scalable agent training. The field also shows heightened attention to **evaluation integrity**, with two papers directly challenging leaderboard methodologies and safety benchmarking practices. Perhaps most striking is the emergence of "AI co-scientist" paradigms—systems designed not to replace but to augment human researchers in mathematics and fluid dynamics, suggesting a pivot from automation toward human-AI collaborative discovery.

---

## 2. Key Papers

### 🧠 Large Language Models

| Title | Authors | Key Contribution |
|-------|---------|----------------|
| [EMO: Pretraining Mixture of Experts for Emergent Modularity](http://arxiv.org/abs/2605.06663v1) | Wang, Bhagia, Min | First demonstration that MoE architectures can spontaneously develop functional specialization (code, math, domain knowledge) during pretraining, enabling efficient capability-specific deployment without full model loading. |
| [UniPool: A Globally Shared Expert Pool for Mixture-of-Experts](http://arxiv.org/abs/2605.06665v1) | Huang, Shi, Zheng et al. | Decouples expert allocation from layer depth by introducing a shared global pool, reducing parameter growth from linear to constant with depth while maintaining performance. |
| [Optimizer-Model Consistency: Full Finetuning with the Same Optimizer as Pretraining Forgets Less](http://arxiv.org/abs/2605.06654v1) | Liu, Wang, Zhang | Reveals that optimizer continuity between pretraining and finetuning significantly improves the learning-forgetting tradeoff, with immediate practical implications for deployment pipelines. |
| [The Structural Origin of Attention Sink: Variance Discrepancy, Super Neurons, and Dimension Disparity](http://arxiv.org/abs/2605.06611v1) | Li, Jiang, Sun et al. | Provides first mechanistic explanation for attention sinks via architectural analysis, opening paths to mitigation without training modifications. |
| [UniSD: Towards a Unified Self-Distillation Framework for Large Language Models](http://arxiv.org/abs/2605.06597v1) | Jin, Wang, Fu et al. | Unifies disparate self-distillation objectives into a single framework with automatic reward shaping, addressing the credit assignment problem for free-form generation. |
| [When and Why SignSGD Outperforms SGD: A Theoretical Study Based on ℓ₁-norm Lower Bounds](http://arxiv.org/abs/2605.06615v1) | Tao, Yu, Zhang | Establishes theoretical conditions for sign-based optimization superiority, explaining the empirical success of Muon and related methods in foundation model training. |

### 🤖 Agents & Reasoning

| Title | Authors | Key Contribution |
|-------|---------|----------------|
| [Recursive Agent Optimization](http://arxiv.org/abs/2605.06639v1) | Gandhi, Chakraborty, Wang et al. | Introduces agents that recursively spawn task-specific sub-instances of themselves, creating an inference-time scaling algorithm with natural delegation hierarchies. |
| [StraTA: Incentivizing Agentic Reinforcement Learning with Strategic Trajectory Abstraction](http://arxiv.org/abs/2605.06642v1) | Xue, Zhou, Wang et al. | Replaces reactive agent training with strategic trajectory abstraction, enabling explicit credit assignment over extended horizons through learned subgoal representations. |
| [Can RL Teach Long-Horizon Reasoning to LLMs? Expressiveness Is Key](http://arxiv.org/abs/2605.06638v1) | Wang, Wang, Lan et al. | Introduces ScaleLogic benchmark proving that RL scaling for reasoning requires sufficient policy expressiveness, with empirical thresholds for effective learning. |
| [MASPO: Joint Prompt Optimization for LLM-based Multi-Agent Systems](http://arxiv.org/abs/2605.06623v1) | Wang, Liu, Wang et al. | First end-to-end differentiable framework for jointly optimizing prompts across interacting agents, treating multi-agent collaboration as a coupled optimization problem. |
| [SkillOS: Learning Skill Curation for Self-Evolving Agents](http://arxiv.org/abs/2605.06614v1) | Ouyang, Yan, Chen et al. | Frames agent self-improvement as a skill curation problem with quality-aware distillation, enabling continuous learning from streaming tasks without catastrophic forgetting. |
| [AI Co-Mathematician: Accelerating Mathematicians with Agentic AI](http://arxiv.org/abs/2605.06651v1) | Zheng, von Glehn, Zwols et al. | Workbench design for human-AI mathematical collaboration spanning ideation, literature search, and proof formalization—positioned as augmentation rather than replacement. |

### 🔧 Methods & Frameworks

| Title | Authors | Key Contribution |
|-------|---------|----------------|
| [Beyond Negative Rollouts: Positive-Only Policy Optimization with Implicit Negative Gradients](http://arxiv.org/abs/2605.06650v1) | Xu, Fang | Eliminates need for failed trajectory collection in RLVR by deriving implicit negative gradients from positive examples alone, reducing computational overhead. |
| [Why Global LLM Leaderboards Are Misleading: Small Portfolios for Heterogeneous Supervised ML](http://arxiv.org/abs/2605.06656v1) | Moondra, Chughtai, Lanka et al. | Analysis of 89K comparisons showing global Bradley-Terry rankings fail for 2/3 of language-task pairs; proposes portfolio-based evaluation as alternative. |
| [When No Benchmark Exists: Validating Comparative LLM Safety Scoring Without Ground-Truth Labels](http://arxiv.org/abs/2605.06652v1) | Gautam, Schwall, Willoch Olstad et al. | Formalizes benchmarkless safety evaluation with statistical guarantees, addressing critical deployment need in low-resource languages and novel regulatory regimes. |
| [SoftSAE: Dynamic Top-K Selection for Adaptive Sparse Autoencoders](http://arxiv.org/abs/2605.06610v1) | Stępień, Mazur, Tabor et al. | Replaces fixed sparsity in SAEs with dynamic top-K selection, improving feature recovery and enabling architecture-agnostic application across LLMs and vision transformers. |

### 📊 Applications

| Title | Authors | Key Contribution |
|-------|---------|----------------|
| [AI CFD Scientist: Toward Open-Ended Computational Fluid Dynamics Discovery with Physics-Aware AI Agents](http://arxiv.org/abs/2605.06607v1) | Somasekharan, Pathak, Dhanakoti et al. | Extends autonomous scientific discovery to high-fidelity physical simulators with physics-aware validation, closing the loop for simulation-based research. |
| [NeuroAgent: LLM Agents for Multimodal Neuroimaging Analysis and Research](http://arxiv.org/abs/2605.06584v1) | Zhong, Xia, Zhang et al. | Automates complex neuroimaging pipelines with modality-aware quality control, reducing barrier to reproducible brain research. |
| [ActCam: Zero-Shot Joint Camera and 3D Motion Control for Video Generation](http://arxiv.org/abs/2605.06667v1) | El Khalifi, Rossi, Fossey et al. | Achieves decoupled control of actor motion and camera trajectory in video generation without task-specific training, advancing cinematic AI tools. |
| [GlazyBench: A Benchmark for Ceramic Glaze Property Prediction and Image Generation](http://arxiv.org/abs/2605.06641v1) | Zhai, Li, Shao et al. | First large-scale multimodal dataset for ceramic glaze development, demonstrating AI's potential to democratize traditional craft knowledge. |

---

## 3. Research Trend Signal

Three converging directions emerge from today's submissions. **First, recursive and self-referential agent architectures** are moving from theoretical curiosity to implementable systems—Recursive Agent Optimization and StraTA both treat agent boundaries as fluid rather than fixed, enabling dynamic compute allocation. This suggests the field is internalizing lessons from software engineering (modularity, delegation) into AI architecture design. **Second, evaluation epistemology is undergoing stress-testing**: two papers independently challenge whether current benchmarking practices can support legitimate model selection, particularly for safety-critical deployment without established ground truth. This reflects growing maturity—recognition that measurement infrastructure must evolve with capabilities. **Third, "co-scientist" paradigms** in mathematics and fluid dynamics represent a deliberate pivot from AI-as-oracle to AI-as-collaborator, with interface design becoming as important as model capability. The common thread is **agency with accountability**: systems that act autonomously but remain interpretable, steerable, and verifiable by human partners.

---

## 4. Worth Deep Reading

**[Recursive Agent Optimization](http://arxiv.org/abs/2605.06639v1)** — Gandhi et al.
This paper proposes a genuinely novel computational primitive: agents that recursively instantiate themselves for subproblems. Unlike prior hierarchical RL or modular approaches, the recursive structure creates natural inference-time scaling with theoretical connections to fixed-point computation. The implications extend to safety (recursive oversight), economics (compute markets), and distributed systems. Most importantly, it provides a mechanism for handling computational complexity without commensurate model growth.

**[Why Global LLM Leaderboards Are Misleading](http://arxiv.org/abs/2605.06656v1)** — Moondra et al.
With 89K comparisons across 116 languages, this is the most comprehensive empirical analysis of ranking validity to date. The finding that global rankings mislead for two-thirds of language-task pairs has immediate policy implications for model selection in non-English contexts and specialized applications. The proposed portfolio approach offers a constructive alternative to current leaderboard monoculture.

**[StraTA: Incentivizing Agentic Reinforcement Learning with Strategic Trajectory Abstraction](http://arxiv.org/abs/2605.06642v1)** — Xue et al.
Addresses the fundamental credit assignment problem in long-horizon agent training through learned subgoal representations that enable strategic rather than reactive behavior. The abstraction mechanism connects to broader questions in hierarchical reinforcement learning and may prove essential for scaling agents beyond toy environments. The paper's explicit treatment of exploration-exploitation tradeoffs over extended trajectories fills a critical gap in current agent training methodologies.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*