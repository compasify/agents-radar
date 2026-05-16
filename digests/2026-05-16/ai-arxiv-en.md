# ArXiv AI Research Digest 2026-05-16

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-05-16 00:20 UTC

---

# ArXiv AI Research Digest — May 16, 2026

---

## 1. Today's Highlights

Today's submissions reveal a strong convergence on **test-time compute scaling** as the central frontier for LLM improvement, with multiple papers attacking the selection bottleneck in parallel reasoning (OpenDeepThink, Dual-Dimensional Consistency) and new frameworks for asynchronous tool execution (Concurrency without Model Changes). **Agentic systems** are maturing toward industrial deployment with distributed architectures (APWA) and rigorous evaluation frameworks for memory and search (MemEye, Is Grep All You Need?). Notably, **safety and trustworthiness** receive heightened attention through quantization-aware unlearning (Forgetting That Sticks), behavioral assurance critique, and systematic attack taxonomy coverage—reflecting governance pressures from 2019-2026 frameworks. Multimodal capabilities advance through unified embodied intelligence (Pelican-Unified 1.0) and speaker-specialized audio-LLMs (SpeakerLLM), while video generation tackles entity consistency across long-range sequences (EntityBench).

---

## 2. Key Papers

### 🧠 Large Language Models

**[OpenDeepThink: Parallel Reasoning via Bradley--Terry Aggregation](http://arxiv.org/abs/2605.15177v1)**
- Zhou et al.
- Scales test-time compute *breadth*-wise via parallel candidate sampling with Bradley-Terry aggregation, solving the selection bottleneck that limits parallel reasoning approaches.

**[Forgetting That Sticks: Quantization-Permanent Unlearning via Circuit Attribution](http://arxiv.org/abs/2605.15138v1)**
- Sadhu, Seth, Sankarapu
- Demonstrates that standard unlearning fails under 4-bit quantization and proposes circuit attribution methods for *permanent* forgetting—critical for deployed models.

**[MeMo: Memory as a Model](http://arxiv.org/abs/2605.15156v1)**
- Quek, Lee, Leong et al.
- Treats memory updates as small specialized models rather than parameter edits, enabling efficient knowledge incorporation without full retraining.

**[MetaBackdoor: Exploiting Positional Encoding as a Backdoor Attack Surface in LLMs](http://arxiv.org/abs/2605.15172v1)**
- Wen, Russinovich, Paverd et al.
- Reveals positional encoding as a novel, content-independent backdoor vector—bypassing input-sanitization defenses.

**[Widening the Gap: Exploiting LLM Quantization via Outlier Injection](http://arxiv.org/abs/2605.15152v1)**
- Zhan, Egashira, Staab et al.
- Shows how adversaries can craft models that appear benign in full precision but fail maliciously when quantized—exposing deployment-time security risks.

---

### 🤖 Agents & Reasoning

**[APWA: A Distributed Architecture for Parallelizable Agentic Workflows](http://arxiv.org/abs/2605.15132v1)**
- Rose, Mallick, Laws et al.
- Addresses coordination and compute scaling bottlenecks in multi-agent systems through distributed, parallelizable workflow design.

**[Is Grep All You Need? How Agent Harnesses Reshape Agentic Search](http://arxiv.org/abs/2605.15184v1)**
- Sen, Kasturi, Lumer et al.
- Questions whether complex RAG architectures are necessary, showing simple search harnesses can match or exceed sophisticated retrieval for many agentic tasks.

**[Self-Distilled Agentic Reinforcement Learning](http://arxiv.org/abs/2605.15155v1)**
- Lu, Yao, Han et al.
- Combines trajectory-level RL with token-level self-distillation for dense supervision in long-horizon agent tasks.

**[Concurrency without Model Changes: Future-based Asynchronous Function Calling for LLMs](http://arxiv.org/abs/2605.15077v1)**
- Feng, Mao, Dutta et al.
- Introduces future-based async function calling that eliminates blocking latency in tool use without requiring model retraining or architecture changes.

---

### 🔧 Methods & Frameworks

**[Dual-Dimensional Consistency: Balancing Budget and Quality in Adaptive Inference-Time Scaling](http://arxiv.org/abs/2605.15100v1)**
- Xu, Li, Zhao et al.
- Jointly optimizes sampling width and verification depth for efficient test-time compute, improving the cost-quality Pareto frontier.

**[RoSHAP: A Distributional Framework and Robust Metric for Stable Feature Attribution](http://arxiv.org/abs/2605.15154v1)**
- Xiang, Shi, Ye et al.
- Tackles instability in SHAP-based explanations through distributional treatment, enabling reliable model interpretation across random seeds and splits.

**[Talk is (Not) Cheap: A Taxonomy and Benchmark Coverage Audit for LLM Attacks](http://arxiv.org/abs/2605.15118v1)**
- Iyer, Jamshidi, Bray et al.
- Constructs a comprehensive 507-leaf taxonomy with STRIDE-grounded matrix for systematic evaluation of whether attack benchmarks cover the full threat surface.

**[Logging Policy Design for Off-Policy Evaluation](http://arxiv.org/abs/2605.15108v1)**
- Douglas, Persson, Provost
- Formalizes logging policy optimization for OPE, enabling safer high-stakes experimentation without live deployment.

---

### 📊 Applications

**[Pelican-Unified 1.0: A Unified Embodied Intelligence Model for Understanding, Reasoning, Imagination and Action](http://arxiv.org/abs/2605.15153v1)**
- Zhang, Chen, Liu et al.
- First embodied foundation model trained on unification principle: single VLM serves understanding, reasoning, imagination, and action in shared semantic space.

**[EntityBench: Towards Entity-Consistent Long-Range Multi-Shot Video Generation](http://arxiv.org/abs/2605.15199v1)**
- He, Wei, Yang et al.
- Introduces benchmark and metrics for character/object/location consistency across multi-shot video sequences—addressing core narrative generation challenge.

**[SpeakerLLM: A Speaker-Specialized Audio-LLM for Speaker Understanding and Verification Reasoning](http://arxiv.org/abs/2605.15044v1)**
- Nam, Heo, Bae et al.
- First audio-LLM with dedicated speaker identity reasoning for user authorization and personalization in screenless/physical AI contexts.

**[Evidential Reasoning Advances Interpretable Real-World Disease Screening](http://arxiv.org/abs/2605.15171v1)**
- Lian, Zhou, Qin
- Integrates evidential deep learning with case-based reasoning for transparent, trustworthy medical screening with uncertainty quantification.

---

## 3. Research Trend Signal

Three emergent directions dominate today's landscape. **First, "inference-time engineering" is becoming a first-class discipline**: papers on parallel reasoning, adaptive budget allocation, and asynchronous execution treat test-time compute as a programmable substrate rather than a fixed model property. This mirrors the 2021-2023 shift from pretraining to fine-tuning, now extending to deployment-time optimization. **Second, quantization-aware safety** marks a maturation in ML security—researchers no longer treat quantization as a benign compression step but as an attack vector and a failure mode for unlearning, with implications for regulatory compliance. **Third, agent evaluation is catching up to agent capabilities**: MemEye's visual memory auditing, FutureSim's grounded simulation, and the attack taxonomy all reflect recognition that benchmarking must encompass the full operational envelope of deployed systems, not just idealized task performance. The gap between "works in demo" and "works in production" is narrowing as a research focus.

---

## 4. Worth Deep Reading

**[Forgetting That Sticks: Quantization-Permanent Unlearning via Circuit Attribution](http://arxiv.org/abs/2605.15138v1)**
This paper exposes a critical deployment gap in machine unlearning: all practical evaluations occur in full precision, yet every deployed model is quantized. The demonstration that 4-bit PTQ reverses unlearning—and the circuit-level solution—has immediate regulatory implications as jurisdictions mandate deletion rights. Essential for anyone working on model governance, privacy, or safety.

**[OpenDeepThink: Parallel Reasoning via Bradley--Terry Aggregation](http://arxiv.org/abs/2605.15177v1)**
A clean, theoretically-grounded solution to the fundamental selection problem in parallel test-time compute. While depth-wise scaling (chain-of-thought) has dominated, breadth-wise scaling has been bottlenecked by candidate selection; this Bradley-Terry aggregation approach is simple, scalable, and likely to be widely adopted. High impact potential for reasoning systems.

**[Pelican-Unified 1.0: A Unified Embodied Intelligence Model for Understanding, Reasoning, Imagination and Action](http://arxiv.org/abs/2605.15153v1)**
Represents a paradigm shift in embodied AI architecture: rather than stitching together specialist models, it uses a single VLM backbone for all cognitive functions. The unification principle—if validated at scale—could simplify robot learning pipelines and enable positive transfer between perception, reasoning, and control. Critical reading for robotics and multimodal researchers.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*