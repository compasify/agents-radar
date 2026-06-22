# Hugging Face 热门模型日报 2026-06-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-22 00:30 UTC

---

好的，作为AI模型生态分析师，这是为您生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026年6月22日**

#### **今日速览**

本周Hugging Face生态呈现出两大核心趋势：**顶级模型的MoE加速版**与**专用化Coder模型**竞争白热化。DeepSeek-V4-Pro以近5000点赞领跑，彰显其在纯文本领域的统治力。同时，以`Gemma-4`和`Qwen3.6`为基础的大量社区量化、微调版（特别是GGUF格式）蜂拥而至，显示出开源社区对高效部署和特定场景优化的强烈需求。多模态模型方面，NVIDIA的`LocateAnything-3B`与Google的`DiffusionGemma`成为亮点，前者聚焦精准定位，后者探索图像生成。

---

#### **热门模型**

##### 🧠 语言模型 (LLM、对话模型、指令微调)

*   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    *   作者: deepseek-ai | 点赞: 4,999 | 下载: 2,611,991
    *   一句话: DeepSeek的第四代Pro版本，凭借顶尖的性能和对话能力，成为本周最受关注的通用大语言模型。
*   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    *   作者: yuxinlu1 | 点赞: 2,081 | 下载: 358,677
    *   一句话: 基于Google Gemma-4-12B的社区微调Coder版，通过GGUF量化后下载量极高，说明开发者对本地高效编程助手有巨大需求。
*   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    *   作者: zai-org | 点赞: 1,813 | 下载: 27,413
    *   一句话: 智谱GLM第五代模型的最新迭代版本，是继DeepSeek之后另一个备受关注的高性能中文和英文通用底座模型。
*   **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
    *   作者: google | 点赞: 1,126 | 下载: 1,815,370
    *   一句话: Google官方发布的Gemma-4指令微调版本，作为“any-to-any”多模态原生模型，为社区提供了强大的基础架构。
*   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    *   作者: HauhauCS | 点赞: 2,078 | 下载: 3,966,691
    *   一句话: 基于Qwen3.6 MoE模型的社区“无审查”激进版，其巨大的下载量反映了部分用户对内容限制较少、风格更直接的模型有着极高偏好。
*   **[nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)**
    *   作者: nex-agi | 点赞: 342 | 下载: 7,872
    *   一句话: 基于Qwen3.5 MoE架构的进阶版模型，旨在通过多模态能力在对话和复杂推理任务中表现更出色。

##### 🎨 多模态与生成 (图像、视频、音频、文本到X)

*   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    *   作者: nvidia | 点赞: 2,240 | 下载: 241,845
    *   一句话: NVIDIA出品的精准定位模型，能够在图像中定位任何指定物体，在机器人、自动驾驶和图像编辑领域极具潜力。
*   **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
    *   作者: google | 点赞: 1,034 | 下载: 762,861
    *   一句话: Google将Diffusion与Gemma模型结合的产物，MoE架构使其在图像理解与对话之间取得了高效平衡，下载量极高。
*   **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
    *   作者: MiniMaxAI | 点赞: 1,177 | 下载: 104,076
    *   一句话: MiniMax的最新多模态模型，在图像、文本和视频理解任务上表现出色，是其M3系列的核心版本。
*   **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
    *   作者: moonshotai | 点赞: 945 | 下载: 363,308
    *   一句话: 月之暗面推出的Kimi代码专用版，采用压缩张量技术，专为多模态代码理解和生成场景优化。
*   **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
    *   作者: bosonai | 点赞: 505 | 下载: 76,120
    *   一句话: 基于Qwen架构的4B参数文本转语音模型，标志着高保真语音合成正与大语言模型深度结合。
