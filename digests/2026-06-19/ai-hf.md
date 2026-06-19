# Hugging Face 热门模型日报 2026-06-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-19 00:36 UTC

---

好的，作为一名AI模型生态分析师，以下是为您生成的《Hugging Face 热门模型日报 (2026-06-19)》。

---

## Hugging Face 热门模型日报 | 2026-06-19

### 今日速览

本周 Hugging Face 生态呈现出“大厂旗舰与社区创意齐飞”的繁荣景象。**DeepSeek-V4-Pro** 凭借近5000的周点赞量高居榜首，巩固了其在开源LLM领域的领先地位。**多模态模型**成为绝对主流，超过半数的热门模型都具备图像、视频或音频处理能力，尤其是Google的 **Gemma-4** 系列（包括其创新架构 `diffusiongemma`）和NVIDIA的 **LocateAnything-3B** 获得了极高关注。同时，社区对**模型量化（GGUF）** 和 **“去审查”（Uncensored）** 变体的热情不减，涌现出多个现象级下载量的量化版、社区微调版模型。

### 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型名 | 作者 | 点赞 | 下载 | 一句话说明 |
| :--- | :--- | :--- | :--- | :--- |
| [**DeepSeek-V4-Pro**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | **4,956** | 2,948,726 | 本周第一，DeepSeek 最新旗舰模型，以顶尖的推理和对话能力成为开源社区的标杆。 |
| [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 1,339 | 4,307 | 智谱AI的下一代MoE模型，采用新型DSA架构，在对话和生成任务上性能强劲。 |
| [**microsoft/FastContext-1.0-4B-SFT**](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT) | microsoft | 203 | 957 | 微软基于Qwen3的探索性模型，专注于长上下文推理和Agent能力，值得关注。 |
| [**nex-agi/Nex-N2-Pro**](https://huggingface.co/nex-agi/Nex-N2-Pro) | nex-agi | 327 | 6,640 | 基于Qwen3.5-MoE架构的轻量级多模态模型，兼顾语言和视觉能力。 |
| [**lordx64/Qwable-v1**](https://huggingface.co/lordx64/Qwable-v1) | lordx64 | 118 | 836 | 社区基于Qwen3.5-MoE的微调变体，探索在有限资源下的多模态能力。 |

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型名 | 作者 | 点赞 | 下载 | 一句话说明 |
| :--- | :--- | :--- | :--- | :--- |
| [**nvidia/LocateAnything-3B**](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | **2,162** | 183,093 | NVIDIA推出的高效定位模型，能根据文本描述精准识别图像中任何物体，用途广泛。 |
| [**google/diffusiongemma-26B-A4B-it**](https://huggingface.co/google/diffusiongemma-26B-A4B-it) | google | 1,002 | 527,080 | Google最新的多模态生成模型，结合了扩散模型与LLM，实现高质量的图像文本双向生成。 |
| [**MiniMaxAI/MiniMax-M3**](https://huggingface.co/MiniMaxAI/MiniMax-M3) | MiniMaxAI | 1,098 | 56,162 | MiniMax推出的新一代多模态大模型，在视觉理解和生成任务上表现出色。 |
| [**moonshotai/Kimi-K2.7-Code**](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 883 | 229,156 | 月之暗面Kimi的代码增强版，集成了视觉与代码能力，支持图像到代码的生成。 |
| [**google/gemma-4-12B-it**](https://huggingface.co/google/gemma-4-12B-it) | google | 1,085 | 1,309,625 | Google Gemma-4 系列核心模型之一，支持“any-to-any”全能输入输出，生态影响力巨大。 |
| [**zai-org/SCAIL-2**](https://huggingface.co/zai-org/SCAIL-2) | zai-org | 228 | 0 | 智谱AI的图像到视频生成模型，专注于角色动画和姿态驱动，展示了AI视频生成的新方向。 |
| [**nvidia/nemotron-3.5-asr-streaming-0.6b**](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 537 | 13,033 | NVIDIA的流式语音识别模型，专为低延迟实时音频转录场景设计。 |
| [**bosonai/higgs-audio-v3-tts-4b**](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b) | bosonai | 489 | 57,380 | 基于Qwen3架构的高质量文本转语音模型，代表了多模态与TTS融合的趋势。 |
| [**Zyphra/ZONOS2**](https://huggingface.co/Zyphra/ZONOS2) | Zyphra | 114 | 669 | 一款专业的文本转语音模型，主打高质量语音合成。 |
| [**owensong/Inflect-Nano-v1**](https://huggingface.co/owensong/Inflect-Nano-v1) | owensong | 83 | 0 | 超小尺寸的TTS模型，适合边缘设备部署。 |

#### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型名 | 作者 | 点赞 | 下载 | 一句话说明 |
| :--- | :--- | :--- | :--- | :--- |
| [**yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF) | yuxinlu1 | 1,703 | 211,424 | 基于Gemma-4的代码专用模型，结合了先进的代码合成与推理技术，性能突出。 |
| [**WeiboAI/VibeThinker-3B**](https://huggingface.co/WeiboAI/VibeThinker-3B) | WeiboAI | 405 | 6,589 | 微博AI发布的3B参数数学推理模型，在小型模型上探索更强的逻辑能力。 |
| [**CohereLabs/North-Mini-Code-1.0**](https://huggingface.co/CohereLabs/North-Mini-Code-1.0) | CohereLabs | 448 | 15,285 | Cohere发布的轻量级代码生成模型，采用MoE架构，在代码任务上效率高。 |

#### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型名 | 作者 | 点赞 | 下载 | 一句话说明 |
| :--- | :--- | :--- | :--- | :--- |
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,969 | **3,420,052** | 本周下载量冠军！基于Qwen3.6的“去审查”MoE模型，体现了社区对高自由度模型的热烈需求。 |
| [**DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF) | DavidAU | 394 | 529,069 | 名字极长的“缝合怪”模型，融合多种架构理念，追求极致的未审查能力，社区热度极高。 |
| [**unsloth/gemma-4-12b-it-GGUF**](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF) | unsloth | 652 | 918,431 | unsloth的经典GGUF量化版，让用户在消费级硬件上即可运行Google的Gemma-4旗舰模型。 |
| [**OBLITERATUS/Gemma-4-12B-OBLITERATED**](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED) | OBLITERATUS | 350 | 96,805 | 对Gemma-4进行“魔改”的去审查版本，满足了部分用户对模型自主性的特殊偏好。 |
| [**unsloth/diffusiongemma-26B-A4B-it-GGUF**](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF) | unsloth | 307 | 164,209 | 对谷歌最新的多模态扩散模型进行量化，推动了生成式AI在个人设备上的本地化部署。 |
| [**zai-org/GLM-5.2-FP8**](https://huggingface.co/zai-org/GLM-5.2-FP8) | zai-org | 90 | 24,967 | GLM-5.2的官方FP8量化版本，旨在降低部署成本。 |

### 生态信号

本周生态呈现三大信号：**第一，多模态模型已成绝对主流。** 无论是Google的 `diffusiongemma`、MiniMax的M3还是各类代码视觉模型，都证明了“只懂文字”的模型已无法满足社区需求。**第二，开源社区的“二创”力量空前强大。** 以 `HauhauCS` 和 `DavidAU` 为代表的个人开发者，通过对热门模型（如Qwen3.6）进行“去审查”和“缝合”微调，凭借极高自由度吸引了海量下载，其影响力甚至超过了许多官方版本。这表明开源社区不再满足于官方提供的标准能力，而更追求个性化、无限制的模型变体。**第三，“GGUF量化”已成为模型普及的基石。** `unsloth` 等团队持续为几乎所有流行模型提供量化版，使得硬件门槛大幅降低，这是模型能够取得数百万下载量的关键。

### 值得探索

1.  **DeepSeek-V4-Pro**: 作为本周的点赞冠军，它代表了开源大模型的最高水准。无论您是在寻找最强推理能力，还是关注模型架构前沿，它都是必读的模型。
2.  **nvidia/LocateAnything-3B**: NVIDIA正在越来越多地将其研究成果开源。这个3B参数的目标定位模型，在效率与性能之间取得了绝佳平衡，非常适合需要精细化控制的机器人、自动驾驶或图片编辑等应用场景。
3.  **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**: 这是社区对Gemma-4进行代码领域微调的成功案例。对于希望在本地获得顶级代码助手能力的开发者来说，这个量化版本提供了一个性价比极高的选择。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*