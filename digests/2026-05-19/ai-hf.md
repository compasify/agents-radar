# Hugging Face 热门模型日报 2026-05-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-19 00:26 UTC

---

# Hugging Face 热门模型日报 | 2026-05-19

---

## 今日速览

本周 Hugging Face 热度由 **DeepSeek-V4 系列** 与 **Qwen3.6 家族** 主导，两者合计下载量突破 1500 万。多模态领域持续升温，Google Gemma-4-31B 以近千万下载量成为最受欢迎的视觉语言模型之一。社区量化生态活跃，Unsloth 与独立开发者快速跟进主流模型的 GGUF 版本。值得注意的是，text-to-video 和 text-to-speech 等生成式赛道出现多个高点赞新面孔，AI 内容创作工具链日趋完善。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,039 | 3,435,748 | 本周绝对王者，Pro 版本以最高点赞数和 340 万+下载量领跑，延续 DeepSeek 在开源大模型领域的统治力。 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,146 | 1,904,105 | 轻量高速版本，下载量逼近 200 万，平衡性能与推理成本的实用选择。 |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,815 | 5,613,637 | **本周下载冠军**（560 万+），MoE 架构的 35B 参数模型，激活仅 3B，效率与能力兼备。 |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,329 | 3,550,893 | 稠密架构的 27B 版本，下载量超 350 万，与 MoE 版本形成互补矩阵。 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,679 | 9,889,368 | **下载量逼近千万**，Gemma 4 代视觉语言模型，Google 开源战略的核心旗舰。 |
| **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)** | Zyphra | 530 | 145,609 | 新兴推理模型家族，基于自研推理基座微调，小参数挑战复杂任务。 |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 626 | 267,449 | 社区对 Gemma-4 的"去限制化"改造，GGUF 格式本地可跑，反映用户对模型可控性的强烈需求。 |
| **[inclusionAI/Ring-2.6-1T](https://huggingface.co/inclusionAI/Ring-2.6-1T)** | inclusionAI | 75 | 2,406 | 超大规模 1T 参数模型，"bailing_hybrid" 架构标签暗示混合专家设计，低调但技术野心显著。 |
| **[antirez/deepseek-v4-gguf](https://huggingface.co/antirez/deepseek-v4-gguf)** | antirez | 143 | 295,917 | Redis 作者亲自下场量化，技术社区 KOL 参与模型分发的新范式。 |
| **[FrontiersMind/Nandi-Mini-600M-Early-Checkpoint](https://huggingface.co/FrontiersMind/Nandi-Mini-600M-Early-Checkpoint)** | FrontiersMind | 92 | 18,203 | 600M 超小参数实验模型，探索端侧极限，早期 checkpoint 即获关注。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | openbmb | 770 | 80,586 | 清华系端侧视觉语言模型再迭代，4.6 版本在有限算力下追求极致多模态理解。 |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 1,118 | 1,049,229 | **首个百万下载量的 text-to-video 模型**，开源视频生成进入实用化拐点。 |
| **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Supertone | 420 | 24,031 | 韩国 Supertone 第三代 TTS，ONNX 格式优化生产部署，语音合成商业化标杆。 |
| **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)** | HiDream-ai | 392 | 15,024 | 兼具 image-text-to-text 与 image-text-to-image 双能力，"O1" 命名暗示推理增强的图像生成。 |
| **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)** | TencentARC | 144 | 0 | 腾讯 ARC 实验室的图像到 3D 重建模型，零下载因刚发布，学术引用已预注册（arXiv:2605.10922）。 |
| **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)** | SeeSee21 | 408 | 15,495 | 动漫风格 text-to-image 专用模型，GGUF 支持降低创作门槛，垂直社区热度高。 |
| **[ResembleAI/Dramabox](https://huggingface.co/ResembleAI/Dramabox)** | ResembleAI | 160 | 1,001 | 戏剧化语音克隆与生成，"Dramabox" 品牌指向有声内容/播客创作场景。 |
| **[ScenemaAI/scenema-audio](https://huggingface.co/ScenemaAI/scenema-audio)** | ScenemaAI | 99 | 237 | 扩散模型驱动的 text-to-audio/voice-cloning，音频生成赛道的新玩家。 |
| **[RuneXX/LTX-2.3-Workflows](https://huggingface.co/RuneXX/LTX-2.3-Workflows)** | RuneXX | 582 | 0 | LTX 视频模型 2.3 版本的 ComfyUI 工作流合集，工具链整合型内容而非原始权重。 |
| **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | bytedance-research | 67 | 0 | 字节跳动 "any-to-any" 多模态模型，图像/视频生成统一架构，零下载显示尚未开放权重或处于预告期。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[Jackrong/Qwopus3.5-9B-Coder-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-GGUF)** | Jackrong | 101 | 6,462 | 社区基于 Qwen3.5 的 9B 代码模型量化版，"Qwopus" 暗示 Octopus 式多工具代码能力。 |
| **[jackxinning/Leanly_AI](https://huggingface.co/jackxinning/Leanly_AI)** | jackxinning | 119 | 9,432 | 医疗问答专用模型，中英双语支持，GGUF 格式面向本地化部署的临床辅助场景。 |
| **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** | Cactus-Compute | 80 | 241 | JAX 实现的函数调用/工具使用专用模型，"needle" 命名致敬大海捞针的长上下文检索能力。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 286 | 268,305 | Unsloth 官方 Qwen3.6 27B 多 token 预测（MTP）量化版，推理加速技术前沿。 |
| **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)** | unsloth | 247 | 237,613 | MoE 版本同步量化，Unsloth 对 Qwen 生态的跟进速度体现平台化布局。 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 290 | 0 | 纯对话模板修复（无权重下载），MLX 框架适配，社区基础设施建设的典型代表。 |
| **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)** | circlestone-labs | 1,406 | 545,205 | 高点赞但任务标注 N/A，diffusion-single-file + ComfyUI 标签指向生成模型整合包或工作流。 |

---

## 生态信号

**Qwen 与 DeepSeek 形成双寡头格局**：Qwen3.6 系列（27B/35B-A3B）与 DeepSeek-V4 系列合计占据本周下载量前四席，两者分别代表"高效 MoE + 稠密"与"极致性能 + 轻量版"的产品矩阵策略。Google Gemma-4 以近千万下载量证明开源权重仍是大厂获取开发者心智的关键渠道。

**量化生态专业化分工**：Unsloth 作为平台方快速跟进官方模型 GGUF 化，而 antirez 等个人开发者/技术 KOL 的参与，显示模型分发正在从"机构发布"转向"社区网络效应"。MTP（Multi-Token Prediction）成为新量化卖点，推理优化进入下一代技术周期。

**生成式模型从"玩具"到"工具"**：Sulphur-2 百万下载标志着开源视频生成跨越早期采用者鸿沟；TTS 赛道 Supertone、ResembleAI、ScenemaAI 三足鼎立，语音合成商业化路径清晰。any-to-any 架构（Lance）预示 2026 下半年多模态统一模型的竞争焦点。

---

## 值得探索

| 模型 | 推荐理由 |
|:---|:---|
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | **开源视频生成的里程碑**。百万下载量验证了其生成质量与稳定性，diffusers + GGUF 双格式支持覆盖从实验到生产的全链路，建议关注其 endpoints_compatible 标签背后的 API 服务生态。 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | **视觉语言模型的性价比之王**。近千万下载量远超同类，31B 参数在 image-text-to-text 任务中平衡了性能与部署成本，it（instruction-tuned）版本开箱即用，适合作为多模态应用基座。 |
| **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | **下一代架构的预告片**。any-to-any 任务定义 + 图像/视频/多模态三重生成标签，代表字节跳动在统一生成模型上的技术押注。当前零下载可能处于技术预览期，值得跟踪其权重开放节奏与架构细节披露。 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*