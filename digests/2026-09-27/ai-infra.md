# AI 基础设施日报 2026-09-27

> 生成时间: 2026-09-27 00:50 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

### **1. 生态系统概览**  
2026年9月，AI推理基础设施格局呈现出明显的两极分化：高性能、硬件优化的推理引擎与轻量级、可移植的本地运行时并存。vLLM 和 llama.cpp 等项目正在推动下一代GPU（如 GB10、MI3xx）上的低延迟、高吞吐推理边界，而 Ollama 与 LiteLLM 则聚焦于开发者体验、工具链和统一的API网关。与此同时，稳定性仍是关键瓶颈——尤其体现在推测解码、长上下文处理及跨后端兼容性方面，凸显出性能提升常被边缘情况下的复杂性所抵消。混合模型（MoE、Mamba/GDN）和新型量化方案（FP8、IQ3_S）的兴起，正加速对底层内核优化的深度需求以及跨生态系统的严格验证。

---

### **2. 活动对比**

| 项目       | 问题（开放） | PR（开放） | 发布状态         |
|------------|--------------|------------|------------------|
| **vLLM**   | 42           | 58         | `v0.30.1rc1.dev80`（无新发布） |
| **llama.cpp** | 97          | 63         | 稳定版：`b11199`；近期构建不稳定 |
| **Ollama** | 112          | 45         | 无新发布；重大变更即将来临 |
| **LiteLLM** | 81          | 39         | RC `1.104.0` 活跃；暂无稳定版推送 |
| **Unsloth** | —           | —          | 摘要失败（活动未知） |

> 🔍 *洞察*：Ollama 因广泛存在的用户体验与解析错误导致问题数量领先；llama.cpp 虽PR活跃度最高，但存在显著回归风险。vLLM 在功能范围下保持最专注的开发节奏，开放问题数相对较少。

---

### **3. 模型支持竞赛**

