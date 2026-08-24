# Hugging Face 热门模型日报 2026-08-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-23 23:10 UTC

---

# Hugging Face 热门模型日报（2026-08-24）

## 今日速览

今天的热榜被 **Qwen3.8-27B** 生态强势主导：官方模型周点赞超 1.2 万，并衍生出 GGUF、FP8、MLX、abliterated/uncensored 等大量变体。**Moonshot AI 的 Kimi-K3** 以 1.09 万周点赞成为第二大亮点，开源权重多模态模型热度持续走高。**DeepSeek V4 Flash/Pro** 双双上榜，下载量表现亮眼。视频生成方向由 **MiniMax-H3** 与 **Lightricks LTX-2.5** 领跑，**MiniMax-Music3** 则带来文本生成音乐的增量。社区侧，“基座模型 + 多格式量化 + 去审查微调”成为本周最清晰的生态图景。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,307 | 2,358,347 | Qwen 官方发布的多模态大模型，支持图像+文本对话，是本周热榜第一。周赞超 1.2 万、下载逾 235 万，是 Qwen3.8 生态的核心基座。 |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 361 | 23,516 | 轻量激活的 MoE 语言模型，35B 总参数、3B 激活，并附带图像文本理解能力。以更低推理成本提供多模态能力，是 Ornith 系列旗舰。 |
| [ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 180 | 31,496 | Ornith 系列的小尺寸版本，保留 image-text-to-text 能力。适合资源受限场景，也说明中等规模 MoE/多模态模型受社区关注。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,652 | 3,089,709 | DeepSeek V4 的 Flash 轻量对话模型，主打响应速度与高性价比。周赞 3,652、下载超 308 万，是本周下载量最高的 DeepSeek 模型之一。 |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 733 | 57,928 | DeepSeek V4 的 Pro 版本，面向复杂推理和长对话场景。下载量仍处于早期爬升阶段，但周赞表现说明社区对旗舰版保持关注。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,949 | 2,727,920 | Moonshot AI 开放的多模态大模型，支持 image-text-to-text 输入。周赞近 1.1 万、下载超 272 万，是本周第二大热门开源模型。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,637 | 738,345 | Lightricks 的视频生成模型，支持 image-to-video、text-to-video 和 video-to-video。周赞 1,637、下载 73.8 万，是视频生成方向的重要玩家。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,377 | 4,039,236 | MiniMax 的图像/文本到视频模型，可通过图文条件生成视频。周赞 4,377、下载超 403 万，是多模态生成类下载量最高的模型。 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,205 | 17,421 | MiniMax 的文本到音乐生成模型，面向音乐创作场景。周赞 1,205 显示音频生成兴趣上升，但下载量目前仍处早期阶段。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,420 | 0 | 面向 MLX/Jinja 生态的 Qwen 聊天模板修复工具仓库。零下载但获 1,420 周赞，说明开发者对 Qwen 模板兼容性存在明显痛点。 |
| [peculiar-ragdoll/Qwen-Sharp-Chat-Templates](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates) | peculiar-ragdoll | 199 | 0 | 另一个 Qwen 聊天模板精调仓库，主打“Sharp”模板质量。同样零下载但有社区认可，反映模板工具类仓库的价值。 |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 214 | 2,280 | 标签含 ASR 与 text-generation 的语音转写/识别模型，面向自动语音识别场景。周赞不高，但代表音频理解方向的垂直探索。 |
| [LBH-123-AI/Minimax_h3_latent_Upscaler](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler) | LBH-123-AI | 166 | 0 | MiniMax-H3 的潜在空间放大组件，用于视频生成后处理。作为配套工具仓库，帮助补全视频生成工作流。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,737 | 6,674,515 | unsloth 出品的 Qwen3.8 GGUF 量化版，兼容 llama.cpp 等本地推理框架。下载量达 667 万，为全榜单最高，凸显本地部署需求强劲。 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,044 | 190,062 | FP8 量化 + uncensored 去审查变体，保留多模态能力。周赞超 1,000，是去限制类模型中较受欢迎的一款。 |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 952 | 47,098 | 面向 Apple Silicon 的 MLX 版本，同样走 uncensored/abliterated 路线。适合 Mac 本地运行，是 Qwen3.8 生态在 Apple 设备上的延伸。 |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 672 | 2,653,678 | 官方 FP8 量化版本，降低显存占用并提升部署效率。下载超 265 万，是 Qwen3.8 官方生态的重要分发格式。 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 648 | 1,334,820 | 社区 GGUF 量化 + uncensored 版本，支持 MTP。下载超 133 万，说明高可用去审查量化版有巨大本地部署需求。 |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 625 | 244,834 | abliterated “去审查”代表模型，提供 MLX/GGUF/safetensors 多格式。周赞 625，是 Qwen3.8 去审查方向的高辨识度存在。 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 535 | 676,697 | GGUF 量化并集成 aggressive MTP 加速的 uncensored 版本。下载 67.6 万，说明性能调优与量化组合很受本地用户欢迎。 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 373 | 108,666 | orcarouter 的另一款 uncensored GGUF 版本，适配低资源设备。周赞 373，与 MLX/FP8 版本形成互补生态。 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 296 | 943,360 | huihui-ai 的 abliterated GGUF 量化版。下载 94.3 万，是社区去审查生态中传播最广的量化格式之一。 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 257 | 24,844 | 同系列的 safetensors 非量化版本，可直接用于 transformers。周赞 257，满足不使用 GGUF 的部署与微调需求。 |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 251 | 369,478 | Ornith 35B MoE 模型的 GGUF 量化版，方便本地运行大参数模型。下载 36.9 万，是 Ornith 系列最具规模的分发版本之一。 |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 250 | 131,435 | Qwen3.8 的 “Ridge” 量化调优版 GGUF。周赞 250，继续丰富 Qwen3.8 的本地部署格式矩阵。 |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 244 | 579,334 | “Heretic” 风格激进去审查 + GGUF 量化版本。下载近 58 万，是 uncensored 分支中人气较高的衍生模型。 |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 208 | 193,794 | 社区高阶合并/微调模型，标签包含 GAIN Training 与 Cold-Fusion，并提供 GGUF。周赞 208，体现社区对复杂合并玩法的兴趣。 |
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 202 | 36,234 | 引入 DFlash2 投机解码的 Qwen3.8 变体，目标是降低推理延迟。适合关注生成速度的研究者和部署团队。 |
| [ornith-ai/Ornith-1.5-9B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF) | ornith-ai | 176 | 359,078 | Ornith 9B 的 GGUF 量化版，适合小显存设备本地运行。下载 35.9 万，与 35B 版形成规模互补。 |
| [incoai/Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2) | incoai | 162 | 69,783 | 另一个 DFlash2 投机解码实现版本。点赞 162，显示社区对解码加速和推理优化方案兴趣升温。 |

## 生态信号

本周 **Qwen3.8-27B** 家族处于绝对主导：官方基座与大量 GGUF/MLX/FP8、uncensored/abliterated 衍生版共同占据近 2/3 榜单，说明大模型发布后会快速形成“基座 + 量化 + 微调”生态链。**DeepSeek V4 Flash/Pro** 和 **Kimi-K3** 证明开源权重大模型仍是热度中心；**MiniMax-H3**、**LTX-2.5**、**Music3** 则让视频/音频生成扩散到更多模态。社区侧，GGUF 下载量奇高（unsloth 版超 667 万），本地部署和去审查微调是最活跃的两类活动。

## 值得探索

- **Qwen/Qwen3.8-27B**：官方多模态基座，本周热度最高；适合作为理解 Qwen3.8 系列能力边界与衍生生态的起点。
- **moonshotai/Kimi-K3**：周赞近 1.1 万，开放权重多模态新贵；值得与 Qwen3.8-27B 做多模态对话与生成能力的横向对比。
- **unsloth/Qwen3.8-27B-GGUF**：全榜下载量第一，是本地部署与量化生态的最佳实践样本；适合快速验证 GGUF 推理效果。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*