# Hugging Face 热门模型日报 2026-08-01

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-01 01:47 UTC

---

# Hugging Face 热门模型日报 · 2026-08-01

## 今日速览

8 月 1 日，Hugging Face 热门榜由 Moonshot AI 的 Kimi-K3 领跑，周点赞超 9,200，并带动 unsloth 的 GGUF/压缩版本上榜。DeepSeek V4 Flash 系列继续保持文本生成领域头部地位，DeepSeek-V4-Flash 下载量累计达 292 万。GLM-5.2、Laguna-S-2.1 与 Solar-Open2-250B 等开源 LLM 同样获得高关注；Qwen3.6 社区微调与 GGUF/量化模型在榜单中形成密集矩阵。百度 Unlimited-OCR 在专用模型方向表现亮眼，多款轻量 TTS/ASR 模型则瞄准边缘部署。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,708 | 1,651,533 | 智谱开源的新一代 MoE 对话模型，采用 glm_moe_dsa 架构。周点赞达 4,708，下载超 165 万，是当前头部开源 LLM 之一。 |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,923 | 2,923,499 | DeepSeek V4 系列的高关注版本，文本生成与对话能力突出。下载量近 292 万，已成为社区主流基座模型。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 1,012 | 0 | DeepSeek V4 Flash 的 0731 迭代版，标注 arxiv 论文并沿用 safetensors 格式。上线即获 1,012 点赞，下载数仍为 0，刚发布不久。 |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 863 | 76,212 | Poolside 的新一代文本生成模型，主打对话与文本生成场景。周点赞 863，下载 7.6 万，属于上升期开源 LLM。 |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 714 | 12,911 | Upstage 开源的大型语言模型，参数规模达 250B。周点赞 714，并已有 NVFP4 量化版本联动上榜。 |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 595 | 26,928 | Nanbeige 发布的小参数 LLM，适合轻量部署与微调。周点赞 595，下载 2.7 万。 |
| [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 352 | 579 | XYZAILab 推出的迷你级文本生成模型，基于 Qwen3.5 MoE 架构。点赞 352，主打轻量与多模态标签探索。 |
| [XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 326 | 869 | 同一系列的 Pro 版本，标注为 agentic-search 方向。点赞 326，下载量暂低，但代表了搜索/代理模型趋势。 |

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,281 | 493,481 | Moonshot AI 的旗舰多模态模型，任务为 image-text-to-text，并带 feature-extraction 与 compressed-tensors 标签。以 9,281 周点赞断层领先，是本周最热模型。 |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,664 | 57,259 | thinkingmachines 的多模态对话模型，支持图像与文本输入。点赞 1,664，下载 5.7 万，是本轮新晋热门。 |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 348 | 1,449 | 轻量级文本转语音模型，专为本地/边缘 CPU 设计。点赞 348，是 TTS 垂直方向代表。 |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 234 | 2,726 | Microsoft 的多模态模型，标注 computer-use 能力，探索计算机操作 agent。点赞 234，体现多模态 agent 方向。 |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 196 | 2,971 | Inkling 的小尺寸版本，适配更低资源环境。点赞 196，与主力模型形成生态互补。 |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 151 | 2,481 | Audio8 的 TTS 预览模型，0.6B 参数。点赞 151，获得音频生成社区关注。 |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 150 | 5,650 | Microsoft 的多模态视觉语言模型，支持图像理解。点赞 150，与 Mage-Flow 形成联动生态。 |
| [microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft | 134 | 5,464 | Microsoft 的 ASR 模型，采用 BitNet 架构并支持 GGUF/GGML 格式。点赞 134，面向语音识别与高效推理。 |
| [owensong/Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2) | owensong | 121 | 802 | Inflect 系列的更小版本，定位 edge-ai。点赞 121，延续轻量 TTS 路线。 |
| [Comfy-Org/Mage-Flow](https://huggingface.co/Comfy-Org/Mage-Flow) | Comfy-Org | 106 | 60,162 | ComfyUI 的单文件流程模型，围绕 microsoft/Mage-Flow 生态。点赞 106，下载 6 万，方便图像生成工作流。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,663 | 2,513,603 | 百度开源的 OCR 模型，任务为 image-text-to-text。点赞 3,663、下载 251 万，是本周专用模型中的实用爆款。 |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 371 | 10,241 | 面向代码生成的开发版模型，结合 Qwen3.5 MoE 能力。点赞 371，下载 1 万，代码垂直领域探索代表。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,205 | 1,835,931 | 社区基于 Qwen3.6 的 Uncensored GGUF 微调，支持视觉与 MoE。周点赞 3,205，下载 183 万，是量化/微调类中最热模型。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,147 | 1,119,057 | 社区融合风格 GGUF，名称包含 uncensored、MTP 等特性。点赞 1,147，下载 111 万，属于高下载长尾模型。 |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,125 | 712,835 | 三元（ternary）量化模型，27B 参数约 2-bit 精度。点赞 1,125，下载 71 万，是极端量化研究代表。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 270 | 212,426 | Qwen3.6 MoE 的 GGUF 微调，uncensored 风格。点赞 270，下载 21 万。 |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 228 | 36,180 | unsloth 提供的 Kimi-K3 GGUF 版本，便于本地部署。点赞 228，下载 3.6 万。 |
| [unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 215 | 1,044 | 压缩/优化版 Kimi-K3，使用 compressed-tensors。点赞 215，是原版模型的轻量替代。 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 183 | 0 | DeepSeek V4 Flash 的 GGUF 量化版，发布不久下载为 0。点赞 183，社区关注度高。 |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 174 | 261,856 | 基于 Qwen3.5 9B 的 GGUF 微调，包含 IMATRIX 与 MTP 特性。点赞 174，下载 26 万。 |
| [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 151 | 18,531 | Solar-Open2-250B 的 NVFP4 量化版，适配 vLLM 推理。点赞 151，下载 1.85 万。 |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 107 | 599 | Qwen3.6 MoE 的 2-bit 权重版本，面向极限压缩。点赞 107，属前沿量化尝试。 |

## 生态信号

本周榜单显示，Moonshot Kimi-K3 与 DeepSeek V4 家族处于第一梯队：Kimi-K3 以多模态 + 压缩特性位居人气榜首，DeepSeek V4 Flash 则成为下载量王牌。GLM-5.2、Solar-Open2、Laguna 等开源权重模型持续扩大生态。特别值得关注的是 Qwen3.6/3.5 衍生模型大量涌现，围绕 uncensored、MoE 和 GGUF 的社区微调活动非常活跃；三元/2-bit/GGUF/NVFP4 等量化路线并存，显示本地部署与极致压缩成为重要方向。整体上，开源权重仍是 HF 主流，头部厂商与社区协作推进多模态、语音与高效推理。

## 值得探索

- **moonshotai/Kimi-K3**：本周点赞第一，既是多模态模型又采用 compressed-tensors，适合研究高效多模态推理与特征提取。
- **deepseek-ai/DeepSeek-V4-Flash**：下载量近 292 万，是当前开源文本生成基座的有力候选，值得做指令微调与部署验证。
- **prism-ml/Ternary-Bonsai-27B-gguf**：三元/2-bit 量化的 27B 模型，代表极端压缩前沿，适合资源受限场景与量化方法研究。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*