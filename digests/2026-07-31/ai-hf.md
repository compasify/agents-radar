# Hugging Face 热门模型日报 2026-07-31

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-31 01:46 UTC

---

# Hugging Face 热门模型日报（2026-07-31）

## 今日速览

- 周榜点赞冠军是 `moonshotai/Kimi-K3`，斩获 9,012 赞；`Qwen/Qwen3.6-35B-A3B` 则以 619 万下载量成为社区最热门“基座”。
- `zai-org/GLM-5.2`、`baidu/Unlimited-OCR` 分别代表通用对话与垂直 OCR，均同时获得高赞和高下载。
- Qwen3.6 系列衍生 GGUF/微调版本大量上榜，已形成“官方基座 + 社区重制”的生态循环。
- 音频方向明显升温：TTS、ASR 模型集中出现，且偏向 CPU/edge 与 BitNet 等低比特路线。
- 微软、AMD、百度等大厂密集发布多模态、Agent、语音模型，开源权重生态竞争进一步加剧。

## 热门模型

### 🧠 语言模型

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 847 | 73,246 | 通用文本生成模型，定位高质量开放权重 LLM。周榜点赞与下载均位居中上，说明其生成能力获得社区认可。 |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 582 | 24,542 | 3B 参数轻量级 LLM。以较小规模进入周榜，适合作为低资源部署和蒸馏研究的对象。 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,682 | 1,527,760 | GLM 系列最新对话模型，采用 MoE-DSA 架构。4,682 赞与 152 万下载，是榜单上热度最高的通用对话模型之一。 |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 702 | 12,411 | Upstage 的开源 250B 参数文本生成模型。高参数规模与开放权重使其成为大模型研究的高价值样本。 |
| [amd/Instella-MoE-16B-A3B-Think](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think) | amd | 94 | 1,315 | AMD 发布的 16B 激活 3B MoE 推理/思考模型。基于 DeepSeek-V3 架构，代表芯片厂商加速进入开源模型生态。 |

