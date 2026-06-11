# Hugging Face 热门模型日报 2026-06-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-11 00:36 UTC

---

好的，作为AI模型生态分析师，这是为您生成的2026年6月11日Hugging Face热门模型日报。

---

### **Hugging Face 热门模型日报 | 2026年6月11日**

#### **1. 今日速览**

本周Hugging Face生态由**DeepSeek-V4-Pro**的强势登顶主导，其海量点赞与下载量彰显了社区对高性能开源对话模型的渴求。与此同时，**NVIDIA的LocateAnything-3B**与**Google的Gemma-4系列**构成了多模态与通用模型的双核心赛道。值得注意的是，社区微调与量化活动异常活跃，围绕Gemma-4和Qwen3.5的衍生模型（如Unsloth的GGUF版本、HauhauCS的Uncensored版）占据了榜单半壁江山，表明“基础模型+社区优化”已成为主流范式。

#### **2. 热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **deepseek-ai/DeepSeek-V4-Pro** | deepseek-ai | 👍 4,758 | 📥 4,061,006
  - 当前社区最炙手可热的对话模型，其强大的性能和开放权重策略吸引了海量关注与使用。
- **sapientinc/HRM-Text-1B** | sapientinc | 👍 739 | 📥 134,752
  - 仅10亿参数的文本生成模型，专为人力资源管理场景优化，展示了垂直领域小型模型的巨大潜力。
- **LiquidAI/LFM2.5-8B-A1B** | LiquidAI | 👍 581 | 📥 142,134
  - Liquid AI推出的新型MoE语言模型，以8B参数、1B激活的极致效率实现了高性能，备受社区关注。
- **nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16** | nvidia | 👍 189 | 📥 59,066
  - NVIDIA的旗舰级大型语言模型，拥有550B参数，是当前开源界规模最大的模型之一，代表了巨量模型的前沿。
- **JetBrains/Mellum2-12B-A2.5B-Thinking** | JetBrains | 👍 281 | 📥 18,273
  - JetBrains推出的12B参数MoE思考模型，专注于提升推理和逻辑能力，为开发工具智能化提供基础。
- **nex-agi/Nex-N2-Pro** | nex-agi | 👍 180 | 📥 1,185
  - 基于Qwen3.5架构的MoE模型，专注于文本生成和图像-文本理解，是新一代全能型模型的有力竞争者。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **nvidia/LocateAnything-3B** | nvidia | 👍 1,803 | 📥 131,794
  - NVIDIA推出的图像-文本交互模型，能根据文本指令精确定位图像中的任何物体，开创了视觉定位新范式。
- **ideogram-ai/ideogram-4-fp8** | ideogram-ai | 👍 472 | 📥 7,170
  - 业界顶尖的文生图模型Ideogram 4的FP8量化版本，在保持高质量的同时大幅降低显存占用。
- **stepfun-ai/Step-3.7-Flash** | stepfun-ai | 👍 363 | 📥 50,187
  - 阶跃星辰推出的最新多模态模型，擅长图像-文本理解，在视觉问答和图像描述任务上表现出色。
- **bosonai/higgs-audio-v3-tts-4b** | bosonai | 👍 320 | 📥 19,948
  - 40亿参数的最新高品质文本转语音模型，标志着TTS正在向更大参数、更高自然度演进。
- **google/magenta-realtime-2** | google | 👍 173 | 📥 19,806
  - Google Magenta团队推出的实时文本到音频/音乐生成模型，开启了AI音乐创作的新可能性。
- **ByteDance/Bernini-R** | ByteDance | 👍 210 | 📥 305
  - 字节跳动发布的图像-文本到视频模型，展示了从视觉描述生成动态视频的强大能力。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

- **nvidia/nemotron-3.5-asr-streaming-0.6b** | nvidia | 👍 341 | 📥 4,965
  - 专为流式语音识别优化的0.6B参数模型，支持缓存感知的实时转录，边缘计算场景的理想选择。
- **CohereLabs/North-Mini-Code-1.0** | CohereLabs | 👍 255 | 📥 1,859
  - Cohere推出的迷你代码生成模型，专注于代码任务，为开发者提供轻量级的AI编程助手。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** | HauhauCS | 👍 1,630 | 📥 3,057,541
  - 基于Qwen3.6的莫德模型，移除了安全限制并进行了激进微调，是社区追求极致生成自由的典型代表。
- **unsloth/gemma-4-12b-it-GGUF** | unsloth | 👍 548 | 📥 711,706
  - Unsloth社区为Google Gemma-4-12B-it模型优化的GGUF量化版本，极大降低了本地部署门槛。
- **OBLITERATUS/Gemma-4-12B-OBLITERATED** | OBLITERATUS | 👍 212 | 📥 14,838
  - 另一个社区微调的Gemma-4-12B变体，暗示了社区对模型进行个性化“改造”的趋势。
- **nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4** | nvidia | 👍 158 | 📥 91,117
  - Nemotron-3 Ultra的NVFP4量化版，展示了NVIDIA在超大规模模型量化压缩方面的技术实力。
- **huihui-ai/Huihui-gemma-4-12B-it-abliterated** | huihui-ai | 👍 135 | 📥 6,400
  - 社区对Gemma-4进行“abliterated”（移除安全限制）微调的产物，与HauhauCS模型形成呼应。

#### **3. 生态信号**

- **模型家族两极分化**：**DeepSeek-V4**作为“通才”代表成为绝对热点，而**Gemma-4系列**（包括其无数衍生版）则展示了“开源基座+社区生态”的强大生命力。**NVIDIA的Nemotron与LocateAnything**则代表了巨头在高精尖任务上的持续布局。
- **开源权重是绝对主流**：榜单前30名几乎均为开源权重模型，闭源模型在此榜单上几乎绝迹。社区通过微调、量化等方式，正将开源模型的潜力挖掘到极致。
- **量化与微调活动空前繁荣**：Unsloth、HauhauCS、OBLITERATUS等社区账号的频繁亮相，表明围绕热门基座模型（特别是Gemma和Qwen）的量化（GGUF）和个性化微调（Uncensored、Abliterated）已成为生态中最活跃的增长点。

#### **4. 值得探索**

1. **deepseek-ai/DeepSeek-V4-Pro**：作为本周“流量之王”，它代表了当下开源LLM性能的天花板。推荐立即体验，对比其与GPT-4o、Claude 3.5等闭源模型的表现差异。
2. **nvidia/LocateAnything-3B**：该模型代表了多模态交互的新方向。推荐开发者深入研究其图像定位API，探索将其用于自动驾驶、医疗影像分析或机器人操作的潜力。
3. **LiquidAI/LFM2.5-8B-A1B**：作为高效MoE模型的代表，它以极低的成本（1B激活参数）实现了接近大模型的性能。适合资源受限但追求高性能的场景，如手机端或边缘设备部署。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*