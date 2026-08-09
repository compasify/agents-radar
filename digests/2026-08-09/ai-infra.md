# AI 基础设施日报 2026-08-09

> 生成时间: 2026-08-09 00:51 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施横向对比分析报告（2026-08-09）

## 1. 生态全景

今日各项目整体呈现"新模型架构（DeepSeek-V4-Flash、DSpark 投机解码）铺开后的正确性消化期"：vLLM、SGLang、llama.cpp 三家在 DeepSeek-V4 系列上均有未闭合的正确性/兼容性 Bug（SM8x 不支持、DSpark 输出损坏、KV cache 状态错乱），说明头部新架构从"能跑"到"可依赖"仍有一段集中排障窗口。性能优化进入深水区，火力从粗粒度批处理转向 KV cache 容量、算子融合、跨设备通信与投机解码路径的精细化打磨。值得注意的新信号是"内存层级"成为共识方向——llama.cpp、Ollama、SGLang 同时出现将 expert 权重下沉 host 内存/按需预取的方案，小显存跑大 MoE 的边界在被推高。Agent 工作负载正在成为正确性验收的第一场景，工具隔离、thinking 预算、流式用量计量等基础设施诉求密集涌现。

## 2. 各项目活跃度对比

> 注：Issues/PR 数为日报中提及的公开条目数，非 GitHub 全量统计；Release 为过去 24 小时发布。

| 项目 | 定位 | Issues | PRs | Release | 高优先级事件 |
|---|---|---|---|---|---|
| **vLLM** | 生产级推理引擎 | ~13 | ~12 | 无 | DeepSeek-V4-Flash SM8x 仍不可用；MRV2 下 DSD 静默失效 |
| **SGLang** | 推理引擎（结构化/投机） | ~10 | ~15 | 无 | DSpark depth 5 在 SM120 损坏输出；shared-expert 加载回归修复中 |
| **llama.cpp** | 本地/边缘运行时 | ~13 | ~10 | **5 个**（b10327–b10331） | 工具隔离正式落地；DSV4 平行解码+投机乱码，KV cache 状态被清空 |
| **Ollama** | 本地模型运行器 | ~13 | ~15 | 无 | deepseek-v4-flash:cloud 泄漏 `</think>` 致 agent 死循环（31M tokens） |
| **LiteLLM** | LLM 网关 | ~17 | ~7 | 2 个（v1.97.0-rc.1 / v1.94.2） | 文件列表数据泄露已修复；流式 usage 低估、Responses API 空输出无修复 |
| **Unsloth** | 微调框架 + Studio | ~10 | ~16 | 无 | AMD ROCm 图像生成可耗尽主机内存；MTP 致并行槽=1 的吞吐减半已定位 |

**解读**：llama.cpp 以 5 个连续小版本保持高频迭代；Unsloth 单日 20+ 修复 PR（review 中）活跃度惊人；LiteLLM 的问题密度最高且偏向数据面/计费正确性；vLLM/SGLang 处于同一技术深水区，SGLang 在 PR 数量上略领先。

## 3. 模型支持竞速

| 项目 | 新模型/新架构 | 状态 |
|---|---|---|
| **vLLM** | DeepSeek-V4-Flash-0731（SM8x） | ❌ 受阻，#50576 持续高热（90+ 评论） |
| | MiniMax-M3-NVFP4（8×B200） | ✅ 修复后首批性能数据，EAGLE3 解码加速 2.1–2.3× |
| | MRV2 推测解码（draft model）/ prompt embeds | 🔧 PR #43091 / #42963 |
| **SGLang** | MiniCPM-SALA（长上下文稀疏注意力） | 🔧 PR #30360 |
| | MiniMax M3 TRT-LLM 后端 | 🔧 PR #33962 |
| | GLM4.7-flash FA4 backend | 🔧 PR #33436 |
| | DeepSeek V4 DSpark on AMD HIP | ✅ PR #30964 已合并 |
| **llama.cpp** | TML Inkling 架构（含 banded FA kernel） | 🔧 PR #25731 |
| | DSpark 投机解码（DFlash + Markov head） | 🔧 PR #25173 拟合并 |
| | Maple 架构（20B-A1B 三元 MoE, ~2bpw） | ❌ 仅请求（#26766） |
| | Hexagon NPU 独立后端 | 🔧 PR #26373 |
| **Ollama** | Intel SYCL/oneAPI GPU 后端（Arc/BMG） | 🔧 PR #17621 集成完成 |
| | MLX 视觉输入修复 + gemma4 导出 | 🔧 PR #17600 / #17622 |
| **Unsloth** | Apple Silicon 视频生成 | 🔧 PR #8198 解除拦截 |

**结论**：**llama.cpp 覆盖面最广**（新架构转换器 + 异构硬件后端 + DSpark 实现齐头并进），但多为 open 状态、未合入主干；**SGLang 在新模型后端落地速度上领先**（TRT-LLM、FA4、AMD HIP 均有具体推进）；**vLLM 深度最强但广度受制**——MLA/DP8 优化扎实，SM8x 缺口却直接挡住大面积 Ampere 用户。三家同时在啃 DeepSeek-V4 生态，尚未分出胜负。

## 4. 性能优化前沿

| 方向 | 代表进展 | 数据支撑 |
|---|---|---|
| **KV cache 容量/加载** | vLLM DP8 MLA（单 KV 头下 7.7× 容量、1M TTFT 提速 3.4×）；SGLang Weight Cache Daemon（模型权重加载 306s→<1s）；llama.cpp SYCL TILE 量化 KV decode | +42% ~ +169%（BMG） |
| **投机解码** | vLLM ReplaySSM 缓存加速 Mamba2；SGLang DSpark 全栈推进；llama.cpp DSpark 半自回归 Markov head；Ollama DFlash 块级草稿（MLX） | 方向一致，但正确性 Bug 密集（depth 5 损坏、量化目标下与贪心不一致） |
| **算子融合/内核** | vLLM Triton sampler 4→8 warps（降 8192 宽 tile 延迟）；llama.cpp CUDA rms_norm+mul+rope 三算子融合、HIP Q2_0 原生置换指令；SGLang tiny-batch MoE pair 轴调度、JointThreshold 向量化 | HIP Q2_0 生成提速 33–35% |
| **分布式/通信** | SGLang FlashInfer CuTe DSL AllReduce+Residual+RMSNorm 融合；vLLM 消除前向路径多余 GPU↔CPU 同步 | GLM-5.2 GB300 路由 profile 已内置 |
| **量化新路径** | vLLM PTX 9.4 `ldmatrix.s8.s4`（共享内存内 INT4→INT8 符号扩展）；SGLang SM120 NVFP4 W4A16（缺失中）；llama.cpp q4_K 密集 FFN 融合 | — |
| **内存层级（新共识）** | llama.cpp `--lazy-experts` + PCIe DMA 直读 host 内存；Ollama MoE host 内存按需调度（讨论中）；SGLang Weight Cache Daemon | 81B MoE 跑在 8GB VRAM 卡（实验性） |

**解读**：KV cache 与投机解码是今日最集中的两条主线，且两者叠加时正确性问题高发（vLLM #51510、SGLang #33800、llama.cpp #26741）。"内存层级"是值得长期跟踪的新方向——它可能改变 MoE 部署的显存假设。

## 5. 分层定位差异

| 层级 | 项目 | 核心能力 | 今日典型关切 |
|---|---|---|---|
| **生产级推理引擎** | vLLM / SGLang | 连续批处理、KV cache 管理、张量/专家并行、多后端 | DeepSeek-V4 正确性、MRV2 迁移、DSpark 精度、大并发吞吐 |
| **本地/边缘运行时** | llama.cpp | GGUF 量化、CPU/GPU/异构后端、轻量级 server | 工具隔离、投机解码正确性、新架构转换器、量化 AVX 路径 |
| **开发者友好运行器** | Ollama | 一键部署、CLI/API、多平台（CUDA/MLX/ROCm）、云模型 | Agent 成本失控、MLX 视觉补齐、Intel 后端落地 |
| **网关/代理** | LiteLLM | 多 provider 路由、统一 API 转换、预算/限流、密钥管理 | 计费准确性、数据隔离、Responses API 兼容、配置原子性 |
| **训练/微调** | Unsloth | Q-LoRA/GRPO、GGUF 转换、Studio 托管微调 | Studio 稳定性、版本元数据可信度、扩散训练可恢复性 |

