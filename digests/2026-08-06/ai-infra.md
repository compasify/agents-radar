# AI 基础设施日报 2026-08-06

> 生成时间: 2026-08-06 01:24 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施生态横向对比分析报告（2026-08-06）

---

## 1. 生态全景

当前 AI 基础设施生态呈现**"硬件适配竞速 + 头部模型 Day-0 支持竞赛 + 稳定性问题集中爆发"**的三线并行态势。DeepSeek-V4、Kimi-K3、GLM-5.2、MiniMax-M3 等头部模型的密集发布，将推理引擎的适配压力推至峰值——各项目均在同一天内同时处理硬件适配（SM8x/SM12x/gfx1250/XPU/MLX）、性能优化（KV cache、MoE、MLA）和稳定性修复（NCCL 死锁、精度回归、缓存失效）三类工作。值得警惕的是，**多节点推理死锁/挂起成为跨项目的高频共性故障**（vLLM 的 MiniMax-M2.7 NCCL 死锁、SGLang 的多节点 TP 秩发散、llama.cpp 的 MTP 状态泄漏），说明分布式推理的可靠性仍远未成熟。

---

## 2. 各项目活跃度对比

| 维度 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---|---|---|---|---|---|---|
| **Issues 新增/更新** | ~12 个关键 issue（含 3 个性能跟踪） | ~13 个关键 issue | ~12 个关键 issue | ~7 个关键 issue | ~14 个关键 issue | ~18 个关键 issue |
| **PR 活跃** | 8 个 PR（含 1 个新模型支持） | 9 个 PR（含 1 个新架构适配） | 12 个 PR/9 个 Release | 6 个 PR（2 个大型功能） | 10 个 PR | 10 个 PR |
| **Release** | 无新 Release | 无正式 Release（0.5.17 预发布中） | **9 个版本**（b10278→b10289） | 无新 Release | v1.97.0-dev.1（dev） | **2026.8.5** + unsloth-zoo 2026.8.4 |
| **最受关注方向** | Batch Invariant 非确定性消除（67 评论） | DeepSeek-V4/Kimi-K3 Day-0 Bug 修复 | DeepSeek-V4 CUDA FA 正确性 | Reranking 支持（285👍 积压 2 年） | 成本计费正确性 | Windows 终端沙箱绕过 |
| **社区热度信号** | DeepSeek-V4-Flash SM8x 支持（56 评论） | KV Cache Reuse RFC | TurboQuant 量化支持（340👍） | MLX DFlash 投机解码 | Guardrails 工具扫描 | DwarfStar 格式集成询问 |

**数据说明**：Issues/PR 数为各项目日报中明确提及的关键条目数，实际全量数字可能更高。llama.cpp 的 Release 频率远超其他项目（每日 9 个版本），vLLM/SGLang 的版本节奏偏保守。

---

## 3. 模型支持竞速

| 模型/架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---|---|---|---|---|---|---|
| **DeepSeek-V4** | ✅ 支持（性能优化中）；Flash 变体 SM8x **不可用**、SM12x PR 推进中 | ✅ Day-0 支持（W4A16 Marlin 完成）；DSpark 路径有精度回归 | ⚠️ 支持但 CUDA FA 下输出重复 `<`（#26509） | ⚠️ KV cache 空闲丢失（#17577） | ✅ 模型映射支持 | ⚠️ Flash GGUF 加载失败（#7886） |
| **Kimi-K3** | 🔄 跟踪中（通用 + ROCm 双线） | ✅ Day-0 PR 已合入，DSpark 变体已发布 | ❌ 未提及 | ❌ 未提及 | ❌ 未提及 | ❌ 未提及 |
| **GLM-5.2** | ✅ 性能优化 sprint 收尾 | ❌ 未提及（GLM5.1 XPU 适配中） | ⚠️ HIP 性能大降（8×MI300X prefill 慢 6 倍） | ❌ 未提及 | ⚠️ `glm-5.2[1m]` 映射缺失（#32218） | ❌ 未提及 |
| **MiniMax-M3/H3** | ⚠️ M3 token 泄漏（#46042） | ⚠️ H3 启动失败 x2（#33466/#33501） | ✅ M3 架构测试重新启用（b10288） | ❌ 未提及 | ❌ 未提及 | ❌ 未提及 |
| **新架构值得关注** | — | AMD gfx1250（PR #32754） | BailingMoE3、Longcat-Flash、Qwen3-TTS | MLX Nemotron 3、Apertus 1.5 | — | DwarfStar/DS4（社区申请中） |

**竞速结论**：**SGLang 在 Day-0 支持上暂居第一**（Kimi-K3 合入、DeepSeek-V4 完成 W4A16），**vLLM 在硬件适配广度上领先**（XPU、ROCm、SM12x 多线推进），**llama.cpp 在新架构覆盖速度上惊人**（单日合入 BailingMoE3/Longcat/OCR 多项）但正确性风险较高。Ollama 严重依赖 llama.cpp 底层能力，LiteLLM 只做模型路由映射，Unsloth 在微调侧暂无新模型适配动态。

---

## 4. 性能优化前沿

| 优化方向 | 代表项目动态 | 关键进展 |
|---|---|---|
| **KV Cache** | SGLang Position-Independent KV Cache Reuse RFC；Ollama mlxrunner 缓存倒带修复；llama.cpp SWA/量化 KV cache 修复 | KV Cache Reuse RFC 如果落地将大幅降低 Agent 场景系统提示词拼接开销；缓存正确性成为各项目稳定性主战场 |
| **投机解码 / Speculative Decoding** | Ollama MLX DFlash 块扩散（草稿模型一次前向提议整块 token）；llama.cpp spec-decode metrics 对齐 vLLM；vLLM Batch Invariant 消除非确定性 | DFlash 是重要架构创新（复用目标隐藏层状态，省去独立 embedding 和输出头）；spec-decode 指标标准化利于网关层监控 |
| **MoE / 专家路由** | vLLM TRTLLM MXFP4 autotune 桶对齐；SGLang FP8 路由切换 FlashInfer；llama.cpp Expert 缓存（热专家 GPU/冷专家 CPU） | 各项目均意识到 MoE 路由/专家的显存与带宽优化空间巨大；llama.cpp Expert Cache 如落地对消费级硬件意义重大 |
| **量化** | vLLM ModelOpt 线性量化重构（6→1 个类）；llama.cpp TurboQuant 呼声最高（340👍 未实施）；SGLang DeepSeek-V4 W4A16 Marlin 完成 | 量化仍是低成本推理的核心抓手；ModelOpt 重构降低维护成本，TurboQuant 支持仍悬而未决 |
| **分布式推理** | vLLM MiniMax-M2.7 NCCL 死锁排查中；SGLang 多节点 TP 秩发散死锁、DeepSeek-V4 H20 挂起；llama.cpp GLM-5.2 8×MI300X 回归 | **分布式可靠性是当前最薄弱环节**——三个引擎同日暴露多节点问题，且大部分无 fix PR，生产环境多节点部署风险极高 |
| **算子/内核优化** | vLLM AITER MLA decode min_kv_seq_len 调整；SGLang Kimi-K3 MLA 门控融合；llama.cpp OpenCL FA 优化、HIP hipCUB 启用 | kernel 级优化仍是性能壁垒；AMD 路径（hipCUB、AITER）持续补强 |
| **启动/加载优化** | SGLang 权重缓存守护进程（Qwen3-235B FP8 加载从 306s→<1s）、CUDA Graph 桶限制（启动开销降 12-25%） | 冷启动优化是 serving 层容易被低估的体验瓶颈 |

---

## 5. 分层定位差异

