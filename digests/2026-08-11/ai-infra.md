# AI 基础设施日报 2026-08-11

> 生成时间: 2026-08-11 00:52 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施生态横向对比分析报告（2026-08-11）

---

## 1. 生态全景

当前 AI 基础设施正经历新一轮模型架构迭代的强牵引——Meta 开源 Muse Glimmer、Kimi K3、DeepSeek-V4 系列在一天之内同时驱动六大项目密集适配，但新模型带来的适配成本与稳定性代价同样显著。硬件层面，Blackwell SM120 与 AMD ROCm 是两个核心战场：前者是性能加速的关键路径（vLLM/SGLang 均有专项 PR），后者仍是普遍的二等公民（vLLM Kimi K3 ROCm 缺口、llama.cpp Strix Halo 乱码、Unsloth Whisper 崩溃）。值得警惕的是，长上下文（>200K）下的 CUDA Graph 与 DSpark 路径在多个引擎中集中出现非确定性崩溃，生产可用性风险被低估。与此同时，Agent 场景的工具调用正确性已成为横跨推理引擎、本地运行时、网关、微调框架各层的"第一问题"，而计费/限流/审计等治理能力在网关层正在快速补课。

---

## 2. 各项目活跃度对比

| 项目 | Issues | PRs | Release | 今日主线 |
|------|--------|-----|---------|----------|
| **vLLM** | 131 | 465 | **v0.27.0**（561 commits / 242 位贡献者） | Kimi K3 全栈落地 + DeepSeek-V4-Flash 兼容性问题群 |
| **SGLang** | 未披露总数* | 未披露总数* | 无 | DSpark TP8 CUDA Graph 稳定性（#31023/#33356）+ DP Attention 调度优化 |
| **llama.cpp** | 未披露总数* | 未披露总数* | **b10338~b10355**（5 个版本） | 多输出后端采样 + Granite-Switch/MTP 架构合入 |
| **Ollama** | 未披露总数* | 未披露总数* | **v0.32.7** + **v0.32.8-rc0** | Muse Glimmer 接入（先 MLX 后多平台） |
| **LiteLLM** | 未披露总数* | 未披露总数* | **v1.96.0**（仅 cosign 签名，无功能变更） | 多副本治理（预算/限流/审计）与安全加固 |
| **Unsloth** | 未披露总数* | 10+ 个明确提及 | **v0.1.61-beta** | Muse Glimmer 30B 支持 + Studio 路径/加载回归修复 |

*注：vLLM 外各项目日报未给出总数，仅能确认具体引用的 issue/PR 数量。vLLM 的 131 Issues / 465 PRs 在全部项目中遥遥领先，反映其作为生产级引擎的社区体量与问题暴露面均为最大。

**版本发布要点**：
- vLLM v0.27.0 是今日唯一的大版本（破坏性变更未明示，但涉及自定义 kernel/KV offload 的项目需回归）
- llama.cpp 保持高频小步快跑（5 个版本），含一个潜在行为变更（b10353 ROLL 连续性约束）
- Ollama v0.32.8-rc0 与正式版并行，Muse Glimmer manifest 当前要求预发布版才能拉取

---

## 3. 模型支持竞速

| 模型/架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|-----------|------|--------|-----------|--------|---------|
| **Muse Glimmer** | — | PR #34262（CUDA+MLX，CI 失败中） | Vulkan 不支持（#26865） | ✅ v0.32.7 MLX / v0.32.8-rc0 全平台（MLX manifest 权重有误） | ✅ v0.1.61-beta + Dynamic Quants（GGUF 尚无法加载） |
| **Kimi K3** | ✅ v0.27.0 全栈（CUDA）；ROCm 缺失 | 仅见崩溃 issue（#32855） | — | — | — |
| **DeepSeek-V4 系列** | ⚠️ 支持但 SM8x 不可用、SM120 崩溃、KV 容量异常 | ✅ SM120 加速路径 3.4×（#29927） | ⚠️ ROCm 下 IQ3_XXS 乱码 | — | — |
| **Granite-Switch** | — | — | ✅ 合入（CPU-only POC） | — | — |
| **Nemotron 3/MTP** | — | — | ✅ MTP 合入 | ✅ MLX 实现 | — |
| **其他** | B12X 后端、XPU W4A8 | DCP 稀疏注意力（GLM-5.x） | EXAONE 4.5 SWA 修复、pocket-tts、MXFP4/NVFP4 | Gemma4 视觉、Apertus 1.5、Bailing MoE V3 | GLM-OCR（受阻，#4269） |

**判断**：
- **vLLM 在"可部署的完整度"上领先**——Kimi K3 一次落地模型 + kernel + 双前端，这是其他项目尚未做到的。
- **SGLang 在 DeepSeek-V4 的 Blackwell 加速上最激进**，3.4× decode 延迟降低是今日最亮眼的性能数字，但代价是 DSpark CUDA Graph 稳定性仍未收敛。
- **llama.cpp 在架构覆盖广度上最快**，Granite-Switch 从上游合入到发布仅隔数个版本，且 MXFP4/NVFP4 量化已进入 PR 阶段。
- **Ollama 对 Muse Glimmer 的响应速度最快**（同日发布两个版本），但支持质量存疑（MLX manifest 权重错误、NVIDIA/AMD 路径刚进 rc）。
- **Unsloth 的 Muse Glimmer 支持停留在"发布即缺后端"状态**——内置 llama.cpp 无法加载其 GGUF。

---

## 4. 性能优化前沿

按方向归类，今日各项目的火力分布：

| 方向 | 代表工作 | 关键数字/意义 |
|------|----------|---------------|
| **KV cache 管理** | vLLM BlockPool LIFO 复用修复（#51482）、KV offloading 背压检测（#50045）、Mooncake 事件精确化（#50361）；llama.cpp EXAONE SWA KV 修复 | 直接影响长上下文下的内存效率与 offload 稳定性；EXAONE 修复前 KV 占用远超预期 |
| **分布式/并行推理** | SGLang DP Attention 调度器 5 次设备同步 → 1 次 D2H gather（#34338）；DCP 稀疏注意力扩展（#31821，KV 容量 ×2）；vLLM ROCm MXFP4 TP8 shard 修复（#51473） | DP 调度延迟显著下降；DCP 使 SGLang KV 逻辑容量从 2.3M 提升至 4.25M tokens/rank |
| **量化与算子** | llama.cpp MXFP4/NVFP4 量化 PR；vLLM FP8 per-head descale 修复（#51363）、W4A8 PTX `ldmatrix.s8.s4` 提案、XPU int4 W4A8；Unsloth Dynamic Quants | FP8 descale 修复影响 FA4 路径正确性；MXFP4 若合入将补齐 llama.cpp 对最新量化格式的支持 |
| **Kernel 后端** | vLLM B12X 后端（#51696）、DeepGEMM SM120 构建修复（#51382）；SGLang fused Triton 稀疏 MLA（#32779，消除 %64/%128 整除 padding）；llama.cpp CPU soft_max 多 pass 融合、cuBLAS 静态 workspace | 新硬件适配与 kernel 融合是 Blackwell 性能释放的关键；llama.cpp 的 HIP unsafe-math 默认关闭是正确性优先的信号 |
| **采样/投机解码** | llama.cpp 多输出后端采样（b10355）；vLLM spec-decode slot_mapping 修复（#51328） | 多输出采样为服务端投机解码铺路；但量化目标下投机发散（#25618）仍是隐患 |
| **Profiling/可观测** | vLLM Triton Proton 轻量 profiler（#48789） | 支持 graph-free 执行，可做 per-request/per-step 开销分析 |

**结论**：优化火力集中在①新硬件（Blackwell SM120）的 kernel 适配与稳定性修复；②KV cache 全生命周期的精细化管理（复用、offload、事件）；③量化格式的推陈出新（FP8/MXFP4/W4A8）；④长上下文分布式路径的调度优化。值得注意的是，**正确性修复在今天占据了比纯性能优化更大的 PR 比例**——FP8 descale、unsafe-math 关闭、slice 语义修正确认了"先正确、再高效"的行业共识。

---

## 5. 分层定位差异

