# AI 基础设施日报 2026-09-22

> 生成时间: 2026-09-22 01:06 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-09-22**

---

### **1. 生态概览**  
AI推理与服务生态正进入专业化与硬件融合的新阶段，各项目正迅速适配下一代架构，如NVIDIA SM120（RTX 5090）、AMD MI355X和Apple Silicon。清晰的分化正在形成：**高吞吐、分布式服务框架**（vLLM、SGLang）正推动解耦与推测性解码的极限；而**本地运行时引擎**（llama.cpp、Ollama、Unsloth）则聚焦内存效率、跨平台可移植性以及对代理友好的用户体验。与此同时，**网关与编排层**（LiteLLM）正优先关注安全、成本控制与合规性——这对企业级采纳至关重要。创新速度依然迅猛，内核级优化与模型特定修复成为每日核心工作。

---

### **2. 活动对比**

| 项目       | 开放问题 | 开放PR | 近24小时发布 | 状态 |
|---------------|-------------|----------|----------------------|--------|
| **vLLM**      | 87          | 142      | 无                 | 持续开发；长上下文工作流中出现严重回归 |
| **SGLang**    | 92          | 138      | 无                 | CI极不稳定（13个脆弱/失败测试）；Blackwell上存在重大稳定性问题 |
| **llama.cpp** | 118         | 156      | 无                 | 重点提升后端稳定性（Metal/CUDA/Vulkan）；GPU驻留MoE缓存即将上线 |
| **Ollama**    | 123         | 107      | 无                 | 高危MLX/结构化输出缺陷；M5 Max性能显著提升 |
| **LiteLLM**   | 105         | 114      | 无                 | 关键PII/数据泄露修复已合并；引入遥测可选功能 |
| **Unsloth**   | 132         | 148      | 无                 | 与ggml CUDA构建相比性能差距严重；ROCm/Intel Vulkan不稳定 |

> ✅ *所有项目均在积极开发中，近期无发布——重心仍放在稳定性、硬件集成与功能优化。*

---

### **3. 模型支持竞赛**

| 新模型 / 架构           | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|------------------------------------|------|--------|-----------|--------|---------|---------|
| **Qwen3.8-Flash-Next (UD-IQ4_XS)** | ❌    | ❌     | ⚠️ (加载崩溃) | ❌    | ❌     | ✅ (部分支持) |
| **Gemma 4 26B A4B QAT**            | ❌    | ❌     | ✅        | ❌    | ❌     | ✅ (内存占用高) |
| **Ling-3.0-flash-VL (124B MoE)**   | ❌    | ❌     | ✅        | ❌    | ❌     | ❌ |
| **GLM-5.3-Flash (SM120/ROCm)**     | ✅ (原型) | ✅ (修复中) | ❌        | ❌    | ❌     | ❌ |
| **SenseNova-U1/U1.5**              | ❌    | ✅ (路线图) | ❌        | ❌    | ❌     | ❌ |
| **Prism Ternary GGUF (PQ2_0/PTQ1_0)** | ❌    | ❌     | ❌        | ✅ (追踪中) | ❌     | ❌ |

> 🏆 **胜者**：**llama.cpp** 在新型模型支持方面领先，尤其在多模态与大型MoE变体上表现突出。  
> 🥈 **亚军**：**SGLang** 在GLM与SenseNova集成方面展现出强劲前进势头。  
> ⚠️ **警示**：尽管有实验性支持，**vLLM** 和 **Unsloth** 在GLM-5.3-Flash上仍面临显著回归问题。

---

### **4. 性能前沿**

| 关注领域               | vLLM                             | SGLang                          | llama.cpp                       | Ollama                        | LiteLLM                     | Unsloth                      |
|--------------------------|----------------------------------|----------------------------------|----------------------------------|-------------------------------|------------------------------|-------------------------------|
| **KV缓存优化** | ✅ `nvfp4` on SM120（245K上下文） | ✅ 代理感知设计（RFC #24656） | ❌                               | ❌                            | ❌                           | ❌                            |
| **批处理与调度** | ✅ 预填充调度间隔（脱离DP） | ✅ PD解耦 + 主机接收 | ✅ LRU MoE专家缓存（GPU驻留） | ✅ 门控-增量内核加速（+19%） | ✅ 分组作用域路由       | ✅ 跳过冗余kbit预处理   |
| **量化**          | ✅ `nvfp4`，FlashInfer内核    | ✅ DSA稀疏-MLA，FP4/MXFP4       | ✅ "sophia"分词器，Hexagon HMX | ✅ PQ2_0/PTQ1_0支持         | ✅ OpenRouter定价更新 | ✅ MiCA LoRA支持         |
| **分布式服务**   | ✅ 解耦服务（P/D）     | ✅ 流水线并行路线图    | ❌                               | ❌                            | ✅ 多提供方代理       | ❌                            |
| **内核级优化** | ✅ MXFP8 GEMM+reduce-scatter融合 | ✅ cuDNN注意力提案        | ✅ Vulkan融合F32加载      | ✅ MLX gated_delta_update     | ❌                           | ❌（捆绑CUDA 13.4较慢）   |

