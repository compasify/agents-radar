# Hugging Face 热门模型日报 2026-06-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-30 00:27 UTC

---

好的，这是为您生成的《Hugging Face 热门模型日报》。

---

### Hugging Face 热门模型日报 (2026-06-30)

#### 今日速览

今日 Hugging Face 生态呈现出三大趋势：**巨头模型家族持续迭代**（如 DeepSeek V4 系列、NVIDIA 的 Gemma 及自研模型）与**社区微调/量化版本**（如来自 HauhauCS、empero-ai 的衍生模型）形成双轮驱动。多模态能力成为标准配置，且涌现出大量“未审查”（Uncensored）变体以满足特定需求。值得注意的是，代表高质量文本生成的**GLM-5.2** 系列成为本周亮点，不仅吸引了 NVIDIA 的量化适配（NVFP4），更由社区机构推出 2,934 点赞的热门版本，其 MoE（混合专家）架构成为讨论焦点。此外，Krea-2 作为文本到图像领域的代表，通过官方（Krea）和生态工具（Comfy-Org, fal）的协同，展现了极高的生态成熟度。

#### 热门模型

##### 🧠 语言模型（LLM、对话模型、指令微调）

-   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — 作者: zai-org | 点赞: 2,934 | 下载: 133,350
    -   **一句话说明**: 本周最受欢迎的对话模型，基于 MoE 架构的 GLM 系列最新版本，因其高质量文本生成能力而备受社区推崇。
-   **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — 作者: deepreinforce-ai | 点赞: 482 | 下载: 123,598
    -   **一句话说明**: Ornith 系列的 35B 参数的 MIT 许可证量化版，兼顾了性能与商用友好性，是社区部署的热门选择。
-   **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** — 作者: Qwen | 点赞: 434 | 下载: 26,223
    -   **一句话说明**: 通义千问推出的 Agent 世界模型，支持多模态输入，旨在为智能体任务提供更强的环境和交互理解能力。
-   **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** — 作者: deepseek-ai | 点赞: 211 | 下载: 5,460
    -   **一句话说明**: DeepSeek 最新 V4 系列的专业版本，标志着大型语言模型竞赛进入新阶段，附带技术论文 (arXiv:2606.19348)，学术价值高。
-   **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** — 作者: unsloth | 点赞: 464 | 下载: 164,180
    -   **一句话说明**: 由知名优化工具集 unsloth 提供的 GLM-5.2 GGUF 格式，极大降低了部署门槛，是社区量化工作的标杆。
-   **[deepreinforce-ai/Ornith-1.0-9B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF)** — 作者: deepreinforce-ai | 点赞: 305 | 下载: 68,667
    -   **一句话说明**: Ornith 系列的 9B 参数 GGUF 量化版，提供了更轻量化的选择，适合资源受限场景。
-   **[deepseek-ai/DeepSeek-V4-Flash-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-DSpark)** — 作者: deepseek-ai | 点赞: 95 | 下载: 2,239
    -   **一句话说明**: DeepSeek V4 的快速推理版本，旨在优化速度和效率，与 Pro 版本形成互补。
-   **[deepreinforce-ai/Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B)** — 作者: deepreinforce-ai | 点赞: 166 | 下载: 1,622
    -   **一句话说明**: 当前榜单中参数量最大的模型（397B），展示了超大 MoE 模型的预训练成果，其性能表现备受关注。
-   **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LiquidAI/LFM2.5-230M)** — 作者: LiquidAI | 点赞: 151 | 下载: 15,463
    -   **一句话说明**: 专注于 230M 参数的小型模型，证明了在特定任务上，小模型也能达到可观效果，符合高效 AI 的趋势。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

-   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — 作者: baidu | 点赞: 1,368 | 下载: 362,945
    -   **一句话说明**: 百度推出的全能 OCR 模型，因强大的图片文字提取能力而火爆，成为许多场景下的首选工具。
-   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — 作者: empero-ai | 点赞: 942 | 下载: 907,682
    -   **一句话说明**: 结合了 Qwen 3.5 和 Claude 数据集的创意写作模型的高下载量量化版，在文字生成多模态任务中极受欢迎。
-   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — 作者: nvidia | 点赞: 2,481 | 下载: 728,320
    -   **一句话说明**: NVIDIA 发布的 3B 参数图像定位模型，能识别并定位图像中的任何物体，任务定义清晰，实用性强，迅速走红。
-   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — 作者: HauhauCS | 点赞: 2,332 | 下载: 3,089,944
    -   **一句话说明**: 下载量最高的模型！基于 Qwen 3.6 的未审查（Uncensored）激进风格微调版，MoE 架构，满足特定创作和对话需求。
-   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** — 作者: krea | 点赞: 392 | 下载: 38,454
    -   **一句话说明**: 文本到图像模型 Krea-2 的快速版，在保留原始模型能力的基础上提升了生成速度，是图像生成领域的效率之选。
