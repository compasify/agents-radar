# Hugging Face 热门模型日报 2026-05-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-26 00:24 UTC

---

# Hugging Face 热门模型日报 | 2026-05-26

---

## 今日速览

DeepSeek-V4-Pro 以 4,274 点赞领跑全榜，下载量突破 480 万，巩固了其作为开源大模型标杆的地位。Qwen 3.6 系列呈现爆发态势，官方版本与社区量化/微调模型共占据 8 个席位，形成强大的生态矩阵。视频生成赛道持续升温，Sulphur-2-base 下载量高达 135 万，Anima 和 LongCat-Video-Avatar 等新面孔加入竞争。值得关注的是，腾讯 Hy-MT2 系列在翻译垂直领域形成 1.8B 到 30B-A3B 的完整模型谱系，而 CohereLabs 与 openbmb 则在多模态理解方向持续发力。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,274 | 4,820,866 | 当前开源社区最强通用大模型之一，对话与推理能力全面领先，下载量断层第一 |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,451 | 4,423,521 | 阿里通义千问最新一代旗舰，原生支持图像理解，官方权重下载量逼近 DeepSeek |
| **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 313 | 90,026 | 面向人力资源管理的专用 1B 轻量模型，垂直场景落地导向明确 |
| **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** | openbmb | 143 | 2 | MiniCPM 系列新一代端侧小模型，仅 1B 参数但性能对标更大模型 |
| **[nvidia/Nemotron-Labs-Diffusion-14B](https://huggingface.co/nvidia/Nemotron-Labs-Diffusion-14B)** | nvidia | 100 | 5,195 | NVIDIA 实验室推出的扩散式语言模型，探索生成范式新路径 |
| **[OBLITERATUS/Qwen3.6-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.6-27B-OBLITERATED)** | OBLITERATUS | 95 | 7,701 | 社区激进去对齐版本，反映部分开发者对模型安全边界的探索需求 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 1,349 | 1,354,786 | 本周下载量冠军，社区热门文本到视频生成基座，支持 GGUF 与 API 部署 |
| **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)** | circlestone-labs | 1,545 | 651,655 | 高点赞低说明的"神秘"扩散模型，ComfyUI 生态兼容，社区热度极高 |
| **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | bytedance-research | 817 | 1,679 | 字节跳动 any-to-any 统一多模态模型，支持图像/视频生成与跨模态理解 |
| **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | openbmb | 943 | 285,414 | 端侧视觉语言模型新标杆，4.6 版本在 OCR 与细粒度理解上大幅提升 |
| **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)** | meituan-longcat | 223 | 0 | 美团开源视频数字人模型，支持音频/图像/文本多条件驱动视频生成 |
| **[stabilityai/stable-audio-3-medium](https://huggingface.co/stabilityai/stable-audio-3-medium)** | stabilityai | 96 | 0 | Stability AI 第三代音频生成模型，专注音乐与音效创作 |
| **[microsoft/Lens-Turbo](https://huggingface.co/microsoft/Lens-Turbo)** | microsoft | 88 | 695 | 微软轻量文本到图像模型，附带 arXiv 论文，学术工业结合 |
| **[Efficient-Large-Model/SANA-WM_bidirectional](https://huggingface.co/Efficient-Large-Model/SANA-WM_bidirectional)** | Efficient-Large-Model | 105 | 0 | 双向图像到视频生成模型，支持相机运动控制，技术路线独特 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)** | tencent | 806 | 5,552 | 腾讯混元翻译系列轻量版，1.8B 参数实现高效机器翻译 |
| **[tencent/Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)** | tencent | 325 | 1,494 | 30B 总参数/3B 激活的 MoE 翻译大模型，专业级翻译质量 |
| **[tencent/Hy-MT2-7B](https://huggingface.co/tencent/Hy-MT2-7B)** | tencent | 158 | 3,060 | 混元翻译系列中杯模型，覆盖从边缘到云端的全场景部署 |
| **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)** | numind | 137 | 17,501 | 结构化信息抽取专用模型，基于 Qwen3.5 架构优化文档理解 |
| **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Supertone | 672 | 45,800 | 韩国 Supertone 第三代 TTS 模型，ONNX 格式优化推理效率 |
| **[ResembleAI/Dramabox](https://huggingface.co/ResembleAI/Dramabox)** | ResembleAI | 253 | 1,498 | 戏剧化语音合成与声音克隆，面向有声内容与角色配音 |
| **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)** | NemoStation | 343 | 7,291 | 视频理解专用模型，基于 Qwen3.5 架构实现视频到文本生成 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 852 | 1,392,596 | 本周下载量亚军，激进去审查的 Qwen3.6 MoE 量化版，社区需求极端旺盛 |
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 479 | 695,277 | Unsloth 官方优化的 Qwen3.6 多 token 预测 GGUF，推理效率显著提升 |
| **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)** | unsloth | 370 | 578,580 | MoE 架构的 MTP-GGUF 版本，以更低激活参数实现大模型效果 |
| **[Jackrong/Qwopus3.6-27B-v2-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-GGUF)** | Jackrong | 128 | 12,677 | 社区个人开发者维护的 Qwen 量化系列，v2 版本持续迭代 |
| **[Jackrong/Qwopus3.6-27B-v2-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF)** | Jackrong | 92 | 23,762 | 加入多 token 预测的社区版本，MTP 技术正在社区快速普及 |
| **[Jackrong/Qwopus3.5-9B-Coder-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-GGUF)** | Jackrong | 188 | 42,644 | 专注代码能力的 9B 量化模型，填补轻量级代码助手空白 |
| **[CohereLabs/command-a-plus-05-2026-w4a4](https://huggingface.co/CohereLabs/command-a-plus-05-2026-w4a4)** | CohereLabs | 200 | 7,449 | Cohere 官方 W4A4 量化版 Command A+，展示大模型极致压缩方案 |
| **[CohereLabs/command-a-plus-05-2026-bf16](https://huggingface.co/CohereLabs/command-a-plus-05-2026-bf16)** | CohereLabs | 120 | 12,824 | BF16 精度官方版本，与量化版形成完整部署选项 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 406 | 0 | 修复 Qwen 聊天模板的社区工具，MLX 框架适配，解决实际痛点 |

---

## 生态信号

**Qwen 帝国成型**：阿里 Qwen 3.5/3.6 系列已构建从官方权重（Qwen/Qwen3.6-27B）到 Unsloth 官方量化、再到社区激进微调（HauhauCS、Jackrong 等）的三层生态，覆盖文本、视觉、MoE、代码全场景。这种"官方+工具链+社区"的飞轮效应，使其成为当前最活跃的开源模型家族。

**量化成为默认选项**：GGUF 格式占据 30 个模型中的 9 席，Unsloth 作为量化基础设施品牌效应凸显。MTP（Multi-Token Prediction）与 MoE 量化的结合（如 Qwen3.6-35B-A3B-MTP-GGUF）代表效率优化的新前沿。

**垂直场景专业化**：翻译（Hy-MT2 系列）、HR（HRM-Text-1B）、信息抽取（NuExtract3）、TTS（supertonic-3、Dramabox）等垂直模型上榜，表明大模型竞争从通用能力转向场景深耕。视频生成则处于"基座混战"阶段，Sulphur-2-base、Anima、LongCat 等尚未形成明显头部。

**开源权重持续挤压闭源**：DeepSeek、Qwen、MiniCPM 等国产开源模型在点赞与下载量上全面领先，CohereLabs 作为非中式开源代表主要依赖量化版本参与竞争。

---

## 值得探索

| 模型 | 推荐理由 |
|:---|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | 当前开源大模型的性能天花板，480 万下载量验证其可靠性，适合作为通用能力基准或复杂任务的主力模型 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 139 万下载的"现象级"社区模型，反映真实市场需求；其 MoE+GGUF 的部署效率值得研究，但需注意合规风险 |
| **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | any-to-any 架构代表未来多模态统一方向，字节跳动的工程实力保障其实用性，适合探索跨模态生成与理解的边界 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*