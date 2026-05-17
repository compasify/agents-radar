# Hugging Face 热门模型日报 2026-05-17

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-17 00:21 UTC

---

# Hugging Face 热门模型日报 | 2026-05-17

---

## 📌 今日速览

本周 Hugging Face 生态呈现**多模态爆发与端侧优化并行**的态势。DeepSeek-V4 系列以近 500 万周下载量强势登顶，Qwen 3.6 家族（27B/35B-A3B）在官方与社区量化版本双线开花，形成"基座+GGUF"的完整供给链。视频生成领域 LTX 2.3 衍生模型密集涌现（Sulphur-2-base、LTX2.3-10Eros、ICEdit-Insight），显示开源视频生态进入工具链细化阶段。Google Gemma-4 31B 以近千万下载验证了大厂轻量多模态模型的市场刚需，而 MiniCPM-V-4.6 的"On-Device"标签则指向端侧 AI 的下一战场。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 3,995 | 2,967,518 | 本周绝对王者，Pro 版本以近 300 万下载量定义开源大模型性能基准，对话与生成双优。 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,113 | 1,724,666 | Flash 轻量版以 1.7M 下载验证"性能-速度"平衡策略的成功，适合高并发场景。 |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,784 | 5,255,567 | **本周下载冠军**（525万），35B 总参数/3B 激活的 MoE 架构，多模态理解性价比极致。 |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,304 | 3,261,736 | 稠密架构的 27B 版本，327万下载证明非 MoE 路线仍有稳定需求。 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,659 | 9,851,216 | **累计下载近千万**，Gemma 4 代多模态指令版，大厂轻量模型商业落地的标杆。 |
| **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZYphra/ZAYA1-8B)** | Zyphra | 512 | 143,806 | 新兴 8B 基座模型，带推理专用变体（ZAYA1-reasoning-base），小模型推理优化新玩家。 |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 607 | 273,759 | Gemma-4 的社区"去限制"GGUF 版，26B 规模+llama.cpp 兼容，边缘部署热门。 |
| **[FrontiersMind/Nandi-Mini-600M-Early-Checkpoint](https://huggingface.co/FrontiersMind/Nandi-Mini-600M-Early-Checkpoint)** | FrontiersMind | 78 | 8,324 | 600M 超轻量实验模型，"Early-Checkpoint"标签暗示预训练动态分享的新社区文化。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | openbmb | 640 | 28,627 | **端侧多模态旗舰**，"On-Device Model"标签明确指向手机/边缘端实时视觉理解。 |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 1,030 | 875,370 | 文本到视频基座，87万下载+GGUF/diffusers 双格式，开源视频生成基础设施级模型。 |
| **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)** | HiDream-ai | 360 | 13,587 | 基于 Qwen3-VL 的图像编辑/生成模型，"O1"命名暗示类推理链的图像生成优化。 |
| **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)** | SeeSee21 | 385 | 14,494 | 动漫风格文本到图像，diffusers+GGUF+Safetensors 三格式覆盖，垂直风格社区热门。 |
| **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)** | circlestone-labs | 1,353 | 501,808 | 50万下载的 ComfyUI 生态模型，"diffusion-single-file"格式降低工作流门槛。 |
| **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)** | TenStrip | 272 | 122,247 | LTX Video 2.3 的衍生微调版，12万下载显示开源视频模型的社区二创活力。 |
| **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)** | TencentARC | 100 | 0 | 图像到 3D 生成，零下载但高关注，可能处于论文配套代码刚发布阶段，值得跟踪。 |
| **[joyfox/LTX2.3-ICEdit-Insight](https://huggingface.co/joyfox/LTX2.3-ICEdit-Insight)** | joyfox | 80 | 5,768 | 视频到视频编辑专用模型，LTX-2-3 生态的视频修复/编辑工具链补充。 |
| **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Supertone | 305 | 16,496 | 韩国 Supertone 的 TTS 第三代，ONNX 格式优先，语音合成商业化路径清晰。 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 891 | 2,087,608 | **语音克隆爆款**，208万下载+多语言零样本，开源 TTS 的"即时声音复制"标杆。 |
| **[ResembleAI/Dramabox](https://huggingface.co/ResembleAI/Dramabox)** | ResembleAI | 109 | 869 | 戏剧化情感 TTS，LTX-Audio 架构，低下载但高客单价场景的垂直定位。 |
| **[ScenemaAI/scenema-audio](https://huggingface.co/ScenemaAI/scenema-audio)** | ScenemaAI | 75 | 176 | 文本到音频生成（非语音），扩散架构，AI 配乐/音效的新兴品类。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[microsoft/Fara-7B](https://huggingface.co/microsoft/Fara-7B)** | microsoft | 566 | 17,425 | 基于 Qwen2.5-VL 的多模态专用模型，微软在轻量视觉语言模型的研究探索。 |
| **[jackxinning/Leanly_AI](https://huggingface.co/jackxinning/Leanly_AI)** | jackxinning | 116 | 10,961 | 医疗问答专用 GGUF 模型，中英双语，垂直领域量化部署的社区实践。 |
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 1,451 | 239,384 | OpenAI 罕见的 HuggingFace 官方发布，PII 检测/脱敏的 token 分类工具，合规刚需。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 197 | 133,815 | Unsloth 官方 MTP（Multi-Token Prediction）GGUF 版，推理加速新技术路线。 |
| **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)** | unsloth | 182 | 124,082 | MoE 架构的 MTP 量化版，Unsloth 与 Qwen 生态深度绑定的证据。 |
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 1,045 | 2,965,506 | **量化版下载近 300 万**，证明社区对"官方性能+社区易部署"组合的强烈需求。 |
| **[antirez/deepseek-v4-gguf](https://huggingface.co/antirez/deepseek-v4-gguf)** | antirez | 126 | 264,757 | Redis 作者 antirez 个人维护的 DeepSeek-V4 量化版，技术名人背书+社区信任。 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 245 | 0 | 零下载但 245 赞，MLX 框架的 Qwen 聊天模板修复，苹果生态开发者的痛点解决。 |
| **[RuneXX/LTX-2.3-Workflows](https://huggingface.co/RuneXX/LTX-2.3-Workflows)** | RuneXX | 568 | 0 | ComfyUI 工作流集合而非权重，零下载高点赞反映"模型即工作流"的新分发形态。 |
| **[google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant)** | google | 244 | 146,480 | Gemma-4 的 any-to-any 助手变体，官方从"多模态"向"任意模态交互"的演进尝试。 |

---

## 📊 生态信号

**模型家族格局**：Qwen 3.6（35B-A3B/27B）与 DeepSeek-V4 形成"双头垄断"，前者以 5.2M/3.2M 下载覆盖多模态 MoE 与稠密架构，后者以 4.7M 合计下载锁定纯文本性能天花板。Google Gemma-4 31B 近千万下载验证"大厂轻量模型"的商业化可行性，而 MiniCPM-V-4.6 的"On-Device"标签与 ZAYA1-8B 的小尺寸推理优化，共同指向**端侧 AI 的硬件-模型协同设计**成为下一竞争维度。

**开源 vs 闭源**：OpenAI 罕见发布 `privacy-filter`（1,451 赞），但属工具型模型而非基座；核心趋势仍是**开源权重主导基座创新，闭源厂商聚焦垂直工具与合规层**。量化生态极度活跃——Unsloth 独占 3 个 Qwen GGUF 席位，累计下载超 430 万，社区量化已从"替代方案"变为"主要分发渠道"。

**新兴信号**：视频生成进入"工具链细化期"（LTX 2.3 生态 4 个衍生模型），音频生成从 TTS 向"任意声音生成"扩展（OmniVoice 208万下载 + scenema-audio 的纯音频扩散）。ComfyUI 工作流作为新型分发单元（RuneXX/Anima）值得持续关注。

---

## 🚀 值得探索

| 模型 | 推荐理由 |
|:---|:---|
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | **性价比实验首选**：3B 激活参数实现 35B 级性能，525万周下载的社区验证，配合 Unsloth GGUF 版本可覆盖从云端到本地的全链路部署，是当前 MoE 架构落地的最佳观察样本。 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | **语音交互的"Stable Diffusion 时刻"**：208万下载+零样本多语言克隆，意味着个人开发者可低成本构建定制化语音应用。k2-fsa 团队的语音识别背景（Kaldi/icefall）为其声学建模可信度背书。 |
| **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | **端侧多模态的先锋指标**：OpenBMB 实验室持续迭代端侧模型，4.6 代的"On-Device Model"标签若能在手机 NPU 上实现实时视觉问答，将重新定义移动 AI 的应用边界。建议关注其量化版本与推理框架适配进展。 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*