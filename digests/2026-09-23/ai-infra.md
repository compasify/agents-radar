# AI 基础设施日报 2026-09-23

> 生成时间: 2026-09-23 00:59 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-09-23**

---

### **1. 生态概览**  
AI推理与服务生态正迅速成熟为一个多层级、硬件感知的栈结构，性能、正确性与开发者体验之间的依赖关系日益紧密。**vLLM**、**SGLang** 和 **llama.cpp** 等项目正在汇聚于高效能推理引擎，实现深度的GPU内核优化；而 **Ollama**、**LiteLLM** 与 **Unsloth** 则致力于打造面向本地部署与智能体工作流的易用型全栈平台。一个清晰的分野已出现：底层引擎项目聚焦原始吞吐量与内存效率，而高层工具则更关注可用性、多模态支持及工具链集成——尤其在智能体与结构化输出方面。

---

### **2. 活动对比**

| 项目       | 开放问题（24小时） | 合并的PR（24小时） | 发布状态        |
|---------------|-------------------|------------------|------------------------|
| vLLM          | 18                | 52               | v0.30.0（稳定版）       |
| SGLang        | 12                | 47               | 无（内部变更）|
| llama.cpp     | 14                | 38               | b11115（补丁版本） |
| Ollama        | 10                | 25               | 无（关键修复已合并） |
| LiteLLM       | 12                | 21               | v1.102.0（安全导向） |
| Unsloth       | 16                | 32               | v0.1.814-beta（实验版） |

> ✅ **洞察**：vLLM 在活动量与稳定性交付上均领先；LiteLLM 展现出强劲的安全态势；Unsloth 正加速推进针对视觉智能体能力的快速β迭代。

---

### **3. 模型支持竞赛**

| 模型 / 架构         | vLLM                     | SGLang                  | llama.cpp              | Ollama                 | LiteLLM             | Unsloth               |
|-------------------------------|--------------------------|-------------------------|------------------------|------------------------|---------------------|------------------------|
| **DeepSeek-V4.1-Flash**       | ✅ 完全支持（MXFP8, FlashMLA V4.1） | ✅ 后端 + IndexCache   | ❌ 不支持        | ❌ 不支持        | ❌ 未列出         | ❌ 不支持        |
| **Kimi-K3 (MXFP4)**           | ⚠️ 跟踪中（ROCm CI）      | ✅ MXFP4 ROCm 支持     | ❌ 无提及           | ❌ 无提及           | ❌ 无提及         | ❌ 无提及           |
| **Qwen-Image-2.1**            | ❌ 不支持           | ❌ 不支持          | ❌ 不支持        | ❌ 不支持        | ❌ 不支持      | ✅ 本地支持（β版） |
| **Gemma 4 Vision**            | ✅ 单次采样统计 | ❌ 未提及          | ❌ 未提及        | ✅ 动态 `max_soft_tokens` | ❌ 未提及    | ❌ 未提及        |
| **DiffusionGemma**            | ✅ 单次统计内核   | ❌ 未提及          | ❌ 未提及        | ❌ 未提及        | ❌ 未提及      | ❌ 未提及        |
| **SM120 (Blackwell)**         | ⚠️ GLM-5.3-Flash 部分支持   | ❌ 未提及          | ❌ 未提及        | ❌ 未提及        | ❌ 未提及      | ❌ 未提及        |
| **AMD MI355X (gfx950)**       | ✅ 分页评分器 + 瓦片    | ✅ 小型模型 MXFP4 内核   | ✅ A8 Q4_K DP4A 二进制  | ❌ 未提及        | ❌ 未提及      | ✅ RDNA1 训练（RX 5700 XT） |

> 🏆 **胜者**：**vLLM** 在前沿模型与硬件支持上领先，尤其在 SM100/Blackwell 及 ROCm 方面表现突出。**Unsloth** 在 *本地* 视觉智能体就绪度上领先（如 Qwen-Image-2.1），而 **SGLang** 在分布式推理集成方面表现出色。

---

### **4. 性能前沿**

| 优化方向         | vLLM                                  | SGLang                              | llama.cpp                          | Ollama                           | LiteLLM                         | Unsloth                       |
|----------------------------|---------------------------------------|-------------------------------------|------------------------------------|----------------------------------|----------------------------------|-------------------------------|
| **KV缓存与内存**      | ✅ MXFP8, 分页评分器, FlashMLA V4.1 | ✅ DCP/PD 解耦, 事件模式对齐 | ✅ Flash Attention（Vulkan）, L1 切割 | ✅ Qwen3.8 Flash Next 中的 BF16/MXFP8 | ✅ Rust 成本引擎（图像/视频定价） | ✅ VAE 解码编译（DiT） |
| **批处理与吞吐**  | ✅ 异步 Engram 预取, Mega-mHC   | ✅ DCP, 状态传输效率    | ✅ Top-k 融合（MoE）, CUDA flash attention | ✅ MLX 内核优化（Qwen3.8） | ✅ 通过 Rust 后端实现秘密解析 | ✅ 推理块速度提升 2 倍（60 FPS） |
| **量化**           | ✅ AWQ-W4A16 融合 GEMM, FP8 复用     | ✅ NVFP4（全模型）, MXFP4 ROCm   | ✅ A8 Q4_K DP4A, IQ4_NL 支持    | ✅ MXFP8, BF16 专家路径       | ✅ 图像/OCR/视频定价模型 | ✅ NVFP4（flashinfer）, INT4/INT8 加载 |
| **分布式服务**    | ✅ 多节点（通过异步预取）。        | ✅ PD/DCP, IPC 迁移到 msgpack | ❌ 有限（单节点为主）     | ❌ 不适用                 | ✅ 网关路由（模型别名） | ❌ 不适用               |
| **内核特化**  | ✅ FlashMLA V4.1, DeepGEMM Mega-mHC    | ✅ 融合 MoE（小模型）, JIT 调优   | ✅ Vulkan/Xe Flash Attention, SYCL   | ✅ MLX 特有内核           | ✅ 原生 Rust 诊断工具       | ✅ FlashInfer NVFP4 后端     |

