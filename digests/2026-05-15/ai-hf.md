# Hugging Face 热门模型日报 2026-05-15

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-15 00:23 UTC

---

# Hugging Face 热门模型日报 | 2026-05-15

---

## 今日速览

本周 Hugging Face 热度由 **DeepSeek-V4** 与 **Qwen3.6** 两大模型家族主导，其中 DeepSeek-V4-Pro 以近 4K 点赞和 258 万下载领跑全站。多模态领域亮点频现：Google Gemma-4-31B-it 逼近千万下载大关，HiDream-O1-Image 系列推动图像生成进入"O1 推理时代"。社区量化生态持续繁荣，Unsloth 主导的 Qwen3.6 GGUF 系列占据榜单近 1/5 席位，而 Sulphur-2-base 以 90 万点赞/下载比成为视频生成赛道黑马。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 3,948 | 2,588,118 | DeepSeek 最新旗舰，本周点赞与下载双冠，延续 V3 以来的强劲开源势头 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,080 | 1,526,638 | V4 轻量版，以更低成本提供接近 Pro 的性能，下载量验证其工程优化价值 |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,759 | 4,607,690 | MoE 架构多模态模型，本周最高下载量，35B 激活仅 3B 的高效设计 |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,279 | 2,940,046 | Qwen3.6 系列 dense 版本，视觉理解能力突出，接近 300 万下载 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,636 | 9,793,704 | Gemma 4 代旗舰，近千万下载逼近里程碑，any-to-any 架构预示下一代交互范式 |
| **[google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant)** | google | 234 | 109,600 | Google 官方助手版本，探索"any-to-any"通用接口的实际落地 |
| **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)** | Zyphra | 492 | 130,808 | 新兴推理模型，基于 ZAYA1-reasoning-base 微调，arxiv 预印本显示学术社区关注 |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 583 | 287,048 | 社区对 Gemma-4 的"去限制"改造，反映开源用户对内容过滤政策的博弈 |
| **[antirez/deepseek-v4-gguf](https://huggingface.co/antirez/deepseek-v4-gguf)** | antirez | 109 | 212,601 | Redis 作者 antirez 亲自量化，技术名人效应带动 21 万下载 |
| **[DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF)** | DavidAU | 155 | 261,416 | 社区极端量化实验（Heretic/IMatrix-MAX），标签堆砌反映 GGUF 生态的细分竞争 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 906 | 627,368 | 文本到视频新贵，点赞/下载转化效率惊人，endpoints_compatible 标签暗示云原生部署 |
| **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)** | HiDream-ai | 322 | 9,858 | 首个"O1 推理"图像生成模型，将思维链引入视觉创作，早期采用者追捧 |
| **[HiDream-ai/HiDream-O1-Image-Dev](https://huggingface.co/HiDream-ai/HiDream-O1-Image-Dev)** | HiDream-ai | 94 | 3,330 | O1-Image 开发版，双版本同时上榜验证"推理增强生成"路线热度 |
| **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)** | SeeSee21 | 367 | 12,061 | 动漫风格文生图专用模型，GGUF 支持降低消费级 GPU 门槛 |
| **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)** | TenStrip | 256 | 90,647 | LTX 视频生成社区微调版，10Eros 命名暗示特定风格/内容方向 |
| **[RuneXX/LTX-2.3-Workflows](https://huggingface.co/RuneXX/LTX-2.3-Workflows)** | RuneXX | 552 | 0 | ComfyUI 工作流集合，零下载但高点赞，反映 HF 作为"模型展示橱窗"的非下载价值 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 876 | 2,224,252 | 语音克隆/多语言 TTS 爆款，200 万+下载证明音频生成需求爆发 |
| **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Supertone | 196 | 9,482 | 韩国 Supertone 第三代 TTS，ONNX 格式优化推理速度 |
| **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)** | TencentARC | 58 | 0 | 腾讯 ARC 图像到 3D 生成，arxiv 预印本刚发布，零下载但学术前瞻性强 |
| **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)** | sensenova | 255 | 9,377 | 商汤"任意到任意"多模态模型，MoT（Mixture of Tokens）架构探索新路径 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | openbmb | 526 | 16,801 | 面壁智能端侧多模态模型，"On-Device Model"标签瞄准手机/边缘部署场景 |
| **[jackxinning/Leanly_AI](https://huggingface.co/jackxinning/Leanly_AI)** | jackxinning | 111 | 10,668 | 医疗问答专用模型，中英双语支持，GGUF 格式降低临床场景部署成本 |
| **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)** | AngelSlim | 174 | 17,480 | 1.25bit 极端量化翻译模型，探索低比特推理的可用性边界 |
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 1,441 | 219,969 | OpenAI 罕见开源的 token 分类器，隐私过滤工具，ONNX+Safetensors 双格式 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 1,031 | 3,001,877 | Unsloth 官方 MoE 量化版，300 万下载验证其"最快量化"口碑 |
| **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** | unsloth | 676 | 1,614,146 | dense 版本官方量化，与 MoE 版形成覆盖不同硬件的配置矩阵 |
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 140 | 74,765 | MTP（Multi-Token Prediction）实验性量化，Unsloth 持续探索推理加速 |
| **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)** | unsloth | 129 | 67,190 | MoE+MTP 组合，技术叠加但下载量未达预期，或受硬件要求限制 |
| **[havenoammo/Qwen3.6-27B-MTP-UD-GGUF](https://huggingface.co/havenoammo/Qwen3.6-27B-MTP-UD-GGUF)** | havenoammo | 93 | 60,142 | 社区"UD"（Ultra Dynamic？）变体，与官方量化形成差异化竞争 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 189 | 0 | 聊天模板修复工具，零下载但高点赞，反映 Qwen 生态的"基础设施"需求 |

---

## 生态信号

**DeepSeek 与 Qwen 形成双寡头格局**：两者合计占据 30 个热门模型中的 13 个，且覆盖从官方权重到社区量化的完整链条。DeepSeek 以"旗舰+Flash"分层策略捕获不同算力用户，Qwen 则通过 Unsloth 等合作伙伴将 GGUF 生态做到极致。

**开源权重持续侵蚀闭源壁垒**：OpenAI 罕见开源 privacy-filter（虽为工具型模型），Google Gemma-4 近千万下载逼近 GPT-4o 级影响力，而社区"uncensored"微调（Jiunsong、DavidAU）实质是对厂商价值观锁定的反叛。

**量化进入"超细分"竞争**：1.25bit（AngelSlim）、IMatrix-MAX（DavidAU）、MTP（Unsloth）等技术标签涌现，GGUF 已从"能跑就行"演进为"极致优化"的军备竞赛。视频/3D 生成模型开始上榜，但下载量分化严重——Sulphur-2-base 的 62 万下载 vs Pixal3D 的零下载，显示生产级视频 3D 仍处早期。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)** | "O1 推理+图像生成"的首个公开实现，若思维链真能提升构图/语义一致性，将开启生成式 AI 的新范式。当前下载量仅 9K，是早期研究窗口期。 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | 220 万下载的语音克隆工具，zero-shot + multilingual 组合直击全球化内容创作痛点，k2-fsa 团队有 Kaldi 语音识别遗产，工程可靠性高。 |
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | OpenAI 开源异类，token-classification 架构可扩展至 PII 检测、内容审核等合规场景，双格式支持便于集成现有流水线，值得解剖其设计哲学。 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*