| 层级 | 项目 | 核心定位 | 今日特征 | 典型场景 |
|------|------|----------|----------|----------|
| **生产级推理引擎** | vLLM | 高性能模型服务，全栈自研（kernel→前端） | 大版本发布 + 大规模 issue 暴露，稳定性修复密集 | 大规模线上服务、多模型混部、企业级部署 |
| | SGLang | 高性能推理 + 前沿注意力架构（DSpark/DP/DCP） | 押注稀疏注意力和 Blackwell 加速，但 CUDA Graph 稳定性未闭环 | 超长上下文 Agent、DeepSeek-V4 等新架构首发 |
| **本地/边缘运行时** | llama.cpp | 单机/边缘推理，GGUF 生态，架构覆盖最广 | 高频发版，CPU/GPU/MLX 多后端同步迭代 | 本地开发、边缘设备、私有化单机部署 |
| | Ollama | 极简本地部署，模型分发为中心 | 新模型同日跟进，但支持质量波动（manifest 错误、工具调用回归） | 开发者桌面、个人电脑、快速原型 |
| **网关/代理层** | LiteLLM | 多 Provider 路由、预算、限流、审计 | 治理能力补课：多副本限额语义、跨租户安全、日志脱敏 | 多 Provider 接入、企业成本管控、统一入口 |
| **训练/微调框架** | Unsloth | 高效微调（GRPO/LoRA）+ Studio 一体化 | 新模型量化跟进 + Studio 高频迭代，训练正确性修复（lm_head 分派） | RL 训练、量化微调、AI 应用开发者的本地训练 |

**关键差异点**：
- **vLLM 与 SGLang 的正面竞争**最激烈：两者都在争 DeepSeek-V4/Kimi K3 的"首发部署权"，但 vLLM 更重工程稳健性，SGLang 更重前沿架构（DSpark 是其主要差异化卖点）。
- **llama.cpp 与 Ollama 是"引擎+发行版"的关系，但正在各自独立扩展**：llama.cpp 向上长（server API、MTP、多后端），Ollama 横向扩（模型市场、MLX 优先策略、VS Code 集成）。
- **LiteLLM 与其他项目互补而非竞争**，其价值锚定在"网关治理"——多副本预算失效、流式 usage 少计、跨租户越权等今日 issue 全部属于"服务规模扩大后的治理债"。
- **Unsloth 是唯一以训练/微调为核心的项目**，但其 Studio 正在向"微调+本地推理"一体化平台演进，与 Ollama/llama.cpp 存在潜在重叠。

---

## 6. 值得关注的趋势信号

### 行业趋势

1. **新模型发布节奏已压垮适配质量**：Muse Glimmer 在同日被 4 个项目宣布支持，但每个项目的支持都有质量问题——Ollama MLX manifest 权重错误、Unsloth GGUF 无法加载、SGLang CI 失败。**"首发支持"正在从技术能力问题变成市场公关行为**，建议生产环境以"合入后 N 周"而非"发布当日"为采纳时点。

2. **Blackwell SM120 是当前性能竞赛的决胜点，也是事故高发区**：vLLM 的 DeepGEMM 构建修复、SGLang 的 3.4× 加速、B12X 后端、FlashInfer 路由崩溃——新硬件的前三代用户都在付学费。**建议 RTX PRO 6000 / B300 等 SM120 设备上的部署预留 2-4 周的稳定性观察窗口**。

3. **长上下文（>200K）稳定性是系统性短板**：SGLang DSpark 三个崩溃类 issue 集中在 20 万+ token 场景；vLLM 的 KV cache 容量异常（56 bytes/token，8 倍膨胀）直接压低 max_model_len；Ollama 出现跨请求响应污染。**超长上下文在 Agent 场景的价值已被验证，但当前基础设施的可靠性不足以支撑生产级 SLA**。

4. **AMD/ROCm 仍是"支持但不保证"状态**：vLLM Kimi K3 ROCm 无 roadmap、llama.cpp Strix Halo 乱码无修复、Unsloth Whisper/视频生成崩溃、HIP unsafe-math 关闭后性能回退——**AMD 平台的采用者应始终将"回退到 CUDA"作为应急预案**。

5. **网关层正在经历"从功能到治理"的进化**：LiteLLM 今日的 issue 集中在多副本限额语义、跨租户越权、日志脱敏、流式计费偏差——**当服务规模跨过某个阈值后，正确性/安全/审计问题比新功能更致命**。

### Agent/应用开发者行动建议

| 优先级 | 建议 | 依据 |
|--------|------|------|
| **P0** | 工具调用链路全链路验证：llama.cpp Qwen 解析修复（#26793）合入前剥离 thinking 输出；Ollama 用户锁定 0.32.1 或等待修复 PR | 三个项目同时报告工具调用正确性问题（#20837、#17444、#17647） |
| **P0** | DeepSeek-V4-Flash-0731 上线前逐项核对硬件矩阵：SM8x 不可用、SM120 崩溃、H20 KV 容量异常 | vLLM #50576/#50720/#51041 |
| **P1** | 流式计费加一层对账：LiteLLM 流式 usage 少计未修复前，按非流式采样或业务侧 token 计数兜底 | LiteLLM #36114 |
| **P1** | 长上下文服务增加"产出率"监控（tokens/s 而非 GPU 利用率），并配置自动重启 | SGLang #33549 死循环、Ollama #17599 响应污染 |
| **P2** | Muse Glimmer 暂缓生产采用，等待各项目 1-2 轮迭代后的稳定版 | 四个项目均有质量问题 |
| **P2** | 多副本 LiteLLM 部署需在网关层自建限额兜底（TPM × replicas 风险） | LiteLLM #27736/#26672 |
| **P2** | 使用 KV connector / Mooncake 的团队升级到包含 #50809/#50361/#51482 的最新 main | vLLM 稳定性修复直接影响事件准确性与块复用行为 |

---

*报告基于 2026-08-11 六个项目公开 GitHub 动态生成，数据窗口为过去 24 小时。建议结合自身部署版本与硬件矩阵，对上述风险点做定向回归。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 动态日报（2026-08-11）

## 1. 今日速览

- **vLLM v0.27.0 正式发布**：561 个 commits、242 位贡献者，Kimi K3 全栈支持（模型、Kernel、Python/Rust 前端）一次落地。
- **DeepSeek-V4-Flash-0731 成为焦点**：SM8x（A100/A800）不可用、SM120 Blackwell 下 FlashInfer 路由崩溃、KV cache 容量异常等多个 issue 持续活跃。
- **稳定性修复密集**：FP8 descale 传递、DeepGEMM SM120 构建、KV offloading 事件、block 复用顺序等均有修复 PR 在推进。

过去 24 小时共有 **131 个 Issue** 和 **465 个 PR** 更新。

---

## 2. 版本发布与破坏性变更

### v0.27.0 发布

- 链接：https://github.com/vllm-project/vllm/releases/tag/v0.27.0
- 内容：
  - 561 commits，242 位贡献者（其中 64 位新贡献者）。
  - **Kimi K3 完整支持**：核心模型与 kernel（#50089、#50000）、Python 前端（#50093）、Rust 前端（#50104）、AttnRes kernels（#50090）。
- 说明：发布说明未列出明确破坏性变更。由于该版本改动量很大，涉及自定义 kernel、KV offload 或量化插件的项目建议先在 staging 环境回归。

---

## 3. 新模型与硬件支持

### Kimi K3 全栈支持

- v0.27.0 中已合入模型、kernel、Python/Rust 前端支持。
- 参考 PR：
  - https://github.com/vllm-project/vllm/pull/50089
  - https://github.com/vllm-project/vllm/pull/50000
  - https://github.com/vllm-project/vllm/pull/50093
  - https://github.com/vllm-project/vllm/pull/50104
  - https://github.com/vllm-project/vllm/pull/50090
- **ROCm 支持仍是差距**：Issue #50682 跟踪 Kimi-K3 在 ROCm/AMD 上的 enablement 与性能优化。  
  https://github.com/vllm-project/vllm/issues/50682

### DeepSeek-V4-Flash-0731 相关硬件兼容性

- **SM8x（A100/A800）不支持**：Issue #50576 请求为 DeepSeek-V4-Flash / DeepSeek-V4-Flash-0731 增加 SM8x 支持。  
  https://github.com/vllm-project/vllm/issues/50576
- **SM120 Blackwell 崩溃**：DeepSeek-V4-Flash-0731 + DSpark 在 RTX PRO 6000（SM120）上 FlashInfer sparse MLA decode kernel 路由失败。  
  https://github.com/vllm-project/vllm/issues/50720

### 新后端与量化支持

- **B12X 后端（SM120/SM121）**：PR #51696 为 NVIDIA SM120/SM121 增加 opt-in 的 linear、MoE、attention 后端。  
  https://github.com/vllm-project/vllm/pull/51696
- **DeepGEMM SM120 构建修复**：PR #51382 固定 DeepGEMM 最低版本和 SITU revision，解决 Blackwell 上加载崩溃。  
  https://github.com/vllm-project/vllm/pull/51382
- **XPU INC int4 w4a8 后端**：PR #50501 为 Intel XPU INC linear layer 增加 int4 权重 + 动态 int8 激活的 W4A8 路径。  
  https://github.com/vllm-project/vllm/pull/50501
- **ROCm DSV4 MXFP4 TP8 shard 分配修复**：PR #51473 保留原生 384-wide MXFP4 shard，避免 generic 路径四舍五入到 512。  
  https://github.com/vllm-project/vllm/pull/51473
