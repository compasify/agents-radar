# AI 基础设施日报 2026-09-13

> 生成时间: 2026-09-13 00:29 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# **跨项目AI基础设施生态报告 – 2026-09-13**

---

### **1. 生态概览**  
AI推理与服务生态正进入高度专业化与硬件融合的新阶段，针对下一代GPU（Blackwell sm_120/121、GB10、MI355X）的深度优化正推动创新。各项目发展方向日趋分化：部分聚焦低延迟、生产级服务（vLLM、SGLang），部分强调开发者体验与智能体工作流（Ollama、LiteLLM），而以Unsloth为代表的训练类工具则在微调效率上持续突破。推测解码、MoE卸载与结构化输出可靠性已成为显著趋势，反映出从单纯模型性能向稳健、可扩展部署的转变——尤其对智能体系统而言。

---

### **2. 活跃度对比**

| 项目       | 开放问题数 (↑) | 合并的PR数 (↑) | 发布状态             |
|------------|----------------|----------------|------------------------|
| **vLLM**   | 87             | 42             | `v0.28.1rc1` → `v0.29.0` 待发布 |
| **SGLang** | 123            | 37             | 无新版本；稳定性问题严重 |
| **llama.cpp** | 141         | 35             | `b10934`、`b10933`、`b10930`（测试版构建） |
| **Ollama** | 118            | 19             | 无新版本；存在多个高危回归 |
| **LiteLLM** | 134          | 24             | 稳定版 v1.83.x；v1.84.0 回归未解决 |
| **Unsloth** | 96           | 26             | 无发布；Docker修复 #10825 至关重要 |

> 🔺 *注*：高活跃度通常对应复杂硬件集成（如 Blackwell、GB10）与智能体工作流成熟度。Ollama 与 LiteLLM 社区参与度高，但在稳定性修复上滞后。

---

### **3. 模型支持竞赛**

