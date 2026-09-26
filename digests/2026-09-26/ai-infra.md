# AI 基础设施日报 2026-09-26

> 生成时间: 2026-09-26 00:49 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-09-26**

---

### **1. 生态概览**  
AI推理与服务生态正进入*深度专业化与硬件融合*阶段，各项目在目标层级（本地运行时、云网关、训练引擎）上持续分化，同时在性能关键优化上趋于收敛。vLLM与SGLang在NVIDIA Hopper和AMD gfx950上以高吞吐、内核优化的大型模型推理领域处于领先地位；而Ollama与llama.cpp则主导了设备端与边缘部署。LiteLLM凭借对成本准确性与安全性的日益关注，在多提供商编排层占据核心地位。Unsloth虽为小众但功能强大的细分玩家，尤其在面向AMD用户的微调与本地模型管理方面表现突出。整体格局呈现出清晰的两极分化：*规模驱动型*引擎（vLLM/SGLang） vs. *可访问性优先型*平台（Ollama/llama.cpp），各方均在竞速支持下一代架构，如Mamba、FP8 MoE及混合SSM。

---

### **2. 活跃度对比**

| 项目        | 近7天开放问题数 | 近7天合并PR数 | 近24小时发布数 | 状态 |
|-------------|------------------|------------------|------------------|------|
| **vLLM**    | 32               | 28               | 无               | 稳定 + 夜间版 |
| **SGLang**  | 27               | 24               | 无               | 活跃开发 |
| **llama.cpp** | 41             | 33               | 4（b11182–b11192）| 发布周期 |
| **Ollama**  | 22               | 16               | 1（v0.40.0-rc0） | RC阶段 |
| **LiteLLM** | 18               | 12               | 4（v1.98.1–v1.104.0-dev.2） | 频繁开发 |
| **Unsloth** | 25               | 11               | 无               | 功能聚焦 |

> ✅ **洞察**：**llama.cpp** 因其广泛的硬件支持与社区驱动修复，释放速度与问题数量领先。**vLLM** 与 **SGLang** 每个PR体现出最高工程密度，专注内核级优化。**LiteLLM** 展现出快速迭代以保障稳定性和合规性。

---

### **3. 模型支持竞赛**

| 新模型 / 架构         | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-----------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1**     | ✅（SM100/SM103 + MXFP8） | ✅（CUDA/ROCm + 稀疏注意力） | ❌ | ✅（MLX回退） | ✅（通过Fireworks） | ⚠️（进行中） |
| **Qwen3.8-Flash-Next**| ⚠️（A100 FP8 bug） | ✅（工具解析器修复后） | ⚠️（工具循环崩溃） | 🔴（静默丢图） | ✅（通过Databricks） | ⚠️（V3 GGUF崩溃） |
| **Mamba / SSM模型**   | ✅（通过融合对齐内核实现6倍加速） | ✅（混合SSM + hicache） | ❌ | ⚠️（崩溃） | ❌ | ✅（哈达玛旋转，Qwen-Image-2.1） |
| **FP8 MoE 与量化**    | ✅（处理MoE块大小） | ✅（RTX 4090上支持MXFP4/MXFP8） | ✅（Prism PQ2_0/PTQ1_0） | ⚠️（MLX限制） | ✅（Fireworks定价） | ⚠️（4位反量化竞赛） |
| **Apple Silicon（MLX）**| ⚠️（Rust前端） | ⚠️（MPS内存问题） | ✅（Metal内核） | ✅（原生MLX） | ❌ | ✅（Studio集成） |

> 🏆 **领先者**：**SGLang** 与 **vLLM** 在*针对特定模型的内核优化*方面领先（尤其是DeepSeek-V4.1、Mamba）。  
> 🏅 **边缘赢家**：**Ollama** 在*通过自动MLX路由实现对Apple Silicon的用户友好访问*上胜出。  
> 🚩 **警示**：**Ollama 的 `deepseek-v4.1-flash`** 会静默丢弃图像——对代理应用而言是严重回归。

---

### **4. 性能前沿**

| 优化重点              | vLLM                          | SGLang                        | llama.cpp                    | Ollama               | LiteLLM               | Unsloth              |
|------------------------|-------------------------------|-------------------------------|------------------------------|----------------------|-----------------------|----------------------|
| **KV缓存管理**         | ✅ LayerSplit RFC（KVPP）      | ✅ 解码上下文并行（DCP）       | ✅ 自动适配 + 统一KV           | ⚠️ 固定8GiB缓存       | ✅ Redis缓存           | ✅ 动态规划            |
| **批处理与吞吐量**     | ✅ 规划性解码（主机开销）      | ✅ 融合比例2池化 + RMSNorm     | ✅ 分块乘法矩阵（VNNI）       | ❌ 无批处理控制       | ✅ 故障关闭速率限制     | ✅ GPU内存复用          |
| **量化效率**           | ✅ MXFP8 + WO-A融合           | ✅ MXFP4/MXFP8 + 按token量化   | ✅ Prism PQ2_0, PTQ1_0       | ⚠️ MLX精度限制        | ✅ 成本感知路由         | ✅ INT8旋转（LPIPS）   |
| **分布式服务**         | ✅ KV流水线并行                | ✅ Helix并行（2026年Q3）       | ❌ 无分布式支持               | ❌ 单节点仅支持       | ✅ 多提供商路由         | ❌ 无分布式训练         |
| **内核级调优**         | ✅ Triton融合（对齐、RoPE）    | ✅ SM90/Hopper融合             | ✅ Metal/Vulkan FA内核        | ⚠️ CUDA回退          | ✅ HttpClientPool重构    | ✅ cuDNN基准复用        |

