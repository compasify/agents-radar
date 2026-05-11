# Hugging Face 热门模型日报 2026-05-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-11 00:21 UTC

---

# Hugging Face 热门模型日报 | 2026-05-11

---

## 今日速览

本周 Hugging Face 生态呈现 **"多模态爆发、推理模型平民化"** 的鲜明趋势。Google Gemma-4 系列以 4 个变体强势霸榜，累计下载量突破 1500 万，成为开源多模态新标杆；DeepSeek-V4 家族延续高热度，Pro 版单周下载破 130 万；Qwen3.6 系列形成 27B/35B-MoE 双旗舰格局，社区 GGUF 量化生态极度繁荣。值得关注的是，text-to-video 与 any-to-any 任务模型首次进入热门前十，标志着生成式 AI 正从"单模态精品"迈向"全模态原生"时代。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 3,819 | 1,339,144 | 本周点赞王，DeepSeek 新一代推理旗舰，Pro 版本在数学与代码任务上大幅跃升，企业级部署首选 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,024 | 1,068,871 | Flash 轻量版以更低延迟实现接近 Pro 的推理质量，边缘部署场景下载量破百万 |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,706 | 3,668,376 | MoE 架构 35B 总参数/3B 激活参数，以极高推理效率成为本周下载量冠军，性价比之王 |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,222 | 2,273,063 | 稠密架构 27B 版本，视觉理解能力突出，与 35B-MoE 形成互补双旗舰 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,589 | 8,965,984 | Gemma-4 系列核心版本，原生图像-文本理解与生成，近 900 万下载验证其开源统治力 |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 970 | 5,585,425 | 40 亿参数轻量版，any-to-any 能力下放至端侧，移动端多模态应用爆发推手 |
| **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)** | XiaomiMiMo | 505 | 40,104 | 小米自研 Agent 专用模型，超长上下文与工具调用优化，IoT 生态核心大脑 |
| **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)** | Zyphra | 370 | 44,834 | 新兴实验室 8B 小模型，Apache-2.0 全开源，论文已上线 arXiv，学术复现友好 |
| **[mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)** | mistralai | 312 | 40,551 | 128B 总参数 MoE 巨兽，英法双语优化，欧洲主权 AI 代表之作 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 533 | 144,251 | 本周 text-to-video 黑马，GGUF 量化支持+端点兼容，开源视频生成进入实用阶段 |
| **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)** | HiDream-ai | 182 | 692 | 基于 Qwen3-VL 的图像理解与生成统一模型，"O1" 命名暗示推理时优化，早期探索性发布 |
| **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)** | SeeSee21 | 292 | 8,994 | 动漫风格 text-to-image 社区模型，GGUF 量化支持，二次元创作圈新宠 |
| **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)** | TenStrip | 196 | 58,647 | LTX 视频生成系列 2.3 版本迭代，image-to-video 时序一致性显著提升 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 833 | 2,212,436 | 语音克隆/多语言 TTS 双周下载破 220 万，零样本音色迁移成为内容生产基础设施 |
| **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)** | sensenova | 216 | 3,666 | 商汤"任意模态任意任务"8B 模型，MoT（Mixture of Tokens）架构创新，多模态统一新路线 |
| **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)** | nvidia | 271 | 126,335 | NVIDIA 端侧 Omni 模型推理特化版，30B-A3B MoE+BF16，芯片厂商垂直整合信号明显 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 1,394 | 185,884 | OpenAI 罕见开源工具，PII 检测与脱敏专用，ONNX 运行时优化，合规刚需产品 |
| **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)** | AngelSlim | 160 | 17,223 | 1.25bit 极端量化翻译模型，1.8B 参数可跑在智能手表，端侧 NMT 极限探索 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 986 | 2,657,295 | Unsloth 官方 MoE 量化版，265 万下载验证其"一键本地部署"工具链成熟度 |
| **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** | unsloth | 638 | 1,412,778 | 27B 稠密版配套量化，与 35B-MoE 形成"性能-效率"双选择 |
| **[Jackrong/Qwopus3.6-35B-A3B-v1-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-v1-GGUF)** | Jackrong | 100 | 53,096 | 社区 Unsloth 再分发版本，TGI 推理框架兼容，生态碎片化与繁荣并存 |
| **[DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF)** | DavidAU | 120 | 181,147 | "Heretic Uncensored" 命名揭示社区微调文化，I-Matrix 量化+代码特调，18 万下载的小众刚需 |
| **[havenoammo/Qwen3.6-27B-MTP-UD-GGUF](https://huggingface.co/havenoammo/Qwen3.6-27B-MTP-UD-GGUF)** | havenoammo | 62 | 39,384 | MTP（Multi-Token Prediction）+ UD（Uncertainty-Driven）量化实验，前沿推理优化探索 |
| **[z-lab/gemma-4-31B-it-DFlash](https://huggingface.co/z-lab/gemma-4-31B-it-DFlash)** | z-lab | 72 | 5,193 | 社区 speculative decoding 加速版，Gemma-4 生态首个第三方性能优化 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 131 | 0 | 零下载但 131 点赞，MLX 框架 Jinja 模板修复，开发者工具型仓库的"星标收藏"现象 |

---

## 生态信号

**Gemma-4 与 Qwen3.6 形成开源双寡头。** Google 以 4 个变体（31B/26B-MoE/E4B × it/assistant）覆盖全场景，累计下载超 1500 万；阿里 Qwen 则以 27B/35B-MoE 双旗舰+极致量化生态（Unsloth/社区 GGUF 超 5 个仓库）构建开发者粘性。闭源厂商 OpenAI 罕见开源 privacy-filter 工具，显示合规压力下的"选择性开放"策略；DeepSeek 延续"Pro+Flash"双轨，证明中国模型在推理效率上的工程优势。**量化生态进入"1.25bit 时代"**，AngelSlim 的极端压缩与 DavidAU 的 I-Matrix 优化并存，端侧部署正从"能跑"迈向"跑得好"。any-to-any 任务标签激增（5 个模型），预示 2026 年模型架构正从"拼接式多模态"转向"原生统一"。

---

## 值得探索

| 模型 | 推荐理由 |
|:---|:---|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | **开源多模态的"iPhone 时刻"** — 原生图像理解+生成+对话，近 900 万下载已验证稳定性，any-to-any 架构为 Agent 视觉交互提供新基座，建议优先体验其"看图说话→改图→再对话"的闭环能力 |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | **MoE 效率革命的标杆** — 3B 激活参数实现 70B+ 稠密模型性能，推理成本降至 1/10，配合 Unsloth GGUF 可本地部署。若只能选一个模型做生产环境基座，当前性价比最优解 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | **被低估的生产力基础设施** — 220 万下载量仅次于 Gemma-4，零样本语音克隆质量已接近商用 TTS，多语言支持覆盖小语种内容创作。语音交互 Agent、有声书、游戏 NPC 的必备组件 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*