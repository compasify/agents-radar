# AI 基础设施日报 2026-08-19

> 生成时间: 2026-08-18 23:11 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施生态横向对比分析日报（2026-08-19）

> 数据来源：各项目 GitHub 当日动态摘要；表格中 Issue/PR 数量为日报中明确提及且有更新的条目，非仓库全量实时数据。

## 1. 生态全景

当前 AI 基础设施正围绕新一代大型 MoE / MLA 模型（Kimi K3、DeepSeek V4、GLM-5.2 等）快速迭代，推理引擎的竞争集中在**算子融合、投机解码、长上下文正确性**三方面。AMD ROCm、Blackwell sm_103/120 等新硬件路径仍是最明显的稳定性短板，多个项目在 B300/GB300 上出现 kernel 崩溃或静默挂起。与此同时，Llama.cpp 生态向多后端、可编程服务演进，LiteLLM 等网关开始暴露安全与数据面问题，Unsloth 则加速从训练框架向本地 Agent 产品化延伸。整体处于“新模型迭代速度远快于底层运行时稳定性收敛”的典型窗口期。

## 2. 各项目活跃度对比

| 项目 | 活跃 Issue 数 | 活跃 PR 数 | Release 情况 |
|---|---:|---:|---|
| vLLM | ≈17 | ≈12 | 无新 Release；Rust 前端仍为实验特性 |
| SGLang | ≈15 | ≈15 | 无新 Release |
| llama.cpp | ≈14 | ≈14 | v0.1.2 正式版 + Nightly b10483 / b10486 / b10488 |
| Ollama | ≈16 | ≈6 | 无新 Release（v0.32.14 为既有版本） |
| LiteLLM | ≈11 | ≈7 | 无新 Release |
| Unsloth | ≈14 | ≈15 | 无新 Release |

从活跃度看，**vLLM 仍是大模型服务主线，SGLang 追赶速度明显；llama.cpp 以稳定 Release + Nightly 节奏驱动本地生态**。Ollama 和 LiteLLM 更多是“问题消化”型活跃：Bug 多、修复 PR 少。

## 3. 模型支持竞速

| 模型 / 架构 | 领跑项目 | 关键进展 |
|---|---|---|
| **Kimi K3** | vLLM、SGLang | vLLM 已提 GEMM+AllReduce 融合内核 PR、CP 注意力算子重构；SGLang 有正式 Roadmap + Bug Tracking + NVFP4/FP8 混合 checkpoint 加载修复 |
| **GLM-5.2** | vLLM、SGLang、llama.cpp | vLLM 增加 TurboQuant 稀疏 MLA 后端；SGLang 增加 8×MI35x ROCm nightly 覆盖；llama.cpp 仅有关闭的支持请求，且多节点 RPC 仍崩溃 |
| **DeepSeek V4** | vLLM、SGLang、llama.cpp | vLLM 补齐 ROCm fused AR draft metadata；SGLang 有 NVIDIA 性能跟踪但 sparse prefill 调度挂起未解；llama.cpp 被 ROCm TOP_K 长上下文崩溃阻塞 |
| **DFlash2** | vLLM、llama.cpp | vLLM 引入新架构实现；llama.cpp 同步新增模型定义，含动态深度卷积与候选选择器 |
| **Qwen3.8** | SGLang、Ollama | SGLang 补 DCP / radix cache 白名单；Ollama 更多是 AMD、CUDA、macOS 下的稳定性问题 |

**结论**：大型 MoE/MLA 新模型的“首发支持”竞赛主要在 vLLM 和 SGLang 之间展开；llama.cpp 偏重本地可跑的架构覆盖与 GGUF 量化；Ollama、LiteLLM、Unsloth 更多是被动适配，尚未进入第一梯队。

## 4. 性能优化前沿

- **算子级融合**：vLLM 为 Kimi K3 集成 flashinfer CuteDSL GEMM+AllReduce 融合内核；llama.cpp 将 FFN 门控 + SwiGLU/GEGLU 融合进 `mul_mat_q` epilogue；SGLang 取消 VLM `VisionAttention` 中不必要的 dense copy。
- **KV cache / 显存治理**：SGLang 修复 DCP KV-event block size、拒绝 MLA 错误使用 FA3；vLLM 改进缓存淘汰，优先释放从未命中的 cached block；Unsloth 修复多 GPU tensor split 时 quantized KV cache 被静默降级为 f16。
- **投机解码**：vLLM 推进 Fully Async Spec-Decoding，并将在 OpenAI API 暴露 per-request acceptance stats；llama.cpp 新增 adaptive MTP draft 深度；但多个 MTP 崩溃、GLM-5.2 FP8 RCCL 死锁仍未修复。
- **批处理与调度**：vLLM Model Runner V2 跳过未完成 prefill 的 logits/sampling；llama.cpp Vulkan 改用密度门控，B=9 时 decode 提升 36%；SGLang 则被 PrefillDelayer 反馈循环问题困扰。
- **分布式通信**：vLLM 统一 DCP/PCP 注意力算子；SGLang 配置 DeepEP `NVSHMEM_QP_DEPTH` 并强制重装 NCCL；llama.cpp 双 GPU 混合型号仍有乱码输出问题。

总体看，**优化火力集中在“减少数据搬运”和“消除 Host↔GPU 同步点”**，但性能提升往往伴随正确性回归，尤其是 MTP、DCP、长上下文缓存路径。

## 5. 分层定位差异

| 项目 | 分层 | 典型定位 |
|---|---|---|
| **vLLM** | 服务端推理引擎 | 高吞吐、多卡、OpenAI 兼容服务；PagedAttention / 分布式推理 / Rust 前端探索 |
| **SGLang** | 服务端推理引擎 | RadixCache、PD 分离、DCP；在 DeepSeek / Kimi K3 等新模型上跟进最快 |
| **llama.cpp** | 本地 / 边缘运行时 | ggml 多后端（CUDA、ROCm、Vulkan、SYCL、OpenCL），支持 GGUF 与量化，Nightly 迭代 |
| **Ollama** | 本地模型服务层 | 基于 llama.cpp/MLX 的模型包管理、API 封装、Agent 启动集成 |
| **LiteLLM** | LLM 网关 / 代理 | 统一 OpenAI/Anthropic/Bedrock 等接口；路由、预算、可观测性、安全控制 |
| **Unsloth** | 训练 / 微调框架 | LoRA、量化、GGUF 导出；Studio 产品化，覆盖微调到本地 Agent 工具链 |

跨层关系：Ollama 依赖 llama.cpp 做本地推理；LiteLLM 通常前置在 vLLM/SGLang/Ollama 之上；Unsloth 可产出 GGUF 模型供 llama.cpp 生态使用。

## 6. 值得关注的趋势信号

1. **新模型支持竞赛正值“高危窗口期”**  
   Kimi K3、DeepSeek V4、GLM-5.2、Qwen3.8 的 Day-0 支持往往伴随 CUDA Graph 损坏、MTP 崩溃、KV cache 串扰等正确性问题。生产环境建议**锁定已验证版本**，而不是追 main 分支。

2. **AMD / 新 Blackwell 硬件成为最大风险面**  
   ROCm 上 vLLM、SGLang、llama.cpp、Ollama 均有未修复崩溃；sm_103 存在 kernel 路径误判；MLX 缺失 prefix cache 导致长 Agent 会话 TTFT 线性恶化。**多硬件部署需逐卡验证**。