| 模型 / 架构               | vLLM     | SGLang   | llama.cpp | Ollama   | LiteLLM         | Unsloth       |
|----------------------------|----------|----------|-----------|----------|------------------|----------------|
| **DeepSeek-V4.1-Flash**    | ✅ 正在收尾 | ✅ SM121 支持 | ❌ (GPU回退) | ⚠️ 上下文溢出 | ✅ 通过提供方支持 | 🟡 已请求 (#10838) |
| **Qwen3.5 / Qwen4Exp**     | ✅ 支持   | ✅ 支持   | ⚠️ MTP 降速 | ✅ 支持   | ✅ 支持           | ✅ 支持         |
| **Gemma 4 E4B 多模态**     | ✅ 支持   | ✅ 支持   | ✅ 支持   | ❌ Jetson 上内存溢出 | ✅ 支持           | ✅ 支持         |
| **MoE 模型 (WNA16 INT4)**  | ✅ 卸载 RFC | ✅ DeepGEMM 后端 | ❌ 静默损坏 | ✅ 支持   | ✅ 支持           | ✅ EXL3 支持     |
| **Blackwell (sm_120/121)**  | 🚧 DFlash2 崩溃 | 🔴 FP8 正确性缺陷 | ✅ CUDA 回退 | ⚠️ 上下文泄露 | ✅ 网关支持       | ✅ ROCm/Docker 支持 |

> 🏆 **领先者**：**vLLM** 在模型特定优化（如 DeepSeek-V4.1 Flash）方面领先，尤其在推测解码与 MoE 方面表现突出。  
> 🥈 **亚军**：**SGLang** 在启用 Blackwell 特性（FP8、VibeCUDA）方面最快，但存在严重正确性问题。  
> 🛠 **细分创新者**：**Unsloth** 凭借 EXL3 量化与 AMD ROCm Docker 支持脱颖而出——特别适合边缘与研究场景。

---

### **4. 性能前沿**

| 关注领域                  | vLLM                     | SGLang                    | llama.cpp             | Ollama               | LiteLLM                 | Unsloth               |
|----------------------------|--------------------------|---------------------------|------------------------|----------------------|--------------------------|------------------------|
| **KV缓存优化**             | mHC 融合、SWA 调优       | 统一 KV 缓存（FP8）        | —                      | 会话元数据           | 实时模型发现             | —                      |
| **批处理与不变性**         | 批处理无关推理            | 会话ID路由                | —                      | 上下文截断           | 预算感知路由             | 提示进度界面           |
| **量化效率**               | Marlin W4A8-FP8           | FP8 双池缓存              | IQ 量化（回退）       | —                    | 成本追踪                 | EXL3（2–8位 MoE）      |
| **分布式服务**             | 异步 TP + SP              | GPU 缓存 + 异步流水线      | —                      | —                    | 多提供方网关             | —                      |
| **内核级调优**             | DFlash2、HiSparse P/D     | MLA 目标复用、FP8 GEMM     | CUDA 图挂起            | Vulkan 降速          | JWT 声明灵活性           | TRL 补丁修复           |

> 🔍 **趋势**：前沿已从通用吞吐转向**硬件特异性内核调优**、**结构化输出完整性**以及**分布式状态管理**——尤其在使用推测解码与工具调用的智能体系统中更为关键。

---

### **5. 层级定位**

| 项目       | 主要层级                     | 核心差异化                                  |
|------------|------------------------------------|-----------------------------------------------------|
| **vLLM**   | **推理引擎**               | 最高吞吐，专为 H20/GB10 优化，支持 MoE 卸载 |
| **SGLang** | **推理引擎 + 智能体运行时** | 高级推测解码，会话感知路由 |
| **llama.cpp** | **本地运行时 / 边缘后端**   | 跨平台，CPU/GPU 混合，轻量工具链 |
| **Ollama** | **开发者网关 / 本地 CLI**  | 简洁用户体验，智能体优先设计，支持 Web UI 集成 |
| **LiteLLM** | **编排与网关层**          | 多提供方路由，成本预算控制，实时发现 |
| **Unsloth** | **微调与训练平台**        | 快速 LoRA SFT，Docker Studio，EXL3 量化 |

> 💡 **战略洞察**：技术栈正趋于模块化：**引擎**（vLLM/SGLang）→ **运行时**（llama.cpp）→ **网关/编排器**（LiteLLM）→ **训练层**（Unsloth）。开发者如今可跨层级组合管线。

---

### **6. 趋势信号**

1. **硬件特异性崩溃成为新瓶颈**：  
   - GB10（sm_121a）、Blackwell（sm_120/121）和 AMD MI355X 正暴露深层内核级不兼容问题（如 FP8 损坏、CUDA 图失败）。  
   → *关注点*：项目应按架构发布稳定内核，而非仅追求模型支持。

2. **推测解码已成生产关键，非实验性功能**：  
   - 所有主流引擎（vLLM、SGLang、Ollama）均大力投入 DFlash2、MTP 与 MLA 优化。  
   → *关注点*：长期上下文下的草稿接受逻辑稳定性与令牌一致性。

3. **结构化输出成为新质量标准**：  
   - JSON Schema、基于语法解析与工具调用顺序在静默中失败（如 `json_object`、`anyOf` 序列化）。  
   → *关注点*：使用智能体工作流时，需验证输出保真度——而不仅是速度。

4. **多提供方系统的预算控制已失效**：  
   - LiteLLM 的 `model_max_budget` 可绕过共享 Redis 消费，可能导致副本间超额计费。  
   → *关注点*：在 [#33325](https://github.com/BerriAI/litellm/issues/33325) 修复前，实施外部监控。

5. **智能体工作流需端到端验证**：  
   - 从模型加载（Ollama `qwen3.8`）到工具发射顺序（Ollama #18411）再到推理状态（LiteLLM #40887），链条脆弱。  
   → *关注点*：测试完整智能体流程——而非单个组件。

---

> ✅ **开发者可操作建议**：  
> - **用于生产推理**：暂用 `v0.28.1rc1`（vLLM）或 `v1.83.x`（LiteLLM），待稳定性修复落地。  
> - **用于智能体应用**：避免使用 `--moe-runner-backend deep_gemm`（SGLang）、`max_num_seqs > 256`（vLLM）、`qwen3.8`（Ollama），直至回归修复。  
> - **用于边缘/微调场景**：在内存受限或 ROCm 环境中，使用 Unsloth 的 EXL3 后端与 AMD Docker 镜像。  
> - **用于多提供方网关**：监控 LiteLLM 的预算控制，并在 API 层实现速率限制。

*数据来源：截至 2026-09-13 的 GitHub 摘要、PR 与议题跟踪器。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

### **vLLM Digest — 2026-09-13**

---

#### **1. 今日亮点**  
vLLM 项目正全力推进对 **DeepSeek-V4.1-Flash** 的支持，覆盖多个前端，针对 H20 与 GB10 硬件在高并发负载下的关键性能与稳定性修复。与此同时，推测解码（DFlash2）、MoE 专家卸载以及批处理无关推理等核心优化正在加速推进，为大规模生产级 LLM 服务提供关键支撑。

---

#### **2. 发布与破坏性变更**  
*过去 24 小时内未报告任何内容。*  
无新版本发布，亦无破坏性 API/配置变更。最新稳定版本仍为 `v0.28.1rc1`，`v0.29.0` 的开发工作持续进行中。

---

#### **3. 新模型与硬件支持**  
- ✅ **DeepSeek-V4.1-Flash**: 正通过如 [#56227](https://github.com/vllm-project/vllm/pull/56227)（SWA 有界重放）和 [#56633](https://github.com/vllm-project/vllm/pull/56633)（mHC 后块融合）等合并请求完成全面支持。  
- 🚧 **SM8x (Ampere: A100/A800/RTX 30xx)**: 针对 DeepSeek-V4-Flash 支持的活跃功能请求 [#50576](https://github.com/vllm-project/vllm/issues/50576) 当前因内核兼容性问题受阻。  
- 🌐 **ROCm (AMD MI355X)**: 针对 DeepSeek-V4.1-Flash 的性能优化正在进行中 ([#56506](https://github.com/vllm-project/vllm/issues/56506))，包括 CI 改进 ([#51057](https://github.com/vllm-project/vllm/issues/51057)) 与模型特定调优。  
- 🔧 **GB10 (sm_121a)**: 多个问题已报告（例如 [#56461](https://github.com/vllm-project/vllm/issues/56461), [#56457](https://github.com/vllm-project/vllm/issues/56457)），影响 DFlash2、Qwen4Exp 及 SWA 缓存行为——表明该硬件仍处于早期阶段的特异性挑战。

---

#### **4. 性能与优化**  
- ⚡ **推测解码（DFlash2）**:  
  - PR [#56633](https://github.com/vllm-project/vllm/pull/56633): 将 mHC 后块融合至延迟预投影中——减少 DSv4.1 中冗余的内核启动。  
  - PR [#56464](https://github.com/vllm-project/vllm/pull/56464): 集成 **DeepSelect TopK** 实现稀疏注意力，支持更快且可选的 top-k 路由。  
- 📈 **MoE 与卸载**:  
  - RFC [#38256](https://github.com/vllm-project/vllm/issues/38256): 增量式 MoE 专家卸载，结合 GPU 缓存与异步流水线——使小型 GPU 上运行大型 MoE 模型成为可能。  
- 🔄 **批处理无关性**:  
  - 问题 [#27433](https://github.com/vllm-project/vllm/issues/27433) 跟踪批处理无关推理的稳定性改进；近期在启用 SP/异步 TP 时检测到回归 ([#56370](https://github.com/vllm-project/vllm/issues/56370))。  
- 📊 **吞吐量提升**:  
  - PR [#55398](https://github.com/vllm-project/vllm/pull/55398): HiSparse P/D 传输现在尽可能直接落地于 GPU——减少主机内存瓶颈。  
  - PR [#53867](https://github.com/vllm-project/vllm/pull/53867): 在 PCP 的仅解码模式中启用 FULL CUDA 图，提升吞吐量一致性。

---

#### **5. 稳定性与回归问题**  
- 🔥 **严重崩溃**:  
  - [#56389](https://github.com/vllm-project/vllm/issues/56389): 高并发下 **H20 (SM90)** 上 `dsv4_topk` MoE 内核出现非法内存访问——通过限制 `max_num_seqs=256` 临时缓解。  
  - [#56461](https://github.com/vllm-project/vllm/issues/56461): **GB10 (sm_121a)** 上因缓存块/页大小不匹配（SWA vs. DeepGEMM）导致内核崩溃。  
- ❌ **正确性缺陷**:  
  - [#55927](https://github.com/vllm-project/vllm/issues/55927): DeepSeek-V4-Flash-0731 在特定提示长度（模 4）下出现确定性错误输出，跨不同提供商均可复现。  
  - [#53777](https://github.com/vllm-project/vllm/issues/53777): DFlash2 + xgrammar 在 `json_object` 语法上出现确定性失败，源于 FSM 推进异常。  
  - [#56605](https://github.com/vllm-project/vllm/issues/56605): GLM-5.3-Flash 在代理工作流中退化为重复标记的“乱语”输出。  
- ⚠️ **无声数据损坏**:  
  - [#49546](https://github.com/vllm-project/vllm/issues/49546): GB10 上使用 `VLLM_MARLIN_INPUT_DTYPE=fp8` 时，WNA16 INT4 MoE 输出被无声损坏——内核运行快约 2.5%，但持续输出无穷 `</think>` 循环。

---

#### **6. 对应用开发者的影响**  
- 使用 DeepSeek-V4.1-Flash 时，若部署于 H20，**请避免设置 `max_num_seqs > 256`**，直至 [#56389] 修复。  
- **谨慎使用 `VLLM_BATCH_INVARIANT=1`**：当启用序列并行时该功能失效 ([#56370])，可能影响多 GPU 场景下的确定性推理。  
- **严格监控量化选择**：FP8 Marlin（W4A8-FP8）在 GB10 上可能导致无声损坏 ([#49546])；建议优先使用经验证的量化方案（如 NVFP4），或启用基于 CPU 的降级路径。  
- **启用结构化输出（如 `json_object`）前务必测试 DFlash2 + xgrammar**——当前行为不稳定 ([#53777])。  
- **规划硬件特异性调优**：GB10 与 AMD MI355X 存在独特性能断崖——建议使用专用性能分析工具，并在长上下文场景下考虑禁用推测解码（如有需要）([#54691])。

> 💡 *技巧提示*：对于生产部署，建议锁定至 `v0.28.1rc1`，或等待 `v0.29.0` 发布后再升级，以确保上述回归问题已被修复。调试期间可使用 `--disable-log-stats` 与 `--disable-microbatch` 以隔离引擎层级问题。

---  
*数据来源: [vLLM GitHub](https://github.com/vllm-project/vllm)*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest — 2026-09-13

---

### **1. 今日亮点**  
SGLang 持续推进推测解码与 Blackwell GPU 支持，针对 SM121（GB10）上 DeepSeek-V4.1 推理的正确性问题进行了关键修复，包括 FP8 GEMM 精度问题和 CUDA graph capture 失败。一项重大 PR (#39232) 通过复用融合的 FP8 KV/Q 准备过程，优化了 TRTLLM MLA 目标验证，显著提升了推测解码效率。同时，CI 稳定性仍是关注重点，持续追踪不稳定的测试和基础设施问题。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告任何内容。*  
今日未合并新版本发布或破坏性 API/配置变更。项目保持向后兼容性，但多个高严重性漏洞（如 #39193、#39226）可能影响依赖 `--moe-runner-backend deep_gemm` 或在 Blackwell GPU 上使用 FP8 量化功能的用户。

---

### **3. 新模型与硬件支持**  
- ✅ **Blackwell (SM121/120)**：通过多项 PR 实现增强支持：
  - 集成 **VibeCUDA MSA provider** 以支持 Blackwell (`#39233`) —— 实现高效卸载与故障闭合路由。
  - 在 AMD gfx950 上启用 **FP8 两池统一 KV 缓存** (`#37413`)。
  - **DeepSeek-V4.1** 现已支持在 SM121 上使用 `--moe-runner-backend deep_gemm`，但由于近期内核级崩溃问题（`#39226`, `#39193`），需谨慎验证。
- ✅ **AMD ROCm**：持续推进 gfx942 DSA 融合解耦工作 (`#39243`) 以及统一 KV 缓存支持 (`#37413`)。
- ✅ **MiniMax H3 GGUF**：部分支持已添加；注意 Conv3D patch embedding 加载仍失败 (`#38904`)。

> 🔗 [PR #39233](https://github.com/sgl-project/sglang/pull/39233) | [PR #37413](https://github.com/sgl-project/sglang/pull/37413)

---

### **4. 性能与优化**  
- 🚀 **推测解码效率**：PR #39232 在 TRTLLM MLA 目标验证阶段复用融合的 FP8 KV/Q 准备过程，消除冗余内核启动，降低解码开销。
- ⚡ **扩散推理**：PR #34122 在 CUDA 上启用向量化 JointThreshold 解码，替代逐行 Python 执行，大幅减少大规模场景下的序列化和主机-设备同步延迟。
- 💾 **内存池化**：PR #37382 为 DeepSeek-V4 添加 NPU-主机内存缓存管理，实现对卸载 KV 状态更精细的控制。
- 📈 **批处理与路由**：PR #37482 引入 `session_id` 元数据用于 KV 缓存块，使外部路由器可追踪会话级状态，提升批处理公平性。

> 🔗 [PR #39232](https://github.com/sgl-project/sglang/pull/39232) | [PR #34122](https://github.com/sgl-project/sglang/pull/34122)

---

### **5. 稳定性与回归问题**  
今日报告了若干关键稳定性问题：

| 严重性 | 问题 | 影响 | 修复状态 |
|--------|------|-------|-----------|
| 🔴 高 | [#39193](https://github.com/sgl-project/sglang/issues/39193) | 当 `DEEPGEMM_SCALE_UE8M0=false` 时，SM121 上的 FP8 `wo_a` 吸收 GEMM 返回 **约 25% 错误结果** —— 静默失败，无错误提示。 | ❌ 尚未修复 |
| 🔴 高 | [#39226](https://github.com/sgl-project/sglang/issues/39226) | `deep_gemm` 后端加载权重后，在 CUDA graph capture 期间因布局断言失败（`layout.hpp:108`）。 | ❌ 尚未修复 |
| 🔴 高 | [#39173](https://github.com/sgl-project/sglang/issues/39173) | Engram + Flash + DeepSeek-V4.1 分析的 SPS 表在 CUDA graph capture 时因“每请求仅允许一个等值块”错误崩溃。 | ❌ 尚未修复 |
| 🟡 中 | [#39235](https://github.com/sgl-project/sglang/issues/39235) | DeepSeek-V4 在 SM120 上解码时将 `q` 填充至 64 个头，导致 **解码步数损失约 0.5%**，尽管内核完全位相同。 | ⚠️ 正在审查 |
| 🟡 中 | [#39087](https://github.com/sgl-project/sglang/issues/39087) | 量化后的 DFlash2 草稿接受率约为 0%，静默失败，无警告或错误提示。 | ❌ 尚未修复 |

> 🔗 [Issue #39193](https://github.com/sgl-project/sglang/issues/39193) | [Issue #39226](https://github.com/sgl-project/sglang/issues/39226)

---

### **6. 对应用开发者的启示**  
- **在 #39226 和 #39193 修复前，请避免在 Blackwell (SM121) 上使用 `--moe-runner-backend deep_gemm`** —— 可能出现静默正确性失效。
- **务必仔细验证 FP8 量化设置**，尤其是非 UE8M0 缩放比例 —— 当前行为可能导致高达 **25% 的输出误差**。
- 使用 `session_id` 元数据（通过 PR #37482）以启用高级 KV 缓存路由与代理会话持久化。
- 对于扩散工作流，确保 CI 中包含端到端指标 —— PR #39206 已将其设为强制项。
- 通过 #17050 监控 CI 健康状况：**3 个测试已损坏，9 个测试不稳定** 仍在活跃；预计流水线存在间歇性不稳。

> 🔗 [CI 追踪问题 #17050](https://github.com/sgl-project/sglang/issues/17050) | [讨论：SGLang Slack](https://slack.sglang.io)

---  
*摘要生成时间：2026-09-13 | 来源：[github.com/sgl-project/sglang](https://github.com/sgl-project/sglang)*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 消息简报 – 2026-09-13**

---

### **1. 今日重点**  
最新更新聚焦于 GPU 后端（CUDA、Vulkan、ROCm）的关键稳定性修复，以及工具调用工作流中 JSON 模式处理的改进。值得关注的进展包括在 Jinja 模板中支持点记法整数字面量，以及针对 Blackwell GPU（sm_120）上 IQ 量化格式的关键修复——此前该问题导致结果错误。社区仍在持续解决影响大模型（如 Qwen3.5）和 MTP 推测解码性能退化的回归问题。

---

### **2. 发布与破坏性变更**  
- **`b10934`**：引入 `common_schema` 内部表示用于 JSON 模式，提升 `json-schema-to-grammar` 中的类型解析与优化能力。此为底层变更，可能影响自定义工具解析器。[PR #28736](https://github.com/ggml-org/llama.cpp/pull/28736)  
- **`b10933`**：在 Jinja 模板中新增对点属性整数字面量的支持（例如 `{% set x = [1,2,3].0 %}`），增强与复杂工具调用模式的兼容性。[PR #28817](https://github.com/ggml-org/llama.cpp/pull/28817)  
- **`b10930`**：修复服务器模式下的模型下载限制问题，解决并发下载被阻塞的问题 #26809。[PR #28530](https://github.com/ggml-org/llama.cpp/pull/28530)  
- **`b10926`**：优雅处理不支持的 `tq1_0` 量化格式，防止模型加载时崩溃。[PR #28681](https://github.com/ggml-org/llama.cpp/pull/28681)

---

### **3. 新模型与硬件支持**  
- **模型支持**：通过 PR #28818 新增基于 GPTNeoX 的德语研究模型 ELMOD 2.7b。  
- **硬件后端**：  
  - 为 HIP 后端添加 AMD GCN 特定配置（`ggml-cuda: hip add specific config table for AMD GCN`）——提升对新 AMD 显卡的兼容性。[PR #27841](https://github.com/ggml-org/llama.cpp/pull/27841)  
  - **Blackwell (sm_120)**：CUDA 现在对 IQ1_S、IQ2_XXS/XS/S、IQ3_XXS/S、IQ4_XS/NL 量化格式回退至 cuBLAS，避免输出错误。[PR #28823](https://github.com/ggml-org/llama.cpp/pull/28823)  
- **量化**：未新增量化格式；但 `tq1_0` 现已可优雅处理（非致命错误）。

---

### **4. 性能与优化**  
- **Qwen3.5 在 RTX 5090**：Windows 上报告内存带宽利用率仅 28%（对比 RTX 4090 Linux 的 86%）。可能原因包括内核调度不佳或 MTP 路径效率低下。[Issue #28196](https://github.com/ggml-org/llama.cpp/issues/28196)  
- **MTP 推测解码**：在 Windows MSVC + CUDA 12.8 环境下，`--spec-type draft-mtp` 导致预填充阶段慢约 57 倍（32.7 tok/s vs 1867 tok/s）。官方构建（Clang + CUDA 13.3）无此问题。[Issue #28790](https://github.com/ggml-org/llama.cpp/issues/28790)  
- **CUDA Graphs**：在 RTX 5090 笔记本版（sm_120）上导致 GPU 通道挂起（RC 监控器 + Xid 8）；临时解决方案：`GGML_CUDA_DISABLE_GRAPHS=1`。[Issue #27330](https://github.com/ggml-org/llama.cpp/issues/27330)  
- **Vulkan RDNA3**：自 `b10780` 以来提示处理速度严重下降。[Issue #28752](https://github.com/ggml-org/llama.cpp/issues/28752)  

---

### **5. 稳定性与回归问题**  
- **严重崩溃**：  
  - **CUDA**：移除 `rocWMMA` 后，RDNA4（`gfx1201`）上提示处理性能下降最高达 2 倍。原生 `fattn-mma-f16` 内核在深上下文场景下更慢。[Issue #26220](https://github.com/ggml-org/llama.cpp/issues/26220)  
  - **ROCm**：ROCm 7.14 下出现 `libhipblas.so.3` 缺失错误。[Issue #25807](https://github.com/ggml-org/llama.cpp/issues/25807)  
  - **SYCL**：`-cb` 标志将 Intel Arc Battlemage GPU 固定在全功率状态，无法实现空闲节能。[Issue #24946](https://github.com/ggml-org/llama.cpp/issues/24946)  
- **正确性缺陷**：  
  - **工具解析**：Qwen3 Coder 的 `anyOf` 对象参数被序列化为字符串而非嵌套 JSON。[PR #26833](https://github.com/ggml-org/llama.cpp/pull/26833)  
  - **推理预算**：在提示处理前过早失效。[Issue #25067](https://github.com/ggml-org/llama.cpp/issues/25067)  
- **正在修复**：  
  - `tq1_0` 量化现在可优雅失败。[PR #28681](https://github.com/ggml-org/llama.cpp/pull/28681)  
  - 失败恢复后的 K/V 状态清理。[PR #27530](https://github.com/ggml-org/llama.cpp/pull/27530)  

---

### **6. 对应用开发者的启示**  
- 若使用 RTX 5090（sm_120），请暂时启用 `GGML_CUDA_DISABLE_GRAPHS=1`，直至内核优化落地。  
- 避免在 Windows MSVC 构建版本中使用 MTP 推测解码——预期会严重拖慢预填充阶段；建议改用官方 Clang 构建版本。  
- 更新 Jinja 模板以利用点属性整数字面量（如 `.0`, `.1`），使工具参数访问更简洁清晰。  
- 关注 `common_schema` 变更——即将推出的基于模式的工具解析改进将支持更稳健的智能体行为。  
- 检查模型流水线中是否支持 `tq1_0`；虽然不再崩溃，但可能回退至 CPU 执行。  
- 构建自定义工具集成时，推荐使用 `--skip-chat-parsing` 跳过默认解析逻辑。[PR #20289](https://github.com/ggml-org/llama.cpp/pull/20289)  

> ✅ **建议**：对于新硬件（尤其是 Blackwell）上的生产推理，建议使用稳定版本，并测试开启 `GGML_CUDA_DISABLE_GRAPHS=1` 与 `GGML_CUDA_FA_ALL_QUANTS=ON`。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-13**

---

### **1. 今日亮点**  
针对 `qwen3.8` 上下文溢出问题（#17894）、网络搜索期间工具调用顺序错误（#18413），以及 Gemma 4 工具 schema 中的畸形 JSON 解析问题（#18400, #18398）提交了多项关键修复，提升了模型推理稳定性和流式输出正确性。这些改进对可靠的任务代理工作流和结构化输出生成至关重要。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未检测到新版本或破坏性变更。*  
然而，关于模型版本管理与 API 行为（如 `OLLAMA_CONTEXT_SHIFT`，#18399）的持续开发可能在未来版本中引入向后不兼容的行为——开发者应关注 [问题 #18414](https://github.com/ollama/ollama/issues/18414)，以了解未记录的特定模型 Ollama 版本依赖要求。

---

### **3. 新模型与硬件支持**  
- **模型支持**：  
  - *Hy4-preview* 模型请求已提交 ([#18287](https://github.com/ollama/ollama/issues/18287))，待官方集成。  
  - 报告 *Gemma 4 E4B 多模态* 在 Jetson Orin Nano 8GB 上因投影器内存溢出（OOM）导致失败 ([#18396](https://github.com/ollama/ollama/issues/18396))。  

- **硬件后端**：  
  - AMD Strix Halo iGPU（gfx1151）上观察到 ROCm 后端不稳定，请求间存在 KV 状态泄露问题 ([#17847](https://github.com/ollama/ollama/issues/17847))。  
  - Linux 混合 GPU 系统（Intel iGPU + NVIDIA RTX 4080）在设备加载阶段出现 `SIGABRT` 崩溃 ([#18412](https://github.com/ollama/ollama/issues/18412))。

---

### **4. 性能与优化**  
- **内存效率**：  
  - 执行 `--quantize`（`q4_K_M`）后，未量化 F16 模型数据仍保留在 `blobs/` 目录中，因文件未被引用 ([#18416](https://github.com/ollama/ollama/issues/18416))。每导入一个 26B 模型，可能导致约 50 GB 的闲置存储空间。  
  - 持续的 `/api/embed` 负载在 Windows 上耗尽回环端口，原因是 llama-server HTTP 客户端禁用了保持连接功能 ([#18392](https://github.com/ollama/ollama/issues/18392))。

- **延迟与吞吐量**：  
  - 上下文截断会静默丢弃消息，无用户反馈 ([#14259](https://github.com/ollama/ollama/issues/14259))。  
  - 当推理未完成时，工具调用发出顺序破坏 Codex 风格重放逻辑 ([#18411](https://github.com/ollama/ollama/issues/18411))。

---

### **5. 稳定性与回归问题**  
| 严重性 | 问题 | 描述 | 修复状态 |
|--------|------|------|----------|
| 高 | [#17778](https://github.com/ollama/ollama/issues/17778) | `qwen3.8`：工具循环中提示 `500: no user query found in messages` | ✅ PR #17894 进行中 |
| 高 | [#17847](https://github.com/ollama/ollama/issues/17847) | ROCm iGPU：请求间 KV 状态泄露 | ⚠️ 尚无修复 |
| 高 | [#18396](https://github.com/ollama/ollama/issues/18396) | Jetson Orin Nano：Gemma 4 E4B 投影器引发主机内存溢出 | ⚠️ 尚无修复 |
| 中 | [#18412](https://github.com/ollama/ollama/issues/18412) | Linux 混合 GPU：启动时发生 `SIGABRT` | ⚠️ 尚无修复 |
| 中 | [#18411](https://github.com/ollama/ollama/issues/18411) | 工具调用在推理完成前发出 | ✅ PR #18413 进行中 |
| 中 | [#18392](https://github.com/ollama/ollama/issues/18392) | 高负载嵌入任务下回环端口耗尽 | ⚠️ 尚无修复 |

---

### **6. 对应用开发者的启示**  
- **代理工作流**：在 PR #17894 与 #18413 落地前，请避免在长时间工具循环中使用 `qwen3.8` 与 `gemma3:12b`——存在静默失败或输出格式错误的风险。  
- **结构化输出**：使用 `gemma3:12b` 时，注意输入中双引号内容（#18094）——响应可能提前截断。  
- **嵌入管道**：在 Windows 上，高吞吐嵌入负载下可能出现间歇性 `HTTP 400` 错误（#18392）。建议启用限速或连接池机制。  
- **部署规划**：在稳定性修复发布前，避免在 gfx1151（Strix Halo）ROCm 平台及 Jetson Orin Nano 8GB 上部署多模态模型。  
- **存储管理**：量化模型后，手动清理 `~/.ollama/models/blobs/` 中残留的 F16 数据块，防止磁盘空间膨胀（#18416）。  

> 💡 **实用提示**：密切关注 [PR #18413](https://github.com/ollama/ollama/pull/18413) 与 [PR #17894](https://github.com/ollama/ollama/pull/17894)，以获取工具调用可靠性与聊天流式传输鲁棒性的即时提升。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

### **1. 今日亮点**  
LiteLLM 持续演进，作为 LLM 应用的关键推理与编排层，今日重点聚焦于 **安全加固**、**预算可靠性** 和 **网关集成优化**。关键进展包括：修复错误响应中请求 ID 传播的 PR、增强 JWT 声明灵活性，以及支持第三方网关的实时模型发现——这对多供应商部署至关重要。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告任何内容。*  
无新版本发布或破坏性变更。用户应关注 [v1.84.0 回归问题](https://github.com/BerriAI/litellm/issues/28206)（影响 Vertex AI 健康检查），该问题仍未解决，但正在积极讨论中。

---

### **3. 新模型与硬件支持**  
- ✅ 通过 [#40924](https://github.com/BerriAI/litellm/pull/40924) 已将 **腾讯 TokenHub** 添加至提供方下拉菜单，便于集成腾讯的 OpenAI 兼容 API。
- ✅ **实时模型目录发现** 现在通过 [#40928](https://github.com/BerriAI/litellm/pull/40928) 支持网关提供方的动态元数据（定价、上下文窗口、模态等）。
- 🔜 **Cohere Command A+**、**Mistral Document AI OCR** 与 **Mistral 3.5 Medium** 的 Azure 支持仍在等待中 ([#32628](https://github.com/BerriAI/litellm/issues/32628), [#32637](https://github.com/BerriAI/litellm/issues/32637)) — 当前受后端集成工作阻塞。
- 🔜 **OpenRouter 视频生成模型** 仍不支持 ([#27724](https://github.com/BerriAI/litellm/issues/27724))，尽管上游已可用。

---

### **4. 性能与优化**  
- 🚀 **成本追踪优化**：两个 PR ([#40922](https://github.com/BerriAI/litellm/pull/40922), [#40912](https://github.com/BerriAI/litellm/pull/40912)) 解决了因 Redis 超时导致的高吞吐日志失败问题，减少日志噪声，并提升突发负载下的稳定性。
- ⚙️ **工具调用效率**：[#40918](https://github.com/BerriAI/litellm/pull/40918) 修复了通过 Responses 桥接在 `gpt-5.4+/gpt-6` 响应中对工具选择处理不当的问题，防止客户端误读代理行为。
- 💡 **预算预留精度**：[#35524](https://github.com/BerriAI/litellm/issues/35524) 指出一个缺陷：当无法估算成本时，预算预留会被跳过——这会影响复杂或非标准模型的成本控制。

---

### **5. 稳定性与回归问题**  
| 问题 | 严重性 | 状态 | 修复 PR？ | 链接 |
|------|----------|--------|---------|------|
| 因 `vector_store_ids` 导致的 `AnthropicException 400` | 高 | 开放 | ❌ | [#23741](https://github.com/BerriAI/litellm/issues/23741) |
| v1.84.0 后 Vertex AI 模型被标记为“不健康” | 高 | 已关闭 | ✅（部分） | [#28206](https://github.com/BerriAI/litellm/issues/28206) |
| 自托管安装因 `prisma generate` 阻塞失败 | 中 | 开放 | ❌ | [#26097](https://github.com/BerriAI/litellm/issues/26097) |
| Responses-to-Chat 流式传输丢失推理状态 | 中 | 开放 | ❌ | [#40887](https://github.com/BerriAI/litellm/issues/40887), [#40854](https://github.com/BerriAI/litellm/issues/40854) |
| `model_max_budget` 绕过共享 Redis 消费限制 | 严重 | 开放 | ❌ | [#33325](https://github.com/BerriAI/litellm/issues/33325) |

> 🔥 **严重关切**：多个预算强制执行问题（如 [#33325](https://github.com/BerriAI/litellm/issues/33325), [#36940](https://github.com/BerriAI/litellm/issues/36940)）表明存在 **超额计费** 和 **跨副本预算耗尽** 的风险，尤其在分布式代理架构中。

---

### **6. 对应用开发者的启示**  
- **生产环境使用预算功能需谨慎**：当前 `model_max_budget` 与 `max_budget` 的实现可能因 Pod 本地状态不一致导致超支。密切监控消费日志，避免仅依赖这些检查，直到 [#33325](https://github.com/BerriAI/litellm/issues/33325) 与 [#36940](https://github.com/BerriAI/litellm/issues/36940) 解决。
- **确保路由逻辑一致**：若使用 `responses` 端点或代理工作流，请验证推理输出是否在流式传输中被丢弃——这会影响调试与代理可追溯性。
- **充分利用新发现功能**：使用实时目录支持 ([#40928](https://github.com/BerriAI/litellm/pull/40928)) 动态发现 Merge、Starveri 等外部网关的模型，提升多供应商环境中的敏捷性。
- **优先考虑安全性部署**：若应用处理敏感数据或使用公网端点，请解决 [#35536](https://github.com/BerriAI/litellm/issues/35536)（未经授权访问原始响应 ID）的根本原因。

> ✅ **建议**：在 v1.85.0 稳定前，锁定至稳定版本（如 v1.83.x）。部署至生产前，请审查所有开放的预算与安全问题。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-09-13**

---

### **1. 今日亮点**  
Unsloth 持续扩展对高级推理与微调工作流的支持，关键提升了模型服务稳定性及多后端兼容性。已合并多项关键修复，恢复 Docker Studio 中的 GPU 训练功能，并防止在 AMD ROCm 系统上加载模型时发生崩溃，同时新增功能实现了对工具调用去重和 MCP 集成的更精细控制。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未发布新版本。*  
但 **PR #10825** (`docker/unsloth:latest`)：修复了一个严重回归问题，即 `UNSLOTH_ALLOW_CPU=1` 在 GPU 主机上禁用了 TRL 补丁，导致所有训练流程中断。此修复已恢复官方 Docker 镜像中基于 GPU 的训练功能。  
👉 [PR #10825 – 修复 Docker Studio 中的 GPU 训练](https://github.com/unslothai/unsloth/pull/10825)

---

### **3. 新模型与硬件支持**  
- **AMD ROCm 支持**：PR #10820 增加了专用于 AMD GPU（RDNA2–RDNA4、CDNA）的 Docker 镜像，实现对 Windows 与 Linux 系统的完整支持。  
  👉 [PR #10820 – 添加 AMD ROCm 镜像](https://github.com/unslothai/unsloth/pull/10820)  
- **EXL3 量化后端**：PR #7115 引入 ExLlamaV3（EXL3）作为替代量化后端，支持 2/3/4/6/8 位量化及 MoE 模型——适用于低内存部署场景。  
  👉 [PR #7115 – 添加 EXL3 量化后端](https://github.com/unslothai/unsloth/pull/7115)  
- **Deepseek v4.1 Flash GGUF 请求**：Issue #10838 呼吁在 Unsloth Studio 中原生支持 Deepseek v4.1 Flash GGUF 模型。  
  👉 [Issue #10838 – 请求支持 Deepseek v4.1 Flash GGUF](https://github.com/unslothai/unsloth/issues/10838)

---

### **4. 性能与优化**  
- **LoRA SFT 加速**：PR #10744 报告在 NVIDIA B200 上对 Qwen3.5-9B LoRA SFT 的训练时间提升约 **22%**（每步耗时从 0.85 秒降至 0.66 秒），主要归功于降低了 CPU 侧开销。  
  👉 [PR #10744 – 性能：Qwen3.5-9B LoRA SFT 在 B200 上的表现](https://github.com/unslothai/unsloth/pull/10744)  
- **提示处理可见性增强**：PR #10834 在 Studio API 监控器中增加实时反馈：`提示处理 · N%`，展示 llama.cpp 输入处理过程中的进度，显著提升调试可观察性。  
  👉 [PR #10834 – 显示提示处理进度](https://github.com/unslothai/unsloth/pull/10834)

---

### **5. 稳定性与回归问题**  
- **新对话页面崩溃**：Issue #10288 报告在桌面应用中点击“新建对话”时出现崩溃（`tapClientLookup: Index 1 out of bounds`），需重启应用。复现步骤待补充。  
  👉 [Issue #10288 – 新对话崩溃](https://github.com/unslothai/unsloth/issues/10288)  
- **AppImage 版本模型下载失败**：Issue #10840 显示 AppImage 版本无法下载大型模型（如 Qwen 3.8 Flash Next at Q5_K_XL），原因是缺少 `hf_xet` 包。  
  👉 [Issue #10840 – AppImage 缺少 hf_xet](https://github.com/unslothai/unsloth/issues/10840)  
- **工具权限绕过安全检查**：Issue #10835 警告，“自动运行”或“完全访问”权限会跳过安全校验，允许执行危险命令如 `rm` 或 `reboot` 而无需确认。  
  👉 [Issue #10835 – 工具权限中的安全检查绕过](https://github.com/unslothai/unsloth/issues/10835)  
- **Studio UI 冲突**：Issue #10817 记录了运行设置侧边栏与下拉面板之间存在无声不一致，导致行为异常。  
  👉 [Issue #10817 – 运行设置同步问题](https://github.com/unslothai/unsloth/issues/10817)

---

### **6. 对应用开发者的启示**  
- **立即使用最新 Docker 镜像**（`unsloth/unsloth:latest`），在 #10825 合并后避免在 GPU 主机上训练失败。  
- **通过 PR #7115 启用 EXL3 量化**，适用于 Mixture-of-Experts 模型或内存受限环境。  
- **若代理依赖重复工具调用，请禁用工具调用去重**（相关请求见 #10379）。  
- **远程推理中避免使用 `trust_remote_code=False`**，直至 #10830 解决异步 Hub 调用阻塞事件循环的问题。  
- **关注桌面应用崩溃问题**，尤其在 macOS/Linux 上，及时报告 #10288 和 #10840 的复现步骤。  

> ✅ *建议*：升级至最新版 unsloth-cli 与 Studio 构建，生产环境中务必验证工具权限策略。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*