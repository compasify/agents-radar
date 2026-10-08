# AI 基础设施日报 2026-10-08

> 生成时间: 2026-10-08 02:14 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

### **跨项目AI基础设施生态报告 – 2026-10-08**

---

#### **1. 生态概览**  
2026年第四季度的AI推理与服务格局由**硬件专用化**、**推测解码成熟度提升**，以及**高性能引擎**与**开发者友好网关**之间日益扩大的差距所定义。各项目正聚焦于优化下一代架构（如NVIDIA Blackwell（SM120）、AMD MI355X和Apple M系列芯片），同时应对影响生产就绪性的深层稳定性退化问题。决策模型（如*Clef*、*Kimi-K3 MTP*）和代理专用工作流的兴起，标志着从通用LLM服务向结构化、多步骤推理流水线的转变。

---

#### **2. 活动对比**

| 项目       | 开放问题 | 近24小时PR数 | 发布状态        |
|---------------|-------------|----------------|------------------------|
| **vLLM**      | 112         | 7              | 稳定版：v0.31.0；无新发布 |
| **SGLang**    | 98          | 12             | 待发布 v0.5.21；无正式变更日志 |
| **llama.cpp** | 105         | 6              | 无新发布；b11481活跃 |
| **Ollama**    | 127         | 5              | **v0.40.1 已发布**（关键修复） |
| **LiteLLM**   | 79          | 9              | v1.106.0-dev.1 + cosign签名镜像 |
| **Unsloth**   | 93          | 10             | v0.1.904-beta（决策模型上线） |

> 🔍 *洞察：* Ollama在**发布速度**上领先，实现稳定补丁更新；而SGLang和Unsloth在功能创新方面展现出强劲的**开发势头**。vLLM虽最稳定，但发布频率最低。

---

#### **3. 模型支持竞赛**

| 新模型 / 架构       | 支持项目 | 关键差异化 |
|-------------------------------|--------------------------|--------------------|
| **Kimi-K3 (MLA/MTP)**         | vLLM, SGLang, Unsloth     | vLLM启用`VLLM_CAKE_ROUTES=1`实现更快路径；SGLang通过分片KV缓存添加DCP支持 |
| **Qwen4Exp / Qwen3.8-2.4T-A95B** | vLLM, SGLang            | vLLM通过共享PLE表优化CPU卸载；SGLang新增混合SWA内存安全性 |
| **Coher2 Vision (多模态)** | **llama.cpp** ✅           | 首个通过`mtmd`支持完整视觉编码器的项目 |
| **GLM5-Next MTP**             | **llama.cpp** ✅           | 唯一具备原生图级别MTP支持的项目 |
| **Databricks ai_decide**      | **LiteLLM** ✅             | 首个原生暴露`/v1/decisions`提供方路由的网关 |
| **决策模型（Jev风格）** | **Unsloth** ✅             | 上线端到端训练、导出与部署流水线——能力无出其右 |

> 🏆 **赢家：*Unsloth* 在**模型专业化**（决策代理）方面领先；*llama.cpp* 在**多模态**与**底层架构支持**方面领先；*LiteLLM* 在**提供方多样性**方面占据主导。

---

#### **4. 性能前沿**

| 优化重点         | 领先项目                          | 关键进展 |
|-----------------------------|-------------------------------------------|------------------|
| **KV缓存与内存管理** | vLLM, SGLang, Unsloth                  | vLLM修复GDN+MTP数据损坏；SGLang避免冗余终端解码；Unsloth自动调整MoE缓存大小 |
| **推测解码**    | vLLM, SGLang, llama.cpp                 | vLLM在GLM-5.3-Flash上遭遇0%接受率；SGLang引入基于成本自适应步长机制 |
| **量化与内核**  | vLLM, llama.cpp, Unsloth                | vLLM通过FP8 GEMM调优实现2.5倍加速；llama.cpp优化Q6_K反量化；Unsloth使用`llama-server`处理嵌入 |
| **批处理与吞吐**   | vLLM, LiteLLM, SGLang                   | vLLM通过减少草稿词表实现+29%解码吞吐；LiteLLM提升流式输出保真度 |
| **分布式服务**     | SGLang, LiteLLM                         | SGLang推进多节点调度；LiteLLM增强重试逻辑与可观测性 |

> 🚀 **热点：*SM120上的FP8 GEMM调优*（vLLM）和*内存压力下的MoE专家缓存*（Unsloth、vLLM）已成为关键性能差异点。

---

#### **5. 层级定位**

| 项目       | 主要层级                     | 角色概述 |
|---------------|------------------------------------|--------------|
| **vLLM**      | **推理引擎**               | 高吞吐、内核优化的服务；面向数据中心规模部署 |
| **SGLang**    | **推理引擎 + 编排器**| 混合调度器，支持推测控制、扩散支持及多节点协同 |
| **llama.cpp** | **本地运行时 / 嵌入式引擎**| CPU/GPU混合推理；适用于边缘、移动端及本地部署 |
| **Ollama**    | **网关 / 开发者体验** | 统一CLI/API层；抽象引擎复杂性以加速开发者接入 |
| **LiteLLM**   | **API网关 / 多提供方路由器** | 跨提供方的集中路由、安全、计费与可观测性 |
| **Unsloth**   | **微调 + 代理训练平台** | 将LLM转化为决策引擎的端到端工作流；连接训练与服务 |

