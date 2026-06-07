# Hugging Face 热门模型日报 2026-06-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-07 00:27 UTC

---

# Hugging Face 热门模型日报 | 2026-06-07

---

## 今日速览

本周 Hugging Face 生态呈现**多模态爆发与端侧优化并行**的态势。DeepSeek-V4 系列以压倒性下载量（近 900 万）稳居顶流，印证开源大模型的持续吸引力；NVIDIA 密集发布 Cosmos3 系列与 Nemotron 3 家族，展现其在生成式 AI 全栈的野心；社区微调生态活跃，Uncensored 版 Qwen3.6 和 Sulphur-2 视频模型获得极高互动，反映开发者对"可自由定制"模型的强烈需求。同时，JetBrains、LiquidAI 等新玩家入场，LLM 竞争格局进一步多元化。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,681 | 5,510,611 | 本周绝对王者，开源对话模型的新标杆，下载量碾压全场 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,421 | 3,436,213 | V4 的轻量高速版，MIT 许可证降低商用门槛 |
| **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | google | 615 | 315,131 | Google 新一代 any-to-any 架构，原生支持多模态输入输出 |
| **[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)** | google | 377 | 84,549 | Gemma-4 基座模型，为研究者提供灵活微调起点 |
| **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** | LiquidAI | 532 | 95,440 | 新兴架构玩家，MoE 设计实现 8B 激活 1B 的高效推理 |
| **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)** | JetBrains | 239 | 16,395 | IDE 巨头下场自研 LLM，Thinking 版强调推理链能力 |
| **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 711 | 161,627 | 人力资源垂直领域模型，1B 参数瞄准企业级部署 |
| **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** | openbmb | 774 | 100,575 | 端侧小模型持续迭代，1B 参数挑战手机本地运行 |
| **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)** | nvidia | 143 | 47,285 | NVIDIA 旗舰级 550B MoE，BF16 精度面向数据中心 |
| **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4)** | nvidia | 117 | 17,225 | 同上但 NVFP4 量化，显存减半仍保持顶尖性能 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 1,451 | 111,078 | 视觉定位新范式，3B 参数实现"指哪打哪"的图像理解 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,487 | 2,771,843 | 社区激进去版微调版 Qwen3.6，下载量揭示"无审查"需求 |
| **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)** | stepfun-ai | 342 | 38,716 | 阶跃星辰最新视觉语言模型，Flash 版强调速度 |
| **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** | ideogram-ai | 306 | 2,818 | 文生图质量标杆 Ideogram 4 的 FP8 精度版本 |
| **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)** | ideogram-ai | 212 | 2,671 | NF4 量化版，消费级 GPU 可本地运行顶级文生图 |
| **[nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano)** | nvidia | 183 | 24,820 | Cosmos3 系列入门款，NVIDIA 物理世界生成基础模型 |
| **[nvidia/Cosmos3-Super](https://huggingface.co/nvidia/Cosmos3-Super)** | nvidia | 148 | 20,403 | 系列旗舰，Omni 架构统一视频/图像/3D 生成 |
| **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** | ByteDance | 149 | 223 | 字节跳动图像到视频渲染模型，Apache 2.0 开源 |
| **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)** | PaddlePaddle | 258 | 8,365 | 百度飞桨 OCR 视觉语言版，ERNIE4.5 底座强化文档理解 |
| **[nvidia/Cosmos3-Super-Text2Image](https://huggingface.co/nvidia/Cosmos3-Super-Text2Image)** | nvidia | 119 | 1,634 | Cosmos3 Super 的文生图专用接口 |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 1,581 | 1,704,964 | 社区爆款文生视频，基于 LTX-2.3 微调，下载量破 170 万 |
| **[nvidia/Cosmos3-Super-Image2Video](https://huggingface.co/nvidia/Cosmos3-Super-Image2Video)** | nvidia | 111 | 1,295 | Cosmos3 Super 的图生视频专用接口 |
| **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)** | meituan-longcat | 525 | 1,806 | 美团视频数字人，音频+文本驱动虚拟形象生成 |
| **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)** | google | 108 | 9,394 | Google Magenta 实时音乐生成，TFLite 部署边缘设备 |
| **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | bosonai | 153 | 2,184 | Higgs 多模态系列的 TTS 分支，4B 参数追求自然度 |
| **[MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS)** | MisoLabs | 130 | 0 | 新兴 TTS 专用模型，零下载或为新发布待观察 |
| **[nvidia/PiD](https://huggingface.co/nvidia/PiD)** | nvidia | 312 | 972 | 图像超分辨率专用，扩散模型架构提升画质细节 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia | 219 | 1,380 | NVIDIA 流式语音识别，0.6B 参数+缓存感知设计适配实时场景 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | unsloth | 421 | 458,174 | Unsloth 官方 GGUF 量化，下载量超原版印证量化生态成熟 |
| **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** | nvidia | 197 | 1,015,381 | NVIDIA 自研 NVFP4 格式量化 Qwen3.6，百万下载验证硬件-模型协同优化 |

---

## 生态信号

**DeepSeek 与 Qwen 双雄并立，NVIDIA 全栈渗透。** DeepSeek-V4 系列以近 900 万总下载确立开源 LLM 新王座；Qwen3.6 则通过 NVIDIA NVFP4 量化与社区 Uncensored 微调两条路径扩散，形成"官方-硬件商-社区"三方共建生态。**NVIDIA 本周存在感极强**：Cosmos3 系列覆盖视频/图像/3D 全模态，Nemotron 3 瞄准企业级语言模型，LocateAnything 探索视觉定位新场景，配合 NVFP4 量化格式，展现"模型+硬件+工具链"闭环野心。开源权重持续挤压闭源空间，但**垂直场景专用模型**（HRM、OCR、TTS）和**激进微调**（Uncensored、Sulphur-2）的繁荣，暗示开发者更渴望"可掌控、可修改"的模型而非 API 黑盒。GGUF/NF4/NVFP4 等多量化格式并存，消费级 GPU 本地运行顶级模型已成常态。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | MIT 许可证 + 340 万下载的成熟验证，是商业应用和二次开发的最优起点；Flash 架构在速度与质量间取得平衡，可替代多数 GPT-4 级别 API 调用场景。 |
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | 3B 参数实现视觉定位突破，可能重塑机器人、AR、自动驾驶的感知范式；NVIDIA 背书意味着完善的训练基础设施和潜在硬件加速优化，值得跟踪技术报告。 |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | 社区微调模型的现象级案例：基于 LTX-2.3 微调却获得 1581 点赞、170 万下载，证明开源视频生成已进入"可消费化"阶段；研究其微调策略和 LoRA 配置对视频生成社区有参考价值。 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*