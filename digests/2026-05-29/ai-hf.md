# Hugging Face 热门模型日报 2026-05-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-29 00:28 UTC

---

好的，作为AI模型生态分析师，以下是根据您提供的数据生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026年5月29日**

#### **今日速览**

本周 Hugging Face 生态呈现出“大厂领跑、社区狂欢”的态势。**DeepSeek V4 系列**以绝对的热度优势占据榜首，其Pro和Flash版本下载量均超百万，成为当之无愧的焦点。**Qwen 3.6** 家族生态异常繁荣，涌现出大量社区微调、量化及“无审查”变体，形成强大的长尾效应。此外，**腾讯的Hy-MT2翻译模型**、**SulphurAI的文生视频模型**以及**NemoStation的视频理解模型**均表现亮眼，标志着多模态与专业领域的深度融合成为本周核心趋势。

#### **热门模型分类盘点**

##### 🧠 语言模型（LLM、对话模型、指令微调）

-   **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    -   作者: deepseek-ai | 点赞: 4,403 | 下载: 5,281,601
    -   说明: DeepSeek 第四代旗舰模型，凭借强大的对话与生成能力，成为本周社区最热门的通用语言模型，下载量断层领先。

-   **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)**
    -   作者: deepseek-ai | 点赞: 1,277 | 下载: 3,327,898
    -   说明: V4系列的轻量级版本，采用MIT许可，在保持高性能的同时优化了推理速度，适合快速部署和商业化应用。

-   **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)**
    -   作者: Qwen | 点赞: 1,508 | 下载: 4,790,806
    -   说明: Qwen官方发布的3.6版本视觉语言模型，在图像理解与对话任务上表现优异，是官方生态的核心基座模型，下载量极高。

-   **[OBLITERATUS/Qwen3.6-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.6-27B-OBLITERATED)**
    -   作者: OBLITERATUS | 点赞: 111 | 下载: 13,911
    -   说明: 社区对Qwen3.6-27B进行“无审查”微调的版本，满足了特定用户对内容限制较少的需求。

-   **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)**
    -   作者: LiquidAI | 点赞: 110 | 下载: 0
    -   说明: Liquid AI推出的混合专家模型，以8B总参数量、1B激活参数实现了效率与性能的平衡，刚刚发布，潜力巨大。

-   **[Jackrong/Qwopus3.6-27B-v2-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-GGUF)** & **[Jackrong/Qwopus3.6-27B-v2-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF)**
    -   作者: Jackrong | 点赞: 172 & 151 | 下载: 24,336 & 65,968
    -   说明: 对Qwen3.6系列进行量化压缩的GGUF版本，尤其MTP（Multi-Turn Prediction）版为本地高效运行大模型提供了便利。

-   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    -   作者: HauhauCS | 点赞: 998 | 下载: 1,956,558
    -   说明: 基于Qwen 3.6 35B MoE模型的无审查、高攻击性微调版本，下载量巨大，反映了社区对特定风格和去限制内容的强烈需求。

-   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** & **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)**
    -   作者: unsloth | 点赞: 533 & 404 | 下载: 806,874 & 686,839
    -   说明: 知名量化工具Unsloth推出的Qwen 3.6量化版，备受社区信赖，是本地部署和微调的首选基座之一。

-   **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)**
    -   作者: sapientinc | 点赞: 400 | 下载: 121,862
    -   说明: 专注于人力资源管理（HRM）领域的1B参数文本生成模型，小而精，展现了专业垂直模型的市场潜力。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

-   **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)**
    -   作者: bytedance-research | 点赞: 954 | 下载: 2,506
    -   说明: 字节跳动推出的任意到任意（any-to-any）多模态模型，能处理图像、视频等多种输入并生成对应输出，代表前沿研究方向。

-   **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)**
    -   作者: SulphurAI | 点赞: 1,419 | 下载: 1,472,982
    -   说明: 第二版文生视频模型，下载量极高，表明社区对高质量、可控的视频生成工具有着巨大且持续增长的需求。

-   **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)**
    -   作者: meituan-longcat | 点赞: 368 | 下载: 0
    -   说明: 美团推出的“视频虚拟人”生成模型，结合音频、图像生成动态视频，是AIGC在数字人领域的重要落地。

