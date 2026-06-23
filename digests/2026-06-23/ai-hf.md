# Hugging Face 热门模型日报 2026-06-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-23 00:28 UTC

---

好的，作为AI模型生态分析师，这是为您整理的2026年6月23日《Hugging Face热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026年6月23日**

#### **今日速览**

今日Hugging Face生态呈现“巨头争霸、专家崛起”的局面。DeepSeek-V4-Pro以超过5000点赞的绝对优势登顶，彰显了DeepSeek在开源大模型领域的统治力。与此同时，**MoE（混合专家）架构**成为绝对主流，从GLM-5.2到Qwen3.6系列，几乎所有热点模型均采用此架构以平衡性能与效率。值得注意的是，**端侧和专用模型**势头强劲，NVIDIA的LocateAnything与微软的FastContext分别代表了视觉定位和长文本推理的细分需求，体现了社区对“小而精”模型的青睐。此外，量化社区极度活跃，各类GGUF版本层出不穷，极大地降低了模型部署门槛。

#### **热门模型**

##### 🧠 **语言模型（LLM、对话模型、指令微调）**

- **deepseek-ai/DeepSeek-V4-Pro** (⭐ 5,012 | ⬇️ 2.4M)
  作者: deepseek-ai
  **一句话：** DeepSeek系列最新旗舰，发布即巅峰，以压倒性点赞数证明其作为当前最强开源对话模型的地位，是本周最亮眼的明星。

- **zai-org/GLM-5.2** (⭐ 2,030 | ⬇️ 33.6K)
  作者: zai-org
  **一句话：** 智谱AI推出的GLM系列第五代模型，采用MoE架构，在对话和文本生成任务上表现卓越，是国产开源大模型的有力竞争者。

- **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF** (⭐ 2,168 | ⬇️ 414K)
  作者: yuxinlu1
  **一句话：** Google Gemma 4代编码模型的社区微调版本，通过“Fable”技术强化了代码生成与推理能力，广受社区欢迎。

- **moonshotai/Kimi-K2.7-Code** (⭐ 962 | ⬇️ 412K)
  作者: moonshotai
  **一句话：** 月之暗面推出的Kimi系列代码专用模型，具备强大的图像特征提取能力，支持图文混合的代码理解与生成场景。

- **google/gemma-4-12B-it** (⭐ 1,139 | ⬇️ 1.9M)
  作者: google
  **一句话：** Google Gemma 4代官方指令微调版，支持“any-to-any”多模态输入输出，标志着Gemma系列正式迈入全模态时代。

- **CohereLabs/North-Mini-Code-1.0** (⭐ 481 | ⬇️ 21K)
  作者: CohereLabs
  **一句话：** Cohere推出的轻量级代码模型，采用MoE架构，在对话和代码场景中具有不错的性价比。

##### 🎨 **多模态与生成（图像、视频、音频、文本到X）**

- **nvidia/LocateAnything-3B** (⭐ 2,291 | ⬇️ 247K)
  作者: nvidia
  **一句话：** NVIDIA推出的通用目标定位模型，能根据文本指令在图像中定位任意物体，在视觉AI细分领域表现出色。

- **MiniMaxAI/MiniMax-M3** (⭐ 1,208 | ⬇️ 119K)
  作者: MiniMaxAI
  **一句话：** MiniMax发布的最新多模态模型，支持图像与文本输入到文本输出，在图文理解和对话任务中表现强势。

- **google/diffusiongemma-26B-A4B-it** (⭐ 1,049 | ⬇️ 874K)
  作者: google
  **一句话：** Google推出的扩散模型与Gemma语言模型的结合体，具备“图像到文本”的对话能力，是多模态AI的一次有趣尝试。

- **nvidia/nemotron-3.5-asr-streaming-0.6b** (⭐ 629 | ⬇️ 34K)
  作者: nvidia
  **一句话：** 专为流式语音识别设计的超小模型，支持缓存感知（Cache-aware）技术，是端侧语音应用的理想选择。

- **ostris/ideogram_4_turbotime_lora** (⭐ 101 | ⬇️ 3.2K)
  作者: ostris
  **一句话：** 基于最新Ideogram 4模型的LoRA微调模块，旨在加速图像生成过程，为AI绘画社区提供新玩法。