3. **投机解码从“吞吐收益”转向“可观测性与正确性”**  
   vLLM 将暴露 per-request acceptance stats，llama.cpp 将 speculative 计数器合入 `/metrics`。对 Agent 开发者，这意味着可以真正评估投机解码对具体 prompt 的收益，而不是盲目开启。

4. **安全与数据面问题开始在网关注层集中暴露**  
   LiteLLM `/health` 明文返回 AWS token、vector store debug 日志泄露连接凭据、Ollama 推理中断返回 `done:false` 误导客户端。**网关与 API 层需要补健康检查脱敏和流式结束语义治理**。

5. **“可复现推理”成为应用层刚需**  
   vLLM 在推进 Batch Invariant，SGLang 仍在处理 prefix cache 命中退化，Ollama MLX 缺乏前缀缓存。对评测、Agent 回归测试、确定性输出敏感的团队，应关注冷/热缓存路径和 batch 组合对结果的影响。

6. **本地运行时正在变成可编程服务端**  
   llama.cpp 新增 `/tts`、流式消息注入、speculative 指标，服务器侧可编程性明显增强；Ollama 继续暴露 `ollama launch` 集成不稳定；Unsloth Studio 开始出现多 Agent / MCP 场景修复。**本地推理不止是“跑模型”，而是在向 Agent runtime 演进**。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 动态日报 2026-08-19

## 今日速览
- **Kimi K3 是当前绝对热点**：多个 PR 围绕其内核融合（GEMM+AllReduce）、CP 注意力算子重构推进，同时 ROCm 支持差距跟踪与 CUDA Graph 捕获 Bug 也在并行处理。
- **投机解码（Spec Decode）问题集中爆发**：Qwen3.6-27B-FP8 MTP 崩溃、tool-call 回归、DeepSeek V4 ROCm 稀疏注意力等至少 5 条 issue 仍在活跃讨论；XGrammar 的 batch 终止 Bug 已于昨日提交修复 PR（#52805）。
- **Rust 前端开始加速补课**：功能对等路线图（#44280）与 gRPC LoRA 生命周期控制（#52840）同日更新，实验性 Rust 服务端的能力边界正在快速扩展。

---

