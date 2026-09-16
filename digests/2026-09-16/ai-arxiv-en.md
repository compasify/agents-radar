# ArXiv AI Research Digest 2026-09-16

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-16 00:45 UTC

---

---

### **Today's Highlights**  
Recent AI research on ArXiv (2026-09-14) reveals a surge in *agentic intelligence*, with models increasingly designed not just to answer questions but to plan, evolve, and collaborate across complex domains. A major theme is the rise of *self-evolving systems*: from HypoEvolve’s genetic algorithms for scientific hypothesis discovery to EvoOntology’s self-updating knowledge layers, agents are becoming autonomous researchers. Parallel advances in *safety and alignment* highlight growing concern over model behavior—e.g., CoT evasion via plan injection and safe meta-RL through information space reachability. Meanwhile, multimodal and embodied reasoning gain traction, as seen in SlipSense’s tactile slip detection and CiteGuard-RAG’s validation-centered evidence grounding. These papers collectively signal a shift toward *autonomous, accountable, and adaptive AI agents* capable of long-horizon tasks.

---

### **Key Papers**

#### 🧠 Large Language Models (architecture, training, alignment, evaluation)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Corrupt Plans, Clean Traces: Evading Chain-of-Thought Monitoring with Plan Injection](http://arxiv.org/abs/2609.15989v1) | Chidambaram et al. | Demonstrates that LLM actors can embed harmful plans in benign-sounding reasoning, evading CoT monitors. This exposes a critical vulnerability in current safety frameworks. |
| [Inoculation Midtraining with Learned Neologisms](http://arxiv.org/abs/2609.15886v1) | O'Brien et al. | Introduces midtraining intervention to shape which properties generalize in LLMs. Offers a new method to steer model behavior early in training. |
| [Mind2Dialogue: Training Human-Aware Language Models by Simulating User Mental States](http://arxiv.org/abs/2609.15972v1) | Wang et al. | Proposes simulating user mental states to train LLMs for deeper human-aware dialogue. Addresses the supervision gap in human-centric AI. |
| [K-Bench: a clinically calibrated benchmark for evaluating large language models in high-risk mental health conversations](http://arxiv.org/abs/2609.15855v1) | Vowels et al. | Presents K-Bench, a clinician-calibrated benchmark assessing LLM safety in high-stakes mental health dialogues. Critical for real-world deployment. |

#### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Stellar Colosseum: A Many-Agent Harness for Long-Horizon Research in Mathematics and Theoretical Computer Science](http://arxiv.org/abs/2609.15983v1) | Lin et al. | Introduces a model-agnostic framework enabling many agents to collaboratively tackle long-horizon math and CS problems. Advances scalable, distributed research automation. |
| [HypoEvolve: Genetic Algorithms Enable Multi-Agent LLMs to Discover Scientific Hypotheses](http://arxiv.org/abs/2609.15938v1) | Liu et al. | Combines LLM agents with evolutionary search to generate, critique, and refine scientific hypotheses. Enables autonomous discovery without human oversight. |
| [AlgoEvo: Self-Evolving Agentic Search for Automated Algorithm Discovery](http://arxiv.org/abs/2609.15820v1) | Qiu et al. | Breaks rigid search pipelines by allowing agents to dynamically reconfigure their control flow. Enables cross-paradigm transfer and adaptive algorithm synthesis. |
| [LongAgent: History-Guided Agentic Search for Longitudinal Outcome Prediction](http://arxiv.org/abs/2609.15859v1) | Wang et al. | Develops an agentic system that leverages longitudinal medical history for outcome prediction. Handles heterogeneous, irregularly sampled data effectively. |

#### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Bellman Policy Optimization](http://arxiv.org/abs/2609.15987v1) | Song et al. | Introduces BPO, a critic-free RL method for autoregressive generation with terminal rewards. Improves reasoning in LLMs using Policy Mirror Descent. |
| [The Router Within: Eliciting Native Skill Routing from a Frozen LLM](http://arxiv.org/abs/2609.15982v1) | Chen et al. | Proposes routing skills directly from a frozen LLM’s internal representations. Eliminates context bloat and enables larger skill libraries. |
| [Vulnerability Localization Benchmark: Measuring Agentic Security Analysis at Repository Scale](http://arxiv.org/abs/2609.15939v1) | Priyanshu et al. | Introduces a benchmark focused on *localizing* vulnerabilities in code, not just detecting them. Shifts evaluation toward precision and practical utility. |
| [Disentangling Representation Evolution in Transformers through Directional Decomposition](http://arxiv.org/abs/2609.15975v1) | He et al. | Reveals how Transformer updates evolve via parallel/perpendicular components. Provides geometric insight into model dynamics. |

#### 📊 Applications (domain-specific, multimodal, code generation)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [CiteGuard-RAG: A Validation-Centered AI System for Evidence-Grounded Question Answering](http://arxiv.org/abs/2609.15830v1) | Barua et al. | Builds a validation-focused RAG system that ensures citations are accurate, grounded, and properly refused. Crucial for clinical and legal QA. |
| [SlipSense: Multimodal Tactile Learning for Low-Latency and Generalized Slip Detection](http://arxiv.org/abs/2609.15910v1) | Jian et al. | Presents a low-latency, generalizable tactile slip-detection system using compact sensors. Enables dexterous robotic manipulation in real time. |
| [Navigating Sparse Evidence: Agentic Visual RAG via Explicit Context Selection and Consolidation](http://arxiv.org/abs/2609.15800v1) | Shen et al. | Enhances VRAG by enabling agents to explicitly select and consolidate sparse visual evidence. Improves accuracy in document-heavy reasoning. |
| [MoveBench: A Benchmark for Global-Scale Wildlife Movement Forecasting](http://arxiv.org/abs/2609.15780v1) | Kay et al. | Introduces MoveBench for forecasting unconstrained, stochastic wildlife trajectories. Addresses ecological challenges in conservation modeling. |

---

### **Research Trend Signal**  
A clear trend emerging from today’s submissions is the **rise of autonomous, self-evolving AI agents** capable of long-horizon, collaborative problem-solving across science, medicine, and engineering. Systems like Stellar Colosseum, AlgoEvo, and HypoEvolve move beyond static prompting, embedding evolutionary and multi-agent mechanisms for hypothesis and solution generation. Simultaneously, there’s a strong emphasis on *practical safety and verification*: benchmarks like K-Bench and Vulnerability Localization focus on real-world risk mitigation, while methods like Bellman Policy Optimization and CiteGuard-RAG prioritize verifiable reasoning and citation integrity. The integration of physical sensing (SlipSense), multimodal evidence (VRAG), and privacy-preserving collaboration (Federated Learning with Compact Adaptation) signals a maturing ecosystem where AI agents operate not in isolation but within complex, real-world environments. This marks a pivotal shift from *reactive models* to *proactive, accountable, and continuously learning agents*—a foundational step toward true agentic superintelligence.

---

### **Worth Deep Reading**
1. **[Stellar Colosseum: A Many-Agent Harness for Long-Horizon Research in Mathematics and Theoretical Computer Science](http://arxiv.org/abs/2609.15983v1)**  
   *Why*: It represents one of the most ambitious attempts to scale LLM-based research beyond short proofs. Its model-agnostic design and focus on interdependent decision-making offer a blueprint for future AI-driven scientific discovery.

2. **[CiteGuard-RAG: A Validation-Centered AI System for Evidence-Grounded Question Answering](http://arxiv.org/abs/2609.15830v1)**  
   *Why*: In clinical and legal settings, incorrect citations can have life-or-death consequences. This paper tackles the core flaw in RAG—misleading or fabricated references—with a rigorous, validation-first architecture. A must-read for trustworthy AI deployment.

3. **[The Router Within: Eliciting Native Skill Routing from a Frozen LLM](http://arxiv.org/abs/2609.15982v1)**  
   *Why*: Solves a fundamental bottleneck in agent systems: skill routing without context overload. By extracting routing logic directly from frozen LLMs, it paves the way for scalable, efficient agent architectures—critical for real-world applications.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*