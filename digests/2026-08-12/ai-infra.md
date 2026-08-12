# AI 基础设施日报 2026-08-12

> 生成时间: 2026-08-12 00:58 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施生态横向对比分析报告

**日期：** 2026-08-12  
**范围：** vLLM / SGLang / llama.cpp / Ollama / LiteLLM / Unsloth

---

## 1. 生态全景

当前 AI 基础设施生态正处于 **模型驱动的高速适配期**：DeepSeek-V4 系列、Kimi-K3、Qwen3.5 等新模型密集发布，迫使推理引擎、本地运行时和网关层同步跟进，适配速度成为核心竞争力。同时，**AMD/ROCm 平台的战略地位显著上升**，vLLM、SGLang、llama.cpp 三家同日均有 ROCm 相关修复或功能合入，但小版本回归频发（Transformers 兼容性、HIP 数值溢出等）表明跨平台成熟度仍有差距。**稳定性取代性能成为社区最高优先级议题**——今日六个项目合计报告 40+ 个待修复 issue，其中崩溃/数据丢失/安全类问题占 1/3 以上。此外，**网关层与本地运行时正同时向更低延迟和高并发方向演进**，LiteLLM 启动 Rust 重写（目标 sub-1ms 开销），Unsloth 发布桌面版试图打通“微调→推理”链路，生态分层进一步清晰。

---

## 2. 各项目活跃度对比

> 注：Issue/PR 数量依据日报中明确提及的编号统计，实际活跃度可能更高。

| 项目 | 关键 Issues 数 | 关键 PRs 数 | Releases | 活跃度特征 |
|---|---|---|---|---|
| **vLLM** | 12（含 2 个高热度：#50576 98条评论、#51758） | 14（含 2 个已合并） | v0.27.1 patch | 高：以模型适配（DSV4/Kimi-K3）和性能优化为主线，社区反馈密集 |
| **SGLang** | 8 | 13（含 3 个已合并） | 无 | 高：PR 集中在 AMD/ROCm 修复与 MoE 优化，无版本发布但合并节奏快 |
| **llama.cpp** | 9 | 8 | **7 个**（b10356–b10362） | 极高：24 小时内 7 次发版，覆盖后端修复、CI 升级、模型架构新增 |
| **Ollama** | 9 | 8 | v0.32.9 | 中高：发版节奏稳定，但社区报告了 CUDA 崩溃、模型丢失等严重回归 |
| **LiteLLM** | 8 | 7（含 3 个已合并/待合并） | **7 个**（v1.90.7→v1.96.2） | 中高：迭代频繁但以供应链签名、文档同步为主，功能实质性变更较少 |
| **Unsloth** | 11 | 11 | v0.1.701-beta / v0.1.70-beta / v0.1.62-beta | 高：桌面版发布引爆 issue 量，但性能优化 PR 同步密集 |

**综合判断：** llama.cpp 与 vLLM 在工程迭代速度上领先，SGLang 和 Unsloth 在特定领域（AMD/微调）投入最大，LiteLLM 处于技术债还债期（Rust 重写前夜），Ollama 发版节奏稳定但仍受上游（llama.cpp）回归波及。

---

## 3. 模型支持竞速

| 模型/架构 | vLLM | SGLang | llama.cpp | Ollama | 说明 |
|---|---|---|---|---|---|
| **DeepSeek-V4 / V4-Flash** | ✅ 支持（SM8x 缺失、KV 膨胀回归） | ✅ 支持（深度优化中） | ⚠️ 部分支持（ROCm/Vulkan 有正确性 bug） | ❌ 未提及 | vLLM/SGLang 为第一梯队，llama.cpp 本地跑通仍需时间 |
| **Kimi-K3** | ✅ 支持（ROCm 差距跟踪中） | ✅ 支持（FlashInfer bump 将移除 workarounds） | ❌ 未提及 | ❌ 未提及 | vLLM 与 SGLang 齐头并进，ROCm 是共同短板 |
| **Qwen3.5 / Qwen3.6** | ❌ 未提及 | ✅ 支持（DP-attention 修复） | ✅ 支持（但 Vulkan+MoE 崩溃） | ❌ 未提及 | llama.cpp 在 Vulkan 上有崩溃，SGLang 侧重分布式正确性 |
| **Nemotron 3.5 Lightning** | ❌ 未提及 | ❌ 未提及 | ❌ 未提及 | ✅ v0.32.9 官方支持 | Ollama 当日最大模型亮点 |
| **A.X K2** | ❌ 未提及 | ❌ 未提及 | ✅ PR #26757 新增架构 | ❌ 未提及 | llama.cpp 在长尾新架构上响应最快 |
| **LTX-2.5 Diffusion** | ❌ 未提及 | ✅ PR #34471 | ❌ 未提及 | ❌ 未提及 | SGLang 在扩散模型上持续布局 |

**结论：** 
- **大模型（DeepSeek/Kimi）**：vLLM 与 SGLang 处于第一梯队，但均存在 **ROCm/SM8x 硬件覆盖缺口**。
- **长尾/新架构（A.X K2, Nemotron, LTX-2.5）**：llama.cpp 和 Ollama 响应更快，适合个人开发者和小团队；SGLang 在扩散模型上具备差异化优势。
- **未被充分支持**：DeepSeek-V4-Flash 在 A100/A800（SM8x）上全线缺失（vLLM / SGLang 均无解），是当前最大的硬件适配盲区。

---

## 4. 性能优化前沿

优化火力集中在以下五个方向，各项目侧重点不同：

| 方向 | 代表项目/动态 | 技术要点 |
|---|---|---|
| **KV Cache 管理** | vLLM #51041（DSV4 Flash KV 膨胀 8 倍）、SGLang #27574（KV 可编程化 RFC） | 从“压缩”走向“可预测 + 外部可编程”，但模型端 KV 异常膨胀仍是硬伤 |
| **批处理与调度** | SGLang #33480（prefill 两批重叠）、vLLM #48627（上下文感知推测解码调度） | 长上下文场景下批处理策略需从 batch-only 扩展至 (batch, ctx) 二维自适应 |
| **量化路径** | vLLM #49529（W4A8 PTX `ldmatrix.s8.s4`）、#49381（ModelOpt 统一重构）、SGLang #34042（MXFP8 GEMM） | 硬件级指令（PTX 9.4）与 kernel 统一化是量化提速的关键 |
| **分布式推理** | SGLang #34456（延迟 MoE finalize 减少 kernel launch）、vLLM #51903（custom all-reduce 修复）、SGLang #34120（Wide EP 启动失败） | 多节点通信仍是瓶颈；kernel launch 数量成为优化新抓手 |
| **算子级优化** | llama.cpp #26428（OpenCL FA K-tile 转置）、vLLM #25179（fused kernel 需求跟踪）、Unsloth #8428/#8494（流式输出线性化） | 移动端/边缘端算子优化开始借鉴服务端 FA 思路；CPU/GPU 融合仍待突破 |

**关键洞察：** 性能优化已从“单点 kernel 提速”转向 **“编译与生态层面重构”**——vLLM 在收敛 ModelOpt 重复类，LiteLLM 直接 Rust 重写，llama.cpp 全面升级 CI 到 ROCm 7.14。这意味着未来 3-6 个月性能提升将更依赖框架自身的架构级改进，而非单个算子。

---

## 5. 分层定位差异

| 项目 | 分层定位 | 核心优势 | 当日最能体现定位的事件 |
|---|---|---|---|
| **vLLM** | 生产级推理引擎 / 模型服务 | 大模型适配最快、企业级功能全（前缀缓存、推测解码、多模态） | v0.27.1 patch + B12X 原生后端 + DeepGEMM MegaMoE |
| **SGLang** | 推理引擎（强调运行时创新） | 激进优化（延迟 MoE finalize、两批 overlap）、AMD 投入深 | 6 个 AMD/ROCm 专项 PR 同日推进 |
| **llama.cpp** | 本地轻量运行时 | 多后端覆盖（CUDA/ROCm/Vulkan/OpenCL/SYCL）、发版节奏极快 | 7 个版本 + A.X K2 新架构 + ROCm 7.14 切换 |
| **Ollama** | 本地部署平台（面向终端用户） | 极简体验、跨平台、模型市场 | Nemotron 3.5 开箱即用 + metrics 端点 |
| **LiteLLM** | LLM 网关 / 代理层 | 多 provider 路由、成本管理、治理（guardrails）、SDK 兼容 | Rust 迁移主票活跃 + 7 个补丁的供应链签名统一 |
| **Unsloth** | 微调/训练框架（向推理延伸） | 微调速度优化、低资源适配、桌面端产品化 | Desktop 发布 + 流式输出扫描线性化 |

