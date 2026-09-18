# AI 基础设施日报 2026-09-18

> 生成时间: 2026-09-18 00:45 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-09-18**

---

### **1. 生态概览**  
AI推理与服务生态正迅速成熟为一个多层级、硬件感知的栈，专为下一代模型——特别是MoE、多模态及Flash架构变体——优化。各项目在性能关键原语（如推测解码、FP8/INT8量化、分布式张量并行）上趋于一致，但在目标层级上呈现分化：从底层内核（llama.cpp）到全栈网关（Ollama、LiteLLM）再到高吞吐引擎（vLLM、SGLang）。AMD ROCm与Blackwell时代SM120支持已成为核心竞争场域，稳定性与正确性问题凸显了跨架构部署日益增长的复杂性。

---

### **2. 活动对比**

| 项目       | 开放问题 (24小时) | 合并的PR (24小时) | 最近发布 | 状态 |
|------------|-------------------|------------------|----------|------|
| **vLLM**   | 7                 | 12               | 无       | 稳定（候选版待发布） |
| **SGLang** | 10                | 8                | 无       | 活跃开发中 |
| **llama.cpp** | 15             | 13               | `b11028` | 修补重点 |
| **Ollama** | 12                | 5                | 无       | 功能驱动 |
| **LiteLLM** | 11              | 7                | 无       | 配置与安全聚焦 |
| **Unsloth** | 9               | 10               | v0.1.810-beta | 测试版发布 |

> ✅ *vLLM与llama.cpp在技术迭代速度上领先；Ollama与LiteLLM功能推进强劲，但稳定性更高风险。*

---

### **3. 模型支持竞赛**

| 新模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------|------|--------|-----------|--------|---------|---------|
| **Qwen3.8-Flash-Next** | ✅ (MTP, fp8_e4m3 KV缓存) | ✅ (MTP, 混合模式) | ✅ (MTP, flash attention) | ✅ (MTP) | ❌ | ✅ (UD-IQ4_XS) |
| **DeepSeek-V4.1-Flash** | ✅ (推测解码) | ✅ (DSA稀疏-MLA) | ⚠️ (部分支持) | ❌ | ❌ | ❌ |
| **Kimi K2.5/K3** | ✅ (多模态) | ✅ (GB300/GB200 SP) | ❌ | ❌ | ❌ | ❌ |
| **GLM-5.3-Flash** | ✅ (ROCm, ViT CUDA图) | ✅ (Quark-MXFP4) | ✅ (ROCm) | ✅ (Vulkan崩溃) | ❌ | ✅ (ROCm) |
| **spark2_5** | ❌ | ❌ | ❌ | ✅ (请求中) | ❌ | ❌ |
| **Nemotron (MTP)** | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |

> 🏆 **领跑者**: **vLLM** 在模型多样性与优化深度上领先，尤其在Qwen与GLM系列方面表现突出。  
> 🔥 **新兴优势**: **Unsloth** 对新量化格式（MXFP4、FP8）的采纳速度最快，并以先进MTP处理支持Qwen3.8-Flash-Next。

---

### **4. 性能前沿**

| 优化方向          | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|--------------------|------|--------|-----------|--------|---------|---------|
| **KV缓存效率**      | ✅✅ (fp8_e4m3, 增量卸载) | ✅ (HiCache写回) | ✅ (flash attention) | ⚠️ (内存泄漏) | ⚠️ (流式丢失) | ✅ (每256个token释放缓冲区) |
| **推测解码**         | ✅✅ (SM120修复) | ✅ (正确性问题) | ⚠️ (有限支持) | ❌ (无控制) | ❌ | ⚠️ (阻塞风险) |
| **量化与内核**       | ✅✅ (TurboQuant/HIGGS, MLA) | ✅ (MXFP8, 延迟路由) | ✅✅ (DP4A, MFMA, OpenCL) | ✅ (Bonsai 1/2-bit) | ❌ | ✅✅ (FP8/INT8, GGUF) |
| **分布式服务**       | ✅✅ (流水线并行, TP) | ✅ (集体通信) | ❌ | ❌ | ✅ (多提供商) | ❌ |
| **内核级优化**       | ✅✅ (CUDA图, 融合Triton) | ✅ (DSA稀疏-MLA) | ✅✅ (Intel Xe, CDNA2) | ⚠️ (ARM64 Vulkan) | ❌ | ✅ (CPU内核精简) |

> 💡 **顶尖表现者**: **vLLM** 与 **llama.cpp** 在内核与系统层面占据主导地位。  
> 📈 **专业领头羊**: **Unsloth** 在降低CPU开销和LoRA训练速度方面表现卓越；**SGLang** 在缓存语义与推测解码设计上领先。

---

### **5. 层级定位**

