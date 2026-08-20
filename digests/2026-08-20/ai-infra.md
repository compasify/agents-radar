# AI 基础设施日报 2026-08-20

> 生成时间: 2026-08-19 23:12 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施生态横向分析报告（2026-08-20）

## 1. 生态全景

推理引擎层（vLLM/SGLang）正围绕 DeepSeek-V4、Kimi K3 等新一代长上下文 MoE 模型展开密集适配，但长序列退化、CUDA graph 损坏、EP 崩溃等正确性缺陷尚未闭环，升级 v0.27.0 已出现确定性回归。本地运行时层（llama.cpp/Ollama）在 Vulkan/OpenCL/MLX/ROCm 等非 CUDA 后端上集中暴露内存管理与数据隔离问题。网关与微调层（LiteLLM/Unsloth）则更偏向工程成熟度——限流一致性、供应链签名、工具调用可靠性与长会话记忆。一个跨层信号是：推测解码（DFlash2/MTP）正在全栈快速扩散，而"静默输出损坏"成为今日出现频率最高的高风险故障类型，应用层必须承担更多校验与容错职责。

## 2. 各项目活跃度对比

> 统计口径：各日报中提及的过去 24 小时 Issues/PRs 条目数（含新增、更新、关闭），非仓库全量事件。

| 项目 | 提及 Issues | 提及 PRs | Release | 今日热度焦点 |
|---|---|---|---|---|
| vLLM | ≈21 | ≈15 | 无（v0.27.0 存在升级回归） | DSV4/Kimi K3 正确性、Rust 前端、构建可复现性 |
| SGLang | ≈11 | ≈13 | 无 | DSV4-Flash MoE 优化、DFlash2 量化 head、CI 3 broken/11 flaky |
| llama.cpp | ≈10 | ≈14 | b10502（签名 attestation） | DFlash2、自适应 MTP、RPC 越界写修复 |
| Ollama | ≈14 | ≈10 | v0.32.15-rc1（元数据缓存） | 流式挂起与 goroutine 泄漏修复、ROCm KV 串扰、MLX 内存泄漏 |
| LiteLLM | ≈17（6 已关闭） | ≈13 | v1.99.0-dev.1（cosign 签名） | 集群限流一致性、Claude Code 工具 Bug、批次预校验 |
| Unsloth | ≈23（多已关闭） | ≈11 | 无 | Studio 稳定性、UEmbed 嵌入管线、EXL3 量化后端 |

整体上，vLLM 与 Unsloth 的待处理面最宽；llama.cpp 与 LiteLLM 的 PR 密度最高，修复节奏快；Ollama 以 rc + 10 个修复 PR 保持高频迭代。

## 3. 模型支持竞速

| 模型/架构 | vLLM | SGLang | llama.cpp | Ollama | 结论 |
|---|---|---|---|---|---|
| DeepSeek-V4/-Flash | 覆盖面最广：ROCm/A100 支持跟踪、性能优化清单；但 0.27 升级回归与 sm_80 崩溃未决 | MXFP4 共享专家融合已启用；SM90 EP 崩溃未决 | — | — | 双引擎并跑，均未达生产稳定 |
| Kimi K3 | 专项跟踪 #50001（KV Cache 管理/KDA/CUDA graph），3 个中高危 issue | — | — | — | vLLM 独跑 |
| DFlash2 | 新架构 PR #52816 | 量化 lm_head 支持 #35496 | 架构支持 #27342 | MLX 原生支持 #17865 | 四栈同步跟进，扩散最快 |
| Qwen3.8/3.6 | 纯文本模式修复、AITER MoE 安全分发 | CI 覆盖 Qwen3.8-2.4T MXFP4 | SM120 CUDA kernel stall 待修复 | 工具调用、并发限制未解 | 各栈都在为该系列"填坑" |
| gpt-oss | 路由专家按需加载 #52209 | — | CDNA2 MXFP4 MMQ 调度 | — | 服务 RL/多卡训练场景 |
| 其他 | FlashInfer W4A16、ModelOpt NVFP4 | LoRA+spec decode、NPU LLaDA2 RFC | Gemma4 QAT 加载问题、RPC 调度 | glm-ocr EOT 修复 | 能力点各有侧重 |

**领跑判断**：新大模型首适配 vLLM 覆盖面最广，SGLang 在 MoE 特定优化上更激进，但两者都在付出正确性代价。推测解码工程化上 llama.cpp 领先（自适应 MTP 深度 + draft prefill 零拷贝），Ollama 借 MLX 将 DFlash2 带到 Apple Silicon。非 CUDA 硬件覆盖以 llama.cpp 最广；vLLM/SGLang 的 ROCm 路径仍在建立中。

## 4. 性能优化前沿

| 方向 | 代表动态 | 涉及项目 |
|---|---|---|
| KV Cache 与长上下文 | Kimi K3 KV Cache 管理器跟踪；HiCache host 池弹性；`OLLAMA_PREFILL_CACHE` 8GiB LRU 持久化；量化 KV cache 在 TP 下不再被丢弃 | vLLM / SGLang / Ollama / Unsloth |
| 推测解码 | DFlash2 四栈落地；自适应 MTP 深度（`--spec-draft-n-max 12`）；draft model prefill 零拷贝（RTX 5090 实测 ~1100 tok/s）；LoRA + EAGLE/DFLASH 多适配器 | llama.cpp / vLLM / SGLang / Ollama |
| 量化与算子 | PTX 9.4 `ldmatrix.s8.s4` 硬件符号扩展；FlashInfer Cute-DSL W4A16；MXFP4/IQ4_XS 走 MMQ 路径；AVX2 大 batch IQ 编码提速；EXL3 后端（2-8-bit + MoE） | vLLM / llama.cpp / SGLang / Unsloth |
| 分布式与集群 | NCCL 2.31+ 堆溢出修复、MNNVL Lamport 内存序修复；单 GPU 释放 ~5GiB NCCL device buffer；RPC 越界写修复 + 异步 graph compute；跨副本 TPM 限流 | vLLM / SGLang / llama.cpp / LiteLLM |
| 批处理与调度 | Batch invariant 特性追踪；批次入队令牌限流 + 批次文件快速失败校验；PrefillDelayer 反馈回路修复 | vLLM / LiteLLM / SGLang |
| 可观测性与成本 | OTel tracer 每次请求省 ~3ms；Vertex 区域端点 1.1x 成本系数修正；context consumption 配额暴露请求 | LiteLLM / Unsloth |

**优化火力排序**：推测解码 > 量化（MXFP4/W4A16/NVFP4）> KV Cache/长上下文 > 分布式多节点稳定性。量化降低单位 token 成本与长上下文推高显存需求形成了两个方向的拉力。

## 5. 分层定位差异

| 分层 | 项目 | 核心职责 | 今日关键信号 |
|---|---|---|---|
| 推理引擎 | vLLM / SGLang | 多 GPU 高吞吐 serving、kernel 深度优化、新模型首发 | 新模型适配最快，正确性风险最高；Rust 前端/服务端重构推进中 |
| 本地运行时 | llama.cpp / Ollama | 桌面/边缘推理、多后端（CUDA/Vulkan/Metal/OpenCL/SYCL/RPC/MLX） | llama.cpp 偏引擎能力，Ollama 偏产品化封装；统一内存设备问题集中 |
| LLM 网关 | LiteLLM | 多 provider 路由、限流、预算、护栏、审计 | 集群一致性（Secret Manager 初始化、跨副本 TPM）与工具调用正确性为主线 |
| 微调/训练 | Unsloth | 低显存微调、嵌入训练（UEmbed）、量化后端 | Studio 稳定性修复 + 长对话记忆压缩/检索改造 |

层间存在明显传导关系：vLLM/SGLang 的正确性缺陷沿版本升级传导至下游；llama.cpp 的修复经 Ollama 间接影响终端用户；LiteLLM 作为网关定义上层可观测的模型与配额边界；Unsloth 的量化与 KV cache 改动直接影响微调后模型的部署预算。选型时应同时跟踪直系上游与下一层消费方。

## 6. 值得关注的趋势信号

1. **推测解码从"加分项"变为"默认能力"**：DFlash2 同日出现在 vLLM、SGLang、llama.cpp、Ollama/MLX 四栈，加上 llama.cpp 自适应 MTP 深度，说明 spec decode 正像 paged attention 一样成为各层默认加速。应用层无需感知，但需跟进 vLLM 的显式配置 RFC（#51338）与 SGLang 的 `selector_top_k` 边界限制。

