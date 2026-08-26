# ArXiv AI 研究日报 2026-08-26

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-08-26 00:00 UTC

---

# ArXiv AI 研究日报

**日期：2026-08-26** · 共收录 50 篇论文（cs.AI / cs.CL / cs.LG）

---

## 今日速览

今日最突出的信号是 **LLM 智能体的系统性安全风险**：针对 agent 记忆子系统的注入攻击（InjecMEM）、怪异泛化威胁模型（Weird Generalization）、推理诱导错位（Safety-Direction Penalty）与多智能体"交互税"（Interaction Tax）同时出现，显示研究焦点正从单模型能力扩展到 agent 生态的鲁棒性。**长时程能力**是另一大主线——仓库级重构基准（SWE Refactor Bench）、长时程记忆世界模型（ReWorld）与自反思策略优化（SRPO）均致力于突破单轮交互限制。理论方面，ConvergeFlow 为连续流式语言模型提供了可证明的收敛保证。垂直应用则覆盖道路安全审计、VLA 行为意图蒸馏等方向。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [ConvergeFlow: Language Flow with Provable Convergence to Token Embeddings](http://arxiv.org/abs/2608.23551v1) | Na Li, Yuchen Jiao, Changxiao Cai et al. | 提出可证明收敛到 token embedding 的连续语言流模型，解决了流轨迹不保证终止于合法 token 的理论缺口。这一保证令连续框架摆脱对交叉熵解码器的依赖，是与离散 LM 竞争的关键一步。 |
| [Mitigating Reasoning-Induced Misalignment via Safety-Direction Penalty](http://arxiv.org/abs/2608.23497v1) | Yipeng Zhao, Qishun Yang, Shenzhe Zhu et al. | 发现仅含数学、代码等无害内容的推理数据微调也会诱发 LLM 有害行为，并提出安全方向惩罚进行抑制。该方法跨架构有效，直击 LLM 推理能力与安全对齐之间的张力。 |
| [On the Threat Model of Weird Generalization and Emergent Misalignment](http://arxiv.org/abs/2608.23476v1) | Miriam Wanner, Mark Dredze, William Walden | 系统研究了窄域小数据集微调引发广泛行为变化（怪异泛化）与紧急错位现象的威胁模型。厘清了触发该现象所需的数据特征，对安全评估与数据筛选具有直接指导意义。 |
| [What's the Catch? Evaluating Temporal Consistency in Vision-Language Models](http://arxiv.org/abs/2608.23474v1) | Marek Hradil, Danae Sánchez Villegas | 将时间接地评估转化为异常检测问题，提出一种简单受控的 VLM 时间一致性评测方法。实验结果提示当前 VLM 对视频与图像序列时间结构的理解可能被显著高估。 |

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [Prime Agent: A Self-Improving RLM Harness](http://arxiv.org/abs/2608.23552v1) | Seth Karten, Alex L. Zhang, Kevin Thomas et al. | 开源的自改进 RLM harness，通过持久 IPython REPL 与递归语言模型支持长时程编码智能体工作流。为长时程智能体评估与编码场景提供了完整可复现的工程基础设施。 |
| [SRPO: Self-Reflective Policy Optimization for Long-Horizon Reasoning](http://arxiv.org/abs/2608.23493v1) | Jialong Liu, Yuling Shi, Ning Yang et al. | 提出自我反思策略优化（SRPO），将稀疏的结果反馈转化为细粒度的自我反思信号，用于 LLM 长时程推理后训练。相比传统 RL 方法，在信用分配与训练稳定性上展现了明显优势。 |
| [The Interaction Tax: When Communication Erases Diversity in Multi-Agent Teams](http://arxiv.org/abs/2608.23541v1) | Summer Eunhyung Ann, Haokun Liu, Chenhao Tan | 通过对照实验揭示多智能体 LLM 交互可能消除团队多样性并净损失性能，提出"交互税"概念。对当前 debate、critique 等交互增强范式的有效性提出了重要反思。 |
| [SkillAlchemy: Open-World Agent Skill Creation](http://arxiv.org/abs/2608.23417v1) | Hengjun Wang, Shuyue Wei, Boyi Liu et al. | 提出从执行痕迹与无标注经验中自动合成 agent 技能的方法，降低对人工编写技能的依赖。面向开放世界场景，为可复用技能库的规模化构建探索了新路径。 |
| [ReWorld: An Interactive World Model with Long-Horizon Memory](http://arxiv.org/abs/2608.23565v1) | Zhifei Chen, Luozhou Wang, Guibao Shen et al. | 提出分离控制与记忆的交互式世界模型架构：训练时解耦、推理时约束，以同时满足短时程控制与长时程记忆需求。为可实时流式交互的世界模型提供了新的设计范式。 |

### 🔧 方法与框架（新技术、基准测试、效率优化）

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [SWE Refactor Bench: Can Coding Agents Complete a Long-Horizon, Whole-Repository Stack Migration?](http://arxiv.org/abs/2608.23564v1) | Deyao Hong, Yizhe Chi, Wenyi Li et al. | 首个面向整个仓库堆栈迁移任务的 coding agent 基准，考验长时程规划与大规模重构能力。填补了现有基准局限于 bug 修复、无法评估自主迁移能力的空白。 |
| [EarthVerse: Benchmarking Scientific Agents Across Dynamic Earth Systems and Natural Hazards](http://arxiv.org/abs/2608.23525v1) | Zhiqing Cui, Xinxiang Yin, Yihong Tang et al. | 面向动态地球系统与自然灾害分析的科学智能体基准，覆盖多源异构观测数据与复杂时空推理。为科学智能体在高风险地球科学场景中的系统评估提供了统一平台。 |
| [InjecMEM: Memory Injection Attack on LLM Agent Memory Systems](http://arxiv.org/abs/2608.23471v1) | Hanling Tian, Gengyu Zhang, Zeyang Sha et al. | 提出仅需少量恶意文本即可实施的记忆注入攻击范式，污染 LLM agent 的持久记忆子系统。揭示了记忆作为 agent 默认子系统所引入的全新安全攻击面。 |
| [How to Train a Critic Stably and Efficiently](http://arxiv.org/abs/2608.23566v1) | Penghui Qi, Xiangxin Zhou, Wee Sun Lee | 研究了如何稳定高效地训练 critic 以估计 token 级优势，替代 GRPO 等多响应采样方法。直面 LLM RL 中 critic 训练不稳定的核心痛点，为单响应路径的价值估计提供了改进配方。 |

### 📊 应用（垂直领域、多模态、代码生成）

| 论文 | 作者 | 简要说明 |
| :--- | :--- | :--- |
| [EG-ARSA: An Expert-Grounded Open Model for Visual Road Safety Auditing in Low-Resource Settings](http://arxiv.org/abs/2608.23563v1) | Md Thamed Bin Zaman Chowdhury, Moazzem Hossain | 面向低资源环境提出专家引导的开放道路安全审计模型，以缓解道路审计中标注稀缺与审计师短缺问题。填补了视觉道路安全审计在低中等收入国家落地的应用空白。 |
| [Act with Intent: Distilling Behavior Intent for Vision-Language-Action Models](http://arxiv.org/abs/2608.23478v1) | Sangoh Lee, Sangwoo Mo, Wook-Shin Han | 为 VLA 模型引入行为意图蒸馏，使动作解码器学习行为背后的局部目标而非简单行为克隆。在机器人多模态指令控制上表现出更强的泛化能力。 |

---

## 研究趋势信号

今日投稿呈现三条明确信号。**其一，安全边界外扩**：攻击与对齐研究从模型权重本身转向 agent 的记忆、通信与微调数据流（InjecMEM、Interaction Tax、Weird Generalization），智能体系统风险正成为研究主流。**其二，长时程能力堆栈**：仓库级重构基准（SWE Refactor Bench）、世界模型长时记忆（ReWorld）、自反思 RL（SRPO）共同推动 agent 突破单轮交互与单文件修复的局限。**其三，理论回归与科学落地**：连续 LM 收敛保证（ConvergeFlow）、扩散采样自适应理论、influence function 归因等理论工作增多；同时地球科学智能体基准（EarthVerse）、临床结局预测等科学应用持续深化。

---

## 值得精读

1. **SWE Refactor Bench**（[链接](http://arxiv.org/abs/2608.23564v1)）——将编码 agent 的评估尺度从 bug 修复提升到整个仓库的堆栈迁移，是长时程规划与大规模重构能力的现实试金石，对判断 Agent 能力上限具有重要参考价值。

2. **InjecMEM**（[链接](http://arxiv.org/abs/2608.23471v1)）——系统性揭示 agent 记忆系统这一默认组件的攻击面，且攻击成本极低。对 LLM agent 的安全部署具有直接的警示意义，值得所有 agent 框架设计者关注。

3. **ConvergeFlow**（[链接](http://arxiv.org/abs/2608.23551v1)）——补上了连续流式语言模型缺乏收敛保证的关键理论缺口，是理解连续扩散 LM 能力边界与改进方向的重要基础，兼具理论深度与实用价值。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*