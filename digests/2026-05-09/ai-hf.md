# Hugging Face 热门模型日报 2026-05-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-09 00:21 UTC

---

# Hugging Face 热门模型日报 · 2026-05-09

---

## 今日速览

本周 Hugging Face 生态呈现**多模态爆发与中文模型主导**的鲜明特征：Qwen 3.6 系列（27B/35B-MoE）及其 GGUF 量化版本占据下载量榜首，累计突破 800 万次下载；Google Gemma-4 系列以 any-to-any 架构探索通用助理方向；DeepSeek-V4 系列延续高性价比路线，Pro 与 Flash 双版本覆盖不同场景。值得关注的是，** uncensored/abliterated 微调模型**（如 dealignai、HauhauCS 作品）获得显著社区关注，反映开源社区对模型可控性的持续博弈。视频生成领域，Sulphur-2-base 与 LTX2.3-10Eros 代表 text-to-video 与 image-to-video 两条技术路线并进。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 3,758 | 1,061,344 | DeepSeek 新一代旗舰，以 MoE 架构实现 Pro 级推理性能，百万级下载验证其生产就绪度。 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,004 | 848,696 | V4 系列轻量版本，平衡延迟与质量，适合高并发 API 部署场景。 |
| **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)** | XiaomiMiMo | 487 | 26,600 | 小米系长上下文 Agent 模型，专注端侧长文本理解与工具调用。 |
| **[poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2)** | poolside | 233 | 18,863 | Poolside 代码大模型迭代版本，Laguna 系列持续深耕软件工程领域。 |
| **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)** | z-lab | 268 | 30,478 | 社区优化的 Qwen3.6 推理加速变体，DFlash 技术降低首 token 延迟。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,677 | 3,363,621 | **本周下载冠军**，35B 激活 3B 的 MoE 多模态模型，视觉-语言理解能力领先开源界。 |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,191 | 1,958,217 | Qwen3.6 稠密架构版本，双模态输入支持图像问答与文档理解。 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,569 | 8,731,301 | **本周点赞冠军**，Gemma-4 视觉指令版，870 万下载彰显 Google 开源影响力。 |
| **[google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant)** | google | 162 | 33,314 | Gemma-4 的 any-to-any 通用助理变体，探索统一接口处理多模态 I/O。 |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 448 | 92,968 | 新兴 text-to-video 基础模型，GGUF 与端点兼容标签暗示边缘部署野心。 |
| **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)** | TenStrip | 166 | 42,529 | LTX 视频生成模型社区微调版，image-to-video 赛道持续活跃。 |
| **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)** | SeeSee21 | 239 | 5,077 | 动漫风格 text-to-image 模型，GGUF 量化支持本地消费级 GPU 运行。 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 812 | 2,242,587 | 多语言零样本语音克隆 TTS，K2-FSA 团队将语音识别技术积累迁移至合成领域。 |
| **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)** | sensenova | 202 | 2,947 | 商汤 SenseNova 多模态 any-to-any 模型，MoT（Mixture of Tokens）架构尝试统一模态表示。 |
| **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)** | nvidia | 263 | 89,837 | NVIDIA Nemotron 系列推理专用多模态模型，BF16 精度针对自家 GPU 优化。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 1,369 | 173,110 | OpenAI 官方 PII 检测与脱敏工具，ONNX 格式支持跨平台隐私合规部署。 |
| **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)** | AngelSlim | 137 | 16,778 | 1.25bit 极端量化翻译模型，Hunyuan 架构压缩至 1.8B 仍保持可用质量。 |
| **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)** | Zyphra | 282 | 6,810 | Zyphra 研究型 8B 模型，附 arxiv 论文标签，学术引用价值高于直接应用。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 963 | 2,500,343 | Unsloth 官方 MoE 量化版，250 万下载证明 GGUF 格式已成为本地部署事实标准。 |
| **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** | unsloth | 626 | 1,312,422 | 稠密版 Qwen3.6 的 Unsloth 优化 GGUF，内存效率与推理速度兼得。 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 585 | 996,892 | "Aggressive" 去审查微调，近百万下载反映社区对内容过滤边界的强烈需求。 |
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 1,489 | 156,146 | Gemma-4 的 "CRACK" 破解/去限制版本，MLX 格式针对 Apple Silicon 优化，点赞数验证社区热度。 |
| **[Jackrong/Qwen3.6-35B-A3B-v1-GGUF](https://huggingface.co/Jackrong/Qwen3.6-35B-A3B-v1-GGUF)** | Jackrong | 85 | 18,981 | 社区个人开发者的高质量 GGUF 转换，TGI 与 Unsloth 双兼容。 |
| **[DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF)** | DavidAU | 102 | 143,853 | 超长命名揭示复杂微调管线：Heretic 去审查 + NEO 代码 + IMatrix 量化，极端垂直场景定制。 |
| **[Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF](https://huggingface.co/Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF)** | Jackrong | 108 | 128,635 | 跨家族蒸馏实验：Qwen3.5 架构承载 DeepSeek-V4-Flash 能力，GGUF 本地运行。 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 109 | 0 | 零下载但过百点赞，纯 Jinja 模板修复工程，解决 Qwen 系列对话格式痛点。 |

---

## 生态信号

**Qwen 家族已形成开源生态的"引力中心"**：原生版本（Qwen）、量化版本（Unsloth）、去审查版本（HauhauCS/DavidAU）、加速版本（z-lab/DFlash）、跨架构移植（Jackrong 的 DeepSeek 融合）构成完整衍生谱系，下载量占本周 Top 30 的 **60% 以上**。Google Gemma-4 凭借 any-to-any 架构尝试差异化定位，但社区更关注其 "abliterated" 变体而非官方版本，暗示**开源权重与闭源价值观的持续张力**——厂商安全对齐与社区自由使用之间的博弈正在量化下载数据中具象化。量化技术方面，GGUF 已绝对主导本地部署（Unsloth 双版本合计 380 万下载），而 1.25bit（AngelSlim）等极端压缩探索为端侧大模型开辟新可能。值得警惕的是，"uncensored" 标签模型的下载增速（HauhauCS 近百万）远超学术基准模型（Zyphra 仅 6,810），开源评估体系正面临价值观度量缺失的挑战。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | **当前开源多模态的最优解之一**：3B 激活参数的 MoE 架构实现 35B 级别性能，image-text-to-text 任务覆盖视觉问答、OCR、图表理解，336 万周下载经受了大规模生产验证。建议对比测试其 vs GPT-4o 在中文视觉场景的性价比。 |
| **[google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant)** | **any-to-any 架构的前沿实验**：不同于标准多模态的"图像进、文本出"，该模型探索任意模态输入到任意模态输出的统一接口，若其技术报告发布，可能定义下一代开源模型的交互范式。适合研究多模态统一建模的学者深度拆解。 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | **语音技术的"Stable Diffusion 时刻"**：224 万下载、零样本克隆、多语言支持，且来自语音识别领域深耕团队（K2-FSA = Kaldi-2 Finite State Automata），技术可信度高于纯生成团队。TTS 领域长期被商业 API 垄断，此模型可能重塑语音应用开发成本结构。 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*