```
┌─────────────────────────────────────────────────────────────────────┐
│                          应用层 / 网关                               │
│  ┌───────────┐                                                     │
│  │ LiteLLM   │  LLM 网关：成本计费、Guardrails、多 provider 路由     │
│  └───────────┘                                                     │
├─────────────────────────────────────────────────────────────────────┤
│                      高性能服务端推理引擎                             │
│  ┌───────────┐  ┌───────────┐                                      │
│  │   vLLM    │  │  SGLang   │  生产级多卡/多节点部署、Day-0 模型支持  │
│  │  PagedAttention │  RadixAttention、DSPark 等                     │
│  └───────────┘  └───────────┘                                      │
├─────────────────────────────────────────────────────────────────────┤
│                    本地运行时 / 轻量部署                             │
│  ┌───────────┐  ┌───────────┐                                      │
│  │ llama.cpp │  │  Ollama   │  单机/边缘，llama.cpp 为底层 kernel，  │
│  │           │  │           │  Ollama 在其上提供用户友好封装 + MLX    │
│  └───────────┘  └───────────┘                                      │
├─────────────────────────────────────────────────────────────────────┤
│                          训练 / 微调                                 │
│  ┌───────────┐                                                     │
│  │  Unsloth  │  微调框架：QLoRA、DPO，硬件适配（ROCm APU 等）        │
│  └───────────┘                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**关键差异点**：

- **vLLM vs SGLang**：目标用户高度重叠（生产级推理），但技术路线分化——vLLM 更重工程稳定性与硬件广度（XPU/ROCm/SM12x 均有投入），SGLang 更激进地追求 Day-0 支持与创新架构（DSPark、KV Cache Reuse、GDN 验证优化）。选择依据取决于**硬件环境**（vLLM 更稳）或**新模型首发需求**（SGLang 更快）。
- **llama.cpp vs Ollama**：llama.cpp 是"内核 + API"定位，适合嵌入式集成；Ollama 是"产品"定位，面向最终用户，但其日活跃度主要来自 llama.cpp 上游能力。
- **LiteLLM** 是唯一网关层代表，关注点（成本、Guardrails、批处理轮询）与推理引擎完全不同，是 Agent 流量治理的关键中间层。
- **Unsloth** 定位清晰（微调），与推理引擎无直接竞争，但其生态联动（GGUF 加载、Ollama 互通）使其受上游影响较大。

---

## 6. 值得关注的趋势信号

### 6.1 多节点推理可靠性是当前最大短板

三个推理引擎（vLLM/SGLang/llama.cpp）同一天暴露多节点死锁/挂起问题，且多数无修复 PR。**任何计划部署 2+ 节点推理集群的团队，当前都应预留故障排查时间**。建议：
- 生产环境优先单节点 + 大显存，或多节点但做充分压力测试后再上线。
- 关注 SGLang Issue #33289（2×DGX Spark NCCL 代理死锁）和 vLLM Issue #46097（MiniMax-M2.7 多节点空转）的进展。

### 6.2 Day-0 支持竞赛进入"以 Bug 换速度"阶段

SGLang 抢下 Kimi-K3 Day-0 合入，但随后 DSpark 精度回归（97.08→93.96）、H20 挂起等问题集中爆发。llama.cpp 单日合入多个新架构，但 DeepSeek-V4 正确性 bug 未解。**"率先支持"与"稳定可用"之间存在显著时差**。应用团队应采用"固定已验证版本 + 跟踪 issue"策略，而非盲目跟进主干。

### 6.3 投机解码从"锦上添花"走向"规模化标配"

llama.cpp 将 spec-decode 指标对齐 vLLM，Ollama 在 MLX 上实现 DFlash 块扩散，SGLang 对 MTP 状态泄漏进行修复——三大信号表明投机解码正从实验性功能转向生产级能力。**但 MTP 状态泄漏（llama.cpp #26425）和 spec-type 崩溃（#26558）说明多请求并发下的正确性仍是难点**。网关层可开始统一接收集成 spec-decode 指标的监控。

### 6.4 Apple Silicon 生态加速追赶

Ollama MLX 后端同日推进 Nemotron 3、DFlash、缓存倒带修复三个方向；Unsloth 社区报告 DwarfStar 格式在 M2 上比 llama.cpp 快 50%。**MLX 正从"能用"走向"好用"**，对本地 Agent 开发者是明确利好。

### 6.5 缓存正确性成为 Agent 体验的分水岭

Ollama 的 KV cache 空闲丢失（#17577）、llama.cpp 的 SWA 缓存错误（#21831）、SGLang 的 hierarchical cache KV 损坏（#33656）——**三个不同栈同日暴露缓存 bug**。对 Agent 应用而言，prompt 缓存失效 = 每轮全量重新 prefill = 延迟劣化数倍。建议应用层实现缓存感知的重试/降级逻辑，并主动上报缓存命中率指标。

### 6.6 Agent 安全与工具调用的基础设施化

Unsloth 的 Windows 终端沙箱绕过（cmd/start 拦截）、LiteLLM 的 tool_result Guardrails 扫描——**安全不再只是应用层责任，正在下沉到基础设施**。Agent 开发者应关注网关层的扫描能力（LiteLLM `scan_only_tool_results`），这对防止提示注入攻击至关重要。

### 6.7 量化生态仍在等待"杀手级格式"

llama.cpp 的 TurboQuant 支持获 340👍 但未排期，vLLM 将 ModelOpt 重构为通用实现，SGLang 对 FP8 路由做后端选择性分发——量化格式碎片化（GPTQ/AWQ/MXFP4/TurboQuant）仍是跨引擎互操作的痛点。**统一趋势是 FP4/MXFP4 时代正在逼近**（vLLM、Ollama MLX 均有动作）。

---

**给技术决策者的 3 条行动建议**：

1. **生产推理选型**：如果追求稳定 + 多硬件覆盖，vLLM 仍是首选；如果对最新模型有 Day-0 需求且能容忍调试成本，SGLang 更激进。两条路线都应**固定版本 + 跟踪关键 issue**。
2. **多节点部署暂缓**：三个引擎同日暴露多节点问题，建议将多节点推理部署计划推迟 2-4 周，等待修复合入后验证。
3. **Agent 应用开发**：优先选择支持缓存复用（RadixAttention）的引擎后端，同时在网关层（LiteLLM）做好成本拆分和 Guardrails 扫描，并关注 KV Cache Reuse RFC（SGLang #30928）——这是 Agent 场景时延优化的下一波红利。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 动态日报 2026-08-06

## 今日速览
过去 24 小时社区焦点集中在 **DeepSeek-V4-Flash 的硬件适配**（SM8x 支持请求持续升温，SM12x 支持 PR 推进中），以及 **Kimi-K3 / GLM-5.2 / DeepSeek-V4 的性能优化跟踪**。稳定性方面，MiniMax-M2.7 多节点 NCCL 死锁、DeepSeek-V4-Flash 在 SM12x 上挂起等 Bug 仍在排查；LoRA、Mamba offload、tiktoken 解析等修复 PR 已就绪。

## 新模型与硬件支持
- **DeepSeek-V4-Flash SM8x（A100/A800）支持** 仍为开放 issue，讨论热度高（56 条评论，10 👍）。当前 checkpoint 在 Ampere 上初始化即失败，暂无明确合入时间表。  
  [#50576](https://github.com/vllm-project/vllm/issues/50576) · [#40851](https://github.com/vllm-project/vllm/issues/40851)
- **PR [#41834](https://github.com/vllm-project/vllm/pull/41834)（New Model / NVIDIA）**：为 DeepSeek-V4-Flash 添加 SM12x（RTX 5090、RTX PRO 6000、GB10/DGX Spark）支持，含 SM12x fallback 与 tuning 栈，是 Blackwell 客户端用户的主要进展。
- **Kimi-K3 双线跟踪**：通用支持 [#50001](https://github.com/vllm-project/vllm/issues/50001) 与 AMD ROCm 路线图 [#50682](https://github.com/vllm-project/vllm/issues/50682) 均已更新，重点关注 KV cache manager、KDA 内核及 ROCm 侧 AITER fused-MoE 适配。
- **PR [#48476](https://github.com/vllm-project/vllm/pull/48476)（Intel XPU）**：为 Intel GPU 上的 DeepSeek V4 模型启用 MXFP8 线性权重（compressed-tensors），预处理 weight scale 以匹配 oneDNN 格式。

## 性能与优化
- **Batch Invariant（消除推理非确定性）** 是最受关注的技术方向，[#27433](https://github.com/vllm-project/vllm/issues/27433) 已积累 67 条评论、19 👍。
- **GLM-5.2 性能优化** [#46654](https://github.com/vllm-project/vllm/issues/46654)：sprint 任务大部分已完成（含 PR #36559、#46642 等），进入收尾阶段。
- **DeepSeek-V4 性能优化** [#45861](https://github.com/vllm-project/vllm/issues/45861)：已有 4 个 PR 合入，覆盖 MoE、注意力等关键路径。
- **PR [#51119](https://github.com/vllm-project/vllm/pull/51119)（ROCm/MLA）**：将 AITER MLA decode 的 `min_kv_seq_len` 默认值从 1 改为 16384，避免 FULL CUDA Graph 捕获时 Gluon split bucket 选择不当。
- **PR [#50942](https://github.com/vllm-project/vllm/pull/50942)（MoE）**：对齐 TRTLLM MXFP4 autotune 桶至 8192 tokens，与 DP-aware 约定保持一致。
- **PR [#49381](https://github.com/vllm-project/vllm/pull/49381)（Quantization）**：将 ModelOpt 线性量化从 6 个近重复的 `LinearMethod` 类重构为 1 个通用实现，降低维护成本。

## 稳定性与回归
- **MiniMax-M2.7 多节点 NCCL 死锁** [#46097](https://github.com/vllm-project/vllm/issues/46097)：4×DGX Spark TP=4 下所有 rank 空转（SM ~96%、mem 0%、~15W），无 fix PR。
- **DeepSeek-V4-Flash SM12x 挂起** [#40969](https://github.com/vllm-project/vllm/issues/40969)：`FULL_AND_PIECEWISE` + chunked prefill 下约 6 个请求后 hang，无修复。
- **TurboQuant KV cache 崩溃** [#41726](https://github.com/vllm-project/vllm/issues/41726)：RTX 5080 上大 chunked continuation prefill 触发 workspace lock 后崩溃。
- **MiniMax-M3 推理 token 泄漏** [#46042](https://github.com/vllm-project/vllm/issues/46042)：reasoning tokens 仍出现在 `content` 字段中，影响流式输出。
- **XPU 多卡问题**：dual Arc B50 TP=2 崩溃 [#48953](https://github.com/vllm-project/vllm/issues/48953)（与已关闭的 B70 问题 #41663 同源）；Arc B60 多卡 TP 挂起 [#50545](https://github.com/vllm-project/vllm/issues/50545)。
- **已就绪修复 PR**：Mamba CPU offload 边界对齐 [PR #51100](https://github.com/vllm-project/vllm/pull/51100)；tiktoken 重复 rank 拒绝 [PR #51135](https://github.com/vllm-project/vllm/pull/51135)；LoRA BF16 MoE 后端选择 [PR #51002](https://github.com/vllm-project/vllm/pull/51002)；MiniCPM-V Transformers v5 兼容 [PR #48413](https://github.com/vllm-project/vllm/pull/48413)。

## 对应用开发者的意义
- **A100/A800 上运行 DeepSeek-V4-Flash 仍不可行**，需持续关注 SM8x 支持进展；RTX 50 系 / DGX Spark 用户可跟踪 [PR #41834](https://github.com/vllm-project/vllm/pull/41834)。
- **MiniMax-M2.7 / M3 存在已知多节点与输出正确性缺陷**，生产使用前建议验证或等待修复。
- **多节点 + DP>1 的端口冲突修复**（[#39405](https://github.com/vllm-project/vllm/pull/39405) 已关闭）由 [PR #49212](https://github.com/vllm-project/vllm/pull/49212) 接续，建议关注合入状态。
- **XPU 多卡部署风险较高**，Intel GPU 用户应避免在生产环境启用 TP=2，直至 IPC/通信问题解决。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 动态日报 2026-08-06

## 今日速览

今日 SGLang 动态聚焦于三大方向：一是 **DeepSeek V4** 与 **Kimi K3** 两个旗舰模型的 Day-0 支持进入关键攻坚期，相关 Bug 报告（H20 挂起、多节点死锁、精度回归）集中出现；二是 **AMD gfx1250 / Intel XPU** 等新硬件适配进入 CI 验证阶段；三是 MiniMax H3 连续暴露多个启动与参数错误。此外，多个长期遗留 issue 被清理关闭，CI 稳定性持续改善。


## 版本发布与破坏性变更

- 无新 Release。
- `release/v0.5.17` 分支收到 cherry-pick PR，修复 Nightly NV CI（[PR #33779](https://github.com/sgl-project/sglang/pull/33779)），提示 0.5.17 即将发布。
- MiniMax-M3 Cookbook 重新基于 **0.5.16** 固定版本基准测试，原数据基于非公开 PR #27944，不可复现（[PR #33781](https://github.com/sgl-project/sglang/pull/33781)）。


## 新模型与硬件支持

- **AMD gfx1250 支持**：新架构无 MFMA/WMMA FP4 指令，需大量 sgl-kernel 适配，PR 进入 CI 验证（[PR #32754](https://github.com/sgl-project/sglang/pull/32754)）。
- **Intel XPU 三路推进**：DeepSeek V4 推理（[PR #25936](https://github.com/sgl-project/sglang/pull/25936)）、GLM5.1 DSA Attention（[PR #24959](https://github.com/sgl-project/sglang/pull/24959)）、MiniMax H3（[PR #33366](https://github.com/sgl-project/sglang/pull/33366)）。
- **Kimi K3 路线图**：Day-0 PR #32541 已合入，DSpark 变体已发布（[Issue #32607](https://github.com/sgl-project/sglang/issues/32607)）。
- **DeepSeek V4**：W4A16（Marlin）已完成，路线图持续跟进（[Issue #23602](https://github.com/sgl-project/sglang/issues/23602)）。


## 性能与优化

- **Kimi K3 MLA 门控融合**：将 TP-local 输出门投影合并进 QKV-A GEMM，降低投影开销（[PR #33623](https://github.com/sgl-project/sglang/pull/33623)）。
- **GDN 验证路径优化**：避免目标验证时 QKV 张量的冗余物化（`fused_qkv_split_gdn_prefill_kernel`），直接复用 `causal_conv1d_update` 打包输出（[PR #33778](https://github.com/sgl-project/sglang/pull/33778)）。
- **CI 启动加速**：限制 CUDA Graph 捕获桶范围（prefill 1024 / decode 64），可覆盖 97% CI 批大小，GPU 启动开销减少 12%（5090）至 25%（H100）（[PR #33776](https://github.com/sgl-project/sglang/pull/33776)）。
- **权重缓存守护进程路线图**：Phase 1 落地，Qwen3-235B FP8 权重加载从 306-327 秒降至 <1 秒（[Issue #33522](https://github.com/sgl-project/sglang/issues/33522)）。
- **FP8 路由优化**：将 per-tensor FP8 checkpoint 路由至 FlashInfer 后端（SM89/SM90）（[Issue #32993](https://github.com/sgl-project/sglang/issues/32993)）。


## 稳定性与回归

按严重程度排列，部分已有 fix PR，部分仍在排查：

1. **DeepSeek-V4 + DSPARK TP=8 在 8×H20 上 decode 无限挂起**（~245K context），GPU 满载但低功耗，最终被 watchdog 杀死——疑似死锁或 kernel 异常（[Issue #33549](https://github.com/sgl-project/sglang/issues/33549)）。
2. **多节点 TP 秩发散死锁**：2×DGX Spark 上 NCCL 代理卡在 logits all-gather，peer idles，间歇性发生（[Issue #33289](https://github.com/sgl-project/sglang/issues/33289)）。
3. **DeepSeek-V4 + hierarchical cache KV 位置损坏**：SWA 写位置错误导致采样 NaN 崩溃，可确定性复现（[Issue #33656](https://github.com/sgl-project/sglang/issues/33656)）。
4. **DSpark 精度回归**：DeepSeek-V4-Flash AIME25 从 97.08 降至 93.96（[Issue #32038](https://github.com/sgl-project/sglang/issues/32038)）；另有 0.5.12→0.5.14 分数倒退 3-4 分的报告（[Issue #33659](https://github.com/sgl-project/sglang/issues/33659)）。
5. **`torch.inference_mode()` 不一致**：warmup/autotune 与真实 forward 的 inference_mode 差异导致 lazy buffer 不安全，存在 inplace 更新隐患（[Issue #33470](https://github.com/sgl-project/sglang/issues/33470)）。
6. **MiniMax-H3 系列**：启动失败 args error（[Issue #33466](https://github.com/sgl-project/sglang/issues/33466)）及无法运行（[Issue #33501](https://github.com/sgl-project/sglang/issues/33501)），XPU 适配 PR 可能缓解部分问题。
7. **PP 与 HiCache 兼容性错误**（[Issue #30158](https://github.com/sgl-project/sglang/issues/30158)）。
8. **确定性推理模式在 L40S 上 Triton shared-memory OOM**（[Issue #29149](https://github.com/sgl-project/sglang/issues/29149)）。
9. **已修复**：GLM-5.2 MTP + PD 场景 `dsa_seed_topk_copy_` 崩溃已关闭（[Issue #30854](https://github.com/sgl-project/sglang/issues/30854)）；DSpark Inkling-Small 词表越界有 fix PR（[PR #33748](https://github.com/sgl-project/sglang/pull/33748)）。
10. **nightly-dev 镜像版本漂移**：镜像标签标注的 commit 与安装的 sglang 源码可能不一致，新用户可能踩到未发布的代码（[Issue #33628](https://github.com/sgl-project/sglang/issues/33628)）。


## 对应用开发者的意义

- **DeepSeek-V4 / Kimi-K3 生产部署需谨慎**：当前两个模型的 DSpark 路径存在精度回归与死锁/挂起风险，建议在关键负载上显式关闭 speculative decoding（`--speculative-algorithm NONE`），或固定在已验证的精调版本上，跟踪对应 issue 更新。
- **MiniMax-H3 暂不建议上生产**：连续出现两个启动级 Bug，模型本身也处于 XPU 适配阶段，建议等待修复后再评估。
- **Agentic/RAG 架构值得关注 KV Cache Reuse RFC**：Position-Independent KV Cache Reuse 如落地，可大幅降低系统提示词/工具 schema 在不同位置重复拼接的 KV 开销（[Issue #30928](https://github.com/sgl-project/sglang/issues/30928)）；同时关注 DCP/Helix 并行路线图，对超长上下文 decode 时延改善明显（[Issue #29736](https://github.com/sgl-project/sglang/issues/29736)）。
- **日常使用注意 nightly 镜像漂移问题**：如需可复现环境，优先选用固定 release tag，而非 nightly 系列。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 动态日报 — 2026-08-06

## 1. 今日速览

昨日至今共发布 **9 个新版本**（b10278→b10289），核心方向是 **server 稳定性加固**（目录遍历安全修复、spec-decode 指标）与 **mtmd 多模态增强**（DeepSeek-OCR 多行批处理、Unlimited-OCR 修复）。社区讨论热度集中在 **DeepSeek-V4 系列在 CUDA/Vulkan 上的崩溃与生成异常**，以及 **Qwen 系列强制重新处理 prompt 的缓存失效问题**；此外，QLoRA 微调示例与 bailingmoe3 支持等大型 PR 正在推进中。

## 2. 版本发布与破坏性变更

| 版本 | 关键变更 | 破坏性说明 |
|---|---|---|
| [b10289](https://github.com/ggml-org/llama.cpp/releases/tag/b10289) | server: 加固 `file_glob_search` 目录遍历，不再跟随 Windows junction | 修复潜在路径遍历/死循环问题 |
| [b10288](https://github.com/ggml-org/llama.cpp/releases/tag/b10288) | tests: 重新启用 MiniMax M3 架构测试（[#26633](https://github.com/ggml-org/llama.cpp/pull/26633)） | 无 |
| [b10287](https://github.com/ggml-org/llama.cpp/releases/tag/b10287) | mtmd: 修复 Unlimited-OCR 的 `max_tiles` 设置（[#25614](https://github.com/ggml-org/llama.cpp/issues/25614)） | 无 |
| [b10286](https://github.com/ggml-org/llama.cpp/releases/tag/b10286) | grammar: `max repetition >= 2000` 时降级为无界（[#26613](https://github.com/ggml-org/llama.cpp/issues/26613)） | **行为变更**：高重复上限的 grammar 不再约束生成，需确认现有 grammar 配置是否符合预期 |
| [b10285](https://github.com/ggml-org/llama.cpp/releases/tag/b10285) | mtmd: DeepSeek-OCR 支持多行批处理；一次性交织所有行而非逐行（[#26154](https://github.com/ggml-org/llama.cpp/issues/26154) / [#26615](https://github.com/ggml-org/llama.cpp/issues/26615)） | 无 |
| [b10284](https://github.com/ggml-org/llama.cpp/releases/tag/b10284) | fit: 修复 MTP 层内存分配（[#26605](https://github.com/ggml-org/llama.cpp/issues/26605)） | 无 |
| [b10282](https://github.com/ggml-org/llama.cpp/releases/tag/b10282) | server: `/metrics` 新增 spec-decode 计数器，参数命名与 vLLM 对齐（[#26389](https://github.com/ggml-org/llama.cpp/issues/26389)） | 指标命名与 vLLM 对齐，已有监控面板可能需要调整 |
| [b10280](https://github.com/ggml-org/llama.cpp/releases/tag/b10280) | vendor: 应用 subprocess.h 补丁（[#26606](https://github.com/ggml-org/llama.cpp/issues/26606)） | 无 |
| [b10278](https://github.com/ggml-org/llama.cpp/releases/tag/b10278) | build: 从所有构建脚本中移除 `GGML_METAL_USE_BF16`（[#26604](https://github.com/ggml-org/llama.cpp/issues/26604)） | **破坏性变更**：Metal 自定义构建脚本中含该选项的会失效，需清理 |

## 3. 新模型与硬件支持

- **[bailingmoe3 支持 PR #26608](https://github.com/ggml-org/llama.cpp/pull/26608)**：新增 BailingMoE 3 架构支持，可运行 Ling 3.0 flash 模型并支持 MTP，对应 issue [#26590](https://github.com/ggml-org/llama.cpp/issues/26590)。
- **[Longcat-Flash PR #19182](https://github.com/ggml-org/llama.cpp/pull/19182)**：支持美团 Longcat-Flash-Chat（MLA + zero-computing experts），仍待测试。
- **[Longcat-Flash-Lite PR #19167](https://github.com/ggml-org/llama.cpp/pull/19167)**：ngram embedding 实现，处于粗糙讨论阶段。
- **[Qwen3-TTS PR #26254](https://github.com/ggml-org/llama.cpp/pull/26254)**（已关闭/合并）：支持 Qwen3-TTS-12Hz-1.7B-Base，**注意这是 llama-tts 二进制的破坏性变更**。
- **[hipCUB 启用 PR #26592](https://github.com/ggml-org/llama.cpp/pull/26592) / [#26388](https://github.com/ggml-org/llama.cpp/pull/26388)**：HIP 后端启用 CUB 设备级原语（argsort/top_k），补齐 AMD ROCm 上的高性能路径。
- **[CUDA 13.4 Windows ARM64 CI PR #26650](https://github.com/ggml-org/llama.cpp/pull/26650)**：新增 ARM64 Windows CUDA 构建支持。
- **量化格式方面**：社区呼声最高的 [#20977 TurboQuant 支持](https://github.com/ggml-org/llama.cpp/issues/20977) 获得 340👍，仍未开始实施。

## 4. 性能与优化

**已落地：**

- **DeepSeek-OCR 多行批处理**（b10285）：将多行 OCR 一次性交织推理，替代逐行处理，显著减少多图/长文档 OCR 的重复 prefill 开销。
- **OpenCL FA prefill 优化 PR #26428**：将 K tile 在 local memory 中转置后再做 QK 循环，减少 bank conflict，优化 `flash_attn_f32_f16` / `_q8_0` / `_q4_0` 三个 prefill kernel。
- **HIP 启用 CUB 路径**（#26592）：此前 HIP 上 argsort/top_k 回退到 shared-memory bitonic sort（每线程一元素，限制 1024 行宽），启用 hipCUB 后 AMD 设备可走设备级原语，是大 batch 采样/路由场景的明显加速。

**进行中：**

- **Expert 缓存 PR #26563**：CUDA-only 特性，跟踪专家热力图，将热专家放在 GPU、冷专家放在 CPU 计算，默认关闭，通过 `-ehs N` 开启。对 MoE 模型（DeepSeek-V4、Qwen3.6-MoE）可能带来显著吞吐提升，但需注意 CPU-GPU 传输开销。
- **CUDA MoE MMQ N-tile 尺寸调整 PR #24546**：针对 RDNA3 路由 MoE prefill，根据典型专家宽度（而非最大宽度）选择 N-tile，优化 AMD 上的 routed MoE prefill 性能。

**性能回归跟踪：**

- [#26445 GLM-5.2 HIP 性能大降](https://github.com/ggml-org/llama.cpp/issues/26445)：8x MI300X 上，Indexer PR #25407 导致 prefill 慢约 6 倍、加载时间慢约 40 倍。
- [#26470 Metal Gemma 4 E4B Q8_0 decode 回归](https://github.com/ggml-org/llama.cpp/issues/26470)：b9730 到 b10219 之间 decode 速度下降约 13%，Qwen 模型不受影响，疑似 Metal 后端特定回归。

## 5. 稳定性与回归

按严重程度排列：

**【高】生成正确性/崩溃问题：**

- [#26509 DeepSeek-V4 在 CUDA FA 下输出重复 `<`](https://github.com/ggml-org/llama.cpp/issues/26509)：prompt 超过一次 forward pass 即触发，CPU 和 `-fa off` 均正常。目前无修复 PR。
- [#26558 llama-server 硬崩溃](https://github.com/ggml-org/llama.cpp/issues/26558)：`--spec-type draft-mtp` 在 KV-cache 饱和时触发 `cublasSgemm INVALID_VALUE`。当天已有相关修复 [#26651](https://github.com/ggml-org/llama.cpp/pull/26651)（dist sampler 在退化 logits 上崩溃），建议升级验证。
- [#25664 Vulkan `vk::DeviceLostError`](https://github.com/ggml-org/llama.cpp/issues/25664)：DeepSeek-V4-Flash 在 RADV/Strix Halo 上数轮内崩溃。
- [#26425 MTP 跨请求状态泄漏](https://github.com/ggml-org/llama.cpp/issues/26425)：MTP 保留 inter-request 状态导致非确定性输出与模型退化，影响 Qwen3.6-35B-A3B-MTP。

**【中】回声/缓存类问题：**

- [#22746 Qwen 3.6 27B 强制重新处理](https://github.com/ggml-org/llama.cpp/issues/22746)（已关闭，125 评论）：因 cache 数据缺失导致每请求全量 prefill。
- [#21831 Server SWA 缓存错误](https://github.com/ggml-org/llama.cpp/issues/21831)：SWA/recurrent memory 错误导致后续请求全量重处理。
- [#26423 DeepSeek-V4-Flash 量化 KV cache 产生垃圾数据](https://github.com/ggml-org/llama.cpp/issues/26423)：已确认由 #25391 的 arch-scoped rotation disable 修复。
- [#26478 llama-spec 在 16k 边界失败](https://github.com/ggml-org/llama.cpp/issues/26478)：KV cache 位置跟踪非连续（Y != X + 1）。

**【低】平台/工具链：**

- [#26343 Windows Defender 误报](https://github.com/ggml-org/llama.cpp/issues/26343)：b10195-win-cpu-x64 被报病毒，需关注是否影响 CI 发布。
- [#26447 Vega 8 iGPU 约 50K 上下文后 DeviceLost](https://github.com/ggml-org/llama.cpp/issues/26447)。

**【已有修复 PR / 已关闭】**：b10289 已修复目录遍历死循环；[#26653](https://github.com/ggml-org/llama.cpp/pull/26653) 修复 Granite4 Vision 图像序列组装退化；[#26656](https://github.com/ggml-org/llama.cpp/pull/26656) 修复 `/cors-proxy` 空响应；[#26649](https://github.com/ggml-org/llama.cpp/pull/26649) 为 Qwen3-TTS 增加 `ggml_build_forward_order` 公共 API，修复 CPU 路径。

## 6. 对应用开发者的意义

- **可观测性升级**：b10282 在 `/metrics` 中加入 spec-decode 计数器且命名与 vLLM 对齐，使用 MTP/推测解码的网关可以直接用标准 metric 监控接受率与解码效率。
- **Server 安全性**：b10289 修复了 Windows junction 导致的目录扫描死循环与潜在路径遍历，自托管 server 应尽快升级。
- **Grammar 行为变更（b10286）**：`max repetition >= 2000` 现在等价于无界，若应用依赖 grammar 做输出长度控制，需要显式调低上限或改用其他约束。
- **构建配置清理**：如果自定义构建脚本仍在使用 `GGML_METAL_USE_BF16`，必须移除（b10278），否则 CMake 会报未定义选项错误。
- **AMD 用户受益**：hipCUB 启用后，ROCm 上的大词汇采样和 MoE 路由性能将明显改善，对应 `argsort` / `top_k` 算子不再走慢速回退路径。
- **若使用 Qwen3-TTS**：注意升级后 `llama-tts` 二进制参数有破坏性变化（新增 `--tts-lang`、`--tts-speaker-file`）。
- **若使用 DeepSeek-V4 系列 + CUDA FA**：当前 master 上存在输出重复 `<` 的正确性问题，建议暂时以 `-fa off` 运行或关注 [#26509](https://github.com/ggml-org/llama.cpp/issues/26509) 的修复进展；使用 MTP 的部署还需关注 [#26558](https://github.com/ggml-org/llama.cpp/issues/26558) 和 [#26425](https://github.com/ggml-org/llama.cpp/issues/26425) 的状态泄漏问题，及时跟进 #26651 的合入。
- **新模型接入节奏**：BailingMoE3、Longcat-Flash、Qwen3-TTS 等新架构 PR 密集，建议评估这些模型在自研 Agent 链路中的适用性，但合并后仍处于验证期，生产引入前需等待稳定 tag。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 动态日报 · 2026-08-06

## 今日速览

MLX 后端成为今日重点：`Nemotron 3` 支持、`DFlash` 块扩散投机解码两条大型 PR 持续活跃，同时 `mlxrunner` 缓存倒带修复已合入。稳定性方面，社区集中报告了 KV cache 丢失、`num_ctx` 静默减半以及 Vulkan 覆盖 CUDA_VISIBLE_DEVICES 等多项问题，其中多个关联修复 PR 已于今日提交。项目暂无新的版本 Release 发布。

## 版本发布与破坏性变更

今日无新 Release、新配置项变更或 API 迁移类事项。

## 新模型与硬件支持

- **PR #17060（开发中）— MLX 实现 Nemotron 3**：包含多个自定义 Metal kernel（NVFP4/MXFP8 专家 kernel 路由等），属于针对 Apple Silicon 的模型架构适配。链接：https://github.com/ollama/ollama/pull/17060
- **PR #17555（待审）— Apertus 1.5 支持**：新增瑞士 AI 倡议开源多模态模型 `Apertus v1.5 8B/70B` 的原生 chat 支持，含渲染器与模板适配。链接：https://github.com/ollama/ollama/pull/17555
- **Issue #3368（已开放）— Reranking 模型支持**：该需求已持续积压超过两年，评论 111 条、获赞 285。社区对 `bge-reranker`、`mxbai-rerank` 类模型的呼声高，但目前无明确排期。链接：https://github.com/ollama/ollama/issues/3368

## 性能与优化

- **PR #17571（待审）— MLX DFlash 块扩散投机解码**：DFlash 草稿模型单次前向即可提议整块 token，无独立 embedding 表和输出头，复用目标的隐藏层状态。这是推测解码（speculative decoding）在高吞吐场景的重要新方案。链接：https://github.com/ollama/ollama/pull/17571
- **PR #17576（待审）— 修复聊天图片缩略图性能回归**：每次键入都会重建全部图片 Blob 和对象 URL，导致输入卡顿（原 issue #17540）。修复通过对 `ImageThumbnail` 的 memo 逻辑减少 blob URL 重建次数，直接改善多模态聊天 UI 的交互延迟。链接：https://github.com/ollama/ollama/pull/17576
- **PR #17581（已合入）— mlxrunner 缓存倒带修复**：修复 lazy KV snapshot 在 append 覆盖后仍引用过期槽位的问题，防止缓存回放（cache rewind）污染后续懒加载快照，提升多轮场景缓存命中率与一致性。链接：https://github.com/ollama/ollama/pull/17581

## 稳定性与回归

- **Issue #17577（新提交）— DeepSeek-V4 prompt KV cache 空闲后丢失**：即使 `OLLAMA_KEEP_ALIVE=-1` 且前缀完全一致，短时间空闲后 KV cache 仍失效。开发者正测试 `LLAMA_ARG_SWA_FULL=1` 方案，尚无 fix PR。影响多轮会话与长上下文场景的响应延迟。链接：https://github.com/ollama/ollama/issues/17577
- **Issue #17427 — `num_ctx` 被静默截断为 `num_ctx/2 + 2`**：在 `gpt-oss:20b` 上可稳定复现，实际可用 prompt 窗口仅为配置值的一半，且与 `num_parallel`/`num_predict` 无关。会直接导致长提示词在未达到预期上限时即被截断，影响生成质量。链接：https://github.com/ollama/ollama/issues/17427
- **Issue #16508 — Vulkan 设备检测覆盖 `CUDA_VISIBLE_DEVICES`**：0.30.2 升级后 Vulkan 探测优先于显式 CUDA 设备指定，导致多卡场景下模型被错误调度。已标记 closed，但未在 issue 中明确修复版本。链接：https://github.com/ollama/ollama/issues/16508
- **Issue #17484 — 从 HuggingFace 拉取模型时报 `context deadline exceeded`**：多模型下载时表现为 pull 超时中断，目前仍开放。提示在 HF 作为上游时的下载链路稳定性仍需加强。链接：https://github.com/ollama/ollama/issues/17484
- **Issue #15582 — `bge-m3` 对部分 Markdown 返回 HTTP 500（NaN 序列化错误）**：特定文件触发 `json: unsupported value: NaN`，说明 embedding 输出中存在非有限值，影响 RAG 管线的健壮性。链接：https://github.com/ollama/ollama/issues/15582
- **修复 PR 列表（今日提交）**：
  - PR #17573 — 将请求历史从 `m.Messages` 中隔离，避免 `filterThinkTags` 原地修改模型自带消息导致永久性损坏。链接：https://github.com/ollama/ollama/pull/17573
  - PR #17574 — 隔离推理日志轮询快照，防止启动阶段重复读取不完整日志导致重复的 inference compute 行。链接：https://github.com/ollama/ollama/pull/17574
  - PR #17572 — `ollama-bench -output` 写文件前先截断，避免旧数据残留造成非法 CSV/benchstat。链接：https://github.com/ollama/ollama/pull/17572
  - PR #17575 — 修复桌面端启动等待循环不响应 context 取消的问题，取消时最长阻塞 5 秒。链接：https://github.com/ollama/ollama/pull/17575

## 对应用开发者的意义

1. **上下文窗口需保守预估**：`num_ctx` 减半问题（#17427）意味着依赖精确上下文长度的应用（如检索增强生成、长文档摘要）应主动缩小发送给模型的 prompt 长度，或在应用层通过 `num_ctx` 设置更高冗余值，避免被静默截断。
2. **多卡调度不确定性加剧**：Vulkan 检测干扰 `CUDA_VISIBLE_DEVICES`（#16508）会导致多卡部署模型放置不可控。建议开发者在启动前检查实际 GPU 分配，或等待修复版本验证后统一升级。
3. **MLX 生态价值上升**：Nemotron 3、DFlash 投机解码、缓存快照修复等密集动作表明 Apple Silicon 后端正在加速追赶 CUDA 体验。基于 Ollama 构建本地 Agent 时，MLX 路径的多轮对话缓存复用有望在近期获得显著提升。
4. **Reranking 支持仍未落地**：若构建 RAG 类应用，需继续在应用层自行集成例如 `bge-reranker` 的开源模型，或将此需求在 Issue #3368 中补充业务场景以加速推动实现。

---

以上为 2026-08-06 Ollama 项目动态日报，数据截至 **2026-08-06 12:00 UTC+8**。所有条目均引用自 GitHub 公开 issue/PR 页面。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 动态日报 — 2026-08-06

## 1. 今日速览

- 成本/计费是今日焦点：OpenAI 缓存读写成本计算、Managed Batch 轮询隔离、Managed File ID 合法性等一批 issue 关闭，相关修复已合入。
- Guardrails 体系明显补强：`/v1/messages` 工具流量扫描、MCP 后置调用支持、工具结果专用扫描开关相继落地（[#35999](https://github.com/BerriAI/litellm/pull/35999)、[#35980](https://github.com/BerriAI/litellm/pull/35980)、[#36014](https://github.com/BerriAI/litellm/pull/36014)）。
- 流式稳定性增强：Anthropic SSE keepalive、断连后上游排空计费等 PR 推进中；另发布 dev 版本 v1.97.0-dev.1（Docker 镜像 cosign 签名验证）。

## 2. 版本发布与破坏性变更

- **v1.97.0-dev.1**：dev 版本发布，主要内容为 Docker 镜像 cosign 签名验证指引；未列出具体功能变更，无已声明的破坏性变更。生产环境建议等待 stable 版本。  
  [Release v1.97.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.97.0-dev.1)

## 3. 新模型与硬件支持

今日无新增模型落地，活跃请求包括：

- **`openrouter/xiaomi/mimo-v2.5-pro`** 价格条目请求，需更新 `model_prices_and_context_window.json`（[#27325](https://github.com/BerriAI/litellm/issues/27325)）。
- **Z.AI Coding Plan** 文档宣传的 `glm-5.2[1m]` 在代理返回 `Unknown Model`，文档与模型映射不一致（[#32218](https://github.com/BerriAI/litellm/issues/32218)）。
- 请求将 **Amazon Bedrock AgentCore Web Search** 作为原生 search provider（`litellm.search()` 后端）（[#31819](https://github.com/BerriAI/litellm/issues/31819)）。

## 4. 性能与优化

- **Router 部署级故障参数覆盖**（进行中）：支持 per-deployment `allowed_fails_policy` 与 `cooldown_time` 覆盖，便于按部署差异化配置故障阈值与冷却时间（[#34416](https://github.com/BerriAI/litellm/pull/34416)）。
- **UI 死代码清理**（进行中）：删除 31 个 dashboard 文件中 85 处无效声明，减少不必要的组件重渲染（[#36026](https://github.com/BerriAI/litellm/pull/36026)、[#36025](https://github.com/BerriAI/litellm/pull/36025)）。

## 5. 稳定性与回归

按严重程度排列，标注修复状态。

### 高危 · 无 fix PR

- **Python 3.14 + uvloop 不兼容**：Proxy 启动即崩（`ImportError: BaseDefaultEventLoopPolicy`）。环境建议锁定 Python 3.12/3.13（[#20933](https://github.com/BerriAI/litellm/issues/20933)）。
- **`max_end_user_budget_id` 不持久化**：默认预算只在内存态生效，预算重置任务永不运行，自动创建 end user 的预算形同虚设（[#25386](https://github.com/BerriAI/litellm/issues/25386)）。

### 高危 · 已有 fix / 已合入

- **客户端断连导致 Bedrock 流式少计费**：CLI 中断后上游读取被杀死，token 计数不完整。修复通过 detached pump 在断连后继续排空上游（PR 进行中）（[#36008](https://github.com/BerriAI/litellm/pull/36008)）。
- **OpenAI cache-write token 未计入成本**：缓存写入部分不参与计价，tiered pricing 也被忽略（已修复）（[#33772](https://github.com/BerriAI/litellm/issues/33772)）。
- **单个 batch 成本异常拖垮轮询循环**：`CheckBatchCost` 无 per-job 隔离，一个失败导致其他 batch 全部搁浅（已修复）（[#35357](https://github.com/BerriAI/litellm/issues/35357)）。
- **OpenAI Responses API 缓存成本字段恒为 null**：`cost_breakdown.cache_read_cost/cache_creation_cost` 未从 Responses 路径读取（已修复）（[#34309](https://github.com/BerriAI/litellm/issues/34309)）。
- **项目缓存不失效**：`/project/update` 或 `/project/delete` 后缓存最长存活 60 秒，期间空 allowlist 可能绕过项目模型限制（PR 进行中）（[#36028](https://github.com/BerriAI/litellm/pull/36028)）。
- **密钥轮换 grace period TypeError**：`LiteLLM_VerificationTokenView` 类型错误导致旧密钥过渡期失效（已修复）（[#35797](https://github.com/BerriAI/litellm/issues/35797)）。

### 中危 · 已有 fix / 进行中

- **Anthropic SSE 长静默无心跳**：Claude Code 20s watchdog 触发 "Waiting for API response"；修复为上行静默期主动发送 keepalive ping（PR 进行中）（[#36024](https://github.com/BerriAI/litellm/pull/36024)）。
- **`/v1/messages` 工具结果未被 guardrail 扫描**：`tool_result` 内容、`tool_permission`、SSE 流均存在扫描盲区，且流式场景 500（修复 PR 已合入，issue 仍为 OPEN）（[#33086](https://github.com/BerriAI/litellm/issues/33086)、[#35999](https://github.com/BerriAI/litellm/pull/35999)）。
- **Managed Batch 文件 ID 双重包装/泄漏**：重复 retrieve 时 ID 嵌套、原始 provider `file-*` ID 泄漏绕过 managed-file 注册（已修复）（[#33988](https://github.com/BerriAI/litellm/issues/33988)、[#33989](https://github.com/BerriAI/litellm/issues/33989)、[#28294](https://github.com/BerriAI/litellm/issues/28294)）。
- **`gpt-4o-transcribe-diarize` 所需 `libsndfile.so` 缺失**：Docker 镜像运行该模型时崩溃（OPEN，无关联 PR）（[#18598](https://github.com/BerriAI/litellm/issues/18598)）。
- **Gemini `functionCall` → `functionResponse` 顺序校验 400**（OPEN，无关联 PR）（[#26755](https://github.com/BerriAI/litellm/issues/26755)）。
- **Arize Phoenix spans 未导出**：success_callback 触发但 OTLP 不达端点（OPEN）（[#27388](https://github.com/BerriAI/litellm/issues/27388)）。
- **Anthropic Responses 流重复 `message_start`**：流包装器输出重复起始事件（PR 进行中）（[#33859](https://github.com/BerriAI/litellm/pull/33859)）。

## 6. 对应用开发者的意义

- **成本可见性与准确性**：OpenAI 缓存读写成本、Responses API 成本拆分明细已修正；Batch 轮询不再被单个失败任务中断。使用缓存计费或批量任务的团队可以重新核对账目。
- **Agent / 工具调用生态**：Guardrails 覆盖已扩展到工具结果、MCP 后置调用；新增 `scan_only_tool_results` 可避免提示注入过滤器对可信 agent 脚手架误报。`litellm_content_filter` 现已支持 `post_mcp_call` 模式（[#36014](https://github.com/BerriAI/litellm/pull/36014)、[#35980](https://github.com/BerriAI/litellm/pull/35980)）。
- **Claude Code / 长流式场景**：SSE keepalive 和断连计费修复将减少 "Waiting for API response" 中断及 token 少计问题；建议关注这两个 PR 的合并进度（[#36024](https://github.com/BerriAI/litellm/pull/36024)、[#36008](https://github.com/BerriAI/litellm/pull/36008)）。
- **密钥与权限**：Agent ID 改为基于 `agent_name` 哈希后，轮换 `static_headers` 中的 secret 不再导致已授权 key 意外 403；密钥轮换 grace period 的 TypeError 也已修复（[#36020](https://github.com/BerriAI/litellm/pull/36020)）。
- **部署注意事项**：Python 3.14 暂无法运行 Proxy，建议继续使用 3.12/3.13；`/project/update` 后旧 allowlist 缓存的 60 秒窗口涉及安全边界，修复未合入前请谨慎操作。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

## 1. 今日速览

- Unsloth 2026.8.5 发布（含 unsloth-zoo 2026.8.4），安装脚本最低版本同步上调。
- Windows 终端工具沙箱存在绕过风险，连续三个 PR（#7925 / #7928 / #7935）正在收紧 cmd/start 命令拦截。
- Studio 训练向导重构（#7633）确认引入两个回归问题；Deep Research 与桌面端多项 bug 上报，部分已有修复 PR。

## 2. 版本发布与破坏性变更

- [PR #7967](https://github.com/unslothai/unsloth/pull/7967)：PyPI 发布 **unsloth 2026.8.5** 与 **unsloth-zoo 2026.8.4**；install.sh / install.ps1 的最低 pin 从 `>=2026.8.4` 提升至 `>=2026.8.5`，新安装默认拉取新 wheel。
- [Issue #7803](https://github.com/unslothai/unsloth/issues/7803)：`install.sh` 在 Linux/WSL 上可能安装 Python 3.13.8，该版本存在破坏 `import torch` 的 CPython 回归（gh-139783），且现有防护仅覆盖 macOS。安装时请确认 Python 版本。

## 3. 新模型与硬件支持

- 今日无官方新增模型架构、硬件后端或量化格式。
- [Issue #7921](https://github.com/unslothai/unsloth/issues/7921)：社区询问是否集成 **DwarfStar（DS4）** 格式。提问者称在 M2（192GB）上将 DeepSeek V4 Flash GGUF 转换后推理速度比 llama.cpp 快至少 50%，官方尚未回复。值得关注。

## 4. 性能与优化

- [PR #7960](https://github.com/unslothai/unsloth/pull/7960)：ROCm 统一内存 APU（如 Strix Halo）的显存守卫从固定 0.80 改为有界 OS headroom，修复 128GB 设备约 25GiB 显存被闲置的问题。对应 [Issue #7878](https://github.com/unslothai/unsloth/issues/7878)。
- [PR #7955](https://github.com/unslothai/unsloth/pull/7955)：在训练步骤之间结算延迟的编译模式切换，修复 Gemma4 Vision 在 T4 上 `trainer.train()` 崩溃。需先合并 unsloth-zoo#1001，否则为 no-op。

## 5. 稳定性与回归

**安全**

- [Issue #7884](https://github.com/unslothai/unsloth/issues/7884)（已关闭）：Windows 上终端工具实际执行 `cmd /c`，但工具描述告诉模型它运行在 Linux，导致模型生成错误命令。
- [PR #7925](https://github.com/unslothai/unsloth/pull/7925) / [PR #7928](https://github.com/unslothai/unsloth/pull/7928) / [PR #7935](https://github.com/unslothai/unsloth/pull/7935)：`_BLOCKED_COMMANDS` 在 import 时按 `sys.platform` 冻结，导致 `powershell` / `pwsh` 不在 Windows 拦截集内；同时 `start "" program` 可隐藏启动目标程序。三者在补同一处沙箱绕过漏洞，且 Windows 终端工具正切换为 Git for Windows bash。

**训练与运行时**

- [Issue #7897](https://github.com/unslothai/unsloth/issues/7897)：训练完成后 Studio 卡在 100%，修复 PR [#7938](https://github.com/unslothai/unsloth/pull/7938)。
- [PR #7951](https://github.com/unslothai/unsloth/pull/7951)：`padding_free=True` 且未开启 packing 时，TRL >= 1.0.0 会误触发 `max_length` 守卫，导致 `SFTTrainer` 构造直接失败。
- [Issue #7843](https://github.com/unslothai/unsloth/issues/7843)：Studio 本地 QLoRA worker 在 Qwen3.5-2B 首次生成约 65 秒后退出。
- [Issue #7922](https://github.com/unslothai/unsloth/issues/7922)：AMD gfx1032 微调崩溃；[Issue #7923](https://github.com/unslothai/unsloth/issues/7923) Qwen-2B 在 RX 6600 XT 上训练崩溃（已关闭）。
- [Issue #7633](https://github.com/unslothai/unsloth/pull/7633)（训练向导重构）引入两个回归：数据集缓存校验导致格式检查死循环（[#7853](https://github.com/unslothai/unsloth/issues/7853)）；权重完整但 tokenizer 缺失的快照被误判为完整，导致 Hub 回退失效（[#7845](https://github.com/unslothai/unsloth/issues/7845)）。

**模型加载与 Hub**

- [Issue #7870](https://github.com/unslothai/unsloth/pull/7870)：选择 GGUF 时拉取错误的 companion bytes：gated 权重报错不透明，另一个场景会静默下载数 GB 错误文件，已有 PR 修复。
- [Issue #7829](https://github.com/unslothai/unsloth/pull/7829)：Model hub 在正常联网的 Windows 机器上持续误报 "You're offline"，用户无法浏览模型列表；PR 增加失败原因展示与服务器回退。
- [Issue #7877](https://github.com/unslothai/unsloth/issues/7877)：1.50 之后 Ollama 下载的模型不再显示，且上下文大小被设置为之前版本的约 50%。
- [Issue #7886](https://github.com/unslothai/unsloth/issues/7886)：DeepSeek-V4-Flash GGUF 加载失败，`llama-server` 启动失败且无输出；[#7950](https://github.com/unslothai/unsloth/issues/7950) 报告 CUDA 上下文中 `fork()` 导致 Docker/GPU 环境下 worker 静默崩溃。
- [Issue #7903](https://github.com/unslothai/unsloth/issues/7903)：Gemma 4 base 模型 tokenizer 配置缺少 `<bos>` token。
- [Issue #7617](https://github.com/unslothai/unsloth/issues/7617)：流式 API 转发到 Pi agent 时经常 hang，需人工介入才能继续。

**Deep Research**

- [Issue #7964](https://github.com/unslothai/unsloth/issues/7964)：零输出流仍耗尽完整 900 秒预算（此前 #7839 只修复了有输出后的空等）。
- [Issue #7965](https://github.com/unslothai/unsloth/issues/7965)：`max_tokens` 未按上下文窗口裁剪，且报错归因于错误的上限常量。

**桌面端**

- [Issue #7953](https://github.com/unslothai/unsloth/pull/7953)：Linux AppImage 在 Ubuntu 24.04（Linux Mint 22）上无法下载模型，属 release-blocking 功能故障。
- [Issue #7963](https://github.com/unslothai/unsloth/issues/7963)：拖放图片到桌面窗口被拒绝，尽管 chat 支持图片附件。
- [Issue #7962](https://github.com/unslothai/unsloth/issues/7962)：ANSI 转义码（颜色/光标控制）渲染为字面文本。
- [Issue #7961](https://github.com/unslothai/unsloth/issues/7961)：GGUF 按路径加载时，聊天页模型名显示完整 HF 快照路径；修复 PR [#7966](https://github.com/unslothai/unsloth/pull/7966)。
- [Issue #7887](https://github.com/unslothai/unsloth/issues/7887)（已关闭）：Windows 桌面版点击最大化会隐藏窗口。

**环境与安装**

- [Issue #7818](https://github.com/unslothai/unsloth/issues/7818)：安装脚本自动安装 Python 并卸载现有 PyTorch/CUDA，影响已有环境。

## 6. 对应用开发者的意义

- 升级到 2026.8.5 前先确认 Python 版本，避开 3.13.8 的 torch 导入破坏（#7803）。使用 TRL >= 1.0.0 的工程需要等待 [PR #7951](https://github.com/unslothai/unsloth/pull/7951) 合入，否则 padding-free SFT 无法构造 trainer。
- 在 Windows 上构建基于 Studio 终端工具的 Agent 需注意：终端实现正从 `cmd /c` 切换为 Git Bash，同时 cmd/start 沙箱检查显著收紧。模型自动生成的命令更有可能被拦截，建议 Agent 侧显式指定受信任 shell 与白名单命令。
- Deep Research 功能建议自行加熔断：零输出场景下 900 秒预算会被完全烧掉，且 `max_tokens` 报错不可用作诊断依据（#7964 / #7965）。
- 通过路径加载 GGUF 时，模型选择器会显示冗长的 HF 缓存路径；可跟进 [#7966](https://github.com/unslothai/unsloth/pull/7966) 修复。
- Studio 是否支持 RL / DPO 的询问（#7948）已被关闭，但官方未给出明确结论。需要该能力时建议直接查阅官方文档或等待后续 release 说明。
- DwarfStar/DS4 集成若成行，将对 M2 等平台的推理性能有显著提升，建议持续跟踪 [#7921](https://github.com/unslothai/unsloth/issues/7921)。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*