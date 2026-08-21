# AI 基础设施日报 2026-08-21

> 生成时间: 2026-08-20 23:15 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施生态横向对比分析 — 2026-08-21

## 1. 生态全景

今日动态显示，AI 基础设施正处在「模型代际升级驱动 + 投机解码技术扩散 + 硬件多元化落地」三力叠加的阶段。Qwen3.5/3.6/3.8 系列成为所有推理引擎的适配压力源，同时也暴露了大量回归（SGLang token 循环、Ollama 工具循环 500、llama.cpp Blackwell 吞吐退化）；投机解码（MTP/DFlash/DSpark）已从 vLLM/SGLang 向 llama.cpp/Unsloth 全栈扩散，但各项目均出现不同程度的崩溃、死锁与精度不一致。硬件层面，ROCm、XPU、Ascend、Blackwell 从"实验支持"进入生产验证期，平台级正确性缺口集中爆发（gfx1151 KV 串扰、sm120 加载失败、MI355X MTP 0% 接受率）。工具调用（Agent）正确性问题从网关层蔓延到推理层和本地运行时，成为新的跨层红线。整体判断：功能迭代速度远大于稳定性收敛速度，生产落地必须以「锁定版本 + 模型级压测 + 工具链路回归」为前置条件。

## 2. 各项目活跃度对比

*以下为各日报明确引用的 PR/Issue 数量，非 GitHub 全量统计。*

| 项目 | 提及 Issues | 提及 PRs | Release 情况 | 当日焦点 |
|---|---|---|---|---|
| vLLM | 13 | 16 | 无新 Release | MTP/投机解码稳定性、ROCm/Kimi-K3、结构化输出兼容 |
| SGLang | 15 | 9 | 无新 Release | CI 稳定性、Qwen3.8 MXFP4/DFlash2、PD 调度缺陷 |
| llama.cpp | 10 | 10 | **9 个构建**（b10505–b10520） | ggml_rope_set_offset 多后端落地、server 睡眠态可观测性 |
| Ollama | 20 | 7 | 无正式版；v0.32.15 pre-release 验证通过 | ROCm KV 串扰、CORS 回归、MLX prefill 回退 |
| LiteLLM | 5 | 13 | 无新 Release（v1.96.2） | 多 pod 一致性、Rust core 路由、安全修复 |
| Unsloth | 15 | 11 | **v0.1.801-beta**（合并 200+ PR） | Auto Compaction、LAN Remote Access、studiobench 基准 |

**解读**：llama.cpp 保持高频发版节奏（24 小时 9 个构建）；vLLM 在 PR 数量上领先，且修复类 PR 密集，处于"还债"阶段；Ollama 问题流量最大（20 个 referenced issues），印证其作为"最广泛使用的本地入口"承受了最多的端侧兼容性压力；LiteLLM 与 Unsloth 的 PR 集中在架构级改造（多实例选举、Rust core、基准体系建设），而非零散修复。

## 3. 模型支持竞速

| 项目 | 今日落地/推进的新模型或架构 | 状态 |
|---|---|---|
| llama.cpp | **GraniteSWA / GraniteMoeSWA** | ✅ 随 b10514 正式发布，今日唯一官方 Release 的新架构 |
| llama.cpp | dots3-note（DSA+SWA）、DFlash2、LFM2+DSpark、GLM-4.5-Air MTP | 🔄 PR/WIP 阶段 |
| vLLM | DFlash2 DraftModel、Humming MoE MXFP4、XPU INC int4 | 🔄 PR 已提交 |
| vLLM | Kimi-K3 ROCm Day-0 拉通、GLM-5.2 支持 | 🔄 支持已合入，进入问题高发期 |
| SGLang | Qwen3.8 MXFP4 DCP、ROCm 7.14（gfx942/gfx950） | 🔄 已合入/推进中 |
| SGLang | Qwen3.8 DFLASH2、Ascend A5 跨代适配、XPU Qwen3.5 投机解码 | 🔄 PR/RFC/适配中 |
| Ollama | 无新模型/后端 | 仅社区请求（Solar Pro 4、Qwen3.8 云） |
| LiteLLM | gpt-image-2（fal.ai 专属配置 + 成本表） | 🔄 PR |
| Unsloth | 无新模型 | 仅社区请求（Ling 3.0） |

**结论**：
- **新架构广度**：llama.cpp 领先（GraniteSWA 正式发布，另有 4 个新架构在 PR/WIP）。
- **最新一代模型适配深度**：SGLang 最激进（Qwen3.8 MXFP4/DCP/DFlash2 全线推进），vLLM 紧随其后（Kimi-K3、GLM-5.2 均已进入 problem-fixing 阶段）。
- **规模化工程深度**：vLLM 最强（TP/PP/DP + 多硬件 + 量化路径同时铺开）。
- **Ollama 与 Unsloth 是消费方**：跟随上游 llama.cpp/vLLM 能力，自身不参与模型竞速；LiteLLM 不涉及。

## 4. 性能优化前沿

今日优化火力集中在五个方向：

| 方向 | 代表动作 |
|---|---|
| **投机解码** | vLLM 优化捕获批次选择（#50488）、MTP+结构化输出双修复（#53174）；llama.cpp 推进 DFlash2/自适应 MTP PR；SGLang 排查 EAGLE+DP Attention 死锁（#32527） |
| **KV cache** | vLLM 修复 KV offload 下 eagle 尾部块弹出（#52807）；llama.cpp 优化 q8_0 反量化（Vulkan #b10517 / Metal #b10506）；SGLang 移除 SWA free 路径 device sync（#35592）；Ollama 增加 MLX 前缀缓存恢复点（#17901） |
| **量化内核** | vLLM 新增 XPU INC int4 w4a8、Humming MoE MXFP4+block-FP8、RMSNorm+FP8 单读快速路径（#45428）；SGLang 调优 W4AFP8 DeepEP requant launch geometry（#35760）；llama.cpp AVX2 加速 IQ 大 batch（#27402） |
| **分布式通信** | vLLM 融合 PCP cache dispatch 与 NVLS multicast（#53173）、batch-sharded sample 将采样显存降为 1/P（#50465）；SGLang DCP KV 传输打包为 dest-contiguous RDMA 块（#35762）；网关层 LiteLLM 多 pod 选举/预算重置收敛（#36497/#36618） |
| **算子/调度基础设施** | llama.cpp 新增 `ggml_rope_set_offset` 算子并同步 CUDA/Metal，OpenCL/SYCL/WebGPU 跟进中（#27345）；Unsloth 建立 studiobench 真实路径基准（#9296-#9439 系列），治理 100K+ token 长上下文卡顿 |

**判断**：投机解码与 KV cache 依旧是推理引擎的核心战场；量化正从"支持某种格式"走向"为特定硬件微调内核 launch 参数"；分布式侧从纯通信优化走向「计算-通信融合」（PCP+NVLS、RDMA 块传输）；LiteLLM 的多实例一致性优化说明网关层的瓶颈已从功能覆盖转向运营可靠性。

## 5. 分层定位差异

| 项目 | 分层 | 核心定位 | 典型部署形态 | 与同层竞品差异 |
|---|---|---|---|---|
| **vLLM** | 生产级推理引擎 | 高吞吐在线服务、多 GPU/多节点（TP/PP/DP）、PagedAttention | 大规模集群、云厂商 | 分布式/量化/硬件支持最广，但 MTP 稳定性欠账最多 |
| **SGLang** | 生产级推理引擎 | 与 vLLM 同层，强在 PD 分离、RadixCache、多硬件后端 | 大规模集群（尤其 PD 架构） | 在 Qwen3.8 等最新模型适配速度上最激进 |
| **llama.cpp** | 本地/边缘运行时 | 轻量 GGML 生态、CPU/GPU 全平台、量化格式丰富 | 单机、边缘、嵌入式 | 发版最快（9 builds/24h）；黑盒应用（Ollama）的上游基座 |
| **Ollama** | 本地运行时（产品化） | 基于 llama.cpp 的易用封装 + MLX 后端 + Desktop/CLI | 开发者桌面、小团队 | 最广泛的端侧覆盖，也因此承接最多端侧兼容性 bug |
| **LiteLLM** | LLM 网关/控制面 | 多 provider 路由、预算/限流、认证安全、Rust core 演进 | 控制面代理层 | 独立于推理引擎，专注多 pod 一致性与安全边界 |
| **Unsloth** | 训练/微调 + 本地服务 | LoRA/CPT 微调、量化导出，Studio Desk 推理 | 数据科学家桌面、微调流水线 | 与 Ollama 同属「消费者」，但向上游贡献微调侧反馈（如 TP 下量化 KV cache 丢弃） |

**要点**：
- **vLLM 与 SGLang 是直接竞品**，今日问题高度重合（MTP、PD、结构化输出、Qwen3.x），可视为同一层级的两种实现策略。
- **llama.cpp 与 Ollama 是上下游关系**：llama.cpp 的 9 个 Release 直接决定 Ollama 的下一个稳定版能力；Ollama 的 gfx1151、MLX 等问题部分需要回溯到上游修复。
- **LiteLLM 独立于推理层**，其问题域（预算重置、多 pod 选举、JWKS）与其它五个项目完全不重叠，是控制面的独特生态位。
- **Unsloth 正从训练向推理渗透**（LAN Remote Access、Studio 服务化），与 Ollama 在桌面端形成潜在竞争。

