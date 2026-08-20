# Hugging Face 热门模型日报 2026-08-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-19 23:12 UTC

---

## 《Hugging Face 热门模型日报》  
**2026-08-20**

### 今日速览

本周榜单被 **Qwen3.8 系列** 强势霸屏，原版、量化版与社区微调版合计占据近半席位，其中 `Qwen3.8-27B` 以 11.4k 周点赞领跑。`moonshotai/Kimi-K3` 紧随其后，点赞量突破 1 万，下载量超 220 万，显示压缩感知多模态模型正获得广泛关注。**MiniMax 家族** 在音频、视频方向多线出击，H3 下载量突破 300 万，ComfyUI 适配版本也表现亮眼。与此同时，**DeepSeek-V4**、**Muse-Glimmer** 等模型同样保持高热，开源权重生态的量化与微调活动极为活跃。

---

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,099 | 12,699 | Qwen 推出的超大参数 MoE 文本模型，总参数量达 2.4T，激活 95B，专注 text-generation。高规格配置使其成为研究稀疏混合专家架构的重要样本，上榜代表 Qwen 在高阶 LLM 方向持续布局。 |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 631 | 37,583 | DeepSeek 新一代专业版 LLM，面向高质量对话与生成任务。榜单中与 Flash 版本形成双轮驱动，反映 DeepSeek 在开源权重领域的持续迭代。 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,547 | 2,330,940 | DeepSeek 的轻量高性价比版本，专为低延迟场景设计。周点赞超 3.5k，下载量超 230 万，是当前部署最活跃的语言模型之一。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,467 | 1,006,235 | Qwen 旗舰级多模态模型，支持图文输入与对话，覆盖 image-text-to-text 场景。本周点赞榜第一，下载量超百万，是当前社区最受关注的视觉语言模型。 |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,032 | 13,138 | MiniMax 推出的文本生成音乐模型，支持多样化曲风创作。以 1k+ 点赞登上音频生成类榜首，拓展了“文本到音频”的应用边界。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,317 | 555,993 | 视频生成模型，支持 image-to-video、text-to-video 及 video-to-video 多重任务。下载量达 55.5 万，成为本周视频生成方向的明星项目。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,176 | 3,055,205 | MiniMax 新一代视频生成模型，同时支持文字与图像驱动视频。周点赞超 4k，下载量突破 300 万，是榜单上下载量最高的多模态生成模型之一。 |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,702 | 430,313 | Meta 系推出的 30B 多模态模型，视觉与文本融合对话能力突出。以 1.7k 点赞上榜，下载量达 43 万，显示 30B 级多模态模型也有旺盛需求。 |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 230 | 1,239 | dots-studio 的实验性多模态模型，定位 image-text-to-text 任务。虽然下载量不高，但作为新面孔登上榜单，代表创作者社区正在输出多样化视觉理解模型。 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,852 | 2,289,863 | Kimi 最新多模态理解模型，特色是使用 compressed-tensors 压缩技术。周点赞近 1.1 万，下载量超 220 万，又因 feature-extraction 能力吸引大量开发者试用。 |
| [Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 193 | 325,083 | MiniMax-Music3 的 ComfyUI 适配版本，支持一键在节点式工作流中生成音乐。下载量超 32 万，使音乐生成模型更容易被艺术创作者使用。 |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 624 | 340,984 | H3 的 Turbo 加速版本，支持 text-to-video、image-to-video 和 r2v。以下载量 34 万和 624 点赞进入了视频生成模型的第一梯队。 |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 268 | 26,566 | 轻量级文本生成图像模型，单文件便于 ComfyUI 集成。2.9B 规模兼顾效果与部署成本，是社区中小型文生图方案的典型代表。 |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,441 | 15,213,225 | MiniMax-H3 的 ComfyUI 单文件版本，为视频生成提供节点化工作流。下载量高达 1521 万，是本周下载量最高的模型，体现了 ComfyUI 生态的庞大用户基础。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,288 | 0 | 专用于修复 Qwen 系列聊天模板的工具包，提供校正后的 Jinja 模板。虽然下载量暂无，但 1.2k 点赞显示开发者对聊天模板正确性的强烈需求，是许多本地部署项目的“隐形刚需”。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,058 | 4,318,134 | Qwen3.8-27B 的 GGUF 量化版，由 unsloth 提供，兼容 llama.cpp 等本地推理框架。下载量超 430 万，是 Qwen3.8 生态中分发最广的量化版本。 |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 598 | 1,063,646 | Qwen 官方推出的 FP8 量化版本，在保持多模态能力的同时显著降低显存需求。下载量超百万，方便高端消费级显卡直接运行。 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 611 | 60,078 | 基于 Qwen3.8-27B 的 abliterated 微调 + FP8 量化双特性版本，移除部分安全限制。以 611 点赞成为 Uncensored 系列中下载量较高的 FP8 变体。 |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 589 | 27 | 面向 Apple MLX 框架的 Uncensored 微调版本，专为苹果芯片优化。虽然目前下载量极少，但 589 点赞显示 Mac 用户对本地多模态模型的兴趣在上升。 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 467 | 766,812 | 社区 Uncensored 微调 + GGUF 量化，支持 MTP 加速。下载量达 76.6 万，是去审查类 Qwen 模型中最受欢迎的 GGUF 之一。 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 285 | 131,113 | 更激进的 Uncensored 微调版，叠加 GGUF 量化与 MTP 优化。下载量超 13 万，满足偏好“强去过滤”场景的本地用户。 |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 284 | 653,042 | 基于 NVIDIA FP4 的 4-bit 量化版本，由 unsloth 出品。下载量 65.3 万，为 Blackwell 架构 GPU 提供更高效的本地运行方案。 |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 197 | 32,454 | 使用 llama.cpp 的 GGUF 量化变体，主打“Ridge”参数平衡。适合在资源受限环境运行 Qwen3.8 多模态模型，下载量稳定增长。 |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 283 | 0 | 基于 MiniMax-H3 的社区微调版本，面向图像到视频的生成任务。点赞 283 说明用户对个性化视频微调模型有兴趣，但尚未开放实际下载。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,165 | 3,033,363 | Qwen3.6 基础上超长命名的社区微调 + GGUF 作品，主打 uncensored 与 “Heretic” 风格。点赞超 2k，下载量超 300 万，是“尺寸叙事”型社区模型的现象级代表。 |
| [Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF](https://huggingface.co/Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF) | Blackfrost-AI | 170 | 164,263 | 针对 Qwen3.8-27B 的 abliterated 操作 + GGUF 打包。下载量超 16 万，提供了介于原版与激进微调之间的折中方案。 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 170 | 94,234 | huihui-ai 的 abliterated 微调 + GGUF 量化版本，属于社区经典 Uncensored 系列。下载量 9.4 万，延续了该系列在本地部署中的高人气。 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 184 | 26,472 | 标准 GGUF 封装的多模态 Uncensored 版，支持 image-text-to-text。作为 orcarouter 的基础 GGUF 版本，为其他变体提供了稳定基线。 |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 160 | 245,266 | 社区 “Heretic” 风格微调与 abliterated 结合的 GGUF 版本。下载量超 24.5 万，显示极端去审查方向的细分需求依然存在。 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 165 | 7,207 | huihui-ai 的未量化 abliterated safetensors 版，作为 GGUF 版本的上游源模型。下载量虽不高，却是构建多个量化的基础母版。 |

---

### 生态信号

本周榜单清楚呈现 **Qwen3.8 家族生态中枢** 的地位：原版、FP8、NVFP4、GGUF 以及各种 abliterated/uncensored 变体合计占据 2/3 名额，说明大模型发布后，量化、微调、本地化部署的配套链路已经非常成熟。**Kimi-K3 与 DeepSeek-V4** 同样以开源权重获得高热度，国内团队在开放权重上的密度领先。**MiniMax** 则从音乐生成到视频生成多线出击，H3 与 Music3 的 ComfyUI 适配版下载量极高，证明多模态生成与创意工具链正在加速融合。整体来看，开源权重 + 商业公司共建的生态，已覆盖对话、图像、视频、音频的完整场景。

---

### 值得探索

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**  
   Kimi 最新多模态模型，主打压缩感知（compressed-tensors）技术，既能做视觉问答，又提供 feature-extraction 能力。点赞与下载双高，非常值得研究其压缩方法与多模态理解的结合。

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**  
   视频生成领域的下载冠军，支持文本/图像双驱动，配合 ComfyUI 适配版可快速落地到创作流程。适合关注视频生成模型实用性与生态工具的开发者。

3. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**  
   本周舆论与点赞中心，视觉语言能力的集大成者，也是海量量化/微调版本的基座。理解它就能理解整个 Qwen3.8 生态的技术重心与社区玩法。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*