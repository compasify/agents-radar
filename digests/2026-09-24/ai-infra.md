# AI 基础设施日报 2026-09-24

> 生成时间: 2026-09-24 00:50 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-09-24**

---

### **1. 生态概览**  
AI推理与服务生态正进入 *深度专业化与跨平台融合* 的新阶段。项目之间的竞争已不再局限于原始吞吐量，而是通过架构创新（如混合Mamba/GDN、HiCache）、硬件特化优化（Blackwell SM120、ROCm 7.x/10、AMD NPU）以及原生支持智能体的功能（结构化输出、工具调用、决策API）实现差异化。随着vLLM、llama.cpp和Unsloth的重大版本发布，以及Ollama和LiteLLM的关键稳定性修复，该领域正在快速成熟，关注重点已从“能否运行？”转向“能否在生产负载下可靠扩展？”

---

### **2. 活动对比**

| 项目       | 开放问题 | 开放PR | 发布状态         | 备注 |
|---------------|-------------|----------|------------------------|-------|
| **vLLM**      | 38          | 147      | 无新版本（待定） | 内核优化与稳定性修复活跃；混合模型方向势头强劲 |
| **SGLang**    | 41          | 122      | 无新版本         | dLLM路线图推进中；推测解码与KV缓存存在高严重性回归 |
| **llama.cpp** | 57          | 164      | ✅ **v0.5.0** 已发布   | 在模型/硬件支持方面最活跃；v0.5.0后持续进行稳健后端修复 |
| **Ollama**    | 52          | 108      | 🟡 **v0.34.4-rc1**（RC） | 聚焦MLX引擎稳定性；结构化输出修复对智能体至关重要 |
| **LiteLLM**   | 48          | 113      | 仅开发版（`v1.104.0-dev.1`） | 存在高严重性成本/速率限制漏洞；安全加固正在进行 |
| **Unsloth**   | 68          | 135      | ✅ **v0.1.815-beta** 已发布 | 多模态/本地运行迭代迅速；NPU/ROCm支持逐步浮现 |

> 🔍 *洞察*：**llama.cpp** 在贡献量上领先，而**Unsloth**则展现出最激进的功能交付与测试版发布节奏。

---

### **3. 模型支持竞赛**

| 新模型 / 架构       | 支持项目                          | 状态 | 关键差异点 |
|-------------------------------|----------------------------------------|--------|--------------------|
| **Qwen3系列（混合Mamba/GDN）** | vLLM（部分），SGLang（Qwen3.8-Flash-Next），Unsloth（Qwen-Image-2.1） | ✅ 早期采纳 | vLLM在前缀缓存与推测解码方面领先 |
| **GLM-5.3-Flash**             | vLLM（部分），SGLang（路线图），llama.cpp（不支持） | ⚠️ 部分支持 | vLLM具备注意力识别能力；SGLang计划支持FP8/HiCache |
| **Gemma4 DSpark**             | ✅ **llama.cpp**（完整支持） | ✅ 稳定 | 首个完整启用权重绑定、SWA、元数据的项目 |
| **HRM-Text（DFM Mimir 1B）**   | ✅ **llama.cpp**（GGUF） | ✅ 可用 | 针对低延迟草稿模型设计 |
| **Ling-3.0-flash-VL**         | ✅ **llama.cpp** | ✅ 已添加 | 支持视觉-语言模型 |
| **Qwen-Image-2.1**            | ✅ **Unsloth**（测试版） | ✅ 本地支持 | 完整集成GGUF + FP8编码器；开启智能体技能 |
| **SenseNova-U1/U1.5**         | ✅ **SGLang**（跟踪中） | 🔄 路线图 | 正在评估开源参考模型 |
| **Inkling 多模态**        | ✅ **SGLang** | ✅ HTTP 400错误处理 | 对无效输入提供结构化响应 |

> 🏆 **胜出者**：**llama.cpp** 在模型支持广度上领先，尤其在新型或轻量化骨干网络（DSpark、HRM-Text）方面表现突出。  
> 🏅 **亚军**：**Unsloth** 在 *本地多模态推理* 方面占据主导地位，尤其在使用Qwen-Image-2.1生成图像时优势明显。

---

### **4. 性能前沿**

| 优化领域               | 领先项目                              | 核心创新 |
|----------------------------------|-----------------------------------------------|-----------------|
| **KV缓存效率**           | vLLM（HiSparse）、SGLang（FP8）、Ollama（NVFP4） | ROCm HiSparse热缓冲；FP8精度；NVFP4融合 |
| **推测解码**          | vLLM（MTP融合解码）、SGLang（DFLASH）      | 减少元数据重建；多步融合 |
| **内核融合与内存**        | vLLM（融合QK-norm+RoPE+gate）、SGLang（DSA索引器） | 更少启动次数；统一MoE路由 |
| **批处理与吞吐**         | vLLM（前缀缓存）、Unsloth（静态步跳） | 预填充加速达7.58倍；视频生成加速 |
| **量化灵活性**      | vLLM（`int4_per_token_head`非2次幂）、llama.cpp（三值GGUF） | 自适应头维度；超低内存占用 |
| **长上下文稳定性**        | llama.cpp（Metal、Vulkan）、vLLM（OOM修复）     | 子分配调优；性能分析后动态内存调整 |

