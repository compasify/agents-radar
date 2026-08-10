# AI 基础设施日报 2026-08-10

> 生成时间: 2026-08-10 00:52 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施生态横向对比分析（2026-08-10）

## 1. 生态全景

六大项目同日动态显示，AI 基础设施已全面进入"超大开放权重模型（DeepSeek-V4、Kimi-K3、GLM-5、Qwen3.6、MiniMax-H3）驱动"的深水区：1M token 长上下文、MoE 大规模并行、NVFP4/FP8 量化与投机解码成为标配，但也集中暴露正确性短板——Kimi-K3 长上下文 NaN 污染整实例、DeepSeek-V4 1M prefill OOM、消费级 Blackwell 静默输出错误是当日最危险的三个信号。优化火力正从纯 kernel 提速转向系统性工程：权重加载冷启动、CUDA graph 内存计量、DP/TP 拓扑选择、多后端适配。工具调用可靠性则成为跨推理层、网关层、本地运行时共同的高频故障点。整体判断：**能力扩张快于质量收敛，生产部署需以"默认保守、逐项验证"为原则。**

## 2. 各项目活跃度对比

| 项目 | Issues* | PRs* | Release | 当日核心状态 |
|---|---|---|---|---|
| vLLM | 52（官方 24h 更新） | 218（官方 24h 更新） | 无新 Release（最新 v0.26.0，2026-07-27，**不含 NVFP4 修复**） | 高活跃；Kimi-K3 与投机解码修复密集，但无修复 PR 的高严重度 issue 存量较大 |
| SGLang | ~20（摘要提及） | ~5（摘要提及） | 无新 Release（当前 v0.5.17） | 中等；DeepSeek-V4 大规模部署稳定性议题主导 |
| llama.cpp | ~15（摘要提及） | ~8（摘要提及） | **b10333 / b10332** 双修复版 | 中等；后端重构推进，ROCm/AMD 性能回归集中 |
| Ollama | ~12（摘要提及） | ~7（摘要提及） | 无正式版；3 项行为变更合入 | 聚焦工具调用缺陷与 MLX/SYCL 后端补全 |
| LiteLLM | ~10（摘要提及） | ~5（摘要提及） | 无正式版；**1.97.0-RC1 被报回归** | 网关稳定性受质疑；流式 usage 少计根因定位到流聚合层 |
| Unsloth | ~12（摘要提及） | ~18（摘要提及） | v0.1.527-beta | 训练/微调侧最活跃；MiniMax-H3 音视频 LoRA 推进中 |

*注：vLLM 为官方公布的过去 24h 全量更新数；其余项目按当日摘要中明确提及的编号统计，不代表全量，仅供参考。

**Release 部署影响速览：**
- vLLM v0.26.0 不含 2026-08-05 合入的 NVFP4 正确性修复（#48929），MiniMax-M3-NVFP4 等模型的性能数据须以修复后的 main 为准。
- SGLang v0.5.17 与 1M prefill OOM（#34155）、sgl-kernel 路径迁移（#34193）直接相关。
- llama.cpp b10332 移除 `GGML_HIP_ROCWMMA_FATTN` CI 路径，RDNA 用户 `-fa` 行为已变化；b10333 修复 SpaceMiT 后端 Q5_0 dispatch。
- LiteLLM 1.97.0-RC1 出现 UI 使用统计完全停止计数（#36337），生产建议停留 1.95.x。

## 3. 模型支持竞速

| 项目 | 新增/重点模型 | 当日亮点 |
|---|---|---|
| vLLM | Kimi-K3（CUDA 运行 + ROCm 路线图）、MiniMax-M3-NVFP4、DeepSeek-V4-Flash-0731、MiniCPM-V 2.5/2.6/4.0 | ROCm AITER fused-moe 集成；EAGLE3 在 8x B200 上加速 2.1–2.3x；多模态 encoder CUDA Graph |
| SGLang | DeepSeek-V4-Flash-0731（1M ctx）、DSpark、Z-Image、MiniMax-H3、Llama4 NVFP4 | DP8 vs TP8 实战数据、MegaMoE 后端、NPU MTP 非贪心采样 |
| llama.cpp | DeepSeek-V4（社区运行）、GLM-5.2、Qwen3.6、Nemotron MTP（在途） | BitNet relu2 修复；Hexagon NPU 后端；GGUF 生态最广 |
| Ollama | gpt-oss 工具调用、MLX 视觉模型、Kimi K3 Cloud（请求关闭） | MLX 图像输入链路合入（保留 prefix cache + spec decode）；SYCL opt-in 发现 |
| LiteLLM | claude-sonnet-5 / claude-haiku-4-5（native structured output）、Bedrock Nova 2、gpt-5.6 | 模型能力标记更新；AI21 清单待清理 |
| Unsloth | MiniMax-H3 视频+音频联合 LoRA（**首个支持音频的视频训练管线**）、Z-Image-Turbo、Qwen-Image-Edit-2511-GGUF | Studio 多模态训练进入第二个视频模型家族；hosted INT8 conditioner 降低 VRAM 底线 |

**谁跑在前面？**
- **大规模服务端**：vLLM 与 SGLang 双头领先，但风格不同——vLLM 对 Kimi-K3 的 ROCm「Day 0」规划最完整，生态维护密度最高；SGLang 最先积累 DeepSeek-V4 1M context 的 DP/TP 一手部署数据（TTFT 快 3.4x、KV 效率 7.7x）。两者的共同代价是：新模型集成过快，背负大量稳定性 issue。
- **边缘/本地**：llama.cpp 保持最广硬件覆盖（新增 Q2_0 HIP 优化、SYCL GLU 融合、Hexagon NPU），但对 DeepSeek-V4 / GLM-5.2 等新架构的适配正确性（乱码输出、6x prefill 回退）比 vLLM/SGLang 慢约一个身位。
- **开发者体验与网关层**：Ollama、LiteLLM 不参与模型架构竞赛，分别补后端能力与上游 API 对齐。
- **训练侧**：Unsloth 独有 MiniMax-H3 音视频联合 LoRA，是其差异化壁垒。

## 4. 性能优化前沿

当日火力集中在五个方向：

**① KV cache 与长上下文拓扑**
- vLLM DeepSeek-V4-Flash-0731 实测：DP8 相对 TP8 在 MLA/单 KV 头下实现 **KV cache 效率 7.7x**，c=8 并发下 1M ctx TTFT **快 3.4x**（#51454）——DP 拓扑对长上下文的重要性被再次验证。
- vLLM CUDA graph 内存计量重写（#51590），修复 MTP 下 **-35 GiB 负估算**导致的 KV cache 过度分配与 OOM。
- SGLang 的 `gpu_cache_usage_perc` 指标已开放 16 个月未实现（#5979），KV cache 可观测性明显落后 vLLM。

**② 投机解码（Spec Decode / MTP / EAGLE3）**
- vLLM 三线修复并进：DSD K-lookup 修复 batch 边界吞吐崩塌（#51466）、MRV2 尊重调度器 K=0（#51575）、FlashInfer cudagraph 恢复预计 **+15% decode 吞吐**（#50885）。
- vLLM RFC 提案将 context length 纳入投机深度 K 的选择维度（#48627）。
- SGLang NPU MTP 非贪心采样落地（#32495）；llama.cpp Nemotron MTP 在途，但 Qwen3.6 MTP 重复 token（#23577）与跨请求状态泄漏（#26425）均未修复——**投机解码的"正确性税"是全行业共同负担**。

**③ 量化与算子 kernel**
- 正确性优先级高于速度：vLLM NVFP4 推理修复（#48929）、llama.cpp BitNet relu2 修复、FA4 per-head FP8 descale（#51363）。
- 平台算子效率突破：XPU Triton W8A8 scaled_mm 改用 tensor-descriptor loads，**kernel 自时间降 89–99%**（#47205）；llama.cpp Q2_0 HIP 用原生 AMD permutation，**token/s 提升 33–35%**（#26753）。
- vLLM 量化图融合迁移启动（#51415），未来量化模型计算图路径将改变。

**④ 分布式与冷启动**
- SGLang Weight Cache Daemon：Qwen3-235B FP8 权重加载从 **306–327s 降至 <1s**（CUDA IPC 持有后量化权重，#27139）。
- llama.cpp RPC 加载并行化：**加载时间降 20–60%**（#26291）。
- vLLM 消费级 Blackwell P2P 检测加速：无 NVLink 设备跳过子进程探测，消除秒级启动延迟（#50771）。

