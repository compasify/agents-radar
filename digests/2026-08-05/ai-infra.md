# AI 基础设施日报 2026-08-05

> 生成时间: 2026-08-05 01:26 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施横向对比分析报告（2026-08-05）

## 1. 生态全景

今日动态中最突出的信号是 **DeepSeek-V4 系列已成为全生态的「压力测试器」**——从 vLLM/SGLang 的 FlashMLA 崩溃与 TP=8 挂起，到 llama.cpp 的 CUDA FA 重复输出，再到 Unsloth 的 GGUF 本地运行支持，六大项目均在围绕 DSV4 的适配与稳定性展开密集攻关，但**上游核心问题多数仍未修复**。同时，硬件适配呈多点开花态势：ROCm 7.2.4、XPU 的 DSV4 Prefill、SM107 BF16 GEMM、Blackwell MXFP6、Intel Arc B 等方向均有 PR 推进，跨平台部署的选择正在扩大但大多仍处 PR 阶段。另一个显著特征是 **KV cache 正确性与投机解码的组合问题**成为高严重度 Bug 的集中区（vLLM Gemma-4 int8 KV cache 损坏、prefix caching + MTP 精度下降、llama.cpp 上下文检查点失效），暗示着优化器件的叠加正逼近系统复杂度的临界点。

---

## 2. 各项目活跃度对比

| 项目 | 定位 | Issues（今日提及） | PRs（今日提及） | Release | 备注 |
|---|---|---|---|---|---|
| **vLLM** | 服务级推理引擎 | ~10 新提及 / 多条追踪 | ~8 个活跃 PR（2 个修复 PR 已提交） | 无 | 稳定性问题最多（3 个 🔴 高），但修复响应最快 |
| **SGLang** | 服务级推理引擎 | ~6 新提及 / 多条追踪 | ~9 个活跃 PR | 无 | DSV4 相关 3 个严重 Bug 已关闭，2 个新高优先级挂起 |
| **llama.cpp** | 本地推理运行时 | ~8 新提及 | ~9 个活跃 PR | **12 个**（b10265→b10276） | 发布节奏最密集，功能迭代最快 |
| **Ollama** | 本地部署运行时 | ~10 新提及 | 6 个活跃 PR + 1 个提案 PR | **v0.32.6-rc0** | 工具调用 4 个修复 PR 集中提交 |
| **LiteLLM** | LLM 网关 | ~8 新提及 | ~8 个活跃 PR | 无 | 无 Release 但风险面最广（Redis 串扰、限流失效） |
| **Unsloth** | 微调框架 | ~12 新提及 | ~7 个活跃 PR | **v0.1.52-beta** | 回归问题密集（#7853、#7845 均由 #7633 引入） |

*注：Issues/PRs 为今日日报中提及的数量，非仓库全局总量。*

---

## 3. 模型支持竞速

| 模型/架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|---|---|---|---|---|---|
| **DeepSeek-V4** | ⚠️ FlashMLA 回归 + SM8x 不支持 | ⚠️ TP=8 长上下文挂起；3 个 bug 已关闭 | ⚠️ CUDA FA 重复输出 `<` | ❌ 仅本地版询问 | ✅ Dynamic GGUF 支持 V4 Flash 0731 |
| **Kimi K3** | ✅ 追踪中（ROCm Day 0 已集成 AITER fused-moe） | ✅ Roadmap 推进（Helion 后端 PR） | ❌ | ❌ | ❌ |
| **Apertus 1.5** | ✅ 多模态 8B/70B 支持（PR） | ❌ | ❌ | ✅ 原生 chat 处理（PR） | ❌ |
| **Qwen3-TTS** | ❌ | ❌ | ✅ b10270 落地 | ❌ | ❌ |
| **BailingMoE3** | ❌ | ❌ | ✅ PR 审核中 | ❌ | ❌ |
| **MiniMax** | ⚠️ M3 reasoning 泄漏 | ✅ M2.7 CPU 优化 | ❌ | ❌ | ❌ |
| **Gemma-4** | ⚠️ KV cache Bug 已定位 | ❌ | ❌ | ⚠️ 工具调用崩溃 | ❌ |

**结论**：llama.cpp 在**模型覆盖广度**上领先（TTS、BailingMoE3、MXFP6），Unsloth 在 **DSV4/K3 GGUF 本地可运行性**上领先，vLLM/SGLang 则因 DSV4 的复杂算子依赖而**适配阵痛最明显**——模型热度与上游支持成熟度之间存在显著落差。

---

## 4. 性能优化前沿

| 优化方向 | 具体进展 |
|---|---|
| **KV Cache** | vLLM 修复 Gemma-4 int8 KV cache 损坏（#51091）；llama.cpp 新增 E8 格点 2-bit KV 量化（2.125 bpe，#25352） |
| **投机解码** | vLLM 异步调度默认开启（#48341）；Ollama MLX 基于 MTP 头的投机解码落地；vLLM 提出上下文长度感知投机调度 RFC（#48627） |
| **算子融合** | vLLM Gemma3n 稀疏 GELU Triton 融合核；llama.cpp MoE 加权专家归约融合为单 kernel；SGLang FP32 LM Head 精度路径提速 |
| **MoE 显存优化** | llama.cpp 专家热缓存（热专家驻留 GPU、冷专家卸载 CPU）；Ollama 请求 MoE 权重放内存、按需上 GPU |
| **分布式推理** | vLLM CUDA Checkpoint/Restore RFC；SGLang DCP `symm_a2a` 后端提案（NVLink peer-direct All-to-All） |
| **批处理/调度** | SGLang 消除 TRTLLM-MHA decode CUDA-graph 中每层 attention 的 scratch 分配；llama.cpp HIP 启用 CUB 路径（TOP_K 不再回退 CPU） |
| **量化** | vLLM AutoRound NVFP4 W4A4 密集层支持；llama.cpp NVFP4 尺度搜索改进 + MXFP6 CPU 实现 |

**火力最集中的方向**是 **KV Cache 正确性/量化** 与 **投机解码的工程化落地**——两者皆直接服务于长上下文 + 高吞吐这两个生产环境最硬的需求。

---

## 5. 分层定位差异

```
┌─────────────────────────────────────────────────────────────┐
│  训练/微调层    Unsloth ── v0.1.52-beta、QLoRA、DSV4/K3 GGUF  │
├─────────────────────────────────────────────────────────────┤
│  服务级推理引擎   vLLM ──── 高吞吐生产部署、KV cache 优化       │
│                 SGLang ── 低延迟、XPU/ROCm 适配激进           │
├─────────────────────────────────────────────────────────────┤
│  本地运行时       llama.cpp ── 模型覆盖最广、发布节奏最快       │
│                 Ollama ──── 开发者体验优先、工具调用整合       │
├─────────────────────────────────────────────────────────────┤
│  网关/代理层     LiteLLM ─── 多后端路由、限流/审计/可观测性     │
└─────────────────────────────────────────────────────────────┘
```

| 项目 | 分层差异关键点 |
|---|---|
| **vLLM** | 偏「生产重型」：关注分布式 checkpoint/restore、Model Runner v2 迁移等架构级演进 |
| **SGLang** | 偏「硬件前沿」：XPU/ROCm/Blackwell 适配最激进，DCP 方案面向 NVLink 大规模部署 |
| **llama.cpp** | 偏「广度优先」：版本迭代节奏最快，新模型/新量化格式的首发阵地 |
| **Ollama** | 偏「体验优先」：MLX 投机解码开箱即用，但在底层 Bug 修复上依赖上游 llama.cpp |
| **LiteLLM** | 偏「集成稳定性」：不涉及模型/硬件，但 Redis 串扰、reasoning 流式兼容直接影响 Agent 生产链路 |
| **Unsloth** | 偏「训练效率」：优化重心在显存占用、断点续训，但微调后的模型与 vLLM 的推理兼容性存在鸿沟（#7681） |

