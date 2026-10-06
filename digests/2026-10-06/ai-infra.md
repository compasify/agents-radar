# AI 基础设施日报 2026-10-06

> 生成时间: 2026-10-06 02:28 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目 AI 基础设施生态报告 – 2026-10-06**

---

### **1. 生态概览**  
2026年第四季度，AI 推理基础设施生态正迅速成熟，表现为推理引擎、模型运行时优化以及原生代理工具的深度专业化。各项目正聚焦于下一代模型（如 GLM-5.3-Flash、Qwen3.8系列、DeepSeek-V4.1）的高性能、低延迟推理，重点涵盖分布式执行、多模态支持和推测解码。AMD ROCm 支持已成为战略竞争焦点，而 NVIDIA SM100/GB10 硬件采用速度持续加快。当前生态已分化为两类：*高吞吐、多 GPU 服务化平台*（vLLM、SGLang）与 *轻量级、本地优先运行时*（llama.cpp、Ollama），LiteLLM 和 Unsloth 则在集成与微调环节扮演关键角色。

---

### **2. 活跃度对比**  

| 项目       | 开放问题数（↑） | 已合并 PR 数（↑） | 发布状态       |
|---------------|------------------|------------------|------------------------|
| **vLLM**      | 98               | 717              | v0.31.0（稳定版）       |
| **SGLang**    | 87               | ~200             | 无新版本发布         |
| **llama.cpp** | 115              | 112              | v0.6.0（重大更新）  |
| **Ollama**    | 124              | ~100             | 无新版本发布         |
| **LiteLLM**   | 112              | ~150             | 补丁版本待发布     |
| **Unsloth**   | 94               | ~120             | 无新版本发布         |

> ✅ *vLLM 和 llama.cpp 在开发活跃度上领先；Ollama 与 Unsloth 问题密度更高，反映稳定性挑战。*

---

### **3. 模型支持竞赛**  

| 新模型 / 架构       | 支持项目                          | 备注 |
|-------------------------------|----------------------------------------|------|
| **GLM-5.3-Flash (320B 混合)** | ✅ **vLLM**, ✅ **llama.cpp**, ⚠️ SGLang（追踪中） | 仅 vLLM 与 llama.cpp 提供完整原生支持；llama.cpp 在 MTP 规范 + 视觉输入方面领先 |
| **Qwen3.8-2.4T-A95B (ROCm)**   | ✅ **vLLM**（ROCm），✅ **SGLang**（部分） | vLLM 是唯一支持完整 ROCm+MXFP8 融合的项目 |
| **DeepSeek-V4.1-Flash**        | ✅ **vLLM**（SM100 + NVFP4 KV 缓存），✅ **SGLang**（追踪中），⚠️ **llama.cpp**（MTP 规范） | vLLM 在性能优化方面占据主导 |
| **Clef 决策模型（视觉+文本）** | ✅ **llama.cpp**（原生），⚠️ Ollama（有限） | 仅 llama.cpp 完全原生支持多模态输入 |
| **Kimi-K3 Quark FP8/MXFP4**    | ✅ **SGLang**（ROCm），⚠️ vLLM（实验性） | SGLang 在 AMD 特定融合工作负载上领先 |

> 🏆 **胜者：vLLM** – 最全面的模型与硬件支持，尤其在 NVIDIA SM100 及 ROCm 优化架构方面。

---

### **4. 性能前沿**  

| 优化方向           | 领先项目                     | 关键进展 |
|-------------------------------|---------------------------------------|------------------|
| **KV 缓存效率**       | ✅ vLLM（NVFP4 + FlashMLA），✅ SGLang（DCP） | vLLM 通过 NVFP4 压缩实现约 2 倍内存节省 |
| **推测解码**      | ✅ vLLM，✅ SGLang，✅ llama.cpp（MTP） | vLLM 在吞吐提升上领先（解码 +11%）；SGLang 推进 DCP 进展 |
| **批处理与上下文并行** | ✅ SGLang（Prefill CP for MLA），✅ vLLM（多 GPU 数据并行） | SGLang 在大型 MLA 模型预填充并行上突破边界 |
| **量化与内核融合** | ✅ vLLM（MXFP8 + 反向 RoPE），✅ SGLang（Kimi-K3 FP8 融合），✅ llama.cpp（MMQ/NVFP4） | vLLM 与 SGLang 在后端特定内核优化上占优 |
| **多 GPU 与去中心化** | ✅ vLLM（/derender），✅ SGLang（DCP/CP），⚠️ Ollama（有限） | vLLM 提供最成熟的去中心化服务 API |

> 🔥 **前沿焦点**：在 **SM100 GPU**（NVIDIA）与 **ROCm GCN/MI355X**（AMD）上实现高效推理，同时对 **上下文感知批处理** 与 **MoE 感知调度** 的关注度日益提升。

---

### **5. 层级定位**  

| 项目       | 主要层级                | 角色摘要 |
|---------------|-------------------------------|-------------|
| **vLLM**      | **服务引擎**            | 高吞吐、GPU 优化推理引擎；云规模大模型服务的核心 |
| **SGLang**    | **服务引擎 + 运行时**  | 专攻上下文并行与推测解码；连接推理与编排的桥梁 |
| **llama.cpp** | **本地运行时 / 嵌入式**  | 轻量级、跨平台推理引擎，针对边缘与桌面部署优化 |
| **Ollama**    | **网关 / 本地运行时**   | 开发者友好的 CLI/工具链；作为多种后端（MLX/CUDA/ROCm）的接入网关 |
| **LiteLLM**   | **API 网关 / 编排层** | 通用代理层，用于成本追踪、路由与多提供商管理 |
| **Unsloth**   | **微调与训练体验** | 全流程 LoRA 训练与导出工作流；聚焦模型适配的开发者体验 |

