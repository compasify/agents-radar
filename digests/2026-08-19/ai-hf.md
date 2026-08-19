# Hugging Face 热门模型日报 2026-08-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-18 23:11 UTC

---

# Hugging Face 热门模型日报（2026-08-19）

## 今日速览

今日 Hugging Face 热门榜由 **Qwen 3.8 生态**主导：官方多模态模型 Qwen3.8-27B 以 11,111 周点赞登顶，Kimi-K3 以 10,827 点赞紧随其后，多模态大模型成为绝对焦点。**MiniMax 系表现强势**，MiniMax-H3 视频模型与 Comfy-Org 单文件版合计下载量超 1,746 万，音乐生成模型 MiniMax-Music3 同步上榜。**DeepSeek V4** 双版本（Pro 与 Flash）均在列，Flash 下载量超 212 万。榜单近半数席位为 GGUF、FP8、NVFP4、MLX 等量化形态与社区微调，显示「官方发权重、社区做分发」的生态已高度成熟。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,524 | 2,123,462 | DeepSeek V4 的轻量 Flash 版本，主打高吞吐与低成本推理。周点赞 3,524、下载超 212 万，是榜单上最受欢迎的文本生成模型之一。 |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,064 | 11,212 | Qwen 3.8 系列的 MoE 文本旗舰，总参数 2.4T、激活 95B。代表当前开源稀疏大模型的最高规格之一。 |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 602 | 30,985 | DeepSeek V4 的 Pro 版本（8 月 13 日发布），面向复杂推理与通用对话。与 Flash 版本共同构成 V4 双线产品组合。 |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 321 | 269,372 | NVIDIA 的 30B 总参/3B 激活 MoE 模型，NVFP4 量化精度专为新硬件设计。主打高能效比的低成本云端与本地推理。 |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 319 | 9,990 | Ling 3.0 系列的 tiny 尺寸文本模型，面向资源受限场景。上榜表明轻量级 LLM 依然是社区关注的重要方向。 |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 225 | 13,344 | 2.4T MoE 的官方 FP8 量化版，显著降低旗舰模型部署门槛。适合在有限显存环境下调用大规模稀疏模型能力。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,111 | 665,513 | Qwen 3.8 官方多模态对话模型，支持图像与文本联合输入。以 11,111 周点赞登顶全榜，并衍生出大量 GGUF/FP8/微调版本，是当前生态的核心基座模型。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,827 | 2,226,898 | Moonshot Kimi 系列新一代多模态模型，支持图文理解，标签含 feature-extraction 与压缩张量技术。周点赞 10,827、下载超 222 万，与 Qwen3.8-27B 形成双雄格局。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,143 | 2,855,539 | MiniMax 新一代图文生成视频模型，支持文生视频、图生视频等多方向任务。下载量超 285 万，是本周视频生成赛道热度最高的模型之一。 |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,681 | 384,097 | Meta 开源的 30B 图文多模态模型。发布即获 1,681 点赞，并快速获得 unsloth 的 GGUF 适配，生态跟进迅速。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,220 | 503,632 | Lightricks 的多功能视频生成模型，支持文/图/视频到视频。下载量超 50 万，是创意视频工具链中的热门基座。 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 958 | 11,745 | MiniMax 的文本到音乐生成模型，延续 AI 音乐生成赛道热度。上榜显示音频生成正成为多模态生态的重要分支。 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 608 | 300,279 | MiniMax-H3 的 Turbo 加速版本，专注图生视频。以更低推理成本覆盖视频生成场景，下载量超 30 万。 |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 246 | 24,893 | 2.9B 参数的文生图模型，提供单文件与 ComfyUI 支持。轻量参数适合本地可控图像生成与工作流实验。 |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 219 | 1,120 | dots3 系列面向笔记/文档场景的图文多模态预览模型。探索生产力工具与大模型结合的具体产品形态。 |
| [LiquidAI/LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B) | LiquidAI | 173 | 9,101 | Liquid AI 的 3B 视觉语言模型，聚焦轻量多模态。端侧与小参数化多模态是其核心定位。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

