# Hugging Face 热门模型日报 2026-08-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-07 02:02 UTC

---

# Hugging Face 热门模型日报（2026-08-07）

## 今日速览

本周 Hugging Face 榜单呈现“视频生成爆发 + 大模型开源混战”格局：MiniMax-H3 发布一周即衍生出量化/LoRA/ComfyUI 等多个版本，生态快速成型；DeepSeek V4 Flash 系列和 GLM-5.2 下载量分别突破 260 万和 239 万，成为文本生成双雄；Kimi-K3 以 10,200 次周点赞成为增长最快的多模态模型；FLUX.1-dev 继续霸榜文生图领域。社区微调和 GGUF 量化活动异常活跃，开源权重与量化分发正成为主流发布模式。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,647 | 617,900 | DeepSeek V4 Flash 的 0731 版，主打高效文本生成与多轮对话。发布仅数日即收获 61 万+ 下载，是 DeepSeek 家族持续迭代的代表。 |
| [LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 333 | 73,573 | Liquid AI 的 2.6B 小参数文本生成模型，适合边缘与低算力部署。凭借精简体积和高效率登上热榜，体现小模型依然受关注。 |
| [maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 207 | 419 | DeepGrove 发布的 MoE 架构预览模型，主打因果语言建模。虽处早期，但已引起研究者注意，代表新团队入局大模型。 |
| [Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 186 | 1,196 | Ling 系列 Flash 版本，使用自定义代码实现混合架构，面向对话和文本生成。轻量快速，适合在线服务场景。 |
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,871 | 2,391,730 | 智谱最新旗舰模型，采用 MoE 架构，下载量接近 240 万。中文能力与生态成熟度使其成为本周最亮眼的开源模型之一。 |
| [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 2,042 | 2,639,756 | DeepSeek V4 Flash 标准版，文本生成与对话能力扎实。下载量超 263 万，位居本周文本模型下载榜首。 |
| [XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 424 | 1,570 | 基于 Qwen3.5 MoE 的轻量模型，支持文本生成并兼容多模态输入。作为 mini 版本，适合快速实验和部署。 |
| [Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 222 | 3,394 | Qwen3.6 的 MoE 微调版本，35B 总量仅激活 3B，效率与能力平衡。社区研究型微调，适合低资源推理。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | ---: |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 2,754 | 12,102 | MiniMax 官方视频生成模型，支持 text-to-video 与 image-to-video。本周带动大量衍生版本，成为视频生成领域的新热点。 |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,200 | 1,258,043 | 月之暗面多模态模型，点赞破万、下载超 125 万。使用压缩张量技术，兼顾多模态理解与推理效率。 |
| [Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 322 | 22,223 | Thinking Machines 的小型多模态模型，支持图像文本联合输入与对话。体积小，适合端侧多模态应用。 |
| [Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 205 | 0 | 基于 Krea2 的文生图 LoRA 模型，目标场景为 ComfyUI 工作流。刚上榜即获得关注，但下载量尚未释放。 |
| [NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 177 | 206 | NVIDIA 推出的语音对话模型，融合多项最新论文技术。面向实时语音交互，属于音频多模态前沿方向。 |
| [Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 293 | 12,211 | Audio8 的 0.6B 语音合成模型，基于 ArkTTS 架构。预览版已经收获 1.2 万下载，说明 TTS 需求旺盛。 |
| [Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 286 | 440,176 | 微软发布的多模态视觉语言模型，下载量 44 万+。擅长图像文本理解，适合通用视觉问答与内容分析。 |
| [FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,010 | 523,234 | Black Forest Labs 的 FLUX.1 开发版文生图模型。周点赞 1.4 万持续霸榜，是当前开源图像生成的事实标准之一。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | ---: |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,929 | 2,791,862 | 百度出品的高性能 OCR 模型，下载量超 279 万，为本周下载最高模型之一。适用于通用图像文字提取，支撑大量文档数字化场景。 |
| [Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 158 | 1,511 | Mistral 发布的安全/内容审查模型，3B 小参数便于集成到生成链路。为开源生态提供轻量可部署的安全过滤方案。 |
| [KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 519 | 16,961 | 面向代码生成的开发版模型，基于 Qwen3.5 MoE 架构。支持多模态代码理解，是本周代码领域的热门选择。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | ---: |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 848 | 2,295,377 | MiniMax-H3 的 ComfyUI 适配版，下载量超 229 万。降低视频生成模型本地使用门槛，是生态扩散的关键一环。 |
| [DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 545 | 145,105 | unsloth 提供的 DeepSeek V4 Flash GGUF 量化版，方便 llama.cpp 等本地推理。官方发布后迅速跟上量化生态。 |
| [Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,652 | 2,087,189 | 超长命名的社区微调 GGUF 模型，融合 uncensored、Heretic 等风格。下载量超 208 万，反映社区对“无限制”模型的强需求。 |
| [Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 337 | 0 | Qwen3-VL 与 MiniMax-H3 的融合量化版，使用 INT8 + ConvRot 优化。面向 ComfyUI 工作流，主打视觉生成与风格混合。 |
| [MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 302 | 0 | MiniMax-H3 的 Turbo 版本 LoRA，支持文本到视频及音视频生成。社区针对速度与质量的优化尝试。 |
| [MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 153 | 65,679 | MiniMax-H3 的 GGUF 量化集合，专为 ComfyUI 和本地部署设计。有效降低显存占用，已经积累 6.5 万下载。 |
| [Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 407 | 309,149 | MoE 架构的社区微调 GGUF，集成了 Hermes、Genesis 等多样风格。下载 30 万+，是无审查类量化模型的代表。 |
| [LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 125 | 12,790 | Liquid AI 官方推出的 LFM2.5 量化版，与原始模型同日上榜。便于在本地 CPU/GPU 上运行小模型。 |
| [MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 119 | 0 | MiniMax-H3 Turbo LoRA 的 ComfyUI 打包版，提供即插即用节点。进一步降低社区使用门槛。 |
| [Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 109 | 272,963 | MiniMax-H3 的多精度量化版本，支持文本/图像/视频生成。27 万+下载说明视频模型量化需求巨大。 |
| [Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 108 | 0 | Qwen3-VL 文本编码器与 MiniMax-H3 的结合方案，NVFP4 量化。定位 ComfyUI 生态，是视觉与视频生成融合的探索。 |

---

## 生态信号

**MiniMax-H3 生态快速扩张**：官方模型发布后，ComfyUI 适配版、LoRA、GGUF、NVFP4 量化版相继上榜，下载量合计远超原版，表明视频生成模型的“基础设施”比模型本身更具价值。**DeepSeek V4 Flash 与 GLM-5.2 双雄领跑文本生成**，官方权重和 unsloth 量化同时上榜，开源权重 + 量化分发成为主流发布路径。**Kimi-K3 与 FLUX.1-dev** 分别代表多模态理解和文生图两大方向，持续吸引社区注意力。此外，大量“uncensored/Heretic”风格微调上榜，反映出内容限制仍是社区热议话题。

---

## 值得探索

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**：本周点赞最高多模态模型，压缩张量技术值得深入研究，同时下载量破 125 万，验证了多模态大模型的规模化需求。
- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**：官方与社区量化同周上榜，下载超 260 万，是观察开源旗舰模型迭代节奏的最佳样本。
- **[black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev)**：持续霸榜文生图模型，社区配套工具链成熟，适合作为图像生成任务的基线与对照。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*