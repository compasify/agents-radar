# AI 基础设施日报 2026-08-13

> 生成时间: 2026-08-13 01:00 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施生态横向对比分析报告 · 2026-08-13

## 1. 生态全景

今日动态呈现出清晰的"竞速与承压并存"态势。推理引擎在 DeepSeek V4 / Kimi K3 等新一代模型的 Day-0 支持上展开激烈竞争，同时多节点部署、超长上下文、Blackwell 平台的稳定性问题成为共性痛点——vLLM 的高危 engine stall、SGLang 的多节点 deadlock、llama.cpp 的 RTX 5080 性能回退均指向同一结论：新硬件与新架构的适配仍处于"加速度赶工"阶段。Agent 应用的爆发正将网关层（成本、限流、结构化输出）与本地运行时（工具循环、推理链透传）推向功能迭代的前沿。整体来看，各层基础设施均将"稳定性恢复"列为最高优先级，而优化火力则集中在量化路径（FP8/NVFP4）、投机解码、前缀缓存与算子融合四大方向。

## 2. 各项目活跃度对比

| 项目 | 活跃 Issues | 活跃/合并 PRs | Releases | 今日关键信号 |
|------|------------|--------------|----------|-------------|
| vLLM | ~13（5 项高危） | ~10 | 无 | 升级后 DeepSeek 系列兼容事故、多节点永久 stall |
| SGLang | ~15（6 项严重） | ~7 | 无 | MLA 融合 PR 回滚、多节点 deadlock 未见修复 |
| llama.cpp | ~10 | ~13 | **3（b10369/b10373/b10375）** | RTX 5080 性能回退、HIP 数学语义破坏性变更预告 |
| Ollama | ~13 | ~14 | **1（v0.32.10-rc1）** | repeat_penalty 默认关闭、NVFP4 MLX prefill 提速 7-8% |
| LiteLLM | ~13 | ~11 | 无 | Spend Log 丢失三 PR 修复中、Azure 成本映射错误 |
| Unsloth | ~17 | ~14 | 无 | AMD 安装器虚假 GPU 报告根因修复、Studio 工具循环 PR |

## 3. 模型支持竞速

| 项目 | 新模型/新架构 | 关键进展 |
|------|--------------|---------|
| **vLLM** | Kimi-K3（ROCm Day-0）、DeepSeek V4（XPU SP）、Whisper 时间戳 | Kimi-K3 ROCm 走 AITER MLA（TP4 24 heads/rank）；XPU 序列并行入 PR |
| **SGLang** | Kimi K3、DeepSeek V4 Flash、MXFP4/NVFP4 | Kimi K3 MLA 融合 PR 回滚（#34642）；DSV4 Flash 优化仍待推进 |
| **llama.cpp** | Kimi-K3 文本模型（PR）、pocket-tts（已合入）、Qwen3.5 via OpenVINO | Kimi-K3 混合注意力（KDA+MLA+latent MoE）支持已提交，等待测试 |
| **Ollama** | nemotron_h MLX 视觉（PR）、NVFP4 MLX | MLX 视觉实现 RADIO encoder + chunked feature scattering，Mac 生态领先 |
| **LiteLLM** | Meta Muse Spark 1.2、Parallel AI Provider、Cohere Embed v4 多模态 | 模型接入最快：API 层新增即日可用，含 contributor 分层定价 |
| **Unsloth** | Radeon AI PRO R9700（gfx1201）识别 | DeepReinforce Ornith-1.0 支持为社区高票需求（23👍），暂无 PR |

**竞速结论**：vLLM 与 SGLang 在服务端 Day-0 支持上互不相让，但 SGLang 的 MLA 融合回滚显示其激进优化正付出稳定性代价；llama.cpp 以最广的新架构覆盖（混合注意力、语音 TTS）扮演"架构验证先行者"角色；Ollama 的 MLX 布局在 Apple Silicon 路线上尚无对手；LiteLLM 作为纯 API 层，模型接入速度天然领先——它比拼的不是推理能力，而是"计费+参数兼容"的完备度。

## 4. 性能优化前沿

今日优化火力集中在四个方向：

**① 量化路径与精度**：NVFP4/FP8/MXFP4 成主战场。vLLM MiniMax-M3-NVFP4 修复后 EAGLE3 解码加速 2.1-2.3×；SGLang 为 SM10x 提供 flashinfer cute-dsl mxfp8 GEMM（swap-AB/split-K）；Ollama 优化 NVFP4 MLX 全局 scale 算子（prefill 提速 7-8%）。同时 llama.cpp 反其道行——默认关闭 HIP 不安全快速数学，换 IEEE 精度，性能与精度取舍将由 ROCm 用户自行决定。

**② 投机解码**：从"能跑"到"可调"的阵痛期。vLLM 修复 DFlash 调度预算少一 slot（#51256），但 `num_speculative_tokens_per_batch_size` 的动态配置在并发阈值处引发吞吐崩塌（#49548）；SGLang 遇 DSpark CUDA Graph 几何不匹配（#34384）与低并发 launch 失败（#34522）；Ollama 通过默认关闭 repeat_penalty 对齐引擎行为，加速推测解码。

**③ KV cache / 前缀缓存**：vLLM 多模态前缀缓存命中时跳过 mm tensor 广播（#52041），减少 EngineCore→TP-worker 传输；SGLang 合并 cache events 减少调度器发布次数（#31479）；llama.cpp MTP 在 ROCm 上过度预留 compute buffer 导致上下文缩减（#26038）。

**④ 分布式与算子**：llama.cpp RPC 后端新增 tensor parallel（-sm tensor，RDMA 多机）+ 分离式 prefill PR 在推进；vLLM XPU DeepSeek V4 序列并行降低每卡显存；SGLang FlashInfer NVFP4 MoE tile-192 产生 NaN（#34629）——算子层优化与回退并存。

## 5. 分层定位差异

| 层级 | 项目 | 核心定位 | 今日关注焦点 |
|------|------|---------|------------|
| **生产级推理引擎** | vLLM / SGLang | 服务化部署、多卡多节点、高吞吐推理 | 多节点稳定性、DSpark/CUDA Graph 兼容、Blackwell 优化 |
| **本地/边缘运行时** | llama.cpp / Ollama | 单机优先、广泛硬件覆盖、低部署门槛 | 本地新架构支持、量化/显存平衡、HIP/MLX 后端质量 |
| **AI 网关/API 管理层** | LiteLLM | 统一接入、路由、成本管控、限流与可观测性 | Spend Log 数据完整性、限流计数器 bug、成本映射准确性 |
| **训练/微调工具链** | Unsloth | 高效微调 + 本地推理 Studio | 跨平台安装器稳定性、工具循环/RAG 能力扩展 |

分层价值主张越来越清晰：引擎层拼"新模型跑得多快、多稳"，运行时层拼"什么设备都能跑、跑得省"，网关层拼"业务不可感知、账单不出错"，微调层拼"从训练到部署的链路完整性"。

## 6. 值得关注的趋势信号

**① 稳定性已成为最大的隐性成本**。今日六大项目合计出现 4 起高危多节点/长上下文故障（vLLM #51921 永久 stall、SGLang #33289 deadlock、SGLang #34155 1M token OOM、llama.cpp #26918 性能回退）且多数无 fix PR。对生产部署者的启示：**升级前必须在目标负载上执行"空闲-恢复"与"长上下文压力"测试**，尤其是 DeepSeek 系列用户，vLLM 0.27.0 的兼容事故表明新版本不代表更安全。

