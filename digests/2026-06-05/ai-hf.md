# Hugging Face 热门模型日报 2026-06-05

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-05 00:28 UTC

---

好的，作为AI模型生态分析师，以下是基于您提供的2026年6月5日数据生成的《Hugging Face 热门模型日报》。

---

### 《Hugging Face 热门模型日报》 | 2026年6月5日

#### 今日速览

本周Hugging Face生态呈现“巨头对决”与“垂直创新”并行的态势。DeepSeek-V4系列（Pro和Flash双版本）以压倒性的点赞和下载量成为最热焦点，标志着开源MoE模型在性能与效率上达到新高度。与此同时，英伟达（NVIDIA）通过`LocateAnything`和`Cosmos3`系列在通用感知与3D/视频生成领域全面出击。值得关注的是，社区对于**量化模型（GGUF）** 的旺盛需求持续，多个热门模型（如Gemma-4、Step-3.7）的GGUF版本紧随其后进入榜单，表明本地化部署和高效推理已成为硬需求。

#### 热门模型

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **deepseek-ai/DeepSeek-V4-Pro** ([链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro))
  - 作者: deepseek-ai | 点赞: 4,629 | 下载: 5,687,031
  - 一句话说明： 本周“最重磅”模型，DeepSeek第四代旗舰级MoE模型。凭借顶尖性能和开源策略，一举拿下最高点赞与海量下载，是当前最炙手可热的通用对话与推理模型。
- **deepseek-ai/DeepSeek-V4-Flash** ([链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash))
  - 作者: deepseek-ai | 点赞: 1,402 | 下载: 3,503,796
  - 一句话说明： DeepSeek-V4的“闪电版”，在保持强大性能的同时，通过架构优化显著提升推理速度，兼顾了能力与效率。
