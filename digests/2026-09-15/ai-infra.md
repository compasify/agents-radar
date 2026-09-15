# AI 基础设施日报 2026-09-15

> 生成时间: 2026-09-15 00:52 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-09-15**

---

### **1. 生态概览**  
2026年第三季度，AI推理基础设施领域呈现出快速专业化与向代理型工作负载汇聚的特征，从传统的单体服务架构转向模块化、分布式系统，以优化长上下文处理、推测性解码和多模型编排。各项目正聚焦于大规模场景下的性能表现——尤其在AMD MI35x、NVIDIA H20/SM120及Apple Silicon等新兴硬件上——同时着力解决高并发环境中的关键稳定性问题。MoE架构的兴起、混合量化（如MXFP8/NVFP4）以及分布式KV缓存系统的应用，标志着在多样硬件上高效部署万亿参数模型的趋势日益明显。

---

### **2. 活跃度对比**  

| 项目       | 开放问题（↑） | 合并的PR（↑） | 最近发布 | 状态 |
|---------------|------------------|------------------|----------------|--------|
| vLLM          | 18               | 27               | `v0.29.0`      | 稳定 |
| SGLang        | 22               | 19               | 无             | 活跃开发 |
| llama.cpp     | 15               | 14               | **v0.4.1**     | 重大变更 |
| Ollama        | 16               | 11               | `v0.34.1-rc1`  | RC版 |
| LiteLLM       | 12               | 10               | 无             | 已修复 |
| Unsloth       | 11               | 13               | v0.1.808-beta  | 测试版 |

> 🔍 *vLLM在问题数量和PR活动方面均领先，反映出对核心推理优化的高强度工程投入。llama.cpp发布v0.4.1标志着模型支持和后端稳定性的重要里程碑。*

---

### **3. 模型支持竞赛**  

