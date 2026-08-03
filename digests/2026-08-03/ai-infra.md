# AI 基础设施日报 2026-08-03

> 生成时间: 2026-08-03 01:46 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施生态横向对比分析 — 2026-08-03

## 1. 生态全景

今日生态的核心竞争围绕 **DeepSeek-V4** 展开：llama.cpp 已合入 MTP+DSpark 支持，SGLang 正在修复 SM80（Ampere）兼容性，而 vLLM 在 A100/A800 上仍无法初始化。与此同时，**投机解码与 KV cache 的正确性问题**在 vLLM、SGLang、llama.cpp 中集中爆发，说明生态正从“抢跑性能”转向“补稳定性”。Agent/工具调用成为基础设施的隐性主线：Qwen3 专用解析、DeepSeek 工具调用丢失修复、Anthropic cache_salt 500、流式输出污染修复等均指向 Agent 生产环境的可靠性需求。硬件多元化仍是重要方向，但 AMD/Intel/Blackwell 上的回归与崩溃增多，稳定性滞后于支持范围扩张。

---

## 2. 各项目活跃度对比

> 注：Issues/PR 数量为日报中明确提及的编号数量，非 GitHub 全量状态。

| 项目 | Issues 提及数 | PRs 提及数 | Release 情况 |
|---|---:|---:|---|
| vLLM | 28 | 19 | 无正式版本发布 |
| SGLang | 12 | 15 | 无新版本 |
| llama.cpp | 12 | 16 | 11 个滚动版本（b10225–b10235） |
| Ollama | 24 | 8 | 无新 Release |
| LiteLLM | 11 | 7 | 无新 Release |
| Unsloth | 7 | 14 | 无新版本发布 |

llama.cpp 是今日唯二有密集版本发布的项目，且均为滚动发布，主要围绕 DeepSeek V4 与 Qwen3 解析器；vLLM 的 issue/PR 讨论量最大，但多数是缺陷与回归跟踪。

---

## 3. 模型支持竞速

| 模型/架构 | 领先项目 | 关键证据 |
|---|---|---|
| **DeepSeek V4 Flash / DSV4** | **llama.cpp** | b10228 合入 MTP+DSpark，b10231 支持 DSpark sidecar，b10232 实现 Metal 超连接算子；SGLang PR #33271 刚修复 SM80，vLLM 在 Ampere 上仍不可用 |
| **Kimi K3** | **SGLang** | PR #32541 提供 Day-0 镜像（CUDA 12/13/ROCm）；vLLM 仅处于 ROCm 路线图 issue；Ollama 仅收到用户询问 |
| **Qwen3.5/3.6 系列** | 分散 | vLLM 修复原生 checkpoint；llama.cpp 新增 Qwen3 聊天解析器；SGLang 支持 Ascend 加载；Unsloth 存在 35B 思考模式误判 |
| **GLM-5.x** | 均未稳定 | vLLM 有 FP8+MTP 断言；llama.cpp 报告 ROCm 回归；Ollama 的 GLM-5.2 IQ2 导入被拒 |
| **独立新架构** | llama.cpp | TML Inkling、MiMo V2、Qwen3-TTS、E8 2-bit KV cache 均由 llama.cpp 推进 |
| **Embedding / 量化加载** | vLLM | jina-embeddings-v5-text-nano、Quark W4A16 INT4 原生路径 |

**结论**：llama.cpp 在本地/边缘模型覆盖上跑得最快；SGLang 在 Day-0 新模型和 AMD/ROCm 生态上投入最大；vLLM 偏向既有模型的服务化扩展，今日动态以修复积压为主；Ollama 与新模型支持基本依赖上游，速度最慢。

---

## 4. 性能优化前沿

| 方向 | 典型动作 |
|---|---|
| **KV cache** | vLLM 统一 block table 为 128 token、修复 CUDA graph 负显存估算；SGLang 修复 HiCache 缺少 kv_cache_dtype 维度；llama.cpp 引入 E8 2-bit KV cache 量化；vLLM/SGLang 均在推进 sparse KV 与 offload |
| **投机解码** | llama.cpp 合入 DeepSeek MTP+DSpark，新增 Suffix Decode；SGLang 为 DSPARK 增加采样分支；vLLM 仍受 MTP+prefix caching 精度下降 20% 困扰 |
| **批处理与调度** | vLLM MRV2 补齐 LoRA 与 routed-experts；SGLang 单图像 DP 从 pad all-gather 改为 broadcast；Unsloth 以 per-chat 队列提升并发 |
| **量化** | vLLM 新增 Quark W4A16 INT4/UINT4；llama.cpp 推进 E8 KV 量化；SGLang 出现量化权重静默丢失；Ollama 拒绝极端量化 GGUF。量化逐层铺开，但正确性仍是问题 |
| **算子/内核** | llama.cpp Metal 实现超连接、F16 bin ops、OpenCL GLU 修复；vLLM CuTeDSL fused query；SGLang 修复 nvcc 13 编译器崩溃 |
| **分布式** | vLLM 提出 nccl-m2n 权重传输 RFC，重新启用 AMD CI 约束；SGLang 修复多节点 TP 死锁；llama.cpp RPC 后端仍崩溃 |

---

## 5. 分层定位差异

| 项目 | 层次 | 定位 |
|---|---|---|
| **vLLM** | 推理引擎 / 服务框架 | 高性能在线服务，PagedAttention、continuous batching、多种并行策略，生产级 LLM 推理 |
| **SGLang** | 推理引擎 / 服务框架 | 偏 Agent/结构化生成，RadixAttention、多模态、Day-0 新模型支持，Rust server 演进中 |
| **llama.cpp** | 本地推理运行时 | 跨平台（Metal/OpenCL/SYCL）轻量推理，GGUF，适合边缘/桌面/嵌入式 |
| **Ollama** | 本地运行时 + 模型管理 | 面向开发者的一键部署，内置模型仓库与 OpenAI 兼容 API，底层依赖 llama.cpp |
| **LiteLLM** | LLM 网关 / 代理层 | 统一接入多家 Provider，负责路由、预算、成本核算、流式协议转换、MCP 集成 |
| **Unsloth** | 微调/训练框架 + 桌面端 | 以 LoRA/QLoRA 高效微调为核心，同时提供 Unsloth Studio 桌面推理与 GGUF 导出 |

vLLM/SGLang 竞争“服务端推理引擎”位，llama.cpp/Ollama 占“本地运行”位，LiteLLM 是网关层，Unsloth 聚焦训练/微调后向推理延伸。

---

## 6. 值得关注的趋势信号

1. **DeepSeek-V4 成为引擎分水岭**  
   llama.cpp 已实际支持，SGLang 解决 SM80，vLLM 在 Ampere 不可用（#40851/#50576）。若你的集群是 A100/A800，短期不建议将 DeepSeek-V4-Flash 纳入规划；如必须使用，优先 llama.cpp 或 SGLang 分支。

2. **投机解码普及，但正确性仍未达标**  
   vLLM 的 MTP+prefix caching 精度下降 20%（#43559）、SGLang 的量化 DSV4 输出乱码（#33245）都说明“加速但不可信”是当前风险。Agent 场景多轮推理会放大错误，建议此类组合先跑准确率回归再上线。

3. **KV cache 正进入“量化 + 稀疏 + 卸载”时代，但配套故障多**  
   llama.cpp 的 E8 2-bit KV cache、vLLM 的 FlashMLA sparse DCP、SGLang 的 HiSparse+FP8 都在降低长上下文成本。但同时 CUDA graph 负显存（#44740）、HiCache 跨 dtype 碰撞（#33268）等问题说明系统工程尚未跟上。

4. **Agent/工具调用可靠性已成为核心诉求**  
   今日大量修复集中在 Qwen3 chat 解析器、DeepSeek 工具调用结束符丢失、Anthropic cache_salt 500、MCP 工具 schema 非法、流式输出污染等——这些直接决定 Agent 应用能否稳定跑生产。

5. **硬件多元化扩张伴随稳定性阵痛**  
   AMD ROCm 有 GLM-5.2 慢 6 倍回归、Intel Arc 多卡 hang、Blackwell 消费卡 Fa/位崩溃、Ascend 才刚支持 Qwen3.5。若你在非 NVIDIA 主力平台部署，建议采用保守版本策略，并跟踪上游回归矩阵。

---

