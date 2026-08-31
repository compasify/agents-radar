# AI 基础设施日报 2026-08-31

> 生成时间: 2026-08-31 00:48 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-08-31**

---

### **1. 生态概览**  
2026年第三季度，AI推理基础设施领域迅速成熟，呈现出激进的硬件抽象、对Blackwell架构GPU（NVIDIA B200/GB10）的统一支持，以及在MoE模型中对推测性解码的日益增强的支持。各项目不再仅仅比拼原始吞吐量——而是通过稳定性、长上下文效率和多后端可移植性实现差异化。混合架构（如Qwen3.8-Flash-Next、GLM-5.3-Flash）的兴起，要求更深入地集成KV缓存优化、分布式服务与异构计算。vLLM、SGLang和LiteLLM在内核级创新上引领潮流，而Ollama/Unsloth则聚焦于易用性和边缘部署，整个生态正分化为高性能引擎与开发者友好平台两大阵营。

---

### **2. 活跃度对比**

| 项目       | 开放问题数（↑/↓） | 合并的PR数（↑/↓） | 发布状态         |
|---------------|-------------------|------------------|------------------------|
| **vLLM**      | 42 (↑)            | 12 (↑)           | 近24小时内无发布       |
| **SGLang**    | 37 (↑)            | 9 (↑)            | 近24小时内无发布       |
| **llama.cpp** | 48 (↑)            | 10 (↑)           | 近24小时内无发布       |
| **Ollama**    | 52 (↑)            | 7 (↑)            | 近24小时内无发布       |
| **LiteLLM**   | 41 (↑)            | 8 (↑)            | **v1.100.0-rc.1 / v1.99.0-rc.2** 已发布 |
| **Unsloth**   | 49 (↑)            | 5 (↑)            | 近24小时内无发布       |

> ✅ *LiteLLM 在24小时内发布两个RC版本，表明其正在积极进行生产就绪测试。*

---

### **3. 模型支持竞赛**

| 新模型               | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------------------|------|--------|-----------|--------|---------|---------|
| **Qwen3.8-Flash-Next** | ✅ (MTP, DFlash2) | ⚠️ (解码图损坏、令牌循环) | ✅ (`draft-mtp`) | 🟡 (正在讨论) | ❌ | ❌ (无法加载) |
| **GLM-5.3-Flash**      | ✅ (MoE, KDA, TileLang) | ⚠️ (`fp8` KV缓存失败) | ✅ (混合MoE + 视觉) | ❌ | ❌ | ❌ (缺少`quant_state`) |
| **LTX-2-GGUF (视频)** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ (功能请求) |

> 🏆 **胜出者：vLLM** —— 在两款新模型及推测性解码、MoE路由等高级特性上的集成速度最快且最稳定。  
> 🔥 **新兴挑战**：Unsloth对视频模型的野心凸显了主流引擎在多模态准备方面的差距。

---

### **4. 性能前沿**

| 优化重点             | vLLM                          | SGLang                         | llama.cpp                 | Ollama                   | LiteLLM                     | Unsloth              |
|-------------------------------|-------------------------------|--------------------------------|----------------------------|--------------------------|------------------------------|-----------------------|
| **KV缓存与内存**         | INT8, FP8, 批次无关, 前缀复用 | FP8, HiCache, 统一池化     | 懒惰模式, `--cache-ram` | MLX内存泄漏（严重） | 流式工具调用修复    | 提示词缓存不匹配 |
| **批处理与推理**      | 批次无关, 流式预填充 | JIT融合, 统一注意力 | 多GPU/MoE, AVX2          | 代理上下文膨胀      | Rust迁移（亚毫秒级）     | 上下文大小退化 |
| **内核级优化**| FlashInfer SM90 MXFP4 x FP8, PTX 9.4 `ldmatrix` | JIT融合（QKV、归一化、偏置） | HIP RDNA3点积       | N/A                      | Rust实现亚毫秒级             | N/A                   |
| **分布式服务**       | ROCm GB10, AITER稀疏MLA   | 分离式预填充, DP注意力 | N/A                        | N/A                      | 多提供商路由       | N/A                   |
| **量化效率**   | W4A8-INT8符号扩展     | NVFP4, FP8, 融合归一化        | Q2_0 (HIP), AVX2            | GGUF对齐问题    | 原生量化感知路由   | bnb-4bit形状错误 |

> 📈 **性能领先者**：**vLLM** 在内核级创新方面遥遥领先，尤其在Blackwell与AMD GPU负载场景下表现突出。  
> 💡 **关键趋势**：**JIT融合**（SGLang）与**稀疏注意力**（vLLM）正成为高效扩展大型MoE模型的关键。

---

### **5. 层级定位**

