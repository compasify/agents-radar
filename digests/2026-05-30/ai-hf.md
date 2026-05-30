# Hugging Face 热门模型日报 2026-05-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-30 00:25 UTC

---

# Hugging Face 热门模型日报 | 2026-05-30

---

## 今日速览

本周 Hugging Face 生态呈现**多模态爆发与端侧轻量化并行**的态势。DeepSeek-V4 系列以超 900 万总下载量持续领跑开源大模型，Qwen3.6 家族衍生出密集的社区微调与量化生态（GGUF 版本占据热门榜近 1/3）。视频生成领域迎来 Sulphur-2-base 和 LongCat-Video-Avatar 等新玩家，而 MiniCPM5-1B 则标志着端侧小模型进入"1B 可用"时代。值得关注的是，uncensored 与 aggressive 微调版本的高下载量反映了下游应用的强烈脱敏需求。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,433 | 5,836,444 | 当前开源社区下载量最高的旗舰文本模型，延续 DeepSeek-MoE 架构的推理效率优势，企业级部署首选。 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,292 | 3,382,438 | V4 系列的轻量加速版，MIT 许可证降低商用门槛，平衡性能与成本的务实之选。 |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,522 | 4,858,365 | 阿里通义千问最新开源主力，原生支持图像-文本多模态对话，社区生态最活跃的基座模型之一。 |
| **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)** | tencent | 1,088 | 15,753 | 腾讯混元翻译专用小模型，1.8B 参数实现高质量多语言翻译，垂直场景效率优化代表。 |
| **[tencent/Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)** | tencent | 425 | 3,084 | 30B 总参数/3B 激活的 MoE 翻译大模型，与 1.8B 版形成"大小搭配"的翻译模型矩阵。 |
| **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** | openbmb | 551 | 23,629 | 清华 OpenBMB 第五代端侧小模型，1B 参数挑战 7B 级别性能，边缘设备部署新标杆。 |
| **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** | LiquidAI | 212 | 8,854 | 液态神经网络架构的 MoE 变体，8B 总参数/1B 激活探索非 Transformer 路径的效率极限。 |
| **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 405 | 131,828 | 人力资源场景专用 1B 文本模型，垂直领域微调的高下载量验证行业 LLM 的商业价值。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | bytedance-research | 974 | 2,738 | 字节跳动"任意到任意"统一多模态模型，单架构覆盖图像生成、视频生成与理解，技术路线激进。 |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 1,440 | 1,528,838 | 本周点赞最高的视频生成模型，超 150 万下载验证其开源视频模型的社区号召力。 |
| **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)** | meituan-longcat | 393 | 0 | 美团视频数字人最新版，支持音频+图像/文本驱动视频生成，零下载或因发布即受关注待转化。 |
| **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | openbmb | 1,056 | 428,949 | MiniCPM 视觉增强版，端侧设备运行的高效视觉-语言模型，OCR 与细粒度理解能力突出。 |
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 383 | 7,861 | NVIDIA 推出的视觉定位模型，3B 参数实现开放词汇的图像理解与空间定位，具身智能潜力场景。 |
| **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)** | NemoStation | 444 | 14,727 | 2B 参数视频-文本理解模型，专注视频描述与问答，轻量化视频 LLM 的探索者。 |
| **[microsoft/Lens](https://huggingface.co/microsoft/Lens)** | microsoft | 144 | 1,255 | 微软文本到图像生成模型，附 arxiv 论文链接，学术研究导向的扩散模型新架构。 |
| **[microsoft/Lens-Turbo](https://huggingface.co/microsoft/Lens-Turbo)** | microsoft | 128 | 1,685 | Lens 加速版，推理效率优化后的实用版本，下载量反超原版显示用户对速度敏感。 |
| **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Supertone | 738 | 53,824 | 韩国 Supertone 第三代 TTS 模型，ONNX 格式优化生产部署，情感表现力受创作者社区好评。 |
| **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)** | circlestone-labs | 1,592 | 723,317 | 本周点赞冠军，ComfyUI 原生支持的扩散模型，72 万下载验证其在 AI 绘画工作流中的核心地位。 |
| **[nvidia/PiD](https://huggingface.co/nvidia/PiD)** | nvidia | 176 | 389 | NVIDIA 图像超分辨率模型，扩散架构提升图像质量，低下载或因场景垂直但技术含金量高。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)** | numind | 196 | 49,014 | 结构化信息抽取专用模型，基于 Qwen3.5 架构优化文档解析与关键信息提取，企业数据管道刚需。 |
| **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)** | PaddlePaddle | 100 | 1,171 | 百度飞桨 OCR 视觉语言版，ERNIE4.5 底座增强多模态文档理解，中文场景 OCR 传统强项延续。 |
| **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)** | stepfun-ai | 115 | 1,421 | 阶跃星辰视觉语言模型轻量版，Step 系列首次进入 HF 热门榜，国产多模态新势力试探。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,049 | 2,114,938 | **本周下载量冠军**（211 万+），激进脱敏的 Qwen3.6 MoE 量化版，反映社区对无审查模型的极端需求。 |
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 549 | 841,068 | Unsloth 官方优化的 Qwen3.6 多 token 预测 GGUF 版，84 万下载验证"Unsloth + Qwen"组合的社区信任。 |
| **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)** | unsloth | 414 | 726,514 | 35B MoE 版本的 Unsloth 量化，与 27B 版形成覆盖，MTP 技术提升推理吞吐。 |
| **[Jackrong/Qwopus3.6-27B-v2-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-GGUF)** | Jackrong | 183 | 29,306 | 社区版 Qwen3.6 视觉 GGUF，"Qwopus"命名显示与 Opus 级别的野心定位，小众但忠实用户群。 |
| **[Jackrong/Qwopus3.6-27B-v2-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF)** | Jackrong | 161 | 85,680 | v2 的 MTP 增强版，下载量 3 倍于非 MTP 版，用户用点击投票多 token 预测技术。 |
| **[OBLITERATUS/Qwen3.6-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.6-27B-OBLITERATED)** | OBLITERATUS | 118 | 16,849 | 另一脱敏路线尝试，"OBLITERATED"命名比 "Uncensored" 更激进，但下载量差距显示品牌认知重要性。 |
| **[LiquidAI/LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF)** | LiquidAI | 105 | 5,293 | 液态神经网络 GGUF 版，边缘部署探索非 Transformer 架构的 llama.cpp 兼容性。 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 452 | 0 | Qwen 聊天模板修复集合，MLX 框架适配，零下载但 452 点赞反映开发者工具类模型的"收藏即价值"特性。 |

