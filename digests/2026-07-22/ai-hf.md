# Hugging Face 热门模型日报 2026-07-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-22 01:26 UTC

---

好的，作为AI模型生态分析师，以下是根据您提供的2026-07-22日数据生成的《Hugging Face热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-07-22**

#### **今日速览**

今日Hugging Face生态呈现三大热点：**极致量化**与**大规模MoE**模型成为社区焦点，`prism-ml`的1-bit/2-bit三元量化系列与`zai-org`的GLM-5.2高居榜单前列。**多模态能力**依然是绝对主线，谷歌`gemma-4-31B-it`凭借超高下载量稳居头部，而百度`Unlimited-OCR`与多个Qwen3.6变体模型展示了在视觉理解领域的竞争。**开源社区微调**异常活跃，以`DavidAU`和`HauhauCS`为代表的“无审查”风格模型持续吸引关注，同时`GnLOLot`等开发者正将Claude等强基座模型的能力蒸馏至更小尺寸的MiniCPM中。

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [**GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,278 | 545,109 | 本周点赞最高模型，采用MoE架构的顶尖对话模型。其DS-A技术可能在稀疏激活方面有显著创新，吸引了大量研究者关注。 |
| [**Laguna-S-2.1**](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 186 | 3,056 | 企业级文本生成模型的后继版本，由`poolside`发布。作为Laguna系列的S版本，其轻量化设计可能适合特定垂直领域部署。 |
| [**Motif-3-Beta**](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif-Technologies | 125 | 125 | 技术新秀`Motif`推出的第三代模型Beta版。标签包含特征提取，表明其可能主打高效表示学习，目前仍处于早期测试阶段。 |

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [**gemma-4-31B-it**](https://huggingface.co/google/gemma-4-31B-it) | google | 3,314 | 12,113,203 | 谷歌官方Gemma系列旗舰，多模态能力出众。超过千万的下载量证明其是社区最受信赖和广泛应用的开放权重大模型之一。 |
| [**Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,605 | 2,237,351 | 百度发布的强大OCR模型，下载量接近千万。它展示了在复杂场景下文本识别能力的突破，成为该领域的事实标准之一。 |
| [**Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,970 | 1,997,690 | 基于Qwen3.6的社区微调版，采用MoE架构（35B总参数/3B活跃）。其“无审查”和“激进”风格迎合了特定用户群体，下载量极高。 |
| [**Kimi-K2.7-Code**](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,199 | 722,058 | 月之暗面推出的代码多模态模型，使用压缩张量技术。体现了将视觉与代码能力结合的趋势，有望在代码生成与UI理解领域发挥作用。 |
| [**Wan-Dancer-14B**](https://huggingface.co/Wan-AI/Wan-Dancer-14B) | Wan-AI | 151 | 2,497 | 专注于图像到视频生成的扩散模型。其14B参数规模表明视频生成模型正朝着高保真、高质量方向发展。 |
| [**LTX-Best-Face-ID**](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Alissonerdx | 222 | 0 | 专用于LTX-Video的身份保持LoRA。它解决了视频生成中面部一致性这一痛点，虽未产生下载量，但社区关注度较高。 |

##### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [**MOSS-Transcribe-Diarize**](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 299 | 92,265 | 专注语音转录和说话人日志的专用模型。解决了远程会议、访谈等场景的切实需求，是音频处理领域的实用工具。 |
| [**Nemotron-3-Embed-1B-BF16**](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16) | nvidia | 96 | 93,021 | NVIDIA推出的全新嵌入模型，用于句向量相似度计算。1B参数兼顾了性能与效率，是构建RAG（检索增强生成）系统的优质选择。 |
| [**nemotron-3.5-asr-streaming-0.6b**](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 902 | 590,230 | NVIDIA的流式语音识别模型，轻量级（0.6B）设计适合低延迟实时应用。高下载量印证了市场对高效ASR模型的旺盛需求。 |
| [**MiniCPM-RobotManip**](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 147 | 58 | 面向机器人操作任务的视觉-语言-动作（VLA）模型。虽下载量不高，但代表了AI从虚拟世界向物理世界延伸的重要方向。 |
| [**needle**](https://huggingface.co/Cactus-Compute/needle) | Cactus-Compute | 298 | 1,068 | 基于JAX框架，专为函数调用和工具使用设计的模型。它代表了模型能力向“Action”进化的趋势，是构建智能体（Agent）的样本。 |

##### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 简要说明 |
| :--- | :--- | ---: | ---: | :--- |
| [**Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 899 | 432,196 | `prism-ml`开创性的三元量化（Ternary）模型，将27B参数压缩至2-bit。将大模型本地部署的门槛推至新低，极具技术创新性。 |
| [**Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 570 | 1,404,962 | `Bonsai`系列的1-bit极致量化版本，下载量超140万。证明了极端量化虽然牺牲部分精度，但因其极低资源占用而备受社区欢迎。 |
| [**Qwythos-9B-Claude-Mythos-5-1M-GGUF**](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,387 | 2,133,420 | 基于Qwen3.5的9B模型，通过蒸馏Claude等大模型能力并量化。展现了社区“用小模型模仿大模型”的高效微调范式。 |
| [**Hy3-GGUF**](https://huggingface.co/AngelSlim/Hy3-GGUF) | AngelSlim | 156 | 145,102 | 对腾讯Hy3基座模型的GGUF量化版本。体现了社区对主流商业化模型的即时转换需求，方便了用户在本地运行这些模型。 |
| [**MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF**](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF) | GnLOLot | 147 | 51,746 | 一个容量仅1B的MiniCPM微调模型，旨在模拟更强大的Claude模型。这代表了小模型能力“升维”的流行努力方向。 |

#### **生态信号**

1.  **量化技术进入“战国时代”**：`prism-ml`的1-bit/2-bit三元(Ternary)量化是本周最亮的技术突破，其下载量表明社区对在边缘设备运行接近顶级能力大模型充满渴望。连同传统GGUF量化，模型部署的轻量化竞争正在加剧。
2.  **MoE架构全面开花**：从官方的`GLM-5.2`、`gemma-4`到社区微调的`Qwen3.6-35B-A3B`，大规模的混合专家模型已成为主流。这不仅是参数规模的竞赛，更是如何在降低推理成本的同时保持高性能的竞赛。
3.  **“无审查”与“角色扮演”社区强劲**：榜单中多个带有“Uncensored”（无审查）、“Aggressive”、“Mythos”等标签的高点赞模型，代表着一股强大的、注重个性化与创造力释放的社区文化。这依旧是推动小团队和个人开发者进行微调的主要驱动力之一。

#### **值得探索**

1.  [**prism-ml/Ternary-Bonsai-27B-gguf**](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)：强烈建议关注此模型。它代表了在有限硬件上运行大模型的极致追求。如果你对模型压缩和边缘计算感兴趣，三元量化的架构设计是本周最值得研究的对象。
2.  [**google/gemma-4-31B-it**](https://huggingface.co/google/gemma-4-31B-it)：作为谷歌官方的多模态旗舰，其强大的性能和社区支持使其成为评测、做应用原型或作为下游微调基座的“万能钥匙”。高下载量是最好的背书。
3.  [**GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF**](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF)：这个模型完美体现了“知识蒸馏”的价值。如果你好奇如何将顶级模型的“心智模型”压缩进一个1B的微小模型里，或者对构建超轻量级对话Agent感兴趣，这是绝佳的案例。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*