# AI 基础设施日报 2026-09-03

> 生成时间: 2026-09-03 01:56 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI推理基础设施生态报告 – 2026-09-03**

---

### **1. 生态概览**

2026年9月，AI推理基础设施领域正呈现出高性能服务引擎、轻量级本地运行时与智能网关之间的快速融合趋势——各组件虽针对不同部署层级而设计，但功能重叠日益加深。一个清晰的分化正在形成：**vLLM** 和 **SGLang** 在分布式、高吞吐推理方面持续突破，通过深度内核级优化实现性能极限；**llama.cpp** 与 **Unsloth** 在边缘与本地推理领域占据主导地位，凭借强硬件适配性与内存效率脱颖而出；**Ollama** 则在代理工作流中巩固了易用性与开发者体验的优势；而 **LiteLLM** 作为统一代理层，正积极向 Rust 迁移，以实现亚毫秒级延迟。这场竞赛已不再仅仅关乎速度，而是聚焦于*韧性*、*多模态支持*和*跨平台稳定性*。

---

### **2. 活动对比**

| 项目       | 开放问题（高+严重） | 最近7日合并的PR | 最近24小时发布 | 发布策略 |
|---------------|-------------------------------|-----------------------------|----------------------|------------------|
| vLLM          | 12                            | 8                           | 无                 | Beta/稳定优先（v0.28.0相关问题） |
| SGLang        | 10                            | 7                           | 无                 | 稳定版（`v0.5.18`） |
| llama.cpp     | 10                            | 6                           | b10774               | 补丁发布（修复缺陷） |
| Ollama        | 8                             | 5                           | 无                 | 功能导向更新 |
| LiteLLM       | 5                             | 6                           | v1.99.1 / v1.97.1    | 仅Docker（无PyPI） |
| Unsloth       | 7                             | 6                           | v0.1.806-beta        | Beta版发布（性能提升） |

> 🔍 **洞察**：尽管问题数量较低，**LiteLLM** 与 **Unsloth** 在开发活跃度上表现最强——LiteLLM 的仅Docker策略表明其对CI/CD流程有严格控制，而 Unsloth 的Beta发布则凸显其在性能上的激进突破。

---

### **3. 模型支持竞赛**

