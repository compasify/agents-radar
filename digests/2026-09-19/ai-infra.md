# AI 基础设施日报 2026-09-19

> 生成时间: 2026-09-19 00:35 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **Cross-Project AI Infrastructure Ecosystem Report – 2026-09-19**

---

### **1. Ecosystem Overview**  
The AI inference infrastructure landscape in Q3 2026 is characterized by rapid specialization and convergence toward production-grade, multi-hardware deployment. vLLM, SGLang, and Unsloth are pushing the envelope in high-throughput serving and low-latency inference, while Ollama consolidates user-facing accessibility and LiteLLM strengthens enterprise proxy capabilities. A clear shift toward disaggregated, agent-aware, and encrypted reasoning pipelines is evident, with increasing emphasis on stability under long-context and multi-turn workloads. The ecosystem is no longer just about speed—it's about reliability, observability, and secure orchestration across hybrid hardware.

---

### **2. Activity Comparison**

| Project       | Open Issues (↑) | Open PRs (↑) | Release Status             |
|---------------|------------------|---------------|----------------------------|
| **vLLM**      | 87               | 142           | v0.28.x in progress        |
| **SGLang**    | 112              | 205           | v0.5.20 released           |
| **llama.cpp** | 158              | 189           | b11046+ builds available   |
| **Ollama**    | 143              | 98            | v0.34.3-rc0 released       |
| **LiteLLM**   | 91               | 127           | v1.103.0-dev.2 released    |
| **Unsloth**   | 119              | 138           | v0.1.811-beta released     |

> ✅ *SGLang leads in contributor engagement (237 contributors), while llama.cpp shows the highest volume of open issues—indicating broad but unstable hardware support.*

---

### **3. Model Support Race**

| New Model / Architecture       | Supported By                          | Status & Notes |
|----------------------------------|----------------------------------------|----------------|
| **GLM-5.3-Flash**                | SGLang ✅, vLLM 🟡 (pending patch)      | SGLang leads; vLLM has vision bug |
| **Qwen3.8-Flash-Next**           | Unsloth ✅ (with MTP fix), SGLang 🟡     | Unsloth delivers 2x speedup via MTP hotfix |
| **Gemma4 on Turing GPUs (SM 7.5)** | None — unsupported due to SM limits   | vLLM issue #38918 remains unresolved |
| **Ternary Bonsai Models**        | Unsloth 🟡 (manual install), Ollama 🟡   | No native support yet; community effort needed |
| **FP8/INT8 Diffusion Inference** | Unsloth ✅, llama.cpp 🟡 (OpenCL)       | Unsloth pioneers in diffusion + quantization fusion |

> 🏆 **Winner: Unsloth** – leads in novel model performance (Qwen3.8-Flash-Next MTP), diffusion support, and cross-platform reach (ARM64 CUDA on Windows).

---

### **4. Performance Frontier**

| Optimization Focus          | Leading Projects                              | Key Advances |
|-------------------------------|------------------------------------------------|--------------|
| **KV Cache Efficiency**       | vLLM, SGLang                                   | FlashInfer integration (vLLM), pre-SM100 paged updates |
| **Speculative Decoding**      | vLLM (NGram GPU speculator), SGLang            | GPU-accelerated n-gram prediction; early draft release fixes |
| **Quantization & Kernels**    | llama.cpp (OpenCL/HMX), Unsloth (FP8/INT8)     | Binary kernels (`flash_attn_f32_f16_bin`), fused FP8 MoE folding |
| **Distributed & Disaggregated Serving** | vLLM (NIXL), SGLang (sgl-router)         | `/render`, `/responses`, dynamic engine routing |
| **Memory & Latency Tradeoffs**| SGLang (prefill CUDA graph contention), Ollama (RAM spikes) | Memory pressure driving auto-disable logic |

> 🔥 **Hotspot**: vLLM and SGLang are competing head-to-head on speculative decoding efficiency and distributed scalability—critical for agent systems.

---

### **5. Layer Positioning**

| Project       | Primary Layer                     | Role Summary |
|---------------|------------------------------------|--------------|
| **vLLM**      | High-Performance Serving Engine     | Core inference engine with advanced scheduling, MoE, and speculation |
| **SGLang**    | Agent-First Runtime & Gateway       | Bridges models and agents with policy routing, tool calling, and async control flow |
| **llama.cpp** | Local, Cross-Platform Runtime       | Edge and embedded inference; strong NPU/Vulkan/Metal support |
| **Ollama**    | Developer-Focused Local Gateway     | Simplified CLI/model management; shifting from agent to API-first |
| **LiteLLM**   | Enterprise Proxy & Orchestration    | Multi-provider routing, budget enforcement, encryption affinity |
| **Unsloth**   | High-Speed Training + Inference Stack | Optimized fine-tuning + inference pipeline with Docker/multi-user support |

> 💡 **Strategic Insight**: The stack is bifurcating—**engine-level innovation** (vLLM/SGLang) vs. **application-layer abstraction** (LiteLLM/Ollama) vs. **edge runtime** (llama.cpp).

---

### **6. Trend Signals**

#### **Emerging Industry Trends (from 2026-09-19 activity):**
1. **Agent-Centric Design Is Now Mainstream**  
   - SGLang’s `sgl-router`, vLLM’s `/render`, and Ollama’s `thinking` controls signal that agents are no longer a niche use case—they’re driving core architectural decisions.
   
