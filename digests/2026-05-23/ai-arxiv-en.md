# ArXiv AI Research Digest 2026-05-23

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-05-23 00:24 UTC

---

# ArXiv AI Research Digest — May 23, 2026

---

## 1. Today's Highlights

Today's submissions reveal a strong convergence on **post-training dynamics and inference-time scaling** as central research frontiers. Multiple papers challenge fundamental assumptions: tokenization is reframed as a global optimization problem rather than greedy local decisions, while post-training (SFT, RL, distillation) is reconceptualized through state distributions rather than token-level losses. Safety and alignment concerns deepen with work on political bias mitigation, conflict-context deployment failures, and latent communication security in multi-agent systems. Notably, **self-evolving agent architectures** and **stateful sandbox infrastructure** signal a maturation beyond static LLM deployment toward continuous, autonomous improvement loops.

---

## 2. Key Papers

### 🧠 Large Language Models

**[Tokenisation via Convex Relaxations](http://arxiv.org/abs/2605.22821v1)** — Tempus, Whittington, Schmidt et al.  
Reformulates BPE/Unigram tokenization as a linear program with global optimality guarantees, escaping the local optima that plague greedy subword algorithms.

**[Post-Training is About States, Not Tokens](http://arxiv.org/abs/2605.22731v1)** — Dong Nie  
Recasts SFT, RL, and distillation through state distribution matching rather than token-level losses, offering a unified theoretical lens for alignment optimization.

**[Reducing Political Manipulation with Consistency Training](http://arxiv.org/abs/2605.22771v1)** — Phan, Kim, Pan et al.  
Identifies "covert political bias" in LLMs' asymmetric handling of opposing viewpoints and proposes consistency training as a mitigation, addressing a critical trust gap in deployed systems.

**[Gated DeltaNet-2: Decoupling Erase and Write in Linear Attention](http://arxiv.org/abs/2605.22791v1)** — Hatamizadeh, Choi, Kautz  
Advances linear attention architectures with explicit memory editing mechanisms, enabling more precise control over recurrent state updates for long-context efficiency.

**[AMEL: Accumulated Message Effects on LLM Judgments](http://arxiv.org/abs/2605.22714v1)** — Sid-ali Temkit  
Demonstrates that conversation history polarity systematically biases LLM-as-judge evaluations, exposing a critical reliability issue for automated assessment pipelines.

---

### 🤖 Agents & Reasoning

**[MOSS: Self-Evolution through Source-Level Rewriting in Autonomous Agent Systems](http://arxiv.org/abs/2605.22794v1)** — Cai, Zhang, Jia et al.  
Enables agents to rewrite their own source code (not just text artifacts) based on runtime failures, closing the loop toward genuine autonomous improvement.

**[DeltaBox: Scaling Stateful AI Agents with Millisecond-Level Sandbox Checkpoint/Rollback](http://arxiv.org/abs/2605.22781v1)** — Dong, He, Hou et al.  
Provides infrastructure for high-frequency state exploration in LLM agents via 10ms sandbox C/R, enabling tree search and RL at deployment scale.

**[LCGuard: Latent Communication Guard for Safe KV Sharing in Multi-Agent Systems](http://arxiv.org/abs/2605.22786v1)** — Asif, Mohammadi Amiri, Abbas et al.  
Secures transformer KV-cache communication between agents against manipulation, addressing a nascent attack surface in latent multi-agent coordination.

**[Vector Policy Optimization: Training for Diversity Improves Test-Time Search](http://arxiv.org/abs/2605.22817v1)** — Bahlous-Boldi, Puri, Shenfeld et al.  
Trains LLMs to produce diverse rollout distributions that generalize across reward functions, directly supporting inference-time search procedures like AlphaEvolve.

---

### 🔧 Methods & Frameworks

**[Tokenization with Split Trees](http://arxiv.org/abs/2605.22705v1)** — Schmidt, Krumdick, Wiemerslage et al.  
Introduces ToaST, which optimizes compression via recursive binary split trees independent of vocabulary size, offering a principled alternative to BPE's greedy merges.

**[Proxy-Based Approximation of Shapley and Banzhaf Interactions](http://arxiv.org/abs/2605.22738v1)** — Thies, Baniecki, Witter et al.  
ProxySHAP enables tractable higher-order feature interaction estimation, bridging the speed-accuracy tradeoff that has limited explainability for complex models.

**[The Matching Principle: A Geometric Theory of Loss Functions for Nuisance-Robust Representation Learning](http://arxiv.org/abs/2605.22800v1)** — Vishal Rajput  
Unifies robustness, domain adaptation, temporal stability, and alignment safety under a single geometric framework, revealing deep structural connections across problem domains.

**[Clipping Bottleneck: Stabilizing RLVR via Stochastic Recovery of Near-Boundary Signals](http://arxiv.org/abs/2605.22703v1)** — Yang, Lu, Ma et al.  
Diagnoses and resolves training instability in GRPO-style reasoning training through stochastic recovery of clipped gradients, improving convergence for verifiable reward optimization.

---

### 📊 Applications

**[Advancing Mathematics Research with AI-Driven Formal Proof Search](http://arxiv.org/abs/2605.22763v1)** — Tsoukalas, Kovsharov, Shirobokov et al.  
First large-scale evaluation of LLM-generated Lean proofs for open research problems, establishing practical bounds on AI-assisted mathematical discovery.

**[ChronoMedKG: A Temporally-Grounded Biomedical Knowledge Graph](http://arxiv.org/abs/2605.22734v1)** — Ahmed, Firoozbakht, Poech et al.  
Introduces temporal disease-symptom relationships to clinical KGs, enabling age-aware diagnostic reasoning absent from static knowledge bases.

**[Superhuman Safe and Agile Racing through Multi-Agent Reinforcement Learning](http://arxiv.org/abs/2605.22748v1)** — Geles, Bauersfeld, Wulfmeier et al.  
Achieves robust autonomous racing by explicitly modeling other agents as strategic players rather than noise, demonstrating multi-agent RL for physical safety-critical systems.

**[Forecasting Scientific Progress with Artificial Intelligence](http://arxiv.org/abs/2605.22681v1)** — Wu, Lu, Chen et al.  
Constructs a temporally-grounded benchmark for predicting scientific breakthroughs, testing whether AI can anticipate research directions under controlled knowledge constraints.

---

## 3. Research Trend Signal

A distinct **infrastructure maturation** is visible: research is shifting from model capabilities to the systems that sustain and govern them. The co-occurrence of DeltaBox (sandbox C/R), MOSS (self-modifying agents), and LCGuard (secure latent communication) suggests the field is building toward **persistent, stateful agent ecosystems** rather than ephemeral inference calls. Simultaneously, **temporal reasoning** emerges as a cross-cutting concern—appearing in knowledge graphs (ChronoMedKG), pre-training dynamics (data temporality), diffusion models, and scientific forecasting. This reflects growing recognition that static, atemporal AI systems are ill-suited to real-world deployment. The parallel advances in tokenization theory (convex relaxations, split trees) indicate foundational reconsideration of seemingly "solved" preprocessing stages, potentially unlocking efficiency gains that compound across the training stack. Most striking is the **safety-utility tension** made explicit: papers on political manipulation, conflict-context alignment failures, and distillation attacks all frame robustness as a strategic game rather than a technical patch.

---

## 4. Worth Deep Reading

**[MOSS: Self-Evolution through Source-Level Rewriting](http://arxiv.org/abs/2605.22794v1)** — This represents a qualitative leap beyond current self-improving agents. By enabling source-level modification rather than confining evolution to text-mutable skill files, MOSS approaches the recursive self-improvement threshold that has been theoretical. The technical architecture and safety implications merit careful study for anyone in agentic AI.

**[Post-Training is About States, Not Tokens](http://arxiv.org/abs/2605.22731v1)** — Offers a unifying framework that could reshape how we design alignment procedures. If state distributions rather than token likelihoods are the proper target, this implies revised objectives for RLHF, DPO, and distillation with potential for more stable optimization. The theoretical clarity may resolve persistent empirical instabilities.

**[The Matching Principle](http://arxiv.org/abs/2605.22800v1)** — Unifying eight distinct robustness problems under one geometric theory is rare and potentially transformative. For practitioners, this may yield general-purpose regularizers; for theorists, it suggests deep structural constraints on learnable representations that could guide architecture design.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*