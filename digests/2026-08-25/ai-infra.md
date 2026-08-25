# AI 基础设施日报 2026-08-25

> 生成时间: 2026-08-24 23:13 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施生态横向对比分析报告（2026-08-25）

## 1. 生态全景

今日生态呈现三条并行主线：vLLM 推进 MRV2 执行层默认化（#53183）、SGLang 清理 Prefill CP v1 运行时，两大服务端引擎不约而同从“加功能”转向“收敛架构”。投机解码与 MXFP4/NVFP4 量化成为跨项目共性投入方向，但投机解码同时也是 bug 密度最高的区域（Tool Call 损坏、接受率崩塌、PD 分离崩溃）。硬件适配持续外扩至 ROCm gfx950/gfx942、Ascend NPU、Intel XPU、Rubin sm_107 与 Blackwell sm_120，NVIDIA 一家独大的格局正在松动。Agent/工具调用可靠性问题横跨引擎、本地运行时、网关三层，成为生产落地最突出的横切短板。版本节奏上，llama.cpp 单日发布 8 个版本，本地运行时迭代速度显著快于服务端引擎（vLLM/SGLang/Ollama/LiteLLM/Unsloth 均为 0 Release）。

## 2. 各项目活跃度对比

| 项目 | 分层定位 | Issue 条目* | PR 条目* | Release | 今日焦点 |
|---|---|---|---|---|---|
| vLLM | 服务端推理引擎 | ~19 | ~14 | 0 | MRV2 默认化、Kimi-K3 ROCm 双路线图、投机解码集中修复 |
| SGLang | 服务端推理引擎 | ~12 | ~11 | 0 | Prefill CP v2 重构、PD 分离稳定性、Rubin 初始支持 |
| llama.cpp | 本地/边缘运行时 | ~14 | ~13 | 8（b10604–b10615） | Metal 后端两次重构、DeepSeek 4 `-sm tensor`、DFlash2 |
| Ollama | 本地开发者运行时 | ~14 | ~7 | 0 | qwen3.8 高危集中爆发、MLX 结构化输出与 Granite 支持 |
| LiteLLM | LLM 网关 | ~15 | ~12 | 0 | 流式转换 3 个崩溃 PR 合入、Anthropic 中流 fallback |
| Unsloth | 训练/微调框架 | ~19 | ~6 | 0 | 量化 KV cache TP 修复、DGX Spark 定性为 transformers pin 问题 |

*注：条目为日报中列示的 Issue/PR 数，非 GitHub 全量统计；已关闭、已合并与 Open 均计在内。

**判断**：vLLM 仍是生态中心（Issue/PR 绝对量大、讨论热度最高）；llama.cpp 节奏最快；LiteLLM 与 Unsloth 以“消化技术债”为主（修复存量 bug、加固 CI），而非新功能扩张。

## 3. 模型支持竞速

| 项目 | 新模型/新架构 | 新硬件后端 |
|---|---|---|
| vLLM | Kimi-K3 ROCm 双路线图（gfx950 + gfx942/MI325X）、Qwen GDN FlashInfer fused decode、MiniMax-M3 MTP、FlexOlmo/Olmo3/Hunyuan 迁移至 Transformers 后端（-3k 行）、VLA 一等支持 RFC | ROCm gfx950/gfx942、sm_120 |
| SGLang | Nemotron 3.5 Lightning 投机解码（ModelOpt W4A16 NVFP4）、LLaDA2.2 Block Routing MoE、MiniMax H3、GLM5.1 DSA Attention | Ascend NPU、Intel XPU、Rubin sm_107（CUDA 13.4 容器） |
| llama.cpp | DeepSeek 4 `-sm tensor` 张量并行、DFlash2 架构（动态深度卷积 + candidate selector）、DFM Mimir 1B 双栈交替架构、MXFP4/NVFP4 量化全路径 | Hexagon 多 NPU、Apple GPU 按设备调优 |
| Ollama | Granite 4.1（MLX）、MLX 结构化输出（xgrammar logits 掩码） | Apple MLX 生态 |
| LiteLLM | 无官方新增；社区请求 MiniMax-h3 视频模型（VLLM OMNI）与 Bedrock Mantle passthrough | —（涉及 Bedrock 适配） |
| Unsloth | DGX Spark 加载 Qwen3.5/3.8 已定性为 transformers 4.57.1 pin 过旧，4 个月未修复 | AMD RDNA1/TheRock 索引 |

**谁跑在前面**：llama.cpp 负责架构广度——DFlash2、DFM 等新架构最快落地；vLLM 主导**规模化部署**模型覆盖，Kimi-K3 ROCm 支持（今日 22 评论最热）说明 AMD 大模型服务需求已进入主线；SGLang 在非 NVIDIA 硬件矩阵上最激进（同日推 Ascend/XPU/Rubin）；Ollama/Unsloth 聚焦 Apple/桌面与微调链路，节奏靠后。

## 4. 性能优化前沿

**① 投机解码——最集中的火力点**
- vLLM：adaptive verification 扩展至全部 draft 投机器（#52228）、DSpark logprobs 解锁（#52242）、投机解码下 CUDA graph 回退修复（#53407，消除一半 decode batch 的 eager 回退）
- llama.cpp：CUDA MoE 融合覆盖 MTP/Dflash 2–8 token（#27621）、新增 `draft_n_verif_steps` 接受率观测（#27676）、Vulkan 为 AMD 禁用 MMVQ（#25666）
- 但伴随高密度回归：llama.cpp draft-mtp 接受率崩塌至 0.0（#27572）、SGLang DFLASH + PD 分离直接崩溃（#36140）、vLLM Qwen 122B 投机解码 Tool Call 畸形（#35800）——**高性能与高 bug 密度并存**是该方向现状

**② KV Cache 与显存/权重的内存效率**
- vLLM：MRV2 batch-sharded sample 将采样 logits 显存降至 1/TP（#50465）；DeepSeek-V4-Flash KV cache 异常膨胀 8 倍（#51041）暴露问题
- SGLang：Weight Cache Daemon Phase 1——Qwen3-235B FP8 权重加载从 306–327s 降至 <1s（#33522）；NVFP4 KV cache 路线图 SM120 初版完成（#29913）
- Unsloth：TP 开启时量化 KV cache 被静默丢弃的问题修复（#8939）
- Ollama：跨模型卸载/重载的 prefill cache，8 GiB LRU + fingerprint（#17278）
- 短板：vLLM KV cache 量化仍 FP8-only（#33480），H20 等硬件用户持续受阻

**③ 算子与编译优化**
- 融合 kernel：vLLM FlashInfer fused GDN decode 单次 launch（#53645）、AITER PA gluon decode（ROCm）；SGLang AMD GLM5.2 MXFP4 tuned kernels（#34317）
- 编译加速：SGLang DeepGEMM JIT 预编译去重（#36231）；llama.cpp Metal 拆分 8 个 metallib 并行编译（b10614）+ flash-attn 按设备向量化（vec 实例 80→133，b10615）
- 调度优化：llama.cpp Mamba2 投影展平（GEMV→GEMM，长序列 prefill 显著收益，b10605）；Vulkan density-gate 修复 decode 悬崖（B=9 +36%、B=16 +27%，#27332）

**④ 并行与分布式**
- llama.cpp：DeepSeek 4 新增 `-sm tensor` 张量并行，共享专家延迟 allreduce（b10604）
- SGLang：Prefill CP v1 → v2 清理迁移、PD 分离模式成为重点维护对象
- vLLM：多节点 gloo barrier 死锁（#52907）暴露 TP-16 规模下的通信稳定性短板
- Ollama：cgroup CPU 配额推导默认线程数，容器化部署性能可预期（#17962）

## 5. 分层定位差异

