# Hugging Face 热门模型日报 2026-05-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-14 00:25 UTC

---

# Hugging Face 热门模型日报 | 2026-05-14

---

## 今日速览

本周 Hugging Face 热度由 **DeepSeek-V4 系列** 与 **Qwen3.6 家族** 主导，两者合计占据近半数上榜席位。多模态领域亮点频现：HiDream-ai 推出类 O1 推理链的图像生成模型，OpenBMB 发布端侧优化的 MiniCPM-V-4.6 视觉模型。社区量化生态持续繁荣，Unsloth 以 4 款 GGUF 变体成为最活跃的量化贡献者。值得注意的是，OpenAI 罕见地在 HF 发布官方隐私过滤模型，释放开源协作信号。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 3,925 | 2,420,384 | 本周绝对王者，Pro 版本以接近 4000 赞和 240 万下载量领跑，巩固 DeepSeek 在开源大模型的话语权 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,074 | 1,365,230 | Flash 轻量版以更低推理成本覆盖更广泛场景，与 Pro 形成高低搭配的产品矩阵 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,622 | 9,725,696 | Gemma 4 代 31B 指令版逼近千万下载，是本周下载量最高的模型，Google 开源战略持续加码 |
| **[google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant)** | google | 231 | 93,228 | 面向助手场景的 any-to-any 变体，探索 Gemma 4 的通用代理能力边界 |
| **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)** | Zyphra | 474 | 110,182 | 基于推理基座的 8B 模型，标签关联 arxiv 预印本，学术到工业的快速转化样本 |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 571 | 292,889 | 社区对 Gemma 4 的"去审查"改造，29 万下载反映特定用户群体的强需求 |
| **[antirez/deepseek-v4-gguf](https://huggingface.co/antirez/deepseek-v4-gguf)** | antirez | 97 | 142,595 | Redis 作者 antirez 亲自量化 DeepSeek-V4，技术名人效应带动社区关注 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 829 | 535,069 | 本周文本到视频冠军，53 万下载验证其作为 Diffusers 生态核心视频模型的地位 |
| **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | openbmb | 481 | 3,494 | 端侧多模态新标杆，"On-Device Model"标签直指手机/边缘部署场景 |
| **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)** | HiDream-ai | 298 | 7,747 | 将 O1 类推理链引入图像生成，实现"思考后作画"的可控文生图 |
| **[HiDream-ai/HiDream-O1-Image-Dev](https://huggingface.co/HiDream-ai/HiDream-O1-Image-Dev)** | HiDream-ai | 92 | 2,740 | O1-Image 的开发预览版，供研究者追踪其技术演进 |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,273 | 2,772,193 | 视觉语言双修的 27B 主力模型，Qwen3.6 系列的开路先锋 |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,751 | 4,293,332 | MoE 架构 35B 总参数/3B 激活参数，以 430 万下载成为 Qwen 家族最受欢迎模型 |
| **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)** | SeeSee21 | 348 | 11,486 | 动漫风格文生图专项模型，GGUF 支持降低二次元创作者的硬件门槛 |
| **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)** | TenStrip | 244 | 84,903 | LTX 视频生成系列的社区微调版本，8.5 万下载显示图生视频需求的旺盛 |
| **[RuneXX/LTX-2.3-Workflows](https://huggingface.co/RuneXX/LTX-2.3-Workflows)** | RuneXX | 535 | 0 | ComfyUI 工作流集合，零下载但高点赞反映"即用型生态包"的新传播模式 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 871 | 2,235,518 | 多语言零样本语音克隆，223 万下载证明 TTS 领域对开源方案的渴求 |
| **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Supertone | 163 | 4,954 | 韩国 Supertone 的 TTS 模型，ONNX 格式优化生产环境部署 |
| **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)** | sensenova | 243 | 7,734 | 商汤 SenseNova 的 any-to-any 探索，MoT（Mixture of Tokens）架构值得关注 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 1,430 | 206,981 | OpenAI 罕见官方开源，PII 检测与脱敏专用，释放企业合规市场信号 |
| **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)** | AngelSlim | 168 | 17,352 | 1.25bit 极端量化翻译模型，探索低比特推理的可用性边界 |
| **[jackxinning/Leanly_AI](https://huggingface.co/jackxinning/Leanly_AI)** | jackxinning | 68 | 10,610 | 医疗问答专用模型，中英双语支持，垂直领域微调的小众需求 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 1,023 | 2,909,275 | Unsloth 量化版 Qwen MoE，近 300 万下载验证其作为"社区官方量化"的地位 |
| **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** | unsloth | 671 | 1,569,380 | 27B  dense 模型的 GGUF 标准版，覆盖中端硬件用户 |
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 102 | 25,924 | 多 token 预测（MTP）加速版本，Unsloth 对推理优化的深度探索 |
| **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)** | unsloth | 94 | 15,355 | MoE+MTP 双重优化，技术组合最前沿但受众较窄 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 177 | 0 | MLX 框架的聊天模板修复，零下载高点赞反映苹果生态开发者的痛点共鸣 |
| **[Jackrong/Qwopus3.6-35B-A3B-v1-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-v1-GGUF)** | Jackrong | 121 | 96,759 | 社区第三方量化版本，TGI 兼容性标签瞄准生产部署场景 |
| **[havenoammo/Qwen3.6-27B-MTP-UD-GGUF](https://huggingface.co/havenoammo/Qwen3.6-27B-MTP-UD-GGUF)** | havenoammo | 89 | 51,213 | "UD"（Ultra Dynamic）量化方案，社区量化方法的多元化竞争 |
| **[DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF)** | DavidAU | 145 | 237,605 | 极长命名的"终极改造版"：去审查+代码+IMatrix 优化，社区魔改的集大成者 |

---

## 生态信号

**模型家族格局**：Qwen3.6 与 DeepSeek-V4 形成双寡头，前者以 8 个上榜型号（含 5 款量化变体）展现生态广度，后者以 Pro/Flash 高低搭配深耕性能层级。Gemma 4 凭 Google 背书稳居第三极，但社区"去审查"改造（supergemma4-uncensored）暗示官方对齐策略与用户需求的张力。

**开源权重 vs 闭源**：OpenAI 发布 privacy-filter 是标志性事件——闭源巨头开始以"工具层开源"策略渗透企业合规市场，而非直接开放核心模型。这代表一种新博弈：基础权重闭源，周边能力开源以建立生态依赖。

**量化生态**：Unsloth 以系统化、品牌化的 GGUF 生产成为"准官方"量化方，其 4 款模型合计下载超 450 万。但社区量化者（DavidAU、havenoammo、Jackrong）通过差异化方法（IMatrix、UD、TGI 兼容）仍获可观流量，显示量化领域尚未形成绝对垄断，技术多样性仍有空间。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)** | 首个将"慢思考"推理链引入图像生成的开源尝试，可能重塑文生图的可控性范式。若其 O1 机制可解释性强，将为多模态推理提供新研究基线。 |
| **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | "On-Device Model"标签直击端侧 AI 痛点，仅 3,494 下载但 481 点赞的高赞下比预示早期采用者的高度认可。适合验证手机端多模态的可行性。 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | 223 万下载的 TTS 隐形冠军，零样本语音克隆+多语言覆盖，且来自语音技术老牌团队（k2-fsa）。若需构建语音应用，这是当前开源栈的最成熟选择。 |

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*