| 项目       | 主要层级                     | 核心差异化 |
|------------|-------------------------------|-------------|
| **vLLM**   | 高性能推理引擎               | 行业领先的批处理、MoE、CUDA图集成 |
| **SGLang** | 高级推理运行时 + 网关         | 统一缓存语义、DSA后端、推测解码严谨性 |
| **llama.cpp** | 本地化、可移植推理运行时     | 跨后端支持（Vulkan、SYCL、OpenVINO），轻量，开源 |
| **Ollama** | 开发者友好的本地网关         | 简洁命令行、工具调用、MLX/ARM64扩展 |
| **LiteLLM** | 企业级API网关                | 多提供商代理、成本追踪、JWT/OAuth、可观测性 |
| **Unsloth** | 全栈微调 + 推理              | 训练加速、原生Docker、多用户支持 |

> 🧩 **战略分化**:  
> - **构建智能体的工程师**: 选vLLM/SGLang应对规模，选Unsloth提升训练效率。  
> - **本地原型开发的开发者**: 选Ollama + llama.cpp以求便捷。  
> - **管理成本的企业**: 选LiteLLM + Ollama实现计费与访问控制。

---

### **6. 趋势信号**

#### 🔍 **提炼的关键行业趋势**
1. **硬件专用化正在加速**:  
   - AMD ROCm（MI350X/MI355X）与NVIDIA Blackwell（SM120）已成首要目标，不再是次要考虑。  
   - 如**vLLM**、**SGLang**、**Unsloth**等项目正大力投入GPU专用内核（稀疏-MLA、DSA、MFMA）研发。

2. **MoE与MTP不再只是实验性功能**:  
   - 所有主要项目均已支持MTP（多令牌处理）或MoE专家——其中**vLLM**与**Unsloth**在优化上领先（如增量卸载、fp8_e4m3 KV缓存）。

3. **推测解码正迈向生产就绪（但尚未可靠）**:  
   - 尽管**vLLM**与**SGLang**已发布修复，但**Ollama**缺乏控制选项（`--nodraft`），**LiteLLM**对草稿状态无可见性——这对智能体系统是严重隐患。

4. **工具调用与智能体保真度正在恶化**:  
   - **Ollama**（工具调用解析错误）、**SGLang**（缓存错向）、**LiteLLM**（日志缺失）多次出现回归问题，表明尽管需求高涨，智能体工作流仍极脆弱。

5. **安全与合规缺口开始浮现**:  
   - **LiteLLM**的`GET /v1/models`绕过团队限制，以及**Ollama**缺少版权声明，反映出企业级可用性的审查日益严格。

#### ✅ **开发者应关注的重点**
- **稳定性 > 功能**: 在核心缺陷修复前，优先选择vLLM（生产推理）与Unsloth（训练）而非Ollama/LiteLLM。
- **基准测试需谨慎**: 使用相同缓存设置，除非已打补丁，否则避免在SYCL上使用`--split-mode tensor`。
- **持续监控**:  
  - `v0.29.1rc0`（vLLM）——预计稳定支持ROCm/GLM-5.3-Flash。  
  - Ollama中的`--nodraft`标志（#18517）——调试必备。  
  - SGLang统一Radix Cache采用——提升可扩展性。

> 🛠 **总结**: 基础设施正从“能否运行”转向“能否安全且可预测地运行”——未来版本将面临更严格的QA与更全面的测试。

---  
*由资深AI基础设施分析师整理 | 2026-09-18*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-09-18**

---

### **1. 今日亮点**  
vLLM 项目持续加速对下一代多模态与 MoE 模型的支持，重点推进了 ViT CUDA graph 集成（#38175）和增量式 MoE 专家卸载（#38256）。针对 GLM-5.3-Flash 在 ROCm 上的关键性能修复（#57424, #57227），以及 DeepSeek-V4.1 在 SM120 上的推测解码优化（#56771），同时统一了跨平台的性能分析控制（#57460）。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未检测到新版本发布或破坏性 API 变更。*

---

### **3. 新模型与硬件支持**  
- **多模态**：为 **LLaVA-OneVision** 新增 `SupportsEncoderCudaGraph` 支持，实现完整视觉塔 + 投影器 CUDA graph 捕获（PR #57379）。  
- **硬件**：增强 **GLM-5.3-Flash** 在 AMD MI350X/MI355X（gfx950）上的 ROCm 支持，包括稀疏索引器修复及 SM120 上的 FP32 路由器启用（PR #56152）。  
- **量化**：持续推进 **TurboQuant/HIGGS attention backend** 对混合模型（如 Qwen3.5、mamba+attention）的支持，并推进 MLA 支持（Issue #40069）。  
- **模型系列**：正在积极开发 **DeepSeek-V4.1-Flash**、**Qwen3.8-Flash-Next** 以及 **Kimi K2.5**，涵盖多模态与量化优化。

---