| 层 | 项目 | 核心差异点 |
|---|---|---|
| **服务端推理引擎** | vLLM / SGLang | vLLM 是事实标准，今日以 MRV2 执行层收敛确立长期架构；SGLang 以 PD 分离、Prefill CP 和硬件后端广度（NPU/XPU/Rubin）差异化 |
| **本地/边缘运行时** | llama.cpp | 最广硬件与架构支持、GGUF 生态、轻量 embeddable；Metal/SYCL/Vulkan/OpenCL 全覆盖，是“任意设备跑任意新模型”的底线 |
| **本地开发者运行时** | Ollama | 构建于 llama.cpp/MLX 之上，抽象底层细节，主打开箱即用与 OpenAI 兼容；今日主要矛盾转向 UX 稳定性（qwen3.8 工具链、MLX 前缀缓存缺失） |
| **LLM 网关** | LiteLLM | 不碰推理内核，专注多 provider 路由、预算、协议转换（OpenAI↔Anthropic↔Bedrock）、流式 fallback；价值在“转换正确性”与“故障恢复” |
| **训练/微调框架** | Unsloth | 微调显存/速度优化 + Studio 桌面产品双线；与推理生态通过 GGUF 导出（→llama.cpp/Ollama）和 vLLM 服务衔接 |

**价值链关系**：Ollama 吃 llama.cpp 内核红利，LiteLLM 统一路由 vLLM/SGLang/Ollama 后端，Unsloth 向下游链路导出量化模型。今日动态显示各层“各自为战”的状态正在被跨层问题（工具调用可靠性、reasoning 字段透传）打破——这类问题需要从引擎到网关端到端修复。

## 6. 值得关注的趋势信号

**① 执行层收敛是服务端引擎的主旋律**
vLLM MRV2 默认化（#53183）+ SGLang CP v1 清理（#36229/#36228）同步推进。对依赖自定义算子/量化内核的团队，MRV1 兼容面收窄意味着需要提前做迁移验证；这是未来数个版本周期内最大的兼容性风险点。

**② 投机解码进入“普惠化与高水位 bug”并存阶段**
adaptive verification 不再局限于带 confidence head 的 DSpark，MTP/EAGLE3/DFlash 均可受益；但 SGLang DFLASH+PD 分离崩溃、llama.cpp MTP 接受率归零、FreeBSD 自投机失效等说明远未生产就绪。**生产启用前必须在目标硬件+目标模型上跑 acceptance 测试。**

**③ 量化格式快速收敛到 MXFP4/NVFP4**
llama.cpp 完成全路径实现（#26869）、SGLang 提供 AMD tuned kernel（#34317）、vLLM Kimi-K3 路线图含 AITER a16w4/a8w4，三家在同一格式上汇合。但 FP8-only KV cache 量化（vLLM #33480）仍是 H20 等硬件的明确短板。

**④ 硬件矩阵外扩加速，NVIDIA 不再是唯一舞台**
ROCm gfx942/gfx950（两条 Kimi-K3 路线图）、Ascend A5 MXFP8、Intel XPU、Rubin sm_107 同步推进。对多硬件厂商企业是利好；但 SGLang B300 sm_103 kernel 崩溃（#34340）显示新硬件支持初期风险高，需谨慎选型。

**⑤ Agent/工具调用可靠性是横切生产短板**
四层同日暴露同类问题：vLLM 投机解码损坏 tool call（#35800）、Ollama qwen3.8 工具调用 500（#17778）、SGLang `strict: null` 返回 400（#36194）、LiteLLM MCP 自动执行劫持工具（#37031）。**Agent 生产环境必须做端到端集成测试，不能只信单一组件。**

**⑥ 基础设施质量工程走向前台**
vLLM 将 torch-nightly CI 接入 PyTorch CRCR（#51830）、LiteLLM CI 禁止危险 Prisma 迁移（#37899）、SGLang 持续追踪 3 broken/11 flaky——平台团队开始把“防回归与可恢复性”当一等功能对待。

### Agent/应用开发者行动建议
- **投机解码**：在目标硬件验证接受率与输出一致性后再启用；llama.cpp 的 `-np N` 多槽并发下有已知竞争条件（#27572）。
- **Ollama qwen3.8 组合暂不建议上生产**：工具调用 500、Claude Code 截断、无法禁用 thinking（#17778/#17961/#17969）三问并发；依赖 `/v1/chat/completions` 的 Agent 建议锁定版本并增加重试/降级。
- **网关层字段规范化**：SGLang 对 `strict: null` 直接 400，建议在 LiteLLM 或自有网关层清洗该字段；LiteLLM 的密钥级陈旧 spend（#27735）可能导致过早 429，预算告警需留余量。
- **流式响应校验**：Ollama 工具解析失败会静默丢弃输出（#17274）、SGLang 流式内容截断（#34214）均无修复 PR，客户端需自备完整性校验。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 动态日报 — 2026-08-25

## 今日速览

今日最核心的变化是 **Model Runner V2（MRV2）默认化 PR 回归**（#53183），标志着 vLLM 推理引擎执行层全面切换进入最终阶段；同时 **Kimi-K3 的 ROCm 支持**成为社区最热门话题，两条独立 roadmap（gfx950 与 gfx942/MI325X）在同日更新，AMD 平台适配持续推进。稳定性方面，**多节点 gloo barrier 死锁**、**DeepSeek-V4-Flash 非确定性输出**、**Gemma4 启动失败**等问题集中上报，其中 speculative decoding 相关的两个 crash 类 bug 已有对应修复 PR。

---

## 版本发布与破坏性变更

无新版本 Release。需关注以下进行中的破坏性变更：

- **[MRV2] 默认启用 MRV2 执行所有模型**（#53183，OPEN，需 rebase）：除 ROCm 部分性能未达标的模型外，MRV2 将成为默认执行路径。MRV1 仅保留给尚未迁移的特定功能。合并后可能影响自定义算子、量化内核的兼容性，建议提前验证现有工作负载。

链接：https://github.com/vllm-project/vllm/pull/53183

---

## 新模型与硬件支持

- **Kimi-K3 ROCm 全面支持路线图**（#50682，评论 22，今日最热）：跟踪 vLLM 上游在 ROCm 平台对 Kimi-K3 的 feature enablement 与性能优化，已集成 AITER fused-moe（a16w4/a8w4）。

  链接：https://github.com/vllm-project/vllm/issues/50682

- **Kimi-K3 gfx942 / MI325X 专项路线图**（#52803）：在 #50682 基础上，单独规划 gfx942/MI325X/MI300X 的适配方案，包括 TurboQuant、MoE 性能优化等。

  链接：https://github.com/vllm-project/vllm/issues/52803

- **Qwen GDN 在 sm120 上的 FlashInfer fused decode**（#53645）：集成 FlashInfer fused GDN decode，将每层 QKV 投影、SSM、注意力融合为单次 kernel launch，面向普通非投机 CUDA decode 场景。

  链接：https://github.com/vllm-project/vllm/pull/53645

- **MiniMax-M3 MTP / dense 层启用 AITER PA gluon decode**（#52849，ROCm）：支持 multi-token query length，EAGLE3 投机解码不再回退到原生 unified_attention。

  链接：https://github.com/vllm-project/vllm/pull/52849

- **FlexOlmo、Olmo3、Hunyuan V1/VL 迁移到 Transformers 建模后端**（#53615）：删除约 3k 行原生 modeling 代码，四个模型家族完全由 Transformers 后端支持。

  链接：https://github.com/vllm-project/vllm/pull/53615

- **[RFC] VLA（Vision-Language-Action）模型一等支持**（#42100）：机器人 / 自动驾驶场景的 VLA 模型目前未被 vLLM 原生支持，该 issue 请求将其纳入多模态模型的一等公民。

  链接：https://github.com/vllm-project/vllm/issues/42100

---

## 性能与优化

### 已落地 / 有明确修复 PR

- **Speculative decoding 下 CUDA graph 回退修复**（#53407）：此前投机解码中**一半的 decode batch size** 会静默回退到 eager 模式执行 attention，该 PR 改为 dispatch 到 padded FULL CUDA graph，可显著降低 decode 延迟。

  链接：https://github.com/vllm-project/vllm/pull/53407

- **MRV2 batch-sharded sample 降低 TP 显存占用**（#50465，已合并）：将采样时全量 logits 显存分配从 `O(batch_size × (num_spec_tokens + 1) × vocab_size)` 降低至原来的 `1/P`（P 为 TP 大小）。

  链接：https://github.com/vllm-project/vllm/pull/50465

