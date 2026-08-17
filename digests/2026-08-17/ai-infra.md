# AI 基础设施日报 2026-08-17

> 生成时间: 2026-08-16 23:09 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施生态横向对比分析报告（2026-08-17）

## 1. 生态全景

当前 AI 基础设施生态呈现“**高速迭代与稳定性承压并存**”的态势。各项目在过去 24 小时均无重大 stable release，但 PR/Issue 活动保持高位（LiteLLM 单日 145 条 PR 活动），显示 ecosystem 仍处于快速演进期。值得警惕的是，**正确性问题集中爆发**：vLLM 的 Kimi-K2.6 输出损坏（93 评论）、llama.cpp 的 logprobs 静默回归、Ollama 的 qwen3.8 工具调用 500 错误，均直接威胁生产依赖。与此同时，**新模型/新架构支持竞速激烈**——MoE 扩散模型（MAGI-2）、Differential Latent Attention（Motif 3）、多模态 TTS 等新架构在 24 小时内同时出现在多个项目的 PR 中，上游架构创新正以前所未有的速度向推理栈渗透。

## 2. 各项目活跃度对比

| 项目 | Releases | 关键 Issues（新增/活跃） | 关键 PRs | 严重度最高问题 |
|------|----------|--------------------------|----------|----------------|
| **vLLM** | 无正式 Release | Kimi-K2.6 输出损坏（93 评论）<br>DeepSeek V4 Flash 回归（20 评论） | ~14 个活跃 PR | Kimi-K2.6 间歇性输出 `!!!!!!!!!!`，无 fix PR |
| **SGLang** | 无新 Release | Gemma-4 radix cache 确定性翻转（18/40 复现）<br>GGUF I-quant 慢 4-6x | ~11 个活跃 PR | Radix cache 命中导致 greedy 输出不一致，无 fix PR |
| **llama.cpp** | **3 个维护版**（b10451→b10453） | Vision + AMD AI Max 完全不可用（15 评论）<br>`/v1/completions` logprobs 缺失（3 评论） | ~8 个 fix PR 就绪 | 安全：GGUF 解析整数溢出 → 堆 OOB 读（已有 fix） |
| **Ollama** | 无新 Release | qwen3.8 系列工具调用崩溃（多 issue 互证）<br>VS Code Copilot 工具回归 0.32.4+（33 评论） | ~8 个 PR 在审 | qwen3.8 + `/v1/chat/completions` 永久无响应 |
| **LiteLLM** | **v1.97.0 stable + v1.98.0-rc.1** | gpt-5.4 空输出（19 评论）<br>Payload tags 失效回归 | **145 条 PR 活动**（31 issue 更新） | gpt-5.4 空 Responses 输出（已有 fix PR #31332） |
| **Unsloth** | 无新 Release | Studio Web UI 崩溃（#9046）<br>ROCm 后端模型无法加载 | ~12 个活跃 PR（性能优化为主） | `crypto.randomUUID` 在非安全 HTTP 崩溃 UI（已有 fix 方向） |

## 3. 模型支持竞速

**领跑者：llama.cpp 与 SGLang**。llama.cpp 在 24 小时内合入 **BailingMoE3**（Ling 3.0 + MTP）和 **Motif 3 Beta**（GDLA 注意力架构）两个全新架构，并支持 vLLM speculators 格式的 DSpark draft 检查点，在架构覆盖广度上持续领先。SGLang 则在新模型类型上发力，新增 **SenseNova U1**（原生多模态生成 + T2I/IT2I API）和 **MAGI-2-preview**（114B MoE 视频+音频联合生成扩散模型），将 serving 能力从纯文本推向多模态生成。

**加速追赶者：Unsloth**。通过 PR #8794 为 Studio 一次性添加 5 款音频模型（Higgs TTS、MOSS TTS 系列、MiniMax Music3），直接切入语音 Agent 场景。

**生态适配型：vLLM**。以跟踪型支持为主，新增 FlashInfer ReplaySSM 算子和 Kimi-K3 ROCm 支持（通过 AITER fused-moe 集成），并推动模型能力注册机制（PR #52459）以降低新模型接入成本。

**值得注意**：Ollama 无官方新模型支持，但社区请求指向 **Solar Pro 4（524K 上下文）** 和 **DeepSeek V4 Pro 0813**。LiteLLM 则通过新增 OpenCode 一等 Provider 和 ElevenLabs WebSocket TTS，在 API 层而非模型层实现差异化。

## 4. 性能优化前沿

| 方向 | 代表项目与具体动作 |
|------|-------------------|
| **KV Cache 管理** | vLLM 布局重构至 `[L, B, H, N, C]` 统一逻辑布局（6/N）；SGLang 统一 full-attention 与 sliding-window 页表映射 |
| **投机解码/验证** | vLLM MRV2 补全 draft model 支持；llama.cpp 修复 MiMo-V2.5 MTP 显存分配错误、为 spec decode 补 logprobs 支持；SGLang 清理 spec v2 logprobs 签名 |
| **量化推理** | llama.cpp SYCL 量化 KV decode TILE 内核（**+42%~169%**）；SGLang 暴露 I-quant GGUF 缺 MMQ kernel 的性能短板 |
| **批处理与调度** | vLLM EPLB 向量化打包、自定义 all-reduce size ceiling 可配；SGLang warmup 后冻结 GC、CUDA graph capture 后显存预留 512→1536 MiB |
| **多模态/扩散优化** | SGLang 为 SenseNova U1 实现 flow-prefill CUDA graph；vLLM 新增 Whisper 功能跟踪 issue 汇总社区需求 |
| **分布式推理** | llama.cpp Intra-Prompt Pipeline Scheduling PoC（多卡 prefill 流水线）；SGLang 修复 TP16 MNNVL custom all-reduce 回归 |
| **前端/客户端性能** | Unsloth 长线程 UI 性能攻关（42s→0.5s），属于工具链侧的非推理性能优化 |

**共性趋势**：KV Cache 布局标准化（vLLM）、统一页表（SGLang）和 MTP/投机解码稳定性（llama.cpp）成为三方同时发力的交集。这预示着 **KV Cache 和投机解码正在从“特性”变为“基础设施”**，其正确性和跨框架兼容性将成为下一阶段竞争焦点。

## 5. 分层定位差异

| 层级 | 项目 | 定位与差异化 |
|------|------|-------------|
| **推理引擎 / 服务框架** | vLLM, SGLang | 面向生产环境的通用/SOTA inference stack，强调 throughput、P99、多模型管理（vLLM 网关方向 Mooncake KV connector）与前沿模型适配（SGLang 扩散模型）。竞争焦点：模型能力注册机制、KV Connector 生态、多模态 Serving |
| **本地运行时** | llama.cpp, Ollama | 面向单机/边缘场景。llama.cpp 强调架构覆盖广度与量化格式生态（GGUF/I-quant），是开源模型的“汇编层”；Ollama 则以开发者体验和 OpenAI 兼容 API 易用性见长。差异：llama.cpp 更偏底层/可嵌入，Ollama 更偏用户友好的 local daemon |
| **网关 / 代理** | LiteLLM | 处于模型层与调用方之间的“连接器”位置。核心价值从简单转发升级为：多 Provider 路由（cost-based routing）、计费/用量统计、协议转换（OpenAI↔Anthropic↔Responses）、安全与认证。竞争焦点：Claude Code/WebSocket 等 Agent 场景适配 |
| **训练 / 微调框架** | Unsloth | 垂直整合“微调 + 本地推理 + 前端交互”（Studio/Desktop）。定位是**从数据到部署的端到端个人 AI 工作站**，区别于其他项目的纯推理/网关定位，兼顾训练性能（flash-attn、量化）与桌面可用性 |

**关键差异**：llama.cpp 与 vLLM 存在上下游关系（Ollama 基于 llama.cpp，vLLM 可加载 DSpark 格式），LiteLLM 则可作为所有前述引擎的流量网关。Unsloth 的 Studio 则试图以 GUI 形态统一微调与推理体验，是唯一覆盖训练侧的项目。

## 6. 值得关注的趋势信号

**1. Agent 工作流是当前最大的兼容性压力源**：Ollama qwen3.8 工具调用 500（#17778）、SGLang Gemma-4 缓存导致确定性翻转（#34683）、llama.cpp 工具调用解析缺陷（#26987）、vLLM MTP 流式掉字——**Agent 的关键依赖（工具调用、流式、logprobs、缓存一致性）正是今日各项目 Bug 最密集区域**。应用开发者应将此视为“新功能优先破坏区”，对 Agent 场景建立单独回归测试。

**2. 确定性推理成为基础设施能力而非可选特性**：SGLang 的 radix cache 导致 greedy 输出翻转、vLLM 的 Kimi-K2.6 输出损坏，都在打破“同样输入同样输出”的基本预期。SGLang 正在推动 bit-exact correctness 测试覆盖（#34899），这将成为 serving 质量的新维度。