| 项目       | 主要层级                     | 角色摘要                                                                 |
|---------------|-----------------------------------|------------------------------------------------------------------------------|
| **vLLM**      | **推理引擎**              | 专注于最大吞吐量、内核优化与硬件抽象（CUDA/ROCm）的底层引擎。面向云规模部署。 |
| **SGLang**    | **高吞吐推理运行时** | 混合运行时，结合引擎逻辑与应用层编排。强调整体正确性、长上下文能力及CUDA图重播鲁棒性。 |
| **llama.cpp** | **本地运行时 / 嵌入式推理** | 面向边缘设备（Apple Silicon、AMD、Vulkan）的跨平台推理引擎。优先保障兼容性与低延迟本地执行。 |
| **Ollama**    | **开发者友好的网关 / CLI** | 统一接口，用于模型管理、本地推理与代理工作流。作为用户与底层引擎（vLLM、llama.cpp等）之间的网关。 |
| **LiteLLM**   | **AI网关 / 抽象层** | 多提供商API网关，支持本地与云端后端无缝切换。通过Rust迁移推动亚毫秒级延迟。 |
| **Unsloth**   | **微调与本地UI平台** | 全栈工具包，聚焦微调、模型编辑与桌面用户体验——服务于研究与私有部署中的细分但快速增长的需求。 |

> 🧩 **战略洞察**：整个技术栈正从单体引擎演变为分层、可组合的系统——其中**vLLM/SGLang**驱动核心，**LiteLLM/Ollama**抽象访问，**Unsloth**则实现定制化。

---

### **6. 趋势信号**

1. **硬件聚焦于Blackwell与GB10**：所有主要项目均优先支持NVIDIA B200与AMD GB10。vLLM与SGLang在ROCm集成上领先，表明**AMD已不再是企业推理中的“次等选择”**。

2. **推测性解码已进入生产就绪阶段**：MTP、DFlash2与MLA已在vLLM、SGLang与llama.cpp中得到实际支持——但**输出正确性与内存安全方面的回归问题仍普遍存在**，提示生产环境中仍需保持谨慎。

3. **KV缓存优化成为新战场**：从FP8到INT8再到批次无关缓存，各项目正大力投入以降低内存占用并提升复用率——尤其针对长上下文应用场景。

4. **Rust迁移 = 网关的未来**：LiteLLM通过Rust实现亚毫秒目标，标志着向**低开销、高吞吐网关**的转变——这对实时代理与流式应用至关重要。

5. **稳定性胜过功能**：尽管功能快速迭代，但**稳定性问题仍主导问题追踪器**（如无声数据损坏、死锁、内存泄漏）。这表明行业正从“功能速度”转向**生产可靠性**。

> 🔍 **对开发者的可操作建议**：  
> - **面向云规模推理**：使用 **vLLM**，搭配Blackwell上的ROCm或CUDA；避免启用 `VLLM_PLE_CPU_OFFLOAD` 和 `fp8` KV缓存，直到相关修复上线。  
> - **面向代理流水线**：仅在验证修复PR后，才使用 **LiteLLM** 的 `stream_options.include_usage=true`；考虑 **llama.cpp** 用于离线、低延迟运行。  
> - **面向边缘/本地应用**：**Ollama** 与 **llama.cpp** 最为合适，但需监控Apple MLX内存泄漏与上下文膨胀问题。  
> - **避免不稳定集成**：在解码图问题解决前，不要在生产环境部署 **Unsloth** 或 **SGLang** 与 Qwen3.8-Flash-Next 的组合。

---

