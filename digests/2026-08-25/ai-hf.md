# Hugging Face 热门模型日报 2026-08-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-24 23:13 UTC

---

## 📊 Hugging Face 热门模型日报（2026-08-25）

### 今日速览

今日榜单由 **Qwen3.8 生态**主导：围绕 Qwen3.8-27B 的官方基座、GGUF/FP8/MLX 量化版、Uncensored/Abliterated 去审查版等衍生模型占据约 20 席，社区对“多模态旗舰 + 本地部署 + 去审查”的组合需求极为旺盛。**DeepSeek-V4-Flash-0731** 与 **MiniMax-H3** 分别成为文本生成和视频生成赛道的热门头部。**Ornith 1.5 系列**以 MoE 架构吸引关注，而视频生成（LTX-2.5）、音乐生成（MiniMax-Music3）和 TTS 新模型也为榜单带来多元供给。

---

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,508 | 2,645,226 | Qwen3.8 官方旗舰模型，支持图像与文本联合输入和对话。周点赞居首，是整个 Qwen3.8 生态的基座。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,681 | 3,274,129 | DeepSeek V4 系列的高效文本生成与对话模型。官方权重热度极高，下载量超过 327 万，是头部开源 LLM 代表。 |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 394 | 60,294 | 总参数 35B、激活参数 3B 的 MoE 文本生成模型，并带有 Qwen3.5_MoE 多模态标签。低激活参数比带来推理效率优势，是值得关注的架构新方向。 |
| [ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 200 | 83,192 | Ornith 1.5 系列的小尺寸版本。相比 35B-A3B 更轻量，适合低资源本地部署与快速实验。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,417 | 4,465,161 | 图像/文本到视频生成模型。周点赞超 4,400、下载超 446 万，是本期视频生成领域热度最高的模型。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,721 | 790,378 | 视频生成模型，支持图像到视频、文本到视频、视频到视频等任务。以 diffusion-single-file 形式发布，下载量接近 80 万。 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,228 | 18,065 | 音乐生成模型，支持 text-to-music / text-to-audio。周点赞过千，反映社区对音乐生成赛道的关注度正在升温。 |
| [Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b) | Audio8 | 145 | 2,775 | 轻量 TTS 预览模型，支持 text-to-speech。下载量目前不高，但代表语音生成方向的新一轮探索。 |
| [LBH-123-AI/Minimax_h3_latent_Upscaler](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler) | LBH-123-AI | 181 | 0 | MiniMax-H3 配套的 latent upscaler 工具/模型。适合与 H3 配合进行视频画质放大实验，当前下载量为 0，但已有 181 赞。 |

---

### 🔧 专用模型与工具（代码、数学、医疗、嵌入、模板等）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,446 | 0 | 非权重型仓库，提供修复后的 Qwen chat-template 配置。下载量为 0，但获 1,446 赞，说明开发者对 Qwen 模板兼容性高度关注。 |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 229 | 2,976 | 语音识别/文本生成模型，标签同时包含 ASR 与 Qwen3。可作为语音-语言任务的轻量研究基线。 |
| [peculiar-ragdoll/Qwen-Sharp-Chat-Templates](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates) | peculiar-ragdoll | 226 | 0 | 类似“Qwen 聊天模板修复/增强”的 Jinja 模板工具。面向需要自定义 chat template 的本地推理场景，当前下载量为 0。 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,831 | 7,009,063 | Qwen3.8-27B 的 GGUF 量化版，由 unsloth 发布。下载量超过 700 万，是社区本地部署 Qwen3.8 的主要入口之一。 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,097 | 224,114 | 基于 Qwen3.8-27B 的 FP8 量化去审查版。兼顾显存占用与“Uncensored”能力，适合需要宽松内容边界的用户。 |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,026 | 57,947 | Qwen3.8-27B 的 MLX 格式去审查版，面向 Apple Silicon。在 macOS 本地运行多模态模型时较有吸引力。 |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 693 | 312,627 | 多格式 abliterated 版本，同时提供 MLX、safetensors、GGUF。周点赞 693，是社区“去审查”路线的高热度模型。 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 688 | 1,456,700 | Qwen3.8-27B 的 GGUF 去审查量化版，支持 llama.cpp 与 MTP。下载量超过 145 万，是量化去审查赛道的重要选择。 |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 680 | 3,004,940 | 官方发布的 Qwen3.8-27B FP8 量化版。在保证多模态能力的同时降低资源门槛，下载量超 300 万。 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 576 | 761,975 | 带 Aggressive-MTP 的 GGUF 去审查量化版。下载量超过 76 万，体现社区对“更激进”量化格式的尝试。 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 421 | 143,108 | orcarouter 出品的 Qwen3.8-27B GGUF 去审查版。与同系列 FP8/MLX 版本形成互补生态。 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 333 | 1,140,375 | huihui-ai 的 Qwen3.8-27B abliterated 版，提供 GGUF 格式。下载量超过 114 万，是社区去审查量化版的主要选择之一。 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 276 | 27,316 | 同系列的 safetensors 完整精度版本，面向需要未量化权重的用户。点赞数在 huihui-ai 系列中紧随 GGUF 版之后。 |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 274 | 988,170 | Ornith-1.5-35B-A3B 的 GGUF 量化版，标签包含 MIT license 与 endpoints_compatible。下载量接近 100 万，显示 MoE 模型量化需求强劲。 |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 260 | 162,580 | Qwen3.8-27B 的 llama.cpp 兼容 GGUF 量化版。下载量 16 万，属于社区量化生态中的长尾选择。 |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 257 | 654,805 | 主打“Uncensored + Abliterated”的 Qwen3.8-27B GGUF 版。下载量超过 65 万，同样印证去审查模型的热度。 |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 225 | 209,017 | 使用 Cold-Fusion / GAIN Training 方法进一步调校的 GGUF 版本。命名信息量大，适合关注社区微调和量化进阶玩法的用户。 |
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 214 | 50,763 | Qwen3.8-27B 的 DFlash2 投机解码版本。目标是通过辅助解码加速生成，是推理效率优化方向的代表。 |
| [ornith-ai/Ornith-1.5-9B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF) | ornith-ai | 185 | 971,104 | Ornith-1.5-9B 的 GGUF 量化版，支持 transformers / endpoints_compatible。下载量超过 97 万，是小模型本地部署的受欢迎选择。 |
| [incoai/Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2) | incoai | 173 | 85,034 | 与 z-lab 版本相似，也是 Qwen3.8-27B 的 DFlash2 投机解码实现。显示不同团队在同一推理加速方向上的竞争性发布。 |
| [orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) | orcarouter | 169 | 10,482 | Qwen3.8-27B 的原生精度 Uncensored 版本。适合不想要量化精度损失、但仍希望获得“去审查”行为的用户。 |

---

### 生态信号

当前 Hugging Face 社区明显呈现“以 Qwen3.8-27B 为核心”的生态特征：官方基座、GGUF/FP8/MLX 量化、Abliterated/Uncensored 去审查、投机解码优化等衍生模型几乎覆盖全部热门榜单。开源权重仍是绝对主流，DeepSeek、MiniMax、Qwen 等头部厂商均以开放权重作为主要分发方式。社区微调活动集中在“去审查”和“端侧部署”两条路线上，其中 GGUF 类模型下载量极高，说明本地推理与低成本部署已成为真实刚需；同时，诸如 DFlash2 和 MoE 低激活参数架构的出现，也表明推理效率正在成为下一代模型竞争的关键。

---

### 值得探索

- **Qwen/Qwen3.8-27B**：本周榜单的“生态源头”，集多模态理解、对话和生成于一体。想理解 Qwen3.8 衍生模型，应先从该官方基座入手。
- **MiniMaxAI/MiniMax-H3**：周点赞 4,417、下载超 446 万，是目前视频生成领域最受关注的开源权重模型之一，值得用于图像/文本到视频的对比研究。
- **ornith-ai/Ornith-1.5-35B-A3B**：35B 总参、3B 激活的 MoE 架构，兼顾能力与效率，是观察下一代高效开源 LLM 设计的重要样本。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*