**⑤ 多后端扩展**
- Ollama 合入 MLX 图像输入（保留 prefix caching + spec decode）；SYCL opt-in 发现。
- SGLang NPU MTP、Ascend 文档推进；vLLM XPU 路径增强；llama.cpp Hexagon NPU 替代后端（#26373）。

## 5. 分层定位差异

| 项目 | 所属层 | 核心职责 | 当日最具代表性的问题 |
|---|---|---|---|
| vLLM | 生产级推理/服务引擎 | 高吞吐 serving、多模型/多硬件、模型集成最快 | V1 引擎死锁（#37729）；长上下文污染整个实例（#51039） |
| SGLang | 推理引擎 + 轻量网关 | 与 vLLM 同层，MoE 大模型与多模态部署更有实战深度；内置 `sgl-model-gateway` | 1M ctx prefill OOM（#34155）；abort 语义缺陷（#34149） |
| llama.cpp | 本地/边缘运行时 | GGUF 生态、CPU/GPU/异构全覆盖，是本地推理的事实标准 | 新架构正确性回归（#26445）；Vulkan FA 使用已释放 KV（#26744） |
| Ollama | 本地开发者运行时 | 模型分发（OCI）+ 简化体验，底层依赖 llama.cpp | 工具解析 500（#17638）；MLX 生成不终止（#17632） |
| LiteLLM | LLM 网关/代理层 | 多 provider 路由、模型映射、预算/计费、API 兼容 | 流式 usage 系统性少计（#36114）；RC1 UI 统计中断（#36337） |
| Unsloth | 训练/微调框架 | LoRA/GGUF/量化训练、Studio 产品化 | 显存规划缺陷（#8235/#8225）；GGUF 下载体积误导（#8234） |

**关键分层信号：**
- **vLLM vs SGLang**：模型覆盖高度重叠，SGLang 在 DP/EP 大 MoE 部署上更有实战数据，vLLM 则拥有显著更高的 PR/issue 维护密度。二者短期不会互相取代，但会持续互相汲取优化路线。
- **llama.cpp vs Ollama**：引擎与产品的关系。Ollama 当日一半问题（工具解析、UI 加载、MLX 链路）发生在其自身上层，而非 ggml 底层。
- **LiteLLM 是唯一纯网关**：不碰 kernel 与模型，风险集中在 API 兼容与计量准确性——恰是 Agent/计费系统的命门。
- **Unsloth 是唯一训练侧玩家**：Studio 产品化速度加快，但显存规划与统一内存支持仍未成熟，属于"跑得快、底盘颠"。

## 6. 值得关注的趋势信号

1. **超大开放权重模型成为生态主轴**：DeepSeek-V4、Kimi-K3、GLM-5、Qwen3.6、MiniMax-H3 同时出现在五个项目动态中。基础设施的技术取舍（DP vs TP、MTP vs EAGLE3、NVFP4 vs FP8）正由这些模型决定，而非通用基准。

2. **长上下文进入"能用但会炸"阶段**：Kimi-K3 一次约 240K prefill 即可让整个 vLLM 实例的所有后续请求退化为重复 token（#51039）；SGLang 在 1.04M token 且无 dp-attention 时稳定 OOM（#34155）。结论：**DP attention 是长上下文正确配置**，且生产必须配套自动重启与故障转移，谨慎开放 200K+ 路径。

3. **投机解码从加分项变为必选项+风险项**：收益真实（EAGLE3 2.1–2.3x、FlashInfer +15%、MTP 提升 GPQA），但 DSD batch 边界崩溃、MTP 跨请求状态泄漏、"K=0 不被尊重"说明其正确性尚未收敛。SLA 敏感场景的合理策略：**固定 K、关闭动态调度、逐模型回归**。

4. **消费级 Blackwell 的"静默错误"是边缘部署的暗雷**：SM120/GB10 上 Marlin FP8 输出静默损坏（vLLM #49546）、NVFP4 MoE 返回 `content: null`（vLLM #51525）、Llama4 NVFP4 在 SM120/SM121 崩溃（SGLang #34192）。在这些设备上部署量化模型，**必须把输入输出一致性校验加入上线流水线**。

5. **Agent 工具调用是全链路共同薄弱点**：vLLM JSON 错误路由到 reasoning（#50948）、Inkling 工具调用泄漏（#50512）；Ollama gpt-oss 500（#17638）、HF 直拉模型无工具解析器（#17636）、空 content 破坏工具模式（#14181）；LiteLLM gpt-5.6 工具调用被 `reasoning_effort` 挡住（#33221）。跨层结论：**应用层不能信任推理层的工具调用输出，需叠加协议校验与重试**。

6. **计费/用量数据可信度下降**：LiteLLM 流式 usage 系统性少计且根因在流聚合层（#36114）；vLLM Kimi-K3 `prompt_tokens` 多算 3 个 stub token（#51465）；Ollama Cloud 直连计费与本地 Pro 不一致（#17639）。涉及计费的团队应以非流式请求或上游账单为准。

7. **冷启动/权重加载成为新的竞争点**：SGLang Weight Cache Daemon 将 300+ 秒压缩至 <1 秒、llama.cpp 并行化 RPC 加载省 20–60%、vLLM 加速 P2P 检测——当模型普遍 100GB+，权重加载时间是弹性伸缩的隐形瓶颈。

8. **非 CUDA 后端在认真推进，但仍处"能跑"阶段**：MLX 图像输入、SYCL opt-in、NPU MTP、Hexagon NPU、XPU TD loads 均指向 CUDA 之外的多元化，但配套成熟度不均（Ollama MLX 生成不终止、Unsloth ROCm 显存规划缺陷、SGLang NPU 生态刚起步）。**CUDA 仍是唯一"默认正确"的平台。**

**给 Agent/应用开发者的三个立即行动项：**
- 在推理层之前加一层输出格式/工具调用校验，对 500、空完成、乱码输出做重试与降级。
- 长上下文或大 MoE 模型服务必须配置 dp-attention 与实例级故障隔离，勿依赖单实例自愈。
- 升级前核对修复基线：vLLM 等待含 NVFP4 修复的新 release；LiteLLM 避开 1.97.0-RC1；SGLang 避免 MegaMoE + 超长上下文组合。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 动态日报 2026-08-10

数据来源：github.com/vllm-project/vllm（过去 24 小时更新：52 个 Issue / 218 个 PR，以下为精选）

## 1. 今日速览

