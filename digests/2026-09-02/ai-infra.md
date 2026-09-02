# AI 基础设施日报 2026-09-02

> 生成时间: 2026-09-02 00:29 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-09-02**

---

### **1. 生态概览**  
2026年第三季度的AI推理与服务生态呈现出高性能引擎、本地运行时优化与以智能体为中心的基础设施之间快速融合的趋势。各项目正日益聚焦于**多模态支持**、**推测性解码稳定性**和**分布式可扩展性**——其中，vLLM和SGLang在大规模生产级推理领域处于领先地位。与此同时，llama.cpp和Ollama凭借对Apple Silicon及GGUF的深度集成，在边缘计算与开发者优先场景中占据主导地位。LiteLLM和Unsloth则反映出对**可观测性**、**安全性**和**智能体工作流保真度**的日益重视，标志着该领域已超越单纯的吞吐量比拼，迈向成熟阶段。

---

### **2. 活动对比**

| 项目       | 开放问题（严重 + 高） | 最近24小时合并的PR数 | 发布状态        |
|---------------|-------------------------------|--------------------------|------------------------|
| **vLLM**      | 8 (5 严重)                | 6                        | 无                   |
| **SGLang**    | 5 (2 严重)                | 7                        | 无                   |
| **llama.cpp** | 4 (4 严重)                | 5                        | 无新版本发布         |
| **Ollama**    | 5 (3 严重)                | 5                        | v0.33.3-rc0 (RC)       |
| **LiteLLM**   | 6 (3 严重)                | 6                        | v1.101.0-dev.1 & v1.99.0 |
| **Unsloth**   | 5 (2 高)                    | 4                        | 无                   |

> ✅ **洞察**：vLLM和SGLang在开发活跃度上领先；Ollama发布RC版本，预示着即将进入生产部署阶段。LiteLLM保持稳定节奏，且近期发布聚焦安全。

---

### **3. 模型支持竞赛**

| 新模型 / 架构               | 支持的项目              | 显著特性 |
|----------------------------------|--------------------------|------------------|
| **Qwen3-VL / Qwen3.8 Flash Next** | vLLM, Ollama, llama.cpp | 完整多模态支持，优化的BF16/NVFP4路径 |
| **Kimi K2.5 / GLM-V / GLM-5.3-Flash** | vLLM, llama.cpp | Tower/Connector的LoRA支持，混合注意力机制 |
| **Idefics3 (视觉-语言)**   | Unsloth (功能请求) | 待实现原生微调流水线 |
| **Qwen4exp (稀疏注意力)**  | llama.cpp                | 基于gather的解码，直接访问PLE表 |
| **Mistral OCR / TTS模型**     | LiteLLM                  | Azure托管OCR，通过API接入Voxtral TTS |
| **GraniteForCausalLM (IBM)**     | Ollama (实验性)    | 支持MLX后端 |
| **Doubao嵌入式视觉**      | LiteLLM (功能请求) | 缺失实现 |

> 🏆 **领先者**：**vLLM** 和 **llama.cpp** 在多模型覆盖方面领先，尤其在前沿的Qwen系列及稀疏架构上表现突出。**Ollama** 在新模型的用户友好性（如视频输入）方面领先，而 **LiteLLM** 则在模型无关路由方面占据主导。

---

### **4. 性能前沿**

| 优化方向           | 领先项目               | 关键进展 |
|-------------------------------|--------------------------------|------------------|
| **KV缓存效率**       | vLLM, SGLang, llama.cpp        | flat数组扫描（llama.cpp），PIECEWISE图烘焙（vLLM），HiSparse/Weight Cache Daemon（SGLang） |
| **推测性解码**      | vLLM, SGLang                   | PIECEWISE图下正确KV烘焙（vLLM #54851），EAGLE logits剪枝（SGLang #35546） |
| **量化与内核融合** | llama.cpp, SGLang, LiteLLM   | AVX2/VNNI融合点积（llama.cpp），NVFP4 GEMMs（SGLang），FLUX.2内核融合（SGLang） |
| **分布式服务**       | vLLM, SGLang                   | 多节点TP稳定性修复，`shm_broadcast`饥饿问题（vLLM #51921），PD解耦（SGLang #30010） |
| **内存与卸载管理** | Unsloth, Ollama, vLLM         | 智能卸载规划调优（Unsloth #9861），MTP CPU回退漏洞（Ollama #18186），PLE卸载死锁（vLLM #53960） |

> 🔥 **趋势**：**MoE优化**与**上下文长度感知调度**正成为关键差异化因素——尤其在大规模部署中。

---

### **5. 层级定位**

| 项目       | 主要层级                     | 核心优势 |
|---------------|------------------------------------|---------------------------|
| **vLLM**      | 高性能推理引擎  | 生产级分布式服务，推测性解码，FlashInfer集成 |
| **SGLang**    | 高性能推理引擎  | CUDA/ROCm内核鲁棒性，HiCache，PD解耦，高级推测能力 |
| **llama.cpp** | 本地运行时 / 边缘推理     | Apple Metal成熟度，GGUF优化，专注CPU/Metal性能 |
| **Ollama**    | 开发者网关 / CLI运行时    | 无缝管理GGUF模型，macOS原生视频输入，工具链用户体验 |
| **LiteLLM**   | LLM网关 / 代理与可观测性 | 统一API路由，成本追踪，Datadog可观测性，SCIM同步 |
| **Unsloth**   | 智能体导向训练与开发平台    | 工具调用安全性，对话截断处理，提示注入防护 |

