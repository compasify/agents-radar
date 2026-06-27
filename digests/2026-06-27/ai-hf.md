# Hugging Face 热门模型日报 2026-06-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-27 00:27 UTC

---

好的，作为AI模型生态分析师，以下是基于您提供的数据生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026年6月27日**

#### **今日速览**

- **GLM-5.2 系列强势登顶**：智谱AI的GLM-5.2成为本周焦点，不仅原始模型（`zai-org/GLM-5.2`）以近2600点赞位居第二，其量化版（`unsloth/GLM-5.2-GGUF`）和NVIDIA优化的低精度版（`GLM-5.2-NVFP4`）也同步上榜，显示其强大的社区影响力。
- **“无审查”模型热度不减**：`HauhauCS` 发布的基于Qwen3.6和Gemma4的“无审查”模型（如 `Qwen3.6-35B-A3B-Uncensored`）下载量惊人，反映出社区对内容限制较少模型的强烈需求。
- **代码与智能体模型迭代加速**：以Gemma-4为基座的微调模型（如 `gemma-4-12B-coder`）和专注于智能体能力的模型（如 `Qwen/Qwen-AgentWorld`）频繁出现，表明应用场景正从通用对话向专业任务快速扩展。
- **低比特量化成为主流**：GGUF和NVIDIA的NVFP4格式在榜单中占据大量席位，尤其是在下载量前十的模型中，量化版本占比极高，显示高效本地部署已成为社区核心需求。

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 作者：zai-org | 👍 2,589 | ⬇️ 83,589
  - 本周最受关注的MoE对话模型之一，凭借强大的中文能力和创新架构（GLM_MoE_DSA）获得了社区高度认可。
- **[deepreinforce-ai/Ornith-1.0-35B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B)** | 作者：deepreinforce-ai | 👍 121 | ⬇️ 1,005
  - 基于Qwen3.5-MoE架构的新系列模型，提供从9B到397B多种规格，展示了社区在MoE路线上的持续探索。
- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** | 作者：microsoft | 👍 355 | ⬇️ 5,735
  - 微软出品的小参数长上下文模型，专为“探索子代理”（Explorer SubAgent）场景设计，代表了大型科技公司在高效Agent模型上的布局。
- **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LiquidAI/LFM2.5-230M)** | 作者：LiquidAI | 👍 112 | ⬇️ 8,286
  - Liquid AI推出的超小参数量模型，验证了非Transformer架构（LFM）在极低资源下的潜力，适合边缘侧部署研究。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 作者：baidu | 👍 1,040 | ⬇️ 134,146
  - 百度推出的通用OCR模型，因强大的图文识别能力成为本周下载量最高的专用模型之一，展现了AI在特定垂直任务上的成熟度。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-...](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 作者：HauhauCS | 👍 2,263 | ⬇️ 3,453,492
  - 基于最新Qwen3.6的“无审查”视觉语言模型，下载量惊人地突破340万，反映了社区对高自由度、强视觉能力的模型的巨大需求。
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | 作者：nvidia | 👍 2,383 | ⬇️ 494,756
  - NVIDIA出品的目标定位与分割模型，通用性强，可直接根据文本指令在图像中定位物体，是计算机视觉领域的明星模型。
- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** | 作者：krea | 👍 285 | ⬇️ 8,721
  - Krea AI推出的第二代文生图模型Turbo版，代表了设计生成领域的商业化方向，与Raw版和Comfy-Org插件形成完整生态。
- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** | 作者：MiniMaxAI | 👍 1,246 | ⬇️ 169,951
  - MiniMax 的最新一代多模态大模型，拥有强大的视觉理解与生成能力，是榜单中表现最亮眼的多模态模型之一。
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | 作者：nvidia | 👍 707 | ⬇️ 56,434
  - NVIDIA推出的流式语音识别模型，专为低延迟实时转录场景设计，展示了AI在音频领域的工程化进展。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** | 作者：yuxinlu1 | 👍 2,398 | ⬇️ 516,333
  - 基于Gemma-4的代码模型在社区中备受追捧，其高下载量和点赞数表明，针对特定基座模型（Gemma）的代码微调是当前一大热点。
- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** | 作者：WeiboAI | 👍 731 | ⬇️ 54,638
  - 一个专注于数学推理的小模型，证明了在特定领域（如数学）进行定向优化，小参数模型同样可以表现出色。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** | 作者：unsloth | 👍 410 | ⬇️ 107,553
  - 由知名量化工具Unsloth出品的GLM-5.2 GGUF版本，让社区用户能够轻松在本地运行这个强大的MoE模型，显著推动了其普及。
- **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** | 作者：nvidia | 👍 361 | ⬇️ 4,812,629
  - 本周下载量冠军！NVIDIA利用其Model Optimizer工具将Qwen3.6-35B模型压缩至NVFP4超低精度，在保持性能的前提下极大降低了部署门槛，引领了高精度量化新浪潮。
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | 作者：empero-ai | 👍 583 | ⬇️ 486,810
  - 一个结合了Qwen3.5和Claude能力的社区融合模型，其GGUF量化版下载量极高，展示了“缝合”不同模型能力的创意方向。

#### **生态信号**

- **“基座+微调+量化”三级生态成型**：以`GLM-5.2`、`Gemma-4`、`Qwen3.6`为例，呈现出“官方基座 → 社区功能微调（代码、智能体）→ 量化/优化版（GGUF/NVFP4）”的完整链条。开源社区的力量正集中在模型的应用适配和工程优化上。
- **开源权重模型势头强劲**：榜单前十几乎全为开源权重模型，而像`Krea-2`这样的闭源模型需要通过API或特定格式访问。这表明，尽管闭源模型在特定领域（如文生图）仍有影响力，但社区的热度和下载量已完全被可自由下载、修改和部署的开源模型主导。
- **“无审查”（Uncensored）成独立赛道**：以`HauhauCS`为代表的社区作者，通过“abliterated”等技术移除模型的安全对齐，形成了一个需求旺盛但伴随风险的细分市场。这反映了部分用户对内容限制的强烈反感，也给模型治理带来了新挑战。

#### **值得探索**

1.  **`nvidia/LocateAnything-3B`**：如果你对计算机视觉感兴趣，这个模型不容错过。它简洁高效，功能强大，是了解“通用视觉定位”这一前沿方向的最佳入口。绝对值得深入研究其技术原理。
2.  **`nvidia/Qwen3.6-35B-A3B-NVFP4`**：作为本周下载量冠军，它代表了“极致量化”的前沿。如果你是模型部署工程师，研究NVIDIA的ModelOpt工具和NVFP4格式，可能会改变你对大模型部署效率的认知。
3.  **`yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF`**：这是当前代码模型微调热潮的缩影。如果你关注代码生成，可以探究它是如何基于Gemma-4进行微调的，以及“fable5”和“composer2.5”这些后缀背后的技术细节。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*