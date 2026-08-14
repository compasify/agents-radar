# Hugging Face 热门模型日报 2026-08-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-14 00:59 UTC

---

## 《Hugging Face 热门模型日报》 — 2026-08-14

### 今日速览

- 本周榜单由 **MiniMax-H3** 视频生成生态全面主导：官方权重、LoRA、ComfyUI 工作流、GGUF 量化版本百花齐放，其中 `Comfy-Org/MiniMax-H3` 下载量突破 **1,036 万**。
- 大语言模型竞争聚焦大规模 MoE 与开源权重：**Qwen3.8-2.4T-A95B** 与 **DeepSeek-V4 系列（Flash/Pro）** 双双上榜，展示超大规模稀疏模型的演进方向。
- 多模态热度飙升：**Kimi-K3** 以周点赞 **10,621** 登顶榜首，Muse-Glimmer-30B 成为视觉-语言理解新选项，音频生成也有 MiniMax-Music3 亮相。
- 社区围绕 MiniMax-H3 与 Qwen 系展开密集微调、量化和工作流适配，GGUF、FP8、NVFP4、LoRA 等多种生态组件让部署选项极其丰富。
- 榜单所有模型均为开放权重，未出现闭源 API 模型；开源生态在视频生成和 MoE 领域继续形成强大飞轮。

---

