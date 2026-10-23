# AI 基础设施日报 2026-10-23

> 生成时间: 2026-10-23 01:05 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-10-23**

---

### **1. 生态概览**

2026年第四季度，AI基础设施领域呈现出高性能推理引擎、以本地优先为核心的运行时系统与云原生网关之间快速融合的趋势——这一趋势由对多模态、低延迟和可扩展大模型服务的需求所驱动。各项目正愈发聚焦于异构硬件支持（ROCm、AMD MI355X、Blackwell SM90/SM120）、解耦架构（PD、DCP、Mooncake）以及下一代模型格式（FlashNext、Quark MXFP4、FP8）。尽管vLLM与SGLang在原始性能与内核级创新方面仍处于领先地位，但Ollama与llama.cpp正在边缘计算与开发者导向部署中持续巩固其地位，而LiteLLM与Unsloth则不断拓展组合性与工作流编排的边界。

---

### **2. 活动对比**

| 项目       | 开放问题（高/严重） | 近24小时合并的PR | 发布版本 | 状态 |
|---------------|-----------------------------|------------------------|----------|--------|
| **vLLM**      | 6 (2 严重, 2 高)     | 7                      | 无     | 活跃（核心稳定） |
| **SGLang**    | 12 (4 严重, 4 高)    | 6                      | 无     | 高度不稳定 |
| **llama.cpp** | 6 (4 严重)             | 5                      | 无     | 修复聚焦 |
| **Ollama**    | 10 (2 严重, 4 高)    | 5                      | v0.40.9-rc3 | 云端不稳定 |
| **LiteLLM**   | 8 (2 高, 1 严重)     | 4                      | 1.107.0 (已撤回) | 安全事件 |
| **Unsloth**   | 8 (2 严重)             | 4                      | 无     | 功能发布 |

> ✅ *注：* vLLM展现出稳定的工程推进速度；SGLang与LiteLLM面临严重的稳定性与安全问题。Ollama的发布活动掩盖了其底层云可靠性隐患。

---

### **3. 模型支持竞赛**

| 新模型 / 架构       | 支持项目          | 关键说明 |
|-------------------------------|-----------------------|---------|
| **Minimax-M3.1-Flash**        | ✅ SGLang, vLLM         | 均通过 PR #63232 / #45925 加入；SGLang 提供低延迟配方 |
| **DeepSeek-V4.1 (原生-FP8)**| ✅ vLLM (ROCm gfx950)   | 异构融合专家功能启用；SGLang 支持 `--chat-encoding-backend` |
| **Qwen3.8-Flash-Next-Quark-MXFP4** | ⚠️ vLLM (计划中) | 性能优化正在进行；**GB10 (SM120) 上存在提示截断漏洞** 仍开放 |
| **MiniCPM-OCR 1.0**           | ✅ llama.cpp            | 通过 `mtmd` 模块完整集成 |
| **Nemotron 3.5 Bolt 74B-A9B** | ✅ Ollama (MLX)         | 支持推测解码与混合精度MoE堆叠 |
| **FLUX.3 Upsampler (UD-Q4_K_XL)** | ✅ Unsloth         | 默认量化优先；保留回退机制 |

> 🏆 **胜者**：**vLLM 与 SGLang** 在前沿模型与硬件协同方面领先，尤其在 FlashNext/MoE 变体上表现突出。  
> 📉 **警示**：多个项目报告在 SM120 上使用 Qwen3.8-Flash-Next 时出现静默提示截断或输出损坏——这对长上下文应用构成重大风险。

---

### **4. 性能前沿**

优化工作目前集中于五大关键方向：

| 前沿                  | 领先项目                     | 关键进展 |
|--------------------------|--------------------------------------|------------------|
| **KV缓存与内存**     | vLLM, SGLang                         | 解耦修复（PR #61160），MoE 工作区复用（`VLLM_FLASHINFER_MOE_USE_WORKSPACE`） |
| **批处理与图优化**   | vLLM, llama.cpp, SGLang              | 动态图键值化（#31004），CUDA 图死锁修复，Engram 阶段开发 |
| **量化与内核**| SGLang, llama.cpp, vLLM              | Triton W4A16 MoE（gfx1151），SYCL通信交换提升+19%，ViT 的 FA4 内核 |
| **分布式服务**   | SGLang, vLLM                         | MLA+DCP+文件后端 L3 存储（PR #41187），NIXL PD 布局（PR #62243） |
| **实时流式传输**   | Ollama, llama.cpp                    | Phonon 语音（Apple Silicon），实时API完成时间修复 |

> 🔥 **热点**：**MoE效率**已成为首要关注点——vLLM与SGLang均在优化工作区复用与GEMM融合，以降低大规模部署中的内存开销。

---

### **5. 层级定位**

| 项目       | 主要层级                | 次要角色                          | 差异化优势 |
|---------------|------------------------------|------------------------------------------|----------------|
| **vLLM**      | 推理引擎             | 模型服务、微调（通过引擎） | 高吞吐、GPU优化服务的行业标准 |
| **SGLang**    | 分布式服务引擎   | 网关、工作流编排          | 强调解耦、多节点容错能力 |
| **llama.cpp** | 本地运行时 / 边缘推理 | 量化、音频流式传输           | 主导CPU/GPU卸载、移动端/边缘部署 |
| **Ollama**    | 本地优先网关          | CLI工具、语音生成              | 开发者体验领导者；苹果芯片集成强大 |
| **LiteLLM**   | 统一API网关          | 代理、多提供商路由            | 组合性之王：支持InferAll、通配模型 |
| **Unsloth**   | AI工作流平台         | 工作室、智能体构建器（Flows）            | 首个引入可视化、节点式AI流水线 |