## 6. 值得关注的趋势信号

**① 投机解码进入「主流但脆弱」阶段** — 4 个推理/运行时项目全部报告 MTP/spec decode 问题：vLLM 非法内存访问（#40756，41 评论）、76% 延迟回归（#35387）、GLM-5.2 在 MI355X 0% 接受率（#52833）；SGLang EAGLE+DP 死锁（#32527）；llama.cpp 自 b9935 回退（#25489）且量化下与 greedy 输出不一致（#25618）；Ollama 因上游并发崩溃长期锁定 qwen35 `numParallel=1`（#17144）。**信号**：投机解码是当前最大性能杠杆，也是最大生产风险源，模型级灰度压测是唯一防线。

**② Qwen3.x 代际升级成为全生态校验器** — Qwen3.5/3.6/3.8 的密集发布在所有层引发连锁反应：SGLang token 循环回归（#35723）、Ollama 工具循环 500（#17778）、Unsloth macOS 崩溃（#9279）、llama.cpp RTX 5090 吞吐退化（#27444）、vLLM prefix cache 命中率归零（#52897）。**信号**：每次 Qwen 大版本升级后，全栈回归测试应作为标准动作，尤其是结合 NVFP4/MXFP4 量化与投机解码的组合场景。

**③ 硬件多元化从「支持」走向「稳定」** — ROCm 7.14（SGLang #35319）、gfx1151 KV 串扰（Ollama #17847）、sm120 FP8 加载失败（vLLM #51884）、Blackwell watchdog（llama.cpp #27102）、XPU 量化补齐（vLLM #50501）、Ascend 跨代 RFC（SGLang #35709）。**信号**：非 CUDA 后端的「Day-0 支持」已经普遍，但平台级正确性（KV 隔离、内存寻址、量化算子兼容）将决定它们能否从演示走向生产。

**④ 工具调用正确性是新的跨层红线** — 从网关到微调层全线出现 Agent 链路缺陷：LiteLLM MCP auto-execute 劫持客户端 tool_use（#37031）；vLLM 请求级 `strict` 泄漏进 chat template 破坏工具调用（#52741）；SGLang DeepSeek-V4 流式双 chunk 丢工具调用（#35563）；Ollama 消息截断丢弃最近用户消息致 500（#17778）；Unsloth Nemotron 返回非法 JSON arguments（#9338）。**信号**：Agent 应用开发者应在应用层增加工具调用的结构校验、重试与硬性上限，不能假设基础设施层正确。

**⑤ 网关层进入「多实例一致性治理」期** — LiteLLM 单日 13 个 PR 中有 6 个聚焦多 pod 问题：batch 双重计费（#37685）、预算重置任务 N 倍放大（#36497）、elected job 重复执行（#36686）、JWKS 单点故障（#37690）。**信号**：LLM 网关的竞争已从「支持多少 provider」转向「大规模 fleet 下的计费/预算/认证一致性」，这对中大型企业选型是关键评判维度。

**⑥ 可观测性成为各层差异化竞争力** — llama.cpp 睡眠态可访问 `/metrics`（b10519）；vLLM 推进 per-request 投机解码统计（#48915）；LiteLLM 将 `/metrics` 移出事件循环并支持并发抓取（#37702）；Ollama `/metrics` 仍是 114👍 的两年老 feature request（#3144）。**信号**：基础设施团队应优先选择可观测性投入靠前的项目；对 Ollama 用户，监控缺口仍需自建 exporter 补位。

---

### 给 Agent/应用开发者的行动清单

1. **投机解码默认关闭**，除非针对具体模型完成压测（vLLM 关注 #40756/#35387，SGLang 关注 #35723，llama.cpp 关注 #25618）。
2. **工具调用链路增加防护层**：校验 tool_calls JSON schema、限制最大调用次数/上下文预算、对流式输出做 chunk 级缓冲（对应 Ollama #17778、SGLang #35563、LiteLLM #37031）。
3. **Ollama 用户暂时通过代理访问 API** 以绕过 CORS 回归（#17890 合入前）；生产环境避免在 Strix Halo 上使用 ROCm 后端（#17847 存在跨请求 KV 串扰）。
4. **LiteLLM 多副本用户**：批量计费与预算重置的双计费/放大问题（#37685/#36497）合入前，建议用单副本或外部计费对账兜底。
5. **锁版本策略**：llama.cpp 用户注意 b10509+ 的 `ggml_rope_set_offset` 引发 Step 3.7 失败（#27447，已关闭但需确认）；SGLang Qwen3.8 用户切勿使用 v0.5.17 release，从 main 构建。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 动态日报 — 2026-08-21

## 1. 今日速览

- 过去 24 小时无新版本发布，但修复类 PR 密集，投机解码（MTP）仍是社区最集中的稳定性与性能焦点。
- ROCm/Kimi-K3 与 GLM-5.2 支持进入问题高发期：MI355X 上出现 MTP 拒绝率 100% 的严重功能失效。
- 结构化输出与投机解码的兼容性问题正在被专门修复（PR #53174），提示生产环境需谨慎组合这两个特性。

## 2. 版本发布与破坏性变更

无新 Release。

