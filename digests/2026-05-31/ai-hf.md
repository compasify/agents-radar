# Hugging Face 热门模型日报 2026-05-31

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-31 00:26 UTC

---

# Hugging Face 热门模型日报 | 2026-05-31

---

## 今日速览

本周 Hugging Face 生态呈现**多模态爆发与端侧轻量化并行**的趋势。DeepSeek-V4 系列以近千万下载量持续领跑大语言模型赛道，Qwen3.6 家族（27B/35B-MoE）凭借视觉-语言统一能力成为社区最活跃的基础模型之一。视频生成领域迎来 Sulphur-2-base 和 meituan-longcat 的新品，而 MiniCPM5-1B 则代表了端侧小模型的极致压缩方向。值得关注的是，**量化生态（GGUF）与社区微调（Uncensored/Aggressive 变体）** 活跃度显著提升，反映下游部署需求的快速膨胀。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,463 | 5,918,111 | 本周下载量冠军，Pro 版本在推理深度与工具调用上进一步升级，企业级部署首选。 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,303 | 3,427,926 | 轻量高速版本，MIT 许可证降低商用门槛，适合高并发场景。 |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,537 | 4,971,730 | 阿里通义千问主力开源模型，视觉-语言统一架构，社区生态最完善的基础模型之一。 |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,954 | 5,728,121 | 35B 激活 3B 的 MoE 架构，以接近 27B 的推理成本实现更高性能，性价比标杆。 |
| **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** | openbmb | 606 | 28,793 | 1B 参数端侧小模型新标杆，针对手机/IoT 极致优化，端侧 AI 落地关键基础设施。 |
| **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** | LiquidAI | 275 | 17,084 | 液态神经网络架构的 MoE 实践，8B 总参 1B 激活，探索非 Transformer 路径。 |
| **[tencent/Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)** | tencent | 433 | 3,833 | 腾讯混元翻译专用大模型，30B-A3B MoE 架构，聚焦高质量多语言翻译。 |
| **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)** | tencent | 1,091 | 16,805 | 1.8B 轻量翻译模型，以极小体积实现可用质量，边缘部署友好。 |
| **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 418 | 138,118 | 人力资源领域专用 1B 模型，垂直场景微调的代表，企业 SaaS 集成度高。 |
| **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)** | stepfun-ai | 134 | 3,400 | 阶跃星辰视觉语言模型，Step 系列首次进入周榜，多模态能力待验证。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,102 | 2,227,885 | 社区激进去 censored 微调版，220 万下载反映特定场景需求，但存在合规风险。 |
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 494 | 18,327 | NVIDIA 视觉定位模型，3B 参数实现开放词汇目标定位，机器人/AR 场景核心能力。 |
| **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | bytedance-research | 981 | 2,856 | 字节跳动 any-to-any 统一多模态模型，支持图像/视频/音频跨模态生成与理解，架构野心极大。 |
| **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)** | meituan-longcat | 411 | 0 | 美团视频数字人 1.5 版，音频/图像驱动视频生成，零下载或因刚发布/授权限制。 |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 1,454 | 1,557,858 | 本周视频生成黑马，155 万下载逼近头部，端点兼容设计降低接入门槛。 |
| **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | openbmb | 1,074 | 433,156 | MiniCPM 视觉版 4.6 迭代，端侧最强视觉理解小模型之一，OCR/图表解析突出。 |
| **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)** | numind | 203 | 53,338 | 基于 Qwen3.5 的视觉信息抽取专用模型，票据/文档结构化场景落地明确。 |
| **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)** | PaddlePaddle | 107 | 2,294 | 百度飞桨 OCR 视觉语言版，ERNIE4.5 底座，中文文档理解优势显著。 |
| **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)** | NemoStation | 454 | 15,780 | 视频-文本理解模型，基于 Qwen3.5 架构，2B 参数瞄准高效视频问答。 |
| **[microsoft/Lens](https://huggingface.co/microsoft/Lens)** | microsoft | 145 | 1,517 | 微软文本到图像新模型，arxiv 预印本同步发布，学术与工业结合紧密。 |
| **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Supertone | 744 | 55,382 | 韩国 Supertone TTS 第三代，ONNX 推理优化，情感表达与多语种支持提升。 |
| **[nvidia/PiD](https://huggingface.co/nvidia/PiD)** | nvidia | 192 | 437 | NVIDIA 图像超分模型，扩散模型架构，低分辨率图像修复质量行业领先。 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[pyannote/speaker-diarization-3.1](https://huggingface.co/pyannote/speaker-diarization-3.1)** | pyannote | 2,073 | 9,771,170 | 说话人分离 3.1 版，近千万下载的语音处理基础设施，会议/客服场景标配。 |
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 1,570 | 304,691 | OpenAI 罕见开源的隐私过滤模型，PII 检测与脱敏，合规数据处理关键工具。 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 567 | 877,938 | Unsloth 官方 GGUF 量化版，MTP 多 token 预测加速，87 万下载验证社区认可度。 |
| **[LiquidAI/LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF)** | LiquidAI | 123 | 23,685 | LFM2.5 的 llama.cpp 兼容版，边缘设备部署液态神经网络的唯一官方通道。 |
| **[Jackrong/Qwopus3.6-27B-v2-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF)** | Jackrong | 172 | 105,264 | 社区 MTP-GGUF 微调版，10 万下载体现个人开发者量化生态的活跃。 |
| **[Jackrong/Qwopus3.6-27B-v2-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-GGUF)** | Jackrong | 186 | 33,167 | 非 MTP 标准 GGUF 版本，与 MTP 版形成互补，覆盖不同推理后端需求。 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 460 | 0 | Qwen 对话模板修复集合，MLX 框架适配，零下载或因工具属性/刚发布。 |
| **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)** | circlestone-labs | 1,602 | 736,443 | ComfyUI 单文件扩散模型，73 万下载的社区创作工具，工作流生态深度绑定。 |

---

## 生态信号

**Qwen3.6 家族**已成开源多模态事实标准，27B/35B-MoE 双版本覆盖不同算力层级，社区微调（HauhauCS、Jackrong、Qwopus）形成繁荣衍生品生态。**DeepSeek-V4** 则以绝对下载量优势巩固其在纯文本大模型领域的领先地位。量化层面，**GGUF 格式全面渗透**：Unsloth、社区开发者、甚至原厂（LiquidAI）均主动适配 llama.cpp 生态，反映端侧与本地部署需求的刚性增长。一个值得注意的信号是 **"Uncensored" 变体的高下载量**（220 万）与 **OpenAI 罕见开源隐私过滤器** 形成微妙对照——开源社区在能力释放与安全约束之间的张力持续加剧。闭源厂商（OpenAI、微软）开始以"工具型开源"（隐私过滤、Lens 研究模型）参与生态，而非核心模型开源。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | **any-to-any 架构的前瞻性实验**：不限定输入输出模态，统一处理图像/视频/音频/文本的生成与理解。若其技术报告验证架构效率，可能成为下一代多模态基础范式的关键参考，适合研究模态统一与表示学习。 |
| **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** | **端侧智能的极限探针**：1B 参数级别能否支撑可用质量的对话与推理，直接决定 AI 原生硬件（AI Phone、AI Glasses）的产品定义。MiniCPM 系列持续迭代验证小模型 Scaling Law，硬件厂商与边缘开发者应优先测试。 |
| **[pyannote/speaker-diarization-3.1](https://huggingface.co/pyannote/speaker-diarization-3.1)** | **语音基础设施的隐形冠军**：近千万下载量远超多数明星模型，说明其已成为会议记录、客服分析、播客处理等场景的默认选项。3.1 版本更新值得关注实时性与多语言支持改进，语音应用开发者必跟。 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*