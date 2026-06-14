# Hugging Face 热门模型日报 2026-06-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-14 00:28 UTC

---

好的，以下是为您生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-06-14**

#### **今日速览**

本周 Hugging Face 生态呈现两大核心驱动力：**多模态能力的极致拓展**与**大模型的“平民化”量化**。**Google Gemma 4** 系列成为绝对焦点，其统一的 “any-to-any” 架构不仅征服了社区榜单，更催生了海量量化（GGUF）与“泄禁”微调版本。同时，**DeepSeek-V4-Pro** 以惊人的点赞和下载量证明了开源社区对顶尖语言模型的渴望。此外，从 **NVIDIA** 的定位模型到 **ByteDance** 的视频生成，多模态领域的专业化、场景化趋势愈发明显。

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | 作者: deepseek-ai | 点赞: 4,813 | 下载: 3,250,404
  - **一句话:** 社区顶流的通用大模型。**DeepSeek-V4-Pro** 凭借其强大的文本生成能力和极高的下载量，成为本周当之无愧的“霸主”，标志着开源大模型在性能上再次取得突破。

- **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)** | 作者: OBLITERATUS | 点赞: 277 | 下载: 50,289
  - **一句话:** 对 Google Gemma 4 进行“泄禁”（abliterated）处理的社区版本，旨在移除模型的安全限制，引发了大量关于模型对齐与自由的讨论。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 作者: HauhauCS | 点赞: 1,761 | 下载: 2,411,202
  - **一句话:** 基于 **Qwen3.6** 的 MoE 模型，主打“无审查”与激进风格。其巨大的下载量说明社区对特定风格和未过滤内容的强烈偏好，是社区生态多样性的体现。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** | 作者: google | 点赞: 705 | 下载: 92,080
  - **一句话:** Google 的最新力作，融合了 Diffusion 与 Gemma 架构。作为 **Gemma 4** 系列的一员，它代表了多模态模型从“理解”到“生成”的重大技术跃迁。

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | 作者: nvidia | 点赞: 1,959 | 下载: 69,443
  - **一句话:** NVIDIA 推出的视觉定位模型。能在图像中精准定位任意物体，是 **Gemma 4** 之外最有影响力的模型之一，突显了多模态任务细分化趋势。

- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | 作者: bosonai | 点赞: 414 | 下载: 32,162
  - **一句话:** 基于 **Qwen3** 架构的 4B 参数语音合成模型。高点赞数表明社区对高质量、多模态（尤其是音频）生成模型的兴趣非常浓厚。

- **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** | 作者: ideogram-ai | 点赞: 517 | 下载: 6,535
  - **一句话:** 著名文生图模型 **Ideogram 4** 的 FP8 量化版本。在保证质量的前提下大幅降低了推理显存和速度要求，让更多用户能体验顶级图像生成能力。

- **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** | 作者: ByteDance | 点赞: 235 | 下载: 426
  - **一句话:** 字节跳动推出的文生视频模型。尽管下载量不高但点赞数可观，说明其在研究社区内备受关注，代表了国内大厂在多模态生成领域的实力。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | 作者: moonshotai | 点赞: 515 | 下载: 1,689
  - **一句话:** 月之暗面（Kimi）发布的代码专用大模型。作为多模态模型中的“专才”，其高点赞度说明市场对特定领域（如代码生成）的高性能模型有显著需求。

- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** | 作者: CohereLabs | 点赞: 355 | 下载: 6,533
  - **一句话:** Cohere 推出的轻量级代码生成 MoE 模型。其下载量反映出社区对高效、低成本代码助手的需求，是“小而美”的趋势代表。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | 作者: unsloth | 点赞: 580 | 下载: 872,895
  - **一句话:** **Gemma 4** 的 **GGUF** 量化版。由 **Unsloth** 团队提供，极大的简化了在消费级硬件上运行最新大模型的门槛，是“平民化”浪潮的核心推手。

- **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | 作者: Jiunsong | 点赞: 818 | 下载: 98,892
  - **一句话:** 社区对 **Gemma 4** 进行“泄禁”并量化的产物。高点赞和下载量表明，在强大基座模型上，针对“自由”和“本地运行”的社区二次创作异常活跃。

- **[unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)** | 作者: unsloth | 点赞: 246 | 下载: 42,885
  - **一句话:** 多模态巨兽 **Diffusion Gemma** 的 GGUF 量化版。它证明即便是最前沿的架构，社区也渴望将其“本地化”，让更多人能探索其潜力。

- **[Comfy-Org/Ideogram-4](https://huggingface.co/Comfy-Org/Ideogram-4)** | 作者: Comfy-Org | 点赞: 146 | 下载: 0
  - **一句话:** ComfyUI 官方推出的 **Ideogram 4** 工作流/模型包。这表明在社区中，优秀的生成模型需要配套的、用户友好的工具链才能完全释放其价值。

#### **生态信号**

- **Gemma 4 家族席卷榜单**：**Gemma 4**（包括 Diffusion Gemma 变体）及其各种微调和量化版本占据了榜单超过三分之一的位置，是本周当之无愧的“霸主”。其强大的性能和开放的许可协议，催生了生态链的快速成熟。
- **开源权重模型竞争白热化**：**DeepSeek-V4-Pro** 登顶榜首，**Qwen3.6** 和 **Gemma 4** 紧随其后，表明开源社区在通用能力上已能与顶级闭源模型一较高下。这标志着 AI 领域的重心正在从少数闭源巨头向百花齐放的开源生态转移。
- **量化与微调成为主流行为**：从 **Unsloth** 到 **OBLITERATUS**，将最新、最大的模型进行量化（GGUF）和“泄禁”微调是社区最受欢迎的活动。这反映了用户的真实需求：让前沿模型能在本地以可接受的性能运行，并拥有更少的限制。

#### **值得探索**

1.  **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**: 作为本周最热模型，如果你是研究者或开发者，务必下载体验其文本生成与对话能力，感受当前开源 LLM 的顶尖水平。

2.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**: 如果你对“万物定位”或特定的视觉任务（如目标检测、视觉问答）感兴趣，这个模型提供了一个强大且开箱即用的基线，是探索细粒度多模态应用的绝佳起点。

3.  **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**: 如果你是希望在个人电脑上运行强大模型的爱好者，这是**Gemma 4**的最佳入门点。它的下载量证明了其易用性和可靠性，是探索 Google 最新模型的“金钥匙”。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*