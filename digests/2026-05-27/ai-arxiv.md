# ArXiv AI 研究日报 2026-05-27

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-05-27 00:26 UTC

---

# ArXiv AI 研究日报 | 2026-05-27

---

## 今日速览

今日50篇论文呈现**"系统级AI"**与**"可验证性"**两大核心趋势：智能体研究从模型单点突破转向**执行架构（harness）的可扩展设计**；多模态领域涌现**循环扩散语言模型**与**尺度不变生成**等新型架构；评估方法论出现重要转向——从"测能力"到**"测部署完备性"**和**"审计基准本身"**。值得关注的是，"睡眠"机制、神经随机注意力等生物启发设计重新进入主流视野，而因果推断方法正系统性地渗透进LLM开发与评估全流程。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| [**Language Models Need Sleep**](http://arxiv.org/abs/2605.26099v1) | Lee S., McLeish S., Goldstein T. 等 | 提出类睡眠的上下文巩固机制，将近期上下文转化为持久fast weights，解决Transformer长上下文注意力平方扩展瓶颈——首次将神经科学睡眠理论系统性引入LLM推理架构。 |
| [**Looped Diffusion Language Models**](http://arxiv.org/abs/2605.26106v1) | Lee S., Hong C., Kim S. 等 | 发现选择性循环Transformer早期-中层可显著提升掩码扩散语言模型性能，为自回归模型的替代架构提供关键设计原则。 |
| [**Forgetting in Language Models: Capacity, Optimization, and Self-Generated Replay**](http://arxiv.org/abs/2605.26097v1) | Marek M., Cho D., Qiu S. 等 | 系统分析LLM灾难性遗忘的容量边界，证明模型可通过自采样生成有效回放数据，无需存储真实样本即可缓解遗忘。 |
| [**Causal methods for LLM development and evaluation**](http://arxiv.org/abs/2605.25998v1) | Frauen D., Brockschmidt M., Hess K. 等 | 将因果推断框架系统引入LLM开发全流程（数据混合、奖励模型、路由策略），指出当前经验迭代缺乏因果识别导致的优化盲区。 |
| [**Deployment-complete benchmarking**](http://arxiv.org/abs/2605.25997v1) | Mansouri E.M., Arai K. | 提出"部署完备性"概念，证明现有基准分数无法逻辑支撑部署决策——方法论层面的重要警醒。 |
| [**Statistical Inference for Stochastic Gradient Descent Beyond Finite Variance**](http://arxiv.org/abs/2605.26000v1) | Blanchet J., Glynn P., Yang W. | 突破SGD统计推断的有限方差假设，建立重尾分布下的极限理论，为大规模训练的不确定性量化奠定数学基础。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| [**From Model Scaling to System Scaling: Scaling the Harness in Agentic AI**](http://arxiv.org/abs/2605.26112v1) | Gu S. | **核心宣言**：Agentic AI的下一瓶颈是"系统扩展"而非模型扩展——围绕基础模型的可审计、持久化、模块化、可验证执行架构（harness）将成为关键战场。 |
| [**VeriTrace: Evolving Mental Models for Deep Research Agents**](http://arxiv.org/abs/2605.26081v1) | Zhao H., Long Y., Beckenbauer L. 等 | 为深度研究智能体设计显式演化的中间心智表征，解决隐式推理导致的信息污染与不确定性累积问题。 |
| [**Peak-Then-Collapse and the Four Interface Channels of Knowledge-Graph Tool Use**](http://arxiv.org/abs/2605.26037v1) | Sun T., Kazakov D. | 揭示RLVR工具学习的"峰值-崩溃"现象：GRPO训练在知识图谱导航任务中先升后降，归因于四个接口通道的信用分配失败。 |
| [**When Do LLM Agents Treat Surface Noise Differently from Semantic Noise?**](http://arxiv.org/abs/2605.25981v1) | Zhang L., Guo J. | 68单元大规模测量研究发现：ReAct智能体对语义扰动（释义、同义词）的敏感性显著高于表面扰动（格式、重排），挑战"LLM仅匹配表面模式"的成见。 |
| [**SafeCtrl-RL: Inference-Time Adaptive Behaviour Control for LLM Dialogue via RL-Driven Prompt Optimisation**](http://arxiv.org/abs/2605.25984v1) | Orme M., Yu Y., Tan Z. | 无需重训练或修改参数的推理时安全控制框架，通过RL优化prompt实现对话行为的自适应安全调节。 |

### 🔧 方法与框架（新技术、基准测试、效率优化）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| [**MobileGym: A Verifiable and Highly Parallel Simulation Platform for Mobile GUI Agent Research**](http://arxiv.org/abs/2605.26114v1) | Wu D., Hao R., Wang H. 等 | 浏览器托管的轻量级移动GUI仿真环境，首次实现日常App的可验证结果信号与高度并行化——移动智能体研究的必备基础设施。 |
| [**Automated Benchmark Auditing for AI Agents and Large Language Models**](http://arxiv.org/abs/2605.26079v1) | Wang J., Bianchi F., Zhu S. 等 | 自动审计基准测试本身：检测隐含假设、不完整环境规约与脆弱评估逻辑——基准质量保障的方法论突破。 |
| [**OrpQuant: Geometric Orthogonal Residual Projection for Multiplier-Free Power-of-Two Transformer Quantization**](http://arxiv.org/abs/2605.26092v1) | Xiang M., Wang B., Luo T. | 几何正交残差投影实现无乘法器的2的幂次量化，消除边缘部署的MAC阵列时序瓶颈。 |
| [**Fuzzy PyTorch: Rapid Numerical Variability Evaluation for Deep Learning Models**](http://arxiv.org/abs/2605.25991v1) | Gonzalez-Pepe I., Akhaddar H., Glatard T. 等 | 快速评估浮点运算数值变异性的框架，解决DL模型跨硬件可靠部署的隐忧。 |
| [**Learning in Low-Dimensional Subspaces: Orthogonal Bottlenecks for Reinforcement Learning**](http://arxiv.org/abs/2605.26012v1) | Todorov A., Sabatelli M. | 正交瓶颈强制RL表征学习降至低维子空间，验证"任务相关结构本质低维"假说并提升样本效率。 |

### 📊 应用（垂直领域、多模态、代码生成）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| [**Squeezing Capacity from Multimodal Large Language Models for Subject-driven Generation**](http://arxiv.org/abs/2605.26111v1) | Zheng S., Misraa A.K., Li Y.T. 等 | 挖掘MLLM内在跨模态推理能力用于主体驱动生成，消除文本-图像分离编码导致的复制粘贴伪影。 |
| [**Everything at Every Scale: Scale-Invariant Diffusion with Continuous Super-Resolution**](http://arxiv.org/abs/2605.26032v1) | Chen Z.J., Chen Z., Wang A. 等 | **SKILD**：统一图像生成与超分辨率为尺度空间信息恢复问题，实现任意尺度连续超分辨的K空间扩散模型。 |
| [**Paris 2.0: A Decentralized Diffusion Model for Video Generation**](http://arxiv.org/abs/2605.26064v1) | Rouzbayani A., Roy B., Villagra M. 等 | 首个通过去中心化计算预训练的视频生成模型，验证无需单体GPU集群的分布式训练可行性。 |
| [**STORM: Internalized Modeling for Spatial-Temporal Reasoning in Video-Language Models**](http://arxiv.org/abs/2605.26014v1) | Liang Y., Chen Y., Zhou Y. 等 | 将时空推理内化至视觉编码器，替代LVLM外挂的文本CoT/关键帧选择，实现帧级运动追踪与状态演化的端到端学习。 |
| [**DiscoverPhysics: Benchmarking LLMs for Out-of-the-Box Scientific Thinking**](http://arxiv.org/abs/2605.26087v1) | Wiemann M.L., Smith L.M., Melchior P. 等 | 交互式基准测试LLM在未知物理定律世界中的"从零发现"能力，有效隔离真实推理与知识记忆。 |
| [**Forgotten Words: Benchmarking NeoBERT for Dementia Detection in Low-Resource Conversational Filipino and English Speech**](http://arxiv.org/abs/2605.26007v1) | Floresca R.S.Z., Hao E.C.C., Buñales H.G. 等 | 首个菲律宾语-英语代码切换痴呆检测NLP研究，填补低资源临床语音分析的重要空白。 |

---

## 研究趋势信号

**"可验证性"正成为智能体研究的元要求**：从MobileGym的可验证结果信号、VeriTrace的显式心智演化，到Auto Benchmark Auditing对基准本身的审计，研究者意识到"能跑"不等于"可信"。**生物启发架构复兴**：睡眠巩固、神经随机注意力电路（NSAC）等设计重新受到重视，反映纯规模扩展边际效益递减后的范式探索。**因果推断从"用AI做因果"转向"用因果做AI"**：Frauen等人将因果框架注入LLM开发全流程，标志着因果方法从应用对象升级为生产工具。最后，**"系统扩展"对"模型扩展"的替代**（Gu, 2026）可能定义Agentic AI的下一阶段竞争格局。

---

## 值得精读

### 1. [From Model Scaling to System Scaling: Scaling the Harness in Agentic AI](http://arxiv.org/abs/2605.26112v1) — Gu S.
**理由**：单作者论文提出"Scaling the Harness"核心概念，精准诊断Agentic AI从demo到生产的鸿沟。作者定义了可审计性、持久性、模块化、可验证性四大系统属性，为2026-2027年智能体基础设施投资提供框架。若其判断准确，这将是一篇被高频引用的方向性论文。

### 2. [Language Models Need Sleep](http://arxiv.org/abs/2605.26099v1) — Lee S., McLeish S., Goldstein T. 等
**理由**：将睡眠的"记忆巩固"机制转化为可计算的fast weights更新，兼具神经科学理论深度与工程可实现性。该机制直接解决长上下文推理的注意力复杂度瓶颈，若与现有KV Cache优化结合，可能产生即时的推理效率提升。Goldstein团队的跟踪记录增加了实现可信度。

### 3. [Peak-Then-Collapse and the Four Interface Channels of Knowledge-Graph Tool Use](http://arxiv.org/abs/2605.26037v1) — Sun T., Kazakov D.
**理由**：以极简设置（4个Freebase导航动词）精确复现并解释了RLVR工具学习的训练动态崩溃现象。其"四通道"分析框架（查询构建、结果解析、答案合成、验证）具有普适性，对当前火热的GRPO工具训练 recipe 是一剂清醒剂。方法论的极简主义与结论的广泛相关性形成张力，值得方法论研究者借鉴。

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*