- **[PR #53139] Remove FlashInfer DSpark DCP support** — 移除 FlashInfer 在 decode context parallelism（DCP）下的 DSpark 扩展，仅保留 TP-only 路径。使用该组合特性的用户需关注升级影响。
  https://github.com/vllm-project/vllm/pull/53139

## 3. 新模型与硬件支持

- **[PR #50501] XPU 新增 INC int4 w4a8 后端** — Intel GPU 上为 int4 权重 + 动态 per-token int8 激活接通 oneDNN `int4_gemm_w4a8`，填补 XPU 量化路径空白。
  https://github.com/vllm-project/vllm/pull/50501
- **[PR #51332] Humming MoE 支持 MXFP4 权重 + block-FP8 激活** — 将 TMA 描述符不支持的 K-block 256 限制到 128，解决 `cuLaunchKernelEx` 报错。
  https://github.com/vllm-project/vllm/pull/51332
- **[PR #52816] DFlash2：局部卷积 + 候选选择器** — 新增 `DFlash2DraftModel` 草稿架构，现有 `DFlashDraftModel` 检查点不受影响。
  https://github.com/vllm-project/vllm/pull/52816
- **[Issue #50682] Kimi-K3 ROCm 支持跟踪** — 已拉通 Day 0 特性，AITER fused-moe（a16w4/a8w4）完成集成，后续跟踪性能优化上游工作。
  https://github.com/vllm-project/vllm/issues/50682

## 4. 性能与优化

- **[PR #45428] RMSNorm + 动态 FP8 量化单次读快速路径** — 原 kernel 对每行 token 三次读 global memory，新路径改为单次读取，可显著降低输入带宽开销。
  https://github.com/vllm-project/vllm/pull/45428
- **[PR #53173] PCP 路径融合 cache dispatch 与 NVLS multicast** — 消除中间张量物化与 all-gather 通信，减少内核启动次数，面向 GLM-5.2/DeepSeek-V3.2。
  https://github.com/vllm-project/vllm/pull/53173
- **[PR #50465] Model Runner V2：batch-sharded sample** — 将采样前全量 logits 按 TP 维度分片，每次 step 临时显存占用从 `O(B*(S+1)*V)` 降至 `1/P`。
  https://github.com/vllm-project/vllm/pull/50465
- **[PR #50488] Spec Decode 默认捕获最宽 uniform decode batch** — 合并了三个相关修复（lookahead 预留、uniform-decode 分发），改善捕获批次选择。
  https://github.com/vllm-project/vllm/pull/50488
- **[PR #53161] ROCm DSv4：融合原生 FP8 共享专家与 MXFP4 路由专家** — 使 AITER 异构 MoE 路径支持混合精度专家（需 AITER pin 更新，暂勿合并）。
  https://github.com/vllm-project/vllm/pull/53161
- **[Issue #35387] MTP 带来 76% 延迟回归（Qwen3-Next-80B-A3B-FP8）** — 即使关闭 prefix caching，`num_speculative_tokens=2` 下仍有严重降速，社区标记 `unstale` 持续关注。
  https://github.com/vllm-project/vllm/issues/35387
- **[Issue #38182] MTP 反而降低前缀缓存命中率（Qwen3.5-35B-A3B）** — 用户反馈与直觉相反，MTP 使命中率下降，需排查 cache 行为与投机解码的交互。
  https://github.com/vllm-project/vllm/issues/38182

## 5. 稳定性与回归

按严重程度排列，并标注修复进展：

1. **[Issue #40756] MTP 投机解码长序列非法内存访问**（Qwen3.6-27B-FP8, v0.19.1）— 高👍（8），41 条评论，当前无关闭，属社区最热崩溃。
   https://github.com/vllm-project/vllm/issues/40756
2. **[Issue #41726] TurboQuant KV cache 在大块 continuation prefill 后崩溃** — workspace 锁引发，影响 Qwen3.5-9B 混合注意力模型，测试 PR #39931。
   https://github.com/vllm-project/vllm/issues/41726
3. **[Issue #52023] TP>1 下 draft hidden_size > target 时初始化崩溃** — TRT-LLM fused allreduce+RMSNorm workspace 仅按目标模型尺寸分配。
   https://github.com/vllm-project/vllm/issues/52023
4. **[Issue #52833] GLM-5.2 MTP 在 MI355X 上 0% 接受率** — 且禁用 expert parallelism 触发 `hipErrorIllegalAddress`，ROCm 7.2.3 + v0.27.1。
   https://github.com/vllm-project/vllm/issues/52833
5. **[Issue #51884] FP8 block-scaled 权重在 sm120（RTX 5090）加载失败** — DeepGEMM 报 "Unknown SF transformation"。
   https://github.com/vllm-project/vllm/issues/51884
6. **[Issue #52741] OpenAI `strict` 标志泄漏进 chat template，改变工具调用行为** — 请求级 `strict` 被渲染到模型可见模板中，直接破坏工具调用（Qwen3.6-27B-FP8, v0.24.0）。
   https://github.com/vllm-project/vllm/issues/52741
7. **[Issue #51914] DSv4-Flash 偶发 DSML tool-call 起始包装错误** — `tool_calls` 被截断为 `toolcalls`，与 DSpark 环境相关（v0.27.1）。
   https://github.com/vllm-project/vllm/issues/51914
8. **[Issue #46253] 跨节点 CUDA graph 捕获失败** — GB10 集群（无 GPUDirect）上 NCCL all-reduce 被捕获进 piecewise 段，`splitting_ops` 未生效。
   https://github.com/vllm-project/vllm/issues/46253
9. **[Issue #52897] Align-mode 前缀缓存命中率 0**（0/996k 查询）— 配合 `--scheduling-policy priority` + hybrid GDN 模型时完全失效（post-#51113）。
   https://github.com/vllm-project/vllm/issues/52897
10. **[Issue #51063] VLM 包装器 `tie_word_embeddings` 解析错误** — Mistral3ForConditionalGeneration 丢弃真实 `lm_head.weight` 导致输出虽合法但语义不连贯（已关闭）。

**相关修复 PR 进展：**
- **[PR #53174] Step-3.5 MTP + 结构化输出双修复** — 恢复 MTP 启动时 `layer_types`，并修复结构化输出路径。
  https://github.com/vllm-project/vllm/pull/53174
- **[PR #52914] DP 下 pause 完成时同步设备** — 修复 `pause_generation()` 未等设备空闲即返回的问题（#51476 第三项）。
  https://github.com/vllm-project/vllm/pull/52914
- **[PR #45683] 确定性 MoE combine** — 保证 `VLLM_BATCH_INVARIANT` 下 DP+EP 逐位可复现。
  https://github.com/vllm-project/vllm/pull/45683
- **[PR #52807] KV offload 修复 eagle 尾部块重复弹出** — 两个耦合修复需同时合并。
  https://github.com/vllm-project/vllm/pull/52807
- **[PR #53170] 修复 Gemma 解绑 LM head 权重加载** — 当 config 声明 tied 但 checkpoint 含物理 `lm_head.weight` 时正确处理。
  https://github.com/vllm-project/vllm/pull/53170
- **[PR #42519/#42502] Streaming 修复** — 修复 async double streaming update 占位符错误及 `max_model_len` 溢出（均标记 `needs-rebase`，合并延后）。
  https://github.com/vllm-project/vllm/pull/42519
  https://github.com/vllm-project/vllm/pull/42502

## 6. 对应用开发者的意义

- **投机解码（MTP）目前生产风险偏高**：多个模型（Qwen3.6、GLM-5.2、Qwen3-Next）出现崩溃、0% 接受率、76% 延迟回归或缓存命中率下降。建议上线前做模型级压测，并关闭 MTP 作为兜底。
- **结构化输出 + MTP 的组合正在被修复（#53174）**：若你的服务使用 `response_format`/结构化约束且打算开 MTP，建议暂缓或跟踪该修复的合并状态。
- **OpenAI 兼容性问题**：请求级 `strict` 参数会污染 chat template（#52741），这会影响依赖工具调用的 Agent 应用。升级后需回归测试工具调用链路。
- **新增 per-request 投机解码统计**（PR #48915，已关闭，可能合入）— 未来可在 OpenAI API 响应中查看单请求接受率，便于监控 MTP 实际收益。
- **ROCm 用户需关注**：Kimi-K3 支持正在推进（#50682），但 GLM-5.2 在 MI355X 上存在严重 MTP/EP 问题（#52833），建议锁定版本并等待修复。
- **KV offload/前缀缓存演进**：OffloadingConnector 新增 retention interval（PR #51886），但前缀缓存存在调度策略相关回归（#52897），使用 `--scheduling-policy priority` 的用户应关注缓存命中率指标。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 动态日报 2026-08-21

## 今日速览

- 无新版本 release；社区焦点集中在 CI 稳定性（AMD CI 依赖安装大面积失败）、Qwen3.8 系列支持（MXFP4、DFlash2）以及多项调度/PD 性能缺陷。
- 两个高危问题持续发酵：NIXL/UCX prefill segfault 确认未修复（#35189），Qwen3.5-arch 模型在 v0.5.17 上出现 token 循环回归（#35723）。
- 多个架构级 RFC 推进中：Rust Tree Core 全组件、Ascend NPU 跨代适配、同 GPU 多副本 + CUDA MPS，体现多硬件后端与内核重构方向。

## 版本发布与破坏性变更

无新版本发布。以下变更值得注意：

- **[docs] Qwen3.8-27B DFLASH2 用户需从 main 构建**：DFlash2 支持（#35371）和 NVFP4 量化 lm_head 修复（#35496）均晚于 `lmsysorg/sglang:qwen38-27b` 镜像 tag，文档将明确构建要求。 ([PR #35753](https://github.com/sgl-project/sglang/pull/35753))
- **[Behavior Change] SWA slot liveness 改为 host 侧判断**：移除 `SWATokenToKVPoolAllocator.free_swa` 中的 device-side mask 过滤（原先强制 scheduler free 路径 device sync），改由调用方基于已有 host 状态声明 SWA peers 是否存活。 ([PR #35592](https://github.com/sgl-project/sglang/pull/35592))

## 新模型与硬件支持

- **[AMD] ROCm 7.14 (gfx942/gfx950) 发布支持**：ROCm 7.14 仅以 pip wheels 和 docker 镜像发布（无 apt repo），SDK 位于 site-packages 而非 /opt/rocm，现有 stage 需适配。 ([PR #35319](https://github.com/sgl-project/sglang/pull/35319))
- **[AMD] Qwen3.8 MXFP4 MI35x nightly 测试**：为 Qwen3.8-2.4T-A95B 添加 AMD MI35x nightly 覆盖。 ([PR #35383](https://github.com/sgl-project/sglang/pull/35383))
- **[Qwen3.8] MXFP4 DCP 支持**：将 Qwen3_5 text-only 架构注册进 mamba radix cache 白名单，修复 DCP 模式下的 KV 复用。 ([PR #35297](https://github.com/sgl-project/sglang/pull/35297))
- **[NPU] Ascend 双线推进**：Ascend A5 MXFP8/MXFP4 能力与模型覆盖跟踪 ([Issue #34559](https://github.com/sgl-project/sglang/issues/34559))；跨代设备适配 RFC（算子 provider、签名、dtype/layout、KV 表示、量化元数据差异的架构化处理） ([Issue #35709](https://github.com/sgl-project/sglang/issues/35709))
- **[MUSA] Moore Threads GPU 支持 roadmap**：仍处开放状态，获 👍 12。 ([Issue #16565](https://github.com/sgl-project/sglang/issues/16565))
- **[XPU] Qwen3.5 GDN + speculative decode 适配中**：`causal_conv1d_update_xpu()` 参数不匹配 bug，说明 XPU 后端正在跟进 Qwen3.5 架构。 ([Issue #34720](https://github.com/sgl-project/sglang/issues/34720))

## 性能与优化

- **[DCP] PD KV 传输打包为 dest-contiguous RDMA 块**：Cyclic DCP ownership 导致 relayout 路径每个 token 一次 RDMA；改为在 prefill 侧先收集 owned MLA rows，使 Mooncake/NIXL 发送 page-sized 或更大块。DSPARK 留待后续。 ([PR #35762](https://github.com/sgl-project/sglang/pull/35762))
- **[Quant] W4AFP8 DeepEP low-latency requant launch geometry 调优**：分析 `fp8_per_token_to_per_tensor_quant_triton()` 的 launch 属性（两个字节移动 + 两次乘法 per element），针对 CUTLASS W4A8 grouped GEMM 的 per-tensor fp8 输入做几何调整。 ([PR #35760](https://github.com/sgl-project/sglang/pull/35760))
- **[Scheduler] 移除 SWA free 路径 device sync**：host 侧判断 slot liveness，避免 scheduler 每次 free 触发设备同步。 ([PR #35592](https://github.com/sgl-project/sglang/pull/35592))
- **[AMD CI] 镜像缓存节约 GPU 机时**：AMD CI 每夜约 49 GPU 机时花在 container 拉取/设置上（nightly 23.1h + ROCm 7.2 25.6h），改为在 mi30x runner 上缓存 CI 镜像。 ([PR #34487](https://github.com/sgl-project/sglang/pull/34487))

## 稳定性与回归

按严重程度排序：

- **[严重] NIXL/UCX prefill segfault 确认未修复**：`nixlUcxSharedThread -> cuEventQuery` 段错误在 v0.5.17 / CUDA 13.0 / B200 可复现；#23489、#23499 关闭时均未定位根因。无 fix PR。 ([Issue #35189](https://github.com/sgl-project/sglang/issues/35189))
- **[严重] v0.5.17 上 Qwen3.5-arch 生成退化为 token 循环**：Qwen3.8-27B NVFP4 + DFlash2 草稿模型，0.5.6.dev 正常、0.5.17 异常（无论是否 DFLASH）。无 fix PR，但文档 PR #35753 建议此类用户从 main 构建。 ([Issue #35723](https://github.com/sgl-project/sglang/issues/35723))
- **[严重] PP8 PD-disaggregated prefill 存在 ~30s TTFT 下限**：Kimi-K3 在 PP8 下 TTFT 与负载无关，疑似拓扑/调度层面的固定开销。 ([Issue #34815](https://github.com/sgl-project/sglang/issues/34815))
- **[高] PrefillDelayer 混合状态反馈循环**：DP Attention + chunked prefill 下 prefill 进度持续受损，调度性能稳定性问题。 ([Issue #35241](https://github.com/sgl-project/sglang/issues/35241))
- **[高] EAGLE + DP Attention + PD 死锁**：`index_share_for_mtp_iteration=True` 时 warmup 阶段死锁（GLM-5.2）。 ([Issue #32527](https://github.com/sgl-project/sglang/issues/32527))
- **[中] Qwen3.6/Qwen3.8 mRoPE 位置传入 1D CUDA kernel**：多模态位置编码被传给 1D fused QK RMSNorm+RoPE kernel，可能导致多模态推理错误。 ([Issue #35345](https://github.com/sgl-project/sglang/issues/35345))
- **[中] DeepSeek-V4 tool_choice="none" 时泄漏原始 DSML**：输出中出现未解析的 DSML 控制标记。 ([Issue #35736](https://github.com/sgl-project/sglang/issues/35736))
- **[中] DeepSeek-V3.2/V4 工具调用解析器丢失双 chunk 调用**：streamed 输出分两个 chunk 时工具调用被丢弃；issue 已关闭，建议验证。 ([Issue #35563](https://github.com/sgl-project/sglang/issues/35563))
- **[中] Quantized lm_head 未初始化 logits**：compressed-tensors 下 ParallelLMHead 未 dispatch，产生未初始化输出；已关闭。 ([Issue #35358](https://github.com/sgl-project/sglang/issues/35358))
- **[低] `move_logprobs_to_cpu` AttributeError**：scheduler 异常，`list` 对象无 `tolist` 属性。 ([Issue #35705](https://github.com/sgl-project/sglang/issues/35705))
- **[低] 全局 --attention-backend 导致 MiniMax-H3 audio_vae 崩溃**：非 DiT 组件未声明 attention backend 时被全局配置误伤。 ([Issue #35743](https://github.com/sgl-project/sglang/issues/35743))
- **[CI] AMD CI 依赖安装大面积失败**：apt index 失效导致 pr-test-amd 约 25/27 job 及 kimi-k26 nightly 失败，已有 fix PR。 ([PR #35764](https://github.com/sgl-project/sglang/pull/35764))

## 对应用开发者的意义

- **跑 Qwen3.5-arch（含 NVFP4 + DFlash2 组合）的开发者**：v0.5.17 存在 token 循环回归，建议直接使用 main 分支构建或回退 0.5.6.dev；留意 #35723 的修复进展。 ([Issue #35723](https://github.com/sgl-project/sglang/issues/35723))
- **使用 NIXL/UCX 做 PD 或跨节点传输的用户**：prefill segfault 仍未修复且无根因，升级前需充分验证你的网络/驱动组合；遇到问题请保留 coredump 并回贴到 #35189。
- **DeepSeek-V4 工具调用场景**：stream 输出跨 chunk 可能丢工具调用，`tool_choice="none"` 时输出可能混入 DSML 原文；建议增加输出校验或等待修复。 ([Issue #35563](https://github.com/sgl-project/sglang/issues/35563), [Issue #35736](https://github.com/sgl-project/sglang/issues/35736))
- **DCP/PD 部署用户**：PP>=2 时 TTFT 存在负载无关下限（Kimi-K3 约 30s），规划 SLO 时需计入；同时关注 #35762 的 RDMA 传输优化对长序列场景的收益。
- **AMD/ROCm 用户**：ROCm 7.14 支持与 Qwen3.8 MXFP4 MI35x 覆盖均在途，CI 正在修复镜像拉取问题，短期 AMD CI 稳定性会逐步改善。
- **在 SGLang 之上构建 Agent 应用**：建议固定 main 分支的 commit 而非 PyPI release（尤其涉及 Qwen3.5/3.8 系列时），并关注 scheduler 侧 device sync 移除（#35592）对高并发场景尾延迟的潜在改善。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

## llama.cpp 动态日报 · 2026-08-21

### 1. 今日速览

过去 24 小时发布 9 个新版本，核心方向是 **ggml_rope_set_offset 新算子在多后端落地**（Metal/CUDA 已合入，OpenCL/SYCL/WebGPU 等 PR 已关闭，预计近期合入），以及 **server 睡眠态可观测性增强**（sleep 期间可访问 `/metrics`，并新增 dedup-cache-models 预设）。与此同时，GraniteSWA、dots3-note、DFlash2、LFM2 DSpark 等新模型架构/投机解码支持正在密集推进；但 CUDA 在 Blackwell 平台仍有多个严重稳定性问题处于 Open 状态，值得关注。

---

### 2. 版本发布与破坏性变更

过去 24 小时发布 b10520 ~ b10505 共 9 个构建，重点关注以下变更：

| 版本 | 关键变更 | 影响 |
|---|---|---|
| [b10520](https://github.com/ggml-org/llama.cpp/releases/tag/b10520) | ggml-cpu：将 `__fp16` 类型使用限制在 `__ARM_FP16_FORMAT_IEEE` 下，修复 32 位 Arm 上未启用 `-mfp16-format=ieee` 时的编译问题 | 影响 32 位 Arm 构建；AArch64 不受影响 |
| [b10519](https://github.com/ggml-org/llama.cpp/releases/tag/b10519) | server：重构 sleep 处理逻辑，支持**睡眠期间访问 `/metrics`**；增加响应缓存、修复竞态条件，并补充测试 | 对长时间空闲的 server 实例，外部监控系统将能实时拉取指标，无需等待唤醒 |
| [b10509](https://github.com/ggml-org/llama.cpp/releases/tag/b10509) | 新增 `ggml_rope_set_offset` 算子（ggml 核心 + Metal 后端），CUDA 支持同步合入 | 新增 GGML API；模型实现方可借此替代部分 rope 偏移逻辑。**注意：有用户报告 b10509+ 上 Step 3.7 模型运行失败（见 Issue #27447，已关闭）** |
| [b10505](https://github.com/ggml-org/llama.cpp/releases/tag/b10505) | server：新增 `dedup-cache-models` 预设选项 | 简化多模型场景下缓存去重配置 |
| [b10514](https://github.com/ggml-org/llama.cpp/releases/tag/b10514) | 新增 GraniteSWA / GraniteMoeSWA 系列模型支持 | 新模型架构，见下节 |

**破坏性变更提示：**
- `ggml_rope_set_offset` 为底层 GGML API 扩展，直接使用 GGML C API 的集成方需在算子调度中新增对应分支。
- b10519 的 sleep 状态机重构改变了 server 内部 `on_sleeping_state` 的调用时序，依赖旧行为的自定义 patch 可能需要适配。

---

### 3. 新模型与硬件支持

- **[#25505](https://github.com/ggml-org/llama.cpp/pull/25505)（已合入，随 b10514 发布）**：新增 `GraniteSWAForCausalLM` / `GraniteMoeSWAForCausalLM` 模型转换与推理支持。
- **[#27060](https://github.com/ggml-org/llama.cpp/pull/27060)（Open）**：新增 dots3-note 模型支持（DSA + SWA），需扩展 `llama-kv-cache-dsa` 数据结构。
- **[#27342](https://github.com/ggml-org/llama.cpp/pull/27342)（Open）**：新增 DFlash2 投机解码支持——在 DFlash 基础上增加分组动态 depthwise convolution 与 candidate selector 模块。
- **[#27383](https://github.com/ggml-org/llama.cpp/pull/27383)（已关闭，预计合入）**：LFM2 模型支持 DSpark 投机解码，并支持 LFM2 循环状态的 partial rollback。
- **[#26534](https://github.com/ggml-org/llama.cpp/pull/26534)（Open，WIP）**：GLM-4.5-Air 的 MTP（Multi-Token Prediction）图实现，converter 部分尚在开发中。
- **[#27461](https://github.com/ggml-org/llama.cpp/pull/27461)（Open）**：Metal 后端请求 Metal 4.0 language version，以修复 M5 Max 上 prefill/decode 性能权衡问题。

**硬件/后端适配：**
- b10517 / b10506：Vulkan 与 Metal 后端分别优化 q8_0 KV-cache 反量化路径（见下节）。
- b10520：修复 32 位 Arm 上 NEON + `__fp16` 的编译门控。

---

### 4. 性能与优化

**已合入 / 已发布：**
- **Vulkan（b10517）**：在 coopmat1 路径中只做一次 q8_0 KV 反量化，减少重复计算；FA scratch 超过设备 `maxStorageBufferRange` 时改为 fallback 而非直接 abort。
- **Metal（b10506）**：q8_0 反量化改用 packed types 实现，利用 SIMD 读写提升缓存带宽效率。
- **CPU（b10520）**：修复 32 位 Arm `__fp16` 编译问题，间接解决影响该平台 SIMD 代码生成质量的一个编译门控缺陷。

**进行中（PR 未合入）：**
- **[#27402](https://github.com/ggml-org/llama.cpp/pull/27402)**：AVX2 后端加速 IQ 量化模型的大 batch size prompt processing。当前 IQ 模型在 imatrix/perplexity 类 512-token batch 场景下每个权重被重复解码 512 次，该 PR 旨在消除冗余解码开销。
- **[#24934](https://github.com/ggml-org/llama.cpp/pull/24934)**：`llama-sampler.cpp` 的 float/double 转换与概率向量归一化提速，同时修复若干采样器初始化不一致问题。
- **[#25569](https://github.com/ggml-org/llama.cpp/pull/25569)**：修复 SUM 算子对非连续张量在 CPU/CUDA 上结果不正确的问题（影响部分图编译优化路径）。

**潜在性能风险提示：**
- [#27444](https://github.com/ggml-org/llama.cpp/issues/27444) 报告 Qwen3.8-27B 在 RTX 5090 上单次生成过程中 decode 吞吐量下降约 30%（详见下一节）。

---

### 5. 稳定性与回归

按严重程度排序（均为今日有更新的 issue）：

| 严重程度 | Issue / PR | 描述 | 状态 |
|---|---|---|---|
| 🔴 高 | [#27102](https://github.com/ggml-org/llama.cpp/issues/27102) | CUDA kernel stall 导致 watchdog kill：RTX Pro 6000 Blackwell Max-Q 上跑 Qwen3.8-27B 时 CUDA kernel 悬挂 | Open，无 fix PR |
| 🔴 高 | [#25593](https://github.com/ggml-org/llama.cpp/issues/25593) | SM_60（Tesla P100）精度回归：FP32 运算被静默降级为 FP16，导致输出质量损失。**两个 fork 已修复，但上游未合入** | Open，有第三方 fix |
| 🟠 中 | [#27444](https://github.com/ggml-org/llama.cpp/issues/27444) | 新报告：Qwen3.8-27B 在 RTX 5090（sm_120）上 decode 吞吐量在单次生成内退化约 30%，build 10536 | Open，无 fix PR |
| 🟠 中 | [#27038](https://github.com/ggml-org/llama.cpp/issues/27038) | SYCL 新 host-pinned memory 在超大内存分配时 CPU 占用率异常高，影响 llama-server | Open，无 fix PR |
| 🟠 中 | [#25489](https://github.com/ggml-org/llama.cpp/issues/25489) | MTP 投机解码性能自 b9935 起回退，Windows 上 llama-server 受影响 | Open，无 fix PR |
| 🟡 中 | [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) | 投机解码（draft-mtp / draft-dspark）：greedy 采样下输出与无投机解码**不一致**，目标模型量化（Q4_K_M）时可复现；bf16 下表现一致 | Open，无 fix PR |
| 🟡 中 | [#23737](https://github.com/ggml-org/llama.cpp/issues/23737) | Vulkan 后端 `GGML_ASSERT(tensor->data != NULL)` 崩溃，自 b9318 起可复现，Strix Halo 平台 | Open，无 fix PR |
| 🟡 中 | [#24795](https://github.com/ggml-org/llama.cpp/issues/24795) | gemma4-assistant MTP draft 模型加载失败："invalid vector subscript"，b9702 起回归 | Open，无 fix PR |
| 🟢 低 | [#27447](https://github.com/ggml-org/llama.cpp/issues/27447) | Step 3.7 模型在 b10509+ 上无法运行（可能与新增 `ggml_rope_set_offset` 相关） | **已关闭**，建议关注后续版本确认修复 |
| 🟢 低 | [#20977](https://github.com/ggml-org/llama.cpp/issues/20977) | 社区高赞功能请求 TurboQuant support（339 👍）被标记为 stale 并关闭 | Closed |

---

### 6. 对应用开发者的意义

- **Server 可观测性增强**：b10519 之后，睡眠态实例仍可对外提供 `/metrics`，对大规模服务发现/健康检查/指标采集体系是明确利好。基于 `llama-server` 构建网关或控制面的团队可放心让实例进入 sleep 模式而不会丢失监控盲区。
- **投机解码选项快速增加，但需谨慎选型**：DSpark（LFM2）、DFlash2、adaptive MTP（[#27210](https://github.com/ggml-org/llama.cpp/pull/27210)）等新草案持续进入主分支。它们能显著降低首 token 延迟，但 [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) 显示在量化目标模型上，投机解码可能与 greedy 基线输出不一致——对精度敏感的应用建议在部署前做对照评测。
- **底层 GGML API 变更**：`ggml_rope_set_offset` 是**新增算子**而非破坏性变更，但若你的项目直接操作 GGML graph，需同步算子 fallback 逻辑；上游也在跟进各后端支持（[#27345](https://github.com/ggml-org/llama.cpp/pull/27345) 已覆盖 OpenCL/SYCL/WebGPU/Hexagon）。
- **Blackwell 平台稳定性风险**：RTX 50 系列上仍存在 watchdog kill（#27102）与单次生成吞吐下降（#27444）等问题，若你的生产环境大量部署 Blackwell GPU，建议暂时锁定已验证的构建版本，并关注后续修复 PR。
- **新模型架构跟进**：GraniteSWA 已随正式 Release 发布，dots3-note、GLM-4.5-Air MTP 等支持仍在 PR 阶段。若应用侧需要提前适配，可基于上述 PR 分支做集成测试，但生产环境建议等待合入发布版。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 动态日报 · 2026-08-21

> 数据窗口：2026-08-20 ~ 2026-08-21 · 来源：[github.com/ollama/ollama](https://github.com/ollama/ollama)

## 1. 今日速览

过去 24 小时无正式版本发布，当前稳定版仍为 v0.32.14，社区已验证 v0.32.15 pre-release 修复 MLX 预填充约 3× 的吞吐回退。稳定性方面，最需要关注的是 ROCm 后端在 Strix Halo（gfx1151）上的 KV 状态串扰与长提示词输出错误、macOS 上 Qwen 相关 Agent 挂起，以及 qwen3.8 工具循环中的 500 错误。针对工具循环截断（[#17778](https://github.com/ollama/ollama/issues/17778)）和 CORS 回归（[#17887](https://github.com/ollama/ollama/issues/17887)）的修复 PR 均已提交，值得跟进合入。

## 2. 版本发布与破坏性变更

- **无官方 Release**。当前最新正式版为 v0.32.14；v0.32.15 pre-release 已在 issue 中被确认基本恢复 MLX prefill 性能（[#17884](https://github.com/ollama/ollama/issues/17884)）。
- **CORS 预检回归**：v0.32.14 起，浏览器 `fetch()` 直连 `/api/generate` 时，OPTIONS 预检返回 `405 Method Not Allowed` 且不带 CORS 头，阻断 Web 前端直接调用。修复 PR [#17890](https://github.com/ollama/ollama/pull/17890) 已提交（server: return 204 for OPTIONS on loopback/private hosts）。
- **安装脚本破坏**：官方 install.sh 在缺少 `zstd` CLI 的发行版（Ubuntu 26.04 LTS 即其一）上会留下空目录并静默失败，现有两个修复方向：自动安装 zstd（[#17891](https://github.com/ollama/ollama/pull/17891)）和回退 `.tgz` 包（[#17877](https://github.com/ollama/ollama/pull/17877)）。
- **能力标签不一致**：`/api/tags` 仍将图像模型标记为 `"capabilities": ["image"]`，但 `/api/generate` 已拒绝图像生成请求——与实验性图像支持被临时移除有关（[#17893](https://github.com/ollama/ollama/issues/17893)，已关闭）。

## 3. 新模型与硬件支持

- 无新合并的模型文件、后端或量化格式支持。
- 社区提出两项模型接入请求：
  - **Upstage Solar Pro 4**：524K 上下文窗口，定位长程任务/Agent 工作流，社区呼吁支持（[#17773](https://github.com/ollama/ollama/issues/17773)）。
  - **Qwen3.8 云端模型**：请求在 OLLAMA Pro/Max 中接入 Qwen3.8-2.4T-A95B-FP8（[#17720](https://github.com/ollama/ollama/issues/17720)）。
- MLX 侧 Qwen3.5 Vision 支持 PR（[#14968](https://github.com/ollama/ollama/pull/14968)）已关闭，暂未确认是否合入主线。

## 4. 性能与优化

- **GGUF 元数据缓存与能力统一**（PR [#17858](https://github.com/ollama/ollama/pull/17858)，开放中）：将 GGUF 元数据抽取结果按 blob 缓存至 `<OLLAMA_MODELS>/metadata/sha256-<hex>.json`，避免重复解析；同时统一两套能力检测逻辑，消除部分模型能力识别不一致。
- **MLX 前缀缓存恢复点**（PR [#17901](https://github.com/ollama/ollama/pull/17901)，开放中）：被客户端取消的长 prefill 不再整段丢弃，重试可以从已保存的缓存点继续。对 Agent 场景中"超时-重试"循环有直接收益。
- **qwen35/qwen35moe 并行解锁**（PR [#17144](https://github.com/ollama/ollama/pull/17144)，开放中）：上游 llama.cpp 已于 2026-03-08 修复该混合架构的并发崩溃，本 PR 提议移除 `server/sched.go` 中的 `numParallel=1` 硬编码，让这两个架构恢复并行请求能力。
- **MLX 预填充回归**（[#17884](https://github.com/ollama/ollama/issues/17884)）：v0.32.14 上 MLX prompt processing 吞吐量约降为 1/3（实测于 M5 Max），v0.32.15 pre-release 已基本恢复；同期 GGUF 路径无回退且持续改善。

## 5. 稳定性与回归

按严重程度排列，并为已有修复 PR 的问题标注了跟进链接。

### 严重

- **ROCm KV 状态串扰（gfx1151）**：Strix Halo iGPU（Radeon 8060S）上，连续的无关请求之间发生 KV 状态泄漏，后一个请求的响应内容会复述前一个请求的内容。这是正确性/数据隔离级别的缺陷。（[#17847](https://github.com/ollama/ollama/issues/17847)，OPEN）
- **macOS 上 Qwen 的 Agent 集成挂起**：直接调用 Ollama API（包括 OpenAI 兼容端点、流式、推理、工具调用）均正常，但 Agent 集成（同样走 HTTP）会无限期挂起。（[#17839](https://github.com/ollama/ollama/issues/17839)，OPEN）

### 高

- **qwen3.8 工具循环 500 错误**：多步工具调用溢出上下文后返回 `no user query found in messages (500)`。根因是消息截断逻辑丢弃了最近一条用户消息。**已有修复 PR**：[#17894](https://github.com/ollama/ollama/pull/17894)（chat: always preserve the most recent user message during truncation）。（[#17778](https://github.com/ollama/ollama/issues/17778)，OPEN）
- **ROCm 长上下文输出错误（gfx1151）**：超过约 4k token 时模型忽略指令、输出错误内容；同机 Vulkan/CPU 后端结果正确。（[#17895](https://github.com/ollama/ollama/issues/17895)，OPEN）
- **Qwen3.6 `think:false` + `format:"json"` 回归**：0.31.2 → 0.32.x 起，模型将推理内容序列化为 `{"thought": ...}` 返回，不再遵守请求的 JSON schema。（[#17871](https://github.com/ollama/ollama/issues/17871)，OPEN）

### 中

- **Qwen3.5 并发被强制降级**：即便在 128GB 统一内存的 DGX Spark（GB10）上设置 `OLLAMA_NUM_PARALLEL`，服务端仍强制 `numParallel=1`，并发请求处理异常。（[#14621](https://github.com/ollama/ollama/issues/14621)，OPEN）
- **MLX KV 缓存按请求数泄漏**：resident memory 随请求计数单调增长，与上下文长度/tool schema 无关，只有完整卸载/重启模型才能释放。与 #16698 同类问题。（[#17875](https://github.com/ollama/ollama/issues/17875)，CLOSED，需在 0.32.15 release notes 中确认修复）
- **OPTIONS 预检 405**：浏览器 CORS 预检回归，阻断 Web 直连 API。**已有修复 PR**：[#17890](https://github.com/ollama/ollama/pull/17890)。（[#17887](https://github.com/ollama/ollama/issues/17887)，CLOSED）
- **Vulkan 长 prefill 触发 amdgpu 看门狗**：gfx1151 上 compute-ring 超时，Vulkan 报 `ErrorDeviceLost`，请求失败且影响后序请求；`num_batch=128` 可绕过。（[#17870](https://github.com/ollama/ollama/issues/17870)，OPEN）
- **qwen3.x 视觉色度丢失**：红/绿/蓝纯色被识别为灰/黑，luminance 正常但 chroma 丢失；相同权重在 `mlx_vlm` 下正确。（[#17872](https://github.com/ollama/ollama/issues/17872)，CLOSED，无修复 PR）
- **云端 deepseek-v4-flash 循环放大**：
  - 模型在 Agent 循环中输出字面 `</think>`，导致 193 次连续重复工具调用、约 31M token 消耗（[#17617](https://github.com/ollama/ollama/issues/17617)，OPEN）；
  - 另有报告称无 `</think>` 标记时 thinking 段重复 221 次（约 105 秒），仅 4 次工具调用后失败（[#17892](https://github.com/ollama/ollama/issues/17892)，OPEN）。

### 低

- **Qwen3.6 35B 在 RTX 5070 Ti 上加载异常**：更新后显存曲线直接冲顶，即便设置 4k 上下文也未填满 GPU。（[#17517](https://github.com/ollama/ollama/issues/17517)，OPEN）
- **静默 GPU→CPU 回退**：显存放不下时静默降级 CPU，无用户可见告警，性能问题难排查。（[#14258](https://github.com/ollama/ollama/issues/14258)，OPEN）
- **旧版 macOS 被拒绝**：应用要求 macOS 14.0+，Monterey（12.7.2）用户无法运行。（[#17842](https://github.com/ollama/ollama/issues/17842)，OPEN）
- **上下文窗口行为不一致**：同一 server 上不同模型对超长 prompt 分别返回 400（提示 4096）和 200（`prompt_eval_count` 2050），原因不明。（[#17889](https://github.com/ollama/ollama/issues/17889)，OPEN）

## 6. 对应用开发者的意义

1. **Agent/工具循环注意防护**：qwen3.8 的 500 错误已在 [#17894](https://github.com/ollama/ollama/pull/17894) 中修复，合入前建议在应用层主动管理消息历史/截断，避免上下文溢出；云端 deepseek-v4-flash 的循环放大提醒你在 Agent 外层设置硬性最大调用次数与 token 成本上限。
2. **macOS + Qwen 谨慎使用 Agent 集成**：如果通过 Claude Desktop、LangChain 等集成调用本地 Qwen 并出现"卡死但 API 直连正常"，说明受到了 [#17839](https://github.com/ollama/ollama/issues/17839) 的影响，建议先与 Ollama API 直连对比定位。
3. **Strix Halo（gfx1151）用户避免使用 ROCm 生产**：存在跨请求 KV 串扰（数据隔离风险）和 4k+ token 正确性问题。可考虑 Vulkan 后端，但长 prefill 会触发看门狗；`num_batch=128` 是当前可行绕过手段。
4. **浏览器直连 Ollama 已不可用**：0.32.14 的 CORS 回归会让纯前端 `fetch()` 失败。在 [#17890](https://github.com/ollama/ollama/pull/17890) 发布前，请通过后端代理转发请求。
5. **MLX 引擎的 Agent 超时策略**：0.32.14 的 prefill 慢 3×，0.32.15 已恢复；配合 [#17901](https://github.com/ollama/ollama/pull/17901) 的缓存恢复点，长 prefill 取消/重试的开销将大幅下降，Agent 客户端无需再设置激进超时。
6. **不要盲信并行配置**：`qwen35`/`qwen35moe` 暂时被强制 `numParallel=1`（[#17144](https://github.com/ollama/ollama/pull/17144) 合入后解锁）；Qwen3.5 在显存充足时也可能忽略 `OLLAMA_NUM_PARALLEL`（[#14621](https://github.com/ollama/ollama/issues/14621)）。上生产前用并发压测验证实际并行度。
7. **可观测性补强**：`/metrics` 端点请求已累计 114 👍 并开放超过两年（[#3144](https://github.com/ollama/ollama/issues/3144)），如果依赖 Prometheus 监控 Ollama，值得持续跟进/参与该 feature request；现阶段可通过 debug 日志 + 外部 exporter 弥补。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 动态日报 — 2026-08-21

## 今日速览

过去 24 小时无新版本发布，当前主线版本为 v1.96.2。社区提交集中在三方面：**多 pod 一致性**（预算重置、批量计费、辅助任务选举）、**Rust 核心路由扩展**（/chat/completions 正式引入 Rust core）、以及一批安全/稳定性修复（/health 明文泄露敏感头、JWKS 故障恢复、Redis 托管认证）。另有大量近期 issue 被批量更新/关闭，表明维护者正在集中清理积压。

---

## 版本发布与破坏性变更

**无新版本发布。** 但有一个值得注意的回归：

- **[Issue #36922] LiteLLM Proxy 在 `uv tool update` 后因 FastAPI `get_flat_dependant` 不兼容而无法启动**（OPEN，3 评论）
  - `uv tool update litellm["proxy"]` 到 v1.96.2 后，代理启动失败。
  - 影响：所有通过 uv 工具链部署的用户在升级 v1.96.2 时可能遇到启动崩溃。
  - 链接：https://github.com/BerriAI/litellm/issues/36922

---

## 新模型与硬件支持

- **[PR #37729] feat(fal_ai): 添加 gpt-image-2 图像生成支持**（OPEN）
  - 此前 fal.ai 的 gpt-image-2 无法通过 LiteLLM 使用：请求打到通用 fal URL 而非模型专属 URL，且无成本条目导致消费记录为 $0。
  - 本 PR 新增专属配置，将 `n`、`size`、`quality`、`output_format` 映射到 fal 参数，并补上成本表。
  - 链接：https://github.com/BerriAI/litellm/pull/37729

---

## 性能与优化

以下均为昨日新开 PR，主打**事件循环卸载**与**多实例任务收敛**：

- **[PR #37702] perf(prometheus): /metrics 移出事件循环渲染并合并并发抓取**（CLOSED）
  - 此前 `/metrics` 在事件循环上同步渲染 registry，大 registry 会阻塞所有在途请求；并发抓取各自重复渲染；`?name[]=` 过滤参数被静默忽略。
  - 修复：worker 线程渲染 + gzip，合并并发 scrape，支持 `name[]` 过滤。
  - 链接：https://github.com/BerriAI/litellm/pull/37702

- **[PR #37697] fix(token_counter): 大 token 计数不再阻塞代理事件循环**（CLOSED）
  - 低熵长文本在 tiktoken 计数时可阻塞事件循环数十秒，导致存活/就绪探针超时、副本被摘除。
  - 修复：长文本按有界 chunk 编码，并限制 tiktoken 的 queue 大小。
  - 链接：https://github.com/BerriAI/litellm/pull/37697

- **[PR #36497] perf(reset_budget_job): 每个 tick 选举单一清扫器并限制窗口扫描范围**（OPEN）
  - 现在每一 pod 都在跑预算重置任务，大规模 fleet 会把一次扫描放大 N 倍；每日预算同时到期时，所有 pod 同时扫库，导致 Postgres 和认证延迟尖峰。
  - 链接：https://github.com/BerriAI/litellm/pull/36497

- **[PR #36618] feat(proxy): 每个辅助数据库任务选举唯一 owner，新增 worker 角色**（OPEN）
  - 7 个辅助 DB 任务在每 pod × 每 uvicorn worker 上重复执行，各自手写选举逻辑且 4 种互不兼容的故障策略；lease 无续租机制，慢任务中途丢失；无办法让辅助工作不跑在承载流量的 pod 上。
  - 链接：https://github.com/BerriAI/litellm/pull/36618

- **[PR #36686] fix(stagger): elected job 的所有副本保持在同一时刻执行**（OPEN）
  - 带 stagger 的 elected job 每个副本各跑一次而不是一次；lease 的去重只覆盖 body 运行时间而非 TTL，10 pod fleet 每天可把 daily job 跑约 10 次。
  - 链接：https://github.com/BerriAI/litellm/pull/36686

- **[PR #37691] fix(db): 将配置的连接参数应用到读副本 URL**（OPEN）
  - 读副本忽略了配置的 DB 池上限，回退到 Prisma 基于 CPU 的默认值。
  - 链接：https://github.com/BerriAI/litellm/pull/37691

---

## 稳定性与回归

按严重程度排列：

**高危：安全信息泄露**

- **[Issue #36898] GET /health 明文返回 `extra_headers` 和 `aws_session_token`**（OPEN，6 评论）
  - `/model/info` 已有脱敏（#18818），但 `/health` 走的是另一个 sanitizer，`api_key` 虽被剥离，`extra_headers` 中的敏感头（如 AWS 会话令牌）完整返回。
  - 影响：任何能访问 `/health` 的客户端可读取部署的临时云凭证。
  - 链接：https://github.com/BerriAI/litellm/issues/36898

**高危：预算控制失效**

- **[Issue #37261] `provider_budget_config` 无 Redis 时 `budget_reset_at` 报约 57 年后，月度预算永不重置**（OPEN，4 评论）
  - 无 Redis 配置时，`GET /provider/budgets` 返回的 `budget_reset_at` 偏差约 57 年，导致月度预算形同虚设。
  - 链接：https://github.com/BerriAI/litellm/issues/37261

**高危：MCP 工具劫持**

- **[Issue #37031] MCP auto-execute（`require_approval: "never"`）劫持 agentic 客户端的客户端侧 tool_use，导致所有非 MCP 工具报 "Error executing tool"**（OPEN，5 评论）
  - 当模型配置了服务端自动执行的 MCP 工具且同时部署在 Claude Code 这类会发送自身工具（Read/Bash/Edit）的 agentic 客户端后面时，auto-execute 循环接管了客户端工具的 tool_use，破坏整个工具调用链。
  - 链接：https://github.com/BerriAI/litellm/issues/37031

**中危：预算误判 / 计费错误**

- **[Issue #27735] 虚拟密钥 BudgetExceededError 使用陈旧 spend，`/key/info` 显示未超限仍被拒绝请求**（OPEN，10 评论）
  - 团队作用域虚拟密钥被 `BudgetExceededError` 拒绝，但管理 API 显示的 spend 低于 max_budget；与 #27639 相关但场景为虚拟密钥。
  - 链接：https://github.com/BerriAI/litellm/issues/27735

**中危：兼容性回归**

- **[Issue #36922] v1.96.2 与 FastAPI `get_flat_dependant` 不兼容，代理无法启动**（OPEN，3 评论）
  - 见上文“版本发布与破坏性变更”。
  - 链接：https://github.com/BerriAI/litellm/issues/36922

**已有修复 PR 的回归（供跟进的参考）：**

- **[PR #37685] fix(proxy): 原子认领 batch 成本行，避免多 pod 轮询双重计费**（OPEN）
  - 每个 pod 无锁轮询 batch 成本，两个 pod 同时为同一已完成 batch 计费，聚合 spend 被重复计算。
  - 修复：结果拉取后、计费前用 compare-and-swap 认领行，失败者跳过。
  - 链接：https://github.com/BerriAI/litellm/pull/37685

- **[PR #37690] fix(jwt): JWKS 拉取重试，提供陈旧 key 兜底，IdP 不可达时返回 503**（OPEN）
  - JWKS 拉取无重试，IdP 一次抖动即认证失败；TTL 过期后仍有效的 key 被丢弃；所有在途请求同时重新拉取 JWKS；`ConnectTimeout` 被误报为 401。
  - 链接：https://github.com/BerriAI/litellm/pull/37690

- **[PR #37698] feat(proxy): 一流的 SALT KEY 轮换支持**（OPEN）
  - `LITELLM_SALT_KEY` 泄露后无法安全轮换——旧的 provider 凭证全部不可读。本 PR 支持 `LITELLM_SALT_KEY_PREVIOUS` 保留旧 key 可读性。
  - 链接：https://github.com/BerriAI/litellm/pull/37698

- **[PR #37689] fix(router): 自动 prompt caching 增加部署亲和性（LIT-5535）**（CLOSED）
  - 此前仅客户端发送 `cache_control` 时才有亲和性，自动 prompt caching 无部署亲和性，多部署组每次调用都付出 cache-write 成本。
  - 链接：https://github.com/BerriAI/litellm/pull/37689

- **[PR #37740] fix(redis): Azure AD / GCP IAM 认证应用到每个 async client 路径**（OPEN）
  - `REDIS_URL` 的 async client 完全没有认证，connect pool 以同样方式失败，async Sentinel 客户端同样中招；Azure AD 和 GCP IAM Redis 缓存此前是静默失效。
  - 链接：https://github.com/BerriAI/litellm/pull/37740

---

## 对应用开发者的意义

1. **预算/计费依赖者应立即关注两个问题**：无 Redis 场景下 `provider_budget_config` 的 `budget_reset_at` 偏差约 57 年（#37261），以及虚拟密钥因陈旧 spend 被误拒（#27735）。若你的应用依赖 LiteLLM 做费用上限控制，这两个问题可能导致“永远不重置”或“提前拒请求”两种极端。

2. **生产多副本部署正处在一个修复密集期**：batch 双重计费（#37685）、预算重置任务放大（#36497）、JWT 单一故障点（#37690）等修复均在昨日合入/提出。如果你当前跑着多 pod 的 LiteLLM 且启用了 batch API、预算刷新或 JWT 认证，建议在测试环境先行验证这些 PR 再上生产。

3. **/health 端点存在安全暴露**：`extra_headers` 与 `aws_session_token` 明文返回（#36898）。如果你的网络环境中 `/health` 可被非信任方访问，应立即检查是否需要先行上游修复或在网关层做脱敏。

4. **MCP 自动执行 + agentic 客户端（Claude Code 等）的组合存在已知工具调用破坏问题**（#37031），如果你的应用依赖 Claude Code 这类 agentic 客户端并配置了 `require_approval: "never"` 的 MCP 工具，需要特别留意工具全部失效的风险。

5. **Rust core 正在扩展覆盖范围**：[PR #37241] 已将 `/chat/completions` 路由接入 Rust 核心（Anthropic 和 Bedrock 后端），这属于大的架构演进，后续版本升级时建议关注 `rust: true` 行为变化。

---

*本日报基于 GitHub 公开数据生成，数据窗口为 2026-08-20 更新记录。版本号、PR/Issue 编号均按原文引用。*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 动态日报 — 2026-08-21

## 1. 今日速览

Unsloth 发布 v0.1.801-beta，合并 200+ PR，带来实验性 **Auto Compaction**（超长对话自动压缩）和 **LAN Remote Access**（局域网远程访问）两项重要功能。社区侧，macOS 上加载 Qwen3.8-27B 导致桌面应用崩溃（#9279）以及量化 KV cache 在张量并行下被静默丢弃（#8939 fix PR）是当前最受关注的正确性问题。核心维护者 danielhanchen 今日提交多个 studiobench 性能基准 PR，着手系统性治理 Studio 前端的性能回归风险。

## 2. 版本发布与破坏性变更

- **[v0.1.801-beta: Auto compaction (preview) + LAN Remote Access](https://github.com/unslothai/unsloth/releases)** — 过去 24 小时最核心的变化。合并 200+ PR，引入：
  - **Auto Compaction（实验性）**：超出上下文窗口后自动压缩历史对话，延续长会话无需手动清理。
  - **Remote & LAN Access（预览）**：支持通过局域网远程访问 Unsloth Desktop 服务。
  - ⚠️ 迁移注意：Remote Access 默认监听行为可能涉及安全边界调整（参见 #8868 中 `-H 0.0.0.0` 在 macOS 上绑定错误 IP 的 security  issue）。

## 3. 新模型与硬件支持

今日无新发布模型或后端支持。相关待办：
- [Feature] Ling 3.0 支持请求（[#8532](https://github.com/unslothai/unsloth/issues/8532)）——社区请求在 Studio 中直接加载/服务 Ling 3.0 模型。
- [Bug] NVFP4 在 RTX 5060 Ti 16GB 上无法加载（[#8246](https://github.com/unslothai/unsloth/issues/8246)）——量化格式兼容性问题，未标 fix。

## 4. 性能与优化

无量化数字落地。PR 侧有明确性能方向的动作：

- **[PR #8939: Studio 修复张量并行时量化 KV cache 被丢弃](https://github.com/unslothai/unsloth/pull/8939)** — `load_model` 在 TP 开启时只允许 f16/bf16/f32，其余 cache 类型被静默移除并按 f16 计显存。该 PR 修复后，量化 KV cache（如 Q8_0）可在多 GPU 张量并行下正常工作，等效提升可用上下文长度。
- **studiobench 系列（[#9296](https://github.com/unslothai/unsloth/pull/9296)、[#9341](https://github.com/unslothai/unsloth/pull/9341)、[#9351](https://github.com/unslothai/unsloth/pull/9351)、[#9356](https://github.com/unslothai/unsloth/pull/9356)、[#9439](https://github.com/unslothai/unsloth/pull/9439)）** — danielhanchen 正在为 Studio Web UI 建立真实路径性能基准和 A/B 模拟器，已发现 500K 上下文档位的性能测量原本完全缺失、数学公式渲染（preprocessLaTeX）在语料库中从未被覆盖等问题。这是针对 100K+ token 长上下文卡顿的系统性治理，虽未直接产出优化数字，但为后续优化提供可量化的“尺子”。

## 5. 稳定性与回归

按严重程度排列：

**高—训练/导出正确性受损：**
- [Bug] `embed_tokens`/`lm_head` 在 CPT（继续预训练）时被 `target_modules` 静默丢弃，不训练亦无警告（[#9326](https://github.com/unslothai/unsloth/issues/9326)）→ 无 fix PR。
- [Bug] 量化 KV cache 在张量并行时被丢弃（[#8888](https://github.com/unslothai/unsloth/issues/8888)）→ **[PR #8939](https://github.com/unslothai/unsloth/pull/8939) 已修复**（Open 状态）。

**高—崩溃/不可用：**
- [Bug] macOS 加载 Qwen3.8-27B 任意官方量化时，桌面应用闪紫屏、屏幕闪烁、系统濒临崩溃；LM Studio 无此问题（[#9279](https://github.com/unslothai/unsloth/issues/9279)）→ 无 fix，应该是当前最严重的桌面端 issue。
- [Bug] 首次启动 setup 失败（`Can not acquire lock`），RTX 4090 / CUDA（[#9140](https://github.com/unslothai/unsloth/issues/9140)）→ 已关闭，状态未知。
- [Bug] NVFP4 无法在 RTX 5060 Ti 16GB 加载（[#8246](https://github.com/unslothai/unsloth/issues/8246)）→ 无 fix。

**中—功能异常：**
- [Bug] Studio 显示本地模型已加载，但每次请求返回 HTTP 400（[#9398](https://github.com/unslothai/unsloth/issues/9398)）→ 新提交，无 fix。
- [Bug] 工具调用失败：NVIDIA Nemotron API 返回 `tool_calls[0].function.arguments` 非法 JSON（[#9338](https://github.com/unslothai/unsloth/issues/9338)）→ 无 fix，影响 Agent 场景。
- [Bug] 图像生成卡在 "Preparing (text encoding + warmup)... 0%"（[#9404](https://github.com/unslothai/unsloth/issues/9404)）→ 无 fix。
- [Bug] `_Noop` object is not iterable — Mac 上加载 Ideogram 4 失败（[#8940](https://github.com/unslothai/unsloth/issues/8940)）→ 已关闭。

**中—环境/集成问题：**
- [Bug] 部分模型绕过 `HF_ENDPOINT` 强制从 huggingface.co 下载（[#1353](https://github.com/unslothai/unsloth/issues/1353)）→ 标题标 `currently fixing`，影响国内镜像站用户。

**低—桌面/UI：**
- [Bug] macOS 桌面版文本编码错误（[#8594](https://github.com/unslothai/unsloth/issues/8594)）；下载速度指示器不准（[#9378](https://github.com/unslothai/unsloth/issues/9378)，已关闭）；统计信息不刷新（[#9337](https://github.com/unslothai/unsloth/issues/9337)）。

## 6. 对应用开发者的意义

- **Agent / 工具调用需注意**：`#9338` 表明通过 Studio 代理的 OpenAI-兼容工具调用，在部分上游 API（如 NVIDIA Nemotron）上存在参数序列化校验失败问题。依赖 tool calling 的 Agent 应用需在集成侧做好容错/重试，并关注后续修复。
- **模型选择 API 缺少量化维度**：`#9340` 报告 `/v1/models` 列表不会暴露同一模型的多个量化版本（如 Q8 与 Q4_K_M），程序化选择特定量化不可行，对需要精细控制显存/质量的开发者构成障碍。
- **LoRA 微调 API 行为将变更**：**[PR #9436](https://github.com/unslothai/unsloth/pull/9436)** 将 `finetune_language_layers`、`finetune_attention_modules`、`finetune_mlp_modules` 默认值从 `False` 改为 `True`。当前通过 API/MCP 调用但未显式传这些字段的微调任务会得到“LoRA 挂在空处”的结果，升级后默认行为将修复这一陷阱——但依赖旧默认值的自动化脚本需注意行为变化。
- **本地模型发现能力增强**：**[PR #9435](https://github.com/unslothai/unsloth/pull/9435)** 让 `unsloth chat` 的模型选择器显示所有本地模型（而非仅 `outputs/` 下的微调产物），CLI 用户的本地模型管理体验将明显改善。
- **局域网部署成为可能**：v0.1.801-beta 的 LAN Remote Access 意味着 Unsloth 可作为多机共享的本地推理服务，但需留意安全边界：`#8868` 显示 `-H 0.0.0.0` 在 macOS 上可能绑定错误 IP，公网/跨网段暴露前务必验证监听地址。

**主要引用链接**
- Releases: https://github.com/unslothai/unsloth/releases
- Top Issues: [#9279](https://github.com/unslothai/unsloth/issues/9279) | [#9326](https://github.com/unslothai/unsloth/issues/9326) | [#9338](https://github.com/unslothai/unsloth/issues/9338) | [#9340](https://github.com/unslothai/unsloth/issues/9340) | [#9398](https://github.com/unslothai/unsloth/issues/9398) | [#8246](https://github.com/unslothai/unsloth/issues/8246) | [#1353](https://github.com/unslothai/unsloth/issues/1353)
- Top PRs: [#8939](https://github.com/unslothai/unsloth/pull/8939) | [#9436](https://github.com/unslothai/unsloth/pull/9436) | [#9435](https://github.com/unslothai/unsloth/pull/9435) | [#9296](https://github.com/unslothai/unsloth/pull/9296) | [#8866](https://github.com/unslothai/unsloth/pull/8866) | [#8884](https://github.com/unslothai/unsloth/pull/8884) | [#9187](https://github.com/unslothai/unsloth/pull/9187)

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*