### 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 783 | 1,012 | 阿里 Qwen 新旗舰级 MoE 文本模型，总参数 2.4T、激活 95B。刚发布仍在早期爬坡，代表下一代大规模稀疏 Transformer 方向。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,319 | 1,431,587 | DeepSeek V4 系列的高效版本，主打快速推理与对话。周点赞和下载量双高，是本周最受关注的语言模型之一。 |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 285 | 0 | DeepSeek V4 Pro 最新版本，定位更强能力上限。尚未开放下载但已被关注，预计面向复杂推理与高阶任务。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 602 | 116,640 | Liquid AI 的 2.6B 轻量级语言模型，聚焦端侧与高内存效率部署。小参数下保持较强性能，适合资源受限场景。 |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 216 | 1,292 | Ling 3.0 系列的超小模型，采用 bailing_hybrid 自定义架构。主打极致轻量与开放协议，适合嵌入式实验。 |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 353 | 3,868 | 新团队 deepgrove 的开源 MoE 因果语言模型预览版。以混合专家架构首次亮相，是值得跟踪的新模型家族。 |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 130 | 22,279 | 英伟达 Nemotron 3.5 Lightning 的 BF16 版本，30B 总量、激活 3B。面向高效对话推理，是 NVIDIA 开源语言模型代表。 |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 323 | 10,052 | Ling 3.0 flash 版，兼顾性能与速度的对话模型。与 tiny 版共同构成覆盖不同规模的系列，社区热度稳步上升。 |

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,418 | 121,042 | 图像文本到文本的多模态对话模型，由 meta-models 发布。支持视觉输入与对话，是本周多模态理解方向的高赞选择。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,823 | 1,605,940 | 官方发布的图像/文本到视频生成模型，是当前视频生成生态的核心基础。周点赞和下载量都处于顶级水平，带动大量衍生模型。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 718 | 57,287 | 通用视频生成模型，支持图像到视频、文本到视频、视频到视频等任务。提供扩散单文件格式，适配多种工作流。 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 462 | 91,455 | MiniMax-H3 的 Turbo 版本，优化图像到视频生成速度。由社区团队训练，适合实时视频创作场景。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,621 | 1,871,575 | Kimi 系列新一代多模态模型，支持图像文本输入，并带有压缩张量特性（compressed-tensors）。周点赞高居榜首，下载量近 187 万，是本周最热门模型。 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 306 | 25 | MiniMax 新一代音乐生成模型，从文本直接生成完整音频。刚上线尚未放量，但代表音频生成前沿。 |
| [endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 188 | 3,184 | 基于 Qwen3.5 MoE 底座的多模态模型，支持图像与文本联合输入。社区新秀，适合做视觉对话与研究。 |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 371 | 1,164 | 英伟达推出的 11B 语音对话模型，面向实时语音交互场景。集成多篇学术工作，适合构建语音 Agent。 |

#### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 726 | 0 | MiniMax-H3 Turbo 的 LoRA 适配器，用于文本到视频生成。目前无直接下载但点赞较高，说明相关定制需求旺盛。 |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 390 | 352,023 | Muse-Glimmer-30B 的 GGUF 量化版，由 unsloth 出品。大幅降低多模态模型本地部署门槛，下载量超过 35 万。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,289 | 10,365,210 | ComfyUI 官方组织发布的 MiniMax-H3 单文件格式。下载量突破千万，是生态中流转量最大的视频生成模型文件。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,987 | 2,793,115 | 基于 Qwen3.6 的社区微调与 GGUF 量化合并模型，主打“无审查”角色扮演等风格。下载量近 280 万，是高热度社区定制模型。 |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 304 | 0 | MiniMax-H3 的 ComfyUI 适配工作流/节点配置。方便用户在 ComfyUI 中直接调用 H3 视频生成，但暂未提供直接下载。 |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 257 | 136,783 | 官方发布的 Muse-Glimmer-30B GGUF 量化版。与 unsloth 版本互补，为不同后端提供更多选择。 |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 229 | 44,859 | 英伟达 Nemotron 3.5 Lightning 的 NVFP4 4-bit 量化版本。在保留对话能力的同时显著降低内存占用，面向大规模部署。 |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 297 | 324 | MiniMax-H3 的社区微调版本，优化特定风格/概念。提供 transformers 兼容接口，可进行文本到视频生成。 |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 314 | 0 | 面向 ComfyUI 的 MiniMax-H3 Turbo LoRA 适配器。将 LoRA 无缝集成到 ComfyUI 视频工作流，简化使用流程。 |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 159 | 4,692 | 由 fal 提供的 MiniMax-H3 LoRA，专注提升人物写实效果。可在图像到视频任务中增强 realism。 |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 157 | 4,000 | 大 MoE 的 FP8 量化版本，相比 BF16 显著降低显存需求。适合在受限 GPU 上运行 2.4T 参数模型，同时保持较高精度。 |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 149 | 111,222 | MiniMax-H3 视频模型的 GGUF 量化实现，支持 stable-diffusion.cpp 等运行时。扩大视频生成在本地/低资源设备的可用性。 |
| [lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 149 | 652 | 针对 MiniMax-H3 的提示词重写 LoRA，用来提升 prompt 到视频的对齐质量。轻量化适配组件，增强生成可控性。 |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 483 | 0 | Qwen3-VL-32B 的社区微调 + INT8 量化版，集成 ComfyUI 支持。专注“Ultra-Heretic”风格的特殊微调，目前无下载但有较高热度。 |

---

### 生态信号

本周生态最突出的信号是 **“基础模型 + 社区适配器”** 的成熟范式。MiniMax-H3 作为视频生成底座，衍生出 LoRA、GGUF、ComfyUI 工作流、Prompt Rewriter 等十余个周边模型，其中 ComfyUI 单文件下载量破千万，说明低门槛适配组件对生态扩散具有关键作用。语言模型方面，Qwen 和 DeepSeek 的超大规模 MoE 继续定义开源天花板，而 LiquidAI、inclusionAI 等小模型则探索高效部署。所有上榜模型均为开放权重，没有闭源 API 模型；量化（GGUF/FP8/NVFP4）和微调（LoRA）已成为衡量社区影响力的重要维度，表明开源社区正从“造模型”转向“用模型”。

---

### 值得探索

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 本周最高点赞模型，多模态 + compressed-tensors 特性使其兼具理解能力与部署潜力，值得深入测试。
- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 视频生成生态的中心，官方权重带动了 LoRA、量化、ComfyUI 等大量衍生项目，是研究视频生成生态的最佳样本。
- **[Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)** — 2.4T 总参数的大规模 MoE 模型，代表了当前开源 LLM 的规模前沿，适合关注稀疏化与推理效率的研究者。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*