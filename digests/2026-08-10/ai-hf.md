# Hugging Face 热门模型日报 2026-08-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-10 00:52 UTC

---

## Hugging Face 热门模型日报（2026-08-10）

### 今日速览

今日 Hugging Face 热门榜由 FLUX.1-dev（14,059 赞）、Kimi-K3（10,398 赞）和 GLM-5.2（4,914 赞）领跑。MiniMax-H3 视频生成生态是最大热点：原版、ComfyUI 单文件、LoRA/GGUF/NVFP4 量化等衍生版本密集上榜，其中 Comfy-Org 单文件下载量达 4,947,943。语言模型方向 DeepSeek-V4-Flash、GLM-5.2 与多个 MoE 新模型集中发布；Baidu Unlimited-OCR 以 2,889,062 下载成为专用模型中的实用爆款。整体看，开源权重、本地部署与社区微调（尤其 uncensored/heretic）仍是流量核心。

### 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,914 | 2,488,397 | Z.ai 的新一代 MoE 对话模型，采用 GLM MoE DSA 架构。以高点赞和近 249 万下载成为本周语言模型主力。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,945 | 868,576 | DeepSeek V4 Flash 文本生成/对话模型，主打低延迟与更快的推理体验。下载量 86.9 万，是本周最受关注的开源 LLM 之一。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 452 | 85,651 | Liquid AI 的 2.6B 轻量文本生成模型。适合资源受限场景，Liquid 系列持续迭代。 |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 289 | 1,089 | deepgrove 的 MoE 文本生成预览模型。尚处早期预览，但已获得 289 周赞，代表新玩家入场。 |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 245 | 4,747 | 采用 Bailing hybrid 架构的对话模型，支持自定义代码。定位轻量快速对话，关注度正在上升。 |

