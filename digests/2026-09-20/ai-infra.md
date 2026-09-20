# AI 基础设施日报 2026-09-20

> 生成时间: 2026-09-20 00:27 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-09-20**

---

### **1. 生态概览**  
AI推理与服务生态正进入*深度专业化与跨层集成*阶段，由多模态、MoE及结构化输出模型的兴起所驱动。关键项目在多种硬件（NVIDIA、AMD、Intel及移动SoC）上实现高性能执行的同时，也在持续应对分布式工作流稳定性、推测性解码和代理可靠性等挑战。工具调用解析、内存安全及跨GPU运行时处理等核心基础设施仍存在明显缺口，表明尽管性能有所提升，健壮性仍是顶级难题。

---

### **2. 活动对比**  

| 项目       | 开放问题（高/严重） | 近72小时合并的PR | 近24小时发布 | 状态 |
|---------------|-----------------------------|------------------------|---------------------|--------|
| **vLLM**      | 13 (4 × 🔴)                 | 8                      | 无                | 稳定 |
| **SGLang**    | 15 (3 × 🔴)                 | 6                      | 无                | 活跃 |
| **llama.cpp** | 14 (3 × ⚠️/🔴)              | 9                      | 1 (v.b11057)        | 已修复 |
| **Ollama**    | 12 (4 × 🔴)                 | 3                      | 无                | 退化 |
| **LiteLLM**   | 8 (2 × ⚠️/🔴)               | 5                      | 无                | 演进中 |
| **Unsloth**   | 10 (4 × 🔴)                 | 7                      | 无                | 功能丰富 |

> ✅ *洞察*：vLLM与llama.cpp在活动量上领先，但Ollama与Unsloth表现出更高的严重回归集中度，表明面向用户的部署管道存在不稳定性。

---

### **3. 模型支持竞赛**  

| 模型 / 架构         | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|------------------------------|------|--------|-----------|--------|---------|---------|
| **Qwen3.5 / Qwen3.6**        | ✅ (推测解码问题) | ✅ (SM121上缺少DSA后端) | ✅ (ROCm状态泄漏) | ⚠️ (工具调用丢失) | ✅ | ✅ |
| **GLM-5.3-Flash (glm5next)** | ✅ (CPU/KDA路径) | ✅ (SM121上无DSA) | ✅ | ❌ (未列出) | ✅ (通过代理) | ⚠️ (MTP加载崩溃) |
| **Ling 3.0 (Bailing V3)**    | ❌ | ❌ | ✅ (v.b11057) | ❌ | ❌ | ❌ |
| **DeepSeek-V4.1-Flash**      | ❌ | ✅ (稳定) | ❌ | ✅ (DGX Spark DSA问题) | ✅ | ❌ |
| **MoE模型 (如 Kimi-K3, Gemma-4-26B-A4B-it)** | ✅ (混合精度, MLA) | ✅ (可选去重) | ✅ (MoE支持) | ⚠️ (缺失专家权重) | ✅ | ✅ (EXL3后端) |
| **视觉语言 (VL)**     | ✅ (ViT CUDA图) | ❌ | ✅ (Ling 3.0 VL) | ❌ | ❌ | ❌ |

> 🏆 **领先者**：**llama.cpp** 在设备端与边缘模型支持方面领先（Ling 3.0、Hexagon），而**vLLM** 在大规模MoE与多模态服务领域占据主导地位。**Unsloth** 正在通过EXL3成为*量化MoE*部署的新兴领导者。

---

### **4. 性能前沿**  

| 优化重点          | vLLM                          | SGLang                        | llama.cpp                     | Ollama                  | LiteLLM                   | Unsloth                    |
|-------------------------------|--------------------------------|-------------------------------|-------------------------------|-------------------------|---------------------------|----------------------------|
| **KV缓存与卸载**     | ✅ 复制布局检测 | ✅ 统一稀疏性，HiCache TMA分阶段 | ❌ (ROCm状态泄漏) | ❌ (MTP回归)     | ✅ 提示缓存追踪  | ✅ 张量拆分保留 |
| **批处理与预填充**        | ✅ 仅预填充批对齐 | ✅ 立即卷积融合         | ✅ BF16预填充优化  | ❌ (MTP回归)     | ✅ 预留空间防护机制 | ✅ 多驻留GGUF     |
| **量化与内核**    | ✅ 混合 `mxfp4`+`fp8`，XPU MRV2 | ✅ FlashInfer自动调优修复    | ✅ NEON, AVX-VNNI, Hexagon操作 | ❌ (SYCL竞争)          | ✅ FUSE v2路由预测 | ✅ EXL3 (2–8位，分数位) |
| **分布式服务**       | ✅ 弹性EP，CUDA图     | ✅ DP调度器，MoE并行性 | ❌ (多GPU竞争)        | ❌ (混合GPU运行时)  | ✅ MCP预算逻辑    | ✅ ROCm Docker兼容性      |
| **结构化输出**         | ⚠️ 工具调用抑制       | ✅ JSON模式编译    | ✅ `thinks`解析器修复        | ⚠️ 静默工具丢失     | ✅ 流式空值处理 | ✅ 草稿词表修剪修复 |