---

## 生态信号

**Qwen3.6 家族形成最强开源衍生生态**：30 个热门模型中 8 个基于 Qwen3.6，涵盖官方版、Unsloth 量化、社区脱敏微调、MTP 加速等全链条，其 MoE 架构（27B/35B-A3B）成为社区实验首选基座。**DeepSeek-V4 则守住"企业级原生权重"阵地**，Pro + Flash 双版本合计超 900 万下载，证明开源权重在商用基础设施层的不可替代性。

**量化与脱敏成为社区创新的双引擎**：GGUF 格式占据热门榜 40%，Unsloth 成为事实标准工具链；而 "Uncensored/Aggressive/OBLITERATED" 等标签的高下载（合计超 215 万）揭示开源模型在合规审查与自由使用之间的张力。视频生成（Sulphur-2、LongCat）和任意模态统一（Lance）代表生成式 AI 的下一个前沿，但下载量尚未爆发，处于早期采用阶段。

---

## 值得探索

| 模型 | 推荐理由 |
|:---|:---|
| **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | **"any-to-any" 架构的激进实验**：单模型统一图像生成、视频生成与多模态理解，若验证成功将重塑当前"分治式"的多模态模型栈，适合研究统一建模范式的边界。 |
| **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** | **端侧智能的临界点测试**：1B 参数挑战 7B 性能，若真实场景验证通过，将推动手机、IoT 设备的本地 LLM 普及，硬件-算法协同设计的参考样本。 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | **社区需求的极端镜像**：211 万下载量背后的脱敏需求值得严肃分析——是研究安全对齐的反面教材，也是理解开源模型下游真实使用场景的窗口，需辩证审视。 |

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*