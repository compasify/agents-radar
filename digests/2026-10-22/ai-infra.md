# AI 基础设施日报 2026-10-22

> 生成时间: 2026-10-22 01:16 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-10-22**

---

### **1. 生态概览**  
2026年第四季度，AI推理基础设施领域呈现出快速专业化与向高吞吐、低延迟、代理就绪部署融合的趋势。各项目正沿着架构方向日益分化：vLLM 和 SGLang 在分布式服务和内核级优化方面持续突破；llama.cpp 与 Unsloth 聚焦于边缘与本地执行，并进行硬件感知调优；Ollama 在多平台间整合开发者体验；而 LiteLLM 则演变为安全、高性能的网关层。近期频发的安全事件——尤其是恶意 `litellm==1.107.0` 包——凸显了开源AI工具链中供应链风险的加剧。与此同时，LiteLLM 的 Rust 迁移以及多个项目对 ROCm/AMD GPU 加速的支持，标志着战略重心正转向性能、可移植性与长期可持续性。

---

### **2. 活动对比**

| 项目       | 问题（开放） | PR（开放） | 最近24小时发布 | 破坏性变更 |
|---------------|---------------|------------|----------------------|------------------|
| **vLLM**      | 89            | 32         | 无                 | 无             |
| **SGLang**    | 124           | 45         | 无                 | 无             |
| **llama.cpp** | 67            | 29         | 4 (b11797–b11803)    | 无             |
| **Ollama**    | 156           | 58         | 1 (v0.40.8-rc0)      | 是（RC）         |
| **LiteLLM**   | 73            | 22         | 4 (v1.103.7–1.106.2) | 是（安全补丁） |
| **Unsloth**   | 101           | 38         | 无                 | 是（测试版回归） |

> ✅ *注*：SGLang 与 Ollama 在问题数量上领先，反映出其在生产规模调试中的活跃度。LiteLLM 的发布活动体现了紧急安全修复的需求。Unsloth 的稳定性问题则暴露了在真实世界代理工作负载下的压力测试挑战。

---

### **3. 模型支持竞赛**

| 新模型 / 架构     | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|------------------------------|------|--------|-----------|--------|---------|---------|
| **Flint (递归)**        | ❌   | ❌     | ✅ (b11803) | ✅ (v0.40.8-rc0) | ❌      | ❌      |
| **SenseNova U1**             | ❌   | ❌     | ✅ (b11799) | ❌      | ❌      | ❌      |
| **Qwen3.8-Flash-Next**       | ✅ (ROCm) | ✅ (ROCm) | ❌        | ❌      | ❌      | ❌      |
| **DeepSeek-V4-Flash**        | ✅ (ROCm) | ✅ (NPU, SM120) | ❌        | ❌      | ❌      | ❌      |
| **GLM-5.3-Flash**            | ❌   | ✅ (ROCm, NPU) | ❌        | ❌      | ❌      | ❌      |
| **Apple Foundation Models**  | ❌   | ❌     | ❌        | ✅ (applefm) | ❌      | ❌      |
| **MOSS-Image / Diffusion**   | ❌   | ❌     | ❌        | ❌      | ❌      | ✅ (GGUF) |

> 🏆 **胜者**：**Ollama** 在**面向开发者的模型可用性**上领先，现已原生支持 Flint 与 Apple Foundation Models。**SGLang** 与 **vLLM** 在**针对 AMD/Ascend/NVIDIA 的硬件优化**方面占据主导地位。**llama.cpp** 在**多模态与移动边缘支持**方面仍具最强实力。

---

### **4. 性能前沿**

| 优化重点          | vLLM                          | SGLang                         | llama.cpp                   | Ollama                     | LiteLLM                    | Unsloth                    |
|-------------------------------|-------------------------------|--------------------------------|-----------------------------|----------------------------|----------------------------|----------------------------|
| **KV缓存与卸载**        | ✅ `max_recompute_pending_tokens`, `SharedOffloadRegion` | ✅ HiCache, Mooncake 批处理 | ❌                           | ❌                         | ✅ 过期 JWKS 刷新       | ✅ CFG 批处理, FP8 保留 |
| **批处理与解耦**        | ✅ 预填充-解码分离（通过 FlashInfer） | ✅ PD 解耦, 跨请求批处理 | ❌                           | ✅ 并行请求（Qwen3） | ❌                         | ✅ 张量拆分（双GPU） |
| **量化**              | ✅ NVFP4, MXFP4, MoE LoRA 调优 | ✅ 块级 FP8, W8A8, DSpark 压缩 | ✅ Adreno X1, SYCL 上的 Q4_K/Q6_K | ✅ DFlash2, 块级 FP8      | ✅ 重排序 + 成本追踪   | ✅ FP8 保留（无 GEMM） |
| **分布式服务**       | ✅ 多节点, GB10/GB300 支持 | ✅ 多节点, GB300 OOM 风险 | ❌                           | ❌                         | ✅ 代理可扩展性        | ❌（分布式训练缺陷） |
| **内核级调优**       | ✅ Triton 融合, top-k 修复 | ✅ KPool Hadamard 融合, 行流式 | ✅ OpenCL IM2COL_3D, 融合 QSA 掩码 | ❌                         | ❌                         | ✅ 融合 FLUX RoPE, BF16 DiTs |

> 🔥 **前沿领导者**：  
> - **vLLM**：内核效率与 AMD 上的混合注意力。  
> - **SGLang**：高吞吐多节点解耦与 NPU/ROCm 优化。  
> - **Unsloth**：通过 FP8 保留与张量拆分实现实时扩散与内存高效推理。  
> - **LiteLLM**：借助 Rust 迁移，为亚毫秒级开销做好准备。