> 📊 *vLLM 与 SGLang 是主流高性能推理引擎；llama.cpp 与 Ollama 作为可访问的运行时层；LiteLLM 与 Unsloth 位于集成与训练层。*

---

### **6. 趋势信号**  

#### 🔍 **从今日活动提取的关键行业趋势**：
1. **ROCm 已成第一优先目标** – vLLM 与 SGLang 在 AMD 硬件支持（ROCm 101 RC、MI355X、A95B）上取得显著进展，表明 **NVIDIA 主导地位正面临挑战**。
2. **推测解码正超越“草稿”阶段** – MTP 式推测（llama.cpp）、混合 GDN 布局（vLLM）、上下文并行（SGLang）显示，推理正转向面向智能体的 **预测性、状态感知** 模式。
3. **混合模型呼唤混合接口** – GLM-5.3-Flash（320B）与 Clef（视觉+文本）的兴起，要求 **混合输入批处理接口**（`llama_batch_ext`、`VLLM_USE_RUST_FRONTEND`），推动开发者采用更丰富的接口设计。
4. **生产环境更重稳定性 > 速度** – Ollama、SGLang 与 Unsloth 出现多个高严重性回归，表明 **性能提升正被模型特异性解析与内存管理复杂度的增长所抵消**。
5. **Rust 前端接近功能对齐** – vLLM 的 `VLLM_USE_RUST_FRONTEND=1` 即将完成全引擎集成，预示着 **关键系统中将向低延迟、高吞吐部署演进**。

#### 🎯 **应用开发者应重点关注**：
- 若使用 MTP 或多模态输入，请立即采用 `llama_batch_ext` —— 旧接口已弃用。
- 在 NVIDIA SM100/GPU 上需要高并发的生产推理场景，优先选择 vLLM。
- 仔细监控 Ollama Cloud 的计费指标 —— 迁移后用量报告仍存在偏差。
- 在补丁发布前，避免使用 `glm-ocr:latest` 与 `Muse-Glimmer-30B` —— 两者均存在严重输出质量问题。
- 在多租户环境中，使用 LiteLLM 的自助预算策略（`self_serve_budget_policy`）以防止超额费用。

> ✅ **结论**：基础设施栈演进迅速——**根据使用场景选择技术栈**：  
> - **大规模、低延迟服务？→ vLLM**  
> - **含推测解码的智能体工作流？→ SGLang + vLLM**  
> - **边缘或本地部署？→ llama.cpp**  
> - **开发便捷性 + 多后端访问？→ Ollama + LiteLLM**  
> - **微调与 LoRA 导出？→ Unsloth**

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-10-06**

---

### **1. 今日亮点**  
vLLM v0.31.0 版本为 **DeepSeek-V4.1-Flash** 带来显著性能提升，通过 FlashMLA 与 NVFP4 压缩的 KV 缓存实现 SM100 默认支持，并引入 DeepGEMM 稀疏 MQA logits。关键稳定性修复涵盖推测解码正确性、量化下 MoE 内核正确性，以及数据并行多 GPU 协调问题。近期提交数量激增，主要集中在去中心化服务、工具调用鲁棒性及 ROCm/AMD 硬件优化方向。

---

