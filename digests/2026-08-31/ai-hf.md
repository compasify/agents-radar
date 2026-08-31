# Hugging Face 热门模型周报 2026-08-31

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-31 00:48 UTC

---

### **今日亮点**  
2026年8月，Hugging Face 生态系统由超高效、量化的大型多模态模型主导，尤其是 Qwen3.8 与 MiniMax-H3。**Qwen3.8-27B** 系列以超过450万次下载领跑，凸显对高容量、开源权重模型的强劲需求。值得注意的是，社区驱动的 GGUF 量化版本（如 *unsloth/Qwen3.8-27B-GGUF*）下载量已突破880万次，表明本地推理场景中采纳率极高。与此同时，**MiniMax-H3** 在视频生成领域持续占据主导地位，其微调版本及 Controlnet 扩展在创意工作流中广受欢迎。

---

### **热门模型**

#### 🧠 语言模型（LLM、聊天模型、指令微调）

| 模型 | 作者 | 点赞数 | 下载量 | 简述 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,389 | 121,976 | Qwen3.8 的轻量级快速推理变体，专为实时对话场景优化。其受欢迎程度反映了边缘应用中对低延迟 LLM 的日益增长需求。 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,714 | 346,516 | 高速 GLM-5.3 变体，专注于文本生成并提升吞吐量。其广泛的下载量表明企业对中国语料大模型的强烈兴趣。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,824 | 4,575,518 | 本周下载量最高的模型之一，兼顾速度与性能，适用于长上下文推理。其 Flash 架构支持大规模高效推理。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,100 | 2,794,721 | 一种高度高效的多模态模型，采用压缩张量；1.1万点赞反映出用户对紧凑但强大模型的热情。 |

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞数 | 下载量 | 简述 |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,267 | 1,137,181 | 基于扩散单文件架构的前沿图像转视频模型。其快速普及凸显了人工智能驱动视觉叙事工具的兴起。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,660 | 5,263,381 | 当前领先的开源图像转视频与文本转视频生成模型。其高下载量证实了其在生成式视频工作流中的主导地位。 |
| [alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) | alibaba-pai | 163 | 5,538 | 通过 Controlnet 增强的微调版本，可在视频生成中实现精准运动控制。标志着向模块化、可控视频合成的转变。 |
| [FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 193 | 0 | 使用极少量数据的快速视频生成器预览版。尽管尚未被下载，但发布信号明示了轻量级、数据高效视频建模的创新趋势。 |

#### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞数 | 下载量 | 简述 |
| :--- | :--- | ---: | ---: | :--- |
| [peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF) | peculiar-ragdoll | 141 | 87,848 | 基于 Qwen3.5 MoE 的专用代码生成模型，通过 GGUF 量化实现本地运行。吸引希望获得高性能编码助手的开发者。 |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 505 | 147,038 | 经过微调的 35B MoE 模型，同时适配文本与多模态任务。其双重能力表明人们对通用、可扩展基础模型的兴趣持续上升。 |

#### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞数 | 下载量 | 简述 |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,240 | 8,839,153 | 本周下载量最高的模型，是 Qwen3.8-27B 的 GGUF 量化版本。其巨大采用率证明了社区驱动量化在本地推理中的主导地位。 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 578 | 238,397 | Qwen3.8-27B 的无审查、GGUF 量化版本。反映出在小众与实验性使用场景中对不受限大模型访问的需求不断上升。 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 850 | 1,991,437 | 另一重大无审查 GGUF 发布，下载量极高。展示了社区微调如何超越官方发布，塑造模型可访问性。 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 457 | 1,622,056 | 经过度修改的“消解”版 GGUF，体现了模型个性化激进化与绕过安全过滤的趋势。 |

---

### **生态信号**  
截至2026年8月，Hugging Face 生态系统正明显分化为**开源权重基础模型**与**社区驱动优化层**两大阵营。Qwen3.8 与 MiniMax-H3 成为绝对主导系列，其中仅 Qwen 27B 系列就占所有模型下载量近10%。这反映出中国科技公司（如 Qwen、GLM、Kimi）推动的大规模、开放获取模型正在全球范围内形成强劲势头。  

像 **GGUF** 这类量化格式已成为本地部署的默认标准，涵盖 Qwen 与 GLM 变体的总下载量已超1500万次。而“无审查”与“消解”版本（如 *OBLITERATUS*、*orcarouter*）的激增，揭示出对不受限模型访问的地下需求持续增长，常伴随对安全机制的规避。与此同时，围绕 MiniMax-H3 与 LTX-2.5 的微调生态系统显示，**视频生成**正朝着更精细化的方向发展，尤其依赖 Controlnet 与轻量级扩散模型。开源权重模型已不再只是研究工具——它们正逐步成为消费级人工智能创作的基础设施。

---

### **值得探索**  
1. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** – 下载量超880万次，是当前 Hugging Face 上最受欢迎的模型。适合开发者寻找无需云端依赖、高性能且可本地运行的 LLM。  
2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** – 当前表现最佳的开源视频生成模型。创作者若探索 AI 驱动动画与内容生产，值得深入研究。  
3. **[peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF)** – 少见的以 GGUF 格式提供的 35B MoE 模型。适合高级用户构建定制化编程助手。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*