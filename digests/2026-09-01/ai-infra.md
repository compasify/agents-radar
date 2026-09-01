# AI 基础设施日报 2026-09-01

> 生成时间: 2026-09-01 01:23 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目 AI 基础设施生态报告 – 2026-09-01**

---

### **1. 生态概览**  
AI 推理与服务生态正进入 *深度专业化与跨层融合* 的阶段。各项目在定位上日益分化：vLLM 和 SGLang 在高性能分布式推理领域引领潮流，llama.cpp 在本地边缘计算及 Apple Silicon 优化方面占据主导，Ollama 提供开发者友好的模型访问入口，LiteLLM 作为通用代理层实现统一调度，Unsloth 则聚焦于训练、微调与安全代理执行的交汇点。一个清晰的趋势是向 **多架构支持（Intel XPU、AMD ROCm、Apple Metal）** 和 **结构化输出可靠性** 持续演进，背后驱动的是对生产级智能体系统的需求。

---

### **2. 活跃度对比**  

| 项目       | 当前开放议题数 | 合并/活跃的 PR 数 | 过去 24 小时发布数 |
|------------|----------------|-------------------|----------------------|
| **vLLM**   | 15             | 8                 | 无                   |
| **SGLang** | 13             | 7                 | 无                   |
| **llama.cpp** | 10          | 6                 | 无                   |
| **Ollama** | 10             | 5                 | 无                   |
| **LiteLLM** | 9            | 4                 | 无                   |
| **Unsloth** | 12           | 6                 | 无                   |

> 🔍 *观察*：所有项目均未在昨日发布新版本，表明当前重心在于稳定性保障与功能打磨，而非增量更新。vLLM 在活跃 PR 数量上领先，反映出其作为性能基准的核心地位。

---

### **3. 模型支持竞赛**  

| 新模型 / 架构                     | 支持情况                         | 备注 |
|----------------------------------|----------------------------------|------|
| **DeepSeek-V4-Pro (DSA/MLA)**    | ✅ vLLM（Intel XPU）、✅ SGLang     | 首个在多个框架中实现 Intel XPU 全面支持的大型模型 |
| **Qwen3.8-Flash-Next**           | ✅ vLLM、✅ SGLang、✅ llama.cpp   | vLLM 实现完整 MoE + 前缀缓存；SGLang 存在 QSA+NEXTN 解码损坏问题 |
| **GLM-5.3-Flash (GLM-5-Next)**   | ✅ SGLang、✅ llama.cpp           | SGLang 现已支持 GLM-5.3 视觉配置 |
| **DeepSeek-V4-Flash-Vision-Exp** | ✅ llama.cpp                      | 唯一支持完整视觉模型的项目 |
| **Wan2.2-TI2V-5B**               | ✅ Unsloth                        | 因 SDPA 回退导致高显存占用 |
| **Qwen3.8-Flash-Next-GGUF**      | ❌ Unsloth（受阻）、⚠️ 其他项目（部分支持） | llama.cpp 后端缺少 `qwen4exp` 支持 |

> 🏆 **领先者**：**vLLM** 与 **SGLang** 在前沿模型支持方面领先，尤其在 MoE 与混合架构场景表现突出。**llama.cpp** 在 GGUF 及具备视觉能力的模型可用性上占优，而 **Unsloth** 在较新的 GGUF 变体支持上相对滞后。

---

### **4. 性能前沿**  

| 优化方向                    | 主要项目                          | 关键进展 |
|-----------------------------|-----------------------------------|----------|
| **KV 缓存与推测解码**       | vLLM、SGLang                      | vLLM 中草稿同步与预填充重叠；SGLang 实现 HiSparse 稀疏注意力；vLLM 引入 suffix_gpu 草稿器 |
| **量化与后端融合**          | vLLM、llama.cpp                   | vLLM 实现 FlashInfer SM90 MXFP4 x FP8 融合 MoE；XOR swizzle flash attention（CUDA）；radix TOP_K（ROCm） |
| **批处理与内核效率**        | vLLM、llama.cpp                   | Split-row Triton 流水线（小批量）；AVX2 向量化 IQ 解码 |
| **分布式服务与可扩展性**    | SGLang                            | PD 分离统一化、HiCache L3 存储、权重缓存守护进程（启动时间 <1 秒） |
| **边缘与本地运行时**        | llama.cpp、Unsloth                 | Metal（M1 Ultra）、ROCm（gfx950）、MLX 上下文长度修复（Unsloth） |

> 🚀 **趋势**：前沿焦点正从原始吞吐量转向 **高效状态管理**——尤其是长上下文、低延迟的推测解码以及内存感知的 KV 缓存策略。

---

### **5. 层级定位**  

| 项目       | 层级定位                             | 核心差异化 |
|------------|--------------------------------------|------------|
| **vLLM**   | **高性能服务引擎**                   | 优化的内核调度、MTP、结构化输出 |
| **SGLang** | **分布式推理框架**                   | PD 分离、HiCache、多模型编排 |
| **llama.cpp** | **本地运行时 / 边缘推理**         | 跨平台后端（Metal、CUDA、ROCm）、GGUF 优先策略 |
| **Ollama** | **开发者网关 / 模型编排器**          | 统一 CLI/API、MLX/llama.cpp 集成、面向代理的友好体验 |
| **LiteLLM** | **通用代理与路由层**                | 多提供方路由、团队级可观测性、虚拟密钥 |
| **Unsloth** | **代理训练与安全执行工作室**        | 沙箱化工具执行、Ollama 集成、微调工作流 |