**给基础设施工程师/技术决策者的今日建议**：  
- 生产环境优先固定版本：Ollama 0.32.1 可避开工具调用回归；vLLM 暂缓 MTP+prefix caching；llama.cpp 上 GLM-5.x 用户暂勿升级。  
- 本地跑 DeepSeek-V4 选 llama.cpp，服务端等待 SGLang PR #33271 合入或 vLLM 上游修复。  
- LiteLLM 用户注意 `nproc` 在 K8s 下的坑，显式设置 `--num_workers`。  
- 所有 Agent/网关系统应增加云服务故障容错（Ollama Cloud 503/403），并复查工具调用 schema 与流式结束符处理。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 动态日报 — 2026-08-03

## 今日速览

社区焦点集中在三个方向：DeepSeek-V4-Flash 在 SM8x（A100/A800）上的不可用问题持续发酵（[#40851](https://github.com/vllm-project/vllm/issues/40851)、[#50576](https://github.com/vllm-project/vllm/issues/50576)）；MTP 投机解码的正确性与显存估算问题集中爆发（[#43559](https://github.com/vllm-project/vllm/issues/43559) 精度下降 20%、[#44740](https://github.com/vllm-project/vllm/issues/44740) 负 CUDA graph 内存估算）；MRV2 执行路径加速补齐 LoRA 与 routed-experts 支持（[#41732](https://github.com/vllm-project/vllm/pull/41732)、[#50721](https://github.com/vllm-project/vllm/pull/50721)）。

## 版本发布与破坏性变更

- 过去 24 小时无正式版本发布。
- PR [#50302](https://github.com/vllm-project/vllm/pull/50302)（已合并）将 block table 宽度统一为 128 token，并统一了 MRV1/MRV2 与 DSA indexer 的 block-table width 计算，修复 #46074。依赖内部 block table layout 的集成方需留意该对齐变更。
- CI 变更：PR [#50490](https://github.com/vllm-project/vllm/pull/50490) 已合入，重新启用此前被 Kimi-K3 绕过的 CUDA/ROCm custom-all-reduce 与 KDA 测试，后续 PR 将重新受 AMD CI 约束。

## 新模型与硬件支持

- **DeepSeek-V4-Flash SM8x 支持**：[#40851](https://github.com/vllm-project/vllm/issues/40851)（30 评论）与 [#50576](https://github.com/vllm-project/vllm/issues/50576)（15 评论）持续推进。当前 DeepSeek-V4-Flash 与 -0731 DSpark 检查点在 A100/A800 上因 DeepGEMM 断言失败无法初始化，暂无修复 PR。
- **jina-embeddings-v5-text-nano**（EuroBERT encoder 骨干）：PR [#50688](https://github.com/vllm-project/vllm/pull/50688) 已合入，该系列下 `v5-text-nano` 与 `v5-text-small` 使用不同骨干的兼容问题已解决。
- **原生 Qwen3.5 text-only checkpoint**：PR [#50355](https://github.com/vllm-project/vllm/pull/50355) 修复 `model.language_model.*` 权重前缀映射问题。
- **原生 Quark W4A16 INT4/UINT4**：PR [#48606](https://github.com/vllm-project/vllm/pull/48606) 新增 `QuarkW4A16Int4` 与 `QuarkW4A16Int4MoEMethod` 加载路径，覆盖 `export.pack_method = order/reorder` 的 checkpoint。
- **XPU**：PR [#50787](https://github.com/vllm-project/vllm/pull/50787) 将 block-quantized FP8 权重无条件路由到 W8A8 kernel；PR [#49664](https://github.com/vllm-project/vllm/pull/49664) 为 XPU 新增 `--linear-backend torch` 选项。
- **ROCm**：PR [#50607](https://github.com/vllm-project/vllm/pull/50607) 将 torch 升级至 2.12、triton 3.7。
- **Kimi-K3 ROCm 路线图**：[#50682](https://github.com/vllm-project/vllm/issues/50682) 作为跟踪 issue，Day 0 已包含 AITER fused-moe a16w4/a8w4，后续将持续补齐 Sparse MLA、MXFP4 等能力。

## 性能与优化

- **[SM100] CuTeDSL fused query kernel**：PR [#49792](https://github.com/vllm-project/vllm/pull/49792) 为 DSA sparse attention 新增 fused_q 实现，覆盖 fp8 MQA query、RoPE + UE8M0 量化、indexer query，以 torch custom op 注册。
- **[MRV2] LoRA + CUDA graph**：PR [#41732](https://github.com/vllm-project/vllm/pull/41732) 修复 MRV2 下 CUDA graph 捕获时 dummy LoRA 权重未激活导致 SGM 失败的问题；PR [#50721](https://github.com/vllm-project/vllm/pull/50721) 启用 routed-experts R3 返回路径，同时保留 MRV1 行为。
- **[XPU] Mamba SSU 调优**：PR [#50534](https://github.com/vllm-project/vllm/pull/50534) 为 Intel Arc Pro B70 新增 tuned `selective_state_update` 配置，并修复 kernel benchmark 在 XPU-only 构建下的运行问题。
- **[MLA] FlashMLA sparse DCP**：PR [#46514](https://github.com/vllm-project/vllm/pull/46514) 在 `fp8_ds_mla` 混合批次路径上支持 DCP，并新增 `--dcp-sparse-indexer-mode {exact,union}` 选项。
- **[RL] nccl-m2n 权重传输 RFC**：[#46439](https://github.com/vllm-project/vllm/issues/46439) 提出面向 vLLM Native RL 的分片感知权重同步 API，当前处于 RFC 阶段。

## 稳定性与回归

### 投机解码 / MTP 相关

- [#43559](https://github.com/vllm-project/vllm/issues/43559)（无 fix）：Qwen3.6 35B-A3B 同时开启 `--enable-prefix-caching` 与 MTP 时精度下降约 20%，38 条评论，影响面较大。
- [#44740](https://github.com/vllm-project/vllm/issues/44740)（无 fix）：MTP 场景下 CUDA graph 内存估算为 -35.69 GiB，导致 KV cache 过度分配并 OOM（GB10 128GB 统一内存）。
- [#41094](https://github.com/vllm-project/vllm/issues/41094)（无 fix）：GLM-5.1-FP8 + MTP 触发 DeepGEMM paged MQA `context_lens.is_contiguous()` 断言。
- [#40914](https://github.com/vllm-project/vllm/pull/40914)（fix PR，开放中）：TurboQuant K+1 spec-verify 路由修复，针对 #40880 的 degenerate token cascade 问题。

### 量化与显存

- [#46268](https://github.com/vllm-project/vllm/issues/46268)（无 fix）：ModelOpt NVFP4 checkpoint 加载时固定分配约 52 GiB CPU RAM，0.8B 模型在 64 GB 主机上直接 OOM。
- [#41726](https://github.com/vllm-project/vllm/issues/41726)（无 fix）：TurboQuant KV cache 在 chunked continuation prefill 后崩溃（RTX 5080，由 PR #39931 引入）。
- [#50709](https://github.com/vllm-project/vllm/issues/50709)（无 fix）：TurboQuant 混合模型在 v0.25.0+ 启动失败，报 `Unknown cache dtype: auto`。
- [#49031](https://github.com/vllm-project/vllm/issues/49031)（无 fix）：FlashInfer B12x W4A16 runtime repacking 同时保留原始与打包权重复本，导致启动 OOM。
- [#47436](https://github.com/vllm-project/vllm/issues/47436)（无 fix）：compressed-tensors block-scaled FP8（W8A8）在 SM120（RTX PRO 6000）上加载崩溃，DeepGEMM 报 Unknown SF transformation。
- [#41153](https://github.com/vllm-project/vllm/issues/41153)（无 fix）：Qwen3.5/Qwen3.6 hybrid GPTQ Marlin 模型的 KV cache page size 统一失败。

### 硬件兼容

- [#50347](https://github.com/vllm-project/vllm/issues/50347)（无 fix）：Kimi-K3 TP8 在 ROCm MI355X（gfx950）上崩溃，HIP Code 700。
- [#50720](https://github.com/vllm-project/vllm/issues/50720)（无 fix）：DeepSeek-V4-Flash-0731 + DSpark 在 SM120 上 FlashInfer sparse MLA decode kernel 路由失败。
- [#50545](https://github.com/vllm-project/vllm/issues/50545)（无 fix）：Intel Arc Pro B60 多卡 TP 在 torch 2.13 + oneCCL 2022.x 下 hang，warmup allreduce 不返回。

### 其他

- [#47458](https://github.com/vllm-project/vllm/issues/47458)（无 fix）：NVFP4 大→小请求形状切换触发约 17.5 秒 engine-wide stall，冻结所有在途请求。
- [#50687](https://github.com/vllm-project/vllm/issues/50687)（无 fix）：Hybrid multi-group KV 在 connector 上报 load-error blocks 时 `_update_requests_with_invalid_blocks` 崩溃。
- [#48031](https://github.com/vllm-project/vllm/issues/48031)（fix PR [#48871](https://github.com/vllm-project/vllm/pull/48871) 开放中）：默认 `VLLM_ENGINE_READY_TIMEOUT_S=600` 对 DGX Spark 大 MoE 冷启动 + FlashInfer JIT 编译不足。
- [#37191](https://github.com/vllm-project/vllm/issues/37191)（无 fix）：Triton 3.6 导致 MoE kernel config benchmark tuning 失败（aarch64）。

### 已就绪的修复

- [#50764](https://github.com/vllm-project/vllm/pull/50764)：限制 Anthropic `cache_salt` 非空，修复 `/v1/messages` 间歇性 500。
- [#50358](https://github.com/vllm-project/vllm/pull/50358)：CPU KV offload 超出 `/dev/shm` 时快速失败并给出清晰错误（修复 #46949）。
- [#50671](https://github.com/vllm-project/vllm/pull/50671)：修复 GPU Confidential Computing 下 UVA 路径的静默输入损坏与远程 DoS 风险。
- [#50594](https://github.com/vllm-project/vllm/pull/50594)：修复 MiniMax M3 adaptive reasoning 将 `</mm:think>` 泄漏到流式 `delta.content` 的问题（修复 #46042、#50549）。
- [#48871](https://github.com/vllm-project/vllm/pull/48871)：改进引擎启动失败时的诊断信息（相关 #48031）。

## 对应用开发者的意义

1. **DeepSeek-V4-Flash 目前在 Ampere 上不可用**：[#40851](https://github.com/vllm-project/vllm/issues/40851)、[#50576](https://github.com/vllm-project/vllm/issues/50576) 显示 A100/A800 用户均无法加载该系列模型，基础设施团队需规划 H100/H20 或等待上游支持；ROCm 侧进展可跟踪 [#50682](https://github.com/vllm-project/vllm/issues/50682)。
2. **MTP + prefix caching 组合存在精度风险**：[#43559](https://github.com/vllm-project/vllm/issues/43559) 显示 Qwen3.6 35B-A3B 上精度下降约 20%。对于 Agent 场景，推理错误会在多轮循环中累积，建议暂缓该组合并单独评测。
3. **TurboQuant 在混合注意力/Hybrid 模型上仍未稳定**：[#40914](https://github.com/vllm-project/vllm/pull/40914) 合入前，spec-decode + TurboQuant 组合建议跳过；Qwen3.5/3.6 hybrid 模型请关注 [#41726](https://github.com/vllm-project/vllm/issues/41726)、[#50709](https://github.com/vllm-project/vllm/issues/50709)。
4. **MRV2 正加速功能对齐**：LoRA（[#41732](https://github.com/vllm-project/vllm/pull/41732)）和 routed-experts（[#50721](https://github.com/vllm-project/vllm/pull/50721)）是主要剩余缺口，依赖 LoRA 微调服务的团队应跟踪其合入状态。
5. **Rust frontend 仍是实验性功能**：[#44280](https://github.com/vllm-project/vllm/issues/44280) 正在跟踪功能对齐，基于 Python 扩展（自定义中间件、钩子）的网关/Agent 基础设施暂不建议切换。
6. **值得关注的长期功能**：KV cache offloading（[#48203](https://github.com/vllm-project/vllm/issues/48203)）对超长序列 Agent 记忆场景影响显著；Realtime API 词级时间戳（[#39735](https://github.com/vllm-project/vllm/issues/39735)）仍在 feature request 阶段。
7. **前端兼容层修复已就绪**：Anthropic `/v1/messages` 的 cache_salt 500（[#50764](https://github.com/vllm-project/vllm/pull/50764)）与 MiniMax M3 流式输出污染（[#50594](https://github.com/vllm-project/vllm/pull/50594)）建议在下次升级中纳入，对在线 Agent 服务的流式稳定性有直接影响。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 动态日报 — 2026-08-03

## 1. 今日速览
- 围绕 DeepSeek-V4 的生态验证继续成为焦点：SM80（Ampere）支持 PR 一次性修复编译、调度、算子与 indexer 显存超分配四个阻塞点（[#33271](https://github.com/sgl-project/sglang/pull/33271)），但量化路径权重丢失（[#33245](https://github.com/sgl-project/sglang/issues/33245)）、多节点 TP 死锁（[#33289](https://github.com/sgl-project/sglang/issues/33289)）等缺口仍待补。
- Kimi K3 Day-0 支持 PR（[#32541](https://github.com/sgl-project/sglang/pull/32541)）持续迭代，AMD DSpark 适配（[#30964](https://github.com/sgl-project/sglang/pull/30964)）与 MoE wide-EP 调度（[#32048](https://github.com/sgl-project/sglang/pull/32048)）同步推进中。
- 硬件后端正快速扩围：AMD gfx1250 与 Intel XPU 均有对应 PR 在途，SM120 的 FP8 KV 与 HiSparse 兼容问题已有修复方案。

## 2. 版本发布与破坏性变更
今日无新版本发布。值得留意的配置变更：

- **[PR #33308] 移除已弃用的 `--keep-mm-feature-on-device` 处理器侧状态**：该参数已处于废弃状态，`_handle_multimodal_feature_transport` 强制将其置为 `False`，本次改动直接删除了处理器侧的残余读取，改由 `use_cuda_ipc` 统一管理设备驻留。影响面：多模态模型中仍引用该属性的 `ernie45_vl` / `midashenglm` 等路径被修复。如果通过该参数控制多模态特征驻留行为，需改为直接依赖 IPC 传输的默认行为。</br>🔗 https://github.com/sgl-project/sglang/pull/33308

## 3. 新模型与硬件支持
- **[PR #32541] Kimi K3 Day-0 支持**：最大动静来自 Kimi K3 模型支持，当前提供 CUDA 12、CUDA 13 及 ROCm 三种 Day-0 镜像（`lmsysorg/sglang:kimi-k3`、`:kimi-k3-cu12`、`rocm720-mi35x-k3-20260727`）。配套的异步 MoE/流水线并行细节持续更新中。</br>🔗 https://github.com/sgl-project/sglang/pull/32541
- **[PR #32754] AMD gfx1250（RDNA4 / RX 9070 XT）支持**：属于高优先级 PR，由于 gfx1250 缺少 MFMA/WMMA FP4 等指令，需要为 AMD 新架构单独实现 kernel 路径。</br>🔗 https://github.com/sgl-project/sglang/pull/32754
- **[PR #33271] DeepSeek-V4 落地 SM80（8× A800）**：将编译期 Triton `fp8e4nv` 指针问题、kernel 调度分支、以及 indexer 的显存超分配一并修复。对存量 Ampere 集群是实质利好。</br>🔗 https://github.com/sgl-project/sglang/pull/33271
- **[PR #33075] 修复 SM120/SM121 平台 FP8 KV Cache + HiSparse 启动失败**：`--enable-hisparse` 现可在 RTX PRO 6000 / RTX 5090 上配合 FP8 KV 正常启动，为 Blackwell 消费卡开启稀疏 MLA 能力。</br>🔗 https://github.com/sgl-project/sglang/pull/33075
- **[PR #32745] Ascend 950 NPU 支持 Qwen3.5**：补齐 `GemmaRMSNorm` 的 NPU kernel，Qwen3.5 可在昇腾 950 上加载服务。</br>🔗 https://github.com/sgl-project/sglang/pull/32745
- **[PR #30964] DeepSeek-V4 DSpark + AMD HIP 支持**：与日前的 DSpark/Aware 生态工作并行推进。</br>🔗 https://github.com/sgl-project/sglang/pull/30964

## 4. 性能与优化
- **[PR #33307] 单图像 DP 视觉 embedding 用 broadcast 替代 pad-to-max all-gather**：此前对称 all-gather 需搬运 `tp_size × max_len` 行，其中 `(tp_size-1)/tp_size` 为 padding；改为仅由 owner rank 做 broadcast，通讯量从 `tp_size` 份降为 1 份。在 8 GPU 上验证输出与旧路径 bitwise 一致。对有视觉输入的 DP 场景有直接收益。</br>🔗 https://github.com/sgl-project/sglang/pull/33307
- **[PR #33306] 移除 TRTLLM prefill 输出拷贝**：TRTLLM MHA context attention 现在直接写入预分配的 graph 输出 buffer，省掉一次完整的张量拷贝。</br>🔗 https://github.com/sgl-project/sglang/pull/33306
- **[PR #33298] DSPARK 图折叠 draft 支持采样**：将 DSPARK 的 draft proposal 从仅 greedy 扩展到 greedy + sampling 混合 batch：fused kernel 内对 greedy 行做 argmax、对采样行做 Gumbel 采样（in-graph philox 噪声），并导出修正后的 block logits 给 eager accept 路径。</br>🔗 https://github.com/sgl-project/sglang/pull/33298
- **[PR #33297] DSV4 paged indexer 在 portable 路径上做算子融合**：避免 deep_gemm indexer kernel 不可用时的性能坍塌。</br>🔗 https://github.com/sgl-project/sglang/pull/33297

## 5. 稳定性与回归

高优先级（崩溃/数据正确性）：

- **[Issue #33289] 多节点 TP rank 分歧导致死锁（DeepSeek-V4 + DSpark, 2×DGX Spark）**：两个 rank 状态分裂——一个卡在 NCCL proxy append（logits all-gather），另一个空转等待 request broadcast。间歇性出现在正常流量下，目前无 fix PR。</br>🔗 https://github.com/sgl-project/sglang/issues/33289
- **[Issue #33246] DSV4 indexer torch fallback 分配 num_heads 倍超中间张量，~128K 上下文即 OOM**：已有栈续 PR [#33271](https://github.com/sgl-project/sglang/pull/33271) 直接修复该中间张量尺寸问题。</br>🔗 https://github.com/sgl-project/sglang/issues/33246
- **[Issue #32855] Kimi-K3 DSPARK 在 B300 上 ~218K token 处 Xid 13（CTA Not Present）崩溃**：属于硬件级故障上报，暂无对应 fix PR。</br>🔗 https://github.com/sgl-project/sglang/issues/32855
- **[Issue #33245] 量化 DeepSeek-V4：fused wq_a＋wkv 路径静默丢弃每层 packed weights**：服务正常运行但输出完全乱码，属于静默正确性 Bug，需警惕线上误用。</br>🔗 https://github.com/sgl-project/sglang/issues/33245
- **[Issue #33194] DeepSeek-V4-Flash 在 8× A800（SM80, TP=8）上的三个继发阻塞**：在 deep_gemm NameError 之后的剩余问题，与 [#33271](https://github.com/sgl-project/sglang/pull/33271) 同源。</br>🔗 https://github.com/sgl-project/sglang/issues/33194
- **[Issue #33247] DSV4 indexer 两个 torch 参考实现对 length masking 行为不一致**：属于参考实现的语义分歧（非崩溃），当前由下游消费者自行 re-mask，建议关注后续统一语义。</br>🔗 https://github.com/sgl-project/sglang/issues/33247

中优先级（功能受限/平台缺陷）：

- **[Issue #33268] HiCache 存储 key 缺少 kv_cache_dtype 维度**：`config_suffix` 只编码模型名、TP/PP/CP 几何，不同 KV cache dtype 之间会发生静默缓存碰撞（cross-run cache collision）。</br>🔗 https://github.com/sgl-project/sglang/issues/33268
- **[Issue #33286] DSpark + DP attention 崩溃：draft batch 缺少 `original_global_num_tokens_cpu`**：功能缺陷，暂无 fix PR。</br>🔗 https://github.com/sgl-project/sglang/issues/33286
- **[Issue #33283] Nsight Systems 进程树 profiling 下启动挂起**：服务在 ready 之前 hang 住，影响性能剖析场景。</br>🔗 https://github.com/sgl-project/sglang/issues/33283
- **[Issue #33292] `CustomOp.dispatch_forward()` 在 Intel GPU（XPU）上破坏多模态模型构建**。</br>🔗 https://github.com/sgl-project/sglang/issues/33292
- **[Issue #33033] Gemma4 prefill 物化二次方密集图像注意力 mask**：长上下文/高分辨率图输入时显存压力大。</br>🔗 https://github.com/sgl-project/sglang/issues/33033

新增/已恢复的稳定性基建：

- **[PR #32910] 修复 nvcc 13 编译 topk_v2 kernel 时 cicc 段错误**：cluster-mapped DSMEM 地址被放入 `problem.out` 后又经 epilogue 解引用导致编译期崩溃，波及 DeepSeek-V4 与部分 GLM 模型。</br>🔗 https://github.com/sgl-project/sglang/pull/32910
- **[PR #33229] 修复 ROCm 上 HiCache Mamba 状态传输 kernel 崩溃**：解决 Kimi-K3 在 AMD GPU 上 hybrid-mamba 的 host 备份/恢复问题（kDLCUDA → kDLGPU 修正）。</br>🔗 https://github.com/sgl-project/sglang/pull/33229
- **[Issue #17050] CI 追踪**：当前 main 分支 1 broken / 4 flaky / 650 recently fixed，CI 整体稳定。</br>🔗 https://github.com/sgl-project/sglang/issues/17050

## 6. 对应用开发者的意义

- **DeepSeek-V4 上线需谨慎**：量化路径输出乱码、长上下文 OOM、多节点死锁均未有全量修复，建议生产接入前充分回归；SM80 用户最快可通过合入 [#33271](https://github.com/sgl-project/sglang/pull/33271) 解决基础可服务性问题。
- **HiCache 存储 key 冲突需自行规避**：如果使用了 `--hicache-storage-backend file` 并且在不同 KV cache dtype（如 FP8 vs BF16）之间切换，需要注意旧的缓存条目可能被错误复用，建议换模型版本时清理缓存目录或等待上游修复（[#33268](https://github.com/sgl-project/sglang/issues/33268)）。
- **多模态服务可立即获得收益**：视觉 embedding 的 DP 通讯量大幅下降（[#33307](https://github.com/sgl-project/sglang/pull/33307)），高并发图像请求场景的 prefill 延迟将显著改善；同时多模态处理器侧的废弃参数清理降低了配置歧义。
- **对 Rust server 用户的提醒**：PD 分离（[#33125](https://github.com/sgl-project/sglang/pull/33125)）与 DP attention（[#33105](https://github.com/sgl-project/sglang/pull/33105)）支持已合入主线的待合并队列，如当前使用 `SGLANG_RUST_SERVER=1` 且依赖 PD 分离能力，可关注后续版本。
- **新模型选项增加**：Kimi K3 已提供 Day-0 镜像；Qwen3.5 现可在 Ascend 上部署；Blackwell 消费卡若搭配 FP8 KV，可尝试开启 HiSparse 获得稀疏加速。

---

*本日报由 AI 自动生成，数据来源于 GitHub 公开仓库（sgl-project/sglang），时间窗口为 UTC 2026-08-03 前后 24 小时。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 动态日报 2026-08-03

## 1. 今日速览

过去 24 小时共发布 11 个版本（b10225–b10235），主线聚焦 **DeepSeek V4（DSV4）全栈支持**：MTP+DSpark 侧车正式合入（b10228）、Metal 后端实现超连接算子（b10232）、Lightning Indexer 持续推进（PR #25893）。同时，Qwen3 工具调用解析（b10227）与 DSpark 侧车解析规则（b10231）显著改善了上层应用接入体验。稳定性方面，**GLM-5.2 在 ROCm/HIP 上出现严重回归**（#26445，prefill 慢 6 倍），建议相关用户暂缓升级。

## 2. 版本发布与破坏性变更

过去 24 小时发布节奏密集（b10225→b10235），全部为滚动发布，无 LTS 分支。重点版本如下：

| 版本 | 核心变更 | 备注 |
|---|---|---|
| [b10235](https://github.com/ggml-org/llama.cpp/releases/tag/b10235) | Metal 新增 SILU_BACK 算子 | 为 DSV4 反向传播类模型提供算子基元 |
| [b10234](https://github.com/ggml-org/llama.cpp/releases/tag/b10234) | Metal 支持 F16 bin ops | 扩展 Metal 后端混合精度表达能力 |
| [b10233](https://github.com/ggml-org/llama.cpp/releases/tag/b10233) | OpenCL GLU 算子限制本地 workgroup 大小 | 修复 Adreno 等移动 GPU 上的 GLU 稳定性 |
| [b10232](https://github.com/ggml-org/llama.cpp/releases/tag/b10232) | Metal 实现 DSV4 超连接 | 新增 3 个 GGML 算子，SIMDgroup 寄存器/ shuffle 优化 |
| [b10231](https://github.com/ggml-org/llama.cpp/releases/tag/b10231) | common 支持 DSpark sidecar 解析 | `dspark-` 文件按 speculative sidecar 规则自动发现；`-md` 显式选择可禁用 |
| [b10229](https://github.com/ggml-org/llama.cpp/releases/tag/b10229) | OpenCL 修复 ref_count 初始化 | 修复程序退出时后端上下文释放导致计数为负的问题 |
| [b10228](https://github.com/ggml-org/llama.cpp/releases/tag/b10228) | **DeepSeek V4 MTP + DSpark 合并** | 里程碑版本。注意：DeepSeek 官方 0731 版模型**不含 MTP**，仅使用 DSpark |
| [b10227](https://github.com/ggml-org/llama.cpp/releases/tag/b10227) | 新增 Qwen3 专用 chat 解析器 | 支持 tagged thinking、`<tool_call>` 省略模式，适配 qwen3-coder |
| [b10226](https://github.com/ggml-org/llama.cpp/releases/tag/b10226) | SYCL 修复 iGPU 分类 | 影响 Intel 核显设备选择逻辑 |
| [b10225](https://github.com/ggml-org/llama.cpp/releases/tag/b10225) | MiMo V2 仅在使用时加载 MTP 张量 | 减少显存常驻占用 |

**破坏性变更 / 迁移注意事项：**
- **DSV4 模型请使用 DSpark 而非 MTP**：b10228 的合入说明明确 DeepSeek 官方 0731 模型不包含 MTP 权重，使用 `--spec-` 相关参数时应指定 DSpark 侧车（模型参考 `am17an/DeepseekV4-Flash-20260731-DSpark`）。
- **DSpark 侧车文件解析**（b10231）：`dspark-` 前缀文件遵循 speculative sidecar 规则，`-hfd` 标签适用；若需禁用自动发现，显式传入 `-md` 选择主模型。
- Qwen3-TTS 支持（PR #26254）将**破坏 llama-tts 二进制兼容性**，涉及新参数 `--tts-lang`、`--tts-speaker-file`，合并前需关注。

## 3. 新模型与硬件支持

**模型/架构：**
- **DeepSeek V4 Flash 0731 聊天模板**（PR #26398）：新增专用模板，修复 preview 模板对 max-effort reasoning 的处理，使用不同的 reasoning level prompts。
- **TML Inkling 架构**（PR #25731）：新增 safetensors→GGUF 转换器、图构建与算子内核；大 MoE 场景改用 `int64_t` 索引，并引入 banded attention kernel。
- **Qwen3-TTS**（PR #26254）：支持 Qwen3-TTS-12Hz-1.7B-Base，多语言（zh/en/de/it/pt/es/ja/ko/fr/ru）。
- **GLM-5.2 支持**（Issue #24730）：社区请求，目前仍未实现，处于 open 状态。
- **Zamba2-2.7B**（Issue #8795）：长期 open 的模型请求，关注度较高（👍20）。

**硬件/后端：**
- **AMD gfx90c/gfx909 正确归类**（PR #26454）：此前被错误分配到 CDNA 架构，现归入 Vega（GCN），修复重复错误 token 输出问题。
- **SYCL iGPU 分类修复**（b10226）：解决 Intel 集成显卡设备选择错误。
- **OpenCL GLU workgroup 限制**（b10233）：改善移动 GPU 上的算子稳定性。

## 4. 性能与优化

**已合并/落地：**
- **Metal DSV4 超连接算子**（b10232）：simdgroup 寄存器 + shuffle 优化，为 DSV4 在 Apple Silicon 上的推理奠定基础。
- **Metal F16 bin ops**（b10234）：扩大 Metal 后端半精度算子覆盖。
- **MiMo V2 MTP 张量按需加载**（b10225）：减少显存常驻，提升加载速度。
- **金属 SILU_BACK**（b10235）：为需要反向传播的模型（如训练/微调）补充算子。

**进行中 PR：**
- **DeepSeek V4 Lightning Indexer**（PR #25893，merge ready）：Metal 后端实现 GGML_OP_LIGHTNING_INDEXER，是 DSV4 性能优化系列的第一块拼图。
- **SYCL unary+MUL 算子融合**（PR #26411）：延续 #26015 的融合工作，针对 silu/sigmoid/softplus 后接矩阵乘的场景。
- **OpenCL 解码端优化**（PR #26477）：量化 lm_head/GEMV 及中 batch GEMM，针对 Adreno GPU 的 MTP/投机解码场景。
- **CUDA/AMD RDNA FlashAttention head dim 256**（PR #26419）：此前 rocWMMA 路径移除后 RDNA4 深度上下文 prompt 处理性能回退，该 PR 重新启用 tensor cores。
- **HIP shuffle 指令替换**（PR #26466）：将 `__shfl_xor_sync` 替换为 dpp 指令，小幅提升 HIP 性能。
- **E8 格点 2-bit KV cache 量化**（PR #25352）：2.125 bpe（128 元素 head 34 字节），在不显著损失质量的前提下降低长上下文 KV 显存。

**新方法/架构：**
- **后缀解码（Suffix Decode）**（PR #26283）：模型无关的投机解码方法，基于当前请求/已生成 token 在线构建树，适合长尾匹配场景。

## 5. 稳定性与回归

按影响面从高到低排列，标注是否已有修复 PR：

| 严重度 | Issue/PR | 问题描述 | 状态 |
|---|---|---|---|
| 🔴 严重 | [#26445](https://github.com/ggml-org/llama.cpp/issues/26445) | **GLM-5.2 在 ROCm/HIP 上严重回归**：8x MI300X 环境下 prefill 慢 ~6 倍、加载慢 ~40 倍，指向 Indexer PR #25407 | 无 fix PR，属回归，需定位 |
| 🔴 严重 | [#25633](https://github.com/ggml-org/llama.cpp/issues/25633) | **DeepSeekV4 Flash 在 RPC 后端崩溃** | 无 fix PR，复现环境：5090 + Strix Halo RPC 混合 |
| 🔴 严重 | [#26119](https://github.com/ggml-org/llama.cpp/issues/26119) | **V100 上 cublasSgemm_v2 unsupported parameter**：出现在投机解码 + vision 多模态负载 | 无 fix PR |
| 🟠 高 | [#26432](https://github.com/ggml-org/llama.cpp/issues/26432) | **ROCm 上显存超限时静默回退 GTT**：加载时不报错，首请求后吞吐骤降 60%+，无警告 | 无 fix PR；建议加载时检查 VRAM 余量 |
| 🟠 高 | [#26396](https://github.com/ggml-org/llama.cpp/issues/26396) | **SYCL oneMKL FlashAttention 路径回归**：Arc Pro B70 200K prompt prefill 变慢 ~35%（b10216 起）；可通过 `MKL_FA_DISABLE=1` 恢复性能 | 无 fix PR，有 workaround |
| 🟠 高 | [#25060](https://github.com/ggml-org/llama.cpp/issues/25060) | **Blackwell (RTX 5090) 上 GGML-CUDA SOFT_MAX 崩溃** | 社区提出 patch，未确认合并 |
| 🟡 中 | [#26382](https://github.com/ggml-org/llama.cpp/issues/26382) | **无 V cache 的模型仍强制 K/V cache 类型一致**：GLM-5.2 加载报错 | 无 fix PR |
| 🟡 中 | [#26265](https://github.com/ggml-org/llama.cpp/issues/26265) | **llama-cli 从其他目录运行时配置/模型路径解析异常** | 无 fix PR |
| 🟡 中 | [#25746](https://github.com/ggml-org/llama.cpp/issues/25746) | **json-schema-to-grammar 对嵌套 string maxLength ≥2000 生成非法 GBNF** | 无 fix PR |
| 🟢 低 | [#24295](https://github.com/ggml-org/llama.cpp/issues/24295) | **Responses API 丢弃 `namespace`/`web_search` 工具类型**：Codex CLI MCP 工具不可达 | 无 fix PR |
| ✅ 已修复 | [b10229](https://github.com/ggml-org/llama.cpp/releases/tag/b10229) | OpenCL 后端上下文释放时 `ref_count` 为负导致崩溃 | 已修复 |
| ✅ 已修复 | [PR #26463](https://github.com/ggml-org/llama.cpp/pull/26463) | CMake 缺少 `LLAMA_SUBPROCESS` 函数检查，影响 RHEL8/9 构建 | 已合并 |

## 6. 对应用开发者的意义

- **DSpark 侧车解析规则**（b10231）直接影响在 llama.cpp 上使用 DeepSeek V4 的开发者：`dspark-` 文件会自动被发现，`-hfd` 标签适用；如需强制使用特定主模型或禁用发现，通过 `-md` 显式指定。部署多模型服务时需注意文件命名冲突。
- **Qwen3 专用解析器**（b10227）提升了对 Qwen3 系列工具调用/思考标签的兼容性——尤其是 `<tool_call>` 省略模式。基于 Qwen3 构建 Agent 的开发者应升级到 b10227+，避免解析错误导致 tool call 失败。
- **`x-tool-cwd` 请求头**（PR #26420）为 llama-server 工具调用增加了工作目录控制能力，与 pi/claude code 行为对齐。Agent 应用可通过该 header 指定工具执行的 CWD，提升文件系统类工具的安全性。
- **多模型网关客户端兼容性**（PR #26483）：llama-server 的 OpenAI 兼容端点同样适用于非自托管的多模型网关（如 DaoXE 的 `https://api.d...`），开发者可复用同一套 `base_url` 客户端逻辑。
- **DeepSeek V4 模型选择提醒**：官方 0731 权重没有 MTP，仅支持 DSpark。如果使用 `--spec-` 做投机解码，请勿照搬旧版 MTP 参数，建议直接使用社区发布的 DSpark GGUF，可获得约 50% 加速。
- **Qwen3-TTS 的破坏性变更**（PR #26254）尚在 review；若你的服务依赖 `llama-tts` 二进制，合入后需同步调整启动参数。
- **长上下文/大模型部署前检查**：关注 [#26432](https://github.com/ggml-org/llama.cpp/issues/26432) 中的 GTT 静默回退问题。在 ROCm/HIP 平台开启 MTP 且 context 较大时，建议先评估 VRAM 余量，避免运行时吞吐坍缩。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 动态日报 2026-08-03

## 1. 今日速览

今日无新 Release。社区关注点集中在三条线：Ollama Cloud 出现大面积 503/403 故障，直接影响生产 Agent 调用；0.32.4/0.32.5 被确认存在工具调用回归，回滚 0.32.1 可恢复；多个 runner 调度崩溃/卡死问题已有修复 PR 提交（#17516、#17515），DeepSeek 工具调用解析丢失问题也有对应修复（#17526）。

---

## 2. 版本发布与破坏性变更

**今日无正式 Release，也无已合并的破坏性变更。** 值得关注的未合并存储层变更：

- [PR #16590](https://github.com/ollama/ollama/pull/16590)：引入 manifest-list 存储，使 runner 特定 manifest 可在同一 tag 下共存，并保留 v1 tag 作为降级锚点。若合并，将影响 `pull/push/show/list/copy/remove` 的底层行为，并移除兼容补丁。当前仍为 Open，涉及存储格式变化，建议提前评估迁移成本。

---

## 3. 新模型与硬件支持

### 模型请求
- [Issue #17510](https://github.com/ollama/ollama/issues/17510)：请求本地支持 `deepseek-v4-flash:0731`，Open。
- [Issue #17235](https://github.com/ollama/ollama/issues/17235)：询问 Kimi K3 何时上线 Ollama Cloud，Closed。
- [Issue #16900](https://github.com/ollama/ollama/issues/16900)：请求官方 registry 增加 Qwen Agent World，Closed。
- [Issue #17279](https://github.com/ollama/ollama/issues/17279)：导入 GLM-5.2 IQ2_M/UD-IQ2_M GGUF 时被 `llama-quantize` 校验拒绝，暂未确认支持计划。

### 硬件/后端
- [PR #15325](https://github.com/ollama/ollama/pull/15325)（Closed）：提出 `OLLAMA_AMD_UNSAFE=1` 实验性绕过 ROCm deep-init 过滤，以支持未认证 AMD GPU。
- [PR #17420](https://github.com/ollama/ollama/pull/17420)（Closed）：为 llama-server launcher 增加 Vulkan + AMD mmap fallback 重试逻辑，关联 #17285。

---

## 4. 性能与优化

今日无已合并的吞吐/延迟/显存优化。相关性能侧动态：

- [Issue #17523](https://github.com/ollama/ollama/issues/17523)：多 GPU 层切分未考虑 VRAM 容量差异（RTX 4070 12GB + RTX 3060 Ti 8GB），导致大卡饱和、小卡闲置，资源利用率不均。属于性能类 Bug，暂未见修复 PR。
- [PR #16590](https://github.com/ollama/ollama/pull/16590)：存储层 manifest-list 支持，未来可能改善多 runner/多平台的模型分发效率，但尚未合并。

---

## 5. 稳定性与回归

按严重程度排列，并标注关联修复 PR。

### 5.1 服务不可用/认证故障
- [Issue #15419](https://github.com/ollama/ollama/issues/15419)：**Ollama Cloud 频繁 503 Service Unavailable**，持续近 4 个月，38 条评论、24 👍，生产环境可靠性严重受影响，暂无修复 PR。
- [Issue #17471](https://github.com/ollama/ollama/issues/17471)：ollama.com 与 API/CLI 持续 8+ 小时 `403 Forbidden`/登录循环，多设备复现，无修复 PR。
- [Issue #17103](https://github.com/ollama/ollama/issues/17103)：Ollama Cloud Max 计划用户报告所有模型不可用，无修复 PR。

### 5.2 工具调用回归
- [Issue #17444](https://github.com/ollama/ollama/issues/17444)：**0.32.4/0.32.5 在 VS Code Copilot Harness 中破坏工具调用**，确认回滚 0.32.1 可解决。无官方修复 PR，建议固定版本。

### 5.3 Runner 调度/崩溃
- [Issue #17428](https://github.com/ollama/ollama/issues/17428)：Embedding runner 卡在 `Stopping...`，`/api/embed` 挂起。修复 PR 已提交：[PR #17516](https://github.com/ollama/ollama/pull/17516) —— llama-server 进程退出后驱逐已加载 runner。
- [Issue #17482](https://github.com/ollama/ollama/issues/17482)：同一模型在不同客户端间被反复卸载/重载。相关调度死锁修复：[PR #17515](https://github.com/ollama/ollama/pull/17515) 防止并发请求复活已驱逐 runner。
- [Issue #17484](https://github.com/ollama/ollama/issues/17484)：从 HuggingFace 下载模型后运行持续报 `context deadline exceeded`，无修复 PR。

### 5.4 模型正确性
- [Issue #17065](https://github.com/ollama/ollama/issues/17065)：**MLX 视觉模型（Gemma 4 12B / Qwen3.5 4B）接收不到图像输入**，仅见 `[img-0]` 占位符，无修复 PR。
- [Issue #17512](https://github.com/ollama/ollama/issues/17512)：Thinking 模型在 prompt 指定精确字数时进入无限自校验循环，不输出停止 token，Closed。
- [Issue #17292](https://github.com/ollama/ollama/issues/17292)：`qwen3:30b` 忽略 `--think=false`，而 `qwen3:8b`、`deepseek-r1:32b` 正常，Closed。
- [Issue #17520](https://github.com/ollama/ollama/issues/17520)：损坏 blob 不会被检测/修复，`ollama pull` 仍报告 digest 验证成功，Open。
- [PR #17526](https://github.com/ollama/ollama/pull/17526)：修复 DeepSeek parser 在流结束前未输出 `<｜tool▁call▁end｜>` 时丢弃完整工具调用的问题，Open。

### 5.5 CUDA/GPU 稳定性
- [Issue #17380](https://github.com/ollama/ollama/issues/17380)：**间歇性 `CUDA error: shared object initialization failed`**，伴随静默 CUDA_Host → CPU pinned buffer 回退（Windows, RTX 5070 Ti, gpt-oss:20b），无修复 PR。
- [Issue #17386](https://github.com/ollama/ollama/issues/17386)：`gemma4:e2b` 在 Windows 上分配大部分 buffer 到 CUDA_Host（pinned system memory），而非 VRAM。
- [Issue #17517](https://github.com/ollama/ollama/issues/17517)：新版更新后 Qwen 3.6 35B Q4_K_M 加载直接触顶内存，即使设置 4K context，GPU 未填满（RTX 5070 Ti 12GB）。

### 5.6 其他
- [Issue #17521](https://github.com/ollama/ollama/issues/17521)：TUI 模式日文 IME preedit 渲染位置错误。修复 PR：[PR #17525](https://github.com/ollama/ollama/pull/17525) 保持物理光标在输入 caret 处，Open。
- [Issue #13377](https://github.com/ollama/ollama/issues/13377)：Windows 桌面端设置 `OLLAMA_HOST` 后卡在 loading，Closed。
- [Issue #14258](https://github.com/ollama/ollama/issues/14258)：GPU→CPU 静默回退，无用户可见警告，仅 debug 日志可见，Open。
- [Issue #17489](https://github.com/ollama/ollama/issues/17489)：质疑 Kimi K3 页面 “cached input $0.30/M” 定价与 Zero Data Retention 承诺是否矛盾。
- [PR #17519](https://github.com/ollama/ollama/pull/17519)：更新 OpenAPI spec，补齐 `ToolCall.id`、`ToolCall.function.index`、`ChatMessage.tool_name`、`ChatMessage.tool_call_id` 字段，Open。

---

## 6. 对应用开发者的意义

- **云端调用需增加容错。** Ollama Cloud 正在经历大面积 503/403 及全模型不可用，依赖云模型的 Agent 应配置重试、降级或本地 fallback，避免单点依赖。
- **0.32.4/0.32.5 工具调用回归影响面大。** 基于 VS Code Copilot Harness 等工具调用场景的开发者，建议固定到 0.32.1 并跟踪 Issue #17444。
- **DeepSeek 工具调用可靠性即将提升。** PR #17526 修复了流结束前未输出结束分隔符导致的工具调用丢失问题，对使用 DeepSeek 模型的 Agent 是直接利好。
- **API 规范开始补齐工具调用字段。** PR #17519 更新 OpenAPI 后，基于 SDK 代码生成的项目可以正确拿到 `tool_call_id` / `ToolCall.id` 的 schema。
- **调度器修复将减少“僵尸模型”现象。** PR #17516、#17515 落地后，llama-server 崩溃或 runner 被驱逐时，`ollama ps` 不再误导，并发请求也不会再触发调度死锁。
- **GGUF 极端量化模型导入门槛变高。** 如计划使用 GLM-5.2 IQ2 等量化版本，需先确认当前 Ollama 与 llama-quantize 的兼容性，避免在模型准备阶段浪费时间。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

## LiteLLM 动态日报 — 2026-08-03

---

### 1. 今日速览

今日最核心的进展集中在模型兼容性与成本正确性：`amazon_nova` 流式调用因 httpx zstd 解码器复用问题 100% 失败，属高危阻塞；社区贡献的 PR #35616 开始修复 Databricks 成本计算忽略缓存/音频/推理 token 的问题。此外，PR #35600 为 Realtime API 新增了最新 OpenAI 音频模型支持（含 WebRTC 路径），PR #35615 重新提交了 Dashboard 暗黑模式（关闭 #10177），明显在推进 UI 与实时语音两方向的功能覆盖。

---

### 2. 版本发布与破坏性变更

过去 24 小时无新 Release。但有一个值得关注的潜在配置行为变更：`nproc` 在 Kubernetes Pod 内返回的是宿主机 CPU 数而非 Pod 的 CPU limit，意味着官方生产部署文档中建议的 `--num_workers "$(nproc)"` 在生产环境中会导致 worker 数远高于预期（Issue #26620，已关闭/陈旧）。采用该模式的团队应改为显式设置 `--num_workers` 或使用 Downward API 注入 CPU limit。

---

### 3. 新模型与硬件支持

- **OpenAI 最新音频模型（Realtime）**：PR #35600 为 Realtime 翻译端点新增 WebSocket 与 WebRTC 代理路径，并升级至 OpenAI SDK 2.52，同时补齐了流式转录支持和 WebRTC 路径的 spend tracking/budget enforcement。
- **Bedrock 模型**：PR #35617 为 Claude Sonnet 4.6 / Haiku 4.5 的 Bedrock Converse 调用移除了 `strict` 与 `additionalProperties` 字段——这两个模型此前会拒绝这些参数并报出编译语法错误（>300MB），导致 504 网关超时。
- **o4-mini 定价**：PR #22086 将 `o4-mini-2025-04-16` 的 flex/priority 价格项与请求中使用的 model name（`o4-mini`）对齐，修复了 `service_tier="flex"` 请求被按标准档计费的问题。

---

### 4. 性能与优化

- **Headroom 可观测性改进**：PR #35618 修复了 headroom 在无可压缩消息时静默返回的问题——现在会显式记录一次的零节省 guardrail 条目，让运营者能区分“headroom 未运行”和“headroom 运行了但没省到钱”。
- **MCP Server 重复探测问题**：Issue #35460 指出 `MCPServerManager` 在每次聚合 `/mcp` 请求时都会对所有后端 server 调用 `list_prompts()` / `list_resources()`，即使这些 server 根本不支持该操作。（尚无修复 PR）

---

### 5. 稳定性与回归

| 严重程度 | Issue / PR | 问题描述 | 状态 |
|---|---|---|---|
| 🔴 严重 | [#35589](https://github.com/BerriAI/litellm/issues/35589) | `amazon_nova` 所有流式请求 100% 失败：httpx zstd decoder 在 Nova 的多帧 SSE 上复用已完成的 decompressobj，非流式正常 | OPEN，无 fix PR |
| 🟠 高 | [#34105](https://github.com/BerriAI/litellm/issues/34105) | Bedrock Converse 对非 Anthropic/Nova2/GPT-OSS 模型（如 Qwen3）**静默丢弃** `reasoning_effort` 参数 | OPEN |
| 🟠 高 | [#25394](https://github.com/BerriAI/litellm/issues/25394) | ChatGPT 提供商返回 403（`/v1/chat/completions`）和 400（`/health`） | OPEN，无复现细节补充 |
| 🟡 中 | [#35577](https://github.com/BerriAI/litellm/issues/35577) | 新 DB 部署首次加载时被 `Router.upsert_deployment()` 从内存 router 中丢弃 | OPEN |
| 🟡 中 | [#27105](https://github.com/BerriAI/litellm/issues/27105) | `mcp_semantic_tool_filter` 生成的 OpenAI 工具 schema 非法，破坏 OpenAI 兼容后端（如 LM Studio） | OPEN |
| 🟡 中 | [#35524](https://github.com/BerriAI/litellm/issues/35524) | 无法估算请求成本时，乐观预算预留被跳过，导致并发超支 | OPEN |
| 🟢 低 | [#35608](https://github.com/BerriAI/litellm/issues/35608) | Databricks 成本计算器手写乘法，忽略 cached/audio/reasoning tokens，按全价计费 | **已有 fix PR** [#35616](https://github.com/BerriAI/litellm/pull/35616) |
| 🟢 低 | [#35605](https://github.com/BerriAI/litellm/issues/35605) | `make test-unit` 在全新 clone 上因重复测试 basename 在收集阶段失败 | OPEN |
| 🟢 低 | [#35460](https://github.com/BerriAI/litellm/issues/35460) | MCPServerManager 对不支持 list_prompts/list_resources 的后端仍每次探测 | OPEN |

---

### 6. 对应用开发者的意义

- **实时语音应用**：如果正在基于 LiteLLM 构建 OpenAI Realtime 音频应用，PR #35600 落地后即可同时支持 WebSocket 与 WebRTC，且 WebRTC 路径不再绕过 spend tracking，对网关计费与控制更友好。
- **工具调用链路需谨慎验证**：两个问题直接影响 Agent 类应用——`mcp_semantic_tool_filter` 会产出非法工具 schema（Issue #27105），而 **DB skills 在 `/v1/chat/completions` 上会因缺 `type` 字段返回 400**（对应修复 PR #35596 已提交）。使用这些功能的团队应各自加上回归测试。
- **成本核算准确性**：Databricks 成本修复（PR #35616）意味着此前缓存/音频/推理 token 被当作全价 prompt token 计费的情况即将结束；同样值得关注的是 o4-mini flex 定价修复（PR #22086），如果你用 `service_tier="flex"` 调用该模型，成本报表将随之修正。
- **部署到 Kubernetes 时**：务必显式设置 worker 数，不要依赖 `$(nproc)`——文档中推荐的写法在 K8s 下实际会按宿主机核数扩容，可能引发过度资源占用和上游连接数暴涨。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 动态日报 · 2026-08-03

## 1. 今日速览

过去 24 小时无新版本发布，开发重心在 Unsloth Studio 桌面端的稳定性修复与硬件适配：Windows 安装器竞态（#7764）、Xet 下载卡死（#7742）、虚拟化 Mac 上 GGUF 乱码（#7717）均有修复 PR 在途。对上层 Agent 应用影响最大的是两个正确性修复——聊天模板 `</think>` 注入漏洞（#7334）与 Qwen3.x 35B 思考模式误判（#7758），目前均未合入，升级前需评估影响面。

## 2. 版本发布与破坏性变更

（无正式版本发布；无已合入的 API/配置变更）

## 3. 新模型与硬件支持

- **Intel Arc GPU 支持**（PR #7706）：Windows 安装器新增 WMI 检测 Intel Arc/Iris/UHD/HD 显卡并安装 XPU 版 PyTorch。此前 Intel GPU 会错误落入 CPU-only Torch 路径，该 PR 修复了这条 GPU 检测链（当前仅识别 NVIDIA CUDA 与 AMD ROCm）。[链接](https://github.com/unslothai/unsloth/pull/7706)
- **Apple Silicon 音频输入**（PR #7699）：Studio 聊天在 MLX 推理后端新增音频输入能力与命令处理，覆盖 Gemma 3n、Gemma 4、MiniCPM-o 等语音模型；此前 Mac 用户看不到音频附件控件。[链接](https://github.com/unslothai/unsloth/pull/7699)
- **GGUF reasoning budget 控制**（PR #7701）：新增 `reasoning_budget` / `reasoning_budget_message` GGUF 加载设置，在 Studio 每模型高级设置中暴露，并持久化到预置、模型切换与 API 自动切换场景。[链接](https://github.com/unslothai/unsloth/pull/7701)

## 4. 性能与优化

- **Xet 下载内存上限与卡死检测**（PR #7742）：为 Studio 的 Hub 下载路径增加 Xet 传输内存上限、无进度卡死检测与自动传输切换。此前 Xet transfer 若挂起（无进度且无报错），`finalize_worker_exit` 只能依赖 worker 退出码，永远不会结束。[链接](https://github.com/unslothai/unsloth/pull/7742)
- **每聊天独立队列提升并发利用**（PR #7629）：以 per-chat FIFO 队列替换全局单例提示队列，就绪聊天可在推理后端并发上限内并行调度，提升多会话场景的后端利用率。[链接](https://github.com/unslothai/unsloth/pull/7629)
- 今日无具体吞吐/延迟/显存数字披露；上述优化以下载稳定性与并发资源利用为主。

## 5. 稳定性与回归

按严重程度排列：

- **聊天模板标记注入**（PR #7334，修复 #7066）：用户消息/系统提示/工具结果中的字面量 `</think>` 被误判为思考块结构结束符，导致推理内容泄漏进可见回答；`<|start|>ass...` 存在同源边界绕过。修复 PR 已提交但未合入。[链接](https://github.com/unslothai/unsloth/pull/7334)
- **Qwen3.x 思考模式门控误判**（PR #7758，修复 #5846）：`Qwen3.5-35B-A3B` 被误读为 3B 模型，35B 上默认禁用 thinking；该 PR 恢复 inbound `reasoning_content` 转发至 llama-server（opt-in `preserve_thinking`）。[链接](https://github.com/unslothai/unsloth/pull/7758)
- **虚拟化 Apple GPU 上 GGUF 推理乱码**（PR #7717）：在干净 Windows/macOS/Linux runner 上复现，虚拟化 Mac 上 GGUF 对话返回乱码；修复方案为虚拟化 Metal 场景下将 GGUF 固定到 CPU，并在 MTP 下钳制并行 slots。[链接](https://github.com/unslothai/unsloth/pull/7717)
- **Xet 下载 ETA 误报/卡死**（Issue #7667）：Studio 下载 6.8GB 模型时显示 `102 B/s / 753d 5h left`，根因即 Xet transfer 无卡死检测。已有修复 PR #7742。[Issue](https://github.com/unslothai/unsloth/issues/7667) | [PR](https://github.com/unslothai/unsloth/pull/7742)
- **API 流式输出挂起**（Issue #7617）：本地向 Pi agent 提供 API 流式响应时频繁挂起，需手动干预才能继续；无对应 fix PR。[链接](https://github.com/unslothai/unsloth/issues/7617)
- **Nemotron 注意力处理错误**（Issue #7527）：RTX 5070Ti Laptop GPU、Linux Mint 环境上报；无 fix PR。[链接](https://github.com/unslothai/unsloth/issues/7527)
- **Windows 安装器/后端稳定性**（多个 PR）：
  - #7764：序列化 Studio 安装器运行，协调 Windows 托管环境替换与 Tauri 后端启动，避免装到一半被进程占用。[链接](https://github.com/unslothai/unsloth/pull/7764)
  - #7763：安装前校验托管 Python 解释器可启动（解析 PATH shim 到真实 CPython），损坏环境提前报错而非在 GPU 检测阶段才暴露。[链接](https://github.com/unslothai/unsloth/pull/7763)
  - #7757：ACL 拒绝的安装目录（如 `%USERPROFILE%\.unsloth\llama.cpp`）返回可操作错误，而非原始 `Test-Path : Access is denied`。[链接](https://github.com/unslothai/unsloth/pull/7757)
  - #7740：解释 Windows `unsloth.exe` 目录锁机制，避免误报为权限错误（关闭 #7697）。[链接](https://github.com/unslothai/unsloth/pull/7740)
- **`.venv_t5_*` sidecar 损坏检测**（Issue #7715）：已关闭，维护者处理完成；此前损坏文件在导出/运行 Transformers 5.x 模型时才会触发 worker 崩溃。[链接](https://github.com/unslothai/unsloth/issues/7715)
- **`revision` 参数未生效**（PR #4222）：`FastLlamaModel.from_pretrained` 声明了 `revision` 却未传递给 config/weights/tokenizer 加载，长期存在；PR 已合入 main。[链接](https://github.com/unslothai/unsloth/pull/4222)
- **CI 修复**（PR #7760）：model-config Playwright 测试自 #7736 起在 main 上失败，该 PR 改为从齿轮图标打开 run-settings，规避折叠行误触。[链接](https://github.com/unslothai/unsloth/pull/7760)

## 6. 对应用开发者的意义

- **思考内容链路需回归测试**：#7758 合入后，Qwen3.x 35B 的 `reasoning_content` 转发与 `preserve_thinking` 行为将变化；当前 build 上 35B 思考默认被错误禁用，依赖 thinking 输出的 Agent 应关注合入时间点并做回归。[链接](https://github.com/unslothai/unsloth/pull/7758)
- **输入注入是安全更新**：`</think>` 边界绕过意味着公网 Agent 服务的用户输入可操纵思考块结构、造成信息泄漏。该修复对多租户/对公网场景应视为安全补丁处理。[链接](https://github.com/unslothai/unsloth/pull/7334)
- **多会话并发应用受益**：per-chat 独立队列让多 Agent/多聊天应用可并行利用推理后端，而不是被全局队列串行阻塞；但需留意后端并发上限配置。[链接](https://github.com/unslothai/unsloth/pull/7629)
- **硬件选型建议**：Windows 端 Intel Arc 用户将获得 XPU 路径而非 CPU 回退（#7706）；虚拟化 Mac 上 GGUF 会被固定到 CPU 以保证正确性，追求性能请使用裸机 Metal（#7717）。
- **已知风险**：API 流式挂起（#7617）与 Studio 下载 ETA 误报（#7667）尚未完全修复；生产接入请配置超时与重试，并关注 #7742 的合入状态。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*