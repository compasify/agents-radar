# AI 基础设施日报 2026-10-13

> 生成时间: 2026-10-13 03:08 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-10-13**

---

### **1. 生态概览**  
2026年第四季度，AI基础设施领域呈现出高性能推理引擎、具备代理能力的本地运行时以及统一的LLM网关之间快速融合的趋势。各项目已不再孤立发展——vLLM与SGLang在分布式服务和推测性解码方面持续突破，Unsloth则拓展至自主网络代理领域。LiteLLM在多供应商间实现成本感知的编排，而llama.cpp在边缘计算与跨平台部署中持续占据主导地位。整个生态正迈向全栈代理流程，硬件特化优化（SM8x、ROCm Mi355X、Apple Silicon）已成为性能差异化的核心。

---

### **2. 活跃度对比**

| 项目       | 开放问题数 | 近24小时合并的PR | 近24小时发布数 | 状态 |
|------------|-------------|------------------|----------------|------|
| **vLLM**   | 472         | 9                | 无             | 活跃开发，聚焦稳定性 |
| **SGLang** | 458         | 6                | 无             | 推测性解码与NPU支持活跃 |
| **llama.cpp** | 615      | 10               | 无             | 稳定性危机；报告严重GPU崩溃 |
| **Ollama** | 532         | 5                | `v0.40.4-rc0`  | RC版本含严重回归 |
| **LiteLLM** | 524        | 4                | 无             | 专注代理稳定性与计费准确性 |
| **Unsloth** | 387        | 7                | `v0.1.906-beta`| Beta版新增代理功能 |

> ✅ *注：Ollama的发布包含关键回归；其余项目虽存在稳定性担忧，但工程推进速度强劲。*

---

### **3. 模型支持竞赛**

| 新模型 / 架构              | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4-Flash/DSV4.1** | ✅ (SM8x/RoCM追踪) | 🟡 (优化中) | ✅ (D3模型) | ⚠️ (通过llama.cpp) | — | — |
| **Qwen3.8-Flash-Next**     | ✅ (ROCm/Mi355X) | ✅ (CP+TP扩展) | — | — | — | — |
| **Cloudflare/clef-flash**  | ✅ (通过 `/v1/systemone`) | — | — | — | — | — |
| **Qwen-Image-2.1-Turbo**   | — | — | — | — | — | ✅ (8步生成) |
| **LTX-2.5 FP8/INT8**       | — | — | — | — | — | ✅ (预量化DiT) |
| **Prism PQ2_0/PTQ1_0 GGUF**| — | — | — | ✅ | — | — |
| **K2 Horizon (k2-horizon)** | — | — | — | — | — | 🔶 (功能请求) |

> 🏆 **领先者**：  
> - **Unsloth** 在新型模型类型（图像生成、代理就绪）上领先；  
> - **vLLM** 与 **SGLang** 在NVIDIA/AMD下一代LLM支持上占优；  
> - **Ollama** 是集成新GGUF格式最快的，但存在权衡。

---

### **4. 性能前沿**

| 优化方向                 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|--------------------------|------|--------|-----------|--------|---------|---------|
| **KV缓存卸载**           | ✅ (`compact_groups`, HIT_PENDING修复) | — | — | — | — | — |
| **推测性解码**           | ✅ (Mamba加速6倍，草稿填充优化) | ✅ (EAGLE, DSpark) | ✅ (多序列修复) | ❌ (回归) | ✅ (流式泄漏修复) | ✅ (M系列 +35%) |
| **量化精度**             | ✅ (SM12x上每前向NVFP4) | — | ✅ (Q2_K, Q4_K, Q1_0) | — | — | — |
| **内核融合与自动调优**   | ✅ (MoE路由融合，Triton内核) | ✅ (FlashInfer策略集成) | ✅ (FMA打包，RMSNorm) | — | — | — |
| **分布式服务**           | ✅ (TP/MTP，Mamba缓存清理) | ✅ (预填充-解码分离) | — | — | — | — |
| **边缘与移动端优化**     | — | — | ✅ (Hexagon, Vulkan, OpenVINO) | — | — | ✅ (M系列推测解码，显存降低) |

> 🔥 **前沿领导者**：  
> - **vLLM** 在内核级优化与异构硬件支持上全面领先；  
> - **SGLang** 在解耦推理与推测性解码效率方面表现突出；  
> - **llama.cpp** 在底层后端调优（Vulkan、Metal、Hexagon）方面卓越；  
> - **Unsloth** 在代理原生性能上开创先河（浏览器操作、图像生成）。

---

### **5. 层级定位**

| 项目       | 主要层级               | 次要角色                          | 核心差异化 |
|------------|------------------------|-----------------------------------|------------|
| **vLLM**   | 推理引擎               | 模型服务、网关集成                 | SM8x/ROCm对齐，Mamba加速 |
| **SGLang** | 推理引擎 + 代理SDK     | 解耦服务、推测性解码               | 单内核RFC，CP/TP灵活性 |
| **llama.cpp** | 本地运行时 / 边缘引擎 | 跨平台推理（CPU/GPU/NPU）         | 全后端覆盖，依赖极少 |
| **Ollama** | 本地运行时 + 网关      | 模型管理、CLI编排                  | GGUF优先，云模型访问 |
| **LiteLLM** | LLM网关 / 代理         | 成本核算、安全护栏                | 桥接对齐测试，W3C追踪 |
| **Unsloth** | 代理平台 + 训练框架    | 浏览器代理、图像扩散              | 自主网络交互，多模型服务器 |