**补充观察**：vLLM 与 SGLang 的重叠度最高，今日二者在 DSpark 与 DeepSeek-V4 上的进展方向相反（vLLM 在 MRV2/Draft 路径补全、SGLang 在 AMD/新后端扩展），差异化正从"谁吞吐高"转向"谁先把新架构的坑填平"。llama.cpp 与 Ollama 是上下游关系，但 Ollama 的 MLX 分支和 Cloud 模型让它开始具备独立产品属性。Unsloth 是唯一覆盖"微调→导出 GGUF→接入推理"全链路的项目，与 llama.cpp 生态形成天然协同。

## 6. 值得关注的趋势信号

1. **新架构的"正确性排障期"成为常态**：DeepSeek-V4-Flash 上线后，vLLM（SM8x 缺失、CUDA assertion）、SGLang（DSpark 精度 97.08→93.96）、llama.cpp（KV cache 被清空）、Ollama（`</think>` 泄漏）四家各有未闭合 Bug。**决策者应意识到：头部新模型发布后的 2–4 周内，跨引擎的稳定性风险是系统性的，上线前需用业务回归集（如 GSM8K/AIME25）逐项验证。**

2. **投机解码正在成为默认路径，但正确性护栏没有跟上**：SGLang 的 DSpark、llama.cpp 的 DSpark/DFlash、Ollama 的 DFlash、vLLM 的 MTP/DSD 全部在同一窗口内暴露问题——SM120 上 depth 5 特异损坏、量化目标下与贪心解码不一致、MRV2 组合静默失效。**建议生产环境显式锁定已验证的 speculative depth，并对投机路径做确定性比对测试后再放量。**

3. **Agent 工作负载成为基础设施的"验收官"**：今日多条严重事件与 Agent 直接相关——Ollama 的 Claude Code 死循环（31M tokens）、vLLM 的模型别名改写导致 thinking 块剥离、llama.cpp 的工具隔离落地、LiteLLM 的流式用量低估。**Agent 开发者应关注：thinking 边界校验（`</think>` 泄漏检测）、调用预算上限、Anthropic 兼容端点单一别名原则、工具调用参数客户端二次校验（enum 约束不强制）。**

4. **"静默损坏"比报错更危险**：vLLM Marlin FP8 在 GB10 上无声输出损坏、Ollama KV 量化切 q4_0 后输出重复文本、Unsloth 精度元数据误报、SGLang mori 后端垃圾输出——均无显式报错。**这类问题只能靠回归测试与黄金样本兜底，建议对量化/投机/新后端组合建立每周基准集。**

5. **内存层级利用成为 MoE 部署的新边界**：llama.cpp 的 `--lazy-experts`、PCIe DMA 直读、Ollama 的三级分层提案、SGLang 的 Weight Cache Daemon 指向同一方向——**用 host 内存/系统 page cache 换 VRAM 容量**。对 GPU 资源受限的团队，这是 2026 下半年值得重点验证的低成本扩容路径。

6. **硬件多元化加速，AMD/Intel 是第二战场**：ROCm 在 MI355/gfx950、gfx1201 上持续补测试与修复（vLLM AITER MLA、Unsloth Qwen3.5 SFT），Intel SYCL 在 Ollama 与 llama.cpp 双侧推进，Qualcomm Hexagon NPU 首次作为独立后端出现。**但 AMD Windows 侧仍有系统级风险（Unsloth #8188 可耗尽主机内存），AMD 生产环境建议优先 Linux。**

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 动态日报 2026-08-09

## 今日速览

- DeepSeek-V4-Flash-0731 仍是社区焦点：SM8x（Ampere）支持请求持续高热（#50576，90 条评论），同时新增稳定性和 MLA 性能对比报告（#50660、#51454）。
- 性能优化密集推进：Triton sampler warp 数调整（#51507）、ReplaySSM 缓存加速 Mamba2 推测解码（#49847）、PTX 9.4 INT4→INT8 硬件扩展加载提案（#49529）均在本日窗口内活跃。
- Model Runner V2（MRV2）兼容性在补全（draft model、prompt embeds），但新增了 DSD 在 MRV2 下静默失效的 Bug（#51510），值得关注。

## 版本发布与破坏性变更