**3. 安全修复进入密集期，供应链风险受关注**：llama.cpp 连发 3 个版本，其中 2 个与恶意文件相关（LoRA 边界检查、GGUF 整数溢出）；vLLM 修复 `api_key` 日志泄漏；LiteLLM 在 Release 中强化 cosign 签名验证。**模型文件与权重已成为攻击面**，服务端处理不可信文件需升级。

**4. 新架构正从“追热点”变为“并行多线作战”**：24 小时内同时出现 MoE 扩散模型（MAGI-2）、Differential Latent Attention（Motif 3）、音频生成（Unsloth）、MTP/投机解码全链优化。基础设施团队对某个单一架构的深度绑定风险在上升，**架构中立性**（如 vLLM 的模型能力注册机制 SQL）成为关键架构决策。

**5. 对 Agent/应用开发者的具体建议**：
- **升级窗口谨慎**：Ollama 0.32.4+、LiteLLM 最新版之前均需验证工具调用链路；llama.cpp 建议等待 #26605、#27207 合入后再部署 MTP 模型。
- **输出校验是刚需**：面对 vLLM Kimi-K2.6 损坏与 SGLang Gemma-4 翻转，生产环境应增加输出合法性与确定性校验层（如 required output format、greedy 结果比对）。这是纯工程侧可在上游修复前完成的防护。
- **利用差异选择技术栈**：若需要新模型支持跑在前面（新 MoE/扩散/DLAT），优先关注 llama.cpp 与 SGLang；若需要稳定的大规模生产 serving 与多模型管理，vLLM 与 LiteLLM 仍是主力，但需小版本锁定与回归测试。
- **Agent 长会话运维**：Unsloth 滚动上下文窗口（PR #8961）值得关注，但#9037 表明 reload 后 prompt state 仍不可靠；LiteLLM WebSocket passthrough 修复（#36151）为实时 Agent 铺路。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 动态日报 2026-08-17

## 今日速览
- Kimi-K2.6 推理输出损坏问题持续发酵（93 条评论），当前无修复 PR。
- KV-Cache 布局重构系列推进至 6/N，CUDA 13.4 / Rubin 预发布镜像流水线启动。
- SM120 NVFP4 崩溃的 root-cause fix、api_key 日志泄漏修复等多个正确性/安全 PR 提交。

