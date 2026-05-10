# Hugging Face 热门模型日报 2026-05-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-10 00:20 UTC

---

# Hugging Face 热门模型日报 | 2026-05-10

---

## 今日速览

本周 Hugging Face 生态呈现**多模态爆发与中文模型主导**的双重趋势。Google Gemma-4 系列以三款型号强势霸榜，总下载量突破 1,400 万；Qwen 3.6 系列持续火热，社区衍生出大量 GGUF 量化与去审查微调版本。DeepSeek V4 系列保持高热度，Pro 版单周下载超 116 万。值得注意的是，视频生成模型 Sulphur-2-base 以近 500 点赞登顶榜首，而小米 MiMo-V2.5-Pro 的 Agent 能力引发关注。开源权重模型在下载量上全面压制闭源方案，社区量化生态（GGUF、DFlash）活跃度达到新高峰。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 3,784 | 1,167,697 | DeepSeek 最新旗舰，对话与推理能力全面升级的 MoE 架构大模型 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,011 | 957,448 | V4 轻量版，平衡性能与推理成本的商业化首选 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,576 | 8,894,303 | Gemma-4 核心版本，单周近 900 万下载印证 Google 开源策略成功 |
| **[google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant)** | google | 175 | 47,793 | 面向助手场景的 Gemma-4 特调版，支持 any-to-any 全模态交互 |
| **[google/gemma-4-26B-A4B-it-assistant](https://huggingface.co/google/gemma-4-26B-A4B-it-assistant)** | google | 96 | 28,762 | 26B 激活参数的 MoE 变体，效率与能力的折中方案 |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 959 | 5,581,069 | E4B 轻量版，以极低参数实现全模态能力，边缘部署友好 |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,208 | 2,127,689 | 阿里 Qwen 3.6 代标准版，视觉-语言理解能力显著提升 |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,693 | 3,511,378 | 35B 总参数仅 3B 激活的 MoE 架构，效率标杆 |
| **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)** | XiaomiMiMo | 499 | 31,447 | 小米自研 Agent 专用模型，长上下文与工具调用为核心卖点 |
| **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)** | Zyphra | 326 | 23,620 | 新兴实验室 Zyphra 的首发模型，Apache-2.0 协议降低商用门槛 |
| **[mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)** | mistralai | 309 | 29,683 | Mistral 3.5 代 128B 总参数模型，英法双语优化 |
| **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** | moonshotai | 1,239 | 1,239,626 | 月之暗面 Kimi 系列更新，压缩张量技术降低显存占用 |
| **[talkie-lm/talkie-1930-13b-it](https://huggingface.co/talkie-lm/talkie-1930-13b-it)** | talkie-lm | 256 | 0 | Talkie 系列指令微调版，零下载量暗示早期发布或数据异常 |
| **[z-lab/gemma-4-31B-it-DFlash](https://huggingface.co/z-lab/gemma-4-31B-it-DFlash)** | z-lab | 69 | 3,801 | 社区对 Gemma-4 的 DFlash 量化实验，投机解码加速推理 |
| **[z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash)** | z-lab | 273 | 32,213 | Qwen 3.6 的 DFlash 量化版本，推理效率优化方向受关注 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 489 | 115,477 | **本周点赞冠军**，文本到视频生成新玩家，GGUF 支持降低运行门槛 |
| **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)** | SeeSee21 | 266 | 8,433 | 动漫风格文本到图像模型，社区小众但垂直需求明确 |
| **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)** | TenStrip | 186 | 51,779 | 基于 LTX 架构的图像到视频模型，10Eros 变体暗示成人内容方向 |
| **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)** | HiDream-ai | 101 | 21 | HiDream O1 图像生成版，极低下载量显示尚未正式推广 |
| **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)** | sensenova | 206 | 3,196 | 商汤 SenseNova 系列，MoT（Mixture of Tokens）架构探索多模态统一 |
| **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)** | nvidia | 267 | 116,933 | NVIDIA Nemotron 3 推理专用版，Omni 多模态 + BF16 精度 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 822 | 2,233,532 | **语音领域黑马**，零样本多语言语音克隆，下载量破 220 万 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 1,381 | 180,322 | OpenAI 官方隐私过滤工具，token 级分类识别敏感信息，企业合规刚需 |
| **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)** | AngelSlim | 155 | 17,030 | 1.25bit 极端量化翻译模型，Hunyuan 架构 + 1.8B 参数的边缘部署尝试 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** | unsloth | 633 | 1,355,414 | Unsloth 官方 Qwen 3.6 量化版，135 万下载验证生态基础设施地位 |
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 973 | 2,581,735 | MoE 版 Qwen 3.6 GGUF，258 万下载为量化类最高 |
| **[Jackrong/Qwopus3.6-35B-A3B-v1-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-v1-GGUF)** | Jackrong | 94 | 33,515 | 社区融合 Qwen + Octopus 的 GGUF 变体，Unsloth 优化 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 126 | 0 | Qwen 对话模板修复，MLX 框架适配，零下载反映工具属性 |
| **[DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF)** | DavidAU | 114 | 161,548 | 去审查 + 代码强化 + IMatrix 量化的极端社区微调版 |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 594 | 1,061,556 | **去审查类下载冠军**，Aggressive 命名暗示深度安全对齐移除，视觉能力保留 |