> 📌 **定位洞察**：  
> - **vLLM/SGLang** = 云规模推理引擎  
> - **llama.cpp/Ollama** = 边缘/本地开发栈  
> - **LiteLLM** = 企业级API抽象层  
> - **Unsloth** = 智能体训练与开发体验

---

### **6. 趋势信号**

#### 🔹 **今日活动揭示的新兴趋势**：
1. **推测性解码稳定性是瓶颈**  
   vLLM和SGLang中多个严重回归表明，**推测性推理在大规模场景下仍不稳定**，尤其是在Blackwell (`sm_121`) 和 B200 GPU上。开发者应将推测性解码视为实验性功能，直至补丁落地前避免用于生产环境。

2. **硬件多样性导致生态碎片化**  
   Intel Arc（B50/B70）、AMD MI300X/MI355、Lunar Lake iGPU以及Apple A18 Pro上的问题表明，**不存在一个在所有平台上都稳定的统一栈**。跨平台测试已成为不可妥协的要求。

3. **安全与合规已前置化**  
   签名的Docker镜像（LiteLLM）、提示注入防护（Unsloth）、DoS防护（vLLM）显示，**供应链完整性和运行时安全**已不再是事后补救项。

4. **智能体工作流要求全栈集成**  
   视频输入（Ollama）、工具调用解析（Unsloth）、流式可靠性（LiteLLM）、缓存复用（llama.cpp）的兴起表明，**智能体应用需要端到端一致性**——而不仅仅是快速推理。

#### ✅ **应用开发者应关注的重点**：
- ⚠️ **在DGX Spark（sm_121）和B200上避免使用推测性解码**，直到vLLM/SGLang补丁生效。
- 🛑 **审计GPU内存卸载逻辑**——Ollama的`MTP CPU fallback`漏洞（#18186）和vLLM的`PLE卸载死锁`（#53960）可能导致性能无声下降。
- 🔐 **强制执行安全的工具调用解析**——Unsloth最近的RCE修复（#6967）是一个警示：智能体输出必须经过严格净化。
- 📊 **监控流式传输与计费准确性**——LiteLLM的开放问题（#14457, #16582）可能在生产网关中引发收入流失。
- 🧪 **在多样化硬件上进行测试**——即使成熟的项目如vLLM和SGLang，也在ROCm、XPU和Apple Silicon上存在未修复崩溃。

---

> ✅ **最终建议**：在生产部署中，**优先保障稳定性而非功能速度**。推荐：**使用vLLM或SGLang进行云端推理**，**llama.cpp用于边缘场景**，**Ollama用于原型开发**，**LiteLLM用于统一路由**——但务必在扩展前验证已知回归问题。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM Digest – 2026-09-02**

---

### **1. 今日亮点**  
vLLM 项目持续深化对多模态及推测性推理的支持，关键进展包括 Rust 前端功能对齐以及 FlashInfer 与多模态模型的集成。针对 DSA 模型（如 DeepSeek-V3.2、GLM-5.x）中的 **PIECEWISE CUDA graphs** 实现了关键稳定性修复，解决了多节点 TP 部署下的无声输出损坏问题。此外，已对 `/pooling`、`/score` 和 `/classify` 等端点的请求限流机制进行了安全加固。

---

### **2. 发布与破坏性变更**  
无。过去 24 小时内未报告新版本发布或破坏性 API/配置变更。

---

