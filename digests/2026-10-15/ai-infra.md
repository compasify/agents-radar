# AI 基础设施日报 2026-10-15

> 生成时间: 2026-10-15 00:48 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-10-15**

---

### **1. 生态概览**

2026年第四季度，AI推理基础设施领域呈现出激进的硬件专用化趋势，多后端兼容性持续深化（尤其是ROCm/AMD与CUDA的对齐），同时对原生代理工作流的关注度不断提升。各项目正聚焦于性能关键优化——KV缓存鲁棒性、推测解码稳定性以及低比特量化效率——与此同时，逐步扩展对下一代模型如DeepSeek-V4.1、Qwen3.5–3.8、Nemotron Super 3.5 VL及K2 Horizon的支持。通过RPC实现分布式推理（Unsloth）和分层缓存机制（SGLang）的出现，标志着生态正从单节点服务向可扩展、生产级编排演进。

---

### **2. 活动对比**

| 项目       | 开放问题数（今日） | 合并的PR数（今日） | 发布状态             |
|------------|-------------------|------------------|----------------------|
| **vLLM**   | 47                | 19               | 无（稳定分支）       |
| **SGLang** | 52                | 14               | 无（存在破坏性变更） |
| **llama.cpp** | 38            | 11               | 无（未打标签发布）   |
| **Ollama** | 41                | 8                | v0.40.5-rc0（预发布）|
| **LiteLLM** | 29             | 12               | v1.106.0-rc.3（RC）  |
| **Unsloth** | 24             | 10               | 无（Beta UI问题）    |

> ✅ *观察*：vLLM在开发活跃度上领先（合并PR数量最高），而SGLang因复杂的代理与GPU稳定性挑战导致问题密度较高。Ollama与LiteLLM正接近稳定发布，目前有大量破坏性变更正在审查中。

---

### **3. 模型支持竞赛**

