# Hugging Face 热门模型日报 2026-07-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-29 01:26 UTC

---

好的，作为 AI 模型生态分析师，这是为你整理的《Hugging Face 热门模型日报》。

---

### Hugging Face 热门模型日报 (2026-07-29)

#### 📰 今日速览

本周 Hugging Face 社区最重磅的发布当属 **moonshotai/Kimi-K3**，以周增 8000 点赞的绝对优势登顶榜首，标志着国产多模态大模型在开源社区取得了现象级的关注度。**Qwen3.6-35B-A3B** 作为 Qwen 家族的 MoE 新作，下载量飙升至 615 万，显示出强大的社区需求。社区量化与微调活动异常活跃，围绕 **Qwen3.6** 和 **Laguna-S-2.1** 等基础模型涌现了大量 GGUF 及“无审查”变体，如 `HauhauCS/Qwen3.6-35B-A3B-Uncensored` 下载量已超185万。此外，**百度/Unlimited-OCR** 凭借超269万的下载量，证明了实用型 OCR 模型的巨大市场潜力。

---

#### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 801 | 67,286 | poolside 推出的模型，定位为文本生成任务。尽管点赞数不高，但其衍生出的量化版本和社区微调版本在榜上频繁出现，显示出较强的社区影响力。 |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 645 | 4,804 | Upstage 推出的 250B 参数超大杯模型，专注于文本生成。其庞大的参数量在社区中引起关注，但相对较低的下载量表明目前仍主要处于探索和评估阶段。 |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 528 | 18,933 | 南木北歌团队推出的3B级别轻量级语言模型。在较小的参数量下获得了不错的关注度，适合资源受限场景下的部署与研究。 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,605 | 1,267,198 | 智谱AI之外的组织发布的 GLM 系列新版本，采用 MoE 架构。点赞数和下载量都极为亮眼，表明 GLM 生态的繁荣和社区对该架构的高度认可。 |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,084 | 665,427 | 采用极端的 2-bit 三值量化技术，将 27B 模型压缩至极小体积。极高的下载量反映了社区对在消费级硬件上运行大模型的强烈需求。 |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 678 | 2,339,098 | 同样是 Bonsai-27B 的 GGUF 量化版本，但使用了 1-bit 量化。作为榜单中下载量第二高的模型，它见证了社区对极致压缩模型推理的热切追捧。 |

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 8,000 | 99,214 | 月之暗面发布的 Kimi 系列旗舰模型，支持图像-文本到文本的多模态理解。以绝对优势的点赞量登顶本周榜首，是当前最受瞩目的开源多模态模型。 |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,418 | 2,694,935 | 百度推出的通用 OCR 模型，专门处理图像中的文字识别任务。下载量在本周榜单中位居前列，说明工业级、高精度的 OCR 工具在社区中拥有极大的实用价值。 |
| [microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 416 | 2,007 | 微软推出的文本到图像生成模型，聚焦于图像生成和编辑。作为图像生成领域的代表模型，其在创意设计等应用场景具有巨大潜力。 |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 265 | 645 | 专注文本到语音（TTS）的轻量级模型，特别强调本地 CPU 部署和边缘计算。它代表了 AI 推理向低算力、高隐私保护设备端迁移的趋势。 |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/inkling) | thinkingmachines | 1,625 | 39,052 | 一款支持图像-文本输入的多模态对话模型。在众多多模态模型中脱颖而出，证明了其在图像理解和对话交互方面的独特能力。 |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 179 | 1,543 | 微软推出的另一款多模态模型，特别标注其适用于“计算机使用（computer-use）”场景。这暗示了模型在 GUI 自动化、智能代理等前沿领域有重要应用。 |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,569 | 6,158,876 | Qwen 家族最新的 MoE 模型，以 35B 总参数量、3B 激活参数实现了高效的多模态理解。其超过 615 万的周下载量是本轮榜单的下载量冠军，社区认可度极高。 |
| [conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 565 | 0 | 这是一个基于 Krea-2 的 LoRA，专门用于图像编辑中的身份保持。尽管没有下载量，但高点赞数说明它在特定细分场景（如人脸编辑）下非常有价值。 |

#### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 287 | 6,275 | 专注于代码生成的专用模型，基于 Qwen3.5 MoE 架构。它代表了“基础模型 + 代码专业微调”的精细化分工趋势。 |
| [fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 222 | 7,666 | 一个 1B 参数的模型，其标签包含“安全（security）”，暗示其可能专注于安全领域的代码或内容分析。小体量模型在特定行业的部署优势明显。 |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 340 | 47,129 | 另一个专注于 OCR 的模型，同属`image-text-to-text` 任务。作为“Unlimited-OCR”的竞品，也获得了可观的关注和下载，证明了 OCR 赛道的火热。 |
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,332 | 681,111 | Kimi 家族针对代码任务优化的专用版本。凭借 K3 的热度，其代码版本也获得了广泛关注和大量下载，是开发者的利器。 |

#### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711...-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 853 | 736,692 | 基于 Qwen3.6 的极端社区微调版本，融合了“无审查”、“神话”等多种风格，并使用 GGUF 量化。高下载量体现了社区对个性化、无限制模型的需求。 |
| [unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 232 | 129,601 | 知名工具团队 unsloth 对 Laguna-S-2.1 的 GGUF 量化版本。unsloth 的品牌效应和模型的实用性，使其成为高效部署的首选之一。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored...](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,159 | 1,855,505 | 基于 Qwen3.6-35B-A3B 的“无审查”GGUF 版本。高达 3159 的点赞和超 185 万的下载量，使其成为社区微调版本中的现象级作品。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis...](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 198 | 99,660 | 同样是基于 Qwen3.6 的“无审查”微调版，融合了“Hermes”风格。这表明围绕 Qwen3.6 的社区微调生态异常繁荣，且“Uncensored”是关键趋势。 |
| [empero-ai/Qwythos-9B-Claude-Mythos...-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,502 | 1,262,662 | 将 Claude 风格与 Qwen 结合的社区微调模型，并以 GGUF 格式提供。这个“混血”模型获得了极高关注，证明风格迁移和角色扮演类模型市场巨大。 |

---

#### 🌐 生态信号

本周生态呈现出 **“一超多强，量化为王”** 的态势。
- **模型家族**：**Qwen3.6-35B-A3B** 无疑是本周的生态核心，不仅自身下载量夺冠，更孵化了大量社区微调版和量化版。**Kimi-K3** 的爆火，标志着以月之暗面为代表的国产模型在开源社区的号召力上达到了新高度。**GLM-5.2** 的持续热度则展现了另一个强大技术路线的社区根基。
- **开源 vs 闭源**：榜单完全由开源权重模型主导，闭源 API 模型无迹可寻。这表明社区对模型的可控性、可定制性和本地化部署的重视。
- **量化活动**：**GGUF** 格式的模型在榜单中占据了接近半壁江山，特别是针对 Qwen3.6 和 Bonsai-27B 的极端（1-bit, 2-bit）量化工作，揭示了社区对在个人电脑甚至手机上运行大模型的强烈渴望。

#### 🔭 值得探索

1.  **moonshotai/Kimi-K3**：作为本周关注度最高的模型，它代表了当前多模态理解能力的顶尖水平。任何对 VLM 前沿探索感兴趣的研究者和开发者都值得深入研究其架构与能力边界。
2.  **prism-ml/Bonsai-27B-gguf**：该模型探索了 1-bit 极低比特量化的极限。虽然语言能力会有所损失，但对于追求极致压缩和边缘设备推理的场景，它提供了一个极具研究价值和实用潜力的基线。
3.  **microsoft/Fara1.5-27B**：其“计算机使用”标签是巨大的亮点。该模型可能代表了下一代 AI 代理的关键技术方向，即让模型直接理解和操作图形用户界面（GUI）。这是一个值得密切关注的前沿探索。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*