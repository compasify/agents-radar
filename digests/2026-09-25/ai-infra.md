# AI 基础设施日报 2026-09-25

> 生成时间: 2026-09-25 00:45 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-09-25**

---

### **1. 生态概览**  
2026年第三季度，AI基础设施格局呈现出明显的两极分化：高性能分布式推理引擎与轻量级本地优先运行时各司其职，分别面向不同的部署范式。vLLM 和 SGLang 在多GPU可扩展服务领域处于领先地位，支持先进的并行技术（DCP、MTP、推测性解码）；而 llama.cpp 与 Ollama 则在边缘/本地推理场景中占据主导地位，具备强大的硬件抽象能力和跨平台可移植性。LiteLLM 作为企业级网关层的默认选择，统一了成本控制、可观测性与后端路由。与此同时，Unsloth 在视觉-语言及混合模型优化方面崭露头角，尤其在 AMD 和 NPU 平台上表现突出。

---

### **2. 活跃度对比**

| 项目       | 开放问题数 (↑) | 合并的PR数 (↑) | 新版本发布？ | 关键状态 |
|---------------|------------------|----------------|--------------|------------|
| **vLLM**      | 487 (+12)        | 32 (+8)        | ❌ 否        | 高度关注稳定性；关键修复已合并 |
| **SGLang**    | 523 (+15)        | 28 (+7)        | ❌ 否        | DCP/并行化开发活跃 |
| **llama.cpp** | 519 (+18)        | 25 (+6)        | ✅ `b11173`   | Bug修复 + Metal/CUDA优化 |
| **Ollama**    | 621 (+22)        | 19 (+5)        | ❌ 否        | 稳定性退化问题为主 |
| **LiteLLM**   | 378 (+9)         | 21 (+4)        | ❌ 否        | 可观测性与策略执行为重点 |

> *注：Ollama 问题数量最高，源于日益复杂的 MLX 后端和用户侧Bug增多。*

---

### **3. 模型支持竞赛**

| 项目       | 新增支持模型/架构 | 核心差异点 |
|---------------|--------------------------------------|--------------------|
| **vLLM**      | Kimi-K3, Qwen3.8-Flash-Next, GLM-5.3-Flash, Phi4Flash（请求中） | 针对 MI355X 的深度 ROCm 调优；密集层支持 CPU 回退 |
| **SGLang**    | Qwen3.5-397B（FlyDSL GDN）、Qwen-Image-2.1（扩散模型 TP=2）、混合 Quark MTP | 混合 Mamba/GDN 基数缓存集成；草稿布局验证 |
| **llama.cpp** | Ternary-Bonsai-2（量化类型请求）、Intel Vulkan FA 内核、Hexagon NPU CI | Metal 稀疏 FA、AVX-512 VNNI+VBMI 加速 |
| **Ollama**    | IBM Granite 4.1/4.2（MLX）、Gemma-4-26B-A4B-it-qat-4bit（MoE）、AMD gfx1200+ 支持 | MLX MoE 功能启用；扩大 ROCm GPU 列表 |
| **Unsloth**   | Qwen-Image-2.1（图像生成）、Ryzen AI NPU（Lemonade）、NVFP4 FlashInfer | 图像生成性能优化；支持 RDNA1 训练 |

> 🏆 **胜出者**：**vLLM** 在前沿模型支持方面领先，具备专用硬件优化与前瞻性架构设计（如 Mamba2 前缀缓存）。

---

### **4. 性能前沿**

| 关注领域             | 领先项目                          | 关键进展 |
|------------------------|-------------------------------------------|------------------|
| **KV缓存效率** | vLLM、SGLang、llama.cpp                   | vLLM：ROCm 下减少69次冗余拷贝；SGLang：统一基数缓存；llama.cpp：清理过期K/V |
| **批处理与批处理不变性** | vLLM、SGLang                     | vLLM：batch-invariant matmul调优（sm_120）；SGLang：decode graph 宽度修复 |
| **量化与混合精度** | vLLM、Ollama、Unsloth           | vLLM：FP8块缩放权重（回归）；Ollama：NVFP4工具调用泄漏；Unsloth：NVFP4 flashinfer |
| **分布式服务** | vLLM、SGLang                              | vLLM：流水线并行 + MTP；SGLang：DCP/Helix 默认启用 `fi_a2a` |
| **内核级优化** | vLLM、llama.cpp、Unsloth          | vLLM：sm_120 matmul 表；llama.cpp：Metal共享内存FA；Unsloth：VAE编译缓存 |

> 🔥 **最活跃前沿**：**vLLM** 在内核级、批处理与分布式优化方面全面主导——尤其针对下一代GPU（RTX 50系列、MI355X）。

---

### **5. 层级定位**

