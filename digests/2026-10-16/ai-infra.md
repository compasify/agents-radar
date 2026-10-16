# AI 基础设施日报 2026-10-16

> 生成时间: 2026-10-16 00:41 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-10-16**

---

### **1. 生态概览**  
2026年第四季度的AI基础设施格局呈现出显著的两极分化：高性能、硬件优化的推理引擎与日益成熟、面向智能体的本地运行时平台并行发展。各项目正聚焦于多模态、MoE（混合专家）及推测性解码能力，而系统稳定性与可观测性仍是关键瓶颈。新一代GPU（GB300、MI355X、Strix Halo）和模型架构（Muse Spark Open、DeepSeek-V4.1-Flash、Nemotron 3.5 Bolt）的出现正在加速创新——但也暴露出内存管理、路由正确性及跨请求隔离等深层次系统级脆弱性。

---

### **2. 活跃度对比**

| 项目 | 开放问题数 | 最近24小时合并的PR | 版本发布 | 状态 |
|--------|--------------|-------------------------|----------|--------|
| **vLLM** | 118 | 12 | 无 | 持续开发；聚焦MoE与低延迟解码 |
| **SGLang** | 114 | 9 | v0.5.20（稳定版） | 高度不稳定；CI不稳阻碍进展 |
| **llama.cpp** | 107 | 14 | v0.7.0（已发布） | 快速功能迭代，伴随严重回归问题 |
| **Ollama** | 146 | 6 | 无 | 稳定性危机：多个核心生产问题 |
| **LiteLLM** | 69 | 5 | v1.107.0-dev.2 / rc.4 | 预发布；重点聚焦成本准确性与可观测性 |
| **Unsloth** | 78 | 11 | v0.1.908-beta（测试版） | 测试版发布，集成大量模型/硬件 |

> ✅ *洞察*：**llama.cpp** 在势头方面领先（新版本发布 + 高PR量），但**Ollama** 表现出最严重的系统性风险，其4个关键问题影响核心功能。

---

### **3. 模型支持竞赛**

| 新模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|--------------------------|------|--------|-----------|--------|---------|---------|
| **Muse Spark Open** | ✅（ROCm/CUDA） | ❌ | ✅ | ❌ | ❌ | ✅ |
| **DeepSeek-V4.1-Flash** | ✅（GB300 + DSpark） | ✅（SM120） | ❌ | ⚠️（回归问题） | ❌ | ❌ |
| **Qwen3.8-2.4T-A95B / Flash-Next** | ✅（ROCm） | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Nemotron 3.5 Bolt** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **FLUX.3 Image Klein** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **K2 Horizon (MoVA)** | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Prism** | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Clef** | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |

> 🏆 **胜出者**：**Unsloth** 和 **llama.cpp** 在新型模型支持上领先——尤其在前沿多模态与纯本地模型方面。  
> 📌 **备注**：vLLM 在**高端硬件优化**（GB300、MI355X）方面仍具优势，而 **Ollama** 尽管早期采纳部分模型，却仍明显滞后。

---

### **4. 性能前沿**

| 优化重点 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|--------------------|------|--------|-----------|--------|---------|---------|
| **KV缓存效率** | ✅ FP8，前缀缓存修复，工作负载快照 | ✅ NIXL打包，HiCache预热 | ✅ 主机缓存MoE（`--moe-cache-mib`） | ⚠️ 提示词缓存拒绝服务风险 | ✅ 每轮消耗日志 | ✅ 通过 `--preempt-ram` 实现抢占 |
| **推测性解码** | ✅ DSpark，低延迟路径 | ✅ DFLASH，DSPARK | ✅ LiliCorr（新） | ⚠️ GLM-5.3中退化 | ❌ | ❌ |
| **量化与内存** | ✅ FP8 KV缓存（ROCm），NoPE稀疏MLA | ✅ FP8 GEMM融合 | ✅ Q2_0，Q1_0（Hexagon），主机MoE | ✅ Q2_0 GGUF | ❌ | ✅ INT8/FP8/GGUF 支持 FLUX.3 |
| **分布式服务** | ✅ PD分离（有前提条件） | ✅ NIXL存储，PD中止 | ❌ | ❌ | ✅ 代理路由，负载测试 | ✅ 多GPU MIG切片 |
| **内核级调优** | ✅ Triton融合内核，FA2优化 | ✅ CuTe DSL验证内核（SM90） | ✅ Vulkan分步，Metal BF16 | ❌ | ❌ | ✅ ROCm自动flash_attn探测 |

> 🔥 **顶尖表现者**：  
> - **vLLM**：在GPU特定内核优化与分布式服务成熟度方面领先。  
> - **Unsloth**：在动态内核选择与多GPU效率方面持续创新。  
> - **llama.cpp**：在主机内存卸载与移动端部署边界上不断突破。

---

### **5. 层级定位**

| 项目 | 主要层级 | 核心差异化 |
|--------|---------------|--------------------|
| **vLLM** | **推理引擎** | 低延迟、生产级服务，支持高级推测性解码与MoE。 |
| **SGLang** | **推理引擎 + 运行时框架** | 统一执行模型，结合NIXL存储与单内核RFC——专为复杂智能体工作流设计。 |
| **llama.cpp** | **本地运行时 / 嵌入式推理** | 以CPU/移动端优先，高度可移植，适合边缘与离线智能体。 |
| **Ollama** | **网关 / 开发者体验平台** | 简化命令行/API层；作为模型访问的元代理，但稳定性债务持续累积。 |
| **LiteLLM** | **API网关 / 成本管理层** | 中央代理，支持细粒度支出日志、身份令牌与跨供应商路由。 |
| **Unsloth** | **微调 + 本地运行时栈** | 结合训练加速与本地推理支持——适用于快速原型与智能体流水线。 |

