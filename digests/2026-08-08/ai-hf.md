# Hugging Face 热门模型日报 2026-08-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-08 00:46 UTC

---

# Hugging Face 热门模型日报（2026-08-08）

## 今日速览

MiniMax-H3 是本周绝对热点：官方视频生成模型上线后，ComfyUI 版（下载量 3,139,920）、LoRA、GGUF、NVFP4/INT8 量化等衍生模型集体上榜。Kimi-K3 以 10,282 赞成为最受关注的新发布之一，GLM-5.2、DeepSeek-V4-Flash、Unlimited-OCR 等中文开源权重模型也保持高热度。多模态与量化是两条主线：FLUX.1-dev 仍以 14,028 赞位居全榜第一，GGUF/llama.cpp 和社区 uncensored/Hermes 微调大量出现。总体看，开放权重生态正从纯文本快速转向图像、视频、语音的全面生成与高效部署。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,887 | 2,430,330 | 智谱开源的新一代 MoE 对话模型，标签显示采用 glm_moe_dsa 架构。它以 4,887 赞和 243 万下载证明中文开源模型仍占据头部生态位。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,744 | 702,709 | DeepSeek 最新 Flash 对话模型，擅长文本生成与多轮对话。官方发布后即以 70 万+ 下载成为本周最热门的纯文本 LLM 之一。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 379 | 77,973 | Liquid AI 推出的 2.6B 轻量文本生成模型，适合资源受限环境。下载近 8 万，表明小模型在本地部署赛道仍有高关注。 |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 226 | 686 | DeepGrove 的 MoE 文本生成预览模型，采用 causal-LM 架构。目前下载量不高，但作为新家族值得关注其后续迭代。 |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 203 | 3,065 | inclusionAI 的 3.0 flash 对话模型，采用 bailing_hybrid 架构并支持自定义代码。轻量定位适合快速交互和私有部署。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,028 | 512,841 | Black Forest Labs 的开源文本到图像模型，拥有大量 Diffusers 生态支持。即使非本周新品，仍以 14,028 赞居全榜第一，社区地位稳固。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,282 | 1,308,186 | Moonshot AI 开放权重的多模态模型，任务为图像文本到文本，并采用 compressed-tensors 优化。周点赞 10,282、下载 130 万，是本周最受关注的发布之一。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 2,953 | 18,112 | MiniMax 官方图像/文本到视频生成模型，支持 text-to-video / image-to-video。它带动了 ComfyUI、LoRA、量化等衍生生态迅速跟进。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 936 | 3,139,920 | ComfyUI 单文件版 MiniMax-H3，由 Comfy-Org 提供。下载量高达 3,139,920，是全榜下载最多的模型，可见实际工作流使用量巨大。 |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 336 | 25,340 | thinkingmachines 推出的多模态对话模型，支持图像文本输入。Small 版本强调高效。下载 2.5 万，适合作为多模态 baseline 使用。 |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 306 | 12,633 | 0.6B 轻量级文本转语音预览模型，基于 arktts。下载量 1.2 万，适合探索低成本语音合成方案。 |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 302 | 456,140 | 微软开源的视觉语言模型（image-text-to-text），面向多模态理解与生成。下载量 45.6 万，显示企业级模型也有稳定社区需求。 |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 228 | 359 | NVIDIA 发布的英文语音对话模型，面向端到端语音交互场景。目前下载量较小，但结合多篇 arXiv 论文，是一条值得研究的技术方向。 |
| [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 221 | 0 | 面向 Krea 2 的文本到图像 LoRA，可直接在 ComfyUI 中使用。虽然下载为 0，但艺术风格定制方向仍有探索价值。 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 128 | 0 | 基于 MiniMax-H3 的图像到视频衍生模型，支持 t2v / i2v / r2v 多种生成模式。目前下载为 0，但扩展了 H3 的应用入口。 |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 115 | 0 | 由知名 ComfyUI 开发者 Kijai 提供的 MiniMax-H3 ComfyUI 适配。该版本方便在本地以节点化方式运行视频生成模型。 |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 112 | 0 | 社区发布的 MiniMax-H3 文本到视频变体，提供 transformers 接口并兼容 endpoints。适合希望快速接入视频生成 API 的开发者试用。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,954 | 2,836,694 | 百度开源的高性能 OCR 模型，任务为 image-text-to-text。下载量 2,836,694，仅次于 Comfy-Org 版 MiniMax-H3，实用属性很强。 |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 531 | 17,399 | 基于 Qwen3.5 MoE 的代码生成开发版模型，面向编程场景。周点赞 531，是榜单中专用代码模型里关注度最高的一位。 |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 184 | 2,480 | Mistral 推出的 3B 轻量安全护栏模型，可嵌入 vLLM 推理流程。适合做内容安全过滤，下载量不高但补足生态关键环节。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,707 | 2,217,339 | DavidAU 推出的 Qwen3.6 27B 社区微调 + GGUF 模型，主打 uncensored/Heretic 风格。下载量 221 万，说明非传统微调路线有很强的用户需求。 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 586 | 161,253 | Unsloth 为 DeepSeek-V4-Flash 提供的 GGUF 量化版本。与 llama.cpp 生态兼容，下载量 16 万，方便本地部署官方模型。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 425 | 332,992 | Qwen3.6 35B-A3B 的社区微调 + GGUF 量化版本，标签包含 Hermes、uncensored 和 MoE。下载量 33 万，是社区微调路线中的黑马。 |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 415 | 0 | 面向 MiniMax-H3-Turbo 的 LoRA 模块，目标是 text-to-video 与 audio-video。点赞 415，是 H3 衍生生态的重要轻量补充。 |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 378 | 0 | Qwen3-VL-32B 的 Heretic-H3 ComfyUI 适配版，带 INT8 量化/ConvRot。它能将视觉语言能力接入 ComfyUI 的视频生成流程。 |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 177 | 0 | MiniMax-H3-Turbo LoRA 的 ComfyUI 封装版本，方便节点化加载。目前下载为 0，但为 LoRA 用户节省了适配成本。 |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 168 | 87,870 | MiniMax-H3 的 GGUF 量化版本，基于 Comfy-Org 的基座模型。下载近 9 万，说明本地运行 H3 的需求并没有被版本碎片化削弱。 |
| [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 144 | 31,489 | LFM2.5-2.6B 的 GGUF 版本，支持 llama.cpp。为 2.6B 小模型提供更友好的端侧部署格式。 |
| [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 127 | 452,420 | MiniMax-H3 的 NVFP4/INT4/INT8 多精度量化版，同时覆盖 diffusers 生态。下载 45 万，是 H3 量化衍生中传播最广的一个。 |
| [sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 121 | 0 | Qwen3-VL-32B 文本编码器 + NVFP4 量化，面向 MiniMax-H3 和 ComfyUI 工作流。主要作用是降低显存占用并保留视觉语言能力。 |

## 生态信号

MiniMax-H3 是当前最典型的生态脉冲：官方模型只是起点，ComfyUI、LoRA、GGUF、NVFP4/INT4/INT8 在数日内铺满榜单，视频生成正在复制 LLM 的“权重+量化+微调”链路。Kimi-K3、GLM-5.2、DeepSeek-V4-Flash、Unlimited-OCR 等中文模型占据头部，开放权重是 HF 社区主流话语权，闭源模型未进热榜。量化与微调极为活跃，Unsloth GGUF、NVFP4 和 uncensored/Hermes 风格吸收大量下载，效率与风格定制成为竞争焦点。

## 值得探索

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**：视频生成生态的核心模型。衍生 ComfyUI/量化版本下载量惊人，适合研究从权重发布到社区工具链的完整扩散路径。
- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**：周点赞 10,282、下载 130 万，使用 compressed-tensors。它是观察新一代开源多模态 LLM 形态和压缩路线的理想对象。
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：下载量 284 万，是实用价值极高的 OCR 模型。若需要生产级图文提取能力，可优先尝试。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*