| 新模型 / 架构                 | 支持项目                          | 备注 |
|------------------------------|-----------------------------------|------|
| **Gemma4ForSequenceClassification** | vLLM (#43726)                   | 首个支持非因果语言模型用例的项目 |
| **Nemotron Super 3.5 VL & Bolt 74B A9B** | llama.cpp (PR #30520)       | 本地运行时现已支持多模态推理 |
| **K2 Horizon (MBZUAI IFM)** | Ollama (PR #18698)              | 为0.9B–36B系列变体添加MoE支持 |
| **d1-3B & d1-omni-600M (GGUF)** | Ollama (Issue #18890)        | 扩展音频/图像输入能力 |
| **GPT-6-Astra (fake provider)** | LiteLLM (PR #46551)           | 支持未来模型层级的本地测试 |
| **Maion-Coder**              | llama.cpp (PR #29778)           | 原生支持新型代码生成架构 |

> 🏆 **领先者**：*llama.cpp* 和 *Ollama* 在多模态及新兴架构支持方面领先，尤其在基于GGUF的模型和新型MoE设计上表现突出。*vLLM* 在主流LLM采用方面处于领先地位，已全面覆盖Qwen3、DeepSeek-V4.1及Gemma系列。

---

### **4. 性能前沿**

优化工作集中在五个关键领域：

| 领域                     | 主要驱动因素                                                                 |
|--------------------------|----------------------------------------------------------------------------------|
| **KV缓存鲁棒性**         | vLLM（NIXL竞争条件）、SGLang（HiCache）、Ollama（上下文处理）——均在推进关键修复 |
| **推测解码**             | SGLang（JIT崩溃）、vLLM（前缀缓存损坏）——生产环境中的代理存在重大回归风险 |
| **量化效率**             | vLLM（FP8/MXFP4内核）、llama.cpp（MMQ/MUL_MAT）、Unsloth（INT8 GEMM门控）——目标为低延迟、高吞吐推理 |
| **分布式服务**           | Unsloth（基于RPC的GGUF编排）、SGLang（PD解耦）、vLLM（NIXL）——支持横向扩展集群 |
| **内核级调优**           | vLLM（FA4 SM90 FP8 MMA）、SGLang（融合内核）、llama.cpp（SIMT conv2d）——推动新显卡上的原始算力极限 |

> 🔥 **最活跃前沿**：*vLLM* 与 *SGLang* 正引领最先进的内核与内存优化，尤其针对AMD ROCm及混合Mamba/GDN架构。

---

### **5. 层级定位**

| 项目       | 层级定位                        | 核心差异化 |
|------------|----------------------------------|-------------|
| **vLLM**   | **高性能服务引擎**               | 行业顶尖吞吐量，多后端对齐，专为大规模推理优化 |
| **SGLang** | **代理感知服务引擎**             | 专为代理工作流设计：推测解码、步骤预览、LoRA管理 |
| **llama.cpp** | **本地运行时 / 边缘推理**      | 支持CPU/GPU移植，依赖极少，适用于嵌入式或离线场景 |
| **Ollama** | **用户入口 + 本地运行器**        | 开发者统一CLI/API；强大的模型发现与兼容层 |
| **LiteLLM** | **编排网关 / API外壳**          | 多提供商路由、成本追踪、代理工具链、可观测性 |
| **Unsloth** | **桌面应用 + 推理编排器**       | 多模态代理、扩散模型及跨机器服务的端到端用户体验 |

> 💡 **战略洞察**：vLLM与SGLang正成为高性能推理的“内核”层；LiteLLM与Ollama充当通用网关；llama.cpp与Unsloth主导边缘/本地执行。

---

### **6. 趋势信号**

#### 🔍 **新兴行业趋势**
1. **ROCm/AMD不再被视为次等选择**：多个项目（vLLM、SGLang、llama.cpp、Unsloth）已原生支持FP8、MXFP4及RDNA3/RDNA4——表明其已与NVIDIA实现功能对齐。
2. **混合架构（Mamba/GDN）正在动摇核心假设**：前缀缓存与推测解码缺陷凸显，架构创新伴随正确性与可预测性的代价。
3. **代理工作流正驱动功能需求**：LoRA合并/拆分、第5步预览、工具调用流式传输、`cache_control`保真度已成为首要关注点。
4. **安全与可观测性日益成熟**：Cosign签名（LiteLLM）、管理员API加固（SGLang）、OpenTelemetry追踪（LiteLLM）体现企业级就绪状态。
5. **分布式推理正从理论走向实践**：Unsloth的基于RPC的GGUF服务与SGLang的PD解耦展现了真实的规模化路径。

#### 🚨 **开发者需重点关注事项**
- **在vLLM/SGLang补丁发布前，避免对混合模型使用推测解码**——该功能会无声禁用前缀缓存。
- **验证量化兼容性**——例如，Qwen3.6上的NVFP4在v0.22.0版本中失败（vLLM Issue #44081）。
- **使用 `vllm-openai:nightly` 或 `ollama:latest`** 以规避v0.24.0+与v0.40.4+版本中的回归问题。
- **监控CI不稳定性和核心转储**——SGLang的CUDA崩溃（Issue #26340）表明高负载环境下存在系统性不稳定性。
- **设计时考虑上下文长度强制**——Ollama现已在API元数据中尊重 `OLLAMA_CONTEXT_LENGTH`（Issue #18995）。

> ✅ **最终建议**：优先选择 **vLLM** 实现高吞吐推理，**SGLang** 构建代理流水线，**LiteLLM** 进行多提供商编排，**Unsloth/llama.cpp** 用于边缘本地部署。上线前务必验证已知回归问题。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

### **vLLM Digest — 2026-10-15**

#### **1. 今日亮点**
vLLM 项目持续加速推进**多后端性能一致性**目标，关键 PR 支持 DeepSeek-V4.1 与 Qwen3.5 模型在 ROCm 平台上的运行，同时修复了混合 Mamba/GDN 架构中推测解码与前缀缓存的关键正确性问题。一项重大缺陷修复解决了基于 NIXL 的分布式推理中沉默的 KV 缓存损坏问题，显著提升了生产部署的可靠性。

#### **2. 发布与破坏性变更**
无。过去 24 小时内未发布新版本或破坏性 API/配置变更。

#### **3. 新模型与硬件支持**
- **新增模型支持**：新增 `Gemma4ForSequenceClassification`（Issue #43726），支持非因果语言模型使用场景。
- **ROCm/AMD 进展**：
  - 新增针对 MI355X（`gfx950`）的 CI 任务，用于测试 `Qwen3.8-Flash-Next-Quark-MXFP4` 模型（Issue #59575）。
  - 在 RDNA4（R9700）上启用原生 FP8 Triton 后端，并在 RDNA3/RDNA3.5 上启用 MXFP4 GEMV 内核（PR #61091, #60413）。
  - 将 ROCm 10.0 设为默认镜像；通过 `-rocm72` 标签保留 ROCm 7.2 支持（PR #58761）。
- **CPU/MRV2**：在不依赖 Triton 的情况下，初步实现 CPU 上的 Model Runner V2（PR #60924），提升硬件可移植性。

#### **4. 性能与优化**
- **内核级优化**：
  - 集成 **FA4 SM90 FP8 MMA** 用于 Gemma-4 全注意力计算（PR #60372），保持 FP8 KV 缓存存储能力。
  - 新增针对 R9700 优化的**原生逐 token FP8 Triton 线性后端**（PR #61091），支持动态缩放。
  - 优化 **融合 QK-norm+RoPE+gate 内核** 用于 Qwen3-Next（PR #51406），降低内核启动开销。
- **量化与内存**：
  - 修复 `silu_and_mul_quant` 中向量化循环执行问题（PR #61716），提升 FP8 激活融合效率。
  - 引入 **RDNA3/RDNA3.5 的 MXFP4 GEMV 内核**（PR #60413），面向低延迟推理优化。

#### **5. 稳定性与回归问题**
- **严重级别**：
  - **NIXL KV 块释放竞争条件**（Issue #61229）：远程读取过程中发生静默覆盖；已在 PR #61619 中修复。
  - **混合 Mamba/GDN 模型中的前缀缓存损坏**（Issue #53912）：尽管 PR #43559 已关闭，问题仍未解决；v0.28.0 版本引入回归。
- **高严重性**：
  - **混合 GDN 模型中推测解码静默禁用前缀缓存命中**（Issue #54360）；修复补丁 PR #52244 正在等待评审。
  - **`Qwen3.8-Flash-Next` 在接近 `indexer_budget` 时出现非确定性贪婪解码**（Issue #54521）：相同请求下可复现。
- **其他显著回归**：
  - **Mamba2 chunk scan 内核在 sm90 上崩溃**（Issue #61603）：因自动调优配置导致输出为 NaN/Inf；已在 PR #61718 修复。
  - **v0.31.0-cu129 启动失败**，原因为捆绑的 `torchcodec` 与 CUDA 13 不兼容（Issue #60406）。

#### **6. 对应用开发者的启示**
- **在混合 Mamba/GDN 模型上谨慎使用前缀缓存**：除非显式禁用（`--no-enable-prefix-caching`），否则可能无效或导致输出污染。请留意跨请求上下文污染问题（Issue #61160）。
- **在 ROCm 设备上启用 `--linear-backend triton`**，以利用新优化的内核实现动态 FP8 缩放。
- **在 PR #52244 合并前避免使用推测解码**：当前混合模型的前缀缓存命中功能已被禁用。
- **验证量化兼容性**：`Qwen3.6-35B-A3B-NVFP4` 的 `NVFP4` 路径在 v0.22.0 中无法加载（Issue #44081）；请确保使用受支持的版本。
- **未来兼容性部署建议**：使用 `vllm-openai:nightly` 或更新构建版本，以规避 v0.24.0+ 中已知的吞吐量回归问题（Issue #51663）。

🔗 [GitHub Issues](https://github.com/vllm-project/vllm/issues) | 🔗 [Pull Requests](https://github.com/vllm-project/vllm/pulls)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

### **1. 今日亮点**  
SGLang 项目持续推进对下一代硬件及推理优化的支持，关键进展包括 **DeepSeek-V4.1 性能调优**、**HiCache 层级 KV 缓存鲁棒性增强** 和 **多模态预处理稳定性提升**。值得注意的是，已发现因 JIT 编译不匹配导致推测解码出现严重崩溃的问题，目前正在积极排查。与此同时，新提交的 PR 引入了基础功能，如 LoRA 合并/拆分接口以及面向未来智能体工作流的 Step 5 预览支持。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未发布新版本。*  
但多项破坏性变更正在进行中：  
- `--swa-max-states-per-path` 引入新配置项，用于限制每个基数路径上的 SWA 滑动窗口状态数量（PR #39694），影响 DeepSeek-V4 等混合型 SWA 模型。  
- `--enable-symm-mem` 选项现将对称内存池排除在静态内存统计之外（PR #44106），可能改变启动阶段的内存使用模式。

> 🔗 [PR #39694](https://github.com/sgl-project/sglang/pull/39694) | 🔗 [PR #44106](https://github.com/sgl-project/sglang/pull/44106)

---

### **3. 新模型与硬件支持**  
- **DeepSeek-V4.1**：完整支持 TRT-LLM 解码器有界重放与 BCG（PR #44326），实现可中断的预填充 CUDA Graph 并修复 DP 死锁问题。  
- **T-Head PPU**：已启动对真武 810/810E/M890P 显卡的一流支持路线图（Issue #37519）。  
- **AMD ROCm**：新增 FlyDSL GDN 预填充后端（PR #39595），适用于 gfx95 GPU 上的 Qwen3.5-397B；DCP 解码上下文并行化目标已指向 ROCm（PR #44322）。  
- **Intel XPU**：启用 HiCache L1<->L2 分层支持（PR #32503），将分层缓存扩展至 CUDA/ROCm 之外。  
- **多模态**：强化 Kimi 图像缓存标识在预处理与哈希过程中的一致性（PR #43043）。

> 🔗 [PR #44326](https://github.com/sgl-project/sglang/pull/44326) | 🔗 [PR #37519](https://github.com/sgl-project/sglang/issues/37519) | 🔗 [PR #39595](https://github.com/sgl-project/sglang/pull/39595) | 🔗 [PR #32503](https://github.com/sgl-project/sglang/pull/32503) | 🔗 [PR #43043](https://github.com/sgl-project/sglang/pull/43043)

---

### **4. 性能与优化**  
- **引擎恢复**：权重缓存守护进程将 Qwen3-235B FP8 的加载时间从约 306–327 秒降低至 <1 秒（第一阶段已合并至 #27139）。  
- **推测解码**：通过有界重放与 BCG 优化（PR #44326），减少多次急切前向传播带来的开销（此前每次命中增加 +240ms）。  
- **内存效率**：统一基数缓存改进限制每路径的 SWA 状态数（#39694），防止状态无限制增长。  
- **内核融合**：将 `q_rope_store` 融合进 `fused_q_norm_rope`（PR #41657）；通过持久 top-k reduce 实现更快的 MoE 内核（PR #39832）。  
- **吞吐量**：现场报告确认，DeepSeek-V4.1 Flash 在 8× RTX PRO 6000（SM120，仅 PCIe）上运行稳定，并可观测到预填充/解码吞吐量（Issue #40877）。

> 🔗 [Issue #33522](https://github.com/sgl-project/sglang/issues/33522) | 🔗 [PR #44326](https://github.com/sgl-project/sglang/pull/44326) | 🔗 [PR #39832](https://github.com/sgl-project/sglang/pull/39832) | 🔗 [Issue #40877](https://github.com/sgl-project/sglang/issues/40877)

---

### **5. 稳定性与回归问题**  
今日报告的关键问题包括：  
1. **CUDA 核心转储追踪器** (#26340)：CI 自动收集的核心转储显示频繁的 GPU 崩溃——很可能与 flashinfer 或内核启动有关（326 条评论，高危）。  
2. **非贪婪请求下的推测解码崩溃** (#43412)：服务器在首个非贪婪请求处崩溃，原因在于 flashinfer 验证采样操作中的 JIT 失败（pip 与捆绑式 CUDA 工具包版本不匹配）。  
3. **GLM-5.3-Flash Attention 后端崩溃** (#42012)：`fa4` 后端在 CUDA Graph 捕获阶段因混合扩展重塑失败；仅 `triton` 在 SM120 上可用。  
4. **Admin API 安全漏洞** (#43706)：当未设置 `--admin-api-key` 时，`--api-key` 可访问管理员端点（存在 RCE 风险）。  
5. **NPU HiCache 主机池崩溃** (#42672)：当设备 k_buffer 为单个张量时，`MHATokenToKVPoolHost` 会崩溃（发生在 #40326 之后）。

> 🔗 [Issue #26340](https://github.com/sgl-project/sglang/issues/26340) | 🔗 [Issue #43412](https://github.com/sgl-project/sglang/issues/43412) | 🔗 [Issue #42012](https://github.com/sgl-project/sglang/issues/42012) | 🔗 [Issue #43706](https://github.com/sgl-project/sglang/issues/43706) | 🔗 [Issue #42672](https://github.com/sgl-project/sglang/issues/42672)

---

### **6. 对应用开发者的启示**  
- **智能体工作流**：预期将迎来更完善的复杂智能体流水线支持，包括新的 LoRA 管理功能（合并/拆分，PR #44354）和 Step 5 预览（PR #44356）。  
- **生产部署**：避免在 SM100 上使用 `--fp4-gemm-backend marlin` 配合 NVFP4 W4A4 检查点（PR #43988）；建议优先选择 `triton` 或 `flashinfer`。  
- **多节点集群**：在 H200 上使用 PD 分离时需谨慎——部分场景下未观察到吞吐量提升（Issue #24488）。  
- **安全提醒**：若未设置 `--admin-api-key`，切勿将 `--api-key` 当作管理员凭证暴露（PR #43706）。  
- **特定硬件构建**：使用 pip 安装的 CUDA 工具包时需格外小心——除非使用系统 CUDA 工具包，否则推测解码在非贪婪请求下会失败（Issue #43412）。

> ✅ 小贴士：关注 CI 不稳定问题（Issue #42752），并在“CI 维护模式”期间（Issue #21065）避免合并 PR。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 摘要 – 2026-10-15**

---

### **1. 今日亮点**  
最新更新聚焦于 GPU 后端的稳定性与正确性修复，尤其在 CUDA 和 Vulkan 平台，关键补丁解决了非法内存访问、Flash Attention 的顺序问题以及 MoE 专家处理缺陷。新增对 *Nemotron Super 3.5 VL* 与 *Bolt 74B A9B* 模型的支持，扩展了多模态推理能力，同时 `MMQ` 与 `MUL_MAT` 内核的性能优化进一步提升了低比特量化下的效率。

---

### **2. 发布与破坏性变更**  
今日未发布新的标签版本。但若干 PR 引入了行为变更：  
- **`--prefetch-experts-slots N`**（PR #28414）启用 MoE 专家的前瞻 H2D 预取——非破坏性但对大型 MoE 模型有显著优化效果。  
- **`--cache-ram` 现在会排除重排/嵌入任务中未使用的提示缓存条目**（PR #30498），防止仅用于重排的服务器出现不必要的内存膨胀。  
- **`tojson` 输出现采用 Python 风格浮点格式**，避免截断问题（PR #30362）。

> 🔗 [PR #30498 – 仅保存可恢复的槽位状态](https://github.com/ggml-org/llama.cpp/pull/30498)  
> 🔗 [PR #28414 – 预取 MoE 专家](https://github.com/ggml-org/llama.cpp/pull/28414)

---

### **3. 新模型与硬件支持**  
- 通过新架构 `NemotronH_Omni_Reasoning_V3`（PR #30520）新增支持 **Nemotron Super 3.5 VL** 与 **Nemotron Bolt 74B A9B**。  
- **Adreno 850** 现可通过编译器版本解析正确识别为 E17（不再回退至 E031）（PR #30555）。  
- **Maion-Coder** 架构现获得原生支持（PR #29778）。  
- **PTQ1_0** 量化格式现已支持 CUDA（PR #29676）。

> 🔗 [PR #30520 – Nemotron 支持](https://github.com/ggml-org/llama.cpp/pull/30520)  
> 🔗 [PR #30555 – Adreno 850 编译器检测](https://github.com/ggml-org/llama.cpp/pull/30555)  
> 🔗 [PR #29778 – Maion-Coder 支持](https://github.com/ggml-org/llama.cpp/pull/29778)

---

### **4. 性能与优化**  
- **CUDA MMQ 内核**通过将 Stream-K 网格大小限制为实际工作单元，减少启动开销与修复延迟（PR #30553）。  
- **CUDA MUL_MAT** 在低比特类型（`q4_K`、`q8_0`）上通过内核重排序实现性能提升（PR #30517）；基准测试显示矩阵链整体提升 2–3%。  
- **AMD GPU 上无 WMMA 时启用 SIMT 隐式 GEMM conv2d**（PR #30325），提升新款 RDNA3+ 设备上的卷积吞吐量。  
- **RPC 张量传输日志**增强，增加字节计数（KiB/MiB/GiB）以改善调试体验（PR #30481）。

> 🔗 [PR #30553 – MMQ 网格上限](https://github.com/ggml-org/llama.cpp/pull/30553)  
> 🔗 [PR #30517 – 更快的 MMQ](https://github.com/ggml-org/llama.cpp/pull/30517)  
> 🔗 [PR #30325 – AMD SIMT conv2d](https://github.com/ggml-org/llama.cpp/pull/30325)

---

### **5. 稳定性与回归问题**  
今日报告的高严重性问题包括：  
- **RTX 5090 上 CUDA Graph 停滞**，由 `sm_120` 兼容性问题引起（Issue #27330）；临时解决方案：`GGML_CUDA_DISABLE_GRAPHS=1`。  
- **Strix Halo (gfx1151)** 上 Vulkan 在长上下文（>128 ubatch）时崩溃，报错 `amdgpu device lost`（Issue #30364）。  
- **Gemma4-Assistant 中 Flash Attention 崩溃**，因查询头维度不匹配（Issue #29419）；已在 PR #30286 修复。  
- **Metal 初始化阶段 OOM** 导致服务器提前绑定端口，引发 500 错误（Issue #27309）。

> 🔗 [Issue #27330 – RTX 5090 CUDA Graph 停滞](https://github.com/ggml-org/llama.cpp/issues/27330)  
> 🔗 [Issue #30364 – Strix Halo Vulkan 设备丢失](https://github.com/ggml-org/llama.cpp/issues/30364)  
> 🔗 [PR #30286 – 修复 FA 头维度不匹配](https://github.com/ggml-org/llama.cpp/pull/30286)

---

### **6. 对应用开发者的影响**  
- **运行大型 MoE 模型（如 Qwen3.8、Cohere2Moe）时，请使用 `--prefetch-experts-slots`**，以缓解 CPU-GPU 带宽瓶颈。  
- **在 RTX 5090 上暂时禁用 `cuda_graphs`**，直至漏洞修复；可设置 `GGML_CUDA_DISABLE_GRAPHS=1` 保证推理稳定。  
- **若使用 Flash Attention 或 MTP**，建议升级至近期构建版本——`FA` 与 `MUL_MAT` 的回归问题已修复。  
- **Vulkan 用户**：在 AMD RX 7900 XTX / Strix Halo 上使用长上下文时需谨慎；可考虑降低 `ubatch` 值或禁用 `flash_attn`。  
- **模型开发者**：使用 `--cache-ram` 时需注意——仅用于重排的服务器现在会避免缓存不可达的提示数据，防止内存膨胀。

> ✅ **建议**：为获得大多数稳定性改进，建议锁定构建版本至 `b11627` 及以上。在高端 GPU 生产部署时，请关注 Issue #27330 与 #30364 的进展。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

### **Ollama Digest — 2026-10-15**

#### **1. 今日亮点**  
v0.40.5-rc0 版本在跨平台推理方面带来关键改进，包括将 Metal 自定义内核移植至 CUDA，以提升 NVIDIA GPU 上的性能。一个关键修复使 OpenAI 兼容响应能够正确处理对话历史中的外部工具调用状态，增强了代理间的互操作性。与此同时，多个高严重性稳定性问题已在不同 GPU 架构上被报告，尤其集中在上下文处理和内存访问方面。

#### **2. 发布与破坏性变更**  
- **v0.40.5-rc0**：引入对 Metal 优化内核的 CUDA 支持（PR #18657），实现苹果与 NVIDIA 硬件上的统一内核执行。  
- **破坏性变更**：`OLLAMA_CONTEXT_LENGTH` 现在在 API 响应（`/api/show`, `/api/tags`）中被尊重——此前该设置被忽略（Issue #18995）。依赖这些端点的用户需更新预期行为。  
- **弃用警告**：由于格式变更，`nimble:latest` 等模型不再兼容 v0.40.4+（Issue #18998）。请重新下载或使用旧版本，直至重新发布。

#### **3. 新模型与硬件支持**  
- 通过 PR #18698 新增 **K2 Horizon 模型**（架构 `"k2-horizon"`），支持 MBZUAI IFM 的 0.9B–36B MoE 变体。  
- **d1-3B 与 d1-omni-600M** GGUF 模型现已支持（Issue #18890），具备图像与音频输入能力。  
- **ROCm (AMD)**：仍受 `TensileLibrary_lazy_gfx1200.dat` 加载失败影响（Issue #17782）；暂无修复方案。  
- **CUDA**：RTX 5090 用户报告在 Cohere MoE 场景下出现非法内存访问崩溃（Issue #18642）；调查正在进行中。

#### **4. 性能与优化**  
- **延迟优化**：OpenAI 兼容端点现在基于 *已评估* 的 token 数量正确计算提示延迟（PR #18964），修复了缓存预热场景下 `prompt_per_second` 指标被高估的问题。  
- **内存效率**：PR #18991 默认禁用小型 Qwen3.5 模型（如 0.8B、2B）的思考模式，防止死循环并降低计算开销。  
- **工具调用解析**：PRs #18281、#18288 与 #17914 提升了 Qwen3-Coder 在代理工作负载下的解析鲁棒性，降低过早终止风险。

#### **5. 稳定性与回归**  
| 严重性 | 问题 | 状态 | 链接 |
|--------|------|-------|------|
| 严重 | `glm-5.3-flash:cloud` 出现“严重退化”现象（重复输出“the = the...”），源于零填充数据区（集群 829） | 开放 | [Issue #18980](https://github.com/ollama/ollama/issues/18980) |
| 高 | RTX 5090 上运行 Cohere MoE 时发生 CUDA 非法内存访问崩溃（Windows） | 开放 | [Issue #18642](https://github.com/ollama/ollama/issues/18642) |
| 高 | `clef-flash` 在 `n_ctx=16384` 时因强制 `n_ubatch = n_ctx` 导致 OOM/GGML_ASSERT 失败 | 开放 | [Issue #18865](https://github.com/ollama/ollama/issues/18865) |
| 中等 | `deepseek-v4.1-flash:cloud` 在图像输入超过约 655k token 时返回 500 错误 | 开放 | [Issue #18853](https://github.com/ollama/ollama/issues/18853) |
| 低 | `gemma4:12b` 必须设置 `ctx_other`（否则静默失败） | 开放 | [Issue #18898](https://github.com/ollama/ollama/issues/18898) |

> ✅ **正在处理的修复合并请求**：PR #19003（外部压缩处理）与 #18993（MLX 版本升级）解决部分客户端兼容性问题。

#### **6. 对应用开发者的启示**  
- **若使用 v0.40.4+，请避免使用 `nimble:latest` 与 `tev1`**——它们不兼容；升级后可能出现性能下降（Issue #19002）。  
- **不要依赖 OpenAI 兼容端点中的 `response.id` 唯一性**——仅存在 999 个可能值（Issue #18655, #18996）；像 LiteLLM 这类客户端可能静默丢弃冲突。建议改用 `model_id` + `message_id` 组合。  
- **验证上下文长度行为**——`OLLAMA_CONTEXT_LENGTH` 现已在 API 元数据中生效（Issue #18995），下游工具必须遵守此限制。  
- **为代理工作流设计容错机制**：工具调用解析器（Qwen3 系列）可能在部分标签时失败；应实现重试逻辑或回退消息处理。  
- **预期大上下文云模型存在不稳定**（如 `deepseek-v4.1-flash:cloud`, `clef-flash`）——除非经过测试，否则避免使用过长提示或图像输入。

> 🔗 **关键资源**：  
> - [OpenAI 兼容 ID 冲突修复（PR #18996）](https://github.com/ollama/ollama/pull/18996)  
> - [模型特定回归问题（GitHub Issues）](https://github.com/ollama/ollama/issues?q=is%3Aissue+is%3Aopen+label%3Abug)  
> - [Hugging Face 模型浏览器功能请求（PR #19000）](https://github.com/ollama/ollama/pull/19000) – 关注未来集成进展。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

### **1. 今日亮点**  
LiteLLM 最新更新聚焦于 Responses API 和兼容 Anthropic 的 `/v1/messages` 流式接口的关键稳定性修复，尤其针对工具调用和 `cache_control` 处理。新增的 PR 解决了通过 `/v1/responses` 路由 GPT-5 模型的长期问题、AgentCore 网络搜索的成本追踪，以及 MCP 网关的安全性与作用域控制。这些变更体现了向企业级 LLM 编排生产就绪状态的强烈推进。

---

### **2. 发布与破坏性变更**  
今日未发布新的稳定版本。最新版本为：  
- `v1.107.0-dev.1`（开发版）  
- `v1.106.0-rc.3`（发布候选版）  
- `v1.105.1`（补丁版）  

所有 Docker 镜像均使用 **cosign** 签名，并采用自 [提交 `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0) 引入的一致密钥。未宣布任何破坏性变更；但用户在部署前应验证镜像签名。

---

### **3. 新模型与硬件支持**  
- **GPT-6-Astra**：通过 [PR #46551](https://github.com/BerriAI/litellm/pull/46551) 加入假提供商部署（`openai/gpt-6-astra`, `azure/gpt-6-astra`），支持本地测试下一代模型。  
- **AgentCore 网络搜索**：成本映射中定价调整为 **每 1,000 次查询 7 美元**（[PR #46558](https://github.com/BerriAI/litellm/pull/46558)），与 AWS Bedrock 定价一致。  
- **MCP 网关增强**：新增通过 `x-mcp-servers` 头部和 `mcp_disabled_capabilities` 实现作用域内服务器访问控制与抑制冗余提示/资源（[PRs #46545, #46563](https://github.com/BerriAI/litellm/pulls?query=is%3Aopen+author%3Ayassin-berriai)）。

---

### **4. 性能与优化**  
- **流式工具调用修复**：多个 PR 优化了流式行为：  
  - 将并行工具调用拆分为独立数据块，避免无效的 `{...}{...}` 输入 JSON（[PR #46492](https://github.com/BerriAI/litellm/pull/46492)）。  
  - 修复伪造流条目以支持正确的 delta 传输（[PR #46533](https://github.com/BerriAI/litellm/pull/46533)）。  
- **成本准确性**：修正了 `gpt-image-2.5-flare` 请求中欧盟数据驻留溢价（10%）的静默遗漏问题（[Issue #46407](https://github.com/BerriAI/litellm/issues/46407)）。  
- **延迟与吞吐量**：通过从拥有服务器而非扫描所有上游服务来解析 `tool_id`，提升了 MCP 服务器工具解析性能（[PR #46545](https://github.com/BerriAI/litellm/pull/46545)）——在高并发场景下显著降低延迟。

---

### **5. 稳定性与回归问题**  
今日报告的首要稳定性问题：  
1. **流式模式下工具调用失败** ([#25390](https://github.com/BerriAI/litellm/issues/25390))：当 Gemma 4-31b-it 通过 Anthropic API 路由时，在流式传输中无法发出 `tool_use.input`。*修复 PR 待处理。*  
2. **大型数据库下预算重置失败** ([#46404](https://github.com/BerriAI/litellm/issues/46404))：当 `LiteLLM_EndUserTable` 表超过百万行时，因数据库事务超时导致预算重置在 30 秒后停滞。*高严重性回归，影响计费准确性。*  
3. **干净流中缺失 `finish_reason`** ([#40260](https://github.com/BerriAI/litellm/issues/40260))：OpenAI/Azure 流中若无 `finish_reason`，会被错误标记为成功完成。*影响下游代理逻辑。*  
4. **Responses Bridge 中丢失 `cache_control`** ([#27950](https://github.com/BerriAI/litellm/issues/27950))：`input_text` 块上的 `cache_control` 在转换过程中被无声丢弃。*破坏提示缓存预期。*

---

### **6. 对应用开发者的影响**  
- **使用 `/v1/responses` 路由 GPT-5 模型**：请确保客户端将 `gpt-5.x` 模型通过 `/v1/responses` 路由——此操作现已为必需且已正确支持（[#33114](https://github.com/BerriAI/litellm/issues/33114)）。  
- **启用 OpenTelemetry 跟踪**：设置 `LITELLM_OTEL_V2=1` 后，响应现在包含 `traceresponse` 头部，提升可观测性（[PR #42079](https://github.com/BerriAI/litellm/pull/42079)）。  
- **验证成本日志**：确认欧盟数据驻留费用及 AgentCore 搜索成本已正确反映——在修复落地前可能需要手动核查。  
- **避免过大的用户表**：若管理超过 100 万终端用户，请密切监控预算重置任务——考虑分片或清理旧记录。  
- **更新守卫规则集成**：Airia 守卫规则现已在 Guardrail Garden 中具备完整 UI 可见性（[PR #46562](https://github.com/BerriAI/litellm/pull/46562)）。  

> ✅ **行动项**：检查部署中 `litellm_settings.request_timeout` 的配置——上游沉默可能导致无限挂起（[#38358](https://github.com/BerriAI/litellm/issues/38358)）。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

### **Unsloth 简报 — 2026-10-15**

#### **1. 今日亮点**  
Unsloth 桌面客户端持续扩展其多模态与多服务器功能，关键 PR 实现了通过 `llama.cpp` RPC 在跨机器间提供 GGUF 服务（#13726），以及在 AMD/ROCm 系统上改进扩散模型卸载（#13774）。针对 macOS 信号处理（#13782）、浏览器代理持久化（#13785）和集成式 AMD GPU 上的 Vulkan 内存耗尽问题（#13786）完成了关键稳定性修复。

#### **2. 发布与破坏性变更**  
*无* — 近 24 小时内未观察到新版本发布或破坏性 API 变更。

#### **3. 新模型与硬件支持**  
- **多服务器 GGUF 协调**：PR #13726 实现单个 GGUF 模型通过 `llama.cpp` RPC 在多台机器上分发服务，适用于分布式推理集群。  
- **AMD Vulkan 备用方案**：PR #13786 通过在集成 GPU 上保留 `sd.cpp` 预算中的固定权重，解决旧款 AMD 显卡（如 Vega 10）的兼容性问题。  
- **ROCm 区域编译**：PR #13774 解除对 ROCm 上 `torch.compile` 的硬编码拒绝，允许在支持的 AMD 硬件上实现更快的扩散推理。  
- **外部图像生成**：PR #13756 在 Studio UI 中新增对通过外部 OpenAI 兼容端点（Ollama、vLLM、sd-server 等）生成图像的支持。

#### **4. 性能与优化**  
- **融合 INT8 GEMM 延迟门控**：PR #13772 为 Triton 3.8 的融合 INT8 GEMM 内核引入延迟感知调度，缓解在 PyTorch 2.14 升级后于 A100/L4 上出现的约 2–3 倍性能下降。  
- **扩散内存规划**：PR #13724 实现学习激活峰值与 OOM 重试逻辑，在 FLUX.2 和视频生成过程中显著提升 8–24GB 显存设备的成功率。  
- **音频管道迁移**：PR #13753 废弃 `whisper.cpp`，默认采用 `audio.cpp` + Qwen3-ASR，带来更优性能与更低 CPU 占用。  
- **模型专属调优**：PR #13764 将音频与扩散选项设为模型推荐默认值，减少手动配置负担。

#### **5. 稳定性与回归问题**  
- **macOS 下 Ctrl+C 导致崩溃**：PR #13782 修复在 macOS 上通过 Ctrl+C 停止 `llama-server` 时因双重信号触发导致的终端崩溃。  
- **AMD Vulkan GTT 资源耗尽**：PR #13786 修复集成式 AMD GPU（如 Strix Halo）因缓冲区分配不当引发的内存不足错误。  
- **浏览器面板状态丢失**：PR #13762 确保浏览器面板中 cookies 与 localStorage 在页面跳转后仍可持久保留。  
- **输入框被任务栏遮挡（Windows）**：问题 #13616 报告用户界面布局缺陷，输入栏被任务栏遮挡；暂无修复方案。  
- **回复后聊天输入框消失（v0.1.906-beta）**：问题 #13604 指出更新后聊天界面存在回归问题，影响可用性。  

> 🔧 *除 Windows 布局与 UI 状态持久性外，所有主要回归问题均已提供修复 PR。*

#### **6. 对应用开发者的影响**  
- **分布式推理**：使用 `llama.cpp` RPC 集成（#13726），可在不重复存储模型的前提下跨多个节点扩展推理能力。  
- **跨平台健壮性**：利用更新后的 Vulkan 与 ROCm 支持，可在旧款 AMD 硬件上部署模型，并确保扩散推理稳定运行。  
- **降低开发摩擦**：自动调优的音频/扩散设置（#13764）及移除 `whisper.cpp` 减少了依赖管理复杂度。  
- **代理可靠性提升**：修复浏览器代理持久化（#13785）与信号处理（#13782）问题，改善生产环境中长时间运行代理工作流的稳定性。  
- **关注回归风险**：若依赖聊天输入连续性，请避免使用 v0.1.906-beta；预计近期将推出修复布局问题的更新。

👉 *GitHub 链接*：  
- [PR #13726](https://github.com/unslothai/unsloth/pull/13726) – 分布式 GGUF 服务  
- [PR #13786](https://github.com/unslothai/unsloth/pull/13786) – AMD Vulkan 内存修复  
- [PR #13774](https://github.com/unslothai/unsloth/pull/13774) – ROCm 编译启用  
- [Issue #13604](https://github.com/unslothai/unsloth/issues/13604) – 聊天输入回归  
- [Issue #13616](https://github.com/unslothai/unsloth/issues/13616) – Windows 任务栏重叠  

---  
*简报生成时间：2026-10-15 | 来源：github.com/unslothai/unsloth*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*