| 项目       | 主要层级              | 在栈中的角色 |
|---------------|----------------------------|---------------|
| **vLLM**      | **服务引擎**         | 高吞吐、低延迟推理；专为云规模部署优化 |
| **SGLang**    | **服务引擎 + 网关** | 高级并行（DCP、Helix）；与LLM网关集成良好 |
| **llama.cpp** | **本地运行时**          | 单设备、可移植推理；适用于边缘、移动端或开发环境 |
| **Ollama**    | **本地运行时 + 网关** | 统一CLI/工具链；连接本地执行与代理流程 |
| **LiteLLM**   | **LLM网关 / 编排层** | 企业级路由、标签、成本控制与可观测性 |

> ⚖️ **定位洞察**：  
> - **vLLM/SGLang**：云原生推理引擎  
> - **llama.cpp/Ollama**：本地优先运行时生态  
> - **LiteLLM**：生产级AI服务的集中编排层  

---

### **6. 趋势信号**

#### **新兴行业趋势（基于2026-09-25活跃度）：**
1. **AMD ROCm势头强劲**：所有项目均积极投入ROCm支持——尤其vLLM（MI355X）、SGLang（Qwen3.5-397B）、Ollama（gfx1200+）和Unsloth（RDNA1/2）。这预示着向开放硬件生态的转变。
2. **混合模型复杂度上升**：Mamba/GDN 与 MoE 模型引入新的稳定性挑战（如前缀缓存损坏、状态同步问题），亟需底层引擎级修复。
3. **推测性解码趋于成熟**：现已成为vLLM与SGLang的核心功能，但在并发场景下存在严重风险（H20崩溃、无声偏差）。
4. **视觉-语言工作流需求优化**：Unsloth聚焦图像生成（VAE缓存、FlashInfer）以及Ollama拓展网页搜索功能，凸显多模态代理的兴起。
5. **成本与治理成为核心关切**：LiteLLM的细粒度预算控制、支出日志记录与基于标签的速率限制，反映出企业级就绪状态——对合规性（欧盟《人工智能法案》）至关重要。

#### **应用开发者应重点关注：**
- ✅ **在 vLLM/llama.cpp 修复 #25618、#55506 之前，避免在量化模型上使用推测性解码**。
- ✅ **监控 Ollama 中的 MLX 内存泄漏与卡顿问题**——对长时间运行的代理至关重要。
- ✅ **仅当张量并行与调优后的 matmul 形状匹配时，才启用 `VLLM_BATCH_INVARIANT=1`**（PR #58495）。
- ✅ **在 llama.cpp 中启用 `GGML_CUDA_FA_ALL_QUANTS=ON`** 以防止静默回退至CPU。
- ✅ **利用 LiteLLM 新增的支出分析与标签强制功能**，实现生产环境的成本治理。

> 📌 **结论**：该生态正快速成熟——工程师必须优先考虑**稳定性而非新颖性**，尤其是在部署混合模型、推测性解码或大上下文工作流时。未来属于集成度高的系统，其中推理引擎、网关与运行时工具在正确性、效率与可观测性上达成一致。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-09-25**

---

### **1. 今日亮点**  
vLLM 项目正在推进下一代模型与硬件的关键优化，批处理无关推理性能（PR #58495）以及针对 Kimi-K3 和 Qwen3.8 的 ROCm 特定内核调优取得显著进展（PRs #58507, #58045）。关键正确性修复已合并：Mamba2 前缀缓存（PR #55506）及高并发场景下推测解码的稳定性问题（PR #55506），解决了 Qwen3.8-Flash-Next 等混合模型中长期存在的退化问题。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未报告新发布或破坏性 API/配置变更。无新增版本或重大变更。

---

### **3. 新模型与硬件支持**  
- **ROCm 支持**：扩展对 AMD MI355X（gfx950）的支持，针对 `Qwen3.8-2.4T-A95B-Quark-MXFP4` 的性能优化正在进行中（Issue #57149）。  
- **Kimi-K3**：为低并发推测解码提供专用 ROCm 优化（PR #58045）；密集层现已完整启用 CPU 支持（PR #58507）。  
- **GLM-5.3-Flash**：性能优化跟踪已启动（Issue #57406），继此前对 GLM-5.2 的工作之后。  
- **新模型**：已申请支持 `Phi4Flash`（Issue #23957）、`MiniMax-M2.1-NVFP4`（Issue #31856）和 `DeepSeek-V4.1-Flash`（Issue #56389）。

---