2. **静默输出损坏是当前最危险的跨项目故障模式**：SGLang #27194（MoE 数据损坏但 token 流畅、接受率高）、Ollama #17847（ROCm KV 串扰）、vLLM #52531（CUDA graph 输出损坏）同日出现。Agent 应用不可盲信"看起来正常"的响应，应对关键任务增加输出校验、多采样自洽性检查或约束解码。

3. **新一代长上下文 MoE 模型的生产就绪度被高估**：DSV4/Kimi K3 在 EP 拓扑、CUDA graph、超长 prefill 上均有专属正确性问题；vLLM 0.27.0 升级已造成 DSV4-Flash 确定回归。生产环境请固定已验证版本（如 DSV4 配 0.26.x），并单独建立长序列 + 推测解码的回归用例。

4. **供应链安全正在进入基础设施基线**：llama.cpp b10502 启用 release attestation，LiteLLM 统一 cosign 签名镜像，RPC 恶意张量越界写修复。多机 RPC/EP 与多租户网关部署应把镜像签名校验纳入 CI/CD 默认流程，而非可选加固。

5. **工具调用可靠性横跨三层的修复队列**：LiteLLM（Claude Code 工具双重执行、MCP 工具劫持）、Ollama（工具解析失败后请求永久挂起）、Unsloth（tool_calls 参数污染历史）同期修复。Agent 开发者应对所有工具调用设置客户端超时、幂等键与 schema 校验，不能依赖服务端永不出错。

6. **统一内存设备（Apple Silicon/Strix Halo）与 CUDA 差距仍大**：MLX 缺少 prefix cache 导致 20-30K token 反复 prefill、KV cache 按请求数泄漏；ROCm 在 gfx1151 上出现 KV 串扰与 VRAM 识别错误。这些平台适合评估/开发，但长会话 agent 与多租户生产部署前需准备降级路径。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 动态日报 — 2026-08-20

## 今日速览
今日 vLLM 仓库动态集中在 **DeepSeek-V4** 与 **Kimi K3** 两大高热度模型上：多个长期未解的崩溃/正确性问题在过去 24 小时内持续收到讨论（如 DSV4-Flash 在 A100 上的 sm_80 崩溃、Kimi K3 的 CUDA graph 输出损坏等），同时也已出现对应的修复 PR。**Rust 前端**与 **Model Runner v2** 迁移继续推进，但对上层应用而言，当前多个新模型路径仍处于“可用但需谨慎验证”的状态。

