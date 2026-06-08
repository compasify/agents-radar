# Hugging Face 热门模型日报 2026-06-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-08 00:29 UTC

---

# Hugging Face 热门模型日报 | 2026-06-08

---

## 今日速览

DeepSeek-V4-Pro 以 4,696 点赞和 550 万下载强势领跑，延续国产大模型的全球影响力。NVIDIA 今日霸榜态势明显，Cosmos3 系列覆盖图像、视频、超分辨率全链路，同时推出 LocateAnything-3B 视觉定位模型。Google Gemma-4 12B 系列借助 Unsloth 的 GGUF/QAT 量化生态快速渗透边缘部署场景。生成式 AI 持续向视频领域纵深，Sulphur-2-base 和 ByteDance Bernini-R 代表开源视频生成的新势力崛起。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,696 | 5,515,325 | DeepSeek 新一代旗舰，MoE 架构+极致性价比，企业级部署首选 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,434 | 3,347,429 | 轻量高速版本，MIT 协议开放，延迟敏感场景的最佳实践 |
| **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | google | 686 | 434,969 | Google 统一多模态架构的指令版，any-to-any 能力定义下一代交互范式 |
| **[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)** | google | 410 | 99,655 | 基础版统一模型，为下游微调和蒸馏提供高质量基座 |
| **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** | openbmb | 779 | 114,329 | 端侧小模型新标杆，1B 参数挑战 7B 级别性能，端侧 AI 关键基础设施 |
| **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)** | nvidia | 156 | 49,784 | 550B 总参/55B 激活的超大 MoE，NVIDIA 自研训练数据质量极高 |
| **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4)** | nvidia | 131 | 39,864 | NVFP4 原生量化版，Hopper/Blackwell 平台推理效率最大化 |
| **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)** | JetBrains | 249 | 16,924 | IDE 巨头推出的推理增强代码模型，Thinking 模式专为复杂编程任务设计 |
| **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** | LiquidAI | 540 | 118,326 | 液态神经网络架构迭代，非 Transformer 路线的性能验证 |
| **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 718 | 162,822 | 人力资源垂直领域专用模型，企业 SaaS 化 AI 的典型代表 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 1,522 | 115,556 | 视觉定位专用模型，"指哪打哪"的细粒度图像理解，机器人/AR 核心组件 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,520 | 2,923,564 | 社区激进去版 Qwen3.6 MoE，视觉+无审查双标签引爆下载量 |
| **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)** | stepfun-ai | 348 | 43,196 | 阶跃星辰新一代视觉语言模型，国产多模态竞争力持续升级 |
| **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** | ideogram-ai | 345 | 4,377 | 顶级文生图模型 FP8 量化版，Ideogram 4 代美学质量行业领先 |
| **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)** | ideogram-ai | 235 | 3,844 | NF4 极致压缩版，消费级 GPU 运行商业级图像生成 |
| **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** | ByteDance | 167 | 246 | 图像+文本驱动视频生成，Apache-2.0 协议罕见，字节开源诚意之作 |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 1,585 | 1,715,710 | 基于 LTX-2.3 的高热度文生视频基座，社区量化生态繁荣 |
| **[nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano)** | nvidia | 193 | 29,697 | Cosmos3 系列轻量版，世界模型入门，物理仿真数据合成利器 |
| **[nvidia/Cosmos3-Super](https://huggingface.co/nvidia/Cosmos3-Super)** | nvidia | 152 | 24,002 | 全功能世界模型旗舰，Omni 架构统一多模态理解与生成 |
| **[nvidia/Cosmos3-Super-Text2Image](https://huggingface.co/nvidia/Cosmos3-Super-Text2Image)** | nvidia | 123 | 5,075 | Cosmos3 文生图专用出口，世界模型内部表征直接解码高质量图像 |
| **[nvidia/Cosmos3-Super-Image2Video](https://huggingface.co/nvidia/Cosmos3-Super-Image2Video)** | nvidia | 114 | 4,515 | 图生视频专用管道，静态图像动态化的一致性和可控性突破 |
| **[nvidia/PiD](https://huggingface.co/nvidia/PiD)** | nvidia | 317 | 1,082 | 图像超分辨率专用模型，扩散模型架构，细节重建能力突出 |
| **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)** | google | 130 | 13,338 | 实时音乐生成，TFLite 部署，移动端 AI 作曲里程碑 |
| **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | bosonai | 193 | 7,557 | Higgs 多模态生态语音出口，4B 参数 TTS 质量逼近商用标杆 |
| **[MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS)** | MisoLabs | 142 | 0 | 新兴 TTS 架构，零下载量预示即将发布或早期内测阶段 |
| **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)** | PaddlePaddle | 266 | 9,084 | 飞桨 OCR 视觉语言融合版，ERNIE4.5 底座，文档智能新高度 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia | 256 | 3,439 | 流式语音识别专用模型，Cache-Aware 架构实现真正的低延迟实时转写 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | unsloth | 449 | 568,158 | Unsloth 官方 GGUF 量化，Gemma-4 多模态模型本地运行的首选方案 |
| **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)** | unsloth | 120 | 85,842 | QAT 训练感知量化版，精度损失更小，any-to-any 能力完整保留 |
| **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** | nvidia | 200 | 1,185,362 | NVIDIA ModelOpt 官方优化，NVFP4 格式+MoE 稀疏，推理成本数量级下降 |

---

## 生态信号

**模型家族格局**：DeepSeek V4 系列凭借技术领先+开放协议（MIT）形成双轮驱动，Pro/Flash 覆盖全场景；NVIDIA 从训练基础设施延伸至模型层，Cosmos 世界模型+Nemotron 语言模型+LocateAnything 视觉模型形成全栈布局；Google Gemma-4 的 any-to-any 统一架构代表多模态融合方向，但社区量化生态（Unsloth）才是其渗透关键。

**开源权重 vs 闭源**：头部闭源厂商（Ideogram、阶跃星辰）积极发布开源权重或量化版，"开放核心+云服务"成为主流商业模式；完全开源（DeepSeek、Gemma、Bernini-R）在开发者心智中持续占优。

**量化与微调热点**：GGUF 仍是社区量化的绝对标准，Unsloth 绑定 Gemma-4 形成官方级生态；NVFP4/FP8 等硬件原生格式开始崛起，NVIDIA 正推动从"社区量化"向"芯片级优化"的范式转移；MoE 架构的稀疏激活特性与量化技术高度适配，Qwen3.6-MoE、Gemma-4、Nemotron-Ultra 均受益于此。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | 视觉定位是机器人、AR、自动驾驶的共性刚需，3B 参数实现高效部署，NVIDIA 硬件协同优化潜力大，有望成为 CV 领域的 "SAM 时刻" |
| **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** | Apache-2.0 协议的视频生成模型极度稀缺，246 下载量处于极早期，先发研究者可建立关键 know-how，字节后续生态支持值得期待 |
| **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | any-to-any 统一架构首次进入消费级硬件，568K 下载验证社区热度，是验证"一个模型处理所有模态"可行性的最佳入口 |

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*