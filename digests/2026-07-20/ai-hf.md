# Hugging Face 热门模型日报 2026-07-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-20 01:53 UTC

---

好的，以下是基于您提供的数据生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-07-20**

#### **今日速览**

今日 Hugging Face 社区呈现三大热点：**GLM-5.2** 和 **Gemma-4-31B** 两大顶级开源模型表现强劲，分列点赞榜第一和第六位，显示社区对高性能、高下载量基座模型的持续追捧。**极致量化**成为主流，以 **prism-ml** 团队的 1-bit 和 2-bit Bonsai 模型系列为代表，大量用户通过 GGUF 和 MLX 格式拥抱极限压缩。此外，以 **Qwen 3.5/3.6** 为基座的社区微调模型（如 **Qwythos** 和 **Uncensored** 变体）形成了庞大的创作生态，占据了量化与多模态赛道的大量下载。

---

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,168 | 536,177 | 本周点赞最高的模型，基于 DSA 架构的 MoE 模型，是当前开源社区最受关注的基座之一。其强大的生成和对话能力使其成为社区量化与微调的热门基础。 |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 3,273 | 12,337,374 | 谷歌开源的 Gemma 4 系列，以惊人的千万级下载量位居绝对榜首。作为多模态对话模型，它代表了谷歌在开源大模型领域的最新实力。 |
| [tencent/Hy3](https://huggingface.co/tencent/Hy3) | tencent | 835 | 13,698 | 腾讯开源的新一代混元系列模型，专注于文本生成。其高点赞数表明社区对其性能的高度认可，是国产大模型的中坚力量。 |
| [InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1) | InternScience | 584 | 35,833 | 基于 Qwen3.5 MoE 的 Agent 专用模型，在工具调用和自主规划方向具有潜力。作为专业领域的语言模型，其点赞表现突出。 |

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,152 | 13,462 | 新兴的多模态模型，支持图像、文本和音频输入。作为本周的热门新星，其在不同模态间的理解和生成能力吸引了大量关注。 |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,191 | 2,122,848 | 百度出品的全能 OCR 模型，下载量逾 200 万。凭借其强大的图像转文字特征提取能力，在文档处理场景中占据绝对优势。 |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,346 | 2,118,995 | 基于 Qwen3.5 社区的推理增强微调模型，下载量极高。其融合了“Claude-Mythos”风格，在创意和指令跟随方面表现优异。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored...](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,901 | 2,084,530 | 无审查版本的热门 MoE 多模态模型，下载量超 200 万。它代表了社区对无限制内容生成和更强视觉能力的强烈需求。 |
| [Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B) | Wan-AI | 128 | 2,408 | 专注于图生视频任务，是视频生成领域的代表。虽然下载量不高，但作为新发布的 I2V 模型，在创作社区中引发讨论。 |

##### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle) | Cactus-Compute | 279 | 955 | 基于 JAX 框架的函数调用与工具使用模型。其独特的架构和“针尖”定位，使其在高精度 Agent 应用中具有研究价值。 |
| [OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 279 | 87,533 | 专注于音频转文字和说话人识别，下载量可观。在会议记录等场景中具有实用价值，是音频领域专用模型的热门选择。 |

##### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 793 | 338,945 | 采用创新的三值量化（Ternary）技术，将 27B 模型压缩至 2-bit。代表了将超大模型部署到个人设备的极致探索。 |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 498 | 1,262,894 | 极致 1-bit 量化的 27B 模型，下载量超百万。展示了社区对通过极端量化实现在低资源环境下运行大模型的强烈兴趣。 |
| [jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4) | jlnsrk | 141 | 4,035 | GLM-5.2 的 CPU 友好型 INT4 量化版本。结合 MoE 和专家流式技术，使得开源顶尖模型能在无 GPU 环境下高效运行。 |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 947 | 0 | 修复了 Qwen 系列模型对话模板的轻量级模型，点赞近千。虽无下载量，但它的发布解决了社区使用 Qwen 模型时的一大痛点，影响力巨大。 |
| [DavidAU/Qwen3.6-27B-Fable-Fusion...](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 107 | 16,719 | 一个极具社区特色的融合微调模型，集成了多个风格和概念。它代表了社区创作者在 GGUF 量化基础上进行艺术化实验的活跃生态。 |

---

#### **生态信号**

- **模型家族势头正旺**：**Qwen (3.5/3.6)** 和 **GLM-5.2** 是目前最强劲的两大开源模型家族。Qwen 衍生出海量社区微调与量化版本，而 GLM-5.2 则凭借其强大的 MoE 架构成为量化领域的“新宠”。谷歌的 **Gemma-4** 也以其巨大的下载量证明其霸主地位。

- **开源权重 vs 闭源**：本周榜单中，**100% 的开源权重模型**（含开放权重但协议限制商用的模型）占据了绝对主导地位，未见闭源 API 或权重模型。这进一步巩固了社区对“真开源”的认可和需求。

- **量化与微调活动激烈**：极低比特的量化（1-bit, 2-bit, Ternary）成为焦点的核心。**prism-ml** 团队和 **bottlecapai** 等组织正在推动“将大模型装进口袋”的极限。同时，大量基于 Qwen 的“Uncensored”和“Fable”风格微调模型，显示了社区对打破内容限制和追求个性化风格的强烈需求。

---

#### **值得探索**

1. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**：如果你对“在个人电脑上运行接近 30B 参数模型”这件事感兴趣，这个极致的 1-bit 量化模型绝对值得一试。它标志着大模型本地化部署的一个技术里程碑。

2. **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**：对于所有 Qwen 系列模型的使用者来说，这个模型几乎是“必需品”。它解决了对话模板不兼容的核心痛点，能大幅提升使用体验，是生态中“小而美”的优质贡献。

3. **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)**：作为纯粹的图生视频模型，它代表了 AI 在视频内容创作领域的最新探索。如果你关注动态内容生成，可以尝试这个模型，观察其如何通过图像生成连贯的视频。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*