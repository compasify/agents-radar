# ArXiv AI Research Digest 2026-09-18

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-18 00:45 UTC

---

**ArXiv AI Research Digest — 2026-09-18**

---

### **Today's Highlights**  
Recent submissions highlight a growing focus on *agent-centric intelligence*, where LLMs are no longer isolated models but embedded in complex, multi-step workflows requiring robust reasoning, tool use, and real-time coordination. Key breakthroughs include novel approaches to *preference alignment without likelihood*, *zero-shot force-aware robotic manipulation via audio-video generation*, and *dynamic routing mechanisms for evolving agent ensembles*. There is also increasing concern over systemic risks—such as reward hacking, model collapse, and privacy exposure across agentic sessions—driving new work in interpretability, verification, and safety frameworks. Notably, the fusion of physical simulation (e.g., contact forces) with generative AI marks a significant step toward embodied cognition in robotics.

---

### **Key Papers**

#### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [A Zeroth-Order Paradigm for LLM Preference Alignment](http://arxiv.org/abs/2609.19144v1) | Chen et al. | Proposes a likelihood-free method for aligning LLMs with human preferences using zeroth-order optimization, enabling efficient preference learning without relying on marginal likelihoods. This could reduce computational overhead while improving alignment robustness. |
| [Monitoring and Discovering Reward Hacking with Internal Representations during LLM Evaluations](http://arxiv.org/abs/2609.19101v1) | Bergen et al. | Identifies internal signatures of reward hacking in frontier open-source LLMs through representation analysis, offering a path to detect and mitigate deceptive behaviors early. This advances trustworthiness in high-stakes deployment. |
| [Preventing Model Collapse: A Fisher-Rao Perspective on the Dynamics of Training with Synthetic Data](http://arxiv.org/abs/2609.18878v1) | Marchi et al. | Introduces a Fisher-Rao geometric framework to analyze and prevent model collapse during synthetic data training, revealing how feedback loops degrade distributional fidelity. Critical for sustainable scaling of LLMs. |
| [Infinite-Parameter LLMs: Generating and Adapting Weights from Live Data](http://arxiv.org/abs/2609.18842v1) | Hu et al. | Proposes a dynamic parameter generation mechanism that treats LLM weights as live data streams, enabling infinite-capacity models without fixed storage. Challenges traditional notions of model size and opens new paths for adaptive inference. |

#### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Cognitive Extensions for Dual-Process Language Agents: Memory and Self-Reflection in Interactive Environments](http://arxiv.org/abs/2609.19128v1) | Santos & Oliveira | Enhances dual-process agents with modular memory and self-reflection modules, enabling long-horizon task recovery and state tracking in interactive settings. Improves reliability in real-world deployments. |
| [Compositional Policy Violations: When Step-Level Compliance Fails In Agentic AI Workflows](http://arxiv.org/abs/2609.18820v1) | Kurady et al. | Demonstrates that per-step compliance checks can miss systemic policy violations in agentic workflows, advocating for compositional evaluation beyond individual actions. Urgent for regulatory and enterprise applications. |
| [Ask the Tool, Don't Guess: Agent Tool Calls Hold Their Progress, and the Serving System Should Read It](http://arxiv.org/abs/2609.18849v1) | Liu et al. | Argues that serving systems should monitor tool call progress directly instead of guessing durations, reducing cache waste and latency in agentic pipelines. A pragmatic efficiency win for production systems. |
| [Taming the Agentic RAN: Stability-Guaranteed Arbitration of Autonomous AI Agents in O-RAN](http://arxiv.org/abs/2609.18857v1) | Natanzi & Tang | Reveals safety risks in independent AI agents managing shared radio resources in O-RAN and proposes a stability-guaranteed arbitration layer. A foundational step for trustworthy network autonomy. |

#### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Objective vs. Search: Decomposing What Makes a Good Tokeniser](http://arxiv.org/abs/2609.19145v1) | Yavuz et al. | Dissects BPE and UnigramLM into orthogonal axes—objective (compression vs. likelihood) and search (merging vs. pruning)—offering design principles for next-gen tokenizers. Foundational for efficient text processing. |
| [rMuscle: Robotic Muscle Memory for Efficient Vision-Language-Action Model Inference](http://arxiv.org/abs/2609.19104v1) | Zhou et al. | Introduces "muscle memory" caching for VLA models in robotics, drastically reducing redundant inference during repetitive tasks. Enables real-time performance in factory automation. |
| [ASLEval: Measuring Privacy Exposure Displacement in LLM Agent Sessions](http://arxiv.org/abs/2609.18864v1) | Wu et al. | Presents ASLEval, a benchmark that detects privacy leaks across full agentic sessions—not just final outputs—highlighting gaps in current evaluation practices. Essential for secure agent design. |
| [ReFigBench: Benchmarking Scientific Figure Reconstruction as Editable PowerPoint Artifacts](http://arxiv.org/abs/2609.18844v1) | Fan et al. | Proposes ReFigBench to evaluate multimodal coding agents by their ability to reconstruct figures as editable, reusable artifacts—moving beyond visual similarity. A major leap in practical evaluation. |

#### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Dreaming the Sound of Contact: Leveraging Video and Audio Generation for Zero-Shot Force-Aware Manipulation](http://arxiv.org/abs/2609.19137v1) | Ji et al. | Integrates video and audio generation to simulate contact forces in robotic manipulation, enabling zero-shot learning of force-sensitive tasks. A key advance in embodied AI realism. |
| [ScienceIDE: Turning World's Scientific Codebase into Agent Learnable Environments](http://arxiv.org/abs/2609.19134v1) | Geng et al. | Converts scientific code repositories into structured, executable environments for agents, overcoming barriers like implicit conventions and domain-specific correctness. Expands AI’s reach into scientific discovery. |
| [EviGen: Predictive Evidence Scaffolding for Verifiable Clinical Rationale Generation](http://arxiv.org/abs/2609.18852v1) | Li et al. | Uses predictive scaffolding to guide LLMs in generating clinically verifiable rationales from EHRs, reducing hallucination and enhancing trust in medical decision support. |
| [PersonaPath: Towards Knowledge-Centric Personalized Learning Path Planning](http://arxiv.org/abs/2609.18861v1) | Liu et al. | Shifts personalized learning from exercise-centric to knowledge-centric planning, incorporating learner goals and curriculum structure. Offers a scalable framework for adaptive education. |

---

### **Research Trend Signal**  
A clear trend toward *systemic agent intelligence* is emerging, where the focus has shifted from isolated model capabilities to end-to-end workflow integrity. Papers reveal deepening concerns about *coherence across time and context*: from memory management in NPCs ([#23]) to privacy leakage in multi-step sessions ([#33]), and from policy violation detection ([#45]) to stable arbitration in multi-agent networks ([#37]). Concurrently, there is a surge in *practical, deployable frameworks*—from tool-call monitoring ([#40]) to executable scientific environments ([#6])—indicating maturity in real-world AI integration. The convergence of generative modeling with physical simulation (e.g., audio-driven contact force prediction) and formal verification (e.g., physics-informed kernels [#34], Lyapunov operators [#31]) signals a move toward *safe, interpretable, and physically grounded AI*. These developments suggest that the frontier is no longer just “more parameters” but *better orchestration*.

---

### **Worth Deep Reading**

1. **[Cognitive Extensions for Dual-Process Language Agents: Memory and Self-Reflection in Interactive Environments](http://arxiv.org/abs/2609.19128v1)**  
   This paper offers one of the most compelling architectures for building resilient agents capable of long-horizon reasoning. By integrating modular memory and self-reflection into a dual-process framework, it addresses core brittleness issues in current agents—making it essential reading for anyone designing autonomous systems.

2. **[Dreaming the Sound of Contact: Leveraging Video and Audio Generation for Zero-Shot Force-Aware Manipulation](http://arxiv.org/abs/2609.19137v1)**  
   A groundbreaking fusion of sensory modalities for robotics. By simulating sound to infer contact forces, this work enables robots to learn physically realistic manipulation without explicit sensor data—a paradigm shift for embodied AI in unstructured environments.

3. **[ASLEval: Measuring Privacy Exposure Displacement in LLM Agent Sessions](http://arxiv.org/abs/2609.18864v1)**  
   As agentic systems become mainstream, privacy risks are no longer confined to outputs. This paper introduces a rigorous, session-level benchmark that exposes hidden leakage—critical for developers aiming to build trustworthy, compliant AI tools.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*