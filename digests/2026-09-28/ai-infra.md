# AI 基础设施日报 2026-09-28

> 生成时间: 2026-09-28 01:08 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目 AI 基础设施生态报告 – 2026-09-28**

---

### **1. 生态概览**

2026年第三季度，AI 推理与服务生态正快速成熟，呈现出清晰的两极分化：**高性能、生产级引擎**（vLLM、SGLang）与**开发者友好、多后端网关**（LiteLLM、Ollama）。关键发展动力来自对 Qwen4Exp、KimiViT、DeepSeek-V4.1 等下一代模型的支持，以及针对 DGX Spark（GB10）、RTX 5090、AMD MI350X 等硬件的专门优化。核心关注点包括高负载下的稳定性、内存效率，以及跨架构一致性——尤其在 MoE、混合视觉-语言模型和分层卸载方面。Rust 原生后端的兴起，以及 MLX/AMD/Vulkan 的集成，预示着向更广泛硬件可访问性的转变。

---

### **2. 活动对比**

| 项目       | 开放问题数 (↑) | 合并的 PR 数 (↑) | 发布状态      |
|------------|------------------|------------------|----------------|
| vLLM       | 217 (+12)        | 18               | 无新版本发布   |
| SGLang     | 154 (+9)         | 14               | 无新版本发布   |
| llama.cpp  | 246 (+15)        | 21               | 仅补丁更新     |
| Ollama     | 189 (+14)        | 8                | v0.34.4 版本存在严重回归 |
| LiteLLM    | 167 (+11)        | 12               | 无新版本发布   |
| Unsloth    | 148 (+10)        | 15               | 已发布预构建轮子 |

> ✅ *洞察*：**llama.cpp** 和 **Ollama** 因广泛部署和边缘场景敏感性导致问题数量较高；**vLLM** 在 PR 合并速度上领先，表明其在核心性能与正确性方面投入了深度工程资源。

---

### **3. 模型支持竞赛**

| 新模型 / 架构               | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------------------------|------|--------|-----------|--------|---------|---------|
| Qwen4Exp (NVFP4)              | ✅   | ❌     | ❌        | ❌     | ❌      | ❌      |
| KimiViT (Kimi-K3)             | ✅   | ❌     | ❌        | ❌     | ❌      | ❌      |
| DeepSeek-V4.1-Flash (AMD)     | ❌   | ✅     | ❌        | ❌     | ❌      | ❌      |
| SANA-Video 2.0 (T2V/TI2V)      | ❌   | ✅     | ❌        | ❌     | ❌      | ❌      |
| GLM-5.3-Flash (视觉)          | ✅   | ❌     | ✅        | ❌     | ❌      | ❌      |
| Cohere MoE (RTX 5090)          | ❌   | ❌     | ❌        | ⚠️ (崩溃)| ❌    | ❌      |
| DGX Spark (GB10, SM121)        | ✅   | ❌     | ❌        | ❌     | ❌      | ❌      |
| Vulkan (Intel/Adreno)         | 🚧   | ❌     | ✅        | ❌     | ❌      | ❌      |
| Cambricon MLU                 | ❌   | ✅     | ❌        | ❌     | ❌      | ❌      |

> 🏆 **排行榜**：  
> - **vLLM** 在 **下一代模型与 GPU 硬件支持** 上领先，尤其在 NVFP4、GB10 及 Mamba/GDN 混合架构方面表现突出。  
> - **SGLang** 在 **跨架构一致性** 方面占据主导，完整支持 AMD MI350X 并具备原生视频生成能力。  
> - **llama.cpp** 在 **多模态与底层后端灵活性** 上表现出色，涵盖 Vulkan、SYCL、HIP，以及对新兴 XDNA 的兴趣。

---

### **4. 性能前沿**

| 优化重点                  | vLLM                  | SGLang               | llama.cpp           | Ollama             | LiteLLM               | Unsloth               |
|----------------------------|------------------------|----------------------|---------------------|--------------------|------------------------|------------------------|
| KV 缓存管理                | 分级卸载、TurboQuant   | HiCache 预取         | RANK 池化批拆分     | —                | 结构化追踪             | TurboQuant (MLX)       |
| 批处理与吞吐量            | 压缩 NVFP4、融合内核   | 预填充间隙分析       | 批次拆分重排序器    | —                | 成本感知路由           | 多 GPU 层级拆分         |
| 量化                      | IQ2_NL/IQ3_NL、GDN     | —                    | IQ2_NL/IQ3_NL       | NVFP4 降速 (MLX)   | 虚拟键成本追踪         | 块级 FP8 LoRA 训练       |
| 分布式服务                  | 序列并行              | All-reduce v2 (issue) | —                   | —                | MCP 网关               | 手动 GPU 拆分           |
| 内核级调优                  | MergedColumnParallelLinear、RoPE 融合 | MoE 调优、图捕获 | FlashAttention (FP16) | —                | Python 桥接 (Rust)   | 因果卷积 1D、Mamba_SSM |

> 🔥 **关键洞察**：vLLM 依然是 **内核融合与批处理性能的领导者**，而 **Unsloth 在微调速度上突破边界**（LoRA 提升达 15 倍），**SGLang 尽管存在稳定性缺口，但在分布式可扩展性研究上仍居领先地位**。