### 🎨 多模态与生成

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,012 | 387,822 | Moonshot 的轻压缩多模态模型，支持图像到文本、特征提取。以 9,012 赞领跑周榜，是当日最受关注的新模型。 |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 321 | 1,100 | 面向 CPU/边缘推理的轻量 TTS 模型。下载不多，但体现本地语音合成从云端走向设备端的方向。 |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 223 | 2,316 | 微软 27B 图像-文本模型，带 computer-use 标签，面向计算机操作智能体。上榜反映大厂在 GUI Agent 方向的布局。 |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,654 | 45,658 | 多模态对话模型，主打图文理解与交互。1,654 赞和 4.5 万下载，使其成为社区关注的多模态新势力。 |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 126 | 225 | 0.6B 参数 TTS 预览模型，使用 arktts 标签。虽然点赞/下载少，但新 TTS 模型的早期版本值得跟踪。 |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 121 | 2,951 | 微软视觉语言多模态模型，标签为 multimodal。作为 Mage 系列的多模态版本，进入周榜说明视觉基础模型仍在扩张。 |
| [owensong/Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2) | owensong | 119 | 654 | Inflect 系列更小的 TTS 模型，面向 CPU/edge。与 Micro 版本携手出现，显示同一产品线的多尺寸覆盖。 |
| [microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft | 120 | 3,864 | 基于 BitNet 的 ASR 模型，支持 GGML/GGUF。将语音识别与超低比特结合，是边缘 AI 方向的新探索。 |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 117 | 840 | Inkling 的小型多模态版本。保留图文对话能力同时降低资源占用，适合社区实验与轻量部署。 |
| [Comfy-Org/Mage-Flow](https://huggingface.co/Comfy-Org/Mage-Flow) | Comfy-Org | 97 | 44,714 | ComfyUI 单文件 diffusion 流程，底座为 microsoft/Mage-Flow。97 赞但 4.4 万下载，说明作为生成工作流组件被大量使用。 |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,595 | 6,119,519 | 官方 Qwen3.6 多模态 MoE，35B 总参数/3B 激活。下载量突破 610 万，是当前社区衍生态的绝对基座。 |

### 🔧 专用模型

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,583 | 2,598,659 | 百度通用 OCR 模型，支持图像到文本识别。3,583 赞与 260 万下载，是榜单上下载量最高的专用模型之一。 |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 351 | 9,225 | 代码生成模型，基于 Qwen3.5 MoE 架构并打上 code 标签。开发者预览版，面向代码助手场景。 |
| [fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 240 | 9,820 | 1B 参数文本生成模型，带 security 标签。小体量安全垂直模型，展示专用模型的轻量化方向。 |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 351 | 57,439 | Qwen3.5 架构的 OCR 模型。351 赞、5.7 万下载，在通用 OCR 外提供新的开源选项。 |

### 📦 微调与量化

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,035 | 955,767 | 社区对 Qwen3.6 27B 的精细微调 + GGUF 版本，包含 uncensored 标签。1,035 赞和 95.5 万下载，是社区“重制”热的代表。 |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 209 | 12,178 | Kimi-K3 的 GGUF 量化版。方便本地部署，是官方模型与桌面/小服务器之间重要的桥梁。 |
| [unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 176 | 766 | Unsloth 的 Kimi-K3 再发布版本，使用压缩张量/特征提取标签。与 GGUF 版共同构成 Kimi-K3 的本地化工具链。 |
| [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 147 | 7,755 | Solar-Open2-250B 的 NVFP4 量化版本，面向 vLLM 部署。147 赞表明 4-bit 级高精度量化仍是重要方向。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 241 | 162,394 | 基于 Qwen3.6 35B MoE 的 GGUF 社区版，带 Hermes/uncensored 属性。16.2 万下载，证明去审查微调在开源社区的稳定需求。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,190 | 1,803,090 | 另一款 Qwen3.6 35B MoE 的 GGUF/uncensored 微调。3,190 赞和 180 万下载，是 Qwen3.6 衍生生态中传播最广的版本之一。 |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,116 | 697,666 | 采用三元权重的 27B GGUF 模型（约 2-bit 级）。69.7 万下载显示极低比特量化在社区有大量本地部署需求。 |
| [unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 259 | 159,331 | Laguna-S-2.1 的 GGUF 量化版，标注支持 vLLM。15.9 万下载使其成为该模型本地运行的主要入口。 |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 159 | 248,173 | DavidAU 另一款 Qwen3.5 9B GGUF，提供 NEO Imatrix/MTP GGUF 等变体。24.8 万下载，延续其系统化量化 + 微调风格。 |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 94 | 201 | EschaLabs 的 Qwen3.6 MoE 变体，命名中 W2 指向 2-bit 级低比特权重。虽然下载量小，但代表新玩家进入超低比特量化赛道。 |

## 生态信号

Qwen3.6 是目前最强势的家族：官方模型下载超 600 万次，并带动至少 6 个衍生 GGUF/微调版本进入周榜，形成“官方基座 + 社区重制”的循环。Moonshot、GLM、Upstage 等开源权重模型也保持高热度。闭源 vs 开源的天平继续向 open weights 倾斜，且微软、AMD、百度等大厂也在拥抱开放生态。量化活动集中在本地化、边缘与超低比特：GGUF 仍是主流，NVFP4、Ternary、W2 等新兴格式开始登上主流榜单。微调方向则以 uncensored、角色化/风格化以及 MTP/imatrix 技术细节为卖点，显示社区需求已从“能跑”转向“便宜、快、可控”。

## 值得探索

- [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)：周点赞第一，融合图像理解、特征提取和压缩张量，是观察下一代多模态架构的必选模型。
- [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)：下载量 619 万，几乎所有 Qwen3.6 衍生 GGUF/微调都基于它；研究社区生态和 MoE 多模态的起点。
- [microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet)：BitNet + ASR + GGUF 组合很少见，适合关注边缘 AI 和超低比特语音识别的人。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*