- **moonshotai/Kimi-K2.7-Code** (⭐ 962 | ⬇️ 412K)
  作者: moonshotai
  **一句话：** （同上）其“image-text-to-text”任务标签表明它不仅是代码模型，更是一个强大的多模态理解模型。

##### 🔧 **专用模型（代码、数学、医疗、嵌入）**

- **WeiboAI/VibeThinker-3B** (⭐ 609 | ⬇️ 32K)
  作者: WeiboAI
  **一句话：** 基于Qwen2的数学推理专用模型，专注于提升解决复杂数学问题的能力，小参数但专精度高。

- **LiquidAI/LFM2.5-Embedding-350M** (⭐ 100 | ⬇️ 8.8K)
  作者: LiquidAI
  **一句话：** 面向信息检索和语义相似度的文本嵌入模型，LiquidAI持续深耕LLM基础能力库。

- **LiquidAI/LFM2.5-ColBERT-350M** (⭐ 78 | ⬇️ 2.2K)
  作者: LiquidAI
  **一句话：** 采用ColBERT架构的检索模型，擅长多向量检索，适合构建高效的RAG（检索增强生成）系统。

- **microsoft/FastContext-1.0-4B-SFT** (⭐ 288 | ⬇️ 3.4K)
  作者: microsoft
  **一句话：** 微软推出的“快速上下文”模型，专门用于长文本理解和信息提取，是Agent和文档分析场景的利器。

##### 📦 **微调与量化（社区微调、GGUF、AWQ）**

- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** (⭐ 2,113 | ⬇️ 4.0M)
  作者: HauhauCS
  **一句话：** 本周下载量冠军！基于Qwen3.6的“无审查”社区微调版，下载量突破400万，反映了社区对“宽松”和“激进”风格模型的巨大需求。

- **unsloth/GLM-5.2-GGUF** (⭐ 253 | ⬇️ 41K)
  作者: unsloth
  **一句话：** 由知名优化工具Unsloth团队提供的GLM-5.2 GGUF量化版，极大地方便了本地部署。

- **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** (⭐ 133 | ⬇️ 6.6K)
  作者: empero-ai
  **一句话：** 融合了Claude风格神话故事的社区微调模型，展现了社区在角色扮演和创意写作领域的探索。

- **Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF** (⭐ 281 | ⬇️ 214K)
  作者: Jackrong
  **一句话：** 集成MTP（Multi-Turn Prediction）的代码模型量化版，在长对话和代码场景中性能更佳。

#### **生态信号**

1.  **MoE与量化是主旋律**：无论是Top 1的DeepSeek-V4-Pro，还是GLM-5.2、Qwen3.6系列，**MoE架构**已全面覆盖所有热门模型。同时，GGUF量化版本几乎成为标配，下载量动辄十万、百万级别，证明社区对本地、低成本部署的狂热需求。
2.  **中国模型力量崛起**：榜单中有大量来自中国团队（智谱、MiniMax、月之暗面、微博AI、DeepSeek）的优秀模型，且在各自领域均表现突出，显示了中国AI工业化能力的跃升。
3.  **“无审查”与“微调”的社区力量**：HauhauCS的无审查版下载量一骑绝尘，说明在严谨的官方模型之外，社区对“个性化”和“无边界”AI的需求持续走强。empero-ai等模型则展示了基于角色/故事进行微调的新方向。

#### **值得探索**

1.  **nvidia/LocateAnything-3B**：如果你想体验“指哪打哪”的视觉AI，这个模型不容错过。它将灵活的目标定位能力浓缩在3B参数中，是构建智能安防、机器人视觉应用的绝佳起点。
2.  **microsoft/FastContext-1.0-4B-SFT**：长文本处理一直是LLM的痛点。这个模型的思路很独特，旨在“快速”处理上下文，非常值得对文档分析、Agent记忆管理感兴趣的开发者和研究者深入研究。
3.  **HauhauCS/Qwen3.6-35B-A3B-Uncensored...**：抛开其“无审查”的争议，这个模型在内容创作、角色扮演等需要解放模型“想象力”的场景中价值巨大。巨大的下载量本身就说明了它社区影响力。请注意，使用时应遵守当地法律法规。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*