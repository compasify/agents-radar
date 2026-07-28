# Hugging Face 热门模型日报 2026-07-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-28 01:25 UTC

---

好的，以下是根据您提供的数据生成的《Hugging Face 热门模型日报》。

---

### 📰 Hugging Face 热门模型日报（2026-07-28）

#### 1. 今日速览

本周 Hugging Face 生态热度延续，**多模态模型**和 **MoE（混合专家）架构**成为绝对主角。月之暗面开源的 **Kimi-K3** 以超过 6200 的周点赞数登顶榜首，展现了其强大的社区关注度。与此同时，**Qwen3.6 系列**生态爆发，不仅官方模型下载量逼近 620 万，社区涌现的大量 GGUF 量化及微调版本（如“Uncensored”变体）也广受欢迎。值得注意的是，**极低比特量化技术**（如 1-bit / 2-bit）的模型下载量巨大，预示着模型高效部署正在成为硬需求。此外，微软、百度等巨头也在持续贡献图像编辑、OCR 等专用领域的模型。

#### 2. 热门模型分类盘点

##### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 758 | 63,605 | 文本生成模型，专注于代码或通用领域，是 poolside 系列的代表作之一。周点赞数高，表明其社区复现和讨论热度旺盛。 |
| [Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 629 | 3,761 | 一款高达 250B 参数的文本生成模型，展现了大模型领域向更大规模探索的趋势。点赞下载比高，说明专业用户对其关注度极高。 |
| [Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 493 | 16,518 | 一个轻量级（3B）的文本生成模型，适合资源受限场景。凭借较高的点赞数，在小型模型中表现突出。 |
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,549 | 1,003,547 | 采用 MoE 架构的对话模型，是智谱 GLM 系列的重大更新。周点赞近 5K，下载量破百万，是本周综合影响力最大的语言模型之一。 |
| [Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif-Technologies | 199 | 2,532 | 一个文本生成及特征提取模型，定位为通用基础模型。作为 Beta 版本，正处在吸引早期开发者的阶段。 |
| [poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) | poolside | 148 | 158,308 | Laguna-S-2.1 的 NVFP4 量化版本，专为英伟达硬件优化，实现高效推理。下载量远高于基础版，反映了部署优化的需求。 |

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 6,212 | 2,850 | 月之暗面发布的图像-文本到文本模型，是继 K2 后的旗舰升级。以绝对优势占据本周热度榜首，代表了多模态对话模型的最新进展。 |
| [Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,603 | 36,196 | 多模态对话模型，擅长图像理解与多轮对话。点赞数超过 1600，是社区中极具吸引力的新晋多模态项目。 |
| [Mage-Flow](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 388 | 1,691 | 微软推出的文本到图像生成模型，具备图像编辑能力。作为大型企业出品，技术成熟，代表了文本到图像领域的最新探索。 |
| [Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 149 | 1,406 | 专注于计算机使用的多模态模型（图像-文本到文本）。紧跟“AI Agent”与“Computer Use”趋势，是微软在多模态代理领域的重要布局。 |
| [Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 223 | 483 | 本地化、CPU可运行的文本到语音（TTS）模型。强调边缘AI部署，响应了社区对轻量、离线语音合成工具的需求。 |
| [GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4) | baseten | 124 | 2,276 | GLM-5.2 的多模态视觉版本，采用 NVFP4 量化格式。支持视觉-语言任务，是高密度推理场景下的高效率多模态方案。 |
| [Mage-Flow-Edit-Turbo](https://huggingface.co/microsoft/Mage-Flow-Edit-Turbo) | microsoft | 102 | 1,115 | 专注于图像编辑的模型，属于 Mage-Flow 系列的快速版。专为指令式编辑设计，提升了图像修复和编辑任务的效率。 |
| [Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge) | nvidia | 133 | 33,127 | 英伟达 Cosmos 系列的边缘版本，专注于物理世界理解与生成。支持 Diffusers 生态，为物理 AI 和仿真提供了新工具。 |
| [Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,546 | 6,187,853 | Qwen 官方发布的 MoE 多模态模型，总参数量 35B，激活仅 3B。性能与效率平衡极佳，下载量雄踞本周榜首，是社区最热门的基础模型。 |

##### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,331 | 2,645,773 | 百度的通用 OCR 模型，支持图像到文本的识别任务。下载量高达 264 万，表明其在工业界的广泛应用基础和强大的实用性。 |
| [KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 241 | 5,312 | 专注于代码生成的 MoE 模型，基于 Qwen3.5 架构开发。开发者版吸引了编程社区的关注，旨在提供高效的代码辅助。 |
| [antares-1b](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 207 | 6,421 | 专注于安全的 1B 参数文本生成模型，采用了 MoE Hybrid 架构。强调“安全”属性，使其在行业应用中具备差异化价值。 |
| [Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,323 | 695,744 | 月之暗面为代码任务专门优化的多模态模型。下载量达 69 万，说明 K2 系列的代码能力得到了开发者的广泛验证与部署。 |
| [OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 327 | 42,152 | 专注于 OCR 任务的多模态模型。与 Unlimited-OCR 形成竞争，展示了 OCR 领域模型持续迭代的活跃态势。 |

##### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion...](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 753 | 634,146 | 基于 Qwen3.6 的社区极限微调版，GGUF 格式，主打“Uncensored”。下载量可观，反映了社区对开放性、无限制模型的强烈偏好。 |
| [unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 218 | 117,456 | 由知名工具 Unsloth 量化的 Laguna GGUF 版本。使用 Unsloth 工具链，优化了推理效率，是典型的高质量社区二次分发。 |
| [Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,069 | 648,938 | 采用极低比特（2-bit/三值化）量化的 27B 对话模型。下载量巨大，表明极低精度量化正成为大模型本地部署的主流方案之一。 |
| [poolside/Laguna-S-2.1-GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF) | poolside | 154 | 85,554 | 官方发布的 Laguna GGUF 版本。相比社区版本，官方版本提供更好的兼容性支持，方便用户直接使用。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,133 | 1,894,395 | 基于 Qwen3.6 MoE 模型的“无限制”微调版，使用 GGUF 格式。本周最热门的社区微调模型，点赞和下载量均极高。 |
| [Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 659 | 2,257,928 | 采用 1-bit 量化的 27B 模型，是目前极致低比特的代表。下载量高达 225 万，反映出“用极低成本运行大模型”的巨大市场。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored...](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF) | LuffyTheFox | 187 | 83,658 | 另一个 Qwen3.6 的微调变体，融合了“Hermes”风格。展示了社区围绕 Qwen 生态进行的多样化创作。 |
| [conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 555 | 0 | 针对 Krea2 模型的 LoRA 权重，专用于人物身份编辑。虽然尚无下载量，但高点赞表明社区对此类精细控制工具充满期待。 |
| [unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 97 | 0 | 由 Unsloth 发布的 Kimi-K3 微调版，目前显示下载为 0，可能刚刚上线。这预示着 Kimi-K3 的生态工具链正在加速完善。 |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,490 | 1,336,263 | 基于 Qwen3.5 的推理增强模型，社区通过大规模数据微调（1M tokens）并量化为 GGUF。下载量高，显示了社区对“强化推理”微调方向的认可。 |

#### 3. 生态信号

- **“Qwen3.x 宇宙”已然成型**：从官方 Qwen3.6-35B-A3B 的海量下载，到社区大量基于此模型的“Uncensored”微调版本遍地开花，Qwen 系列已成为当前最热门的开源模型家族。其 MoE 架构兼顾效率与性能，是社区二次创作的绝佳基座。
- **“月之暗面”与“智谱”双星闪耀**：月之暗面 Kimi-K3 和智谱 GLM-5.2 分别占据多模态和文本对话领域的头部位置，证明中国 AI 团队在开源社区的号召力越来越强。两者都选择了拥抱 MoE 架构。
- **极低比特量化成为主流**：Prism-ML 的 1-bit 和 2-bit 模型下载量均突破百万，表明用户对“在消费级硬件上运行大模型”的渴望远超预期。这种“性能妥协但门槛极低”的路线，正在重塑个人开发者与 AI 交互的方式。
- **安全与无限制的二元对立**：一边是强调“security”的模型（如 antares-1b），另一边是大量“Uncensored”标签的微调版。这反映了社区在追求模型可控性与探索开放边界之间的持续张力，也催生了多样化的生态分支。

#### 4. 值得探索

- **Qwen3.6-35B-A3B**：作为本周下载量之王，它是了解 MoE 架构如何在多模态领域发力的最佳起点。3B 的激活参数意味着你可以在较少的显存上获得接近 35B 模型的智能水平，是研究和应用部署的效率标杆。
- **Ternary-Bonsai-27B-gguf（2-bit）**：如果你对“如何用最低成本运行大型模型”感兴趣，这个模型值得深入研究。2-bit 的三值化量化在保持一定推理能力的同时，将模型体积压缩到极致，代表了边缘计算和大规模本地部署的未来方向。
- **Kimi-K3**：作为周点赞冠军，它是多模态大模型前沿的代表。如果你想体验当前最顶尖的开源图像理解与对话能力，或者研究月之暗面的技术路线，这个模型是首选。其 “compressed-tensors” 标签也暗示了底层有独特的高效压缩技术。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*