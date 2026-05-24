# Hugging Face 热门模型日报 2026-05-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-05-24 00:23 UTC

---

# Hugging Face 热门模型日报 | 2026-05-24

---

## 今日速览

本周 Hugging Face 生态呈现**多模态爆发与国产模型领跑**的双重态势：DeepSeek-V4-Pro 以 4,190 点赞和 450 万下载稳居榜首，Qwen3.6 系列（27B/35B-A3B）形成密集产品矩阵；视频生成领域 Sulphur-2-base 下载量突破 128 万，印证生成式视频正从实验室走向规模化应用；社区量化生态活跃，Unsloth 与 Jackrong 持续输出 GGUF 版本，降低大模型部署门槛。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,190 | 4,510,828 | 本周绝对王者，DeepSeek 新一代旗舰文本模型，对话与推理能力全面跃升，下载量断层领先 |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,206 | 2,703,252 | V4 系列的轻量高速版本，平衡性能与推理成本，适合高并发场景 |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,405 | 4,115,906 | 阿里 Qwen3.6 代际核心模型，视觉-语言统一架构，下载量紧追 DeepSeek |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,876 | 6,011,835 | **本周点赞最高 MoE 模型**，35B 总参数仅激活 3B，效率与效果兼得 |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,746 | 10,289,284 | **下载量破千万**，Gemma 4 代视觉指令模型，Google 开源战略的标杆之作 |
| **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 257 | 78,771 | 面向人力资源管理的垂直领域文本模型，行业专用化趋势代表 |
| **[nvidia/Nemotron-Labs-Diffusion-14B](https://huggingface.co/nvidia/Nemotron-Labs-Diffusion-14B)** | nvidia | 77 | 3,282 | NVIDIA 实验室扩散模型，探索生成式架构与特征提取的交叉创新 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 1,302 | 1,286,075 | **文本到视频现象级模型**，128 万下载验证其作为开源视频生成基础设施的地位 |
| **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)** | circlestone-labs | 1,514 | 620,247 | ComfyUI 生态热门扩散模型，艺术创作社区高度活跃 |
| **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | openbmb | 914 | 247,170 | 面壁智能端侧视觉模型 4.6 代，"小钢炮"路线持续迭代，端侧多模态标杆 |
| **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | bytedance-research | 701 | 1,227 | 字节跳动 any-to-any 统一架构，图像/视频/文本任意模态互转，技术前瞻性极强 |
| **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)** | HiDream-ai | 426 | 23,882 | 融合 Qwen3-VL 的图像理解与生成双能力，"O1" 命名暗示推理增强的生成范式 |
| **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)** | TencentARC | 195 | 0 | 腾讯 ARC 单图重建 3D 模型，学术前沿（arXiv 2605.10922），刚发布即获关注 |
| **[Efficient-Large-Model/SANA-WM_bidirectional](https://huggingface.co/Efficient-Large-Model/SANA-WM_bidirectional)** | Efficient-Large-Model | 92 | 0 | 双向图像到视频生成，支持相机运动控制，视频生成可控性新探索 |
| **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Supertone | 614 | 40,368 | 韩国 Supertone 第三代 TTS，ONNX 推理优化，语音合成商业化成熟方案 |
| **[ResembleAI/Dramabox](https://huggingface.co/ResembleAI/Dramabox)** | ResembleAI | 239 | 1,394 | 戏剧化语音克隆与生成，聚焦情感表现力，AI 配音细分赛道创新 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)** / **[7B](https://huggingface.co/tencent/Hy-MT2-7B)** / **[30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)** | tencent | 425/143/291 | 2,564/1,321/970 | 腾讯混元翻译系列三箭齐发，覆盖 1.8B 到 30B-MoE，机器翻译专业化布局 |
| **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)** | NemoStation | 267 | 5,283 | 视频-文本理解模型，基于 Qwen3.5 架构，视频问答与摘要场景专用 |
| **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)** | numind | 92 | 9,918 | 文档信息抽取专用模型，视觉-语言架构适配结构化数据提取 |
| **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** | Cactus-Compute | 127 | 335 | JAX 生态函数调用与工具使用专用框架，Agent 基础设施层创新 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|:---|:---|---:|---:|:---|
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 435 | 597,584 | Unsloth 官方量化，MTP（多 Token 预测）加速推理，社区量化标杆 |
| **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)** | unsloth | 349 | 507,644 | MoE 架构 GGUF 化突破，50 万+下载证明 MoE 本地部署需求旺盛 |
| **[Jackrong/Qwopus3.5-9B-Coder-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-GGUF)** | Jackrong | 172 | 35,795 | 社区开发者 Qwen 代码模型量化版，Coder 系列本地 IDE 集成热门 |
| **[Jackrong/Qwopus3.6-27B-v2-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-GGUF)** | Jackrong | 89 | 2,853 | Qwen3.6 迭代跟进迅速，v2 版本优化内存占用与推理速度 |
| **[Jackrong/Qwopus3.5-9B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-MTP-GGUF)** | Jackrong | 84 | 27,398 | MTP 技术下沉至 9B 代码模型，平衡效率与代码生成质量 |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 380 | 0 | MLX 生态聊天模板修复，Apple Silicon 部署痛点解决方案 |
| **[CohereLabs/command-a-plus-05-2026-w4a4](https://huggingface.co/CohereLabs/command-a-plus-05-2026-w4a4)** / **[bf16](https://huggingface.co/CohereLabs/command-a-plus-05-2026-bf16)** | CohereLabs | 181/111 | 4,261/12,186 | Cohere 视觉指令模型双精度发布，W4A4 量化与 BF16 原版并行，企业级部署选项 |

---

## 生态信号

**模型家族格局**：Qwen3.5/3.6 与 DeepSeek-V4 形成"双雄并立"，二者占据榜单核心位置且衍生生态繁茂——Unsloth、Jackrong 等量化社区围绕 Qwen 持续输出，DeepSeek 则以自研矩阵覆盖 Pro/Flash 双档需求。腾讯混元（Hy-MT2）、字节 Lance、面壁 MiniCPM 等国产力量在多模态与垂直场景差异化突围。

**开源权重深化**：Google Gemma-4 下载破千万、Sulphur-2-base 下载破百万，印证开源模型正从"技术演示"转向"生产基础设施"。闭源 API 与开源权重的边界模糊化——CohereLabs、DeepSeek 等均采用"开放权重+云服务"双轨策略。

**量化生态活跃**：GGUF 格式占据微调/量化分类绝对主导，MTP（多 Token 预测）与 MoE 量化成为新难点与热点。Unsloth 官方与 Jackrong 等个人开发者形成互补，覆盖从 7B 到 35B-A3B 的全谱系本地部署需求。

---

## 值得探索

| 模型 | 探索理由 |
|:---|:---|
| **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | **any-to-any 架构的前沿实验**：打破"文本→图像→视频"的单向生成范式，支持任意模态间的双向转换。701 点赞与 1,227 下载的"高赞低下载"反差，暗示其技术前瞻性与部署门槛并存，适合研究者跟踪下一代统一多模态架构 |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | **MoE 效率革命的标杆**：6M+ 下载验证其工程成熟度，1,876 点赞反映社区认可。35B 总参数 / 3B 激活参数的设计，在性能与推理成本间取得突破，是企业级应用 MoE 的首选基座 |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | **开源视频生成的规模化验证**：128 万下载是文本到视频领域的现象级数据，diffusers+GGUF 双格式支持降低接入门槛。若需构建视频生成工作流或研究开源视频模型的商业可行性，此为必测基准 |

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*