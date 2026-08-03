# Hugging Face 热门模型日报 2026-08-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-03 01:46 UTC

---

# 🤖 Hugging Face 热门模型日报 · 2026-08-03

## 一、今日速览

本周榜单呈现"多模态登顶、语言模型集群、量化微调繁荣"三大特征。月之暗面 **Kimi-K3** 以 9,640 点赞断层领跑，成为全站最热模型；**DeepSeek-V4-Flash** 则以 278 万下载位居文本模型下载榜首。开源阵营持续壮大，GLM-5.2、Solar-Open2-250B、AMD Instella 等新老玩家同台竞技。Qwen3.5/3.6 成为社区微调与量化的核心底座，多个 uncensored GGUF 版本集中上榜。百度 **Unlimited-OCR** 以 253 万下载登顶总下载榜，显示专用模型在真实场景中的强劲需求。

## 二、热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,755 | 2,050,533 | 智谱AI开源的 GLM 系列旗舰对话模型，采用 MoE 架构，擅长多轮对话与指令跟随。本周点赞 4,755、下载逾 205 万，是榜单上最热门的原创对话模型之一。 |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,958 | 2,785,810 | DeepSeek V4 系列的高效文本生成版本，主打低延迟对话体验。下载量达 278 万，为本周下载最高的纯文本模型，社区集成与二次开发活跃。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 1,733 | 156,173 | DeepSeek-V4-Flash 的 7 月 31 日官方更新版，基于 arXiv:2606.19348 优化生成能力。与基础版同周上榜，显示 DeepSeek 家族的快速迭代与高关注度。 |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 878 | 80,102 | poolside 推出的 Laguna 系列 2.1 企业级文本生成模型。本周点赞近 900，反映商业实验室开源权重同样能获得社区高度关注。 |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 719 | 14,863 | Upstage 开源的 250B 参数大型语言模型，面向多语言与复杂推理任务。官方权重发布后迅速带动 NVFP4 等量化版本涌现，生态辐射力强。 |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 627 | 33,042 | 北木仓（Nanbeige）推出的 3B 轻量级 LLM，主打高效部署与文本生成。以 600+ 点赞上榜，印证小参数模型在低成本场景中的持续需求。 |
| [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 366 | 903 | XYZ-Aquila 系列的 mini 版本，基于 Qwen3.5-MoE 架构的文本生成模型。点赞靠前但下载量尚小，处于早期关注阶段。 |
| [XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 335 | 1,094 | XYZ-Aquila 系列的 pro 版本，面向 agentic-search（智能体搜索）场景。与 mini 版同周登榜，体现该团队围绕 Qwen 架构的系列化布局。 |
| [amd/Instella-MoE-16B-A3B-Think](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think) | amd | 121 | 1,957 | AMD 推出的 16B-A3B 混合专家模型，基于 DeepSeek-V3 架构并强化推理（Think）能力。作为芯片厂商开源 LLM 的代表作，值得跟踪其推理优化路线。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,640 | 837,202 | 月之暗面发布的 Kimi 系列多模态模型，支持图像-文本理解、特征提取与压缩张量推理。以 9,640 点赞断层领跑全榜，是本周 Hugging Face 关注度最高的模型。 |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 371 | 1,825 | 面向 CPU/边缘设备优化的轻量级本地 TTS 模型，支持文本到语音合成。点赞数居音频类前列，反映本地语音合成需求的上升。 |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 250 | 2,938 | 微软开源的 27B 多模态模型，基于 Qwen3.5 架构，专攻 computer-use（计算机操作）智能体任务。代表大厂在 GUI 自动化智能体方向的开源布局。 |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 227 | 6,839 | thinkingmachines 推出的多模态小模型，支持图像-文本对话。以低成本定位切入端侧多模态场景，适合边缘部署研究。 |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 187 | 272,148 | 微软开源的视觉语言（VL）模型，面向图像理解与视觉问答。下载量达 27 万，是本周下载量较高的多模态模型之一。 |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 179 | 4,314 | Audio8 的 0.6B TTS 预览模型，基于 ArkTTS 技术实现语音合成。预览版即获得近 180 点赞，显示音频生成赛道热度持续升温。 |
| [microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft | 150 | 8,468 | 微软推出的 ASR 语音识别模型，采用 BitNet 低比特架构，并提供 GGUF/GGML 格式。展示了低比特量化在语音识别任务中的可行路径。 |
| [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 126 | 0 | 基于 Krea 2 的文本到图像 LoRA，兼容 ComfyUI 工作流。虽暂无下载量，但已进入热门榜，属于刚发布即受关注的图像生态新资源。 |
| [empero-ai/Qwythos-27B-v1](https://huggingface.co/empero-ai/Qwythos-27B-v1) | empero-ai | 96 | 1,279 | 基于 Qwen3.5 的 27B 多模态模型，支持图像-文本到文本任务。作为 Qwen 衍生多模态模型，体现社区对 Qwen 架构的跨模态复用。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,778 | 2,536,284 | 百度开源的通用 OCR 模型，支持图像文本识别与特征提取，覆盖多类文档场景。以 253 万下载量成为本周下载总榜第一，说明 OCR 在真实业务中需求极为旺盛。 |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 402 | 13,164 | 面向代码生成的开发者版本模型，基于 Qwen3.5-MoE 架构，同时支持图像输入。开发者版本获 400+ 点赞，反映 AI 编程助手类模型的高关注度。 |
| [LiquidAI/LFM2.5-Encoder-350M](https://huggingface.co/LiquidAI/LFM2.5-Encoder-350M) | LiquidAI | 89 | 6,957 | LiquidAI 的 350M 编码器模型，任务为掩码填充（fill-mask），适合表示学习与嵌入场景。可作为检索、RAG 等任务的高性价比骨干模型。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,243 | 1,892,654 | 基于 Qwen3.6-35B-A3B 的社区微调 GGUF，主打 uncensored 风格并支持视觉任务。以 3,243 点赞、189 万下载成为微调/量化分类中最热模型。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,340 | 1,372,285 | DavidAU 制作的 Qwen3.6-27B 社区微调 GGUF，集成 Fable-Fusion、NEO-MAX-MTP 等多种微调与量化技术。下载量超 137 万，是本周最热门的 GGUF 资源之一。 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 340 | 48,707 | unsloth 将 DeepSeek-V4-Flash-0731 转换的 GGUF 量化版本，便于本地与低成本部署。与官方模型同步登榜，显著降低上手门槛。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 300 | 259,237 | 基于 Qwen3.6-35B-A3B 的 Hermes V6 风格微调 GGUF，主打 uncensored 与 MoE 高效推理。下载量达 26 万，是 uncensored 社区的热门选择之一。 |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 250 | 88,481 | unsloth 为 Kimi-K3 提供的 GGUF 量化版，支持多模态对话任务。与原创模型同周上榜，方便本地部署用户快速跟进。 |
| [unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 225 | 1,277 | unsloth 重新打包的 Kimi-K3 版本，保留压缩张量特性并提供更便捷的 transformers 接入。体现 unsloth 对热门新模型的极速跟进能力。 |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 209 | 292,511 | 基于 Qwen3.5-9B 的 uncensored 微调 GGUF，采用 NEO-IMATRIX 与 MTP 量化策略。下载量达 29 万，验证了小参数 uncensored 模型的持久流量。 |
| [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 153 | 68,199 | nota-ai 对 Solar-Open2-250B 的 NVFP4 量化版本，面向 vLLM 推理框架优化。为 250B 级模型在有限显存环境下的部署提供了实用路径。 |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 119 | 2,550 | EschaLabs 对 Qwen3.6-35B-A3B 的社区微调版本（W2），保留 MoE 稀疏激活特性。属于 Qwen3.6 衍生潮中的代表，适合特定任务风格研究。 |

## 三、生态信号

生态呈现"原创头部集中、衍生生态繁荣"的格局：DeepSeek-V4、GLM-5.2、Kimi-K3 领跑原创模型，而 Qwen3.5/3.6 已成为社区微调与量化的核心底座，衍生模型约占榜单三分之一。开源权重仍是绝对主流，微软、AMD、poolside 等厂商持续加码，未见收敛迹象。量化活动以 GGUF 为本地部署标配，NVFP4 等新格式推动 250B 级模型低成本推理；uncensored 风格微调流量可观，反映用户对模型行为控制的强烈需求。

## 四、值得探索

1. **moonshotai/Kimi-K3** — 周点赞近万、全榜第一，融合视觉理解、特征提取与压缩张量技术，是当前多模态技术方向的风向标。
2. **microsoft/Fara1.5-27B** — 大厂在 computer-use（计算机操作）方向的开源多模态智能体模型，适合研究 GUI 自动化与智能体范式。
3. **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** — 微调/量化分类热度之最，189 万下载验证了 MoE + GGUF 的本地部署路线，也是观察社区偏好与模型行为控制的极佳样本。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*