> 🎯 **战略洞察**：该技术栈正从单体引擎演变为模块化、可组合的分层体系——其中 LiteLLM 路由，vLLM 服务，SGLang 扩展，Ollama 本地运行，Unsloth 构建流程。

---

### **6. 趋势信号**

**从今日活动提取的新兴趋势：**

1. **解耦服务已进入生产就绪阶段**  
   —— vLLM 与 SGLang 正在积极推出针对 PD、DCP 和文件后端 L3 存储的抽象。然而，**跨请求上下文污染（vLLM #61160）** 与 **CUDA 图下输出乱码（SGLang #45367）** 表明，鲁棒性仍落后于功能实现。

2. **硬件特异性漏洞成为新瓶颈**  
   —— 关键问题集中在 **SM120 (GB10)** GPU 上（vLLM、SGLang、llama.cpp），包括提示截断、NaN 输出及崩溃。这表明，**下一代硅片（Blackwell、RDNA4）需更深入的驱动/内核验证**。

3. **安全事件持续升级**  
   —— 恶意版本 `litellm==1.107.0` 的发布凸显开源工具链生态日益增长的风险。**必须立即升级**，且**依赖项锁定**现已成为生产环境不可妥协的要求。

4. **多模态与实时能力已主流化**  
   —— Ollama 的 phonon 音频、llama.cpp 的实时流式传输、Unsloth 的 Flows 系统表明，**交互式多模态智能体**已不再实验性——它们正被规模化部署。

5. **以模型为中心的抽象正在演进**  
   —— 项目已超越“仅服务一个模型”的范畴，转向**编排复杂行为**（如结构化输出、推测解码、工具调用）。开发者如今必须考虑**模型特定的细微差异**（如 Gemma 4 思考模式、Qwen3.6 模式漂移）。

---

### **给应用开发者的建议**

- **在 #62776 修复前避免在 GB10 上部署 Qwen3.8-Flash-Next**——长提示将被静默截断。
- **在 vLLM PD 部署中使用 `--no-enable-prefix-caching`** 以防止跨请求污染。
- **将 LiteLLM 锁定在 `1.106.x` 或 `1.108.x`**——避免任何关联 `1.107.0` 的版本。
- **监控 Ollama Cloud Pro**——当前失败率约 95%，不适合生产环境。
- **利用 Flows（Unsloth）与 InferAll（LiteLLM）构建健壮、多提供商的智能体流水线**。
- **显式验证工具调用模式**——许多模型（如 Qwen3.6）会静默忽略这些模式。

> 🛡️ **核心结论**：生态系统强大但碎片化。应优先考虑**稳定性而非新颖性**，**安全性而非速度**，**组合性而非单体架构**。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest – 2026-10-23

---

### **1. 今日亮点**

vLLM 项目在多模态与异构推理支持方面持续保持强劲势头，关键 PR 已实现 DeepSeek-V4.1/Flash-Next 在 ROCm（gfx950）上的运行，并新增对 Minimax-M3.1-Flash 的原生支持。针对 GB10（sm121）平台的 Qwen3.8-Flash-Next 正在进行关键性能优化，同时修复了一个严重影响上下文长度超过约 2K tokens 的严重提示截断问题。与此同时，团队正推进去中心化服务架构，引入新的 KV 连接器抽象，并修复结构化输出的可靠性问题。

---

### **2. 发布与破坏性变更**