## 版本发布与破坏性变更
- 无新 Release。但 [`VLLM_USE_RUST_FRONTEND`](https://github.com/vllm-project/vllm/issues/44280) 仍处于实验阶段，尚未达到与 Python API 服务端的功能完全对等，生产环境切换前需评估。
- 注意：v0.24.0 中 OpenAI `strict` 标志会被渲染进 chat template 并改变模型行为（[#52741](https://github.com/vllm-project/vllm/issues/52741)），详见下文稳定性章节。

---

## 新模型与硬件支持

- **Kimi K3（热度最高）**：
  - [`PR #52687`](https://github.com/vllm-project/vllm/pull/52687)：集成 flashinfer CuteDSL GEMM+AllReduce 融合内核，用于 MLA/KDA 的 o_proj 与 allreduce，8x B300 微基准测试显示明显加速（M≥256 时启用）。
  - [`PR #52839`](https://github.com/vllm-project/vllm/pull/52839)：重构 CP 注意力算子，将 DCP/PCP 算子统一整理，便于后续维护与优化。
  - [`Issue #50682`](https://github.com/vllm-project/vllm/issues/50682)：ROCm 端 Kimi-K3 功能与性能 roadmap 跟踪。
- **GLM-5.2**：[`PR #52472`](https://github.com/vllm-project/vllm/pull/52472) 为 GLM-5.2 添加 TurboQuant 稀疏 MLA 后端，含 4-bit KV cache、DCP/MTP/PP 正确性修复。
- **DeepSeek V4**：[`PR #52628`](https://github.com/vllm-project/vllm/pull/52628) 在 ROCm 上启用 fused AR draft metadata 更新，补齐 DeepSeek V4 稀疏 SWA 支持。
- **DFlash2**：[`PR #52816`](https://github.com/vllm-project/vllm/pull/52816) 引入新的 DFlash2 架构：局部卷积 + 候选选择器，且旧 DFlashDraftModel checkpoint 不受影响。
- **Embedding 模型**：[`Issue #17493`](https://github.com/vllm-project/vllm/issues/17493)（Sentence Transformers 支持）仍在开放跟踪中，暂无进展。

---

## 性能与优化

- **Kimi K3 GEMM+AllReduce 融合**（[`PR #52687`](https://github.com/vllm-project/vllm/pull/52687)）：8x B300、N=7168、K=1536 条件下，M≥256 时启用融合内核，具体加速比见 PR 内 microbenchmark 表。
- **跳过未完成 prefill 的 logits/sampling**（[`PR #49171`](https://github.com/vllm-project/vllm/pull/49171)）：Model Runner V2 不再为 chunked-prefill 中未完成的前缀请求计算会被丢弃的采样 logits，减少冗余计算。
- **Fully Async Spec-Decoding**（[`Issue #29134`](https://github.com/vllm-project/vllm/issues/29134)）：持续推进，目标是移除投机解码路径中 `seq_lens_cpu` 等 Host↔GPU 同步点，实现输入预处理与模型前向完全重叠。
- **缓存淘汰策略改进**（[`PR #51909`](https://github.com/vllm-project/vllm/pull/51909)）：将从未命中的 cached block 优先放入 free list，避免与高频命中块混合，提升缓存有效利用率。
- **性能回退警示**：DFlash 在并发 >8 时比无投机慢（[`Issue #42505`](https://github.com/vllm-project/vllm/issues/42505)），与论文趋势不符，建议高并发场景先压测验证。

---

## 稳定性与回归

按严重程度排列：

1. **MTP 投机解码崩溃/死锁**（高危）：
   - Qwen3.6-27B-FP8 + MTP 在长序列触发 illegal memory access（[`#40756`](https://github.com/vllm-project/vllm/issues/40756)）
   - qwen3_next_mtp 在 `gdn_attn.py:237` 报 cudaErrorIllegalAddress（[`#37035`](https://github.com/vllm-project/vllm/issues/37035)）
   - GLM-5.2-FP8 + MTP 在 8x MI300X 上 RCCL 死锁（[`#48568`](https://github.com/vllm-project/vllm/issues/48568)）
   - 目前均无直接 fix PR。
2. **Kimi-K3 CUDA Graph 捕获静默损坏输出**（[`#52531`](https://github.com/vllm-project/vllm/issues/52531)）：batch=1 时出现三类不同失败模式，严重影响正确性。
3. **OpenAI `strict` 标志污染 chat template**（[`#52741`](https://github.com/vllm-project/vllm/issues/52741)）：`tools[].function.strict` 被渲染进模型可见的 template，改变 tool-call 行为，属协议层回归。
4. **XGrammar 批处理终止 Bug**：已有修复 PR（[`#52805`](https://github.com/vllm-project/vllm/pull/52805)），阻止 termination 后同批次 token 继续进入 XGrammar。
5. **Prefix-Cache 0% 命中**（[`#42948`](https://github.com/vllm-project/vllm/issues/42948)）：DeepSeek-V4-Flash 混合分组导致请求重新分配时丢失首块 cache key，影响高并发前缀复用场景。
6. **并发 embedding 请求引发 KeyError**（[`#25991`](https://github.com/vllm-project/vllm/issues/25991)）：V1 引擎并发 embedding 时崩溃，开放已久，需关注。
7. **AMD GPU-CPU KV 传输故障**（[`PR #52838`](https://github.com/vllm-project/vllm/pull/52838)）：将设备错误从引擎宕机降级为 cache 降级，提升鲁棒性。
8. **Qwen3.5-27B-FP8 服务端无限挂起**（[`#35502`](https://github.com/vllm-project/vllm/issues/35502)）：无错误日志，需要更多复现信息。

其他已关闭（stale）或低活跃度 issue：FlashInfer JIT 构建失败（[`#36077`](https://github.com/vllm-project/vllm/issues/36077)）、Voxtral-Mini Realtime API 崩溃（[`#38233`](https://github.com/vllm-project/vllm/issues/38233)）、EPLB 重构 RFC（[`#32028`](https://github.com/vllm-project/vllm/issues/32028)）。

---

## 对应用开发者的意义

- **Rust 前端正在成型**：功能对等追踪（[`#44280`](https://github.com/vllm-project/vllm/issues/44280)）与 gRPC LoRA 生命周期控制（[`#52840`](https://github.com/vllm-project/vllm/pull/52840)）意味着未来可以更低延迟、更少 Python 开销地管理 LoRA 适配器；但当前仍为实验特性，不建议生产依赖。
- **逐请求投机解码质量可观测**：[`PR #48915`](https://github.com/vllm-project/vllm/pull/48915) 将在 OpenAI API 响应中暴露 per-request acceptance stats，有助于诊断不同 prompt/模型下投机解码的真实收益。
- **`strict` tool-calling 行为已变**：若你的应用依赖 OpenAI `strict` function calling，建议先锁定 v0.23.x 或规避该字段，等修复版本发布。
- **温度=0 时输出可能因 prefix cache 而不同**：[`#52701`](https://github.com/vllm-project/vllm/pull/52701) 新增了文档说明，对于依赖确定性的评测/Agent 工作流，注意冷/热缓存路径的差异。
- **Batch Invariant 特性持续演化**（[`#27433`](https://github.com/vllm-project/vllm/issues/27433)）：vLLM 正在系统性地消除 batch 组合对输出结果的影响；对构建可复现 AI 应用（如评估、回归测试）的团队这是个值得跟踪的长期方向。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 动态日报 2026-08-19

> 数据基于 GitHub 上 2026-08-18 更新的 issue/PR 整理。

## 今日速览

SGLang 过去 24 小时无新版本发布，动态主要集中在 DeepSeek V4 / Kimi K3 的性能跟踪，以及 DCP、量化加载、调度器稳定性等相关 PR。稳定性方面，B300/GB300（sm_103）上仍有多个 kernel 崩溃/挂起问题未关闭，生产环境升级需谨慎。

## 新模型与硬件支持

- **Kimi K3 Roadmap 持续推进**：[#32607](https://github.com/sgl-project/sglang/issues/32607) 已包含 Day0 PR、Cookbook、LMSYS Blog 和 DSpark 权重入口，并另设 Bug Tracking [#32970](https://github.com/sgl-project/sglang/issues/32970)。
- **Qwen3.8-MXFP4 DCP 支持**：[#35297](https://github.com/sgl-project/sglang/pull/35297) 将 Qwen3_5 text-only 架构加入 mamba radix cache 白名单，以支持 Qwen3.8 系列 DCP。
- **Kimi-K3 ModelOpt 混合 NVFP4/FP8 checkpoint**：[#35077](https://github.com/sgl-project/sglang/pull/35077) 修复官方 `nvidia/Kimi-K3-NVFP4` 混合精度 checkpoint 加载，覆盖 routed MoE NVFP4 + attention FP8_PB_WO。
- **AMD GLM-5.2 nightly 覆盖**：[#32570](https://github.com/sgl-project/sglang/pull/32570) 新增 8× MI35x + ROCm 7.2 的 GLM-5.2-FP8 精度与性能测试。
- **Intel XPU memory saver**：[#29935](https://github.com/sgl-project/sglang/pull/29935) 切换到 upstream `torch_memory_saver`，支持 XPU 显存释放/重占。
- **SM107 MXFP8 activation 修复**：[#35405](https://github.com/sgl-project/sglang/pull/35405) 修复 SM107 MXFP8 activation 准备逻辑。

## 性能与优化

- **Kimi K3 / MoE frontend 优化**：[#35406](https://github.com/sgl-project/sglang/pull/35406) 新 PR，优化 Kimi K3 MoE 前向路径，待 review。
- **DeepSeek V4 NVIDIA 性能跟踪**：[#33636](https://github.com/sgl-project/sglang/issues/33636) 列出 SM90/SM10X 高优项，包括 TRT-LLM DSv4 attention 集成、FlashInfer MN 等。
- **SM120 per-tensor FP8 GEMM 优化**：[#33632](https://github.com/sgl-project/sglang/issues/33632) 提出 per-tensor FP8 GEMM 在 Blackwell SM120 上仍有优化空间。
- **DeepEP 最新分支**：[#34923](https://github.com/sgl-project/sglang/pull/34923) 配置 `NVSHMEM_QP_DEPTH` 并强制重装 `nvidia-nccl-cu13`，改善 DeepEP low-latency buffer 初始化。
- **VLM QKV projection 输出零拷贝**：[#35336](https://github.com/sgl-project/sglang/pull/35336) 去掉 `VisionAttention` 中不必要的 dense copy，降低显存与带宽开销。
- **Diffusion warmup-calibrated auto residency**：[#35335](https://github.com/sgl-project/sglang/pull/35335) 在 `--performance-mode auto` 下按预热后实际显存决定组件驻留，避免过度 offload。

## 稳定性与回归

### 高危（open）

- **DeepSeek-V4 sparse prefill 调度器挂起**：[#34235](https://github.com/sgl-project/sglang/issues/34235)  
  SGLang 0.5.17 + hierarchical cache + chunked prefill 16K 在 H20/FP8 上触发 watchdog abort；0.5.16+PR 还有 sampling device-side assert。
- **GB300/sm_103 DeepEP FP8 MoE 崩溃**：[#35388](https://github.com/sgl-project/sglang/issues/35388)  
  `deepep` 路径在 DeepGEMM `m_grouped_fp8_fp4_gemm_nt_contiguous` 中出现 UE8M0 scale-format mismatch（CUDA 719）。
- **B300/sm_103 两个 SM10x-gated kernel 失败**：[#34340](https://github.com/sgl-project/sglang/issues/34340)  
  `is_sm100_supported()` 按 major family 判断，导致 sm_103 走错路径：cutedsl TGV BF16 GEMM 报 Xid 13，trtllm-gen MoE finalize 静默挂起。

### 中危（open）

- **PrefillDelayer 反馈循环**：[#35241](https://github.com/sgl-project/sglang/issues/35241)  
  DP Attention + chunked prefill 下进入 persistent mixed-state feedback loop，prefill progress 塌缩。
- **Mamba radix cache 前缀命中退化**：[#22935](https://github.com/sgl-project/sglang/issues/22935)  
  fresh prefill 的合法 prefix hit 在 split 后可能变成 0-hit。
- **HiCache 长 agentic 会话缓存失效**：[#35129](https://github.com/sgl-project/sglang/issues/35129)  
  DeepSeek-V4-Flash 在长会话中每轮 `#cached-token: 0`，而短请求约 98% 命中。
- **Qwen3.8 DSpark forced-reject 非 lossless**：[#35150](https://github.com/sgl-project/sglang/issues/35150)  
  GDN 状态相对 Base decode 发生累计漂移，影响 speculative decoding 正确性。
- **NEXTN hybrid-mamba TypeError**：[#34786](https://github.com/sgl-project/sglang/issues/34786)  
  `mamba_next_track_idx is None` 导致 `set_mamba_track_indices_from_reqs` 崩溃。
- **WSL2 CUDA IPC 不可用**：[#35385](https://github.com/sgl-project/sglang/issues/35385)  
  多模态模型启动时 `--mm-feature-transport` 自动选择 CUDA IPC，在 WSL2 上无提示直接 crash。

### 已有修复/进展

- **EAGLE/NEXTN TP=2 warmup hang（Intel XPU）**：[#35144](https://github.com/sgl-project/sglang/issues/35144) 已关闭。
- **DCP 修复**：[#35298](https://github.com/sgl-project/sglang/pull/35298) 广告逻辑 KV-event block size；[#35384](https://github.com/sgl-project/sglang/pull/35384) DCP 下拒绝 MLA 使用 fa3，避免 Hopper 默认错误选择。
- **`req_to_token` page tail 修复**：[#35401](https://github.com/sgl-project/sglang/pull/35401) 补齐页内剩余行索引，避免读到旧 owner。
- **compressed-tensors quantized lm_head 加载**：[#35228](https://github.com/sgl-project/sglang/pull/35228) 直接加载量化权重而非 value-cast，修复 FP8 per-channel checkpoint 乱码问题。
- **PD 模式等待超时**：[#34457](https://github.com/sgl-project/sglang/pull/34457) 补上 PD disaggregation 下被忽略的 `SGLANG_REQ_WAITING/RUNNING_TIMEOUT`。
- **CI 状态**：[#17050](https://github.com/sgl-project/sglang/issues/17050) 当前 3 broken / 11 flaky / 668 recently fixed。

## 对应用开发者的意义

- **没有新 release**：如果部署基于 main 分支，建议先评估上述 B300/GB300、DCP、HiCache 相关崩溃是否影响当前 GPU/模型组合；否则固定在已有稳定 commit。
- **Agent 长会话注意缓存退化**：DeepSeek-V4 + HiCache 长会话可能出现 prefix cache 失效；Kimi K3 和 DSpark 仍在快速迭代，存在正确性与性能 edge case。
- **结构化输出**：MistralCommon tokenizer 目前在 XGrammar 下会禁用 structured output，修复 PR [#35215](https://github.com/sgl-project/sglang/pull/35215) 尚未合入，生产环境需绕过或等待。
- **DCP/PD 用户**：关注 DCP 逻辑页大小、MLA + fa3 拒绝、PD 请求超时等修复，升级后需重新跑 multi-node/multi-GPU 验证。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 动态日报 2026-08-19

## 今日速览

正式版 v0.1.2 发布（语义化版本仍处 WIP），主要包含 ggml 同步与版本号更新；ROCm 后端 TOP_K kernel 在长上下文（>128K）下的崩溃问题成为今日最受关注的稳定性阻塞项，直接影响 DeepSeek V4 推理。性能侧，CUDA FFN 门控融合与 Vulkan 密度门控两项 PR 带来明确的吞吐提升。

## 版本发布与破坏性变更

- **v0.1.2 正式版**：自 v0.1.1 以来主要变更即 `sync : ggml` 与 `ggml : bump ve`，无破坏性 API 变更。Nightly 对应 b10485。语义化版本规则仍处讨论中（[参考](https://github.com/ggml-org/ggml/discussions/1579)）。
  https://github.com/ggml-org/llama.cpp/releases/tag/v0.1.2
- **Nightly b10488**：CI 更新 OpenVINO 至 2026.3，并同步更新设备驱动；因 OpenVINO 后端不支持 SSM_SCAN，跳过 nemotron-h 回滚测试（图被拆分导致）。
  https://github.com/ggml-org/llama.cpp/releases/tag/b10488
- **Nightly b10486**：修复 mtmd（多模态）中 LFM2 图像 tiling 阈值判断错误。
  https://github.com/ggml-org/llama.cpp/releases/tag/b10486
- **Nightly b10483**：修复 xcframework 构建问题，并清理 CMake 中 vendor 目标命名（`vendor-hash` 别名）。
  https://github.com/ggml-org/llama.cpp/releases/tag/b10483

## 新模型与硬件支持

- **DFlash2 架构支持（PR #27342）**：新增对 DFlash2 的模型定义支持，包含分组动态深度卷积与候选选择器两个新模块，公式与参考实现已随 PR 提供。
  https://github.com/ggml-org/llama.cpp/pull/27342
- **IQ2_NL / IQ3_NL 量化类型（PR #27322）**：为行长度非 256 倍数的张量新增 32 元素块量化类型，补齐主链量化器在非对齐张量上的覆盖（目前仅 CPU 路径）。
  https://github.com/ggml-org/llama.cpp/pull/27322
- **XDNA 后端请求（Issue #21725）**：持续高热度（30 👍），社区对 AMD XDNA NPU 后端支持意愿强烈，但暂无排期信号。
  https://github.com/ggml-org/llama.cpp/issues/21725
- **GLM 5.2 支持请求（Issue #24730）**：该请求已关闭（14 👍），但 Issue #26583 显示 GLM-5.2 在多节点 CUDA RPC 下仍存在崩溃，分布式推理支持尚不完整。
  https://github.com/ggml-org/llama.cpp/issues/24730
  https://github.com/ggml-org/llama.cpp/issues/26583

## 性能与优化

- **CUDA：FFN 门控 + SwiGLU/GEGLU 融合进 mul_mat_q epilogue（PR #27341）**：补齐 decode 路径已具备的融合能力，门控 matmul 结果留在寄存器中直接参与激活计算，避免 gate 张量的显存往返。
  https://github.com/ggml-org/llama.cpp/pull/27341
- **Vulkan：MUL_MAT_VEC_ID 路径改用密度门控（PR #27332）**：以 #25356 的密度公式替换固定 8-token 切换阈值，消除 AMD RADV 上 batch=9 的 decode 回退。验证数据：**B=9 +36%，B=16 +27%，B=64 +21%**，B≤8 无回退。
  https://github.com/ggml-org/llama.cpp/pull/27332
- **OpenCL：移植 fused ssm_scan kernel（PR #26439）**：Mamba-2（d_state ∈ {128,256}，all-f32）的 SSM_SCAN 从 CPU 回退移至 GPU 执行，仍可通过 `GGML_OPENCL_DISABLE_SSM_SCAN` 关闭。
  https://github.com/ggml-org/llama.cpp/pull/26439
- **ggml_rope_set_offset 多后端支持（PR #27344 / #27345）**：Vulkan、OpenCL、SYCL、WebGPU、Hexagon 后端同步支持 rope offset，为后续 RoPE 相关优化铺路。
  https://github.com/ggml-org/llama.cpp/pull/27344
  https://github.com/ggml-org/llama.cpp/pull/27345
- **Vulkan flash-attention 调优被跳过（Issue #26163）**：AMD 驱动更新后 `maxComputeSharedMemorySize` 报告值从 65536 降至 32768，导致 Vega iGPU 上 flash-attention 调优分支被跳过，吞吐损失约 **17%**。
  https://github.com/ggml-org/llama.cpp/issues/26163
- **ROCm/HIP 带宽利用率问题（Issue #24438）**：Strix Halo（gfx1151）上 MoE token 生成仅达理论带宽的 ~40%，持续跟踪中。
  https://github.com/ggml-org/llama.cpp/issues/24438

## 稳定性与回归

按严重程度降序排列：

- **[严重] ROCm TOP_K 崩溃，阻塞 DeepSeek V4 长上下文（Issue #27021，未修复）**：`ncols > 1024` 时 bitonic kernel block-size 溢出，`--ctx-size > 131072` 即触发 "invalid configuration argument"。同一根因也影响 gfx1151 RPC worker（Issue #26746）。**影响所有 ROCm 用户的长上下文场景**。
  https://github.com/ggml-org/llama.cpp/issues/27021
  https://github.com/ggml-org/llama.cpp/issues/26746
- **[严重] HIP 集成 GPU 响应串线（Issue #25992，未修复）**：`-np 4 --kv-unified` 下 Strix Halo iGPU 返回其他请求的完整响应，属数据正确性问题。已 bisect 至 c7d87229，建议相关用户避免在 gfx1151 上启用 `--kv-unified`。
  https://github.com/ggml-org/llama.cpp/issues/25992
- **[严重] CUDA flash-attn 路径非法内存访问（Issue #26609，未修复）**：Qwen3.6-35B MoE + 部分专家 offload 时确定性崩溃，跨 b10107/b10243 可复现；`-fa off` 可规避。
  https://github.com/ggml-org/llama.cpp/issues/26609
- **[中等] 混合/循环模型上下文检查点失效（Issue #24055，未修复）**：hybrid/recurrent 模型上 context checkpoint 总是失效，影响长会话恢复。
  https://github.com/ggml-org/llama.cpp/issues/24055
- **[中等] SM_60 精度损失（Issue #25593，未修复）**：Tesla P100 等 Maxwell/Pascal 卡上 FP32 数学被静默降为 FP16，已有两个 fork 修复但未合入主线。
  https://github.com/ggml-org/llama.cpp/issues/25593
- **[中等] 双 GPU 乱码输出（Issue #26257，未修复）**：RTX 5060 Ti + RTX 3060 混合配置下 Qwen3.6-27B 输出乱码，单卡正常。
  https://github.com/ggml-org/llama.cpp/issues/26257
- **[中等] SYCL 回归（Issue #27253，未修复）**：b10451 起 Ministral-3-14B 在 SYCL 后端无法加载，需确认是否与 #27285 的 mtmd 修复相关。
  https://github.com/ggml-org/llama.cpp/issues/27253
- **[已修复] mtmd 空指针解引用（PR #27285，CLOSED）**：三个视觉模型图构建器在缺少可选张量时先解引用后判空，恶意/损坏的 mmproj GGUF 可触发 NULL-page SIGSEGV。
  https://github.com/ggml-org/llama.cpp/pull/27285
- **[已修复] OpenCL flash-attention WAR 竞态（PR #26434，CLOSED）**：泛型 flash-attention tile kernel 在 k_start 循环顶部重载共享内存 tile 前缺少 barrier，可导致错误结果。
  https://github.com/ggml-org/llama.cpp/pull/26434
- **[待合入] mul_mat_id 专家索引越界（PR #27286）**：将 debug-only assert 升级为运行时校验，防止越界写堆内存——release 构建下当前存在内存安全风险。
  https://github.com/ggml-org/llama.cpp/pull/27286

## 对应用开发者的意义

- **新 API 能力**：`POST /tts` 端点（PR #26603）与生成中途消息注入（PR #27343）均已进入 PR 阶段，叠加现有的 `/v1/chat/completion/control`，服务器侧的可编程性进一步增强——Agent 框架可借此实现流式干预与多模态输出。
  https://github.com/ggml-org/llama.cpp/pull/26603
  https://github.com/ggml-org/llama.cpp/pull/27343
- **可观测性增强**：speculative decoding 计数器（PR #23328）将合入 `/metrics`，可据此计算 draft 接受率，建议 serving 层预留指标采集字段；router 模式进度上报（Issue #24822）已进入收尾阶段。
  https://github.com/ggml-org/llama.cpp/pull/23328
  https://github.com/ggml-org/llama.cpp/issues/24822
- **解码策略选项扩展**：adaptive MTP draft 深度（PR #27210）引入 `--spec-type draft-mtp-adaptive`，配合 `--spec-draft-n-max 12` 使用，为投机解码提供免调参方案。
  https://github.com/ggml-org/llama.cpp/pull/27210
- **风险提示**：ROCm 后端 TOP_K 问题尚未修复，**使用 AMD 卡跑 DeepSeek V4 且 ctx > 128K 的生产环境需暂缓升级**或改用 CPU 节点处理 prefill。HIP iGPU 上的 `--kv-unified` 存在响应串线风险，多租户场景下可能造成数据泄露，务必规避。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

### 1. 今日速览

Ollama 今日动态高度聚焦于 **Qwen3.8 系列模型在多种硬件/后端下的稳定性问题**，包括 AMD ROCm 崩溃、NVIDIA CUDA 静默回退 CPU、以及 macOS/MLX 后端下的集成挂起。社区提出了针对 `qwen3.8` 系统消息处理的修复 PR（#17855），并有多个 PR（#17846、#17516）旨在解决通用的生成流中断与 runner 清理问题。项目自身也在持续优化请求开销，并补充文档与社区集成，整体处于活跃的迭代与问题修复期。

### 2. 版本发布与破坏性变更

无新版本发布或破坏性变更。

### 3. 新模型与硬件支持

- **新增模型/架构支持**：无官方新模型发布，但社区 PR #17195 为 `glm-ocr` 模型的兼容层增加了 `tokenizer.ggml.eot_token_id` 修复，解决旧 GGUF 格式下输出无法停止的问题。 [PR #17195](https://github.com/ollama/ollama/pull/17195)
- **硬件支持**：Issue #3113 继续开放，呼吁支持 Intel 集成 GPU（如 Iris Xe），说明该需求仍未满足。 [Issue #3113](https://github.com/ollama/ollama/issues/3113)
- **软件生态集成**：今日新增 2 个社区集成 PR（MindMap Chat 桌面/移动端和 Nyx AI Windows 桌面应用），均支持连接本地 Ollama 服务。 [PR #17852](https://github.com/ollama/ollama/pull/17852) | [PR #17845](https://github.com/ollama/ollama/pull/17845)

### 4. 性能与优化

- **模型元数据缓存（进行中）**：PR #17752 通过缓存解析后的模型元数据和能力，消除了每次推理调用中重复读取 GGUF 元数据的开销，单个请求可减少约 **300ms** 的延迟。该 PR 今日有更新，仍未合并。 [PR #17752](https://github.com/ollama/ollama/pull/17752)
- **MLX 引擎缺少前缀缓存（新报告）**：Issue #17829 报告在 Apple Silicon 上的 MLX 引擎在 Agent 多轮调用中，每一次请求都需从头处理完整 prompt（约 20-30k tokens），首 token 延迟（TTFT）随上下文线性增长。该问题会显著影响长上下文 Agent 应用的响应速度。 [Issue #17829](https://github.com/ollama/ollama/issues/17829)
- **CPU 占用异常（新报告）**：Issue #17833 报告 v0.32.14 在模型完全加载至 VRAM 时，CPU 占用率异常飙升至 50-80%，而 v0.32.13 无此问题，疑似回归。 [Issue #17833](https://github.com/ollama/ollama/issues/17833)

### 5. 稳定性与回归

今日报告了大量 Bug，按严重程度排列如下：

- **[严重] CUDA 架构缺失导致 GPU 静默回退至 CPU**：Issue #17841 报告 v0.32.14 在 compute capability 8.6（RTX 30 系列、A40、A6000）的 GPU 上无法使用 CUDA 推理，完全回退至 CPU（速度约 7 tok/s）。日志显示 CUDA 13 的预编译内核列表未包含 sm_86，且 CUDA 12 的回退路径存在问题。 [Issue #17841](https://github.com/ollama/ollama/issues/17841)
- **[严重] ROCm 后端 KV Cache 状态泄漏**：Issue #17847 报告在 AMD Strix Halo（gfx1151）平台上，后一个请求的回复会错误地引用前一个无关请求的内容，疑似 KV Cache 未隔离导致上下文串扰，属于数据正确性问题。 [Issue #17847](https://github.com/ollama/ollama/issues/17847)
- **[较高] Qwen3.8 在 AMD GPU 上崩溃**：Issue #17782 报告在 RX 9060 XT 上运行 `qwen3.8:27b` 时，加载 `TensileLibrary_lazy_gfx1200.dat` 失败导致进程终止。此前提到的 `qwen35moe` 层数异常问题（#17856）仍在持续，用户报告随机层数值导致解析失败。 [Issue #17782](https://github.com/ollama/ollama/issues/17782) | [Issue #17856](https://github.com/ollama/ollama/issues/17856)
- **[较高] API 错误处理不当导致误导性响应**：Issue #17836 报告在推理被内部中止时，`/api/chat` 接口会返回 HTTP 200 且 `"done": false`，没有 `error` 字段，客户端无法区分正常结束与异常中断。**已有对应修复 PR #17846**，该 PR 在生成流未返回最终响应时抛出明确错误。 [Issue #17836](https://github.com/ollama/ollama/issues/17836) | [PR #17846](https://github.com/ollama/ollama/pull/17846)
- **[较高] macOS 上 Agent 集成挂起**：Issue #17839 报告在 macOS 上，直接调用 Ollama API（包括 OpenAI 兼容接口、流式、推理、工具调用）均正常，但通过 Agent 集成调用时会无限期挂起。 [Issue #17839](https://github.com/ollama/ollama/issues/17839)
- **[中等] qwen3.5 禁用思考后 format 失效**：Issue #14645 在昨日被标记为关闭，但今日有新的讨论，关于 `think` 禁用时 JSON 格式约束不生效的问题。 [Issue #14645](https://github.com/ollama/ollama/issues/14645)
- **[中等] 工具调用循环导致 500 错误**：Issue #17778 报告 `qwen3.8` 模型在长上下文中陷入工具调用循环，最终导致 `no user query found` 的 500 错误。 [Issue #17778](https://github.com/ollama/ollama/issues/17778)
- **[中等] `think` 参数前后端不一致**：Issue #17837 报告 CLI 接受 `think true|false` 并确认设置，但后端只接受 `"high"`/`"low"` 等枚举值，导致 400 错误，存在参数校验不一致的问题。 [Issue #17837](https://github.com/ollama/ollama/issues/17837)
- **[较低] `ollama launch claude` 启动失败**：Issue #17811 报告 `ollama launch claude` 在信任工作区后报 `Input must be provided either through stdin or as a prompt argument`，会话无法进行。 [Issue #17811](https://github.com/ollama/ollama/issues/17811)
- **[较低] `ollama launch codex` 无法跨设备使用**：Issue #17835 指出该命令仅在 Ollama 所在机器上查找 codex，无法连接远程服务器上安装的 CLI。 [Issue #17835](https://github.com/ollama/ollama/issues/17835)
- **[回归] Runner 进程崩溃后状态未清理**：PR #17516 正在修复一个已知问题（#17428, #17509），即 llama-server 进程在模型加载完成后崩溃或挂死，但调度器仍标记模型为已加载，导致 `ollama ps` 显示异常且请求失败。 [PR #17516](https://github.com/ollama/ollama/pull/17516)

### 6. 对应用开发者的意义

- **警惕误导性 API 响应**：在 `stream: false` 模式下，不能仅依赖 HTTP 状态码或 `done` 字段判断成功。需要实现超时机制或等待 PR #17846 合入后，主动检查 `error` 字段，避免将内部异常视为正常空回复。
- **GPU 兼容性风险**：若用户群使用旧版 NVIDIA（sm_86）或 AMD 显卡，需密切关注 v0.32.14 的 CPU 回退问题和 ROCm KV Cache 泄漏问题，可能需要考虑固定 Ollama 版本。
- **Agent 应用需关注上下文与缓存**：MLX 后端缺少前缀缓存（#17829）以及工具调用循环（#17778）问题，在构建长上下文、多轮 Agent 应用时可能遇到显著的性能瓶颈和稳定性风险。
- **工具调用与启动集成不稳定**：`ollama launch` 对 Claude Code 和 Codex 的集成都存在兼容性问题，若依赖这些功能，需要等待后续修复。
- **性能优化预期**：PR #17752 合并后，将减少大量短请求场景下的约 300ms 固定开销，对在线服务或低延迟交互场景有明显收益。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 动态日报 — 2026-08-19

## 1. 今日速览
今日最值得关注的是 Claude Code 场景下 `content_block_stop` 重复下发（Issue #37273），可能导致工具被重复执行两次；此外，新增发现 `/health` 明文返回 AWS 凭据（#36898）以及 vector store 调试日志泄露连接凭据的安全问题（PR #37373）。稳定性方面，GPT-5.4 经 `responses` 桥接返回空内容的老问题（#25429）仍牵动社区，当前无修复 PR。

## 2. 版本发布与破坏性变更
过去 24 小时无新 Release。一项行为变更 PR 值得关注：新增 `general_settings.disable_bedrock_agent_runtime_passthrough` 配置，可禁用 `/bedrock` 的 agent-runtime 路由转发（默认不启用），不影响现有行为。

- [PR #37386: feat(bedrock): add a config toggle to disable agent-runtime pass-through](https://github.com/BerriAI/litellm/pull/37386)

## 3. 新模型与硬件支持
无新增模型发布。但有两条关于模型定价数据的修正信息：

- Azure GPT-5.6（`azure/gpt-5.6-sol`）在 `model_prices_and_context_window.json` 中的条目存在错误，社区已提交 issue 要求同步修正主/备份定价表：[Issue #37268](https://github.com/BerriAI/litellm/issues/37268)
- Databricks 新模型价格未及时更新，已有 PR 待合入：[Issue #31194](https://github.com/BerriAI/litellm/issues/31194)

## 4. 性能与优化
今日 PR 集中在可观测性与资源生命周期治理，无显存/吞吐类优化数据。

- **OpenTelemetry**：修复 credential-scoped `TracerProvider` 缓存无界增长且从不 `shutdown()` 的泄漏问题，每个缓存条目拥有一组 `BatchSpanProcessor` 工作线程，长期运行会导致线程持续堆积：[PR #36591](https://github.com/BerriAI/litellm/pull/36591)
- **OpenTelemetry**：Prisma 数据库 span 的 peer 名称从 `localhost` 修正为实际 PostgreSQL 地址，便于 APM 正确归因数据库调用：[PR #36595](https://github.com/BerriAI/litellm/pull/36595)
- **语义缓存**：为嵌入输入增加截断能力，并将 `extra_body` 提升到顶层发送，兼容 vLLM/NIM 等严格 OpenAI 兼容后端，避免缓存命中率归零：[PR #37367](https://github.com/BerriAI/litellm/pull/37367)

## 5. 稳定性与回归
按严重程度排列。重点标注是否已有修复 PR。

### 严重

- **流式响应中 tool_use 产生两个 `content_block_stop`（新增）**：`POST /v1/messages` stream 模式下，模型返回工具调用时 SSE 流中出现一个 `content_block_start` 对应两个 `content_block_stop`，Claude Code 客户端会将其解析为两次工具结束事件，导致工具被重复执行两次。暂无修复 PR。[Issue #37273](https://github.com/BerriAI/litellm/issues/37273)

- **adaptive_router 单个坏数据导致全组 500（持续发酵）**：模型组中一旦出现 `alpha/beta=0` 的持久化条目，此后所有请求永久抛 `gammavariate: alpha and beta must be > 0.0`，重启也无法自愈。暂无修复 PR。[Issue #35590](https://github.com/BerriAI/litellm/issues/35590)

- **GPT-5.4 Responses 桥接返回空输出（未解决，20 条评论）**：`litellm.responses()` 返回空内容，`completion()` 桥接报 "Unknown items in responses API response: []"。这是当前社区讨论最热的转译问题，仍未关闭。[Issue #25429](https://github.com/BerriAI/litellm/issues/25429)

- **Anthropic `vector_store_ids` 被拒绝（未解决，12 👍）**：请求体包含 `vector_store_ids` 时 Anthropic API 返回 400 "Extra inputs are not permitted"，说明 LiteLLM 未对 Anthropic 新增字段做正确透传。[Issue #23741](https://github.com/BerriAI/litellm/issues/23741)

### 中高

- **无 Redis 时 `provider_budget_config` 预算重置时间异常（新增）**：`budget_reset_at` 被计算到约 57 年后，导致月度预算实际永不重置。暂无修复 PR。[Issue #37261](https://github.com/BerriAI/litellm/issues/37261)

- **`PUT /v1/mcp/server` 静默丢弃 OAuth 字段（新增）**：`delegate_auth_to_upstream=true` 时，更新 MCP server 会静默清空 `authorization_url`、`token_url`、`oauth2_flow`。暂无修复 PR。[Issue #37258](https://github.com/BerriAI/litellm/issues/37258)

- **`GET /health` 明文泄露 AWS 凭据（新增）**：`extra_headers` 和 `aws_session_token` 在健康检查端点未做脱敏。暂无修复 PR。[Issue #36898](https://github.com/BerriAI/litellm/issues/36898)

- **虚拟密钥预算检查使用过期 spend（未解决）**：`BudgetExceededError` 触发时 `/key/info` 显示 spend 仍低于 `max_budget`，与 #27639 相关，预算控制链路存在一致性问题。暂无修复 PR。[Issue #27735](https://github.com/BerriAI/litellm/issues/27735)

- **`auto_router/complexity_router` 报 "Unmapped LLM provider"（未解决）**：在 `litellm_params` 中配置后所有请求返回 400。暂无修复 PR。[Issue #27473](https://github.com/BerriAI/litellm/issues/27473)

### 已有关闭 / 有修复 PR

- **guardrails usage 接口日期窗口无上限**：已由 fix PR 修复（限制日期窗口、错误日期返回 4xx 而非 500、反转日期不再静默 200）：[PR #37380](https://github.com/BerriAI/litellm/pull/37380)（已关闭）
- **vector store 调试日志泄露凭据**：直接搜索时将完整的调用状态（含连接配置、认证对象、请求头）写入 debug 日志。修复 PR 将直接搜索的日志输出脱敏：[PR #37373](https://github.com/BerriAI/litellm/pull/37373)（open）
- **DashScope token 计数错误**：`prompt_tokens_details.cache_creation_input_tokens` 嵌套字段未被读取，导致缓存写入 token 按输入费率计费。修复 PR 已提交：[PR #37377](https://github.com/BerriAI/litellm/pull/37377)（open）

## 6. 对应用开发者的意义

1. **Agent 工具执行可靠性**：若你的应用通过 LiteLLM 代理 Anthropic 流式接口（Claude Code 场景），请关注 #37273 —— 在修复发布前，工具重复执行风险可能导致非幂等操作（如数据库写入、文件编辑）被执行两次。建议在客户端做 `content_block_stop` 去重或升级后验证。

2. **预算控制存在误判窗口**：虚拟密钥预算检查依赖可能过期的 spend 数据（#27735），对成本敏感的生产环境建议同时依赖钱包/配额系统的二次校验；`provider_budget_config` 在没有 Redis 时存在 57 年重置 Bug（#37261），不要依赖该功能做月度预算强制。

3. **OAuth 凭据静默丢失风险**：通过 MCP Server 管理 API 更新 OAuth 配置时（`delegate_auth_to_upstream=true`），`authorization_url` 等字段会被静默清空，更新后需要回读确认配置完整性，否则下游 MCP 工具可能突然失联（#37258）。

4. **凭据泄露面扩大**：`GET /health` 明文返回 `aws_session_token`（#36898），vector store debug 日志也会输出完整连接凭据（PR #37373）。如果你的日志系统是外部聚合的，建议先检查是否有 token 已经外泄，并在修复发布前收紧日志采集级别。

5. **Responses API 转译的坑仍然存在**：#25429 表明 `responses()` 桥接对 GPT-5.4 这类新模型仍不可靠，建议生产流量优先走 Chat Completions 路径，或将 `responses` 单独路由到已验证的模型版本。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 动态日报 — 2026-08-19

## 今日速览

过去 24 小时 Unsloth 无新版本发布，但 Studio 前端性能修复集中落地：7 个 PR 针对渲染线程阻塞、流式输出内存泄漏与侧边栏重计算问题。AMD 平台仍是热点，3 个修复/检测 PR 在途（ROCm 版本识别、Windows VRAM 读取、quantized KV cache 丢失），同时社区对 **LAN 监听（0.0.0.0）** 的呼声持续走高（两个高赞 Issue）。

## 新模型与硬件支持

- **AMD ROCm 检测修复（Linux）**：PR #8886 修复 Debian 13/LMDE 上 `hipconfig`（5.7.x）与 HSA runtime（6.1.x）版本分裂导致回退 CPU wheels 的问题。 [PR #8886](https://github.com/unslothai/unsloth/pull/8886)
- **Windows AMD VRAM 读取修复**：PR #8863 通过按 LUID 关联适配器计数器，解决 Windows 下 AMD VRAM 上报为 0/不可读的问题（修复 #8862）。 [PR #8863](https://github.com/unslothai/unsloth/pull/8863)
- **Ollama 模型接入 Chat Picker**：PR #9237 让 `ollama pull` 的模型出现在 Studio 聊天模型选择器中，此前前端会主动丢弃 `source="ollama"` 的行（修复 #9226）。 [PR #9237](https://github.com/unslothai/unsloth/pull/9237)
- **aarch64 容器镜像请求**：Issue #4198（已开放近 5 个月）仍在等待官方提供 ARM64 镜像，用户构建 xformers 成本高。 [Issue #4198](https://github.com/unslothai/unsloth/issues/4198)
- **RTX 5060 Ti 16GB 无法加载 NVFP4**：Issue #8246 报告该卡加载 NVFP4 格式失败，尚未有修复 PR。 [Issue #8246](https://github.com/unslothai/unsloth/issues/8246)

## 性能与优化

以下均为 Studio 前后端性能相关 PR，多数今天刚提交：

- **SQLite 读取移出事件循环**：PR #9234 将 Studio 的 SQLite 读操作从事件循环线程剥离，避免文件操作 stall 时整个 Studio 停止响应（含 `/api/liveness`），`busy_timeout` 也救不了。 [PR #9234](https://github.com/unslothai/unsloth/pull/9234)
- **流式推理面板 Markdown 窗口化**：PR #9231 将 reasoning 面板按窗口渲染，此前长生成达到约 **15,000 个挂载元素 + 14,000 个 Shiki highlight spans** 时帧率崩塌。 [PR #9231](https://github.com/unslothai/unsloth/pull/9231)
- **Shiki token 缓存加边界**：PR #9228 修复流式代码块的 JS 堆无限增长问题。32KB fence 在 83 秒流式传输中保留 **+82.71 MB**，约 **0.28 MB/250ms** 刷新窗口，现已被有界缓存限制。 [PR #9228](https://github.com/unslothai/unsloth/pull/9228)
- **侧边栏历史全量重分组消除**：PR #9227 为 `useChatSidebarItems` 增加记忆化，避免每次侧边栏刷新时重新遍历、分配整个聊天历史的对象。 [PR #9227](https://github.com/unslothai/unsloth/pull/9227)
- **行内 tooltip/菜单延迟挂载**：PR #9233 让模型选择器中每行的 3 个 tooltip + 1 个 dropdown 在首次悬停/聚焦时才挂载，减少初始渲染成本。 [PR #9233](https://github.com/unslothai/unsloth/pull/9233)
- **侧边栏菜单移出 body modal 层**：PR #9229 将用户真正会打开的三个侧边栏菜单从 modal 层移出，其中最贵的菜单此前是全局测量中最昂贵的。 [PR #9229](https://github.com/unslothai/unsloth/pull/9229)
- **部分 GGUF 按剩余量定价**：PR #8989 修复 Model hub 反复重下已存在模型的问题，改用“剩余需下载字节数”计算部分下载的定价。 [PR #8989](https://github.com/unslothai/unsloth/pull/8989)

## 稳定性与回归

按严重程度排列，高风险项均已有对应修复 PR。

- **【高危】手动设置 context 导致 M1 Max 内核崩溃**：Issue #9172 报告在 M1 Max（32GB）上手动把 `Qwen3.8-27B-UD-Q4_K_XL.gguf` 的 context 调大，直接 kernel panic（两次）；切换 `Q3_K_XL` 或保持 Auto 则无问题。修复 PR：Metal 分支在 context 超出 unified memory 容量时拒绝加载。 [PR #9172](https://github.com/unslothai/unsloth/pull/9172)
- **【高危】单个 Markdown chunk 加载失败拖垮整个 Studio**：Issue #9235 指出懒惰加载的语法高亮/Mermaid 块若网络失败，`React.lazy` 的 rejection 会让整个应用崩溃。修复 PR #9236 已提交。 [Issue #9235](https://github.com/unslothai/unsloth/issues/9235) [PR #9236](https://github.com/unslothai/unsloth/pull/9236)
- **【中危】并行 MCP 工具调用 JSON 被拼接**：Issue #9022（已关闭）——Studio 将多个并行 MCP tool calls 的 JSON 参数串联到第一个调用的 `function.arguments` 中，工具执行可能成功但历史记录损坏，后续请求持续报 `Extra data` 错误。 [Issue #9022](https://github.com/unslothai/unsloth/issues/9022)
- **【中危】Windows npm shim 解析失败**：PR #9238 修复 `unsloth start codex/pi` 在 Windows 上因 `shutil.which()` 解析到无扩展名 POSIX shim 而报 `WinError 193` 的问题（修复 #9167）。 [PR #9238](https://github.com/unslothai/unsloth/pull/9238)
- **【中危】main 分支测试红**：PR #9192 修复 4 个在 main 上失败的测试——均为读取源码文本/形状而非行为的测试，未被 CI 提前捕获。 [PR #9192](https://github.com/unslothai/unsloth/pull/9192)
- **【中危】macOS 应用二次启动报错**：Issue #8610（M4 Pro）——首次启动正常，第二次启动即失败，仍开放无 fix。 [Issue #8610](https://github.com/unslothai/unsloth/issues/8610)
- **【中危】quantized KV cache 在 tensor split 时被丢弃**：PR #8939 修复多 GPU 张量并行时，quantized KV cache 类型（如 q8_0）被静默降级为 f16 的问题（修复 #8888）。 [PR #8939](https://github.com/unslothai/unsloth/pull/8939)
- **【中危】AMD sd-cli 视频生成 SIGABRT**：Issue #8322（已关闭）——Auto/group 内存策略下 `ggml_abort: alloc compute params backend buffer failed`，7800 XT 16GB。 [Issue #8322](https://github.com/unslothai/unsloth/issues/8322)
- **【低危】MLX Train/Export 按钮误灰**：Issue #9120——首次导入 transformers 的线程竞争导致按钮置灰，非安装损坏。 [Issue #9120](https://github.com/unslothai/unsloth/issues/9120)

## 对应用开发者的意义

- **MCP 并行调用是硬伤，现已修复**：`Extra data` 拼接错误会导致 Agent 在多工具并行调用后请求历史永久损坏，升级 Studio 时需重点验证此场景。
- **本地网络集成等待中**：两个高赞 Issue（#8578 获 👍8、#8898 获 👍3）要求 API 监听 `0.0.0.0` 而非仅 `127.0.0.1` 或 Cloudflare tunnel。若你的应用需要局域网内多设备直连 Studio，目前仍需 tunnel 或 CLI 绕过。
- **长上下文 + 统一内存设备的坑**：M1 Max kernel panic 警示——在 Apple Silicon 上手动扩展 context 可能直接搞崩系统。应用层应限制 context 上限或依赖 Auto 模式，等待修复 PR 合入。
- **`edit_file` 工具将减少 Agent 的 token 开销**：PR #8753 为 Studio agent 增加 `edit_file`，避免大文件全量重写（`cat` 重写导致 64K-94K context 任务失败）。Agent 开发者的文件操作成本将显著下降。
- **Windows 开发者注意 `.cmd` shim 问题**：在修复合入前，`unsloth start codex` 在 Windows 上可能因 Path 解析顺序出现 `WinError 193`，可考虑手动指定 `.cmd` 路径绕过。
- **AMD 用户等待 ROCm 检测修复**：若你的 Debian 系系统 ROCm 版本分裂导致误用 CPU wheels，PR #8886 合入前可手动设置 `ROCM_PATH` 或统一安装 `rocm-core` 规避。

---

> 日报数据截至 2026-08-19 00:00 UTC，基于 unslothai/unsloth 仓库 61 条活跃 Issue 与 169 条活跃 PR 中过去 24 小时有更新的条目。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*