# Hugging Face 热门模型日报 2026-05-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-16 00:20 UTC

---

# Hugging Face 热门模型日报 | 2026-05-16

---

## 今日速览

本周 Hugging Face 热度被 **DeepSeek-V4** 与 **Qwen3.6** 两大系列主导，前者以近 4000 点赞刷新近期纪录，后者则以密集的多尺寸矩阵覆盖从端侧到云端的全场景需求。**Google Gemma-4** 凭借 980 万下载量展现开源基座的强大渗透力，而视频生成赛道因 **LTX 2.3** 生态的社区爆发成为新焦点。值得关注的是，**On-Device Model** 标签首次进入头部榜单，端侧多模态部署正从概念走向落地。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 3,972 | 2,766,621 | 本周绝对顶流，DeepSeek 新一代 Pro 版本以接近 4000 点赞和 270 万周下载验证其推理与通用能力的双重突破 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,095 | 1,624,247 | 轻量高速变体，兼顾性能与成本，下载量印证其在生产环境的快速采纳 |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,779 | 4,938,568 | MoE 架构旗舰，激活参数仅 3B 却达 35B 规模性能，近 500 万下载量显示其作为"高效大模型"标杆地位 |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,296 | 3,099,139 | 稠密架构主力，平衡推理质量与部署成本，是 Qwen3.6 系列中企业采用的中坚型号 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,649 | 9,827,416 | Google 开源多模态旗舰，980 万累计下载彰显开源基座的生态统治力，视觉-语言对齐能力突出 |
| **[google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant)** | google | 239 | 125,005 | any-to-any 架构实验体，探索统一模态接口的助手形态 |
| **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)** | Zyphra | 502 | 141,203 | 基于自研推理基座的 8B 模型，arxiv 预印本同步发布，学术-工业联动的新范式 |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 596 | 279,744 | 社区对 Gemma-4 的"去限制"再分发，高下载量反映特定场景需求与开源模型的可塑性 |
| **[jackxinning/Leanly_AI](https://huggingface.co/jackxinning/Leanly_AI)** | jackxinning | 113 | 10,822 | 医疗问答专用微调，中英双语覆盖，垂直领域轻量应用的典型代表 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | openbmb | 598 | 22,483 | **On-Device Model** 标签首入头部，端侧多模态理解的里程碑，598 点赞验证"小模型大能力"路线的市场期待 |
| **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)** | HiDream-ai | 343 | 11,725 | 基于 Qwen3-VL 的图像生成模型，"O1"命名暗示类推理时长的生成质量优化 |
| **[HiDream-ai/HiDream-O1-Image-Dev](https://huggingface.co/HiDream-ai/HiDream-O1-Image-Dev)** | HiDream-ai | 98 | 3,819 | 上述模型的开发版，社区可早期介入迭代 |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 981 | 783,564 | 文本到视频基座，近百万周下载量与 GGUF 支持标志其作为开源视频生成基础设施的崛起 |
| **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)** | SeeSee21 | 380 | 13,998 | 动漫风格文生图，GGUF 与 diffusers 双格式支持，垂直风格社区的活跃信号 |
| **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)** | circlestone-labs | 1,326 | 465,511 | ComfyUI 原生支持的扩散单文件模型，高点赞下载比显示其作为工作流节点的工具价值 |
| **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)** | TenStrip | 264 | 100,636 | LTX 2.3 生态的社区微调变体，10 万下载揭示视频生成模型的"LoRA 化"趋势 |
| **[RuneXX/LTX-2.3-Workflows](https://huggingface.co/RuneXX/LTX-2.3-Workflows)** | RuneXX | 563 | 0 | 零下载却 563 点赞的异常数据，推测为 ComfyUI 工作流配置集合，纯收藏型内容的新形态 |
| **[joyfox/LTX2.3-ICEdit-Insight](https://huggingface.co/joyfox/LTX2.3-ICEdit-Insight)** | joyfox | 76 | 5,041 | LTX 视频编辑专用，Insight 版本聚焦语义理解驱动的视频修复 |
| **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)** | TencentARC | 81 | 0 | 图像到 3D 生成，arxiv 同日发布，零下载因推理门槛，但学术前瞻性值得关注 |
| **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Supertone | 232 | 12,832 | 韩系 TTS 代表，ONNX 运行时优化，商业化语音合成的开源参考 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 888 | 2,189,655 | 多语言零样本语音克隆，218 万下载量碾压同级，语音领域的"即时可用"标杆 |
| **[ResembleAI/Dramabox](https://huggingface.co/ResembleAI/Dramabox)** | ResembleAI | 87 | 429 | 戏剧化情感 TTS，低下载高定位，专业影视配音的细分探索 |
| **[ScenemaAI/scenema-audio](https://huggingface.co/ScenemaAI/scenema-audio)** | ScenemaAI | 59 | 99 | 扩散式文本到音频，极小体量实验模型，音频生成架构多样性的注脚 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 1,445 | 229,377 | OpenAI 罕见开源的 token 级隐私检测工具，ONNX 多格式输出，企业合规场景的官方背书 |
| **[microsoft/Fara-7B](https://huggingface.co/microsoft/Fara-7B)** | microsoft | 551 | 18,420 | 基于 Qwen2.5-VL 的多模态微调，微软对开源视觉-语言基座的再投资信号 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 165 | 105,097 | Unsloth 官方 GGUF，MTP（Multi-Token Prediction）加速推理，端侧部署的关键基础设施 |
| **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)** | unsloth | 149 | 97,682 | MoE 版本 MTP-GGUF，激活参数极小却保留多模态能力，"大模型小运行"的技术验证 |
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 1,039 | 3,075,105 | **本周量化模型之王**，307 万下载量证明 Unsloth 在 GGUF 生态的渠道统治力，无 MTP 版本反而更获市场青睐 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 214 | 0 | 零下载但 214 点赞，MLX 框架的 Qwen 对话模板修复，苹果生态开发者的痛点解决 |
| **[antirez/deepseek-v4-gguf](https://huggingface.co/antirez/deepseek-v4-gguf)** | antirez | 111 | 230,548 | Redis 作者个人量化项目，名人效应 + 23 万下载，开源社区"个人品牌即分发渠道"的典型案例 |

---

## 生态信号

**模型家族格局**：Qwen 与 DeepSeek 形成"双极统治"，前者以 3.6 代的密集产品矩阵（27B/35B-MoE × 基础/GGUF/MTP）覆盖全栈场景，后者以 V4 代的 Pro/Flash 二元结构锚定性能-效率光谱。Google Gemma-4 作为第三极，凭 980 万累计下载证明开源基座的长期生态惯性。

**开源权重 vs 闭源**：OpenAI 罕见释放 `privacy-filter` 开源工具，但核心模型仍闭源；微软、Google 持续投资开源多模态基座，"工具开源、模型开放权重、数据闭源"成为新默认。社区量化（Unsloth/antirez）与官方释放形成共生，GGUF 已成为事实上的端侧标准。

**量化与微调活动**：Unsloth 三模型合计 430 万周下载，GGUF 生态进入"基础设施化"阶段；MTP（Multi-Token Prediction）作为新加速技术被快速产品化，但市场反馈显示兼容性优先于极致性能。LTX 2.3 工作流/微调模型的涌现，标志视频生成从"模型竞赛"转向"工具链生态"竞争。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | 307 万周下载的量化模型，MoE 架构 + 3B 激活参数即可驱动多模态对话，是验证"大模型小成本"部署方案的首选样本，Unsloth 的量化品质经社区大规模检验 |
| **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | **On-Device Model** 标签的头部代表，端侧多模态从"能跑"到"好用"的关键节点，598 点赞预示移动 AI 原生应用的爆发前夜，适合探索离线视觉助手、端侧 RAG 等场景 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | 218 万下载的语音克隆基础设施，零样本多语言能力 + Safetensors 安全格式，是构建全球化语音交互产品的最低门槛入口，k2-fsa 团队在语音开源社区的长期信誉保障可用性 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*