> 🔥 **趋势**：前沿正转向 **硬件特定内核融合**（如 MXFP8、NVFP4）、**分布式上下文并行（DCP）** 以及基于 **Rust 的性能层**，用于成本控制、密钥管理与日志记录。

---

### **5. 层级定位**

| 项目       | 主要层级                  | 核心差异化                                                                 |
|---------------|--------------------------------|--------------------------------------------------------------------------------------|
| **vLLM**      | **服务引擎**             | 高吞吐、低延迟推理；专为大规模云部署优化；强大的GPU内核特化能力。 |
| **SGLang**    | **分布式推理栈**| 先进的 PD/DCP 解耦；IPC 标准化；专为可扩展的多节点推理集群设计。 |
| **llama.cpp** | **本地运行时 / 跨后端**| 支持异构后端（Vulkan、OpenCL、SYCL、MUSA）；适用于边缘/本地推理；依赖极低。 |
| **Ollama**    | **本地开发者平台**   | 用户友好的 CLI/UI；多模态支持；智能体快速迭代；与 `llama.cpp` 紧密集成。 |
| **LiteLLM**   | **LLM 网关 / 编排**| 统一 API 抽象；成本追踪；模型别名；通过 cosign 签名实现安全；生产级可观测性。 |
| **Unsloth**   | **面向智能体的本地运行时**| 视觉-语言智能体技能；实时推理（60 FPS）；以工作室为导向的用户体验；专注创意 AI 工作流。 |

> 🧩 **定位洞察**：vLLM 与 SGLang 正成为高性能推理的 **事实标准引擎**。LiteLLM 充当 **生产网关层**，而 Ollama 与 Unsloth 则作为 **面向开发者的平台**——其中 Unsloth 独特聚焦于 **视觉智能体工作流**。

---

### **6. 趋势信号**

#### 🔍 **从活动数据中提取的关键行业趋势**
1. **硬件感知优化已成为必备项**  
   - SM100/Blackwell（SM120）支持在 vLLM、SGLang 与 llama.cpp 中被优先推进。  
   - AMD ROCm（gfx950）获得显著关注：分页评分器、窄瓦片、MXFP4 内核等技术均旨在降低解码开销与内存压力。

2. **量化正超越 FP8/AWQ**  
   - NVFP4（Unsloth）、MXFP4（SGLang）及混合精度混合方案（vLLM）表明，正向 **应用定制化量化** 迈进，而非“一刀切”策略。

3. **分布式服务正超越批处理范畴**  
   - SGLang 的 DCP/PD 解耦与 vLLM 的异步预取表明，大型推理正转向 **逻辑容量规划** 与 **状态感知调度**。

4. **安全与信任在生产环境中不可妥协**  
   - LiteLLM 采用 **cosign 签名 Docker 镜像** 与 **Rust 支持的秘密解析机制**，反映对可验证、可审计部署的需求激增，尤其是在受监管环境。

5. **智能体推动一体化工具链需求**  
   - Unsloth 的原生智能体能力、Ollama 的动态图像解析、LiteLLM 的结构化输出解析表明，**智能体工作负载正在驱动全栈创新**，而不仅仅是推理速度。

#### 📌 **应用开发者应重点关注**
- **避免不稳定组合**：勿在长序列解码或智能体流程中使用 GLM-5.3-Flash（vLLM/SGLang 存在回归问题）。
- **监控 AMD ROCm 稳定性**：尽管进展显著（MI355X、RX 5700 XT），但在 RX 7900 XTX 上训练仍具风险（Unsloth #11498）。
- **利用新成本透明性**：借助 LiteLLM 的 Rust 成本引擎与 Ollama 的 `max_soft_tokens` 暴露功能，实现更好的预算控制与视觉流水线设计。
- **准备混合部署架构**：结合 vLLM/SGLang（引擎）+ LiteLLM（网关）+ Ollama/Unsloth（本地运行时），构建灵活、安全且高性能的智能体栈。

> ✅ **最终建议**：对于生产级智能体，采用 **分层架构**：  
> **引擎（vLLM/SGLang）** → **网关（LiteLLM）** → **运行时（Ollama/Unsloth）** —— 确保在规模化下兼顾性能、安全与可用性。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM 摘要 – 2026-09-23**

---

### **1. 今日亮点**  
vLLM v0.30.0 版本正式支持 **DeepSeek-V4.1-Flash**，利用 **MXFP8 存储** 和 **FlashMLA V4.1** 在 SM100 架构上实现性能优化，并对 **异步 Engram 预取** 和 **DeepGEMM Mega-mHC** 进行了显著改进。关键 PR 集中修复了 **GLM-5.3-Flash** 在长推理场景下的严重正确性问题，同时通过新增分页评分器和更窄的注意力块（attention tiles），提升了在 AMD MI355X（gfx950）上的 ROCm 性能。

---

