# Hugging Face 热门模型日报 2026-06-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-02 00:31 UTC

---

# Hugging Face 热门模型日报 | 2026-06-02

---

## 今日速览

本周 Hugging Face 热度由 **DeepSeek-V4 系列** 领跑，Pro 版与 Flash 版合计下载量突破 930 万，开源大模型竞争进入"性能+效率"双轨阶段。**Qwen3.6 生态**持续扩张，从 27B 稠密模型到 35B MoE 及各类 GGUF 量化版本形成完整矩阵。多模态领域亮点频现：字节跳动的 **Lance** 以"any-to-any"架构探索统一生成，美团 **LongCat** 瞄准视频 Avatar 赛道。值得注意的是，**2bit 三值量化**（prism-ml/bonsai）等极端压缩技术开始涌现，边缘部署需求正重塑模型形态。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,530 | 5,851,826 | 当前下载量最高的开源大模型，以 MIT 许可证发布，企业友好度极高 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,341 | 3,511,636 | V4 系列的轻量高效版本，兼顾性能与推理成本，适合高并发场景 |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,567 | 5,154,729 | 阿里 Qwen3.6 系列主力型号，视觉-语言统一架构，社区生态最活跃的基础模型之一 |
| **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** | openbmb | 689 | 45,698 | 面壁智能第五代端侧小模型，1B 参数级别追求"小钢炮"体验 |
| **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** | LiquidAI | 390 | 37,893 | 液态神经网络架构的 MoE 实践，8B 激活 1B 的独特效率路径 |
| **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)** | stepfun-ai | 191 | 9,256 | 阶跃星辰 3.7 代 Flash 版本，国产大模型"快版本"竞赛参与者 |
| **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 439 | 149,543 | 垂直领域黑马，专注人力资源场景的 1B 级专用模型 |
| **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)** / **[Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)** | tencent | 1,099 / 444 | 18,131 / 4,458 | 腾讯混元翻译专用模型，双尺寸覆盖边缘到云端，MT2 架构针对翻译任务优化 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,218 | 2,533,393 | 社区去 censored 版 Qwen3.6 MoE，下载量揭示"无限制"需求的巨大市场 |
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 792 | 35,783 | NVIDIA 视觉定位模型，3B 参数实现"任意物体定位"，空间智能新方向 |
| **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | bytedance-research | 1,002 | 3,041 | 字节跳动"任意到任意"统一生成模型，图像/视频/文本跨模态原生互转 |
| **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)** | meituan-longcat | 465 | 0 | 美团视频 Avatar 生成模型，音频/图像驱动视频，零下载量反映早期发布或授权限制 |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 1,490 | 1,656,520 | 文本到视频基础模型，下载量破 165 万，开源视频生成赛道头部玩家 |
| **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | openbmb | 1,088 | 459,188 | MiniCPM 视觉版 4.6 代，端侧多模态的标杆产品，OCR 与视觉理解均衡 |
| **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Supertone | 770 | 57,627 | 韩国 Supertone 第三代 TTS，情感表达与音色克隆的商用级方案 |
| **[OpenMOSS-Team/MOSS-TTS-v1.5](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-v1.5)** | OpenMOSS-Team | 94 | 18,564 | 复旦 MOSS 团队中文 TTS，延迟优化架构，开源中文语音合成基础设施 |
| **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)** | NemoStation | 482 | 17,012 | 视频-文本理解模型，基于 Qwen3.5 架构，长视频理解的新尝试 |
| **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)** | numind | 215 | 59,010 | 文档信息抽取专用模型，视觉-语言架构处理复杂版面，企业自动化场景 |
| **[Kwai-Keye/Keye-VL-2.0-30B-A3B](https://huggingface.co/Kwai-Keye/Keye-VL-2.0-30B-A3B)** | Kwai-Keye | 88 | 784 | 快手 Keye 视觉语言模型，MoE 架构，特征提取导向，早期发布阶段 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[pyannote/speaker-diarization-3.1](https://huggingface.co/pyannote/speaker-diarization-3.1)** | pyannote | 2,106 | 9,591,005 | 说话人分离 Pipeline 3.1 版，近千万下载量的音频基础设施，语音识别后处理标配 |
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 1,578 | 316,092 | OpenAI 罕见开源的 token 级隐私过滤模型，PII 检测与合规应用的官方工具 |
| **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)** | PaddlePaddle | 156 | 3,190 | 百度 PaddleOCR 视觉语言版，ERNIE 4.5 底座，中文文档理解专用 |
| **[nvidia/PiD](https://huggingface.co/nvidia/PiD)** | nvidia | 238 | 577 | NVIDIA 图像超分辨率模型，扩散架构，低分辨率图像重建的硬件厂商方案 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 593 | 952,188 | Unsloth 官方 GGUF 量化，MTP 多 token 预测加速，近百万下载的"官方量化"标杆 |
| **[Jackrong/Qwopus3.6-27B-v2-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF)** | Jackrong | 183 | 139,952 | 社区 MTP-GGUF 版本，与 Unsloth 形成"官方-社区"量化双轨 |
| **[LiquidAI/LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF)** | LiquidAI | 143 | 55,212 | LFM 液态模型 GGUF 版，边缘部署友好，llama.cpp 生态扩展 |
| **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** | nvidia | 121 | 171,588 | NVIDIA 官方 NVFP4 量化，硬件厂商深度优化，17 万下载验证企业需求 |
| **[stepfun-ai/Step-3.7-Flash-GGUF](https://huggingface.co/stepfun-ai/Step-3.7-Flash-GGUF)** | stepfun-ai | 84 | 37,533 | 阶跃星辰官方 GGUF，imatrix 量化，国产模型主动拥抱 llama.cpp 生态 |
| **[prism-ml/bonsai-image-ternary-4B-gemlite-2bit](https://huggingface.co/prism-ml/bonsai-image-ternary-4B-gemlite-2bit)** | prism-ml | 89 | 0 | 极端压缩实验：三值权重 + GemLite 2bit，文本到图像模型的"极限瘦身"探索 |

---

## 生态信号

**Qwen3.6 与 DeepSeek-V4 形成双寡头格局**：前者以 27B/35B MoE 多尺寸+视觉统一覆盖全场景，后者以 MIT 许可证+Flash/Pro 双版本横扫企业市场。开源权重正从"追赶闭源"转向"定义标准"——DeepSeek-V4-Pro 的 585 万下载已超越多数闭源 API 调用量。**量化生态出现分层**：GGUF 成为社区事实标准（Unsloth、官方、社区三线并行），而 NVFP4、2bit 三值等硬件级/算法级极端压缩开始涌现，反映边缘 AI 从"能跑"到"跑得好"的需求升级。值得警惕的是，"Uncensored"版本下载量畸高（253 万），开源安全与自由的张力持续加剧。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | "Any-to-any"是 2026 年多模态的终极形态猜想。Lance 以单一权重同时处理图像生成、视频生成、跨模态理解，若架构可扩展，可能复现 LLM 时刻的"统一替代碎片化"路径，值得跟踪其技术报告与社区复现。 |
| **[prism-ml/bonsai-image-ternary-4B-gemlite-2bit](https://huggingface.co/prism-ml/bonsai-image-ternary-4B-gemlite-2bit)** | 2bit 三值量化 + GemLite 推理优化的组合，是生成模型压缩的前沿实验。尽管当前零下载（可能未正式发布权重），但其技术路线若验证成功，可将 4B 图像生成模型压至手机可实时运行的量级，边缘生成时代的潜在基础设施。 |
| **[pyannote/speaker-diarization-3.1](https://huggingface.co/pyannote/speaker-diarization-3.1)** | 960 万下载的"隐形冠军"，语音识别 Pipeline 的事实标准。3.1 版本升级值得所有语音应用开发者关注，其说话人分离精度直接影响会议记录、客服分析、播客编辑等海量场景的落地质量。 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*