- **Qwen/Qwen3.6-27B** ([链接](https://huggingface.co/Qwen/Qwen3.6-27B))
  - 作者: Qwen | 点赞: 1,613 | 下载: 5,440,074
  - 一句话说明： 阿里通义千问系列的最新力作，具备强大的图文理解能力。下载量紧随DeepSeek-V4-Pro之后，展示了其在多模态领域的强大用户基础。
- **LiquidAI/LFM2.5-8B-A1B** ([链接](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B))
  - 作者: LiquidAI | 点赞: 507 | 下载: 72,114
  - 一句话说明： Liquid AI推出的基于LFM 2.5架构的MoE模型，主打在较小参数量（8B总参，1B活跃）下实现高效推理，代表了“小而美”与效率优化的趋势。
- **JetBrains/Mellum2-12B-A2.5B-Thinking** ([链接](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking))
  - 作者: JetBrains | 点赞: 201 | 下载: 12,157
  - 一句话说明： JetBrains推出的专注于推理与思考的MoE模型，目标是为编程助手等应用提供更强的逻辑能力。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **nvidia/LocateAnything-3B** ([链接](https://huggingface.co/nvidia/LocateAnything-3B))
  - 作者: nvidia | 点赞: 1,281 | 下载: 91,834
  - 一句话说明： 英伟达推出的通用目标定位模型，能根据文本或图像提示定位图像/视频中的任意物体，功能强大且通用。
- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** ([链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive))
  - 作者: HauhauCS | 点赞: 1,400 | 下载: 2,646,756
  - 一句话说明： 基于Qwen3.6的社区微调版本，主打“去审查”和“激进”风格，下载量惊人，反映了社区对特定风格模型的强烈需求。
- **SulphurAI/Sulphur-2-base** ([链接](https://huggingface.co/SulphurAI/Sulphur-2-base))
  - 作者: SulphurAI | 点赞: 1,548 | 下载: 1,678,259
  - 一句话说明： 基于LTX-2.3基础模型进行量化与微调的视频生成模型，在社区中广受欢迎，是视频生成领域量化部署的典范。
- **openbmb/MiniCPM5-1B** ([链接](https://huggingface.co/openbmb/MiniCPM5-1B))
  - 作者: openbmb | 点赞: 768 | 下载: 79,427
  - 一句话说明： 面壁智能推出的极致轻量级端侧模型（1B参数），证明了在极小参数量下也能实现有竞争力的语言理解与生成能力。
- **meituan-longcat/LongCat-Video-Avatar-1.5** ([链接](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5))
  - 作者: meituan-longcat | 点赞: 516 | 下载: 381
  - 一句话说明： 美团推出的音频/文本驱动的数字人视频生成模型，专注于生成高质量、长时长的动态人像视频。
- **nvidia/Cosmos3-Nano / Cosmos3-Super** 及衍生模型（[链接](https://huggingface.co/nvidia/Cosmos3-Nano)）
  - 作者: nvidia | 点赞: ~102-162 | 下载: ~899-17,903
  - 一句话说明： 英伟达Cosmos3系列，覆盖Nano到Super等多个规模，提供从文本到图像、图像到视频的全链路生成能力，是构建“世界模型”的基础组件。
- **ideogram-ai/ideogram-4-fp8 / nf4** ([链接](https://huggingface.co/ideogram-ai/ideogram-4-fp8))
  - 作者: ideogram-ai | 点赞: ~158-201 | 下载: ~310-398
  - 一句话说明： Ideogram第四代文生图模型，提供了FP8和NF4两种量化版本，旨在降低显存占用，让高端图像生成模型更容易在消费级硬件上运行。
- **ByteDance/Bernini-R** ([链接](https://huggingface.co/ByteDance/Bernini-R))
  - 作者: ByteDance | 点赞: 120 | 下载: 129
  - 一句话说明： 字节跳动推出的图像+文本到视频的渲染模型，是视频生成领域的新探索，研究属性较强。
- **PaddlePaddle/PaddleOCR-VL-1.6** ([链接](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6))
  - 作者: PaddlePaddle | 点赞: 230 | 下载: 5,970
  - 一句话说明： 百度飞桨最新版视觉语言OCR模型，将OCR与多模态理解结合，用于文档分析和场景文字识别。
- **OpenMOSS-Team/MOSS-TTS-v1.5** ([链接](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-v1.5))
  - 作者: OpenMOSS-Team | 点赞: 144 | 下载: 28,331
  - 一句话说明： 来自复旦MOSS团队的中文文本到语音模型，专注于高表现力的中文语音合成。
- **NemoStation/Marlin-2B** ([链接](https://huggingface.co/NemoStation/Marlin-2B))
  - 作者: NemoStation | 点赞: 518 | 下载: 18,942
  - 一句话说明： 一个2B参数的视频理解模型（video-text-to-text），能够理解视频内容并进行对话或分析，端侧属性强。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

- **sapientinc/HRM-Text-1B** ([链接](https://huggingface.co/sapientinc/HRM-Text-1B))
  - 作者: sapientinc | 点赞: 615 | 下载: 157,457
  - 一句话说明： 专注于“人力资源管理”（HRM）领域的1B参数文本生成模型，代表了AI在垂直业务场景精细化的趋势。
- **nvidia/PiD** ([链接](https://huggingface.co/nvidia/PiD))
  - 作者: nvidia | 点赞: 302 | 下载: 852
  - 一句话说明： 英伟达推出的图像超分辨率模型，专注于提升低分辨率图像的质量，属于经典的专用图像处理任务。
- **nvidia/Qwen3.6-35B-A3B-NVFP4** ([链接](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4))
  - 作者: nvidia | 点赞: 177 | 下载: 629,244
  - 一句话说明： 英伟达使用其Model Optimizer工具量化后的Qwen MoE模型，采用了创新的4-bit浮点格式(NVFP4)，展示了硬件厂商推动模型最优部署的努力。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **unsloth/gemma-4-12b-it-GGUF** ([链接](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF))
  - 作者: unsloth | 点赞: 284 | 下载: 62,850
  - 一句话说明： 著名高效微调/量化团队Unsloth为Google Gemma-4模型制作的GGUF版本，降低了Gemma-4的本地部署门槛。
- **LiquidAI/LFM2.5-8B-A1B-GGUF** ([链接](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF))
  - 作者: LiquidAI | 点赞: 182 | 下载: 102,119
  - 一句话说明： Liquid官方为自家LFM2.5模型提供的GGUF版本，方便在llama.cpp等框架下运行，瞄准边缘部署场景。
- **stepfun-ai/Step-3.7-Flash-GGUF** ([链接](https://huggingface.co/stepfun-ai/Step-3.7-Flash-GGUF))
  - 作者: stepfun-ai | 点赞: 106 | 下载: 44,434
  - 一句话说明： 阶跃星辰为Step-3.7-Flash多模态模型提供的GGUF量化版本，便于开发者本地运行和测试。
- **unsloth/Qwen3.6-27B-MTP-GGUF** ([链接](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF))
  - 作者: unsloth | 点赞: 645 | 下载: 1,063,964
  - 一句话说明： Unsloth团队为Qwen3.6-27B推出的MTP（Multi-Turn Prompt？）优化GGUF版本，下载量巨大，是社区最受欢迎的Qwen3.6量化版本之一。

#### 生态信号

1.  **DeepSeek与Qwen形成双寡头，MoE架构成为主流**：DeepSeek-V4和Qwen3.6系列，尤其是它们的MoE变体，几乎垄断了榜单上游。这表明社区对大参数、高性能、稀疏激活的MoE模型有极强偏好。开源顶级模型的竞争，已经从“谁更大”转向“谁更聪明且更省算力”。
2.  **从“可用”到“好用”，部署与量化生态成熟**：DeepSeek、Gemma-4、Step-3.7等几乎所有热门模型，都紧随其后发布了GGUF或特定的量化版本（如NVFP4）。这说明模型开发者的工作流已深度整合部署环节。Unsloth等工具链团队成为模型快速普及的关键推手。
3.  **多模态全面开花，视频生成仍是重要热点**：榜单中超过一半的模型涉及多模态（图像/视频理解或生成）。从Nvidia的通用定位与Cosmos系列，到SulphurAI的视频生成，再到Meituan的数字人，应用场景非常广泛。视频生成领域，除了文生视频，图生视频和数字人生成也成为重要的细分赛道。

#### 值得探索

1.  **deepseek-ai/DeepSeek-V4-Pro**：毫无疑问的榜首模型。强烈建议深入研究其技术报告（如果有）或直接体验，以感受当前开源MoE模型在复杂推理、代码生成和多语言对话上的天花板。
2.  **nvidia/LocateAnything-3B**：一个非常有趣的通用模型。它跳出了常见的对话或生成范式，专注于“定位”这一基础能力。可以尝试将其作为工具，集成到现有的计算机视觉或机器人项目中，探索其在零样本目标检测和分割上的潜力。
3.  **openbmb/MiniCPM5-1B**：对于关注边缘计算和移动端AI的开发者来说，这个模型是必看的。它展示了在1B这样的极小规模下，语言模型能有多强大的表现力。将其与主流7B/13B模型进行对比测试，能直观感受“小模型”的能力边界。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*