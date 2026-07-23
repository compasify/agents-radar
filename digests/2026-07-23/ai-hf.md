# Hugging Face 热门模型日报 2026-07-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-23 01:45 UTC

---

好的，作为 AI 模型生态分析师，以下是基于 2026-07-23 Hugging Face Hub 数据生成的热门模型日报。

---

## Hugging Face 热门模型日报 (2026-07-23)

### 今日速览

本周 Hugging Face 生态由**多模态模型**和**极致量化**两大趋势主导。**百度**的 `Unlimited-OCR` 与 **Google** 的 `Gemma-4-31B-it` 展现了强大多模态能力的巨大吸引力，下载量分别突破百万和千万级别。与此同时，量化社区异常活跃，`prism-ml` 的 `1-bit` Bonsai 系列与 `empero-ai` 的 Qwythos 等作品证明了用户对高效、可本地部署模型的旺盛需求。此外，来自 **Moonshot AI** 和 **NVIDIA** 的代码、机器人及语音识别专用模型也表现抢眼，标志着模型生态正走向多元化和场景化。

### 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,337 | 545,109 | 本周点赞最高的文本生成模型，基于 MoE 架构的 GLM 系列最新版，在对话任务上表现出色。 |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 394 | 3,056 | 基于 transformer 的文本生成模型，其衍生出的 GGUF 及 NVFP4 版本形成了小生态，有持续关注度。 |
| [Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif-Technologies | 161 | 125 | 新晋模型家族 Motif 的第三个版本，专注于特征提取，目前处于早期发布阶段，值得关注其后续进展。 |

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,714 | 2,237,351 | 百度发布的超强 OCR 模型，下载量高企，在图像文本识别任务上具备通用性和强鲁棒性。 |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 3,328 | 12,113,203 | Google 最新的开源多模态模型，支持图像和文本输入，下载量超过1200万，生态影响力巨大。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored...](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,001 | 1,997,690 | 基于 Qwen3.6 的社区微调版，采用 MoE 和视觉能力，主打无审查，下载量和点赞数都很高。 |
| [empero-ai/Qwythos-9B-Claude-Mythos...](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,417 | 2,133,420 | 基于 Qwen3.5 的社区量化微调模型，支持推理能力，GGUF 格式使其在本地部署场景极受欢迎。 |
| [microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 124 | 0 | 微软发布的文本到图像生成模型，基于 diffusers 框架，代表了图像生成领域的最新探索。 |
| [nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge) | nvidia | 90 | 6,623 | NVIDIA Cosmos 世界模型系列的边缘计算版本，专注于为具身智能提供轻量化多模态理解能力。 |
| [Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Alissonerdx | 235 | 0 | 用于文本到视频生成的 LoRA 模型，专注于身份保持，展示了视频生成领域的细分化定制趋势。 |

#### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,224 | 722,058 | Moonshot AI 开源的代码专用模型，支持多模态输入，采用压缩技术，在代码生成任务上具有强劲竞争力。 |
| [openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 154 | 58 | 面向机器人操作的视觉-语言-动作（VLA）模型，展示了语言大模型向物理世界交互延伸的探索。 |
| [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 914 | 590,230 | NVIDIA 推出的流式语音识别模型，参数仅 0.6B，兼具高性能和高效率，非常适用于实时场景。 |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 249 | 17,162 | 基于 Qwen3.5 的 OCR 专用模型，在特定场景下可视为百度 Unlimited-OCR 的轻量级备选方案。 |
| [OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 308 | 92,265 | 专注于语音转录和说话人分离的音频文本模型，填补了开源生态中此类专用模型的空白。 |

#### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 596 | 1,404,962 | 极致量化的代表，将 27B 模型压缩至 1-bit，下载量超140万，引发社区对于极低比特模型潜力的广泛讨论。 |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 945 | 432,196 | Bonsai 系列的三元量化版本（2-bit），在模型大小与性能间取得新的平衡点，受到社区欢迎。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion...](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 321 | 62,842 | 基于 Qwen3.6 的社区高阶微调模型，通过大量微调融合技术，主打无审查和高性能。 |
| [unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 108 | 0 | 知名微调工具团队 unsloth 提供的 Laguna 模型量化版本，保证了高效部署的便捷性。 |

### 生态信号

本周生态呈现**头部聚集**与**长尾创新**并存的格局。**多模态**是绝对主线：Google 的 Gemma-4 和百度 Unlimited-OCR 证明，高质量开源多模态模型能迅速聚拢巨大流量。同时，以 **Qwen3.5/3.6** 和 **GLM** 为代表的模型家族，已成为社区二创和微调的核心基座，生态势能强劲。在部署侧，`prism-ml` 的 **1-bit / 2-bit** 量化实验引发广泛关注，标志着“模型瘦身”进入全新前沿，用户对可在本地设备运行的极致高效模型需求迫切。此外，如 **MiniCPM** 的机器人模型和 **NVIDIA** 的流式 ASR，预示着垂直场景的专用模型正成为开源社区新的增长点。

### 值得探索

1.  **`prism-ml/Bonsai-27B-gguf`**: 这款 1-bit 量化模型值得深入研究。它不仅能让你在消费级硬件上运行一个 27B 模型，更是探索“模型压缩极限”和“极低精度推理”的绝佳实验平台，其实际能力与性能的 trade-off 非常值得分析。
2.  **`baidu/Unlimited-OCR`**: 对于任何涉及图像中文字提取（如文档数字化、票据识别、场景文字理解）的场景，这是本日无可争议的首选。其超高的下载量和百度背书，意味着它是一个经过大规模验证的、可直接应用于生产的解决方案。
3.  **`openbmb/MiniCPM-RobotManip` 与 `MiniCPM-RobotTrack`**: 这两个模型是“具身智能”浪潮在开源社区的早期产物。如果你对 AI 与物理世界交互感兴趣，这组模型是研究如何将 VLM 能力迁移到机器人控制任务的绝佳起点，代表了未来智能体的发展方向之一。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*