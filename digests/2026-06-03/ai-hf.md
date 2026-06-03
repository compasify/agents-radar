# Hugging Face 热门模型日报 2026-06-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-06-03 00:36 UTC

---

# Hugging Face 热门模型日报 | 2026-06-03

---

## 今日速览

DeepSeek-V4-Pro 以 4,571 点赞和 582 万下载稳居榜首，展现国产大模型的强劲势头。Qwen3.6 家族全面爆发，从 27B 基础版到 35B MoE 量化版占据多个席位，配合 NVIDIA 的 NVFP4 优化版本形成完整生态。视频生成领域迎来 Sulphur-2-base 和 Cosmos3 系列的新一轮迭代，而 LiquidAI 的 LFM2.5 混合专家架构和字节跳动的 Lance 任意模态模型则代表了架构创新的前沿方向。社区量化活动持续活跃，GGUF 格式在边缘部署场景渗透率显著提升。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 4,571 | 5,829,042 | 当前 HF 热度最高的开源对话模型，MIT 许可证下的高性能通用 LLM，下载量证明其生产级采用度 |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,364 | 3,525,218 | DeepSeek V4 的轻量高速版本，以更低成本实现接近 Pro 版的性能，适合高并发场景 |
| [Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) | Qwen | 1,577 | 5,243,648 | 阿里通义千问 3.6 代核心基座模型，原生支持视觉理解，下载量与 DeepSeek 形成双雄格局 |
| [openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B) | openbmb | 734 | 57,683 | 面壁智能新一代端侧小模型，1B 参数实现超越体量的推理能力，边缘 AI 部署优选 |
| [LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B) | LiquidAI | 440 | 47,742 | 8B 激活参数 / 1B 总参数的 MoE 架构实验，探索极致稀疏化的效率边界 |
| [JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking) | JetBrains | 127 | 799 | JetBrains 专为代码推理优化的 Thinking 模型，IDE 深度集成潜力显著 |
| [sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B) | sapientinc | 469 | 153,029 | 人力资源垂直领域专用模型，展现大模型行业化落地的细分趋势 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) | SulphurAI | 1,512 | 1,663,826 | 基于 LTX-2.3 的高热度文本生成视频模型，社区量化版本丰富，创作者生态活跃 |
| [bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance) | bytedance-research | 1,011 | 3,192 | 字节跳动"任意到任意"模态统一模型，支持图像/视频/文本自由转换，架构前瞻性极强 |
| [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 962 | 61,604 | NVIDIA 视觉定位模型，3B 参数实现开放词汇的图像理解与空间推理，机器人/AR 场景核心组件 |
| [stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash) | stepfun-ai | 216 | 12,932 | 阶跃星辰 3.7 代视觉语言模型，Flash 版本平衡速度与多模态理解精度 |
| [meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5) | meituan-longcat | 485 | 174 | 美团视频数字人生成模型，支持音频驱动的人物视频合成，低下载量反映早期技术验证阶段 |
| [NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B) | NemoStation | 494 | 17,616 | 2B 参数视频理解模型，基于 Qwen3.5 架构优化长视频时序推理 |
| [nvidia/Cosmos3-Super-Image2Video](https://huggingface.co/nvidia/Cosmos3-Super-Image2Video) | nvidia | 80 | 536 | NVIDIA Cosmos3 超级版的图生视频专用管线，物理世界模拟能力突出 |
| [nvidia/Cosmos3-Super-Text2Image](https://huggingface.co/nvidia/Cosmos3-Super-Text2Image) | nvidia | 77 | 517 | Cosmos3 生态的文生图模块，与视频生成形成统一世界模型闭环 |
| [OpenMOSS-Team/MOSS-TTS-v1.5](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-v1.5) | OpenMOSS-Team | 116 | 20,615 | 复旦 MOSS 团队中文 TTS 迭代版本，支持延迟控制的高质量语音合成 |
| [Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3) | Supertone | 780 | 59,026 | 韩国 Supertone 第三代语音合成模型，情感表现力与多语言支持显著提升 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6) | PaddlePaddle | 184 | 4,003 | 百度飞桨 OCR 视觉语言融合模型，基于 ERNIE4.5 实现文档级精准理解与结构化提取 |
| [openai/privacy-filter](https://huggingface.co/openai/privacy-filter) | openai | 1,593 | 300,247 | OpenAI 官方隐私信息检测与脱敏模型，transformers.js 支持实现浏览器端本地运行 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,275 | 2,573,320 | 社区激进去审查版 Qwen3.6-35B-A3B，GGUF 格式 + 超高下载量反映边缘部署的强需求与争议性 |
| [unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) | unsloth | 609 | 982,631 | Unsloth 官方优化的 Qwen3.6 多 token 预测 GGUF 版本，推理速度提升显著 |
| [nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4) | nvidia | 137 | 313,480 | NVIDIA ModelOpt 工具链的 NVFP4 量化官方实现，35B MoE 模型压缩至单卡可部署 |
| [LiquidAI/LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF) | LiquidAI | 160 | 70,865 | LFM2.5 的 llama.cpp 兼容版本，"edge" 标签定位端侧混合专家推理 |
| [stepfun-ai/Step-3.7-Flash-GGUF](https://huggingface.co/stepfun-ai/Step-3.7-Flash-GGUF) | stepfun-ai | 95 | 39,258 | 阶跃星辰官方 GGUF 量化，imatrix 校准保障视觉理解精度损失可控 |
| [Jackrong/Qwopus3.6-27B-v2-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF) | Jackrong | 196 | 155,959 | 社区融合 Qwen + Octopus 框架的多 token 预测版本，v2 迭代优化视觉指令跟随 |
| [prism-ml/bonsai-image-ternary-4B-gemlite-2bit](https://huggingface.co/prism-ml/bonsai-image-ternary-4B-gemlite-2bit) | prism-ml | 100 | 41 | 极端量化实验：三值/1.58-bit 文生图模型，GemLite 内核探索存储极限，下载量极低反映技术前瞻性 |

---

## 生态信号

**Qwen3.6 家族已成事实标准**：从 27B 基础模型到 35B MoE，从官方版本到社区去审查版、NVIDIA 优化版、Unsloth 加速版，形成覆盖全场景的完整谱系，其生态丰富度已超越 Llama 系列。DeepSeek 则以 MIT 许可证和高性能维持头部影响力，但社区二次开发活跃度略逊。

**开源权重持续挤压闭源空间**：Step-3.7、Keye-VL 等商业模型虽发布开源权重，但下载量与社区衍生版本远不及 DeepSeek/Qwen，"开源即生态"定律强化。值得注意的是，OpenAI 罕见发布 privacy-filter 专用模型，可能标志其策略向边缘合规工具倾斜。

**量化进入"极致压缩"阶段**：GGUF 已成事实标准，NVFP4、三值量化（1.58-bit）、MTP 多 token 预测等新技术密集出现，目标从"能跑"转向"快且准"。Unsloth、NVIDIA ModelOpt 等工具链正在降低极端量化的精度损失。

---

## 值得探索

| 模型 | 推荐理由 |
|:---|:---|
| **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | "Any-to-any" 架构代表未来 2-3 年的模态融合方向，单一模型统一处理文本/图像/视频/音频的输入输出，比当前拼接式多模态方案更具扩展性。虽下载量低，但技术前瞻性极高，适合研究其路由机制与 tokenizer 设计。 |
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | 3B 参数实现开放词汇视觉定位，在具身智能、AR 导航、机器人抓取等场景有直接落地价值。NVIDIA 背书 + 相对轻量，是边缘视觉理解的最优切入点之一。 |
| **[prism-ml/bonsai-image-ternary-4B-gemlite-2bit](https://huggingface.co/prism-ml/bonsai-image-ternary-4B-gemlite-2bit)** | 1.58-bit 三值量化将模型存储压缩至理论极限，配合 GemLite 内核可能开启移动端实时文生图时代。当前 41 次下载的"冷门"状态，恰是提前布局下一代压缩技术的机会窗口。 |

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*