### **4. 性能与优化**  
- **批处理无关矩阵乘法调优**：PR #58495 向 sm_120 矩阵乘法表中添加了每 rank TP=2/4/8 的形状配置，可更好利用 RTX 50 系列显卡（如 RTX PRO 6000、RTX 5090）。  
- **Mamba2 预填充优化**：PR #49371 移除了 SSM 状态保存过程中的 GPU<->CPU 同步操作，降低了预填充阶段的开销。  
- **ROCm 效率提升**：  
  - PR #58566 在瘦型 GEMM 路径中减少 **每次解码步骤 69 次无效连续拷贝**。  
  - PR #51314 跳过稀疏预填充中的冗余 FP32 logits 填充，提升吞吐量。  
- **MoE 可扩展性**：PR #58635 实现模块路径上的延迟 MoE 最终化，支持灵活的专家融合工作流。

---

### **5. 稳定性与回归问题**  
- **严重退化缺陷（高危）**：  
  - Issue #55506 报告在流水线并行 + MTP + 前缀缓存组合下，**约 14–33% 的请求陷入恒定标记循环**（`ductductduct…`）；已在 PR #55506（已合并）中修复。  
- **推测解码崩溃**：  
  - Issue #56389：在 H20 上高并发场景下，`dsv4_topk` Triton 内核出现非法内存访问；通过设置 `max_num_seqs=256` 临时缓解，尚未有正式修复。  
- **KV 缓存损坏**：  
  - Issue #53912：在 v0.28.0 版本中，前缀缓存 + MTP 导致混合 Mamba/GDN 模型输出损坏；尽管已关闭重复项（#43559），但问题仍未解决。  
- **量化问题**：  
  - Issue #51884：sm120（RTX 5090）上 FP8 块缩放权重因“未知 SF 变换”失败——为 DeepGEMM 中引入的回归。

---

### **6. 对应用开发者的启示**  
- **高并发部署场景**：使用 `DeepSeek-V4.1-Flash` 于 H20 时，应避免 `max_num_seqs > 256`，直至 #56389 解决；在 MTP 下监控基于 Mamba 模型的令牌退化现象。  
- **ROCm 用户**：可在 MI355X（gfx950）上期待 Kimi-K3 与 Qwen3.8 的性能提升；通过 PR #58507 利用 CPU 回退机制支持 GLM-5.3 密集层。  
- **生产级服务部署**：在 TP>1 场景下谨慎使用 `VLLM_BATCH_INVARIANT=1` —— 确保模型张量并行配置与已调优的矩阵乘法表匹配（PR #58495）。  
- **工具调用者与结构化输出**：请关注 PR #57571 与 #56851，以实现稳定流式重渲染与解析器状态持久化——这对智能体可靠性至关重要。

