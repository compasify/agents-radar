# Hugging Face 热门模型日报 2026-06-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-18 00:33 UTC

---

好的，作为AI模型生态分析师，以下是为您生成的《Hugging Face 热门模型日报》。

---

### 📈 Hugging Face 热门模型日报 (2026-06-18)

#### 1. 今日速览

本周 Hugging Face 生态呈现出 **MoE（混合专家）与多模态模型全面主导** 的态势。`Qwen3.6-35B-A3B` 凭借其极致的稀疏激活效率（仅3B活跃参数），以压倒性的下载量成为社区焦点。**多模态能力**已成为顶级模型标配，`google/diffusiongemma` 系列和 `MiniMax-M3` 等模型在图像与文本理解任务上表现抢眼。同时，社区微调活动异常活跃，基于 `Qwen3.6` 和 `Gemma-4` 的各种定制版（如 uncensored、代码优化）层出不穷，且 GGUF 量化格式的下载量持续高企，反映出个人开发者对高效本地部署的强烈需求。

#### 2. 热门模型分类盘点

##### 🧠 语言模型 (LLM、对话模型、指令微调)

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  - **作者**: deepseek-ai | **点赞**: 4,924 | **下载**: 2,804,646
  - **一句话**: 登顶本周点赞榜的顶尖对话模型，代表了 DeepSeek 第四代技术的最高水平，多轮对话与指令遵循能力极强。

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
  - **作者**: yuxinlu1 | **点赞**: 1,469 | **下载**: 146,784
  - **一句话**: 基于 Gemma-4 的社区微调代码模型，通过精细调优大幅增强了代码生成与逻辑推理能力，并以 GGUF 格式方便本地使用。

- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
  - **作者**: google | **点赞**: 1,068 | **下载**: 922,952
  - **一句话**: Google 官方指令微调版本，强大的“任意到任意”任务处理能力使其成为全能型研究基座。

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - **作者**: zai-org | **点赞**: 1,008 | **下载**: 666
  - **一句话**: 智谱 AI 团队的最新对话模型，采用 MoE 架构，下载量虽不高但获得了社区极高关注，是中国大模型进步的重要信号。

- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
  - **作者**: microsoft | **点赞**: 185 | **下载**: 537
  - **一句话**: 微软推出的超长上下文小模型，专门优化了长文本处理和检索效率，为 Agent 应用提供新思路。

##### 🎨 多模态与生成 (图像、视频、音频、文本到X)

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**
  - **作者**: Qwen | **点赞**: 2,157 | **下载**: 3,683,883
  - **一句话**: **本周下载量之王**！35B总参数量中仅激活3B，在保持高性能的同时实现了惊人的推理速度，是 MoE 路线的典范。

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  - **作者**: nvidia | **点赞**: 2,138 | **下载**: 130,389
  - **一句话**: NVIDIA 推出的通用视觉定位模型，能根据文本描述精确定位图像中任意物体，在机器人、自动驾驶领域潜力巨大。

- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
  - **作者**: MiniMaxAI | **点赞**: 1,061 | **下载**: 42,198
  - **一句话**: MiniMax 的最强多模态模型，擅长图像与文本联合理解，在复杂场景问答和文档分析中表现优异。

- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
  - **作者**: google | **点赞**: 976 | **下载**: 460,173
  - **一句话**: Google 将扩散模型与 LLM 结合的最新尝试，支持图生文对话，代表了多模态模型的新范式。

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
  - **作者**: moonshotai | **点赞**: 844 | **下载**: 172,727
  - **一句话**: 月之暗面推出的代码多模态模型，能够结合图像、代码进行理解与生成，是 AI 编程视觉化的探索。

- **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**
  - **作者**: ideogram-ai | **点赞**: 568 | **下载**: 15,477
  - **一句话**: 顶尖文生图模型 Ideogram 的第四代，FP8 量化版在降低显存占用的同时保持了极高的图片生成质量。

- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
  - **作者**: bosonai | **点赞**: 478 | **下载**: 40,812
  - **一句话**: 基于 Qwen3 的 4B 参数语音合成模型，生声音质自然，正推动“文本→语音”高保真生成的普及。

##### 🔧 专用模型 (代码、数学、医疗、嵌入)

- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
  - **作者**: WeiboAI | **点赞**: 308 | **下载**: 1,950
  - **一句话**: 专注于数学推理的小模型，3B参数即可展现不俗的数学能力，是资源受限场景下的优质选择。

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
  - **作者**: nvidia | **点赞**: 519 | **下载**: 7,195
  - **一句话**: NVIDIA 推出的超轻量流式语音识别模型，专为实时转录场景设计，延迟极低。

- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**
  - **作者**: CohereLabs | **点赞**: 420 | **下载**: 13,449
  - **一句话**: Cohere 的代码小模型，采用 MoE 架构，展现了企业级 AI 公司在代码生成领域的深入布局。

##### 📦 微调与量化 (社区微调、GGUF、AWQ)

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - **作者**: HauhauCS | **点赞**: 1,933 | **下载**: 2,876,624
  - **一句话**: 基于 Qwen3.6 的“去审查”激进版本，下载量极大，反映了社区对开放探索和强目标导向模型的需求。

- **[DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-...-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)**
  - **作者**: DavidAU | **点赞**: 382 | **下载**: 427,359
  - **一句话**: 一个风格极为激进的“缝合怪”式社区微调模型，融合多种特性，体现了社区极致的实验精神。

- **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**
  - **作者**: unsloth | **点赞**: 645 | **下载**: 579,224
  - **一句话**: unsloth 优化的官方 Gemma-4 GGUF 版本，下载量极高，是个人用户本地部署顶级模型的首选。

- **[unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)**
  - **作者**: unsloth | **点赞**: 298 | **下载**: 136,634
  - **一句话**: unsloth 将 Google 的 DiffusionGemma 模型转化为 GGUF 格式，使普通用户也能在本地运行这最新颖的多模态模型。

#### 3. 生态信号

- **模型家族势力版图**: **Qwen3.6 系列**正以“洪流”之势席卷社区，针对其的各种微调、量化版本几乎占据半壁江山。**Gemma-4** 和 **DeepSeek-V4** 则分别代表 Google 与国内力量的顶级实力，形成了三足鼎立之势。
- **开源 vs 闭源**: 趋势榜前10中，几乎全部是**开源权重**模型。社区不再满足于等待封闭的 API，更倾向于直接获取、微调并部署模型。特别是 MoE 架构的 Qwen3.6，其高效性正在打破“大模型必须昂贵”的偏见。
- **量化与微调活动**: **GGUF 格式成为绝对主流**，几乎所有热门模型都有对应的 GGUF 版本，且下载量巨大。微调方向呈现两个极端：一是 **“去审查”** 以满足特定探索需求，二是 **“专家化”** （如代码、数学），专注于提升垂直领域能力。

#### 4. 值得探索

- **⚡ [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**：如果你只有中等算力，想体验最前沿的多模态 MoE 能力，这个模型是必试的。它完美平衡了性能与资源消耗。
- **🔍 [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**：对于计算机视觉和机器人研究者，这是一个颠覆性的工具。它的出现可能极大简化视觉定位任务的流程。
- **🖼️ [ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**：如果你是创意工作者或 AI 绘画爱好者，这个模型代表了目前开源文生图领域的最高水准之一，FP8 版本让你用更少的钱获得最好的效果。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*