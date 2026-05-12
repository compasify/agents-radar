# Hugging Face 热门模型日报 2026-05-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-12 00:22 UTC

---

# Hugging Face 热门模型日报 | 2026-05-12

---

## 今日速览

本周 Hugging Face 生态呈现**多模态爆发与推理效率并重**的态势。DeepSeek-V4-Pro 以近 4000 点赞稳居榜首，Qwen3.6 系列（27B/35B-MoE）形成完整矩阵覆盖从云端到边缘的部署需求。Google Gemma-4 家族密集发布三款变体，剑指原生多模态助手场景。社区量化生态活跃，Unsloth 主导的 GGUF 版本下载量合计超 400 万，显示边缘部署需求强劲。视频生成领域 Sulphur-2-base 与 LTX2.3-10Eros 形成差异化竞争。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 3,856 | 2,017,835 | 本周绝对王者，DeepSeek V4 系列旗舰，推理与对话能力全面领先 |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,722 | 3,858,503 | MoE 架构高效巨兽，激活参数仅 3B 却匹敌稠密大模型，下载量登顶 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,603 | 9,119,339 | Gemma-4 系列核心版本，视觉-语言原生融合，下载量突破 900 万 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,039 | 1,162,290 | V4 轻量版，平衡性能与成本，适合高并发 API 场景 |
| **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** | moonshotai | 1,258 | 1,423,653 | 长上下文专家，支持超长文档与视频理解，压缩推理技术亮点 |
| **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)** | XiaomiMiMo | 508 | 41,654 | 小米 Agent 专用模型，长上下文与工具调用优化，端侧智能布局 |
| **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)** | Zyphra | 421 | 66,119 | 基于推理基座的 8B 轻量模型，论文已发 arxiv，小模型竞赛新选手 |
| **[google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant)** | google | 209 | 66,561 | 官方助手微调版，any-to-any 架构，原生支持工具与多轮规划 |
| **[google/gemma-4-26B-A4B-it-assistant](https://huggingface.co/google/gemma-4-26B-A4B-it-assistant)** | google | 113 | 47,749 | 26B 激活参数的 MoE 助手变体，Google 多尺寸覆盖策略体现 |
| **[google/gemma-4-E4B-it-assistant](https://huggingface.co/google/gemma-4-E4B-it-assistant)** | google | 64 | 51,766 | 4B 激活超轻量版，端侧 any-to-any 助手的激进尝试 |
| **[mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)** | mistralai | 315 | 43,141 | 128B 稠密巨兽，英法双语优化，vLLM 推理生态深度整合 |
| **[z-lab/gemma-4-31B-it-DFlash](https://huggingface.co/z-lab/gemma-4-31B-it-DFlash)** | z-lab | 75 | 6,423 | 社区推测解码加速版，基于 Qwen3 技术嫁接 Gemma-4，创新实验 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 624 | 157,648 | 本周视频生成黑马，GGUF 量化+端点兼容，开源 T2V 基础设施 |
| **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)** | HiDream-ai | 240 | 3,418 | 基于 Qwen3-VL 的图像生成模型，"O1" 暗示推理时优化，图像质量突破 |
| **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)** | SeeSee21 | 308 | 9,477 | 动漫风格 T2I 社区热门，GGUF 量化支持，垂直场景深耕 |
| **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)** | TenStrip | 220 | 64,008 | LTX-Video 2.3 社区微调版，I2V 流程成熟，视频创作者工具链 |
| **[HiDream-ai/HiDream-O1-Image-Dev](https://huggingface.co/HiDream-ai/HiDream-O1-Image-Dev)** | HiDream-ai | 80 | 1,367 | O1-Image 开发预览版，供研究者提前验证架构 |
| **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | openbmb | 184 | 0 | 端侧视觉小钢炮，4.6 版本刚发布，零下载显示尚处预热期 |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,239 | 2,446,478 | 稠密架构视觉语言主力，性价比之选，下载量验证市场需求 |
| **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)** | sensenova | 230 | 4,528 | 商汤"任意模态"MoT 架构，8B 小体积挑战全模态统一 |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 852 | 2,224,595 | 语音合成爆款，零样本多语言克隆，下载量破 220 万 |
| **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Supertone | 94 | 1,837 | 韩厂 TTS 专业模型，ONNX 推理优化，音乐/语音合成双栖 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 1,409 | 190,993 | OpenAI 罕见开源，PII 检测与脱敏专用，企业合规刚需工具 |
| **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)** | AngelSlim | 164 | 17,260 | 1.25bit 极端量化翻译模型，Hunyuan 基座，边缘 NMT 极限压缩 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 995 | 2,733,708 | Unsloth 官方 MoE GGUF，273 万下载验证"量化即服务"商业模式 |
| **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** | unsloth | 651 | 1,468,142 | 稠密版配套量化，与 35B-A3B 形成双轨覆盖 |
| **[Jackrong/Qwopus3.6-35B-A3B-v1-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-v1-GGUF)** | Jackrong | 108 | 67,205 | 社区独立量化版本，Unsloth 生态外溢，技术路线验证 |
| **[DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF)** | DavidAU | 130 | 197,110 | "Heretic" 去审查+代码特调，IMatrix 量化，社区激进实验代表 |
| **[havenoammo/Qwen3.6-27B-MTP-UD-GGUF](https://huggingface.co/havenoammo/Qwen3.6-27B-MTP-UD-GGUF)** | havenoammo | 72 | 43,428 | MTP 多 token 预测+UD 量化，前沿推理优化技术整合 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 145 | 0 | MLX 框架聊天模板修复，苹果生态开发者刚需，零下载显示 niche 工具属性 |

---

## 生态信号

**Qwen 家族**已成事实上的开源基础设施：官方 3.6 系列覆盖 27B 稠密/35B-MoE，Unsloth 等量化厂商快速跟进，形成"官方发布→社区量化→边缘部署"的完整飞轮，下载量合计超 1000 万。**Gemma-4** 以 31B/26B-A4B/E4B 三档 any-to-any 助手矩阵强势入局，Google 正从"开放权重"转向"开放助手形态"。**DeepSeek** 维持高端定位，V4-Pro 与 Flash 双轨服务 API 与私有化市场。值得警惕的是量化生态的**同质化竞争**：30 个热门模型中 6 个为 Qwen3.6 的 GGUF 变体，社区创新空间受挤压；同时 **1.25bit 级极端量化**（Hy-MT）与 **推测解码**（DFlash）代表效率优化进入深水区。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | 当前开源 LLM 能力天花板，3856 点赞与 200 万下载双重验证。若需构建高可靠对话系统或替代 GPT-4 级 API，此为首选基座。注意硬件门槛，建议配合 vLLM/SGLang 部署。 |
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | MoE + GGUF 的组合重新定义"本地大模型"：35B 总参数/3B 激活，消费级 GPU 可跑，273 万下载证明工程成熟度。适合构建低成本私有 Copilot 或边缘 Agent。 |
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | OpenAI 罕见开源且带 ONNX 格式，企业数据合规的"即插即用"组件。1409 点赞反映市场稀缺性，可与任意 RAG 流程集成，建议关注其检测粒度与误杀率实测。 |

---

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*