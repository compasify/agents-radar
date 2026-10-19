# AI 基础设施日报 2026-10-19

> 生成时间: 2026-10-19 00:26 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目 AI 基础设施生态报告 – 2026-10-19**

---

### **1. 生态概览**

2026年末，AI基础设施格局由高性能推理引擎、原生代理工具链以及分布式服务抽象共同定义。**vLLM**、**SGLang** 和 **llama.cpp** 等项目正在推动下一代硬件（特别是 NVIDIA Blackwell (SM120) 和 AMD MI355X）上的低延迟、高吞吐推理边界。与此同时，**Ollama**、**LiteLLM** 与 **Unsloth** 正逐步演变为功能完整的编排平台，支持本地执行增强、模型管理及代理工作流。结构化输出 API（`/v1/systemone`）、推测解码正确性修复以及 MCP 集成的出现，标志着向生产级智能体系统转变的趋势——可靠性、确定性和可组合性成为核心要求。

---

### **2. 活动对比**

| 项目       | 当前开放问题数 | 当日合并的 PR 数 | 发布状态         |
|------------|----------------|------------------|------------------|
| vLLM       | 47             | 82               | v0.32.0（稳定版）|
| SGLang     | 58             | 91               | 无               |
| llama.cpp  | 64             | 12               | b11721+（夜间版）|
| Ollama     | 52             | 18               | v0.40.7-rc0（RC）|
| LiteLLM    | 32             | 15               | v1.107.0-rc.1（RC）|
| Unsloth    | 67             | 14               | 无新版本         |

> 🔍 *洞察*：SGLang 在开发速度上领先，当日合并了 91 个 PR，主要得益于对 DeepSeek-V4.1 与 MoE 路由的深度优化。相比之下，**llama.cpp** 尽管提交量较低，但贡献高度聚焦且影响深远，体现了其作为基础运行时的核心定位。

---

### **3. 模型支持竞赛**

| 新模型 / 架构              | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1-Flash**   | ✅（完整支持） | ✅（完整支持，含 SWA 重放） | ✅（Qwen4-Exp 融合） | ❌ | ❌ | ❌ |
| **NVIDIA Nemotron 3.5 ASR** | ⚠️（实验性） | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Qwen3.5-Next / Llama4** | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Mamba-2 混合架构**       | ❌ | ❌ | ❌ | ❌ | ❌ | ✅（通过免扩展轮子） |
| **PPLX Decider v1.2**     | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |
| **Hexagon v73 NPU**       | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Apple Foundation Models** | ❌ | ❌ | ❌ | ❌ | ❌ | 🟡（已请求） |

> 🏆 **领先者**：**SGLang** 在模型特异性创新方面处于领先地位，尤其在 **DeepSeek-V4.1** 上实现了从多模态到推测工作流的端到端支持。  
> 🏁 **新兴优势**：**Unsloth** 在小众硬件（Hexagon、Mamba-2）和以用户体验为导向的模型访问方面获得关注；而 **vLLM** 仍主导主流模型兼容性。

---

### **4. 性能前沿**

| 优化重点                | vLLM                          | SGLang                         | llama.cpp                     | Ollama             | LiteLLM              | Unsloth               |
|-------------------------|-------------------------------|--------------------------------|-------------------------------|--------------------|----------------------|------------------------|
| **KV 缓存与缓存机制**   | CUDA 图，TP 全归约融合        | Radix + 重叠调度器修复         | Flash attention，非连续 SUM | —                  | 批次成本缓冲         | —                      |
| **批处理与吞吐量**      | 位级批处理不变性（DSv4.1）    | 可中断预填充 CUDA 图           | 融合内核（Qwen4-Exp）         | 分布式 RPC         | —                    | 上下文并行             |
| **量化**                | NVFP4 MoE，XPU FP8 每 token   | Marlin/FastMoE LoRA，FP8 tile 表 | Q4_0/Q8_0 DP4a GEMMs，q8_fast_dequant | MLX MXFP4          | —                    | FP8 回退逻辑           |
| **分布式服务**          | 移除 Ray V2 执行器            | —                              | llama.cpp RPC                 | ✅ 活跃开发         | —                    | —                      |
| **内核级调优**          | 混合 MLA 配对，MoE 最终化      | NGRAM 推测解码修复，栈重构     | MMQ 调优，`dp4a` GEMMs         | —                  | Rust 消息处理        | CPU 停顿减少           |

> 📈 **趋势**：性能前沿正从单纯吞吐量转向**复杂场景下的正确性**——尤其是在推测解码、MoE 路由和量化内核一致性方面。**SGLang** 与 **vLLM** 在此领域领先，已多次修复关键正确性缺陷。

---

### **5. 层级定位**

| 项目       | 主要层级                  | 核心差异化 |
|------------|---------------------------|------------|
| **vLLM**   | **推理引擎**              | 针对 SM120 优化，支持大规模 MoE 与确定性批处理 |
| **SGLang** | **高性能服务 + 代理运行时** | 全栈代理支持：推测解码、重放、LoRA、MCP |
| **llama.cpp** | **本地运行时 / 跨后端引擎** | 最广的后端支持（Vulkan、SYCL、WebGPU、Hexagon），底层内核控制能力 |
| **Ollama** | **LLM 网关 / 本地 CLI 平台** | 开发友好接口，多后端抽象，持续增强代理支持 |
| **LiteLLM** | **API 网关 / 代理层**      | 统一 API 表面，通过 cosign 签名保障安全，支持批量处理 |
| **Unsloth** | **代理 UI + 编排层**       | 丰富用户体验，模型持久化，移动端优先设计，支持 MCP 可视化 |

