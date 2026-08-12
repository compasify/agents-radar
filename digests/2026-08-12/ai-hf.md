# Hugging Face 热门模型日报 2026-08-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-12 00:58 UTC

---

# Hugging Face 热门模型日报（2026-08-12）

## 今日速览

今日 Hugging Face 热度被 **MiniMax-H3** 视频生成模型生态主导，其衍生 LoRA、ComfyUI 封装、量化版本密集上榜，形成完整的工具链。**Kimi-K3** 以 10,525 点赞成为本周最热模型，展示多模态对话模型的强大吸引力。**DeepSeek-V4-Flash** 下载量突破 104 万，其 GGUF 量化版也紧随其后，反映高效推理需求旺盛。**百度 Unlimited-OCR** 下载量近 290 万，成为专用模型中的黑马。整体来看，多模态生成与社区微调/量化是当前最活跃的两大方向。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,150 | 1,048,685 | DeepSeek 推出的最新 Flash 系列模型，主打高效文本生成与对话能力。下载量已破百万，是本周最受关注的 LLM 之一。 |
| [LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 550 | 93,668 | Liquid AI 发布的 2.6B 小体量语言模型，面向高效推理场景。以低参数量实现良好生成性能，适合边缘部署。 |
| [maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 332 | 2,049 | Deepgrove 推出的因果语言模型预览版，采用混合专家架构。基于 MoE 设计，具备较高的参数效率。 |
| [Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 303 | 6,148 | inclusionAI 的轻量对话模型，使用自定义代码实现。针对多轮聊天优化，适合对话场景部署。 |
| [Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 152 | 0 | Ling-3.0 系列的极小版本，以 MIT 许可开源。体积更小，便于本地实验和快速原型开发。 |
| [NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 125 | 19,250 | NVIDIA 的混合专家生成模型，总参数 30B 但激活仅 3B。采用 NVFP4 量化，兼顾性能与部署效率。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,574 | 59,368 | MiniMax 发布的图像-文本到视频模型，支持文本/图像生成视频。作为本周生态核心模型，引大量衍生项目。 |
| [Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,093 | 0 | Meta 推出的多模态对话模型，可联合理解图像与文本。预览阶段点赞破千，显示社区高关注度。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,212 | 6,798,796 | MiniMax-H3 的 ComfyUI 单文件版本，便于在 ComfyUI 中直接加载使用。下载量高达 679 万，是最受欢迎的分发形式。 |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,525 | 1,565,484 | 月之暗面发布的多模态大模型，支持图像文本联合理解与特征提取。以 10.5k 点赞成为本周最热模型。 |
| [Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 340 | 20,376 | lightx2v 推出的高效视频生成模型，支持图像到视频等多种生成任务。速度更快，适合快速迭代视频创作。 |
| [MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 275 | 0 | Kijai 为 MiniMax-H3 制作的 ComfyUI 工作流封装。简化了本地部署和节点配置流程。 |
| [PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 264 | 0 | 社区贡献的 MiniMax-H3 文本到视频模型，兼容在线端点部署。以 Apache-2.0 开源，便于二次开发。 |
| [NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 325 | 653 | NVIDIA 的语音对话模型，整合语音识别、合成与对话能力。面向多轮语音交互场景，相关技术源自多篇论文。 |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 210 | 39 | Lightricks 推出的多功能视频生成模型，支持图/文/视频到视频转换。定位导演级视频创作工具。 |
| [MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 191 | 0 | Kijai 发布的 MiniMax-H3 实验版本，包含尚未正式发布的特性。适合关注新功能的开发者探索。 |
| [BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 166 | 708 | 基于 Qwen3.5-MoE 的多模态对话模型，融合图文理解与生成式对话。采用混合专家架构，性能值得期待。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 228 | 6,769 | Mistral 推出的轻量安全分类模型，基于 Mistral 3 构建。用于内容审核、安全防护等场景，支持 vLLM 部署。 |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,018 | 2,892,191 | 百度发布的通用 OCR 模型，支持任意场景文本识别。下载量接近 290 万，是文档数字化与办公自动化的刚需工具。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 651 | 0 | 面向 MiniMax-H3-Turbo 的 LoRA 适配器，支持文本到视频及音频-视频生成微调。可低成本定制风格。 |
| [Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,896 | 2,521,093 | 社区深度微调的 Qwen3.6 27B 模型，主打无审查对话。GGUF 格式适配 llama.cpp，下载量超 252 万。 |
| [Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 304 | 0 | Unsloth 为 Muse-Glimmer-30B 制作的 GGUF 量化版。降低多模态模型本地部署门槛。 |
| [MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 272 | 0 | 将 MiniMax-H3 Turbo LoRA 与 ComfyUI 集成，适配节点化工作流。方便在 ComfyUI 中直接使用 LoRA。 |
| [Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 458 | 0 | Qwen3-VL-32B 的社区极致微调与量化版，INT8 精度并集成 ComfyUI。融合 H3 卷积旋转技术，增强视觉语言能力。 |
| [Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 202 | 0 | Meta 官方发布的 Muse-Glimmer-30B GGUF 量化版。支持本地多模态推理，免去原版部署的显存压力。 |
| [DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 649 | 207,990 | Unsloth 制作的 DeepSeek V4 Flash GGUF 量化版。下载量超 20 万，是本地运行 DeepSeek 的主流选择。 |
| [LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 201 | 111,942 | Liquid AI 官方提供的 LFM2.5 GGUF 量化版。兼容 llama.cpp，下载量超 11 万，便于轻量终端部署。 |
| [MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 129 | 353 | 用于重写 MiniMax-H3 提示词的 LoRA 模块。优化输入描述，可提升视频生成效果与一致性。 |
| [MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 111 | 0 | fal 发布的 MiniMax-H3 LoRA，专注于写实人物视频生成。可针对性增强人物细节与真实感。 |
| [Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 160 | 0 | Qwen3-VL-32B 的 NVFP4 量化版本，用作 MiniMax-H3 的文本编码器。大幅降低显存占用，提升视频生成效率。 |

## 生态信号

今日榜单呈现三条清晰趋势：**MiniMax-H3 家族生态大爆发**，从官方权重到 ComfyUI 封装、Turbo 变体、LoRA、提示词重写器应有尽有，已形成“模型+工具”的全栈闭环；**中国团队模型势头强劲**，Moonshot 的 Kimi-K3、DeepSeek-V4、百度 Unlimited-OCR、Ling 等均取得高热度，开源权重成为主流；**量化与微调活动极其活跃**，GGUF、NVFP4、INT8 等格式覆盖 LLM 和多模态模型，社区微调版本数量已过半，有效推动了开源模型在本地与生产环境的落地。

## 值得探索

- **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**：本周点赞第一，多模态理解与生成能力兼备，且采用压缩张量技术，是研究下一代多模态模型的重要参考。
- **[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**：视频生成领域的焦点模型，衍生生态最丰富，值得深入测试其文生视频与图生视频效果。
- **[Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：下载量近 290 万的通用 OCR 模型，实用性极强，可作为文档解析、视觉信息提取的基础工具。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*