# Hugging Face 热门模型日报 2026-07-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-19 01:27 UTC

---

好的，作为AI模型生态分析师，以下是基于您提供的数据生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-07-19**

#### **今日速览**

今日Hugging Face榜单呈现出两大核心趋势：**多模态能力普及化**与**极端量化技术成熟化**。`Google` 的 `gemma-4-31B-it` 凭借超千万下载量，验证了顶级多模态大模型的统治力，而国内`zai-org`的`GLM-5.2`与`百度`的`Unlimited-OCR`也展现出了极强社区热度。在模型小型化方面，`prism-ml`团队凭借“三元（Ternary）”和“1-bit”量化技术，让270亿参数的模型能在消费级硬件上运行，极大地推动了开源生态的平民化。此外，基于`Qwen3.5/3.6`系列的微调与量化模型（如`Qwythos-9B`系列）呈现井喷态势，成为社区二次创作的主力军。

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 736 | 301,893 | 基于三元量化的270亿参数对话模型，性能与效率的平衡之作。其“三元”量化技术是本周生态的核心亮点之一。 |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 444 | 1,218,815 | 同样是prism-ml团队的270亿参数模型，但量化精度更低（1-bit），换取极高下载量并创下极端量化新纪录。 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,126 | 541,662 | 智谱AI最新一代GLM模型，采用MoE-DSA架构，性能强悍。凭借超4000点赞，成为近期最受关注的开源大模型之一。 |
| [tencent/Hy3](https://huggingface.co/tencent/Hy3) | tencent | 829 | 13,571 | 腾讯最新的HyV3系列文本生成模型，性能对标国际一流。作为官方发布版本，显示了业界在基础大模型上的持续投入。 |
| [InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1) | InternScience | 579 | 35,575 | 基于Qwen3.5-MoE打造的Agent专用模型，专为工具调用与任务执行优化。上榜反映了社区对Agent能力的强烈需求。 |

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 3,263 | 12,608,008 | Google新一代多模态大模型，支持图文理解。千万级下载量彰显其顶级性能与广泛影响力。 |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,315 | 2,112,869 | 基于Qwen3.5的9B多模态量化模型，集成了推理能力。超200万下载和2000+点赞验证了其出色的社区口碑。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,865 | 2,190,398 | 35B参数但仅激活3B参数的MoE多模态模型，主打“无审查”且风格激进。证明了MoE与小参数强激活的路线吸引力巨大。 |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,025 | 2,088,470 | 百度的通用OCR模型，号称可识别任意场景文字。超200万下载量，体现了专业OCR模型在文档处理等场景的巨大需求。 |
| [Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B) | Wan-AI | 114 | 2,328 | 万兴科技推出的图像转视频模型，专注于舞蹈动作生成。代表了AI视频生成向垂直化、趣味化发展的趋势。 |

##### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle) | Cactus-Compute | 268 | 935 | 基于JAX框架的轻量级函数调用与工具使用模型。专为Agent场景设计，虽下载量不高但代表性强。 |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 170 | 13,750 | 专注于OCR场景的图像理解模型，基于Qwen3.5微调。结合`baidu/Unlimited-OCR`，验证了OCR是本周最热门的垂直应用。 |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 941 | 0 | 并非一个传统模型，而是修复了Qwen系列聊天模板的配置文件。近千点赞说明社区对模型易用性的极致追求。 |
| [conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 395 | 0 | 基于Krea-2基座模型的LoRA，用于保持人物身份的图像编辑。这类微调组件的涌现，标志着文生图生态已进入精细化应用阶段。 |

##### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [empero-ai/Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF) | empero-ai | 170 | 103,504 | 前序模型`Qwythos-9B-Claude-Mythos-5-1M`的v2更新版本，进一步优化了推理能力。高下载量说明社区对模型迭代非常关注。 |
| [prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit) | prism-ml | 127 | 20,639 | 为Apple Silicon设备（MLX框架）定制的1-bit极端量化模型。展示了量化工具链的生态多样性。 |
| [GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF) | GnLOLot | 277 | 172,409 | 仅1B参数的小模型，但蒸馏了Claude Opus的思维链能力并通过量化实现高效部署。证明小模型的“思维蒸馏”是一个可行方向。 |
| [jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4) | jlnsrk | 132 | 3,869 | 针对`GLM-5.2`的社区Int4量化版，采用了“colibri”专家流式技术，使大型MoE模型能在CPU上运行。 |
| [unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF) | unsloth | 96 | 6,461 | 知名量化工具团队Unsloth推出的`inkling`模型的GGUF版本。其MoE架构与多模态支持使其可玩性极高。 |

#### **生态信号**

1.  **模型家族势力划分**：本周榜单几乎被**Qwen家族**（Qwen3.5/3.6）、**GLM家族**和**Bonsai（prism-ml）家族**瓜分。其中Qwen系列凭借其优异的基座性能，成为社区二次创作（如`Qwythos-9B`）最肥沃的土壤。Google的**Gemma**系列依然保持头部流量。
2.  **开源 vs 闭源**：榜单上的热门模型绝大部分为开源权重，表明**开源生态的活力与创新速度已远超闭源**。社区正通过量化、微调、蒸馏等方式，将顶级开源模型的能力推向极致。
3.  **极端量化与MoE趋势**：本周最显著的趋势是 **“让大模型变小”** 。`prism-ml`的1-bit与三元量化，以及`HauhauCS`的MoE模型（35B参数量可降至3B激活），共同指向了一个方向：**在消费级硬件上运行接近旗舰性能的模型**已成为现实。同时，`GLM-5.2`等模型的MoE+DSA架构也表明，稀疏化是通往更大规模模型的主流路径。

#### **值得探索**

1.  **zai-org/GLM-5.2**: 如果希望体验国内顶尖的开源MoE模型，这是不二之选。它不仅性能强劲，社区围绕它的量化工作（如`jlnsrk/GLM-5.2-colibri-int4`）也已展开，可玩性很高。
2.  **prism-ml/Bonsai-27B-gguf**: 对于资源有限的开发者，这个模型展示了技术的前沿。尝试1-bit或三元量化版本，可以直观地感受到在极低精度下模型能力的保留程度，极具研究价值。
3.  **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**: 这是一个社区微调的“爆款”。对于需要高性价比且具备多模态和推理能力的场景，这个9B模型是绝佳选择，其超200万的下载量就是最好的证明。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*