> 💡 **洞察**：整个技术栈正变得越来越分层——开发者不再仅关心 *运行什么*，更需决策 *在哪里运行*、*如何运行* 以及 *具备何种安全保证*。

---

### **6. 趋势信号**  

#### 🔹 **提取的关键行业趋势**：
1. **硬件多样化已成为主流**：Intel XPU、AMD ROCm（gfx1200/gfx1201）、Apple M1 Ultra 均拥有专属优化，表明不存在单一主导架构。
2. **结构化输出可靠性已成为关键瓶颈**：多个项目报告工具调用解析失败（vLLM、SGLang、Ollama），表明智能体工作流正遭遇接口层级的脆弱性。
3. **推测解码正迈向生产就绪**：内核重叠、GPU/CPU 卸载、异步调度（suffix_gpu）等特性表明该技术已非实验性质。
4. **安全加固成为必需项**：Unsloth 强制启用沙箱（bubblewrap/Seatbelt）反映了对代理中不安全工具执行的日益关注。
5. **可观测性正在向上迁移**：`prompt_eval_cached_count`、`request_timeout` 强制执行、团队级日志等指标正通过 API 暴露——这对成本控制与调试至关重要。

#### 📌 **应用开发者应重点关注事项**：
- **避免在 Windows/NVIDIA 平台使用 v0.33.0 Ollama**，存在 TDR 崩溃风险。
- **在并发环境下验证工具调用解析器**——预计 Qwen3/Gemma4 直到修复上线前仍不稳定。
- **预热引擎以实现确定性推理**（vLLM 新采样器预热机制会增加冷启动延迟）。
- **监控基于 MLX 的后端内存泄漏问题**（Ollama、Unsloth）。
- **为响应格式语义的潜在变更做好准备**（例如 `strict=false` 在 vLLM 中禁用引导式解码）。

> ✅ **最终观点**：基础设施正在快速成熟——但 **稳定性、正确性与可观测性** 已成为核心差异化因素。选择工具不应只看速度，更要考量其在真实代理负载下的韧性表现。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-09-01**

---