> 🔗 [查看 GitHub 问题](https://github.com/vllm-project/vllm/issues) | 🔗 [查看拉取请求](https://github.com/vllm-project/vllm/pulls)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 消息简报 – 2026-09-25**

---

### **1. 今日重点**  
SGLang 项目持续推进多 GPU 与混合模型服务能力，关键进展包括 **解码上下文并行（DCP）** 和 **Helix 并行**，现已默认使用 `fi_a2a`/`a2a` 作为通信后端。针对 **UnifiedRadixCache 中 Mamba/GDN 状态处理** 以及 **DFLASH 草稿布局验证** 的关键性能与正确性修复已合并，同时新工作如 **增量式聊天提示处理** 与 **可配置请求日志保留策略** 正在推进，旨在提升长时运行服务的效率。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未发布新版本。*  
但重大变更正在进行中：  
- 通过 #39165 和 #37767，`--dcp-comm-backend` 默认值已更新为 `fi_a2a` / `a2a` —— 依赖旧通信后端的用户应验证兼容性。  
- 批量集合评分中，因果语言模型（CausalLM）现支持新的 `--enable-mis` 标志（PR #41188），扩展了 Score API 的生成能力。

---

### **3. 新模型与硬件支持**  
- **AMD ROCm**：为 Qwen3.5-397B 添加 FlyDSL GDN 预填充后端支持（#39595），显著提升 gfx95 GPU 上的性能。  
- **混合模型**：通过 PR #41165 扩展对基于 Mamba 模型的支持，集成 radix-cache，并包含基于谓词的模型注册机制。  
- **扩散模型服务**：Qwen-Image-2.1 现支持 TP=2，但已知的数据损坏问题仍未解决（Issue #41192）。  
- **量化**：混合 Quark Qwen3.5 MTP 检查点现在可在推测解码过程中正确保留量化信息（#39064）。

---

### **4. 性能与优化**  
- **DeepSeek-V4.1**：解码图宽度被固定为 `--context-length`，造成不必要的开销；提议通过添加独立的 `decode-phase max_seq_len` 来修复（#40441）。  
- **Triton 后端**：填充的解码 CUDA 图槽位在长上下文下延迟持续增加（30K tokens → 27.7ms → 35.9ms/token）（#41151）。  
- **内存效率**：PR #41191–#41193 在 DeepSeek 模型上实现延迟执行的 FFN all-reduce 优化，减少冗余计算与内存压力。  
- **预填充吞吐量**：用户报告在 DeepSeek-V4（4× RTX PRO 6000, SM120）上达到约 2–7K tok/s，低于 vLLM 的 ~12.5K —— 已请求调优建议（#33422）。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 影响 | 修复状态 |
|--------|------|--------|-----------|
| 高 | **DFLASH 草稿布局假设错误**（`anchor-first` 静默偏移） | 静默输出错误结果 | PR 待审 (#40144) |
| 高 | **Mooncake DFlash 草稿 KV 传输在非对称 P/D TP 下失败** | 服务崩溃或输出损坏 | PR 待审 (#41192) |
| 中 | **Gemma 2/3 在 ROCm 上批量生成失控**（统一注意力启用时） | 无限循环或崩溃 | PR 待审 (#41152) |
| 中 | **Qwen3.8 聊天模板因拼接前轮思考内容损坏** | 输出格式错误，可见 `</think>` 标签 | PR 待审 (#40959) |
| 低 | **请求日志文件无限累积** | 存储耗尽风险 | 功能提案 (#41129) |

> 🔍 *注意：多个高严重性问题源于混合模型路径假设及不同 TP 配置下的状态管理不一致。*

---

### **6. 对应用开发者的意义**  
- **使用 `--dcp-comm-backend fi_a2a`** 以在现代硬件上获得最佳 DCP/Helix 性能。  
- **在 #41192 修复前避免对 Qwen-Image-2.1 等扩散模型使用 `--tp-size 2`** —— 当前请使用单卡模式。  
- **启用增量式聊天提示处理**（#41148）以降低多轮智能体中的分词开销。  
- **若运行长期服务，请监控日志文件保留策略** —— 可考虑通过 #41129 实现自定义轮转。  
- **使用 DFLASH 且非标准检查点格式时，务必验证草稿布局** —— 不应假设 `anchor-first` 始终成立。  

👉 *为保证生产稳定性，未经验证补丁 #39064 已激活前，避免混合精度 MTP + Quark 检查点。*

---  
*简报由 [sgl-project/sglang](https://github.com/sgl-project/sglang) 生成 —— 数据截至 2026-09-25。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

### **llama.cpp 摘要 — 2026-09-25**

#### **1. 今日亮点**  
最新一轮更新聚焦于 **Metal 后端的稳定性与优化**，修复了图捕获及稀疏 Flash Attention（FA）性能的关键问题。值得注意的是，`ggml` 已升级至 v0.25.3，解决了 UBSAN 错误，并同步了各依赖项的版本。一项重大 PR 引入了针对 CUDA 的 **MoE/SSM 融合优化**，修复了此前变更带来的约 4% 预填充性能下降。

#### **2. 发布与破坏性变更**  
- **`ggml` v0.25.2 → v0.25.3** ([#29396](https://github.com/ggml-org/llama.cpp/pull/29396)):  
  - 修复 `ggml_graph_nbytes` 中的 UBSAN 错误。  
  - 同步各仓库版本；无破坏性 API 变更。  
- **新构建标签**：`b11173`（最新夜间版）。除已修复的 bug 外，无已知迁移影响。

#### **3. 新模型与硬件支持**  
- **Hexagon NPU**：为 Hexagon 后端新增 Windows Arm64 CI 流水线 ([#29052](https://github.com/ggml-org/llama.cpp/pull/29052))。  
- **Intel Vulkan FA 内核**：为 Intel 平台添加实验性预填充内核 ([#29357](https://github.com/ggml-org/llama.cpp/pull/29357))。  
- **Ternary-Bonsai-2**：功能请求以支持新型量化类型 `PQ2_0`（类型 142）和 `PTQ1_0`（类型 143）([#29058](https://github.com/ggml-org/llama.cpp/issues/29058))。

#### **4. 性能与优化**  
- **Metal**:  
  - 稀疏 FA 现在将索引缓存至共享内存 → 显著降低延迟 ([#29377](https://github.com/ggml-org/llama.cpp/pull/29377))。  
  - 优化共享内存大小计算并减少冗余状态重置。  
- **CUDA**:  
  - 将 `RMS_NORM + SCALE` 融合为单个内核 → 修复约 4% 的预填充性能下降 ([#29393](https://github.com/ggml-org/llama.cpp/pull/29393))。  
  - 通过 OpenCL 为 Adreno 添加优化的 Q5_K GEMM 二进制内核 ([#29401](https://github.com/ggml-org/llama.cpp/pull/29401))。  
- **CPU**:  
  - 为支持 AVX-512 VNNI+VBMI 的 CPU 提供使用 `vpdpbusd` 的 Q4_K 重打包 GEMM 路径 → 在兼容处理器上提升吞吐量 ([#29397](https://github.com/ggml-org/llama.cpp/pull/29397))。  
  - 对 k-量化使用分块 `mul_mat` 与 VNNI → 在受支持硬件上最高提速 **7 倍** ([#27851](https://github.com/ggml-org/llama.cpp/pull/27851))。

#### **5. 稳定性与回归问题**  
- **严重级（Critical）**:  
  - **在贪婪采样下，量化目标 `Q4_K_M` 上的推测解码结果出现偏差**：输出与普通运行不一致 ([#25618](https://github.com/ggml-org/llama.cpp/issues/25618)，26 条评论)。*暂无修复方案*。  
  - **Qwen3.8-27B 在 >80K 上下文时解码崩溃**：尽管提示处理极快，但吞吐量下降约 25 倍 ([#27623](https://github.com/ggml-org/llama.cpp/issues/27623)，17 条评论)。  
- **高严重级（High Severity）**:  
  - **当未启用 `GGML_CUDA_FA_ALL_QUANTS=ON` 时，4 位 KV 缓存会静默回退至 CPU** → 无警告情况下性能下降约 30 倍 ([#28633](https://github.com/ggml-org/llama.cpp/issues/28633))。  
  - **Vulkan FA：旧的 K/V 缓存单元影响输出**，因清理不当所致 ([#26744](https://github.com/ggml-org/llama.cpp/issues/26744)，4 条评论)。  
- **中等严重级（Moderate）**:  
  - **Metal 解码在长上下文下对 Qwen4exp 模型输出 EOS 仅 1 个 token 后** ([#28805](https://github.com/ggml-org/llama.cpp/issues/28805)，4 条评论)。  
  - **AMD ROCm：即使在小模型上多 GPU 运行也会导致段错误** ([#17583](https://github.com/ggml-org/llama.cpp/issues/17583)，16 条评论)。

#### **6. 对应用开发者的启示**  
- **若使用 4 位 KV 缓存，请优先启用 `GGML_CUDA_FA_ALL_QUANTS=ON`**——否则将遭遇静默的 CPU 回退，导致严重性能下降 ([#28633](https://github.com/ggml-org/llama.cpp/issues/28633))。  
- **在 [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) 修复前，避免在量化模型上使用推测解码**——结果可能与非推测运行不一致。  
- **对于高上下文推理（>80K）**：请避开 Qwen3.8-27B，或持续关注当前回归问题 ([#27623](https://github.com/ggml-org/llama.cpp/issues/27623))；建议考虑模型卸载策略。  
- **优化 Metal 部署**：近期稀疏 FA 与图捕获修复显著提升了稳定性和效率——尤其适用于 DeepSeek-V4-Flash-Vision-Exp 等视觉语言模型。  
- **面向未来**：持续关注新量化类型（如 PQ2_0/PTQ1_0）及新 GPU 后端（Hexagon、Intel Vulkan）的支持进展，待其成熟后集成。

---  
*摘要源自 GitHub 活动（2026-09-25）。来源：[ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-25**

---

### **1. 今日亮点**  
Ollama 生态系统持续成熟，MLX 后端的稳定性与跨平台兼容性（尤其在 macOS 和 Windows 上）得到重点优化。关键回归问题包括内存估算错误（gemma4:31b）和工具调用解析失败（gemma4:31b, qwen3.8），同时在 MLX 下持续负载处理方面出现新问题。一项新 PR 通过 `GraniteForCausalLM` 在 MLX 运行器中新增对 IBM Granite 4.1/4.2 模型的支持，进一步扩展了模型覆盖范围。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告任何内容。*  
无新版本发布或破坏性 API/配置变更。但目前正在进行的工作包括弃用 `typical_p`（PR #18627），其行为将从强制报错转为仅警告。

---

### **3. 新模型与硬件支持**  
- ✅ **GraniteForCausalLM**：通过 PR #17972 新增对 IBM Granite 4.1 及 4.2 系列的实验性支持。这些模型现已可在 MLX 后端使用。  
- ✅ **MLX MoE 支持**：PR #18631 修复了 `mlx-lm` 格式中专家权重布局问题，使 `mlx-community/gemma-4-26B-A4B-it-qat-4bit` 模型可成功加载。  
- ✅ **AMD GPU 扩展**：PR #18623 更新了 Windows ROCm GPU 支持列表，新增对 `gfx1200`、`gfx1201` 及其他更新的 RDNA3 显卡的支持，超出原有 RX 7000 系列范围。  
- 📌 **请求集成 System 1 模型**：议题 #18594 呼吁集成 Kev 与 Laya 模型——社区关注度上升，但尚未实现。

---

### **4. 性能与优化**  
- ⚠️ **内存估算回归**：议题 #17099 报告，在 v0.31.2 之后，`gemma4:31b` 的生成速度下降 7 倍（33.8 → 4.7 tok/s），因显存估算被严重高估。此问题影响高内存 Mac 上的大上下文工作流。  
- 🔥 **MLX 内存泄漏**：议题 #18620 记录 `qwen3.6:27b-mlx` 每次工具调用存在约 0.43 GiB 的内存泄漏，随时间累积并超过前缀缓存预算。  
- 🧩 **高负载下预填充阶段卡死**：议题 #18505 显示，在持续单槽负载下（`OLLAMA_NUM_PARALLEL=1`），MLX `nvfp4` 模型在预填充阶段会无限期卡死，仅可通过发送 SIGTERM 恢复。  
- 📈 **网页搜索限制提升**：PR #18602 将单次响应最大网页搜索次数从 3 提升至 10，支持更丰富的代理推理能力（现也适用于 Anthropic 模型）。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 摘要 | 修复状态 |
|--------|------|--------|-----------|
| 高 | #18368 | 长文档处理时，macOS GUI 在 60 秒后无声失败（M4 Pro，gemma4/qwen3.8） | 开放 – 尚无修复 |
| 高 | #17099 | `gemma4:31b` 内存估算膨胀导致 v0.31.2 后生成速度下降 7 倍 | 开放 – 已确认为回归 |
| 高 | #18505 | MLX `nvfp4` 在持续负载下预填充阶段无限卡死 | 开放 – 关键性能阻塞 |
| 中 | #18620 | MLX 运行器每工具调用泄漏约 0.43 GiB（qwen3.6:27b-mlx） | 开放 – 内存压力持续累积 |
| 中 | #18632 | `qwen3.8:think:"high"` 被忽略；仅 `"medium"` 或 `"xhigh"` 正常生效 | 开放 – 文档不一致 |
| 低 | #18390 | 包含空格的工具调用键导致 Gemma 4 返回空响应 | 开放 – 解析器问题 |
| 低 | #18628 | macOS 即便应用已在 `/Applications` 子文件夹中仍提示移动 | 开放 – UX 问题 |

> 🔗 [议题 #17099](https://github.com/ollama/ollama/issues/17099) – *内存估算中的严重回归，影响模型吞吐量*

---

### **6. 对应用开发者的启示**  
- **若使用 `gemma4:31b`，请避免 v0.31.2+ 版本** — 回退至 0.31.1，直到 #17099 修复；否则将遭遇严重延迟。  
- **谨慎使用 `OLLAMA_NUM_PARALLEL=1`** — 由于未处理的卡死问题（#18505），避免在 MLX `nvfp4` 模型上施加持续单槽负载。  
- **包含空格的工具调用键会静默失败** — 使用 Gemma 4 模型时，请仔细验证输入 JSON 结构。  
- **长期运行的代理需注意内存增长** — 每次工具调用在 MLX 中可能消耗额外内存；生产环境务必监控资源使用情况。  
- **充分利用新的搜索上限** — 在代理流水线中将 `max_searches_per_response` 提升至 10，以获取更深层的上下文信息。  
- **留意 macOS UI 异常** — 应用重定位提示及更新同步问题（#18628, #18622）虽安装路径正确，仍可能误导用户。

> ✅ **可操作建议**：仅对 `qwen3.8:27b` 使用 `think="xhigh"` — `high` 不受支持，将默认降为 `medium`。可通过 `/api/show` 接口验证行为。

---  
*数据来源：[github.com/ollama/ollama](https://github.com/ollama/ollama)*  
*摘要生成时间：2026-09-25*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 消息简报 – 2026-09-25**

---

### **1. 今日亮点**  
LiteLLM 生态系统持续强化企业级可观测性与成本控制能力，关键 PR 引入了细粒度预算告警、针对 Anthropic OAuth 使用的增强支出日志，以及改进的标签/速率限制强制机制。关键修复解决了流式传输中元数据丢失问题（如 `service_tier`、`prompt_tokens_details`），并修复了缓存令牌和零成本模型的成本核算长期存在的问题。UI 还新增了对自动路由流量来源及模型支出的可见性。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新版本发布。*  
但通过若干 PR 引入了数项 **非破坏性但影响显著的配置变更**：  
- [`#43096`](https://github.com/BerriAI/litellm/pull/43096)：UI 现在可显示 **按目标的模型支出** 与 **流量来源细分**（直接请求 vs. 自动路由），提升成本透明度。  
- [`#41807`](https://github.com/BerriAI/litellm/pull/41807)：设置在标签对象上的 `tpm_limit` 与 `rpm_limit` 现已在请求时强制执行——此前被忽略。  
- [`#39221`](https://github.com/BerriAI/litellm/pull/39221)：新增配置 `maximum_daily_tag_spend_retention_period`，防止每日支出日志无限增长。

---

### **3. 新模型与硬件支持**  
- [`#42840`](https://github.com/BerriAI/litellm/pull/42840)：**Sail** 已作为完全支持的 OpenAI 兼容提供方加入，支持完成窗口层级定价。兼容聊天、流式响应、返回结果及 Anthropic Messages API。  
- [`#43097`](https://github.com/BerriAI/litellm/pull/43097)：在成本映射中新增 **Fireworks DeepSeek-V4P1-Flash（仅限美国）** 的行，支持美国区域部署的精准计费。  
- [`#43094`](https://github.com/BerriAI/litellm/pull/43094)：Azure AI **FLUX.2-flex 编辑参考图像** 现按 **每张图 1 MP** 计费，与实际 Azure 定价一致。

---

### **4. 性能与优化**  
- [`#43096`](https://github.com/BerriAI/litellm/pull/43096)：增强路由分析功能，帮助开发者基于真实支出与流量模式优化模型选择。  
- [`#42870`](https://github.com/BerriAI/litellm/pull/42870)：修复流式传输期间 `service_tier` 丢失问题——确保各数据块间正确保留定价层级，并记录在支出日志中。  
- [`#43091`](https://github.com/BerriAI/litellm/pull/43091)：同步 Gemini 最新版优先级/灵活/视频输入定价（来自官方 API 文档）——确保高阶模型成本估算准确。

> *注：今日未报告吞吐量或延迟的明显提升，但修正了准确性问题，长期来看通过减少重路由与错计费调用，提升了系统效率。*

---

### **5. 稳定性与回归问题**  
今日报告的关键稳定性问题包括：  
1. [`#26672`](https://github.com/BerriAI/litellm/issues/26672)：v1.82.3 版本中 **预算强制机制被绕过**，尽管支出已超过 `max_budget`。*修复待处理。*  
2. [`#39713`](https://github.com/BerriAI/litellm/issues/39713)：当虚拟密钥被缓存时，**按客户设置的 RPM 限制失效**——削弱速率限制保障。*修复 PR 正在审查中。*  
3. [`#43000`](https://github.com/BerriAI/litellm/issues/43000)：`encrypted_content_affinity` 无回退机制——若绑定部署失败，将导致对话永久中断。*已在 #43000 中解决。*  
4. [`#42757`](https://github.com/BerriAI/litellm/issues/42757)：`fetch_stream()` 内部失败会跳过冷却与降级逻辑——破坏 Vertex AI/Gemini 等懒加载流式服务的弹性。*PR 已开放。*  
5. [`#39088`](https://github.com/BerriAI/litellm/issues/39088)：Vercel AI Gateway 流式传输中丢失 `prompt_tokens_details` → 缓存令牌按完整输入费率计费。*修复 PR 待提交。*

---

### **6. 对应用开发者的启示**  
- **成本责任更精确**：随着流式传输中 `service_tier` 的保留，以及对 Sail、Fireworks、FLUX.2-flex 的成本映射覆盖完善，您可信任支出报告反映真实成本。  
- **避免隐性超额计费**：修复 `cached_tokens` 与 `prompt_caching_savings_spend` 报告问题（如 `#39088`、`#40006`）确保缓存节省被正确体现——对优化 LLM 代理流水线至关重要。  
- **强化安全与合规**：新引入的 `tag` 级速率限制（`#41807`）与审计追踪功能（`#29895`）有助于满足欧盟《人工智能法案》第 12 条要求。  
- **勿默认假设生效**：若在内部用户或零成本模型上使用 `max_budget`，请留意 `#29912` 中的漏洞——务必显式设置 `skip_budget_checks`。  
- **监控您的代理版本**：v1.82.3 存在已知预算强制缺陷——若正在使用，请立即升级或打补丁。

👉 *建议操作：审计成本日志以排查异常飙升；验证流式响应中 `service_tier` 与 `prompt_tokens_details` 是否被保留；考虑升级至最新稳定版。*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# **Unsloth Digest – 2026-09-25**

---

### **1. 今日亮点**  
Unsloth 生态系统持续加速推进对 **AMD ROCm 10 与 RDNA1/2 支持**，重点修复关键错误并优化功能，以提升 RX 5700 XT 及 gfx103X 系列显卡的稳定性。在 **图像生成性能** 方面取得重大进展，通过 NVFP4 内核优化、FlashInfer 集成以及 VAE 编译缓存技术，显著提升高吞吐扩散工作流的表现。一个全新的 **基准测试页面** 正在开发中，用于追踪配置扫描结果（包括推测解码、KV 缓存、内存卸载等）。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告任何内容。*  
无新版本发布，也无破坏性 API 变更。项目目前专注于为即将推出的 v1.8+ 功能进行稳定性优化。

---

### **3. 新模型与硬件支持**  
- ✅ **AMD ROCm 10 支持**：`ROCm 10` 实现正在积极开发中（问题 #9932），包含用于向后兼容的版本选择器。  
- ✅ **RDNA1 (gfx1010) 训练**：已在 Windows 上确认可运行非 Triton 模型；正追踪更广泛 Linux/WSL2 支持问题（问题 #11614）。  
- ✅ **Ryzen AI NPU (XDNA 2)**：通过 Lemonade + FastFlowLM 实验性支持聊天功能（PR #11743），可在 Strix Halo/Point 设备上实现本地推理。  
- ⚠️ **Qwen-Image-2.1**：多个问题暴露用户体验痛点：重复下载（约 19 GB）、FP8 模型删除阻塞、在 AMD 平台图像生成期间 VAE 解码卡死（问题 #11637, #11825, #11636）。  

> 🔗 [问题 #9932](https://github.com/unslothai/unsloth/issues/9932) | [PR #11743](https://github.com/unslothai/unsloth/pull/11743)

---

### **4. 性能与优化**  
- 🚀 **NVFP4 图像推理**：新增 flashinfer 后端（`mm_fp4`）与逐层策略系统（PRs #10730, #10731, #10889），目标是将 DiT 系列模型的 GPU 耗时降低最多达 30%。  
- 🧠 **VAE 编译缓存**：从时间预算阶段预编译 VAE 解码（PR #10889），显著降低每帧渲染延迟，尤其适用于大型模型。  
- 💾 **FlashAttention 轮子构建并行化**：将 `prebuilt-cuda-wheels.yml` 拆分为 ccache 任务（PR #11812），构建时间从 8 小时缩短至约 2 小时，大幅加快 CI/CD 流程。  
- 📊 **自动精度视频处理**：当 bf16 已足够时避免不必要的 INT8 量化（PR #11831），在不牺牲速度的前提下维持精度。  

> 🔗 [PR #10889](https://github.com/unslothai/unsloth/pull/10889) | [PR #11812](https://github.com/unslothai/unsloth/pull/11812)

---

### **5. 稳定性与回归问题**  
- 🔥 **AMD 集成显卡 / GFX103X 上严重崩溃**：在旧版 PyTorch + ROCm 7.13.0 环境下，`torch._grouped_mm` 访问违规导致 `import unsloth` 时崩溃（问题 #11814）。*修复待定。*  
- 🔥 **VAE 解码期间驱动重置**：在 AMD（gfx1030）上，`cudnn.benchmark` 触发 MIOpen 全面调优（耗时 10–23 分钟），引发超时与崩溃（问题 #11636）。  
- 🔥 **模型导出失败**：由于只读 HF 缓存权限导致 GGUF 导出失败（问题 #11785）；需手动重置缓存。  
- ⚠️ **UI 卡顿**：图像生成在“步骤 N/N”完成后停滞，表现为假死状态（问题 #11739）。  
- ⚠️ **安装脚本被隔离**：Bitdefender 阻止 `install.ps1`，导致出现误导性的 PowerShell 图标错误（问题 #11862）。  

> 🔗 [问题 #11814](https://github.com/unslothai/unsloth/issues/11814) | [问题 #11636](https://github.com/unslothai/unsloth/issues/11636)

---

### **6. 对应用开发者的意义**  
- **针对 AMD 用户**：若使用 gfx103X/gfx110X，避免 `torch 2.10.0+rocm7.13.0`；确保 `install.ps1` 未被隔离。使用 `--model` 路径时需谨慎，防止重复下载。  
- **针对 LLM 代理**：启用 `vLLM/SGLang` 支持（PR #11491），实现多 GPU、推测解码与视觉模型服务——非常适合可扩展代理场景。  
- **针对 RAG 系统**：暴露嵌入模型的 GPU 切换开关（问题 #11768）即将上线，支持从 CPU 到 GPU 的动态切换——对低延迟流水线至关重要。  
- **针对基准测试**：新基准测试页面（PR #11808, #11646）将支持程序化扫描配置项（KV 缓存、推测解码、内存卸载），是优化代理吞吐量的必备工具。  

> 🔗 [PR #11491](https://github.com/unslothai/unsloth/pull/11491) | [PR #11808](https://github.com/unslothai/unsloth/pull/11808)

---  
*摘要生成时间：2026-09-25 | 来源：[unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*