# Hugging Face 热门模型日报 2026-05-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-27 00:26 UTC

---

# Hugging Face 热门模型日报 | 2026-05-27

---

## 今日速览

本周 Hugging Face 生态呈现**多模态爆发与端侧优化并行**态势：DeepSeek-V4-Pro 以 4310 点赞稳居榜首，下载量突破 500 万，彰显开源大模型的强劲吸引力；Qwen3.6 家族持续扩张，从 27B 稠密到 35B MoE 架构覆盖全场景，社区微调版本（Uncensored、GGUF 量化）活跃度极高；视频生成领域 Sulphur-2-base 异军突起，下载量达 137 万；字节跳动 any-to-any 架构的 Lance 与美团 LongCat 视频数字人则代表了原生多模态的新方向。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,310 | 5,019,884 | 本周绝对王者，开源 MoE 架构对话模型，500 万+下载验证其生产级可靠性 |
| **[Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,475 | 4,577,271 | 阿里官方稠密版旗舰，视觉-语言统一架构，开源权重直接叫板闭源 API |
| **[MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** | openbmb | 306 | 2,409 | 清华系端侧小钢炮，1B 参数瞄准手机本地部署，端侧智能关键基础设施 |
| **[HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 377 | 103,033 | 人力资源垂直领域专用 1B 模型，10 万下载揭示行业垂直化微调趋势 |
| **[Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)** / **[Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)** | tencent | 1,025 / 396 | 7,471 / 2,091 | 腾讯混元翻译双雄，1.8B 轻量版与 30B MoE 专业版覆盖不同部署场景 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[Lance](https://huggingface.co/bytedance-research/Lance)** | bytedance-research | 861 | 1,908 | 字节跳动 any-to-any 原生多模态架构，图像/视频/音频统一生成，范式革新者 |
| **[Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 1,372 | 1,376,847 | 开源视频生成黑马，137 万下载逼近商业级工具，端点兼容降低接入门槛 |
| **[LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)** | meituan-longcat | 300 | 0 | 美团音频驱动视频数字人，ONNX + Diffusers 双格式支持实时交互场景 |
| **[MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | openbmb | 978 | 314,347 | 端侧视觉理解标杆，31 万下载证明小参数视觉模型的商业化成熟度 |
| **[Anima](https://huggingface.co/circlestone-labs/Anima)** | circlestone-labs | 1,556 | 676,447 | ComfyUI 原生扩散模型，67 万下载的社区创作基础设施，工作流生态核心节点 |
| **[Lens](https://huggingface.co/microsoft/Lens)** / **[Lens-Turbo](https://huggingface.co/microsoft/Lens-Turbo)** | microsoft | 102 / 105 | 673 / 908 | 微软文本到图像研究系列，Turbo 版追求一步/少步推理，学术前沿探索 |
| **[stable-audio-3-medium](https://huggingface.co/stabilityai/stable-audio-3-medium)** | stabilityai | 108 | 0 | Stability AI 第三代音频生成，音乐与音效统一建模，音频生成赛道持续迭代 |
| **[Dramabox](https://huggingface.co/ResembleAI/Dramabox)** | ResembleAI | 261 | 1,552 | 戏剧化语音合成，情感表现力突破传统 TTS 天花板，内容创作新工具 |
| **[supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Supertone | 695 | 48,112 | 韩系 TTS 代表，4.8 万下载的高保真语音合成，音乐/配音工业级方案 |
| **[PiD](https://huggingface.co/nvidia/PiD)** | nvidia | 110 | 117 | NVIDIA 图像超分辨率扩散模型，虽下载尚少但代表硬件厂商的生成式 AI 布局 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)** | NemoStation | 377 | 9,144 | 视频理解专用 2B 模型，视频-文本交叉模态，短视频内容分析基础设施 |
| **[NuExtract3](https://huggingface.co/numind/NuExtract3)** | numind | 160 | 20,350 | 结构化信息抽取专家，基于 Qwen3.5 视觉增强，文档智能处理利器 |
| **[Nemotron-Labs-Diffusion-14B](https://huggingface.co/nvidia/Nemotron-Labs-Diffusion-14B)** | nvidia | 113 | 5,453 | NVIDIA 将 Nemotron 品牌扩展至扩散架构，14B 参数探索文本生成的新范式 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 908 | **1,598,473** | 本周下载冠军！激进去审查版 Qwen3.6 MoE，160 万下载反映社区对无过滤模型的强需求 |
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 502 | 735,349 | Unsloth 官方 GGUF 量化，MTP 多 token 预测加速，消费级 GPU 跑 27B 的关键 |
| **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)** | unsloth | 389 | 627,535 | MoE 架构 GGUF 化标杆，62 万下载验证量化技术对开源普及的杠杆效应 |
| **[Qwopus3.6-27B-v2-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-GGUF)** / **[v2-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF)** | Jackrong | 144 / 118 | 16,379 / 31,597 | 社区个人开发者持续迭代 Qwen 量化系列，"Qwopus" 品牌化微调生态活跃 |
| **[Qwen3.6-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.6-27B-OBLITERATED)** | OBLITERATUS | 101 | 10,015 | 另一去审查路线，GGUF + Safetensors 双格式，社区对模型"解放"的多元尝试 |
| **[Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 423 | 0 | MLX 框架专用聊天模板修复，苹果生态部署 Qwen 的必备补丁，0 下载因工具属性 |
| **[Qwopus3.5-9B-Coder-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-GGUF)** | Jackrong | 197 | 45,392 | 代码专用轻量化版本，9B 参数 + GGUF 瞄准笔记本本地编程助手 |
| **[command-a-plus-05-2026-w4a4](https://huggingface.co/CohereLabs/command-a-plus-05-2026-w4a4)** / **[bf16](https://huggingface.co/CohereLabs/command-a-plus-05-2026-bf16)** | CohereLabs | 206 / 126 | 7,769 / 13,869 | Cohere 官方视觉版 Command A，W4A4 INT4 量化与 BF16 全精度双发，企业部署友好 |

---

## 生态信号

**Qwen 家族已成开源生态最大公约数**：30 个热门模型中 Qwen 相关占 10 席，从官方 27B/35B 到社区 Uncensored、GGUF、Coder、MTP 衍生版本，形成"核心开源-外围繁荣"的飞轮。Unsloth 作为量化基础设施层，其 GGUF 版本累计下载超 136 万，证明**高效推理工具是开源模型落地的关键杠杆**。与此同时，**"去审查化"成为显性的社区需求分支**，HauhauCS 和 OBLITERATUS 两个 Uncensored 版本合计 160 万+下载，与官方版本形成张力。闭源厂商如 Cohere、微软仍以研究发布参与生态，但下载量级（数千至数万）与顶级开源模型（数百万）差距显著，**开源权重正从"追赶"转向"定义标准"**。视频生成（Sulphur-2-base、LongCat）和 any-to-any 架构（Lance）代表下一代多模态方向，而端侧小模型（MiniCPM5-1B、MiniCPM-V-4.6）与量化技术共同推动 AI 向边缘设备渗透。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | 500 万下载的生产级验证，MoE 架构 + 开源权重，是当前替代闭源 API 的最成熟选择。若需部署大规模对话系统，此为首选基座。 |
| **[Lance](https://huggingface.co/bytedance-research/Lance)** | any-to-any 架构代表未来 2-3 年的多模态范式，单一模型统一处理文本/图像/视频/音频的输入输出。适合研究下一代统一架构或探索跨模态应用边界。 |
| **[Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 160 万下载的社区现象级模型，需审慎评估其"去审查"边界，但无可否认它揭示了开源生态中用户需求的另一极。适合研究安全对齐、模型治理或特定无过滤场景。 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*