> 🔥 **趋势**：前沿已从 *单核速度* 转向 *系统级一致性*——内存管理、调度与量化之间的协同作用变得至关重要。

---

### **5. 层级定位**

| 项目       | 主要层级                     | 角色摘要 |
|---------------|-----------------------------------|--------------|
| **vLLM**      | **高性能推理引擎** | GPU优化推理；聚焦可扩展性、低延迟与混合模型支持 |
| **SGLang**    | **dLLM（分布式大模型）网关** | 多协议前端；对后端抽象；以智能体为中心的设计 |
| **llama.cpp** | **本地运行时与嵌入式推理** | 跨平台、低开销执行；适合边缘、移动端及离线场景 |
| **Ollama**    | **开发者导向的本地网关** | 简化命令行/API；强MLX/NPU集成；支持智能体的结构化输出 |
| **LiteLLM**   | **多提供商API网关** | 统一云服务商接口；成本追踪、防护机制、速率限制 |
| **Unsloth**   | **以智能体为先的本地运行时** | 内置技能系统、项目/聊天管理；专为图像/视频生成优化 |

> 🧩 **战略洞察**：  
> - **vLLM/SGLang** = 生产级推理引擎  
> - **llama.cpp/Ollama** = 开发者与边缘优先部署  
> - **LiteLLM** = 企业级API编排  
> - **Unsloth** = 智能体工作流平台

---

### **6. 趋势信号**

#### 🔹 **提取的关键行业趋势**
1. **混合架构已成为主流**：Mamba/GDN混合架构（Qwen3、GLM-5.3-Flash）已成为核心目标——各项目正竞相优化前缀缓存与推测解码。
2. **硬件抽象日趋成熟**：ROCm 7.x/10、AMD NPU（XDNA 2）、Blackwell SM120已不再是实验性功能——优化已达到生产可用级别。
3. **原生智能体功能已成为基本要求**：结构化输出、工具调用、决策API、状态持久化等正成为标配。
4. **成本与安全成为首要关切**：LiteLLM的预算控制与防护机制问题反映出在多提供商环境中对可审计性与财务管控的日益增长需求。
5. **本地优先 ≠ 仅限轻量级**：Unsloth与llama.cpp表明，“本地”如今也涵盖高性能、多模态与智能体增强的工作流。

#### ✅ **面向应用开发者的可操作建议**
- **针对智能体系统**：优先选择 **vLLM**（可扩展推理） + **Unsloth**（本地多模态推理） + **LiteLLM**（成本感知路由）。
- **针对边缘/部署灵活性**：使用 **llama.cpp** 实现硬件无关的本地运行；通过 **Ollama** 提升开发者体验。
- **针对企业级网关**：基于 **LiteLLM** 构建，并启用 `--validate_config` 与 `cosign` 验证以满足合规要求。
- **重点关注**：通过Unsloth/llama.cpp支持的 **AMD NPU（XDNA 2）** —— 早期采用者可在移动与嵌入式环境获得延迟优势。

> 💬 **结语**：未来并非追求“一刀切”的推理方案，而是 *在恰当层级协调专用工具*。根据工作负载类型选择技术栈：**规模化 → vLLM/SGLang**，**本地性 → llama.cpp/Ollama**，**智能体逻辑 → Unsloth**，**多云环境 → LiteLLM**。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

