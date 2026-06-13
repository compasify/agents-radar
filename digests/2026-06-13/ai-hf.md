# Hugging Face 热门模型日报 2026-06-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-13 00:32 UTC

---

好的，这是为您生成的《Hugging Face 热门模型日报》。

---

# Hugging Face 热门模型日报 (2026-06-13)

## 今日速览

本周 Hugging Face 生态呈现典型的“多强争霸”格局。**DeepSeek-V4-Pro** 凭借 4,796 点赞稳居本周热度榜首，展示了其作为通用大模型的强大吸引力。**Google Gemini 4** 系列持续爆发，官方及社区衍生出的量化、微调版本（如 `unsloth`、`huihui-ai`）全面开花，成为生态最活跃的家族。**NVIDIA** 也凭借 `LocateAnything-3B` 在多模态细分任务上获得极高关注。此外，社区微调（如 `HauhauCS` 的非审查版本）和量化模型（GGUF）依然是推动模型落地和普及的主要力量。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
- **DeepSeek-V4-Pro** ([链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro))
  - 作者: deepseek-ai | 点赞: 4,796 | 下载: 3,384,418
  - 一句话说明：DeepSeek 的最新旗舰级通用对话模型，凭借顶级性能和强大社区影响力，成为本周最受关注的模型。

- **google/gemma-4-12B-it** ([链接](https://huggingface.co/google/gemma-4-12B-it))
  - 作者: google | 点赞: 966 | 下载: 911,544
  - 一句话说明：Google 官方发布的 Gemma 4 指令微调版，以强大的“any-to-any”多模态处理能力和大量下载量，成为本周的核心模型之一。

- **google/gemma-4-12B** ([链接](https://huggingface.co/google/gemma-4-12B))
  - 作者: google | 点赞: 527 | 下载: 198,271
  - 一句话说明：Gemma 4 的基础版本，为社区进一步的微调和量化提供了坚实基础。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **nvidia/LocateAnything-3B** ([链接](https://huggingface.co/nvidia/LocateAnything-3B))
  - 作者: nvidia | 点赞: 1,925 | 下载: 149,206
  - 一句话说明：NVIDIA 推出的图像定位模型，专注于图像特征提取和定位任务，以其专精和实用性获得社区高度认可。

- **ideogram-ai/ideogram-4-fp8** ([链接](https://huggingface.co/ideogram-ai/ideogram-4-fp8))
  - 作者: ideogram-ai | 点赞: 503 | 下载: 4,987
  - 一句话说明：顶尖 AI 图像生成公司 Ideogram 最新模型的 FP8 量化版，兼顾了高质量图像生成性能与更低的资源消耗。

- **google/magenta-realtime-2** ([链接](https://huggingface.co/google/magenta-realtime-2))
  - 作者: google | 点赞: 184 | 下载: 6,491
  - 一句话说明：Google 推出的新一代实时音频生成模型，为文本到音乐/音频的创作提供了全新的可能。

### 🔧 专用模型（代码、数学、医疗、嵌入）
- **bosonai/higgs-audio-v3-tts-4b** ([链接](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b))
  - 作者: bosonai | 点赞: 386 | 下载: 29,347
  - 一句话说明：专注于文本到语音（TTS）的专用模型，在语音合成领域展现了强大的能力，标志着多模态音频应用的热度上升。

- **nvidia/nemotron-3.5-asr-streaming-0.6b** ([链接](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b))
  - 作者: nvidia | 点赞: 392 | 下载: 3,551
  - 一句话说明：NVIDIA 推出的轻量级流式语音识别模型，专为低延迟实时语音应用设计。

### 📦 微调与量化（社区微调、GGUF、AWQ）
- **HauhauCS/Qwen3.6-35B-A3B-Uncensored** ([链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive))
  - 作者: HauhauCS | 点赞: 1,722 | 下载: 2,393,894
  - 一句话说明：基于 Qwen3.6 的社区“非审查”微调版，其激进的风格和超高的下载量反映了市场对无限制内容的持续需求。

- **unsloth/gemma-4-12b-it-GGUF** ([链接](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF))
  - 作者: unsloth | 点赞: 570 | 下载: 836,531
  - 一句话说明：Unsloth 为 Gemma 4 指令版提供的 GGUF 量化版，极大降低了本地运行门槛，推动了模型在消费者硬件上的普及。

- **unsloth/diffusiongemma-26B-A4B-it-GGUF** ([链接](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF))
  - 作者: unsloth | 点赞: 214 | 下载: 17,666
  - 一句话说明：针对 Google 最新的 DiffusionGemma 多模态模型的 GGUF 量化版本，让更高效的多模态推理成为可能。

## 生态信号

本周生态趋势非常明确：**多模态是主战场，量化是落地硬道理。** 以 **Gemma 4** 家族为代表的模型，从官方到社区（如 Unsloth, huihui-ai），形成了完整的技术链路，这表明开源模型正在向“基础模型 + 量化/微调工具链”的成熟生态演进。**DeepSeek-V4-Pro** 的强势表现证明了端到端闭源或半开源大模型依然拥有巨大号召力。此外，**Ideogram 4** 系列在图像生成领域的上榜，以及 **NVIDIA**、**Boson AI** 在具体垂类（定位、TTS）的成功，表明社区对新模型的饥渴并未减弱，但更青睐那些在特定任务上表现极致或能直接用于生产的模型。

## 值得探索

1.  **deepseek-ai/DeepSeek-V4-Pro**: 作为本周点赞和下载双料冠军，无疑是当前最值得测试的通用聊天和推理模型，代表了当前AI技术的顶尖水平。
2.  **google/diffusiongemma-26B-A4B-it**: 将 Diffusion 和 Gemma 架构融合的先驱模型，代表了未来多模态生成的新方向，值得技术爱好者深入研究其架构和潜力。
3.  **unsloth/gemma-4-12b-it-GGUF**: 对于想在自己电脑上体验顶级多模态模型的用户，这个量化版本是绝佳选择。它完美体现了社区力量如何将前沿模型平民化。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*