# Hugging Face 热门模型日报 2026-07-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-27 01:51 UTC

---

好的，作为 AI 模型生态分析师，以下是根据您提供的数据生成的《Hugging Face 热门模型日报（2026-07-27）》。

---

### Hugging Face 热门模型日报（2026-07-27）

#### 今日速览

本周 Hugging Face 社区最显著的趋势是围绕 **智谱 GLM-5.2 家族** 和 **百度 Unlimited-OCR** 两大模型的集中爆发。前者凭借超高的点赞迅速成为对话与多模态领域的焦点，而后者则以惊人的下载量证明了工业级 OCR 需求的旺盛。同时，基于 **Qwen3.x** 系列的社区微调异常活跃，涌现出大量“去审查”及风格化变体，形成了一股强劲的创作浪潮。此外，**poolside** 公司的 Laguna-S-2.1 模型及其量化生态表现出强大的生命力，显示了代码与通用领域的双重关注。值得关注的是，专注于机器人操作的 **MiniCPM-RobotManip** 和 **MiniCPM-RobotTrack** 模型的出现，标志着多模态模型向具身智能领域的实质性迈进。

#### 热门模型

##### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,477 | 827,191 | 智谱最新一代 MoE 大模型，基于 DSA 架构，是本周点赞数最高的模型。其在对话任务上的强大表现和开源策略，使其成为社区关注的绝对焦点。 |
| [**Nanbeige/Nanbeige4.2-3B**](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 447 | 14,049 | 一款 3B 参数规模的小型高效 LLM。凭借小巧的体量和不俗的生成能力，吸引了希望低成本部署或进行实验的开发者。 |
| [**Motif-Technologies/Motif-3-Beta**](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif-Technologies | 193 | 2,400 | Motif 技术团队推出的 Beta 版特征提取模型。其独特的“Motif”架构在特定特征提取任务上可能具有创新性，引起了社区的好奇与尝鲜。 |

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | ---: |
| [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,207 | 2,593,460 | 百度推出的通用 OCR 模型，支持图像到文本的识别，下载量在所有模型中高居榜首。其卓越的识别能力和广泛的应用场景，是推动超高下载量的核心原因。 |
| [**thinkingmachines/Inkling**](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,579 | 34,511 | 一款全新的多模态对话模型，集成视觉与语言能力。其“Inkling”命名暗示了其潜在的创意与表达能力，口碑与点赞增长迅猛。 |
| [**moonshotai/Kimi-K2.7-Code**](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,298 | 730,129 | 月之暗面推出的代码专用多模态模型，采用压缩张量技术。高下载量证明了市场对高效、专业编程助手的强烈需求。 |
| [**microsoft/Mage-Flow**](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 334 | 1,375 | 微软的文本到图像与图像编辑工具，注重工作流与编辑能力。作为微软在图像生成领域的代表作，吸引了关注专业级图像处理的用户群。 |
| [**owensong/Inflect-Micro-v2**](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 178 | 298 | 一个轻量级的本地文本转语音（TTS）模型，针对 CPU 和边缘设备优化。尽管体量小，但在隐私和端侧部署场景中具有独特价值。 |
| [**nvidia/Cosmos3-Edge**](https://huggingface.co/nvidia/Cosmos3-Edge) | nvidia | 125 | 32,700 | 英伟达推出的全新的 Cosmso 系列边缘端模型。它代表着高性能生成式 AI 向边缘计算设备迁移的趋势，备受开发者关注。 |
| [**microsoft/Mage-Flow-Edit-Turbo**](https://huggingface.co/microsoft/Mage-Flow-Edit-Turbo) | microsoft | 88 | 946 | Mage-Flow 的 Turbo 版本，专为指令驱动的图像编辑任务优化。它为快速、精准的图像编辑提供了更高效的解决方案。 |

##### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | ---: |
| [**Kwaipilot/KAT-Coder-V2.5-Dev**](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 198 | 3,764 | 基于 Qwen3.5 MoE 架构的代码生成模型。作为专注于代码生成领域的变体，它成功吸引了对特定领域专家模型有兴趣的开发者。 |
| [**openbmb/MiniCPM-RobotManip**](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 177 | 643 | 面向机器人操作任务的视觉-语言-动作（VLA）模型。这是本周最值得关注的行业应用模型之一，标志着多模态模型在机器人领域的落地。 |
| [**openbmb/MiniCPM-RobotTrack**](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | openbmb | 130 | 398 | 与 RobotManip 同系列的机器人目标跟踪模型。进一步补充了 MinicPM 在具身智能领域的功能版图，专注于视觉跟踪与导航。 |
| [**microsoft/Fara1.5-27B**](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 110 | 1,225 | 微软推出的大规模多模态模型，专注于计算机操作（Computer Use）任务。它展示了 AI 从理解内容到理解并操作界面的演进方向。 |
| [**fdtn-ai/antares-1b**](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 186 | 5,978 | 一款强调安全性的新型 1B 参数文本生成模型。在 AI 安全日益受到重视的背景下，这类模型的发布具有重要的行业风向标意义。 |

##### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | ---: |
| [**prism-ml/Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,050 | 631,970 | 极度激进的 2-bit 三元量化 GGUF 模型。它在极度压缩模型体积以适配合法场景的同时，引发了社区对超低精度量化极限的讨论与尝试。 |
| [**prism-ml/Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 651 | 2,187,304 | 同样来自 prism-ml 的 1-bit 量化版本，下载量在量化模型中遥遥领先。该现象表明，社区对极致降低推理成本的量化方案需求巨大。 |
| [**conradlocke/krea2-identity-edit**](https://ghuggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 544 | 0 | 一个专为 Krea-2 模型设计的身份编辑 LoRA，用于图像编辑任务。它以 0 下载量却获得超高点赞，凸出了社区对特定功能型 LoRA 的期待。 |
| [**bottlecapai/ThinkingCap-Qwen3.6-27B**](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 554 | 27,823 | 基于 Qwen3.6 的 27B 思考链微调模型。它将思考链（CoT）能力注入 Qwen 系列，探索了增强推理能力的新路径，点赞数表明了社区的认可。 |
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,112 | 1,927,138 | 基于 Qwen3.6 的“去审查”MOE 量化模型，下载量惊人。它反映了社区对内容限制较少、行为风格更“激进”的模型存在巨大需求，是开源与审查边界讨论的典型案例。 |
| [**empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,480 | 1,410,054 | 结合了 5-1M 推理模型调优技术的 GGUF 量化版本。高点赞与高下载量表明，将先进的推理技术蒸馏并量化到小模型中，具有极高的实用价值。 |
| [**poolside/Laguna-S-2.1-GGUF**](https://huggingface.co/poolside/Laguna-S-2.1-GGUF) | poolside | 143 | 82,187 | Laguna-S-2.1 的官方 GGUF 量化版本。与 unloth 等社区版共同构成了该模型的量化生态，极大方便了用户的本地部署。 |
| [**unsloth/Laguna-S-2.1-GGUF**](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 203 | 102,684 | 由知名微调框架 Unsloth 出品的 Laguna-S-2.1 量化版。其高效的微调和量化能力，为模型在 vLLM 等框架上的使用提供了便捷通道。 |
| [**poolside/Laguna-S-2.1-NVFP4**](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) | poolside | 143 | 138,671 | 使用 NVIDIA FP4 精度格式的 Laguna 模型。这代表了利用专用硬件格式进行深度模型优化的探索，为追求极致推理性能的开发者提供了新选择。 |
| [**baseten/GLM-5.2-Vision-NVFP4**](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4) | baseten | 113 | 2,033 | 针对 GLM-5.2 Vision 模型使用 NVFP4 格式的量化版本。它借助 Baseten 的专业部署能力，将顶级多模态模型的推理效率推向了新高度。 |
| [**ATH-MaaS/OvisOCR2**](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 309 | 35,562 | 基于 Qwen3.5 的先进 OCR 模型。作为 OCR 领域的专用模型，它在基础模型之上进行了针对性优化，满足了特定垂直场景的高精度需求。 |

#### 生态信号

本周生态释放了多个关键信号。**模型家族化趋势明显**：以 **GLM-5.2** 为首，迅速带动了其视觉版（GLM-5.2-Vision）和量化版（NVFP4）的发布，形成了一个从核心到应用的完整家族。同样，**Qwen3.x** 已成为社区微调的热门底座，大量“Uncensored”风格版本涌现，显示了用户对内容自由度的强烈偏好。

**开源与闭源阵营的界限更加模糊**：百度、智谱等国内大厂持续贡献顶级开源模型；而 poolside 则展示了专注领域的垂类大模型生态。

**量化活动空前活跃**：特别是 **GGUF** 格式与**超低精度（1-bit, 2-bit）量化的突破**，如并行推出的 Bonsai 系列，反映了社区在努力将大模型推向消费级硬件。同时，NVFP4 这种专用精度格式的兴起，则表明硬件厂商与模型社区的合作正在加深。

#### 值得探索

1.  **zai-org/GLM-5.2**: 作为本周点赞冠军，它是探索下一代 MoE 架构（DSA）的最佳实践起点。无论是研究其架构创新，还是直接用于构建对话应用，都具有极高价值。
2.  **thinkingmachines/Inkling**: 这款在短时间内积累超 1500 点赞的新兴多模态模型，值得深入探究。其命名和快速蹿升的热度暗示了可能存在的独特能力或训练技巧，是发现下一个爆款模型的潜力股。
3.  **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**: 这款模型成功将强大的推理能力（Mythos-5-1M）压缩并量化为一个 9B 参数的 GGUF 文件。它代表了“能力蒸馏+模型量化”这一高效落地路径，对于在本地部署高性能聊天/推理应用的用户而言，极具研究和实用价值。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*