| 模型 / 架构             | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1-Flash**         | ✅ (SWA限定重放) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **MoE (Nemotron-3, MegaMoE)**   | ✅ (RFC: 增量卸载) | ✅ (在B300/H20上崩溃) | ❌ | ❌ | ❌ | ❌ |
| **Qwen3.8-Flash-Next-FP8**     | ✅ (稳定性修复中) | ❌ (严重崩溃) | ❌ | ❌ | ❌ | ❌ |
| **SenseNova-U1/U1.5**           | ⚠️ (跟踪中) | ✅ (CI测试) | ✅ (通过PR #28919) | ✅ (功能请求) | ❌ | ✅ (目录同步) |
| **Maple 20B-A1B, Tencent Hy 4** | ❌ | ❌ | ✅ (v0.4.1) | ❌ | ❌ | ❌ |
| **Gemma 4**                     | ❌ | ❌ | ❌ | ❌ | ✅ (Mantle) | ❌ |
| **GLM-5.3-Flash**               | ❌ (词序混乱) | ❌ (推测解码时崩溃) | ❌ | ❌ | ❌ | ❌ |

> 🏆 **胜出者：llama.cpp** —— 对新GGUF模型（Maple、Hy 4、Spark2.5）的采纳速度最快。  
> 🥈 **亚军：SGLang 与 vLLM** —— 在DeepSeek-V4.1和MoE支持上势头强劲，但存在显著稳定性退化。  
> 🥉 **新锐力量：Unsloth** —— 在本地模型发现与UI集成方面领先，尤其适用于容器化环境。

---

### **4. 性能前沿**  

| 关注领域                 | 领先项目                          | 关键进展 |
|----------------------------|-------------------------------------------|------------------|
| **KV缓存优化**  | vLLM, SGLang, llama.cpp                   | SWA限定重放（vLLM）、HiCache混合池化（SGLang）、DFlash重扫描修复（vLLM）、FP4/KV存储（SGLang） |
| **推测性解码**   | vLLM, SGLang                              | FlashMLA + DFlash调优（vLLM）、PP + EAGLE/MTP兼容性（SGLang）、SM120崩溃缓解 |
| **量化与精度** | vLLM, SGLang, llama.cpp               | MXFP8/NVFP4（vLLM）、FP4 KV（SGLang）、CUDA F32回退（llama.cpp） |
| **分布式服务**    | SGLang, vLLM                              | 分布式KV缓存（SGLang路线图）、异步TP + 序列并行（vLLM） |
| **内核级优化** | vLLM, SGLang, llama.cpp              | Triton内核修复（vLLM）、RDNA3融合MoE（llama.cpp）、FlashInfer + MTP崩溃（SGLang） |

> 📈 **趋势**：内核级调优（Triton、FlashMLA、FlashInfer）已成为实现峰值吞吐量的核心——尤其在高端GPU（H20、SM120、MI355X）上表现突出。

---

### **5. 层级定位**  

| 项目       | 主要层级                | 核心差异化优势 |
|---------------|------------------------------|---------------------|
| **vLLM**      | **高性能推理引擎** | 针对GPU集群的吞吐量、低延迟、MoE及推测性解码进行深度优化 |
| **SGLang**    | **代理型推理框架** | 专为代理流水线设计：分布式KV、推测性解码、异步执行、工具调用保真度 |
| **llama.cpp** | **本地运行时 / 边缘执行** | 支持CPU/GPU灵活切换，原生支持GGUF，提供Vulkan/SYCL/CUDA后端；适合边缘与离线场景 |
| **Ollama**    | **开发者友好的本地网关** | 简化命令行接口，针对MLX/Apple Silicon优化，通过API/服务器管理模型 |
| **LiteLLM**   | **多提供商推理网关** | 统一API层，支持成本追踪、速率限制、预算控制及跨云路由 |
| **Unsloth**   | **代理工作室与用户体验平台** | 全流程代理体验：沙箱隔离、聊天回放、模型发现、Docker集成 |

> 🧩 **层级洞察**：该生态已不再局限于推理引擎本身——开发者需要**编排层**（LiteLLM）、**代理平台**（Unsloth）和**本地运行时封装**（Ollama、llama.cpp）来构建生产级应用。

---

### **6. 趋势信号与开发者指南**  

#### **行业趋势提炼**：
1. **MoE扩展已成现实**：vLLM RFC #38256提出的增量专家卸载机制，以及SGLang、vLLM对完整MoE的支持，表明超过1000亿参数的模型正可在中端硬件上部署。
2. **混合量化主导地位确立**：MXFP8、NVFP4、FP4、W4A8已成标配——不仅用于压缩，更成为性能优化的关键手段（vLLM、SGLang）。
3. **分布式代理工作负载成为新基准**：SGLang聚焦分布式KV缓存与流水线并行，反映了从单模型推理向多阶段代理工作流的转变。
4. **稳定性优先于功能**：尽管功能持续激进推进，多个项目报告出现**严重崩溃**（H20、SM120、B300），表明实际部署中性能提升正被稳定性问题所抵消。
5. **硬件多样性加速演进**：ROCm生态扩展（vLLM、SGLang、Unsloth）、NPU支持（Ollama）以及Apple Silicon优化（Ollama、Unsloth），标志着对NVIDIA主导地位的突破。

#### **开发者应重点关注**：
- ✅ **优先保障稳定性而非追逐前沿特性** —— 避免在H20上使用`max_num_seqs > 256`（vLLM），禁用Mamba的`mixed-chunk`（SGLang），监控Apple Silicon上的MLX内存占用（Ollama）。
- ✅ **规划MoE可扩展性** —— vLLM的增量卸载RFC将使像Nemotron-3 Super-120B这样的模型可在8×A100上部署。
- ✅ **使用LiteLLM构建多租户网关** —— 近期修复确保计费准确与速率限制有效，对SaaS和API产品至关重要。
- ✅ **利用Unsloth的本地模型发现能力**，若使用基于Docker的代理栈——与Ollama/LM Studio无缝集成，节省带宽与时间。
- ✅ **关注夜间构建版本** —— vLLM与SGLang迭代迅速；稳定版可能滞后于关键修复。

> 🔮 **总结**：未来AI基础设施的成败不在于孤立的引擎，而在于**协同、可观测且具备韧性的完整技术栈**，其中推理引擎、网关与代理平台能在真实负载下无缝协作。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-09-15

---

### **1. 今日亮点**  
vLLM 项目持续深化对 DeepSeek-V4.1 与 MoE 架构的支持，多个 PR 推进了推测解码（SWA-bounded replay）、FlashMLA KV 记录优化以及 DFlash 性能调优。关键稳定性修复解决了在 H20 与 SM120 GPU 上高并发场景下 Triton 内核的非法内存访问问题，同时新增的遥测与错误处理改进显著提升了分布式部署中的可观测性。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告任何内容。*  
未发布新版本或破坏性 API/配置变更。最新稳定版仍为 `v0.29.0`。

---

### **3. 新模型与硬件支持**  
- ✅ **DeepSeek-V4.1-Flash**：通过 [#56227](https://github.com/vllm-project/vllm/pull/56227) 合并了完整的编码器侧 SWA 限制重放支持，并通过 [#56752](https://github.com/vllm-project/vllm/pull/56752) 完成了解码器侧完成支持。该功能实现了高效的前缀缓存机制，减少了冗余的 KV 存储。  
- ✅ **FlashMLA V4.1 KV 记录**：新增 MXFP8/NVFP4 支持及融合注意力内核，提升精度与吞吐量 ([#56893](https://github.com/vllm-project/vllm/pull/56893))。  
- ✅ **ROCm 支持扩展**：修复多解码 P/D 分离场景下的路由竞争条件问题 ([#51681](https://github.com/vllm-project/vllm/pull/51681))，并为 MiniMax-M3 启用 AITER QK-norm 融合 ([#54535](https://github.com/vllm-project/vllm/pull/54535))。  
- ✅ **CPU 内存利用率 CLI 别名**：新增 `--cpu-memory-utilization` 作为 `--gpu-memory-utilization` 的别名，以减少仅 CPU 模式下的混淆 ([#56547](https://github.com/vllm-project/vllm/pull/56547))。

---

### **4. 性能与优化**  
- 📈 **DFlash 推测解码优化**：针对混合 GDN 模型在长上下文（约 185k tokens）下因每轮完整 KV 重扫导致的性能净下降问题（[#54691](https://github.com/vllm-project/vllm/issues/54691)）；正在推进按序列长度禁用钩子的实现。  
- ⚡ **DeepSeek-V4.1 在 ROCm（MI355X）上的表现**：在 8x MI355X（TP4）上并发度为 1 时测得 35.89 tok/s，单卡约 8.97 tok/s —— 显现出进一步优化的巨大潜力 ([#56506](https://github.com/vllm-project/vllm/issues/56506))。  
- 🔍 **性能分析增强**：CUDA graph 捕获分析已扩展至 V2 模型运行器和编码器路径 ([#54061](https://github.com/vllm-project/vllm/pull/54061))，可更深入洞察推理瓶颈。  
- 🧠 **MoE 专家卸载 RFC**：提出基于 GPU 缓存 + 异步流水线的增量式 MoE 专家卸载方案 ([#38256](https://github.com/vllm-project/vllm/issues/38256)) —— 对在较小硬件上运行超过显存容量的模型至关重要。

---

### **5. 稳定性与回归问题**  
- ❌ **严重崩溃**：在 **NVIDIA H20 (SM90)** 上，当 `max_num_seqs > 256` 时，`dsv4_topk` MoE 路由内核在高并发下出现非法内存访问 —— 已通过将 `max_num_seqs` 降至 256 进行缓解 ([#56389](https://github.com/vllm-project/vllm/issues/56389))。  
- ❌ **SM120 GPU 崩溃**：FlashInfer + MTP 推测解码在 DGX Spark（SM121）上使用 GQA=16 模型时因非法内存访问导致崩溃；Triton 后端运行正常 ([#37754](https://github.com/vllm-project/vllm/issues/37754))。  
- ❌ **GLM-5.3-Flash “乱码” 退化**：多轮代理式使用导致重复 token 输出 —— 疑似采样或上下文累积问题 ([#56605](https://github.com/vllm-project/vllm/issues/56605))。  
- ❌ **批处理不变性破坏**：在启用序列并行 + 异步 TP 时（`VLLM_BATCH_INVARIANT=1`），批次输出不一致 —— 影响确定性推理 ([#56370](https://github.com/vllm-project/vllm/issues/56370))。  
- ⚠️ **RDNA3 融合 MoE Bug**：硬编码的 2× 门控激活因子破坏了非门控（ReLU2）模型（如 Nemotron-3 on gfx1100）—— 已在 PR [#56790](https://github.com/vllm-project/vllm/pull/56790) 中修复。  

> ✅ **修复进行中**：PR #56790（RDNA3）、#56389（H20）、#56370（批处理不变性）正在积极处理中。

---

### **6. 对应用开发者的启示**  
- **在 H20 上部署高并发的 DeepSeek-V4.1 时需谨慎** —— 在修复落地前，建议将 `max_num_seqs` 限制在 256。  
- **充分利用 DeepSeek-V4.1 的新 SWA 限制重放功能**，以降低 KV 缓存开销，在长上下文场景中提升效率。  
- **在 SM120/GPU-121 硬件上使用 FlashInfer + MTP 推测解码时可能不稳定** —— 必要时可回退至 Triton 后端。  
- **在使用异步 TP 或序列并行时注意批处理不变性行为**；若需确定性输出，可临时禁用 `VLLM_BATCH_INVARIANT=1`。  
- **规划未来 MoE 扩展能力**，通过增量卸载方案实现大型 MoE 模型（如 Nemotron-3 Super-120B）在中端硬件上的部署。  
- **升级至最新 nightly 构建版本**，以获得 ROCm 与 CUDA 优化收益，尤其适用于多模态与推测解码工作负载。

---  
*数据来源：[vLLM GitHub](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-09-15

---

### **1. 今日亮点**

SGLang 继续在面向智能体工作负载的可扩展、高性能推理方向上推进，关键进展包括分布式 KV 缓存系统以及推测解码兼容性的突破。重要成果包括修复了在高并发负载下 Qwen3.8-Flash-Next-FP8 出现的重大崩溃问题，并持续优化 HiCache 混合缓存池行为的稳定性。项目同时积极解决 NVIDIA 机密计算（CC）环境下的性能瓶颈，并增强对 AMD ROCm 及 NPU 后端的支持。

---

### **2. 发布与破坏性变更**

*过去 24 小时内无新版本发布或破坏性变更报告。*

---

### **3. 新模型与硬件支持**

- **SenseNova-U1/U1.5**：通过 [Issue #37742](https://github.com/sgl-project/sglang/issues/37742) 跟踪集成，基于官方参考实现。
- **AMD ROCm 支持**：针对 MI35x 扩展了 `AgentX Qwen3.5 MXFP4 + MTP tp2` 的 CI 测试 ([PR #38812](https://github.com/sgl-project/sglang/pull/38812))，并包含 gfx950 上的 PTPC FP8 KDA 预测 ([PR #38764](https://github.com/sgl-project/sglang/pull/38764))。
- **NPU 优化**：在 Ascend 采样中新增设备同步规避逻辑 ([PR #39404](https://github.com/sgl-project/sglang/pull/39404))，并修复了 NPU 上路由器 GEMM 输出类型问题 ([PR #34861](https://github.com/sgl-project/sglang/pull/34861))。
- **扩散运行时**：CLI 现在在后端自动检测过程中避免加载扩散运行时 ([PR #39407](https://github.com/sgl-project/sglang/pull/39407))。

---

### **4. 性能与优化**

- **推测解码与流水线并行**：推进 PP 与 EAGLE/MTP 推测解码之间的兼容性改进 ([PR #30775](https://github.com/sgl-project/sglang/pull/30775))，提升仅通过 PCIe 连接的多 GPU 系统上的扩展能力。
- **机密计算（CC）**：修复 Blackwell GPU 上 CC 环境下 D2H 回读序列化的问题 ([PR #36810](https://github.com/sgl-project/sglang/pull/36810), [PR #31447](https://github.com/sgl-project/sglang/pull/31447))，恢复解码重叠与调度器吞吐量。
- **内存效率**：优化 HiCache 索引存储，压缩 DSA 索引主机层 ([PR #38426](https://github.com/sgl-project/sglang/pull/38426))，并修复 MLA 回退中的 KV id 扩展问题 ([PR #39487](https://github.com/sgl-project/sglang/pull/39487))。
- **DeepSeek-V4 性能**：持续聚焦 SM100/SM103 优化，包括 TRT-LLM 注意力集成 ([Issue #33636](https://github.com/sgl-project/sglang/issues/33636)) 和 FP4 KV 存储 ([Issue #38902](https://github.com/sgl-project/sglang/issues/38902))。

---

### **5. 稳定性与回归问题**

| 问题 | 严重性 | 摘要 | 修复状态 |
|------|----------|--------|------------|
| [Issue #37633](https://github.com/sgl-project/sglang/issues/37633) | 严重 | 在约 22 个并发请求下，QSA 预填充路径发生硬崩溃（Qwen3.8-Flash-Next-FP8, H20 TP8） | 尚未提交修复 PR；通过 `CUDA_LAUNCH_BLOCKING=1` 临时抑制 |
| [Issue #39342](https://github.com/sgl-project/sglang/issues/39342) | 高 | `--enable-mixed-chunk` 导致混合 GDN 模型的 Mamba 基数缓存检查点损坏 | 尚未提交修复 PR |
| [Issue #39147](https://github.com/sgl-project/sglang/issues/39147) | 高 | HiCacheFile 因混合池恢复逻辑错误报告前缀无法恢复 | 尚未提交修复 PR |
| [Issue #39072](https://github.com/sgl-project/sglang/issues/39072) | 中等 | GLM-5.3 在分离解码 + dp-attention + 推测解码组合下崩溃 | 尚未提交修复 PR |
| [Issue #37559](https://github.com/sgl-project/sglang/issues/37559) | 中等 | B300 上 MXFP8FP4/W4A8 MegaMoE 路径出现 CUDA 非法内存访问 | 尚未提交修复 PR |

> ⚠️ FP8/MegaMoE 路径及混合模型处理仍存在多个严重稳定性问题——尤其在 B300 与 H20 硬件上。

---

### **6. 对应用开发者的启示**

- **智能体工作负载**：优先使用 `--dcp-size > 1` 并监控 HiCache 行为；预计混合缓存池在修复落地前将持续不稳定。
- **高并发部署**：在 [PR #39342](https://github.com/sgl-project/sglang/pull/39342) 解决前，避免在 Mamba 混合模型中使用 `--enable-mixed-chunk`。对于 Qwen3.8 崩溃问题，可临时使用 `CUDA_LAUNCH_BLOCKING=1` 作为绕过方案。
- **多 GPU 扩展**：若使用仅通过 PCIe 连接、无 NVLink 的系统，建议启用流水线并行结合推测解码——目前正通过 [PR #30775](https://github.com/sgl-project/sglang/pull/30775) 积极稳定该功能。
- **模型兼容性**：部署 SenseNova-U1、AMD MI35x 及 NPU 时，请确保环境与如 [#38812](https://github.com/sgl-project/sglang/pull/38812)、[#38764](https://github.com/sgl-project/sglang/pull/38764) 等 PR 中最新的 CI 测试配置一致。
- **路由器与分词器**：路由器现已采用 `hf-hub` 1.0 ([PR #39496](https://github.com/sgl-project/sglang/pull/39496))，提升对受保护仓库的令牌处理能力——请相应更新部署脚本。

> ✅ **建议**：关注 [Issue #21846](https://github.com/sgl-project/sglang/issues/21846) 以获取分布式 KV 缓存路线图更新——这对大规模智能体系统至关重要。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp 消息简报 – 2026-09-15**

---

### **1. 今日亮点**  
v0.4.1 版本发布，新增对 *Maple 20B-A1B*、*Tencent Hy 4* 以及 *Spark2.5* 等新模型的支持，同时在 JSON Schema 处理、聊天解析和服务器进程管理方面取得重大改进。在 Vulkan、SYCL 与 CUDA 后端均实现了关键性能与稳定性修复——尤其聚焦于 Flash Attention 回退机制、GPU 内存分配以及推测解码的正确性问题。

---

### **2. 发布与破坏性变更**  
- **v0.4.1** 已发布：[GitHub 发布页](https://github.com/ggml-org/llama.cpp/releases/tag/v0.4.1)  
  - `llama_sampler_chain_n()` 现在返回 `int32_t` 而非 `int` —— 属于破坏性 API 变更，需下游代码同步更新。  
  - `ggml` 升级至 v0.24.0，提升后端兼容性并修复内存安全问题。  
  - CI 现已包含 x64+arm64 平台的 Ubuntu-CUDA 构建（12.8/13.3）。  
  - CI 流水线中新增对 CUDA arm64 构建的 GCC 14 支持。

---

### **3. 新模型与硬件支持**  
- ✅ **新增模型**：  
  - *Maple 20B-A1B* ([Hugging Face](https://huggingface.co/maple-ai/Maple-20B-A1B-GGUF))  
  - *Tencent Hy 4* ([Hugging Face](https://huggingface.co/TencentAI/Hy-4-GGUF))  
  - *Spark2.5* ([Hugging Face](https://huggingface.co/Spark-ai/Spark2.5-GGUF))  
  - 通过 PR #28919 新增 *SenseNova U1* 支持 ([PR](https://github.com/ggml-org/llama.cpp/pull/28919)) —— 支持文本/图像到文本生成。

- ✅ **后端与硬件**：  
  - HIP：通过 fattn-mma 在 CDNA 设备上启用 FP32 累加 (#28576)。  
  - SYCL：优化基于 radix-select 的 top-k 算法以支持大 k 值；Intel Arc Pro B50/B70 多 GPU 支持增强 (#28670)。  
  - Vulkan：持续推进 Flash Attention 回退路径的稳定性优化 (#24066, #28752)。

---

### **4. 性能与优化**  
- **CUDA**：在缺乏 BF16 硬件支持的设备上（NVIDIA ≥ AMPERE，AMD ≥ RDNA3 / CDNA），回退至 F32 精度，提升兼容性且不牺牲正确性 (#28846)。  
- **SYCL**：  
  - 合并 MKL-FA softmax 加载以减少内核启动开销 (#28918)。  
  - 引入 radix select 替代 CPU 回退路径，避免 top_k 的往返延迟 (#28670)。  
- **Vulkan**：持续优化 flash attention 路径，防止提示处理期间出现 O(N²) 性能退化 (#27638)。  
- **GPU 内存**：修复在 SYCL 下启用 `ngram-mod` 时导致的过度临时内存分配（>2GB）问题 (#28860)。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 影响范围 | 修复 PR？ |
|--------|------|--------|--------|---------|
| 高 | Vulkan：近期构建中性能下降（RX 6600，Qwen3.5-9B-Q5_K_M） | 打开 (#24066) | ~44 条评论，广泛用户影响 | 否 |
| 高 | SYCL：Intel Arc Pro B50 + A770 双 GPU 系统崩溃 | 打开 (#27888) | 双 GPU 系统可复现 | 否 |
| 高 | Vulkan：b10780 之后提示处理速度严重下降（RDNA3） | 打开 (#28752) | 对低延迟应用至关重要 | 否 |
| 中 | SYCL：双 Arc Pro B70 搭配 DFlash2 草稿模型触发 TDR 重置 | 打开 (#28778) | 仅限 Windows，驱动层崩溃 | 否 |
| 中 | ggml：macOS Apple Silicon 上因 PCH 导致堆损坏 | 打开 (#28858) | 影响 M 系列 Mac 本地编译 | #28882 已修复但尚未合并 |
| 低 | Vulkan + Hexagon 后端组合下输出乱码（`--device Vulkan0,HTP0`） | 已关闭 (#28891) | 确定但无效输出 | 已打补丁 |

> ⚠️ **注意**：多个问题表明在混合模式或高负载场景下，SYCL 与 Vulkan 后端存在稳定性隐患。

---

### **6. 对应用开发者的影响**  
- **API 用户**：请更新代码以适配 `llama_sampler_chain_n()` 返回值从 `int` 改为 `int32_t`。  
- **智能体框架**：新增 `model: SenseNova U1` 支持，扩展多模态能力。使用 `--model-draft` 时需谨慎对待 SYCL 的已知 TDR 风险。  
- **部署建议**：在后端交互缺陷修复前，请避免使用 `--device Vulkan0,HTP0`。除非测试混合架构，否则优先选择单一后端推理。  
- **监控**：可安全使用 `/metrics` 端点——PR #28915 已将其从 API 密钥检查中排除，支持 Prometheus 抓取。  
- **模型管理**：服务端模型接口规划中（#21779）；未来将集成动态重载/下载端点。

👉 **建议**：生产环境推荐使用经过验证的 v0.4.1 版本及稳定后端（CPU、CUDA）。关注 [issue #24066](https://github.com/ggml-org/llama.cpp/issues/24066) 与 [PR #28918](https://github.com/ggml-org/llama.cpp/pull/28918)，以获取 Vulkan/SYCL 性能优化进展。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-15**

---

### **1. 今日亮点**  
最新发布的 `v0.34.1-rc1` 版本为基于 MLX 的 Apple Silicon 推理引入了关键稳定性修复，包括前缀缓存淘汰机制优化以及模型加载期间的内存溢出（OOM）处理改进。关于工具调用解析、结构化输出格式及并发解码正确性等核心问题已在活跃的 PR 和错误报告中被重点标注，表明 MLX 后端与 API 协议一致性仍在持续优化中。

---

### **2. 发布版本与破坏性变更**  
- **`v0.34.1-rc1`**（GitHub：[发布页](https://github.com/ollama/ollama/releases/tag/v0.34.1-rc1)）  
  - 修复 ChatGPT 模型选择器的 UI 间距问题。  
  - 增强 MLX 运行时内存安全性：加载新模型前会检查系统剩余内存，并主动驱逐前缀缓存快照。  
  - 将重复令牌限制提升至 100，现在会在超出时返回错误而非静默截断输入。  

> ⚠️ *本次发布无破坏性 API 变更，但 `typical_p` 参数将在后续版本中被弃用（参见 #18448）。*

---

### **3. 新模型与硬件支持**  
- **新功能请求**：增加对 **Qualcomm IQ-9075 NPU/GPU** 的支持（通过 #18445）——适用于 Raxda Fogwise Airband 等设备。  
- **功能请求**：增加对 **Rockchip NPU（RK3588/RK3576）** 的支持——面向边缘 AI 部署场景（#9268）。  
- **请求支持 ROCm 10 for Windows**（#18435），扩展 AMD GPU 在 Windows 平台上的可用性。  
- **新增 Q2_0 GGUF 张量支持** 通过 PR #18443 —— 允许在 GGUF 模型中使用更新、更高效的量化格式。

---

### **4. 性能与优化**  
- **MLX 前缀缓存内存管理**：硬编码的 8 GiB 预算在 32 GB Apple Silicon 系统上运行代理任务时导致严重交换（swap）(#18131)。目前正在推进动态或可配置方案。  
- **模型加载性能下降**：用户报告 `0.32.13` 之后加载速度下降约 5 倍，尤其在 CUDA（RTX 3090）环境下——#18373 已确认并提供可复现测试用例。  
- **并发解码问题**：`gemma4:26b` 在并发解码下出现 EOS 丢失；而同硬件下的 `qwen3.8-27b` 表现正常（#18442），提示存在模型特定的内核效率问题。  
- **预填充缓存持久化（实验性）**：PR #17953 支持通过设置 `OLLAMA_PREFILL_CACHE=1` 实现运行时重启后保留 KV 缓存，减少长上下文重启时的重复计算开销。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | PR/链接 |
|--------|------|--------|--------|
| 严重 | MLX 运行时在长上下文加载且快照分页时因内存溢出导致请求中途崩溃 (#18231) | 开放 | [PR #18438](https://github.com/ollama/ollama/pull/18438) |
| 高 | `kimi-k3:cloud` 在工具角色消息包含图像内容时崩溃 (#18426) | 开放 | — |
| 高 | 因大小写不敏感的规范化缺陷导致间歇性“模型未找到”错误 (#18447) | 开放 | [PR #18438](https://github.com/ollama/ollama/pull/18438) |
| 中 | 启用思考模式时，结构化响应的 JSON 输出前多出一个多余 `.` (#18441) | 开放 | — |
| 中 | 工具调用对象键含空格会导致静默丢弃 (#18390) | 开放 | — |
| 中 | 与 Anthropic 兼容的端点将 `system` 角色提升至顶层块，破坏前缀缓存 (#18431) | 开放 | — |
| 低 | `previous_response_id` 在输入有效时仍返回空响应 (#18419) | 开放 | [PR #18439](https://github.com/ollama/ollama/pull/18439) |

> ✅ *针对模型查找问题（#18438）和 `previous_response_id` 行为（#18439）的修复正在推进中。*

---

### **6. 对应用开发者的启示**  
- **实验性启用 `OLLAMA_PREFILL_CACHE=1`**，以降低重复长上下文查询的延迟——特别适用于代理和聊天类应用。  
- **避免在新模型定义中使用 `typical_p`**；该参数将在未来版本中移除。  
- **注意工具调用中对象键含空格的情况**——可能导致静默丢弃（参见 #18390）。  
- **监控 Apple Silicon 上的 MLX 内存使用情况**——8 GiB 的前缀缓存上限在持续代理负载下可能触发严重交换。  
- **对于云本地混合工作流**，使用图像输入时应警惕 `kimi-k3:cloud` 的不稳定表现——建议等待 #18426 修复后再使用。  
- **考虑使用 LLMxRay**（PR #18444）进行本地可观测性分析：实时令牌流诊断、提示缓存复用分析、多端点协议对比。

> 🛠️ *构建代理的应用开发者应验证工具调用解析、结构化输出及长时间上下文与并发场景下的状态连续性。*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 简报 – 2026-09-15**

---

### **1. 今日重点**  
LiteLLM 项目迎来一波关键修复，聚焦于成本准确性、速率限制正确性以及代理稳定性——尤其在预算管理、流式处理和 API 密钥处理方面。重要 PR 解决了 Gemini 嵌入中的重复计费问题（#41157, #41151），修正了因双重计数导致团队级速率限制被减半的问题（#34140），并通过 `LITELLM_LOG` 改进了日志控制能力（#10788）。这些变更对管理多租户负载的生产级推理网关至关重要。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新版本发布。*  
然而，已合并多个具有破坏性影响的修复：
- **计费一致性**：通过 #41157 和 #41151 修复了 `gemini-embedding-2` 在不同模态（音频/标记）间重复计费的问题。
- **速率限制逻辑**：解决了 v3 速率限制器错误地将 `model_per_team` 配置值强制为一半的问题（#34140）。
- **日志行为**：修复了即使设置 `LITELLM_LOG=ERROR` 仍无法禁用 `INFO` 请求日志的问题（#10788）。

> 🔗 [PR #41157](https://github.com/BerriAI/litellm/pull/41157) | [PR #34140](https://github.com/BerriAI/litellm/pull/34140) | [Issue #10788](https://github.com/BerriAI/litellm/issues/10788)

---

### **3. 新模型与硬件支持**  
- 通过 Mantle 端点新增对 **Gemma 4** 的支持（#30657）。
- 同步了 **4 个 Vertex AI 模型** 的定价信息，包括更新后的批量处理与音频成本（#41154）。
- 补全了 **Fireworks 无服务器模型**（如 `glm-5p3-fast`）缺失的字段（上下文窗口、工具标志等）（#41152）。

> 🔗 [PR #30657](https://github.com/BerriAI/litellm/pull/30657) | [PR #41154](https://github.com/BerriAI/litellm/pull/41154) | [PR #41152](https://github.com/BerriAI/litellm/pull/41152)

---

### **4. 性能与优化**  
- 优化聚合使用量查询，将 `api_key` 汇总范围限制在前几位高频密钥，防止大规模部署中因数千个密钥引发的内存溢出崩溃（#41155）。
- 引入 **无状态重放身份** 用于测试，通过精确匹配请求头、查询参数和数值，提升重放准确性（#41149）。
- 重构 Rust 桥接生命周期，将令牌计数集中于公共 API 边界，实现更可预测的性能分析（#41153）。

> 🔗 [PR #41155](https://github.com/BerriAI/litellm/pull/41155) | [PR #41149](https://github.com/BerriAI/litellm/pull/41149) | [PR #41153](https://github.com/BerriAI/litellm/pull/41153)

---

### **5. 稳定性与回归问题**  
今日报告高严重性问题：
1. **预算超限错误伴随过期支出** —— 虚拟密钥在当前支出低于预算时仍拒绝请求（#27735）。*修复待定。*
2. **离线主机上健康检查硬失败** —— 导致临时可用性场景（如 HomeLab 环境）下代理宕机（#34281）。*修复进行中。*
3. **流式推理状态丢失** —— 缓存命中时，流式与非流式响应均丢失 `reasoning_text`（#40654, #40887）。*修复 PR 已开放。*
4. **管理界面触发 404 预取风暴** —— 侧边栏导航导致页面全量重载，引发客户端洪水攻击（#41029）。*修复已合并。*

> 🔗 [Issue #27735](https://github.com/BerriAI/litellm/issues/27735) | [Issue #34281](https://github.com/BerriAI/litellm/issues/34281) | [PR #40654](https://github.com/BerriAI/litellm/pull/40654) | [PR #41029](https://github.com/BerriAI/litellm/pull/41029)

---

### **6. 对应用开发者的影响**  
- **计费精度现更严格**：若使用 `gemini-embedding-2`，请确保成本追踪与新的按模态计费模型一致，避免过度预设预算。
- **统一使用 `LITELLM_LOG=ERROR`**：#10788 修复确保日志抑制功能正常生效，适用于减少高吞吐系统中的噪声。
- **避免依赖缓存推理状态**：若应用依赖增量推理状态，请注意该数据在缓存命中时可能被丢弃（#40654）。
- **更新部署配置**：若使用基于团队的速率限制，请验证实际 RPM/TPM 上限是否符合预期——当前行为仅执行配置值的一半，直到 #34140 部署完成。
- **监控 UI 行为**：大规模部署中，避免快速切换管理界面侧边栏，以防止不必要的负载。

> 🛠️ 实用建议：优先合并 `main` 分支最新更改，避免速率限制、预算和日志方面的回归问题。使用新的 `fix(spend_logs)` PR 确保用户邮箱出现在请求日志中，便于审计。

---  
*简报生成时间：2026-09-15 | 来源：GitHub @ BerriAI/litellm*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-15**

---

### **1. 今日亮点**  
Unsloth 生态系统持续成熟，用户体验与安全性在沙箱化、工具调用保真度以及 Docker 环境中的模型可见性方面均有显著提升。关键 PR 包括：聊天回放准确率增强、嵌套工具调用参数处理改进，以及容器化 Studio 实例中本地模型发现问题的修复。针对慢速 CPU 上内存管理的严重回归问题，已通过流式稳定性补丁解决。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告新发布或破坏性变更。*  
无新版本发布，也无破坏性 API/配置变更。最新稳定版本仍为 v0.1.808-beta（2026.9.4），`main` 分支的持续优化聚焦于内部稳定性与用户体验。

---

### **3. 新模型与硬件支持**  
- ✅ **AMD ROCm 支持**：`feature/docker-rocm-support` 分支（#6230）持续推进全 AMD GPU 兼容性，实现 NVIDIA 与 AMD 后端之间的对称 Docker 镜像兼容。
- ✅ **Docker 中的本地模型发现**：PR #10936 增加了在 Docker 环境下运行 Unsloth Studio 时，自动检测并暴露 LM Studio、Ollama 与 Hermes 模型的功能——支持无缝使用本地托管的 GGUF/MLX 模型，无需重新下载。
- ✅ **多 API 提供商目录扩展**：PR #10957 将 models.dev 目录扩展至包含 OpenRouter 及其他提供方的推理耗时等级与图像支持详情，显著提升跨 API 的 UI 准确性。

> 🔗 [PR #10936](https://github.com/unslothai/unsloth/pull/10936) | [PR #10957](https://github.com/unslothai/unsloth/pull/10957)

---

### **4. 性能与优化**  
- 🚀 **内存使用稳定性**：用户反馈低 CPU 系统在升级 llama.cpp 后出现持续内存增长问题（#10921）。已通过 PR #10911 修复，该补丁在预填充阶段维持活跃 SSE 流，防止过早终止。
- ⚙️ **构建缓存清理**：PR #10959 移除了 Docker 发布任务中的构建缓存，使 `unsloth/unsloth` 标签的注册表存储占用减少了 **68.9 GB**——对 CI/CD 效率和 Hub 合规性至关重要。
- 🔍 **工具调用解析效率**：PR #10927 通过预编译正则表达式模式，优化了阻塞命令检测逻辑，消除每次执行中的冗余 `re.escape` 调用，显著降低高吞吐代理工作流的延迟。

> 🔗 [PR #10911](https://github.com/unslothai/unsloth/pull/10911) | [PR #10959](https://github.com/unslothai/unsloth/pull/10959) | [PR #10927](https://github.com/unslothai/unsloth/pull/10927)

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 修复 PR |
|--------|------|--------|-------|
| 🔴 高 | Gemma 4 在图像输入时因默认 `ubatch` 过小导致 `llama-server` 崩溃（#10559） | 已关闭 | N/A |
| 🔴 高 | 在慢速 CPU 主机上反复失败 `unsloth start pi`（`Error: terminated`）（#10912） | 未关闭 | [PR #10911](https://github.com/unslothai/unsloth/pull/10911) |
| 🔴 高 | MLX 模型自动切换失败（除非预先加载）（#10951） | 未关闭 | N/A |
| 🟡 中 | 因内部去重逻辑导致工具调用截断（#10839） | 未关闭 | N/A |
| 🟡 中 | 破坏性命令（如 `rm`）绕过安全检查（#10835） | 已关闭 | N/A |

> 🔗 [Issue #10559](https://github.com/unslothai/unsloth/issues/10559) | [Issue #10912](https://github.com/unslothai/unsloth/issues/10912) | [Issue #10951](https://github.com/unslothai/unsloth/issues/10951)

---

### **6. 对应用开发者的启示**  
- **提升代理可靠性**：PR #10910 实现了持久运行的精准回放，确保代理可精确恢复至中断位置——包括流式输出、待审批项与卡片状态，对长时间或多步骤工作流至关重要。
- **沙箱安全现已强制执行**：PR #10907 引入显式权限提示，在任何工具访问沙箱外文件前进行确认，有效降低恶意或配置错误工具带来的风险。
- **容器中模型集成更顺畅**：借助 PR #10936，使用 Docker 的开发者现在可无缝将来自 LM Studio/Ollama/Hermes 的本地模型集成进工作流，无需额外配置。
- **警惕工具设计陷阱**：注意工具调用中参数顺序（如 `start_cursor` 与 `page_size`）——PR #10935 修复了因 llama.cpp 严格字段顺序导致的静默字段丢失问题。

> 💡 **实用建议**：若在 Docker 中部署 Unsloth Studio，务必持久挂载 `/workspace/work`，以避免下载的模型丢失（#10923）。

---  
*摘要源自 GitHub 活动：unslothai/unsloth · 2026-09-15*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*