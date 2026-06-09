# Hugging Face 热门模型日报 2026-06-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-09 00:24 UTC

---

# Hugging Face 热门模型日报 | 2026-06-09

---

## 今日速览

本周 Hugging Face 生态呈现**多模态爆发与国产模型强势崛起**的态势。DeepSeek-V4 系列以碾压级下载量（合计超 860 万）稳居顶流，Google Gemma-4 家族凭借原生 any-to-any 架构引发社区量化热潮（Unsloth 连发 3 款 GGUF）。值得关注的是，**视频生成赛道**首次出现 Sulphur-2-base、ByteDance Bernini-R、京东 JoyAI-Echo 三强并立，而 NVIDIA 则在视觉定位（LocateAnything-3B）与语音 ASR（Nemotron-3.5）两条垂直赛道密集布局。社区对"Uncensored"微调模型的需求持续高涨，HauhauCS 的 Qwen3.6-35B-A3B 以 303 万下载量验证了这一趋势。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,720 | 5,399,597 | 本周绝对王者，Pro 版本以近 540 万下载量刷新纪录，延续 DeepSeek 在开源大模型领域的统治力 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,446 | 3,262,529 | 轻量高速版本，326 万下载量证明"小钢炮"路线在推理成本敏感场景极具吸引力 |
| **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | google | 750 | 554,173 | Google 首款原生 any-to-any 架构模型，12B 参数实现跨模态统一理解与生成 |
| **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** | LiquidAI | 548 | 135,131 | 液态神经网络架构的 MoE 迭代，8B 总参数/1B 激活的高效设计吸引效率派开发者 |
| **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 726 | 163,953 | 人力资源垂直领域专用 1B 模型，小众但高点赞反映 B 端场景对轻量化专业模型的渴求 |
| **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)** | JetBrains | 259 | 17,448 | IDE 巨头 JetBrains 推出的推理增强代码模型，Thinking 标签暗示链式思维优化 |
| **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** | openbmb | 781 | 126,061 | 面壁智能第五代端侧小钢炮，1B 参数挑战 7B 级性能，边缘部署首选 |
| **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)** / **[NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4)** | nvidia | 165/145 | 55,910/66,219 | NVIDIA 自研 550B 总参数/55B 激活的 MoE 巨兽，双精度版本覆盖训练与推理场景 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 1,617 | 121,594 | 本周点赞冠军，3B 参数实现开放词汇视觉定位，打破检测模型类别限制 |
| **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)** | stepfun-ai | 351 | 45,535 | 阶跃星辰 3.7 代视觉语言模型，国产多模态力量持续迭代 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,552 | 3,036,465 | 社区激进去 censored 版 Qwen3.6，303 万下载量揭示开源社区对内容自由度的强烈需求 |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 1,600 | 1,707,062 | 基于 LTX-2.3 的视频生成基底模型，170 万下载量标志社区视频生成进入"基础模型+微调"时代 |
| **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** | ByteDance | 184 | 278 | 字节跳动图像-文本到视频渲染器，Apache-2.0 协议罕见地来自大厂视频模型 |
| **[jdopensource/JoyAI-Echo](https://huggingface.co/jdopensource/JoyAI-Echo)** | jdopensource | 102 | 4,053 | 京东开源文本到视频生成模型，电商巨头入局多模态生成赛道 |
| **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** / **[nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)** | ideogram-ai | 392/261 | 5,495/4,963 | Ideogram 4 代文生图模型双精度版本，fp8/nf4 量化直接官方提供 |
| **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)** | google | 151 | 17,531 | Google Magenta 实时音乐生成第二代，TFLite 部署指向移动端音乐 AI |
| **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | bosonai | 244 | 15,005 | 基于 Qwen3 多模态架构的 TTS 模型，4B 参数实现高自然度语音合成 |
| **[MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS)** | MisoLabs | 156 | 0 | 新兴语音合成模型，零下载但 156 点赞暗示预发布阶段即获社区关注 |
| **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)** | PaddlePaddle | 277 | 9,924 | 百度飞桨 OCR 视觉语言版，ERNIE4.5 底座赋能文档理解 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia | 287 | 3,957 | NVIDIA 流式语音识别专用模型，0.6B 参数+缓存感知设计适配实时场景 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | unsloth | 500 | 645,263 | Unsloth 首发 Gemma-4 GGUF 量化，64 万下载量验证社区对 Google 新架构的热情 |
| **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)** | unsloth | 146 | 121,399 | QAT 感知训练量化版本，精度损失更小，适合对质量敏感的生产环境 |
| **[unsloth/gemma-4-26B-A4B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF)** | unsloth | 100 | 87,455 | 26B 总参数/4B 激活的 MoE 版本量化，Unsloth 覆盖 Gemma-4 全系列 |
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 695 | 1,186,648 | Multi-Token Prediction 版 Qwen3.6 量化，118 万下载量显示 MTP 技术受社区追捧 |
| **[nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)** | nex-agi | 116 | 716 | 基于 Qwen3.5 MoE 的社区微调，低下载高点赞反映早期探索性质 |

---

## 生态信号

**模型家族势力版图**：DeepSeek-V4 以合计 866 万周下载量形成"一超"格局，Qwen 生态（3.5/3.6 代）凭借开源友好度成为"多强"核心，Gemma-4 的 any-to-any 架构有望复制 Gemma-2 的成功路径。NVIDIA 本周 5 款上榜模型覆盖视觉、语音、视频、LLM 全栈，硬件厂商向上游模型层渗透加速。**开源权重 vs 闭源**呈现新态势：大厂（Google、NVIDIA、ByteDance）以 Apache-2.0 或开放权重释放基础模型，但通过 MoE 架构（激活参数远小于总参数）和专用量化格式（NVFP4）维持生态控制力。社区量化活动极度活跃——Unsloth 独占 4 席，GGUF 成为事实标准，QAT 量化从"可选项"变为"必选项"。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | 视觉定位领域的"Segment Anything 时刻"——3B 参数实现开放词汇检测，打破传统检测器类别限制，机器人、自动驾驶、AR 等需空间理解的场景可直接落地 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | 性价比极致：326 万下载量验证的社区选择，Flash 版本在保留 Pro 核心能力的同时大幅降低推理成本，是构建生产级 AI 应用的务实之选 |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | 视频生成"基础模型+LoRA"生态的关键基建——基于 LTX-2.3 的开放基底，170 万下载量预示社区视频生成将从"调用 API"转向"本地微调"，创作者经济范式可能重构 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*