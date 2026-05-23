# Hugging Face 热门模型日报 2026-05-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-23 00:24 UTC

---

# Hugging Face 热门模型日报 | 2026-05-23

---

## 今日速览

本周 Hugging Face 生态呈现**多模态爆发与国产模型领跑**的态势。DeepSeek-V4-Pro 以 4,151 点赞和 428 万下载稳居榜首，Qwen3.6 系列（27B/35B-A3B）与 Google Gemma-4-31B 形成三足鼎立的多模态大模型格局。生成式 AI 持续向视频、3D、音频等模态延伸，Sulphur-2-base 文本生成视频模型下载量突破 124 万，而社区量化生态（Unsloth GGUF、Jackrong 微调版）活跃度显著提升，反映边缘部署需求旺盛。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,151 | 4,287,396 | 本周绝对王者，DeepSeek 新一代旗舰对话模型，推理与编码能力全面跃升，开源权重引发社区大规模采用 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,189 | 2,556,531 | V4 系列轻量版，以更低延迟保留核心能力，适合高并发 API 场景 |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,868 | 5,978,432 | 阿里 Qwen3.6 MoE 架构旗舰，35B 激活参数仅 3B，效率与性能平衡极佳，下载量本周最高 |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,390 | 4,049,995 | Qwen3.6 稠密架构版本，视觉理解能力突出，企业部署首选之一 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,730 | 10,283,716 | Google Gemma 4 代 31B 指令版，本周下载量破千万，开源策略激进，多模态对话体验逼近闭源产品 |
| **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 243 | 72,470 | 专注人力资源场景的 1B 轻量文本模型，垂直领域微调代表，企业 SaaS 集成潜力大 |
| **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)** / **[30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)** | tencent | 276 / 213 | 564 / 224 | 腾讯混元翻译模型双版本，1.8B 端侧可用，30B-A3B 追求极致质量，机器翻译赛道罕见的新玩家 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | openbmb | 904 | 221,612 | 面壁智能端侧多模态标杆，4.6 版视觉理解精度大幅提升，手机运行无压力 |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 1,267 | 1,249,582 | 本周生成模型黑马，文本生成视频质量跃升，124 万下载印证开源视频模型需求井喷 |
| **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | bytedance-research | 645 | 1,001 | 字节跳动 any-to-any 统一架构，支持图像/视频/文本任意互转，技术路线激进，早期关注度高 |
| **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)** | circlestone-labs | 1,498 | 602,483 | ComfyUI 生态热门，扩散模型单文件部署方案，60 万下载反映视觉创作者工具链迁移趋势 |
| **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)** | HiDream-ai | 421 | 22,783 | 基于 Qwen3-VL 的图像理解与生成统一模型，"O1" 暗示推理时优化，图像编辑可控性增强 |
| **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)** | TencentARC | 191 | 0 | 腾讯 ARC 单图生 3D 模型，MIT 协议开源，3D 资产生成赛道新入局者，尚未放量但技术受关注 |
| **[Efficient-Large-Model/SANA-WM_bidirectional](https://huggingface.co/Efficient-Large-Model/SANA-WM_bidirectional)** | Efficient-Large-Model | 84 | 0 | SANA 双向图像/视频生成，支持相机运动控制，学术向探索，零下载显示尚处早期 |
| **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Supertone | 580 | 37,545 | 韩国 Supertone 第三代 TTS，ONNX 格式优化推理，情感表现力突出，音频生成商业化标杆 |
| **[ResembleAI/Dramabox](https://huggingface.co/ResembleAI/Dramabox)** | ResembleAI | 229 | 1,354 | 戏剧化语音克隆与生成，LTX-Audio 架构，面向影视/游戏配音场景 |
| **[ScenemaAI/scenema-audio](https://huggingface.co/ScenemaAI/scenema-audio)** | ScenemaAI | 123 | 441 | 文本生成音频+语音克隆，扩散模型路线，音频生成赛道细分化趋势代表 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)** | NemoStation | 249 | 4,002 | 视频理解+文本生成 2B 小模型，基于 Qwen3.5，面向视频问答与摘要，端侧视频 AI 新尝试 |
| **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)** | numind | 77 | 7,576 | 信息抽取专用模型，基于 Qwen3.5，文档结构化提取场景，B2B 工具链关键组件 |
| **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** | Cactus-Compute | 120 | 328 | JAX 架构函数调用/工具使用专用模型，编码器-解码器结构，Agent 基础设施层探索 |
| **[nvidia/Nemotron-Labs-Diffusion-14B](https://huggingface.co/nvidia/Nemotron-Labs-Diffusion-14B)** | nvidia | 62 | 1,992 | NVIDIA Nemotron 扩散架构 14B，标注为 feature-extraction，或用于数据合成与表示学习 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 412 | 532,255 | Unsloth 官方 Qwen3.6 27B GGUF 量化，MTP 多 token 预测加速，53 万下载验证社区量化生态核心地位 |
| **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)** | unsloth | 333 | 466,060 | MoE 版本 GGUF 量化，46 万下载，边缘运行 35B 级模型的关键桥梁 |
| **[Jackrong/Qwopus3.5-9B-Coder-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-GGUF)** | Jackrong | 163 | 28,599 | 社区开发者 Qwen3.5 9B 代码模型 GGUF 版，填补官方空白，本地化代码助手热门选择 |
| **[Jackrong/Qwopus3.5-9B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-MTP-GGUF)** | Jackrong | 67 | 21,448 | 同系列 MTP 加速版，社区微调者快速跟进官方技术路线 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 368 | 0 | MLX 框架 Qwen 聊天模板修复，零下载但高点赞，反映苹果生态开发者痛点与社区协作价值 |
| **[CohereLabs/command-a-plus-05-2026-w4a4](https://huggingface.co/CohereLabs/command-a-plus-05-2026-w4a4)** / **[bf16](https://huggingface.co/CohereLabs/command-a-plus-05-2026-bf16)** | CohereLabs | 172 / 108 | 2,127 / 11,950 | Cohere Command A+ 视觉版，w4a4 量化与 bf16 双版本，企业级多模态 API 竞争者 |

---

## 生态信号

**Qwen 家族已成事实标准**：本周 30 个热门模型中 8 个基于 Qwen3.5/3.6 架构（含官方与社区衍生），覆盖从 2B 视频理解到 35B-A3B 多模态对话，形成"官方发布→Unsloth 量化→Jackrong 代码特化→froggeric 生态修复"的完整开源飞轮。**DeepSeek 与 Google 双旗舰对峙**：V4-Pro 以绝对点赞领跑，Gemma-4-31B 则以千万级下载验证开源策略的规模化成功。生成式 AI 模态扩张显著，视频（Sulphur-2）、3D（Pixal3D）、音频（supertonic-3/Dramabox）三赛道同步升温，但下载量分化严重——视频爆款与 3D 零下载并存，提示技术成熟度差异。**量化生态进入"MTP 时代"**：Unsloth 将多 token 预测纳入 GGUF 标准，社区快速跟进，边缘部署效率竞争白热化。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | 开源大模型能力新标杆，4,151 点赞与 428 万下载双重验证。若需替代 GPT-4o/Claude 的私有化方案，此为当前最值得评估的选项，建议关注其长上下文与工具调用实际表现 |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | 124 万下载的文本生成视频模型，开源社区罕见的高采纳率。若从事内容创作或视频生成研究，其 diffusers 兼容性与端点部署支持（endpoints_compatible）可降低实验门槛 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | 下载量破千万且增速惊人，Google 开源策略最激进的一代。Gemma 4 视觉理解能力逼近闭源产品，若需合规商用多模态方案（Apache 2.0 兼容），优先测试其企业适配性 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*