### **2. 发布与破坏性变更**  
- **v0.31.0**（发布日期：2026-10-05）  
  - [GitHub 发布页](https://github.com/vllm-project/vllm/releases/tag/v0.31.0)  
  - 包含来自 307 名贡献者的 717 次提交（其中 96 人为新贡献者）。  
  - 未报告破坏性 API 变更；向后兼容性得以维持。  
  - **注意**：`VLLM_USE_RUST_FRONTEND=1` 仍为实验性功能，但现已支持完整引擎集成。

---

### **3. 新模型与硬件支持**  
- **模型支持**：  
  - 通过专用优化追踪器，全面支持 **Qwen3.8-2.4T-A95B-gfx950 / MI355X**（ROCm）([#57149](https://github.com/vllm-project/vllm/issues/57149))。  
  - 实验性支持 **GLM-5.3-Flash** 在 ROCm 上运行([#59413](https://github.com/vllm-project/vllm/issues/59413))，以及 W4A16 量化下的原生推理([#56868](https://github.com/vllm-project/vllm/issues/56868))。  
  - **Qwen3-Omni** 现已正确处理音频/视频输入场景下的交错 M-RoPE 边界问题([PR #59842](https://github.com/vllm-project/vllm/pull/59842))。  

- **硬件与后端**：  
  - **ROCm (AMD)**：为 Qwen3-Next/Qwen3.5 启用融合的 QK-norm+RoPE+gate Triton 内核([PR #51406](https://github.com/vllm-project/vllm/pull/51406))，并为 DeepSeek-V4/V4.1 aiter 后端启用 MXFP8 + 反向 RoPE 融合([PR #60154](https://github.com/vllm-project/vllm/pull/60154))。  
  - **CUDA (NVIDIA)**：为 DeepSeek-V4.1 默认启用 SM100 的 FlashMLA 与 NVFP4 压缩 KV 缓存([#56935](https://github.com/vllm-project/vllm/issues/56935))。  
  - **GB10 (DGX Spark)**：正在进行性能剖析与权重加载优化([#58726](https://github.com/vllm-project/vllm/issues/58726))。

---

### **4. 性能与优化**  
- **DeepSeek-V4.1-Flash**：FlashMLA + NVFP4 KV 缓存在 SM100 GPU 上实现约 2 倍内存效率提升，并显著加快预填充与解码速度([#56935](https://github.com/vllm-project/vllm/issues/56935))。  
- **推测解码**：  
  - 全图重播期间减少冗余 DFlash 元数据重建 → **解码吞吐量提升 11%**([PR #54485](https://github.com/vllm-project/vllm/pull/54485))。  
  - 修复混合 GDN 布局下 MTP 推测解码时前缀缓存命中丢失问题 → 在高复用工作负载中实现 **约 30–40% 批次吞吐量提升**([PR #52244](https://github.com/vllm-project/vllm/pull/52244))。  
- **内核级优化**：  
  - 小 Engram 查找采用双行分块，在 GB300 用户负载下将延迟降低 **6.1–28.1%**([PR #57893](https://github.com/vllm-project/vllm/pull/57893))。  
  - Triton 注意力保留小规模 FP8 softmax 权重通过可逆缩放 → 防止令牌损坏([PR #60156](https://github.com/vllm-project/vllm/pull/60156))。  
- **启动时间**：通过守护进程预加载 FlashInfer 自动调优表 → 显著降低高并发部署的冷启动延迟([PR #60085](https://github.com/vllm-project/vllm/pull/60085))。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 修复 PR |
|---------|------|--------|----------|
| 🔴 高 | **GLM-5.3-Flash 长序列解码退化**，累积推理后出现 | 开放 ([#56868](https://github.com/vllm-project/vllm/issues/56868)) | 待定 |
| 🔴 高 | **Qwen3.8-flash-next 在去中心化 PD 服务中 0% 的 MTP 接受率** | 开放 ([#59642](https://github.com/vllm-project/vllm/issues/59642)) | 待定 |
| 🟡 中 | **DeepSeek-V4-Flash 在 B300 (SM100) 上因内核启动失败无法启动** | 开放 ([#46796](https://github.com/vllm-project/vllm/issues/46796)) | 进行中 |
| 🟡 中 | **使用 MTP 推测解码时 `prompt_logprobs` 静默损坏** | 开放 ([#53488](https://github.com/vllm-project/vllm/issues/53488)) | 进行中 |
| 🟢 低 | **FlashInfer sampler JIT 在未找到 `nvcc` 时崩溃** | 开放 ([#49497](https://github.com/vllm-project/vllm/issues/49497)) | 临时方案：使用原生 sampler |

---

### **6. 对应用开发者的意义**  
- **对智能体与 LLM 应用**：预计在 **DeepSeek-V4.1-Flash** 与 **Qwen3.8 系列**模型上获得更高性能与稳定性，延迟更低、吞吐更高。使用 `VLLM_BATCH_INVARIANT=1` 时需谨慎——近期修复确保了 MoE 门路由与注意力内核的一致性([PR #59985](https://github.com/vllm-project/vllm/pull/59985), [#60122](https://github.com/vllm-project/vllm/pull/60122))。  
- **对生产环境服务**：启用 **去中心化推理**（`/render`, `/inference/v1/generate`, `/derender`）以实现对分词与反分词的细粒度控制——现通过 RFC 驱动的端点设计更加稳健([#56851](https://github.com/vllm-project/vllm/issues/56851), [#42729](https://github.com/vllm-project/vllm/issues/42729))。  
- **对模型运维团队**：关注 **Rust 前端路线图**([#44280](https://github.com/vllm-project/vllm/issues/44280))——其正逐步接近与 Python API 平齐，适用于低延迟、高吞吐部署。  
- **对使用工具或代码生成的开发者**：**工具调用解析器** 现在对格式错误的 JSON 更具鲁棒性([PR #54844](https://github.com/vllm-project/vllm/pull/54844), [#50933](https://github.com/vllm-project/vllm/pull/50933))，显著提升与 Claude Code 等代理客户端的可靠性。

> 💡 **实用提示**：若在 AMD ROCm 上部署，请优先选用 **Qwen3.8-2.4T-A95B**，并应用最新 PR 以启用融合内核与 MXFP8 量化。对于 NVIDIA 用户，启用 `--kv-cache-dtype fp8` 与 `--enable-sleep-mode` 以实现高效内存管理。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 消息简报 – 2026-10-06**

---

### **1. 今日重点**  
SGLang 项目持续推进下一代模型与硬件的推理优化，已在 MLA 架构（如 Dpsk v3/Kimi-K2.5）的**预填充上下文并行（CP）**方面取得显著进展，同时正扩展对 MHA/GQA 后端（包括 FlashInfer 和 TRTLLM-MHA）的 CP 支持。新提交的 PR 展示了对 ROCm/AMD 生态系统的持续增强，特别是在 GLM-5 与 DeepSeek-V3.2 中实现的**解码上下文并行（DCP）**，以及扩散流水线中 LoRA 合并的关键修复和调度器稳定性提升。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告新版本发布或破坏性变更。*

---

### **3. 新模型与硬件支持**  
- ✅ **ROCm/AMD 支持**：  
  - 通过 PR #42618 ([#42618](https://github.com/sgl-project/sglang/pull/42618)) 为 GLM-5 与 DeepSeek-V3.2 添加了**解码上下文并行（DCP）**。  
  - 继续通过 PR #41794 ([#41794](https://github.com/sgl-project/sglang/pull/41794)) 集成 **Kimi-K3 Quark FP8/MXFP4 融合**于 AMD 平台。  
  - ROCm 101 RC 现已在 PR #42016 ([#42016](https://github.com/sgl-project/sglang/pull/42016)) 中追踪。

- ✅ **硬件与架构**：  
  - 通过 PR #30705 ([#30705](https://github.com/sgl-project/sglang/pull/30705)) 为扩散工作流全面启用 **SM12.x GPU** 支持（RTX PRO 6000 Blackwell、RTX 50xx、DGX Spark GB10）。  
  - **B300** 的实验性支持已用于 MegaMoE 且支持 MXFP8/W4A8 量化（注意：根据 #37559，当前仍存在 CUDA_ERROR_ILLEGAL_ADDRESS 问题）。

- ✅ **模型特有支持**：  
  - **DeepSeek-V4.1** 的跟踪与优化正在进行中，相关议题为 #42170 ([#42170](https://github.com/sgl-project/sglang/issues/42170))。  
  - **MiniMax-H3** 现在在 8×B300 上支持 `quality=high` 级别（此前仅拓扑锁定为 4×H200），但部署需绕过验证限制 ([#33720](https://github.com/sgl-project/sglang/issues/33720))。

---

### **4. 性能与优化**  
- 🔧 **预填充 CP 进展**：  
  - 预填充 CP 已完全支持 **MLA 模型（Dpsk v3/Kimi-K2.5）** 与 **SWA 启用模型**。  
  - 正在推进对 **FlashInfer/TRTLLM-MHA 后端** 的扩展支持 (#31732)。  
  - 路线图里程碑：**预填充上下文并行（2026年第三季度）** — 议题 #21788 ([#21788](https://github.com/sgl-project/sglang/issues/21788))。

- ⚡ **内核与内存优化**：  
  - 为 Kimi-K3 FP8 路径引入基于 Cake 的投影缓存机制，使 GB300 上每次调用的主机开销从约 100μs 降低至亚微秒级别 ([#42698](https://github.com/sgl-project/sglang/pull/42698))。  
  - 为 CuteDSL SM10X BF16 GEMM 增加 **SplitK 支持**，以提升小规模 N 的吞吐量 ([#33893](https://github.com/sgl-project/sglang/pull/33893))。  
  - **共享专家到稀疏专家融合**功能正在 SM120 上开发，适用于 Qwen3.5/Qwen3.6 MoE ([#33706](https://github.com/sgl-project/sglang/issues/33706))。

- 📈 **吞吐量提升**：  
  - **GLM-5.3-Flash** 在使用 `deep_gemm` 后端时相比 `flashinfer_trtllm` 最多可提升 **1.3 gsm8k 分数**（见 #39797），表明 FlashInfer 路径仍有优化空间。

---

### **5. 稳定性与回归问题**  
⚠️ **严重错误（高优先级）**：  
- **调度器死锁 / 假死**：  
  - 空闲循环不变量检查中出现 `double free or corruption` 导致服务器永久假死 ([#42508](https://github.com/sgl-project/sglang/issues/42508))。  
  - **HiCache + DeepSeek-V4** 搭配 `write_through` 在长预填充场景下引发 TP rank 死锁；调度器与解码器静默无响应 ([#42465](https://github.com/sgl-project/sglang/issues/42465))。

⚠️ **功能与正确性问题**：  
- **KV 缓存事件模式错位**：混合 SWA + radix 缓存触发准入活锁，因 SWA 前缀锁导致块被截断 ([#41579](https://github.com/sgl-project/sglang/issues/41579))。  
- **健康检查孤儿请求**：`/health` 处理器超时不会取消请求 → 分页预填充批处理崩溃 ([#35884](https://github.com/sgl-project/sglang/issues/35884))。  
- **LoRA 合并崩溃**：`--lora-merge-mode auto` 静态合并加载后的 FP8 权重 → 导致崩溃 ([#35970](https://github.com/sgl-project/sglang/issues/35970)；已在 [#35975](https://github.com/sgl-project/sglang/pull/35975) 修复)。

🛠️ **已知非活跃问题**：  
- B300 上的 MXFP8FP4/W4A8 MegaMoE 路径中存在 CUDA_ERROR_ILLEGAL_ADDRESS 问题 ([#37559](https://github.com/sgl-project/sglang/issues/37559)) — 尚无修复方案。  
- Kimi-K3 KDA 在 MI350X 上使用 DSPARK 规划解码时预填充卡死 ([#33846](https://github.com/sgl-project/sglang/issues/33846))。

---

### **6. 对应用开发者的影响**  
- **充分利用 DCP 与 CP**：对大型 MLA 模型（如 Kimi-K3、Dpsk v3）使用 `--dcp-size` 与 `prefill_cp` 标志，可降低 KV 缓存内存占用，并实现跨 GPU 扩展。  
- **避免 LoRA 合并陷阱**：使用在线 FP8 量化时，建议将 `--lora-merge-mode` 设置为 `dynamic`，防止静态合并导致崩溃。  
- **谨慎使用 HiCache + write_through**：在 #42465 修复前，避免在突发长提示场景下使用该配置。  
- **监控健康检查**：若在编排系统（如 Kubernetes）中使用 `/health` 端点，请留意孤儿请求引发的批次失败风险。  
- **使用最新夜间构建**：获取最新的 ROCm/AMD 支持及性能补丁（尤其涉及 DCP 与内核融合功能）。  

> 🔗 **推荐关注**：[议题 #21788](https://github.com/sgl-project/sglang/issues/21788) 了解预填充 CP 进展，[PR #42618](https://github.com/sgl-project/sglang/pull/42618) 了解 GLM-5/DeepSeek-V3.2 的 DCP 支持。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp 消息简报 – 2026-10-06**

---

### **1. 今日亮点**  
`v0.6.0` 版本引入了批处理 API 的重大重构，新增 `llama_batch_ext`，支持混合输入（令牌 + 嵌入向量），并原生支持 MTP/深栈状态嵌入——这对高级推测性解码工作流至关重要。本版本还新增对 **GLM-5.3-Flash (GLM5-Next) 320B 混合模型**、**Clef 决策模型（文本 + 视觉）** 的支持，并对 Hexagon、Vulkan 及 CUDA 后端进行了基础优化，提升可扩展性与正确性。

---

### **2. 发布与破坏性变更**  
- **`v0.6.0`** ([发布说明](https://github.com/ggml-org/llama.cpp/releases/tag/v0.6.0))  
  - 引入 `llama_batch_ext` 扩展批处理 API，配合 `llama_process` 支持混合输入类型（令牌 + 嵌入向量），适用于 Clef 及 MTP 推理等场景。  
  - 新增对 **GLM-5.3-Flash (GLM5-Next) 320B**、**Clef（视觉+文本）** 和 **MTP 规范** 的支持。  
  - 迁移提示：使用 `llama_batch` 的现有批处理接口已弃用，推荐迁移至 `llama_batch_ext`。详见 [PR #29622](https://github.com/ggml-org/llama.cpp/pull/29622) 获取迁移指引。

---

### **3. 新模型与硬件支持**  
- **模型**:  
  - ✅ **GLM-5.3-Flash (GLM5-Next) 320B** – 通过 `llama_batch_ext` 和 MTP 规范实现完整支持，采用混合架构。  
  - ✅ **Clef 决策模型** – 服务端现已原生支持视觉与文本模态输入（`server: support vision input for Clef` – [PR #29969](https://github.com/ggml-org/llama.cpp/pull/29969)）。  
  - ✅ **MTP 规范** – 正式支持基于 MTP 风格的推测性解码，包含深栈状态嵌入。

- **硬件与后端**:  
  - ✅ **Hexagon (高通)**：新增 `POOL_1D`/`POOL_2D` 支持（用于 Gemma 4 CLIP），优化 HTP DMA 流水线与边界处理 ([PR #29995](https://github.com/ggml-org/llama.cpp/pull/29995))。  
  - ✅ **CUDA**：优化 NVFP4 类型的 `mmq` 累加；修复 `alloc_deps` 批次独立性问题 ([PR #29986](https://github.com/ggml-org/llama.cpp/pull/29986), [PR #29857](https://github.com/ggml-org/llama.cpp/pull/29857))。  
  - ✅ **Vulkan**：修复 Flash Attention 中越界写入及预分配 `prealloc_y` 重用问题 ([PR #29988](https://github.com/ggml-org/llama.cpp/pull/29988), [PR #29591](https://github.com/ggml-org/llama.cpp/pull/29591))。  
  - ✅ **ROCm/HIP**：针对 GCN 调优及 MMQ 配置优化的多项 PR ([PR #30022](https://github.com/ggml-org/llama.cpp/pull/30022), [PR #30021](https://github.com/ggml-org/llama.cpp/pull/30021))。

---

### **4. 性能与优化**  
- **Hexagon**:  
  - `HMX matmul` 现在支持 F16 激活 + F16/F32 权重，且行数非 32 的倍数也可运行 ([PR #29626](https://github.com/ggml-org/llama.cpp/pull/29626))。  
  - 将 3D matmul 展平为 2D，提升 HMX 上多序列吞吐效率 ([PR #29779](https://github.com/ggml-org/llama.cpp/pull/29779))。  
- **Vulkan**:  
  - RMSNorm 使用子组归约进行优化（开发中 – 已在 Intel B70 Arc Pro 与 RTX 4060 Ti 上测试）([PR #29882](https://github.com/ggml-org/llama.cpp/pull/29882))。  
- **CUDA**:  
  - NVFP4 类型的 `mmq` 性能提升 ([PR #29857](https://github.com/ggml-org/llama.cpp/pull/29857))。  
  - Stream-k 算法针对 AMD GCN 架构调优 ([PR #30022](https://github.com/ggml-org/llama.cpp/pull/30022))。  
- **通用优化**:  
  - `ggml-rpc`：防止 `PAD_REFLECT_1D` 中远程越界写入 ([PR #29915](https://github.com/ggml-org/llama.cpp/pull/29915))。  
  - `llama_server`：重构模态处理逻辑，将模型模态统一归入一个结构体 ([PR #30015](https://github.com/ggml-org/llama.cpp/pull/30015), [PR #30011](https://github.com/ggml-org/llama.cpp/pull/30011))。

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 状态 | 修复/PR |  
|--------|------|------|---------|  
| ⚠️ 高 | **Qwen3.8-Flash-Next 在启用 MTP 时启动崩溃** (`assert at startup`) | 开放 (#29811) | 尚无修复 |  
| ⚠️ 高 | **Vulkan 解码运行 ~7–8 小时后性能下降（空 EOS 回复）** | 开放 (#29526) | 正在处理；疑似 GPU fence 问题 |  
| ⚠️ 中 | **CUDA 解码速度随上下文长度线性下降（Qwen4exp）** | 开放 (#28734) | 尚无修复 |  
| ⚠️ 中 | **3 显卡多 GPU 张量模式崩溃** | 开放 (#26837) | 在 3×3090 上复现；可能为图或内存布局问题 |  
| ⚠️ 中 | **自 #29184 起，Qwen3.6-35B-A3B 提示处理速度慢约 2 倍** | 已关闭 (#29980) | 由融合共享专家导致的回归；正在调查 |  
| ⚠️ 低 | **部分媒体截断被拒绝** | 已关闭 (#24076) | 修复已合并；不再允许 |  

> 🔥 *在多 GPU、长时间运行及大上下文场景下仍存在关键稳定性问题——尤其在 Vulkan 与 CUDA 平台上。*

---

### **6. 对应用开发者的影响**  
- **立即使用 `llama_batch_ext`**，任何需要 **混合输入类型** 的应用（如视觉 + 文本提示、MTP 草稿推理）均应迁移。旧版 `llama_batch` API 将逐步淘汰。  
- **充分利用新推出的 MTP 规范支持**，实现 GLM-5.3-Flash 与 Qwen3.8-Flash-Next 等大模型的低延迟推测性解码。  
- **避免长期运行 Vulkan 服务器**，直至 #29526 修复——预计运行约 8 小时后可能出现空 EOS 回复。  
- **谨慎使用多 GPU 张量模式**——已在 3+ 显卡上报告崩溃；建议改用 `--split-mode layer`。  
- **若部署于高通 SoC（如 Snapdragon X Elite）设备，优化 Hexagon 设备适配**；近期池化与矩阵乘优化显著提升效率。  
- **得益于专用模型支持与 `llama-server` 中的视觉输入处理，预期 Clef 与 GLM-5.3-Flash 的可靠性更高**。

👉 **可操作建议**：升级至 `v0.6.0`，审计所有批处理逻辑以确保兼容 `llama_batch_ext`。使用 `--spec-type draft-mtp` 时需谨慎——务必验证是否受已知回归影响（如 Qwen3.8-Flash-Next）。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-06**

---

### **1. 今日亮点**  
Ollama 生态系统持续成熟，MLX 引擎在稳定性与性能方面聚焦改进，尤其体现在 GPU 内存驻留和推测解码上。报告了影响 `glm-ocr`、`clef-flash` 以及 `Muse Glimmer` 模型的严重回归问题，凸显出模型特定解析器兼容性与量化处理仍面临挑战。与此同时，核心基础设施的 PR 修复了长期存在的请求流式传输、环境配置溢出及云使用情况上报等问题。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未发布新版本。*  
然而，**Ollama Cloud** 已完成**按需付费迁移**，但 API 仍暴露过时的订阅制用量指标（参见 [Issue #18653](https://github.com/ollama/ollama/issues/18653)）。这可能导致计费仪表盘与成本监控工具出现偏差，直至后端完全对齐。

---

### **3. 新模型与硬件支持**  
- **MLX 引擎**：通过 PR [#18780](https://github.com/ollama/ollama/pull/18780) 新增对 **Kolibri 1** 的支持，扩展了 Apple Silicon 设备上的推理能力。  
- **CUDA**：`gemma4:12b` 模型现可在宽头维度（>128）下利用 **MLX SDPA** 进行 CUDA 预填充，显著提升提示处理速度（e2b 上约 12 倍加速，12b 上约 2–4 倍）——参见 PR [#18809](https://github.com/ollama/ollama/pull/18809)。  
- **ROCm（Windows）**：Windows 构建中扩展了 AMD GPU 支持，新增 `gfx1030`、`gfx1150`、`gfx1151`、`gfx1200` 及 `gfx1201` ——参见 PR [#18623](https://github.com/ollama/ollama/pull/18623)。

---

### **4. 性能与优化**  
- **MLX 内存管理**：合并了修复程序 ([PR #18807](https://github.com/ollama/ollama/pull/18807))，每秒刷新一次驻留状态以缓解 GPU 空闲后的高延迟问题，解决 [#18744](https://github.com/ollama/ollama/issues/18744) 问题。  
- **模型查找与决策开销**：减少冗余清单解码，并在决策请求间复用 Metal 临时缓冲区 ——参见 PR [#18806](https://github.com/ollama/ollama/pull/18806)。  
- **推测解码**：通过 PR [#18805](https://github.com/ollama/ollama/pull/18805) 优化回滚后的递归状态压缩，降低推测推理期间的内存占用。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 描述 | 修复状态 |
|---------|-------|-------------|------------|
| 🔴 高 | [#18810](https://github.com/ollama/ollama/issues/18810) | `glm-ocr:latest` 在 0.35.1 版本中出现回归：返回纯文本而非 HTML 表格，陷入循环，“达到令牌重复限制” | 开放 |
| 🔴 高 | [#18769](https://github.com/ollama/ollama/issues/18769) | `clef-flash` 模型在 `/v1/systemone` 失败（CUDA：非有限 logit；CPU：无法打开模型），尽管在 `/v1/chat/completions` 上正常工作 | 开放 |
| 🔴 高 | [#18808](https://github.com/ollama/ollama/issues/18808) | `Muse-Glimmer-30B-GGUF` 无响应；可能源于内部 Jinja 模板 | 开放 |
| 🟡 中 | [#18685](https://github.com/ollama/ollama/issues/18685) | `llama-server` 在全缓存命中任务上卡死；后续所有请求挂起直至卸载 | 开放 |
| 🟡 中 | [#18770](https://github.com/ollama/ollama/issues/18770) | `mistral-medium-3.5:128b` 在 M4 Mac 上消耗过多内存（>127GB）且运行速度低于 1 字/分钟 | 开放 |

> ✅ **已修复**：已合并 MLX 驻留 ([#18807](https://github.com/ollama/ollama/pull/18807)) 与 envconfig 溢出 ([#18800](https://github.com/ollama/ollama/pull/18800)) 相关修复。

---

### **6. 对应用开发者的启示**  
- **避免在 0.35.1 版本中使用 `glm-ocr:latest`** ——请使用旧版本或等待补丁。预计输出质量下降。  
- **在显存受限环境下谨慎使用 `gemma4`** ——`LLAMA_ARG_FIT` 默认禁用；如需启用，请手动覆盖（参见 PR [#16831](https://github.com/ollama/ollama/pull/16831)）。  
- **流式 API 用户需注意 `output_index` 重用问题** ——PR [#18804](https://github.com/ollama/ollama/pull/18804) 修复了工具调用序列中的消息关闭与顺序错乱问题。  
- **云集成应预期缓存令牌报告不一致** ——即使缓存启用，`prompt_eval_cached_count` 仍会在用量提取器中丢失（参见 [Issue #18795](https://github.com/ollama/ollama/issues/18795)）。  
- **在 macOS 上优化 MLX 表现**：谨慎设置 `OLLAMA_KEEP_ALIVE` ——整秒时长可能被误解析为短超时（修复进行中，参见 [PR #18800](https://github.com/ollama/ollama/pull/18800)）。

> 💡 **建议**：密切监控 `mlx` 与 `gemma4` 行为；在回归问题解决前，考虑固定版本。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 消息简报 – 2026-10-06**

---

### **1. 今日重点**  
LiteLLM 项目在模型路由、成本归属以及代理层并发安全性方面进行了大量关键性 Bug 修复和集成测试改进。重要提交（PR）解决了高严重性问题，例如在负载下出现的 `dictionary changed size during iteration` 错误（#44748），以及流式请求的错误计费问题（#42161）。新的集成测试现已覆盖核心端点，包括 `/model_management`、`/budget/update` 和 `/responses`。一项重大修复确保了模型组定价能正确归因于服务部署（#44732）。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未发布新版本。但多个稳定分支上仍有若干补丁版本待发布：  
- `v1.100.5`、`v1.101.5`、`v1.102.3`、`v1.103.4`、`v1.104.1` 已安排发布，包含依赖项更新（#44774、#44773、#44775、#44776、#44777）。这些更新修复了过时的 Python 与仪表板依赖项，但不引入破坏性变更。

> 🔗 [依赖项刷新 PR 列表](https://github.com/BerriAI/litellm/pulls?utf8=%E2%9C%93&q=is%3Aopen+label%3Achore%28release%29)

---

### **3. 新模型与硬件支持**  
今日无新增报告。当前重点仍放在提升现有提供方（如 Gemini、Anthropic、Bedrock、OpenAI 兼容后端）的兼容性和正确性，而非增加新模型或硬件后端。

---

### **4. 性能与优化**  
- **并发与内存**：已定位一个导致并发 `/v1/messages` 调用时出现 `500 {"error": "dictionary changed size during iteration"}` 的关键竞态条件（#44748）。该问题影响大规模使用下的可靠性，将在后续修复中解决。  
- **成本准确性**：修复确保 `input_cost_per_character` 不再被静默忽略（#44200），且即使 `provider_response_model` 为非标准别名，支出日志也能反映正确成本（#42161）。  
- **连接管理**：持续推进空闲连接清理工作（#41420）和无限制透传端点注册表增长问题（#26081），二者均影响低至中等流量场景下的长期稳定性。

> 🔗 [修复：并发 /v1/messages 竞态问题](https://github.com/BerriAI/litellm/pull/44748)  
> 🔗 [修复：流式请求中的成本归属错误](https://github.com/BerriAI/litellm/pull/42161)

---

### **5. 稳定性与回归问题**  
今日主要稳定性关注点如下：

| 问题 | 严重性 | 描述 | 修复状态 |
|------|----------|-------------|------------|
| [`#44748`](https://github.com/BerriAI/litellm/issues/44748) | 严重 | 并发 `/v1/messages` 调用导致 `dictionary changed size during iteration` → 500 错误，尽管支出日志成功记录 | ✅ PR 已开放（#44748） |
| [`#42161`](https://github.com/BerriAI/litellm/issues/42161) | 高 | 流式请求因缺少模型别名的价格映射条目（如过期 Anthropic 构建版本）而记录 `spend = 0` | ✅ PR 已开放（#44732） |
| [`#44535`](https://github.com/BerriAI/litellm/issues/44535) | 高 | Anthropic 返回缺失 usage 对象触发重试循环 → HTTP 500 | ✅ PR 已开放（#44531） |
| [`#44546`](https://github.com/BerriAI/litellm/issues/44546) | 中等 | `aspeech` 调用同步 TTS 提供方两次 → 双倍计费（Gemini） | ✅ PR 已开放（#44546） |

这些问题共同影响计费准确性、系统稳定性及用户体验——尤其在生产规模部署中更为显著。

---

### **6. 对应用开发者的影响**  
- **避免使用未经验证价格映射的模型别名** —— 若使用自定义或带版本号的模型名称（如 `anthropic/claude-3-opus-2026-01-01`），请确保其在 `price_map` 中显式定义，以防止零成本记录（#42161）。  
- **谨慎处理流式请求** —— 若部署使用非标准模型名称，或依赖下游提供方返回不完整的 `usage` 对象，可能遭遇成本计算偏差或重试。  
- **不要假设并发 `/v1/messages` 调用具有幂等性** —— 在 `#44748` 合并前，请避免在无速率限制或请求去重机制的情况下进行高并发调用。  
- **启用自助预算功能**，通过 `general_settings.self_serve_budget_policy`（#44763），让用户无需管理员干预即可自主管理预算。  
- **使用集成测试** —— 近期新增的 `test(integration)` 套件（#44684、#44733、#44736）可保障契约级行为的正确性；建议将其纳入 CI 流水线。

> 🔗 [自助预算功能](https://github.com/BerriAI/litellm/pull/44763)  
> 🔗 [集成测试套件](https://github.com/BerriAI/litellm/pulls?utf8=%E2%9C%93&q=is%3Aopen+label%3Atest%28integration%29)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-10-06**

---

### **1. 今日亮点**  
Unsloth 团队已将重点放在桌面端与 Web UI 的关键稳定性修复及用户体验优化上，特别是在微调中的模型处理、导出工作流和上下文管理方面。主要的代码提交包括：保留 Mac 训练的 LoRA 的聊天模板、修复桌面应用中的音频下载行为，并确保 Qwen3 思维模式在 Chat 与 API 客户端之间的采样一致性。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未检测到新版本发布或破坏性变更。*  
但有若干高优先级的 PR 正在解决可能影响向后兼容性的回归问题：
- [PR #12794](https://github.com/unslothai/unsloth/pull/12794)：修复导出 Mac 训练的 LoRA 时错误使用聊天模板的问题。
- [PR #12795](https://github.com/unslothai/unsloth/pull/12795)：在微调过程中恢复 `EmbeddingGemma` 与 `Qwen3-Embedding` 的默认提示词。
- [PR #12791](https://github.com/unslothai/unsloth/pull/12791)：使 API 采样参数与 Studio 中的 Qwen3 思维模式对齐（temperature 0.6，top_p 0.95）。

---

### **3. 新模型与硬件支持**  
*今日未新增模型或硬件后端支持。*  
但 MoE 支持进展持续推进：
- [PR #12742](https://github.com/unslothai/unsloth/pull/12742)：启用 `fast_inference=True`（vLLM）支持 **Qwen3.5/3.6 MoE** 和 **Gemma-4 MoE**，且在专家层应用了 LoRA —— 这是实现可扩展的混合专家推理的重要一步。

---

### **4. 性能与优化**  
*今日未落地直接的吞吐量或延迟改进*，但持续优化聚焦于内存效率：
- [PR #12752](https://github.com/unslothai/unsloth/pull/12752)：通过优化内存预算逻辑，使 **Qwen-Image-2.1 编辑** 能在 16GB GPU 上运行。
- [PR #12753](https://github.com/unslothai/unsloth/pull/12753)：在高内存系统上，通过推迟非固定块加载时机，改善 MiniMax-H3 的流式行为。
- [PR #12805](https://github.com/unslothai/unsloth/pull/12805)：引入紧凑的环形上下文使用指示器（`3.2k / 131.1k`），在不造成界面杂乱的前提下提升实时反馈体验。

---

### **5. 稳定性与回归问题**  
今日报告了多个关键问题，主要影响用户体验和模型保真度：
- **[Issue #12708](https://github.com/unslothai/unsloth/issues/12708)**：*Think Toggle 无法抑制 `gemma-4-E4B-it-qat-GGUF` 的推理过程* — 输出仅包含内部思考；目前尚无临时解决方案。
- **[Issue #12737](https://github.com/unslothai/unsloth/issues/12737)**：*Qwen3.5 SFT 损失在确定性步骤中变为 NaN* — 在不同学习率/优化器/种子下均可复现；极可能是微调流水线中的梯度不稳定性所致。
- **[Issue #12727](https://github.com/unslothai/unsloth/issues/12727)**：*Studio 在生成时从磁盘加载 `mmproj-F16.gguf`* — 导致严重每秒令牌数下降；用户报告更新后吞吐量下降超过 50%。
- **[Issue #12680](https://github.com/unslothai/unsloth/issues/12680)**：*ARM64 Linux 构建被错误标记为 macOS* — 下载链接指向错误二进制文件；影响 Linux ARM64 用户。

> ✅ **修复进行中**：如 #12794、#12795 和 #12791 等 PR 正致力于解决与模型状态保存和配置漂移相关的核心稳定性问题。

---

### **6. 对应用开发者的启示**  
构建智能体工作流的应用开发者应：
- 避免在未明确通过 vLLM 支持的情况下使用 `fast_inference=True` 与 MoE 模型（当前仅支持 Qwen3.5/3.6 MoE 与 Gemma-4 MoE）。
- 注意导出在 Mac 上训练的 LoRA 时可能出现的行为不一致 —— 确保使用更新后的 `unsloth` 与 `unsloth_zoo` 版本以避免模板丢失 ([PR #12794](https://github.com/unslothai/unsloth/pull/12794))。
- 密切监控上下文消耗情况 —— 最近的缺陷（如 #12727）可能无声地降低性能；建议使用新的环形指示器 ([PR #12805](https://github.com/unslothai/unsloth/pull/12805)) 提升可见性。
- 对于生产部署，若使用自定义量化或长上下文模型，应避免依赖当前版本的 `unsloth-studio` —— 建议锁定到稳定版本，直至回归问题得到修复。

> 🔗 **关键资源**：  
> - [Unsloth GitHub Issues](https://github.com/unslothai/unsloth/issues)  
> - [Unsloth PRs](https://github.com/unslothai/unsloth/pulls)  
> - [Unsloth Studio Release Notes](https://github.com/unslothai/unsloth/releases)

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*