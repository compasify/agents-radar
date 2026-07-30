# Hugging Face 热门模型日报 2026-07-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-30 01:19 UTC

---

好的，这是 2026 年 7 月 30 日的《Hugging Face 热门模型日报》。

---

## Hugging Face 热门模型日报 ｜ 2026-07-30

### 今日速览

本周 Hugging Face 社区呈现出“两极分化”的趋势：头部明星模型表现抢眼，同时社区微调与量化活动异常活跃。多模态模型继续主导榜单，其中 **moonshotai 的 Kimi-K3** 凭借惊人的 8,648 周点赞数断层式领先，成为无可争议的焦点。在下载量方面，**百度的 Unlimited-OCR** 和 **Qwen 官方的 Qwen3.6-35B-A3B** 分别以百万级下载量展示了实用型模型与高性能 MoE 模型的巨大吸引力。值得注意的是，一系列针对 **Qwen3.6** 和 **Qwen3.5** 的社区微调版本（尤其是“uncensored”类型）以及极低比特量化模型（如 1-bit、2-bit）大量涌现，反映了社区在模型定制化和极致压缩方面的浓厚兴趣。

### 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 827 | 67,286 | 由 poolside 发布的专业文本生成模型，专注于代码或特定领域。其 2.1 版本获得了社区的积极关注，下载量持续攀升。 |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 694 | 4,804 | Upstage 推出的 250B 参数大模型，延续了 Solar 系列的开源精神。作为大型开源模型，其高质量权重发布是本周的重要事件。 |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 555 | 18,933 | 一个轻量级的 3B 参数文本生成模型，适合在资源受限的环境下部署。其高效的性能和 “小模型大能量” 的特点是上榜原因。 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,642 | 1,267,198 | 采用 MoE 架构的 GLM 系列最新版本，拥有极高的下载量。在对话和自然语言理解任务上表现出色，是本周最受欢迎的语言模型之一。 |
| [fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 232 | 7,666 | 专注于安全领域的 1B 模型，采用了混合专家架构（GraniteMoEHybrid）。其在安全场景下的应用潜力吸引了特定领域的开发者。 |

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 8,648 | 99,214 | 本周绝对的热点，月之暗面推出的最强多模态模型。支持图像与文本输入，特征提取能力强大，以断层领先的点赞数登顶榜首。 |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,516 | 2,694,935 | 百度推出的 OCR 模型，拥有惊人的 269 万次下载，是本周下载量冠军。其“无限制”的 OCR 能力使其成为文档处理领域的刚需模型。 |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 200 | 1,543 | 微软推出的 27B 参数多模态模型，专注于“计算机使用”（Computer-Use）任务。它旨在让 AI 像人类一样操作电脑，潜力巨大。 |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,640 | 39,052 | 一个专为多模态对话设计的模型，强调交互能力。其出色的对话理解和生成能力使其在多模态榜单中占据一席之地。 |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 98 | 702 | 微软在视觉语言模型（VLM）领域的新作，代号“魔法师”。专注于图像与文本之间的深度理解，展示了微软在多模态领域的持续投入。 |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 346 | 47,129 | 基于 Qwen3.5 的 OCR 模型，性能强劲。作为专业的 OCR 工具，它在文档识别和文字提取任务上表现出色，赢得了不错的社区关注。 |
| [microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft | 100 | 1,754 | 微软推出的语音识别模型，采用 BitNet 架构。它在保持高识别率的同时，专注于模型效率和边缘部署，是 ASR 领域的一次创新尝试。 |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 290 | 645 | 面向边缘设备的微型 TTS 模型，主打本地部署和 CPU 推理。它的发布代表了语音合成正在向更小、更快的方向演进。 |
| [owensong/Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2) | owensong | 111 | 434 | 同样是 owensong 的 TTS 模型，比 “Micro” 版本更小，适合极端的资源限制场景。它与 Micro 版本共同展示了本地 TTS 的细分发展。 |

#### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 316 | 6,275 | 基于 MoE 架构的代码生成模型，专注于编程辅助。其 “Dev” 版本表明它针对开发场景进行了优化，是代码领域的强力选手。 |

#### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 942 | 736,692 | 一个极具社区特色的 Qwen3.6 微调版，融合了 “Fable”等多重风格，并以 “Uncensored” 为卖点。其高下载量反映了市场对个性化、无限制模型的旺盛需求。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,171 | 1,855,505 | 基于 Qwen 官方旗舰模型进行微调的 “Uncensored” 版本，风格偏向激进。超过 185 万的下载量证明了社区对于此类“无审查”模型的巨大热情。 |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,095 | 665,427 | 极致的量化实践，将 27B 模型压缩至 2-bit。它展示了在极端压缩下保留模型能力的最新进展，对边缘部署有重大意义。 |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 688 | 2,339,098 | 继 Ternary 版本后，Prism-ML 又推出了 1-bit 量化版本。233 万的下载量表明，社区对 “模型压缩到极致” 的策略非常感兴趣。 |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,516 | 1,262,662 | 基于 Qwen3.5 并试图融合 Claude 风格的微调模型，GGUF 格式方便本地运行。其 “Mythos” 命名暗示了其独特且受社区欢迎的风格。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 215 | 99,660 | 再次对 Qwen3.6 进行 “Uncensored” 微调，并融合了 “Hermes” 风格的 GGUF 版本。它进一步巩固了 “Qwen3.6 + Uncensored + GGUF” 这一热门组合。 |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 132 | 112,086 | DavidAU 对 Qwen3.5 的又一力作，结合了多种微调技术与 IMATRIX 量化方法。尽管模型名称冗长，但其高下载量显示了作者在社区的影响力。 |
| [unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 246 | 129,601 | Unsloth 将热门模型 Laguna-S-2.1 转换为 GGUF 格式，方便在 llama.cpp 等框架下运行。Unsloth 的参与为模型带来了更多关注。 |
| [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 139 | 6,189 | 对大型的 Solar-Open2-250B 模型使用了 NVIDIA 的 NVFP4 量化技术。这是企业级量化方案在开源社区的一次重要实践。 |
| [baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4) | baseten | 136 | 2,756 | 将 GLM-5.2 的多模态版本用 NVFP4 进行量化，用于高效推理。展现了通过量化技术部署高性能多模态模型的新趋势。 |
| [conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 577 | 0 | Krea 2 模型的 LoRA，用于身份保持的图像编辑。虽然下载量为0，但较高的点赞数暗示其在特定创意社区（如 ComfyUI 用户）中的潜力。 |

### 生态信号

- **Kimi 与 Qwen 两大阵营强势崛起**：本周榜单清晰地展现了双巨头格局。**Kimi-K3** 以其强大的综合能力问鼎热度榜；而**Qwen3.6** 则凭借其官方强大的 MoE 性能以及“Uncensored”社区的疯狂追捧，形成了庞大的生态圈。百度的 **Unlimited-OCR** 则代表了另一条实用主义路线，下载量惊人。
- **“Uncensored”微调与极致量化成为社区主旋律**：以 `HauhauCS/Qwen3.6-35B-A3B-Uncensored-...`、`DavidAU/...-Uncensored-...` 等为代表的模型大量出现，表明部分开发者对回复限制有强烈的规避需求。同时，`prism-ml` 发布的 1-bit 和 2-bit 量化模型下载量高达数百万，预示着大模型在本地、边缘设备上运行的极致压缩技术已成为主流探索方向。
- **多模态全面入侵，TTS 与 ASR 细分领域活跃**：榜单中 “image-text-to-text” 任务占据了半壁江山，成为绝对的顶流。此外，传统生成任务（如 TTS、ASR）也开始出现社区微调版，例如 `owensong` 的 Inflect 系列，这表明 AI 生成应用正在向更低延迟、更高质量的小型化方向发展。

### 值得探索

1.  **`moonshotai/Kimi-K3`**：作为本周热度冠军，强烈建议有条件的开发者进行尝试。它不仅仅是一个多模态模型，更是理解当前顶级多模态能力边界的必由之路。关注其在复杂图像推理和多轮对话中的表现。

2.  **`ATH-MaaS/OvisOCR2`**：如果你有 OCR 需求，这是目前榜单上除百度的 Unlimited-OCR 外最值得关注的模型。它基于优秀的 Qwen3.5 基座，在性能和准确率上应该有出色表现，可以作为一种高性能、开源的 OCR 方案进行测试。

3.  **`prism-ml/Ternary-Bonsai-27B-gguf`**：对于关注模型部署和算力优化的工程师来说，这个 2-bit 模型值得深入研究。它代表了将大模型“塞进”个人电脑的最新可能性。下载其 1-bit 版本 (`prism-ml/Bonsai-27B-gguf`) 进行对比，可以直观感受极致量化对模型能力的影响。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*