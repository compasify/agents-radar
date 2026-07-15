# Hugging Face 热门模型日报 2026-07-15

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-15 01:16 UTC

---

好的，作为AI模型生态分析师，以下是根据您提供的2026年7月15日数据生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026年7月15日**

#### **今日速览**

本周 Hugging Face 生态呈现三大核心趋势：**Qwen 3.5/3.6 家族**继续霸榜，不仅在基础模型上迭代迅速（如Qwen3.6-35B-A3B），其量化版本和社区微调模型也占据了下载量前列。**“后训练”技术**（如GGUF量化、NVFP4、社区微调）的活跃度远超基座模型发布本身，成为社区主流参与方式。最后，**多模态MoE（混合专家）** 架构成为绝对主流，几乎所有热门模型都采用了MoE或图像-文本联合训练。

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **zai-org/GLM-5.2**
   作者: zai-org | 👍 3,948 | ⬇️ 489,611
   一句话：智谱AI的旗舰MoE模型，以超高点赞数领跑，代表国产开源大模型的强劲势头。

- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**
   作者: HauhauCS | 👍 2,729 | ⬇️ 2,443,871
   一句话：基于Qwen3.6的社区去审查版，凭借“无限制”特性和MoE架构的高效性，获得极高关注与下载。

- **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**
   作者: yuxinlu1 | 👍 1,189 | ⬇️ 468,629
   一句话：Google Gemma-4的社区微调版，专注于“智能体”和“终端”操作，反映了Agent模型的流行。

- **unsloth/Qwen3.6-27B-MTP-GGUF**
   作者: unsloth | 👍 1,091 | ⬇️ 2,904,515
   一句话：目前下载量最高的模型，由Unsloth提供的多令牌预测（MTP）优化版Qwen3.6，性能与效率兼得。

- **froggeric/Qwen-Fixed-Chat-Templates**
   作者: froggeric | 👍 901 | ⬇️ 0
   一句话：一个“不直接运行”但高赞的Chat Template修复工具，侧面反映了Qwen生态的庞大用户对正确使用方式的渴求。

- **deepreinforce-ai/Ornith-1.0-35B-GGUF**
   作者: deepreinforce-ai | 👍 880 | ⬇️ 1,533,354
   一句话：又一个高下载量的35B级GGUF模型，证明社区对“中量级”高性能量化模型的旺盛需求。

- **InternScience/Agents-A1**
   作者: InternScience | 👍 538 | ⬇️ 30,539
   一句话：专为Agent场景设计的MoE模型，基于Qwen3.5，代表了LLM从对话向工具使用的转型。

- **nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4**
   作者: nvidia | 👍 117 | ⬇️ 41,755
   一句话：英伟达的旗舰级75B MoE模型，采用NVFP4新格式量化，展示了大模型在硬件优化上的前沿探索。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**
   作者: empero-ai | 👍 2,156 | ⬇️ 2,006,265
   一句话：结合了“Claude”风格与Qwen3.5的9B视觉语言模型，高下载量表明社区对特定“风格”微调模型的追捧。

- **baidu/Unlimited-OCR**
   作者: baidu | 👍 1,983 | ⬇️ 1,715,301
   一句话：百度的通用OCR模型，将传统CV任务转化为“图像转文本”任务，性能强大，秒杀一众通用模型。

- **unsloth/Qwen3.6-27B-NVFP4**
   作者: unsloth | 👍 204 | ⬇️ 1,599,150
   一句话：使用英伟达NVFP4格式量化的Qwen3.6视觉版本，下载量极高，显示出新量化格式的吸引力。

- **OpenMOSS-Team/MOSS-Transcribe-Diarize**
   作者: OpenMOSS-Team | 👍 189 | ⬇️ 65,109
   一句话：将转写（Transcribe）和说话人分离（Diarize）结合的音频模型，是语音交互领域的重要工具。

- **robbyant/lingbot-world-v2-14b-causal-fast**
   作者: robbyant | 👍 96 | ⬇️ 0
   一句话：一个14B的“世界模型”视频生成器，专注于图像到视频的因果建模，代表了视频生成的学术前沿。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **empero-ai/Qwythos-9B-v2-GGUF** & **empero-ai/Qwythos-9B-v2**
- **GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF**
- **prism-ml/Ternary-Bonsai-27B-gguf**
- **prism-ml/Bonsai-27B-gguf**
- **jlnsrk/GLM-5.2-colibri-int4**

**一句话总结：** 此分类本周异常拥挤，几乎前20名中有一半都是量化或社区微调版。**GGUF**是绝对的主流格式，**Unsloth**和**empero-ai**是最大的“搬运工”和优化者。**Prism-ml**探索了极端的1-bit和2-bit量化，而**jlnsrk**则展示了CPU推理方案（Colibri），预示着端侧部署的持续演进。

#### **生态信号**

1.  **“Qwen-ification”与“Nemotron”崛起**：阿里云的Qwen 3.5/3.6系列已成为社区事实上的“基础操作系统”，大量微调、量化、风格化变体均基于此。同时，英伟达的**Nemotron**系列和智谱的**GLM-5**系列正在形成强有力的第二梯队。
2.  **后训练是主战场**：本周的趋势榜再次证明，基座模型发布后的**量化、微调、工具链适配**是社区贡献的重心。权重本身的开源已不是新闻，“如何进行高效、定向的后训练”才是核心价值。
3.  **量化“军备竞赛”**：从常见的8-bit、4-bit GGUF，到NVFP4、Ternary (2-bit) 甚至1-bit，量化格式正在快速演进以满足不同的性能-质量需求。这反映了社区对本地部署和经济性推理的极致追求。

#### **值得探索**

1.  **nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4**：强烈建议关注。这不仅是英伟达的顶级模型，其采用的**NVFP4量化格式**可能是未来高性能、低显存推理的重要方向。如果硬件兼容，它的表现可能超越很多 GGUF 模型。
2.  **baidu/Unlimited-OCR**：对于有实际业务场景的开发者，这个模型极具价值。它展示了如何将特定领域的任务（OCR）用多模态大模型优雅地解决，且效果极佳。这是“专用模型”在一众“通用模型”中突围的典范。
3.  **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**：如果你想探索**Agent**（智能体）和**代码终端**交互的未来，这个基于Gemma-4的微调模型是很好的起点。它代表了LLM从“聊天机器”向“工作协作者”的转变。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*