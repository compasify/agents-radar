# Hugging Face 热门模型日报 2026-07-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-21 01:27 UTC

---

好的，作为AI模型生态分析师，以下是基于您提供的2026年7月21日数据生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026年7月21日**

#### **今日速览**

本周 Hugging Face 生态呈现两大核心趋势：**极限量化**和**视觉-语言模型（VLM）爆发**。由 `prism-ml` 主导的“盆景”系列（Bonsai）凭借1-bit和三元量化（Ternary）技术，将27B参数模型压缩到极低大小，引发下载狂潮。同时，基于 Qwen 3.5/3.6 的一系列多模态模型（如 `Qwythos`、`Qwen3.6-35B-A3B`）成为社区微调与量化的核心基座，占据榜单多数席位。值得注意的是，百度开源的 `Unlimited-OCR` 和谷歌的 `Gemma-4-31B-it` 凭借卓越性能与庞大下载量，显示出大型科技公司在开源领域的持续影响力。

---

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,226 | 531,947 | GLM 系列的最新版本，采用 MoE-DSA 架构，本周获得最高点赞数，显示出强大的社区关注度。 |
| [tencent/Hy3](https://huggingface.co/tencent/Hy3) | tencent | 847 | 13,698 | 腾讯混元大模型的最新迭代，在文本生成任务上表现优异，是近期最受关注的企业级开源模型之一。 |
| [AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF) | AngelSlim | 149 | 109,749 | 腾讯 `Hy3` 模型的 GGUF 量化版，高下载量表明社区对在本地部署该最新大模型的强烈需求。 |
| [GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking) | GnLOLot | 159 | 5,494 | 基于 MiniCPM-5 的有趣微调实验，旨在融合 Claude 风格和“思考”能力，定位于小型高效推理模型。 |

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,438 | 2,122,848 | 百度推出的全能OCR模型，作为本周下载量最高的模型之一，展示了其在复杂场景文字识别上的顶尖能力。 |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,369 | 2,117,323 | 结合了Qwen架构和Claude风格的多模态模型量化版，因其强大的推理与视觉理解能力而爆红。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,937 | 2,007,025 | 基于 Qwen3.6 的 MoE 模型（35B总参/3B激活），主打高活跃度、无审查的视觉-语言能力，成为社区热门素材。 |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 3,296 | 11,987,240 | 谷歌新一代多模态旗舰模型，以惊人的下载量证明其在性能和实用性上的标杆地位，是本周绝对霸主。 |
| [Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B) | Wan-AI | 145 | 2,408 | 专注图像到视频生成的模型，专注于人类舞蹈动作生成，是文生视频领域的有益补充。 |
| [OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 290 | 87,533 | 专为音频转写和说话人日志（Speaker Diarization）设计的模型，显示出对复杂音频处理场景的专注。 |

##### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,174 | 713,992 | 月之暗面推出的代码专用模型，在压缩和功能提取方面表现突出，是针对编程任务的强大工具。 |
| [nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16) | nvidia | 86 | 61,708 | 英伟达推出的1B参数嵌入模型，专为句子相似度任务设计，是企业级RAG和语义搜索的理想选择。 |
| [openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 134 | 0 | 开箱即用的机器人操作模型，展示了视觉-语言-动作（VLA）领域向小模型和实际应用落地的探索。 |
| [Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle) | Cactus-Compute | 292 | 950 | 基于 JAX 的函数调用和工具使用模型，虽然下载量不大，但在技术方向上值得关注。 |

##### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 854 | 338,945 | 采用创新的三元量化（Ternary）技术，实现了27B模型的极高压缩率，是极限量化的代表性作品。 |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 542 | 1,262,894 | 1-bit量化版本的Bonsai模型，下载量巨大，说明开发者对极致低比特量化的热烈追捧。 |
| [prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit) | prism-ml | 154 | 21,690 | 专为苹果M系列芯片优化的MLX格式1-bit量化版，是Apple生态内高效推理的利器。 |
| [bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 482 | 10,647 | 在Qwen3.6基础上增强推理能力的微调模型，通过提升“思考”能力来改善回答质量。 |
| [DavidAU/...(较长)...GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 156 | 16,719 | 社区各类微调技巧和风格的“集大成者”，提供“无审查”版本，是社区实验精神的典型代表。 |

---

#### **生态信号**

本周生态信号极强：**1-bit与2-bit量化**正在成为社区新常态，`prism-ml` 的“盆景”系列证明了极端压缩模型拥有海量需求。**Qwen 3.5/3.6 家族**已稳坐社区微调基座的王座，超过半数的热门模型以此为基础，其强大的性能与开放授权促进了生态繁荣。开源权重模型（如 `Gemma-4`、`GLM-5.2`）与社区量化版本（GGUF）的共生关系更加紧密，极大地降低了普通开发者使用大模型的门槛。此外，**OCR** 和 **代码生成** 等垂直领域首次出现下载量前所未有的专用模型，显示出AI应用正在从通用对话走向深度专业化。

---

#### **值得探索**

1.  **探索 [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**: 如果你对在边缘设备或低配电脑上运行大模型感兴趣，这个三元量化模型是必试项。它代表了当前最前沿的模型压缩水平，性能与体积的平衡点极其诱人。

2.  **研究 [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**: 在多模态领域，该模型在OCR任务上实现了“无限”潜力。对于任何涉及文档处理、票据识别或数字化场景的开发者，这个模型可能一次性解决了所有问题。

3.  **体验 [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**: 作为本周下载量冠军，Gemma-4代表了硅谷巨头在开源多模态领域的顶级水准。直接体验最新的模型能力，是评估当前AI能力天花板的最佳方式。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*