- **混合模型（GDN）prefix-cache 命中率修复**（#52244）：修复 Qwen3.5-122B-A10B 在 MTP 投机解码下 prefix-cache 失效、长度恰为 hash unit 倍数时完全 miss 的问题。

  链接：https://github.com/vllm-project/vllm/pull/52244

- **自适应验证（adaptive verification）扩展到所有 draft-model 投机器**（#52228）：不再局限于带 confidence head 的 DSpark，MTP、EAGLE3、DFlash 1&2 均可使用。

  链接：https://github.com/vllm-project/vllm/pull/52228

- **DSpark logprobs + adaptive verification 解锁**（#52242）：解除两者互斥的限制，实现在设备端按请求分配 draft count 时的 logprobs 正确性。

  链接：https://github.com/vllm-project/vllm/pull/52242

- **统一 decode dispatch 到 padded FULL cudagraph**（#53407）：消除投机解码下一半 decode batch size 静默回退 eager 的问题，详见上文。

### 进行中的问题诊断

- **DSD（Dynamic Spec Decoding）基线性能税**（#49986）：`num_speculative_tokens_per_batch_size` 的每个 arm 都比 no-spec 多付基线开销，`PIECEWISE` cudagraph 降级被认定为因素之一。

  链接：https://github.com/vllm-project/vllm/issues/49986

- **动态投机解码在 batch-size 阈值处吞吐崩塌**（#49548）：Qwen3.5-122B MTP (k=2) 启用 dynamic spec decode 后，并发达到阈值时聚合吞吐急降，FULL_AND_PIECEWISE → PIECEWISE 降级单流约损失 14%。

  链接：https://github.com/vllm-project/vllm/issues/49548

- **Torch 2.11+ 导致约 18% pooling 吞吐回归**（#52630）：H100 PCIe 上从 vLLM v0.20.0 开始出现，建议暂缓升级 torch 版本。

  链接：https://github.com/vllm-project/vllm/issues/52630

- **Streaming input 按 chunk 到达的 O(cumulative prompt) 成本**（#52471）：多模态长会话场景每轮增量输入成本随累计 prompt 增长呈平方级上升。

  链接：https://github.com/vllm-project/vllm/issues/52471

---

## 稳定性与回归

### 崩溃 / 阻断级

- **多节点启动死锁：gloo barrier 永不完成**（#52907）：2 节点 × TP-16 部署 DeepSeek-R1 FP8 时，`in_the_same_node_as()` 的 gloo barrier 卡死 30 分钟后超时，回归区间在 0.26.1rc1.dev78 与 dev148 之间。

  链接：https://github.com/vllm-project/vllm/issues/52907

- **vllm-openai:latest 无法启动 Gemma4（Transformers 5.15.0）**（#51744）：镜像内 vLLM 0.27.0 + Transformers 5.15.0 组合启动即失败，影响 QAT-NVFP4 模型。

  链接：https://github.com/vllm-project/vllm/issues/51744

- **DeepSeek-V4-Flash 在 temperature=0 时非确定性输出**（#53257）：B300 上单卡 TP=1，非确定性程度随并发升高而加剧，已确认为未修改的 PyPI wheel。

  链接：https://github.com/vllm-project/vllm/issues/53257

- **DeepSeek V4 Pro TP=16 无法运行**（#40955，DSv4）：长时间未关闭，今日仍有更新。

  链接：https://github.com/vllm-project/vllm/issues/40955

- **draft_model hidden_size > target 时 TP>1 初始化崩溃**（#52023，已修复）：TRT-LLM fused allreduce+RMSNorm workspace 按 target hidden_size 分配导致越界，对应修复已进入 PR #47386 等。

  链接：https://github.com/vllm-project/vllm/issues/52023

- **多进程执行器并发响应死锁**（#53597）：新增 MessageQueue.wait_any 使用 zmq.Poller 快速失败，避免主进程阻塞在健康 worker 的 collectives 等待上。

  链接：https://github.com/vllm-project/vllm/pull/53597

### 正确性 / 功能回归

- **DeepSeek-V4-Flash KV cache 容量异常**（#51041）：每 token 消耗 56 bytes（约为 preview 版 8 倍），7.7 GiB 仅容纳 150K tokens，max_model_len 被截断至 ~121344。

  链接：https://github.com/vllm-project/vllm/issues/51041

- **混合模型（Mamba/attention）prefix caching 静默降至 0%**（#45238）：`mamba_cache_mode="align"` 模式下 Mamba state checkpoint 仅保留在 prompt 结束前的最后一个 block boundary，导致 prefix-cache 实际失效。

  链接：https://github.com/vllm-project/vllm/issues/45238

- **投机解码导致 Qwen 122B MXFP4 Tool Call 畸形**（#35800）：启用 speculative decoding 后 tool calls 格式损坏。

  链接：https://github.com/vllm-project/vllm/issues/35800

- **DFlash fused-KV 投影在量化 draft 模型上静默产生错误结果**（#51581）：`F.linear` 对 sliced qkv_proj 权重直接调用，绕过量化反量化路径，量化 drafter 可能拿到损坏权重。

  链接：https://github.com/vllm-project/vllm/issues/51581

- **Qwen3.5 `thinking_token_budget` 导致 reasoning_end_str 泄漏到 content**（#39697）：推理预算耗尽时结束标记错误地出现在 content 字段。

  链接：https://github.com/vllm-project/vllm/issues/39697

- **MiMoV2 融合 QKV 权重加载错位**（#42803）：`load_weights` 的 fused-qkv_proj 路径使用朴素的 `chunk(tp, dim=0)`，Q 值被错误放入 K/V 槽位。

  链接：https://github.com/vllm-project/vllm/issues/42803

- **Pipeline Parallelism 不切分 micro-batch**（#41682）：PP>1 时 scheduler 仍按单 batch 调度，无法利用 pipeline 并行能力。

  链接：https://github.com/vllm-project/vllm/issues/41682

- **DeepSeek YaRN max_model_len 双重缩放**（#53634，已修复）：checkpoint 同时声明 post-scaling context 与 `original_max_position_embeddings` 时触发长度错误放大。

  链接：https://github.com/vllm-project/vllm/pull/53634

### 基础设施 / 构建

- **MRV2 CUDA graph 内存预留导致 B200 崩溃**（#53644）：Daily B200 MoE 测试中 `CachingHostAllocator` use_count 错误，已回滚 #53306。

  链接：https://github.com/vllm-project/vllm/pull/53644

- **KV Connector 在 KV 加载拒绝后状态未恢复**（#53298）：`kv_load_failure_policy="recompute"` 下 MRV2 残留 in-flight frame 状态，影响后续 decode。

  链接：https://github.com/vllm-project/vllm/pull/53298

- **PyTorch nightly 回归可见性提升**（#51830）：将 vLLM torch-nightly CI 结果上报至 PyTorch CRCR，可在 hud.pytorch.org/crcr 查看。

  链接：https://github.com/vllm-project/vllm/pull/51830

---

## 对应用开发者的意义

1. **MRV2 全面默认化即将落地**（#53183）：如果你依赖 MRV1 行为或尚未迁移的自定义 kernel，建议尽快在测试环境验证。MRV2 在显存分配、CUDA graph 行为上已有多个修复（#53407、#50465），整体收益明显。

2. **投机解码相关 bug 集中修复中**：Tool Call 畸形（#35800）、量化 draft 模型损坏（#51581）、Gumbel 流耦合（#47386）等问题的修复已合入或接近合入，使用 spec decode 的生产环境应密切关注下个 patch 版本。

3. **ROCm 用户关注 Kimi-K3 两条 roadmap**（#50682、#52803）：gfx950 与 gfx942/MI325X 路线分开跟踪，AITER fused-moe 已带来性能基线的明确提升，但完整功能支持仍处早期。

4. **动态投机解码（num_speculative_tokens_per_batch_size）存在性能陷阱**（#49548、#49986）：在 batch-size 阈值附近可能遭遇聚合吞吐崩塌和固定基线开销，生产部署前建议先跑实际并发画像，避免盲目开启。

5. **INT8 KV Cache 量化仍未支持**（#33480，👍 12）：FP8-only 的 KV cache 量化格局暂无变化，H20 等不支持 FP8 的硬件用户需继续关注。

