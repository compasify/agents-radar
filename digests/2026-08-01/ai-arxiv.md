# ArXiv AI 研究日报 2026-08-01

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-01 01:47 UTC

---

## ArXiv AI 研究日报 — 2026-08-01

### 📌 今日速览
今日论文聚焦于**推理时计算效率**与**智能体评估基础设施**两大主线。多篇工作重新审视「生成更多 token 是否总是更好」：在固定推理预算下，重复采样显著优于自我反思/Reflexion（1.5B–7B 规模），而 SVR 与 β-OPSD 则从训练方法上提升了推理模型的稳定性与自验证能力。智能体方向，OSReward 提出了跨平台计算机使用智能体（CUA）的标准化奖励模型评估基准，ORCA-bench 定义了面向值班根因分析（oncall RCA）的评测，MANTA 则让多智能体系统能够在线自适应通信拓扑。此外，ViT 量化、多模态 RAG 解耦，以及医疗、金融、化学等垂直领域的应用也各有值得关注的突破。

---

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [Sample More, Reflect Less: Self-Refine and Reflexion Lose to Repeated Sampling at Equal Token Cost](http://arxiv.org/abs/2607.28576v1) | Iliya Mirzaei | 在固定 token 预算下系统比较重复采样与自我反思类方法，发现前者在 1.5B–7B 模型上全面占优。为推理时计算分配提供了重要的实证修正，挑战了「反思必然提升质量」的默认假设。 |
| [$β$-OPSD: Deriving with Policy Optimization, Training with Self-Distillation](http://arxiv.org/abs/2607.28582v1) | Jiawei Xu, Minghui Liu, Juzheng Zhang et al. | 将 on-policy 自蒸馏（OPSD）推广为 β 权重框架，并用自蒸馏训练替代策略梯度更新，缓解训练不稳定的结构性问题。为强化推理模型提供了更可控、更易复现的优化目标。 |
| [SVR: Self-Verifying Refinement via Joint Verdict-Confidence Reinforcement Learning for Adaptive Test-Time Compute](http://arxiv.org/abs/2607.28457v1) | Hongyu Chen, Liang Lin, Guangrun Wang | 提出免外部奖励的「自验证精炼」框架，通过判定-置信度联合强化学习让模型自适应控制测试时计算量。摆脱了对独立验证器或奖励模型的依赖，是实现自适应推理的重要一步。 |
| [AISPA: User-Centric System Prompt Auditing for Large Language Model Applications](http://arxiv.org/abs/2607.28617v1) | Xiangning Lin, Shenzhe Zhu, Shu Yang et al. | 面向 LLM 应用的系统提示审计框架，从用户视角检测提示配置是否损害透明度、公平性与可追溯性。直接回应商业 AI 系统中系统提示不披露带来的信任与问责难题。 |

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [OSReward: Instituting Standardized Evaluation for Cross-Platform Computer-Use Reward Models](http://arxiv.org/abs/2607.28609v1) | Qiushi Sun, Kanzhi Cheng, Yian Wang et al. | 提出跨平台计算机使用智能体（CUA）奖励模型的标准化评估基准。为 CUA 轨迹验证、数据筛选和强化学习提供了急需的统一评价协议。 |
| [MANTA: Multi-Agent Network Topology Adaptation for Self-Evolving Multi-Agent Systems](http://arxiv.org/abs/2607.28527v1) | Mao-xun Huang, Jerry Wang, Yi-Cheng Lai et al. | 让多智能体系统在任务执行中动态调整通信拓扑，替代以往固定设计或离线优化。实验表明自适应拓扑能显著提升复杂问题的求解质量与系统自演化能力。 |
| [ORCA-bench: How Ready Are Language Model Agents for Oncall?](http://arxiv.org/abs/2607.28545v1) | Albert Gong, Kyuseong Choi, Abhineet Agarwal et al. | 首个面向 LLM 值班根因分析（oncall RCA）的评测基准，要求模型从模糊用户报告出发推理指标、日志与源代码。将智能体能力评估从代码生成拓展到运维诊断这一高价值场景。 |
| [Change2Task: From Repository Changes to Executable Coding Agent Tasks and Environments](http://arxiv.org/abs/2607.28591v1) | Haomin Qi, Xingliang Wang, Xuanqi Gao et al. | 从代码仓库真实变更自动生成可执行的编码智能体任务与验证环境。解决了编码 agent 训练/评测数据扩张的关键瓶颈，有助于构建持续进化的代码智能体数据供应链。 |
| [Frontis-MA1: Training an AI4AI Model towards Recursive Self-Improvement in Machine Learning Engineering](http://arxiv.org/abs/2607.28568v1) | Junlin Yang, Che Jiang, Yu Fu et al. | 发布开源全栈 AI4AI 系统 OpenMLE，并训练了面向机器学习工程的递归自我改进模型。为 RS I（递归自我改进）研究提供了可复现的验证平台与初始模型。 |

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [MixFrag: Fragility-Guided Mixed-Precision Post-Training Quantization for Vision Transformers](http://arxiv.org/abs/2607.28589v1) | Md. Mehrab Hossain Opi, Robiul Islam Ryad, Md. Umar Faruk | 提出基于脆弱性分析的混合精度 PTQ 方法，为 ViT 各组件分配差异化比特宽度。相比统一精度量化显著提升部署效率与精度权衡，对资源受限设备上的 ViT 落地有直接价值。 |
| [DualG-MRAG: Decoupling Macro-Reasoning and Micro-Matching for Multimodal Retrieval-Augmented Generation](http://arxiv.org/abs/2607.28580v1) | Jiacheng Tao, Qingyun Sun, Haonan Yuan et al. | 将多模态 RAG 中的宏观推理（跨文档关系）与微观匹配（实例级检索）解耦，解决多跳任务中模态间关联捕捉困难。为复杂多模态问答提供了新的架构设计思路。 |
| [PAIChecker: Uncovering and Checking PR-Issue Misalignment in SWE-Bench-Like Benchmarks](http://arxiv.org/abs/2607.28587v1) | Manyi Wang, Junjielong Xu, Pinjia He | 系统检查 SWE-bench 类基准中 PR 与 Issue 之间的对齐质量，暴露潜在误导样本。为代码智能体基准的可信度提供了诊断与修正工具。 |

---

### 📊 应用（垂直领域、多模态、代码生成）

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [Beyond Sentiment: Structured Information Extraction from Financial News](http://arxiv.org/abs/2607.28496v1) | Daohan Zhu, Sitong Ge, Ruofei Wang et al. | 从金融新闻中抽取事件类型、影响范围、时间跨度等多维结构化信息，超越单一情绪极性分数。为新闻驱动的量化预测提供了信息更丰富的中间表征。 |
| [A report-grounded vision-language foundation model for colonoscopy from 280000 routine reports](http://arxiv.org/abs/2607.28466v1) | Jia Yu, Yan Zhu, Yili He et al. | 利用 28 万份肠镜报告训练报告级视觉-语言基础模型，缓解帧级标注稀缺问题。展示了大规模临床文本作为弱监督信号训练医学 VLM 的可行性。 |
| [AskChem: Claim-Centered Infrastructure for Chemistry Literature Synthesis](http://arxiv.org/abs/2607.28618v1) | Bing Yan, Gregory Wolfe, Stefano Martiniani et al. | 面向化学文献综合的「以 claim 为中心」基础设施，从分散论文中定位并组装具体发现。为化学家与 AI 智能体提供了可验证的科学文献综合基础。 |

---

### 🔍 研究趋势信号

今日投稿呈现出四个值得关注的方向：第一，**推理时计算的精细化管理**成为核心议题——从「生成更多思维链 token」转向「在固定预算下如何分配采样、验证与反思」；第二，**智能体评估基础设施正在快速成熟**——OSReward、ORCA-bench、PAIChecker 等分别从奖励模型、任务定义和基准质量三个层面建立新标准；第三，**多智能体系统走向自组织与自进化**，MANTA 的在线拓扑适应和 Frontis-MA1 的 AI4AI 循环是这个方向的代表性尝试；第四，**可验证性与安全性贯穿各个层面**——从系统提示审计（AISPA）到信息操作安全基准（InfoOps Bench），再到可认证约束求解（LeanCSP），不再仅追求能力提升。

---

### 📖 值得精读

1. **[Sample More, Reflect Less](http://arxiv.org/abs/2607.28576v1)** — 对主流自我反思范式提出了严谨的同 token 预算对照实验，结论直接且具有方法论冲击力，对推理时计算分配的研究者与实践者都有指导意义。

2. **[OSReward](http://arxiv.org/abs/2607.28609v1)** — 计算机使用智能体（CUA）是当前 Agent 落地最具想象力的方向之一，但奖励模型评价标准长期缺失。OSReward 提供了跨平台协议与基准，是该领域走向规范化的关键一步。

3. **[MANTA](http://arxiv.org/abs/2607.28527v1)** — 从固定通信拓扑到在线自适应的转变，是多智能体系统迈向自组织的重要探索。其动态拓扑机制与实验分析为后续自进化多智能体研究奠定了良好基础。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*