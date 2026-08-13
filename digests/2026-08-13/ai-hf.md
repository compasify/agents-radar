# Hugging Face 热门模型日报 2026-08-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-13 01:00 UTC

---

# Hugging Face 热门模型日报（2026-08-13）

## 今日速览

今日 Hugging Face 热点高度集中在**视频生成**与**高效部署**两条主线：MiniMax-H3 家族衍生出官方模型、ComfyUI 适配、LoRA 微调与 GGUF 量化等十余个版本，生态链极为完整；同时 Kimi-K3 以 1.05 万点赞、156 万下载登顶本周热门，DeepSeek-V4-Flash 下载量也突破 104 万。值得注意的是，本周榜单中 GGUF、FP8、LoRA、NVFP4 等微调/量化形态占比接近 40%，社区对“开箱即用”模型的渴求十分强烈。此外，Qwen、NVIDIA Nemotron、inclusionAI Ling 等系列持续迭代，开源权重生态依旧活跃。

## 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,238 | 1,048,685 | DeepSeek 新一代高效对话模型，主打低延迟文本生成。周下载量突破 100 万，是当前开源 LLM 中最热门的“即拿即用”选择之一。 |
| [LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 582 | 93,668 | LiquidAI 推出的 2.6B 轻量语言模型，面向低资源部署。下载量接近 10 万，说明小模型在边缘推理市场中需求强劲。 |
| [Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 498 | 978 | Qwen 系列超大规模 MoE 模型，总参数量 2.4T、激活约 95B。代表阿里在稀疏大模型上的最新探索，适合高并发/高能力场景。 |
| [maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 346 | 2,049 | deepgrove 的 MoE 文本生成预览模型。点赞 346，是一个值得留意的早期社区实验性模型。 |
| [Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 318 | 6,148 | Ling-3.0 的快速对话版本，兼顾轻量化和响应速度。支持 conversational 场景，适合实时交互型应用。 |
| [Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 189 | 0 | inclusionAI 的 Ling-3.0 微型版本，采用 bailing_hybrid 架构。目标是将语言能力压缩到极小体积，目前刚发布尚未产生下载。 |
| [NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 116 | 15,740 | NVIDIA 的高吞吐 MoE 语言模型，30B 总参/3B 激活。BF16 精度版本为企业部署提供平衡性能与成本的选择。 |

## 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,583 | 1,565,484 | 月之暗面发布的 Kimi 多模态大模型，使用压缩张量技术降低推理开销。以 10,583 点赞、156 万下载成为本周 Hugging Face 最热门模型。 |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,716 | 83,484 | MiniMax 旗舰视频生成模型，支持图生视频/文生视频。点赞超过 3,700，下载超 8 万，是本周视频生成赛道的核心玩家。 |
| [Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,295 | 0 | meta 的视觉-语言对话模型，支持图像文本输入并生成文本。点赞超过 1,200 但下载为 0，预计是刚上线的新模型，值得后续观察。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,258 | 6,798,796 | MiniMax-H3 的官方 ComfyUI 适配版本。下载量高达 679 万，从侧面说明 ComfyUI 已成为视频生成的主流操作界面。 |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 568 | 39 | Lightricks 的图像到视频模型，支持多模态视频转换。以 diffusion-single-file 发布，便于直接集成到推理框架。 |
| [Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 411 | 20,376 | lightx2v 推出的 MiniMax-H3 Turbo 社区版本，支持图生视频、文生视频等。下载量超过 2 万，是快速生成场景的常用替代。 |
| [NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 352 | 653 | NVIDIA 的语音聊天模型，面向语音交互场景。结合多篇语音相关论文，显示 NVIDIA 在语音多模态模型方向的持续投入。 |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 294 | 0 | 社区开发者 Kijai 发布的 MiniMax-H3 ComfyUI 支持仓库。点赞 294，下载 0，可能是刚提交的测试占位或适配组件预告。 |
| [PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 287 | 0 | 社区作者制作的 MiniMax-H3 文本到视频变体，采用 Apache-2.0 许可并兼容 Endpoints。点赞 287，为开源视频生成提供特色化选择。 |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 214 | 0 | Kijai 的 MiniMax-H3 实验版，面向探索性视频生成工作流。与 ComfyUI 生态高度联动，适合进阶玩家测试。 |
| [BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 182 | 708 | 基于 Qwen3.5-MoE 的图像文本到文本模型。将视觉理解与对话能力结合，适合多模态助手类应用。 |

## 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,955 | 2,521,093 | 社区最热门的 Qwen3.6 27B 微调 GGUF 版本之一，主打“去审查”和“无限制”对话。下载量高达 252 万，是本周下载量最高的量化微调模型。 |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 701 | 0 | MiniMax-H3 Turbo 的 LoRA 权重，用于低成本微调/风格迁移。点赞超过 700，但下载为 0，可能是刚公开上传。 |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 666 | 207,990 | unsloth 为 DeepSeek-V4-Flash 制作的 GGUF 量化版。下载量突破 20 万，是本地运行 DeepSeek 的重要选择。 |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 477 | 0 | 基于 Qwen3-VL-32B 的社区微调 + INT8 量化版本，并适配 ComfyUI。集成了“H3/Heretic”风格增强，点赞 477。 |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 359 | 0 | unsloth 对 Muse-Glimmer-30B 的 GGUF 量化版本。让视觉语言模型可以更方便地在 llama.cpp 类框架中运行，点赞 359。 |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 301 | 0 | 专为 ComfyUI 准备的 MiniMax-H3 Turbo LoRA 适配器，便于在 ComfyUI 中直接加载。点赞 301，是视频 LoRA 生态的一部分。 |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 240 | 0 | 官方发布的 Muse-Glimmer-30B GGUF 版本。为多模态模型本地部署提供兼容格式，点赞 240。 |
| [NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 204 | 19,250 | NVIDIA 官方的 NVFP4 4-bit 浮点量化版本，大幅降低显存占用。适合在 NVIDIA 硬件上高效部署 Nemotron MoE 模型。 |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 146 | 0 | 面向 MiniMax-H3 的写实人物 LoRA，专注于人物和真实感效果。点赞 146，适合需要高质量人物的视频生成。 |
| [lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 141 | 353 | 用于改写视频生成提示词的 LoRA，能够提升 MiniMax-H3 的 prompt 质量。点赞 141，是视频创作工作流的辅助增强。 |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 137 | 781 | unsloth 提供的 MiniMax-H3 GGUF 量化，支持 stable-diffusion.cpp 离线视频生成。点赞 137，降低了视频模型本地部署门槛。 |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 114 | 3,851 | Qwen3.8 MoE 的官方 FP8 量化版本，显著降低显存需求。适合企业级大规模部署，是 Qwen 超大规模模型的压缩实践。 |

## 生态信号

本周生态呈现三个明确信号：第一，MiniMax-H3 家族已形成完整“基础模型 + ComfyUI 适配 + LoRA + GGUF”的衍生链条，视频生成正在复制 LLM 的社区玩法；第二，量化与微调活动持续活跃，GGUF、FP8、NVFP4 等格式上榜率高，说明真实用户更关心能否在本地或低成本硬件上运行；第三，开源权重趋势依旧强势，榜单全部为公开模型，且 Kimi-K3、DeepSeek-V4-Flash 等高热度模型均配齐官方/社区优化版本，进一步推动生态自举。

## 值得探索

- **[\moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**：本周点赞与下载双料冠军，压缩张量技术在多模态中的实际效果值得测试；可作为视觉问答与对话类应用的基线模型。
- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**：视频生成家族的核心，配合 ComfyUI 适配可实现高效本地工作流；横向对比其后续 LoRA/GGUF 变体，能快速理解视频模型生态的演进规律。
- **[unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)**：拥有 20 万+ 下载的量化版本，是验证 DeepSeek-V4 在消费级硬件上部署体验的最佳入手点。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*