> 🔥 **前沿热点**：  
> - **CUDA图 + ViT编码器**（vLLM）  
> - **HiCache分阶段 + 统一KV稀疏性**（SGLang）  
> - **EXL3量化用于MoE**（Unsloth）  
> - **提示缓存 + 成本可见性**（LiteLLM）

---

### **5. 层级定位**  

| 项目       | 主要层级             | 核心差异化                                  | 部署角色                     |
|---------------|----------------------------|-------------------------------------------------------|-------------------------------------|
| **vLLM**      | **推理引擎**       | 高吞吐、低延迟的MoE/多模态服务 | 生产推理（云/数据中心） |
| **SGLang**    | **高性能网关**      | 统一缓存、动态路由、结构化输出     | 代理编排、LLM网关   |
| **llama.cpp** | **本地运行时 / 边缘**   | 设备端推理、Hexagon/QC支持、CPU/ARM加速 | 边缘设备、隐私敏感应用 |
| **Ollama**    | **开发者网关**      | CLI优先体验、本地模型托管、快速配置          | 开发环境、原型设计       |
| **LiteLLM**   | **代理与编排**  | 成本控制、多提供商路由、可观测性   | 企业API网关、计费   |
| **Unsloth**   | **微调 + 研发工作室**   | 训练续接、导出安全性、多模型服务器 | 研究、训练流水线        |

> 🧩 **战略洞察**：该技术栈正在分化——**工程师**使用vLLM/SGLang进行生产部署；**开发者**依赖Ollama/llama.cpp实现快速迭代；**运维团队**则依靠LiteLLM实现成本管控与路由管理。

---

### **6. 趋势信号**  

1. **MoE已成为新基准**：所有主要项目均优先支持MoE——vLLM（混合精度）、SGLang（去重）、Unsloth（EXL3）——表明高效、可扩展的专家路由正成为规模化部署的核心方向。

2. **结构化输出稳定性是瓶颈**：工具调用（如 `qwen3-coder`, `minicpm5-2b`）与JSON模式解析中的持续问题揭示，*代理可靠性*已落后于模型能力——预计未来将更关注验证层建设。

3. **硬件多样性加速演进**：对Hexagon（高通）、ROCm（AMD）、Intel XPU及WSL2 DXG桥接的支持，清晰表明向*跨平台推理*迈进的趋势，尤其服务于边缘与移动端场景。

4. **成本可见性 > 原生速度**：LiteLLM聚焦提示缓存节省、FUSE v2预测与限流修复，标志着*成本感知推理*已成为核心需求，而不再仅仅是性能追求。

5. **训练-微调-服务一体化趋势**：Unsloth整合训练续接、导出洁净性与多GGUF支持，反映了日益增长的需求：开发者希望从微调到部署实现*全生命周期管理*。

> 💡 **开发者行动建议**：  
> - 使用 **vLLM** 或 **SGLang** 构建高吞吐代理后端。  
> - 利用 **llama.cpp** 实现设备端或隐私保护推理。  
> - 在部署代理前，密切关注 **Ollama** 与 **LiteLLM** 的工具调用完整性。  
> - 优先选择 **EXL3 (Unsloth)** 或 **混合精度 (vLLM)** 以提升MoE效率。  
> - 所有部署均需审计 **提示泄露风险**（如 ROCm状态损坏）与 **限流配置错误**。

---  
*报告基于GitHub摘要整理：2026-09-20 | 供基础设施工程师与技术决策者参考*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-09-20**

---

