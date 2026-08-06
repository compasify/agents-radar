# Hugging Face 热门模型日报 2026-08-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-06 01:24 UTC

---

# Hugging Face 热门模型日报（2026-08-06）

## 今日速览

今日 Hugging Face 榜单呈现“多模态爆发 + 语言模型军备竞赛”双主线：MoonshotAI 的 Kimi-K3 以 10,125 周赞断层领先，成为本周最受关注的多模态大模型；DeepSeek-V4-Flash、GLM-5.2 等旗舰语言模型下载量均突破 200 万，权重开源仍为主要趋势。百度的 Unlimited-OCR 下载量高达 270 万，展示了垂直工具类模型的巨大需求。社区层面，围绕 Qwen3.5/3.6 和 MiniMax-H3 的 GGUF 量化与 Uncensored 微调持续活跃，生态热度集中在“开源基础模型 + 社区再创作”模式。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,849 | 2,234,662 | 智谱最新旗舰 MoE 对话模型，主打高效推理与强对话能力。周点赞接近 5k，下载超 223 万，是本周最热门的纯文本 LLM。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,497 | 433,284 | DeepSeek V4 Flash 的 7 月 31 日版本，专注快速生成与对话场景。点赞与下载双高，说明开发者对其迭代版本高度关注。 |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 2,031 | 2,737,621 | DeepSeek V4 Flash 原版，下载量达 273 万，是当前下载量最高的文本生成模型之一。其高效性和开源权重推动了社区广泛采用。 |
| [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 416 | 1,317 | 基于 Qwen3.5 MoE 架构的小型语言模型，兼顾轻量与多模态输入能力。虽下载不高，但作为 mini 版本适合边缘端研究。 |
| [XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 366 | 1,388 | Aquila 系列的专业版，强化 agentic-search 能力，面向智能体任务。与 mini 版互补，展示了该系列在工具调用方向的探索。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 285 | 47,393 | Liquid AI 推出的 2.6B 小参数语言模型，主打高效部署。下载接近 5 万，表明小型模型在企业级场景中受到关注。 |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 157 | 0 | 一款基于 mixture-of-experts 架构的文本生成预览模型。下载为 0，可能是新发布或需要权限，但 MoE 设计值得跟踪。 |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 156 | 25 | 采用 bailing_hybrid 架构的对话模型，强调速度与轻量化。刚发布不久，下载量较低，属于早期生态观察对象。 |
| [LGAI-EXAONE/K-EXAONE-2.0-750B-A37B](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) | LGAI-EXAONE | 129 | 325 | LG 的巨型 MoE 模型，750B 总参数、37B 激活参数，面向韩语与多语场景。超大规模权重开源是重要信号。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,125 | 1,125,935 | Kimi 最新的多模态大模型，支持图像+文本输入，具备特征提取能力。以 10k+ 点赞断层领跑，成为本周社区最热模型。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 2,497 | 10,841 | MiniMax 的视频生成模型，支持文本到视频、图像到视频及多模态条件生成。周点赞近 2500，是视频生成赛道的有力竞争者。 |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 417 | 2,072 | 轻量级 TTS 模型，强调 CPU 本地运行与边缘 AI 适配。适合离线语音合成场景，下载表现显示了实用性。 |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 308 | 15,500 | 小型多模态对话模型，支持图像与文本输入。下载超 1.5 万，说明小规模多模态模型有一定市场。 |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 276 | 435,784 | 微软出品的多模态视觉语言模型，下载高达 43.5 万。用于图像理解与文本生成，企业级背景加持。 |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 274 | 11,276 | 新一代 TTS 预览模型，0.6B 参数，基于 ArkTTS 架构。旨在生成高自然度语音，下载过万。 |
| [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 191 | 0 | 基于 Krea2 的 LoRA 模型，专攻文本到图像生成。下载为 0 可能刚发布，但 LoRA 形式易与 ComfyUI 集成。 |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 124 | 80 | 英伟达的 11B 语音对话模型，面向实时语音交互场景。上市早期，下载量低但技术背景值得关注。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,908 | 2,703,366 | 百度开源的通用 OCR 模型，支持图像文本识别与特征提取。下载量高达 270 万，是本周下载最高的专用模型。 |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 496 | 15,381 | 面向代码生成与补全的专用模型，基于 Qwen3.5 MoE 架构。开发者版本发布，适合编程任务评测与微调。 |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 131 | 166 | Mistral 推出的安全审查模型，3B 参数，用于内容安全过滤。可配合 vLLM 部署，是开源安全生态的补充。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,588 | 1,633,405 | 基于 Qwen3.6 的 27B 社区微调模型，主打 Uncensored 和多种量化版本。下载超 163 万，是社区微调中的明星。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 755 | 2 | MiniMax-H3 的 ComfyUI 适配版本，便于在 ComfyUI 中直接使用视频生成。虽然下载极少，但为生态工具链重要一环。 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 502 | 111,678 | unsloth 制作的 DeepSeek-V4-Flash GGUF 量化版，显著降低部署门槛。下载超 11 万，说明量化需求旺盛。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 385 | 308,857 | Qwen3.6 35B-A3B 的社区微调，结合 Hermes 数据集与 GGUF 量化。下载超 30 万，Uncensored + MoE 组合极受欢迎。 |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 316 | 170,055 | Kimi-K3 的 GGUF 版本，由 unsloth 提供，方便在 llama.cpp 等本地推理。下载 17 万，紧跟 Kimi-K3 热度。 |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 284 | 0 | Qwen3-VL 32B 的 ComfyUI 量化版本，INT8 + 旋转位置编码改动。面向视觉语言模型的 ComfyUI 部署，新发布暂无下载。 |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 282 | 323,116 | Qwen3.5 9B 的社区微调，包含 NEO Imatrix 及多种 GGUF 格式。下载 32 万，小参数 + 激进微调路线效果显著。 |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 210 | 2,987 | 基于 Qwen3.6 35B-A3B 的权重融合模型，优化 MoE 激活策略。作为社区二次创作，提供不同偏好微调选择。 |
| [empero-ai/Qwythos-27B-v1](https://huggingface.co/empero-ai/Qwythos-27B-v1) | empero-ai | 145 | 2,243 | 基于 Qwen3.5 的 27B 多模态微调模型，支持图像与文本输入。社区实验性作品，下载量低但代表个性化定制方向。 |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 137 | 40,010 | MiniMax-H3 的第三方 GGUF 量化集，便于非 ComfyUI 环境运行。下载 4 万，反映视频模型量化需求增长。 |

## 生态信号

- **模型家族势头**：Qwen 生态（3.5/3.6）持续占据社区微调半壁江山，多个 Uncensored/Heretic 变体下载量极高；DeepSeek-V4 系列原版 + 量化双高，形成“技术+生态”闭环；MiniMax-H3 在视频生成与 ComfyUI 集成上快速渗透。
- **开源 vs 闭源**：榜单全部为开源权重模型，且头部模型下载量动辄百万级，显示开源仍是大模型部署的主流选择；像 LGAI 750B、GLM-5.2 等超大模型也选择开放权重，推动研究社区跟进。
- **量化与微调**：GGUF 版本几乎覆盖所有热门基础模型（DeepSeek、Kimi、MiniMax），unsloth 等第三方工具链成为生态基础；Uncensored 微调虽具争议，但市场需求旺盛，成为社区不可忽视的力量。

## 值得探索

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**：本周点赞王（10k+），多模态能力全面，压缩权重复用技术值得研究，是观察下一代多模态大模型的重要样本。
2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**：视频生成领域的重量级开源模型，支持文本/图像到视频，配合 Comfy-Org 适配已形成工具链，适合视频生成方向研究。
3. **[LGAI-EXAONE/K-EXAONE-2.0-750B-A37B](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B)**：750B 总参数的 MoE 开源模型，仅 37B 激活参数，在超大规模稀疏性、多语能力上提供了难得的开源参照。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*