**分层协作关系：** 六者形成完整链路 —— **Unsloth（训练/微调）→ vLLM/SGLang（服务端推理引擎）→ Ollama/llama.cpp（本地推理）→ LiteLLM（统一入口与治理）**。当日动态显示：Unsloth 正尝试通过 Studio 向上游渗透推理场景，Ollama 继续依赖 llama.cpp 作为底层运行时（受其回归波及），LiteLLM 保持“上层无感”策略但自身技术债积累明显。

---

## 6. 值得关注的趋势信号

### 🔴 高优先级信号

**1. DeepSeek-V4 生态修复潮揭示“模型发布—引擎稳定”时滞过长**  
#51758（vLLM 升级报错）、#51039（Kimi-K3 NaN）、#51041（KV 膨胀 8 倍）三者并存，说明头部模型的新版本发布后，推理引擎需要 **2-4 周才能稳定**。  
→ **决策建议：** 生产环境采用 **“滞后一个版本”策略**，或建立内部模型回归测试集（至少覆盖 KV cache 占用、长上下文稳定性、量化路径一致性）。

**2. AMD/ROCm 成为第二战场，但成熟度差距明显**  
六项目中有四家同日推进 ROCm 工作：llama.cpp 切换 CI 到 ROCm 7.14、SGLang 修复 QuickReduce 数值损坏（106M 非有限值）、vLLM 支持 gfx11、Ollama 修复 Strix Halo 显存探测。  
→ **决策建议：** 若你的用户群有 AMD 硬件，近期优先跟踪 SGLang 的 ROCm 修复进度；llama.cpp 的 ROCm 7.14 升级带有 **libhipblas 加载错误风险**（#25807）。

**3. 网关层开启架构级重写（Rust）**  
LiteLLM 以 sub-1ms 为目标推进 Rust 迁移，同时用 Shadow Eval（影子评估）提升路由可观测性。  
→ **决策建议：** 若你部署 LiteLLM，关注迁移进度但暂勿切换；Python 3.13 兼容性已出现缺口（#36526），锁版本时注意。

### 🟡 中期关注信号

**4. 量化精度与数值稳定性成为新瓶颈**  
SGLang 的 QuickReduce fp16 溢出（+0.3% 精度修复）、llama.cpp 的 q4_0 KV 乱码、vLLM 的 W4A8 PTX 指令——量化正在从“能跑”走向“跑得准”，硬件级指令利用（如 `ldmatrix.s8.s4`）是新趋势。

**5. 本地推理与微调走向融合**  
Unsloth Desktop + Studio 正在把“调模型”和“跑模型”放进同一个桌面应用；Ollama 引入 MLX 导入管线；llama.cpp 持续提升 server API 能力。  
→ 对个人开发者和小团队，**体验层（Ollama/Unsloth）会越来越有吸引力**，但生产级仍以 vLLM/SGLang 为准。

**6. Agent 场景的基础设施风险进一步显性化**  
两个突出证据：vLLM #49548（动态推测解码在并发阈值处吞吐崩塌）、SGLang #34235（分层缓存 scheduler 挂起）。  
→ **Agent 开发者注意：** 推测解码参数需在目标并发区间实测；长上下文+缓存的路由策略对 Agent 工作负载友好度仍需验证。

---

**总结一句话：** 模型迭代与硬件扩容仍在加速，但生态的短期胜负手已从“谁先支持新模型”转向“谁的跨平台稳定性更好、谁的架构更新更果断”；对应用开发者，建议构建时优先选择 **vLLM（生产稳定性）或 SGLang（AMD/激进优化）作为服务端、llama.cpp 作为本地兜底、LiteLLM 作为网关层**，并保持模型版本滞后一个 patch 级别的审慎节奏。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 动态日报 — 2026-08-12

## 1. 今日速览

- **v0.27.1 patch 发布**：支持量化版 DSpark Markov heads（#50424），建议受此影响的用户升级。
- **DeepSeek-V4-Flash 仍是社区焦点**：SM8x（A100/A800）支持请求热度极高（#50576 已达 98 条评论），同时 v0.27.0 升级引入新的运行报错（#51758）。
- **Kimi-K3 生态加速推进**：ROCm 支持差距跟踪（#50682）与 AITER MLA 适配 PR（#51647）均在活跃推进。

---

## 2. 版本发布与破坏性变更

