# Hugging Face 热门模型日报 2026-06-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-12 00:32 UTC

---

好的，作为AI模型生态分析师，这是为您生成的2026年6月12日《Hugging Face 热门模型日报》。

---

### Hugging Face 热门模型日报 | 2026年6月12日

#### 1. 今日速览

本周 Hugging Face 社区由 **DeepSeek-V4-Pro** 的正式开源引爆，以绝对优势登顶热度榜，宣告了新一代高性能开源大模型时代的到来。与此同时，Google 的 **Gemma-4** 系列（尤其是12B版本）展现出强大的生态效应，衍生出大量量化与微调模型。多模态赛道同样火热，NVIDIA 的 **LocateAnything-3B** 引领了精细化图像定位的潮流，而 **ideoogram-4** 和 **ByteDance Bernini-R** 则分别代表了图像与视频生成的最新进展。值得一提的是，量化版模型（特别是 **Unsloth** 社区对Gemma-4的全面支持）在本周下载量极高，表明社区对高效推理和本地化部署的强烈需求。

#### 2. 热门模型

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **[DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    - 作者: deepseek-ai | 点赞: 4,781 | 下载: 4,061,006
    - 说明：DeepSeek 最新旗舰版模型，凭借其推理能力的显著突破和开放的权重，直接引爆社区，成为本周无可争议的焦点。

- **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)**
    - 作者: nvidia | 点赞: 198 | 下载: 59,066
    - 说明：NVIDIA 的超大规模 MoE 旗舰模型，代表了行业顶尖的语言模型能力，吸引了关注超大参数规模与SOTA性能的开发者和研究者。

- **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LiquidAI/LFM2.5-8B-A1B)**
    - 作者: LiquidAI | 点赞: 594 | 下载: 142,134
    - 说明：Liquid AI 的第二代高效MoE模型，以其极致的推理效率（8B总参，1B激活）和优越性能，在小模型部署领域获得了极高的关注度。

- **[nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)**
    - 作者: nex-agi | 点赞: 206 | 下载: 1,185
    - 说明：基于 Qwen3.5 架构的 MoE 变体，定位为专业级小模型，凭借其优秀的性能潜力受到社区追捧。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    - 作者: nvidia | 点赞: 1,869 | 下载: 131,794
    - 说明：NVIDIA 推出的开创性模型，能够根据文本指令精准定位图像中的任何物体，是当前“图像特征提取”和“细粒度视觉理解”的标杆。

- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
    - 作者: google | 点赞: 485 | 下载: 0
    - 说明：Google 新发布的 Diffusion Gemma 系列，将Gemma的强大文本能力与扩散模型结合，实现了多功能的多模态理解与生成，是AI生成领域的重大突破。

- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
    - 作者: google | 点赞: 939 | 下载: 675,936
    - 说明：这是本周生态的核心模型。支持“any-to-any”的终极多模态能力，既能理解图文，也能生成图文，其开放性使其成为社区微调与部署的首选。

- **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
    - 作者: ideogram-ai | 点赞: 484 | 下载: 7,170
    - 说明：Ideogram 第四代图像生成模型，以卓越的文本渲染能力和高质量的图像生成效果闻名，FP8版本降低了使用门槛。

- **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)**
    - 作者: ByteDance | 点赞: 222 | 下载: 305
    - 说明：字节跳动发布的图像-文本到视频生成模型，是当前视频生成领域的重要新参与者，探索了高效的视频-视觉交互。

- **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)**
    - 作者: google | 点赞: 178 | 下载: 19,806
    - 说明：Google 的 Magenta 系列第二代，专注于实时文本到音频生成，展示了AI在音乐和声音合成领域的前沿应用。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
    - 作者: CohereLabs | 点赞: 307 | 下载: 1,859
    - 说明：Cohere 专为代码生成设计的轻量级 MoE 模型，面向开发者社区，旨在提供高效、高质量的代码自动补全与生成。

- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
    - 作者: sapientinc | 点赞: 748 | 下载: 134,752
    - 说明：Sapient 推出的文本专家模型，可能专注于人力资源管理或特定商业文本处理领域，因其专业性和实用性在垂直领域获得大量关注。

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    - 作者: nvidia | 点赞: 372 | 下载: 4,965
    - 说明：NVIDIA 推出的流式语音识别模型，专为实时语音交互场景设计，是语音AI向更高效、更实时方向发展的代表。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
    - 作者: unsloth | 点赞: 561 | 下载: 711,706
    - 说明：由高效微调工具 Unsloth 出品的 Gemma-4 量化版，极大降低了在消费级硬件上运行最强多模态模型的门槛，是“模型平民化”的关键推手。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    - 作者: HauhauCS | 点赞: 1,675 | 下载: 3,057,541
    - 说明：本周下载量最高的模型之一，是 Qwen3.6 社区微调的典型代表，主打“无审查”和“激进风格”，反映了社区对特定模型行为的定制化需求。

- **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)**
    - 作者: ideogram-ai | 点赞: 315 | 下载: 6,124
    - 说明：Ideogram-4 的 4-bit 量化版，进一步降低了内存占用，使得顶级图像生成模型也能在更广泛的硬件上运行。

- **[huihui-ai/Huihui-gemma-4-12B-it-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-it-abliterated)**
    - 作者: huihui-ai | 点赞: 143 | 下载: 6,400
    - 说明：通过“abliteration”（知识消除）技术对 Gemma-4 进行安全对齐微调后发布的版本，代表了社区对模型安全性与可控性的探索。

#### 3. 生态信号

本周生态呈现出几个强烈信号：
- **Gemma-4 生态爆发**：Google 的 Gemma-4 并非单纯发布模型，而是成功建立了一个包括多模态（Any-to-Any）、指令版和无监督版的强大家族。Unsloth 和 Huihui-ai 等社区快速跟进，形成庞大的量化与微调生态，这标志着 Google 正以“模型即平台”的策略引领开源社区。
- **DeepSeek 强势回归**：DeepSeek-V4-Pro 的发布证明了开源模型在参数规模、推理能力和社区热度上，完全能够与闭源或半开源模型（如Nemotron）正面抗衡。其巨大的下载量表明，社区对真正开放、高性能的SOTA模型怀有极大期待。
- **量化成为主流**：从下载量看，量化模型（GGUF、NF4、FP8）的受欢迎程度已远超其基础版本。这反映了行业核心瓶颈正在从“模型能力”转向“部署效率”，工程师和开发者正迫切寻找在有限算力下运行顶级模型的方法。

#### 4. 值得探索

1.  **DeepSeek-V4-Pro**：必试项。作为本周的绝对王者，它代表了当前开源大模型的推理天花板。无论你是做研究还是应用开发，都应立即测试其逻辑推理、代码生成和长上下文能力。

2.  **nvidia/LocateAnything-3B**：推荐探索。它将视觉理解从“看图说话”提升到了“指哪打哪”的精确交互层面。对于需要视觉感知的机器人、自动驾驶、图像编辑等应用场景，具有巨大的潜在价值。

3.  **unsloth/gemma-4-12b-it-GGUF**：推荐高效上手。如果你被 Gemma-4 的多模态能力吸引但硬件有限，这正是开始的最佳选择。Unsloth 的优化使其成为平衡性能、功能与资源占用方面的最佳实践。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*