> 🔥 **顶尖表现者**：  
> - **vLLM** 凭借内核融合与KV缓存突破，在高吞吐、长上下文推理领域占据主导。  
> - **llama.cpp** 在本地运行时效率方面领先，依托GPU驻留MoE缓存与硬件特化内核。  
> - **Ollama** 通过针对性内核优化，在Apple Silicon上实现显著提速。

---

### **5. 层级定位**

| 项目       | 主要层级                | 次要角色                         | 核心差异化 |
|---------------|------------------------------|----------------------------------------|--------------------|
| **vLLM**      | **推理引擎**         | 模型服务、分布式服务     | 高吞吐、多节点推理的行业标准 |
| **SGLang**    | **推理引擎 + 网关**  | 代理感知调度、PD解耦 | 专为代理工作负载设计，支持阶段感知KV缓存 |
| **llama.cpp** | **本地运行时 / 边缘引擎** | 跨平台推理、底层优化 | 无与伦比的可移植性；适用于移动/IoT场景 |
| **Ollama**    | **本地运行时 + 网关**  | 开发友好CLI、JSON模式解析 | 简化开发体验；强MLX集成 |
| **LiteLLM**   | **网关 / 编排**  | 成本控制、PII掩码、路由     | 企业级可观测性与合规能力 |
| **Unsloth**   | **训练/微调栈** | 本地推理、Studio UX             | 快速训练 + 改进错误可见性；PEFT支持持续增强 |

> 📊 **战略定位**：  
> - **构建可扩展代理系统**：优先选择 **vLLM** 或 **SGLang**。  
> - **边缘/本地部署**：**llama.cpp** 无可替代。  
> - **企业级网关**：**LiteLLM** 提供业界领先的安全部署与审计能力。  
> - **微调工作流**：**Unsloth** 正快速追赶，具备MiCA与训练器优化能力。

---

### **6. 趋势信号**

🔍 **从今日活动提取的关键行业趋势**：

1. **硬件融合已成现实**：  
   - **SM120（RTX 5090）** 与 **MI355X** 已成为 vLLM、SGLang 与 llama.cpp 的活跃开发目标。  
   - **Apple Silicon（MLX）** 与 **Intel Arc** 逐步获得关注，但尚不稳定——预计将逐步成熟。

2. **长上下文与代理工作负载驱动创新**：  
   - **推测性解码**、**解耦（P/D）** 与 **代理感知KV缓存** 是 vLLM 与 SGLang 的核心方向。  
   - **结构化输出可靠性**（JSON模式、工具调用）已成为首要关切——Ollama、LiteLLM 与 Unsloth 均在积极应对。

3. **安全与合规不再是可选项**：  
   - LiteLLM 中的 **PII掩码泄露** 与 Ollama 中的 **无限空白生成** 显示生产环境风险日益升高。  
   - **按用户成本拆分** 与 **可选遥测** 表明系统正向可审计、合规化演进。

4. **内存效率是下一战场**：  
   - **GPU驻留LRU MoE缓存**（llama.cpp）与 **MiCA LoRA**（Unsloth）指向更智能的权重管理。  
   - **量化多样性**（nvfp4、IQ4_XS、PTQ1_0）反映对精度与速度权衡的需求。

5. **生产环境中稳定性 > 速度**：  
   - 尽管取得突破，**关键回归问题** 仍主导问题跟踪器——尤其集中在 **长上下文推理**、**MoE模型** 与 **混合GPU环境**。  
   - 开发者必须在升级前进行严格测试，特别是针对 GLM-5.3-Flash 与 Qwen3.8 变体。

---

### ✅ **应用开发者建议**

- **对于代理系统**：使用 **vLLM** 或 **SGLang** 实现可扩展性；启用 `--nodraft`（Ollama）或监控 **代理感知KV缓存**（SGLang）以保证行为确定性。
- **对于边缘/本地应用**：首选 **llama.cpp** 以确保跨平台一致性与 **GPU驻留MoE缓存**。
- **对于企业网关**：选择 **LiteLLM** 以获得内置成本控制与PII保护能力。
- **对于训练流程**：评估 **Unsloth** 的快速微调与MiCA支持——但避免使用捆绑CUDA 13.4版本。
- **始终验证**：在上线前，务必针对已知回归（如 GLM-5.3-Flash 语义混乱、Qwen3.8 Vulkan崩溃）进行测试。

> 🛠️ **实用提示**：关注 **PR #49011 (vLLM)**、**PR #42351 (LiteLLM)** 与 **Issue #11453 (Unsloth)** —— 这些代表了当前最关键的稳定性风险。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

### **vLLM Digest — 2026-09-22**

#### **1. 今日亮点**  
vLLM 项目持续推进对下一代硬件和推理模式的支持，**ROCm/Metal 集成**、**拆分式服务**以及**推测解码**方面取得显著进展。针对 **GLM-5.3-Flash** 和 **DeepSeek-V4** 的关键稳定性修复已合并，新 PR 正在优化 **SM120（RTX 5090）** 和 **MI355X** GPU 的内核级性能。当前重点仍聚焦于在多节点集群上实现**高吞吐长上下文工作负载**。

