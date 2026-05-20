# Hugging Face 热门模型日报 2026-05-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-20 00:27 UTC

---

# Hugging Face 热门模型日报 | 2026-05-20

---

## 今日速览

DeepSeek-V4-Pro 以 4,067 点赞和 362 万下载强势登顶，成为本周最受关注的开源大语言模型。Google Gemma-4 系列与 Qwen3.6 家族展开激烈角逐，多模态能力已成为头部模型的标配。视频生成领域迎来 Sulphur-2-base 的爆发式增长，而社区量化生态（GGUF）持续繁荣，Unsloth 等工具链进一步降低了大模型部署门槛。值得注意的是，"any-to-any" 统一架构开始涌现，字节跳动的 Lance 代表了下一代多模态融合的新方向。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,067 | 3,622,763 | 本周绝对霸主，DeepSeek V4 系列旗舰，以极高效率的对话能力和开源权重挑战闭源巨头 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,159 | 1,998,112 | V4 系列的轻量高速版本，200 万下载验证其在生产环境的广泛采用 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,693 | 10,045,599 | Google Gemma 4 代突破千万下载，31B 指令版成为开源多模态 LLM 的新标杆 |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,826 | 5,711,500 | Qwen3.6 MoE 架构旗舰，激活参数仅 3.5B 却达 35B 性能，效率与效果的双重突破 |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,344 | 3,681,887 | Qwen3.6 稠密架构主力，持续巩固阿里在开源 LLM 生态的核心地位 |
| **[inclusionAI/Ring-2.6-1T](https://huggingface.co/inclusionAI/Ring-2.6-1T)** | inclusionAI | 81 | 3,038 | 万亿参数稀疏模型预览，探索超大规模 MoE 的推理效率边界 |
| **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)** | Zyphra | 536 | 146,253 | 基于推理基座的衍生模型，小体量高性能的代表，适合边缘部署研究 |
| **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 118 | 884 | 10 亿参数垂直领域模型，探索特定场景下小模型的专业化路径 |
| **[FrontiersMind/Nandi-Mini-600M-Early-Checkpoint](https://huggingface.co/FrontiersMind/Nandi-Mini-600M-Early-Checkpoint)** | FrontiersMind | 99 | 18,458 | 6 亿参数微型模型早期版本，超轻量 LLM 研究的前沿探索 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 1,172 | 1,114,657 | 本周视频生成黑马，百万级下载验证其作为开源 Sora 挑战者的潜力 |
| **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | openbmb | 804 | 144,826 | 面壁智能端侧多模态王者，4.6 代在视觉理解效率上持续领先 |
| **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | bytedance-research | 304 | 171 | 字节跳动"任意到任意"统一架构，多模态融合的下一代范式探索 |
| **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)** | HiDream-ai | 400 | 15,822 | 融合 Qwen3 VL 的图像生成模型，文本-图像双向交互的创新尝试 |
| **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)** | TencentARC | 155 | 0 | 腾讯 ARC 单图重建 3D 模型，计算机视觉与图形学的交叉突破 |
| **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)** | SeeSee21 | 418 | 15,794 | 动漫风格文生图专用模型，垂直美学社区的活跃创作工具 |
| **[RuneXX/LTX-2.3-Workflows](https://huggingface.co/RuneXX/LTX-2.3-Workflows)** | RuneXX | 589 | 0 | LTX 视频生成 2.3 版工作流，ComfyUI 生态的重要节点更新 |
| **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Supertone | 466 | 28,681 | 韩国 Supertone 第三代 TTS，情感表达与声音克隆的商业级水准 |
| **[ResembleAI/Dramabox](https://huggingface.co/ResembleAI/Dramabox)** | ResembleAI | 181 | 1,118 | 戏剧化语音合成专用模型，AI 配音与内容创作的新工具 |
| **[ScenemaAI/scenema-audio](https://huggingface.co/ScenemaAI/scenema-audio)** | ScenemaAI | 108 | 297 | 扩散模型驱动的文本到音频生成，影视配乐自动化的新方向 |
| **[Aratako/Irodori-TTS-500M-v3](https://huggingface.co/Aratako/Irodori-TTS-500M-v3)** | Aratako | 71 | 0 | 日语 TTS 专业模型，小语种语音合成的高质量开源贡献 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[microsoft/Fara-7B](https://huggingface.co/microsoft/Fara-7B)** | microsoft | 581 | 14,464 | 微软基于 Qwen2.5-VL 的多模态模型，7B 体量展现强视觉理解能力 |
| **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** | Cactus-Compute | 91 | 268 | JAX 函数调用与工具使用专用架构，Agent 基础设施的创新探索 |
| **[facebook/VGGT-Omega](https://huggingface.co/facebook/VGGT-Omega)** | facebook | 59 | 0 | Meta 视觉几何与跟踪研究模型，3D 视觉理解的基础模型更新 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 329 | 337,076 | Unsloth 官方多 token 预测 GGUF 量化，消费级 GPU 运行 27B 多模态 |
| **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)** | unsloth | 270 | 296,380 | MoE 架构 GGUF 量化版本，激活参数极小却保持多模态能力 |
| **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)** | circlestone-labs | 1,425 | 558,113 | 社区热门扩散模型单文件版，ComfyUI 生态的高人气创作工具 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 311 | 0 | MLX 框架 Qwen 对话模板修复，Apple Silicon 部署者的关键补丁 |
| **[Jackrong/Qwopus3.5-9B-Coder-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-GGUF)** | Jackrong | 119 | 12,117 | 社区代码模型 GGUF 量化，9B 体量适合本地编程助手场景 |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 630 | 268,561 | Gemma-4 26B 去审查 GGUF v2，社区二次开发的高下载验证需求 |

---

## 生态信号

**Qwen 与 DeepSeek 双雄并立，Gemma-4 强势插足。** 阿里 Qwen3.6 系列（27B/35B-MoE）与 DeepSeek-V4 形成直接竞争，两者均将多模态作为标配；Google Gemma-4 以千万级下载证明开源权重策略的成熟。MoE 架构成为效率革命的核心——Qwen3.6-35B-A3B 以 3.5B 激活参数撬动 35B 性能，DeepSeek-V4 系列则在对话质量上建立口碑。**量化生态进入"多模态 GGUF"时代**：Unsloth 率先将视觉-语言模型纳入 GGUF 体系，打破量化仅服务于文本 LLM 的局限。社区微调呈现"去审查化"与"垂直场景化"两极：supergemma4-uncensored 高下载反映用户对内容过滤的反弹，而 Anima、Z-Anime 等美学专用模型则证明细分市场的活跃。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | "Any-to-any" 架构是 2026 年最值得关注的技术方向之一。Lance 试图统一图像生成、视频生成与多模态理解于单一权重，若验证成功，将彻底改变当前"为每个模态单独训练"的碎片化现状。171 下载意味着早期红利窗口。 |
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | 首个支持多 token 预测（MTP）的多模态 GGUF 量化，337K 下载验证其稳定性。对于拥有 24GB VRAM 的开发者，这是本地部署"准 GPT-4V"级别能力的最低成本路径，Unsloth 的推理加速进一步优化体验。 |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | 开源视频生成模型的里程碑式突破——百万级下载与 diffusers 生态兼容意味着它可能成为"视频界的 Stable Diffusion"。对于内容创作者和研究者，这是介入 AI 视频生成的最佳时机，社区工作流和 LoRA 生态正在快速形成。 |

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*