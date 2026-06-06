# Hugging Face 热门模型日报 2026-06-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-06 00:27 UTC

---

# Hugging Face 热门模型日报 | 2026-06-06

---

## 今日速览

本周 Hugging Face 热度由 **DeepSeek-V4 系列** 绝对领跑，Pro 版以 4657 点赞、556 万下载碾压全场，Flash 版紧随其后。多模态赛道持续升温，NVIDIA 密集发布 Cosmos3 系列（Nano/Super 及衍生版本）与 LocateAnything-3B，展现其在视觉定位与世界模型上的野心。社区量化生态活跃，unsloth 的 GGUF 版本下载量高企，而 SulphurAI 的文本到视频模型异军突起，成为生成式 AI 黑马。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,657 | 5,562,821 | 本周绝对王者，下一代 MoE 架构对话模型，以极高效率实现 Pro 级性能，下载量证明其已成为开源推理基础设施首选。 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,412 | 3,473,265 | V4 系列的极速版本，MIT 协议更开放，在延迟敏感场景与商业化部署中快速渗透。 |
| **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | google | 545 | 142,851 | Google Gemma 4 代首个 any-to-any 统一模型，原生支持多模态输入输出，标志轻量级通用模型新范式。 |
| **[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)** | google | 336 | 53,525 | Gemma-4 基座版本，为社区微调和领域适配提供高质量起点。 |
| **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** | LiquidAI | 526 | 82,709 | 液态神经网络架构的 MoE 迭代，以极低激活参数实现高效推理，代表非 Transformer 路线的持续探索。 |
| **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 702 | 159,014 | 专注人力资源场景的 1B 级文本模型，垂直领域小模型实用性获社区认可。 |
| **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)** | JetBrains | 224 | 14,709 | JetBrains 推出的代码思考模型，显式推理链设计专为 IDE 智能体场景优化。 |
| **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** | openbmb | 770 | 91,235 | 面壁智能第五代端侧小钢炮，1B 参数挑战 7B 级性能，端侧部署性价比标杆。 |
| **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)** | nvidia | 117 | 9,125 | NVIDIA 自研 550B 总参/55B 激活的 MoE 巨兽，BF16 原生精度面向企业级训练与推理。 |
| **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4)** | nvidia | 107 | 7,419 | 同上架构的 NVFP4 量化版本，NVIDIA 专有格式展示硬件-模型协同优化路径。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 1,375 | 101,823 | NVIDIA 视觉定位新标杆，3B 参数实现开放词汇的任意目标定位，机器人与 AR 场景关键基础设施。 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,450 | 2,687,304 | 社区去审查版 Qwen3.6 MoE，下载量爆炸反映对开放多模态能力的强烈需求，但伦理风险引关注。 |
| **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)** | stepfun-ai | 332 | 27,948 | 阶跃星辰 3.7 代视觉语言模型，Flash 版本平衡速度与理解精度，国产多模态力量持续输出。 |
| **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** | ideogram-ai | 269 | 1,246 | Ideogram 4 代 FP8 精度版本，文本渲染与排版能力业界领先，设计工作流核心工具。 |
| **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)** | ideogram-ai | 191 | 1,594 | 同上 NF4 量化版，更低显存门槛推动消费级图像生成普及。 |
| **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)** | PaddlePaddle | 245 | 6,881 | 基于 ERNIE4.5 的 OCR 视觉语言模型，文档理解向通用视觉推理跃迁。 |
| **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** | ByteDance | 140 | 175 | 字节跳动图像到视频渲染模型，Apache 2.0 协议罕见开放，视频生成可控性新突破。 |
| **[nvidia/PiD](https://huggingface.co/nvidia/PiD)** | nvidia | 310 | 901 | 图像超分辨率专用模型，扩散架构在像素级重建任务上的精致打磨。 |
| **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)** | meituan-longcat | 519 | 1,675 | 美团长猫团队的音频驱动视频数字人，ONNX 多端部署指向实时交互应用。 |
| **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | bosonai | 118 | 408 | Higgs 多模态系列的 TTS 分支，4B 参数追求合成自然度的边际提升。 |
| **[MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS)** | MisoLabs | 111 | 0 | 新兴 TTS 架构，零下载量或预示即将发布，值得提前关注。 |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 1,565 | 1,691,633 | 本周最大黑马，基于 LTX-2.3 的文本到视频基础模型，169 万下载量证明开源视频生成进入可用时代。 |
| **[nvidia/Cosmos3-Super-Text2Image](https://huggingface.co/nvidia/Cosmos3-Super-Text2Image)** | nvidia | 116 | 1,194 | Cosmos3 世界模型的文生图分支，世界模型统一架构的生成能力验证。 |
| **[nvidia/Cosmos3-Super-Image2Video](https://huggingface.co/nvidia/Cosmos3-Super-Image2Video)** | nvidia | 106 | 1,076 | 同上架构的图生视频版本，物理一致性为视频生成新卖点。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia | 192 | 597 | NVIDIA Nemotron 语音系列，流式缓存感知 ASR，600M 参数瞄准边缘实时转写，下载量低或因企业内网部署。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | unsloth | 374 | 296,410 | Unsloth 极速量化 Gemma-4，29.6 万下载验证其 GGUF 工具链的社区统治力。 |
| **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** | nvidia | 191 | 822,125 | NVIDIA 官方 NVFP4 量化 Qwen3.6 MoE，82 万下载显示硬件厂商深度绑定主流中文模型生态。 |
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 665 | 1,092,323 | Unsloth 多 token 预测版 Qwen3.6 GGUF，109 万下载为本周量化类最高，MTP 技术加速推理获实证认可。 |

---

## 生态信号

**DeepSeek 与 Qwen 构成双引擎格局。** V4-Pro 的 556 万下载量不仅是数字，更标志开源模型首次在"可用性-性能-成本"三角中全维度逼近闭源旗舰。Qwen3.6 家族则通过 NVIDIA 官方量化、Unsloth 社区优化、HauhauCS 激进微调三线并进，显示中文模型已成为全球基础设施层。NVIDIA 本周 8 个上榜模型涵盖视觉定位、世界模型（Cosmos3）、语音、超分、巨型 MoE，其"全栈开源"策略意在锁定下一代 AI 工作流于自家硬件。值得警惕的是，SulphurAI 等匿名/小团队以量化+衍生模型获得超高下载，开源生态的"寄生创新"与原创激励的平衡正在重塑。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | 当前开源 LLM 的性能天花板，MoE 架构的推理成本优化已达生产就绪水平，建议对比测试其在长上下文与复杂推理任务上相对 GPT-5/Claude 4 的性价比边界。 |
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | 3B 参数实现开放词汇定位，参数效率与任务通用性的新基准，机器人、AR、自动驾驶的视觉感知模块可直接集成验证。 |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | 169 万下载量的视频生成模型，基于 LTX-2.3 的社区衍生能否在质量与可控性上超越基座？其爆发式增长暗示开源视频生成正跨越"玩具-工具"临界点。 |

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*