---

## 6. 值得关注的趋势信号

### 信号一：DeepSeek-V4 的生态成熟度仍处于「早期适配」阶段
vLLM 的 FlashMLA 回归、SGLang 的 TP=8 挂起、llama.cpp 的重复输出——三大推理引擎在 DSV4 上均有未修复的严重正确性问题。**技术决策者若计划将 DSV4 投入生产，当前应将其视为「有风险的早期采用」而非「稳定选项」**，需预留充分的验证和回退窗口。

### 信号二：Agent 基础设施正在成为核心战场
- **工具调用可靠性**是今日跨项目最高频的修复主题：Ollama 4 个 PR 集中修复（截断工具调用、缺失右括号、重复内容误判）、vLLM 的 `tool_choice="required"` + 投机解码失败、LiteLLM 的 reasoning 流式丢块。
- **流式协议兼容性**成为新的摩擦面：LiteLLM 的 `/v1/messages` thinking 块切换问题、Ollama 的 OpenAI 兼容流式格式变更，都在影响 Claude Code / Cline 等 Agent 客户端的稳定性。
- **结论**：Agent 应用开发者应关注「投机解码 × 工具调用 × 流式解析」的组合失效模式，目前尚无项目提供完整的解决方案。

### 信号三：稳定性回归集中在「优化叠加」场景
vLLM 的 prefix caching + int8 KV cache + Gemma-4 组合损坏、prefix caching + MTP 精度下降、llama.cpp 的混合模型 checkpoint 失效——**多个正确性问题并非单一功能缺陷，而是多个优化器件组合后的相互作用**。这提示平台团队在开启新优化时应对既有组合做回归验证；也暗示上游项目需要引入「优化矩阵测试」机制。

### 信号四：硬件多元化进入「实用化前夜」
ROCm 7.2.4 镜像、XPU DSV4 Prefill、SM107 BF16 GEMM、Intel Arc B 文档化、Blackwell MXFP6——各平台的支持正在从「能跑」向「高效」演进。但多数仍停留在 PR/路线图阶段，**预计未来 2-4 周是这些适配合入主线的高峰期**，跨平台部署的窗口正在打开。

### 信号五：微调与推理的「最后一公里」仍未打通
Unsloth 微调后的 Qwen3.5 无法被 vLLM 加载（#7681），Studio 通过 Ollama 接入的模型不支持工具调用（#7761）——**训练、微调、部署、Agent 各环节的衔接仍存在断点**。对于正在建设 AI 应用全链路的团队，模型产物的标准化（格式、tokenizer、聊天模板）比单点工具的选择更具优先级。

---

### 给技术决策者的「今日结论」

- **最值得立即行动的**：Gemma-4 用户应用 vLLM #51091 修复；Ollama 流式客户端需适配 v0.32.6 的格式变更；LiteLLM 用户锁定 FastAPI ≤0.140.6。
- **最值得观望的**：DSV4 系列在三大引擎上的生产部署（均有未修复的严重问题）；vLLM 投机解码异步调度默认开启后的行为变化。
- **最值得跟踪的**：Ollama 工具调用 4 个修复 PR 的合并状态；SGLang DCP `symm_a2a` 方案；Unsloth 训练恢复能力的落地——它们分别对应 Agent 稳定性、长上下文分布式推理、长时训练工作流三个关键方向。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 动态日报 2026-08-05

## 1. 今日速览

- 今日无新版本发布，社区焦点集中在 **DeepSeek-V4 系列** 的回归与硬件支持问题（FlashMLA 崩溃、SM8x 不支持）。
- 一个影响 Gemma-4 系列 KV cache 正确性的严重 Bug 已定位，并有对应修复 PR（#51091）。
- ROCm 生态持续补齐：Kimi-K3 路线图更新、Torch 2.12 依赖升级合入、性能基准测试 AMD 配置支持。

## 2. 版本发布与破坏性变更

无新 Release。需要注意的行为变更：

