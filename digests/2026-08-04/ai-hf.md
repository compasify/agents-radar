# Hugging Face 热门模型日报 2026-08-04

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-04 01:22 UTC

---

# Hugging Face 热门模型日报（2026-08-04）

## 今日速览

Kimi-K3 以 9,850 周赞登顶，成为本周最受关注的多模态 LLM；百度 Unlimited-OCR 则以 260 万下载量拿下下载榜冠军。DeepSeek V4 Flash 双版本同时上榜，且 unsloth 已提供 GGUF，说明前沿模型正在快速进入本地部署周期。MiniMax-H3 视频生成模型上线即获 1,464 赞，但当前下载为 0，值得关注开放形式。社区围绕 Qwen3.5/3.6 的 35B-A3B MoE 展开大量微调与 GGUF/INT8 量化，是本轮生态的重要现象。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,797 | 2,180,509 | 智谱最新的 MoE 文本生成模型，定位中英文对话与通用生成。点赞超 4.7k、下载超 218 万，是本周头部开源模型之一。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,058 | 236,076 | DeepSeek V4 Flash 的 7/31 版本，主打对话与文本生成。以较低推理成本提供接近旗舰的生成能力，适合快速部署。 |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,990 | 2,746,291 | DeepSeek V4 Flash 的通用对话版本。下载量超过 274 万，是榜单中下载量最高的文本生成模型之一。 |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 909 | 81,584 | poolside 发布的 Laguna 系列文本生成模型。关注软件开发与企业场景，语言模型能力值得关注。 |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 652 | 34,705 | 3B 参数轻量 LLM，适合低成本、端侧或私有化部署。中文与通用文本生成能力均衡，已获得 34k+ 下载。 |
| [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 391 | 1,063 | 基于 Qwen3.5 MoE 的轻量文本生成模型，同时带有 image-text-to-text 标签。可作为 Aquila 系列小型化方向的实验样本。 |
| [amd/Instella-MoE-16B-A3B-Think](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think) | amd | 148 | 2,078 | AMD 的 Instella MoE，16B 总参数、3B 激活，带有 DeepSeek-V3 相关架构特征。定位高效思考与推理场景。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,850 | 967,622 | 月之暗面最新多模态 LLM，支持图像+文本输入并输出文本。9,850 周赞断层第一，压缩张量与特征提取是亮点。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 1,464 | 0 | MiniMax 官方视频生成模型，支持文本/图像到视频。上线即获高赞，但当前下载为 0，可能尚未开放实际权重或文件。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 446 | 2 | Comfy-Org 为 MiniMax-H3 准备的 ComfyUI 集成入口。虽不是模型本体，但说明视频生成工作流生态已快速跟进。 |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 398 | 1,944 | 轻量本地 TTS，主打 CPU 与边缘设备语音合成。398 赞但下载不足 2k，适合离线部署语音场景。 |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 264 | 8,504 | thinkingmachines 出品的小型多模态理解模型。专注图像+文本到文本，适合轻量级多模态应用。 |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 231 | 431,487 | 微软推出的多模态视觉语言模型，支持图像文本理解。下载量 43 万，说明研究与应用关注度较高。 |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 212 | 4,609 | 0.6B 参数的开源 TTS 预览版，使用 ArkTTS 相关技术。目前仍处于早期发布阶段。 |
| [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 159 | 0 | 面向 Krea 2 的 LoRA 文生图模型。当前下载为 0，属于刚发布的风格化生成实验。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,846 | 2,601,062 | 百度开源的 OCR 模型，能够从图像中提取文本与结构化信息。下载量 260 万，是本周下载最多的模型。 |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 445 | 14,339 | 基于 Qwen3.5 MoE 的代码生成与开发助手模型。定位开发者工具链，点赞 445、下载 14k。 |
| [XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 351 | 1,214 | Aquila 系列 Pro 版本，强调 agentic-search（智能体搜索）。适合结合搜索与推理的智能体场景。 |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 268 | 2,988 | 微软的多模态智能体模型，强调 computer-use（电脑操作）。能理解屏幕并辅助执行界面操作，属于自动化智能体方向。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,269 | 1,895,741 | 基于 Qwen3.6 35B-A3B 的 Uncensored + 视觉 GGUF 版本。点赞 3,269、下载接近 190 万，是社区量化和微调板块的顶流。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,431 | 1,550,034 | 社区超长命名的 Qwen3.6 微调/合并 GGUF，强调 uncensored 和 MTP。下载 155 万，极受本地部署玩家欢迎。 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 429 | 69,656 | unsloth 为 DeepSeek V4 Flash 提供的 GGUF 量化版本。让 V4 可以更轻松地跑在 llama.cpp 等本地推理环境中。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 342 | 287,745 | Qwen3.6 35B-A3B 的 Hermes/Uncensored 社区 GGUF。下载 28.8 万，是角色扮演与本地生成的热门选择。 |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 282 | 128,215 | Kimi-K3 的 GGUF 版本，便于本地多模态推理。下载 12.8 万，是 Kimi 生态快速向部署侧延伸的信号。 |
| [unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 242 | 1,324 | unsloth 对 Kimi-K3 的压缩张量（compressed-tensors）版本。点赞 242，属于 Kimi 生态里的补充量化/加速选项。 |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 237 | 304,420 | 9B 量级社区 GGUF，主打 Defiant/Uncensored/NEO-Imatrix 等标签。下载 30.4 万，适合低成本本地文本生成。 |
| [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 168 | 68,778 | Solar Open2 250B 的 NVFP4 量化版，面向 vLLM 部署。在大参数模型推理中兼顾内存与速度。 |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 155 | 2,682 | 基于 Qwen3.6 35B-A3B 的 MoE 社区微调。激活参数仅 3B，适合在有限资源下尝试 MoE 微调效果。 |
| [empero-ai/Qwythos-27B-v1](https://huggingface.co/empero-ai/Qwythos-27B-v1) | empero-ai | 118 | 1,736 | 基于 Qwen3.5 的 27B 多模态社区微调。点赞 118，是新出现的 Qwen 生态实验模型。 |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot) | ethanfel | 93 | 0 | 集 Qwen3-VL、MiniMax-H3、ComfyUI、INT8 等多重标签于一身的实验包。目前下载为 0，更像 ComfyUI/量化实验示例。 |

## 生态信号

从模型家族看，Qwen3.5/3.6 衍生模型占据最多席位，且以 35B-A3B MoE 为底座的 Uncensored/GGUF 变体尤为活跃；Kimi-K3、DeepSeek-V4-Flash、GLM-5.2 等中国团队开源权重模型形成头部效应。MiniMax-H3 与 ComfyUI 的联动，说明视频生成正在进入工作流生态。量化方面，GGUF 仍是本地部署主流，NVFP4、compressed-tensors、INT8 等也在大模型推理中被采用。社区微调倾向明显：长命名、Uncensored、角色/UI/搜索方向的高赞模型，反映开源使用者对个性化、本地化和去审查的强烈需求。

## 值得探索

- **moonshotai/Kimi-K3**：周赞第一，代表当前多模态 LLM 的热点方向，值得研究其 compressed-tensors 与图像文本理解能力。
- **baidu/Unlimited-OCR**：下载量最高，说明 OCR/文档理解仍有巨大实用需求，适合做中文识别与信息抽取评测。
- **MiniMaxAI/MiniMax-H3**：视频生成新势力，下载为 0 却获得高赞；值得跟踪其权重/API 开放方式，以及 ComfyUI 工作流生态的后续演进。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*