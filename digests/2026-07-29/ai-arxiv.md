# ArXiv AI 研究日报 2026-07-29

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-29 01:26 UTC

---

# ArXiv AI 研究日报 | 2026-07-29

---

## 📌 今日速览

- **Kimi K3** 发布 2.8T 参数的 MoE 开源大模型，支持 1M token 上下文和原生视觉能力，成为今日最重磅的模型级突破。
- **数据策展** 与 **稀疏注意力** 持续成为焦点：DataOrchestra 提出按样本智能编排预训练数据处理策略，PIVOT 和 LOCKS 分别从查询分组与局部压缩角度改进长上下文解码效率。
- **智能体安全与可信推理** 受关注：Agentic Permissions 设计基于污点隔离的形式化权限代数，TRACE-CTI 构建可审计的知识图谱用于威胁情报溯源。
- **医疗与气象** 等垂直领域出现系统级多模态方案：ClinFusion 以视觉为中心的医学多模态 LLM，SIREN 用 LLM 智能体实现端到端极端天气预警。

---

## 📖 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [Kimi K3: Open Frontier Intelligence](http://arxiv.org/abs/2607.24653v1) | Kimi Team et al. | 2.8T 参数 MoE，激活 104B，原生视觉 + 1M 上下文。采用 Delta Attention 与 Attention Residuals，是当前最大规模的开源前沿模型之一。 |
| [DataOrchestra: Learning to Orchestrate Per-Example Curation of Pretraining Data](http://arxiv.org/abs/2607.24717v1) | Zhen Huang et al. | 提出按样本级别自适应编排数据处理策略，而非固定域级规则。在 Pile 等基准上显著提升预训练效果，为数据策展提供了精细化的新范式。 |
| [PIVOT: Efficient Query-Group Indexing for Token-Level Sparse Attention](http://arxiv.org/abs/2607.24593v1) | Hong Liu et al. | 针对 DeepSeek 稀疏注意力（DSA）中索引器瓶颈，设计查询分组索引，减少 top-k 选择中的全扫描开销。实用性强，可直接提升主流稀疏注意力系统的吞吐。 |
| [D-Score: A Spectral Hidden-State Signal for Hallucination Detection in Large Language Models](http://arxiv.org/abs/2607.24586v1) | Bianca Raimondi et al. | 从隐藏激活的谱几何出发，提出简单有效的幻觉检测信号 D-Score，无需额外训练，计算高效。为部署中的真实性监控提供了轻量级工具。 |

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [The Physics of Multi-Turn Long-Horizon Planning: From Pre-training to Post-training via Single- and Multi-Teacher On-Policy Agentic Distillation](http://arxiv.org/abs/2607.24720v1) | Tianyi Men et al. | 系统分析规划能力在预训练与后训练中的获取与演化，提出多教师在线蒸馏方法。对理解 agent 长程规划的本质和提升方法有基础性意义。 |
| [Agentic Permissions Policy Algebra for Taint Confinement in LLM Agents](http://arxiv.org/abs/2607.24625v1) | Arseny Kravchenko et al. | 为 LLM agent 设计基于形式化权限代数的污点隔离机制，防止提示注入和数据泄露。将信息安全领域的 IFC 引入 agent 安全，结构严谨。 |
| [TRACE-CTI: Auditable Post-Extraction Governance of TTP Claims with Knowledge Graphs](http://arxiv.org/abs/2607.24563v1) | Federico Valletta et al. | 用知识图谱管理威胁情报中 TTP 映射的溯源与验证，使每个映射可审计。解决了安全运营中提取结果无法追溯的关键痛点。 |
| [SIREN: Towards End-to-End Extreme-Weather Early Warning with Experience-Grounded LLM Agents](http://arxiv.org/abs/2607.24588v1) | Hang Ni et al. | 构建端到端极端天气预警系统，LLM agent 结合气象数据与操作经验完成从监测到行动建议的全流程。展示了 agent 在紧迫场景下的应用潜力。 |

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [MMOE: Modernizing Diffusion Transformers with Efficient Expert Design](http://arxiv.org/abs/2607.24665v1) | Yanhao Jia et al. | 为扩散 Transformer 引入稀疏专家机制，平衡容量与效率。借鉴 LLM 成功经验，有望推动 AIGC 基础模型的规模化与部署成本优化。 |
| [ERUnderstand: Evaluating Vision-Language Models on Structured ER Diagrams](http://arxiv.org/abs/2607.24707v1) | Ali Ansari et al. | 首个大规模 ER 图理解基准，评估 VLM 对结构化数据库设计的理解能力。填补了数据库与视觉语言模型交叉的空白。 |
| [Causal-TS: A Python Library for Causal Discovery in High-Dimensional and Nonstationary Time Series](http://arxiv.org/abs/2607.24673v1) | Mohammad Fesanghary | 开源因果发现库，提供多种适用于高维非平稳时间序列的算法（CDNOTS、CEDAR 等），统一接口。实用工具性强，降低因果推断在时序数据上的使用门槛。 |

---

### 📊 应用（垂直领域、多模态、代码生成）

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [ClinFusion: A Vision-Centric Multimodal LLM System for Holistic Medical Understanding](http://arxiv.org/abs/2607.24743v1) | Hangjie Yuan et al. | 以视觉为中心的医学多模态 LLM，统一处理 2D/3D 医学图像，并提供与临床评估对齐的协议。在放射学等场景中展现了强大的理解能力。 |
| [KANEx: Translating Kolmogorov-Arnold Networks' Interpretability to Medical Explainability](http://arxiv.org/abs/2607.24730v1) | Krithi Shailya et al. | 将 KAN 的可解释性迁移至胸部 X 光分类，结合 VLM 生成自然语言解释。尝试解决医学 AI 的“黑箱”信任问题，实证显示解释质量提升。 |
| [LLM-SoccerArena: Benchmarking LLMs on Real-World Predictions in Sports](http://arxiv.org/abs/2607.24573v1) | Jonas Schröder et al. | 构建体育赛事预测基准，测试 LLM 对不确定未来的推断能力。克服静态基准局限，提供动态信息合成评估框架。 |

---

## 🔭 研究趋势信号

1. **开源大模型进入万亿参数时代**：Kimi K3 以 2.8T 参数、1M 上下文、原生视觉联合开源，标志着开源社区已有能力复现并超越闭源前沿。
2. **数据策展从“管道”走向“智能编排”**：DataOrchestra 等代表逐步从固定的规则过滤转向按样本自适应决策，数据质量成为模型竞争力的核心差异点。
3. **长上下文推理的工程优化集中爆发**：PIVOT、LOCKS 等多篇论文针对 KV cache 瓶颈提出微观架构创新，表明长上下文部署效率是当前最紧迫的优化方向。
4. **Agent 安全从“事后审计”走向“形式化保障”**：Agentic Permissions 使用权限代数、TRACE-CTI 使用知识图谱，尝试在系统和数据层面对 agent 行为进行可验证约束。
5. **领域 LLM 从“通用对话”走向“专业工作流”**：ClinFusion（医学）、SIREN（气象）、LLM-Assisted Ontology（法律）等均以端到端任务为导向，整合多模态数据与逻辑推理。

---

## ⭐ 值得精读

1. **[Kimi K3: Open Frontier Intelligence](http://arxiv.org/abs/2607.24653v1)**  
   当前最大规模的开源 MoE 模型，详细介绍了 Delta Attention、Attention Residuals 等创新设计，对理解和复制万亿参数级多模态 LLM 具有极高的参考价值。

2. **[ClinFusion: A Vision-Centric Multimodal LLM System for Holistic Medical Understanding](http://arxiv.org/abs/2607.24743v1)**  
   系统性地将多模态 LLM 适配到临床实践，涵盖 2D/3D 图像融合与评估协议，是医疗 AI 迈向实用化的标杆工作。

3. **[DataOrchestra: Learning to Orchestrate Per-Example Curation of Pretraining Data](http://arxiv.org/abs/2607.24717v1)**  
   颠覆了“一刀切”的数据处理方式，将数据策展提升为可学习的单例决策问题，对于所有从事预训练的研究者都具有方法论上的启发。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*