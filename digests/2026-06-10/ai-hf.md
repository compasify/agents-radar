# Hugging Face 热门模型日报 2026-06-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-10 00:30 UTC

---

# Hugging Face 热门模型日报 | 2026-06-10

---

## 今日速览

本周 Hugging Face 生态呈现**多模态爆发与量化生态成熟**的双重趋势。Google Gemma-4 系列以原生 any-to-any 架构强势登场，Unsloth 迅速跟进全套 GGUF/QAT 量化方案；DeepSeek-V4-Pro 以 4740 点赞断层领跑，验证开源大模型的持续吸引力。NVIDIA 密集布局 Nemotron 3.5 与 Cosmos3，覆盖 ASR、世界模型到超大规模语言模型；中国力量显著，Step-3.7-Flash、Qwen3.6 衍生模型及 PaddleOCR-VL 占据重要席位。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,740 | 4,302,553 | 本周绝对顶流，DeepSeek V4 专业版以 MoE 架构实现对话能力跃升，下载量破 430 万验证其生产级可靠性 |
| **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | google | 810 | 581,354 | Google 新一代统一多模态指令模型，原生支持 any-to-any 交互，12B 参数实现高效部署 |
| **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 733 | 133,351 | 专注人力资源场景的 1B 轻量文本模型，垂直领域微调的代表性案例 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,592 | 2,983,909 | 社区激进去 censored 的 Qwen3.6 MoE 视觉模型，近 300 万下载反映特定需求市场的旺盛 |
| **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)** | nvidia | 174 | 56,864 | NVIDIA 旗舰 550B 总参数/55B 激活参数的 MoE 巨兽，BF16 精度面向高端推理集群 |
| **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4)** | nvidia | 152 | 71,818 | 同上架构的 NVFP4 量化版本，下载反超 BF16，显存效率成为大规模部署首要考量 |
| **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)** | JetBrains | 272 | 17,571 | JetBrains 推出的代码思考型模型，延续 Mellum 系列在 IDE 智能体场景的深耕 |
| **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** | CohereLabs | 155 | 1,784 | Cohere 轻量代码模型，MoE 架构平衡效率与编程能力 |
| **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** | LiquidAI | 572 | 137,138 | 液态神经网络架构的 MoE 迭代，非 Transformer 路线的持续探索获得社区高度关注 |
| **[nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)** / **[nex-agi/Nex-N2-mini](https://huggingface.co/nex-agi/Nex-N2-mini)** | nex-agi | 160/110 | 783/748 | 基于 Qwen3.5 MoE 的 N2 系列，Pro/mini 双版本覆盖不同算力层级 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 1,729 | 123,922 | 视觉定位基础模型，3B 参数实现开放词汇的任意目标定位，机器人/AR 场景潜力巨大 |
| **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** / **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)** | ideogram-ai | 440/287 | 5,915/5,250 | Ideogram 4 代文生图模型双精度版本，FP8/NF4 量化策略对比引发社区对生成质量-效率权衡的讨论 |
| **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)** | google | 164 | 18,216 | Google Magenta 实时音乐生成第二代，TFLite 部署支持边缘设备即时作曲 |
| **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** | ByteDance | 193 | 281 | 字节跳动图像-文本到视频渲染器，Apache-2.0 开源，低下载高关注预示早期技术预览属性 |
| **[jdopensource/JoyAI-Echo](https://huggingface.co/jdopensource/JoyAI-Echo)** | jdopensource | 114 | 4,502 | 京东开源的文生视频模型，基于 LTX-Video 架构，音视频联合生成能力 |
| **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)** | stepfun-ai | 358 | 46,729 | 阶跃星辰 3.7 Flash 视觉语言模型，"Flash" 后缀强调推理速度优化 |
| **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)** | PaddlePaddle | 280 | 10,139 | 百度 PaddleOCR 视觉语言版 1.6，ERNIE4.5 底座强化文档理解，OCR 向通用 VLM 演进 |
| **[nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano)** | nvidia | 214 | 36,739 | NVIDIA Cosmos 3 世界模型 Nano 版，物理仿真与视频生成的底层基础设施 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia | 317 | 4,181 | NVIDIA Nemotron 3.5 流式语音识别，600M 参数+缓存感知设计，实时转录场景专用 |
| **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | bosonai | 282 | 16,207 | Higgs 多模态语音合成第三代，4B 参数基于 Qwen3 架构，TTS 与文本生成统一建模 |
| **[MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS)** | MisoLabs | 173 | 0 | 新兴 TTS 模型，零下载量高点赞反映发布初期的社区期待，语音合成赛道持续升温 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | unsloth | 531 | 660,140 | Unsloth 对 Gemma-4-12B-it 的首发 GGUF 量化，66 万下载验证其量化工具链的社区信任度 |
| **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)** | unsloth | 171 | 127,332 | QAT（量化感知训练）版本，比标准 GGUF 精度更高，Unsloth 技术深度的体现 |
| **[unsloth/gemma-4-26B-A4B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF)** | unsloth | 114 | 96,059 | 扩展至 26B/A4B MoE 架构的 QAT 量化，Unsloth 覆盖 Gemma-4 全系列 |
| **[google/gemma-4-12B-it-qat-q4_0-gguf](https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf)** | google | 114 | 63,049 | Google 官方 Q4_0 QAT 量化，"unquantized" 基底标注透明化量化链路 |
| **[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)** | google | 479 | 122,464 | Gemma-4 基座模型，any-to-any 原生架构的预训练版本 |
| **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)** | OBLITERATUS | 134 | 8,106 | 社区对 Gemma-4-12B 的激进去限制微调，反映开源模型安全边界的持续博弈 |
| **[Comfy-Org/Ideogram-4](https://huggingface.co/Comfy-Org/Ideogram-4)** | Comfy-Org | 111 | 0 | ComfyUI 生态对 Ideogram-4 的适配封装，工作流社区的快速响应 |

---

## 生态信号

**Gemma-4 家族**本周完成从官方发布到社区量化的全链路覆盖，Google 的 any-to-any 统一架构与 Unsloth 的 QAT 技术形成"官方-社区"双轮驱动。**DeepSeek-V4-Pro** 以断层优势证明开源权重模型在性能与热度上已可叫板闭源顶尖产品。NVIDIA 展现最完整的产品矩阵：从 0.6B ASR 到 550B Nemotron Ultra，再到 Cosmos 世界模型，覆盖感知-认知-仿真的全栈布局。量化生态显著成熟——NVFP4 下载反超 BF16、QAT 成为 Unsloth 标配、Google 官方量化标注透明化，均指向**推理效率优先**的产业共识。中国模型力量密集：Step、Qwen 衍生、PaddleOCR、JoyAI、Higgs 等覆盖 VLM、视频、语音、OCR 多赛道。

---

## 值得探索

| 模型 | 推荐理由 |
|:---|:---|
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | 视觉定位是机器人操作、AR 交互的瓶颈环节，3B 参数实现开放词汇定位，轻量可部署，实物智能（Embodied AI）的关键使能器 |
| **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** | 液态神经网络（Liquid Neural Networks）是非 Transformer 架构的重要探索方向，8B/A1B MoE 设计在效率与表现力间寻求新平衡，适合关注架构创新的研究者 |
| **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)** | TFLite 边缘部署 + 实时音乐生成，打开 AI 创作工具"随身化"场景，音乐科技创业者与硬件开发者值得优先评估 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*