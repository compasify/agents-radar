# ArXiv AI Research Digest 2026-09-25

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-25 00:45 UTC

---

---

### **Today's Highlights**

Recent submissions to ArXiv (2026-09-25) highlight a growing convergence between AI safety, agent autonomy, and efficient model deployment. Key advances include novel frameworks for safe multi-agent coordination—such as *PASTABench* for proactive trajectory assessment—and robust world modeling techniques that preserve motion dynamics in latent spaces (*Frozen Flows Forget: Diagnosing and Restoring Lost Motion*). Significant progress is also seen in efficient inference, with papers like *MicroQonv* and *RAMP* introducing optimized quantization and tensor reshaping methods tailored for edge vision systems. Meanwhile, foundational work on reasoning and representation—e.g., *Order-Invariant Answers*, *Memory Attention*, and *Computation Over Geometry*—challenges long-held assumptions about how meaning and memory are encoded in neural models.

---

### **Key Papers**

#### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Can LLMs Reason About Runtime Behavior? A Repository-Level Dynamic Benchmark](http://arxiv.org/abs/2609.28449v1) | Taherkhani et al. | Introduces a dynamic benchmark evaluating LLMs’ ability to reason about code execution across real-world repositories, revealing gaps in current static QA benchmarks. This shifts focus toward runtime-aware evaluation in software engineering contexts. |
| [ForgetMimic: Motion Unlearning for Reinforcement Learning Humanoid Control](http://arxiv.org/abs/2609.28378v1) | Luan et al. | Proposes a method to selectively erase specific motions from learned RL policies without retraining entire models, enabling safer, more controllable humanoid behavior. Crucial for ethical deployment of embodied agents. |
| [Learning Holographic Reduced Representations with Clifford Variational Autoencoders](http://arxiv.org/abs/2609.28409v1) | Abid & Furlong | Presents a new framework for embedding unstructured data into hyperdimensional vector spaces using Clifford algebra, enabling richer symbolic reasoning within LLMs. Offers a path toward formal, interpretable knowledge representation. |

#### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Where Should I Join? Robot Group Joining via Language-Guided Goal Prediction](http://arxiv.org/abs/2609.28467v1) | Fang et al. | Develops a language-guided model for robots to infer optimal group joining points based on real-time activity, advancing socially aware navigation beyond fixed goals. |
| [Controlling Collectives of AI Agents in Reasoning Space with Spatial Transformers](http://arxiv.org/abs/2609.28247v1) | Vatnsdal et al. | Introduces COMPASS, a scalable, decentralized architecture for managing large groups of agentic robots using spatial transformers in reasoning space—overcoming scalability bottlenecks in multi-agent planning. |
| [Agent-Editing World Model: Rethinking World Modeling for LLM Agents](http://arxiv.org/abs/2609.28416v1) | Sun et al. | Proposes an editable world model where LLM agents can dynamically revise their internal representations during task execution, enhancing adaptability in complex, evolving environments. |
| [PASTABench: Proactive Assessment of Sequential Trajectories for Agent Safety](http://arxiv.org/abs/2609.28197v1) | Sun et al. | Introduces a proactive safety benchmark that evaluates agent trajectories step-by-step, detecting hazardous behaviors before they occur—critical for deploying autonomous agents in real-world settings. |

#### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [MicroQonv: Reshaping Convolution Tensors for Efficient Microscaling](http://arxiv.org/abs/2609.28358v1) | Facq et al. | Proposes a tensor reshaping technique that enables efficient microscaling in convolutions, improving performance of low-bit quantized models on edge devices without sacrificing accuracy. |
| [RAMP: Robust Adaptive Mixed-Precision Quantization for Edge CPU Vision Models](http://arxiv.org/abs/2609.28262v1) | Población-Criado et al. | Develops RAMP, a mixed-precision quantization method that adapts layer-wise precision based on sensitivity, significantly reducing latency on CPU-based edge vision systems while maintaining robustness. |
| [Predicting Quantization Price for Selecting PTQ Configurations Before Deployment](http://arxiv.org/abs/2609.28270v1) | Qiu et al. | Introduces a pre-deployment predictor for post-training quantization (PTQ), enabling selection of optimal configurations by forecasting accuracy loss—reducing trial-and-error in model deployment. |
| [Support-Compiled Feature Folding: More Evidence at Lower Memory Across Tabular Foundation Models](http://arxiv.org/abs/2609.28208v1) | Zhou et al. | Presents SCFF, a training-free inference method that folds high-dimensional tabular features efficiently, balancing memory usage and evidence retention in foundation models. |

#### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Cross-Scale Transfer Learning for Depression Severity Prediction](http://arxiv.org/abs/2609.28430v1) | Feng et al. | Enables cross-lingual, cross-scale depression severity prediction using sequential LoRA adaptation, bridging PHQ-8 and HAMD-17 scales across clinical paradigms—promising for global mental health AI. |
| [Mizar: A 159M-Parameter Audio-Language Model for Audio Understanding](http://arxiv.org/abs/2609.28344v1) | Li et al. | Introduces Mizar, a compact audio-language model trained for device-level audio understanding, achieving strong performance on small hardware with minimal computational footprint. |
| [AnchorReasoning: A Visual Grounding and Causal Reasoning Dataset in Long-Tail Autonomous Driving Scenarios](http://arxiv.org/abs/2609.28366v1) | Bao et al. | Builds AnchorReasoning, a dataset linking visual evidence to causal decisions in rare driving scenarios, addressing critical gaps in long-tail generalization for autonomous vehicles. |
| [Shopping by algorithm: How agentic AI deploys human heuristics as a surrogate consumer](http://arxiv.org/abs/2609.28372v1) | Wadi & Ma | Demonstrates how LLMs emulate human decision-making strategies (e.g., just-below pricing) when acting as surrogate shoppers, revealing behavioral mimicry in commercial AI agents. |

---

### **Research Trend Signal**

A dominant trend emerging from today’s submissions is the shift from isolated model capabilities toward **holistic, system-level intelligence**—where models are not just accurate or efficient, but safe, explainable, and adaptive in real-world contexts. This is evident in the proliferation of **agent-centric frameworks** (*PASTABench*, *COMPASS*, *Agent-Editing World Model*) that emphasize multi-step reasoning, proactive safety, and dynamic world revision. Simultaneously, there’s a growing focus on **efficient and deployable AI**, particularly through novel quantization (*MicroQonv*, *RAMP*, *SCFF*), which addresses the practical constraints of edge computing and real-time inference. Another key signal is the **challenge to representational dogma**: papers like *Computation Over Geometry* and *Order-Invariant Answers* argue that meaning and structure are not static geometric properties but dynamically computed, urging a rethinking of how embeddings encode semantics. Together, these trends point toward a future where AI systems are not only smarter but more trustworthy, controllable, and contextually aware.

---

### **Worth Deep Reading**

1. **[PASTABench: Proactive Assessment of Sequential Trajectories for Agent Safety](http://arxiv.org/abs/2609.28197v1)**  
   *Why*: As LLM agents evolve into real-world actuators, safety cannot be reactive. This paper introduces a forward-looking, step-by-step evaluation protocol that detects hazardous behavior early—setting a new standard for agent evaluation beyond single-turn benchmarks.

2. **[Frozen Flows Forget: Diagnosing and Restoring Lost Motion in a Latent-flow World Model](http://arxiv.org/abs/2609.28414v1)**  
   *Why*: The insight that frozen flows lose motion dynamics—a core requirement for robotic control—is profound. This paper diagnoses the failure and offers a principled restoration method, directly impacting the viability of latent world models in physical robotics.

3. **[Computation Over Geometry: Meaning Identity Is Computed, Not Shipped in the Embeddings](http://arxiv.org/abs/2609.28290v1)**  
   *Why*: Challenges the foundational assumption that semantic similarity is purely geometric. By showing identity depends on computation across sentences, this work calls for a fundamental rethink of retrieval, RAG, and similarity metrics in NLP.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*