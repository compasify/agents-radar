# ArXiv AI 研究日报 2026-06-03

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-06-03 00:36 UTC

---

# ArXiv AI 研究日报 | 2026-06-03

---

## 今日速览

今日50篇论文呈现**多模态智能体安全对齐**与**高效推理优化**两大主线。视频MLLM的时序冗余压缩（AdaCodec）和扩散语言模型的投机解码（SimSD）在架构效率上取得突破；智能体安全方面，从工具调用隐私（Ghost Tool Calls）到技能生命周期攻击（SkillHarm）形成完整威胁图谱。值得注意的是，**临床AI**成为应用热点，涵盖EHR交互环境、急诊分诊监测和多学科病历摘要三个独立工作。评估方法论上，"人类最后一道验证线"（HLL）和规则归纳基准（HERO'S JOURNEY）推动智能体能力边界的重新定义。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[From Layers to Submodules: Rethinking Granularity in Replacement-Based LLM Compression](http://arxiv.org/abs/2606.02559v1)** | E. Cunegatti 等 | 突破全层替换的压缩范式，提出子模块级非连续替换策略，在保持性能的同时实现更高压缩率。 |
| **[SafeSteer: Localized On-Policy Distillation for Efficient Safety Alignment](http://arxiv.org/abs/2606.02530v1)** | H. Li 等 | 通过局部化策略蒸馏解决安全对齐的"对齐税"问题，无需大规模通用数据或辅助奖励模型。 |
| **[SimSD: Simple Speculative Decoding in Diffusion Language Models](http://arxiv.org/abs/2606.02544v1)** | J. Cui 等 | 为扩散语言模型设计首个兼容的token级投机解码方案，突破AR模型在推理速度上的垄断优势。 |
| **[On the Scaling of PEFT: Towards Million Personal Models of Trillion Parameters](http://arxiv.org/abs/2606.02437v1)** | Mind Lab 等 | 将PEFT重新定义为"持久化本地状态"而非廉价替代方案，支撑百万级个性化万亿参数模型的联邦部署。 |
| **[Not All Errors Are Equal: A Systematic Study of Error Propagation in Large Language Model Inference](http://arxiv.org/abs/2606.02430v1)** | Y. Huang 等 | 首次系统量化HPC环境中软错误在LLM推理中的传播规律，为可靠性关键部署提供设计依据。 |

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[Ghost Tool Calls: Issue-Time Privacy for Speculative Agent Tools](http://arxiv.org/abs/2606.02483v1)** | B. Mohammadi 等 | 暴露投机性工具调用中的意图泄露漏洞，提出"幽灵调用"机制实现问题发生时的隐私保护。 |
| **[SkillHarm: Lifecycle-Aware Skill-Based Attacks via Automated Construction](http://arxiv.org/abs/2606.02540v1)** | Y. Ning 等 | 构建技能全生命周期（安装-更新-停用）的自动化攻击框架，揭示第三方技能作为智能体攻击面的系统性风险。 |
| **[HLL: Can Agents Cross Humanity's Last Line of Verification?](http://arxiv.org/abs/2606.02449v1)** | X. Song 等 | 以CAPTCHA为试金石，系统评估多模态智能体突破人类设计验证防线的能力与局限。 |
| **[RASER: Recoverability-Aware Selective Escalation Router for Multi-Hop Question Answering](http://arxiv.org/abs/2606.02488v1)** | Y. Li 等 | 基于可恢复性感知的自适应路由，避免多跳QA中昂贵的检索调用，实现成本-准确率帕累托最优。 |
| **[AGENTCL: Toward Rigorous Evaluation of Continual Learning in Language Agents](http://arxiv.org/abs/2606.02461v1)** | Y. Shu 等 | 建立语言智能体持续学习的严格评估框架，解决经验积累与任务干扰的核心矛盾。 |
| **[Tracking the Behavioral Trajectories of Adapting Agents](http://arxiv.org/abs/2606.02536v1)** | J. Leshin 等 | 通过版本控制追踪智能体配置文件的行为演化轨迹，为自适应系统的可解释性提供新工具。 |

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[AdaCodec: A Predictive Visual Code for Video MLLMs](http://arxiv.org/abs/2606.02569v1)** | H. Hou 等 | 利用视频时序冗余性构建预测性视觉编码，消除相邻帧重复token，显著压缩视频MLLM的计算开销。 |
| **[HERO'S JOURNEY: Testing Complex Rule Induction with Text Games](http://arxiv.org/abs/2606.02556v1)** | A. Zheng 等 | 设计八任务规则归纳基准，覆盖属性归纳与程序归纳，测试智能体从演示中推断隐藏规则并多步执行的能力。 |
| **[MCP-Persona: Benchmarking LLM Agents on Real-World Personal Applications via Environment Simulation](http://arxiv.org/abs/2606.02470v1)** | W. Wang 等 | 基于Model Context Protocol构建真实个人应用场景的模拟评估环境，填补通用基准与实际部署间的评估鸿沟。 |
| **[Spectral Audit of In-Context Operator Networks](http://arxiv.org/abs/2606.02427v1)** | Z. Gao 等 | 从频谱分析视角审计神经算子，揭示预测精度与局部动力学结构正确性之间的潜在脱节。 |

---

### 📊 应用（垂直领域、多模态、代码生成）

| 论文 | 作者 | 一句话说明 |
|:---|:---|:---|
| **[ClinEnv: An Interactive Multi-Stage Long Horizon EHR Environment for Agents](http://arxiv.org/abs/2606.02568v1)** | Y. Lu 等 | 构建首个支持多阶段长程决策的交互式EHR环境，突破静态基准无法模拟临床增量信息收集与不可逆决策的局限。 |
| **[Transferable Self-Harm Surveillance from Emergency Department Triage Notes](http://arxiv.org/abs/2606.02545v1)** | L. Chen 等 | 利用证据增强的机器学习从急诊分诊笔记中实现可迁移的自伤监测，灵敏度远超诊断编码。 |
| **[Towards Multidisciplinary Summarization of Hospital Stays](http://arxiv.org/abs/2606.02487v1)** | B. Karacan 等 | 提出NICU多学科病历的句子级临床来源分类，解决异质文本简单聚合导致的信息不一致问题。 |
| **[PaSBench-Video: A Streaming Video Benchmark for Proactive Safety Warning](http://arxiv.org/abs/2606.02443v1)** | Y. Zhao 等 | 面向主动安全预警的流式视频基准，聚焦危险初现到事故发生的关键干预窗口评估。 |
| **[Bridging the Last Mile of Time Series Forecasting with LLM Agents](http://arxiv.org/abs/2606.02497v1)** | Y. Liao 等 | 以LLM智能体弥合统计预测基线与实际业务决策间的"最后一公里"，处理约束整合与人工审核流程。 |

---

## 研究趋势信号

**智能体安全评估正从"能力证明"转向"防线穿透测试"**。HLL以CAPTCHA为锚点，RASER关注成本攻击面，SkillHarm和Ghost Tool Calls分别暴露技能供应链与投机推理的隐私风险，形成"验证突破-经济消耗-供应链污染-侧信道泄露"的四维威胁模型。同期**临床AI出现环境化转向**：ClinEnv、Iteris等工作强调交互式、长程、不可逆决策的仿真，反映该领域对静态基准局限性的集体觉醒。此外，**扩散架构的推理优化**（SimSD、Drifting Preference Optimization）与**视频时序压缩**（AdaCodec、Moment-Video）共同指向一个目标：降低非自回归生成模型的部署门槛。

---

## 值得精读

### 1. [Ghost Tool Calls: Issue-Time Privacy for Speculative Agent Tools](http://arxiv.org/abs/2606.02483v1)
**理由**：投机性工具调用是智能体架构的关键优化方向（如OpenAI的function calling优化），但本文首次揭示其"意图预泄露"的隐私悖论——未确认的分支调用已向外部服务暴露用户推断意图。提出的"幽灵调用"机制（延迟绑定+承诺验证）在性能与隐私间取得平衡，对MCP生态的标准化具有直接政策影响。

### 2. [ClinEnv: An Interactive Multi-Stage Long Horizon EHR Environment for Agents](http://arxiv.org/abs/2606.02568v1)
**理由**：临床AI的基准危机长期存在（静态选择题 vs. 动态信息收集），本文构建的交互式EHR环境支持"增量信息获取-不可逆决策-长程后果"的真实临床逻辑。其与同期两篇临床NLP工作（自伤监测、多学科摘要）形成方法论呼应，代表医疗AI从"问答准确率"向"决策过程有效性"的范式迁移。

### 3. [AdaCodec: A Predictive Visual Code for Video MLLMs](http://arxiv.org/abs/2606.02569v1)
**理由**：视频MLLM的token爆炸是行业痛点，本文从信息论视角重构视觉编码——利用帧间预测残差替代独立RGB编码，将时序冗余转化为计算节省。该方法与现有帧采样策略正交互补，且与Moment-Video的"瞬时事件保真"诊断形成技术-评估的完整闭环，具备快速工程落地的潜力。

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*