- **[v0.27.1 patch release](https://github.com/vllm-project/vllm/releases)**：基于 v0.27.0 的补丁版本，主要变更：支持 quantized DSpark Markov heads（[PR #50424](https://github.com/vllm-project/vllm/pull/50424)）。
- **[升级 0.26.0 → 0.27.0 后 DeepSeek V4 Flash 运行报错（#51758）](https://github.com/vllm-project/vllm/issues/51758)**：用户报告升级后 DSV4 推理异常，目前 issue 状态为 open（9 条评论）。注意 v0.27.1 是否包含修复尚未明确。
- **[vllm-openai:latest 无法启动 Gemma4（#51744）](https://github.com/vllm-project/vllm/issues/51744)**：镜像内置 Transformers 5.15.0 与 vLLM 0.27.0 存在兼容性问题，加载 `yasu-oh/gemma-4-31B-it-qat-NVFP4` 时启动失败。建议将该镜像的 Transformers 版本固定到 5.14.x 或更早。
- **[RFC：弃用 FlexAttention 后端已关闭（#50324）](https://github.com/vllm-project/vllm/issues/50324)**：FlexAttention 在 ROCm 不再是默认选择，在 CUDA 上性能落后于 TritonAttention，且维护成本高。RFC 已关闭，预示着后续版本可能移除该后端，相关自定义 kernel 使用者需要关注迁移路径。

---

## 3. 新模型与硬件支持

- **[ROCm 启用 DeepSeek-V4 on gfx11（PR #47017，已合并）](https://github.com/vllm-project/vllm/pull/47017)**：解除 Python 侧 sparse-indexer 阻塞，并注册 ROCm sparse-indexer 算子，使 DeepSeek-V4 可在 RDNA 3 设备（gfx11）上运行。
- **[新增 B12X 原生后端（PR #51696，OPEN）](https://github.com/vllm-project/vllm/pull/51696)**：为 NVIDIA SM120/SM121 GPU 增加可选的 B12X linear、MoE 和 causal attention 后端，基于 vLLM 现有后端接口，不引入新抽象。
- **[DeepGEMM MegaMoE 支持 R3 capture（PR #51831，OPEN）](https://github.com/vllm-project/vllm/pull/51831)**：为 DeepSeek V4 和 Kimi K3 使用的 DeepGEMM MegaMoE 路径增加 routed-experts (R3) 捕获能力，解决现有 binder 只能识别 MoERunner 的问题。
- **[ROCm AITER MLA 头部填充（PR #51647，OPEN）](https://github.com/vllm-project/vllm/pull/51647)**：将非 16 对齐的 AITER MLA query 头填充到下一个倍数，使 Kimi-K3 TP4（24 heads/rank）可以使用 AITER MLA 而非回退到 Triton MLA。
- **[Kimi-K3 ROCm 差距与路线图跟踪（#50682）](https://github.com/vllm-project/vllm/issues/50682)**：跟踪 vLLM 上游在 ROCm 上对 Kimi-K3 的功能启用和性能优化，Day 0 已集成 AITER fused-moe（a16w4/a8w4）。
- **[DeepSeek-V4-Flash SM8x（A100/A800）支持仍缺失](https://github.com/vllm-project/vllm/issues/50576)**：老 issue（[#40851](https://github.com/vllm-project/vllm/issues/40851)）持续获得关注，DeepSeek-V4-Flash 和新发布的 V4-Flash-0731 在 Ampere 上都无法运行，当前仍无排期。
- **[ViT Full CUDA Graph 支持进展（#38175）](https://github.com/vllm-project/vllm/issues/38175)**：多模态模型（Qwen3-VL、GLM-V、Kimi K2.5 等）的视觉编码器性能优化跟踪，目前仍在推进中。

---

## 4. 性能与优化

- **[GLM 5.2 性能优化任务跟踪（#46654）](https://github.com/vllm-project/vllm/issues/46654)**：多个优化 PR 已标记完成（[#36559](https://github.com/vllm-project/vllm/pull/36559)、[#46642](https://github.com/vllm-project/vllm/pull/46642)），涉及 kernel 优化及量化路径改进。
- **[W4A8-INT8 路径采用 PTX 9.4 `ldmatrix.s8.s4`（#49529）](https://github.com/vllm-project/vllm/issues/49529)**：利用 CUDA 13.4 新增的硬件级 INT4→INT8 符号扩展加载，减少 shared memory 带宽消耗，预期可提升 W4A8 模型（如 FP8 权重 + INT8 激活）的 prefill/decode 性能。
- **[ModelOpt LinearMethod 统一重构（PR #49381，OPEN）](https://github.com/vllm-project/vllm/pull/49381)**：将 ModelOpt 的六个近重复 LinearMethod 类（FP8 per-tensor/per-channel/block-wise、NVFP4 W4A4/W4A16、MXFP8）收敛为一个 QuantKey 驱动的通用实现，降低维护成本并夯实性能调优基础。
- **[上下文长度感知的推测解码调度（#48627）](https://github.com/vllm-project/vllm/issues/48627)**：RFC 提出将 `num_speculative_tokens_per_batch_size` 从仅按 batch size 选择 K 扩展为按 `(batch, ctx)` 二维表选择，以更好适配长上下文场景下的显存和计算开销。
- **[动态推测解码在并发阈值附近出现吞吐崩塌（#49548）](https://github.com/vllm-project/vllm/issues/49548)**：Qwen3.5-122B MTP (k=2) 在 batch 阈值切换处出现指令级 FU LL_AND_PIECEWISE→PIECEWISE 降级，导致并发聚合吞吐显著下降。同类问题在 [#49986](https://github.com/vllm-project/vllm/issues/49986) 中也有报告，建议生产环境谨慎使用该配置。
- **[ROCm Skinny GEMM 测试提速（PR #51877）](https://github.com/vllm-project/vllm/pull/51877)**：将测试参数从 11040 降为 2644 并可减少环境清理，单个测试套件从约 2 小时降至 ~10 秒。
- **[自定义 fused kernel 需求跟踪（#25179）](https://github.com/vllm-project/vllm/issues/25179)**：持续收集需要新增的融合算子，以支持量化与 KV cache 等特性与现有 pass 正交组合。

---

## 5. 稳定性与回归

生产中影响较大的问题按严重程度排列：

1. **[Transformers 5.15.0 导致 Gemma4 无法启动（#51744）](https://github.com/vllm-project/vllm/issues/51744)** — 最新镜像回归。**Workaround**：固定 Transformers<5.15 或回退 vllm-openai 镜像版本。
2. **[Kimi-K3 长上下文预填充后发生 NaN logits 退化（#51039）](https://github.com/vllm-project/vllm/issues/51039)** — 处理 ~240K token 长上下文请求后，后续所有请求退化输出重复 token，无明确修复。ROCm 侧有同类型 gfx942 内存访问错误报告（[#48266](https://github.com/vllm-project/vllm/issues/48266)）。
3. **[DeepSeek-V4-Flash-0731 KV cache 显著膨胀（#51041）](https://github.com/vllm-project/vllm/issues/51041)** — KV cache 约 56 bytes/token，比 preview 版高约 8 倍，`max_model_len` 因此受限（H20 TP=2 下仅 ~121K）。若部署 0731 版本，注意显存容量规划。
4. **[DeepGEMM "Unknown recipe" 断言（#47130）](https://github.com/vllm-project/vllm/issues/47130)** — vLLM 0.24.0 起在 Blackwell sm_120 上 FP8 模型启动 warmup 时崩溃，0.23.0 正常，属回归问题。
5. **[NVFP4 Flashinfer CuteDSL MoE + DeepEP 数值精度问题（#31840，已关闭）](https://github.com/vllm-project/vllm/issues/31840)** — 特定 `VLLM_MOE_DP_CHUNK_SIZE` 和 `VLLM_DEEPEP_LOW_LATENCY` 组合下出现精度问题，已在 vLLM 后续版本中修复关闭。

已有修复 PR（在途或分拆）：

- **DSV4 sparse MLA 端到端修复（[PR #51538](https://github.com/vllm-project/vllm/pull/51538)）**：修复 DeepSeek-V4-Flash-0731 在 SM120 sparse MLA 后端上 plain decode、MTP、DSpark 三种模式的 7 个阻塞缺陷。
- **MRV2 Gumbel sampling 非有限 logits 修复（[PR #43249](https://github.com/vllm-project/vllm/pull/43249)）**：修复 Gumbel 噪声在 `-inf` 候选 logits 下产生 `inf` 导致采样错误的问题。
- **Thinking-budget 异步 SWAP 状态清理（[PR #49613](https://github.com/vllm-project/vllm/pull/49613)）**：修复 budgeted request 与 unbudgeted slot 交换导致 stale thinking-budget 状态的生产 bug。
- **Custom all-reduce + expandable_segments 崩溃修复（[PR #51903](https://github.com/vllm-project/vllm/pull/51903)）**：修复 VMM-backed tensors 无法通过 legacy `cudaIpcGetMemHandle` 导出的问题。
- **CUDA graph profiling 长 warmup 修复（[PR #50848](https://github.com/vllm-project/vllm/pull/50848)）**：将长上下文 profiling run 与正常 shape 捕获分离，避免 GDN 临时激活被计入持久图内存。
- **MRV2 uniform-decode 路径条件收紧（[PR #50532](https://github.com/vllm-project/vllm/pull/50532)）**：要求所有请求均处于 decode 阶段时才走 uniform-decode 分发，避免 prefill/decode 混跑时的错误 dispatch。
- **MRV2 支持 draft model 推测解码（[PR #43091](https://github.com/vllm-project/vllm/pull/43091)）**：为目标架构补齐功能。

---

## 6. 对应用开发者的意义

- **镜像版本策略**：当前 `latest` 镜像的 Transformers 5.15.0 与 vLLM 0.27.0 存在已知兼容性问题（#51744）。生产环境建议固定具体版本（如 `v0.27.1`），并在升级前检查 DeepSeek-V4-Flash 相关回归（#51758）。
- **DeepSeek-V4-Flash 部署限制**：A100/A800（SM8x）用户目前无法使用 DeepSeek-V4-Flash 与 V4-Flash-0731（#50576、#40851）。若使用 V4-Flash-0731，注意 KV cache 占用大幅膨胀（#51041），需重新评估显存预算与 `max_model_len`。
- **Kimi-K3 长上下文稳定性门槛**：长上下文（~240K+ tokens）处理后服务可能进入完全不可用状态（#51039），建议部署方在长 prefill 前设置模型级保护或回退到更低上下文窗口，并关注 [#51538](https://github.com/vllm-project/vllm/pull/51538) 等的修复进展，不要将 K3 直接暴露给不可控的任意长请求。
- **推测解码配置注意**：动态 `num_speculative_tokens_per_batch_size` 在并发切换 batch 阈值时可能出现吞吐崩塌（#49548、#49986），Agent 类高并发场景建议先做容量测试，必要时固定 K 值。
- **Rust 前端继续补齐能力**：`/inference/v1/generate` 将支持 stop strings（[PR #51904](https://github.com/vllm-project/vllm/pull/51904)），可通过 Rust 前端获得更低延迟并避免 Python 侧 detokenizer 开销。

---

*本日报由 AI 自动整理，数据来源 [github.com/vllm-project/vllm](https://github.com/vllm-project/vllm)，覆盖 2026-08-11 至 2026-08-12 的 24 小时动态。*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 动态日报 — 2026-08-12

数据来源：github.com/sgl-project/sglang

## 今日速览

今日无新版本 Release，社区 PR 重心集中在 **AMD/ROCm 稳定性修复**（QuickReduce 数值损坏、FLUX 启动崩溃、Cosmos3-Nano 启动失败）与 **Qwen MoE 模型在 PP/DP 极端场景下的正确性修复**。值得关注的是 DeepSeek V4 相关优化持续推进：新增 **延迟 MoE finalize** 支持（减少 kernel launch）与 **prefill context parallel two batch overlap** 方案。此外 FlashInfer 0.6.17 bump 已进入 CI，有望消除 Kimi K3 的既有 workarounds。

## 版本发布与破坏性变更

**无官方 Release。** 以下依赖/CI 变更值得注意：

- **FlashInfer 0.6.17**：PR [sgl-project/sglang#33997](https://github.com/sgl-project/sglang/pull/33997) 正在推进，将移除 Kimi K3 的 workarounds；包含 `run-ci` 与 `release-highlight` 标签，合入后需关注显存占用与 kernel 行为变化。
- **Windows ARM64 CI 支持**：PR [sgl-project/sglang#34339](https://github.com/sgl-project/sglang/pull/34339) 新增 Windows ARM64 构建与发布管道，对跨平台部署有影响，未来可跟踪。

## 新模型与硬件支持

- **LTX-2.5 Diffusion 支持**：PR [sgl-project/sglang#34471](https://github.com/sgl-project/sglang/pull/34471) 新增 LTX-2.5 模型支持，延续 Q2 Diffusion 路线图（[sgl-project/sglang#23035](https://github.com/sgl-project/sglang/issues/23035)）中 LTX-2 系列的工作。
- **DeepSeek V4 延迟 MoE finalize（MXFP4 / FP8 block-scale）**：PR [sgl-project/sglang#34456](https://github.com/sgl-project/sglang/pull/34456) 配合 FlashInfer TRT-LLM MoE kernel，将 top-k 加权合并延迟到 shared-expert 合并阶段，每层可减少一次 kernel launch。
- **AMD Diffusion AITer 后端支持 grouped-query K/V**：PR [sgl-project/sglang#34485](https://github.com/sgl-project/sglang/pull/34485) 修复 Cosmos3-Nano 在 ROCm 上的启动错误。
- **Wide EP 部署讨论（GLM5-2 / kimi-k3）**：Issue [sgl-project/sglang#34120](https://github.com/sgl-project/sglang/issues/34120) 报告 GB200（NVLink）与 B200（RDMA/EFA）上配置 Wide EP 无法启动，尚在讨论中，无 fix PR。
- **NPU Q2 路线图**：Issue [sgl-project/sglang#25598](https://github.com/sgl-project/sglang/issues/25598) 持续更新，目标覆盖 P/D 分离、并行策略、投机解码、分层缓存与负载均衡在 NPU 上的生产级兼容。

## 性能与优化

- **FLASHINFER cute-dsl MXFP8 GEMM 后端**：PR [sgl-project/sglang#34042](https://github.com/sgl-project/sglang/pull/34042) 新增 cute-dsl swap-AB/split-K kernel 作为 SM10x 上 dense mxfp8 gemm 的可选实现（默认待定），相对 persistent cutlass 有显著性能优势（WIP，对应 issue #32950）。
- **DeepSeek V4 Prefill Context Parallel 两批重叠（AMD）**：PR [sgl-project/sglang#33480](https://github.com/sgl-project/sglang/pull/33480) 在 AMD 上实现两 batch overlap，预计可提升 prefill 吞吐。
- **AITER unified attention 解码加速（FP8 Q）**：PR [sgl-project/sglang#31856](https://github.com/sgl-project/sglang/pull/31856) 通过将 BF16 Q 量化为 FP8 以启用 FP8-Q 矩阵乘路径，可在中等/高 decode 长度下显著降低 `kernel_unified_attention_3d` 开销。
- **AMD 移除 AITER 内存降级**：PR [sgl-project/sglang#25199](https://github.com/sgl-project/sglang/pull/25199) 移除 aiter + ctx>8K 时硬编码的 0.85 `mem_fraction_static` 降级系数，提升显存利用率。
- **SM120 性能优化计划**：Issue [sgl-project/sglang#19637](https://github.com/sgl-project/sglang/issues/19637) 持续更新，DeepSeek V4 & DeepGEMM MQA Indexer 已完成；DeepSeek V4 Flash 仍待推进。

## 稳定性与回归

**🔴 高严重度（无 fix）**

- **Scheduler 挂起（DSV4 / H20 / 分层缓存）**：Issue [sgl-project/sglang#34235](https://github.com/sgl-project/sglang/issues/34235) — 0.5.17 + hierarchical cache + chunked prefill 16K 在 DeepSeek-V4 FP8 稀疏 prefill 阶段触发 watchdog abort，另伴随 sampling device-side assert。
- **Qwen fused shared-expert PP 初始化崩溃**：PR [sgl-project/sglang#34447](https://github.com/sgl-project/sglang/pull/34447) — 修复非首 PP stage 因 `PPMissingLayer` 占位符导致 `model.layers[0].mlp` 读取失败的问题，已高优先级处理。

**🟠 中严重度（有 fix PR）**

- **ROCm QuickReduce fp16 饱和导致全归约数值损坏**：PR [sgl-project/sglang#34484](https://github.com/sgl-project/sglang/pull/34484) 修复 bf16 → fp16 转换导致的动态范围收窄（3.4e38 → 65504），将 106M 非有限值修复为 0，整体精度 +0.3%。fixes #34473。
- **Diffusion 注意力后端 fallback 回归**：Issue [sgl-project/sglang#34389](https://github.com/sgl-project/sglang/issues/34389) — 注意力后端 fallback 变更导致大多数 diffusion 模型报错，今天新报告，尚未有 fix PR。
- **Qwen3.5 DP-attention 空 batch 崩溃**：PR [sgl-project/sglang#34474](https://github.com/sgl-project/sglang/pull/34474) — 在 wide EP 分离式 decode + MTP 投机解码下，非空闲 `target_verify` rank 可能收到零请求，现有 `is_idle()` 守卫不足，已补保护。
- **FLUX.1-dev ROCm 预热崩溃**：PR [sgl-project/sglang#34481](https://github.com/sgl-project/sglang/pull/34481) 在 ROCm 上禁用 PTX-inline-asm diffusion norm 融合，修复 `multimodal-gen-test-1-gpu-amd*` 失败。
- **DeepSeek V4 CP hook 顺序问题**：PR [sgl-project/sglang#32557](https://github.com/sgl-project/sglang/pull/32557) 新增回归测试（fix 已通过 #33532 合入），覆盖 `--enable-prefill-cp --cp-strategy interleave` 场景。
- **W4AFP8 + DeepEP 全 rank 崩溃**：Issue [sgl-project/sglang#33660](https://github.com/sgl-project/sglang/issues/33660) 已关闭，但未标注 fix PR——部署 W4AFP8 + DeepEP 组合时需验证当前版本行为。

**🟡 低严重度 / 已关闭回归**

- **多输出 diffusion rollout 坍缩**：Issue [sgl-project/sglang#34000](https://github.com/sgl-project/sglang/issues/34000) — 样本轨迹坍缩到 output 0、grouped forward 报 AttributeError，尚无 fix。
- **`tool_choice` 命名无效导致 HTTP 500**：PR [sgl-project/sglang#28862](https://github.com/sgl-project/sglang/pull/28862) 已在 `model_validator` 中校验并改为明确的 4xx 错误。
- 其余已自动关闭的历史回归（如 Gemma-4 FP8 SM121 共享内存溢出 #28019、DeepEP cooperative launch #23992、PD 分离 check_status 异常 #27643 等）均标记为 `inactive` 关闭，建议在最新版本上复测确认。

## 对应用开发者的意义

- **Agentic 工作负载的 KV Cache 可编程化（RFC 进行中）**：Issue [sgl-project/sglang#27574](https://github.com/sgl-project/sglang/issues/27574) 提出从引擎外部预测 KV block 价值，让 router 更智能地管理多引擎单元上的 KV 放置。对于构建多智能体编排层的团队，这是未来值得关注的路标。
- **OpenAI 兼容层容错性改进**：两个 PR 提升 API 兼容性——`parallel_tool_calls: null` 显式传入不再 422（[sgl-project/sglang#28800](https://github.com/sgl-project/sglang/pull/28800)）；对应不存在工具名的 `tool_choice` 将返回明确 4xx 而非晦涩的 HTTP 500（[sgl-project/sglang#28862](https://github.com/sgl-project/sglang/pull/28862)）。客户端可以放心传 `null`，同时建议在业务层尽早校验 tool 名。
- **sglext 输出扩展**：PR [sgl-project/sglang#31633](https://github.com/sgl-project/sglang/pull/31633) 为 sglext 增加 `output_ids` 字段，便于调用方直接获取原始 token ID——对需要精确控制生成结果（如缓存、日志审计）的应用有价值。
- **DSpark 投机解码路线图**：Issue [sgl-project/sglang#30344](https://github.com/sgl-project/sglang/issues/30344) 显示下一步是成本模型与在线自适应调度，当前动态调度能力已有 blog 发布；对延迟敏感型 Agent 应用可提前关注该能力。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 动态日报 — 2026-08-12

## 今日速览

过去 24 小时连续发布 b10356–b10362 共 7 个版本，核心围绕后端正确性修复与 CI 升级：EXAONE 4.5 滑动窗口注意力（SWA）修复、OpenCL Flash Attention prefill 优化、HIP 采样测试禁用、CI 正式切换到 ROCm 7.14。社区侧，新增 A.X K2 模型架构支持（[PR #26757](https://github.com/ggml-org/llama.cpp/pull/26757)），并确认修复了 RPC 后端 `SET_ROWS` 越界写漏洞（[#26912](https://github.com/ggml-org/llama.cpp/issues/26912) / [PR #26933](https://github.com/ggml-org/llama.cpp/pull/26933)）。DeepSeek V4 + ROCm/Vulkan 相关的多个正确性 bug 仍在追踪中。

---

## 版本发布与破坏性变更

| 版本 | 关键内容 |
|---|---|
| [b10362](https://github.com/ggml-org/llama.cpp/releases/tag/b10362) | 测试：HIP 后端禁用 `multi_output_sampling_chain`，因 top_k 的 backend probs 依赖 CUB，在 HIP 下不可用（[#26878](https://github.com/ggml-org/llama.cpp/pull/26878)） |
| [b10361](https://github.com/ggml-org/llama.cpp/releases/tag/b10361) | 模型：修复 EXAONE 4.5 SWA 未启用；原因是读取 `LLM_KV_NEXTN_PREDICT_LAYERS` 前就检查了 `n_layer() == 64`（[#26848](https://github.com/ggml-org/llama.cpp/pull/26848)） |
| [b10360](https://github.com/ggml-org/llama.cpp/releases/tag/b10360) | common/peg：抑制不完整转义序列警告（[#26780](https://github.com/ggml-org/llama.cpp/pull/26780)） |
| [b10359](https://github.com/ggml-org/llama.cpp/releases/tag/b10359) | WebGPU：修复 CI 错误；新增 i32 支持到 `cpy`，启用 all ops 测试（[#26566](https://github.com/ggml-org/llama.cpp/pull/26566)） |
| [b10358](https://github.com/ggml-org/llama.cpp/releases/tag/b10358) | 处理 [PR #25532](https://github.com/ggml-org/llama.cpp/pull/25532) 评审意见（推测解码参数相关） |
| [b10357](https://github.com/ggml-org/llama.cpp/releases/tag/b10357) | OpenCL：FA prefill 内核在本地内存中做 K tile 转置，优化全局访存（[#26428](https://github.com/ggml-org/llama.cpp/pull/26428)） |
| [b10356](https://github.com/ggml-org/llama.cpp/releases/tag/b10356) | CI/发布：构建和发布目标升级至 ROCm 7.14（TheRock 构建系统，[#25775](https://github.com/ggml-org/llama.cpp/pull/25775)） |

**破坏性变更**：本次发布中无已合并的破坏性变更。请留意开放中的 [PR #26934](https://github.com/ggml-org/llama.cpp/pull/26934)：计划将 `--mmap/--no-mmap`、`--mlock`、`--direct-io` 统一迁移为 `--load-mode`，涉及所有脚本、示例与文档。若你维护启动脚本，建议提前适配该新参数。

---

## 新模型与硬件支持

- **新模型架构：A.X K2**（[PR #26757](https://github.com/ggml-org/llama.cpp/pull/26757)）— 支持 Sparse Gated Attention 和 Gated Norm，GGUF 兼容文件已可用。
- **AMD 大型 iGPU 显存检测修复**（[PR #26932](https://github.com/ggml-org/llama.cpp/pull/26932)）— 修复 Strix Halo（gfx1151）等 APU 上 `hipMemGetInfo()` 返回系统内存而非显存的问题，改用 sysfs VRAM 获取结果。直接影响 ROCm 用户的显存分配计算。
- **ROCm 7.14 官方支持落地**（[#25775](https://github.com/ggml-org/llama.cpp/pull/25775)）— CI 与发布流程切换到 7.14（TheRock 构建系统）。
- **EXAONE 4.5 SWA 修复**（[b10361](https://github.com/ggml-org/llama.cpp/releases/tag/b10361)）— 属于已有模型的运行时修复，SWA 从“关闭”变为“正确开启”。

---

## 性能与优化

- **OpenCL Flash Attention prefill**（[b10357](https://github.com/ggml-org/llama.cpp/releases/tag/b10357)）：K tile 转置移入本地内存，减少全局内存往返。无具体数字。
- **Glimmer drafter 优化**（[PR #26842](https://github.com/ggml-org/llama.cpp/pull/26842)）：针对 Glimmer 推理草稿模型的优化，尚未合并。
- **Expert caching（MoE 专家缓存）**（[PR #26563](https://github.com/ggml-org/llama.cpp/pull/26563) / [PR #26824](https://github.com/ggml-org/llama.cpp/pull/26824)）：基于热力图的专家缓存、mmap pinning 与 CPU/GPU 动态迁移，两个 PR 均已关闭，作者表示将重新组织后重开，暂不可用。
- **server metrics 重构**（[PR #26920](https://github.com/ggml-org/llama.cpp/pull/26920)）：重构派生指标（如 t/s）并在 `llama_decode` 完成后更新，属于正确性/可观测性改进，而非吞吐优化。

---

## 稳定性与回归

按严重程度排序：

1. **内存安全（已有 fix PR）**：RPC 后端 `SET_ROWS` 可在 release 构建中越界写输出 tensor（[#26912](https://github.com/ggml-org/llama.cpp/issues/26912)）。修复 PR [#26933](https://github.com/ggml-org/llama.cpp/pull/26933) 在执行前增加维度校验。**建议 RPC 服务尽快升级，避免暴露到不可信网络。**
2. **崩溃（无 fix）**：
   - gemma-4-E4B 在 V100 上触发 `GGML_ASSERT(n_inputs < GGML_SCHED_MAX_SPLIT_INPUTS)`（[#24132](https://github.com/ggml-org/llama.cpp/issues/24132)）。
   - Vulkan + Intel Arc B70 运行 Qwen3.6 MoE 模型崩溃（[#23769](https://github.com/ggml-org/llama.cpp/issues/23769)）。
   - ROCm gfx1151 + RPC worker 在 DeepSeek V4 prefill 超过 4096 token 时于 `GGML_OP_TOP_K` 崩溃（[#26746](https://github.com/ggml-org/llama.cpp/issues/26746)）。
3. **正确性（无 fix）**：
   - DeepSeek V4 Flash IQ3_XXS 在 Strix Halo + ROCm 上输出乱码（[#25436](https://github.com/ggml-org/llama.cpp/issues/25436)）——当前评论数最高的开放 issue。
   - SYCL 后端第二个 prompt 产生乱码（[#26845](https://github.com/ggml-org/llama.cpp/issues/26845)）。
   - CUDA Volta 上 Qwen3-Embedding-8B 返回全 NaN 并永久卡死 server；CPU 正常（[#26044](https://github.com/ggml-org/llama.cpp/issues/26044)）。
   - CUDA + DSpark 推测解码在约 2500 token 后触发 `cublasSgemm: unsupported value`（[#26554](https://github.com/ggml-org/llama.cpp/issues/26554)）。
4. **回归（已关闭）**：`--split-mode tensor` 自 b10054 起损坏（[#25829](https://github.com/ggml-org/llama.cpp/issues/25829)）已关闭，但 tensor-split 相关稳定性仍偏弱；Glimmer 在 4×Tesla T10 tensor split 下仍断言失败（[#26902](https://github.com/ggml-org/llama.cpp/issues/26902)）。
5. **环境/CI**：
   - ROCm 7.14 下报 `error while loading shared libraries: libhipblas.so.3`（[#25807](https://github.com/ggml-org/llama.cpp/issues/25807)）仍开放。
   - Release job 耗时超过 10 小时（[#26896](https://github.com/ggml-org/llama.cpp/issues/26896)），已由 [PR #26927](https://github.com/ggml-org/llama.cpp/pull/26927)（修复失败 runs）和 [PR #26926](https://github.com/ggml-org/llama.cpp/pull/26926)（HIP 编译器启用 ccache）响应。
   - 新建 issue：ROCm 7.14 下 VRAM 不分配（gfx1201，[#26208](https://github.com/ggml-org/llama.cpp/issues/26208)）。

---

## 对应用开发者的意义

- **RPC 多机推理**：`SET_ROWS` 越界写是安全级别问题，尽快包含 [PR #26933](https://github.com/ggml-org/llama.cpp/pull/26933) 的版本；修复前不要将 RPC 端口暴露到不可信网络。
- **AMD 平台（Strix Halo / Ryzen AI Max）**：关注 [PR #26932](https://github.com/ggml-org/llama.cpp/pull/26932) 的显存检测修复，否则 `--n-gpu-layers` 等显存相关参数可能被错误计算。
- **启动脚本迁移**：PR #26934 将废弃 `--mmap/--no-mmap/--mlock/--direct-io`，建议提前切换到 `--load-mode`。
- **推测解码（DSpark）与 MoE 生产部署**：DeepSeek V4 + CUDA 在长序列下仍有 `cublasSgemm` 崩溃（[#26554](https://github.com/ggml-org/llama.cpp/issues/26554)），Vulkan + MoE 也有崩溃报告（[#23769](https://github.com/ggml-org/llama.cpp/issues/23769)），建议保留上一个稳定版本。
- **OpenAI 兼容服务**：PR #26013 正在改进 OAI Responses API 的 JSON Schema 约束支持，并增强 Cohere2 MoE 模板解析；如果你依赖在线推理、结构化输出，值得跟踪。
- **Web UI 多模态**：PR #25877 为视觉模型新增 `read_media` 工具，可直接分析服务端图片，适合构建基于 llama-server 的多模态 Agent。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

## Ollama 动态日报 — 2026-08-12

### 今日速览
- 发布 **v0.32.9**，核心亮点是支持 NVIDIA Nemotron 3.5 Lightning（30B MoE / 3B active）的开箱即用推理。
- 社区报告多起回归与稳定性问题：CUDA 非法内存访问、更新后模型消失、性能回退等，维护者已提交若干修复 PR。
- API 行为变更在途：PR #17679 计划停止对未设置 `repeat_penalty` 的模型默认施加 1.1，开发者需关注生成参数语义变化。

### 版本发布与破坏性变更
- **[v0.32.9 Release](https://github.com/ollama/ollama/releases/tag/v0.32.9)**：新增 NVIDIA Nemotron 3.5 Lightning 支持，该模型为 30B MoE、3B active 参数，面向 always-on agent 场景设计。
- **[PR #17679 - api: stop applying repeat_penalty 1.1 to models that don't set one](https://github.com/ollama/ollama/pull/17679)**（open）：默认行为将改变——不再对所有未显式设置 `repeat_penalty` 的模型强制使用 1.1。若你的应用依赖该默认值，合并后可能影响生成文本的重复抑制效果。
- **[Issue #17668 - ollama/ollama:0.32.8 image missing from Docker Registry](https://github.com/ollama/ollama/issues/17668)**（closed）：0.32.8 的 Docker 镜像曾短暂缺失，已解决；若部署脚本固定拉取该 Tag，需更新至最新版。

### 新模型与硬件支持
- **Nemotron 3.5 Lightning**：随 v0.32.9 集成，支持 MoE 架构（30B 总参，3B active）。[Release 链接](https://github.com/ollama/ollama/releases/tag/v0.32.9)
- **[PR #17643 - mlx: implement Ling-3.0-Tiny models](https://github.com/ollama/ollama/pull/17643)**（open）：为 MLX 后端添加 Bailing MoE V3 架构支持（Ling-3.0-tiny 及其 FP8/INT4 量化版本）。
- **[PR #17672 - nemotron_h: support the Nemotron 3.5 prompt layout](https://github.com/ollama/ollama/pull/17672)**（closed）：完善 Nemotron 3.5 的 prompt 解析/渲染，并映射 medium reasoning effort。
- **[PR #17685 - fix: OLLAMA_GPU_MEMORY env var + SmallCarveOutIGPU for AMD Strix Halo](https://github.com/ollama/ollama/pull/17685)**（open）：修复 AMD Strix Halo（gfx1151）等大显存核显的 VRAM 探测错误（`hipMemGetInfo()` 误返回系统内存），确保模型能正确利用 GPU 容量。

### 性能与优化
- **[PR #16998 - server: add metrics endpoint](https://github.com/ollama/ollama/pull/16998)**（open）：新增 Prometheus 兼容的 `GET /metrics` 端点（`OLLAMA_METRICS=1`），暴露队列深度、已加载模型数、请求计数及 token 级指标，便于吞吐/延迟监控。
- **[PR #17480 - bench: use HumanEval patch prompts](https://github.com/ollama/ollama/pull/17480)**（open）：将基准测试提示从合成词表替换为 HumanEval Python 补丁，使投机解码基准更贴近真实代码续写场景。
- **[Issue #17666 - [mlx] mlxrunner: requests are serialized; support batched/concurrent decode](https://github.com/ollama/ollama/issues/17666)**（open）：MLX runner 当前单 goroutine 串行处理请求，并发调用会排队；该 issue 已提出批处理/并发 decode 方向，尚未实现。
- **[PR #14969 - create: add server-side MLX imports and drop GGUF conversion](https://github.com/ollama/ollama/pull/14969)**（open）：将 safetensors 直接导入 MLX 创作管线，减少 GGUF 转换开销，提升模型导入效率和磁盘占用。

### 稳定性与回归
按严重程度排序（🔴 严重 / 🟠 中等 / 🟡 轻微）：

- 🔴 **[#17596 - CUDA illegal memory access in ggml_cuda_flash_attn_ext_mma_f16_case on DGX Spark (GB10)](https://github.com/ollama/ollama/issues/17596)**：大 prefill 请求对 head-size=256 的模型（如 `qwen3-coder-next:q4_K_M`）确定性崩溃，无修复 PR。
- 🔴 **[#17661 - Models deleted after updating to 0.32.7 on Jetson AGX Orin](https://github.com/ollama/ollama/issues/17661)**：升级后多个模型文件消失（仅幸存 1 个），存在数据丢失风险，需尽快调查。
- 🟠 **[#17583 - Performance regression for Qwen3.6-35B-A3B on Apple M2 after upgrading](https://github.com/ollama/ollama/issues/17583)**：Ollama 0.32.5 后同模型/同硬件速度从 72 T/s 显著下降，影响存量部署。
- 🟠 **[#17484 - Error: context deadline exceeded](https://github.com/ollama/ollama/issues/17484)**：Hugging Face 直接 URL 拉取模型时偶发悬挂超时；已有 **[PR #17551 - server: retry stalled direct URL requests](https://github.com/ollama/ollama/pull/17551)** 修复，等待合入。
- 🟠 **[#17614 - Lower quantization formats cause garbage outputs](https://github.com/ollama/ollama/issues/17614)**：切换至 q4_0 KV 量化后模型输出乱码（“AI AI AI…”），建议谨慎使用低精度量化格式。
- 🟠 **[#17684 - `muse-glimmer:30b-mlx` leaks control tokens and ignores `response_format`](https://github.com/ollama/ollama/issues/17684)**：MLX 版本输出前导 ` to=user<|message|>`，且不遵循 JSON schema，GGUF 版本正常。
- 🟡 **[#17669 - Qwen3.6 hybrid model falls back to CPU on CUDA with llama.cpp b10353](https://github.com/ollama/ollama/issues/17669)**：llama.cpp 版本升级后无法使用 GPU，需回退至 b10242。
- 🟡 **[#17667 - Gemma 4 Cloud returns HTTP 500 with vision + tool calling](https://github.com/ollama/ollama/issues/17667)**：云模型在处理视觉+工具调用组合请求时返回 500。
- 🟡 **[#17652 - Can't load valid user skills in `~/.ollama/skills/`](https://github.com/ollama/ollama/issues/17652)**（closed）：技能加载异常，已关闭但未见修复说明。
- 🟡 **[#17682 - Security: session not revoked after password/email change](https://github.com/ollama/ollama/issues/17682)**：Ollama Cloud 账号在密码/邮箱变更后旧会话仍有效，存在安全风险。

### 对应用开发者的意义
- **OpenAI 兼容层扩展**：**[PR #17686 - openai: support web search in Responses API](https://github.com/ollama/ollama/pull/17686)** 为 Codex 等工具增加服务端 web search 能力，将可从调用端无缝使用，构建检索型 Agent 的应用可提前适配。
- **自定义工具支持**：[#17673 - custom tools (OpenAI Responses API compatibility)](https://github.com/ollama/ollama/issues/17673) 提出让模型返回任意字符串供自定义工具解析，丰富 tool-calling 场景，值得关注。
- **默认生成参数变化**：PR #17679 若合并，未显式设置 `repeat_penalty` 的模型不再默认 1.1，可能导致输出重复性增加。建议在请求中显式声明 `repeat_penalty` 以保持确定性。
- **并发限制**：MLX 后端目前串行处理请求（#17666），若构建高并发应用，需自建请求排队或考虑其他后端。
- **可观测性增强**：metrics endpoint（#16998）落地后可通过 Prometheus 采集系统负载与请求延迟，有助于性能调优。
- **部署注意**：Linux 下 `ollama launch claude-desktop` 当前仅支持 macOS/Windows（#17653），社区已提交 PR [#17680](https://github.com/ollama/ollama/pull/17680) 改善错误提示；使用 Docker 部署请确保拉取最新镜像（避开 0.32.8 的临时缺失问题，见 #17668）。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 动态日报 — 2026-08-12

## 今日速览

LiteLLM 社区过去 24 小时最受关注的是 Rust 迁移主票（[#31263](https://github.com/BerriAI/litellm/issues/31263)），团队正以 sub-1ms 网关开销为目标推进新一代 AI Gateway 重写。功能侧，Auto-Router 的 Shadow Eval（影子评估）机制进入实施阶段，允许生产流量切换前离线验证路由质量。版本侧，过去 24 小时连续发布 v1.90.7 → v1.96.2 七个补丁版本，核心动作为统一 Docker 镜像 cosign 签名验证说明，建议部署侧同步校验供应链安全。

---

## 版本发布与破坏性变更

- **v1.96.2（最新稳定版）**：发布动态集中在 Docker 镜像签名验证。官方声明所有 LiteLLM 镜像已使用 cosign 签名，且自 commit `0112e53` 起所有 release 共用同一签名密钥。建议生产环境在拉取镜像后执行 `cosign verify` 以确认镜像完整性与来源可信度；v1.95.1 / v1.94.3 / v1.93.2 / v1.92.2 / v1.91.5 / v1.90.7 在同一时间窗口内同步更新。
  - 发布页：https://github.com/BerriAI/litellm/releases
- **兼容性观察**：v1.96.1 被报告未发布 Python 3.13 可用的 wheel/sdist（[#36526](https://github.com/BerriAI/litellm/issues/36526)），`pip install "litellm>=1.41.15"` 在 3.13 环境会异常解析。若您的部署使用 Python 3.13，请暂时锁定 prior 版本或等待修复发布。

---

## 新模型与硬件支持

- **Meta 模型后端已支持但 UI 未暴露**：`meta` provider 与 `meta/muse-spark-1.1` 模型在 API 层已可用，但 Dashboard「Add Model」下拉菜单中缺失 Meta 选项，影响 UI 配置路径（[#36164](https://github.com/BerriAI/litellm/issues/36164)）。
- **新增模型映射问题**（影响现有模型可用性，见下节）：
  - Anthropic Claude Opus 4.7 系列实际拒绝 `temperature` 参数，但 SDK 仍将其标记为 supported（[#26444](https://github.com/BerriAI/litellm/issues/26444)）
  - Azure GPT-5.6 Terra/Luna 的成本表错误沿用了 OpenAI 直连价格，而非 Azure 官方 meter（[#36192](https://github.com/BerriAI/litellm/issues/36192)）
  - OCI OpenAI GPT-5 模型将 `max_completion_tokens` 错误映射为 `maxTokens`，导致请求失败（[#27429](https://github.com/BerriAI/litellm/issues/27429)）

---

## 性能与优化

- **Rust 迁移（主线推进中）**：官方主票持续活跃，目标为 sub-1ms 开销的最轻量 AI Gateway，已开放 Beta 测试者申请。该重写影响网关核心链路性能，值得关注后续 benchmark 数据（[#31263](https://github.com/BerriAI/litellm/issues/31263)）。
- **后台任务错峰调度**：[#36589](https://github.com/BerriAI/litellm/pull/36589) 修复 APScheduler 将所有 interval 任务锚定在同一时刻触发的问题，并将调度抖动扩展到多 Pod 部署场景，避免周期性资源争抢和下游尖峰请求。
- **流式响应成本注入**：v1.96 批量更新中包含对 OpenAI passthrough 流式响应的 SSE 分片/CRLF 重组修复，并在流式过程中注入 usage cost，缓解流式请求计费延迟或丢失的问题（合并自 [#36560](https://github.com/BerriAI/litellm/pull/36560)）。
- **CI 基础设施优化**：`perf(lint)` PR 重构了 lint fan-out 调度，按长尾任务（long pole）编排执行顺序，减少资源饥饿与重复路径解析（[#36276](https://github.com/BerriAI/litellm/pull/36276)）。

---

## 稳定性与回归

以下按严重程度排序，标注是否已有修复 PR：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | **Python 3.13 无可用 wheel/sdist**：v1.96.1 仅发布 cp310 wheel，3.13 环境安装失败（[#36526](https://github.com/BerriAI/litellm/issues/36526)） | 待修复 |
| 🔴 高 | **流式响应崩溃**：`_should_start_new_content_block` 在收到空 `choices` chunk 时索引越界（[#36553](https://github.com/BerriAI/litellm/issues/36553)）；另有 provider 在 delta 中返回 `reasoning` 字段时触发 `async for` TypeError（[#27670](https://github.com/BerriAI/litellm/issues/27670)） | 待修复；SSE 重组相关修复已合入 #36560 |
| 🟠 中 | **故障转移失效**：`cooldown_handlers.py` 硬编码 `APIConnectionError`，Ollama 多部署场景下连接错误无法触发 failover（[#27362](https://github.com/BerriAI/litellm/issues/27362)）；embedding 的 `aembedding` 缺少 `num_retries`，导致重试和 failover 完全失效（[#27363](https://github.com/BerriAI/litellm/issues/27363)） | 待修复 |
| 🟠 中 | **参数翻译错误**：Anthropic Claude Opus 4.7 的 `temperature` 被错误透传（[#26444](https://github.com/BerriAI/litellm/issues/26444)）；Anthropic transformer 强制将 effort 设为 `xhigh`，导致 Claude Code 400 错误（[#27168](https://github.com/BerriAI/litellm/issues/27168)） | 待修复 |
| 🟠 中 | **成本计费错误**：Azure GPT-5.6 Terra/Luna 沿用 OpenAI 削价后的错误价格（[#36192](https://github.com/BerriAI/litellm/issues/36192)）；xAI web search 计费读取废弃字段导致 $0 计费（[#30817](https://github.com/BerriAI/litellm/pull/30817) 已提交修复）；deployment 级自定义单价未合并至 `model_info`（[#36584](https://github.com/BerriAI/litellm/pull/36584) 已提交修复） | 部分已修 |
| 🟡 低 | **错误提示误导**：限流（429）被上报为 “No deployments available for selected model” 且打印堆栈（[#20867](https://github.com/BerriAI/litellm/issues/20867)） | 待修复 |
| 🟡 低 | **MCP 工具参数未脱敏**：工具参数与结果随 metadata 直达日志后端，绕过 message/response 脱敏规则（[#36474](https://github.com/BerriAI/litellm/pull/36474) 已提交修复） | PR 已开 |
| 🟡 低 | **Guardrails 评估日志缺失**：`litellm_content_filter` 的评估结果未出现在请求日志和 Guardrails Monitor 中（[#36566](https://github.com/BerriAI/litellm/issues/36566)） | 待修复 |
| ✅ 已修 | **Bedrock Guardrails 工具轮次 400**：无文本内容的 tool-only turn 不再调用 ApplyGuardrail（[#36441](https://github.com/BerriAI/litellm/pull/36441)，已关闭） | 已合并 |
| ✅ 已修 | **Headroom 压缩标记未解析**：`<<ccr:...>>` 标记现在会解析为可检索内容，并覆盖 12-hex hash 场景（[#36581](https://github.com/BerriAI/litellm/pull/36581)，已提交修复） | PR 已开 |

---

## 对应用开发者的意义

1. **流式应用注意**：若您的应用使用 `/v1/messages` 或 `stream=True` 且后端可能发送 usage-only chunk 或 `reasoning` 字段，当前版本存在崩溃风险。在修复合入前，建议对空 chunk 做防御性过滤，或临时固定到已知稳定版本。
2. **Python 3.13 环境**：升级到 v1.96.x 前确认 wheel 可用性，否则建议锁定 `litellm<1.96.1`。
3. **自动路由器上线新路径**：Shadow Eval（[#36587](https://github.com/BerriAI/litellm/pull/36587) / [#36571](https://github.com/BerriAI/litellm/pull/36571) / [#36588](https://github.com/BerriAI/litellm/pull/36588)）允许在真实流量切换前用盲测 pairwise judge 评估路由质量，并直接在 Auto-Router 页面查看 win rate——适合在接入新模型组前做灰度验证。
4. **计费准确性**：xAI web search 与 Azure GPT-5.6 系列的成本计算存在已知偏差，若您使用这两个 provider 并依赖 usage/cost 做内部核算，需要留意近期修复进度。
5. **供应链安全**：所有新镜像均带 cosign 签名，建议 CI/CD 流水线中增加 `cosign verify` 步骤，防止镜像被篡改或替换。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 动态日报 2026-08-12

## 1. 今日速览
- **Unsloth Desktop 正式发布**：v0.1.701-beta / v0.1.70-beta 带来首个支持本地运行与训练模型的跨平台桌面应用，统一研究、导出、部署流程，覆盖 Windows、macOS、Linux。
- **发布日伴随大量兼容性问题**：48 条 Issue 更新、142 条 PR 更新；Linux AppImage 缺库（#8463）、Windows AMD 安装失败（#8508）、ROCm CPU-only 误报（#8473）等问题集中暴露。
- **Studio 后端优化密集推进**：流式输出工具扫描线性化（#8428、#8494）、后端启动加速（#8498）等一批性能 PR 落地，显著改善长文本生成链路。

## 2. 版本发布与破坏性变更
- **v0.1.701-beta**（最新）：正式引入 [Unsloth Desktop](https://unsloth.ai/)。这是首个可本地运行和训练 AI 模型的桌面应用，支持研究、导出、部署一体化，覆盖 Windows/macOS/Linux。
- **v0.1.70-beta**：与 v0.1.701-beta 描述一致，疑为同次发布的不同标签。
- **v0.1.62-beta**：包含大量 bug 修复。
- **破坏性变更提示**：
  - 桌面版引入平台原生依赖，Linux AppImage 已报告缺少 WebKit/GTK 库启动失败（[#8463](https://github.com/unslothai/unsloth/issues/8463)）。
  - Windows AMD 安装器可能替换非 ROCm PyTorch，导致 torch 导入失败（[#7275](https://github.com/unslothai/unsloth/issues/7275)）。
  - `unsloth.__version__` 会错误沿用 `unsloth_zoo.__version__`，造成版本误报（[#8171](https://github.com/unslothai/unsloth/issues/8171)）。

## 3. 新模型与硬件支持
- **模型适配动态**（来自今日 issue/PR 观测）：
  - MiniMax-M3 GGUF：Apple Silicon 上 `UD-Q5_K_XL` 变体加载失败，缺少 `indexer.head_count` 元数据（[#8360](https://github.com/unslothai/unsloth/issues/8360)）。
  - MiniMax-H3：RTX 5090 + 96GB RAM 环境下加载即报错，`stable-diffusion.cpp` 版本过旧（[#8507](https://github.com/unslothai/unsloth/issues/8507)）。
  - Muse-Glimmer-30B GGUF：Studio 可下载但捆绑 llama.cpp 无法识别 `muse-glimmer` 架构（[#8345](https://github.com/unslothai/unsloth/issues/8345)）。
  - Qwen3.5 4B Vision notebook 在 Colab 上触发 AcceleratorError（[#7124](https://github.com/unslothai/unsloth/issues/7124)）。
- **硬件/后端支持**：
  - 新增 CUDA 覆盖至 Turing（T4/sm_75）：PR [#8489](https://github.com/unslothai/unsloth/pull/8489) 与 [#8440](https://github.com/unslothai/unsloth/pull/8440) 将真实 Kaggle T4 纳入 CI。
  - AMD Strix Halo（gfx1151）改进：PR [#8480](https://github.com/unslothai/unsloth/pull/8480) 修复 `HSA_OVERRIDE_GFX_VERSION=11.0.0` 导致 gfx1100 误报的问题。
  - 支持 torch 2.11.0+cu130，但当前 pip 下载失败（[#8456](https://github.com/unslothai/unsloth/issues/8456)）。

## 4. 性能与优化
- **流式输出扫描线性化**：[#8428](https://github.com/unslothai/unsloth/pull/8428) 停止每次 token 对全量响应做工具标记扫描；[#8494](https://github.com/unslothai/unsloth/pull/8494) 将同系列 safetensors/healer 路径的二次复杂度扫描改为线性时间。此优化对长对话、工具调用密集型 Agent 应用延迟影响显著。
- **后端启动加速**：[#8498](https://github.com/unslothai/unsloth/pull/8498) 剪除了启动路径上 4 个不必要的工作项，并避免阻塞事件循环。
- **数据层与路由修复**：[#8499](https://github.com/unslothai/unsloth/pull/8499) 重写 5 个超线性热点路径，并消除对整个 vocabulary 的无谓解码。
- **投机解码显存策略**：[#8435](https://github.com/unslothai/unsloth/pull/8435) Auto 模式下若模型仅能勉强放入 VRAM，优先丢弃 speculative drafter 以保留 context 长度，防止 OOM。
- **编译缓存保护**：[#8457](https://github.com/unslothai/unsloth/pull/8457) 修复同安装中两个 backend 并生时，第二个清除第一个的编译缓存导致崩溃的问题。

## 5. 稳定性与回归
**崩溃 / 无法启动**
- Linux AppImage 缺少系统库，启动失败（[#8463](https://github.com/unslothai/unsloth/issues/8463)，8 评论）；社区 PR [#8343](https://github.com/unslothai/unsloth/pull/8343) 提出携带 WebKit/GTK 的便携式 AppImage 方案。
- Windows AMD 安装失败（[#8508](https://github.com/unslothai/unsloth/issues/8508)）、AMD Ryzen AI 安装 bug（[#8335](https://github.com/unslothai/unsloth/issues/8335)）。
- Windows 登录时自动启动 Unsloth 失败（[#8510](https://github.com/unslothai/unsloth/issues/8510)，今日新建）。
- Studio 安装器报告 AMD GPU，但后端实际以 CPU 模式运行，且监控面板无 GPU 行（[#8473](https://github.com/unslothai/unsloth/issues/8473)）。

**模型加载 / 兼容性**
- Muse-Glimmer-30B GGUF 无法被捆绑 llama.cpp 加载（[#8345](https://github.com/unslothai/unsloth/issues/8345)）。
- MiniMax-M3 GGUF 缺少元数据（[#8360](https://github.com/unslothai/unsloth/issues/8360)）；MiniMax-H3 加载失败（[#8507](https://github.com/unslothai/unsloth/issues/8507)）。
- NVFP4 量化模型在 RTX 5060 Ti 16GB 上无法加载（[#8246](https://github.com/unslothai/unsloth/issues/8246)）。
- ROCm whisper 更新找不到 hipblaslt kernel catalog（[#8364](https://github.com/unslothai/unsloth/issues/8364)）。

**正确性 / 数据**
- **导出的 tokenizer_config.json 包含非法 `"tokenizer_class": "TokenizersBackend"`**，导致 AutoTokenizer 无法加载（[#8444](https://github.com/unslothai/unsloth/issues/8444)）——这是今日最严重的导出链路正确性 bug。
- `lr_warmup_steps` 在默认 constant scheduler 下被静默忽略，PR [#8464](https://github.com/unslothai/unsloth/pull/8464) 修复。
- 版本号误报导致诊断混乱（[#8171](https://github.com/unslothai/unsloth/issues/8171)）。

**回归 / API**
- Windows 本地 GGUF 绝对路径在盘符处被截断，chat 返回 503 `model_switch_failed`（[#8368](https://github.com/unslothai/unsloth/issues/8368)、[#8375](https://github.com/unslothai/unsloth/issues/8375)）。
- API 查询不存在的模型时无任何提示或错误（[#8376](https://github.com/unslothai/unsloth/issues/8376)）。
- 刷新回复 5-6 次后聊天历史被清空（[#7732](https://github.com/unslothai/unsloth/issues/7732)）。

**CI 基础设施**
- main 分支 Backend CI 全天红灯，阻塞所有 PR（[#8506](https://github.com/unslothai/unsloth/pull/8506)）：torchao 缺失（[#8486](https://github.com/unslothai/unsloth/pull/8486) 修复 21/23 个测试）与 allowlist 泄漏。另有修复：macOS 测试路径（[#8485](https://github.com/unslothai/unsloth/pull/8485)），wheel 排除测试目录（[#8501](https://github.com/unslothai/unsloth/pull/8501)）。

## 6. 对应用开发者的意义
- **桌面版选型需谨慎**：Unsloth Desktop 作为「研究 → 导出 → 部署」一体化工具值得关注，但当前 Linux/AMD 组合风险较高（[#8463](https://github.com/unslothai/unsloth/issues/8463)、[#8508](https://github.com/unslothai/unsloth/issues/8508)），在生产环境建议等待 beta 期修复。
- **导出模型兼容性预警**：修复 [#8444](https://github.com/unslothai/unsloth/issues/8444) 前导出的 checkpoint 会因 tokenizer class 非法而无法在标准 transformers 中加载。若你的应用分发模型或读取 Unsloth 导出的 checkpoint，请确认上游修复后再上线。
- **版本诊断陷阱**：`unsloth.__version__` 指向 `unsloth_zoo` 的版本（[#8171](https://github.com/unslothai/unsloth/issues/8171)），依赖版本号的告警或自动升级逻辑需做兼容处理。
- **AMD/ROCm 用户暂缓升级**：安装器覆盖（[#7275](https://github.com/unslothai/unsloth/issues/7275)）、CPU-only 误报（[#8473](https://github.com/unslothai/unsloth/issues/8473)）、VRAM 监控失效（[#7452](https://github.com/unslothai/unsloth/issues/7452)）均尚未在正式版修复。建议锁定当前可用版本。
- **Studio 性能优化红利**：若你将 Studio 作为本地推理后端，流式输出的线性扫描改造（[#8428](https://github.com/unslothai/unsloth/pull/8428)、[#8494](https://github.com/unslothai/unsloth/pull/8494)）会直接降低长上下文工具调用的响应延迟。
- **平台集成扩展中**：PR [#8511](https://github.com/unslothai/unsloth/pull/8511) 为 Studio 增加 ChatGPT 订阅（Codex）provider，PR [#8390](https://github.com/unslothai/unsloth/pull/8390) 增加图像/视频生成预设——Studio 正从模型加载器演化为多模态 Agent 工作台，相关 API 生态值得跟进。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*