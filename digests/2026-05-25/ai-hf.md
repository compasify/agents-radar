# Hugging Face 热门模型日报 2026-05-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-25 00:25 UTC

---

# Hugging Face 热门模型日报 | 2026-05-25

---

## 今日速览

本周 Hugging Face 生态呈现**多模态爆发与国产模型强势崛起**的双重态势。DeepSeek-V4-Pro 以 4224 点赞和 466 万下载稳居榜首，Qwen 3.6 系列（27B/35B-A3B）形成完整矩阵覆盖从官方到社区微调的各层级需求。字节跳动的 Lance 以 any-to-any 定位切入，与腾讯 Hy-MT2 翻译系列、美团 LongCat 视频化身共同展现中国大厂的密集布局。值得关注的是，Sulphur-2-base 以 133 万下载成为视频生成黑马，而 Google Gemma-4-31B-it 凭借千万级下载验证了其开源策略的商业穿透力。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 4,224 | 4,666,078 | **本周绝对霸主**，DeepSeek 最新一代 Pro 级文本生成模型，以 MoE 架构实现推理效率与性能的双重突破，下载量印证其生产级采用度。 |
| [Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) | Qwen | 1,422 | 4,242,555 | 阿里云 Qwen 官方旗舰，原生支持图像-文本-文本多模态对话，27B 参数规模成为企业部署的"甜点"选择。 |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 2,762 | 10,398,435 | **下载量破千万**，Gemma 4 代指令微调版，Google 开源战略的标杆产品，31B 参数在多模态理解上对标闭源中杯模型。 |
| [sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B) | sapientinc | 271 | 84,346 | 垂直领域黑马，专注人力资源管理的 1B 轻量文本模型，高下载量反映企业级垂直场景的旺盛需求。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) | SulphurAI | 1,322 | 1,331,058 | **现象级视频生成模型**，133 万下载碾压同级，text-to-video 能力配合 GGUF 量化支持，成为 ComfyUI 生态新宠。 |
| [bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance) | bytedance-research | 760 | 1,474 | 字节跳动 any-to-any 统一架构，覆盖图像/视频生成与多模态理解，"一个模型走天下"的野心之作，高点赞低下载暗示其尚处早期释放阶段。 |
| [openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6) | openbmb | 918 | 269,589 | 面壁智能端侧多模态标杆，4.6 代在图像理解精度与推理速度间取得新平衡，27 万下载验证端侧部署需求。 |
| [circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima) | circlestone-labs | 1,531 | 637,329 | 高点赞神秘模型，diffusion-single-file 格式+ComfyUI 原生支持，63 万下载表明其在创意工作流中的渗透力。 |
| [TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D) | TencentARC | 202 | 0 | 腾讯 ARC 实验室 image-to-3D 新作，MIT 协议开源，零下载因刚发布，但技术方向切中 3D 资产生成痛点。 |
| [stabilityai/stable-audio-3-medium](https://huggingface.co/stabilityai/stable-audio-3-medium) | stabilityai | 80 | 0 | Stability AI 音频生成第三代，text-to-audio 覆盖音乐与音效，零下载显示音频生成赛道仍处工具链整合期。 |
| [Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3) | Supertone | 645 | 43,119 | 韩国 Supertone TTS 旗舰，ONNX 运行时优化，4.3 万下载在语音合成细分领域表现亮眼。 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B) / [7B](https://huggingface.co/tencent/Hy-MT2-7B) / [30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B) | tencent | 599 / 148 / 308 | 4,534 / 2,407 / 1,243 | 腾讯混元翻译系列三箭齐发，覆盖 1.8B 到 30B-A3B（MoE）全尺度，专攻机器翻译场景， Hunyuan 架构的垂直验证。 |
| [NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B) | NemoStation | 306 | 6,032 | 视频-文本到文本的垂直模型，基于 Qwen3.5 架构，专注视频内容理解与问答，6K 下载显示视频理解需求萌芽。 |
| [numind/NuExtract3](https://huggingface.co/numind/NuExtract3) | numind | 107 | 10,998 | 结构化信息提取专家，基于 Qwen3.5 的视觉语言架构，image-to-text 任务中实现文档/票据关键字段精准抽取。 |
| [nvidia/Nemotron-Labs-Diffusion-14B](https://huggingface.co/nvidia/Nemotron-Labs-Diffusion-14B) | nvidia | 89 | 4,071 | NVIDIA 实验室出品，将扩散机制引入文本生成，feature-extraction 标签暗示其作为合成数据生成器的定位。 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 767 | 1,220,114 | **社区微调顶流**，122 万下载证明"去审查化"需求的旺盛，35B-A3B MoE 架构的 GGUF 量化实现本地可跑。 |
| [unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) / [35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF) | unsloth | 455 / 358 | 660,321 / 547,827 | Unsloth 官方量化双旗舰，MTP（多令牌预测）+ GGUF 组合，合计超 120 万下载，消费级 GPU 跑大模型的首选方案。 |
| [Jackrong/Qwopus3.5-9B-Coder-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-GGUF) / [3.6-27B-v2-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-GGUF) / [3.5-9B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-MTP-GGUF) | Jackrong | 180 / 113 / 87 | 38,937 / 8,300 / 33,197 | 社区量化者 Jackrong 的 Qwen 代码专用系列，覆盖 9B 到 27B，Coder 变体针对编程场景优化，MTP 版本探索推理加速。 |
| [CohereLabs/command-a-plus-05-2026-w4a4](https://huggingface.co/CohereLabs/command-a-plus-05-2026-w4a4) / [bf16](https://huggingface.co/CohereLabs/command-a-plus-05-2026-bf16) | CohereLabs | 190 / 113 | 5,627 / 12,362 | Cohere 视觉语言模型双精度发布，w4a4 量化版与 bf16 原版并行，展示商业开源模型的精度-效率权衡策略。 |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 388 | 0 | 零下载高点赞的"工具型"仓库，专注修复 Qwen3.5 的 MLX 聊天模板，反映社区对 Apple Silicon 适配的精细化运营。 |
| [OBLITERATUS/Qwen3.6-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.6-27B-OBLITERATED) | OBLITERATUS | 76 | 5,298 | 激进的权重修改实验，"OBLITERATED"命名暗示对原模型架构或安全机制的大胆重构，小众但具探索价值。 |

---

## 生态信号

**Qwen 家族已成事实标准**：30 个热门模型中 Qwen 相关占 9 席（含官方 2 席、Unsloth 2 席、社区微调 5 席），从 9B 到 35B-A3B 的 GGUF 量化生态完整覆盖，"Qwen3.5/3.6"标签出现频率碾压 Llama/Gemma。国产模型三极格局显现：阿里 Qwen（生态广度）、字节 Lance（架构创新）、腾讯 Hy-MT2/Pixal3D（垂直深耕）。开源权重呈现**"官方基础模型+社区量化/微调"的双层结构**，Unsloth、HauhauCS 等量化专家成为关键基础设施；去审查化微调（Uncensored）与代码专用变体（Coder）是社区最活跃的两个方向。值得关注的是，多模态统一架构（Lance 的 any-to-any、Gemma-4/Qwen3.6 的原生视觉）正在模糊"语言模型"与"多模态模型"的边界，而视频生成（Sulphur-2-base）的百万级下载标志着该赛道从玩具走向工具。

---

## 值得探索

| 模型 | 推荐理由 |
|:---|:---|
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | 133 万下载的视频生成现象级产品，diffusers+GGUF+endpoints_compatible 三重适配意味着从云端 API 到本地 4090 均可运行，text-to-video 的"Stable Diffusion 时刻"可能已至。 |
| **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | any-to-any 架构的激进尝试，单一模型统一图像生成、视频生成与多模态理解，若技术验证成功，可能终结当前"专用模型堆砌"的碎片化格局，值得持续跟踪其技术报告与社区反馈。 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 122 万下载的社区微调顶流，不仅代表"去审查"需求，更验证了 MoE 架构（35B-A3B）在消费级硬件上的可行性——GGUF 量化后单卡可跑，是研究大模型效率优化的最佳样本。 |

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*