> 📊 **定位总结**：  
> - **引擎层**：vLLM、SGLang（高吞吐、分布式）  
> - **运行时层**：llama.cpp、Ollama（边缘/本地部署）  
> - **网关层**：LiteLLM（成本感知编排）  
> - **代理层**：Unsloth（端到端自主）

---

### **6. 趋势信号**

1. **以代理为先的开发模式已成为主流**：  
   Unsloth的浏览器代理能力与SGLang的程序化KV缓存RFC表明，开发重心已从单纯推理转向**自主代理执行**。开发者必须面向**有状态、交互式工作流**进行设计。

2. **硬件专业化已成为必然要求**：  
   AMD ROCm（Mi355X）、NVIDIA SM8x/Ampere、Apple Silicon M系列及Hexagon后端已成为核心差异化要素。**任何项目都无法再依赖通用性能声明**——工程师必须在目标硬件上完成验证。

3. **推测性解码已超越贪心采样**：  
   vLLM的 `--enable-nan-fault-tolerance`、SGLang的非贪心JIT修复、Unsloth的M系列推测机制表明，**非确定性采样已进入生产可用阶段**，显著提升代理推理的鲁棒性。

4. **成本准确性已成为生产刚需**：  
   LiteLLM的成本对齐测试与计费修复（Gemini上下文缓存）反映出对**透明、可审计的推理经济模型**的日益增长需求——尤其在受监管或企业级环境中。

5. **稳定性权衡正变得普遍**：  
   Ollama的 `v0.40.4-rc0` 崩溃报告与llama.cpp的CUDA/Vulkan卡死现象凸显了**创新速度超过稳定性**的严峻矛盾。应用开发者应**避免在生产环境使用RC版本**，优先选择夜间构建或经验证版本。

> ✅ **开发者行动建议**：  
> - 高吞吐、可扩展的代理系统：使用 **vLLM + SGLang**。  
> - 基于浏览器的自主代理：部署 **Unsloth**。  
> - 边缘/移动端/嵌入式部署：选择 **llama.cpp**。  
> - 成本控制、多供应商路由：使用 **LiteLLM**。  
> - **所有RC版本务必在目标硬件上严格测试后再上线**。

---  
*生成时间：2026-10-13 | 数据来源：vLLM、SGLang、llama.cpp、Ollama、LiteLLM、Unsloth GitHub仓库*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-10-13**

---