**② Blackwell 是当前生态的"主线战场"**。SM100/SM103/SM120 同时出现在 vLLM（DSpark 崩溃）、SGLang（NVFP4 MoE NaN、SM120 优化计划）、llama.cpp（RTX 5080 回退、GLM-5.2 输出损坏）三个引擎中。新硬件平台的软件栈成熟度仍有明显 gap，但这也意味着针对 Blackwell 的推理优化/算子开发有可预见的工程量。

**③ Agent 应用正在"反向定义"基础设施需求**。今日动态中，工具调用解析（vLLM #51649）、结构化输出与 thinking 交互（Ollama #17705/#17706/#17708）、reasoning_content 透传（LiteLLM #27956）、SSE 事件解析（Unsloth #8608）、本地工具循环+MCP（Unsloth #8630）构成了清晰的 Agent 化功能版图。基础设施团队应意识到：**下一轮选型的关键指标不再是单纯的 tokens/sec，而是工具调用正确率、推理链完整性与结构化输出的稳定性**。

**④ 推测解码参数化进入深水区**。各引擎从"固定 k 投机"转向"动态预算"，但 vLLM 的吞吐崩塌和 SGLang 的 CUDA Graph 几何问题均表明，动态化需要更聪明的调度器与 CUDA Graph 适配策略，而非简单的参数暴露。生产环境建议**先压测后启用，以保守配置起步**。

**⑤ 可观测性缺口成为跨层共性问题**。LiteLLM 的 spend log 丢失、llama.cpp 的 metrics 口径错误、Ollama 缺失 server-level metrics、Unsloth 无实时速度展示——四个不同层级同时暴露观测盲区。这意味着**平台团队的投资窗口正在开启**：完整的推理链路可观测性（吞吐、成本、推理链、缓存命中率）尚无人做透。

**⑥ MLX 生态正在 Ollama 的推动下沉寂成长**。从 MLX KV connector 框架到 NVFP4 预填充优化再到视觉支持，Ollama 对 Apple Silicon 路线的投入已系统化。若您的部署矩阵包含 Mac，可提前验证 MLX 后端的可用性；x86 服务端路线则无需关注。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 动态日报 · 2026-08-13

## 今日速览

今日无新版本发布，社区焦点集中在多起高影响稳定性回归上：DeepSeek 系列模型在 v0.27.0 升级后出现多项兼容性故障，v0.27.0 多节点部署在空闲后存在引擎永久 stall 的高危 Bug。PR 侧有多项关键修复与优化进入活跃状态，包括 DFlash 调度预算修正、多模态张量广播裁剪以及 XPU DeepSeek V4 序列并行支持。

## 新模型与硬件支持

