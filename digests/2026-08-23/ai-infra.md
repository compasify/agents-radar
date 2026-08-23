# AI 基础设施日报 2026-08-23

> 生成时间: 2026-08-22 23:10 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施生态横向对比分析报告（2026-08-23）

## 1. 生态全景

整体处于"功能快速演化、稳定性承压"阶段。投机解码（DSpark/MTP/EAGLE3/DFlash）已全面渗透各推理引擎，但量化 KV cache 与投机解码的组合成为今日最集中的崩溃源，vLLM、SGLang、llama.cpp 三家同日出现相关严重缺陷。确定性推理（vLLM Batch Invariant）与快速恢复（SGLang 权重加载 306s→<1s）正在成为新一轮竞争焦点。模型支持呈"多模态 + MoE + 细粒度路由"同步扩张态势，AMD/ROCm 差距在缩小但仍频现 0% 接受率等深水区问题。Agent 需求开始反向重构网关与推理协议，流式工具调用、缓存计费、会话保持是当前最实际的痛点。

## 2. 各项目活跃度对比

> 注：以下 Issue/PR 数量为各日报摘要中提及的关联项，非仓库完整变更集；Release 为 UTC 2026-08-22 至 08-23 区间。

| 项目 | 提及 Issues | 提及 PRs | Release | 关键事件 |
|---|---|---|---|---|
| vLLM | ~18 | ~16 | 无 | 无新版本；调度器挂死（#53130）无修复，KV offload 两项竞态修复合入 |
| SGLang | ~13 | ~12 | **v0.5.18** | 710 PR/212 贡献者；Muse Glimmer 正式支持；Kimi-K3 在 v0.5.18 崩溃（#36018） |
| llama.cpp | ~14 | ~22 | **10 个**（b10576–b10587） | 发布最密集；Vulkan 算子补全、mtmd 多模态、DSpark 新模型 |
| Ollama | ~13 | ~6（1 合并） | 无（当前 0.32.15） | MLX 结构化输出两次 PR；`tool_choice` 修复提交；MLX 内存泄漏未解 |
| LiteLLM | ~13 | ~10 | 无 | Responses API bridge 会话/ID 修复；Admin UI cookie 泄密修复标记关闭 |
| Unsloth | ~16 | ~14 | 无 | 长线程增量渲染 PR；API 无法监听 LAN/WSL（#9522） |

**活跃度排序**：llama.cpp（发布节奏、PR 密度）> SGLang（版本级发布）> vLLM/Unsloth（问题与修复均衡）> LiteLLM > Ollama。

## 3. 模型支持竞速

| 项目 | 今日新模型/架构 | 特点 |
|---|---|---|
| **llama.cpp** | bailingmoe3 DSpark、dots3-note 视觉+音频（mtmd）、GigaChat 3.5（432B-A28B MoE 转换）、DFlash2 投机解码、Hexagon NPU 后端 | **广度冠军**：10 个版本覆盖新架构、算子、后端；对长尾/新兴模型响应最快 |
| **SGLang** | Muse Glimmer 多模态自回归（随 v0.5.18）、Spark3 原生架构（滑窗/门控/TP/PP）、LLaDA2.2 Block Routing MoE、AMD Radix-4 MoE Router、Cake Stage-2（SM100/103） | **多模态与扩散 MoE** 同步扩张；AMD 路由 kernel 针对性优化 |
| **vLLM** | Qwen3-Omni DSpark 草稿架构（合入）、MiniMax-M3 ROCm MTP/dense AITER、Kimi-K3 gfx942 路线图单独立项 | 纵深推进 spec-decode 架构矩阵；ROCm 支持从"可用"走向"调优" |
| Ollama / LiteLLM | 无新模型/架构 | Ollama 卡在 HF 导入问题（`PARSER qwen3`、错误 `stop` 推导）；LiteLLM 仅补齐定价 |
| Unsloth | Ling 3.0 支持请求仍开放 | 无落地 |

**判断**：llama.cpp 保持新架构覆盖速度第一；SGLang 借大版本在多模态与扩散 MoE 上领跑；vLLM 在投机解码架构的工程化深度上最扎实（DSpark 合入、PP 扩展）。

## 4. 性能优化前沿

| 方向 | 代表动态 | 数据支撑 |
|---|---|---|
| **确定性/批不变性** | vLLM Batch Invariant：新增 Qwen3-0.6B 验证；RTX 4090D/H20 per-device launch 配置 | decode 核函数约 **3x 加速** |
| **KV cache 量化与效率** | SGLang NVFP4+spec-decode 崩溃（未修复）；vLLM 请求 INT8 KV cache（当前仅 FP8）；Ollama 新增 `prompt_eval_cached_count` | KV cache 量化矩阵远未测通；可观测性指标开始渗透到网关 |
| **快速恢复** | SGLang Weight Cache Daemon Phase 1 落地 | Qwen3-235B FP8 加载 **~306–327s → <1s**（每 rank 守护进程 + CUDA IPC） |
| **投机解码** | vLLM EAGLE3 流水线并行（open）；llama.cpp DFlash2、adaptive MTP depth；vLLM DeepSeek-V4-Flash DP8 vs TP8 实测 | DP8 取得 **7.7x KV 容量、3.4x 1M TTFT 加速**（单机 8×B200） |
| **算子/后端** | llama.cpp Vulkan PAD_REFLECT_1D、OpenCL 系列（K-quant/GEMV/FA decode）、SYCL Q2_K 重新引入；vLLM persistent matmul 调优 | OpenCL TG/PP 提升 **11–12%**（Intel Xe-LP） |
| **分布式/路由** | LiteLLM `least_busy` 负计数器钳制；SGLang NIXL P/D 运维问题 | 路由稳定性修复；PD 分离仍有运维深坑 |

**火力排序**：KV cache（量化+可观测性）> 投机解码（架构扩展+稳定性修复）> 批处理确定性 > 算子/后端补全 > 分布式调度。

## 5. 分层定位差异

| 层次 | 项目 | 核心定位 | 今日关键信号 |
|---|---|---|---|
| **生产级推理引擎** | vLLM | 高吞吐 serving；PD 分离、cudagraph、连续批处理 | 调度器挂死（#53130）无 fix，生产可靠性承压；TurboQuant 修复合入 |
| **前沿创新引擎** | SGLang | RadixAttention、DP MoE、fast recovery 等方法论驱动 | v0.5.18 大版本发布，但 Kimi-K3 崩溃为版本级阻断 |
| **本地/边缘运行时** | llama.cpp | GGUF + 最广硬件后端（CUDA/ROCm/SYCL/Vulkan/OpenCL/NPU） | 10 连发；SYCL/多卡稳定性高风险 |
| **用户向本地运行时** | Ollama | 零配置部署 + OpenAI/Anthropic 兼容层（基于 llama.cpp 生态） | MLX 结构化输出补齐；工具调用行为修复 |
| **网关/代理层** | LiteLLM | 多 provider 路由、预算/计费、安全、协议桥接 | 位于所有引擎之上；计费语义变更（读取缓存响应不再计费）需适配 |
| **微调/训练层** | Unsloth | QLoRA 高效微调 + Studio 产品化（自带推理/API/MCP） | 与推理引擎竞争"最后一公里"；API 仅绑定 127.0.0.1 限制多端访问 |

**关键关系**：llama.cpp 与 Ollama 是上下游；LiteLLM 横跨全部引擎；vLLM 与 SGLang 直接竞争同一批生产用户；Unsloth 正从训练侧向 serving/agent 体验侧延伸。