## 版本发布与破坏性变更
- **无正式 Release**：过去 24 小时无新版本发布。
- **升级提醒**：`0.26.0 → 0.27.0` 后运行 DeepSeek V4 Flash 报错（[Issue #51758](https://github.com/vllm-project/vllm/issues/51758)），20 条评论，尚未收敛。
- **构建环境变更**：新增 CUDA 13.4rc1 image-only 预发布管线（[PR #52379](https://github.com/vllm-project/vllm/pull/52379)），面向 Rubin `sm_107`，不影响默认路径。
- **内部布局变更预告**：KV-Cache 布局重构将把缓存分配标准化为 `[L, B, H, N, C]`（[PR #51718](https://github.com/vllm-project/vllm/pull/51718)），尚未合并，但后续可能影响 KV connector / Mooncake 等组件。

## 新模型与硬件支持
- **CUDA 13.4 / Rubin**：[PR #52379](https://github.com/vllm-project/vllm/pull/52379) 为 `sm_107` 增加预发布镜像构建路径。
- **Kimi-K3 ROCm 支持追踪**：[Issue #50682](https://github.com/vllm-project/vllm/issues/50682) 跟踪 ROCm 上 Kimi-K3 的 feature enablement 与性能优化（AITER fused-moe a16w4/a8w4 已集成）。
- **Whisper 功能跟踪**：[Issue #25750](https://github.com/vllm-project/vllm/issues/25750) 汇总社区 Whisper 相关需求。
- **模型能力注册机制**：[PR #52459](https://github.com/vllm-project/vllm/pull/52459) 改为直接在模型侧注册 capabilities，降低新模型接入成本。
- **FlashInfer ReplaySSM（WIP）**：[PR #52506](https://github.com/vllm-project/vllm/pull/52506) 新增 ReplaySSM 算子支持。
- **模型加载生态**：[PR #50492](https://github.com/vllm-project/vllm/pull/50492) 文档新增 MatrixHub 作为模型加载源。

## 性能与优化
- **EPLB 向量化打包**：[PR #52556](https://github.com/vllm-project/vllm/pull/52556) 为 MoE 的 EPLB balanced packing 增加跨层向量化实现，opt-in `batched` 策略，默认行为不变。
- **同节点 TP=2 all-reduce 上限可配**：[PR #52555](https://github.com/vllm-project/vllm/pull/52555) 将 custom all-reduce 的 size ceiling（默认 8 MiB）暴露为 opt-in 配置，解决大 prefill chunk 在 TP=2 下回退到通用 all-reduce 的性能问题。
- **SM120 PCIe 服务栈**：[PR #47979](https://github.com/vllm-project/vllm/pull/47979) 包含 SP/async-TP enablement、FlashInfer spec-decode FULL cudagraphs、PCIe-safe 多卡通信。
- **KV-Cache 布局重构（6/N）**：[PR #51718](https://github.com/vllm-project/vllm/pull/51718) 统一各后端 KV cache 到 `[L, B, H, N, C]` 逻辑布局，是 RFC #42082 的核心落地。
- **Batch Invariant 优化跟踪**：[Issue #27433](https://github.com/vllm-project/vllm/issues/27433) 持续跟踪 batch invariant 剩余工作。
- **FusedMoE 解包**：[Issue #31985](https://github.com/vllm-project/vllm/issues/31985) 拆分 `FusedMoE` custom op，使 torch.compile 能进一步优化并降低 CPU overhead。
- **MRV2 spec decode with draft model**：[PR #43091](https://github.com/vllm-project/vllm/pull/43091) 在 Model Runner V2 中补全 draft model 投机解码支持（需 rebase）。

## 稳定性与回归

**重点问题，按严重程度排列：**

1. **严重 – Kimi-K2.6 输出整体损坏**：[Issue #42426](https://github.com/vllm-project/vllm/issues/42426)。8×B200 下间歇性地只在 reasoning 字段输出 `!!!!!!!!!!`，`content` 为 null；v0.20.0 / v0.18.1 均可复现，93 条评论，无 fix PR。
2. **严重 – MTP 投机解码流式输出掉字**：[Issue #52469](https://github.com/vllm-project/vllm/issues/52469)。流式响应在引号/字节合并边界丢词，非流式正常；状态 CLOSED，但未见明确修复合并。
3. **严重（已有 fix PR）– SM120 NVFP4 服务崩溃**：[PR #52553](https://github.com/vllm-project/vllm/pull/52553) 修复 GEMM workspace 在 CUDA graph 捕获后地址变化导致的 use-after-free，覆盖 #52540 / #34948 的部分报告。
4. **较高 – DeepSeek V4 Flash 升级回归**：[Issue #51758](https://github.com/vllm-project/vllm/issues/51758)，`0.26.0 → 0.27.0` 后报错，20 条评论，无 workaround。
5. **较高 – draft_model 投机解码 TP>1 崩溃**：[Issue #52023](https://github.com/vllm-project/vllm/issues/52023)。draft hidden_size 大于 target 时，TRT-LLM fused allreduce+RMSNorm workspace 按 target 尺寸分配导致 init 崩溃。
6. **中 – 混合模型 prefix caching 掉到 0%**：[Issue #45238](https://github.com/vllm-project/vllm/issues/45238)。`mamba_cache_mode="align"` 下 Mamba 状态 checkpoint 位置导致前缀缓存失效。
7. **中 – 令牌截断导致 KV 缓存错误命中**：[Issue #49377](https://github.com/vllm-project/vllm/issues/49377)。截断后 `block_hashes` 残留，可能命中错误缓存，纯 Python 可复现。
8. **中 – Qwen3.5-27B 批处理推理很慢/不工作**：[Issue #36010](https://github.com/vllm-project/vllm/issues/36010)，创建超 5 个月，20 条评论，长期未收敛。

**其余已报告/已修复：**
- ParallelLMHead 属性错误（[#52434](https://github.com/vllm-project/vllm/issues/52434)）
- MoE `ep_size` 整除断言失败（[#52435](https://github.com/vllm-project/vllm/issues/52435)）
- Partial LoRA 在 GatedDeltaNet 崩溃（[#47639](https://github.com/vllm-project/vllm/issues/47639)）
- MRV2 Gumbel 非有限 logits 修复（[PR #43249](https://github.com/vllm-project/vllm/pull/43249)）
- ROCm MRV2 FULL CUDA graph stream 修复（[PR #52538](https://github.com/vllm-project/vllm/pull/52538)）
- 优先级队列抢占重入修复（[PR #51574](https://github.com/vllm-project/vllm/pull/51574)）
- Mooncake KV connector 块生命周期修复（[PR #52372](https://github.com/vllm-project/vllm/pull/52372)）

## 对应用开发者的意义
- **安全：api_key 不再进入日志**：[PR #52523](https://github.com/vllm-project/vllm/pull/52523) 修复 `--api-key` / `VLLM_API_KEY` 在非默认参数启动日志中明文打印的问题，建议尽快跟进。
- **API 行为修复**：
  - batched chat completions 的 `echo=true` 只回显 assistant 轮次（[PR #52529](https://github.com/vllm-project/vllm/pull/52529)），不再把用户 prompt 拼进生成结果。
  - 非对象 JSON body 将从 HTTP 500 变为合法 4xx（[PR #52528](https://github.com/vllm-project/vllm/pull/52528)）。
- **可观测性增强**：[PR #52199](https://github.com/vllm-project/vllm/pull/52199) 在 `prompt_tokens_details` 中增加本地 vs 外部前缀缓存命中分解，便于诊断缓存效率。
- **稳定性提醒**：
  - Kimi-K2.6 在当前 vLLM 版本下输出可能整体损坏（[#42426](https://github.com/vllm-project/vllm/issues/42426)），生产环境建议加输出校验或推迟升级。
  - 若使用 MTP 投机解码，关注流式响应掉字问题（[#52469](https://github.com/vllm-project/vllm/issues/52469)）。
- **资源保护**：[PR #51896](https://github.com/vllm-project/vllm/pull/51896) 在完全下载前拒绝超大媒体，防止多路大文件下载拖垮 API 服务。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

## SGLang 动态日报 — 2026-08-17

### 1. 今日速览

今日最值得关注的是 AMD 发布 **2026 Q3 路线图**（#35003），明确 Helios 机架级系统与 MI45x 等新硬件的支持计划；同时社区出现多项正确性修复：**Gemma-4 radix cache 命中导致贪心输出翻转**（#34683）、**GGUF I-quant 权重 prefill 比 llama.cpp 慢 4-6 倍**（#35019）等 Bug 正在排查。PR 侧，主线正在进行 **SGLang 包结构清理**（#35062、#35060），并合入一批针对 KV 预留、GC 暂停与多模态占位符同步的运行时稳定性优化。

---

### 2. 版本发布与破坏性变更

**无新 Releases**。但以下合入/进行中的 PR 需要留意 API 或行为变化：

- **[Misc] Clean up python/sglang package structure**（#35062）— 移除废弃的 `eval` 包，将 frontend 全局配置移至 `sglang.lang`，kernel API logging 移至 `sglang.kernels`。涉及内部 import 路径变更，如有自定义脚本引用旧路径需适配。
- **Clean up environ.py: remove dead env vars, unify deprecation handling**（#35060）— 清理废弃环境变量描述符，统一 deprecated 警告机制。若使用了 `SGLANG_*` 旧环境变量，请关注后续合入时列出的移除清单。
- **Add explicit EPLB balancedness reporting modes**（#34998）— `--expert-balancedness-reporting` 以枚举参数替代布尔开关，Prometheus 导出与日志解耦。

---

### 3. 新模型与硬件支持

- **[Model] Add native SenseNova U1 multimodal generation and interleave serving**（#35038）— 为 SenseNova U1 添加原生语言/多模态理解、有界 flow matching 图像生成、OpenAI 兼容 T2I/IT2I API，以及 flow-prefill CUDA graph 支持。
- **[diffusion][Model] Support MAGI-2-preview**（#35011）— 请求支持 SandAI 的 114B MoE 扩散模型，可在一个去噪轨迹中联合生成视频与同步立体声音轨。
- **[KDA] Route Kimi-Linear through native Cake kernels**（#34946）— 依赖 FlashInfer #4535，Kimi-Linear 算子在 KDA serving 下走原生 Cake kernel 路径。
- **[BCG][6/N] Allow prefill breakable CUDA graph for the Kimi archs**（#34245）— 修复 Kimi 配置中 `is_multimodal` 误判问题，使仅文本场景下也可启用 BCG。
- **[amd] AMD Development Roadmap (2026 Q3)**（#35003）— 新季度路线图：聚焦 **Helios 机架级系统、MI45x (gfx1250)、Ryzen AI Halo (gfx1151/1152)** 支持与性能优化。另见 2026 Q2 roadmap（#23494）的更新。

---

### 4. 性能与优化

#### 已合入/合入中的运行时应优化

- **[Engine] Freeze GC after server warmup**（#34999）— warmup 完成后调用 `/freeze_gc` 冻结 tokenizer/scheduler/detokenizer 进程的 GC，消除请求路径上的 GC 暂停。
- **Increase post-capture decode memory reserve**（#34996）— CUDA graph capture 后固定预留空间由 512 MiB 提升至 1536 MiB，避免 decode 缓冲区运行时 headroom 不足。
- **[VLM] Avoid synchronizing multimodal placeholder counts**（#34995）— placeholder 计数从 device mask 改为 host 端 request offsets 推导，消除调度路径上的 D2H 同步。
- **Fix world-size-one aliasing in MLP batch sync**（#34997）— 以 `repeat()` 替代 `expand().contiguous()`，避免 world size=1 时存储别名导致的 mask 写入互相覆盖。
- **Support unified SWA page mapping in attention metadata**（#35000）— 统一 full-attention 与 sliding-window 独立页表后的 decode metadata kernel 适配。

#### 性能问题报告

- **[Perf] No MMQ kernel for I-quant GGUF: 4-6x slower prefill than llama.cpp**（#35019）— IQ1~IQ4 系列 GGUF 权重缺少 MMQ kernel，批量 matmul 走慢速回退路径；K-quant 与 legacy Q* 不受影响。建议当前部署 I-quant GGUF 的用户关注该 issue 进展。

---

### 5. 稳定性与回归

#### 严重 / 高影响

- **[Bug] Radix cache hit changes temperature=0 outputs for Gemma-4**（#34683）— 18/40 个 greedy 请求因 radix cache 命中发生输出翻转；`--enable-deterministic-inference` 在 SM100 上启动失败。影响缓存命中的输出一致性，暂无 fix PR。
- **[Bug] The timeout setting is invalid in can_terminate_prefetch**（#35012）— `pool_transfers_done=false` 时，`can_terminate_prefetch` 的超时设置未生效，可能导致预取终止流程挂起或超时失控。
- **Fix context-boundary max_new_tokens clipping**（#33814）— 请求在接近 context 边界时被静默裁剪两个 token（如 `input=4080, requested=16, actual=14`），与 `--context-length` 声明不符。已有 fix PR。
- **[Bug] Triton device-pointer tables use int64 and overflow on Intel XPU USM addresses**（#35047）— Triton 设备指针表以 int64 存储，在 Intel XPU 的 USM 地址上发生溢出，影响 XPU 后端部署。

#### 中低影响

- **[Bug][Diffusion] TeaCache CFG lifecycle double resets serial CFG**（#35054）— 串行 CFG 被双重重置；CFG parallel 下状态泄漏。
- **[Bug][Diffusion] Spectrum CFG parallel skips negative-branch initialization**（#35053）— 负分支未初始化，跨请求复用 forecaster 状态。
- **[Bug] Inkling MTP crashes during draft-extend CUDA graph capture**（#35039）— 捕获时 `extend_prefix_lens=None` 触发 `AttributeError`。
- **[Feature] Bit-exact correctness coverage for Unified Radix Cache**（#34899）— 缓存损坏可能产生流畅但数值漂移的文本，现有 accuracy/KL 测试容差过高无法捕获；作者请求 bit-exact 测试覆盖。

#### 已合入/已有修复的回归

- **[Fix] Preserve custom all-reduce v2 for TP16 MNNVL**（#35061）— 修复 #32541 引入的回归：TP16 MNNVL 组丢失 custom all-reduce v2 默认启用的资格。
- **[Spec] Simplify compute_spec_v2_logprobs signature / Resolve shared-read ends / Multi-layer eagle last shared-read runner**（#35058、#35059、#35057）— 系列 spec 后端修复，清理身份 gather、共享读结尾解析逻辑。
- **fix(hicache): limit load-back pending to write-back**（#34519）— 将 `load_back_pending_id` 限定到实际需要的 write_back 模式，避免 HiCache 非必要挂起。
- **[Bug] Fix Dspark and Dflash state divergence across TP rank**（#33614）— 修复多 TP rank 下 Dspark/Dflash 状态发散。

#### 环境/硬件专项

- **[amd] Qwen3.5 GatedDeltaNet + dp-attention on ROCm/MoRI: HIP invalid configuration argument**（#31594，已关闭）— HIP kernel 参数非法导致 hang；同样见于 #31350（fused_qk_gemma_rmsnorm_with_gate 零尺寸 grid）。标记已关闭，建议复查对应修复是否已覆盖。
- **gRPC mode: --enable-metrics error message cites wrong servicer version**（#28298，已关闭）— `smg-grpc-servicer` 版本检查信息有误（0.5.3 → 应 0.5.5），且 v0.5.13 镜像内置 0.5.4 导致启动失败。已关闭，建议确认镜像更新。

---

### 6. 对应用开发者的意义

- **缓存正确性风险需要上游验证**：Gemma-4 的 radix cache 命中导致 greedy 输出翻转（#34683），意味着依赖缓存加速的应用可能在不同请求间得到不一致结果。若你的应用对输出确定性敏感（如评测、Agent 多步推理），建议在问题修复前显式控制缓存行为，或对 Gemma-4 模型做缓存旁路验证。
- **上下文长度边界行为将修正**：原版本在接近 context 边界时静默裁剪 `max_new_tokens`（#33814），该修复合入后，使用 `ignore_eos=True` 的请求实际输出长度会与请求值一致，应用侧需确认不受原有行为影响。
- **I-quant GGUF 部署需谨慎选型**：当前 IQ* GGUF 权重的 prefill 性能仅为 llama.cpp 的 1/4~1/6（#35019）。如果使用 GGUF 部署且对首 token 延迟敏感，建议暂用 K-quant 或确认模型支持非量化路径。
- **包结构清理影响内部 import**：#35062、#35060 的合入将改变部分 Python 模块路径。若你有自定义 SGLang 插件或脚本引用 `sglang` 内部模块，建议在升级前对照这两个 PR 修改 import。
- **GC 冻结与显存预留优化**：#34999、#34996 合入后，服务端请求路径上的延迟抖动应有所改善。对追求稳定尾延迟（P99）的在线 Agent 服务是正向信号。
- **AMD 生态持续跟进**：Q3 路线图（#35003）表明 SGLang 正积极适配 MI45x 与消费级 Ryzen AI 平台。在 ROCm 上部署的团队可关注后续驱动与 kernel 适配进展。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 动态日报 · 2026-08-17

## 1. 今日速览

过去 24 小时连发三个维护版本（b10451→b10453），核心是 LoRA 文件边界安全校验、chat 消息处理重构和 ggml_concat 清理。稳定性方面，Vision 在 AMD AI Max（Vulkan）上不可用、Gemma 4 + MTP 崩溃、SYCL 双卡 tensor 并行崩溃等问题持续发酵；同时多个修复 PR 已就绪，包括 MTP 显存分配修复（#26605）、SYCL 量化 KV decode 最高提速 169%（#26689）、训练模式 no-KV-cache 崩溃修复（#27199）。

## 2. 版本发布与破坏性变更

- **b10451**：新增 LoRA tensor 数据文件边界检查（#27056）。加载越界 LoRA 文件将直接报错而非静默越界读取，属安全加固，对正常使用无影响。下载：https://github.com/ggml-org/llama.cpp/releases/tag/b10451
- **b10452**：chat 模块重构 `supports_string_content` / `supports_typed_content` 能力检测（#27130）。涉及消息输入归一化逻辑，若你在 server / chat handler 层依赖这些标志位，建议回归测试多模态与文本对话混用场景。下载：https://github.com/ggml-org/llama.cpp/releases/tag/b10452
- **b10453**：移除部分 `ggml_concat` 算子使用（#27176）。影响面集中在模型图构建内部，需关注是否有自定义 graph 依赖该算子路径。下载：https://github.com/ggml-org/llama.cpp/releases/tag/b10453

**编译注意**：#27144 报告 vendor/cpp-httplib 0.53.1 在 MinGW/GCC Windows 构建中 `CreateFile2` 未声明，该 issue 已关闭，但使用 MinGW 工具链的开发者请确认最新 master 已修复。

## 3. 新模型与硬件支持

- **BailingMoE3 支持**（PR #26608）：新增 BailingMoE 3 架构，支持 Ling 3.0 flash 模型 + MTP，对应 issue #26590。https://github.com/ggml-org/llama.cpp/pull/26608
- **Motif 3 Beta 支持**（PR #26298）：新增 Motif 3 Beta 架构，实现 GDLA（Grouped Differential Latent Attention）——MLA 风格低秩投影 + 16 GQA KV heads。https://github.com/ggml-org/llama.cpp/pull/26298
- **DSpark speculators 格式支持**（PR #26275）：支持 vLLM speculators 格式（SpecForge / RedHat）导出的 DSpark draft 检查点，与 #25173 配合。https://github.com/ggml-org/llama.cpp/pull/26275
- **ROCm Docker 更新至 7.14.0**（PR #27145）：基础镜像升级 Ubuntu 26.04，新增新 GPU 支持列表，附带 "no usable GPU found" 的 workaround。https://github.com/ggml-org/llama.cpp/pull/27145
- **Metal 新增 `GGML_OP_DIAG_MASK_INF` 算子**（PR #27197）：补齐 Metal 后端算子覆盖，`test-backend-ops` 全部通过。https://github.com/ggml-org/llama.cpp/pull/27197
- **mtmd 加固**：mmproj 元数据标量类型校验与 layer 数量边界（PR #27202）、Idefics3 全景图 token 字符串模板回退方案（PR #27195），均为健壮性修复。

## 4. 性能与优化

- **SYCL 量化 KV decode TILE 内核**（PR #26689，merge ready）：Battlemage 上 decode 从 VEC 内核切到 TILE 内核，Qwen3.6-35B、Gemma 4 26B/12B 在 32K/118K 上下文下实测 **+42% ~ +169%**，零回归。https://github.com/ggml-org/llama.cpp/pull/26689
- **SYCL Q4_K 多列 MMVQ 去冗余**（PR #27062）：修复 DFlash 场景下 Q4 比 Q8/FP16 更慢的问题，避免目标列重复权重重建。https://github.com/ggml-org/llama.cpp/pull/27062
- **KleidiAI 构建系统重构**（PR #26077）：移除手动 kernel 源文件和 -march 标志，改由 KleidiAI 自身 CMake 管理，简化 ARM CPU 集成。https://github.com/ggml-org/llama.cpp/pull/26077
- **多卡 Prefill 流水线调度 RFC/PoC**（PR #24219）：提出 Intra-Prompt Pipeline Scheduling 方案，针对 split-mode 下多卡 prefill 利用率问题。https://github.com/ggml-org/llama.cpp/pull/24219
- **已报告的性能问题**：#26163 显示 Vega/gfx90c 更新驱动后 `maxComputeSharedMemorySize` 从 65536 降至 32768，导致 flash-attention tuning 被跳过，**-17% 吞吐**；#24437 显示 HIP `ROCWMMA_FATTN=ON` 在 gfx1151 上长上下文 prefill **-41%**。

## 5. 稳定性与回归

按严重程度排列，标注是否已有 fix PR：

**高危 / 数据损坏或崩溃**

- **Vision 在 AMD AI Max 上完全不可用**（#27124，15 评论）：Qwen 27B 3.6/3.8 + Vulkan，Windows 平台。无 PR。https://github.com/ggml-org/llama.cpp/issues/27124
- **CUDA SM_60（P100）静默精度损失**（#25593，15 评论）：FP32 数学被静默降为 FP16，两个 fork 已有修复但上游未合入。使用 Tesla P100 的用户建议关注。https://github.com/ggml-org/llama.cpp/issues/25593
- **Gemma 4 + MTP 崩溃**（#25522，12 评论）：CUDA，2080Ti 双卡环境。无 PR。https://github.com/ggml-org/llama.cpp/issues/25522
- **SYCL 双 Arc Pro B70 tensor 并行崩溃**（#27198，4 评论）：`--split-mode tensor` dev2dev_memcpy DEVICE_LOST。https://github.com/ggml-org/llama.cpp/issues/27198
- **ROCm TOP_K 在 ncols > 1024 崩溃**（#27021，3 评论）：bitonic kernel block-size 溢出，导致 DeepSeek V4 无法使用 ctx > 128K；#26746（gfx1151 RPC worker prefill 崩溃）疑似同源。https://github.com/ggml-org/llama.cpp/issues/27021
- **投机解码在量化目标上贪婪输出不一致**（#25618，11 评论）：draft-model 在 Q4_K_M 目标上与 vanilla greedy 输出不同，bf16 正常——量化目标下投机解码存在正确性风险。https://github.com/ggml-org/llama.cpp/issues/25618

**中危 / 功能回归**

- **`/v1/completions` 只返回生成 token 的 logprobs**（#27174，3 评论）：`echo: true` + `logprobs` 时 prompt logprobs 缺失，静默破坏 lm-eval 等所有 loglikelihood 评估。影响较大，目前无 PR。https://github.com/ggml-org/llama.cpp/issues/27174
- **Qwen3.6-35B-A3B 配 `--fit-target` 回归**（#27171，3 评论）：bisect 定位中。相关修复 PR #26605（MTP 显存分配，merge ready）和 #27207（修正 #25574 的 fit 回归）值得关注。https://github.com/ggml-org/llama.cpp/issues/27171
- **Qwen3.6-27B 双卡 CUDA 乱码**（#26257，3 评论）：RTX 5060 Ti + RTX 3060 组合，单卡正常。https://github.com/ggml-org/llama.cpp/issues/26257
- **Vulkan `--no-kv-offload` 立即 EOS / 乱码**（#24519、#23321）：Qwen3.6 系列在 Vulkan 后端关闭 KV offload 后输出异常，多个 issue 互相印证。https://github.com/ggml-org/llama.cpp/issues/24519
- **Qwen3-Coder 工具调用解析器缺陷**（#26987，5 评论）：模型跳过 `<tool_call>` 包装时 lazy trigger 永不触发，影响 agent 工具调用场景。https://github.com/ggml-org/llama.cpp/issues/26987
- **llama-server 退出静默 / 性能衰减**：#22275（Intel Arc 大 KV state prompt_save 退出）、#22360（Vulkan server 长时间运行后显著变慢）。https://github.com/ggml-org/llama.cpp/issues/22360

**低危 / 特定环境**

- Gemma4 gfx1151 无限生成（#26239）、OpenVINO Docker 多 GPU 不可用（#25562）、Vulkan 加载崩溃（#27072）、CUDA kernel stall watchdog（#27102）、3-GPU tensor 并行崩溃（#26837）、SYCL GPU hang with quantized KV + flash attention（#25692）。

**已有 fix PR 的稳定性问题**

- **llama-finetune 训练崩溃**（#27199，已提交 PR）：训练图引用 KV cache 但训练模式无 KV cache，GGML_ASSERT 失败，修复方案是让 ubatch 持有 encoder/decoder KV。https://github.com/ggml-org/llama.cpp/pull/27199
- **block-quantized `ggml_nbytes` 整数溢出 → 堆 OOB 读**（#27200，已提交 PR）：恶意 GGUF 可触发，安全相关。https://github.com/ggml-org/llama.cpp/pull/27200
- **tensor 维度校验乘法溢出**（#27204，已提交 PR）：与 #27203 相关，改用 size check 替代 `ggml_nelements` 乘法。https://github.com/ggml-org/llama.cpp/pull/27204
- **MTP/NextN 层在 auto VRAM fitting 中被错误分配**（#26605，merge ready）：修复 `--n-cpu-moe=0` 下 MiMo-V2.5 加载失败。https://github.com/ggml-org/llama.cpp/pull/26605

## 6. 对应用开发者的意义

- **logprobs 评估链路可能已损坏**：若你的应用或评测流水线依赖 `/v1/completions` 的 prompt logprobs（lm-eval、自定义 loglikelihood 计算），#27174 是一个静默回归——建议先升级到最新 master 验证，若仍复现请关注该 issue 的修复进展。
- **投机解码与 logprobs 不兼容问题将解决**：PR #27196 为 speculative decoding 场景补上 logprobs 支持，此前两者互斥。依赖 logprobs 做流式置信度判断的 Agent 框架可在合入后解锁投机解码。https://github.com/ggml-org/llama.cpp/pull/27196
- **chat 消息处理行为变化**：b10452 重构了 content 类型检测逻辑（string vs typed），使用多模态消息或自定义 content 结构的应用应在升级后做一轮兼容性验证。
- **MTP 模型部署注意**：如果使用 MTP/NextN 模型搭配 `--fit-target` 或 `--n-cpu-moe`，当前 master 存在显存分配或层位置错位问题（#27171），建议等待 #26605 / #27207 合入后再升级。
- **多卡与国产/非 NVIDIA 后端的生产风险**：今日多个高热度 issue 集中在 Vulkan（AMD AI Max、RX 6700 XT）、SYCL（Arc Pro B70）、ROCm（gfx1151）以及异构双卡 CUDA 配置。生产环境强烈建议锁定版本，并提前验证目标硬件组合。
- **安全修复值得立即跟进**：LoRA 边界检查（b10451）和 GGUF 解析相关溢出修复（#27200、#27204）均属于可被恶意文件触发的内存安全问题，处理不可信模型/适配器文件的服务端应尽快升级。
- **新的架构支持为 Agent 应用带来更多模型选择**：BailingMoE3（Ling 3.0，支持 MTP）和 Motif 3 Beta 的新架构支持意味着这些模型可以原生接入 llama.cpp 生态，对需要私有化部署的 Agent/工具调用场景是利好。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 动态日报 — 2026-08-17

## 1. 今日速览

- **qwen3.8 系列工具调用问题集中爆发**：多项 issue 报告 `/v1/chat/completions` 挂起、流式工具调用循环后报 `no user query found in messages` (500)，影响 Agent 工作流，尚无 fix PR。
- **Tool calling 回归波及 VS Code Copilot Harness**：#17444 确认 0.32.4/0.32.5 起工具调用在 VS Code 环境中失效，回退至 0.32.1 可恢复，社区讨论最热（33 条评论）。
- **多组解析/生成修复 PR 在审**：mann1x 提交的 thinking token budget、工具调用截断恢复、重复内容检测等一组 PR（#17563–#17567）持续更新，若合入将显著改善模型输出可靠性。

## 2. 版本发布与破坏性变更

过去 24 小时无新 Release。但 #17444 确认 0.32.4/0.32.5 已引入工具调用回归（VS Code GitHub Copilot Harness 中工具调用失效，回退 0.32.1 可恢复）。此外，多个 issue 指向 0.32.2+ 的行为变化（详见稳定性部分）。

## 3. 新模型与硬件支持

- 无官方新增模型、架构或后端支持。
- 社区请求：#17773 请求支持 Upstage Solar Pro 4（524K 上下文），#17775 请求注册 DeepSeek V4 Pro 0813。🔥 #11243 Multi-Modal 支持（音频/实时视频输入）已积累 23 个 👍，长期开放中。
- ⚠️ Pascal GPU 支持疑似回退：#17766 报告 P6000/P4000 在 0.32.11–0.32.13 下不可用，尽管官方文档仍列明支持。需关注后续修复或文档更新。

## 4. 性能与优化

- **PR #17566（在审）**：为 thinking 引入 token 预算控制，防止模型在思考块内死循环烧光上下文。该 PR 同时配套 gemma4 解析修正（#17626）、工具调用恢复（#17565）、截断处理（#17564）与重复检测（#17563），属于同一问题系列。对长上下文 Agent 场景是直接的效率改进。
- **PR #17480（在审）**：benchmark 改用 HumanEval Python patch 提示作为 speculative draft 的输入分布，使调度/投机解码基准更贴近真实代码生成负载（chat 路径、PromptEvalCount 校准）。
- **PR #17799（在审）**：`/api/embed` 对超长输入截断时返回告警——目前是静默截断后返回 200，对 RAG 应用意味着语义失真而不自知，此 PR 将暴露该问题。

## 5. 稳定性与回归

按严重程度排列：

**🔴 CUDA 非法内存访问（确定性崩溃）**
- #17596：DGX Spark (GB10) 上大 prefill 触发 `ggml_cuda_flash_attn_ext_mma_f16` 非法内存访问，head_size=256 模型（qwen3-coder-next）可稳定复现。无 fix PR。
- #17740：qwen3.6:35b 在 prefill 阶段 `launch_mul_mat_q` 崩溃，与 prompt 长度强相关（≥684 token 必现），0.31.2→0.32.9 之间引入的回归。无 fix PR。

**🔴 qwen3.8 工具调用/API 端点问题**
- #17778：`/api/chat` 流式响应中模型循环调用工具后报 `no user query found in messages` (500)，导致对话中断。
- #17790：`POST /v1/chat/completions` 对 qwen3.8:27b 永久不响应，但 `/api/chat` 和 `ollama run` 正常——OpenAI 兼容层在该模型上有特定路径故障。
- #17812：Ollama Desktop（Windows）原生 web search 功能对同一模型报相同 500 错误。三者指向同一根因，优先级应最高。

**🟠 Tool calling 集成回归**
- #17444：0.32.4/0.32.5 起 VS Code Copilot Harness 中工具调用失效，33 条评论，回退 0.32.1 解决。未定位到具体 commit。

**🟠 MLX 运行时问题**
- #17792：`ollama stop` 报告成功并清空 `ollama ps`，但 MLX runner 子进程驻留、持续占用内存，需手动 kill。
- #17804：MLX 视觉 runner 在高分辨率图片（24.5MP）输入时请求 ~125GB Metal buffer 导致崩溃（M5 Pro 48GB 机器）。
- #17750（已关闭）：qwen3.8:27b-mlx 拒绝 developer role，导致 `ollama launch codex` 失效。关闭原因未明示。

**🟠 多 GPU / VRAM 记账问题**
- #17802：Vulkan 多 GPU 下调度器与 llama-server 的 VRAM 可用量严重失步（调度器认为 15GB 空闲、llama-server 只看到 1.1GB），导致不必要的 CPU 回退。
- #17780：双 NVIDIA GPU（5060 Ti + 5090）下 Ollama 对显存分配行为异常，无法将模型限定在指定 GPU 上运行。
- #17788：`ollama ps` 显示 2%/98% CPU/GPU 拆分怪异，层分配策略不透明。

**🟡 功能失效 / 行为错误**
- #17484：从 HuggingFace 拉取的模型 `ollama run` 报 `context deadline exceeded`，多模型复现。
- #17735：`/save` 失败报 `pull model manifest: file does not exist`，即使本地 manifest 有效。已有对应修复 PR #17806（回退到当前模型作为父模型）。
- #17754（已关闭）：qwen3.8:27b 在 Claude Code 下报 `system message must be at the beginning`，API 层 SYSTEM 消息排序处理错误。8 👍 但已关闭，需关注关闭理由。
- #17787：0.32.2 起 Jetson Orin Nano 上 gemma4 模型内存占用异常升高，即使下调 ctx_num 也无法加载。
- #17800：`ollama launch dsh` 在浏览器连接时重新同步 settings.yaml，覆盖用户手动修复的 contextWindow / maxTokens 配置。PR #17801 已提交修复。
- #17777：qwen3.5 微调模型（amoral-qwen3.5-9b）在 `"think": true` 时对非平凡 prompt 永不产出内容，模型在思考中途发出 `done_reason=stop`。
- #17785：Nemotron 3 的 reasoning-effort 控制参数（`enable_thinking`/`low_effort`/`reasoning_budget`）在 `/v1/chat/completions` 和 `/api/chat` 上均被静默忽略。
- #15910：macOS 上 0.20.2→0.22.0 升级后 `:cloud` 模型代理偶发连接重置，无 GIN 日志，长期未解决。

## 6. 对应用开发者的意义

- **qwen3.8 系列暂不宜作为 Agent 生产模型**：OpenAI 兼容端点挂起（#17790）及工具调用循环后 500（#17778、#17812）直接影响依赖 `/v1` 的 Agent 框架。如必须使用，请先用 `/api/chat` 路径验证，或固定 0.32.1。
- **工具调用回归影响面广**：VS Code Copilot Harness 集成（#17444）与 Claude Code 集成（#17754）均受影响。建议在升级 0.32.4+ 前对工具调用路径做端到端回归测试，确认可回退 0.32.1 作为临时方案。
- **OpenAI 兼容层的边界行为正在被补齐**：PR #17239 修复 `/v1/responses` 在命中 `max_output_tokens` 时仍然上报 `completed` 的问题（将改为 `incomplete`）——依赖状态字段做流量统计或重试的开发者应关注。
- **嵌入静默截断将不再无痕**：PR #17799/#17543 会让 `/api/embed` 在截断时给出告警。在此之前，RAG 管线应对超长输入自行做分块或显式传 `truncate: false`，避免检索结果悄悄失真。
- **`ollama launch dsh` 配置覆盖 bug**（#17800）已定位并有 PR #17801 在审。受影响用户可暂时避免在浏览器连接后手动改 settings.yaml，等待修复合入。
- **推理可靠性修复 PR 集中在审**：thinking token budget（#17566）、工具调用截断恢复（#17564/#17565）、重复内容检测（#17563）以及 `/save` 父模型回退（#17806）若能合入，将显著改善长对话和 Agent 场景下的稳定性。现阶段建议对超长对话设置外部超时和重试机制作为兜底。

---
*本日报基于 github.com/ollama/ollama 公开 issue/PR 数据生成，数据采集时间 2026-08-17。*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 动态日报 — 2026-08-17

## 1. 今日速览

LiteLLM 过去 24 小时发布 v1.97.0 稳定版与 v1.98.0-rc.1 候选版，均强化了 Docker 镜像 cosign 签名验证。社区活跃度保持高位：31 条 Issue 更新、145 条 PR 活动，其中多条针对 WebSocket passthrough、Bedrock batch 计费与 cost-based-routing 的修复值得关注。此外，OpenAI gpt-5.4 空输出问题终于迎来对应 fix PR（#31332）。

---

## 2. 版本发布与破坏性变更

### v1.97.0（稳定版） / v1.98.0-rc.1（候选版）

两个版本均未披露具体功能变更，但都包含 Docker 镜像签名信息的补充说明（cosign 签名密钥自 commit `0112e53` 起统一）。

- 变更要点：所有 LiteLLM Docker 镜像均使用 cosign 签名，用户拉取镜像后可验证完整性。
- 注意：如果您在 CI/CD 中自动拉取镜像，建议增加 cosign verify 步骤，避免供应链风险。
- 链接：[v1.97.0](https://github.com/BerriAI/litellm/releases/tag/v1.97.0) · [v1.98.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.98.0-rc.1)

---

## 3. 新模型与硬件支持

### 新增/改进的 Provider 与模型支持

- **OpenCode 作为一等 Provider**（PR #37103）：新增 `opencode_go` 与 `opencode_zen` 两个变体，支持 Chat Completions、Anthropic Messages、OpenAI Responses 三种 wire format。适合使用 OpenCode API 的 Agent 开发场景。
  https://github.com/BerriAI/litellm/pull/37103

- **ElevenLabs WebSocket streaming-input TTS**（PR #37084）：新增低延迟 WebSocket TTS 端点，支持 LLM 流式输出实时合成语音，无需缓冲完整文本（减少数百毫秒首包延迟）。属于功能性增强。
  https://github.com/BerriAI/litellm/pull/37084

- **Azure gpt-realtime-2 定价族**（PR #31565）：新增 `azure/gpt-realtime-2`、`-2.1`、`-2.1-mini` 的成本映射，并修正 realtime 图像输入按 token 独立计费的问题。
  https://github.com/BerriAI/litellm/pull/31565

### 待支持的功能请求

- **Azure AI Foundry Agents v2**（Issue #25372）：请求支持 Responses API + `agent_reference` 方式引用 agent（当前仅支持旧的 Assistant API）。
  https://github.com/BerriAI/litellm/issues/25372

- **Fireworks AI 模型接入 Azure Foundry**（Issue #26618 已关闭）：请求支持 DeepSeek V3.2、gpt-oss-120b、Kimi K2.5、MiniMax M2.5，已关闭（可能已合并或以其他方式处理）。
  https://github.com/BerriAI/litellm/issues/26618

- **OpenAI / Azure OpenAI Skills 路由**（Issue #37074）：请求新增 Skills API 的 CRUD、版本操作、内容获取等代理能力。
  https://github.com/BerriAI/litellm/issues/37074

---

## 4. 性能与优化

今日无显式的吞吐/延迟/显存优化合入报告，但以下两项间接影响性能体验：

- **ElevenLabs WebSocket TTS 端点**（PR #37084）显著降低流式语音合成的端到端延迟（详见上节）。
- **Bedrock batch 取消支持**（PR #34087）：`POST /v1/batches/{id}/cancel` 现在会调用 Bedrock `StopModelInvocationJob`，避免无法取消的作业持续计费至完成——这对成本控制是实打实的优化。
  https://github.com/BerriAI/litellm/pull/34087

---

## 5. 稳定性与回归

以下按严重程度排序，并标注是否已有修复 PR。

### 🔴 高严重度

- **gpt-5.4 返回空 Responses 输出 + completion() bridge 失败**（Issue #25429，19 条评论）：`litellm.responses()` 返回空 output，`completion()` 桥接报 "Unknown items in responses API response: []"。已在 v1.83.4 复现，影响面大。
  - **已有 fix PR**：#31332（backfill response.completed output from output_item.done events），处于 open 状态。
  - Issue: https://github.com/BerriAI/litellm/issues/25429 · PR: https://github.com/BerriAI/litellm/pull/31332

- **Payload tags 不再被识别**（Issue #27460，7 条评论）：v1.83.9-nightly 之后，metadata.tags 传递的标签失效。疑似回归。
  - 暂无直接 fix PR。
  - https://github.com/BerriAI/litellm/issues/27460

- **Bedrock rerank 升级后 broken**（Issue #28561）：v1.83.14 → v1.85.0 后，Bedrock rerank 请求报 `Unable to map Bedrock request to provider`。
  - 暂无直接 fix PR，作者已给出基于 changelog 的 root cause 推测。
  - https://github.com/BerriAI/litellm/issues/28561

### 🟡 中严重度

- **MCP 路由未授权时返回 HTTP 500 而非 401**（Issue #37080）：`Authorization` 缺失/畸形时，ProxyException 逸出到通用 handler。
  https://github.com/BerriAI/litellm/issues/37080

- **Gemini `interactions.create()` 静默丢弃 `response_format`**（Issue #36928）：代理模式下响应格式参数丢失，影响结构化输出。
  https://github.com/BerriAI/litellm/issues/36928

- **管理员路由拒绝返回 401 而非 403**（Issue #37108）：非管理员访问 admin-only 路由时状态码错误，且 Prometheus 异常状态记录为 `None`。
  https://github.com/BerriAI/litellm/issues/37108

- **cost-based-routing 下 `compression_savings_spend` 和 `prompt_caching_savings_spend` 恒为 $0**（Issue #37117）：多 deployment 场景下成本路由优惠统计失效。
  https://github.com/BerriAI/litellm/issues/37117

- **Pass-through 非流式响应丢弃上游返回的 cost/tokens**（Issue #37105）：`x-litellm-response-cost` 等 header 合同在非流式 `/v1/messages` 被忽略。
  - 相关增强请求：#37107（让 pass-through 目标上报实际提供服务的模型名）。
  https://github.com/BerriAI/litellm/issues/37105

- **Bedrock CountTokens 对 Claude Opus 5/Sonnet 5 不支持**（Issue #37102）：LiteLLM 静默返回缩水的 token 计数，导致用量统计不准。
  https://github.com/BerriAI/litellm/issues/37102

- **`/v1/messages` 路由 openai/ 模型时错误走 Responses API**（Issue #37088）：自定义 `api_base` 只提供 `/chat/completions`，但请求被路由到 `/responses`；`use_chat_completions_api` 则返回空内容。
  https://github.com/BerriAI/litellm/issues/37088

- **`/v1/messages` 丢弃 `stop_sequences`**（Issue #37118）：Claude Code 场景下停止序列失效。
  - 另有一批 Claude Code 相关 issues：#37102、#37105、#37107、#37088，值得关注。说明 LiteLLM 正在为 Claude Code 生态积极适配。
  https://github.com/BerriAI/litellm/issues/37118

- **`GET /v1/models` 忽略 `user.models` 限制**（Issue #26420）：用户可看到完整模型列表，但调用时返回 401，造成体验割裂。
  https://github.com/BerriAI/litellm/issues/26420

### 🟢 低严重度 / 工具链

- **uvicorn 启动 URL 打印为 `%s://%s:%d`**（Issue #37121 由 PR #37122 修复）：仅在真实 TTY（彩色日志）下复现，CI/Docker 中不显示。已有两个 fix PR：#37122、#37123（secret redaction 相关）。
  - PR: https://github.com/BerriAI/litellm/pull/37122 · https://github.com/BerriAI/litellm/pull/37123

### 其他值得注意的修复 PR（Open 状态）

- **WebSocket passthrough for OpenAI prefixes**（PR #36151）：修复 `/openai` 和 `/openai_passthrough` 下 WebSocket 升级返回 403 的问题，`client.realtime.connect()` 与 `client.responses.connect()` 可正常穿透代理。配套 CI 镜像 PR #37120 已关闭。
  https://github.com/BerriAI/litellm/pull/36151

- **Batch 定价修复**（PR #37077）：从 deployment 的 model 和 rates 计价检索的 batch，避免 Bedrock batch 出现 0 成本、忽略自有 rates 等问题。
  https://github.com/BerriAI/litellm/pull/37077

- **realtime session 定价覆盖**（PR #36958）：deployment 的 `model_info` 定价覆盖此前被忽略，现可正确应用。
  https://github.com/BerriAI/litellm/pull/36958

- **Count Anthropic image blocks 而非 raise**（PR #33861）：token_counter 遇到图片内容块不再抛异常。
  https://github.com/BerriAI/litellm/pull/33861

- **修复 Anthropic 流中重复的 `message_start`**（PR #33859）：reasoning 与 content 同 chunk 时的重复问题。
  https://github.com/BerriAI/litellm/pull/33859

- **Agent Shin 自动关闭宽限期从 2h 延长至 24h**（PR #37119）：面向外部贡献者的友好度改进，避免误关。
  https://github.com/BerriAI/litellm/pull/37119

---

## 6. 对应用开发者的意义

- **Claude Code / 消息端点用户注意**：#37118（stop_sequences 丢弃）、#37088（错误路由到 Responses API）、#37105（pass-through 费用丢失）三个问题直接影响 Claude Code 集成，升级到最新版前建议回归测试 `/v1/messages` 核心链路。
- **WebSocket 场景解禁**：PR #36151 修复了 OpenAI prefix 下的 WebSocket 403，使用 `client.realtime.connect()` 或 `client.responses.connect()` 的 Agent 应用现在可穿透 LiteLLM 代理，值得尝试验证。
- **成本核算需谨慎**：若您依赖 cost-based-routing 的缓存节省统计或 pass-through 的费用回传，当前版本存在准确性问题（#37117、#37105），建议在计费侧做交叉校验；batch 任务的定价与取消能力正在修复中（#37077、#34087）。
- **安全与合规**：v1.97.0 起的镜像签名验证应纳入 CI 拉取流程；MCP 路由 401/500 问题（#37080）与 admin 路由 401/403 问题（#37108）涉及 API 语义正确性，在安全审计场景下需留意。
- **新能力预留**：OpenCode 一等支持（#37103）和 ElevenLabs WebSocket TTS（#37084）是面向 Agent 实时交互的新基础设施能力，适合语音 Agent 与多 Provider 路由场景提前评估。

---

*本日报基于 GitHub 公开数据生成，数据范围：2026-08-16 至 2026-08-17。*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 动态日报 2026-08-17

## 1. 今日速览

过去 24 小时 Unsloth 的核心动态集中在 Studio/Desktop 前端性能攻关：danielhanchen 连续提交 #8992、#9014、#9042、#9038、#9047 等 PR，针对长线程卡顿和流式渲染瓶颈做系统性优化，500 条消息线程的菜单操作从 42 秒降至 0.5 秒。功能层面，滚动上下文窗口 PR #8961 落地，直接回应社区高赞请求 #7472；#8794 为 Studio 新增 Higgs/MOSS/MiniMax 音频模型支持。稳定性方面，30+ 条活跃 Issue 覆盖 Web UI 崩溃、ROCm 后端不可用、Windows 安装失败等多平台问题，其中 #8998 已有修复 PR #9002。

## 2. 版本发布与破坏性变更

无正式版本发布。以下 PR 影响安装/构建行为，建议关注：

- **PR #8835** [OPEN] Studio: verify the installed version after the update pass, without encoded probe payloads。重新引入更新后版本验证逻辑，但避免 base64 编码执行（此前因杀毒软件误报被回滚）。安装/更新脚本行为将变化。
  链接：https://github.com/unslothai/unsloth/pull/8835
- **PR #6955** [OPEN] Add cu128/cu126/cu130 torch 2.11.0 extras (torch2110) with xformers 0.0.35。新增 torch 2.11.0 + xformers 0.0.35 的 CUDA extras 家族，依赖解析将多一个版本维度。
  链接：https://github.com/unslothai/unsloth/pull/6955

## 3. 新模型与硬件支持

- **PR #8794** [OPEN] Studio: add Higgs, MOSS, and MiniMax audio models。为 Studio 添加原生音频支持：`bosonai/higgs-tts-2-3b-base`、`OpenMOSS-Team/MOSS-TTS-Local-Transformer-v1.5`、`OpenMOSS-Team/MOSS-TTS-Nano-100M`、`multimodalart/higgs-audio-v3-tts-4b-transformers`、`MiniMaxAI/MiniMax-Music3`（TTS 基于 transformers，音乐生成走音频路径）。
  链接：https://github.com/unslothai/unsloth/pull/8794
- **PR #5748** [OPEN] Add Unsloth Docker images (base + Studio) for any NVIDIA GPU host, Ampere through Blackwell。新增 Docker 镜像，覆盖 sm_80~sm_120（A100/RTX 30/40/H100/B100/B200/RTX 50 系/RTX 6000 Pro Blackwell），并原生支持 aarch64（GB10/ Grace、DGX Spark），发布到 docker.io/unsloth。回应了用户对 DGX Spark 的诉求（#8848）。
  链接：https://github.com/unslothai/unsloth/pull/5748
- **PR #4958** [OPEN] [auto-approved] Install ROCm PyTorch on Windows AMD via repo.radeon.com。Windows AMD 安装不再回退 CPU-only PyTorch，改为从 repo.radeon.com 拉取 ROCm 版 PyTorch。
  链接：https://github.com/unslothai/unsloth/pull/4958
- **PR #9044** [OPEN] fix(studio): Windows ROCm reports Unknown VRAM on single-GPU hosts with an iGPU。修复 Windows ROCm + iGPU 混合场景下 VRAM 显示 Unknown 的问题。
  链接：https://github.com/unslothai/unsloth/pull/9044
- **Issue #8507** [CLOSED] MiniMax-H3 checkpoint 在 Unsloth Desktop 中加载失败，原因是 `/usr/bin/sd` 的 stable-diffusion.cpp 构建版本早于 MiniMax-H3 支持（RTX 5090 + 96GB DDR5 环境）。
  链接：https://github.com/unslothai/unsloth/issues/8507
- **Issue #8881** [OPEN] [Feature] reasoning effort slider / selector。Qwen 3.8 27B 发布后，用户呼吁暴露 reasoning effort 滑杆，避免手动提取 jinja 模板。
  链接：https://github.com/unslothai/unsloth/issues/8881

## 4. 性能与优化

- **PR #8992** [OPEN] Studio: make the chat thread stop getting slower as it fills。修复长线程 UI 卡顿：500 条消息线程打开一个消息菜单从 **42 秒降至 0.5 秒**，且不再随线程长度退化。Fixes #8977。
  链接：https://github.com/unslothai/unsloth/pull/8992
- **PR #9042** [OPEN] Chat: stop a message delete from re-rendering the whole thread。删除消息时不再重渲染整个线程：300K 字符线程上从 **472ms 降至约 2ms**。基于 #9016 剖析结果。
  链接：https://github.com/unslothai/unsloth/pull/9042
- **PR #9014** [OPEN] Studio: stop every message part re-rendering on each streaming chunk。流式生成时，已完成的 message part 不再随每个 chunk 重建，消除长回复期间 Studio 卡顿的主路径。
  链接：https://github.com/unslothai/unsloth/pull/9014
- **PR #9038** [OPEN] Studio: stop the streaming prefix checks scanning the whole reply。流式路径上 4 个 prefix 检查从 `startsWith` 全量扫描改为 slice 后原生比较，V8 可先按 length 拒绝。
  链接：https://github.com/unslothai/unsloth/pull/9038
- **PR #8935** [OPEN] Studio: incrementally tokenize streaming code fences。超过 2000 字符的流式代码块改为增量 Shiki tokenize，避免每次 250ms 刷新触发全量高亮。
  链接：https://github.com/unslothai/unsloth/pull/8935
- **PR #9047** [OPEN] Studio: let a settled thread skip the code blocks it is not showing。移除全局 `content-visibility: visible !important`，让不可见代码块跳过 streamdown 渲染优化。
  链接：https://github.com/unslothai/unsloth/pull/9047
- **PR #9016** [OPEN] Studio: measure where a heavy thread stalls, across engines and thread size。新增以"线程内容字符数"为轴的性能基准框架，用于定位长线程卡顿瓶颈。
  链接：https://github.com/unslothai/unsloth/pull/9016
- **PR #8961** [OPEN] Studio: add rolling context windows for local GGUF chat。为本地 GGUF 聊天增加 `truncate_oldest` 溢出策略：保留系统指令、当前用户任务和原子 tool-call/result 交换，自动丢弃最旧完整轮次，不删除历史记录。
  链接：https://github.com/unslothai/unsloth/pull/8961
- **Issue #9037** [OPEN] Long Qwen3.8 GGUF chats lose reusable prompt state after model reload, causing ~11 minute full prefill。长聊天模型 reload 后丢失可复用 prompt state，导致约 **11 分钟全量 prefill**（Kubuntu 24.04 / Linux 7.0）。
  链接：https://github.com/unslothai/unsloth/issues/9037
- **Issue #8988** [OPEN] Studio: the ctx_checkpoints term in the KV estimator is unused, and models host RAM as VRAM。KV cache 估算中 `ctx_checkpoints` 参数是死代码；且存在把宿主 RAM 当作 VRAM 的错误估算路径。danielhanchen 亲自报告。
  链接：https://github.com/unslothai/unsloth/issues/8988

## 5. 稳定性与回归

按严重程度排列，已关联 fix PR 的单独标注。

**高严重度**

- **#9046** [OPEN] `crypto.randomUUID` 在非安全 HTTP 下崩溃 Studio Web UI（LAN 访问场景）。Debian 13 / main `c87fe20`。
  链接：https://github.com/unslothai/unsloth/issues/9046
- **#8998** [OPEN] ROCm 后端无法加载任何模型（Studio 桌面版 + Web UI 均受影响）。**已有 fix PR #9002**：在 HIP/ROCR 库不匹配时，用捆绑 HIP 重试 llama-server。
  链接：https://github.com/unslothai/unsloth/issues/8998
  Fix：https://github.com/unslothai/unsloth/pull/9002
- **#9039** [OPEN] 通过自定义 OpenAI 兼容 endpoint 聊天时，每次工具调用均失败：`invalid tool call arguments (invalid_request_error)`。
  链接：https://github.com/unslothai/unsloth/issues/9039
- **#9032** [OPEN] 下载新模型时 RAM 用量尖峰（Studio Web UI）。
  链接：https://github.com/unslothai/unsloth/issues/9032
- **#8841** [OPEN] fix: fail fast when the installed llama.cpp prebuilt has no kernels for this GPU。安装时 baked 的 GPU kernel（如 T4 云镜像）落到不兼容 GPU（如 H100）上时，llama-server 每次都启动失败并误导性重试约 8 次。已有 PR #8841 建议快速失败。
  链接：https://github.com/unslothai/unsloth/pull/8841

**中严重度**

- **#8991** [OPEN] Windows 安装失败：`Install failed to create directory $HOME\AppData\Local\uv\cache`: Cannot create a file when that file already exists (os error 183)。
  链接：https://github.com/unslothai/unsloth/issues/8991
- **#9043** [OPEN] Windows 10 和 Linux Mint 两套完全不同的环境，均因代理网络导致安装多阶段失败。
  链接：https://github.com/unslothai/unsloth/issues/9043
- **#9045** [OPEN] 聊天标题自动生成失效（lcpp 下对话本身正常）。与 #9046 同环境（Debian 13 / main）。
  链接：https://github.com/unslothai/unsloth/issues/9045
- **#8678** [OPEN] Ubuntu Mate 上 Unsloth Desktop (.deb) 麦克风权限被 WebKitGTK media-stream 未启用阻断，语音输入不可用。
  链接：https://github.com/unslothai/unsloth/issues/8678
- **#9001** [OPEN] Windows 11 上误点"Don't allow"后，任何设置（系统隐私、重装）都无法重新启用麦克风。
  链接：https://github.com/unslothai/unsloth/issues/9001
- **#8927** [OPEN] "Partial Download. Click to continue." 点击无反应（Studio 部分下载状态不可恢复）。
  链接：https://github.com/unslothai/unsloth/issues/8927
- **#9037** [OPEN] 长 Qwen3.8 GGUF 聊天 reload 后丢失可复用 prompt state。见性能部分。
  链接：https://github.com/unslothai/unsloth/issues/9037

**低严重度 / 体验**

- **#8940** [OPEN] 加载 Ideogram 4 on Mac 报 `'_Noop' object is not iterable`（macOS 26.5.2 / v0.1.800-beta）。
  链接：https://github.com/unslothai/unsloth/issues/8940
- **#8972** [OPEN] `KernelPreference` enum 在 Python 3.13 / torch 下触发 `_pytree` 原生支持警告，Intel 后端不匹配。
  链接：https://github.com/unslothai/unsloth/issues/8972
- **#8854** [OPEN] 让模型"列出该线程/项目所有文件"时工具调用抛错。
  链接：https://github.com/unslothai/unsloth/issues/8854
- **#8945** [OPEN] Windows Strix Halo 上运行 Qwen3.8 27B UD-Q8_K_XL 接 Claude Code 时 Unsloth Desktop 偶发无响应（Reddit 来源）。
  链接：https://github.com/unslothai/unsloth/issues/8945
- **#8925** [OPEN] 手机息屏导致流式连接中断/网络错误。
  链接：https://github.com/unslothai/unsloth/issues/8925
- **#9036** [OPEN] Desktop 对 JPG/PNG 的拖放支持间歇性失效。
  链接：https://github.com/unslothai/unsloth/issues/9036
- **#8936** [CLOSED] Windows 11 / RTX 4070 上无法创建项目。
  链接：https://github.com/unslothai/unsloth/issues/8936
- **#9040** [OPEN] Linux Mint 22.3 上设置菜单工具调用 Z-clipping（渲染层叠问题）。
  链接：https://github.com/unslothai/unsloth/issues/9040

**安全相关**

- **#8868** [CLOSED] [Security] `-H 0.0.0.0` 在 MacOS 上暴露了错误的 IP 地址。
  链接：https://github.com/unslothai/unsloth/issues/8868
- **#6323** [CLOSED] 本地模型经 Unsloth Studio 联网搜索时，哪些数据会发送给哪些外部方，隐私/匿名性边界讨论。
  链接：https://github.com/unslothai/unsloth/issues/6323

## 6. 对应用开发者的意义

- **长会话 UI 性能不再线性退化**：#8992、#9014、#9042、#9038 这组 PR 合入后，500 条消息级线程从操作卡顿变为流畅交互。若你在 Unsloth Studio 之上构建 Agent/IDE 类应用，长会话体验将显著改善。
- **滚动上下文窗口即将内置**：#8961 为本地 GGUF 聊天提供 `truncate_oldest` 策略，自动保留系统指令和原子工具调用链。这是社区高赞请求 #7472 的实现，适合需要长时间持续对话的 Agent 场景。但注意 #9037 显示长会话 reload 后 prompt state 仍不稳定，依赖跨 reload 恢复的应用需自行管理状态。
- **自定义 endpoint 工具调用仍需验证**：#9039 报告所有 OpenAI 兼容自定义 endpoint 的工具调用失败（`invalid_request_error`），#8854 的文件列表工具也有问题。如果你通过 Studio 的 custom endpoint 对外提供 Agent 服务，建议在依赖升级前做一轮工具调用回归。
- **新音频模型将打开语音 Agent 集成窗口**：#8794 若合入，Studio 将原生支持 Higgs/MOSS TTS 和 MiniMax Music3，语音对话/TTS Agent 可以直接跑在本地模型上。
- **硬件门槛继续降低**：Windows AMD ROCm 安装（#4958）、Docker 镜像覆盖 Ampere→Blackwell 和 DGX Spark（#5748）落地后，跨品牌 GPU 和云环境的部署路径更清晰，CI 集成可考虑镜像化。
- **注意版本升级风险**：torch 2.11.0 extras（#6955）和更新后版本验证（#8835）会影响依赖解析与安装自动化，升级前建议在 Docker 或隔离脚本中先验证。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*