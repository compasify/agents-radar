# AI 基础设施日报 2026-09-12

> 生成时间: 2026-09-12 02:48 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目 AI 基础设施生态报告 – 2026-09-12**

---

### **1. 生态概览**  
2026年第三季度，AI基础设施领域呈现出高性能推理引擎、分布式智能体工作流与跨平台模型服务的快速融合。各项目正日益聚焦于异构硬件（尤其是AMD ROCm (gfx950/gfx1201)、Apple MLX 和 NVIDIA Blackwell）上的可扩展性，同时在推测解码、MoE卸载和多模态支持方面持续突破边界。对稳定性、安全性和开发者可观测性的日益重视，标志着行业正从实验性部署向生产级AI系统转型。

---

### **2. 活动对比**

| 项目       | 开放问题 | 开放 PRs | 最近发布？ | 备注 |
|---------------|-------------|----------|------------------|-------|
| **vLLM**      | 87          | 42       | ❌ 否            | 高严重性内存泄漏（v0.28+）和 DFlash2 回退问题主导活动 |
| **SGLang**    | 76          | 38       | ❌ 否            | 重点聚焦分布式 KV 缓存与 Mamba 状态正确性 |
| **llama.cpp** | 112         | 56       | ✅ 是 (`b10905`–`b10919`) | 后端调优活跃；RDNA4 Flash Attention 回退问题严重 |
| **Ollama**    | 141         | 29       | ❌ 否            | 云模型与工具调用的稳定性问题占据主导 |
| **LiteLLM**   | 108         | 45       | ✅ 是 (`v1.102.0-dev.2`) | 安全修复与定价同步驱动发展势头 |
| **Unsloth**   | 89          | 34       | ❌ 否            | 专注代理持久化与项目工作区 |

> 🔍 *洞察*：**Ollama** 因用户广泛报告的缺陷导致问题数量领先，而 **llama.cpp** 展现出最高的开发活跃度。**LiteLLM** 在近期安全发布节奏上表现突出。

---

### **3. 模型支持竞赛**

| 新模型 / 架构             | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|--------------------------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1-Flash**              | ✅ (H20, MI355X) | ✅ (通过 PR) | ✅ (RDNA4) | ⚠️ 已请求 | ✅ 通过 Fireworks AI | ❌ |
| **Qwen3.8-Flash-Next (多模态)** | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Maple 20B-A1B (三值 MoE, TQ1_0)** | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **GLM-5.3-Flash (上下文并行)** | ⚠️ 部分支持（仅 ROCm） | ✅ (已恢复) | ❌ | ❌ | ❌ | ❌ |
| **SenseNova-U1/U1.5**                | ❌ | ✅ (跟踪中) | ❌ | ❌ | ❌ | ❌ |
| **Prism (新提供方)**             | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |

> 🏆 **领先者**：**SGLang** 在模型特定修复方面表现强劲（如 GLM-5.3 上下文并行）。  
> 🥈 **亚军**：**llama.cpp** 在底层架构支持方面卓越（TQ1_0、RDNA4、Metal/SYCL）。  
> 🥉 **显著差距**：尽管需求旺盛，**Ollama** 仍缺乏对 Qwen3.8-Flash-Next 与 DeepSeek-V4.1-Flash 等先进模型的原生支持。

---

### **4. 性能前沿**

| 优化重点               | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|------------------------------------|------|--------|-----------|--------|---------|---------|
| **KV 缓存与上下文并行** | ✅ (MoE, DFlash2) | ✅ (PD 分离，HiCache) | ⚠️ (FP8 速度下降) | ❌ | ✅ (提示成本估算) | ❌ |
| **批处理与吞吐量**          | ✅ (批处理不变性) | ✅ (更宽的融合核函数) | ✅ (向量 FA) | ⚠️ (模型加载回退) | ✅ (HTTP/2 跟踪) | ❌ |
| **量化效率**        | ✅ (FP8 WO_A, MoE 路由) | ⚠️ (FP8 KV 缓存慢) | ✅ (TQ1_0, Q4_K P6) | ❌ (IQ3_S 静默失败) | ✅ (定价感知) | ❌ |
| **分布式服务**            | ⚠️ (推测解码) | ✅ (PD 分离) | ❌ | ❌ | ✅ (代理扩展) | ❌ |
| **内核级调优**            | ✅ (DFlash2, AWQ GEMM) | ✅ (mHC/RMSNorm 融合) | ✅ (HIP FA, Metal 融合) | ❌ | ❌ | ❌ |

> 🔥 **前沿领跑者**：  
> - **vLLM** 在推测解码与混合 Mamba/GDN 优化方面占优。  
> - **SGLang** 凭借 PD 分离技术，在可扩展智能体推理方面领先。  
> - **llama.cpp** 在跨后端内核调优（Metal、SYCL、HIP）方面表现最佳。

---

### **5. 层级定位**

