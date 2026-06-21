# Hugging Face 热门模型日报 2026-06-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-21 00:29 UTC

---

好的，作为AI模型生态分析师，这是为您生成的2026年6月21日《Hugging Face 热门模型日报》。

---

# Hugging Face 热门模型日报 (2026-06-21)

## 今日速览

本周Hugging Face生态展现出**模型规模的「两极分化」与MoE架构的全面普及**。一方面，**DeepSeek-V4-Pro** 凭借近5000赞的周热度与近280万下载量，巩固了其在超大参数开源模型中的领先地位；另一方面，社区量化活动空前活跃，**HauhauCS** 的Qwen3.6量化版以380万+下载量登顶下载榜，凸显了社区对高效能、可本地部署模型的强烈需求。值得注意的是，**多模态模型已成为主流**，在Top 30中有超过15个模型涉及图像、视频或音频处理，标志着“纯文本模型”时代正加速向“全能模型”过渡。此外，**代码与推理能力成为微调核心焦点**，包括Gemma-4、Kimi-K2.7等多个基础模型均有专门的Coder变体上榜。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
  作者: deepseek-ai | 👍 4,984 | ⬇️ 2,797,050
  一句话：DeepSeek最新旗舰级MoE文本模型，凭借强大的推理能力和开放权重，成为本周无可争议的生态焦点。

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  作者: zai-org | 👍 1,686 | ⬇️ 19,683
  一句话：智谱AI发布的GLM系列新作，采用MoE-DSA架构，在对话能力上实现显著突破，并引发了广泛的社区微调与量化活动。

- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**
  作者: microsoft | 👍 244 | ⬇️ 1,998
  一句话：微软推出的4B参数高效上下文对话模型，专为长上下文场景优化，是Explorer SubAgent等智能体应用的基础。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
  作者: nvidia | 👍 2,216 | ⬇️ 235,606
  一句话：英伟达发布的3B参数视觉定位模型，能够基于自然语言指令在图像中精准定位目标，将视觉理解能力推向新高度。

- **[MoonshotAI/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
  作者: moonshotai | 👍 928 | ⬇️ 317,963
  一句话：月之暗面推出的Kimi系列代码多模态模型，支持压缩张量，在代码理解和生成任务上表现出色，下载量极高。

- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
  作者: google | 👍 1,022 | ⬇️ 673,464
  一句话：Google发布的Gemma系列扩散模型，26B参数采用4B激活的MoE架构，在图像生成与理解对话中表现惊艳。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  作者: HauhauCS | 👍 2,040 | ⬇️ 3,812,636
  一句话：基于Qwen3.6-MoE的社区极致量化版，35B总参数(3B激活)，凭借“无审查”和超高下载量，反映了用户对高性能、小内存占用模型的狂热。

- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
  作者: google | 👍 1,106 | ⬇️ 1,696,240
  一句话：Gemma-4的官方指令微调版，支持任意模态输入输出（any-to-any），是多模态全能模型的标杆之作。

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
  作者: nvidia | 👍 583 | ⬇️ 21,426
  一句话：英伟达推出的0.6B超小流式语音识别模型，标志着大模型正在向低延迟、边缘部署的场景渗透。

- **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)**
  作者: zai-org | 👍 241 | ⬇️ 0
  一句话：智谱AI发布的角色动画视频生成模型，基于Diffusion架构，专注于姿态驱动的视频生成，是文生视频领域的专业探索。

- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**
  作者: bosonai | 👍 496 | ⬇️ 72,225
  一句话：基于Higgs多模态模型的4B参数文本转语音模型，展现了文本生成模型与语音生成的融合趋势。

- **[datalab-to/lift](https://huggingface.co/datalab-to/lift)**
  作者: datalab-to | 👍 86 | ⬇️ 0
  一句话：专注于PDF文档理解的图像文本多模态模型，填补了专业文档处理领域的空白。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
  作者: WeiboAI | 👍 511 | ⬇️ 16,270
  一句话：新浪微博发布的3B参数推理模型，专注于数学问题解决，展示了小模型在特定领域（数学推理）的巨大潜力。

- **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)**
  作者: LiquidAI | 👍 81 | ⬇️ 6,128
  一句话：Liquid AI发布的新一代嵌入模型，350M参数，专为语义相似度与检索任务优化，是RAG应用的重要基础设施。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
  作者: yuxinlu1 | 👍 1,982 | ⬇️ 312,332
  一句话：基于Gemma-4的代码专家模型，经过Composer微调并量化至GGUF格式，是社区代码模型中的明星。

- **[prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B)**
  作者: prefeitura-rio | 👍 327 | ⬇️ 190,694
  一句话：里约热内卢市政府发布的基于Qwen3.5-MoE的397B超大开放模型，显示了政府机构在开源LLM领域的参与度提升。

- **[DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)**
  作者: DavidAU | 👍 411 | ⬇️ 587,521
  一句话：社区“缝合”微调的极致体现，融合多种模型特质，以“无审查”和“增强思考”为卖点，下载量巨大，是社区创造力的风向标。

- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
  作者: unsloth | 👍 205 | ⬇️ 22,586
  一句话：知名量化团队Unsloth对GLM-5.2的GGUF版本，为社区提供了高效本地运行GLM-5.2的便捷途径。

## 生态信号

本周生态呈现三大信号：**1) MoE全栈化**。无论是DeepSeek-V4-Pro、Qwen3.6-MoE还是GLM-5.2，MoE（混合专家）架构已成为从千亿级超大到小参数模型的标准配置，兼顾性能与效率。**2) 量化驱动的社区繁荣**。HauhauCS与DavidAU的模型下载量远超其基础模型，表明开源社区的活力核心已从“基础模型训练”转向“极致量化与功能集成”。**3) 模型家族竞争白热化**。**Qwen3.6系列**凭借Qwable、HauhauCS、DavidAU等多个衍生版成为社区微调最活跃的基础；**Gemma-4**系列则凭借官方强大的any-to-any能力和社区Coder微调，稳居多模态领域第一梯队。开源权重已成为常态，竞争焦点转向实用化与生态建设。

## 值得探索

1. **🆕 [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**：作为本周绝对的王者，它代表了当前开源LLM在通用推理和对话能力上的天花板，是所有严肃研究和产品开发者的必测模型。

2. **🆕 [NVIDIA LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**：将视觉定位能力参数化、轻量化，这对机器人、自动驾驶及智能图像编辑领域具有颠覆性意义，值得关注其在下游任务上的应用潜力。

3. **🆕 [HauhauCS/Qwen3.6-35B-A3B-Uncensored...](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**：虽然名字很长，但它是社区技术的集大成者。它以380万的总下载量告诉我们，**高质量的开源量化模型**在满足“免费、本地运行、高性能”需求上拥有无与伦比的市场。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*