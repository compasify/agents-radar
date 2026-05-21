# Hugging Face 热门模型日报 2026-05-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-21 00:26 UTC

---

# Hugging Face 热门模型日报 | 2026-05-21

---

## 今日速览

本周 Hugging Face 热度由 **DeepSeek-V4 系列** 与 **Google Gemma-4** 两大巨头领衔，分别拿下 4082 赞与 2712 赞，下载量均破百万。多模态模型持续升温，Qwen3.6 系列占据 4 个席位，形成显著的生态集群效应。社区量化活动异常活跃，Unsloth 发布的 Qwen3.6 GGUF 版本下载量合计超 77 万。值得关注的是，any-to-any 统一架构（ByteDance Lance）与 3D 生成（TencentARC Pixal3D）开始崭露头角，预示着下一代模型正突破模态边界。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,082 | 3,817,887 | 本周绝对霸主，Pro 版本以近 400 万下载验证了其作为开源顶级推理模型的地位 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,166 | 2,289,519 | 轻量版同样破 200 万下载，性价比路线精准覆盖边缘部署与高频调用场景 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,712 | 10,170,798 | **唯一破千万下载**，Gemma-4 视觉指令版证明 Google 开源策略仍具强大生态号召力 |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,840 | 5,798,579 | MoE 架构 35B 激活仅 3B，以 580 万下载成为高效大模型标杆 |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,358 | 3,810,004 | 稠密版 Qwen3.6 核心模型，视觉-语言统一能力持续迭代 |
| **[inclusionAI/Ring-2.6-1T](https://huggingface.co/inclusionAI/Ring-2.6-1T)** | inclusionAI | 88 | 3,454 | 1T 参数混合架构实验模型，探索超大规模稀疏激活的新路径 |
| **[FrontiersMind/Nandi-Mini-600M-Early-Checkpoint](https://huggingface.co/FrontiersMind/Nandi-Mini-600M-Early-Checkpoint)** | FrontiersMind | 105 | 18,626 | 600M 小模型早期检查点，低资源场景下的高效文本生成探索 |
| **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)** | Zyphra | 542 | 146,770 | 基于推理基础模型微调，8B 规模展现涌现推理能力的新尝试 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | bytedance-research | 464 | 438 | **any-to-any 统一架构**，单一模型打通图像/视频/文本任意转换，代表下一代多模态范式 |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 1,203 | 1,157,497 | 文本到视频现象级产品，115 万下载+端点兼容标签，商业化就绪度极高 |
| **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | openbmb | 826 | 166,049 | 端侧视觉语言模型新标杆，4.6 版在效率与感知精度间取得新平衡 |
| **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Supertone | 499 | 31,940 | 韩系 TTS 代表，ONNX 运行时优化，情感表现力与实时性兼备 |
| **[ResembleAI/Dramabox](https://huggingface.co/ResembleAI/Dramabox)** | ResembleAI | 202 | 1,229 | 戏剧化语音克隆，LTX-Audio 架构驱动，专注叙事场景的声音表演 |
| **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)** | TencentARC | 165 | 0 | 图像到 3D 生成，MIT 许可证+论文背书，3D 资产生成 pipeline 的关键组件 |
| **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)** | HiDream-ai | 411 | 17,645 | 融合 Qwen3-VL 的图像理解与生成双能力，"O1" 暗示推理增强的生成范式 |
| **[microsoft/Fara-7B](https://huggingface.co/microsoft/Fara-7B)** | microsoft | 588 | 15,167 | 微软基于 Qwen2.5-VL 的视觉语言模型，7B 规模瞄准企业级多模态应用 |
| **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)** | SeeSee21 | 423 | 16,159 | 动漫风格文本到图像，GGUF+Safetensors 双格式支持，社区创作友好 |
| **[Efficient-Large-Model/SANA-WM_bidirectional](https://huggingface.co/Efficient-Large-Model/SANA-WM_bidirectional)** | Efficient-Large-Model | 68 | 0 | 双向图像到视频，相机控制标签预示专业影视工作流集成潜力 |
| **[ScenemaAI/scenema-audio](https://huggingface.co/ScenemaAI/scenema-audio)** | ScenemaAI | 113 | 377 | 扩散模型驱动的文本到音频/语音克隆，场景化音频生成新玩家 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)** | NemoStation | 142 | 125 | 视频-文本到文本，2B 规模探索视频理解+生成的统一，标签含 Qwen3.5 技术谱系 |
| **[Jackrong/Qwopus3.5-9B-Coder-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-GGUF)** | Jackrong | 136 | 17,539 | 社区代码模型量化版，9B 规模+GGUF 格式，本地 IDE 集成首选 |
| **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 179 | 23,532 | 人力资源领域 1B 专用模型，垂直场景微调的价值验证 |
| **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** | Cactus-Compute | 105 | 292 | JAX 编码器-解码器架构，专注函数调用与工具使用，Agent 基础设施层 |
| **[facebook/VGGT-Omega](https://huggingface.co/facebook/VGGT-Omega)** | facebook | 76 | 0 | Meta 视觉几何与跟踪研究模型，学术前沿探索，CC-BY-NC 许可限制商用 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 354 | 411,598 | Unsloth 多 token 预测量化版，41 万下载验证 MTP 技术+GGUF 的社区需求 |
| **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)** | unsloth | 294 | 363,131 | MoE 版同步量化，两大 GGUF 合计 77 万下载，Unsloth 成 Qwen 生态关键基础设施 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 335 | 0 | MLX 框架聊天模板修复，零下载但高点赞，开发者体验痛点的高度共鸣 |
| **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)** | circlestone-labs | 1,449 | 571,087 | ComfyUI 单文件扩散模型，57 万下载，工作流集成度成为社区采纳关键 |
| **[CohereLabs/command-a-plus-05-2026-w4a4](https://huggingface.co/CohereLabs/command-a-plus-05-2026-w4a4)** | CohereLabs | 73 | 0 | Cohere 视觉模型 W4A4 权重量化，零下载暗示企业内测或发布前夕 |

---

## 生态信号

**Qwen 家族形成最强开源集群**：Qwen3.6 系列独占 4 席（含 2 个官方+2 个量化衍生），覆盖 27B/35B 稠密/MoE 双架构，叠加社区 GGUF/模板修复，构建起完整的"官方发布-社区优化-端侧部署"飞轮。**DeepSeek-V4 与 Google Gemma-4 形成两极**：前者以技术深度（Pro/Flash 分层）吸引开发者，后者以 1000 万+下载量证明品牌与许可证（Apache 2.0）的规模化优势。量化活动呈现"MTP+GGUF"新组合，Unsloth 通过多 token 预测量化差异化竞争。值得关注的是，**任务标签 N/A 占比达 20%**（6/30），反映模型正突破传统分类边界，向通用 Agent 基础设施演进——Cactus-Compute/needle 的工具调用、Zyphra/ZAYA1 的推理基础模型均为信号。

---

## 值得探索

| 模型 | 理由 |
|:---|:---|
| **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | **any-to-any 架构的前瞻性实验**。单一模型统一图像/视频/文本任意方向生成，若验证成功将重塑多模态模型设计范式——当前 464 赞/438 下载的低渗透率恰是早期窗口。 |
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | **开源推理能力的当前天花板**。4082 赞+380 万下载的双重验证，Pro/Flash 分层覆盖从实验室到生产的全链路，是评估下一代 LLM 能力的基准锚点。 |
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | **效率前沿的技术组合验证**。多 token 预测（MTP）+ GGUF 量化+41 万下载，代表"更快推理、更低显存、保持质量"的三元目标，本地部署与大并发 API 的关键基础设施。 |

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*