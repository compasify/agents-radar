# Hugging Face 热门模型日报 2026-06-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-25 00:28 UTC

---

好的，作为AI模型生态分析师，以下是基于2026年6月25日数据生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026年6月25日**

#### **今日速览**

本周Hugging Face生态呈现出“双雄争霸”与“多模态齐放”的格局。**DeepSeek-V4-Pro** 与 **GLM-5.2** 凭借周点赞数超过5000和2300的表现，成为开源语言模型领域的绝对焦点，标志着MoE架构在顶级模型中的全面普及。同时，**Google Gemma 4** 系列（包括其“any-to-any”版本和专门的Diffusion模型）的爆发式下载，证明了社区对高效、多模态基础模型的需求正急剧增长。此外，以 **Qwythos** 和 **Huihui** 为代表的社区微调活动异常活跃，尤其是在编码和agentic能力上的“炼丹”蔚然成风。

#### **热门模型**

**🧠 语言模型（LLM、对话模型、指令微调）**

*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**：作者：deepseek-ai | 点赞：5,046 | 下载：2,052,463
    *   **一句话说明**：DeepSeek最新旗舰级MoE模型，凭借卓越的综合能力（尤其是推理和编码）在本周以绝对优势领跑热度榜。
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**：作者：zai-org | 点赞：2,351 | 下载：57,186
    *   **一句话说明**：智谱AI的最新大模型，采用MoE-DSA架构，作为国产模型的顶尖代表，引发了社区对其性能与权重开放的广泛讨论。
*   **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**：作者：google | 点赞：1,162 | 下载：2,114,441
    *   **一句话说明**：Google的“any-to-any”全能模型，12B的体量支持文本、图像、音频等多模态输入输出，超高下载量反映了开发者对通用Agent模型的渴望。
*   **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**：作者：microsoft | 点赞：336 | 下载：4,805
    *   **一句话说明**：微软推出的超长上下文模型，4B参数专注于高效处理海量文本，代表了在有限资源下扩展上下文窗口的技术探索。
*   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**：作者：Qwen | 点赞：142 | 下载：223
    *   **一句话说明**：阿里Qwen团队为智能体（Agent）场景专门设计的MoE模型，代表了语言模型从“对话”向“自主执行”任务的演进方向。

**🎨 多模态与生成（图像、视频、音频、文本到X）**

*   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：作者：baidu | 点赞：731 | 下载：45,687
    *   **一句话说明**：百度推出的全能OCR模型，支持多种语言和复杂场景的文字识别，成为文档数字化领域的热门工具。
*   **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**：作者：MiniMaxAI | 点赞：1,228 | 下载：143,093
    *   **一句话说明**：MiniMax的最新视觉语言模型，在图像理解与多模态对话任务上表现突出，是闭源API之外的有力开源竞争者。
*   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**：作者：krea | 点赞：187 | 下载：878
    *   **一句话说明**：专注于图像生成速度的Turbo版本模型，专为追求实时或近实时生成的创意工具和应用而设计。
*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**：作者：nvidia | 点赞：2,346 | 下载：359,498
    *   **一句话说明**：英伟达推出的通用目标定位模型，可通过文本或图像指代在任意图片中定位物体，为机器人、自动驾驶等领域提供基础能力。
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**：作者：nvidia | 点赞：678 | 下载：47,208
    *   **一句话说明**：英伟达专为流式语音识别设计的小型高效模型，0.6B参数即可实现低延迟的实时语音转文字。
*   **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**：作者：google | 点赞：1,060 | 下载：1,036,328
    *   **一句话说明**：Google将Diffusion模型与Gemma架构结合，实现了“文本到图像”的指令跟随生成，是生成式AI从LLM向扩散模型融合的标志。
*   **[owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)**：作者：owensong | 点赞：193 | 下载：0
    *   **一句话说明**：一款超小型的文本转语音（TTS）模型，旨在将语音合成能力部署到边缘设备或资源受限的环境中。

