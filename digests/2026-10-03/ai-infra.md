# AI 基础设施日报 2026-10-03

> 生成时间: 2026-10-03 01:23 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-10-03**

---

### **1. 生态概览**  
AI推理与服务生态正进入高度专业化与硬件融合的新阶段，以NVIDIA的Blackwell（SM120）和AMD的MI355X为代表的新一代GPU正同时推动创新与系统不稳定性。尽管vLLM、SGLang和llama.cpp在高吞吐推理的底层内核优化与性能调优方面处于领先地位，但Ollama和LiteLLM正日益聚焦于企业级代理、成本控制与跨服务商兼容性。Unsloth持续弥合本地运行时效率与原生智能体工作流之间的差距。然而，推测解码、内存管理及云服务稳定性等方面的广泛回归问题，凸显出随着技术栈快速演进，系统技术债务与测试盲区正在加剧。

---

### **2. 活动对比**

| 项目       | 今日开放的问题数 | 今日合并的PR数 | 近24小时发布数 | 状态摘要 |
|---------------|---------------------|--------------------|---------------------|----------------|
| **vLLM**      | 12                  | 8                  | 无                | 高度活跃于SM120/ROCm修复；关键回归导致生产环境无法使用 |
| **SGLang**    | 9                   | 7                  | 无                | 聚焦推测解码稳定性与ROCm/Metal扩展 |
| **llama.cpp** | 11                  | 5                  | 3 (b11364, b11362, b11355) | 发布节奏活跃；新增模型/硬件支持，但报告严重崩溃 |
| **Ollama**    | 10                  | 2                  | 无                | 重大云服务中断 + 安装程序签名问题；核心基础设施承受压力 |
| **LiteLLM**   | 7                   | 6                  | 1 (`v1.105.0-dev.2`) | 安全导向发布；高危预算强制漏洞仍开放 |
| **Unsloth**   | 8                   | 4                  | 无                | 张量分片解码性能下降；微调时显存效率低下 |

> ✅ *vLLM与llama.cpp展现出最高工程速度；Ollama面临系统性可靠性挑战。*

---

### **3. 模型支持竞赛**

| 新模型 / 架构         | 支持项目 | 备注 |
|----------------------------------|------------------------|-------|
| **GLM-5.3-Flash (NVFP4)**        | vLLM, SGLang, Unsloth    | vLLM在SM120上实现完整支持；SGLang报告前缀复用崩溃 |
| **DeepSeek-V4.1-Flash**          | vLLM, SGLang, Ollama     | vLLM在SM120上存在解码吞吐问题；SGLang修复共享专家融合 |
| **Qwen3.8-2.4T-A95B**            | vLLM, SGLang             | 两者均在进行ROCm内核调优 |
| **Nimble Decision Model**        | **llama.cpp** (b11364)   | 首个通过 `/v1/systemone` API 原生支持的项目 |
| **CoralBricks (GLM 5.3, DS-V4.1)** | **LiteLLM**              | 实现无需手动 `api_base` 覆盖的成本感知路由 |
| **Reka, QuickSilver Pro**        | **LiteLLM**              | 首批加入的一流OpenAI兼容服务商 |
| **Gemma 3 (text-only)**          | **Unsloth**              | 实验性支持进行中；带视觉能力的变体仍具挑战 |
| **Qwen3-TTS**                    | **Unsloth** (功能请求) | 尚未支持LoRA微调 |

> 🏆 *LiteLLM与llama.cpp在小众模型采纳上领先；vLLM主导主流大模型硬件集成。*

---

### **4. 性能前沿**

各项目优化方向呈现明显分化：

