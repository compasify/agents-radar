# ArXiv AI Research Digest 2026-08-20

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-19 23:12 UTC

---

## Today's Highlights

Today’s submissions reflect a clear shift from static training toward inference-time adaptation: memory-based self-improvement, chain-of-experience learning, and dynamic recurrent compression all aim to make better use of past information at test time. A second major theme is reliability and risk, with papers on the fragility of self-improving agents, uncertainty-calibrated judging, and robust planning under representational constraints. Evaluation infrastructure is also expanding, from tokenizer diagnostics and linguistic reasoning challenges to bilingual multimodal benchmarks. Finally, domain-specific AI systems are maturing, especially in radiology, finance, and speech sentiment analysis.

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [TokEval: A Tokenizer Evaluation Suite](http://arxiv.org/abs/2608.18062v1) | Clara Meister | Introduces a systematic evaluation suite for language model tokenizers, linking tokenizer properties to downstream performance. This fills a long-standing gap in tokenizer selection and should make tokenizer design more evidence-driven. |
| [Recirculation](http://arxiv.org/abs/2608.17981v1) | Michael C. Mozer, Shoaib Ahmed Siddiqui, Danny Sawyer et al. | Describes an inference-time architectural enhancement that reduces perplexity and improves accuracy in foundation models with essentially no added latency. The approach is notable because it improves off-the-shelf models without retraining. |
| [Dynamic Compression in Recurrent Networks](http://arxiv.org/abs/2608.17896v1) | Jyothish Pari, Ryan Bahlous-Boldi, Pulkit Agrawal et al. | Proposes recurrent models that compress history dynamically rather than in a single causal pass, addressing the problem of compressing information before its future use is known. This could improve long-context memory efficiency in recurrent architectures. |
| [BEAR-Bench: A Bilingual Enterprise and Academic Reasoning Benchmark for Multimodal Models](http://arxiv.org/abs/2608.17895v1) | Liubov Chubarova, Alexandra Kuleshova, Daniil Volkov et al. | Presents a bilingual benchmark focused on reasoning over text-dense professional documents with multimodal models. It targets an underevaluated area beyond simple information extraction, providing a stronger test for enterprise-ready MLLMs. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [On the Fragility of Self-Improving Agents: Variance, Task Order, and Underspecification](http://arxiv.org/abs/2608.18066v1) | Qinyuan Ye, Yu Li, Yada Pruksachatkun et al. | Investigates reliability issues in memory-based self-improving agents, showing that performance is highly sensitive to task order, variance, and underspecification. This is an important cautionary result for the growing field of continual, test-time learning agents. |
| [Chain-of-Experience for Continual LLM Improvement](http://arxiv.org/abs/2608.18027v1) | Haoqin Tu, Yunhao Fang, Yizhong Wang et al. | Studies how LLMs can learn from iterative experience at inference time, formalizing a setting called Chain-of-Experience. It pushes beyond static evaluation and toward models that genuinely improve through interaction. |
| [CABLE: Extending the Reach of Memory Retrieval via Complementary Antecedent-Based Linking and Expansion](http://arxiv.org/abs/2608.17911v1) | Zheling Tan, Jin Gao, Dequan Wang et al. | Addresses evidence-reachability in long-term conversational memory, where retrieval fails even when relevant evidence exists in history. The proposed linking and expansion mechanism helps agents recover relevant evidence through bounded memory interfaces. |
| [The IOL-AI Challenge: An Open Challenge towards Advancing Linguistic Reasoning](http://arxiv.org/abs/2608.18011v1) | Eduardo Sánchez, Rita Berrada, Dan-Mircea Mirea et al. | Launches an open competition based on linguistic puzzles where solvers must first discover an unknown rule system before reasoning within it. This provides a novel and harder evaluation setting than typical math/code reasoning benchmarks. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [TabNSM: Neural Sparse Mixer for Tabular Regression](http://arxiv.org/abs/2608.18026v1) | Ali Eslamian, Qiang Cheng et al. | Proposes a neural architecture combining sparse mixing and tabular representation learning for high-dimensional regression. It targets the robustness of tree-based models while enabling end-to-end feature learning. |
| [Efficient RLVR Scheduling via Graph-Structured Online Difficulty Estimation](http://arxiv.org/abs/2608.17941v1) | Zhizhao Liu, Zhiliang Tian, Xi Wang et al. | Introduces a graph-structured online difficulty estimator to schedule rollout budgets in reinforcement learning with verifiable rewards. This improves efficiency by allocating fewer rollouts to easy samples and more to difficult ones. |
| [SIGMA: SHAP-Guided Implicit-Trajectory Generation for Metadata-Free LLM-Based AutoFE](http://arxiv.org/abs/2608.17948v1) | Xuan Zheng, Kento Uchida, Shinichi Shirakawa et al. | Presents a metadata-free LLM-based automated feature engineering method guided by SHAP signals. It reduces reliance on semantic metadata and improves scalability in long-horizon feature optimization. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Multi-Agent AI System for Radiology Report Structuring and Quality Assurance with Independent Radiologist Evaluation](http://arxiv.org/abs/2608.18072v1) | Iryna Hartsock, Cesar Lam, Christopher Otteni et al. | Evaluates a locally deployed multi-agent system that structures radiology reports and performs quality assurance across CT examinations. This is a strong example of agentic AI being validated by independent clinicians in a real clinical workflow. |
| [SpeechSense: A Paralinguistic-Focused Dataset for Fine-Grained Speech Sentiment Analysis](http://arxiv.org/abs/2608.17931v1) | Shicheng Ma, Wenqian Cui, Irwin King et al. | Introduces a dataset designed for fine-grained speech sentiment with emphasis on paralinguistic cues such as tone and prosody. It supports applications where how something is said matters as much as what is said. |
| [EvoTS-Agent: A Self-Evolving LLM Agent for Financial Time Series Change Point Detection](http://arxiv.org/abs/2608.17933v1) | Lei Jiang, Ye Wei, Xinyu Xi et al. | Develops an LLM agent that self-evolves to select and adapt change-point detection algorithms for non-stationary financial time series. It reduces reliance on expert-driven model selection across changing market regimes. |

## Research Trend Signal

A recurring direction across today’s papers is the move from “train once, deploy forever” toward systems that adapt at inference time. Self-improving agents, chain-of-experience learning, and dynamic memory compression all point to a future where models continually refine their behavior using accumulated experience. At the same time, reliability is emerging as a critical concern: several submissions examine fragility, calibration, uncertainty, and verification in adaptive systems. This suggests the field is beginning to treat inference-time learning as an engineering challenge, not just a performance boost. Another visible trend is the rise of domain-specific agent frameworks, particularly in medicine, finance, and speech, where structured evaluation and expert oversight are essential. Finally, evaluation itself is becoming more rigorous and more specialized, with benchmarks targeting tokenizer quality, linguistic puzzles, bilingual professional documents, and paralinguistic speech understanding.

## Worth Deep Reading

1. **[On the Fragility of Self-Improving Agents](http://arxiv.org/abs/2608.18066v1)** — This paper offers a necessary counterbalance to optimistic claims about self-improving agents. Its analysis of variance, task order, and underspecification matters for anyone building or relying on continual learning systems.

2. **[Recirculation](http://arxiv.org/abs/2608.17981v1)** — A clever inference-time enhancement that improves off-the-shelf foundation models without retraining. It is potentially widely applicable and could change how we think about model quality after deployment.

3. **[TokEval](http://arxiv.org/abs/2608.18062v1)** — Tokenizers remain surprisingly underevaluated despite their impact on downstream behavior. This work provides a foundation for principled tokenizer selection and is likely to influence both research and practical model-building decisions.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*