- 无新版本发布。
- 行为变更进行中：[PR #51488](https://github.com/vllm-project/vllm/pull/51488) 提议在 `pause_generation` 期间拒绝新请求（对应 #51476），与保守方案 [PR #51487](https://github.com/vllm-project/vllm/pull/51487) 并存待评审。若合入，将改变当前暂停期间继续接收请求的行为，依赖暂停排队语义的客户端需留意。

## 新模型与硬件支持

- **DeepSeek-V4-Flash-0731 的 SM8x 支持**仍不可用：[Issue #50576](https://github.com/vllm-project/vllm/issues/50576)。RTX 30xx / A100 / A800 用户需等待适配。
- **ROCm 更新**：
  - [PR #51457](https://github.com/vllm-project/vllm/pull/51457) 为 MI355（gfx950）新增 AITER FP8 MLA prefill 精度测试，补齐此前无覆盖的路径。
  - [PR #51011](https://github.com/vllm-project/vllm/pull/51011) 修复 AITER MLA 后端上 fp8 KV cache decode 错误：Kimi-K3 在 TP8 下 GSM8K 得分从 74.00%（285/1319 答案退化）提升至 97.19%。
- **MRV2 功能补全**：[PR #43091](https://github.com/vllm-project/vllm/pull/43091) 支持带 draft model 的推测解码；[PR #42963](https://github.com/vllm-project/vllm/pull/42963) 支持 prompt embeds。
- **新模型实测数据**：[Issue #51494](https://github.com/vllm-project/vllm/issues/51494) 给出 MiniMax-M3-NVFP4 在 8x B200 上的 NVFP4 正确性修复（#48929）后首批性能数字。

## 性能与优化

- [PR #51507](https://github.com/vllm-project/vllm/pull/51507)：`_topk_topp_kernel` Triton sampler 从默认 4 warps 提至 8 warps，降低 8192 宽 fp32 tile 的每 tile 延迟。
- [PR #49847](https://github.com/vllm-project/vllm/pull/49847)：ReplaySSM 方案第三子 PR，通过缓存 SSM 输入加速 Mamba2 推测解码（基于已合入的 standard decode #48018）。
- [Issue #49529](https://github.com/vllm-project/vllm/issues/49529)：提议在 W4A8-INT8 路径采用 PTX 9.4 的 `ldmatrix.s8.s4`，在共享内存加载阶段完成 INT4→INT8 符号扩展，避免额外转换指令。
- [Issue #51454](https://github.com/vllm-project/vllm/issues/51454)：DeepSeek-V4-Flash-0731 在单 KV 头 MLA 下 DP8 对比 TP8：DP8 在 c=8 时提供 7.7x KV 容量提升、1M TTFT 提速 3.4x。
- [Issue #51494](https://github.com/vllm-project/vllm/issues/51494)：MiniMax-M3-NVFP4（8x B200）在 #48929 修复后 EAGLE3 解码加速 2.1–2.3x。
- [PR #50907](https://github.com/vllm-project/vllm/pull/50907)（ROCm）：移除 SDPA 强制 fallback 与 blanket skinny GEMM 禁用等过期 workaround。
- [PR #51458](https://github.com/vllm-project/vllm/pull/51458) / [PR #51455](https://github.com/vllm-project/vllm/pull/51455)：在每前向路径中消除多余 GPU↔CPU 同步，并将 `VLLM_GPU_SYNC_CHECK` 机制改为线程局部、修正 suppressors，便于 CI 中排查性能隐患。

## 稳定性与回归

按严重程度排列：

- [Issue #50660](https://github.com/vllm-project/vllm/issues/50660)：DeepSeek-V4-Flash-0731 在 flashmla prefill 阶段触发 CUDA assertion 失败，无法稳定运行。暂无 fix PR。
- [Issue #49546](https://github.com/vllm-project/vllm/issues/49546)：`VLLM_MARLIN_INPUT_DTYPE=fp8` 在 GB10/sm_121a 上静默损坏输出（W4A8-FP8 MoE 在 temp=0 出现重复 `</think>` 循环），内核仅快约 2.5%。暂无 fix PR。
- [Issue #51266](https://github.com/vllm-project/vllm/issues/51266)：`/v1/messages` 对模型别名做规范化，导致 Claude Code 在工具循环中误判模型切换并剥离 thinking 块。暂无 fix PR。
- [Issue #51510](https://github.com/vllm-project/vllm/issues/51510)：MRV2 下 `AutoRegressiveSpeculator` 忽略 scheduler 的动态 K 选择，Dynamic Spec Decode 在 MRV2 上不生效。暂无 fix PR。
- [Issue #49548](https://github.com/vllm-project/vllm/issues/49548)：动态推测解码（`num_speculative_tokens_per_batch_size`）在 batch-size 阈值处导致聚合吞吐量崩塌（MTP/V1 PIECEWISE 降级约 14% 之外的新问题）。暂无 fix PR。
- [Issue #40896](https://github.com/vllm-project/vllm/issues/40896)：prefix caching 开启时，temperature=0 下首个请求与后续相同请求的输出不一致。暂无 fix PR。
- [Issue #42024](https://github.com/vllm-project/vllm/issues/42024)：NIXL connector 静默禁用 HMA，使 KV cache 容量减半。建议默认翻转 HMA 为开启；暂无 fix PR。
- 已关闭/有修复的条目：[Issue #34650](https://github.com/vllm-project/vllm/issues/34650)（MTP 导致 `</think>` 检测失败）已关闭；[PR #51391](https://github.com/vllm-project/vllm/pull/51391) 修复 Inkling block-end 泄漏（对应 #51387）已关闭。

## 对应用开发者的意义

- **Anthropic 兼容端点**：避免为同一模型配置多个别名，否则 Claude Code 可能因 `model` 字段被改写而误判切换，导致 thinking 块丢失（#51266）。建议强制单一别名或等修复合入。
- **Dynamic Spec Decode + MRV2**：当前组合静默失效（#51510）且无报错，生产环境若开启 `VLLM_USE_V2_MODEL_RUNNER=1`，请先确认 `num_speculative_tokens_per_batch_size` 实际生效，否则退回 MRV1 或关闭 DSD。
- **DGX Spark/GB10 量化推理**：不要设置 `VLLM_MARLIN_INPUT_DTYPE=fp8`（#49546），在修复前该路径会静默损坏输出，建议锁定 INT4 路径或等待新 release。
- **FP8 KV cache 的正确性风险**：在 AITER MLA 后端（#51011）与 MTP 推测解码（#46088）等组合中均有已修复或待修复的脏数据问题，升级后建议用 GSM8K 或同等回归集验证。
- 多个性能优化（sampler 8 warps、ReplaySSM、GPU 同步清理）已处于可测试状态，关注后续版本合并情况即可获得吞吐收益。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 动态日报 — 2026-08-09

## 1. 今日速览

今日无新版本发布。DSpark 推测解码在 SM120 与 DeepSeek-V4-Flash 上的正确性问题成为焦点（#33800、#32038），同时 DeepSeek V4 的 shared-expert 加载性能回退已有修复 PR（#34139）。新模型/后端支持方面，MiniCPM-SALA、MiniMax M3 TRT-LLM、GLM4.7-flash FA4、DeepSeek V4 DSpark on AMD HIP 均在推进中。

## 2. 版本发布与破坏性变更

过去 24 小时无新 Release。以下合并/进行中的 PR 包含需要留意的修复：

- **[Bugfix] DeepSeek V4 DSpark：修复 shared-expert 加载性能回退**（[#34139](https://github.com/sgl-project/sglang/pull/34139)，OPEN）。#33889 将 shared-expert fusion 改为 model-local 后，`DeepseekV4ForCausalLMDSpark` 的 loader 与 fused slot 构造逻辑不匹配，导致所有 bundled shared-expert 张量被拒绝，DSpark 部署变慢。该 PR 正在修复此回归。
- **修复 Qwen3-MoE 在 mori a2a 后端下产生垃圾输出**（[#34006](https://github.com/sgl-project/sglang/pull/34006)，CLOSED）。`is_deepep()` 精确枚举匹配导致 mori 运行落入 `forward_normal`，在 expert-parallel all-reduce 之上重复叠加同义归约，造成输出损坏。
- **修复 GQA 模型的 DCP KV head mapping**（[#32858](https://github.com/sgl-project/sglang/pull/32858)，CLOSED，high priority）。DCP 对 token 维度分片时 GQA 的 KV head 映射错误。

## 3. 新模型与硬件支持

- **MiniCPM-SALA 原生服务支持**（[#30360](https://github.com/sgl-project/sglang/pull/30360)，OPEN）。添加 MiniCPM-SALA 的 JIT kernel 与 serving 支持。
- **MiniMax M3 启用 TRT-LLM 后端**（[#33962](https://github.com/sgl-project/sglang/pull/33962)，OPEN）。通过保留 SwiGLU 参数使 TRT-LLM 路径可用。
- **GLM4.7-flash 支持 FA4 backend**（[#33436](https://github.com/sgl-project/sglang/pull/33436)，OPEN）。
- **DeepSeek V4 DSpark 支持 AMD HIP 平台**（[#30964](https://github.com/sgl-project/sglang/pull/30964)，CLOSED）。
- **DeepSeek V4 Prefill Context Parallel 两批 overlap（AMD）**（[#33480](https://github.com/sgl-project/sglang/pull/33480)，OPEN）。
- **[Feature Request] SM120 上的 Dense/B12X NVFP4 W4A16 GEMM**（[#33711](https://github.com/sgl-project/sglang/issues/33711)、[#33710](https://github.com/sgl-project/sglang/issues/33710)，OPEN）。Blackwell SM120 目前缺少 bf16 activations + W4A16 的 dense 与 MoE kernel 支持。
- **[Feature Request] Krea-2 / Krea-2 Turbo 在线 FP8 量化**（[#34135](https://github.com/sgl-project/sglang/issues/34135)，OPEN）。

## 4. 性能与优化

- **复用 batched Mamba boundary mask**（[#33477](https://github.com/sgl-project/sglang/pull/33477)，OPEN）。`prepare_for_decode` 已用一次向量化 CPU 操作计算出 Mamba track-boundary mask，但 decode 结果处理仍在逐 request 重新计算；该 PR 消除重复函数调用与簿记开销。
- **Tiny-batch MoE align 改在 pair 轴上调度**（[#34131](https://github.com/sgl-project/sglang/pull/34131)，OPEN）。`bs=1` decode 只需对齐少量 (token, slot) 对，但现有 kernel 都按 expert 轴扩展；新方案在 pair 轴上分配工作，突破 64-bucket 上限并减少无谓计算。
- **CUDA 上启用 vectorized JointThreshold decoding**（[#34122](https://github.com/sgl-project/sglang/pull/34122)，OPEN）。此前高并发下 JointThreshold 走逐行 Python 路径，串行执行 argmax/confidence/edit/completion 并反复 host-device 同步；现改用 batched tensor 实现。
- **集成 FlashInfer CuTe DSL allreduce fusion 并为 GLM-5.2 调优**（[#34134](https://github.com/sgl-project/sglang/pull/34134)，OPEN）。该 fused backend 将 AllReduce + Residual + RMSNorm 合并进集合通信，并在 MoE runner defer 时折叠 finalize 与 shared-expert add。已内置 GB300 H=8192 等 routing profile。
- **Realtime ASR：encoder-aligned windowing 支持长音频**（[#32682](https://github.com/sgl-project/sglang/pull/32682)，OPEN）。实现 RFC #22474 M2 的长期项性能工作，对齐 encoder 时间步切窗，避免每 2 秒音频引入冗余处理。
- **Weight Cache Daemon 路线图**（[#33522](https://github.com/sgl-project/sglang/issues/33522)，OPEN）。Phase 1 已落地（#27139）：per-rank daemon 通过 CUDA IPC 持有 post-quantized weights，权重加载从 ~306–327s 降至 <1s（Qwen3-235B FP8）。
- **Runner DCP topology 改为从 ParallelState 推导**（[#34133](https://github.com/sgl-project/sglang/pull/34133)，OPEN）。避免使用 config seed 的静态算术，直接读取活拓扑（`get_parallel().attn_dcp_*`），为动态 DCP 配置铺路。

## 5. 稳定性与回归

按严重程度排序：

- **DSpark draft depth 5 在 SM120 上损坏输出**（[#33800](https://github.com/sgl-project/sglang/issues/33800)，OPEN）。checkpoint 默认 depth 5 下输出 corrupt，depth 3/4/6/7 均正常。关联 #32666（另一后端同样 depth 5 → 23/24 corruption）与 #32038。
- **DSpark 导致 DeepSeek-V4-Flash 精度回退**（[#32038](https://github.com/sgl-project/sglang/issues/32038)，OPEN）。AIME25 97.08 → 93.96，与 verifier state 重写窗口（#32183）时间线吻合，尚无 fix PR。
- **DeepSeek-V4-Flash-0731 在 2×H200 并发下渐进式输出损坏**（[#33397](https://github.com/sgl-project/sglang/issues/33397)，OPEN）。DSV4 + DP attention 场景，尚未定位。
- **DeepSeek-V4-Pro 多节点 TP=8 PP=2 Triton MoE kernel 报 `Hidden size mismatch`**（[#27497](https://github.com/sgl-project/sglang/issues/27497)，CLOSED）。此前被标记 inactive 后关闭。
- **B200 + Qwen3-30B-A3B：flashinfer_trtllm BF16 MoE 在 CUDA graph capture 期间 illegal memory access**（[#27712](https://github.com/sgl-project/sglang/issues/27712)，CLOSED）。
- **[修复中] DeepSeek V4 DSpark shared-expert 加载回归**（[#34139](https://github.com/sgl-project/sglang/pull/34139)，OPEN）。见第 2 节。
- **[已修复] Qwen3-MoE mori a2a 后端垃圾输出**（[#34006](https://github.com/sgl-project/sglang/pull/34006)，CLOSED）。
- **[已修复] GQA 模型 DCP KV head mapping**（[#32858](https://github.com/sgl-project/sglang/pull/32858)，CLOSED）。
- **CUDA Coredump 自动收集跟踪**（[#26340](https://github.com/sgl-project/sglang/issues/26340)，OPEN，230 评论）。持续追踪 pr-test.yml 中的 coredump 事件，成为 CI 稳定性看板。
- **CI 状态总览**（[#17050](https://github.com/sgl-project/sglang/issues/17050)，OPEN）。最新自动更新：3 broken / 11 flaky / 670 recently fixed。

## 6. 对应用开发者的意义

- **Rust 网关兼容性风险**：`sgl-model-gateway` v0.3.2 拒绝 `/v1/responses` 中 `type: "custom"` 的 tool，与 Python 端 `protocol.py` 不同步（[#30781](https://github.com/sgl-project/sglang/issues/30781)，OPEN）。若你的 Agent/Codex CLI 使用自定义 tool type，升级网关前需确认版本匹配。
- **DeepSeek-V4-Flash / DSpark 用户注意**：SM120 上默认 depth 5 存在 corruption，DeepSeek-V4-Flash 在 DSpark 下有精度回退。生产环境建议显式设置 `--speculative-num-steps` 为已验证深度（如 3/4/6/7），并锁定版本后再升级。
- **流式请求 abort 的资源泄漏修复**（[#34138](https://github.com/sgl-project/sglang/pull/34138)，OPEN）。后台清理逻辑此前可能绑定到未进入 `generate_request` 的流，现在改为绑定 request 生命周期，对长时间运行的流式 Agent 更稳健。
- **新能力值得关注**：MiniCPM-SALA（长上下文稀疏注意力）、MiniMax M3 TRT-LLM、Realtime ASR 长音频切窗、Diffusion 模型（Krea-2、JointThreshold）的在线服务优化都在推进中，适合评估接入自有应用。
- **MoE 精度修复**：Qwen3-MoE 在 mori a2a 后端下曾产生垃圾输出（[#34006](https://github.com/sgl-project/sglang/pull/34006)），该路径已修复；使用该后端的用户应更新并回归验证。

---
*数据时间范围：2026-08-08 至 2026-08-09（GitHub 动态），日报基于公开 issue/PR 自动聚合生成。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 动态日报 2026-08-09

## 今日速览

llama.cpp 在过去 24 小时密集发布 b10327–b10331 共 5 个小版本：核心事件是服务器端**工具隔离能力正式落地**（Docker 后端），并修复了隔离环境下工作目录报告不一致的问题；CUDA 侧完成了 rms_norm + mul + rope 三算子融合，并修复 quantized cpy kernel 的线程配置缺陷。与此同时，**DeepSeek V4 / DSpark 相关正确性 Bug 集中出现**，涉及 KV cache 状态错乱与投机解码输出乱码，建议相关用户暂缓升级或谨慎启用 parallelism + speculation 组合。

## 版本发布与破坏性变更

- **b10327–b10331 发布**。b10328 为 server 引入基于 Docker 的初始工具隔离支持（`tools_io_sandbox` → `tools_io_isolate` 重命名，相关 header 从 `x-tool-docker` 开始演进），并新增文档；b10329 调整 UI 行为：仅当工具实际读取工作目录时才显示 working directory chip；b10331 进一步修正 `get_info`，使其报告隔离环境内的实际工作目录而非 host 路径。
  - https://github.com/ggml-org/llama.cpp/releases/tag/b10331
- **潜在迁移影响**：配置了工具隔离后，`get_info` 返回的 `cwd` 不再等同于服务器进程工作目录，依赖此字段做路径拼接的客户端需适配。b10329 的 UI 行为变化虽小，但会减少工具面板的信息噪声，属于预期调整。

## 新模型与硬件支持

- **PR #25731：TML Inkling 架构支持**（open）。包含 safetensors→GGUF 转换器、graph 构建与 kernel 改动；为支撑大型 MoE 部分算子改用 `int64_t` 索引，并新增 banded Flash Attention kernel。
  - https://github.com/ggml-org/llama.cpp/pull/25731
- **Issue #26766：Maple 架构支持请求**（open）。20B-A1B 三元 MoE（TQ1_0/TQ2_0，~2bpw），带 SWA-512 滑动窗口注意力，由 DeepGrove 发布。
  - https://github.com/ggml-org/llama.cpp/issues/26766
- **PR #25173：DSpark 投机解码**（拟合并）。在已合并的 DFlash drafter 之上叠加半自回归 Markov head，实现 confidence-scheduled speculative decoding。
  - https://github.com/ggml-org/llama.cpp/pull/25173
- **Hexagon NPU**：PR #26373 新增独立后端 `ggml-hexagon-jz`，可与官方实现共存；PR #26748 补充 Qualcomm 移动 SoC 的 Android 构建脚本。
  - https://github.com/ggml-org/llama.cpp/pull/26373
  - https://github.com/ggml-org/llama.cpp/pull/26748
- **工具隔离后端扩展**：PR #26774 在 Docker 基础上新增 `ssh:<target>` 与 podman rootless 两种 `--tools-runtime` 后端。
  - https://github.com/ggml-org/llama.cpp/pull/26774

## 性能与优化

- **HIP Q2_0 dot-product 大幅提速（PR #26753，open）**：针对 gfx1201 用原生 AMD 置换指令替代 HIP 通用字节置换，token generation 提升约 **33–35%**，并验证了全部 65,536 种 packed Q2 值的结果等价性。
  - https://github.com/ggml-org/llama.cpp/pull/26753
- **SYCL TILE kernel 加速量化 KV decode（PR #26689，open）**：在 BMG 上 TILE kernel 全面胜过 VEC；Qwen3.6-35B、Gemma 4 26B/12B 在 32K/118K 上下文下实测 **+42% ~ +169%**，零回退。
  - https://github.com/ggml-org/llama.cpp/pull/26689
- **SYCL q4_K 密集 FFN 融合（PR #26779，open）**：将 `mul_mat(gate) + mul_mat(up) + GLU` 合并为单个 q4_K reorder mat-vec，延续 #26015/#26411 的融合工作。
  - https://github.com/ggml-org/llama.cpp/pull/26779
- **CUDA 算子融合（b10330，已发布）**：融合 rms_norm + mul + rope（含 view/set_rows），并新增 broadcast weight 测试用例。
  - https://github.com/ggml-org/llama.cpp/releases/tag/b10330
- **--lazy-experts 支持超 RAM 的 MoE（PR #26003，open）**：仅对实际路由到的张量做 WILLNEED 预取，利用系统 page cache 流式管理激活张量，可在内存小于模型总大小时加载运行。
  - https://github.com/ggml-org/llama.cpp/pull/26003
- **MoE expert 权重 PCIe DMA 直读方案（Issue #26448，feature request）**：将 expert 权重固定在 host 内存，由 cuBLAS 直接跨 PCIe 读取，省去 H2D 拷贝。RTX 4090 实测可显著降低 VRAM 占用（如 23GB MoE 跑在 1.6GB VRAM、81GB Qwen3-235B 跑在 8GB 卡）。
  - https://github.com/ggml-org/llama.cpp/issues/26448

## 稳定性与回归

以下大致按严重程度排序：

1. **DeepSeek V4 平行解码 + 投机产生乱码（#26741，open）**：`deepseek4` 在启用 parallel processing 且使用 speculation 时输出 garbled text。涉及 `src/llama-kv-cache-dsv4.*` 与 `src/models/deepseek4.cpp`，多个构建版本可复现，尚无 fix PR。
   - https://github.com/ggml-org/llama.cpp/issues/26741
2. **DSV4 `state_read()` 清空全部压缩 KV cache（#26777，open）**：读取状态时会把所有 sequence 的 compressed KV cache 清除，导致其他 slot 静默失步。作者指出当前 master 仍存在该缺陷。
   - https://github.com/ggml-org/llama.cpp/issues/26777
3. **DSpark/DFlash drafter 在 `no_vocab` tokenizer 下忽略 `mask_token_id`（#26761，open）**：drafter 词表中缺失 mask token 时触发 `invalid token = -1`，`llama_decode` 直接失败。
   - https://github.com/ggml-org/llama.cpp/issues/26761
4. **OpenAI 兼容接口 base64 image 上传返回 500（#26770，open）**：`/v1/chat/completions` 中 `image_url` 使用 `data:` base64 时触发 nlohmann JSON 解析错误，与图片大小无关。
   - https://github.com/ggml-org/llama.cpp/issues/26770
5. **Qwen3.5 MTP 块 `TENSOR_SKIP` 引发 unused tensor 警告（#26765，open）**：跳过 MTP 块后常规 attention/FFN 权重也被标记为 unused，影响加载日志可读性。
   - https://github.com/ggml-org/llama.cpp/issues/26765
6. **Qwen3.6 / LFM2.5 工具调用解析异常（#26763 closed / #26658 open）**：`value_suffix` 因模型省略前导换行而不匹配，导致后续 tool call 被吞入参数；引号类转义序列在流式多 token 场景下破坏 delta。二者均由 **PR #26780** 修复（抑制不完整转义序列）。
   - https://github.com/ggml-org/llama.cpp/issues/26763
   - https://github.com/ggml-org/llama.cpp/issues/26658
   - https://github.com/ggml-org/llama.cpp/pull/26780
7. **投机解码在量化目标下与 vanilla 贪心结果不一致（#25618，open）**：draft-mtp/draft-dspark 在 Q4_K_M 目标上 greedy 输出偏离非投机结果，bf16 目标下一致；ngram 推测不受影响。
   - https://github.com/ggml-org/llama.cpp/issues/25618
8. **Vulkan 近期版本性能回退（#24066，stale open）**：RX 6600 上 Qwen3.5-9B 出现明显掉速，仍未确认根因。
   - https://github.com/ggml-org/llama.cpp/issues/24066
9. **CUDA Blackwell q4_0 KV cache 性能回退（#25422，stale open）**：b9868–b9890 区间内 RTX 5070 对称 q4_0 KV cache 出现吞吐下降。
   - https://github.com/ggml-org/llama.cpp/issues/25422
10. **GLM-5.2 多节点 RPC 崩溃（#26583，open）**：DGX Spark 多节点下 worker 报 `invalid data ptr`、orchestrator 在 `ggml_backend_rpc_buffer_get_tensor` abort。
    - https://github.com/ggml-org/llama.cpp/issues/26583
11. **Intel Ultra 平台 b10215 后 Vulkan 报错（#26769，open）**：Core Ultra 7 255H + Arc Pro 140T 上无法正常启动。
    - https://github.com/ggml-org/llama.cpp/issues/26769

## 对应用开发者的意义

- **工具隔离已可评估**：Agent 类应用现在可以将文件系统类工具放进 Docker / ssh / podman 隔离环境运行（PR #26507 已合入、#26774 扩展中）。但注意 `get_info` 返回的工作目录是隔离环境内部路径，基于 host 路径的挂载/映射逻辑需要调整。此外 b10329 之后 UI 只在工具真正读目录时才显示工作目录 chip，行为更可预期。
- **多模态应用的坑**：经 OpenAI 兼容端点上传 base64 图片目前必定 500（#26770），依赖该路径的视觉应用请暂用文件 URL 或等待修复。
- **工具调用解析已修复**：Qwen3.6 / LFM2.5 在流式工具调用中的引号与换行问题由 PR #26780 解决。如果生产环境正被此问题困扰，建议升级到包含该修复的版本；同时留意 escape sequence 相关回归。
- **MoE 大模型部署有新选项**：`--lazy-experts`（PR #26003）让大于物理内存的模型可被加载，配合 host RAM expert 直读方案（#26448），未来小显存 GPU 运行超大 MoE 存在更多可能。目前二者均未合并，生产环境耐心等待。
- **投机解码仍建议谨慎**：DSpark/DFlash 在量化目标下的确定性差异（#25618）与 DeepSeek V4 平行解码乱码（#26741）均为未关闭的正确性 bug。使用 `--draft-mtp` 或 `--draft-dspark` 时请验证输出质量，或暂时回退到 ngram 推测。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 动态日报 2026-08-09

## 1. 今日速览

过去 24 小时无正式 Release。核心动态：Intel SYCL/oneAPI GPU 后端从提案落地为实现 PR（[#16930](https://github.com/ollama/ollama/issues/16930) / [PR #17621](https://github.com/ollama/ollama/pull/17621)），MLX 视觉图像输入缺失已有修复（[PR #17600](https://github.com/ollama/ollama/pull/17600)）；但 `deepseek-v4-flash:cloud` 泄漏字面 `</think>` 导致 agent 死循环（[#17617](https://github.com/ollama/ollama/issues/17617)，193 次调用 / 约 31M tokens）是影响面最大的事故。另有多个稳定性修复在合入流程中：namespace 工具过滤、CUDA 初始化崩溃、模型转换 goroutine panic 恢复。

## 2. 新模型与硬件支持

- **Intel SYCL/oneAPI GPU 后端（Arc / Battlemage）**：[Issue #16930](https://github.com/ollama/ollama/issues/16930) 正式提出基于 llama.cpp `ggml-sycl` 增加可选 Intel GPU 后端，支持 Level Zero / oneDNN、XMX 矩阵单元、fp16 matmul；[PR #17621](https://github.com/ollama/ollama/pull/17621) 已完成 Ollama 侧集成，通过 `-DOLLAMA_LLAMA_BACKENDS=sycl` 显式构建，默认行为不变。[#17620](https://github.com/ollama/ollama/issues/17620) 为重复提案，已关闭。
- **MLX 视觉输入支持**：[PR #17600](https://github.com/ollama/ollama/pull/17600) 为 mlxrunner 增加图像输入。此前 MLX vision checkpoint 虽标记为 image-capable，但客户端根本不会发送 media，图像被当普通文本处理；该 PR 同时保留 prefix caching 与投机解码。对应 bug 为 [#17065](https://github.com/ollama/ollama/issues/17065)。
- **MLX 新增 gemma4 导出**：[PR #17622](https://github.com/ollama/ollama/pull/17622)（已关闭）为 MLX store 补充 gemma4 三个导出（31b-mlx-bf16 / 26b-mlx-bf16 / 26b-mxfp8）及 `apple-silicon-mlx` 预检 profile。
- **MoE 内存优化请求（讨论中）**：[#17557](https://github.com/ollama/ollama/issues/17557) 提议 MoE expert 权重放宿主内存、按需调度到 GPU，使 16B/35B MoE 能在 8GB 显存卡上运行；[#8861](https://github.com/ollama/ollama/issues/8861) 提出显存-内存-固态三级分层推理，两者均未合入。

## 3. 性能与优化

- **Thinking token 预算**：[PR #17566](https://github.com/ollama/ollama/pull/17566) 为思考块引入按请求/按模型的 token 上限。当前 `think` 只能开关、不能限长，Gemma 4 等模型会在思考块内死循环烧穿上下文；配套 [PR #17626](https://github.com/ollama/ollama/pull/17626) 修复 Gemma 4 在预算截断时误输出 channel 名的问题。
- **DFlash 块级投机解码（MLX）**：[PR #17571](https://github.com/ollama/ollama/pull/17571)（已关闭）新增 DFlash draft model，一次前向提出整块 token，无独立 embedding/输出头，复用目标模型 head，可显著减少 MLX 解码往返。
- **移除冗余 OCI rootfs 元数据**：[PR #17619](https://github.com/ollama/ollama/pull/17619) 删除 config blob 中从未被读取的 `rootfs.diff_ids`（与 manifest digest 重复）。对 per-tensor safetensors 模型可将 >100KB 冗余 config 瘦身，模型身份不受影响（以 manifest digest 为准）。
- **TTFT 回归（Windows/CUDA）**：[#17631](https://github.com/ollama/ollama/issues/17631) 报告 0.24.0 → 0.32.6 后每次请求固定增加首 token 延迟（Gemma E4B +156ms、qwen3 +44ms），不随 prompt 长度缩放、与 prompt cache 无关，但生成吞吐反而提升，疑似每请求固定开销。
- **多 GPU 拆分回归**：[#16599](https://github.com/ollama/ollama/issues/16599) 在 3090 + 4060 环境下，约 20GB 模型本可单放 3090（30 tok/s），开启 4060 后却被强制跨卡拆分；禁用 4060 后恢复正常。

## 4. 稳定性与回归

按严重程度排列：

1. **Agent 死循环 / token 爆炸**：[#17617](https://github.com/ollama/ollama/issues/17617) `deepseek-v4-flash:cloud` 经 Anthropic 兼容端点驱动 Claude Code 时泄漏字面 `</think>`，导致 193 次连续相同调用、约 31M tokens。无 fix PR，需应用侧防御。
2. **CUDA 初始化崩溃**：[#17627](https://github.com/ollama/ollama/issues/17627) `fox-eye` 模型触发 llama-server 栈缓冲越界（exit 0xc0000409），API 返回 500。无 fix PR。
3. **KV 量化乱码**：[#17614](https://github.com/ollama/ollama/issues/17614) KV 量化从 q8_0 切到 q4_0 后模型输出无意义重复文本（如 "AI AI AI…"）。无 fix PR。
4. **中文输入乱码**：[#17587](https://github.com/ollama/ollama/issues/17587) Qwen2.5-3B GGUF 在 Windows CPU 上中文输入输出 `@@@@@` / `!!!!!` 乱码，疑似 tokenizer 误判。无 fix PR。
5. **MLX 视觉输入丢失**：[#17065](https://github.com/ollama/ollama/issues/17065) gemma4:12b-mlx、qwen3.5:4b-mlx 收不到图像，仅出现 `[img-0]` 占位符。修复 [PR #17600](https://github.com/ollama/ollama/pull/17600) 在途。
6. **namespace 工具不兼容**：[#17618](https://github.com/ollama/ollama/issues/17618) `ollama launch codex-app` 在客户端发送 namespace 工具时报 "Unsupported tool type: namespace"。已提交 [PR #17630](https://github.com/ollama/ollama/pull/17630) 在服务端过滤；完整 round-trip 支持见 [PR #16263](https://github.com/ollama/ollama/pull/16263)。
7. **回归**：TTFT 固定开销（[#17631](https://github.com/ollama/ollama/issues/17631)）、多 GPU 拆分策略（[#16599](https://github.com/ollama/ollama/issues/16599)），详见上文。
8. **转换 goroutine panic**：[PR #17606](https://github.com/ollama/ollama/pull/17606) 修复 `/api/create` 在后台模型转换 goroutine 中 panic 无法被 Gin Recovery 捕获而拖垮进程的问题。
9. **config null 解引用 panic**：[PR #17624](https://github.com/ollama/ollama/pull/17624) 修复用户配置 `"integrations":{"claude":null}` 后 `IntegrationModel(s)` 对 nil 解引用 panic。
10. **工具参数 enum 不强制**：[#17597](https://github.com/ollama/ollama/issues/17597) `enum` 约束只随提示词到达模型，解码时不强制，模型可能输出枚举外值。
11. **NTFS 挂载点解析失败**：[PR #17608](https://github.com/ollama/ollama/pull/17608) 修复 `ollama create` 跨 NTFS 卷挂载点/junction 的 FROM 路径因 `os.Stat` 失败报不存在的问题（#17591）。
12. **解析器**：[PR #17187](https://github.com/ollama/ollama/pull/17187) 将尾部 assistant 消息归类为 Qwen3.5/Ornith prefill，修复 thinking-only prefill 后的生成续写被丢弃的问题。

今日更新列表中另有若干历史问题处于已关闭状态：[#14716](https://github.com/ollama/ollama/issues/14716)（qwen3.5 视觉输出错误路由到 thinking 字段）、[#17235](https://github.com/ollama/ollama/issues/17235)（Kimi K3 Cloud 模型请求）、[#17447](https://github.com/ollama/ollama/issues/17447)（AMD 780M/890M iGPU Linux systemd 修复方案）、[#10927](https://github.com/ollama/ollama/issues/10927)（无限思考循环）、[#3794](https://github.com/ollama/ollama/issues/3794)（下载尾速骤降）。

## 5. 对应用开发者的意义

- **Agent 成本风险（今日最高优先级）**：凡通过 Anthropic 兼容端点或 `deepseek-v4-flash:cloud` 驱动 agent 的，务必在应用侧增加输出校验（尤其检测泄漏的 `</think>`）和调用次数/预算上限，否则可能复现 #17617 的千万级 token 浪费。
- **工具调用兼容性**：namespace 类型工具当前不兼容（[#17618](https://github.com/ollama/ollama/issues/17618)）；[PR #17630](https://github.com/ollama/ollama/pull/17630) 合入后这类工具会被静默过滤——工具不再被调用，应用需自行降级，长期方案看 [PR #16263](https://github.com/ollama/ollama/pull/16263)。另外 `enum` 约束不生效（[#17597](https://github.com/ollama/ollama/issues/17597)），tool call 参数应客户端二次校验。
- **/v1/responses 流式失败**：当前生成中途失败表现为 HTTP 200 + EOF，与正常完成无法区分；[PR #17531](https://github.com/ollama/ollama/pull/17531) 合入后将补发 `response.failed` 终止事件，在合入前建议把「无终止事件的完整流」视为失败。
- **思考循环防护**：在 [PR #17566](https://github.com/ollama/ollama/pull/17566) 合入前，使用 qwen3 / Gemma 4 等易陷入思考循环的模型时应设请求级超时或关闭 thinking，避免空响应与上下文烧穿。
- **配置与集成**：手动编辑 integrations 配置时避免写入 `null` 条目（[#17624](https://github.com/ollama/ollama/pull/17624)）；[PR #17623](https://github.com/ollama/ollama/pull/17623) 将支持 Claude Code 的 `[1m]` 上下文后缀，此前会导致 `ollama launch` 校验失败。
- **MCP 支持仍在讨论**：[#7865](https://github.com/ollama/ollama/issues/7865)（220 👍）是外部数据源标准化集成的长期方向；Ollama Cloud 的 prompt cache 请求 [#16714](https://github.com/ollama/ollama/issues/16714) 也仍开放，agent 场景成本敏感者值得关注。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 动态日报 2026-08-09

## 今日速览

今日有 v1.97.0-rc.1（新 RC）和 v1.94.2 两个版本发布。稳定性方面，文件列表分页游标泄露其他用户文件 ID 的问题已修复并关闭，涉及 SDK 自动分页死循环的后续 bug 也已在 PR 中被处理。与此同时，流式 usage 严重低估、`/v1/responses` 后台任务返回空输出两个高影响 bug 仍无修复 PR，需要重点关注。

## 版本发布与破坏性变更

- [v1.97.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.97.0-rc.1)：最新 RC 版本，主要面向 Docker 镜像签名验证流程。未发现明确的破坏性变更。
- [v1.94.2](https://github.com/BerriAI/litellm/releases/tag/v1.94.2)：维护版本，内容同上，属镜像签名常规更新。

## 新模型与硬件支持

本期数据中无新增模型或硬件后端支持条目。

## 性能与优化

- 无重大性能优化（吞吐/延迟/显存）落地。值得关注的是 [PR #36143](https://github.com/BerriAI/litellm/pull/36143)：为 key/team/model 增加可配置的估算输出 token 数，改善 TPM 预留的粗细粒度，通过避免过度预留提升配额利用率。

## 稳定性与回归

按严重程度排列：

**1. 数据泄露：文件列表分页游标越权（已修复）**
- [Issue #36087](https://github.com/BerriAI/litellm/issues/36087)（已关闭）：`GET /v1/files` 的 `first_id`/`last_id` 来自未过滤的全局行，导致非 owner 的游标字段泄露其他用户文件 ID。由 [PR #36093](https://github.com/BerriAI/litellm/pull/36093) 修复。
- 衍生问题 [Issue #36324](https://github.com/BerriAI/litellm/issues/36324)：上游 `has_more` 被原样透传，但代理从不转发 `after` 参数，导致 SDK 自动分页无限循环。已有对应 [PR #36326](https://github.com/BerriAI/litellm/pull/36326)。

**2. 严重：DB-less 代理批量创建会重复计费（已修复）**
- [Issue #36265](https://github.com/BerriAI/litellm/issues/36265)（已关闭）：无 `DATABASE_URL` 时 `POST /v1/batches` 发送给 provider 并启动任务后，响应因 `prisma_client=None` 500 崩溃。调用方拿不到 batch id，无法 poll/cancel，重试会导致多个已计费的 provider 任务。由 [PR #36273](https://github.com/BerriAI/litellm/pull/36273) 修复。

**3. 严重：流式 usage 严重低估（无修复）**
- [Issue #36114](https://github.com/BerriAI/litellm/issues/36114)：链式代理 + Bedrock 场景下，流式 `/chat/completions` 的最终 `usage` 被大幅低估。chunk_parser() 已修复，根因在流聚合层，且与 provider 无关，影响所有通过流式响应的用量统计。

**4. 严重：`/v1/responses` 后台任务返回空输出（无修复）**
- [Issue #36275](https://github.com/BerriAI/litellm/issues/36275)：`background: true` + `polling_via_cache: "all"` 时，轮询结果返回 `status: "completed"` 但 `output: []`、`text: null`、`usage: null`。v1.91.0+ 受影响，v1.83.7 正常。

**5. 中等：Responses API 流式丢文本（已有 PR）**
- [Issue #36327](https://github.com/BerriAI/litellm/issues/36327)：上游 Chat Completions 流式 chunk 同时包含 `reasoning_content` 和 `content` 时，`/v1/responses` 的流式响应会丢失可见的 content 文本。修复 PR：[#36329](https://github.com/BerriAI/litellm/pull/36329)，通过展开增量事件并共享事件队列解决。

**6. 中等：`/team/update` 部分更新会清空团队元数据（已有 PR）**
- [PR #36328](https://github.com/BerriAI/litellm/pull/36328)：部分更新 Team Member 字段会静默删除 logging、guardrails、key duration 等团队元数据，由种子数据缺失导致。

**7. 中等：Admin UI 保存的 routing_groups 配置导致启动硬失败（已有 PR）**
- [Issue #36310](https://github.com/BerriAI/litellm/issues/36310)：UI 允许将一个 model 放入多个 routing_groups，运行时 `_init_routing_groups` 启动即报错，且会静默破坏所有相关组。修复 PR：[#36323](https://github.com/BerriAI/litellm/pull/36323)，保存时拒绝重叠配置并保持组加载原子性。

**8. 中等：其他未修复问题**
- [Issue #36290](https://github.com/BerriAI/litellm/issues/36290)：Anthropic 直连路径下 `reasoning_tokens` 恒为 0（Claude Opus/Sonnet 5）。
- [Issue #36242](https://github.com/BerriAI/litellm/issues/36242)：有数据库的代理将 `GET /v1/batches` 强制路由到 managed-files hook，导致 provider 过滤 500，且 Vertex 侧列表不可达。
- [Issue #36280](https://github.com/BerriAI/litellm/issues/36280)：`pass_through_endpoints` 的 `include_subpath` 路由被错误归类为管理路由，虚拟 key 一律 401。
- [Issue #36262](https://github.com/BerriAI/litellm/issues/36262)：v1.95.0 上 Anthropic 流式 `tool_use` 在内部工具调用 chunk 前丢失。
- [Issue #36309](https://github.com/BerriAI/litellm/issues/36309)：`Router(cache_responses=True, cache_kwargs={'type': 'disk'})` 静默忽略 `cache_kwargs`，创建了内存缓存而非磁盘缓存。
- [Issue #36163](https://github.com/BerriAI/litellm/issues/36163)：TealTiger 自定义护栏插件功能请求，无代码变更。

**9. 其他遗留/已关闭**
- [Issue #27591](https://github.com/BerriAI/litellm/issues/27591)：`os.environ/` 加载器不剥离 `.env` 中的双引号，导致 Azure endpoint 配置失效。
- [Issue #32218](https://github.com/BerriAI/litellm/issues/32218)：Z.AI Coding Plan 文档中的 `glm-5.2[1m]` 变体在代理上返回 Unknown Model。
- [Issue #32683](https://github.com/BerriAI/litellm/issues/32683)：Bedrock 跨区域推理 profile 的 `count_tokens` 返回 400（前缀被提前剥离）。
- [Issue #24137](https://github.com/BerriAI/litellm/issues/24137)（已关闭）：Ollama 上 `litellm.responses()` 返回空输出，completion 正常。

## 对应用开发者的意义

- **文件列表 API 行为已变更**：如果你用 SDK 自动分页拉取 `/v1/files`，升级后分页会在首屏结束（`has_more: false`），避免死循环；同时游标不再泄露其他租户的文件 ID。依赖旧游标逻辑的代码需要回归验证。
- **批量创建（Batches）的 DB-less 使用**：在无数据库模式下 `POST /v1/batches` 曾因响应 500 导致“任务已启动但无法追踪”——升级到含 PR #36273 的版本前，不要在生产环境以 DB-less 模式使用该 API，否则失败重试会产生重复计费。
- **流式用量统计存在低估风险**：若你的应用依赖流式响应的 `usage` 字段做计费或限流，Issue #36114 未修复前数据可能偏低，建议暂时以非流式用量为基准或等待修复版本。
- **`/v1/responses` 存在两个已知缺陷**：后台任务（background+缓存轮询）会拿到空结果，流式场景会丢失可见文本（后者已有 PR #36329）。正在建设 Responses API 的开发者应留意，避免误判模型输出完整性。
- **团队管理更新**：若使用 `/team/update` 局部更新 Team Member，注意 PR #36328 修复前会清空其他团队元数据（guardrails/logging 等），升级后行为恢复正常。
- **配置安全**：Admin UI 保存 `routing_groups` 前会做重叠模型校验（PR #36323），避免启动期静默全军覆没；同时注意 Disk 缓存配置不会报错但被忽略（Issue #36309），需要核对实际缓存类型。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 动态日报 — 2026-08-09

## 今日速览

过去 24 小时无新版本发布，但上游非常活跃：核心维护者 danielhanchen 密集提交了 20+ 个修复 PR，覆盖 Studio 子进程泄漏、扩散训练恢复、精度误报、GGUF 前置校验等硬问题；社区侧则集中暴露了 AMD ROCm 图像生成耗尽主机内存、llama-server 完全无法启动、远程模型工具调用失效等稳定性风险。整体是「修复为主、功能为辅」的一天，且大部分修复尚在 review 状态，未合入 main。

## 版本发布与破坏性变更

无新 release，无破坏性变更。但注意 [#8171](https://github.com/unslothai/unsloth/issues/8171) 指出 `unsloth.__version__` 实际是 `unsloth_zoo.__version__` 的别名：两者以 `>=` 而非 `==` 锁定版本，且无发布时守护。当 core 先行发布时，`unsloth.__version__` 会误报为 zoo 的旧版本。依赖版本检测的 CI/遥测链路需留意，目前无 fix PR。

## 新模型与硬件支持

- **Apple Silicon 视频生成开启**：[PR #8198](https://github.com/unslothai/unsloth/pull/8198) 移除了「Video generation on macOS is coming soon」的硬编码拦截，macOS 现在通过与 CUDA 相同的 diffusers pipeline 加载并生成视频。
- **Studio 数据集 split 推断**：[PR #8144](https://github.com/unslothai/unsloth/pull/8144) 为 metadata-free 的本地缓存数据集增加 stdlib-only 回退，从 sharded 文件名（`data/{split}-00000-of-00001`）和目录结构推断 splits，补齐了 [#8140](https://github.com/unslothai/unsloth/issues/8140) 暴露的缺口。
- **社区关注的新模型/后端**：[#6825](https://github.com/unslothai/unsloth/issues/6825) 报告 Qwen3.5 SFT 在 ROCm gfx1201 上 step 0 失败；[#8142](https://github.com/unslothai/unsloth/issues/8142) 涉及 Qwen3.6-35B-A3B-MTP-GGUF 的 API 调用；[#8158](https://github.com/unslothai/unsloth/pull/8158) 涉及 FLUX.2 4B GGUF 与 9B base 的配对校验。

## 性能与优化

- **修复 MTP 导致的吞吐回退**：[PR #8172](https://github.com/unslothai/unsloth/pull/8172) 定位了用户报告的 Studio API 吞吐减半问题（12 文档约 1 分钟 → 24 文档 4+ 分钟）。根因不是 MTP 失效，而是 MTP 开启后强制 llama-server 只能使用 1 个并行槽位。PR 解耦 MTP 与并行槽配置。
- **GRPO 计算路径修正**：[PR #8204](https://github.com/unslothai/unsloth/pull/8204) 修复 `_get_per_token_logps_and_entropies` 将 `outputs.logits` 误作 hidden states 的问题——当 forward 不是 Unsloth 生成路径时，`[.., vocab]` 的真实 logits 会被直接送入 `chunked_hidden_states`。PR 在剩余 lm_head matmul 调用点按宽度分发。
- **聊天首条消息感知延迟消除**：[PR #8136](https://github.com/unslothai/unsloth/pull/8136) 不再让消息渲染等待持久化完成，修复新会话中清空输入框后界面空白 1-2 秒的问题。

## 稳定性与回归

按严重程度排列，标注修复状态。

### 高危（无 fix PR）

- **[#8188](https://github.com/unslothai/unsloth/issues/8188) AMD Windows ROCm：图像生成静默耗尽主机 RAM（OPEN）**。内存计划低估时，WDDM 将溢出回退到系统内存，实测可用 RAM <1.2GB、pagefile 超过 50GB，机器近乎不可用；Linux 上同类情况会正确抛 `torch.OutOfMemory`。没有兜底机制。
- **[#8184](https://github.com/unslothai/unsloth/issues/8184) llama-server 完全无法启动（CLOSED，08-08 更新）**。Windows i9-11900K + RTX 3090 + 2×48GB VRAM，升级后任何模型都无法加载。已尝试清除 `.unsloth` 目录、重跑安装脚本，均无效。
- **[#7282](https://github.com/unslothai/unsloth/issues/7282) 远程模型工具调用失效（OPEN，v0.1.50-beta / llama.cpp b10069）**。本地工具调用正常，远程模型不行，影响 Agent 场景。
- **[#6825](https://github.com/unslothai/unsloth/issues/6825) Qwen3.5 SFT 在 ROCm gfx1201 step 0 失败（OPEN）**。报 `FailOnRecompileLimitHit (fullgraph=True)`，AMD 训练链路仍不稳定。

### 中危（无 fix PR）

- **[#8150](https://github.com/unslothai/unsloth/issues/8150) Resume 训练按钮消失（OPEN）**：最新 Studio 在 Stop and Save 后立即丢失恢复入口，Kaggle T4 双卡可复现。
- **[#8178](https://github.com/unslothai/unsloth/issues/8178) Studio 缺少 GPU 显存上限设置（OPEN）**：仅支持 `UNSLOTH_ROCM_MEM_FRACTION` 环境变量，且只对 ROCm 有效，桌面端对运行内存没有 UI 控制。
- **[#8187](https://github.com/unslothai/unsloth/issues/8187) 图像生成没有停止按钮（OPEN）**：视频生成可取消，图像生成一旦启动只能强杀 Studio。
- **[#8140](https://github.com/unslothai/unsloth/issues/8140) 缓存数据集无 split 选项（OPEN）**：split 由 loader 推断的数据集在 UI 中完全不显示 split 选项，虽然数据实际可加载。

### 已有 fix PR

- **Studio 子进程泄漏**：[PR #8170](https://github.com/unslothai/unsloth/pull/8170) 修复 Windows 更新时残留 python 子进程阻塞安装的问题，根因是沙箱工具调用经 `cmd /c` / `bash -c` 包装后，异常退出时子进程未被回收。
- **精度误报**：[PR #8165](https://github.com/unslothai/unsloth/pull/8165) 修复界面显示 FP8 实为 Q4_K_M GGUF、显示 BF16 实为 NVFP4 的误报，并拒绝无法兑现的显式精度请求。
- **GGUF/base 不匹配后置校验**：[PR #8158](https://github.com/unslothai/unsloth/pull/8158) 原先会先下载完 19.17GB 的 base 模型再报 family mismatch，改为下载前拒绝。
- **扩散训练不可恢复**：[PR #8163](https://github.com/unslothai/unsloth/pull/8163) 修复 stop-and-save 写入 partial adapter 但重启从 step 1 开始的问题。
- **下载完成状态错乱**：[PR #8160](https://github.com/unslothai/unsloth/pull/8160) 修复下载完成后仍显示「0 B of 33 GB」和 Retry/Resume 的问题（Windows 专有）。
- **Deep Research 事件流假死**：[PR #8205](https://github.com/unslothai/unsloth/pull/8205) 事件流改用 POST 传输，修复 Cloudflare tunnel 等代理环境下活动面板持续加载的问题。
- **其他**：[PR #8124](https://github.com/unslothai/unsloth/pull/8124) 防止损坏的 TensorFlow 安装破坏 Unsloth import；[PR #8157](https://github.com/unslothai/unsloth/pull/8157) 检测并报告 xFormers 扩展加载失败；[PR #8200](https://github.com/unslothai/unsloth/pull/8200) 修复 vLLM CUDA mismatch 提示中 404 的 wheel URL；[PR #8197](https://github.com/unslothai/unsloth/pull/8197) 修复 main 上 6 个 UI 契约测试红。

## 对应用开发者的意义

- **Agent / 工具调用工作流**：若你在 Studio 上构建工具调用 Agent，[#8170](https://github.com/unslothai/unsloth/pull/8170)（进程泄漏）与 [#8169](https://github.com/unslothai/unsloth/pull/8169)（工具产物文件可访问）值得跟进；[#7282](https://github.com/unslothai/unsloth/issues/7282) 说明远程模型的工具调用仍不可依赖。
- **推理服务吞吐**：部署 Studio API 或 llama-server 的团队应关注 [#8172](https://github.com/unslothai/unsloth/pull/8172)——MTP 开启时并行槽被强制为 1，直接减半吞吐；另外 [#8142](https://github.com/unslothai/unsloth/issues/8142) 报告 API 响应中没有 token 用量统计。
- **模型选择与精度保证**：[#8158](https://github.com/unslothai/unsloth/pull/8158) 让你不用再为不兼容的 GGUF/base 组合浪费数十 GB 下载流量；[#8165](https://github.com/unslothai/unsloth/pull/8165) 保证精度元数据可信；[#8163](https://github.com/unslothai/unsloth/pull/8163) 让扩散训练可中断恢复。
- **版本与遥测**：读取 `unsloth.__version__` 做缓存/兼容性判断的应用，需警惕 [#8171](https://github.com/unslothai/unsloth/issues/8171) 的版本别名误报。
- **AMD/ROCm 用户**：[#8188](https://github.com/unslothai/unsloth/issues/8188) 是系统级风险——Windows ROCm 下图像生成可能拖垮整机，生产环境建议在修复前手动限制可用内存或暂缓图像生成。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*