# Hugging Face 热门模型日报 2026-08-17

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-16 23:09 UTC

---

# 📊 Hugging Face 热门模型日报 · 2026-08-17

## 📌 今日速览

本周榜单由 **Kimi K3** 与 **Qwen 3.8** 双雄领跑：Kimi K3 以 10,762 点赞登顶总榜，压缩张量多模态路线成为焦点；Qwen3.8-27B 以 10,251 点赞紧随其后。**Qwen 3.8 家族**全面扩张，MoE 巨无霸 2.4T-A95B 与官方 FP8、unsloth GGUF/NVFP4 等量化变体集体上榜。**MiniMax** 占据视频生成半壁江山，H3、Turbo、LoRA 与 ComfyUI 整合包协同贡献了全榜最高的 1,340 万下载。**DeepSeek V4** Flash/Pro 双版本在列，Flash 下载达 187 万，轻量高性价比路线获得市场验证。此外，GGUF/FP8/NVFP4 等量化模型占榜单近三分之一，社区 Uncensored 微调热度不减。

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,762 | 2,136,775 | Kimi 新一代多模态对话模型，支持图像+文本输入，并采用压缩张量技术。以 10,762 点赞登顶全榜第一，下载量超 213 万，是本周最受关注的发布。 |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 10,251 | 267,725 | Qwen 3.8 旗舰多模态对话模型，支持图像与文本联合输入。10,251 点赞紧随榜首，是通用对话与视觉理解的主流选择。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,455 | 1,872,232 | DeepSeek V4 轻量 Flash 版，主打低延迟高并发文本生成。3,455 点赞与 187 万下载，是系列中最受欢迎的部署级模型。 |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,624 | 292,973 | Meta 推出的 30B 多模态对话模型，聚焦图像+文本理解。近 30 万下载使其成为 Meta 开源视觉语言模型的主要入口。 |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,005 | 7,932 | Qwen 3.8 系列超大规模 MoE 模型，总参数 2.4T、激活参数 95B。作为稀疏 MoE 的规模探索，刚发布即收获千赞。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 643 | 141,009 | Liquid AI 的 2.6B 小参数语言模型 LFM2.5。以 14.1 万下载验证了高效小模型在社区的强劲需求。 |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 530 | 21,873 | DeepSeek V4 系列高配 Pro 版本，面向复杂推理与长文本生成。与 Flash 版形成高低搭配，530 点赞保持较高热度。 |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 280 | 5,727 | Ling 3.0 轻量模型，采用 bailing_hybrid 架构并以 MIT 许可开源。面向区域化部署场景，适合边缘设备与本地研究。 |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 182 | 393 | dots3_note 架构的早期预览文本生成模型。目前处于探索阶段，下载量有限，但其新架构思路值得跟进。 |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 156 | 66,253 | NVIDIA 30B 总参/3B 激活 MoE 语言模型的 BF16 原版。主打高能效推理，是 NVFP4 量化版的基础权重。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,023 | 2,307,541 | MiniMax 新一代视频生成模型，支持文本/图像到视频。4,023 点赞与 230 万下载，是原生视频模型中的绝对热门。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,381 | 13,406,892 | ComfyUI 官方适配的 MiniMax-H3 模型整合包。13,406,892 下载为全榜最高，是视频创作者接入 H3 的核心入口。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,019 | 424,099 | 多功能视频生成模型，支持图生视频、文生视频与视频编辑。42.4 万下载，是视频生成赛道的重要开源选择。 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 832 | 8,639 | 第三代音乐生成模型，根据文本指令生成音乐。832 点赞体现了社区对音频生成新模型的高关注度。 |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 772 | 0 | MiniMax-H3-Turbo 的 LoRA 适配，支持文生视频与音视频联合生成。刚发布暂无下载，但 772 点赞显示较高的市场期待。 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 552 | 239,206 | MiniMax-H3 的 Turbo 加速变体，主打更快的图像到视频推理。23.9 万下载表明社区对低延迟视频生成的迫切需求。 |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 225 | 16,103 | 面向 MiniMax-H3 的人物写实 LoRA，专注提升人像真实感。适合在 H3 工作流中增强人物视频生成质量。 |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 218 | 20,860 | Anima 文生图扩散模型，支持 ComfyUI 单文件加载。2.9B 参数专注于动漫/艺术风格图像生成，便于本地运行。 |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 172 | 204,344 | MiniMax-H3 的 GGUF 量化版，兼容 stable-diffusion.cpp。让低显存设备也能运行视频生成，下载超 20 万。 |
| [Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 147 | 0 | ComfyUI 对 MiniMax-Music3 的官方适配，采用 Apache-2.0 许可。将音乐生成能力接入 ComfyUI 工作流，刚发布暂无下载。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,090 | 3,020,070 | 社区深度微调的 Qwen3.6-27B 创意向 GGUF，主打 Uncensored 与多风格融合。302 万下载与 2,090 点赞，是社区微调模型中的领跑者。 |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,441 | 1,945,635 | Qwen3.8-27B 的 GGUF 量化版，是社区调用量最高的 Qwen 3.8 变体。194.5 万下载印证本地推理对 GGUF 的强依赖。 |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 477 | 352,971 | Qwen 官方推出的 FP8 量化版，面向高吞吐生产部署。35.3 万下载表明官方量化已成为服务端使用的主流。 |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 453 | 718,178 | Meta Muse-Glimmer-30B 的社区 GGUF 量化。71.8 万下载超过官方原版，社区分发渠道优势明显。 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 338 | 4,285 | 经 abliterated 去审查处理的 Qwen3.8-27B FP8 版。满足社区对更少约束对话风格的定制需求。 |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 293 | 357,877 | Meta 官方提供的 Muse-Glimmer-30B GGUF 量化。官方直接跟进量化格式，显著降低本地部署门槛。 |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 286 | 196,326 | NVIDIA 官方 NVFP4 量化版，针对自家硬件深度优化。19.6 万下载，是 Nemotron 3.5 本地部署的主力形态。 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 206 | 183,988 | 兼容 llama.cpp 并支持 MTP 的 Qwen3.8-27B 无审查 GGUF。为本地用户提供更高自由度的对话体验。 |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 204 | 11,311 | 2.4T 级 MoE 模型的官方 FP8 量化版。大幅降低超大模型显存需求，推动超大规模稀疏模型走向实际部署。 |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 197 | 276,269 | 面向 NVIDIA 新硬件的 NVFP4 低比特量化版。4-bit 级精度兼顾质量与效率，下载 27.6 万。 |

## 🌐 生态信号

本周生态呈现四大趋势：一是 **Qwen 3.8 家族**形成从 27B 密集、2.4T MoE 到 FP8/GGUF/NVFP4 的完整矩阵，官方与 unsloth 共创部署生态；二是 **MiniMax H3** 以官方模型、Turbo、LoRA 与 ComfyUI 整合包多路并进，13.4M 下载表明工作流集成是开源分发关键；三是榜单 30 个模型全部开放权重，厂商直接发布量化版，部署门槛持续走低；四是 MoE 与 2.6B 小模型同台，效率优先取向明显。Uncensored 微调多款上榜，低约束对话需求依旧旺盛。

## 🔭 值得探索

1. **[Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)** — 当前开源稀疏 MoE 的规模天花板（2.4T 总参 / 95B 激活），适合研究超大模型训练、路由策略与量化部署的极限。

2. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 全榜点赞第一，压缩张量（compressed-tensors）技术值得深挖；可在显存受限环境实现高质量图文对话，极具部署参考价值。

3. **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** — 1,340 万下载验证了它是视频生成落地最成熟的入口，配合官方 H3 权重与 LoRA 可快速搭建图生视频生产管线。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*