## 6. 值得关注的趋势信号

1. **投机解码已成标配，但量化组合是雷区**。SGLang NVFP4+DFLASH/NEXTN 必然崩溃、llama.cpp 量化目标上 greedy 输出分歧（#25618）、vLLM TurboQuant MTP 非法内存访问（今日修复）——spec-decode × KV cache 量化的组合矩阵远未测通。**部署建议**：逐组合先做小流量验证，生产环境对 spec-decode 与量化启用保持保守。

2. **"确定性推理"进入工程议程**。vLLM Batch Invariant 受 Thinking Machines 博客启发，目标是消除 batch 组成对数值结果的影响，directly 影响评测、实验、金融/法律等对可复现性敏感的场景。预计 SGLang 会跟进。

3. **Agent 需求正在重构协议与网关语义**。vLLM 提出一等 agentic inference RFC；LiteLLM 密集修复 Responses API bridge 的会话 ID 与流式链路；Ollama 修复 `tool_choice` 被静默忽略；vLLM 修复 DSML 闭合标签流式截断。**Agent 开发者**应关注：流式工具调用正确性、`previous_response_id` 链式会话、缓存感知计费三个方向。

4. **恢复时长成为新 SLA 指标**。SGLang Weight Cache Daemon 将百亿参数模型加载从 300s+ 降至 <1s，大模型弹性扩缩容/故障恢复的可行性显著提升。多租户网关场景应关注该能力向控制面的集成。

5. **KV cache 可观测性从引擎渗透到计费**。Ollama 新增缓存命中 token 统计；LiteLLM 修复缓存读取按全价计费的偏差。缓存命中率正从内部性能指标变成商业成本指标，平台团队应尽早建立统一度量口径。

6. **ROCm 在追赶，但 spec-decode 仍不可信**。vLLM 为 ROCm 启用 MiniMax-M3 MTP、SGLang 新增 AMD Radix-4 MoE kernel，但 vLLM 报告 GLM-5.2 MTP 0% 接受率 + 非法地址错误、llama.cpp SYCL Arc 系列崩溃。AMD 平台用户启用投机解码前务必核对 issue 状态。

7. **本地运行时的多模态与 NPU 双线推进**。llama.cpp 支持 dots3-note 视觉+音频并新增 Hexagon NPU 后端；Ollama/Unsloth Studio 的多模态体验同步跟进。端侧推理的模型形态正在从文本转向多模态 Agent。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 动态日报 2026-08-23

## 今日速览

Batch Invariant 工作持续推进，新增 Qwen3-0.6B 测试覆盖与 RTX 4090D/H20 的 per-device 调优配置（decode 核函数约 3 倍加速）。稳定性方面，今日集中出现一批调度器挂死、KV offload 数据竞争与 spec-decode 内存崩溃报告，其中 TurboQuant 与 KV offload 相关已有修复 PR，调度器永久停摆问题尚无修复。此外，EAGLE3 流水线并行支持与 Qwen3-Omni DSpark 模型支持有新进展。

---

## 版本发布与破坏性变更