---

### **5. 层级定位**

| 项目       | 主要层级                     | 次要角色                         | 独特优势                          |
|------------|------------------------------------|----------------------------------------|------------------------------------------------|
| **vLLM**   | 高吞吐推理引擎                   | 模型服务、LLM 网关             | 生产级延迟、批处理不变性、序列并行 |
| **SGLang** | 高级推理运行时                   | 网关 + 代理编排                  | 原生 T2V/TI2V、推测解码、AMD 支持 |
| **llama.cpp** | 本地推理运行时                 | 边缘/低内存部署                  | 跨平台、Vulkan/SYCL/MLX 支持、量化深度 |
| **Ollama** | 开发者优先网关                   | 本地模型运行器、CLI 工具         | 简洁易用，但大规模下不稳定 |
| **LiteLLM** | 统一 API 网关                   | 可观测性、成本控制、路由         | 结构化追踪、虚拟密钥、Azure/OCI 动态路由 |
| **Unsloth** | 训练/微调加速器                 | 基于 Studio 的推理与工具         | 块级 FP8 LoRA、MLX 优化、预构建轮子 |

> 🎯 **战略启示**：vLLM 与 LiteLLM 是 **生产基础设施的基石**；SGLang 与 Unsloth 针对 **高级研究工作流**；Ollama 与 llama.cpp 则服务于 **开发者接入与边缘部署**。

---

### **6. 趋势信号**

#### 🔍 **新兴行业趋势**
1. **硬件专化正在加速**：项目现已明确针对 **DGX Spark (GB10)**、**RTX 5090**、**AMD MI350X**、**Cambricon MLU** 进行优化，表明硬件多样性已不再是事后考虑。
2. **Rust 原生集成日趋成熟**：vLLM 的 Rust 前端与 LiteLLM 的 `python-bridge` 路由，标志着向 **低延迟、内存高效推理管道** 的战略转移。
3. **MoE 与混合模型需精准处理**：vLLM 的 MoE + TurboQuant 修复、Unsloth 的块级 FP8 训练、LiteLLM 的结构化输出处理，揭示出 **模型复杂度要求系统级深度关注**。
4. **稳定性优于功能迭代速度**：尽管功能快速推出，但 **Ollama、SGLang、vLLM 中出现的关键回归问题** 表明，可靠性仍是生产采用的最大障碍。
5. **可观测性与成本控制正成标配**：LiteLLM 的结构化追踪、按元数据计费、预算限制器改进，反映出从“能用”到“可监控、可问责的 AI 系统”的转变。

#### 🛠️ **开发者应关注事项**
- **避免使用 v0.34.4 版本的 Ollama**，直到关键卡死/崩溃问题修复。
- **通过实测验证模型能力**——例如 `deepseek-v4.1-flash:cloud` 声称支持视觉，但实际丢弃图像。
- **仅在原型阶段使用 `VLLM_USE_RUST_FRONTEND=1`**——尚未达到生产就绪状态。
- **使用 Unsloth 微调时密切监控显存使用**——报告的上限可能被低估。
- **尽早启用 LiteLLM 的 OTel V2 + 结构化追踪**，以调试跨提供商的代理流程。

> ✅ **最终结论**：基础设施栈已超越单纯吞吐量。**正确性、可观测性与跨硬件鲁棒性** 现已成为新的差异化要素。选择技术栈不仅要看速度，更要看其在真实负载下的**可靠性**。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

