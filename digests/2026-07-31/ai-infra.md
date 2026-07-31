# AI 基础设施日报 2026-07-31

> 生成时间: 2026-07-31 01:46 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施生态横向对比分析（2026-07-31）

## 1. 生态全景

当前 AI 基础设施已进入 **「新模型 Day-0 支持 + 长上下文 + 投机解码」** 的三线竞争时代：Kimi-K3、DeepSeek V4、GLM-5.2 等前沿模型在主力引擎（vLLM/SGLang）上做到数天内适配，但 **Day-0 支持与生产可用之间存在明显鸿沟**——Kimi-K3 在 vLLM 上有 illegal-memory-access 崩溃、在 SGLang 上有 218k 长上下文 Xid 13 崩溃，两引擎均未完全达到生产标准。次级生态（llama.cpp/Ollama/Unsloth）则围绕 Qwen3.6、Gemma 4、MiniMax-M3 展开适配，但稳定性问题密集（工具调用回归、内存泄漏、加载失败）。值得警惕的信号是：**Agent 场景正在倒逼基础设施补课**——LiteLLM 修复流式 usage 少算 90%+ 的计费缺陷、Ollama 出现并发视觉请求内容泄漏、vLLM 的 Responses API 推理链语义异常，这些都直接威胁上层应用的可观测性与安全性。

## 2. 各项目活跃度对比

> 注：Issues/PR 数为当日日报中可见的关联条目数，非 GitHub 全量查询结果；Unsloth 为官方明确计数。

| 项目 | 今日 Issues（可见） | 今日 PR（可见） | Release 情况 | 活跃特征 |
|---|---|---|---|---|
| vLLM | 9+ | 15+ | 无 | 深度优化多，SM100/MTP/量化三线并进 |
| SGLang | 13+ | 8+ | 无 | Roadmap 类 issue 占比高，长上下文布局明显 |
| llama.cpp | 9+ | 20+ | **b10186–b10199（14 个）** | 发布频率最高的项目，日更 14 版 |
| Ollama | 15+ | 9+ | 无（0.32.5 为当前版本） | 稳定性/安全报告集中爆发 |
| LiteLLM | 6+ | 6+ | v1.96.0-dev.1 | 计费与配置持久化主题主导 |
| Unsloth | 10 | 59（含 Studio 迭代） | 无 | PR 量最大，Studio/训练侧高频迭代 |

**解读**：llama.cpp 以每日十几个版本的节奏维持「本地运行时霸主」地位；Unsloth 的 59 个 PR 显示其正在快速补齐 Studio 产品矩阵；vLLM/SGLang 的 PR 密度虽不及前者，但单个 PR 的技术深度（SM100 DSA、DCP、分布式 KVCache）显著更高。

## 3. 模型支持竞速

| 模型/架构 | vLLM | SGLang | llama.cpp | Ollama | 领先者 |
|---|---|---|---|---|---|
| **Kimi-K3** | Compressed-Tensors 量化 + ROCm gfx942（PR #50500/#50319） | Day-0 支持 + DSpark 变体（#32541/#32607） | 今日未提及 | 仅 Cloud 请求（#17235） | **vLLM/SGLang 并列**，均已可用但均有严重 bug |
| **DeepSeek V4** | FlashInfer 稀疏 MLA 优化（#48047） | MQA Indexer 完成、Flash 支持进行中（#19637） | DSpark draft 支持（#25173） | — | **vLLM 最深入**（稀疏注意力层） |
| **GLM-5.2** | SM100 DSA 专用实现（#49790） | CP/DSA 支持（#21788） | — | — | **vLLM**（专用算子落地） |
| **MiniMax-M3** | — | — | **MSA 重构 + 视觉能力**（#26297/#26338/#25113） | — | **llama.cpp 独家** |
| **Inkling（975B MoE）** | — | Day-0 tracking（#31359） | 架构 PR（#25731） | — | **SGLang/llama.cpp 并进** |
| **Gemma 4** | — | — | DSpark draft（#25549） | MLX vision PR（#17487） | llama.cpp（推理）/ Ollama（MLX） |
| **Motif 3 / Apertus** | — | — | Motif 3 PR（#26298） | Apertus 请求（#12149） | llama.cpp |

**硬件支持竞速**：

- **AMD gfx1250（RDNA4）**：vLLM（#46516）与 SGLang（#32754）同日推进，后者为无 MFMA/WMMA FP4 能力写了独立代码路径。
- **Ascend A5 NPU**：SGLang 独家（FP8 KV Cache + MLA，#29641）。
- **Intel XPU**：vLLM 有 INC W4A16 后端选择（#50048）但 TP=2 问题未解（#48953）；Unsloth 报告 XPU 批量生成不一致（#7638）；llama.cpp 的 SYCL 问题也处于无 fix 状态—— **XPU 生态整体处于「能用但不可靠」阶段**。

**结论**：闭源前沿模型（Kimi-K3/DSV4/GLM-5.2）的 Day-0 之争在 vLLM 与 SGLang 之间展开，目前 vLLM 在量化深度和算子落地略胜；开源/社区模型（MiniMax-M3/Motif/Inkling）则由 llama.cpp 以高频率发布快速覆盖。Ollama 依赖上游 llama.cpp，今日无新模型落地。

## 4. 性能优化前沿

| 优化方向 | 代表动作 | 关键数据/意义 |
|---|---|---|
| **投机解码** | vLLM MTP 共享 top-k 索引（#49793）；SGLang 修复 DSPARK draft KV pool OOB（#32828）；llama.cpp DSpark 扩展至 DeepSeek/Gemma 4 | MTP 减少重复 top-k 计算；DSPARK 修复后 KDA/Mamba 状态提交正确 |
| **KV Cache** | SGLang Distributed KVCache 系统（#21846）+ HiCache 一致性修复（#22607）+ FP8 KV 回归曝光（#32938）；llama.cpp MSA 新内存实现（#26338） | FP8 KV + DSPARK 在 H200 上 decode 吞吐 **回退 3.89x**（674→173 tok/s），是今日最大性能惊吓 |
| **量化/权重压缩** | vLLM Kimi-K3 Compressed-Tensors + XPU INC W4A16 后端可切换；llama.cpp Q2_0 全后端补齐（CUDA 合入 + VNNI 3x 宣称 + `__byte_perm` 15–40% decode 提升） | Q2_0 从「实验量化」走向「全后端可用」，显存敏感边缘部署可评估 |
| **算子/Kernel** | vLLM SM100 CuTeDSL + PDL 隐藏 launch 延迟（#50230）；SGLang 清理 cutlass_mla 等 4 类旧 kernel（#32114）；llama.cpp CUDA 免转置 gemmv（#26171） | Kernel 层竞争从「能跑」转向「为特定架构（SM100/gfx942）深度定制」 |
| **批处理/调度** | vLLM V1 跳过未完成 chunked-prefill 的 logits 计算（#49171）；Unsloth per-chat 独立队列（#7629） | 无用计算消除 + 多会话不再互相队头阻塞 |
| **分布式推理** | SGLang DCP 序列维切分 KV + Ulysses zero-staging；vLLM MIG 显存查询修复（#50463） | 对标「超长上下文 + 高并发 decode」场景 |
| **内存管理** | SGLang GPU Memory Service + weight cache daemon（#27310）；llama.cpp Metal memory unwire 泄漏修复（#26082） | 服务恢复速度与长稳运行的内存稳定性 |

## 5. 分层定位差异

