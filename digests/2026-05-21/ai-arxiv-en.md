# ArXiv AI Research Digest 2026-05-21

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-05-21 00:26 UTC

---

# ArXiv AI Research Digest — May 21, 2026

---

## 1. Today's Highlights

Today's submissions reveal three major thrusts in AI research: **scaling laws extending to time series foundation models** with Toto 2.0 demonstrating predictable improvements up to 2.5B parameters; **decoupled perception-reasoning architectures** for vision-language models showing that visual perception—not reasoning—is the bottleneck for many tasks; and **efficient inference systems** for emerging model classes, including I/O-aware expert offloading for diffusion LLMs and hybrid speculative decoding trees. Notably, several papers address the stochastic-deterministic boundary in production systems, suggesting the field is maturing toward deployable, architecturally rigorous AI agents.

---

## 2. Key Papers

### 🧠 Large Language Models

**[TIDE: Efficient and Lossless MoE Diffusion LLM Inference with I/O-aware Expert Offload](http://arxiv.org/abs/2605.20179v1)**
- Z. Chen, Y. Zhao, Y. Sui et al.
- Enables practical deployment of massive MoE diffusion LLMs by optimizing the critical I/O bottleneck in expert offloading, addressing a key infrastructure gap as dLLMs scale beyond autoregressive alternatives.

**[KoRe: Compact Knowledge Representations for Large Language Models](http://arxiv.org/abs/2605.20170v1)**
- D. Cavicchini, F. Giunchiglia, J. Staiano
- Proposes externalizing world knowledge from LLM parameters into compact, manipulable representations, tackling the fundamental inefficiency of entangled knowledge-storage in current architectures.

**[Not Every Rubric Teaches Equally: Policy-Aware Rubric Rewards for RLVR](http://arxiv.org/abs/2605.20164v1)**
- U. Tyagi, X. Guo, M. Rezaei et al.
- Introduces policy-aware reward shaping for reinforcement learning with verifiable rewards, improving sample efficiency when multiple qualitative criteria must be simultaneously satisfied.

**[MixRea: Benchmarking Explicit-Implicit Reasoning in Large Language Models](http://arxiv.org/abs/2605.20128v1)**
- Y. Cai, Z. Huang, M. Liu et al.
- Establishes a benchmark revealing LLMs' "inattentional blindness" to implicit reasoning demands, exposing a critical failure mode for high-stakes decision-making applications.

---

### 🤖 Agents & Reasoning

**[From Seeing to Thinking: Decoupling Perception and Reasoning Improves Post-Training of Vision-Language Models](http://arxiv.org/abs/2605.20177v1)**
- J. Wu, H. Chen, H. Tu et al.
- Demonstrates that VLMs' visual task performance is primarily perception-limited rather than reasoning-limited, motivating architecturally separated perception-reasoning pipelines.

**[ClinSeekAgent: Automating Multimodal Evidence Seeking for Agentic Clinical Reasoning](http://arxiv.org/abs/2605.20176v1)**
- J. Wu, L. Zhang, Y. Wang et al.
- Builds an agent system that actively seeks and synthesizes clinical evidence rather than passively consuming curated inputs, addressing the realistic deployment gap in medical AI.

**[CopT: Contrastive On-Policy Thinking with Continuous Spaces for General and Agentic Reasoning](http://arxiv.org/abs/2605.20075v1)**
- D. Shi, H. Zhu, X. Yuan et al.
- Replaces prerequisite chain-of-thought with on-demand reasoning in continuous spaces, reducing token costs while maintaining or improving answer quality.

**[Rewarding Beliefs, Not Actions: Consistency-Guided Credit Assignment for Long-Horizon Agents](http://arxiv.org/abs/2605.20061v1)**
- W. Tang, M. Li, S. Huang et al.
- Solves credit assignment in partially observable environments by rewarding belief consistency rather than raw actions, enabling more robust long-horizon RLVR training.

---

### 🔧 Methods & Frameworks

**[Toto 2.0: Time Series Forecasting Enters the Scaling Era](http://arxiv.org/abs/2605.20119v1)**
- E. Khwaja, C. Lettieri, G. Woo et al.
- Provides the first demonstration of predictable scaling laws in time series foundation models, releasing open-weights models from 4M to 2.5B parameters with consistent quality improvements.

**[Draft Less, Retrieve More: Hybrid Tree Construction for Speculative Decoding](http://arxiv.org/abs/2605.20104v1)**
- Y. Shen, T. Liu, X. Hu et al.
- Rebalances speculative decoding between draft generation and retrieval augmentation, achieving speedups without the VRAM bandwidth bottlenecks of expansive draft trees.

**[A Methodology for Selecting and Composing Runtime Architecture Patterns for Production LLM Agents](http://arxiv.org/abs/2605.20173v1)**
- V. Srinivasan
- Formalizes the stochastic-deterministic boundary (SDB) as a first-class architectural object, providing pattern-based guidance for production agent system design.

**[Beyond Isotropy in JEPAs: Hamiltonian Geometry and Symplectic Prediction](http://arxiv.org/abs/2605.20107v1)**
- R. Jenkinson Alvarez
- Replaces isotropic Gaussian assumptions in JEPA embeddings with Hamiltonian-structured geometry, enabling geometry-aware representations for structured downstream tasks.

---

### 📊 Applications

**[VL-DPO: Vision-Language-Guided Finetuning for Preference-Aligned Autonomous Driving](http://arxiv.org/abs/2605.20082v1)**
- Z. Xu, G. Jerfel, M. Haliem et al.
- Applies direct preference optimization to autonomous driving using vision-language feedback, capturing nuanced human driving preferences beyond imitation learning.

**[HaorFloodAlert: Deseasonalized ML Ensemble for 72-Hour Flood Prediction in Bangladesh Haor Wetlands](http://arxiv.org/abs/2605.20167v1)**
- S. Koli, F. Jely, M. Alim et al.
- Develops a domain-specific flood prediction system for flat wetland basins where conventional riverine models fail, demonstrating AI adaptation to geophysically distinct environments.

**[Rethinking Visual Attribution for Chest X-ray Reasoning in Large Vision Language Models](http://arxiv.org/abs/2605.20158v1)**
- G. Xiong, Q. Jin, S. Sinha et al.
- Exposes systematic failures in LVLM visual attribution for medical imaging, questioning whether current explanation methods provide genuine clinical trustworthiness.

---

## 3. Research Trend Signal

Today's submissions signal a **maturation phase in AI system architecture** with growing emphasis on *structured boundaries* between stochastic and deterministic components. The appearance of formal methodologies for production agent architectures (SDB framework), decoupled perception-reasoning pipelines, and explicit knowledge externalization (KoRe) suggests the field is moving beyond monolithic models toward compositional, maintainable systems. Concurrently, **inference efficiency** remains intensely active across model paradigms—diffusion LLMs, speculative decoding, and time series scaling all feature optimization contributions. A subtler but important trend is **geometric and physical structure in representation learning**: Hamiltonian JEPAs, symplectic prediction, and heavy-tailed flow matching indicate renewed interest in inductive biases that respect underlying data geometry rather than assuming universal Gaussian structure. Finally, **evaluation skepticism** is deepening, with papers questioning whether visual attribution truly explains model behavior and whether rubric-based rewards actually teach desired policies.

---

## 4. Worth Deep Reading

**[From Seeing to Thinking: Decoupling Perception and Reasoning Improves Post-Training of Vision-Language Models](http://arxiv.org/abs/2605.20177v1)**
This paper challenges the prevailing assumption that VLMs need more reasoning capacity for visual tasks. Its systematic dissection of perception vs. reasoning limitations, with architectural implications for post-training improvements, could redirect significant research investment. The finding that perception—not reasoning—is the bottleneck has immediate practical consequences for model design and data curation.

**[A Methodology for Selecting and Composing Runtime Architecture Patterns for Production LLM Agents](http://arxiv.org/abs/2605.20173v1)**
As agent systems transition from research demos to production infrastructure, this paper's formalization of the stochastic-deterministic boundary fills a critical gap. The four-part contract (proposer, verifier, executor, fallback) and pattern composition methodology provide actionable engineering guidance that could become standard practice. Its solo authorship suggests concentrated, deeply considered perspective.

**[Toto 2.0: Time Series Forecasting Enters the Scaling Era](http://arxiv.org/abs/2605.20119v1)**
Time series has lagged other domains in demonstrating reliable scaling laws. This paper's rigorous scaling analysis—showing consistent improvements from 4M to 2.5B parameters—and open-weights release could catalyze foundation model adoption in forecasting, with implications for energy, finance, and climate applications. The training recipe transparency is unusually high for this domain.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*