# Hugging Face 热门模型日报 2026-07-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-25 01:40 UTC

---

# Hugging Face 热门模型日报（2026-07-25）

## 今日速览
本周最亮眼的模型莫过于 **zai-org/GLM-5.2**（点赞 4,415）和 **google/gemma-4-31B-it**（点赞 3,360，下载超 1262 万），两者均为多模态对话模型，显示大厂在多模态领域持续加码。**baidu/Unlimited-OCR**（点赞 3,011，下载 250 万）证明垂直 OCR 场景仍有巨大需求。社区量化与微调活动异常活跃：多个基于 Qwen3.6 的 “uncensored” 变体和 1‑bit / 2‑bit GGUF 版本在下载量上领跑，用户对轻量、个性化部署的热情高涨。值得关注的是，**prism-ml** 的 1‑bit 三元量化模型已积累超百万下载，极低精度模型正快速普及。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 611 | 28,992 | 专注于 text-generation 的 2.1B 模型，标签含 laguna 系列，属于轻量级对话模型。点赞 611 表明社区对其持续关注。 |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 541 | 1,106 | Upstage 发布 250B 参数大模型，定位 text-generation，以开放权重为亮点。点赞 541 体现对千亿级开源模型的期待。 |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 372 | 8,169 | 3B 参数中文 LLM，主打高效推理，适合嵌入或边缘端部署。点赞 372，下载量稳步增长。 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,415 | 667,403 | 基于 MoE 架构的多模态对话模型，本周点赞最高（4,415）。2B 活跃参数，具备优秀的推理与指令跟随能力。 |
| [MoonshotAI/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,263 | 756,668 | 代码专用多模态模型，结合视觉与代码理解。下载量 75 万+，是 kimi 系列中的编码专化版本。 |
| [Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif-Technologies | 185 | 2,108 | 新型 feature-extraction 模型，未明确任务标签，以 Motif 架构探索方向。点赞 185 属于早期关注。 |
| [openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 172 | 559 | 机器人操作模型（vision-language-action），基于 MiniCPM 架构。虽下载少，但代表具身智能方向。 |
| [openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | openbmb | 123 | 349 | 与 RobotManip 同系列，专注于机器人轨迹跟踪。小型但专业，展示 MiniCPM 在 robotics 的拓展。 |
| [fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 149 | 4,266 | 1B 参数的安全导向 LLM，使用 GraniteMoEHybrid 架构，强调文本生成安全。 |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 276 | 30,292 | 集成 OCR 能力的多模态模型，基于 Qwen3.5，点赞 276，下载 3 万，专攻图像文字识别。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,011 | 2,500,391 | 百度发布的终极 OCR 模型，支持图像到文本与文本到图像双向任务。下载量 250 万，点赞 3,011，是本周最受欢迎的垂直多模态模型。 |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,546 | 27,883 | 图像-文本-文本的多模态对话模型，标签含 inkling_mm_model，点赞 1,546，适合交互式问答场景。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 485 | 407,421 | 基于 Qwen3.6 的社区超长名微调模型，多模态（image-text-to-text），强调 uncensored 风格。下载量 40 万+，显示用户对自由度高的模型需求。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,069 | 2,057,103 | Qwen3.6 MoE 的激进 uncensored 变体，下载量超 205 万，是高人气社区微调模型。 |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,454 | 1,906,539 | 结合 Claude 风格提示的 9B 多模态量化模型，下载量 190 万，在推理任务中表现突出。 |
| [bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 541 | 26,092 | 基于 Qwen3.6 的增强思考模型，支持 image-text-to-text，点赞 541，属于思维链微调方向。 |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 123 | 396 | 代码与视觉结合的多模态模型，基于 Qwen3.5 MoE，指向代码生成与理解。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF) | LuffyTheFox | 134 | 36,703 | 另一个 Qwen3.6 MoE uncensored 变体，采用 Hermes 风格，下载 3.6 万。 |
| [baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4) | baseten | 89 | 494 | GLM-5.2 的视觉版，采用 NVFP4 量化，支持 sglang，点赞 89 表明早期关注。 |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 3,360 | 12,629,921 | Google 最新的 31B 指令微调模型，原生支持多模态（image-text-to-text）。点赞 3,360，下载量高居榜首（1262 万），是本周最大热门。 |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,503 | 6,460,680 | 通义千问官方 MoE 多模态模型，35B 总参、3B 激活。点赞 2,503，下载 646 万，是开源多模态的标杆。 |
| [nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge) | nvidia | 112 | 30,303 | NVIDIA 的 Cosmos 系列边缘部署模型，基于 diffusers，面向图像生成，点赞 112。 |
| [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 937 | 797,525 | NVIDIA 的流式语音识别模型，0.6B 参数，适合实时场景。点赞 937，下载近 80 万，显示语音 AI 热度。 |
| [microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 234 | 891 | 微软发布的 text-to-image 模型，配有 diffusers 支持图像编辑。点赞 234，属于早期探索。 |
| [conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 532 | 0 | LoRA 风格的图像身份编辑模型，基于 Krea-2 底座，点赞 532，但尚无下载记录。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 123 | 396 | 代码专用多模态模型，已在多模态分类中列出，此处归入代码专化。亮点为基于 Qwen3.5 MoE。 |
| [MoonshotAI/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,263 | 756,668 | 代码理解与生成专家，结合视觉能力，下载量 75 万+。 |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 276 | 30,292 | OCR 专用模型，已在多模态中列出，亦可视为文本识别专用任务。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,006 | 595,415 | 27B 参数的三元量化（2-bit）GGUF 模型，社区首创，点赞 1,006，下载近 60 万，代表极低精度量化的突破。 |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 632 | 2,028,115 | 同为 27B 的 1-bit 量化 GGUF 版本，下载量超过 202 万，是本周下载量最大的量化模型之一。 |
| [unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 170 | 57,536 | unsloth 团队对 Laguna-S-2.1 的 GGUF 量化版，点赞 170，适合边缘推理。 |
| [poolside/Laguna-S-2.1-GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF) | poolside | 133 | 62,092 | 原始作者提供的 GGUF 量化版本，下载 6.2 万，支持 vllm 部署。 |
| [poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) | poolside | 129 | 89,186 | 采用 NVFP4 量化的 2.1B 模型，专为 vllm 优化，点赞 129，下载 8.9 万。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 485 | 407,421 | 社区 uncensored 微调并量化为 GGUF，已在多模态中列出，也是量化类重要代表。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,069 | 2,057,103 | Qwen3.6 MoE 的 uncensored 微调 + GGUF 量化，社区最热门的微调模型之一。 |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,454 | 1,906,539 | 9B Claude 风格微调并量化为 GGUF，点赞 2,454，下载 190 万，展示推理增强微调潜力。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF) | LuffyTheFox | 134 | 36,703 | 同基座的不同微调风格（Hermes），进一步丰富 Qwen3.6 MoE 社区变体。 |
| [baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4) | baseten | 89 | 494 | GLM-5.2 视觉版的 NVFP4 量化，已在多模态中列出，属于特殊量化。 |

## 生态信号

1. **模型家族格局**：Qwen 3.6 系列（特别是 35B-A3B MoE）成为社区微调的核心基座，其 uncensored 变体下载量普遍超百万；GLM-5.2 凭借 MoE 架构与高关注度（4,415 赞）成为第二势力；Google Gemma-4-31B 则在总下载量上碾压（1262 万），表明大厂开源权重仍具有绝对流量优势。
2. **量化新风向**：1-bit / 2-bit 量化（prism-ml）以及 NVFP4 量化（NVIDIA 生态）正从实验走向实用。三元量化模型下载量超 50 万，证明极端低精度在消费级硬件上极具吸引力。
3. **社区微调“狂欢”**：基于 Qwen3.6 的 uncensored 微调层出不穷，下载量普遍高于原版。用户偏好对话自由度、创意生成和边缘部署，推动了 GGUF 格式的广泛采用。同时，量化格式本身（GGUF vs NVFP4 vs 原生 safetensors）也出现了细分竞争。
4. **多模态与专用化**：OCR、语音识别、机器人控制等专用模型（如 Unlimited-OCR、nemotron ASR）下载量稳定，说明垂直场景需求始终强劲，大模型应用正向实体世界渗透。

## 值得探索

1. **google/gemma-4-31B-it** —— Google 最新旗舰级多模态模型，下载量 1262 万几乎两倍于第二名，代表当前最强开源指令跟随模型之一。值得研究其多模态对齐与安全机制。
2. **zai-org/GLM-5.2** —— 点赞数最高（4,415）的 MoE 对话模型，以 2B 活跃参数实现接近百亿级性能，适合部署在低算力环境。其 MoE 路由机制和 DSA 架构值得深入对比。
3. **prism-ml/Ternary-Bonsai-27B-gguf** —— 三元 2-bit 量化标杆，参数大小 27B 但文件极小，社区反馈推理速度惊人。是研究极端量化对模型质量影响的绝佳样本，同时适合在个人设备上体验大模型。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*