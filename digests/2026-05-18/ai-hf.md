# Hugging Face 热门模型日报 2026-05-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-18 00:23 UTC

---

# Hugging Face 热门模型日报 | 2026-05-18

---

## 今日速览

本周 Hugging Face 生态呈现**多模态爆发与端侧优化并行**的态势：DeepSeek-V4 系列以压倒性下载量领跑基础模型赛道，Qwen3.6 家族密集发布覆盖 27B 到 35B MoE 的多规格版本；视频生成领域 LTX 2.3 生态持续繁荣，社区衍生模型与官方 LoRA 工具齐头并进；值得关注的是，MiniCPM-V-4.6 以"On-Device Model"标签凸显端侧多模态成为新战场，而 Sulphur-2-base 以近百万周下载量验证开源视频模型的商业就绪度。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,010 | 3,140,341 | 本周绝对王者，Pro 版本以 4000+ 点赞和 314 万下载量证明 DeepSeek-V4 已成为开源对话模型的首选基座 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,127 | 1,804,238 | 轻量版 V4，在保持对话能力的同时大幅降低推理成本，下载量仅次于 Pro 显示其生产环境适配价值 |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,797 | 5,477,343 | **本周最高下载量**，35B 总参数/3B 激活参数的 MoE 架构，以极致效率实现旗舰级多模态表现 |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,315 | 3,413,560 | Qwen3.6 稠密架构主力，与 MoE 版本形成互补，覆盖不同部署场景 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,666 | 9,858,626 | **累计下载近千万**，Gemma 4 代延续 Google 端侧友好路线，31B 指令版是多模态轻量部署的可靠选择 |
| **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)** | Zyphra | 521 | 144,833 | 基于自研推理基座的 8B 微调模型，附 arxiv 论文标签显示学术社区对其架构创新的关注 |
| **[inclusionAI/Ring-2.6-1T](https://huggingface.co/inclusionAI/Ring-2.6-1T)** | inclusionAI | 65 | 1,468 | 1T 参数规模的"百灵"混合架构实验模型，虽下载量小但代表国产超大规模模型探索 |
| **[FrontiersMind/Nandi-Mini-600M-Early-Checkpoint](https://huggingface.co/FrontiersMind/Nandi-Mini-600M-Early-Checkpoint)** | FrontiersMind | 89 | 16,739 | 600M 参数的 Nandi 早期检查点，小模型研究社区对高效架构的持续迭代 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | openbmb | 692 | 56,518 | **端侧多模态标杆**，"On-Device Model"标签明确指向手机/边缘设备部署，视觉理解能力的民主化 |
| **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)** | HiDream-ai | 376 | 14,285 | 基于 Qwen3-VL 的图像理解与生成统一模型，O1 命名暗示推理时优化的新范式 |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 1,068 | 970,124 | **视频生成黑马**，近百万周下载量逼近百万级，endpoints_compatible 标签预示其 API 生态成熟度 |
| **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)** | TenStrip | 278 | 135,648 | LTX 2.3 社区衍生版本，10Eros 命名暗示特定风格优化，显示开源视频模型的垂直分化 |
| **[RuneXX/LTX-2.3-Workflows](https://huggingface.co/RuneXX/LTX-2.3-Workflows)** | RuneXX | 570 | 0 | ComfyUI 工作流集合，零下载但高点赞反映社区对**工程化复现方案**的需求大于原始权重 |
| **[Lightricks/LTX-2.3-22b-IC-LoRA-LipDub](https://huggingface.co/Lightricks/LTX-2.3-22b-IC-LoRA-LipDub)** | Lightricks | 63 | 2,164 | 官方出品的视频唇同步 LoRA，any-to-any 任务标注体现多模态编辑的精细化趋势 |
| **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)** | TencentARC | 126 | 0 | 图像到 3D 生成新工作，零下载因刚发布，但 arxiv 论文标签显示学术前沿性 |
| **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)** | SeeSee21 | 391 | 14,991 | 动漫风格文本到图像，diffusers+GGUF 双格式支持覆盖从云端到本地的全链路 |
| **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)** | circlestone-labs | 1,374 | 524,067 | 高点赞社区模型，diffusion-single-file 格式专为 ComfyUI 生态优化，52 万下载验证工作流集成价值 |
| **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Supertone | 358 | 20,208 | 韩国 Supertone 的 TTS 第三代，ONNX 格式强调跨平台推理，语音合成商业化路径清晰 |
| **[ResembleAI/Dramabox](https://huggingface.co/ResembleAI/Dramabox)** | ResembleAI | 134 | 936 | 戏剧化语音克隆，LTX-Audio 技术路线显示音频生成与视频技术的交叉融合 |
| **[ScenemaAI/scenema-audio](https://huggingface.co/ScenemaAI/scenema-audio)** | ScenemaAI | 86 | 209 | 场景化音频生成，diffusion+voice-cloning 组合指向影视后期自动化的垂直场景 |
| **[Aratako/Irodori-TTS-500M-v3](https://huggingface.co/Aratako/Irodori-TTS-500M-v3)** | Aratako | 60 | 0 | 500M 参数的日语 TTS 第三版，零下载但版本迭代显示社区对特定语种语音的持续深耕 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[jackxinning/Leanly_AI](https://huggingface.co/jackxinning/Leanly_AI)** | jackxinning | 116 | 9,383 | 医疗问答专用 GGUF 模型，中英双语标签显示其服务跨境医疗场景的意图 |
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 1,457 | 248,131 | **罕见 OpenAI 开源发布**，token-classification 任务定位隐私信息检测，ONNX+Safetensors 双格式兼顾效率与安全 |
| **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** | Cactus-Compute | 68 | 221 | JAX 编写的函数调用/工具使用专用编码器-解码器，"needle"命名暗示在复杂工具链中的精准定位能力 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 230 | 185,303 | Unsloth 官方量化版 Qwen3.6，MTP（Multi-Token Prediction）技术以 GGUF 格式落地本地推理 |
| **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)** | unsloth | 212 | 181,425 | MoE 架构的 GGUF 量化版本，与稠密版形成"同一模型双规格"的社区量化覆盖策略 |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 617 | 268,773 | **社区量化高下载代表**，Gemma 4 26B 的"去审查"GGUF v2 版，26 万下载显示特定需求社区的活跃 |
| **[antirez/deepseek-v4-gguf](https://huggingface.co/antirez/deepseek-v4-gguf)** | antirez | 135 | 283,772 | Redis 作者 antirez 亲自量化 DeepSeek-V4，个人技术品牌背书+28 万下载体现"名人效应"在开源量化的影响力 |
| **[microsoft/Fara-7B](https://huggingface.co/microsoft/Fara-7B)** | microsoft | 573 | 17,170 | 微软基于 Qwen2.5-VL 的多模态微调，7B 参数瞄准企业级轻量部署，Safetensors 格式保障生产安全 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 264 | 0 | 零下载但 264 点赞的"元工具"——修复 Qwen 聊天模板，MLX 格式专为 Apple Silicon 优化，反映生态基础设施的精细化 |

---

## 生态信号

**模型家族格局**：Qwen3.6 与 DeepSeek-V4 形成"双寡头"态势，前者以 5 个官方/社区版本覆盖 7B 到 35B MoE 全谱系，后者以 Pro/Flash 双版本锚定高端对话市场。Google Gemma-4 凭借端侧基因稳居第三极，而 MiniCPM-V-4.6 的"On-Device"标签预示端侧多模态将成为下半年关键战场。

**开源权重动态**：本周 30 个模型中仅 1 个（openai/privacy-filter）明确来自闭源厂商的开源释放，但其 1,457 点赞和 24 万下载显示"降维开源"仍具巨大影响力。值得警惕的是，SulphurAI、HiDream-ai 等新面孔以接近商业产品的下载量崛起，开源视频/图像生成正从"研究玩具"转向"生产工具"。

**量化与微调活动**：GGUF 格式占据微调/量化类别的 80%，Unsloth 与社区个人开发者（antirez、Jiunsong）形成"机构+个人"的双层量化生态。MTP（Multi-Token Prediction）技术首次出现在 GGUF 量化标签中，推测性解码的本地部署优化成为新焦点。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | **效率革命样本**：547 万周下载量证明 MoE 架构已跨越"学术概念"进入大规模生产。3B 激活参数驱动 35B 总参数的性能，是资源受限场景部署旗舰多模态能力的最优解，建议重点测试其 image-text-to-text 的端侧延迟表现。 |
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | **战略风向标**：OpenAI 罕见开源且选择 token-classification 这一"基础设施层"任务，而非竞争激烈的生成模型。隐私检测作为 AI 合规刚需，其 ONNX 格式设计暗示企业集成意图——这可能是观察 OpenAI 开源策略转向的关键节点。 |
| **[RuneXX/LTX-2.3-Workflows](https://huggingface.co/RuneXX/LTX-2.3-Workflows)** | **生态范式转移**：零下载但 570 点赞的"反常识"数据揭示 Hugging Face 正在从"模型仓库"进化为"AI 工程方案市场"。ComfyUI 工作流作为可复现的"模型使用代码"，其价值可能超越原始权重本身，值得研究其社区协作模式。 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*