- **humming wNaM 非对称量化**：PR #46528 为 compressed-tensors 的 wNaM kernel 启用 zero_point 非对称量化。  
  https://github.com/vllm-project/vllm/pull/46528
- **W4A16 DSA（勿合并）**：PR #51724 标记为 Do Not Merge，属于 DSA/FlashMLA 相关 W4A16 写路径实验。  
  https://github.com/vllm-project/vllm/pull/51724

---

## 4. 性能与优化

- **BlockPool 空闲块复用顺序修复**：PR #51482 修复 #48017 引入的回归，在关闭 prefix caching 时恢复 LIFO（prepend）复用顺序，避免 block 分配/reuse 退化。  
  https://github.com/vllm-project/vllm/pull/51482
- **KV offloading 背压检测**：PR #50045 为 KV cache tiering offloading manager 增加背压检测与恢复机制，避免磁盘/P2P 等慢二级存储导致任务堆积。  
  https://github.com/vllm-project/vllm/pull/50045
- **FlashAttention FP8 per-head descale 修复**：PR #51363 将 per-head FP8 Q/K/V descale 正确传入 FA4 CuTe kernel，此前 FA4 路径会丢失 descale。  
  https://github.com/vllm-project/vllm/pull/51363
- **Triton Proton profiling 后端**：PR #48789 增加轻量 profiler 后端，支持 NVIDIA CUPTI 与 graph-free 执行，便于 per-request/per-step 开销分析。  
  https://github.com/vllm-project/vllm/pull/48789
- **Mooncake KV 事件精确化**：PR #50361 只发布真正成功的 PUT 事件，并以精确 hash-edge 对象描述，提升 KV connector 可观测性。  
  https://github.com/vllm-project/vllm/pull/50361
- **W4A8-INT8 潜在性能优化**：Issue #49529 提出采用 PTX 9.4 `ldmatrix.s8.s4` 硬件扩展加载，减少 W4A8 路径 INT4→INT8 展开开销。  
  https://github.com/vllm-project/vllm/issues/49529
- **DeepSeek-V4-Flash 性能回归追踪**：Issue #49927 隔离出 #48137 和 #48660 的独立影响，其中 #48137 导致 spec-decode 接受率下降约 10.6%，#48660 改变输出分布。  
  https://github.com/vllm-project/vllm/issues/49927
- **DeepSeek-V4-Flash-0731 KV cache 容量异常**：Issue #51041 报告其 KV cache 每 token 占用约 56 bytes，是 preview 版本的约 8 倍，导致 H20 TP=2 上 max_model_len 被压低。  
  https://github.com/vllm-project/vllm/issues/51041

---

## 5. 稳定性与回归

按严重程度排列：

- **高危：V1 引擎 + MTP + GLM-5.1 在持续流量下挂起**  
  Issue #40926：workers hang，`sample_tokens` RPC 超时，`EngineDeadError`。目前未见 fix PR。  
  https://github.com/vllm-project/vllm/issues/40926

- **高危：Intel Arc B50 双卡 TP=2 初始化崩溃**  
  Issue #48953：`zeMemOpenIpcHandle` 返回 `ZE_RESULT_ERROR_INVALID_ARGUMENT`。目前未见 fix PR。  
  https://github.com/vllm-project/vllm/issues/48953

- **高危：Hybrid multi-group KV 在 connector load-error 块上崩溃**  
  Issue #50687：`_update_requests_with_invalid_blocks` 抛出 `ValueError: too many values to unpack`。  
  https://github.com/vllm-project/vllm/issues/50687

- **高危：FlashInfer sampler JIT 在无 nvcc 环境下启动崩溃**  
  Issue #49497：wheel 默认安装下 nvcc 不可见，JIT 失败且没有 fallback 到 native sampler。  
  https://github.com/vllm-project/vllm/issues/49497

- **高危：Blackwell SM120 上 block-scaled FP8（compressed-tensors W8A8）加载崩溃**  
  Issue #47436：DeepGEMM 断言 “Unknown SF transformation”。已有修复 PR：#51382 固定 DeepGEMM 版本。  
  https://github.com/vllm-project/vllm/issues/47436  
  https://github.com/vllm-project/vllm/pull/51382

- **中高危：Mistral3 复合 VLM 的 `tie_word_embeddings` 配置解析错误**  
  Issue #51063：从错误层级读取 `tie_word_embeddings`，导致真实 `lm_head.weight` 被丢弃，输出“词表对但语义错乱”。  
  https://github.com/vllm-project/vllm/issues/51063

- **中危：Ernie-4.5-VL encoder CUDA graph 后处理崩溃**  
  PR #51461 修复多路径输出场景下 `postprocess_encoder_output` 的 dict 处理，作为 #51263 revert 的 fix-forward。  
  https://github.com/vllm-project/vllm/pull/51461

- **中危：hybrid Mamba 的 `mamba_block_size` 未同步到 engine core**  
  PR #50809 修复与 #42966 同类的同步问题，避免 Qwen3.6-35B-A3B 等 hybrid Mamba 模型行为异常。  
  https://github.com/vllm-project/vllm/pull/50809

- **中危：spec decode 中 `ExtractHiddenStatesProposer` 使用错误 KV group 的 slot_mapping**  
  PR #51328 改为使用 per-group `slot_mapping`，避免 CacheOnly layer 的 `block_size` 与主 attention KV group 不一致时出错。  
  https://github.com/vllm-project/vllm/pull/51328

- **中危：Rust 前端 MiniJinja 方法查找问题**  
  PR #51235 升级 MiniJinja 2.18 → 2.22，移除 method lookup workaround。  
  https://github.com/vllm-project/vllm/pull/51235

---

## 6. 对应用开发者的意义

- **Kimi K3 可直接在 v0.27.0 上部署**：模型、kernel、Python/Rust 前端已齐备；但如果目标是 AMD ROCm GPU，仍需关注 Issue #50682 的 roadmap。
- **DeepSeek-V4-Flash-0731 上线前需谨慎评估**：
  - A100/A800 等 SM8x 设备目前跑不动，见 Issue #50576。
  - RTX PRO 6000（SM120）可能因 FlashInfer sparse MLA routing 崩溃，见 Issue #50720。
  - H20 上 KV cache 占用异常偏高（56 bytes/token），需要重新计算 `max_model_len`，见 Issue #51041。
- **FlashInfer 用户注意 nvcc 依赖**：默认 wheel 安装如果检测不到 nvcc，FlashInfer sampler JIT 可能导致引擎启动直接崩溃。建议在镜像中保留 nvcc，或关注 Issue #49497 的 fallback 修复。
- **Blackwell 上使用 FP8 compressed-tensors 的用户**：应等待包含 #51382 的构建，或手动固定 DeepGEMM 版本，否则加载阶段可能崩溃。
- **使用 KV connector / Mooncake / hybrid Mamba 的部署**：建议升级到包含 #50809、#50361、#51482 的最新 main，这些修复直接影响稳定性与事件准确性。
- **对 Agent 类应用**：若依赖 vLLM 的 `/v1/responses` 或工具调用，仍需留意 #39426 等协议兼容性问题；虽然状态为 stale，但官方 OpenAI SDK 兼容性风险未完全消除。  
  https://github.com/vllm-project/vllm/issues/39426

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

## SGLang 每日动态日报 — 2026-08-11

### 1. 今日速览

今日动态集中在 **DSpark 在 TP8 下的 CUDA Graph 稳定性问题**——多个高优先级 Issue 持续发酵，其中 #31023 已有一个修复 PR（#31195），但大型 decode CUDA-Graph 捕获仍存在非确定性非法内存访问（#33356），暂未见 fix。性能侧，DP Attention 调度器同步优化（#34338）和 DeepSeek-V4 的 SM120 支持（#29927）值得关注。新模型方面，Muse Glimmer 的原生支持已提交 PR。

---

### 2. 版本发布与破坏性变更

**无新版本发布。**

- **[依赖] FlashInfer 0.6.16.post2 升级 PR**（#33092）：明确提示 **必须跳过 0.6.16 原版**——其预编译 `flashinfer-jit-cache` wheel 与仓库锁定的 `apache-tvm-ffi==0.1.11` 存在 ABI 不兼容，升级需直接到 `.post2`。
  https://github.com/sgl-project/sglang/pull/33092
- **[行为变更] FlashInfer autotune flag 重构**（#34336）：`skip_logits` 重命名为 `run_lm_head`，autotune dummy-run 模式改为无条件启用。7 处调用点行为不变，但离线调优脚本若依赖旧 flag 需适配。
  https://github.com/sgl-project/sglang/pull/34336

---

### 3. 新模型与硬件支持

- **[新模型] Muse Glimmer 原生支持**（PR #34262）：同时覆盖 CUDA 与 MLX 后端。当前 CI 状态标记为失败（Run #31443717171），但具备 `run-ci-extra` 与 `apple-silicon` 标签，功能完整性尚待验证。
  https://github.com/sgl-project/sglang/pull/34262
