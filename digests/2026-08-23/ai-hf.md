# Hugging Face 热门模型日报 2026-08-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-22 23:10 UTC

---

## 《Hugging Face 热门模型日报》— 2026-08-23

### 今日速览

今日 Hugging Face 热门榜由 Qwen 生态强势主导：**Qwen/Qwen3.8-27B** 以 12,127 周赞登顶，庞大的量化与微调衍生家族占据榜单半壁江山。DeepSeek V4 Flash/Pro 双双上榜，其中 Flash 下载量近 300 万。多模态生成赛道火热，**MiniMax-H3**、**Lightricks LTX-2.5** 与 **MiniMax-Music3** 分别领跑视频与音乐生成。Kimi K3、Muse-Glimmer 等新秀表现亮眼，社区级 abliterated/uncensored 微调与 GGUF/FP8/MLX 量化活动高度活跃。

### 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,629 | 2,976,281 | DeepSeek V4 闪电版，主打低延迟和高吞吐；下载近 300 万、点赞 3,629，反映市场对高性能推理模型的热切需求。 |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,146 | 17,386 | 通义千问 3.8 的 MoE 巨模型，2.4T 总参数、95B 激活，文本生成能力极强；1,146 赞代表超大规模开源模型的持续投入。 |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 718 | 54,566 | DeepSeek V4 系列专业版，面向复杂对话与推理任务；718 赞是 V4 生态的稳健补充。 |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 320 | 12,611 | 基于 Qwen3.5 MoE 架构的稀疏模型，总参数 35B、激活 3B，主打高效推理；上榜因其公开即获 320 赞，是 MoE 路线的社区关注点。 |

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,127 | 2,090,699 | 通义千问 3.8 旗舰视觉语言模型，支持图像+文本混合输入；12,127 赞、下载 209 万，是当前 HF 最热模型。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,925 | 2,612,739 | 来自月之暗面的多模态模型，支持图像文本理解与特征压缩；10,925 赞与 261 万下载，是榜单中的现象级新作。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,335 | 3,899,160 | 新一代视频生成模型，支持图生视频、文生视频；下载 389 万、赞 4,335，在视频生成赛道一骑绝尘。 |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,755 | 517,564 | Meta Models 推出的 30B 多模态对话模型，强调图像理解和自然交互；1,755 赞、下载 51 万。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,562 | 694,670 | Lightricks 的视频生成模型，覆盖文生视频、图生视频、视频编辑；1,562 赞、下载 69 万。 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,181 | 16,644 | 文本生成音乐模型，支持直接创作音乐；1,181 赞显示 AI 音乐领域正在走热。 |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 316 | 0 | 基于 MiniMax-H3 的社区微调视频模型，面向特定风格生成；虽暂无下载，但 316 赞反映小众定制需求。 |

#### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,396 | 0 | 专注修复 Qwen 聊天模板的兼容性问题，支持 MLX、Jinja 等；0 下载但有 1,396 赞，属于高价值的开发者工具。 |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 200 | 1,913 | 基于 Qwen 的迷你 ASR 语音识别模型，面向轻量场景；200 赞表明语音识别仍受关注。 |
| [LBH-123-AI/Minimax_h3_latent_Upscaler](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler) | LBH-123-AI | 159 | 0 | 为 MiniMax-H3 设计的潜在空间放大器，用于视频分辨率提升；159 赞作为生态工具获得认可。 |

#### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,620 | 6,320,542 | Qwen3.8-27B 的 GGUF 量化版，适配 llama.cpp 等本地推理框架；下载量达 632 万，是当日最热门的量化模型。 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 987 | 142,846 | 基于 Qwen3.8-27B 的 FP8 量化 Abliterated 版，在降低显存的同时提供更高的生成自由度；987 次点赞彰显社区热度。 |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 884 | 34,909 | 面向苹果芯片的 MLX 格式 Uncensored 版，方便 Mac 用户本地部署；获 884 赞，是 Apple Silicon 生态的重要补充。 |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 664 | 2,306,777 | 官方发布的 FP8 量化版本，精度和显存占用平衡良好；下载量超 230 万，是官方量化方案的默认选择之一。 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 622 | 1,223,422 | 社区制作的 Uncensored GGUF，支持 MTP（多 token 预测）加速；下载超 122 万，是 llama.cpp 用户常用选项。 |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 527 | 164,950 | 以“抹除”为名的 Abliterated 版本，去除模型的安全拒绝行为；提供 MLX/GGUF 等多种格式，获 527 赞。 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 483 | 486,221 | 主打激进 MTP 优化的 GGUF 量化版，同时保留视觉理解能力；下载 48 万+，适合多模态任务的本地部署。 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 335 | 85,371 | orcarouter 推出的另一款 Uncensored GGUF，基于 Qwen3 权重；335 赞，适合轻量级本地化实验。 |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 334 | 1,202,168 | NVIDIA FP4 极低精度量化版，大幅降低显存占用；下载量超 120 万，为 RTX 等消费级 GPU 提供运行可能。 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 254 | 635,416 | 流行微调作者 huihui-ai 的 Abliterated GGUF，社区口碑良好；254 赞、下载 63 万，展示去审查模型的旺盛需求。 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 244 | 21,612 | huihui-ai 的非量化 Abliterated 版，保留完整精度；适合进一步微调或高精度推理。 |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 243 | 97,247 | empero-ai 的“Ridge”GGUF 量化版，提供多种量化档位；243 赞，下载近 10 万。 |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 231 | 173,935 | Ornith MoE 模型的 GGUF 转换版，便于低资源设备运行稀疏架构模型；231 赞，下载 17 万+。 |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 226 | 505,813 | 极限化 Abliterated 的“异端”GGUF 版，主打完全去审查；下载超过 50 万，体现特定用户群体的偏好。 |
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 192 | 29,705 | 搭载 DFlash2 推测解码技术，可显著提升自回归生成速度；192 赞，是推理优化方向的代表。 |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 189 | 176,969 | 名为 Cold-Fusion GAIN 的复合微调并量化 GGUF，集成 MTP 与多种优化策略；下载 17.7 万，是复杂社区调校的典型。 |

### 生态信号

Qwen 家族已成为开源中坚：从旗舰 Qwen3.8-27B 到 2.4T MoE，再到 unsloth、huihui 等第三方量化微调，形成完整供给链。开源权重势头明显，DeepSeek V4、Kimi K3、MiniMax H3 等均开放下载，持续压缩闭源优势。量化活动集中在 GGUF、FP8、MLX、NVFP4 等格式，以及 abliterated/uncensored 微调，反映本地部署与个性化定制需求上升；同时 DFlash2、MTP 等推理加速与模板修复工具出现，说明基座模型正走向工具化和生态化。

### 值得探索

- **Qwen/Qwen3.8-27B**：作为榜单冠军的基础多模态模型，能力全面，是理解 Qwen 3.8 生态的起点，也最适合验证最新多模态对话效果。
- **DeepSeek-V4-Flash-0731**：高下载高赞的闪电版，兼具高性能与实用性，适合实际部署测试，体验 DeepSeek V4 的推理速度。
- **MiniMaxAI/MiniMax-H3**：视频生成赛道的新霸主，下载近 390 万，值得对比评测其在文生视频、图生视频中的生成质量与效率。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*