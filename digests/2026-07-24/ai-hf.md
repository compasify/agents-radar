# Hugging Face 热门模型日报 2026-07-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-24 01:30 UTC

---

好的，以下是为您生成的《Hugging Face 热门模型日报》。

---

# Hugging Face 热门模型日报 (2026-07-24)

### 今日速览

本周 Hugging Face 生态展现了几个显著趋势：**量化与社区微调模型**主导了下载榜，特别是基于 Qwen3.6 和 Bonsai 系列的低比特量化版本，显示出社区对高效推理的强烈需求。**多模态模型**成为绝对热点，百度、Google 等巨头以及社区团队推出的 OCR、视觉-语言模型（VLM）包揽了人气榜前列。此外，**语音**和**机器人**专用模型的出现，标志着 AI 应用正在向更垂直、更实体的场景快速渗透。值得关注的是，**GLM-5.2** 以惊人的点赞数登顶，而 Google 的 **Gemma-4-31B-it** 则展示了强大模型的号召力。

---

### 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 514 | 13,285 | 一个专注于代码生成的旗舰模型，本周获得了社区的广泛关注。其名为“Laguna”的系列展现了在特定领域（如编码）的专业化趋势。 |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 449 | 362 | Upstage 推出的超大参数 250B 开源模型，虽然下载量尚低，但高点赞数表明社区对其能力抱有极高期待。它代表了开源模型在规模上的新尝试。 |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 320 | 4,532 | 一款轻量级的 3B 参数语言模型，性能在小模型领域表现突出。其高点赞数反映了社区对高效、可本地部署的小模型的持续需求。 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,370 | 596,442 | 本周最大的黑马之一，获得了惊人的 4,370 次点赞。作为一款采用 MoE 架构的对话模型，其强大的推理能力吸引了大量关注。 |
| [Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif-Technologies | 173 | 1,856 | 一款专注于特征提取的新模型，标志着除对话外，模型在数据分析与理解层面的应用探索。 |

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,886 | 2,414,259 | 百度推出的通用 OCR 模型，以超过 240 万的下载量领跑。其强大的文字识别能力使其在文档数字化等场景中极具实用价值。 |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,508 | 24,669 | 一款新的多模态对话模型，能够理解并生成与图像相关的内容。其高点赞数表明市场对能“看懂”图片的智能助手兴趣浓厚。 |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 3,347 | 12,666,488 | Google 官方推出的 Gemma 系列最新旗舰，拥有 31B 参数并支持图像理解。其海量的下载量证明了官方模型在社区中的巨大影响力和信任度。 |
| [Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice) | Qwen | 1,798 | 2,497,020 | 通义千问发布的高频 (12Hz) 文本转语音模型，支持自定义声音。这一面向语音合成领域的专业模型，展现了 AI 在个性化内容生成上的进步。 |
| [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 926 | 750,118 | 英伟达推出的流式语音识别模型，在低延迟场景下表现优异。高下载量反映出实时语音转写技术的巨大商业需求。 |

#### 🔧 专用模型（代码、数学、医疗、嵌入、机器人）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,249 | 766,522 | 月之暗面推出的代码专用模型，专注于提升代码生成与理解能力。其高热度反映了 AI 编程助手依然是社区最核心的应用场景之一。 |
| [openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 165 | 408 | 面壁智能推出的机器人操作模型，属于视觉-语言-动作 (VLA) 模型。这款模型代表了 AI 从虚拟世界向物理世界延伸的重要方向。 |
| [openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | openbmb | 117 | 306 | 与 RobotManip 同系列的机器人追踪模型，专注于让机器人理解并跟踪目标。两款机器人模型同时上榜，标志着该领域已成为新的研究热点。 |
| [fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 121 | 2,747 | 一个专注于安全性的 1B 小模型，使用了混合专家架构。它代表了对模型在敏感场景下可靠性与安全性的思考。 |

#### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored...](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 397 | 334,847 | 基于 Qwen3.6 的社区微调版本，主打“无审查”和极致性能。尽管名字冗长，但超高的下载量证明了社区定制化模型的强大生命力。 |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 983 | 576,083 | 采用了创新的 2 位三元量化技术，极大降低了 27B 模型的存储和计算开销。它是量化技术追求极致效率的代表作。 |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 620 | 1,910,116 | 同样是 Bonsai 系列的 1 位量化版本，下载量接近 200 万。这表明社区对于在个人设备上运行大型语言模型这件事充满热情。 |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,438 | 2,126,755 | 一款融合了“Claude”风格神话色彩的 Qwen3.5 微调模型，下载量超过 212 万。它展示了社区微调不仅可以提升性能，还能赋予模型独特的“角色”或“风格”。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF) | LuffyTheFox | 117 | 24,982 | 另一个基于 Qwen3.6 的社区微调版，采用了 MoE 架构和“无审查”设定。表明社区对 Qwen 系列模型的微调生态非常活跃。 |

---

### 生态信号

1.  **模型家族势力版图**：**Qwen (通义千问) 家族**本周势头最猛，其 3.5/3.6 版本成为社区微调和量化的首选基座模型。**Bonsai** 和 **Laguna** 系列则代表了在特定技术路径（极低比特量化、代码生成）上深耕的势力。
2.  **开源 vs 闭源**：榜单完全被**开源权重**模型主导。DeepSeek 等方法论虽未上榜，但其推动的推理成本降低正通过社区微调（如 Qwythos）和量化（如 Bonsai）模型显现。趋势是“大厂开源基座，社区定制为王”。
3.  **量化与微调活动**：**GGUF** 格式的模型已占据下载量的半壁江山，1-2 比特的极端量化成为可能，使得 27B 甚至更大模型在消费级硬件上运行成为现实。微调方面，“无审查 (Uncensored)”和“角色扮演 (Mythos/Hermes)”是最热门的定制方向，体现了用户对控制权和创造性的追求。

---

### 值得探索

1.  **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**：其爆炸性的点赞数（4,370）令人瞩目。作为一款 MoE 对话模型，它可能代表了国产大模型在推理能力上的新突破，非常值得上手一试。
2.  **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**：这是榜单上最具前瞻性的模型之一。它将语言模型的能力延伸至物理世界的机械臂操作，是通往通用机器人的关键一步，值得 AI 从业者和机器人爱好者深入研究。
3.  **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**：如果你对模型部署和效率优化感兴趣，这款模型是必看之作。它展示了将 27B 模型压缩到仅需几 GB 显存的可行性，是边缘计算和本地 AI 应用的里程碑式实践。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*