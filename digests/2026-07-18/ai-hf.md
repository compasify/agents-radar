# Hugging Face 热门模型日报 2026-07-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-18 01:21 UTC

---

好的，这是为您准备的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 (2026-07-18)**

#### **今日速览**

本周社区焦点由 **GLM-5.2** 和 **Qwen** 系列家族引领，多模态模型持续升温。**GLM-5.2** 以绝对点赞数登顶，其 MoE 架构和高效推理能力备受关注。另一方面，以 **Qwen3.6** 为基础的各种微调版本（如 `Qwythos`、`ThinkingCap`）和量化版本（如 `Qwen3.6-27B-NVFP4`）占据了榜单的多数席位，显示出社区对强大基座模型的再创作热情。此外，以 `prism-ml` 为代表的 **极低比特量化**（1-bit、2-bit、三值化）模型成为降低大模型部署门槛的新趋势，下载量惊人。

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,071 | 534,698 | 本周最热模型，采用MoE架构与DSA注意力机制，在保持高质量推理的同时提升了效率，展示了GLM系列的最新进展。 |
| [tencent/Hy3](https://huggingface.co/tencent/Hy3) | tencent | 820 | 12,719 | 腾讯发布的第三代Hunyuan语言模型，专注于文本生成任务，是商业公司在开源社区的重要布局。 |
| [InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1) | InternScience | 572 | 34,066 | 基于Qwen3.5的MoE模型，专为Agent任务设计，支持图像处理与文本生成，是构建智能体的强大基座。 |
| [GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking) | GnLOLot | 134 | 4,840 | 基于MiniCPM-5的1B小参数模型，融入了Claude Opus风格的思维方式，展示了在极小规模下复现复杂推理能力的尝试。 |

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,274 | 2,096,147 | 基于Qwen3.5的视觉语言模型，经过大量数据微调，具备强大推理能力，其GGUF版本下载量极高，说明社区对本地化部署多模态模型的强烈需求。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,827 | 2,295,313 | Qwen3.6的35B超大MoE模型（激活参数3B），以“无审查”和“激进”风格为特色，提供了极强的图像理解与文本生成能力，是社区寻求高自由度体验的热门选择。 |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,019 | 1,992,355 | 百度推出的通用OCR模型，支持几乎无限类型的文字识别，展现了强大的特征提取能力，在文档处理和企业应用场景具有巨大潜力。 |
| [Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B) | Wan-AI | 108 | 2,185 | 专注于**图像到视频**生成的模型，能够根据静态图像生成连贯的人物舞蹈视频，是视频生成领域的一次有趣尝试。 |

##### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 153 | 10,795 | 专门针对OCR任务优化的多模态模型，处理图像文字识别，是百度Unlimited-OCR之外的另一个专业选择。 |
| [Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle) | Cactus-Compute | 257 | 874 | 基于JAX框架的专用模型，专注于函数调用和工具使用，代表了AI Agent在调用外部API和工具能力上的专门化趋势。 |
| [OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 249 | 83,160 | 专注于音频转录与说话人分离（Diarization）任务，能够将录音直接转化为带标注的文字对话记录，在会议纪要等场景中非常实用。 |
| [mgwr/M87](https://huggingface.co/mgwr/M87) | mgwr | 146 | 3,874 | 基于Krea-2的LoRA插件，用于**文本到图像**生成，是社区创作和个性化图像生成的一个典型案例。 |

##### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 679 | 200,774 | **三值化**（2-bit）模型，将27B参数模型压缩至极小体积，允许在普通硬件上运行，是边缘端部署LLM的激进尝试。下载量巨大，受到本地部署爱好者的追捧。 |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 394 | 1,045,182 | Bonsai 27B模型的**1-bit**量化版本，将模型压缩到极致，是追求低资源消耗来运行大型对话模型的典范。 |
| [AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF) | AngelSlim | 122 | 84,834 | 社区成员对腾讯`Hy3`模型的GGUF量化版本，方便用户通过`llama.cpp`等框架在本地CPU/GPU上进行高效推理。 |
| [unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4) | unsloth | 224 | 1,924,495 | 使用Unsloth团队的新技术（NVFP4）对Qwen3.6-27B模型进行量化，在大幅降低显存占用的同时保持了较高的模型精度，下载量极高。 |

#### **生态信号**

- **模型家族势头正旺**：**Qwen（特别是3.5/3.6版本）** 和 **GLM（5.2）** 是目前社区最活跃的两大基座家族。围绕Qwen的微调、量化和多模态扩展非常密集，形成了强大的生态效应。GLM-5.2以其创新的MoE架构和原生支持多模态的特性，成为一股新势力。
- **开源权重主导**：榜单上的模型均为开源权重版本，社区通过发布GGUF、MLX格式或新的微调版本来扩散价值。这表明开源模型在技术迭代和社区活跃度上已完全主导了生态，闭源模型在此榜单中未见身影。
- **量化与微调活动活跃**：极低比特量化（1-bit/2-bit/三值化）成为新热点，`prism-ml` 的系列模型是典型代表，其背后反映了在个人设备上运行超大模型的需求。同时，针对特定任务的微调（如OCR、演讲分离、Agent）持续为大型基座模型注入新的生命力。

#### **值得探索**

1. **🧠 尝试极低比特量化：`prism-ml/Bonsai-27B-gguf`**
   - **理由**：如果你对在低配电脑或笔记本上运行一个27B参数的对话模型感兴趣，这个1-bit量化模型是绝佳的实验对象。它展示了模型压缩的极限，下载量超过100万次也证明了其社区认可度，是探索模型部署硬件的理想选择。

2. **🎨 体验多模态推理：`empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF`**
   - **理由**：这是多模态模型“推理化”的代表，结合了Qwen的视觉能力和Claude的推理风格。其GGUF版本下载量巨大，说明它既强大又易于本地部署。用一张复杂的照片测试它的理解与描述能力，你会很快理解它的价值。

3. **🔧 探索Agent专用模型：`Cactus-Compute/needle`**
   - **理由**：AI Agent是下一个热点方向，但这个模型`needle`是目前少数专门针对函数调用和工具使用进行设计的模型。研究其架构和训练方法，对于理解如何构建一个能够真正“动手”完成任务的AI，非常有启发性。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*