> 💡 **战略洞察**：该生态正在分层：
> - **工程师** 使用 **vLLM/SGLang** 实现核心推理。
> - **开发者** 依赖 **Ollama/LiteLLM** 快速原型开发与 API 标准化。
> - **产品团队** 依靠 **Unsloth** 构建代理界面与用户可见的工作流。

---

### **6. 趋势信号**

**从今日活动提取的关键行业趋势：**

1. **Blackwell (SM120) 稳定性危机**：所有主要项目均报告在 RTX PRO 6000 Blackwell GPU 上出现严重回归（vLLM、llama.cpp、SGLang）。这表明**新一代硬件采用尚处早期不稳定阶段**——对生产部署是明确警示。

2. **结构化输出已成为标准**：vLLM 默认启用 `POST /v1/systemone` 接口，表明**结构化推理**（决策树、评分、槽填充）已不再是实验性功能，而是智能体的基础配置项。

3. **推测解码正确性优先于速度**：SGLang 与 vLLM 多次修复中强调**正确性高于性能**——例如修复 NGRAM 推测中的 KV 缓存损坏问题。这反映了成熟度提升：稳定性已超越原始吞吐量成为首要目标。

4. **安全与供应链完整性**：LiteLLM 采用 **cosign 签名的 Docker 镜像** 标志着一个转折点——安全性已从“加分项”转变为**生产级部署的强制要求**。

5. **以代理为中心的开发范式**：Unsloth/Ollama/SGLang 中的 MCP 工具绑定、LoRA 堆栈与模型持久化兴起，证实**代理层已成为应用的主要边界**，而非模型本身。

---

### **对应用开发者的建议**

- **避免在生产环境使用 SM120 GPU**，直到 vLLM/SGLang 的补丁发布——当前构建存在崩溃和极端性能下降问题。
- **锁定稳定版本**：仅在不使用推测解码或复杂量化的情况下，使用 `v0.32.0`（vLLM）、`b11721+`（llama.cpp）、`v0.40.7-rc0`（Ollama）或 `v1.107.0-rc.1`（LiteLLM）。
- **严格测试代理工作流**：即使修复后，仍可能出现推测路径的细微输出偏差——源于持续存在的内核级竞争条件。
- **规划供应链验证**：在受监管环境中，要求对 LiteLLM 及其他代理层工具执行 `cosign verify`。
- **监控模型加载行为**：Unsloth 的 `Always` 常驻模式与 Ollama 的云稳定性问题凸显了对稳健模型生命周期管理的需求。

> 🚨 **总结**：基础设施正在成熟——但尚未稳定。请优先考虑**正确性、可复现性与安全性**，而非追求极致性能。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest – 2026-10-19

---

### **1. 今日亮点**

vLLM 项目发布了 **v0.32.0**，标志着一个重大里程碑，此次版本共包含 800 多次提交，来自 363 名贡献者（其中 121 人为新贡献者）。该版本引入了 `POST /v1/systemone` 端点以支持结构化决策——可在结构化状态上进行 `choice`、`noul` 和 `score` 查询，现已默认启用。在 Blackwell（SM120）支持方面持续取得进展，多个 PR 集中于 CUDA graph 稳定性、KV offloading 及量化正确性优化。

