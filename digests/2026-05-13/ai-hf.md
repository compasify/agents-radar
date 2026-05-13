# Hugging Face 热门模型日报 2026-05-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-13 00:24 UTC

---

# Hugging Face 热门模型日报 | 2026-05-13

---

## 今日速览

本周 Hugging Face 热度被 **Qwen 3.6 家族**与 **DeepSeek V4 系列**主导，两者合计下载量突破千万。Google **Gemma 4** 以全新架构强势回归，31B 版本单周下载超 900 万，成为开源社区新宠。多模态领域持续升温，HiDream 推出类 O1 推理图像生成模型，而视频生成赛道出现 **Sulphur-2-base** 与 **LTX2.3-10Eros** 等新锐。社区量化生态异常活跃，Unsloth 独占 3 个 GGUF 热门席位，"去审查化"微调模型流量显著增长。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 3,890 | 2,017,835 | DeepSeek 新一代旗舰，Pro 版本以近 4000 赞登顶本周榜首，延续其"高性能+高开放"路线 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,057 | 1,162,290 | 轻量化版本下载破百万，平衡速度与质量，适合生产环境部署 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,609 | 9,119,339 | **本周下载王**——Gemma 4 迭代版以 910 万下载碾压全场，Google 开源策略成效显著 |
| **[google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant)** | google | 217 | 66,561 | 面向助手场景的 Gemma 4 变体，标注"any-to-any"暗示原生多模态能力 |
| **[google/gemma-4-26B-A4B-it-assistant](https://huggingface.co/google/gemma-4-26B-A4B-it-assistant)** | google | 119 | 47,749 | 26B 激活参数的 MoE 架构，A4B 标识或指向 4-bit 激活量化 |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,257 | 2,446,478 | Qwen 3.6 系列主力型号，视觉理解能力升级，下载量稳居第一梯队 |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,735 | 3,858,503 | **MoE 标杆**——35B 总参数仅激活 3B，效率与效果兼得，点赞数居全榜第三 |
| **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)** | Zyphra | 449 | 66,119 | 新兴架构 ZAYA 首作，基于推理专用基座微调，arxiv 预印本同步发布 |
| **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** | moonshotai | 1,272 | 1,423,653 | Kimi 系列更新，引入 compressed-tensors 压缩技术，长上下文优势延续 |
| **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)** | XiaomiMiMo | 511 | 41,654 | 小米自研模型迭代，主打 Agent 能力与超长上下文，生态野心显现 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 730 | 157,648 | **视频生成黑马**——全新 Sulphur 系列首作，GGUF 格式+端点兼容，降低视频生成部署门槛 |
| **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | openbmb | 392 | 0 | 面壁智能 MiniCPM 视觉版迭代，4.6 版本尚未开放下载但已获高关注，端侧多模态看点 |
| **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)** | HiDream-ai | 270 | 3,418 | 首个"O1 风格"图像生成模型，将链式思考引入文生图，探索生成式推理新范式 |
| **[HiDream-ai/HiDream-O1-Image-Dev](https://huggingface.co/HiDream-ai/HiDream-O1-Image-Dev)** | HiDream-ai | 83 | 1,367 | O1-Image 开发版，基于 Qwen3-VL 架构，供研究者复现与改进 |
| **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)** | SeeSee21 | 320 | 9,477 | 动漫风格文生图专用模型，GGUF 量化支持本地运行，二次元社区热度高 |
| **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)** | TenStrip | 234 | 64,008 | LTX 视频生成模型 2.3 版本社区微调，"10Eros"暗示特定美学方向 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 855 | 2,224,595 | **语音克隆爆款**——零样本多语言 TTS，下载破 220 万，语音合成领域现象级开源 |
| **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Supertone | 123 | 1,837 | 韩国 Supertone 第三代 TTS，ONNX 格式优化推理，音乐/语音合成边界模糊化 |
| **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)** | sensenova | 239 | 4,528 | 商汤"任意模态转任意模态"实验模型，MoT（Mixture of Tokens）架构探索统一表征 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 1,421 | 190,993 | **罕见 OpenAI 开源**——PII 检测与脱敏专用模型，ONNX+Safetensors 双格式，企业合规刚需 |
| **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)** | AngelSlim | 167 | 17,260 | 极端量化翻译模型——1.25bit 压缩 1.8B 参数，Hunyuan 架构，边缘设备翻译新极限 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[Jackrong/Qwopus3.6-35B-A3B-v1-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-v1-GGUF)** | Jackrong | 116 | 67,205 | Qwen 3.6 MoE 社区 GGUF 化，"Qwopus"暗示八爪鱼式多能力聚合 |
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 1,009 | 2,733,708 | **量化之王**——Unsloth 官方 MoE 量化版，单模型下载破 270 万，效率工具链标杆 |
| **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** | unsloth | 662 | 1,468,142 | 27B 密集模型 GGUF，Unsloth 三剑客之一，覆盖主流消费级 GPU |
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 67 | 0 | 多 token 预测（MTP）变体量化版，前瞻性布局，下载尚未启动 |
| **[havenoammo/Qwen3.6-27B-MTP-UD-GGUF](https://huggingface.co/havenoammo/Qwen3.6-27B-MTP-UD-GGUF)** | havenoammo | 86 | 43,428 | "UD"可能指 Ultra-Deep 或 Unsloth-Dynamic，社区对 MTP 量化的快速跟进 |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 559 | 287,827 | **去审查化流量密码**——Gemma 4 26B 解除安全限制版，llama.cpp 快速推理，社区争议与需求并存 |
| **[DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF)** | DavidAU | 136 | 197,110 | 命名极长的"异端"微调版，融合代码能力与 IMatrix 量化，去审查+多能力叠加 |
| **[z-lab/gemma-4-31B-it-DFlash](https://huggingface.co/z-lab/gemma-4-31B-it-DFlash)** | z-lab | 81 | 6,423 | 推测解码（speculative-decoding）加速版，DFlash 或为小模型草稿机制 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 160 | 0 | 聊天模板修复工具，MLX 框架适配，解决 Qwen 3.5/3.6 格式兼容痛点 |

---

## 生态信号

**Qwen 与 Gemma 形成双寡头格局。** Qwen 3.6 家族覆盖 27B/35B-MoE 及密集/MoE/MTP 多形态，Unsloth 官方量化矩阵完成生态闭环；Google Gemma 4 则以 31B 版本 910 万下载证明开源旗舰的号召力，MoE 变体同步推进效率路线。DeepSeek V4 延续"Pro+Flash"双轨策略，但点赞-下载比显示其更偏开发者工具属性。

**开源权重持续挤压闭源空间。** OpenAI 罕见发布 privacy-filter 专用模型，或反映其对垂直场景开源的试探性回归；Moonshot、Xiaomi 等中国厂商加速 HuggingFace 布局，模型发布即开源成为默认选项。

**量化生态呈现"极端化"与"专业化"并行。** 1.25bit Hy-MT 探索压缩极限，Unsloth 三模型合计下载超 420 万验证工具链价值；与此同时，"uncensored"标签模型流量激增，社区对安全对齐的反思与商业需求形成张力。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)** | 将 O1 的链式思考机制引入图像生成，可能开启"可解释文生图"新范式。若推理轨迹可视化，设计师可干预中间步骤，颠覆现有黑盒交互模式。开发版同步开放，适合快速验证假设。 |
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | OpenAI 极少在 HF 发布原始模型，此作兼具研究价值与合规刚需。双格式（ONNX/Safetensors）+ 企业级 token 分类设计，可作为 LLM 应用隐私层的基准组件，观察其后续迭代策略亦具风向标意义。 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | 220 万下载、零样本多语言、语音克隆三合一，已超越技术验证阶段。k2-fsa 团队以语音识别工具链闻名，此次跨域 TTS 成功或预示语音基础模型的"大一统"趋势，实时交互与个性化场景落地在即。 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*