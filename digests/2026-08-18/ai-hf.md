# Hugging Face 热门模型日报 2026-08-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-17 23:11 UTC

---

# Hugging Face 热门模型日报（2026-08-18）

## 今日速览

本周榜单由**多模态对话与视频生成**主导：Kimi-K3、Qwen3.8-27B 分别以 1.08 万和 1.07 万周点赞领跑，视觉语言模型成为最热赛道。视频生成方面，MiniMax-H3 生态一枝独秀，官方权重、Turbo 版本、LoRA 和 ComfyUI 适配层全链路涌现。量化生态同样活跃，unsloth 的 GGUF/NVFP4 等方案下载量极高，正在推动大模型向本地部署倾斜。DeepSeek-V4 系列与 NVIDIA 新 MoE 模型继续维持高热度，开源权重与社区二次创作形成正向循环。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,496 | 1,978,298 | DeepSeek V4 系列的闪速版，主打低延迟文本生成。周点赞近 3500、下载近 200 万，是本周最受关注的纯文本 LLM 之一。 |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,041 | 9,465 | Qwen3.8 系列的超大 MoE 模型，总参数 2.4T、激活 95B。稀疏结构兼顾质量与效率，是超大模型落地的前沿尝试。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 653 | 147,270 | 轻量级语言模型，2.6B 参数设计突出高性价比。下载超 14 万，适合边缘和设备端部署。 |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 573 | 25,006 | DeepSeek V4 专业版，面向复杂推理与长对话场景。与 Flash 版形成互补，保持 V4 家族的持续热度。 |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 306 | 6,266 | 基于 bailing_hybrid 架构的紧凑模型，强调效率与可定制性。虽下载量不高，但周点赞显示其开发者社区关注度正在上升。 |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 169 | 69,833 | NVIDIA 最新 MoE 语言模型，30B 总参数、3B 激活。BF16 标准精度版本，是研究高效推理架构的重要参考。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,800 | 2,163,953 | 月之暗面新一代多模态模型，支持图文联合理解与特征提取。以 1.08 万周点赞登顶榜首，下载超 216 万。 |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 10,697 | 415,039 | Qwen3.8 系列旗舰多模态模型，27B 参数擅长图文对话。周点赞与 Kimi-K3 几乎持平，是官方权重中最受追捧的模型。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,086 | 2,403,238 | MiniMax 旗舰视频生成模型，可图文生视频。下载超 240 万，是本周视频生成领域的中坚力量。 |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,660 | 334,099 | Meta 推出的 30B 多模态对话模型，支持图像+文本输入。周点赞 1660，下载 33.4 万，被社区广泛用于多模态研究。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,104 | 465,529 | Lightricks 新一代视频生成模型，支持文生、图生、视频生视频。下载 46.5 万，生成质量社区评价较高。 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 900 | 10,375 | 文本到音乐生成的扩散模型，专攻音乐创作。周点赞 900，是本周音频生成领域的热门发布。 |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 233 | 23,202 | 轻量级动漫风格文生图模型，采用单文件部署。下载 2.3 万，适合 ComfyUI 等本地工具直接调用。 |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 205 | 633 | dots3 系列预览版多模态模型，支持图文理解。下载量不高，但作为预发布版本引发特定技术社区关注。 |
| [LiquidAI/LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B) | LiquidAI | 162 | 6,816 | 轻量视觉语言模型，3B 参数兼顾多模态理解与部署效率。适合作为资源受限场景的视觉基线。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,209 | 0 | 提供 Qwen3.5 系列的修正版 Jinja 聊天模板，用于修复官方模板的兼容问题。虽无下载，但高点赞表明这是开发者社区急需的工具。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,119 | 3,033,928 | 社区高定制微调版 Qwen3.6-27B，融合“Fable-Fusion”等多重创意并为 GGUF 格式。下载超 300 万，是本周下载最高的微调模型之一。 |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,623 | 2,727,609 | unsloth 出品的 Qwen3.8-27B GGUF 量化版，专为 llama.cpp 等本地推理优化。下载 272.7 万，是量化生态中的首选之一。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,402 | 14,015,769 | 专为 ComfyUI 打包的 MiniMax-H3 单文件模型，简化节点式部署。下载超 1400 万，是本周下载总榜第一名。 |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 786 | 0 | 面向 MiniMax-H3-Turbo 的 LoRA 微调，可增强视频生成风格。虽然下载为 0，但高点赞反映了视频生成微调的旺盛需求。 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 583 | 264,351 | 社区发布的 H3 Turbo 加速版，支持多任务视频生成。下载 26.4 万，在 ComfyUI 工作流中广泛使用。 |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 527 | 495,646 | Qwen 官方 FP8 量化版，大幅降低显存需求。下载 49.5 万，是官方量化模型的标杆。 |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 470 | 755,125 | Muse-Glimmer-30B 的 GGUF 量化版，使多模态大模型能够在本地跑动。下载 75.5 万，量化赋能高参数多模态模型。 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 430 | 15,812 | 基于 abliterated 技术的去审查 FP8 版本，满足无限制对话需求。下载 1.5 万，面向小众社区场景。 |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 307 | 231,271 | NVIDIA 官方 NVFP4 4-bit 浮点量化版，提升 MoE 模型部署效率。下载 23.1 万，是硬件厂商推动量化标准的重要动作。 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 297 | 357,701 | 社区无审查版 Qwen3.8-27B GGUF，集成 MTP 特性。下载 35.7 万，是“uncensored”生态的代表。 |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 243 | 18,562 | 面向人物写实生成的 MiniMax-H3 LoRA，强化人物细节表现。下载 1.8 万，属于垂直风格微调插件。 |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 237 | 378,177 | unsloth 提供的 NVFP4 量化版，专为 NVIDIA 硬件深度优化。下载 37.8 万，与官方 FP8 版本形成互补。 |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 219 | 12,295 | 超大规模 MoE 模型 Qwen3.8-2.4T 的 FP8 量化版，降低部署门槛。下载 1.2 万，是高密度模型落地的关键一步。 |
| [Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 166 | 256,988 | ComfyUI 格式的音乐生成模型 MiniMax-Music-3。下载 25.7 万，使音频生成也能无缝融入节点式工作流。 |

## 生态信号

**Qwen3.8 家族**和 **MiniMax-H3 生态**是当前最强势的两条产品线：前者覆盖 27B 旗舰、2.4T MoE 以及 FP8/GGUF/NVFP4 多种部署形态；后者在视频生成赛道形成了“官方权重 + Turbo + LoRA + ComfyUI 适配”的完整社区链条。**DeepSeek-V4** 系列和 NVIDIA 新 MoE 模型继续巩固文本生成阵营，开源权重比例持续上升，闭源模型压力明显。量化活动异常活跃，unsloth 主导 GGUF/NVFP4 工具链，Comfy-Org 则将模型转换为单文件集成，真正推动了模型从“能跑”到“好用”的转变。

## 值得探索

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**：本周点赞第一，多模态理解与压缩张量技术兼具前沿性与实用性，值得深入分析模型设计。
- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**：旗舰多模态模型，配套官方 FP8 与社量化版本，可作多模态基线或本地部署实验对象。
- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**：视频生成生态最丰富的模型，LoRA、Turbo、ComfyUI 支持完善，适合作为视频生成研究和应用的首选试验场。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*