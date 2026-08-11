# Hugging Face 热门模型日报 2026-08-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-11 00:52 UTC

---

# Hugging Face 热门模型日报 — 2026-08-11

## 今日速览

今日 Hugging Face 热门模型呈现“视频生成 + 多模态 + 量化微调”三重奏。MiniMax-H3 以原始模型、ComfyUI 适配、LoRA、GGUF/NVFP4 量化等近十个变体霸榜，成为本周生态热度最高的模型家族；DeepSeek-V4-Flash 以 95 万下载领衔语言模型赛道。Kimi-K3 和 FLUX.1-dev 分别在多模态与文生图方向保持强劲。社区层面，“uncensored/Heretic”微调和 GGUF/INT8 量化模型大量上榜，反映本地化部署与工具链适配是当前热点。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,059 | 954,441 | DeepSeek 最新 V4 对话模型，Flash 版本定位高效推理与长文本对话。是本周语言模型类下载量最高的新作。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 490 | 89,680 | LiquidAI 的 2.6B 轻量文本生成模型。小参数加对话能力，适合边缘或低延迟场景。 |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 311 | 1,344 | deepgrove 的预览版因果语言模型，采用 mixture-of-experts 架构。适合关注新 MoE 路线的工作者尝鲜。 |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 287 | 5,261 | inclusionAI 的轻量对话模型，支持自定义代码与混合架构。强调快速交互和部署友好。 |
| [SyzygyResearch/Mach-1-Additive-35B](https://huggingface.co/SyzygyResearch/Mach-1-Additive-35B) | SyzygyResearch | 115 | 2,129 | 基于 Qwen3.5 MoE 的 35B 高效模型，标签显示采用 ternary/additive 权重。是探索新一代稀疏加法架构的研究型模型。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,076 | 480,762 | Black Forest Labs 的开源文生图旗舰，diffusers 生态标准模型。以 1.4 万周点赞继续领跑图像生成赛道。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,470 | 1,510,032 | Moonshot 的新一代多模态模型，支持图像/文本输入到文本，并带 compressed-tensors 特征。周点赞破万、下载超 151 万，是本周最亮眼的多模态发布。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,429 | 47,468 | MiniMax 的视频生成基础模型，支持 text/image-to-video 与 image-text-to-video。虽然原始下载不是最高，但衍生生态极为庞大。 |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 711 | 0 | Meta 系推出的 30B 图像文本多模态对话模型。下载数据尚未铺开，但 711 点赞说明社区已在密切关注。 |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 297 | 597 | NVIDIA 的 11B 语音对话模型，面向语音交互场景。刚进入热门榜，属于音频多模态方向的有力补充。 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 259 | 15,087 | MiniMax-H3 的 Turbo 社区加速版，侧重 image-to-video 生成。下载量已超 1.5 万，反映对轻量视频模型的需求。 |
| [endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 152 | 617 | 基于 Qwen3.5 MoE 的多模态模型，支持图像文本到文本。作为一个全新预览版，值得关注其 MoE 与多模态结合的效果。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,002 | 2,921,751 | 百度推出的通用 OCR 模型，擅长从图像中抽取文字与特征。4,002 周点赞加 292 万下载，是文档理解赛道的高热度生产力模型。 |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 221 | 6,343 | Mistral 的 3B 轻量安全护栏模型，兼容 vLLM 部署。适合用于生成链路前的内容安全过滤与审核。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,861 | 2,439,083 | 社区制作的 Qwen3.6 27B 融合/微调模型，GGUF 格式并主打“uncensored/Heretic”风格。244 万下载说明这类高自由度本地模型有很强的用户需求。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,146 | 6,009,639 | MiniMax-H3 的 ComfyUI 单文件封装，使视频生成可直接在 ComfyUI 中加载。600 万下载量是全部 30 个热门模型中最高的，成为 H3 生态关键入口。 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 637 | 199,167 | unsloth 为 DeepSeek-V4-Flash 提供的 GGUF 量化版。显著降低本地部署门槛，下载量已近 20 万。 |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 599 | 0 | MiniMax-H3 的 Turbo LoRA，支持文本/音频到视频生成。点赞高但下载尚未铺开，属于刚发布即获关注的社区模块。 |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 440 | 0 | 将 Qwen3-VL-32B 文本编码器与 MiniMax-H3 结合的 INT8 量化 ComfyUI 方案。实验性较强，代表社区融合视觉语言模型与视频模型的尝试。 |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 256 | 0 | Kijai 制作的 MiniMax-H3 ComfyUI 适配版。为工作流集成提供更轻量的入口。 |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 250 | 0 | MiniMax-H3-Turbo LoRA 的 ComfyUI 适配/剪枝版本。方便在 ComfyUI 中直接使用加速 LoRA。 |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 250 | 0 | MiniMax-H3 的风格化社区微调版，面向 text-to-video，并标注 endpoints_compatible。下载仍为 0，但风格微调需求已经显现。 |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 207 | 0 | unsloth 对 Muse-Glimmer-30B 的 GGUF 量化，方便本地多模态推理。与官方 GGUF 形成互补。 |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 192 | 174,862 | MiniMax-H3 的 GGUF 量化集合，供 ComfyUI 或本地推理加载。下载量突出，显示社区在推动 H3 脱离云端依赖。 |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 184 | 0 | Kijai 的实验版 MiniMax-H3 适配。适合想要提前尝试工作流新特性或修复的开发者。 |
| [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 184 | 89,611 | LFM2.5-2.6B 的官方 GGUF 版本，适配 llama.cpp。小模型量化后更易嵌入客户端应用。 |
| [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 162 | 530,052 | MiniMax-H3 的 NVFP4/INT4/INT8 混合精度量化版，兼容 diffusers 视频生成。53 万下载显示模型压缩在视频生成中同样重要。 |
| [sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 152 | 0 | 将 Qwen3-VL-32B 文本编码器与 MiniMax-H3 结合的 NVFP4 量化方案。主要面向 ComfyUI 下的显存优化部署。 |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 148 | 0 | Muse-Glimmer-30B 的官方 GGUF 量化版。降低 Meta 多模态模型的本地运行门槛。 |
| [lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 116 | 268 | 针对 MiniMax-H3 的提示词重写 LoRA。用于优化文生视频/图生视频的 prompt 质量，属于生态工具型模块。 |

---

## 生态信号

本周生态有两个清晰信号：一是 MiniMax-H3 成为视频生成的基础模型新中心，从 ComfyUI 工作流、LoRA 到 NVFP4/INT8 量化全线铺开，说明本地视频生成与二次创作进入工程化阶段；二是 DeepSeek-V4-Flash、Kimi-K3、Muse-Glimmer 等开源权重多模态/语言模型持续吸收社区算力，开源与闭源差距进一步缩小。社区侧，“uncensored/Heretic”微调和 GGUF 量化异常活跃，表明个人开发者更看重可控性、可部署性与工具链适配。

---

## 值得探索

- [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)：视频生成模型的事实生态中心；想理解图像/视频到视频生成和 ComfyUI 工程化，可以从它入手。
- [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)：周点赞 10,470、下载 151 万的明星多模态模型；体验前沿多模态对话与特征抽取，直接看它。
- [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)：292 万下载的 OCR 生产力模型；做文档解析、文字识别类应用值得优先测试。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*