| 项目 | 层级 | 核心定位 | 差异化特征 |
|---|---|---|---|
| **vLLM** | 生产级推理引擎/服务 | 高吞吐、多卡、企业部署 | 量化兼容性最深、SM100 等新硬件算子最先落地、前后兼容性治理（FlexAttention 弃用 RFC） |
| **SGLang** | 推理引擎（长上下文向） | 长上下文、投机解码、KV 架构创新 | Distributed KVCache、DCP、GPU Memory Service 等 **架构级前瞻布局**最激进 |
| **llama.cpp** | 轻量本地运行时 | 全平台（CPU/Metal/Vulkan/CUDA/SYCL）跑 GGUF | **发布频率行业第一（日更 14 版）**、新社区架构覆盖最快、Q2_0 量化生态最全 |
| **Ollama** | 面向用户的本地/边缘运行时 | 模型易用性、OpenAI 兼容暴露 | 站在 llama.cpp 之上做封装，但 **版本回归检测薄弱**（0.32.4/5 工具调用回归） |
| **LiteLLM** | 网关/代理 | 计费、限流、Guardrail、多租户 | 今日重心在 **计费准确性与配置持久化**，与推理引擎无关 |
| **Unsloth** | 训练/微调 + 桌面端 | 微调效率、Studio 产品、GGUF 转换 | 与推理引擎互补；MCP OAuth 集成预告其向 **Agent 工具链**延伸 |

**一个值得点出的交叉现象**：Ollama 与 Unsloth 都在向「桌面应用 + 远端模型服务」方向演进（Ollama Cloud、Unsloth Studio），而 LiteLLM 正在加固多租户追踪与预算语义——**用户侧的模型体验层正在与网关侧的治理层同步成熟**。

## 6. 值得关注的趋势信号

**行业趋势**：

1. **Day-0 支持 ≠ 生产可用，稳定性欠账正在堆积**。Kimi-K3 在两个主力引擎上均有严重崩溃（vLLM 非法内存访问、SGLang Xid 13），GLM-5.2-FP8 在 MI300X 上死锁。模型发布节奏远超引擎打磨节奏，**生产选型必须钉住「已验证版本」而非 latest**。

2. **长上下文正在成为 KV 层创新的核动力**。SGLang 的 Distributed KVCache、DCP、HiSparse 三个 roadmap 齐头并进；llama.cpp 为 MSA 重写内存实现；Ollama 出现 131k ctx 崩溃。**长上下文不是「调大 num_ctx」，而是需要系统级重构**。

3. **FP8 的甜蜜点因架构而异**。FP8 KV Cache 在 Ascend A5 上被 SGLang 支持、在 H200 + DSPARK 上却回退 3.89x，且 DeepSeek V4 FlashInfer 需要特定版本。**量化收益高度依赖硬件/版本组合，需要逐场景验收**。

4. **Agent 工作负载成为基础设施的一等公民**。Ollama 工具调用回归（#17444）、LiteLLM 流式 usage 少算 90%+、vLLM Responses API 的 `<think>` 包装异常、Guardrail 静默绕过（#35257）—— **这批问题的共同点是：OpenAI 兼容层在推理链（reasoning/guardrail/usage）语义上还没有跟上 Agent 框架的消费方式**。

**Agent/应用开发者行动建议**：

| 关注对象 | 建议 |
|---|---|
| Ollama 生产环境 | **固定 0.32.1**，避开 0.32.4/5 工具调用回归与并发视觉内容泄漏（安全红线） |
| vLLM `/v1/responses` 用户 | 推理链上下文语义有异常（原推理内容会泄漏到可见通道），需做输出过滤兜底 |
| LiteLLM 依赖方 | 合入 #35290 后计费数据才可信；注意 #35299 回滚（个人预算不再约束团队密钥） |
| 使用 FP8 KV + DSPARK 组合 | 暂缓升级或独立压测吞吐，勿直接套用既有配置 |
| 长上下文 Agent（>200k） | Kimi-K3 系列在 B300 上有确定性崩溃风险，建议分段或降级至已验证版本 |
| EPLB 用户（SGLang） | #32962 合入前，冗余专家路径可能**静默输出错误**而不报错，务必跟进修复 |
| 多模态并发 | 避免共享 slot + 客户端中断的并发模式，使用独立 runner 或限流 |

**一句话总结**：2026 年中的 AI 基础设施正在从「跑得动」迈向「跑得准、算得清、守得住」——性能军备竞赛仍在继续，但**稳定性、计费正确性与 Agent 语义兼容性已经成为新的差异化战场**。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 动态日报 2026-07-31

## 今日速览

Kimi-K3 与 GLM-5.2 成为当前最热门模型适配方向：Kimi-K3 迎来压缩张量量化支持（#50500）与 ROCm gfx942 使能（#50319），但并发负载下的非法内存访问崩溃（#50147）仍是上线阻碍。架构层面，FlexAttention 后端被提议弃用（#50324），SM100 专用 DSA 算子与 MTP 投机解码优化持续推进（#49793、#50230）。Intel GPU（XPU）TP=2 多卡问题仍在多型号上复现（#48953）。

## 版本发布与破坏性变更