### **1. 今日亮点**  
vLLM 项目持续强化对多种模型的推测解码（MTP）和结构化输出解析的支持，修复了 Qwen3 与 Gemma4 工具调用的可靠性问题。关键进展包括在 Intel XPU 上启用 DeepSeek-V4-Pro，并推进带种子推理路径的多配置采样器预热机制——这对确定性代理工作流至关重要。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新版本发布。*  
然而，当前合并请求（PR）中的变动表明，以下行为可能产生破坏性变化：  
- **带种子采样**：PR [#54630](https://github.com/vllm-project/vllm/pull/54630) 引入了按路径的内核预热机制，可能影响带种子请求的冷启动延迟。  
- **结构化输出**：PR [#50544](https://github.com/vllm-project/vllm/pull/50544) 修改了 `response_format` 中 `strict=false` 的处理逻辑，与 OpenAI 语义对齐——依赖宽松模式校验的用户现在必须显式禁用引导式解码。

---

### **3. 新模型与硬件支持**  
- ✅ **Intel XPU 支持扩展**：  
  - PR [#54460](https://github.com/vllm-project/vllm/pull/54460) 实现了在 Intel Arc Pro B70（XPU）上部署 **DeepSeek-V4-Pro (DSA/MLA)**，支持 FP8 块缩放权重及 CPU 卸载。  
  - PR [#49303](https://github.com/vllm-project/vllm/pull/49303) 为 XPU 上的 MXFP8 量化模型新增 **序列并行（SP）** 支持。  
- ✅ **新量化后端**：  
  - PR [#54032](https://github.com/vllm-project/vllm/pull/54032) 引入全新 **FlashInfer SM90 MXFP4 x FP8 融合 MoE 后端**，专为 Blackwell GPU 高性能推理优化。  
- ✅ **Qwen3-Next (GDN) 混合模型**：  
  - PR [#50172](https://github.com/vllm-project/vllm/pull/50172) 在 V1 引擎上实现 `mamba_cache_mode="all"` 模型的完整 **前缀缓存 + MTP 推测解码** 支持。

---

### **4. 性能与优化**  
- 🚀 **推测解码重叠优化**：  
  - PR [#54656](https://github.com/vllm-project/vllm/pull/54656) 实现 **草稿续写 DP 同步与预填充阶段的重叠**，减少数据并行环境下的空闲时间。  
  - PR [#52097](https://github.com/vllm-project/vllm/pull/52097) 新增 **suffix_gpu 草稿生成器** 支持异步调度——显著提升重复性代理任务中 CPU/GPU 的重叠效率。  
- 🔧 **内核级优化**：  
  - PR [#49529](https://github.com/vllm-project/vllm/pull/49529) 采用 PTX 9.4 的 `ldmatrix.s8.s4` 指令用于 W4A8-INT8 路径，实现硬件加速的 INT4→INT8 符号扩展——预计在新型架构上提升吞吐量。  
  - PR [#54651](https://github.com/vllm-project/vllm/pull/54651) 引入 **分行 Triton 流水线** 用于小批量 top-p 掩码，优化低吞吐场景下的执行效率。

---

### **5. 稳定性与回归问题**  
⚠️ **严重崩溃与正确性缺陷报告**：  
- **[Bug #54521](https://github.com/vllm-project/vllm/issues/54521)**：`Qwen3.8-Flash-Next-FP8` 在提示词接近 `indexer_budget` 时，因 `persistent_topk` 导致非确定性贪婪解码。*修复待定。*  
- **[Bug #54225](https://github.com/vllm-project/vllm/issues/54225)**：在 sm_120 上使用 NVFP4 + FP8 KV 缓存时发生 CUDA 非法内存访问；16 token 请求会崩溃。TRITON_ATTN 未受影响。*高危，暂无修复。*  
- **[Bug #42426](https://github.com/vllm-project/vllm/issues/42426)**：Kimi-K2.6 间歇性仅输出 `"!!!!!!!!!!"`，内容为空。*影响广泛；正在排查修复。*  

📌 **工具调用解析稳定性问题**：  
- 多个问题暴露了解析逻辑不稳：  
  - PR [#53365](https://github.com/vllm-project/vllm/pull/53365) 恢复缺失的 `tool_call_parser_invocations_total` 指标。  
  - PRs 如 [#39056](https://github.com/vllm-project/vllm/issues/39056) 与 [#39392](https://github.com/vllm-project/vllm/issues/39392) 报告在 `<think>` 内部解析 XML 工具调用失败，以及并发请求导致的数据污染。

---

### **6. 对应用开发者的启示**  
- **谨慎使用带种子或确定性推理**：PR [#54630](https://github.com/vllm-project/vllm/pull/54630) 中引入的新采样器预热机制可能增加冷启动延迟——生产环境中部署代理前建议预先预热引擎。  
- **在高并发下验证工具调用解析器**：在诸如 [#54225](https://github.com/vllm-project/vllm/issues/54225) 等问题修复前，避免在高并发环境下使用 `gemma4` 与 `qwen3` 的工具调用解析器。  
- **利用新后端提升性能**：启用 `--moe-backend flashinfer_cutlass_humming`（PR [#54032](https://github.com/vllm-project/vllm/pull/54032)）和 `suffix_gpu` 草稿生成器（PR [#52097](https://github.com/vllm-project/vllm/pull/52097)），以在代理与批处理任务中获得更优吞吐。  
- **更新响应格式逻辑**：随着 PR [#50544](https://github.com/vllm-project/vllm/pull/50544)，`strict=false` 现在将禁用引导式解码——请确保应用能正确处理模式松弛。

> 🔗 *关注关键问题与合并请求：* [vLLM GitHub](https://github.com/vllm-project/vllm)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 消息简报 – 2026-09-01**

---

### **1. 今日重点**  
SGLang 项目持续加速推进**分布式推理可扩展性**，在**PD 分离统一化**、**HiCache L3 存储集成**以及**Qwen3.8-Flash-Next 和 GLM-5.3-Flash 的多模型支持**方面取得重大进展。针对 CUDA 核心转储、PD 分离下的推测解码以及 QSA+NEXTN 解码图中的静默输出损坏问题，已合并关键稳定性修复——凸显了对生产级智能体工作负载稳定性的持续投入。

---

### **2. 发布与破坏性变更**  
*无* — 过去 24 小时内未发布新版本。然而，多个高优先级的 PR 正在积极评审中，聚焦于运行时稳定性和兼容性（如 #37322、#37321）。

---

### **3. 新模型与硬件支持**  
- **Qwen3.8-Flash-Next**：现已完整支持 `nextn` 草稿处理和 `qsa` 解码路径；PR #37322 与 #37316 解决了量化和权重加载相关问题。  
- **GLM-5.3-Flash**：新增对可选视觉配置及 NextN 权重加载的支持（#37321），解决了初始化失败问题。  
- **MiniMax-M3**：通过融合归一化与 MoE all-reduce 折叠，增强 MXFP8/MXFP4 量化支持（#36575、#36574）。  
- **AMD ROCm**：针对 gfx950（MiMo-V2.5-Pro）进行性能优化，改进 rope_cache 内核分组策略（#37315）。  
- **Intel XPU**：#37193 包含每周启用更新，进一步扩展跨架构支持。

---

### **4. 性能与优化**  
- **权重缓存守护进程（第一阶段）**：在 Qwen3-235B FP8 上，引擎启动时间从约 327 秒降至 **<1 秒**（[博客](https://www.lmsys.org/blog/2026-08-21-sglang-weight-cache-daemon)）。  
- **HiSparse**：通过仅在 HBM 中保留热工作集，实现长上下文稀疏注意力，显著降低解码期间的 GPU 内存占用（#28874）。  
- **ROCm 优化**：融合 rope_cache + 缓存内核在 gfx950 上实现 **2.15–2.5 倍加速**，gpt-oss 形状下测得高达 813 GB/s。  
- **推测解码**：窗口化草稿解码注意力减少 MTP/EAGLE 草稿中的 KV 读取开销，在长前缀场景下提升效率（#32673）。

---

### **5. 稳定性与回归问题**  
**今日报告的关键问题**：  
- 🔴 **Qwen3.8-Flash-Next QSA+NEXTN 解码图损坏**（`#37111`）：在 GB10 TP2 上观察到静默语义损坏；暂无修复方案。  
- 🔴 **在 PD 分离模式下 DFLASH 推测解码崩溃**（`#36140`）：因 `spec_info` 为 `None` 导致崩溃；需临时绕行，直至相关 PR 合并。  
- 🔴 **CUDA 核心转储追踪**（`#26340`）：CI 运行中自动收集到的崩溃事件；269 条评论表明 GPU 内核存在广泛不稳定性。  
- 🟡 **HiCache 预取死锁**（`#30760`）：当 TP=4 且未设置 PP 时，`check_prefetch_progress` 中触发死锁。  
- 🟡 **SGLANG_SIMULATE_ACC_LEN 性能退化**（`#34740`）：因回退标记逻辑导致静默的 O(n²) 解码。

> ✅ *正在修复中*：PR #37322（#36599）、#37321 及 #37316 旨在解决关键模型与状态管理缺陷。

---

### **6. 对应用开发者的意义**  
- **智能体工作负载**：分布式 KVCache 系统路线图（#21846）与会话感知路由模块（#25760）表明，向可扩展、低延迟智能体服务迈进势头强劲。  
- **模型灵活性**：预计未来将更顺畅地集成多模态模型（如 MiMo-V2.5、GLM-5.3-Flash），尤其在即将推出的 HiSparse 与 HiCache L3 支持下。  
- **稳定性提醒**：在 #36140 修复前，请避免在 DFLASH 推测解码中使用 `--disaggregation-mode decode`。注意监控 Qwen3.8-Flash-Next 输出中的静默损坏。  
- **CI 可靠性**：报告的不稳定测试数量增多（#17050 中共 11 项），提示关键部署前的预发布验证可能需人工介入。

> 👉 *建议*：使用最新 main 版本（`sglang:dev-cu13-mimo-v2.5`）以获得已知稳定行为；若遇到乱码输出或卡顿，可临时启用 `--disable-cuda-graph`。

---  
*来源: [github.com/sgl-project/sglang](https://github.com/sgl-project/sglang)*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 摘要 – 2026-09-01**

---

### **1. 今日亮点**  
最新更新聚焦于多个后端的性能与稳定性，重点优化了 Metal（M1/M1 Ultra）、CUDA（XOR swizzle flash attention）和 ROCm（radix TOP_K）的关键内核。新增对 DeepSeek-V4-Flash-Vision-Exp 与 GLM-5.3-Flash 的支持，扩展了模型兼容性，同时针对 Qwen3.8-Flash-Next 等大上下文模型的解码效率开展持续优化。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未发布新版本标签或破坏性 API 变更。但合并请求（PR）显示即将发生变动：  
- `llama-server` 将从端口 `8080` 迁移至 `9931`（GGML 的俚语写法）——详见 [PR #26508](https://github.com/ggml-org/llama.cpp/pull/26508)。

---

### **3. 新模型与硬件支持**  
- ✅ **新增模型**：  
  - 支持 **DeepSeek-V4-Flash-Vision-Exp** ([PR #28133](https://github.com/ggml-org/llama.cpp/pull/28133))  
  - 支持 **GLM-5.3-Flash (GLM-5-Next)**，具备混合线性/稀疏 MoE 与视觉塔结构 ([PR #27754](https://github.com/ggml-org/llama.cpp/pull/27754), [PR #27773](https://github.com/ggml-org/llama.cpp/pull/27773))  
- ✅ **硬件后端**：  
  - 新增 M1 Ultra Metal 调优 ([PR #28088](https://github.com/ggml-org/llama.cpp/pull/28088))  
  - M1 Metal 调优更新 ([PR #28078](https://github.com/ggml-org/llama.cpp/pull/28078))  
  - ROCm 现已支持 **长行上的 radix TOP_K** ([PR #27466](https://github.com/ggml-org/llama.cpp/pull/27466))  
- ✅ **量化**：  
  - Metal 现在包含针对量化类型优化的 `fa-vec` 路径 ([PR #28116](https://github.com/ggml-org/llama.cpp/pull/28116))

---

### **4. 性能与优化**  
- **Metal（Apple Silicon）**：  
  - M1 Ultra 增加专用 `fa-vec` 调优；布局已移至 M1 Max 部分之后以保持一致性 ([PR #28088](https://github.com/ggml-org/llama.cpp/pull/28088))  
- **CUDA**：  
  - XOR swizzle flash attention 的 K/V smem fp16 tile 优化提升了内存聚合度 ([PR #25635](https://github.com/ggml-org/llama.cpp/pull/25635))  
  - MOE 融合扩展至推测解码（此前仅限单 token）([PR #27621](https://github.com/ggml-org/llama.cpp/pull/27621))  
- **ROCm**：  
  - 基于 radix 的 TOP_K 实现了长行上更快的 top-k 选择，提升上下文可扩展性 ([PR #27466](https://github.com/ggml-org/llama.cpp/pull/27466))  
- **OpenCL（Intel Xe-LP）**：  
  - 优化了 Q4_K/Q5_K 内核，使用 `N_DST=8` 与 `8x8` tile 大小，激活重用提升 2 倍 ([PR #26438](https://github.com/ggml-org/llama.cpp/pull/26438))  
- **通用优化**：  
  - AVX2：通过向量化 IQ 面板解码，显著提升 IQ 量化模型的大批量提示处理速度 ([PR #27402](https://github.com/ggml-org/llama.cpp/pull/27402))  
  - KV 缓存：在非连续状态恢复期间采用批处理散列读取，降低开销 ([PR #27991](https://github.com/ggml-org/llama.cpp/pull/27991))  

---

### **5. 稳定性与回归问题**  
今日报告的关键稳定性问题包括：  
- 🔴 **Intel Arc A770/B70 上 SYCL 崩溃**：多次报告出现 `dev2dev_memcpy(DEVICE_LOST)` 崩溃及负载下 GPU 死锁 ([#27063](https://github.com/ggml-org/llama.cpp/issues/27063), [#25692](https://github.com/ggml-org/llama.cpp/issues/25692))  
- 🔴 **Vulkan 管道死锁**：gfx1103（RADV 780M）编译卡死，导致服务器无法启动 ([#27998](https://github.com/ggml-org/llama.cpp/issues/27998))  
- 🔴 **ROCm TOP_K 崩溃**：当 `ncols > 1024` 时因 bitonic 内核块大小溢出导致 `invalid configuration argument` ([#27021](https://github.com/ggml-org/llama.cpp/issues/27021))  
- 🔴 **ROCm 上 DeepSeek-V4 输出混乱**：尚未确认但严重程度高，影响 Strix Halo 系统 ([#25436](https://github.com/ggml-org/llama.cpp/issues/25436))  
- ⚠️ **WebGPU 在非 4 倍数偏移时崩溃**：已在 [PR #28045](https://github.com/ggml-org/llama.cpp/pull/28045) 中修复——但目前仍无解决方案应对 SYCL 多 GPU 死锁或超过 1K 上下文时 Qwen4exp 解码变慢的问题 ([#27856](https://github.com/ggml-org/llama.cpp/issues/27856))  

---

### **6. 对应用开发者的启示**  
- **在 Apple Silicon 上优先使用 Metal**：M1 Ultra 与 M1 已获得专用 flash attention 及量化路径优化，建议在 Mac 平台上优先选用 Metal 后端以获得最佳性能。  
- **避免在 Intel Arc A770/B70 上使用 SYCL**：已知的 GPU 死锁与崩溃问题尚未解决——生产部署时请考虑降级至 Vulkan 或 CPU。  
- **监控 ROCm 上的上下文长度**：在 [#27021](https://github.com/ggml-org/llama.cpp/issues/27021) 修复前，请避免使用 `ctx_size > 131072` 的 DeepSeek-V4-Flash。  
- **利用新模型支持**：通过 `mtmd` 和转换工具集成 **GLM-5.3-Flash** 与 **DeepSeek-V4-Flash-Vision-Exp**——两者均需设置 `NVIDIA_TF32_OVERRIDE=0` 才能正确输出。  
- **准备端口变更**：更新配置与代理以适应 `llama-server` 从端口 `8080` 迁移至 `9931`（参见 [PR #26508](https://github.com/ggml-org/llama.cpp/pull/26508)）。  

> *建议*：对于高吞吐推理，推荐使用 CUDA 或 Metal 并启用 `--flash-attn`。在稳定补丁发布前，避免在 Intel/AMD 离散显卡上使用 SYCL 与 Vulkan。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-01**

---

### **1. 今日亮点**  
Ollama 生态系统持续扩展对高级多模态及 MoE（专家混合）模型的支持，针对基于 MLX 的 Apple Silicon 和 AMD GPU 推理实现了关键稳定性修复。此前在 v0.33.0 版本中出现的高优先级回归问题——在 Windows/NVIDIA 平台进行多轮对话时导致 GPU 驱动崩溃——现已进入积极修复阶段。与此同时，开发者正推动通过可由 API 访问的云端使用统计数据和改进的错误报告机制，实现更深入的可观测性。

---

### **2. 发布与重大变更**  
*过去 24 小时内无新版本发布。*  
然而，**v0.33.0** 引入了一个已知回归问题（问题 #18152），在从单轮请求切换到多轮请求时，会导致 Windows 系统上出现 `VIDEO_TDR_TIMEOUT_DETECTED` 崩溃——影响 NVIDIA 用户。该问题已在多个硬件配置上被报告，目前正处于积极调查中。暂无迁移指引或临时解决方案。

---

### **3. 新模型与硬件支持**  
- ✅ **Granite 4.1 系列** 已加入实验性 MLX 支持（PR #17972）。这些密集型模型现可通过 `ollama create` 使用 safetensors 格式导入。
- 📌 **Qwen3-VL 与具备视频能力的模型** 仍无法使用，因缺少输入处理管道（问题 #18151）；用户当前必须手动将视频预处理为帧序列。
- ⚠️ **AMD ROCm 对 MoE 模型的支持仍不稳定**：混合图形架构（如 gfx1200 + gfx1201）会触发 `ROCm error: no kernel image is available`（问题 #18162），阻碍在异构 AMD 环境下的可扩展推理。
- 🔧 **MLX-C** 与 **llama.cpp** 后端已更新至最新上游版本（PRs #18160, #18080），为未来兼容新模型格式奠定基础。

---

### **4. 性能与优化**  
- 💡 **内存泄漏缓解**：MLX 运行器在固定上下文下表现出持续的内存增长（约每请求 0.147 GiB），最终趋于稳定在 28.5 GiB 左右（问题 #17924）。这对长时间运行的代理工作负载影响显著。
- 📊 **缓存可见性提升**：PRs #16916 与 #17943 在 API 响应中新增 `prompt_eval_cached_count` 与 `cache_n` 指标——支持在本地与云端环境中精确追踪缓存命中率与有效吞吐量。
- ⏱️ **流式输出优化**：PR #18156 在流式 MLX 补全中引入重复标记检测，防止生成失控，提升长文本输出过程中的可靠性。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 摘要 | 修复状态 |
|---------|-------|--------|------------|
| 🔴 严重 | [#18152](https://github.com/ollama/ollama/issues/18152) | Windows + NVIDIA 系统在升级至 v0.33.0 后，多轮对话切换期间发生 GPU 驱动崩溃（`VIDEO_TDR_TIMEOUT_DETECTED`） | 未解决 —— 已确认在 0.32.15 与 0.33.0 之间存在回归 |
| 🔴 高 | [#18162](https://github.com/ollama/ollama/issues/18162) | 混合 AMD GPU 架构（gfx1200 + gfx1201）上 MoE 模型崩溃，因缺失 ROCm 内核镜像 | 未解决 —— 影响 AMD 系统的可扩展性 |
| 🟡 中等 | [#17778](https://github.com/ollama/ollama/issues/17778) | Qwen 3.8 在聊天流式输出中失败，提示“消息中未找到用户查询”（500 错误） | 未解决 —— 工具调用循环问题 |
| 🟡 中等 | [#14493](https://github.com/ollama/ollama/issues/14493) | Qwen 3.5 27B：工具调用功能失效，重复惩罚机制被忽略 | 未解决 —— 影响智能体工作流 |
| 🟢 低 | [#18146](https://github.com/ollama/ollama/issues/18146) | `ollama create` 在 Qwen3.8-Flash-Next GGUF 上因验证不匹配失败 | 未解决 —— 可能需修补 llama-quantize 兼容性 |

---

### **6. 对应用开发者的启示**  
- **若在 Windows/NVIDIA 环境下运行多轮或长上下文应用，请避免使用 v0.33.0**，建议回退至 0.32.15，直至 TDR 回归问题修复。
- **在问题 #14493 与 #17778 修复前，请勿依赖 Qwen 3.5/3.8 模型的工具调用或重复抑制功能**——这些缺陷会破坏核心代理逻辑。
- **对于 macOS/M1/M2/M3/M4 用户**，使用 MLX 后端时请谨慎：密切监控内存使用情况（问题 #17924），避免长时间运行而无重启。
- **在监控系统中使用 `prompt_eval_cached_count`**（通过 `/api/chat`、OpenAI 兼容接口）以实时衡量缓存效率，并优化提示词设计。
- **预计视频输入进展有限**——目前 Qwen3-VL 尚不支持原始视频输入（问题 #18151）；手动帧提取仍是必要步骤。
- **通过 `/api/me` 请求云端使用统计数据**（问题 #12532）——这对成本敏感部署规划至关重要；建议投票以提升其优先级。

> 🔗 *跟踪关键问题：* [12532](https://github.com/ollama/ollama/issues/12532), [18152](https://github.com/ollama/ollama/issues/18152), [18162](https://github.com/ollama/ollama/issues/18162), [17778](https://github.com/ollama/ollama/issues/17778)

---  
*摘要生成时间：2026-09-01 | 来源：github.com/ollama/ollama*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-09-01**

---

### **1. 今日亮点**  
LiteLLM 项目在稳定核心代理与路由逻辑方面持续推进，重点 PR 集中于团队级配置的可观测性、安全性和正确性。关键修复解决了模型别名可见性、凭证泄露以及日志中的静默失败问题——尤其针对 `GET /v2/team/list` 和虚拟密钥处理。值得注意的是，UI 现已展示运行时注册的回调函数，显著提升了监控集成的透明度。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新发布。*  
但有若干可能引入破坏性变更的更新正在审查中：  
- **PR #39045**：在 `/v2/team/list` 中添加 `litellm_model_table`，支持通过 API 获取模型别名（修复 Issue #26312）。  
- **PR #38979**：将团队级日志回调接入透传端点（如 `/gemini`、`/anthropic`）——对多租户部署的可观测性至关重要。  
- **PR #39046**：回滚此前更改，因引发意外副作用；凸显在凭证选择中需谨慎对待 UI 状态持久化问题。  

👉 [PR #39045](https://github.com/BerriAI/litellm/pull/39045) | [PR #38979](https://github.com/BerriAI/litellm/pull/38979) | [PR #39046](https://github.com/BerriAI/litellm/pull/39046)

---

### **3. 新模型与硬件支持**  
*今日未新增模型或硬件后端。*  
但持续进展包括：  
- **PR #39039**：新增对 **Milvus gRPC 搜索** 的实验性支持，为仅支持 gRPC 的 Milvus 部署提供安全、高性能的向量存储集成。  
- **PR #38952**：扩展 MCP 规范解析以接受 **YAML OpenAPI 规范**，提升与基于 YAML 协议的工具生态系统的兼容性。  

👉 [PR #39039](https://github.com/BerriAI/litellm/pull/39039) | [PR #38952](https://github.com/BerriAI/litellm/pull/38952)

---

### **4. 性能与优化**  
*今日未落地直接性能改进*，但基础工作持续推进：  
- **PR #39021**：引入发布轮子合约验证（符号、导入项、大小 < 20MB），防止未来原生扩展加载出现回归问题。  
- **PR #39026**：将 Rust-Python 互操作层重构为领域无关的 crate（`litellm-python-interop`），降低耦合度，提升未来优化的可维护性。  

👉 [PR #39021](https://github.com/BerriAI/litellm/pull/39021) | [PR #39026](https://github.com/BerriAI/litellm/pull/39026)

---

### **5. 稳定性与回归问题**  
今日报告的最高优先级稳定性问题（按影响排序）：

1. **模型访问组信息泄露至 `/v1/models` 响应中** *(Issue #25550)*  
   - **严重程度**：高  
   - **影响**：安全风险：即使引用的模型不存在，访问组名称仍会被暴露。  
   - **修复状态**：待合并（尚未提交修复 PR）。  

2. **`output_parse_pii` 在 Presidio 下无效** *(Issue #14516)*  
   - **严重程度**：中  
   - **影响**：尽管已配置，仍无法强制执行 PII 掩码。  
   - **修复状态**：已关闭；可能需重新评估中间件处理顺序。  

3. **`request_timeout` 在静默上游环境下永不触发** *(Issue #38358)*  
   - **严重程度**：高  
   - **影响**：若上游接受 TCP 连接但始终不发送数据，请求将无限挂起。  
   - **修复状态**：等待 PR —— 参见 [PR #38358](https://github.com/BerriAI/litellm/issues/38358)。  

4. **Gemini 推理内容泄露至 output_text** *(Issue #36929)*  
   - **严重程度**：中  
   - **影响**：当 `reasoning.effort=medium|high` 时，破坏严格的 `json_schema` 强制校验。  
   - **修复状态**：尚未提交修复 PR。  

👉 [Issue #25550](https://github.com/BerriAI/litellm/issues/25550) | [Issue #14516](https://github.com/BerriAI/litellm/issues/14516) | [Issue #38358](https://github.com/BerriAI/litellm/issues/38358) | [Issue #36929](https://github.com/BerriAI/litellm/issues/36929)

---

### **6. 对应用开发者的启示**  
- **仅在升级至最新稳定版后使用 `GET /v2/team/list`**：在 PR #39045 合并前，模型别名不会在团队响应中显示——这会影响依赖元数据的智能体路由和审计工具。  
- **在确认前避免设置 `output_parse_pii=True` 与 Presidio 配合使用**：当前行为不一致，可能导致合规性缺口。  
- **谨慎监控超时设置**：若应用使用慢速或不可靠的提供商（如自定义端点），请确保 `request_timeout` 正确配置——它可能无法按预期触发。  
- **充分利用新的日志增强功能**：借助如 PR #38979 和 #38974 等更新，现在可在所有提供商路由上强制实施团队级可观测性，实现更优的成本与用量追踪。  
- **为更严格的凭证管理做好准备**：未来版本将强化团队级别的凭证作用域控制（PR #38932），请尽早验证部署配置。

➡️ **可操作建议**：立即审计您的虚拟密钥使用情况及 `model_aliases` 设置——缺失的别名可见性可能破坏生产环境的路由逻辑。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# **Unsloth Digest – 2026-09-01**

---

### **1. 今日亮点**  
Unsloth 生态系统持续成熟，重点聚焦于**安全强化**、**多模型兼容性**以及 Studio 的**用户体验优化**。关键进展包括引入操作系统级沙箱以执行工具（通过 bubblewrap/Seatbelt）、修复 AMD ROCm BF16 检测与训练崩溃问题，以及对 MLX 上下文长度处理的关键改进。团队正在积极解决各类 GGUF 变体中的模型加载问题——特别是 Qwen3.8-Flash-Next-GGUF——并提升 Ollama 集成的可靠性。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新发布。*  
然而，多个 PR 表明即将推出破坏性变更：
- **PR #7101** 为 Studio 中的 `python` 和 `terminal` 工具引入强制沙箱机制（Linux：`bubblewrap`，macOS：`Seatbelt`）。这将影响依赖直接文件系统访问或环境变量的工作流。
- **PR #9858** 修改了 GPU 可见性报告逻辑，使其反映实际由操作系统检测到的设备，而非仅限于 PyTorch 打开的设备，可能改变多 GPU 系统上的 UI 行为。
- **PR #10104** 调整关机逻辑，向浏览器告知引导阶段截止时间，防止初始设置期间出现静默失败。

> 🔗 [PR #7101](https://github.com/unslothai/unsloth/pull/7101) | [PR #9858](https://github.com/unslothai/unsloth/pull/9858) | [PR #10104](https://github.com/unslothai/unsloth/pull/10104)

---

### **3. 新模型与硬件支持**  
#### ✅ **新增支持模型**
- **Qwen3.8-Flash-Next-GGUF**：目前因 `llama.cpp` 不支持架构 (`qwen4exp`) 而受阻；问题 [#10015](https://github.com/unslothai/unsloth/issues/10015) 跟踪进度。
- **Wan2.2-TI2V-5B**：被识别出在 16 GB 显卡上需约 66.5 GB VRAM，原因在于 SDPA 回退；非模型本身问题，而是后端内存效率低下。
- **Deepseek 模型**：问题 [#10047](https://github.com/unslothai/unsloth/issues/10047) 报告运行时出现意外重下载。

#### 🧠 **后端与硬件进展**
- **AMD ROCm (gfx1032/gfx1200/gfx1201)**：多个 PR 解决硬件相关问题：
  - 修复 BF16 支持检测 ([#7682](https://github.com/unslothai/unsloth/pull/7682))
  - 在 Triton 无法 JIT 时禁止 Windows 上的 `torch.compile` ([#7704](https://github.com/unslothai/unsloth/pull/7704))
  - 根据 torch 构建架构覆盖情况控制 GPU 选择 ([#8791](https://github.com/unslothai/unsloth/pull/8791))

> 🔗 [Issue #10015](https://github.com/unslothai/unsloth/issues/10015) | [PR #7682](https://github.com/unslothai/unsloth/pull/7682) | [PR #8791](https://github.com/unslothai/unsloth/pull/8791)

---

### **4. 性能与优化**  
#### ⚡ **延迟与内存改进**
- **MLX 上下文长度修复**：PR [#8125](https://github.com/unslothai/unsloth/pull/8125) 修复了一个关键错误，即 MLX 服务的模型始终受限于硬编码的 4096 令牌长度，无视实际模型配置。现在将使用模型元数据中真实的上下文长度。
- **提示缓存复用**：问题 [#10031](https://github.com/unslothai/unsloth/issues/10031) 指出，由于 `ArraysCache` 布局不匹配，MLX 的提示缓存未被用于 Qwen3.8-27B，影响长序列推理速度。

#### 📈 **推理效率**
- **Ollama 集成**：如 [#10110](https://github.com/unslothai/unsloth/pull/10110) 与 [#10051](https://github.com/unslothai/unsloth/issues/10051) 等 PR 力求统一并稳定 Ollama 库存扫描机制，减少冗余模型索引，改善加载时间。

> 🔗 [PR #8125](https://github.com/unslothai/unsloth/pull/8125) | [Issue #10031](https://github.com/unslothai/unsloth/issues/10031) | [PR #10110](https://github.com/unslothai/unsloth/pull/10110)

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 影响 | 状态 |
|---------|-------|--------|--------|
| 🔴 高 | **Studio：并发数据库访问下的 SQLite 死锁** ([#10022](https://github.com/unslothai/unsloth/issues/10022)) | 后端无响应；影响多用户/本地工作流 | 开放 |
| 🔴 高 | **Qwen3.5 bnb-4bit 在前向传播中崩溃** ([#9867](https://github.com/unslothai/unsloth/issues/9867)) | 因未量化打包权重导致训练立即失败 | 开放 |
| 🟡 中 | **Studio 将并行工具调用参数损坏为格式错误的 JSON** ([#9807](https://github.com/unslothai/unsloth/issues/9807)) | 导致后续轮次出现 HTTP 400 错误 | 已关闭 |
| 🟡 中 | **Ollama 模型显示错误来源，触发崩溃模式** ([#9986](https://github.com/unslothai/unsloth/issues/9986)) | 库存无法填充；破坏 UI 状态 | 开放 |
| 🟡 中 | **Deepresearch 硬编码为 127.0.0.1** ([#10109](https://github.com/unslothai/unsloth/issues/10109)) | 阻碍通过局域网进行远程部署 | 开放 |

> 🔗 [Issue #10022](https://github.com/unslothai/unsloth/issues/10022) | [Issue #9867](https://github.com/unslothai/unsloth/issues/9867) | [Issue #9807](https://github.com/unslothai/unsloth/issues/9807)

---

### **6. 对应用开发者的启示**  
- **安全优先部署**：预计 Studio 将采用更严格的沙箱机制（通过 `bubblewrap`/`Seatbelt`）。若你的代理依赖文件系统或环境变量访问，请立即测试——这可能会破坏现有工具脚本。
- **模型可移植性**：使用较新的 GGUF 模型（尤其是 Qwen 系列）时务必谨慎。部署前请始终验证其与 `llama.cpp` 的兼容性。
- **跨平台稳定性**：AMD 用户应避免在 gfx10 GPU 上使用 `BF16`，直至 PR [#7682](https://github.com/unslothai/unsloth/pull/7682) 上线。如需临时规避，可使用 `--disable-bf16`。
- **API 弹性**：工具调用参数格式化缺陷（如 [#9807](https://github.com/unslothai/unsloth/issues/9807)）表明必须具备健壮的错误处理能力——切勿假设输入为有效 JSON。
- **未来兼容性**：关注统一 Ollama 库存计划 ([#10051](https://github.com/unslothai/unsloth/issues/10051))，以避免重复扫描或遗漏模型。

> ✅ 小贴士：使用 `--fit-target`（来自 PR #4882）可针对特定硬件优化 GGUF 加载——对边缘部署至关重要。

---  
*摘要生成时间：2026-09-01 | 来源：[unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*