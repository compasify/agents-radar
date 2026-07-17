# Hugging Face 热门模型日报 2026-07-17

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-17 01:29 UTC

---

好的，作为AI模型生态分析师，以下是根据您提供的2026-07-17 Hugging Face Hub热门数据生成的日报。

---

### Hugging Face 热门模型日报 (2026-07-17)

#### 今日速览

今日榜单呈现出显著的“微调与量化狂欢”格局。**Qwen家族**依然是社区最活跃的基座模型，围绕其诞生的微调版和量化版模型占据了多个热门席位。由`prism-ml`和`zai-org`推出的**极致量化模型**（如1-bit、2-bit乃至三元权重）成为下载量黑马，展现出社区对端侧部署和效率的极致追求。此外，**腾讯的Hy3**和**百度的Unlimited-OCR**等企业级模型的上榜，表明大型AI厂商的开源步伐仍在加速。值得关注的是，GGUF格式模型几乎统治了下载榜单，凸显了`llama.cpp`生态在个人计算设备上的绝对主导地位。

#### 热门模型

##### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,029 | 513,061 | 凭借最高点赞量登顶榜单，是基于GLM框架的MoE架构模型，展示了强大的对话生成能力，社区关注度极高。 |
| [deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) | deepreinforce-ai | 902 | 1,785,575 | 35B参数的大模型GGUF量化版，下载量巨大，证明了大模型量化版本在消费级硬件上的广泛需求。 |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 602 | 74,007 | 首次引入“三元权重”（2-bit）的27B模型，是探索新型量化技术的先锋，兼具高下载量和高关注度。 |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 340 | 559,267 | 同样是27B的极致量化模型，甚至达到了1-bit级别，下载量是前者的数倍，说明“越小越受欢迎”的趋势。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,787 | 2,328,315 | 基于Qwen3.6的35B MoE模型的无审查版，下载量破230万，反映出社区对高参数、无限制模型的强烈偏好。 |
| [jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4) | jlnsrk | 119 | 2,621 | GLM-5.2的int4 CPU量化版，使用了“专家流式”技术，为在CPU上运行大模型提供了高效方案。 |

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,010 | 1,852,722 | 百度推出的通用OCR模型，下载量超185万，主打“无限制”的识别能力，在图像文本提取领域潜力巨大。 |
| [tencent/Hy3](https://huggingface.co/tencent/Hy3) | tencent | 813 | 11,849 | 腾讯开源的Hunyuan系列新模型，作为原生文本生成模型，代表了顶级厂商的最新通用能力进展。 |
| [OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 232 | 75,105 | 专注于音频任务，集成了语音转文字和说话人分离（Diarization）功能，是音频处理的一站式方案。 |
| [Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B) | Wan-AI | 92 | 1,884 | 图像生成视频模型，专注于“舞蹈”场景，展示了在特定动作生成任务上的进步。 |
| [Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Alissonerdx | 167 | 0 | 视频生成领域的身份保持LoRA，用于在生成视频中保留特定人脸特征，技术应用方向明确。 |

##### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | yuxinlu1 | 1,207 | 506,068 | 基于Gemma4的12B模型GGUF版，专为“代理（Agent）”和“编程”任务设计，下载量很高，显示社区对Agent能力和代码模型的需求。 |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 136 | 3,678 | 专精于OCR任务的图像生成文本模型，是百度Unlimited-OCR的有力竞争者，反映了OCR领域的竞争激烈。 |
| [Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle) | Cactus-Compute | 248 | 733 | 使用JAX框架构建，主打“函数调用”和“工具使用”，代表了AI从对话走向工具化、Agent化的重要方向。 |

##### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,235 | 2,042,670 | 基于Qwen3.5的9B模型GGUF量化版，下载量超200万，是社区微调与量化热潮的典型代表。 |
| [bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 389 | 8,238 | 在Qwen3.6基础上为提升“思考”能力而微调的27B模型，体现了社区对推理能力的定制化追求。 |
| [GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF) | GnLOLot | 264 | 121,296 | 对MiniCPM5这样的1B小模型进行多版本量化，下载量超过12万，说明极小型模型在特定场景（如移动端）也有极高人气。 |
| [conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 322 | 0 | 基于Krea2的图像编辑LoRA，虽然下载量为0，但高点赞数表明社区对这种特定功能的微调组件（LoRA）兴趣浓厚。 |

#### 生态信号

从本周数据来看，AI模型生态呈现以下几个显著趋势：

1.  **Qwen家族统治地位稳固**：无论是原生微调（如`HauhauCS`版）还是量化版本（如`empero-ai`系列），Qwen3.5/3.6几乎成为了所有热门模型的基座。其强大的基础能力和开源策略，使其成为了社区的“Linux内核”。
2.  **从“卷参数”到“卷量化”**：当前的热点不再只是发布更大的模型，而是如何将大模型“塞进”小设备。1-bit、2-bit乃至三元权重等极致量化技术（如Bonsai系列）成为新的研究热点，并获得了海量下载，这预示着端侧AI部署将迎来爆发。
3.  **企业级开源与社区微调并行**：腾讯的Hy3、百度的Unlimited-OCR等大厂模型依然能吸引大量关注。但更多的创新和流量集中在社区基于这些基座模型进行的二次微调（如专业Agent、无审查版本）和量化工作上，社区生态的活力远大于个别厂商的单点发布。

#### 值得探索

*   **`prism-ml/Bonsai-27B-gguf` (1-bit)**：如果你想了解模型量化的极限在哪里，这个模型是必看的。虽然可能是性能与质量的极端博弈，但它代表了未来在超低功耗设备上运行大模型的可能。
*   **`HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive`**：作为下载量冠军之一，它代表了社区对高度定制化、无限制模型的真实需求。如果你进行创意写作或需要模型拥有极高的自由度，可以研究它的微调思路。
*   **`yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF`**：这个模型的名字虽长，但“Agentic”和“Coding”两个标签至关重要。它展示了传统语言模型向能够调用工具、操作系统的智能体（Agent）演进的方向，是研究AI编程助手和自动化工具的理想起点。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*