- **[DSA 模型] Decode Context Parallelism (DCP)**（PR #31821）：将 MLA DCP 路径（#14194）扩展到稀疏注意力架构，支持 DeepSeek V3.2、GLM-5.x。KV 容量随 DCP 并行度倍增（物理 2,292,288 tokens/rank → 逻辑 4,252,416），沿用 `slot % dcp_size` 交错布局。
  https://github.com/sgl-project/sglang/pull/31821
- **[AMD] DeepSeek V4 支持 prefill CP 两批重叠**（PR #33480）：为 AMD 平台补齐此前仅 CUDA 可用的 prefill 上下文并行优化路径。
  https://github.com/sgl-project/sglang/pull/33480

---

### 4. 性能与优化

- **DP Attention 调度器同步收敛为单次 D2H 拷贝**（PR #34338）：替代 #23011 的重复优化，将原先 5 次独立设备同步（两个 `.cpu()` + 三个 `.item()`）合并为一次 gather 拷贝，可显著降低 DP 注意力路径的调度延迟。
  https://github.com/sgl-project/sglang/pull/34338
- **SM120 (Blackwell) DeepSeek-V4 加速路径**（PR #29927）：打通 DeepGEMM paged-MQA indexer + FP4 MoE + page-split 组合。在 4×RTX PRO 6000 场景下，decode 延迟最高可减少 3.4×（此前只能跑 torch 慢速回退）。标注为 `release-highlight`。
  https://github.com/sgl-project/sglang/pull/29927
- **DSA prefill 新增 fused Triton 稀疏 MLA 后端**（PR #32779）：解决 SM90/SM100+ 上 `flash_mla_sparse_fwd` 对 head count 的整除要求（`%64` / `%128`），避免 zero-padding 开销。
  https://github.com/sgl-project/sglang/pull/32779

---

### 5. 稳定性与回归

按严重程度排列：

- **🔴 DSpark compact target-verify CUDA Graph 非法内存访问（TP8）**（#31023）：TP>1 下跨 rank 规划不一致导致非法访问，已由 PR #31195 修复控制流问题，但该 PR 尚未合入主干。现象属于时序敏感型，复现难度高。
  https://github.com/sgl-project/sglang/issues/31023
- **🔴 DSpark 大型 decode CUDA-Graph 捕获在启动期崩溃（TP8, v0.5.16）**（#33356）：官方 release 镜像上，B300/B30Z TP8 启动时 CUDA illegal-memory / host SIGSEGV，首次触发 shape 因启动批次而异——非确定性。**暂无 fix PR。**
  https://github.com/sgl-project/sglang/issues/33356
- **🟠 DeepSeek-V4 decode 死循环（TP8, 8×H20, ~245K 上下文）**（#33549）：decode forward 无限挂起，所有 GPU 100% 利用率但低功耗，最终 watchdog 杀服务。镜像的 DSpark 解码/捕获类问题疑似同源，值得关注 #32432 RFC 提出的 CUDA Graph 契约治理。
  https://github.com/sgl-project/sglang/issues/33549
- **🟠 Kimi-K3 DSPARK：Xid 13（CTA Not Present）**（#32855）：B300 上约 218K token 上下文崩溃，虽标记为 CLOSED，但未见修复 PR 关联，建议在 DSpark 跟踪议题（#30344）中持续跟进。
  https://github.com/sgl-project/sglang/issues/32855
- **🟡 Prefill FLOPs 估算忽略 `prefix_lens`**（#34298）：chunked-prefill 场景下 `est. prefill TFLOPS/s` 退化为 1/latency 单调函数，影响指标准确性，不影响正确性。
  https://github.com/sgl-project/sglang/issues/34298

---

### 6. 对应用开发者的意义

- **DSpark + TP8 在生产环境仍需谨慎**：多个 20 万+ token 场景的崩溃集中在 DSpark 解码/CUDA Graph 路径，且部分无修复 PR。若你的 Agent 工作负载依赖超长上下文（>200K），建议：① 固定 SGLang 版本并充分压力测试后再上线；② 在路由/网关层增加自动重启与 fallback 策略。
- **长上下文下观察“100% GPU 利用率但无进展”需警惕**：这可能是死循环而非正常计算（参考 #33549），监控侧建议加入 decode 进度/令牌产出率指标，而非仅看 GPU 利用率。
- **路由层增强信号明确**：#33625（bounded-load routing-key affinity）和 #33394（KV 放置状态快照/恢复）均为 SGLang Model Gateway 的可用性改进——前者解决会话亲和与负载均衡的冲突，后者解决 Router 重启后 KV 视图重建问题，适合多副本 PD 部署的团队跟踪。
- **工具调用解析问题已被修复**：KimiK2Detector 中正则跨 tool call 边界导致的静默数据丢失已在 PR #22173 修复；PythonicDetector 丢弃负数参数的问题（#27910）也已关闭——此类 bug 会直接导致 Agent 工具调用被吞，建议升级前验证这两个场景。
- **MLX 开发者注意**：#32833 提出用契约（contract）约束 MLX 替代事件循环与 `Scheduler.run_batch` 的继承关系，避免 7 月出现的四类回归问题再次发生——对 Apple Silicon 本地推理有需求的团队可以关注其落地形态。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 动态日报 2026-08-11

## 今日速览

最新版本 b10355 落地了多输出后端采样（multi-output backend sampling），为 token speculation 提供后端级采样支持。模型支持方面持续加速：Granite-Switch 稀疏 MoE 架构、Nemotron MTP 均已合入主分支。社区侧热点集中在 AMD/ROCm 平台：Qwen3.5 工具调用解析、DeepSeek-V4 乱码、Strix Halo 性能退化三个 issue 均保持高活跃度。

## 版本发布与破坏性变更

