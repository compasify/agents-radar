# Hugging Face 热门模型周报 2026-10-05

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-05 01:13 UTC

---

### **今日亮点**

Qwen 的主导地位持续重塑 Hugging Face 生态，多个版本的 **Qwen3.8** 与 **Qwen-Image-2.1** 在流行度与下载量上均位居前列。尤为突出的是 **Qwen/Qwen3.8-27B**（16.9K 点赞，682万次下载），成为最受欢迎的模型，反映出社区对 Qwen 多模态能力的高度信任。与此同时，采用 GGUF 量化格式的版本——尤其是来自 ISTA-DASLab 与 DavidAU 的版本——正迅速普及，各自下载量突破 160 万次，表明用户对轻量级、本地推理方案的需求日益增长。诸如 *Qwen3.8-Flash-Next-GSQ-RCO* 与 *Qwen3.8-27B-TURBO-Fable-Cold-Fusion* 等无审查、超优化模型的兴起，凸显了对高性能、注重隐私替代方案的强烈需求。

---

### **热门模型**

#### 🧠 语言模型（LLM、聊天模型、指令微调）

| 模型 | 作者 | 点赞数 | 下载量 | 简述 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,940 | 6,821,761 | 一款具备强大能力的 270 亿参数视觉语言模型，对话表现优异；凭借开放权重和多模态推理能力，获得广泛采用。 |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,416 | 4,045,810 | 基于 Llama 架构的 2 位量化模型，采用三值压缩技术；可在消费级硬件上实现近乎理想的本地推理效率。 |
| [Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw) | Infatoshi | 213 | 946 | 针对 EXL3 优化的无审查 GLM-5.3 变体，通过 mlx 实现苹果芯片上的高效率推理。 |

#### 🎨 多模态与生成（图像、视频、音频、文本到 X）

| 模型 | 作者 | 点赞数 | 下载量 | 简述 |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 6,312 | 1,626,951 | 当前最先进的图像转视频模型，可从静态图像生成高质量运动序列；在创意工作流中广泛应用。 |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 3,142 | 1,553,744 | Qwen Image 2.1 的无审查 GGUF 版本；因支持 ComfyUI 集成，在本地图像生成领域极为流行。 |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 588 | 272,896 | 对 Qwen Image 2.1 进行速度优化的 LoRA 微调版本；以极低延迟实现快速图像合成，广受好评。 |
| [Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap) | Alissonerdx | 1,180 | 203,086 | 基于 Qwen-Image-2.1 构建的高质量人脸替换模型；在视频编辑流程中以真实感与稳定性著称。 |

#### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞数 | 下载量 | 简述 |
| :--- | :--- | ---: | ---: | :--- |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 715 | 3,445 | 基于对比学习的验证器模型，用于重排序与决策；在 AI 安全与检索系统中崭露头角。 |
| [fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide) | fastino | 366 | 53,625 | 专为意图分类与实体抽取训练的 NER 模型；在结构化数据解析任务中表现卓越。 |
| [FermionResearch/Phonon-2](https://huggingface.co/FermionResearch/Phonon-2) | FermionResearch | 202 | 2,635 | 针对苹果芯片优化的 ASR 模型，使用 mlx；适用于 Mac 硬件上的实时语音转写。 |

#### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞数 | 下载量 | 简述 |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 556 | 1,886,975 | 采用 GSQ+RCO 技术的高级 GGUF 量化方案；在几乎无质量损失的前提下实现 4 倍加速推理。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,422 | 2,164,143 | 最复杂的 GGUF 构建之一——融合无审查微调、unsloth 优化与面向编码者的专属微调。 |
| [Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine-Research | 281 | 14,361 | 采用 A4B 量化技术的高度压缩 290 亿参数模型；目标是边缘部署，内存占用极低。 |
| [orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF) | orcarouter | 361 | 14,195 | 针对网络攻防场景优化的无审查 Orca 变体，使用 GGUF 格式；深受追求激进行为与本地运行的开发者青睐。 |

---

### **生态信号**

2026 年 10 月的 Hugging Face 生态由 **Qwen 的霸主地位** 定义，多个 Qwen3.8 与 Qwen-Image-2.1 变体在各项指标与应用场景中全面领先。开放权重模型持续繁荣，尤其以 **GGUF 量化** 为代表——这一趋势源于对高效、可本地部署 AI 的迫切需求。ISTA-DASLab 与 DavidAU 在先进量化技术（如 GSQ/RCO）方面引领潮流，而社区则积极构建 **无审查、超速优化、精细化微调** 的变体，优先保障速度、定制化与规避内容限制。一个清晰的趋势正在形成：**模块化、可组合的 AI**。LoRA 用于角色替换、微调后的图像转视频模型、专用的 ASR 系统等，反映了生态系统日趋成熟——用户不再仅仅是模型的使用者，更成为其设计者。值得注意的是，**通过 mlx 支持苹果芯片** 以及 **ComfyUI 集成** 是推动这一民主化进程的关键因素。如 *Ternary-Bonsai* 等 2 位模型的崛起，预示着效率新前沿的到来，不断拓展消费级硬件的极限。

---

### **值得探索**

1. **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** – 此模型代表了社区驱动优化的前沿：融合无审查微调、unsloth 优化与多功能能力。非常适合希望在本地环境中获得最大控制力与性能的开发者。

2. **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** – 下载量近 190 万，是高效高速推理的黄金标准。其 GSQ+RCO 量化在体积、速度与精度之间取得极佳平衡，非常适合在中等硬件上部署多模态应用。

3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** – 作为顶尖的图像转视频模型之一，是创作者与动画师不可错过的工具。其从静态图像生成流畅连贯视频序列的能力，已成为现代生成内容管线的核心支柱。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*