### **1. 今日亮点**  
vLLM 项目持续聚焦多模态与大规模 MoE 模型的稳定性与性能优化，核心工作集中在解决 Qwen3.5/3.6 与 GLM-5.3-Flash 在复杂配置（如 MTP、DP/TP、混合量化）下的推测解码问题。一项重要 PR (#57710) 修复了弹性 EP 状态管理中的关键取消安全漏洞，同时正在进行的工作包括追踪 ViT 编码器的完整 CUDA Graph 支持以及跨引擎的更优 KV 传输规划。

---

### **2. 发布与破坏性变更**  
*无*  
过去 24 小时内未发布新版本或破坏性 API/配置变更。最新稳定版本仍为 `v0.28.1rc1.dev580+g385dce36b`。

---

### **3. 新模型与硬件支持**  
- **GLM-5.3-Flash (glm5next)**：正在开发通过 KDA（Kimi Delta Attention）实现 CPU 后端支持，包括对混合 MLA/KDA 模型的 `cpu_kda` 路径追踪 ([#57346](https://github.com/vllm-project/vllm/issues/57346))。  
- **ROCm (gfx950 / MI355X)**：针对 `Qwen3.8-2.4T-A95B-Quark-MXFP4` 模型的持续优化；已识别出 `AITER` 与 `ROCM_ATTN` 后端之间的性能差距 ([#57149](https://github.com/vllm-project/vllm/issues/57149))。  
- **混合精度**：ROCm 对混合 `mxfp4` + `fp8` 检查点的支持正在进行中 ([#57048](https://github.com/vllm-project/vllm/pull/57048))，可支持具备异构专家路由的 Kimi-K3 模型服务。  
- **Intel GPU (XPU)**：MRV2 采样器现已支持在 XPU 上融合 top-k/top-p 采样内核 ([#57277](https://github.com/vllm-project/vllm/pull/57277))。

---

### **4. 性能与优化**  
- **推测解码**：ViT 编码器前向传播的完整 CUDA Graph 支持正在以 RFC 形式追踪 ([#38175](https://github.com/vllm-project/vllm/issues/38175))，预计在多模态工作流中可将解码步骤开销降低约 15–18%。  
- **预填充效率**：一项 PR 通过将 logit 行数与模型状态对齐，改进了仅预填充批次的处理逻辑，减少了扩散模型中的冗余计算 ([#57416](https://github.com/vllm-project/vllm/pull/57416))。  
- **KV 异步卸载**：针对多组 MLA 模型扩展了复制布局检测能力，使跨 TP rank 的卸载更加高效 ([#57652](https://github.com/vllm-project/vllm/pull/57652))。  
- **编译器融合**：正推进将编译器融合迁移至手动融合（追踪于 [#43224](https://github.com/vllm-project/vllm/issues/43224)），旨在提升内核稳定性与控制力。

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 描述 | 修复状态 |
|--------|------|-------------|------------|
| 🔴 严重 | [#57691](https://github.com/vllm-project/vllm/issues/57691) | 在 `_commit_scale_down_elastic_ep` 过程中任务取消导致集群状态损坏且无回滚机制 | ✅ 已在 PR [#57710](https://github.com/vllm-project/vllm/pull/57710) 中修复 |
| 🔴 高 | [#57493](https://github.com/vllm-project/vllm/issues/57493) | ROCm `ROCM_ATTN` 在 gfx1151 上对不同请求返回不一致输出 | ❌ 未修复 |
| 🔴 高 | [#57688](https://github.com/vllm-project/vllm/issues/57688) | DFlash2 推测解码在 xgrammar JSON schema 下确定性失败 | ❌ 未修复（关联 #53777） |
| 🟡 中等 | [#57413](https://github.com/vllm-project/vllm/issues/57413) | V1 调度器缺乏并发部分预填充限制 — 影响长上下文 RAG 工作负载 | ⚠️ 功能请求 |
| 🟡 中等 | [#57423](https://github.com/vllm-project/vllm/issues/57423) | FlashInfer 自动调优配置缓存在引擎启动时于 rank 0 死锁 | ❌ 未修复 |

---

### **6. 对应用开发者的意义**  
- **多模态应用**：若使用 Qwen3-VL、GLM-V 或 Kimi K2.5 并搭配 ViT 编码器，预计将获得基于 CUDA Graph 的推理加速改进。请关注 [#38175](https://github.com/vllm-project/vllm/issues/38175) 获取更新。  
- **结构化输出与工具调用**：在 Qwen3.5/3.6 上使用 `response_format` + `tool_choice: "auto"` 时需谨慎——已知回归问题会导致工具调用被抑制 ([#39929](https://github.com/vllm-project/vllm/issues/39929))；临时解决方案：显式设置 `tool_choice`。  
- **生产级工作负载**：长上下文 RAG 系统（如 >100k tokens）应跟踪 [#57413](https://github.com/vllm-project/vllm/issues/57413)，以恢复 V1 调度器中的并发预填充限制。  
- **特定 GPU 部署**：在 gfx1151 上避免使用 `ROCM_ATTN`，直到修复上线；建议优先选择 `AITER` 路径以保证结果一致性。Intel XPU 用户现在可使用 MRV2 采样器支持 ([#57277](https://github.com/vllm-project/vllm/pull/57277))。  
- **弹性扩缩容**：使用最新构建版本以受益于取消安全的弹性 EP 提交逻辑 ([#57710](https://github.com/vllm-project/vllm/pull/57710))，防止缩容操作期间资源泄漏。

---  
*本摘要由 GitHub 数据于 2026-09-20 整理。订阅 [vLLM Issues](https://github.com/vllm-project/vllm/issues) 以获取实时更新。*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 消息简报 – 2026-09-20**

---

### **1. 今日重点**  
SGLang 项目持续推进高性能推理栈的演进，尤其在内存与缓存管理方面取得显著进展，重点聚焦 HiCache 阶段化和统一 KV 缓存稀疏性。针对 GPU 内核竞争、MoE 专家并行以及 JSON 模式编译的稳定性修复工作正在推进，凸显了在复杂负载下系统鲁棒性的持续关注。路由系统（sgl-router）的重大重构正通过一系列模块化 PR 逐步展开，旨在提升策略表达力与可扩展性。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无报告。*  
未发布新版本或破坏性 API/配置变更。最新稳定版本仍为 `v0.5.20`。

---

### **3. 新模型与硬件支持**  
- ✅ **DeepSeek-V4.1-Flash**：已接入主分支（#40152）；预览集成后（#38798）正在稳定支持。  
- ⚠️ **GLM-5.3-Flash**：v0.5.20 已实现一级支持，但 **由于 TRTLLM/TileLang/FlashInfer 限制，在 SM121（DGX Spark）上尚无可用的 DSA 注意力后端** —— 参见 #40286。  
- 🛠️ **Nemotron Labs Diffusion**：上游化流程跟踪于 #25802；初始模型（`nvidia/Nemotron-Labs-Diffusion-8B`）无需权限即可访问。  
- 🔧 **视频输入预采样**：功能请求 #31828 提议将视频预处理与解码解耦，以实现更优的延迟控制。

---

### **4. 性能与优化**  
- **HiCache TMA 阶段化**：内核级优化（#40278）使 sm_90+ GPU 上主机<->设备传输带宽提升约 **2 倍**（H2D：97 → 192 GB/s；D2H：93 → 183 GB/s），已达拷贝引擎上限。  
- **统一缓存去重**：可选开启 MLA 加载去重（#39565）在 GLM-5.2 W4AFP8（8× H20, TP8）上将 KV 缓存加载时间减少高达 **12.6%**，提升冷启动效率。  
- **FlashInfer 自动调优缓存修复**：PR #40320 解决了 MoE EP>1 启动时自动调优缓存持续被丢弃的问题，避免启动阶段重复调优开销。  
- **线性注意力融合**：PR #40388 实现无损 SANA-Video 立即卷积融合，通过优化卷积-偏置融合，降低延迟 **12.6%**。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 描述 | 状态 |
|---------|------|------|------|
| 🔴 高 | #40320 | MoE EP>1 下因形状不匹配，每次启动时 FlashInfer 自动调优缓存被丢弃 | 开放 |
| 🔴 高 | #40364 | DP 调度器 SIGQUIT 终止 DataParallelController 而非通知 Engine | 开放 |
| 🔴 高 | #39125 | 深层嵌套模式下的 JSON Schema 语法编译导致 DFA 状态爆炸 | 开放 |
| 🟡 中 | #40360 | LMCache MP 会话在预加载回滚时泄漏；回滚钩子无法安全完成收尾 | 开放 |
| 🟡 中 | #40156 | EAGLE 规划解码中 `num_token_non_padded` = 0 → MoE 分发损坏 | 开放 |
| 🟡 中 | #40285 / #40286 | GLM-5.3-Flash 因层名不匹配及 SM121 上缺少 DSA 后端而无法加载 | 开放 |
| 🟢 低 | #31473 | 乐观预填充跨阶段容量阻塞（潜在死锁） | 已关闭 |

> ✅ *注：目前尚未合并任何修复高优先级回归问题的 PR。使用 MoE、JSON 模式或复杂规划解码工作流的大规模部署存在即时风险。*

---

### **6. 对应用开发者的启示**  
- **在 DGX Spark（SM121）上谨慎使用 DeepSeek-V4.1 与 GLM-5.3-Flash**：尽管模型可加载，但 DSA 注意力不可用——降级至非稀疏后端可能影响吞吐量。  
- **部署跨 TP rank 的大型 MoE 模型时启用 `--enable-linker-mla-dedup`**，以减少 KV 缓存加载时间。  
- **在受限解码场景中避免使用深层嵌套或循环的 JSON 模式**，直至 #39125 修复——否则可能引发 CPU 卡死或 OOM。  
- **在高吞吐前缀缓存场景中利用 HiCache 阶段化内核**（#40278），尤其适用于长上下文场景。  
- **期待路由灵活性提升**：正在进行的 sgl-router 重构系列（#39867–#40379）未来将支持基于会话感知、缓存感知及服务等级目标（SLO）的桶选择，实现更智能的工作负载调度。

👉 *建议操作：若运行包含 MoE、分布式引擎或结构化输出的生产推理任务，请密切关注 #40320、#40364 和 #39125。*

---  
*简报数据源自 GitHub：[sgl-project/sglang](https://github.com/sgl-project/sglang)*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 摘要 – 2026-09-20**

---

### **1. 今日亮点**  
最新更新聚焦于对 **Ling 3.0 (Bailing V3)** 及其视觉语言变体的稳定支持，包含专门的解析逻辑以处理生成提示中预打开的 `\<think\>` 块——这对正确使用工具至关重要。后端方面，**Hexagon (高通 AI)** 支持取得显著进展，新增 `TOP_K`、`GEGLU_QUICK` 和 `I32 GET_ROWS` 等操作符，进一步拓展了设备端推理能力。

---

### **2. 发布与破坏性变更**  
- **v.b11057**：为 **Ling 3.0 (Bailing V3)** 添加专用解析器，修复因预打开的 `\<think\>` 标签导致的 `tool_calls` 处理错误。  
  🔗 [PR #28682](https://github.com/ggml-org/llama.cpp/pull/28682) | [发布 b11057](https://github.com/ggml-org/llama.cpp/releases/tag/b11057)  
- **v.b11056–b11054**：Hexagon 后端增强：  
  - 启用 `I32 GET_ROWS` (#29116)  
  - 新增对 `GEGLU_QUICK` 的支持 (#29114)  
  - 优化并修复行分区问题后启用 `TOP_K` 操作符 (#29113)  
  🔗 [Hexagon PRs](https://github.com/ggml-org/llama.cpp/pulls?q=is%3Aopen+label%3Ahexagon+updated%3A%3E%3D2026-09-19)

---

### **3. 新模型与硬件支持**  
- ✅ **Ling 3.0 Flash (Bailing V3)**：为使用该模板的模型添加完整聊天解析支持。  
  🔗 [PR #28682](https://github.com/ggml-org/llama.cpp/pull/28682)  
- ✅ **Ling 3.0 VL (BailingMoeV3VL)**：新增视觉语言模型支持（总参数量 124B，活跃参数 5.1B，混合 KDA + 门控 MLA）。  
  🔗 [PR #29151](https://github.com/ggml-org/llama.cpp/pull/29151)  
- ✅ **Hexagon (高通)**：操作符支持范围扩大，现包含 `TOP_K`、`GEGLU_QUICK` 与 `I32 GET_ROWS`。  
  🔗 [PR #29113](https://github.com/ggml-org/llama.cpp/pull/29113), [PR #29114](https://github.com/ggml-org/llama.cpp/pull/29114), [PR #29116](https://github.com/ggml-org/llama.cpp/pull/29116)  
- ✅ **Qwen4Exp HC Ops**：新增对 Qwen4Exp 中使用的 `hc_pre`（sigmoid 门控）和 `hc_post`（恒等混合）变体的支持。  
  🔗 [PR #29000](https://github.com/ggml-org/llama.cpp/pull/29000)  

---

### **4. 性能与优化**  
- **CUDA**：`ggml-cuda` 现在以每批四个元素的方式转换连续张量（BF16 预填充），提升吞吐量。  
  🔗 [PR #29155](https://github.com/ggml-org/llama.cpp/pull/29155)  
- **Metal**：修复来自 macOS 27 SDK 的弃用警告（`MTLDevice.location`、`MTLGPUFamilyCommon`）。  
  🔗 [PR #29136](https://github.com/ggml-org/llama.cpp/pull/29136)  
- **CPU (NEON)**：为 ARM64 新增向量化 `q8_K_4x4` 与 `q8_K_4x8` 量化内核。  
  🔗 [PR #29153](https://github.com/ggml-org/llama.cpp/pull/29153)  
- **SYCL**：固定内存现在使用正确的设备上下文（修复多 GPU 系统上的 OOM 问题）。  
  🔗 [PR #28895](https://github.com/ggml-org/llama.cpp/pull/28895)  
- **AVX-VNNI**：MSVC 现可自动检测并启用 AVX-VNNI 指令集。  
  🔗 [PR #28297](https://github.com/ggml-org/llama.cpp/pull/28297)  

---

### **5. 稳定性与回归问题**  
- ⚠️ **严重**：**HIP/ROCm** 回归问题：融合门控 Delta Net 操作符在请求间携带递归状态 → 后续补全中会原样输出早期提示文本（**Qwen3.5 / MoE 模型**）。  
  🔗 [问题 #29092](https://github.com/ggml-org/llama.cpp/issues/29092) — *尚未修复；严重等级高。*  
- ⚠️ **高**：**CUDA graphs** 在 RTX 5090 笔记本（sm_120）上导致 GPU 通道挂起（RC 监控器 + Xid 8）；临时解决方案：`GGML_CUDA_DISABLE_GRAPHS=1`。  
  🔗 [问题 #27330](https://github.com/ggml-org/llama.cpp/issues/27330) — *回归问题可能由近期 CUDA graph 优化引入。*  
- ⚠️ **中等**：**SYCL 双 GPU** 加载挂起；可能存在内存分配竞争。  
  🔗 [问题 #27547](https://github.com/ggml-org/llama.cpp/issues/27547)  
- ⚠️ **中等**：**Gemma 4** 在 CUDA 上使用 MTP（Unsloth）时崩溃。  
  🔗 [问题 #25522](https://github.com/ggml-org/llama.cpp/issues/25522)  
- ⚠️ **低**：生成文本中的无效 UTF-8 可能导致解析失败。  
  🔗 [PR #28724](https://github.com/ggml-org/llama.cpp/pull/28724), [PR #29161](https://github.com/ggml-org/llama.cpp/pull/29161) — *修复已存在，但尚未合并。*

---

### **6. 对应用开发者的影响**  
- 🛠️ **工具调用可靠性**：若使用 **Ling 3.0 (Bailing V3)** 或 **Qwen4Exp**，请确保版本不低于 `b11057`——旧版本可能因未处理 `\<think\>` 预打开而误解析工具调用。  
- 📊 **性能提升**：预计在 CUDA 上获得更好的 BF16 预填充速度，在 ARM 设备上实现更优的 NEON 加速。建议启用 `--threads -1` 以自动设置线程数（解决 CPU 超分配问题）。  
- ⚠️ **规避风险**：在修复前，请勿在 RTX 5090 笔记本上使用 `CUDA graphs`。避免在大模型上使用 SYCL 的 `--fit` 选项——内存统计仍存在缺陷。  
- 🌐 **多 GPU 与跨平台兼容性**：对 SYCL 固定内存及 OpenHarmony 兼容性的修复提升了可移植性。如部署至多样化硬件环境，建议在混合平台环境下进行测试。  
- 🔒 **安全性**：构建代理时始终对输出进行无效 UTF-8 清理——当前已通过 AST 中的 `sanitized_text()` 实现（参见 PRs #28724, #29161）。

> 💡 **实用技巧**：在 ROCm 上生产级使用 **MoE 模型** 时，建议避开 `b11057` 版本，直至 #29092 修复完成——状态泄露可能导致敏感提示数据外泄。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-20**

---

### **1. 今日亮点**  
Ollama 持续增强对高级模型功能的支持，针对 Qwen3 与 DeepSeek 模型在工具调用解析和推理内容处理方面的问题进行了关键修复。越来越多的报告指出，在混合 CUDA/ROCm 多 GPU 系统上，推测解码（MTP）存在回归问题以及 GPU 运行时检测异常。与此同时，多个新提交正在解决 DeepSeek 的 `reasoning_content` 字段兼容性问题，并改进 MLX MoE 模型的加载。

---

### **2. 发布与破坏性变更**  
*无*  
过去 24 小时内未发布新版本或破坏性变更。然而，v0.34.x 版本中已报告多个高影响缺陷，包括静默丢失工具调用和 MTP 回退 —— 用户应密切关注更新。

---

### **3. 新模型与硬件支持**  
- **MLX 支持**：PR #18535 通过 MLX 运行器（`POST /api/extract`）原生支持 GLiNER-small-v2.1，使 Apple Silicon 环境下的实体提取成为可能。[GitHub PR #18535](https://github.com/ollama/ollama/pull/18535)  
- **多 GPU 运行时支持**：PR #18545 建议安装程序层面支持同时下载 CUDA 与 ROCm 运行时，这对双 GPU 系统用户（如 RTX 4060 Ti + Radeon 7800 XT）至关重要。[GitHub PR #18545](https://github.com/ollama/ollama/pull/18545)  
- **MoE 模型加载**：Issue #18540 报告因缺少 MoE 专家权重（`experts.switch_glu` 布局），导致无法加载 `mlx-community/gemma-4-26B-A4B-it-qat-4bit`，表明当前对量化版 MoE 变体在 MLX 上的支持尚不完整。[GitHub Issue #18540](https://github.com/ollama/ollama/issues/18540)

---

### **4. 性能与优化**  
- **推测解码性能下降**：Issue #18541 确认 `qwen3-coder:30b` 在使用 MTP 推测解码时出现性能下降，影响推理速度与稳定性，对依赖快速草稿生成的客户端造成影响。[GitHub Issue #18541](https://github.com/ollama/ollama/issues/18541)  
- **基准测试改进**：PR #17480 将 HumanEval 补丁提示加入基准测试套件，使对代码生成任务中推测草稿模型的评估更加真实。[GitHub PR #17480](https://github.com/ollama/ollama/pull/17480)  
- **内存估算优化**：PRs #18197、#18198 与 #18201 旨在通过利用头维度与实测负载来提升显存（VRAM）报告与预测精度 —— 对多 GPU 部署中的动态资源分配至关重要。[GitHub PR #18197](https://github.com/ollama/ollama/pull/18197)

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 描述 | 修复状态 |
|--------|------|------------|-----------|
| 🔴 高 | #18541 | `qwen3-coder:30b` 中 MTP 推测解码性能下降 | 开放 |
| 🔴 高 | #18522 | 在 RTX 4000 Ada 上，`gpt-oss:20b`（MXFP4）出现 CUDA `ADD_ID` 中断 | 已关闭（可能已修复） |
| 🔴 高 | #18509 | 工具调用格式正确却遭拒绝；角色分配错误 | 开放 |
| 🟡 中 | #18548 | Docker + OpenWebUI 环境中未使用 Intel QuickSync iGPU | 开放 |
| 🟡 中 | #18547 | v0.34.2 中模型下载失败（v0.34.1 正常） | 开放 |
| 🟡 中 | #18539 | 升级后“聊天、代码与工作”界面选项缺失 | 已关闭 |

> ⚠️ 重要提示：多个回归问题影响工具调用解析（`qwen3-coder`、`minicpm5-2b`）及推理内容处理（`deepseek-v4.1-flash`、`reasoning_content` 字段），表明代理工作流存在不稳定性。

---

### **6. 对应用开发者的启示**  
- **工具调用可靠性**：在 PR #18538 合并前，请勿依赖 `qwen3-coder` 或 `minicpm5-2b` 的 `tool_calls` —— 模型可能遗漏如 `<tool_call>` 等必要分隔符，导致静默解析失败。建议实现回退逻辑或验证输出结构。[GitHub PR #18538](https://github.com/ollama/ollama/pull/18538)  
- **推理内容处理**：使用 DeepSeek API 合同的客户端必须将 `reasoning_content` 视为备用字段 —— 当前 Ollama 仅在显式映射时才会处理该字段。PR #18536 与 #18543 提出了解决方案。[GitHub PR #18536](https://github.com/ollama/ollama/pull/18536)  
- **多 GPU 部署**：若同时使用 NVIDIA 与 AMD 显卡，预计会出现运行时选择不一致的情况 —— 需手动干预或等待未来安装程序改进（参见 PR #18545）。  
- **模型下载问题**：若在 v0.34.2 中遇到模型拉取失败，请临时降级至 v0.34.1。请关注 #18547 获取修复进展。  

> ✅ **可操作建议**：审计您代理中工具调用与推理内容的处理逻辑。针对 `qwen3-coder`、`deepseek-v4.1-flash` 与 `minicpm5-2b` 进行测试 —— 所有这些模型均存在活跃的解析缺陷。在扩展时使用 `/api/info` 与 `/api/ps` 验证 GPU 显存分配情况。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 消息简报 – 2026-09-20**

---

### **1. 今日亮点**  
LiteLLM 生态系统持续成熟，可观测性、路由精度与安全策略执行能力均取得显著提升。关键更新包括：在管理界面中增强对提示词缓存节省效果的可视化展示，以及 FUSE v2 路由预测能力；同时修复了 MCP 工具发现中的预算逻辑缺陷及 Responses API 流式传输完整性问题。一个严重的速率限制漏洞（问题 #34140）被标记：按团队设置的模型限额被错误地强制为一半容量——此高危问题直接影响成本控制。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新版本发布。*  
但多个 PR 修复了向后兼容却影响深远的问题：
- **PR #42057**：在 Admin UI 中新增对 Capability 与 FUSE v2 路由预测的可见性 —— 提升模型选型时的决策效率。
- **PR #42055**：引入请求粒度的提示词缓存注入与净令牌节省追踪 —— 支持精细化的成本优化分析。
- **PR #42011**：移除示例中默认的 `sk-1234` 主密钥，现从 `LITELLM_MASTER_KEY` 环境变量读取 —— 降低生产部署中凭证泄露风险。

> 🔗 [PR #42057](https://github.com/BerriAI/litellm/pull/42057), [PR #42055](https://github.com/BerriAI/litellm/pull/42055), [PR #42011](https://github.com/BerriAI/litellm/pull/42011)

---

### **3. 新模型与硬件支持**  
*今日未新增模型或硬件后端。*  
但持续工作包括：
- **PR #42006**：同步 OpenRouter 对 `deepseek-v4-flash` 与 `gpt-5.6-sol` 的定价信息，确认可通过代理支持这些模型。
- **Issue #40102**：请求将 `openrouter/openai/gpt-5.6-sol` 添加至 `model_prices_and_context_window.json` —— 待解决。

> 🔗 [PR #42006](https://github.com/BerriAI/litellm/pull/42006), [Issue #40102](https://github.com/BerriAI/litellm/issues/40102)

---

### **4. 性能与优化**  
在效率与资源利用率方面取得显著进展：
- **PR #42017**：为 Headroom 保护机制压缩功能引入 `min_tokens_threshold` —— 短对话场景跳过不必要的往返调用，降低轻量请求的延迟。
- **PR #42055**：启用提示词缓存节省的实时监控 —— 使开发者可量化缓存策略带来的性能收益。
- **PR #41886**：集成 JEV 仪表板使用情况追踪 —— 支持评估工作流中的成本精准归因。

> 🔗 [PR #42017](https://github.com/BerriAI/litellm/pull/42017), [PR #42055](https://github.com/BerriAI/litellm/pull/42055), [PR #41886](https://github.com/BerriAI/litellm/pull/41886)

---

### **5. 稳定性与回归问题**  
报告并处理了若干关键稳定性问题：

| 严重性 | 问题 | 摘要 | 修复状态 |
|--------|------|--------|-----------|
| ⚠️ 高 | [#34140](https://github.com/BerriAI/litellm/issues/34140) | 由于 `model_per_team` 强制执行中存在重复计数，导致按团队/模型的速率限制被减半 | ❌ 未解决（2026 年 9 月 19 日报告） |
| ⚠️ 高 | [#41972](https://github.com/BerriAI/litellm/issues/41972) | Responses API 流事件因 `exclude_none` 过滤而丢失 `null` 值 | ✅ 已在 [PR #41983](https://github.com/BerriAI/litellm/pull/41983) 中修复 |
| ⚠️ 中 | [#41954](https://github.com/BerriAI/litellm/issues/41954) | Anthropic 桥接中工具结果的 `cache_control` 字段被错误路由至 `content` → 导致 400 错误 | ✅ 修复进行中 ([PR #41983](https://github.com/BerriAI/litellm/pull/41983)) |
| ⚠️ 中 | [#41963](https://github.com/BerriAI/litellm/issues/41963) | `/v1/responses` 在输入为字符串（非列表）时失败 —— 被提供方拒绝 | ✅ 补丁待审查 |

> 🔗 [Issue #34140](https://github.com/BerriAI/litellm/issues/34140), [PR #41983](https://github.com/BerriAI/litellm/pull/41983)

---

### **6. 对应用开发者的意义**  
- **成本控制**：谨慎配置团队级速率限制 —— 当前行为可能导致有效 RPM/TPM 减少 50%。请持续关注 #34140，直至修复完成。
- **可观测性**：利用 #42055 与 #42057 中的新 UI 功能，跟踪提示词缓存节省与 FUSE v2 路由决策 —— 对优化智能体成本效益至关重要。
- **流式可靠性**：若使用 `/v1/responses` 流，除非通过 #41983 修复，否则可能丢失 `null` 字段。请确保下游系统能妥善处理可选字段。
- **安全与合规**：示例中移除 `sk-1234` 默认主密钥，降低了暴露风险 —— 所有部署中应通过环境变量管理密钥。
- **未来兼容性**：关注 MCP 2.x SDK 兼容性更新（#35306）及 Claude Apps Gateway 支持（#34924）。

> 💡 *建议*：立即审计代理的速率限制配置；考虑升级至最新 main 版本，以获取流式修复与更优的 UI 视图优势。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-20**

---

### **1. 今日亮点**  
Unsloth 团队在稳定多 GPU 和跨平台支持方面取得显著进展，修复了 Windows 性能退化问题，并实现了 ROCm Docker 镜像的对齐。新提交的 PR 提升了 Studio 的可靠性——新增断开重连时自动重载功能、改进模型持久化机制，并优化了 Hugging Face 数据集配方的处理方式；同时解决了长期存在的文件附件保留和导出安全问题。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新发布。*  
然而，当前活跃的 PR 中有几项**破坏性变更待定**：
- `PR #11301`：通过修复与 `huggingface_hub` 1.32 共享下载目录行为相关的模型版本验证问题，恢复了历史训练任务的 *继续* 按钮。[链接](https://github.com/unslothai/unsloth/pull/11301)
- `PR #11299`：限制导出仅包含已推送的文件（不包含元数据或旧工件），防止本地路径意外泄露。[链接](https://github.com/unslothai/unsloth/pull/11299)

> 🔔 使用 `huggingface_hub` 1.32+ 的开发者应验证其训练任务续跑逻辑是否兼容。

---

### **3. 新模型与硬件支持**  
- **ROCm Docker 镜像对齐**：两项重大 PR 现已通过 Docker 为 AMD 用户提供完整 Studio 功能：
  - `PR #11218`：将 Unsloth Studio 打包至 `unsloth/unsloth-rocm`（此前仅支持 CUDA）。[链接](https://github.com/unslothai/unsloth/pull/11218)
  - `PR #11286`：向 ROCm Studio 镜像添加 JupyterLab、SSHD 与 supervisord，实现与 CUDA 体验完全一致。[链接](https://github.com/unslothai/unsloth/pull/11286)
- **EXL3 后端进展**：`PR #7115` 继续集成 ExLlamaV3（EXL3）作为量化后端，支持 MoE 架构及低于 8 位精度（2–8 位，含分数位）的量化方案。该功能使原本无法使用 bitsandbytes 的混合专家模型得以高效部署。[链接](https://github.com/unslothai/unsloth/pull/7115)

> ✅ 当前支持：ROCm（通过 WSL2 DXG 桥接）、EXL3 量化、多驻留 GGUF 模型。

---

### **4. 性能与优化**  
- **多 GPU 内存管理**：`PR #11330` 修复了在 MoE 模型中进行 CPU 降载时因内存溢出导致的崩溃问题，确保用户指定的 `--tensor-split` 标志被保留。若无此修复，Studio 会丢弃该标志，导致多 GPU 系统内存耗尽。[链接](https://github.com/unslothai/unsloth/pull/11330)
- **推理速度优化**：
  - `PR #11341`：引入断开重连时自动重载模型功能，降低动态 llama.cpp 工作流中的延迟。
  - `PR #11340`：移除 API 监控器中 12,000 字符的提示截断限制；现可完整复制高达 64 MiB 的提示内容。[链接](https://github.com/unslothai/unsloth/pull/11340)
- **模型加载效率**：`PR #10876` 实现多个 GGUF 模型同时驻留，每个模型运行在独立的 `llama-server` 进程中，显著提升基于代理的应用程序推理吞吐量。[链接](https://github.com/unslothai/unsloth/pull/10876)

---

### **5. 稳定性与回归问题**  
**报告的关键问题（严重程度排序）：**
1. **Qwen3.8-Flash-Next MTP 加载崩溃** (`#11143`)  
   - **原因**：合并分支后 `nextn.hc_head_norm` 维度不匹配。  
   - **影响**：在 CLI / 推理端点启动时模型加载失败。  
   - **状态**：开放 | 修复待定。[链接](https://github.com/unslothai/unsloth/issues/11143)

2. **Qwen 3.5 FastMTP Draft-Vocab 截断崩溃** (`#11335`)  
   - **原因**：`d2t` 草稿到目标映射导致 `llama.cpp` 中词汇表维度不匹配。  
   - **影响**：GGUF 加载器在模型加载阶段崩溃。  
   - **状态**：开放 | 高优先级。[链接](https://github.com/unslothai/unsloth/issues/11335)

3. **Windows 桌面性能退化** (`#11336`)  
   - **问题**：尽管硬件相同，应用速度明显慢于 Linux。  
   - **状态**：开放 | 尚无修复。[链接](https://github.com/unslothai/unsloth/issues/11336)

4. **Deep Research “审查计划” 须重新加载才生效** (`#10676`)  
   - **影响**：界面状态无法自动更新，需手动刷新。  
   - **状态**：开放 | 低严重性。[链接](https://github.com/unslothai/unsloth/issues/10676)

---

### **6. 对应用开发者的启示**  
- **对于代理与多模型应用**：使用 `PR #10876` 可并行运行多个 GGUF 模型——适用于路由、降级或集成推理场景。若使用 `--tensor-split`，请勿依赖默认模型加载行为。
- **对于 Hugging Face 集成**：导出 `export_metadata.json` 与数据集配方时需谨慎——`PR #11299` 保证仅推送预期文件。
- **对于 AMD/ROCm 用户**：Docker 镜像现已完整支持 Studio + JupyterLab。请使用 `unsloth/unsloth-rocm` 并配合 WSL2 DXG 桥接以获得 GPU 访问权限。设置详情见 `PR #11212`。[链接](https://github.com/unslothai/unsloth/pull/11212)
- **对于微调流水线**：在 `#11143` 与 `#11335` 修复前，请避免使用 `Qwen3.5` 与 `Qwen3.8` Flash-Next MTP 模型。对于需要 <8 位量化且采用 MoE 架构的模型，可考虑使用 EXL3（`PR #7115`）。

> 🛠️ **行动项**：审计您的模型加载流程，重点关注 `--tensor-split`、`d2t` 词汇表截断及 Hugging Face Hub 导出的规范性。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*