> 🧩 **战略洞察**：  
> - **vLLM/SGLang** 聚焦企业级、高吞吐推理。  
> - **llama.cpp/Unsloth** 服务于构建本地、私有或边缘感知智能体的开发者。  
> - **Ollama/LiteLLM** 作为抽象层存在——Ollama追求简单性，LiteLLM强调可观测性与成本控制。

---

### **6. 趋势信号**

#### 🔍 **从2026-10-16活动观察到的新兴趋势**
1. **硬件特异性优化已成为基本门槛**  
   项目不再仅支持新模型——而是针对**特定GPU微架构**（GB300、MI355X、Strix Halo、gfx950）进行调优。这表明推理正从通用可移植转向**硬件感知**。

2. **MoE模型正迈向生产就绪——但需谨慎**  
   多个项目（vLLM、llama.cpp、Unsloth）现已支持带缓存与卸载功能的MoE模型。然而，**MoE路由错误、静默LoRA吸收、PCIe资源争用**等问题表明，这些系统在大规模下仍显脆弱。

3. **智能体工作流要求全栈集成**  
   **文本-扩散**、**提示词缓存**、**多GPU抢占**、**工具调用可靠性**的兴起，表明应用开发者不再满足于单纯的LLM推理——他们需要**端到端智能体执行环境**。

4. **可观测性与成本控制不可妥协**  
   LiteLLM对每轮消耗日志、令牌计数准确性与基于身份的访问控制的关注，反映出生态系统日趋成熟，**成本透明与审计能力已成为企业采纳的核心要素**。

5. **稳定性是新的竞争优势**  
   尽管功能更新迅速，但**Ollama的关键回归问题**与**SGLang的不稳CI**表明，若系统崩溃或数据损坏，性能提升毫无意义。开发者必须将**韧性置于新颖性之上**。

---

### ✅ **对应用开发者的建议**
- **用于生产推理**：在GB300/MI355X上使用 **vLLM**，启用 `low_latency` + DSpark；在 #61160 修复前避免使用 `--enable-prefix-caching`。
- **用于本地/多模态智能体**：优先选择 **Unsloth**（Nemotron 3.5、Muse Spark Open）或 **llama.cpp**（LiliCorr、Q2_0），实现离线高效运行。
- **用于成本可控的API网关**：采用 **LiteLLM v1.107+** 以确保准确的支出追踪——尤其是使用Ollama后端时。
- **避免不稳定模型**：暂勿使用 `glm-5.3-flash:cloud`（Ollama）或在SM120上使用 `fa4` 后端（SGLang），待修复上线后再启用。
- **监控系统健康**：利用GPU时间指标（vLLM）、NIXL健康检查（SGLang）以及提示词缓存限制（llama.cpp/Ollama）防止资源耗尽。

> 📌 **结论**：AI基础设施栈正在快速演进——但唯有**稳定性、可观测性与硬件感知能力**，才能决定哪些工具能真正跨越测试阶段，存活下来。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

