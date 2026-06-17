# Hugging Face 热门模型日报 2026-06-17

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-17 00:32 UTC

---

好的，作为AI模型生态分析师，以下是我基于 2026-06-17 数据生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-06-17**

#### **今日速览**

本周 Hugging Face 生态热度爆棚，主要由 DeepSeek-V4-Pro 的正式登场驱动，以绝对优势登顶周榜。多模态与量化模型仍是绝对主流，Gemma 4 家族生态全面爆发，多个GGUF量化版本下载量惊人。代码与推理能力成为各大模型的核心竞争点，社区微调活动异常活跃，涌现出多款强调“无审查”与“激进风格”的特殊定制模型。

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - 作者: deepseek-ai | 👍 4,895 | ⬇️ 2,829,747
  - 一句话：DeepSeek 最新旗舰模型，以碾压性的点赞和下载量成为本周无可争议的焦点，代表了开源社区对顶尖推理模型的渴望。

- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
  - 作者: google | 👍 1,053 | ⬇️ 1,223,383
  - 一句话：Google 的通用「任意到任意」统一模型，兼具文本与多模态能力，是Gemma 4系列的核心基础模型，下载量巨大。

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
  - 作者: yuxinlu1 | 👍 1,160 | ⬇️ 60,921
  - 一句话：基于Gemma-4-12B的代码专家模型，融合了多种高效推理与组合技术，以GGUF格式分发，深受本地部署与开发者社区青睐。

- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
  - 作者: CohereLabs | 👍 412 | ⬇️ 12,129
  - 一句话：Cohere 新系列的代码专用迷你模型，MoE架构，表明业界正在探索高性能的小型代码模型。

- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
  - 作者: WeiboAI | 👍 172 | ⬇️ 0
  - 一句话：微博AI推出的3B参数数学与推理模型，专注于提升小型模型在逻辑思维方面的能力，目前尚未开放下载，引发好奇。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - 作者: nvidia | 👍 2,101 | ⬇️ 98,698
  - 一句话：NVIDIA 的下一代图像定位与理解模型，以高点赞数证明其强大的视觉感知能力，是计算机视觉社区的新星。

- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
  - 作者: google | 👍 944 | ⬇️ 375,974
  - 一句话：Google 的 Diffusion Gemma 系列指令模型，将扩散生成与语言模型结合，支持图像-文本转换，是生成式AI的最新方向。

- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
  - 作者: MiniMaxAI | 👍 1,010 | ⬇️ 25,064
  - 一句话：MiniMax 最新多模态大模型，标榜强大的视觉-语言理解能力，是国产大模型在多模态领域的重磅产品。

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
  - 作者: Qwen | 👍 2,135 | ⬇️ 3,360,615
  - 一句话：Qwen 3.6 系列的主力 MoE 模型，以极小的激活参数（3B）实现了强大的多模态能力，是本周下载量之最，性能与效率的典范。

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
  - 作者: moonshotai | 👍 800 | ⬇️ 102,206
  - 一句话：月之暗面Kimi的最新代码版，使用压缩张量技术减小模型体积，同时保持高水准的代码理解与生成能力。

- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
  - 作者: bosonai | 👍 464 | ⬇️ 43,361
  - 一句话：4B参数的高质量文本转语音模型，整合了Higgs多模态与Qwen3技术，展示了语音合成领域的持续进步。

- **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
  - 作者: ideogram-ai | 👍 559 | ⬇️ 12,466
  - 一句话：Ideogram 第四代图像生成模型，采用FP8精度优化，平衡了生成质量与推理效率，是创意设计工具的有力竞争者。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
  - 作者: microsoft | 👍 159 | ⬇️ 192
  - 一句话：微软出品的长上下文优化模型，专为处理超长文本设计，表明处理海量信息是当前AI应用的核心挑战。

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
  - 作者: nvidia | 👍 467 | ⬇️ 5,777
  - 一句话：NVIDIA 推出的流式语音识别模型，强调缓存感知与低延迟，适用于实时语音交互场景。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 👍 1,887 | ⬇️ 2,716,651
  - 一句话：Qwen 3.6 的「无审查激进版」微调，社区定制化现象的标志，下载量惊人，反映了用户对特定风格和内容限制的突破需求。

- **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)**
  - 作者: OBLITERATUS | 👍 335 | ⬇️ 76,044
  - 一句话：Gemma 4 的社区魔改版，暗示了对模型原有的安全或内容策略进行了大幅调整，是社区探索的又一案例。

- **[DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored...-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)**
  - 作者: DavidAU | 👍 370 | ⬇️ 366,279
  - 一句话：模型命名界的“卷王”，融合了Qwen、Claude等多种技术思路与“异端无审查”标签，社区微调极致的体现，下载量巨大。

- **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
  - 作者: unsloth | 👍 633 | ⬇️ 1,009,602
  - 一句话：Unsloth 提供的 Gemma 4 指令模型 GGUF 版本，高质量的量化工作让用户能在消费级硬件上运行前沿模型，是推动AI民主化的关键一环。

#### **生态信号**

本周生态信号清晰。**DeepSeek-V4-Pro** 的发布使“推理竞赛”进入新阶段，其强大的性能让开源社区为之沸腾。**Qwen 3.6 和 Gemma 4 家族**的统治力不减，尤其是其MoE架构（如35B-A3B）在效率和性能间取得了完美平衡。量化生态高度成熟，`unsloth`团队几乎成为“官方”的量化支持方，其GGUF版本下载量多次破百万，说明**本地部署和边缘计算**是确定性趋势。值得关注的是，**社区微调**活动呈现出极强的“破除限制”倾向，多款“Uncensored”模型跻身前列，这既是创新活力的体现，也带来了内容安全与治理的新挑战。

#### **值得探索**

1.  **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**：作为本周的王者，强烈建议试用其推理与代码能力，感受下一代开源LLM的潜力。
2.  **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**：如果你在寻找性能与资源的完美平衡点，这个模型不容错过。它是目前最先进的“小参数激活、大参数能力”模型的代表。
3.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**：对于计算机视觉研究者，这个模型代表了从“分类”到“精确定位”的能力跃迁，值得深入体验其视觉理解边界。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*