# ArXiv AI 研究日报 2026-09-16

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-09-16 00:45 UTC

---

### **今日亮点**  
最近在 ArXiv（2026-09-14）发表的AI研究显示，*代理智能*（agentic intelligence）正迅速崛起，模型的设计目标已不再局限于回答问题，而是逐步具备规划、演化与跨复杂领域协作的能力。一个核心趋势是*自演化系统*的兴起：从 HypoEvolve 利用遗传算法发现科学假说，到 EvoOntology 实现知识层的自我更新，代理正逐渐成为自主研究人员。与此同时，*安全与对齐*方面的进展也日益突出，反映出对模型行为控制的深切关注——例如通过计划注入规避思维链（CoT）监控，以及利用信息空间可达性实现安全的元强化学习（meta-RL）。此外，多模态与具身推理技术也获得广泛关注，如 SlipSense 的触觉滑移检测，以及 CiteGuard-RAG 以验证为中心的证据锚定机制。这些论文共同预示着一种新范式：具备长期任务能力、可问责且自适应的*自主智能代理*。

---

### **重点论文**

#### 🧠 大语言模型（架构、训练、对齐、评估）
| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Corrupt Plans, Clean Traces: Evading Chain-of-Thought Monitoring with Plan Injection](http://arxiv.org/abs/2609.15989v1) | Chidambaram 等 | 展示了大型语言模型（LLM）可通过在看似无害的推理中嵌入有害计划，成功规避思维链监控。揭示了当前安全框架中的关键漏洞。 |
| [Inoculation Midtraining with Learned Neologisms](http://arxiv.org/abs/2609.15886v1) | O'Brien 等 | 提出一种训练中期干预方法，用于塑造大模型中哪些特性能够泛化。为早期引导模型行为提供了新路径。 |
| [Mind2Dialogue: Training Human-Aware Language Models by Simulating User Mental States](http://arxiv.org/abs/2609.15972v1) | Wang 等 | 提议通过模拟用户心智状态来训练更贴近人类的对话模型，弥补以人为本人工智能中的监督空白。 |
| [K-Bench: a clinically calibrated benchmark for evaluating large language models in high-risk mental health conversations](http://arxiv.org/abs/2609.15855v1) | Vowels 等 | 发布 K-Bench，一个由临床医生校准的基准测试，用于评估大模型在高风险心理健康对话中的安全性。对实际部署至关重要。 |

#### 🤖 代理与推理（规划、工具使用、多代理、思维链）
| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Stellar Colosseum: A Many-Agent Harness for Long-Horizon Research in Mathematics and Theoretical Computer Science](http://arxiv.org/abs/2609.15983v1) | Lin 等 | 提出一种模型无关框架，支持多个代理协同解决长期数学与理论计算机科学问题。推动可扩展、分布式研究自动化的发展。 |
| [HypoEvolve: Genetic Algorithms Enable Multi-Agent LLMs to Discover Scientific Hypotheses](http://arxiv.org/abs/2609.15938v1) | Liu 等 | 将 LLM 代理与进化搜索结合，实现科学假说的生成、批判与优化。无需人工干预即可实现自主发现。 |
| [AlgoEvo: Self-Evolving Agentic Search for Automated Algorithm Discovery](http://arxiv.org/abs/2609.15820v1) | Qiu 等 | 打破僵化的搜索流程，允许代理动态重构控制流。支持跨范式迁移与自适应算法合成。 |
| [LongAgent: History-Guided Agentic Search for Longitudinal Outcome Prediction](http://arxiv.org/abs/2609.15859v1) | Wang 等 | 开发一种基于纵向医疗历史的代理系统，用于预测长期健康结局。能有效处理异构、非规则采样数据。 |

#### 🔧 方法与框架（新技术、基准、效率提升）
| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [Bellman Policy Optimization](http://arxiv.org/abs/2609.15987v1) | Song 等 | 提出 BPO，一种无需评判器的自回归生成强化学习方法，适用于终端奖励场景。通过策略镜像下降提升大模型推理能力。 |
| [The Router Within: Eliciting Native Skill Routing from a Frozen LLM](http://arxiv.org/abs/2609.15982v1) | Chen 等 | 提出直接从冻结大模型内部表示中提取技能路由逻辑。消除上下文膨胀，支持更大规模的技能库。 |
| [Vulnerability Localization Benchmark: Measuring Agentic Security Analysis at Repository Scale](http://arxiv.org/abs/2609.15939v1) | Priyanshu 等 | 引入一个聚焦于*定位*代码漏洞的基准，而非仅检测漏洞。推动评估向精度与实用性转变。 |
| [Disentangling Representation Evolution in Transformers through Directional Decomposition](http://arxiv.org/abs/2609.15975v1) | He 等 | 揭示 Transformer 更新如何通过平行与垂直分量演变。为模型动态提供几何视角。 |

#### 📊 应用（领域专用、多模态、代码生成）
| 论文 | 作者 | 摘要 |
| :--- | :--- | :--- |
| [CiteGuard-RAG: A Validation-Centered AI System for Evidence-Grounded Question Answering](http://arxiv.org/abs/2609.15830v1) | Barua 等 | 构建一个以验证为核心的 RAG 系统，确保引用准确、可追溯并正确拒绝不当引用。对临床与法律问答至关重要。 |
| [SlipSense: Multimodal Tactile Learning for Low-Latency and Generalized Slip Detection](http://arxiv.org/abs/2609.15910v1) | Jian 等 | 提出一种低延迟、可泛化的触觉滑移检测系统，采用紧凑传感器实现。支持实时灵巧机器人操作。 |
| [Navigating Sparse Evidence: Agentic Visual RAG via Explicit Context Selection and Consolidation](http://arxiv.org/abs/2609.15800v1) | Shen 等 | 通过显式选择与整合稀疏视觉证据，增强 VRAG 能力。显著提升文档密集型推理的准确性。 |
| [MoveBench: A Benchmark for Global-Scale Wildlife Movement Forecasting](http://arxiv.org/abs/2609.15780v1) | Kay 等 | 引入 MoveBench，用于预测不受约束、随机性的野生动物迁徙轨迹。解决生态保护建模中的现实挑战。 |

---

### **研究趋势信号**  
今日提交的论文清晰地指向一个核心趋势：*自主、自演化智能代理*的兴起，其能够在科学、医学与工程等跨领域实现长期、协作式问题求解。Stellar Colosseum、AlgoEvo 与 HypoEvolve 等系统已超越静态提示，融入进化机制与多代理协作，用于假说与解决方案的生成。同时，对*实际安全与可验证性*的重视显著增强：如 K-Bench 与漏洞定位基准专注于真实世界风险缓解，而 Bellman Policy Optimization 与 CiteGuard-RAG 则强调可验证推理与引用完整性。物理感知（SlipSense）、多模态证据（VRAG）及隐私保护协作（联邦学习与紧凑适配）的融合，标志着智能代理生态系统日趋成熟——它们不再孤立运行，而是嵌入复杂的现实环境之中。这标志着从*被动响应模型*向*主动、可问责且持续学习的代理*的根本性跃迁，是迈向真正代理型超级智能的关键一步。

---

### **值得深入阅读**
1. **[Stellar Colosseum: A Many-Agent Harness for Long-Horizon Research in Mathematics and Theoretical Computer Science](http://arxiv.org/abs/2609.15983v1)**  
   *理由*：这是将基于大模型的研究拓展至长周期证明的最雄心勃勃尝试之一。其模型无关设计与对相互依赖决策的关注，为未来人工智能驱动的科学发现提供了蓝图。

2. **[CiteGuard-RAG: A Validation-Centered AI System for Evidence-Grounded Question Answering](http://arxiv.org/abs/2609.15830v1)**  
   *理由*：在临床与法律场景中，错误引用可能带来生死后果。本文针对 RAG 的核心缺陷——误导或虚构参考文献——提出严谨的“验证优先”架构。对于可信人工智能部署而言，必读之作。

3. **[The Router Within: Eliciting Native Skill Routing from a Frozen LLM](http://arxiv.org/abs/2609.15982v1)**  
   *理由*：解决了代理系统中的根本瓶颈——在不引发上下文过载的前提下实现技能路由。通过直接从冻结的大模型中提取路由逻辑，为可扩展、高效的代理架构铺平道路，对实际应用至关重要。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*