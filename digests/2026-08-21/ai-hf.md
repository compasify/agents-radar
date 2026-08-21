# Hugging Face 热门模型日报 2026-08-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-20 23:15 UTC

---

# Hugging Face 热门模型日报（2026-08-21）

## 📌 今日速览

今日 Hugging Face 热点由 **Qwen3.8-27B** 生态主导，官方多模态模型及其 GGUF/FP8 量化、去审查（abliterated）衍生版本霸榜。**MiniMax** 在视频与音乐生成领域表现强劲，MiniMax-H3 与 MiniMax-Music3 均收获高赞。**DeepSeek-V4** 系列与 **Kimi-K3** 成为文本/多模态赛道的关注焦点。社区侧，针对 Qwen 的“无审查”微调与量化版本数量激增，反映对口型调优和本地部署的旺盛需求。

## 🧠 语言模型

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 678 | 43,287 | DeepSeek V4 Pro 系列旗舰文本生成模型，主打对话与推理能力。作为新版本首日上榜，下载量快速上升。 |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,121 | 14,592 | Qwen3.8 家族的超大 MoE 模型，总参数 2.4T，激活 95B，专注文本生成。适合追求极致能力的多模态联动场景。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,575 | 2,547,549 | DeepSeek V4 的快速版本，定位低延迟文本生成。点赞高、下载超 250 万，是社区常用的对话模型之一。 |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 212 | 1,713 | 35B 总参数、3B 激活的 MoE 文本生成模型，采用 Qwen3.5 架构。兼顾性能与效率，适合学术研究与轻量部署。 |

## 🎨 多模态与生成

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,735 | 1,373,584 | 今日点赞最高的官方多模态对话模型，支持图像+文本输入，定位通用助手。下载量超 137 万，是 Qwen3.8 系列核心底座。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,238 | 3,308,673 | 视频生成模型，支持文本到视频、图像到视频，下载量超 330 万。社区大量二创与量化版本均基于此模型。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,883 | 2,349,853 | Kimi 系列多模态大模型，支持视觉与文本输入，点赞近 1.1 万。采用压缩张量技术，在保持质量的同时优化部署。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,412 | 611,825 | 视频生成模型，覆盖图生视频、文生视频等任务。单文件格式易于使用，下载量超 61 万。 |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,718 | 478,622 | 30B 多模态对话模型，支持图像文本理解。上线后获较高关注，下载量接近 48 万。 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,103 | 14,471 | 文本到音乐生成模型，基于 diffusers 框架。专注音乐创作，适合生成旋律与配乐。 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 650 | 380,072 | MiniMax-H3 的 Turbo 版本，主攻图像到视频生成。速度更快，下载量达 38 万。 |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 297 | 0 | 基于 MiniMax-H3 微调的视频生成模型，支持文生视频、图生视频。虽下载为 0，但点赞显示社区对其题材与效果有兴趣。 |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 242 | 1,373 | 多模态文本生成模型，支持图像与文本输入。作为“dots3”系列预览版，适合笔记与内容理解场景。 |

## 🔧 专用模型

本类别没有符合条件的模型。

## 📦 微调与量化

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,350 | 5,126,652 | 基于 Qwen3.8-27B 的 GGUF 量化版本，由 unsloth 提供。下载量超 512 万，是社区最常用的本地部署格式之一。 |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 633 | 1,517,643 | 官方 FP8 量化版，保留多模态能力，同时显著降低显存占用。下载量超 151 万，适合单卡部署。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,183 | 3,001,999 | 基于 Qwen3.6-27B 的社区微调 GGUF，主打“无审查”与多角色融合。下载量超 300 万，是自定义人格化模型的代表。 |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 709 | 2,628 | 面向 Apple MLX 框架的“无审查”量化版本，专为 Apple Silicon 优化。适合在 Mac 上本地运行。 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 675 | 76,109 | FP8 量化的“无审查”版本，保留多模态能力。下载量达 7.6 万，兼顾效果与资源占用。 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 510 | 979,768 | 支持 MTP（多 token 预测）的 GGUF 无审查版。下载量近 98 万，适合 llama.cpp 用户。 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 360 | 268,258 | 强调“激进”风格的 GGUF 微调版，支持视觉输入与 MTP。下载量超 26 万，定位个性化聊天与角色扮演。 |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 308 | 831,483 | NVIDIA NVFP4 量化格式版，适用于 Hopper 与 Ada 架构。在保持多模态能力的同时降低显存需求。 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 237 | 52,382 | 另一个 Qwen3.8-27B 的 GGUF 无审查版本，提供标准的 llama.cpp 兼容权重。 |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 187 | 326,638 | 结合“Heretic”与 abliterated 技术的 GGUF 版本，主打强去审查效果。下载量超 32 万。 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 199 | 187,008 | huihui-ai 出品的 abliterated GGUF，采用去除安全拒绝行为的微调策略。下载量 18 万。 |
| [Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF](https://huggingface.co/Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF) | Blackfrost-AI | 183 | 186,470 | 另一款 Qwen3.8-27B abliterated GGUF，专注多模态对话的“无审查”体验。 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 200 | 10,540 | 非量化版本的 abliterated 微调模型，保留 safetensors 全精度。适合继续微调或直接集成 transformers。 |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 159 | 53,691 | Ornith-1.5 MoE 模型的 GGUF 量化版，采用 MIT 许可，兼容推理端点。下载量超 5 万。 |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 256 | 4,415 | 提供 MLX、safetensors、GGUF 多格式的 abliterated 版，覆盖不同部署场景。 |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 222 | 55,074 | 经过“Ridge”优化流程的 GGUF 量化版，强调更稳的推理表现。 |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,335 | 0 | 用于修复 Qwen 系列聊天模板的 Jinja 文件集合。虽然不是模型，但对微调与部署 Qwen3.5 有重要辅助价值。 |

## 🌐 生态信号

从今日榜单看，**Qwen3.8** 系列已成为社区生态的绝对中心：原始模型、官方量化、第三方 GGUF/MLX 以及大量 abliterated（去安全限制）微调版本占据近三分之二席位，说明开发者对“多模态 + 可本地化 + 可定制”的需求高度集中。MiniMax 通过视频（H3）与音乐（Music3）双线布局，在生成式多模态领域快速崛起，社区二创也围绕 H3 展开。DeepSeek、Kimi 等闭源实验室同步开放权重，使开源模型在多样性与规模上持续逼近商用级别。量化活动方面，GGUF、FP8、NVFP4 等格式百花齐放，反映出从移动端到数据中心的全栈部署诉求。

## 🔭 值得探索

- **Qwen/Qwen3.8-27B**：今日点赞榜首，性能与热度兼具的多模态底座，适合作为研究基线与应用主干。
- **MiniMaxAI/MiniMax-H3**：下载超 330 万的视频生成模型，社区已围绕其形成丰富的微调生态，是探索视频创作与二次开发的理想对象。
- **moonshotai/Kimi-K3**：采用压缩张量技术，在 2.3M 下载中证明了实用价值，值得研究其在保持多模态能力的同时如何优化推理效率。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*