过去 24 小时内未发布新版本。  
**重要配置更新：**  
- `--no-enable-prefix-caching` 现推荐作为 NIXL 去中心化部署中跨请求上下文污染问题的临时解决方案 (#61160)。  
- 新增环境变量 `VLLM_FLASHINFER_MOE_USE_WORKSPACE`，用于控制 FlashInfer TRT-LLM MoE 临时工作区的复用，提升内存效率 (#62948)。

---

### **3. 新模型与硬件支持**

- ✅ **新模型**：通过 PR #63232 新增对 **Minimax-M3.1-Flash** 的支持。  
- ✅ **ROCm (gfx950 / MI355X)**：  
  - 启用 **DeepSeek-V4.1 (原生-FP8)** 的异构融合共享专家功能 (#63180)。  
  - **Qwen3.8-Flash-Next-Quark-MXFP4** 的性能优化计划已启动 (#59575)。  
- 🔧 **CUDA SM120 (GB10)**：  
  - 为 DSV4.1 稀疏-MLA 后端应用修复，以支持 `--block-size 64` (#60762)。  
  - **严重问题**：在 GB10 上，`Qwen/Qwen3.8-Flash-Next` 中超出 `indexer_budget`（约 2048 个 token）的提示内容不可见；模型表现如同提示在 2K 处结束 (#62776)。  

> 🔗 [PR #63232](https://github.com/vllm-project/vllm/pull/63232) | [Issue #62776](https://github.com/vllm-project/vllm/issues/62776)

---

### **4. 性能与优化**

- 🚀 **Hopper (SM90)**：长序列 ViT 注意力（`max_seqlen >= 8192`）采用 FA4 内核——比 FA3 更快 (#61705)。  
- ⚙️ **DeepSeek-V4.1**：在模型图流上捕获解码器重播图，避免双重 GPU 内存池预留 (#63155)。  
- 💡 **GLM-5.3-Flash**：将预计算的 `chunk_indices` 直接传入 `chunk_kda`，消除不必要的 GPU→CPU 同步 (#63072)。  
- 📈 **MoE 效率**：通过环境变量 `VLLM_FLASHINFER_MOE_USE_WORKSPACE` 实现 FlashInfer TRT-LLM MoE 工作区在层与批之间复用，降低内存开销 (#62948)。  
- 🎯 **推测解码**：现在在 PP 模式下可保留每请求的草稿内容 (#61348)；修复调度重排期间的语法正确性问题。

> 🔗 [PR #61705](https://github.com/vllm-project/vllm/pull/61705) | [PR #63155](https://github.com/vllm-project/vllm/pull/63155) | [PR #63072](https://github.com/vllm-project/vllm/pull/63072)

---

### **5. 稳定性与回归问题**

| 严重程度 | 问题 | 描述 | 修复状态 |
|---------|------|-------------|------------|
| 🟡 高 | [#62776](https://github.com/vllm-project/vllm/issues/62776) | 在 GB10 上，`Qwen3.8-Flash-Next` 中超过 2K token 的提示内容不可见；模型完全忽略长提示 | ❌ 开放 |
| 🟡 高 | [#61160](https://github.com/vllm-project/vllm/issues/61160) | NIXL PD 去中心化部署中，通过共享前缀 KV 复用导致跨请求上下文污染 | ❌ 开放 |
| 🔴 严重 | [#60174](https://github.com/vllm-project/vllm/issues/60174) | DFlash2/DSpark + 前缀缓存导致在 v0.30/0.31 版本中，Qwen3.8-27B (TP=1) 缓存命中后输出被破坏 | ✅ 已在 0.29 修复 |
| 🔴 严重 | [#60845](https://github.com/vllm-project/vllm/issues/60845) | CUDA graphs 在全分片融合 MoE LoRA 跨 TP 分片时发生死锁 | ❌ 开放 |

> 🔗 [Issue #62776](https://github.com/vllm-project/vllm/issues/62776) | [Issue #61160](https://github.com/vllm-project/vllm/issues/61160)

---

### **6. 对应用开发者的启示**

- **去中心化服务**：在 NIXL 部署中，临时使用 `--no-enable-prefix-caching` 以避免跨请求干扰；关注 PR #62243（Mooncake P2P 布局）和 #61160 获取稳定修复方案。  
- **多模态与结构化输出**：预计在反渲染路径上的可靠性将得到改善；`/inference/v1/generate` 现已支持请求级文本与反渲染输出 (#56851)。  
- **性能调优**：启用 `VLLM_FLASHINFER_MOE_USE_WORKSPACE` 可显著降低大规模部署中的 MoE 内存开销。  
- **模型部署**：在 #62776 修复前，请避免在 GB10 上部署 `Qwen3.8-Flash-Next`——长提示将被静默截断。  
- **OpenAI API 用户**：请确保响应中设置 `completed_at`；相关修复已在 PR #63234（即将上线）中提供。

> 🛠️ **实用技巧**：对于需要结构化输出的生产级推测解码，建议使用 PP+MRV2 架构，并关注 #61348 以获取每请求草稿保留的修复进展。

---  
*本摘要源自 vLLM GitHub 活动记录（2026-10-23）。*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# **SGLang 摘要 – 2026-10-23**

---

### **1. 今日重点**  
SGLang 项目持续推进对下一代模型与硬件的支持，重点包括 DeepSeek-V4/V4.1 的集成、多节点解耦架构容错能力的增强，以及针对 GPU 特定内核的关键稳定性修复。高优先级问题包括不稳定的 CI 基础设施（问题 #42752）和新报告的 SM120 GPU 上 `fa4` 注意力后端崩溃问题（问题 #42012），两者均影响生产就绪状态。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未检测到新发布或破坏性变更。*  
然而，多个 PR 正在为即将推出的 v0.5.23+ 版本做准备：
- PR #45921 引入从共享主机表中可选地暂存 V4.1 engram 行 —— 可能影响内存布局行为。
- PR #45888 通过 Rust 前端启用 `/abort_request` 接口，提升 Python 与 Rust 服务端之间的 API 一致性。

> 🔗 [PR #45888](https://github.com/sgl-project/sglang/pull/45888) | [PR #45921](https://github.com/sgl-project/sglang/pull/45921)

---

### **3. 新模型与硬件支持**  
**模型：**  
- ✅ **MiniMax-M3.1** 已加入菜谱与配置支持（PR #45924, #45925）。  
- ✅ **MiniMax-M3.1-Flash** 现已支持，提供低延迟方案，适用于 NVIDIA B200/B300 与 AMD MI350X（PR #45925）。  
- ✅ **DeepSeek-V4/V4.1** 通过 `deepseek-recipe` 实现完整的 `--chat-encoding-backend recipe` 支持（PR #45315, #45907）。

**硬件与后端：**  
- ✅ **AMD ROCm (gfx1151)**：Quark MXFP4 MoE 现可通过 Triton 内核以 W4A16 运行（PR #41389）。  
- ✅ **NVIDIA Blackwell (SM90)**：已在 HIP 上启用 DSA 的可拆分预填充图（PR #44157）。  
- ✅ **解耦架构**：增强对 MLA + DCP + 文件型 L3 存储的支持（PR #41187）。

> 🔗 [PR #45925](https://github.com/sgl-project/sglang/pull/45925) | [PR #41389](https://github.com/sgl-project/sglang/pull/41389) | [PR #44157](https://github.com/sgl-project/sglang/pull/44157)

---

### **4. 性能与优化**  
- **快速引擎恢复**：权重缓存守护进程将 Qwen3-235B FP8 的加载时间从约 306–327 秒降低至 <1 秒（第一阶段已合并至 #27139）。  
- **预填充优化**：PR #45921 通过在调度器内存中暂存数据，优化非 ATS GPU 上的 Engram 行访问 —— 预期将提升预填充阶段的 PCIe 利用率。  
- **MoE 内核融合**：PR #43262 集成 DeepGEMM 的 `bf16_mega_gate` 内核，减少 DeepSeek-V4.1 MegaMoE 解码/验证阶段的 GEMM 调用次数。  
- **混合 MLA/KDA 存储**：PR #41187 在匹配引擎间启用基于文件的 L3 存储，适用于 DCP 配置 —— 提升可扩展性。

> 🔗 [Issue #33522](https://github.com/sgl-project/sglang/issues/33522) | [PR #45921](https://github.com/sgl-project/sglang/pull/45921) | [PR #43262](https://github.com/sgl-project/sglang/pull/43262)

---

### **5. 稳定性与回归问题**  
**严重问题（高严重性）：**  
- 🚨 **SM120（RTX PRO 6000）上 fa4 注意力后端崩溃**：GLM-5.3-Flash 在 CUDA 图捕获阶段因混合扩展重塑失败；仅 Triton 后端可用（问题 #42012）。  
- 🚨 **EAGLE 模式下 CUDA 非法内存访问**：在 8×H20（TP8/EP8）上，`run_eagle_verify → build_grammar_vocab_mask` 导致崩溃（问题 #45159）。  
- 🚨 **Kimi-K3 在 DCP A2A 下产生退化输出**：双节点 GB300 部署在启用 NCCL 图注册时，使用 CUDA 图会产生乱码输出（问题 #45367）。  
- 🚨 **FlashInfer 中静默错误激活**：在 SM90 上，`flashinfer_mxfp4` 对 Kimi-K3 错误计算 SwiGLU 而非 SiTU（问题 #45755）。

**其他显著缺陷：**  
- ❌ 当工作集超过约 3 个长前缀时，HiCache 主机层级命中率降至零（问题 #45400）。  
- ❌ FP4 KV 块在 PD 传输过程中丢失尺度 → 产生垃圾输出（问题 #45866）。  
- ❌ Qwen3.8-Flash-Next 在回滚后以错误的 QSA 索引器状态恢复（问题 #45864）。

> 🔗 [Issue #42012](https://github.com/sgl-project/sglang/issues/42012) | [Issue #45159](https://github.com/sgl-project/sglang/issues/45159) | [Issue #45367](https://github.com/sgl-project/sglang/issues/45367)

---

### **6. 对应用开发者的启示**  
- **使用 `--chat-encoding-backend recipe`** 为 DeepSeek-V4/V4.1 配置，以匹配官方 API 行为 —— 避免提示格式与分词差异。  
- **避免在 SM120（RTX PRO 6000）上使用 `fa4` 后端**，直到修复完成 —— 请以 `triton` 作为备用。  
- **监控在 GB300 或 H20 集群上的解耦部署**：若启用 DCP A2A + CUDA 图，可能产生损坏输出，除非禁用 NCCL 图注册（设置 `NCCL_GRAPH_REGISTER=0`）。  
- **谨慎启用 `--enable-lmcache`**：当前 LMCache 集成忽略 `cache_salt`，破坏租户隔离 —— 建议在修复前使用内部缓存机制（问题 #37160）。  
- **如使用混合 GDN 或 PD 工作流，请升级至最新 main 分支**：近期 PR 修复了回滚逻辑与心跳恢复问题（PR #45922, #45923）。

> 🔗 [Issue #37160](https://github.com/sgl-project/sglang/issues/37160) | [PR #45922](https://github.com/sgl-project/sglang/pull/45922)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 摘要 – 2026-10-23**

---

### **1. 今日亮点**  
最新更新聚焦于优化实时音频流处理，提升 Intel 与 Adreno GPU 上的 SYCL 与 OpenCL 性能，并修复了重排序及 MoE 专家处理中的关键问题。主要进展包括：在 Intel Arc Pro B70 上通过优化 `comm_exchange` 实现提示评估速度提升 19%，新增对 MiniCPM-OCR 1.0 及 Qwen4exp 风格注意力模式的支持。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未发布新的标签版本。但多个 PR 处理了行为变更：  
- **#30864** 修复了重排序占位符替换逻辑，避免破坏性就地编辑（修复 #30816）。  
- **#30994** 确保 `realtime API` 仅在已提交音频完全排出后才发送 `complete` —— 对流媒体保真度至关重要。  
- **#30979** 新增 MiniCPM-OCR 1.0 支持，包含正确的分词与模型集成。  
> 🔗 [PR #30864](https://github.com/ggml-org/llama.cpp/pull/30864), [PR #30994](https://github.com/ggml-org/llama.cpp/pull/30994), [PR #30979](https://github.com/ggml-org/llama.cpp/pull/30979)

---

### **3. 新模型与硬件支持**  
- ✅ **MiniCPM-OCR 1.0**：通过 `mtmd` 模块实现完整支持，具备正确的多模态输入处理能力。  
- ✅ **Qwen4exp / Qwen3.8-Flash-Next**：已应用修复以处理非标准层输入（`hc-wide residual`）及无 `kq_mask` 的 QSA 注意力。  
- ✅ **Intel XMX 矩阵引擎（ESIMD）**：多列优化（2–80 列）现已通过 SYCL 后端支持重排的 K-量化与 Q8_0 权重。  
- ✅ **Adreno（高通）**：通过 OpenCL 增加深度可分离卷积；为 Adreno X1 优化的 GEMM 内核（`kernel_gemm_noshuffle_q8_0_f32_32b_trans_ila_a7_bin`）已发布。  
- ✅ **Hexagon（骁龙）**：新增 `CONV2D`、`SGN` 与 `CEIL` 操作 —— 提升移动端 SoC 上的模型兼容性。  
> 🔗 [PR #30979](https://github.com/ggml-org/llama.cpp/pull/30979), [PR #30900](https://github.com/ggml-org/llama.cpp/pull/30900), [PR #30955](https://github.com/ggml-org/llama.cpp/pull/30955), [PR #30995](https://github.com/ggml-org/llama.cpp/pull/30995)

---

### **4. 性能与优化**  
- ⚡ **SYCL**：`fast ggml_sycl_comm_exchange()` 提升 `-sm tensor` 提示评估性能达 **+19% t/s**（均值），在 Intel Arc Pro B70 上达到与 `-sm layer` 相当的速度。  
- ⚡ **OpenCL**：优化的深度可分离卷积内核降低 Adreno 设备开销；二进制内核 `kernel_gemm_noshuffle_q8_0_f32_32b_trans_ila_a7_bin` 提升 GEMM 效率。  
- ⚡ **CUDA**：通过 **#31004** 实现图结构键控，防止动态批处理重塑过程中的图抖动，改善变负载下的稳定性。  
- ⚡ **GLM5**：输入优化减少缓冲区分配（`sel_mask_2d`, `new_pool_flat`）—— 降低 MoE 场景下的内存压力。  
> 🔗 [PR #30956](https://github.com/ggml-org/llama.cpp/pull/30956), [PR #31004](https://github.com/ggml-org/llama.cpp/pull/31004), [PR #30900](https://github.com/ggml-org/llama.cpp/pull/30900)

---

### **5. 稳定性与回归问题**  
今日报告了若干关键稳定性问题：  
- **#30892**（缺陷）：SYCL F16 内核在 Qwen3.8-27B Q4_K_M 上产生 NaN 输出，因 IQ3 代码重排所致 —— 已在 Intel Arc B70 上确认。*待修复*。  
- **#30894**（缺陷）：Nemotron GGUF 文件被错误标记为 "pixtral"，导致误用预分词器。*修复 PR 已提交* ([#30894](https://github.com/ggml-org/llama.cpp/issues/30894))。  
- **#30884**（缺陷）：gfx1201（RDNA4）上的 Flash Attention 在长上下文场景下立即触发 EOS —— 可能为 logits 腐败所致。*已在 R9700 上复现*。  
- **#29167 / #29183**（缺陷）：DeltaNet SYCL 内核在长提示（Qwen3.6/3.8/Nemotron）上生成“乱码令牌”（token soup）；影响贪婪解码。*多起报告，暂无修复*。  
> 🔗 [问题 #30892](https://github.com/ggml-org/llama.cpp/issues/30892), [问题 #30884](https://github.com/ggml-org/llama.cpp/issues/30884), [问题 #29167](https://github.com/ggml-org/llama.cpp/issues/29167)

---

### **6. 对应用开发者的意义**  
- **实时应用（音视频）**：使用 `--realtime-api` 时需谨慎 —— 最新修复确保了流完成时机正确。建议结合 `commit` 排空音频的工作流进行测试。  
- **MoE 模型（Qwen3.8, GigaChat 3.5）**：除非必要，避免将 MoE 缓存驻留于 CPU —— 近期回归显示缓存过大时 TTFT 延迟可达 **60 秒**。优先选用 GPU 居住的 LRU 缓存（参见 #20757）。  
- **边缘/移动端部署**：Hexagon + Adreno 支持使 Android 设备（如 Pixel 11 Pro, 骁龙平台）具备更丰富的推理能力。利用 `CONV2D`、`SGN` 与 `CEIL` 支持视觉/音频模型。  
- **高性能推理**：在 Intel Arc 上启用 `-sm tensor` + `--moe-cache-mib 4000` 可获得最佳吞吐量。若使用 FP16 精度，请留意 SYCL F16 问题。  
- **API 设计**：确保重排序端点使用类型化内容输入（`--rerank-content-type`）—— 避免字符串插值陷阱。  

> 💡 **实用技巧**：关注如 #31004（图键控）和 #30956（SYCL 通信交换）等 PR，它们将在动态批处理场景中带来生产级延迟优化。  

🔗 [官方仓库](https://github.com/ggml-org/llama.cpp) | [官网](https://llama.app) | [认证文件](https://github.com/ggml-org/llama.cpp/attestations)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-23**

---

### **1. 今日亮点**  
Ollama v0.40.9-rc3 首次在 Apple Silicon 上通过 Phonon 实现原生语音生成，支持通过 `ollama run` 进行实时音频播放，并新增兼容 OpenAI 的 `/v1/audio/speech` 接口。这标志着本地优先的 AI 架构向多模态推理迈出关键一步。然而，云服务稳定性问题依然严重——Ollama Cloud Pro 用户报告所有模型均出现高达 95% 的失败率，服务可靠性问题亟待解决。

---

### **2. 发布与破坏性变更**  
- **v0.40.9-rc3**：正式发布候选版，仅支持基于 Phonon 的语音功能（Apple Silicon 专用）。  
  🔗 [GitHub Release](https://github.com/ollama/ollama/releases/tag/v0.40.9)  
- **破坏性变更**：合并请求 #19199（`openai: handle developer instructions in the API`）现在在渲染和压缩过程中保留 `developer` 角色的消息，防止代理工作流中出现无声数据丢失。  
  🔗 [PR #19199](https://github.com/ollama/ollama/pull/19199)  
- **弃用提示**：`typical_p` 已不再支持（返回 400 错误），符合近期 API 清理规范。  
  🔗 [Issue #18480](https://github.com/ollama/ollama/issues/18480)

---

### **3. 新模型与硬件支持**  
- **语音模型**：通过 PR #19227 正式支持 GA Gradium Phonon 检查点（替代预发布路径）。  
  🔗 [PR #19227](https://github.com/ollama/ollama/pull/19227)  
- **MLX 后端**：新增对 **Nemotron 3.5 Bolt 74B-A9B** 的支持，采用 LiLiCorr 预测解码与混合精度专家堆叠。  
  🔗 [PR #19229](https://github.com/ollama/ollama/pull/19229)  
- **AMD Vulkan**：在启用提示缓存时，发现 RX 6600 XT 存在约 30 倍性能下降；问题尚未修复。  
  🔗 [Issue #19201](https://github.com/ollama/ollama/issues/19201)  
- **Windows NPU**：Snapdragon X Elite NPU/GPU 支持仍未实现（问题 #5360，47 条评论）。  
  🔗 [Issue #5360](https://github.com/ollama/ollama/issues/5360)

---

### **4. 性能与优化**  
- **Vulkan/AMD RADV**：使用主机内存提示缓存后，首次请求即出现约 29.7 倍吞吐量下降；模型虽已完全加载至 GPU，但仍发生卡顿。  
  🔗 [Issue #19201](https://github.com/ollama/ollama/issues/19201)  
- **MLX 线程限制**：MLX 运行器因 `mlx: Maximum threads per threadgroup is 896 but requested 1024` 而崩溃；已在 v0.40.0+ 通过内核调优修复。  
  🔗 [Issue #18846](https://github.com/ollama/ollama/issues/18846)  
- **提示截断修复**：PR #19058 确保在上下文裁剪过程中保留最后一个用户消息——即使该消息既非系统也非助手类型。  
  🔗 [PR #19058](https://github.com/ollama/ollama/pull/19058)  
- **动态令牌限制**：PR #9547 实现 `num_predict == -2` 动态填充上下文缓冲区（与 llama.cpp 行为一致）。  
  🔗 [PR #9547](https://github.com/ollama/ollama/pull/9547)

---

### **5. 稳定性与回归问题**  
- **严重云服务中断**：Ollama Cloud Pro 在所有云模型（如 glm-5.1:cloud、qwen3.5:cloud 等）上报告 **95% 失败率**，服务基本不可用。  
  🔗 [Issue #15453](https://github.com/ollama/ollama/issues/15453)  
- **模型退化**：用户报告自 10 月 10–12 日起出现严重输出退化（如无限重复“the = the = the”），与集群 829 数据损坏相关（probe2.img 全为零）。  
  🔗 [Issue #18980](https://github.com/ollama/ollama/issues/18980)  
- **云模型忽略 JSON Schema**：`qwen3-coder:480b-cloud` 返回原始 JSON 内容，未遵循指定 schema，导致自动化工具解析失败。  
  🔗 [Issue #12362](https://github.com/ollama/ollama/issues/12362)  
- **Gemma 4 思维模式无法禁用**：尽管设置 `think: false`，Gemma 4 仍持续进行长周期推理，引发代理延迟飙升。  
  🔗 [Issue #19217](https://github.com/ollama/ollama/issues/19217)  
- **静默工具调用丢失**：调用不存在的工具时返回空响应（`eval_count > 0`），但无错误提示。  
  🔗 [Issue #19187](https://github.com/ollama/ollama/issues/19187)  

> ✅ *修复进行中*：多个解析器修复（PRs #19226、#19228）提升了对非法工具调用及尾部噪声的容错能力。

---

### **6. 对应用开发者的启示**  
- **谨慎使用语音功能**：可利用 `/v1/audio/speech` 构建语音应用，但目前仅建议在 Apple Silicon 平台使用，待跨平台支持成熟后再推广。  
- **暂勿使用 Cloud Pro**：高失败率使其不适合生产环境。建议改用本地推理或考虑其他替代方案。  
- **防范工具调用漂移**：务必显式验证工具名称与 schema 合规性——Qwen3.6 解析不一致可能破坏你的代理逻辑。  
- **优雅处理流式失败**：PR #19225 新增 `response.failed` 事件以捕获流中错误，客户端应尽早检测此类异常。  
- **警惕上下文污染**：若使用大上下文模型（如 `qwen3:8b`），需监控是否存在静默截断缺陷（如最后一个用户消息丢失）。  
- **准备安全更新**：当前二进制文件仍包含关键 Go CVE（PR #19162）——待 Go 1.26.9+ 可用后尽快升级。  

> 🛠️ **实用提示**：始终统一使用 `OLLAMA_CONTEXT_LENGTH`，并验证其是否被 `/api/tags` 正确识别——当前元数据中仍存在误报。  
> 🔗 [Issue #18995](https://github.com/ollama/ollama/issues/18995)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-10-23**

---

### **1. 今日亮点**  
一起涉及恶意 `litellm==1.107.0` 版本的严重安全事件已迅速得到缓解：PyPI 与 Docker Hub 已下架该受损版本，包括所有 `latest`、`main-latest` 及 `main-stable` 镜像。社区目前正集中精力稳定核心代理行为，多个 PR 正在修复流式响应正确性、错误格式化以及缓存命中情况下的令牌计费问题。

---

### **2. 发布与破坏性变更**  
- **紧急安全补丁**：由于一个伪装仓库中嵌入了凭据窃取器（`cook.pth`）和远程代码执行加载器，`litellm==1.107.0` 已从 PyPI 与 Docker Hub 完全移除（`ghcr.io/berriai/litellm*`、`docker.io/litellm/litellm`）。用户必须立即升级至安全版本（如 `1.106.x` 或更高版本）。  
  🔗 [Issue #47826](https://github.com/BerriAI/litellm/issues/47826) | [PR #47969](https://github.com/BerriAI/litellm/pull/47969)  

- **CA 根证书更新**：捆绑的 CA 根证书现已更新，拒绝受污染的 eMudhra 链（G3 根），`v1.106.3` 将计划回滚此变更。  
  🔗 [PR #47969](https://github.com/BerriAI/litellm/pull/47969)

---

### **3. 新模型与硬件支持**  
- **新增 InferAll 提供商**：完整支持 OpenAI 兼容接口的 `inferall/<model>` 路由，仅需一个 API 密钥即可访问开放模型（$0/token）及付费提供商（OpenAI、Anthropic、Google、xAI）。  
  🔗 [PR #47890](https://github.com/BerriAI/litellm/pull/47890)  

- **Exa Search API 升级**：增强对 Exa 最新搜索参数、内容选项及响应保留的支持。流式处理拆分为独立 PR。  
  🔗 [PR #46525](https://github.com/BerriAI/litellm/pull/46525)

---

### **4. 性能与优化**  
- **流式响应修复**：vLLM 停止序列现在可在 `/v1/messages` 响应中正确报告为 `stop_sequence`，提升依赖停止逻辑客户端的响应保真度。  
  🔗 [PR #47981](https://github.com/BerriAI/litellm/pull/47981)  

- **SSE 帧结构保留**：响应流现在保留正确的事件帧结构（包括命名事件与终止标记），符合标准 SSE 期望。  
  🔗 [PR #47980](https://github.com/BerriAI/litellm/pull/47980)  

- **通配符模型可见性**：管理员可通过 UI 设置暴露通配符模型列表，无需逐请求覆盖即可提升发现性。  
  🔗 [PR #47979](https://github.com/BerriAI/litellm/pull/47979)

---

### **5. 稳定性与回归问题**  
- **高严重性**：  
  - **缓存命中花费计费异常**：当复用缓存响应时，`spend = 0` 但令牌用量仍被重放——导致计费语义模糊。该问题尚未解决。  
    🔗 [Issue #39057](https://github.com/BerriAI/litellm/issues/39057)  

  - **令牌计数器崩溃**：`image_detail="original"` 被 `token_counter` 拒绝，导致预调用验证失败，尽管其在上游 API 中是合法的。  
    🔗 [Issue #47327](https://github.com/BerriAI/litellm/issues/47327)  

- **中等严重性**：  
  - **无界错误体**：代理未限制上游错误体大小（最高达 114MB），可能导致事件循环阻塞与内存爆炸。  
    🔗 [Issue #34031](https://github.com/BerriAI/litellm/issues/34031)  

  - **PostgreSQL 连接耗尽**：在多工作器环境下，当达到 PostgreSQL `max_connections` 时，所有用户密钥均会失败。  
    🔗 [Issue #34479](https://github.com/BerriAI/litellm/issues/34479)  

- **进行中的修复**：  
  - `response_format` + `thinking` 在 Vertex Anthropic 上现返回 400 而非 500。  
    🔗 [PR #47981](https://github.com/BerriAI/litellm/pull/47981)  
  - 原生 `/v1/messages` 透传现可保留 `adaptive` 思考模式与 `effort` 设置。  
    🔗 [PR #41243](https://github.com/BerriAI/litellm/pull/41243)

---

### **6. 对应用开发者的影响**  
- **需立即行动**：检查部署中是否使用 `litellm==1.107.0` —— 若使用，请**立即升级**以避免潜在风险。  
- **计费与遥测注意**：请注意缓存请求显示花费为零但保留原始令牌数量；请相应审计您的遥测管道。  
- **流式可靠性**：使用最新代理版本以确保 `stop_sequence` 报告准确及 SSE 帧结构正确，尤其是集成 Claude Code 或自定义流消费者时。  
- **模型发现优化**：利用新的通配符可见性与 InferAll 提供商支持，简化多提供商标记路由，减少 API 密钥泛滥。  

> ✅ **建议**：在 `v1.106.3` 发布含 eMudhra 修复前，固定版本至 `1.106.x` 或 `1.108.x`。关注 [PR #47969](https://github.com/BerriAI/litellm/pull/47969) 获取更新。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-10-23**

---

### **1. 今日亮点**  
Unsloth 继续扩展其 AI 流水线能力，推出 *Flows*——一个基于节点的编辑器，可在 Studio 中直接构建 AI 工作流、故事游戏和 2D 世界。关键稳定性改进包括：对 macOS 平台 GPU 内存压力的更好处理（PR #14431）、修复 SDXL 文本反演提示损坏问题（PR #14846），以及在低内存条件下增强模型加载的鲁棒性。针对 `deepseek41` GGUF 上下文处理中的一个关键回归问题，已通过 PR #14838 修复。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告任何内容。*  
无新版本发布，也无破坏性 API/配置变更。但多个 PR 解决了模型加载和服务器端操作中的向后兼容性及边缘情况行为问题（例如，PR #14834 确保更新时 `unsloth-zoo` 配对正确）。

---

### **3. 新模型与硬件支持**  
- **模型架构**：DeepSeek-V4.1-Flash-1017 现在获得改进的上下文计算计账（PR #14838），并支持 Metal GPU 上的 DSpark 边车（PR #14431）。  
- **硬件后端**：  
  - 针对 AMD Ryzen AI MAX+ PRO 系统优化了 CPU/GPU 分载逻辑（报告于 Issue #14519）。  
  - 提升了 Windows 上 Intel XPU LoRA 推理的稳定性（Issue #14807）。  
- **量化支持**：为 MLX 图像引擎新增 Q5_0/Q5_1 GGUF 支持（PR #14839）；此前不支持的类型现在会正确拒绝，并提供更新后的错误提示信息。

---

### **4. 性能与优化**  
- **内存效率**：  
  - Flows 系统（PR #14730）实现模块化、可复用的流水线，开销极小。  
  - `studio/backend/utils/security/dataset_media.py` 现在防止未经授权的媒体访问（PR #14840）。  
- **延迟与吞吐量**：  
  - 在小型 SMT 主机上对 `sd.cpp` 线程数进行优化，避免不必要的性能损失（PR #14847）。  
  - 提示编码不再触发冗余的 `torch.cuda.empty_cache()` 调用，从而减少延迟波动（PR #14777）。  
- **推理加速**：  
  - FLUX.3 上采样器默认量化 (`UD-Q4_K_XL`) 现在被优先使用；保留回退至旧版 `Q4_K_M` 的机制（PR #14842, #14836）。  
  - CFG-并行权重探测现已嵌入大型推理权重中（PR #14844），提升一致性。

---

### **5. 稳定性与回归问题**  
- **严重崩溃**：  
  - `DeepSeek-V4.1-Flash-1017` 因无法识别架构（`deepseek41-dspark`）而加载失败——通过 PR #14838 修复（修正上下文计算逻辑）。  
  - Mac 用户在预填充阶段遭遇 Metal OOM 崩溃（PR #14431）；已通过预留 DSpark 边车内存解决。  
- **UI/UX 问题**：  
  - 长对话因依赖 CPU 嵌入导致推理前卡顿（Issue #14519）。  
  - `Stop` 按钮无法取消对话归档（Issue #14519）。  
  - macOS 聊天窗口中箭头键导航失效（Issue #14764）。  
- **数据损坏**：  
  - 自动压缩后附件变得不可读（Issue #14708）。  
  - 文本反演提示错误地在最后一个标记处聚合，而非在 EOS 处（PR #14846）。  

> ✅ *大多数问题已有修复方案：参见 [PR #14838](https://github.com/unslothai/unsloth/pull/14838)、[PR #14431](https://github.com/unslothai/unsloth/pull/14431)、[PR #14846](https://github.com/unslothai/unsloth/pull/14846)。*

---

### **6. 对应用开发者的意义**  
- **构建复杂工作流**：新推出的 *Flows* 系统（PR #14730）允许开发者设计可复用、可视化的 AI 流水线，适用于代理编排、RAG 链以及互动叙事类应用。  
- **提升跨平台可靠性**：在 Metal/MacOS 上使用 `--fit-target` 和 `--parallel` 标志时需谨慎；确保为边车（DSpark）预留足够的显存。  
- **处理大模板**：现支持高达 230KB 的自定义聊天模板（Issue #14841），可实现复杂的指令式提示工程。  
- **增强安全与合规性**：集成第三方后端（如 LiteLLM）时，可利用更新的媒体安全防护机制（PR #14840）和自定义头部支持（Issue #14811）。  
- **优化内存使用**：密切监控显存预算——尤其是在多 GPU 或混合精度（FP16/BF16）场景下。建议设置低于 5% 的下限值（Issue #13598）。  

> 🔗 探索最新功能：[Flows PR #14730](https://github.com/unslothai/unsloth/pull/14730)、[SDXL 修复 #14846](https://github.com/unslothai/unsloth/pull/14846)、[Metal OOM 修复 #14431](https://github.com/unslothai/unsloth/pull/14431)。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*