-   **[microsoft/Lens](https://huggingface.co/microsoft/Lens)** & **[microsoft/Lens-Turbo](https://huggingface.co/microsoft/Lens-Turbo)**
    -   作者: microsoft | 点赞: 135 & 124 | 下载: 1,061 & 1,478
    -   说明: 微软最新发布的文生图模型，Turbo版本旨在加速生成，代表了微软在图像生成领域的最新成果。

-   **[stabilityai/stable-audio-3-medium](https://huggingface.co/stabilityai/stable-audio-3-medium)**
    -   作者: stabilityai | 点赞: 132 | 下载: 0
    -   说明: Stability AI发布的最新版音频生成模型，专注于音乐和音效创作，巩固了其在生成式AI领域的领先地位。

-   **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)**
    -   作者: Supertone | 点赞: 727 | 下载: 52,022
    -   说明: 一款高性能的文本转语音（TTS）模型，以其自然度和表现力获得了社区的积极反馈。

-   **[nvidia/PiD](https://huggingface.co/nvidia/PiD)**
    -   作者: nvidia | 点赞: 162 | 下载: 335
    -   说明: NVIDIA推出的图像超分辨率模型，持续在底层视觉任务上提供工业级解决方案。

-   **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)**
    -   作者: NemoStation | 点赞: 430 | 下载: 13,855
    -   说明: 轻量级的视频-文本模型，专注于视频字幕生成，为视频内容理解提供了高效的解决方案。

-   **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)**
    -   作者: openbmb | 点赞: 1,046 | 下载: 388,525
    -   说明: 小参数多模态模型的典范，4.6版本持续进化，在保持轻量的同时提供了强大的图像理解与对话能力。

-   **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**
    -   作者: circlestone-labs | 点赞: 1,579 | 下载: 704,160
    -   说明: 一个适用于ComfyUI的扩散模型单文件，以其便捷性和强大的生图能力受到创作者社区的追捧，反映了AI绘画工具的“傻瓜化”趋势。

-   **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)**
    -   作者: numind | 点赞: 184 | 下载: 44,827
    -   说明: 一款面向图像信息提取的专业模型，能够从复杂图像中结构化提取文本数据，在文档处理等领域具有重要价值。

##### 🔧 专用模型（代码、数学、医疗、嵌入、翻译）

-   **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)** & **[tencent/Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)**
    -   作者: tencent | 点赞: 1,078 & 416 | 下载: 14,600 & 2,894
    -   说明: 腾讯推出的混元翻译第二代模型家族，分别提供了1.8B的轻量版和30B的MoE高效版，在机器翻译任务上表现突出。

-   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    -   作者: nvidia | 点赞: 187 | 下载: 1,755
    -   说明: NVIDIA推出的特征提取与定位模型，能够在图像中定位任意目标，是计算机视觉领域的一项强大基础工具。

-   **[pyannote/speaker-diarization-3.1](https://huggingface.co/pyannote/speaker-diarization-3.1)**
    -   作者: pyannote | 点赞: 2,044 | 下载: 9,845,884
    -   说明: 语音处理领域的经典“说话人分离”模型，用于音频中区分不同说话人，是语音分析应用的基石，下载量惊人。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

-   **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)**
    -   作者: openbmb | 点赞: 493 | 下载: 15,629
    -   说明: MiniCPM系列第五代1B语言模型，延续了“小模型大能力”的思路，适合在资源受限设备上部署。

-   **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**
    -   作者: froggeric | 点赞: 444 | 下载: 0
    -   说明: 一个修复了Qwen模型聊天模板的工具类模型，看似微小，却体现出社区对模型易用性和标准化工具的需求。

-   **[zhen-nan/L2P](https://huggingface.co/zhen-nan/L2P)**
    -   作者: zhen-nan | 点赞: 78 | 下载: 0
    -   说明: 一篇学术论文的配套模型，体现了Hugging Face作为研究成果发布平台的价值。

#### **生态信号**

1.  **“Qwen 3.6生态圈”与“DeepSeek V4冲击波”**: 本周市场分化明显。DeepSeek V4系列凭借绝对的性能和影响力，吸引了顶级流量。而Qwen 3.6则走出了一条“平台化”路线，以其优秀的开源基础模型，催生了包括“Uncensored”、“GGUF量化”在内的庞大社区生态，下载总量惊人，体现了开源社区的强大创造力。
2.  **多模态与专业化并驾齐驱**: 字节跳动的`Lance`和SulphurAI的`Sulphur-2`代表了多模态领域向“任意到任意”和“高质量生成”的演进。同时，腾讯的`Hy-MT2`、NVIDIA的`LocateAnything`和pyannote的`Speaker Diarization`等专业模型热度不减，说明AI正从通用能力向解决特定垂直领域问题深化。
3.  **量化与轻量化是落地关键**: GGUF和Unsloth等量化工具在热门榜上占据多个席位，证明了大模型在个人设备、边缘端的部署需求极其旺盛。将“大而全”的模型“小而精”地本地化运行，是当前社区最核心的活动之一。

#### **值得探索**

1.  **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**: 作为本周的绝对顶流，是体验当前顶尖开源语言模型能力上限的必选项。其强大的对话和推理能力值得所有开发者深入体验和评估。
2.  **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)**: 如果你对AI绘画感兴趣，这个模型不容错过。它代表了社区对一键式、高质量、易用性模型的追求，是体验ComfyUI生态魅力的最佳入口之一。
3.  **[liquidai/LFM2.5-8B-A1B](https://huggingface.co/liquidai/LFM2.5-8B-A1B)**: 作为一款刚刚发布的MoE模型，它在参数效率和性能之间达到了新的平衡。关注这个模型，可以洞察下一代高效模型架构（如液态神经网络）的发展趋势。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*