### **1. 今日亮点**  
vLLM 项目持续加速对下一代模型与硬件的支持，关键进展包括针对 SM8x（Ampere）GPU 的 **DeepSeek-V4-Flash/DSV4.1** 兼容性支持，以及针对 Qwen3.8-Flash-Next 的 **ROCm/Mi355X** 性能优化。重要稳定性修复已合并，涵盖推测解码（`--mamba-cache-mode` 清理）和 NaN 故障容错；新提交引入细粒度量化控制（每前向选择 NVFP4）、并通过紧凑文件系统存储提升 KV 卸载效率。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新版本发布。*  
- **破坏性变更**：`--mamba-cache-mode` 已弃用且不再生效；`mamba_cache_mode="all"` 已通过 [PR #60043](https://github.com/vllm-project/vllm/pull/60043) 完全移除。  
- **新增 CLI 标志**：`--enable-nan-fault-tolerance`（及 `--enable-detect-nans-in-logits`）在 [PR #50283](https://github.com/vllm-project/vllm/pull/50283) 中引入，取代环境变量以实现更精细的引擎级控制。  
- **安全增强**：[PR #60988](https://github.com/vllm-project/vllm/pull/60988) 新增可选 FastAPI 保护中间件，用于进程内请求防护。

---

### **3. 新模型与硬件支持**  
- ✅ **新增模型支持**：通过 `/v1/systemone` 原生支持 **Cloudflare/clef-flash**，复用 Qwen3.5 基座与联合架构头 ([PR #61308](https://github.com/vllm-project/vllm/pull/61308))。  
- 🚀 **SM8x（Ampere: A100/A800, RTX 30xx）**：基于 [Issue #50576](https://github.com/vllm-project/vllm/issues/50576) 持续开发 DSV4-Flash 支持——目前因后端核函数缺失而受阻。  
- 🔧 **ROCm / AMD MI355X**：针对 **Qwen3.8-Flash-Next-Quark-MXFP4** ([Issue #59575](https://github.com/vllm-project/vllm/issues/59575)) 与 **GLM-5.3** ([Issue #57406](https://github.com/vllm-project/vllm/issues/57406)) 的性能追踪与优化正在进行中，核心函数调优同步推进。  
- 💾 **KV 卸载**：为基于文件系统的卸载引入实验性选项 `compact_groups: true`，以降低 CPU 存储开销 ([PR #58595](https://github.com/vllm-project/vllm/pull/58595))。

---

### **4. 性能与优化**  
- ⚡ **Mamba 加速**：将 mamba align block-table gather 核函数从 7 个 Triton 核融合为 1 个，实现所有输入形状下最高 **6 倍加速** ([PR #58737](https://github.com/vllm-project/vllm/pull/58737))。  
- 📈 **推测解码**：在 [PR #58633](https://github.com/vllm-project/vllm/pull/58633) 中并行化草稿输入填充，每个工作组节省 **最高 35.8μs/步**。  
- 🎯 **量化精度控制**：在 SM12x（Blackwell）上实现每前向选择的 NVFP4 W4A4/W4A16 专家调度，可根据 token 数量动态调整精度 ([PR #54617](https://github.com/vllm-project/vllm/pull/54617))。  
- 🔁 **核函数融合**：MoE 路由器现支持 post-top-k 评分逻辑 ([PR #57410](https://github.com/vllm-project/vllm/pull/57410))，启用更高效的融合路径。  
- 🛠️ **构建优化**：DeepGEMM 更新至最新版本（26/09/30），放宽稀疏 MQA 索引限制以提升兼容性 ([PR #61149](https://github.com/vllm-project/vllm/pull/61149))。

---

### **5. 稳定性与回归问题**  
- 🛑 **严重卡死**：在高并发场景下使用 DeepSeek-V4-Pro（TP=8，MTP 推测解码）时出现 `TP Worker hang → EngineDeadError` —— 详见 [Issue #41530](https://github.com/vllm-project/vllm/issues/41530)，评论区第 16 条。  
- 🌀 **CUDA Graph 死锁**：在 TP=2/4 上服务兼容 Qwen3.5 的 35B-A3B MoE 模型时，启用 `--fully-sharded-loras` 会出现间歇性死锁 ([Issue #60845](https://github.com/vllm-project/vllm/issues/60845))。  
- ❌ **内存访问崩溃**：在 H20（SM90）上高并发场景下，`dsv4_topk` MoE 核函数出现非法内存访问，通过设置 `max_num_seqs=256` 可缓解 ([Issue #56389](https://github.com/vllm-project/vllm/issues/56389))。  
- 🧩 **KV 卸载缺陷**：`HIT_PENDING` 缺少超时时间，可能导致客户端在写入停滞时无限等待 ([Issue #49829](https://github.com/vllm-project/vllm/issues/49829))。  
- ⚠️ **ROCm 加载失败**：由于 AMD 版本的 Qwen4ExpNGramEmbedding 层缺少 `weight_scale`，导致 Qwen3.8-Flash-Next-FP8 无法加载 ([Issue #58688](https://github.com/vllm-project/vllm/issues/58688))。

---

### **6. 对应用开发者的意义**  
- **对于 LLM 服务应用**：预期在 NVIDIA 和 AMD 硬件上实现与 **DeepSeek-V4-Flash** 及 **Qwen3.8-Flash-Next** 的更紧密集成。建议启用 `--enable-nan-fault-tolerance` 以避免无声错误输出。  
- **对于智能体与流式传输**：可利用新提出的 `ChatStreamProcessor` 共享方案 ([Issue #57572](https://github.com/vllm-project/vllm/issues/57572))，确保跨多个 API 的流式行为一致性。  
- **对于高吞吐系统**：使用新加入的 `--long-prefill-token-threshold-defer` 标志 ([PR #61080](https://github.com/vllm-project/vllm/pull/61080)) 优化长预填充处理，避免限流。  
- **对于部署工程师**：关注 KV 卸载场景中的 `HIT_PENDING` 停滞问题，若在 H20 上遇到崩溃，可尝试降低 `max_num_seqs`。在大规模部署中使用 `compact_groups` 选项以减少 CPU 存储占用。

> *敬请关注：vLLM 正快速向与前沿模型及异构硬件完全对齐迈进——建议优先使用夜间构建版本以获得最佳性能与稳定性。*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest – 2026-10-13

---

### **1. 今日亮点**

SGLang 在推测解码和拆分推理方面持续快速推进，修复了采样请求下 FlashInfer JIT 崩溃的关键问题，并持续推进 DeepSeek V4.1 的优化。新提交的 PR 实现了 NPU 上的 prefill-complete 支持，扩展了 GLM-5.3-Flash 的上下文并行能力，同时 monokernel RFC 表明将向统一的内核执行框架演进。

---

### **2. 发布与破坏性变更**

过去 24 小时内未报告任何发布或破坏性变更。

---

### **3. 新模型与硬件支持**

- ✅ **GLM-5.3-Flash**：PR #43972 添加对 colocated prefill CP + decode TP 与 DFlash2/MTP 的原生支持，实现跨 TP/CP 配置的高效扩展。
- ✅ **MiniCPM-V 4.7**：PR #43829 为 `openbmb/MiniCPM-V-4.7-*` 引入完整使用手册，提升模型可访问性。
- ✅ **NPU 支持扩展**：
  - PR #43970 实现 NPU 上的 `prefill-complete`。
  - PR #43845 修复 Ascend 后端 Mamba 检查点池中的卷积布局不匹配问题。
- ✅ **AMD ROCm (gfx942)**：Issue #43526 指出 FP8 GEMM blockscale 内核存在精度问题——已知回归，需修复。

---

### **4. 性能与优化**

- 🔧 **推测解码效率**：
  - PR #42803 通过在 token block 上并行化优化 EAGLE 的 KV 索引构建，显著降低长上下文（90k–170k）序列的延迟。
  - PR #43502 改进了 DSpark 草稿阶段逻辑，更合理地管理 SWA 池大小与前缀保留，提升高吞吐推测工作负载下的吞吐量。
- ⚙️ **DeepSeek V4.1 优化**：
  - PR #43838 在 TP2 下启用小批量解码融合，此前仅限于 TP4，为小规模部署解锁性能提升。
  - 持续重构 (#42245) 和 mHC SP+engram 融合 (#43065) 正致力于降低内存占用并加速解码路径。
- 🔄 **内核融合与自动调优**：
  - PR #43927 将 FlashInfer 默认策略集成至启动调优流程，确保无需手动干预即可选择最优内核。

---

### **5. 稳定性与回归**

| 严重性 | 问题 | 影响 | 状态 | 修复 PR |
|--------|------|--------|--------|--------|
| 🔴 严重 | **非贪婪采样请求下的推测解码崩溃** (`#43412`) | 由于捆绑 CUDA 环境中 FlashInfer JIT 失败，服务器在首个采样请求时即崩溃 | 开放 | 待定 |
| 🔴 严重 | **FlashInfer MIS 在 radix-cache 命中后使用全序列分隔符** (`#26618`) | 可能在智能体工作流中导致错误的注意力掩码 | 已关闭 | 通过 `ServerArgs._handle_multi_item_scoring()` 修补 |
| 🟡 高 | **PD 角色切换中的非法内存访问** (`#43557`) | 使用 `--disaggregation-mode decode` 时，在 decode → prefill → decode 切换过程中引擎崩溃 | 开放 | 待定 |
| 🟡 中 | **转录 multipart 上传缺乏大小限制** (`#43709`) | 存在通过无界上传引发拒绝服务攻击的风险 | 开放 | 待定 |
| 🟡 中 | **ROCm MI355 HiCache 性能差** (`#34611`) | 在真实智能体负载下吞吐下降 | 已关闭 | 尚无修复 |

> 💡 *注意：* 多个 CI 不稳定报告（`#42752`, `#17050`）表明基础设施持续不稳定，影响 PR 验证。

---

### **6. 对应用开发者的意义**

- **智能体与 RAG 工作负载**：期待新程序化 KV 缓存 RFC（`#27574`, `#30928`）带来的缓存复用提升——优先使用路由器级前缀预测以减少冗余计算。
- **推测解码用户**：若使用非贪婪采样，请避免使用 pip 安装包；建议使用系统 CUDA Toolkit，或等待 #43412 修复。考虑升级至 v0.5.21+ 以获得最新稳定性。
- **多节点部署**：Prefill-Decode 拆分现已在多数模型与并行策略下稳定（参见路线图 `#43699`）。可放心使用 `--enable-pd-role-switch` 实现动态工作负载均衡。
- **模型服务灵活性**：随着对 GLM-5.3、MiniCPM-V 4.7 及 NPU 后端支持的扩展，现在可针对多样化模型实现优化硬件对齐。请持续关注 ROCm/FPGA 特定回归，直至修复上线。
- **未来准备**：monokernel RFC（`#43949`）预示即将向持久化、融合内核执行演进——预计 2027 年第一季度模型规格与运行时引擎将实现更紧密集成。

🔗 [GitHub Issues](https://github.com/sgl-project/sglang/issues) | [Pull Requests](https://github.com/sgl-project/sglang/pulls)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp 摘要 – 2026-10-13**

---

### **1. 今日亮点**  
最新开发周期聚焦于稳定 VLLM D3 模型的推测解码与多序列推理功能，针对 CUDA 与 Metal 后端的关键修复解决了高负载场景下的崩溃问题。Vulkan 优化（FMA 打包、通过子组归约实现 RMSNorm）以及 Hexagon 后端改进（支持 Q1_0、电源模式控制）在多种硬件上显著提升了性能。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未发布新版本。但以下 PR 引入了重要行为变更：  
- **PR #30408**（`model: fix vllm d3 multi seq case`）修复了混合、非因果、多序列推测解码中的正确性问题——对依赖 `--spec-type=mtp` 或 `--draft-model` 且使用复杂路由逻辑的用户至关重要。[GitHub PR #30408](https://github.com/ggml-org/llama.cpp/pull/30408)  
- **PR #30383** 正式支持 `pplx-decider` 与 `vllm d3` 模型，提升对新兴决策类大模型的兼容性。[GitHub PR #30383](https://github.com/ggml-org/llama.cpp/pull/30383)

> ✅ **迁移提示**：使用 `vllm d3` 模型进行推测解码的用户应升级至至少提交 `b11572` 及以上版本，以避免无声输出偏差。

---

### **3. 新模型与硬件支持**  
- **模型支持**：  
  - 正式支持 **VLLM D3 模型**，包括 `pplx-decider`，并引入更严格的命名校验与更清晰的错误提示。  
  - 在 Hexagon 后端（高通芯片）新增实验性 **Q1_0 量化支持**。[GitHub PR #30122](https://github.com/ggml-org/llama.cpp/pull/30122)  

- **硬件与后端**：  
  - **Vulkan**：为 **Intel Arc Pro B65**（BMG G31 芯片变体）添加设备着色器数量定义。[GitHub PR #30431](https://github.com/ggml-org/llama.cpp/pull/30431)  
  - **Hexagon**：通过 `GGML_HEXAGON_POWER_MODE` 配置可选的 **HTP DCVS/HMX 电源模式**（从 `low_power_saver` 到 `burst`）。[GitHub PR #30423](https://github.com/ggml-org/llama.cpp/pull/30423)  
  - **OpenVINO**：修复 `try_make_kv_sliced_tensor()` 中动态维度处理问题；CI 现在支持构建仅 CPU 版本（`GGML_NATIVE=OFF`）。[GitHub PR #30350](https://github.com/ggml-org/llama.cpp/pull/30350)，[PR #30401](https://github.com/ggml-org/llama.cpp/pull/30401)

---

### **4. 性能与优化**  
- **CUDA**：  
  - 通过减少循环展开和优化临时变量清理，修复了 Q2_K 上的严重 **VGPR 溢出问题**（在 AMD GCN5 上性能提升约 15–20%）。[GitHub PR #29910](https://github.com/ggml-org/llama.cpp/pull/29910)  
  - 通过按列分组遍历而非逐列处理，提升 **AMX Q4_K 解码速度（+13% 生成吞吐）**。[GitHub PR #30429](https://github.com/ggml-org/llama.cpp/pull/30429)  

- **Vulkan**：  
  - 对 **f16 累加操作** 实现 FMA 指令打包（无需点积操作），降低内核开销。[GitHub PR #29877](https://github.com/ggml-org/llama.cpp/pull/29877)  
  - 使用子组归约优化 **RMSNorm**，在 Intel Arc B70 与 RTX 4060 Ti 上表现出可测量的性能提升。[GitHub PR #29882](https://github.com/ggml-org/llama.cpp/pull/29882)  

- **Hexagon**：  
  - 通过块行 DMA 调度优化 **CPY/CONCAT**，消除短行导致的延迟瓶颈。[GitHub PR #30341](https://github.com/ggml-org/llama.cpp/pull/30341)  

- **通用优化**：  
  - 在 **嵌入/重排序模型** 中通过跳过无 logits 输出的图结构分配日志缓冲区，减少内存占用（每线程最多节省 1 MiB）。[GitHub PR #30255](https://github.com/ggml-org/llama.cpp/pull/30255)

---

### **5. 稳定性与回归问题**  
今日报告的关键稳定性问题包括：  
1. **RTX 5090 笔记本** 在启用 `sm_120` + CUDA Graphs 时出现 GPU 停滞 / XID 8 崩溃（可通过设置 `GGML_CUDA_DISABLE_GRAPHS=1` 临时规避）。[Issue #27330](https://github.com/ggml-org/llama.cpp/issues/27330)  
2. **Vulkan 中 Flash Attention 崩溃**，由 MTP 推测解码期间查询头维度不匹配引发。[Issue #29419](https://github.com/ggml-org/llama.cpp/issues/29419)  
3. **Vulkan/ANV 上设备丢失 / O(N²) 性能退化**，因回退至标量路径所致。[Issue #27638](https://github.com/ggml-org/llama.cpp/issues/27638)  
4. **Metal `mul_mat_id` 内存损坏**，当单个 token 内专家 ID 重复超过 8 次时触发。[Issue #29821](https://github.com/ggml-org/llama.cpp/issues/29821)  
5. **AMD RX 7900 XTX** 在首次使用 `mmproj` 后出现 Vulkan `ErrorDeviceLost`。[Issue #30010](https://github.com/ggml-org/llama.cpp/issues/30010)  

> ⚠️ **注意**：其中多项为近期推测解码与 GPU 计算图增强引入的回归问题。修复正在推进或待审查中。

---

### **6. 对应用开发者的影响**  
- **谨慎使用 `--spec-type=mtp`** 搭配 `vllm d3` 模型——请确保版本不低于 `b11572`，以防贪婪解码输出异常。  
- **在 RTX 5090 笔记本上避免启用 CUDA Graphs**，直至确认 `GGML_CUDA_DISABLE_GRAPHS=1` 对您的工作负载安全。  
- **充分利用新优化**：适用于 Q2_K（AMD）、Q4_K（AMX）及 Q1_0（Hexagon）模型，尤其适合边缘或移动端部署。  
- **监控 Intel Arc GPU 上的 Vulkan 性能**；若遇到 O(N²) 预填充性能下降，请考虑禁用 Flash Attention。  
- **预期在 MoE 与嵌入工作流中获得更高效率**，得益于跳过日志缓冲区分配与更好的缓存复用。  

> 🔗 **实用提示**：使用 `llama-bench` 时搭配 `-fa 1` 与 `--n-prompt`，在上线前基准测试推测解码的稳定性与吞吐表现。  

---  
*摘要由 GitHub 数据生成：[ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-13**

---

### **1. 今日亮点**  
最新发布的 `v0.40.4-rc0` 版本为决策模型带来了关键更新（llama.cpp b11521），新增对 EmbeddingGemma 2 的原生支持，并在推理路由中进行了内部性能优化。然而，多个回归问题已浮现——最突出的是在 Apple Silicon 上因线程组限制导致的 MLX 内核崩溃，以及所有模型普遍出现 25–30% 的性能下降，凸显出在正式发布 v0.40.4 前亟需解决的稳定性问题。

---

### **2. 发布与破坏性变更**  
- **`v0.40.4-rc0`**（GitHub: [#18917](https://github.com/ollama/ollama/pull/18917))  
  - 将 `llama.cpp` 升级至提交 `b11521`，支持更优的决策模型处理及原生 `EmbeddingGemma 2` 支持。  
  - 在推理路由中引入已验证清单和已加载模型的复用机制，以降低开销 ([#18947](https://github.com/ollama/ollama/pull/18947))。  
  - *注意：* 该版本在 MLX 与 CUDA 后端引入严重回归；用户应避免在生产环境中使用，直至稳定版本发布。

---

### **3. 新模型与硬件支持**  
- **MLX 后端**：通过更新 JSON 状态提示处理逻辑，增强了对决策模型的支持 ([#18974](https://github.com/ollama/ollama/pull/18974))，但目前在 M 系列 Mac 上因内核线程组限制仍不稳定。  
- **新模型架构支持**：  
  - 通过 PR [#18967](https://github.com/ollama/ollama/pull/18967) 初步支持 **Prism 三值 GGUF（PQ2_0/PTQ1_0）**，解决了如 `Ternary-Bonsai-2-27B` 等模型的导入失败问题。  
  - **K2 Horizon 模型**（架构 `k2-horizon`）现处于功能请求阶段 ([#18642](https://github.com/ollama/ollama/issues/18642))，官方 GGUF 文件已可在 Hugging Face 获取。  
- **云功能**：在 ollama.com 上新增 `clef` 与 `clef-flash` 模型 ([#18969](https://github.com/ollama/ollama/pull/18969))。

---

### **4. 性能与优化**  
- **性能回归**：用户报告自 v0.40.1 以来，所有模型的吞吐量下降了 **25–30%** ([#18968](https://github.com/ollama/ollama/issues/18968))，评估日志显示每秒生成词元数显著下降。  
- **内存与内核优化**：  
  - 修复小 `num_ctx` 下多模态嵌入加载问题，改为根据实际上下文大小而非 `num_ctx` 来调整批处理大小 ([#18973](https://github.com/ollama/ollama/pull/18973))。  
  - 通过基于 *已评估* 词元而非缓存词元进行速率限制，提升了提示处理时间的准确性 ([#18964](https://github.com/ollama/ollama/pull/18964))。  
- **调度器效率**：PR [#18950](https://github.com/ollama/ollama/issues/18950) 提议在请求间 `shift` 设置不同时避免不必要的模型重载，有助于降低动态场景下的延迟。

---

### **5. 稳定性与回归问题**  
**严重（高危）：**  
- **Apple Silicon 上的 MLX 内核崩溃**：多份报告指出，在 M2 Max/M3 Pro 设备上运行 `qwen3.6:35b-mlx`、`gemma4:31b` 及 `qwen3.8:27b` 时出现 `panic: mlx: Maximum threads per threadgroup is 896 but requested 960/1024` 错误 ([#18940](https://github.com/ollama/ollama/issues/18940), [#18966](https://github.com/ollama/ollama/issues/18966), [#18856](https://github.com/ollama/ollama/issues/18856))。  
  - *修复 PR*：[#18974](https://github.com/ollama/ollama/pull/18974) 修复了提示格式问题，但未解决线程组溢出限制。目前尚无针对线程组超限的解决方案。

**高危：**  
- **RTX 5090 上的 CUDA 崩溃**：在 Windows 上使用 Cohere MoE 模型进行提示评估时发生非法内存访问（`0xc0000409`）([#18642](https://github.com/ollama/ollama/issues/18642))。  
- **Windows GPU 发现失败**：自动更新后，`ggml-cuda.dll` 被保留为 `.tmp` 文件，导致回退至 CPU 运行 ([#18712](https://github.com/ollama/ollama/issues/18712))。  
- **云模型中忽略 JSON Schema**：尽管启用了模式校验，`qwen3-coder:480b-cloud` 仍返回非结构化 JSON ([#12362](https://github.com/ollama/ollama/issues/12362))。

**中等危急：**  
- 当模型路径为 NTFS 挂载点时，`ollama list` 返回空列表 ([#18921](https://github.com/ollama/ollama/issues/18921))；已在 PR [#18949](https://github.com/ollama/ollama/pull/18949) 中修复。  
- 当设置 `format: "json"` 时，工具调用会失败 ([#18944](https://github.com/ollama/ollama/issues/18944))。

---

### **6. 对应用开发者的启示**  
- **避免在生产环境使用 `v0.40.4-rc0`**，尤其是在 MLX 或 CUDA 平台——预计会出现崩溃及严重的性能下降。  
- 使用 `OLLAMA_KEEP_ALIVE=-1` 与 `OLLAMA_CONTEXT_LENGTH=131072` 时需谨慎；调度器重载可能触发不必要的模型重新加载 ([#18950](https://github.com/ollama/ollama/issues/18950))。  
- 对于使用工具调用并期望结构化输出的智能体，**不要依赖 `format: "json"`**，尤其在使用云模型时——模式合规性不一致 ([#12362](https://github.com/ollama/ollama/issues/12362), [#18944](https://github.com/ollama/ollama/issues/18944))。  
- 通过系统提示预热 KV 缓存（参考提议中的 [#18952](https://github.com/ollama/ollama/issues/18952)) 可缓解启动延迟——建议在功能上线前手动实现。  
- 监控 Apple Silicon 平台上的 MLX 特有问题；若遭遇崩溃，可降级至 `0.35.1` 版本。

> 🔗 *所有 GitHub 链接均已在上方提供，可直接访问相关问题、PR 与发布记录。*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 消息简报 – 2026-10-13**

---

### **1. 今日重点**  
LiteLLM 生态系统持续夯实生产级大模型编排基础，关键修复涵盖成本核算、代理稳定性及安全护栏集成。核心进展包括在 Azure、Claude 5 与 Bedrock Converse 模型之间增强桥接成本一致性测试，确保通过统一 API 路由请求时计费准确。此外，新提交的 PR 解决了长期存在的认证、缓存和流式处理错误处理问题——尤其针对 `max_parallel_requests` 泄漏以及流式过程中出现的 `NoneType` 崩溃。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新版本发布。*  
但多项高影响变更正在推进中：  
- **成本一致性测试** 已扩展至多个桥接接口（`/v1/messages` → `/v1/responses`、`gpt-6`、`Claude 5`、`Bedrock Converse`），通过 [PR #46139](https://github.com/BerriAI/litellm/pull/46139)、[PR #46140](https://github.com/BerriAI/litellm/pull/46140) 等实现。这些测试现已验证桥接调用与原生服务商端点的计费完全一致。  
- **Gemini 上下文缓存创建令牌的计费修复** ([PR #46144](https://github.com/BerriAI/litellm/pull/46144)) 确保 `cachedContents` 的令牌使用被正确计入，解决了缓存生成场景下的计费不足问题。  
- **支持 W3C `traceresponse` 头部** ([PR #42079](https://github.com/BerriAI/litellm/pull/42079)) 通过在网关响应中暴露 trace ID 提升可观测性。

---

### **3. 新模型与硬件支持**  
*今日未新增模型或硬件后端。*  
但在 **Anthropic Claude Code** 和 **Bedrock Converse** 集成方面取得显著进展：  
- 修复 Bedrock 中 `per-turn-control-2026-07-01` 过滤器行为异常问题 ([Issue #45411](https://github.com/BerriAI/litellm/issues/45411))。  
- AWS Bedrock 模型自动发现功能增强 ([Issue #43568](https://github.com/BerriAI/litellm/issues/43568)) 仍处于开放讨论状态，但进展积极。

---

### **4. 性能与优化**  
*今日未落地直接的吞吐量或延迟优化，但关键优化正在进行中：*  
- **流式错误处理**：修复在分块处理期间因 `unsupported operand type(s) for +: 'NoneType' and 'int'` 导致的崩溃循环问题 ([Issue #46047](https://github.com/BerriAI/litellm/issues/46047))，防止流式工作流中断。  
- **并行请求数限制泄漏**：`websearch_interception` 流会永久占用一个 `max_parallel_requests` slot ([Issue #46093](https://github.com/BerriAI/litellm/issues/46093))，在高吞吐量代理系统中可能导致并发上限耗尽。  
- **Redis SSL 配置缺陷** ([Issue #34614](https://github.com/BerriAI/litellm/issues/34614)) 导致 v1.93.0 版本中因不支持 `ssl_check_hostname` 参数引发 Redis 缓存失败——此为已知回归问题，影响可扩展性。

---

### **5. 稳定性与回归问题**  
今日报告了若干顶级稳定性问题：

| 严重性 | 问题 | 状态 | 修复/影响 |
|--------|------|--------|-----------|
| 🔴 高 | `websearch_interception` 流中的 `max_parallel_requests` 泄漏 ([#46093](https://github.com/BerriAI/litellm/issues/46093)) | 打开 | 可导致代理流水线拒绝服务；尚未提交 PR |
| 🔴 高 | v1.93.0 中 Redis 缓存因 `ssl_check_hostname` 错误失败 ([#34614](https://github.com/BerriAI/litellm/issues/34614)) | 打开 | 破坏分布式缓存；影响横向扩展 |
| 🟡 中 | 非标准状态码的 SSE 错误被静默丢弃 ([#31284](https://github.com/BerriAI/litellm/issues/31284)) | 打开 | 导致回退/冷却逻辑无法触发 |
| 🟡 中 | `A2AConfig` 静默丢弃 `temperature`、`max_tokens`、`top_p` ([#45944](https://github.com/BerriAI/litellm/issues/45944)) | 打开 | 破坏 API 合约；引发无声配置错误 |

> ✅ **已修复**：`Gemini 3` 温度注入问题 ([#38663](https://github.com/BerriAI/litellm/issues/38663))，以及 `proxy-admin JWT` 绕过 `max_budget` 限制问题 ([#41226](https://github.com/BerriAI/litellm/issues/41226))。

---

### **6. 对应用开发者的影响**  
- **使用带 `web_search` 工具的流式代理时需谨慎**：由于不受控的槽位消耗，可能耗尽并行请求数配额 ([#46093](https://github.com/BerriAI/litellm/issues/46093))。建议在修复前启用限流或禁用该工具。  
- **验证你的成本假设**：近期 PR 已确认跨桥接接口严格的成本一致性检查（如 `/v1/messages` → `/v1/responses`）。若依赖自定义定价层级，请确保其映射正确——特别是 `gpt-6`、`Claude 5` 与 Azure 部署场景。  
- **若使用 Redis 缓存，请避免使用 v1.93.0** —— `ssl_check_hostname` 缺陷可能彻底破坏你的推理流水线 ([#34614](https://github.com/BerriAI/litellm/issues/34614))。  
- **尽早升级**：诸如 `gemini` 成本计费修复 ([#46144](https://github.com/BerriAI/litellm/pull/46144)) 与 `A2AConfig` 参数处理修复 ([#45944](https://github.com/BerriAI/litellm/issues/45944)) 可防止生产环境中出现无声的数据漂移。

> 💡 **实用提示**：密切监控 `cost_breakdown` 与 `usage` 字段——近期修复揭示了计费与实际令牌数之间的细微差异，尤其是在 Gemini 与 Bedrock 流程中。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# **Unsloth Digest – 2026-10-13**

---

### **1. 今日亮点**  
Unsloth v0.1.906-beta 引入了突破性的浏览器代理功能，使模型能够通过点击、滚动、输入和脚本执行与网页进行交互——解锁了自主代理工作流。此次发布还新增对 **Qwen-Image-2.1-Turbo** 的支持，仅需 8 步即可生成图像，同时在 M 系列芯片上实现了更快的 MoE GGUF 推理和推测解码。这些进展显著拓展了 Unsloth 作为全栈 AI 代理平台的角色。

---

### **2. 发布与重大变更**  
- **v0.1.906-beta**:  
  - 浏览器代理现支持直接鼠标操作（`browser_click` 在 x,y 坐标处）、拖拽操作以及 JavaScript 执行（通过 PR #13505）。  
  - `UNSLOTH_RETURN_LOGITS` 环境变量在训练过程中现在会被保留（修复 Issue #3071）。  
  - `unsloth studio` CLI 新增 `--models-dir PATH` 标志（PR #13435），用于指定自定义本地模型目录。  
  - `UNSLOTH_STUDIO_KEEP_LEGACY=0` 现已在 Docker（`run.sh`）中正确传播（PR #13488）。  

> 🔗 [GitHub Release v0.1.906-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.906-beta)

---

### **3. 新模型与硬件支持**  
- ✅ **Qwen-Image-2.1-Turbo**: 已添加原生支持；使用优化的扩散管道，仅需 **8 步** 即可生成图像。  
- ✅ **LTX-2.5 fp8/int8**: 来自 `unsloth/LTX-2.5-FP8` 的预量化 DiT 现可直接加载，避免了昂贵的按需量化过程（PR #13516）。  
- ✅ **ROCm (AMD)**: 持续优化针对 AMD GPU（如 W7900/W7500）的性能，提升内存管理效率和模型加载稳定性。  
- ✅ **多本地模型服务器**：用户现在可同时运行多个服务器，每个服务器搭载不同模型及 llama.cpp 配置（Issue #8488）。  

> 🔗 [Qwen-Image-2.1-Turbo 模型页面](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)  
> 🔗 [LTX-2.5-FP8 预量化 DiT](https://huggingface.co/unsloth/LTX-2.5-FP8)

---

### **4. 性能与优化**  
- 🚀 **更快的 MoE GGUF 推理**：通过新的内核优化，在 MoE 模型服务中观察到显著加速（具体细节未明确，见发布说明）。  
- ⚡ **M 系列芯片上的推测解码**：已启用苹果硅芯片（M1/M2/M3/M4），早期基准测试显示令牌生成吞吐量最高提升约 **~35%**。  
- 🧠 **文本扩散训练**：新增对微调文生图模型（如 LTX-2.5、Qwen-Image）的支持，集成训练流程（PR #13505）。  
- 💾 **降低显存压力**：修复在 32k 上下文长度下对 Qwen2.5 72B 4bit 进行微调时的 OOM 问题（Issue #2937）；现可在 A800 上稳定运行。  

> 🔗 [性能基准测试（内部）](https://unsloth.ai/blog/llama3-3) *(注：官方文档引用此前性能提升)*

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 修复/临时方案 |
|--------|------|-------|---------------|
| 高 | **浏览器代理在拖拽/释放时崩溃** | 开放 | PR #13505 待审核 |
| 高 | **桌面应用窗口缩放失败（Wayland）** | 开放 | Issue #12845 – GTK/Wayland 合成器冲突 |
| 中 | **音频模型选择器显示无效模型** | 开放 | PR #13517 修复标签、搜索与排序 |
| 中 | **桌面端拖拽上传文件功能失效** | 开放 | Issue #13473 – 无错误日志，界面反馈缺失 |
| 低 | **即使勾选“不卸载”仍保留在内存中** | 已关闭 | Issue #10341 – 已在 v0.1.806-beta+ 中修复 |

> 🔗 [关键问题仪表盘](https://github.com/unslothai/unsloth/issues?q=is%3Aissue+is%3Aopen+label%3Abug+sort%3Aupdated-desc)

---

### **6. 对应用开发者的意义**  
开发者现在可利用 Unsloth 的浏览器代理构建 **自主网络代理**，实现对导航、表单填写和 DOM 交互的全面控制——非常适合科研、客户支持机器人或数据提取工具。随着对 **Qwen-Image-2.1-Turbo** 与 **LTX-2.5** 的支持，图像生成工作流比以往更快速、更易用。新增的 **多服务器模式** 支持并行模型部署（如推理 + 视觉模型），对复杂代理系统至关重要。  

生产环境建议：  
- 使用 `--models-dir` 以确保本地模型路径一致。  
- 训练时避免使用 `os.environ["UNSLOTH_RETURN_LOGITS"] = "1"` —— 此设置现已正确保留。  
- 监控 ROCm 环境中的显存泄漏问题（如 AMD W7900），直至后续更新。  

> 🔗 [代理开发指南（Unsloth Studio）](https://docs.unsloth.ai/studio/agents)

---  
*摘要生成时间：2026-10-13 | 来源：[unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*