> 🧩 **战略洞察：** 生态系统正在分化——**工程师**使用vLLM/SGLang追求性能；**开发者**依赖Ollama/LiteLLM获取便捷性；**研究者**则依靠Unsloth构建代理。

---

#### **6. 趋势信号**

- **以代理为中心的设计**：决策模型（*Clef*、*Kimi-K3 MTP*）与Unsloth的`DecisionModelTrainer`等工具表明，**结构化推理**正取代原始生成，成为主要应用模式。
- **硬件专用化已成为必然要求**：项目正根据目标硬件（Blackwell、ROCm、Apple Silicon、NPU）分化，开发者必须依据基础设施选择引擎。
- **安全加固成为标准**：cosign签名（LiteLLM）、`np.load`提示（Unsloth）、输入验证（llama.cpp）反映出对运行时完整性的日益关注。
- **稳定性优先于功能**：尽管创新迅速，但**回归问题占主导地位**——尤其在推测解码和内存管理方面——表明生产就绪仍是瓶颈。
- **可观测性与计费集成**：LiteLLM与SGLang正在嵌入实时指标、重试机制与用量追踪——这对企业采用至关重要。

> ✅ **开发者可操作建议：**  
> - 使用**vLLM**进行高吞吐、GPU优化推理（若使用Qwen3.8 NVFP4 + 前缀缓存，请避免v0.30/v0.31）。  
> - 选择**Unsloth**构建具有决策逻辑的AI代理。  
> - 使用**LiteLLM**实现多提供方路由，并保留审计轨迹与计费功能。  
> - 避免使用不稳定的版本（如`b11481`、`v0.40.0–0.40.1`），直到回归问题被修复。  
> - 始终验证镜像签名（LiteLLM）并测试长上下文行为（llama.cpp、Ollama）。

---

**最终注记：** AI基础设施栈正在成熟——但尚未稳定。成功将属于那些优先考虑**正确性**、**安全性**与**互操作性**，而非单纯追求功能迭代速度的团队。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

### **vLLM Digest — 2026-10-08**

#### **1. 今日亮点**  
vLLM 项目持续聚焦于 Blackwell（SM120）和 ROCm 平台上的下一代推理稳定性与性能，针对混合 GDN + MTP 配置中的推测解码正确性及 KV 缓存损坏问题进行了关键修复。重要 PR 修复了 FlashInfer 集成中的长期问题、MoE 内核对齐缺陷以及 CPU 内存 cgroup 处理问题，确保在多种部署拓扑下的鲁棒性。

#### **2. 发布与破坏性变更**  
*无*。过去 24 小时内未发布新版本。最新稳定版仍为 **v0.31.0**，当前工作重点集中在 nightly 构建与回归问题缓解。

#### **3. 新模型与硬件支持**  
- **Kimi-K3**：通过 `VLLM_CAKE_ROUTES`（PR #60470）启用可选 Cake 内核支持，可在 NVIDIA GPU 上加速 MLA 与 KDA 解码路径。  
- **Qwen4Exp**：共置副本间共享 PLE 表，提升 CPU offloaded 推理效率（PR #60390）。  
- **ROCm (gfx1201/gfx950)**：针对 AMD MI355X 上的 DeepSeek-V4.1 与 Qwen3.8-2.4T-A95B 持续优化（PR #57773, #57149），包括 DBO 预填充重叠与 AITER MLA 填充修复（PR #59966）。  
- **Intel GPU / CPU**：通过尊重 cgroup 空闲空间实现增强的 NUMA-aware 内存管理（PR #60520）。

#### **4. 性能与优化**  
- **FP8 GEMM 调优**：针对 SM120 与 H20 的 Qwen3.5 GDN block-FP8 内核调优，相较通用内核实现 **1.67x–2.50x 加速**（PR #54182）。  
- **MoE 效率提升**：降低共享 LM-head MTP drafters 的草稿词汇量，带来 **+25–29% 解码吞吐量提升**（PR #58578）。  
- **内核对齐修复**：将 DeepGEMM 连续布局对齐从 128 恢复至 64（SM12x 平台），挽回自 #56876 以来约 15% 的 MoE 解码性能损失（PR #58624）。  
- **Humming 优化**：当未应用量化/激活时跳过冗余的 MoE 输入拷贝（PR #59340）。

#### **5. 稳定性与回归问题**  
- **严重缺陷**：**DFlash2/DSpark + 前缀缓存** 在 v0.30/v0.31 版本中导致 **Qwen3.8-27B NVFP4（压缩张量）** 缓存命中后输出被污染（Issue #60174）。*修复待发布；仅在 SM120 上可复现*。  
- **推测解码失败**：使用原生 FLASHINFER_MLA_SPARSE_SM120 后端时，**GLM-5.3-Flash** 的接受率降至 **0%**（Issue #59724）。  
- **解码吞吐下降**：在 H100 上，**Qwen3.6-35B-A3B-FP8** 从 v0.26.0 到 v0.29.0 出现 **约 3.3 倍性能下降**（Issue #57680）。  
- **静默 CUDA IMA**：在 RTX 3090 上，混合 GDN + MTP k=3 + 异步调度时出现静默退出（Issue #53726）；尽管此前已修复，问题仍存在。  
- **FlashInfer 自动调优卡死**：因 `trtllm_gemm.cubin` 中缺少 PTX 导致在 GB300 上永久卡住自动调优（Issue #58031）。  

