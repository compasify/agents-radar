# Hugging Face 热门模型日报 2026-06-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-16 00:36 UTC

---

好的，作为AI模型生态分析师，以下是基于2026年6月16日数据生成的《Hugging Face 热门模型日报》。

---

### 《Hugging Face 热门模型日报》 - 2026-06-16

#### 1. 今日速览

今日Hugging Face生态呈现出三足鼎立之势：**多模态模型**继续统治榜单，尤其是Qwen3.6系列的社区微调和量化版本在下载量上表现惊人；**旗舰级模型**如DeepSeek-V4-Pro和Google的DiffusionGemma在点赞和下载量上均遥遥领先，确立了顶级地位；与此同时，**“无审查”（Uncensored）** 和**“缝合怪”（融合多个模型特征）** 社区模型热度不减，显示出开发者对探索模型能力边界的强烈渴望。量化模型（GGUF）依然是社区传播和本地部署的主流选择。

#### 2. 热门模型

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **deepseek-ai/DeepSeek-V4-Pro** ([链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro))
  - 作者: deepseek-ai | 点赞: 4,862 | 下载: 2,934,763
  - 一句话说明：本周绝对王者，DeepSeek最新旗舰级文本生成模型，以其强大的对话和推理能力登顶。
- **google/gemma-4-12B-it** ([链接](https://huggingface.co/google/gemma-4-12B-it))
  - 作者: google | 点赞: 1,029 | 下载: 1,160,435
  - 一句话说明：Google的Gemma 4系列指令微调版本，集成了多模态能力，生态影响力巨大。
- **nex-agi/Nex-N2-Pro** ([链接](https://huggingface.co/nex-agi/Nex-N2-Pro))
  - 作者: nex-agi | 点赞: 287 | 下载: 3,681
  - 一句话说明：基于Qwen3.5 MoE架构的高端文本生成模型，代表了社区对MoE路线的持续探索。
- **CohereLabs/North-Mini-Code-1.0** ([链接](https://huggingface.co/CohereLabs/North-Mini-Code-1.0))
  - 作者: CohereLabs | 点赞: 388 | 下载: 11,145
  - 一句话说明：Cohere推出的代码生成专用MoE小模型，在轻量级代码助手领域占据一席之地。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** ([链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive))
  - 作者: HauhauCS | 点赞: 1,844 | 下载: 2,697,882
  - 一句话说明：Qwen3.6的“无审查”社区微调版，尽管是GGUF格式，但下载量惊人，反映了对开放对话边界的热切需求。
- **nvidia/LocateAnything-3B** ([链接](https://huggingface.co/nvidia/LocateAnything-3B))
  - 作者: nvidia | 点赞: 2,054 | 下载: 86,968
  - 一句话说明：英伟达发布的目标定位与特征提取模型，在多模态理解细分场景中极具实用价值。
- **ideogram-ai/ideogram-4-fp8** ([链接](https://huggingface.co/ideogram-ai/ideogram-4-fp8))
  - 作者: ideogram-ai | 点赞: 546 | 下载: 10,748
  - 一句话说明：Ideogram 4代图像生成模型的FP8量化版，在保证质量的同时，极大降低了部署门槛。
- **bosonai/higgs-audio-v3-tts-4b** ([链接](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b))
  - 作者: bosonai | 点赞: 445 | 下载: 38,429
  - 一句话说明：基于Qwen3的多模态语音合成模型，实现了语音与文本、图像的统一建模。
- **zai-org/SCAIL-2** ([链接](https://huggingface.co/zai-org/SCAIL-2))
  - 作者: zai-org | 点赞: 188 | 下载: 0
  - 一句话说明：专注于角色动画的姿势驱动图像生成视频模型，虽然下载量极少，但其方向对创意工具开发很有启发。
- **prefeitura-rio/Rio-3.5-Open-397B** ([链接](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B))
  - 作者: prefeitura-rio | 点赞: 301 | 下载: 188,723
  - 一句话说明：一个基于Qwen3.5 MoE的巨型多模态模型(397B)，由里约市政府发布，展示了大型机构的开源参与。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

- **moonshotai/Kimi-K2.7-Code** ([链接](https://huggingface.co/moonshotai/Kimi-K2.7-Code))
  - 作者: moonshotai | 点赞: 740 | 下载: 56,750
  - 一句话说明：月之暗面发布的代码专用多模态模型，集成了特征提取和压缩技术，是Kimi生态的技术代表。
- **nvidia/nemotron-3.5-asr-streaming-0.6b** ([链接](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b))
  - 作者: nvidia | 点赞: 422 | 下载: 5,200
  - 一句话说明：英伟达推出的流式语音识别模型，主打低延迟和缓存感知，适合实时通话等场景。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **unsloth/diffusiongemma-26B-A4B-it-GGUF** ([链接](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF))
  - 作者: unsloth | 点赞: 275 | 下载: 107,243
  - 一句话说明：DiffusionGemma的GGUF量化版，使顶级多模态模型得以在消费级硬件上运行。
- **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF** ([链接](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF))
  - 作者: yuxinlu1 | 点赞: 573 | 下载: 20,207
  - 一句话说明：Gemma 4的代码微调版GGUF模型，通过技术组合（Fable, Composer）提升了代码和推理性能。
- **DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF** ([链接](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF))
  - 作者: DavidAU | 点赞: 354 | 下载: 369,526
  - 一句话说明：一个极具代表性的“缝合”模型，融合了多个知名模型的特征（如Claude、Qwen），虽然名字冗长，但下载量极高，代表了社区对“集大成者”的追求。
- **Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF** ([链接](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF))
  - 作者: Jackrong | 点赞: 201 | 下载: 62,469
  - 一句话说明：Qwen3.6的另一个主要社区微调路线(Qwopus3.6)的代码版GGUF模型。
- **OBLITERATUS/Gemma-4-12B-OBLITERATED** ([链接](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED))
  - 作者: OBLITERATUS | 点赞: 324 | 下载: 70,732
  - 一句话说明：一个极端化的社区微调模型，旨在释放Gemma 4的未过滤能力，名字和内容均很大胆。

#### 3. 生态信号

- **模型家族势头**：**Qwen3.6** 家族无疑是本周期社区活动的最大赢家，围绕它产生了大量的MoE变体、无审查版本和量化模型。**Gemma 4** 和 **DeepSeek-V4** 则是官方开源力推的旗舰，生态地位稳固。MoE架构（专家混合模型）成为高效扩展能力的标准方案。
- **开源 vs 闭源**：榜单中绝大多数是开源或开放权重模型，显示了生态的蓬勃活力。社区微调（如DavidAU的缝合模型）和量化（如Unsloth的GGUF系列）成为连接官方开源与终端用户的关键桥梁。
- **量化与微调活动**：**GGUF格式**的模型数量巨大，成为事实上的行业标准，满足了本地化部署的刚性需求。“无审查”和“缝合”成为社区微调的两大潮流，前者追求模型能力的完全释放，后者则试图在单一模型中融合多个顶尖模型的特长。

#### 4. 值得探索

1.  **DeepSeek-V4-Pro**: **必须研究的模型**。作为本周点赞和下载的冠军，它代表了当前开源文本生成领域的最强音。无论是技术架构还是实际效果，都值得深入分析。
2.  **HauhauCS/Qwen3.6-35B-A3B-Uncensored...**: **社区情绪的镜子**。这个模型揭示了当前社区对“可用性”和“自由度”的极致追求。虽然名字激进，但它背后的技术实现（在Qwen3.6上做微调）和惊人的下载量，是一个重要的生态信号。
3.  **nvidia/LocateAnything-3B**: **小而美的实用模型**。在一个追求大模型的时代，英伟达推出的这个3B模型专注于特定任务（定位），并取得了极高的认可度。它证明了精巧的专用模型仍有巨大市场，是探索多模态应用落地的极佳起点。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*