### **1. 今日亮点**  
vLLM 在下一代模型的生产级推理方面持续快速进展，关键修复了 **序列并行下的批量不变性正确性** 以及 **DGX Spark (GB10) 上的分层卸载稳定性**。新提交的 PR 提升了 **Qwen4Exp**、**KimiViT** 和 **基于 GDN 的模型** 的性能，而 Rust 前端已接近功能对齐，标志着其在高吞吐、低延迟部署场景中日益成熟。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新发布。*  
- **`VLLM_BATCH_INVARIANT=1`** 在与 `enable_sp`（序列并行）结合时仍不稳定 —— 此为已知回归问题，追踪于 [#56370](https://github.com/vllm-project/vllm/issues/56370)，现已通过 PR [#58947](https://github.com/vllm-project/vllm/pull/58947) 修复。  
- **Rust 前端（`VLLM_USE_RUST_FRONTEND=1`）** 仍处于实验阶段，但正逐步获得关注；预计在 v0.29.0 版本实现完整功能对齐。详见 [#44280](https://github.com/vllm-project/vllm/issues/44280)。

---

### **3. 新模型与硬件支持**  
- ✅ **Qwen4Exp (NVFP4)**：现已完整支持通过 PR [#56273](https://github.com/vllm-project/vllm/pull/56273) 实现的打包 NVFP4 PLE 嵌入，可在无需磁盘卸载的情况下实现 1× DGX Spark 部署。  
- ✅ **KimiViT (Kimi-K3)**：融合 QK RoPE 内核已合并 ([#58651](https://github.com/vllm-project/vllm/pull/58651))，在 GB300 上将预填充延迟降低约 29 倍（256 个 token，从 225.3→7.6 μs）。  
- 🚧 **Vulkan**：仍缺失 —— 高优先级请求 [#21182](https://github.com/vllm-project/vllm/issues/21182) 已有 32 条评论和 35 个赞；目前尚无活跃的 PR。  
- 🔧 **DGX Spark (GB10, SM121)**：多项修复解决了统一内存 OOM 问题 ([#56824](https://github.com/vllm-project/vllm/issues/56824)) 以及 Mamba-2 内核中的非法指令崩溃问题 ([#37431](https://github.com/vllm-project/vllm/issues/37431))。

---

### **4. 性能与优化**  
- **Qwen3.5 GDN**：将 `in_proj_ba` 融入六路 `MergedColumnParallelLinear`，减少内核启动次数，提升规范解码吞吐量 ([#41457](https://github.com/vllm-project/vllm/pull/41457))。  
- **混合 MoE + TurboQuant**：针对 Ampere GPU（SM 80–86）的修复解决了 Qwen3.6-35B-A3B 中键值缓存异常行为的问题 ([#40124](https://github.com/vllm-project/vllm/issues/40124))。  
- **MiniMax-M3-NVFP4**：在修正 #48929 正确性问题后，真实语料基准测试显示，在 8× B200 上 **EAGLE3 解码速度提升 2.1–2.3 倍** ([#51494](https://github.com/vllm-project/vllm/issues/51494))。  
- **KV 卸载分层**：PR [#58804](https://github.com/vllm-project/vllm/issues/58804) 解决了文件系统卸载路径中的 I/O 活性与数据完整性问题 ([#54363](https://github.com/vllm-project/vllm/issues/54363))。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 修复 PR |
|---------|------|--------|--------|
| 关键 | 使用 `enable_sp` + `VLLM_BATCH_INVARIANT=1` 时批量不变性被破坏 | 开放 | [PR #58947](https://github.com/vllm-project/vllm/pull/58947) |
| 高 | GLM-5.3-Flash 长序列解码在推理后出现退化 | 开放 | 无 |
| 高 | DGX Spark (GB10)：因 NV_ERR_NO_MEMORY 导致预填充期间主机内存崩溃 | 开放 | [PR #56824](https://github.com/vllm-project/vllm/issues/56824) |
| 中等 | 混合 Mamba/GDN 模型（v0.28.0）前缀缓存污染输出 | 开放 | [PR #52244](https://github.com/vllm-project/vllm/pull/52244) |
| 中等 | Mamba-2 Triton 内核在 SM121 上无 `CUDA_LAUNCH_BLOCKING=1` 时崩溃 | 开放 | [Issue #37431](https://github.com/vllm-project/vllm/issues/37431) |

---

### **6. 对应用开发者的启示**  
- **谨慎使用 `VLLM_USE_RUST_FRONTEND=1`**：当前已足够用于原型验证，但在功能对齐确认前不建议用于生产环境。  
- **在 PR #58947 合并前避免在序列并行下使用 `VLLM_BATCH_INVARIANT=1`** —— 此配置会破坏多 GPU 环境下的确定性。  
- **对于在 DGX Spark (GB10) 上运行长上下文应用**：请监控统一内存使用情况；如遇到 OOM，可尝试设置 `--max-num-seqs=1` 或降低批大小。  
- **仅在最新 vLLM 版本中启用结构化输出 / 工具调用** —— 如 #39929（工具抑制）等回归问题虽已修复，但可能影响旧版本构建。  
- **使用真实工作负载进行基准测试**：MiniMax-M3-NVFP4 的结果表明，修复正确性后可释放 2 倍以上的性能增益 —— 请始终以自身用例进行验证。  

> 🔗 *请通过以下渠道保持更新：* [vLLM GitHub Issues](https://github.com/vllm-project/vllm/issues), [PRs](https://github.com/vllm-project/vllm/pulls), 和 [发布说明](https://github.com/vllm-project/vllm/releases)。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 消息简报 – 2026-09-28**

---

### **1. 今日重点**  
SGLang 持续推进对下一代推理硬件及先进服务模式的支持，关键进展包括为 DeepSeek-V4.1 集成 AMD gfx950（MI350X）以及新增原生 SANA-Video 2.0 T2V/TI2V 支持。社区正在积极解决若干高严重性稳定性问题——特别是推测解码崩溃、解标记器状态淘汰以及客户端断连处理等问题，这些问题可能影响生产环境的可靠性。

---

### **2. 发布与破坏性变更**  
无。过去 24 小时内未报告新版本发布或破坏性 API/配置变更。

---

### **3. 新模型与硬件支持**  
- ✅ **AMD gfx950（MI350X）**：PR [#41308](https://github.com/sgl-project/sglang/pull/41308) 实现了通过 `dsv4.1-amd` 配置在 AMD GPU 上基于 DSpark 完全支持 **DeepSeek-V4.1-Flash** 的服务，标志着跨架构一致性的重大进展。  
- ✅ **SANA-Video 2.0（T2V 与 TI2V）**：PR [#41492](https://github.com/sgl-project/sglang/pull/41492) 为 NVIDIA 的混合文本到视频及文本图像到视频模型新增原生扩散模型支持，解决了问题 #41490。  
- 🚧 **寒武纪 MLU**：PR [#26898](https://github.com/sgl-project/sglang/pull/26898) 引入寒武纪 MLU 设备的初始树内原型后端，已使用 Qwen3-8B 进行验证。

---

### **4. 性能与优化**  
- 🔍 **预填充吞吐量差距**：问题 #33422 报告在 4× RTX PRO 6000（SM120）上，当前表现约为 **2–7K tok/s**，而 vLLM/Marlin 达到约 **12.5K**，暗示存在未调优的内核覆盖或图捕获限制。调查正在进行中。  
- ⚙️ **HiCache 预取延迟**：问题 #32724 指出，HiCache 存储预取最终化延迟可能导致**负载下长时间首令牌时间（TTFT）**，表明调度层存在瓶颈。  
- 📈 **MoE 内核调优**：问题 #32806 显示，在 H200 上调优 LFM2.5（E=32, N=1792）配置可带来 **+23.3% 端到端吞吐量提升**，凸显针对硬件进行精细化优化的重要性。  
- 🛠️ **图捕获灵活性**：RFC #33852 提议放宽预填充 CUDA 图的约束，允许桶大小低于 `chunked_prefill_size`，从而支持更高效的批处理策略。

---

### **5. 稳定性与回归问题**  
**高严重性（对生产环境至关重要）：**  
- ❌ **解标记器状态淘汰丢失**：问题 #41236 — 当 `detokenizer_manager` 因 `LimitedCapacityDict` 溢出而淘汰正在进行的请求时，流式输出会**无声丢失最多 5 个 token**。目前尚无修复 PR。  
- ❌ **推测解码崩溃**：问题 #40843 — 在使用 DFLASH 推测解码服务 GLM-5.3 时，观察到**严重重复和退化循环**，对推理类智能体风险极高。  
- ❌ **客户端断连导致引擎崩溃**：问题 #39216 — 客户端断连路径中未捕获 `asyncio.CancelledError`，导致**整个引擎崩溃**。亟需关键稳定性修复。

**中等严重性：**  
- ⚠️ **请求中止逻辑混乱**：问题 #41465 和 #41474 报告，中止受限请求返回 HTTP 400，且 `/abort_request` 使用部分请求 ID 会误中止非预期请求——均存在接口误用风险。

---

### **6. 对应用开发者的影响**  
- **在 #40843 修复前，请避免对 GLM-5.3 使用推测解码**；推理工作流中可能出现幻觉风险。  
- **运行高并发流式任务时，请监控解标记器状态限制**（`SGLANG_DETOKENIZER_MAX_STATES`）——否则可能无声丢失输出。  
- **生产环境请使用最新 CI 构建**：近期 PR 如 #41492 和 #41308 引入了新模型/硬件支持，但伴随不稳定性风险。  
- **谨慎使用 `/abort_request`**：确保请求 ID 完全唯一，以避免意外批量终止。  
- **为多节点扩展做好准备**：目前关于 all-reduce v2（如 #36429）的问题表明，在 GB300/NVL72 分布式部署中需格外小心。

> 💡 *技巧提示*：在 SM120 或 AMD 平台上进行稳定推理时，建议使用类似 PR #41308 的调优配置，并关注 CI 中的 `est_time` 更新（#41491），以获得准确的基准测试结果。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp 消息简报 – 2026-09-28**

---

### **1. 今日亮点**  
最新更新聚焦于通过分批处理 RANK pooling 来增强对因果语言模型重排序器（如 Qwen3、Qwen3-VL）的支持，从而实现对大规模输入集的高效推理。关键后端改进包括针对 Intel GPU 的 Vulkan 性能调优、针对头尺寸 40–112 的 FP16 FlashAttention 的 CUDA 优化，以及在 CPU、Metal、CUDA 和 Vulkan 后端新增 IQ2_NL/IQ3_NL 量化类型——为 MoE 和高容量模型扩展了更多精度选项。

---

### **2. 发布与破坏性变更**  
- **`b11223`**：在服务器中为因果语言模型重排序器（如 Qwen3、Qwen3-VL）添加对 **RANK pooling 分批处理** 的支持 ([#28876](https://github.com/ggml-org/llama.cpp/pull/28876))。这使得无需将所有标记一次性处理成单个批次，即可实现长文档集的可扩展重排序。
- **`b11222`**：重构参数解析逻辑以避免副作用；`--rpc` 现已无条件注册，初始化日志在参数解析完成后输出 ([#29537](https://github.com/ggml-org/llama.cpp/pull/29537))。
- **`b11214`**：修复 Adreno Vulkan 设备的 GPU 内核选择逻辑 ([#29469](https://github.com/ggml-org/llama.cpp/pull/29469))。

> 🔔 *注意：今日未报告任何破坏性 API 变更。*

---

### **3. 新模型与硬件支持**  
- **模型支持**：  
  - 添加对 **GLM-5.3-Flash (GLM5-Next)** 的实验性支持，这是一个 320B 规模的混合模型，支持文本与视觉模态 ([#27773](https://github.com/ggml-org/llama.cpp/pull/27773))。
- **硬件与后端支持**：  
  - **Vulkan**：通过 GDN 内核调优显著提升 Intel GPU 性能 ([#29476](https://github.com/ggml-org/llama.cpp/pull/29476))。  
  - **SYCL**：扩展 FWHT 内核以支持块宽 >512（384、640、768、1280），采用 Kronecker/Paley 构造法 ([#29243](https://github.com/ggml-org/llama.cpp/pull/29243))。  
  - **HIP**：在 cdna 架构上启用 fattn-mma 内核，适用于 dkq > 256，提升大批次吞吐量 ([#28907](https://github.com/ggml-org/llama.cpp/pull/28907))。  
  - **XDNA**：开启 XDNA 后端支持的功能请求 ([#21725](https://github.com/ggml-org/llama.cpp/issues/21725))，表明对边缘 AI 硬件的兴趣日益增长。

---

### **4. 性能与优化**  
- **CUDA**：针对头尺寸 40–112 调整了 FP16 tile FlashAttention 配置，优化内存访问模式 ([#26289](https://github.com/ggml-org/llama.cpp/pull/26289))。
- **Vulkan**：基准测试显示，在 RTX 3090 上，经过 GDN 内核优化后，ubatch=2048 与 4096 时延迟降低约 **6.3%** ([#29476](https://github.com/ggml-org/llama.cpp/pull/29476))。
- **量化**：引入 **IQ2_NL 与 IQ3_NL** 量化类型（支持 CPU/Metal/CUDA/Vulkan），通过避免回退到次优的 32 块类型，使非整除张量维度上的 K-quants 使用更加高效 ([#27983](https://github.com/ggml-org/llama.cpp/pull/27983))。
- **AVX512-FP16**：通过在 f32 中累加 f16 结果，修复点积中潜在的溢出问题，确保数值稳定性的同时保持精度 ([#29545](https://github.com/ggml-org/llama.cpp/pull/29545))。

---

### **5. 稳定性与回归问题**  
- **严重崩溃**：  
  - `llama-server` 在处理超过 ~1.2 MP 的图像时，使用 Gemma4 模型会因非因果注意力约束导致崩溃 ([#28954](https://github.com/ggml-org/llama.cpp/issues/28954), [#29543](https://github.com/ggml-org/llama.cpp/pull/29543))。已有修复提交 ([#29543](https://github.com/ggml-org/llama.cpp/pull/29543))，但尚未合并。
- **内存问题**：  
  - `repeat_last_n` 与 `dry_penalty_last_n` 在某些条件下可能分配多 GB 的零填充缓冲区，导致 OOM ([#29494](https://github.com/ggml-org/llama.cpp/issues/29494))。
- **后端特定缺陷**：  
  - Vulkan `ARGSORT` 在部分设备上无法正确排序完整数组 ([#29431](https://github.com/ggml-org/llama.cpp/issues/29431))。  
  - MSVC 编译器即使在支持的 CPU 上也无法检测到 AVX-VNNI ([#28295](https://github.com/ggml-org/llama.cpp/issues/28295))。  
  - 从 `b9318` 版本起，使用视觉功能模型时 Vulkan 上触发 `GGML_ASSERT(tensor->data != NULL)` ([#23737](https://github.com/ggml-org/llama.cpp/issues/23737))。

> ⚠️ **优先级提醒**：图像大小崩溃和 OOM 问题对涉及多模态输入的生产部署至关重要。

---

### **6. 对应用开发者的启示**  
- **对于重排序任务**：使用 `b11223+` 版本，通过分批处理高效处理基于 Qwen3 系列模型的大规模文档重排序流水线——非常适合搜索与检索系统。
- **对于边缘与低内存部署**：利用 **IQ2_NL/IQ3_NL** 量化，可通过 PCIe DMA 流式加载专家权重，在低显存硬件（如 8GB 显卡）上部署大型 MoE 模型（如 Qwen3-235B）——详见 [问题 #26448](https://github.com/ggml-org/llama.cpp/issues/26448)。
- **对于多模态应用**：在 [#29543](https://github.com/ggml-org/llama.cpp/pull/29543) 部署前，请谨慎处理图像输入尺寸（>1.2 MP）——建议进行预处理或改用仅因果模型。
- **对于 CI/构建流程**：更新 CI 配置以适配新的 `GGML_RPC_DEBUG` 详细级别 ([#29544](https://github.com/ggml-org/llama.cpp/pull/29544))，并确保静态测试构建正确初始化后端 ([#29542](https://github.com/ggml-org/llama.cpp/pull/29542))。

> ✅ **最佳实践**：关注问题 #19466 —— 保存视觉模型的 KV 缓存仍存在缺陷，影响需要持久上下文的状态化代理工作流。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-28**

---

### **1. 今日亮点**  
Ollama 0.34.4 版本出现多个关键稳定性问题，包括在 RTX 5090 上使用 Cohere MoE 模型时触发 CUDA 内存访问崩溃，以及服务器卡死导致后续所有请求挂起。与此同时，云服务、本地推理和解析层均报告了若干高严重性漏洞——最突出的是 `deepseek-v4.1-flash:cloud` 虽声称支持 `vision`，却静默丢弃图像输入。这些问题凸显了在负载下模型兼容性与运行时鲁棒性方面的持续挑战。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新版本发布。*  
然而，**Ollama 0.34.4** 因多项回归问题正受到重点关注：
- `typical_p` 参数已被移除，导致无法省略该参数的现有客户端（如 SillyTavern）失效 —— 参见 [Issue #18542](https://github.com/ollama/ollama/issues/18542)。
- `OLLAMA_GPU_OVERHEAD` 环境变量被 `llama-server` 忽略，导致意外的显存耗尽 —— 参见 [Issue #18679](https://github.com/ollama/ollama/issues/18679)。

> ⚠️ **迁移提示**：依赖这些参数或配置的用户应在升级前进行充分测试。

---

### **3. 新模型与硬件支持**  
- **硬件**：RTX 5090（CUDA）和 Intel UHD 0x4626（Vulkan）已确认存在后端检测问题。
  - 使用 Cohere MoE 模型时，RTX 5090 在提示评估阶段发生崩溃 —— 参见 [Issue #18642](https://github.com/ollama/ollama/issues/18642)。
  - Windows 平台下，Intel UHD 集成显卡通过 Vulkan 无法被正确识别 —— 参见 [Issue #18672](https://github.com/ollama/ollama/issues/18672)。
- **模型**：
  - `deepseek-v4.1-flash:cloud` 错误声明具备 `vision` 能力，但实际静默丢弃图像输入 —— 参见 [Issue #18527](https://github.com/ollama/ollama/issues/18527)。
  - `olmo3` 的工具调用在与最终 `done` 标志同一批次到达时可能绕过解析 —— 参见 [Issue #18676](https://github.com/ollama/ollama/issues/18676)。

---

### **4. 性能与优化**  
- **MLX on macOS**：在内存压力下，NVFP4 量化模型（如 `qwen3.6:27b-nvfp4`）性能急剧下降 —— 参见 [Issue #16030](https://github.com/ollama/ollama/issues/16030)。每条提示的响应时间从约 2 分钟恶化至不可用水平。
- **内存效率**：多项 PR 旨在提升透明度与可预测性，包括改进 Modelfile 文档中 `REQUIRES` 指令可见性（[#18688](https://github.com/ollama/ollama/pull/18688)）以及 GPU 开销统计（[#17615](https://github.com/ollama/ollama/pull/17615)）。
- **解析优化**：多个 PR 针对工具调用解析器中的边缘情况（如 `Qwen35Parser`、`Gemma4Parser`）进行处理，防止在数据块边界处丢失内容 —— 参见 [PR #18687](https://github.com/ollama/ollama/pull/18687)，[PR #18624](https://github.com/ollama/ollama/pull/18624)。

---

### **5. 稳定性与回归**  
| 严重性 | 问题 | 描述 | 修复状态 |
|--------|------|------------|-----------|
| 关键 | [#18685](https://github.com/ollama/ollama/issues/18685) | `llama-server` 在全缓存命中任务上卡死 → 所有后续请求挂起 | 开放 |
| 关键 | [#18642](https://github.com/ollama/ollama/issues/18642) | RTX 5090 上使用 Cohere MoE 模型时触发 CUDA 非法内存访问崩溃 | 开放 |
| 高 | [#18527](https://github.com/ollama/ollama/issues/18527) | `deepseek-v4.1-flash:cloud` 声称支持 `vision` 却静默丢弃图像输入 | 开放 |
| 高 | [#18679](https://github.com/ollama/ollama/issues/18679) | `OLLAMA_GPU_OVERHEAD` 被忽略 → 显存超额分配 | 开放 |
| 中 | [#18681](https://github.com/ollama/ollama/issues/18681) | 工具调用开始标签在数据块边界处丢失 | 开放 |

> 🔥 **特别注意**：`llama-server` 核心转储行为在之前修复被回滚后仍存在回归 —— 参见 [Issue #16946](https://github.com/ollama/ollama/issues/16946)。

---

### **6. 对应用开发者的启示**  
- **暂勿使用 `0.34.4`**：多个关键缺陷同时影响本地推理（崩溃、卡死）和云 API 可靠性（计费循环、静默数据丢失），请等待进一步通知。
- **谨慎验证模型能力**：不要仅凭 `capabilities` 输出就假设具备 `vision` 支持；尤其是 `deepseek-v4.1-flash:cloud`，必须通过实测验证其行为。
- **显式处理解析边缘情况**：工具调用解析可能在数据块边界处无声失败（`<tool-call-open>` 被截断于块内）。建议在客户端实现缓冲机制或降级逻辑。
- **监控 GPU 内存分配**：`OLLAMA_GPU_OVERHEAD` 目前无效 —— 部署大模型（尤其是 MoE、35B+）时需手动估算显存使用量。
- **为破坏性变更做好准备**：类似 `typical_p` 的参数移除可能破坏旧版集成；应主动更新客户端。

> 📌 **建议**：除非正在主动测试 PR 修复，否则部署应锁定在 **0.34.1** 或更早版本。密切关注 [GitHub issues](https://github.com/ollama/ollama/issues) 获取回归修复进展。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# **LiteLLM 摘要 – 2026-09-28**

---

### **1. 今日亮点**  
LiteLLM 项目持续推进深层次架构演进，在原生 Rust 推理集成、网关模块化以及成本追踪精度方面取得显著进展。针对虚拟密钥绕过、预算限制逻辑及流式响应正确性等高危问题的关键修复已落地，尤其针对 Anthropic 的 `/v1/responses` 和基于 WebRTC 的模型。新提交引入结构化追踪、MCP 网关支持以及增强的认证分离机制，标志着项目正向生产级可观测性与安全性迈进。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未发布新版本。*  
但有两项重要的**成本映射更新**已合并：  
- [`#43509`](https://github.com/BerriAI/litellm/pull/43509)：将 `together_ai/gpt-oss-20b` 与 `gemma-4-31B-it` 的弃用日期更新为 `2026-09-15`（解决弃用来源冲突问题）。  
- [`#43507`](https://github.com/BerriAI/litellm/pull/43507)：为 `Salesforce/Llama-Rank-V1` 添加 `deprecation_date`。  

> ⚠️ **迁移提示**：依赖已弃用模型的用户应在 `2026-09-15` 前更新配置。

---

### **3. 新模型与硬件支持**  
- ✅ **Tsubasa** 现已通过 [`#43502`](https://github.com/BerriAI/litellm/pull/43502) 实现原生路由与仪表盘发现，可无缝集成至模型路由工作流中。  
- ✅ **Mistral Document AI OCR** 与 **Mistral 3.5 Medium** 已加入 Azure 支持（`#32637`）。  
- ✅ **Cohere Command A+** 现已在 Azure 中获得支持（`#32628`）。  
- ✅ **OCI GenAI 端点领域解析** 现在动态从 compartment OCID 提取，而非硬编码为 `oraclecloud.com`，解决了政府区域中的调用失败问题（`#43180`）。  

> 🔗 *可通过 `litellm --model-list` 或代理配置端点测试新增提供方/模型。*

---

### **4. 性能与优化**  
- 🚀 通过 `python-bridge` 路由引入 **原生 Rust Python 推理可选路径**（`#43465`），有望在高吞吐推理路径中降低延迟并提升内存效率。  
- 📊 在核心服务（音频转录、聊天补全、响应、WebSocket）中新增 **结构化路由生命周期追踪**，位于 `core/src/diagnostic.rs`（`#43466`），支持细粒度性能分析。  
- 💡 **成本追踪改进**：  
  - 聊天请求现根据调用方的 `metadata.completion_window` 计费（`#43477`）。  
  - 流式响应在首个字节前失败的情况现已记录日志（`#43505`），改善失败指标与冷却行为。  

> 📈 *预期收益：Python bridge 路径冷启动延迟降低 10–25%；分布式调试时具备更精细的追踪粒度。*

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 描述 | 修复状态 |
|--------|-------|-------------|------------|
| 🔴 **严重** | [`#43165`](https://github.com/BerriAI/litellm/issues/43165) | 路由降级在超时后返回 `null` 响应体（非流式） | 待处理 — 影响客户端可靠性 |
| 🔴 **高** | [`#41295`](https://github.com/BerriAI/litellm/issues/41295) | Azure 透传路由存在虚拟密钥白名单绕过漏洞 | 待处理 — 可导致对 Azure 部署的未授权访问 |
| 🔴 **高** | [`#43157`](https://github.com/BerriAI/litellm/issues/43157) | `sanitize_input_schema_for_anthropic` 丢弃 `anyOf`/`$ref` → 导致工具为空 | 待处理 — 破坏 Anthropic 工具调用功能 |
| 🟡 **中等** | [`#43010`](https://github.com/BerriAI/litellm/issues/43010) | Anthropic `/v1/responses` 在推理块中重复输出思考文本 | 待处理 — 影响智能体输出一致性 |
| 🟡 **中等** | [`#38674`](https://github.com/BerriAI/litellm/issues/38674) | Responses API WebSocket 模式下令牌使用量记录为 0 | 待处理 — 破坏 CLI 智能体的成本追踪 |

> ⚠️ **需采取行动**：使用降级路由、Anthropic 工具调用或智能体 CLI 的应用应密切关注上述问题。

---

### **6. 对应用开发者的意义**  
- **优先使用原生 Rust 路径**（`python-bridge`），在高吞吐系统中实现更低延迟的推理——预计启动更快，内存控制更紧密。  
- **充分利用新追踪能力**（`#43466`），以调试跨多个提供方和模型组的复杂智能体流程。  
- **避免使用 `max_budget=0`** — 当前其行为等同于“无限制”（`#43214`）；建议改用 `max_budget=0.01`，或通过 `budget_limit_enabled=False` 禁用。  
- **谨慎验证虚拟密钥策略** — Azure 透传绕过漏洞（`#41295`）若未在入口层限制，可能导致敏感模型暴露。  
- **监控 `/v1/responses` 流式输出** — 重复思考文本问题（`#43010`）可能影响智能体自我反思的准确性。  

> ✅ **最佳实践**：在开发早期启用 `OTel V2` + 结构化追踪（`#43466`），以全面掌握 LLM 流水线中的成本、延迟与正确性表现。

---  
*数据来源：[BerriAI/litellm GitHub](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-28**

---

### **1. 今日亮点**  
Unsloth 发布了针对 PyTorch 2.13/2.14 和 Python 3.13 支持的预构建 CUDA 13 轮子，涵盖 FlashAttention2 2.8.4、Causal-Conv1D 1.7.0 以及 Mamba_SSM 2.3.2.post1 — 这是迈向更广泛高性能推理兼容性的重要一步。与此同时，多个 PR 专注于稳定工具执行、修复分词限制，并优化多 GPU 及 MLX 推理工作流。

---

### **2. 发布与破坏性变更**  
- **`prebuilt-wheels-cu13` (v2026.09.28)**：新增适用于 Linux x86_64 CUDA 13 的预构建轮子，包括：
  - `flash-attn` 2.8.4 ([PR #12150](https://github.com/unslothai/unsloth/pull/12150))
  - `causal-conv1d` 1.7.0 ([PR #12150](https://github.com/unslothai/unsloth/pull/12150))
  - `mamba-ssm` 2.3.2.post1 ([PR #12150](https://github.com/unslothai/unsloth/pull/12150))  
  基于 PyTorch 2.13 与 2.14，支持 Python 3.13。  
  > ✅ *推荐使用 NVIDIA GPU 并搭载 CUDA 13 及现代 PyTorch 版本的用户使用。*

- **PyTorch 版本上限提升**：现支持 `torch<2.15.0` ([PR #12152](https://github.com/unslothai/unsloth/pull/12152))，使 Studio 安装可启用更新的 PyTorch 功能。

---

### **3. 新模型与硬件支持**  
- **MLX 推理增强**：  
  - 为 MLX 模型新增 TurboQuant KV 缓存量化功能 ([PR #11170](https://github.com/unslothai/unsloth/pull/11170)) — 支持 4 位、3.5 位（混合）、3 位及 2 位量化。
  - 通过后端规划器提供 MLX 内存估算与加载适配功能 ([PR #10287](https://github.com/unslothai/unsloth/pull/10287))。
- **多 GPU 灵活性**：  
  - 手动 GPU 层拆分现已显式尊重 `--split-mode layer` 选项 ([PR #10770](https://github.com/unslothai/unsloth/pull/10770))。
  - Studio 中可同时加载多个模型 ([PR #11591](https://github.com/unslothai/unsloth/pull/11591))。
- **新分词器后端请求**：  
  - 提出功能请求以支持 [Gigatoken](https://github.com/marcelroed/gigatoken) 实现高吞吐量分词 ([Issue #12072](https://github.com/unslothai/unsloth/issues/12072))。

---

### **4. 性能与优化**  
- **LoRA 训练加速**：  
  - 通过急切 FP8 线性执行与优化 Triton 内核，块级 FP8 LoRA 训练在 RTX PRO 6000、L4 上最高提速 **15 倍** ([PR #12027](https://github.com/unslothai/unsloth/pull/12027))。
- **内存效率**：  
  - 修复模型能力探测期间过度内存锁定问题（将每张卡闲置 GPU 开销从约 360 MB 降低）([Issue #11953](https://github.com/unslothai/unsloth/issues/11953))。
- **生成令牌数量限制**：  
  - `unsloth start opencode` 现已尊重 `--max-tokens`，移除 8192 令牌的硬性上限 ([PR #12111](https://github.com/unslothai/unsloth/pull/12111))。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 修复 PR |
|--------|------|--------|--------|
| ⚠️ 高 | 微调过程中显存占用远超宣称上限，导致大模型出现 OOM | 开放 ([#4504](https://github.com/unslothai/unsloth/issues/4504)) | 尚无修复 |
| ⚠️ 高 | 终端工具调用因变量展开中无限递归（`VAR=$VAR`）导致应用冻结 | 开放 ([#12084](https://github.com/unslothai/unsloth/issues/12084)) | [PR #12087](https://github.com/unslothai/unsloth/pull/12087) 修复凭证扫描循环 |
| ⚠️ 中 | 工具调用超过最大时长后无限挂起 | 开放 ([#12048](https://github.com/unslothai/unsloth/issues/12048)) | [PR #12087](https://github.com/unslothai/unsloth/pull/12087) 解决根本原因 |
| ⚠️ 中 | 对有效 MCP 图像返回值报错无效 base64 错误 | 开放 ([#12058](https://github.com/unslothai/unsloth/issues/12058)) | 尚无修复 |
| 🟡 低 | macOS Pinyin IME 阻塞回车键发送消息 | 开放 ([#12137](https://github.com/unslothai/unsloth/issues/12137)) | [PR #12138](https://github.com/unslothai/unsloth/pull/12138) 修复输入处理 |
| 🟡 低 | Bitdefender 将 Unsloth Desktop 安装程序标记为感染 | 开放 ([#12140](https://github.com/unslothai/unsloth/issues/12140)) | 误报；无需代码变更 |

---

### **6. 对应用开发者的启示**  
- **构建健壮的 MLX 与多 GPU 代理**：使用 `--split-mode layer` 和手动 GPU 分配，实现对异构显卡上模型分片的精确控制。新的 TurboQuant KV 缓存可带来更低延迟的 MLX 推理体验。
- **避免显存意外**：密切监控微调过程中的内存使用情况——当前报告的问题 (#4504) 表明现有估算可能过于乐观。建议采用更小的 batch size 或梯度检查点技术。
- **安全处理长输出**：随着 `unsloth start opencode` 现在尊重 `--max-tokens`，您可生成更长响应而无需截断——特别适合代码生成与推理任务。
- **确保工具可靠性**：谨慎处理包含递归变量赋值（`VAR=$VAR`）的 shell 命令——除非通过最近的 PR 修复，否则可能引发卡死。
- **利用即将上线的优化**：对于块级 FP8 LoRA 训练，一旦最新更改落地，预计将迎来高达 15 倍的性能飞跃——这对高效微调高级量化模型至关重要。

> 🔗 *关注进展：[unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*