- **Kimi-K3 ROCm 支持路线图**：上游 Issue 持续跟踪 Day 0 特性基线，包括 AITER fused-moe a16w4/a8w4 集成与性能优化。 [#50682](https://github.com/vllm-project/vllm/issues/50682)
- **XPU DeepSeek V4 序列并行**：PR 为 Intel XPU 路径加入 SP 支持，让 MoE/超连接阶段的激活沿序列维度切分，降低每卡显存占用。 [#51346](https://github.com/vllm-project/vllm/pull/51346)
- **Kimi-K3 AMD 注意力路径优化**：PR 移除投影输出冗余拷贝，直接复用返回张量。 [#50592](https://github.com/vllm-project/vllm/pull/50592)
- **ROCm AITER MLA 非对齐头填充**：将非 16 对齐的 query heads 填充至支持粒度并裁剪输出，使 Kimi-K3 TP4 的 24 heads/rank 可走 AITER MLA 而非回退 Triton。 [#51647](https://github.com/vllm-project/vllm/pull/51647)
- **Whisper 原生词级时间戳**：实现 cross-attention + DTW 路径，`words` 字段不再返回 null。 [#47664](https://github.com/vllm-project/vllm/pull/47664)

## 性能与优化

- **MiniMax-M3-NVFP4 在 8×B200 上的首份修复后数据**：NVFP4 推理正确性修复（#48929）合入后，EAGLE3 解码加速达 **2.1–2.3×**。 [#51494](https://github.com/vllm-project/vllm/issues/51494)
- **DSpark 置信度调度验证**（PR 已关闭）：按请求置信度自适应调整 draft 验证预算，避免高并发下固定 k 投机导致的吞吐崩塌。 [#47808](https://github.com/vllm-project/vllm/pull/47808)
- **前缀缓存命中时跳过 mm 张量广播**：多模态场景下 EngineCore→TP-worker 不再传输已被前缀缓存覆盖的 tensor 数据，削减不必要开销。 [#52041](https://github.com/vllm-project/vllm/pull/52041)
- **动态投机解码吞吐崩塌（回归报告）**：`num_speculative_tokens_per_batch_size` 在批大小阈值处引发 catastrophic aggregate-throughput collapse（Qwen3.5-122B MTP, k=2），除预期的 PIECEWISE cudagraph 降级外还存在额外损耗。 [#49548](https://github.com/vllm-project/vllm/issues/49548)
- **Qwen3.5-35B-A3B 性能问题**：启用 DFlash 后采样接受长度仅 5–6，整体性能不佳。 [#50722](https://github.com/vllm-project/vllm/issues/50722)

## 稳定性与回归

### 高危

- **v0.27.0 多节点引擎永久 stall**：4-node TP=4（GB10/sm_121, aarch64），空闲约 1 分钟后 `shm_broadcast` writer 饥饿，请求永远无法进入调度器。暂无 fix PR。 [#51921](https://github.com/vllm-project/vllm/issues/51921)
- **0.26.0→0.27.0 升级后 DeepSeek V4 报错**：flash attention 路径在升级后直接失败，影响面较大。 [#51758](https://github.com/vllm-project/vllm/issues/51758)
- **Gemma4 在 vllm-openai:latest 无法启动**：镜像内 Transformers 5.15.0 与 Gemma4-NVFP4 不兼容（TP=2, KV cache fp8）。 [#51744](https://github.com/vllm-project/vllm/issues/51744)
- **Qwen3.6-35B-A3B-FP8 代码生成报 400 错误**：v0.23/0.24 均有复现，"Unterminated string starting at" 疑似 tokenizer/反序列化问题。 [#47761](https://github.com/vllm-project/vllm/issues/47761)
- **DeepSeek-V4-Flash + DSpark 在 SM120 崩溃**：RTX PRO 6000（Blackwell, CUDA 13.2）上 FlashInfer 稀疏 MLA decode kernel 路由错误。 [#50720](https://github.com/vllm-project/vllm/issues/50720)

### 中危

- **DeepSeek V4 Flash 输出乱码**：镜像 v0.21.0，启用 prefix caching 后输出异常，仍开放。 [#43416](https://github.com/vllm-project/vllm/issues/43416)
- **Intel Arc B50 双卡 TP=2 初始化崩溃**：`zeMemOpenIpcHandle` 返回 `INVALID_ARGUMENT`，与 #41663 同源。 [#48953](https://github.com/vllm-project/vllm/issues/48953)
- **Intel Battlemage 双卡 PP=2 不稳定**：Arc Pro B70 + B580 混合配置下引擎在首个请求后崩溃或挂起。 [#46072](https://github.com/vllm-project/vllm/issues/46072)
- **hybrid-SWA 前缀缓存塌陷**：Gemma-4-31B 多会话 round-robin 负载下，跨请求前缀复用率在池占用约 25% 时骤降为零。 [#48435](https://github.com/vllm-project/vllm/issues/48435)

### 已有修复 PR 的问题

- **KVBlockZeroer launch 越界**：Buildkite nightly 暴露的 kernel launch geometry overflow，已提交修复。 [#52058](https://github.com/vllm-project/vllm/pull/52058)
- **DFlash 调度预算少一个 slot**：并行草稿计算仅预留 K−1 个槽位，PR 修复 bonus query slot 的调度预算。 [#51256](https://github.com/vllm-project/vllm/pull/51256)
- **RMSNorm 舍入边界漂移**：CUDA kernel 在权重乘法阶段使用 `float` 导致与 `scalar_t` 路径的 bit-level 不一致，影响贪心 NGRAM/投机验证。 [#49639](https://github.com/vllm-project/vllm/pull/49639)
- **pythonic 工具解析器 9 个缺陷**：覆盖 `1e999` 极端参数、逐调用恢复等场景，对 agent 轨迹实测修复。 [#51649](https://github.com/vllm-project/vllm/pull/51649)

## 对应用开发者的意义

- **DeepSeek 系模型用户暂缓升级 v0.27.0**：本周报告集中在升级后 flash 错误、engine stall 与输出乱码，建议停留在已验证版本并跟踪 #51758 / #51921。
- **多节点部署需关注空闲 stall 风险**：4-node GB10 场景在约 1 分钟空闲后引擎不可恢复，常驻服务应增加健康检查与自动重启机制。
- **投机解码参数调优需谨慎**：`num_speculative_tokens_per_batch_size` 在并发达到批大小阈值时可能引发吞吐崩溃，生产环境建议先压测再启用动态配置。
- **多模态输入的前缀缓存收益提升**：PR #52041 减少了 mm tensor 的跨 worker 广播，对长前缀多模态请求的 TTFT 和吞吐有正收益，可关注合入后的回归测试。
- **Agent/工具调用场景**：pythonic 工具解析器修复（#51649）解决了参数级 JSON 安全与逐调用恢复问题，建议使用 LFM2 agent 轨迹做回归验证。
- **RL 训练栈**：Rust 前端 gRPC Control 服务新增 RL 生命周期控制（pause/resume、sleep/wake、weight-transfer），面向 RL 训练场景的调度与显存管理能力正在补齐。 [#51316](https://github.com/vllm-project/vllm/pull/51316)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

## SGLang 动态日报 2026-08-13

---

### 1. 今日速览

今日核心动态围绕**稳定性回归修复与关键算子的性能追踪**展开。Kimi K3 与 DeepSeek V4 的 Day-0 支持后续优化仍在推进，同时 CI 基础设施（AMD/ROCm）和单元测试覆盖成为社区讨论焦点。多个高优问题的修复 PR 已在今日现身，包括 MLA 融合算子 revert（#34642）和 prefix cache 快照修复（#34644）。

---

### 2. 版本发布与破坏性变更

**今日无新版本发布。**

- **[PR #34642] Revert "[Kimi K3] Fuse MLA gate projection into QKV-A GEMM"** (已关闭) — 因 CI 失败及疑似 2048 token 全量回归，该 PR 回滚了 #33623 的 MLA 门控投影融合改动。若您正在使用 Kimi K3，建议暂时锁定旧版本，等待后续修复。  
  https://github.com/sgl-project/sglang/pull/34642

- **[PR #30394] fix: make automatic NUMA binding configurable** (已关闭) — 修复 `SGLANG_AUTO_NUMA_BIND` 环境变量声明存在但门控被意外移除的问题。涉及 NUMA/CPU 绑定的配置行为变更，升级后请确认部署脚本中的绑定策略。  
  https://github.com/sgl-project/sglang/pull/30394

---

### 3. 新模型与硬件支持

- **[Issue #32607] Kimi K3 Roadmap**（更新于 08-12）— 持续跟进 Day-0 支持后的功能补齐与 Bug 修复。  
  https://github.com/sgl-project/sglang/issues/32607

- **[PR #28932] [AMD] Add dense-FP8 for MXFP4 checkpoints** (open) — 为 Quark MXFP4 检查点添加 dense-FP8 推理路径，支持 fused silu/fmul/activation quant，提升 AMD 平台混合精度模型的兼容性。  
  https://github.com/sgl-project/sglang/pull/28932

- **[Issue #33709] Finish the B12X FlashInfer NVFP4 MoE integration for SM120**（更新于 08-12）— Blackwell SM120 平台的 NVFP4 MoE 集成仍在推进。  
  https://github.com/sgl-project/sglang/issues/33709

---

### 4. 性能与优化

- **[Issue #19637] SM120 Performance Optimization Plan**（更新于 08-12）— 进展更新：DeepSeek V4 与 DeepGEMM MQA Indexer 已标记完成，但 DeepSeek V4 Flash 优化项待推进。  
  https://github.com/sgl-project/sglang/issues/19637

- **[Issue #33636] DeepSeek V4 Perf Tracking**（更新于 08-12）— 性能追踪新增高优项：集成 TRT-LLM DSv4 attention（SM100/103），FlashInfer MN...（已勾选）。  
  https://github.com/sgl-project/sglang/issues/33636

- **[Issue #21788] Context Parallelism Roadmap (2026 Q3)**（更新于 08-12）— 当前覆盖 DSA/MHA/GQA 模型，仍需补全其他架构。  
  https://github.com/sgl-project/sglang/issues/21788

- **[PR #34042] add flashinfer cute-dsl backend for mxfp8 gemm** (已关闭) — 为 SM10x dense mxfp8 GEMM 提供更快的 swap-AB/split-K 内核（相比 persistent cutlass），并设为默认选择。  
  https://github.com/sgl-project/sglang/pull/34042

- **[PR #31856] [AMD] Accelerate AITER unified-attention decode with scaled FP8 Q** (open) — BF16 Q 量化后可为 FP8 KV 路径启用原生 FP8 矩阵乘，降低 `kernel_unified_attention_3d` 开销。  
  https://github.com/sgl-project/sglang/pull/31856

- **[PR #31479] perf(kv-events): coalesce cache events** (open) — 合并缓存事件队尾的 KV 存储/移除事件，减少调度器发布次数。  
  https://github.com/sgl-project/sglang/pull/31479

---

### 5. 稳定性与回归

按严重程度排列（🔴=严重/崩溃，🟠=一般回归，🟡=跟踪类）：

- 🔴 **[Issue #33289] Multi-node TP rank-divergence deadlock**（更新于 08-12）— DeepSeek-V4 + DSpark 在 2 节点 TP=2 下，NCCL proxy append 卡死（logits all-gather），peer rank 卡在请求广播。**尚未见 fix PR**。  
  https://github.com/sgl-project/sglang/issues/33289

- 🔴 **[Issue #34235] Hierarchical cache + chunked prefill 16K scheduler hang**（更新于 08-12）— DSV4 sparse prefill 在 H20 FP8 下触发 watchdog abort，并在 0.5.16+PR 出现 sampling device-side assert。**未见 fix PR**。  
  https://github.com/sgl-project/sglang/issues/34235

- 🔴 **[Issue #34155] 1M-token prefill 导致 CUDA OOM**（更新于 08-12）— DSV4 indexer fp8_mqa_logits（nonpaged path）在 tp8/dp8 下崩溃，dp-attention 路径可服务等效请求。**未见 fix PR**。  
  https://github.com/sgl-project/sglang/issues/34155

- 🔴 **[Issue #34629] FlashInfer TRTLLM NVFP4 MoE tile-192 path produces NaNs**（更新于 08-12）— 升级 FlashInfer 超过 0.6.16rc4 后，SM100/103 的 NVFP4 MoE 出现非有限输出，GSM8K 评分归零。**未见 fix PR**。  
  https://github.com/sgl-project/sglang/issues/34629

- 🟠 **[Issue #29942] DeepEP low_latency buffer lazy init fails during CUDA graph capture**（更新于 08-12）— PP=2, TP=8, DP-attention, EP=8 的 Kimi K2.6 W4A8 配置下报错。**未见 fix PR**。  
  https://github.com/sgl-project/sglang/issues/29942

- 🟠 **[Issue #33659] DeepSeek-V4-Pro 3-4 pt score drop**（更新于 08-12，已关闭）— 0.5.12→0.5.14 版本间出现 LCB lite v6 等评测分数下滑，已关闭但值得关注。  
  https://github.com/sgl-project/sglang/issues/33659

- 🟠 **[Issue #34384] DSpark compact ragged CUDA Graph incompatible request-slot geometry**（更新于 08-12）— 同一 token tier 的 geometry 不匹配导致 CUDA Graph 启动失败。**未见 fix PR**。  
  https://github.com/sgl-project/sglang/issues/34384

- 🟠 **[Issue #34522] DSpark CUDA launch failure with concurrency=1 (Kimi-K3, v0.5.17)**（更新于 08-12）— 低并发下 CUDA launch 失败，**未见 fix PR**。  
  https://github.com/sgl-project/sglang/issues/34522

- 🟡 **[Issue #26340] CUDA Coredump Tracker**（更新于 08-12）— CI 自动收集的 coredump 事件持续更新，总计 232 条评论，用于追踪 pr-test.yml 中的崩溃。  
  https://github.com/sgl-project/sglang/issues/26340

- 🟡 **[Issue #22607] HiCache Consistency Fix Plan**（更新于 08-12，20 条评论）— 计划修复 PP + HiCache 在 disaggregated prefill 下的前缀一致性。  
  https://github.com/sgl-project/sglang/issues/22607

- 🟡 **[PR #34644] Fix Snapshot req.prefix_indices when prefix cache is disabled**（open）— 修复 cache-disabled 路径下 `req.prefix_indices` 类型/生命周期不一致问题。  
  https://github.com/sgl-project/sglang/pull/34644

---

### 6. 对应用开发者的意义

- **多节点/长上下文部署需谨慎**：近期报告集中在多节点 TP、超长 prefill（1M+ tokens）和 DSpark 场景。若您的 Agent 工作负载涉及跨节点推理或超长上下文，建议在升级前充分压测，并关注上述 🔴 级 issue 的进展。

- **AMD/ROCm 平台仍在加速成熟**：多个 AMD 专项 PR（MXFP4 dense 路径、AITER FP8 attention、CI 门控）正在推进。若您依赖 ROCm 部署 DeepSeek/GPT-OSS/Kimi，这些改动会直接改善 perf 稳定性，但当前 CI 缺失对应覆盖率，需自行验证。

- **Blackwell 是当前优化主战场**：SM120/SM100 的 NVFP4/FP8 kernel 集成是活跃开发线。注意 FlashInfer 版本更新可能引入数值回归（如 #34629），生产环境暂建议锁定在验证过的组合（如 0.6.16rc4 之前）。

- **CI 健康度提升对长线有利**：单元测试覆盖计划（#20865）和 CI 失败追踪（#17050）的持续推进，将减少 E2E 测试盲区，间接降低断更风险。

---
*日报生成时间：2026-08-13 | 数据来源：github.com/sgl-project/sglang*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 动态日报 2026-08-13

## 今日速览

今日发布 b10369 / b10373 / b10375 三个版本，核心变更包括 Qwen 模型裸函数解析收紧、imatrix 有限检查优化及 pocket-tts 新模型适配。Issue 侧最值得关注的是 RTX 5080 (Blackwell) 在 b10356→b10359 间约 40% 性能回归的报告（已被关闭，需要留意后续验证），以及 HIP 后端将默认关闭不安全快速数学运算对 ROCm 用户的潜在影响。分离式 prefill/decode 继续推进，已有实现 PR 在讨论中。

---

## 版本发布与破坏性变更

- **b10375** - chat：为 Qwen 模型收紧裸函数解析（#26793）
  https://github.com/ggml-org/llama.cpp/pull/26793
- **b10373** - imatrix.cpp：移动有限检查并仅检查被触及的专家（#26861）
  https://github.com/ggml-org/llama.cpp/pull/26861
- **b10369** - mtmd：支持 pocket-tts（#26871，合入后包含 GEMM+col2im 实现的转置卷积改造）
  https://github.com/ggml-org/llama.cpp/pull/26871

**破坏性变更预告：**

- **HIP 默认关闭不安全快速数学运算**（#26696，合并后生效）：新增 `GGML_HIP_UNSAFE_MATH` 编译选项，默认 OFF。HIP 构建默认转为 IEEE 兼容；如需恢复此前性能表现，需显式开启 `-DGGML_HIP_UNSAFE_MATH=ON`。ROCm 用户需评估精度/性能取舍
  https://github.com/ggml-org/llama.cpp/pull/26696
- **Server metrics 计数方式将修正**（#26920）：该 PR 指出当前 master 分支 metrics 统计存在正确性问题，合入后 `stats`/`metrics` 口径会变化，依赖监控数据的部署需关注
  https://github.com/ggml-org/llama.cpp/pull/26920

---

## 新模型与硬件支持

- **pocket-tts 合入**（b10369）：mtmd 现支持 pocket-tts，适配文本模型 API，depthwise 上采样通过 GEMM + col2im 实现以绕开 ggml 无分组转置卷积的限制
  https://github.com/ggml-org/llama.cpp/pull/26871
- **Kimi-K3 文本模型 PR**（#26185）：支持 KDA 线性 + MLA 混合注意力，并引入跨层残差注意力（attn_res_block_size）、潜在 MoE（latent MoE）与 situ 激活等新结构，等待测试
  https://github.com/ggml-org/llama.cpp/pull/26185
- **OpenVINO 后端适配 Qwen3.5**（#26952）：支持 Qwen3.5 Dense 和 MoE 在 CPU/GPU 运行，同时优化 GPU 峰值内存
  https://github.com/ggml-org/llama.cpp/pull/26952
- **RDNA4 文档补充**（#26745）：HIP 构建文档新增 gfx1200/gfx1201 支持说明
  https://github.com/ggml-org/llama.cpp/pull/26745
- **OpenCL Adreno xmem SDPA 路径**（#26331）：为 Adreno GPU 非因果 attention 增加 xmem SDPA 路径，修复 Z-Image 1024 分辨率下缓冲区静默损坏
  https://github.com/ggml-org/llama.cpp/pull/26331
- **Draft 模型 spec 类型自动检测**（#26814）：从本地 draft GGUF 的 `general.architecture` 元数据自动推断 spec 类型，修复本地 draft 模型加载后推测解码不激活的问题
  https://github.com/ggml-org/llama.cpp/pull/26814

---

## 性能与优化

- **RPC 张量并行支持**（#26610）：PR 为 RPC 后端添加 `-sm tensor`，涉及异步图计算、自定义 all_reduce、图 UID 缓存等，目标场景为 RDMA 多机推理
  https://github.com/ggml-org/llama.cpp/pull/26610
- **OpenVINO GPU 显存优化**（#26952）：降低 GPU 峰值内存占用
  https://github.com/ggml-org/llama.cpp/pull/26952
- **CI 构建加速**（#26983）：移除 RPC 冗余 job、削减 Vulkan SDK 缓存（约 500MB），整体缩短 CI 耗时
  https://github.com/ggml-org/llama.cpp/pull/26983
- **MTP 显存预留问题**（#26038，反馈中）：MTP draft context 在 ROCm/HIP 上过度预留 compute buffer，导致可用上下文缩减；等待优化
  https://github.com/ggml-org/llama.cpp/issues/26038
- **Server metrics 重构为解耦 `llama_decode()` 调用**（#26920）：为 #24866 中“decode 期间可访问 /metrics”铺路，避免监控接口在推理时被阻塞
  https://github.com/ggml-org/llama.cpp/pull/26920

---

## 稳定性与回归

按严重程度排序：

- **[严重] GLM-5.2 dense-MLA CUDA 输出损坏**（#26027）：任意真实 transformer 层 offload 到 GPU 后产生“部分可读文本 + 乱码”，RTX PRO 6000 Blackwell (SM120) 双卡复现，暂无 fix PR
  https://github.com/ggml-org/llama.cpp/issues/26027
- **[严重] Vulkan Mali-G925 多模态 prefill 全 NaN**（#26921）：Qwen3.5-0.8B 多模态在 Dimensity 9400（Mali-G925-Immortalis MC12）上 logits 全为 NaN，同构建在 CPU 正常，暂无 fix
  https://github.com/ggml-org/llama.cpp/issues/26921
- **[高] RTX 5080 性能回归 ~40%**（#26918，已关闭）：b10356→b10359 之间出现回归，prompt processing 与生成速度均受影响，且后续构建未恢复。当前已关闭，使用者若遇此问题建议对比 b10356 与 b10369
  https://github.com/ggml-org/llama.cpp/issues/26918
- **[高] 4×Tesla T10 tensor split 断言失败**（#26902）：Glimmer Q8_0 tensor 并行加载时 `ggml-backend-meta.cpp:537` 触发 `GGML_ASSERT(ret.axis != GGML_BACKEND_SPLIT_AXIS_UNKNOWN)`，暂无 fix
  https://github.com/ggml-org/llama.cpp/issues/26902
- **[高] ROCm gfx1151 RPC worker 在 TOP_K 崩溃**（#26746）：DeepSeek V4 prefill 超过 4096 token 后崩溃，涉及 RPC+HIP 混合路径，暂无 fix
  https://github.com/ggml-org/llama.cpp/issues/26746
- **[中] Windows ROCm 二进制崩溃**（#26963）：`cudaMemGetInfo failed` 崩溃；此前同类问题 #26929（无法检测 GPU）已关闭
  https://github.com/ggml-org/llama.cpp/issues/26963
- **[中] Gemma 4 SWA 遗忘关键细节**（#25751）：滑动窗口注意力在长上下文下丢失关键信息，暂无 fix
  https://github.com/ggml-org/llama.cpp/issues/25751
- **[中] DFlash AMD APU 性能回归 ~2×**（#25117）：Strix Halo (AI MAX+ 395) + 量化 MoE 目标上 DFlash 比基线（无推测）慢约 2 倍
  https://github.com/ggml-org/llama.cpp/issues/25117
- **[中] OpenVINO 无法加载 gemma-4-12B**（#24415）：Core Ultra 7 258V 上 CPU/GPU/NPU 均失败，暂无 fix
  https://github.com/ggml-org/llama.cpp/issues/24415

---

## 对应用开发者的意义

1. **Qwen 工具调用链路修复，Agent 应用应立即升级 b10375**：bare function 解析收紧修复了 Qwen 模型工具调用格式串扰问题（#26793），对依赖 function calling 的 Agent 稳定性有直接帮助
2. **Blackwell 用户谨慎升级**：b10359 后的构建存在未明确的性能回归（#26918），RTX 50 系列部署建议先在目标负载上对比 b10356 与最新版再决定是否升级
3. **ROCm 部署需关注 HIP 数学语义变更**：`GGML_HIP_UNSAFE_MATH` 默认 OFF 合入后，ROCm 推理精度更符合 IEEE 规范，但吞吐可能下降——追求性能者需重新编译并显式开启
4. **分离式 prefill 正在落地**：server 侧预填充 worker 已进入 PR 阶段（#25675），长上下文、高并发服务可在后续版本获得独立 prefill 资源池，架构设计可提前留出设备分组配置
5. **Metrics 口径即将变化**：升级后监控面板需重新校准吞吐/延迟统计（#26920），同时此次重构将解决 `llama_decode()` 期间无法访问 `/metrics` 的问题
6. **新的多模态/模型支持值得关注**：pocket-tts（语音）已合入，Kimi-K3（混合注意力）与 OpenVINO Qwen3.5 仍在 PR 阶段，如有对应硬件或场景可提前验证

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 动态日报（2026-08-13）

## 今日速览
- 发布 `v0.32.10-rc1`：默认 `repeat_penalty` 由 1.1 改为 1.0（关闭），对齐其他引擎并加速推测解码；NVFP4 MLX 模型 prefill 提速约 7–8%。
- 多个针对 structured outputs 与 thinking 交互的修复 PR 在途（#17705、#17706、#17708），同时 MLX 视觉支持与 OpenAI Responses API 能力持续增强。
- 需警惕：低量化格式乱码、Qwen 中文乱码、Gemma 4 特殊 token 重复等正确性问题仍开放且暂无修复 PR，建议关注升级窗口。

## 版本发布与破坏性变更
- **[v0.32.10-rc1](https://github.com/ollama/ollama/releases/tag/v0.32.10-rc1)**
  - **变更**：未显式设置 `repeat_penalty` 的模型，默认值从 1.1 改为 1.0（关闭）。该变更与 llama.cpp 等引擎行为一致，并可提升 speculative decoding 速度；若旧模型出现自我重复，需在模型参数中显式设置该值。
  - **优化**：带全局 scale 的 NVFP4 MLX 模型 prefill 速度提升约 7–8%。
- **[PR #16980](https://github.com/ollama/ollama/pull/16980)**：修复本地构建版本号被 semver 识别为预发布版本的问题，避免升级逻辑误判。

## 新模型与硬件支持
- **[PR #17714](https://github.com/ollama/ollama/pull/17714)**：`nemotron_h` 新增 MLX 视觉支持，实现 RADIO 视觉编码器与投影器，支持动态分辨率、确定性 placeholder 展开、chunked feature scattering 与 MTP offsets。
- **[PR #17594](https://github.com/ollama/ollama/pull/17594)** / **[PR #17589](https://github.com/ollama/ollama/pull/17589)**：`ollama launch` 新增 Muse Code 与 Talos 代理集成。
- **[PR #17710](https://github.com/ollama/ollama/pull/17710)**：本地缺少 MLX 后端时不再从 registry 拉取 MLX 模型，避免无效下载（Linux/Windows MLX 上线前的准备）。
- **[Issue #17510](https://github.com/ollama/ollama/issues/17510)**：社区请求提供 `deepseek-v4-flash:0731` 本地模型，尚未回应。

## 性能与优化
- **NVFP4 MLX prefill 优化**：`v0.32.10-rc1` 对带全局 scale 的模型提速约 7–8%；对应 **[PR #17703](https://github.com/ollama/ollama/pull/17703)** 已合入，将 double-scale nvfp4 模型的全局 scale 乘法和 cast 编译为单一算子，减少 kernel launch 与中间显存。
- **已知回归**：AMD Radeon 780M（Vulkan/Windows）上 `v0.30.7+` 对 Q4_K_M 量化出现约 10% generation / 20% prefill 回退（**[#16721](https://github.com/ollama/ollama/issues/16721)**，仍未关闭）。
- **MLX 性能问题**：macOS 上 `Qwen3.5:35b-mlx` 明显慢于非 MLX 版本，且 `Qwen3.6:35b-mlx` 无法运行（**[#17050](https://github.com/ollama/ollama/issues/17050)**）。

## 稳定性与回归
按严重程度排列：

- **模型输出乱码/正确性**
  - **[#17614](https://github.com/ollama/ollama/issues/17614)**：KV 量化从 q8_0 降到 q4_0 后，模型输出无意义乱码（如 “AI AI AI…”），开放中。
  - **[#17587](https://github.com/ollama/ollama/issues/17587)**：Qwen2.5-3B 在 Windows CPU 上处理中文输入时输出 ASCII 乱码（`@@@@@`、`!!!!!`），疑似 tokenizer 误检测，开放中。
  - **[#17459](https://github.com/ollama/ollama/issues/17459)**：Gemma 4 在 `"think": false` 时重复输出 `<unused49>` token，影响 API 及 VS Code 集成，开放中。
  - **[#17270](https://github.com/ollama/ollama/issues/17270)**：`v0.32.1` 起 `/api/generate` 报 `token repeat limit reached` 中止请求，属回归，开放中。

- **模型加载/崩溃**
  - **[#17517](https://github.com/ollama/ollama/issues/17517)**：Qwen 模型在 RTX 5070Ti 上加载出现内存峰值异常，设置 4k context 无效，开放中。
  - **[#17692](https://github.com/ollama/ollama/issues/17692)**：Nemotron3.5-lightning:30b 在 AMD AI395+ 上思考阶段停滞，需 Ctrl+C 中断，新提交，开放中。
  - **[#17431](https://github.com/ollama/ollama/issues/17431)**：ollama 0.32.4 镜像无法使用 NVIDIA GPU（CUDA 12.1），已关闭。

- **已修复/已有修复 PR**
  - **[#15485](https://github.com/ollama/ollama/issues/15485)**（SSRF 风险）+ **[PR #15504](https://github.com/ollama/ollama/pull/15504)**：blob hash 验证跳过问题已修复。
  - **[PR #17708](https://github.com/ollama/ollama/pull/17708)**：修复 raw `/api/generate` 请求默认开启 thinking 导致空回复的问题（Fixes #17700）。
  - **[PR #17705](https://github.com/ollama/ollama/pull/17705)**：修复 `/api/generate` 在 thinking 完成前过早应用 structured outputs，导致推理过程被 grammar 限制（Fixes #17544）。
  - **[PR #17706](https://github.com/ollama/ollama/pull/17706)**：修复 `/api/chat` 会话重启时丢失 structured outputs 格式语法的问题。

## 对应用开发者的意义
- **`repeat_penalty` 默认变更**：升级后未显式设置该参数的模型输出可能变化（尤其重复内容）。若应用依赖旧行为，请在 Modelfile 或请求中显式配置 `repeat_penalty`。
- **OpenAI 兼容层增强**：**[PR #17712](https://github.com/ollama/ollama/pull/17712)** 使 `reasoning_effort="minimal"` 映射为 `low`，避免 400；**[PR #17686](https://github.com/ollama/ollama/pull/17686)** / **[PR #17709](https://github.com/ollama/ollama/pull/17709)** 为 Responses API 加入原生 `web_search` 工具与搜索上限处理，利好 Codex 类 Agent。
- **Structured outputs 与 thinking 兼容性**：涉及 `/api/generate` 和 `/api/chat` 的 JSON grammar 行为修复（#17705/#17706/#17708），建议升级后重点回归“推理模型 + JSON 输出”场景。
- **可观测性需求**：**[Issue #17694](https://github.com/ollama/ollama/issues/17694)** 请求暴露 vLLM 风格的 server-level metrics，若落地将显著改善生产监控能力，目前仍为 feature request。
- **MLX 基础设施演进**：MLX KV connector 框架（**[PR #17707](https://github.com/ollama/ollama/pull/17707)**）与拉取保护（#17710）表明 Mac/Linux MLX 部署将更稳健，建议关注后续发布说明。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

## LiteLLM 动态日报 — 2026-08-13

### 今日速览

过去 24 小时无新版本发布。Spend Log 数据丢失问题是今日焦点：三个修复 PR（#34826、#34950、#36716）正集中解决 flush 取消与数据库写入失败导致的计费日志丢失。此外，新增 Meta Muse Spark 1.2 模型价格支持（#36717）与 Parallel AI Provider 扩展（#36704），同时 Azure GPT-5.6 成本映射错误（#36192）可能造成成本统计偏差，建议关注。

### 新模型与硬件支持

- **Meta Muse Spark 1.2**：新增 `meta/muse-spark-1.2` 及其 contributor 分层定价（$1.25/$4.25 per M tokens），修复此前账单记为 $0 以及 `reasoning_effort` 参数被 400 的问题。
  https://github.com/BerriAI/litellm/pull/36717

- **Parallel AI Provider 扩展**：从仅 search 支持扩展为完整 chat + responses LLM Provider，并补齐 `after_date`、`fetch_policy`、`location` 等 v1 search 参数。
  https://github.com/BerriAI/litellm/pull/36704

- **Cohere 多模态 Embedding**：两个 PR（#36715、#36692）分别修复 Cohere Embed v4 多模态输入被当作 `texts` 导致校验失败的问题，并修正多模态 usage 计费。
  https://github.com/BerriAI/litellm/pull/36715
  https://github.com/BerriAI/litellm/pull/36692

### 性能与优化

- **Complexity Router 分类器校准**（#36578）：针对开发者和 Agent 流量中"非平凡代码/多步技术任务"成为最常见请求、导致常规请求被错误路由至最昂贵 tier 的问题，引入按 router 可选的校准示例。适合重度使用 complexity router 的网关调优。
  https://github.com/BerriAI/litellm/pull/36578

- **OTEL 数据库 Span 归因**（#36595）：Prisma Python 客户端经本地 loopback 连接 Rust query engine，导致 APM 中数据库调用显示为 `localhost`。该 PR 将 span 正确归属至 PostgreSQL，改善可观测性。
  https://github.com/BerriAI/litellm/pull/36595

### 稳定性与回归

- **[Critical/已关闭] Redis Cluster 响应串线/数据泄露**（#25447）：OpenShift 多副本环境下响应返回给错误客户端。issue 已关闭，但今日活跃 PR 中未见对应修复，建议确认修复状态后再升级。
  https://github.com/BerriAI/litellm/issues/25447

- **max_parallel_requests 限流失效**（#27955）：客户端中途取消 `/v1/messages` 流式请求时，Redis 计数器单调递增，最终导致所有请求被错误限流。Anthropic adapter 下复现，暂无 fix PR。
  https://github.com/BerriAI/litellm/issues/27955

- **Azure GPT-5.6 成本映射错误**（#36192）：`azure/gpt-5.6-terra/luna` 沿用 OpenAI 降价后价格，但 Azure 未同步降价，导致成本统计偏差。
  https://github.com/BerriAI/litellm/issues/36192

- **429 响应泄露完整 Token Hash**（#27884）：并行请求限流器的 429 错误体包含完整 64 字符 SHA-256 token hash，存在敏感信息暴露风险。
  https://github.com/BerriAI/litellm/issues/27884

- **global_max_parallel_requests 不生效**（#27900）：全局并发限制配置未按预期工作。
  https://github.com/BerriAI/litellm/issues/27900

- **路由策略误捕获修复**（#36627，PR open）：单独的 tagged pre-routing 策略此前会捕获所有请求，未标记请求被路由到未选择的 tier 并产生 unmapped-provider 400。修复后，共享模型名场景下未标记请求可正确绕过 tagged 策略。
  https://github.com/BerriAI/litellm/pull/36627

- **Spend Log 丢失修复进行中**（#34826、#34950、#36716）：分别解决 flush 取消后出队批次直接丢失、DB 传输错误时批次未重新入队、proxy 关闭前队列未排空等问题。三个 PR 均处于 open 未合并状态。
  https://github.com/BerriAI/litellm/pull/34826
  https://github.com/BerriAI/litellm/pull/34950
  https://github.com/BerriAI/litellm/pull/36716

- **流式解析空 chunk 崩溃**（#36553，已关闭）：`_should_start_new_content_block` 无条件访问 `chunk.choices[0]`，OpenAI 格式后端发送 usage-only chunk 时触发崩溃。
  https://github.com/BerriAI/litellm/issues/36553

- **Guardrails 评估记录丢失**（#36566）：`litellm_content_filter` 的评估结果未出现在请求日志和 Guardrails Monitor 中。
  https://github.com/BerriAI/litellm/issues/36566

- **Ollama reasoning_content 始终为 null**（#27956）：Qwen3、DeepSeek-R1 等推理模型的思维链内容丢失，下游 Langfuse 等观测工具拿不到 reasoning 数据。
  https://github.com/BerriAI/litellm/issues/27956

- **Deepseek 工具调用后空白消息**（#31553）：Codex 场景下，Deepseek API 在含 tool_calls 的 assistant 消息后产生额外空白 assistant 消息。
  https://github.com/BerriAI/litellm/issues/31553

- **Python 3.13 wheel 缺失**（#36526，已关闭）：litellm 1.96.1 仅发布 cp310 wheel，无 cp313/sdist，Python 3.13 环境安装失败。
  https://github.com/BerriAI/litellm/issues/36526

### 对应用开发者的意义

- **限流配置需重新验证**：若依赖 Anthropic Messages API 和 `max_parallel_requests` 限流，#27955 和 #27900 可能导致限流失效或过度限制。建议在目标环境检查 Redis 计数器行为。

- **计费与审计数据可能不准**：Azure GPT-5.6 成本映射错误（#36192）与 spend log 丢失问题（#34826 系列）会直接影响账单数据。涉及成本统计的团队升级前应重点验证 spend log 链路。

- **路由行为将变化**：#36627（未标记请求绕过 tagged 策略）与 #36578（complexity router 校准）合入后，模型选择与分流规则会改变，建议在 staging 环境回归测试。

- **错误码语义改善**：#35849 将缺失必需参数从 500 改为 400，对 API 客户端更友好；依赖 500 做监控告警的团队需调整规则。
  https://github.com/BerriAI/litellm/pull/35849

- **新模型/Provider 扩展**：Meta Muse Spark 1.2 与 Parallel AI 提供新的模型选项；Cohere Embed v4 多模态修复对 RAG 场景有价值。

- **MCP/工具集成仍有坑**：自定义 MCP server 添加失败（#23869）与 MCP 防护模板创建失败（#30953）均未确认修复，Agent 应用的 MCP 编排链路需保持关注。

- **私有仓库 skills 认证**：#26071 需求热度高（👍 13），社区对 SSH key / GitHub token 方式加载私有技能仓库有明确诉求，可跟进该 feature 进展。
  https://github.com/BerriAI/litellm/issues/26071

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 动态日报 — 2026-08-13

## 1. 今日速览

无新版本发布。今日核心动态是 Unsloth Studio/Desktop 跨平台稳定性修复的集中提交：AMD 下“安装器报告 GPU 正常但实际 CPU-only 运行”的根因修复（[#8620](https://github.com/unslothai/unsloth/pull/8620)、[#8606](https://github.com/unslothai/unsloth/pull/8606)）、Windows 安全策略/EDR 误报拦截修复（[#8592](https://github.com/unslothai/unsloth/pull/8592)、[#8586](https://github.com/unslothai/unsloth/pull/8586)）、macOS llama-server 启动失败处理（[#8574](https://github.com/unslothai/unsloth/pull/8574)）均于过去 24 小时提交。硬件方面新增 Radeon AI PRO R9700 (gfx1201) 识别；社区对 DeepReinforce Ornith-1.0 支持的呼声最高（[#6721](https://github.com/unslothai/unsloth/issues/6721)，23 👍）。

## 2. 版本发布与破坏性变更

过去 24 小时无新 Release。以下 PR 已关闭或即将合入，进入下一版本后可能影响现有部署行为，请留意：

- **VRAM 预算分数可调**（[#8589](https://github.com/unslothai/unsloth/pull/8589)）：Studio 上下文窗口预算从固定值改为可配置分数。2×RTX 3090 用户此前 Studio 只给 175k 上下文而 LM Studio 可到 200–250k，作者逐一拆解保留项后认为大部分为真实成本（`--parallel 4` 槽位 logits、2049 MiB compute buffer），通过暴露预算分数可让用户自行换取更大上下文。
- **本地工具循环引入**（[#8630](https://github.com/unslothai/unsloth/pull/8630)）：为 vLLM、Ollama、llama.cpp 及自定义 OpenAI 兼容连接增加 Studio 自有工具循环，含 Search、Code、MCP 与 RAG，但**默认关闭**，需在连接级别显式 opt-in。对 Agent 应用开发者有实际影响，见下文。

## 3. 新模型与硬件支持

- **新增 Radeon AI PRO R9700 (gfx1201) 检测**（[#8573](https://github.com/unslothai/unsloth/pull/8573)，已关闭）：该卡既不属于 9070 也不属于 9080，此前 GPU 名称推断失效，导致 Windows 安装器报告 `gpu none (chat-only / GGUF)` 并装入 CPU 版 PyTorch。此 PR 修正识别逻辑。
- **DeepReinforce Ornith-1.0 支持请求**（[#6721](https://github.com/unslothai/unsloth/issues/6721)，open，23 👍）：社区高票请求，希望 Unsloth 提供 Ornith-1.0 的优化变体或至少保证工具链兼容，目前未见对应 PR。
- **MiniMax-H3 sd-cli 预检**（[#8570](https://github.com/unslothai/unsloth/pull/8570)，open）：在下载数百 GB 的 H3 bundle 前先校验 `/usr/bin/sd` 是否支持 MiniMax-H3，避免下载完成后才在首次生成时报错（对应 issue [#8507](https://github.com/unslothai/unsloth/issues/8507)）。
- **MiniMax-M3 GGUF 加载失败**（[#8513](https://github.com/unslothai/unsloth/issues/8513)，open）：macOS Studio（llama.cpp b10360）加载 `unsloth/MiniMax-M3-GGUF — UD-Q6_K_XL` 时提示缺少 indexer keys，疑似 Studio 内置 llama.cpp 与 HF 量化版本不同步，目前无修复 PR。

## 4. 性能与优化

- **VRAM 预算可调（进行中）**（[#8589](https://github.com/unslothai/unsloth/pull/8589)）：如上文所述，可配置上下文保留分数，面向多卡高显存用户提升上下文窗口。具体数字：2×RTX 3090 上 Studio 默认 175k vs LM Studio 200–250k。
- **实时 prefill/decoding 速度显示（请求）**（[#8528](https://github.com/unslothai/unsloth/issues/8528)，open，1 👍）：当前 Studio API 面板只显示 generation 速度且仅在请求完成后展示；社区请求在请求进行中实时展示 prompt processing 与 generation 速度，以便对比不同量化档性能。暂无实现 PR。

## 5. 稳定性与回归

按严重程度排列：

- **AMD：安装器报告 GPU 正常，实际后端 CPU-only 运行**（[#8473](https://github.com/unslothai/unsloth/issues/8473)，open，维护者提交）：`unsloth studio update` 打印 `gpu AMD ROCm (gfx1201)`，但 Studio 实际跑 CPU，Live monitor 显示 VRAM `--`、No visible GPU。修复 PR：[#8620](https://github.com/unslothai/unsloth/pull/8620)（PyTorch 看不到安装器所报 GPU 时明确报告）、[#8606](https://github.com/unslothai/unsloth/pull/8606)（对账安装器 GPU 信息与已安装 PyTorch 实际后端，并修正依赖 fast path 可能锁死 CPU wheel 的问题）。
- **Windows：AppLocker/WDAC/Smart App Control 拦截 `unsloth.exe`**（[#8490](https://github.com/unslothai/unsloth/issues/8490)，open）：安装过程在 “Running studio setup” 阶段失败。修复 PR [#8592](https://github.com/unslothai/unsloth/pull/8592) 已提交，改为不依赖生成的未签名 console script。
- **Windows：AMSI/EDR 对 `install.ps1` 误报**（[#8523](https://github.com/unslothai/unsloth/issues/8523)，closed）：第三方 AMSI provider 以 `ScriptControl` 理由在解析期拦截。缓解 PR [#8586](https://github.com/unslothai/unsloth/pull/8586)（open）对 Windows 与 Linux 安装脚本做“减敏”处理。
- **macOS：llama-server 启动失败且错误信息误导**（[#8566](https://github.com/unslothai/unsloth/issues/8566)，open）：M4/16GB 上加载本地 GGUF 时失败，错误笼统提示“Check GGUF and memory”。修复 PR [#8574](https://github.com/unslothai/unsloth/pull/8574) 为 macOS 设置 `DYLD_LIBRARY_PATH`，并细化启动失败分类，避免再落入误导性兜底文案。
- **MiniMax-M3：GGUF 加载失败（indexer keys 缺失）**（[#8513](https://github.com/unslothai/unsloth/issues/8513)，open）：macOS Studio 加载 9-shard 384GB 模型失败，内置 llama.cpp 与 HF 量化版本不一致，无修复 PR。
- **RDNA1：RX 5700 XT 不被识别，且安装器给出无法工作的修复建议**（[#8529](https://github.com/unslothai/unsloth/issues/8529)，open）：PR [#8577](https://github.com/unslothai/unsloth/pull/8577) 将明确告知“ROCm 不覆盖 RDNA1”，不再建议用户安装 HIP SDK（该路径对 gfx1010 无效）。
- **Linux AppImage：缺少系统库 / AMD GPU 不被识别**（[#8463](https://github.com/unslothai/unsloth/issues/8463)、[#8471](https://github.com/unslothai/unsloth/issues/8471)，均 open）：Bazzite 系统下 RX 7600 及缺失 Linux 库问题，暂无对应 PR。
- **macOS 小问题**：系统信息页将 Apple M4 Pro 显示为 4-MHz（[#8519](https://github.com/unslothai/unsloth/issues/8519)，closed）；二次启动报错（[#8610](https://github.com/unslothai/unsloth/issues/8610)，open）；文本编码错误（[#8594](https://github.com/unslothai/unsloth/issues/8594)，open）。多为 UI/映射层问题，优先级较低。
- **RAG embedder warmup 崩溃（回归）**（[#7331](https://github.com/unslothai/unsloth/issues/7331)，closed）：此前启动时 RAG embedding warmup 在 AMD ROCm 上段错误；PR [#8609](https://github.com/unslothai/unsloth/pull/8609) 已移除 eager warmup，改为首次 RAG 操作时隔离崩溃影响。
- **CI 主分支红测修复**：PR [#8608](https://github.com/unslothai/unsloth/pull/8608)（从 SSE event field 读取 Responses 事件，修复 Gemini provider 测试）、[#8590](https://github.com/unslothai/unsloth/pull/8590)（desktop-auth 路由测试因 import drift 失效）、[#8631](https://github.com/unslothai/unsloth/pull/8631)（Intel Mac 安装 leg 误报 torch 缺失）——三者均针对 `origin/main` 上当前的失败用例，任一 PR 合入前合并 main 都会继承这些失败。

## 6. 对应用开发者的意义

- **本地工具循环即将可用（PR 评审中）**：[#8630](https://github.com/unslothai/unsloth/pull/8630) 为 vLLM/Ollama/llama.cpp/OpenAI 兼容后端增加 Studio 自有工具循环，支持 Search、Code、MCP、RAG，且按连接显式 opt-in。在 Studio 之上构建 Agent 的团队可提前规划工具权限模型；默认关闭意味着现有调用行为不变。
- **API 后端存在上下文泄漏风险**：[#8442](https://github.com/unslothai/unsloth/issues/8442)（open）报告 unsloth 作为 API 后端时，上下文会在会话与 model harness 之间泄漏。多租户或长连接应用建议先验证隔离性，或避免跨会话复用同一后端进程。
- **SSE 兼容性修复**：[#8608](https://github.com/unslothai/unsloth/pull/8608) 修正 Responses API 的 SSE 事件解析，影响 Gemini 等 external provider 的流式工具调用场景；依赖 OpenRouter/Gemini 流式的应用可关注合入状态。
- **上下文压缩仍无原生方案**：[#8504](https://github.com/unslothai/unsloth/issues/8504) 请求像 Claude 那样在上下文窗口到达 50%/80% 时自动压缩。目前仍为 feature request，长对话 Agent 需自行实现压缩策略。
- **可观测性增强需求明确**：[#8528](https://github.com/unslothai/unsloth/issues/8528) 希望实时展示 prefill 与 generation 速度，当前只能请求完成后看总量；需要精细调优量化档的开发者可关注此 issue 进展。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*