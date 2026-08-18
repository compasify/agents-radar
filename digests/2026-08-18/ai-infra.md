# AI 基础设施日报 2026-08-18

> 生成时间: 2026-08-17 23:11 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施生态横向对比报告（2026-08-18）

## 1. 生态全景

AI 基础设施正处在“新模型驱动、稳定性承压、后端多元”的快速演进期。DeepSeek-V4、Kimi-K3、Qwen3.8 等新模型栈在各大项目中的适配节奏极快，但长上下文与投机解码组合下的确定性崩溃、静默错误频发，生产风险显著上升。硬件后端方面，ROCm/AMD 与 Intel XPU/SYCL 已从配角变成与 CUDA 并行创新的赛道，CUDA 13.4（Rubin）预发布适配也已启动。KV cache 架构与投机解码是推理引擎当前的核心竞争点。Agent 工作负载（工具调用、多轮长会话）则把可观测性与正确性缺口放大为直接的经济损失——Ollama 云端模型 `</think>` 泄漏导致 193 次工具调用、约 31M token 消耗，是今日最典型的行业事件。

## 2. 各项目活跃度对比

| 项目 | Releases | 活跃 PR（提及） | 活跃 Issues（提及） | 今日焦点 |
|---|---|---|---|---|
| vLLM | 0 | 9 | 17 | KV cache 演进、ROCm 完善、MTP 非法内存访问 |
| SGLang | 0 | 16 | 19 | DeepSeek-V4/DSPARK 多起高危 bug、config 架构重构 |
| llama.cpp | 4（b10472/b10470/b10456/b10455） | 14 | 14 | SYCL 后端增强、新架构接入、多项 crash 修复 |
| Ollama | 0 | 12 | 20 | 0.32.14 回归、qwen3.8 稳定性、Agent 死循环事件 |
| LiteLLM | 0 | 10 | 13 | 预算执行绕过 bug、批量 API 语义修复、新模态能力 |
| Unsloth | 0 | 18 | 17 | Studio 工具调用链路修复、ROCm 适配、SQLite 死锁 |

> 注：PR/Issue 数为日报中明确列举的高价值项，非当日全量。

## 3. 模型支持竞速

| 前沿模型 / 能力 | 领跑者 | 现状与风险 |
|---|---|---|
| DeepSeek-V4 全家桶 | SGLang | 适配最快（DSPARK/DSA/hierarchical cache），但静默错误与挂起问题最密集，高危 issue 无 fix PR 比例高 |
| Kimi-K3 | vLLM / SGLang 并列 | 均面向 ROCm/gfx950 优化；vLLM 已集成 AITER fused-moe，SGLang 推进 12-head MLA fp8 Gluon decode |
| Qwen3.8 / 3.5 系列 | 均受阻 | vLLM MTP+FP8 崩溃、llama.cpp tensor split 崩溃、Ollama 工具调用挂起，均无修复 PR |
| Granite interleaved SWA | llama.cpp | 独家接入，为即将发布的 Granite 模型做准备 |
| dots3-note（DSA+SWA） | llama.cpp | 独家接入，需扩展 llama-kv-cache-dsa |
| MLX / Ling-3.0 | Ollama | 独家（Apple silicon 路径） |
| FLUX 3 视频 / OCR / 医疗文本 | LiteLLM | 网关级能力接入，零模型采购成本 |

整体判断：**SGLang 在前沿模型特性上冲得最快，llama.cpp 在新架构接入上最稳，vLLM 在硬件后端广度上最均衡；Ollama、LiteLLM 不追模型实现，而是在生态位（本地体验/网关能力）上做差异化覆盖。**

## 4. 性能优化前沿

| 方向 | 代表工作 |
|---|---|
| KV cache 架构 | vLLM #50779 可增长 KV cache（按需扩展物理块）；SGLang #20415 统一 Hybrid Radix Cache；llama.cpp #26689 量化 KV cache 切换 TILE 内核 |
| 采样 / 批处理 | vLLM #50465 Model Runner V2 按 TP 分片采样，显存峰值降至 1/P；SGLang #35126 EAGLE draft-extend CUDA graph staging 拆分 |
| 量化内核 | vLLM #49529 利用 CUDA 13.4 `ldmatrix.s8.s4` 硬件符号扩展；llama.cpp b10456 SYCL 量化 cpy 调度修复（Arc 70 显著提速） |
| 分布式推理 | llama.cpp #26490 DeepSeek 4 tensor parallel；SGLang #34230 NCCL 对称内存分配修复；vLLM #43018 ROCm CPU offload 调优 |
| 算子 / 后端 | SGLang #35176 KDA 输入投影融合为单 GEMM；llama.cpp b10455 SYCL 新增 ADAMW/SGD 算子；vLLM #52379 CUDA 13.4 预发布镜像流水线 |

火力集中度排序：**KV cache > 投机解码/采样路径 > 量化内核 > 分布式/多后端**。其中 KV cache 已从显存管理问题演变为与投机解码、MoE、长上下文耦合的端到端调度问题。

## 5. 分层定位差异

| 项目 | 层次 | 核心形态 | 关键差异 |
|---|---|---|---|
| vLLM | 生产推理引擎 | 大规模集群服务 | PagedAttention/EngineCore，以稳定性和标准化见长，后端支持最广 |
| SGLang | 前沿推理引擎 | 大规模集群服务 | RadixCache 前缀缓存 + 新模型特性绑定最紧（DSPARK/DSA） |
| llama.cpp | 本地/边缘运行时 | 单机 / GGUF / 多后端 | ggml 生态与 SYCL/OpenCL 等差异化后端，极致轻量 |
| Ollama | 用户友好本地运行时 | 桌面 / Apple silicon / 云模型入口 | MLX 优先 + 模型仓库 + Anthropic 兼容端点 |
| LiteLLM | 网关 / 控制面 | 独立代理服务 | 多 provider 路由、预算执行、批量 API、可观测性 |
| Unsloth | 训练/微调框架 | 单卡/多卡 + Studio | LoRA/QLoRA + 图形化 Studio，上游环节 |

价值链路：**Unsloth（微调）→ vLLM/SGLang（生产部署）→ LiteLLM（统一网关）→ Ollama/llama.cpp（本地/边缘分发）**。其中 vLLM 与 SGLang 在功能面重叠度最高，但设计取舍明显分化：vLLM 偏向保守可靠，SGLang 偏向新特性先行。

## 6. 值得关注的趋势信号

1. **新模型适配速度与正确性保障严重失衡**。DSPARK 静默标识符损坏、MTP 非法内存访问、DSV4 长上下文挂起，均指向“抢新模型先发而压缩验证周期”的行业性问题。技术决策者应将新模型栈的生产准入标准提升为“目标硬件 + 目标长度 + 目标并发”全矩阵回归。

2. **静默错误是 Agent 工作负载的头号威胁**。DSPARK 静默损坏、DSA 超长单请求静默跳过注意力、Ollama 视觉双图坍缩、qwen3.8 重试永久挂起——同步调用中容易被捕获，异步 Agent 循环中则直接造成成本失控与错误扩散。**Agent 应用应强制配置输出 schema 校验 + token 审计看门狗 + 工具调用熔断上限。**

3. **KV cache 架构演进进入深水区**。从静态预留到可增长（vLLM）、从多份重复实现到统一 radix cache（SGLang）、从通用到量化专用 TILE 内核（llama.cpp），这不再是显存管理问题，而是与投机解码、MoE、长上下文共同耦合的端到端调度问题。

4. **硬件后端多元化从“跟随”变为“并行创新”**。llama.cpp SYCL 在 Intel GPU 上实现 42%~169% decode 加速；SGLang/vLLM 在 ROCm 上适配 Kimi-K3；Ollama MLX 成为 Apple silicon 事实标准；CUDA 13.4 预发布适配已启动。**不建议再以 CUDA-only 做架构假设。**

5. **网关层开始承担“模型供应链管理”责任**。LiteLLM 预算绕过 bug 与 Ollama 本地 401 鉴权串线，说明网关正确性直接影响成本与安全；批量 API 语义收紧、流式计费修复、新模态 passthrough，均指向网关从“请求转发”向“治理与控制平面”进化。

6. **本地运行时正在吸纳云端 Agent 生态**。llama.cpp 桌面应用、Ollama 的 Claude Code 兼容端点、Unsloth Studio 的 LAN/远程控制面——三条路径通往同一目标：把本地模型变成受限 Agent 的默认后端。选型本地模型时，应将“可靠工具调用 / 结构化输出 / 长会话缓存”纳入硬性指标。

**给 Agent / 应用开发者的三个立即行动项：**
- 审计工具调用循环的超时、重试与成本上限（参考今日 31M token 死循环事件）；
- 对使用 DSPARK / DSV4 / FP8+MTP 等新栈的生产流量，增加输出分布异常告警与静默错误检测；
- 将 200K+ 长上下文与“失败后重试”场景加入每次升级的必测用例。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

## 2026-08-18 vLLM 动态日报