*本报告基于GitHub活动数据（2026-08-31）整理。如需实时追踪，请关注 [vLLM](https://github.com/vllm-project/vllm), [SGLang](https://github.com/sgl-project/sglang), [llama.cpp](https://github.com/ggml-org/llama.cpp), [Ollama](https://github.com/ollama/ollama), [LiteLLM](https://github.com/BerriAI/litellm), 以及 [Unsloth](https://github.com/unslothai/unsloth)。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest – 2026-08-31

---

### **1. 今日亮点**  
vLLM 持续推进与 V1 引擎完全对齐及硬件抽象的目标，重点在 AMD Blackwell 系列 GPU（GB10/sm_121）的 ROCm 支持方面取得关键进展，并新增了 **GLM-5.3-Flash** 与 **Qwen3.8-Flash-Next** 等模型支持。针对推测解码（DCP/MLA）和 KV 缓存管理的关键稳定性修复已合并，同时批处理无关推理与 INT8 KV 缓存量化等正在进行的工作，预示着 v0.27 版本前将有更深层次的优化。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新版本发布。*  
- **迁移提示**：`VLLM_USE_RUST_FRONTEND=1` 实验性标志仍处于激活状态，但尚未功能完备 ([#44280](https://github.com/vllm-project/vllm/issues/44280))。  
- **破坏性配置变更**：引入 `AITERConfig` 对象以统一此前由分散环境变量控制的 ROCm AITER 开关 —— 未来将弃用 `VLLM_ROCM_USE_AITER*` 标志 ([#54474](https://github.com/vllm-project/vllm/pull/54474))。

---

### **3. 新模型与硬件支持**  
- ✅ **新增模型**：  
  - [`zai-org/GLM-5.3-Flash`](https://huggingface.co/zai-org/GLM-5.3-Flash) 通过 PR [#53906](https://github.com/vllm-project/vllm/pull/53906) 添加  
  - [`Qwen/Qwen3.8-Flash-Next`](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) 通过 PR [#53896](https://github.com/vllm-project/vllm/pull/53896) 添加，支持 MTP 推测解码与前缀缓存  
- 🚧 **硬件与后端扩展**：  
  - 初步支持 **Hy4-preview** 的 ROCm/gfx950（PR [#54432](https://github.com/vllm-project/vllm/pull/54432))  
  - ROCm AITER 稀疏 MLA 现已支持 Kimi-K3 DSpark 的注意力汇聚点与上下文并行  
  - **AMD GB10/sm_121** 现可通过 PR [#54475](https://github.com/vllm-project/vllm/pull/54475) 启用 MoE DFlash2 草稿模型

---

### **4. 性能与优化**  
- 🔥 **内核级提升**：  
  - PR [#54032](https://github.com/vllm-project/vllm/pull/54032) 引入全新的 **FlashInfer SM90 MXFP4 x FP8 融合 MoE 后端**，使 DeepSeek-V4 系列模型在 Blackwell GPU 上实现优化路由。  
  - PR [#49529](https://github.com/vllm-project/vllm/pull/49529) 采用 PTX 9.4 `ldmatrix.s8.s4` 用于 W4A8-INT8 路径，支持在共享内存加载期间实现 **打包后的 INT4 到 INT8 的飞行中符号扩展** —— 对高效低比特推理至关重要。  
- ⚙️ **系统级改进**：  
  - PR [#53733](https://github.com/vllm-project/vllm/pull/53733) 在 V1 中新增 **流式提示预填充支持**，允许增量注入提示并提前构建 KV 缓存。  
  - PR [#53692](https://github.com/vllm-project/vllm/pull/53692) 将 **批处理无关测试** 扩展至 `google/gemma-3-1b-it` 与 `microsoft/phi-4`，提升多种模型下的可靠性。  
- 📈 **内存与吞吐**：  
  - [#27433](https://github.com/vllm-project/vllm/issues/27433) 中持续努力旨在通过确定性调度与状态追踪消除批处理无关推理中的非确定性问题。

---

### **5. 稳定性与回归问题**  
| 问题 | 严重性 | 状态 | 修复提交？ | 备注 |
|------|----------|--------|---------|-------|
| [#42426](https://github.com/vllm-project/vllm/issues/42426): Kimi-K2.6 输出 "!!!!!!!!!!" 且无推理过程 | 高 | 开放 | ❌ | 在 B200 上可复现；可能与解析器错位或输出截断有关 |
| [#54317](https://github.com/vllm-project/vllm/issues/54317): GLM-5.3-Flash CUDA 非法内存访问（3 个内核） | 严重 | 开放 | ❌ | 出现在 4xB200 环境；影响 MoE、KDA 线性注意力与 TileLang |
| [#53960](https://github.com/vllm-project/vllm/issues/53960): `VLLM_PLE_CPU_OFFLOAD` 启动时死锁（TP=1） | 高 | 开放 | ❌ | 引擎初始化完成后挂起 —— 影响 Qwen3.8-Flash-Next 部署 |
| [#49922](https://github.com/vllm-project/vllm/issues/49922): v0.26.0 中 FlashMLA 断言失败（DeepSeek-V4） | 高 | 开放 | ❌ | 相较于 v0.25.0 存在回归；阻塞 DeepSeek-V4-Flash 的生产使用 |
| [#54094](https://github.com/vllm-project/vllm/issues/54094): DFlash2 + YaRN 下零前缀缓存重用 | 中 | 开放 | ❌ | 尽管提示相同，约 1.039M tokens 未被重用 —— 影响长上下文效率 |

> **注意**：多个近期提交已着手解决根本原因：  
> - [#54465](https://github.com/vllm-project/vllm/pull/54465)：修复稀疏 MLA 中的 BLHNC 地址计算 → 解决部分闪存问题  
> - [#54472](https://github.com/vllm-project/vllm/pull/54472)：为不支持的 A2A 布局添加回退机制 → 提升鲁棒性

---

### **6. 对应用开发者的意义**  
- **面向多卡与异构环境构建**：随着对 ROCm 支持的增强（GB10、gfx950），建议在 AMD 基础设施上使用 vLLM —— 尤其是如 GLM-5.3-Flash 或 Qwen3.8-Flash-Next 这类大型 MoE 模型。使用 `--attention-config '{"indexer_kv_dtype": "float16"}'` 时需谨慎，直至 [#54466](https://github.com/vllm-project/vllm/pull/54466) 修复。  
- **自信使用推测解码**：DFlash2 与 MTP 现已在 NVIDIA 与 AMD 平台上支持 MoE 模型。但请避免在 `tensor_parallel_size=1` 时使用 `VLLM_PLE_CPU_OFFLOAD`，因存在已知死锁风险 ([#53960](https://github.com/vllm-project/vllm/issues/53960))。  
- **优化长上下文工作负载**：启用流式预填充（`--enable-streaming-prefill`）与前缀缓存以降低 TTFT。监控零重用场景，如 [#54094](https://github.com/vllm-project/vllm/issues/54094) 所示。  
- **准备 v1 迁移**：若依赖 V0 中的特性（如部分预填充或自定义 Mamba 层），请关注移植进度 ([#23957](https://github.com/vllm-project/vllm/issues/23957), [#14003](https://github.com/vllm-project/vllm/issues/14003))。  
- **避免不稳定标志**：在 `VLLM_USE_RUST_FRONTEND` 与 Python API 完全对齐前，不要在生产环境中使用 ([#44280](https://github.com/vllm-project/vllm/issues/44280))。

---  
*本摘要基于截至 2026-08-31 的 GitHub 活动整理。如需实时更新，请关注 [vLLM GitHub Issues](https://github.com/vllm-project/vllm/issues)。*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest – 2026-08-31

---

### **1. 今日亮点**  
SGLang 持续推进在 Blackwell 与 GB10 硬件上对高吞吐、长上下文推理的支持，修复了全 CUDA 图重放中的推测解码正确性及内存安全关键问题。主要贡献包括：修复 Qwen3.8-Flash-Next 在 GB10 上的静默输出损坏问题（PR #37111），解决分布式预填充场景下 HiCache 一致性问题（Issue #22607），以及针对 GLM-5.3-Flash 等模型的 FP8 KV 缓存使用稳定性优化工作（Issue #36830）。

---

### **2. 版本发布与破坏性变更**  
过去 24 小时内未报告新版本或破坏性 API/配置变更。

---

### **3. 新模型与硬件支持**  
- **Qwen3.8-Flash-Next**：正在调查 GB10 TP2 系统上的解码图损坏问题（`#37111`）及 token ID 0 循环问题（`#36537`）。  
- **GLM-5.3-Flash**：持续存在 `--kv-cache-dtype fp8` 使用异常问题（`#36830`），以及启用 `--enable-dp-attention` 时工作进程在预热阶段挂起问题（`#36802`）。  
- **AMD MI355X**：通过优化 FlyDSL fp4 索引器评分，实现解码性能提升 28–66%（PR #37173）。  
- **Apple Silicon (MLX)**：修复加载预置权重时启动崩溃问题（#37035），恢复 MLX 后端用户的稳定性。  
- **Ascend NPU**：推测解码适配工作正在进行中（#35629）；文档更新待定。

---

### **4. 性能与优化**  
- **Blackwell 优化**：针对 Qwen-Image 扩散模型的多项 JIT 内核融合：  
  - FP8 QKV 投影融合（**PR #37123**）  
  - 归一化 + 激活量化融合（**PR #37156**）  
  - 残差归一化 + NVFP4 量化融合（**PR #37129**）  
  - 输出偏置吸收使 BF16 加法内核减少约 33%（每步从 673 降至 449）（**PR #37116**）  
- **统一内存与缓存**：重构以通过单一 id 转译器路由 KV 读取（**PR #35247**），并迁移注意力后端至统一池读取路径（**PR #34613**）。  
- **Triton 调优**：为 GLM-4.5-FP8 新增 GB300 Triton MoE 配置（**PR #37159**），提升高端集群上的内核效率。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 描述 | 修复状态 |
|---------|------|-------------|------------|
| 🔴 高 | [#37111](https://github.com/sgl-project/sglang/issues/37111) | Qwen3.8-Flash-Next 在 GB10 TP2 上全解码图出现静默语义损坏 | 开放 |
| 🔴 高 | [#36830](https://github.com/sgl-project/sglang/issues/36830) | GLM-5.3-Flash 因 `index_kpool > 1` 排除导致 `fp8` KV 缓存失败 | 开放 |
| 🔴 高 | [#36537](https://github.com/sgl-project/sglang/issues/36537) | Qwen3.8-Flash-Next 在 token ID 0 处无限循环 | 开放 |
| 🟡 中 | [#36941](https://github.com/sgl-project/sglang/issues/36941) | 长预填充（>40k tokens）耗尽统一内存并静默终止工作进程 | 开放 |
| 🟡 中 | [#36550](https://github.com/sgl-project/sglang/issues/36550) | 冷预填充超过 262k tokens 后，首个解码 token 即触发工作进程中断 | 开放 |
| 🟡 中 | [#36894](https://github.com/sgl-project/sglang/issues/36894) | 并行采样流量下 `/unload_lora_adapter` 导致调度器死锁 | 开放 |

> ✅ **已修复**：HiCache 一致性方案合并至 #22607；`MLX server crash` 问题已在 #37035 修复。

---

### **6. 对应用开发者的启示**  
- **在 #36830 修复前，请避免在 GLM-5.3-Flash 上使用 `--kv-cache-dtype fp8`** —— 可能导致静默失败或崩溃。  
- **若在 Qwen3.8-Flash-Next 上遇到解码图损坏**（如 #37111、#37152），请暂时使用 `--disable-cuda-graph`，直至稳定补丁发布。  
- **关注长上下文请求（>40k tokens）** —— GB10 与 Spark 系统存在真实内存耗尽风险（参见 #36941）。  
- **充分利用新 JIT 融合优化**（适用于 Qwen-Image 扩散模型）—— 可在 Blackwell GPU 上实现 30%+ 延迟降低，启用方式为 `--jit-kernel`，并确保安装 Triton 3.7+。  
- **确保 Triton 版本正确** —— 当前来自 #35785 的警告表明 `triton==3.4.0` 不兼容，请使用 `.github/scripts/install_triton.sh` 升级。

👉 **实用提示**：谨慎使用 `--enable-lmcache --lmcache-config-file` —— #37160 显示因忽略 `cache_salt` 导致租户隔离可能失效。建议禁用或手动审计存储密钥。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp 消息简报 – 2026-08-31**

---

### **1. 今日重点**  
最新开发周期聚焦于推测解码和多 GPU/MoE 推理的关键稳定性修复，尤其针对 `draft-dflash` 与 Qwen3.8-Flash-Next 的 `MTP` 支持。针对 AMD RDNA3（HIP）和 Apple M3 Ultra（Metal）的多项优化已落地，显著提升了各类硬件目标上的张量吞吐量与内存效率。

---

### **2. 发布与破坏性变更**  
- **`--tensor-read-lazy` 重命名为 `--lazy-mode`，缩写为 `-lzm`** (#27969)：  
  此 CLI 变更使标志名称与内部参数语义保持一致；现有脚本需同步更新。[PR #27969](https://github.com/ggml-org/llama.cpp/pull/27969)

---

### **3. 新模型与硬件支持**  
- **GLM-5-Next (GLM-5.3-Flash)** 已加入：一款 321.3B 参数的混合 MoE 模型，通过 PR #27754 增加视觉支持。  
  [PR #27754](https://github.com/ggml-org/llama.cpp/pull/27754)  
- **Qwen3.8-Flash-Next (qwen4exp)**：通过 PR #27836 加入 draft-MTP 头支持，并在 #27941 中修复序列键污染问题。  
  [PR #27836](https://github.com/ggml-org/llama.cpp/pull/27836), [PR #27941](https://github.com/ggml-org/llama.cpp/pull/27941)  
- **AMD RDNA3 (gfx1201)**：通过原生 amdgcn perm 启用 HIP 特定的 Q2_0 点积优化。  
  [PR #26753](https://github.com/ggml-org/llama.cpp/pull/26753)  
- **Apple M3 Pro 与 M3 Ultra**：新增 fa-vec 调优，提升注意力性能。  
  [PR #27963](https://github.com/ggml-org/llama.cpp/pull/27963), [PR #27999](https://github.com/ggml-org/llama.cpp/pull/27999)  

---

### **4. 性能与优化**  
- **HIP (RDNA3)**：优化后的 Q2_0 路径在 gfx1201 上将延迟降低高达 ~12%。  
  [PR #26753](https://github.com/ggml-org/llama.cpp/pull/26753)  
- **Vulkan (Strix Halo)**：对 `rm_kq_int`/`rm_stdq_int` 的调优，在批处理解码中 B=5–8 时提升吞吐量。  
  [PR #27909](https://github.com/ggml-org/llama.cpp/pull/27909)  
- **AVX2 CPU**：大批次场景下 IQ 量化模型速度提升（如 imatrix/perplexity）。  
  [PR #27402](https://github.com/ggml-org/llama.cpp/pull/27402)  
- **RMS Norm 融合**：Vulkan 后端在 Gemma4 上通过融合操作获得 ~4% 提升。  
  [PR #28024](https://github.com/ggml-org/llama.cpp/pull/28024)  
- **CUDA**：`mm_ids_helper` 快速路径现对任意 `n_expert_used` 均启用，移除回退至通用路径的情况。  
  [PR #27978](https://github.com/ggml-org/llama.cpp/pull/27978)  

---

### **5. 稳定性与回归问题**  
- **严重**：`draft-dflash` + 图像输入导致 HTTP 500 错误，根源为草稿 KV 缓存中的位置空洞。  
  根因：MTMD 图像分块在草稿上下文中留下间隙。  
  [Issue #27408](https://github.com/ggml-org/llama.cpp/issues/27408)  
- **严重**：Qwen3.8-Flash-Next 在 gfx1151（Strix Halo）上超过 ~1K 上下文时解码吞吐量急剧下降。  
  [Issue #27856](https://github.com/ggml-org/llama.cpp/issues/27856)  
- **回归**：`llama-server` 的槽位恢复无效 —— 尽管从文件恢复了 KV 状态，但未实际应用。  
  [Issue #26676](https://github.com/ggml-org/llama.cpp/issues/26676)  
- **崩溃**：Vulkan GATED_DELTA_NET 管道在 gfx1103（RADV 780M）上编译卡死。  
  [Issue #27998](https://github.com/ggml-org/llama.cpp/issues/27998)  
- **内存泄漏**：在长时运行负载下报告 Vulkan 引擎存在内存泄漏。  
  [Issue #28008](https://github.com/ggml-org/llama.cpp/issues/28008)  

> ✅ **修复进行中**：PR #28058 解决集成显卡上的跨请求 KV 缓存污染问题。

---

### **6. 对应用开发者的影响**  
- **所有新部署请使用 `--lazy-mode` 替代 `--tensor-read-lazy`**。  
- **对 Qwen3.8-Flash-Next 启用 `--spec-type draft-mtp`** 以解锁推测解码优势 —— 但在 #27408 修复前避免使用图像输入。  
- **在 AMD Strix Halo (gfx1151) 上运行批处理推理时，调整 `rm_kq_int`/`rm_stdq_int` 值** 以获得最佳吞吐。  
- **高并发场景下避免使用 `--cache-ram`** —— 它可能导致无关会话数据被恢复至新槽位 ([#27148](https://github.com/ggml-org/llama.cpp/issues/27148))。  
- **监控 `qwen3-tts` 的 VRAM 使用情况** —— 默认上下文大小（32768）分配 3.5 GB KV 缓存；如需可减小 `--n-cpu-context` ([#27937](https://github.com/ggml-org/llama.cpp/issues/27937))。  

> 🔧 **技巧提示**：涉及 `--n-cpu-ffn` 的边缘情况，建议使用 `--n-cpu-mode` 显式控制 FFN 层分配 ([#27987](https://github.com/ggml-org/llama.cpp/issues/27987))。

---  
*数据来源：[ggml-org/llama.cpp GitHub](https://github.com/ggml-org/llama.cpp)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-08-31**

---

### **1. 今日亮点**  
Ollama 生态系统持续成熟，开发重点聚焦于边缘与云部署场景下的稳定性、性能和易用性。关键进展包括修复 Apple Silicon 平台 MLX 的严重内存泄漏问题，改进企业环境中的代理支持，以及通过新增工具链集成优化代理工作流。值得注意的是，已合并的 PR 实现了通过 `/api/info` 接口暴露系统 GPU 与内存指标，解决了开发者长期关注的可观测性需求。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新发布。*  
但正在进行的工作表明，未来版本可能存在破坏性变更：  
- **MLX 后端**：硬编码的 8 GiB 前缀缓存预算（跟踪于 #17924, #18131）可能重新评估，以避免在 32 GB Mac 上运行代理工作负载时产生大量交换使用。  
- **工具模式验证**：修复 #18140 允许 OpenAI 兼容工具定义中嵌套对象的 `required` 字段——此变更可能影响依赖复杂模式的代理。

---

### **3. 新模型与硬件支持**  
- **新增模型**：`qwen3.8-flash-next` 正在讨论加入云目录 (#18128)，其资源占用相比 DeepSeek-V4-Flash 降低约 30–40%，同时保持强劲推理能力。  
- **硬件支持**：  
  - NVIDIA Orin AGX 64GB（Jetpack 7.2 R39）仍存在 `cudaSetDevice err: 801` 问题 (#18067)。  
  - RTX 5060 Ti 用户报告在升级至 v0.33.1–0.33.2 后出现 GPU 重置问题（Xid 62/154）(#18144)。  
  - Jetson Orin Nano 从 v0.32.2 起对 `gemma4:e2b/e4b` 模型表现出过度内存占用问题 (#17787)。

---

### **4. 性能与优化**  
- **内存增长**：  
  - MLX runner 在固定上下文下每请求产生 **~0.147 GiB 常驻内存增长**（#17924），在 48 GB 统一内存系统上趋于稳定于 ~28.5 GiB。  
  - 固定 8 GiB 前缀缓存导致 **32 GB Apple Silicon 机器在代理工作负载中产生重度交换（>32 GB）**（#18131, #18132, #18133）。  
- **提示词缓存**：PR #16916 在 API 响应中新增 `cache_n` 与缓存命中指标，提升提示词复用效率的可观测性。  
- **GPU 发现**：PR #18142 引入 `/api/info` 和 `ollama info` CLI，暴露显存总量/空闲量、系统内存及 GPU 详情——对集群编排至关重要。

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 状态 | 链接 |
|--------|------|-------|------|
| 🔴 高 | `ollama pull` 过程中出现 `digest mismatch`（罕见但持续发生） | 开放 | [#941](https://github.com/ollama/ollama/issues/941) |
| 🔴 高 | `qwen3.8` 在流式聊天中因“未找到用户查询”而崩溃 | 开放 | [#17778](https://github.com/ollama/ollama/issues/17778) |
| 🔴 高 | `ollama create` 在 Qwen3.8-Flash-Next GGUF 上因验证错误失败 | 开放 | [#18146](https://github.com/ollama/ollama/issues/18146) |
| 🟡 中 | MLX KV 缓存未在请求间释放 → 内存累积（64 GB 系统达 75 GB） | 已关闭 | [#16698](https://github.com/ollama/ollama/issues/16698) |
| 🟡 中 | `web_fetch` 返回错误的 HTTP 状态码 | 开放 | [#18143](https://github.com/ollama/ollama/issues/18143) |
| 🟡 中 | `mlxrunner`：Modelfile 中的 `num_ctx` 被忽略 → 长预填充触发 Metal Watchdog 重启 | 开放 | [#18125](https://github.com/ollama/ollama/issues/18125) |

> ✅ **已合并修复**：  
> - 用于清单下载的代理支持 (#18145)  
> - 嵌套 `required` 对象的工具模式验证 (#18140)  
> - 通过 `/api/info` 暴露系统信息 (#18142)

---

### **6. 对应用开发者的影响**  
- **代理开发者**：在 Apple Silicon 与 Jetson 设备上使用 `qwen3.8-mlx` 及 `gemma4` 模型时需谨慎——由于前缀缓存与上下文处理机制，实际内存消耗可能远超预期。一旦 `/api/info` 可用，请及时监控 RAM/Swap 使用情况。  
- **API 消费者**：响应体中将新增 `cached_tokens` 与 `cache_n`，可观测性显著提升。建议在 CI/CD 或远程部署脚本中调用 `GET /api/info` 验证硬件可用性。  
- **工具链集成者**：仔细验证工具模式——近期变更允许嵌套 `required` 字段，但旧客户端可能因此中断。同时确保代理配置正确（`http_proxy`）以支持模型下载 (#15358)。  
- **模型制作者**：若使用 GGUF 量化格式，请确认对齐值在文件头声明为 `uint32`——当前解析器在声明错误时会静默默认为 32（#18130）。

> 🛠️ **实用提示**：对于防火墙后生产部署，建议使用 `OLLAMA_HTTP_PROXY` 并尽早测试模型拉取，避免运行时失败。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 消息简报 – 2026-08-31**

---

### **1. 今日重点**  
LiteLLM 项目正加速向高性能基础设施转型，当前正在进行的 Rust 迁移计划（#31263）旨在实现亚毫秒级（sub-1ms）开销。今天合并了多个关键稳定性修复，包括修复 `langfuse_tags` 解析问题（#38929）以及流式工具调用参数聚合问题（#38928），解决了 #38926 和 #38927 中报告的回归问题。此外，通过 PR #38924/#38925 新增对 **llmman** 提供商的支持，进一步拓展了本地推理选项。

---

### **2. 发布与破坏性变更**  
- 已发布 **v1.100.0-rc.1** 与 **v1.99.0-rc.2**（过去 24 小时内）。  
  - 所有 Docker 镜像均使用 [cosign](https://docs.sigstore.dev/cosign/overview/) 签名，密钥与提交 [`0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0) 中引入的一致。  
  - **迁移提示**：这些候选版本包含与流处理和防护墙响应格式相关的破坏性变更。升级前请务必查阅变更日志：[GitHub 发布说明](https://github.com/BerriAI/litellm/releases)。

---

### **3. 新模型与硬件支持**  
- **新提供者**：新增 **[llmman](https://github.com/llmmanorg/llmman)** 作为兼容 OpenAI 的本地推理后端，通过 `/v1` 接口在端口 `17434` 提供服务。适合希望本地运行大语言模型、实现低延迟高吞吐访问的开发者。  
  - GitHub PR：[#38924](https://github.com/BerriAI/litellm/pull/38924)  
- **增强 Gemini 集成**：PR #29275 引入对 Google Maps 响应格式的支持，使 Gemini 模型输出可支持更丰富的代理驱动工具调用。

---

### **4. 性能与优化**  
- **Rust 迁移计划**（#31263）进展迅速——目标是通过以原生 Rust 替代基于 Python 的路由逻辑，实现 AI 网关层的 **亚毫秒级开销**。早期基准测试表现良好；欢迎申请试用资格：[早期测试版注册](https://docs.google.com/forms/d/e/1FAIpQLSecWdOjkzjEson2UiZpD...)。  
- **流式优化**：PR #38928 为 `stream_options.include_usage=true` 添加了回归测试，防止工具调用参数被压缩为流结束时的突发数据（参见 #38926）。确保流式代理获得细粒度实时反馈。

---

### **5. 稳定性与回归问题**  
| 问题 | 严重程度 | 状态 | 修复 PR |  
|------|----------|--------|--------|  
| `stream_options.include_usage=true` 导致工具调用参数被压缩为突发 | 高 | 开放 | [PR #38928](https://github.com/BerriAI/litellm/pull/38928) |  
| `langfuse_tags` 头部导致路由器重试/降级崩溃 | 中 | 开放 | [PR #38929](https://github.com/BerriAI/litellm/pull/38929) |  
| `InfinityError` 使用可变默认 `headers` 参数 | 中 | 开放 | [PR #38909](https://github.com/BerriAI/litellm/pull/38909) |  
| 防护墙错误以 HTTP 500 而非 400 返回 | 高 | 开放 | [PR #38936](https://github.com/BerriAI/litellm/pull/38936) |  
| `claude` 返回 `[System: Empty message content sanitised...]` | 高 | 开放 | 尚无修复 |  

> ⚠️ 重要：多个问题影响核心代理工作流（工具调用、防护墙、流式传输），尤其在 Claude 与 vLLM 后端上。

---

### **6. 对应用开发者的启示**  
- 若在流式场景中使用 `stream_options.include_usage`、`guardrails` 或 `tool_calls`，请优先进行测试——近期漏洞可能导致静默数据丢失或错误分块。  
- 探索 **llmman**，实现无外部依赖的低延迟本地推理，适用于私有或离线代理部署。  
- 关注 Rust 迁移进展——预计 2026 年第四季度将带来显著性能提升；早期采用者可加入测试版以参与塑造。  
- 在 PR #38929 合并前，请谨慎使用 `langfuse_tags` —— 格式错误的逗号分隔值可能触发重试逻辑崩溃。  
- 避免仅依赖 `x-litellm-api-key` 与 OAuth2 MCP 服务器交互——当前行为返回 500 而非 401（参见 #29261）。  

👉 **行动建议**：升级至 `v1.99.0-rc.2` 或更高版本，并通过 cosign 验证 Docker 镜像签名，确保安全合规。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-08-31**

---

### **1. 今日亮点**  
Unsloth 项目持续扩展其多模态与跨平台能力，重点推进视频模型支持（LTX-2-GGUF）及 Ollama 集成的稳定性。近期出现关键回归问题，包括 Windows 安装程序行为异常和 SQLite 死锁风险，同时对 AMD GPU（Radeon）和 Intel XPU 支持的需求日益增长。

---

### **2. 发布与破坏性变更**  
*无* — 过去 24 小时内未发布新版本。

---

### **3. 新模型与硬件支持**  
- ✅ **视频模型支持**：[Issue #10013](https://github.com/unslothai/unsloth/issues/10013) 提出在聊天和 API 中原生支持视频分析，是迈向现代大语言模型全多模态对齐的重要一步。  
- ⚠️ **Qwen3.8-Flash-Next-GGUF 与 Qwen3.8-27B**：由于不支持的架构（`qwen4exp`）或混合注意力层中缺失 `quant_state`，两个模型均无法加载 ([#10015](https://github.com/unslothai/unsloth/issues/10015), [#10010](https://github.com/unslothai/unsloth/issues/10010))。  
- 📌 **Intel XPU**：多项问题凸显 Triton 集成不稳定 ([#10018](https://github.com/unslothai/unsloth/issues/10018))、优化器崩溃 ([#10021](https://github.com/unslothai/unsloth/issues/10021)) 及静默降级现象。  
- 🔧 **AMD GPU（Radeon）**：对 Romcom 支持的功能请求 ([#10005](https://github.com/unslothai/unsloth/issues/10005)) 表明社区对 ROCm 兼容性的兴趣正在上升。

---

### **4. 性能与优化**  
- 📈 **提示缓存效率低下**：由于 `ArraysCache` 布局不匹配，MLX 提示缓存未被 `Qwen3.8-27B` 重用 ([#10031](https://github.com/unslothai/unsloth/issues/10031))。  
- 💡 **上下文长度回归**：用户报告在 1.50 版本后上下文长度下降约 50%，尽管显存充足 ([#7877](https://github.com/unslothai/unsloth/issues/7877))。  
- ⏱️ **模型响应超时**：功能请求增加可配置超时机制，以应对推理过程中的 CPU/GPU 内存交换问题 ([#5756](https://github.com/unslothai/unsloth/issues/5756))。  
- 🔄 **量化开销过大**：预量化的 bnb-4bit 检查点在 Windows 上因 `quant_state=None` 导致形状错误而失败 ([#10017](https://github.com/unslothai/unsloth/issues/10017))。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 链接 | 状态 |
|--------|------|------|--------|
| 关键 | **Windows 安装程序无法替换正在运行的 `unsloth.exe`**，因文件锁定导致更新静默失败。 | [#7697](https://github.com/unslothai/unsloth/issues/7697) | 待处理 |
| 关键 | **并发数据库访问下发生 SQLite 互斥锁死锁**，导致 Studio 后端无限挂起。 | [#10022](https://github.com/unslothai/unsloth/issues/10022) | 待处理 |
| 高 | **在 Windows 上加载 LTX-2-GGUF 视频模型时，Unsloth Desktop 崩溃**（访问违规 `0xc0000005`）。 | [#9977](https://github.com/unslothai/unsloth/issues/9977) | 待处理 |
| 高 | **重新生成时重复用户消息 + 附件**，导致上下文与令牌数膨胀。 | [#9984](https://github.com/unslothai/unsloth/issues/9984) | 待处理 |
| 中 | **最近更新后，Ollama 模型从库存中消失**；错误的 `source` 标记引发模式崩溃。 | [#9986](https://github.com/unslothai/unsloth/issues/9986), [#10015](https://github.com/unslothai/unsloth/issues/10015) | 待处理 |
| 中 | **AppImage 端到端测试间歇性失败**，由模型下载流程中的竞争条件引起。 | [#10032](https://github.com/unslothai/unsloth/issues/10032) | 待处理 |

> *注：多个 PR 已着手解决根本原因（如 [#9988](https://github.com/unslothai/unsloth/pull/9988), [#10025](https://github.com/unslothai/unsloth/pull/10025)），但尚未合并。*

---

### **6. 对应用开发者的启示**  
- **若使用动态模型加载或高频率再生工作流，请避免在 Windows 上部署**——已知崩溃与安装程序锁定问题仍未解决。  
- **使用 Ollama 集成模型需谨慎**：当前集成脆弱，可能隐藏模型或因误标 `source` 字段导致前端崩溃。  
- **密切监控上下文长度设置**：近期回归问题可能导致有效上下文窗口无声缩减——请通过日志或显式配置覆盖验证。  
- **为多模态扩展做好准备**：视频模型支持尚处早期开发阶段——预计在 [#10013](https://github.com/unslothai/unsloth/issues/10013) 解决前仍存在破坏性变更。  
- **为硬件多样性做好规划**：若目标为 Intel XPU 或 AMD GPU，预期训练/推理路径不稳定；生产环境建议采用仅 CUDA 部署以保障可靠性。

> 👉 *建议：关键部署请锁定稳定版本，避免使用 `main` 分支，直至持续集成/持续部署稳定性问题解决。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*