6. **对 Agent / 工具调用场景**：投机解码（#35800）与思考预算（#39697）两个问题都可能直接导致 agent 输出解析失败或内容污染，生产环境需确保分别已应用修复版本，或暂时禁用对应特性。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 动态日报 2026-08-25

## 1. 今日速览
- 过去 24 小时无新 Release，但社区 PR/Issue 非常活跃，核心集中在 Prefill CP 重构、PD 分离模式稳定性修复，以及新硬件（Rubin）适配。
- 出现一个影响面较大的性能回归：合入 PR #34653 后，unified-cache 成为默认行为，导致长前缀 decode 吞吐在 Spark/Thor 上明显下降（#36131）。
- 硬件与模型侧持续拓新：Nemotron 3.5 Lightning speculative decoding（#36186）、Rubin sm_107 CUDA 13.4 容器（#36233）、MiniMax H3 的 Ascend NPU 适配（#33569）等 PR 均在推进。

## 2. 版本发布与破坏性变更
- **无新版本发布。**
- **[已合入] Unified-cache 默认开启导致性能回归**：来自 PR #34653，长前缀 decode 吞吐在 Spark/Thor 上明显下降，见 [#36131](https://github.com/sgl-project/sglang/issues/36131)。
- **[进行中] Prefill CP API 破坏性变更**：CP 清理系列 PR 正在移除 v1 CP 运行时，并将 `is_cp_v2_active` 等命名统一为无版本号形式。使用 prefill CP 的用户请关注 [#36229](https://github.com/sgl-project/sglang/pull/36229) 与 [#36228](https://github.com/sgl-project/sglang/pull/36228)。

## 3. 新模型与硬件支持
- **[PR #36186] Nemotron 3.5 Lightning speculative decoding**：新增 ModelOpt W4A16 NVFP4 支持，以最小侵入方式实现投机解码，替代 #33554 方案。 [链接](https://github.com/sgl-project/sglang/pull/36186)
- **[PR #33569] MiniMax H3 支持 Ascend NPU**：将原生 pipeline 扩展到 NPU，覆盖 packed varlen attention、媒体依赖、文档与 CI。 [链接](https://github.com/sgl-project/sglang/pull/33569)
- **[PR #31768] LLaDA2.2 Block Routing MoE**：为 diffusion 模型增加 block-local top-k expert 路由能力。 [链接](https://github.com/sgl-project/sglang/pull/31768)
- **[PR #24959] Intel XPU 启用 GLM5.1 DSA Attention**：支持 `GlmMoeDsaForCausalLM` 在 XPU 上的 DSA 注意力。 [链接](https://github.com/sgl-project/sglang/pull/24959)
- **[PR #36233] Rubin 初始支持**：新增 CUDA 13.4 Developer Preview 容器，为 sm_107 提供功能性支持。 [链接](https://github.com/sgl-project/sglang/pull/36233)
- **[Issue #34559] Ascend A5 MXFP8/MXFP4 能力追踪**：跟踪 NPU 上量化格式的模型覆盖与 kernel 适配进度。 [链接](https://github.com/sgl-project/sglang/issues/34559)

## 4. 性能与优化
- **[Issue #33522] Weight Cache Daemon Phase 1 落地**：per-rank daemon 通过 CUDA IPC 持有量化后权重，Qwen3-235B FP8 权重加载从 ~306–327s 降至 <1s。 [链接](https://github.com/sgl-project/sglang/issues/33522)
- **[PR #36231] DeepGEMM JIT 预编译去重**：对 cache-local 的 precompile group 增加文件锁，避免多 rank 重复编译相同 kernel。 [链接](https://github.com/sgl-project/sglang/pull/36231)
- **[PR #36007] MegaMoE 修复 MXFP8 scale 行 stride**：`mega_moe_pre_dispatch` 现在尊重 DeepGEMM 物理行地址对齐，而非假设 packed rows。 [链接](https://github.com/sgl-project/sglang/pull/36007)
- **[PR #34317] AMD GLM5.2 使用 MXFP4 tuned kernels**：在 gfx950 上对 MLA absorbed BMM 保留 MXFP4 权重并使用匹配 kernel，减少 prefill 中最大的稠密注意力瓶颈。 [链接](https://github.com/sgl-project/sglang/pull/34317)
- **[Issue #29913] NVFP4 KV 路线图**：SM120/B200 初始 PR 与量化方法实现均已完成，当前处于集成验证阶段。 [链接](https://github.com/sgl-project/sglang/issues/29913)

## 5. 稳定性与回归
按严重程度排序：

- **[高] DFLASH + PD 分离崩溃**：decode 侧 `spec_info` 为 None 导致崩溃及 watchdog 自杀；DSPARK/EAGLE 正常，DFLASH 尚无 disagg 接线。暂无对应 fix PR。 [#36140](https://github.com/sgl-project/sglang/issues/36140)
- **[高] AMD AR graph + DSA 导致 NaN**：自定义 all-reduce 直接图输入在 DSA DP-attention 多图回放下不安全，GLM-5.2 TP8/DP4 输出全 NaN。暂无 fix PR。 [#36071](https://github.com/sgl-project/sglang/issues/36071)
- **[高] B300 (sm_103) 上 SM10x kernel 崩溃/挂起**：`is_sm100_supported()` 仅判断 major==10，导致 cutedsl TGV BF16 GEMM 报 Xid 13，trtllm-gen MoE 静默挂起。暂无 fix PR。 [#34340](https://github.com/sgl-project/sglang/issues/34340)
- **[中高] Unified-cache 默认开启导致长前缀 decode 吞吐下降**：已定位到 PR #34653，暂无 fix。 [#36131](https://github.com/sgl-project/sglang/issues/36131)
- **[中] 工具调用 `strict: null` 返回 400**：`/v1/responses` 与 `/v1/chat/completions` 均受影响，OpenAI 兼容性问题。暂无 fix PR。 [#36194](https://github.com/sgl-project/sglang/issues/36194)
- **[中] DeepSeekV4TokenToKVPool 缺失 `get_cpu_copy()`**：decode 模式 offload 时触发 NotImplementedError；PR #36003 只覆盖 MLA cache write skip，并非直接修复。 [#33385](https://github.com/sgl-project/sglang/issues/33385)
- **[中] WSL2 多模态启动崩溃**：CUDA IPC transport 被自动选择但 WSL2 不支持，需显式指定 `--mm-feature-transport`。暂无 fix PR。 [#35385](https://github.com/sgl-project/sglang/issues/35385)
- **[中] 流式响应内容截断**：content 与 tool_calls 同时存在时流式输出被截断（0.5.17）。暂无 fix PR。 [#34214](https://github.com/sgl-project/sglang/issues/34214)
- **[CI] 当前 3 broken / 11 flaky / 670 recently fixed**，由跟踪 issue 持续更新。 [#17050](https://github.com/sgl-project/sglang/issues/17050)

## 6. 对应用开发者的意义
- **OpenAI 工具调用兼容性**：客户端若发送 `"strict": null` 会直接收到 400；建议在网关层规范化该字段，或等待上游修复。 [#36194](https://github.com/sgl-project/sglang/issues/36194)
- **长前缀场景需回归验证**：unified-cache 默认开启后，Spark/Thor 类模型长前缀 decode 吞吐下降，高缓存命中服务应重新压测。 [#36131](https://github.com/sgl-project/sglang/issues/36131)
- **PD 分离部署慎用 DFLASH**：目前 decode 侧会崩溃；EAGLE/DSPARK 是更安全的选择。 [#36140](https://github.com/sgl-project/sglang/issues/36140)
- **Prefill CP 用户注意 API 迁移**：`is_cp_v2_active` 等命名即将被清理，v1 运行时也在移除中，建议提前检查自身配置。 [#36229](https://github.com/sgl-project/sglang/pull/36229)
- **WSL2 多模态用户需要显式配置**：通过 `--mm-feature-transport` 指定非 CUDA IPC 后端，避免启动即崩溃。 [#35385](https://github.com/sgl-project/sglang/issues/35385)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 动态日报 2026-08-25

## 今日速览

昨日发布密度极高（8 个版本），Metal 后端连续两次重大重构：flash-attn 按设备调优向量化（b10615）与 per-op 源码拆分并行编译（b10614），显著改善 Apple Silicon 编译与推理效率。功能层面，DeepSeek 4 新增 `-sm tensor` 张量并行支持（b10604），DFlash2 与 MXFP4/NVFP4 量化格式也有 PR 在途。稳定性方面，CUDA watchdog 崩溃（#27102）与 HIP gfx1151 输出损坏（#27579）是当前最严重问题，均无固定 PR。

## 版本发布与破坏性变更

- **b10615** — Metal flash-attn 向量化按设备调优 (Q, NE)，新增 53 组 f16 实例（vec 80→133），并加入调优表。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10615
- **b10614** — Metal per-op 源码拆分 + 并行编译，metallib 拆分为 8 个库并行加载，kernel→library 路由由 functionNames 自动推导。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10614
- **b10612** — 禁用 WebGPU 的 DOTS3NOTE 架构测试。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10612
- **b10610** — **行为变更**：CUDA/Metal 虚拟设备命名缩短（例如设备描述改为初始化时构建），依赖设备名称做路由/监控的脚本需调整。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10610
- **b10608** — 修复 mtmd 视频 MOOV atom 位于文件末尾时静默失败的问题，并处理 Windows 损坏管道（SIGPIPE）。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10608
- **b10606** — 修复 ggml_clamp 并同步更新 ggml-alloc。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10606
- **b10605** — Mamba2 展平 in/out projection，使推理从 GEMV 转为 GEMM 分派，对长序列 prefill 有明显收益。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10605
- **b10604** — **DeepSeek 4 新增 `-sm tensor`**（张量并行）支持：细化 head 切分粒度、共享专家延迟 allreduce、支持将 dflash 指定到特定设备。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10604

## 新模型与硬件支持

- **DFlash2 架构（PR #27342）** — 在 DFlash 基础上新增动态深度卷积 + candidate selector，支持本地卷积融合。  
  https://github.com/ggml-org/llama.cpp/pull/27342
- **HrmTextForCausalLM / DFM Mimir 1B（PR #27625）** — 新增双 transformer 堆栈交替执行架构支持，含 fused GQKV 投影转换器。  
  https://github.com/ggml-org/llama.cpp/pull/27625
- **DeepSeek 4 `-sm tensor`（b10604）** — 多设备张量并行新选项，面向多卡部署。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10604
- **MXFP4/NVFP4 量化完整实现（PR #26869）** — 支持 MXFP4、MXFP4_MOE、NVFP4、NVFP4_MOE 的量化与推理路径。  
  https://github.com/ggml-org/llama.cpp/pull/26869
- **Hexagon 多 NPU 支持（PR #26501）** — 全面异步化：异步图计算、事件、张量拷贝、跨设备 fence，支持 IQ9/IQ10。  
  https://github.com/ggml-org/llama.cpp/pull/26501

## 性能与优化

- **Meta flash-attn 按设备调优（b10615）** — 53 组新 (Q, NE) f16 实例，vec 实例从 80 增至 133，针对不同 Apple GPU 微调。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10615
- **Metal 并行编译（b10614）** — 8 个 metallib 并行加载，显著缩短 macOS/iOS 冷启动与多后端加载时间。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10614
- **Mamba2 GEMM 化（b10605）** — 展平投影消除 GEMV 瓶颈，长序列 prefill 吞吐预期大幅提升。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10605
- **HIP RDNA2 Q5_K/Q6_K tile 扩展（PR #27558）** — 允许 J=128，在 RDNA2 上有可测的性能提升。  
  https://github.com/ggml-org/llama.cpp/pull/27558
- **CUDA MoE 融合扩展至 specdec（PR #27621）** — MTP/Dflash 场景下 2–8 token 的 MoE 融合（gate 投影、NVFP4 scales、GLU、topk router 合并）。  
  https://github.com/ggml-org/llama.cpp/pull/27621
- **Vulkan density-gate 修复 decode 悬崖（PR #27332）** — 替换固定 8-token 截止，避免 MMoE 在 batch=9 时的吞吐回退：B=9 提升 36%、B=16 提升 27%、B=64 提升 21%。  
  https://github.com/ggml-org/llama.cpp/pull/27332
- **投机解码可观测性（PR #27676）** — server 的 per-request JSON 中新增 `draft_n_verif_steps`，便于计算平均接受长度。  
  https://github.com/ggml-org/llama.cpp/pull/27676
- **CUDA routed MoE MMQ tile 自适应（PR #24546）** — 按实际专家宽度而非最坏情况选择 N-tile，优化 RDNA3 prefill。  
  https://github.com/ggml-org/llama.cpp/pull/24546

## 稳定性与回归

按严重程度排序（★=严重度）：

- ★★★ **CUDA kernel stall 被 watchdog 杀死（#27102）** — RTX Pro 6000 Blackwell 上 Qwen3.8-27B 执行中 CUDA 内核停滞，无 fix PR。  
  https://github.com/ggml-org/llama.cpp/issues/27102
- ★★★ **HIP/ROCm gfx1151 输出损坏（#27579）** — Strix Halo APU 上 HIP 后端产生损坏结果，Vulkan 同参数正确，已定位与两套 dense 架构相关。  
  https://github.com/ggml-org/llama.cpp/issues/27579
- ★★★ **llama-server 硬崩溃 cublasSgemm INVALID_VALUE（#26558）** — draft-mtp 在 KV cache 饱和时触发 CUBLAS 错误，commit 6c8dcaa。  
  https://github.com/ggml-org/llama.cpp/issues/26558
- ★★ **SYCL --split-mode tensor DEVICE_LOST（#27198）** — 双 Arc Pro B70 上 dev2dev_memcpy 崩溃，即使 P2P 正常。  
  https://github.com/ggml-org/llama.cpp/issues/27198
- ★★ **SYCL GPU hang（#25692）** — Arc Pro B70 上 FA + Q8_0 KV cache 在持续负载下引发 xe engine reset。  
  https://github.com/ggml-org/llama.cpp/issues/25692
- ★★ **draft-mtp 接受率崩塌（#27572）** — `-np N` 多槽并发时 `t_h_nextn` 异步 device→host 拷贝竞争，接受率降至 0.0。  
  https://github.com/ggml-org/llama.cpp/issues/27572
- ★★ **MTP 草稿接受率 1/633（#27151）** — FreeBSD 上自投机解码几乎完全失效。  
  https://github.com/ggml-org/llama.cpp/issues/27151
- ★★ **投机解码输出分歧（#25618）** — 量化目标模型上 MTP/draft 路径与贪心解码结果不一致，bf16 下正常。  
  https://github.com/ggml-org/llama.cpp/issues/25618
- ★★ **SYCL xe2 编译后分段错误（#25808）** — GGML_SYCL_DEVICE_ARCH=xe2 时加载即崩溃。  
  https://github.com/ggml-org/llama.cpp/issues/25808
- ★ **Vulkan FA 性能骤降（#25207）** — AMD Strix Halo 上 FA 开启后解码性能大幅下降。  
  https://github.com/ggml-org/llama.cpp/issues/25207
- ★ **SYCL MoE Q8_0 重排缺失（#27517）** — 专家张量未走 `opt_for_reorder_id` 路径，影响推理性能。  
  https://github.com/ggml-org/llama.cpp/issues/27517
- ★ **SYCL 双 GPU 加载卡死（#27547）** — 2× Arc Pro B60 在模型加载阶段挂起。  
  https://github.com/ggml-org/llama.cpp/issues/27547
- ✅ **mtmd MOOV atom 问题已修复（#24394 → b10608）** — 视频输入静默失败已解决。  
  https://github.com/ggml-org/llama.cpp/issues/24394
- ✅ **Windows b10587 无法启动已关闭（#27576）** — 建议用户升级至 b10610+。  
  https://github.com/ggml-org/llama.cpp/issues/27576
- 🔧 **OpenCL FA 低端设备崩溃（PR #27673）** — 修复 Adreno 660 上 FA prefill split kernel workgroup 超限问题（WG=256→128）。  
  https://github.com/ggml-org/llama.cpp/pull/27673
- 🔧 **SYCL scratchpad 崩溃与 4GB 限制（PR #27671）** — 修复 zero-size 时 dnnl::memory 抛异常及 iGPU 分配上限问题。  
  https://github.com/ggml-org/llama.cpp/pull/27671
- 🔧 **Vulkan 为 AMD 投机解码禁用 MMVQ（PR #25666）** — 避免 spec decode 步骤的吞吐回退。  
  https://github.com/ggml-org/llama.cpp/pull/25666

## 对应用开发者的意义

- **DeepSeek 4 多卡部署门槛降低**：`-sm tensor` 提供了除 row split 之外的新并行模式，配合共享专家延迟 allreduce，2+ GPU 服务 DSV4 的配置将更灵活，但需验证与已有 `-sm row` 的行为差异。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10604
- **Metal 加载速度提升显著**：b10614 的并行 metallib 加载将直接缩短 macOS/iOS 端应用冷启动时间；b10615 的 FA 调优进一步提升 Apple GPU 上长上下文性能。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10614
- **投机解码监控能力增强**：`draft_n_verif_steps` 可精确分析草稿接受模式。但多后端（CUDA/SYCL/FreeBSD）的 MTP 接受率异常仍需关注——生产环境启用 draft-mtp 前建议先在目标硬件上跑 acceptance 测试。  
  https://github.com/ggml-org/llama.cpp/pull/27676
- **多后端稳定性风险较高**：CUDA（watchdog）、HIP（gfx1151）、SYCL（双卡/GPU hang）均有严重未修复问题，涉及这些组合的线上服务建议暂缓升级并固定提交。Vulkan 在 AMD 平台仍是更稳选择，且 density-gate 合入后将修复 batch≥9 的吞吐悬崖。  
  https://github.com/ggml-org/llama.cpp/issues/27102
  https://github.com/ggml-org/llama.cpp/issues/27579
- **量化格式生态扩展**：MXFP4/NVFP4 若合入，将影响模型分发格式与推理精度/性能权衡；MoE 权重 SSD 流式加载（PR #25294）则让超 RAM 模型在消费级硬件上运行成为可能。  
  https://github.com/ggml-org/llama.cpp/pull/26869
  https://github.com/ggml-org/llama.cpp/pull/25294

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 动态日报（2026-08-25）

## 今日速览

今日无新版本发布。Issue 侧 **qwen3.8 成为高危模型**：工具调用会话报错（[#17778](https://github.com/ollama/ollama/issues/17778)）、AMD MI210 输出乱码（[#17968](https://github.com/ollama/ollama/issues/17968)）、Claude Code 集成响应截断（[#17961](https://github.com/ollama/ollama/issues/17961)）集中出现，Agent 场景用户需重点关注。PR 侧持续推进基础设施优化：跨模型卸载/重载的 prefill cache（[#17278](https://github.com/ollama/ollama/pull/17278)）、cgroup CPU 配额推导默认线程数（[#17962](https://github.com/ollama/ollama/pull/17962)），MLX 后端新增结构化输出（[#17929](https://github.com/ollama/ollama/pull/17929)）与 Granite 架构支持（[#17972](https://github.com/ollama/ollama/pull/17972)）。

## 版本发布与破坏性变更

无。

## 新模型与硬件支持

- **MLX 新增 GraniteForCausalLM 架构**：支持 Granite 4.1 系列 dense 模型，可在 MLX 后端运行。[#17972](https://github.com/ollama/ollama/pull/17972)
- **MLX runner 补齐结构化输出**：通过 xgrammar 在每步采样时对 logits 做 grammar 掩码，强制 JSON / JSON Schema 约束。此前 API 传入 `format` 字段会被接受但不生效。[#17929](https://github.com/ollama/ollama/pull/17929)
- **MLX 依赖版本升级**：跟进 mlx 上游更新。[#17955](https://github.com/ollama/ollama/pull/17955)

## 性能与优化

**进行中**

- **跨模型卸载/重载的 prefill cache**：新增 opt-in `OLLAMA_PREFILL_CACHE`，调度器负责 KV cache 保存/恢复，带 fingerprint 校验与 8 GiB LRU 上限；llama-server 走 slot save/restore，MLX 持久化 prefix-cache frontier。对频繁换模型或多租户场景收益明显。[#17278](https://github.com/ollama/ollama/pull/17278)
- **cgroup CPU 配额感知的默认线程数**：当前 `NumThread` 未显式设置时不传 `-t`，llama-server 按宿主机核数检测，忽略 Docker `--cpus` 等限制；该 PR 改为从 cgroup CFS quota 推导默认线程数，容器场景性能更可预期。[#17962](https://github.com/ollama/ollama/pull/17962)

**开放的性能问题**

- **MLX 引擎缺少 prefix caching**：多步 agent 会话中每一步都对约 20-30K token 全量 prefill，TTFT 随步骤增长显著（Ollama 0.32.14 / qwen3.8:27b-mlx）。[#17829](https://github.com/ollama/ollama/issues/17829)
- **GPU 显存利用率偏低**：模型仅使用不到 40% 可用显存，系统内存参与过多导致输出速度明显下降。[#17971](https://github.com/ollama/ollama/issues/17971)
- **Strix Halo（gfx1151）多模型驻留功耗异常**：≥2 个 runner 常驻导致 GPU 无法 power-gate，待机功耗锁在约 25 W；单模型驻留时可正常空闲（报告于 0.24.0）。[#17958](https://github.com/ollama/ollama/issues/17958)

## 稳定性与回归

**高危（Open，暂无 fix PR）**

- **qwen3.8 系列问题**：
  - 工具调用场景报 `no user query found` 500：agent 多轮 tool-call 循环中触发，会话不可恢复。[#17778](https://github.com/ollama/ollama/issues/17778)
  - AMD Instinct MI210（ROCm）下输出乱码；同机 qwen3.6 / ornith 正常，疑似 qwen3.8 专属兼容性问题。[#17968](https://github.com/ollama/ollama/issues/17968)
  - 与 Claude Code 2.1.241 集成时响应在 20-30 token 后截断。[#17961](https://github.com/ollama/ollama/issues/17961)
  - OpenAI 兼容 `/v1` 端点无法禁用 thinking：`/no_think` 软开关与 `reasoning_effort` 均被忽略。[#17969](https://github.com/ollama/ollama/issues/17969)

**中危**

- **ornith-1.5:35b 同时指定 response_format 与 tools 时初始化失败**：报 `failed to parse grammar`，qwen3.6 同请求正常。**有 fix PR**：[#17965](https://github.com/ollama/ollama/pull/17965)（服务端自动检测 ornith / qwen35 的 renderer/parser）。[#17957](https://github.com/ollama/ollama/issues/17957)
- **工具调用解析失败时输出被静默丢弃**：返回空 content、无 tool_calls，但报告 40 个 completion token，客户端无法感知失败。（无 fix PR）[#17274](https://github.com/ollama/ollama/issues/17274)
- **hf.co GGUF 拉取成功后注册失败**：下载完成但返回 `Error: 400`（empty body），无 manifest 生成，模型不出现在 `ollama list`。（无 fix PR）[#15447](https://github.com/ollama/ollama/issues/15447)
- **Gemma4:26b 特殊 token 被原样 tokenize**：用户输入中的 `<|channel>` 等特殊 token 未按 chat template 处理。（无 fix PR）[#15931](https://github.com/ollama/ollama/issues/15931)

**修复进展**

- 防御性修复：拒绝把请求分发给已退出的 runner，并限制 `/api/embed` 并发度，避免大批量请求打开上千连接。[#17954](https://github.com/ollama/ollama/pull/17954)
- `ollama run` REPL 中 `OLLAMA_EDITOR` 为空白值时 panic 的修复已合并。[#17067](https://github.com/ollama/ollama/pull/17067)
- MLX runner KV-cache 内存随请求数累积、不重启不释放的问题已关闭。[#17875](https://github.com/ollama/ollama/issues/17875)
- HF 导入为 Muse-Glimmer-30B 推导错误 `stop` 参数、输出截断至 ~3 token 的问题已关闭。[#17939](https://github.com/ollama/ollama/issues/17939)
- Jinja chat template 支持请求（50 👍）已关闭，官方未采用 gonja 方案。[#10222](https://github.com/ollama/ollama/issues/10222)

## 对应用开发者的意义

- **qwen3.8 在生产中需谨慎**：工具调用会 500（[#17778](https://github.com/ollama/ollama/issues/17778)）、Claude Code 集成会截断（[#17961](https://github.com/ollama/ollama/issues/17961)）、OpenAI 兼容端点无法关闭 thinking（[#17969](https://github.com/ollama/ollama/issues/17969)）。建议锁定版本，应用层增加超时、重试与降级逻辑；依赖 `/v1/chat/completions` 的 Agent 暂时无法禁用 reasoning 输出。
- **工具调用响应需自行校验完整性**：解析失败时 Ollama 会静默丢弃输出（[#17274](https://github.com/ollama/ollama/issues/17274)），不要仅凭 `finish_reason` 或 token 数判断工具调用成功。
- **HF 导入后请验证 manifest**：已确认 400 空响应（[#15447](https://github.com/ollama/ollama/issues/15447)）与错误 `stop` 参数（[#17939](https://github.com/ollama/ollama/issues/17939)）两个问题，建议拉取后通过 `/api/show` 核对模型配置。
- **`/api/embed` 并发将受限**：大批量 embedding 任务需自行控制并发，避免触发排队或资源耗尽。[#17954](https://github.com/ollama/ollama/pull/17954)
- **MLX 方向利好**：结构化输出即将落地（[#17929](https://github.com/ollama/ollama/pull/17929)），JSON 模式可靠性提升；Granite 4.1 模型将在 MLX 上可用（[#17972](https://github.com/ollama/ollama/pull/17972)）。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

## 今日速览

- 稳定性修复是今日主线：`stream_chunk_builder` 在 Responses API / Anthropic Messages 流式场景下的三个崩溃 PR 均已合并，解决了对应的 500 错误。
- 路由层新增 `anthropic_messages` 中流 fallback 支持，多后端 Anthropic 部署的瞬时故障不再直接暴露给客户端。
- CI 开始禁止在 Prisma 迁移中写入行级改写 DML，降低代理启动时迁移导致的宕机风险，属基础设施质量重要改进。

## 版本发布与破坏性变更

过去 24 小时无新 Release。无 API / 配置破坏性变更需要关注。

## 新模型与硬件支持

- 社区提交了 VLLM OMNI 接入 miniMax-h3 视频模型的需求（#38050）及 Bedrock Mantle（`bedrock_mantle`）passthrough 不识别的问题（#38054），均处于排障阶段。无官方新增模型支持公告。

## 性能与优化

- **避免迁移导致的启动宕机**（[PR #37899](https://github.com/BerriAI/litellm/pull/37899)）：CI 新增代码质量门禁，拒绝在 Prisma 迁移文件中使用 `UPDATE` / `DELETE` / `MERGE` 等行改写 DML，防止未分批的大事务在代理启动时阻塞数据库、造成停机。
- **减少连接池被废弃流占满**（[PR #38082](https://github.com/BerriAI/litellm/pull/38082)）：Anthropic 同步 / 异步迭代器现在主动关闭被客户端放弃的流所持有的上游 HTTP 响应，防止频繁断连导致连接池耗尽。
- **降低 classifier 上下文浪费**（[PR #38145](https://github.com/BerriAI/litellm/pull/38145)）：complexity_router 的分类器上下文限制从“每个历史 turn 独立截断 200 字符”改为“整体上下文块设上限”，避免普通对话被预先切碎，减少误分类。
- **批量任务成本统计补全**（[PR #37208](https://github.com/BerriAI/litellm/pull/37208)）：Batch 完成的成本 / 用量现在聚合推理 token，并记录逐行 pass/fail 计数，让大批量任务的成本可观测性更准确。

## 稳定性与回归

以下按严重程度排列。

### 已修复（有合并 / 关闭 PR）

- **`stream_chunk_builder` 在流式转换中 500**：两个长期存在的崩溃源——原始 bytes chunk 导致 `TypeError`（[#32951](https://github.com/BerriAI/litellm/issues/32951)）以及 Responses API 的 chunk 缺少 `choices` 键导致 `KeyError`（[#32051](https://github.com/BerriAI/litellm/issues/32051)）——分别由 [PR #32954](https://github.com/BerriAI/litellm/pull/32954)、[PR #32198](https://github.com/BerriAI/litellm/pull/32198) 和 [PR #34382](https://github.com/BerriAI/litellm/pull/34382) 修复。使用 `/v1/chat/completions` 代理 Responses API 模型或 `/v1/messages` 流式转发的用户应升级到包含这些修复的版本。
- **Bedrock Converse 流式末尾多余空 chunk 回归**（[#36767](https://github.com/BerriAI/litellm/issues/36767)）：v1.94.0 引入的回归，已关闭。
- **Prisma 迁移在 `litellm-non_root` 镜像中无法运行**（[#34236](https://github.com/BerriAI/litellm/issues/34236)）：`@prisma/engines` 不可写导致升级 1.84.0 → 1.92.1 时数据库迁移失败，已关闭。
- **Pod 内存持续增长导致 OOM Kill**（[#25219](https://github.com/BerriAI/litellm/issues/25219)）：长时间运行的代理内存泄漏问题，已关闭。
- **Anthropic thinking blocks 往返转换丢失**（[#24985](https://github.com/BerriAI/litellm/issues/24985)、[#26916](https://github.com/BerriAI/litellm/issues/26916)、[#27946](https://github.com/BerriAI/litellm/issues/27946)）：多个 “thinking blocks 无法在 Anthropic ↔ OpenAI 之间正确回放” 的 issue 已关闭，相关转换路径已修复。

### 进行中（Open，暂无 fix PR 或 PR 审核中）

- **MCP 自动执行劫持客户端 tool_use**（[#37031](https://github.com/BerriAI/litellm/issues/37031)）：当配置 `require_approval: "never"` 的 MCP 工具与 Claude Code 等客户端自带工具同请求时，代理端自动执行会接管所有工具调用，导致非 MCP 工具报 “Error executing tool”。影响 agent 型客户端，暂无 fix PR。
- **虚拟密钥 BudgetExceededError 使用陈旧 spend**（[#27735](https://github.com/BerriAI/litellm/issues/27735)）：代理拒绝请求时提示超预算，但 `/key/info` 中 spend 仍低于 `max_budget`。团队级相关场景 #27639 已修复，但虚拟密钥维度仍存在。相关修复 [PR #37971](https://github.com/BerriAI/litellm/pull/37971) 解决了团队成员的卡死状态，但此 issue 仍未关闭。
- **GitHub Copilot Provider 产生过量 Premium 请求**（[#18155](https://github.com/BerriAI/litellm/issues/18155)）：多轮工具调用长会话中，Copilot 的 premium 请求用量远超预期，暂无 fix PR。
- **Anthropic → OpenAI 转换 dropping `content`**（[#27492](https://github.com/BerriAI/litellm/issues/27492)）：`use_chat_completions_api: true` 时，OpenAI 上游返回的 `reasoning_content` 导致 Anthropic 格式的 `content` 字段被丢弃，暂无 fix PR。
- **`bedrock rerank` 忽略 `return_documents`**（[#38006](https://github.com/BerriAI/litellm/issues/38006)）：即使 `return_documents=True`（默认值），结果也不携带 `document.text`，暂无 fix PR。
- **`bedrock_mantle` passthrough 报 `Provider bedrock_mantle not found`**（[#38054](https://github.com/BerriAI/litellm/issues/38054)）：调用 Bedrock 原生 `/invoke` 时 provider 识别失败。当天新建问题，暂无 fix PR。
- **新修复 PR 待合入**：[PR #38153](https://github.com/BerriAI/litellm/pull/38153) 为 `anthropic_messages` 增加中流 fallback，`overloaded_error` 等 SSE 错误现在可以触发 router 切换后端；[PR #38152](https://github.com/BerriAI/litellm/pull/38152) 修复 Prisma 初始启动失败后无法恢复连接的问题；[PR #38151](https://github.com/BerriAI/litellm/pull/38151) 修复 `reasoning_effort="max"` 在 Responses API 转换中被丢弃的问题。

## 对应用开发者的意义

- **流式调用更可靠**：如果你通过 LiteLLM 代理 Responses API 或使用 Anthropic `/v1/messages` 流式转发，`stream_chunk_builder` 的修复直接消除了最容易触发的 500 路径，升级后应特别验证这两个场景。
- **多后端 Anthropic 部署可自动容错**：[PR #38153](https://github.com/BerriAI/litellm/pull/38153) 落地后，Anthropic 模型的路由不再只是“首字节前 fallback”，流中间遇到 `overloaded_error` 也会切换后端，对依赖长连接的 agent 应用价值很大。
- **仍要小心 Anthropic thinking 兼容性**：虽然多个 thinking block round-trip 问题已关闭，但 [#27492](https://github.com/BerriAI/litellm/issues/27492)（`use_chat_completions_api: true` 时 `content` 被丢弃）仍 open。如果你的应用同时使用 `use_chat_completions_api` 和推理模型，建议通过集成测试显式验证多轮消息中 `content` 字段的完整性。
- **预算硬限制场景需关注陈旧 spend**：[#27735](https://github.com/BerriAI/litellm/issues/27735) 意味着密钥级预算可能基于过期计数做决策，导致用户被过早 429。在修复合入前，生产环境建议对预算类告警保留宽松余量；另外 [PR #37971](https://github.com/BerriAI/litellm/pull/37971) 能解除团队成员的“卡死”状态，值得跟进。
- **升级 Prisma 相关版本更安全**：[PR #37899](https://github.com/BerriAI/litellm/pull/37899) 的 CI 门禁和 [PR #38152](https://github.com/BerriAI/litellm/pull/38152) 的恢复机制，分别从“上游不产出危险迁移”和“自身能恢复”两个方向降低数据库启动失败的风险。基础设施团队关注这两个 PR 即可。
- **可观测性小幅增强**：[PR #38156](https://github.com/BerriAI/litellm/pull/38156) 在 Caching 页面增加了错误码下钻，排查缓存失败时可以快速定位是哪类错误码导致的，不再只有一个红色计数。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 动态日报 — 2026-08-25

## 今日速览

过去 24 小时无新版本发布，但仓库活跃度较高：Studio 后端 sqlite 死锁问题已关闭，DGX Spark 加载 Qwen3.5/Qwen3.8 失败被重新定性为 `transformers` 版本 pin 问题；PR 侧主要围绕量化 KV cache 保留（#8939）、AMD 平台训练/安装修复，以及 CI 稳定性加固。桌面端（Tauri/WebKitGTK）的崩溃与本地存储类 issue 仍持续涌入。

## 新模型与硬件支持

- [DGX Spark (GB10 Blackwell, aarch64) 仍需手动 transformers 补丁才能进行推理和 Studio 使用](https://github.com/unslothai/unsloth/issues/4867)。该 issue 已持续 4 个月，目前仍为 Open，无合并补丁迹象。
- [DGX Spark 镜像问题被再次提起](https://github.com/unslothai/unsloth/issues/9650)：镜像内 `transformers 4.57.1` 无法加载任何 Qwen3.5（Qwen3.8）模型，且 pin 版本落后约 7 个月；提交者明确排除了 vLLM 因素，指出问题在 `transformers` 版本锁定。
- AMD 平台有两项 PR 推进：允许 `UNSLOTH_TORCH_INDEX_URL` 携带 package extra（如 `torch[device-gfx1010]`），使 RDNA1 可使用 TheRock 索引（[#9138](https://github.com/unslothai/unsloth/pull/9138)）；训练 GPU 选择将按已安装 torch 构建的 arch 覆盖范围过滤，避免 iGPU 被错误选中（[#8791](https://github.com/unslothai/unsloth/pull/8791)）。

## 性能与优化

- [PR #8939（重要）](https://github.com/unslothai/unsloth/pull/8939)：修复 tensor parallelism 开启时量化 KV cache 被强制丢弃的问题。此前 `load_model` 仅允许 f16/bf16/f32 参与张量并行，其余量化类型会被静默降级为 f16 预算，造成显存浪费。该 PR 修复 #8888。

## 稳定性与回归

按严重程度排列：

- [Studio 后端死锁（已关闭）](https://github.com/unslothai/unsloth/issues/9008)：运行数分钟后，所有线程阻塞在 `sqlite3.connect()/close()`，进程存活但 socket 不再接受任何连接，`curl 127.0.0.1:8888` 直接超时。该 issue 已关闭，未标注对应修复 PR。
- [256k 上下文选择后实际只加载 4k（Open）](https://github.com/unslothai/unsloth/issues/9653)：macOS + MBP M3 环境下，选择 256k 上下文但实际加载 4k，无评论、无 PR，疑为新 bug。
- [CPT 训练中 embed_tokens/lm_head 被静默丢弃（已关闭）](https://github.com/unslothai/unsloth/issues/9326)：Continued Pretraining 时 `target_modules` 明确包含的 `embed_tokens/lm_head` 不会参与训练且无告警。已关闭，未见公开修复 PR。
- [Studio 桌面端 Model Hub 崩溃（Open）](https://github.com/unslothai/unsloth/issues/9480)：打开 Model Hub 时 WebKitWebProcess SIGABRT，定位为 Skia COLRv1 字体断言触发（Fedora 44 + Wayland），提交者注明与 #9393 不同。
- [聊天窗口 IndexedDB 写入失败（Open）](https://github.com/unslothai/unsloth/issues/9518)：AppImage 桌面版每次发送消息都会复现，后端 `/v1/chat/completions` 直连正常，问题在前端本地持久化层；另有 [IDB 数据库文件错误 #9600](https://github.com/unslothai/unsloth/issues/9600) 可能同源。
- [导出 GGUF 流程回归（已关闭）](https://github.com/unslothai/unsloth/issues/8717)：用户抱怨导出 GGUF 前必须下载完整 16bit 权重（约 40GB），不可直接转换，工作流被破坏。
- [JSONL 导出格式非法（Open）](https://github.com/unslothai/unsloth/issues/8733)：raw JSONL 导出并非合法 JSONL，Debian 13 下复现。
- [Windows 安装目录选择无效（Open）](https://github.com/unslothai/unsloth/issues/9648)：安装向导询问安装路径但实际仍安装到 C 盘；配套的[卸载不彻底问题](https://github.com/unslothai/unsloth/issues/9651)（需手动 `uv cache clean`）也在今日报告。
- CI/测试侧：多个 PR 旨在修复当前 main 分支的 CI 红态（[#9656](https://github.com/unslothai/unsloth/pull/9656)、[#9655](https://github.com/unslothai/unsloth/pull/9655)、[#9654](https://github.com/unslothai/unsloth/pull/9654)），主要涉及 Playwright 生命周期测试与 README 结构校验，不影响运行时。

## 对应用开发者的意义

- [LAN/WSL 场景无法访问 API（已关闭）](https://github.com/unslothai/unsloth/issues/9522)：LLM API 默认绑定 `127.0.0.1` 且无配置入口，跨机器或 WSL 内联调用不可用。该 issue 虽已关闭，但未看到对应修复或配置说明。
- [Ollama 外部模型的 Thinking 控制被隐藏（Open）](https://github.com/unslothai/unsloth/issues/9649)：连接 Ollama 时推理控制不展示，OpenAI 兼容代理也不转发 `reasoning_effort`，导致无法关闭/调节推理预算。
- [MCP 工具输出的图片无法内联渲染（Open）](https://github.com/unslothai/unsloth/issues/9584)：通过 comfy-mcp 等 MCP server 调用的图像生成结果不会以图片形式出现在对话窗口，影响多模态工作流透出。
- [RAG 文件列表/读写受限（Open）](https://github.com/unslothai/unsloth/issues/8854)：模型无法列出线程/项目中的文件，且只支持读+编辑、不支持新建文件；另有[管理员希望能链接宿主目录进 RAG](https://github.com/unslothai/unsloth/issues/9644) 的请求。
- [TTS 不支持外部端点（已关闭）](https://github.com/unslothai/unsloth/issues/9136)：Read Aloud 强制加载本地 TTS 模型，无法对接自定义端点，VRAM 占用对本地用户不友好。
- [模型导入路径受限（Open）](https://github.com/unslothai/unsloth/issues/9605)：用户无法直接从任意目录导入已有 SD 模型文件，需通过 Unsloth 内部目录管理，大模型多副本问题引发不满。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*