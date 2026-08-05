# Hugging Face 热门模型日报 2026-08-05

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-05 01:26 UTC

---

# Hugging Face 热门模型日报（2026-08-05）

## 📌 今日速览

今日榜单由 DeepSeek-V4-Flash、Kimi-K3、GLM-5.2 等头部模型主导，其中 DeepSeek-V4-Flash 以 273.7 万下载登顶流量榜，Kimi-K3 则斩获 10,012 周点赞成为社区热度之王。国产开源大模型继续强势，GLM-5.2、Unlimited-OCR 均进入高下载序列。多模态视频生成赛道迎来 MiniMax-H3 与 ComfyUI/GGUF 生态的迅速跟进，视觉-文本融合模型数量明显增多。量化与微调活动异常活跃，围绕 Qwen3.6/3.5 的 Uncensored/GGUF 衍生模型密集上榜，NVFP4、INT8 等低精度格式也开始在超大模型中加速落地。

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,302 | 433,284 | DeepSeek V4 Flash 系列的 7 月 31 日快照版，定位快速对话生成。下载量仅次于正式版 Flash，体现 DeepSeek 生态的持续热度。 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,820 | 2,234,662 | 智谱 AI 最新旗舰 GLM 5.2，采用 MoE 架构，擅长文本生成与对话。周点赞 4,820、下载超 223 万，是榜单中最具影响力的国产 LLM 之一。 |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 192 | 2,987 | 基于 Qwen3.6 架构的 35B 参数 MoE 模型，仅激活 3B 参数，主打高效推理。社区对 Qwen3.6 的探索已从量化扩展到更高密度的 MoE 变体。 |
| [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 404 | 1,317 | XYZ-Aquila 系列的小体积版本，标签显示基于 Qwen3.5 MoE，面向文本生成与多模态输入。周点赞 404，是新兴实验室布局轻量入口的代表。 |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 153 | 47,393 | LiquidAI 新一代 LFM 2.5 家族中的 2.6B 紧凑模型。适合资源受限部署场景，下载 4.7 万说明其轻量定位确实有受众。 |
| [XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 358 | 1,388 | XYZ-Aquila 的专业旗舰版，支持 agentic-search，面向智能体检索与文本生成。与 mini 版同台上榜，展示该系列从端侧到生产级应用的覆盖。 |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 2,011 | 2,737,621 | DeepSeek V4 Flash 正式版，当前榜单下载量最高的模型。延续 DeepSeek 高效对话能力，成为本周流量绝对标杆。 |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 664 | 37,256 | Nanbeige（百炼智能）推出的 3B 参数 LLM，定位轻量文本生成。周点赞 664，是中小模型赛道的高热度选手。 |
| [LGAI-EXAONE/K-EXAONE-2.0-750B-A37B](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) | LGAI-EXAONE | 117 | 325 | LG AI 的 EXAONE 2.0 巨型 MoE，750B 参数激活 37B，面向韩语/多语种对话。虽然下载量不大，但超大参数规模本身引发关注。 |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 920 | 82,912 | poolside 推出的 Laguna S 2.1 文本生成模型，面向通用对话与推理。周点赞 920、下载 8.3 万，是企业级 LLM 选择中的有力竞争者。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 2,021 | 0 | MiniMax 最新发布的视频生成大模型，支持文本/图像到视频。周点赞 2,021、下载为 0，属于刚发布尚未被大规模拉取的新星。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,012 | 1,125,935 | 月之暗面 Kimi 系列第三代多模态模型，支持图像-文本到文本，并采用压缩张量技术。周点赞 10,012、下载超 112 万，是本周热度最高的模型。 |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 286 | 15,500 | thinkingmachines 的多模态小模型，支持图像与文本输入。周点赞 286、下载 1.55 万，适合端侧多模态推理与交互场景。 |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 247 | 11,276 | Audio8 开源的 TTS 预览版本，0.6B 参数，基于 ArkTTS 架构。周点赞 247，在音频生成赛道逐步吸引开发者关注。 |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 256 | 435,784 | 微软的视觉语言模型 Mage-VL，擅长图像-文本到文本理解。周点赞 256、下载高达 43.6 万，说明大量用户正将其用于视觉问答与多模态应用。 |
| [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 176 | 0 | 面向 KREA 2 的 LoRA 模型，用于文本到图像生成。周点赞 176、下载为 0，属于刚上架的图像风格插件。 |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 410 | 2,072 | 轻量级本地 TTS 模型，支持 CPU/边缘部署，主打低延迟语音合成。周点赞 410，正好切中 edge-ai 与隐私优先的语音需求。 |
| [empero-ai/Qwythos-27B-v1](https://huggingface.co/empero-ai/Qwythos-27B-v1) | empero-ai | 134 | 2,243 | 基于 Qwen3.5 生态的 27B 多模态模型，支持文本与图像输入。周点赞 134、下载 2.2 千，是 Qwen 衍生社区中的新尝试。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,881 | 2,703,366 | 百度开源的 OCR 大模型，定位通用文字识别，支持图文输入与特征提取。周点赞 3,881、下载超 270 万，是下载量最高的专用模型，OCR 需求极度旺盛。 |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 474 | 15,381 | 面向代码生成的开发者模型，基于 Qwen3.5 MoE，可处理图像与文本输入。周点赞 474、下载 1.5 万，主攻编程助手与代码理解任务。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 602 | 2 | Comfy-Org 为 MiniMax-H3 推出的 ComfyUI 适配版本，便于视频生成工作流调用。周点赞 602，象征视频模型生态向 ComfyUI 快速延伸。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,512 | 1,633,405 | DavidAU 制作的 Qwen3.6 27B 社区微调，主打无审查与角色扮演，提供 MTP GGUF 格式。下载量高达 163.3 万，显示无审查微调的巨大需求。 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 470 | 111,678 | Unsloth 对 DeepSeek-V4-Flash-0731 的 GGUF 量化版本，便于本地部署。周点赞 470、下载 11.2 万，与官方原版形成互补生态。 |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 304 | 170,055 | Unsloth 为 Kimi-K3 提供的 GGUF 量化版，支持本地多模态推理。周点赞 304、下载 17 万，直接受益于 Kimi-K3 的原版热度。 |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot) | ethanfel | 188 | 0 | 融合 Qwen3-VL-32B 与 MiniMax-H3 的 ComfyUI 自定义节点，INT8 量化。周点赞 188、下载为 0，属于实验性整合模型。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 364 | 308,857 | 基于 Qwen3.6-35B-A3B 的无审查微调，GGUF 格式，强调角色扮演与创意写作。下载 30.9 万，验证了“Uncensored + MoE”组合的传播力。 |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 265 | 323,116 | Qwen3.5 9B 的社区魔改版，提供 MTP/Imatrix GGUF，同样主打无审查叙事。下载 32.3 万，是 9B 量级最受欢迎的微调之一。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,296 | 1,930,898 | Qwen3.6 35B MoE 的激进人格化微调，GGUF 格式并支持视觉输入。周点赞 3,296、下载 193 万，是量化衍生模型中下载量最高者，社区影响力巨大。 |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 103 | 40,010 | MiniMax-H3 的非官方 GGUF 量化版本，用于本地文本到视频生成。下载 4 万，为视频模型本地部署提供了一条可行路径。 |
| [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 174 | 69,253 | Nota AI 利用 NVFP4 量化的 Solar Open2 250B 模型，面向 vLLM 高效推理。周点赞 174，代表了超大模型低精度部署的前沿方向。 |

## 🌐 生态信号

**模型家族势头**：Qwen 系列（Qwen3.5/3.6）是社区衍生生态的核心，大量微调、GGUF、MoE 变体上榜；DeepSeek-V4-Flash 以官方+GGUF 双版本实现下载霸榜；MiniMax-H3 带动视频生成模型的 ComfyUI/量化生态快速成型。**开源权重 vs 闭源**：榜单中所有模型均可下载权重，开源生态高度繁荣，但高热度背后仍依赖各家的 API 与原版服务。**量化与微调活动**：GGUF 是最主流格式，围绕 Qwen3.6 的无审查微调密集出现；NVFP4、INT8 等新精度开始向视频和超大模型渗透，本地部署与生成式应用的边界正在加速融合。

## 🧪 值得探索

- **moonshotai/Kimi-K3**：周点赞 10,012 的绝对顶流，压缩张量技术让多模态模型更高效，且已有官方 GGUF 可本地部署，非常适合研究前沿多模态架构与端侧推理。
- **MiniMaxAI/MiniMax-H3**：文本/图像生成视频的新方向，发布即带动 ComfyUI、GGUF 等配套生态，适合关注视频生成工具链与多模态工作流的人深入探索。
- **zai-org/GLM-5.2**：国产 MoE 旗舰，223 万下载验证了其在通用对话与推理场景的实用价值，可作为高质量 LLM 基座与评测基准使用。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*