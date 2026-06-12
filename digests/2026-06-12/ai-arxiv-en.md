# ArXiv AI Research Digest 2026-06-12

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-06-12 00:32 UTC

---

# ArXiv AI Research Digest — 2026-06-12

## Today's Highlights

This batch reveals a pronounced shift toward **inference-time compute** and **test-time adaptation** across modalities, from embodied planning to multi-turn dialogue. Several papers challenge the assumption that more compute yields proportional gains, instead asking *where* and *when* to allocate resources. A strong **interpretability-for-training** thread emerges, using mechanistic understanding not just for debugging but to actively shape learning signals. Robotics sees continued convergence with **foundation model approaches**, particularly around force sensing without dedicated sensors and decentralized multi-embodiment coordination. Notably, **scalable governance** of AI systems enters the conversation with architectural proposals for runtime monitoring of production agents.

---

## Key Papers

### 🧠 Large Language Models

**Which Models Are Our Models Built On? Auditing Invisible Dependencies in Modern LLMs**
[http://arxiv.org/abs/2606.12385v1](http://arxiv.org/abs/2606.12385v1)
Sanjay Adhikesaven, Haoxiang Sun, Sewon Min
- First systematic audit of recursive model dependencies in LLM training pipelines, revealing undocumented reliance on upstream models and enabling transparency in AI supply chains.

**Anatomy of Post-Training: Using Interpretability to Characterize Data and Shape the Learning Signal**
[http://arxiv.org/abs/2606.12360v1](http://arxiv.org/abs/2606.12360v1)
Leon Bergen, Usha Bhalla, Sidharth Baskaran et al.
- Applies mechanistic interpretability to post-training to reveal what data actually teaches models, identifying spurious correlations in reward signals and offering tools to debug training data.

**The Impossibility of Eliciting Latent Knowledge**
[http://arxiv.org/abs/2606.12268v1](http://arxiv.org/abs/2606.12268v1)
Korbinian Friedl, Francis Rhys Ward, Paul Yushin Rapoport et al.
- Formal impossibility result showing that no algorithm can reliably extract an AI system's latent beliefs without additional assumptions, with direct implications for AI honesty and safety guarantees.

**Measuring Epistemic Resilience of LLMs Under Misleading Medical Context**
[http://arxiv.org/abs/2606.12291v1](http://arxiv.org/abs/2606.12291v1)
Hongjian Zhou, Xinyu Zou, Jinge Wu et al.
- Demonstrates that high medical exam scores do not imply safe clinical judgment — LLMs are brittle under injected misleading context, challenging the assumption that benchmark performance translates to real-world reliability.

### 🤖 Agents & Reasoning

**DIRECT: When and Where Should You Allocate Test-Time Compute in Embodied Planners?**
[http://arxiv.org/abs/2606.12402v1](http://arxiv.org/abs/2606.12402v1)
Jadelynn Dao, Milan Ganai, Yasmina Abukhadra et al.
- Shows that indiscriminate scaling of test-time compute in VLM-based embodied planners yields diminishing returns, proposing a selective allocation framework that reduces latency and token use while preserving performance.

**APPO: Agentic Procedural Policy Optimization**
[http://arxiv.org/abs/2606.12384v1](http://arxiv.org/abs/2606.12384v1)
Xucong Wang, Ziyu Ma, Yong Wang et al.
- Introduces fine-grained credit assignment over atomic procedural steps in multi-turn tool-use RL, substantially improving sample efficiency for LLM agents beyond heuristic turn-based rewards.

**Verifiable Environments Are LEGO Bricks: Recursive Composition for Reasoning Generalization**
[http://arxiv.org/abs/2606.12373v1](http://arxiv.org/abs/2606.12373v1)
Hao Xiang, Qiaoyu Tang, Le Yu et al.
- Proposes recursive composition of verifiable environments for RL-based reasoning, enabling systematic generalization from small, composable environments to complex unseen tasks.

**CHORUS: Decentralized Multi-Embodiment Collaboration with One VLA Policy**
[http://arxiv.org/abs/2606.12352v1](http://arxiv.org/abs/2606.12352v1)
Ria Doshi, Tian Gao, Annie Chen et al.
- A single VLA policy decentralized across heterogeneous robots achieves embodied collaboration without centralized state, using emergent coordination from shared vision-language grounding.

### 🔧 Methods & Frameworks

**Redesign Mixture-of-Experts Routers with Manifold Power Iteration**
[http://arxiv.org/abs/2606.12397v1](http://arxiv.org/abs/2606.12397v1)
Songhao Wu, Ang Lv, Ruobing Xie et al.
- Replaces standard MoE router similarity computation with manifold power iteration, achieving more faithful expert representation and improved routing without architectural changes.

**On Subquadratic Architectures: From Applications to Principles**
[http://arxiv.org/abs/2606.12364v1](http://arxiv.org/abs/2606.12364v1)
Anamaria-Roberta Hartl, Levente Zólyomi, David Stap et al.
- Systematic comparison of xLSTM, Mamba, and Hyena across modalities, providing principled guidelines for choosing subquadratic architectures based on task characteristics.

**ALIGNBEAM: Inference-Time Alignment Transfer via Cross-Vocabulary Logit Mixing**
[http://arxiv.org/abs/2606.12342v1](http://arxiv.org/abs/2606.12342v1)
Chirag Chawla, Pratinav Seth, Vinay Kumar Sankarapu
- Enables safety alignment transfer between models with different vocabularies at inference time, solving a critical limitation of logit-mixing approaches for domain-fine-tuned LLMs.

**A Five-Plane Reference Architecture for Runtime Governance of Production AI Agents**
[http://arxiv.org/abs/2606.12320v1](http://arxiv.org/abs/2606.12320v1)
Krti Tallam
- Proposes a five-plane architectural framework (identity, data, action, process, resilience) for runtime governance of autonomous AI agents, addressing the dissolution of traditional data-boundary security models in production deployments.

### 📊 Applications

**FACTR 2: Learning External Force Sensing for Commodity Robot Arms Improves Policy Learning**
[http://arxiv.org/abs/2606.12406v1](http://arxiv.org/abs/2606.12406v1)
Steven Oh, Jason Jingzhou Liu, Tony Tao et al.
- Data-driven method for estimating external joint torques without dedicated force sensors, enabling force-sensitive manipulation on commodity robot arms with broad implications for accessible robotics research.

**Atlas H&E-TME: Scalable AI-Based Tissue Profiling at Expert Pathologist-Level Accuracy**
[http://arxiv.org/abs/2606.12346v1](http://arxiv.org/abs/2606.12346v1)
Kai Standvoss, Miriam Hägele, Rosemarie Krupar et al.
- Foundation model-based system for quantitative H&E whole-slide image analysis that matches expert pathologist accuracy at scale, representing a significant step toward clinical-grade computational pathology.

**Latent World Recovery for Multimodal Learning with Missing Modalities**
[http://arxiv.org/abs/2606.12362v1](http://arxiv.org/abs/2606.12362v1)
Hui Wang, Tianyu Ren, Joseph Butler et al.
- Framework for robust multimodal learning under partial modality availability by recovering a latent world representation, with demonstrated applications in bioscience where missing data is the norm.

---

## Research Trend Signal

A notable pattern across today's papers is the **return to foundational guarantees** — not just empirical improvements, but formal results about what AI systems can and cannot do. The impossibility result for latent knowledge elicitation joins results on provable guarantees for evolutionary algorithms (SPEA2⁺) and impossibility of fully interpretable methods, signaling a maturation of the field's theoretical self-understanding. Simultaneously, **inference-time** methods have become a unifying theme: ALIGNBEAM transfers alignment without retraining, DIRECT allocates compute selectively, and Ambient Diffusion Policy handles suboptimal data at test time. This suggests the community is converging on the insight that *adaptation at deployment* may be more practical than baking all capabilities into pretraining. Finally, **security and governance** receive serious architectural attention — the five-plane reference architecture for agent governance and the audit of model dependencies both point to a growing recognition that production AI requires infrastructure-level reliability, not just model-level performance.

---

## Worth Deep Reading

1. **The Impossibility of Eliciting Latent Knowledge** — A rare formal result in AI safety that sharply constrains what we can expect from honesty-inducing techniques. The proof structure and its implications for alignment research make this essential reading for anyone working on AI reliability.

2. **Anatomy of Post-Training: Using Interpretability to Characterize Data and Shape the Learning Signal** — Bridges the gap between mechanistic interpretability and practical training decisions. The methodology for tracing what reward patterns actually teach models could fundamentally change how we design post-training data.

3. **DIRECT: When and Where Should You Allocate Test-Time Compute in Embodied Planners?** — Directly challenges the "more inference compute is always better" assumption with rigorous empirical analysis. The findings have immediate practical implications for embodied AI deployment and resource-constrained settings.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*