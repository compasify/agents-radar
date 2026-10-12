# Hugging Face 热门模型周报 2026-10-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-12 01:42 UTC

---

### **今日亮点**  
2026年10月，Hugging Face 生态系统由高性能、量化后的多模态模型主导，尤其以通义千问（Qwen）和 Cloudflare 的模型为代表。*Qwen3.8-27B* 系列凭借激进的社区微调与 GGUF 量化技术，创下超过680万次下载量，成为基础模型中的领头羊。值得注意的是，*Lightricks/LTX-2.5* 作为表现优异的图像到视频扩散模型，下载量突破170万次，标志着生成式视频领域的强劲发展势头。与此同时，如 *unsloth/Qwen3.8-27B-GGUF* 与 *prism-ml/Ternary-Bonsai-2-27B-gguf* 这类开源权重模型，展示了 2-bit 量化与 llama.cpp 兼容性带来的轻量级、高效推理日益占据主导地位。

---

### **热门模型**

#### 🧠 语言模型（LLM、聊天模型、指令微调）
| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,509 | 6,843,108 | 一款强大的图文到文本模型，具备出色的对话能力；是 Hugging Face 上下载量最高的模型之一，适用于多模态推理场景。 |
| [ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0) | ConwayResearch | 322 | 108,900 | 采用 2-bit 量化优化的 LLM，专为工具调用与函数执行设计，反映出低资源、高效率推理的日益增长兴趣。 |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,630 | 4,549,911 | 基于 llama.cpp 构建的 2-bit 量化 Llama 家族模型，以速度与效率著称；在消费级硬件上表现尤为突出。 |

#### 🎨 多模态与生成模型（图像、视频、音频、文本到X）
| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 7,322 | 1,726,683 | 业界领先的图像到视频扩散模型，支持高保真文本到视频生成；是 2026 年增长最快的模型之一。 |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 3,989 | 2,188,658 | 基于 Qwen-Image 2.1 的无审查、GGUF 量化文本到图像模型；因其出色的创意输出，在 ComfyUI 工作流中广受欢迎。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,657 | 2,016,567 | Qwen3.8-27B 的深度微调、无审查版本，具备先进的编码与推理能力；深受追求极致自由度的开发者青睐。 |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 3,228 | 136,103 | 官方发布的 Qwen-Image 2.1 模型，支持图像生成与编辑；以均衡的质量与可靠性著称。 |

#### 🔧 专用模型（代码、数学、医疗、嵌入向量）
| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 1,712 | 98,829 | 基于 Gemma 2 的前沿嵌入模型，专为语义搜索与检索任务中的特征提取进行优化。 |
| [unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF) | unsloth | 255 | 59,274 | Google 官方 embeddinggemma-2 的 GGUF 量化版本，可在设备端实现快速推理，适用于多语言 NLP 流水线。 |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 4,073 | 2,081,596 | Segment Anything Model (SAM) 的最新版本，现已扩展至视频分割；广泛用于精准对象掩码任务。 |

#### 📦 微调与量化模型（社区微调、GGUF、AWQ）
| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 5,026 | 6,488,262 | Qwen3.8-27B 的顶级性能 GGUF 量化版本，因运行速度快且兼容 vLLM 与 llama.cpp 而备受赞誉。 |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 799 | 4,189,006 | Qwen3.8-Flash-Next 的混合精度、GSQ-RCO 量化变体，以极低内存占用实现顶尖性能。 |
| [orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 760 | 614,193 | Qwen3.8-Flash-Next 的无审查、GGUF 优化版本，深受追求无限制创造力用户的喜爱。 |

---

### **生态信号**  
截至 2026 年 10 月，Hugging Face 生态系统清晰地展现出向 **开源权重、量化模型与社区驱动开发** 的转变趋势，通义千问（Qwen）与 Gemma 成为关键的基础模型家族。Qwen 在图像生成、多模态推理等多个领域均有广泛覆盖，凸显其多功能性与快速普及。GGUF 量化模型（如 *unsloth/Qwen3.8-27B-GGUF*、*prism-ml/Ternary-Bonsai-2-27B-gguf*）的爆发式增长，表明对边缘设备上高效、可部署推理的需求持续高涨。尤为值得关注的是，**2-bit 量化**（通过 llama.cpp 与三值压缩实现）正迅速获得认可，使高性能 LLM 可在消费级硬件上流畅运行。社区微调模型——尤其是无审查、极速版与编码优化型——正在大量涌现，反映出用户对定制化与自主性的强烈需求。尽管闭源模型仍具影响力，但开源权重运动在下载量与创新速度上持续领先，而 GGUF、safetensors 与 vLLM 等工具已成为可访问人工智能部署的基石。

---

### **值得探索**  
1. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** – 下载量超 640 万，是 Hugging Face 上最受欢迎的模型。其高性能、GGUF 格式以及对 vLLM 的兼容性，使其成为构建本地 AI 应用的开发者的理想选择。  
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** – 图像转视频领域的领军模型，下载量达 170 万次；非常适合希望使用基于扩散模型工作流探索生成视频内容的创作者。  
3. **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** – 混合精度量化中的佼佼者，提供卓越的速度与精度平衡，是高效多模态推理的标杆。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*