本分类今日无上榜模型。

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,140 | 3,020,528 | 社区深度微调（uncensored）与 GGUF 量化结合的 27B 多模态模型。周点赞 2,140、下载超 302 万，是本周下载量最高的社区魔改模型之一。 |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,812 | 3,561,466 | unsloth 出品的 Qwen3.8-27B GGUF 量化版，覆盖多种量化档位。下载量达 356 万，是本地部署 Qwen3.8-27B 的主流入口。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,424 | 14,641,908 | MiniMax-H3 的 ComfyUI 单文件版，下载量超 1,464 万，为全榜最高。极大降低了视频生成模型的本地工作流集成门槛。 |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,251 | 0 | 修复 Qwen 系列聊天模板（jinja）的社区工具包，兼容 MLX。0 下载但获 1,251 点赞，反映开发者对聊天模板可用性的强烈需求。 |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 561 | 741,011 | Qwen 官方 FP8 量化版本，保留多模态能力的同时降低显存占用。下载量超 74 万，适合生产级部署。 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 526 | 45,465 | abliterated（去审查）微调与 FP8 量化的组合版本。主打更少拒答的对话体验，面向本地与 API 部署。 |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 481 | 787,276 | Meta Muse-Glimmer-30B 的 GGUF 量化版。快速跟进官方发布，下载量近 79 万。 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 407 | 558,767 | 社区 uncensored 微调的 GGUF 版本，支持 MTP。下载量超 55 万，是 Qwen 3.8 去审查生态中热度领先的量化模型。 |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 263 | 0 | 基于 MiniMax-H3 的社区微调视频模型，面向风格化视频内容生成。新发布暂无下载数据，但点赞已获 263，反映社区关注度。 |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 261 | 523,919 | unsloth 的 NVFP4 量化版，针对新一代 NVIDIA 硬件优化。为 Qwen3.8-27B 提供精度与效率平衡的又一选择。 |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 245 | 0 | uncensored 微调的 MLX 格式版本，面向 Apple Silicon 部署。新上架暂无下载，补齐了 Qwen 3.8 在 Mac 生态的部署路径。 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 195 | 27,745 | 社区 uncensored 与激进风格微调的 GGUF 版，支持多模态与 MTP。体现 Qwen 3.8 在个性化对话方向的快速二次开发。 |
| [Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 177 | 285,444 | MiniMax-Music3 的 ComfyUI 单文件版。下载量超 28 万，推动音乐生成模型进入 ComfyUI 工作流生态。 |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 171 | 12,854 | Qwen3.8-27B 的 GGUF 量化版本，兼容 llama.cpp。为本地推理提供又一个经过调优的可用选项。 |

## 生态信号

**Qwen 3.8 家族势头最旺**：官方基座、2.4T MoE 旗舰、FP8/NVFP4/GGUF/MLX 多格式量化以及大量 uncensored 社区微调同场竞技，占据榜单近半数席位。**开源权重已成为绝对主流**，DeepSeek、MiniMax、Meta（Muse）等均以开放权重参与竞争，本周未见闭源商业模型上榜。**量化与微调活动依然密集**：GGUF 继续充当本地部署的事实标准，FP8/NVFP4 在官方与社区两侧同步铺开，abliterated/uncensored 类微调形成稳定的细分需求。**视频与音乐生成是第二大热点**，MiniMax 生态（H3 视频 + Music3 音乐）在下载量上表现尤为惊人。整体来看，头部厂商负责基座创新，社区主导量化、微调与工具链分发，分工已成常态。

## 值得探索

1. **Qwen/Qwen3.8-2.4T-A95B**（[链接](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)）—— 2.4T 总参数的 MoE 旗舰，是观察下一代超大规模稀疏模型训练与推理效率的最佳样本；搭配官方 FP8 版可对比量化方案对 MoE 能力的影响。
2. **moonshotai/Kimi-K3**（[链接](https://huggingface.co/moonshotai/Kimi-K3)）—— 以 10,827 点赞成为 Qwen 之外最受关注的多模态模型。其 compressed-tensors 与 feature-extraction 标签暗示在压缩推理与表征学习上的创新，值得深入研究。
3. **Comfy-Org/MiniMax-H3**（[链接](https://huggingface.co/Comfy-Org/MiniMax-H3)）—— 全榜下载量第一（超 1,464 万），是单文件 ComfyUI 分发模式的代表性案例；对视频生成创作者而言，这是当前最低门槛的高热度模型之一。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*