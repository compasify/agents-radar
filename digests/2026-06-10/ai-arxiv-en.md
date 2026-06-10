# ArXiv AI Research Digest 2026-06-10

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-06-10 00:30 UTC

---

# ArXiv AI Research Digest — June 10, 2026

## 1. Today's Highlights

Today's submissions reveal a strong research emphasis on **evaluation rigor and agentic system safety**, with multiple papers tackling how to measure, constrain, and improve autonomous AI systems. Notable breakthroughs include tighter theoretical characterizations of Transformer sample complexity, a unified benchmark for vision-language game agents with improvement dynamics, and several advances in **safe robotic action models** through attention-guided safety filters and world-action modeling. The field also shows growing attention to **long-horizon reasoning collapse** in LLMs and new methods for adaptive red teaming via reinforcement learning, signaling a maturation beyond raw capability toward reliable deployment.

---

## 2. Key Papers

### 🧠 Large Language Models

**[Tight Sample Complexity of Transformers](http://arxiv.org/abs/2606.09731v1)** — Chenxiao Yang, Nathan Srebro, Zhiyuan Li et al.
Establishes nearly matching upper and lower bounds on Transformer VC dimension and sample complexity, providing foundational theoretical guidance for scaling and generalization.

**[Rethinking the Divergence Regularization in LLM RL](http://arxiv.org/abs/2606.09821v1)** — Jiarui Yao, Xiangxin Zhou, Penghui Qi et al.
Re-examines trust-region regularization under off-policy LLM RL conditions, offering insights into why PPO/GRPO stabilize training and how to improve them.

**[The Neutral Mask: How RLHF Provides Shallow Alignment while Leaving Partisan Structure Intact in a Large Language Model](http://arxiv.org/abs/2606.09735v1)** — Wendy K. Tam
Presents empirical evidence that RLHF masks but does not remove underlying partisan structure, raising important questions about the depth of value alignment.

**[IS-CoT: Breaking the Long-form Generation Collapse via Interleaved Structural Thinking](http://arxiv.org/abs/2606.09709v1)** — Zechen Sun, Yuyang Sun, Zecheng Tang et al.
Identifies and addresses a severe length-collapse problem in reasoning-enhanced LLMs during open-ended writing, proposing an interleaved structural generation approach.

**[Learning to Attack and Defend: Adaptive Red Teaming of Language Models via GRPO](http://arxiv.org/abs/2606.09701v1)** — Blake Bullwinkel, Eugenia Kim, Amanda Minnich et al.
Introduces a co-training framework where attackers and defenders adapt via GRPO, advancing dynamic safety evaluation beyond static red-teaming benchmarks.

**[PsychoSafe: Eliciting Psychologically-Informed Refusals in Large Language Models](http://arxiv.org/abs/2606.09697v1)** — Gianluca Barmina, Federico Torrielli, Sven Harms et al.
Reframes LLM refusals as psychologically consequential interventions, proposing safer, more helpful refusal strategies for high-risk user interactions.

---

### 🤖 Agents & Reasoning

**[OmniGameArena: A Unified UE5 Benchmark for VLM Game Agents with Improvement Dynamics](http://arxiv.org/abs/2606.09826v1)** — Mingxian Lin, Shengju Qian, Yuqi Liu et al.
Introduces a unified Unreal Engine 5 benchmark that evaluates vision-language agents across games with multi-attempt improvement protocols, addressing major gaps in static single-shot evaluation.

**[Multi-Turn Evaluation of Deep Research Agents Under Process-Level Feedback](http://arxiv.org/abs/2606.09748v1)** — Rishabh Sabharwal, Hongru Wang, Amos Storkey et al.
Pioneers multi-turn evaluation of deep research agents with iterative feedback, measuring whether agents can genuinely improve reports rather than produce single-shot outputs.

**[SearchSwarm: Towards Delegation Intelligence in Agentic LLMs for Long-Horizon Deep Research](http://arxiv.org/abs/2606.09730v1)** — Pu Ning, Quan Chen, Kun Tao et al.
Develops delegation intelligence for long-horizon research tasks, enabling main agents to distribute subtasks across subagents within finite context windows.

**[Collaborative Human-Agent Protocol (CHAP)](http://arxiv.org/abs/2606.09751v1)** — Arsalan Shahid, Gordon Suttie, Philip Black
Proposes a structured protocol for production human-agent collaboration, addressing accountability gaps as foundation models take on operational responsibilities.

**[iOSWorld: A Benchmark for Personally Intelligent Phone Agents](http://arxiv.org/abs/2606.09764v1)** — Lawrence Keunho Jang, Mareks Woodside, Geronimo Carom et al.
Introduces a personalization-focused benchmark where phone agents must reason over real user identity, history, and preferences rather than follow isolated sandbox instructions.

---

### 🔧 Methods & Frameworks

**[AHA-WAM: Asynchronous Horizon-Adaptive World-Action Modeling with Observation-Guided Context Routing](http://arxiv.org/abs/2606.09811v1)** — Jisong Cai, Long Ling, Shiwei Chu et al.
Decouples world prediction and action execution temporally in robot world-action models, enabling more efficient and physically grounded manipulation learning.

**[Evaluation Cards: An Interpretive Layer for AI Evaluation Reporting](http://arxiv.org/abs/2606.09809v1)** — Avijit Ghosh, Anka Reuel, Jenny Chim et al.
Proposes a standardized interpretive layer for evaluation reporting to make AI benchmark claims more transparent, comparable, and auditable across sources.

**[BrainSurgery: Reproducible and Reliable Declarative Weight Manipulations for Model Editing and Upcycling](http://arxiv.org/abs/2606.09707v1)** — Gianluca Barmina, Annemette Broch Pirchert, Andrea Blasi Núñez et al.
Provides a declarative framework for reproducible model weight surgery, addressing a critical infrastructure gap as models scale and researchers need precise checkpoint manipulation.

**[Preserving Plasticity in Continual Learning via Dynamical Isometry](http://arxiv.org/abs/2606.09762v1)** — Andries Rosseau, Robert Müller, Ann Nowé
Links continual plasticity loss to empirical Neural Tangent Kernel properties and proposes dynamical isometry as a principled solution for non-stationary deep learning.

---

### 📊 Applications

**[Your Model Already Knows: Attention-Guided Safety Filter for Vision-Language-Action Models](http://arxiv.org/abs/2606.09749v1)** — Seongbin Park, Fan Zhang, Baharan Mirzasoleiman et al.
Leverages internal VLA attention to build lightweight safety filters against collisions, avoiding expensive external perception modules while maintaining task performance.

**[SIGA: Self-Evolving Coding-Agent Adapters for Scientific Simulation](http://arxiv.org/abs/2606.09774v1)** — Matthew Ho, Brian Liu, Jixuan Chen et al.
Develops self-evolving adapters that ground coding agents in specialized scientific simulator languages, dramatically reducing domain-expert setup time.

**[SpatialWorld: Benchmarking Interactive Spatial Reasoning of Multimodal Agents in Real-World Tasks](http://arxiv.org/abs/2606.09669v1)** — Hongcheng Gao, Hailong Qu, Jingyi Tang et al.
Introduces an interactive real-world benchmark for spatial reasoning in multimodal agents, moving beyond passive VQA and simulator-specific evaluations.

**[FASE: Fast Adaptive Semantic Entropy for Code Quality](http://arxiv.org/abs/2606.09800v1)** — Shizhe Lin, Ladan Tahvildari
Accelerates semantic entropy estimation for multi-agent code generation, providing a practical hallucination detection signal for autonomous software engineering.

---

## 3. Research Trend Signal

A clear inflection point is visible in today's submissions: **AI research is pivoting from capability demonstration to reliability engineering**. Multiple papers address evaluation standardization (Evaluation Cards, OmniGameArena, iOSWorld, SpatialWorld), suggesting the community recognizes that existing benchmarks poorly capture real-world deployment conditions. Concurrently, **safety and oversight for agentic systems** is becoming a first-class research area—spanning attention-based safety filters in robots, psychologically informed refusals, human-agent protocols, and observability for delegated execution. Theoretical work is also deepening, with tight sample complexity results for Transformers and dynamical isometry analyses connecting optimization geometry to continual learning. Finally, **scientific and code-generation agents** are receiving more targeted attention, with papers on simulator-grounded adapters and fast semantic entropy for multi-agent coding. Overall, the field appears to be consolidating around trustworthy, measurable, and maintainable autonomous systems rather than pure scaling.

---

## 4. Worth Deep Reading

**[Tight Sample Complexity of Transformers](http://arxiv.org/abs/2606.09731v1)** — This is the strongest theoretical paper of the day. Nearly matching upper and lower bounds on Transformer VC dimension are rare and consequential for understanding when and why Transformers generalize. Essential reading for anyone working on scaling laws, learning theory, or model architecture design.

**[OmniGameArena: A Unified UE5 Benchmark for VLM Game Agents with Improvement Dynamics](http://arxiv.org/abs/2606.09826v1)** — Game environments are increasingly central to evaluating embodied agents, and this benchmark addresses three major methodological flaws at once: single-shot scoring, solo-only evaluation, and inconsistent protocols. The improvement-dynamics framing could reshape how the field measures progress in VLM agents.

**[Your Model Already Knows: Attention-Guided Safety Filter for Vision-Language-Action Models](http://arxiv.org/abs/2606.09749v1)** — A pragmatic and mechanistically grounded approach to robotic safety that uses what the model already represents rather than bolting on external systems. The attention-guided design makes it efficient enough for real-time control and offers a template for interpreting and constraining other multimodal action models.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*