**🔧 专用模型（代码、数学、医疗、嵌入）**

*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**：作者：moonshotai | 点赞：984 | 下载：480,013
    *   **一句话说明**：月之暗面推出的专用代码模型，在编程、代码补全和逻辑推理方面进行了深度优化，是开发者社区的高频下载模型。
*   **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LiquidAI/LFM2.5-Embedding-350M)**：作者：LiquidAI | 点赞：119 | 下载：11,471
    *   **一句话说明**：Liquid AI的下一代嵌入模型，用于将文本转换为高质量语义向量，是构建RAG（检索增强生成）系统的核心组件。
*   **[poolside/Laguna-M.1](https://huggingface.co/poolside/Laguna-M.1)**：作者：poolside | 点赞：95 | 下载：2,913
    *   **一句话说明**：专门为软件工程全流程（从需求到部署）设计的生成模型，代表了AI编程助手从“补全代码”向“完成项目”的进阶。

**📦 微调与量化（社区微调、GGUF、AWQ）**

*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**：作者：yuxinlu1 | 点赞：2,296 | 下载：483,139
    *   **一句话说明**：基于Google Gemma 4模型的高质量编码微调版并转为GGUF格式，极大地降低了本地部署强大代码模型的门槛。
*   **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**：作者：yuxinlu1 | 点赞：530 | 下载：138,704
    *   **一句话说明**：同一作者对Gemma 4进行的Agent能力微调，聚焦于终端操作和工具调用，显示出社区对“Agent化”模型的追捧。
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**：作者：HauhauCS | 点赞：2,205 | 下载：3,769,369
    *   **一句话说明**：基于最新Qwen3.6的社区“无审查”微调版本，具备多模态能力，其惊人的下载量反映了社区对开放性和激进风格模型的需求。
*   **[huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated)**：作者：huihui-ai | 点赞：124 | 下载：4,402
    *   **一句话说明**：使用“abliteration”（消除审查）技术对Gemma 4编码模型进行二次微调，代表了社区对模型安全性边界的主动探索。

#### **生态信号**

*   **模型家族势头**：**MoE** 架构已成绝对主流，从DeepSeek、GLM到Qwen和Google，几乎所有头部模型均采用了混合专家设计。此外，**Google Gemma 4** 系列（特别是其高效的12B尺寸）形成了一个小型生态，吸引了大量社区微调（如yuxinlu1、huihui-ai），成为本周最活跃的模型基底。
*   **开源 vs 闭源**：**DeepSeek-V4-Pro** 和 **GLM-5.2** 的崛起表明，顶级开源模型的能力正在迅速追赶并可能在某些维度超越闭源模型。强大的开源权重激发了社区进行二次开发、量化与特定场景优化的热情，形成良性循环。
*   **量化与微调热区**：**GGUF** 量化格式统治了本地部署市场，几乎所有热门模型都迅速出现了其GGUF版本。社区微调的重点已从“通用对话”转向 **编码（Coder）** 和 **智能体（Agentic）** 能力，这表明开发者正试图将大模型从“聊天机器人”转变为“数字工人”。

#### **值得探索**

1.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**：这是一个改变游戏规则的多模态基础模型。其“文本指代定位”的能力为机器人抓取、图像编辑、UI自动化等下游任务提供了精确且通用的视觉理解接口，值得深入研究其在具体应用中的潜力。
2.  **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**：它标志着“语言模型”与“扩散模型”的第一次深度融合。这种“融合”架构可能催生出能同时进行复杂推理和像素级生成的新一代AI，是理解未来AI架构演进的绝佳样本。
3.  **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**：对于任何想构建本地化、自主行动的AI Agent的开发者，这个模型是不可错过的起点。它在Gemma 4基础上针对“工具使用”和“终端操作”进行了优化，代表了目前社区在“Agent化”方向上最前沿的实践成果。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*