### **3. 新模型与硬件支持**  
- ✅ **多模态支持**：进一步扩展更多多模态模型中 tower/connector 的 LoRA 支持（追踪于 [#31479](https://github.com/vllm-project/vllm/issues/31479)），涵盖 Kimi K2.5、Qwen3-VL 与 GLM-V。  
- ✅ **Rust 前端**：现已通过 [RFC #44280](https://github.com/vllm-project/vllm/issues/44280) 追踪功能对齐，支持通过 `VLLM_USE_RUST_FRONTEND=1` 直接使用。  
- ✅ **Intel GPU (XPU)**：正在调试双 Arc B50（Battlemage）系统上 `zeMemOpenIpcHandle` 错误的问题（[#48953](https://github.com/vllm-project/vllm/issues/48953)）。  
- ✅ **AMD ROCm**：CI 流水线优化，提升 MI300X/MI355 测试覆盖；持续推进睡眠模式下主机访问 VMM 分配内存的功能（[#51369](https://github.com/vllm-project/vllm/pull/51369)）。

---

### **4. 性能与优化**  
- 🚀 **推测解码**：PR [#54851](https://github.com/vllm-project/vllm/pull/54851) 实现了在 PIECEWISE 图下将 KV 缓存正确烘焙进捕获的 Triton 内核 —— 对多节点 TP 上低延迟 DSA 模型至关重要。  
- ⚙️ **上下文长度感知调度**：RFC [#48627](https://github.com/vllm-project/vllm/issues/48627) 提出扩展 `num_speculative_tokens_per_batch_size`，引入上下文长度范围以实现动态深度调优。  
- 🔍 **FlashInfer 编译日志**：PR [#38246](https://github.com/vllm-project/vllm/issues/38246) 增加日志输出，避免长编译阶段被误认为卡死。  
- 💡 **动态推测解码 (DSD)**：基准测试显示，使用推测调度时存在“基线开销”——与 PIECEWISE 覆盖行为相关（[#49986](https://github.com/vllm-project/vllm/issues/49986)）。

---

### **5. 稳定性与回归问题**  
| 问题 | 严重性 | 状态 | 修复 PR | 备注 |
|------|----------|--------|--------|-------|
| [#54521](https://github.com/vllm-project/vllm/issues/54521) | 严重 | 开放 | 无 | `Qwen3.8-Flash-Next` 在 `indexer_budget` 临界值附近出现非确定性贪婪解码异常，由稀疏注意力切换引发。 |
| [#53960](https://github.com/vllm-project/vllm/issues/53960) | 严重 | 开放 | 无 | 单 GPU（TP=1）环境下启用 `VLLM_PLE_CPU_OFFLOAD=1` 会导致内核预热阶段死锁。 |
| [#51921](https://github.com/vllm-project/vllm/issues/51921) | 严重 | 开放 | 无 | 4 节点 TP=4（GB10/aarch64）部署中，引擎空闲 1 分钟后停滞：调度器因 `shm_broadcast` 写入者饥饿而阻塞。 |
| [#54317](https://github.com/vllm-project/vllm/issues/54317) | 严重 | 开放 | 无 | 多个内核（KDA 线性注意力、MHC TileLang、TRT-LLM MoE）在 4x B200 GPU 上反复出现非法内存访问。 |
| [#53130](https://github.com/vllm-project/vllm/issues/53130) | 高 | 开放 | 无 | 当 `running + skipped_waiting` 达到 `max_num_seqs` 时，调度器停止接纳新请求；仅可通过重启恢复。 |
| [#52735](https://github.com/vllm-project/vllm/issues/52735) | 高 | 开放 | 无 | 在 XPU 上启用 MTP/EAGLE 推测解码时，OffloadingConnector 无法正常服务。 |

> 🔥 **注意**：多个高严重性问题影响 GB10（SM121）、B200 及 Intel Arc 硬件上的生产环境稳定性，尤其在多节点与推测解码场景下。

---

### **6. 对应用开发者的启示**  
- ✅ **在 sm_121（DGX Spark）与 b200 上谨慎使用推测解码** —— 已知与 FlashInfer + MTP 存在崩溃问题（`#37754`, `#35288`），建议回退至 Triton 后端。  
- ✅ **单 GPU 环境避免使用 `VLLM_PLE_CPU_OFFLOAD=1`**，直至修复合并（`#53960`）。  
- ✅ **确保 `reasoning_effort` 值一致** —— 客户端不匹配情况现已通过 PR [#52739](https://github.com/vllm-project/vllm/pull/52739) 实现优雅处理。  
- ✅ **强化端点安全**：通过 PR [#53473](https://github.com/vllm-project/vllm/pull/53473) 修复 `/pooling`、`/score` 等接口的无限扇出漏洞，应立即拉取以防范拒绝服务风险。  
- ⚠️ **多节点部署**：除非已应用 PR [#54851](https://github.com/vllm-project/vllm/pull/54851)，否则避免在 DSA 模型中使用 PIECEWISE 图 —— 否则可能出现无声垃圾输出。  

> 📌 **建议**：审计所有使用 `TP > 1`、推测解码或 CPU Offload 的生产服务，排查上述回归问题。若稳定性为首要目标，优先升级至最新 `main` 分支。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 消息简报 – 2026-09-02**

---

### **1. 今日重点**  
SGLang 项目持续推进高性能推理栈的演进，重点在稳定性与可扩展性方面取得关键进展，特别是在 **PD 分离**、**HiCache** 以及 **CUDA/ROCm 内核鲁棒性** 方面。值得注意的是，新提交（PR #37329）优化了 CUDA graph 与推测执行输出的处理逻辑；同时，一个影响较大的 ROCm 严重漏洞（#37478）已被发现并正在调查中，该问题涉及大尺寸 logits 的异常行为。

---

### **2. 发布与破坏性变更**  
过去 24 小时内无新发布或破坏性 API/配置变更报告。

---

### **3. 新模型与硬件支持**  
- **Ascend NPU**：PR #36426 实现了对 `Qwen3.8-27B-W8A8` 在 Ascend NPU 上加载的完整支持，修复了融合投影与视觉编码器量化相关的问题。  
- **ROCm**：Issue #37478 指出 `IndexerKPool` 中存在一个严重缺陷：当 `fp8_mqa_logits` 调用未受控时，大张量（>2 GiB）会引发进程崩溃。  
- **扩散模型**：PR #37422 引入新的 *三级累积质量合约*（`high`、`extra-high`、`lossless`），实现内核融合与模型特定近似之间的解耦。  
- **Blackwell (SM12.0)**：PR #36865 为 Qwen3.x 添加 KDA NVFP4 GEMM 内核，支持下一代 GPU 的优化推理。

---

### **4. 性能与优化**  
- **推测解码**：PRs #35546 与 #35544 通过剪枝无效 logits 并摊销 ReplaySSM 检查点生成开销，优化了 EAGLE 草稿扩展的性能，降低解码负载。  
- **CUDA Graphs**：PR #37329 通过按实际 token bucket 大小生成解码图，并保留重叠前向传播中的自定义张量输出，提升了状态捕获的准确性。  
- **内存效率**：**HiSparse** 路线图（#28874）与 **Weight Cache Daemon**（第一阶段已合并至 #27139）持续推进长上下文模型的低内存解码——在 Qwen3-235B FP8 上，权重加载时间从约 327 秒降至 <1 秒。  
- **内核融合**：PR #37096 将 `quality="high"` 下的 FLUX.2 NVFP4 FC1 → SwiGLU → FC2 融合为单一路径，提升吞吐量且不牺牲精度。

---

### **5. 稳定性与回归问题**  
- **严重（ROCm）**：[#37478](https://github.com/sgl-project/sglang/issues/37478) — `aiter.fp8_mqa_logits` 调用无边界时，在 ROCm 上导致 LLVM 断言失败并引发进程终止，当 logits 超过 2 GiB 时尤为明显。  
- **高危（CUDA）**：[#26340](https://github.com/sgl-project/sglang/issues/26340) — 自动收集的 CUDA coredump 显示重复崩溃；CI 测试运行中出现 285 条评论，表明存在系统性不稳定。  
- **中等（DP 分离）**：[#30010](https://github.com/sgl-project/sglang/issues/30010) — 高每秩批大小下因 `flashinfer moeA2ACombineKernel` 中的 CUDA graph 竞争导致解码死锁。  
- **轻微（多模态）**：[#29008](https://github.com/sgl-project/sglang/issues/29008) — FlashInfer MLA 块状前缀稀疏预填充在多模态请求处理期间发生 off-by-one 崩溃。

> ✅ **修复进行中**：PR #37494 修复统一缓存清理中缺失的 radix 锁跳过问题；PR #37483 修正了 PD 解码预分配轮询行为。

---

### **6. 对应用开发者的启示**  
- **使用 HiCache + 长会话时需谨慎**：请确保未触发 `#cached-token: 0` 问题（#35129），尤其在 DeepSeek-V4-Flash-0731 等智能体工作流中。  
- **避免在 ROCm 上使用大 logits**：若使用 `IndexerKPool` 处理长序列，除非通过 #37478 修复，否则可能引发崩溃。  
- **优化推测解码**：利用 PRs #35546 与 #35544 减少草稿扩展中的内存占用与延迟。  
- **启用 `quality="extra-high"`** 以在不牺牲保真度的前提下解锁扩散模型的融合内核。  
- **监控 PD 分离的扩展性**：高批大小可能触发死锁（#30010）；建议调整 `--max-batch-size` 或临时禁用 CUDA graphs。

> 📌 **实用提示**：谨慎使用 `--grpc-mode` —— issue #29957 报告在持续负载下可能存在死锁风险。如稳定性为首要目标，请测试时配合 `--disable-cuda-graphs`。

---  
*数据来源：[github.com/sgl-project/sglang](https://github.com/sgl-project/sglang)*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 消息简报 – 2026-09-02**

---

### **1. 今日重点**  
最新开发周期聚焦于 **Apple Metal 后端的成熟度提升**，新增 `metallib` xcframework 支持，并针对 M2 Pro、M2 Max 以及 A18 Pro（MacBook Neo）进行了专项调优，显著提升了 Apple Silicon 平台上的性能表现。与此同时，CUDA 与 CPU 路径也落地了多项关键优化——尤其是 **MoE 加权专家融合** 技术，有效降低全局内存流量；以及基于 AVX2/VNNI 加速的量化点积运算，全面提升了多硬件层级下的推理效率。

---

### **2. 发布与破坏性变更**  
今日未发布新版本。但已合并多个关键修复与功能集成：  
- ✅ **Metal**：通过 [PR #28163](https://github.com/ggml-org/llama.cpp/pull/28163) 增加对 xcframework 的 `metallib` 构建支持（仅限 SDK 26+）。  
- ✅ **模型加载**：修复因提前访问 `hparams.n_layer_nextn` 导致的 `n_layer()` 返回不一致问题 ([PR #28159](https://github.com/ggml-org/llama.cpp/pull/28159))。  
- ⚠️ **内存安全**：将 `state_write` 从 `GGML_ABORT` 改为 `throw`，以应对设备端状态保存碎片化场景 ([PR #28209](https://github.com/ggml-org/llama.cpp/pull/28209))——此为非破坏性变更，但客户端代码需主动处理异常。

---

### **3. 新模型与硬件支持**  
- **模型**：  
  - 完全支持 **GLM-5.3-Flash (glm5next)**，包含混合线性/稀疏注意力机制及视觉塔结构 ([PRs #27752, #27773, #27917, #27754](https://github.com/ggml-org/llama.cpp/pulls?q=glm5next))。  
  - 通过基于 gather 的解码方式与直接 PLE 表读取，引入 **Qwen4exp** 稀疏注意力支持 ([PRs #28213, #28136](https://github.com/ggml-org/llama.cpp/pulls?q=qwen4exp))。  
- **硬件后端**：  
  - **Apple Metal**：新增针对 **M2 Pro**、**M2 Max** 以及 **A18 Pro (MacBook Neo)** 的 fa-vec 调优配置 ([PRs #28122, #28152, #28015](https://github.com/ggml-org/llama.cpp/pulls?q=metal+fa-vec))。  
  - **CUDA/ROCm**：HIP 现在在 RDNA3.5 上使用 64 行 MMQ tile 以提升占用率 ([PR #28195](https://github.com/ggml-org/llama.cpp/pull/28195))。  
  - **SYCL**：新增对主机固定内存限制 ≤2GB 的支持 ([PR #27559](https://github.com/ggml-org/llama.cpp/pull/27559))。

---

### **4. 性能与优化**  
- **CUDA**：融合 MoE 加权专家归约（`mul + view + add`）消除中间全局内存写入——对 Qwen3.8-27B 等 MoE 模型降低延迟至关重要 ([PR #25952](https://github.com/ggml-org/llama.cpp/pull/25952))。  
- **CPU**：AVX2 路径现通过 `vpdpwssd` 指令利用 VNNI 融合 `madd_epi16 + add_epi32`，显著提升 q4_K/q5_K 点积吞吐量 ([PR #28212](https://github.com/ggml-org/llama.cpp/pull/28212))。  
- **Metal**：M2 Max（30 GPU 核心）的 `fa-vec` 调优实现更高利用率；初步基准测试显示，在长上下文（130k token）下可带来高达 **~20% 的解码加速**。  
- **KV 缓存**：将 `get_prev_tokens()` 中的 `std::set` 遍历替换为扁平数组扫描，高上下文长度下减少约 17% 的 CPU 使用率 ([PR #28128](https://github.com/ggml-org/llama.cpp/pull/28128))。

---

### **5. 稳定性与回归问题**  
今日报告的高严重性问题包括：  
- 🔴 **SYCL 在 Lunar Lake iGPU（Arc 140V）上崩溃**：通过 Level Zero 与 SYCL API 查询设备内存均失败，导致模型加载时中止 ([Issue #28134](https://github.com/ggml-org/llama.cpp/issues/28134))。  
- 🔴 **CUDA 在 MTP + --split-mode tensor 下运行 Qwen3.8-27B 时锁死**：在 RTX 5070TI 上可复现 GPU 停滞问题 ([Issue #27122](https://github.com/ggml-org/llama.cpp/issues/27122))。  
- 🔴 **Vulkan 管道编译卡死于 gfx1103（RADV 780M）**：服务器因管道编译冻结无法进入监听状态 ([Issue #27998](https://github.com/ggml-org/llama.cpp/issues/27998))。  
- 🔴 **Blackwell (sm_100) 解码挂起**：Qwen3.8-27B-NVFP4 在解码时出现挂起，CPU 持续自旋而无 GPU 活动 ([Issue #27329](https://github.com/ggml-org/llama.cpp/issues/27329))。  

*注：目前尚未有 PR 合并解决这些问题；它们仍为生产环境使用的重大稳定性风险。*

---

### **6. 对应用开发者的意义**  
- 🛠 **对于 Apple Silicon 用户**：预期性能提升与内存开销降低——尤其在 M2 Max/M2 Pro 及即将发布的 A18 Pro 设备上，新增的 `metallib` 支持可实现原生集成至 iOS/macOS 应用。  
- 📈 **对于高上下文应用场景**：若可用，请使用 `--kv-cache-disk`，并优先选择 `fa-vec` 调优内核以处理更长序列。扁平位置数组优化有助于在 130k+ token 场景下维持低延迟解码。  
- ⚠️ **对于生产部署**：在已知锁死与内存溢出漏洞修复前，避免在 CUDA 上对 MoE 或 Qwen4exp 模型使用 `--split-mode tensor`。密切监控新型 Intel GPU（Lunar Lake、Arc B70）上的 SYCL 与 Vulkan 后端表现。  
- 💡 **对于智能体与推理类应用**：默认启用 `preserve_reasoning`（现已自动开启），并考虑采用 **自推测偏差解码（SSBD）** ([PR #28138](https://github.com/ggml-org/llama.cpp/pull/28138)) 以加快重翻译工作流。

> 🔗 [完整 GitHub 仓库](https://github.com/ggml-org/llama.cpp) | [官方网站](https://llama.app)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-02**

---

### **1. 今日亮点**  
最新发布的 **v0.33.3-rc0** 在 GGUF 模型参数处理方面带来了关键改进，并更新了核心推理后端（MLX、MLX-C、llama.cpp）。本周重点聚焦于多模态支持的稳定性——特别是 macOS 上视频输入的优化，同时修复了 GPU 内存管理与模型卸载行为中的高严重性回归问题。

---

### **2. 发布与破坏性变更**  
- **v0.33.3-rc0**:  
  - ✅ **尊重 GGUF 定义的默认参数** —— 模型特定的采样器默认值（如 `temperature`、`top_p`）现在将被遵循，除非在 Modelfile 或请求中显式覆盖。[PR #16471](https://github.com/ollama/ollama/pull/16471)  
  - 🔄 **MLX、MLX-C 与 llama.cpp 更新至最新上游版本**：`b10729`（llama.cpp）、`c74db53`（MLX-C）及对应 MLX 后端补丁。[PR #18160](https://github.com/ollama/ollama/pull/18160)，[PR #18080](https://github.com/ollama/ollama/pull/18080)  
  - ⚠️ **无破坏性 API 变更**，但依赖模型级默认值的用户应确认其 Modelfile 或请求未意外覆盖这些默认设置。

---

### **3. 新模型与硬件支持**  
- **Qwen3.8 Flash Next**：通过关键投影使用 BF16 并对非专家路径采用 MXFP8 量化，实现内存效率优化。[PR #18078](https://github.com/ollama/ollama/pull/18078)  
- **GraniteForCausalLM**：通过 MLX 后端新增对 IBM Granite 4.1 系列的实验性支持。[PR #17972](https://github.com/ollama/ollama/pull/17972)  
- **macOS 上的视频输入**：`/api/chat` 与 `/api/generate` 现在支持视频输入，可解码帧与音频，用于 `qwen3-vl` 等多模态模型。[PR #18179](https://github.com/ollama/ollama/pull/18179)  
- **MLX 后端增强**：改进上下文长度强制机制，支持新型架构。

---

### **4. 性能与优化**  
- **GPU 内存效率**：Qwen3.8 Flash Next 现在通过保留关键层为 BF16 避免长生成过程中的 NVFP4 性能下降。预计在长上下文负载下可持续吞吐量提升约 15–20%。  
- **提示评估缓存**：缓存的提示标记现在会在响应中报告（`prompt_eval_cached_count`），并通过 OpenAI/Anthropic 兼容接口暴露。[PR #17943](https://github.com/ollama/ollama/pull/17943)  
- **流式延迟修复**：流结束时解析器状态已刷新，消除最终输出被静默截断的问题。[PR #18173](https://github.com/ollama/ollama/pull/18173)  
- **心跳安全机制**：防止 `keep_alive` 持续时间中的整数溢出，避免触发立即卸载模型。[PR #18181](https://github.com/ollama/ollama/pull/18181)

---

### **5. 稳定性与回归问题**  
| 问题 | 严重性 | 状态 | 备注 |
|------|----------|--------|-------|
| [#18152](https://github.com/ollama/ollama/issues/18152) | 严重 | 回归 | Windows + NVIDIA 环境下，从单轮切换至多轮请求时出现 GPU 驱动崩溃（`VIDEO_TDR_TIMEOUT_DETECTED`）（0.32.15 → 0.33.0）。暂无修复方案。 |
| [#17833](https://github.com/ollama/ollama/issues/17833) | 高 | 回归 | 尽管 VRAM 已完全填满，但在 v0.32.14 中仍出现 CPU 使用率飙升（50–80%）。可能与异步调度有关。 |
| [#17099](https://github.com/ollama/ollama/issues/17099) | 高 | 回归 | `gemma4:31b` 的内存估算值在 0.31.2 之后被夸大约 1.2 GiB，导致生成速率从 33.8→4.7 tok/s。 |
| [#14493](https://github.com/ollama/ollama/issues/14493) | 中等 | Bug | Qwen 3.5 27B 中工具调用被禁用，重复惩罚被忽略。 |
| [#18186](https://github.com/ollama/ollama/issues/18186) | 中等 | Bug | MTP 设置即使在拥有充足 VRAM（NVIDIA 5090）的情况下仍导致卸载至 CPU。 |

> 🔴 **重要提示**：多个影响性能与稳定性的 GPU 相关回归问题出现在 Windows 与 macOS 环境中，建议升级前进行谨慎测试。

---

### **6. 对应用开发者的意义**  
- ✅ **利用模型定义的默认值** —— 若你的 GGUF 模型包含元数据，请避免硬编码 `temperature`、`top_p` 等参数；Ollama 现在会自动遵从它们。  
- 📹 **构建具备视频感知能力的智能体**：借助 macOS 上的视频输入支持，现在可直接向 `qwen3-vl` 等模型传递实时视频流，无需预处理。使用 `/api/chat` 并包含 `video` 字段即可。  
- ⚠️ **避免设置 `keep_alive` 值超过 ~10^15 秒**，以防 int64 溢出风险。请设定合理时长。  
- 🛠 **处理静默回退情况**：若发现尽管有足够 VRAM 却出现异常的 CPU 使用，检查日志中是否存在 `GPU-to-CPU fallback` 警告（目前仅在调试模式可见）。考虑显式添加 `num_gpu_layers` 或 `num_ctx` 覆盖。  
- 🧩 **确保流式输出完整性**：下游应用需完整消费流式响应，否则部分内容可能因缓冲而丢失（已在 PR #18173 中修复）。

> 🔗 *建议*：若部署在 Windows/NVIDIA 环境，密切监控 [issue #18152](https://github.com/ollama/ollama/issues/18152)。建议暂定版至 v0.32.15，直至问题解决。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 摘要 – 2026-09-02**

---

### **1. 今日亮点**  
LiteLLM 项目持续强化其代理与可观测性堆栈，针对流式传输可靠性、缓存语义及成本核算的关键问题进行了修复。重要拉取请求（PR）解决了早期客户端断连时的令牌追踪长期缺陷，并通过正确转发工具调用和缓存元数据，提升了 Datadog LLM 可观测性。安全方面持续关注，所有版本均通过 cosign 实现验证的 Docker 镜像签名。

---

### **2. 发布与破坏性变更**  
- 已发布 **v1.101.0-dev.1** 与 **v1.99.0**（过去 24 小时内）。  
- 所有 Docker 镜像均使用 [cosign](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0) 进行加密签名，确保供应链完整性。  
- 未报告破坏性 API 变更；当前发布周期无需迁移说明。

---

### **3. 新模型与硬件支持**  
- ✅ **Mistral OCR 模型**：通过议题 [#32033](https://github.com/BerriAI/litellm/issues/32033) 与 PR [#39229](https://github.com/BerriAI/litellm/pull/39229) 添加对 `azure/mistral-ocr-4-0` 的支持。  
- ✅ **文本转语音（TTS）**：通过 PR [#38755](https://github.com/BerriAI/litellm/pull/38755) 添加对 Mistral Voxtral TTS 的支持。  
- ✅ **Volcanic Ark**：已开启对 `doubao-embedding-vision-251215` 的功能请求 ([#29570](https://github.com/BerriAI/litellm/issues/29570))，待实现。  
- ✅ **Azure 存储**：现在支持无密部署的凭据链 ([#39229](https://github.com/BerriAI/litellm/pull/39229))。

---

### **4. 性能与优化**  
- 📈 **Prometheus 指标**：新增仪表盘暴露按密钥与按团队的速率限制使用情况（`allowed` 与 `used`），支持主动告警 ([#39236](https://github.com/BerriAI/litellm/pull/39236))。  
- ⚡ **SCIM 效率**：组成员解析从 N+1 查询优化为每个成员仅一次查找，显著提升 SCIM 同步性能 ([#39228](https://github.com/BerriAI/litellm/pull/39228))。  
- 🔍 **OCR 线路格式**：负载以共享字节形式保留，而非 JSON 字符串，降低序列化开销与内存压力 ([#39235](https://github.com/BerriAI/litellm/pull/39235))。  
- 🔄 **成本映射恢复**：启动时获取现可重试瞬态失败，防止网络波动期间配置过期丢失 ([#39230](https://github.com/BerriAI/litellm/pull/39230))。

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 状态 | 修复 PR |
|--------|------|--------|--------|
| 严重 | 早期客户端断连导致流式使用量丢失 ([#14457](https://github.com/BerriAI/litellm/issues/14457)) | 待处理 | ❌ 尚未修复 |
| 高 | 花费日志清理静默失败 ([#16582](https://github.com/BerriAI/litellm/issues/16582)) | 待处理 | ❌ 尚未修复 |
| 高 | `asyncio.CancelledError` 绕过重试与日志记录 ([#22100](https://github.com/BerriAI/litellm/issues/22100)) | 待处理 | ❌ 尚未修复 |
| 中 | `tiktoken.encode()` 阻塞就绪探针 ([#26193](https://github.com/BerriAI/litellm/issues/26193)) | 待处理 | ❌ 尚未修复 |
| 中 | Bedrock 请求头缺失 (`x-amzn-RequestId`) ([#38357](https://github.com/BerriAI/litellm/issues/38357)) | 待处理 | ❌ 尚未修复 |
| 低 | 当 `chunk_overlap >= chunk_size` 时，`RecursiveCharacterTextSplitter` 出现无限循环 ([#38980](https://github.com/BerriAI/litellm/issues/38980)) | 待处理 | ❌ 尚未修复 |

> *注：多个稳定性问题影响计费准确性、流式正确性与系统韧性——建议紧急关注。*

---

### **6. 对应用开发者的启示**  
- **计费准确性**：使用流式请求时需谨慎——早期断连可能导致使用量未被记录。请关注 [#14457](https://github.com/BerriAI/litellm/issues/14457) 获取更新。  
- **可观测性**：升级至最新构建版本，以在 Datadog 中获得完整的工具调用与缓存遥测数据 ([#39222](https://github.com/BerriAI/litellm/pull/39222))。  
- **安全与合规**：从 v1.99.0 起使用签名 Docker 镜像；通过 [cosign](https://docs.sigstore.dev/cosign/overview/) 验证签名。  
- **路由与遥测**：若使用级联代理，请启用 `forward_tags` 与 `session_id` 传播 ([#31875](https://github.com/BerriAI/litellm/issues/31875))，以保持路由一致性。  
- **速率限制**：利用新推出的 Prometheus 指标 ([#39236](https://github.com/BerriAI/litellm/pull/39236)) 实现实时 SRE 监控与告警。

> **可操作提示**：立即审计部署中的花费日志与流式错误处理机制——多个开放问题可能导致收入流失或调试盲区。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

### **Unsloth Digest — 2026-09-02**

#### **1. 今日亮点**  
Unsloth 生态系统持续演进，重点聚焦 Studio 用户体验优化及本地推理的稳定性修复，尤其在模型状态管理、内存泄漏和多用户支持方面。通过 PR #6967 引入关键安全加固，防止因未受保护的工具调用解析导致的提示注入攻击。与此同时，新提交的 PR 提升了多模态代理工作流：支持模型接收来自 MCP 工具的图像（PR #10088），并在聊天截断时保留用户输入（PR #10165）。

#### **2. 版本发布与破坏性变更**  
*无* — 过去 24 小时内未报告新版本发布或破坏性 API/配置变更。

#### **3. 新模型与硬件支持**  
- **Idefics3 架构**：针对原生支持 Idefics3（如 IBM Granite Docling VLM）的功能请求（#4079）仍在开放中；该功能将使 Unsloth 优化的训练流水线可用于视觉语言模型的微调。
- **Qwen3-TTS**：对通过 Unsloth 微调 Qwen3-TTS 的支持请求（#3951, #3961）已提出，社区希望将现有笔记本适配至音频任务。
- **aarch64 容器镜像**：长期功能请求（#4198）呼吁提供官方 `aarch64` Docker 镜像，以简化在 ARM 架构集群上的部署。
- **ROCm 稳定性**：多个问题（#9801, #8731, #7922）反映出在 AMD GPU（gfx1032/gfx1201）上使用 ROCm 仍存在挑战，包括显存溢出时崩溃以及因缺少 ROCm 版本检测导致的仅 CPU 模式安装 PyTorch。

#### **4. 性能与优化**  
- **智能卸载规划器比 `--fit on` 更慢**：问题 #9861 报告，在 6 核桌面平台（i5-12400F）上，40/43 次测量中默认智能卸载规划器（`-ot`）的性能低于 `--fit on`，表明其对消费级硬件的决策不够优化。
- **KV 缓存大小估算改进**：PR #9931 重构了显存预算估算逻辑，改用实际驻留于 GPU 的权重而非 GGUF 文件大小，从而更准确地反映主机存储嵌入向量（如 `token_embd`）的模型情况。
- **LFM/Mamba 模型快速推理失败**：缺陷报告 #4073 指出，当尝试从 LFM2.5 模型提取状态字典时，`fast_inference=True` 失败，尽管 vLLM 加载成功，但性能提升被阻断。
- **MLX 提示缓存复用失败**：问题 #10031 显示，MLX 后端无法复用 `Qwen3.8-27B` 的提示缓存，很可能是由于 `ArraysCache` 布局不匹配所致，影响重复提示下的延迟表现。

#### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 描述 | 修复状态 |
|--------|-------|-------------|------------|
| 🔴 高 | #10156 | 重复生成 Z-Image-Turbo 时出现内存泄漏，导致内存线性增长并最终触发 SIGKILL（RTX 4070 Ti）。 | 待处理 |
| 🔴 高 | #6967 | 因无标记工具调用提升机制导致两个已验证的提示注入转远程代码执行漏洞（例如 `call:NAME{...}` 在任意位置被解析）。 | 已合并 PR（自动审查失败） |
| 🟡 中 | #9861 | 智能卸载规划器在消费级 CPU 上性能低于 `--fit on`。 | 待处理 |
| 🟡 中 | #9915 | 检查点压缩在代理线程每轮触发，导致边界卡死故障。 | 已关闭 |
| 🟡 中 | #7477 | Studio 自动加载时忽略自定义模型设置。 | 已关闭 |
| 🟡 中 | #9948 | 应用重启后设置丢失（系统提示、采样参数、预设均未保存）。 | 已关闭 |

#### **6. 对应用开发者的启示**  
- **安全优先**：避免在代理输出中暴露未经清洗的工具调用模式——Unsloth Studio 现已强制执行更严格的解析规则（PR #6967），请确保你的代理逻辑不依赖原始 `call:` 语法。
- **模型状态管理**：涉及图像或工具的长对话需格外谨慎——#10165 和 #10162 等问题表明编辑可能破坏消息结构；建议在编辑前保存完整上下文。
- **本地推理注意**：若使用 AMD GPU，运行大模型时预计会出现不稳定现象（显存溢出崩溃）。请暂时使用 `--fit on` 或禁用智能卸载，直至 #9801 修复。
- **微调灵活性**：对于 TTS 或多模态模型（如 Qwen3-TTS、Idefics3），目前尚无开箱即用的支持——请查阅问题追踪器获取社区临时方案或笔记本模板。
- **Studio API 可靠性**：API 可能忽略自定义设置，除非在 *模型加载期间* 显式应用（问题 #10160）；请据此设计工作流。

> 🔗 [GitHub Issues](https://github.com/unslothai/unsloth/issues) | [Pull Requests](https://github.com/unslothai/unsloth/pulls)

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*