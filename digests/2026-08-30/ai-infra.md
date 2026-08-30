# AI 基础设施日报 2026-08-30

> 生成时间: 2026-08-30 00:38 UTC | 覆盖项目: 6 个

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

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest – 2026-08-30

---

### **1. Today's Highlights**  
SGLang continues to strengthen its foundation for high-performance, scalable LLM serving with critical stability fixes and kernel-level optimizations targeting Blackwell (SM100/SM103) and ROCm platforms. Key developments include a fix for speculative decoding deadlock in multi-node setups on GB10, improvements to NVFP4 MoE support on Blackwell, and ongoing work to unify speculative decoding behavior across backends. The project is actively addressing flaky CI infrastructure and enhancing test coverage to improve long-term maintainability.

---

### **2. Releases & Breaking Changes**  
None reported in the last 24 hours. No new versions or breaking API/config changes were released.

---

### **3. New Model & Hardware Support**  
- **Blackwell (SM100/SM103)**: Active development of native NVFP4 fused attention kernels (`feat(kv-cache): support SM100 NVFP4 GenMHA and speculative decoding`) and improved handling of `flashinfer_trtllm` path for MoE models.  
- **ROCm/gfx1250**: Added experimental support via PR #36871 for gfx1250 on ROCM 10, enabling future compatibility with next-gen AMD GPUs.  
- **Diffusion Models**: Expanded rollout API support with trajectory filtering (PR #36994), enabling efficient flowGRPO training workflows.  
- **Model Updates**: GLM-5.3-Flash now supports pipeline parallelism (though issue #36906 reports a startup crash; see Stability section).

---

### **4. Performance & Optimization**  
- **Kernel Fusion**: PR #37075 fuses NVFP4 bias add + GELU into a single operation on Blackwell, reducing memory-bound overhead in denoising paths — expected to improve diffusion inference throughput.  
- **CUDA Graph Pooling**: PR #36911 introduces dynamic sizing based on warmup measurements and improves borrowing resilience under speculative decoding loads, reducing graph allocation failures.  
- **MoE Optimization**: PR #22426 rewrites DeepEP post-reorder as a Gluon kernel, enabling better instruction fusion (`fma.rn.bf16x2`) and improved throughput on W4AFP8 MoE models.  
- **Speculative Decoding**: Ongoing efforts to unify behavior across backends (e.g., PR #36612 for cross-backend prefill→decode failure notification) and enhance adaptive speculation (Issue #23705).  

---

### **5. Stability & Regressions**  
| Severity | Issue | Description | Fix Status |
|---------|-------|-------------|------------|
| 🔴 Critical | [#33289](https://github.com/sgl-project/sglang/issues/33289) | Multi-node TP=2 deadlock during normal traffic using DSPARK speculative decoding on DGX Spark (GB10) — one rank wedges in NCCL proxy append, peer idles at broadcast. | ❌ Unresolved — intermittent, hard to reproduce, but severe impact on production clusters. |
| 🔴 Critical | [#36941](https://github.com/sgl-project/sglang/issues/36941) | Long prefill (>40k tokens) exhausts unified memory silently, killing worker rank without traceback on 2× DGX Spark (GB10). | ❌ Unresolved — no error logging despite OOM-like behavior; critical for long-context agents. |
| 🟡 High | [#36807](https://github.com/sgl-project/sglang/issues/36807) | `fast_topk_v2` can return incorrect top-k sets when radix threshold bucket exceeds 4096-entry buffer (k=2048, long rows). | ❌ Unresolved — silent correctness bug affecting ranking accuracy. |
| 🟡 High | [#34629](https://github.com/sgl-project/sglang/issues/34629) | FlashInfer TRTLLM NVFP4 MoE tile-192 path produces NaNs on Blackwell after upgrading FlashInfer beyond 0.6.16rc4. | ⚠️ Partially addressed — regression introduced by upstream dependency update. |
| 🟡 Medium | [#25587](https://github.com/sgl-project/sglang/issues/25587) | Hybrid-GDN MTP speculative decoding not lossless on Ascend NPU. | ❌ Unresolved — affects model fidelity in hybrid AI deployments. |

> ✅ *Note:* CI health remains fragile — 2 broken, 5 flaky tests reported in [Issue #17050](https://github.com/sgl-project/sglang/issues/17050). Maintenance mode was briefly active (closed PR #21065), indicating ongoing infra instability.

---

### **6. What This Means for Application Developers**  
- **Avoid DP+PP+Speculative Decoding on Multi-Node GB10 Until Fixes Land**: Use `--disable-overlap-schedule` as workaround for known deadlocks (issue #33289). Monitor for updates to DSPARK and DFLASH algorithms.  
- **Long Context Workloads Risk Silent Crashes**: Be cautious with prefill lengths >40k tokens on GB10 systems. Implement runtime checks or fallback to chunked processing.  
- **Ensure Correctness in Top-K Sampling**: If using `fast_topk_v2` with large vocabularies or long sequences, verify output consistency until PR #36807 is resolved.  
- **Leverage New Diffusion APIs**: Use `/rollout/generate` with trajectory filtering (PR #36994) for efficient training pipelines.  
- **Watch for NVFP4 and MoE Stability**: While performance gains are promising, avoid production use of NVFP4 MoE on Blackwell until PR #34629 is fixed.  
- **Upgrade Dependencies Early**: PR #37073 pulls FlashInfer 0.6.18 for CUDA 13.4 — ensure compatibility with your stack before deploying.

> 💡 **Pro Tip:** Use `--component-precisions` (PR #36991) to fine-tune precision per component in diffusion pipelines for better control over memory and speed tradeoffs.

---  
*Digest generated from GitHub data: github.com/sgl-project/sglang — 2026-08-30*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-08-30**

---

### **1. 今日亮点**  
Ollama 生态系统持续成熟，开发重点聚焦于代理集成稳定性、GPU 内存管理以及跨平台兼容性。MLX 运行器（内存泄漏）和虚拟机及 Jetson 设备上的 Vulkan/GPU 检测问题已成为主要关注点，尤其影响长时间运行的推理任务。多项新提交正在解决核心运行时问题，包括环境感知的代理工具以及对 Windows 上 Claude Desktop 的更好支持。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新发布。*  
然而，正在进行的变更预示着 `0.33.x` 版本可能存在破坏性行为：
- **回归问题**：`--load-mode none` 现在无论是否具备 GPU 均强制全局启用 ([#18059](https://github.com/ollama/ollama/issues/18059))，可能在高性能硬件上导致性能下降。
- **模型加载不稳定**：用户报告在从 `0.32.9` 升级到 `0.32.10` 后，Virtio-GPU 虚拟机上出现模型启动超时问题 ([#18123](https://github.com/ollama/ollama/issues/18123))，表明 `llama-server` 初始化逻辑存在回归。

---

### **3. 新模型与硬件支持**  
- **新模型请求**：提议新增 `qwen-3.8-flash` 模型，与现有的 `cloud` 变体并列 ([#18128](https://github.com/ollama/ollama/issues/18128)) —— 预计相比 DeepSeek-V4 Flash 可降低约 30–40% 的资源占用，同时保持相当的智能水平。
- **平台支持**：  
  - **Windows**：正在推进的 PR 实现 **Claude Desktop 在 Windows 上的集成** ([#18104](https://github.com/ollama/ollama/pull/18104))。  
  - **Jetson Orin AGX / Nano**：在 Jetpack 7.2 R39 下持续报告 GPU 检测问题 ([#18067](https://github.com/ollama/ollama/issues/18067), [#17787](https://github.com/ollama/ollama/issues/17787))，原因包括 CUDA 错误（`cudaSetDevice err: 801`）和内存过度使用。  
  - **集成显卡（iGPU）**：正在开展工作以减少 Intel/AMD APU 上的内存开销，并改善内存压力处理 ([#14953](https://github.com/ollama/ollama/issues/14953))。

---

### **4. 性能与优化**  
- **内存泄漏**：多个报告指出 `mlxrunner` 在请求间出现无限制的内存增长，某案例显示在 64 GB 系统上内存使用量从初始 24 GB 增至 **75 GB** ([#16698](https://github.com/ollama/ollama/issues/16698), [#17875](https://github.com/ollama/ollama/issues/17875))。
- **Metal（Apple Silicon）**：`llama-server` 的 malloc 堆按线性增长（约每请求 5–12 MiB），且永不释放，导致持续负载下产生 **8.25 GB 分页交换** ([#18099](https://github.com/ollama/ollama/issues/18099), [#18106](https://github.com/ollama/ollama/issues/18106))。
- **KV 缓存保留**：MLX 与 Metal 运行器无法在请求间释放 KV 缓存，导致严重吞吐量下降和系统不稳 ([#16698](https://github.com/ollama/ollama/issues/16698), [#18125](https://github.com/ollama/ollama/issues/18125))。
- **优化提交**：  
  - 为集成 Vulkan GPU 提供直接 I/O，以匹配 CUDA/ROCm 的效率 ([#18124](https://github.com/ollama/ollama/pull/18124))。  
  - 在结构化输出下启用推测解码，以加快 JSON 模式生成速度 ([#18105](https://github.com/ollama/ollama/pull/18105))。

---

### **5. 稳定性与回归问题**  
按严重性和影响程度排序：

| 问题 | 严重性 | 描述 | 修复状态 |
|------|----------|-------------|------------|
| [#16698](https://github.com/ollama/ollama/issues/16698) | 严重 | MLX 运行器累积 KV 缓存 → **75 GB 内存**，32 GB 交换 | 进行中 |
| [#18099](https://github.com/ollama/ollama/issues/18099) | 严重 | `llama-server` malloc 堆线性增长 → **8.25 GB 交换**，无清理 | 进行中 |
| [#18123](https://github.com/ollama/ollama/issues/18123) | 高 | 升级至 `0.32.10` 后，在虚拟机上出现 `timed out waiting for llama-server to start` | 已提交 PR ([#18124](https://github.com/ollama/ollama/pull/18124)) |
| [#17839](https://github.com/ollama/ollama/issues/17839) | 高 | macOS 上本地 Qwen 模型的代理集成会无限挂起 | 已关闭但实际未解决 |
| [#17778](https://github.com/ollama/ollama/issues/17778) | 中等 | `qwen3.8:27b` 报错 `no user query found in messages`（500 错误） | 开放 |
| [#16532](https://github.com/ollama/ollama/issues/16532) | 中等 | Windows 上 `gemma4` 图像处理功能损坏 | 开放 |

---

### **6. 对应用开发者的影响**  
- **避免在生产环境中使用 `mlxrunner`**，直到内存泄漏修复上线——长期运行将导致**无限制的内存消耗**。
- **在 Apple Silicon/Metal 上谨慎使用 `OLLAMA_KEEP_ALIVE=-1`**；需监控主机内存使用情况——当前 `llama-server` 的内存泄漏可能导致交换抖动和崩溃。
- **在 ARM64/Linux 与 Windows 系统上验证模型加载路径**——近期回归问题同时影响虚拟机与原生部署。
- **预期在 `gemma3:12b` 与 `glm-5.3-flash:cloud` 上使用结构化输出（`format=JSON`）时出现不一致行为**，包括截断或格式错误的响应。
- **若使用 `qwen3.8`、`gemma4` 或 `claude` 模型，关键基础设施的升级应暂缓**——多个缺陷影响图像输入、工具调用和 API 稳定性。
- **为未来 CLI/UI 改进做好准备**：如 `feat(agent): add environment-aware computer control` ([#18101](https://github.com/ollama/ollama/pull/18101)) 等 PR 表明代理能力将更深入，但需进行细致的集成测试。

> ✅ **建议**：在 `0.33.2+` 解决已知内存与 GPU 问题前，生产环境中的稳定推理请锁定至 `0.32.9` 版本。实时关注 [GitHub Issues](https://github.com/ollama/ollama/issues) 和 PR 获取最新动态。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*