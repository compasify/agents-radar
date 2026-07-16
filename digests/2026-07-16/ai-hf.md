# Hugging Face 热门模型日报 2026-07-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-16 01:26 UTC

---

好的，作为AI模型生态分析师，以下是根据您提供的数据生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 (2026-07-16)**

#### **今日速览**

本周Hugging Face生态中，**GLM-5.2** 以接近4000的周点赞数成为社区最受关注的模型，紧随其后的**Qwen3.6-35B-A3B**和**Qwythos-9B**系列则凭借海量下载量证明了其在实际应用中的受欢迎程度。趋势上，**MoE（混合专家）架构**持续升温，成为大模型标配。同时，社区量化热情高涨，**GGUF**格式的模型不仅在下载量上占据主导，更涌现出**2-bit、1-bit**等极致量化探索。多模态能力进一步融合，兼具文本和图像处理能力的**image-text-to-text**模型成为主流。

#### **热门模型**

#### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 3,998 | 489,611 | 本周点赞冠军，基于GLM架构的MoE模型。其强大的对话和文本生成能力吸引了大量关注。 |
| [deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) | deepreinforce-ai | 894 | 1,533,354 | 一个35B参数、兼容API的商用许可模型，下载量巨大。社区对其商业友好的许可证和GGUF量化版本表现出极高兴趣。 |
| [InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1) | InternScience | 555 | 30,539 | 基于Qwen3.5的MoE架构模型，专为Agent任务设计。其创新的MoE结构和对Agent应用的针对性优化是上榜关键。 |

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,214 | 2,006,265 | **下载量冠军**，基于Qwen3.5的多模态GGUF量化模型。它融合了推理和图像理解能力，社区量化版本极受欢迎。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,760 | 2,443,871 | **下载量亚军**，一个激进的“无审查”视觉MoE模型。其强大的视觉语言能力和无审查特性吸引了海量用户。 |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,002 | 1,715,301 | 百度的通用OCR模型，下载量惊人。它强大的文字识别能力和“无限制”的特性是其获得广泛关注的核心。 |

#### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | yuxinlu1 | 1,198 | 468,629 | 基于Gemma-4的Agent/代码专用模型，下载量可观。其强大的编码和终端操作能力使其成为开发者社区的利器。 |
| [Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle) | Cactus-Compute | 236 | 571 | 专注于函数调用和工具使用的专用模型。其Jax实现和针对Agent场景的优化在特定开发者群体中引起了关注。 |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 917 | 0 | 虽非模型，但填补了生态空白。它修复并提供了Qwen模型的聊天模板，解决了社区的关键痛点，因此获得了极高点赞。 |

#### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4) | unsloth | 208 | 1,599,150 | 基于Qwen3.6的高效量化版本，下载量巨大。Unsloth团队的NVFP4量化技术极大降低了大型多模态模型的部署门槛。 |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 467 | 23 | 前沿量化探索，使用2-bit三元量化。它代表了社区对极致模型压缩以在消费级硬件上运行27B模型的追求。 |
| [GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF) | GnLOLot | 250 | 89,892 | 对MiniCPM5-1B模型进行精细调优和量化的成功案例。它以极小的体积和出色的“思考”能力，在低资源设备上实现了亮眼表现。 |

#### **生态信号**

本周生态核心信号是 **“MoE + 量化”** 的组合成为主流范式。以GLM-5.2和Qwen3.6系列为代表，MoE架构在提升模型性能的同时，也通过量化（如GGUF、NVFP4）实现了高效部署，这从巨大的下载量中可见一斑。**开源权重模型**的活力和迭代速度远超闭源，社区微调（如无审查版本）和极致量化（如2-bit、1-bit）活动异常活跃，这表明开源社区正致力于将前沿模型推向更广泛的应用场景。此外，**Agent**和**工具调用**能力正成为模型标配，暗示着从“聊天”到“执行”的范式转移。

#### **值得探索**

1.  **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**：它使用了前沿的2-bit三元量化，展示了在极低精度下运行大型语言模型的潜力。对于关注模型压缩和边缘计算的研究者或开发者来说，这是一个必试的模型。

2.  **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**：这是一个专注于函数调用和工具使用的Jax模型。如果你在开发复杂的Agent系统，需要精确稳定的工具调用能力，这个模型值得深入研究，它可能代表了Agent模型的一个新方向。

3.  **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**：作为腾讯“混元”系列的最新版本，它获得了800点赞和过万下载，代表了国内大厂在该领域的持续投入。体验Hy3可以了解国产大模型在通用对话能力上的最新水平。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*