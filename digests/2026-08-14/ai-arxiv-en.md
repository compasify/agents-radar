# ArXiv AI Research Digest 2026-08-14

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-14 00:59 UTC

---

## 1. Today's Highlights

Today's submissions reveal a strong shift toward **test-time and deployment-centric AI**, with work on capability transfer without retraining, budget-dependent evaluation, and efficient serving. Several papers challenge core scaling assumptions, most notably showing that long-context training can undermine parametric knowledge. Agent reliability and security are also prominent: untrusted skill hijacking, simulator collapse in multi-agent RL, and new enterprise-oriented reasoning benchmarks. Domain-specific applications continue to expand, especially in clinical RAG, scientific diagrams, drug screening, and organizational adoption of LLMs.

## 2. Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [AI4AI at Test-Time: Strong-to-Weak Capability Transfer via Harnesses](http://arxiv.org/abs/2608.12307v1) | Cheng Qian, Wenting Zhao, Liangwei Yang et al. | Investigates transferring capabilities from strong LLMs to weaker ones at test time via "harnesses," without updating parameters. This reframes distillation as a flexible, post-hoc process and could reduce retraining costs. |
| [Information Abundance Paradox: Long-Context Training Undermines Parametric Knowledge](http://arxiv.org/abs/2608.12218v1) | Arda Uzunoglu, Benjamin van Durme, Daniel Khashabi et al. | Shows that training on increasingly long contexts can degrade a model's internal parametric knowledge. This challenges the assumption that longer context exposure is always beneficial and has major implications for training design. |
| [Who Thinks Best Depends on How Long You Let Them: Budget-Dependent Rankings in LLM Evaluation](http://arxiv.org/abs/2608.12150v1) | Rodrigo Guedes de Souza, Alison R. Panisson | Varies maximum token generation budgets and finds that model rankings shift across budgets. This highlights a hidden methodological risk in LLM evaluation and leaderboard comparisons. |
| [Massive Activations in Hybrid Linear Attention Large Language Models: Pre-Attention Spikes and Inter-Spike Plateaus](http://arxiv.org/abs/2608.12149v1) | Zunhai Su, Bohan Sun, Xialie Zhuang et al. | First systematic study of massive activations in hybrid linear-attention LLMs, identifying pre-attention spikes and inter-spike plateaus. Provides architectural insights relevant to interpretability, quantization, and safety. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [DreamFly: Causal Memory and Receding-Horizon Diffusion Planning for Aerial Vision-Language Navigation](http://arxiv.org/abs/2608.12308v1) | Yan Deng, Fei Xu | Introduces causal memory and receding-horizon diffusion planning for aerial VLN under partial observability. Extends VLA models to long-horizon embodied navigation with explicit goal detection. |
| [VAKRA: Evaluating Multi-Hop Reasoning Across APIs and Retrieval Under Tool-Use Policies](http://arxiv.org/abs/2608.12282v1) | Ankita Rajaram Naik, Anupama Murthi, Benjamin Elder et al. | A benchmark for enterprise agents that must reason across structured APIs and document collections. Addresses the gap between isolated API reasoning and tool-use policy compliance. |
| [Convergent Detour Hijacking: Task-Preserving Resource Amplification in Skill-Based LLM Agents](http://arxiv.org/abs/2608.12273v1) | Junliang Liu, Ruoyu Li, Wenxin Tang et al. | Reveals a security vulnerability where untrusted third-party skills can hijack LLM agents onto resource-amplification paths while preserving the original task. Highlights risks in progressive-disclosure skill architectures. |
| [One Frozen Simulator Is Not Enough: Simulator Collapse in Multi-Agent RL](http://arxiv.org/abs/2608.12253v1) | Simon Yu, Nicholas Tomlin, Marwa Abdulhai et al. | Shows that using a single mode-collapsed LLM to simulate users in multi-agent RL systematically fails to generalize. This is an important caution for human-AI interaction training pipelines. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [A Framework for Designing Reward Functions: From Objectives to Features to Human-Aligned Reward Functions](http://arxiv.org/abs/2608.12302v1) | Di Yang Shi, W. Bradley Knox | Provides a formal, stepwise process for non-experts to convert natural-language task descriptions into linear reward functions aligned with preference orderings. Makes reward design more accessible and auditable. |
| [Redistribution-based Cost Inference Improves Sparse Safe Offline RL](http://arxiv.org/abs/2608.12306v1) | Ebenezer Gelo, Geraud Nangue Tasse, Steven James et al. | Tackles safe offline RL with only trajectory-level stop-feedback by redistributing costs to infer per-step annotations. Enables safety-aware learning when dense cost labels are unavailable. |
| [HYDRA: Hyperbolic Dynamic Representation Architecture for Kolmogorov-Arnold Networks](http://arxiv.org/abs/2608.12194v1) | Zhao Su, Yuxin Xia, Haoran Li et al. | Reduces parameter redundancy in Kolmogorov-Arnold Networks via hyperbolic dynamic representations. Improves scalability and efficiency of KANs while preserving expressive power. |
| [SAG: SQL-Retrieval Augmented Generation with Query-Time Dynamic Hyperedges](http://arxiv.org/abs/2608.12129v1) | Yuchao Wu, Junqin Li, XingCheng Liang et al. | Introduces query-time dynamic hyperedges for SQL-augmented RAG. Strengthens structured and multi-hop reasoning over relational data, addressing known dense-retrieval limitations. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Diagram-MMU: A Multi-Modal Benchmark for Scientific Diagrams](http://arxiv.org/abs/2608.12262v1) | Weihao Bo, Shan Zhang, Yanpeng Sun et al. | A benchmark for MLLMs on scientific diagram understanding, including conversion to LaTeX TikZ code. Tests whether multimodal models can support scientific writing and collaboration workflows. |
| [ScreenShot: A Foundation Model for Few-Shot Combination Drug Screening](http://arxiv.org/abs/2608.12219v1) | Antoine de Mathelin, Christopher Tosh, Wesley Tansey | A foundation model for predicting effective drug combinations with limited screening data. Addresses the combinatorial cost of drug discovery through few-shot learning. |
| [How Organizations Use AI: Evidence from ChatGPT](http://arxiv.org/abs/2608.12236v1) | Aaron Chatterji, David Holtz, Neel Rakholia et al. | Links ChatGPT Enterprise records to worker roles and firm financial data to study organizational AI adoption and usage. Provides rare empirical evidence on how frontier generative AI is used in practice. |
| [A corpus-specific clinical RAG system matches or outperforms newer frontier LLMs on HealthBench](http://arxiv.org/abs/2608.12138v1) | Praveen Reddy, Charuta Mandke, Suvrankar Datta et al. | Shows that a specialized clinical retrieval-augmented system can rival or exceed newer general-purpose frontier LLMs on a medical benchmark. Reinforces the value of corpus-specific RAG in high-stakes domains. |

## 3. Research Trend Signal

A clear trend today is the shift from purely training-time scaling toward **deployment-aware, test-time, and robust reasoning**. Strong-to-weak capability transfer via harnesses, budget-dependent evaluation rankings, and long-context paradoxes all suggest that *how* models are used is becoming as important as *how* they are trained. Agent security is also emerging as a critical subfield: attacks on third-party skills and simulator collapse in multi-agent RL reveal new failure modes of LLM-based systems.

Another visible direction is the proliferation of **domain-specific benchmarks and retrieval systems** — from enterprise API reasoning to scientific diagrams, clinical RAG, and drug screening. Efficiency work, including quantization, KV-cache optimization, and parameter-reduction architectures like HYDRA, remains steady. Finally, several papers emphasize human-centered deployment: reward design, AI governance, organizational usage, and telerehabilitation. Overall, the field appears to be consolidating around making LLM agents more predictable, evaluable, and safe in real-world settings.

## 4. Worth Deep Reading

1. **AI4AI at Test-Time: Strong-to-Weak Capability Transfer via Harnesses** — This paper challenges a foundational assumption: that capability transfer requires parameter updates. The test-time harness mechanism could be a practical, low-cost route to improving weaker models and raises interesting questions about model composition and alignment.

2. **Information Abundance Paradox: Long-Context Training Undermines Parametric Knowledge** — A direct challenge to the dominant long-context scaling narrative. Understanding this trade-off is crucial for LLM training, RAG, and deployment decisions in the coming years.

3. **Convergent Detour Hijacking: Task-Preserving Resource Amplification in Skill-Based LLM Agents** — A sobering security analysis of progressive-disclosure skill ecosystems. As third-party agent skills become widespread, this attack model is essential reading for anyone building or deploying LLM-agent platforms.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*