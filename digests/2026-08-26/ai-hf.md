# Hugging Face 热门模型日报 2026-08-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-26 00:00 UTC

---

# Hugging Face 热门模型日报（2026-08-26）

## 今日速览

- [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) 以 **12,706 周赞**登顶，围绕它已形成覆盖 GGUF、MLX、FP8、2-bit 的庞大衍生生态。
- 前沿开源模型竞争白热化：DeepSeek-V4-Flash 下载量超 **352.8 万**，Kimi-K3 周赞近 **1.1 万**。
- 多模态与生成赛道密集上新：MiniMax-H3 下载量达 **463.9 万**，LTX-2.5、MiniMax-Music3 同台上榜。
- 社区“去审查”热情不减，Uncensored / Abliterated 变体占据微调量化榜单近半数席位，成为最显眼的社区行为。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,706 | 2,945,415 | 官方旗舰多模态对话模型，原生支持图像+文本输入。周赞断层第一，是本周生态的核心基座。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,996 | 2,865,293 | Kimi 最新旗舰多模态模型，采用压缩张量技术。周赞近 1.1 万，下载近 287 万，表现亮眼。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,714 | 3,528,373 | DeepSeek V4 系列轻量版，下载量为本榜最高之一。主打高效部署，适合大规模对话场景。 |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 758 | 74,707 | V4 系列 Pro 版，定位更强推理与复杂任务。下载量仍在爬坡期，值得关注后续表现。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,455 | 4,639,786 | 视频生成模型，支持文本/图像到视频。下载量 **463.9 万**，为全榜最高，需求极为旺盛。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,797 | 833,845 | 新一代视频生成模型，覆盖图像到视频、文本到视频、视频到视频。开源视频生成的重要选择。 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,245 | 18,705 | 文本到音乐生成模型，基于 diffusers 生态。周赞超 1,200，音乐生成细分赛道亮点。 |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 419 | 70,158 | 35B 总参、3B 激活的 MoE 多模态模型，基于 Qwen3.5 架构。兼具视觉理解与文本生成能力。 |
| [ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 214 | 98,323 | 同系列 9B 密集版，体积更小、部署门槛更低。适合资源有限的多模态本地推理。 |
| [Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b) | Audio8 | 155 | 3,640 | 仅 0.1B 的超轻量 TTS 模型，基于 ArkTTS 架构。面向端侧语音合成场景，值得关注。 |
| [sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT) | sensenova | 152 | 2,682 | 商汤“任意到任意”原生多模态模型，8B 参数。支持文本/图像/音频等多种模态输入，MoT 架构。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 238 | 3,474 | 迷你 ASR 语音识别模型，基于 Qwen3 架构。兼顾文本生成与识别任务，适合轻量语音场景。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,914 | 7,334,695 | unsloth 出品的高兼容性 GGUF 量化版。下载量超 **733 万**，是本地部署 Qwen3.8 的首选格式。 |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,467 | 0 | 修复 Qwen 系列聊天模板的生态工具。周赞 1,467 但暂无下载，反映社区对模板兼容性的普遍痛点。 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,147 | 249,744 | FP8 量化去审查版，兼顾精度与显存占用。适合高端 GPU 直接运行。 |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,094 | 68,855 | 面向 Apple Silicon 的 MLX 格式去审查版。为 Mac 用户提供原生多模态体验。 |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 747 | 389,747 | 主打“强力去审查”的 Abliterated 版本。下载近 39 万，说明去安全对齐需求强劲。 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 721 | 1,525,645 | GGUF 格式 Uncenored 版，基于 llama.cpp 生态。下载超 152 万，附带 MTP 支持。 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 623 | 832,185 | 激进式 MTP 优化的 GGUF 去审查版，强调多模态视觉能力。下载超 83 万。 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 452 | 154,225 | 同作者 GGUF 去审查版，主打与 llama.cpp 的兼容性。适合快速体验 Abliterated 效果。 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 356 | 1,230,831 | huihui-ai 社区知名 Abliterated 系列。下载超 123 万，是去审查 GGUF 的热门选择。 |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 297 | 1,156,903 | Ornith-1.5-35B-A3B 的官方 GGUF 版，MIT 许可。MoE 模型量化后更易本地部署。 |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 274 | 735,183 | “Heretic” 风格深度去审查版本。下载超 73 万，社区关注度较高。 |
| [peculiar-ragdoll/Qwen-Sharp-Chat-Templates](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates) | peculiar-ragdoll | 244 | 0 | 另一种 Qwen 聊天模板修复方案，MLX/Jinja 格式。0 下载但高赞，说明开发者对模板正确性敏感。 |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 240 | 221,918 | 集成 GAIN Training 与 Cold-Fusion 技术的 GGUF 版本。叠加多种优化，适合追求极限性能的玩家。 |
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 227 | 64,984 | DFlash2 投机解码量化版，提升推理吞吐。面向生产环境的高效部署探索。 |
| [ornith-ai/Ornith-1.5-9B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF) | ornith-ai | 201 | 1,144,037 | Ornith-1.5-9B 官方 GGUF 版，MIT 许可。下载超 114 万，端侧多模态轻量选择。 |
| [orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) | orcarouter | 183 | 15,341 | 未量化原尺寸 Abliterated 版本。保留完整精度，适合自行转制其他格式。 |
| [incoai/Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2) | incoai | 179 | 105,786 | 与 z-lab 同思路的 DFlash2 投机解码版本。提供另一套量化方案，下载已超 10 万。 |
| [EschaLabs/Qwen3.8-27B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.8-27B-Escha-W2) | EschaLabs | 126 | 2,319 | 2-bit 极限量化版本，将体积压缩到极致。适合显存极度受限的环境，但精度损失需自行评估。 |

## 生态信号

**Qwen3.8-27B 生态呈垄断级热度**：官方 + 衍生版本占据榜单约三分之二席位，GGUF、MLX、FP8、2-bit、投机解码等量化路线全面开花。**开源权重继续主导**：DeepSeek、Kimi、MiniMax、Lightricks 均开放下载，Top 模型无一闭源。社区侧，**Uncensored / Abliterated 系列**持续高产，反映用户对安全对齐限制的规避需求强烈；同时 **DFlash2 投机解码**和 **MoE 低激活设计**表明开源社区正从“能跑”转向“跑得更快、更省”。

## 值得探索

- [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)：本周生态绝对核心，多模态 + 对话能力强，衍生工具链最完整，适合作为基座或部署首选。
- [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)：周赞近 1.1 万的最强新秀，压缩张量技术值得深入研究，是开源多模态模型的重要技术方向。
- [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)：开源视频生成的全能选手，覆盖多种视频任务，下载超 83 万，值得视频创作者和研究者重点关注。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*