- **投机解码异步调度默认开启**（[PR #48341](https://github.com/vllm-project/vllm/pull/48341)）：草案模型默认启用异步调度，使用自定义投机解码方案的部署需要回归验证。
- **ROCm 依赖升级**（[PR #50607](https://github.com/vllm-project/vllm/pull/50607)，已关闭）：Torch 2.12、Triton 3.7 等升级合入，ROCm 用户需注意镜像/环境依赖同步更新。

## 3. 新模型与硬件支持

- **DeepSeek-V4-Flash SM8x（Ampere）支持请求**（[Issue #50576](https://github.com/vllm-project/vllm/issues/50576)）：DeepSeek-V4-Flash-0731 目前无法在 A100/A800、RTX 30xx 上运行，社区持续关注，尚无可用的 SM8x 方案。
- **Kimi-K3**：整体支持追踪与 KV Cache / Kernel 分工见 [Issue #50001](https://github.com/vllm-project/vllm/issues/50001)；**ROCm 使能路线图** 见 [Issue #50682](https://github.com/vllm-project/vllm/issues/50682)，Day 0 已集成 AITER fused-moe（a16w4/a8w4）。
- **Apertus 1.5 多模态模型支持**（[PR #50496](https://github.com/vllm-project/vllm/pull/50496)）：新增 8B/70B 多模态权重支持。
- **AutoRound NVFP4 密集线性层**（[PR #50988](https://github.com/vllm-project/vllm/pull/50988)）：CUDA 上支持 NVFP4 W4A4 密集模型部署，MoE 部分后续单独提交。
- **TRITON_MLA_SPARSE 后端**（[PR #38476](https://github.com/vllm-project/vllm/pull/38476)）：为 SM80/121 提供稀疏 MLA（GLM-5、DeepSeek-V3.2）的 Triton 后端，覆盖 DeepGEMM/FlashMLA-Sparse 不可用的场景。
- **Intel GPU 量化路线图**（[Issue #37979](https://github.com/vllm-project/vllm/issues/37979)）：W4A16 已合入，继续推进更多量化在 Intel GPU/CPU 的支持。

## 4. 性能与优化

- **多模态 placeholder 扫描加速**（[PR #50716](https://github.com/vllm-project/vllm/pull/50716)，已关闭）：消除了逐位置列表切片分配与重复 token id 解析，降低长提示下多模态输入的预处理开销。
- **Gemma3n 稀疏 GELU Triton 融合核**（[PR #48498](https://github.com/vllm-project/vllm/pull/48498)）：融合逐行均值/方差、阈值、tanh GELU 与门控乘算，替代多内核 Inductor 路径。
- **Triton Proton profiling 后端**（[PR #48789](https://github.com/vllm-project/vllm/pull/48789)）：新增可选 worker profiling 后端，首个版本支持 eager 模式。
- **上下文长度感知投机调度 RFC**（[Issue #48627](https://github.com/vllm-project/vllm/issues/48627)）：扩展 `num_speculative_tokens_per_batch_size` 为 (batch, ctx) 二维表，按上下文长度动态选择投机深度 K。
- **CUDA Checkpoint/Restore RFC**（[Issue #34303](https://github.com/vllm-project/vllm/issues/34303)）：面向 V1 引擎的近零冷启动 checkpoint/restore 设计讨论仍在进行。
- **Model Runner v2 迁移路线图**（[Issue #41286](https://github.com/vllm-project/vllm/issues/41286)）：从稠密模型（Qwen3-0.6B、OPT-125M）开始，逐步推进 MoE 模型迁移。

## 5. 稳定性与回归

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | **DeepSeek-V4 FlashMLA 回归**（[Issue #49922](https://github.com/vllm-project/vllm/issues/49922)）：v0.26.0 在 `phase1.cuh` 中断言失败，v0.25.0 正常 | 无 fix PR |
| 🔴 高 | **Prefix caching + MTP 投机解码精度下降 ~20%**（[Issue #43559](https://github.com/vllm-project/vllm/issues/43559)）：Qwen3.6 35B-A3B，评论 39 条 | 无 fix PR |
| 🔴 高 | **Gemma-4 混合注意力 int8 KV cache + prefix caching 输出损坏**（[Issue #50702](https://github.com/vllm-project/vllm/issues/50702)）：根因疑似 KV scale 区域初始化缺失 | **修复 PR [#51091](https://github.com/vllm-project/vllm/pull/51091)** 已提交（同根因 #50749） |
| 🟠 中 | **FlashInfer JIT 在 sm_120 + CUDA <12.9 时启动崩溃**（[Issue #50705](https://github.com/vllm-project/vllm/issues/50705)）：sampler/fused-MoE/FP8 KV 三条默认路径未回退 | 无 fix PR |
| 🟠 中 | **MiniMax-M3 reasoning tokens 泄漏到 content**（[Issue #46042](https://github.com/vllm-project/vllm/issues/46042)）：v0.26.0 和 main 上均存在 | 无 fix PR |
| 🟠 中 | **tool_choice="required" + 投机解码致工具调用失败**（[Issue #38106](https://github.com/vllm-project/vllm/issues/38106)）：Qwen3.5-397B-A17B-NVFP4 | 无 fix PR |
| 🟠 中 | **EAGLE3 DeepSeek 非 YaRN rope 配置崩溃** | 修复 PR [#51092](https://github.com/vllm-project/vllm/pull/51092) |
| 🟡 低 | **Intel XPU 多卡 TP 挂起**（[Issue #50545](https://github.com/vllm-project/vllm/issues/50545)）：oneCCL 2022.x 下 warmup 超时 | 无 fix PR |
| 🟡 低 | **ROCm 杂项**：RCCL RDNA3 gfx1100 TP2 启动失败（[#38587](https://github.com/vllm-project/vllm/issues/38587)）、Quark MXFP4 输出损坏（[#41092](https://github.com/vllm-project/vllm/issues/41092)）、192GB 幻影显存分配（[#36890](https://github.com/vllm-project/vllm/issues/36890)） | 多为 stale |

其他已有关注：Mamba-2 Triton 在 SM121 非法指令（[#37431](https://github.com/vllm-project/vllm/issues/37431)）；GPT-OSS 120B 在 Triton 3.6 上性能回归（[#37441](https://github.com/vllm-project/vllm/issues/37441)）。

## 6. 对应用开发者的意义

- **Gemma-4 用户应优先应用 #51091 修复**：KV cache 损坏只影响引擎启动后第一批请求，表现为前置 token 乱码，容易逃过 CI 但直接影响线上输出质量。
- **DeepSeek-V4 部署需谨慎升级**：若使用 v0.26.0，FlashMLA 回归会导致引擎崩溃；若运行在 A100/A800，V4-Flash 尚无可用的上游方案，升级前务必验证硬件兼容性。
- **投机解码默认行为将变化**（#48341 合入后）：draft model 异步调度默认开启，推理延迟应下降，但建议用真实流量对比 KV cache、prefix caching 组合下的行为差异（参考 #43559 的精度风险）。
- **工具调用可靠性仍是风险区**：`tool_choice="required"` 与投机解码组合、lfm2 解析器对括号/换行丢弃的问题（[PR #48171](https://github.com/vllm-project/vllm/pull/48171)），Agent 场景建议配置结构化输出 + 关闭投机解码作为兜底。
- 若使用 MiniMax-M3 且依赖 reasoning 内容分离，注意当前输出可能混入推理 token，建议在应用层做二次清洗；跟踪 [Issue #46042](https://github.com/vllm-project/vllm/issues/46042) 获取修复进展。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 动态日报 — 2026-08-05

## 今日速览

DeepSeek-V4 / DSpark 仍是当前最核心的工程焦点：昨日 3 个 DSV4 相关的严重 Bug 被确认关闭，但同时新挂出两个高优先级问题（H20 上 TP=8 长上下文 Decode 挂起、DSpark 大 batch CUDA-Graph 捕获非法内存）。与此同时，XPU 平台 DSV4 Prefill、SM107 BF16 GEMM、ROCm 7.2.4 容器等硬件适配类 PR 在持续推进；无新版本 Release 发布。Kimi K3、Decode Context Parallelism 两条 Roadmap 仍在活跃更新。

## 新模型与硬件支持

- **[XPU] DeepSeek V4 Prefill 支持**：PR [#31865](https://github.com/sgl-project/sglang/pull/31865) 为 XPU 后端接入 `sgl-kernel-xpu` 的 `flash_mla_sparse_fwd` 实现（依赖 [sgl-kernel-xpu#337](https://github.com/sgl-project/sgl-kernel-xpu/pull/337)），补齐 DSV4 在 Intel 平台上的 prefill 路径。
- **[Blackwell] SM107 启用 CuTe DSL BF16 GEMM**：PR [#33617](https://github.com/sgl-project/sglang/pull/33617) 打开 SM107（RTX PRO Blackwell 系列）的 CuTe DSL BF16 GEMM 后端，并顺带修复 DLPack 在 `requires_grad=True` bias view 上的转换报错。
- **[AMD] ROCm 7.2.4 Docker 镜像**：PR [#30984](https://github.com/sgl-project/sglang/pull/30984) 新增 `gfx942-rocm724`、`gfx950-rocm724` 两个 stage，基于 Python 3.12 + torch 2.11 + triton 3.6.0；既有镜像保持不变。
- **[Intel] Arc B 文档支持**：PR [#33495](https://github.com/sgl-project/sglang/pull/33495) 为 Cookbook 补充 Intel Arc B 部署文档，并同步调整交互式部署选择器。
- **[Kimi K3] Roadmap 推进中**：Issue [#32607](https://github.com/sgl-project/sglang/issues/32607) 更新，配套 Day0 PR [#32541](https://github.com/sgl-project/sglang/pull/32541) 与 LMSYS 博客已发布；同时 PR [#32593](https://github.com/sgl-project/sglang/pull/32593) 为 Kimi Delta-Attention 增加可选的 **Helion 后端**（用于 packed decode/prefill）。
- **[CPU] MiniMax-M2.7 优化**：PR [#31956](https://github.com/sgl-project/sglang/pull/31956) 落地 MiniMax-M2.7 的 CPU 推理性能优化。

## 性能与优化

- **TRTLLM-MHA Decode CUDA-Graph 内存分配优化**：PR [#33063](https://github.com/sgl-project/sglang/pull/33063) 消除了 decode CUDA-graph 中每层 attention 的 scratch allocation 和对应的 fill kernel 开销——此前每次 replay 都会重复执行这些 kernel，优化后对长序列 decode 延迟有实际收益。
- **FP32 LM Head 精度路径提速**：PR [#32370](https://github.com/sgl-project/sglang/pull/32370) 优化 `use_fp32_lm_head`：当 hidden states 与 LM head 权重为 bf16/fp16 时，不再 cast 成 fp32 做 matmul，而是直接 bf16×bf16→fp32，减少约一半的访存与转换开销。
- **Delayed Sampling 与 MROPE 位置计算优化**：PR [#32637](https://github.com/sgl-project/sglang/pull/32637) 针对 delayed sample 和 mrope 位置张量计算做算子级优化，目标是降低 prefill 阶段 CPU/GPU 同步开销。
- **DCP 新后端方案披露**：Issue [#33355](https://github.com/sgl-project/sglang/issues/33355) 提出 `symm_a2a` 后端——面向 MLA Decode 的 peer-direct All-to-All 通信方案，利用 NVLink/NVSwitch 降低 DCP 注意力归约延迟；目前处于方案阶段。

## 稳定性与回归

**未修复（按严重程度降序）**

- **DeepSeek-V4 TP=8 在 8×H20 上长上下文 Decode 挂起**（Issue [#33549](https://github.com/sgl-project/sglang/issues/33549)）：约 245K context 时所有 GPU 100% 占用但低功耗，watchdog 杀进程；当前无 fix PR。
- **DSpark 大 batch Decode CUDA-Graph 捕获可能触发非确定性非法内存**（Issue [#33356](https://github.com/sgl-project/sglang/issues/33356)）：官方 v0.5.16 镜像 + TP8 复现，bs≤32 稳定但更大 shape 捕获时崩溃；当前无 fix PR。
- **`inference_mode` 不一致可破坏 lazy buffer**（Issue [#33470](https://github.com/sgl-project/sglang/issues/33470)）：warmup/autotune 与真实 serving forward 之间 `torch.inference_mode()` 状态不一致，导致 lazy-allocated buffer 后续 inplace 更新不安全；当前无 fix PR。
- **MiniMax-H3 启动报 args 错误**（Issue [#33466](https://github.com/sgl-project/sglang/issues/33466)）：复现中，暂无 fix PR。

**已关闭 / 已修复**

- DSV4 Indexer Torch fallback OOM（~128K context 以上，Issue [#33246](https://github.com/sgl-project/sglang/issues/33246)）已关闭。
- 量化 DSV4 fused `wq_a+wkv` 路径静默丢弃每层 packed weights、输出乱码的问题（Issue [#33245](https://github.com/sgl-project/sglang/issues/33245)）已关闭。
- DSV4 indexer 两个 torch reference 在 length masking 上行为不一致（Issue [#33247](https://github.com/sgl-project/sglang/issues/33247)）已关闭。
- DSV4-Flash-0731 在 A800/SM80 上三个后续 blocker（Issue [#33194](https://github.com/sgl-project/sglang/issues/33194)）已关闭。

**CI 状态**

- CI 追踪 Issue [#17050](https://github.com/sgl-project/sglang/issues/17050) 最新自动更新：**1 broken、8 flaky、664 recently fixed**；CI 维护模式（[#21065](https://github.com/sgl-project/sglang/issues/21065)）已解除。

## 对应用开发者的意义

- **DSV4/DSpark 生产使用仍需谨慎**：TP=8 + 约 245K 超长上下文的 decode 挂起问题尚未修复，建议在 H20 等 8 卡环境上评估该场景的风险；DSpark 大 batch CUDA-Graph 捕获在 TP8 下若遇到非法内存，可先限制 decode batch 上限绕过。
- **即日起可关注 Spec v2 + DFlash logprobs**：PR [#33459](https://github.com/sgl-project/sglang/pull/33459) 解除了 DFlash 投机解码下 `return_logprobs` 的限制；若你的 Agent 应用依赖带有 logprobs 的 DFlash 推理，该 PR 合入后可解锁此能力。
- **配置覆盖行为将更可预期**：PR [#33525](https://github.com/sgl-project/sglang/pull/33525) 修复 `--json-model-override-args` 目前仅覆盖两层 key、内层嵌套参数被意外丢弃的问题，改为深度递归合并——涉及嵌套模型配置覆盖的部署脚本应关注此变更。
- **硬件兼容性正持续扩大**：XPU 上 DSV4 Prefill、SM107 BF16 GEMM、ROCm 7.2.4 镜像及 Intel Arc B 文档化意味着跨平台部署选择正在增加，但大多处于 PR 阶段，尚未进入正式 Release。
- **CI 不稳定但已恢复**：当前 CI 处于“1 broken / 8 flaky”状态，PR 合并速度可能受波动影响，但不影响已发布版本的运行；如需稳定基线，建议优先使用最近一个 Release 构建。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 动态日报 — 2026-08-05

## 1. 今日速览

今日发布节奏恢复正常（b10265→b10276），其中 **Qwen3-TTS 支持**（b10270）是功能层面的重要里程碑，但伴随 llama-tts 二进制的破坏性变更。稳定性方面，**DeepSeek-V4 在 CUDA Flash Attention 下重复输出 `<`**（#26509）是当前最严重的正确性问题，尚无修复 PR。构建链方面，UI 构建已切换到 `npm ci`（#26601）以缓解供应链攻击风险。

## 2. 版本发布与破坏性变更

- **b10276**：UI 构建从 `npm install` 切换为 `npm ci`，提升构建可复现性与供应链安全（[PR #26601](https://github.com/ggml-org/llama.cpp/pull/26601)）。对自行构建 UI 的开发者，请确保 `package-lock.json` 已提交且为最新。
- **b10270**：mtmd 新增 Qwen3-TTS 支持。**破坏性变更**：`llama-tts` 二进制接口不兼容，调用方需适配新的文本/说话人编码图（[Release b10270](https://github.com/ggml-org/llama.cpp/releases/tag/b10270)）。
- **b10273**：sampler 行为变更——历史采样器将 `-1` 解析为 `1024` 而非 context length，影响所有依赖 `-1` 动态上下文语义的客户端配置（[Release b10273](https://github.com/ggml-org/llama.cpp/releases/tag/b10273)）。
- **b10268**：修复预编译二进制在 macOS 15 及以下版本无法运行的问题；KleidiAI 构建的 deployment target 已调整（[Release b10268](https://github.com/ggml-org/llama.cpp/releases/tag/b10268)）。

## 3. 新模型与硬件支持

- **Qwen3-TTS**：b10270 在 mtmd 中落地，支持文本模型、主模型、编码器、说话人编码器全链路（[Release b10270](https://github.com/ggml-org/llama.cpp/releases/tag/b10270)）。
- **BailingMoE3**（PR #26608）：新增 BailingMoE 3 架构支持，可运行带 MTP 的 Ling 3.0 Flash 模型，尚在审核中（[PR #26608](https://github.com/ggml-org/llama.cpp/pull/26608)）。
- **MXFP6 CPU 实现**（PR #22671）：ggml 新增 MXFP6-E2M3 的 CPU 初始实现，Blackwell 原生支持后续跟进；IMA 相关量化格式的成熟度值得关注（[PR #22671](https://github.com/ggml-org/llama.cpp/pull/22671)）。
- **E8 格点 2-bit KV 缓存量化**（PR #25352）：新增 `GGML_TYPE_E8_2` 量化类型，2.125 bpe 的 KV 缓存压缩方案；已关闭，后续可能合入 master（[PR #25352](https://github.com/ggml-org/llama.cpp/pull/25352)）。

## 4. 性能与优化

- **专家热缓存（CUDA）**（PR #26563）：新 PR 通过追踪 MoE 专家使用热力图，将热专家缓存在 GPU、冷专家卸载至 CPU，默认关闭，通过 `-ehs N` 激活（[PR #26563](https://github.com/ggml-org/llama.cpp/pull/26563)）。对 DeepSeek-V4 等大规模 MoE 模型的显存/吞吐优化潜力很大。
- **HIP 启用 CUB 路径**（PR #26592）：`GGML_OP_ARGSORT/TOP_K` 在 HIP/ROCm 上不再回退到 shared-memory bitonic sort，理论上可消除长上下文的采样瓶颈——与 issue #26399 中观察到的 6.4× 生成损失直接相关（[PR #26592](https://github.com/ggml-org/llama.cpp/pull/26592)）。
- **MoE 加权专家归约融合**（PR #25952）：CUDA 后端将 expert-combine 尾部融合为单 kernel，减少中间张量流量（[PR #25952](https://github.com/ggml-org/llama.cpp/pull/25952)）。
- **NVFP4 量化改进**（PR #25153）：用尺度搜索替代固定 `amax/6`，并接线 NVFP4 ftype 到 `llama-quantize`（[PR #25153](https://github.com/ggml-org/llama.cpp/pull/25153)）。

## 5. 稳定性与回归

**严重（无修复）**

- **DeepSeek-V4 重复输出 `<`**（#26509）：CUDA FA 下 prompt 跨多个 forward pass 时必现，CPU 与 `-fa off` 正常；b10217 及 master 均可复现（[Issue #26509](https://github.com/ggml-org/llama.cpp/issues/26509)）。
- **SYCL 混合模型崩溃**（#24168）：qwen3next/qwen35 架构在 Intel Arc Pro B60 上输出空/乱码，`ggml_sycl_op_mul_mat` 崩溃，回归区间锁定 b9128–b9159（[Issue #24168](https://github.com/ggml-org/llama.cpp/issues/24168)）。
- **DS4F 在 Intel B70 上 SIGSEGV**（#26462）：SYCL 后端缺少 f16 转换导致段错误（[Issue #26462](https://github.com/ggml-org/llama.cpp/issues/26462)）。

**严重（已有修复/规避）**

- **DSV4 CUDA race**（#26588，已关闭）：REAP 裁剪后的 DeepSeek-V4-Flash 在 GB10/sm_121 上非法内存访问，`CUDA_LAUNCH_BLOCKING=1` 可规避（[Issue #26588](https://github.com/ggml-org/llama.cpp/issues/26588)）。
- **PRO TOP_K HIP 回退 CPU**（#26399）：超 3–4K 上下文后 `GGML_OP_TOP_K` 回退 CPU，token 生成 6.4× 损失；PR #26592 的 hipCUB 路径有望根治（[Issue #26399](https://github.com/ggml-org/llama.cpp/issues/26399)）。
- **SYCL oneMKL FA 回归**（#26396，已关闭）：Arc Pro B70 上 200K prompt prefill 回归约 35%，`MKL_FA_DISABLE=1` 可恢复（[Issue #26396](https://github.com/ggml-org/llama.cpp/issues/26396)）。
- **Windows OpenVINO 构建无法启动**（#24729）：缺少 OpenSSL 依赖 + 打包结构错误（[Issue #24729](https://github.com/ggml-org/llama.cpp/issues/24729)）。
- **V100 投机解码失败**（#26119，已关闭）：`cublasSgemm_v2` 不支持参数，CUDA 12.4 Windows 构建（[Issue #26119](https://github.com/ggml-org/llama.cpp/issues/26119)）。

**普通/较低**

- **混合模型上下文检查点失效**（#24055）：hybrid/recurrent 模型上 checkpoint 总是失效，影响 `/slots save/restore`（[Issue #24055](https://github.com/ggml-org/llama.cpp/issues/24055)；相关 #25913：[Issue #25913](https://github.com/ggml-org/llama.cpp/issues/25913)）。
- **模型加载 reshape 修复**：b10269 修复 dflash `wo_a` reshape 加载问题（[Release b10269](https://github.com/ggml-org/llama.cpp/releases/tag/b10269)）；PR #26531 实现加载时张量 reshape 并已合入（[PR #26531](https://github.com/ggml-org/llama.cpp/pull/26531)）。
- **MTP 内存分配修复**：PR #26605 将 NextN/MTP 层纳入自动 VRAM 拟合，修复 `--n-cpu-moe=0` 时的 `cudaMalloc` 错误（[PR #26605](https://github.com/ggml-org/llama.cpp/pull/26605)）。
- **Windows 内置工具输出乱码**：b10275 修复子进程 OEM 代码页输出在 JSON 层变 U+FFFD 的问题（[Release b10275](https://github.com/ggml-org/llama.cpp/releases/tag/b10275)；[PR #26597](https://github.com/ggml-org/llama.cpp/pull/26597)）。
- **mtmd 短音频重复 chunk**：b10274 修复 31 秒以内音频产生约 61 秒帧、产生多余 padding chunk 的问题（[Release b10274](https://github.com/ggml-org/llama.cpp/releases/tag/b10274)；[PR #26536](https://github.com/ggml-org/llama.cpp/pull/26536)）。
- **subprocess.h 补丁**（PR #26606）：合入上游多个修复，解决用户反馈的子进程相关问题（[PR #26606](https://github.com/ggml-org/llama.cpp/pull/26606)）。

## 6. 对应用开发者的意义

- **TTS 能力可直接调用**：PR #26603 为 TTS 模型新增 `POST /tts` 端点，支持 speaker reference 上传，多模态应用无需自行拼接图执行（[PR #26603](https://github.com/ggml-org/llama.cpp/pull/26603)）。
- **Agent 工具链更可靠**：b10271 为 UI 引入 per-conversation 工作目录，b10275 修复 Windows 下工具输出编码——构建跨平台 Agent 的开发者应升级并在 Windows 上回归测试工具调用链（[PR #26518](https://github.com/ggml-org/llama.cpp/pull/26518)）。
- **DeepSeek-V4 用户注意**：CUDA FA 下的重复 `<` 问题在修复前，建议使用 `-fa off` 或 CPU offload 规避；勿用于生产推理（[Issue #26509](https://github.com/ggml-org/llama.cpp/issues/26509)）。
- **上下文缓存对混合模型不可靠**：若使用 hybrid/recurrent 模型（DeepSeek-V4、Qwen3-Next 等），`/slots save/restore` 与 prompt 复用可能静默失效，需自行实现 KV 管理或关注 #24055/#25913 进展（[#24055](https://github.com/ggml-org/llama.cpp/issues/24055)、[#25913](https://github.com/ggml-org/llama.cpp/issues/25913)）。
- **升级前检查 sampler 配置**：b10273 修复了 `-1` 在历史采样器中的语义，若你的服务端配置显式传入 `-1` 依赖旧行为，需显式指定目标窗口大小（[Release b10273](https://github.com/ggml-org/llama.cpp/releases/tag/b10273)）。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

## Ollama 动态日报 — 2026-08-05

> 数据来源：github.com/ollama/ollama | 覆盖最近 24 小时 Releases、Issues、PRs

## 今日速览

- 发布 **v0.32.6-rc0**：MLX 后端为 Qwen3.5 自动启用基于 MTP 头的投机解码，Apple GPU 推理加速；同时 `/v1/chat/completions` 流式响应调整为 OpenAI 标准 wire format，属于兼容性变更。
- 社区围绕 Gemma4/Qwen 工具调用稳定性提交了 4 个修复 PR（#17563、#17564、#17565、#17570），并新增“思考预算”提案（#17561 / #17566）。
- 长期高热需求“Rerank 模型支持”（#3368）和“AirLLM 集成”（#6294）仍在活跃；新增 MoE 专家权重放内存、按需上 GPU 的显存优化请求（#17557）。

## 版本发布与破坏性变更

- **v0.32.6-rc0** [Release](https://github.com/ollama/ollama/releases/tag/v0.32.6-rc0)
  - Qwen3.5 在 Apple GPU 上通过 MLX 引擎使用模型 MTP head 自动进行投机解码，提升推理速度。
  - `/v1/chat/completions` 流式输出调整：
    - `role` 仅出现在第一个 chunk；
    - `finish_reason` 独立成 chunk；
    - `usage` 单独返回。
  - **注意**：流式 JSON 结构发生变化，沿用旧解析逻辑的 OpenAI 兼容客户端需要适配。

## 新模型与硬件支持

- **Apertus 模型支持**：[Issue #12149](https://github.com/ollama/ollama/issues/12149) 请求支持 `ApertusForCausalLM`；[PR #17555](https://github.com/ollama/ollama/pull/17555) 已添加 Apertus v1.5 8B/70B 的原生 chat 处理。
- **glm-ocr MLX 适配**：[Issue #17535](https://github.com/ollama/ollama/issues/17535) 请求官方提供类似 `qwen3.6:27b-mlx` 的 MLX 版 glm-ocr，以在 Apple Silicon 上高效运行。
- **deepseek-v4-flash:0731 本地版**：[Issue #17510](https://github.com/ollama/ollama/issues/17510) 询问是否计划提供本地权重版本。
- **Rerank 模型**：[Issue #3368](https://github.com/ollama/ollama/issues/3368) 要求支持 BGE / mxbai 等重排模型，已获 285 👍、110 评论，仍 open。

## 性能与优化

- **MLX 投机解码（已落地）**：v0.32.6-rc0 中 Qwen3.5 在 Apple GPU 上自动使用 MTP 头做 speculative decoding，无需手动配置（[Release](https://github.com/ollama/ollama/releases/tag/v0.32.6-rc0)）。
- **MoE 显存优化提案**：[Issue #17557](https://github.com/ollama/ollama/issues/17557) 建议将 MoE Expert 权重放在 Host RAM，按需计算时再上 GPU，从而在 8GB 显卡上运行 16B/35B MoE 模型而不 OOM。
- **AirLLM 集成请求**：[Issue #6294](https://github.com/ollama/ollama/issues/6294) 希望集成 AirLLM 以大幅降低大模型 VRAM 需求。

## 稳定性与回归

按严重程度排列：

- **MLX runner 崩溃**：[Issue #17569](https://github.com/ollama/ollama/issues/17569) 导入本地 Qwen3-8B-MLX-4bit 后首次 `/api/chat` 即 panic（`dense qwen3.MLP.Forward` index out of range）。暂无修复 PR。
- **Gemma4 工具调用崩溃**：[Issue #17568](https://github.com/ollama/ollama/issues/17568) 在 x86 上通过 agent 调用工具时 Ollama 崩溃。暂无直接 PR，相关修复见 [#17565](https://github.com/ollama/ollama/pull/17565) / [#17564](https://github.com/ollama/ollama/pull/17564)。
- **Llama3.2-vision 回归**：[Issue #16490](https://github.com/ollama/ollama/issues/16490) 最新更新后 vision 功能不可用。
- **工具调用三个 Bug**：[Issue #17562](https://github.com/ollama/ollama/issues/17562) 汇总了重复内容守卫误判、截断工具调用、缺失右括号导致工具调用被丢弃，分别对应 PR：
  - [PR #17563](https://github.com/ollama/ollama/pull/17563) — 停止将重复载荷猜为 runaway；
  - [PR #17564](https://github.com/ollama/ollama/pull/17564) — 不交付模型未写完的工具调用；
  - [PR #17565](https://github.com/ollama/ollama/pull/17565) — 恢复缺失右括号的完整工具调用。
- **Gemma4 输出符号与 thinking 中断问题**：[PR #17570](https://github.com/ollama/ollama/pull/17570) 修复 `->` 未被翻译、thinking 有时不中止的问题。
- **Corrupted blob 不检测**：[Issue #17520](https://github.com/ollama/ollama/issues/17520) `ollama pull` 对内容与 digest 不匹配的 blob 仍报 success，重启/重拉不修复。
- **/api/generate 静默忽略 think**：[Issue #17544](https://github.com/ollama/ollama/issues/17544) 设置 `format` 时 `/api/generate` 忽略 `think: true`，`/api/chat` 正常。
- **Vulkan 覆盖 CUDA_VISIBLE_DEVICES**：[Issue #16508](https://github.com/ollama/ollama/issues/16508)（已关闭）Vulkan 设备检测导致忽略指定 GPU；若仍受影响需回退到 0.30.2 之前版本。
- **OLLAMA_NUM_PARALLEL 被静默降低**：[Issue #17556](https://github.com/ollama/ollama/issues/17556)（已关闭）VRAM 不足时并行槽位降为 1，但 `ollama ps` 或 API 无任何提示。
- **Docker 镜像缺少 NVIDIA+Vulkan 组件**：[Issue #17549](https://github.com/ollama/ollama/issues/17549) Docker 内 Ollama 无法通过 Vulkan 检测到 Nvidia 卡，需在 Dockerfile 中补充依赖。

## 对应用开发者的意义

- **OpenAI 流式兼容变更**：使用 `/v1/chat/completions` SSE 流的应用必须更新解析逻辑。`role` 只在首块返回、`finish_reason` 独立成块、`usage` 单独返回，否则可能丢失元数据或解析到空 chunk。
- **工具调用可靠性**：多个 PR 正针对编程 Agent 场景修复截断工具调用、缺失括号、重复内容误判等问题，合并后将显著提升 Gemma4/Qwen 在 Cline、Continue 等工具调用场景的稳定性。
- **思考预算（thinking budget）**：[Issue #17561](https://github.com/ollama/ollama/issues/17561) / [PR #17566](https://github.com/ollama/ollama/pull/17566) 计划支持按请求/模型限制思考 token 数，避免模型在思考块内无限循环、耗尽上下文后返回空响应。
- **Embedding API 修正**：
  - [PR #17548](https://github.com/ollama/ollama/pull/17548) 将 `/api/embeddings` 超长输入从 500 改为与 `/api/embed` 一致的 400；
  - [PR #17543](https://github.com/ollama/ollama/pull/17543) 为 `/api/embed` 输入被截断增加服务端警告，避免无提示地基于截断文本计算向量。
- **结构化输出与 think 的交互**：当前 `/api/generate` 在 `format` 下忽略 `think`，可能导致 JSON 结构化输出质量异常；需要严格结构化输出的应用建议改用 `/api/chat`。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 动态日报 2026-08-05

## 今日速览

过去 24h 无新 Release；PR 侧集中在稳定性修复：HTTP 客户端生命周期自愈（#35862/#35870）、数据库降级判定收紧（#35864）、Redis 遥测任务引用（#35347）。风险面上，Redis Cluster 跨用户响应串扰（#25447）与 `/v1/messages` reasoning 流式内容丢失/错编码（#30765/#25214/#32357）仍未关闭，对 Agent 网关生产环境影响较大。

## 版本发布与破坏性变更

- 无新 Release，无官方破坏性变更。
- 依赖兼容性：FastAPI ≥0.141.0 因上游移除 `get_flat_dependant` 会导致 LiteLLM 启动即 ImportError；PR #35858 建议将 fastapi 限制在 `<=0.140.6`。[PR](https://github.com/BerriAI/litellm/pull/35858)
- Langfuse 集成迁移：#33383 由 Langfuse 团队提出，计划升级到 Python SDK v4 / v4 OTel ingestion；使用 Langfuse Cloud Fast Preview 的用户需要同步升级客户端。[Issue](https://github.com/BerriAI/litellm/issues/33383)

## 新模型与硬件支持

- 本次数据中无 CUDA/ROCm/Metal/CPU 或量化格式相关更新。
- #35872（待审）新增 Bedrock Rust provider，PR 描述尚未填充。[PR](https://github.com/BerriAI/litellm/pull/35872)
- #31819 请求将 Amazon Bedrock AgentCore Web Search 作为一等 search provider，可直接用于 `litellm.search()` / `websearch_interception`。[Issue](https://github.com/BerriAI/litellm/issues/31819)
- #25668 Vertex AI Grok 模型支持请求已关闭。[Issue](https://github.com/BerriAI/litellm/issues/25668)

## 性能与优化

- #35826：流式 tool-call 参数组装由二次复杂度改为线性，避免长 tool-call 流在 end-of-stream 阶段长时间阻塞 worker。[PR](https://github.com/BerriAI/litellm/pull/35826)
- #35839：新增 auto-router 按 session 的 spend benchmarks rollup，避免 benchmark 页面每次扫描最宽、无界的 `LiteLLM_SpendLogs` 表。[PR](https://github.com/BerriAI/litellm/pull/35839)

## 稳定性与回归

按严重程度排列：

- **[严重] Redis Cluster 响应串扰 / 用户数据交叉泄漏**：#25447，OpenShift 多副本 + Redis Cluster 环境下响应偶尔返回给错误客户端；未见修复 PR。[Issue](https://github.com/BerriAI/litellm/issues/25447)
- **[高] Virtual Key TPM 限流回归**：#24677，v1.82.3 仍复现；此前 #18953 声明修复，实际限流与配置不符。[Issue](https://github.com/BerriAI/litellm/issues/24677)
- **[高] SpendLogs 索引缺失导致 DB 打满**：#35766，缺少 `(api_key, startTime)` 索引，预算窗口 spend 查询触发全表扫描，2 vCPU RDS 被持续占用并出现 P2028 事务失败；缓解性 PR #35839 尚未合入。[Issue](https://github.com/BerriAI/litellm/issues/35766) [PR](https://github.com/BerriAI/litellm/pull/35839)
- **[高] `/v1/messages` reasoning 流式兼容性**：#30765 丢失 thinking 块后的首个 text_delta；#25214 Bedrock reasoning 模型 content-block 切换丢首个 chunk；#32357 将 thinking_delta 错放入 text block 并重复 message_start，导致 Anthropic SDK / Claude Code 拿到空内容；均无修复 PR。[#30765](https://github.com/BerriAI/litellm/issues/30765) [#25214](https://github.com/BerriAI/litellm/issues/25214) [#32357](https://github.com/BerriAI/litellm/issues/32357)
- **[高] 非 root 镜像升级阻断**：#34236，官方 `litellm-non_root` 从 1.84.0 升 1.92.1 时 Prisma migration 因 `@prisma/engines` 不可写失败。[Issue](https://github.com/BerriAI/litellm/issues/34236)
- **[中] FastAPI 新版本启动崩溃**：PR #35858 限制 fastapi `<=0.140.6`，避免上游移除 `get_flat_dependant` 导致的 ImportError。[PR](https://github.com/BerriAI/litellm/pull/35858)
- **[中] HTTP 客户端被缓存淘汰后关闭**：#35862 修复约 75 分钟后 guardrail 请求因 `client closed` 全部 500 的问题；#35870 在其上重新落地 evicted LLM client closing（#35492）。[PR](https://github.com/BerriAI/litellm/pull/35862) [PR](https://github.com/BerriAI/litellm/pull/35870)
- **[中] OCI Gemini 系列问题**：#18654 工具调用异常；#18166 OCI Gemini 模型不受支持；#24819 同步流缺失 split_chunks 导致 JSONDecodeError。[#18654](https://github.com/BerriAI/litellm/issues/18654) [#24819](https://github.com/BerriAI/litellm/issues/24819)
- **[中] Ollama Vision 图片调用失败**：#27183，容器镜像 `v1.83.14-stable` 缺少 pillow 依赖。[Issue](https://github.com/BerriAI/litellm/issues/27183)
- **[中] Responses/`/v1/messages` SSE 不完整**：#20975 Azure Responses API 流式缺少 setup events；PR #35867 处理空 choices 流块（fixes #35785）。[Issue](https://github.com/BerriAI/litellm/issues/20975) [PR](https://github.com/BerriAI/litellm/pull/35867)
- **[中] 数据库降级判定过宽**：#35864 将任何未识别 Prisma 错误视为“DB 临时不可用”，可能让代理在永久引擎故障下“干净启动”却不持久化任何流量；PR 改为只将瞬时错误列入白名单。[PR](https://github.com/BerriAI/litellm/pull/35864)
- **[中] UI 子路由 404 与模型参数编辑**：#24037 `/ui/chat` 等子路由 404，Next.js 静态导出缺少 `chat/` 目录 index.html（26 👍）；#23998 UI 中无法删除已添加的模型 LiteLLM Params。[#24037](https://github.com/BerriAI/litellm/issues/24037) [#23998](https://github.com/BerriAI/litellm/issues/23998)
- **[已修] Redis 遥测任务被 GC**：#35347 提交 PR，在 RedisCache 中持有 service-logging task 引用，避免负载下 Redis 遥测静默丢弃。[PR](https://github.com/BerriAI/litellm/pull/35347)
- **[已修] S3 v2 签名 URL**：#35726 改用 S3SigV4Auth，修复含空格路径双重编码导致 403 的问题，PR 已关闭。[PR](https://github.com/BerriAI/litellm/pull/35726)

## 对应用开发者的意义

- 若通过 LiteLLM 代理运行 Claude Code / Anthropic SDK 并开启 reasoning 流式，thinking→文本切换时可能出现空内容或丢块；可暂用非流式或原生 OpenAI endpoint。
- 不要只依赖 Virtual Key TPM 做配额控制；1.82.x 上 TPM 限流不准确，需叠加其他限流/审计手段。
- 使用 Redis Cluster 的生产环境应立即排查跨用户串扰风险（#25447）；无法确认隔离性前建议回退或加严网络/密钥隔离。
- 高流量场景注意 SpendLogs 索引缺失风险；可手工补 `(api_key, startTime)` 索引，或等待 #35839 rollup。
- 升级前将 FastAPI 锁在 `<=0.140.6`；`litellm-non_root` 用户暂缓升 1.92.x，直至 #34236 解决。
- 使用 Ollama VLM 图片理解时，需在镜像中自行安装 pillow，或等待镜像依赖修复（#27183）。
- Langfuse 用户升级到 v4 后，留意 `metadata`/`sessionId`/`userId` 是否透传；#35866 会修复 `/v1/responses` trace 字段为空的问题。[PR](https://github.com/BerriAI/litellm/pull/35866)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 动态日报 — 2026-08-05

## 今日速览

Unsloth 发布 v0.1.52-beta，新增 DeepSeek-V4 Flash 0731 与 Kimi K3 的 Dynamic GGUF 本地运行支持，并优化了下载流程（XET 卡住时自动回退 HTTP）。稳定性方面，围绕 Studio 的多个回归/兼容性问题在今日集中修复，包括 API 流式挂起（#7881）、GGUF companion 文件错误拉取（#7870）、transformers 5.x 兼容性（#7866）等。此外，CLI 训练恢复（#6823）与数据集预处理内存保护（#7831）两个大型 PR 持续推进中。

---

## 版本发布与破坏性变更

- **v0.1.52-beta**：更快下载 + DeepSeek-V4 Flash 0731 支持。对 Colab、低内存/高内存/CPU 系统均优化了下载效率；若 XET 协议卡住会自动回退 HTTP，避免下载中断。  
  https://github.com/unslothai/unsloth/releases

- **安装脚本风险（新报告）**：#7818 用户反馈安装脚本自动安装了 Python，并卸载了现有 PyTorch 与 CUDA 包。基础设施建设者需注意安装脚本的环境变更行为，建议在隔离环境（venv/容器）中执行安装。  
  https://github.com/unslothai/unsloth/issues/7818

- **依赖兼容性适配（进行中）**：#7866 修复 transformers 5.x（PretrainedConfig 改为 dataclass）、TRL 0.22.x、peft 的 5 个兼容性故障，每项均会直接阻断模型加载或训练运行。  
  https://github.com/unslothai/unsloth/pull/7866

---

## 新模型与硬件支持

- **DeepSeek-V4 Flash 0731 与 Kimi K3**：现可通过 Unsloth Dynamic GGUF 在本地运行，完善了 v0.1.52-beta 的模型覆盖。  
  https://github.com/unslothai/unsloth/releases

- **新功能请求** 
  - #7832：请求接入 SAM3.1 实现基于文本提示的 inpainting mask 生成（FP16 仅 1.75GB）。  
    https://github.com/unslothai/unsloth/issues/7832
  - #7824：请求增加 Schedule-Free AdamW 优化器（NeurIPS 2024），内存占用与 AdamW 相同、无需 LR schedule。  
    https://github.com/unslothai/unsloth/issues/7824

---

## 性能与优化

- **数据集预处理内存保护（PR #7831，进行中）**：修复 `Dataset.map()` 子进程在 tokenization 过程中突然死亡的问题。复现实验中 1,510 次 `Dataset.map()` 调用出现间歇性 `RuntimeError: One of the subprocesses has abruptly died`。PR 按可用内存动态界定 `dataset_num_proc`，并修正"1"被当作禁用多进程的语义错误。  
  https://github.com/unslothai/unsloth/pull/7831

- **GGUF companion 文件误下载修复（PR #7870）**：修复 Studio 选择 GGUF 时拉取错误 companion 字节的 bug——该问题可能导致静默多 GB 下载且最终加载了错误的文件。避免无谓带宽与磁盘消耗。  
  https://github.com/unslothai/unsloth/pull/7870

- **VRAM 可预测性（PR #7880，进行中）**：Studio 下载模型列表新增 VRAM 内存条显示，同时展示模型文件大小与 KV cache 扩展后的实际 VRAM 占用，帮助用户在加载前判断是否需要缩短上下文或量化 KV cache。  
  https://github.com/unslothai/unsloth/pull/7880

---

## 稳定性与回归

按严重程度排列：

1. **[严重] 训练缓存协调循环格式检查回归（#7853）**：由 PR #7633 引入，缓存协调 hook 导致格式检查循环。用户已用精确 Git revision 复现，确认为回归。无修复 PR。  
   https://github.com/unslothai/unsloth/issues/7853

2. **[严重] API 流式响应挂起（#7617）**：Pi Agent 等客户端访问 Studio 时流式请求频繁挂起，需人工介入才能继续。已有修复 PR #7881（为所有 teardown await 添加超时绑定，防止被吞掉的 cancel 阻塞 API）。  
   https://github.com/unslothai/unsloth/issues/7617  
   https://github.com/unslothai/unsloth/pull/7881

3. **[严重] 安装脚本破坏环境（#7818）**：安装脚本自动安装 Python 并卸载已存在的 PyTorch/CUDA，非预期破坏性变更。无修复 PR。  
   https://github.com/unslothai/unsloth/issues/7818

4. **[高] Qwen3.5 微调后无法用 vLLM 推理（#7681）**：Qwen3.5-0.8B 经 Unsloth 微调后 vLLM 无法加载，原始预训练模型可正常推理。无修复 PR。  
   https://github.com/unslothai/unsloth/issues/7681

5. **[高] 权重缓存被误判为完整快照（#7845，回归）**：PR #7633 引入的缓存感知逻辑将"有权重但无 tokenizer"的快照判定为完整可用，训练加载时因 `local_files_only` 失败。无修复 PR。  
   https://github.com/unslothai/unsloth/issues/7845

6. **[高] Studio 本地 QLoRA worker 崩溃（#7843）**：Qwen3.5-2B 经 QLoRA 微调后，首次对话生成约 65 秒后推理 worker 退出。无修复 PR。  
   https://github.com/unslothai/unsloth/issues/7843

7. **[中] Studio 内存硬编码限制（#7878）**：Linux 下 worker.py 硬编码内存使用上限 80%，Strix Halo 上大量空闲内存无法利用，限制了大模型训练。无修复 PR。  
   https://github.com/unslothai/unsloth/issues/7878

8. **[中] 8 月更新后 Ollama 模型不可见 + 上下文收缩（#7877）**：Ollama 下载的模型在最近两个版本中不再被 Unsloth 识别；上下文大小被设为原来的约 50%。无修复 PR。  
   https://github.com/unslothai/unsloth/issues/7877

9. **[中] Docker Hub 镜像滞后（#6180）**：unsloth studio 镜像停留在 0.1.43（6 月 3 日），影响 Gemma4 12B 执行。无修复 PR。  
   https://github.com/unslothai/unsloth/issues/6180

10. **[中] Windows 安装回滚失败导致环境分裂（#7810）**：`install.ps1` 的 venv 回滚假定 `Move-Item` 原子性，失败后环境被拆成两半。无修复 PR。  
    https://github.com/unslothai/unsloth/issues/7810

11. **[低] 下载进度卡在 99%（#7858）**：已缓存的模型/数据集在训练启动 overlay 中显示"Downloading — 99%"且无实际下载任务。无修复 PR。  
    https://github.com/unslothai/unsloth/issues/7858

---

## 对应用开发者的意义

- **Agent 客户端稳定性提升**：#7881 修复了 Studio API 流式挂起问题，直接影响 Pi、Hermes、OpenCode、Zed、Roo Code、Copilot 等 agent 客户端的生产可用性。若你构建依赖 Unsloth 推理后端的 agent 应用，此修复值得重点关注。  
  https://github.com/unslothai/unsloth/pull/7881

- **避免盲目的模型下载**：#7870 修复了 GGUF 选择可能触发错误 companion 文件下载的问题——此前可能发生静默多 GB 误下载并加载错误文件。建议应用层在模型选择后做一次实际文件校验。  
  https://github.com/unslothai/unsloth/pull/7870

- **训练中断恢复能力（开发中）**：#6823 为 CLI 与 Studio 补齐 `--resume` / `--resume-from-checkpoint` 能力，长时训练任务的中断恢复将不再依赖人工重启。对生产训练工作流有直接价值。  
  https://github.com/unslothai/unsloth/pull/6823

- **VRAM 可预测性（开发中）**：#7880 在模型列表显示 KV cache 感知的 VRAM 占用，应用开发者可以更准确地在有限显存上规划模型与上下文窗口。  
  https://github.com/unslothai/unsloth/pull/7880

- **工具调用支持缺口**：#7761 请求为 Ollama 连接增加工具调用/外部 API（web search、MCP、code）能力，当前 Studio 通过 Ollama 接入的模型不支持工具调用，agent 类应用需关注此功能进展。  
  https://github.com/unslothai/unsloth/issues/7761

- **评估与分享能力增强**：#6824 增加 `unsloth eval` CLI（lm-eval-harness 集成）；#7652 为桌面端预览链接增加公网分享能力（cloudflared quick tunnel）。两者均处于 open 状态，适合需要批量评估或远程协作的团队跟进。  
  https://github.com/unslothai/unsloth/pull/6824  
  https://github.com/unslothai/unsloth/pull/7652

- **float32 训练语义修正**（#7867）：此前在不支持 bf16 的 GPU（T4/V100）上请求 `dtype=torch.float32` 会被静默替换为 float16 混合精度。此修复保证显式指定的 float32 被保留，对数值敏感的训练任务很重要。  
  https://github.com/unslothai/unsloth/pull/7867

---

*报告生成时间：2026-08-05 | 数据来源：github.com/unslothai/unsloth（Releases / Issues / Pull Requests）*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*