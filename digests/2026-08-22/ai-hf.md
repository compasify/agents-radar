# Hugging Face 热门模型日报 2026-08-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-21 23:13 UTC

---

# Hugging Face 热门模型日报（2026-08-22）

## 今日速览

今日 Hugging Face 热门榜由 **Qwen3.8-27B 生态**主导：官方多模态模型登顶，社区量化/去审查版本占据超过半数席位。**MiniMax-H3** 视频生成模型与 **DeepSeek-V4** 系列表现抢眼，**Kimi-K3** 也以高点赞跻身前列。量化格式覆盖 GGUF、FP8、NVFP4、MLX，本地部署与多硬件生态加速适配。多模态生成（图/文生视频、音乐生成）成为当下最明显的增长热点。

## 热门模型

### 🧠 语言模型

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 707 | 49,601 | DeepSeek V4 系列旗舰文本生成模型，对话能力突出。该版本为 Pro 规格，兼具高性能与效率，是开源语言模型赛道的重要玩家。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,609 | 2,833,064 | DeepSeek V4 的 Flash 高速版，主打低成本部署。下载量超过 283 万，社区热度极高，适合大规模推理场景。 |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,139 | 15,702 | Qwen 的稀疏 MoE 文本模型，总参数 2.4T，激活 95B。代表超大模型的开源路线，技术指标极具前沿性。 |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 285 | 9,165 | 基于 Qwen3.5 MoE 架构的 35B 稀疏模型，激活参数仅 3B。在保持高性能的同时显著降低推理成本，是高效语言模型的典型代表。 |
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 173 | 21,092 | 面向投机解码的辅助模型，可加速 Qwen3.8-27B 推理。支持 speculative decoding，是社区优化生成速度的探索方向。 |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,370 | 0 | 修复 Qwen 系列聊天模板的 Jinja 资源包，非完整模型。点赞数高但下载为 0，说明开发社区对官方模板兼容性的强烈需求。 |

### 🎨 多模态与生成

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,952 | 1,726,651 | Qwen 3.8 系列旗舰多模态语言模型，支持图像 + 文本输入并生成对话。周点赞近 1.2 万，下载 172 万，是本周生态绝对核心。 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,162 | 15,678 | 文本到音乐生成模型，基于 diffusers 实现高质量音乐创作。点赞过千，是音频生成赛道备受关注的新品。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,486 | 654,175 | 多任务视频生成模型，支持图像到视频、文本到视频、视频到视频。下载量达 65 万，是视频生成工具链中的重要选择。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,294 | 3,614,443 | 文本/图像到视频的生成模型，下载量超过 361 万。点赞 4,294，是本周视频生成领域最热模型之一。 |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,737 | 505,113 | 30B 多模态模型，处理图像 + 文本输入并输出文本。下载量达 50 万，是注重通用对话能力的多模态解决方案。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,913 | 2,448,810 | 月之暗面推出的大规模多模态模型，支持图像和文本联合理解。点赞接近 1.1 万，采用 compressed-tensors 技术，是极具竞争力的开源多模态新秀。 |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 190 | 1,136 | 面向语音识别（ASR）的文本生成小模型。虽然下载量暂低，但“语音 + 生成”的轻量化定位值得研究者关注。 |

### 📦 微调与量化

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,501 | 5,804,917 | Qwen3.8-27B 的 GGUF 量化版，由 unsloth 提供。下载量高达 580 万，是本地部署最受欢迎的量化版本。 |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 818 | 18,193 | 采用 MLX 格式的去审查（abliterated）版本，专为苹果生态优化。点赞 818，满足社区对“无限制”模型的需求。 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 792 | 107,520 | Qwen3.8-27B 的 FP8 量化去审查版，在精度和显存占用间取得平衡。下载量达 10.7 万，是高效部署的选项之一。 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 566 | 1,126,222 | GGUF 格式的去审查版，支持 MTP。下载量超过 112 万，是社区最常用的 uncensored 量化版之一。 |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 438 | 123,956 | 同时提供 MLX、safetensors 和 GGUF 三种格式的“湮灭”去审查版。点赞 438，体现多格式发布的优势。 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 420 | 357,225 | GGUF 去审查版，强调激进的 MTP 优化。下载量达 35.7 万，适合追求解码速度的本地用户。 |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 660 | 1,939,895 | 官方发布的 FP8 量化版本，保留多模态能力。下载量接近 194 万，是官方向高性价比部署迈出的重要一步。 |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 236 | 74,038 | 适用于 llama.cpp 的 GGUF 量化版。下载量 7.4 万，是 Qwen3.8-27B 生态中的稳定选择。 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 289 | 68,275 | 与 MLX/FP8 同门的 GGUF 去审查版，便于跨平台部署。虽然下载量不及 GGUF 头部作品，但同样受到社区关注。 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 231 | 338,221 | huihui-ai 的 abliterated 系列 GGUF 版本。下载量达 33.8 万，是社区最可信赖的“去审查”来源之一。 |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 203 | 123,237 | 高效 MoE 语言模型 Ornith 的 GGUF 量化版。使用 MIT 许可，兼容 HF Endpoints，下载量 12.3 万，适合低成本私有部署。 |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 310 | 0 | 基于 MiniMax-H3 的社区微调视频模型，专注于图像到视频生成。点赞 310 但下载为 0，或为刚发布的新作品，值得跟踪。 |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 210 | 421,918 | 名为“Heretic”的 GGUF 去审查版。下载量超过 42 万，在 uncensored 社区中占有一定份额。 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 229 | 17,521 | huihui-ai 的 safetensors 非量化 abliterated 版。适合需要完整精度的用户，是 GGUF 版的基础模型。 |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 327 | 1,013,917 | 针对 NVIDIA Blackwell 架构的 NVFP4 量化版。下载量突破 101 万，体现了新硬件格式的快速普及。 |
| [Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF](https://huggingface.co/Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF) | Blackfrost-AI | 201 | 197,667 | 另一个 Qwen3.8-27B ABLITERATED GGUF 版本，标注 dense 27B。下载量 19.8 万，为社区提供更多选择。 |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 168 | 155,208 | 名称超长的 GGUF 量化版，集成 COLD-FUSION、GAIN Training 等技巧。下载量 15.5 万，适合喜欢“炼丹”优化的玩家。 |

## 生态信号

**Qwen3.8-27B 家族**展现出惊人的社区统治力：官方多模态模型带动了 GGUF、FP8、NVFP4、MLX 等十余个衍生版本，去审查（abliterated）微调也形成稳定分支。**MiniMax-H3** 视频模型和 **DeepSeek-V4** 系列分别验证了多模态生成与高效语言模型的开源可行性，**Kimi-K3** 的加入使竞争更加激烈。开源权重成为绝对主流——30 个热门模型全部开放。量化活动高度活跃：GGUF 仍是本地部署的基础格式，NVFP4 则显示用户对新一代硬件的积极响应；与此同时，视频/音乐生成模型开始批量上榜，显示生成式 AI 正在从文本/图像向更多模态快速扩展。

## 值得探索

- [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B)：官方多模态旗舰，是理解本周生态的入口，强烈建议研究其视觉-文本理解和对话能力。
- [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3)：下载量最高的视频生成模型之一，覆盖文生视频/图生视频，值得重点测试生成质量。
- [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3)：点赞近 1.1 万，采用压缩张量技术，是开源多模态领域的重要新玩家，值得深入分析其架构设计。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*