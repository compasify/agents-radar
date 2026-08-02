# Hugging Face 热门模型日报 2026-08-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-02 01:43 UTC

---

# Hugging Face 热门模型日报（2026-08-02）

## 📌 今日速览

本周 Hugging Face 榜单由多模态模型领跑：月之暗面 **Kimi-K3** 以 9,489 周赞一骑绝尘。下载量方面，**DeepSeek-V4-Flash** 与百度 **Unlimited-OCR** 分别突破 281 万和 245 万，是社区部署最活跃的模型。国内开源力量表现突出，**GLM-5.2**、**DeepSeek-V4 系列**、**Qwen3.6 衍生模型**均占据多个席位。量化与微调生态同样火热，GGUF、NVFP4、三值量化及 uncensored 微调版本大量出现。整体来看，开放权重模型仍是主流，多模态、专用 OCR/ASR 与端侧效率成为本周关键词。

---

## 🧠 语言模型

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,737 | 1,683,442 | 智谱最新一代 MoE 对话模型，支持长上下文与对话场景。周赞与下载双高，是本周最受关注的中文 LLM 之一。 |
| [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,948 | 2,814,414 | DeepSeek 的轻量化生成模型，主打高性能文本生成。下载量位居全榜前列，说明开发者部署热情极高。 |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 1,429 | 15,366 | DeepSeek-V4-Flash 的 0731 快照版本，附带 arXiv 论文引用。适合复现和研究最新迭代。 |
| [Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 868 | 77,021 | poolside 推出的工程/通用文本生成模型，聚焦高可靠生成。关注度稳步上升。 |
| [Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 717 | 13,426 | Upstage 的 250B 规模开放权重模型，面向多语言生成。开源大参数路线的重要代表。 |
| [Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 611 | 27,892 | 小尺寸高效 LLM，适合资源受限场景。以 3B 规模获得不错的社区关注。 |
| [XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 357 | 650 | 轻量级文本生成模型，基于 Qwen3.5-MoE 架构。偏研究与实验性质的发布。 |
| [XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 330 | 923 | Aquila 系列 Pro 版本，面向 agentic-search 等智能体场景。mini 的进阶版，值得关注。 |

---

## 🎨 多模态与生成

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,489 | 559,924 | 月之暗面多模态模型，支持图像+文本输入。周点赞断层第一，成为本周 Hugging Face 最热模型。 |
| [Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,672 | 59,076 | thinkingmachines 的多模态对话模型，主打综合推理能力。周点赞高，社区关注度强。 |
| [Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 361 | 1,565 | 面向本地 CPU/边缘设备的轻量 TTS 模型。适合离线语音合成场景。 |
| [Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 242 | 2,775 | 微软的 27B 多模态模型，面向 computer-use 智能体场景。将视觉理解与操作能力结合。 |
| [Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 213 | 3,998 | Inkling 的小型版本，保留多模态对话能力同时降低推理成本。适合快速验证。 |
| [Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 172 | 10,525 | 微软视觉-语言多模态模型，面向通用图像理解。下载量说明已有实际应用需求。 |
| [Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 166 | 3,254 | 0.6B 参数 TTS 预览版，支持语音合成与音频特征提取。预览阶段即获得一定关注。 |
| [Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 95 | 0 | 基于 Krea2 的文本到图像 LoRA。面向 ComfyUI 工作流，适合风格化生成定制。 |

---

## 🔧 专用模型

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,714 | 2,457,387 | 百度的通用 OCR 模型，支持图像文本识别与特征提取。下载量全榜最高，是本周最实用的专用模型之一。 |
| [KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 391 | 10,771 | 专注于代码生成的开发者版模型，基于 Qwen3.5-MoE 扩展。Dev 版本面向编程任务持续迭代。 |
| [VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft | 141 | 5,835 | 微软的 BitNet 架构自动语音识别模型，支持 GGUF/GGML 格式。体现高效 ASR 的端侧部署趋势。 |
| [LFM2.5-Encoder-350M](https://huggingface.co/LiquidAI/LFM2.5-Encoder-350M) | LiquidAI | 87 | 6,190 | LiquidAI 的 350M 编码器模型，面向表示学习与 fill-mask。适合嵌入/特征提取等下游任务。 |

---

## 📦 微调与量化

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,226 | 1,823,436 | 基于 Qwen3.6 的社区微调 GGUF 模型，主打 uncensored 与激进风格。下载量超高，说明细分社区需求活跃。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,236 | 1,173,001 | DavidAU 的高阶社区微调多模态 GGUF 模型，集成 MTP 与 NEO 等特性。以 uncensored/风格化输出为特色。 |
| [Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,134 | 716,341 | 27B 规模的三值（ternary）量化 GGUF 模型。用 2-bit 级精度实现本地化部署，是量化社区的重要亮点。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 288 | 228,610 | Qwen3.6 的社区 Hermes 风格微调多模态 GGUF。主打 uncensored 与 MoE 效率，下载表现强劲。 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 289 | 4,048 | Unsloth 为 DeepSeek-V4-Flash-0731 提供的 GGUF 量化版本。方便本地推理与快速部署。 |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 186 | 267,572 | 基于 Qwen3.5 的 9B 社区微调多模态 GGUF 模型。以 NEO Imatrix 和 MTP 为特色，适合本地部署。 |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 243 | 41,337 | Unsloth 的 Kimi-K3 GGUF 量化版，保留多模态能力。为 Kimi-K3 提供轻量化本地入口。 |
| [unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 221 | 1,072 | Unsloth 对 Kimi-K3 的 compressed-tensors 优化版本。主打特征提取与压缩推理。 |
| [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 151 | 22,396 | Solar-Open2-250B 的 NVFP4 量化版。面向 vLLM 推理优化，兼顾大模型质量与显存效率。 |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 112 | 875 | EschaLabs 基于 Qwen3.6 的 MoE 社区适配版。W2 变体聚焦稀疏专家混合的效率与可控性。 |

---

## 🌐 生态信号

模型家族方面，**Kimi、DeepSeek V4、GLM、Qwen3.6/3.5 和 Solar Open2** 形成明显梯队；头部模型通常伴随 Unsloth/DavidAU 等社区的即时量化版本。开源权重继续占据绝对主导，热门模型均可直接下载，闭源 API 模型未见上榜。量化活动集中在 GGUF 与 NVFP4：**Ternary-Bonsai-27B** 代表三值量化走向实用，**Solar-Open2-250B 的 NVFP4** 是大模型推理优化的重要方向。微调层面，Qwen3.6 的 uncensored 社区版本下载量巨大，反映个性化与细分需求的持续活跃。

---

## 🔭 值得探索

1. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**：周赞近万的多模态模型，适合研究图像-文本融合与压缩张量推理；Unsloth 已提供 GGUF/压缩版，落地成本更低。  
2. **[Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：下载量全榜最高的专用模型，通用 OCR 能力可直接用于文档/图像文字提取，适合作为生产级组件。  
3. **[Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**：三值量化 27B LLM，是探索 2-bit 级本地部署的重要样本，适合资源受限但有高智能需求的场景。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*