- 【RFC】提议弃用 FlexAttention 后端：不再被 ROCm 默认选中，CUDA 上落后于 TritonAttention，维护成本高且影响 CI，建议移除。[#50324](https://github.com/vllm-project/vllm/issues/50324)
- DeepSeek V4 FlashInfer 稀疏 MLA 在 FlashInfer >= 0.6.14 中放宽了 q-head 数量限制，PR 正在移除 vLLM 侧多余的 query-head padding，升级 FlashInfer 的用户可关注。[PR #48047](https://github.com/vllm-project/vllm/pull/48047)

## 新模型与硬件支持

- **Kimi-K3**：新增 Compressed-Tensors 量化配置支持（含 fused 模块映射）；新增 ROCm gfx942 服务支持（MXFP4 专家权重转 groupwise int4 + AITER FlyDSL kernels，MLA query heads 做 TP 填充）；新增官方 tracking issue。[PR #50500](https://github.com/vllm-project/vllm/pull/50500) | [PR #50319](https://github.com/vllm-project/vllm/pull/50319) | [Issue #50001](https://github.com/vllm-project/vllm/issues/50001)
- **NVIDIA SM100**：DSA 模型（GLM-5.2）路由到新的 `deepseek_v32` SM100 专用实现，此前 main 分支尚未引用。[PR #49790](https://github.com/vllm-project/vllm/pull/49790)
- **ROCm**：gfx1250 架构初始使能，含版本检查重构与新架构门控。[PR #46516](https://github.com/vllm-project/vllm/pull/46516)
- **MIG**：修复 MIG 分区下 GPU 显存查询使用父卡句柄的问题，保留 UUID 句柄。[PR #50463](https://github.com/vllm-project/vllm/pull/50463)
- **XPU/量化**：INC W4A16 新增 `VLLM_XPU_INC_W4A16_BACKEND` 环境变量，可显式选择 XPU 原生后端。[PR #50048](https://github.com/vllm-project/vllm/pull/50048)

## 性能与优化

- **MTP 投机解码**：跨 draft step 共享 top-k 索引，draft step 0 写入共享缓冲后后续步骤跳过重复 top-k 计算。[PR #49793](https://github.com/vllm-project/vllm/pull/49793)
- **DSA decode 算子**：采用程序化依赖启动（PDL）串联 back-to-back 小 kernel，隐藏 launch 延迟（fused norm/rope + fused-q Triton kernels）。[PR #50230](https://github.com/vllm-project/vllm/pull/50230)
- **SM100 CuTeDSL 算子**：新增 fused query 预处理 kernel（packed fp8 MQA query + RoPE + indexer）；skinny GEMM 扩展支持 GLM-5.2（静态 K 特化 + K-tile 流水线预取）。[PR #49792](https://github.com/vllm-project/vllm/pull/49792) | [PR #49791](https://github.com/vllm-project/vllm/pull/49791)
- **V1/MRV2**：跳过未完成 chunked-prefill 请求的 logits 与 sampling 计算（此前虽丢弃结果但仍产生计算开销）。[PR #49171](https://github.com/vllm-project/vllm/pull/49171)
- **Kernel 覆盖**：SM100 M3 MSA 测试补齐进 CI（TML FA4 由 #48988 修复）。[PR #49143](https://github.com/vllm-project/vllm/pull/49143)

## 稳定性与回归

- 【严重/无 fix】Kimi-K3（TP=8 + prefix caching）在并发负载下反复触发 illegal-memory-access 崩溃。[Issue #50147](https://github.com/vllm-project/vllm/issues/50147)
- 【严重/无 fix】GLM-5.2-FP8 + MTP 在 8x MI300X 上首次 spec-decode step 即死锁（RCCL all-gather 传输通道错误）。[Issue #48568](https://github.com/vllm-project/vllm/issues/48568)
- 【中等/fix 在途】Qwen3.5/Qwen3-Next GDN attention 在 torch.compile warmup 时 stride 不匹配崩溃（#29014 回归）。[Issue #50046](https://github.com/vllm-project/vllm/issues/50046)
- 【中等/已在 XPU 生态内扩散】双卡 Battlemage TP=2 在启动时 `zeMemOpenIpcHandle INVALID_ARGUMENT`（Arc B50 与 Arc B70 均复现，原 #41663 已关闭但问题未解决）。[Issue #48953](https://github.com/vllm-project/vllm/issues/48953)
- 【中等/无 fix】SM<90 GPU（Ampere/Ada）上 torch.compile/CUDA graphs 的 batch invariance 被破坏。[Issue #39096](https://github.com/vllm-project/vllm/issues/39096)
- 【低/已知回归】PR #46025 合入后，DeepSeekV4-Flash 在特定 chat_template 路径下 inline system messages 处理行为改变，产生错误输出。[Issue #46710](https://github.com/vllm-project/vllm/issues/46710)

## 对应用开发者的意义

- **Responses API 推理链语义异常**：`reasoning.context` 对输入无效，且上一轮推理内容会被重新包装为 `<think>` 输出到可见文本通道，使用 `/v1/responses` 的 Agent 应用需关注。[Issue #49281](https://github.com/vllm-project/vllm/issues/49281)
- **采样分布回放（Mask Replay）**：实验性支持返回 top-k/top-p 过滤后的采样掩码，为可复现的采样行为分析提供基础。[PR #49577](https://github.com/vllm-project/vllm/pull/49577)
- **确定性解码回放**：`SamplingParams.trace_decode_token_ids` 可强制按预定 token ID 序列解码，同时保留真实 logprobs 与 token ranks，适合测试与审计场景。[PR #46701](https://github.com/vllm-project/vllm/pull/46701)
- **基准测试增强**：`vllm bench serve` 新增 `--probe-request-rate` 并发探测请求选项，可测量多模态请求间的相互影响。[PR #49611](https://github.com/vllm-project/vllm/pull/49611)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 动态日报 — 2026-07-31

## 1. 今日速览

今日最受关注的是 **Kimi-K3 系列的稳定性问题**（#32855：B300 上 ~218k token 长上下文触发 Xid 13 崩溃）与 **FP8 KV Cache 在 DSPARK 下的显著性能回退**（#32938，H200 上最高 -74% 吞吐），二者均为近两日新上报、尚无 fix PR。与此同时，社区在高优先级路线图上持续推进：**Distributed KVCache 系统（#21846）**、**HiCache 一致性修复（#22607）** 和 **Kimi-K3 Day-0 支持（#32607）** 均在本周有活跃更新；PR 侧，DCP+DSPARK 混合线性注意力修复（#32828）与 EPLB 静默错误修复（#32962）值得关注。

## 2. 版本发布与破坏性变更

本时段无新版本 Release。但有一个**内核清理 PR** 需要关注：

- **[PR #32114] Delete cutlass_mla, non-Marlin GPTQ, AWQ AOT kernel, and Dual Chunk Flash Attention**：计划删除 `cutlass_mla` 解码后端（SM10.0-only，GB300 上已不可用）以及 non-Marlin GPTQ、AWQ AOT、DCFA 等无 CI 覆盖的旧实现。若你在 Blackwell 之外依赖这些后端，建议关注合并进度。链接: https://github.com/sgl-project/sglang/pull/32114

## 3. 新模型与硬件支持

- **[Issue #32607] Kimi-K3 Roadmap（新）**：Moonshotai Kimi-K3 已获得 Day-0 支持（PR #32541），包含 DSpark 变体（`RadixArk/Kimi-K3-DSpark`）。当前 Bug 追踪见 #32970。链接: https://github.com/sgl-project/sglang/issues/32607
- **[Issue #31359] Inkling Day-0 支持（Tracking）**：Thinking Machines 的 975B 总参 / 41B 激活 MoE 模型，支持文本/图像/音频原生推理与 1M 上下文窗口。链接: https://github.com/sgl-project/sglang/issues/31359
- **[PR #32754] Enable gfx1250 Support**：AMD RDNA4 (RX 9070 XT) 架构支持，针对无 MFMA/WMMA FP4 能力的架构差异添加了独立代码路径。链接: https://github.com/sgl-project/sglang/pull/32754
- **[PR #29641] [NPU] Support MLAProlog + FP8 KV Cache + ChunkPrefill for A5 NPU**：Ascend Atlas A5 硬件上支持 DeepSeek-style MLA 工作负载的 FP8 KV Cache。链接: https://github.com/sgl-project/sglang/pull/29641
- **[Issue #32950] Integrate `cute-dsl` backend of `mm_mxfp8`（Blackwell）**：为稠密层 MXFP8 矩阵乘法引入 `cute-dsl` 后端，当前关闭了 autotune。链接: https://github.com/sgl-project/sglang/issues/32950
- **[PR #32984] [MLX] Upgrade Torch 2.13 and clarify bridge ownership**：Apple Silicon 集成适配 MLX 0.32 与 Torch 2.13 的新假设。链接: https://github.com/sgl-project/sglang/pull/32984

## 4. 性能与优化

- **[Issue #19637] SM120 (Blackwell) Performance Optimization Plan（high priority）**：DeepSeek V4 已支持，DeepGEMM MQA Indexer 已完成，DeepSeek V4 Flash（#29927）仍在进行中。链接: https://github.com/sgl-project/sglang/issues/19637
- **[Issue #28874] HiSparse Roadmap for Long-Context Sparse Serving**：通过仅保留 HBM 中的 hot working set 来降低 decode 显存占用，面向长上下文稀疏注意力场景。链接: https://github.com/sgl-project/sglang/issues/28874
- **[Issue #29736] Decode Context Parallel & Helix Parallelism — next steps**：DCP 按序列维度切分 KV cache，避免 `TP > num_kv_heads` 时的冗余问题，支撑高并发长上下文 decode。链接: https://github.com/sgl-project/sglang/issues/29736
- **[Issue #21788] Context Parallelism Roadmap (2026 Q3, high priority)**：CP 目前支持 DSA 与 MHA/GQA 模型的 prefill，DSA 已支持 Dpsk v32/glm 5，MHA/GQA 已支持 Qwen3-MoE + FA3。链接: https://github.com/sgl-project/sglang/issues/21788
- **[PR #31859] Support fastsafetensors no-GDS loading and page-cache release**：为加载器增加 `enable_gds` 开关（默认仍 GDS），并支持 `--weight-loader-drop-cache-after-load` 逐 shard 释放页缓存。链接: https://github.com/sgl-project/sglang/pull/31859
- **[PR #31854] CUDA-IPC zero-staging all-to-all for 2-rank Ulysses (opt-in)**：降低 diffusion 模型 2-rank Ulysses 下每层 4 次 NCCL all-to-all 的临时张量拷贝开销。链接: https://github.com/sgl-project/sglang/pull/31854
- **[Issue #27310] GPU Memory Service (GMS) integration**：基于已合并的 weight cache daemon（#27139），进一步实现进程外 GPU 内存管理，支持快速引擎恢复。链接: https://github.com/sgl-project/sglang/issues/27310

## 5. 稳定性与回归

按严重程度排列：

- **[Issue #32855] Kimi-K3 DSPARK: Xid 13 (CTA Not Present) crash at ~218k context on B300（新，严重）**：长上下文约 21.8 万 token 时 CUDA 崩溃，复现环境包含 B300。尚无可用的 fix PR。链接: https://github.com/sgl-project/sglang/issues/32855
- **[Issue #32938] FP8 KV cache slows down performance when DSPARK enabled（新，性能回归）**：Kimi-K3 + DSPARK 下，KV cache 从 BF16 切到 FP8 E4M3，H200 decode 吞吐回退 3.89x（batch=8 时 674.94 → 173.32 tok/s）。若依赖 FP8 KV Cache，建议暂缓升级或跟踪该 issue。链接: https://github.com/sgl-project/sglang/issues/32938
- **[Issue #31023] DSpark compact target-verify CUDA Graph timing-sensitive illegal memory access on TP8**：已拆分为两个 bug——跨 TP rank 规划不一致 + 动态 CUDA Graph 复用契约缺失。相关 RFC 见 #32432。链接: https://github.com/sgl-project/sglang/issues/31023
- **[Issue #32830] Nvidia compiler segfault when serving DeepSeek V4（新）**：NVIDIA 编译器在编译期段错误，可能与 CUDA graph capture 或特定算子有关。链接: https://github.com/sgl-project/sglang/issues/32830
- **[PR #32828] Fix DCP + DSPARK draft KV pool OOB and add static-verify coverage**：修复混合线性注意力（KDA/Mamba）recurrent state 在 verify 后未提交到 accepted length 导致的越界/漂移问题，合入 `kimi-k3` 分支并补齐测试。链接: https://github.com/sgl-project/sglang/pull/32828
- **[PR #32962] Fix silently wrong EPLB output with `--moe-a2a-backend none`（rank-invariant dispatch）**：EPLB 在默认 no-a2a 路径下会静默产生错误输出（GSM8K 分数骤降），建议使用 EPLB 的用户尽快验证此修复。链接: https://github.com/sgl-project/sglang/pull/32962
- **[Issue #17050] CI Test Failures tracker**：最后一次自动更新显示 2 broken / 3 flaky / 637 近期修复。链接: https://github.com/sgl-project/sglang/issues/17050

## 6. 对应用开发者的意义

- **长上下文 + Agentic 负载的 KV 层持续演进**：`Distributed KVCache System`（#21846）、HiCache 一致性修复（#22607）与新的 KVCC 后端 RFC（#32903）均在活跃推进中。若你的应用依赖 PD Disaggregation 或共享前缀加速，近期接口可能变化，建议关注这些 roadmap 与 RFC 以避免破坏性迁移。链接: https://github.com/sgl-project/sglang/issues/21846 / https://github.com/sgl-project/sglang/issues/22607 / https://github.com/sgl-project/sglang/issues/32903

- **Kimi-K3 / DeepSeek-V4 新模型可用但需谨慎**：Kimi-K3 Day-0 已落地（含 DSpark 变体），但长上下文场景下仍有 Xid 13 崩溃和 FP8 KV cache 性能回退问题。生产使用建议固定已验证的版本，并在 FP8 KV Cache 与 DSPARK 同时启用时进行吞吐验收测试。

- **EPLB 静默错误修复提醒**：若你使用 `--enable-eplb` + 默认 no-a2a MoE 路径，且部署了冗余专家（redundant experts），当前版本可能出现输出质量下降而不报错——这是最危险的一类问题。建议在 PR #32962 合并后尽快跟进。链接: https://github.com/sgl-project/sglang/pull/32962

- **非 NVIDIA 后端支持面扩大**：AMD gfx1250、Ascend A5 NPU 均有 PR 在推进，Apple Silicon 的 MLX 桥接也在适配 Torch 2.13。若你运行混合硬件集群，可留意这些后端的可用性信号。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 动态日报 — 2026-07-31

## 1. 今日速览

今日发布节奏密集（b10186–b10199）。核心亮点：**llama-server 新增对输入嵌入（inp embd）的支持**，可直接以嵌入向量为输入生成下一个 token（b10199）；**Vulkan 后端支持量化 concat**（b10198）；MiniMax-M3 架构继续快速迭代——prefill 阶段自定义 CPU op 已替换为 stock ops（b10189），且 MSA 被重构进新的内存实现（#26338）。同时，多个高热度 Bug 仍在追踪中，Qwen 3.6 27B 的 prompt 重处理问题（#22746）评论已过百，暂未见 fix PR。

## 2. 版本发布与破坏性变更

**b10199** — server: 支持传递输入嵌入（inp embd）以生成下一个 token（#26313）。对依赖 embedding 输入的调用方是重要能力扩展，但注意该 PR 同时做了 `~server_batch()` 的清理修复，建议更新后回归测试 embedding 相关路径。
🔗 https://github.com/ggml-org/llama.cpp/releases/tag/b10199

**b10198** — vulkan: 支持量化 concat（#25684）。Vulkan 后端的图兼容性进一步提升。
🔗 https://github.com/ggml-org/llama.cpp/releases/tag/b10198

**b10197** — 为 conv_2d 测试新增替代布局（cwhn）支持，并在构图时增加布局检查（#25617）。涉及 CPU/CUDA 后端 kernel 的布局校验逻辑，自定义构图代码若依赖旧有卷积布局行为需关注。
🔗 https://github.com/ggml-org/llama.cpp/releases/tag/b10197

**b10196** — llama-context: 在清空 embd_seq 前同步未完成的异步拷贝（#25676）。属异步路径的时序修复，建议多槽并发场景留意。
🔗 https://github.com/ggml-org/llama.cpp/releases/tag/b10196

**b10195** — 测试构建优化，避免多次编译 get-model.cpp（#26317）。

**b10194** — ggml-cuda: 允许 1xK 权重矩阵走免转置 gemmv 计算路径（#26171），可减少一部分显存拷贝与 kernel 调度开销。

**b10192** — sync: ggml 上游同步。

**b10189** — M3 图移除自定义 CPU op，改用 stock ops 表达（#26297），消除 prefill 阶段的 GPU→CPU→GPU 同步往返，详见性能部分。

**b10188** — metal: 修复模型未执行任何 GPU 操作即释放时的 memory unwire 泄漏（#26082）。

**b10186** — ggml: 修复 KleidiAI CI 的 stringop-overflow 编译告警（#26277）。

> 本日未见明显的破坏性 API/配置变更。

## 3. 新模型与硬件支持

- **MiniMax-M3（MSA）系列持续落地**：
  - #26297（已合入 b10189）：prefill 阶段自定义 CPU op 被替换为 stock ggml ops，消除 GPU↔CPU 同步。
  - #26338（新）：将 MSA 移入新的内存实现，`llama_kv_cache` 中 MSA 相关改动全部回退，目标仍是消除 prefill 同步。
  - #25113（已合入）：M3 视觉能力（Qwen2.5-VL 风格 ViT + 三轴 RoPE + 两阶段 pooling）。
  🔗 https://github.com/ggml-org/llama.cpp/pull/26297 / #26338 / #25113

- **Motif 3 Beta 支持**（#26298，OPEN）：timkhronos 提交，GDLA（Grouped Differential Latent Attention）——MLA 风格低秩投影 + 16 GQA KV heads。
  🔗 https://github.com/ggml-org/llama.cpp/pull/26298

- **TML Inkling 架构**（#25731，OPEN）：新架构支持，含 safetensors→GGUF 转换器、banded attention kernel，大 MoE 场景下部分算子需 int64 索引。
  🔗 https://github.com/ggml-org/llama.cpp/pull/25731

- **Q2_0 量化继续扩展**：
  - CUDA 后端 Q2_0 支持已合入（#25707），支持 Ternary-Bonsai 系列（27B/8B/4B/1.7B）。
  - x86 VNNI Q2_0 dot product 优化（#26348，OPEN），宣称 VNNI CPU 上 3 倍速度提升。
  - CUDA 端 Q2_0 元素解包改用 `__byte_perm`（#25603，OPEN），单 decode 提升 15–40%。
  🔗 https://github.com/ggml-org/llama.cpp/pull/25707 / #26348 / #25603

- **DSpark 投机解码**：为 DeepSeek 系（#25173）与 Gemma 4（#25549）均新增 DSpark draft 支持。
  🔗 https://github.com/ggml-org/llama.cpp/pull/25173 / #25549

- **ROCm 7.14 CI 目标**（#25775，OPEN）：首个采用 TheRock 构建系统的生产版本，Linux/Windows 双平台支持。
  🔗 https://github.com/ggml-org/llama.cpp/pull/25775

- **arm64 Windows + CUDA 构建**（#25030，OPEN）：feature request，暂无实现 PR。

## 4. 性能与优化

- **CUDA Q2_0 解包优化**（#25603）：`__byte_perm` 提取 Q2_0 元素，单 decode（tg）吞吐提升 15–40%，prefill（pp）+8%。
  🔗 https://github.com/ggml-org/llama.cpp/pull/25603

- **x86 VNNI Q2_0 dot product**（#26348）：AVX-VNNI / AVX-512 VNNI 目标下宣称 3 倍速度提升，14,000 组随机测试与通用实现逐位一致。
  🔗 https://github.com/ggml-org/llama.cpp/pull/26348

- **M3 prefill 消除 GPU→CPU→GPU 同步**（#26297 / #26338）：stock ops 表达 MSA，显著降低 prefill 往返延迟。
  🔗 https://github.com/ggml-org/llama.cpp/pull/26297

- **CUDA transpose-free gemmv**（b10194，#26171）：1xK 权重矩阵直接走 mat_mul_vec_f。
  🔗 https://github.com/ggml-org/llama.cpp/pull/26171

- **异步 pinned upload 加速 -sm tensor 模型加载**（#22466，WIP）：通过 ggml-backend-meta 单文件改动启用 chunked async-upload 流水线。
  🔗 https://github.com/ggml-org/llama.cpp/pull/22466

- **HIP RDNA3/RDNA4 MMQ 配置调优**（#26284，OPEN）：在 #26199 基础上继续调优。
  🔗 https://github.com/ggml-org/llama.cpp/pull/26284

- **Metal Tensor API 路径独立 kernel 化**（#20962，已合入）：`_matmul2d_` 路径与 legacy `_simdgroup_matrix_` kernel 分离，降低维护复杂性。
  🔗 https://github.com/ggml-org/llama.cpp/pull/20962

## 5. 稳定性与回归

按严重程度排列：

- **[高] Qwen 3.6 27B 强制全量 prompt 重处理**（#22746，OPEN）：因 cache 数据缺失，每次请求都重新处理完整 prompt；113 条评论、31 👍，社区影响面大，**暂无 fix PR**。
  🔗 https://github.com/ggml-org/llama.cpp/issues/22746

- **[高] Gemma 4 无限生成 `<unused>` token**（#21516，CLOSED/stale）：Vulkan 后端（含纯 CPU 路径）均复现，57 条评论；已被标记 stale 关闭。提示 Vulkan/CPU 上的 Gemma 4 用户保持谨慎。
  🔗 https://github.com/ggml-org/llama.cpp/issues/21516

- **[高] SYCL 混合模型空输出 / ggml_sycl_op_mul_mat 崩溃**（#24168，OPEN）：Intel Arc Pro B60 上 qwen3next/qwen35 架构回归，问题定位在 b9128–b9159 之间，官方最新镜像仍未修复。
  🔗 https://github.com/ggml-org/llama.cpp/issues/24168

- **[中] server HTTP 400 上下文超限而非截断**（#17284，CLOSED/stale）：对话历史超限时返回 400 而非自动截断，54 条评论；stale 关闭但属设计缺陷，多轮应用需自行做好长度控制。
  🔗 https://github.com/ggml-org/llama.cpp/issues/17284

- **[中] CUDA cublasSgemm_v2 参数不支持**（#26119，OPEN）：V100 + CUDA 12.4 Windows + 投机解码 + 视觉负载场景崩溃，暂无 fix。
  🔗 https://github.com/ggml-org/llama.cpp/issues/26119

- **[中] Gemma 4 12B 无法在 OpenVINO（CPU/GPU/NPU）加载**（#24415，OPEN）。
  🔗 https://github.com/ggml-org/llama.cpp/issues/24415

- **[中] Metal 内存泄漏**：模型未执行 GPU 操作即释放时 wired memory 未解除（#26082），**已由 b10188 修复**。
  🔗 https://github.com/ggml-org/llama.cpp/pull/26082

- **[低] 异步 tensor 拷贝竞态**（#26344，OPEN）：CUDA 虚拟设备 + tensor split 下非确定性行为，已有修复 PR 提交。
  🔗 https://github.com/ggml-org/llama.cpp/pull/26344

- **[低] Gemma 4 12B 大 prompt 乱码**（#26206，OPEN）：Intel Arc Pro B70（Xe2/SYCL）上复现。
  🔗 https://github.com/ggml-org/llama.cpp/issues/26206

- **[低] 图像+大 prompt 粘贴/加载可稳定崩溃**（#24983，OPEN）：Vulkan + AMD 7900XTX。
  🔗 https://github.com/ggml-org/llama.cpp/issues/24983

- **[低] 混合 CUDA + ZenDNN prefill 性能回退 ~50%**（#24315，CLOSED/stale）：commit 7acb4e8 引入，已 stale 关闭，但 Zen5 用户需留意。
  🔗 https://github.com/ggml-org/llama.cpp/issues/24315

## 6. 对应用开发者的意义

1. **Server 可直接接收 embedding 输入**（b10199/#26313）：构建 RAG/检索式 Agent 时可跳过 tokenize 阶段，以向量为输入直接生成 token。对多模态/自定义 embedding 管线的集成是一步重要简化。
2. **/slots 端点实时推理统计**（#25813，OPEN）：已经有人在推，若合入则无需解析日志即可拿到每槽位的 prompt 处理/生成吞吐，对服务可观测性建设有直接价值。
3. **多轮工具调用 checkpoint 失效问题**（#24891，OPEN）：checkpoint 恢复后 n_past 被覆盖，导致工具调用后的多轮上下文被错误截断。依赖 server 端 checkpoint 的 Agent 框架需要关注此 PR。
4. **Q2_0 量化生态正在补齐**：CPU、Metal、CUDA 均已支持，VNNI x86 有 3 倍加速。Ternary-Bonsai 系列可在 CUDA 上运行；对显存敏感的边缘部署可评估 Q2_0 方案。
5. **高风险模型组合提醒**：Qwen 3.6 27B（cache 失效）、Gemma 4（Vulkan 无限循环 / OpenVINO 无法加载 / 大 prompt 乱码）在当前版本上均有未修复的稳定性问题，生产选型需避开或加好兜底。
6. **投机解码持续演进**：DSpark 在 DeepSeek 与 Gemma 4 上陆续落地（#25173/#25549），低延迟场景可关注后续合入状态；Suffix Decode（#26283）作为 model-free 方案也在推进中。

---
*日报覆盖时间窗：2026-07-30 至 2026-07-31（GitHub 数据）。所有链接均指向 ggml-org/llama.cpp 官方仓库。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 动态日报 2026-07-31

## 1. 今日速览

Ollama 在过去 24 小时无新版本发布，但社区在 0.32.5 上报告了多项值得警惕的稳定性问题：**Qwen3.6 在 CUDA 与 Apple M5 上分别出现崩溃/冻结**、**0.32.4/0.32.5 破坏 VS Code Copilot 工具调用**、以及一条**并发视觉请求内容泄漏**的安全类报告。与此同时，维护者在持续推进 OpenAI 流式协议兼容、MLX 多模态（Gemma4 vision）以及输入 token 计数 API 等工作，整体处于「修复积压与功能演进并行」的状态。

## 2. 版本发布与破坏性变更

- **无新 Release**。
- 值得注意的回归信号：多个用户反映 **0.30.0 及以后版本无法加载模型**（`#17285`），以及 **0.32.4/0.32.5 破坏 VS Code Copilot Harness 的工具调用**（`#17444`）。生产环境升级前建议先行验证工具调用链路。

## 3. 新模型与硬件支持

- **[#12149] [Model Request] Apertus 模型支持**：瑞士 AI 计划的新模型因 `unsupported architecture "ApertusForCausalLM"` 无法加载，社区呼声较高（👍 82）。需等待 Transformers 侧更新及 Ollama 架构适配。
  https://github.com/ollama/ollama/issues/12149
- **[#17235] Kimi K3 上云请求**：用户询问 Kimi K3 何时在 Ollama Cloud 可用，仍是开放状态。
  https://github.com/ollama/ollama/issues/17235
- **[#17479] Gemma 4 E4B MLX 质量问题**：用户在 M2 Mac mini 上对比 `gemma4:e4b-it-qat` 与 `gemma4:e4b-mlx`，希望 MLX 版达到 QAT 版的质量水平并支持注册 JSON schema。同日另有 **PR #17487 为 MLX runner 添加 Gemma4 vision 支持**（临时多模态集成框架 + 媒体缓存）。
  https://github.com/ollama/ollama/issues/17479
  https://github.com/ollama/ollama/pull/17487
- **[#17483] cloud 标签提示**：PR 建议当默认 tag 拉取失败时，自动探测 `:cloud` 变体（如 `kimi-k3:cloud`），改善云模型的可发现性。
  https://github.com/ollama/ollama/pull/17483

## 4. 性能与优化

- **[#17144] 移除 qwen35/qwen35moe 并行限制**：此前因 llama.cpp 在混合架构上的崩溃，Ollama 对这两个模型强制 `numParallel = 1`。上游已在 2026-03-08 修复，此 PR 试图解禁并行请求以提升吞吐。
  https://github.com/ollama/ollama/pull/17144
- **[#17478] 新增输入 token 计数 API**：新增 `/v1/messages/count_tokens`、`/v1/chat/completions/input_tokens`、`/v1/responses/input_tokens`，复用 runner tokenizer 对完整渲染 prompt 计数，便于做精确的成本/限流控制。
  https://github.com/ollama/ollama/pull/17478
- **[#17472] 调试日志增加响应记录**：`OLLAMA_DEBUG_LOG_REQUESTS` 目前只写请求体与 curl 重放脚本，该 PR 增加响应记录，提升生成/工具调用问题的排查效率。
  https://github.com/ollama/ollama/pull/17472

## 5. 稳定性与回归

按严重程度排列。**本轮无新 Release，以下问题均基于 0.32.5 及之前版本的社区报告（含部分已提交修复 PR）。**

- **[#17475] 并发视觉请求内容泄漏（安全级）**：在共享单 slot（`-np 1`）场景下，客户端中止与并发混载会导致一个请求的输出包含另一请求的图像数据。多模态应用务必关注此 issue。
  https://github.com/ollama/ollama/issues/17475
- **[#17444] 0.32.4/0.32.5 工具调用回归**：VS Code Copilot Harness 中工具调用异常，回滚到 0.32.1 可解决。Agent 类应用慎升此版本。
  https://github.com/ollama/ollama/issues/17444
- **[#17434] Qwen3.6:35b CUDA 崩溃**：DGX Spark（GB10 arm64）上，`JSON schema format + think:false + qwen3.6:35b` 三个条件组合时 100% 触发 `illegal memory access`。任一条件改变即消失。
  https://github.com/ollama/ollama/issues/17434
- **[#17452] Qwen3.6 冻结 macOS（Apple M5）**：MacBook Air M5 上运行 `qwen3.6:latest` 导致系统无响应，需强制重启。Mac 用户建议暂缓使用该模型。
  https://github.com/ollama/ollama/issues/17452
- **[#17459] Gemma 4 `think=false` 输出 `<unused49>`**：API 请求包含 `"think": false` 时反复输出无效 token，同时破坏 VS Code 集成。
  https://github.com/ollama/ollama/issues/17459
- **[#17430] GPT-OSS Q8 长上下文崩溃**：`num_ctx 131072` 时崩溃。**已有 PR #17477 定位根因**：Ollama 未告知 llama-server 该模型需要 flash attention，导致 `auto` 模式在部分 offload 时关闭 FA。
  https://github.com/ollama/ollama/issues/17430
  https://github.com/ollama/ollama/pull/17477
- **[#17285] 0.30.0+ 无法加载模型（AMD Vega8/Ryzen）**：用户被迫停留在 0.24.0。
  https://github.com/ollama/ollama/issues/17285
- **[#17429] 含 `role: "tool"` 的对话挂起**：`/api/chat` 与 `/v1/chat/completions` 均复现，影响 hermes3、ornith 等模型。
  https://github.com/ollama/ollama/issues/17429
- **[#4165] 多模态并行 bug（老 issue 仍活跃）**：`OLLAMA_NUM_PARALLEL` 与 llava/moondream 并用触发 `failed processing images`。
  https://github.com/ollama/ollama/issues/4165
- **[#17482] 模型频繁卸载/重载**：VS Code 与 Goose 交替使用时，同一模型反复卸载加载，影响交互流畅性。
  https://github.com/ollama/ollama/issues/17482
- **[#17484] 社区 GGUF 下载后 `context deadline exceeded`**：从 Hugging Face 拉取模型后运行超时。
  https://github.com/ollama/ollama/issues/17484
- **[#17471] ollama.com 403 登录循环**：持续 8 小时+，Web/API/CLI 均受影响，官方尚未回应。
  https://github.com/ollama/ollama/issues/17471
- **修复类 PR 值得关注**：**[#17486]** 解包模型重复输出的 tool-call 参数信封；**[#17485]** 对齐 OpenAI 流式 wire format（`finish_reason` 单独成块）；**[#17477]** GPT-OSS flash attention 修复；**[#17467]** 修复侧边栏 transition 闪烁。

## 6. 对应用开发者的意义

- **Agent/工具调用应用请谨慎升级**：0.32.4/0.32.5 确认存在工具调用回归（`#17444`）；同时留意带 `tool` 角色的历史消息可能触发挂起（`#17429`）。当前建议在 Agent 生产环境固定 0.32.1，待官方发布修复后再评估升级。
- **多模态 + 并发场景有安全红线**：`#17475` 的内容泄漏意味着在共享 slot 下并发视觉请求 + 客户端中断可能造成跨请求数据串扰。对隐私敏感的应用，应避免依赖默认调度，考虑独立 runner 或限制并发。
- **Qwen 系列（Qwen3.6）暂列为高风险**：CUDA 非法内存访问与 M5 冻结双重问题，若业务依赖该模型，建议钉住旧版本或绕开 `think:false` + JSON Schema 的组合。
- **OpenAI 兼容层正在对齐**：`#17485` 修正 `/v1/chat/completions` 流式响应格式；`#17478` 新增输入 token 计数 API。对网关层做成本核算、限流和协议兼容的开发者，这两个改动值得持续跟踪。
- **云端模型（如 Kimi K3）体验将改善**：`#17483` 的 `:cloud` 标签提示可减少用户拉取失败困惑；Ollama Cloud 仍缺 prompt cache，Agent 场景成本偏高（`#16714`）。
- **SLS/评测工作流**：`#17480` 基准测试改用 Python patch 提示词以生成更真实的评测数据；`#17463` 社区提出 OpenEval 导入/导出提案，评估工具链集成方可持续观望。

---
*本日报基于 GitHub 公开数据整理，内容截至 2026-07-31 24:00 UTC。*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 动态日报 — 2026-07-31

## 今日速览

昨日至今 LiteLLM 的 PR 集中在**计费准确性**与**配置持久化**两大主题：`/v1/messages` 流式响应长期存在 usage 少算（推理 token 缺口可达 90%+），已有修复 PR 合入；同时多项 PR 解决 config 定义的 guardrail / policy 在连接 DB 后失效、重启后丢失的问题。OTEL v2 多租户追踪（#30873）持续推进，值得关注。

## 版本发布与破坏性变更

- **v1.96.0-dev.1** 已发布（2026-07-31）。此版本无功能变更，仅附带 Docker 镜像 cosign 签名验证说明。  
  https://github.com/BerriAI/litellm/releases/tag/v1.96.0-dev.1
- **行为变更（回滚）**：`#35299` 将 `#35271` 回滚至 `rc/1.95.0`，即**撤销**此前“团队密钥受用户个人预算约束”的强制行为（#32005 的 revert）。团队密钥将恢复为仅由团队预算管理。这影响依赖个人预算限制团队密钥用量的用户，需重新评估预算策略。  
  https://github.com/BerriAI/litellm/pull/35299

## 新模型与硬件支持

今日**暂无已落地的新模型或硬件支持**。以下为社区新增的模型支持请求（均处于 open 状态，尚未合入）：

- `#35250`：请求在 `model_prices_and_context_window.json` 中添加 **Gemini Robotics ER 2 Preview** 与 **Gemini Robotics ER 1.6 Preview** 的定价和上下文配置。  
  https://github.com/BerriAI/litellm/issues/35250
- `#33921`：请求原生支持 **Kimi K3**（Moonshot AI）、**Inkling**（Thinking Machines Lab）和 **Tinker** 平台。  
  https://github.com/BerriAI/litellm/issues/33921
- `#24229`：请求添加 **Venice** 模型 `venice/grok-code-fast-1` 支持。  
  https://github.com/BerriAI/litellm/issues/24229

## 性能与优化

- **提示词缓存预热（进行中）**：`#35252` 为 ComplexityRouter（auto-router v2）增加会话级 prompt cache 保持策略，避免会话在多个 tier 间切换时因模型缓存冷启动产生重复的 cache-write 费用。对高并发多轮 Agent 会话有直接收益。  
  https://github.com/BerriAI/litellm/pull/35252
- **流式 usage 上报修复（已合入）**：`#35290` 合入后，代理默认向上游请求 `stream_options.include_usage`，并从未端 client stream 中移除 usage 字段。这显著修正了推理模型（如 Claude Opus 系）因 hidden reasoning tokens 导致的输出 token 少算问题——修复前 SpendLogs 可能少记 90% 以上的实际输出 token。  
  https://github.com/BerriAI/litellm/pull/35290
- **速率限制器重构（已合入）**：`#35278` 将 v3 limiter 的内部状态从 request metadata 迁移到 ContextVar，避免内部字段（如 `_internal_usage`）泄漏到 OpenAI 上游请求，同时消除对 metadata denylist 的额外清理开销。  
  https://github.com/BerriAI/litellm/pull/35278

## 稳定性与回归

按严重程度排序：

1. **流式 usage 严重少算（修复已合入）**：`#35290` 解决了 `/v1/messages` 等流式场景下 SpendLogs 低估输出 token 的问题，直接影响计费、预算与速率限制准确性。  
   https://github.com/BerriAI/litellm/pull/35290
2. **Guardrail 流式静默绕过（已关闭）**：`#35257` 报告 `post_call` guardrails 在 `/v1/messages` 流式响应中被跳过，且审计日志仍记录 `guardrail_status: "success"`。该 issue 已于 7/30 关闭，对应修复已合入。  
   https://github.com/BerriAI/litellm/issues/35257
3. **Guardrail 信息丢失（修复中）**：`#35292` 修复 `/v1/messages` 的 SpendLogs 中 `guardrail_information` 为 null、UI guardrail 面板不更新的问题——根源是 `function_setup` 未将 `litellm_metadata` 以引用方式绑定。  
   https://github.com/BerriAI/litellm/pull/35292
4. **S3 日志上传 403（修复中）**：`#35296` 修复 S3 object key 含空格（如团队别名 `LLM AI Projects`）时因签名规范不匹配导致的上传失败。  
   https://github.com/BerriAI/litellm/pull/35296
5. **Prisma 二进制启动期下载（待修复）**：`#33167` 报告 v1.92.0 起代理启动时尝试下载 Prisma binaries，导致网络受限的私有化部署失败。目前仍 open，无关联 fix PR。  
   https://github.com/BerriAI/litellm/issues/33167
6. **TPM 并发限制绕过（待修复）**：`#18730` 报告并发请求可完全绕过 TPM 速率限制（超出配置限额数倍仍全部成功）。该 issue 已存在约 6 个月，当前仍 open，无 fix PR。  
   https://github.com/BerriAI/litellm/issues/18730

## 对应用开发者的意义

- **计费数据更可信**：流式 usage 修复后，基于 `spend_logs` 或已用 token 的自建监控、预算告警和按量计费会显著更准确。如果你正在构建用量计费/配额系统，建议升级到包含 `#35290` 的版本，并关注 release notes。
- **Guardrail 不再是“摆设”**：近两日多个 PR（#35259、#35292、#35257）修复了 guardrail 在流式、无 DB 模式下的跳过和配置丢失问题。若你的应用依赖 guardrail 做内容安全审计，务必确保部署版本包含这些修复，否则存在审核盲区。
- **配置持久化语义改进**：`#35263`、`#35259`、`#35165` 使 config 中定义的 policy / guardrail / reload 调度在连接 DB 或重启后仍保持生效，并能在 UI/API 中稳定可见。对使用“config + DB”混合模式的团队，可减少“配置了但没生效”的隐性问题。
- **多租户可观测性即将到来**：`#30873`（OTEL v2）将 trace destination 从 proxy 全局配置改为由管理员注册、按身份（team/user）路由，可避免多租户 trace 互相可见。对 SaaS 化或企业内多团队共享代理的场景，值得提前评估适配成本。
- **预算模型变化**：如果你正在使用团队密钥 + 个人预算的组合策略，注意 `#35299` 的 rc/1.95.0 回滚——个人预算将不再自动限制团队密钥用量，需显式配置团队级别预算。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

## Unsloth 动态日报 2026-07-31

数据源：github.com/unslothai/unsloth

---

### 1. 今日速览

- 过去 24 小时无新版本发布，但开发节奏极快：共更新 10 个 Issue、59 个 PR，其中 2 个新 PR 直接对应昨天的功能请求（MCP OAuth 支持 #7665、Markdown 导出 #7664），Studio 相关代码（桌面端/训练/API）仍在高频迭代。
- 硬件侧有 2 个需要警惕的问题：ROCm 多 GPU 自动选卡会误选 iGPU 导致崩溃（#7624，已确认）；Intel XPU 批量左填充生成测试失败（#7638），CUDA 通过、XPU 不通过。
- 离线加载存在隐蔽缺陷：#7591 量化了问题——断网时加载一个已下载的 GGUF 需要约 11.4 分钟，现已有修复 PR 改为检测“不可达 hub”而不只是 DNS 失败。

---

### 2. 版本发布与破坏性变更

- **无新 release。**
- **进行中 PR 的潜在变更**：#7665 计划对 MCP OAuth 客户端密钥做静态加密存储（Windows 用 DPAPI、POSIX 用 Fernet），并将密钥排除在 API 响应之外。这属于后续发布的安全加固，尚未合入。

---

### 3. 新模型与硬件支持

- **无官方新模型或新硬件后端发布。**
- 社区工作负载与兼容性动态：
  - **Qwen3.6-27B（MTP GGUF）**：#7623 报告自定义扫描文件夹中，文件名含 `"qwen3.6"` 的 GGUF 被错误路由到 transformers/PeftConfig 加载器而非 llama-server。PR #7648 正在修复自定义 MTP 扫描根目录下的 GGUF 分类问题，确保主 Qwen 文件可正常加载。
  - **Gemma-4-26B-A4B**：#7375 修复了缓存中的 GGUF 因 dangling HF ref 被隐藏、以及加载失败后自动重复下载的问题，涉及 HF 标准缓存路径扫描。
  - **AMD ROCm**：#7624 确认了多 GPU 自动选择在空闲内存启发式下会优先选中 iGPU（共享内存）而非 dGPU，进而崩溃且无回退逻辑。当前 workaround 只能是禁用 iGPU，尚无修复 PR。
  - **Intel XPU**：#7638 报告 `test_batched_leftpad_matches_solo_generation` 在 XPU 上失败，与 CUDA 行为不一致。无修复 PR。

---

### 4. 性能与优化

- **并行聊天队列（PR #7629，OPEN）**：将单例 active-chat 提示队列替换为独立的 per-chat 队列，每个聊天内部保持 FIFO，同时在推理后端并发上限内允许就绪聊天并行调度。这直接改善多会话场景下的吞吐与首 token 延迟。
- **离线加载路径优化（PR #7591，OPEN）**：现有离线加载已下载 GGUF 模型需要 11.4 分钟，原因是 hub 配置拉取超时。该 PR 通过正确识别“不可达 hub”来规避无意义的网络等待，大幅缩短离线启动时间。
- **VRAM 驻留抖动（Issue #7164，OPEN）**：在 AMD W7900/W7500（llama.cpp b10019-mix）上，模型空闲时被移出 VRAM，导致每次响应需要重新加载，额外延迟 + 内存压力。目前只有报告、无修复 PR，对 ROCm 桌面场景影响明显。

---

### 5. 稳定性与回归

按严重程度排列：

1. **ROCm 多 GPU 选卡崩溃（Issue #7624，OPEN）**：系统同时有 iGPU/dGPU 时自动选卡选错，导致加载直接崩溃且无回退。属确定性崩溃，影响所有 Rocm 双卡用户。**无 fix PR。**
2. **XPU 批量左填充生成不一致（Issue #7638，OPEN）**：批量左填充生成的输出与单条生成不一致，属于正确性 bug，可能影响 vLLM/批处理场景。CUDA 上不可复现，定位为 XPU 后端问题。**无 fix PR。**
3. **模型离线加载不可用（Issue #7591 解决中）**：断网时已下载模型无法加载，暴露时间长达分钟级。**fix PR #7591 已提交。**
4. **GGUF 加载器路由错误（Issue #7623，OPEN）**：文件名含 `"qwen3.6"` 的 GGUF 被送到 transformers 加载器，导致加载失败或错误推断结构。**PR #7648 已提交，修复 MTP 扫描根目录分类。**
5. **桌面端拖放冲突（Issue #7661，OPEN）**：拖入任何文件都会被 GGUF 模型 overlay 拦截，导致聊天附件无法拖拽添加。**无 fix PR。**
6. **桌面端修复工具版本偏差（PR #7641，CLOSED）**：修复了 Tauri repair 流程将陈旧 `install_python_stack.py` 覆盖到当前 wheel 导致环境损坏的问题，同时修复无效 UTF-8 输出导致管道关闭。
7. **后端进程泄漏（PR #7655，OPEN）**：桌面 app 崩溃/强杀后，后端进程继续占用 8888 端口，下次启动会误判为 “backend is too old”。该 PR 添加父进程 watchdog。
8. **训练下载状态跟踪（PR #7649，OPEN）**：修复 Studio 训练启动时轮询错误仓库导致的 “Ready” 状态不准确，改为轮询后端实际解析的 HF 仓库。

---

### 6. 对应用开发者的意义

- **MCP 生态接入将更完整**：#7665 的 MCP OAuth 预注册客户端支持（以及 #7653 对 Google Calendar MCP 认证的反馈）意味着后续可以在 Studio 上挂载官方远程 MCP 服务器。对构建 agent 工具链的团队来说，这是当前最值得跟踪的 PR。
- **Studio API 集成门槛降低**：#7656 新增 `x-api-key` 头认证，与既有 Bearer 方案并存，并暴露在 OpenAPI 中。方便外部系统以服务化方式接入 Unsloth Studio 的推理/训练能力。
- **并行会话应用可受益于调度改进**：#7629 的 per-chat 队列使多聊天应用不再被单一队列头部阻塞，后端并发上限能被更充分利用。
- **离线/边缘部署要盯紧两个 issue**：#7591（离线加载）修复后应显著改善本地模型的可用性；#7164（VRAM 抖动）对桌面/工作站场景仍有影响，建议 AMD 用户关注。
- **模型加载语义注意**：如果应用依赖自定义扫描目录的 GGUF 文件（尤其是名称包含 `MTP` 或 `qwen3.6`），在 #7648 合入前需要注意当前错误路由问题，避免生产环境自动加载失败。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*