### 1. 今日速览
过去 24 小时 vLLM 无正式版本发布，动态集中在 **ROCm 支持完善、KV cache 架构演进与若干高关注度稳定性问题**。最值得关注的是 [PR #50779](https://github.com/vllm-project/vllm/pull/50779)（可扩展/可增长 KV cache，Draft 阶段）与 [PR #50465](https://github.com/vllm-project/vllm/pull/50465)（Model Runner V2 采样阶段按 TP 分片，减少显存峰值），两者均处于 review/stack 状态。稳定性方面，MTP 投机解码非法内存访问问题（[#40756](https://github.com/vllm-project/vllm/issues/40756)）持续讨论，另有 v0.27.0 引擎空闲后永久 stall 的新 report（[#51921](https://github.com/vllm-project/vllm/issues/51921)）。

---

### 2. 版本发布与破坏性变更
无正式 Release。以下合并中/待合入的 PR 可能引入行为变化，建议关注：

- **[PR #52660](https://github.com/vllm-project/vllm/pull/52660)（Core）**：移除 `is_ec_consumer` 检查，修复独立 v1 EngineCore 批处理队列跳过 token sampling 的问题。此前 `is_ec_consumer=False` 的标准引擎配置可能受影响，此修复将统一行为。
- **[PR #52661](https://github.com/vllm-project/vllm/pull/52661)（Bugfix）**：恢复 `vllm.transformers_utils.tokenizer` shim。此前 #35024 删除了该模块，但 `lm-format-enforcer==0.11.3`（见 `requirements/common.txt`）仍依赖该路径做顶层 import，影响结构化输出功能。
- **[PR #52632](https://github.com/vllm-project/vllm/pull/52632)（Bugfix，DeepEP-V2）**：要求 `expert_tokens_meta` 在 decode/cudagraph 路径必须为 `None`（空 `recv_expert_num_tokens`），否则启用默认编译的 serving 会在启动时确定性崩溃。

---

### 3. 新模型与硬件支持
- **[Issue #50682](https://github.com/vllm-project/vllm/issues/50682)（Kimi-K3 ROCm roadmap）**：vLLM 上游跟踪 Kimi-K3 在 ROCm 上的 feature enablement 与性能优化。Day 0 已集成 AITER fused-moe（a16w4 / a8w4），后续或涉及 Flydsl/opus 等 kernel 适配。
- **[PR #52628](https://github.com/vllm-project/vllm/pull/52628)（ROCm / DeepSeek V4）**：为 DeepSeek V4 开启 fused AR draft metadata 更新。此前 ROCm 路径因 sparse SWA 被禁用而无法启用 fused multi-step draft decode（基于 #46849 的恢复工作）。
- **[PR #52379](https://github.com/vllm-project/vllm/pull/52379)（Build/CUDA 13.4）**：新增 CUDA 13.4rc1 预发布镜像流水线，面向下一代 Rubin（`sm_107`）。通过 overlay NVIDIA `cuda-toolkit==13.4.0rc1` PyPI 包并固定兼容的 PyTorch nightly，解决 13.4 容器镜像尚未可用的问题。
- **[Issue #51964](https://github.com/vllm-project/vllm/issues/51964)（Bug，已关闭）**：MI308X + ROCm 7.2.3 上 Kimi-K2.7-Coder 启动失败：`mla_gluon requires gfx950 (CDNA4), got gfx942`。当前 gfx942（MI300 系列）硬件不支持该 kernel，需关注后续是否降低要求或增加 fallback。

---

### 4. 性能与优化
- **[PR #50465](https://github.com/vllm-project/vllm/pull/50465)（Model Runner V2，batch-sharded sample）**：避免在采样前实例化完整 target logits（`O(batch_size * (num_spec_tokens + 1) * vocab_size)`）。通过沿 TP 维度分片 logits 与 sampler 输入，将每 step 显存分配降至原来的 `1/P`，并减少 all-gather 的数据量——对 MoE 大类模型和长上下文 batch 效果显著。
- **[PR #50779](https://github.com/vllm-project/vllm/pull/50779)（Extensible / growable KV cache）**：Draft 阶段。支持可选（opt-in）增长的 KV cache，按需扩展物理块而非静态预留，有助于减少显存浪费，提升 cache 利用率。该 PR stacked on #51718，合并周期较长。
- **[Issue #49529](https://github.com/vllm-project/vllm/issues/49529)（Perf, W4A8-INT8）**：追踪采用 PTX ISA 9.4（CUDA 13.4）新增的 `ldmatrix.sync.aligned.m8n16.s8.s4` 指令，在 shared-memory matrix load 阶段完成 INT4→INT8 硬件符号扩展，减少 W4A8 路径额外的 unpack 开销（等待 CUDA 13.4 工具链落地）。
- **[Issue #29134](https://github.com/vllm-project/vllm/issues/29134)（Spec decode async）**：提案消除 spec-decode 路径两个 Host↔GPU 同步点（`_get_valid_sampled_token_count` 及随后的 `seq_lens_cpu` 计算），使 input-prep 与 model forward 完全重叠。受限于 CPU 计数依赖，目前仍在设计阶段。
- **[PR #43018](https://github.com/vllm-project/vllm/pull/43018)（ROCm / CPU offload）**：调整 `hipMemcpyBatchAsync` 参数以对齐 ROCm 7.13+ 行为，并改善 7.14x 中的 offload 性能。

---

### 5. 稳定性与回归

按严重程度排列：

| 严重度 | Issue/PR | 问题描述 | 状态 |
|---|---|---|---|
| **高** | [#40756](https://github.com/vllm-project/vllm/issues/40756) | **MTP 投机解码非法内存访问**（Qwen3.6-27B-FP8, v0.19.1, `num_spec_tokens=5`），发生在长序列场景 | OPEN，38 评论，无 fix PR |
| **高** | [#51921](https://github.com/vllm-project/vllm/issues/51921) | **v0.27.0 引擎空闲约 1 分钟后永久 stall**。4 节点 TP=4（GB10/sm_121a, aarch64），`shm_broadcast` writer 饥饿，请求无法到达 scheduler；API 对 `/v1/models` 仍响应但实际不执行推理 | OPEN，12 评论，需紧急排查 |
| **中高** | [#51744](https://github.com/vllm-project/vllm/issues/51744) | **`vllm-openai:latest` 镜像中 Gemma4 启动失败**：镜像内 Transformers 升至 5.15.0 后与当前 vLLM 0.27.0 不兼容（`yasu-oh/gemma-4-31B-it-qat-NVFP4`, TP=2, FP8 KV） | OPEN，15 评论，👍 8 |
| **中高** | [#34948](https://github.com/vllm-project/vllm/issues/34948) | **Qwen3.5 在 H200 上 GDN kernel 触发 CUDA Illegal Memory Access**（vLLM nightly, CUDA 13.0） | OPEN，24 评论，无明确 fix |
| **中** | [#52023](https://github.com/vllm-project/vllm/issues/52023) | **draft_model 投机解码在 TP>1 且 draft hidden_size > target 时初始化崩溃**：TRT-LLM fused allreduce+RMSNorm workspace 仅按 target hidden_size 分配，导致越界 | OPEN；[PR #52193](https://github.com/vllm-project/vllm/pull/52193)（WIP）诊断补丁已覆盖所有 workspace 创建路径，尚未合入 |
| **中** | [#42895](https://github.com/vllm-project/vllm/issues/42895) | **NIXL disaggregated 在 Qwen3.5 hybrid 模型上失败**：prefill TP4 与 decode DP8 物理 block size 不同（stale） | OPEN（stale 标记） |
| **中** | [#48645](https://github.com/vllm-project/vllm/issues/48645) | **deepseek_v4 parser 缺陷**：回复缺少 `</think>` 时，整个 answer 被路由到 `reasoning_content`，且 trailing EOS 未剥离 | OPEN，6 评论 |
| **中** | [#40896](https://github.com/vllm-project/vllm/issues/40896) | **vLLM v1 前缀缓存正确性**：`temperature=0` 下，首个请求与后续相同前缀请求的采样结果不一致 | OPEN，9 评论 |
| **低** | [#37431](https://github.com/vllm-project/vllm/issues/37431) | **Mamba-2 Triton kernel 在 SM121（DGX Spark）** 异步模式触发 `cudaErrorIllegalInstruction`；仅 `CUDA_LAUNCH_BLOCKING=1` 可绕过 | OPEN（带 stale？未标记） |

---

### 6. 对应用开发者的意义

1. **若生产环境使用 Qwen3.5/3.6 + FP8 + MTP/投机解码：** 请暂时保持 v0.19.0 以下或关闭 MTP 解码（[#40756](https://github.com/vllm-project/vllm/issues/40756)），此问题在长序列下可导致 GPU 级 illegal memory access，影响同卡其他任务。
2. **多节点/多卡部署时留意引擎空闲后永久 stall：** 若使用 v0.27.0 + GB10 + aarch64 多节点 TP，建议设置健康检查并对空闲超过 1 分钟的实例主动重启，或在 0.27.1+ 验证后再升级（[#51921](https://github.com/vllm-project/vllm/issues/51921)）。
3. **结构化输出依赖 `lm-format-enforcer` 的团队：** 关注 [PR #52661](https://github.com/vllm-project/vllm/pull/52661) 是否合入，否则在最新镜像中 `from vllm.transformers_utils.tokenizer import MistralTokenizer` 会失败，影响 JSON Schema / grammar 类受限生成。
4. **Rust frontend 仍是实验特性：** Feature parity 追踪见 [#44280](https://github.com/vllm-project/vllm/issues/44280)，不建议在要求完整 API 兼容性的生产环境启用 `VLLM_USE_RUST_FRONTEND=1` 自定义服务。
5. **RL + LoRA 训练链路上的用户：** 当前 sleep/wake 与 LoRA adapter 生命周期存在已知正确性缺口（[RFC #48297](https://github.com/vllm-project/vllm/issues/48297)、[RFC #48310](https://github.com/vllm-project/vllm/issues/48310)），如正在构建 RL 训练平台，建议关注这两个 RFC 并在官方落地前增加 CI 回归测试。
6. **KV connector 用户（跨节点 disaggregated 场景）：** 当前外部 KV 后端的“查询式”命中在调度器内实际被当作“预留/承诺”消费，且缺少 abort 生命周期（[#42372](https://github.com/vllm-project/vllm/issues/42372)），对需要逐出保护的外部缓存服务有语义歧义，集成时应留意。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 动态日报 2026-08-18

## 1. 今日速览

DeepSeek-V4 全栈问题持续发酵：decode 挂起（#33549、#34235）、DSPARK 标识符损坏（#34959）、DSA 静默错误（#34941）等多个高危 bug 同时在开放中，且多数尚无修复 PR。社区侧，`ch-wan` 提交的 config 架构重构系列（#35022-#35029）持续推进，属于近期最大的内部结构性变更；无新版本发布。另外 CI 追踪显示当前 3 个 broken、11 个 flaky、672 个近期修复。

## 2. 版本发布与破坏性变更

**无新 release。**

以下破坏性变更/废弃正在进行中，值得提前关注：

- **废弃 Prefill CP V1**（PR #34983，已关闭）：移除 `SGLANG_ENABLE_CP_V2` 旧路径，CP v1 相关参数兼容处理将被删除。若你依赖旧的 context parallelism 行为，需留意后续合入。

```text
sgl-project/sglang PR #34983
https://github.com/sgl-project/sglang/pull/34983
```

- **清理废弃的 DeepSeek V4 环境变量**（PR #34926，已关闭）：DSPARK/dsv4 相关的一些旧环境变量将被移除。

```text
sgl-project/sglang PR #34926
https://github.com/sgl-project/sglang/pull/34926
```

- **Config 架构重构系列（重要）**（PR #35022-#35029）：该系列将「一个进程持有单份 live config」模型迁移到 config bags（每实例、每进程）。涉及 `ServerArgs` 记录、`dp_size`/`ep_size` 派生规则、spec buffer sizing、tokenizer manager 的日志与发布时机等。其中 `#35029` 是 CI carrier（not for merge），实际合入走各自 PR。这一系列一旦合入，对配置读取语义有较大影响，但当前文档标注 `[documentation]`，暂未 merge。

```text
sgl-project/sglang PR #35029
https://github.com/sgl-project/sglang/pull/35029
sgl-project/sglang PR #35023
https://github.com/sgl-project/sglang/pull/35023
sgl-project/sglang PR #35024
https://github.com/sgl-project/sglang/pull/35024
sgl-project/sglang PR #35025
https://github.com/sgl-project/sglang/pull/35025
sgl-project/sglang PR #35026
https://github.com/sgl-project/sglang/pull/35026
sgl-project/sglang PR #35027
https://github.com/sgl-project/sglang/pull/35027
sgl-project/sglang PR #35028
https://github.com/sgl-project/sglang/pull/35028
```

## 3. 新模型与硬件支持

- **Intel XPU 新增 encoder embedding 模型**（PR #35213，开放）：支持 bge-base-en-v1.5、nomic-embed-text-v1.5、granite-embedding-english-r2。修复了 bert.py 在 XPU 上返回错误 embedding 的问题。

```text
sgl-project/sglang PR #35213
https://github.com/sgl-project/sglang/pull/35213
```

- **InternVL 并发 multimodal 支持（Intel XPU）**（PR #35212，开放）：修复 InternVL3_5 MoE 模型在 XPU 上的权重加载崩溃（`num_experts` 属性缺失）、以及并发 multimodal 推理失效的问题。

```text
sgl-project/sglang PR #35212
https://github.com/sgl-project/sglang/pull/35212
```

- **AMD（ROCm）Kimi-K3：12-head MLA fp8 Gluon decode**（PR #34647，开放）：在 gfx950 上启用 batched `bh16bn128`，依赖 ROCm/aiter#4480（已合并）。

```text
sgl-project/sglang PR #34647
https://github.com/sgl-project/sglang/pull/34647
```

- **SM12x DSv4 MLA prefill 路径改进**（PR #35104，开放）：移除 64-head TP padding 冗余计算（仅 FlashMLA fp8 sparse decode kernel 对 h_q∈{64,128} 特化时才有此限制；prefill 路径无此约束）。

```text
sgl-project/sglang PR #35104
https://github.com/sgl-project/sglang/pull/35104
```

- **Helion KDA 小 prefill bug 修复**（PR #35197，开放）：修复 wrapper 在短 prefill 场景 shape 处理错误、decode 端非 2 的幂 head dim 未明确拒绝的问题。

```text
sgl-project/sglang PR #35197
https://github.com/sgl-project/sglang/pull/35197
```

## 4. 性能与优化

- **ROCm Kimi-K3：KDA 输入投影融合为单个 GEMM**（PR #35176，开放）：将 KDA（Kimi Decode Attention）的三路输入投影合并为一次 GEMM，减少 kernel 启动与显存中间读写。面向 AMD 后端。

```text
sgl-project/sglang PR #35176
https://github.com/sgl-project/sglang/pull/35176
```

- **EAGLE draft-extend CUDA graph staging 拆分**（PR #35126，开放）：将 draft-extend 的 graph 输入 staging 拆为 verify 前/后两半，使 read-done publish 时机更早。无行为变化，但有助于降低 verify 延迟尖峰。

```text
sgl-project/sglang PR #35126
https://github.com/sgl-project/sglang/pull/35126
```

- **对称内存分配修复**（PR #34230，开放）：修复 TP>1 + 投机解码 + CUDA graph capture 组合下 collective buffer 在不同 rank 的 NCCL registration window 不一致的问题，避免违反 `NCCL_WIN_COLL_SYMMETRIC` 契约导致静默错误输出——这既是正确性修复也是性能稳定性修复。

```text
sgl-project/sglang PR #34230
https://github.com/sgl-project/sglang/pull/34230
```

## 5. 稳定性与回归

> 按严重程度排列；标注是否存在 fix PR。严重度判断基于影响范围+复现确定性。请注意：**大部分高危 bug 尚无修复 PR**。

### 高危：静默错误 / 数据损坏

- **DSPARK 静默损坏标识符（DeepSeek-V4-Flash）**（Issue #34959，开放，无 fix PR）：投机解码在目标模型输出上产生标识符（identifier）损坏，且是静默的，会让投机解码结果变得不安全（产出错误 token 但不报错）。若你在生产环境使用 DSPARK，建议暂停或加验证层。

```text
sgl-project/sglang Issue #34959
https://github.com/sgl-project/sglang/issues/34959
```

- **DSA sparse-MLA prefill 静默跳过注意力计算**（Issue #34941，已关闭）：SM100 上单个 unchunked extend >65535 tokens 时 `gridDim.z` 溢出，导致 attention kernel 直接不 launch，**输出静默错误**。「已关闭」但无修复 PR 链接，风险仍在，请不要用 DSA + trtllm prefill 跑超长单请求。

```text
sgl-project/sglang Issue #34941
https://github.com/sgl-project/sglang/issues/34941
```

### 高危：确定性崩溃 / 挂起

- **NIXL/UCX prefill segfault 未修复**（Issue #35189，开放，无 fix PR）：在 v0.5.17 / CUDA 13.0 / B200 上稳定复现（`nixlUcxSharedThread -> cuEventQuery`）。之前的 #23489/#23499 均未找到根因就被关闭。涉及 NIXL/UCX 的部署请避免升级。

```text
sgl-project/sglang Issue #35189
https://github.com/sgl-project/sglang/issues/35189
```

- **EAGLE/NEXTN TP=2 warmup 挂起（Intel XPU）**（Issue #35144，开放，无 fix PR）：#34238 将 verify-decision TP broadcast 移出 sampling 分支后，XPU 上 warmup 即挂起。若你在 XPU 上跑 EAGLE/NEXTN，先锁定 #34238 之前的版本。

```text
sgl-project/sglang Issue #35144
https://github.com/sgl-project/sglang/issues/35144
```

- **DSV4 decode 在 ~245K context 无限挂起**（Issue #33549，开放，无 fix PR）：8×H20 + dsv4 backend + DSPARK，decode forward 挂起、GPU 100% 利用率但低功耗，最终被 watchdog 杀死。长上下文场景（>200K）目前有确定性风险。

```text
sgl-project/sglang Issue #33549
https://github.com/sgl-project/sglang/issues/33549
```

- **DSV4 + hierarchical cache + chunked prefill 16K 调度器挂起**（Issue #34235，开放，无 fix PR）：在 H20 / FP8 上，watchdog abort；另附采样 device-side assert（0.5.16+PR）。DSV4 用户在开启 hierarchical cache 或 chunked prefill 时需谨慎。

```text
sgl-project/sglang Issue #34235
https://github.com/sgl-project/sglang/issues/34235
```

- **Kimi K3：DSPARK + DCP + PD 分离时 decode 崩溃**（Issue #34920，开放，无 fix PR）：`cumsum(extend_prefix_lens=None)` TypeError，所有 TP rank 崩溃。涉及 DCP + DSPARK 组合时高概率触发。

```text
sgl-project/sglang Issue #34920
https://github.com/sgl-project/sglang/issues/34920
```

### 中危：显式错误 / 功能不可用

- **DSpark 在 SM120 无法启动**（Issue #33985，开放，无 fix PR）：RTX PRO 6000 (SM120) 上 CUDA graph capture 时 `num_tokens > 64` 断言失败，DSpark 完全不可用。

```text
sgl-project/sglang Issue #33985
https://github.com/sgl-project/sglang/issues/33985
```

- **DeepSeek-V4-Flash 长 agentic session 缓存命中为 0**（Issue #35129，开放，无 fix PR）：HiCache + DSPARK + dsv4 下，短请求有 ~98% 前缀命中，长 session 每轮都 0 cache，且存在 token 级前缀稳定 50%+。性能回归类问题，不影响正确性但影响吞吐与成本。

```text
sgl-project/sglang Issue #35129
https://github.com/sgl-project/sglang/issues/35129
```

- **Qwen3.8-27B-FP8 reasoning 内容解析错误（rust sgl-model-gateway）**（Issue #35148，开放，无 fix PR）：reasoning_content 在 rust gateway 中解析不正确。

```text
sgl-project/sglang Issue #35148
https://github.com/sgl-project/sglang/issues/35148
```

- **DSpark 在 SM120 上 decode 缺少 topk=192 实例化**（Issue #33985，开放，无 fix PR）：见上。

```text
sgl-project/sglang Issue #33985
https://github.com/sgl-project/sglang/issues/33985
```

- **Prefill FLOPs 估算受 chunked prefill 影响失真**（Issue #34298，已关闭）：`_estimate_prefill_perf` 忽略 `prefix_lens`，导致 `est. prefill TFLOPS/s` 退化为 1/latency。影响可观测性，不影响推理正确性。

```text
sgl-project/sglang Issue #34298
https://github.com/sgl-project/sglang/issues/34298
```

### 中危：特定配置下的崩溃

- **GLM-5.2-NVFP4 on RTX PRO 6000**（Issue #29562，开放，无 fix PR）：NVFP4 量化格式在 pro6000 上报错。GLM 用户注意。

```text
sgl-project/sglang Issue #29562
https://github.com/sgl-project/sglang/issues/29562
```

- **DeepSeekV4TokenToKVPool 缺少 `get_cpu_copy()`**（Issue #33385，开放，无 fix PR）：SWA/HiSparse + decode 模式 retract 时无条件触发 offload，导致 `NotImplementedError` 崩溃。注意该 offload 并未由 `--disaggregation-decode-enable-offload-kvcache` 控制。

```text
sgl-project/sglang Issue #33385
https://github.com/sgl-project/sglang/issues/33385
```

### 低危：稳定性 / CI 信号

- **CI 追踪**（Issue #17050，开放）：当前 3 broken / 11 flaky / 672 近期修复。整体 CI 健康度尚可，但前述 DSV4/DSPARK 相关回归未被全覆盖。

```text
sgl-project/sglang Issue #17050
https://github.com/sgl-project/sglang/issues/17050
```

- **`/metrics` scrape 可能饿死 prefill bootstrap 健康检查**（Issue #28157，开放）：PD 部署下 Prometheus 抓取可能阻塞健康检查，造成误杀。

```text
sgl-project/sglang Issue #28157
https://github.com/sgl-project/sglang/issues/28157
```

- **Router circuit breaker 将 4xx 误判为 worker 故障**（Issue #25811，已关闭 / inactive）：过大的 generation 请求触发 4xx，导致 `no_available_workers` 后续请求全挂。

```text
sgl-project/sglang Issue #25811
https://github.com/sgl-project/sglang/issues/25811
```

- **MambaRadixCache O(N) heap-walk 挂起**（Issue #26796，已关闭 / inactive）：`sanity_check()` 在每次 idle tick 上运行，多路并发流下会挂起。若你使用 hybrid SSM 模型（Mamba 类），注意此问题。

```text
sgl-project/sglang Issue #26796
https://github.com/sgl-project/sglang/issues/26796
```

### 性能 / 功能优化前瞻（roadmap）

- **Unified Hybrid Radix Cache Refactor**[Roadmap]（Issue #20415，开放）：统一当前 RadixCache/MambaRadixCache/SWARadixCache 等重复实现，已有 LMSYS 博客发布。

```text
sgl-project/sglang Issue #20415
https://github.com/sgl-project/sglang/issues/20415
```

- **SGLang Auto Tuner**（Issue #13363，开放，👍19）：计划为 MoE/attention/allreduce 的 kernel 提供自动调优与调度启发式选择。

```text
sgl-project/sglang Issue #13363
https://github.com/sgl-project/sglang/issues/13363
```

## 6. 对应用开发者的意义

1. **DSPARK / DSV4 组合风险极高，建议默认关闭或加严测试**：`#34959`（标识符静默损坏）、`#33549`（解码挂起）、`#34235`（调度器挂起）、`#33985`（SM120 不可用）共同指向 DeepSeek-V4-Flash + DSPARK 栈在长上下文/部分硬件上仍不适于生产。若必须使用，建议固定版本并建立正则校验输出 token 的看门狗。

2. **长上下文（>200K）与超长单请求（>65K）当前存在两类静默错误**：DSA/trtllm 路径的 `gridDim.z` 溢出（#34941）与 DSV4 decode 挂起（#33549）都会在长上下文下出现，且前者的后果是「静默无 attention 输出」。对依赖长文档/长 agentic session 的应用，请务必在目标硬件 + 目标长度上跑通回归后再上线。

3. **NIXL/UCX 路径在 B200/CUDA 13 上仍不稳定**（#35189）：使用 NIXL/UCX 做 prefill 分发的部署建议继续观望，不要追新版本。

4. **关注 config 重构系列对启动参数行为的影响**（#35022-#35029）：该系列将改变 `ServerArgs` 的读取/发布时机、`dp_size`/`ep_size` 派生方式和 spec buffer 的计算来源。合入后可能导致依赖「启动时配置」的部署脚本出现兼容性问题（比如 `override` 后的配置不再反映在 `ServerArgs` 中）。建议在合入后在 staging 环境跑一遍完整启动流程验证。

5. **可观测性指标存在失真风险**：`est. prefill TFLOPS/s` 在 chunked prefill 下失真（#34298），`/metrics` 抓取可能影响 bootstrap 健康检查（#28157）。对依赖这些指标做自动伸缩的团队，需留意阈值误判。

6. **应用层网关集成**：rust sgl-model-gateway 对 Qwen3.8 reasoning content 解析存在问题（#35148）；若你的 Java/Go/Rust 服务直接解析 reasoning 字段，留意输出格式兼容性。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 动态日报 2026-08-18

## 今日速览

今日核心动态集中在三个方向：**SYCL 后端持续增强**（新增优化器算子支持、量化拷贝内核性能调优、TILE 内核扩展），**新模型架构接入**（Granite SWA、dots3-note），以及 **AMD APU 显存检测修复**（b10472 解决了 UMA 误判问题）。此外，`llama-server` 生态有重要进展：自适应 MTP 深度 PR、OTLP 追踪以及一个基于 Electron 的桌面应用 PR 均在今日活跃。

---

## 版本发布与破坏性变更

### 新版本
- **b10472** [🔗](https://github.com/ggml-org/llama.cpp/releases/tag/b10472) — 修复 AMD APU 上 UMA 显存检测逻辑：对 HIP 构建跳过 UMA 覆盖，改为信任 `hipMemGetInfo` 返回值。修复 #18159 中小显存分区系统显存超报导致 OOM 的问题。
- **b10470** [🔗](https://github.com/ggml-org/llama.cpp/releases/tag/b10470) — CI 修复：在 release job 中显式创建并推送 git tag（此前依赖 GitHub Actions 隐式行为，存在标签缺失风险）。
- **b10456** [🔗](https://github.com/ggml-org/llama.cpp/releases/tag/b10456) — SYCL 量化 cpy 内核调度修复：线程/块数现按量化大小成比例调整，Arc 70 上 q4_0 → f32 路径吞吐从 20.21 GB/s 起有显著改善。
- **b10455** [🔗](https://github.com/ggml-org/llama.cpp/releases/tag/b10455) — SYCL 后端新增 `OPT_STEP_ADAMW`、`OPT_STEP_SGD` 算子支持。

> **破坏性变更**：无接口/配置层面的破坏性变更报告。ROCm Docker 构建版本建议追踪 PR #27145 的进展。

---

## 新模型与硬件支持

| 项目 | 类型 | 状态 | 要点 |
|---|---|---|---|
| **GraniteSWA / GraniteMoeSWA** [PR #25505](https://github.com/ggml-org/llama.cpp/pull/25505) | 模型架构 | OPEN | 新增 interleaved Sliding Window Attention + Attention Sinks 支持，对齐 HF transformers PR #47179，为即将发布的 Granite 模型做准备 |
| **dots3-note** [PR #27060](https://github.com/ggml-org/llama.cpp/pull/27060) | 模型架构 | OPEN | 支持 dots-studio/dots3-note-prev，主要带来 DSA（深度稀疏注意力）+ SWA 组合，需要扩展 `llama-kv-cache-dsa` |
| **桌面应用** [PR #27287](https://github.com/ggml-org/llama.cpp/pull/27287) | 产品形态 | OPEN | 基于 Electron 的 llama.cpp 桌面应用，作为 `llama-server` 的薄包装，面向非技术用户 |
| **ROCm 7.14.0 Docker** [PR #27145](https://github.com/ggml-org/llama.cpp/pull/27145) | 构建/后端 | OPEN | Docker 镜像升级至 ROCm 7.14.0 + Ubuntu 26.04，新增 GPU 支持列表，并包含 "no usable GPU found" 的 workaround |
| **NVidia Nemotron Nano v2** [#15409](https://github.com/ggml-org/llama.cpp/issues/15409) | 模型支持请求 | CLOSED（stale 关闭） | 长期开放的请求（28 👍），最终因 stale 关闭，说明当前无明确排期，建议关注后续 release notes |
| **SYCL ADAMW/SGD** [b10455](https://github.com/ggml-org/llama.cpp/releases/tag/b10455) | 后端算子 | ✅ 已合并 | 补齐 SYCL 训练/优化路径的算子缺口 |

---

## 性能与优化

### 已落地
- **SYCL 量化 cpy 内核调度修复**（b10456）：线程/块数与量化大小成比例，修复 under/over subscription 问题。Arc 70 上 q4_0 → f32 路径吞吐从 20.21 GB/s 提升（具体数值待 benchmark 报告）。 [🔗](https://github.com/ggml-org/llama.cpp/releases/tag/b10456)
- **SYCL TILE 内核扩展至量化 KV decode**（[PR #26689](https://github.com/ggml-org/llama.cpp/pull/26689)）：将 q4_0/q8_0 KV cache 的 decode 路径从 VEC 切换到 TILE 内核。在 Battlemage GPU 上 Qwen3.6-35B、Gemma 4 26B/12B 在 32K-118K 上下文下测得 **+42% ~ +169% 加速，零回归**，当前仅 gate 变更，合入后影响面可控。

### 进行中
- **自适应 MTP 草稿深度**（[PR #27210](https://github.com/ggml-org/llama.cpp/pull/27210)）：新增 `--spec-type draft-mtp-adaptive`，基于计数器 + 加权丢弃压力累加器动态调整 MTP 草稿深度（建议配合 `--spec-draft-n-max 12`），直击 MTP 在长上下文中性能衰减问题。
- **自适应草稿长度启发式**（[PR #25726](https://github.com/ggml-org/llama.cpp/pull/25726)）：与 #27210 目标重叠，同为 MTP 草稿长度动态调整，但采用 rolling window 策略，二者后续可能需要协调合并。
- **DeepSeek 4 tensor 并行**（[PR #26490](https://github.com/ggml-org/llama.cpp/pull/26490)）：为 DeepSeek4 增加 `-sm tensor` 支持（FA 镜像、meta backend 的 memset_tensor），多 GPU 推理的显存均衡关键路径在推进。

---

## 稳定性与回归

> 以下按严重程度降序排列。标注 ✅ 表示已有修复 PR，⚠️ 表示待修复。

### 崩溃/毁灭性错误
1. **CUDA 内核 stall，被看门狗杀死**（[#27102](https://github.com/ggml-org/llama.cpp/issues/27102)）— RTX Pro 6000 Blackwell MAX-Q 上 Qwen3.8-27B 执行时 GPU 内核挂起，涉及 Nvidia GPU，标记 help wanted。
2. **SIGSEGV 空指针跳转，GPU offload 时误判 fused ops**（[#27046](https://github.com/ggml-org/llama.cpp/issues/27046)）— Intel Lunar Lake iGPU（Arc 140V）上触发，但在 gemma4、qwen2 等无关架构上也可复现，指向 `resolve_fused_ops` 的通用逻辑缺陷。多个 build 版本（10423/10289/10050）均受影响，非近期回归。
3. **GGML_ASSERT 失败：`ret.axis != GGML_BACKEND_SPLIT_AXIS_UNKNOWN`** — 两条独立报告：
   - 4× Tesla T10 跑 Glimmer Q8_0，CUDA 后端（[#26902](https://github.com/ggml-org/llama.cpp/issues/26902)）
   - 2× RTX 5060 Ti 跑 Qwen3.8-27B + `iq4_nl` KV cache + `--split-mode tensor`（[#27116](https://github.com/ggml-org/llama.cpp/issues/27116)）— 说明 tensor split 与新型 KV cache 格式的兼容性存在系统性问题。
4. **ROCm gfx1151 RPC worker 在 TOP_K 崩溃**（[#26746](https://github.com/ggml-org/llama.cpp/issues/26746)）— DeepSeek V4 prefill 超过 4096 tokens 后 RPC worker 崩溃，涉及 RPC + HIP 的混合路径。

### 正确性/功能性回归
5. **MTP 性能自 b9935 起显著下降**（[#25489](https://github.com/ggml-org/llama.cpp/issues/25489)，10 条评论）— 明确标注 regression，与 #23533（SYCL MTP 无加速）疑似同源。正在并行推进的自适应 MTP PR（#27210）可能部分缓解但非根治。
6. **SYCL host-pinned memory 高 CPU 占用**（[#27038](https://github.com/ggml-org/llama.cpp/issues/27038)）— 引入 "Support host pinned mem" 的 commit a97123e4 使用设备报告的完整内存大小，大分配时 CPU 占用异常，影响 llama-server。
7. **completions 端点 logprobs 不返回 prompt/echo 部分**（[#27174](https://github.com/ggml-org/llama.cpp/issues/27174)）— `echo: true` + `logprobs: N` 时只返回生成 token 的概率，破坏所有依赖 loglikelihood 的评估框架（lm-eval 等）。
8. **CUDA 4-bit KV cache 导致 prefill 崩溃至 ~34 t/s**（[#27109](https://github.com/ggml-org/llama.cpp/issues/27109)）— qwen35 hybrid 模型在 RTX 3090 上使用 q4_1/q4_0 KV cache 时，MMQ guard 通过但 prefill 性能崩盘。

### 已修复/有修复 PR
- ✅ **AMD APU UMA 显存误报**（[#18159](https://github.com/ggml-org/llama.cpp/issues/18159)）— 已由 b10472 修复。
- ✅ **im2col 偏移量 32 位截断**（[PR #27284](https://github.com/ggml-org/llama.cpp/pull/27284)）— 修复 CWE-680/787（整数溢出 → 堆越界写），涉及 conv 反向传播路径。
- ✅ **多 RPC server 场景 buffer 指针串扰**（[PR #26500](https://github.com/ggml-org/llama.cpp/pull/26500)）— 修复将其他 RPC server 的 buffer 指针序列化后导致的对端无效指针问题。
- ✅ **OpenCL Adreno xmem SDPA 内存损坏**（[PR #26331](https://github.com/ggml-org/llama.cpp/pull/26331)）— 新增专门路径，规避 Z-Image 1024 下 1GB+ 中间 buffer 的静默损坏。
- ✅ **MulMatId 越界专家 ID**（[PR #27286](https://github.com/ggml-org/llama.cpp/pull/27286)）— 将 debug-only assert 改为 release 构建也生效的校验，防止堆越界写。
- ✅ **mtmd 可选张量空指针解引用**（[PR #27285](https://github.com/ggml-org/llama.cpp/pull/27285)）— 修复三个视觉模型 graph builder 对缺失可选张量的空指针 SIGSEGV。
- ✅ **Windows ROCm 7.14 缺失 hipblas.dll**（[#26996](https://github.com/ggml-org/llama.cpp/issues/26996)）— 已有对应修复 PR（#27145 中包含相关 workaround）。

---

## 对应用开发者的意义

1. **AMD APU 用户注意更新**：b10472 修复了 UMA 显存误报问题，若你面向 Strix Halo / Ryzen AI 等 AMD APU 用户部署服务，此版本更新前显存可能被高估导致 OOM。升级后应重新验证显存估算逻辑。

2. **MTP 推理仍不稳定，建议观望**：MTP 自 b9935 起存在性能回退（#25489），且 SYCL 上有无加速问题（#23533），KV cache 饱和时还会触发 CUDA hard crash（#26558）。在生产环境使用 MTP 需谨慎，对 Qwen3.x 系列模型建议固定版本并做充分压力测试。自适应 MTP（#27210 和 #25726）两个 PR 正在并行开发，功能上重叠，合入前避免引入。

3. **tensor split + 新量化 KV cache 的组合需规避**：#27116 和 #26902 均暴露了 `--split-mode tensor` 在特定 KV cache 格式下触发 GGML_ASSERT 的稳定复现路径。多 GPU tensor 并行部署时，建议暂时避免 `iq4_nl` KV cache。

4. **logprobs 端点可能影响评估链路**：如果您的应用依赖 `/v1/completions` 返回 prompt/echo logprobs 进行 loglikelihood 计算（如 lm-eval-harness、RLHF 数据过滤），当前 master 会静默返回不完整结果（#27174）。建议对该路径增加显式校验，或跟进此 issue 修复进度。

5. **SYCL 用户将迎来显著 decode 加速**：PR #26689 的 TILE 内核扩展（+42%~169% decode 性能）合入后，Intel GPU（BMG 及以上）服务吞吐会有质的提升，建议后续跟进 release 并复测。

6. **Server 可观测性/易用性方向**：OTLP/HTTP tracing PR（#27280）和桌面应用 PR（#27287）均在进行中，分别对生产链路追踪和本地开发者工具链有直接价值，但合入为时尚早，不宜依赖。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 动态日报（2026-08-18）

## 1. 今日速览

过去 24 小时无新版本发布，社区焦点集中在 **0.32.14 回归**（模型完全装入 VRAM 后 CPU 空载占用、Gemma 4 MLX 下 `think:false` 空输出）与 **qwen3.8 系列稳定性问题**（拉取 EOF、工具调用失败后重试永久挂起、视觉多图坍缩）。云端 `deepseek-v4-flash:cloud` 在 Anthropic 兼容端点下泄漏字面 `</think>`，引发 **193 次相同工具调用、约 31M token** 的 Agent 死循环，是今日影响面最大的事件。修复侧以进行中 PR 为主：embedding 截断告警、GGUF 大端序修复、CLI 图片路径解析修复等。

## 2. 版本发布与破坏性变更

过去 24 小时无新 Release（最新版本仍为 0.32.14 系列），无已知破坏性 API/CLI 变更。若已升级 0.32.14，需关注第 5 节中的回归项。

## 3. 新模型与硬件支持

- **deepseek-v4-flash:0731 本地权重请求**（[#17510](https://github.com/ollama/ollama/issues/17510)）：社区申请提供该模型的本地版本，目前仍为 open，无时间表。
- **MLX 引擎新增 Ling-3.0 支持（PR，进行中）**（[#17643](https://github.com/ollama/ollama/pull/17643)）：为 MLX 引擎实现 Bailing MoE V3 架构（Ling-3.0-tiny / Ling-3.0-flash），覆盖 Apple silicon (Metal) 与 NVIDIA DGX。
- **MLX-store gemma4 模型 preflight 覆盖（PR，已关闭）**（[#17622](https://github.com/ollama/ollama/pull/17622)）：新增 `apple-silicon-mlx` 预检 profile，覆盖 31b/26b-bf16/26b-mxfp8 等 MLX 导出格式。
- **Cloud 模型元数据补齐（PR，进行中）**（[#17828](https://github.com/ollama/ollama/pull/17828)）：修复新发布/按量计费 cloud 模型（如 `kimi-k3:cloud`）在 `launch`/`pi` 配置中缺失 `contextWindow` / `reasoning` 元数据的问题。
- **Intel 集成显卡支持**（[#3113](https://github.com/ollama/ollama/issues/3113)）：仍为最高赞（👍75）的长期开放功能请求，24 小时内无新进展。

## 4. 性能与优化

今日无新合入的性能优化 PR，主要动态为两项性能相关问题：

- **MLX 引擎缺少 prompt/prefix caching（性能缺陷）**（[#17829](https://github.com/ollama/ollama/issues/17829)）：多步 Agent 会话中每一步都需全量重算约 20-30K token 的 prompt，TTFT 随历史增长而恶化，无跨请求缓存。
- **v0.32.14 CPU 空载占用回归（有数据）**（[#17833](https://github.com/ollama/ollama/issues/17833)）：模型 100% GPU bound 时 CPU 占用飙升至 50-80%，回退 0.32.13 后消失；疑为版本回归，暂无修复 PR。
- **Embedding 截断告警（PR，进行中）**（[#17799](https://github.com/ollama/ollama/pull/17799)）：`/api/embed` 在默认 `truncate: true` 下静默截断超长输入，PR 将增加 warning 以提升可观测性。

## 5. 稳定性与回归

按严重程度排列，并标注修复 PR 状态。

### P0 / 高影响

- **qwen3.8 工具调用失败后重试永久挂起**（[#17825](https://github.com/ollama/ollama/issues/17825)）：tool-call 解析失败返回 500 后，重试相同请求将无限挂起，无响应、无日志，直到 runner 被回收。**无修复 PR。**
- **Cloud 模型 `</think>` 泄漏引发 Agent 死循环**（[#17617](https://github.com/ollama/ollama/issues/17617)）：`deepseek-v4-flash:cloud` 经 Anthropic 兼容端点驱动 Claude Code 时，助手历史中出现字面 `</think>`，导致连续 **193 次相同工具调用、约 31M token** 消耗。对以 Ollama 为网关的 Agent 应用属高危事件。**无修复 PR。**
- **本地 API 异常返回 401 鉴权错误**（[#17822](https://github.com/ollama/ollama/issues/17822)）：干净本地环境（无 cloud 登录、无 `OLLAMA_API_KEY`、无反代）下 `/api/embed` 与 `/api/generate` 报 `tokenize error: Invalid API Key` (401)，疑似本地推理链路误用了 cloud 鉴权。**无修复 PR。**

### P1 / 回归

- **v0.32.14 CPU 占用回归**（[#17833](https://github.com/ollama/ollama/issues/17833)）：模型完全 fit VRAM 时 CPU 占用 50-80%，0.32.13 同配置正常。**无修复 PR。**
- **Gemma 4 MLX `think: false` 空回复回归**（[#17823](https://github.com/ollama/ollama/issues/17823)）：0.32.14 下返回 `content: ""`、`eval_count: 1`；同模型 0.32.5 正常返回。**无修复 PR。**

### P1 / 崩溃与静默数据错误

- **MLX vision 高分辨率图 OOM 崩溃**（[#17804](https://github.com/ollama/ollama/issues/17804)）：Qwen3.8-27B MLX 处理 5712×4284（24.5MP）JPEG 时申请约 **125GB Metal buffer** 并崩溃（M5 Pro 48GB）。**无修复 PR。**
- **qwen3.x 视觉双图坍缩（静默错误）**（[#17814](https://github.com/ollama/ollama/issues/17814)）：同一请求中两张像素尺寸相同的图片仅保留一张，无报错无告警，`prompt_eval_count` 也只按单图计费。**无修复 PR。**
- **qwen3.8 下载失败**（[#17816](https://github.com/ollama/ollama/issues/17816)）：`ollama run qwen3.8` 报 `pulling manifest Error: EOF`，模型不可用。**无修复 PR。**

### P2 / 功能异常

- **`/api/generate` 静默忽略 `think: true`**（[#17544](https://github.com/ollama/ollama/issues/17544)）：设置 `format` 后 thinking 为空；`/api/chat` 行为正确。
- **`ollama launch claude` 启动失败**（[#17811](https://github.com/ollama/ollama/issues/17811)）：Ollama 0.24.0 + Claude Code 2.1.233 下报 `Input must be provided either through stdin or as a prompt argument`。
- **OLLAMA_HOST IPv4/IPv6 绑定异常**（[#17831](https://github.com/ollama/ollama/issues/17831)）：将 `OLLAMA_HOST=0.0.0.0:8200` 写入 systemd 配置后未按 IPv4 地址生效。
- **CUDA_VISIBLE_DEVICES 多卡配置不生效**（[#17832](https://github.com/ollama/ollama/issues/17832)）：三卡 H200 + CUDA 13.2 环境下设置 `CUDA_VISIBLE_DEVICES=n` 后行为不符合预期。
- **qwen3.8:27b 网页搜索 500（已关闭）**（[#17812](https://github.com/ollama/ollama/issues/17812)）：Ollama Desktop 原生 web search 报 `no user query found in messages`。

### 已有修复 PR（进行中 / 已关闭）

- **Unicode 指令值静默改写修复（PR，进行中）**（[#17809](https://github.com/ollama/ollama/pull/17809)）：`ollama create` 不再丢弃 `SYSTEM`/`TEMPLATE`/`MESSAGE`/`LICENSE` 中的零宽字符与非 ASCII 空格。
- **GGUF 大端序修复（PR，进行中）**（[#17826](https://github.com/ollama/ollama/pull/17826)）：修复 s390x 等 big-endian 主机上 GGUF 张量数据损坏问题，并补充测试。
- **CLI 图片路径解析修复（PR，进行中）**（[#16715](https://github.com/ollama/ollama/pull/16715)）：修复拖拽图片路径含引号、`file://` 前缀、`~/` 展开或 URL 编码时无法附加图片的问题（#10333）。
- **OpenAI 兼容层 `reasoning_effort: minimal` 映射（PR，已关闭）**（[#17267](https://github.com/ollama/ollama/pull/17267)）：将 `minimal` 映射为 `low`，不再返回 400。
- **launch 接受 Claude Code `[1m]` 模型后缀（PR，已关闭）**（[#17623](https://github.com/ollama/ollama/pull/17623)）：修复 #17584。
- **非 TTY 环境抑制 ANSI 控制字符（PR，已关闭）**（[#17112](https://github.com/ollama/ollama/pull/17112)）：脚本/管道/重定向场景下 `ollama run` 输出不再夹杂 ANSI 转义序列。
- **integration 配置为 null 时 panic 修复（PR，已关闭）**（[#17624](https://github.com/ollama/ollama/pull/17624)）：`{"integrations":{"claude":null}}` 不再导致 `LoadIntegration` 解引用 panic。
- **安装脚本兼容 dnf5/dnf4（PR，进行中）**（[#17820](https://github.com/ollama/ollama/pull/17820)）：Fedora 43（dnf5）下 NVIDIA 仓库添加命令差异修复。

## 6. 对应用开发者的意义

- **Agent / 工具调用链路**：qwen3.8 工具解析失败后的重试挂起（[#17825](https://github.com/ollama/ollama/issues/17825)）与 cloud 模型 `</think>` 泄漏死循环（[#17617](https://github.com/ollama/ollama/issues/17617)）均表明：在 Ollama 之上构建 Agent 时，必须设置请求超时、重试上限、最大工具调用数等熔断机制；对 Anthropic 兼容端点建议额外拦截异常的历史标记物。
- **LLM 网关路由**：本地 API 出现非预期 401（[#17822](https://github.com/ollama/ollama/issues/17822)）可能与 cloud 鉴权串线有关，建议在路由层显式区分本地/云模型端点，并对这类 401 增加告警。
- **MLX 后端用户**：无 prefix caching（[#17829](https://github.com/ollama/ollama/issues/17829)）意味着长会话 Agent 的每步 TTFT 都会增长；Gemma 4 用户若遇到 `think:false` 空回复（[#17823](https://github.com/ollama/ollama/issues/17823)），可临时回退 0.32.5。
- **Embedding / RAG 开发者**：`/api/embed` 默认静默截断超长文本（[#17799](https://github.com/ollama/ollama/pull/17799)），建议自行校验输入 token 长度或显式设置 `truncate: false`，避免索引到语义被截断的向量。
- **兼容层使用者**：`reasoning_effort: minimal` 与 Claude Code `[1m]` 后缀的修复 PR 已关闭（[#17267](https://github.com/ollama/ollama/pull/17267)、[#17623](https://github.com/ollama/ollama/pull/17623)），可升级后验证；cloud 模型发现目前仍无完整 API（[#17818](https://github.com/ollama/ollama/issues/17818)），只能依赖 `/api/experimental/model-recommendations` 或 HTML 接口。
- **多卡 / 网络部署**：`OLLAMA_HOST` IPv4 绑定（[#17831](https://github.com/ollama/ollama/issues/17831)）与 `CUDA_VISIBLE_DEVICES` 多卡生效问题（[#17832](https://github.com/ollama/ollama/issues/17832)）在 Ubuntu 26.04 + H200 环境需额外验证；dnf5 安装问题已有 PR（[#17820](https://github.com/ollama/ollama/pull/17820)）可跟进。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

## LiteLLM 动态日报 2026-08-18

### 今日速览

过去 24 小时无新版本发布。核心动态集中在三类：**预算执行类 Bug 持续发酵**（#26672、#27381）并伴随多条关联讨论；**批量 API（/v1/batches）修复集中落地**，覆盖定价错误、limit 边界、404/500 语义；**新能力快速扩充**，新增 Amazon Comprehend Medical、FLUX 3 视频生成、Azure Document Intelligence OCR native 返回。此外，多个 1.98.x 回归问题（guardrail + system prompts 400、rust 参数泄漏）已有对应 fix PR。

---

### 版本发布与破坏性变更

- 无新 Release。以下为已合并或待合入的变更，对现有部署有行为影响，升级后需验证：
  - **guardrail + /v1/messages system prompts 400**：1.98.0 引入的回归，Anthropic 拒绝携带内容的 system rows。PR [#37231](https://github.com/BerriAI/litellm/pull/37231) 修复并折叠回顶层 `system` 参数，需回归验证 guardrail 场景。
  - **`rust: true` 参数泄漏**：配置在 deployment 上的 `rust` 标志此前会透传至上游 provider，导致 `/v1/chat/completions` 与 `/v1/responses` 报 `rust: Extra inputs are not permitted`。PR [#37218](https://github.com/BerriAI/litellm/pull/37218) 将其注册为 LiteLLM 层参数并在 provider 请求中剥离。

---

### 新模型与硬件支持

- **FLUX 3 视频生成**（[#37224](https://github.com/BerriAI/litellm/pull/37224)）：新增 `black_forest_labs/flux-3-video`，支持文生视频、图生视频、续写、草稿模式、关键帧、时长/分辨率/宽高比/音频参数，并将 provider 的 `ReasoningModel` 结果映射到标准输出。
- **Amazon Comprehend Medical**（[#37229](https://github.com/BerriAI/litellm/pull/37229)）：新增 SigV4 签名的医疗文本分析 passthrough 路由，统一纳入网关鉴权、日志和花费追踪。
- **Azure Document Intelligence OCR native 返回**（[#37194](https://github.com/BerriAI/litellm/pull/37194)）：`/v1/ocr` 支持 `req_format=native`（或头部 `x-req-format: native`），直接透传 Azure `analyzeResult`，同时保留按页成本统计。

---

### 性能与优化

- 无新增的量级性能/显存优化 PR 落地。以下为值得关注的进行中讨论：
- **语义缓存自适应阈值**（[#36124](https://github.com/BerriAI/litellm/issues/36124)）：建议为 `valkey-semantic` 缓存后端引入自适应相似度阈值，替代当前静态 0.8，可根据命中质量动态调整。尚无实现。
- **completion() 指数退避**（[#16068](https://github.com/BerriAI/litellm/issues/16068)）已关闭，但未合入代码；若你依赖自定义重试延迟，需继续使用外部重试层。

---

### 稳定性与回归

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 严重 | **预算执行被绕过**：v1.82.3 上 key/user 的 `max_budget` 失效，即使 spend 已超限仍继续放行（[#26672](https://github.com/BerriAI/litellm/issues/26672)，17 评论）。另有全局预算限制器未注册的同类报告（[#27381](https://github.com/BerriAI/litellm/issues/27381)）。**影响所有使用预算上限的生产用户，建议先降级或加外部护栏。** | 无 fix PR |
| 🔴 严重 | **Pod 内存持续增长导致 OOM**（[#25219](https://github.com/BerriAI/litellm/issues/25219)，14 评论）：升级至 main-v1.82.0-stable 后出现连续 OOM Kill，与代理侧内存泄漏相关。 | 无 fix PR |
| 🔴 严重 | **自适应路由器单点崩溃**（[#35590](https://github.com/BerriAI/litellm/issues/35590)）：任一模型组持久化 `alpha/beta=0` 后，整个路由器对所有请求返回 500，报 `gammavariate: alpha and beta must be > 0.0`，重启不恢复。 | 无 fix PR |
| 🟠 高 | **Anthropic 拒绝 `vector_store_ids` 字段**（[#23741](https://github.com/BerriAI/litellm/issues/23741)，13 评论，👍 12）：路由到 Anthropic 时请求体携带该字段即 400，影响文件搜索类应用。 | 无 fix PR |
| 🟠 高 | **guardrail + system prompts 400 回归**：1.98.0 引入，已有 [#37231](https://github.com/BerriAI/litellm/pull/37231) 修复。 | 有 fix PR |
| 🟠 高 | **批量 API 错误语义与定价错误**：未知 batch/file ID 返回 500 而非 404（[#37201](https://github.com/BerriAI/litellm/pull/37201)）；`limit` 越界未校验导致分页死循环（[#37198](https://github.com/BerriAI/litellm/pull/37198)）；检索 batch 时按 0 价或公共价计费，忽略 deployment 自身配置（[#37077](https://github.com/BerriAI/litellm/pull/37077) 已合入，[#37219](https://github.com/BerriAI/litellm/pull/37219) 为内部副本）。 | 已有 fix PR |
| 🟠 中 | **Bedrock CountTokens 不支持部分 Anthropic 模型**：Claude Opus 5/Sonnet 5 等调用 CountTokens 失败，token 计数被静默低估（[#37102](https://github.com/BerriAI/litellm/issues/37102)）。 | 无 fix PR |
| 🟡 中 | **/health 端点泄漏敏感配置**：`extra_headers` 与 `aws_session_token` 明文返回（[#36898](https://github.com/BerriAI/litellm/issues/36898)），安全风险。 | 无 fix PR |
| 🟡 中 | **模型价格表数据错误**：`model_prices_and_context_window.json` 中 `azure/gpt-audio-1.5-2026-02-23`（[#37169](https://github.com/BerriAI/litellm/issues/37169)）与 `azure/gpt-audio-mini-2025-10-06`（[#37170](https://github.com/BerriAI/litellm/issues/37170)）条目存在错误，需同步更新 backup 文件。 | 无 fix PR |

---

### 对应用开发者的意义

1. **预算控制不可全信**：若你在生产依赖 `max_budget`（key/user/global），当前主链上的绕过 Bug 可能导致超预算放行。在官方修复前建议：升级前先在 staging 验证预算行为；必要时叠加外部配额层；关注 [#26672](https://github.com/BerriAI/litellm/issues/26672) 动向。
2. **/v1/batches 行为收紧**：合并的修复会让 `limit` 越界返回 OpenAI 兼容 400、未知 ID 返回 404。若你的客户端此前依赖宽松校验或对 500 做了重试，需要适配新错误码。
3. **新能力接入成本低**：医疗文本分析（Comprehend Medical）和 OCR native 返回均以 passthrough 形态提供，企业级场景可直接接入网关，复用鉴权/日志/成本追踪；FLUX 3 视频生成则补齐了视频模态。
4. **流式计费准确性提升**：PR [#36879](https://github.com/BerriAI/litellm/pull/36879) 修复了 streamed `usage.cost` 使用错误别名定价、跳过 `cost_discount_config`、Anthropic 缓存读未计入等问题，对成本核算有直接影响，建议关注合入状态。
5. **自适应路由存在全局熔断风险**：若使用 adaptive_router，单个模型组的数据异常可能导致整个代理 500。建议配置监控告警，并准备路由降级方案。
6. **Langfuse v4 适配仍在推进**：Langfuse 官方在 [#33383](https://github.com/BerriAI/litellm/issues/33383) 提出配合 v4 Fast Preview 的迁移需求，与此前的 [#24123](https://github.com/BerriAI/litellm/issues/24123) 为同一路线；若你正在评估 Langfuse v4，短期内建议保持 v2 SDK 兼容模式。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 动态日报 2026-08-18

## 1. 今日速览

今日无新版本发布。重点集中在三条线：Studio 稳定性批量修复（聊天跨视图保活 [#9129](https://github.com/unslothai/unsloth/pull/9129)、工具调用 ID 规范化 [#9116](https://github.com/unslothai/unsloth/pull/9116)、误推工具调用治理 [#9125](https://github.com/unslothai/unsloth/pull/9125)/[#9126](https://github.com/unslothai/unsloth/pull/9126)、LAN 白屏 [#9075](https://github.com/unslothai/unsloth/pull/9075)）；AMD/ROCm 后端在 Windows/Linux 的适配补强（[#9002](https://github.com/unslothai/unsloth/pull/9002)/[#8863](https://github.com/unslothai/unsloth/pull/8863)/[#8793](https://github.com/unslothai/unsloth/pull/8793)）；两个新出现的高影响问题——Studio 后端 SQLite 死锁（[#9008](https://github.com/unslothai/unsloth/issues/9008)）与 ROCm 无法加载任何模型（[#8998](https://github.com/unslothai/unsloth/issues/8998)，已有 [#9002](https://github.com/unslothai/unsloth/pull/9002) 修复 PR）。

## 2. 版本发布与破坏性变更

无官方新版本发布。以下为 open PR 中可能影响行为/兼容性的变更：

- [#8412](https://github.com/unslothai/unsloth/pull/8412)：Linux CPU 安装切换 torch 2.11；AMD 无 ROCm 时改用 Vulkan 后端；新增 gfx1033 支持门控；附带三个安装器修复。Steam Deck/Linux AMD 用户需关注安装路径变化。
- [#9127](https://github.com/unslothai/unsloth/pull/9127)：llama.cpp 新版 `--version` 输出改为语义化版本（此前为纯 build 号），Studio 及依赖 build 号做版本比较的外部脚本需要适配。

## 3. 新模型与硬件支持

无新模型/架构官方支持。

- 模型可运行性扩展：[#8855](https://github.com/unslothai/unsloth/pull/8855) 为 Hub 面板启用非 GGUF 图像/视频模型的 Run 按钮（如 `unsloth/Z-Image-Turbo-unsloth-bnb-4bit`），此前 safetensors 图像模型会显示为不可运行。
- Intel：[#3533](https://github.com/unslothai/unsloth/issues/3533) Arc B580 上 `unsloth_zoo` 导入崩溃（`torch.xpu.memory.mem_get_info` 不可用），仍 open，14 条评论；[#8931](https://github.com/unslothai/unsloth/issues/8931)/[#8972](https://github.com/unslothai/unsloth/issues/8972) 继续请求 Intel GPU 的 Studio 安装与后端支持。
- AMD/ROCm：[#8998](https://github.com/unslothai/unsloth/issues/8998) ROCm 后端无法加载任何模型，[#9002](https://github.com/unslothai/unsloth/pull/9002) 通过 HIP/ROCR 不匹配时使用 bundled HIP 重试来修复；[#8473](https://github.com/unslothai/unsloth/issues/8473) 安装器显示 GPU 正常但后端实际 CPU-only；[#8863](https://github.com/unslothai/unsloth/pull/8863)/[#8793](https://github.com/unslothai/unsloth/pull/8793) 分别从 adapter counters 和 HIP LUID 修复 Windows ROCm VRAM 识别。
- 安装器：[#8762](https://github.com/unslothai/unsloth/pull/8762) 改进 NVIDIA/Intel/AMD GPU 检测打印，避免出现"有 GPU 但无名字/构建目标"的情况。

## 4. 性能与优化

- [#8962](https://github.com/unslothai/unsloth/pull/8962)：将 pandas 移出 Studio 后端启动导入路径（profile 中相关链路约 2.3s），缩短冷启动时间。
- [#9063](https://github.com/unslothai/unsloth/pull/9063)：将视觉 projector（mmproj）纳入 VRAM 分配预算，避免视觉模型因 projector 额外显存被计划外占用导致 OOM 或换出。
- [#8882](https://github.com/unslothai/unsloth/pull/8882)：本地 GGUF 模型在首 token 前即可显示上下文窗口长度，此前需等首次 token 计数。
- [#9104](https://github.com/unslothai/unsloth/pull/9104)：Kaggle launcher 挂起时输出具体卡住位置，提升可观测性。
- [#8724](https://github.com/unslothai/unsloth/pull/8724)：修复图表指标在数值 ≥1000 时被截断/格式化丢失精度的问题。

## 5. 稳定性与回归

按影响面从大到小排列：

**服务不可用/无法启动**

- [#9008](https://github.com/unslothai/unsloth/issues/9008)：Studio 后端运行数分钟后所有线程阻塞在 SQLite `connect()/close()`，进程存活但 socket 不再接受连接，`curl 127.0.0.1:8888` 也 hang；CPU 占用异常。**无 fix PR**。
- [#8998](https://github.com/unslothai/unsloth/issues/8998)：ROCm 后端无法加载任何模型。**已有 [#9002](https://github.com/unslothai/unsloth/pull/9002) 修复 PR**。
- [#3533](https://github.com/unslothai/unsloth/issues/3533)：Intel Arc B580 上 import 即崩溃。**无 PR**，14 条评论，社区影响面大。

**严重性能/内存回退**

- [#9037](https://github.com/unslothai/unsloth/issues/9037)：Qwen3.8 GGUF 长对话在模型 reload 后丢失 reusable prompt state，触发约 **11 分钟**全量 prefill。**无 PR**。
- [#9033](https://github.com/unslothai/unsloth/issues/9033)：Windows 下 `-ngl -1` 全量 offload 到 VRAM 后，加载期占用的系统 RAM 不释放。**无 PR**。

**功能正确性**

- [#8907](https://github.com/unslothai/unsloth/issues/8907)：Studio 在模型未发起工具调用时偶尔注入工具调用引导。**已有 [#9125](https://github.com/unslothai/unsloth/pull/9125)/[#9126](https://github.com/unslothai/unsloth/pull/9126) 修复**。
- [#9116](https://github.com/unslothai/unsloth/pull/9116)：前端将 tool-call id 存为 `<provider>:<uuid4>`（66 字符），重放时被 OpenAI（≤64 字符）和 Mistral（9 位字母数字）拒绝，导致多轮工具调用中断。**修复 PR 已提交**。
- [#9098](https://github.com/unslothai/unsloth/issues/9098)：外部 provider 流式回复含模板字符串时丢失文本（如 `` return `Hi, ${name}!` `` 输出成 `` return `Hi,!` ``）。**已关闭**，疑似已修复。
- [#9075](https://github.com/unslothai/unsloth/issues/9046)：通过 LAN IP（http://）访问 Studio 时 `crypto.randomUUID is not a function` 白屏。**修复 PR [#9075](https://github.com/unslothai/unsloth/pull/9075) 已关闭**。
- [#8473](https://github.com/unslothai/unsloth/issues/8473)：AMD 主机安装器两次告知 GPU 正常，但 Studio 后端以 CPU-only 运行，Live monitor 显示无 GPU/VRAM `--`。**无 PR**。

**平台/外设**

- [#8940](https://github.com/unslothai/unsloth/issues/8940)：Mac 上加载 Ideogram 4 报 `'_Noop' object is not iterable`。**无 PR**。
- [#8678](https://github.com/unslothai/unsloth/issues/8678)/[#9001](https://github.com/unslothai/unsloth/issues/9001)：Linux WebKitGTK 麦克风权限未启用、Windows 上误点"不允许"后无法重新授权。**均已 closed**。
- [#3560](https://github.com/unslothai/unsloth/issues/3560)：Qwen3-VL 系列 LoRA 微调后在 vLLM 加载 adapter 失败，仍 open。

## 6. 对应用开发者的意义

- **工具调用链路正在变稳**：[#9116](https://github.com/unslothai/unsloth/pull/9116) 规范化 tool-call id 后，多轮工具调用在 OpenAI/Mistral 等外部 provider 上不再因 id 非法中断；[#9125](https://github.com/unslothai/unsloth/pull/9125)/[#9126](https://github.com/unslothai/unsloth/pull/9126) 修正了"假工具调用"误推与 retry 上下文丢失。对基于 Studio 外部模型做 Agent 的开发者是直接影响。
- **API 接入成本将降低**：[#9102](https://github.com/unslothai/unsloth/pull/9102) 允许用户选择"无 API Key"暴露 OpenAI 兼容端点，本地工具接入无需再走 Key 创建流程；但安全边界需要自行把控。
- **Studio 正从本地工具演变为远程控制面**：[#9103](https://github.com/unslothai/unsloth/issues/9103)（远程 server 模式）、[#8973](https://github.com/unslothai/unsloth/issues/8973)（Android 客户端）、[#8934](https://github.com/unslothai/unsloth/issues/8934)（LAN 直连）、[#9075](https://github.com/unslothai/unsloth/pull/9075)（LAN 白屏已修）。若你在构建桌面/移动端 Controller 或远程管理 UI，当前是跟进集成的好时机。
- **包体积与启动路径变化**：[#8896](https://github.com/unslothai/unsloth/issues/8896) 指出 pip 包捆绑 Studio 后 wheel 达 80MB、解压 140MB，下游分发需评估；[#8962](https://github.com/unslothai/unsloth/pull/8962) 将 pandas 移出启动导入图，深层依赖内部 import 图的集成方需要回归测试。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*