> 🔗 [v0.32.0 发布](https://github.com/vllm-project/vllm/releases/tag/v0.32.0)

---

### **2. 发布与破坏性变更**

- **v0.32.0** 已正式上线，主要变更如下：
  - 默认启用新的 `POST /v1/systemone` 端点，用于结构化输出推理。
  - 移除已废弃的 `VLLM_USE_RAY_V2_EXECUTOR_BACKEND` 环境变量 (#62228)。
  - 改进 NixlConnector 中混合 MLA 块大小的处理方式 (#61002, #59746)。

> 🔗 [发布说明](https://github.com/vllm-project/vllm/releases/tag/v0.32.0)  
> 🔗 [PR：移除 Ray V2 执行器标志](https://github.com/vllm-project/vllm/pull/62228)

---

### **3. 新模型与硬件支持**

- **新增模型支持**：
  - 完全支持 **DeepSeek-V4.1-Flash**（含 DSpark、MegaMoE、DEP4），并在 CUDA graph 下实现了更优的位级批处理不变性 (#62365)。
  - 实验性支持 **NVIDIA Nemotron 3.5 ASR Streaming**（600M）通过 Issue #47455。
  - 通过 PR #62361 将 `Qwen3.5-Next`、`Llama4`、`Glm5Next`、`Inkling` 及 `Laguna` 添加至 `supported_models.md`。

- **硬件与后端进展**：
  - **ROCm**：MI355 DP+EP 的 CI 改进；修复 Inductor 点对点自动调优问题 (#62286, #62280)。
  - **CPU**：实验性支持无需 Triton 的 MRV2 CPU 执行路径，通过自定义采样器 + NumPy 到 Numba 转译实现 (#60924)。
  - **Intel GPU (XPU)**：引入每标记动态 FP8 激活量化 (#61362)。

> 🔗 [PR：将 Qwen3.5-Next/Llama4 等加入支持模型列表](https://github.com/vllm-project/vllm/pull/62361)  
> 🔗 [PR：XPU 每标记量化的 FP8](https://github.com/vllm-project/vllm/pull/61362)

---

### **4. 性能与优化**

- **吞吐与延迟**：
  - **DeepSeek-V4.1-Flash** 在所有配置（DSpark、MTP、MegaMoE）下均实现位级批处理不变推理，这对确定性服务至关重要 (#62365)。
  - **Beam 模型优化**：融合 TP all-reduce 与夹心归一化及 MoE 最终操作，降低内核开销 (#62366)。

- **内存与内核效率**：
  - 混合 MLA 块配对修复提升了 ROCm 上不同 P/D 块大小在各 TP 分片间的兼容性 (#61002, #59746)。
  - **TurboQuant 工作区缩减目标**：问题 #43357 报告在 Qwen3.6-27B NVFP4 上工作区使用量过高（12MB vs 预期 3MB），修复正在进行中。

> 🔗 [PR：DeepSeek-V4.1-Flash 位级批处理不变性](https://github.com/vllm-project/vllm/pull/62365)  
> 🔗 [PR：融合 Beam 的 TP all-reduce 与归一化/MoE 最终操作](https://github.com/vllm-project/vllm/pull/62366)

---

### **5. 稳定性与回归问题**

今日报告的关键问题集中在 **Blackwell（SM120）稳定性**，尤其涉及 DeepSeek-V4.1-Flash 与 NVFP4 MoE 模型：

| 严重性 | 问题 | 摘要 | 修复状态 |
|--------|------|--------|----------|
| ⚠️ 高 | [#56892](https://github.com/vllm-project/vllm/issues/56892) | 在启用 `--enforce-eager` 的 RTX PRO 6000 Blackwell（SM120）上解码吞吐极低；CUDA graph 无法使用 | ❌ 尚无修复；评论数高达 21 |
| ⚠️ 高 | [#58910](https://github.com/vllm-project/vllm/issues/58910) | SM120 上长预填充（>35K token）期间出现 Xid 31 非法内存访问，使用 CUDA graph 时发生 | ❌ 尚无修复 |
| ⚠️ 高 | [#48898](https://github.com/vllm-project/vllm/issues/48898) | SM120 上因流水线/TP 模式下 K 未对齐导致 NVFP4 输出垃圾数据 | ❌ 已确认为回归问题 |
| ⚠️ 中 | [#47365](https://github.com/vllm-project/vllm/issues/47365) | SM120 上，NVFP4 flashinfer_b12x MoE 在 TP 模式下产生垃圾输出 | ❌ 从 dev552 → dev601 出现回归 |

> 🔗 [问题：SM120 CUDA graph 捕获失败（DSv4.1）](https://github.com/vllm-project/vllm/issues/56892)  
> 🔗 [问题：长预填充期间非法内存访问（DSv4.1）](https://github.com/vllm-project/vllm/issues/58910)

---

### **6. 对应用开发者的意义**

- **使用 `POST /v1/systemone`** 进行结构化输出（如决策树、评分、槽位填充）的代理工作流——v0.32.0 中已默认启用。
- **暂勿在生产环境使用 SM120**：当前版本在 DeepSeek-V4.1-Flash 与 NVFP4 MoE 模型上存在严重性能下降与崩溃问题。请关注 [#56892](https://github.com/vllm-project/vllm/issues/56892) 与 [#58910](https://github.com/vllm-project/vllm/issues/58910)。
- **期待更高确定性**：v0.32.0 支持复杂配置（DSpark、MegaMoE、DEP4）下的位级批处理不变推理。
- **考虑使用 CPU 沙箱**：实验性的 MRV2 CPU 路径或可使 Colab/T4 环境下的轻量级代理测试成为可能 (#62257)。
- **留意 LoRA 问题**：在混合 MoE 模型（如 Qwen3.6-35B-A3B）上启用 `enable_lora=True` 时，仍存在静默输出污染问题，尚未解决 (#49063)。

> ✅ **实用建议**：若不部署于 SM120 GPU，可锁定 vLLM 版本至 `v0.32.0`；否则，请使用 `v0.31.0` 或更早版本，等待补丁发布。

--- 

*摘要生成时间：2026-10-19 | 来源：[vLLM GitHub](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 消息简报 – 2026-10-19**

---

### **1. 今日重点**  
SGLang 生态系统持续加速对 DeepSeek-V4.1 的优化，关键 PR 已实现图像与多模态工作负载的编码器 SWA 有界重播支持，并在重播上下文中新增提示 logprob 返回。一项重大修复已合并，解决了使用基数缓存（radix caching）与重叠调度器（overlap scheduler）时，NGRAM 算法中推测解码出现数据损坏的问题——这对高吞吐推理的正确性至关重要。与此同时，MoE 路由与 LoRA 运行时栈的持续优化，进一步拓展了针对 NVIDIA Blackwell 与 AMD MI355X 的硬件特定优化。

---

### **2. 发布与破坏性变更**  
无。过去 24 小时内未发布新版本或破坏性变更。

---

### **3. 新模型与硬件支持**  
- ✅ **DeepSeek-V4.1**：现已全面支持：  
  - 图像与文本输入的编码器 SWA 有界重播（[PR #45048](https://github.com/sgl-project/sglang/pull/45048)）  
  - 通过 HiCache 集成外部链接池（[PR #44623](https://github.com/sgl-project/sglang/pull/44623)）  
  - 重播上下文中的提示 logprob 返回（[PR #45050](https://github.com/sgl-project/sglang/pull/45050)）  
- ✅ **NVIDIA GB300 / H200 / B200**：通过 NVIDIA megakernels 增强支持（[PR #44945](https://github.com/sgl-project/sglang/pull/44945)），并在 Ampere 架构上启用 FP8 Marlin 回退（[PR #44944](https://github.com/sgl-project/sglang/pull/44944)）。  
- ✅ **AMD MI355X (gfx950)**：可选启用 GLM5 的 PTPC FP8 投影（[PR #33602](https://github.com/sgl-project/sglang/pull/33602)），但当前在代理类工作负载中的性能仍落后于 B200/B300（[Issue #34596](https://github.com/sgl-project/sglang/issues/34596)）。

---

### **4. 性能与优化**  
- 🔧 **推测解码**：NGRAM 推测解码现在可在请求以停止符结尾时正确处理 KV 缓存一致性，修复了一个关键正确性问题（[PR #45049](https://github.com/sgl-project/sglang/pull/45049)）。  
- 🔧 **MoE 路由与量化**：一系列 PR（[#44994](https://github.com/sgl-project/sglang/pull/44994), [#44993](https://github.com/sgl-project/sglang/pull/44993), [#44991](https://github.com/sgl-project/sglang/pull/44991), [#44480](https://github.com/sgl-project/sglang/pull/44480)）重构了 MoE 路由逻辑，提升专家分配效率并支持混合精度。  
- 🔧 **LoRA 运行时**：21 部分的 LoRA 栈最终部分已合并：  
  - Marlin 供应商上的 NVFP4 MoE LoRA（[PR #42888](https://github.com/sgl-project/sglang/pull/42888)）  
  - CuTeDSL FP8 tile 表与 SM90/SM100 的分组 GEMM（[PR #42887](https://github.com/sgl-project/sglang/pull/42887), [#42886](https://github.com/sgl-project/sglang/pull/42886)）  
  - Triton FP8 MoE LoRA 支持（[PR #42885](https://github.com/sgl-project/sglang/pull/42885)）  
- 📈 **预填充优化**：可拆分的预填充 CUDA Graph 现已在 GB300 上支持任意上下文长度（[PR #43733](https://github.com/sgl-project/sglang/pull/43733)），彻底消除长序列场景下的立即回退（eager fallback）。

---

### **5. 稳定性与回归问题**  
- ⚠️ **严重正确性缺陷**：`NGRAM` 推测解码在请求以停止符结尾时会损坏基数缓存（radix-cached KV）（[Issue #44997](https://github.com/sgl-project/sglang/issues/44997)）。**已在 PR #45049 中修复**。  
- ⚠️ **输出错误**：使用重叠调度器时，FP8 块量化检查点偶尔会产生错误的 token（[Issue #45000](https://github.com/sgl-project/sglang/issues/45000)）。可在 RTX 3090 上复现；暂无修复方案。  
- ⚠️ **CUDA 核心转储追踪**：来自自动收集的核心转储共 347 条评论（[Issue #26340](https://github.com/sgl-project/sglang/issues/26340)）——正在排查 GPU 内核崩溃问题。  
- ⚠️ **运行器磁盘耗尽**：自托管运行器 `5090-vast-no-0` 因磁盘空间耗尽而失败（[Issue #44479](https://github.com/sgl-project/sglang/issues/44479)）——影响 CI 可靠性，需解决后恢复。  
- ⚠️ **内存访问崩溃**：在 `--disaggregation-mode decode` 下，运行时角色切换（`decode` → `prefill` → `decode`）导致非法内存访问（[Issue #43557](https://github.com/sgl-project/sglang/issues/43557)）。

---

### **6. 对应用开发者的影响**  
- **安全使用 `--enable-encoder-swa-bounded-replay` 与 DeepSeek-V4.1 的图像及多模态工作负载**——近期修复确保元数据与重播的正确处理。  
- **除非使用最新构建版本（PR #45049 之后），否则避免在基数缓存 + 重叠调度器组合下使用 `NGRAM` 推测解码**；否则可能出现错误输出。  
- **在 GB300/H200/B200 上启用 `--enable-nvidia-megakernel`**，以加快 Flash-decode 步骤，尤其在高并发场景下效果显著。  
- **充分利用新 LoRA 栈**，支持在 FP8/Marlin/NVFP4 上进行高级微调工作流——适用于成本敏感型部署。  
- **监控 CI 运行器状态**：若依赖自托管运行器，请定期检查磁盘空间，考虑扩容存储或切换至云原生 CI（如 GitHub Actions）以避免流水线中断。  

> 🔗 *为保障稳定性：生产环境负载下测试推测解码路径时，始终使用 `--speculative-algorithm NEXTN` 或 `NGRAM`。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp 每日简报 – 2026-10-19**

---

### **1. 今日亮点**  
最新更新聚焦于多个后端在性能与正确性方面的关键改进，尤其集中在 **Vulkan**、**SYCL** 和 **CUDA**。主要进展包括针对 Qwen4-Exp 的融合量化内核优化、所有后端对非连续张量的支持，以及 Intel Arc GPU 上去量化带宽的增强。一项重大稳定性修复解决了在使用量化模型时，贪婪采样下推测解码出现分歧的问题。

---

### **2. 发布与破坏性变更**  
- **`b11721`**：在 CUDA 后端中为 Qwen4-Exp 引入了 `SCALE -> SIGMOID -> SCALE -> HC_POST` 链的融合，提升了高容量 MoE 模型的效率。[PR #30602](https://github.com/ggml-org/llama.cpp/pull/30602)  
- **`b11720`**：在 CPU、CUDA、Vulkan 及 WebGPU 后端全面支持 **非连续 SUM 操作**——对动态批处理和复杂图结构布局至关重要。[PR #28851](https://github.com/ggml-org/llama.cpp/pull/28851)  
- **`b11719`**：修复了 Flash Attention (`fattn`) 中当 `k_VKQ_max = (k_VKQ_max - nbatch_fa)` 时的越界检查问题——防止大批次情况下潜在的内存损坏。[PR #30572](https://github.com/ggml-org/llama.cpp/pull/30572)

> ⚠️ **迁移提示**：依赖量化模型（如 Q4_K_M）进行推测解码的用户应升级至 `b11721+` 版本，以避免输出不一致。

---

### **3. 新模型与硬件支持**  
- **Qwen4-Exp (Qwen3.8-Flash-Next)**：通过 `SCALE -> SIGMOID -> SCALE` 实现 `hc_post` 门链的完整融合支持，现已在 CUDA 与 Vulkan 上可用。[PR #30602](https://github.com/ggml-org/llama.cpp/pull/30602)  
- **Hexagon v73 NPU**：新增对平铺/分块 `Q1_0` 与 `Q2_0` 量化格式的 **hadamard MUL_MAT** 与 **GET_ROW** 操作支持，使 Qualcomm AI 加速器上的高效推理成为可能。[PR #30627](https://github.com/ggml-org/llama.cpp/pull/30627)  
- **Intel Arc Pro B70 (SYCL)**：实验性支持 **多流 Flash Attention** 与优化的 `q8_fast_dequant` 内核（最高达 **636.9 GB/s**）。[PR #30775](https://github.com/ggml-org/llama.cpp/pull/30775)

---

### **4. 性能与优化**  
- **SYCL (Intel Arc B70)**：`q8_fast_dequant` 内核实现 **约 2.11%–5.5% 的 TPS 提升** 与 **+200 GB/s 原始带宽**（从 437.4 → 636.9 GB/s），且无 PPL 下降。[PR #30775](https://github.com/ggml-org/llama.cpp/pull/30775)  
- **Vulkan (D700 / GCN1)**：在 Flash Attention 中为 **Q4_0 KV 缓存去量化 + 转置** 添加快速路径，解决严重的延迟瓶颈。[PR #30738](https://github.com/ggml-org/llama.cpp/pull/30738)  
- **CUDA (Blackwell sm_100)**：持续调优用于 GCN 架构（HIP）的 MMQ 配置及 Stream-K 网格限制，以减少启动开销。[PR #30021](https://github.com/ggml-org/llama.cpp/pull/30021)，[PR #30553](https://github.com/ggml-org/llama.cpp/pull/30553)  
- **OpenCL**：为 `int4` 量化类型（Q4_0/Q8_0/Q4_K…）添加 `dp4a` GEMM 变体，无需外部库依赖即可在 Adreno 平台上显著提升性能。[PR #30753](https://github.com/ggml-org/llama.cpp/pull/30753)

---

### **5. 稳定性与回归问题**  
| 问题 | 严重性 | 状态 | 修复 PR？ | 备注 |
|------|----------|--------|----------|-------|
| [#25618](https://github.com/ggml-org/llama.cpp/issues/25618)：量化目标上的推测解码偏差 | 🔴 严重 | 开放 | ❌ | 在 Q4_K_M 上贪婪输出与原生运行不一致；影响智能体推理。 |
| [#27329](https://github.com/ggml-org/llama.cpp/issues/27329)：Qwen3.8-27B-NVFP4 在 RTX 5090D（Blackwell）上解码卡死 | 🔴 严重 | 开放 | ❌ | CPU 持续旋转，无 GPU 工作——阻碍下一代硬件部署。 |
| [#28933](https://github.com/ggml-org/llama.cpp/issues/28933)：128GB 统一内存系统聊天过程中内存持续增长 | 🟡 高 | 开放 | ❌ | RSS+swap 无限制增长——长期会话存在 OOM 风险。 |
| [#28056](https://github.com/ggml-org/llama.cpp/issues/28056)：集成显卡上的 KV 缓存污染 | 🟡 高 | 已关闭 | ✅ 部分修复 | 零拷贝图输入中的竞争条件；已在 PR #28056（已打补丁）中修复。 |
| [#27079](https://github.com/ggml-org/llama.cpp/issues/27079)：Vulkan/ROCm 上使用 `dry_penalty_last_n` 时报服务器错误 | 🟡 中等 | 已关闭 | ✅ 已修复 | 通过补丁版本解决。 |

> ✅ **注意**：多个回归问题正通过活跃的 PR（如 #30757、#30761）推进修复，但 **关键稳定性问题仍处于开放状态**。

---

### **6. 对应用开发者的意义**  
- 若你在使用 **推测解码**（如 draft-mtp/draft-dspark）搭配 **量化模型**，请务必使用 `b11721+` 或更高版本——旧版本可能导致输出不一致。  
- 利用非连续 SUM 支持（`b11720`）实现高级批处理策略，尤其是在多智能体系统中张量视图动态重塑的场景。  
- 优先选择 **Intel Arc B70** 与 **AMD RDNA4** 平台以获得顶尖的推理性能——近期的 SYCL/Vulkan 优化在吞吐量与内存效率方面均有显著提升。  
- 在多 GPU 设置中，**暂勿使用 `--split-mode tensor`**，直到 #29466 修复为止——否则可能因 `GGML_ASSERT(bcj.nodes[i])` 导致崩溃。  
- **密切监控模型加载错误**——问题 #30706 指出，当模型加载失败时（尤其在 Vulkan/SYCL 上），亟需更清晰的失败诊断信息。

> 💡 **实用建议**：对于生产级 LLM 网关，优先采用 **`b11721+` 版本并配合验证过的后端**，若稳定性为首要考量，可临时禁用推测解码。

---  
*简报源自 [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) —— 最后更新时间 2026-10-19*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-19**

---

### **1. 今日亮点**  
最新发布的 **v0.40.7-rc0** 引入了针对推测解码推理的关键修复，以及对非思考型模型的 OpenAI 兼容响应处理优化。关键 PR 修复了 `qwen3`、`olmo3-think` 和 `anthropic` 解析器中的流式传输正确性问题，确保在实时生成过程中能正确处理 `thinking` 块和工具调用。这些更新显著提升了使用结构化推理的代理工作流与 RAG 系统的可靠性。

---

### **2. 发布与破坏性变更**  
- **v0.40.7-rc0**（GitHub: [PR #19010](https://github.com/ollama/ollama/pull/19010), [PR #19064](https://github.com/ollama/ollama/pull/19064))  
  - ✅ *OpenAI API*：通过 `openai` 提供方修复，实现非思考型模型上的 `Responses` 功能支持。  
  - ✅ *Llama Server*：自动推断草稿推测类型，降低手动配置负担。  
  - ✅ *MLX 后端*：新增对 **PPLX Decider v1.2** 的支持，扩展决策模型集成选项。

> 📌 未报告破坏性变更；所有更新均为功能增强或缺陷修复。

---

### **3. 新模型与硬件支持**  
- **MLX**：正式加入对 **PPLX Decider v1.2** 的支持（通过 [PR #19064](https://github.com/ollama/ollama/pull/19064)）。  
- **Rockchip NPU**：社区关注度激增，收到两条功能请求 ([#15393](https://github.com/ollama/ollama/issues/15393), [#9268](https://github.com/ollama/ollama/issues/9268))，呼吁原生集成，援引 `rkllama` 中已有的相关工作。  
- **Apple Foundation Models**：请求在 macOS 上实现原生集成 ([#19116](https://github.com/ollama/ollama/issues/19116))，以通过 Ollama 的 CLI/API 无缝使用 Apple 的设备级模型。

---

### **4. 性能与优化**  
- **分布式推理**：基于 llama.cpp RPC 机制的跨设备分布式推理进展顺利 ([#10844](https://github.com/ollama/ollama/pull/10844))，目前已在 macOS 上测试通过。该功能支持多 GPU 扩展——向集群部署迈出关键一步。  
- **MLX 量化**：用户报告在 M5 Pro 上，量化决策模型（如 MXFP4）在预填充阶段比 BF16 更慢 ([#18833](https://github.com/ollama/ollama/issues/18833))，表明低精度内核可能存在优化不足。  
- **Jetson Orin Nano**：在 v0.40.5 中观察到回归问题，`gemma4:e4b-it-qat` 在 `num_ctx=16384` 时失败（而 v0.35.1 版本稳定），归因于 NvMap 错误 12 ([#19115](https://github.com/ollama/ollama/issues/19115))，提示内存分配器存在回归。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 影响 | 修复状态 |
|---------|------|--------|------------|
| 🔴 高 | **云 API 卡死 / 无 HTTP 响应** (`/v1/chat/completions`) | Ollama Cloud Pro 用户受阻；请求无限排队 → 429 错误 ([#19111](https://github.com/ollama/ollama/issues/19111)) | ❌ 尚未解决 |
| 🔴 高 | **模型损坏 / 清理清单错误** (`corrupt manifests detected, skipping prune`) | 重新拉取后持续出现警告；可能影响磁盘清理 ([#13885](https://github.com/ollama/ollama/issues/13885)) | ⚠️ 仅部分缓解方案 |
| 🟡 中 | **AMD Vulkan GPU 失败** (`gpt-oss:20b` 在 Radeon Pro 5700 XT 上返回空响应) | 尽管在 CPU 上正常运行，但在 Vulkan 后端仍失败 ([#19060](https://github.com/ollama/ollama/issues/19060)) | ❌ 尚无修复 |
| 🟡 中 | **VRAM 使用量报告错误**：`ollama ps` 与实际 `rocm-smi` 数据不符 ([#17251](https://github.com/ollama/ollama/issues/17251)) | 大模型监控数据误导 | ❌ 未解决 |
| 🟡 中 | **种子精度丢失 >2^53** ([#19078](https://github.com/ollama/ollama/issues/19078)) | 整数种子被四舍五入为浮点数 → 不同种子产生相同输出 | ✅ 修复 PR 待合并 ([#19078](https://github.com/ollama/ollama/issues/19078)) |

---

### **6. 对应用开发者的启示**  
- **流式代理必须处理断裂的 thinking 块边界**：如 [#19110](https://github.com/ollama/ollama/pull/19110) 与 [#19108](https://github.com/ollama/ollama/pull/19108) 所示，`thinking` 内容在文本或工具调用之后现在可正确流式传输——但旧版本会静默丢弃。请更新客户端以处理延迟的 `thinking` 块。  
- **避免依赖 `/v1/responses` 流中各事件的 `created_at` 时间戳一致性**：该流现在每个数据块都发出独立的 `created_at` 值 ([#19106](https://github.com/ollama/ollama/pull/19106))；不要假设 `in_progress` 与 `completed` 事件间的时间戳一致。  
- **监控云服务稳定性**：Ollama Cloud 近期发生的 `/v1/chat/completions` 故障 ([#19111](https://github.com/ollama/ollama/issues/19111)) 表明高负载下存在不稳定性——生产环境建议加入降级逻辑或本地模型备用方案。  
- **为分布式推理做好准备**：鉴于基于 RPC 的跨机器推理开发活跃 ([#10844](https://github.com/ollama/ollama/pull/10844))，未来部署应规划水平扩展能力。  

> ✅ **建议**：若依赖 OpenAI 兼容流式传输、MLX 决策模型或结构化推理，请使用 `v0.40.7-rc0`；但请在 [#19111] 修复前避免使用云端点。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# **LiteLLM 消化报告 – 2026-10-19**

---

### **1. 今日亮点**  
LiteLLM 项目发布了 **v1.107.0-rc.1**，这是即将推出的稳定版本的第一个发布候选版，通过 **cosign 签名的 Docker 镜像** 提升了安全性——自提交 `0112e53` 起已持续采用此实践。关键修复已合并，解决了 **MCP 工具钉定漂移检测**、**OpenAI 格式提供方中的 Claude 模型兼容性** 以及 **批处理中的 OOM 风险**，尤其影响图像生成工作负载。

---

### **2. 发布与破坏性变更**  
- **v1.107.0-rc.1**（GitHub：[发布](https://github.com/BerriAI/litellm/releases/tag/v1.107.0-rc.1))  
  - 所有 Docker 镜像现在均使用 **cosign** 签名，并采用自 [提交 `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0) 引入的统一密钥。  
  - 这标志着向供应链完整性迈出正式一步；用户应在部署前验证签名。  
- **v1.106.0**（GitHub：[发布](https://github.com/BerriAI/litellm/releases/tag/v1.106.0))  
  - 包含基础稳定性改进，是 v1.107.0-rc.1 之前的最后一个版本。  

> 🔐 **安全提示**：请按照 [docs.sigstore.dev](https://docs.sigstore.dev/cosign/overview/) 使用 `cosign verify` 验证所有镜像。

---

### **3. 新模型与硬件支持**  
- ✅ **OceanToken** 作为 JSON 配置的 OpenAI 兼容提供方新增（PR [#47287](https://github.com/BerriAI/litellm/pull/47287)）：  
  - 支持 `oceantoken/<publisher>/<model>` 路由，API 端点为 `https://api.oceantoken.ai/v1`。  
- 🚫 **GLM 5.3** 从成本映射和模型注册表中移除（PR [#47286](https://github.com/BerriAI/litellm/pull/47286)），因 CoralBricks 已弃用。  
- ⚠️ **今日未引入新的硬件后端或量化格式**。

---

### **4. 性能与优化**  
- ✅ **基于 Rust 的消息处理** 通过 PRs [#47284](https://github.com/BerriAI/litellm/pull/47284) 与 [#47217–47215](https://github.com/BerriAI/litellm/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Ayujonglee-berri+refactor+rust+prepare) 优化：  
  - 原生 `cache_control` 注入现已在 `/v1/messages` 路径中生效。  
  - Rust 准备阶段重构为处理器，提升一致性并降低延迟。  
- ❗ **批处理中的严重 OOM 风险已缓解**：  
  - PR [#33955](https://github.com/BerriAI/litellm/issues/33955) 指出 `CheckBatchCost` 在各工作节点间完全缓冲 base64 编码的图像数据——这是导致 Pod 重启的已知原因。尽管尚未发布修复，该问题正在积极追踪，预计将在 v1.107.0 中解决。

---

### **5. 稳定性与回归问题**  
| 问题 | 严重程度 | 状态 | 修复 PR |  
|------|----------|--------|--------|  
| #44093: MCP 工具钉定忽略 `outputSchema`、`readOnlyHint` | 高 | 开放 | 尚无修复 |  
| #33075: `stop_sequences` 在 OpenAI 兼容提供方上失败 | 高 | 已关闭 | PR [#33075](https://github.com/BerriAI/litellm/pull/33075) 合并 |  
| #46045: `ModuleNotFoundError: No module named 'mcp'` | 高 | 开放 | 尚无修复 |  
| #46074: `tool_choice` 未在拒绝该功能的模型（如 Opus/Sonnet 5.5）上降级 | 高 | 开放 | 尚无修复 |  
| #46958: 批量检索对团队作用域模型返回 403 | 中 | 已关闭 | PR [#46958](https://github.com/BerriAI/litellm/pull/46958) 合并 |  
| #47261: Ollama 嵌入忽略 `api_key`、headers、timeout | 中 | 开放 | 尚无修复 |  
| #33955: 批处理输出缓冲导致 OOM | 严重 | 开放 | 尚无修复 |

> 💡 **最高优先级**：`tool_choice` 转发与 MCP 工具钉定的修复对代理可靠性至关重要，必须在 v1.107.0 正式发布前完成。

---

### **6. 对应用开发者的影响**  
- **使用 `cosign` 验证你的 LiteLLM 镜像** —— 特别是在受监管环境中运行时。  
- 当通过 OpenAI 兼容后端（如 Azure AI、OpenRouter）路由时，避免使用 `stop_sequences`；改用 `stop`，直到升级至 v1.106.0 以上版本。  
- 若构建依赖 **MCP 工具** 的代理，请勿依赖钉定工具中的 `readOnlyHint` 或 `outputSchema` —— 当前这些字段被忽略。  
- 对于 **包含图像的批处理任务**，需预期潜在内存压力 —— 监控 `CheckBatchCost` 使用情况，并考虑限制并发批次数。  
- 可使用 `LITELLM_DETAILED_TIMING=true` 进行调试，但请注意，计时指标 **尚未导出至 Prometheus**（已在 #33959 中跟踪）。  
- 代理的 **UI 模型管理** 仍存在局限（例如无法删除密钥），建议通过 API 或 YAML 直接更新配置。

> 🔧 **实用技巧**：生产部署期间建议将 LiteLLM 版本固定在 `v1.106.0` 或 `v1.107.0-rc.1` 以确保稳定性。留意下周初发布的 v1.107.0 正式版。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# **Unsloth Digest – 2026-10-19**

---

### **1. 今日亮点**  
Unsloth 生态系统持续演进，重点在用户界面与体验的深度优化，以及对多模型管理的更强支持，特别是在模型持久化和 GPU 资源追踪方面。关键修复解决了 AMD ROCm（gfx1030/gfx1201）及 Windows 桌面客户端的稳定性问题，同时新提交的 PR 为通过 MCP 代理实现高级推理编排和增强模型加载控制奠定了基础。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新发布。*  
但已有若干高影响变更合并或提出：
- **PR #14128** 修复了预设采样设置被每模型记忆设置错误覆盖的回归问题 —— 对保持推理行为一致性至关重要 ([#14068](https://github.com/unslothai/unsloth/issues/14068))。
- **PR #14163** 修复移动端布局问题，下载指示器与发送按钮重叠，改善了触屏设备的可用性 ([#14146](https://github.com/unslothai/unsloth/issues/14146))。
- **PR #14088** 为“保持多个模型常驻”引入 `Always` 模式，实现确定性的多模型驻留，并可清晰查看加载操作中哪些模型被卸载 —— 对生产环境代理工作流至关重要。

---

### **3. 新模型与硬件支持**  
- **AMD ROCm**：持续稳定 PyTorch + ROCm 在 RDNA2（Radeon RX 6800 XT）和 gfx1201 硬件上的绑定；近期崩溃问题与 `llama.cpp` b11696 版本更新有关 ([#14057](https://github.com/unslothai/unsloth/issues/14057), [#14085](https://github.com/unslothai/unsloth/issues/14085))。
- **Mamba-2 混合模型**：通过 Triton 运行时无需扩展的 `mamba-ssm` 轮子，增强对 Mamba-2 基础模型（如 Nemotron-H、Falcon-H1、Granite-4.0-H）的支持，安装包大小从约 230–594 MB 缩减至 224 KB ([#14160](https://github.com/unslothai/unsloth/pull/14160))。
- **音频模型**：音频.cpp 模型现在根据运行时规格，在相关页面（TTS、语音克隆）中显示，此前仅限单一页面展示 ([#14072](https://github.com/unslothai/unsloth/pull/14072))。

---

### **4. 性能与优化**  
- **上下文并行**：重构训练器打补丁逻辑，确保 `patch_sft_trainer()` 仅在启用上下文并行（CP）时才包装方法，避免非 CP 运行时的额外开销 ([#14152](https://github.com/unslothai/unsloth/pull/14152))。
- **模型导出效率**：针对 T4（sm75）上的 Qwen3.5-0.8B，因果卷积1D 恢复使解码速度提升 **4.4%**（19.10 → 19.95 tok/s），凸显细粒度内核优化带来的收益 ([#13971](https://github.com/unslothai/unsloth/pull/13971))。
- **CPU 停顿减少**：RAG 工具调用归档现使用空间位置而非穷尽词分割，消除大对话中的长 CPU 停顿 ([#14098](https://github.com/unslothai/unsloth/pull/14098))。

---

### **5. 稳定性与回归问题**  
*今日报告的高严重性问题：*
1. **Windows 上的 AMD ROCm 崩溃** ([#14057](https://github.com/unslothai/unsloth/issues/14057), [#14085](https://github.com/unslothai/unsloth/issues/14085))：更新导致 RDNA2（gfx1030）上 PyTorch ROCm/GPU 绑定失效，并在 `llama.cpp` b11696 更新后引发显示闪烁/硬锁死。
2. **P100 上桌面应用崩溃** ([#14109](https://github.com/unslothai/unsloth/issues/14109))：`ggml_cuda_kernel_launch` 期间出现 CUDA 错误 `invalid argument` —— 可能由新版 `llama.cpp` 中不当张量处理引起。
3. **macOS M4 Max 内存溢出** ([#14120](https://github.com/unslothai/unsloth/issues/14120))：同时加载大型 GGUF 模型（Qwen 3.8 27B、Gemma 4 12B）导致主机崩溃，尽管具备统一内存架构。
4. **UI 卡顿 / 输入丢失** ([#13604](https://github.com/unslothai/unsloth/issues/13604))：更新至 v0.1.906-beta 后，首次回复后聊天输入消失，影响 Windows 用户。

> ✅ *修复进行中：* PRs #14152、#14098、#14163 已针对部分根本原因展开修复。

---

### **6. 对应用开发者的意义**  
在 Unsloth 上构建 AI 代理或基于 LLM 的应用的开发者应：
- **规划多模型容错能力**：使用新推出的 `Always` 常驻模式（通过 PR #14128），避免代理工作流中意外卸载。
- **避免仅 FP8 加载**：谨慎使用 `load_in_fp8=True` —— 若无对应 FP8 仓库，会静默失败而非回退至 `bf16`；建议加入显式回退逻辑 ([#14093](https://github.com/unslothai/unsloth/pull/14093))。
- **准备动态模型调度**：随着 MCP 代理开始可见模型加载/卸载情况（PRs #14089、#14090），需设计状态感知代理以应对模型短暂不可用。
- **在 AMD/RDMA2 上测试**：若目标为 ROCm，预计短期内仍不稳定，直到后续补丁发布 —— 请关注 [问题 #14057](https://github.com/unslothai/unsloth/issues/14057) 获取更新。
- **优化移动端用户体验**：确保图像选择器与聊天输入在窄屏上不冲突 —— PR #14163 提供即时解决方案。

> 📌 **实用提示**：在资源受限环境中，利用新的 `mamba-ssm` 无扩展轮子，加速 Mamba-2 混合模型的部署。

---  
*数据来源：[unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*