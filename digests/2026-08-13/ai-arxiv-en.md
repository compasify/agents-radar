# ArXiv AI Research Digest 2026-08-13

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-13 01:00 UTC

---

# ArXiv AI Research Digest — 2026-08-13

## Today's Highlights

Today's papers emphasize a shift from static model evaluation toward formal assurance, multilingual safety, and self-improving agents. Key work exposes cross-lingual safety gaps in low-resource languages and attributes emergent misalignment to pretrained persona features, pointing toward more mechanistic alignment. Another major thread is verification and uncertainty: probabilistic-claim consistency checking, attention-path fragility, and set-level instability in sparse autoencoders. On the agent side, skill compression, test-time adaptation, and action-level cross-lingual policy retention are emerging as core capabilities. Application-specific benchmarks and models—surgical robotics, financial reasoning, egocentric video QA—are also becoming increasingly verifiable and data-efficient.

## Key Papers

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [The Illusion of Cross-Lingual Safety in Low-Resource Languages](http://arxiv.org/abs/2608.11146v1) | Abigail Oppong, P Sam Sahil, Tadesse Destaw Belay et al. | Tests whether English-centric safety alignment transfers to low-resource languages and shows it often does not. Exposes concrete multilingual safety vulnerabilities in current LLMs. |
| [Data Attribution of Emergent Misalignment with Persona Features](http://arxiv.org/abs/2608.11025v1) | Clemens Vetter, David Kaczér, Lucie Flek et al. | Traces fine-tuning-induced emergent misalignment to persona features learned during pretraining. Strengthens the mechanistic account of how narrow-task fine-tuning can trigger harmful behavior. |
| [Attention-Path Fragility as an Uncertainty Signal in Large Language Models](http://arxiv.org/abs/2608.11138v1) | Minsoo Kim, Sungyoung Ji, Kisung Moon et al. | Introduces ASMI, a training-free uncertainty metric based on whether confident predictions collapse under attention-path perturbation. Complements output-distribution uncertainty and helps detect overconfidence. |
| [ReRound: Reconstructive Rounding to Resolve Midpoint Ambiguity in Calibration-Free LLM Quantization](http://arxiv.org/abs/2608.11045v1) | He-Yen Hsieh, H. T. Kung | Addresses midpoint ambiguity in round-to-nearest weight quantization by training a conditional diffusion model to reconstruct weights. Improves calibration-free post-training quantization for LLMs. |

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Long-Horizon AI Research for Grothendieck Constant: A Case Study in Human-AI Mathematical Collaboration](http://arxiv.org/abs/2608.11195v1) | Alan Li, Rahul Saha, Anton Xue et al. | Detailed case study of AI-assisted work improving bounds on the Grothendieck constant. Provides practical insights into how human-AI collaboration can work in long-horizon research. |
| [SkillZip: Evaluation-Free Skill Compression for Self-Evolving Agents by Discovering Reusable Structure](http://arxiv.org/abs/2608.11079v1) | Xiaofan Bai, Hongqiang Lin, Chao Liu et al. | Compresses accumulated agent skills by discovering reusable structure without needing evaluation. Prevents skill memory from growing without bound in self-evolving agents. |
| [Actions Speak Louder than Words: Measuring Cross-Lingual Policy Retention in Tool-Using Agents](http://arxiv.org/abs/2608.11110v1) | Sourabrata Mukherjee, Kalika Bali, Sunayana Sitaram | Measures whether tool-using agents take the same actions across languages, not just whether final answers match. Shows action-level cross-lingual policy retention is a distinct and important evaluation axis. |
| [Test-Time Self-Evolving GUI Visual Grounding via Reflection-Guided On-Policy Self-Distillation](http://arxiv.org/abs/2608.11191v1) | Shiyu Xuan, Zechao Li | Adapts GUI visual grounding at test time using reflection-guided on-policy self-distillation. Improves adaptation to unseen interfaces without parameter updates. |

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [How to Verify Consistency of Probabilistic Claims](http://arxiv.org/abs/2608.11181v1) | Orr Paradise, Oliver Richardson, Yoshua Bengio et al. | Studies whether a set of conditional-probability answers can be checked for self-consistency in polynomial time. Lays a formal foundation for honesty and reliability guarantees in probabilistic predictors. |
| [Conditional Independence Tests for Constraint-Based Causal Discovery: A Survey](http://arxiv.org/abs/2608.11156v1) | Pavel Averin, Theodoros Moysiadis, Ioannis Katakis | Reviews the statistical assumptions and practical behavior of CI tests in algorithms like PC and FCI. Offers guidance for choosing tests under scalability and distributional constraints. |
| [Hierarchical Empirical-Bayes Naive Bayes: Minimax Smoothing and Calibration with AODE Extension](http://arxiv.org/abs/2608.11162v1) | Nguyen Thai Anh, Truong Viet Vu, Tran Thien Thanh et al. | Replaces fixed smoothing in Naive Bayes with hierarchical empirical-Bayes smoothing that adapts to sample size and feature cardinality. Improves calibration and classification across imbalanced categorical data. |

### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Surgical WAM: A World-Action Model for Data-Efficient Surgical Robot Learning](http://arxiv.org/abs/2608.11204v1) | Wenrui Bao, Tianyun Jiang, Zhiben Chen et al. | Introduces a world-action model for surgical robotics that improves data efficiency and long-horizon manipulation. Addresses the scarcity of action-labeled surgical demonstrations. |
| [V-FiLLM: Verified Financial LLM Reasoning Benchmark](http://arxiv.org/abs/2608.11047v1) | Alicia Larsen, Victoire Laurent, Aulia Kharis Rakhamsari et al. | Generates financial reasoning benchmarks from executable computation trees, allowing automated verification of LLM reasoning over structured data. Fills a gap in financial LLM evaluation. |
| [MultiModal Code-Switching: Interleaving Visual Objects into Language for Explicit Object-Level Alignment](http://arxiv.org/abs/2608.11167v1) | Changhao Xiang, Shangyu Xing, Zhen Wu et al. | Proposes interleaving visual objects directly into language text during multimodal pretraining. Reduces referential ambiguity compared to image-level alignment. |
| [R4DSG: Relative 4D Scene Graph Memory for Object-Centric Question Answering in Long Egocentric Video](http://arxiv.org/abs/2608.11017v1) | Ke Ma, Yamin Mao, Weiming Li et al. | Builds relative 4D scene graph memory for object-centric QA over long egocentric videos. Preserves persistent object identity and state transitions better than caption-based memories. |

## Research Trend Signal

Across today's submissions, three signals stand out. First, safety is becoming multilingual and mechanistic rather than English-only and behavioral: papers reveal cross-lingual safety failures, attribute emergent misalignment to persona features, and propose formal verification for probabilistic claims. Second, the agent ecosystem is shifting from static task completion to continuous self-improvement—skill compression, test-time adaptation, and action-level policy retention across languages. Third, there is renewed attention to formal and statistical foundations: polynomial-time consistency checking, conditional-independence testing, and mean-preserving probabilistic forecasts. Application-specific benchmarks with executable ground truth, such as V-FiLLM, and world models for embodied domains, such as surgical robotics, indicate a move toward verifiable and controllable AI systems. Finally, low-resource and multilingual settings are no longer an afterthought: medical ASR, cross-lingual safety, and multilingual text-to-image consistency are being evaluated explicitly.

## Worth Deep Reading

1. **Long-Horizon AI Research for Grothendieck Constant: A Case Study in Human-AI Mathematical Collaboration** — A rare, detailed account of AI used in real mathematical research, with lessons for designing effective human-AI research loops.

2. **How to Verify Consistency of Probabilistic Claims** — Bridges computational complexity and AI safety by asking whether probabilistic predictors can be checked for self-consistency; highly relevant for trustworthy AI.

3. **Actions Speak Louder than Words: Measuring Cross-Lingual Policy Retention in Tool-Using Agents** — Challenges answer-only multilingual evaluation and introduces action-level retention, a crucial dimension for reliable multilingual agents.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*