---

### **5. 层级定位**

| 项目       | 主要层级               | 核心差异化                                      |
|---------------|-----------------------------|----------------------------------------------------------|
| **vLLM**      | **推理引擎**        | 高吞吐、低延迟 GPU 内核；在 NVIDIA Blackwell 与 ROCm 上表现最佳。 |
| **SGLang**    | **推理引擎 + 网关** | 全流程代理管道支持；多节点与推测解码能力强劲。 |
| **llama.cpp** | **本地运行时 / 边缘推理** | 硬件无关，以移动端优先，轻量级 GGUF 执行。 |
| **Ollama**    | **开发者体验层** | 本地模型统一 CLI/API；友好的工具调用与 macOS 集成。 |
| **LiteLLM**   | **API 网关 / 编排器** | 安全、供应商无关代理；未来基于 Rust 的超低延迟路由。 |
| **Unsloth**   | **代理与多模态运行时** | 全栈代理 UI、扩散管线与多 GPU 张量拆分。 |

> 💡 *战略洞察*：该生态已不再单一化——开发者必须在**高性能推理引擎**（vLLM/SGLang）、**本地运行时专家**（llama.cpp）、**以代理为中心的平台**（Ollama/Unsloth）和**安全网关**（LiteLLM）之间做出选择。

---

### **6. 趋势信号**

#### 🔍 **从当前活动看新兴趋势**：
1. **AMD/ROCm 势头显现**：vLLM 与 SGLang 已为 Qwen3.8-Flash-Next 与 DeepSeek-V4-Flash 提供关键 ROCm 支持——表明 AMD 正成为高端推理中可替代 NVIDIA 的可行选项。
2. **代理为中心的设计**：Ollama 的 Flint 集成、Unsloth 的界面优化、SGLang 的 Mooncake 批处理，均反映出从批量 LLM 查询向**实时、交互式代理**的转变。
3. **规模化安全**：`litellm==1.107.0` 事件凸显**供应链完整性已成为首要关切**——预计图像签名（cosign）与审核实践将更广泛采用。
4. **Rust 迁移作为竞争优势**：LiteLLM 计划中的 Rust 重构旨在实现**亚毫秒级开销**，使其成为对延迟敏感应用（如流媒体、实时代理）的下一代网关。
5. **边缘与移动端推进**：llama.cpp 对 Adreno X1 与 Hexagon NPU 的支持，显示出在**设备端 AI**领域的强劲势头，尤其适用于移动端优先或隐私敏感的应用。

#### 🛠️ **应用开发者应关注事项**：
- **避免在 GB10 上使用 v0.30.0+ 版本的 Nemotron-3.5-Lightning NVFP4**，直到 vLLM 修复 16% 的性能下降问题。
- **在 #27833 修复前，不要使用 llama.cpp 中的 `dflash --split-mode`**。
- **若需规避 RC 不稳定，建议将 Ollama 固定在 `0.40.7`**；避免使用 Ollama Cloud Pro，因其失败率高达 95%。
- **关注 LiteLLM 的 Rust beta 注册**——早期访问可能为网关密集型应用带来 10 倍的延迟降低。
- **利用 Unsloth 的双 GPU 张量拆分**，实现 MoE/密集模型的高效部署。
- **在 CI 中使用 `cosign verify`** 以防止恶意依赖——这如今已成为不可妥协的要求。

> ✅ **最终建议**：根据工作负载选择技术栈——**vLLM/SGLang 用于大规模部署**，**llama.cpp 用于边缘场景**，**Ollama 用于开发者体验**，**LiteLLM 用于安全编排**，**Unsloth 用于多模态代理**。一劳永逸的推理时代已经结束。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

### **vLLM Digest — 2026-10-22**

---

#### **1. 今日重点**  
vLLM 项目持续快速拓展至下一代推理负载，针对 **Qwen3.8-Flash-Next 与 DeepSeek-V4-Flash** 的 ROCm/AMD GPU 优化取得关键进展，包括独立 UMBP 支持和融合内核。在 **GB10（DGX Spark）上，Nemotron-3.5-Lightning NVFP4 解码出现严重性能下降**（自 v0.29.0 起约慢 16%），同时新问题凸显了 **在 RDNA GPU 上运行混合 Mamba 模型的挑战** 以及 **超过 `indexer_budget`（2048 tokens）长上下文提示处理的困难**。

---

