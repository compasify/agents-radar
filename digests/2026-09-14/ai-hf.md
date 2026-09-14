# Hugging Face 热门模型周报 2026-09-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-14 00:22 UTC

---

### 今日亮点  
Qwen 的主导地位持续巩固，*Qwen3.8-27B* 以超 770 万次下载领跑，*Qwen3.8-Flash-Next* 人气飙升，二者在多模态推理方面表现卓越。GGUF 量化模型的兴起——尤其是 *unsloth/Qwen3.8-27B-GGUF* 达到 1100 万次下载——标志着向高效本地推理的明显转变。与此同时，Lightricks 的 *LTX-2.5* 作为性能最强的视频生成模型脱颖而出，尽管是新模型，仍实现 150 万次下载。开源创新正加速覆盖多模态领域，社区驱动的微调与量化技术正在推动可及性的提升。

---

### 趋势模型

#### 🧠 语言模型（LLM、聊天模型、指令微调）

| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 2,200 | 244,457 | DeepSeek-V4.1 的轻量快速版本，专为实时推理优化；在低延迟应用场景中迅速获得关注。 |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,342 | 150,110 | 基于 LLaMA 架构的紧凑高效 20 亿参数模型；适用于边缘部署和移动端应用。 |
| [nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 756 | 3,970 | 一款小型但强大的基于 Qwen3.5-MoE 的模型，专为智能体工作流与图文理解设计。 |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,154 | 21,336 | 高效 40 亿参数语言模型，具备出色的推理能力；正成为低成本推理的首选。 |
| [TokenRhythm/NeoHorse-1-4B](https://huggingface.co/TokenRhythm/NeoHorse-1-4B) | TokenRhythm | 1,737 | 7,979 | 基于 Qwen3.5-text 微调的模型，具有智能体设计特征；在自主任务执行流程中表现突出。 |

#### 🎨 多模态与生成（图像、视频、音频、文本转任意）

| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,742 | 1,548,442 | 采用扩散机制的顶尖图像转视频模型；凭借电影级画质与高速生成，广受青睐。 |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,971 | 7,768,964 | 主力多模态模型，具备强大的图文理解能力；广泛应用于科研与生产环境。 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,165 | 624,390 | Qwen3.8-27B 的优化闪速版本，推理速度更快；在实时聊天与智能体系统中备受欢迎。 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,304 | 1,576,209 | 中文多模态模型，具备强大对话与视觉推理能力；在亚洲地区迅速普及。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,238 | 4,819,845 | 基于 Diffusers 构建的多功能图文转视频模型；创意工作室与内容创作者的首选。 |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 373 | 123,491 | Minimax-H3 的高度精炼版本，专注高保真视频生成；以运动连贯性著称。 |

#### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 774 | 797,832 | 具备 3.0 版本改进的前沿时间序列预测模型；广泛用于金融与物联网领域。 |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,930 | 252,928,721 | 全球下载量最高的嵌入模型；在大规模语义搜索与聚类任务中备受信赖。 |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 433 | 30,310 | 针对网络安全任务训练的 GLM-5.3 专用变体，采用 FP8 量化；避免拒绝模式。 |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 406 | 3,707 | 具有符号规划与智能体编辑能力的音乐生成模型；在 AI 创作旋律方面独具特色。 |

#### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,009 | 11,005,880 | 下载量最高的 GGUF 量化模型；可在消费级硬件上实现接近全性能的本地推理。 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 970 | 769,557 | 混合精度 GGUF 模型，采用 GSQ+RCO 量化；在边缘设备上兼顾体积与精度。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 633 | 750,591 | 名字极长的非限制性微调模型，具备激进的编码与叙事能力；在小众社区中热度攀升。 |
| [openbmb/MiniCPM5-2B-GGUF](https://huggingface.co/openbmb/MiniCPM5-2B-GGUF) | openbmb | 217 | 99,716 | MiniCPM5-2B 的轻量版 GGUF 模型；适用于移动与嵌入式场景。 |

---

### 生态信号  
2026 年 9 月的 Hugging Face 生态系统呈现出一个日益成熟的格局，由 **Qwen**、**GLM** 与 **MiniCPM** 家族主导，其基础模型与社区微调模型均实现稳健增长。Qwen 凭借大规模采纳——尤其是通过 GGUF 量化——推动高性能多模态 AI 的普惠化。GGUF 模型的爆发式增长（如 unsloth/Qwen3.8-27B-GGUF）凸显出向 **本地高效推理** 的明确趋势，降低对云 API 的依赖。值得注意的是，**MoE 架构**（Qwen3.5-MoE、GLM-5.3）在微调圈内势头强劲，助力实现可扩展的参数效率。尽管专有模型仍具影响力，但开源权重替代方案在代码、安全与创意领域日益具备竞争力。像 *Heretic*、*Uncensored* 与 *Fable* 系列变体等社区项目，凸显了对可定制、突破边界模型的旺盛需求——常绕过安全过滤以支持高级用例。

---

### 值得探索

1. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** – 下载量超 1100 万，是本地高速推理的黄金标准。适合开发者构建离线 AI 智能体或在树莓派级别硬件上部署。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** – 图像转视频领域的领头羊，下载量达 150 万，提供电影级生成效果，非常适合追求专业级成果却无需云成本的内容创作者。

3. **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** – 社区微调力量的典范。尽管名字冗长，却代表了“非限制性”模型的前沿，具备卓越的编码与叙事深度——对于高级智能体系统设计极具研究价值。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*