> 🔥 **热点**：**vLLM** 与 **SGLang** 在*分布式、低延迟推理*方面领先，得益于先进的KV与推测性技术。**llama.cpp** 在*跨多样后端的底层GPU内核调优*方面表现出色。**Unsloth** 专注于*训练效率*与*本地工作流中的内存复用*。

---

### **5. 层级定位**

| 项目        | 主要层级                | 核心差异化                                  | 使用场景聚焦                     |
|-------------|--------------------------|---------------------------------------------|------------------------------------|
| **vLLM**    | 高吞吐推理引擎           | 内核优化、可扩展、支持推测性解码             | 云规模大模型服务、API网关         |
| **SGLang**  | 高性能推理引擎           | 混合并行（DCP、Helix）、强ROCm/CUDA支持       | 企业推理、研究实验室               |
| **llama.cpp** | 本地运行时 / 边缘推理   | 多后端（Metal、Vulkan、HIP）、原生GGUF       | 设备端、注重隐私、低端设备         |
| **Ollama**  | 开发者网关 / CLI工具     | 一键模型访问、Mac上MLX加速                   | 本地开发、原型设计、代理开发       |
| **LiteLLM** | 多提供商编排             | 统一API、成本追踪、安全护栏、遥测             | 生产环境API路由、计费系统          |
| **Unsloth** | 微调与工作室平台         | 可视化训练、模型固定、GGUF调优               | 本地模型定制、研究                 |

> 🧩 **战略洞察**：当前栈已形成分层结构：*Unsloth*（微调）→ *vLLM/SGLang*（服务）→ *LiteLLM*（路由）→ *Ollama*（开发/测试）。**llama.cpp** 则横跨边缘推理至本地训练。

---

### **6. 趋势信号**

| 趋势                          | 消息摘要中的证据                                                                 | 开发者行动建议 |
|-------------------------------|-----------------------------------------------------------------------------------|----------------|
| **硬件专业化**               | vLLM/SGLang针对SM100/SM103优化；Ollama在M系列上自动使用MLX；llama.cpp新增Metal/Vulkan内核 | 根据目标硬件选择后端（NVIDIA vs AMD vs Apple） |
| **FP8与混合精度主导**         | vLLM、SGLang、llama.cpp均推进MXFP8/MXFP4；LiteLLM相应更新定价策略                   | 部署前验证精度支持；避免在不稳定的后端使用 `fp8_e4m3` |
| **结构化输出与代理**          | vLLM/SGLang修复工具调用解析；LiteLLM警告字段被截断；Ollama存在静默失败               | 验证解析器一致性；切勿假设 `tool_choice='none'` 是安全的 |
| **安全与成本完整性**          | LiteLLM加强密钥防护，修复定价漏洞；cosign签名Docker镜像                             | 审计成本映射；生产环境使用签名镜像 |
| **稳定性优于新功能**          | Ollama、SGLang、Unsloth出现多个回归（崩溃、静默失败）                              | 避免使用已知严重缺陷的RC/稳定版本；严格测试边缘情况 |
| **开源工具链成熟化**          | Unsloth Studio基准测试，LiteLLM模型差异分析，Ollama前缀缓存工具                     | 借助新CLI/调试工具进行审计与调优 |

> ✅ **最终建议**：生产推理推荐使用**vLLM或SGLang**，并配合验证过的模型版本。本地代理负载推荐**Ollama + Apple Silicon上的MLX**，但需验证工具调用逻辑。成本敏感编排场景，**LiteLLM v1.100+** 至关重要。始终**在压力下验证模型行为**，尤其关注结构化输出与长时间会话的表现。

---  
*数据来源：GitHub活动统计，2026-09-26 | 目标读者：基础设施工程师、机器学习运维、技术决策者*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