#### 🎨 多模态与生成（图像、视频、音频、文本到 X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,059 | 487,171 | FLUX.1 开发版文本到图像扩散模型。本周点赞最高，仍是图像生成领域的重要基准。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,398 | 1,456,459 | Moonshot 的多模态模型，支持图像+文本输入并生成文本，采用压缩张量技术。10,398 赞显示 Kimi 系列在开源社区有极强号召力。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,245 | 35,295 | 支持文本/图像到视频生成的 MiniMax-H3 原版模型。本周大量衍生版本围绕它出现，是视频生成生态的中心。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,072 | 4,947,943 | MiniMax-H3 的 ComfyUI 单文件版本，便于在 ComfyUI 中直接加载使用。下载量 494.8 万，为本周下载最高条目。 |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 333 | 13,132 | 0.6B 文本转语音预览模型，基于 ArkTTS。轻量 TTS 方案，适合音频生成实验。 |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 323 | 461,150 | 微软的视觉语言模型，面向 image-text-to-text 多模态理解任务。下载量 46.1 万，企业级玩家仍在加码多模态赛道。 |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 260 | 543 | NVIDIA 开源的 11B 语音聊天模型。面向实时语音交互场景，引用多篇相关技术论文。 |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 233 | 0 | Kijai 为 MiniMax-H3 做的 ComfyUI 适配/工作流节点。零下载但获 233 赞，说明社区关注其工具链价值。 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 233 | 6,117 | MiniMax-H3 的 Turbo 加速版，支持 image-to-video、text-to-video 等多方向任务。下载 6.1k，是 H3 效率优化方向的代表。 |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 169 | 0 | Kijai 的 MiniMax-H3 实验性 ComfyUI 工作流。与稳定版适配互补，探索 H3 的更多新用法。 |
| [endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 121 | 482 | image-text-to-text 多模态对话模型，基于 Qwen3.5 MoE 架构。新团队首发，点赞/下载显示仍在冷启动阶段。 |

#### 🔧 专用模型（代码、数学、医疗、嵌入等）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,986 | 2,889,062 | 百度开源的“无限 OCR”模型，支持图像中的文本识别与提取。下载量 289 万，说明 OCR 在办公与自动化场景需求极强。 |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 552 | 18,574 | 面向代码生成的 MoE 模型，基于 Qwen3.5 MoE 架构，并带有图像-文本理解能力。开发版定位，适合编码智能体场景。 |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 211 | 5,651 | Mistral 的 3B 安全护栏/内容审核模型。轻量、vLLM 兼容，适合给对话系统叠加安全层。 |

#### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,808 | 2,390,692 | 基于 Qwen3.6 的 27B 社区微调，GGUF 量化，主打 uncensored/创意风格。下载 239 万，说明“去审查+GGUF”组合在本地部署社区极受欢迎。 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 627 | 188,761 | DeepSeek-V4-Flash 的 GGUF 量化版本，由 unsloth 提供。大幅降低本地部署门槛，下载 18.9 万。 |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 544 | 0 | MiniMax-H3-Turbo 的 LoRA 适配，覆盖 text-to-video、audio-video 等方向。零下载但获 544 赞，社区对 H3 微调兴趣浓厚。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 454 | 396,282 | Qwen3.6 MoE（35B A3B）的 GGUF 社区微调，Hermes/uncensored 风格。下载 39.6 万，高活跃度主要来自创意写作与角色扮演场景。 |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 418 | 0 | Qwen3-VL-32B 的 H3 文本编码器微调/INT8 量化版本，适配 ComfyUI。零下载但获 418 赞，聚焦“H3+视觉语言”工作流。 |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 231 | 0 | MiniMax-H3-Turbo LoRA 的 ComfyUI 封装/剪枝版。让非编程用户也可以在 ComfyUI 中直接使用 LoRA。 |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 231 | 0 | MiniMax-H3 的社区风格微调视频模型，Apache-2.0 许可。零下载但获 231 赞，面向个性化视频创作方向。 |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 188 | 160,747 | MiniMax-H3 的 GGUF 量化合集，基于 Comfy-Org 的单文件版本。下载 16.1 万，方便在本地/ComfyUI 中运行 H3。 |
| [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 174 | 68,468 | LFM2.5-2.6B 的 GGUF 量化版本。适合 llama.cpp 等本地推理栈，是轻量模型落地的常用选择。 |
| [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 155 | 511,473 | MiniMax-H3 混合精度量化版本，包含 NVFP4/INT4/INT8 等格式。下载 51.1 万，是 H3 低显存部署的重要选择。 |
| [sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 143 | 0 | Qwen3-VL-32B 文本编码器的 NVFP4 量化版本，用于 MiniMax-H3/ComfyUI 工作流。零下载但获 143 赞，量化/适配型社区作品持续受到关注。 |

### 生态信号

MiniMax-H3 视频生态最抢眼：原版 + ComfyUI 单文件 + Turbo/LoRA + GGUF/NVFP4 量化等多版本同时上榜，Comfy-Org 单文件下载量领先全榜。语言模型方面，DeepSeek-V4-Flash、GLM-5.2、Kimi-K3 及 Qwen3.6 相关微调/GGUF 密集出现，MoE 与混合架构成主流。开源权重配合 GGUF/llama.cpp/vLLM/ComfyUI 的本地部署工具链非常活跃；uncensored/heretic 社区微调收获大量点赞，需求指向创意与角色扮演。OCR、代码、安全等专用模型也有高下载，生态进一步多样化。

### 值得探索

- **MiniMaxAI/MiniMax-H3**：视频生成生态中心，衍生 LoRA、GGUF、ComfyUI 工作流最多，适合研究视频扩散模型与工具链适配。
- **moonshotai/Kimi-K3**：高赞多模态模型，采用压缩张量技术，值得研究高质量多模态表示与权重压缩的结合。
- **zai-org/GLM-5.2**：MoE DSA 架构 + 超高下载量，适合作为通用对话底座进行部署和二次开发。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*