### **1. 今日亮点**  
vLLM 继续加速在**多模态与 MoE 模型优化**上的投入，针对 DeepSeek-V4.1-Flash 在 GB300（NVIDIA）上的低延迟解码路径以及 Qwen3.8-2.4T-A95B 和 Qwen3.8-Flash-Next 在 MI355X 上的 ROCm 性能调优，已合并多项关键 PR。关键稳定性修复解决了 MoE 路由崩溃、推测解码正确性问题以及影响生产部署的前缀缓存污染问题。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新版本发布。*  
- **注意**：由于 `mamba_cache_mode="all"` 已被移除，`--mamba-block-size` 标志现已无效 —— 用户需相应调整配置。[Issue #60838](https://github.com/vllm-project/vllm/issues/60838)  
- **待迁移**：vLLM 正在向全面支持 V1 API 迈进；Phi4Flash 模型移植仍是高优先级功能。[Issue #23957](https://github.com/vllm-project/vllm/issues/23957)

---

### **3. 新模型与硬件支持**  
- ✅ **新增模型支持**：通过 PR #61879（ROCm/CUDA）新增对 **Muse Spark Open** 的初步支持。  
- 📌 **硬件特定优化**：  
  - **AMD ROCm (gfx950 / MI355X)**：为 `amd/Qwen3.8-2.4T-A95B-Quark-MXFP4` 与 `Qwen3.8-Flash-Next-Quark-MXFP4` 启用性能优化追踪。[Issue #57149](https://github.com/vllm-project/vllm/issues/57149), [Issue #59575](https://github.com/vllm-project/vllm/issues/59575)  
  - **NVIDIA (GB300)**：为 **DeepSeek-V4.1-Flash** 开启低延迟解码路径，并启用 DSpark 推测解码。[PR #61868](https://github.com/vllm-project/vllm/pull/61868), [PR #61869](https://github.com/vllm-project/vllm/pull/61869)  
- 🔧 **量化**：为 ROCm 上的 NoPE 稀疏 MLA 增加了 FP8 KV 缓存支持。[PR #57134](https://github.com/vllm-project/vllm/pull/57134)

---

### **4. 性能与优化**  
- **MoE 性能**：  
  - 修复因 DeepGEMM 对齐从 64 改为 128 导致的 SM12x 上 15% 解码性能下降问题。[Issue #58624](https://github.com/vllm-project/vllm/issues/58624)  
  - 针对 ROCm 平台上的 Qwen3-Next/Qwen3.5 优化融合 Triton 内核（`fused_qk_rmsnorm_rope_gate`）。[PR #51406](https://github.com/vllm-project/vllm/pull/51406)  
- **注意力与解码**：  
  - 通过头打包 + KV 分割内核，优化 FA2 注意力在短查询 + 长上下文场景下的表现。[PR #61784](https://github.com/vllm-project/vllm/pull/61784)  
  - DSpark 草稿引擎结合融合 Markov 循环与 CUDA 图，在 GB300 上实现低延迟解码。[PR #61869](https://github.com/vllm-project/vllm/pull/61869)  
- **系统级**：  
  - 在每轮迭代指标中新增可选的 GPU 时序与工作负载快照（用于 Dynamo 建模）。[PR #61690](https://github.com/vllm-project/vllm/pull/61690), [PR #61691](https://github.com/vllm-project/vllm/pull/61691)

---

### **5. 稳定性与回归问题**  
- ⚠️ **严重**：在自动前缀缓存开启的 PD 分离部署中，共享前缀 KV 重用导致跨请求上下文污染。已通过禁用前缀缓存（`--no-enable-prefix-caching`）修复。[Issue #61160](https://github.com/vllm-project/vllm/issues/61160)  
- ⚠️ **严重**：在 RTX 3090 上，混合 GDN + MTP k=3 + 异步调度场景下，CUDA IMA（退出码 0）出现静默失败——此前修复无法解决该问题。[Issue #53726](https://github.com/vllm-project/vllm/issues/53726)  
- ⚠️ **高危**：`kv_b_proj` 上的 LoRA 因吸收/预包装缺陷被静默忽略。[Issue #48974](https://github.com/vllm-project/vllm/issues/48974)  
- ⚠️ **回归**：`--mamba-block-size` 在移除 `mamba_cache_mode="all"` 后不再生效。[Issue #60838](https://github.com/vllm-project/vllm/issues/60838)  
- ✅ **已修复**：在 NVIDIA 与 AMD 上均修复 MoE 哈希路由错误（`KeyError: "hash_indices_table already exists"`）。[PR #61930](https://github.com/vllm-project/vllm/pull/61930)

---

### **6. 对应用开发者的启示**  
- **生产注意事项**：在分离式 PD 部署中，除非 #61160 修复完成，否则避免使用 `--enable-prefix-caching` —— 存在跨请求数据泄露风险。可临时使用 `--no-enable-prefix-caching` 应对。  
- **性能调优建议**：若在 GB300 或 MI355X 上进行低延迟推理，请启用新的 `low_latency` 解码后端，并考虑使用 DSpark 推测解码。  
- **模型特异性风险**：若使用 MoE 模型（尤其是 DeepSeek-V4.1、Kimi K2.5、GLM-5.3），请确认 `hash_routing` 与 `gate` 参数正确处理 —— 最近的 PR (#61930, #61749) 修复了关键正确性问题。  
- **监控建议**：利用新增的迭代指标（含 GPU 时序与工作负载快照）[PR #61690](https://github.com/vllm-project/vllm/pull/61690), [PR #61691](https://github.com/vllm-project/vllm/pull/61691) 提升可观测性并支持 A/B 测试。  

> 💡 **实用提示**：使用 FlashInfer 后端的开发者，确保仅在具备充足显存时使用 `--moe-backend=flashinfer_b12x` —— 16GB Blackwell 显卡上曾出现的 OOM 问题仍未解决。[Issue #49476](https://github.com/vllm-project/vllm/issues/49476)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 简报 – 2026-10-16**

---

### **1. 今日重点**  
SGLang 项目持续加速对下一代硬件的支持，针对 Blackwell（SM120）GPU 和 AMD ROCm 平台推出关键性能与稳定性改进。今日重点 PR 包括修复不稳定的 CI 基础设施（#42752）、稳定多 GPU 环境下 DeepSeek-V4.1-Flash 与 GLM-5.3-Flash 的部署，以及增强 NIXL 存储的容错能力。一项重要新 RFC 提出 *单内核框架*，旨在统一 SGLang 运行时中的内核调度与安全检查。

---

### **2. 发布与破坏性变更**  
无。过去 24 小时内未发布新版本。最新稳定版仍为 `v0.5.20`（构建于 2026-09-18）。未引入任何破坏性 API 或配置变更。

---

### **3. 新模型与硬件支持**  
- ✅ **DeepSeek-V4.1-Flash**：已在 **8× RTX PRO 6000（SM120，仅 PCIe）** 生产环境中确认可用，通过 DSPARK 实现完整推测解码。现场报告 #40877 记录了吞吐量指标及有效拓扑约束。  
- ✅ **GLM-5.3-Flash**：正在 SM120（TP2，W4A16，FP8 KV）上进行资格认证——相关进展追踪于 #37813。已提交修复以解决崩溃与退化输出问题（#40843，#36669）。  
- 🟡 **AMD ROCm 支持**：开发活跃，新 PR 针对 gfx950 上 Qwen3.5-397B-A17B-FP8 GEMM 融合（#42229），以及 ROCm 友好型多模态测试（#44599）。  
- 🔧 **NIXL 存储后端**：通过超时边界控制（#44614）和会话级标签支持 Mooncake 卸载（#44611），显著提升可靠性。

---

### **4. 性能与优化**  
- ⚡ **NIXL KV 打包**：PR #44615 引入跨 TP 异构的 KV 打包机制，优化混合 GPU 配置下的内存利用率。  
- ⚡ **统一内存预热**：PR #44592 在启动阶段预热压缩移动操作，降低高吞吐推理场景下的首次使用延迟。  
- ⚡ **AMD 内核融合**：PR #42229 在 MI355X 上将激活量化融合进小型 FP8 GEMM 内核，每标记减少约 1–2 µs 解码延迟。  
- ⚡ **扩散运行时**：PR #44606 延迟管线导入期间的完整垃圾回收，使扩散工作负载冷启动开销最多降低 30%。  
- ⚡ **KDA 验证内核扩展**：PR #44612 将 CuTe DSL MTP 验证内核扩展至 SM90（Hopper），使旧版 NVIDIA 显卡上的 Kimi Delta Attention 验证速度更快。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 概述 | 修复状态 |
|--------|------|--------|-----------|
| 严重 | #42752 | PR 测试基/额外环境中的不稳定 CI 测试与基础设施故障 | 开放 — 阻塞 PR 验证；正在进行人工维护 |
| 高 | #40843 | GLM-5.3 在启用 DFLASH 推测解码时出现严重重复/退化循环 | 开放 — 影响智能体推理流水线 |
| 高 | #42012 | SM120 上 fa4 注意力后端在 CUDA 图捕获期间崩溃 | 开放 — 目前仅有 triton 为可行后端 |
| 中 | #44369 | NIXL PD 中止导致传输工作线程无限等待 | 开放 — 高负载下存在死锁风险 |
| 中 | #44070 | PD 预填充阶段早期缓存前缀发送时发生过期 KV 传输 | 开放 — HiCache 中存在无声正确性问题 |
| 低 | #44501 | WeightChecker 将 MRotaryEmbedding.axis_map 重置为随机值 | 开放 — 可能导致位置编码损坏 |

> 🔗 [CI 不稳定性追踪器](https://github.com/sgl-project/sglang/issues/42752) | [GLM-5.3 SM120 状态](https://github.com/sgl-project/sglang/issues/37813)

---

### **6. 对应用开发者的意义**  
- **谨慎使用 `--enable-deterministic-inference`**：Gemma-4 上的基数缓存与 temperature=0 输出仍存在已知问题（#34683）；建议在修复前避免在生产环境使用。  
- **避免在 SM120 上使用 `fa4` 后端**：在 #42012 修复前，请对 GLM-5.3-Flash 与 DeepSeek-V4.1-Flash 使用 `triton` 以防止崩溃。  
- **启用 `toktier` 词元化后端**（RFC #44374）：支持基于 CPU 的增量词元化与分块并行 —— 适用于代理类应用中的低延迟流式处理。  
- **监控 NIXL 存储健康状态**：若遇到过期 KV 问题（#44070），可临时设置 `SGLANG_DISAGG_PREFILL_EARLY_SEND_CACHED_PREFIX=0`。  
- **升级至 Python 3.11+**：所有 CUDA 构建现已移除对 Python 3.10 的依赖（#44393）——请确保部署环境兼容。

> 💡 **实用提示**：对于使用多个工具且提示复杂的应用代理，应尽早测试 GLM-5.3-Flash —— 已知在 `tool_choice=auto` 下可能退化为无限 `!` 序列（#36669）。

---  
*简报生成时间：2026-10-16 | 来源：[github.com/sgl-project/sglang](https://github.com/sgl-project/sglang)*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

### **1. 今日亮点**  
`llama.cpp` v0.7.0 版本引入了 **LiliCorr 预测性解码** 和 **GLM5-Next 的 MTP（多线程处理）**，通过主机内存缓存专家模块（`--moe-cache-mib`，最高可达约 2.2 倍加速）显著提升 MoE 模型的推理速度。新增模型支持包括 **Muse Spark Open（文本/视觉/音频）**、**K2 Horizon（密集型与 MoVA）** 以及 **Prism**，进一步扩展了多模态与高效率能力。

---

### **2. 发布与破坏性变更**  
- **v0.7.0** 已发布：[GitHub Release](https://github.com/ggml-org/llama.cpp/releases/tag/b11669)  
  - 引入 `--moe-cache-mib`，可将 MoE 专家卸载至主机内存，在使用 MTP 时实现最高 **~2.2 倍的解码加速**。  
  - 新增 **LiliCorr** 预测性解码技术（新参数 `--spec-type draft-lilicorr`），提升草稿令牌生成的准确性。  
  - 若使用主机缓存的 MoE 层，需注意 `--moe-cache-topk`（PR #30593），以限制活跃专家数量，避免 PCIe 竞争。  
  - 注意：`draft-mtp` 与外部草稿模型（`-md`）组合使用可能导致崩溃（参见问题 #27428，PR #27897）。

---

### **3. 新增模型与硬件支持**  
#### **新增模型**  
- **Muse Spark Open**（潜在空间 MoE；8192 残差流，4096 专家，top-8 sigmoid 路由）：[#30616](https://github.com/ggml-org/llama.cpp/pull/30616)  
- **K2 Horizon**（密集型与 MoVA 变体）：[#30616](https://github.com/ggml-org/llama.cpp/pull/30616)  
- **Prism**：[#30616](https://github.com/ggml-org/llama.cpp/pull/30616)  
- **Qwen4exp**：[#30589](https://github.com/ggml-org/llama.cpp/pull/30589) – 现已支持 `build_cvec` 与 `l_out` 回调函数，用于控制向量。

#### **硬件与后端增强**  
- **Metal（Apple Silicon）**：新增 flash attention 内核的 BF16 变体（[#30491](https://github.com/ggml-org/llama.cpp/pull/30491)）。  
- **Vulkan**：改进 f16 KV 复制在 AMD 内存通道间的分段策略（[#27703](https://github.com/ggml-org/llama.cpp/pull/27703)）；修复并发初始化竞争条件（[#29766](https://github.com/ggml-org/llama.cpp/pull/29766)）。  
- **Hexagon（高通）**：通过原生 HVX MUL_MAT 与分块量化权重处理，新增 Q1_0 支持（[#30122](https://github.com/ggml-org/llama.cpp/pull/30122)，[#30635](https://github.com/ggml-org/llama.cpp/pull/30635)）。  
- **SYCL**：修复预测解码中的 IQ3 崩溃问题（[#30604](https://github.com/ggml-org/llama.cpp/pull/30604)）。

---

### **4. 性能与优化**  
- **MoE 加速**：主机缓存 MoE 专家（`--moe-cache-mib`）通过减少缓存未命中时的 PCIe 传输，实现最高 **~2.2 倍的解码加速**（PRs #29887, #30112, #30593）。  
- **Flash Attention**：Vulkan 后端现在可将 f16 KV 读取分散到多个内存通道，提升带宽利用率（[#27703](https://github.com/ggml-org/llama.cpp/pull/27703)）。  
- **预测性解码**：LiliCorr 在草稿准确性上优于 DFlash/MTP，降低拒绝率。  
- **模型转换**：Granite Switch block_count 修复（[#30621](https://github.com/ggml-org/llama.cpp/pull/30621)）解决了新检查点加载失败问题。  
- **内存效率**：服务器现在仅将可恢复的槽状态保存至提示缓存（[#30498](https://github.com/ggml-org/llama.cpp/pull/30498)），防止不必要的内存膨胀。

---

### **5. 稳定性与回归问题**  
| 问题 | 严重性 | 状态 | 备注 |
|------|----------|--------|-------|
| [#27428](https://github.com/ggml-org/llama.cpp/issues/27428) | 关键 | 开放（27 条评论） | Draft-MTP 在多 GPU 层分割场景下使提示处理速度减半（CUDA）；可在 RTX 4090 上复现。 |
| [#30364](https://github.com/ggml-org/llama.cpp/issues/30364) | 高 | 开放（10 条评论） | Vulkan：Strix Halo（gfx1151）上，MiniMax-M2 提示处理在长上下文（`ubatch > 128`）时崩溃，触发 GPU “设备丢失”。 |
| [#28196](https://github.com/ggml-org/llama.cpp/issues/28196) | 高 | 开放（11 条评论） | CUDA：RTX 5090 上的 Qwen35 仅达到理论峰值的 76%（约内存受限潜力的 28%）；Windows 路径比 Linux 慢 1.5–1.6 倍。 |
| [#30610](https://github.com/ggml-org/llama.cpp/issues/30610) | 高 | 开放（3 条评论） | Metal：Nemotron 3.5 Bolt 74B-A9B 在 `ggml_metal_op_mul_mat_id` 中发生段错误。 |
| [#30577](https://github.com/ggml-org/llama.cpp/issues/30577) | 中等 | 开放（6 条评论） | `llama-server` 可通过提示缓存管理中的拒绝服务攻击耗尽显存。 |

> ✅ **正在进行的修复**：  
> - PR #27897 修复 `draft-mtp` 与 `-md` 组合使用的初始化崩溃问题。  
> - PR #30593 添加 `--moe-cache-topk`，用于限制主机缓存 MoE 层中的活跃专家数量。

---

### **6. 对应用开发者意味着什么**  
- **部署大型 MoE 模型**（如 GLM5-Next、Qwen3-Coder）时，若系统 GPU VRAM 有限，请使用 `--moe-cache-mib` + `--moe-cache-topk` —— 可在最小化 PCIe 开销的前提下实现更快推理。  
- **采用 LiliCorr**（`--spec-type draft-lilicorr`）以获得更高质量的预测解码，尤其适用于对草稿准确性敏感的代理工作流。  
- **在 Vulkan（Strix Halo）上避免使用 `ubatch > 128`**，直至 [#30364](https://github.com/ggml-org/llama.cpp/issues/30364) 修复。  
- **监控 `llama-server` 内存使用情况** —— 提示缓存漏洞（#30577）可能导致高吞吐场景下的资源耗尽。  
- **利用新 UI 功能**：PR #29584 实现了 GGUF 模型与侧车草稿的直接 HF Hub 查找与下载 —— 极适合快速原型开发。  
- **期待更好的移动端支持**：Hexagon Q1_0 与 Q2_0 支持（[#30122](https://github.com/ggml-org/llama.cpp/pull/30122)，[#30630](https://github.com/ggml-org/llama.cpp/pull/30630)）为骁龙设备上的高效部署铺平道路。

---  
*摘要生成时间：2026-10-16*  
*来源：[github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-16**

---

### **1. 今日亮点**  
10月13日报告了 `glm-5.3-flash:cloud` 出现严重回归问题，导致大量文本退化（重复出现“the = the =”），至今未解决，影响约5–8%的用户。与此同时，多个与GPU推理相关的稳定性问题浮现——RTX 5090上出现CUDA内存访问违规，ROCm在CPU卸载MoE层时发生OOM崩溃，A100在预热阶段出现PCIe总线丢失，凸显高端硬件承受的压力持续加剧。此外，Ollama Cloud现已支持 **Clef**，进一步拓展其智能体生态。

---

### **2. 发布与破坏性变更**  
无。过去24小时内未发布新版本。

---

### **3. 新模型与硬件支持**  
- ✅ **MiniCPM-V 4.7 (35b-a3b)**：通过 PR #19024（将 `llama.cpp` 更新至 b11551）修复，解决了 `unknown projector type: minicpmv4_7` 错误。  
- ✅ **Q2_0 GGUF 量化**：通过 PR #18967 添加支持，适用于 `llama.cpp` v0.40.5+；可在兼容模型（如 Prism ML 的 Bonobo）上实现更低精度推理。  
- ✅ **Clippy Vision**：新模型集成工作正在进行中，PR #19033。  
- ✅ **Clef**：现已在 Ollama Cloud 上可用，PR #19036。  
- 📌 **ROCm / AMD**：MoE 层卸载（PR #19015）和工具调用处理（Issue #19015）仍在持续推进中。

> 🔗 [PR #19024](https://github.com/ollama/ollama/pull/19024) | [PR #18967](https://github.com/ollama/ollama/pull/18967)

---

### **4. 性能与优化**  
- ⚙️ **GGUF v4 改进**：PR #19037 增加 64KB DMA 页面对齐和 O(1) token 跨度查找，支持零拷贝张量映射与更快的模型检查——对大规模 RAG 流水线至关重要。  
- 🚀 **MLX 引擎批处理**：功能请求 #17280 希望支持并发解码（类似 `OLLAMA_NUM_PARALLEL`），以充分发挥 Apple Silicon 潜力。目前请求仍为串行处理（#17666）。  
- 💸 **内存效率**：PR #18813 确保在 blob 下载期间遇到磁盘满时返回错误，防止静默损坏与空间浪费。  
- 📉 **受CPU限制的容器**：Issue #17916 报告因 `n_threads` 忽略 cgroup 配额，导致吞吐量下降约45倍——影响 Kubernetes 与容器化部署。

> 🔗 [PR #19037](https://github.com/ollama/ollama/pull/19037) | [Issue #17916](https://github.com/ollama/ollama/issues/17916)

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 影响 | 修复状态 |
|--------|------|-------|-----------|
| 🔴 严重 | `glm-5.3-flash:cloud` 自10月12日起生成垃圾文本（"the = the ="） | 5–8%失败率；集群数据已损坏（probe2.img = 全零） | 开放中，尚未修复 ([#18980](https://github.com/ollama/ollama/issues/18980)) |
| 🔴 高 | RTX 5090 上使用 Cohere MoE 时出现 CUDA 非法内存访问 | 导致 `llama-server` 崩溃，退出码 `0xc0000409` | 开放 ([#18642](https://github.com/ollama/ollama/issues/18642)) |
| 🔴 高 | A100 在 Qwen3.5 预热阶段出现 PCIe 总线丢失（0.34.4 与 0.35.0 版本） | 系统级重启；跨版本可复现 | 开放 ([#19006](https://github.com/ollama/ollama/issues/19006)) |
| 🔴 高 | ROCm：gemma4:26b-a4b 在 CPU 卸载层发生 OOM 后段错误 | 持续失败，直至设置 `GGML_CUDA_DISABLE_GRAPHS=1` | 开放 ([#19015](https://github.com/ollama/ollama/issues/19015)) |
| 🟡 中等 | 原生路由 `/api/chat` 中工具定义为空（但 `/v1` 路由正常） | 依赖原生 API 的应用中工具调用失效 | 开放 ([#19040](https://github.com/ollama/ollama/issues/19040)) |
| 🟡 中等 | `bge-m3` 在某些 Markdown 文件上返回 HTTP 500 错误，提示 `json: unsupported value: NaN` | 对有效输入嵌入失败且无声报错 | 开放 ([#15582](https://github.com/ollama/ollama/issues/15582)) |

---

### **6. 对应用开发者的意义**  
- **避免使用 `glm-5.3-flash:cloud`**，直到问题 #18980 解决——预计输出质量严重下降。建议使用替代模型如 `qwen3.5` 或 `mistral-large-4`。  
- **GPU 特定风险**：若部署于 RTX 5090 或 A100，MoE 模型可能存在不稳定性——请禁用 `think: true` 并监控总线丢失情况。对于 ROCm，可临时使用 `GGML_CUDA_DISABLE_GRAPHS=1` 作为规避方案。  
- **工具调用可靠性**：不要依赖原生 `/api/chat` 路径进行工具调用——请继续使用 `/v1` 直到 #19040 修复。  
- **模型可移植性**：随着 Q2_0 与 GGUF v4 支持已上线，开发者可优化存储与加载时间——尤其适用于边缘与移动端推理场景。  
- **容器化部署**：务必显式设置 `n_threads`——默认行为忽略 cgroup CPU 限制，可能导致性能灾难性下降。

> 🔗 [Issue #18980](https://github.com/ollama/ollama/issues/18980) | [Issue #19040](https://github.com/ollama/ollama/issues/19040) | [PR #19037](https://github.com/ollama/ollama/pull/19037)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# **LiteLLM 消息简报 – 2026-10-16**

---

### **1. 今日亮点**  
LiteLLM 项目持续演进，重点聚焦成本准确性、代理路由稳定性以及可观测性增强。主要更新包括修复关键支出日志问题（如因重复使用请求 ID 导致的 `SpendLogs` 行丢失）、改进 Gemini 与 Anthropic 等模型的分词计数，以及加强身份令牌在 SSO 与跨应用访问（XAA）中的集成。团队还推进了面向客户部署的负载测试与性能验证工具链。

---

### **2. 发布与破坏性变更**  
- 今日发布 **v1.107.0-dev.2** 与 **v1.106.0-rc.4**。两者均为预发布候选版本，未宣布任何破坏性变更。  
- 所有 Docker 镜像均通过 [cosign](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0) 使用相同密钥进行加密签名 —— 可通过 `cosign verify` 验证。  
- 近期提交与问题中未检测到不兼容的 API 变更。

> 🔗 [GitHub 发布 v1.107.0-dev.2](https://github.com/BerriAI/litellm/releases/tag/v1.107.0-dev.2) | [验证镜像签名](https://docs.sigstore.dev/cosign/overview/)

---

### **3. 新模型与硬件支持**  
本周期未新增模型或硬件后端。但：
- **AWS Bedrock 上的 Claude 平台** 通过 PR #46670 改进了 OIDC 网络身份支持，通过授予必要的 `sts:GetWebIdentityToken` 权限解决了 403 错误。
- **Exa AI 搜索 API** 在 PR #46525 中获得对结构化输出、上下文锚定及动态高亮功能的更新支持。
- **Gemini** 通过 PR #36460 实现可配置的思维摘要功能（新增 `gemini_include_thoughts_default` 设置）。

> 🔗 [PR #46670 – Bedrock OIDC 修复](https://github.com/BerriAI/litellm/pull/46670)  
> 🔗 [PR #46525 – Exa AI 搜索更新](https://github.com/BerriAI/litellm/pull/46525)  
> 🔗 [PR #36460 – Gemini 思维摘要开关](https://github.com/BerriAI/litellm/pull/36460)

---

### **4. 性能与优化**  
- **分词计数精度提升**：PR #46777 引入 `litellm_count_source` 与 `token_count_fallback_model`，使开发者可区分真实值与估算值。修复了 Sonnet 5.5、Haiku 5.5、Kimi K3 与 DeepSeek 的错误行为。  
- **响应级别支出日志**：PR #46768 确保每个 WebSocket 轮次生成一条 `SpendLog` 记录，而非在连接关闭时聚合 —— 对 OpenAI 风格接口的账单对账至关重要。  
- **性能测试工具链**：PR #46806 引入负载测试套件，支持 Docker 构建选项与 TCP_NODELAY，适用于客户代理；PR #46774 增加 JUnit 属性以在 CI 运行中追踪性能指标。

> 🔗 [PR #46777 – 可配置分词计数](https://github.com/BerriAI/litellm/pull/46777)  
> 🔗 [PR #46768 – 按轮次支出日志](https://github.com/BerriAI/litellm/pull/46768)  
> 🔗 [PR #46806 – 网关负载测试套件](https://github.com/BerriAI/litellm/pull/46806)

---

### **5. 稳定性与回归问题**  
今日报告的关键稳定性问题：

| 问题 | 严重性 | 状态 | 修复 PR |
|------|----------|--------|--------|
| [#46403](https://github.com/BerriAI/litellm/issues/46403): Ollama `chatcmpl-<0..999>` 请求 ID 重用导致 `SpendLogs` 行无声丢失 | ⚠️ 高 | 已关闭 | N/A |
| [#46407](https://github.com/BerriAI/litellm/issues/46407): `gpt-image-2.5-flare` 在欧盟数据驻留场景下缺少上浮成本追踪 | ⚠️ 中 | 开放 | N/A |
| [#46791](https://github.com/BerriAI/litellm/issues/46791): Exa AI 全页文本返回默认值 → 高成本、低价值 | ⚠️ 中 | 已关闭 | [PR #46791](https://github.com/BerriAI/litellm/pull/46791) |
| [#46391](https://github.com/BerriAI/litellm/issues/46391): 通过 `/v1/chat/completions` 调用 Claude 时忽略 `prompt_cache_breakpoint` | ⚠️ 中 | 已关闭 | [PR #46391](https://github.com/BerriAI/litellm/pull/46391) |

> 🔗 [Issue #46403 – Ollama 的无声支出日志丢失](https://github.com/BerriAI/litellm/issues/46403)  
> 🔗 [Issue #46407 – 缺失欧盟上浮成本追踪](https://github.com/BerriAI/litellm/issues/46407)  
> 🔗 [PR #46791 – Exa AI 内容默认值处理](https://github.com/BerriAI/litellm/pull/46791)

---

### **6. 对应用开发者的意义**  
- **成本监控现在更准确**：使用 `litellm_count_source` 与 `token_count_fallback_model` 审计你的分词估算是否可靠。注意：若你在欧盟地区，`gpt-image` 成本可能被低估。  
- **避免代理中的静默数据丢失**：若使用 Ollama 或其他具有可预测响应 ID 的后端，请确保验证 `SpendLogs` —— 当前行为可能导致高达 46% 的已记录支出丢失。  
- **实现推理输出的细粒度控制**：通过新设的 `gemini_include_thoughts_default` 标志，可在不关闭推理的前提下禁用思维摘要 —— 特别适合那些最终会丢弃摘要的智能体。  
- **使用身份令牌实现安全跨应用访问**：如 PR #46748 与 #46745 所示，支持 ID-JAG 与基于 SAML 的 OAuth2 流程 —— 在受监管环境中实现安全、可审计的智能体间协作至关重要。

> ✅ **实用建议**：若使用 Ollama 或自托管后端且请求 ID 生命周期较短，请升级至 `v1.107.0-dev.2` 或更高版本，并验证 `SpendLogs` 完整性。

---  
*简报生成时间：2026-10-16 | 来源：[BerriAI/litellm GitHub](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# **Unsloth Digest – 2026-10-16**

---

### **1. 今日亮点**  
Unsloth v0.1.908-beta 现已原生支持 NVIDIA 的 **Nemotron 3.5 Bolt**（需 24GB VRAM）和 Meta 的 **Muse Spark Open**，可通过 Unsloth 生态系统在本地运行前沿模型。此次发布还新增了 **text-diffusion LLM 支持**、增强的 **DeepSpeed 训练集成** 以及改进的 **代码代理提示缓存**，显著提升代理级工作流性能。

👉 [v0.1.908-beta 版本发布](https://github.com/unslothai/unsloth/releases/tag/v0.1.908-beta)  
👉 [NVIDIA Nemotron 3.5 Bolt 使用指南](https://unsloth.ai/docs/models/nemotron)

---

### **2. 发布与破坏性变更**  
- **v0.1.908-beta** 已正式上线，包含新模型集成与后端优化。目前未报告破坏性 API 变更，但建议用户在升级时验证现有微调脚本的兼容性。  
- **Studio 安装器逻辑修复**：修复了 Windows 系统下对 AMD GPU 的检测问题（`hipinfo` 输出处理）及 ROCm 轮子选择逻辑，避免安装过程中的静默失败。

👉 [v0.1.908-beta 发布说明](https://github.com/unslothai/unsloth/releases/tag/v0.1.908-beta)

---

### **3. 新增模型与硬件支持**  
- ✅ **NVIDIA Nemotron 3.5 Bolt**（需 24GB VRAM）—— Unsloth 中首次官方支持。  
- ✅ **Meta Muse Spark Open**—— 完全支持本地推理。  
- ✅ **FLUX.3 Image Klein (distilled/base)**—— 通过 PR #13933 新增 **INT8 / FP8 / GGUF** 支持。  
- ✅ **AMD Strix Halo APU (gfx1151)**—— 通过 PR #13931 优化驱动路由与 ROCm 内核选择。  
- ✅ **多 GPU MIG 卡片切分**—— 通过 PR #13927 现已由 Studio 正确识别并正确分配大小。

> 📌 注意：使用 AMD 系统的用户应确保正确设置 `HIP_VISIBLE_DEVICES`，以避免错误的 GPU 分配。

---

### **4. 性能与优化**  
- **KV 缓存抢占机制**（PR #10301）：通过 `llama-server --preempt-ram` 实现单个 KV 缓存的并行聊天共享，在高并发场景下可降低高达 **~40% 的内存开销**。  
- **GPU 负载均衡**：自动图像/视频推理现在会选择 *最空闲* 的 GPU（PR #13928），提升多 GPU 环境下的利用率。  
- **MoE 专家反量化**：可选的局部反量化（`UNSLOTH_MOE_SELECTIVE_DEQUANT=1`）可将稀疏专家保留在编译块外，减少编译时间和内存压力。  
- **Flash Attention 自动选择**：在 ROCm 上，Studio 现在使用定时探测替代硬编码模型表（PR #13792），动态选择比 SDPA 更快的 flash_attn。

> 🔍 基准测试显示，在启用 Vulkan + 优化注意力路径的 AMD GPU 上，扩散任务性能最高提升达 **2.1 倍**。

---

### **5. 稳定性与回归问题**  
| 问题 | 严重程度 | 状态 | 修复 PR |
|------|----------|--------|--------|
| `diffusion_prompt_cache.py` 在图像编辑（Qwen-Image-2.1）时出现 `TypeError` | 严重 | 已关闭 | [Issue #13638](https://github.com/unslothai/unsloth/issues/13638) |
| 预构建 ROCm `linux/rocm` 二进制文件在 `hipStreamCreateWithFlags` 处崩溃 | 严重 | 已关闭 | [Issue #12205](https://github.com/unslothai/unsloth/issues/12205) |
| 模型重载后长对话重新执行完整预填充（因槽位 KV 未持久化） | 高 | 开放中 | [Issue #9037](https://github.com/unslothai/unsloth/issues/9037) |
| 使用 `unsloth/embeddinggemma-2` 在索引阶段文件嵌入失败 | 中等 | 已关闭 | [Issue #13663](https://github.com/unslothai/unsloth/issues/13663) |
| AMD Strix Halo 推理默认使用 Vulkan → 预填充速度慢 | 中等 | 已关闭 | [Issue #10656](https://github.com/unslothai/unsloth/issues/10656) |

> ⚠️ **注意**：多个与多 GPU 及 AMD/ROCm 相关的稳定性问题正通过 PR #13931、#13927、#13792 积极修复中。

---

### **6. 对应用开发者意味着什么**  
- **构建更强大的代理**：借助 **text-diffusion 支持**、**更好的提示缓存** 以及 **Nemotron 3.5/Muse Spark Open** 的本地可用性，开发者现在无需依赖云端即可原型设计高级多模态代理。  
- **利用多 GPU 效率**：使用 `UNSLOTH_MOE_SELECTIVE_DEQUANT=1` 和 `--preempt-ram` 可在长时间运行的代理会话中降低内存压力。  
- **优化分布式推理**：使用 `unsloth doctor --gpus`（新 CLI 工具）可在部署前诊断多 GPU 配置错误。  
- **未来兼容性保障**：向基于动态注意力选择（flash_attn 探针式）的转变意味着更少硬编码——您的应用将在不同硬件上自动优化。

> 💡 实用技巧：对于生产级代理系统，启用 `--preempt-ram` 并使用 **带 fit 过滤器的 Safetensors 模型**（PR #13945）以避免显存过载。

---

✅ **开发者下一步行动**：升级至 `v0.1.908-beta`，使用 FLUX.3 与 Nemotron 3.5 进行测试，并将 `unsloth doctor --gpus` 集成至 CI/CD 流程以进行基础设施验证。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*