### **1. 今日亮点**  
vLLM 项目在推测解码和结构化输出优化方面持续保持强劲势头，关键修复了草稿令牌验证及流式 logprobs 保留的问题。针对 DeepSeek-V4.1 和 Mamba 对齐核的性能优化带来了最高达 6 倍的加速，而新开展的批处理不变性与 KV 流水并行研究，预示着面向可扩展推理的更深层次架构改进。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新发布。*  
不过，**vLLM v0.28.1rc1.dev337+g27a94d1ce**（夜间版）现已由开发者用于测试结构化输出——请注意，`guidance` 后端问题（如 `KeyError: 'triggers'`）可能会影响工具调用工作流，直至相关合并请求落地。近期未引入破坏性变更，但用户应密切关注 `--tool-call-parser` 在不同版本间的运行行为（参见 [Issue #46493](https://github.com/vllm-project/vllm/issues/46493)）。

---

### **3. 新模型与硬件支持**  
- **AMD ROCm**：正在对 `Qwen3.8-2.4T-A95B` 在 gfx950 / MI355X 上进行活跃的性能优化（参见 [Issue #57149](https://github.com/vllm-project/vllm/issues/57149)）。  
- **NVIDIA**：增强对 `DeepSeek-V4.1` 在 SM100/SM103 上的支持，包含 MXFP8 量化及融合 WO-A + 反向 RoPE（参见 [PR #58634](https://github.com/vllm-project/vllm/pull/58634)）。  
- **量化**：FP8 MoE 支持现已改进块大小与内存访问模式的处理（参见 [Issue #43396](https://github.com/vllm-project/vllm/issues/43396)，已在合并请求中修复）。  
- **前端**：Rust 前端（`VLLM_USE_RUST_FRONTEND=1`）仍为实验性功能，但正追踪功能对齐（参见 [Issue #44280](https://github.com/vllm-project/vllm/issues/44280)）。

---

### **4. 性能与优化**  
- **Mamba**：将 `align` block-table gather 融合进单个 Triton 内核，在所有形状上实现 **6 倍加速**（参见 [PR #58737](https://github.com/vllm-project/vllm/pull/58737)）。  
- **DeepSeek-V4.1**：在 SM100/SM103 上，融合 WO-A 与反向 RoPE 及 MXFP8 量化后，每解码步延迟降低 **约 11–12 µs**（参见 [PR #58634](https://github.com/vllm-project/vllm/pull/58634)）。  
- **推测解码**：优化减少了 GDN 元数据构建中的主机调度开销，每步降低 **约 11 µs**（参见 [PR #58732](https://github.com/vllm-project/vllm/pull/58732)）。  
- **KV 流水并行（KVPP）**：关于 LayerSplit 风格 KV 缓存管理的 RFC 提案旨在提升大模型下的可扩展性（参见 [Issue #58329](https://github.com/vllm-project/vllm/issues/58329)）。  
- **图剖析**：修复确保剖析过程中工作区保留不会低估 KV 缓存需求（参见 [PR #57865](https://github.com/vllm-project/vllm/pull/57865)）。

---

### **5. 稳定性与回归问题**  
- **严重**：若未正确尊重 `VLLM_EXECUTE_MODEL_TIMEOUT_SECONDS`，`DraftTokensHandler.get_draft_tokens` 可能无限挂起——已在 [PR #58779](https://github.com/vllm-project/vllm/pull/58779) 中修复。  
- **严重**：在 MRV2 中，未被草稿生成器提议的草稿槽被错误填充——导致无效推测令牌；修复正在进行中（[PR #58784](https://github.com/vllm-project/vllm/pull/58784)）。  
- **回归**：`tool_choice='none'` 会静默丢弃工具调用格式内容——影响代理逻辑（参见 [Issue #55080](https://github.com/vllm-project/vllm/issues/55080)）。  
- **崩溃**：当缺少 `nvcc` 时，`FlashInfer sampler JIT` 会导致引擎启动崩溃（无回退至原生采样器）；已在 [Issue #49497](https://github.com/vllm-project/vllm/issues/49497) 中报告。  
- **GPU 特定**：`Qwen3.8-Flash-Next-FP8` 在 A100（SM80）上因不支持 `fp8e4nv` 而失败——需临时方案（参见 [Issue #54318](https://github.com/vllm-project/vllm/issues/54318)）。

---

### **6. 对应用开发者的启示**  
- **代理工作流**：使用 `--tool-call-parser inkling` 时需谨慎——确保 `reasoning-parser` 与 `tool-call-parser` 一致，避免内容泄露（已在 [PR #58792](https://github.com/vllm-project/vllm/pull/58792) 中修复）。  
- **结构化输出**：预期流式重渲染与解析器缓存稳定性提升（追踪于 [Issue #57571](https://github.com/vllm-project/vllm/issues/57571)）；使用 `parser_cache` 标志以获得确定性 ID。  
- **性能优化**：针对使用 SM100/SM103 且启用了 MXFP8 的 `DeepSeek-V4.1` 与 Mamba 模型进行优化——可期待显著的延迟下降。  
- **部署建议**：若依赖工具调用结构，请避免使用 `tool_choice='none'`；考虑显式解析。多 GPU 部署中，请留意批处理不变性下 KV 卸载与 SP 冲突问题（参见 [PR #56377](https://github.com/vllm-project/vllm/pull/56377)）。  
- **未来准备**：关注 **KVPP（LayerSplit）** RFC（[#58329](https://github.com/vllm-project/vllm/issues/58329)），以应对高吞吐服务环境中的下一代扩展需求。

---  
*摘要源自 GitHub 数据：vllm-project/vllm — 2026-09-26*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 消息简报 – 2026-09-26**

---

### **1. 今日重点**  
SGLang 项目持续推进对 **DeepSeek-V4.1** 在 CUDA 与 ROCm 后端的支持，针对 Hopper（SM90）和 AMD gfx950 硬件进行了多项内核级优化。已合并 Qwen3.8-Flash-Next 工具解析器及 GLM-5.3-Flash 的 FP8 推理关键稳定性修复，但由于持续存在不稳定性，CI 基础设施仍处于积极维护中。**解码上下文并行（DCP）** 和 **Helix 并行** 新功能开发正按计划推进，目标于 2026 年第三季度交付。

---

### **2. 发布与破坏性变更**  
无。过去 24 小时内无新版本发布。

---

### **3. 新模型与硬件支持**  
- **DeepSeek-V4.1**：CUDA（SM90）与 AMD（gfx950）平台均已完整集成内核栈，包含稀疏注意力、top-k 排序及 ratio-1/2 索引处理。详见 [PR #41291](https://github.com/sgl-project/sglang/pull/41291)、[PR #41019](https://github.com/sgl-project/sglang/pull/41019)、[PR #41020](https://github.com/sgl-project/sglang/pull/41020)。  
- **Apple Silicon（MPS/Metal）**：内存管理改进正在进行中（[#21443](https://github.com/sgl-project/sglang/issues/21443)），设备容量检测也在优化（[#39675](https://github.com/sgl-project/sglang/issues/39675)），但完整 GPU 内存报告仍不可用。  
- **混合 SSM/Mamba 模型**：新增 `--enable-hierarchical-cache --hicache-storage-backend dynamic` 支持，但主机内存注册仍存在崩溃问题（[#40926](https://github.com/sgl-project/sglang/issues/40926)）。  
- **XGrammar Lark 语法**：通过 [PR #39380](https://github.com/sgl-project/sglang/pull/39380) 实现支持，提升提示词解析灵活性。

---

### **4. 性能与优化**  
- **Gemma3n**：通过跳过未使用的 K/V 计算优化共享 KV 注意力，减少不必要的内存分配与 RoPE 内核中的旋转操作（[PR #41295](https://github.com/sgl-project/sglang/pull/41295)）。  
- **Hopper V4.1**：将 ratio-2 解码池化与 RMSNorm 融合为单个内核（SM90），在批量大小 1–64 范围内显著提升解码吞吐量（[PR #41294](https://github.com/sgl-project/sglang/pull/41294)）。  
- **RTX 4090（SM89）上的 MXFP4 MoE**：修复 Triton 内核中 `num_warps` 配置不当问题，恢复约 6 倍解码性能，相较此前退化基线（[PR #41292](https://github.com/sgl-project/sglang/pull/41292)）。  
- **MiniMax-M3**：集成融合 all-reduce + RMSNorm + per-token FP8 量化用于 MXFP8 ptpc 解码 GEMM，实现 ROCm 上的高吞吐推理（[PR #36575](https://github.com/sgl-project/sglang/pull/36575)）。

---

### **5. 稳定性与回归问题**  
- **严重崩溃**：`Qwen3.8-Flash-Next` 在 token ID 0 处陷入思考 + 工具解析器无限循环（[#36537](https://github.com/sgl-project/sglang/issues/36537)）；已通过 [PR #41156](https://github.com/sgl-project/sglang/pull/41156) 修复（检测器加固）。  
- **CUDA OOM**：`GLM-5.3-Flash` 在长上下文预填充阶段因 FP8 MQA logit 溢出导致所有 TP 分片崩溃（[#37712](https://github.com/sgl-project/sglang/issues/37712)）；暂无修复方案。  
- **HiCache 崩溃**：动态分层缓存启动时，因 `cudaHostRegister` 错误及未处理的 `TypeError` 导致次级主机池失败，整个实例中断（[#40926](https://github.com/sgl-project/sglang/issues/40926)）。  
- **MLX 后端**：Hunyuan 无法服务，因 KV 缓存构建器中 `auto_map` 失败（[#32521](https://github.com/sgl-project/sglang/issues/32521)）；为近期变更引入的回归问题。  
- **CI 健康状态**：CI 仍处于维护模式（[#21065](https://github.com/sgl-project/sglang/issues/21065)），存在 1 个失败、7 个不稳定测试；流水线稳定性修复仍在进行中。

---

### **6. 对应用开发者的影响**  
- **可在 Hopper/AMD GPU 上放心使用 DeepSeek-V4.1** —— 性能现已具备竞争力，尤其配合 `--enable-prefill-cp` 与优化布局时表现更佳。  
- **避免在 `tilelang` 后端使用 `--kv-cache-dtype fp8_e4m3`** —— 已检测到行为不一致（[#31774](https://github.com/sgl-project/sglang/issues/31774)）；建议暂用 `fp16` 或 `bfloat16` 直至问题解决。  
- **谨慎处理 Qwen3.8-Flash-Next 工具解析**：若使用 `qwen3_coder`，请确保更新检测器（[PR #41156](https://github.com/sgl-project/sglang/pull/41156)），以避免无限循环。  
- **监控混合模型（SSM/Mamba）**：`hicache` 配合动态存储可能无声崩溃 —— 建议禁用或密切监控主机内存使用情况。  
- **预期 Apple Silicon 存在不稳定性**：MPS 内存检测存在缺陷；`mem_fraction_static` 默认值为 0.95，可能导致预填充阶段 OOM（[#39675](https://github.com/sgl-project/sglang/issues/39675)）。  

> 💡 *建议*：对于生产部署，请优先选用稳定模型版本（如 Qwen3.5、DeepSeek-V3），待 DeepSeek-V4.1 及混合模型支持成熟后再迁移。合并关键变更前，请先检查 CI 健康状况。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 消息简报 – 2026-09-26**

---

### **1. 今日亮点**  
最新发布周期聚焦于各类 GPU 后端的稳定性与性能提升，关键修复涵盖 HIP/ROCm 及 Vulkan 构建。值得注意的是，LFM2 音频处理中的回归问题已解决，新引入的 Metal 内核支持更宽的 block 大小，适用于 Apple Silicon 平台。一项关键优化通过 `llama_prec_policy` 实现模型驱动的 W4A4 量化路径，显著提升在受支持硬件上的推理效率。

---

### **2. 发布与破坏性变更**  
- **`b11192`**：将 `cpp-httplib` 升级至 v0.58.0 (#29407) — 依赖项小幅更新，无 API 变更。  
- **`b11191`**：修复 Windows 平台下对 Unicode 路径使用 `fs_create_directory_with_parents()` 的问题；现在能正确创建最后一个目录且不带尾部分隔符 (#29432)。  
- **`b11188`**：通过 `GGML_VULKAN_COOPMAT_GLSLC_SUPPORT` 宏检测，修复旧版 glslc（缺少协作矩阵支持）导致的遗留 Vulkan 构建失败问题 (#29409)。  
- **`b11182`**：引入 `llama_prec_policy` + 模型驱动的 W4A4 路径 (#24364)，实现基于模型能力的动态精度选择——标志着向自适应推理调度的重要演进。

> 🔗 [GitHub 发布版 b11192](https://github.com/ggml-org/llama.cpp/releases/tag/b11192)

---

### **3. 新模型与硬件支持**  
- ✅ **新增模型支持**：新增对 **Limite 1B - Violetto**（来自 PR #29433）及 **GraniteSpeech5ForCTC**（Turbo CTC 编码器专用模型）的支持 (#29446)。  
- ✅ **硬件/后端增强**：
  - **Metal**：为 block 宽度 >512 添加 FWHT 内核 (#29095)；将 FA 内核按数据类型拆分为独立库 (#29329)。  
  - **OpenCL**：新增 A8 Q5_K 非 MoE 与 dp4a 变体的二进制内核 (#29401)。  
  - **HIP**：提升对 gfx1151（Strix Halo APU）的兼容性，并修复需 HIP ≥6.2 才支持 FP8 的问题 (#29231)。  
  - **Vulkan**：新增 Intel 预填充 FA 内核，显著提升 Intel 平台性能 (#29357)。  
- ✅ **量化支持**：新增实验性支持 **Prism PQ2_0（GGML 类型 142）** 和 **PTQ1_0（类型 143）**，后者用于 Ternary-Bonsai-2 (#29058)。

> 🔗 [PR #29433: Limite 1B-Violetto](https://github.com/ggml-org/llama.cpp/pull/29433)  
> 🔗 [PR #29446: GraniteSpeech5ForCTC](https://github.com/ggml-org/llama.cpp/pull/29446)

---

### **4. 性能与优化**  
- **CPU**：采用 VNNI 的分块 `mul_mat` 实现 **3–7 倍加速**，适用于 x86 CPU 上的 k-量化场景 (#27851)。  
- **GPU**：  
  - Metal：按数据类型拆分 FA 内核，提升内存布局灵活性并支持更高效的调度 (#29329)。  
  - Vulkan：Intel 特定预填充 FA 内核降低 Intel GPU 延迟 (#29357)。  
  - OpenCL：新二进制内核提升 AMD GPU 上 Q5_K 推理吞吐量。  
- **内存与显存**：  
  - BF16/FP16 → F32 转换现支持分块处理（`GGML_CUDA_CUBLAS_CONVERT_CHUNK_SIZE`），在不牺牲完整性能的前提下减少峰值显存占用 (#29442)。  
  - 自动适配现在尝试最多达模型上下文长度 × 并行槽位数的统一 KV，提升并发容量 (#28849)。

> 🔗 [PR #27851: VNNI 分块 mul_mat](https://github.com/ggml-org/llama.cpp/pull/27851)  
> 🔗 [PR #29442: 分块 FP16/BF16 转换](https://github.com/ggml-org/llama.cpp/pull/29442)

---

### **5. 稳定性与回归问题**  
- **严重缺陷**：LFM2 中音频 mel 预处理器因不当的 log 截断导致错误的贪婪解码结果（英语占比 4.5%，日语占比 6.5%）。通过改用 `log(x + 2^-24)` 修复 (#29403)。  
- **HIP/ROCm**：报告多个回归问题：
  - 在 gfx1151 平台上长提示下使用 `--np 4 --kv-unified` 时出现错误 logits（Issue #28211）。  
  - 混合负载下无声响应损坏（Issue #25992）。  
  - MTP 草稿上下文分配期间发生内存损坏与 OOM（Issue #26038）。  
- **CUDA**：`gemma-4-E4B-it-Q4_0.gguf` 出现持续崩溃，原因为 `n_inputs < GGML_SCHED_MAX_SPLIT_INPUTS` 断言失败（Issue #24132）。  
- **Windows**：VictoriaMetrics 抓取 `/metrics` 端点时服务器无声停止（Issue #29104）。

> ⚠️ **注意**：部分问题正在积极排查中；例如音频问题（#29403）已有修复合并，但其他仍处于开放状态。

---

### **6. 对应用开发者的启示**  
- **启用 `llama_prec_policy`**，根据模型与硬件动态选择最优精度（W4A4）——预计在 NVIDIA Hopper+ 及 AMD MI300X 上获得更高吞吐。  
- **在 `llama-bench` 中使用 `--repack`** 以确保跨后端基准测试的一致性（PR #28968）。  
- **在集成显卡（gfx1151）上避免使用 `--kv-unified`**，直至稳定补丁发布——已知会导致陈旧响应。  
- **如在大批次推理中遇到 OOM**，且使用的是 FP16/BF16 模型，请启用 `GGML_CUDA_CUBLAS_CONVERT_CHUNK_SIZE`。  
- **监控 WebUI 行为**：已知存在载荷操纵问题（Issue #27532），可能影响代理工具调用流水线。

> 📌 **实用提示**：在 AMD APU 或双显卡系统上进行生产推理时，建议优先使用 `--kv-split` 而非 `--kv-unified`，直到后续稳定性更新发布。

---  
*本简报基于 2026-09-26 的 GitHub 活动整理 | 来源：[ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

### **1. 今日亮点**  
Ollama 0.40.0-rc0 为 Apple Silicon 设备引入原生 MLX 加速，可自动利用 MLX 运行时支持的模型（如 `qwen3.8`）。这标志着在搭载 M 系列芯片的 Mac 上实现本地推理优化的重要进展。与此同时，云模型中图像处理相关的严重稳定性问题以及长时间对话中的静默失败现象已被报告，凸显出边缘场景鲁棒性仍面临挑战。

---

### **2. 发布与破坏性变更**  
- **v0.40.0-rc0**：现在默认在兼容模型架构上启用 **Apple Silicon 的 MLX 运行时**（例如 `qwen3.8:27b-mlx`、`gemma4:31b-mlx`）。无需用户操作——若可用，模型将自动选择 MLX。  
  🔗 [发布说明](https://github.com/ollama/ollama/releases/tag/v0.40.0-rc0)  
- **API 变更**：兼容 OpenAI 的 `/v1/chat/completions` 端点现在会静默忽略 `max_tokens`，并覆盖 Modelfile 中的 `num_predict` —— 可能导致生成无限制。修复 PR (#18656) 正在等待合并。  
  🔗 [问题 #18575](https://github.com/ollama/ollama/issues/18575)

---

### **3. 新模型与硬件支持**  
- **Apple Silicon (MLX)**：M 系列芯片上对支持 MLX 的模型实现完全自动运行时选择。  
  - 支持模型：`qwen3.8`、`gemma4`、`deepseek-v4.1-flash`（但请注意下方回归问题）。  
  - 后端：通过 PR #18651 使用 MLX v0.7.3+。  
- **Intel GPU (SYCL)**：功能请求 (#16930) 和草案集成 PR (#17621) 正在进行中；可通过 `-DOLLAMA_LLAMA_BACKENDS=sycl` 启用。尚未默认开启。  
- **CUDA (RTX 50 系列)**：NVIDIA Blackwell 驱动（616.92）兼容性问题持续存在：显存检测失败 → 回退至 CPU。已在 #18581 中报告。  
  🔗 [PR #17621](https://github.com/ollama/ollama/pull/17621)

---

### **4. 性能与优化**  
- **MLX 内核移植**：PR #18657 将 Metal 特定内核（`mamba2_scan`、`depthwise_conv_silu`）移植至 CUDA —— 之前会回退到图操作。预计在支持 CUDA 的系统上提升吞吐量。  
- **内存效率**：PR #17956 在 MLX 构建中对 CUDA 运行时负载进行去重，减小二进制体积并改善加载速度。  
- **模型差异工具**：PR #18202 新增 `ollama model diff`，用于比较 GGUF/safetensors 文件 —— 适用于审计量化差异或漂移情况。  
- **前缀缓存**：问题 #18131 指出，固定 8 GiB 的 MLX 前缀缓存预算在 32GB Apple Silicon 系统上执行代理任务时导致大量交换 —— 属于已知内存压力问题。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 影响 | 修复状态 |
|--------|------|--------|-----------|
| 🔴 高 | [#18637](https://github.com/ollama/ollama/issues/18637) `deepseek-v4.1-flash` 尽管报告具备 `vision` 能力，却静默丢弃图像输入 | 多模态提示处理时代理静默失败 | #18527 回归；尚未修复 |
| 🔴 高 | [#18642](https://github.com/ollama/ollama/issues/18642) RTX 5090 上使用 Cohere MoE 模型时发生 CUDA 非法内存访问崩溃 | 高端显卡频繁服务器崩溃 | 无修复 PR；Windows 上可复现 |
| 🟡 中 | [#18368](https://github.com/ollama/ollama/issues/18368) macOS GUI 中长对话处理超过 60 秒后静默失败 | 用户在长预填充阶段无任何反馈 | 修复 PR #18654 已合并 —— 解决 WKWebView 超时问题 |
| 🟡 中 | [#18644](https://github.com/ollama/ollama/issues/18644) MLX 拉取在磁盘满时静默失败 | 直到写入时才显示错误；难以调试 | 修复 PR #18648 已合并 —— 传播磁盘满错误 |

---

### **6. 对应用开发者的启示**  
- ✅ **针对 Apple Silicon 优化**：在 M 系列 Mac 上追求最佳本地性能，请使用 `qwen3.8:27b-mlx` 或类似带 MLX 标签的模型 —— 无需配置。  
- ⚠️ **暂时避免使用云端视觉模型**：不要依赖 `deepseek-v4.1-flash:cloud` 处理图像输入 —— 它会静默丢弃图像。建议使用替代模型或自托管方案。  
- ⚠️ **防范无界输出**：`/v1/chat/completions` 端点 **不尊重** `max_tokens`。应在应用层强制设置上限，或在 Modelfile 中使用 `num_predict`。  
- 🛠 **善用 CLI 工具调试**：利用新推出的 `ollama model diff` 与 `show --modelfile` 工具检查模型参数，检测量化漂移。  
- 📌 **为 API 变更做好准备**：响应 ID 仅限 999 个值（`rand.Intn(999)`），在监控/代理系统中存在碰撞风险。生产环境请使用 PR #18656（基于 UUID 的 ID）。  

> 🔗 [修复 PR：UUID 响应 ID](https://github.com/ollama/ollama/pull/18656)  
> 🔗 [修复 PR：防止静默 60 秒超时](https://github.com/ollama/ollama/pull/18654)

---  
*摘要生成时间：2026-09-26 | 来源：[github.com/ollama/ollama](https://github.com/ollama/ollama)*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 简报 – 2026-09-26**

---

### **1. 今日亮点**  
LiteLLM 项目持续快速演进，重点聚焦于 **成本准确性**、**安全强化** 和 **多提供商可靠性**。关键更新包括修复了严重的计费不一致问题（如 DeepSeek V4 Pro 定价、Databricks-Gemini `id:null` 冲突），增强 Prometheus/OTel 仪表盘对齐，新增对 Sail 与 OpenRouter 的 `typesafe/jev-router` 支持。安全改进现已强制加密护栏密钥，并支持配置策略的静态传递。

---

### **2. 发布与破坏性变更**  
- 在过去 24 小时内发布了 **v1.104.0-dev.2**、**v1.100.3**、**v1.99.4** 与 **v1.98.1**。  
- 所有 Docker 镜像均通过 **cosign** 签名，使用自 [提交 `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0) 引入的统一密钥。  
- 今日未报告任何破坏性 API 变更；所有发布版本均向后兼容。  
- *建议*：部署前验证镜像签名：[验证 Docker 镜像签名](https://docs.sigstore.dev/cosign/overview/)。

---

### **3. 新模型与硬件支持**  
- ✅ **Sail** 作为 OpenAI 兼容提供者加入（`sail/<model>`），`metadata.completion_window` 已映射至完成窗口限制。  
- ✅ **OpenRouter**：在成本映射中新增 `openrouter/typesafe/jev-router`，实现路由感知的成本追踪。  
- ✅ **Gemini Live Avatar** 支持通过 `/v1/messages` 中的 `avatar_config` 字段提出（PR #43166）。  
- ✅ **Fireworks AI**：更新 `muse-glimmer-30b` 与 `deepseek-v4-flash-vision-exp` 的优先级定价（PR #43252）。  

> 🔗 [PR #42840 – 添加 Sail 提供者](https://github.com/BerriAI/litellm/pull/42840)  
> 🔗 [PR #43248 – OpenRouter typesafe/jev-router](https://github.com/BerriAI/litellm/pull/43248)  
> 🔗 [PR #43166 – Gemini Live Avatar](https://github.com/BerriAI/litellm/pull/43166)

---

### **4. 性能与优化**  
- **延迟与吞吐量**：  
  - PR #43251 引入 `fail_closed_rate_limit_enforcement`，当 Redis 不可达时防止请求突发无限制增长——对高可用部署至关重要。  
  - PR #43245 重构 HTTP 客户端池，集中管理 TLS、代理与超时配置，减少漂移并提升各提供者间的一致性。  
- **成本准确性**：  
  - PR #43253 修正 Fireworks AI DeepSeek V4.1 Flash 定价（此前输入低估约 27%，输出低估约 45%）。  
  - PR #43254 修复 Azure AI MAI-Image-2.5-Flash 输出价格，使其与零售价一致（此前高估约 70%）。  
- **流式传输效率**：  
  - PR #43223 在提示钩子前即验证 `stream_chunk_size`，避免对无效值（如 `"sixty-four"` 或 `0`）进行不必要的处理。

> 🔗 [PR #43251 – 速率限制强制执行](https://github.com/BerriAI/litellm/pull/43251)  
> 🔗 [PR #43245 – HttpClientPool 重构](https://github.com/BerriAI/litellm/pull/43245)  
> 🔗 [PR #43253 – Fireworks 定价修复](https://github.com/BerriAI/litellm/pull/43253)

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 影响 | 状态 |
|--------|------|--------|--------|
| 🚨 严重 | **路由器回退在超时后返回 `null` 响应体** (#43165) | 非流式请求静默失败；破坏回退逻辑 | 开放 — **待修复** |
| 🚨 高 | **Redis 缓存因 `ssl_check_hostname` 错误失败** (#34614) | v1.93.0+ 版本中缓存/预算功能中断 | 开放 — **修复 PR 待提交** |
| ⚠️ 中等 | **因 `request_id = "None"` 冲突导致支出日志丢失** (#39749) | Databricks-Gemini 的支出追踪数据丢失 | 开放 — **影响计费完整性，风险较高** |
| ⚠️ 中等 | **翻译过程中工具/指令字段被丢弃** (#41913) | `const`、`parallel_tool_calls`、`allowed_callers` 等字段丢失 | 开放 — 影响代理精度 |
| ⚠️ 中等 | **Bedrock 透传绕过 `key.models` 访问控制** (#26399) | 内部模型存在安全绕过漏洞 | 开放 — **严重访问控制缺陷** |

> 🔗 [问题 #43165 – 路由器回退空响应](https://github.com/BerriAI/litellm/issues/43165)  
> 🔗 [问题 #34614 – Redis ssl_check_hostname 错误](https://github.com/BerriAI/litellm/issues/34614)  
> 🔗 [问题 #39749 – 支出日志丢失](https://github.com/BerriAI/litellm/issues/39749)  
> 🔗 [问题 #26399 – Bedrock 透传绕过](https://github.com/BerriAI/litellm/issues/26399)

---

### **6. 对应用开发者的启示**  
- **使用 v1.100.3+** 以规避 Redis、Databricks 与支出日志的已知问题。若使用带 SSL 的 Redis，避免使用 `v1.93.0`。  
- **更新你的模型别名** — Databricks Unity Gateway 现在需要更新名称（参见 #43146）。  
- **密切监控成本报告** — 最近的修复表明，DeepSeek、Fireworks 与 Azure AI 的定价此前存在偏差。  
- **启用 OTel 导出** — PR #39774 推动通过 OTel 提供完整的支出/预算指标（而不仅是 Prometheus），符合可观测性最佳实践。  
- **避免依赖 `request_id = null` 的行为** — 确保上游服务返回有效 ID，以防止主键冲突。  
- **对于代理应用**：谨慎处理 `tool` 与 `instruction` 字段 — 它们可能在翻译过程中被剥离（参见 #41913）。建议使用显式模式校验。

> 💡 **实用技巧**：审计你的 `model_prices_and_context_window.json` 文件 — 过时条目（如 DeepSeek V4 Pro、Bedrock 跨区域）可能导致错误的成本计算。订阅 [LiteLLM 成本映射同步机器人](https://github.com/BerriAI/litellm/blob/main/.github/workflows/cost-map-sync.yml) 以获取自动更新。

---  
*简报数据来源：GitHub [BerriAI/litellm](https://github.com/BerriAI/litellm)*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# **Unsloth Digest – 2026-09-26**

---

### **1. 今日亮点**  
Unsloth 团队持续聚焦于 AMD 硬件上的稳定性与性能优化，针对 ROCm 7.14/7.2 兼容性、GPU 内存管理以及 RDNA1/RDNA2 显卡上的训练可靠性进行了关键修复。Studio 中新增的用户界面优化——包括模型固定、更智能的提示工具、项目排序功能——显著提升了开发者在管理微调模型和复杂工作流时的使用体验。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未检测到新版本发布或破坏性变更。*

但当前正在进行的工作包括：
- **PR #11137**：将 TRL 版本上限从 `<=0.24.0` 升级至 `1.13.0`，以支持更新的强化学习功能（待合并）。[GitHub PR #11137](https://github.com/unslothai/unsloth/pull/11137)
- **PR #11808**：在 Studio 中引入全新的 *基准测试页面*，用于对已加载的 GGUF 模型进行推测解码、KV 缓存和内存卸载设置的全面测试——对推理流水线调优至关重要。[GitHub PR #11808](https://github.com/unslothai/unsloth/pull/11808)

---

### **3. 新模型与硬件支持**  
- **AMD ROCm 10 支持追踪**：用户通过 **Issue #9932** 请求对 ROCm 7.14 及 ROCm 10 的支持，因 AMD 已正式发布 ROCm 10。[GitHub Issue #9932](https://github.com/unslothai/unsloth/issues/9932)  
- **Vulkan 训练支持**：一项功能请求（**Issue #11184**）呼吁通过外部项目如 `necas/vulkan-training` 实现基于 Vulkan 的训练，从而突破 ROCm 限制，实现对完整 AMD GPU 的利用。[GitHub Issue #11184](https://github.com/unslothai/unsloth/issues/11184)  
- **ModelScope 集成**：Studio 现在支持将 ModelScope 作为 Hugging Face 被屏蔽时的替代模型源，并可通过设置自定义 HF 端点。[GitHub PR #11761](https://github.com/unslothai/unsloth/pull/11761)  
- **vLLM 与 SGLang 可选支持**：在 Studio 中作为可选推理引擎新增，支持多 GPU、量化及视觉能力。由于依赖复杂性，不默认安装。[GitHub PR #11491](https://github.com/unslothai/unsloth/pull/11491)

---

### **4. 性能与优化**  
- **GPU 内存复用优化**：**PR #11843** 确保图像/视频去噪任务在单个渲染线程上运行，复用 cuDNN 基准和 SDPA 执行计划——降低重复生成时的延迟。[GitHub PR #11843](https://github.com/unslothai/unsloth/pull/11843)  
- **动态维度编译修复**：**PR #11842** 防止在使用 INT8/FP8 时，Qwen-Image 流水线中第二个提示引发重新编译延迟——将停顿时间从 15–50 秒降至可接受范围。[GitHub PR #11842](https://github.com/unslothai/unsloth/pull/11842)  
- **内存规划精度提升**：**PR #11922** 根据实际加载的数据类型（如 bf16/fp16）而非磁盘大小调整图像内存规划——避免在 24GB 显卡上不必要的卸载。[GitHub PR #11922](https://github.com/unslothai/unsloth/pull/11922)  
- **Qwen-Image-2.1 的 Hadamard 旋转优化**：**PR #11835** 通过旋转输入以匹配 bf16 行为，提升 int8 变换器精度——LPIPS 从 0.066 下降至约 0.04。[GitHub PR #11835](https://github.com/unslothai/unsloth/pull/11835)

---

### **5. 稳定性与回归问题**  
今日报告的关键稳定性问题集中在 **AMD GPU 崩溃与内存管理错误**：

| 严重性 | 问题 | 摘要 | 修复状态 |
|--------|------|--------|-----------|
| ⚠️ 高 | **Issue #9130** | 图像生成过程中发生 GPU 崩溃（`hipErrorLaunchFailure`），导致 Studio 服务器意外终止。 | 尚无修复；需改进 C++ 异常处理机制。[GitHub Issue #9130](https://github.com/unslothai/unsloth/issues/9130) |
| ⚠️ 高 | **Issue #11498** | 在 RX 7900 XTX 上进行 QLoRA 训练时触发 AMDGPU VM 故障与 GPU 重置。 | 更新后可复现；与 `utils.py` 中的流处理缺陷相关。[GitHub Issue #11498](https://github.com/unslothai/unsloth/issues/11498) |
| ⚠️ 高 | **Issue #10563** | 4-bit 反量化使用缓存的 GPU 流，导致训练期间出现竞争条件。 | 已定位根本原因；待修复位于 `unsloth/kernels/utils.py`。[GitHub Issue #10563](https://github.com/unslothai/unsloth/issues/10563) |
| ⚠️ 中 | **Issue #9792** | Qwen3.8-27B V3 GGUF 在 R9700（Vulkan）上预填充后崩溃；V2 版本正常运行。 | 临时解决方案：回滚至 `408fcc1807ab`。[GitHub Issue #9792](https://github.com/unslothai/unsloth/issues/9792) |
| ⚠️ 中 | **Issue #7449** | Unsloth Studio 在 Strix Halo（Windows）上将模型加载至系统内存而非显存。 | 显卡计算可见但显存未使用；可能为驱动或上下文配置问题。[GitHub Issue #7449](https://github.com/unslothai/unsloth/issues/7449) |

---

### **6. 对应用开发者的启示**  
- **对 AMD 用户**：若使用旧款显卡（如 R9700、RX 7600），请避免使用 ROCm 7.2。在官方支持确认前，建议使用 ROCm 7.14 或更早版本。请关注 **Issue #9932** 以获取未来 PyTorch 构建进展。
- **对推理工程师**：请使用 **Studio 的基准测试页面（PR #11808）**，针对推测解码、KV 缓存类型及卸载策略进行调优，以获得真实场景下的最佳性能。
- **对微调流水线**：在 RDNA1/RDNA2 显卡上进行 QLoRA 训练时需谨慎——在 **PR #10563** 合并前，预计会出现 GPU 重置。优先选择稳定模型如 Qwen3.5-V2 而非 V3。
- **对应用集成者**：可利用 **vLLM/SGLang 可选支持（PR #11491）** 实现高吞吐、多 GPU 服务，但需手动管理依赖项。
- **对模型打包者**：使用 `save_pretrained_gguf` 时需格外小心——**Issue #11698** 显示，除非明确处理，否则 LoRA 权重可能未被合并。务必验证输出结果。

> ✅ **可操作提示**：若在 AMD 平台部署，请使用 `ROCm 7.14` 测试，并避免 `ROCm 7.2`，直至 Unsloth 更新其 PyTorch 堆栈。在 Docker 中使用 `--no-cache-dir` 可避免缓存下载异常（例如 **Issue #11638**）。

---  
*摘要生成时间：2026-09-26 | 来源：[unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*