# Hugging Face 热门模型日报 2026-08-15

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-14 23:11 UTC

---

# Hugging Face 热门模型日报（2026-08-15）

## 今日速览

今日 Hugging Face 热门榜由“多模态 + 大厂开源权重”主导：Kimi-K3 以 10,670 赞登顶，Qwen3.8-27B 以 8,908 赞紧随其后。视频生成是本周最大生态焦点，MiniMax-H3 官方版下载近 200 万，同时带动了 LoRA、GGUF、ComfyUI 等大量衍生项目。文本大模型方面，DeepSeek V4 Flash/Pro、NVIDIA Nemotron 3.5 等陆续上新，可下载权重成为主流叙事。量化与轻量化持续活跃，GGUF、FP8/FP4 及 2.6B/2.9B 小模型集中出现，显示社区部署需求旺盛。

## 热门模型

> 说明：GGUF、FP8/FP4、LoRA、ComfyUI 单文件/工作流等归入“微调与量化”。

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,380 | 1,606,491 | DeepSeek V4 的高效版，面向高速文本生成与对话场景。下载量超过 160 万，是本周文本大模型中的流量担当。 |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 911 | 3,832 | Qwen 3.8 系列的超大规模 MoE 文本模型，总参数 2.4T、激活 95B。以稀疏结构服务高难度文本生成，是 Qwen 本轮纯文本旗舰。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 614 | 124,172 | 2.6B 小参数语言模型，主打低资源设备上的推理与 Agent 场景。上榜说明社区对小模型高效路线仍有稳定需求。 |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 431 | 245 | DeepSeek V4 Pro 最新快照，定位更强推理与复杂任务。下载量尚在爬坡，适合与 Flash 版做对照评测。 |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 234 | 2,283 | 任务标签暂缺，从命名看是一款轻量语言模型。作为新面孔进入热门榜，具体能力有待社区进一步验证。 |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 141 | 34,137 | NVIDIA 开源的大模型，30B 总参数、3B 激活，兼顾对话质量与推理效率。BF16 精度版本适合研究与部署调试。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,670 | 1,974,635 | 月之暗面最新多模态对话模型，支持图像+文本输入。周点赞位列全榜第一，压缩张量与特征提取标签暗示其在效率上有特别设计。 |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 8,908 | 2 | Qwen 3.8 系列的多模态版本，支持图像+文本对话。27B 规模兼顾理解与生成，目前下载量还处于早期爆发阶段。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,917 | 1,997,541 | MiniMax 的视频生成大模型，覆盖图生视频/文生视频。官方版本下载近 200 万，是本周视频生成领域流量最高的模型。 |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,509 | 165,300 | meta-models 发布的多模态对话模型，擅长视觉与语言联合理解。30B 参数，下载量超 16 万，社区集成热度较高。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 851 | 207,830 | Lightricks 推出的图像/文本到视频生成模型，主打电影感与高动态画面。与 MiniMax-H3 形成差异化，下载表现稳健。 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 645 | 63 | MiniMax 的音乐生成模型，支持文本直接生成音乐。下载量尚少，但音乐生成是本周值得关注的新模态方向。 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 493 | 149,865 | 社区对 MiniMax-H3 的 Turbo 加速版，支持 t2v/i2v/r2v 等多种视频生成。点赞接近 500，是 H3 生态中的速度优化代表。 |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 380 | 1,366 | NVIDIA 的语音对话模型，面向口语交互场景。任务标签未明确，但命名与论文引用显示其聚焦语音对话能力。 |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 160 | 10,106 | 轻量文生图模型，diffusion-single-file 便于 ComfyUI 直接使用。2.9B 参数提供低门槛的本地图像生成方案。 |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 136 | 11 | dots3 系列的预览模型，支持图像文本到文本。上线初期下载有限，但已进入热门榜，值得跟踪后续版本。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,015 | 2,891,524 | 社区微调的 Qwen3.6 27B 创意/角色扮演模型，名称带 uncensored 等标签。GGUF 版本下载近 290 万，是社区微调+量化路线的热门代表。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,317 | 11,768,622 | MiniMax-H3 的 ComfyUI 单文件打包版，方便本地直接部署。下载量超过 1,176 万，是本周下载量最高的模型文件。 |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 763 | 0 | unsloth 转换的 Qwen3.8-27B GGUF 量化版。当前下载显示为 0，可能刚上线，但 GGUF 格式对本地推理有直接价值。 |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 741 | 0 | 针对 MiniMax-H3-Turbo 的 LoRA 适配器，结合音频与视频生成能力。下载为 0 说明刚发布，但点赞数已经很高。 |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 414 | 596,774 | unsloth 对 Muse-Glimmer-30B 的 GGUF 量化版本，降低本地部署门槛。下载近 60 万，是多模态模型量化分发的重要入口。 |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 339 | 0 | Kijai 出品的 MiniMax-H3 ComfyUI 工作流/节点包。下载量暂时为 0，但高点赞说明 ComfyUI 用户期待度很高。 |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 318 | 112,975 | MiniMax-H3-Turbo LoRA 的 ComfyUI 适配版。下载超 11 万，说明 LoRA 微调与 ComfyUI 工作流组合是社区刚需。 |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 309 | 473 | MiniMax-H3 的社区微调版本，面向特定画风/内容风格生成。点赞高于下载，反映早期关注度较高。 |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 289 | 0 | Qwen3.8-27B 的官方 FP8 版本，减少显存占用并加速推理。刚刚上线，下载为 0，但补齐了多模态模型的量化矩阵。 |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 269 | 228,364 | 原团队发布的 Muse-Glimmer-30B GGUF 量化版。与 unsloth 版本并存，说明该模型的本地化需求旺盛。 |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 257 | 119,572 | NVIDIA 官方 FP4 量化版本，进一步压缩 Nemotron 3.5 Lightning 的部署成本。适合高吞吐、低显存推理场景。 |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 184 | 9,334 | Qwen3.8 超大 MoE 文本模型的 FP8 量化版。降低 2.4T 参数部署门槛，下载已有 9,334，基础设施用户开始跟进。 |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 176 | 9,060 | fal 推出的 MiniMax-H3 写实人物 LoRA，专攻人物真实感。下载近万，是 H3 生态风格化微调的典型代表。 |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 155 | 136,774 | unsloth 将 H3 视频模型转为 GGUF 格式，适配 stable-diffusion.cpp 等本地工具。下载超 13 万，显示视频模型本地化需求上升。 |

## 生态信号

本周榜单呈现三个核心信号：第一，大厂可下载权重成为主流，Qwen、DeepSeek、MiniMax、NVIDIA、月之暗面等均在 Hugging Face 直接发布模型，闭源 API 在本周热度榜中没有存在感。第二，MiniMax-H3 是当前最活跃的社区生态中心，衍生出 Turbo、LoRA、GGUF、ComfyUI 等多个方向，视频生成正从“单点模型”走向“本地化可定制基础设施”。第三，量化与轻量化是硬需求，unsloth 的 GGUF、Qwen/DeepSeek/NVIDIA 的 FP8/FP4，以及 2.6B/2.9B 小模型同时受到关注，前沿模型到边缘部署的距离正在缩短。

## 值得探索

- [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)：全榜最高赞（10,670），压缩张量与特征提取标签指向高效多模态部署，值得做大模型效率方向研究。
- [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)：下载量近 200 万，且围绕它出现了 LoRA、GGUF、ComfyUI 等完整衍生生态，适合研究视频生成基础模型与社区二次开发范式。
- [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)：周点赞 8,908，官方同时提供 FP8 与 unsloth GGUF 版本，便于测试多模态对话模型在量化前后的能力与性能变化。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*