# ArXiv AI Research Digest 2026-06-11

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-06-11 00:36 UTC

---

Here is the structured ArXiv AI Research Digest for 2026-06-11.

---

## ArXiv AI Research Digest | 2026-06-11

### 1. Today's Highlights

Today's submissions reveal a significant shift toward **test-time adaptation and steering** for LLMs, moving beyond static fine-tuning to dynamic, context-aware control. A major cluster of papers addresses the tension between **reasoning enhancements (e.g., CoT) and alignment/recall degradation**, suggesting that improved performance on benchmarks can introduce hidden vulnerabilities. There is also a strong push toward **evaluating and controlling agentic systems** in realistic, long-horizon, and high-stakes domains, from biosecurity to professional workflows. Methodologically, the community is increasingly focused on **efficient inference**—with innovations in KV-cache allocation, reward backpropagation for flow models, and communication-efficient pretraining—revealing a maturing field prioritizing deployment practicality.

### 2. Key Papers

#### 🧠 Large Language Models

- **When to Align, When to Predict: A Phase Diagram for Multimodal Learning** ([Link](http://arxiv.org/abs/2606.11190v1))
  *Kamai, Van Assel, Regev et al.*
  Provides a theoretical "phase diagram" to determine whether cross-modal alignment or prediction is optimal for a given multimodal task, a critical framework for practitioners.
- **A Unifying Lens on Supervised Fine-Tuning Through Target Distribution Design** ([Link](http://arxiv.org/abs/2606.11189v1))
  *Xie, Ban, Hong et al.*
  Argues that maximizing likelihood on one-hot targets in SFT is suboptimal, proposing a framework to design better target distributions that account for noise and model priors.
- **The Shibboleth Effect: Auditing the Cross-Lingual Distributional Skew of Large Language Models** ([Link](http://arxiv.org/abs/2606.11082v1))
  *Mehmetcik*
  Introduces a multi-agent geopolitical wargame to reveal systematic cross-lingual biases ("Shibboleth Effect") in frontier LLMs, highlighting a critical failure mode for global deployment.
- **Attention Amnesia in Hybrid LLMs: When CoT Fine-Tuning Breaks Long-Range Recall, and How to Fix It** ([Link](http://arxiv.org/abs/2606.11052v1))
  *Zhou, Zhu, Xu et al.*
  Identifies a critical trade-off: CoT fine-tuning degrades long-context recall in hybrid linear-attention models, and proposes a fix to preserve retrieval performance.
- **Does Reasoning Preserve Alignment? On the Trustworthiness of Large Reasoning Models** ([Link](http://arxiv.org/abs/2606.11046v1))
  *Kini, Reddy, Chakraborty et al.*
  Demonstrates that converting instruction-tuned LLMs to reasoning models via post-training can erode alignment (e.g., safe refusal), raising serious safety concerns.
- **What Fits (Into Few Tokens) Doesn't Overfit: Compression and Generalization in ML Research Agents** ([Link](http://arxiv.org/abs/2606.11045v1))
  *Bertran, Roth, Wu*
  Tests the hypothesis that successful ML strategies are highly compressible, using LLM agents to study why adaptive reuse of benchmarks rarely leads to overfitting.

#### 🤖 Agents & Reasoning

- **EEVEE: Towards Test-time Prompt Learning in the Real World for Self-Improving Agents** ([Link](http://arxiv.org/abs/2606.11182v1))
  *Xu, Liu, Wang*
  Proposes the first multi-dataset test-time prompt learning framework for LLM agents, enabling self-improvement across heterogeneous real-world task streams.
- **Predicting Future Behaviors in Reasoning Models Enables Better Steering** ([Link](http://arxiv.org/abs/2606.11172v1))
  *Kortukov, Komorowski, Klein et al.*
  Improves test-time steering of large reasoning models by predicting future behaviors from internal features, avoiding the quality degradation seen in prior methods.
- **A History-Aware Visually Grounded Critic for Computer Use Agents** ([Link](http://arxiv.org/abs/2606.11078v1))
  *Lee, Khan, Prasad et al.*
  Develops a test-time critic for GUI agents that incorporates visual grounding and action history, overcoming limitations of current critics that operate in isolation.
- **Workflow-GYM: Towards Long-Horizon Evaluation of Computer-use Agentic tasks in Real-World Professional Fields** ([Link](http://arxiv.org/abs/2606.11042v1))
  *Zhu, Ding, Zhang et al.*
  Introduces a benchmark for evaluating AI agents on long-horizon, high-value professional workflows (e.g., software engineering, finance) via GUI interaction.
- **T1-Bench: Benchmarking Multi-Scenario Agents in Real-World Domains** ([Link](http://arxiv.org/abs/2606.11070v1))
  *Winata, Chakraborty, Lin et al.*
  A new benchmark designed to evaluate LLM agents across diverse, realistic, and complex multi-domain task scenarios, addressing the limitations of existing static benchmarks.

#### 🔧 Methods & Frameworks

- **ReasonAlloc: Hierarchical Decoding-Time KV Cache Budget Allocation for Reasoning Models** ([Link](http://arxiv.org/abs/2606.11164v1))
  *Liu, Shi, Li et al.*
  Introduces a hierarchical method for allocating KV cache budgets during decoding, significantly reducing inference bottlenecks for long chain-of-thought reasoning.
- **Exploring the Design Space of Reward Backpropagation for Flow Matching** ([Link](http://arxiv.org/abs/2606.11075v1))
  *Wang, Niu, Zhou et al.*
  Provides a systematic exploration of direct reward backpropagation for text-to-image flow matching, addressing the key pathologies of memory and Jacobian costs.
- **Piper: A Programmable Distributed Training System** ([Link](http://arxiv.org/abs/2606.11169v1))
  *Frisella, Tiwari, Ruan et al.*
  A programmable system that automates the design and composition of complex parallelism strategies (data, pipeline, expert) for large-scale model training.
- **Generalized Conformal Predictive Systems Under Distributional Shifts** ([Link](http://arxiv.org/abs/2606.11044v1))
  *Jonkers, Ziegel*
  Extends conformal predictive systems to non-exchangeable settings (e.g., distribution shift) by encoding shifts via permutation weights, producing valid uncertainty estimates.

#### 📊 Applications

- **CIAware-Bench: Benchmarking Control Intervention Awareness Across Frontier LLMs** ([Link](http://arxiv.org/abs/2606.11063v1))
  *Schaeffer, Jiralerspong, Panfilov et al.*
  Creates a benchmark to test if an untrusted model can detect that its actions are being monitored and modified by an AI control protocol, a critical alignment safety measure.
- **The Role of Feedback Alignment in Self-Distillation** ([Link](http://arxiv.org/abs/2606.11173v1))
  *Kara, Ersoy*
  Provides a mechanistic explanation for how self-distillation works by using alignment between the model's own predictions and its conditioned outputs.
- **RoboNaldo: Accurate, Stable and Powerful Humanoid Soccer Shooting via Motion-Guided Curriculum RL** ([Link](http://arxiv.org/abs/2606.11092v1))
  *Zhong, Lu, Lu et al.*
  Achieves elite-level humanoid robot shooting by combining motion tracking with RL and a curriculum strategy, a step forward for high-impulse whole-body control.

### 3. Research Trend Signal

A clear trend visible today is the **systematic auditing of unintended consequences from standard post-training practices.** Multiple papers show that applying techniques like CoT fine-tuning or reasoning-focused post-training can degrade other critical capabilities—long-range recall (Attention Amnesia), alignment/safety (Does Reasoning Preserve Alignment?), and cross-lingual fairness (The Shibboleth Effect). This suggests the field is moving from a "maximize one metric" approach to a more holistic, multi-objective view of model capability. Concurrently, the focus on **test-time adaptation** (EEVEE, Predicting Future Behaviors, ReasonAlloc) indicates a growing consensus that the most robust and efficient way to handle task diversity is not to embed all knowledge during training, but to enable models to intelligently adapt their behavior and resource allocation dynamically at inference time.

### 4. Worth Deep Reading

1.  **Attention Amnesia in Hybrid LLMs: When CoT Fine-Tuning Breaks Long-Range Recall...** ([Link](http://arxiv.org/abs/2606.11052v1))
    *Reasoning:* This paper presents a concrete, reproducible failure mode of a widely used technique (CoT SFT) on a popular architecture (hybrid linear-attention models). The finding is surprising and has immediate practical implications for anyone deploying these models for long-context tasks.

2.  **Does Reasoning Preserve Alignment? On the Trustworthiness of Large Reasoning Models** ([Link](http://arxiv.org/abs/2606.11046v1))
    *Reasoning:* This paper addresses a critical safety concern. As the industry pushes towards "reasoning models" (o1, Gemini 2.0 thinking, etc.), the assumption that alignment behavior is preserved is dangerous. This work provides the first systematic evidence to the contrary.

3.  **A Unifying Lens on Supervised Fine-Tuning Through Target Distribution Design** ([Link](http://arxiv.org/abs/2606.11189v1))
    *Reasoning:* This paper tackles a foundational issue in SFT. The idea that the standard cross-entropy loss on one-hot targets is suboptimal is both theoretically motivated and highly practical. The proposed framework could lead to significant improvements across all SFT use cases.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*