| 项目       | 主要层级                     | 核心差异化优势 |
|---------------|-----------------------------------|--------------------|
| **vLLM**      | **推理引擎**              | 高吞吐、GPU 优化服务；推测解码业界最佳 |
| **SGLang**    | **高吞吐推理栈** | 分布式 KV 缓存、智能体工作流引擎；适用于长周期推理场景 |
| **llama.cpp** | **本地运行时与跨后端** | 兼容通用 CPU/GPU/Metal/Vulkan；依赖极低 |
| **Ollama**    | **模型网关与 CLI 编排器** | 开发者友好的本地模型托管；对后端抽象封装 |
| **LiteLLM**   | **通用 LLM 网关**         | 多提供方路由、成本感知代理、实时定价同步 |
| **Unsloth**   | **智能体工作流平台**     | 持久化代理状态、基于 Git 的项目、沙箱执行 |

> 💡 *战略洞察*：  
> - **vLLM/SGLang** 是大规模部署的基础设施基石。  
> - **llama.cpp/Ollama** 定位边缘/本地推理。  
> - **LiteLLM** 在多提供方环境中扮演“流量调度员”角色。  
> - **Unsloth** 作为端到端智能体应用平台具有独特定位。

---

### **6. 趋势信号**

#### **新兴行业趋势：**
1. **硬件多样化加速推进**：ROCm（AMD gfx950/gfx1201）、Apple MLX 与 Intel XPU 已不再是小众选择——它们已成为路线图规划的核心。**llama.cpp**、**Unsloth** 与 **SGLang** 等项目现已优先支持这些平台。
2. **代理持久化已成为功能**：Unsloth 在浏览器刷新后仍保持会话状态，表明**有状态、长时间运行的智能体**正从原型走向生产环境。
3. **安全与供应链完整性不容妥协**：LiteLLM PyPI 包被入侵事件及默认根执行权限凸显，**对开源工具的信任正受到严格审视**——签名验证、加固措施与最小权限执行已成为基本要求。
4. **推测解码稳定性至关重要**：多个项目报告在 DFlash2 + 语法解析组合下出现崩溃或确定性失败，表明**推测解码在生产环境中的使用仍不稳固**。
5. **成本意识驱动代理设计**：LiteLLM 新增提示缓存成本估算功能，反映出市场正转向**预算感知的推理编排**。

#### **开发者应关注事项：**
- ✅ 在 vLLM/SGLang 解决 FSM 确定性问题前，避免在结构化输出中使用 `DFlash2`。
- ✅ 若稳定性 > 性能，建议使用 vLLM v0.27.1（v0.28+ 存在内存泄漏）。
- ✅ 密切监控 Ollama 的 `cloud` 模型——其运行超过 45 分钟后不稳定。
- ✅ 启用 cosign 验证以防止 LiteLLM 镜像的供应链风险。
- ✅ 在 Unsloth 中利用项目工作区构建可复现、可审计的智能体流水线。

> 📌 **最终结论**：AI 基础设施生态正在迅速成熟——开发者如今不仅需决定“运行什么”，更要考量“如何运行、如何扩展、如何应对故障”。优先选择**稳定性、安全性与可组合性**，而非单纯追求极致性能。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-09-12**

---

### **1. 今日亮点**  
vLLM 项目持续加速对下一代模型与硬件的支持，针对混合 Mamba/GDN 架构的推测解码正确性进行了关键修复，并对 DeepSeek-V4.1-Flash 在 NVIDIA 与 AMD 平台上的性能进行了优化。当前重点聚焦于 ROCm 稳定性与量化效率，包括 FP8 内核改进以及 MoE 路由逻辑向现代后端迁移。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新版本发布。*  
然而，正在进行的工作表明未来版本可能存在破坏性变更：
- **`--tool-call-parser qwen3_coder` 现在会静默忽略 `tool_choice: "required"`**（Issue #54808）——此行为回归需在应用层进行规避。
- **DFlash2 推测解码 + xgrammar 导致确定性 FSM 失败**（Issue #53777）——可能需禁用 DFlash2 或调整语法处理，直至问题解决。