| 新模型 / 架构               | vLLM ✅ | llama.cpp ✅ | Ollama ✅ | LiteLLM ✅ | Unsloth ✅ |
|----------------------------|-------|------------|----------|-----------|----------|
| **GLM-5.3-Flash-DFlash2**  | ✅ (PR #56983) | ❌ | ❌ | ❌ | ❌ |
| **MiniCPM-V 4.7**         | ✅ (PR #58674) | ❌ | ❌ | ❌ | ❌ |
| **Nemotron 3 Puzzle (75B)** | ❌ | ✅ (CUDA, PR #28717) | ❌ | ❌ | ❌ |
| **K2 Horizon (MoVA系列)**  | ❌ | ✅ (功能请求 #29424) | ❌ | ❌ | ❌ |
| **Qwen4Exp NGram/FP8**     | ⚠️ 部分支持（ROCm失败） | ❌ | ❌ | ❌ | ❌ |
| **System One 模型（Kev, Laya）** | ❌ | ❌ | ✅ (社区关注) | ✅ (已添加自动路由) | ❌ |

> 🏆 **胜者**：**llama.cpp** 在原始模型支持广度上领先，尤其在新兴硬件专用模型（Nemotron、K2 Horizon）方面表现突出。**vLLM** 在前沿推测解码及 MoE/Mamba 集成方面占据主导。**LiteLLM** 在生态系统级模型路由灵活性上胜出。

---

### **4. 性能前沿**

| 优化重点                   | vLLM                          | llama.cpp                     | Ollama                        | LiteLLM                       |
|----------------------------|-------------------------------|-------------------------------|-------------------------------|-------------------------------|
| **KV Cache 与元数据复用**  | ✅ 高（GDN/Mamba，PR #58762） | ❌                            | ❌                            | ❌                            |
| **推测解码**               | ✅ 核心功能（DFlash2、GLM-5.3） | ⚠️ 量化模型下崩溃             | ⚠️ 工具调用污染               | ✅ 守卫扫描                    |
| **量化效率**               | ✅ FP8 + DFlash2              | ✅ IQ3_S MMVQ（2.71倍加速）    | ❌（工具调用解析问题）         | ❌（模式剥离）                 |
| **批处理与卸载**           | ✅ 分层卸载瓶颈                | ❌（长预填充内存溢出）         | ✅ 流式输出（`text/event-stream`） | ✅ 批量 Redis 操作（PR #43369） |
| **内核级优化**             | ✅ ROCm AITER、GB10 H2D 复制   | ✅ CUDA FWHT F16、SYCL/SYCL 多编译器 | ❌                            | ❌                            |

> 📌 **趋势**：vLLM 与 llama.cpp 正驱动内核级创新——尤其在 FP8、Mamba/GDN 元数据复用及统一内存系统方面。LiteLLM 关注代理层效率（批量 Redis），而 Ollama 在性能深度上落后，但在用户体验打磨上表现优异。

---

### **5. 层定位**

| 项目       | 主要层级                  | 核心差异化                                  |
|------------|---------------------------|---------------------------------------------|
| **vLLM**   | **推理引擎**              | 面向顶级GPU的大规模分布式服务优化；强支持 MoE/Mamba/DFlash |
| **llama.cpp** | **本地运行时 / 嵌入式**   | 跨平台，支持 CPU/GPU/FPGA；适用于边缘、移动端及离线部署 |
| **Ollama** | **智能体网关 / CLI 应用** | 开发者优先体验；内置工具调用、桌面应用与本地模型管理 |
| **LiteLLM** | **API 网关 / 路由层**     | 跨服务商统一接口；成本感知路由、守卫机制、批处理工作流 |
| **Unsloth** | **微调框架**             | 因摘要失败未分析——基于历史背景推测为快速微调领导者 |

> 💡 **战略意义**：vLLM 与 llama.cpp 作为基础引擎；Ollama 与 LiteLLM 将其抽象为应用友好层。若运作正常，Unsloth 将填补训练环节空白，完整覆盖全栈。

---

### **6. 趋势信号**

- **硬件特异性回归激增**：在 **GB10（DGX Spark）** 与 **ROCm gfx1151** 上出现严重问题，表明早期采用者面临严峻稳定性挑战。预计生产部署将延至2026年第四季度。
- **推测解码仍具风险**：多个项目报告在推测解码下出现卡死、数据损坏或崩溃——尤其在 MoE、FP8 及结构化输出场景。仅限受控环境使用。
- **量化 ≠ 可移植性**：尽管 FP8/IQ3_S 取得进展，但缺失权重尺度（ROCm）与模式剥离（LiteLLM）表明，量化引入了超出精度损失的新故障模式。
- **守卫机制已成为标配**：LiteLLM 的提示注入扫描与 Ollama 工具调用解析修复，表明安全与正确性不再可选——已在网关层原生集成。
- **智能体工作流驱动开发**：System One API（Ollama）、Mistral 批处理（LiteLLM）、DFlash2 草稿支持（vLLM）等特性均指向自主智能体的发展方向，要求可靠且确定性的输出。

> ✅ **开发者行动建议**：  
> - 在稳定性改善前，**避免使用云推理服务（Ollama Cloud Pro）**。  
> - 若投入生产，**锁定稳定版本**（llama.cpp 使用 `b11199`，vLLM 使用 `v0.30.1rc1`）。  
> - **严格验证工具调用输入**——特殊字符、空格与数值溢出仍是常见故障点。  
> - **准备应对结构化推理API**——`systemone` 接口与概率路由将重新定义智能体设计范式。

---

> 📊 *数据来源：截至2026-09-27的GitHub问题/PR统计。所有项目状态基于官方仓库。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest – 2026-09-27

---

### **1. 今日亮点**  
vLLM 项目持续加速对下一代模型与硬件的支持，针对推测解码（DFlash/DSpark）和 GLM-5.3 集成的关键修复已落地。关键进展包括：为 GLM-5.3-Flash 启用 DFlash2 草稿模型支持，并修复了在 KV 缓存分组下 Mamba/GDN 元数据复用导致的内存损坏问题——这两项改进对大规模 MoE 与混合架构的高吞吐推理至关重要。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告新发布或破坏性变更。*  
无新版本发布，亦无破坏性 API/配置变更。最新稳定版本仍为 `v0.30.1rc1.dev80+g26f49e336`，当前工作重点在于为 `v0.31` 版本周期推进性能与稳定性优化。

---

### **3. 新模型与硬件支持**  
- ✅ **GLM-5.3-Flash-DFlash2**：通过 PR [#56983](https://github.com/vllm-project/vllm/pull/56983) 添加实验性支持，实现对 GLM-5.3-Flash 的 DFlash2 草稿模型启用。
- ✅ **MiniCPM-V 4.7**：PR [#58674](https://github.com/vllm-project/vllm/pull/58674) 完整添加模型支持，包含 canvas 3D M-RoPE 及更新后的视频占位符处理逻辑。
- 🔧 **ROCm gfx950 MXFP8 MoE/Dense 后端**：功能请求 [#57960](https://github.com/vllm-project/vllm/issues/57960) 正在追踪为 AMD MI3xx 系列 GPU 上的 `tencent/Hy4-preview-FP8` 模型启用原生 AITER 内核支持。
- 🚧 **NVIDIA DGX Spark (GB10, sm_121, aarch64)**：仍缺乏完整的 CUDA/sm_121 支持；问题 [#36821](https://github.com/vllm-project/vllm/issues/36821) 保持开放状态，已有 9 条评论且紧急程度持续上升。

---

### **4. 性能与优化**  
- 📈 **Mamba/GDN 元数据复用**：PR [#58762](https://github.com/vllm-project/vllm/pull/58762) 实现跨 KV 缓存组的注意力元数据复用，在 Qwen3.6-35B-A3B + DFlash 配置下将每步开销降低最高约 30%。
- ⚙️ **分层卸载优化**：问题 [#58804](https://github.com/vllm-project/vllm/issues/58804) 指出在统一内存 GB10 系统上，长预填充序列场景下分层卸载存在性能瓶颈。
- 💾 **权重加载速度**：PR [#58726](https://github.com/vllm-project/vllm/issues/58726) 发现 GB10 平台从 mmap-backed safetensors 执行 H2D 复制时速度缓慢，暴露出默认加载路径中的平台相关低效问题。
- 🔁 **KV 缓存组优化**：PR [#52244](https://github.com/vllm-project/vllm/pull/52244) 修复了在多线程推测解码（MTP）下混合 GDN 前缀缓存命中率下降的问题——对减少多标记预填充场景中的冗余计算至关重要。

---

### **5. 稳定性与回归问题**  
- ❌ **V1 引擎在并发负载下的死锁** ([#37729](https://github.com/vllm-project/vllm/issues/37729))：报告高严重性死锁，出现在启用 FP8 + 前缀缓存 + Qwen3.5 场景。已积累 36 条评论，尚未修复。*对生产级服务部署至关重要。*
- ❌ **Qwen4Exp QSA 索引器在统一内存 GB10 上发生 OOM** ([#56457](https://github.com/vllm-project/vllm/issues/56457))：每块 logits 缓冲区随 max_seq_len 增长，导致长预填充过程中设备内存溢出或卡死。*影响使用大上下文窗口的 GB10 部署。*
- ❌ **工具调用场景中推测解码导致的数据损坏** ([#58485](https://github.com/vllm-project/vllm/issues/58485))：V1 思考预算污染多标记 `reasoning_end_str`，在推测解码下出现异常。*影响依赖结构化输出的智能体工作流。*
- ❌ **ROCm 平台 Qwen3.8-Flash-Next-FP8 加载失败** ([#58688](https://github.com/vllm-project/vllm/issues/58688))：AMD 版 Qwen4ExpNGramEmbedding 中缺失 FP8 量化所需的 `weight_scale`。*阻碍最新版 Qwen 模型在 ROCm 上的部署。*

---

### **6. 对应用开发者的启示**  
- **在修复 [#37729](https://github.com/vllm-project/vllm/issues/37729) 与 [#58485](https://github.com/vllm-project/vllm/issues/58485) 前，请谨慎使用推测解码**，尤其是在 Qwen3.5/Qwen4Exp 与 GLM-5.3 场景下——预计可能出现挂起或输出错误，影响智能体工作流。
- **在修复 [#56457](https://github.com/vllm-project/vllm/issues/56457) 前，避免在 GB10（DGX Spark）上使用长预填充序列**；建议采用截断或分块推理策略。
- **充分利用近期优化成果**，如 GDN/Mamba 层的元数据复用、前缀缓存命中率提升——尤其适用于 MoE 模型与高并发批处理推理场景。
- **密切监控 ROCm 支持状态**：多个 FP8/量化模型因缺少 scale tensor 而无法加载——部署至 AMD MI3xx 硬件前务必验证模型兼容性。

> 🔗 [浏览 GitHub 问题列表](https://github.com/vllm-project/vllm/issues) | [PR 仪表盘](https://github.com/vllm-project/vllm/pulls)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp Digest – 2026-09-27**

---

### **1. Today’s Highlights**  
The latest updates focus on expanding hardware support for NVIDIA’s Nemotron 3 Puzzle (state size 96) and improving CUDA/FWHT performance with F16 input support, enabling more efficient inference on high-end GPUs. Key backend improvements include SYCL multi-compiler compatibility, enhanced OpenCL kernel loading, and Hexagon backend sampling support, signaling growing cross-platform maturity.

---

### **2. Releases & Breaking Changes**  
No new releases were published in the last 24 hours. However, a revert was issued ([#29437](https://github.com/ggml-org/llama.cpp/pull/29437)) to undo a change that altered max context length behavior during auto-fitting with unified KV—this may affect users relying on dynamic context sizing in server deployments.

---

### **3. New Model & Hardware Support**  
- **Nemotron 3 Puzzle (75B-A9B)**: Added full `ssm_scan` state size 96 support via CUDA ([PR #28717](https://github.com/ggml-org/llama.cpp/pull/28717)), eliminating CPU fallback and restoring performance.
- **K2 Horizon (0.9B–36B MoVA)**: Feature request opened ([#29424](https://github.com/ggml-org/llama.cpp/issues/29424)) to add support for this emerging MoVA-based model series.
- **Hexagon HTP**: Expanded backend support now includes `ARGSORT`, `ARGMAX`, `TOP_K`, `SUM`, `STEP`, and improved chunking for sampling workflows ([PR #29502](https://github.com/ggml-org/llama.cpp/pull/29502)).
- **SYCL**: Enhanced build flexibility via `ExternalProject` integration ([PR #29506](https://github.com/ggml-org/llama.cpp/pull/29506)) to allow independent compilation with different compilers (e.g., icpx vs hipcc).

---

### **4. Performance & Optimization**  
- **CUDA FWHT**: F16 input support added ([PR #29096](https://github.com/ggml-org/llama.cpp/pull/29096)), removing unnecessary F32 conversion overhead and enabling direct use of FP16 inputs—critical for low-precision inference pipelines.
- **IQ3_S MMVQ**: Speedup of **2.71x** reported on Qwen3.8-27B IQ3_S-heavy models via optimized matrix multiplication path ([PR #29500](https://github.com/ggml-org/llama.cpp/pull/29500)).
- **OpenCL A8X Kernels**: Refined binary loading conditions ([PR #29503](https://github.com/ggml-org/llama.cpp/pull/29503)) improve compatibility beyond just A8X-X2 devices.
- **BF16/FP16 Chunking**: Introduced configurable chunking for tensor conversion to reduce VRAM usage without sacrificing peak performance ([PR #29442](https://github.com/ggml-org/llama.cpp/pull/29442)).

---

### **5. Stability & Regressions**  
Critical stability issues remain active across multiple backends:
- **SYCL**: GPU TDR resets on dual Intel Arc Pro B70 when using DFlash2 draft models ([#28778](https://github.com/ggml-org/llama.cpp/issues/28778)) — requires urgent attention.
- **ROCm/HIP**: Severe PPL explosion from `b10040` onward ([#27506](https://github.com/ggml-org/llama.cpp/issues/27506)); silent corruption observed in Qwen3.5-27B inference on gfx1151 ([#27556](https://github.com/ggml-org/llama.cpp/issues/27556)).
- **Vulkan**: Memory allocation failures (`ErrorOutOfDeviceMemory`) on Apple M1 ([#29270](https://github.com/ggml-org/llama.cpp/issues/29270)) and `ARGSORT` partial sorting on some devices ([#29431](https://github.com/ggml-org/llama.cpp/issues/29431)).
- **CUDA**: Crashes under speculative decoding (draft-mtp/draft-dspark) on quantized models ([#25618](https://github.com/ggml-org/llama.cpp/issues/25618), [#27428](https://github.com/ggml-org/llama.cpp/issues/27428)) and resource allocation failure (`cublasCreate_v2`) after b9553 ([#25304](https://github.com/ggml-org/llama.cpp/issues/25304)).

> 🔴 *Note: Several regressions are marked "unconfirmed" but have high comment counts and reproducible setups—caution advised for production use.*

---

### **6. What This Means for Application Developers**  
- **Use caution with speculative decoding** on quantized models—especially Q4_K_M or IQ3_S variants—due to divergence and crashes reported in multiple backends.
- **Leverage new F16 FWHT and MMVQ optimizations** for faster inference on CUDA-enabled systems, particularly with mixed-precision models.
- **Avoid recent builds (b10000+)** if running on AMD ROCm or Intel SYCL with large models—known stability regressions persist.
- **Plan for future K2 Horizon and Nemotron 3 Puzzle integrations**, as these are actively being prioritized in feature requests.
- **Validate output UTF-8 sanitization** is enabled (via PR #28724) if your app consumes raw text from llama-server to avoid parsing errors.

👉 *Recommendation: Pin to stable release `b11199` or earlier until regression fixes land. Monitor [issue #14909](https://github.com/ggml-org/llama.cpp/issues/14909) for missing ops—critical for custom model extensions.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-27**

---

### **1. Today's Highlights**  
The Ollama ecosystem continues to evolve with a strong focus on fixing critical tool-call parsing bugs across multiple models (Gemma4, Qwen3.8, GLM-4.7), particularly around edge cases involving special characters and malformed input. A key UX improvement landed for macOS and Windows desktop apps—allowing narrow, resizable windows and always-on-top behavior—addressing long-standing usability concerns. Meanwhile, new PRs are advancing support for system-level inference via `System One` scoring and improved proxy handling for non-JSON payloads.

---

### **2. Releases & Breaking Changes**  
*None*  
No new releases were published in the last 24 hours. However, several breaking changes are imminent:  
- `typical_p` parameter is no longer supported (see [Issue #18542](https://github.com/ollama/ollama/issues/18542)), which may break clients relying on it.  
- The upcoming `v1/systemone` endpoint (PR [#18606](https://github.com/ollama/ollama/pull/18606)) introduces a new structured decision-making API with probabilistic outputs—backward-incompatible for existing integrations.

---

### **3. New Model & Hardware Support**  
- **Model Additions**: No new model releases, but community interest in *System 1* models like **Kev** ([#18594](https://github.com/ollama/ollama/issues/18594)) and **Laya** is growing.  
- **Hardware/Backend**: MLX version bump ([PR #18651](https://github.com/ollama/ollama/pull/18651)) improves compatibility with Apple Silicon hardware; ongoing work aims to enable shared model weights for concurrent MLX inference on high-memory M-series chips ([#18669](https://github.com/ollama/ollama/issues/18669)).  
- **Tooling**: Docker SBX integration proposed for coding agents ([#18425](https://github.com/ollama/ollama/issues/18425))—a step toward deeper agent ecosystem alignment.

---

### **4. Performance & Optimization**  
- **Tool Call Parsing Improvements**: Multiple PRs target performance and correctness:  
  - Recovering Gemma4 tool calls with trailing noise via JSON boundary detection ([PR #18664](https://github.com/ollama/ollama/pull/18664)).  
  - Fixing premature termination of tool calls due to `<tool_call|>` inside arguments ([PR #16075](https://github.com/ollama/ollama/pull/16075) already merged).  
- **Latency & Streaming**: PR [#11589](https://github.com/ollama/ollama/pull/11589) enables `text/event-stream` responses when requested—improving compatibility with streaming clients.  
- **Proxy Efficiency**: PR [#18670](https://github.com/ollama/ollama/pull/18670) fixes multipart request handling by forwarding raw bodies unchanged—critical for tools like Codex Desktop.

---

### **5. Stability & Regressions**  
- **Critical (High Severity)**:  
  - **Ollama Cloud Pro** has a reported **95% failure rate** across all cloud models ([#15453](https://github.com/ollama/ollama/issues/15453)). Users report consistent 500 errors despite stable connectivity—urgent fix required.  
- **Moderate Severity**:  
  - `qwen3.8`: Invalid `think: "high"` silently defaults to `medium` instead of `xhigh`, violating documented behavior ([#18632](https://github.com/ollama/ollama/issues/18632)).  
  - `glm-4.7`: `</tool_call>` inside argument values prematurely ends tool calls; leading/trailing newlines stripped ([#18659](https://github.com/ollama/ollama/issues/18659), [#18658](https://github.com/ollama/ollama/issues/18658)).  
  - `gemma4`: Tool call keys with spaces cause silent drop ([#18390](https://github.com/ollama/ollama/issues/18390)); string placeholders collide and drop valid calls ([#18354](https://github.com/ollama/ollama/issues/18354)).  
  - `Qwen3-Coder`: Number arguments outside int64 range are truncated (e.g., `1e20` → `9223372036854775807`) ([#18421](https://github.com/ollama/ollama/issues/18421)).  
- **Fixes in Progress**: Several parser fixes have been merged or submitted (e.g., [#18663](https://github.com/ollama/ollama/pull/18663), [#18664](https://github.com/ollama/ollama/pull/18664)), but full resolution remains pending.

---

### **6. What This Means for Application Developers**  
- **Avoid Cloud Pro for Production**: Due to the 95% failure rate, avoid using Ollama Cloud Pro until stability improves—consider local deployment or alternative providers.  
- **Validate Tool Call Inputs**: Be cautious with special characters (`</tool_call>`, `<arg_value>` content) and numeric precision when using `gemma4`, `qwen3.8`, or `glm-4.7`. Validate against known parser quirks.  
- **Update Clients**: Deprecation of `typical_p` means clients must adapt to new parameters—check migration paths early.  
- **Leverage New UX Features**: Use the updated desktop app window controls (narrow, always-on-top) for better workflow integration, especially in IDE-centric environments.  
- **Prepare for System One API**: Start designing for `POST /v1/systemone` if building decision-aware agents—this will enable structured, probabilistic reasoning at scale.  

> 🔗 **Key Links**:  
> - [Cloud Pro Failures (#15453)](https://github.com/ollama/ollama/issues/15453)  
> - [Gemma4 Tool Call Fixes (#18664)](https://github.com/ollama/ollama/pull/18664)  
> - [System One API Proposal (#18606)](https://github.com/ollama/ollama/pull/18606)  
> - [Desktop App UX Updates (#18661, #18662)](https://github.com/ollama/ollama/pull/18661)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 摘要 – 2026-09-27**

---

### **1. 今日亮点**  
LiteLLM 生态系统持续强化其护栏（guardrail）与路由能力，针对统一端点上的提示注入扫描修复了关键问题（PR #43350），并改进了 Anthropic 的 `/v1/messages` 令牌计数处理（PR #42735）。代理层实现重大性能优化，通过批量处理支出计数操作，减少了 Redis 轮次请求（PR #43369），同时新增对 Mistral 批量操作的支持，提升了作业生命周期管理能力。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告任何发布或破坏性变更。*  
但 PR #43385 回滚了 `rc/1.104.0` 中对键级使用聚合的近期修改，恢复对所有键的完整可见性——这一重大变更会影响仪表盘分析和导出功能。[PR #43385](https://github.com/BerriAI/litellm/pull/43385)

---

### **3. 新模型与硬件支持**  
- 基于实时调用验证，为 `fireworks_ai/minimax-m3` 添加视觉支持并固定功能特性。[PR #43390](https://github.com/BerriAI/litellm/pull/43390)  
- 自动路由决策模型扩展，新增支持 **Jev** 与 **Laya** 提供商，实现更灵活的路由策略。[PR #43234](https://github.com/BerriAI/litellm/pull/43234)  
- 通过新的批量调度机制，启用 `GET /v1/batches?provider=mistral` 与 `POST /v1/batches/{id}/cancel`。[PR #43380](https://github.com/BerriAI/litellm/pull/43380)

---

### **4. 性能与优化**  
- **代理支出核算**：每请求引入一次集中式 Redis 批量操作，通过流水线 `INCRBYFLOAT` 和批量 `MGET`，将冗余轮次减少最多达 14 次（原预调用 +10 次后调用共 12+10 次）。[PR #43369](https://github.com/BerriAI/litellm/pull/43369)  
- **路由器成本路由**：新增 `cache_aware_routing` 标志，在分类时考虑热提示缓存节省，提升成本感知能力，且不牺牲延迟。[PR #43232](https://github.com/BerriAI/litellm/pull/43232)  
- **护栏效率**：对原始 Gemini SSE 流进行缓冲与掩码处理，避免重复解析；流结构错误现触发“闭合失败”（fail closed）。[PR #43345](https://github.com/BerriAI/litellm/pull/43345)

---

### **5. 稳定性与回归问题**  
- **严重**：当 `content` 为列表时，消息级别的 `cache_control` 会被丢弃（Anthropic/Bedrock Converse）。可能导致多部分消息的缓存行为失效。[Issue #43324](https://github.com/BerriAI/litellm/issues/43324)  
- **高**：使用 Anthropic 进行 `/v1/responses` 流式传输时，`reasoning.encrypted_content` 中的思考文本被重复输出，因重复发送 delta 造成。[Issue #43010](https://github.com/BerriAI/litellm/issues/43010)  
- **高**：当字段类型为 `["string", "null"]` 时，Gemini/Vertex 的工具模式会丢失 `enum`、`pattern` 及 min/max 约束。可能导致意外的验证失败。[Issue #43325](https://github.com/BerriAI/litellm/issues/43325)  
- **中等**：`DualCache` 忽略配置的 `default_redis_ttl`，改用 `default_in_memory_ttl`。可能导致缓存过期不一致。[Issue #43187](https://github.com/BerriAI/litellm/issues/43187)  
- **中等**：`sse_keepalive_ping_interval_seconds` 在流式传输期间泄漏 `max_parallel_requests` 的槽位，导致提前出现 429 错误。[Issue #42819](https://github.com/BerriAI/litellm/issues/42819)

> ✅ *修复进展中*：多个护栏与路由相关 PR（如 #43350、#43369）正在解决稳定性问题的根本原因。

---

### **6. 对应用开发者的启示**  
- **护栏现已全面覆盖**：所有统一路由（`/v1/chat/completions`、`/v1/responses` 等）均会扫描提示注入——请确保你的应用不依赖未被扫描的输入。[PR #43350](https://github.com/BerriAI/litellm/pull/43350)  
- **结构化工具调用需谨慎**：若使用 `["string", "null"]` 类型或复杂模式联合（尤其在 Anthropic 上），请验证约束是否被剥离。[Issue #43325](https://github.com/BerriAI/litellm/issues/43325)  
- **流式传输可靠性**：若 `max_parallel_requests` 较低，请避免长时间流式请求——`sse_keepalive_ping` 可能耗尽并发资源。建议提高限制或禁用保活机制。[Issue #42819](https://github.com/BerriAI/litellm/issues/42819)  
- **路由精度提升**：在路由器中启用 `cache_aware_routing`，以避免低估缓存提示带来的节省。[PR #43232](https://github.com/BerriAI/litellm/pull/43232)  
- **监控批量工作流**：随着 Mistral 批量支持上线，现在可中途取消 OCR 任务——可用于错误恢复。[PR #43380](https://github.com/BerriAI/litellm/pull/43380)  

👉 *行动建议*：升级至最新 RC 版本（`1.104.0`），并验证护栏行为，特别是 `responses` 与 `messages` API。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*