2. **Disaggregation & Observability Are Non-Negotiable**  
   - vLLM’s NIXL metrics, SGLang’s PD disaggregation, and LiteLLM’s streaming guardrails show that distributed inference requires deep observability and state tracking.

3. **Hardware Fragmentation Demands Cross-Backend Agility**  
   - Projects like llama.cpp (OpenCL, Hexagon, Vulkan) and Unsloth (AMD RDNA1/2, ARM64 CUDA) are building portable backends faster than model providers can keep up.

4. **Security & Cost Control Are Production Requirements**  
   - LiteLLM’s cosign-signed images, project-level budgets, and virtual key allowlisting reflect growing need for auditability and financial governance.

#### **What Application Developers Should Watch:**
- **Avoid "vision" claims without runtime validation** — e.g., DeepSeek-V4.1 Flash silently discards images (Ollama #18527).
- **Enable `--max-num-partial-prefills` cautiously** — vLLM’s RFC suggests it may break long-context RAG unless tuned.
- **Monitor for silent data corruption** — Metal truncation (llama.cpp #28805), ROCm logits errors (#28211), and context leaks (Ollama #18528) can break production apps undetected.
- **Upgrade to signed dev builds** (LiteLLM v1.103.0-dev.2) and beta releases (Unsloth v0.1.811-beta) to access critical stability fixes.

> ✅ **Final Recommendation**: For production agent systems, **pair vLLM or SGLang as the engine** with **LiteLLM as the gateway**, and **validate all multimodal inputs at runtime**—no model capability should be trusted blindly.

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-09-19**

---

### **1. 今日亮点**  
vLLM 项目持续推动大模型高效服务的边界，关键进展集中在推测解码与拆分式推理。值得注意的是，V1 引擎即将引入新的 NGram GPU 推测器，同时针对高负载解码场景下的无声 CUDA IMA 崩溃问题完成了关键稳定性修复。与此同时，增量 MoE 专家卸载与原生文本水印功能的持续推进，预示着对大规模、生产级部署的支持正在逐步增强。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未检测到新发布或破坏性变更。*  
然而，多个 PR 正在推进 v0.28.x 版本：  
- [PR #57416](https://github.com/vllm-project/vllm/pull/57416) 通过对扩散模型的 logits 行分配进行对齐，提升了预填充吞吐量——预计将在下个版本中合并。  
- [PR #57647](https://github.com/vllm-project/vllm/pull/57647) 修正了 DFlash 接受长度测试的引用错误，解决了不稳定的 CI 回归问题（非破坏性变更，但影响测试可靠性）。

---

### **3. 新模型与硬件支持**  
- **Gemma4 在 Turing GPU（SM 7.5）上**：由于所有注意力后端均受限于共享内存，仍不支持 ([Issue #38918](https://github.com/vllm-project/vllm/issues/38918))。绕过方案可能需要模型剪枝或后端修改。  
- **GLM-5.3-Flash 在 SM120（RTX PRO 6000 Blackwell）上**：因缺少 `rope-free sparse MLA` 路径而无法启动 ([Issue #53963](https://github.com/vllm-project/vllm/issues/53963))。修复待定。  
- **ROCm 支持**：持续增强对 AMD GPU 的支持，包括 gfx950 DPX 容忍度调整 ([PR #57599](https://github.com/vllm-project/vllm/pull/57599)) 以及 Qwen3-Next 的融合核函数支持 ([PR #51406](https://github.com/vllm-project/vllm/pull/51406))。  
- **Intel GPU**：正在积极排查量化版 Qwen3.6-35B-A3B-int4-mixed-AutoRound 在 MTP 与多卡环境下的问题 ([Issue #53119](https://github.com/vllm-project/vllm/issues/53119))。

---

### **4. 性能与优化**  
- **推测解码**：新推出的 **NGram GPU 推测器** ([PR #40704](https://github.com/vllm-project/vllm/pull/40704)) 利用 GPU 加速的 n-gram 预测，实现更快的草稿 token 生成，显著提升推测效率。  
- **预填充优化**：[PR #57416](https://github.com/vllm-project/vllm/pull/57416) 消除了扩散模型仅预填充批次中的冗余全遍历，带来可测量的延迟降低。  
- **KV Cache 效率**：FlashInfer 集成现已扩展至 SM100 之前的 NVFP4 分页 KV Cache 更新 ([PR #46963](https://github.com/vllm-project/vllm/pull/46963))，使如 RTX 3090 等旧架构得以减小内存占用。  
- **MoE 可扩展性**：通过 GPU 缓存 + 异步流水线实现的增量 MoE 专家卸载 ([RFC #38256](https://github.com/vllm-project/vllm/issues/38256))，有望在低于 40GB VRAM 的硬件上运行 >100B 的 MoE 模型。

---

### **5. 稳定性与回归问题**  
- **RTX 3090 上混合 GDN + MTP k=3 + 异步调度下的无声 CUDA IMA 崩溃** ([Issue #53726](https://github.com/vllm-project/vllm/issues/53726))：尽管已有修复，但崩溃仍持续存在；目前尚无已知解决方案。  
- **DFlash2 在 sm_80（RTX 3090）上约 11,000 解码步后越界崩溃**，导致引擎崩溃并触发 Xid 31 ([Issue #55279](https://github.com/vllm-project/vllm/issues/55279))：严重级别高，影响长上下文推理；需紧急处理。  
- **GLM-5.3-Flash 长解码质量退化**，在累积推理后输出质量逐渐下降 ([Issue #56868](https://github.com/vllm-project/vllm/issues/56868))：很可能与 KV Cache 管理有关。  
- **P/D 拆分部署中预填充后重启 Pod 导致 NIXL LoadRemoteMD 崩溃** ([Issue #49238](https://github.com/vllm-project/vllm/issues/49238))：对分布式系统至关重要；修复 PR 正在审查中 ([PR #57389](https://github.com/vllm-project/vllm/pull/57389))。

---

### **6. 对应用开发者的启示**  
- **生产系统**：谨慎使用 `--max-num-partial-prefills` —— 最新 RFC 建议为长上下文 RAG 工作负载恢复并发部分预填充限制 ([Issue #57413](https://github.com/vllm-project/vllm/issues/57413))。请监控 V1 调度器中的回归问题。  
- **智能体与工具链工作流**：多轮对话支持仍处于实验阶段 ([Issue #33089](https://github.com/vllm-project/vllm/issues/33089))；建议在原生 OpenAI `/responses` API 可用前，使用外部状态管理。  
- **长上下文应用**：避免在 Turing GPU 上使用 Gemma4；改用更小模型或重构提示处理逻辑。对于 GLM-5.3-Flash，除非打补丁，否则在新款 Blackwell 显卡上将面临性能限制。  
- **拆分式服务部署**：充分利用 `/render` 端点 ([PR #42729](https://github.com/vllm-project/vllm/pull/42729)) 和 NIXL 指标聚合功能 ([PR #41230](https://github.com/vllm-project/vllm/pull/41230))，以增强分层部署的可观测性。  
- **未来兼容性**：尽可能启用 `torch.compile` —— 但请注意 FusedMoE 包装器的限制 ([Issue #31985](https://github.com/vllm-project/vllm/issues/31985)) 可能阻碍优化。

> *保持警惕：多个高严重性缺陷仍存在于长解码与多 GPU 工作流中。部署前务必在接近生产负载的条件下充分测试。*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 消息简报 – 2026-09-19**

---

### **1. 今日亮点**  
SGLang 生态在引擎架构优化方面取得显著进展，推出了新的 `sgl-router` 策略重组计划，旨在实现动态引擎选择与基于负载的路由。与此同时，关键稳定性修复已合并，涵盖 GPU 内存管理（如 CUDA graph 预填充饥饿问题）以及影响 DeepSeek V4/V3.2 和 GLM-5.3-Flash 视觉模型的特定模型缺陷。v0.5.20 版本发布，新增对 **GLM-5.3-Flash** 模型的支持，并标志着社区驱动开发的重要里程碑——来自 237 名贡献者的 700 多个 PR 被采纳。

---

### **2. 发布与破坏性变更**  
- **v0.5.20** 已发布：[GitHub 发布页](https://github.com/sgl-project/sglang/releases/tag/v0.5.20)  
  - 引入 **GLM-5.3-Flash** 作为支持的自回归模型。  
  - 通过 `policies_reorg` 模块对引擎选择流水线进行基础性重构。  
  - 未报告破坏性 API 变更；保持向后兼容性。

---

### **3. 新模型与硬件支持**  
- **新模型**：  
  - ✅ **GLM-5.3-Flash**（自回归）——现已通过 [教程](https://docs.sglang.io/cookbook) 正式支持。  
  - 📌 *Gigachat 3.5* 支持正在积极开发中 ([PR #29189](https://github.com/sgl-project/sglang/pull/29189))。  
- **硬件与后端增强**：  
  - **ROCm** 优化：`ROCM_QUICK_REDUCE_QUANTIZATION=INT8` 路径现在能更稳健地处理低幅度 BF16 输入 ([Issue #40084](https://github.com/sgl-project/sglang/issues/40084))。  
  - **AMD** 优化：MiniMax-M3 堆栈包含融合的 FP8 量化、MoE all-reduce 折叠和基于 Triton 的稀疏注意力 ([PRs #36574–#36559](https://github.com/sgl-project/sglang/pulls?q=is%3Aopen+is%3Apr+label%3A%22amd%22+author%3Azcnrex))。  
  - **NPU** 支持：共享选择状态已移至 `src/state`，以统一控制流 ([PR #40272](https://github.com/sgl-project/sglang/pull/40272))。

---

### **4. 性能与优化**  
- **预填充内存效率**：  
  - 预填充 CUDA graph 现在占用约 1.8 GB，导致在小规格 GPU 上与量化 KV 的长上下文工作负载产生资源争用 ([Issue #40094](https://github.com/sgl-project/sglang/issues/40094))。  
  - 提出修复方案：当可用 VRAM 低于阈值时自动禁用预填充 CUDA graph（尚未实现规则）。  
- **推测解码**：  
  - 草稿阶段的 `embed_tokens`/`lm_head` 复制释放过早，导致 `max_total_num_tokens` 缩小 ([Issue #36452](https://github.com/sgl-project/sglang/issues/36452))。  
  - 修复正处于性能评审阶段。  
- **内核与量化**：  
  - **MiniMax-M3** 堆栈实现了每 token 的 FP8 量化融合，结合 RMSNorm 与 MoE all-reduce 折叠 ([PR #36575](https://github.com/sgl-project/sglang/pull/36575))。  
  - AMD 特定内核针对 wave64 直方图选 top-k 解码进行了优化 ([PR #36560](https://github.com/sgl-project/sglang/pull/36560))。  
  - **DFLASH 草稿布局** 验证缺失 —— 在锚点优先检查点过程中出现静默位置偏移 ([Issue #40144](https://github.com/sgl-project/sglang/issues/40144))。

---

### **5. 稳定性与回归问题**  
- **严重崩溃与缺陷**：  
  1. **DeepSeek V4/V3.2 工具调用解析失败**：工具调用返回原始内容且语法格式错误 ([Issue #40236](https://github.com/sgl-project/sglang/issues/40236))。  
  2. **GLM-5.3-Flash 视觉误分类**：在 8x H20 上，单个 JPEG URL 被错误识别为鸟类图像 ([Issue #38821](https://github.com/sgl-project/sglang/issues/38821))。  
  3. **Qwen3.6-27B AWQ 在多轮提示下温度为 0 时退化** ([Issue #31720](https://github.com/sgl-project/sglang/issues/31720))。  
- **已合并的稳定性修复**：  
  - 修复 TorchDynamo 追踪路径中的 `is_musa()` 图断裂问题 ([PR #40067](https://github.com/sgl-project/sglang/pull/40067))。  
  - 修复因 `bootstrap_room` 重复导致的 `KeyError` 崩溃（在 PD 分离中）([Issue #40125](https://github.com/sgl-project/sglang/issues/40125))。  
- **CI 健康状态**：检测到 1 个失败测试，6 个不稳定测试；共应用 1,051 项近期修复 ([Issue #17050](https://github.com/sgl-project/sglang/issues/17050))。

---

### **6. 对应用开发者的意义**  
- **引擎选择灵活性**：`sgl-router` 重构 ([PRs #40241–#40272](https://github.com/sgl-project/sglang/pulls?q=is%3Aopen+is%3Apr+label%3A%22sgl-router%22)) 将在未来支持基于负载、延迟或成本的动态路由，这对需要自适应推理路径的代理系统至关重要。  
- **模型特定风险**：在 #38821 修复前，请避免使用 `GLM-5.3-Flash` 视觉模式；在多轮场景中，建议对 Qwen3.6-27B-AWQ 使用 `temperature > 0`。  
- **内存限制**：在小 GPU 部署环境中，可禁用 `--enable-prefill-cp`，或密切监控 VRAM 使用情况，以避免预填充阻塞 ([Issue #40094](https://github.com/sgl-project/sglang/issues/40094))。  
- **工具调用可靠性**：在 #39843 修复前，Python 与 Rust 前端之间的工具调用渲染可能不一致——生产环境中请保持前端层的一致性。

> 🔗 **可操作链接**：  
> - [v0.5.20 发布说明](https://github.com/sgl-project/sglang/releases/tag/v0.5.20)  
> - [SGLang 教程（模型）](https://docs.sglang.io/cookbook)  
> - [开放问题（前10名）](https://github.com/sgl-project/sglang/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 摘要 – 2026-09-19**

---

### **1. 今日亮点**  
最新更新聚焦于在多个后端扩展硬件加速能力，尤其在 OpenCL 和 Hexagon 支持方面取得显著进展，涵盖高级注意力核函数与张量运算。关键改进包括 OpenCL 上的 `flash_attn_f32_f16_bin`、Hexagon 上的 ROLL 操作支持，以及针对非 64 的倍数头维度（head_dim）优化的 HMX flash-attention 填充机制。这些升级提升了在各类边缘设备和 AI 加速器上的兼容性与性能表现。

---

### **2. 发布与破坏性变更**  
- **b11046 (OpenCL)**：新增二进制内核 `flash_attn_f32_f16_bin` (#29046)，支持混合精度工作负载下的优化 flash attention。  
  🔗 [PR #29046](https://github.com/ggml-org/llama.cpp/pull/29046)  
- **b11045 (Hexagon)**：为 f32 张量添加 `ROLL` 操作支持，对依赖位置偏移的模型（如 MTP、滑动窗口）至关重要。  
  🔗 [PR #29105](https://github.com/ggml-org/llama.cpp/pull/29105)  
- **b11043 (Hexagon)**：增强 HMX flash-attention 以处理 `head_dim = 72`（例如 SigLIP），通过零填充通道实现 64 对齐。  
  🔗 [PR #26539](https://github.com/ggml-org/llama.cpp/pull/26539)  
- **b11042 (OpenCL)**：引入 A8 Q6_K 非 MoE 二进制内核（`kernel_gemm_noshuffle_q6_k_f32_32b_trans_ila_a8_bin`），提升量化推理效率。  
  🔗 [PR #28678](https://github.com/ggml-org/llama.cpp/pull/28678)  

> ✅ *未报告任何破坏性 API 变更；所有更新均为累加或向后兼容。*

---

### **3. 新模型与硬件支持**  
- **Hexagon (高通 NPU)**：通过异步后端（PR #26501）实现对多 NPU 设备（IQ9/IQ10）的完整支持，可在移动 SoC 上实现可扩展部署。  
  🔗 [PR #26501](https://github.com/ggml-org/llama.cpp/pull/26501)  
- **Vulkan**：新增 IQ3_S MMQ 矩阵乘法内核，适用于 RDNA3/RDNA4 GPU（如 Strix Halo、AMD Radeon 7900 XT）。  
  🔗 [PR #28822](https://github.com/ggml-org/llama.cpp/pull/28822)  
- **SYCL (Intel Arc)**：实验性地加入图录制与回放功能（PR #28725），为 Intel GPU 实现低延迟推理铺平道路。  
  🔗 [PR #28725](https://github.com/ggml-org/llama.cpp/pull/28725)  
- **Metal (Apple Silicon)**：新增 Q4_0/Q8_0 小批量矩阵-向量内核，支持 `ne11=2..8`，降低轻量级推理延迟。  
  🔗 [PR #29110](https://github.com/ggml-org/llama.cpp/pull/29110)

---

### **4. 性能与优化**  
- **Flash Attention**：OpenCL 上的 `flash_attn_f32_f16_bin` 降低内核启动开销，显著提升 Qwen3.8-27B 等高吞吐模型的处理效率。  
- **Hexagon IM2COL**：更新后的内核支持一维及填充操作，在基准测试中使 patch-embedding 速度提升最高达 15%。  
  🔗 [PR #29103](https://github.com/ggml-org/llama.cpp/pull/29103)  
- **SYCL (Intel Arc B70)**：IQ3_S/IQ3_XXS 代码重排在预填充阶段将解码路径效率提升约 20%。  
  🔗 [PR #29107](https://github.com/ggml-org/llama.cpp/pull/29107)  
- **Vulkan (RDNA3/RDNA4)**：新推出的 int8 coopmat1 内核（PR #27952）相比通用路径，提示词处理速度最高提升 2 倍。  
  🔗 [PR #27952](https://github.com/ggml-org/llama.cpp/pull/27952)

---

### **5. 稳定性与回归问题**  
- **严重 GPU 崩溃（CUDA/SYCL/Vulkan）**：  
  - **RTX 5090**：CUDA Graph 导致 GPU 假死 / XID 8 错误（问题 #27330），可通过设置 `GGML_CUDA_DISABLE_GRAPHS=1` 缓解。  
    🔗 [问题 #27330](https://github.com/ggml-org/llama.cpp/issues/27330)  
  - **AMD Strix Halo (Vulkan)**：Linux 7.x 内核下出现 `DeviceLostError`（问题 #25664）。  
    🔗 [问题 #25664](https://github.com/ggml-org/llama.cpp/issues/25664)  
  - **Intel Arc Pro B70 (SYCL)**：`dev2dev_memcpy` 因 `DEVICE_LOST` 导致崩溃（问题 #27198）。  
    🔗 [问题 #27198](https://github.com/ggml-org/llama.cpp/issues/27198)  
- **无声数据损坏**：  
  - **HIP/ROCm (gfx1151)**：长提示（>n_ubatch）时 logits 出现错误（问题 #28211）。  
    🔗 [问题 #28211](https://github.com/ggml-org/llama.cpp/issues/28211)  
  - **Metal (M1/M2)**：长上下文场景下输出被无声截断（问题 #28805）。  
    🔗 [问题 #28805](https://github.com/ggml-org/llama.cpp/issues/28805)  
- **内存问题**：  
  - 图形缓冲区预留失败（问题 #26070），导致分配崩溃。  
    🔗 [问题 #26070](https://github.com/ggml-org/llama.cpp/issues/26070)  

> ⚠️ *多数回归问题仍待修复；相关 PR 正在审查或处于实验阶段。*

---

### **6. 对应用开发者的启示**  
- 在多 GPU 系统上使用 `--split-mode tensor` 时需谨慎——已知会引发崩溃（如问题 #27198, #27330）；建议暂用 `--split-mode layer` 直至稳定。  
- 若运行在 RTX 5090 或更新显卡上，请启用 `GGML_CUDA_DISABLE_GRAPHS=1` 以避免 GPU 假死。  
- 针对边缘部署，优先选用 b11045 及以上版本的 Hexagon 构建，以更好支持 MTP、SWA 及滚动窗口类模型。  
- 在 OpenCL 平台利用新二进制内核（`flash_attn_f32_f16_bin`, `A8 Q6_K`）以获得更高吞吐。  
- **密切关注模型特定问题**——Qwen3.8-Flash-Next 在 Metal 与 Vulkan 上存在解码异常（问题 #28805, #29028）；可临时使用 `--no-ctx-checkpoints` 作为规避方案。  

> 📌 *请始终使用最新 `b11046+` 版本构建，以确保在新硬件上的稳定性。*  
> 🔗 [最新发布](https://github.com/ggml-org/llama.cpp/releases) | [GitHub 问题](https://github.com/ggml-org/llama.cpp/issues)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

### **Ollama Digest — 2026-09-19**

---

#### **1. 今日亮点**  
Ollama v0.34.3-rc0 引入了对模型专属 *思考控制* 的显式支持，通过 `/api/show` 接口暴露可用的级别（`low`、`high`、`max`）及默认值——这对需要配置推理层级的代理框架至关重要。与此同时，多个高严重性问题被报告，涉及工具调用解析（Qwen3-Coder）、云模型中的图像处理（DeepSeek-V4.1 Flash），以及 ROCm/GDN 混合模型中的状态泄漏，凸显了在多模态和高级推理模式下持续存在的挑战。

---

#### **2. 发布与破坏性变更**  
- **v0.34.3-rc0**（最新版本）：  
  - 在 `/api/show` 响应中新增 `thinking` 元数据：  
    ```json
    {
      "thinking": {
        "values": ["low", "high", "max"],
        "default": "max"
      }
    }
    ```
    [PR #18473](https://github.com/ollama/ollama/pull/18473) | [Issue #18473](https://github.com/ollama/ollama/issues/18473)  
  - **破坏性变更**：内置 CLI 代理已完全移除 ([PR #18393](https://github.com/ollama/ollama/pull/18393))，用户需通过外部工具或自定义脚本主动启用。依赖该功能的企业工作流可能需要重新配置。

---

#### **3. 新模型与硬件支持**  
- **新模型请求**：  
  - Mistral Small 4：[Issue #15142](https://github.com/ollama/ollama/issues/15142) – Mistral Small 3.2 的开源继任者，预计即将加入。  
  - Prism Ternary GGUFs (PQ2_0/PTQ1_0)：[Issue #18521](https://github.com/ollama/ollama/issues/18521) – 导入失败因不支持张量大小溢出；需上游 MLX 后端支持。  
- **硬件与后端更新**：  
  - **MLX**：正积极开发 1-bit/2-bit 量化权重（Bonsai 模型），详见 [Issue #18515](https://github.com/ollama/ollama/issues/18515)。  
  - **ROCm**：混合 GDN 模型（Qwen3.5 系列）在 gfx1151 GPU 上出现跨请求状态泄漏问题 ([Issue #18528](https://github.com/ollama/ollama/issues/18528))。  
  - **Vulkan**：Intel Iris Xe iGPU 检测时断时续失败 ([Issue #18482](https://github.com/ollama/ollama/issues/18482))；在 qwen2.5:14b 上观察到内存分配错误 ([Issue #18531](https://github.com/ollama/ollama/issues/18531))。

---

#### **4. 性能与优化**  
- **内存管理**：  
  - 用户报告在低内存系统（8–16GB）上使用大模型时出现过度占用 RAM 情况；[特性请求 #13601](https://github.com/ollama/ollama/issues/13601) 呼吁支持动态卸载与智能量化。  
  - 多 GPU 配置下希望获得更细粒度的内存分片控制 ([Issue #18525](https://github.com/ollama/ollama/issues/18525))。  
- **吞吐量与延迟**：  
  - 使用 Claude Desktop 集成时报告高延迟（约 50 秒）([Issue #18474](https://github.com/ollama/ollama/issues/18474))。  
  - MLX nvfp4 在持续负载下预填充阶段发生卡顿 ([Issue #18505](https://github.com/ollama/ollama/issues/18505)) —— 间歇性挂起持续数分钟。  
  - CUDA ADD_ID 在 `gpt-oss:20b`（MXFP4）短消息对话（两轮）中失败 ([Issue #18522](https://github.com/ollama/ollama/issues/18522))，表明内核级不稳定。

---

#### **5. 稳定性与回归**  
| 严重性 | 问题 | 描述 | 修复状态 |
|---------|------|-------------|------------|
| 🔴 严重 | [#17778](https://github.com/ollama/ollama/issues/17778) | Qwen 3.8 在流式聊天过程中因 `no user query found in messages`（500 错误）崩溃。 | 开放，32 条评论 |
| 🔴 严重 | [#18528](https://github.com/ollama/ollama/issues/18528) | ROCm 混合 GDN 模型在会话间泄露先前请求上下文——早期提示内容出现在新响应中。 | 开放，正在追踪上游问题 |
| 🔴 严重 | [#18527](https://github.com/ollama/ollama/issues/18527) | `deepseek-v4.1-flash:cloud` 尽管宣称具备 `vision` 能力，却静默丢弃所有图像输入。 | 开放 |
| 🟡 高 | [#18509](https://github.com/ollama/ollama/issues/18509) | Ollama 拒绝有效的 `tool` 角色消息，导致工具调用流程中断。 | 开放 |
| 🟡 高 | [#18530](https://github.com/ollama/ollama/issues/18530) | Qwen3-Coder 若推理内容先于 `<function=...>` 标签出现，则丢失工具调用（解析器漏掉隐式开启符）。 | 开放，已提交 PR #18532 |
| 🟡 中 | [#18526](https://github.com/ollama/ollama/issues/18526) | 从 Hugging Face 拉取模型时偶发重定向失败（502 Bad Gateway）。 | 已通过 [PR #18533](https://github.com/ollama/ollama/pull/18533) 修复 |

---

#### **6. 对应用开发者的意义**  
- **代理框架**：使用 `/api/show` 动态暴露思考级别控制（例如 `max` 用于深度推理）——对精细控制代理行为至关重要。避免硬编码数值。  
- **工具集成**：预期在 Qwen3-Coder 中出现静默工具调用丢失，且近期版本拒绝有效 `tool` 角色消息。建议实现回退机制或使用解析补丁（如 [PR #18532](https://github.com/ollama/ollama/pull/18532)），直至官方修复上线。  
- **多模态应用**：不要假设 `vision` 能力即代表图像输入功能正常——当前 `deepseek-v4.1-flash:cloud` 会静默忽略图像输入。务必在运行时验证能力。  
- **云端与本地**：由于界面中无本地专用过滤器，建议使用 `ollama list --local` 或 API 检查以区分离线可用模型 ([Issue #16833](https://github.com/ollama/ollama/issues/16833))。  
- **企业部署**：内置代理的移除 ([PR #18393](https://github.com/ollama/ollama/pull/18393)) 意味着 CLI 自动化必须依赖外部执行器或封装程序。

> ✅ **可操作提示**：对于生产环境代理，始终通过 `/api/show` 验证模型能力，并为工具调用和图像输入实现健壮的错误处理。密切关注 GitHub 上关于 Qwen3-Coder 与 DeepSeek-V4.1 Flash 回归问题的更新。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 简报 – 2026-09-19**

---

### **1. 今日亮点**  
LiteLLM 生态系统持续强化企业级代理与推理基础设施，针对加密亲和性、流式防护机制及预算控制等关键问题进行了修复。重要进展包括新增 GitGot 作为兼容 OpenAI 的新提供商，以及通过 JWT 范围映射和客户端白名单提升 MCP 网关安全性。一项关键 PR 修复了 `/v1/responses` 中的 WebSocket 中继问题，该问题曾因长度限制导致 `encrypted_content` 被拒绝。

---

### **2. 发布与破坏性变更**  
- **v1.103.0-dev.2**：今日发布，通过 cosign 签名的 Docker 镜像增强了安全性（使用 [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0) 验证）。所有版本现均采用 Sigstore 的 cosign 签名 —— 部署前请务必验证。
- **安全提示**：代理现已在团队成员预算之外强制执行项目级预算 ([#35723](https://github.com/BerriAI/litellm/pull/35723))，防止使用作用域密钥时超支。

---

### **3. 新模型与硬件支持**  
- **新增 GitGot** 作为基于 JSON 配置的 OpenAI 兼容提供商 ([#40810](https://github.com/BerriAI/litellm/pull/40810))：  
  - 基础地址：`https://inference.gitgot.ai/v1`  
  - 支持模型如 `gitgot/gpt-4o-mini`、`gitgot/codellama-34b` 等。  
  - 完全兼容现有 LiteLLM 路由逻辑。
- **Vertex AI Chirp 语音转文字流式传输** 现已支持 `/v1/realtime` ([#41721](https://github.com/BerriAI/litellm/pull/41721)) —— 支持音频转录过程中的实时字幕生成。
- **Databricks service_tier** 现可在请求、流式传输及成本计算中完整保留 ([#41837](https://github.com/BerriAI/litellm/pull/41837)) —— 确保优先级工作负载的计费准确。

---

### **4. 性能与优化**  
- **响应耗时精度提升**：代理现在以 *接收* 时间为准锚定响应时长与开销，而非 SDK 调用开始时间 ([#41891](https://github.com/BerriAI/litellm/pull/41891))。这在高 Redis 负载或慢路由路径下可提供更精确的延迟指标。
- **Rust OCR 路由引入 HTTP 客户端池化**：将共享 HTTP 客户端池注入 OCR 流水线 ([#41897](https://github.com/BerriAI/litellm/pull/41897))，消除每路由单独实例化客户端的开销，提升连接复用效率。
- **OpenRouter 与 Azure 价格同步**：自动化同步定价数据（15 个 OpenRouter 模型，5 个 Azure 已弃用模型），确保成本追踪准确 ([#41842](https://github.com/BerriAI/litellm/pull/41842), [#41833](https://github.com/BerriAI/litellm/pull/41833))。

---

### **5. 稳定性与回归问题**  
| 问题 | 严重性 | 状态 | 修复 PR | 备注 |
|------|----------|--------|--------|-------|
| Bedrock 上模型切换后 `encrypted_content_affinity` 失效 | 严重 | 开放 | [#41792](https://github.com/BerriAI/litellm/issues/41792) | 加密推理处理存在回归；影响多模型工作流 |
| 通过 `?model=` 查询字符串绕过虚拟密钥模型白名单 | 高 | 开放 | [#41810](https://github.com/BerriAI/litellm/issues/41810) | 安全风险；允许未授权模型访问 |
| 虚拟密钥缓存后客户级 RPM 限制被忽略 | 高 | 开放 | 无 | 影响速率限制一致性；报告于 v1.82.3+ |
| 流式防护机制可能跳过跨 SSE 数据块的敏感内容 | 中等 | 开放 | [#41611](https://github.com/BerriAI/litellm/issues/41611) | 长流场景下的防护绕过漏洞 |
| `/v1/messages` 忽略 `timeout` / `stream_timeout`（硬上限 600s） | 高 | 开放 | [#30836](https://github.com/BerriAI/litellm/issues/30836) | 打破长时间流式使用场景 |

> 🔴 **严重提醒**：多个开放缺陷影响核心安全、计费与稳定性 —— 若使用加密推理、虚拟密钥或长流场景，请优先测试。

---

### **6. 对应用开发者的启示**  
- **谨慎使用 `encrypted_content_affinity`** —— 若使用加密推理，避免在 Bedrock 上会话期间切换模型；建议为每个模型使用独立密钥。
- **保护虚拟密钥安全**：避免在 URL 中暴露 `?model=`；使用正确的 API 密钥校验，并通过 `litellm_params.model_list` 强制实施白名单。
- **启用项目级预算** ([#35723](https://github.com/BerriAI/litellm/pull/35723))，防止多用户环境中的成本超支。
- **升级至最新 dev 版本**（`v1.103.0-dev.2`），以获得改进的计时精度、安全签名及更新的模型定价。
- **充分利用新功能**：使用 `/claude_code_gateway` ([#34267](https://github.com/BerriAI/litellm/pull/34267)) 实现自托管 Claude Code 集成，利用 `JWT 范围映射` ([#41896](https://github.com/BerriAI/litellm/pull/41896)) 实现细粒度访问控制，无需管理密钥。

👉 **推荐操作**：审计虚拟密钥使用情况，使用分段输入测试流式防护机制，验证模型切换时加密推理行为，并通过 [#40429](https://github.com/BerriAI/litellm/pull/40429) 启用升级提示栏以增强团队可见性。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

### **Unsloth Digest — 2026-09-19**

#### **1. 今日亮点**  
v0.1.811-beta 版本在多用户 Docker 支持、AMD GPU（RDNA1/2）与 Windows 上的 ARM64 CUDA 支持方面取得重大进展，同时引入了 FP8/INT8 扩散推理，并通过 MTP 热修复实现了 **Qwen3.8-Flash-Next** 的关键 2 倍性能提升。此次更新进一步巩固了 Unsloth 作为高性能、跨平台大语言模型服务栈的地位。

#### **2. 发布与破坏性变更**  
- **v0.1.811-beta**：新增多用户 Docker 环境、完整的 AMD RDNA1/2 支持、Windows 上的 ARM64 CUDA 支持，以及训练/推理优化增强。  
- **Docker + 多用户**：支持容器化部署中的安全、隔离用户会话 ([GitHub Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.811-beta))。  
- **MTP 热修复**：在 MTP 草稿模式下，Qwen3.8-Flash-Next 现已实现 **2 倍加速**——对低延迟推理流水线至关重要。  
- **注意**：从 `v0.1.810-beta` 升级的用户应验证 GGUF 模型加载行为，因报告存在推理吞吐量下降问题（详见 *稳定性与回归*）。

#### **3. 新模型与硬件支持**  
- **AMD ROCm（RDNA1/2）**：已完整支持 `b11030-mix-5ff778e` 版本的 llama.cpp 分支，并配备 DFlash 侧车降级回退机制。  
- **Windows 上的 ARM64 CUDA**：现已在 Docker 镜像中支持——可部署于 Apple Silicon 或基于 ARM 的 Windows 设备。  
- **量化支持**：为稳定扩散流水线引入了 FP8 与 INT8 扩散支持。  
- **模型架构**：实验性支持 **Kimi K3**（文本因果）通过微调；尚未完全集成（见 [Issue #11078](https://github.com/unslothai/unsloth/issues/11078)）。  
- **三元 Bonsai 模型**：暂不支持——用户需手动安装自定义 `llama.cpp` 分支（见 [功能请求 #9059](https://github.com/unslothai/unsloth/issues/9059)）。

#### **4. 性能与优化**  
- **Qwen3.8-Flash-Next MTP**：热修复后实现 **2 倍推理速度提升**（用户反馈并经 CI 验证）。  
- **GGUF 推理吞吐量**：`v0.1.810-beta` 中出现回归，导致吞吐量下降——即使硬件与模型配置相同，用户仍报告明显变慢 ([Issue #11221](https://github.com/unslothai/unsloth/issues/11221))。  
- **内存效率**：使用 `--ctx-checkpoints 64 --checkpoint-min-step 256` 实现 CPU/GPU 间卸载，显著改善 200k 上下文窗口的内存占用（见 [Issue #11278](https://github.com/unslothai/unsloth/issues/11278)）。  
- **内核级优化**：PR #5933 引入 **Muon 优化器**（Newton-Schulz 正交化），适用于全量微调——提升线性投影层的收敛性。

#### **5. 稳定性与回归**  
- **严重**：**Qwen3.8-Flash-Next MTP 在加载时崩溃**，因重基后 `nextn.hc_head_norm` 不匹配所致 ([Issue #11143](https://github.com/unslothai/unsloth/issues/11143))。已在 PR #11309 修复（待合并）。  
- **高危**：**MTP 草稿器在 RTX 5080 上崩溃**，图形构建阶段触发 `ggml_can_repeat(b, a)` 断言 ([Issue #11219](https://github.com/unslothai/unsloth/issues/11219))。  
- **ROCm 断言错误**：DFlash 侧车 + `--split-mode tensor` 导致 ROCm（gfx1201）静默失败，自动降级为层拆分 ([Issue #11308](https://github.com/unslothai/unsloth/issues/11308))。  
- **Windows 安装程序漏洞**：PowerShell 脚本因用户名含空格（如 `HOMEPC~1`）而失败，且应用执行别名阻塞 Python 运行 ([Issue #11290](https://github.com/unslothai/unsloth/issues/11290)，[PR #5959](https://github.com/unslothai/unsloth/pull/5959))。  
- **UI 回归**：自 `v0.1.810-beta` 起，Studio 推理吞吐量下降——可能源于后端调度逻辑变更 ([Issue #11221](https://github.com/unslothai/unsloth/issues/11221))。

#### **6. 对应用开发者的影响**  
- **优先使用 v0.1.811-beta** 用于生产推理——尤其当使用 Qwen3.8-Flash-Next 或 AMD GPU 时。  
- 因吞吐量回归，避免在 GGUF 工作负载中使用 `v0.1.810-beta`；在 PR #5482 合并前，建议以 `--max-concurrency=1` 测试。  
- 对于 **多用户部署**，请使用新版 Docker 镜像，并通过 `UNSLOTH_API_MAX_CONCURRENCY` 控制资源隔离。  
- 若部署于 **AMD 平台**，请确保使用 `b11030-mix` 及以上版本；在上游修复落地前，请避免使用 `--split-mode tensor`。  
- **自定义模型支持**（如三元 Bonsai）需手动构建 `llama.cpp`；建议参与贡献至 PR #9059 以实现原生集成。  
- 密切监控 API 日志：`max_tokens` 与 `max_completion_tokens` 不匹配可能导致下游客户端中断 ([Issue #10787](https://github.com/unslothai/unsloth/issues/10787))。  

> ✅ **可操作提示**：在并发控制稳定前，使用 `UNSLOTH_API_QUEUE_POLICY=reject` 防止高吞吐应用过载。  
> 🔗 [GitHub 问题仪表板](https://github.com/unslothai/unsloth/issues?q=is%3Aopen+sort%3Aupdated-desc) | [发布说明](https://github.com/unslothai/unsloth/releases/tag/v0.1.811-beta)

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*