- **无新版本发布。** 过去 24 小时无新 Release。
- **[PR #52557] 移除失效的 `use_prefill_decode_attention` 标志**（已关闭）：该标志在 #36702 将 ROCM_ATTN 设为无条件优先后已无任何读取方，此 PR 将其从 CLI 与文档中删除，属于遗留配置清理，不影响当前行为。

---

## 新模型与硬件支持

- **[PR #52560] 新增 Qwen3-Omni DSpark 支持**（已关闭，合入）：注册专用 `Qwen3OmniDSparkModel` 草稿架构，复用 Qwen3DSpark 运行时实现，支持目标模型为 Qwen3-Omni 的投机解码。
- **[PR #52849] ROCm 启用 MiniMax-M3 MTP 与 dense 层的 AITER PA gluon decode**：EAGLE3 投机解码在 AMD 平台不再回退到 native attention。当前为 open 状态。
- **[Issue #52803] Kimi-K3 gfx942/MI325X（含 MI300X）支持路线图**：在通用 Kimi-K3 ROCm 跟踪之外单独立项，补齐 gfx942 与 gfx950 的差距说明。
- **[Issue #38006] `TRITON_MLA_SPARSE` 后端请求**：为 sm80/120/121 提供 Sparse MLA 的 Triton 实现，相关 PR（#37968、#35271）需在该后端落地后重新引入。
- **[Issue #33480] KV Cache 量化增加 INT8 支持请求**：当前仅支持 FP8，INT8 对老一代硬件部署更友好。
- **[PR #53358] 修复 arm64 镜像构建**：强制 tilelang sdist 使用 CMake 3.x，修复首个冷构建失败。

---

## 性能与优化

- **[PR #53247] Batch-invariant persistent matmul per-device 调优配置**：为 RTX 4090D 与 H20 添加精确的 bf16 launch 配置（覆盖 Qwen3-1.7B 五种权重形状，选择 BLOCK_SIZE_M/N、num_warps、num_stages），decode 核函数实测约 3 倍加速。对应 #27433 Batch Invariant 计划的一部分。
- **[PR #53403] Batch Invariance 测试模型扩展**：新增 `Qwen/Qwen3-0.6B` 到已验证模型列表。相关工作受 [Thinking Machines 博客](https://thinkingmachines.ai/blog/defeating-nondeterminism-in-llm-inference/) 启发，目标是消除批量组成对数值结果的影响。
- **[PR #45457] GPT-OSS MoE forward 复用 topk SparseMatrix 路由元数据**：在 triton_kernels v3.6+ 路径上避免重复计算 topk 结果。
- **[Issue #51454] DeepSeek-V4-Flash-0731 DP8 vs TP8 实测**：单机 8x B200 上 DP8 相比 TP8 在单 KV-head MLA 配置下取得 7.7x KV 容量与 3.4x 的 1M TTFT 加速。
- **[PR #50514] EAGLE3 投机解码支持流水线并行**：此前 PP 模式下 `eagle3`/`dflash`/`dspark` 直接报错，该 PR 将 drafter 放在最后 PP rank 上。当前为 open 状态。

---

## 稳定性与回归

### 严重（服务不可用/死锁）

- **[Issue #53130] 调度器永久停止接收请求**：running + skipped_waiting 达到 max_num_seqs 后，即使 KV cache 大量空闲、引擎健康检查正常，也不再 admit 新请求，只能重启恢复。**暂无 fix PR。**
- **[Issue #52833] GLM-5.2 MTP 在 MI355X 上 0% 接受率**：禁用 expert parallelism 后触发 `hipErrorIllegalAddress`。**无 fix PR。**
- **[Issue #53157] vLLM 0.26.0 + Ray TP8 间歇性 wedge**：`shm_broadcast` 阻塞约 60s 后 `RayWorkerProc rank=[0] died unexpectedly`，API 存活但生成完全停滞。**无 fix PR。**
- **[Issue #50851] DSpark 投机解码在 H200 上不可用**：多个代码路径假设只有 `"dflash"` 类型，DSpark 复用 DFlash 基础设施时触发 shape error。**无 fix PR。**

### 高（崩溃/非法内存访问，已有修复 PR）

- **[PR #53406] TurboQuant attention 后端错误 FULL-capture spec-decode 批次**：修复 #52475——MTP 投机解码配合任何 `turboquant_*` KV cache dtype 会静默退化成重复输出，`num_speculative_tokens: 1` 时直接非法内存访问。根因是 `TurboQuantMetadataBuilder` 声明了 `UNIFORM_BATCH` cudagraph 支持但实际并不安全。
- **[PR #53330] KV Offload P2P supply 与 consumer demand 不一致**：修复 #53083。生产端与消费端独立计算，不一致时 consumer 的未匹配 demand 会一直阻塞到 `_LOAD_TIMEOUT_S`。
- **[PR #53329] KV Offload primary key 级联丢失**：修复 #53062。`HIT_PENDING` 状态的 key（写入仍在途）在级联到 request-level tier 时被永久丢弃。
- **[PR #52244] 混合 GDN 模型在 MTP 投机解码下 prefix-cache 不命中**：Qwen3.5-122B-A10B 上缓存重放不达预期深度，长度恰好为 hash unit 整数倍的 prompt 完全无命中。当前为 open 状态。

### 中（正确性/回归）

- **[Issue #53142] 混合 Mamba align precopy 非法内存访问**：前缀缓存恢复 + 显式 `--block-size` 时 state column 以错误 block size 初始化。**无 fix PR。**
- **[Issue #51297] Qwen3.5-122B-A10B Triton illegal memory access**：vLLM 0.23.0 上启动后报错但健康检查始终返回 healthy，实际无法服务流量。**无 fix PR。**
- **[Issue #48035] FP8 官方 checkpoint 相比 runtime 量化在 bs=1 下慢 ~40%**：v0.24.0 相比 v0.19.1 单请求 decode 吞吐回退约 28%。**无 fix PR。**
- **[Issue #34186] LoRA 模块名前缀不匹配时静默输出 base-model 结果**：无报错，但适配器完全不生效。**无 fix PR。**

### 低（ROCm/CI 专项）

- **[PR #53407] MRV2 ROCm 统一 decode 分发到 padded FULL cudagraph**：投机解码下半数 decode batch 静默回退到 eager attention，此 PR 修复该回退。**open 状态。**
- **[PR #53399] ROCm CI 增加 MTP 与其他 spec-decode 接受率覆盖**：从 #50519 拆分出 MI355 夜间测试组。
- **[Issue #34994] ROCm CI 基础设施改进**：部分完成，仍待上游 CI 镜像全部测试。

---

## 对应用开发者的意义

- **调度器挂死问题直接影响生产可靠性。** Issue #53130 的“健康检查正常但请求不处理”是最难排查的一类故障，建议部署监控同时覆盖引擎健康状态与实际 token 产出速率，不能只依赖 health endpoint。当前无修复，生产环境需留意规避。
- **Streaming 工具调用结果更干净。** [PR #53405] 修复了 DeepSeek V4 流式输出时 DSML 闭合标签被 chunk 边界截断、导致参数值泄漏到工具参数的问题；[PR #53404] 修复了 Muse Glimmer reasoning 模式下 JSON schema 被静默跳过的问题。Agent 应用可关注这两个修复的合入时间线。
- **Agentic 推理正在走向一等公民。** [Issue #52567] 提出了 vLLM 一等 agentic inference 支持的 RFC，基于已完成的 Agentic API MVP（支持 Codex 与 Claude Code），未来可能影响请求协议与推理循环的扩展方式。
- **Disaggregated serving 的 API 语义在完善中。** [Issue #42729] 提议为 `/render` 端点增加 derender 能力以返回 detokenization 结果，vLLM 的 PD 分离部署前后端接口将更完整。
- **前缀缓存行为需要重新验证。** 混合架构模型（如 Qwen3.5 系列）在 MTP 投机解码下 prefix-cache 命中率可能异常（#52244），使用缓存加速的推理服务在升级后应对比命中率指标。
- **ROCm 用户需谨慎选择 spec-decode 配置。** MI355X 上 GLM-5.2 MTP 0% 接受率与 MI325X 上的非法内存访问问题尚未解决，AMD 平台启用投机解码前建议参考对应 issue 跟踪状态。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 动态日报 — 2026-08-23

## 1. 今日速览

SGLang 发布 v0.5.18 大版本，涵盖 710 个 PR、212 位贡献者，重点新增 Muse Glimmer 多模态模型支持。与此同时，两个高优先级 Bug 浮出水面：NVFP4 KV Cache 与投机解码的组合在 FlashInfer dequant 工作区崩溃（#36001/#36010），以及 Kimi-K3 在 v0.5.18 中直接崩溃（#36018），目前均未见已合入的修复 PR。此外，CI 维护模式相关讨论持续活跃（#21065/#17050），基础设施稳定性仍是社区关注焦点。

## 2. 版本发布与破坏性变更

### v0.5.18 正式发布
- **链接**: [Release v0.5.18](https://github.com/sgl-project/sglang/releases)
- **内容**: 累计 710 个 PR、212 位贡献者。新增 Muse Glimmer（自回归多模态）模型支持；完整支持模型列表见 [cookbook](https://docs.sglang.io/cookbook)。
- **注意**: 今日有报告称 Kimi-K3 在该版本中崩溃（见稳定性部分），升级前建议验证目标模型兼容性。

### ServerArgs 配置体系重构（进行中，暂未合入）
ch-wan 提交了一组栈式 PR（#35904 → #35917），目标是将 `ServerArgs` 从"构造时就地修改记录"迁移为"解析一次、发布到 config bags"的统一模式。该系列涉及 quant、deepseek、speculative-decoding、diffusion 等多个模块，合并后将影响配置解析顺序与行为。
- **链接**: [PR #35917（CI 载体，汇总全系列）](https://github.com/sgl-project/sglang/pull/35917)

## 3. 新模型与硬件支持

- **Muse Glimmer（多模态自回归）**: 随 v0.5.18 发布，详见 [Release](https://github.com/sgl-project/sglang/releases)。
- **Spark3 模型**: PR #35963 新增 Spark 3 架构原生支持，含滑窗/全注意力、注意力头输出门控、TP/PP 并行。
  - **链接**: [PR #35963](https://github.com/sgl-project/sglang/pull/35963)
- **LLaDA2.2 Block Routing MoE**: PR #31768 实现扩散模型块级 MoE 路由的服务端支持（先选专家候选集，再做 token 级 top-k）。
  - **链接**: [PR #31768](https://github.com/sgl-project/sglang/pull/31768)
- **AMD Radix-4 MoE Top-k Router Kernel**: PR #34490 为 Kimi-K3 路由新增 radix-4 版本，针对 ROCm 优化。
  - **链接**: [PR #34490](https://github.com/sgl-project/sglang/pull/34490)
- **Cake Stage-2 Backend（FastWan VSA，SM100/SM103）**: PR #35490 接入 FlashInfer Cake source backend，消费 FastWan 的逐头 top-k 元数据。
  - **链接**: [PR #35490](https://github.com/sgl-project/sglang/pull/35490)

## 4. 性能与优化

- **Weight Cache Daemon（Fast Engine Recovery）Phase 1 已落地**: 每 rank 守护进程持有后量化权重，经 CUDA IPC 服务加载请求；Qwen3-235B FP8 权重加载耗时从 **~306–327s 降至 <1s**。相关博客发布，路线图见：
  - **链接**: [Issue #33522](https://github.com/sgl-project/sglang/issues/33522) | [LMSYS 博客](https://www.lmsys.org/blog/2026-08-21-sglang-fast-engine-recovery)
- **Mamba SSD 新增 strict FlashInfer SSD / Cake 两个 prefill 后端**: PR #35444 保留现有 `flashinfer` 默认路径，同时支持 Nemotron-H C256 逻辑元数据到物理 C128 域的映射。
  - **链接**: [PR #35444](https://github.com/sgl-project/sglang/pull/35444)
- **Wan VAE RMSNorm 行寻址扁平化**: PR #35981 将 `[b/t/h/w]` div/mod 链改为 `[pixel, channel]` 扁平寻址，保持归一化与 dtype 边界不变，降低 kernel 指令开销。
  - **链接**: [PR #35981](https://github.com/sgl-project/sglang/pull/35981)
- **Diffusion Benchmark 技能增强**: PR #36016 增加 quality 与 breakable CUDA graph 控制，新增同 GPU quality/BCG 适用性矩阵。
  - **链接**: [PR #36016](https://github.com/sgl-project/sglang/pull/36016)

## 5. 稳定性与回归

按严重程度降序排列：

### P0 — 崩溃/阻断性问题（暂无 fix PR，社区需关注）

- **Kimi-K3 在 v0.5.18 中崩溃**（今日新增，0 评论）
  - **链接**: [Issue #36018](https://github.com/sgl-project/sglang/issues/36018)
- **NVFP4 KV Cache + 投机解码（DFLASH/NEXTN）崩溃**: `extend_prefix_lens_cpu is None`，崩溃点在 FlashInfer dequant workspace；SM120（RTX 5090）与 H100 均可复现。两个 issue 重复报告。
  - **链接**: [Issue #36001](https://github.com/sgl-project/sglang/issues/36001) | [Issue #36010](https://github.com/sgl-project/sglang/issues/36010)
- **NIXL P/D 部署中替换单一角色后整个 PD 对不可服务**: 两侧 role 均报 Ready，但请求超时，需重启恢复（v0.5.16 复现）。
  - **链接**: [Issue #33789](https://github.com/sgl-project/sglang/issues/33789)
- **/health handler 超时路径未取消 scheduler 侧请求**: 孤儿 health-check 请求堆积，可导致 paged-prefill batching 崩溃。
  - **链接**: [Issue #35884](https://github.com/sgl-project/sglang/issues/35884)

### P1 — 严重正确性/安全问题

- **Diffusion LoRA 自动合并模式崩溃**: `--lora-merge-mode auto` 选择静态权重合并，但基础权重在 post-load 阶段已转为量化运行时布局，与 LoRA 合并冲突（MiniMax-H3 FL2VA 复现）。
  - **链接**: [Issue #35970](https://github.com/sgl-project/sglang/issues/35970)
- **Qwen 3.8 27B NVFP4 图像坐标检测错误**（今日新增）
  - **链接**: [Issue #35949](https://github.com/sgl-project/sglang/issues/35949)
- **FP8 KV Cache 下 Prefill 与 Decode logprob 不一致**（精确位于 index 96，H100）
  - **链接**: [Issue #25790](https://github.com/sgl-project/sglang/issues/25790)
- **DSPARK 在 DeepSeek-V4-Flash 上静默破坏标识符**，导致投机解码结果不安全（已关闭，但值得留意结论）
  - **链接**: [Issue #34959](https://github.com/sgl-project/sglang/issues/34959)

### P2 — CI / 基础设施

- **CUDA Coredump Tracker（机器人汇总）**: 累计 238 条评论，持续收集 pr-test.yml 中的 coredump 事件。
  - **链接**: [Issue #26340](https://github.com/sgl-project/sglang/issues/26340)
- **CI 测试失败追踪**: 当前 3 broken、11 flaky、669 recently fixed。
  - **链接**: [Issue #17050](https://github.com/sgl-project/sglang/issues/17050)
- **CI Maintenance Mode 讨论**持续中（#21065，10 评论，5 👍）。

### 今日合入/关闭的回归

- [#36001](https://github.com/sgl-project/sglang/issues/36001) 已关闭（与 #36010 重复）
- 多个 inactive 标记的历史 Bug 关闭：ROCm kv_canary（[#28971](https://github.com/sgl-project/sglang/issues/28971)）、Mooncake L3 HiCache + EAGLE 崩溃（[#28873](https://github.com/sgl-project/sglang/issues/28873)）、DeepSeek-V4-Pro 多节点问题（[#27109](https://github.com/sgl-project/sglang/issues/27109)、[#28915](https://github.com/sgl-project/sglang/issues/28915)）等。

## 6. 对应用开发者的意义

1. **投机解码 + NVFP4 组合不要上生产**：当前 DFLASH/NEXTN + `--kv-cache-dtype nvfp4` 在验证阶段必然崩溃，无 workaround。建议保持 bf16/fp8 KV cache，或等待 #36010 的修复。
2. **升级 v0.5.18 前验证 Kimi-K3 与 LoRA 场景**：Kimi-K3 崩溃与 Diffusion LoRA auto 合并问题均为版本级阻断，建议在 staging 环境先行跑 smoke test。
3. **NIXL P/D 部署避免滚动替换单角色**：若必须替换，请同时重启两端；已有 issue #33789 在跟踪。
4. **高层级缓存恢复值得关注**：Weight Cache Daemon 已显著降低大模型权重加载时间（300s+ → 1s 以内），多租户场景下能大幅缩短扩缩容和故障恢复耗时，预计后续版本会进一步完善并集成到网关层。
5. config 体系重构（PR #35917 系列）虽是内部架构调整，但涉及配置解析语义变化；若你使用脚本动态生成 `ServerArgs`，建议关注合入后 release notes 中的迁移说明。

---

*本日报基于 GitHub 公开数据自动汇总，时间窗口为 2026-08-22 至 2026-08-23（UTC）。PR 评论数与状态以抓取时为准。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 动态日报 2026-08-23

## 1. 今日速览

今日 llama.cpp 发布密集（b10576–b10587 共 10 个版本），核心方向为 **Vulkan 算子补全**（PAD_REFLECT_1D）、**mtmd 多模态扩展**（dots3-note 视觉+音频）与 **DSpark 新模型支持**（bailingmoe3）。社区侧，SYCL 后端在 Intel Arc 多卡/单卡场景下持续暴露崩溃与性能问题（#27063、#27198、#27479），CUDA 侧则出现 Blackwell NVFP4 decode 挂起与多 GPU tensor 并行崩溃等严重回归。性能方面，OpenCL 后端多组 PR 报告了两位数的 token/s 提升。

## 2. 版本发布与破坏性变更

- **b10585: common: 新增 json.h 抽象层**（[#27511](https://github.com/ggml-org/llama.cpp/pull/27511)）
  引入 `common/json.h` 封装 `nlohmann::json`，以 pimpl 方式减少多处重复编译 json.hpp 的开销。影响面覆盖 common、jinja、server 与测试代码。**对下游构建的影响**：公共头文件依赖变化，使用 `json.hpp` 的第三方代码可能需要适配新抽象；该 PR 今日已由 [#27575](https://github.com/ggml-org/llama.cpp/pull/27575) 修复 clang LTO 链接问题。

- **b10584: fit 逻辑纳入 n_streams，draft context 跟随 target context**（[#27496](https://github.com/ggml-org/llama.cpp/pull/27496)）
  针对非统一 KV cache，target context 现按 `n_ctx_train` 每序列分配，draft context 同步调整。对启用 speculative decoding 的 server 部署，显存分配策略有变化，建议关注上下文长度配置。

- **b10577: 修复 draft-mtp 与 embeddings 的兼容问题**（[#27400](https://github.com/ggml-org/llama.cpp/pull/27400)）
  修复了 #26352/#27299，MTP 草稿模式下 embeddings 相关行为回归已解决。

- **b10582: 恢复 Ubuntu ROCm CI 任务**（[#27399](https://github.com/ggml-org/llama.cpp/pull/27399)）
  重新启用 ubuntu-rocm CI，并为 ROCm 构建设置 ccache `compiler_check=content`。

## 3. 新模型与硬件支持

- **b10581: 支持 bailingmoe3 的 DSpark 架构**（[#27508](https://github.com/ggml-org/llama.cpp/pull/27508)）
- **b10580: mtmd 支持 dots3-note 视觉+音频多模态模型**（[#27524](https://github.com/ggml-org/llama.cpp/pull/27524)）
  含 GGUF 张量映射与 mtmd C++ 推理实现。
- **PR #25342: GigaChat 3.5（432B-A28B MoE）转换支持**（[#25342](https://github.com/ggml-org/llama.cpp/pull/25342)）
  基于 DeepSeek-V3 风格 MLA + MoE 架构，含混合注意力。
- **PR #27342: DFlash2 投机解码支持**（[#27342](https://github.com/ggml-org/llama.cpp/pull/27342)）
  新增分组动态 depthwise 卷积与候选选择器。
- **PR #27535: 新增 FastRPC-based Hexagon NPU 后端实现**（[#27535](https://github.com/ggml-org/llama.cpp/pull/27535)）
  可与现有 dspqueue 实现共存。
- **b10587: Vulkan 新增 PAD_REFLECT_1D 算子**（[#26586](https://github.com/ggml-org/llama.cpp/pull/26586)）
- **b10586: mtmd 使用 `ggml_rope_set_offset`**（[#27521](https://github.com/ggml-org/llama.cpp/pull/27521)）

## 4. 性能与优化

- **b10578: concat 算子行级 memcpy 优化**（[#24575](https://github.com/ggml-org/llama.cpp/pull/24575)）
  将逐元素 memcpy 替换为行级批量拷贝，降低 concat 开销，已合入主分支。

- **b10576: SYCL 重新引入 Q2_K reordered MMVQ 与 ESIMD kernel**（[#27490](https://github.com/ggml-org/llama.cpp/pull/27490)）
  此前因回归被 revert，现重新合入并增加 gate 参数。
- **PR #26308: CUDA SUM_ROWS 支持 F32 行连续张量**（[#26308](https://github.com/ggml-org/llama.cpp/pull/26308)）
  扩展了 SUM_ROWS 的可用形状范围。
- **PR #27573: CUDA 新增 POOL_1D（avg/max）支持**（[#27573](https://github.com/ggml-org/llama.cpp/pull/27573)）
  216/216 测试用例通过，覆盖两种池化模式。
- **OpenCL 系列优化（进行中，未合并）**：
  - [#26477](https://github.com/ggml-org/llama.cpp/pull/26477)：Adreno GPU 上 K-quant 稠密模型 decode 优化，含 lm_head 量化与 GEMV/中批量 GEMM，面向投机解码/MTP 场景。
  - [#26438](https://github.com/ggml-org/llama.cpp/pull/26438)：Intel Xe-LP 量化路径调优，报告 **TG/PP 提升 11–12%**。
  - [#26430](https://github.com/ggml-org/llama.cpp/pull/26430)：扩展 MQ/cluster FA decode 的 shape 覆盖（head size 64–512，GQA 2–16），Gemma-4 DK=512 解码获得大幅加速。

## 5. 稳定性与回归

- **[严重] CUDA kernel stall 导致 watchdog 杀死进程**（[#27102](https://github.com/ggml-org/llama.cpp/issues/27102)，open）
  RTX Pro 6000 Blackwell Max-Q 上运行 Qwen3.8-27B-GGUF（UD-Q8_K_XL）时 CUDA kernel 挂起。尚无 fix PR。

- **[严重] Qwen3.8-27B-NVFP4 on Blackwell decode 挂起**（[#27329](https://github.com/ggml-org/llama.cpp/issues/27329)，open）
  RTX 5090D 上 decode 阶段 CPU 空转、GPU 无任务。无 fix PR。

- **[严重] SYCL 在 Arc A770 上完全不可用**（[#27063](https://github.com/ggml-org/llama.cpp/issues/27063)，open）
  各种模型均崩溃；B60 正常，疑似 A770 特定回归。无 fix PR。

- **[严重] 3 GPU tensor 并行立即崩溃**（[#26837](https://github.com/ggml-org/llama.cpp/issues/26837)，open）
  3×3090 使用 `-sm tensor` 崩溃，双 GPU 正常。无 fix PR。

- **[严重] RAM-backed prompt cache 串话**（[#27148](https://github.com/ggml-org/llama.cpp/issues/27148)，open）
  `--cache-ram` + `--cache-idle-slots` 在并发下将已完成对话的内容恢复到无关新请求的 slot。对 server 用户是正确性/数据隔离问题，需关注。

- **[中] gemma4 peg 模板工具调用解析不稳定**（[#25986](https://github.com/ggml-org/llama.cpp/issues/25986)，open）
  长多行字符串参数时输出不可解析，短参数正常。

- **[中] mtmd 视频 MOOV atom 位于文件末尾时静默失败**（[#24394](https://github.com/ggml-org/llama.cpp/issues/24394)，open）
  模型收到 0 帧。Windows 上另有 probe() 死锁（[#24429](https://github.com/ggml-org/llama.cpp/issues/24429)）。

- **[中] SYCL 多卡 P2P 崩溃**（[#27198](https://github.com/ggml-org/llama.cpp/issues/27198)、[#27168](https://github.com/ggml-org/llama.cpp/issues/27168)，open）
  `--split-mode tensor` 下 `dev2dev_memcpy` 触发 DEVICE_LOST；OpenCL adapter 报 P2P 未实现。

- **[中] 投机解码在量化目标模型上 greedy 输出分歧**（[#25618](https://github.com/ggml-org/llama.cpp/issues/25618)，open）
  draft-mtp/draft-dspark 在 Q4_K_M 目标上输出与 vanilla 不同，bf16 目标正常。今日合并的 [#27400](https://github.com/ggml-org/llama.cpp/pull/27400) 修复了另一类 MTP 问题，但本 issue 仍未关闭。

- **[低] RAM-backed prompt cache 恢复无关内容**（[#27148](https://github.com/ggml-org/llama.cpp/issues/27148)，open）
  见上文严重项。

- **已修复项**：
  - draft-mtp + embeddings 崩溃（PR #27400 合并，修复 #26352/#27299）
  - `ggml: concat` 错误 offsets（PR #24575 合并，修复 #24571）

## 6. 对应用开发者的意义

- **多模态能力增强**：dots3-note 视觉+音频支持落地，加之前日 mtmd WebP 支持 PR（[#27520](https://github.com/ggml-org/llama.cpp/pull/27520)，修复 #27443/#12410），llama.cpp 的多模态覆盖在快速扩展。基于 mtmd 构建多模态 Agent 的团队可关注这两项合入进展。

- **投机解码栈正在快速演化**：adaptive MTP draft depth（[#27210](https://github.com/ggml-org/llama.cpp/pull/27210)）与 DFlash2（[#27342](https://github.com/ggml-org/llama.cpp/pull/27342)）两个 PR 均在活跃推进中，同时对量化目标下投机解码结果分歧（#25618）的追查也在继续。使用 MTP 加速的部署建议保持跟进，避免在量化模型上直接采信 greedy 输出一致性。

- **json.h 重构的兼容性提醒**：`common/json.h` 已合入并修复 LTO 问题。若你的构建链或下游代码直接 include `json.hpp`，建议检查 PR #27511 的变更范围；Server 相关集成也应回归测试。

- **SYCL/多 GPU 部署风险高**：今日 Issue 大量集中在 SYCL（A770 崩溃、多卡 dev2dev、编译失败）与 CUDA 多卡（3-GPU tensor 并行崩溃、双卡黑屏输出）场景。生产环境若涉及 Intel Arc 或非对称多 GPU，建议暂缓升级，锁定已知稳定版本。

- **Flash Attention 与 KV cache 布局 Bug 修复中**：PR #26460 正在修复 FA auto 时 V cache 布局与后续 op 不匹配导致的重建/性能问题（[#26460](https://github.com/ggml-org/llama.cpp/pull/26460)），涉及 KV cache 生命周期管理，llama-server 长稳运行场景建议关注。

- **服务器 prompt cache 隔离问题**（#27148）可能导致串话，若你的应用使用 `--cache-ram` 并处理多租户请求，建议暂时禁用该特性直至修复合入。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 动态日报 — 2026-08-23

## 今日速览

MLX 后端成为今日焦点：结构化输出支持已两次提交 PR（#17929、#17697），同时在 #17933 中确认此前该功能被静默忽略。工具调用方面，`tool_choice` 在 OpenAI/Anthropic 兼容层被忽略的问题获修复 PR（#17935）。另一个值得关注的信号是社区对云端模型更新滞后表达了强烈不满（#17796，16👍），并要求淘汰旧模型。

## 版本发布与破坏性变更

**无新版本发布。** 当前最新版本为 0.32.15。今日无非兼容性 API 变更。注意：#17924 在 0.32.15 仍可复现 MLX 内存增长问题。

## 新模型与硬件支持

**无新增官方模型或硬件后端。** 相关动态集中在 HuggingFace 导入和云端模型方面：

- **云端新模型请求**：多个 Issue 要求 Ollama Cloud 增加 Qwen3.8-27B（#17926）、Muse-Glimmer-30B（#17796）等新模型，并对 Cloud 上模型更新滞后表达不满（https://github.com/ollama/ollama/issues/17796 、https://github.com/ollama/ollama/issues/17926）。
- **HF 导入渲染问题**：`PARSER qwen3` 无法正确处理 HF 导入的 RuadaptQwen3-8B GGUF 的 thinking 分隔（#17937）；Muse-Glimmer-30B GGUF 因推导出错误的 `stop` 参数导致输出被截断为约 3 个 token（#17939）。
- **NVIDIA 驱动文档**：PR #17940 补充了按 compute capability 对应驱动版本和旧 GPU 支持说明（https://github.com/ollama/ollama/pull/17940）。

## 性能与优化

- **缓存 token 统计（PR #17943）**：新增 `prompt_eval_cached_count` 字段，并在 OpenAI/Anthropic 兼容 API 暴露缓存 token 数；`prompt_eval_count` 保持为逻辑输入总数，CLI/benchmark 的 prefill 速率计算将剔除缓存命中。这为 KV cache 效率的可观测性迈出一步（https://github.com/ollama/ollama/pull/17943）。
- **MLX 结构化输出（PR #17929/#17697）**：通过集成 xgrammar 在采样时按 grammar 约束 logits，为 MLX 后端补齐 JSON/JSON Schema 输出能力。此前该能力被静默忽略（见 #17933）（https://github.com/ollama/ollama/pull/17929 、https://github.com/ollama/ollama/pull/17697）。
- **Claude Code KV cache 优化（PR #17918，已合并）**：禁用 Claude Code 的 token countdown system message（每次工具调用后注入"tokens left"信息），避免破坏 KV cache 连续性（https://github.com/ollama/ollama/pull/17918）。

## 稳定性与回归

**重点修复进行中：**

- **模型自报身份错误（#17904）**：`ornith-1.5:35b` 模型声称自己是"Claude, an AI assistant made by Anthropic"。虽为模型侧问题，但反映 HF 导入模型存在身份提示污染风险，值得警惕（https://github.com/ollama/ollama/issues/17904）。
- **上下文窗口行为不一致（#17889）**：相同服务器、均未设置 `num_ctx`，五个模型对超长 prompt 表现分裂——部分返回 400（指出 4096），部分正常返回（prompt_eval_count 2050）。需排查默认上下文窗口推导逻辑（https://github.com/ollama/ollama/issues/17889）。​
- **v0.32.14 CPU 异常占用（#17833）**：模型完全装入 VRAM 后，CPU 占用飙升至 50-80%；回退到 0.32.13 后恢复正常，疑似 0.32.14 引入回归，获得 3👍（https://github.com/ollama/ollama/issues/17833）。
- **MLX 内存增长（#17924）**：0.32.15 中，固定上下文下每次请求 MLX runner 常驻内存增长约 0.147 GiB，最终稳定在约 28.5 GiB。增长与上下文大小无关，疑为逐请求泄漏，0.32.14 亦可复现（https://github.com/ollama/ollama/issues/17924）。
- **云端 deepseek-v4-flash 思考循环（#17892）**：复杂 agent 任务中同一思考块反复输出 221 次后失败，零可用输出（https://github.com/ollama/ollama/issues/17892）。

**已修复/已关闭：**

- **`tool_choice` 被忽略（#17921）**：修复已提交 PR #17935，"none" 会去除工具定义、"required" 强制调用等（https://github.com/ollama/ollama/pull/17935）。
- **本地 API 返回 401 tokenize 错误（#17822）**：已关闭（https://github.com/ollama/ollama/issues/17822）。
- **MLX 结构化输出被静默忽略（#17933）**：已关闭，修复见 #17929（https://github.com/ollama/ollama/issues/17933）。
- **Gemma 4 不读取图片（#17931）**：已关闭（https://github.com/ollama/ollama/issues/17931）。

## 对应用开发者的意义

- **工具调用行为修复**：`tool_choice` 在 OpenAI/Anthropic 兼容层此前被静默忽略，可能导致 agent 出现"已指定 none 却仍调用工具"或"强制调用却返回纯文本"的问题。升级后需回归测试工具调用路径（https://github.com/ollama/ollama/pull/17935）。
- **MLX 后端结构化输出**：修复后 JSON 输出会真正被约束，在此之前务必验证 `format` 是否真的生效。
- **缓存 token 统计上线**：`prompt_eval_cached_count` 对 agent 应用的 KV cache 利用率监控价值很高（https://github.com/ollama/ollama/pull/17943）。
- **镜像拉取性能问题**：Docker Hub 拉取限速严重（5.1 MiB/s），建议使用代理镜像或等待官方迁移到 quay.io（#17932）。
- **模型身份污染风险**：第三方 GGUF 可能会自报为 Claude/GPT 等，agent 在对接外部模型时建议校验响应中的 model 字段，而非信任模型自称（https://github.com/ollama/ollama/issues/17904）。

---

*数据截至 2026-08-23，基于 GitHub ollama/ollama 仓库公开 issue/PR 整理。*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 动态日报 2026-08-23

## 1. 今日速览

今日无新版本发布，核心动态集中在 **Responses API bridge 会话保持与 ID 生成修复**（[#37956](https://github.com/BerriAI/litellm/pull/37956)、[#37946](https://github.com/BerriAI/litellm/pull/37946)）和 **Databricks 缓存计费/Claude 定价修复**（[#37975](https://github.com/BerriAI/litellm/pull/37975)）。安全方面，Admin UI cookie JWT 携带可重放 API key 材料的问题（[#35664](https://github.com/BerriAI/litellm/issues/35664)）已标记关闭。社区侧主要报告内存泄漏（[#27954](https://github.com/BerriAI/litellm/issues/27954)）、FastAPI 启动失败（[#36922](https://github.com/BerriAI/litellm/issues/36922)）等稳定性问题，大多有对应修复在途。

## 2. 版本发布与破坏性变更

- **无新 Release**。
- **行为变更**：[#37964](https://github.com/BerriAI/litellm/pull/37964) 在未配置 guardrail 时，`/v1/files` 响应不再包含 `litellm_batch_guardrail: null` 字段，恢复与 OpenAI 文件响应形状的字节级一致。若客户端此前依赖该字段，需同步更新解析逻辑。
- **行为变更**：[#36890](https://github.com/BerriAI/litellm/pull/36890) 读取已存储的 response 不再被计费、也不再产生 spend 日志（此前会重复扣费并写入第二条日志行）。计费对账逻辑需适配这一变化。

## 3. 新模型与硬件支持

- 今日无新模型架构、后端（CUDA/ROCm/Metal/CPU）或量化格式宣布。
- **定价补全**：[#37975](https://github.com/BerriAI/litellm/pull/37975) 为 Databricks 上的 Claude Opus 4.7/4.8/5、Sonnet 5、Fable 5 补充缺失定价，并让缓存读取 token 按缓存费率计费（此前按全价输入计费）。
- **新增 provider 价格**：[#28006](https://github.com/BerriAI/litellm/issues/28006)（已关闭）为 Telnyx 推理 API 添加模型价格（Kimi K2.6、GLM-5.1-FP8 等）。

## 4. 性能与优化

- 今日无显著的吞吐、延迟或显存优化落地。
- **路由稳定性优化**：[#34444](https://github.com/BerriAI/litellm/pull/34444) 将 `least_busy` 路由的 per-deployment 请求计数器在竞态下可能出现的负值钳制回零，避免路由偏斜。
- **日志噪音治理**：[#37728](https://github.com/BerriAI/litellm/pull/37728) 将 DeepSeek 思考模式下每个历史 assistant 消息重复产生的 `reasoning_content` 占位警告聚合为每请求一条。
- **数据库迁移安全**：[#37899](https://github.com/BerriAI/litellm/pull/37899) 新增 CI 门禁，禁止 Prisma 迁移中出现 `UPDATE`/`DELETE`/`MERGE` 等行重写 DML，防止代理启动时执行迁移导致停机。

## 5. 稳定性与回归

按严重程度排列：

- **【严重/已修复】** [#35664](https://github.com/BerriAI/litellm/issues/35664) Admin UI 认证 cookie（JWT）包含可重放的 API key 材料（`key` claim），可被复制用于跨浏览器/会话认证。使用 Admin UI 的环境应尽快升级到含修复的版本。
- **【高/进行中】** [#36922](https://github.com/BerriAI/litellm/issues/36922) `uv tool update litellm[proxy]` 至 v1.96.2 后，因 FastAPI `get_flat_dependant` 签名不兼容，代理启动失败。暂无合并的 fix PR。
- **【高/进行中】** [#34236](https://github.com/BerriAI/litellm/issues/34236) `litellm-non_root` 镜像从 1.84.0 升级到 1.92.1 时，Prisma migrations 因 `@prisma/engines` 不可写而失败，阻塞非 root 升级路径。
- **【高/进行中】** [#27954](https://github.com/BerriAI/litellm/issues/27954) LiteLLM 长时运行后 RAM 占用达到 K8s Pod 上限并崩溃，疑似内存泄漏，目前无 fix PR。
- **【中/进行中】** [#37140](https://github.com/BerriAI/litellm/issues/37140) 非流式请求在客户端断开后不会取消上游工作，造成上游资源浪费（与已修复的流式路径 #30244/#30245 对应）。
- **【中/进行中】** [#34614](https://github.com/BerriAI/litellm/issues/34614) v1.93.0 中 Redis 缓存/预算计数器报 `ssl_check_hostname` 参数错误，功能不可用。
- **【中/已修复】** [#36091](https://github.com/BerriAI/litellm/issues/36091) Anthropic `/v1/messages` bridge 服务 OpenAI Responses API 上游模型时，`cache_read_input_tokens` 始终为 0，缓存命中率无法核算。
- **【中/进行中】** [#37877](https://github.com/BerriAI/litellm/issues/37877) 开启 `provider_budget_config` 后，所有 `/v1/embeddings` 和 `/v1/rerank` 在预算回调中抛 `custom_llm_provider is required`，嵌入/重排花费永远不会计入 provider budget。
- **【中/进行中】** [#37117](https://github.com/BerriAI/litellm/issues/37117) 使用 cost-based-routing 且同一 model_name 对应多 deployment 时，`compression_savings_spend` 和 `prompt_caching_savings_spend` 恒为 $0。
- **【中/进行中】** [#27944](https://github.com/BerriAI/litellm/issues/27944) Anthropic batch 请求完成后 `CheckBatchCost` 始终记录 0 token / $0 成本（`msgbatch_*` ID 被路由到错误端点）。
- **【低/进行中】** [#23451](https://github.com/BerriAI/litellm/issues/23451) 设置密码后 UI 仍无法登录（`admin` / `sk-1234` 均无效）。
- **【低/进行中】** [#10177](https://github.com/BerriAI/litellm/issues/10177) Dark Mode 功能请求，64 条评论、73 👍，社区呼声较高。

## 6. 对应用开发者的意义

- **Responses API bridge 用户需关注**：当前 bridged `/v1/responses` 输出项携带 `chatcmpl-*` ID，流式事件却用 `msg_*`，且 `previous_response_id` 链式调用在流式场景会失败（[#37956](https://github.com/BerriAI/litellm/pull/37956)、[#37946](https://github.com/BerriAI/litellm/pull/37946) 正在修复）。依赖该链路做多轮 agent 会话的应用，建议等待合入后再升级。
- **计费数据会变化**：#36890 合入后读取已存 response 不再计费；#37975 会修正 Databricks 缓存读取成本。若你的应用基于 spend 数据做成本分析或用户配额，需同步调整对账逻辑。
- **非 root 容器升级注意**：`litellm-non_root` 镜像升级到 1.92.x 可能卡在 Prisma migration（[#34236](https://github.com/BerriAI/litellm/issues/34236)），建议暂缓升级或改用 root 镜像直至修复。
- **安全升级建议**：如使用 Admin UI，尽快升级到包含 [#35664](https://github.com/BerriAI/litellm/issues/35664) 修复的版本，避免 API key 材料经 cookie 泄露。
- **Guardrails 新集成**：[#37931](https://github.com/BerriAI/litellm/pull/37931) 新增 PointGuard AI 接入，允许在 LiteLLM 内对 prompt / response 应用 PointGuard 策略。
- **MCP 运维改进**：[#36831](https://github.com/BerriAI/litellm/pull/36831) 新增 MCP server OAuth token 的清理与重新授权能力，适合多 worker 场景下 token 轮换。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 动态日报 2026-08-23

## 1. 今日速览

过去 24 小时无新 Release，动态集中在 Unsloth Studio 的稳定性修复与性能工程：16 条活跃 Issue 中多数为桌面端/API 侧 Bug（RAM 泄漏、导出 524、设置持久化失败），同时长线程增量渲染 PR（#9058）与 studiobench 基准套件持续推进。对开发者而言，API 无法监听 LAN/WSL（#9522）与 MCP 能力增强（#7665/#9301）是最值得关注的动向。

## 2. 版本发布与破坏性变更

- 无新版本发布。
- ⚠️ 上游 main 分支近期 commit (e0ae131) 曾因缺失导出导致 Vite 构建失败（[#9521](https://github.com/unslothai/unsloth/issues/9521)，已关闭）。依赖源码构建的团队建议确认构建通过后再升级。

## 3. 新模型与硬件支持

- **Ling 3.0 支持请求**（[#8532](https://github.com/unslothai/unsloth/issues/8532)）：社区请求在 Unsloth Studio 中支持 Ling 3.0 的下载/加载/服务，仍为开放状态。
- **核显/小显存机器加载失败**（[#9482](https://github.com/unslothai/unsloth/issues/9482)）：约 10GB 模型在 16GB RAM 核显机器上无法加载（仅约 8GB 可用），可设 `UNSLOTH_ALLOW_HOST_OFFLOAD=1` 强制走内存映射（性能有明显代价）。
- **XPU qLora 训练失败**（[#9524](https://github.com/unslothai/unsloth/issues/9524)）：XPU 后端报 `Expected all tensors to be on the same device, but found at least two devices, xpu:0 and cpu!`，tensor offloading 逻辑存在缺陷，暂无修复 PR。

## 4. 性能与优化

- **长聊天线程增量渲染**（[#9058](https://github.com/unslothai/unsloth/pull/9058)）：重新打开长线程时先绘制最新消息，再后台增量重建。实测 300K 字符线程在 Chromium 上全量重建需 **3175ms**（其中脚本 2817ms），从 25K 到 300K 耗时增长 **7.1 倍**，该 PR 直接针对此瓶颈。
- **加载前显存预估**（[#9525](https://github.com/unslothai/unsloth/pull/9525)）：Load Model 面板新增 Estimated Memory Usage 行，可展开查看权重与 context 的显存/内存细目，便于在加载前决策 Context Length。
- **studiobench 基准套件**（[#9296](https://github.com/unslothai/unsloth/pull/9296)、[#9439](https://github.com/unslothai/unsloth/pull/9439)、[#9356](https://github.com/unslothai/unsloth/pull/9356)）：基于真实后端、真实 SSE 字节流与真实解析路径的 Studio UI 性能基准/A-B 工具，已补齐虚拟化长线程 readiness gate、500K/1M token 量级 composer 点击测量，并沉淀 `content-visibility` 陷阱文档（[#9429](https://github.com/unslothai/unsloth/pull/9429)）。
- **键盘快捷键扩充到 49 个动作**（[#9496](https://github.com/unslothai/unsloth/pull/9496)）：提升重度用户操作效率。
- **设置项文案统一**（[#9526](https://github.com/unslothai/unsloth/pull/9526)）：将设置中裸写 "Studio" 的字符串改为 "Unsloth"/"Unsloth Studio"，避免与 LM Studio 混淆。

## 5. 稳定性与回归

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 崩溃 | **Linux AppImage 打开 Model Hub 页即冻结**（[#9453](https://github.com/unslothai/unsloth/issues/9453)），仅能强杀，上一版本正常 | 已关闭 |
| 🔴 构建 | **最新 commit 缺失导出导致 Vite 构建失败**（[#9521](https://github.com/unslothai/unsloth/issues/9521)） | 已关闭 |
| 🟠 功能 | **GGUF 导出到 HF 失败**（[#9516](https://github.com/unslothai/unsloth/issues/9516)）：Request failed (524)，LoRA 导出正常 | 开放，无 PR |
| 🟠 功能 | **运行 agent 任务时切换页面导致任务取消**（[#9510](https://github.com/unslothai/unsloth/issues/9510)）；另有切换模型时重复 reload 同一模型的问题 | 开放；[#9129](https://github.com/unslothai/unsloth/pull/9129) 从根因修复"跨视图切换导致生成中止" |
| 🟠 功能 | **聊天预设保存失败**（[#9500](https://github.com/unslothai/unsloth/issues/9500)）：PUT /api/chat/settings 返回 400 | 开放，无 PR |
| 🟠 功能 | **AppImage 桌面版聊天无法写入 IndexedDB**（[#9518](https://github.com/unslothai/unsloth/issues/9518)），后端 API 直连正常，问题在 Tauri/WebKitGTK 前端层 | 开放，无 PR |
| 🟡 内存 | **GGUF 全量 offload 后 system RAM 不释放**（[#9033](https://github.com/unslothai/unsloth/issues/9033)）；下载模型时 RAM 飙升（[#9032](https://github.com/unslothai/unsloth/issues/9032)） | 前者开放，后者已关闭 |
| 🟡 UI | **API 与 Settings 页重复的 Remote & LAN 配置**（[#9519](https://github.com/unslothai/unsloth/issues/9519)） | 开放，无 PR |

另有 2 个修复型 PR 值得关注：
- **markdown 渲染容错**（[#9236](https://github.com/unslothai/unsloth/pull/9236)）：修复 Syntax Highlight/Mermaid 懒加载失败时整个应用崩溃的问题。
- **版本校验去编码执行**（[#8835](https://github.com/unslothai/unsloth/pull/8835)）：移除 base64-decode-then-exec 模式（此前因杀软误报被回滚），重新引入更新后版本验证。

非阻塞需求：#6329（Web Search 隐私说明文档化，已关闭）、#9523（语音输入功能请求）。

## 6. 对应用开发者的意义

- **API 无法监听非回环地址**（[#9522](https://github.com/unslothai/unsloth/issues/9522)）：当前 LLM API 固定绑定 127.0.0.1 且设置中不可修改，WSL 或局域网内其他机器无法访问。若你的 Agent/服务运行在 WSL 或独立容器中，需等待该能力落地或自行做端口转发。
- **token 统计不覆盖 API 调用**（[#9071](https://github.com/unslothai/unsloth/issues/9071)）：目前用量统计仅计算 chat 页面，需要精确计量的 Gateway/Agent 侧需自行解析响应中的 usage 字段。
- **MCP 能力增强**：
  - [OAuth 预注册客户端](https://github.com/unslothai/unsloth/pull/7665)（#7665）：MCP server 可使用预注册 client ID/secret，不再强制 Dynamic Client Registration，便于接入企业级 OAuth 服务。
  - [MCP Apps 交互式组件](https://github.com/unslothai/unsloth/pull/9301)（#9301）：MCP 工具返回的 `ui://` HTML 模板将以沙箱 iframe 渲染在聊天线程中，不再退化为纯文本，MCP 工具的可视化交互能力将显著增强。
- **隧道/反向代理环境注意**（[#9533](https://github.com/unslothai/unsloth/pull/9533)）：Cloudflare Quick Tunnels 会缓冲 GET 流式响应，导致训练进度、导出日志等 SSE 流卡住；该 PR 将事件流改为 POST 路由，使用隧道部署的团队可关注合并状态。
- **显存预估面板**（[#9525](https://github.com/unslothai/unsloth/pull/9525)）：对在 Unsloth 之上做多模型服务编排的开发者，加载前即可在 UI 获取显存占用明细，便于容量规划。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*