### **2. 发布与破坏性变更**  
- **v0.30.0**：重大版本更新，共包含 762 次提交，来自 315 名贡献者（其中 104 人为新贡献者）。  
  - *未报告任何破坏性 API 变更*；向后兼容性保持不变。  
  - [发布说明](https://github.com/vllm-project/vllm/releases/tag/v0.30.0)

---

### **3. 新模型与硬件支持**  
- **模型**：  
  - ✅ **DeepSeek-V4.1-Flash** 现已完整支持，基于 SM100 架构的 MXFP8 KV 缓存与 FlashMLA V4.1。  
  - ✅ **Kimi K3** 模型追踪正在进行中 ([#50001](https://github.com/vllm-project/vllm/issues/50001))；已添加 AMD CI 测试 ([#58012](https://github.com/vllm-project/vllm/pull/58012))。  
  - ✅ **DiffusionGemma** 现已引入单次遍历采样统计内核 ([#58226](https://github.com/vllm-project/vllm/pull/58226))，并修复高并发场景下的张量形状不匹配问题 ([#58035](https://github.com/vllm-project/vllm/issues/58035))。  

- **硬件与后端**：  
  - ✅ **ROCm/gfx950 (MI355X)**：为 DSA 稀疏索引解码新增仅分页候选评分器 ([#57859](https://github.com/vllm-project/vllm/pull/57859))，采用更窄的 Triton 预填充块 ([#58225](https://github.com/vllm-project/vllm/pull/58225))。  
  - ✅ **Intel XPU**：批量 MoE 的 all-to-all EP 后端仍在开发中 ([#46871](https://github.com/vllm-project/vllm/pull/46871))。  
  - ✅ **SM120 (Blackwell)**：GLM-5.3-Flash 已实现部分支持；仍缺少无 rope 稀疏 MLA 路径 ([#53963](https://github.com/vllm-project/vllm/issues/53963))。

- **量化**：  
  - ✅ **AWQ-W4A16**：在 SM89 上通过融合反量化-GEMM 内核（`VLLM_BATCH_INVARIANT=1`）降低内存带宽使用 ([#57047](https://github.com/vllm-project/vllm/pull/57047))。  
  - ✅ **FP8 权重变换** 已重构为可复用的纯函数 ([#57732](https://github.com/vllm-project/vllm/pull/57732))。

---

### **4. 性能与优化**  
- **吞吐量/延迟**：  
  - **ROCm gfx950 (MI355X)**：分页评分器降低了稀疏索引中的解码开销 ([#57859](https://github.com/vllm-project/vllm/pull/57859))。  
  - **SM100 (Blackwell)**：DeepGEMM Mega-mHC 与异步 Engram 预取显著提升 DeepSeek-V4.1-Flash 的推理效率。  
  - **CUDA Graphs**：`VLLM_BATCH_INVARIANT=1` 现默认使用可中断图以保留调优后的矩阵乘配置 ([#57586](https://github.com/vllm-project/vllm/pull/57586))。

- **内存与内核**：  
  - **DiffusionGemma 的单次遍历采样统计内核** 提升了高并发场景下的解码效率 ([#58226](https://github.com/vllm-project/vllm/pull/58226))。  
  - **ROCm 平台上的 MiniMax-M3** 实现上下文并行评分，有效减少 TP > 1 时的冗余计算 ([#57832](https://github.com/vllm-project/vllm/pull/57832))。

---

### **5. 稳定性与回归问题**  
- **严重缺陷**：  
  1. **GLM-5.3-Flash 长推理过程中累积推理后退化** → 多次解码后输出被污染 ([#56868](https://github.com/vllm-project/vllm/issues/56868)，22 条评论)。  
  2. **GLM-5.3-Flash 多轮代理任务生成“乱码”** → 代理工作流中出现重复令牌循环 ([#56605](https://github.com/vllm-project/vllm/issues/56605)，19 条评论)。  
  3. **DeepSeek-V4-Flash 在 ROCm ≥4k token 时静默检索损坏** → AITER 稀疏索引器无声失败 ([#52109](https://github.com/vllm-project/vllm/issues/52109)，11 条评论)。  
  4. **Gemma4 在 Turing GPU（SM7.5）上所有注意力后端均遭遇共享内存限制** ([#38918](https://github.com/vllm-project/vllm/issues/38918)，22 条评论)。  
  5. **DiffusionGemma 在并发解码下崩溃**，由张量形状不匹配导致 ([#58035](https://github.com/vllm-project/vllm/issues/58035)，6 条评论)。

- **正在修复的问题**：  
  - [#52244](https://github.com/vllm-project/vllm/pull/52244)：恢复 MTP 规范解码下混合 GDN 前缀缓存命中。  
  - [#56995](https://github.com/vllm-project/vllm/pull/56995)：修复通用 MTP Drafting 器中 `get_top_tokens()` 的崩溃问题。  
  - [#57553](https://github.com/vllm-project/vllm/pull/57553)：防止 Qwen3 因 fenced code 解析错误产生虚假工具调用。

---

### **6. 对应用开发者的影响**  
- **对于代理与结构化输出**：建议使用 `VLLM_BATCH_INVARIANT=1` + 可中断 CUDA Graphs，以获得更一致的性能表现，尤其适用于 DeepSeek-V4.1-Flash 等大模型。  
- **对于多轮/强化学习工作流**：可主动启用 `SessionAffinityScheduler` ([#51384](https://github.com/vllm-project/vllm/pull/51384)) 和 `routed-expert prefix omission` ([#57966](https://github.com/vllm-project/vllm/pull/57966))，以减少冗余路由与传输开销。  
- **避免已知回归**：请勿在 **Turing GPU（SM7.5）** 上运行 **Gemma4**；在修复落地前，请避免在长推理或代理场景中使用 **GLM-5.3-Flash**。  
- **AMD 用户**：近期合并的 PR 已显著提升 **MI355X（gfx950）** 上的解码性能；可通过更新的 CI 任务测试 **Kimi-K3** 在 ROCm 上的表现 ([#58012](https://github.com/vllm-project/vllm/pull/58012))。  

> 🔗 *重点关注问题*：[#56868](https://github.com/vllm-project/vllm/issues/56868), [#56605](https://github.com/vllm-project/vllm/issues/56605), [#53963](https://github.com/vllm-project/vllm/issues/53963) — 生产部署稳定性至关重要。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-09-23

---

### **1. 今日亮点**  
SGLang 在分布式推理基础设施方面持续快速推进，关键进展包括 **PD（预填充-解码）分离**、**DCP（解码上下文并行）** 和 **AMD ROCm 支持**。目前正全力统一各后端的 KV 缓存语义，并将 IPC 完全迁移至 `msgpack`，以提升稳定性和性能。社区正在积极修复 EAGLE 试探性解码和 DCP 通信路径中的关键回归问题。

---

### **2. 发布与破坏性变更**  
*无*。过去 24 小时内未发布新版本。但内部 API 的持续变更预计会影响下游用户：
- **IPC 迁移**：`SGLANG_USE_PICKLE_IPC=0` 现已改为可选启用；`PickleWrapper` 的完全移除已在 [#29465](https://github.com/sgl-project/sglang/issues/29465) 中跟踪，最终将使 `msgpack` 成为默认选项。
- **KV 缓存事件模式对齐**：如 [#39991](https://github.com/sgl-project/sglang/issues/39991) 等 PR 致力于与 vLLM 统一 KV 缓存事件格式，以实现互操作性。

---

### **3. 新模型与硬件支持**  
- **Kimi-K3 MXFP4** 支持通过 ROCm 加入：PR [#40811](https://github.com/sgl-project/sglang/pull/40811) 实现了在 AMD GPU 上使用 MXFP4 精度服务经过 Quark 量化后的 Kimi-K3 模型。
- **DeepSeek-V4** 获得增强后端集成：
  - 针对 AMD 的 Aiter MegaMoEv2 后端（PR [#35619](https://github.com/sgl-project/sglang/pull/35619)）
  - 在 PD/CP/HiCache 下实现完整 IndexCache 支持（PR [#32771](https://github.com/sgl-project/sglang/pull/32771)）
- **NPU（Ascend）**：CANN 版本更新至 9.1.0 并支持 Python 3.12（PR [#40524](https://github.com/sgl-project/sglang/pull/40524)）。
- **SenseNova-U1/U1.5**：追踪问题 [#37742](https://github.com/sgl-project/sglang/issues/37742) 基于官方参考实现规划了路线图。

---

### **4. 性能与优化**  
- **DCP 与 PD 分离**：一系列相关 PR（[#39743](https://github.com/sgl-project/sglang/pull/39743)、[#39731](https://github.com/sgl-project/sglang/pull/39731)、[#39749](https://github.com/sgl-project/sglang/pull/39749)）通过将准入逻辑与逻辑令牌容量对齐，并在 CPU 回退时保留草稿 KV，提升了状态传输效率。
- **AMD ROCm 优化**：
  - 针对 gfx950（Qwen）的小规模 MXFP4 融合 MoE 内核降低了小批量解码延迟（PR [#40204](https://github.com/sgl-project/sglang/pull/40204)）。
  - 为 JIT 内核添加了 L1 切割偏好设置，以维持占用率（PR [#40767](https://github.com/sgl-project/sglang/pull/40767)）。
- **试探性解码**：针对低比率索引层（DeepSeek-V4.1）和两级候选索引（PR [#40574](https://github.com/sgl-project/sglang/pull/40574)）的工作持续推进，旨在降低内存压力并提升吞吐量。

---

### **5. 稳定性与回归问题**  
今日报告的关键问题包括：

| 问题 | 严重性 | 状态 | 链接 |
|------|----------|--------|------|
| Triton 融合 MoE + EAGLE 中的非法内存访问（GLM-5.2-NVFP4） | 高 | 已开放 | [#40623](https://github.com/sgl-project/sglang/issues/40623) |
| FP8 KV 缓存解码因未融合量化导致速度下降 | 中 | 已开放 | [#30815](https://github.com/sgl-project/sglang/issues/30815) |
| 断开连接的流式客户端后出现僵尸请求泄漏 | 高 | 已开放 | [#36333](https://github.com/sgl-project/sglang/issues/36333) |
| GLM-5.3-Flash vision 在主分支上因 pinned transformers==5.12.1 而损坏 | 中 | 已开放 | [#39831](https://github.com/sgl-project/sglang/issues/39831) |

> ⚠️ **注意**：多个回归问题源于近期合并或回滚的更改（例如 #34160 回滚）。开发人员应避免在 EAGLE 试探性解码中使用 `--moe-a2a-backend flashinfer_megamoe`，直到修复落地。

---

### **6. 对应用开发者的意义**  
- **使用 `msgpack` IPC**：若你正在构建自定义后端或调试 IPC 问题，请设置 `SGLANG_USE_PICKLE_IPC=0`，并预期未来将移除 pickle 回退机制。
- **避免实验性标志**：由于已知崩溃问题（PR #40623），请避免在 EAGLE 试探性解码中使用 `--moe-a2a-backend flashinfer_megamoe`。
- **监控 CI 健康状况**：当前流水线存在 2 个失败和 5 个不稳定的测试（跟踪于 [#17050](https://github.com/sgl-project/sglang/issues/17050)）；预计夜间构建会出现临时失败。
- **利用新指标**：近期 PR（#40255、#40164）新增了对请求结果和传输字节数的细粒度追踪——非常适合生产环境可观测性部署。
- **准备应对 DCP/PD 变化**：随着 DCP 成为默认配置（`fi_a2a`），请确保你的部署脚本能处理上下文并行及逻辑容量规划。

---  
*摘要由 GitHub 数据生成：[sgl-project/sglang](https://github.com/sgl-project/sglang)*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp 消息简报 – 2026-09-23**

---

### **1. 今日重点**  
最新更新聚焦于 `llama-server` 路由器和淘汰逻辑的关键稳定性修复，防止在并发场景下加载模型时出现竞争条件。性能方面，已合并针对 Vulkan 的 Intel Xe Flash Attention 优化，并新增适用于 OpenCL 的 A8 Q4_K DP4A 二进制内核——两者均旨在提升现代硬件上的高效推理能力。

---

### **2. 发布与破坏性变更**  
- **b11115**：为 A8 量化模型（Q4_K 非 MoE，DP4A 加速）添加 OpenCL 二进制内核 `kernel_gemm_noshuffle_q4_k_q8_1_dp4a_ila_a8_bin`。  
  🔗 [PR #29056](https://github.com/ggml-org/llama.cpp/pull/29056)  
- **b11114**：通过将所有模型加载路由至队列，修复了 `llama-server` 中的路由器淘汰竞争条件。  
  🔗 [PR #29217](https://github.com/ggml-org/llama.cpp/pull/29217)  
- **b11113**：防止子进程中日志文件继承（`--no-log`，`--log-file`）。  
  🔗 [PR #29212](https://github.com/ggml-org/llama.cpp/pull/29212)  
- **b11112**：通过服务器 API 添加对 `function_call_output` 中 `input_image` 的支持。  
  🔗 [PR #20663](https://github.com/ggml-org/llama.cpp/pull/20663)

> ✅ *未检测到破坏性 API 变更；均为功能增强或稳定性改进。*

---

### **3. 新模型与硬件支持**  
- **Vulkan (Intel Xe)**：为 Xe-LPG Plus/Xe2/Xe3 架构的 split-k 路径添加 Flash Attention 优化内核。  
  🔗 [PR #24406](https://github.com/ggml-org/llama.cpp/pull/24406)  
- **OpenCL (AMD)**：引入针对 A8 优化的 Q4_K 非 MoE DP4A 二进制内核，改进内存访问模式。  
  🔗 [PR #29056](https://github.com/ggml-org/llama.cpp/pull/29056)  
- **SYCL (Intel Arc B70)**：持续进行性能优化，包括 IQ3 代码重排与持久布局优化。  
  🔗 [PR #29107](https://github.com/ggml-org/llama.cpp/pull/29107)  
- **MUSA (第一阶段)**：修复 MTT S5000（MUSA `31` 架构）的算子失败与构建问题。  
  🔗 [PR #29193](https://github.com/ggml-org/llama.cpp/pull/29193)  

> 📌 *当前支持已扩展至 Intel Arc Pro B70、AMD Radeon RX 7000 系列及即将推出的 Blackwell GPU（RTX 50xx），对异构后端的关注持续进行中。*

---

### **4. 性能与优化**  
- **Flash Attention (Vulkan)**：Intel Xe Flash Attention 内核在 split-k 路径上显著降低延迟——尤其适用于大上下文窗口。  
  🔗 [PR #24406](https://github.com/ggml-org/llama.cpp/pull/24406)  
- **SYCL (Intel Arc)**：支持 IQ3_S/MMVQ 重排感知去量化与持久布局，减少冗余计算。  
  🔗 [PR #29107](https://github.com/ggml-org/llama.cpp/pull/29107)  
- **CUDA (MoE)**：分组专家的 top-k 融合恢复了约 90% 在 MoE 层中丢失的吞吐量。  
  🔗 [PR #29181](https://github.com/ggml-org/llama.cpp/pull/29181)  
- **GPU 内存管理**：新增可选的 Vulkan 设备保活机制（`GGML_VK_KEEPALIVE_MS`），防止空闲 GPU 被淘汰。  
  🔗 [PR #29267](https://github.com/ggml-org/llama.cpp/pull/29267)  
- **量化**：正在向 CUDA Flash Attention KV 缓存中加入 IQ4_NL 支持。  
  🔗 [PR #29293](https://github.com/ggml-org/llama.cpp/pull/29293)  

> ⚡ *在 MoE 解码中观察到最高达 2–3 倍的性能提升，多模态流水线中的内存压力也显著降低。*

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 摘要 | 状态 | 修复 PR |
|--------|------|--------|--------|--------|
| 严重 | #25618 | 在贪婪采样下，量化目标（Q4_K_M）的推测解码偏离原始行为 | 开放 | 尚无修复 |
| 高 | #28752 | RDNA3 Vulkan 上 b10780 后提示速度严重下降 | 开放 | 处理中 |
| 高 | #28581 | IQ3_S 在 RTX 5060TI（Blackwell）上产生垃圾输出 | 开放 | 尚无修复 |
| 高 | #28158 | Qwen3.8 DFlash/MTP 推测生成越界 token ID（== n_vocab）在 Vulkan 上 | 开放 | 尚无修复 |
| 中等 | #29104 | 当被 VictoriaMetrics 抓取时，服务器静默停止处理 | 开放 | 尚无修复 |
| 中等 | #29288 | OpenVINO 无法在 Intel Core 7 155h 上运行 Gemma | 开放 | 尚无修复 |

> ❗ *多个严重正确性问题报告集中在推测解码与量化推理中——尤其影响 Qwen3.5/3.8 及新 Blackwell GPU。*

---

### **6. 对应用开发者的意义**  
- **谨慎使用 `--cache-disk`**：基于磁盘的上下文卸载仍为功能请求（#20697），长期上下文将导致高内存占用。
- **在 #25618 修复前避免对量化模型使用推测解码**——即使在 `temperature=0` 下结果也可能不一致。
- **多 GPU 部署时**，在 RDNA3 上避免使用 `--device Vulkan0` 而不经过测试，因 #28752 存在回归。
- **在 Vulkan 上运行长时间服务时启用 `GGML_VK_KEEPALIVE_MS`**，以防止无声的 GPU 被淘汰。
- **利用新的 MTP 草稿词表裁剪支持**（`d2t` 映射）实现高效的 Qwen3.5/MTP 工作流——已在近期 PR（#29290, #29143）中提供。
- **升级前务必检查发布说明**——特别是 Metal、Vulkan 与 SYCL 用户——因新后端存在不稳定性。

> 💡 *构建 LLM 网关的开发者应优先使用 b11114+ 版本以获得稳定的服务路由，并考虑使用 `--no-log` 避免子进程问题。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# **Ollama Digest – 2026-09-23**

---

### **1. 今日亮点**  
Ollama 项目持续推进多模态推理能力，关键 PR 实现了 Gemma 4 的动态图像分辨率选择，并优化了 Qwen 3.8 在 MLX 上的性能。已合并多项关键稳定性修复，解决了 macOS UI 卡顿和结构化输出解析中的静默失败问题；当前工作重点包括扩展模型支持（如 MIMO v2.5）以及提升工具链对 OpenAI/Anthropic 标准的兼容性。

---

### **2. 发布与破坏性变更**  
*无*  
过去 24 小时内未发布新版本。但若干关键修复已合并至主分支，可能影响后续版本的行为：

- **PR #18603**：Gemma 4 中动态图像分辨率选择（`max_soft_tokens` 现为每张图像独立设置，不再硬编码）。  
  🔗 [GitHub PR #18603](https://github.com/ollama/ollama/pull/18603)
- **PR #18576 / #18550**：通过 MLX 内核优化提升 Qwen 3.8 Flash Next 性能（使用门控-增量机制、折叠密集 MLP 缩放）。  
  🔗 [GitHub PR #18550](https://github.com/ollama/ollama/pull/18550)

> ⚠️ 使用 `qwen3.8:flash-next` 或高分辨率视觉输入的开发者应在合并后预期速度与精度的提升。

---

### **3. 新模型与硬件支持**  
- **Gemma 4 视觉模型**：支持跨分辨率（70, 140, 280, 560, 1120）的动态 `max_soft_tokens`，解决高分辨率图像下的 OCR 问题。  
  🔗 [Issue #17152](https://github.com/ollama/ollama/issues/17152), [PR #18603](https://github.com/ollama/ollama/pull/18603)
- **Qwen 3.8 音频/MLX 支持**：正在开发音频输入功能（Issue #11798）及 MLX 特定优化。
- **新模型请求**：提议将 **MIMO v2.5**（支持 100 万+ token 上下文）加入 Ollama Cloud ([Issue #15887](https://github.com/ollama/ollama/issues/15887))。
- **System 1 模型**：请求支持轻量级模型如 **Kev** 和 **Laya** ([Issue #18594](https://github.com/ollama/ollama/issues/18594))。

> ✅ *未来兼容性提示*：用户应关注未来 API 响应中是否暴露 `max_soft_tokens` 参数。

---

### **4. 性能与优化**  
- **Qwen 3.8 提示词处理（MLX）**：在 M5 Max 上实现最高 **+19.1% TPS**（8k 提示词）：  
  - `2k tokens`：715 → 848 TPS (+18.7%)  
  - `8k tokens`：695 → 828 TPS (+19.1%)  
  🔗 [PR #18550](https://github.com/ollama/ollama/pull/18550)
- **内存效率（Qwen 3.8 Flash Next）**：专家路径使用 BF16，非专家权重使用 MXFP8，降低内存压力且不牺牲长文本生成质量。  
  🔗 [PR #18078](https://github.com/ollama/ollama/pull/18078)
- **LLM 后端更新**：  
  - `llama.cpp` 更新至上游 b11081（修复内存分配日志，移除过时补丁）。  
    🔗 [PR #18577](https://github.com/ollama/ollama/pull/18577)

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 状态 | 修复 PR |
|--------|------|--------|--------|
| 高 | macOS 应用启动卡死（v0.34.1）因 `osascript` 在主线程执行 | 已关闭 | [PR #18593](https://github.com/ollama/ollama/pull/18593) |
| 高 | `/api/generate` 在 `think=true` 且 `format` 设置时出现静默失败 | 已关闭 | [Issue #17544](https://github.com/ollama/ollama/issues/17544) |
| 高 | Homebrew 安装的 MLX 模型中结构化输出失效（缺少 xgrammar） | 未关闭 | [Issue #18597](https://github.com/ollama/ollama/issues/18597) |
| 中 | Windows 上 NVIDIA Blackwell 显卡检测失败（驱动 616.92）→ 回退至 CPU | 未关闭 | [Issue #18581](https://github.com/ollama/ollama/issues/18581) |
| 中 | macOS GUI 长对话在 60 秒后无声失败 | 未关闭 | [Issue #18368](https://github.com/ollama/ollama/issues/18368) |
| 低 | `top_logprobs` 被限制在 20，尽管后端支持更高值 | 未关闭 | [Issue #18590](https://github.com/ollama/ollama/issues/18590) |

> 🛠️ **注意**：多个回归问题与近期版本升级（如 v0.33.x → v0.34.x）相关，提示过渡路径可能存在不稳定性。

---

### **6. 对应用开发者的意义**  
- **动态使用 `max_soft_tokens`**：若构建视觉代理，避免硬编码 `280`——未来 API 可能将其作为运行时参数暴露（[PR #18603](https://github.com/ollama/ollama/pull/18603)）。
- **避免在 `/api/generate` 中使用 `think: true` + `format`**：该组合目前存在缺陷；建议改用 `/api/chat` 直至修复发布。
- **谨慎使用 Homebrew 安装的 MLX 构建**：当前安装方式缺少 `xgrammar` 支持；建议改用官方 Docker 或直接二进制安装。
- **关注 CUDA/Blackwell 兼容性**：若在搭载 RTX 50 系列的 Windows 上部署，除非通过 [PR #18581](https://github.com/ollama/ollama/issues/18581) 修复，否则将回退至 CPU。
- **规划增强的工具链支持**：随着即将推出的 JSON Schema 支持（[PR #18488](https://github.com/ollama/ollama/pull/18488)）和自定义工具功能（[Issue #17673](https://github.com/ollama/ollama/issues/17673)），代理工作流将获得更强表达力。

> 💡 **实用技巧**：对于生产环境代理，推荐使用 `docker run --gpus all` 并显式指定库（`OLLAMA_LLM_LIBRARY=vulkan`）以确保硬件访问一致性。  
> 🔗 [PR #18592](https://github.com/ollama/ollama/pull/18592) 为 Docker 添加了缺失的 Vulkan/MLX 依赖项。

---  
*本摘要基于 GitHub 活动整理 — ollama/ollama @ 2026-09-23*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 摘要 – 2026-09-23**

---

### **1. 今日亮点**  
最新版本 **v1.102.0** 引入了通过 **cosign 签名的 Docker 镜像**（经 sigstore 验证）增强的安全性，进一步保障生产环境部署的信任度。关键修复包括解决本地部署模型的预算控制失效问题（#14004）、速率限制中的重复计数问题（#34140），以及使用模型别名时流式请求的成本计算错误（#42161）。一项重大 PR（#42619）通过将密钥解析路由至原生 Rust 后端，降低了延迟并提升了可靠性。

---

### **2. 发布与破坏性变更**  
- **v1.102.0**：所有 Docker 镜像现均使用 [cosign](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0) 签名 —— 请使用 `cosign verify` 验证签名以确保完整性。  
- **破坏性变更**：`stable/1.102.x` 分支现已合并 #42388 和 #41462 的修复，包括对上游握手拒绝的正确处理，以及嵌套元数据向 OTEL span 的提升。详情见 [PR #42618](https://github.com/BerriAI/litellm/pull/42618)。

---

### **3. 新模型与硬件支持**  
- **新增 Azure 模型**：定价目录中新增 20 个 Azure AI 模型，包括 `gpt-5.x`、`Grok` 及 `azure_ai` 变体 ([PR #42594](https://github.com/BerriAI/litellm/pull/42594))。  
- **Fireworks AI 同步**：新增两个模型支持完整计费追踪 ([PR #42590](https://github.com/BerriAI/litellm/pull/42590))。  
- **Ollama**：非流式补全现已正确从 Ollama 响应中提取 `thinking` 字段 ([PR #41970](https://github.com/BerriAI/litellm/pull/41970))。

---

### **4. 性能与优化**  
- **Rust 成本引擎扩展**：独立的 Rust 成本计算现已支持图像、OCR、视频、批量、自定义、分层及 Gemini 基座定价 ([PR #42620](https://github.com/BerriAI/litellm/pull/42620))，减少 Python 开销，在高吞吐量环境中显著提升性能。  
- **密钥解析优化**：密钥现在通过原生 Rust 后端解析，避免重复进行 Python 层级的配置重解析 ([PR #42619](https://github.com/BerriAI/litellm/pull/42619))，降低单请求延迟。  
- **日志效率提升**：Python 日志现通过共享的 Rust 诊断处理器分发 ([PR #42616](https://github.com/BerriAI/litellm/pull/42616))，实现跨服务一致的脱敏与截断处理。

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 状态 | 修复 PR | 链接 |
|--------|------|-------|--------|------|
| 高 | 当超出预算时，免费（本地部署）模型未强制执行预算限制 | 已关闭 | N/A | [#14004](https://github.com/BerriAI/litellm/issues/14004) |
| 高 | 每团队每模型的速率限制仅按配置 RPM/TPM 的一半生效 | 进行中 | 进行中 | [#34140](https://github.com/BerriAI/litellm/issues/34140) |
| 高 | 使用 `model_name` 别名的流式请求被计为 $0 成本 | 进行中 | 进行中 | [#42161](https://github.com/BerriAI/litellm/issues/42161) |
| 中 | `/metrics` 端点因默认未认证而暴露敏感个人信息（PII） | 进行中 | N/A | [#24530](https://github.com/BerriAI/litellm/issues/24530) |
| 中 | 响应 ID（`resp_<base64>`）导致 S3/LangFuse 日志记录失败 | 进行中 | N/A | [#31055](https://github.com/BerriAI/litellm/issues/31055) |

---

### **6. 对应用开发者的意义**  
- **安全性**：在生产环境部署前，务必使用 `cosign` 验证 Docker 镜像签名。  
- **成本准确性**：避免在流式请求中使用模型别名——它们可能被记录为免费调用。尽可能使用标准模型名称。  
- **预算管理**：确保本地部署模型在配置中显式标记为“无成本”；否则，即使无外部费用，预算检查也可能错误触发。  
- **遥测与审计**：生产环境中启用 `require_auth_for_metrics_endpoint: true`。如需符合欧盟《人工智能法案》要求，建议实现调用后收据中间件（[#29895](https://github.com/BerriAI/litellm/issues/29895)），以支持防篡改审计日志。  
- **部署可靠性**：使用官方镜像并安装 `opentelemetry-instrumentation`（待修复于 [#22762](https://github.com/BerriAI/litellm/issues/22762)），或自行构建包含该组件的镜像。

> ✅ **实用提示**：使用 `config.yaml` 模式验证（需求来自 [#23022](https://github.com/BerriAI/litellm/issues/23022)）——一旦 IDE 自动补全功能可用，建议通过其生成配置文件。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-23**

---

### **1. 今日亮点**  
Unsloth 已发布 **v0.1.814-beta**，全面支持本地推理 **Qwen-Image-2.1**，集成代理技能，推理速度提升至 60 FPS（此前为 30 FPS），并改进了 Linux 安装的可靠性。AMD ROCm 训练稳定性与多 GPU 扩展性持续取得进展，新提交的 PR 推进了扩散模型的 NVFP4 量化及远程代码兼容性。

---

### **2. 发布与破坏性变更**  
- **v0.1.814-beta**：完整支持 Qwen-Image-2.1，含自定义代理技能，聊天/项目管理优化，推理模块提速 2 倍（60 FPS）。  
- **v0.1.813-beta / v0.1.812-beta**：功能集与 v0.1.814-beta 相同；可能属于快速发布周期的一部分，旨在稳定 Qwen-Image-2.1 的集成。  
- **迁移提示**：更新后遇到模型加载问题的用户应检查缓存完整性——部分旧版模型下载可能缺少 `mmproj` 或 MTP 头文件 ([#10599](https://github.com/unslothai/unsloth/issues/10599))。

---

### **3. 新模型与硬件支持**  
- ✅ **Qwen-Image-2.1**：通过 Unsloth Desktop 与 Studio 实现完全本地支持。包含视觉语言推理、图像输入处理及代理技能编排。  
- ✅ **AMD RDNA1 (gfx101x)**：PR #11615 禁用 Triton 缓冲区操作后再加载，使 RX 5700 XT 系列支持训练 ([#11615](https://github.com/unslothai/unsloth/pull/11615))。  
- ✅ **NVFP4 量化**：通过 flashinfer 后端实验性支持 DiT 与视频扩散模型（如 Wan2.2-TI2V-5B）的全模型 NVFP4 量化 ([#10729](https://github.com/unslothai/unsloth/pull/10729))。  
- ✅ **NVIDIA ModelOpt FP8**：现已支持通过 transformers 的 FP8 量化器加载 FP8 检查点（`sarvamai/sarvam-105b-fp8`) ([#11592](https://github.com/unslothai/unsloth/pull/11592))。  
- ⚠️ **Intel XPU / Vulkan**：训练仍失败，因 `adamw_8bit` 优化器崩溃及张量卸载缺陷 ([#10021](https://github.com/unslothai/unsloth/issues/10021), [#9524](https://github.com/unslothai/unsloth/issues/9524))。

---

### **4. 性能与优化**  
- 🔥 **推理速度翻倍**：得益于优化的推理块调度，Qwen-Image-2.1 现在可实现 **60 FPS**，相较之前的 30 FPS。  
- 🚀 **VAE 解码内核编译**：Studio 现已为 DiT 系列编译 VAE 解码内核，基准测试中每帧延迟降低最高达 15% ([#10889](https://github.com/unslothai/unsloth/pull/10889))。  
- 💡 **FlashInfer NVFP4 后端**：引入逐层与全模型 NVFP4 支持，适用于图像/视频模型，在不损失质量的前提下降低内存占用 ([#10730](https://github.com/unslothai/unsloth/pull/10730))。  
- 📦 **压缩的 INT4/INT8 检查点**：现支持直接加载至 `bitsandbytes` 4-bit 格式，无需预先转换 ([#11537](https://github.com/unslothai/unsloth/pull/11537))。

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 状态 | 链接 |
|--------|------|--------|------|
| 🔴 高 | 最新 `llama.cpp` 构建中 AMD GPU 检测失效 | 已关闭 | [Issue #7485](https://github.com/unslothai/unsloth/issues/7485) |
| 🔴 高 | AMD ROCm QLoRA 训练在 RX 7900 XTX 上触发 VM 故障/重启 | 开放 | [Issue #11498](https://github.com/unslothai/unsloth/issues/11498) |
| 🔴 高 | 尽管处于 beta 状态，Qwen-Image-2.1 仍需手动步骤才能运行 | 开放 | [Issue #11567](https://github.com/unslothai/unsloth/issues/11567) |
| 🟡 中等 | Firefox/Brave 浏览器中无法复制 API 密钥 | 已关闭 | [Issue #11387](https://github.com/unslothai/unsloth/issues/11387) |
| 🟡 中等 | AMD GPU 上图像生成失败（重复报告） | 开放 | [Issue #9897](https://github.com/unslothai/unsloth/issues/9897) |
| 🟡 中等 | 在受限制地区（如中国）Hugging Face 搜索失败 | 开放 | [Issue #11529](https://github.com/unslothai/unsloth/issues/11529) |

> *注：多个回归问题与 AMD ROCm 栈不稳定有关——修复工作正在积极进行中。*

---

### **6. 对应用开发者的意义**  
- **构建具备视觉能力与技能的 AI 代理**：利用 Qwen-Image-2.1 的原生代理技能与项目管理工具，实现端到端的视觉驱动工作流。  
- **谨慎选择 AMD GPU**：尽管 RDNA1 已可用，但请避免在 RX 7900 XTX 上进行 QLoRA 训练，直至 #11498 修复；建议使用专用 ROCm 支持显卡。  
- **为扩散类应用启用 NVFP4**：在 Studio 中开启全模型 NVFP4 量化，以实现更低延迟的图像/视频生成——非常适合实时 TTS/视觉代理场景。  
- **避开不稳定的后端**：不要在训练中使用 Intel XPU 或 Vulkan —— 可能因优化器与卸载问题导致崩溃。  
- **准备动态模型加载**：随着新 `/responses` API 选择功能与多模型服务启用 ([#11591](https://github.com/unslothai/unsloth/pull/11591))，应设计可跨多模型动态路由请求的应用架构。

> ✅ **实用技巧**：在多 GPU 环境下运行 MoE 模型时，请显式使用 `--tensor-split` 参数——当前 Studio 会静默丢弃这些标志 ([#11330](https://github.com/unslothai/unsloth/issues/11330))。

---  
*来源: [unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*