- **Kimi-K3 成为焦点**：ROCm 支持与性能优化路线图正式建立（[#50682](https://github.com/vllm-project/vllm/issues/50682)），但长上下文推理暴露严重的全实例退化问题（[#51039](https://github.com/vllm-project/vllm/issues/51039)），模型集成仍处快速迭代期。
- **投机解码（Spec Decode）进入密集修复期**：动态投机解码（DSD）的 K 选取、MRV2 兼容性、FlashInfer cudagraph 降级等 4+ 个 PR 在同时推进（[#51466](https://github.com/vllm-project/vllm/pull/51466)、[#51575](https://github.com/vllm-project/vllm/pull/51575)、[#50885](https://github.com/vllm-project/vllm/pull/50885)）。
- **消费级 Blackwell（SM120）支持持续完善**：kernel 选择、P2P 检查、启动耗时优化均有新提交（[#50862](https://github.com/vllm-project/vllm/pull/50862)、[#50771](https://github.com/vllm-project/vllm/pull/50771)）；Rust 前端功能对齐路线图也有更新（[#44280](https://github.com/vllm-project/vllm/issues/44280)）。

## 2. 版本发布与破坏性变更

- **无新 Release**。当前最新稳定版仍为 v0.26.0（2026-07-27 发布），**不包含** 2026-08-05 合入的 NVFP4 推理正确性修复 [#48929](https://github.com/vllm-project/vllm/pull/48929)。
- 以下进行中的变更可能影响现有部署，建议关注：
  - **ROCm 构建源切换**：ROCm CI 计划切换到 The Rock 7.14 提供的 wheel，保留 Python 3.12 / Ubuntu 22.04，等待 torch 2.12（[#49925](https://github.com/vllm-project/vllm/pull/49925)）。
  - **CUDA graph 内存度量重写**：修复 graph 内存欠估算问题，KV cache 预算算法将变化，升级后建议重新校准 `--gpu-memory-utilization`（[#51590](https://github.com/vllm-project/vllm/pull/51590)）。
  - **量化图融合迁移**：`ActivationQuantFusionPass` 手动迁移启动（RFC #43224），未来量化模型的计算图路径可能改变（[#51415](https://github.com/vllm-project/vllm/pull/51415)）。

## 3. 新模型与硬件支持

- **Kimi-K3（moonshotai）**
  - ROCm「Day 0 功能与性能差距」跟踪 issue 已建立：AITER fused-moe（a16w4/a8w4）已集成，更多优化待办中（[#50682](https://github.com/vllm-project/vllm/issues/50682)）。
  - CUDA 上长上下文（约 240K token）prefill 会导致 **全部后续请求退化为重复 token**，疑似 packed KDA prefill 产生 NaN logits（[#51039](https://github.com/vllm-project/vllm/issues/51039)）。
- **MiniMax-M3-NVFP4**：8x B200 实测数据首报，EAGLE3 解码加速 2.1–2.3x；注意此前的「validated benchmark」成文于 NVFP4 正确性修复之前，旧数据不可直接采信（[#51494](https://github.com/vllm-project/vllm/issues/51494)）。
- **DeepSeek-V4-Flash-0731**（304B 总参 / 13B 激活，MLA，1M ctx）：单节点 8x B200 上 DP8 vs TP8 对比报告出炉，见性能部分（[#51454](https://github.com/vllm-project/vllm/issues/51454)）。
- **硬件/后端**
  - **SM120（RTX 5090 / RTX PRO 6000）**：修复 `is_device_capability_family(100)` 只匹配 major==10 的问题，消费级 Blackwell 现可进入 Blackwell kernel 选择路径（[#50862](https://github.com/vllm-project/vllm/pull/50862)）。
  - **XPU**：Triton W8A8 `scaled_mm` 路径增加 tensor-descriptor（TD）operand loads 并启用该路径（[#47205](https://github.com/vllm-project/vllm/pull/47205)）。
  - **MiniCPM-V 2.5/2.6/4.0**：encoder（ViT + resampler）CUDA Graph 支持已提交（[#42785](https://github.com/vllm-project/vllm/pull/42785)）。
  - **ROCm/AITER**：FlyDSL int4 MoE 集成正在迁移到 AITER `fused_moe` 公开 API，避免依赖 AITER 内部实现（[#51541](https://github.com/vllm-project/vllm/issues/51541)）。
  - **DeepGEMM MTP3 NV kernel** 支持请求仍开放（[#35878](https://github.com/vllm-project/vllm/issues/35878)）。
  - **Metal**：快速开始文档修正，推荐 MLX 优化模型而非 `opt-125m`（[#51591](https://github.com/vllm-project/vllm/pull/51591)）。

## 4. 性能与优化

- **DP8 vs TP8（MLA/单 KV 头场景）**：DeepSeek-V4-Flash-0731 在 8x B200 上，DP8 相对 TP8 实现 **KV cache 效率提升 7.7x**，c=8 并发下 **1M 上下文 TTFT 快 3.4 倍**（[#51454](https://github.com/vllm-project/vllm/issues/51454)）。
- **FlashInfer native 路径恢复 FULL decode cudagraph**：当前 spec-decode + FlashInfer 会静默降级为 PIECEWISE，修复后预计恢复约 **15% decode 吞吐**（[#50885](https://github.com/vllm-project/vllm/pull/50885)）。
- **XPU W8A8 kernel 自时间降低 89–99%**：Triton `scaled_mm` 改用 TD loads（[#47205](https://github.com/vllm-project/vllm/pull/47205)）。
- **DSD 动态投机解码调度修复**：
  - K-lookup 修复：不再把 mid-prefill/chunked-prefill 请求计入 batch 大小，避免 batch 边界处 K 值抖动引发的吞吐崩塌（[#51466](https://github.com/vllm-project/vllm/pull/51466)）。
  - MRV2 修复：`AutoRegressiveSpeculator` 现在会尊重调度器下发的 K=0（不投机）决策（[#51575](https://github.com/vllm-project/vllm/pull/51575)，对应 [#51510](https://github.com/vllm-project/vllm/issues/51510)）。
- **consumer Blackwell P2P 检查加速**：在 12.x 无 NVLink 设备上跳过子进程 P2P 探测，消除数秒级启动延迟；同时修复 `VLLM_SKIP_P2P_CHECK=1` 时只检查第一个 peer 的问题（[#50771](https://github.com/vllm-project/vllm/pull/50771)、[#50775](https://github.com/vllm-project/vllm/pull/50775)）。
- **RFC 提案**：将 context length 纳入投机深度 K 的选择维度（`num_speculative_tokens_per_batch_size` 扩展为 `(batch, ctx)` 表）（[#48627](https://github.com/vllm-project/vllm/issues/48627)）。
- **CPU KV offload 增强**：`return_routed_experts` 支持与 CPU KV offload 组合使用（[#45635](https://github.com/vllm-project/vllm/pull/45635)）。

## 5. 稳定性与回归

### 高严重度 —— 服务不可用 / 静默错误

- **V1 引擎死锁**：并发负载下 fp8 + prefix caching + Qwen3.5 组合触发 core deadlock，35 评论确认，**无修复 PR**（[#37729](https://github.com/vllm-project/vllm/issues/37729)）。
- **Kimi-K3 全实例退化**：长上下文 prefill 后所有请求返回同一退化 token（NaN logits），**无修复 PR**（[#51039](https://github.com/vllm-project/vllm/issues/51039)）。
- **消费级 Blackwell 静默输出错误**：
  - GB10（sm_121a）上 `VLLM_MARLIN_INPUT_DTYPE=fp8` 的 Marlin W4A8-FP8 路径输出静默损坏（kernel 反而快 2.5%），**无修复 PR**（[#49546](https://github.com/vllm-project/vllm/issues/49546)）。
  - SM_120（RTX 5090 Laptop）上 NVFP4 MoE + `--moe-backend cutlass` 耗尽 max_tokens 后返回 `content: null`，无异常抛出，**无修复 PR**（[#51525](https://github.com/vllm-project/vllm/issues/51525)）。
- **Qwen3.5-35B-A3B-FP8 + 投机解码**：输出乱码且吞吐崩溃，unstale 标记恢复活跃（[#36872](https://github.com/vllm-project/vllm/issues/36872)）。

### 中严重度 —— 性能回退 / 显存错误

- **DSD 动态投机解码性能崩塌**：batch 阈值处吞吐剧烈下降（V1/PIECEWISE）；另有 DSD arm 在默认配置下相对 no-spec 有显著 baseline tax（[#49548](https://github.com/vllm-project/vllm/issues/49548)、[#49986](https://github.com/vllm-project/vllm/issues/49986)）。修复 PR [#51466](https://github.com/vllm-project/vllm/pull/51466) / [#51575](https://github.com/vllm-project/vllm/pull/51575) 审核中。
- **负 CUDA graph 内存估算（-35 GiB）**：MTP 投机解码下错误计算 graph 内存，导致 KV cache 过度分配和 OOM。**PR [\#51590](https://github.com/vllm-project/vllm/pull/51590) 修复中**（[#44740](https://github.com/vllm-project/vllm/issues/44740)）。
- **hybrid-SWA prefix caching 归零**：Gemma-4-31B 多会话 round-robin 工作负载下跨请求缓存复用降至 0，约 25% pool 占用即触发（[#48435](https://github.com/vllm-project/vllm/issues/48435)）。

### 功能类 / 跨平台兼容性

- **Qwen parser 路由错误**：`enable_in_reasoning=true` 时 grammar-constrained JSON 被错误路由到 reasoning 输出（[#50948](https://github.com/vllm-project/vllm/issues/50948)）。
- **Inkling 工具调用泄漏**：多轮 streaming 中 turn-initial tool call 泄漏为 content 且 `tool_calls` 为空（[#50512](https://github.com/vllm-project/vllm/issues/50512)）。
- **非 CUDA 平台崩溃**：`MiniMAXGemmaRMSNorm` 无条件调用 FlashInfer CUDA kernel，MiniMax-M3 在 Intel GPU 等平台无法运行（[#51200](https://github.com/vllm-project/vllm/issues/51200)）。
- **ROCm vision embeddings 精度**：transformers `vision_embeddings` 在无 math SDP 时不准确，unstale 恢复活跃（[#30167](https://github.com/vllm-project/vllm/issues/30167)）。
- **Kimi-K3 token 计数偏差**：`usage.prompt_tokens` 多算 3 个 forced generation stub token，影响计费统计（[#51465](https://github.com/vllm-project/vllm/issues/51465)）。

### 已关闭 / 新增修复

- 已关闭：[#50064](https://github.com/vllm-project/vllm/issues/50064)（ROCm sparse MLA 启动失败）、[#36478](https://github.com/vllm-project/vllm/issues/36478)（LoRA Qwen3.5-2B）。
- 新修复 PR（待合入）：
  - GDN 无状态首块正确分类（[#51565](https://github.com/vllm-project/vllm/pull/51565)）
  - FA4 前向传递 per-head FP8 Q/K/V descale（[#51363](https://github.com/vllm-project/vllm/pull/51363)）
  - DP supervisor 生命周期测试稳定性（[#51557](https://github.com/vllm-project/vllm/pull/51557)）

## 6. 对应用开发者的意义

- **Agent 工具调用可靠性风险**：Qwen parser 将 JSON 错误路由至 reasoning（[#50948](https://github.com/vllm-project/vllm/issues/50948)）、Inkling 工具调用泄漏为 content（[#50512](https://github.com/vllm-project/vllm/issues/50512)）、DeepSeek-R1 函数调用用法悬置 2 个月未解决（[#19001](https://github.com/vllm-project/vllm/issues/19001)）。依赖结构化输出的应用应增加输出格式校验层，并避免在修复合入前使用 `enable_in_reasoning=true`。
- **长上下文服务存在单点失效模式**：Kimi-K3 一次大 context 请求即可毒化整个实例，所有后续请求退化（[#51039](https://github.com/vllm-project/vllm/issues/51039)）。生产部署需配置自动重启/故障转移，并谨慎开放 200K+ 上下文路径。
- **NVFP4 模型建议等待下一个 release**：最新稳定版 v0.26.0 不包含 NVFP4 正确性修复 #48929，MiniMax-M3-NVFP4 等模型的性能数据需以修复后的 main 为准（[#51494](https://github.com/vllm-project/vllm/issues/51494)）。
- **消费级 Blackwell（SM120/GB10）生产风险**：NVFP4 MoE 可能返回空完成（[#51525](https://github.com/vllm-project/vllm/issues/51525)），Marlin FP8 可能静默损坏输出（[#49546](https://github.com/vllm-project/vllm/issues/49546)）。在这些设备上部署量化模型前，务必做输入输出一致性回归测试。
- **动态投机解码的 SLA 影响**：DSD 在 batch 边界存在吞吐悬崖和 baseline tax（[#49548](https://github.com/vllm-project/vllm/issues/49548)、[#49986](https://github.com/vllm-project/vllm/issues/49986)）。SLA 敏感场景建议固定 K 值，或跟进 [#51466](https://github.com/vllm-project/vllm/pull/51466) 的合入状态再启用。
- **多模态 RL 工作负载新能力**：RFC [#51472](https://github.com/vllm-project/vllm/issues/51472) 提议在 `/generate` 接口直接接收原始多模态输入（token_ids + media refs），对 prime-rl 等框架将消除路径选择困难。
- **重要架构方向**：Rust 前端功能对齐路线图更新（[#44280](https://github.com/vllm-project/vllm/issues/44280)）——未来 `VLLM_USE_RUST_FRONTEND=1` 有望成为 Python API server 的低延迟替代品，但当前仍属实验性，不建议生产依赖。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 动态日报 — 2026-08-10

## 1. 今日速览

昨日社区焦点集中在 **DeepSeek-V4 大规模部署的稳定性问题**上：新增报告了 1M-token 长文本 prefill 在 TP8+MegaMoE 下触发 CUDA OOM（#34155）、DSpark 大 decode 的 CUDA-Graph 捕获偶发非法内存（#33356），以及 Z-Image 在单卡 BCG 路径上的确定性崩溃（#34183）。与此同时，**NPU 与 MLX 后端推进明显**：NPU 非贪心 MTP 采样 PR 已提交（#32495），Torch-MLX 桥接重构正在评审（#32984）；CI 主分支当前为 3 broken / 11 flaky（#17050）。

## 2. 版本发布与破坏性变更

**无新 Release。**

- **[破坏性变更] sgl-kernel 源码路径迁移**：`sgl-kernel/csrc/cpu/` 在 v0.5.16 存在，v0.5.17 中被移入 `python/sglang/kernels/aot/csrc/cpu/`（PR #32648，commit c32c4ef）。有用户询问外部 patch 应提交到何处（[#34193](https://github.com/sgl-project/sglang/issues/34193)）。若你有依赖 sgl-kernel 旧路径的构建脚本，需适配新路径。
- **[RFC] Torch-MLX 桥接重构**：PR #32984 计划升级至 Torch 2.13 / MLX 0.32，利用 MLX 0.32 直接导入 Torch MPS 分配的零拷贝能力，替换现有经 CPU 内存中转的 tensor bridge。Apple Silicon 上使用 SGLang 的开发者需关注合并后的行为变化（[#32984](https://github.com/sgl-project/sglang/pull/32984)）。

## 3. 新模型与硬件支持

- **Wide EP 部署咨询**：用户询问 GLM5-2 与 kimi-k3 是否可在 GB200（NVLink）或 B200（RDMA/EFA）上通过 SGLang 启用 Wide EP，当前部署无法启动（[#34120](https://github.com/sgl-project/sglang/issues/34120)）。
- **NPU MTP 非贪心采样**：PR #32495 为 NPU 上的 MTP 推测验证增加非贪心采样支持（当前 NPU 验证固定使用 argmax，导致 temperature/top_k/top_p 不生效）；报告称 GLM-4.7-Flash 在 GPQA 上启用非贪心 MTP 后准确率有提升（[#32495](https://github.com/sgl-project/sglang/pull/32495)）。
- **MiniMax-H3 相关两条上报**：参数错误（#33466）与 Ref2VA 在 L40S offload 下输出噪声（#34110，closed）。若你在使用该模型，建议关注修复进展（[#33466](https://github.com/sgl-project/sglang/issues/33466)，[#34110](https://github.com/sgl-project/sglang/issues/34110)）。
- **Z-Image 单卡 BCG 崩溃**：新报告显示 Z-Image 家族在单 GPU 上启用 BCG 时，warmup 捕获成功但首次 replay 即崩溃；TP=2 不受影响（[#34183](https://github.com/sgl-project/sglang/issues/34183)）。
- **NPU Diffusion 路线图**：#18967 标记为 inactive 并关闭，但 Ascend 支持仍在推进中（[#18967](https://github.com/sgl-project/sglang/issues/18967)）。

## 4. 性能与优化

- **DeepSeek V4 NVIDIA 性能追踪**：#33636 专门跟踪 DeepSeek-V4 在 SM90/SM100/SM103 上的性能优化 PR，与功能路线图 #23602 互补（[#33636](https://github.com/sgl-project/sglang/issues/33636)）。
- **Weight Cache Daemon（快速引擎恢复）**：Phase 1 已合入（#27139）。per-rank 守护进程通过 CUDA IPC 持有后量化权重，**Qwen3-235B FP8 的权重加载从 ~306-327s 降至 <1s**。Phase 2 计划中（[#33522](https://github.com/sgl-project/sglang/issues/33522)）。
- **Ngram Speculative Decoding 路线图**：#21052 继续跟进基于 trie 的 ngram 投机解码能力增强（[#21052](https://github.com/sgl-project/sglang/issues/21052)）。
- **KV cache 利用率指标**：#5979 请求添加 Prometheus `gpu_cache_usage_perc` 类指标，vLLM 已有对应实现。目前无 assignee（[#5979](https://github.com/sgl-project/sglang/issues/5979)）。

## 5. 稳定性与回归

按严重程度排列（🔴 严重 / 🟠 中等 / 🟡 轻微）：

- 🔴 **1M-token prefill 直接 CUDA OOM**（新，#34155）：v0.5.17 + DeepSeek-V4-Flash-0731，`--tp 8 --moe-a2a-backend megamoe`（无 dp-attention），单请求 ~1.04M token 在 prefill 约 90s 后 OOM；相同请求在 tp8/dp8 dp-attention 下可正常服务。**无 fix PR**（[#34155](https://github.com/sgl-project/sglang/issues/34155)）。
- 🔴 **DSpark 大 decode CUDA-Graph 捕获非法内存**（#33356）：官方 v0.5.16 镜像 + DeepSeek-V4-Pro-DSpark + TP8，小 batch（bs<=32）正常，较大 decode 图捕获不稳定。**无 fix PR**（[#33356](https://github.com/sgl-project/sglang/issues/33356)）。
- 🔴 **Llama4 NVFP4 MoE 在 SM120/SM121 崩溃**（新，#34192）：`apply_router_weight_on_input` 不受 Flashinfer 支持。**无 fix PR**（[#34192](https://github.com/sgl-project/sglang/issues/34192)）。
- 🟠 **Abort 可提交延迟的 final chunked-prefill token**（新，#34149）：main 分支上 abort 语义存在正确性缺陷，有确定性脚本复现。**无 fix PR**（[#34149](https://github.com/sgl-project/sglang/issues/34149)）。
- 🟠 **W4AFP8 + DeepEP 首次推理即崩溃**（#33660）：`missing 1 required positional argument: 'routed_scaling_factor'`，所有 DP/TP/EP rank 同时崩溃。**无 fix PR**（[#33660](https://github.com/sgl-project/sglang/issues/33660)）。
- 🟠 **MegaMOE fallback 到 Triton 崩溃**（#27416，closed）：DeepSeek-V4 FP4 超 token 上限后 fallback 路径在 Triton MoE runner 中因 FP8 scale 形状不匹配崩溃。**无 fix PR**（[#27416](https://github.com/sgl-project/sglang/issues/27416)）。
- 🟠 **Prometheus 指标抓取可饿死 prefill 健康检查**（#28157）：PD 部署中 `/metrics` 抓取导致 bootstrap 健康检查失败。**无 fix PR**（[#28157](https://github.com/sgl-project/sglang/issues/28157)）。
- 🟡 **MiniMax-H3 参数错误**（#33466）：模型加载时参数传递错误。**无 fix PR**（[#33466](https://github.com/sgl-project/sglang/issues/33466)）。
- 🟡 **CI 状态**：#17050 显示当前 main 分支 **3 broken / 11 flaky / 668 recently fixed**（[#17050](https://github.com/sgl-project/sglang/issues/17050)）。
- 🟡 **文档失效链接**（#34118）：`support_new_models` 文档中测试套件路径失效（[#34118](https://github.com/sgl-project/sglang/issues/34118)）。

## 6. 对应用开发者的意义

- **长上下文 + MoE 后端选型需谨慎**：#34155 表明在 TP8+MegaMoE 下 1M 级 context 仍有 OOM 风险，而 dp-attention 路径可规避。生产环境部署 DeepSeek-V4 长上下文服务时，建议优先验证 dp-attention 配置，并关注 #33636 的性能追踪。
- **Anthropic Messages API 网关代理即将可用**：PR #20566 为 `sgl-model-gateway` 增加 Anthropic Messages API 代理支持，Anthropic SDK 客户端将可路由至 SGLang 后端。网关层 API 兼容性正逐步对齐（[#20566](https://github.com/sgl-project/sglang/pull/20566)）。
- **网关路由亲和性增强**：#33625 提议在 `consistent_hashing` 策略中引入 bounded-load 路由键亲和性，平衡会话保持与负载均衡。对依赖会话亲和性的应用，此改动可能影响流量分布行为（[#33625](https://github.com/sgl-project/sglang/issues/33625)）。
- **KV cache 可观测性缺口仍在**：#5979 已开放近 16 个月但未实现，依赖 `gpu_cache_usage_perc` 做弹性伸缩的团队可能仍需自行解析 metrics 或等待 vLLM 生态工具链适配。
- **构建/打包注意**：sgl-kernel 路径迁移（#34193）会影响依赖该路径的第三方 patch 或定制构建，升级前检查自定义 kernel 集成。
- **NPU 生态持续推进**：虽然 #18967 已关闭，但 NPU MTP 采样（#32495）与 Ascend 镜像文档（#27780）均在推进，华为昇腾用户可保持关注。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 动态日报 2026-08-10

## 今日速览

- 发布两个修复版本：b10333 修复 SpaceMiT 后端 Q5_0 dispatch 缺失，b10332 清理 ROCm 相关 CI 配置（移除 `GGML_HIP_ROCWMMA_FATTN`）
- 社区持续关注 DeepSeek V4 在 ROCm/Strix Halo 上的乱码输出（#25436）以及 GLM-5.2 在 MI300X 上因 Indexer PR 导致的 6 倍 prefill 性能退化（#26445）
- 在途 PR 中有多项值得关注的后端重构：BitNet relu2 激活修复、mmproj 量化能力恢复、RPC 加载并行化（降低 20-60% 加载时间）

---

## 版本发布与破坏性变更

**b10333（最新）**
- 修复 ggml-cpu SpaceMiT 后端缺失 Q5_0 dispatch 的问题
- 下载：macOS Apple Silicon (arm64)
- 链接：https://github.com/ggml-org/llama.cpp/releases/tag/b10333

**b10332**
- CI 清理：移除 `GGML_HIP_ROCWMMA_FATTN` 相关配置（#26760）
- 链接：https://github.com/ggml-org/llama.cpp/releases/tag/b10332

> 注意：b10332 移除了 rocWMMA FlashAttention 的 CI 构建路径，RDNA 用户使用 `-fa` 时的路径将依赖 native MMA 内核（与 #26220 相关）。

---

## 新模型与硬件支持

- **BitNet relu2 激活修复**（PR #26751）：`bitnet` 架构现可从 GGUF 读取 `hidden_activation: relu2` 并映射为 `LLM_FFN_RELU_SQR`，修复 microsoft/BitNet#602 的 logits 不正确问题
  https://github.com/ggml-org/llama.cpp/pull/26751

- **Nemotron MTP 支持**（PR #26725，在途）：为 Nemotron Nano 添加 MTP（Multi-Token Prediction）支持，性能依赖 #26623 先合并
  https://github.com/ggml-org/llama.cpp/pull/26725

- **Hexagon NPU 替代后端**（PR #26373，在途）：新增 `ggml-hexagon-jz` 实现，可与官方 `ggml-hexagon` 共存，面向 Android 平台
  https://github.com/ggml-org/llama.cpp/pull/26373

---

## 性能与优化

**已合入/进行中**

- **RPC 加载并行化**（PR #26291）：通过 `GGML_RPC_LOAD_THREADS` 并行化缓存张量 FNV 哈希，RPC 模型加载时间降低 20-60%
  https://github.com/ggml-org/llama.cpp/pull/26291

- **Q2_0 HIP 优化**（PR #26753，在途）：gfx1201 上用原生 AMD permutation 指令替换 HIP 通用字节置换，token 生成提升约 33-35%
  https://github.com/ggml-org/llama.cpp/pull/26753

- **SYCL GLU 融合**（PR #26779，在途）：对 q4_K dense FFN 融合 `mul_mat(gate) + mul_mat(up) + GLU`，在 Arc Pro B70 上对 qwen2.5-3B 有 token/s 提升
  https://github.com/ggml-org/llama.cpp/pull/26779

- **Vulkan coopmat1 去重反量化**（PR #25494，在途）：prefill 阶段 KV 反量化从每 workgroup 32 次降为一次，并重组为 per-head-contiguous 提升访存
  https://github.com/ggml-org/llama.cpp/pull/25494

**双刃剑**

- **DFlash 在 AMD APU + MoE 上约 2x 性能回退**（#25117）：量化 MoE + AMD Strix Halo 场景下，DFlash 对比无投机路径慢约 2 倍
  https://github.com/ggml-org/llama.cpp/issues/25117

---

## 稳定性与回归

### 输出正确性

- **DeepSeek V4 在 Strix Halo ROCm 上乱码输出**（#25436）：Framework Desktop（Ryzen AI Max+ 395）上多模型 IQ3_XXS 乱码，无明确 fix
  https://github.com/ggml-org/llama.cpp/issues/25436

- **MTP 长会话输出重复 `////`**（#23577）：Qwen3.6 27B + MTP 在长会话后重复输出，Windows + CUDA，31 条评论仍 OPEN
  https://github.com/ggml-org/llama.cpp/issues/23577

- **MTP 跨请求状态泄漏**（#26425）：Qwen3.6-35B-A3B-MTP 在 Vulkan 后端非确定性输出，疑似 MTP 保留 inter-request 状态
  https://github.com/ggml-org/llama.cpp/issues/26425

- **Vulkan FA 使用已释放 K/V 单元**（#26744）：flash attention 在 cell 被释放后仍引用陈旧 K/V 影响输出，影响 Strix Halo RADV
  https://github.com/ggml-org/llama.cpp/issues/26744

- **OpenAI API 端点 base64 图片解析 500**（#26770，已关闭）：`/v1/chat/completions` 的 `image_url` 传 base64 数据触发 nlohmann::json 解析错误
  https://github.com/ggml-org/llama.cpp/issues/26770

### 性能退化

- **GLM-5.2 在 ROCm/HIP 上严重回归**（#26445）：8x MI300X 上 Indexer PR #25407 后 prefill 慢约 6x，加载时间慢约 40x，严重程度高
  https://github.com/ggml-org/llama.cpp/issues/26445

- **Native MMA FA 在 RDNA4 深度上下文中慢 2x**（#26220）：移除 rocWMMA 路径后 `fattn-mma-f16` 在 gfx1201 上 deep context prefill 退化，5 👍 说明影响面广
  https://github.com/ggml-org/llama.cpp/issues/26220

- **Strix Halo 输入层滞留 CPU**（#25700）：HIP 后端 30% CPU 使用率 + GPU 吞吐下降，Qwen 3.6 35B MoE Q8
  https://github.com/ggml-org/llama.cpp/issues/25700

### 后端特定

- **Blackwell GGML-CUDA SOFT_MAX 崩溃**（#25060）：RTX 5090（SM 12.0）+ CUDA 13.3 时大模型运行崩溃，用户自提补丁
  https://github.com/ggml-org/llama.cpp/issues/25060

- **`--repeat-last-n -1` 禁用重复惩罚**（#25388）：行为与预期不符，libllama 核心库受影响
  https://github.com/ggml-org/llama.cpp/issues/25388

---

## 对应用开发者的意义

1. **多模态 API 注意**：base64 图片请求当前在 OpenAI 兼容端点会返回 500，多模态 Agent 构建者需在 llama.cpp 修复前自行 base64 预转换或规避 `image_url` 方式（#26770）

2. **工具调用（tool-calling）仍有坑**：
   - XML 风格工具调用模型（Nemotron-3）在 `tool_choice: "required"` 时触发 grammar 栈空错误（#26737，已关闭，但未说明修复）
   - Vulkan 后端 hybrid Qwen3.6-A3B 在 temp=0 下工具调用不确定，且受 prompt-cache 影响（#26817）

3. **MTP/投机解码需审慎**：多个 MTP 相关的正确性问题（#23577、#26425）尚未修复，生产环境搭配 Qwen3.6 系列使用 MTP 建议加回归测试或暂时禁用

4. **ROCm/AMD 用户的兼容性风险**：GLM-5.2 的严重回退（#26445）和 rocWMMA 移除的潜在影响（#26220）提示，AMD MI300X / RDNA4 生产环境升级前应先在目标模型上跑 prefill benchmark

5. **API 监控需求**：#26129 提议在 server 中暴露 per-device 内存使用（weights/context/compute），当前只能通过外部监控近似；对多卡显存规划有需求的团队可关注该 feature
   https://github.com/ggml-org/llama.cpp/issues/26129

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 动态日报（2026-08-10）

## 今日速览

今日无新版本发布，工作重心集中在工具调用稳定性与后端能力补齐：`gpt-oss` 工具解析 500、HF 直拉模型工具 PARSER 缺失、空 `content` 切换工具模式等问题同时暴露，直接影响 Agent 场景。CLI 拖拽图片路径的长期 issue（#10333）迎来两项修复 PR，MLX 视觉输入与 SYCL 后端发现亦有实质推进。

## 版本发布与破坏性变更

无正式版本发布。两项已合入变更值得注意：

- **MLX 版本标记修复**（[PR #17637](https://github.com/ollama/ollama/pull/17637)）：恢复将 MLX 库版本标记为当前 git hash。此前误标为官方 tag 版本，实际内容不同，依赖 MLX 版本判断能力的下游工具需注意。
- **模型配置移除 OCI rootfs.diff_ids**（[PR #17619](https://github.com/ollama/ollama/pull/17619)）：该字段从未被读取，且使 per-tensor safetensors 模型的 config blob 膨胀超 100KB。模型身份（manifest digest）不受影响，但任何直接解析 config blob 的外部工具需移除对该字段的依赖。

## 新模型与硬件支持

- **MLX 图像输入支持已合入**（[PR #17600](https://github.com/ollama/ollama/pull/17600)）：MLX 视觉 checkpoint 此前被标记为 image-capable，但 client 不发送图像、prompt 按纯文本处理。该 PR 补齐了媒体传输链路，同时保留 prefix caching 与 speculative decoding，Apple Silicon 上的视觉模型可用性显著提升。
- **SYCL 后端 opt-in 发现**（[PR #17633](https://github.com/ollama/ollama/pull/17633)）：新增 `ggml-sycl` 后端的识别与稳定命名，需 `OLLAMA_SYCL=1` 显式开启，默认仍禁用。为 Intel GPU 部署铺路。
- **Kimi K3 Cloud 模型请求已关闭**（[Issue #17235](https://github.com/ollama/ollama/issues/17235)）：社区关注度高（19 条评论），但官方未提供时间表。

## 性能与优化

- **集成测试加固与 VRAM 门控修复（进行中）**（[PR #17425](https://github.com/ollama/ollama/pull/17425)）：修复未带 tag 模型名的 VRAM gate 匹配问题；允许 `OLLAMA_MAX_VRAM=0` 的 CPU-only 主机运行轻量模型。对无 GPU 的部署环境是实际可用性提升。
- **Config blob 瘦身（已合入）**（[PR #17619](https://github.com/ollama/ollama/pull/17619)）：移除冗余 rootfs.diff_ids 后，大模型 config 体积可减少 100KB 以上，降低拉取与存储开销。
- **GPU 温度检查（feature request 进行中）**（[Issue #12782](https://github.com/ollama/ollama/issues/12782)）：Agent 长时自主任务对 GPU 散热提出更高要求，社区呼吁生成/流式过程中暴露温度指标，目前无实现排期。

## 稳定性与回归

按严重程度排列：

1. **gpt-oss 工具调用解析 500**（[Issue #17638](https://github.com/ollama/ollama/issues/17638)）：`gpt-oss:20b` 及 GGUF 量化版在工具调用时被后端以 `HTTP 500 "error parsing tool call"` 拒绝，且被拒绝的调用正是模型自己生成的。无 fix PR。
2. **MLX 模型生成不终止 / 退化为意识流**（[Issue #17632](https://github.com/ollama/ollama/issues/17632)）：Laguna-S 2.1 MLX BF16 在 Apple Silicon 上间歇性无法输出终止符，生成内容不受控。Ollama 0.32.6，无 fix PR。
3. **`hf.co/...` 直拉模型缺失内置 RENDERER/PARSER**（[Issue #17636](https://github.com/ollama/ollama/issues/17636)）：从 Hugging Face 直接拉取的 GGUF 虽被识别架构并标记 `tools` 能力，但不会附加与官方库模型相同的原生工具编解码器，导致工具调用不可靠。无 fix PR。
4. **重会话加载卡死**（[Issue #17635](https://github.com/ollama/ollama/issues/17635)）：打开大聊天记录时一次性加载全部内容（此前为滚动加载），导致 UI 无法操作。无 fix PR。
5. **Cloud 直连计费与本地 Pro 不一致**（[Issue #17639](https://github.com/ollama/ollama/issues/17639)）：`ollama.com/v1` 直连 `glm-5.2:cloud` 返回 402「extra usage only」，而相同模型通过已登录的本地 client 可正常使用 Pro 配额。无 fix PR。
6. **OpenAI 兼容层空 content 破坏工具模式**（[Issue #14181](https://github.com/ollama/ollama/issues/14181)）：历史消息中 `content: ""` 与 `tool_calls` 同时存在时，`qwen3-coder` 会从结构化工具调用切换为文本标记模式。无 fix PR。
7. **修复进行中：拖拽图片路径被错误转义**（[PR #17640](https://github.com/ollama/ollama/pull/17640) + [PR #17634](https://github.com/ollama/ollama/pull/17634)）：分别处理反斜杠转义与撇号两种情况，共同修复 #10333，目前均未合入。
8. **已关闭**：[Issue #16547](https://github.com/ollama/ollama/issues/16547)（Llama3.2-vision `mllama` 架构无法加载）已关闭。

## 对应用开发者的意义

- **Agent 工具调用是当前最大风险点**：`gpt-oss` 500（#17638）、HF 直拉模型工具不可用（#17636）、空 `content` 导致模式切换（#14181）三个问题叠加。在官方修复前，建议客户端实现：对 500 响应重试、避免发送 `content: ""` 的 assistant 消息、对 HF 直拉模型先验证工具能力再上线。
- **OpenAI Responses API namespace 支持仍未落地**（[Issue #15921](https://github.com/ollama/ollama/issues/15921)），依赖 Codex CLI 等工具的开发者在 Ollama 网关上的兼容性受限；#17630 已有过滤 namespace 工具的修复 PR 但尚未合入。
- **Cloud 直连计费异常**（#17639）会影响以 API key 直连 `ollama.com/v1` 的生产应用，建议暂用 signed-in 本地 client 或自有 Ollama 网关中转，直至官方修复一致性。
- **Apple Silicon 视觉应用迎来利好**：MLX 图像输入合入后（#17600），可在 MLX 后端运行视觉模型，不必回退至 CPU 或 CUDA 模拟路径。
- **`tool_choice: any` 仍无进展**（[Issue #11171](https://github.com/ollama/ollama/issues/11171)）：需要强制模型调用工具时，仍需自行检测「未调用工具」并重试。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 动态日报 — 2026-08-10

## 今日速览
今日无新版本发布。1.97.0-RC1 被报告存在 UI 使用统计中断的严重回归，同时一条 issue 将流式 usage 严重少计问题的根因定位到流聚合层而非 provider 解析。Responses API 流式输出项生命周期修复 PR 正在推进中，当前为社区活跃贡献阶段。

---

## 版本发布与破坏性变更
**无新 Releases。** 以下内容值得关注：

- ⚠️ **FastAPI ≥ 0.141.0 兼容性破坏（已修复）**
  在 v1.95.0 上若 FastAPI 被升级至 ≥0.141.0，代理启动即失败：`ImportError: cannot import name 'get_flat_dependant'`。issue 已关闭，但升级 FastAPI 前应确认 LiteLLM 版本已包含修复。
  https://github.com/BerriAI/litellm/issues/35763

---

## 新模型与硬件支持
- **Anthropic 原生结构化输出能力标记（PR）**
  为 Anthropic 直连路由的 `claude-sonnet-5` 和 `claude-haiku-4-5` 添加 `supports_native_structured_output: true`（同时更新主模型映射与备份映射），使 `response_format` 路径正确走原生能力。
  https://github.com/BerriAI/litellm/pull/35930

- **Bedrock Nova 2 区域前缀扩展（PR）**
  扩展 `_is_nova_2_model` 检测，识别 `jp.` 与 `global.` 前缀，并同步将定价表中不存在的 `apac.amazon.nova-2-lite-v1:0` 修正为 jp geo ID。
  https://github.com/BerriAI/litellm/pull/33775
  https://github.com/BerriAI/litellm/pull/33776

- **AI21 模型列表过时通报（issue）**
  AI21 已退役全部 J2 系列，现仅存 `jamba-large-1.7` 与 `jamba-mini-2`，LiteLLM 模型清单需要清理。
  https://github.com/BerriAI/litellm/issues/27094

---

## 性能与优化
- **least_busy 路由计数器钳制（PR）**
  `least_busy` 算法在并发竞争下可能使 per-deployment 计数器递减为负值，导致路由错乱。该 PR 将计数器下限钳制为 0，是一项提升路由稳定性的修复。
  https://github.com/BerriAI/litellm/pull/34444

- **递归 tool schema 导致 unpack_defs 挂起（issue，未修复）**
  递归、高扇出的 `$defs`/`$ref` JSON Schema 会使 `unpack_defs` 无界运行，Bedrock 与 Vertex 调用方均受影响。这不是新问题（关联 #19098/#13151/#11372），但确认此前修复不完整。
  https://github.com/BerriAI/litellm/issues/34328

---

## 稳定性与回归
按严重程度排列：

**高**
- **1.97.0-RC1：UI 使用统计完全停止计数（OPEN，无 fix PR）**
  从 1.95.0 升级后 dashboard 中成功/失败计数归零。涉及计费展示核心路径，建议暂缓采用该 RC。
  https://github.com/BerriAI/litellm/issues/36337

- **流式 usage 严重少计，根因在流聚合层（OPEN，无 fix PR）**
  链式代理（Front→Upstream→Bedrock）下流式请求的 `usage` 远低于实际，且与 provider 无关——根因不在 chunk parser 而在流聚合层。影响所有依赖 `usage` 的计费与监控场景。
  https://github.com/BerriAI/litellm/issues/36114

**中**
- **gpt-5.6 系模型工具调用报 `reasoning_effort` 错误（OPEN，无 fix PR）**
  对 `gpt-5.6-sol/luna/terra` 通过 `/chat/completions` 使用 function tools 时失败。
  https://github.com/BerriAI/litellm/issues/33221

- **流式上游重置被伪装为正常 `finish_reason: stop`（已关闭）**
  上游连接被重置时 LiteLLM 生成合成 `[DONE]`，客户端无法区分正常结束与中断，可能造成上下文截断后继续多轮对话。
  https://github.com/BerriAI/litellm/issues/33404

**低**
- **Anthropic 端点绕过代理级回调（OPEN，无 fix PR）**
  `/v1/messages` 请求不会触发 `CustomLogger.async_pre_call_hook`，策略执行和审计存在盲区。
  https://github.com/BerriAI/litellm/issues/27518

- **`user_header_mappings` 在 OpenWebUI 下不生效（OPEN）**
  x-openwebui-user-email/id 无法按文档透传，影响按用户计量。
  https://github.com/BerriAI/litellm/issues/14667

- **预算耗尽会连带阻断模型发现端点（已关闭）**
  修复后 budget 耗尽不再阻塞 `GET /v1/models` 等发现端点，避免“预算超了连免费模型都看不见”的尴尬。
  https://github.com/BerriAI/litellm/issues/27923

---

## 对应用开发者的意义
1. **流式 usage 数据暂不可信。** 无论 provider 是什么，排障时应以非流式请求或上游原始账单为准；基于流式 `usage` 的自动计费/配额系统存在系统性少计风险（#36114）。
2. **1.97.0-RC 先别上生产。** UI 统计中断是明确的回归；生产环境建议停留在 1.95.x 并等待正式版修复（#36337）。
3. **gpt-5.6 用户的工具调用要等待修复。** 若你的 Agent 依赖该模型系列的 function calling，目前会被 `reasoning_effort` 参数错误挡住（#33221）。
4. **流式中断可能静默产生错误上下文。** 上游连接重置被转换为正常结束，多轮 Agent 可能基于截断内容继续对话，需在应用层增加完整性校验（#33404）。
5. **积极信号。** FastAPI 兼容性问题当天即关闭、多条 stale PR 被集中收集清理，项目维护活跃度在恢复；社区贡献者（Bartok9 等）正在成批补齐 `validate_environment` 密钥检测缺口，对自托管排障有实际帮助。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 动态日报 — 2026-08-10

## 今日速览

Unsloth 今日的核心动向集中在 **Studio 多模态能力升级** 与 **AMD/ROCm 显存管理问题修复** 两大主线。MiniMax-H3 视频 + 音频联合 LoRA 训练已进入 PR 阶段，将成为 Studio 支持的第二个可训练视频模型家族；同时，大量 AMD 用户报告的 diffusion/video 显存规划缺陷（包括 48 分钟超慢推理、系统 RAM 耗尽、显存闲置）正在密集修复中。GGUF 相关的基础设施问题（多 checkpoint 折叠、多余 base 模型下载）也有针对性 PR 落地。

---

## 版本发布与破坏性变更

### v0.1.527-beta
- **主要变更**：Studio 修复了 cached-pipeline 信号基于 snapshot 判断的问题（PR #7851）；安装脚本 pin 更新至 `unsloth>=2026.8.3`（PR #7860）
- **链接**：https://github.com/unslothai/unsloth/releases

> 注意：该版本信息不完整（release notes 被截断），无明确的破坏性变更记录。如果您的自动化流程依赖安装脚本默认版本约束，请确认 pin 升级不会导致兼容性问题。

---

## 新模型与硬件支持

### MiniMax-H3：视频 + 音频联合 LoRA 训练
- **PR #8244** 为 Studio 添加了 MiniMax-H3 作为第二个可训练视频模型家族，支持从带声音的剪辑中训练（首个支持音频的视频训练管线）
- 依赖 #8196（LTX2 视频 LoRA）和 #7989（MiniMax-H3 视频支持）两个基础 PR
- 相关增强 PR #8283 使其 Qwen3-VL conditioner 可从 hosted INT8 checkpoint 运行，降低 VRAM 底线
- 链接：https://github.com/unslothai/unsloth/pull/8244

### macOS 安装器修复
- **PR #8279** 修复两个安装器缺陷：`install.sh` 在自身 bundle 内创建符号链接导致应用无限嵌套（Spotlight 索引和卸载均受影响）；另一处未详述
- 链接：https://github.com/unslothai/unsloth/pull/8279

### Z-Image LoRA 训练仅支持 Turbo 蒸馏版本
- **Issue #8270**：Studio 的 Z-Image LoRA 训练只提供蒸馏后的 `Tongyi-MAI/Z-Image-Turbo`，而上游 diffusers DreamBooth 参考配方使用未蒸馏的 `Tongyi-MAI/Z-Image`，后者不在 Studio 可信库列表中
- 链接：https://github.com/unslothai/unsloth/issues/8270

---

## 性能与优化

### AMD/ROCm：显存管理问题集中暴露（进行中）

| 问题 | 影响 | 状态 | 链接 |
|---|---|---|---|
| **Wan2.2-TI2V-5B 请求 66.54 GiB 显存** | 3.4 GB 模型在 16 GB 显卡上失败——SDPA 因 ROCm gfx1200 缺乏 flash/memory-efficient kernel 回退到 math kernel，物化完整 N×N 分数矩阵 | OPEN，无修复 PR | [Issue #8225](https://github.com/unslothai/unsloth/issues/8225) |
| **Strix Halo 显存硬编码 80% 上限** | Linux 上 Studio 将可用显存上限硬编码为 80%，剩余 20% 空闲却无法用于训练 | OPEN | [Issue #7878](https://github.com/unslothai/unsloth/issues/7878) |
| **Windows ROCm diffusion 静默耗尽主机内存** | 显存规划低估时，WDDM 将溢出写入系统 RAM，可用内存降至 1.2 GB 以下，pagefile 超 50 GB；Linux 同样情况会正确抛出 OOM | CLOSED（修复方向待确认） | [Issue #8188](https://github.com/unslothai/unsloth/issues/8188) |
| **Z-Image 48 分钟/20 步** | 采样仅占 1m47s，其余时间全部用于子模块 PCIe 分页和 tile VAE 解码 | CLOSED | [Issue #8081](https://github.com/unslothai/unsloth/issues/8081) |

### Studio 显存规划缺陷（多 GPU / 统一内存）
- **Issue #8235**：diffusion 显存预算只按单 GPU 计算，导致多卡机器上模型被放入系统 RAM（约 70 GiB），而 2×24 GB 的 VRAM 几乎完全闲置
- **PR #8213**：修复统一内存主机上 diffusion/video 负载无法容纳时被 OS 杀进程的问题——拒绝加载而非崩溃
- 链接：https://github.com/unslothai/unsloth/issues/8235 / https://github.com/unslothai/unsloth/pull/8213

### 训练配置无效
- **Issue #8269**：`FAMILY_TRAIN_DEFAULTS` 推荐的 `lr_warmup_steps: 20` 在默认 constant scheduler 下是静默 no-op——`diffusers.optimization.get_scheduler` 根本不读取 `num_warmup_steps`
- 链接：https://github.com/unslothai/unsloth/issues/8269

---

## 稳定性与回归

### 严重问题（会崩溃 / 系统不可用）

| 严重程度 | 问题描述 | 状态 | 链接 |
|---|---|---|---|
| **严重** | Windows ROCm：显存低估导致系统 RAM 耗尽、机器不可用 | CLOSED | [Issue #8188](https://github.com/unslothai/unsloth/issues/8188) |
| **高** | 统一内存主机 diffusion/video 负载超限时被 OS 杀进程 | 有修复 PR #8213 | [PR #8213](https://github.com/unslothai/unsloth/pull/8213) |

### 中等问题（功能异常 / 资源泄漏）

| 问题描述 | 状态 | 链接 |
|---|---|---|
| **推理子进程显存泄漏**：从 transformers 切换至 GGUF 模型后，子进程仍持有数 GB VRAM，且 GGUF context fit 无法感知占用，导致 GPU 超卖 | CLOSED | [Issue #8220](https://github.com/unslothai/unsloth/issues/8220) |
| **NVFP4 格式无法在 5060 Ti 16 GB 加载** | OPEN | [Issue #8246](https://github.com/unslothai/unsloth/issues/8246) |
| **Gemotron 注意力处理缺陷**（`trust_remote_code` 模型加载失败，报 Flash Attention 不支持） | 有修复 PR #8229 | [PR #8229](https://github.com/unslothai/unsloth/pull/8229) / [Issue #7527](https://github.com/unslothai/unsloth/issues/7527) |
| **cached 数据集无可选 split 选项**：split 由 loader 推断而非 dataset card 声明时，UI 显示无 split 可选，尽管实际可正常加载 | CLOSED | [Issue #8140](https://github.com/unslothai/unsloth/issues/8140) |

### 低风险问题（UI / 体验）

| 问题描述 | 状态 | 链接 |
|---|---|---|
| 空聊天页面上 overlay banner 悬浮在窗口中央而非右下角 | 已修复（PR #8201 已合并/关闭） | [PR #8201](https://github.com/unslothai/unsloth/pull/8201) |
| 文档侧边栏可展开项的 chevron 对齐不一致 | OPEN | [Issue #8268](https://github.com/unslothai/unsloth/issues/8268) |

### CI/工程质量修复
- **PR #8275** 和 **PR #8285**：修复 diffusion 训练测试依赖主机环境导致 CI 全红的问题（测试在 Python 3.10-3.13 上失败但本地通过）
- **PR #8286**：为 Backend CI 设置独立的超时时间，避免 PR 展示大量虚假红色检查（#8274 曾显示 52 个红色检查，无一为真实失败）
- 链接：https://github.com/unslothai/unsloth/pull/8275 / https://github.com/unslothai/unsloth/pull/8285 / https://github.com/unslothai/unsloth/pull/8286

---

## 对应用开发者的意义

如果您的应用构建在 Unsloth 之上（例如通过 Studio 管理模型生命周期、使用 GGUF 推理或调用微调 API），以下是本次日报中最值得关注的要点：

1. **GGUF 下载体积与实际不符（重要）**
   - **Issue #8234**：UI 展示的 diffusion GGUF 大小仅为 GGUF 文件本身，不含必需的文本编码器、VAE 等 companion 资源——用户同意的下载体积可能比实际落地小数倍
   - **PR #8232**：选择 `Qwen-Image-Edit-2511-GGUF Q6_K` 会额外启动 57.72 GB 的 base 模型下载（其中 40.86 GB 的 dense transformer 实际不会被使用）
   - 建议：在您的应用层主动向用户展示"模型总占用"而非单文件大小，避免磁盘配额意外触发
   - 链接：https://github.com/unslothai/unsloth/issues/8234 / https://github.com/unslothai/unsloth/pull/8232

2. **多 checkpoint GGUF 仓库选择逻辑已修复**
   - **PR #8222**：修复了像 `unsloth/LTX-2.3-GGUF` 这样包含多个 checkpoint（root/distilled/distilled-1.1）共享相同 quant label 的仓库，picker 不再将它们折叠成错误的结果
   - 依赖 GGUF 仓库的开发者应升级以获取正确的文件选择行为
   - 链接：https://github.com/unslothai/unsloth/pull/8222

3. **Multi-GPU / 统一内存环境需要显存规划升级**
   - 当前 Studio 的 diffusion 显存预算存在单一 GPU 假设（Issue #8235）和统一内存完全不检查容量的问题（PR #8213）
   - 如果您的部署运行在 Strix Halo、MacBook Pro 或 2×24 GB 多卡环境，建议跟踪这两个议题的进度，并注意 Studio 可能在一段时间内仍会保守地将模型放入 RAM
   - 链接：https://github.com/unslothai/unsloth/issues/8235 / https://github.com/unslothai/unsloth/pull/8213

4. **工具调用创建的文件无法从聊天中直接访问**
   - **PR #8256** 将 python/terminal 工具生成的文件收纳到统一位置，避免散布在用户主目录的三个文件夹中，并使其可从生成它们的聊天会话中直接查看
   - 对深度使用 Studio Agent 能力的开发者，这显著改善了调试和产物管理的可操作性
   - 链接：https://github.com/unslothai/unsloth/pull/8256

5. **RAG 文件夹同步已支持桌面原生拖放**
   - **PR #8014** 支持将本地文件夹链接到知识库/RAG 范围，**PR #8265** 修复了桌面拖放事件被聊天窗口抢走的问题（现在会路由到光标下的放置区）
   - 链接：https://github.com/unslothai/unsloth/pull/8014 / https://github.com/unslothai/unsloth/pull/8265

6. **AMD/ROCm 用户需谨慎评估 diffusion 工作负载**
   - `Wan2.2-TI2V-5B` 在 ROCm gfx1200 上仍会因 SDPA kernel 缺失而请求 66 GiB 显存（Issue #8225），`Z-Image` 在 Windows ROCm 上可能需要 48 分钟/20 步（Issue #8081）
   - AMD 平台的图像/视频推理在修复落地前仍建议使用 CPU offload 或缩小 batch 作为规避方案
   - 链接：https://github.com/unslothai/unsloth/issues/8225 / https://github.com/unslothai/unsloth/issues/8081

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*