# ArXiv AI Research Digest 2026-10-15

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-10-15 00:48 UTC

---

---

### **Today's Highlights**  
Recent submissions on arXiv highlight a pivotal shift toward *autonomous, self-improving AI systems*—particularly in robotics and agentic frameworks. A surge in papers focuses on **recursive self-improvement (RSI)**, where agents not only execute tasks but also refine their own reasoning, tool use, and control policies through physical or simulated experience. Notably, frameworks like **SEAR** and **Self-Evolving Agent Harness** formalize feedback-driven evolution of agent scaffolding without retraining model weights. Concurrently, advancements in **long-horizon planning**, **efficient decoding**, and **verifiable reward modeling** are enabling more robust, scalable agentic behavior. These developments collectively point to an emerging paradigm: AI agents that learn *how to learn*, with minimal human intervention.

---

### **Key Papers**

#### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [What Matters in Quality-Aware VLA Pretraining: A Benchmark and Empirical Study](http://arxiv.org/abs/2610.18869v1) | Mingxuan Yan et al. | This study benchmarks how demonstration quality impacts VLA pretraining, revealing that conditioning on rewards outperforms filtering or weighting. It provides actionable insights for improving generalization in real-world robot learning. |
| [Rubrics from the Task, Verdicts from Evidence: Pointwise Rubric Rewards with Tool-Augmented Judges](http://arxiv.org/abs/2610.18766v1) | Tianci Liu et al. | Proposes a method to generate rubrics directly from task specifications and validate them via evidence-based judges, reducing response-induced bias in LLM evaluation. This enables more reliable, interpretable, and generalizable reward models. |
| [Read the Room Before Your Model Generates](http://arxiv.org/abs/2610.18820v1) | Muyao Kong et al. | Introduces a geometrically interpretable temperature selection mechanism that adapts to input context, moving beyond heuristic settings. This improves output consistency and controllability in LLM generation. |

#### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Tev: Scaling Long-Horizon Agentic Environments with Dense Progress Rewards](http://arxiv.org/abs/2610.18868v1) | Wenbo Hu et al. | Introduces dense progress rewards to stabilize long-horizon agent training, enabling open-source models to sustain autonomous behavior over hours. This addresses a key bottleneck in recursive self-improvement. |
| [SkillScaffold: Scaffolding Agentic Reinforcement Learning with Policy-Adaptive Skill Credit Assignment](http://arxiv.org/abs/2610.18807v1) | Wenlin Zhong et al. | Proposes a selective skill injection framework that dynamically assigns credit based on policy adaptability, significantly improving exploration and convergence in agentic RL. |
| [Hybrid Reasoning Agents](http://arxiv.org/abs/2610.18861v1) | Jiaru Zou et al. | Bridges natural language interaction with latent reasoning by combining textual outputs with transparent, non-linguistic internal computation. This enhances both efficiency and interpretability in complex decision-making. |
| [Beyond the Verdict: Agentic Code Judging with Verifiable Feedback](http://arxiv.org/abs/2610.18760v1) | Zheye Deng et al. | Enables LLM agents to revise code via verifiable feedback loops, using test cases as evidence. This supports iterative debugging and correct-by-construction development. |

#### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [DoubtLess: Training-Free Contrastive Decoding for Efficient Reasoning](http://arxiv.org/abs/2610.18862v1) | Minghao Luo et al. | Presents a zero-cost decoding method that shortens chains of thought by leveraging contrastive token scoring. Achieves faster inference without additional training. |
| [SP$^2$ec: Adaptive Self-Speculative Decoding for Vision-Language Models](http://arxiv.org/abs/2610.18735v1) | Yuqi Huang et al. | Introduces adaptive speculative decoding for VLMs, reusing partial generations across modalities to boost throughput. Solves the challenge of drafter inconsistency in multimodal inference. |
| [Two Clocks: Why Larger Rollout Batches Learn Slower but Fail on Schedule in RLVR](http://arxiv.org/abs/2610.18853v1) | Yuante Li et al. | Reveals a fundamental trade-off between batch size and learning speed in RL with verifiable rewards, challenging standard scaling assumptions. Critical for designing efficient agent training pipelines. |
| [LIBERO-RIG: A Hardware-Setup Robustness Benchmark for Vision-Language-Action Models](http://arxiv.org/abs/2610.18843v1) | Andrea Yaoyun Cui et al. | Introduces a benchmark testing robot policies under realistic hardware perturbations (e.g., camera misalignment). Crucial for evaluating real-world deployment readiness. |

#### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [AesCode: Aesthetic Code Generation with Decoupled Cross-Modal Rewards](http://arxiv.org/abs/2610.18860v1) | Xin Gao et al. | Enables code generation for visual artifacts (slides, dashboards) with aesthetic optimization via decoupled layout/color rewards. Produces editable, visually coherent designs. |
| [PreciseCoder: Faithful and Generalizable Debugging Beyond Unit-Test Rewards](http://arxiv.org/abs/2610.18755v1) | Yunkai Zhan et al. | Shows unit-test-only rewards teach superficial fixes; proposes a more faithful debugging framework using structural analysis and failure tracing. Improves code correctness and maintainability. |
| [SolBehave: Evaluating the Behavioural Correctness of LLM-Generated Smart Contracts](http://arxiv.org/abs/2610.18745v1) | Giovanni Pio Delvecchio et al. | Introduces a behavioral benchmark for Solidity contracts, going beyond syntax checks to assess runtime safety and logical soundness. Vital for secure blockchain automation. |
| [Steertuning Policies from a Few Human Videos](http://arxiv.org/abs/2610.18711v1) | Billy Yan et al. | Demonstrates robots can learn new tasks from just 5 human videos via a two-part system combining imitation and reinforcement. A major step toward low-data robotic learning. |

---

### **Research Trend Signal**  
The 2026-10-15 arXiv batch reveals a clear trajectory toward **autonomous, self-evolving AI systems** capable of continuous improvement without human reprogramming. Central themes include *recursive self-improvement (RSI)* in robotics (e.g., SEAR, Who Improves the Robot?), *agentic reasoning at scale* (Tev, Pack Light, CarryOn), and *efficiency-focused inference* (DoubtLess, SP²ec). There is growing emphasis on **robustness to real-world variability** (LIBERO-RIG), **interpretable feedback mechanisms** (BLADE, Unlocking Token Rewards), and **domain-specific verification** (SolBehave, PreciseCoder). The rise of training-free methods—like contrastive decoding and reward attribution—suggests a shift from costly fine-tuning to lightweight, post-hoc optimization. Together, these advances signal a move from static models to dynamic, self-correcting agents that learn not just *what to do*, but *how to improve*.

---

### **Worth Deep Reading**

1. **[SEAR: Self-Evolving Agentic Robotics](http://arxiv.org/abs/2610.18792v1)**  
   This paper defines a foundational framework for true RSI in physical robotics. By formalizing agent evolution through persistent memory and skill accumulation, it sets a new benchmark for autonomy. Its dual-question structure—“Is the agent really learning?” and “Can it improve its own process?”—is essential for future work on self-improving systems.

2. **[Unlocking Token Rewards via Training-Free Reward Attribution](http://arxiv.org/abs/2610.18704v1)**  
   This method extracts per-token reward signals from existing reward models without retraining—a game-changer for debugging and interpretability. Its ability to trace failure origins at the token level enables precise, actionable feedback in agentic workflows, making it critical for safe and reliable LLM deployment.

3. **[Tev: Scaling Long-Horizon Agentic Environments with Dense Progress Rewards](http://arxiv.org/abs/2610.18868v1)**  
   Addresses one of the most persistent challenges in agentic AI: sustaining performance over extended time horizons. By introducing dense, granular progress rewards, this work unlocks the potential for agents to operate autonomously for days—key for applications in discovery, logistics, and scientific research.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*