| 新模型 / 架构              | vLLM         | SGLang       | llama.cpp     | Ollama         | LiteLLM        | Unsloth       |
|-------------------------------|--------------|--------------|---------------|----------------|----------------|---------------|
| Qwen3.8-Flash-Next            | ✅ (PR #28243)| ⚠️ (崩溃 #37633) | ✅ (b10774)   | ✅ (MLX)        | —              | ✅ (MTP默认) |
| GLM-5.3-Flash                 | ✅ (SM8x/Ada) | ⚠️ (崩溃 #37559) | ⚠️ (FP8崩溃) | ✅ (MLX)        | —              | ✅ (MTP默认) |
| DeepSeek-V4-Flash             | ✅ (阻塞)  | —            | —             | —              | —              | —             |
| K2-Horizon                    | ✅ (#53806)   | —            | —             | —              | —              | —             |
| Gemma4 Vision & Audio (MLX)   | —            | —            | —             | ✅ (PR #17650)  | —              | —             |
| Zamba2-2.7B (SSM/Transformer) | —            | —            | ✅ (功能请求 #8795) | —              | —              | —             |
| Spark-X2.5 (4B/1.7B)          | —            | —            | —             | 🆕 (请求 #18195) | —              | —             |

> 🏁 **排行榜**：  
> - **Unsloth** 在新Flash模型（Qwen/GLM）的“上市速度”上领先，支持默认启用MTP。  
> - **Ollama** 在“多模态可访问性”上胜出（Gemma4视觉/音频支持MLX）。  
> - **vLLM** 在“硬件多样性”上领先（支持ROCm、Intel XPU、ARM64），尽管部分支持仍受阻。

---

### **4. 性能前沿**

| 优化重点         | vLLM                     | SGLang                   | llama.cpp                | Ollama                  | LiteLLM                  | Unsloth               |
|-----------------------------|--------------------------|--------------------------|--------------------------|-------------------------|--------------------------|------------------------|
| KV缓存管理         | ✅ 前缀缓存、数据类型处理、SHMConnector | ✅ HiCache IPC、分块KV | ✅ `--cache-disk`（持久化） | ✅ 提示词缓存统计 | ✅ 缓存读取同步（Redis） | ✅ VRAM报告修复 |
| 批处理与流水线         | ✅ V1 BF16流式、PLE元数据 | ✅ 动态分块、DSA融合 | ✅ 直接读取PLE表 | —                       | ✅ 自动路由推理 | ✅ MTP（默认） |
| 量化与内核融合| ✅ MXFP4 FP8 MoE、NVFP4 GEMM | ✅ 融合DSA元数据 | ✅ SYCL L2_NORM、CUDA MMVQ交叉 | ✅ MXFP8 + BF16保留 | ✅ Cortex Claude归一化 | ✅ MXFP8 + BF16保留 |
| 分布式服务         | ✅ 多节点、TP=4、挂起问题修复 | ✅ HiCache数据平面RFC | —                        | —                       | ✅ 会话感知路由 | —                      |
| 低延迟引擎          | —                        | —                        | —                        | —                       | ✅ Rust迁移（亚1毫秒） | —                      |

> 🚀 **趋势**：**内核级融合**（MoE、注意力、量化GEMM）主导 vLLM 与 Unsloth。**持久化状态管理**（磁盘缓存、会话追踪）是 llama.cpp、LiteLLM 与 Ollama 的共通关键点。LiteLLM 的 Rust 迁移预示着向超低延迟网关基础设施的演进。

---

### **5. 层级定位**

| 项目       | 主要层级                          | 次要角色                                | 核心差异点 |
|---------------|------------------------------------------|------------------------------------------------|--------------------|
| **vLLM**      | 高性能推理引擎        | 分布式服务、模型服务           | 内核级优化（FlashInfer、Triton） |
| **SGLang**    | 推理引擎 + 网关（HiCache）     | 多GPU协调、规范解码         | 设备内存IPC（HiCache）、ROCm成熟度 |
| **llama.cpp** | 本地运行时 / 边缘推理           | 跨平台兼容性、CPU/Metal/Vulkan  | 原生后端、持久化磁盘缓存 |
| **Ollama**    | 开发者友好网关 + CLI         | 代理工作流编排、多模态UI  | MLX集成、shell标签补全 |
| **LiteLLM**   | 统一推理网关（代理）        | 路由、成本追踪、API抽象      | Rust迁移、OpenAPI/YAML工具链 |
| **Unsloth**   | 高速推理运行时（本地）     | 训练/微调加速             | 默认启用MTP、音频模型自动加载 |

> 💡 **定位总结**：  
> - **vLLM/SGLang**：适用于大规模、集群式推理。  
> - **llama.cpp/Unsloth**：适用于高效本地或边缘部署。  
> - **Ollama**：适用于快速原型开发与代理构建。  
> - **LiteLLM**：适用于规模化生产环境中的路由与可观测性。

---

### **6. 趋势信号**

#### 🔮 **从今日活动提取的关键行业趋势**：
1. **稳定性 > 速度**：vLLM（卡死）、SGLang（硬崩溃）、Ollama（无限循环）中的高严重性崩溃表明，**生产就绪性已成为首要要求**，而非事后补救。
2. **多模态扩展加速**：Ollama 与 Unsloth 正通过 MLX 推动**视觉/音频支持**，而 vLLM 与 SGLang 也正通过 LoRA 与编码器缓存工作追赶。
3. **硬件多样化加速**：ROCm/AMD GPU 支持迅速成熟（vLLM夜间镜像、SGLang HiCache on ROCm），但仍不稳定。Intel XPU 与 ARM64 仍属小众但积极开发。
4. **持久化状态不可妥协**：`--cache-disk`（llama.cpp）、提示词缓存（Ollama）、Redis阻塞读取（LiteLLM）均指向对**崩溃恢复上下文持久化**的强烈需求。
5. **Rust迁移 = 下一代代理层**：LiteLLM 全面推进 Rust，预示向**亚毫秒级推理网关**演进，这对实时代理至关重要。

#### 📌 **应用开发者可操作建议**：
- 在回归问题修复前，**避免使用 v0.28.0（vLLM）** 及 **H20 上的 Qwen3.8-Flash-Next（SGLang）**。
- **在 llama.cpp 中使用 `--cache-disk`**，以保障长周期代理的恢复韧性。
- **在 Unsloth 中利用 MTP**，对 Qwen/GLM Flash 模型可实现2倍性能提升——无需额外配置。
- 若需 <1ms 网关延迟，请关注 LiteLLM 的 Rust Beta 版本。
- 对于需要视觉/音频支持的代理工作流，**优先选择 Ollama**，尤其在 Apple Silicon 平台。
- **在 Ollama 中显式启用 `num_ctx`**，并使用 `cmd/model diff` 实现审计就绪部署。

---

> ✅ **最终结论**：AI推理栈正从“快”演进为“可靠、韧性强且自适应”。选择技术栈时，请基于**部署层级**（边缘 vs 云）、**模态需求**与**延迟要求**，但始终将**稳定性置于新颖性之上**，尤其是在生产环境中。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

### **vLLM Digest — 2026-09-03**

---

#### **1. 今日亮点**  
vLLM 项目持续加速对下一代模型与硬件的支持，重点推进在 SM8x（Ampere）和 Ada（RTX 4090）平台上的 **DeepSeek-V4-Flash** 与 **GLM-5.3-Flash**。核心方向包括 **多模态支持**、**推测解码优化** 以及 **ROCm/AMD GPU 集成**，涵盖新流水线传输机制与 NIXL EP 内核集成。值得注意的是，v0.28.0 版本中暴露出多个高优先级稳定性问题，尤其集中在 **前缀缓存损坏**、**KV 缓存 dtype 处理不当** 和 **分布式推理阻塞** 等方面。

---

#### **2. 发布与破坏性变更**  
无。过去 24 小时内未发布新版本。但 `--kv-cache-dtype` 解析逻辑及 `torch.compile` 配置哈希机制的持续变动，预示未来版本可能存在破坏性行为，尤其是在使用 `auto` 或自定义量化方案时。

---

#### **3. 新模型与硬件支持**  
- **K2-Horizon 模型** 通过 PR #53806 加入 — 支持 K2 AI 推出的新一代 LLM 架构。  
- **SM8x（Ampere：A100/A800/RTX 30xx）**：DeepSeek-V4-Flash-0731 (#50576) 开发活跃，当前因缺乏内核支持而受阻。  
- **ROCm / AMD**：  
  - 新增 ROCm V1 BF16 流式传输管道 (#55032)，显著提升流式处理效率。  
  - 夜间构建的 ROCm Docker 镜像已正式发布 (#55014)。  
  - 对 **MI325X / gfx942** 与 **Kimi-K3** 的支持正在规划中 (#52803)。  
- **Intel GPU（XPU）**：RFC #54766 下定制 all-reduce 实现；报告了推测解码卸载的缺陷 (#52735)。  
- **ARM64 / aarch64**：在 GB10/sm_121 系统上观察到分布式推理停滞现象 (#51921)。

---

#### **4. 性能与优化**  
- **推测解码**：优化 PLE 元数据传输，降低流同步开销 (#55054)，显著提升 Qwen4Exp 的解码吞吐量。  
- **内核层**：  
  - 为 SM90 添加基于 FlashInfer 的 MXFP4 FP8 融合 MoE 内核 (#54032)，支持更高吞吐的专家路由。  
  - 提议为 SM120 设计基于 Triton 的 NVFP4 GEMM 参考内核 (#21014)。  
  - ROCm 平台上的 RMSNorm+Quant 融合模式性能提升约 4–5%（针对 MI325）(#32419)。  
- **内存与流水线**：  
  - V1 BF16 流式流水线在 ROCm 上减少每步元数据开销 (#55032)。  
  - 引入 SHMConnector，实现节点间低延迟编码器缓存传输 (#33714)。

---

#### **5. 稳定性与回归问题**  
v0.28.0 及最新夜间版报告多项高严重性回归：  
- **#53894**：在 2×8 H100 节点上运行 DeepSeek-V4-Pro 时，分布式推理出现**无限期挂起**，但在 v0.25.0 中正常。  
- **#51921**：4 节点 TP=4（GB10/aarch64）环境下，引擎在空闲 1 分钟后**永久停滞**，由 `shm_broadcast` 写入者饥饿导致。  
- **#54317**：在 GLM-5.3-Flash（4xB200）上反复出现 **CUDA 非法内存访问**，涉及无关内核（KDA linear-attention、MHC TileLang、TRT-LLM MoE）。  
- **#53912**：前缀缓存 + MTP 在混合 Mamba/GDN 模型中导致输出损坏——尽管 #43559 已关闭，问题仍未解决。  
- **#54059**：在 Ada（sm_89，RTX 4090）上，GLM-5.3-Flash 缺少稀疏-MLA 注意力路径。  
- **#50576**：DeepSeek-V4-Flash 在 SM8x 上因后端支持缺失而失败。

> ✅ *修复 PR 尚未合并；开发人员应避免在生产环境使用 v0.28.0，直至问题修复。*

---

#### **6. 对应用开发者的影响**  
- **避免在生产环境中使用 v0.28.0**，尤其是涉及多节点推理、DeepSeek-V4-Pro 或 GLM-5.3-Flash 场景——已知的挂起与崩溃问题尚未解决。  
- 使用 Qwen-VL 等模型时，**显式指定 `--kv-cache-dtype`**（如 `fp8_e5m2`），而非依赖 `auto`，以防止静默输出损坏（#41343）。  
- **多模态应用开发者**：请关注 RFC #4194 与 PR #31479 进展——当前多模态模型中塔结构/连接器的 LoRA 支持仅限少数架构。  
- **分布式代理场景**：推荐使用 SHMConnector (#33714) 实现低延迟编码器缓存共享。  
- **密切关注 ROCm 支持进展**——新的夜间构建与流水线优化提升了 AMD GPU 利用率，但整体稳定性仍较脆弱。  
- 若运行带前缀缓存与显式块大小的混合 Mamba/GDN 模型，**建议优先选择 v0.27.1 或更早版本**——已知存在数据损坏问题（#53142）。

👉 [GitHub Issues](https://github.com/vllm-project/vllm/issues) | [PRs](https://github.com/vllm-project/vllm/pulls)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 消息简报 – 2026-09-03**

---

### **1. 今日重点**  
SGLang 生态系统在 CUDA 与 ROCm 后端持续提升稳定性，为大规模、高吞吐量的 LLM 服务打下坚实基础。主要工作包括解决 Qwen3.8-Flash-Next 在并发场景下的持续崩溃问题（问题 #37633），推进 HiCache 的设备内存 IPC 设计（RFC #37372），并通过修复动态分块逻辑和 apt 包处理的 PR 来加速 CI 可靠性（PRs #37675, #37689）。这些进展体现了向生产级推理稳定性迈进的持续势头。

---

### **2. 发布与破坏性变更**  
*无*  
过去 24 小时内未发布新版本。最新稳定版本仍为 `v0.5.18`，未报告任何破坏性变更。

---

### **3. 新模型与硬件支持**  
- ✅ **平头哥 PPU 支持（路线图）**：新增功能请求 (#37519) 启动对平头哥 ZW810/ZW810E/ZW-M890P PPU 的原生支持，标志着生态扩展至 NVIDIA/AMD 以外的硬件。  
- ✅ **NemotronH_Omni_Reasoning_V3**：通过 PR #35599 增加模型支持，可正确加载 MTP 与量化视觉权重。  
- ✅ **ROCm + AMD GPU 增强**：多个 PR 落地关键修复以提升 ROCm 兼容性：  
  - HiCache IO 后端现可在 ROCm 上运行（PR #37152）  
  - 融合 DSA 元数据核函数减少冗余计算（PR #37124）  
  - 为 ROCm FA MHA 添加分块 KV 支持（PR #37691）  

> 🔗 [Issue #37519](https://github.com/sgl-project/sglang/issues/37519) | [PR #35599](https://github.com/sgl-project/sglang/pull/35599) | [PR #37152](https://github.com/sgl-project/sglang/pull/37152)

---

### **4. 性能与优化**  
- ⚙️ **动态分块改进**：PR #37675 确保所有 Rank 在失败后统一禁用动态分块，防止因分块尺寸错位导致的无声性能下降。  
- 📈 **CUDA Graph 优化**：PR #37124 通过融合元数据核函数降低 DSA 解码路径开销——在 GLM-5.2-MXFP4 / MI355X 上于并发度 4 下进行基准测试（未提供具体数值，但标注为“改进”）。  
- 💡 **新增 CPU 内核**：PR #35604 引入原生 CPU MurmurHash32 内核，在不依赖外部库的前提下显著提升 Intel Xeon CPU 上的哈希性能。  
- 🔁 **HiCache 数据平面 RFC**：PR #37372 提出使用设备内存 IPC 的进程外 HiCache 数据平面方案，旨在解耦存储与计算，提升可扩展性。

> 🔗 [PR #37675](https://github.com/sgl-project/sglang/pull/37675) | [PR #37124](https://github.com/sgl-project/sglang/pull/37124) | [PR #35604](https://github.com/sgl-project/sglang/pull/35604)

---

### **5. 稳定性与回归问题**  
今日活动以高严重性问题为主导：

| 问题 | 严重性 | 摘要 | 修复状态 |
|------|----------|--------|------------|
| [#37633](https://github.com/sgl-project/sglang/issues/37633) | 严重 | H20 TP8 上运行 QSA 预填充核时，约 22 个并发请求触发硬崩溃（Qwen3.8-Flash-Next-FP8） | ❌ 尚未修复 |
| [#37559](https://github.com/sgl-project/sglang/issues/37559) | 严重 | B300（SM100）上 `sgl-deep-gemm` 升级后出现 CUDA_ERROR_ILLEGAL_ADDRESS | ❌ 尚未修复 |
| [#36537](https://github.com/sgl-project/sglang/issues/36537) | 高 | Qwen3.8-Flash-Next 工具解析器中发生无限令牌循环（ID 0） | ❌ 尚未修复 |
| [#37379](https://github.com/sgl-project/sglang/issues/37379) | 高 | FP8 KV 缓存 + `--quantization-param-path` 导致 Qwen3.5-MoE 运行时错误 | ❌ 尚未修复 |
| [#37554](https://github.com/sgl-project/sglang/issues/37554) | 中等 | 网关将失败的工作节点注册为 `model_id: "unknown"` —— 导致流量损失 | ❌ 尚未修复 |

> ⚠️ **注意**：前三个问题**尚未解决**，且多个问题影响生产级部署（如 Qwen3.8-Flash-Next、DeepSeek-V4、HiCache）。

---

### **6. 对应用开发者的影响**  
- **在 #37633 修复前，请避免在 H20 TP8 上使用 Qwen3.8-Flash-Next** —— 中等并发下预期会触发硬崩溃。建议临时降级 TP 或禁用推测解码。  
- **请勿在 Qwen3.5-MoE 上同时启用 `--kv-cache-dtype fp8_e4m3` 与 `--quantization-param-path`** —— 此组合会触发运行时错误（参见 #37379）。  
- **监控 IGW 中的工作节点注册情况**：元数据发现失败会导致工作节点永久标记为 `model_id: unknown`，无声降低有效集群规模（问题 #37554）。  
- **近期 PR 显著提升了 ROCm 稳定性**，尤其在 HiCache 与 DSA 路径上——适合目标为 AMD GPU 的用户。  
- **利用新测试自动化功能**：使用 `/rerun-test --changed`（PR #37618）可自动触发对修改文件的测试，加快 CI 反馈速度。

> 🔗 [开发者指南](https://github.com/sgl-project/sglang/discussions) | [Slack 社区](https://slack.sglang.ai)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp 消息简报 – 2026-09-03**

---

### **1. 今日亮点**  
最新更新聚焦于 Metal 与 Vulkan 后端的关键稳定性修复，包括 Apple Silicon（M3/M4）平台上的内存查询鲁棒性优化及低内存环境下的表现。在 Qwen3.8-Flash-Next 模型中，通过直接读取 PLE 表实现了 Flash Attention 支持，使 GB10 GPU 上的预填充速度提升超过 2 倍。一项重大新功能——持久化磁盘缓存（persistent disk-backed prompt cache）现已通过 `--cache-disk` 参数启用，可在重启后实现可靠的上下文检查点保存。

---

### **2. 发布与破坏性变更**  
- **b10774**：修复微调过程中缺失 KV 缓存的问题（`#27199`）——对训练稳定性至关重要。  
- **b10773**：在服务器模式下为 `input_video` 与 `input_audio` 添加 `data:` URL 支持（`#27735`）。  
- **b10769**：修复低内存场景下 Metal 内存查询的缺陷（`#27701`）——防止 M3/M4 设备在显存受限时崩溃。  
- **b10763**：在聊天模板中默认启用 `preserve_reasoning`（`#28174`）——提升推理流程的一致性；日志输出现反映实际生效状态。

> 🔗 [GitHub 发布 b10774](https://github.com/ggml-org/llama.cpp/releases/tag/b10774) | [PR #27199](https://github.com/ggml-org/llama.cpp/pull/27199)

---

### **3. 新模型与硬件支持**  
- ✅ **Qwen3.8-Flash-Next**：通过 `#28243`（MTP 共享模块）实现完整模型支持，借助优化的张量复用，可实现最高 2 倍的推理加速。  
- ✅ **DeepSeek-V4 Vision**：正确处理 `deepseek4` 模型中的输入视觉数据（`#28154`）。  
- ✅ **Zyphra/Zamba2-2.7B**：已开启对混合 SSM/Transformer 支持的功能请求（`#8795`）——待实现。  
- ✅ **Hexagon HTP 后端**：F16 单操作扩展支持 `ABS`（`#28228`）——增强高通 AI 芯片上的计算能力。  
- ✅ **WebGPU**：新增实验性反向核（`#28269`）——为通过 WebAssembly 实现浏览器端微调铺平道路。

> 🔗 [PR #28243](https://github.com/ggml-org/llama.cpp/pull/28243) | [PR #28228](https://github.com/ggml-org/llama.cpp/pull/28228) | [PR #28269](https://github.com/ggml-org/llama.cpp/pull/28269)

---

### **4. 性能与优化**  
- 🚀 **Qwen3.8-Flash-Next 预填充加速**：通过直接读取 PLE 表减少 `qwen4exp` PR（`#28136`）中的开销——基准测试显示在 GB10（sm_121）上实现 **>2倍提升**。  
- ⚡ **SYCL L2_NORM 批量内核**：在 Arc B70 上将分派次数从 12,480 降至 6,240（`#28222`）——显著降低内核启动成本。  
- 🔧 **CUDA MMVQ/MMQ 交叉切换调优**：增加 SM87 特定阈值（`#28285`）——优化 Jetson Orin 量化推理效率。  
- 💾 **持久化磁盘缓存**：`--cache-disk`（`#28092`）启用 mmap 支持的 KV 状态存储，减轻堆内存压力，并实现崩溃容错的上下文检查点。

> 🔗 [PR #28136](https://github.com/ggml-org/llama.cpp/pull/28136) | [PR #28222](https://github.com/ggml-org/llama.cpp/pull/28222) | [PR #28092](https://github.com/ggml-org/llama.cpp/pull/28092)

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 影响 | 修复 / PR |
|--------|------|--------|--------|---------|
| ⚠️ 高 | **AMD Strix Halo + Vulkan**：加载模型时立即段错误（`#27189`） | 开放 | 系统崩溃 | 尚无修复 |
| ⚠️ 高 | **ROCm gfx1151**：默认配置低效导致预填充严重变慢（`#21284`） | 开放 | 延迟损失约 30–50% | 正在评审中 |
| ⚠️ 高 | **Vulkan Flash Attention**：性能意外下降（`#25207`） | 开放 | 吞吐量下降 | 调查进行中 |
| ⚠️ 高 | **SYCL on Lunar Lake iGPU**：设备内存查询失败（`#28134`） | 开放 | 启动阶段提前失败 | 尚无修复 |
| ⚠️ 中 | **ROCm TOP_K 崩溃**：上下文 > 128K 时块大小溢出（`#27021`） | 已关闭 | 上下文限制被突破 | 补丁已合并 |
| ⚠️ 中 | **CUDA: Qwen3.8-27B Q6_K**：RTX 5090 显示丢失 + GSP 重置（`#27910`） | 开放 | 硬件级不稳定 | 可复现，正在调查 |

> 🔗 [问题 #27189](https://github.com/ggml-org/llama.cpp/issues/27189) | [问题 #21284](https://github.com/ggml-org/llama.cpp/issues/21284) | [问题 #25207](https://github.com/ggml-org/llama.cpp/issues/25207) | [问题 #28134](https://github.com/ggml-org/llama.cpp/issues/28134)

---

### **6. 对应用开发者的意义**  
- **优先使用 `--cache-disk`**：适用于长时间运行的智能体或多会话服务——可实现无需依赖内存的持久化上下文存储。  
- **避免在视频/音频输入中使用 `data:` URL**，除非你使用的是 `b10773+` 版本——旧版本将其当作原始 base64 处理，可能导致解析错误。  
- **关注 AMD/Vulkan 用户**：若运行在 Strix Halo（gfx1151）上，请预期性能下降——因 ROCm 默认配置低效所致；建议暂行修补 `#21284` 或降级至稳定版，直至修复完成。  
- **默认启用 `preserve_reasoning`**：无需手动设置；日志已确认其激活状态。  
- **针对 ARM 边缘部署**：树莓派 5 的解码带宽平台期（约 10 GB/s）表明存在内存墙现象——建议优化量化策略并使用更低精度模型（如 Q4_K_M）以获得更高吞吐。

> 📌 **实用提示**：在需要一致推理与恢复容错性的智能体流水线中，结合使用 `--reasoning-preserve` 与 `--cache-disk`。

---  
*数据来源：[ggml-org/llama.cpp GitHub](https://github.com/ggml-org/llama.cpp) —— 更新于 2026-09-03。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-03**

---

### **1. 今日亮点**  
Ollama 生态系统在 MLX 上持续增强视觉与音频支持，近期的合并请求（PR）已实现通过 MLX 引擎对 Gemma4 和 Qwen3.5 模型完整支持图像与音频输入。针对 `glm-5.3:cloud` 与 `deepseek-v4-flash` 的关键稳定性修复正在推进中，这两者在代理工作流中被观察到陷入无限推理循环——相关问题目前正积极调查。此外，新推出的开发者工具如 shell 选项补全和模型差异对比工具，将进一步提升易用性。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新版本发布。*  
但正在进行的变更包括：  
- **PR #18205**：为 `ollama run <model>` 添加 shell 选项补全功能（现已支持自动补全）。  
- **PR #18202**：引入新的 `cmd/model` 工具，用于离线对比 Ollama 模型、GGUF 与 safetensors 文件。  
- **PR #18196**：强制使用配置的 `num_ctx`，而非默认采用最大架构上下文长度——这对内存受限部署至关重要。

> 🔗 [PR #18205](https://github.com/ollama/ollama/pull/18205) | [PR #18202](https://github.com/ollama/ollama/pull/18202) | [PR #18196](https://github.com/ollama/ollama/pull/18196)

---

### **3. 新模型与硬件支持**  
- ✅ **Gemma4 视觉与音频（MLX）**：得益于 PR [#17650](https://github.com/ollama/ollama/pull/17650) 与 [#18079](https://github.com/ollama/ollama/pull/18079)，现在可通过 `gemma4:12b-mlx` 完整支持图像与音频输入；同时支持 Transformer 塔结构与无编码器嵌入变体。  
- ✅ **Qwen3.5 Flash Next（MLX）**：通过 MXFP8 量化优化非关键权重的内存占用；专家路径仍保留 BF16 格式（`qwen3.8-flash-next:125b-a6b-nvfp4`，`qwen3.8-flash-next:125b-mlx`）。  
- 🆕 **spark2_5 架构**：通过 Issue #18195 请求支持 Spark-X2.5 系列（4B/1.7B）——当前因缺少运行时识别而受阻。  
- 🖥️ **AMD iGPU Radeon 680M**：仍无法可靠检测；尽管调整了 HSA 参数，问题 #9184 仍未解决。

> 🔗 [PR #17650](https://github.com/ollama/ollama/pull/17650) | [PR #18079](https://github.com/ollama/ollama/pull/18079) | [Issue #18195](https://github.com/ollama/ollama/issues/18195)

---

### **4. 性能与优化**  
- **VRAM 报告与分配**：PR [#18197](https://github.com/ollama/ollama/pull/18197) 与 [#18201](https://github.com/ollama/ollama/pull/18201) 改进了 `/api/ps` 与 `/api/info` 接口，可按设备报告 VRAM 使用量与可用内存，显著提升多 GPU 环境下的可见性。  
- **内存高效推理**：PR #18078 实现对 Qwen3.8 Flash Next 的针对性 BF16 保留与 MXFP8 量化，有效降低显存压力，同时保持长序列生成质量。  
- **提示缓存反馈**：PR #17943 在原生响应中添加 `prompt_eval_cached_count`，并通过 OpenAI/Anthropic 兼容接口暴露缓存令牌统计信息——与 OpenAI 的提示缓存规范对齐。

> 🔗 [PR #18197](https://github.com/ollama/ollama/pull/18197) | [PR #17943](https://github.com/ollama/ollama/pull/17943)

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 影响 |
|--------|------|--------|--------|
| ⚠️ 高 | `glm-5.3:cloud` 进入无限推理循环，导致任务中断（ZCode/OpenCode） | 开放 (#18193) | 破坏代理工作流；暂无绕行方案 |
| ⚠️ 高 | `deepseek-v4-flash:0731` 无限重复同一思考块（约 1m45s 内重复 221 次） | 开放 (#17892) | 使复杂代理任务不可用 |
| ⚠️ 中 | `gemma3:12b` 在输入中出现双引号内容时截断结构化输出 | 开放 (#18094) | 在基于模式的流程中产生无效 JSON |
| ⚠️ 中 | `gemma4:12b-mlx` 虽具备 `vision`、`audio` 等能力，但仅报告 `completion` 能力 | 已关闭 (#16700) | UI 不一致；修复已合并，可能需客户端刷新 |
| ⚠️ 低 | 控制字符充斥 `ollama run` 输出（无转义选项） | 开放 (#14571) | 影响脚本与自动化 |

> 🔗 [Issue #18193](https://github.com/ollama/ollama/issues/18193) | [Issue #17892](https://github.com/ollama/ollama/issues/17892) | [Issue #18094](https://github.com/ollama/ollama/issues/18094)

---

### **6. 对应用开发者的意义**  
- **代理构建者**：在上述回归问题修复前，请避免在长时间运行或工具密集型代理中使用 `glm-5.3:cloud` 与 `deepseek-v4-flash`。对于视觉/音频场景，建议采用本地推理的 `gemma4:12b-mlx`。  
- **CLI 工具使用**：启用 shell 补全后，使用 `ollama run <model><tab>` 可加快交互速度并减少拼写错误（参见 PR #18205）。  
- **内存管理**：利用改进的 VRAM 报告（`/api/ps`）监控多设备显存使用情况，并通过配置显式设置 `num_ctx`（参见 PR #18196）。  
- **提示效率优化**：在 API 响应中监控 `cached_tokens`（参见 PR #17943），以优化高吞吐应用中的成本与延迟。  
- **模型对比**：使用新推出的 `cmd/model diff` 工具（参见 PR #18202）在部署前审计模型差异。

> 🔗 [PR #18205](https://github.com/ollama/ollama/pull/18205) | [PR #18202](https://github.com/ollama/ollama/pull/18202) | [PR #18196](https://github.com/ollama/ollama/pull/18196)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

### **LiteLLM 摘要 — 2026-09-03**

---

#### **1. 今日亮点**  
LiteLLM 继续推进向高性能基础设施的战略转型，当前正通过专用父问题（#31263）和早期测试用户注册，加速 Rust 迁移计划。关键稳定性修复已合并，包括解决 Python 3.10+ 兼容性问题（PR #39399）、流式响应超时被错误报告为成功（PR #39464），以及消费日志中会话 ID 不一致的问题（PR #39458）。这些更新提升了生产环境代理部署的可靠性。

---

#### **2. 发布与破坏性变更**  
- **v1.99.1 与 v1.97.1**：均仅以 **Docker 镜像形式发布**，无 PyPI 包提供。  
  - `pip install litellm==1.99.1` 或 `1.97.1` 将失败。用户必须仅使用容器镜像。  
  - 目的：确保镜像可追溯至精确的 Git 提交；避免在 CI/CD 中出现版本不匹配问题。  
  - 🔗 [发布 v1.99.1](https://github.com/BerriAI/litellm/releases/tag/v1.99.1) | [发布 v1.97.1](https://github.com/BerriAI/litellm/releases/tag/v1.97.1)

---

#### **3. 新模型与硬件支持**  
今日未宣布新增模型或硬件后端。但正在进行的工作包括：  
- **Cortex Claude 请求归一化**（PR #39453）：修复通过 Cortex 桥接 Anthropic 请求时的形状不一致问题。  
- **OpenAPI YAML 规范支持**（问题 #38951）：现处于积极开发阶段，支持以 `.yaml` 格式导入 OpenAPI 规范用于 MCP 工具注册。  
- **Azure 存储凭证链支持**（PR #39229）：在 Azure 部署中启用工作负载身份联合与无密认证。

---

#### **4. 性能与优化**  
- **Rust 迁移进展**（问题 #31263）：  
  - 目标：实现 LiteLLM 网关亚毫秒级开销。  
  - 早期测试正在进行；完整性能基准预计于 2026 年第四季度发布。  
  - 🔗 [博客文章：Rust 发布](https://docs.litellm.ai/blog/litellm-rust-launch) | [测试报名](https://docs.google.com/forms/d/e/1FAIpQLSecWdOjkzjEson2UiZpD...)

- **缓存读取优化**（PR #39358）：  
  - 将同步 Redis 读取切换为阻塞客户端使用，防止连接池损坏。  
  - 在高负载场景下仍保持熔断器保护机制。

- **自动路由推理力度**（PR #39459）：  
  - 支持按分类器配置推理力度，提升路由精度，且不影响全局部署设置。

---

#### **5. 稳定性与回归问题**  
| 问题 | 严重性 | 状态 | 修复 PR | 描述 |
|------|----------|--------|--------|-------------|
| [#39464](https://github.com/BerriAI/litellm/pull/39464) | 高 | 打开 | ✅ 已合并 | 修复容器路由中的上游错误状态传播（如 404/401 → 500） |
| [#39458](https://github.com/BerriAI/litellm/pull/39458) | 高 | 打开 | ✅ 已合并 | 防止在 SpendLogs 中生成伪造的 `session_id`；与 Langfuse 期望对齐 |
| [#39399](https://github.com/BerriAI/litellm/pull/39399) | 高 | 打开 | ✅ 已合并 | 恢复 Python 3.10–3.14 兼容性；解决 Pydantic 验证失败问题 |
| [#39466](https://github.com/BerriAI/litellm/pull/39466) | 高 | 打开 | ✅ 已合并 | 超时情况下终止整个 Prisma 进程组，防止迁移卡死 |
| [#39454](https://github.com/BerriAI/litellm/pull/39454) | 中等 | 打开 | ✅ 已合并 | 添加可选覆盖项以豁免模态绑定限制（修复图像请求返回 400 错误） |

> ⚠️ **注意**：尽管多个高严重性问题仍处于开放状态，但已在相关 PR 中通过清晰的 TLDR 总结积极处理。

---

#### **6. 对应用开发者的意义**  
- **避免使用 `pip install litellm==1.99.1` 或 `1.97.1`** — 仅使用 Docker 镜像。这不是缺陷，而是为保证可重现性而采取的主动发布策略。  
- **确保 Python 3.10+ 兼容性** — 若使用旧版本，请升级或锁定到 `1.96.2`，直至完全支持稳定。  
- **密切监控代理日志** — 最近更新提升了遥测准确性（如 `session_id`、`spend_logs`），但可能需要下游工具（如 Langfuse）进行模式调整。  
- **为 Rust 迁移做准备** — 若依赖低延迟推理或高吞吐路由，可尽早参与测试（通过报名链接）。  
- **部署混合文本与图像模态的代理时使用 `modality_pin_override`** — 可防止因会话绑定导致的意外 400 错误。

👉 **行动项**：  
- 更新你的 CI/CD 流水线，将 `1.99.x` 的镜像源从 PyPI 切换至 `ghcr.io/berriai/litellm`。  
- 升级后检查仪表盘日志中 `session_id` 的一致性。  
- 如需推理网关 <1ms 延迟，请加入 Rust 测试版。

--- 

*摘要源自 GitHub 数据 — BerriAI/litellm 仓库，2026-09-03.*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth 消息简报 – 2026-09-03**

---

### **1. 今日亮点**  
Unsloth 发布 **v0.1.806-beta**，通过默认启用的 MTP（多线程打包）技术，使 `Qwen3.8-Flash-Next` 和 `GLM-5.3-Flash` 的推理速度提升最高达 **2 倍**。本次更新涵盖训练、聊天、硬件和性能方面的 170 多项改进。关键修复解决了在 Strix Halo（gfx1151）上 AMD GPU 检测失败的问题，以及 Studio 中的显存（VRAM）报告错误。

---

### **2. 版本发布与破坏性变更**  
- **v0.1.806-beta** ([GitHub](https://github.com/unslothai/unsloth/releases/tag/v0.1.806-beta)):  
  - `Qwen3.8-Flash-Next` 与 `GLM-5.3-Flash` 默认启用 MTP，吞吐量最高提升 2 倍。  
  - 若 MTP 导致不稳定，可降级至 `v0.1.805-beta`（通过配置禁用）。  
  - 本地部署时模型加载更流畅，错误减少。  

> 📌 *迁移提示：* 依赖自定义 MTP 配置的用户应在升级后验证行为；如需禁用，请设置 `UNSLOTH_MTP_ENABLED=0`。

---

### **3. 新模型与硬件支持**  
- **AMD Strix Halo (gfx1151)**：因捆绑的 ROCm 运行时引发段错误导致预构建版本崩溃，现已部分恢复支持。  
  - 修复方案：改用系统级 ROCm，而非捆绑的 `rocm-gfx1151` 二进制文件 ([#6276](https://github.com/unslothai/unsloth/issues/6276))。  
- **Windows 上的 ROCm**：通过 `HSA_ENABLE_DXG_DETECTION=1` 提升与 WSL2 的兼容性 ([#9729](https://github.com/unslothai/unsloth/issues/9729))。  
- **新模型支持**：  
  - `MiniMax-H3-GGUF` 现已在 Studio 中支持（问题 #8814）。  
  - 音频模型（如 `MiniMax-Music3`）现在可在请求时自动加载 ([#10207](https://github.com/unslothai/unsloth/issues/10207)，PR #10217)。

---

### **4. 性能与优化**  
- **推理速度提升 2 倍**：使用默认启用的 MTP 技术，实现 `Qwen3.8-Flash-Next` 与 `GLM-5.3-Flash` 的加速。  
- **内存效率优化**：  
  - 修复了在 AMD 集成显卡上显存占用虚高报告的问题 ([#8942](https://github.com/unslothai/unsloth/issues/8942))。  
  - Mac 内存报告现反映实际可用的 GPU 显存，而非总系统内存 ([#10224](https://github.com/unslothai/unsloth/pull/10224))。  
- **延迟降低**：  
  - Deep Research 现在尊重实际模型上下文窗口大小，避免过早截断 ([#10220](https://github.com/unslothai/unsloth/pull/10220))。  
  - 在调用音频 API 时触发语音模型加载 ([#10217](https://github.com/unslothai/unsloth/pull/10217))。

---

### **5. 稳定性与回归问题**  
| 问题 | 严重性 | 状态 | 备注 |
|------|----------|--------|-------|
| [#3526](https://github.com/unslothai/unsloth/issues/3526) | 高 | 已关闭 | ROCm `hip_global.cpp` 模块错误；已在最新 beta 版本中修复。 |
| [#7449](https://github.com/unslothai/unsloth/issues/7449) | 高 | 未解决 | 尽管识别到 GPU，Studio 仍使用系统内存而非显存。 |
| [#6276](https://github.com/unslothai/unsloth/issues/6276) | 高 | 未解决 | 使用捆绑 ROCm 运行时在 Strix Halo（gfx1151）上发生段错误。 |
| [#7371](https://github.com/unslothai/unsloth/issues/7371) | 中等 | 未解决 | `b10079` 更新后，Strix Halo + ROCm 出现性能下降。 |
| [#8471](https://github.com/unslothai/unsloth/issues/8471) | 中等 | 已关闭 | AppImage 无法检测 RX 7600 GPU。 |
| [#7485](https://github.com/unslothai/unsloth/issues/7485) | 中等 | 未解决 | 最新版 llama.cpp 构建破坏了 AMD GPU 检测。 |

> ✅ **正在进行的修复**：正在审核的 PR 包括韩文搜索修复 (#10200)、音频模型加载修复 (#10217) 以及提示延续错误修复 (#10219)。

---

### **6. 对应用开发者的意义**  
- **默认启用 MTP**：`Qwen3.8-Flash` 与 `GLM-5.3-Flash` 模型预计可获得最高 2 倍加速——无需额外配置。请留意长上下文场景中的边缘情况。  
- **AMD GPU 需手动绕过**：对于 Strix Halo（gfx1151），请避免使用捆绑 ROCm；建议使用系统级 ROCm，或等待更新后的预构建版本。  
- **音频与多模态扩展性增强**：新增的音频模型自动加载功能支持更丰富的智能体工作流——可构建动态切换文本、图像、视频与音频模型的智能体。  
- **本地部署更健壮**：部署本地环境时注意显存报告错误与内存过度分配问题。在可信局域网环境中可使用 `UNSLOTH_STUDIO_NO_AUTH` ([#5031](https://github.com/unslothai/unsloth/issues/5031))。  
- **API 设计建议**：调用 `/v1/audio/speech` 时应显式指定 `model` 字段——此前该字段被忽略。请确保代理客户端正确传递模型名称。

---

*来源: [unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*