| 关注领域               | 领先项目                          | 关键进展 |
|--------------------------|-------------------------------------------|------------------|
| **KV缓存与前缀缓存** | vLLM, SGLang                            | vLLM #59504：异步KV加载竞争修复；SGLang #42295：HiCache缓存一致性改进 |
| **推测解码** | vLLM, SGLang, llama.cpp                 | vLLM：SM120上MTP接受率0%；SGLang：EAGLE导致前缀复用崩溃；llama.cpp：Qwen3.8 Flash上发生MTP崩溃 |
| **内核级优化** | vLLM, llama.cpp, SGLang                 | vLLM：FlashInfer SM120后端；llama.cpp：Metal flash attention搭配ALiBi/logit softcap |
| **量化效率** | Unsloth, vLLM, SGLang                   | Unsloth：微调时显存过度使用；vLLM：支持NVFP4/GLM-5.x |
| **分布式与分层服务** | vLLM, SGLang                           | vLLM：睡眠模式下CUDA图卸载 (#59160)；SGLang：统一Radix缓存用于流式处理 |

> 🔥 *SM120 GPU支持已成为主要性能前沿——对未来发展可扩展性至关重要，但当前极不稳定。*

---

### **5. 层级定位**

| 项目       | 层级定位                        | 核心差异化 |
|---------------|----------------------------------------|------------------------|
| **vLLM**      | **高性能推理引擎**   | 专为规模、延迟与硬件抽象优化（SM120、ROCm） |
| **SGLang**    | **高级推理编排**  | 专注推测解码、多模型路由与智能体逻辑 |
| **llama.cpp** | **本地运行时与边缘推理**    | 轻量、可移植，苹果硅/Metal支持强劲；适用于嵌入式系统 |
| **Ollama**    | **开发者网关与CLI工具链** | 将模型聚合为统一接口；大规模下可靠性不足 |
| **LiteLLM**   | **企业级推理代理**        | 成本追踪、预算强制、OpenTelemetry、多提供商路由 |
| **Unsloth**   | **智能体优化的本地运行时**     | 专注微调效率、JSONL保真度与多模型驻留 |

> 📌 *vLLM与SGLang正在推动分布式推理的边界；LiteLLM与Ollama作为面向应用的网关，成熟度差异显著。*

---

### **6. 趋势信号**

**从今日活动提取的行业趋势：**
1. **硬件特异性不稳定已成为新常态**：SM120与ROCm支持现已成为主要回归来源——表明**性能提升以牺牲稳定性为代价**。
2. **智能体工作负载正驱动基础设施变革**：`EAGLE`、`HiCache`与`UnifiedRadixCache`等工具反映出对**多轮状态保持**、**工具调用保真度**与**流式容错性**的日益增长需求。
3. **安全与合规已成为强制要求**：LiteLLM的cosign签名镜像与Ollama的Authenticode不匹配，凸显供应链完整性面临的日益增长的监管压力。
4. **微调内存开销是隐藏瓶颈**：Unsloth的显存消耗问题揭示了一个更广泛问题：**微调工具常低估资源需求**。
5. **模型多样性要求强大的路由逻辑**：新增Reka、QuickSilver Pro、CoralBricks与Nimble Decision Models表明，**代理层（LiteLLM）必须超越简单的API包装器**。

> 🚨 **对应用开发者建议**：  
> - 在vLLM/SGLang修复MTP问题前，避免在SM120上使用**夜间构建版本**。  
> - 在受监管环境中，请使用 **`v1.105.0-dev.2` 或更高版本**的LiteLLM。  
> - 若可靠性至关重要，请**锁定稳定版本**（如Ollama v0.34.4、llama.cpp b11364）。  
> - 预期**模型路由与成本追踪复杂度上升**——尽早设计可观测性架构。  
> - 密切监控**内存行为**，尤其是在微调与长时运行的智能体场景中。

---  
*由资深分析师，AI基础设施生态团队 —— 2026年10月3日整理*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM 摘要 – 2026-10-03**

---

### **1. 今日重点**  
vLLM 项目持续聚焦下一代硬件的稳定性与性能优化，针对 Blackwell（SM120）GPU 支持及推测解码正确性进行了关键修复。重要 PR 包括修复 GLM-5.3-Flash 在 SM120 上的 MTP 接受率下降问题，以及改进异步 KV 加载中的竞争条件。社区正在积极解决影响 DeepSeek-V4.1-Flash 和 GLM-5.3-Flash（ROCm 与 CUDA 平台）的高严重性回归问题。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新发布。*  
然而，`vllm/vllm-openai:nightly` 构建的持续工作表明，即将推出的变化可能影响：
- **CUDA Graph Pool Offload**：通过 `sleep_mode_offload_cudagraph` 开关启用（PR #59160），部分 nightly 镜像中已默认开启。
- **FlashInfer 内核管理**：新增 `vllm download-kernels` CLI 命令（PR #58765），可降低 Hopper+ GPU 的启动开销。

> 🔗 [PR #59160](https://github.com/vllm-project/vllm/pull/59160) | [PR #58765](https://github.com/vllm-project/vllm/pull/58765)

---

### **3. 新模型与硬件支持**  
- **SM120（Blackwell RTX 6000 Pro / 5080）**：正对 DeepSeek-V4.1-Flash、Qwen3-VL-8B-FP8 及 GLM-5.3-Flash 进行优化。问题 #56892 与 #59724 指出解码吞吐量低且 MTP 接受率为 0%。
- **ROCm（gfx950 / MI355X）**：正在跟踪 Qwen3.8-2.4T-A95B 性能表现（问题 #57149），并通过 PR #59333 与 #56679 等进行内核级调优。
- **模型新增**：Kimi K3 跟踪问题 (#50001)，GLM-5.x NVFP4 量化支持（PR #59833），以及 Qwen3.8-Flash-Next 统一内存 GPU 兼容性（PR #58439）。

> 🔗 [Issue #56892](https://github.com/vllm-project/vllm/issues/56892) | [PR #59833](https://github.com/vllm-project/vllm/pull/59833) | [PR #58439](https://github.com/vllm-project/vllm/pull/58439)

---

### **4. 性能与优化**  
- **推测解码**：由于原生 FLASHINFER_MLA_SPARSE_SM120 后端问题，SM120 上的 MTP 接受率降至 0%（问题 #59724）。修复待完成。
- **异步 KV 加载**：PR #59504 解决了异步加载过程中的零值竞争问题——显著提升分离式服务场景下的效率。
- **内核级优化**：ROCm PR #59333 与 #54916 提升了小矩阵 M 情况下的填充正确性及 fp32 路由 GEMM 性能。
- **内存效率**：PR #59160 在睡眠模式下启用 CUDA graph pool offload，大型 MoE 部署中每张 GPU 可减少数十 GiB 内存占用。

> 🔗 [Issue #59724](https://github.com/vllm-project/vllm/issues/59724) | [PR #59504](https://github.com/vllm-project/vllm/pull/59504) | [PR #59160](https://github.com/vllm-project/vllm/pull/59160)

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 摘要 | 修复状态 |
|--------|------|------|----------|
| 严重 | [#59724](https://github.com/vllm-project/vllm/issues/59724) | GLM-5.3-Flash（SM120，nightly）上 MTP 接受率为 0% | ✅ *PR 已提交*（PR #59833 尚未合并） |
| 高 | [#56892](https://github.com/vllm-project/vllm/issues/56892) | DeepSeek-V4.1-Flash（SM120）解码吞吐量极低 | ⚠️ *尚无修复；已优先处理* |
| 高 | [#59413](https://github.com/vllm-project/vllm/issues/59413) | 低并发下出现乱码输出（ROCm，GLM-5.3-Flash） | ⚠️ *尚无修复；nightly 可复现* |
| 中 | [#54359](https://github.com/vllm-project/vllm/issues/54359) | Kpool 索引器覆盖自身 KV 缓存（ROCm） | ❌ *尚无 PR* |

> 注意：多个问题涉及 **前缀缓存**、**推测解码** 与 **异步 KV 卸载**——这些是高吞吐推理流水线的核心组件。

---

### **6. 对应用开发者的启示**  
- **在 PR #59724 与 #56892 修复前，请避免在 SM120 GPU 上使用 nightly 构建**——预期会出现严重性能下降或崩溃。
- **安装后使用 `vllm download-kernels`**，以避免 Blackwell GPU 上的运行时编译延迟。
- **使用混合注意力模型（如 DeepSeek-V4.1）搭配推测解码时，需密切监控前缀缓存行为**——某些配置会静默禁用重用（问题 #57032）。
- **若运行长期推理服务且 GPU 内存受限，建议启用 `sleep_mode_offload_cudagraph`**（PR #59160）。
- **对于分离式或分层系统**，建议测试时启用 `--enforce-eager` 并监控准入策略（PR #51240 设计提案）。

> 🔗 [PR #59160](https://github.com/vllm-project/vllm/pull/59160) | [Issue #57032](https://github.com/vllm-project/vllm/issues/57032) | [RFC #51240](https://github.com/vllm-project/vllm/issues/51240)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

### **SGLang Digest — 2026-10-03**

#### **1. 今日亮点**  
SGLang 项目持续深化对推测解码和多模型服务的支持，针对 `EAGLE` 和 `DSpark` 的关键修复解决了前缀复用和 CUDA Graph 稳定性问题。今日重点 PR 集中于在高并发场景下稳定 `HiCache`、`UnifiedRadixCache` 及 `DeepSeek-V4` 的性能表现，同时新工作加速推进 AMD ROCm 集成并扩展扩散模型能力。

#### **2. 发布与破坏性变更**  
无。过去 24 小时内未发布新版本或破坏性变更。

#### **3. 新模型与硬件支持**  
- **AMD ROCm (gfx1151/gfx1250)**：新增 CI 测试及对 RDNA GPU 上 Quark MXFP4 MoE 模型的实验性支持，通过 Triton 内核实现（`PR #41389`）。  
- **Apple Silicon (Metal)**：持续推进 Metal 后端集成；`PR #42270` 更新内存缓存行为以适配未来 Metal 兼容性。  
- **扩散模型**：扩展对 LTX-2 和 DiffusionGemma（待运行时验证）的支持；`PR #42254` 增加 Foundry 适配器文档。  
- **新模型**：DeepSeek V4.1 跟踪问题已开启（`#42170`），正在进行重构与优化工作。

#### **4. 性能与优化**  
- **HiCache/UnifiedRadixCache**：修复写回 SWA 插入备份问题（`PR #42264`），并改进会话处理逻辑（`PR #42295`），提升流式负载下的缓存可靠性。  
- **DeepSeek-V4**：修复 NVFP4 LoRA/FP4 后端中共享专家融合的关键缺陷（`PR #42203`），防止错误权重访问并提升吞吐量。  
- **MoE 优化**：统一 MoE 路由 GEMM 层（`#38695`）旨在降低精度开销，提升跨专家路由效率。  
- **CUDA Graph 稳定性**：针对 SM120（RTX PRO 6000）上 `fa4` 注意力崩溃问题的临时方案仍依赖 `triton` 后端（`#42012`）。

#### **5. 稳定性与回归问题**  
| 问题 | 严重性 | 描述 | 修复状态 |
|------|----------|-------------|------------|
| [#42012](https://github.com/sgl-project/sglang/issues/42012) | 严重 | `fa4` 注意力后端在 GLM-5.3-Flash（SM120）混合扩展捕获期间崩溃 | ✅ 临时方案：使用 `triton` 后端 |
| [#42146](https://github.com/sgl-project/sglang/issues/42146) | 高 | C4 索引行分块规划器默认被禁用 `SGLANG_FP8_PAGED_MQA_LOGITS_TORCH=True`，导致 128k 上下文时内存占用增加约 3.3–3.8 GiB | ⚠️ 正在调查根本原因 |
| [#32459](https://github.com/sgl-project/sglang/issues/32459) | 高 | EAGLE 推测解码在 GLM-DSA NVFP4 上静默导致前缀复用率下降（97% → 40-53%） | ❌ 尚无修复；影响多轮对话代理 |
| [#42143](https://github.com/sgl-project/sglang/issues/42143) | 中 | HarmonyParser 在流式输出时将工具调用参数作为推理内容输出 | 🟡 正在处理 |
| [#42269](https://github.com/sgl-project/sglang/issues/42269) | 中 | 当启用 `response_format` 为 JSON + `glm47` 解析器时，工具调用被静默丢弃 | 🟡 正在处理 |

#### **6. 对应用开发者的启示**  
- **在 SM120（RTX PRO 6000）上使用 `GLM-5.3-Flash` 时，请暂时使用 `triton` 后端**，直到 `fa4` 崩溃问题修复（`#42012`）。  
- **若关注内存占用，避免在 DeepSeek-V4 中启用 `SGLANG_FP8_PAGED_MQA_LOGITS_TORCH=True`** —— 该配置会禁用 C4 索引，显著增加内存使用量（`#42146`）。  
- **注意 `glm47` 解析器与 `response_format` 的组合行为**：两者同时启用时，工具调用可能被静默丢弃（`#42269`）。  
- **在 GLM-DSA NVFP4 上使用 `EAGLE` 推测解码处理多轮对话流量时，预期前缀复用性能下降**（`#32459`）。  
- **推荐使用 `UnifiedRadixCache` 以保障流式会话稳定性**；避免混用非流式树形缓存（`PR #42295`）。  

> 🔗 *浏览近期 PR：[42295](https://github.com/sgl-project/sglang/pull/42295), [42203](https://github.com/sgl-project/sglang/pull/42203), [42264](https://github.com/sgl-project/sglang/pull/42264)*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 消息简报 – 2026-10-03**

---

### **1. 今日亮点**  
最新版本（`b11364`）引入了对 *Nimble Decision Model* 的支持，扩展了可通过 `llama.cpp` 提供服务的专用推理模型范围。性能方面，Metal 现已加入针对 F16 KV 的新型 flash attention 内核，支持 attention sinks、ALiBi 和 logit softcap —— 这些特性对于大上下文场景下的高效推测解码至关重要。

---

### **2. 版本发布与破坏性变更**  
- **版本 b11364**：通过 `model: support nimble decision model` 添加对 *Nimble Decision Model* 的运行时支持 ([#29844](https://github.com/ggml-org/llama.cpp/pull/29844))。  
- **版本 b11362**：为 Metal 引入基于 tensor API 的 flash attention 内核，支持 F16 KV，功能完整（含 attention sinks、ALiBi、logit softcap）——无需配置调整，但预计在 Apple Silicon 上将显著提升推测解码效率。  
- **版本 b11355**：在拥有 32KB 共享内存的三星 GPU 上禁用大矩阵乘法分块，以防止流水线阻塞 ([#28531](https://github.com/ggml-org/llama.cpp/pull/28531))。

> 🔗 [GitHub 发布记录](https://github.com/ggml-org/llama.cpp/releases)

---

### **3. 新模型与硬件支持**  
- ✅ **模型支持**：  
  - 通过 `/v1/systemone` API 新增 `clef` 决策模型（纯文本）支持 ([#29818](https://github.com/ggml-org/llama.cpp/pull/29818), [#29831](https://github.com/ggml-org/llama.cpp/pull/29831))。  
  - `Prism Bonsai 2 27B` 现已在运行时支持 ([#29600](https://github.com/ggml-org/llama.cpp/pull/29600))。  
- ✅ **硬件与后端**：  
  - **Hexagon**：为高通 HTP 增加 `q2_k` 与 `q3_k` 量化类型支持 ([#29717](https://github.com/ggml-org/llama.cpp/pull/29717))，使边缘设备实现低比特量化成为可能。  
  - **Vulkan**：优化管线编译期间的日志输出 ([#29794](https://github.com/ggml-org/llama.cpp/pull/29794))，并在三星 GPU 上禁用有问题的 matmul 分块 ([#28531](https://github.com/ggml-org/llama.cpp/pull/28531))。  
  - **SYCL**：持续优化 Intel Arc B70 性能，并集成基于 MKL 的 flash attention 支持 GLM-4.7 ([#29171](https://github.com/ggml-org/llama.cpp/pull/29171))。  

---

### **4. 性能与优化**  
- **Metal Flash Attention**：新 tensor API 内核显著加快推测解码速度，降低延迟，尤其适用于使用 attention sinks 或 ALiBi 的模型 ([#29570](https://github.com/ggml-org/llama.cpp/pull/29570))。  
- **CUDA**：优化多行 TOP_K 的分段基数排序逻辑 ([#29883](https://github.com/ggml-org/llama.cpp/pull/29883)) —— 高并发负载下预期提升约 15–20% 的 top-k 采样吞吐量。  
- **Vulkan**：使用 subgroup reduction 优化 RMS norm 计算 ([#29882](https://github.com/ggml-org/llama.cpp/pull/29882)) —— 初步基准测试显示在 Intel Arc B70 上提升 12%。  
- **SYCL**：重新排列 IQ3_S/IQ3_XXS 布局与反量化路径，在 Intel Arc Pro B70 上实现最高达 2.1 倍的性能提升 ([#29107](https://github.com/ggml-org/llama.cpp/pull/29107))。  
- **Qwen4exp**：对 Qwen4exp 与 GLM5-next 应用掩码构造优化 ([#29824](https://github.com/ggml-org/llama.cpp/pull/29824)) —— 有效减少混合架构中的预填充开销。

---

### **5. 稳定性与回归问题**  
⚠️ **今日报告的关键问题**：  
- **[#29811]**：在启用 MTP 草稿模式运行 Qwen 3.8 Flash 时，启动阶段出现断言失败 —— 可能由张量维度不匹配或状态初始化错误导致。尚未有修复合并请求。  
- **[#29786]**：在高通 Adreno 驱动上，使用 `-ngl >= 1` 时 Vulkan 静默崩溃（`SIGABRT`，无错误输出）—— 影响移动端与嵌入式部署。暂无修复方案。  
- **[#29521]**：在 macOS Metal 上，使用默认 `n_ctx` 运行 Gemma 4 31B 时出现内存溢出和计算错误（-3）—— 可能需手动减小上下文大小或调优显存分配。  
- **[#27428]**：在多 GPU 层拆分场景下，Draft-MTP 使提示处理速度减半（单卡正常）—— 推测为后端同步问题；多位用户已报告。

> 🔗 [问题 #29811](https://github.com/ggml-org/llama.cpp/issues/29811) | [问题 #29786](https://github.com/ggml-org/llama.cpp/issues/29786) | [问题 #29521](https://github.com/ggml-org/llama.cpp/issues/29521) | [问题 #27428](https://github.com/ggml-org/llama.cpp/issues/27428)

---

### **6. 对应用开发者的启示**  
- **谨慎使用 `draft-mtp`**：尽管推测解码功能强大，但近期在 MTP + Vulkan/Metal 上的回归问题表明其在特定硬件（尤其是 AMD/Radeon 与 Adreno）上仍不稳定。生产环境请勿使用，待修复后再上线。  
- **优先启用 Metal flash attention**：若在 Apple Silicon 上部署长上下文模型（如 Laya、Julia-1），建议开启新的 F16 KV flash kernel —— 显著提升推测吞吐能力。  
- **警惕 Qwen3.8 Flash + MTP 组合**：问题 `#29811` 表明存在严重兼容性缺陷 —— 在修复前避免此组合。  
- **准备模型专属配置**：随着对 Clef、Prism Bonsai、Nimble Decision Model 等小众模型的支持增多，确保应用能动态处理 `/v1/systemone` 与新接口。  
- **监控 M5 Max 的内存使用**：高内存模型如 Gemma 4 31B 即便在 128GB 系统上也可能触发 OOM —— 建议主动调小 `n_ctx` 或激进使用 `--memory-fraction`。

> 📌 **建议**：在 Apple Silicon 上进行推测解码推理时使用 `b11364`，但请避免在问题 #29811 修复前使用 MTP + Qwen3.8 Flash。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-10-03**

---

### **1. 今日亮点**  
Ollama Cloud Pro 出现严重回归问题，用户报告所有云托管模型的失败率高达 95%，导致服务基本无法使用。与此同时，Windows 与 macOS 平台相继暴露出多项稳定性问题，包括 Vulkan GPU 检测失败、MLX 引擎内存分页行为异常，以及新报告的 v0.35.1 Windows 安装程序中 Authenticode 签名不匹配问题。这些问题凸显了核心基础设施的日益不稳定，尤其是在跨平台硬件支持与运行时完整性方面。

---

### **2. 发布与破坏性变更**  
*无*  
过去 24 小时内未发布新版本。然而，**v0.35.1** 因报告存在 **Authenticode HashMismatch**（见 [#18765](https://github.com/ollama/ollama/issues/18765)）而受到关注，可能阻碍依赖已签名可执行文件的企业部署。

---

### **3. 新模型与硬件支持**  
- **MLX 引擎扩展**：PR [#18755](https://github.com/ollama/ollama/pull/18755) 引入 Strands Decider 集成以支持决策模型，通过 MLX 实现在 Apple Silicon 上更复杂的代理逻辑。
- **Granite 模型支持**：PR [#17972](https://github.com/ollama/ollama/pull/17972) 为 MLX 运行器添加对 `GraniteForCausalLM` 架构的实验性支持，拓展与 IBM Granite 4.1/4.2 系列的兼容性。
- **ROCm + CUDA 双运行时支持**：功能请求 [#18545](https://github.com/ollama/ollama/issues/18545) 呼吁在 Linux 上支持双运行时下载——这是多 GPU 系统（如 7800XT + 4060Ti）的关键前提。

---

### **4. 性能与优化**  
- **GPU 内存效率**：问题 [#18756](https://github.com/ollama/ollama/issues/18756) 报告 ROCm GPU 在模型逐出时忽略可用 VRAM，导致即使空间充足仍提前卸载——对多模型推理构成显著性能瓶颈。
- **MLX 内存管理**：PR [#18744](https://github.com/ollama/ollama/issues/18744) 显示，在 macOS 上 MLX 引擎于请求后约 2 秒解绑模型权重，造成内存压力下的页面加载，增加空闲重启时的延迟。
- **并行性限制**：问题 [#18750](https://github.com/ollama/ollama/issues/18750) 表明，`nimble:latest` 即使通过环境变量设置也强制 `numParallel=1`，严重限制高核心数系统上的吞吐量。

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 影响 | 修复状态 |
|--------|------|------|----------|
| 🔴 严重 | [#15453](https://github.com/ollama/ollama/issues/15453) | Ollama Cloud Pro 上所有模型不可访问，失败率高达 95% | 尚无修复；重大服务中断 |
| 🔴 严重 | [#18765](https://github.com/ollama/ollama/issues/18765) | Windows 安装程序无法通过 Authenticode 验证 | 尚无修复；阻碍可信部署 |
| 🟡 高 | [#18754](https://github.com/ollama/ollama/issues/18754) | MLX 未充分利用 M4 Pro（48GB 内存）的 GPU 资源 | 尚无修复；性能下降明显 |
| 🟡 高 | [#18672](https://github.com/ollama/ollama/issues/18672) | Windows 上 Intel UHD iGPU 无法通过 Vulkan 检测到 | 尚无修复；限制低端 GPU 使用 |
| 🟡 中 | [#18762](https://github.com/ollama/ollama/issues/18762) | 工具结果按位置关联而非 `tool_call_id` | PR [#18763](https://github.com/ollama/ollama/pull/18763) 已提交——待评审 |
| 🟡 中 | [#18756](https://github.com/ollama/ollama/issues/18756) | ROCm 在模型逐出时忽略 VRAM | 与 #16462 重复；尚未解决 |

---

### **6. 对应用开发者的启示**  
- **暂勿使用 Ollama Cloud Pro**，直至 [#15453](https://github.com/ollama/ollama/issues/15453) 修复——当前无法用于生产环境。
- **本地推理更安全**：建议使用自托管实例（`localhost:11434`）以规避云服务不稳定性。确保 CI/CD 流水线验证 v0.35.1 版本，因安装程序签名问题可能影响部署。
- **在 macOS 上谨慎使用 MLX**：预计在空闲期后出现延迟飙升，因内存分页机制（见 [#18744](https://github.com/ollama/ollama/issues/18744)）。建议预热模型，或避免在长时运行代理中使用 MLX。
- **工具调用可靠性**：不要假设 `/v1/chat/completions` 中的结果能正确通过 `tool_call_id` 关联。当前行为不可靠，除非应用来自 PR [#18763](https://github.com/ollama/ollama/pull/18763) 的修复。
- **硬件多样性**：若使用混合 GPU 配置（NVIDIA + AMD），请手动选择运行时，或等待 [#18545](https://github.com/ollama/ollama/issues/18545) 解决。

> ✅ *建议*：若稳定性为首要目标，可临时锁定至 v0.34.4。持续关注 PRs [#18763](https://github.com/ollama/ollama/pull/18763) 与 [#18755](https://github.com/ollama/ollama/pull/18755) 以获取即将发布的修复。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 摘要 – 2026-10-03**

---

### **1. 今日亮点**  
LiteLLM 继续强化其企业级推理代理能力，针对预算控制、成本追踪以及高负载场景下的稳定性问题进行了关键修复。今日的关键 PR 解决了模型路由一致性、向量存储访问控制以及 OpenTelemetry 跟踪完整性等长期问题——尤其在 Bedrock 与 Anthropic 集成方面表现突出。新增对 Reka 与 QuickSilver Pro 的支持，进一步扩展了 OpenAI 兼容后端生态。

---

### **2. 发布与破坏性变更**  
- 今日发布 **v1.105.0-dev.2**，增强安全性：所有 Docker 镜像现通过 [cosign](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0) 签名，使用在提交 `0112e53` 中引入的统一密钥。  
  🔐 **验证签名**：请使用 `cosign verify` 并配合仓库 `.sigstore/` 目录中的公钥进行校验。  
  📌 *注：本次发布无破坏性 API 变更；重点在于完整性与合规性。*

---

### **3. 新模型与硬件支持**  
- ✅ **Reka** 通过 [PR #44278](https://github.com/BerriAI/litellm/pull/44278) 作为首类 OpenAI 兼容提供方加入，现已支持 `reka/` 路由并具备完整的成本追踪功能。  
- ✅ **QuickSilver Pro** 通过 [PR #44303](https://github.com/BerriAI/litellm/pull/44303) 以 JSON 配置方式集成，作为 OpenAI 兼容提供方。  
- ✅ **CoralBricks**（GLM 5.3，DeepSeek V4.1 Flash）通过 [PR #35957](https://github.com/BerriAI/litellm/pull/35957) 加入——支持无需手动覆盖 `api_base` 的成本感知路由。  
- ✅ **Amazon Nova 2 Pro（预览版）** 现已在目录中按标准层级费率正确定价 ([PR #44302](https://github.com/BerriAI/litellm/pull/44302))。

---

### **4. 性能与优化**  
- ⚡ **降低提示缓存有效性检查开销**：[PR #44221](https://github.com/BerriAI/litellm/pull/44221) 停止在缓存有效性检查时对整个对话进行分词——显著提升长上下文提示的延迟表现。  
- 📊 **优化数据库操作的 OTEL span 命名**：[PR #44240](https://github.com/BerriAI/litellm/pull/44240) 按操作类型与表名命名 PostgreSQL span，提升可观测性。  
- 🧠 **改进代理流式传输的容错能力**：[PR #44276](https://github.com/BerriAI/litellm/pull/44276) 在提供方于首个内容块前断开连接时，自动重试 `/v1/messages` 流——对 Databricks AI 等不可靠后端至关重要。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 状态 | 修复 PR |
|--------|------|-------|--------|
| 🔴 高 | v1.82.3 版本中预算强制机制被绕过（`max_budget` 被忽略，即使支出已超限） | 开放 | [Issue #26672](https://github.com/BerriAI/litellm/issues/26672) |
| 🔴 高 | `model_max_budget` 对终端用户不生效 | 开放 | [Issue #31842](https://github.com/BerriAI/litellm/issues/31842) |
| 🔴 高 | 错误使用 `RateLimitError` 处理不可重试的 `insufficient_quota` 错误 → 导致无限重试循环 | 开放 | [Issue #32785](https://github.com/BerriAI/litellm/issues/32785) |
| 🟡 中 | S3 日志文件名与 RDS 中的 `request_id` 不匹配 | 开放 | [Issue #32028](https://github.com/BerriAI/litellm/issues/32028) |
| 🟡 中 | OTLP span 事件在写入 ClickHouse 前被静默丢弃 | 开放 | [Issue #44274](https://github.com/BerriAI/litellm/issues/44274) |
| 🟡 中 | 内存状态污染：非标准参数被重新注入到所有后续请求中 | 开放 | [Issue #32112](https://github.com/BerriAI/litellm/issues/32112) |

> 💡 **注意**：多个高严重性缺陷正在通过 PR 积极修复，但尚未合并。请避免在修补前使用 v1.82.3+ 版本。

---

### **6. 对应用开发者的意义**  
- **使用 `v1.105.0-dev.2` 或更高版本** 进行安全、可验证的部署——尤其适用于受监管环境。始终通过 cosign 校验镜像签名。  
- **避免在 v1.82.3–v1.90.x 版本中使用 `max_budget` 与 `model_max_budget`**，因存在已知的强制执行缺陷——立即升级或实施客户端侧检查。  
- **充分利用新支持的提供方（Reka、QuickSilver Pro、CoralBricks）** 实现多厂商 LLM 路由，并享受原生成本追踪能力——不再需要手动修改 `api_base`。  
- **预期代理工作流可靠性提升**：流恢复逻辑 ([#44276](https://github.com/BerriAI/litellm/pull/44276)) 与更优错误处理将减少代理流水线中的沉默失败。  
- **密切监控您的跟踪数据**：OTLP 事件丢失修复 ([#44274](https://github.com/BerriAI/litellm/issues/44274)) 尚未完成——在修复前，自定义 span 数据可能在 ClickHouse 中丢失。

👉 **建议**：固定使用 `litellm:v1.105.0-dev.2` 或更高版本，并审计生产代理中所有预算逻辑。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# **Unsloth Digest – 2026-10-03**

---

### **1. 今日亮点**  
Unsloth 生态系统持续扩展其代理与多模型能力，关键 PR 实现了 JSONL 导出保真度、聊天历史中的工具调用保留，以及对多个驻留 GGUF 模型的支持。然而，严重的性能退化问题浮现——自 `b10715-mix-86bd2d3` 版本以来，张量拆分解码速度**下降约 2.9 倍**，严重影响双 GPU 配置下的推理吞吐量。与此同时，微调期间的显存过度使用仍是首要关切，用户报告即使有大量空闲内存仍出现 OOM 错误。

---

### **2. 发布与破坏性变更**  
过去 24 小时内无新发布或破坏性变更报告。

---

### **3. 新模型与硬件支持**  
- ✅ **Qwen3-TTS**：功能请求 (#3951) 已提出，要求支持 LoRA 微调；该模型已兼容 Hugging Face Transformers。  
- ✅ **Gemma 3（仅文本版本）**：问题 #12554 指出保存/加载具备视觉能力的大语言模型的纯文本版本存在挑战——表明仍在推进完整多模态模型灵活性。  
- ✅ **Qwen-Image-2.1**：PR #12470 提议在下载 GGUF 时增加文本编码器选择功能，以避免强制加载高内存密集编码器（约 17GB）。  
- ✅ **Windows 桌面端**：PR #11327 允许配置后端安装目录（此前固定为 `%USERPROFILE%\.unsloth\studio`）。  

> 🔗 [Issue #3951](https://github.com/unslothai/unsloth/issues/3951) | [PR #12470](https://github.com/unslothai/unsloth/pull/12470) | [PR #11327](https://github.com/unslothai/unsloth/pull/11327)

---

### **4. 性能与优化**  
- ⚠️ **严重推理性能退化**：自 `b10715-mix-86bd2d3` 起，双 RTX 5070 Ti GPU 上的张量拆分解码（`--split-mode tensor`）性能**下降约 2.9 倍**，从稳定版本的 **115–118 t/s** 降至 **约 48 t/s**。此问题影响原生 Windows 与 WSL2 环境。  
  > 🔗 [Issue #12468](https://github.com/unslothai/unsloth/issues/12468)  
- 📈 **多模型服务支持**：PR #10876 引入实验性支持 **多个驻留 GGUF 模型**，每个模型运行于独立的 `llama-server` 进程中——实现并发模型服务且无需重载开销。  
- 🛠️ **微调显存开销过高**：问题 #4504 报告微调阶段使用的显存远超官方声明，即使仅使用 1/3 显存，大型 GPU（如 24GB T4）也频繁触发 OOM。  
  > 🔗 [Issue #4504](https://github.com/unslothai/unsloth/issues/4504)

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 描述 | 修复状态 |
|--------|------|------------|-----------|
| 🔴 高 | [Issue #12468](https://github.com/unslothai/unsloth/issues/12468) | b10715-mix-86bd2d3 后张量拆分解码性能下降 2.9 倍 | ❌ 待处理 |
| 🔴 高 | [Issue #4504](https://github.com/unslothai/unsloth/issues/4504) | 微调占用过多显存 → 大模型出现 OOM | ❌ 待处理 |
| 🟡 中 | [Issue #9867](https://github.com/unslothai/unsloth/issues/9867) | Qwen3.8-27B bnb-4bit 训练因 `bitsandbytes` 量化权重形状错误崩溃 | ✅ 已通过 #10017 / #10276 修复 |
| 🟡 中 | [Issue #12518](https://github.com/unslothai/unsloth/issues/12518) | “生成停止进展” + `chat_generation_run_lease_expired` | ❌ 待处理 |
| 🟡 中 | [Issue #12364](https://github.com/unslothai/unsloth/issues/12364) | OpenAI 兼容 API 每次请求增加约 1.2 秒固定延迟 | ❌ 待处理 |

> 注：多个稳定性问题源于近期 CI/CD 与构建流水线变更，包括 CUDA graph 处理退化及量化状态加载错误。

---

### **6. 对应用开发者的影响**  
- 若依赖高吞吐张量拆分推理，请**避免使用最近版本（`b10715-mix-*` 及以后）**，建议回退至 `b10687-mix-67dfc8b` 或官方 `ggml-org` 构建，直至回归问题修复。  
- **不要假设微调显存使用稳定**——预期显存消耗可能比声明值高出最多 2 倍，需据此规划 GPU 分配。  
- **利用新推出的多模型驻留功能（PR #10876）**，适用于需要并发访问多个模型的代理系统（如路由代理分配至不同模型）。  
- **注意工具调用结果保留**：近期导出（JSONL、Markdown）可能丢失早期工具结果，除非显式保留——请使用 PR #12574 确保保真度。  
- **通过桌面应用使用本地模型**：PR #12582 使代理桌面应用（OpenCode、OpenClaw、Hermes）可直接连接本地运行的 Unsloth 模型——非常适合低延迟、私有化的 AI 工作流。

> 🔗 [PR #10876](https://github.com/unslothai/unsloth/pull/10876) | [PR #12574](https://github.com/unslothai/unsloth/pull/12574) | [PR #12582](https://github.com/unslothai/unsloth/pull/12582)

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*