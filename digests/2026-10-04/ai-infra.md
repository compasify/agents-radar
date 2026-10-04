# AI 基础设施日报 2026-10-04

> 生成时间: 2026-10-04 01:57 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

⚠️ 横向对比生成失败。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

### **vLLM Digest — 2026-10-04**

#### **1. 今日亮点**  
vLLM 项目持续聚焦高吞吐量、推测解码工作负载下的稳定性与性能，针对 Marlin 量化数据损坏及 MTP 前缀缓存重计算问题进行了关键修复。重点 PR 修复了 `int8-activation` 路径中的静默数据损坏问题，并在推测解码下恢复混合 GDN 前缀缓存效率，直接影响 Qwen3.5-122B 与 Qwen3.8 GDN 等模型的推理可靠性。

#### **2. 发布与破坏性变更**  
*无*。过去 24 小时内未发布新版本。最新稳定版仍为 **v0.30.0**，当前开发重点集中在 `main` 分支的预发布修复与功能稳定化。

#### **3. 新模型与硬件支持**  
- **ROCm (gfx942)**：修复缺失的 `ROCMAiterMLASparseImpl` 记录后，GLM-5.3-Flash 现已成功启动 (#59027)。  
- **Intel GPU (XPU)**：通过 PR #59865 修复多模态模型的融合输入归一化问题。  
- **量化**：NVFP4 支持已扩展至 Blackwell（SM121）上的 Nemotron-3.5-Lightning，但报告存在解码速度回归问题 (#59770)。  
- **模型更新**：修复后，Qwen3.8-Flash-Next（Qwen4Exp）现已正确加载 (#59756)。

#### **4. 性能与优化**  
- **推测解码效率**：PR #52244 恢复了在 MTP 推测解码下混合 GDN 前缀缓存命中率，避免重复提示场景下高达 **~30–40% 的批处理吞吐量损失**。  
- **内存与吞吐量**：动态推测解码（`num_speculative_tokens_per_batch_size`）在批大小阈值处因 cudagraph 降级导致 **灾难性聚合吞吐量崩溃** (#49548)。  
- **内核优化**：PR #51406 为 Qwen3-Next 启用融合 QK-norm+RoPE+gate Triton 内核，提升各后端前向传播效率。  
- **CPU 交换**：量化 MoE 上的 UVA 权重交换因 2 的幂次舍入导致约 **35% 主机内存浪费** (#58178)；修复待定。

#### **5. 稳定性与回归问题**  
- **严重**：Marlin `int8-activation` 路径在组尺度为负值时会损坏权重——影响 W4A8 与 W4A16 检查点 (#59403, #48905)。✅ **修复中**：PR #59895（依赖 #48926）。  
- **严重**：启用 MTP 推测解码时，`prompt_logprobs` 静默损坏 (#53488)。  
- **高**：`NixlPushModeConnector` 可靠性问题影响大规模部署 (#48633)。  
- **中等**：当 `chat_template_kwargs` 存在时，多模态请求中静默丢弃图像 (#59876)。  
- **回归**：自 v0.29.0 起，DGX Spark 上 `Nemotron-3.5-Lightning` 解码速度下降约 **16%** (#59770)。  
- **恢复**：PR #59895 与 #48926 联合解决 Marlin 尺度损坏的根本原因。

#### **6. 对应用开发者的影响**  
- **避免使用 `VLLM_MARLIN_INPUT_DTYPE=int8`**：在 PR #59895 上线前，对具有负组尺度的检查点禁用该设置——否则将导致静默输出损坏。  
- **谨慎启用混合 GDN + MTP 推测解码**：确保使用近期 nightly 构建以避免因缓存未命中导致的 ~30–40% 吞吐量损失 (#52244)。  
- **谨慎使用 `--api-key`**：未显式保护的路由可能暴露；PR #58948 确保 API 密钥保护与注册路由一致。  
- **监控 `nvidia/NVIDIA-Nemotron-3.5-Lightning` 的回归问题**：除非打补丁，否则预计解码速度下降约 16%。  
- **准备应对 `Responses API` 流式传输变更**：PR #59859 修复最终 harmony 响应中的 ID 重复问题——对严格遵循 OpenAI 兼容性的客户端至关重要。

> 🔗 [GitHub Issues](https://github.com/vllm-project/vllm/issues) | [PRs](https://github.com/vllm-project/vllm/pulls)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang Digest – 2026-10-04**

---

### **1. Today's Highlights**  
The SGLang project continues to accelerate its support for next-generation hardware, with critical performance fixes and feature work focused on **SM120 (RTX PRO 6000)** and **GB10 (DGX Spark)** platforms. Major stability issues have emerged around **NVFP4 KV cache corruption**, **FA4 attention crashes in hybrid extend mode**, and **misaligned token accounting in MLX chained decode paths**, all requiring urgent attention. Meanwhile, PRs are advancing key optimizations for DeepSeek V4.1 and AMD’s MiniMax-M3, particularly in sparse attention and FP8 kernel fusion.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new releases or breaking API/config changes observed.

---

### **3. New Model & Hardware Support**  
- ✅ **SM120 (NVIDIA RTX PRO 6000)**: Active perf tracking and bug reporting for `GLM-5.3-Flash` and `DeepSeek-V4-Flash` models under `--kv-cache-dtype nvfp4` and `fa4` backend.
- ✅ **GB10 (DGX Spark / NVIDIA GB10)**: Ongoing optimization for `Qwen4Exp`, `MiniMax-M3`, and `DeepSeek-V4.1`, including AITER ASM prefill, sparse MLA decode, and FP8 block selection.
- ✅ **AMD gfx950 / MI35x/MI355X**: Enhanced support via AITER kernels for `MiniMax-M3` and `DeepSeek-V4.1`, with new nightly accuracy tests added.
- ✅ **OCI Registry Support**: `oci://` model path resolution now supported via `llmman serve` (PR #37161), enabling secure, air-gapped model deployment workflows.

> 🔗 [PR #37161](https://github.com/sgl-project/sglang/pull/37161) | 🔗 [Issue #42369](https://github.com/sgl-project/sglang/issues/42369)

---

### **4. Performance & Optimization**  
- 🚀 **NVFP4 + SM120**: File-backed PLE table introduced (PR #42392) enables **6.8x lower cold-prefill TTFT** on GB10 by allowing concurrent host reads for cold rows.
- ⚙️ **Sparse Attention (AMD)**: AITER FP8 block selection reduces index-cache time; fused QK norm + RoPE + cache writes improve throughput (PRs #35357, #41707).
- 📈 **MoE Optimization (AMD)**: Small-batch MoE expert-count gate improves sorting efficiency on MI355X, addressing bottlenecks in low-concurrency inference (PR #41982).
- 🔧 **Kernel Fusion**: FLUX.3 rowwise FP8 quantization now fused with Triton (PR #41671); DFlash draft layers now built under checkpoint names (PR #40884).

> 🔗 [PR #42392](https://github.com/sgl-project/sglang/pull/42392) | 🔗 [PR #41982](https://github.com/sgl-project/sglang/pull/41982)

---

### **5. Stability & Regressions**  
⚠️ **Critical (High Severity)**  
- **NVFP4 KV Cache Corruption (SM120)**: Silently reuses fp8-calibrated `k/v_scale` as global scale → deterministic long-context corruption (PR #42369). *Fix pending.*
- **FA4 Attention Crash (SM120)**: `GLM-5.3-Flash` crashes during CUDA-graph capture in hybrid extend mode — only `triton` backend works (Issue #42012). *No fix yet.*
- **MLX Chained Decode Bug**: Per-token accounting skipped → stale `req_to_token` slots cause silent KV pool corruption (Issue #30093). *Patch in review.*

⚠️ **Medium Severity**  
- **DeepSeek-V4-Flash DSPARK**: Fails on topk=192 due to unsupported sparse-MLA config (Issue #33134).  
- **OpenAI API Inconsistency**: Non-streaming error responses don’t match OpenAI standard format (Issue #33504).

> 🔗 [Issue #42369](https://github.com/sgl-project/sglang/issues/42369) | 🔗 [Issue #42012](https://github.com/sgl-project/sglang/issues/42012)

---

### **6. What This Means for Application Developers**  
- **Avoid `--kv-cache-dtype nvfp4` on SM120** until #42369 is fixed — risk of silent context corruption in long-running or multi-request scenarios.
- **Use `triton` backend for `GLM-5.3-Flash` on SM120** if using speculative decoding or CUDA graphs — FA4 is unstable.
- **Enable `SGLANG_CAKE_ROUTES` (PR #42416)** to opt-in to high-performance kernel paths (e.g., sparse MLA decode, Mamba2 SSD/SSU) without breaking existing code.
- **Leverage file-backed PLE tables** (#42392) for large-scale, low-latency inference on GB10 systems — especially beneficial for cold-start-heavy workloads.
- **Validate your model configs** when using `--json-model-override-args` — current implementation doesn’t recursively update nested fields (Issue #33505).

> 💡 Pro Tip: Monitor CI health via [Issue #17050](https://github.com/sgl-project/sglang/issues/17050) — 1 broken, 8 flaky tests reported today indicate potential instability in core pipelines.

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 消息简报 – 2026-10-04**

---

### **1. 今日重点**  
最新开发重心集中在推测解码的稳定性、WebGPU 和 CUDA 性能优化，以及 MoE 模型和 GPU 内存管理的关键修复。显著进展包括 WebGPU `fill/set_rows` 中新增 f16 支持、修复多并行槽位（`-np N`）下 MTP 草稿接受率崩溃的问题，以及为 MoE 专家引入新的 GPU 缓存机制，以降低主机内存压力。

---

### **2. 发布与破坏性变更**  
今日未发布正式版本，但推送了 **b11379–b11382** 的关键补丁：  
- **b11379**：在服务器模式下将 `n_batch` 限制为 `n_ubatch`，修复了 `laya abort` 问题 ([#29903](https://github.com/ggml-org/llama.cpp/pull/29903))  
- **b11382**：为 WebGPU `fill/set_rows` 添加 f16 支持，防止启用 FA 后 `glm5-next` 的 CI 流水线失败 ([#29897](https://github.com/ggml-org/llama.cpp/pull/29897))  
- **b11380**：更新 `cpp-httplib` 至 v0.59.0 ([#29886](https://github.com/ggml-org/llama.cpp/pull/29886))  

> ⚠️ 使用推测解码（MTP/draft-mtp）且启用了 multi-ubatch（`-np N`）的开发者应升级至 b11379 或更高版本，以避免草稿接受率无声崩溃。

---

### **3. 新模型与硬件支持**  
- **GLM5Next**：新增 MTP 支持并启用图优化 ([#29928](https://github.com/ggml-org/llama.cpp/pull/29928))  
- **Qwen4Exp**：针对 MoE 推理进行了优化，减少索引器得分内存占用 ([#29825](https://github.com/ggml-org/llama.cpp/pull/29825))  
- **WebGPU**：扩展对 `fill/set_rows` 中 `f16` 张量的支持，提升与量化模型（如 `glm5-next`）的兼容性  
- **SYCL/CUDA**：持续修复 `mul_mat` 中的内存错误，并通过减少 VGPR 溢出改善 Q2_K 性能 ([#29910](https://github.com/ggml-org/llama.cpp/pull/29910))

---

### **4. 性能与优化**  
- **CUDA (AMD)**：通过更温和的循环展开策略，显著减少 Q2_K MMQ 溢出；基准测试显示 gfx906（MI50）上吞吐量提升 ([#29910](https://github.com/ggml-org/llama.cpp/pull/29910))  
- **ROCm/HIP**：使用 `__builtin_amdgcn_perm` 进行 `q1_0` 解包，提升性能 ([#29927](https://github.com/ggml-org/llama.cpp/pull/29927))  
- **MoE**：新引入的 GPU 缓存机制用于卸载专家，降低主机内存开销；小批量（≤32 token）受益于 LRU 缓存 ([#29887](https://github.com/ggml-org/llama.cpp/pull/29887))  
- **Vulkan**：矩阵乘法调度现在尊重 `maxComputeWorkGroupCount`，防止溢出崩溃 ([#29533](https://github.com/ggml-org/llama.cpp/pull/29533))

---

### **5. 稳定性与回归问题**  
今日报告的高严重性问题包括：  
- 在贪婪采样下，当目标模型被量化（如 Q4_K_M）时，推测解码出现偏差；仅在 bf16 下匹配 ([#25618](https://github.com/ggml-org/llama.cpp/issues/25618))  
- 长提示词下使用 `-np N` 时，MTP 草稿接受率降至 0.0 —— 由异步 `t_h_nextn` 竞态条件引起 ([#27572](https://github.com/ggml-org/llama.cpp/issues/27572))  
- GLM-5.3-Flash 在 Metal 上解码卡死，因 Lightning Indexer 回退至 CPU ([#29867](https://github.com/ggml-org/llama.cpp/issues/29867))  
- Qwen3.8-Flash-Next + MTP 在特定配置下启动即崩溃 ([#29811](https://github.com/ggml-org/llama.cpp/issues/29811))  
- Qwen4Exp 在 CUDA 上解码速度随上下文增长呈线性下降 ([#28734](https://github.com/ggml-org/llama.cpp/issues/28734))  

> ✅ 多个回归问题已有修复合并：[#29924](https://github.com/ggml-org/llama.cpp/pull/29924)（n-gram 草稿拒绝）、[#29897](https://github.com/ggml-org/llama.cpp/pull/29897)（WebGPU f16）、[#29889](https://github.com/ggml-org/llama.cpp/pull/29889)（SYCL 内存安全）

---

### **6. 对应用开发者的意义**  
- **生产环境使用推测解码请务必采用 `b11379+` 版本** —— 更早版本在 `-np N` 下可能静默失败。  
- **在多槽位设置中，使用长提示词时暂勿启用 `draft-mtp`**，直至 `t_h_nextn` 竞态问题解决。  
- **利用 MoE GPU 缓存** ([#29887](https://github.com/ggml-org/llama.cpp/pull/29887)) 加速大尺寸 MoE 模型（如 Qwen4Exp、GLM5Next）的小批量推理。  
- **预计在 AMD GPU 上，通过近期 CUDA/ROCm PRs** ([#29910](https://github.com/ggml-org/llama.cpp/pull/29910), [#29927](https://github.com/ggml-org/llama.cpp/pull/29927)) 可获得 Q2_K 与 Q1_0 的性能提升。  
- **密切监控 Vulkan/Metal 后端行为** —— 矩阵乘法调度与索引器的已知不稳定性仍为高上下文推理的潜在风险。  

> 📌 **建议**：为确保 WebGPU 与推测解码工作流稳定，建议锁定至 `b11382` 或更高版本。关注 [问题 #25618](https://github.com/ggml-org/llama.cpp/issues/25618) 以了解量化相关正确性风险。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth Digest – 2026-10-04**

---

### **1. 今日亮点**  
自 *b10715-mix-86bd2d3* 版本以来，关键性能退化现象显著加剧，双 GPU 环境下的张量拆分推理（尤其在 RTX 5070 Ti 上）速度降至约 48 tokens/s，较早期版本的 115–120 t/s 显著下降。此性能退化与 `max_cuda_graphs = 64` 及 CUDA Graph 处理逻辑变更相关，影响原生 Windows 与 WSL2 环境。与此同时，Unsloth Studio 中暴露出多项 UI/UX 及稳定性问题，包括 TTS 格式泄露、上下文计量不准以及工具调用生命周期缺陷。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告新发布或破坏性变更。*  
但当前活跃的 PR 中存在若干待定的破坏性变更：  
- **PR #12600**：将单一“音频”页面拆分为 *Speak*、*Music* 与 *Transcribe* 三个独立工作区——一次重大的 UI 重构，可能影响依赖音频工作流路由的集成系统。[GitHub PR #12600](https://github.com/unslothai/unsloth/pull/12600)  
- **PR #12641**：强制对 SageAttention/FlashAttention 4 请求实施稳健降级策略，防止图像/视频生成过程中出现静默失败或噪声。[GitHub PR #12641](https://github.com/unslothai/unsloth/pull/12641)

---

### **3. 新模型与硬件支持**  
- **SageAttention 2 与 FlashAttention 4**：现通过内核仓库动态探测并加载；支持全新 Studio 安装场景，并具备完善的依赖解析能力。[GitHub PR #12654](https://github.com/unslothai/unsloth/pull/12654)  
- **预量化扩散模型**：兼容 torchao 0.17–0.18 及主分支的 `.safetensors` 格式，支持更安全地加载预量化去噪器/文本编码器。[GitHub PR #12645](https://github.com/unslothai/unsloth/pull/12645)  
- **Vulkan 混合 GPU 锁定**：修复确保在混合配置（如 RX 7700 XT + 集成显卡）中，独立显卡优先于集成显卡使用。[GitHub PR #12650](https://github.com/unslothai/unsloth/pull/12650)

---

### **4. 性能与优化**  
- **张量拆分推理性能退化**：双 GPU `--split-mode tensor` 在 RTX 5070 Ti（Win/WSL2）上运行速度已降至 **~48 t/s**，相较此前版本（*b10687-mix-67dfc8b* 与官方 ggml 构建）的 **115–120 t/s** 明显下降。根本原因关联至 `max_cuda_graphs = 64` 及 CUDA Graph 管理不当。[GitHub Issue #12468](https://github.com/unslothai/unsloth/issues/12468)  
- **自动步数跳过**：引入基于模型的自动步数跳过机制（默认在五款模型上实现 1.44x 至 1.81x 加速；MiniMax-H3 最高达 1.81x）。仅在 `speed_mode=max` 且模型步数 ≥20 时启用。[GitHub PR #12652](https://github.com/unslothai/unsloth/pull/12652)  
- **FBCache 优化**：静态缓存下保持完整图编译与 CUDA Graph，无需用户干预即可提升吞吐量。[GitHub PR #12652](https://github.com/unslothai/unsloth/pull/12652)

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 影响 | 状态 |
|---------|------|--------|--------|
| 🔴 高 | 张量拆分解码速度下降（~48 t/s 对比 115–120 t/s） | 双 GPU 推理性能严重退化；自 `b10715-mix-86bd2d3` 所有构建均受影响 | 开放 ([#12468](https://github.com/unslothai/unsloth/issues/12468)) |
| 🔴 高 | `--mlock` 被拒绝 + mmproj-F16.gguf 重新从磁盘加载 | Studio 出现严重延迟尖峰；模型状态未能保留 | 已关闭 ([#12372](https://github.com/unslothai/unsloth/issues/12372)) |
| 🟡 中 | 实时监控器与下载弹窗重叠 | UI z-index 冲突；Studio 界面视觉混乱 | 开放 ([#12623](https://github.com/unslothai/unsloth/issues/12623)) |
| 🟡 中 | `tool_choice="none"` 下工具调用缺乏终端事件 | 流式客户端可能出现挂起或响应生命周期误判 | 开放 ([#12626](https://github.com/unslothai/unsloth/issues/12626)) |
| 🟡 中 | TTS 读出 Markdown 格式（如“星号星号”） | 语音输出体验差；破坏自然语流 | 开放 ([#12547](https://github.com/unslothai/unsloth/issues/12547)) |

---

### **6. 对应用开发者的影响**  
- 若在多 GPU 系统中使用张量拆分推理，请避免使用 `b10715-mix-86bd2d3` 及后续版本，建议回退至 `b10687-mix-67dfc8b` 或官方 ggml 构建，直至 `max_cuda_graphs` 问题解决。  
- 使用涉及工具、音频或视觉模型的 Studio 工作流时需注意潜在不稳定性——尤其是 `tool_choice="none"` 与 `--mlock` 场景。生产环境请使用稳定构建标签。  
- 充分利用新增的自动步数跳过与注意力内核探测功能（`SageAttention`、`FlashAttention`），可在无需手动调优的情况下显著提升图像/视频生成性能。  
- 设计应面向动态模型加载——向模块化音频工作区与安全 `.safetensors` 加载的演进，预示着更健壮、模块化的运行时环境趋势。  
- 密切关注上下文计量行为——新功能需求反映出对压缩与工具交接状态实时可视性的强烈需求，提示代理框架需增强遥测能力。  

---  
*本摘要由 GitHub 数据生成：unslothai/unsloth, 2026-10-04.*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*