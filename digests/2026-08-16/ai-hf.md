# Hugging Face 热门模型日报 2026-08-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-15 23:11 UTC

---

# Hugging Face 热门模型日报（2026-08-16）

## 今日速览

本周 Hugging Face 生态由多模态模型领跑：Moonshot 的 **Kimi-K3** 以 10,722 赞登顶，Qwen 3.8 系列也凭借视觉语言能力拿下 9,762 赞，证明“图像+文本”融合是当前最大热点。**MiniMax-H3** 视频生成家族衍生出大量量化版、LoRA 与 ComfyUI 工作流，下载量突破千万，形成完整生态链。文本生成领域，DeepSeek V4 与 NVIDIA Nemotron 3.5 以 MoE + 低激活参数推动高效推理落地。社区侧，GGUF/FP8/LoRA 等量化微调版本下载量普遍高于原版，本地化与垂直化部署需求旺盛。整体来看，开源权重模型在规模、效率与多模态能力上正快速逼近闭源产品。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 966 | 6,381 | Qwen 3.8 系列的旗舰级 MoE 文本模型，总参数 2.4T，激活参数 95B，代表开源文本生成的顶尖规模。 |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 488 | 19,945 | DeepSeek V4 的 Pro 版本，面向复杂推理与高质量回答，是 DeepSeek 新一代模型的重要发布。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,418 | 1,798,247 | DeepSeek V4 的 Flash 轻量版本，主打高吞吐低延迟；下载量近 180 万，是本周最活跃的文本生成模型之一。 |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 270 | 170,554 | NVIDIA 的高效 MoE 模型，30B 总参/3B 激活，使用 NVFP4 量化精度，适合消费级硬件推理。 |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 256 | 4,832 | inclusionAI 的 Ling 3.0 Tiny 小型模型，采用 bailing hybrid 混合架构与自定义代码，探索小型化 LLM。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 627 | 135,448 | Liquid AI 推出的 2.6B 语言模型，主打高效推理与低价部署，是中小模型赛道的高热度选手。 |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 150 | 62,965 | Nemotron 3.5 Lightning 的 BF16 精度版本，保持 30B/3B MoE 架构，适合高精度场景。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 9,762 | 91,917 | Qwen 3.8 多模态旗舰，支持图像+文本输入、文本输出；周点赞近万，是本周极具人气的视觉语言模型。 |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,574 | 246,454 | Meta 推出的 Muse Glimmer 多模态对话模型，30B 参数，支持图像与文本交互，下载量超 24 万。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 937 | 378,439 | Lightricks 的图像转视频模型，支持多种视频生成任务；下载近 38 万，在视频生成领域热度很高。 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 766 | 5,079 | MiniMax 的第三代音乐生成模型，可通过文本直接作曲，代表音频生成赛道的最新突破。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,971 | 2,212,155 | MiniMax 最新视频生成基础模型，支持文本/图像到视频，下载量超 220 万，是当前视频生成的核心权重。 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 513 | 211,917 | 社区对 MiniMax-H3 的 Turbo 优化版，专注快速图像/视频生成，下载超 21 万，反映轻量化需求。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,722 | 2,100,680 | Moonshot AI 的多模态模型，采用压缩张量技术，支持视觉与文本理解；周点赞为本周最高，下载超 210 万。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,344 | 12,790,850 | MiniMax-H3 的 ComfyUI 原生版本，可直接在节点式工作流中调用；下载量超 1278 万，是视频生成生态基础设施。 |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 188 | 16,829 | 单文件文本到图像模型，支持 ComfyUI，适合轻量级文生图场景。 |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 160 | 240 | dots-studio 推出的多模态文本生成模型，支持图像与文本输入；可能是预览版本，代表新兴团队的端侧探索。 |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 352 | 0 | Kijai 制作的 MiniMax-H3 ComfyUI 工作流配置，帮助用户搭建视频生成管线，是社区常用的参考实现。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

本周无符合条件的专用模型，故省略。

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,210 | 867,963 | Unsloth 为 Qwen3.8-27B 提供的 GGUF 量化版，便于 CPU/GPU 本地部署；下载量超 86 万，是最高效的社区量化之一。 |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 433 | 682,188 | Muse-Glimmer-30B 的 GGUF 量化版本，支持本地高效运行多模态对话，下载超 68 万。 |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 423 | 123,157 | Qwen 官方的 FP8 量化版本，在精度与显存占用间取得平衡，适合高端 GPU 推理。 |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 277 | 321,049 | Meta 官方发布的 Muse-Glimmer GGUF 版本，提供多种量化档位，下载超 32 万。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,048 | 2,983,500 | 社区对 Qwen3.6 的“uncensored”微调 + GGUF 量化版本，周点赞超 2 千，下载近 300 万，是社区微调顶流。 |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 756 | 0 | 针对 MiniMax-H3-Turbo 的 LoRA 扩展，支持文本到视频/音频生成；下载虽为 0，但点赞 756 显示较强关注度。 |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 192 | 12,737 | fal 发布的 MiniMax-H3 LoRA，专注于生成写实人物视频，是视频风格化常用组件。 |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 193 | 10,745 | 超大规模 MoE 模型的 FP8 版本，显著降低 2.4T 参数的部署门槛。 |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 164 | 173,741 | Unsloth 对视频模型 MiniMax-H3 的 GGUF 量化，支持通过 stable-diffusion.cpp 运行，是视频轻量化的重要尝试。 |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 166 | 90,924 | Unsloth 基于 NVFP4 对 Qwen3.8-27B 的量化，专为 NVIDIA 新硬件优化，下载超 9 万。 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 147 | 0 | 对 Qwen3.8-27B 进行“uncensored”微调后的 FP8 版本，下载量为 0 但获赞 147，反映特定社区需求。 |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 330 | 633 | 社区基于 MiniMax-H3 的垂直微调版本，用于文本到视频；下载虽少，但说明热门视频模型开始出现风格化微调。 |

## 生态信号

本周生态呈现三个明确趋势：**多模态模型成为绝对主角**，Kimi-K3、Qwen3.8-27B、Muse-Glimmer 以及 MiniMax-H3 家族占据了榜单的前列和大部分下载量，图像/视频/音频生成正在从“单独任务”走向“统一理解与生成”。**高效推理架构备受青睐**，DeepSeek V4 Flash、NVIDIA Nemotron 3.5 Lightning 和 Qwen 的 MoE 版本均采用低激活参数或量化精度，说明开源社区对“千亿级高质量模型在消费级硬件运行”的需求极其强烈。**量化与微调生态高度繁荣**，Unsloth、DavidAU 等社区贡献者提供的 GGUF/FP8/LoRA 版本下载量往往超过原版数倍，视频模型也出现了 LoRA 与 GGUF 的“轻量化复制”，意味着本地化、垂直化部署已成为模型分发的主流方式。此外，开源权重继续向闭源收敛，但社区通过微调和量化进一步拉大了实用性优势。

## 值得探索

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**：本周点赞王，采用“压缩张量”技术，在多模态理解能力上实现了成本与效果的平衡，值得研究其架构与部署方式。
- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) 及其生态（如 [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)）**：视频生成领域的基础设施层，衍生出十余个量化/工作流版本，是了解视频生成模型应用闭环的最佳切入点。
- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**：Qwen 新一代多模态旗舰，兼顾对话与视觉能力，且官方给出 FP8 / GGUF 等多种量化分支，适合作为视觉语言模型测试与微调起点。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*