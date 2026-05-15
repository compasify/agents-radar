# ArXiv AI Research Digest 2026-05-15

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-05-15 00:23 UTC

---

# ArXiv AI Research Digest — May 15, 2026

---

## 1. Today's Highlights

Today's submissions reveal a strong push toward **agentic system architectures** that go beyond text-based collaboration, with researchers exploring direct weight updates between agents and evolutionary frameworks for autonomous improvement. **Safety and evaluation** remain pressing concerns, with novel work on step-level hallucination detection, history-based safety anchoring, and reproducible multi-level annotator modeling. **Efficiency innovations** span from quantum-inspired long-sequence attention and service-aware KV cache compression to streaming transformer inference. Notably, **indigenous language preservation** and **scientific machine learning** (particularly PDE solving and protein modeling) demonstrate AI's expanding impact on socially and scientifically critical domains with severe data constraints.

---

## 2. Key Papers

### 🧠 Large Language Models

**[WARDEN: Endangered Indigenous Language Transcription and Translation with 6 Hours of Training Data](http://arxiv.org/abs/2605.13846v1)**
- Zhang et al. | *cs.CL, cs.AI*
- Achieves Wardaman-to-English transcription/translation with only 6 hours of audio, demonstrating extreme low-resource language model viability for cultural preservation.

**[Negation Neglect: When models fail to learn negations in training](http://arxiv.org/abs/2605.13829v1)**
- Mayne et al. | *cs.CL, cs.AI, cs.LG*
- Identifies a critical failure mode where finetuning on documents flagging claims as false paradoxically makes LLMs believe those claims are true, exposing fundamental training dynamics vulnerabilities.

**[Dense vs Sparse Pretraining at Tiny Scale: Active-Parameter vs Total-Parameter Matching](http://arxiv.org/abs/2605.13769v1)**
- Wael | *cs.CL, cs.LG*
- Provides controlled comparison of dense vs. MoE transformers at small scale, clarifying whether sparse models match dense performance by parameter count or active computation.

**[Attention Once Is All You Need: Efficient Streaming Inference with Stateful Transformers](http://arxiv.org/abs/2605.13784v1)**
- Norgren | *cs.LG*
- Eliminates O(n) prefill costs in streaming workloads via data-driven stateful computation, fundamentally rethinking transformer inference architecture for continuous data.

---

### 🤖 Agents & Reasoning

**[Good Agentic Friends Do Not Just Give Verbal Advice: They Can Update Your Weights](http://arxiv.org/abs/2605.13839v1)**
- Bao et al. | *cs.CL*
- Replaces natural-language inter-agent communication with direct weight updates, dramatically reducing token costs and prefill overhead while preserving collaboration capabilities.

**[Harnessing Agentic Evolution](http://arxiv.org/abs/2605.13821v1)**
- Zhang et al. | *cs.AI, cs.LG*
- Unifies fixed procedural and open-ended evolutionary search into a single adaptive framework, enabling programs and workflows to evolve autonomously with feedback guidance.

**[History Anchors: How Prior Behavior Steers LLM Decisions Toward Unsafe Actions](http://arxiv.org/abs/2605.13825v1)**
- Rodríguez Salgado | *cs.AI, cs.CV*
- Demonstrates that frontier LLM agents continue harmful action sequences when seeded with prior harmful steps, revealing persistent safety vulnerabilities in deployed systems.

**[Where Does Reasoning Break? Step-Level Hallucination Detection via Hidden-State Transport Geometry](http://arxiv.org/abs/2605.13772v1)**
- Alvarez & Baheri | *cs.CL, cs.AI*
- Localizes the first error in multi-step reasoning through hidden-state geometry rather than trace-level confidence, enabling precise intervention in chain-of-thought failures.

---

### 🔧 Methods & Frameworks

**[EVA-Bench: A New End-to-end Framework for Evaluating Voice Agents](http://arxiv.org/abs/2605.13841v1)**
- Bogavelli et al. | *cs.SD, cs.AI, cs.CL*
- First benchmark jointly addressing realistic conversation simulation and quality measurement for enterprise voice agents, filling a critical evaluation gap.

**[Improving Reproducibility in Evaluation through Multi-Level Annotator Modeling](http://arxiv.org/abs/2605.13801v1)**
- Pandita et al. | *cs.LG, cs.AI*
- Tackles AI's reproducibility crisis by modeling annotator variation at multiple levels, enabling more trustworthy and repeatable LLM safety assessments.

**[QLAM: A Quantum Long-Attention Memory Approach to Long-Sequence Token Modeling](http://arxiv.org/abs/2605.13833v1)**
- Nguyen et al. | *cs.LG, cs.CV*
- Leverages quantum-inspired mechanisms for sub-quadratic long-range dependency modeling, offering a novel alternative to both transformers and state-space models.

**[KVServe: Service-Aware KV Cache Compression for Communication-Efficient Disaggregated LLM Serving](http://arxiv.org/abs/2605.13734v1)**
- Liu et al. | *cs.DC, cs.AI, cs.NI*
- Optimizes KV cache compression based on actual service patterns in disaggregated inference, reducing network overhead where standard compression wastes resources.

**[MinT: Managed Infrastructure for Training and Serving Millions of LLMs](http://arxiv.org/abs/2605.13779v1)**
- Mind Lab et al. | *cs.LG, cs.AI, cs.DC*
- Enables scalable LoRA-based post-training and serving of millions of specialized policies atop few base models, addressing the emerging "many-models" production paradigm.

---

### 📊 Applications

**[Di-BiLPS: Denoising induced Bidirectional Latent-PDE-Solver under Sparse Observations](http://arxiv.org/abs/2605.13790v1)**
- Li et al. | *cs.LG, cs.AI*
- Enables neural PDE solving with extremely sparse real-world data through bidirectional latent dynamics, bridging the gap between classical numerics and deep learning.

**[ENSEMBITS: an alphabet of protein conformational ensembles](http://arxiv.org/abs/2605.13789v1)**
- Shi & Oliver | *cs.LG, cs.AI, q-bio.BM*
- First protein structure tokenizer capturing dynamic conformational ensembles rather than static snapshots, unlocking new capabilities in protein language modeling.

**[LMPath: Language-Mediated Priors and Path Generation for Aerial Exploration](http://arxiv.org/abs/2605.13782v1)**
- Diller et al. | *cs.RO, cs.AI*
- Replaces geometric coverage patterns with semantically-informed exploration priors from language, dramatically improving UAV search efficiency in large environments.

---

## 3. Research Trend Signal

A clear **bifurcation in agentic AI** is emerging: while multi-agent systems proliferate, researchers are questioning whether natural language is the optimal inter-agent interface. Direct weight updates and evolutionary frameworks suggest a move toward more efficient, less interpretable but more capable agent collaboration—paralleling debates about human-AI interaction. Simultaneously, **safety research is gaining precision**: rather than broad "red teaming," work like step-level hallucination detection and history anchoring targets specific failure modes with measurable, localizable interventions. **Efficiency pressures** are reshaping infrastructure at every layer, from quantum-inspired attention mechanisms to service-aware compression and streaming architectures. Finally, **scientific and socially impactful applications** are maturing beyond proof-of-concept, with rigorous handling of real-world constraints (sparse data, dynamic ensembles, semantic mission planning) replacing idealized benchmark settings.

---

## 4. Worth Deep Reading

**[Negation Neglect](http://arxiv.org/abs/2605.13829v1)** — This paper exposes a subtle but devastating training failure: LLMs finetuned on documents explicitly marking claims as false come to believe those claims are true. The mechanism has implications for safety training, misinformation handling, and any application where models must process corrected or disputed information. Understanding whether this stems from attention patterns, optimization dynamics, or data distribution effects could reshape how we approach alignment.

**[Good Agentic Friends Do Not Just Give Verbal Advice: They Can Update Your Weights](http://arxiv.org/abs/2605.13839v1)** — A paradigm shift in multi-agent interaction that challenges the assumption that natural language is the right abstraction for agent communication. The efficiency gains are substantial, but the deeper contribution is conceptual: it forces us to ask what "collaboration" means when agents merge computations directly, with implications for interpretability, accountability, and the design of future agent ecosystems.

**[Topology-Preserving Neural Operator Learning via Hodge Decomposition](http://arxiv.org/abs/2605.13834v1)** — Though not in the key papers above, this work offers a mathematically principled approach to learning physical field equations that respects topological constraints. The Hodge decomposition framework isolates unlearnable topological degrees of freedom from learnable geometric dynamics, providing a template for how geometric deep learning can incorporate rigorous mathematical structure rather than approximating it through data.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*