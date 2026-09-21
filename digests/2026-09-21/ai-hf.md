# Hugging Face 热门模型周报 2026-09-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-21 00:36 UTC

---

### **今日亮点**  
Hugging Face 生态系统正迎来高性能、量化后的多模态模型的爆发式增长，其中通义千问（Qwen）在图文到文本及视觉语言任务中占据主导地位。尤为引人注目的是，*Qwen3.8-27B* 系列在受欢迎程度和下载量上均遥遥领先，社区驱动的 *unsloth/Qwen3.8-27B-GGUF* 已突破 690 万次下载，凸显出对优化后、可本地部署模型日益增长的偏好。与此同时，Lightricks 的 *LTX-2.5* 和 MiniMaxAI 的 *MiniMax-H3* 在视频生成领域迅速走红，反映出对基于 AI 的创意工具需求持续上升。以 *DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion* 等专业化微调模型为代表的“无审查”“异端”风格产品，也体现了向小众、性能优化版本发展的趋势，专为高级用户定制。

---

### **热门模型**

#### 🧠 语言模型（LLM、聊天模型、指令微调）
| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,861 | 7,331,932 | 一款高度流行的指令微调大模型，具备强大的多模态集成能力；凭借尺寸、速度与对话流畅性的平衡，成为 Hugging Face 上下载量最高的模型之一。 |
| [meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama | 7,769 | 5,910,102 | Meta 首席模型的最新迭代，仍是开发者追求开源权重、指令遵循能力时的首选，具备出色的推理与代码生成能力。 |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 3,549 | 76,669 | 采用 Qwen3.5 架构的前沿 MoE（专家混合）模型，融合边缘推理优化，面向 Apple Silicon 及低延迟系统实现高效部署。 |

#### 🎨 多模态与生成模型（图像、视频、音频、文本到X）
| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,552 | 1,609,559 | 基于扩散模型的强大图像到视频及文本到视频生成模型，因其高质量输出与单文件兼容性，迅速被创意工作流采纳。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,525 | 4,057,444 | 顶尖的多模态模型，支持图像到视频与文本到视频合成，在数字内容创作中广泛应用，具备出色的时空一致性。 |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 742 | 183 | 早期但具影响力的图像生成模型，支持文生图与图像编辑，现通过微调与 ComfyUI 流水线集成不断扩展应用。 |

#### 🔧 专用模型（代码、数学、医疗、嵌入表示）
| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 915 | 17,403 | 一个专注于音乐生成的紧凑型 3B 模型，具备符号规划与智能编辑能力，适合需要实时响应的创意 AI 应用场景。 |
| [harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD) | harshatheg | 477 | 0 | Qwen-2.5-1B 的轻量级约束解码变体，针对 Apple Silicon 使用 MLX 优化结构化输出，吸引开发本地代理的开发者关注。 |

#### 📦 微调与量化模型（社区微调、GGUF、AWQ）
| 模型 | 作者 | 点赞数 | 下载量 | 摘要 |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,428 | 6,941,478 | 本列表中下载量最高，是 Qwen3.8-27B 的 GGUF 量化版本，通过 llama.cpp 实现 CPU 与 GPU 快速推理——非常适合本地部署。 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,478 | 1,217,204 | Qwen3.8-27B 的混合精度 GSQ-RCO 量化版本，在降低内存占用的同时保持性能，适用于资源受限环境。 |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 1,494 | 1,908,396 | 对 270 亿参数模型的开创性 2 位三值量化，推动模型压缩边界——在极端稀疏下仍实现接近全精度的保真度。 |

---

### **生态信号**  
2026 年 9 月的 Hugging Face 生态系统清晰地呈现出向**高效、可本地部署模型**的转型趋势，这一变化由 **GGUF**、**三值量化** 和 **混合精度技术** 的广泛采用所驱动。通义千问已成为主导模型家族，其多个变体覆盖文本、图像与视频模态，并拥有庞大的微调与量化发布网络。这一势头标志着从单纯追求模型规模转向**实际可用性**，尤其在边缘计算与消费级硬件中表现显著。开源权重模型依然牢牢占据主导地位，未见专有模型侵蚀迹象——通义千问、Llama 与 GLM 继续引领透明度与社区参与度。值得注意的是，**微调活动**正在加速向细分场景聚集：“无审查”与“异端”类变体满足了高级用户对无过滤输出的需求，而通过 MLX 实现的 Apple Silicon 优化则为 Mac 用户打开了新通道。同时，越来越多 **ComfyUI 兼容模型**（如 *Comfy-Org/Qwen-Image-2.1*）的出现，也表明其已深度融入可视化 AI 流水线，预示着端到端工作流生态的日趋成熟。

---

### **值得探索**
1. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** – 下载量近 700 万，已成为本地运行大语言模型的事实标准。其速度、效率与兼容性的结合，使其成为在 CPU 或低端 GPU 上部署 LLM 开发者的必备选择。
2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** – 开创性的 2 位量化模型，证明超压缩模型仍可保留显著能力。对关注模型效率、AI 可持续性与未来硬件限制的从业者而言，极具参考价值。
3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** – 作为增长最快的视频生成模型之一，它体现了扩散模型与创意工具融合的趋势。适合艺术家、设计师及探索 AI 视频制作的内容创作者。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*