# Hugging Face 热门模型日报 2026-07-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-26 01:44 UTC

---

好的，作为 AI 模型生态分析师，根据您提供的 2026-07-26 Hugging Face Hub 热门模型数据，我为您整理了一份结构清晰的日报。

---

### 《Hugging Face 热门模型日报》- 2026年7月26日

#### 1. 今日速览

本周 Hugging Face 模型生态呈现出三大看点：**GLM-5.2** 以压倒性的点赞数登顶，标志着 MoE架构在超大模型领域的成功落地；**百度 Unlimited-OCR** 凭借超高下载量成为实用性最强的多模态模型，证明 OCR 在产业界仍有巨大需求；**Qwen3.6系列** 及其社区衍生模型（特别是 uncensored 细化和 GGUF 量化版）占据了榜单的半壁江山，显示出 Qwen 家族强大的生态吸引力和社区微调活力。此外，针对特定场景的微调（如代码、机器人操作）和极致量化（1-bit、2-bit）成为本周最活跃的技术趋势。

#### 2. 热门模型

##### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,446 | 707,029 | 本周热度冠军，采用 MoE 架构的稠密大模型。其强大的对话和推理能力吸引了大量关注，成为开源社区对标闭源模型的主力军。 |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 661 | 45,260 | 商用级文本生成模型，专注于高质量的代码和逻辑生成。其技术架构（如序列变换）和与 NVIDIA 的深度合作（NVFP4版本）使其在专业开发者社区备受关注。 |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 562 | 2,784 | 2500亿参数的巨型开源模型，是韩国 AI 公司 Upstage 的旗舰产品。尽管下载量相对不高，但作为大参数量开源尝试，其技术权重和讨论热度很高。 |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 406 | 11,573 | 高效轻量级语言模型，专注于中文场景优化。在3B量级上展现了不俗的性能，适合资源受限但需要高质量中文生成的场景。 |
| [Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif-Technologies | 191 | 2,270 | 新一代特征提取和文本生成模型，定位为商业级 特征工程 工具。其 Beta 版本的发布吸引了企业用户和 AI Infra 开发者的目光。 |
| [fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 163 | 5,661 | 专注于安全领域的1B参数模型，名为“Antares”。它在安全代码检测和漏洞分析方面展现了潜力，体现了 AI 在垂直安全领域的应用深化。 |

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,106 | 2,564,264 | 百度出品的全能型 OCR 模型，下载量高达 256 万。其 “Unlimited” 特性意味着能处理各种复杂场景的文本识别，是工业应用的刚需模型。 |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,516 | 6,413,105 | 本周下载量冠军，超 640 万。Qwen 最新一代 MoE 模型，以 35B 总参数、3B 激活参数的极致效率实现了顶级性能。它是众多社区微调和量化模型的基座。 |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,465 | 1,570,995 | 基于 Qwen 3.5 的社区微调模型，融合了 “Claude” 风格，主打推理和角色扮演。其极高的量化版本下载量说明社区对 “有特色” 的中小参数模型需求旺盛。 |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,570 | 31,575 | 一款专注于对话式多模态理解的新模型。它能够同时处理图像和文本输入，并在自然对话中给出反馈，代表了多模态交互的前沿方向。 |
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,277 | 749,449 | Kimi 团队推出的代码专用多模态模型，支持图片和文本输入。其强大的代码理解与生成能力，加上压缩技术的应用，使其在开发者社区迅速走红。 |
| [microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 277 | 1,156 | 微软推出的新型文本到图像生成模型，专注于图像编辑与生成流程控制。它代表了从简单的文生图向更精细的 “AI 设计工作流” 演进的趋势。 |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 287 | 33,109 | 专注于 OCR 任务的 Qwen 3.5 微调模型，专为提升光学字符识别精度而设计。它在 Baidu Unlimited-OCR 之外，为社区提供了一个灵活的专用替代方案。 |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 82 | 47 | 主打 CPU/边缘部署的超轻量级文本转语音模型。它的出现表明，TTS 领域正在向极致的边缘计算和低资源消耗方向发展。 |

##### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 166 | 841 | 基于 Qwen MoE 架构的代码生成模型，专为编程任务优化。它的 “Dev” 版本表明其目标是为开发者提供辅助编码的专用工具。 |
| [openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 175 | 607 | 多模态机器人操作模型，属于视觉-语言-动作（VLA）模型。它能理解环境并直接输出机器人控制指令，代表了 AI 从数字世界到物理世界的重要延伸。 |
| [openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | openbmb | 128 | 379 | 与 RobotManip 同系列，专注于机器人轨迹跟踪。这两个模型共同构成了一个完整的机器人控制解决方案，显示了开源社区在具身智能领域的进展。 |
| [conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 539 | 0 | 专门为 Krea-2 模型设计的 LoRA，用于图像中的人物身份编辑。尽管下载量为零（可能为刚发布），但点赞数反映了社区对高质量图像编辑 LoRA 的强烈渴望。 |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 90 | 1,039 | 微软推出的 “计算机使用”（Computer Use）模型，能够理解屏幕截图并执行操作。它预示着 AI 从 “对话助手” 向 “数字代理人（Agent）” 角色的转变。 |

##### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,091 | 1,988,680 | 基于 Qwen3.6 的社区 uncensored 微调版本，采用 GGUF 格式。其 “Aggressive” 风格和 “无审查” 特性吸引了大量追求模型自由度与创造性的用户。 |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 638 | 2,114,963 | 超高下载量的 1-bit 量化模型。它展示了将 27B 大模型通过极致量化压缩到可运行在普通硬件上的可能性，是边缘设备和本地推理的利器。 |
| [DavidAU/...MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 545 | 483,845 | 名字极具特色的 Qwen3.6 融合微调模型，集成了多种风格并进行了 GGUF 量化。这种 “All-in-One” 的社区作品反映了用户对个性化 AI 体验的追求。 |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,028 | 611,685 | prism-ml 的又一量化力作，采用 2-bit 三元量化技术。它比 1-bit 版本 (Bonsai) 更受点赞，性能与压缩比的平衡更受开发者青睐。 |
| [bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 551 | 27,064 | 专为增强 Qwen3.6 的 “思考” 或推理能力而进行的微调。它表明社区除了 “无审查”，也非常关注如何提升模型在逻辑和规划等核心能力上的表现。 |

#### 3. 生态信号

- **Qwen 生态一枝独秀**：Qwen3.6系列及其变体（包括官方版本和社区微调版）在榜单中占据近三分之一，从赞数到下载量都表现抢眼。**MoE架构 + 强基座 + 活跃社区**的成功模式已然清晰。
- **模型小型化与量化成为主流**：这从 `prism-ml` 的 1-bit/2-bit 量化模型、`unsloth` 的 GGUF 版本以及 `Nanbeige4.2-3B` 的高效小模型可见一斑。**“让大模型更易用”** 是当前社区的核心驱动力，不再是单纯追求参数规模。
- **“Uncensored”与“Safety”的分化**：一方面，`HauhauCS`、`DavidAU` 等 “无审查” 模型拥有极高热度，体现了用户对内容自由的强烈需求；另一方面，`fdtn-ai` 的 `antares-1b` 专注于安全领域，`Kimi-K2.7-Code` 等模型也自带安全/合规导向。这预示着未来模型商用的两个核心方向：探索开放性与确保可控性。
- **从对话到“做事”**：`MiniCPM-RobotManip`（机器人操作）、`microsoft/Fara1.5`（电脑使用）等模型标志着 AI 正在从信息交互向物理/数字世界的“行动”跨越。**智能体（Agent）和具身智能**正从概念走向具体的模型产品。

#### 4. 值得探索

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**：作为本周赞数榜榜首，它是体验国内顶尖 MoE 模型综合实力的不二之选。其强大的语言能力和对话质量是评估国产大模型进展的标杆。
- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**：如果您从事开发工作，这个模型值得一试。它背靠 Kimi 的产品实力，专攻代码理解，并使用了先进的压缩技术，是理解 “代码 Agent” 未来形态的理想实践模型。
- **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)**：对于 AIGC 和设计领域从业者，这个模型代表了文生图的下一个阶段——不仅仅是生成一张图，而是定义了一个可控制的、可迭代的 “工作流”。它是探索 AI 设计自动化和精细化控制的绝佳起点。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*