**[b10355](https://github.com/ggml-org/llama.cpp/releases/tag/b10355) - 多输出后端采样**
- 为后端采样引入多输出支持（[PR #25532](https://github.com/ggml-org/llama.cpp/pull/25532)），将 mask 求和结果在转换为采样索引前进行 clamp，提升数值稳健性。
- 对序列最大输出数增加数值上下文参数声明。

**[b10354](https://github.com/ggml-org/llama.cpp/releases/tag/b10354) - Android CPU 亲和性修复**
- 修复 Android 上 CPU affinity mask 被忽略的问题（[PR #26838](https://github.com/ggml-org/llama.cpp/pull/26838)）。

**[b10353](https://github.com/ggml-org/llama.cpp/releases/tag/b10353) - ROLL 连续性约束（潜在行为变更）**
- CUDA/Metal 的 `ggml_roll` 内核按 `ne` 索引且忽略 `nb` strides，permuted 输入会产生静默错误。现要求 src 必须连续（[PR #25928](https://github.com/ggml-org/llama.cpp/pull/25928)）。若使用自定义图或算子链涉及非连续 ROLL，请注意此限制。

**[b10343](https://github.com/ggml-org/llama.cpp/releases/tag/b10343)** - 更新 cpp-httplib 至 0.53.0（[PR #26821](https://github.com/ggml-org/llama.cpp/pull/26821)）。

**[b10338](https://github.com/ggml-org/llama.cpp/releases/tag/b10338)** - 修复 model-saver 写入 expert shared/chunk FFN 长度时密钥被覆盖的问题（[PR #26693](https://github.com/ggml-org/llama.cpp/pull/26693)）。此前保存的 GGUF 文件中 shared_feed_forward_length 可能被错误覆盖。

## 新模型与硬件支持

**[Granite-Switch 架构合入](https://github.com/ggml-org/llama.cpp/pull/25107)**（b10342 已发布）
- 新增 `granite-switch` 架构：dense attention 主干 + N 个内嵌 LoRA adapter，由控制 token 按 token 选择。GGUF schema 新增对应 KV keys。
- 合并状态：POC，仅 CPU 后端。

**[Nemotron MTP 支持](https://github.com/ggml-org/llama.cpp/pull/26725)**（b10344 已发布）
- 为 Nemotron Nano 模型添加 MTP（Multi-Token Prediction）支持，新增 `mtp_flags` 配置。

**[EXAONE 4.5 SWA 修复 PR](https://github.com/ggml-org/llama.cpp/pull/26848)**（待合入）
- 修复 SWA（Sliding Window Attention）未对 EXAONE 4.5 启用的问题：此前 KV cache 占用远超预期，且在长上下文下输出为乱码。

**[pocket-tts 支持 PR](https://github.com/ggml-org/llama.cpp/pull/26871)**（待合入）
- 支持 pocket-tts 模型。该模型从离散音频码转向连续 embedding，为多阶段 TTS 流水线铺路。

**[MXFP4 / NVFP4 量化 PR](https://github.com/ggml-org/llama.cpp/pull/26869)**（待合入）
- 实现 dense MXFP4、MoE NVFP4 及相应量化例程：`MXFP4`、`MXFP4_MOE`、`NVFP4`、`NVFP4_MOE`。

## 性能与优化

**[CPU soft_max 多 pass 融合](https://github.com/ggml-org/llama.cpp/pull/26468)**（进行中）
- 将 `soft_max` 的多次 sweep 融合为更少 pass，降低内存流量。影响面覆盖 attention softmax（非 FA 路径）、MoE expert routing、sampler logits softmax。

**[cuBLAS 静态 workspace](https://github.com/ggml-org/llama.cpp/pull/26574)**（进行中）
- 为每个设备分配静态 cuBLAS workspace，按架构分配 NVIDIA 推荐大小，并确保 `SetStream` 后自动设置 workspace，减少运行时分配开销。

**[HIP unsafe-math 改为 opt-in](https://github.com/ggml-org/llama.cpp/pull/26696)**（进行中）
- 将 HIP 构建的 `-funsafe-math-optimizations` 默认关闭，通过 `GGML_HIP_UNSAFE_MATH=ON` 显式启用。代价是 HIP 构建默认性能略有回退，但 IEEE 一致性显著提升；对数值敏感场景（投机解码、采样复现）更友好。

**[Soft-max 融合对 MoE 路由的实际影响]**
- soft_max 在多 MoE 层每 token 都执行，融合后对 MoE 模型（如 DeepSeek-V4）的 CPU 推理延迟预期有可观改善，尚无基准数字。

## 稳定性与回归

按严重程度排列，标注是否已有修复 PR。

**高严重度**

1. **Qwen3.5 工具调用解析失败**（[#20837](https://github.com/ggml-org/llama.cpp/issues/20837)，59 评论，17 👍）
   启用 thinking 时，模型常将 tool calls 以 XML 形式输出在 thinking block 内并停止生成。对 Agent 场景影响直接。
   → 已有修复 PR：[#26793](https://github.com/ggml-org/llama.cpp/pull/26793) 收紧 Qwen 裸函数解析的 grammar 触发条件，避免误伤 `#include <functional>` 等合法内容。

2. **DeepSeek-V4 在 Strix Halo + ROCm 下输出乱码**（[#25436](https://github.com/ggml-org/llama.cpp/issues/25436)，27 评论，5 👍）
   IQ3_XXS 量化在 gfx1201 上产生乱码，多个系统复现。无明确修复 PR。

3. **Strix Halo 输入层跑在 CPU 导致性能下降**（[#25700](https://github.com/ggml-org/llama.cpp/issues/25700)，30 评论）
   Qwen3.6 35B MoE Q8 在 Windows 上出现 30% CPU 占用，输入层未正确 offload 到 GPU。无明确修复 PR。

4. **ROCm 后端零温度非确定性输出**（[#14727](https://github.com/ggml-org/llama.cpp/issues/14727)，31 评论，已关闭）
   长期存在的非确定性 bug，虽已关闭但评论区仍有活跃讨论。与 HIP unsafe-math 默认开启有相关性；[#26696](https://github.com/ggml-org/llama.cpp/pull/26696) 默认关闭 fast-math 后有望缓解。

**中严重度**

5. **HIP Q8 模型输出退化为重复字符**（[PR #26870](https://github.com/ggml-org/llama.cpp/pull/26870)，已关闭）
   特定系统提示下 ornith-1.0-35b-q8、qwen3.6-35b-a3b-Q8_0 输出全是 `//////` 或 `????`。PR 回退了 unsafe-math 编译 flag，与 #26696 方向一致。

6. **投机解码 + 量化目标导致贪婪解码发散**（[#25618](https://github.com/ggml-org/llama.cpp/issues/25618)）
   temperature=0 下 draft-model 投机解码在 Q4_K_M 目标上输出与 vanilla 不一致，bf16 目标无此问题。无修复 PR。

7. **MTP 跨请求状态残留导致非确定性输出**（[#26425](https://github.com/ggml-org/llama.cpp/issues/26425)）
   Qwen3.6-35B-A3B-MTP 在 Vulkan/CPU 下，MTP 状态未在请求间正确清理。无修复 PR。

8. **上下文检查点对 hybrid/recurrent 模型总是失效**（[#24055](https://github.com/ggml-org/llama.cpp/issues/24055)）
   影响 llama-server 的 context checkpoint 功能在 hybrid 架构上的可用性。无修复 PR。

**低严重度 / 构建**

9. **32 位 ARM + NEON 编译失败**（[#26677](https://github.com/ggml-org/llama.cpp/issues/26677)）
   GCC 下 `__fp16` 未知类型。
   → 已有修复 PR：[#26860](https://github.com/ggml-org/llama.cpp/pull/26860) 将 `__fp16` 门控在 `__ARM_FP16_FORMAT_IEEE` 后。

10. **Muse Glimmer 在 Vulkan 后端不支持**（[#26865](https://github.com/ggml-org/llama.cpp/issues/26865)，已关闭）
    当前 Vulkan 构建未包含此模型支持，需使用 CUDA 或等待上游合入。

**其他值得注意**

- **[SYCL: Qwen3.5 第二次 prompt 输出乱码](https://github.com/ggml-org/llama.cpp/issues/21589)**（已关闭）
- **[DeepSeek V4 Flash 在 Intel B70 (SYCL) 缺失 Lightning Indexer 与 HC Fused Ops](https://github.com/ggml-org/llama.cpp/issues/26549)**
- **[CUDA flash-attention 在系统休眠后崩溃](https://github.com/ggml-org/llama.cpp/issues/24537)**（已关闭）
- **[.mcp.json 配置 PR 被关闭](https://github.com/ggml-org/llama.cpp/pull/26872)**：项目不接受 MCP 工具链配置文件入库。

## 对应用开发者的意义

- **Agent / 工具调用稳定性**：Qwen 系模型工具调用解析问题（[#20837](https://github.com/ggml-org/llama.cpp/issues/20837)）是当前 Agent 场景最大痛点。[#26793](https://github.com/ggml-org/llama.cpp/pull/26793) 合入后，`<function=` 触发条件收紧为完整序列，可避免误伤正常代码生成；但在 grammar 修复生效前，建议对 thinking 输出做额外剥离处理。

- **投机解码 / 采样路径变化**：b10355 多输出后端采样为服务端投机解码铺路，但 MTP 跨请求状态残留（[#26425](https://github.com/ggml-org/llama.cpp/issues/26425)）和量化目标下的发散问题（[#25618](https://github.com/ggml-org/llama.cpp/issues/25618)）意味着生产环境中仍需谨慎对比投机与 vanilla 输出一致性。可关注 [#26814](https://github.com/ggml-org/llama.cpp/pull/26814)（本地 draft 模型自动识别 `--spec-type`），将降低配置成本。

- **ROCm / AMD 平台注意**：HIP 构建默认关闭 unsafe-math（[#26696](https://github.com/ggml-org/llama.cpp/pull/26696)）后，数值确定性预期改善，但推理性能可能回退；在 gfx1201 等平台上仍存在乱码类问题。AMD 用户在升级前建议手动验证 Q8 模型输出质量。

- **模型格式与后端矩阵差异**：Granite-Switch、MXFP4/NVFP4（进行中）等新能力在不同后端支持进度不一；Muse Glimmer 在 Vulkan 上不支持。构建多后端服务的团队需加强按模型×后端组合的 CI 验证。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

## 2026-08-11 Ollama 动态日报

数据窗口：过去 24 小时（截至 2026-08-11）

### 1. 今日速览

Ollama 昨日连续发布 v0.32.7 正式版与 v0.32.8-rc0 预发布版，核心是 Meta 最新开源模型 **Muse Glimmer** 的接入：v0.32.7 先在 Apple Silicon MLX 引擎提供初始支持，v0.32.8-rc0 将支持扩展到 NVIDIA/AMD 等平台。与此同时，社区报告了多起涉及 MLX 正确性、CUDA 崩溃和工具调用回归的稳定性问题；好在已有若干修复 PR 落地（非 TTY 输出、工具调用解析错误等）。

### 2. 版本发布与破坏性变更

- **v0.32.7**（正式版）：新增 Muse Glimmer 初始支持，当前仅限 MLX 引擎（Apple Silicon）；官方注明后续几天会补充 NVIDIA/AMD 等平台优化。  
  [v0.32.7](https://github.com/ollama/ollama/releases/tag/v0.32.7) / [Release PR #17646](https://github.com/ollama/ollama/pull/17646)
- **v0.32.8-rc0**（预发布）：为 NVIDIA、AMD 及更多平台加入 Muse Glimmer 支持。  
  [v0.32.8-rc0](https://github.com/ollama/ollama/releases/tag/v0.32.8-rc0) / [Changelog](https://github.com/ollama/ollama/compare/v0.32.7...v0.32.8-rc0)

**迁移注意事项**：
- 有用户反映升级到 0.32.7 后 Jetson AGX Orin 上模型被“删除”（仅剩一个），需先在本地确认模型目录再升级。 [#17661](https://github.com/ollama/ollama/issues/17661)
- 0.32.4/0.32.5 在 VS Code Copilot Harness 中出现工具调用回归，回滚到 0.32.1 可解决，建议受影响的用户暂缓升级。 [#17444](https://github.com/ollama/ollama/issues/17444)
- 当前 `muse-glimmer:30b-q8_0` 等 manifest 要求预发布版 Ollama 才能拉取（HTTP 412），正式版用户需等待 0.32.8 正式发布或使用 rc。 [#17645](https://github.com/ollama/ollama/issues/17645)

### 3. 新模型与硬件支持

- **Muse Glimmer**：Meta 最新开源模型，v0.32.7 支持 MLX（Apple Silicon），v0.32.8-rc0 扩展至 NVIDIA/AMD 及更多平台。
- **Nemotron 3（Nano Omni）**：MLX 实现，包含 Mamba2/recurrent 组件、MoE 路由，以及 NVFP4/MXFP8 量化专家路径。 [#17060](https://github.com/ollama/ollama/pull/17060)
- **Gemma4 图像输入**：MLX 引擎新增视觉预处理与 embedding，支持统一 `vision_embedder.*` 与 transformer 型 `vision_tower.*` checkpoint。 [#17650](https://github.com/ollama/ollama/pull/17650)
- **Apertus 1.5（8B/70B）**：Swiss AI 开源多模态模型，新增原生 chat 解析/渲染支持。 [#17555](https://github.com/ollama/ollama/pull/17555)
- **Bailing MoE V3**：MLX safetensors 支持，含混合 KDA/MLA 注意力与 dense/MoE FFN。 [#17643](https://github.com/ollama/ollama/pull/17643)
- **Windows-on-Arm CPU 构建**：修复未设置 `-march` 导致退回 baseline armv8-a 的问题，启用点积/矩阵指令。 [#17654](https://github.com/ollama/ollama/pull/17654)
- 社区在推动“MoE 专家权重放 host RAM、按需加载到 GPU”的能力，目标是在 8GB 显存上运行 16B/35B MoE 模型。 [#17557](https://github.com/ollama/ollama/issues/17557)

### 4. 性能与优化

- **Windows-on-Arm 性能修复**：通过设置 `GGML_CPU_ARM_ARCH` 启用硬件点积/矩阵指令，避免 CPU runner 运行在 baseline armv8-a 上，零兼容性风险。 [#17654](https://github.com/ollama/ollama/pull/17654)
- **TTFT 回归报告**：Windows/CUDA 上从 0.24.0 升级到 0.32.6 后，warm TTFT 出现固定每请求增量（Gemma E4B +156ms、Qwen3 +44ms），但生成吞吐反而提升，prompt cache 无异常；需官方进一步定位。 [#17631](https://github.com/ollama/ollama/issues/17631)
- **Windows 双路服务器性能瓶颈**：CPU-only/GPU-only/Hybrid 配置下推理速度均低，高 CPU 低 GPU 利用率，待调查。 [#16873](https://github.com/ollama/ollama/issues/16873)
- **Benchmark 改进**：用 HumanEval 代码续写任务替换原有字序生成器，让基准更贴近真实代码生成场景。 [#17480](https://github.com/ollama/ollama/pull/17480)

### 5. 稳定性与回归

**严重问题（无 fix PR）**：
- **MLX 跨请求响应污染**：`OLLAMA_KEEP_ALIVE=-1` 时长驻 runner 可能返回此前某个请求的完整答案，而非当前提示词的输出，严重影响正确性。 [#17599](https://github.com/ollama/ollama/issues/17599)
- **DGX Spark CUDA 非法内存访问**：在 GB10 上对 `qwen3-coder-next:q4_K_M`（80B-A3B，head size 256）执行大 prefill 时确定性崩溃于 `ggml_cuda_flash_attn_ext_mma_f16`。 [#17596](https://github.com/ollama/ollama/issues/17596)
- **升级后模型丢失**：Jetson AGX Orin 更新 0.32.7 后仅剩一个模型，其余全部消失。 [#17661](https://github.com/ollama/ollama/issues/17661)
- **VS Code 工具调用回归**：0.32.4/0.32.5 在 VS Code Copilot Harness 中破坏工具调用，回滚 0.32.1 可恢复。 [#17444](https://github.com/ollama/ollama/issues/17444)
- **MLX 生成不终止**：Laguna-S 2.1 MLX BF16 间歇性退化为“意识流”输出且不结束。 [#17632](https://github.com/ollama/ollama/issues/17632)
- **Runner 请求挂起**：0.20.5 上大型模型驻留内存数小时后，`/api/generate` 永久挂起（与已解决的 #15258 同形），仍未关闭。 [#15950](https://github.com/ollama/ollama/issues/15950)

**中等问题**：
- Qwen 模型加载失败：RTX 5070Ti 12GB 上升级后 Qwen3.6 35B 直接触顶显存，即使设置 4k context 也无法加载。 [#17517](https://github.com/ollama/ollama/issues/17517)
- Muse Glimmer 拉取失败：manifest 要求预发布版，返回 412。 [#17645](https://github.com/ollama/ollama/issues/17645)
- MLX 权重错误：`muse-glimmer:30b-mlx` manifest 实际由 NVFP4 层构建，并非真正的 MLX 权重。 [#17656](https://github.com/ollama/ollama/issues/17656)
- API 不一致：`/api/generate` 在设置 `format` 时静默忽略 `think` 参数，`/api/chat` 行为正常。 [#17544](https://github.com/ollama/ollama/issues/17544)
- hf.co 拉取不应用 parser：直接从 Hugging Face 拉取 GGUF 时，即使架构已识别，也不附加内置 RENDERER/PARSER，导致工具调用不可靠。 [#17636](https://github.com/ollama/ollama/issues/17636)

**已有修复 PR 的问题**：
- 非 TTY 输出 ANSI 转义序列：`ollama run > file` 会写入终端控制字符；PR #17644 已修复。 [#16785](https://github.com/ollama/ollama/issues/16785) → [PR #17644](https://github.com/ollama/ollama/pull/17644)
- 工具调用解析错误缺少客户端上下文：Qwen3-VL 等解析器将裸 JSON/XML 错误暴露给 HTTP 调用方；PR #17651 已包装错误上下文。 [#17647](https://github.com/ollama/ollama/issues/17647) → [PR #17651](https://github.com/ollama/ollama/pull/17651)
- harmony 工具调用参数畸形：gpt-oss/harmony 偶发产生非 JSON 对象参数，导致请求 HTTP 500；PR #17642 增加容错解析。 [PR #17642](https://github.com/ollama/ollama/pull/17642)
- `ollama create` 挂起：SHA-256 哈希阶段无进度反馈；PR #17649 增加 per-file 进度显示。 [#17491](https://github.com/ollama/ollama/issues/17491) → [PR #17649](https://github.com/ollama/ollama/pull/17649)
- 技能被静默丢弃：`~/.ollama/skills/` 中非法名称无诊断；PR #17657 改进扫描与报错。 [#17652](https://github.com/ollama/ollama/issues/17652) → [PR #17657](https://github.com/ollama/ollama/pull/17657)

### 6. 对应用开发者的意义

- **工具调用仍是主要风险区**：当前存在 VS Code harness 回归（建议锁定 0.32.1）、hf.co 拉取模型 parser 缺失、harmony 畸形参数等问题。好消息是社区已提交多个修复 PR（[#17642](https://github.com/ollama/ollama/pull/17642)、[#17651](https://github.com/ollama/ollama/pull/17651)），另有新增的 opt-in 渐进式工具参数流式输出（[PR #17658](https://github.com/ollama/ollama/pull/17658)）适合 Agent 场景。
- **API 行为不一致需注意**：`/api/generate` 与 `/api/chat` 在 `think` + `format` 组合下行为不一致，依赖 generate 的开发者应补充测试或考虑迁移到 chat 接口。
- **MLX 长驻服务有正确性风险**：`keep_alive=-1` 下存在跨请求响应污染，Apple Silicon 上长时间运行服务时建议缩短 keep_alive 或增加响应与请求的关联校验。
- **新模型选择增加**：Muse Glimmer、Nemotron 3、Gemma4 视觉、Apertus 1.5、Bailing MoE V3 均进入支持流程。不过 Muse Glimmer 的 MLX manifest 目前存在权重错误（指向 NVFP4 层），暂时不建议直接使用 `:30b-mlx` 标签。
- **云服务功能仍待落地**：Cloud usage stats API（[#12532](https://github.com/ollama/ollama/issues/12532)）和 Prompt Cache（[#16714](https://github.com/ollama/ollama/issues/16714)）社区需求强烈，但尚在 open 状态，依赖云端的应用需继续使用本地缓存或等待更新。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# 2026-08-11 LiteLLM 动态日报

## 今日速览

- 发布 v1.96.0，无功能变更，主要补充 Docker 镜像 cosign 签名验证说明。
- 多副本部署的稳定性与治理成为今日主线：虚拟密钥审计时间戳、Slack 花费报告跨 Pod 去重、UI 角色权限修复等多个 PR 集中推进。
- 流式 usage 严重少计（#36114）与预算执行失效（#26672）两个高影响问题仍开放，是当前最值得关注的存量风险。

## 版本发布与破坏性变更

- **v1.96.0**：无 API/配置破坏性变更。所有 Docker 镜像均以 cosign 签名，可使用固定密钥验签（commit `0112e53`）。  
  https://github.com/BerriAI/litellm/releases
- **Rust pip binary 工作仍在推进**（#31261）：目标让 `pip install litellm` 在兼容 wheel 环境中默认包含 Rust 扩展。当前安装方式未来可能变化，建议关注。  
  https://github.com/BerriAI/litellm/issues/31261

## 新模型与硬件支持

- **Z.AI `glm-5.2[1m]` 在代理中返回 Unknown Model**（#32218）：`glm-5.2` 正常，1M 变体不可用，涉及 llm translation 层，暂无关联修复 PR。  
  https://github.com/BerriAI/litellm/issues/32218
- **Anthropic `web_search` server tool on Bedrock e2e 测试补齐**（PR #36443，已关闭）：防止该路径后续静默回归。  
  https://github.com/BerriAI/litellm/pull/36443
- **模型弃用提醒功能持续开发**（PR #26900）：新增 `GET /model/deprecations` 端点与每日 Slack 告警，帮助运营在 provider 下架模型前完成迁移。  
  https://github.com/BerriAI/litellm/pull/26900

## 性能与优化

- **跳过无速率限制实体的 Redis 计数器写入**（#31880）：当前即使 key/user/team 未配置任何速率限制，每次调用仍会写 Redis。该 issue 提议跳过这些无意义写入，对高吞吐场景收益明显。  
  https://github.com/BerriAI/litellm/issues/31880
- **新增 `disable_entity_spend_updates` 开关**（#31866）：在保留原始 `LiteLLM_SpendLogs` 的前提下，跳过 key/user/team 等实体计数器的 UPDATE，减少高并发下数据库写放大。  
  https://github.com/BerriAI/litellm/issues/31866
- **标签级（tag-scoped）限流功能**（PR #36459）：按调用方自定义 tag 维度限制 token/request/dollar/并发，使用滚动窗口而非定时重置，补充现有 tpm/rpm 限额。  
  https://github.com/BerriAI/litellm/pull/36459
- **路由标签支持 AND 语义与 `allow_fail_open`**（PR #36193）：多标签路由可要求同时满足全部标签，并允许在无匹配 deployment 时降级放行。  
  https://github.com/BerriAI/litellm/pull/36193

## 稳定性与回归

按严重程度降序排列：

1. **流式 usage 严重少计（Provider 无关）**（#36114）：非流式 usage 正确，但流式请求在 stream aggregation 层少算 token，直接影响按量计费。已定位到聚合层而非 provider 转换，暂无 fix PR。  
   https://github.com/BerriAI/litellm/issues/36114
2. **预算执行在 v1.82.3 中失效**（#26672）：key/user 的 `max_budget` 超限后仍可继续请求。近两日活跃度高（15 条评论、4 👍），涉及代理预算强制核心路径。  
   https://github.com/BerriAI/litellm/issues/26672
3. **`/v1/memory` CRUD 端点跨租户越权**（#27722）：Team 2 可对 Team 1 创建的 key 执行 read/update/delete，未做授权校验。安全敏感，建议自查部署暴露面。  
   https://github.com/BerriAI/litellm/issues/27722
4. **Deployment 级 TPM 限制在多副本下失效**（#27736）：`usage-based-routing-v2` 下 TPM 为单 Pod 统计，实际限额变为 `tpm_limit × N_replica`。  
   https://github.com/BerriAI/litellm/issues/27736
5. **Bedrock Converse 对不支持 tools 的模型仍注入空工具列表**（#27138）：即使未传 tools、`drop_params=True` 也无效，导致 `meta.llama3-2-3b-instruct-v1:0` 等模型直接 400。  
   https://github.com/BerriAI/litellm/issues/27138
6. **websearch 拦截参数泄漏修复**（PR #36480，已关闭）：内部 kwargs 泄漏给 Bedrock Converse 导致 400，该 PR 将相关参数注册进 `all_litellm_params` 阻断透传。  
   https://github.com/BerriAI/litellm/pull/36480
7. **Redis 写失败日志泄漏管理员主密钥**（PR #36484）：写超时时记录了被缓存的原始值，已在日志调用点用 `redact_string` 脱敏。  
   https://github.com/BerriAI/litellm/pull/36484
8. **MCP 工具参数/结果在消息日志关闭时仍外泄**（PR #36474）：工具调用内容经 metadata 绕过现有 redaction，该 PR 在标准 payload 导出前统一脱敏。  
   https://github.com/BerriAI/litellm/pull/36474
9. **多副本 Slack 花费报告重复发送**（PR #36489）：每次部署/轮询都会触发每周报告，改为通过共享 PodLockManager 抢占，避免每 Pod 一份。  
   https://github.com/BerriAI/litellm/pull/36489
10. **LiteLLM_Config 表覆盖新部署配置**（#12875，已关闭）：`_update_config_fields` 从数据库表拉取值覆盖 `general_settings` 等配置，造成新配置不生效。  
    https://github.com/BerriAI/litellm/issues/12875

## 对应用开发者的意义

- **计费准确性风险**：流式 usage 少计（#36114）会导致基于 usage 的计费系统系统性少收。上游修复前，建议对 streaming 请求的 usage 做二次校验或对账。  
  https://github.com/BerriAI/litellm/issues/36114
- **多副本部署需留意限额语义**：TPM 限额（#27736）与预算执行（#26672）在 multi-replica 下都可能比预期宽松。若依赖硬性限额，请关注修复进展并考虑网关层额外兜底。
- **审计能力增强**：虚拟密钥新增 `config_updated_at` 时间戳（PR #36488），管理员可区分“创建时间”与“配置实际变更时间”，对合规审计更友好。  
  https://github.com/BerriAI/litellm/pull/36488
- **websearch 拦截在 Bedrock 上可用性恢复**：若通过 LiteLLM 代理 Bedrock 并使用 `web_search` 工具，PR #36480 修复了 400 问题，升级后可重新启用。  
  https://github.com/BerriAI/litellm/pull/36480
- **新限流维度值得评估**：标签级限流（PR #36459）与路由标签 AND 语义（PR #36193）适合多租户场景，可按外部客户标识或项目维度限流，且不依赖调用方 API key 隔离。
- **安全加固**：`/v1/memory` 跨租户问题（#27722）若代理暴露给不可信用户，建议立即通过网络策略限制访问；Redis 日志脱敏（PR #36484）与 MCP 参数脱敏（PR #36474）修复也应尽快跟进。  
  https://github.com/BerriAI/litellm/issues/27722

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 动态日报 — 2026-08-11

## 1. 今日速览

Unsloth 今日发布 v0.1.61-beta，正式支持 Meta Superintelligence Labs 首个开源模型 Muse Glimmer 30B（Apache 2.0），并为其提供 Dynamic Quants。与此同时，Unsloth Studio 相关的高频问题密集出现：Windows 本地 GGUF 路径解析导致 503 错误、Muse Glimmer GGUF 无法被内置 llama.cpp 加载、以及 ROCm/AMD 环境下多项崩溃；维护者已在 24 小时内提交针对路径分拆、Muse-Glimmer 架构识别与 ROCm Whisper 配对的修复 PR。

## 2. 版本发布与破坏性变更

**v0.1.61-beta：Meta Muse Glimmer 支持**
- 首个由 Meta Superintelligence Labs 发布的开源模型 Muse Glimmer（30B dense）现已可通过 Unsloth 运行，并提供 Unsloth Dynamic Quants 量化版本。
- 模型适用于本地 Agentic 与编码工作流，Apache 2.0 许可。
- 发布说明中无破坏性变更或迁移警告。

来源: [unslothai/unsloth v0.1.61-beta](https://github.com/unslothai/unsloth/releases) | [v0.1.60-beta](https://github.com/unslothai/unsloth/releases)

## 3. 新模型与硬件支持

**Muse Glimmer 30B 推理与量化支持**
- 新模型架构 `muse-glimmer`（含 vision projector），支持 Unsloth Dynamic Quants。
- 注意：当前内置 llama.cpp b10333 尚无法识别该架构，加载 Muse-Glimmer-30B-GGUF 会失败。修复 PR 已提交（见下文稳定性部分）。

**GLM-OCR 模型加载受阻**
- Issue #4269 报告 `unsloth/GLM-OCR`（DeepSeek_OCR2 Colab 流程适配 GLM_OCR2）在简单设置下抛错，无法加载。该 issue 历史悠久（2026-03 创建），至今仍为 OPEN 状态。

来源: [Issue #8345](https://github.com/unslothai/unsloth/issues/8345) | [Issue #4269](https://github.com/unslothai/unsloth/issues/4269)

## 4. 性能与优化

**GRPO 训练：lm_head 调用点宽度分派（PR #8204）**
- 修复 `_get_per_token_logps_and_entropies` 中假设 logits 恒为隐藏状态的逻辑缺陷。当 forward 非 Unsloth 生成路径时，真实 logits 输入 `chunked_hidden...` 可能导致错误；现按宽度对剩余 lm_head 矩阵乘调用进行分派。属正确性修复，间接影响 GRPO 训练吞吐的正确性保障。

**Studio 延迟加载优化（PR #8371）**
- 已加载模型再次对话时，Studio 可能显示 "Generating..." 达 16 秒（实测模型实际仅需 <0.5s 响应）后才开始输出。原因在于 Studio 不必要的磁盘模型搜索。修复后直接复用已加载模型。

来源: [PR #8204](https://github.com/unslothai/unsloth/pull/8204) | [PR #8371](https://github.com/unslothai/unsloth/pull/8371)

## 5. 稳定性与回归

按严重程度降序排列：

**严重**

1. **Muse Glimmer GGUF 无法加载（Issue #8345，OPEN，已有修复 PR #8366 部分覆盖）**
   - Unsloth Studio 可下载 `unsloth/Muse-Glimmer-30B-GGUF`，但内置 llama-server 不识别 `muse-glimmer` 架构，加载失败。
   - 来源: [Issue #8345](https://github.com/unslothai/unsloth/issues/8345)

2. **Windows 本地 GGUF 路径分拆导致 chat 503（Issue #8368/#8375，OPEN，修复 PR 已提交）**
   - Windows 盘符路径 `C:\...` 在 split_model_ref 处被错误拆分，导致所有本地 GGUF 模型聊天 503 `model_switch_failed`。涉及 Studio 2026.8.12 更新后的回归。
   - 来源: [Issue #8368](https://github.com/unslothai/unsloth/issues/8368) | [Issue #8375](https://github.com/unslothai/unsloth/issues/8375)

3. **AMD ROCm Whisper 更新失败：hipblaslt kernel catalog 缺失（Issue #8364，OPEN，修复 PR #8379）**
   - 本地 AMD RX 6800 环境安装后 whisper 更新失败。PR #8379 专门修复 Windows ROCm Whisper slim bundle 与 llama.cpp 运行时的配对问题。
   - 来源: [Issue #8364](https://github.com/unslothai/unsloth/issues/8364) | [PR #8379](https://github.com/unslothai/unsloth/pull/8379)

4. **AMD sd-cli 视频生成 SIGABRT（Issue #8322，OPEN）**
   - AMD 7800 XT 16GB 上 Auto/group 内存策略下 `ggml_abort: alloc compute params backend buffer failed`，SIGABRT 崩溃。
   - 来源: [Issue #8322](https://github.com/unslothai/unsloth/issues/8322)

5. **TRL 训练 checkpoint 保存 PicklingError（PR #8344，OPEN）**
   - 训练 SFTConfig 等 TRL trainer 时，首个 checkpoint 写入即崩溃（PicklingError: Can't pickle SFTConfig）。PR #8344 提出在 TRL 配置 patch 后保持 checkpoint 保存可用和可移植。
   - 来源: [PR #8344](https://github.com/unslothai/unsloth/pull/8344)

**中等**

6. **Studio 加载自身启动的本地模型失败（Issue #8365，OPEN）**
   - Studio 无法使用自己启动的本地模型，已更新至最新版仍复现。
   - 来源: [Issue #8365](https://github.com/unslothai/unsloth/issues/8365)

7. **MiniMax M3 GGUF 缺少 indexer.head_count 元数据（Issue #8360，OPEN）**
   - Apple Silicon（M3 Ultra）加载 `unsloth/MiniMax-M3-GGUF` UD-Q5_K_XL 失败。
   - 来源: [Issue #8360](https://github.com/unslothai/unsloth/issues/8360)

8. **API 请求不存在模型无错误提示（Issue #8376，OPEN）**
   - OpenAI 兼容 API 请求不存在的模型时静默失败，无任何错误/确认返回。
   - 来源: [Issue #8376](https://github.com/unslothai/unsloth/issues/8376)

9. **Sampling inside TrainingCallback 报 Invalid target device: None（Issue #3538，OPEN）**
   - 在所有 NVIDIA 硬件上复现（H100/H200/L40/A100），用户已升级至最新版本仍存在。
   - 来源: [Issue #3538](https://github.com/unslothai/unsloth/issues/3538)

10. **Studio 更新后闪现回归：训练暂停后 Resume 按钮消失（Issue #8150，CLOSED）**
    - 恢复训练按钮在 Stop and Save 后未出现，已关闭（可能已修复）。
    - 来源: [Issue #8150](https://github.com/unslothai/unsloth/issues/8150)

**低**

11. **AMD Ryzen AI 安装 bug 与 ROCm 环境杂项（Issue #8335、#8309）**
    - 本地 1 GPU 环境安装失败（#8335）；图片生成模型切换后首次 Generate 报 409 取消错误（#8309，已被 PR 定位）。
    - 来源: [Issue #8335](https://github.com/unslothai/unsloth/issues/8335) | [Issue #8309](https://github.com/unslothai/unsloth/issues/8309)

**已修复/回归确认**

- **CLOSED – 本地模型版本混淆（#8113）**：训练时自动从 HF 下载 Unsloth 版模型的问题已关闭（行为为预期或已澄清）。
- **CLOSED – Qwen 3.6 35B a3b Preserve Think 不工作（#5846）**：PR #8366 修复本地推理跨轮次保留及 OpenAI 兼容客户端 `reasoning_content` 丢弃问题，PR #7758 补充了前端到 llama-server 的 preserve_thinking 透传。
- **CLOSED – Z-Image LoRA 仅提供 Turbo 蒸馏版（#8270）**：已确认上游以非蒸馏 Tongyi-MAI/Z-Image 为基准，问题已关闭（可能已加白名单或调整）。

来源: [Issue #8113](https://github.com/unslothai/unsloth/issues/8113) | [Issue #5846](https://github.com/unslothai/unsloth/issues/5846) | [PR #8366](https://github.com/unslothai/unsloth/pull/8366) | [PR #7758](https://github.com/unslothai/unsloth/pull/7758) | [Issue #8270](https://github.com/unslothai/unsloth/issues/8270)

## 6. 对应用开发者的意义

1. **Windows 本地模型部署需谨慎**：若你的 Agent 应用在 Windows 上通过 Studio 或 API 服务加载本地 GGUF 模型，当前版本（2026.8.12）存在盘符路径拆分导致的 503 错误。建议固守旧版本或等待修复 PR 合入后再升级。

2. **Muse Glimmer 30B 暂不适合直接生产**：虽已发布官方量化支持，但内置 llama.cpp 尚无法加载其 GGUF 架构。如需使用，请等待 Studio 升级捆绑新 llama.cpp，或手动替换后端二进制。

3. **推理内容（reasoning）保留问题已改进**：针对 Qwen3.x 和 Muse Glimmer 的跨轮次思维链保留修复，对构建 Agent 应用有实际收益。但需要留意 PR #8366 仅修复了 Studio 路径，OpenAI 兼容 API 的 `reasoning_content` 透传仍在 PR #7758 中待合并。

4. **GRPO 训练正确性修复**：若你使用 Unsloth 的 GRPO 进行 RL 训练，PR #8204 修复了非 Unsloth 生成路径下 logits 处理错误。该修复对长上下文或自定义模型加载的稳定训练很重要。

5. **ROCm/AMD 用户仍处风险区**：Whisper 更新失败、视频生成崩溃、API 查询静默失败等均集中在 AMD/ROCm 环境。生产级 Agent 应用若依赖 AMD GPU，建议在问题闭环前保持当前版本并增强错误监控。

6. **Studio UI 高频迭代中**：今日 10+ 个 PR 集中于 UI 细节修复（横幅按钮覆盖、toast 遮挡、列表闪烁、清空确认等），表明 Studio 处于快速打磨期。API 面相对稳定，而 GUI 行为预期不宜作为稳定参考。

---

*本日报基于 GitHub 公开数据自动生成，数据截至 2026-08-11 00:00 UTC。*
*更多详情请访问: https://github.com/unslothai/unsloth*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*