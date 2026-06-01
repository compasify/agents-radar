# Hugging Face 热门模型日报 2026-06-01

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-01 00:26 UTC

---

# Hugging Face 热门模型日报 · 2026-06-01

---

## 今日速览

本周 Hugging Face 生态呈现**多模态爆发与端侧优化并行**的态势。DeepSeek-V4 系列延续强势表现，Pro 版以近 600 万下载量稳居榜首，彰显开源大模型的工程成熟度；Qwen 3.6 家族全面开花，从 27B 稠密模型到 35B MoE 的 NVFP4 量化版本覆盖全场景部署需求；视频生成赛道异军突起，Sulphur-2-base 以 159 万下载量验证开源视频模型的商业化潜力。社区微调活动空前活跃，Uncensored 与 GGUF 量化版本占据热门榜显著位置，反映开发者对可控性与边缘部署的双重追求。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,497 | 5,886,599 | 本周绝对王者，MIT 许可证下的开源对话模型新标杆，下载量碾压级领先 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,319 | 3,483,641 | DeepSeek V4 的轻量高效版本，以速度换规模，适合高并发推理场景 |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,552 | 5,064,096 | 阿里 Qwen 3.6 系列主力型号，视觉-语言统一架构，开源社区最活跃的多模态基座之一 |
| **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** | openbmb | 658 | 36,730 | 面壁智能端侧小模型新迭代，1B 参数挑战边缘设备性能边界 |
| **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** | LiquidAI | 321 | 27,677 | 液态神经网络架构的 MoE 实践，8B 激活 1B 的独特稀疏设计 |
| **[tencent/Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)** | tencent | 440 | 4,226 | 腾讯混元翻译专用大模型，30B 规模聚焦多语言机器翻译任务 |
| **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)** | tencent | 1,094 | 17,471 | 混元翻译小模型，1.8B 参数实现 surprisingly 高的翻译质量，性价比突出 |
| **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 427 | 143,904 | 人力资源领域专用文本模型，垂直场景微调的代表性案例 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 1,469 | 1,590,236 | 开源视频生成黑马，159 万下载验证其作为 Sora 替代方案的生产力价值 |
| **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | bytedance-research | 992 | 2,948 | 字节跳动 any-to-any 统一多模态模型，图像/视频/文本任意转换的架构探索 |
| **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)** | circlestone-labs | 1,610 | 756,861 | ComfyUI 生态热门扩散模型，工作流友好的单文件部署方案 |
| **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | openbmb | 1,082 | 444,679 | 面壁智能视觉语言模型，端侧多模态理解的性能标杆 |
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 595 | 24,586 | NVIDIA 视觉定位模型，3B 参数实现开放词汇的图像内容精准定位 |
| **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)** | meituan-longcat | 439 | 0 | 美团视频数字人新模型，音频/图像驱动视频生成，尚未开放下载即引关注 |
| **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Supertone | 754 | 56,472 | 韩国 Supertone 第三代 TTS，ONNX 推理优化，情感表现力突出 |
| **[OpenMOSS-Team/MOSS-TTS-v1.5](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-v1.5)** | OpenMOSS-Team | 83 | 14,272 | 复旦 MOSS 团队中文 TTS，延迟优化架构，开源中文语音合成基础设施 |
| **[microsoft/Lens](https://huggingface.co/microsoft/Lens)** | microsoft | 149 | 1,959 | 微软文本到图像模型，arXiv 预印本同步发布，学术研究导向 |
| **[nvidia/PiD](https://huggingface.co/nvidia/PiD)** | nvidia | 217 | 498 | NVIDIA 图像超分辨率模型，扩散架构的像素级细节重建 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 1,573 | 306,344 | OpenAI 罕见开源的 token 级隐私过滤模型，transformers.js 支持浏览器部署 |
| **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)** | PaddlePaddle | 117 | 2,731 | 百度飞桨 OCR 视觉语言版，ERNIE 4.5 底座，文档理解一体化 |
| **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)** | numind | 208 | 57,248 | 结构化信息抽取专用模型，基于 Qwen 3.5 微调，票据/表单解析场景 |
| **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)** | NemoStation | 468 | 16,277 | 视频理解小模型，2B 参数实现视频-文本联合推理，Qwen 3.5 架构衍生 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,156 | 2,439,402 | 社区激进去审查版 Qwen 3.6 MoE，244 万下载揭示"无限制"微调的巨大需求 |
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 578 | 926,440 | Unsloth 官方 GGUF 量化，MTP 多 token 预测加速，llama.cpp 生态核心资产 |
| **[LiquidAI/LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF)** | LiquidAI | 133 | 41,828 | 液态神经网络 GGUF 版，边缘部署的另类架构实验 |
| **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** | nvidia | 91 | 105,608 | NVIDIA 官方 NVFP4 量化，35B MoE 的显存极致压缩，Blackwell 硬件协同优化 |
| **[Jackrong/Qwopus3.6-27B-v2-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF)** | Jackrong | 178 | 124,807 | 社区 MTP 优化 GGUF，Qwopus 命名暗示 Qwen+Octopus 工具调用融合 |
| **[Jackrong/Qwopus3.6-27B-v2-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-GGUF)** | Jackrong | 190 | 37,241 | 标准版 Qwopus GGUF，工具调用视觉模型的端侧化尝试 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 467 | 0 | MLX 框架聊天模板修复，Apple Silicon 部署者的刚需工具 |

---

## 生态信号

**Qwen 3.6 家族**已成为本周最强势的开源模型谱系，从 1.8B 到 35B MoE、从稠密到稀疏、从官方到社区量化版本全面覆盖，形成类似 Llama 2 时期的生态繁荣度。**DeepSeek V4** 则以 MIT 许可证和碾压级下载量证明：开源权重模型在性能与开放性上已可正面对抗闭源竞品。值得警惕的是 **"Uncensored" 微调模型的爆发式增长**（HauhauCS 单版本 244 万下载），反映开发者对模型可控性的强烈诉求，也暗示安全对齐与实用需求之间的张力正在加剧。量化层面，**MTP（Multi-Token Prediction）与 GGUF 的深度结合**成为新趋势，Unsloth、社区开发者与 llama.cpp 生态形成高效协作，端侧推理速度进入新阶段。

---

## 值得探索

| 模型 | 推荐理由 |
|:---|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | MIT 许可证 + 588 万下载的"双重认证"，当前开源大模型的工程与性能综合最优解，适合作为生产环境基座或二次开发起点 |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | 159 万下载量的开源视频生成模型极为罕见，其 endpoints_compatible 标签暗示已具备 API 服务能力，可能是视频 AIGC 商业化的关键基础设施 |
| **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | any-to-any 任务标签代表下一代多模态架构方向，单一模型统一处理图像生成、视频生成与跨模态理解，值得跟踪其技术报告与复现可能性 |

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*