---

## 生态信号

**模型家族格局**：Qwen 3.6 与 Gemma-4 形成"双寡头"，各自占据中文优化与全球开源心智。Qwen 生态的突出特征是**社区衍生密度极高**——30 个热门模型中 Qwen 相关占 8 个，涵盖官方版、GGUF、DFlash、去审查等多条支线。Gemma-4 则凭 Google 背书实现**下载量碾压**，四款型号合计超 1,450 万下载。DeepSeek V4 保持技术旗舰定位但社区衍生不足，Mistral、Kimi 等呈守势。

**开源权重全面主导**：30 个模型全部开源权重，闭源厂商仅 OpenAI 以工具模型（privacy-filter）参与。值得注意的是，**量化已成为模型发布的标配环节**——Unsloth 等基础设施角色崛起，GGUF 格式在消费级 GPU 部署中形成事实标准。1.25bit 极端量化（Hy-MT1.5）与 DFlash 等新格式探索显示，**推理效率优化正从"可选项"变为"必选项"**。

**去审查微调暗流涌动**：HauhauCS、DavidAU 等账号的去审查版本合计下载超 120 万，"Heretic""Uncensored""Aggressive"等命名形成亚文化标识。这一现象既反映开源社区对安全对齐的反弹，也暴露 Hugging Face 平台治理的灰色地带。

---

## 值得探索

| 模型 | 推荐理由 |
|:---|:---|
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | **语音克隆的"平民化"里程碑**。822 点赞 + 223 万下载的反差组合，说明其已跨越技术爱好者圈层进入实用阶段。零样本多语言 + 语音克隆能力，对内容创作、无障碍技术、游戏配音有直接价值。k2-fsa 团队此前在语音识别领域积累深厚，值得追踪其多模态扩展路线。 |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | **"小参数大能力"的极限实验**。仅 E4B（推测 4B 级别）参数却标 any-to-any 全模态，558 万下载验证市场饥渴度。若性能达标，将是边缘 AI 与端侧智能的关键基础设施。建议对比测试其与 Qwen 3.6 小参数版的视觉-语言任务表现。 |
| **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)** | **Agent 架构的"非 OpenAI 路线"探索**。小米作为硬件厂商自研 LLM，长上下文 + Agent 标签指向智能家居、车载等场景的深度整合。499 点赞 / 3.1 万下载的低转化率暗示早期阶段，但手机厂商的模型策略对行业格局有风向标意义。 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*