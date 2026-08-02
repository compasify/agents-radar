# AI 基础设施日报 2026-08-02

> 生成时间: 2026-08-02 01:43 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施生态横向对比分析报告 — 2026-08-02

## 1. 生态全景

当前 AI 基础设施处于"新模型架构消化期"与"自身架构升级期"叠加阶段。DeepSeek-V4-Flash-0731 与 Kimi-K3 等混合稀疏注意力 + MoE 模型的发布，使 vLLM、SGLang、llama.cpp 在 24 小时内集中出现大量适配补丁与回归修复，新模型集成已成为推理栈主力工作负载。与此同时，vLLM MRV2、SGLang kernel 命名空间统一、LiteLLM Rust 迁移等架构级重构同步推进，行业开始从"功能扩张"转向"结构性整合"。值得警惕的是，正确性普遍滞后于功能上线：NaN logits 静默输出、工具调用回归、量化 KV cache 损坏、多后端崩溃等"隐蔽故障"在多个项目中同时出现。硬件适配梯度也在拉大——Blackwell/ROCm 为第一梯队，Ampere、Intel、Apple 非主流后端的支持缺口正成为部署瓶颈。

## 2. 各项目活跃度对比

以下数据基于各项目日报中具名引用的 Issue/PR 条目（SGLang 为仓库口径的 24 小时全量计数）：

| 项目 | Release | 具名 PR 数 | 具名 Issue 数 | 活跃特征 |
|---|---|---|---|---|
| **vLLM** | 无 | ~15 | ~18 | MRV2 能力补齐为主轴，Kimi-K3/DeepSeek-V4 适配引发 CI 连锁修复 |
| **SGLang** | 无 | 169（全量） | 34（全量） | DeepSeek-V4 适配问题集中爆发，Kimi-K3 正确性 bug 待解 |
| **llama.cpp** | **5 个**（b10217→b10223） | ~16 | ~13 | 多后端（ROCm/Vulkan/SYCL）回归修复 + 新架构支持 |
| **Ollama** | 无 | ~5 | ~15 | 工具调用正确性与 embedding 崩溃是主要矛盾 |
| **LiteLLM** | 无 | ~14 | ~8 | OTEL v2 多租户追踪系列 PR 密集推进 + hook 正确性修复 |
| **Unsloth** | 无 | 44（活跃） | ~9 | 后端 CI 全红治理、Windows/ROCm 多平台稳定性修复 |

**解读**：llama.cpp 是唯一保持高频发版的项目（5 个 release），与其本地运行时定位一致；SGLang 在仓库层面 PR/Issue 量最大，主要集中在 DeepSeek-V4 适配火山口；vLLM 的活跃度体现在 MRV2 架构攻坚而非版本发布；Ollama 与 LiteLLM 作为上层服务，问题集中在兼容层语义而非内核性能。

## 3. 模型支持竞速