#### **2. 发布与破坏性变更**  
*过去 24 小时内无新发布。*  
- **注意**：`vllm/vllm-openai-rocm:nightly` 镜像（2026-08-12）目前处于积极测试中；使用 ROCm 的用户应预期后续 nightly 构建将出现破坏性变更，因持续进行 CI/兼容性改进。
- **迁移提示**：`--kv-cache-dtype nvfp4` 现通过 FlashInfer 内核支持 SM120（见 #49011），但需满足 `flashinfer-python>=0.6.13` 且 `vLLM>=0.25.1`。

#### **3. 新模型与硬件支持**  
- ✅ **SM120（RTX 5090）**：通过 FlashInfer 实验性支持 `nvfp4` KV 缓存（#49011，原型）。在 RTX 5090 上实现 **245K 上下文长度**。
- ✅ **ROCm/gfx950 / MI355X**：正在开发 Qwen3.8-2.4T-A95B 与 DeepSeek-V4.1 支持（#57149，#50519）；为 MI355 上的 Kimi-K3 增加单元测试（#58012）。
- ✅ **多模态模型**：增强对混合 Mamba+Attention 模型（如 Qwen3.5-35B-A3B）的支持，调度逻辑得到优化（#40707）。
- ✅ **模型格式**：全面支持 GLM-5.3-Flash 的 DFlash2 草稿模型（#56983），实现基于块扩散草稿器的推测解码。

#### **4. 性能与优化**  
- 🔥 **SM120 内核融合**：#57428 融合 MXFP8 GEMM + reduce-scatter 用于 DeepSeek-V4.1，减少 HBM 往返次数，在序列并行下提升吞吐量。
- 🚀 **SM120 上的 NVFP4**：原型实现 **245K 上下文长度**，在 RTX 5090 上使用 `--kv-cache-dtype nvfp4`，借助 FlashInfer 内核（#49011）。
- ⚙️ **图优化**：#57586 在 `VLLM_BATCH_INVARIANT=1` 下默认启用可中断 CUDA 图，提升 Hopper/Blackwell 上 matmul 调优精度。
- 📈 **拆分式服务指标**：#58004 添加了在 P/D 拆分式服务中由待传输任务锁定的 KV 块的计量器，便于监控解码阻塞情况。
- 💡 **预填充调度**：#54627 将 `prefill_schedule_interval` 应用于数据并行之外，允许更长的连续解码窗口。

#### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 修复 PR |
|---------|------|--------|--------|
| 🔴 **严重** | GLM-5.3-Flash 在长时间推理（多轮代理使用）后退化为“乱语” | 开放（#56605） | 尚无修复 |
| 🔴 **严重** | GLM-5.3-Flash 在累积推理后长期解码性能退化 | 开放（#56868） | 尚无修复 |
| 🟡 **高** | DeepSeek-V3.2 / GLM-5.x DSA sparse-MLA 解码在 CUDA 图下于 PD 拆分式服务中输出垃圾数据 | 开放（#57064） | 正在处理 |
| 🟡 **高** | Intel Arc B70（Battlemage）：`vllm:0.17.0-xpu` 上出现 GP 故障 + XE BCS 引擎重置 | 已关闭（#41663） | 已在 `0.17.0-xpu` 中修复 |
| 🟡 **中等** | C++ 批量 memcpy 路径中 `attrIdxs` 越界（`cache_kernels.cu`） | 开放（#53863） | 尚无修复 |

> **注意**：多个回归问题影响**长上下文、多轮或推测解码工作流**——尤其在 GLM 与 DeepSeek 模型上。

#### **6. 对应用开发者的意义**  
- 若你正在构建**依赖工具调用或结构化输出的智能体**，请确保使用 `vLLM>=0.25.1`，并在 `#46249` 修复前避免对 Qwen3.6-27B 使用 `--enable-mtp`。
- 针对**长上下文应用**，仅当使用 `flashinfer-python>=0.6.13` 时，才可在 SM120 上测试 `nvfp4` KV 缓存；请避免在 GLM-5.3-Flash 上使用 `nvfp4`，因其存在已知退化问题。
- **拆分式服务**正逐步成熟：使用 `/render` → `/generate` → `/derender` 流程时需谨慎；通过新指标（#58004）监控被锁定的 KV 块。
- **ROCm 用户**应预期频繁更新——请关注 `#58012`、`#50519` 和 `#57149` 获取最新兼容性说明。
- 若你在休眠模式场景中依赖冻结权重，请使用 `--sleep-preserve-parameter-names`（#57891）。