> 🔗 [Issue #54808](https://github.com/vllm-project/vllm/issues/54808), [Issue #53777](https://github.com/vllm-project/vllm/issues/53777)

---

### **3. 新模型与硬件支持**  
- ✅ **DeepSeek-V4.1-Flash** 现已在 **NVIDIA H20 (SM90)** 与 **AMD MI355X (gfx950)** 上获得支持，但高并发下暴露 `dsv4_topk` 内核非法内存访问问题（Issue #56389）。
- ✅ **ROCm (gfx950)** 通过 FP8 WO_A 输出投影（PR #54894）和增强的 MoE 内核迁移（PR #54959）获得更优支持。
- ✅ **Qwen3.8-Flash-Next** 现已支持 **多模态**，并避免编码器重复使用（Issue #55639）。
- 🛠️ **Intel XPU 与 CPU** 方面取得进展，集成性能分析器（PR #56542）并完成 ZenCPU torch pin 一致性测试（PR #52244）。

> 🔗 [PR #54894](https://github.com/vllm-project/vllm/pull/54894), [PR #56389](https://github.com/vllm-project/vllm/issues/56389), [PR #55639](https://github.com/vllm-project/vllm/issues/55639)

---

### **4. 性能与优化**  
- **8x MI355X 上的 DeepSeek-V4.1-Flash**：在并发度为 1 时达到 **35.89 tokens/sec（每 GPU 8.97）**，TTFT p50 为 **0.898s**，仍有优化空间（Issue #56506）。
- **AWQ CUDA GEMM 内核** 在 RTX 3070 Ti 上仍处于 L1/内存瓶颈；剖析显示存在优化机会（Issue #55462）。
- **DFlash2 + YaRN**：尽管目标仅重用约 1.039M token，但相同 1.04M 提示词仍出现零前缀缓存复用（Issue #54094）。
- **MoE 专家卸载**：通过 GPU 缓存 + LFRU 淘汰机制实现增量卸载，使小型 GPU 可运行大型 MoE 模型（RFC #38256）。
- **批处理不变性优化**：持续推进以稳定确定性推理（Issue #27433）。

> 🔗 [Issue #56506](https://github.com/vllm-project/vllm/issues/56506), [Issue #55462](https://github.com/vllm-project/vllm/issues/55462), [Issue #54094](https://github.com/vllm-project/vllm/issues/54094)

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 摘要 | 修复状态 |
|--------|------|--------|-----------|
| ⚠️ 高 | [#54237](https://github.com/vllm-project/vllm/issues/54237) | v0.28.0/v0.29.0 消耗全部主机内存并冻结（v0.27.1 正常） | ❌ 尚无修复 |
| ⚠️ 高 | [#56389](https://github.com/vllm-project/vllm/issues/56389) | H20 高并发下 `dsv4_topk` 存在非法内存访问 | ✅ 通过 `max_num_seqs=256` 临时缓解 |
| ⚠️ 中 | [#54928](https://github.com/vllm-project/vllm/issues/54928) | DFlash2 即使启用 `--enforce-eager` 仍会改变 Qwen3.8 思考输出至第 30 个 token | ❌ 尚无 PR |
| ⚠️ 中 | [#54919](https://github.com/vllm-project/vllm/issues/54919) | DGX Spark TP2 上长前填充工作负载导致活跃解码饥饿 3–7 分钟 | ❌ 尚无修复 |
| ⚠️ 低 | [#54924](https://github.com/vllm-project/vllm/issues/54924) | ROCm 上 GLM-5.3 准确率崩溃（GSM8K 从 91.6% → 14.9%）在强制 MRV1 后 | ❌ 补丁待发布 |

---

### **6. 对应用开发者的启示**  
- **在 Issue #53777 解决前，避免在结构化输出场景（如 `xgrammar`）中使用 `DFlash2`** —— 可能出现确定性失败。
- **在 H20 上部署 `DeepSeek-V4.1-Flash` 时，请使用 `max_num_seqs=256`** 以防止崩溃。
- **验证工具调用行为** —— 当前 `qwen3_coder` 解析器会忽略 `tool_choice: "required"`（Issue #54808）。
- **密切监控内存使用** —— v0.28.0+ 存在已知内存泄漏（Issue #54237）；若稳定性至关重要，请坚持使用 v0.27.1。
- **为 ROCm 迁移做好准备** —— FP8 与 MoE 优化进展迅速，但部分模型（如 GLM-5.3）仍不稳定（Issue #54924）。

> 🔗 [上述所有问题链接](https://github.com/vllm-project/vllm/issues?q=is%3Aopen+sort%3Aupdated-desc)

---  
*摘要生成时间：2026-09-12 | vLLM GitHub 活动追踪*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 消息简报 – 2026-09-12**

---

### **1. 今日重点**  
SGLang 生态系统持续推进高吞吐、低延迟推理栈的演进，重点聚焦分布式 KV 缓存可扩展性及针对 GPU 的优化。关键进展包括恢复 GLM-5.3 Flash 解码上下文并行（PR #39117）、修复 HiCache 中 Mamba 状态处理的重大问题（PR #39156），以及通过 PD 分离改进稳定多 GPU 代理工作负载（Issue #21846）。这些更新体现了在大规模场景下对系统鲁棒性与性能的高度重视。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未报告新版本或破坏性 API/配置变更。无新发布版本。

---

### **3. 新模型与硬件支持**  
- **GLM-5.3-Flash**：PR #39117 在 Blackwell GPU（SM120）上恢复 `decode_context_parallelism` 支持，实现高效长上下文解码。追踪问题：[#37813](https://github.com/sgl-project/sglang/issues/37813)。  
- **AMD Radeon RDNA3/RDNA4（gfx1100/gfx1201）**：正在进行启用计划，议题 [#30599](https://github.com/sgl-project/sglang/issues/30599) —— 现已正式纳入对 Instinct 数据中心芯片以外的消费级 GPU 支持跟踪。  
- **SenseNova-U1/U1.5**：议题 [#37742](https://github.com/sgl-project/sglang/issues/37742) 确认正在积极开发，以集成官方 OpenSenseNova 参考实现。

---

### **4. 性能与优化**  
- **DeepSeek-V4.1**：PRs #39158 与 #39159 将融合 mHC combine/RMSNorm 内核扩展至更宽批次（最高达 48 行），减少对独立内核的回退，提升 Blackwell 平台预填充吞吐量。  
- **Qwen3-VL 与 Qwen-Image-Layered**：PRs #36411 与 #38549 通过避免冗余缓存和正确返回多图像输出，降低内存浪费，优化单次流式处理用例的效率。  
- **扩散模型（Hopper）**：PR #38584 复用现有 QKV epilogue 内核并打包视觉窗口，减少重复注意力调用，显著提升 DiT 去噪性能。  
- **推测解码**：PR #32673 引入 *窗口化草稿解码注意力* 机制，用于内置 EAGLE/MTP 草稿，限制长前缀生成期间的 KV 读取开销。

---

### **5. 稳定性与回归问题**  
- **CUDA 核心转储**：议题 #26340（298 条评论）追踪来自 CI 测试运行（`pr-test.yml`）的重复 CUDA 核心转储问题。通过 `.github/actions/upload-cuda-coredumps/action.yml` 自动收集。高优先级；暂无修复。  
- **GLM-5.3 崩溃**：议题 #39072 报告在分离解码 + DP-注意力 + 推测解码组合下发生崩溃。可复现；根源为 flash attention 路径中的上游状态管理问题。  
- **FP8 KV 缓存性能下降**：议题 #30815 指出因未融合的 K/V 量化与逐层 Q 转换开销导致性能回归——严重影响解码速度。  
- **Mamba 检查点丢失**：议题 #37817 揭示当接受的 token 跨越追踪边界时，DFlash 会丢失 Mamba 检查点——影响长序列状态持久化。

> ✅ *部分问题已有修复 PR*：  
> - PR #39117：恢复 GLM-5.3 Flash 解码上下文并行，并修复虚拟 KV 地址映射  
> - PR #39156：通过正确的状态内核路由修复 Mamba 工具参数解析错误

---

### **6. 对应用开发者的影响**  
- **代理型工作负载**：分布式 KV 缓存系统路线图（Issue #21846）预示即将支持可扩展的多 GPU 代理执行——对长周期推理与规划至关重要。  
- **硬件灵活性**：正在积极推进 AMD 消费级 GPU 支持——预计不久将覆盖更广的 ROCm 兼容性，尤其针对 RDNA3/4 桌面显卡。  
- **模型准确性与一致性**：使用 DeepSeek V4/V3.2 时需注意工具调用解析问题（Issue #38924）——异常的 `"arguments"` 包装键可能破坏下游逻辑。  
- **调试与可观测性**：请始终启用 `include_reasoning=false` 标志（Issue #39103）——当前行为即便禁用仍会输出推理内容，可能导致响应膨胀。  
- **性能调优**：对于高吞吐系统，建议利用近期 PR（如 #39158，更宽融合内核）和 #38549（多输出扩散处理）以最大化吞吐量并避免内存浪费。

> 🔗 **推荐关注**：  
> - [议题 #26340](https://github.com/sgl-project/sglang/issues/26340)：对生产环境稳定性至关重要  
> - [PR #39117](https://github.com/sgl-project/sglang/pull/39117)：GLM-5.3 Flash 用户必备  
> - [议题 #21846](https://github.com/sgl-project/sglang/issues/21846)：面向未来代理可扩展性的战略重点

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 消息简报 – 2026-09-12**

---

### **1. 今日重点**  
最新更新聚焦于 Metal、Vulkan、SYCL 及 ROCm 后端的稳定性与性能调优，修复了 RDNA4（gfx1201）上 Flash Attention 的回归问题以及 Vulkan `argsort` 中的内存安全缺陷。一项重大 PR 重构了 Metal 的融合表以提升可维护性与正确性，同时新增对 CPU 与 SYCL 上 TQ1_0 量化格式的支持，增强对新兴模型格式的兼容性。

---

### **2. 发布与破坏性变更**  
- **`b10919`**：将 `ggml-webgpu` 更新至近期 Dawn 版本，移除了 WASI 上过时的原生功能。[PR #28683](https://github.com/ggml-org/llama.cpp/pull/28683)  
- **`b10905`**：为 AMD RDNA4（gfx1201）优化 HIP Flash Attention，现优先使用全块网格（whole-tile FA grids）而非 stream-k，且启用头尺寸为 256 时的 MMA FA。[PR #28102](https://github.com/ggml-org/llama.cpp/pull/28102)  
- **`b10907`**：修复 MoE 模型（DeepSeek-V4、GLM4-MoE、Cohere2-MoE）在 MTP 上下文 KV 缓存的分配问题。[PR #28630](https://github.com/ggml-org/llama.cpp/pull/28630)  
- **`b10906`**：修复服务器模式中图像输入后推测位置处理的逻辑问题。[PR #28715](https://github.com/ggml-org/llama.cpp/pull/28715)

> ⚠️ **迁移提示**：`b10905` 中移除 `rocWMMA` FlashAttention 内核导致 RDNA4 上提示处理速度最慢可达 **2 倍下降**——开发者应预期性能退化，除非改用新的 `fattn-mma-f16` 路径。

---

### **3. 新模型与硬件支持**  
- **新模型架构**：  
  - 新增对 **Maple 20B-A1B** 的支持，该模型为三值 MoE 架构，含 256 个专家（活跃 8 个）、SWA-512 交错注意力，支持 TQ1_0/TQ2_0 量化。[PR #27000](https://github.com/ggml-org/llama.cpp/pull/27000)  
- **硬件与后端增强**：  
  - **SYCL**：修复 iGPU 零大小临时缓冲区崩溃及 >4GB 分配限制问题。[PR #27689](https://github.com/ggml-org/llama.cpp/pull/27689)  
  - **OpenVINO**：修复 Intel Core Ultra 7 上因 AVX-512 导致的崩溃问题。[Issue #28726](https://github.com/ggml-org/llama.cpp/issues/28726)  
  - **CUDA**：启用 `Q8_0 K / Q4_0 V` 异构 KV 缓存的向量 Flash Attention 内核。[PR #27269](https://github.com/ggml-org/llama.cpp/pull/27269)  
  - **Metal**：统一融合模式表（`ggml-metal-fuse.cpp`），提升代码清晰度与可调试性。[PR #28164](https://github.com/ggml-org/llama.cpp/pull/28164)  

---

### **4. 性能与优化**  
- **Flash Attention 调优（HIP）**：针对 gfx1201（RDNA4）优化，优先使用全块网格而非 stream-k，降低长上下文推理延迟。[PR #28102](https://github.com/ggml-org/llama.cpp/pull/28102)  
- **内核改进**：  
  - 修复小 `ne00 < 1024` 时 `iq1_s`、`iq1_m` 等内核中的空闲线程问题。[PR #28692](https://github.com/ggml-org/llama.cpp/pull/28692)  
  - 通过行拆分优化提升 `mul_mv` 内核效率。  
- **内存效率**：  
  - `ggml-sycl` 现在每个 `gemm` 调用从池中分配 oneDNN 临时缓冲区，而非每队列一次，防止 LIFO 顺序破坏。[PR #28660](https://github.com/ggml-org/llama.cpp/issues/28660)  
  - 实验性地新增 **Q4_K P6 与 VNNI 内核**（仅限 CPU，需手动启用）。[PR #28791](https://github.com/ggml-org/llama.cpp/pull/28791)  

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 影响 | 修复状态 | 链接 |
|--------|------|------|----------|------|
| 严重 | RDNA4（`gfx1201`）上 `rocWMMA` 移除后出现 Flash Attention 回归 | 提示处理速度最慢达 **2 倍下降** | 待处理 | [Issue #26220](https://github.com/ggml-org/llama.cpp/issues/26220) |
| 高 | Vulkan `argsort(large)` 数据竞争与越界访问 | CI 失败，潜在无声数据损坏 | 已修复 | [PR #28705](https://github.com/ggml-org/llama.cpp/pull/28705) |
| 高 | SYCL 因 oneDNN 临时缓冲区破坏 LIFO 池顺序导致崩溃 | 提示处理失败 | 已提交 PR | [Issue #28660](https://github.com/ggml-org/llama.cpp/issues/28660) |
| 中 | OpenVINO 后端在 AVX-512（Intel Core Ultra 7）上崩溃 | 系统级不稳定 | PR 待审 | [Issue #28726](https://github.com/ggml-org/llama.cpp/issues/28726) |
| 中 | Intel B70 上 Vulkan 验证错误 `VUID-RuntimeSpirv-cooperativeMatrixFlexibleDimensionsMaxDimension-10167` | 运行时警告，可能驱动冲突 | 已报告 | [Issue #28590](https://github.com/ggml-org/llama.cpp/issues/28590) |

---

### **6. 对应用开发者的启示**  
- 若在搭载 `b10905+` 版本的 RDNA4 GPU 上部署，请预期提示处理变慢——建议使用 `--no-flash-attn` 或回滚至旧版本，直至新内核稳定。  
- 充分利用新增的 MoE 与三值量化支持（TQ1_0/TQ2_0），以高效推理 Maple、Sherry 等模型；请确保工具链支持这些格式。  
- 使用 `--n-cpu-mode` 搭配 `--n-cpu-ffn` 实现对 FFN 推送的细粒度控制——新功能请求 (#27987) 正在推进中，将进一步增强此能力。  
- 避免在部分缓存条目存在时使用 `rpc-server`——`#28789` 新逻辑防止无效缓存并确保一致性。  
- **Web UI 开发者注意**：`response_format.json_schema` 现已正确解析扁平化的 schema 定义（非嵌套结构），符合 OpenAI 规范。[PR #28697](https://github.com/ggml-org/llama.cpp/pull/28697)

> ✅ **实用技巧**：使用 `llama-server` 搭配 `--router` 并一次性加载多个预设——功能请求 (#23704) 正获得广泛关注，适用于可扩展的智能体部署场景。

---  
*数据来源：[github.com/ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-12**

---

### **1. 今日亮点**  
Ollama 生态系统持续扩展对高级模型和硬件的支持，`qwen3.8`、`gemma4` 以及云托管模型的关键稳定性修复正在推进中。值得注意的是，针对 `qwen3` 和 `gemma4` 的持久性工具调用失败问题正在进行修复，同时新提交的 PR 提升了 MLX 集成与云代理的可靠性——这对生产环境部署至关重要。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告任何内容。*  
无新版本或破坏性 API/配置变更发布。但多个 PR 显示即将推出改进：
- **PR #18382**：为云代理连接引入有限超时（修复上游停滞导致的无限挂起问题）。[GitHub](https://github.com/ollama/ollama/pull/18382)
- **PR #18393**：回滚内置 CLI 代理，恢复传统聊天界面。[GitHub](https://github.com/ollama/ollama/pull/18393)

---

### **3. 新模型与硬件支持**  
- **新模型请求**：  
  - 请求将 `Hy4-preview`（腾讯）添加至 Ollama 本地使用支持。[Issue #18287](https://github.com/ollama/ollama/issues/18287)  
  - 请求提供可下载版本的 `deepseek-v4.1-flash`。[Issue #18379](https://github.com/ollama/ollama/issues/18379)  
- **硬件/架构支持**：  
  - `ppc64le` 架构仍不支持；自 2023 年起持续提出请求。[Issue #796](https://github.com/ollama/ollama/issues/796)  
- **量化格式**：  
  - `Qwen3.8-27B-GSQ-RCO-GGUF` 使用 `IQ3_S` 量化时静默失败（输出为空）。[Issue #18297](https://github.com/ollama/ollama/issues/18297)  
  - `qwen2.5-coder:3b-instruct` 的低比特 `q2_K`、`q3_K_*` 变体功能已损坏。[Issue #18252](https://github.com/ollama/ollama/issues/18252)

---

### **4. 性能与优化**  
- **模型加载性能退化**：  
  - 升级后（从 v0.23.4 → v0.30.0），用户报告大型模型（如 `qwen3.5:122b`）加载显著变慢。[Issue #18373](https://github.com/ollama/ollama/issues/18373)  
- **云性能问题**：  
  - `deepseek-v4-pro:cloud` 在运行约 45 分钟后出现延迟飙升并最终卡死。[Issue #18381](https://github.com/ollama/ollama/issues/18381)  
- **正在进行的优化**：  
  - PR #17144 在上游 llama.cpp 崩溃问题修复后，现已启用 `qwen35`/`qwen35moe` 的并行推理。[GitHub](https://github.com/ollama/ollama/pull/17144)  
  - PR #18388 添加对 JSON 工具调用中 `args` 字段的解析支持（修复静默丢失问题）。[GitHub](https://github.com/ollama/ollama/pull/18388)

---

### **5. 稳定性与回归问题**  
**严重问题（高危）**  
- **工具调用解析失败**：  
  - `qwen3.8`：因缺少用户查询（`no user query found in messages`）导致流式错误。[Issue #17778](https://github.com/ollama/ollama/issues/17778)  
  - `gemma4`：包含空格的键名工具调用返回空响应。[Issue #18390](https://github.com/ollama/ollama/issues/18390)  
  - `gemma3n`：尽管模型支持，但未返回 `tool_calls`。[Issue #18357](https://github.com/ollama/ollama/issues/18357)  
- **云环境不稳定**：  
  - `glm-5.3:cloud` 进入无限推理循环，任务被中止。[Issue #18193](https://github.com/ollama/ollama/issues/18193)  
  - 云模型因未限制的 HTTP 客户端超时而无限挂起。[PR #18382](https://github.com/ollama/ollama/pull/18382)  
- **硬件相关崩溃**：  
  - `qwen3.8:27b` 在 AMD RX 9060 XT 上因无法加载 `"TensileLibrary_lazy_gfx1200.dat"` 失败。[Issue #17782](https://github.com/ollama/ollama/issues/17782)  
  - `gemma4:e4b` 在 Jetson Orin Nano 8GB 上即使配置了 CPU projector 仍导致主机内存溢出（OOM）。[Issue #18396](https://github.com/ollama/ollama/issues/18396)  

> ✅ *已有修复 PR*：  
> - PR #18382（超时限制）解决云挂起问题。  
> - PR #18388（工具参数解析）修复 `args` 字段处理。  
> - PR #18376 修复 `gemma3n` 在 CPU 上的图像嵌入损坏问题。[GitHub](https://github.com/ollama/ollama/pull/18376)

---

### **6. 对应用开发者的意义**  
- **避免在 `qwen3.8` 与 `gemma4` 中使用复杂模式或键名含空格的工具调用** —— 在相关 PR 合并前可能静默失败。谨慎使用 `tools` 参数。  
- **不要依赖 `:cloud` 模型超过约 45 分钟**，除非有监控机制；若稳定性关键，请升级至 `v0.33.1`。  
- **对于低内存边缘设备（Jetson、ARM）**：除非完全卸载，否则避免使用 `gemma4` 多模态模型。注意仅使用 CPU 投影器的风险。  
- **若依赖稳定的 `deepseek-v4-pro:cloud` 或 `glm-5.3:cloud`**，请使用 `v0.33.1` 或更早版本。  
- **利用 `/api/chat` 响应元数据**：PR #18394 提议包含清单摘要（manifest digests）——对评估流水线的可复现性至关重要。  

> 🔧 *行动项*：密切关注 PR #18382、#18388 与 #18376，这些补丁将直接影响工具调用与云环境稳定性。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

### **LiteLLM 摘要 — 2026-09-12**

#### **1. 今日亮点**  
LiteLLM 项目持续扩展其供应商生态，完成了对 **Anthropic、OpenAI、Gemini、Fireworks AI 以及 Together AI** 的大规模定价数据同步，共新增 **27 个模型**。关键的安全与稳定性修复已合并，解决了包括 **秘密脱敏中的 ReDoS 漏洞**、**JWT 认证泄露虚拟密钥** 以及 **静默模型参数错误导致 Responses API 返回 500 错误** 等高危问题。

#### **2. 发布与重大变更**  
- 今日发布 **v1.102.0-dev.2**，安全性增强：所有 Docker 镜像现已通过 [cosign](https://github.com/BerriAI/litellm/commit/0112e53) 签名，确保供应链完整性。  
- **安全通告**：此前 `litellm` PyPI 包（v1.82.7–v1.82.8）被攻陷的问题已完全控制——受影响版本已被删除；当前发行版均干净无害 ([Issue #24518](https://github.com/BerriAI/litellm/issues/24518))。  
- **代理镜像加固**：新提交的 PR ([#40822](https://github.com/BerriAI/litellm/pull/40822), [#40821](https://github.com/BerriAI/litellm/pull/40821)) 揭露了关键配置错误——Helm Chart 与运行时镜像默认以 `root` 用户运行，违反安全最佳实践。**建议立即修补**。

#### **3. 新模型与硬件支持**  
- 通过 [PR #40782](https://github.com/BerriAI/litellm/pull/40782) 新增 **Prism** 作为原生供应商，支持完整的聊天补全、响应及消息路由功能，并附带经验证的定价信息。  
- **各供应商新增模型**：  
  - **Anthropic**：`claude-fable-5`、`claude-fable-5-1` ([PR #40801](https://github.com/BerriAI/litellm/pull/40801))  
  - **Gemini**：`gemini-2.5-computer-use-preview-10-2025`、`gemini-2.5-flash` ([PR #40800](https://github.com/BerriAI/litellm/pull/40800))  
  - **Together AI**：`arcee-ai/trinity-mini`、`arize-ai/qwen-2-1.5b-instruct` ([PR #40823](https://github.com/BerriAI/litellm/pull/40823))  
  - **OpenAI**：`babbage-002`、`chat-latest` ([PR #40797](https://github.com/BerriAI/litellm/pull/40797))  
  - **Fireworks AI**：`deepseek-v4-flash-0731` 支持优先级计费层级 ([PR #40799](https://github.com/BerriAI/litellm/pull/40799))

#### **4. 性能与优化**  
- 通过 [PR #40804](https://github.com/BerriAI/litellm/pull/40804) 引入 **提示缓存成本估算** 功能：代理现在可根据缓存状态估算模型切换带来的成本影响，帮助避免冷缓存过渡期间意外的成本飙升。  
- 新增 **端到端内存回归测试** ([PR #40773](https://github.com/BerriAI/litellm/pull/40773))，可在发布前捕获内存泄漏（如重试追踪记录），防止生产环境出现 OOM 崩溃。  
- **HTTP/2 支持** 已作为功能请求跟踪 ([Issue #30362](https://github.com/BerriAI/litellm/issues/30362))，可能提升高延迟上游调用的吞吐量。

#### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 影响 | 修复状态 |
|---------|------|--------|------------|
| 🔴 高 | **`secret_redaction.redact_string()` 中的 ReDoS** ([#32353](https://github.com/BerriAI/litellm/issues/32353)) | 大量错误字符串触发正则回溯，导致代理崩溃；中断健康检查探针 | ❌ 尚未修复；急需缓解措施 |
| 🔴 高 | **JWT 认证每刷新一次生成无名虚拟密钥** ([#40398](https://github.com/BerriAI/litellm/issues/40398)) | Usage UI 被哈希后的 JWT 条目污染，掩盖真实密钥追踪 | ✅ 部分修复进行中（PR #40820） |
| 🟡 中 | **静默模型导致 Anthropic Messages API 失效** ([#34890](https://github.com/BerriAI/litellm/issues/34890)) | 设置 `silent_model` 后 `/messages` 接口返回 `500` 错误 | ✅ PR 待合并 ([#40820](https://github.com/BerriAI/litellm/pull/40820)) |
| 🟡 中 | **缓存控制注入点被静默丢弃** ([#40675](https://github.com/BerriAI/litellm/issues/40675)) | 客户端设置任意 `cache_control` 会破坏提示缓存行为 | ⚠️ 尚未修复 |

#### **6. 对应用开发者的启示**  
- 若仍在使用较旧的 v1.82.x 版本，请**立即升级**，因确认存在 PyPI 包被入侵风险——请通过 cosign 验证签名。  
- **避免在生产环境中以 root 身份运行**：当前 Helm Chart 与 Docker 镜像默认以 `root` 运行——应配置自定义 `securityContext` 或使用已修补的镜像。  
- **谨慎使用新模型别名**，如 `bedrock/global.openai.gpt-5.6-*`：近期漏洞显示其可能因路由至 `converse` 而无法处理图像输入，而非调用 OpenAI 接口 ([#40080](https://github.com/BerriAI/litellm/issues/40080))。  
- **密切监控预算控制**：如 [#40050](https://github.com/BerriAI/litellm/issues/40050) 所示，Claude Code 可能出现虚假“预算超限”错误，引发 429 拒绝风暴。  
- **启用提示缓存成本估算**（`estimate_prompt_cache_switch_costs`），防止动态切换模型时产生意外开销。

> ✅ **推荐操作**：审计部署中的 `securityContext`，升级至 `v1.102.0-dev.2`，并在定价同步后验证所有 `model` → `cost` 映射关系。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth 简报 – 2026-09-12**

---

### **1. 今日亮点**  
Unsloth 持续推进面向代理式 AI 工作流的激进演进，重点优化了项目持久化、沙箱执行以及持久化的代理状态。一项关键 PR 实现了聊天轮次在关闭浏览器标签页后仍能保留——通过将工具流置于审批状态来实现，这对长时间运行的代理任务至关重要。与此同时，Studio 团队已正式完成托管项目工作区的一系列基础功能，包括基于 Git 的检查点、验证过的钩子（hooks）以及受控的任务执行通道。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新发布。*  
但升级自 `2026.9.3` 至 `2026.9.4` 的用户请注意：  
- `SFTConfig.__init__()` 现在要求传入 `max_length` 而非 `max_seq_length`。  
  → [Issue #10785](https://github.com/unslothai/unsloth/issues/10785) | [Fix PR #10785](https://github.com/unslothai/unsloth/pull/10785)（待合并）  
- 手动 GPU 模式下 `--fit` 标志行为不一致；日志显示为 `on`，即使传入的是 `off`。  
  → [Issue #10821](https://github.com/unslothai/unsloth/issues/10821)

---

### **3. 新模型与硬件支持**  
- **AMD ROCm 支持**：针对 AMD GPU（RDNA2/3/4、CDNA/Instinct）的专用 Docker 镜像正在积极开发中。  
  → [Feature Request #6230](https://github.com/unslothai/unsloth/issues/6230) | [PR #6230 (草案)](https://github.com/unslothai/unsloth/pull/6230)  
- **Apple Silicon (MLX)**：Studio 现已通过 PR #10823 正式支持 Apple Silicon 上的 MLX 运行时。  
  → [PR #10823](https://github.com/unslothai/unsloth/pull/10823)  

> *注：完整的 AMD Docker 支持仍待官方发布。*

---

### **4. 性能与优化**  
- **GPU 利用率**：用户报告在 NVIDIA B200 上训练 Qwen3.5-9B LoRA 时，因每次启动重复重建 autotune 密钥导致 GPU 处于空闲状态。  
  → [Issue #10806](https://github.com/unslothai/unsloth/issues/10806)  
- **内存效率**：`--tensor-split` 当前被忽略，导致多 GPU 环境下的内存分布不理想。  
  → [Issue #10355](https://github.com/unslothai/unsloth/issues/10355)  
- **推理延迟**：长 GGUF 聊天在等待工具审批期间会阻塞已排队请求，即使有四个槽位空闲。问题根源在于审批等待期间仍保留上下文预算。  
  → [Issue #10671](https://github.com/unslothai/unsloth/issues/10671)

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 影响 | 修复状态 |
|---------|------|--------|------------|
| 🔴 高 | 多 GPU 环境下 FLUX.2 Klein VAE 解码时出现 CUDA 错误：`CUBLAS_STATUS_NOT_INITIALIZED` | 推理管道崩溃 | [PR #10768](https://github.com/unslothai/unsloth/issues/10768)（开放） |
| 🔴 高 | X11 + NVIDIA：WebKitWebProcess 泄露 DMA-BUF sync_file fd → 界面空白/冻结 | 系统挂起，需重启 | [Issue #10795](https://github.com/unslothai/unsloth/issues/10795)（开放） |
| 🟡 中 | Windows 安装程序在用户名含空格时失败 | 安装过程因路径解析阻塞 | [Issue #10722](https://github.com/unslothai/unsloth/issues/10722)（已关闭，修复进行中） |
| 🟡 中 | 杀毒软件标记 `install.ps1`，阻止更新 | 需手动安装 | [Issue #10805](https://github.com/unslothai/unsloth/issues/10805)（开放） |

---

### **6. 对应用开发者的意义**  
- **构建健壮的代理**：借助代理轮次持久化功能（#10365），您的代理现在可抵御 UI 重载——非常适合长期研究、代码生成或部署流水线场景。  
- **利用项目工作区**：使用 `managed project worktrees`、`受控 Git 操作` 和 `验证钩子`（通过 PR #9673–#10658）构建安全、可复现且可审计的代理工作流。  
- **规划跨平台部署**：AMD ROCm 与 Apple MLX 支持正逐步逼近 CUDA 水平——设计应用时请考虑硬件抽象。  
- **处理配置迁移**：更新 `SFTConfig` 调用以使用 `max_length`；关注 `--fit` 日志不一致问题。  
- **避免队列阻塞**：注意工具审批等待会消耗上下文预算——即使无活跃推理也在进行。

👉 *建议操作*：审查代理工作流的容错能力及其对稳定后端状态的依赖。密切关注即将发布的 CLI/Studio 更新，特别是关于项目生命周期管理与 GPU 资源追踪方面的改进。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*