-   **[HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced](https://huggingface.co/HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced)** — 作者: HauhauCS | 点赞: 107 | 下载: 46,053
    -   **一句话说明**: 社区对 Google 最新 Gemma 4 模型的“未审查”微调变体，采用 QAT 量化，平衡了性能与开放性。
-   **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** — 作者: nvidia | 点赞: 742 | 下载: 76,154
    -   **一句话说明**: 面向语音识别的专业模型，支持流式处理，NVIDIA 在边缘端和实时语音交互领域的重要产品。
-   **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)** — 作者: fal | 点赞: 115 | 下载: 0
    -   **一句话说明**: 用于图像到视频生成的 LoRA 模块，专注于“3D 真实感”风格，展示了视频生成领域的精细化控制趋势。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

-   **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** — 作者: yuxinlu1 | 点赞: 2,501 | 下载: 561,577
    -   **一句话说明**: 代码专用模型，基于 Gemma-4 微调，专注于编程和推理任务，极高的点赞和下载量证明其在开发者社区的受欢迎程度。
-   **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — 作者: yuxinlu1 | 点赞: 843 | 下载: 241,409
    -   **一句话说明**: 通用智能体模型，强化了工具调用和终端操作能力，是代码模型的进阶版，旨在赋能 AI Agent。
-   **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** — 作者: WeiboAI | 点赞: 749 | 下载: 63,449
    -   **一句话说明**: 一个以推理和数学能力见长的 3B 模型，证明了在垂直领域（如数学）小模型可以做到极致，是学习研究的优质案例。
-   **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)** — 作者: Chunjiang-Intelligence | 点赞: 130 | 下载: 1,463
    -   **一句话说明**: DeepSeek V4 的定制化版本，专注于网络安全领域，代表了大模型向产业应用垂直深耕的趋势。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

-   **(此分类下的模型已在上述其他分类中列出，此处汇总其“量化/微调”属性)**
    -   本日报中，**GGUF** 格式的模型占据了模型列表的显著部分，例如 `Ornith-1.0-35B-GGUF`、`Qwythos-9B-Claude-Mythos-5-1M-GGUF` 和 `gemma-4-12B-coder-fable5-composer2.5-v1-GGUF`。这表明社区对**本地部署**和**高效推理**的需求极为旺盛。
    -   以 **HauhauCS** 为代表的社区作者，大量推出“未审查”（Uncensored）微调版本，如 `Qwen3.6-...-Uncensored-...` 和 `Gemma4-...-Uncensored-...`，体现了开源社区对模型输出自由度的强烈偏好。
    -   NVIDIA 通过 `nvidia/GLM-5.2-NVFP4` 和 `nvidia/Qwen3.6-35B-A3B-NVFP4` 模型，展示其利用自家的模型优化工具（ModelOpt）进行 NVFP4 格式量化的能力，提供了高效的企业级部署选项。
    -   `unsloth/GLM-5.2-GGUF` 和 `unsloth/Qwen-AgentWorld-35B-A3B-GGUF` 则体现了专业优化工具（unsolth）与主流模型的结合，为社区提供了一键式量化部署的便利。

#### 生态信号

1.  **家族化与平台化竞赛加剧**：以 **GLM-5.2** 和 **DeepSeek-V4** 为代表的大模型家族正在形成产品矩阵。不仅有官方发布的基础版（`zai-org/GLM-5.2`, `deepseek-ai/DeepSeek-V4-*`），还有针对不同场景的变体（`AgentWorld`, `Flash`, `Pro`），以及来自 NVIDIA、unsolth 等第三方的高效量化版本，生态呈现出“**官方发布 + 社区微调 + 平台优化**”的成熟模式。

2.  **MoE 与“未审查”成为主流微调方向**：榜单中 **MoE**（混合专家）架构模型（如 Qwen3.6、GLM-5.2、Ornith-1.0）占比很高，体现了社区对大容量、高性能模型的追求。同时，“**Uncensored**”微调版本凭借其极高的自由度，获得了惊人的下载量（如 `HauhauCS/Qwen3.6...` 下载量达 300 万），代表了开源社区对内容控制、创意发挥等方面的强烈诉求。

3.  **工具链与生态成熟度是成功关键**：一个模型能否成为爆款，不仅取决于其自身能力，还取决于其可部署性。例如，`Krea-2` 不仅拥有官方版本，还有 `Comfy-Org` 的 ComfyUI 插件支持，以及 `fal` 等平台的 LoRA 支持，形成了完整的创作到部署的生态链。同样，`gemma-4-12B-coder` 因其优秀的代码能力配合 GGUF 格式，迅速成为开发者首选。

#### 值得探索

-   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**：这个模型完美诠释了“小而美”。它专注地解决了“图像中任意物体的定位”这一具体问题，参数适中（3B），效果强大，获得了极高的社区认可。对于任何涉及图像处理、机器视觉的应用来说，它都是一个值得立即尝试的利器。

-   **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)**：如果对生成式 AI 在**垂直行业安全应用**感兴趣，这个模型值得深入研究。它是 DeepSeek V4 在网络安全领域的首次亮相（可能），代表了将通用大模型能力适配到高度专业化领域的前沿尝试，其特定的“Fable”安全能力是目前市场上的稀缺资源。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*