> 🔗 **关键资源**：  
> - [问题 #49011 – SM120 上的 NVFP4](https://github.com/vllm-project/vllm/issues/49011)  
> - [PR #57428 – MXFP8 GEMM-RS 融合](https://github.com/vllm-project/vllm/pull/57428)  
> - [问题 #56605 – GLM-5.3-Flash 乱语问题](https://github.com/vllm-project/vllm/issues/56605)  
> - [PR #58004 – KV 锁定指标](https://github.com/vllm-project/vllm/pull/58004)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-09-22**

---

### **1. 今日亮点**  
SGLang 项目持续推进大规模、高吞吐量 LLM 服务基础设施建设，重点在 **流水线并行**、**预填充-解码分离** 和 **代理感知的 KV 缓存设计** 方面取得显著进展。关键进展包括：代理感知 KV 缓存第一阶段的 RFC（#24656）已发布，PD 分离路线图（#21703）正在积极开发中，针对 Blackwell GPU 上 GLM-5.3-Flash 的性能修复多个 PR 已提交（#39340, #37813）。CI 流水线仍存在问题，报告发现 3 个失败测试和 10 个不稳定测试（#17050）。

---

### **2. 发布与破坏性变更**  
*无*。过去 24 小时内未发布新版本。未记录任何 API 或配置变更。

---

### **3. 新模型与硬件支持**  
- **GLM-5.3-Flash** 对 **Blackwell (SM120)** GPU 的支持正在积极跟踪与优化，持续修复 DSA 后端问题及 top-k 宽度不匹配问题（#37813, #39340）。  
- **SenseNova-U1/U1.5** 的集成已通过专用路线图（#37742）进行追踪，基于上游 OpenSenseNova/SenseNova-U1。  
- **AMD ROCm** 支持扩展：已启用 `aiter allreduce fusion` 用于 GLM 模型（#39790），并在 CI 中注册了统一的 KV 清零测试（#40123）。  
- **Apple Silicon (MLX)**：Gemma 4 MTP 伪编码与文本生成进度持续推进，但目前仍为实验性功能（#32101, #32264）。  
- **Intel XPU**：由于缺少 UCX/NIXL 构建支持，NIXL 分离测试暂时禁用（#40540）。

---

### **4. 性能与优化**  
- **流水线并行 (PP)**：关键路线图问题（#11857）强调了 PP 在长上下文输入（如 100 万 token）场景下降低 TTFT 的重要性。当前正致力于跨架构稳定性和可扩展性提升。  
- **预填充-解码分离 (PD)**：多个 PR 提升了 PD 的鲁棒性：  
  - 通过阈值触发机制，新增自定义传输后端的解码主机接收功能（#40238）。  
  - 修复健康检查干扰请求路由的问题（#35721）。  
- **内核优化**：  
  - 修复长上下文（2k+ token）下 flash 解码内核变慢的问题：当前速度从约 147 → 约 126 token/s；优化目标已明确（#2271）。  
  - 提议集成 **cuDNN attention 后端**，以在支持硬件上实现更快推理（#2272）。  
- **内存效率**：统一 radix 缓存现已支持 LMCache 持久化（#38652）；淘汰批处理降低了调度器延迟（#36370）。

---

### **5. 稳定性与回归问题**  
- **严重缺陷**：模型加载时出现 `KeyError: 'model.layers.14.mlp.shared_expert.gate_gate_up_proj.weight'` — 影响 MoE 模型；暂无修复方案（#13214）。  
- **GPU 特定问题**：  
  - FlashInfer 后端在 **Blackwell GPU** 上因不支持某些操作而失败（#35080）。  
  - GLM-5.3-Flash 在 RTX PRO 6000（SM120）上因 DSA 后端阻塞导致崩溃（#37105）。  
- **内存/并发问题**：  
  - 使用 `cudaMemcpyBatchAsync` 且指针未注册时，HiCache 阶段写回故障（#40232）。  
  - 中止清理钩子顺序错误导致 FlexKV 与 LMCache 间会话泄漏（#40360）。  
- **CI 稳定性**：主分支 CI 中检测到 3 个失败、10 个不稳定测试（#17050）；仍在排查中。

---

### **6. 对应用开发者的意义**  
构建代理系统类应用的开发者应关注 **代理感知 KV 缓存**（RFC #24656）和 **PD 分离** 的改进，这些将推动更可扩展、低延迟的工作流。对于生产部署，预计将在 Blackwell 平台与 **ROCm** 上实现更紧密的 **GLM-5.3-Flash** 集成——升级前请密切关注 CI 状态（#17050）。建议使用 `--disaggregation-decode-host-receive-threshold` 参数以提升 PD 效率。在 PR #40628 落地前，请谨慎使用 FP4/MXFP4 量化下的 MoE 模型与共享专家。Apple Silicon 用户应聚焦于 MLX-based Gemma 4 路径，但需预期存在稳定性缺口。

👉 *敬请关注 SGLang 模拟器更新（#21891）——这是无需昂贵 GPU 集群即可优化模型/硬件/配置选择的关键工具。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 消息简报 – 2026-09-22**

---

### **1. 今日亮点**  
最新更新聚焦于 Metal、CUDA 与 Vulkan 后端的关键稳定性修复，包括修复 Apple Silicon 上 Flash Attention 掩码边界问题，以及 Volta GPU 的编译错误。在 GPU 内存管理方面取得显著进展，新增一个 PR 引入了驻留于 GPU 的 LRU 缓存以存放 MoE 专家权重——有望大幅提升 Qwen3.8 等大型 MoE 模型的推理速度。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未发布新的标签版本。但多项配置与 API 相关变更已合并：  
- ✅ `--temp`、`--top-p`、`--min-p` 及惩罚参数现已可通过环境变量（`LLAMA_ARG_*`）设置 ([#27380](https://github.com/ggml-org/llama.cpp/pull/27380))，实现通过 `EnvironmentFile`（如 systemd）完全控制 `llama-server`。  
- ✅ 多进程模式下，`--api-key-file` 不再传递给子路由器实例，提升了服务器部署的安全性 ([#28938](https://github.com/ggml-org/llama.cpp/pull/28938))。

---

### **3. 新模型与硬件支持**  
- ✅ 新增对 **Ling-3.0-flash-VL** 的支持，这是一个 1240 亿参数的混合 KDA + 门控 MLA 视觉语言模型，采用 512 专家 MoE 架构 ([#29151](https://github.com/ggml-org/llama.cpp/pull/29151))。  
- ✅ 引入 **"sophia" 预分词器类型**，适用于无正则表达式的字节级 BPE GGUF 模型 ([#29211](https://github.com/ggml-org/llama.cpp/pull/29211))，对运行 *Sophia*（约 10 亿参数）模型至关重要。  
- ✅ 增强 **Hexagon HMX** 对 `GATED_DELTA_NET` 量化优化，在 Galaxy S26/S25/S24 与 VentunoQ 设备上实现 **1.5–3 倍提示处理速度提升** ([#29199](https://github.com/ggml-org/llama.cpp/pull/29199))。  
- ✅ 实验性支持 **MUSA (MTT S5000)** 后端，并完成初步修复 ([#29193](https://github.com/ggml-org/llama.cpp/pull/29193))。

---

### **4. 性能与优化**  
- 🔥 **MoE 专家权重的 GPU 驻留 LRU 缓存** ([#27861](https://github.com/ggml-org/llama.cpp/pull/27861))：通过将最近使用的专家权重缓存在 GPU 而非回退至 CPU 内存，解决解码瓶颈问题，预计显著降低主机带宽压力。  
- 🚀 **Vulkan**：Intel GPU 上融合加载 2 个 F32 矩阵，提升 Intel Arc 硬件上的计算效率 ([#29254](https://github.com/ggml-org/llama.cpp/pull/29254))。  
- ⚙️ **SYCL**：在 Intel Arc Pro B70 上改进注意力与解码路径，对 IQ3_S/IQ3_XXS MMVQ 采用持久化重排布局 ([#29107](https://github.com/ggml-org/llama.cpp/pull/29107))。  
- 📦 **内存**：新增 `--no-mmap-prefetch` 选项，跳过 macOS 上的 `MADV_WILLNEED`，防止加载超大模型（超过半数内存）时长时间卡顿 ([#29250](https://github.com/ggml-org/llama.cpp/pull/29250))。

---

### **5. 稳定性与回归问题**  
今日报告的关键问题包括：  
- ❌ **Metal**：Apple Silicon 上 Flash Attention 块预遍历阶段掩码边界错误 ([#29220](https://github.com/ggml-org/llama.cpp/pull/29220)) —— 已在 `b11093` 中修复。  
- ❌ **CUDA**：Volta (`sm_70`) 瓷砖编译因 `load_ldmatrix` 瓷砖形状不匹配失败 ([#29224](https://github.com/ggml-org/llama.cpp/pull/29224)) —— 已解决。  
- ❌ **Vulkan**：RDNA3 GPU 在 `b10780` 之后出现严重提示处理延迟 ([#28752](https://github.com/ggml-org/llama.cpp/issues/28752)) —— 正在调查中。  
- ❌ **Vulkan**：Qwen3.8 DFlash/MTP 模型中因越界 token ID（`n_vocab`）导致崩溃 ([#28158](https://github.com/ggml-org/llama.cpp/issues/28158)) —— 已确认，修复待发布。  
- ❌ **SYCL**：Intel Arc Pro B50 + A770 多 GPU 运行时崩溃 ([#27888](https://github.com/ggml-org/llama.cpp/issues/27888)) —— 旧但活跃。

---

### **6. 对应用开发者的意义**  
- **使用 `LLAMA_ARG_*` 环境变量**管理服务器参数，避免命令行复杂性——适用于容器化或 systemd 管理部署。  
- **一旦稳定版支持 GPU 驻留 MoE 缓存**，即可高效运行大型 MoE 模型（如 Qwen3.8）于高端 GPU。  
- **得益于新推出的 SYCL/HMX 优化，Intel Arc 与 Snapdragon 平台性能预期提升**。  
- **若使用 RDNA3 GPU，请避免 `b10780+` 版本**——已知回归影响提示吞吐量。  
- **使用 Qwen3.8 DFlash/MTP 模型时注意 Vulkan 上的崩溃风险**——建议使用旧版本直至修复上线。  
- **对于多模态应用**，请确保 `media_marker` 未通过 `/props` 暴露（参见 [#27249](https://github.com/ggml-org/llama.cpp/issues/27249)），以免引发分词失败。

👉 [官方网站](https://llama.app) | [GitHub 仓库](https://github.com/ggml-org/llama.cpp)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

### **1. 今日亮点**  
Ollama 的开发势头持续，针对 MLX 引擎的稳定性以及结构化输出处理进行了关键修复，特别是在 JSON schema 解析和无限空格生成方面。重要拉取请求（PR）解决了 Qwen3-Coder 工具调用解析的长期问题，以及 OpenAI 兼容 API 中 `max_tokens` 的强制执行机制，确保代理行为更加可预测。通过门控-增量内核优化，在 M5 Max 上实现 **+19% 提示吞吐量（TPS）**，凸显了底层性能改进的持续推进。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告任何内容。*  
无新版本发布或破坏性变更。最新稳定版仍为 **0.34.2**，未发布迁移说明或弃用通知。

---

### **3. 新模型与硬件支持**  
- ✅ **Prism Ternary GGUF (PQ2_0/PTQ1_0)**：支持已通过 [Issue #18521](https://github.com/ollama/ollama/issues/18521) 和 [PR #18573](https://github.com/ollama/ollama/pull/18573) 跟踪，该 PR 重构了张量类型检测逻辑，避免产生误导性的“大小溢出”错误。  
- 🛠️ **MLX 引擎增强**：持续推进 MLX 特定优化，包括改进内存管理 ([PR #18556](https://github.com/ollama/ollama/pull/18556)) 和对高级量化格式的支持。  
- ⚠️ **AMD 混合 GPU（gfx1200 + gfx1201）**：MoE 模型因 ROCm 内核镜像缺失而崩溃 ([Issue #18162](https://github.com/ollama/ollama/issues/18162))；尚未解决但正在调查中。

---

### **4. 性能与优化**  
- 🔥 **+19% 提示吞吐量（MLX）**：[PR #18550](https://github.com/ollama/ollama/pull/18550) 引入了 MLX 的 `gated_delta_update` 内核和密集 MLP 缩放折叠技术，在 M5 Max 上将提示吞吐量从 **715 → 848**（2k token）和 **695 → 828**（8k token）。  
- 📈 **推测解码控制**：提出新增 `--nodraft` 标志 ([Issue #18517](https://github.com/ollama/ollama/issues/18517))，可通过禁用推测解码实现确定性评估与调试。  
- 🧩 **基准测试改进**：[PR #17480](https://github.com/ollama/ollama/pull/17480) 将合成提示替换为真实的 HumanEval 代码片段，更真实地反映实际代理工作负载。

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 状态 | 修复 PR |
|--------|------|--------|-------|
| 🔴 严重 | `qwen3coder` 解析器在长文件写入工具调用上失败，返回错误作为响应 | [Issue #18563](https://github.com/ollama/ollama/issues/18563) | [PR #18571](https://github.com/ollama/ollama/pull/18571) |
| 🔴 严重 | MLX 引擎在结构化输出（`format: json_schema`）期间生成无限空格 | [Issue #18567](https://github.com/ollama/ollama/issues/18567) | [PR #18569](https://github.com/ollama/ollama/pull/18569) |
| 🟡 高 | `/v1/chat/completions` 忽略 `max_tokens` 并覆盖 `num_predict` 默认值 | [Issue #18575](https://github.com/ollama/ollama/issues/18575) | 待定 |
| 🟡 高 | Windows 下 `FROM *` 通配符匹配失败，模式不匹配 | [Issue #18568](https://github.com/ollama/ollama/issues/18568) | [PR #18572](https://github.com/ollama/ollama/pull/18572) |
| 🟡 中等 | Gemma4 在 Windows 上图像处理功能损坏 | [Issue #16532](https://github.com/ollama/ollama/issues/16532) | 尚无修复 |

> **注意**：混合 AMD GPU 及 Vulkan 驱动下仍存在多个崩溃问题——[Issue #18557](https://github.com/ollama/ollama/issues/18557) 报告在驱动版本 32.0.21045.5002 下 RX 6800 XT 出现访问违规。

---

### **6. 对应用开发者的影响**  
- ✅ **代理可靠性**：修复 `qwen3coder` 工具调用解析 ([PR #18571](https://github.com/ollama/ollama/pull/18571)) 和结构化输出终止 ([PR #18569](https://github.com/ollama/ollama/pull/18569))，确保代理不会因格式错误响应而无声失败。  
- ⚠️ **输出控制**：在 [Issue #18575](https://github.com/ollama/ollama/issues/18575) 修复前，**请勿依赖 `/v1/chat/completions` 中的 `max_tokens`** —— 即使设置，响应仍可能无界。建议改用 Modelfile 中的 `num_predict`。  
- 💡 **调试与可复现性**：提议的 `--nodraft` 标志 ([Issue #18517](https://github.com/ollama/ollama/issues/18517)) 将帮助开发者隔离由推测解码在智能体工作流中引发的问题。  
- 🖥️ **跨平台注意事项**：在 [PR #18572](https://github.com/ollama/ollama/pull/18572) 合并前，请避免在 Windows 上使用 `FROM *.gguf` 通配符。同时验证混合 AMD GPU 环境下的模型加载情况——当前 MoE 模型尚不稳定。

> **实用提示**：对于生产环境中的代理，推荐使用 `ollama run --nodraft`（一旦可用），并在部署前本地验证 JSON schema 输出。关注 Ollama Cloud 上嵌入模型/重排序模型的可用性 ([Issue #17129](https://github.com/ollama/ollama/issues/17129))。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 消息简报 – 2026-09-22**

---

### **1. 今日重点**  
LiteLLM 项目持续强化核心基础设施，针对流式处理防护机制、预算逻辑和模型路由可靠性进行了关键修复。重要 PR 解决了 `/v1/messages` 流中敏感个人信息（PII）的掩码问题（修复高风险数据泄露），解决了零成本预算绕过漏洞（该漏洞可能导致无限支出），并为团队使用导出功能新增了按用户划分的成本明细——这对企业合规与审计至关重要。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未发布新版本。*  
但已有多个破坏性变更通过活跃的 PR 推进：  
- **PR #42374**：由 config.yaml 管理的设置现在在 UI 中被 *冻结*，以防止重启后静默丢失——管理员必须直接编辑配置文件。[GitHub](https://github.com/BerriAI/litellm/pull/42374)  
- **PR #42373**：通过 `LITELLM_TELEMETRY=true` 引入可选匿名遥测——可在不需用户同意或追踪的情况下提供使用洞察。[GitHub](https://github.com/BerriAI/litellm/pull/42373)  

> ⚠️ **迁移提示**：若使用 `config.yaml`，请确保了解仪表板中不可变字段的存在。遥测为可选且非侵入式。

---

### **3. 新模型与硬件支持**  
- **新增模型**：  
  - `fal-ai/flux-lora-depth`（支持控制图像的图像编辑）  
  - `fal-ai/moondream3-preview/query`（视觉问答模型）  
  [PR #42334](https://github.com/BerriAI/litellm/pull/42334)  
- **更新定价**：OpenRouter 对 `openrouter/~z-ai/glm-latest` 的价格已更新，输入成本从 $0.84M 降至 $0.784M。[PR #42381](https://github.com/BerriAI/litellm/pull/42381)  
- **新增代理路由**：`/openrouter/typesafe/jev-1.13` 现已支持，并正确应用定价。[PR #42301](https://github.com/BerriAI/litellm/pull/42301)

---

### **4. 性能与优化**  
- **延迟与吞吐量**：今日未报告任何内核级优化。  
- **路由效率**：  
  - **PR #42378** 引入 *组作用域优先路由*，允许团队定义首选模型及回退链，而不会影响全局路由策略。此举减少了不必要的回退，从而降低延迟。[GitHub](https://github.com/BerriAI/litellm/pull/42378)  
- **缓存精度**：合并漂移后，Redis 语义阈值已恢复至 `f32` 精度；原生 Qdrant 批量写入功能已重新启用。[PR #42379](https://github.com/BerriAI/litellm/pull/42379)

---

### **5. 稳定性与回归问题**  
今日报告的关键稳定性问题包括：  
1. **[高风险]** `Presidio` PII 掩码在流式 `/v1/messages` 上被跳过——原始卡号泄露于 Claude Code 响应中。  
   - ✅ **修复 PR**：[PR #42351](https://github.com/BerriAI/litellm/pull/42351) 与 [PR #42335](https://github.com/BerriAI/litellm/pull/42335)（重复修复，同一问题）。  
2. **[高风险]** 零成本预算绕过漏洞允许付费回退触发无限制支出。  
   - ✅ **修复 PR**：[PR #42170](https://github.com/BerriAI/litellm/pull/42170)（正在进行中）。  
3. **[中等风险]** Responses→Chat 桥接在多轮重播时丢失工具调用，并将推理内容泄露为助手文本。  
   - ❌ 尚无修复；正在调查中。[Issue #42005](https://github.com/BerriAI/litellm/issues/42005)  
4. **[中等风险]** Databricks 非 GPT 模型仅在 `reasoning.summary` 为字符串时才接受该字段。  
   - ❌ 修复待定；当前导致 LLM 推理工作流中断。[Issue #42347](https://github.com/BerriAI/litellm/issues/42347)

---

### **6. 对应用开发者的影响**  
- **安全**：启用 `output_parse_pii: true`，并验证其在所有端点上的一致性应用——尤其关注 `/v1/messages` 和流式路径。使用最新构建版本以避免 PII 泄露。  
- **成本控制**：避免依赖带回退的零成本预算；验证回退模型是否已定价并受监控。使用 **PR #42378** 可强制实现按组的可预测模型选择。  
- **可审计性**：利用 **PR #42367** 导出按用户计费明细——对内部计费和合规至关重要（例如欧盟《人工智能法案》第 12 条）。  
- **可靠性**：若 `/v1/chat/completions` 可用，请避免在 `/v1beta/models/{model}:generateContent` 上使用 `vertex_ai/xai/grok-*`——存在已知端点不匹配问题。  
- **遥测**：考虑启用 `LITELLM_TELEMETRY=true`，以帮助项目提升稳定性与功能优先级判断。

> 🔗 **专业提示**：即使未启用，也建议关注 [PR #42373](https://github.com/BerriAI/litellm/pull/42373)，它有助于揭示开源部署中的模式，未来可能用于调试。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-22**

---

### **1. 今日亮点**  
Unsloth 持续强化其多 GPU、跨平台的推理与训练堆栈，重点优化了关键的 UI/UX 体验，并修复了后端稳定性问题。核心工作包括解决 AMD ROCm 平台（Strix Halo）上的高严重性崩溃，提升 Studio 中失败加载与训练任务的错误可见性，并推进对新兴模型如 Qwen3.8-Flash-Next 与 Gemma 4 26B A4B QAT 的支持。团队还提升了模型加载可靠性与日志透明度。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新版本发布。*  
然而，多项 PR 解决了向后兼容性与运行时安全性问题：  
- **PR #11467** 修复了在加载 `Qwen/Qwen3-Omni-30B-A3B-Instruct` 时因不识别配置类引发的 `ValueError` 问题 ([#11467](https://github.com/unslothai/unsloth/pull/11467))。  
- **PR #11469** 恢复了 `transformers==4.x` 中已弃用的图像处理器重导出，修复了 `microsoft/Phi-4-reasoning-vision-15B` 的加载失败问题 ([#11469](https://github.com/unslothai/unsloth/pull/11469))。  
- **PR #11468** 防止对无法接受 `packed_seq_lengths` 的模型自动启用无填充批处理——该行为存在模型前向传播中的回归风险 ([#11468](https://github.com/unslothai/unsloth/pull/11468))。

---

### **3. 新模型与硬件支持**  
- **模型支持**：  
  - 新增对 **Qwen3.8-Flash-Next UD-IQ4_XS** 的支持（报告加载时崩溃；修复待定）。  
  - **Gemma 4 26B A4B QAT** 已支持，但内存占用超出预期（在 16 GB 系统上约需 ~15 GB RAM）([#11435](https://github.com/unslothai/unsloth/issues/11435))。  
  - **Phi-4-reasoning-vision-15B** 现可成功加载，得益于恢复的图像处理导入功能 ([#11469](https://github.com/unslothai/unsloth/pull/11469))。  

- **硬件与后端**：  
  - 继续支持 **AMD Strix Halo (gfx1151)** 的 ROCm，但预构建版本 `b10079` 中性能退化问题依然存在 ([#7371](https://github.com/unslothai/unsloth/issues/7371))。  
  - **Intel Arc B60 双 GPU** 在 Vulkan 下生成过程中出现 `ErrorDeviceLost`，表明驱动或内核层存在不稳定性 ([#11453](https://github.com/unslothai/unsloth/issues/11453))。  
  - **Vulkan 训练/微调** 目前仍不支持，但已在功能请求中 ([#11184](https://github.com/unslothai/unsloth/issues/11184))。

---

### **4. 性能与优化**  
- **CUDA 13.4 与官方 CUDA 12 构建对比**：Unsloth 内置的 `b11030-mix` 构建在 RTX 5070 Ti（sm_120）上运行速度比官方 `ggml-org` CUDA 12 构建慢 **约 5–6 倍** —— 对 Blackwell 时代显卡构成重大关切 ([#11349](https://github.com/unslothai/unsloth/issues/11349))。  
- **内存效率**：  
  - `FastLanguageModel.get_peft_model()` 现支持 MiCA（Minor Component Adaptation），一种在 Hugging Face PEFT 中日益流行的 LoRA 兼容方法 ([#6730](https://github.com/unslothai/unsloth/issues/6730))。  
  - 工具结果文本在进入模型前被限制在 **256 KB**，以防止上下文溢出 ([#11430](https://github.com/unslothai/unsloth/pull/11430))。  
- **训练优化**：  
  - **PR #11494** 跳过 Unsloth 已处理的冗余 kbit 准备步骤，使 27B 模型的训练器内存占用减少约 5 GB ([#11494](https://github.com/unslothai/unsloth/pull/11494))。

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 影响 | 修复状态 |
|--------|------|-------|----------|
| 严重 | 加载 Qwen3.8-Flash-Next 时 MTP 中断（rebase 后 `hc_head_norm` 不匹配） | 推理失败 | [已关闭](https://github.com/unslothai/unsloth/issues/11143) |
| 高 | T4 Kaggle 环境下进行 Qwen 3.5 0.8b BF16 训练时崩溃 | 训练失败 | [开放](https://github.com/unslothai/unsloth/issues/7506) |
| 高 | 图形构建阶段出现 `GGML_ASSERT(ggml_can_repeat(b, a))`（RTX 5080，b11007-mix） | 推理崩溃 | [已关闭](https://github.com/unslothai/unsloth/issues/11219) |
| 中等 | Strix Halo + ROCm 上性能下降（预构建 b10079） | 推理变慢 | [开放](https://github.com/unslothai/unsloth/issues/7371) |
| 中等 | Intel Arc B60 Vulkan 在生成中途触发 `ErrorDeviceLost` | 会话死锁 | [开放](https://github.com/unslothai/unsloth/issues/11453) |

---

### **6. 对应用开发者的启示**  
- **大型量化模型（如 Gemma 4 26B A4B QAT）将产生更高的内存开销**，尤其在 <16 GB VRAM 的系统上。建议显式分层或启用卸载机制。  
- **在 RTX 50xx 系列上避免使用内置 CUDA 13.4 构建**，直至性能问题解决；生产环境请优先使用外部 `ggml` 构建。  
- **充分利用改进的错误可见性**：近期 PR (#8804, #11460) 确保日志可访问且失败原因清晰呈现，有助于在代理流水线中调试。  
- **设计时考虑工具调用去重**：若应用需要重复相同工具调用，请使用 `tool_call_dedup=False` ([#10379](https://github.com/unslothai/unsloth/issues/10379))。  
- **为未来做好准备：采用 MiCA**：随着 MiCA 已进入 Hugging Face PEFT，建议通过 `get_peft_model()` 集成，实现高效微调工作流 ([#6730](https://github.com/unslothai/unsloth/issues/6730))。  

> *建议*：关注 [Unsloth Studio 问题列表](https://github.com/unslothai/unsloth/issues) 与 [拉取请求](https://github.com/unslothai/unsloth/pulls)，获取硬件相关漏洞与新功能的实时更新。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*