### **1. 今日亮点**  
vLLM 项目持续推进对混合 Mamba/GDN 模型的支持，尤其在前缀缓存和推测解码优化方面取得显著进展，针对 Qwen3 系列模型表现尤为突出。关键稳定性修复已合并至 ROCm（MI355X）和 CUDA 环境，解决了 KV 缓存 OOM 问题以及图分析阶段的内存泄漏。针对 Blackwell GPU（SM120）的重大性能提升已上线，支持基于 SM 利用率自适应的 Triton split-K 分段。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新发布。*  
- **待定**：通过 PR [#55812](https://github.com/vllm-project/vllm/pull/55812) 新增 `vllm:admission_rejections_total` 指标，引入细粒度拒绝追踪（`reason` 标签），用于区分 `max_num_queued_reqs` 与 `max_num_queued_tokens` 的拒绝情况。此变更提升了可观测性，但可能需要更新监控仪表盘。

---

### **3. 新模型与硬件支持**  
- **新模型**：  
  - GLM-5.3-Flash：部分支持已包含注意力架构识别；仍存在阻塞项 `Glm5NextTextLinearAttention` ([#54062](https://github.com/vllm-project/vllm/issues/54062))。  
  - Kimi-K3（TP8）：ROCm 支持已启用，采用 MXFP4 量化，但在 HIP 700 下观察到崩溃现象 ([#50347](https://github.com/vllm-project/vllm/issues/50347))。  
- **硬件与后端**：  
  - **ROCm（gfx950 / MI355X）**：启用 HiSparse 稀疏 MLA 热缓冲机制 ([#57602](https://github.com/vllm-project/vllm/pull/57602))，显著提升大 MoE 模型的内存效率。  
  - **NVIDIA SM120（Blackwell）**：Triton 内核现在可根据 SM 利用率动态调整 split-K 分段数量 ([#58482](https://github.com/vllm-project/vllm/pull/58482))。  
- **量化**：  
  - `int4_per_token_head` 现已支持非 2 的幂次头维度 ([#56198](https://github.com/vllm-project/vllm/pull/56198))。

---

### **4. 性能与优化**  
- **混合 Mamba/GDN**：  
  - 三项 PR 实现了 *应用导向的 Mamba 前缀检查点* ([#55873](https://github.com/vllm-project/vllm/pull/55873), [#55875](https://github.com/vllm-project/vllm/pull/55875), [#55876](https://github.com/vllm-project/vllm/pull/55876))，使共享前缀任务（如目录属性提取）的预填充吞吐量提升 **7.58 倍**。  
- **推测解码**：  
  - MTP 融合多步解码移除了急切元数据重建 ([#58463](https://github.com/vllm-project/vllm/pull/58463))，显著降低 DeepSeek V4 及类似模型的开销。  
- **内核级优化**：  
  - 针对 Qwen3-Next/Qwen3.5 的融合 QK-norm+RoPE+gate Triton 内核 ([#51406](https://github.com/vllm-project/vllm/pull/51406)) 减少内核启动次数并改善延迟。  
- **内存效率**：  
  - ROCm 修复 ([#58483](https://github.com/vllm-project/vllm/pull/58483)) 在图分析后根据实际可用内存调整 KV 缓存大小，防止 OOM。

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 状态 | 修复 PR |
|--------|------|--------|-------|
| 🔴 高 | GLM-5.3-Flash 在累积推理解码后出现长时间解码退化 | 开放 ([#56868](https://github.com/vllm-project/vllm/issues/56868)) | 无 |
| 🔴 高 | 当 `running + skipped_waiting` 达到 `max_num_seqs` 时调度器永久停止接纳请求 | 开放 ([#53130](https://github.com/vllm-project/vllm/issues/53130)) | 无 |
| 🟡 中 | FlashInfer 自动调优在 SM103（GB300）上因 cubin 缺失 PTX 而无限卡死 | 开放 ([#58031](https://github.com/vllm-project/vllm/issues/58031)) | 根本原因已撤回；仍未解决 |
| 🟡 中 | Whisper `verbose_json` 在长音频中最后一个完整分段后静默丢弃单词 | 开放 ([#58029](https://github.com/vllm-project/vllm/issues/58029)) | 无 |

> ⚠️ **注意**：多个未修复的回归问题影响生产推理稳定性，尤其对 GLM-5.3-Flash 与长上下文流式任务影响显著。

---

### **6. 对应用开发者的意义**  
- **对于智能体工作负载**：使用 `--enable-mamba-prefix-caching` 配合 Qwen3.5-35B-A3B 等混合模型——近期 PR 显著提升共享前缀场景下的性能。  
- **对于多租户服务**：通过 `vllm:admission_rejections_total` 监控准入指标，以区分队列容量限制（`max_num_queued_reqs` 与 `max_num_queued_tokens`）。  
- **对于长上下文应用**：在 [#56868](https://github.com/vllm-project/vllm/issues/56868) 修复前避免使用 `GLM-5.3-Flash` 进行长推理；谨慎设置 `--max-num-seqs` 以防止调度器死锁。  
- **对于跨平台部署**：在 AMD ROCm（MI355X）上可期待 HiSparse ([#57602](https://github.com/vllm-project/vllm/pull/57602)) 带来的内存使用优化，但需验证与 HIP 700 的兼容性。  
- **对于工具调用应用**：解析器状态持久化正通过 PR（如 [#57571](https://github.com/vllm-project/vllm/issues/57571)）逐步稳定；若需稳定工具调用 ID，避免重试流式处理。  

👉 **可操作建议**：若使用 `--speculative-decoding`，请确保未在 `DeepSeek-V4` 上启用大于 1 的 MTP，除非已应用来自 [#58463](https://github.com/vllm-project/vllm/pull/58463) 的最新补丁。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 消息简报 – 2026-09-24

---

### **1. 今日亮点**  
SGLang 在 dLLM 服务路线图上持续取得进展，重点包括 **HiCache**、**FP8 KV 缓存** 以及 **AMD/ROCm DSpark 支持**，尤其针对 Qwen3.5 和 GLM-5.3-Flash。关键稳定性修复已合并至 **推测解码 + NVFP4 KV 缓存** 与 **DeepSeek 分块前缀预填充精度**；同时新提交的 PR 增强了 **MoE 内核融合**、**多协议前端抽象** 以及 **模型决策 API**。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未报告任何发布或破坏性变更。未观察到新的版本发布或接口/配置的破坏性更改。

---

### **3. 新模型与硬件支持**  
- **AMD/ROCm DSpark 支持**：基于 ROCm 7.x 对 `GLM-5.2` 与 `GLM-5.3-Flash` 实现进展，目标为 AMD MI350/MI355X（PRs #34394, #40878）。  
- **Qwen3.8-Flash-Next**：路线图跟踪 FP8 KV 缓存（已落地）、HiCache 及内核优化（Issue #38731）。  
- **SenseNova-U1/U1.5**：基于 OpenSenseNova/SenseNova-U1 参考实现，正式开始追踪（Issue #37742）。  
- **Inkling 多模态**：现已支持对无效图像输入返回结构化错误响应（`HTTP 400`）（PR #40897）。  
- **NPU 优化**：通过 Fp8MoEMethod 启用 MXFP8 低延迟调度，适用于 FP4 专家（PR #40519）。

---

### **4. 性能与优化**  
- **AMD ROCm 优化**：  
  - 将 `DSA indexer q/k prep` 融合为单个内核调用（PR #34394），降低解码开销。  
  - 为 gfx950（Qwen）新增小批量 MXFP4 MoE 内核，提升低批量下的吞吐量（PR #40204）。  
- **内核融合与内存效率**：  
  - 统一 MoE 路由 GEMM 路径（Issue #38695），减少 CPU 开销并增强精度控制。  
  - HiSparse slot 准备现在仅需在注意力元数据层面执行一次（PR #40782）。  
- **基准测试与推理速度**：  
  - 新增 `--gsp-input-ids` 选项，可在基准测试中跳过服务器端分词，实现更快的合成测试（PR #40900）。  
  - 更新 CUDA 13.4 镜像，集成最新版 `deepgemm`、`deep-ep` 与 `sgl-kernel`（PR #40987）。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 描述 | 修复状态 |
|---------|------|-------------|------------|
| 🔴 高 | [#40921](https://github.com/sgl-project/sglang/issues/40921) | H200（SM90）上使用 `trtllm_mha` 后端进行预填充和解码时返回错误结果 | 待处理 |
| 🔴 高 | [#40843](https://github.com/sgl-project/sglang/issues/40843) | GLM-5.3 在 DFLASH 推测解码下出现严重重复与退化循环 | 待处理 |
| 🔴 高 | [#36333](https://github.com/sgl-project/sglang/issues/36333) | 断开流式客户端后出现僵尸请求；大量“state was deleted”日志 | 由 #34160 回滚引发的回归 |
| 🟡 中 | [#36830](https://github.com/sgl-project/sglang/issues/36830) | `--kv-cache-dtype fp8_e4m3` 在 GLM-5.3-Flash 上因 `index_kpool: 4` 冲突失败 | 待处理 |
| 🟡 中 | [#30815](https://github.com/sgl-project/sglang/issues/30815) | FP8 KV 缓存解码性能下降，源于未融合的 K/V 量化 + 每层 Q 转换 | 待处理 |
| 🟡 中 | [#39831](https://github.com/sgl-project/sglang/issues/39831) | GLM-5.3-Flash 视觉模型因锁定 `transformers==5.12.1` 缺少 `glm5_next` 功能而静默损坏 | 待处理 |

---

### **6. 对应用开发者的启示**  
- **在基准测试中使用 `--gsp-input-ids`**，跳过分词环节，专注于隔离推理性能评估。  
- **在 H200 上避免同时使用 `trtllm_mha` 进行预填充与解码**，直到 #40921 修复完成——建议改用 `flashinfer` 或 `cuda`。  
- **推测解码与 NVFP4 KV 缓存组合目前存在缺陷**——请勿同时启用，直至 #36010 修复。  
- **多模态应用应预期对无效图像输入返回 HTTP 400 错误**（得益于 #40897）。  
- **新 `/v1/decisions` 端点（PR #40992）** 支持类型化、结构化的决策机制，无需解析生成文本——非常适合代理工作流。  
- **AMD 用户将受益于优化后的 MoE 内核与融合索引**——预计在 MI355X 与 MI45x 上获得更优的解码效率。

> 💡 *技巧提示*：关注 [dLLM 服务路线图 (#39499)](https://github.com/sgl-project/sglang/issues/39499)，以获取扩散 LLM 与 Jev 风格决策的未来支持信息。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 摘要 – 2026-09-24**

---

### **1. 今日亮点**  
`v0.5.0` 版本带来了关键的后端改进，扩展了模型与硬件支持范围——包括 HRM-Text (DFM Mimir 1B)、MiMo-V2.6、HunyuanOCR 以及 Gemma4 DSpark，同时通过多地址 HTTP 绑定和稳健的令牌计数机制提升了服务器稳定性。关键性能修复包括恢复 CUDA 稀疏闪存注意力（flash attention）功能，并对长上下文解码进行了 Metal 内核优化。

---

### **2. 发布与重大变更**  
- **v0.5.0**：正式发布，聚焦后端正确性、模型覆盖范围及服务器韧性。  
  - [发布说明](https://github.com/ggml-org/llama.cpp/releases/tag/v0.5.0)  
  - 引入 `--multi-address` 用于 HTTP 绑定（适用于多节点部署）。  
  - 修复 `/v1/responses` 接口因未处理 `text.format` → `response_format` 转换导致的崩溃问题 ([#29346](https://github.com/ggml-org/llama.cpp/pull/29346))。  
  - 未报告破坏性 API 变更；向后兼容性得以保留。

---

### **3. 新增模型与硬件支持**  
- **模型**：  
  - 通过 GGUF 转换新增对 **HRM-Text (DFM Mimir 1B)** 的支持。  
  - 完整支持 **Gemma4 DSpark 草稿主干**（含绑定输出权重、SWA 与布尔元数据）([#29226](https://github.com/ggml-org/llama.cpp/pull/29226))。  
  - 新增 **Ling-3.0-flash-VL** 视觉语言模型支持 ([#29151](https://github.com/ggml-org/llama.cpp/pull/29151))。  
  - **MiMo-V2.6** 与 **HunyuanOCR** 的 GGUF 转换支持现已可用。  
- **后端与硬件**：  
  - **OpenCL**：为 AMD GPU 添加 A8 Q6_K 非 MoE dp4a 二进制内核，提升效率 ([#29057](https://github.com/ggml-org/llama.cpp/pull/29057))。  
  - **Hexagon NPU**：Windows Arm64 的 CI 构建现已启用 ([#29052](https://github.com/ggml-org/llama.cpp/pull/29052))。  
  - **Vulkan**：针对 AMD RDNA3/RDNA4（Strix Halo）的 Int8 coopmat1 矩阵乘法提升了提示处理速度 ([#27952](https://github.com/ggml-org/llama.cpp/pull/27952))。

---

### **4. 性能与优化**  
- **CUDA**：在 b11047–b11062 期间回归后，稀疏闪存注意力预填充性能已恢复 ([#29298](https://github.com/ggml-org/llama.cpp/pull/29298))。  
- **Metal**：修复量化闪存注意力中的 threadgroup 内存溢出问题，使 Apple Silicon 上的长上下文解码（>512 个标记）更加稳定 ([#29340](https://github.com/ggml-org/llama.cpp/pull/29340))。  
- **SYCL**：IQ3 代码重排优化降低了 Intel Arc Pro B70 的注意力路径延迟，提升性能 ([#29107](https://github.com/ggml-org/llama.cpp/pull/29107))。  
- **Qwen4exp**：直接懒加载张量行读取方式在 Strix Halo 等集成平台上的提示处理速度最高提升 **~20%** ([#29030](https://github.com/ggml-org/llama.cpp/pull/29030))。

---

### **5. 稳定性与回归问题**  
- **严重崩溃**：  
  - **Metal**：M3 Ultra 上长上下文（约 131k 标记）时出现静默 EOS 发射现象——多个模型复现 ([#29335](https://github.com/ggml-org/llama.cpp/issues/29335))。  
  - **Vulkan**：131k 上下文时解码吞吐量下降约 78%，由子分配碎片化引起；临时解决方案：设置 `GGML_VK_SUBALLOCATION_BLOCK_SIZE=4 GiB` ([#27734](https://github.com/ggml-org/llama.cpp/issues/27734))。  
- **正确性缺陷**：  
  - **CUDA**：`qwen4exp` 解码速度随上下文长度线性下降 ([#28734](https://github.com/ggml-org/llama.cpp/issues/28734))。  
  - **HIP/ROCm**：在 gfx1151（RDNA3）上使用长提示时观察到错误的 logits ([#28211](https://github.com/ggml-org/llama.cpp/issues/28211))。  
- **回归问题**：自 b11047 以来，CUDA 稀疏 FA 解码速度变慢 **1.6 倍** ([#29281](https://github.com/ggml-org/llama.cpp/issues/29281)) —— 修复补丁待合并。  
- **进行中的修复**：  
  - 修正服务器唤醒逻辑，防止休眠期间因令牌计数引发崩溃 ([#29309](https://github.com/ggml-org/llama.cpp/pull/29309))。  
  - 通过缓存实现草稿模型去重，确保路由器操作高效 ([#27934](https://github.com/ggml-org/llama.cpp/pull/27934))。

---

### **6. 对应用开发者的意义**  
- **部署建议**：在路由器模式或多 GPU 场景中运行 llama-server 时，请使用 `v0.5.0` 版本以获得生产级稳定性。启用 `--multi-address` 实现可扩展的分布式推理。  
- **性能调优**：对于长上下文模型（如 Qwen4exp、Ling-3.0），在 Vulkan 上设置 `GGML_VK_SUBALLOCATION_BLOCK_SIZE=4 GiB`，并利用 `--prefetch-weights`（仅限 CUDA）降低延迟。  
- **模型选择**：充分利用新支持的 **Gemma4 DSpark** 与 **HRM-Text**，构建高效率、低延迟的草稿模型。考虑使用 **三值 GGUF**（通过 #29077）实现超低内存部署。  
- **调试提示**：注意 CUDA 稀疏注意力与 Metal 解码中的隐性性能下降——建议使用 `--log-level debug` 进行验证。  
- **前瞻性规划**：关注 [#29346](https://github.com/ggml-org/llama.cpp/pull/29346) 与 [#29335](https://github.com/ggml-org/llama.cpp/issues/29335) 等 PR，以应对 OpenAI 兼容响应格式与长上下文稳定性需求。  

> ✅ **推荐操作**：升级至 `v0.5.0`，在实际负载下验证长上下文行为，并在使用 Vulkan 时考虑调整 `GGML_VK_SUBALLOCATION_BLOCK_SIZE`。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-24**

---

### **1. 今日亮点**  
最新发布的 **v0.34.4-rc1** 修复了若干关键稳定性问题，包括 MLX 引擎模型在生成结构化输出时出现的间歇性“模型未找到”错误以及持续卡死现象。主要改进包括：对思考类模型的结构化输出处理优化为单次通过，同时解决了 GPU 内存压力和 CPU 利用率飙升的问题——尤其对 macOS 用户及高负载推理场景至关重要。

---

### **2. 发布与破坏性变更**  
- **v0.34.4-rc1**：修复内容：  
  - 服务器中偶发的“模型未找到”错误（`#18438`） — [PR #18438](https://github.com/ollama/ollama/pull/18438)  
  - 思考类模型的结构化输出现可在单次通过中应用（`#18479`） — [PR #18479](https://github.com/ollama/ollama/pull/18479)  
- **无破坏性 API 变更**；小版本间保持向后兼容。

---

### **3. 新模型与硬件支持**  
- **MLX 引擎**：持续优化，新增对 **Nemotron** 层命名的支持、全局 F32 缩放功能，并改善 Mamba softplus 的稳定性（`#18614`）。  
- **新模型请求**：  
  - 紧急需求：**MIMO v2.5**（MIT 许可，百万级上下文） — [Issue #15887](https://github.com/ollama/ollama/issues/15887)  
  - 请求支持 **Mimo-v2.6-Pro/Flash** 模型 — [Issue #18616](https://github.com/ollama/ollama/issues/18616)  
- **硬件**：ROCm v10 更新已完成，支持范围扩展至 Linux/Windows 平台（`#16446`）。

---

### **4. 性能与优化**  
- **CPU 使用率修复**：v0.32.14+ 版本即使模型完全加载进显存（VRAM），仍导致过高 CPU 占用（约 50–80%）（`#17833`）。修复方案已在 `#18613` 中提出——当存在 GPU 时，向 `llama-server` 传入 `--poll 0` 参数以消除轮询开销。  
- **内存压力处理**：关于在 GPU 内存压力下自动释放空闲模型显存的功能请求（`#18612`）凸显出动态资源管理的需求日益增长。  
- **嵌入效率优化**：通过避免不必要的 JSON 往返调用，优化 `/api/embed` 接口路径（`#18610`）——显著降低批量嵌入的延迟与内存抖动。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | PR / 说明 |
|--------|------|--------|----------|
| 🔴 严重 | MLX 在预填充阶段 `processed=total-1` 时出现 nvfp4 停滞，数分钟无进展（`#18505`） | 开放 | 尚无修复；影响持续单槽负载场景 |
| 🔴 严重 | MLX 上结构化输出永不终止，持续输出空白字符（`#18567`） | 已关闭 | 通过 `#18569`（限制空白字符数量）修复，已更新至 `#18615`（XGrammar v0.2.7） |
| 🟡 高 | Homebrew 安装的 Ollama 无法为 MLX 模型提供结构化输出（`#18597`） | 开放 | 因缺少 `xgrammar` 库绑定所致 |
| 🟡 中等 | `glm-ocr` 在 0.34.1+ 版本返回 HTTP 500 错误，因令牌重复限制（`#18609`） | 开放 | 来自 0.34.0 的回归问题；已在 `#17195` 中修复（注册 EOT 令牌） |
| 🟡 中等 | Gemma 4 工具调用在字符串值超过 45 个时被丢弃（`#18605`） | 已关闭 | 通过解析器冲突缓解策略修复 |

---

### **6. 对应用开发者的启示**  
- **结构化输出可靠性**：若依赖 MLX + JSON Schema 输出，请使用 `v0.34.4-rc1` 或更高版本——避免旧版本中无限空白字符循环的问题。确保 `xgrammar` 正确链接（尤其是 Homebrew 构建）。  
- **GPU 显存管理**：注意空闲模型在内存压力下可能无法动态释放显存——建议在自定义运行器或编排层中采用 `#18612` 类策略。  
- **模型可移植性**：借助 `#18578`（导出/导入）功能，现在可手动离线迁移模型至其他机器——适用于隔离环境或 CI/CD 流水线。  
- **工具与智能体开发**：新接口 `POST /v1/systemone`（`#18606`）支持本地概率评分决策——无需依赖云端即可实现智能体逻辑。  

> ✅ **建议**：如使用 MLX 引擎或结构化输出，请立即升级至 `v0.34.4-rc1`。生产部署中请关注 `#18505` 和 `#18597` 的运行时问题。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM Digest – 2026-09-24**

---

### **1. 今日亮点**  
LiteLLM 持续快速演进，针对成本核算、预算控制和模型定价准确性（特别是 Azure、Vertex AI 及 OpenRouter）进行了关键修复。新增的 PR 已支持 Gemini 预览模型、Llama 3.3 70B、Veo 2/3 以及 FLUX.2 图像编辑计费，同时通过增强日志记录和 UI 搜索功能提升了可观测性。代理现在强制要求仅管理员可控制全局护栏绕过，进一步加强了安全性。

---

### **2. 发布与破坏性变更**  
今日无新稳定版本发布；重点仍集中在预发布版本 `v1.104.0-dev.1` 及更早的补丁版本（如 `v1.102.1`、`v1.101.2` 等）。所有 Docker 镜像均使用 [cosign](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0) 进行加密签名，采用统一密钥——部署前请验证签名。本周期未报告任何破坏性变更。

---

### **3. 新模型与硬件支持**  
- ✅ **Gemini**：在成本映射中新增预览别名及 Deep Research (04-2026) 行 ([PR #42833](https://github.com/BerriAI/litellm/pull/42833))。  
- ✅ **Vertex AI**：新增 `vertex_ai/llama-3.3-70b`、`veo-2`、`veo-3`、`virtual-try-on` 与 `tts-2.5` 的计费条目 ([PR #42837](https://github.com/BerriAI/litellm/pull/42837))。  
- ✅ **OpenAI**：新增 `chat-latest`、`codex` 以及官方文档中缺失的 11 个模型 ID ([PR #42834](https://github.com/BerriAI/litellm/pull/42834))。  
- ✅ **OpenRouter**：同步 18 条漂移定价记录，并恢复分层 Qwen 定价 ([PR #42832](https://github.com/BerriAI/litellm/pull/42832))。  
- ✅ **Azure AI**：修正 FLUX.2 编辑计费逻辑，现已包含参考图像像素数量 ([PR #42829](https://github.com/BerriAI/litellm/pull/42829))。

---

### **4. 性能与优化**  
- 🔧 **缓存与日志**：修复同步缓存命中日志未能正确标注服务提供商名称的问题，确保支出归因准确 ([PR #42830](https://github.com/BerriAI/litellm/pull/42830))。  
- 🚀 **成本追踪**：为 Vertex AI 引入原生批量 JSONL 透传并支持成本追踪，消除不必要的转换开销 ([PR #42810](https://github.com/BerriAI/litellm/pull/42810))。  
- ⚙️ **CI/测试**：将测试拆分为层级，并修复流式传输峰值内存测试中的内存与超时问题 ([PR #42831](https://github.com/BerriAI/litellm/pull/42831))。  
- 💡 **Rust 移植**：将独立的成本计算逻辑迁移至 Rust（`litellm-cost`），实现跨语言一致性 ([PR #42620](https://github.com/BerriAI/litellm/pull/42620))。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 修复 PR |  
|--------|------|-------|--------|  
| 🔴 高 | v1.82.3 版本中因 `max_budget` 行为异常导致预算控制被绕过 | 开放 | [Issue #26672](https://github.com/BerriAI/litellm/issues/26672) |  
| 🔴 高 | v3 速率限制器对团队每模型限额重复计数 → 实际 RPM/TPM 减半 | 开放 | [Issue #34140](https://github.com/BerriAI/litellm/issues/34140) |  
| 🔴 高 | 协调 Redis 探针启动失败 → 各 Pod 的预算数据滞留 | 开放 | [Issue #42653](https://github.com/BerriAI/litellm/issues/42653) |  
| 🟡 中 | 流式传输中，当最终分块的 `choices` 非空时丢弃上游 `usage` → 缓存令牌丢失 | 开放 | [Issue #36168](https://github.com/BerriAI/litellm/issues/36168) |  
| 🟡 中 | 当 `--num_workers > 1` 时，因 Redis Pub/Sub 同步问题导致“幽灵”模型在工作进程间持续存在 | 已关闭 | [Issue #27852](https://github.com/BerriAI/litellm/issues/27852) |  

> 注意：多个高严重性问题影响企业级成本控制与速率限制——若使用 v1.82.3+ 或多工作进程部署，请尽快升级。

---

### **6. 对应用开发者的启示**  
- **避免成本盲区**：确保使用 `v1.102.1+`，防止新模型（如 Gemini、Vertex AI、OpenRouter）出现静默 $0 计费。在 CI 中使用 `GET /v1/models` + 成本映射校验。  
- **加固护栏安全**：禁止非管理员用户禁用全局护栏——此权限已在 PR #42699 后受限。  
- **监控缓存行为**：缓存命中现在正确记录服务提供商信息——请确认成本仪表盘反映真实使用情况。  
- **启用 `--validate_config`**：配合 PR #41705，可在 CI 流水线早期验证配置，避免启动时崩溃。  
- **准备欧盟合规**：自 PR #29895 起，对于受欧盟《人工智能法案》监管的场景，建议实现防篡改审计日志。  

👉 *推荐操作*：立即审查所有模型别名、成本映射及预算配置——尤其是运行多区域、多供应商部署的场景。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-24**

---

### **1. 今日亮点**  
Unsloth v0.1.815-beta 正式发布，全面支持本地运行 **Qwen-Image-2.1**，包含自定义 Agent Skills 及优化后的聊天/项目管理功能。关键性能提升包括 **推理模块速度提升 2 倍（60 FPS 对比 30 FPS）** 以及训练稳定性增强。针对 AMD ROCm 与 NPU 推理的新优化也正在推进中，标志着向跨平台 AI 加速的大力投入。

---

### **2. 发布与破坏性变更**  
- **v0.1.815-beta**：正式发布，新增对 **Qwen-Image-2.1** 的支持，集成 GGUF 与 FP8 文本编码器。包含 Agent Skills、聊天/项目管理功能及稳定性修复。  
  🔗 [发布说明](https://github.com/unslothai/unsloth/releases/tag/v0.1.815-beta)  
- 本版本周期内未报告任何破坏性 API 变更。但使用 AMD 系统的用户可能需手动解决 ROCm 版本不匹配问题（参见 Issue #11638）。

---

### **3. 新模型与硬件支持**  
- ✅ **Qwen-Image-2.1** 现已通过 GGUF 与 FP8 量化实现完全本地支持。  
- 🟡 **AMD Ryzen AI NPU (XDNA 2)**：通过 FastFlowLM + Lemonade 栈（PR #11743）添加实验性支持，可在 Strix Halo/Point 设备上实现无需下载模型的本地推理。  
- ⚠️ **ROCm 10 支持待定**；使用 ROCm 7.14 的用户因安装程序误识别而遇到问题（Issue #10657，PR #11736）。  
- 📌 **Adreno GPU 支持** 正在讨论中（Issue #11674），将利用 GenieX 与 llama.cpp 后端兼容性实现。

---

### **4. 性能与优化**  
- **推理模块速度提升 2 倍**：通过静态步缓存与 CUDA 图优化实现（PR #11737, #11748）。  
- **VAE 解码进度报告**：修复了解码阶段“卡住”的延迟感知问题（PR #11740, Issue #11739）。  
- **NVFP4 flashinfer 后端**：现已按需自动启用（PR #11730），降低对较慢 torchao 路径的依赖。  
- **逐层 NVFP4 策略**：为图像 DiTs 引入（PR #10730），实现更精细的精度控制。  
- **视频生成的静态步跳过**：将图像模型的速度优势延伸至视频生成（PR #11748）。  
- **最大速度层级重新编译修复**：防止每次提示长度变化都触发冗余编译（PR #11731）。

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 状态 | 修复 PR |
|--------|------|------|--------|
| 严重 | AMD：VAE 解码导致服务器进程崩溃，因未捕获 `terminate`（hipErrorLaunchFailure） | 开放 | PR #9130 |
| 高 | Qwen-Image-2.1 运行需手动操作（缺少资源文件） | 开放 | Issue #11567 |
| 高 | Windows ROCm：torch.distributed 缺失 → FP8 编码器失败（404） | 开放 | Issue #11638 |
| 中 | Unsloth Studio 在 RDNA1（gfx1010）上生成图像时崩溃 | 开放 | Issue #11614 |
| 中 | 启动后 CPU 使用率无限飙升 | 开放 | Issue #10390 |
| 低 | 最大化窗口下底部 UI 条无响应 | 开放 | Issue #11734 |

> 💡 *修复进行中*：PR #11736（ROCm 安装程序）、#11740（VAE 进度）、#11731（避免重编译）、#11733（孤儿工具修复）正解决关键稳定性问题。

---

### **6. 对应用开发者的意义**  
- **构建功能更丰富的 Agent**：使用新推出的 **Skill 系统**（Issue #11742），可在 UI 中直接定义可复用、声明式的 Agent 行为，无需文件形式的 YAML 配置。  
- **优化低延迟推理**：利用 **静态步缓存**（PR #11737/#11748）与 **NVFP4 flashinfer**，将图像/视频生成延迟降低高达 50%。  
- **适配异构硬件**：随着 NPU（PR #11743）及 ROCm 7.14/10 支持逐步落地，您的应用现在可高效运行于 AMD、Intel 与移动平台。  
- **避免静默失败**：即将推出的 **基准测试套件**（Issue #11646，取代 #5867）将支持追踪模型性能（MMLU、GSM8K、HellaSwag），并验证配置搜索结果。  
- **直接使用原始 llama.cpp API**：通过 PR #11705 启用原生访问，绕过 OpenAI 包装层，用于高级本地工具（如 Cursor、Continue）。  

👉 *可行动建议*：立即开始测试 **Qwen-Image-2.1** 的动态提示与技能链组合——当前性能已可媲美云端推理。关注 PR #11743 以获取 NPU 部署就绪状态。

---  
*数据来源：GitHub: [unslothai/unsloth](https://github.com/unslothai/unsloth)*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*