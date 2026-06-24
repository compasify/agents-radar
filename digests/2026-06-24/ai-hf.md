# Hugging Face 热门模型日报 2026-06-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-24 00:23 UTC

---

好的，作为AI模型生态分析师，以下是2026年6月24日的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-06-24**

#### **1. 今日速览**

今日Hugging Face社区迎来重磅发布：**DeepSeek-V4-Pro** 以绝对优势登顶热度榜，展示了中国大模型在开放生态中的强劲影响力。同时，**Google Gemma 4** 系列（尤其是其12B指令版和全新的Diffusion版）持续霸榜，证明了其作为多模态基座的巨大潜力。值得注意的是，以 **Qwen3.6** 和 **Gemma 4** 为基础的大量社区微调与量化版本（尤其是GGUF格式）异常活跃，反映了社区对本地部署和特定能力（如编码、Agent）的强烈需求。此外，**NVIDIA** 和 **百度** 分别发布了定位与OCR领域的专用模型，显示出实用型AI工具的持续增长。

#### **2. 热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **[DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**
    - 作者: deepseek-ai | 点赞: 5,030 | 下载: 2,245,489
    - 说明：DeepSeek最新一代旗舰模型，以顶级性能和开放权重成为今日最亮眼的热点，是社区对高水准开源LLM需求的有力证明。
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    - 作者: zai-org | 点赞: 2,195 | 下载: 40,127
    - 说明：智谱AI最新GLM（通用语言模型）的MoE版本，采用DSA架构，作为国产开源大模型的代表之一，在社区受到高度关注。
- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**
    - 作者: yuxinlu1 | 点赞: 2,237 | 下载: 456,117
    - 说明：基于Google Gemma 4 12B的量化编码模型，通过社区微调（Fable5, Composer2.5）大幅增强代码能力，因其高质量与实用性下载量极高。
- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**
    - 作者: google | 点赞: 1,154 | 下载: 1,991,703
    - 说明：Google官方的Gemma 4指令微调版，支持任意输入到任意输出的“any-to-any”多模态理解能力，是当前最强大的开源基础模型之一。
- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**
    - 作者: unsloth | 点赞: 300 | 下载: 55,820
    - 说明：由知名量化团队Unsloth推出的GLM-5.2的GGUF版本，旨在降低GLM-5.2的部署门槛，方便用户本地高效运行。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**
    - 作者: nvidia | 点赞: 2,315 | 下载: 274,025
    - 说明：NVIDIA发布的新一代开放世界目标定位模型，能够根据文本描述或视觉提示在图像中精确定位任何物体，标志着基础模型在细粒度视觉理解上的进步。
- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**
    - 作者: MiniMaxAI | 点赞: 1,220 | 下载: 131,057
    - 说明：MiniMax推出的最新多模态大模型，具备优秀的图像与文本理解与生成能力，在中文社区和企业级应用中拥有很高的人气。
- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**
    - 作者: google | 点赞: 1,055 | 下载: 948,996
    - 说明：Google开创性地将Gemma与扩散模型结合的产物，通过MoE架构（26B参数，4B激活）实现了强大的多模态对话与图像理解，代表了LLM与扩散模型融合的新方向。
- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
    - 作者: moonshotai | 点赞: 975 | 下载: 447,920
    - 说明：月之暗面推出的Kimi模型编码专用版，结合了Moonshot在长上下文和视觉-文本理解上的积累，适合高级代码分析和生成任务。
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
    - 作者: nvidia | 点赞: 656 | 下载: 41,050
    - 说明：NVIDIA推出的轻量级流式语音识别模型，专注于低延迟、高效率的语音转文字场景，对边缘计算和实时应用意义重大。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    - 作者: baidu | 点赞: 471 | 下载: 8,396
    - 说明：百度发布的泛用型OCR模型，旨在突破传统OCR在复杂场景下的限制，如不规则字体、反光和背景干扰。
- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**
    - 作者: WeiboAI | 点赞: 664 | 下载: 41,170
    - 说明：基于Qwen2的3B级别轻量数学推理模型。在紧凑的参数量下展现了优秀的数学能力，小微模型高效应用的典型案例。
- **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LiquidAI/LFM2.5-Embedding-350M)**
    - 作者: LiquidAI | 点赞: 114 | 下载: 10,117
    - 说明：Liquid AI发布的第二代文本嵌入模型，采用新型架构，将为RAG和语义搜索应用提供更高效的基础设施。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    - 作者: HauhauCS | 点赞: 2,156 | 下载: 3,955,016
    - 说明：基于Qwen3.6 35B MoE模型的高强度社区微调版本，主打“无审查”和激进风格，其惊人的下载量反映了社区对特定风格或有界释放模型的高度偏好。
- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
    - 作者: yuxinlu1 | 点赞: 445 | 下载: 96,459
    - 说明：上述Coder版本的Agent变体，专为终端和工具调用场景优化，体现了社区根据底层模型特性进行精准微调的趋势。
- **[bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF](https://huggingface.co/bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF)**
    - 作者: bytkim | 点赞: 111 | 下载: 65,765
    - 说明：基于Qwen3.6的GGUF量化版本，并针对Multi-Token Prediction (MTP) 进行了特殊优化，旨在提升推理速度。

#### **3. 生态信号**

- **模型家族势头强劲**：**Gemma 4** 和 **Qwen 3.6** 是目前社区生态的两个核心引擎。围绕它们，社区涌现了大量专注于编码、Agent、数学推理和“无审查”风格的微调模型，形成了繁荣的二级生态。
- **开源权重优势明显**：以 **DeepSeek-V4-Pro** 为代表，开放的权重模型持续收获最高的关注度。这说明社区对能够深度定制、自托管和研究的“真开源”模型抱有极大热情。
- **量化/微调活动高度活跃**：GGUF量化版本几乎与原始模型同步甚至更火，显示出本地和边缘部署已然成为刚需。同时，像 `yuxinlu1` 和 `HauhauCS` 这样通过深度微调（融合多个LoRA、数据集）来创造极致差异化的模型，已成为社区爆款的重要来源。

#### **4. 值得探索**

1.  **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)**：强烈推荐。这不是一个传统意义上的LLM，它代表了把LLM的推理能力与扩散模型的生成能力进行原生融合的前沿探索。对于研究多模态架构和生成能力的开发者和研究者，这是必看的模型。
2.  **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**：强烈推荐。作为国内头部AI公司的开源权重模型，其视觉-文本结合的长上下文编码能力，在解决大型代码库理解和多模态编程任务中展现出了独特的潜力。
3.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**：推荐。它解决了一个很具体但非常重要的视觉问题——开放世界的目标定位。其性能表明，针对特定“认知”能力（如定位）的预训练模型正在走向成熟，对机器人、自动驾驶和工业检测有直接价值。

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*