#### **2. 发布与破坏性变更**  
*过去 24 小时内未发布新版本或破坏性变更。*  
但正在进行的 PR 显示即将发生调整：  
- `--enable-responses-store` 正从环境变量迁移至 CLI 标志 ([#57060](https://github.com/vllm-project/vllm/pull/57060)) — 未来部署需相应更新启动脚本。  
- `VLLM_ENABLE_RESPONSES_API_STORE` 环境变量将被弃用，以新标志取代。

---

#### **3. 新模型与硬件支持**  
- ✅ **ROCm 支持**：为 `amd/Muse-Spark-Open-816B-A42B-Quark-MXFP4` 添加 ROCm 特定支持 ([#62622](https://github.com/vllm-project/vllm/pull/62622))。  
- ✅ **DeepSeek-V4-Flash**：在 ROCm 上新增 UMBP 独立模式支持 ([#63002](https://github.com/vllm-project/vllm/pull/63002))，实现大模型高效卸载策略。  
- ✅ **Qwen3.8-Flash-Next**：AMD 团队正在追踪 gfx950 / MI355X 性能优化 ([#59575](https://github.com/vllm-project/vllm/issues/59575))，计划对 MXFP4 MoE 内核进行调优。  
- ⚠️ **SM8x（Ampere）支持待定**：由于缺少 SM8x 后端支持，DeepSeek-V4-Flash 仍无法在 A100/A800/RTX 30xx 上运行 ([#50576](https://github.com/vllm-project/vllm/issues/50576))。

---

#### **4. 性能与优化**  
- 🔥 **NVFP4 vs FP8 性能回归**：FlashInfer NVFP4 SM120 上的因果预填充速度比 FP8 **慢 1.7–1.8 倍**（每 48 次调用 145.8ms 对比约 85ms）——对低延迟场景构成严重关切 ([#50416](https://github.com/vllm-project/vllm/issues/50416))。  
- 📈 **ROCm 内核优化**：针对 Qwen3-Next/Qwen3.5 的融合 QK-norm+RoPE+gate Triton 内核已在 ROCm 上启用 ([#51406](https://github.com/vllm-project/vllm/pull/51406))，降低内核启动开销。  
- ⏱️ **Top-K 内核瓶颈**：单体 Triton top-k 内核对枢轴阈值估算不准，导致 **6–10% 行出现异常收集遗漏** — 影响高风险生成任务的准确性 ([#61998](https://github.com/vllm-project/vllm/issues/61998))。  
- 💾 **KV 卸载效率提升**：PR [#57959](https://github.com/vllm-project/vllm/pull/57959) 引入 `max_recompute_pending_tokens`，避免在等待 CPU 卸载期间阻塞短请求。

---

#### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 影响 | 修复状态 |
|--------|------|-------|-----------|
| 🔴 高 | **自 v0.29.0 起，Nemotron-3.5-Lightning NVFP4 在 DGX Spark（GB10）上解码速度下降约 16%** | 生产级 LLM 服务中延迟激增 | ❌ 无修复；v0.30.0 与 nightly 版本不受影响 |
| 🔴 高 | **当提示内容 > 2048 tokens 时，Qwen3.8-Flash-Next 提示内容不可见**（受 indexer_budget 限制） | 长上下文提示被静默截断 | ❌ 已报告于 [#62776](https://github.com/vllm-project/vllm/issues/62776)；暂无 PR |
| 🟡 中 | **混合 Mamba 模型在 RDNA 上回退至 Triton 分页注意力，导致长上下文解码崩溃** | 无法在 AMD 平台上高效服务混合模型 | ✅ 上游已有修复 (#45916)；尚未合并 |
| 🟡 中 | **非 Blackwell ROCm 上使用 fp32 SSM 缓存时，GDN 解码退化为重复标记** | 长序列后模型崩溃 | ❌ 未解决；影响 Qwen3-Next/GDN 模型 ([#54308](https://github.com/vllm-project/vllm/issues/54308)) |

---

#### **6. 对应用开发者的影响**  
- **在 Blackwell（SM120）上避免使用 NVFP4**，直到 #50416 修复完成 — 低延迟应用可考虑改用 FP8 或 INT4 量化。  
- **长上下文应用（>2000 标记）** 应监控 `indexer_budget` 行为 — 当前默认值可能静默截断输入。谨慎使用 `--indexer-budget` 覆盖。  
- **多节点或分离式部署** 必须验证跨主机 `SharedOffloadRegion` 行为 — 多节点挂起可能发生 ([#54415](https://github.com/vllm-project/vllm/issues/54415))。  
- **ROCm 用户**：预期 Qwen3.8-Flash-Next 与 Muse Spark Open 性能提升，但需测试 MoE 与混合注意力的边缘情况。  
- **结构化输出 + 规划解码** 工作流存在输出分布不一致风险 — 请关注 [#62818](https://github.com/vllm-project/vllm/issues/62818) 以获取稳定进展。

> *敬请关注 v0.32.1rc1 及即将到来的 ROCm 补丁。请密切关注 [main 分支](https://github.com/vllm-project/vllm) 中与 MoE LoRA、KV 卸载及混合模型支持相关的修复。*

---  
*数据来源：[vllm-project/vllm GitHub](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 消息简报 – 2026-10-22**

---

### **1. 今日重点**  
SGLang 生态系统持续深化对多节点、高吞吐推理的支持，关键进展包括 **Prefill-Decode (PD) 分离架构**、**HiCache 集成** 以及 **多 GPU/加速器可扩展性**。针对 CUDA 核心崩溃（#26340）、CI 测试不稳定（#42752）和 GPU 内存泄漏等关键稳定性问题正在积极追踪，同时新提交的 PR 正在推动 **DeepSeek-V4.1**、**GLM-5.3-Flash** 及 **AMD ROCm** 平台上的性能边界。

---

### **2. 发布与破坏性变更**  
过去 24 小时内无报告。未发布新版本或破坏性 API/配置变更。

---

### **3. 新模型与硬件支持**  
- ✅ **AMD ROCm (gfx950 / MI355X)**：为 **Qwen3.8-Flash-Next**（`#44304`）和 **GLM-5.3-Flash**（`#44661`, `#44659`）启动性能优化跟踪。  
- ✅ **NVIDIA Blackwell (SM90)**：通过 ModelOpt NVFP4 检查点引入 Block-FP8 密集层可选支持（`#45694`）。  
- ✅ **Ascend NPU**：为 **DeepSeek-V4** 启用 DSpark 紧凑模式（`#38440`），降低推测解码开销。  
- ✅ **CPU (Xeon)**：新增支持 CPU 推理的 W8A8 block-FP8 量化（`#41563`）。  
- ✅ **扩散模型**：NPU 上现已支持在线 W8A8 INT8 量化（`#44738`）。  

> 🔗 [Qwen3.8-Flash-Next ROCm 优化](https://github.com/sgl-project/sglang/issues/44304) | [GLM-5.3-Flash ROCm 内核](https://github.com/sgl-project/sglang/pull/44661)

---

### **4. 性能与优化**  
- **DeepSeek-V4.1 (NPU)**：Mega-mHC 和 `wo_a` einsum 现在直接写入 MXFP8，消除冗余的 FP8 转换内核（`#45632`）。  
- **GLM-5.3-Flash (ROCm)**：KPool Hadamard 与 FP8 量化融合，减少内核调用；行流式 KDA 打包解码提升带宽利用率（`#44661`, `#44659`）。  
- **Kimi-K3 (AMD)**：查询-潜在 KV 缓存写入与 MLA 解码路径融合，降低延迟（`#43127`）。  
- **PD 分离**：引入跨请求 Mooncake KV 批次处理，减少节点间通信（`#43995`）。  
- **H20 (NVIDIA)**：现提供针对 32x32 块的 W8A8 block-FP8 GEMM 配置调优（`#41301`）。  

> 📈 *预期收益*：内核调用开销降低 10–25%，并发负载下吞吐量提升，尤其在长上下文及代理类工作负载中表现显著。

---

### **5. 稳定性与回归问题**  
今日问题列表以关键稳定性问题为主：  
- ⚠️ **CUDA 核心崩溃追踪**（`#26340`，350 条评论）：由 `pr-test.yml` 自动收集的崩溃日志；影响多个硬件配置。*尚未有修复 PR*。  
- ⚠️ **GLM-5.3-Flash on SM120**：在 CUDA 图捕获期间（混合扩展重塑）使用 `fa4` 注意力后端会崩溃；仅 `triton` 可用（`#42012`）。  
- ⚠️ **GB300 启动 OOM**：32 个分词器工作线程 + 自动选择 `cuda_vmm` 传输导致在任何请求前即发生内存溢出（`#45345`）。  
- ⚠️ **DeepSeek-V4 内存泄漏**：当 `tool_choice="none"` 时原始 DSML 泄露（`#35736`）。  
- ⚠️ **FP8 块量化检查点**：在 SM86 上使用重叠调度器时出现间歇性错误 token（`#45000`）。  
- ⚠️ **HiCache 卡死**：PP8 + HiCache 缓存模式因 PP 同步排水死锁而卡住（`#45357`）。  

> 🔍 *注意*：上述多项问题已成为大规模生产部署的紧急阻塞项。

---

### **6. 对应用开发者的启示**  
- 在 **SM120 GPU** 上，除非 `#42012` 修复，否则请避免使用 `fa4` 注意力后端——改用 `triton` 后端。  
- 若在 **多节点 GB300** 上部署，请减少 `--tokenizer-worker-num` 或显式禁用 `cuda_vmm` 传输以防止启动阶段 OOM（`#45345`）。  
- 对于 **代理类应用**，启用 **跨请求 Mooncake KV 批次处理**（`#43995`）以提升跨节点吞吐量。  
- 使用 **block-FP8 量化需谨慎**：在 SM86 上，避免与 FP8 Marlin 检查点配合使用 `overlap_scheduler`（`#45000`）。  
- 合并 PR 时需关注 **CI 不稳定问题**（`#42752`）——即使干净分支也可能出现间歇性测试失败。  
- 考虑在 Ascend NPU 上启用 **DSpark 紧凑模式**，以加快工具型代理的推测解码速度（`#38440`）。  

> 💡 *实用提示*：对于长上下文模型（如 DeepSeek-V4.1、Kimi-K3），请确认部署使用最新 `v0.5.22` 镜像，并应用相关优化（如 `--enable-dspark`、`--max-queued-requests` 调优）。

---  
*本简报基于 GitHub 数据生成：sgl-project/sglang (2026-10-22)*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# **llama.cpp 摘要 – 2026-10-22**

---

### **1. 今日亮点**  
最新发布周期带来了显著的模型扩展，新增支持 **Flint (FlintForCausalLM)** 与 **SenseNova U1**，进一步强化对新兴多语言及多模态大模型的支持。Jinja 模板、OpenCL 内核以及推测解码稳定性的关键修复，提升了在多种推理场景下的可靠性。Adreno X1 设备上 Q4/Q6 GEMM 内核的性能优化，表明项目对移动端边缘部署的关注持续增强。

---

### **2. 发布与破坏性变更**  
- **`b11803`**：通过 `FlintForCausalLM` 增加 Flint 模型支持，包含 HF 到 GGUF 转换及滑动/完整注意力处理功能 ([PR #30928](https://github.com/ggml-org/llama.cpp/pull/30928))。  
- **`b11800`**：引入新的融合 `QSA mask` 操作，提升注意力层评分效率；支持 `glm5.3-next` ([PR #30640](https://github.com/ggml-org/llama.cpp/pull/30640))。  
- **`b11799`**：通过 SYCL 后端启用 `q8 fast dequant`，降低内存带宽压力 ([PR #30775](https://github.com/ggml-org/llama.cpp/pull/30775))。  
- **`b11797`**：为 OpenCL 后端添加 `IM2COL_3D` 支持，以应对高级视觉变换器工作负载 ([PR #30895](https://github.com/ggml-org/llama.cpp/pull/30895))。

> ⚠️ 今日未报告任何破坏性 API 变更。所有更新均为新增功能或性能优化。

---

### **3. 新模型与硬件支持**  
- ✅ **新增模型**：  
  - **Flint** (`FlintForCausalLM`) – 具备自适应专家扩展能力的多语言因果语言模型 ([PR #30928](https://github.com/ggml-org/llama.cpp/pull/30928))。  
  - **SenseNova U1** – 支持图像到文本及多模态输入的密集文本生成分支 ([PR #28919](https://github.com/ggml-org/llama.cpp/pull/28919))。  

- ✅ **硬件/后端增强**：  
  - **Adreno X1 (高通)**：通过 OpenCL 添加了 `Q4_K`、`Q6_K` 和 `Q4_0` GEMM 二进制内核优化 ([PRs #30947–#30949](https://github.com/ggml-org/llama.cpp/pulls?query=author%3Ashaofeiqi+is%3Aopen))。  
  - **Hexagon NPU**：新增 `DSV4_HC_PRE` 与 `DSV4_HC_POST` 操作，实现高效张量处理 ([PR #30953](https://github.com/ggml-org/llama.cpp/pull/30953))。  
  - **Ascend NPU**：通过在 CANN 后端补全缺失的 `const` 限定符，提升一致性 ([PR #30933](https://github.com/ggml-org/llama.cpp/pull/30933))。  

- ✅ **量化支持**：`Q4_K`、`Q6_K` 与 `Q8_0` 量化现已在 Adreno 与 OpenCL 后端完成优化。

---

### **4. 性能与优化**  
- **Adreno X1 GPU**：新二进制内核使 `Q4_K`、`Q6_K` 与 `Q4_0` 推理延迟降低高达 **~25%**（内部测试数据）。  
- **SYCL 后端**：`q8 fast dequant` 在解码阶段减少约 **30%** 的内存带宽使用 ([PR #30775](https://github.com/ggml-org/llama.cpp/pull/30775))。  
- **OpenCL**：`IM2COL_3D` 支持使基于 ViT 的模型（如 MobileVLM、GLMV-EDGE）实现高效的卷积注意力。  
- **内存优化**：通过重打包调优，大型嵌入模型加载时峰值内存占用显著降低 ([PR #27483](https://github.com/ggml-org/llama.cpp/pull/27483))。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 修复 PR |
|--------|------|-------|-------|
| 高 | `dflash` 推测解码在启用 `--split-mode` 时因共享 `output.weight` 缓冲区失败 ([#27833](https://github.com/ggml-org/llama.cpp/issues/27833)) | 开放 | ❌ |
| 高 | Gemma 4 + `--mmproj` + MTP 启动崩溃（`GGML_ASSERT(ubatch->embd_state)`）([#30698](https://github.com/ggml-org/llama.cpp/issues/30698)) | 开放 | ❌ |
| 中 | Jinja 解析器在 `namespace.items` 与字典方法冲突时抛出错误 ([#30941](https://github.com/ggml-org/llama.cpp/issues/30941)) | 已修复 | ✅ [PR #30941](https://github.com/ggml-org/llama.cpp/pull/30941) |
| 中 | `llama_detokenize` 移除标点前空格（例如 `x != y` → `x!= y`）([#30905](https://github.com/ggml-org/llama.cpp/issues/30905)) | 开放 | ❌ |
| 低 | Vulkan 在 PowerVR C 系列（Pixel 11 Pro）固件下崩溃 ([#28214](https://github.com/ggml-org/llama.cpp/issues/28214)) | 开放 | ❌ |

> 🔍 *备注*：多个回归问题源于近期推测解码与 MTP 功能变更——建议生产环境中谨慎使用 DFlash/MTP 特性。

---

### **6. 对应用开发者的意义**  
- **多模态应用** 现可借助 **Flint** 与 **SenseNova U1** 实现完整 GGUF 支持，包括图像输入与路由逻辑。使用 `mtmd_tokenize_from_parts` 安全标记输入来源 ([#28249](https://github.com/ggml-org/llama.cpp/issues/28249))。  
- **移动端优先部署** 受益于新 Adreno X1 内核——预计在骁龙设备上获得更快的分词生成速度。  
- **避免不稳定功能**：在 [#27833](https://github.com/ggml-org/llama.cpp/issues/27833) 修复前，不要在 `dflash` 上启用 `--mtp` 或 `--split-mode`。  
- **安全性**：`/tools` 端点现在拒绝非 JSON 与跨域请求 ([PR #29834](https://github.com/ggml-org/llama.cpp/pull/29834))；请确保工具链遵守此规则。  
- **分词处理**：若依赖精确空格（如代码生成），请注意 `llama_detokenize` 存在缺陷 ([#30905](https://github.com/ggml-org/llama.cpp/issues/30905)) —— 可考虑使用 `clean_spaces` GGUF 键作为临时解决方案 ([PR #30940](https://github.com/ggml-org/llama.cpp/pull/30940))。

> 📌 **建议**：为保障稳定性，建议锁定至 `b11799` 及以上版本；若使用 MTP/DFlash 功能，请暂避 `b11800`，待回归修复落地后再行启用。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-22**

---

### **1. 今日亮点**  
Ollama 生态系统正加速推进高级代理与本地优先的 AI 工作流，今日正式推出 **Flint** —— Recursive 公司的高性能代码模型现已原生集成至 Ollama。与此同时，一系列关键稳定性修复针对工具调用（尤其是 Qwen3 系列）和跨模型上下文处理中的长期问题展开。新提交的 PR 还显示出对 Apple Foundation Models 与 MLX 并发支持的日益增长的关注，凸显 Ollama 作为通用推理引擎的角色持续扩展。

---

### **2. 发布与破坏性变更**  
- **v0.40.8-rc0** 今日发布（`curl -fsSL https://ollama.com/install.sh | OLLAMA_VERSION=0.40.8-rc0 sh`）——包含 Flint 集成的基础修复及持续的稳定性改进。  
- **注意**：此版本候选用于早期测试；尚未发布正式版 v0.40.8。使用 `0.40.7` 或更早版本的用户在升级时应谨慎，否则可能遭遇回归问题。  
  🔗 [GitHub Release v0.40.8-rc0](https://github.com/ollama/ollama/releases/tag/v0.40.8-rc0)

---

### **3. 新模型与硬件支持**  
- ✅ **Flint**（Recursive 的代码大模型）现已可通过 `ollama pull flint` 获取。专为代理工作负载优化，具备强大的工具调用能力。  
  🔗 [Flint 在 Ollama 库中](https://ollama.com/library/flint)  
- ✅ **Apple Foundation Models（apple-foundation-model）** 已通过 `applefm` 运行器加入 macOS 支持（PR #19184）。可通过 Ollama 的 API 表面原生执行 Apple 的设备端大模型。  
  🔗 [PR #19184: applefm 运行器](https://github.com/ollama/ollama/pull/19184)  
- ✅ **MLX 后端增强**：  
  - 通过 `OLLAMA_NUM_PARALLEL` 实现并发生成支持（PR #19197）  
  - 支持 DFlash2 块草稿（PR #19149），提升推测解码性能  
  - 支持 D3 决策模型（PR #19196）  

---

### **4. 性能与优化**  
- **MLX**：  
  - 并发支持现已允许单个模型实例处理多个请求，在负载下降低首个令牌延迟。默认仍为单请求模式；内存开销随并行度线性增长。  
    🔗 [PR #19197](https://github.com/ollama/ollama/pull/19197)  
  - DFlash2 集成通过在草稿块间动态选择候选，提升推测解码效率。  
    🔗 [PR #19149](https://github.com/ollama/ollama/pull/19149)  
- **Qwen3 系列**：  
  - 在上游 llama.cpp 的崩溃修复后（PR #17144），`qwen35` 与 `qwen35moe` 现已启用并行请求支持，此前强制设置为 `numParallel=1`。  
    🔗 [PR #17144](https://github.com/ollama/ollama/pull/17144)  
- **API 层级优化**：  
  - `max_completion_tokens` 现在在聊天补全中被正确尊重（PR #19168），防止生成超出客户端预算的无限输出。  
    🔗 [PR #19168](https://github.com/ollama/ollama/pull/19168)  

---

### **5. 稳定性与回归问题**  
- ⚠️ **严重：Ollama Cloud Pro（95% 失败率）** —— 问题 #15453 报告所有云托管模型普遍服务降级。目前尚无修复方案；建议用户避免在生产环境使用。  
  🔗 [问题 #15453](https://github.com/ollama/ollama/issues/15453)  
- ⚠️ **Flint 在 500 错误时崩溃** —— 新模型 `flint` 在启动时触发 `Error: 500 Internal Server Error`（问题 #19186）。可能源于运行时或 CUDA 兼容性问题。  
  🔗 [问题 #19186](https://github.com/ollama/ollama/issues/19186)  
- 🛠️ **工具调用正确性缺陷**：  
  - Flint 工具调用中的整数参数被重新发出为浮点字符串（`30000` → `"30000.0"`）——导致模式验证失败（问题 #19191）。已由 PR #19195 修复。  
    🔗 [问题 #19191](https://github.com/ollama/ollama/issues/19191) | [PR #19195](https://github.com/ollama/ollama/pull/19195)  
  - Qwen3 模型在截断的工具调用 JSON 时返回 `500` 错误（问题 #14570）；已在合并的 PR #19195 中修复。  
  - 即使 `eval_count > 0`，仍静默丢弃无效函数调用（问题 #19187）——可能影响代理可靠性。  
    🔗 [问题 #19187](https://github.com/ollama/ollama/issues/19187)  
- ⚠️ **Windows 桌面应用启动失败**：版本 0.33.1 静默无法启动服务（问题 #18061）。手动执行 `ollama serve` 可正常运行。  
  🔗 [问题 #18061](https://github.com/ollama/ollama/issues/18061)  

---

### **6. 对应用开发者的意义**  
- **构建健壮的代理**：使用 `flint` 构建具有可靠工具调用能力的代码代理——但需验证整数参数类型（#19195 已修复）。在问题 #19137 解决前，避免在 UI 中使用 `keep_context` 与模型切换。  
- **优化上下文使用**：使用 `openai` 与 `launch opencode` 时，确保通过 `model.ContextLength` 与实际 `num_ctx` 对齐上下文窗口（问题 #19172）。可使用 PR #19193 修复配置不一致。  
- **妥善处理流式错误**：来自 `/v1/messages` 的流式响应可能丢失后续分块错误（问题 #19177）。使用 PR #19188 可确保失败信息尽早暴露。  
- **利用新后端优势**：对于 Mac 开发者，`apple-foundation-model` 提供低延迟、设备端推理能力。MLX 用户可通过 DFlash2 获得并发与推测解码能力。  
- **现阶段避免使用 Ollama Cloud Pro**——高失败率（问题 #15453）表明其在生产级部署中仍不稳定。  

> 💡 **实用技巧**：若未测试候选版本，建议将 Ollama 版本锁定在 `0.40.7`。密切关注 PR #19195 与 #19188，以快速获取工具调用与流式问题的修复。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 消息简报 – 2026-10-22**

---

### **1. 今日重点**  
一起涉及恶意 `litellm==1.107.0` 包（PyPI 和 Docker）的严重安全事件已迅速处理完毕：该版本已从所有公开注册表中撤回，相关 Docker 镜像也被撤销。与此同时，备受期待的 **Rust 迁移计划**持续推进，社区关注度在议题 #31263 达到顶峰——目前已成为仓库中排名第一的讨论话题，BerriAI 正准备发布一款高性能、延迟低于 1ms 的 AI 网关。

---

### **2. 版本发布与破坏性变更**  
- **v1.106.2, v1.105.3, v1.104.5, v1.103.7**：均在过去的 24 小时内发布，未报告破坏性变更。  
- **关键安全修复**：由于确认存在漏洞，`v1.107.0` 已被 **完全移除**自 PyPI 与 Docker 注册表（`ghcr.io/berriai/litellm`, `docker.io/litellm`）。恶意镜像包含凭据窃取器（`cook.pth`）和远程代码执行加载器。  
  🔗 [议题 #47826](https://github.com/BerriAI/litellm/issues/47826) | 🔗 [安全公告](https://docs.litellm.ai/blog/litellm-rust-launch)

> ✅ **必须操作**：立即升级至 `v1.106.2+`，并使用 cosign 验证镜像签名。  
> 🔐 **验证镜像签名**：所有 LiteLLM Docker 镜像均使用来自提交 [`0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0) 的密钥通过 cosign 签名。

---

### **3. 新模型与硬件支持**  
- **新增支持提供商**：通过 PR #46744，Engy（https://engy.ai/）现已作为 OpenAI 兼容提供商接入。  
  - API 基地址：`https://api.engy.ai/v1`  
  - 认证方式：`ENGY_API_KEY`（可选 `ENGY_API_BASE`）  
  - 支持模型：共 8 个，包括聊天模型及兼容 Anthropic 的消息格式。  
  🔗 [PR #46744](https://github.com/BerriAI/litellm/pull/46744)
- **新增重排序提供商**：OpenRouter 现可通过 PR #47885 支持重排序模型（如 `cohere/rerank-v3.5`）。  
  🔗 [PR #47885](https://github.com/BerriAI/litellm/pull/47885)

---

### **4. 性能与优化**  
- **Rust 迁移计划（进行中）**：  
  - 目标：实现请求路由与代理的 **延迟低于 1ms**。  
  - 方向：用 Rust 替代基于 Python 的核心逻辑，以实现最高吞吐量与最低延迟。  
  - 社区测试版报名：[点击此处注册](https://docs.google.com/forms/d/e/1FAIpQLSecWdOjkzjEson2UiZpD...)  
  🔗 [议题 #31263](https://github.com/BerriAI/litellm/issues/31263) | 🔗 [博客文章](https://docs.litellm.ai/blog/litellm-rust-launch)

- **代理性能改进**：  
  - PR #47846 引入了 **在后台刷新期间继续提供过期 JWKS 密钥** 的机制，避免因慢速 IdP 获取导致 JWT 验证阻塞。  
    → 消除了因 DNS/连接超时导致的数秒级工作线程阻塞问题。  
  🔗 [PR #47846](https://github.com/BerriAI/litellm/pull/47846)

---

### **5. 稳定性与回归问题**  
- **高严重性**：  
  - **缺陷 #47826**：恶意 `v1.107.0` 包污染了 PyPI 与 Docker 镜像。**已解决**：所有受影响镜像均已撤销。  
  - **缺陷 #17475**：LiteLLM 代理不再向非管理员用户展示模型列表 —— **已在最新版本中修复**。  
    🔗 [议题 #17475](https://github.com/BerriAI/litellm/issues/17475)

- **中等严重性**：  
  - **缺陷 #47675**：当 `custom_llm_provider=anthropic` 且定价配置位于其他提供商时，`response_cost` 为 `null`。  
    🔗 [议题 #47675](https://github.com/BerriAI/litellm/issues/47675)  
  - **缺陷 #39749**：部分返回 `id:null` 的提供商（如 Databricks-Gemini）会静默丢弃消费日志，导致主键冲突。  
    🔗 [议题 #39749](https://github.com/BerriAI/litellm/issues/39749)  
  - **缺陷 #46664**：BYOK/静态认证 MCP `tools/list` 拒绝每请求携带的 `x-mcp-{alias}-authorization` 头信息。  
    🔗 [议题 #46664](https://github.com/BerriAI/litellm/issues/46664)

---

### **6. 对应用开发者的意义**  
- **安全优先**：务必避免使用 `v1.107.0`。立即升级至 `v1.106.2+`，并通过 cosign 验证 Docker 镜像签名。  
- **性能敏感型应用**：关注 **Rust 迁移**（议题 #31263）。早期访问将支持构建超低延迟推理网关——非常适合实时智能体与流式应用。  
- **模型多样性**：充分利用新接入的提供商如 **Engy** 以及 **OpenRouter 重排序模型**，提升部署灵活性。  
- **成本准确性**：配置 `custom_llm_provider` 时需谨慎——若各提供商间定价未对齐，可能导致成本追踪失败。  
- **代理稳定性**：使用 `v1.106.2+` 可避免用户可见的模型列表缺陷及消费日志问题。  

> 📌 **实用提示**：在 CI 流水线中启用 `cosign verify`，防止供应链攻击。  
> 🔗 [Cosign 文档](https://docs.sigstore.dev/cosign/overview/)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-10-22**

---

### **1. 今日亮点**  
Unsloth 持续推进多模态与代理中心化基础设施建设，重点 PR 包括提升长上下文对话稳定性（PR #14574）、通过 fp8 保留优化扩散管道（#14549）和 CFG 批处理（#14564），以及改进决策模型的 UI/UX（#14555, #14580）。内存泄漏、跨用户模型同步及梯度检查点失败等关键问题仍处于活跃状态，表明系统正在真实负载下持续承受压力测试。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新发布。*  
然而，在 `v0.1.909-beta`（2026.10.7）中引入了一个严重回归：  
- **块编译破坏分布式训练**：2026.10.6 引入的 per-decoder-layer `block_compile` 功能在非可重入梯度检查点下不满足重计算安全，导致分布式运行中反向传播时出现 `CheckpointError`。  
  🔗 [Issue #14063](https://github.com/unslothai/unsloth/issues/14063) | ✅ 临时解决方案：设置 `UNSLOTH_BLOCK_COMPILE=0`

---

### **3. 新模型与硬件支持**  
- **MOSS-Image 已加入 Studio**，作为内置端口并通过 stable-diffusion.cpp 支持 GGUF。  
  🔗 [PR #14552](https://github.com/unslothai/unsloth/pull/14552)  
- **Z-Image 引导分支** 现已支持双 GPU 执行，通过 CFG 并行路由实现。  
  🔗 [PR #14564](https://github.com/unslothai/unsloth/pull/14564)  
- **MLX 后端优化**：`unsloth doctor` 现可检测 Apple Silicon MLX 可用性（修复了误报 CUDA 失败的问题）。  
  🔗 [PR #14457](https://github.com/unslothai/unsloth/pull/14457)

---

### **4. 性能与优化**  
- **SDXL 提示词加权与 CLIP 跳过** 功能现已在 Studio 中支持（采用 AUTOMATIC1111 语法）。  
  🔗 [PR #14562](https://github.com/unslothai/unsloth/pull/14562)  
- **GIF 导出速度提升约 3 倍**，通过使用单个全局调色板替代逐帧量化实现。  
  🔗 [PR #14581](https://github.com/unslothai/unsloth/pull/14581)  
- **FP8 扩散权重在主机内存中保留**：当不存在 FP8 GEMM 运行时（如 Ampere/T4），避免重复占用内存，防止双倍 RAM 使用。  
  🔗 [PR #14549](https://github.com/unslothai/unsloth/pull/14549)  
- **默认优化已启用**：测量安全特性（融合 FLUX RoPE、BF16 小 DiT、Blackwell 原生注意力）现为默认开启。  
  🔗 [PR #14566](https://github.com/unslothai/unsloth/pull/14566)  
- **张量在空闲 GPU 对间拆分**：适用于密集模型与 MTP MoE 模型，可实现双 GPU 系统的完全利用率。  
  🔗 [PR #14446](https://github.com/unslothai/unsloth/pull/14446)

---

### **5. 稳定性与回归问题**  
- **长上下文 CPU 归档中的严重崩溃**：工具密集型长对话会因基于 CPU 的嵌入生成而卡顿数分钟，且停止按钮无效。  
  🔗 [Issue #14519](https://github.com/unslothai/unsloth/issues/14519)  
- **少数轮次后模型核心转储**：用户报告推理后模型无响应并发生核心转储，尤其在高 KV 缓存使用场景下。  
  🔗 [Issue #14411](https://github.com/unslothai/unsloth/issues/14411)  
- **Windows 上存在内存泄漏**：每次 unsloth 会话后，驱动器 C 会损失 200–400 MB 内存，且无清理机制。  
  🔗 [Issue #14487](https://github.com/unslothai/unsloth/issues/14487)  
- **预提交扫描误报**：`scripts/enforce_kwargs_spacing.py` 因优化不佳导致 CI 负载过高。  
  🔗 [Issue #14174](https://github.com/unslothai/unsloth/issues/14174)  
- **多个局域网账户间模型同步失效**：共享同一本地服务器的用户间加载的模型状态无法正确传播。  
  🔗 [Issue #12365](https://github.com/unslothai/unsloth/issues/12365)

---

### **6. 对应用开发者的启示**  
- **在分布式训练环境中避免使用 `UNSLOTH_BLOCK_COMPILE=1`**，直到修复上线——否则将导致训练任务中断。  
- **为长上下文设计备用方案**：当前基于 CPU 的归档引擎可能导致推理阻塞数分钟；建议考虑卸载或缓冲策略。  
- **充分利用新 CLI 与 URL 路由功能**：可通过 `/?q=<text>` 从外部工具程序化启动新对话。  
  🔗 [PR #14570](https://github.com/unslothai/unsloth/pull/14570)  
- **针对多 GPU 张量拆分进行优化**：使用 `--split-mode tensor` 可充分释放双 GPU 系统性能，尤其适用于大型 MoE 或密集模型。  
- **关注内存泄漏与模型损坏风险**：若在共享或本地环境中运行 unsloth，需监控残留内存与不一致的模型状态。  

> 🛠️ *实用提示*：若使用较旧硬件，可设置 `UNSLOTH_DIFFUSION_COMFY_FP8=0` 以避免不必要的反量化操作。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*