| 新模型/架构 | vLLM | SGLang | llama.cpp | Ollama |
|---|---|---|---|---|
| **DeepSeek-V4-Flash-0731** | 🔶 SM8x 支持被请求，Ampere 被阻塞(#50576) | 🔶 3+ 阻塞 bug，Ampere 不可用(#33194) | 🔶 K-cache 量化损坏已修复(#25391)，CPU 主 PR(#23122)推进中 | 🔴 本地支持请求无回应(#17510) |
| **Kimi-K3** | 🟢 功能落地中，ROCm CI 有回归(#50001) | 🔶 Day-0 镜像已发布，但存在精度/PAD 注入 bug(#32968) | ⚪ 未提及 | ⚪ 未提及 |
| **Minimax M3** | 🟢 全链路闭环（FP8 indexer/sparse GQA/MXFP8 MoE） | ⚪ | ⚪ | ⚪ |
| **Qwen3.5-MoE** | 🟢 transformers 5.x 兼容已修复(#50704) | 🔶 配置 alias 不识别(#33207) | 🔶 SYCL 崩溃回归(#24168) | ⚪ |
| **MiniCPM-V 4.6** | ⚪ | ⚪ | 🟢 b10218 落地 downsample 支持 | ⚪ |
| **Motif 3 Beta** | ⚪ | ⚪ | 🟢 GDLA 架构 PR(#26298) + CUDA FA 扩展 | ⚪ |
| **Lumina-Image-2.0** | ⚪ | 🟢 文生图 pipeline PR(#33122) | ⚪ | ⚪ |

**结论**：vLLM 在"支持广度 + 深度"上领先——Minimax M3 完成全链路、Kimi-K3 功能落地、Qwen3.5-MoE 修复完毕；llama.cpp 在本地/边缘侧最具进取性，Motif 3 与 MiniCPM-V 4.6 是新架构首发平台；SGLang 在 DeepSeek-V4/Kimi-K3 上跟进最快但正确性债最重，产品上线与 bug 修复并行；Ollama 处于被动跟随状态，对 deepseek-v4-flash:0731 的请求尚未响应。**没有任何项目做到新模型无痛支持**，这本身就是一个信号。

## 4. 性能优化前沿

各项目优化火力按方向分布如下：

| 方向 | 代表工作 | 项目 |
|---|---|---|
| **KV Cache** | 2-bit 量化省 5x 显存（#46774）；hybrid-SWA prefix cache 归零修复（#48435） | vLLM |
| | 会话感知 Radix Cache 防误淘汰（#29173）；FA4 decode descale 修复（#33227） | SGLang |
| | Metal q8_0 KV 优化（#25556）；K-cache Hadamard 旋转损坏修复（#25391） | llama.cpp |
| **量化** | AutoRound block-wise FP8 测试完善（#47434）；Oscar-2 2-bit KV 后端 | vLLM |
| | nvfp4 视觉能力静默失效待修复（#17501） | Ollama |
| **MoE / 稀疏** | 增量专家 CPU offload RFC（#38256）；FusedMoEFactory 命名重构 | vLLM |
| | Inkling MoE 去 Helion 依赖（#33224）；TGV GEMM split-K 补 7168 hidden 上限（#33222） | SGLang |
| | `--pin-hot-experts` 专家页锁定防延迟尖峰（#26414） | llama.cpp |
| **分布式** | NIXL P/D segfault（#49238）；TP worker hang（#41530）；custom all-reduce 门控统一（#50490） | vLLM |
| | TP 参数服务器 LMHead All-to-All（#32313）；FlashInfer CP-v2 prefill（#33226） | SGLang |
| | Apple RDMA 作 RPC 传输（#26421） | llama.cpp |
| **算子内核** | ROCm wvSplitK OOB 修复（#50618）；Kimi-K3 FP8 MLA 边界修复（#50619） | vLLM |
| | 统一 `sglang.kernels.ops.*` 命名空间（#29630/#33205）；CuTe DSL split-K | SGLang |
| | CUDA batched top-k 替代串行 dispatch（#26390）；RDNA4 FA 深度 prompt 2x 回归修复（#26419） | llama.cpp |
| **调度/吞吐** | MRV2 补齐 spec decode/LoRA/prompt embeds（#43091 等）；bench serve 峰值吞吐口径修正（#50677） | vLLM |
| | 流式 goroutine 泄漏修复（#17135） | Ollama |

**共性规律**：(1) KV cache 是各项目最高的优化优先级，2-bit 量化、prefix cache 语义、量化 cache 正确性三线并进；(2) 稀疏注意力（DSpark/SWA/GLA）kernel 正成为 Blackwell 代际的新性能分水岭；(3) 分布式层的修复多于优化——P/D 分离、TP hang、RDMA 传输说明大规模部署稳定性仍是短板。

## 5. 分层定位差异

| 层次 | 项目 | 定位 | 核心差异化 | 今日动态印证 |
|---|---|---|---|---|
| **推理引擎（服务端）** | vLLM | 生产级高性能推理服务 | MRV2 架构升级、企业级稳定性（P/D、TP、多后端） | MRV2 系列 PR 密集推进，吞吐指标修正，NIXL/TP 稳定性修复 |
| | SGLang | 推理引擎（创新加速型） | Radix Cache 前缀复用、kernel 深度定制、agentic 负载优化 | 会话感知 cache、统一 kernel 命名空间、DeepSeek-V4 快速适配 |
| **本地运行时** | llama.cpp | 跨平台本地/边缘推理 | GGUF 生态、量化极致、多后端（CPU/Vulkan/SYCL/Metal/RPC） | 5 个 release 高频发版，RDNA4/SYCL 回归修复，Apple RDMA |
| **本地部署层** | Ollama | 开发者体验优先的本地部署 | 极简 API、模型管理、OpenAI 兼容 | 工具调用回归、embedding 崩溃、兼容层语义修补 |
| **网关层** | LiteLLM | 企业 LLM 网关 | 多租户路由、成本治理、统一 API 面 | OTEL v2 身份域追踪、key/team 限流修复、Rust 迁移 |
| **训练/微调层** | Unsloth | 微调加速框架 | LoRA 训练 2-5x 加速、GGUF 导出链路、Studio | GGUF 推荐策略统一、ROCm 镜像推进、CI 治理 |

**依赖关系**：Unsloth 与 Ollama 均依赖 llama.cpp 做推理后端；LiteLLM 位于所有推理引擎之上游，其生态兼容性受 vLLM/SGLang/Ollama 的 API 变更影响；vLLM 与 SGLang 在服务端推理直接竞争，但 SGLang 更偏向长会话/agentic 负载，vLLM 更偏向通用生产稳定性。**值得注意的空白**：训练/微调与推理之间（即 Unsloth 与 vLLM/SGLang 集成链路）今日无重大动态，微调产物到生产部署之间的格式转换（GGUF/AutoRound FP8）仍是碎片化地带。

## 6. 值得关注的趋势信号

**趋势一：新一代稀疏注意力模型正在重构推理栈的全部层次。**
DeepSeek-V4（DSpark 稀疏注意力）与 Kimi-K3（FP8 MLA + 稀疏 GQA）不是简单的新 checkpoint，而是要求 kernel、cache、调度器、甚至 CI 测试门控都为其重塑。vLLM 出现 K3 导致的 ROCm CI 破坏、SGLang 出现 K3 长上下文 PAD 污染 + DSPARK NaN、llama.cpp 出现 K-cache 量化旋转损坏——**稀疏注意力 + 量化 + 多硬件的组合是当前正确性事故的高发区**，生产部署前需重点验证这三者的交叉矩阵。

**趋势二：硬件代际适配梯度扩大，Ampere 正在被"半抛弃"。**
DeepSeek-V4-Flash 在 vLLM 与 SGLang 上同时无法在 SM8x 运行，且社区呼声较高但尚无 PR 启动（vLLM #50576、SGLang #33194）。同时 Vulkan（vLLM #21182）与 ROCm RDNA4 的请求持续堆积。**对基础设施决策者：新模型选型前务必确认硬件算力代际，A100/A800 可能无法运行 2026 下半年最前沿的稀疏模型。**

**趋势三："静默失败"成为比崩溃危害更大的可靠性风险。**
- SGLang `SGLANG_SANITIZE_NAN_LOGITS` 将全 NaN 行替换为 uniform-random 输出，客户端收到的是看似正常实则无意义的内容；
- Ollama qwen3.6 nvfp4 声称支持视觉但静默丢弃图像；
- LiteLLM `RejectedRequestError` 前缀泄露进用户可见的 completion 内容。
**这三个案例的共同点是小概率路径下的错误被"正常化"**，在 agent 场景下可能被错误反馈循环放大。应用层应增加对异常输出模式的检测（随机性、重复 token、空 content）。

**趋势四：基础设施进入架构重构期，短期兼容性风险上升。**
vLLM MRV2、SGLang kernel 命名空间统一、LiteLLM Rust 迁移（目标 sub-1ms 开销）、llama.cpp `reasoning_content` 持久化行为变更（b10219）——四条重构线同时推进。**对下游的直接影响**：依赖 spec decode/LoRA 深度集成的应用不应在 MRV2 默认启用前切换；自定义 kernel 插件需关注 SGLang 命名空间收敛；LiteLLM OTEL v2 合并后管理员必须显式重新配置 trace destination，否则追踪静默丢失。

**趋势五：可观测性与成本治理在网关/部署层快速补课。**
Ollama 新增 Prometheus `/metrics` 端点（#16998）、LiteLLM OTEL v2 多租户追踪 + Redis 遥测 GC 丢失修复 + DashScope 阶梯计价修正 + key 级限流双重计数修复——**这些动作共同指向：当推理性能趋同后，成本归属准确性与可观测性正在成为企业选型的关键差异化因素**。建议有预算治理需求的团队关注完成时间线，提前规划 dashboards 口径迁移。

**对 Agent/应用开发者的操作建议**：
1. **版本锁定 + 回归清单**：Ollama 在 0.32.4/0.32.5 破坏 VS Code Copilot Harness（#17444）、gemma4 tool parsing 4 个月未修复（#15315）、llama.cpp b10219 改变 reasoning 历史回放行为——升级任何一层前，先跑一遍工具调用 + 流式输出 + 多轮历史的回归用例。
2. **推理栈降级预案**：Apple Silicon 上 qwen3-embedding 崩溃/挂死（#17509/#17428），建议 embedding 服务与主推理分离部署，或准备替代模型。
3. **监控 NaN/异常输出**：SGLang 的 NaN sanitize 静默输出与 Kimi-K3 的 [PAD] 注入（#32968）说明**上游输入可以触发下游数据污染**，生产环境需同时在网关与客户端两层做输出 sanity check。
4. **长会话场景预留 cache 水位线**：vLLM 在 cache 近满时吞吐骤降（#23444）与 hybrid-SWA prefix 复用归零（#48435），agent 长会话部署需提前压测缓存压力水位，并考虑 SGLang 会话感知 Radix Cache（#29173）的替代方案。
5. **关注 llama.cpp `--pin-hot-experts`**（#26414）与 vLLM 增量 MoE CPU offload（#38256）——两个正在解决同一问题的不同思路：前者对内存超卖的本地部署有效，后者面向超大 MoE 的服务端显存受限场景，均值得在各自领域跟进验证。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 动态日报 — 2026-08-02

## 1. 今日速览

过去 24 小时 vLLM 没有新版本发布，主线集中在三方面：**Model Runner V2（MRV2）系列 PR 密集推进**（spec decode、LoRA、prompt embeds），为下一代模型执行器补齐核心能力；**Kimi K3 集成持续引发 CI/硬件适配连锁反应**，社区正在修复 ROCm 上由 K3 引入的 FP8 MLA 验证与自定义 all-reduce 回归；**DeepSeek-V4-Flash-0731 发布后，Ampere（SM8x）支持请求迅速升温**，成为当前社区呼声最高的硬件适配缺口之一。

## 2. 版本发布与破坏性变更

无新 release 标签。注意 `FusedMoE` 已重命名为 `FusedMoEFactory`，文档已修正（[PR #50701](https://github.com/vllm-project/vllm/pull/50701)），下游若直接引用旧类名需同步更新。

## 3. 新模型与硬件支持

- **DeepSeek-V4-Flash / V4-Flash-0731（DSpark）SM8x 支持**：新 issue 请求为 Ampere 架构（A100/A800/RTX 30xx）补充 DSpark 稀疏注意力相关 kernel，目前该系列 checkpoint 无法在 SM8x 上运行（[Issue #50576](https://github.com/vllm-project/vllm/issues/50576)）。
- **Qwen3.5-MoE text-only 模型兼容 transformers 5.x**：修复 `Qwen3_5MoeTextConfig` 类重命名导致的加载失败，适配 transformers 5.2/5.3（[PR #50704](https://github.com/vllm-project/vllm/pull/50704)，对应 [Issue #36236](https://github.com/vllm-project/vllm/issues/36236)）。
- **Kimi K3 支持跟踪**：KV cache 管理器、KDA kernel、稀疏 GQA 等多项子任务并行推进中（[Issue #50001](https://github.com/vllm-project/vllm/issues/50001)）。
- **Minimax M3 路线图闭环**：FP8 indexer、FP8 sparse GQA、FlashInfer TRTLLM MXFP8 MoE 均已落地，tracking issue 已关闭（[Issue #45668](https://github.com/vllm-project/vllm/issues/45668)）。
- **Vulkan 后端支持请求**：社区持续呼吁补齐 Vulkan 后端以覆盖 commodity 硬件，已获得 30 👍，但目前仍为 open 状态（[Issue #21182](https://github.com/vllm-project/vllm/issues/21182)）。
- **新量化格式支持**：AutoRound block-wise FP8 格式支持 PR 更新了更多测试结果（[PR #47434](https://github.com/vllm-project/vllm/pull/47434)）；另有 2-bit KV cache 量化后端（Oscar-2）进行中，宣称比 FP16 节省 5 倍显存（[PR #46774](https://github.com/vllm-project/vllm/pull/46774)）。
- **ROCm/RDNA4 多模态加载失败**：gfx1201 上 vision encoder 的 `vit_torch_sdpa_wrapper` 报非法 CUDA 参数，文本模型正常（[Issue #49851](https://github.com/vllm-project/vllm/issues/49851)）。

## 4. 性能与优化

- **吞吐统计 Bug 修复**：`vllm bench serve` 在 speculative decoding 下报告“峰值输出吞吐低于平均”的不可能结果，修复改为按 token 数而非 chunk 数计算峰值吞吐（[PR #50677](https://github.com/vllm-project/vllm/pull/50677)）。
- **MRV2 生态补齐**：多份 PR 同时推进 Model Runner V2 的能力对齐，包括 spec decode + draft model、LoRA CUDA graph 支持、prompt embeds、spec decode + mamba prefix caching 等（[PR #43091](https://github.com/vllm-project/vllm/pull/43091)、[PR #41732](https://github.com/vllm-project/vllm/pull/41732)、[PR #42963](https://github.com/vllm-project/vllm/pull/42963)、[PR #42792](https://github.com/vllm-project/vllm/pull/42792)）。
- **增量 MoE 专家卸载方案**：RFC 提出基于 LFRU 缓存的 CPU offload + 异步 pipeline，让超大 MoE 模型在更小显存上运行，PR 1 已开放（[Issue #38256](https://github.com/vllm-project/vllm/issues/38256)）。
- **ROCm wvSplitK 性能修复**：修复 strided activations 导致的 OOB 读取，dispatch 前显式检查二维布局是否 dense row-major（[PR #50618](https://github.com/vllm-project/vllm/pull/50618)）。
- **Kimi-K3 DSpark FP8 MLA 验证修复**：针对 TP8 下 12 MLA query heads/rank 的边界条件修复，涉及 draft backend 图策略与 AITE 相关配置（[PR #50619](https://github.com/vllm-project/vllm/pull/50619)）。
- **RDNA3 MoE dispatch 重构**：建议将 W4A16 fused MoE 的 inline dispatch 改为 oracle/expert class 模式，便于扩展（[Issue #44460](https://github.com/vllm-project/vllm/issues/44460)）。

## 5. 稳定性与回归

按严重程度排列（已有关联 fix PR 的单独标注）：

- **TP Worker hang 导致 EngineDeadError**：DeepSeek-V4-Pro，TP=8 + MTP 投机解码下 `sample_tokens` RPC 超时，整个引擎不可用（[Issue #41530](https://github.com/vllm-project/vllm/issues/41530)）。
- **CUDA illegal memory access**：GPTQ Marlin kernel 触发非法内存访问，issue 已关闭但未见公开修复细节（[Issue #36811](https://github.com/vllm-project/vllm/issues/36811)）。
- **NIXL decode 实例 segfault**：prefill pod 重启后 `loadRemoteMD` 段错误，P/D 分离部署稳定性隐患（[Issue #49238](https://github.com/vllm-project/vllm/issues/49238)）。
- **AsyncScheduler 崩溃**：Realtime ASR 流式场景下 `num_output_placeholders` 下溢，`AssertionError` 杀死 EngineCore（[Issue #35755](https://github.com/vllm-project/vllm/issues/35755)）。
- **KV cache 占满导致吞吐骤降**：接近 100% cache 占用时 waiting 时间飙升，吞吐几乎归零（[Issue #23444](https://github.com/vllm-project/vllm/issues/23444)）。
- **XPU GDN attention 内存损坏**：vllm-xpu-kernels 已合并修复，但 `requirements/xpu.txt` 仍 pin 旧版本，需要依赖升级（[Issue #49924](https://github.com/vllm-project/vllm/issues/49924)）。
- **XPU 多卡 TP 挂起**：Intel Arc Pro B60 上 oneCCL 2022.x allreduce warmup 不返回，GuC timeout + DEVICE_LOST（[Issue #50545](https://github.com/vllm-project/vllm/issues/50545)）。
- **H200-NVL FlashInfer fused allreduce 崩溃**：TP=8 时 CUDA graph capture 崩溃，TRTLLM workaround 比禁用融合慢 34 倍（[Issue #48071](https://github.com/vllm-project/vllm/issues/48071)）。
- **hybrid-SWA prefix caching 归零**：多会话 round-robin 下，约 25% 池占用时 prefix cache 复用率突然降为 0（[Issue #48435](https://github.com/vllm-project/vllm/issues/48435)）。
- **DSpark warmup 崩溃**：SWA-only draft layer 未分配 sparse index buffer 时 warmup 断言失败，已有修复 PR（[PR #50693](https://github.com/vllm-project/vllm/pull/50693)，fixes [Issue #50615](https://github.com/vllm-project/vllm/issues/50615)）。
- **Gemma4 KV-shared layer 崩溃**：当滑动窗口层找不到同类型共享目标时 `list.index()` 抛出 ValueError，已有修复（[PR #48365](https://github.com/vllm-project/vllm/pull/48365)）。
- **Kimi K3 CI 回归**：上周 K3 集成导致 ROCm CI 两次被破坏，测试因 `optional: true` 只在 nightly 运行；新 PR 正在统一 CUDA/ROCm custom-all-reduce + KDA 测试门控（[PR #50490](https://github.com/vllm-project/vllm/pull/50490)）。
- **MRV2 Gumbel 采样 -inf 处理**：非有限 logits 下 Gumbel 噪声可能变为 inf，需在 float 精度下保护端点（[PR #43249](https://github.com/vllm-project/vllm/pull/43249)）。

## 6. 对应用开发者的意义

- **MRV2 是近期最大的架构变量**：多个 spec decode、LoRA、prompt embeds 的 PR 集中在 Model Runner V2 上，如果应用深度依赖这些功能，建议跟踪合并时间线，避免在 MRV2 默认启用前盲目切换。
- **新模型支持节奏分化明显**：Minimax M3 已完成全链路支持（含 FP8 稀疏优化），Kimi K3 功能落地但 CI 稳定性还在修补中，DeepSeek-V4-Flash 在 Ampere 上暂时不可用——选型时需确认部署硬件的算力代际。
- **吞吐指标口径正在修正**：`vllm bench serve` 的峰值吞吐统计有 Bug，修复后会改变 benchmark 报告的数值含义，此前基于该指标做的容量规划需要重新校准。
- **部署稳定性风险集中在 P/D 分离和 XPU**：如果使用 P/D 分离（NIXL）或 Intel GPU，建议暂缓升级，等待 `loadRemoteMD` segfault 与 GDN 依赖升级的修复合入；CUDA 环境需留意 GPTQ Marlin kernel 的已知非法内存访问问题。
- **KV cache 压力测试值得提前做**：cache 近满时吞吐骤降和 hybrid-SWA 前缀复用归零，直接影响了长 session + 多路复用的场景，建议在真实工作负载下验证前缀命中的水位线。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 动态日报 — 2026-08-02

## 今日速览

今日无新 Release，但主线活跃度极高：围绕 **DeepSeek-V4 系列** 新模型的适配问题集中爆发（配置名识别、reasoning_effort 映射偏差、Ampere 平台阻塞），同时 **Kimi-K3** 仍有多起正确性与稳定性问题待解。基础设施侧有两项值得关注的持续 PR：CUDA 栈升级至 PyTorch 2.13（#28836），以及 RFC #29630 所提出的统一 kernel 命名空间落地推进（#33205）。

---

## 版本发布与破坏性变更

**无新版本发布。** 以下进行中变更可能影响现有部署，建议关注：

- **[Deps] CUDA PyTorch 栈升级至 2.13**（[PR #28836](https://github.com/sgl-project/sglang/pull/28836)，[OPEN]）— torch 2.11→2.13、triton 3.6→3.7.1。涉及 CUDA/Blackwell/NPU 等多后端，合并后需同步升级运行环境。
- **[RFC] 统一 sglang.kernels 命名空间**（[Issue #29630](https://github.com/sgl-project/sglang/issues/29630)，👍 12）— 分散的 kernel 代码（jit_kernel/sgl_kernel/triton_ops）将收敛至 `sglang.kernels.ops.*` 公共导入面。配套 PR [#33205](https://github.com/sgl-project/sglang/pull/33205) 正在统一 `BaseFusedOp` 与 `MultiPlatformOp` 分发逻辑，对 OOT 插件作者有 API 影响。

---

## 新模型与硬件支持

- **Kimi-K3 Day-0 支持**（[PR #32541](https://github.com/sgl-project/sglang/pull/32541)，[OPEN]）— 已完成 NVIDIA CUDA 12/13 及 AMD ROCm 镜像发布（`lmsysorg/sglang:kimi-k3` 等）。⚠️ 但配套存在多个未解决 bug，见下文稳定性章节。
- **Lumina-Image-2.0（NextDiT）**（[PR #33122](https://github.com/sgl-project/sglang/pull/33122)，[OPEN]）— 新增 Alpha-VLLM 2B 流匹配 DiT 文生图 pipeline，使用 Gemma-2 text encoder + FLUX.1-dev VAE。
- **Apertus 1.5 多模态模型家族**（[PR #32979](https://github.com/sgl-project/sglang/pull/32979)，[OPEN]）— 支持交错文本/图像/音频输入，含 HF 兼容 prompt 扩展。
- **逐张量 FP8 checkpoint 路由至 FlashInfer（SM89/SM90）**（[Issue #32993](https://github.com/sgl-project/sglang/issues/32993)，[OPEN]）— 当前逐张量 FP8 在 Hopper/Ampere 上无法走 FlashInfer 后端，请求特性支持。

---

## 性能与优化

- **TP 参数服务器 LMHead 优化为 All-to-All**（[PR #32313](https://github.com/sgl-project/sglang/pull/32313)，[OPEN]）— 替代逐 rank gather，降低 TP 通信开销，对大规模 TP 部署有吞吐收益。
- **Inkling MoE：移除 Helion 依赖 + 调优 Triton silu_and_mul**（[PR #33224](https://github.com/sgl-project/sglang/pull/33224)，[OPEN]）— Helion 原先依赖离线 autotune 表（需按 GPU 重新生成），改为 SGLang 自持 kernel，提升可维护性与部署便利性。
- **CuTe DSL TGV BF16 GEMM 增加 split-K 策略**（[PR #33222](https://github.com/sgl-project/sglang/pull/33222)，[OPEN]）— 解决 `hidden_size=7168`（如 Kimi-K3）的 GEMM k 上限 6144 问题，使 TGV kernel 在这些形状上不再回退 cuBLAS。
- **FlashInfer prefill 上下文并行（CP）支持**（[PR #33226](https://github.com/sgl-project/sglang/pull/33226)，[OPEN]）— FlashInfer 此前不支持 CP-v2 prefill，现补上 CP-aware paged prefill 元数据与执行路径，使 dense MHA/GQA 模型可用 zigzag CP 策略。
- **会话感知统一 Radix Cache**（[PR #29173](https://github.com/sgl-project/sglang/pull/29173)，[OPEN]，high priority）— 针对 agentic 多轮工作负载，在内存压力下避免误淘汰活跃会话的 KV 前缀，对长会话场景可以稳定提升命中率。
- **优化 extend 请求的 decode KV 刷写**（[PR #30578](https://github.com/sgl-project/sglang/pull/30578)，[OPEN]）— Apple Silicon 平台，extend 场景下仅对 prefill 读取刷写 decode KV。

---

## 稳定性与回归

按严重程度排序，标注 fix PR 状态。今日无崩溃级阻断，但存在若干高影响正确性/设计问题：

**🔴 高**

- **SGLANG_SANITIZE_NAN_LOGITS 的静默错误输出设计缺陷**（[Issue #33187](https://github.com/sgl-project/sglang/issues/33187)，[OPEN]，来自生产环境）— 启用 `SGLANG_SANITIZE_NAN_LOGITS=1` 后，全 NaN logits 行会被替换为 uniform-random 采样，导致**向客户端静默推流无意义内容**而非崩溃。提案：增加按请求 opt-in 的中止机制。对生产可靠性有直接影响。
- **Kimi-K3 长上下文 [PAD] 风暴 + DSPARK NaN 断言**（[Issue #32968](https://github.com/sgl-project/sglang/issues/32968)，[OPEN]）— 释放的 kimi-k3 镜像未包含 #32477 修复，[PAD]（id 163839）未被拦截导致 logits NaN 污染；`allowed_special="all"` 时更可被注入触发。Kimi-K3 用户需升级镜像并关注修复落地。

**🟠 中**

- **Kimi-K3 在 τ³-Banking 上准确率异常（17.53 分）**（[Issue #33223](https://github.com/sgl-project/sglang/issues/33223)，[OPEN]）— 使用最新 kimi-k3 镜像 + TP8 配置出现严重精度下降，未见复现配置以外细节。
- **DeepSeek-V4-Flash-0731 在 Ampere（8x A800, SM80）的多个阻塞问题**（[Issue #33194](https://github.com/sgl-project/sglang/issues/33194)，[OPEN]）— 除已知 `deep_gemm` NameError 外，还有三个后续阻塞点。Ampere 用户暂不建议升级至该版本。
- **DeepSeek-V4-Flash-0731 reasoning_effort 映射偏差**（[Issue #33185](https://github.com/sgl-project/sglang/issues/33185)，[OPEN]，👍 1）— `high` 映射为 no-op，vendor `max` 不可达，影响推理质量调节。
- **DeepSeek-V4 默认配置阻止投机解码重置 max-running-requests 至 48**（[Issue #33199](https://github.com/sgl-project/sglang/issues/33199)，[OPEN]）— 存在于 `main`（commit `ae84811`），含最小复现。
- **不识别配置类 `_DeepseekV4ConfigAlias`**（[Issue #33207](https://github.com/sgl-project/sglang/issues/33207)，[OPEN]）— 新 alias 类未被 HF transformers 正常注册，加载 DeepSeek-V4 checkpoint 报错。
- **FA4 decode 不支持的 descale 参数**（[PR #33227](https://github.com/sgl-project/sglang/pull/33227)，[OPEN]）— 修复 #31640：FA4 decode 错误进入常规 FP8 KV-cache scaling 路径，向 FA4 kernel 传入其不支持的 `k_descale/v_descale`。extend 路径已排除，decode 路径将对齐。
- **SGLANG_ENABLE_JIT_DEEPGEMM=0 时 deep_gemm NameError**（[Issue #29738](https://github.com/sgl-project/sglang/issues/29738)，[OPEN]）— `tf32_hc_prenorm_gemm` 在禁用 JIT deep_gemm 时仍引用未定义名称。

**🟡 低 / 工具链**

- **批量嵌入请求在调度前优先级被丢弃**（[Issue #32844](https://github.com/sgl-project/sglang/issues/32844)，[OPEN]）— 影响 embedding 场景 QoS。
- **MiMo 工具调用流式输出丢文本**（[Issue #33186](https://github.com/sgl-project/sglang/issues/33186)，[OPEN]）— 最后一个 tool call 之后的内容在流式中静默丢失；bot token 拆分包导致标记泄漏进 content。
- **Inkling 推理解析器工具名泄漏**（[Issue #33181](https://github.com/sgl-project/sglang/issues/33181)，[OPEN]）— 以工具调用开头的回合，工具名错误地出现在可见内容中。
- **Cohere Command4 流式解析漂移**（[PR #33225](https://github.com/sgl-project/sglang/pull/33225)，[OPEN]）— 修复流式下 echoed `<|START_THINKING|>` 未剥离、最终文本块未 flush 的问题。
- **Rust 服务器 tokenizer 路径解析错误**（[PR #33219](https://github.com/sgl-project/sglang/pull/33219)，[OPEN]）— 当 `HUGGINGFACE_HUB_CACHE != $HF_HOME/hub` 时，Rust `hf-hub` 与 Python `huggingface_hub` 缓存路径不一致，repo-id tokenizer 加载失败。

---

## 对应用开发者的意义

- **Agent 框架开发者重点关注 Radix Cache 会话感知方案**（[PR #29173](https://github.com/sgl-project/sglang/pull/29173)）：当前标准 radix cache 在内存压力下会无条件淘汰前缀，agentic 多轮工作负载的命中率受损。该 PR 引入 session-reference-aware 淘汰策略，正在评审中，值得跟进。
- **工具调用相关解析器仍不够健壮**：今日新增 MiMo（#33186）和 Inkling（#33181）两个解析器 bug，加上此前 GLM/Qwen 的工具调用问题（#22042、#26790），建议在应用层对 `tool_calls` 流式结果做防御性校验，尤其是 content 为空或缺失的场景。
- **生产环境启用 NaN 日志消毒需谨慎**（[#33187](https://github.com/sgl-project/sglang/issues/33187)）：该开关能防止进程崩溃，但会把故障转换为静默错误输出，对用户侧更加隐蔽。建议同时在上游加日志监控/断言，并在客户端对异常输出（如 uniform-random 文本）做检测。
- **Kimi-K3 / DeepSeek-V4 系列新模型适配尚未稳定**：两者均为近期上线的新模型，存在多个 open issues（Kimi-K3：精度、PAD 注入、日志 NaN；DeepSeek-V4：配置加载、reasoning_effort、Ampere 阻塞）。如非必要，建议在生产环境等待修复合入后再升级。
- **CUDA 栈升级（#28836）是计划中的破坏性变更**：升级至 PyTorch 2.13 / Triton 3.7 将影响自定义 kernel 与依赖项的二进制兼容性，建议提前验证自有算子扩展。

---

*数据范围：2026-08-01 至 2026-08-02 期间更新的 34 条 Issues 与 169 条 PRs。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 动态日报 — 2026-08-02

## 今日速览

今日最值得关注的是 **DeepSeek V4 相关问题的集中爆发**：多个后端（ROCm/Vulkan/SYCL）均报告了输出乱码、崩溃或性能骤降，其中 K-cache 量化损坏已有修复 PR 合并。新模型支持方面，**Motif 3 Beta** 架构 PR 已提交（含 CUDA FA 配套扩展），同时 **MiniCPM-V 4.6 的 downsample 支持**已随 b10218 落地。性能侧，RDNA4 上 FlashAttention 深度 prompt 处理回归的修复 PR 已提交，但 SYCL 侧 oneMKL FA 路径出现新回归。

## 版本发布与破坏性变更

- **b10223** — 修复 CI 错误（PR #26415）。涉及 llama-ui-embed 的 TSan 构建错误及 webgpu 后端 test-llama-archs 失败。[Release b10223](https://github.com/ggml-org/llama.cpp/releases/download/b10223/llama-b10223-bin-macos-arm64.tar.gz)
- **b10221** — 更新 BoringSSL 至 0.20260730.0（PR #26353），影响使用 SSL/TLS 的构建。[Release b10221](https://github.com/ggml-org/llama.cpp/releases/download/b10221/llama-b10221-bin-macos-arm64.tar.gz)
- **b10219** — **API 行为变更**：`llama-cli` 现在会将在流式输出中收集的 `reasoning_content` 一并持久化到聊天历史。此前仅保存 assistant 消息内容，`--reasoning-preserve` 在多轮对话中无法恢复先前的思考内容。对依赖历史消息回放的 Agent 应用有直接行为影响。[PR #26362](https://github.com/ggml-org/llama.cpp/pull/26362)
- **b10218** — 新增 MiniCPM-V 4.6 的 downsample 模式，该模式被放入 GGUF 元数据内。[PR #25993](https://github.com/ggml-org/llama.cpp/pull/25993)
- **b10217** — DeepSeek V4 架构启用 thinking 模式下的工具调用能力（PR #26269）。[Release b10217](https://github.com/ggml-org/llama.cpp/releases/download/b10217/llama-b10217-bin-macos-arm64.tar.gz)

## 新模型与硬件支持

- **Motif 3 Beta 支持**（PR #26298）：新增架构支持，核心是 GDLA（Grouped Differential Latent Attention），采用 MLA 风格低秩投影 + 16 个 GQA KV head，当前以 GQA 形式实现。该 PR 还推动了一个 CUDA FA 扩展（PR #26404）以支持 head size 192/128 且 GQA ratio 非 8 倍数的场景——Motif 3 使用 head size 192/128 搭配 GQA ratio 5。[PR #26298](https://github.com/ggml-org/llama.cpp/pull/26298) / [PR #26404](https://github.com/ggml-org/llama.cpp/pull/26404)
- **MiniCPM-V 4.6**：b10218 合入 downsample 支持，多模态预处理器新增 llava_uhd 构建路径。[PR #25993](https://github.com/ggml-org/llama.cpp/pull/25993)
- **DeepSeek V4 支持进度**：主 PR #23122（hyperconnection + KV ops 的 CPU 后端）仍在推进中，持续有人 review/更新。[PR #23122](https://github.com/ggml-org/llama.cpp/pull/23122)
- **Apple RDMA 作为 RPC 传输**：PR #26421 将 RPC 传输层扩展支持 Apple RDMA（基于 TN3205 技术文档），便于 macOS 多机推理。[PR #26421](https://github.com/ggml-org/llama.cpp/pull/26421)
- **Vulkan GATED_LINEAR_ATTN 算子**：PR #25601 已标记 merge ready，为 Vulkan 后端新增 GLA（门控线性注意力）支持，此前该算子会回退到 CPU。[PR #25601](https://github.com/ggml-org/llama.cpp/pull/25601)

## 性能与优化

- **RDNA4 FlashAttention 回归修复**（PR #26419）：修复 #26220。rocWMMA FA 路径被移除后，新原生 MMA 内核在 head dim 256 时完全未用张量核心，导致 RDNA4 (`gfx1201`) 深度 context prompt 处理最多慢 **2 倍**。该 PR 放宽 `flash_attn_ext_f16` 的设备 guard 以恢复 MMA FA 路径。[PR #26419](https://github.com/ggml-org/llama.cpp/pull/26419) / [Issue #26220](https://github.com/ggml-org/llama.cpp/issues/26220)
- **CUDA batched top-k 优化**（PR #26390）：在 CCCL ≥ 3.2 时，top-k 对多行输入使用逐行串行 DeviceTopK dispatch。对 MiniMax M3 这类批量解码场景，数千个 dispatch 会串行化整个计算图。该 PR 改用 batched argsort 提升多行 top-k 吞吐。[PR #26390](https://github.com/ggml-org/llama.cpp/pull/26390)
- **MoE 专家热页锁定**（PR #26414）：新增 `--pin-hot-experts N` 参数，通过 `mlock()` 将最常被路由的 top-N MoE 专家固定在 RAM 中，防止 mmap 加载的大模型因 OS 页缓存驱逐导致严重延迟尖峰。[PR #26414](https://github.com/ggml-org/llama.cpp/pull/26414)
- **Metal q8_0 KV 优化**（PR #25556）：来自 GPT-5.6 Sol 的优化经验，提升 Metal 后端的量化 KV 缓存性能。[PR #25556](https://github.com/ggml-org/llama.cpp/pull/25556)
- **SYCL oneMKL FA 回归**（Issue #26396）：b10216 起默认 oneMKL GEMM FA 路径导致 Arc Pro B70 上 **200K prompt prefill 性能下降约 35%**，设置 `MKL_FA_DISABLE=1` 可恢复，目前尚无修复 PR。[Issue #26396](https://github.com/ggml-org/llama.cpp/issues/26396)

## 稳定性与回归

按严重程度排列：

- **[严重] DeepSeek V4 在 Strix Halo ROCm 上输出乱码**（Issue #25436）：ROCm 后端跑 DeepSeek-V4-Flash IQ3_XXS 出现 garbled output，25 条评论，暂无 fix PR。[Issue #25436](https://github.com/ggml-org/llama.cpp/issues/25436)
- **[严重] SYCL 混合模型空输出/ggml_sycl_op_mul_mat 崩溃**（Issue #24168）：在 Intel Arc Pro B60 上，qwen3next/qwen35 架构模型从 b9128-b9159 之间引入回归，官方 server-intel 镜像截至 6 月仍受影响。22 条评论，无 fix PR。[Issue #24168](https://github.com/ggml-org/llama.cpp/issues/24168)
- **[严重] ROCm 上 GGML_OP_TOP_K 卸载到 CPU**（Issue #26399）：3-4K context 以上 ROCm 的 TOP_K 算子回退 CPU，导致 DeepSeek-V4-Flash 的 token 生成性能损失 **6.4 倍**。刚报告，尚无处理。[Issue #26399](https://github.com/ggml-org/llama.cpp/issues/26399)
- **[高] DeepSeek-V4 量化 K-cache 损坏**（Issue #25382 / PR #25391）：已关闭的 PR #25391 修复了该问题——量化 K-cache 启用 Hadamard 旋转会令 `self_k_rot` 非空，使所有层绕开稀疏 CSA/HCA 注意力路径，产生乱码。修复方案为对该架构禁用 Hadamard 旋转并添加回归测试。[PR #25391](https://github.com/ggml-org/llama.cpp/pull/25391)
- **[高] Vulkan 上 DeepSeek-V4-Flash 数轮对话后 DeviceLost**（Issue #25664）：Strix Halo RADV 上 `vk::DeviceLostError`，13 条评论，无 fix。[Issue #25664](https://github.com/ggml-org/llama.cpp/issues/25664)
- **[中] Qwen 3.6 27B 因缓存缺失强制全量 prompt 重处理**（Issue #22746）：已是老 issue（5 月创建）但今天仍有活动，115 条评论、31 个 👍，是当前最热的未解决问题。[Issue #22746](https://github.com/ggml-org/llama.cpp/issues/22746)
- **[中] Gemma 4 12B 在 Intel Arc Pro B70 上大 prompt 乱码**（Issue #26206）：SYCL 后端，10 条评论，暂无修复。[Issue #26206](https://github.com/ggml-org/llama.cpp/issues/26206)
- **[中] Ternary-Bonsai-27B 加载失败**（Issue #25727 / #26337）：CUDA 下无法运行，且使用 Dspark draft 模型时也无法加载。两个 issue 均开放中。[Issue #25727](https://github.com/ggml-org/llama.cpp/issues/25727) / [Issue #26337](https://github.com/ggml-org/llama.cpp/issues/26337)
- **[低] Windows Defender 误报病毒**（Issue #26343）：b10195 Windows CPU 包被 Defender 检出，属常见误报，但需留意发布签名流程。[Issue #26343](https://github.com/ggml-org/llama.cpp/issues/26343)
- **[低] `llama update` 可能将 CUDA 版替换为 Vulkan/CPU 版**（Issue #24744）：已 stale 关闭，但 Windows 用户需注意。[Issue #24744](https://github.com/ggml-org/llama.cpp/issues/24744)

## 对应用开发者的意义

1. **DeepSeek V4 用户需谨慎上生产**：当前 V4 系列在 ROCm/Vulkan 上存在乱码与崩溃（Issue #25436、#25664、#26399），而 K-cache 量化修复（PR #25391）已合入但验证尚浅。建议固定到已验证的版本，并关注后续补丁。对 CPU 推理，主支持（PR #23122）仍在进行中，暂不建议依赖。

2. **`reasoning_content` 持久化改变了历史回放行为**（b10219）：如果你的应用依赖 `--reasoning-preserve` 或手动管理多轮对话的思考内容，升级后行为会变化——先前轮次的推理内容现在会正常保存在历史中，这对于构建支持"带思考过程"的 Agent 应用是期待已久的修复。

3. **RDNA4 用户升级需针对性验证**：PR #26419 修复了深度 context 下 prompt 处理 2x 回归，但在正式 release 发布前，运行在 RDNA4 上且使用长上下文的用户应留意性能对比。

4. **MoE 大模型可关注 `--pin-hot-experts`**（PR #26414）：如果使用超过内存的 MoE 模型并遭遇页缓存驱逐导致的延迟尖峰，该参数通过 mlock 固定热专家页，可显著提升长时运行的延迟稳定性。

5. **工具调用相关的服务端增强在推进中**：`x-tool-cwd` header（PR #26420）将为工具执行指定工作目录，这对在 llama.cpp 之上构建代码助手类工具的团队有直接价值。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 动态日报 — 2026-08-02

## 今日速览

Ollama 仓库今日无新 Release，但 Issue 与 PR 活跃度极高：核心焦点集中在 **tool calling 正确性回归**（gemma4 解析错误未修复、VS Code Copilot Harness 在新版本中工具调用被破坏）和 **Apple Silicon 上 embedding runner 崩溃**（qwen3-embedding 在 llama.cpp 解码阶段触发 libmalloc 内存损坏）。PR 侧有多项针对 OpenAI/Anthropic 兼容层的修复在推进，包括 `reasoning_effort` 归一化、空消息序列化、流式 goroutine 泄漏等。

## 新模型与硬件支持

- **[#17510] [OPEN] deepseek-v4-flash:0731 本地支持请求**：用户询问是否计划为本地用户提供 `deepseek-v4-flash:0731`（DeepSeek-V4-Flash-0731 权重更新）。同日另有 [#17508]（已关闭）与 [#17493]（已关闭）提出相同诉求，官方尚未回应。
  - https://github.com/ollama/ollama/issues/17510
  - https://github.com/ollama/ollama/issues/17508
  - https://github.com/ollama/ollama/issues/17493

- **[#17506] [OPEN] 新模型添加请求：KAT-Coder-V2.5-Dev**：请求将 HuggingFace 上的 `Kwaipilot/KAT-Coder-V2.5-Dev` 加入 Ollama 库。
  - https://github.com/ollama/ollama/issues/17506

- **[#17501] [CLOSED] qwen3.6:35b-a3b-nvfp4 视觉能力静默失效**：模型宣称支持视觉并接受图片输入，但实际静默丢弃图像内容；同模型 `q8_0` 量化版本正常。已在 Ollama 0.32.5 / macOS 26.5.2 / Apple Silicon 128GiB 环境复现。属量化格式相关正确性问题。
  - https://github.com/ollama/ollama/issues/17501

## 性能与优化

- **[#16998] [OPEN] 新增 Prometheus 兼容 `/metrics` 端点（PR）**：以 `OLLAMA_METRICS=1` 开启，可输出调度器指标（请求队列深度、队列容量、已加载模型数）以及 HTTP 请求计数、per-model/token 级指标。对生产环境可观测性是实质性补充。
  - https://github.com/ollama/ollama/pull/16998

- **[#17135] [CLOSED] 修复客户端断连时流式 goroutine 永久阻塞**：`GenerateHandler`、`PushHandler` 与 `handleNativeChat` 在客户端断开后，向无缓冲 channel 发送数据的 goroutine 会永久阻塞，造成资源泄漏。此 PR 修复了该问题。对长连接场景（agent 流式输出）友好。
  - https://github.com/ollama/ollama/pull/17135

- **[#17396] [CLOSED] OpenAI 兼容层支持 `reasoning_effort: "minimal"`**：此前仅识别 high/medium/low/max/none，GPT-5 系列客户端传入 `minimal` 会直接 400。现在归一化为 `low`，消除 OpenAI SDK 与 agent 框架的兼容障碍。
  - https://github.com/ollama/ollama/pull/17396

## 稳定性与回归

按严重程度排列：

- **[#17509] [OPEN] qwen3-embedding:4b 在 llama_context::decode 中崩溃并触发 libmalloc 内存损坏（Apple Silicon）**：持续 OpenAI 兼容 `/v1/embeddings` 请求时，llama-server 进程崩溃、客户端收到 HTTP 400。已在 Ollama 0.32.5 上复现两次。嵌入服务是高危路径，建议相关用户暂避或降级。
  - https://github.com/ollama/ollama/issues/17509

- **[#17428] [OPEN] Embedding runner 卡在 `Stopping...`，`/api/embed` 请求挂死**：`qwen3-embedding:4b` runner 无法退出，新请求连接后 60 秒内无响应字节。与 #17509 同属 embedding 链路，Apple Silicon 用户需重点关注。
  - https://github.com/ollama/ollama/issues/17428

- **[#15315] [OPEN] gemma4:e4b 工具解析错误在 0.20.1 仍未修复（50 条评论，9 👍）**：用户确认升级后 tool calling 依旧报错，涉及 opencode、oh-my-opencode 等主流 agent 工具。距离创建已 4 个月，影响力大，修复进展缓慢。
  - https://github.com/ollama/ollama/issues/15315

- **[#17444] [OPEN] 0.32.4/0.32.5 破坏 VS Code Copilot Harness 中的工具调用**：回滚到 0.32.1 可解决。已确认在 VS Code 1.125 与 1.130.0 上均受影响，说明近两个版本引入了回归。
  - https://github.com/ollama/ollama/issues/17444

- **[#17512] [OPEN] 思维模型在指定字数时陷入无限自校验循环**：启用 thinking 且提示词包含精确字数目标时，模型不断草稿→数数→重写，永不输出停止 token。`num_predict` 也无法中断。
  - https://github.com/ollama/ollama/issues/17512

- **[#17471] [OPEN] ollama.com 持续 8+ 小时 403 Forbidden 与登录循环**：Web 端验证循环，API/CLI 全部命令返回 403。多设备（Windows/Linux）复现，非本地配置变更导致。疑似服务端故障。
  - https://github.com/ollama/ollama/issues/17471

- **[#17482] [OPEN] 相同模型在不同客户端间反复卸载/重载**：VS Code + Goose 交替使用同一模型时，每次切换都触发 unload/reload，影响连续使用体验。
  - https://github.com/ollama/ollama/issues/17482

- **[#17484] [OPEN] 大量 HF 模型下载后报 `context deadline exceeded`**：尤其在 `DavidAU/Qwen3.6-27B-...` GGUF 模型上频繁出现。
  - https://github.com/ollama/ollama/issues/17484

- **[#16951] [CLOSED] 0.30.11 升级后崩溃（已关闭）**：llama-server 进程以 `0xc0000005`（访问冲突）退出。已关闭，可能是重复报告或已在后续版本修复。
  - https://github.com/ollama/ollama/issues/16951

- **[#3575] [CLOSED] 端口占用错误（已关闭）**：`listen tcp 127.0.0.1:11434: bind` 经典端口冲突，今日有更新但已关闭。
  - https://github.com/ollama/ollama/issues/3575

**存在 fix PR 的相关条目：**

- **[#17505] [OPEN] cogito 解析器：补全不完整的工具调用**：修复模型在输出完整调用但未闭合 `<｜tool▁call▁end｜>` 时缓冲调用被丢弃的问题。直接关系到 cogito 模型 tool calling 的可靠性。
  - https://github.com/ollama/ollama/pull/17505

- **[#17412] [OPEN] 新增 `OLLAMA_TOOLS_ALL_ALLOWED` 环境变量**：允许 operator 绕过手动审批直接执行工具调用。对自动化 agent 工作流有实际意义。
  - https://github.com/ollama/ollama/pull/17412

## 对应用开发者的意义

1. **工具调用仍是最大风险点**：gemma4:e4b 的 tool parsing 问题长期未修复（#15315），VS Code Copilot Harness 在新版本被破坏（#17444）。基于 Ollama 构建 agent 的团队应**锁定 Ollama 版本**，升级前需对工具调用路径做回归验证。

2. **Embedding 服务在 Apple Silicon 上不可靠**：#17509 与 #17428 表明 0.32.5 上 `qwen3-embedding:4b` 存在崩溃与挂死风险。生产环境建议切换到其他 embedding 模型或等待官方修复。

3. **OpenAI/Anthropic 兼容层正在补全**：`reasoning_effort: "minimal"` 归一化（#17396）、`/v1/responses` 输出截断时状态标记（#17239）、空消息序列化为 `[]` 而非 `null`（#17293）等 PR 均在推进中，生态工具链兼容性将持续改善。

4. **可观测性即将增强**：`/metrics` 端点（#16998）落地后，可以为 Ollama 接入 Prometheus 监控，对生产部署的容量规划与异常排查有直接帮助。

5. **流式连接稳定性修复值得期待**：#17135 解决了客户端断连导致的 goroutine 泄漏，对长时间运行的 agent 应用是利好，建议关注其合入版本。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 动态日报 — 2026-08-02

## 1. 今日速览

昨日最值得关注的是两批稳定性修复：`pre_call_hook` 字符串返回在异步路由上失效、`RejectedRequestError` 内容被污染这两个正确性 bug 已由 PR #35556 一并修复；同时 OTEL v2 多租户追踪系列 PR（#30873、#35513~#35516、#35514、#35515）正密集推进落地。此外 Rust 迁移主跟踪 issue 仍在持续热更，建议保持关注。

---

## 2. 版本发布与破坏性变更

- 过去 24 小时无新 Release。
- 但有向破坏性变更演进的 PR 需关注：

- **OTEL v2 管理面变更**：[PR #30873](https://github.com/BerriAI/litellm/pull/30873)（`feat(otel/v2)!`）引入了**管理员专属、身份域隔离的 trace destinations**：admin 注册 destination，按团队/组织解析归属。与 #35513~#35516 为一系列变更，合并后：
  - `GET /credentials` 不再返回 destination 的 collector token 明文（#35513）；
  - `/team/info`、`/organization/info` 将暴露 `resolved_logging_exporters`（#35516）；
  - 请求的 trace 路由在 **auth 时**由身份解析，客户端无法自选上报目的地（#35514）。
  - `!` 标记意味着存在**默认行为变更**：升级后 trace 上报目的地不再等价于 proxy 全局配置，需管理员显式注册。

---

## 3. 新模型与硬件支持

- **[PR #35555](https://github.com/BerriAI/litellm/pull/35555)**：新增 `gemini-robotics-er-2-preview` 和 `gemini-robotics-er-1.6-preview` 到成本表与能力检查，价格/上下文参数来自 Google 官方定价与 model cards。
- **[Issue #26765](https://github.com/BerriAI/litellm/issues/26765)**（OPEN）：请求在 `model_prices_and_context_window.json` 及 backup 中加入 `azure_ai/gpt-image-2`。尚无对应 fix PR。
- **[Issue #27094](https://github.com/BerriAI/litellm/issues/27094)**（OPEN）：AI21 模型列表滞后，J2 系列已退役，现仅剩 `jamba-large-1.7` 与 `jamba-mini-2`。无 fix PR。

---

## 4. 性能与优化

- **[PR #34760](https://github.com/BerriAI/litellm/pull/34760)**：修复 DashScope（阿里云 Model Studio）成本计算方式——此前对 `tiered_pricing` 采用累进式阶梯计价，Alibaba 实际按请求总 token 量命中单档费率。大 Qwen 请求此前可能被显著高估或低估。
- **[PR #35347](https://github.com/BerriAI/litellm/pull/35347)**：`RedisCache` 中 30 个 service-logging `create_task()` 结果此前未被持有引用，在弱引用下可能在负载高峰期被 GC 回收导致 Redis 遥测静默丢失。此改动持有 task 集合直至完成。
- **[PR #35542](https://github.com/BerriAI/litellm/pull/35542)**：修复 key 级 `model_rpm_limit`/`model_tpm_limit` 覆盖被 team 限制错误钳制的问题。此前 team 级 per-model 限制被双重计数，实际吞吐被压到应有值的一半左右；同时修正了 post-call TPM 记账路径。
- **[Issue #31263](https://github.com/BerriAI/litellm/issues/31263)**（OPEN）：Rust 迁移主跟踪 ticket，目标 sub-1ms 开销。目前尚在 Beta 报名阶段，无性能数据可引用。

---

## 5. 稳定性与回归

按严重程度排序：

**（高）Hook 与错误处理回归 —— 已有 fix PR**

- **[Issue #35543](https://github.com/BerriAI/litellm/issues/35543)**（OPEN）：`async_pre_call_hook` 返回 `str` 在 `/v1/chat/completions` 上不可达——异步路由的 `call_type` 是 `acompletion`，命中错误分支后回退为 raise，导致用户得到 500 而非文档承诺的 200 文本响应。
- **[Issue #35544](https://github.com/BerriAI/litellm/issues/35544)**（OPEN）：`RejectedRequestError` 的原始消息此前被 `proxy_server.py` 作为 content 写入 `ModelResponse`，导致 `"RejectedRequestError: ..."` 前缀泄露到终端用户的 completion 内容中。
  - 两者共同由 **[PR #35556](https://github.com/BerriAI/litellm/pull/35556)** 修复：在 `acompletion`/`aresponses` 等异步 call_type 上正确转换字符串 hook 响应，并在构建响应时保留原始消息。

**（中）成本跟踪与预算**

- **[Issue #27038](https://github.com/BerriAI/litellm/issues/27038)**（OPEN）：`disable_end_user_cost_tracking: true` 并未真正阻止 `SpendLogs.end_user` 与 `DailyEndUserSpend` 的写入，flag 只短路了 `get_end_user_id_for_cost_tracking` 的一部分路径。无 fix PR。
- **[Issue #33871](https://github.com/BerriAI/litellm/issues/33871)**（OPEN）：project spend 从不被记录，导致 project 级预算与告警无法工作。无 fix PR。

**（中）认证与授权**（Devin 自动PR，均未合入）

- **[PR #35557](https://github.com/BerriAI/litellm/pull/35557)**：blocked 的 `PROXY_ADMIN` key 此前可命中 auth cache 的 early return 继续通过认证。修复为在 early return 前检查 `blocked`。
- **[PR #35553](https://github.com/BerriAI/litellm/pull/35553)**：配置 `custom_auth` 后，所有请求的集中式预算/模型检查被跳过（Key/JWT/OAuth2 亦然）。修复为仅当 custom auth 确实产出了该请求身份时才跳过。

**（低/历史遗留）**

- **[Issue #26192](https://github.com/BerriAI/litellm/issues/26192)**（CLOSED）：`PrismaWrapper.__getattr__` 内的同步 `future.result(timeout=30)` 在 RDS IAM token 过期时死锁事件循环，造成 liveness 探活失败。当前标记为已关闭，但注意关闭时间在 24 小时更新窗口内，如需确认修复版本请自行核对。
- **[Issue #35555 相关] 另见 PR #35562**：后台 spend entity 更新失败此前仅记录 debug 日志且任务不被持有，失败被吞没。**[PR #35562](https://github.com/BerriAI/litellm/pull/35562)** 将失败提升为可见日志并持有后台任务防止被 GC。
- **[PR #35561](https://github.com/BerriAI/litellm/pull/35561)**：响应 ID 安全收紧——非本 proxy 签发的 ID 此前跳过了 owner 检查。

---

## 6. 对应用开发者的意义

- **Hook 语义即将可靠**：如果你依赖 `async_pre_call_hook`/`pre_call_hook` 返回字符串来拦截请求（内容审核、mock、路由拒绝），#35543 表明该能力在异步路由上实际是坏的。PR #35556 合并后这一路径才会按文档工作；在合并前请避免在 `/v1/chat/completions` 上依赖此行为。
- **拒绝响应内容需要清洗**：在 #35544 修复上线前，如果你的 guardrail 触发 `RejectedRequestError`，注意用户可能看到异常前缀文本而非纯净消息，需自行 strip。
- **预算/限流语义修复值得跟进**：#35542 修复后 key 级模型 rate limit 不再被 team 限制错误削减；建议团队检查现有 key/team 配置是否因此前双重计数而被人为调高——修复后实际吞吐会上升，限流阈值可能需要回调。
- **成本数据可信度提升**：DashScope 计费修复（#34760）会让 Qwen 大请求的成本日志产生可见变化（此前偏差方向取决于请求体量落在哪档）；如果 dashboards 依赖这些数字，注意对比升级前后的口径差异。
- **Telemetry 基础设施在加固**：Redis 遥测静默丢失（#35347）与 OTEL v2 管理面（#35513~#35516）修复意味着，多团队共用 proxy 的部署将获得更可靠的追踪隔离，但**合并 OTEL v2 后需要管理员重新配置 trace 目的地**，否则追踪可能静默不上报。
- **Rust 迁移（#31263）**仍在 beta 征集阶段。对延迟敏感的 Agent 网关部署可关注其公开 Beta 报名表，但暂不建议在 production 上切换。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 动态日报 — 2026-08-02

## 今日速览

今日无新版本发布，但有 44 条活跃 PR，重点集中在**后端 CI 修复**（#7728 一次性修复了阻塞所有 PR 的 6 个测试）和**多平台稳定性修复**（Windows 安装、AMD ROCm、虚拟化 Apple GPU、.venv_t5_ 损坏检测）。此外，GGUF 推荐策略将统一到 Studio 的模型选择器与 Hub 下载卡片，提升用户模型选择一致性。

## 版本发布与破坏性变更

- 无新版本发布。但注意：PR #7495 显示 **torch 2.12 尚无对应的预构建 flash-attn / causal-conv1d / mamba-ssm wheels**，Studio 计划复用 torch 2.10 的预构建加速 wheel，涉及此依赖链的开发者可能需要关注更新节奏。链接: https://github.com/unslothai/unsloth/pull/7495

## 新模型与硬件支持

- **AMD ROCm 支持推进**：Issue #6230 请求新增 AMD ROCm 变体的 Docker 镜像（与 NVIDIA/Blackwell 镜像对称，支持 RDNA2/3/4 和 CDNA/Instinct），已有功能分支；受限于阻塞性 CI 问题暂未合并。链接: https://github.com/unslothai/unsloth/issues/6230
- **AMD APU 统一内存适配**：PR #6975 针对 AMD 统一内存 APU（gfx1150/gfx1151）裸机场景，改用 GPU 报告的可用显存而非系统 RAM 做 GGUF 加载预检，避免可用内存误判导致模型无法加载。链接: https://github.com/unslothai/unsloth/pull/6975
- **GGUF 推荐策略统一**：PR #7733 将 Hub 下载卡片与聊天模型选择器的 GGUF 推荐逻辑统一，默认选择最合适量化变体；在装不下时回退到最大可容纳变体，最后才是全量加载失败的最小变体。链接: https://github.com/unslothai/unsloth/pull/7733

## 性能与优化

- **Studio 启动速度优化**：PR #7607 将登录页面渲染提前到 ML 栈加载之前。此前 `unsloth studio` 在 GPU 机器上需要先花约 6 秒导入 torch，socket 才会监听，浏览器在此窗口内直接连接被拒。链接: https://github.com/unslothai/unsloth/pull/7607
- **Windows 安装失败不再触发源码构建**：PR #7735 与 #7696 修复了 Windows 上因 PATH 含不可读目录导致 llama.cpp 预构建验证失败、进而触发耗时源码构建的问题；现在会保留原始诊断并中止安装流程。链接: https://github.com/unslothai/unsloth/pull/7735, https://github.com/unslothai/unsloth/pull/7696
- **虚拟化 Apple GPU 下 GGUF 乱码修复**：PR #7717 修复了虚拟化 Mac（Metal）环境聊天返回乱码的问题，同时对 MTP 模式下的并行 slots 做钳制，避免推理异常。链接: https://github.com/unslothai/unsloth/pull/7717

## 稳定性与回归

以下按影响面排列，均已附带修复状态：

1. **AMD ROCm 启动段错误（严重）**：Issue #7331，AMD Radeon 8060S（gfx1100）/ ROCm 6.3 下 RAG 嵌入预热时出现段错误，仍无 fix PR。链接: https://github.com/unslothai/unsloth/issues/7331
2. **Chat 刷新 5-6 次后历史响应全部重置（严重）**：Issue #7732（今日新报），v0.1.51-beta 中刷新模型回复 5-6 次后，除当前回复外的所有历史消息被清空；暂无 fix PR。链接: https://github.com/unslothai/unsloth/issues/7732
3. **后端 CI 全红导致所有 PR 被阻塞（已修复）**：Issue #7727 报告 `test_legacy_custom_inventory_filters_registered_mtp_root` 失败；PR #7728 已合并，修复了 #7375 引入的两类回归（companion-only GGUF 目录与空 projector 的 vision fixtures），并在 #7730/#7726 中补充了针对性的测试修复。链接: https://github.com/unslothai/unsloth/issues/7727, https://github.com/unslothai/unsloth/pull/7728
4. **.venv_t5_ sidecar 损坏检测机制缺失（已修复）**：Issue #7715 指出 `.venv_t5_*` 仅校验目录存在性和 METADATA 版本，内部文件损坏不会被修复，worker 在导出 Transformers 5.x 模型时崩溃；PR #7725（作者 danielhanchen）已修复，另一 PR #7721 通过 RECORD 校验提供替代方案。链接: https://github.com/unslothai/unsloth/issues/7715, https://github.com/unslothai/unsloth/pull/7725
5. **DiffusionGemma GPU 层设置被硬编码忽略（严重）**：Issue #7574，`NGL=99` 强制全量 VRAM 加载导致 16GB 显存 OOM，已关闭但未合入修复；另 #6347 指出多 GPU 推理/训练被 transformers 4.57.6 阻塞。链接: https://github.com/unslothai/unsloth/issues/7574, https://github.com/unslothai/unsloth/issues/6347
6. **AMD ROCm 自动选择错误 GPU**：Issue #7669，Studio 安装的预编译 gfx110X 版本在系统同时存在 iGPU（gfx1036）和 dGPU（gfx1101）时选错设备，报 `device kernel image is invalid`；暂无 fix PR。链接: https://github.com/unslothai/unsloth/issues/7669
7. **模型下载 ETA 初始读数异常**：Issue #7667，6.8GB 下载开始时误报 102 B/s、剩余 753 天；属初始估计问题而非实际卡死。链接: https://github.com/unslothai/unsloth/issues/7667
8. **Windows 桌面更新无法完成（已修复）**：PR #7705 修复了 Windows 应用内更新下载完成后被系统终止的问题；PR #7709 同时修复了代理环境请求 127.0.0.1 验证被代理劫持的问题。链接: https://github.com/unslothai/unsloth/pull/7705, https://github.com/unslothai/unsloth/pull/7709

## 对应用开发者的意义

- **推荐策略统一，模型选择行为可预期**：GGUF 推荐逻辑统一后，无论通过 Studio API、UI 还是 Hub 下载，模型选择结果将保持一致。构建在上层的 Agent 应用如果直接调用模型加载接口，建议关注 #7733 合并后的行为变化，避免出现“UI 推荐可加载但代码加载失败”的偏差。
- **桌面端下载链路修正，文件导出不再静默失败**：PR #7710 修复了 Chat 导出（Training Config、Markdown、图片、音频）在桌面 webview 中直接失效的问题，改用 Studio 原生保存通道。桌面嵌入式应用中涉及文件下载的集成方需注意此变更。
- **Windows + PATH 环境污染的安装体验显著改善**：此前一个不可读的 PATH 目录会导致安装流程退化为源码编译（耗时数小时甚至失败）；现在会快速报错退出，便于快速定位问题。CI 流水线中新增了 Windows/macOS/Linux 干净环境下的实测验证。
- **JS 模板注入安全性修复**：PR #7731 修复了 `construct_chat_template` 中调用方模板文本拼接 Jinja 字符串字面量时缺少转义的问题。这意味着自定义 chat template 不再可能意外破坏生成的 Jinja 模板或构成注入风险，对做微调产物的团队是必要的安全更新。
- **前端交互细节改进**：PR #7683 将语音录制栏的“确认/取消”改为“停止/发送”按钮，#7734 同步优化了 composer 布局与 toast 展示方式。对桌面端语音交互有依赖的产品团队需适配此 UI 层面变动。

---

数据来源：https://github.com/unslothai/unsloth

报告生成时间：2026-08-02

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*