> ✅ *已有修复 PR：*  
> - MRV2 中推测解码状态恢复 (#59600)  
> - MTP 下混合 GDN 前缀缓存命中恢复 (#52244)  
> - RecoverSSM 状态索引在块边界处修复 (#59962)

#### **6. 对应用开发者的影响**  
- 若使用 **Qwen3.8-27B NVFP4 + DFlash2/DSpark + 前缀缓存**，请**避免 v0.30.0/v0.31.0**——预期输出将被污染。建议回退至 v0.29.0 或等待补丁。  
- **启用 `VLLM_CAKE_ROUTES=1`** 可在适用场景下解锁 Kimi-K3 更快的解码路径。  
- **在 SM120 与 ROCm 上密切监控推测解码行为**——当前 nightly 版本中接受率可能严重下降。  
- **启用 `VLLM_BATCH_INVARIANT=1`** 以在 ROCm 与多 GPU 配置中获得更一致的 batch-invariant 推理表现。  
- **对代理开发者提示**：慎用 `tool_choice='none'`——其会静默删除工具调用格式内容（Issue #55080）。应改用显式的 `tool_calls`。  

👉 [查看问题](https://github.com/vllm-project/vllm/issues) | [审查 PR](https://github.com/vllm-project/vllm/pulls)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 简报 – 2026-10-08**

---

### **1. 今日重点**  
SGLang 项目持续深化对高级推测解码和多节点推理的支持，关键 PR 已合并至调度器（如 `avoid redundant terminal decodes`）及扩散管道（`deduplicate FLUX RoPE application`）。当前重点仍在于稳定高性能后端（如 FlashInfer 和 HiCache），特别是针对 B200/B300 等新兴硬件。多个工作流中仍存在严重的 CI 稳定性问题，包括不稳定的测试和基础设施故障。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未发布新版本。*  
- **待定**：预计 v0.5.21 版本将修复 `--enable-unified-memory` 导致的崩溃问题（#42653）以及 MTP 草稿 KV 池大小不当的问题（#42510），但尚未发布正式变更日志。

---

### **3. 新模型与硬件支持**  
- ✅ **Apple Silicon 服务架构重设计** ([#32321](https://github.com/sgl-project/sglang/issues/32321))：正在进行重大重构，以启用由 Torch 管理的 SRT 路径并导出 MLX 模型区域——这对原生 Apple Silicon 性能至关重要。  
- ✅ **Ascend NPU 支持扩展**：  
  - 通过分片 MLA KV 缓存实现 Kimi-K3 的完整 DCP（解码上下文并行）支持 ([#40825](https://github.com/sgl-project/sglang/pull/40825))  
  - 修复 HiCache 中打包 MTP KV 传输的问题 ([#43031](https://github.com/sgl-project/sglang/pull/43031))  
- ✅ **新模型集成**：在 `/v1/systemone` 上新增对 Clef 与 Clef-Flash 决策模型的支持 ([#42721](https://github.com/sgl-project/sglang/pull/42721))

---

### **4. 性能与优化**  
- 🔧 **推测解码增强**：  
  - 基于吞吐量的自适应推测步数：引入成本引导策略，根据吞吐量动态调整推测步数 ([#28045](https://github.com/sgl-project/sglang/pull/28045))  
  - FDFO 扩散模型的重叠调度：在去噪步骤中实现 CPU/GPU 重叠，减少空闲时间 ([#40756](https://github.com/sgl-project/sglang/pull/40756))  
- 📈 **内核级优化**：  
  - 平台间去重的 FLUX 位置嵌入逻辑 ([#43002](https://github.com/sgl-project/sglang/pull/43002))  
  - 移除 gfx95 AMD GPU 上冗余的 FP8 scale 重新布局复制 ([#41030](https://github.com/sgl-project/sglang/pull/41030))  
- ⚙️ **内存与调度改进**：  
  - 通过输出预算预留避免冗余终端解码 ([#42720](https://github.com/sgl-project/sglang/pull/42720))  
  - 在统一内存下优化混合 SWA 模型的 token slot 分配 ([#42653](https://github.com/sgl-project/sglang/issues/42653))

---

### **5. 稳定性与回归问题**  
⚠️ **高严重性**：  
- **混合 SWA + Radix 缓存准入活锁** ([#41579](https://github.com/sgl-project/sglang/issues/41579))：由于 SWA 前缀锁固定已完成区块，调度器可能永久阻塞请求——影响 MiMo-V2.6-Flash 用户。  
- **DeepSeek-V4 在 SM120：C4 索引器行块规划器被禁用** ([#42146](https://github.com/sgl-project/sglang/issues/42146))：默认 `SGLANG_FP8_PAGED_MQA_LOGITS_TORCH=True` 会禁用优化，导致 128k 上下文时内存膨胀 3.3–3.8 GiB。  
- **EAGLE/MTP 推测解码启动时 OOM** ([#42510](https://github.com/sgl-project/sglang/issues/42510))：冗余的 `embed_tokens`/`lm_head` 复制导致 KV 池过小 → 大模型启动时出现内存溢出。

⚠️ **中等严重性**：  
- **GLM-5.3-Flash 在 B200/B300 上的 NVFP4 崩溃** ([#41939](https://github.com/sgl-project/sglang/issues/41939))：TP4 时推理循环无最终答案。  
- **FlashInfer 自动调优缓存每次重启均被丢弃** ([#40320](https://github.com/sgl-project/sglang/issues/40320))：每排名目 MoE 形状不匹配触发全量重调优——显著增加冷启动延迟。

🛠️ **正在修复中**：  
- 正在审查解决 GLM-5.3-Flash 崩溃和 MoE 权重加载问题的 PR ([#36711](https://github.com/sgl-project/sglang/issues/36711), [#36653](https://github.com/sgl-project/sglang/issues/36653))。  
- CI 基础设施改进工作持续推进 ([#42752](https://github.com/sgl-project/sglang/issues/42752))。

---

### **6. 对应用开发者的影响**  
- **在 SM120 上避免使用 `SGLANG_FP8_PAGED_MQA_LOGITS_TORCH=True`**，除非用于基准测试——该设置会禁用关键的内存优化。  
- **使用 `--enable-unified-memory` 时需谨慎**，尤其搭配混合 SWA 模型；不当的 slot 分配可能导致内存不足错误。  
- **监控 DeepSeek-V4 与 GLM-5.3-Flash 等模型的推测解码行为**——已知存在准确率与稳定性方面的回归。  
- **利用最新 PR** 提升调度效率（如避免冗余解码）和扩散性能（如 FDFO 重叠）。  
- **预期频繁的 CI 不稳定**——合并涉及 FlashInfer 或 MoE 内核的 PR 前，请务必本地测试。

> 💡 *技巧提示*：使用 `/update_weights_from_disk` 时需谨慎——目前参数如 `is_async` 与 `keep_pause` 无实际效果 ([#42544](https://github.com/sgl-project/sglang/issues/42544))。请等待修复或自行实现临时方案。

---  
*简报生成自 [sgl-project/sglang](https://github.com/sgl-project/sglang) — 2026年10月8日*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 消息简报 – 2026-10-08**

---

### **1. 今日亮点**  
最新更新聚焦于扩展多模态支持，新增 Coher2 Vision 和 GLM5-Next MTP（多标记预测）功能，同时在 GPU 上对 MoE 专家缓存进行了关键性能优化，并进一步提升了 Metal/MetalFX 内核的效率。`mtmd` 中新增安全加固机制，防止音频内存耗尽攻击；持续工作也在加速 Q4_K/Q6_K 反量化处理，并改善各后端的 Flash Attention 稳定性。

---

### **2. 发布与破坏性变更**  
今日未标记任何破坏性变更或新版本发布。但 **b11481** 版本通过 `mtmd` 引入了完整的 Coher2 Vision 模型支持，要求使用具备正确视觉专用张量映射的更新版 GGUF 模型。若使用 `--vision-model` 标志，请确保兼容性。

- [PR #30062](https://github.com/ggml-org/llama.cpp/pull/30062) – 添加 Coher2 Vision 支持
- [PR #29928](https://github.com/ggml-org/llama.cpp/pull/29928) – 添加 GLM5-Next MTP 图计算支持

---

### **3. 新模型与硬件支持**  
- ✅ **Cohere2 Vision**: 已完整集成至 `mtmd` 流水线，新增视觉编码器处理逻辑。
- ✅ **GLM5-Next MTP**: 增加多标记预测头作为 `graph_mtp`，支持该架构的更快推测解码。
- ✅ **Apple Metal**: 扩展少数行 MMA 矩阵乘法支持 BF16、Q1_0、Q2_0、MXFP4、Q2_K、Q3_K、TQ2_0 以及 IQ 量化类型。
- ✅ **MUSA (MediaTek)**: 启用 tile lightning 索引内核，提升卸载性能。
- ✅ **Hexagon (Qualcomm)**: 提升 Q6_K 反量化速度，改进 GELU 精度，并新增分块 GET_ROWS 支持。

> 📌 *注意：* 这些均为运行时增强——模型必须使用兼容的 GGUF 头部进行转换。

---

### **4. 性能与优化**  
- **MoE 专家缓存**：PR #29887 在主机内存中保留的 MoE 专家引入了 GPU 本地缓存，使高专家数量模型（如 Qwen3.8-Flash-Next）的 CPU-GPU 数据传输减少高达 40%。
- **Metal 优化**：通用少行 MMA 现在支持多种类型的 16 位权重反量化器（包括 Q3_K、Q4_K），在 Apple Silicon 上将混合精度推理吞吐量提升约 18–25%。
- **CUDA/HIP**：
  - PR #29609 修复了 MoE 选择中的 NaN 传播问题，避免推测解码过程中出现无声错误。
  - PR #29050 为 CDNA2（ROCm）添加 MFMA 路径，解锁 DeepSeek-V3.2/V4 索引中的矩阵核心利用率。
- **Hexagon**：Q6_K 反量化速度提升约 2.1 倍；通过 HVX tanh 近似改进 GELU 精度。

---

### **5. 稳定性与回归问题**  
今日报告的高严重性问题：

| 问题 | 严重性 | 状态 | 修复 PR |
|------|----------|--------|--------|
| [#29811](https://github.com/ggml-org/llama.cpp/issues/29811): Qwen 3.8 Flash + MTP 启动时评估崩溃 | 高 | 开放 | ❌ 尚无修复 |
| [#30091](https://github.com/ggml-org/llama.cpp/issues/30091): `llama-server` 因长对话中“非法分配”而崩溃 | 高 | 开放 | ❌ 尚无修复 |
| [#30078](https://github.com/ggml-org/llama.cpp/issues/30078): Qwen4Exp 中随机工具调用发射 + 静默丢失 | 中 | 开放 | ❌ 尚无修复 |
| [#28734](https://github.com/ggml-org/llama.cpp/issues/28734): CUDA 解码随上下文增长呈线性变慢 | 中 | 开放 | ❌ 尚无修复 |

> 🔥 重要提示：多名用户报告在 Qwen3.5-hybrid 模型中，超过 13 万上下文后出现 **静默 EOS** —— 可能与循环状态深度 × 层数衰减有关。

---

### **6. 对应用开发者的影响**  
- **谨慎使用 MTP**：尽管已支持 GLM5-Next MTP，但请确保您的推测草稿流水线使用一致的头部结构，避免混用布局（例如 Gemma DSpark 与 Qwen DFlash）。
- **安全优先输入处理**：随着 `mtmd` 音频分块修复（PR #30130），始终验证媒体输入长度——恶意文件仍可能在未设限的情况下触发拒绝服务。
- **GPU MoE 缓存已就绪**：对于大型 MoE 模型（如 Qwen3.8-Flash-Next），启用 `--moe-cache-gpu` 并监控内存使用——可降低延迟并避免主机瓶颈。
- **避免不稳定的构建版本**：在解决 #29811 前，若使用 Qwen3.8-Flash-Next 搭配 MTP 或长上下文推理，切勿在生产环境部署 `b11481` 或 `b11471`。
- **考虑后端特定调优**：合理使用 `--n-gpu-layers`——Metal 与 MUSA 从更高的层拆分中受益；Vulkan 可能需要启用 Resizable BAR。

> 💡 实用建议：通过监控 `--log-level=4` 输出，可提前发现推测流程中 MoE 行为异常或标记损坏迹象。

---  
*来源：[github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama 摘要 – 2026-10-08**

---

### **1. 今日重点**  
最新版本 **v0.40.1** 修复了 MLX 和 Windows 符号链接处理中的关键稳定性问题，同时改进了云 API 代理功能，以支持计费和使用量追踪。近期用户报告 `clef-flash`、`qwen3.6:35b-mlx` 及通过代理拉取模型时出现的回归问题显著增多，反映出最近引擎迁移仍存在挑战——尤其在 macOS M 系列芯片和 Windows 系统上。

---

### **2. 版本发布与破坏性变更**  
- **v0.40.1（已发布）**：  
  - 修复因线程组限制溢出导致的 MLX 运行时崩溃（`mlx: Maximum threads per threadgroup is 896 but requested 1024`）——[Issue #18846](https://github.com/ollama/ollama/issues/18846)，[PR #18844](https://github.com/ollama/ollama/pull/18844)  
  - 修复自动更新后 Windows 符号链接损坏问题，避免模型无法使用——[Issue #18847](https://github.com/ollama/ollama/issues/18847)，[PR #18852](https://github.com/ollama/ollama/pull/18852)  
  - 通过服务端中间件启用云使用量与余额 API 代理功能——[PR #18829](https://github.com/ollama/ollama/pull/18829)  
  - 移除引导流程中的 CLI 账户步骤；直接启动器访问现为默认行为——[PR #18826](https://github.com/ollama/ollama/pull/18826)

> ⚠️ **迁移提示**：从 0.35.x 升级的用户在 HTTP 代理后可能会遇到模型拉取失败或 Mac 上的 MLX 崩溃问题——请参见下方回归报告。

---

### **3. 新模型与硬件支持**  
- **新模型请求**：社区推动将 **MIMO v2.5（1M 上下文窗口）** 上线 Ollama Cloud —— MIT 许可，可在 [Hugging Face](https://huggingface.co/XiaomiMiMo/MiMo-V2.5) 获取——[Issue #15887](https://github.com/ollama/ollama/issues/15887)  
- **MLX 后端增强**：  
  - 正在测试混合精度量化（4-bit + 每层 8-bit 覆盖）支持——[Issue #18789](https://github.com/ollama/ollama/issues/18789)  
  - `qwen3.6:35b-mlx` 与 `clef-flash` 现已在 Apple Silicon（M 系列）上通过 MLX 后端支持，但自 0.40.0 版本以来稳定性依然脆弱

---

### **4. 性能与优化**  
- **MLX 推理速度**：量化决策模型（如 `mxfp8`）在 M5 Pro 上预填充阶段比 bf16 更慢——可能由于内核开销所致——[Issue #18833](https://github.com/ollama/ollama/issues/18833)  
- **连接复用**：PR #18397 提议复用 `llama-server` 的 HTTP 连接用于嵌入计算，在高负载下减少延迟和连接抖动——[PR #18397](https://github.com/ollama/ollama/pull/18397)  
- **上下文窗口调优**：建议根据模型实际上下文长度动态设置 `CLAUDE_CODE_MAX_CONTEXT_TOKENS`（而非默认的 180k）——[PR #18855](https://github.com/ollama/ollama/pull/18855)

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 描述 | 修复状态 |
|---------|-------|-------------|------------|
| 🔴 高 | [Issue #18846](https://github.com/ollama/ollama/issues/18846) | 升级至 0.40.0 后，M 系列 Mac 上的 MLX 运行器因“最大线程数”错误崩溃 | ✅ 已在 v0.40.1 中修复 |
| 🔴 高 | [Issue #18856](https://github.com/ollama/ollama/issues/18856) | `qwen3.6:35b-mlx` 在 0.40.x 版本中于 MLX 后端崩溃——0.35.0 版本运行正常 | ❌ 尚无修复 |
| 🔴 高 | [Issue #18840](https://github.com/ollama/ollama/issues/18840) | `/api/chat` 返回 HTTP 500 “unexpected end of JSON input” 错误，使用 `qwen3.8:27b` 时 | 🟡 PR #18849 中部分修复 |
| 🔴 高 | [Issue #18847](https://github.com/ollama/ollama/issues/18847) | 迁移后 Windows 符号链接失效 → 模型变得不可信 | ✅ 已在 PR #18852 中修复 |
| 🟡 中等 | [Issue #18769](https://github.com/ollama/ollama/issues/18769) | `clef-flash` 在 `/v1/systemone` 上运行时，无论 CPU/GPU 均报错“non-finite logit” | ❌ 尚无修复 |
| 🟡 中等 | [Issue #18825](https://github.com/ollama/ollama/issues/18825) | Linux 上无 MLX 支持时，`embeddinggemma-2:740m` 无法拉取 | ⚠️ 需在文档中明确说明 MLX 依赖 |

---

### **6. 对应用开发者的启示**  
- 若在 Apple Silicon 上运行 `qwen3.6:35b-mlx`、`clef-flash` 或其他 MLX 优化模型，请避免使用 v0.40.0–0.40.1 版本，应降级至 **0.35.1**，直至回归问题解决。  
- **显式处理流式错误**：`unexpected end of JSON input` 问题（PR #18849）表明流结束机制不可靠——请在客户端验证响应完整性。  
- **谨慎使用 `/v1/systemone`**：如 `clef-flash` 等决策模型在新版中表现不稳定——上线前务必充分测试。  
- **模型命名至关重要**：未在名称中包含“12b”的 GGUF 模型可能被误判为小模型变体——例如 Gemma 4 12B 会使用错误渲染器——[Issue #18824](https://github.com/ollama/ollama/issues/18824)。  
- **云集成方案**：建议迁移到使用显式标签的 `hf.co` 或 `ollama.com` 模型引用；避免使用旧版 `dd20bb89...r2.cloudflarestorage.com` 重定向——[Issue #18831](https://github.com/ollama/ollama/issues/18831)。

> 💡 **实用技巧**：在防火墙后拉取模型时，使用 `ollama serve --log-level debug` 可追踪代理与清单解析问题。

---  
*数据来源：github.com/ollama/ollama | 更新时间：2026-10-08*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 消息简报 – 2026-10-08**

---

### **1. 今日亮点**  
LiteLLM 项目持续快速演进，重点聚焦于**安全加固**、**Rust 迁移进展**以及**多租户部署的可观测性增强**。关键进展包括：所有版本（v1.100.5–v1.106.0-dev.1）均启用 **cosign 签名的 Docker 镜像**，一项重大 PR 支持将 **Databricks ai_decide** 作为 `/v1/decisions` 提供方，以及对**流式行为**、**JWT 验证**和**实时音频工作流中的响应处理**的关键修复。

---

### **2. 发布与破坏性变更**  
- **所有近期发布版本（v1.100.5 至 v1.106.0-dev.1）** 均使用 [cosign](https://github.com/BerriAI/litellm/commit/0112e53) 以统一密钥进行签名——请在部署前务必验证镜像完整性。  
- **v1.105.0-rc.2** 包含新功能（如 `/v1/decisions` 提供方路由和增强重试逻辑）的早期稳定支持；适用于 GA 前的测试。  
- **迁移提示**：正在进行的 Rust 迁移（详见 [#31263](https://github.com/BerriAI/litellm/issues/31263)）正朝着亚毫秒级开销迈进。早期测试版可通过 [Google 表单](https://docs.google.com/forms/d/e/1FAIpQLSecWdOjkzjEson2UiZpD...) 获取。

---

### **3. 新模型与硬件支持**  
- **新增提供方**：通过 OAuth 令牌交换支持 `microsoft_365_copilot` ([PR #45158](https://github.com/BerriAI/litellm/pull/45158))，实现与 Microsoft Graph Copilot Chat API 的安全集成。  
- **GitHub Copilot 按用户 OAuth**：`github_copilot` 模型现支持**按用户的 GitHub OAuth 凭据** ([PR #45241](https://github.com/BerriAI/litellm/pull/45241))，提升隐私保护与访问控制能力。  
- **Databricks ai_decide**：已作为原生 `/v1/decisions` 提供方及自动路由决策器加入 ([PR #45200](https://github.com/BerriAI/litellm/pull/45200))。

---

### **4. 性能与优化**  
- **Rust 迁移进展**：核心代理引擎正在用 Rust 重写 ([#31263](https://github.com/BerriAI/litellm/issues/31263))。初步基准测试显示具备实现**亚毫秒级开销**的潜力——对高吞吐量智能体系统至关重要。  
- **高效上下文缓存**：Vertex AI 上下文缓存存储现按每 token 小时明确计费 ([PR #45019](https://github.com/BerriAI/litellm/pull/45019))，与 Google Cloud 计费方式对齐。  
- **流式效率优化**：针对流式输出中工具调用完成原因（`response_format`）及输入音频桥接的修复，减少了不必要的重试并提升了准确性 ([PR #45147](https://github.com/BerriAI/litellm/pull/45147), [#45224](https://github.com/BerriAI/litellm/pull/45224))。

---

### **5. 稳定性与回归问题**  
- **严重**：由于 OpenRouter 兼容性缺口，`gpt-5` 的思考输出在 OpenWebUI 中缺失 ([#13419](https://github.com/BerriAI/litellm/issues/13419)，51 条评论)。尚未修复——影响使用结构化推理的开发者。  
- **高严重性**：虚拟密钥更新失败，提示“仅企业可用”错误，尽管未使用企业功能 ([#15230](https://github.com/BerriAI/litellm/issues/15230)，39 条评论)。修复 PR 待合并。  
- **流式缺陷**：部分通用数据块因字段校验不完整导致 `KeyError` ([#43487](https://github.com/BerriAI/litellm/issues/43487)，7 条评论)。  
- **实时音频**：无防护机制的语音会话中，重复注入 `response.create` 导致 `conversation_already_has_active_response` 错误 ([#31726](https://github.com/BerriAI/litellm/issues/31726)，3 条评论)。  
- **已合并修复**：  
  - 完成调用中正确处理 `Retry-After` 头信息 ([#45247](https://github.com/BerriAI/litellm/pull/45247))  
  - 增加 JWT 团队 ID 验证 ([#44182](https://github.com/BerriAI/litellm/pull/44182))

---

### **6. 对应用开发者的意义**  
- **安全优先**：请对所有 LiteLLM Docker 镜像使用 `cosign verify`——签名现已为所有版本的强制要求。  
- **多租户管控**：利用新推出的**基于团队的令牌预算** ([#44555](https://github.com/BerriAI/litellm/issues/44555)) 和按用户 OAuth，实现细粒度模型访问控制。  
- **规避陷阱**：在 [#13419](https://github.com/BerriAI/litellm/issues/13419) 修复前，请避免使用 `gpt-5` + OpenWebUI；必要时可改用其他端点或禁用思考输出。  
- **未来就绪**：开始评估**基于 Rust 的 LiteLLM**（通过早期访问）以构建低延迟推理管道。高频率智能体负载下预期性能显著提升。  
- **可观测性升级**：新增 `/lens/feedback` API ([#45171](https://github.com/BerriAI/litellm/pull/45171)) 和按状态码失败追踪 ([#45244](https://github.com/BerriAI/litellm/pull/45244))，支持更深入的调试与用户体验洞察。

---  
*本简报由 GitHub 活动生成：[BerriAI/litellm](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

### **Unsloth Digest — 2026-10-08**

#### **1. 今日亮点**  
Unsloth v0.1.904-beta 引入了 **决策模型训练** 功能，使用户能够将任意文本或视觉大模型转化为高精度（最高达80%）的 Jev 风格决策引擎——完整支持端到端的训练、测试、导出与部署工作流。本次发布还带来了原生 ComfyUI 支持、改进的扩散管道以及优化后的桌面浏览器体验。

新提交（PR）聚焦于关键的 UI/UX 改进：修复下拉菜单发光性能问题，增强视频附件处理能力，提升 `np.load` 与 `whisper-server` 的安全性，并优化在内存压力下的 MoE 专家缓存机制。

---

#### **2. 发布与破坏性变更**  
- **v0.1.904-beta**：  
  - ✅ **训练自定义决策模型**：通过提示工程与微调，将任意 LLM 转化为结构化决策代理。准确率从约 30% 提升至 80%。  
  - 🖼️ 原生 ComfyUI 集成，支持可视化工作流编排。  
  - 🔧 桌面浏览器增强：支持内联视频附件播放、下载追踪功能，以及 macOS 右键下载。  
  - 🔐 安全加固：`np.load(..., allow_pickle=True)` 现在执行前会进行提示；`whisper-server` 以每次启动随机路径提供服务。  
  - [GitHub 发布页](https://github.com/unslothai/unsloth/releases/tag/v0.1.904-beta)

> *注：未报告破坏性 API 变更；向后兼容性已保持。*

---

#### **3. 新模型与硬件支持**  
- **模型架构**：  
  - 完全支持 **Qwen3.5/3.6** 在 safetensors 与 MLX 格式下的运行，保留工具调用参数与推理控制能力。  
  - 通过更新加载逻辑，实验性支持 **Bonsai 模型**（三值、1bit）。  
  - 扩展 **视觉数据集训练** 能力，可处理混合图像/文本行（如 ScienceQA）。

- **硬件与后端**：  
  - **ROCm (AMD)**：改进 `pip install "unsloth[amd]"` 的稳定性；防止 PyPI 安装时意外覆盖 CUDA torch。  
  - **Apple M4 Pro (MPS)**：修复从输入图像生成图像时的 VAE 分块问题。  
  - **Windows 应用容器 (MXC)**：在沙箱初始化期间出现 `ReadGrantError` 时，可靠降级至用户空间 Python 路径。  
  - **CPU/GPU 混合模式**：自动检测 MoE 专家溢出至内存，并动态调整缓存大小（`--moe-cache-mib auto`）和微批次大小（`--ubatch-size 2048`）。

---

#### **4. 性能与优化**  
- **MoE 效率**：  
  - 当 MoE 专家溢出至系统内存时，Studio 现在使用 `--ubatch-size 2048`（而非默认的 512），在大型模型上吞吐量最高提升 **约 4 倍**。  
  - 通过 `--moe-cache-mib auto` 动态调整 GPU 缓存大小，减少抖动，在重度 RAG 工作负载下改善延迟。  
  - [PR #12950](https://github.com/unslothai/unsloth/pull/12950)，[PR #12951](https://github.com/unslothai/unsloth/pull/12951)

- **嵌入管道**：  
  - `unsloth/embeddinggemma-2` 与 `embeddinggemma-300m` 现在改用 **llama-server** 替代基于 CPU 的 `sentence-transformers`，在 NVIDIA/AMD GPU 上索引速度从约 5 条/秒提升至 **约 129 条/秒**。  
  - [PR #13005](https://github.com/unslothai/unsloth/pull/13005)，[PR #13006](https://github.com/unslothai/unsloth/pull/13006)

- **延迟降低**：  
  - 修复在 Windows 上空闲状态下（Ryzen 9 7900X + ROCm）出现的过度 CPU 占用问题（所有核心均达 ~95%）。  
  - [Issue #12942](https://github.com/unslothai/unsloth/issues/12942) → 修复待合并至 PR 流程。

---

#### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 状态 | 修复 PR / 备注 |
|--------|------|------|----------------|
| ⚠️ 高 | **Windows 10 上长上下文聊天延迟**（Geforce RTX） | 待处理 | [Issue #12552](https://github.com/unslothai/unsloth/issues/12552) |
| ⚠️ 高 | **Qwen Image 2.1 Q4_K_M 在 M5 Max（48GB 内存）上失败** | 待处理 | [Issue #11792](https://github.com/unslothai/unsloth/issues/11792) – 可能为内存碎片或量化不匹配所致 |
| ⚠️ 高 | **更新后模型无法加载（v0.1.903-beta）** | 待处理 | [Issue #12842](https://github.com/unslothai/unsloth/issues/12842) – 可能为缓存损坏或依赖冲突 |
| ⚠️ 高 | **Int4 加载器未验证 `group_size` 与 `weight_scale` 形状一致性** | 待处理 | [Issue #12955](https://github.com/unslothai/unsloth/issues/12955) – 可能导致无声推理错误 |
| ⚠️ 中 | **系统 TTS 会朗读 Markdown 格式（星号、下划线）** | 已关闭 | [Issue #12547](https://github.com/unslothai/unsloth/issues/12547) – 已在 v0.1.902-beta 中修复 |
| ⚠️ 中 | **实时监控小部件与弹出框重叠** | 已关闭 | [Issue #12623](https://github.com/unslothai/unsloth/issues/12623) – 最近 UI 重构中已解决 |

> **注意**：多个回归问题与新引入的 MoE、嵌入及 Web 搜索逻辑相关。下一版 beta 将优先修复。

---

#### **6. 对应用开发者的意义**  
- **在 Unsloth 中直接构建决策代理**：使用新的 `DecisionModelTrainer` API，将 LLM 转化为确定性强、高精度的决策引擎，适用于需要结构化输出的 AI 代理。
- **利用 MoE 优化**：对于大型模型（>30B），依赖动态 `--ubatch-size` 与 `--moe-cache-mib auto`，即使专家溢出至内存也能实现接近原生性能。
- **安全高效的嵌入与推理**：使用 `llama-server` 后端实现快速 GPU 加速嵌入，生产环境中的 RAG 应避免使用 `sentence-transformers`。
- **增强的 UX 模式**：利用新浏览器面板功能——视频播放、右键下载、内联文件编辑——构建更丰富的代理界面。
- **关注回归风险**：避免使用 `int4` 检查点中 `group_size` 元数据不一致的情况；在 v0.1.904 稳定前，注意更新后的模型加载情况。

> 💡 *最佳实践*：始终在更新后验证模型加载状态，并仅在兼容 ROCm 的 torch 构建版本下使用 `unsloth[amd]`。

---  
*摘要生成时间：2026-10-08 | 来源：[unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*