### **4. 性能与优化**  
- **GLM-5.3-Flash**：通过查询复用及消除冗余的 `torch.cat` 操作，降低稀疏-MLA 准备开销（PR #57458）。  
- **Qwen3.8-Flash-Next**：成功在 QSA 路径上启用 **fp8_e4m3 KV 缓存**，有效 KV 缓存池大小翻倍（实测：在 GB10、sm_121 上吞吐量约提升 2 倍）（Issue #54426）。  
- **MiniMax-M3**：在 SM120 上通过融合核函数与分块边界逻辑，优化解码索引与路由（PR #56151, #56149, #56150）。  
- **推测解码**：改进流水线并行下的辅助状态处理及草稿状态隔离（PR #57197, #57290）。  
- **性能分析**：统一平台感知的 torch profiler，支持可配置活动与会话级控制（PR #57460, #56542）。

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 摘要 | 修复状态 |
|--------|------|------|----------|
| 🔴 高 | [#57424](https://github.com/vllm-project/vllm/issues/57424) | GLM-5.3-Flash 在 ROCm 夜间构建中无法启动，因 `SparseAttnIndexerKpool` 缺失 `forward_cuda` → `NotImplementedError` | ❌ 待处理 |
| 🔴 高 | [#57227](https://github.com/vllm-project/vllm/issues/57227) | 16K token 预填充阶段延迟创建 CUDA graph 时发生 GPU 内存访问故障（ROCm, gfx950） | ❌ 待处理 |
| 🟡 中 | [#56771](https://github.com/vllm-project/vllm/issues/56771) | DeepSeek-V4.1-Flash 在 SM120 上执行 DSpark 推测解码时，稀疏-MLA 预填充阶段出现非法内存访问 | ❌ 待处理 |
| 🟡 中 | [#56370](https://github.com/vllm-project/vllm/issues/56370) | 启用序列并行 + 异步 TP 时，批量不变性被破坏（`VLLM_BATCH_INVARIANT=1`） | ⚠️ PR #57197 中部分修复 |
| 🟡 中 | [#54426](https://github.com/vllm-project/vllm/issues/54426) | SM120 上 `qk_rope_head_dim=0` 失败 — 无可用注意力/KV 路径用于无 ROPE 的稀疏 MLA | ❌ 待处理 |

---

### **6. 对应用开发者意味着什么**  
- **在 AMD GPU 上部署？** 注意 GLM-5.3-Flash 与 DeepSeek-V4.1 在 ROCm 上存在不稳定性；建议在 #57424 和 #57227 修复前避免使用夜间构建，可临时使用 `--enforce-eager` 作为规避方案。  
- **构建长上下文推理的智能体？** `增量式 MoE 专家卸载` RFC（#38256）支持在较小硬件上运行大型 MoE 模型——请关注进展以评估生产可用性。  
- **使用推测解码？** 请确保未触发 DeepSeek-V4.1 的 `SM120 稀疏-MLA` 问题；建议先用小上下文验证。  
- **优化推理性能？** 充分利用 Qwen3.8-Flash-Next 中新增的 `fp8_e4m3 KV 缓存` 支持，最高可达 2 倍吞吐提升。  
- **调试性能瓶颈？** 通过 Python/Rust 前端启用 `torch_profiler_activities` 与 `profile_prefix` 实现统一性能分析（PR #57460）。  

👉 *敬请关注 v0.29.1rc0 及后续版本，可能包含这些高优先级问题的稳定修复。*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 摘要 – 2026-09-18**

---

### **今日亮点**  
SGLang 生态系统持续推进对下一代硬件和推理模式的支持，关键工作涵盖 **黑威尔时代 CUDA 优化**、**推测解码正确性** 以及 **跨架构兼容性**。主要进展包括通过 `CUDA Coredump Tracker`（问题 #26340）修复 GPU 内存损坏的重大问题，**通义 PPU** 和 **SenseNova-U1/U1.5** 集成的持续稳定化，以及后端间统一缓存语义的进展。

---

### **发布与破坏性变更**  
*过去 24 小时内未报告任何内容。*

---

### **新模型与硬件支持**  
- ✅ **通义 PPU (ZW810/ZW810E/ZW-M890P)**：第一类支持正在 [问题 #37519](https://github.com/sgl-project/sglang/issues/37519) 中跟踪，支持部署于中国新兴的高性能 AI 加速器。
- ✅ **SenseNova-U1/U1.5**：集成工作正在进行中 ([问题 #37742](https://github.com/sgl-project/sglang/issues/37742))，以官方 OpenSenseNova 仓库为参考。
- ✅ **AMD GLM-5.3-Flash Quark-MXFP4**：PR #39317 确保在模型加载过程中正确处理融合/专家量化排除。
- ✅ **Kimi K3 (GB300/GB200) TP4/TP16 SP collective**：通过 PR #35330 启用大规模多节点推理。

---

### **性能与优化**  
- 🔧 **乐观预填充 + HiCache 写回**：PR #40043 实现 *仅缓冲区的 L3 写透式 HiCache* 用于乐观预填充，在高竞争场景下提升前缀缓存利用率。
- 🚀 **DSA Sparse-MLA 后端 (SM120/90)**：PR #32779 添加 DSA 预填充的融合 Triton 路径，解决高头数模型（如 GLM-5.x）中内核适配不佳的问题。
- ⚙️ **DeepEP v2 中的 MXFP8 与延迟路由**：PR #40030 引入对 MXFP8 专家和可选 FP32 SiLU 策略的支持，提升 MoE 模型中的高精度路由能力。
- 💡 **混合递归状态提交修复**：PR #40001 修复了在 GDN/KDA/Mamba 类模型中使用流水线并行 × 推测解码时的错误状态管理。

---

### **稳定性与回归问题**  
| 严重性 | 问题 | 描述 | 状态 |
|--------|------|------|------|
| 严重 | [#26340](https://github.com/sgl-project/sglang/issues/26340) | CI 自动收集的 CUDA coredump 显示可能存在内存损坏或内核崩溃；313 条评论表明影响范围广泛。 | 正在调查 |
| 高 | [#39830](https://github.com/sgl-project/sglang/issues/39830) | 混合（GDN/Mamba）模型的分层缓存因主机层级命中误路由而返回错误输出。 | 尚无修复 PR |
| 高 | [#39651](https://github.com/sgl-project/sglang/issues/39651) | 基准测试工具无法控制或记录基数缓存状态——导致 CI 与用户运行结果无声不一致。 | 未活跃 |
| 中 | [#39684](https://github.com/sgl-project/sglang/issues/39684) | `sgl-deep-gemm 0.2.0` 在权重缩放变换中返回非所有者别名，破坏下游张量所有权。 | 预期补丁 |
| 中 | [#39922](https://github.com/sgl-project/sglang/issues/39922) | `/v1/messages` 永远不报告 `cache_creation_input_tokens`，导致计费错误。 | 与 #39900 重复 |

> 🔍 **注意**：多个回归问题与 **KV 缓存行为**、**推测解码** 和 **多设备协调** 相关——这些是高吞吐量服务的核心组件。

---

### **对应用开发者的启示**  
- 若您在 **黑威尔 GPU (SM120)** 上部署，请注意在合并如 #32779 等 PR 前，**GLM-5.x NoPE MLA** 和 **DSA 后端** 可能存在不稳定性。谨慎使用 `--dsa-prefill-backend flashmla_sparse`。
- 对于使用推测解码的 **代理系统**，请注意：
  - 缺失 OTel span (`#37128`)
  - 请求被撤回时出现错误的 token 拼接 (`#39645`)
  - 混合模型缓存不一致 (`#39830`)
- 请在通过 PR #40043 确认 HiCache 设置后，再启用 `--optimistic-prefill-attempts`。
- 计费准确性依赖正确的 `cache_creation_input_tokens` —— 当前在 Anthropic 兼容端点中已失效（`#39900`, `#39922`）。请关注更新。
- 考虑采用 **统一基数缓存**（PR #40043, #39915），以在生产集群中获得更好的可扩展性和可观测性。

> ✅ **行动建议**：始终验证您的基准命令是否与 CI 设置一致——尤其是缓存协议——以避免误导性的性能结果（[#39651](https://github.com/sgl-project/sglang/issues/39651)）。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp Digest – 2026-09-18**

---

### **1. 今日亮点**  
最新发布周期（b11028–b11017）聚焦于稳定 Qwen3 与 Nemotron 模型的 MoE（专家混合）支持，针对 Vulkan、SYCL 与 OpenVINO 后端中的张量加载和内存管理问题进行了关键修复。Vulkan 后端在防止错误注意力缓存读取及设备丢失错误方面取得重要稳定性提升，同时针对 Intel Xe 与 AMD CDNA2 硬件的新内核优化正显著推动性能增长。

---

### **2. 发布与破坏性变更**  
- **最新版本：`b11028`** ([GitHub](https://github.com/ggml-org/llama.cpp/releases/tag/b11028))  
  - 修复 CI 中缺失的文件驱逐问题（`ci: add missing evict-old-files #29041`）——防止自动化构建中磁盘膨胀。  
- **`b11027`**：跳过 RPC 中的 ACCEL 设备 (#29020) —— 避免在不支持的硬件上出现未定义行为。  
- **`b11026`**：当设置 `TENSOR_SKIP` 时，有条件跳过 `gate_up_exps` (#29014)，对融合 MTP 张量未加载时的 Qwen3.5-MoE 正确处理至关重要。  
- **`b11025`**：扩展 Nemotron MTP 支持，包含清理与首次修复 (#29018)。  

> 🔔 **迁移提示**：使用 Qwen3.5-MoE 或带有融合 MTP 层的 Nemotron 模型的用户应升级至 `b11026+`，以避免模型加载期间出现无声数据损坏。

---

### **3. 新模型与硬件支持**  
- ✅ **Qwen3.5-MoE 与 Qwen3.8-Flash-Next (MTP)**：通过合并请求如 [#28243](https://github.com/ggml-org/llama.cpp/pull/28243) 实现完整 MTP 支持，启用共享标记嵌入，推理速度最高可达 2 倍提升。  
- ✅ **Nemotron**：扩展 MTP 支持，完成清理与对齐修复 (#29018)。  
- ✅ **Intel Xe (LPG Plus/Xe2/Xe3)**：PR [#24406](https://github.com/ggml-org/llama.cpp/pull/24406) 引入闪存注意力内核——对 Intel Arc GPU 上高吞吐生成至关重要。  
- ✅ **AMD CDNA2 (gfx90a)**：PRs [#29050](https://github.com/ggml-org/llama.cpp/pull/29050) 与 [#29047](https://github.com/ggml-org/llama.cpp/pull/29047) 添加矩阵核心（MFMA）闪电索引支持——充分释放 DeepSeek-V3.2/V4 的硬件性能。  
- ✅ **Hexagon NPU (Windows Arm64)**：通过 PR [#29052](https://github.com/ggml-org/llama.cpp/pull/29052) 开启 CI 构建——为移动端 AI 部署打开通道。

---

### **4. 性能与优化**  
- 🚀 **Intel Xe 闪存注意力内核**（PR #24406）：早期基准测试显示，在长上下文生成场景下，Xe2/Xe3 GPU 上吞吐量最高提升 **1.8 倍**。  
- ⚡ **OpenCL 的 DP4A 二进制内核**（PRs #29057, #29056, #29055）：针对 Q6_K/Q4_K/Q4_0 量化优化的 GEMM 内核——兼容 OpenCL 设备预计实现 **约 25% 加速**。  
- 💥 **OpenCL 的闪存注意力二进制支持**（PR #29046）：在异构平台实现低延迟注意力计算。  
- 🔍 **闪电索引（CDNA2/MFMA）**（PR #29050）：消除标量回退；利用矩阵核心实现 AMD Instinct GPU 上近乎线性的可扩展性。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 修复/临时方案 |
|--------|------|-------|--------------|
| 严重 | Vulkan：Linux 7.x + RADV Strix Halo 下出现 `DeviceLostError` (#25664) | 待处理 | 尚无 PR —— 可能为驱动层问题 |
| 高 | Vulkan：错误的注意力缓存读取 → 输出错误 (#28956) | 待处理 | 已在 PR #28956 修复（待合并） |
| 高 | SYCL：启用 ngram-mod 时过度分配临时缓冲区（>2GB）(#28860) | 待处理 | 临时方案：禁用 `--ngram-mod` |
| 中 | CUDA：RTX 5090D 在解码时卡死（Qwen3.8-27B-NVFP4）(#27329) | 待处理 | 正调查特定于 GPU 的内核竞争问题 |
| 中 | 聊天过程中主机内存无限增长（Qwen4_exp，128GB 统一内存）(#28933) | 待处理 | 可疑为 KV 缓存管理中的内存泄漏 |
| 低 | `ggml_backend_sycl_split_buffer_type` 函数签名不匹配 (#28980) | 待处理 | 头文件拼写错误 —— 易修复 |

> ⚠️ **注意**：多个问题影响 Vulkan/SYCL 环境下的 MoE 模型（Qwen3.5/3.8-MoE、Nemotron）——用户应密切监控 `b11026+` 版本更新。

---

### **6. 对应用开发者的意义**  
- **使用 `b11026+` 版本运行 Qwen3.5-MoE 与 Nemotron 模型** —— 更早版本可能因张量跳过不当导致无声数据损坏。  
- **在 SYCL 上谨慎启用 `--split-mode tensor`** —— 其性能远低于单 GPU 模式，且在量化 KV 缓存下可能卡死 (#26409)。  
- **Intel Arc B70 用户**：请勿在 #28953 合并前使用 `--split-mode tensor` —— 当前 SYCL 实现存在 19.3GB 内存上限缺陷。  
- **充分利用新的 DP4A/OpenCL 内核**，以在支持 OpenCL 的设备上实现更快推理——预期在 Q4_K/Q6_K 模型上降低约 25% 延迟。  
- **关注 `/v1/completions` logprobs 行为** —— 当前版本仅返回生成标记的 logprobs，会破坏 LM-eval 测评流水线 (#27174)。

> ✅ **可操作建议**：若使用 `llama-server`，可通过 PR #29040 在 CI 中启用 `--errors-only` 以减少测试日志噪声。

---  
*本摘要基于 GitHub 活动整理（2026-09-18）。来源：[llama.cpp GitHub](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-18**

---

### **1. 今日亮点**  
Ollama 生态系统持续扩展对新兴模型和硬件后端的支持，关键工作正在推进基于 MLX 的推理稳定性以及新模型架构识别。主要进展包括原生支持 *spark2_5* 架构（需求来自 #18195），Vulkan ARM64 推理进展（#18502），以及对工具链灵活性的日益关注——体现在多个关于自定义角色（#18483, #18509）和推测解码控制（#18517）的功能请求中。一个重大的许可证问题再次浮现，涉及发布制品中缺失版权声明（#3185）。

---

### **2. 发布与破坏性变更**  
过去 24 小时内无报告。

---

### **3. 新模型与硬件支持**  
- ✅ **新架构支持**：`spark2_5`（Spark-X2.5-4B / 1.7B）原生支持现已被积极请求（#18195）；目前受运行时识别问题阻塞。  
- 🚀 **MLX 后端增强**：  
  - 通过 MLX 后端新增对 Bonsai 低比特（1位/2位）量化权重的支持（#18515）。  
  - 实验性进展：改进加载时停顿检测与缓冲区管理（#17834）。  
- 💻 **硬件与平台扩展**：  
  - 修复 Linux ARM64 系统（Apple Silicon M1 / Asahi Linux）上的 Vulkan 推理问题 —— PR 已合并（#18502）。  
  - AMD RX 6750 XT 在多模型负载下出现 Vulkan 崩溃，正在调查中（#18494）。

---

### **4. 性能与优化**  
- ⚙️ **推测解码控制**：针对 `--nodraft` 标志的请求（用于禁用推测解码，#18517）可实现调试与性能基准测试。  
- 🔍 **内存与加载效率**：  
  - Gemma 4 MTP 的草稿模型内存测量失败，导致报告错误（约 315 MB 而非 4.4 GB），影响监控（#17951）。  
  - MLX 运行器现在每 256 个标记释放一次 KV 缓冲区，改善内存生命周期管理（#18510）。  
- 📈 **启动优化**：预热编译路径现已在模型加载时预填充，降低冷启动延迟，不影响 TTFT（#16085）。

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 描述 | 修复状态 |
|--------|------|-------------|------------|
| 🔴 高 | `glm-ocr` 无限循环 | 模型陷入无限文本重复；使用简单输入如 `hi` 即可复现（#16892） | 开放 |
| 🔴 高 | `qwen3-vl:8b-instruct` 在 Vulkan（AMD RX 6750 XT）上崩溃 | Windows 0.34.1 版本在加载第二个视觉语言模型后崩溃（`0xc0000005`）（#18494） | 开放 |
| 🔴 高 | `mlx` nvfp4 在持续单槽负载下卡死 | 请求无限挂起且无任何标记输出，需发送 SIGTERM 才能恢复（#18505） | 开放 |
| 🟡 中 | `glm-5.3-flash` 输出格式错误的 JSON 字符串编码工具调用 | 由于序列化不当，`calls` 字段间歇性出现损坏（#18506） | 开放 |
| 🟡 中 | `minicpm5-2b` 原生工具调用始终无法解析 | 工具响应包含格式错误的 XML 片段（`name="get_weather"> name="city...`）（#18483） | 开放 |
| 🟡 中 | Ollama Cloud 登录被阻止使用 anonaddy.me 别名 | 用户使用有效凭证仍收到“访问被阻止”错误（#18513） | 开放 |

> *注：多个回归问题影响本地与云部署中的工具调用及模型服务保真度。*

---

### **6. 对应用开发者的影响**  
- **工具链灵活性至关重要**：多项问题凸显当前对角色类型（`system`, `user`, `assistant`）和工具调用解析的限制正破坏真实世界智能体工作流。预计社区将推动更宽松、结构化的输入处理方案（如 #18509, #18483）。  
- **性能调试亟需工具支持**：缺少 `--nodraft` 标志使推测解码影响难以隔离。开发者应做好准备，直至 #18517 落地前采用自定义补丁或分叉构建。  
- **云与企业级用例面临审视**：移除内置 CLI 智能体（#18490）及许可证缺口（#3185）表明隐私、合规与可用性之间张力加剧——企业用户必须仔细审计依赖项。  
- **跨平台可靠性仍不稳固**：AMD 显卡与 ARM64 Linux 上的 Vulkan 支持依然不稳定；依赖这些平台的开发者应预期需手动干预或启用备用方案。

> 🔗 **关键链接**：  
> - [问题 #18195: spark2_5 支持](https://github.com/ollama/ollama/issues/18195)  
> - [PR #18505: MLX nvfp4 卡死修复](https://github.com/ollama/ollama/pull/18505)  
> - [问题 #16892: glm-ocr 无限循环](https://github.com/ollama/ollama/issues/16892)  
> - [PR #18517: --nodraft 标志提案](https://github.com/ollama/ollama/pull/18517)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

### **1. 今日亮点**  
LiteLLM 继续扩展其企业级代理功能，针对认证、成本追踪和可观测性进行了关键修复——尤其在 JWT 缓存、模型访问控制和流式处理防护方面。重要 PR 包括改进 Bedrock 音频转录处理（PR #41565）和增强错误聚类以提升调试效率（PR #41715），同时社区对扩展 SSO 可伸缩性的需求依然强烈（Issue #25762）。

---

### **2. 版本发布与破坏性变更**  
*过去 24 小时内无新版本发布。*  
但若干配置和行为变更正在积极处理中：  
- **`LITELLM_JOB_ROLE`** 已被文档记录，但代码中尚未存在（Issue #39722），表明未来可能弃用或重构。  
- `cache_control_injection_points` 设置现已在模型更新时保持持久化（PR #40632），防止因静默配置错误而影响缓存行为。

---

### **3. 新模型与硬件支持**  
*今日未新增模型或硬件后端。*  
持续的请求反映出日益增长的需求：  
- 通过 Issue #16073 请求支持 fal.ai 视频模型（Sora 2, Veo 3.1）  
- 通过 Issue #28763 请求支持阿里云 DashScope 图像生成模型（Qwen-Image, Wan）  
- 作为 OpenAI 兼容提供方支持 Bourse（Issue #41042）——目前已可运行，但尚未正式文档化  

这些反映了向多样化多模态及成本优化推理服务集成的广泛趋势。

---

### **4. 性能与优化**  
*今日未落地直接的吞吐量/延迟改进。*  
但以下方面已有进展：  
- **流式处理效率**：PR #41711 确保拦截的网页搜索继承父会话上下文，实现准确的成本归因与链路关联。  
- **成本精度**：PR #41694 确保模型重命名能传播至所有访问控制（密钥、团队、组织），防止因过期允许列表导致静默失败。  
- **API 一致性**：PR #41448 在透传路由中保留上游查询参数（如 Vertex AI），避免意外的支出日志记录失败。

---

### **5. 稳定性与回归问题**  
当前主要稳定性问题集中在 **认证**、**成本核算** 和 **流式正确性** 上：

1. **Prisma 重连失败**（Issue #26886）：由于 Prisma 引擎崩溃，代理 Pod 出现持续不稳定性；影响 Kubernetes 部署的可靠性。  
2. **流式使用量丢失**（Issue #36168）：最终流式数据块若 `choices` 非空，则丢失 `cached_tokens`，导致计费错误（最高可达完整输入费率）。*修复待定。*  
3. **`/cursor/chat/completions` 缺失日志**（Issue #30126）：尽管提供方已收费，成功请求仍未记录在 SpendLogs 中——对审计追踪至关重要。  
4. **Azure 部署定价记录为 $0**（Issue #41605）：Azure AI Foundry 间歇性出现零成本日志，可能导致预算超支。  
5. **`/v1/models` 绕过团队模型限制**（Issue #41595）：用户可发现无法调用的模型——存在安全与运维风险。  

*部分问题已有修复 PR*：  
- PR #41707：删除时清除 JWT 密钥映射缓存（解决旧认证状态残留问题）。  
- PR #41710：对 JWT 用户尊重团队/用户 MCP 工具搜索设置。  
- PR #41715：添加标准化错误集群键，提升可观测性。

---

### **6. 对应用开发者的启示**  
在生产环境中使用 LiteLLM 的开发者应：  
- **验证流式与透传端点的成本追踪**——尤其是使用 Azure、Bedrock 或 Cursor 集成时，因已知的使用日志缺失（Issues #36168, #41605）。  
- **避免依赖 `GET /v1/models` 进行访问控制**；应在客户端实现过滤，因为团队级别的 `allowed_models` 并不在发现阶段强制执行（Issue #41595）。  
- **重命名模型时谨慎更新配置**——确保 `model allowlists` 自动同步（PR #41694 已解决此问题）。  
- **密切监控基于 JWT 的认证流程**；除非显式清除，否则删除后旧映射可能仍残留（PR #41707）。  
- **考虑升级至最新代理版本**，以获得 OAuth、MCP 及错误报告方面的近期修复（如 PR #41715, #41709）。  

👉 *立即行动建议*：若您使用标准计划并启用了 SSO，且预期用户超过 5 人，请审查 [Issue #25762](https://github.com/BerriAI/litellm/issues/25762)。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth 简报 – 2026-09-18**

---

### **1. 今日亮点**  
Unsloth 发布 **v0.1.810-beta**，新增完整 **多用户支持**、**AMD RDNA1+2 GPU 兼容性**，以及新 Docker 镜像中扩展的 **FP8/INT8 扩散支持**。此次更新还引入了 Windows 上的 ARM64 CUDA（实验性），显著提升了推理与训练工作流在跨平台环境中的可用性。

---

### **2. 发布与破坏性变更**  
- **v0.1.810-beta** ([发布说明](https://github.com/unslothai/unsloth/releases/tag/v0.1.810-beta)) 包含：  
  - 多用户账户与增强的容器隔离  
  - 通过更新的 `unsloth/unsloth-rocm` 镜像实现对 AMD ROCm（RDNA1+，FP8/INT8）的完整支持  
  - Windows 上的 ARM64 CUDA 支持（实验性）  
  - 更新的 Docker Hub 镜像，集成最新的 llama.cpp 与运行时组件  

> ⚠️ **迁移提示**：依赖旧版 Docker 镜像的用户应立即升级——多个问题（如 #6180、#9583）源于过期构建。

---

### **3. 新模型与硬件支持**  
- **AMD GPU**：通过 ROCm 后端实现对 RDNA1+2 的完整支持（包括 RTX 5060Ti、5080、5090）  
- **量化格式**：FP8、INT8、MXFP4 以及 Q4_K_M（通过 GGUF）现已支持训练与推理全流程  
- **新模型**：  
  - 已测试 Qwen3.8-Flash-Next（UD-IQ4_XS）与 MTP 及草稿注意力机制  
  - GPT-OSS-120B-K4-KM 现已在 Studio 中支持（尽管 #10252 报告输出格式不匹配）  
- **模型来源**：已提出 ModelScope 集成请求（#2969、#9117），但尚未实现

---

### **4. 性能与优化**  
- **LoRA SFT 加速**：  
  - 在 B200（1 GPU）上，Qwen3.5-9B LoRA SFT 每步耗时从 0.83 秒降至 0.66 秒（[#10744](https://github.com/unslothai/unsloth/pull/10744)）  
  - 进一步通过模型无关的 CPU 开销降低优化至每步 0.77 秒（[#11238](https://github.com/unslothai/unsloth/pull/11238)）  
- **CPU 内核启动减少**：通过 Python 层优化，每步减少约 20,000 次内核启动  
- **Studio 启动速度**：macOS 更新延迟降低，避免冗余二进制重探测（[#11237](https://github.com/unslothai/unsloth/pull/11237)）

---

### **5. 稳定性与回归问题**  
| 问题 | 严重性 | 状态 | 修复合并请求？ |  
|------|----------|--------|--------|  
| `LLVM ERROR: Unsupported rounding mode for conversion`（f16→f16）[#2491](https://github.com/unslothai/unsloth/issues/2491) | 严重 | 已关闭 | ✅ [PR #11222](https://github.com/unslothai/unsloth/pull/11222) |  
| MTP 加载时崩溃：`nextn.hc_head_norm still [hc_dim] after rebase` [#11143](https://github.com/unslothai/unsloth/issues/11143) | 高 | 开放 | ❌ |  
| Qwen3.5-2B QLoRA 工作进程在首次聊天生成后崩溃 [#7843](https://github.com/unslothai/unsloth/issues/7843) | 高 | 已关闭 | ✅（已在 v0.1.810-beta 中修复） |  
| Studio 在 `0.0.0.0` 绑定时无法启动 [#11187](https://github.com/unslothai/unsloth/issues/11187) | 中等 | 开放 | ❌ |  
| 图构建期间出现 GGML_ASSERT 错误（RTX 5080）[#11219](https://github.com/unslothai/unsloth/issues/11219) | 高 | 开放 | ❌ |  

> 🔥 **重要提示**：多个稳定性问题涉及 `llama.cpp` 运行时损坏或 AV 隔离——详见 [#10494](https://github.com/unslothai/unsloth/pull/10494) 的修复逻辑。

---

### **6. 对应用开发者的意义**  
- **多用户环境**现已成为可行方案——请使用新版 Docker 镜像（`unsloth/unsloth:latest`）以实现安全、隔离的推理/训练任务。  
- **AMD 用户**现在可通过 ROCm 完成全栈工作流（训练 + 推理），包括本地 Studio UI 访问（即将推出 PR #11218）。  
- **性能敏感型应用**应采用 `unsloth-cli.py` 并配合近期补丁以减少 CPU 开销——预计在 B200 上可实现约 20% 的 SFT 步骤加速。  
- **视觉模型**需谨慎处理多模态参数（参见 #11031）；确保 `image_position_ids`、`spatial_shapes` 与 `num_tiles` 通过 GRPO 流水线传递。  
- **避免使用过期的 Docker 镜像**——许多缺陷源自过时的 `llama.cpp` 或 `unsloth_zoo` 版本；始终拉取最新版 `unsloth/unsloth` 或 `unsloth/unsloth-rocm`。

> 📌 **实用技巧**：使用 `unsloth run --model qwen3.8-flash-next` 并搭配 `--quantize mxfp4`，可在高上下文模型（如 GPT-OSS-120B）上获得最佳性能。

---  
*数据来源：[unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*