*   **[ostris/ideogram_4_turbotime_lora](https://huggingface.co/ostris/ideogram_4_turbotime_lora)**
    *   作者: ostris | 点赞: 89 | 下载: 2,452
    *   一句话: 为Ideogram 4模型设计的LoRA适配器，旨在通过微调实现更快速、更具动感的图像生成效果。

##### 🔧 专用模型 (代码、数学、医疗、嵌入)

*   **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
    *   作者: yuxinlu1 | 点赞: 271 | 下载: 21,730
    *   一句话: 同样是Gemma-4的微调版，但更侧重于Agent能力和终端交互的代码模型，代表了对更复杂“智能体”编程场景的探索。
*   **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
    *   作者: CohereLabs | 点赞: 474 | 下载: 19,551
    *   一句话: Cohere推出的轻量级代码专用模型，采用MoE架构，旨在以较小参数量提供强大的代码理解和生成能力。
*   **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)**
    *   作者: LiquidAI | 点赞: 90 | 下载: 7,726
    *   一句话: Liquid AI发布的专用嵌入向量模型，关注开发生态中的文本语义表示与检索（RAG）应用。
*   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    *   作者: nvidia | 点赞: 611 | 下载: 27,275
    *   一句话: NVIDIA推出的超轻量级语音识别模型，专门为流式、低延迟的ASR场景设计，适用于边缘设备。

##### 📦 微调与量化 (社区微调、GGUF、AWQ)

*   **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
    *   作者: unsloth | 点赞: 224 | 下载: 32,260
    *   一句话: Unsloth团队制作的GLM-5.2量化版，极大降低了该高端模型的部署门槛，方便开发者在消费级硬件上运行。
*   **[zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8)**
    *   作者: zai-org | 点赞: 120 | 下载: 217,361
    *   一句话: 官方提供的FP8压缩版本的GLM-5.2，在几乎不损失精度的情况下显著减少显存占用，是高效部署的首选。
*   **[Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF)**
    *   作者: Jackrong | 点赞: 275 | 下载: 190,993
    *   一句话: 将Qwen3.6多模态能力与Coder、GGUF结合，代表了社区将“视觉”与“代码”能力融合并本地化的最新尝试。
*   **[unsloth/Kimi-K2.7-Code-GGUF](https://huggingface.co/unsloth/Kimi-K2.7-Code-GGUF)**
    *   作者: unsloth | 点赞: 150 | 下载: 42,837
    *   一句话: 将Kimi代码模型快速转化为GGUF格式，使得“压缩版”的Kimi编程助手也能够通过工具如`llama.cpp`在本地运行。

---

#### **生态信号**

*   **MoE架构全面爆发**：本周前十的热门模型中，MoE（混合专家）架构的模型（如Qwen3.6, GLM-5.2, DiffusionGemma）占据主导。这表明业界普遍认为，在保持高性能的同时，通过MoE降低实际计算成本是当前大模型发展的主流路径。
*   **开源生态的“军备竞赛”**：从DeepSeek-V4到GLM-5.2，再到Gemma-4，顶级模型的开源速度与迭代频率明显加快。闭源模型（如Kimi）也正通过开放特定版本或允许社区量化来争夺开发者生态。
*   **“量化-微调”循环成为常态**：`yuxinlu1`、`HauhauCS`等社区创作者已经形成了一套工作流：先对基础模型进行领域微调（如Coder, Agentic），然后进行GGUF量化。这种“再创造”使得模型更具实用性，是驱动下载量的核心引擎。`Unsloth`团队则扮演了“量化加速器”的角色，快速将新模型转化为可部署格式。

---

#### **值得探索**

1.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: 值得所有从事计算机视觉和机器人研究的开发者尝试。它以独特的“定位任何物体”为切入点，避开了与通用模型的面面俱到竞争，在“指哪看哪”的垂直场景中做到了极致，展现了专用模型在解决实际问题时的强大潜力。
2.  **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**: 尽管参数只有3B，但它在数学推理任务上获得了显著关注。这个模型代表了“小模型、专用化”的趋势，对于资源受限但需要数学能力的场景（如教育工具或边缘计算）具有很高的研究价值。
3.  **[zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8)**: 对于关注模型部署和效率的工程师，这是本周的必读物。GLM-5.2在中文领域的地位无需多言，而其官方提供的、高质量的FP8量化版本，为如何在生产环境中实现“性价比最高”的推理提供了绝佳示例。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*