## 版本发布与破坏性变更
| 内容 | 详细信息 |
|---|---|
| ⚠️ 升级到 v0.27.0 后 DSV4-Flash 报错 | [#51758](https://github.com/vllm-project/vllm/issues/51758)：用户报告从 0.26.0 升级到 0.27.0 后运行 DeepSeek-V4-Flash 失败。该 issue 仍处于 OPEN 状态，暂无明确修复，升级前建议在测试环境验证 DSV4 工作负载。 |
| 🔧 Rust 前端取消推测方法自动猜测（RFC） | [#51338](https://github.com/vllm-project/vllm/pull/51338)：PR 提议移除根据模型路径子串（如 `eagle3`、`dflash`）猜测推测解码方法的逻辑，改为显式配置。合并后可能影响现有依赖自动识别的部署，但当前仍处于 RFC 阶段。 |
| 🔧 CI/构建镜像固定 | [#52994](https://github.com/vllm-project/vllm/pull/52994)：`manylinux2_28-builder:cuda13.0` 浮标被上游重建时会导致每次 CUDA 13.0 wheel 的编译器/glibc 工具链漂移，现 PR 将其固定到 `release/2.13` 镜像，提升构建可复现性。 |

## 新模型与硬件支持
| 内容 | 状态 |
|---|---|
| **Kimi K3 跟踪 issue** | [#50001](https://github.com/vllm-project/vllm/issues/50001)：正式跟踪 Kimi K3 的 KV Cache 管理器（mamba 前缀缓存/block size 限制）、KDA kernel、CUDA graph 等支持进展。 |
| **DeepSeek-V4-Flash sm_80（A100/A800）支持请求** | [#40851](https://github.com/vllm-project/vllm/issues/40851)：在 A100/A800（sm_80，Ampere）上初始化失败（DeepGEMM 断言错误），目前仍无支持时间表。 |
| **DeepSeek-V4 ROCm 后端支持** | [#41820](https://github.com/vllm-project/vllm/issues/41820)：跟踪 mHC/HCA/CSA/MoE/MTP 等模块在 ROCm 上的端到端启用到优化的完整清单，`deepseek_v4_fp8` 路径已在 AMD 上运行。配套 PR [#50632](https://github.com/vllm-project/vllm/pull/50632) 计划为 AMD DSV4-Flash-MXFP4 增加 GSM8K 精度测试。 |
| **DFlash2 草案模型** | [#52816](https://github.com/vllm-project/vllm/pull/52816)：新增本地分组深度卷积 + 候选选择器，新架构以 `DFlash2DraftModel` 声明启用，旧 DFlash 权重不受影响。 |
| **Qwen3.8-27B 纯文本模式** | [#52734](https://github.com/vllm-project/vllm/pull/52734)：修复 `--language-model-only` 下视觉塔被禁用后共享模型状态导致的崩溃/行为异常，支持无视觉塔部署。 |
| **Qwen3.6 AITER MoE on gfx12/RDNA4** | [#52869](https://github.com/vllm-project/vllm/pull/52869)：启用安全分发，避免将流量路由到不支持的 AITER 编译形状导致 `device_gemm` 报错。 |
| **gpt-oss 路由专家加载** | [#52209](https://github.com/vllm-project/vllm/pull/52209)：支持 RL 训练时按需同步单个 expert，避免 actor-rollout 同步时全量 all-gather。 |
| **FlashInfer Cute-DSL W4A16 线性 kernel** | [#53014](https://github.com/vllm-project/vllm/pull/53014)：新增基于 sm12x cute-dsl 的 FP4 W4A16 GEMM 路径，补充现有 NVFP4 量化方案。 |

## 性能与优化
| 内容 | 详情 |
|---|---|
| **Batch Invariant 特性追踪** | [#27433](https://github.com/vllm-project/vllm/issues/27433)：已基于 Thinking Machines 的“defeating nondeterminism in LLM inference”方法做了初步支持（project board 见该 issue），继续跟踪剩余工作项。 |
| **DeepSeek-V4 性能优化清单** | [#45861](https://github.com/vllm-project/vllm/issues/45861)：列表内已有多个 PR 合并（[#45061](https://github.com/vllm-project/vllm/pull/45061)、[#45863](https://github.com/vllm-project/vllm/pull/45863)、[#44577](https://github.com/vllm-project/vllm/pull/44577)），持续优化中。 |
| **W4A8-INT8 的 PTX 9.4 硬件加载** | [#49529](https://github.com/vllm-project/vllm/issues/49529)：利用 `ldmatrix.sync.aligned.m8n16.s8.s4` 在共享内存加载阶段完成 INT4→INT8 符号扩展，减少显存占用和指令数。 |
| **QuantFP8 编译模式仍慢于 CUDA** | [#25094](https://github.com/vllm-project/vllm/issues/25094)：`torch.compile` 下的 `QuantFP8.forward_native` 分组量化在 H100/RTX5090 上仍比 CUDA 慢，建议重新采集 torch 2.10/2.11 数据验证是否有改善。 |
| **Kimi K3 recover-SSM kernel 优化** | [#52993](https://github.com/vllm-project/vllm/pull/52993)：PR #51855 加入的 ReplaySSM-like recover 方法虽降低内存占用，但因使用 Triton 实现反而拖慢运行时间；本 PR 将其替换为高度优化的非 Triton 版本。 |
| **多模态 payload 延迟预处理（RFC）** | [#46722](https://github.com/vllm-project/vllm/issues/46722)：建议在 token-in/token-out 流程中将 `pixel_values` 预处理延迟到 `/generate`，以减小 KV 传输负载，对 P/D 分离部署有意义。 |
| **Model Runner V1→V2 迁移** | [#41286](https://github.com/vllm-project/vllm/issues/41286)：迁移路线图先从 dense 模型（Qwen3-0.6B、OPT-125M）开始，再覆盖 MoE 模型。 |
| **NCCL 2.31+ 堆溢出修复** | [#53008](https://github.com/vllm-project/vllm/pull/53008)：修复 `ncclCommQueryProperties` 在 vLLM + DeepEP 多节点 EP 场景下的 host 堆破坏（偶发 SIGSEGV），属于直接影响多节点推理稳定性/性能的修复。 |

## 稳定性与回归
| 严重程度 | 问题 | 修复状态 |
|---|---|---|
| 🔴 高 | **MTP 推测解码长序列非法内存访问**（[#40756](https://github.com/vllm-project/vllm/issues/40756)）：Qwen3.6-27B-FP8 + MTP（num_spec_tokens=5）在长序列下 crash。 | 暂未关联 fix PR。 |
| 🔴 高 | **DeepSeek-V4 v0.27.0 升级报错**（[#51758](https://github.com/vllm-project/vllm/issues/51758)）：见“版本发布与破坏性变更”。 | OPEN，暂无修复。 |
| 🔴 高 | **Kimi-K3 长上下文后全部请求退化为重复 token**（[#51039](https://github.com/vllm-project/vllm/issues/51039)）：疑似 KDA prefill 出现 NaN logits，一旦某个 ~240K 长请求完成，后续所有请求均受影响。 | 未关联 fix；相关问题 PR [#51508](https://github.com/vllm-project/vllm/pull/51508) 在修 GDN/KDA 的 stale 行状态损坏。 |
| 🟠 中 | **Kimi-K3 CUDA graph 捕获导致静默输出损坏**（[#52531](https://github.com/vllm-project/vllm/issues/52531)）：batch=1 下三种 cudagraph 模式均出现失败模式。 | 无直接 fix，同属 K3 kernel 稳定性系列问题。 |
| 🟠 中 | **Kimi-K3 1P1D NIXL Direct-PD 静默输出损坏**（[#52627](https://github.com/vllm-project/vllm/issues/52627)）：TP=8 下 MooncakeStore + NixlConnector 多连接器组合出现间歇性乱码，NIXL-only 则正常，指向多连接器协同问题。 | 无 fix。 |
| 🟠 中 | **ModelOpt NVFP4 在 SM120（Blackwell）下持续负载崩溃/卡死**（[#52540](https://github.com/vllm-project/vllm/issues/52540)）：故障与 NVFP4 GEMM backend 无关，指向 CUDA graphs 与 NVFP4 交互问题。 | 无 fix。 |
| 🟠 中 | **draft_model 推测解码在 TP>1 且 draft hidden_size > target 时初始化崩溃**（[#52023](https://github.com/vllm-project/vllm/issues/52023)）：TRT-LLM fused allreduce+RMSNorm workspace 按 target hidden_size 分配，空间不足。 | 无 fix。 |
| 🟠 中 | **ngram_gpu 推测解码 + xgrammar 结构化输出 + 异步调度时接受语法非法 draft token**（[#49694](https://github.com/vllm-project/vllm/issues/49694)）：导致 HTTP 500 和静默截断。 | 无 fix。 |
| 🟡 低 | **MoE 模型 v0.20 延迟/吞吐回归**（[#41306](https://github.com/vllm-project/vllm/issues/41306)）：vs v0.19.0 下降，8×H200 环境，已标记 stale。 | 无 fix。 |
| 🟡 低 | **PD 双向 KV 传输在 reasoning traces 被剥离层错误**（[#43094](https://github.com/vllm-project/vllm/issues/43094)）：DeepSeek-R1 等模型跨轮次推理痕迹清理导致结果错误。 | 无 fix，建议由上层路由处理。 |
| 🟡 低 | **混合模型前缀缓存命中率降为 0%**（[#45238](https://github.com/vllm-project/vllm/issues/45238)）：align-mode Mamba 检查点只保留 prompt 结束前最后 block boundary 状态。 | 无 fix。 |
| 🟡 低 | **GDN/KDA stale 行修复 PR**（[#51508](https://github.com/vllm-project/vllm/pull/51508)）：异步调度下 spec decode 废弃步骤导致 GDN/KDA 循环状态损坏，严重时 CUDA IMA。 | 已有修复 PR。 |
| 🟢 已修复 | **NCCL 2.31+ 堆溢出**（[#53008](https://github.com/vllm-project/vllm/pull/53008)）与 **MNNVL Lamport all-gather 多播写内存序问题**（[#53000](https://github.com/vllm-project/vllm/pull/53000)）— 两个 PR 均已提交修复。 | 待合入。 |
| 🟢 已修复 | **Rust 前端相关 issue**（[#44280](https://github.com/vllm-project/vllm/issues/44280)）：跟踪 Rust 前端与 Python API 的功能对齐路线图。 | 进行中。 |

## 对应用开发者的意义
1. **DeepSeek-V4 / Kimi-K3 均不宜直接用于生产**：当前这两个家族存在多个未修复的崩溃/正确性缺陷（长上下文退化、CUDA graph 损坏、PP/PD 拓扑下的静默输出错误等）。若需使用，请固定到已验证的版本（如 DSV4 的 0.26.x），并优先在隔离环境进行长序列 + 推测解码 + 多卡排查。
2. **升级到 v0.27.0 需谨慎**：已有 DSV4-Flash 升级后启动失败的明确报告，建议等待下一版补丁确认后再迁移。
3. **推测解码配置将走向显式化**：若依赖 vLLM 从模型路径自动识别 DFlash/EAGLE3 等推测方法，请关注 [#51338](https://github.com/vllm-project/vllm/pull/51338) 的进展——合入后需要显式指定方法，否则可能启动失败或行为变化。
4. **Kimi-K3 的 KV Cache 和 Mamba 状态管理仍在迭代**：如果你在此模型上构建 Agent，注意可能存在长上下文退化及前缀缓存命中率骤降的问题，建议在应用层做好降级/重试策略。
5. **Rust 前端持续推进**：`VLLM_USE_RUST_FRONTEND=1` 已可用，但功能尚未完全对齐 Python API server；新项目可试点但勿直接替换核心入口。
6. **新工具链已在路上**：PTX 9.4 的 `ldmatrix.s8.s4` 和 FlashInfer Cute-DSL W4A16 等 kernel 将为未来量化推理提供更低显存占用与更高吞吐，适合追踪后续基准测试结果。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 动态日报 2026-08-20

## 今日速览
今日 SGLang 生态的核心动态围绕 DeepSeek-V4 优化、DFlash2 spec decode 增强和一批新上报的严重 Bug 展开。[PR #35505](https://github.com/sgl-project/sglang/pull/35505) 为 DeepSeek-V4-Flash 的 flashinfer_mxfp4 路径启用共享专家融合；稳定性方面，MoE 静默损坏输出（[#27194](https://github.com/sgl-project/sglang/issues/27194)）与 DeepSeek-V4-Flash EP 在 SM90 上的崩溃（[#35557](https://github.com/sgl-project/sglang/issues/35557)）值得重点关注。此外，Rust 服务端重构（[#35239](https://github.com/sgl-project/sglang/pull/35239)）和 Agentic KV Cache 系统（[#21846](https://github.com/sgl-project/sglang/issues/21846)）仍在推进中。

## 版本发布与破坏性变更
今日无新版本发布。但存在以下值得注意的配置/构建变更：

- [PR #35587](https://github.com/sgl-project/sglang/pull/35587)：修复 CUDA-13 Docker 构建中 `NCCL_VERSION` ARG 被基础镜像 ENV 遮蔽导致 `pip install nvidia-nccl-cu13` 失败的问题。
- [PR #35583](https://github.com/sgl-project/sglang/pull/35583)：允许为 draft model 独立设置 HF 配置覆盖参数，避免目标模型的 long-context/multimodal 配置影响 spec decode。
- [PR #35543](https://github.com/sgl-project/sglang/pull/35543)：HiCache 现允许 retraction host pool 小于 device pool，涉及配置语义变化。

## 新模型与硬件支持
- [PR #35383](https://github.com/sgl-project/sglang/pull/35383)：AMD CI 新增 [Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) MXFP4 MI35x 夜间测试，并移除两个冗余 Qwen 任务。
- [PR #35496](https://github.com/sgl-project/sglang/pull/35496)：DFlash2 selector 支持量化目标 lm_head（ModelOpt NVFP4、compressed-tensors FP8），解决了 32GB 显存卡上量化 checkpoint 无法启用 DFlash2 的问题。
- [PR #34337](https://github.com/sgl-project/sglang/pull/34337)：多适配器 LoRA 支持扩展到 EAGLE/NEXTN/DFLASH/DSPARK 推测解码（此前仅 NGRAM + LoRA）。
- [PR #35463](https://github.com/sgl-project/sglang/pull/35463)：修复 Pixtral 多图输入在 CUDA IPC feature transport 下的 HTTP 500（`'CudaIpcTensorTransportProxy' object is not subscriptable`）。
- [Issue #28490](https://github.com/sgl-project/sglang/issues/28490)（RFC）：为 NPU（Ascend）上的 LLaDA2 dLLM JointThreshold decode 路径提出融合 tracker/coreset kernel 方案。

## 性能与优化
- [PR #35505](https://github.com/sgl-project/sglang/pull/35505)：DeepSeek-V4-Flash 在 `flashinfer_mxfp4`（trtllm-gen）路径启用共享专家融合，MoE 整体在单 stream 上执行，省去约 4 次 kernel launch。
- [PR #35538](https://github.com/sgl-project/sglang/pull/35538)：修复单 GPU 下所有并行组（DP/CFG/TP/SP/PP/VAE_DECODE/DIT 等）均预留 NCCL device buffer 的问题，可为 12GB 消费级显卡释放约 5 GiB VRAM。
- [Issue #31310](https://github.com/sgl-project/sglang/issues/31310)：FlashAttention3 后端在 H20 + MLA page-size 64 时存在性能退化，等待优化。

## 稳定性与回归
按严重程度排列：

- **数据静默损坏（高）**：[Issue #27194](https://github.com/sgl-project/sglang/issues/27194) — MoE kernels 的 stage-2 reduce 路径在 `SGLANG_MORI_NUM_MAX_DISPATCH_TOKENS_PER_RANK` 设置过小时会静默破坏 decode 输出（gsm8k=0.00），但 token 表面流畅、speculative 接受率仍很高，极具隐蔽性。
- **启动/运行崩溃（高）**：
  - [Issue #35557](https://github.com/sgl-project/sglang/issues/35557)：DeepSeek-V4-Flash 在 Hopper/SM90 上开启 expert parallel（DeepEP）时于 decode CUDA-graph 捕获阶段崩溃，且错误信息误导性强。
  - [Issue #35437](https://github.com/sgl-project/sglang/issues/35437)：DFLASH + prefill CUDA graph 在 SM120（RTX 5090）启动时 BCG capture assert，首请求触发 full-backend IndexError。
  - [Issue #34786](https://github.com/sgl-project/sglang/issues/34786)：NEXTN 验证阶段 `mamba_next_track_idx=None` 导致 `TypeError`（hybrid-mamba + spec decode + lazy buffer）。
  - [Issue #35498](https://github.com/sgl-project/sglang/issues/35498)：TP>1 时 LoRA tensor 热加载复用一次性 ForkingPickler FD，导致 scheduler 崩溃。
- **调度/性能稳定性（中）**：
  - [Issue #35241](https://github.com/sgl-project/sglang/issues/35241)：PrefillDelayer 在 DP Attention + chunked prefill 下进入混合状态反馈回路，拖垮 prefill 进度并影响调度稳定性。
  - [Issue #35270](https://github.com/sgl-project/sglang/issues/35270)：radix cache `evictable_size()` 对共享页双重计数，可能使调度器在空闲时误判可用 cache。
- **KV Cache/存储**：[Issue #35484](https://github.com/sgl-project/sglang/issues/35484) — 多 rank 共享同一 `ssd_offload_path` 导致 Mooncake bucket 文件冲突，L3 cache 不可用。
- **已有关联修复**：[PR #22615](https://github.com/sgl-project/sglang/pull/22615)（已合并）修复 Triton 后端 KV-shared 层 fp8 KV cache 崩溃；[PR #34535](https://github.com/sgl-project/sglang/pull/34535) 修复 hybrid-SSM（Nemotron-H）DP attention 低并发失败；[PR #35580](https://github.com/sgl-project/sglang/pull/35580) 与 [PR #35581](https://github.com/sgl-project/sglang/pull/35581) 改善 DFlash2 selector 的 vocab 边界处理和 shard 元数据解析。

## 对应用开发者的意义
- **显存与部署**：[PR #35538](https://github.com/sgl-project/sglang/pull/35538) 释放的约 5 GiB VRAM 对消费级 GPU 上运行 VLM/diffusion 模型意义重大；Qwen3.8 MXFP4 与量化 lm_head DFlash2（[PR #35496](https://github.com/sgl-project/sglang/pull/35496)）进一步丰富了小显存部署的硬件/量化选择。
- **推测解码兼容性**：量化 head 支持后，NVFP4/FP8 checkpoint 可启用 DFlash2，但需注意 [#35580](https://github.com/sgl-project/sglang/pull/35580) 中 `selector_top_k` 不能超出 org vocab 的限制。
- **稳定性提醒**：使用 MoE 自定义环境变量（如 `SGLANG_MORI_NUM_MAX_DISPATCH_TOKENS_PER_RANK`）的用户应关注 [#27194](https://github.com/sgl-project/sglang/issues/27194)；在生产环境使用 DeepSeek-V4-Flash expert parallel 前应确认 SM90 支持状态（[#35557](https://github.com/sgl-project/sglang/issues/35557)）。建议关注 [CI 跟踪 Issue #17050](https://github.com/sgl-project/sglang/issues/17050)（当前 3 broken / 11 flaky）来评估近期版本稳定性。
- **LoRA 服务能力**：[PR #34337](https://github.com/sgl-project/sglang/pull/34337) 落地后，多 LoRA 服务可以同时保留 EAGLE/DFLASH 等推测解码加速，对大规模 LoRA 推理场景有直接收益。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 动态日报 2026-08-20

## 今日速览

今日核心动态集中在**多后端正确性与稳定性修复**：Vulkan FA MMQ 精度问题、OpenCL MoE 确定性、RPC 越界写入均有对应 PR；**MTP/投机解码仍是社区最活跃方向**，新增 draft 模型 prefill 优化、自适应 MTP 深度等 PR；此外发布了 b10502，为 release 产物启用签名 attestation。

---

## 版本发布与破坏性变更

**b10502 发布** — CI 为签名 release 产物添加 attestation（#25933），提升构建供应链可信度。无已知破坏性变更。
- https://github.com/ggml-org/llama.cpp/releases/tag/b10502

---

## 新模型与硬件支持

**DFlash2 架构支持（PR #27342）** — 新增 DFlash2 支持，在 DFlash 基础上加入了分组动态深度卷积（grouped dynamic depthwise convolution）和 candidate selector 两个模块。对推理引擎开发者而言，这意味着新量化模型（Muse Glimmer 等）的结构兼容层需要跟进。
- https://github.com/ggml-org/llama.cpp/pull/27342

**CUDA：CDNA2 上 MXFP4 / IQ4_XS 偏好走 MMQ 路径（PR #27411、#27410）** — 在 MI210 实测 gpt-oss-20b（32 experts），PP512 场景下专家并行张量的 MXFP4 走 MMQ 有明确收益；IQ4_XS 作为 IQ4_NL 的 superblock 变体，同样纳入 MMQ 偏好子句。对 AMD Instinct 用户是纯正向的调度改进。
- https://github.com/ggml-org/llama.cpp/pull/27411
- https://github.com/ggml-org/llama.cpp/pull/27410

---

## 性能与优化

**Draft 模型 prefill 优化（PR #27396，进行中）** — 实现 draft model 的零拷贝 embedding、基于事件的同步、nextn 零拷贝及 sampler 快照。优化前 RTX 5090 实测 PP 约 1100 tok/s（PCIe 3.0 + CPU bound），属进行中的性能工作，值得追踪。
- https://github.com/ggml-org/llama.cpp/pull/27396

**AVX2 大 batch IQ 量化提速（PR #27402，进行中）** — 针对 imatrix / perplexity 场景的 512-token batch，IQ 量化在 CPU 上每次都要解码全部权重，该 PR 目标是减少冗余解码。对 CPU 用户影响较大。
- https://github.com/ggml-org/llama.cpp/pull/27402

**自适应 MTP 深度（PR #27210，进行中）** — 新增 `--spec-type draft-mtp-adaptive`，通过计数状态机动态调整 draft 深度（建议 `--spec-draft-n-max 12`）。投机解码的调参成本有望降低。
- https://github.com/ggml-org/llama.cpp/pull/27210

**OpenCL：norm 算子 local size 修复（PR #27339）** — 当 `ne00 < 64` 时 local size 须为 2 的幂；当前实现可能破坏该约束，修复后对小 hidden size 模型有正确性 + 性能双重收益。
- https://github.com/ggml-org/llama.cpp/pull/27339

---

## 稳定性与回归

按严重程度排列：

**1. [严重/数据隔离] server `-np 4 --kv-unified` 返回其他请求的完整响应（#25992）** — 在 HIP 集成 GPU（gfx1151）上，大 prompt 请求收到的是先前不同请求的原文响应，已 bisect 到 c7d87229。构建 Agent 服务时必须关注此问题，避免多租户场景下的数据串扰。
- https://github.com/ggml-org/llama.cpp/issues/25992

**2. [严重/崩溃] CUDA kernel stall 被 watchdog 杀死（#27102）** — RTX Pro 6000 Blackwell（SM120）上 Qwen3.8-27B 执行时稳定触发，Linux + CUDA，标签 `help wanted`，暂无修复 PR。
- https://github.com/ggml-org/llama.cpp/issues/27102

**3. [安全/越界写] RPC 服务 `SET_ROWS` 越界写修复（PR #26933）** — 恶意构造的 `GGML_OP_SET_ROWS` 张量可导致 OOB 写，PR 在 graph compute 前增加 `ne[2]`/`ne[3]` 维度校验。使用 llama.cpp RPC 做多机推理的应尽快合入。
- https://github.com/ggml-org/llama.cpp/pull/26933

**4. [正确性] Vulkan FA MMQ 量化计算精度修复（PR #27413）** — `qd` 可能是 fp16 denorm，`1/qd` 会溢出为 inf，导致输出错误。修复方案是将 Q 量化计算改为 fp32，但 shared memory 中 denorm flush 风险仍在，需验证。
- https://github.com/ggml-org/llama.cpp/pull/27413

**5. [正确性] OpenCL MoE scatter 不可复现（PR #26464）** — 同一二进制、同一 prompt 多次运行结果不一致，granite-3.0-3b 在 Adreno X2-90 上复现。PR 修复 MoE scatter 的确定性，合并后值得关注。
- https://github.com/ggml-org/llama.cpp/pull/26464

**6. [兼容性] Gemma 4 QAT 官方 GGUF 在 vocab 加载时 abort（#25739）** — `GGML_ASSERT(id_to_token.size() == token_to_id.size())` 失败，影响官方 gemma-4-E2B-it-qat-q4_0-gguf 加载，尚未有修复 PR。
- https://github.com/ggml-org/llama.cpp/issues/25739

**7. [崩溃] Vulkan SIGSEGV on model load（#27403）** — AMD Polaris 上 libvulkan 段错误，刚提交，尚待确认根因。
- https://github.com/ggml-org/llama.cpp/issues/27403

**8. [回归] `common_chat_parse` 静默丢弃 Qwen3-Coder 工具调用（#27363，已关闭）** — 起始于 f5919bf，若工具调用解析对应用关键路径，升级前须回归测试。
- https://github.com/ggml-org/llama.cpp/issues/27363

**其他值得关注的 MTP/SYCL 问题**：#23533（SYCL MTP 无加速，已关闭）、#23203（SYCL 显存占用异常）、#27198（SYCL tensor split 模式 DEVICE_LOST）、#25713（MTP 在 pre-Ampere GPU 上崩溃）、#27296（MTP 导致长/短推理异常）。

---

## 对应用开发者的意义

1. **多租户服务注意数据隔离**：#25992 在 HIP 集成 GPU 上复现的跨请求响应串扰，在并行度 ≥2 且开启 `--kv-unified` 时需要额外验证；若跑在 gfx1151/Strix Halo 上建议先规避。

2. **Server 生命周期管理增强（PR #27418、#27421）**：`--sleep-mode rst` 可在保留 metrics 的前提下重置进程，解决后端驱动残留内存问题；另一个 PR 修复了未知 `--tools` 导致 llama-server `std::terminate` 崩溃（#27384）。服务化场景的稳定性在持续改善。

3. **投机解码仍在快速演进**：adaptive MTP 和 draft model prefill 优化都是进行中的工作；生产环境若已使用 MTP，近期升级需关注 #23533（SYCL 无加速）、#25713（pre-Ampere 崩溃）等相关回归。

4. **RPC 调度架构正在成形（PR #26610）**：`-sm tensor` 支持、异步 graph compute、自定义 all_reduce、graph uid cache 等改动意味着 RPC 多机推理的灵活性将显著提升，但落地前建议等待 merge ready 标记。

5. **新架构验证成本**：DFlash2、MXFP4 on CDNA2 等新支持集中在 MoE 类模型，使用 gpt-oss/Qwen3 MoE 系列的应用可关注 MMQ 路径切换带来的实际吞吐变化。

---

*数据来源：github.com/ggml-org/llama.cpp（过去 24 小时 Releases / Issues / PRs 更新）*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

### 1. 今日速览

Ollama 发布 **v0.32.15-rc1**，新增模型元数据缓存以降低每次请求的开销。与此同时，**稳定性修复是今日主线**：核心维护者提交了针对流式解析错误导致请求永久挂起（#17883）和客户端断连导致 goroutine 泄漏（#17881）的修复 PR。此外，**MLX 引擎（Apple Silicon）问题集中爆发**（KV 缓存不释放、内存泄漏、极端显存请求崩溃），且 AMD ROCm 后端出现 **KV 状态串扰**（响应内容串号）高危 bug，使用相关栈的开发者需特别关注。

### 2. 版本发布与破坏性变更

- **v0.32.15-rc1（Release）**：引入模型元数据缓存（model metadata cache），减少 Ollama 每次请求的固定开销。无破坏性变更或迁移注意项。
  [Release 链接](https://github.com/ollama/ollama/releases/tag/v0.32.15-rc1) | [PR #17752](https://github.com/ollama/ollama/pull/17752)

### 3. 新模型与硬件支持

- **MLX 新增 DFlash2 模型支持（PR #17865）**：为 MLX 后端添加原生加载与推理 DFlash2DraftModel（推测解码草稿模型）的能力，实现动态短卷积与并行路径选择器，M 系列用户有望获得更好的解码加速。
  [PR #17865](https://github.com/ollama/ollama/pull/17865)
- **glm-ocr 修复（PR #17195）**：修复旧 glmocr GGUF 未注册 `<|user|>` 为结束符导致生成失控的问题，在 llama.cpp 兼容层自动设置 EOT token。
  [PR #17195](https://github.com/ollama/ollama/pull/17195)
- **ROCm / Strix Halo 回归追踪（Issue #16462）**：#16462 继续追踪 0.30+ 版本容器部署下 Strix Halo 仅识别 2GB VRAM 的回归（早于 0.24.0-rocm 正常）。今日无新修复进展，相关用户建议关注后续 ROCm 版本。
  [Issue #16462](https://github.com/ollama/ollama/issues/16462)

### 4. 性能与优化

- **模型元数据缓存（v0.32.15-rc1）**：为 `llama.cpp` 模型加载元数据增加缓存层，减少每次请求的重复解析开销。适合高并发短请求场景，建议实测首 token 延迟改善幅度。
  [Release 链接](https://github.com/ollama/ollama/releases/tag/v0.32.15-rc1)
- **跨模型卸载/重载的预填充缓存（PR #17278，进行中）**：新增 `OLLAMA_PREFILL_CACHE` 选项，将 prefill 的 KV 缓存持久化（8GiB LRU，失败自动降级），模型卸载后再次加载可跳过部分 prefill。适合反复切换模型的本地开发场景。
  [PR #17278](https://github.com/ollama/ollama/pull/17278)
- **并行限制解除尝试（PR #17144，进行中）**：qwen35 / qwen35moe 目前被硬编码限制 `numParallel = 1`（防御上游 crash）。该 PR 尝试在 llama.cpp 修复后解除限制，值得关注合入进度。
  [PR #17144](https://github.com/ollama/ollama/pull/17144)
- **MLX 引擎缺少 prefix 缓存（Issue #17829）**：M1 Ultra 实测 agent 多步会话中每步都全量重算 20-30K token 的 prefill。MLX 引擎尚未具备 prompt/prefix 缓存能力，这与 v0.32.15-rc1 针对 llama.cpp 的元数据缓存优化形成鲜明对比。Apple Silicon 用户暂无可行的即时优化手段。
  [Issue #17829](https://github.com/ollama/ollama/issues/17829)

### 5. 稳定性与回归

**（按严重程度降序排列）**

- **[严重] ROCm 后端 KV 状态串扰（Issue #17847）**：Strix Halo iGPU（gfx1151）上出现**请求 A 的响应内容污染请求 B** 的现象，短/长交替请求时必定复现。这是比性能退化更严重的正确性 bug，可能影响生产环境——若你使用该硬件组合，建议立即固定到已知无此问题的版本。
  [Issue #17847](https://github.com/ollama/ollama/issues/17847)
- **[严重] Windows UI 线程死循环（Issue #17876，已修复 PR）**：`ollama app.exe` 的嵌入式 UI 在启动后陷入 `/api/v1/settings` GET↔POST 无限循环，永久阻塞就绪状态（端口 52253）。根因是空值设置被回写。**Fix PR #17880** 已提交，该 PR 使 `POST /api/v1/settings` 不覆盖客户端未发送的字段。
  [Issue #17876](https://github.com/ollama/ollama/issues/17876) | [PR #17880](https://github.com/ollama/ollama/pull/17880)
- **[严重] 工具调用解析失败后请求永久挂起（Issue #17825，已修复 PR）**：qwen3.8 在 tool-call 解析失败返回 500 后，**重试同一请求会无限期 hang**（无日志、无响应，直至 runner 被回收）。**Fix PR #17883** 已提交：修复内置解析器在流式中途报错时回调写入无缓冲 channel 导致阻塞的问题，避免 chat/generate 被卡死。
  [Issue #17825](https://github.com/ollama/ollama/issues/17825) | [PR #17883](https://github.com/ollama/ollama/pull/17883)
- **[高] Agent 集成在 macOS 上无限挂起（Issue #17839）**：本地 Qwen 模型在 Ollama 原生 API（含 OpenAI 兼容、流式、工具调用）下正常，但 agent 集成（如 Claude Code 类工具）始终 hang。考虑与 #17825 同源的流式管道阻塞有关，建议关注上游修复验证。
  [Issue #17839](https://github.com/ollama/ollama/issues/17839)
- **[高] 客户端断连导致 goroutine 泄漏（PR #17881）**：`GenerateHandler`/`ChatHandler` 等流式路由中，客户端提前断开后后台 goroutine 持续阻塞在未缓冲 channel 上（修复 #17131）。如果你是网关层做超时/取消的开发者，此修复值得跟进。
  [PR #17881](https://github.com/ollama/ollama/pull/17881)
- **[中] MLX KV cache 内存泄漏（Issue #17875）**：MLX runner 常驻内存随**请求次数**单调增长（与上下文长度无关），必须完整卸载模型才能释放。与此前 #16698 同类。
  [Issue #17875](https://github.com/ollama/ollama/issues/17875)
- **[中] MLX Vision 高分辨率输入崩溃（Issue #17804）**：5712×4284（24.5MP）JPEG 触发约 **125GB** Metal buffer 分配并崩溃。48GB Mac 上处理高分辨率图片的所有用户都会受影响。
  [Issue #17804](https://github.com/ollama/ollama/issues/17804)
- **[中] Qwen3.8 并发调用 BUG（Issue #14621）**：DGX Spark（128GB）上 `OLLAMA_NUM_PARALLEL` 设置被忽略，并发数自动降级。qwen3.8 并行限制相关 PR #17144 仍在审查中。
  [Issue #14621](https://github.com/ollama/ollama/issues/14621) | [PR #17144](https://github.com/ollama/ollama/pull/17144)
- **[中] qwen3.8 工具循环 + 500 错误（Issue #17778）**：模型在 tool calling 循环中触发 `no user query found in messages`（500）。另外 #17855 已提交针对 Qwen3.8 系统消息归一化的修复（将历史中的 system/developer 消息合并到首个 system 消息），可能与对话渲染错误有关。
  [Issue #17778](https://github.com/ollama/ollama/issues/17778) | [PR #17855](https://github.com/ollama/ollama/pull/17855)
- **[中] gemma4 工具调用解析失败（Issue #17882）**：模型偶尔输出 `save_as='x'` 或 `save_as="x"` 而非规范的 key-value 语法，导致 `tool_calls: []` 空响应。Agent 开发者需将此类解析失败视为应用层可恢复错误。
  [Issue #17882](https://github.com/ollama/ollama/issues/17882)
- **[低] install.sh 静默失败（Issue #17860，已修复 PR）**：Ubuntu 26.04 未预装 zstd 时安装脚本中止且留下空目录。**Fix PR #17877** 已提交，添加 `.tgz` fallback。
  [Issue #17860](https://github.com/ollama/ollama/issues/17860) | [PR #17877](https://github.com/ollama/ollama/pull/17877)
- **[低] TLS 握手超时（Issue #17868）**：拉取模型偶发 `registry.ollama.ai` TLS 握手超时。尚无定位结论，网络波动导致的可能性较大。
  [Issue #17868](https://github.com/ollama/ollama/issues/17868)

### 6. 对应用开发者的意义

- **流式错误处理策略需调整**：#17883 修复了流式解析错误导致请求永久卡死的严重问题（#17825、#17839 同源），但你的应用层不应依赖服务端永不出错——**所有流式请求都必须设置客户端超时**。
- **ROCM 栈存在正确性风险**：#17847（KV 状态串扰）发生在 AMD 最新 iGPU 上，生产环境需谨慎验证响应内容一致性。
- **agent 工具调用依然是最薄弱的环节**：qwen3.8 工具循环（#17778）、gemma4 非规范语法（#17882）、解析失败后挂起（#17825）均集中在 tool-call 路径。建议对工具调用结果做额外校验和重试逻辑，不要假定 LLM 输出符合 schema。
- **MLX 引擎不适配高并发/长会话 agent 场景**：#17829（无 prefix cache）+ #17875（KV 内存泄漏）意味着 Apple Silicon 上多步 agent 的 TTFT 和内存占用会持续恶化，短期建议使用 llama.cpp 引擎或等待上游 MLX 修复。
- **Ollama Cloud 缺少 prompt cache**（#16714）：按 token 付费的 agent 场景成本影响显著，指标有回归时可留意是否与缓存未命中有关。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 动态日报 — 2026-08-20

## 今日速览

LiteLLM 今日动态集中在集群一致性、全局护栏与安全边界修复上，大量 PR 涉及 Secret Manager 初始化时机、多副本死锁重试与部署级速率限制的跨副本一致性。新提出的批量入队令牌（enqueued-token）限流与批次预校验方案，有望解决批量任务配额管理的长期痛点。Claude Code 相关的工具执行与流式响应 Bug 在今日取得关键修复进展（#37273、#37132 已关闭）。

## 版本发布与破坏性变更

- **v1.99.0-dev.1**（开发版）已发布，该版本附带 Docker 镜像 cosign 签名说明，所有镜像使用[commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0)引入的同一密钥签名，用户可通过 cosign 验证镜像完整性。无破坏性变更标注。
  - [Release 链接](https://github.com/BerriAI/litellm/releases)

## 新模型与硬件支持

- 新增 **Amazon Bedrock AgentCore Web Search** 搜索提供者（PR #36331），支持通过 SigV4 调用 AWS_IAM 网关，提供 `agentcore` 搜索后端，面向 Bedrock 用户提供 AWS 原生搜索能力（此前需第三方搜索密钥）。[PR #36331](https://github.com/BerriAI/litellm/pull/36331)
- 多项**模型与价格表新增请求**仍在等待合并，包括 GPT-5.4 系列（ChatGPT 订阅）、Llama-4 Scout、deepseek-v4-flash:free、canopywave 等，集中指向 `model_prices_and_context_window.json` 的数据库更新。[Issue #25954](https://github.com/BerriAI/litellm/issues/25954)、[#28307](https://github.com/BerriAI/litellm/issues/28307)、[#28306](https://github.com/BerriAI/litellm/issues/28306)、[#28309](https://github.com/BerriAI/litellm/issues/28309)、[#28211](https://github.com/BerriAI/litellm/issues/28211)
- Databricks 模型价格存在过期问题，社区已提交 PR 更新成本数据（Issue #31194 已关闭）。[Issue #31194](https://github.com/BerriAI/litellm/issues/31194)

## 性能与优化

- **OTel 性能优化**（PR #37542）：按凭据构建 tracer Resource 的流程被重构为每 logger 构建一次，避免每次请求时扫描全部已安装包入口点（约 3ms 延迟和 200 次阻塞文件打开），显著降低事件循环开销。[PR #37542](https://github.com/BerriAI/litellm/pull/37542)
- **Least-busy 路由计数器钳制**（PR #34444）：修复并发竞态下请求计数器被过度递减导致路由决策异常的缺陷，纳入来自 #25393 的修复。[PR #34444](https://github.com/BerriAI/litellm/pull/34444)
- **批次入队令牌限流**（PR #37539）：新增 `batch_enqueued_token_limit` 可配置项（key/team 级），按队列令牌进行限流，任务完成或取消时自动退还额度，解决大批次任务命中 RPM/TPM 上限的问题；同时支持总限额与静态文件级限额组合。[PR #37539](https://github.com/BerriAI/litellm/pull/37539)
- **批次文件快速失败校验**（PR #37527）：新增 `general_settings.max_batch_file_size` 和 `batch_file_validation` 开关，在文件上传至 provider 前进行快速失败校验，避免错误批次文件流式传输后延迟报错。[PR #37527](https://github.com/BerriAI/litellm/pull/37527)
- **Vertex AI 区域成本修正**（PR #37543）：Google 自 2026 年 7 月起对非 global 区域端点加收 1.1 倍费率，此 PR 在成本跟踪中新增 `regional_multiplier` 字段，使区域部署的计费统计不再少算 10%。[PR #37543](https://github.com/BerriAI/litellm/pull/37543)

## 稳定性与回归

**高优先级（已修复或已推送修复）**

- **Claude Code 工具双重执行 Bug**（#37273，已关闭）：`/v1/messages` 流式响应中对单个 `tool_use` block 发出两次 `content_block_stop`，导致工具被重复执行。已有修复。 [Issue #37273](https://github.com/BerriAI/litellm/issues/37273)
- **Bedrock OpenAI GPT-5.6 路由挂起**（#37132，已关闭）：Responses 路由挂起及缺少 chat/stream 转换的问题，关联 #36922 与 #36016，已修复。 [Issue #37132](https://github.com/BerriAI/litellm/issues/37132)
- **Postgres 死锁重试**（PR #34887）：将对 Prisma 死锁（P2034/40P01）纳入重试分类，避免并发颠簸时静默丢弃 spend 增量。已关闭。 [PR #34887](https://github.com/BerriAI/litellm/pull/34887)
- **Helm 默认镜像修正**（PR #37491）：将 chart 默认 `image.repository` 指向 `ghcr.io/berriai/litellm`，消除与遗留仓库的混淆。已关闭。 [PR #37491](https://github.com/BerriAI/litellm/pull/37491)

**中优先级（已报告或进行中）**

- **MCP 自动执行机制劫持客户端工具**（#37031）：当 MCP 工具配置 `require_approval: "never"` 时，代理端自动执行逻辑会覆盖 Claude Code 等客户端自身工具，导致所有非 MCP 工具报 "Error executing tool"。尚无修复 PR。[Issue #37031](https://github.com/BerriAI/litellm/issues/37031)
- **MCP Server 更新时静默丢弃 OAuth 字段**（#37258）：`PUT /v1/mcp/server` 在 `delegate_auth_to_upstream=true` 时清空 `authorization_url`、`token_url`、`oauth2_flow` 字段。尚无修复 PR。[Issue #37258](https://github.com/BerriAI/litellm/issues/37258)
- **provider_budget_config 时间重置异常**（#37261）：未配置 Redis 时 `budget_reset_at` 被计算为 57 年后，月度预算永不重置。尚无修复 PR。[Issue #37261](https://github.com/BerriAI/litellm/issues/37261)
- **失败请求 spend log 缺失部署归属信息**（PR #37520，open）：失败请求的日志中 model id、api base、model group 为空白，导致无法定位故障部署；已有修复 PR。 [PR #37520](https://github.com/BerriAI/litellm/pull/37520)
- **批次文件缺少护栏**（PR #37519，open）：此前批处理 JSONL 上传绕过护栏直接进入 provider，现在每条记录会经过护栏分发扫描。[PR #37519](https://github.com/BerriAI/litellm/pull/37519)
- **部署级 TPM 限制不跨副本统计**（#27736，已关闭）：多副本部署中 `tpm` 限制实际变成 `tpm × N_replica`，现已修复。[Issue #27736](https://github.com/BerriAI/litellm/issues/27736)
- **/v1/memory CRUD 未授权访问**（#27722，已关闭）：跨团队 key 可被任意团队 RUD，存在越权风险，已修复。[Issue #27722](https://github.com/BerriAI/litellm/issues/27722)

**低优先级/长期开放**

- **全局护栏禁用字段键名不匹配**（#25487）：元数据中 `disable_global_guardrails`（复数）与代码中检查的 `disable_global_guardrail`（单数）不匹配，导致配置无效。[Issue #25487](https://github.com/BerriAI/litellm/issues/25487)
- **盐轮换支持缺失**（#12448）：`salt_key` 不支持类似 `master_key` 的在线轮换机制，涉及时长日志时会泄露敏感密钥。[Issue #12448](https://github.com/BerriAI/litellm/issues/12448)
- **UI 时区显示偏移**（#25234，已关闭）：SpendLogs 时间戳缺失时区导致 Request Logs 页面显示滞后数小时，已修复。[Issue #25234](https://github.com/BerriAI/litellm/issues/25234)
- **Redis 缺失时横幅自动抑制**（PR #36987，已关闭）：通过数据库心跳检测确认单 worker 部署后自动隐藏 "No Redis configured" 横幅，无需手动设置环境变量。[PR #36987](https://github.com/BerriAI/litellm/pull/36987)
- **企业版审计日志默认开启**（PR #37518）：`store_audit_logs` 改为三态逻辑，企业版未显式设置时自动默认开启。[PR #37518](https://github.com/BerriAI/litellm/pull/37518)

## 对应用开发者的意义

- **Claude Code 接入者应重点关注**：工具重复执行、MCP 自动执行对客户端工具的劫持、以及 Anthropic → Responses API 桥接下缓存计费缺失（#36091）等问题，直接影响 Agent 工具调用的可靠性与计费准确性，建议优先验证并发场景下的工具行为。[Issue #36091](https://github.com/BerriAI/litellm/issues/36091)
- **批量任务使用者**：新的批次预校验和入队令牌限流机制将改变批量请求的提交方式，使用 `batch_enqueued_token_limit` 可避免大任务量 429 问题，同时保持配额可见性；老版本需自行处理失败后的退款逻辑。
- **依赖 Secret Manager 的团队**：PR #37544 修复了 Secret Manager 初始化时机问题，此前的 split image 上 Secret Manager-only 的密钥会解析为 `None`，升级后请验证模型凭据是否正确加载。[PR #37544](https://github.com/BerriAI/litellm/pull/37544)
- **MCP 服务配置需留意**：当前 PUT `/v1/mcp/server` 更新 OAuth 配置时存在字段丢失风险（#37258），在修复落地前，更新 MCP Server 信息后请重新确认 OAuth 参数。
- **成本与配额跟踪**：与供应商计费对照时，请留意 Spark 成本统计中地区性端点可能存在的 10% 偏差（修复已在 PR #37543 提供），并根据自身部署区域评估影响。

> 报告生成时间：2026-08-20 08:00 UTC。数据来源：GitHub Issues/PRs 更新时间在过去 24 小时内（统计区间 8 月 19 日 08:00 至 8 月 20 日 08:00）。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 动态日报 — 2026-08-20

## 今日速览
过去 24 小时 Unsloth 动态集中在 **Studio 桌面端稳定性修复** 与 **推理/嵌入能力扩展** 两条线：一方面 `#9008` SQLite 死锁、`#9239` 安全扫描误报等 Studio 问题均有对应修复 PR（`#9234`、`#9300`），另一方面 UEmbed 嵌入训练管线（`#8712`/`#9322`）与多模型并发加载等功能进入活跃开发期。此外，针对 AMD Strix Halo 的 VRAM 计数修复 PR `#8863` 持续推进，值得相关硬件用户关注。

## 新模型与硬件支持
- **UEmbed 嵌入支持持续推进**：PR `#8712` 为 `FastSentenceTransformer` 增加 Alibaba-NLP/UEmbed-2B dense + SPLADE 微调支持；PR `#9322` 进一步拆分出 offset pooling 与 SPLADE 稀疏输出组件，训练脚本单独跟进。嵌入训练与推理链路正在成形。
  https://github.com/unslothai/unsloth/pull/8712
  https://github.com/unslothai/unsloth/pull/9322

- **EXL3 (ExLlamaV3) 量化后端**（进行中）：PR `#7115` 增加 ExLlamaV3 作为 bitsandbytes 的替代量化后端，支持 2/3/4/6/8-bit 与分数位率，并可量化 MoE 模型——在 transformers 5 下 bitsandbytes 无法处理 MoE，这是一个实质性的后端补充。
  https://github.com/unslothai/unsloth/pull/7115

- **MLX 模型上下文长度修复**（进行中）：PR `#8125` 修复 Studio 中 MLX 模型被硬编码为 4096 token 的问题，改为从模型配置读取真实上下文并传递到 KV cache，同时移除 `max_seq_length` 对生成的无效限制。
  https://github.com/unslothai/unsloth/pull/8125

- **AMD Windows VRAM 上报修复**（进行中）：PR `#8863` 通过按 LUID join 显卡适配器计数器，修复 Windows ROCm 下 AMD VRAM 使用量无法读取的问题（对应 issue `#8862`、部分覆盖 `#7449`）。
  https://github.com/unslothai/unsloth/pull/8863

## 性能与优化
- **聊天压缩策略重构**：PR `#9162` 将“滚动上下文窗口”从直接裁剪旧消息，改为保留历史并通过“重置 epoch”方式压缩，避免长对话上边界反复移动、信息被逐轮蚕食的问题。实测 12 轮对话中边界移动 8 次的现象将得到改善。
  https://github.com/unslothai/unsloth/pull/9162

- **被驱逐轮次不再丢失**：PR `#9074` 让滚动上下文窗口裁剪掉的完整轮次仍留在可搜索状态，支持后续检索召回，是与 `#9162` 同系列的长对话记忆改进。
  https://github.com/unslothai/unsloth/pull/9074

- **量化 KV cache 不再因张量并行被丢弃**：PR `#8939` 修复了 tensor parallelism 开启时 `load_model` 仅允许 f16/bf16/f32 的硬编码逻辑，此前量化 KV cache 会被静默替换为 f16 并导致预算失真。
  https://github.com/unslothai/unsloth/pull/8939

- **xFormers attention mask 跨设备修复**（已合并）：PR `#8516` 修复多 GPU CPT/填充-free 训练时 `attention bias` 与 query 不在同一设备导致的报错。
  https://github.com/unslothai/unsloth/pull/8516

## 稳定性与回归
按严重程度排列：

1. **Studio 服务完全死锁（severity: 高，已有 fix）**  
   `#9008`：`unsloth studio` 运行数分钟后所有线程阻塞在 `sqlite3.connect()/close()`，进程存活但停止接受任何连接。  
   修复 PR `#9234`（已合并）将 SQLite 读操作移出事件循环线程，解决全局 VFS 互斥锁导致的假死问题。  
   https://github.com/unslothai/unsloth/issues/9008
   https://github.com/unslothai/unsloth/pull/9234

2. **macOS Desktop 0.1.800-beta 安全扫描误杀所有模型（severity: 高，已关闭）**  
   `#9239`：扫描器将所有模型（包括无自定义代码的模型）判定为 CRITICAL 并阻止微调。该 issue 已关闭，说明存在版本特有回归。  
   https://github.com/unslothai/unsloth/issues/9239

3. **图像 Transform 功能在 v0.1.800-beta 回归（severity: 中，已关闭）**  
   `#9241`：上传图片做转换时报 `Casting a quantized model to a new "dtype" is unsupported`，该版本已不可用。  
   https://github.com/unslothai/unsloth/issues/9241

4. **Apple M4/M3 系列问题多线并发**  
   - `#8610`：macOS app 第二次启动报错（已关闭）。  
   - `#8566`：M4 上加载本地 GGUF 时 `llama-server` 启动失败 + 空转内存占用过高（已关闭）。  
   - `#9279`：M3 24GB 加载 Qwen 3.8 27B 任意官方量化时屏幕闪烁、系统接近崩溃；同机 LM Studio 无此问题（开启中）。  
   https://github.com/unslothai/unsloth/issues/8610
   https://github.com/unslothai/unsloth/issues/8566
   https://github.com/unslothai/unsloth/issues/9279

5. **自定义 endpoint 工具调用永久失败（severity: 中，已有 fix PR）**  
   `#9039`：工具调用返回后，chat history 中 `tool_calls[].function.arguments` 被污染，后续每次请求都报 `invalid_request_error`。  
   修复 PR `#9300` 在重放历史前做参数类型纠正。  
   https://github.com/unslothai/unsloth/issues/9039
   https://github.com/unslothai/unsloth/pull/9300

6. **AMD Strix Halo 相关回归（持续跟踪中）**  
   - `#7371`：预编译 b10079 在 Radeon 8060S 上出现性能回退（ROCm 7.13）。  
   - `#6834`：128GB 统一内存的 Strix Halo 被限制为只使用 22GB，无法加载 21.3GB GGUF。  
   两者均未标记 fix PR，但 `#8863` 的 VRAM 上报修复有助于后续归因。  
   https://github.com/unslothai/unsloth/issues/7371
   https://github.com/unslothai/unsloth/issues/6834

7. **预编译失败静默降级 CPU-only（severity: 中，新报）**  
   `#9255`：llama.cpp 预编译安装失败后从源码编译，若无 `nvcc` 则产出 CPU-only build 且安装仍报告成功，GPU 用户在无感知状态下失去加速。  
   https://github.com/unslothai/unsloth/issues/9255

8. **Studio 其他稳定性问题（低-中危）**  
   - `#8916`：Claude Code 响应超时时 Studio 崩溃（已关闭）。  
   - `#9140`：首次启动 setup 报锁错误（已关闭）。  
   - `#8868`：`-H 0.0.0.0` 在 macOS 上报错 IP 地址（已关闭）。  
   - `#8927`：部分下载完成后点击“继续”无响应（已关闭）。  
   - `#279`：LoRA 训练后 `do_sample=False` 下连续推理结果不一致，该老 issue 在 8 月 19 日有动态，可能仍在推进。  
   https://github.com/unslothai/unsloth/issues/8916
   https://github.com/unslothai/unsloth/issues/9140
   https://github.com/unslothai/unsloth/issues/8868
   https://github.com/unslothai/unsloth/issues/8927
   https://github.com/unslothai/unsloth/issues/279

## 对应用开发者的意义
- **API 端工具调用可靠性将改善**：`#9039` 的修复 PR `#9300` 落地后，自定义 OpenAI-compatible endpoint 的 tool-calling 不再污染历史记录，Agent 类应用在使用 Studio 作为网关时可以减少一类顽固故障。  
- **上下文管理正在从“裁剪”走向“压缩+检索”**：`#9074` 与 `#9162` 的组合意味着长会话应用不再丢失早期关键信息，且压缩后上下文边界稳定。对在此之上做长对话 RAG 或 Agent 记忆的开发者是直接利好。  
- **多模型并发是当前最集中的功能诉求**：`#8488`、`#9257`、`#9294` 分别请求多服务器多模型并行、按设备 pinning 加载、以及旧模型清理能力，说明 Studio 用户已不满足于单模型推理服务器，正在向多模型网关演进。  
- **远程访问能力成为显性需求**：`#9207`（不依赖 Cloudflare 的远程访问）与 `#9103`（Desktop 作为远程 Unsloth 的 thin client）均指向同一场景：本地桌面连远程 GPU 集群。这与 Codex/Claude Code 工作流对接紧密。  
- **上下文用量观测缺失**：`#9327` 请求在 API 中暴露 context consumption——Agent 应用无法感知上下文水位，撞到 context limit 时无预兆。在正式支持前，开发者需要自行兜底处理。  
- **Mac/AMD 生态仍碎片化**：macOS Metal 与 AMD ROCm 下各有一批稳定性问题，说明非 NVIDIA 平台在 Studio 中尚不稳定，在 Apple Silicon/Strix Halo 上部署生产服务需谨慎评估。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*