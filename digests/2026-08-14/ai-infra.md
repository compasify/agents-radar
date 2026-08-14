# AI 基础设施日报 2026-08-14

> 生成时间: 2026-08-14 00:59 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施生态横向对比分析报告（2026-08-14）

## 1. 生态全景

当前 AI 基础设施正处于**新模型驱动的高频迭代期**，DeepSeek-V4、Kimi-K3、Muse Glimmer 等前沿模型在推理引擎中快速适配，但稳定性滞后于功能开发是本日最显著的矛盾。vLLM 与 SGLang 在服务端大模型推理上竞争激烈，投机解码/MTP 与分布式部署是共同攻坚点；llama.cpp 与 Ollama 则加速向异构本地后端和 Agent 工具链延伸。LiteLLM 作为网关层正忙于解决成本映射、权限同步等企业级治理问题；Unsloth 以桌面应用为标志从训练工具向本地 AI 产品平台扩张。整体看，AI 基础设施的“功能-稳定-成本”三角张力在本日动态中表现得尤为明显。

## 2. 各项目活跃度对比

| 项目 | 今日 Issue/PR 活跃度 | 版本发布 |
|---|---|---|
| **vLLM** | 100 Issues 更新 / 495 PRs | 无 |
| **SGLang** | CI: 3 broken / 11 flaky；约 14 PR、18 Issue 被引用 | 无 |
| **llama.cpp** | 约 13 PR、15 Issue 被引用 | b10411–b10423（10+ 版本） |
| **Ollama** | 约 7 PR、8 Issue 被引用 | 无 |
| **LiteLLM** | 约 10 PR、20 Issue 被引用 | v1.98.0-dev.2 |
| **Unsloth** | 约 7 PR、10 Issue 被引用 | v0.1.702-beta |

> vLLM 为唯一公布明确 PR/Issue 总数的项目；其余来自日报中明确提及的编号数估算。

## 3. 模型支持竞速

| 项目 | 关键新模型/架构进展 |
|---|---|
| **vLLM** | Muse Glimmer（29.6B VLM）、Kimi-K3 DCP+DSpark、Gemma-4 FA4 FP8、DeepSeek V4 系列优化、B12X 稠密算子 |
| **SGLang** | DeepSeek-V4 Roadmap（AMD 优化为主）、Kimi-K3 Day0 PR、Nemotron 3.5 Nano DFlash/DSpark、Muse Glimmer 工具解析修复 |
| **llama.cpp** | Kimi-K3 文本模型（PR）、MiniMax-Text-01/M1（PR）、LFM2 tensor split、EAGLE-3.1 转换、CUDA SM120 MoE prefill（实验） |
| **Ollama** | Nemotron H MLX 视觉支持、Muse Code/DeepSeek Harness CLI 集成 |
| **LiteLLM** | Gemini 3.1 Flash Lite Image、Grok 4.3、Gemini 3.1 Flash TTS、Veo 3.1 Lite、Vertex Lyria 等模型目录条目 |
| **Unsloth** | MiniMax-H3 视频生成支持受阻，DeepReinforce Ornith-1.0 仍为社区请求 |

**结论**：vLLM 与 SGLang 在前沿大模型推理支持上**领跑**，且 SGLang 在 AMD 侧投入更积极；llama.cpp 在本地/边缘端的新架构支持速度快但多数仍处于 PR 阶段；LiteLLM 在模型 API 覆盖上最广，但属配置层而非推理内核；Ollama 与 Unsloth 更多是集成与工具链跟进。

## 4. 性能优化前沿

优化火力集中在以下方向：

- **KV Cache 与记忆管理**：vLLM 的 HiSparse 稀疏 MLA 缓存（三层架构）、KV offload 事件重构；SGLang 的 Programmatic KV Cache 与 Position-Independent Reuse 两个 RFC。
- **投机解码 / MTP 调度**：vLLM 的 DSpark profile 缓存、跳过未完成 prefill 的 logits；llama.cpp 的 draft 模型类型自动检测、dflash/dspark 后端采样。
- **算子融合与后端优化**：SGLang 的 AMD aiter fused mHC post+pre、batched_gemm_bf16；llama.cpp 的 SYCL FFN 融合、CPU flash-attention 向量化、Metal TQ2_0 优化。
- **量化与精度**：llama.cpp 增加 MXFP4、TQ2_0；SGLang 的 NVFP4→MXFP4 在线重量化；vLLM 的 FP8 KV-dequant 路径。
- **分布式可靠性**：vLLM 的 NIXL push/pull 兼容性校验、HMA fail-closed；SGLang 的 trtllm allreduce fp32 累加讨论；llama.cpp 的 OpenCL FA barrier 修复。
- **成本与资源调度**：LiteLLM 的 off-peak 定价、PTU 双重计费修复；Ollama 的后端加载规划集中化。

## 5. 分层定位差异

| 项目 | 层级 | 核心定位 |
|---|---|---|
| **vLLM / SGLang** | 推理引擎/服务框架 | 面向生产云环境的高性能、高吞吐 LLM 推理 |
| **llama.cpp** | 本地推理运行时 | 轻量跨平台（CPU/Metal/Vulkan/SYCL/OpenVINO）推理库 |
| **Ollama** | 本地运行时/模型管理器 | 基于 llama.cpp 等，提供简单 API 与 Agent CLI 集成 |
| **LiteLLM** | LLM 网关/代理 | 统一多 provider API，负责路由、计费、权限与审计 |
| **Unsloth** | 训练/微调框架 | 低资源微调工具，正向本地训练+推理产品平台演进 |

各层天然互补：llama.cpp/Ollama 占据本地边缘，vLLM/SGLang 主导云端服务，LiteLLM 作为统一接入层，Unsloth 覆盖上游训练侧。

## 6. 值得关注的趋势信号

1. **投机解码/MTP 进入主流但风险并存**：vLLM、SGLang、llama.cpp 均在完善 draft 模型支持，但长序列、PP/DCP、动态调度下崩溃与吞吐悬崖频发，**开发者必须用目标负载做 A/B 压测，而非仅看接受率**。
2. **新模型适配竞速白热化**：DeepSeek-V4/Kimi-K3 在多个引擎同时推进，但“适配完成”与“稳定可用”之间存在明显缺口（如 SGLang 多节点死锁、vLLM 升级回归），**生产切换需跟踪具体 Issue/PR 状态**。
3. **分布式推理可靠性成为最大短板**：vLLM GB10 多节点 stall、SGLang DSpark rank 发散、llama.cpp RPC worker 崩溃等，暴露出跨节点场景的系统性风险，**多机部署前需重点做长稳与故障注入测试**。
4. **本地/边缘推理与 Agent 工具加速融合**：Ollama 推出 `dsh`/`muse` 启动器，Unsloth 发布桌面应用并支持本地 Agent，llama.cpp 强化异构后端——本地化部署正在成为 Agent 原型的主流选项。
5. **网关层成本与权限治理需求凸显**：LiteLLM 今日大量修复集中在成本映射、Tag 预算重置、访问组同步，说明**企业级 LLM 网关的计费准确性和权限隔离仍是落地痛点**。
6. **可观测性从“可选”变为“必备”**：vLLM 增加 CI GPU 同步检查、SGLang 追踪 KV cache 利用率指标、llama.cpp 允许 decode 期间访问 metrics——基础设施团队应尽早将这类指标纳入自己的监控体系。
7. **结构化输出/函数调用仍需工程化打磨**：空 JSON Schema 拒绝（vLLM）、MCP 工具 `$ref` schema 丢失（LiteLLM）、重复 tool_call_id（LiteLLM）等问题直接影响 Agent 可靠性，**API 上层应增加入参校验与返回值防御**。

对 Agent/应用开发者的直接建议：优先锁定一个经过压测的推理引擎版本，避免追逐每日 nightly；投机解码单独评估收益与风险；注意网关层的计费/权限已知缺陷；在本地运行时集成中，提前验证 OpenAI 兼容性（如认证头、工具调用格式）和长会话稳定性。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 动态日报 · 2026-08-14

## 今日速览

过去 24 小时无新版本发布，但社区活动量极大：495 条 PR、100 条 Issue 有更新。核心焦点是 MTP/投机解码在长序列、流水线并行、动态调度等场景下的崩溃与性能回退（多条高评论 Issue 持续发酵）；同时 DeepSeek V4 / Kimi-K3 / Qwen3.5-MTP 生态工作大量推进，Muse Glimmer 新模型支持、HiSparse 稀疏 MLA 缓存、DSpark 适配等重量级 PR 已进入 review 阶段。

## 版本发布与破坏性变更

无新 Release。但 v0.27.0 已积累多条升级回归报告，生产环境升级前需关注：

- [Issue #51758](https://github.com/vllm-project/vllm/issues/51758)：0.26.0 → 0.27.0 后运行 DeepSeek V4 报 flash error（17 评论，暂无 fix PR）。
- [Issue #51921](https://github.com/vllm-project/vllm/issues/51921)：v0.27.0 在 4 节点 TP=4（GB10/sm_121, aarch64）下 idle 约 1 分钟后引擎永久 stall，请求无法进入 scheduler（11 评论，暂无 fix PR）。
- [Issue #51744](https://github.com/vllm-project/vllm/issues/51744)：`vllm/vllm-openai:latest`（v0.27.0）+ Transformers 5.15.0 无法启动 Gemma4（14 评论，暂无 fix PR）。

## 新模型与硬件支持

- **Muse Glimmer**（[PR #51655](https://github.com/vllm-project/vllm/pull/51655)）：新增 29.6B 稠密视觉语言模型支持（ViT-G/14 编码器、128K 上下文），含 ATEM 工具调用解析器与 DFlash 投机解码支持。
- **Kimi-K3 DCP + DSpark**（[PR #52188](https://github.com/vllm-project/vllm/pull/52188)）：支持 decode context parallel 下以 FlashinferMLA + Tokenspeed 作为 target 与 draft 后端组合运行 DSpark。
- **Gemma-4 FA4 FP8 Kernel**（[PR #48666](https://github.com/vllm-project/vllm/pull/48666)，已关闭/合入）：SM90 full-attention 层接入 FA4 CuTeDSL kernel，打通 FP8 KV-dequant 路径。
- **B12X 稠密线性算子**（[PR #52016](https://github.com/vllm-project/vllm/pull/52016)）：为 NVIDIA SM120/SM121 提供可选 dense linear 后端，`vllm[b12x]` 安装。
- **Gemma4-E2B 加载修复**（[PR #52206](https://github.com/vllm-project/vllm/pull/52206)）：适配 Transformers 5.x per-layer 异构 `head_dim` 配置。
- **ROCm 路线图**：Kimi-K3 ROCm enablement 追踪（[Issue #50682](https://github.com/vllm-project/vllm/issues/50682)）、DeepSeek-V4 ROCm 端到端检查清单（[Issue #41820](https://github.com/vllm-project/vllm/issues/41820)）、gfx942 启用 FlyDSL fp8 MQA logits kernel（[PR #49544](https://github.com/vllm-project/vllm/pull/49544)）。

## 性能与优化

**进行中的优化 PR：**

- **HiSparse 分层稀疏 MLA 缓存**（[PR #51323](https://github.com/vllm-project/vllm/pull/51323)）：device KV cache + host hot buffer + host cache 三级设计，支持 DeepSeek V4，B300 已有初步性能数据。
- **跳过未完成 prefill 的 logits/sampling**（[PR #49171](https://github.com/vllm-project/vllm/pull/49171)）：Model Runner V2 下减少 chunked prefill 的冗余采样算子开销。
- **PIECEWISE CUDA graph 的 eager TP all-reduce 拆分**（[PR #48877](https://github.com/vllm-project/vllm/pull/48877)）：将 TP all-reduce 从图中拆出、以 PyNccl 在模型 stream 上 eager 执行；默认关闭。
- **MoE masked activation 泛化**（[PR #51217](https://github.com/vllm-project/vllm/pull/51217)）：统一 padded layout 下的 MoE 激活实现，支持 gated/non-gated。
- **DSpark 自适应验证 profile 缓存**（[PR #52233](https://github.com/vllm-project/vllm/pull/52233)）：避免每次引擎启动重复 5 次 calibration replay。
- **CI 性能护栏**（[PR #43107](https://github.com/vllm-project/vllm/pull/43107)）：新增 `VLLM_GPU_SYNC_CHECK` 环境变量，在 CI 中检测主 stream 上的 GPU↔CPU 同步。
- **KV offload / Connector 体系演进**：TieringAdmissionPolicy 骨架（[PR #51576](https://github.com/vllm-project/vllm/pull/51576)）、KV offload 事件路径重构 RFC（[Issue #49413](https://github.com/vllm-project/vllm/issues/49413)）、EC Connector worker→scheduler 元数据通道（[PR #49585](https://github.com/vllm-project/vllm/pull/49585)）。

**值得警惕的性能问题：**

- **动态投机解码（DSD）在 batch 阈值处吞吐塌陷**（[Issue #49548](https://github.com/vllm-project/vllm/issues/49548)）：CUDA graph 从 FULL_AND_PIECEWISE 降级到 PIECEWISE，并发下聚合吞吐灾难性下降。[Issue #49986](https://github.com/vllm-project/vllm/issues/49986) 进一步指出 DSD 各 arm 相比 no-spec 存在 baseline 开销。曾有 workaround PR（[#52070](https://github.com/vllm-project/vllm/pull/52070)）但因会改变 greedy token 正确性已被作者撤回。
- **Qwen3.5 原生 MTP 收益为负**（[Issue #47277](https://github.com/vllm-project/vllm/issues/47277)）：OCR workload 上接受率 82%-88% 仍慢于 no-MTP CUDA graph baseline。
- **Qwen3.5 27B prefix caching**（[Issue #38988](https://github.com/vllm-project/vllm/issues/38988)）与 **ViT 全量 CUDA graph**（[Issue #38175](https://github.com/vllm-project/vllm/issues/38175)）是社区关注的两条性能演进线索。
- **DeepSeek V4 性能优化清单**（[Issue #45861](https://github.com/vllm-project/vllm/issues/45861)）：多个关联 PR 已完成/合入。

## 稳定性与回归

按严重程度排列：

1. **v0.27.0 引擎永久 stall**（[Issue #51921](https://github.com/vllm-project/vllm/issues/51921)）：4 节点 TP=4（GB10/aarch64）idle 后 shm_broadcast writer 饥饿，请求永远无法进入 scheduler。暂无 fix PR。
2. **MTP 投机解码非法内存访问**：
   - [Issue #40756](https://github.com/vllm-project/vllm/issues/40756)：Qwen3.6-27B-FP8 + MTP（k=5）长序列下 illegal memory access，36 评论。
   - [Issue #37035](https://github.com/vllm-project/vllm/issues/37035)：qwen3_next_mtp 负载下 `gdn_attn.py:237` 触发 cudaErrorIllegalAddress。
   - [Issue #51853](https://github.com/vllm-project/vllm/issues/51853)：DeepSeek V4 Pro MTP 在 MI325X（gfx942）上性能 erratic、明显未调优。
3. **Decode Context Parallelism 输出漂移/乱码**（[Issue #41623](https://github.com/vllm-project/vllm/issues/41623)）：v0.21.0 与最新 nightly 均复现，20 评论。
4. **投机解码 + Pipeline Parallel 输出错误**（[Issue #52071](https://github.com/vllm-project/vllm/issues/52071)）：`--no-async-scheduling` 下 PP=2/4/8 均复现，涉及两种投机方法和两个模型家族。
5. **升级回归**：v0.27.0 运行 DeepSeek V4 flash error（[#51758](https://github.com/vllm-project/vllm/issues/51758)）；Gemma4 在 Transformers 5.15.0 下启动失败（[#51744](https://github.com/vllm-project/vllm/issues/51744)）。
6. **混合精度 compressed-tensors checkpoint 无法加载**（[Issue #49893](https://github.com/vllm-project/vllm/issues/49893)）：draft_model 方式不支持 `config_groups` 混合精度格式。
7. **gpt-oss-120b 多轮对话 HarmonyError**（[Issue #23567](https://github.com/vllm-project/vllm/issues/23567)）：持续近一年，47 评论、22 👍，官方镜像 v0.10.x 起可复现。

**今日提交的 Bugfix PR：**

- [PR #51599](https://github.com/vllm-project/vllm/pull/51599)：修复 async Mamba align 模式 D2H 计数与 InputBatch row shifts 错位（关 #51571）。
- [PR #52232](https://github.com/vllm-project/vllm/pull/52232)：NIXL HMA receive 错误 fail-closed，避免远端失败被静默吞掉。
- [PR #52020](https://github.com/vllm-project/vllm/pull/52020)：拒绝空 JSON Schema `{}`，防止结构化输出进入 number 分支后无限生成。
- [PR #50620](https://github.com/vllm-project/vllm/pull/50620)：将 NIXL push/pull 传输模式纳入兼容性 hash，杜绝 push 与 pull connector 错误配对。

## 对应用开发者的意义

- **升级节奏**：v0.27.0 当前有多条未修复回归（DeepSeek V4、GB10 多节点 stall、Gemma4 + Transformers 5.15），生产环境建议暂缓升级或先做针对性压测。
- **投机解码是高风险选型**：MTP/DSD 在长序列、PP、DCP、动态 batch 组合下存在崩溃、乱码、吞吐悬崖（[#49548](https://github.com/vllm-project/vllm/issues/49548)、[#40756](https://github.com/vllm-project/vllm/issues/40756)）；Qwen3.5 原生 MTP 在部分 workload 上收益为负（[#47277](https://github.com/vllm-project/vllm/issues/47277)）。上线前务必用目标负载做 A/B 压测，而不是只看接受率。
- **分布式可靠性在改善**：NIXL connector 的 push/pull 校验（[#50620](https://github.com/vllm-project/vllm/pull/50620)）与 HMA fail-closed（[#52232](https://github.com/vllm-project/vllm/pull/52232)）将减少 KV offload / 多节点推理中的静默失败，对构建 LLM 网关和跨节点服务的团队是正向变化。
- **结构化输出更可预期**：空 JSON Schema 将被直接拒绝（[#52020](https://github.com/vllm-project/vllm/pull/52020)），API 层应提前做入参校验，避免请求被拖入无限数字生成。
- **新模型窗口期**：Muse Glimmer、Kimi-K3 DCP+DSpark、Gemma-4 FA4 正在落地；如应用层有相应模型需求，可提前规划验证环境并跟踪对应 PR 合入状态。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 动态日报 — 2026-08-14

## 今日速览

今日无新版本发布，社区精力集中在 **DeepSeek-V4 / Kimi K3 新模型适配**与 **AMD ROCm 性能优化** 上，多个 AMD 侧 DeepSeek-V4 优化 PR 处于活跃状态。稳定性方面，新增多起高影响 Bug（多节点 TP 死锁、DSpark CUDA Graph 几何不匹配、Diffusion 加载 OOM），同时有 5+ 个修复 PR 在合入流程中。CI 追踪面板显示 main 分支当前 **3 broken / 11 flaky / 671 recently fixed**（[#17050](https://github.com/sgl-project/sglang/issues/17050)）。

---

## 版本发布与破坏性变更

- 无正式 Release。需留意的行为变更/新增路径：
  - [#34776](https://github.com/sgl-project/sglang/pull/34776)（PR）：修复流式请求被 abort 时 `meta_info` 缺失 logprob 字段导致的 `KeyError`，客户端带 `logprobs` 参数流式请求将不再崩溃。
  - [#34488](https://github.com/sgl-project/sglang/pull/34488)（PR）：通过 SglExt 为 chat completions 新增 response-level 输入/输出 token ids，扩展了返回结构。
  - [#30984](https://github.com/sgl-project/sglang/pull/30984)（PR）：ROCm 7.2.4 Docker 升级至 Python 3.12 + PyTorch 2.11 + Triton 3.7（替换 AITER 固定版本），构建环境有较大变化。

---

## 新模型与硬件支持

- **[#33554](https://github.com/sgl-project/sglang/pull/33554)（PR）**：为 Nemotron 3.5（Nano v3）增加 DFlash / DSpark 投机解码支持和量化 recipe。
- **[#32607](https://github.com/sgl-project/sglang/issues/32607)（Issue）**：Kimi K3 Roadmap 持续更新，Day0 PR（#32541）与博客已就绪。
- **[#23602](https://github.com/sgl-project/sglang/issues/23602)（Issue）**：DeepSeek V4 Roadmap 多个子项已完成（Hopper W4A16、Marlin 等），功能落地中。
- **[#29328](https://github.com/sgl-project/sglang/pull/29328)（PR）**：AMD 侧新增 NVFP4 → MXFP4 在线重量化路径，支持 ModelOpt/Quark NVFP4 checkpoint 在 MI355x 上高效推理。
- **[#34432](https://github.com/sgl-project/sglang/pull/34432)（PR）**：AMD aiter 后端 DCP（Distributed Checkpoint）支持，1/N 系列补丁。

---

## 性能与优化

- **[#32577](https://github.com/sgl-project/sglang/pull/32577)（PR）**：AMD DeepSeek-V4 新增 aiter fused mHC post+pre 算子，跨 attention/MoE 边界调度，MI355X（gfx950）上 **+0.8%–1.8% output throughput**（concurrency 4–64）。
- **[#33313](https://github.com/sgl-project/sglang/pull/33313)（PR）**：AMD DeepSeek-V4 decode 路径将 `wo_a` bf16 batched GEMM 从 rocBLAS 路由至 aiter `batched_gemm_bf16`，减少 Tensile 调度开销。
- **[#33636](https://github.com/sgl-project/sglang/issues/33636)（Issue）**：DeepSeek V4 Perf Tracking（NVIDIA SM90/SM10X）持续更新，已集成 FlashInfer MLA，TRT-LLM attention 集成待完成。
- **[#33765](https://github.com/sgl-project/sglang/pull/33765)（PR）**：启动耗时 breakdown 增加 DeepGEMM JIT 与 FlashInfer autotune 归因，便于定位 `scheduler_e2e` 中的 slack。
- **[#34603](https://github.com/sgl-project/sglang/issues/34603)（Issue）**：讨论 trtllm allreduce fusion 是否应像 mnnvl 后端一样在 fp32 中累加，精度与性能权衡待定。
- **[#5979](https://github.com/sgl-project/sglang/issues/5979)（Issue）**：KV cache utilization Prometheus metrics 仍为 open feature request（对标 vLLM `gpu_cache_usage_perc`）。

---

## 稳定性与回归

### 严重（无修复 PR，需关注）
- **[#33289](https://github.com/sgl-project/sglang/issues/33289)**：DeepSeek-V4 + DSpark 多节点（2×DGX Spark）TP rank 发散死锁：一个 rank 卡在 NCCL proxy append（logits all-gather），对端 idle 在 request broadcast，间歇性发生且难复现。
- **[#34384](https://github.com/sgl-project/sglang/issues/34384)**：DSpark compact ragged CUDA Graph 对同一 token tier 使用了不兼容的 request-slot 几何关系，可能导致推理错误或非法访存。
- **[#34772](https://github.com/sgl-project/sglang/issues/34772)**（今日新增）：Diffusion 组件 native-fallback 路径会丢弃所有 CPU offload 决策（自动低内存策略与 `--text-encoder-cpu-offload`），在 8GB GPU 上直接 OOM。
- **[#34611](https://github.com/sgl-project/sglang/issues/34611)**：ROCm MI355 HiCache 在真实 agentic 负载下性能严重劣化，需定位是否为缓存策略或算子问题。

### 高（已有修复 PR 合入中）
- **[#34786](https://github.com/sgl-project/sglang/issues/34786)**（今日新增）：NEXTN TARGET_VERIFY 阶段 `mamba_next_track_idx` 为 None 导致 TypeError，影响 Qwen3.6-27B + NEXTN + lazy buffer 的混合架构模型。重复提交 [#34787](https://github.com/sgl-project/sglang/issues/34787) 已关闭。
- **[#34774](https://github.com/sgl-project/sglang/pull/34774)（PR）**：修复 `has_hf_quant_config()` 在本地目录缺少 `hf_quant_config.json` 时直接崩溃、导致 scheduler 初始化失败的问题。
- **[#34769](https://github.com/sgl-project/sglang/pull/34769)（PR）**：修复多模态 embedding 请求在 `_normalize_mm_content_hashes` 上因缺少 `mm_content_hashes` 属性的 AttributeError。
- **[#32340](https://github.com/sgl-project/sglang/pull/32340)（PR）**：修复 DeepSeek-V4 在 MI355X 上启用 shared-experts fusion（top-6）时的启动崩溃（两处独立问题：fp32 correction 与 topk/append 路径）。

### 中
- **[#34776](https://github.com/sgl-project/sglang/pull/34776)（PR）**：流式 logprobs 在请求 abort 时崩溃的修复（见版本发布部分）。
- **[#34781](https://github.com/sgl-project/sglang/pull/34781)（PR）**：Muse Glimmer 模型在 `tool_choice="required"` 或命名工具时被错误路由到 JSON-array parser，导致生成格式不正确；修复改为原生解析 ATEM tool calls。
- **[#31575](https://github.com/sgl-project/sglang/pull/31575)（PR）**：修复 `rope_theta` 缺失时的 `KeyError` 及 VL 模型 transformers-fallback 权重加载问题。

### 低 / 兼容性
- **[#30781](https://github.com/sgl-project/sglang/issues/30781)**：Rust model gateway（v0.3.2）拒绝 `type: "custom"` 的 tools 请求，与 Python `protocol.py` 不同步，影响 OpenAI Codex CLI 兼容性。
- **[#30595](https://github.com/sgl-project/sglang/issues/30595)**：DeepSeek-V4-Flash 配置（hidden_size=4096, moe_intermediate_size=2048）在 fused_moe_triton 中触发 hidden size mismatch 断言。
- **[#31310](https://github.com/sgl-project/sglang/issues/31310)**：H20 上 fa3 后端在 MLA page-size 64 时性能缓慢。

### 基础设施
- **[#17050](https://github.com/sgl-project/sglang/issues/17050)**：CI 失败追踪——当前 3 broken / 11 flaky，671 个历史问题已修复。
- **[#26340](https://github.com/sgl-project/sglang/issues/26340)**：CI 自动收集 CUDA coredump 的 tracker，累计 233 条自动上报事件，用于回归定位。

---

## 对应用开发者的意义

- **Agent / RAG 场景的 KV Cache 复用正在演进**：两个 RFC 同时推进——[#27574](https://github.com/sgl-project/sglang/issues/27574)（Programmatic KV Cache，允许上层 router 控制 KV 块）和 [#30928](https://github.com/sgl-project/sglang/issues/30928)（Position-Independent KV Cache Reuse，突破 RadixAttention 的字节偏移限制）。若落地，将显著提升共享 prompt 和多轮工具调用的 prefix cache 命中率。
- **OpenAI 兼容性注意**：Rust gateway 对 `type: "custom"` tool 的拒绝（[#30781](https://github.com/sgl-project/sglang/issues/30781)）会直接影响 Codex CLI 等客户端，升级 gateway 前需评估。
- **可观测性增强**：[#34488](https://github.com/sgl-project/sglang/pull/34488) 提供的 response-level token ids 便于应用精确统计 usage；[#5979](https://github.com/sgl-project/sglang/issues/5979) 若合入将暴露 KV cache 利用率，有助于容量规划。
- **流式稳定性提升**：[#34776](https://github.com/sgl-project/sglang/pull/34776) 修复了 abort 时流式 logprobs 的崩溃，对依赖流式 logprobs 的 Agent 链路影响直接。
- **新模型选型参考**：DeepSeek-V4（[#23602](https://github.com/sgl-project/sglang/issues/23602)）、Kimi K3（[#32607](https://github.com/sgl-project/sglang/issues/32607)）、Nemotron 3.5 Nano（[#33554](https://github.com/sgl-project/sglang/pull/33554)）均在积极适配中，但 DeepSeek-V4 存在多节点部署死锁与 shared-experts fusion 崩溃等已知问题（[#33289](https://github.com/sgl-project/sglang/issues/33289)、[#32340](https://github.com/sgl-project/sglang/pull/32340)），生产切换建议跟踪修复进展。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 动态日报 — 2026-08-14

## 1. 今日速览

今日发布节奏密集（b10411–b10423），核心方向是**异构后端增强**：OpenVINO 新增 Qwen3.5/MXFP4 支持并进行内存优化，Metal 补上 TQ2_0 量化，SYCL 引入 host pinned memory 以提升 Host-to-Device 传输效率。同时，**MTP/Speculative 解码链路持续完善**：自动检测 draft 模型类型、为 dflash/dspark 启用后端采样，使多模型加速方案在多后端上逐步走向开箱即用。社区侧，Vulkan/SYCL/OpenCL 仍有多个正确性回归在排查中，其中已有关闭的 stale issue 数量偏多，需关注。

---

## 2. 版本发布与破坏性变更

**新版本（按时间倒序）**

- **b10423** — `common: apply CPU parameters across tools (#27026)`：CPU 参数（如线程/亲和性）跨工具统一生效，行为对齐。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10423
- **b10419** — OpenVINO 后端大版本更新：支持 Qwen3.5、MXFP4、FILL 算子、内存优化，并启用 test-recurrent-state-rollback。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10419
- **b10418** — SYCL 支持 host pinned memory，改善 Host-to-Device 内存访问性能，并修复相关线程安全问题。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10418
- **b10417** — 修复 LFM2 tool call 参数名前缀歧义（chat 模板）。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10417
- **b10416** — **行为变更**：`index.html` 改为 no-cache 服务。此前该文件与带 hash 的资源一样被设为 `immutable`，但其文件名稳定且内容每次构建都会变化，导致 Web UI 被浏览器缓存钉在旧版本。现在通过 ETag 重新验证，升级 server 后 UI 不再"卡死"。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10416
- **b10415** — spec: 自动检测 MTP draft 模型类型（配合 b10413 本地 GGUF 场景）。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10415
- **b10414** — Metal 新增 TQ2_0（ternary 2-bit）类型支持，并对 mul_mv kernel 做整数/浮点指令优化。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10414
- **b10413** — 从 draft GGUF 元数据自动检测 spec 类型，覆盖本地文件路径（此前仅检查 HF repo sidecar）。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10413
- **b10412** — spec: 为 dflash 与 dspark 启用后端采样，p_min > 0 时增加保护逻辑。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10412
- **b10411** — ggml-cpu: 向量化 flash-attention V-cache F16→F32 转换。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10411

**迁移注意事项**

- b10416 的 no-cache 策略会带来 UI 首次加载的轻微性能开销，但消除了"内容已更新、浏览器仍显示旧版"的类问题。
- b10413/b10415 后，`--spec-type` 在本地 draft 模型场景下大概率无需手动指定；若此前依赖手动配置，升级后请验证行为是否符合预期。

---

## 3. 新模型与硬件支持

**后端/量化**

- **OpenVINO**：新增 Qwen3.5 支持、MXFP4 格式支持（b10419）。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10419
- **Metal**：新增 TQ2_0 三元量化支持（b10414）。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10414
- **SYCL**：新增 host pinned memory 支持，提升 Host-to-Device 传输性能（b10418）。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10418

**新架构/模型（PR，尚在合入流程）**

- **Kimi-K3 文本模型**（#26185）：Hybrid KDA + MLA 注意力，含 cross-layer residual attention、latent MoE、situ activation 等新结构。  
  https://github.com/ggml-org/llama.cpp/pull/26185
- **MiniMax-Text-01 / MiniMax-M1**（#27018）：基于 lightning attention 的架构支持。  
  https://github.com/ggml-org/llama.cpp/pull/27018
- **LFM2/LFM2MOE tensor split**（#26993）：补上 `--split-mode tensor` 支持。  
  https://github.com/ggml-org/llama.cpp/pull/26993
- **EAGLE-3.1 转换支持**（#27040）：读取嵌套在 `eagle_config` 下的 aux layer ids（旧代码只查顶层）。  
  https://github.com/ggml-org/llama.cpp/pull/27040
- **CUDA SM120 CUTLASS MoE prefill**（#26704，实验性）：支持 GPT-OSS MXFP4（fused W13）与 Qwen3.6-35B-A3B NVFP4，默认关闭。  
  https://github.com/ggml-org/llama.cpp/pull/26704

---

## 4. 性能与优化

**已合入/已发布**

- **OpenVINO 内存优化**（b10419）：支持 set rows 相关优化，官方标记 memory optimization；同时重构 recurrent state rollback 测试。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10419
- **SYCL host pinned memory**（b10418）：减少 Host-to-Device 拷贝开销，适合 prefill/embedding 等 Host 侧密集场景。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10418
- **CPU flash-attention V-cache 向量化**（b10411）：F16→F32 转换改为 SIMD 实现，利好纯 CPU 推理的 prefill 阶段。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10411
- **Metal TQ2_0 mul_mv 优化**（b10414）：float ops 替代 integer ops，预计算 scale 参数，降低三元权重的 mat-vec 延迟。  
  https://github.com/ggml-org/llama.cpp/releases/tag/b10414

**进行中（PR）**

- **SYCL FFN 算子融合**（#26779）：将 dense FFN 的 `mul_mat(gate) + mul_mat(up) + GLU` 融合为单个 q4_K reorder mat-vec。Arc Pro B70 上 tg128 已有实测数据。  
  https://github.com/ggml-org/llama.cpp/pull/26779
- **Windows 混合 CPU 线程调度优化**（#27033）：在 Windows 上过滤 E-core、通过 `GetLogicalProcessorInformation` 查询拓扑，优化大小核推理调度。  
  https://github.com/ggml-org/llama.cpp/pull/27033
- **Jinja 模板二次复杂度修复**（#27034）：`gather_string_parts` 中的 `vector::erase` 循环与 `string::append` 返回值均存在二次复杂度问题，PR 已定位根因。  
  https://github.com/ggml-org/llama.cpp/pull/27034
- **SYCL 编译警告清理**（#26713）：消除 icx/icpx 下 `GGML_SYCL_F16`/`GGML_SYCL_DNN` 各开关组合的编译警告。  
  https://github.com/ggml-org/llama.cpp/pull/26713

---

## 5. 稳定性与回归

**高严重度（崩溃/设备丢失）**

- **Vulkan `vk::DeviceLostError`**（#25664）：Strix Halo（RADV）上运行 DeepSeek-V4-Flash 数轮对话后设备丢失。尚无修复 PR。  
  https://github.com/ggml-org/llama.cpp/issues/25664
- **ROCm gfx1151 RPC worker 崩溃**（#26746）：DeepSeek V4 prefill 超过 4096 tokens 后，RPC worker 在 `GGML_OP_TOP_K` 中崩溃。无修复 PR。  
  https://github.com/ggml-org/llama.cpp/issues/26746
- **Gemma 4 31B MTP + Vulkan 崩溃**（#24492）：draft-mtp 在 Vulkan 后端报 "pre-allocated tensor cannot run operation NONE"。无修复 PR。  
  https://github.com/ggml-org/llama.cpp/issues/24492
- **CUDA sm_120（RTX 5090）Q8_0 共享内存越界**（#24399，已关闭）：`mul_mat_q<Q8_0,128>` MMA write-back epilogue 存在 out-of-range store，移除 Q8_0 权重可规避。已标记 stale。  
  https://github.com/ggml-org/llama.cpp/issues/24399

**中严重度（错误输出/正确性）**

- **SYCL 第二次 prompt 输出乱码**（#26845）：新报告，Intel Arc Pro B60 + KAT-Coder-V2.5，第二次 prompt 即产生 garbage。同类的 #21589（Qwen3.5）已关闭且标记 stale，说明该问题可能长期未根除。  
  https://github.com/ggml-org/llama.cpp/issues/26845
- **DFlash drafter 绑定失败**（#26894）：Muse-Glimmer-30B 官方 GGUF 将 `attention.sliding_window_pattern` 编码为 array，导致 `vector::_M_range_check` 崩溃。  
  https://github.com/ggml-org/llama.cpp/issues/26894
- **DeepSeek-V4-Flash 长对话退化**（#26694）：Metal 后端（M3 Ultra）长 agentic chat 中模型退化为重复输出并泄漏特殊 token。无修复 PR。  
  https://github.com/ggml-org/llama.cpp/issues/26694
- **Gemma 4 SWA 遗忘关键细节**（#25751）：CUDA 后端下 sliding window attention 对长上下文关键信息丢失。无修复 PR。  
  https://github.com/ggml-org/llama.cpp/issues/25751

**低严重度/功能性问题**

- **KV cache 保存对 vision 模型无效**（#19466）：`/slots/3?action=save` 在 vision-enabled 模型上不工作，已开放 6 个月，38 条评论。  
  https://github.com/ggml-org/llama.cpp/issues/19466
- **ROCm 加载大模型卡住**（#19482）：Radeon 8060S（gfx1151）上大模型加载 hang。  
  https://github.com/ggml-org/llama.cpp/issues/19482
- **Vulkan 性能悬崖**（#24066）：近期构建在 RX 6600 上性能下降；另一条 #25356 报告 MoE 模型在 B=9 时 batched decode 吞吐从 122.5 跌至 82.9 t/s，定位与 MMV dispatch 的固定 8-token 阈值有关。  
  https://github.com/ggml-org/llama.cpp/issues/24066  
  https://github.com/ggml-org/llama.cpp/issues/25356

**已有 Fix PR 的进展**

- **CUDA 重复 expert id 压缩修复**（#26294）：修复 #24591 中 `mul_mat_id` 对 top-k 重复 expert 的压缩逻辑错误。  
  https://github.com/ggml-org/llama.cpp/pull/26294
- **Hexagon FA 非确定性问题**（#27042）：修复 FLASH_ATTN_EXT 结果不确定（#26759），同时精简 VTCM 中 scale 矩阵 `D` 的占用。  
  https://github.com/ggml-org/llama.cpp/pull/27042
- **OpenCL flash-attention WAR 竞争**（#26434）：修复通用 FA tile 内核中 `k_start` 循环顶部缺少 barrier 的写后读竞争。  
  https://github.com/ggml-org/llama.cpp/pull/26434
- **CUDA MMQ ids 路径 tail padding 尺寸错误**（#27044）：MoE gate/up 投影在特定形状下可能越界，按 `ne11_flat` 而非 `ne11` 计算 padding。  
  https://github.com/ggml-org/llama.cpp/pull/27044

---

## 6. 对应用开发者的意义

- **MTP/Speculative 加速门槛显著降低**：b10413/b10415 实现从 GGUF 元数据自动识别 spec 类型，b10412 为 dflash/dspark 启用后端采样，b10419 将 OpenVINO 纳入支持矩阵。在 DeepSeek-V4-Flash、Gemma 4 31B 等带 MTP 的模型上，Agent 应用可更简单地叠加 draft 模型加速，减少手动 `--spec-type` 配置与试错成本。
- **Server 运维可观测性改善**：#27041（PR）允许在 `llama_decode()` 执行期间访问 `/metrics` 和 `/slots`，修复了 #24866 中监控接口被 decode 阻塞的问题。对生产环境的实时监控与自动扩缩容是实质利好。
- **Web UI 缓存问题修复**：b10416 解决了 index.html 被浏览器永久缓存导致 UI 与后端版本错配的问题。升级后建议让用户硬刷新一次，之后 WebUI 将始终与 server 版本同步。
- **后端矩阵仍需谨慎选型**：Vulkan 在 RDNA3/Strix Halo 上仍有 DeviceLost 与性能悬崖，SYCL 二次 prompt 乱码问题反复出现。若生产环境依赖这些后端且运行 DeepSeek-V4/Qwen3.5 等新模型，建议先做长会话压力测试再升级。
- **模型支持跟进方向**：Kimi-K3、MiniMax-M1 等新架构在 PR 阶段，若业务依赖这些模型，可提前关注合入状态；LFM2 tensor split 支持意味着多卡部署 LFM2 的应用可以省去手工切层的 workaround。

---

*数据来源：github.com/ggml-org/llama.cpp releases/issues/PRs（更新于 2026-08-13 至 2026-08-14）*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 动态日报 — 2026-08-14

## 今日速览
- 过去 24 小时无新版本发布，但有多项重要修复和功能集成处于活跃状态。
- MLX 后端结构化输出问题成为焦点：多个 PR（#17690、#17697、#17232）尝试解决“请求 JSON Schema 被静默忽略”的缺陷。
- AMD Strix Halo VRAM 检测回归已有针对性修复 PR（#17685），但 Docker 用户升级后无法加载模型的严重回归（#17285）仍未解决。

## 新模型与硬件支持
- **Nemotron H MLX 视觉支持（PR #17714）**：实现 RADIO 视觉编码器和投影器，加入动态分辨率预处理、占位符展开、MTP offsets 等能力，为 MLX 后端增加视觉模型支持。  
  https://github.com/ollama/ollama/pull/17714
- **`ollama launch dsh`：DeepSeek Harness 集成（PR #17733）**：新增 `dsh`/`deepseek-harness` 启动器，支持本地与云模型，可作为 Agent 开发新入口。  
  https://github.com/ollama/ollama/pull/17733
- **`ollama launch muse`：Meta Muse Code 集成（PR #17594）**：支持 Muse Code CLI，自动写入其所需 settings.json，绕过远端 catalog 限制。  
  https://github.com/ollama/ollama/pull/17594
- **社区请求 Qwen3.8 云模型（Issue #17720）**：用户询问 Pro/Max 账号何时支持 Qwen3.8-2.4T-A95B-FP8。  
  https://github.com/ollama/ollama/issues/17720

## 性能与优化
- **Windows-on-Arm CPU 构建优化（PR #17654）**：为 CPU runner 设置 `GGML_CPU_ARM_ARCH`，避免回退到 baseline armv8-a（无任何点积/矩阵指令），可显著提升 WoA 设备上的 token 吞吐。  
  https://github.com/ollama/ollama/pull/17654
- **后端加载规划集中化（PR #17165）**：合并调度器、请求选项和 runner 启动时的显存策略，消除不同阶段估算不一致问题，为后续显存预测精确化打基础。  
  https://github.com/ollama/ollama/pull/17165
- **MLX 生成预算不再无限增长（PR #17494）**：修复 `num_ctx` 被丢弃导致 open-ended 请求只受 checkpoint 最大位置限制的问题，避免大模型上无响应挂起。  
  https://github.com/ollama/ollama/pull/17494
- **下载 99% 时速度骤降（Issue #1736，已关闭）**：老问题，最终仍无公开根因；当前版本下载器行为无变化。  
  https://github.com/ollama/ollama/issues/1736

## 稳定性与回归
按严重程度排列：

- **Docker 升级后模型无法加载（#17285，无修复 PR）**：用户从 0.24.0 升级到 0.30.0+ 后完全无法加载模型，必须回退。影响面大，值得关注。  
  https://github.com/ollama/ollama/issues/17285
- **llama3.3:70b 在 v0.32.2+ 生成乱码（#17379）**：升级后模型只输出 junk tokens，已确认非提示词或上下文导致，目前无修复。  
  https://github.com/ollama/ollama/issues/17379
- **AMD Strix Halo VRAM 检测回归（#16462，有 PR #17685）**：0.30.0-rc0-rocm 起容器部署只报告 2GB VRAM；修复 PR 引入 `OLLAMA_GPU_MEMORY` 与 `SmallCarveOutIGPU` 处理，仍在 open。  
  https://github.com/ollama/ollama/issues/16462  
  https://github.com/ollama/ollama/pull/17685
- **Nemotron3.5-lightning:30b 在 AMD AI395+ 上卡住（#17692）**：thinking 阶段若干 token 后停止响应，CTRL+C 才能恢复，暂未定位。  
  https://github.com/ollama/ollama/issues/17692
- **接近 context 限制时 CPU 单核 100% 崩溃（#13461）**：Vulkan 后端，持续已久的稳定性问题。  
  https://github.com/ollama/ollama/issues/13461
- **MLX 结构化输出被静默忽略（#16563，修复中）**：`response_format` 在 MLX runner 中不生效；PR #17232 先改为直接拒绝，PR #17690/#17697 则实现真正的 grammar/JSON Schema 采样支持。  
  https://github.com/ollama/ollama/issues/16563  
  https://github.com/ollama/ollama/pull/17232  
  https://github.com/ollama/ollama/pull/17690  
  https://github.com/ollama/ollama/pull/17697
- **Muse Glimmer MLX 泄漏 channel token 并忽略 schema（#17684，已关闭）**：修复 PR #17732 同步了 Jinja 参考模板与 Go renderer 的 reasoning 处理。  
  https://github.com/ollama/ollama/issues/17684  
  https://github.com/ollama/ollama/pull/17732
- **`/api/chat` 静默丢弃音频字段（#17730）**：`gemma4:e4b` 对 `audios`/`audio` 字段直接忽略并返回 200，模型会误答“未收到音频”。  
  https://github.com/ollama/ollama/issues/17730
- **`ollama launch claude` 上下文窗口后缀问题（#17584）**：拒绝 Claude Code 文档化的 `[1m]` 后缀，且无法为云模型设置实际 context window。  
  https://github.com/ollama/ollama/issues/17584
- **Claude Code 不识别 `kimi-k2.7-code:cloud`（#17717）**：回退到保守的 200k auto-compact 窗口，可能影响长上下文任务。  
  https://github.com/ollama/ollama/issues/17717
- **Mac 上“Restart to update”无效（#11972）**：非管理员账户更新失败后流程挂起。  
  https://github.com/ollama/ollama/issues/11972
- **`WriteWithBackup` 文件写入碰撞（#17713）**：同一秒内多次写入会使用相同备份路径，导致数据覆盖风险。  
  https://github.com/ollama/ollama/issues/17713

## 对应用开发者的意义
- **MLX 用户暂时不要依赖结构化输出**：当前 `response_format` 在 MLX 模型上会被忽略或可能返回未约束文本；若你的 Agent 依赖 JSON Schema，建议等待上述 PR 合入，或使用 GGUF 后端。  
- **OpenAI 兼容 `/v1/models` 将增加 `context_length`（PR #17422）**：客户端无需再通过模型名推断窗口大小，对需要动态规划上下文的应用是直接利好。  
  https://github.com/ollama/ollama/pull/17422
- **Launch 生态快速扩张**：新增 DeepSeek Harness 和 Muse Code 两种 Agent CLI 集成；但 Claude Code 的上下文窗口配置仍存在缺陷（#17584、#17717），请谨慎处理 200k 以上窗口的云模型。  
- **云模型列表 API 曾短暂过期（#17725，已关闭）**：如果你的应用从 `https://ollama.com/v1/models` 拉取模型清单，建议加入容错或手动覆盖。  
  https://github.com/ollama/ollama/issues/17725
- **音频类应用需留意 #17730**：即使请求 200，音频内容也可能被静默丢弃，需自行校验模型输入是否真正收到媒体数据。  
  https://github.com/ollama/ollama/issues/17730

---
数据来源：ollama/ollama GitHub Issues/PRs（更新于 2026-08-13/14）

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

## 今日速览

- LiteLLM 今日主要推进**访问组/团队/密钥权限同步修复**（PR #36819、#36825、#36843）和 **MCP 多 worker OAuth 会话可靠性**（PR #36844），另有多个模型目录与实时音频能力 PR 活跃。
- 计费/成本侧仍需警惕：Azure GPT-5.6 Terra/Luna 成本映射错误（Issue #36192）、共享虚拟密钥下 `end_user` 被污染（Issue #31441）、Tag 预算永不重置（Issue #27481）三个问题本周仍无对应修复 PR。

## 版本发布与破坏性变更

- **v1.98.0-dev.2 发布**：本次 Release 仅包含 cosign Docker 镜像签名验证说明，未观察到明确的破坏性变更。该版本为 dev 预发布，生产环境建议等待 stable。[查看 Release](https://github.com/BerriAI/litellm/releases/tag/v1.98.0-dev.2)

## 新模型与硬件支持

- [#36849](https://github.com/BerriAI/litellm/pull/36849) 新增 `gemini-3.1-flash-lite-image` 模型目录条目（含 `gemini/`、`vertex_ai/` 前缀），修复此前图片调用计费为 $0 的问题。
- [#27932](https://github.com/BerriAI/litellm/pull/27932) 添加 Azure AI Foundry **Grok 4.3** 模型元数据，含 200k 上下文、缓存输入定价与能力标志（已关闭）。
- [#31915](https://github.com/BerriAI/litellm/pull/31915) 支持 **Gemini 3.1 Flash TTS**。
- [#35600](https://github.com/BerriAI/litellm/pull/35600) 为最新 OpenAI 音频模型补齐 Realtime 翻译 WebSocket/WebRTC 代理路径与 SDK 流式支持。
- [#30782](https://github.com/BerriAI/litellm/pull/30782) 新增 Veo 3.1 Lite 模型元数据。
- [#30856](https://github.com/BerriAI/litellm/pull/30856) 新增 Vertex AI Lyria 模型支持。
- [#28006](https://github.com/BerriAI/litellm/issues/28006) 社区请求将 Telnyx 推理 API 模型价格加入 `model_prices_and_context_window.json`。

## 性能与优化

- [#36764](https://github.com/BerriAI/litellm/pull/36764) Guardrail（Noma v2）负载优化：不再重复发送同一会话，图片请求冗余字节减少约 **95%**，同时降低代理序列化开销。
- [#36714](https://github.com/BerriAI/litellm/pull/36714) 修复批处理成本轮询页被不可计费批次饿死的问题，避免新批次长期停留在无成本状态。
- [#31725](https://github.com/BerriAI/litellm/pull/31725) 成本计算支持 `off_peak_pricing` 非高峰时段定价，按 `hours_utc` 窗口应用折扣，降低日志成本统计误差。
- [#36829](https://github.com/BerriAI/litellm/pull/36829) 修复 PTU 部署双重计费：存储 PTU 配置时将所有定价字段写为 0，不再按 token 叠加公共成本映射费率。

## 稳定性与回归

按严重程度排列：

**严重（影响计费/权限边界）**

- [#36192](https://github.com/BerriAI/litellm/issues/36192) Azure GPT-5.6 Terra/Luna 成本行沿用了 OpenAI 降价后的价格，Azure 实际未降价，账单金额不准确。
- [#31441](https://github.com/BerriAI/litellm/issues/31441) v1.87.0 回归：共享虚拟密钥上多个请求的 `end_user` 被固定为首个请求的 `user`，SpendLogs 多租户归因错误。
- [#27481](https://github.com/BerriAI/litellm/issues/27481) 带 `budget_duration` 的 Tag 预算从不重置，超限后标签被永久阻止。
- [#27461](https://github.com/BerriAI/litellm/issues/27461) 企业版 Control Plane 中 MCP 服务器管理路由被误分类为 LLM API 路由，无法在管理面操作（无 fix PR）。

**中等（功能正确性）**

- [#36566](https://github.com/BerriAI/litellm/issues/36566) `litellm_content_filter` 评估未出现在请求日志与 Guardrails Monitor。
- [#32474](https://github.com/BerriAI/litellm/issues/32474) 已设置预算的 internal user 无法在 UI 中重置为 Unlimited。
- [#27926](https://github.com/BerriAI/litellm/issues/27926) `/metrics` 端点未允许 unauthenticated 访问，反代外部暴露时需要留意。
- [#27113](https://github.com/BerriAI/litellm/issues/27113) `/v1/messages/count_tokens` 忽略 Vertex AI Claude 模型的 system prompt，token 统计偏低。
- [#36765](https://github.com/BerriAI/litellm/issues/36765) OpenAPI→MCP 工具生成时，`$ref` 请求体 schema 被丢弃（FastAPI/Pydantic 生成 spec 的典型场景）。
- [#36366](https://github.com/BerriAI/litellm/issues/36366) Azure Responses 路径将空的 namespace 描述从 `additional_tools` 转发给模型（Codex CLI 可触发）。
- [#24549](https://github.com/BerriAI/litellm/issues/24549) Xiaomi MiMo 模型的 `output_config` 参数导致 Claude Code 的 `AsyncCompletions.create()` 失败。
- [#24659](https://github.com/BerriAI/litellm/issues/24659) Azure OpenAI Realtime WebRTC ephemeral token 流程无法建立连接。
- [#27078](https://github.com/BerriAI/litellm/issues/27078) GoogleGenAI 适配器对同一函数的多次 functionCall 生成重复 `tool_call_id`。
- [#27186](https://github.com/BerriAI/litellm/issues/27186) responses→chat 流式转换未处理 `response.incomplete`，导致 `content_filters` 被丢弃。
- [#27294](https://github.com/BerriAI/litellm/issues/27294) `org_admin` 调用 `POST /team/update` 返回 401。
- [#27333](https://github.com/BerriAI/litellm/issues/27333) `/v1/responses` 跨 provider handoff 时重放 `chatcmpl-*` 消息 ID。
- [#27490](https://github.com/BerriAI/litellm/issues/27490) Anthropic strict tool use 将 `strict` 标志放进 `input_schema` 内部而非 tool 顶层。
- [#27536](https://github.com/BerriAI/litellm/issues/27536) JWT RBAC `role_permissions.models` 不支持通配符（如 `bedrock-claude-*`）。
- [#27746](https://github.com/BerriAI/litellm/issues/27746) Uvicorn 依赖版本过低，需要再次放宽 pin 范围。

**已有 fix PR（未合入）**

- [#36819](https://github.com/BerriAI/litellm/pull/36819) 团队删除时清理悬空团队引用与缓存，防止已删除团队继续鉴权。
- [#36825](https://github.com/BerriAI/litellm/pull/36825) 从团队写路径同步 `assigned_team_ids`，修复 Access Group 残留授权。
- [#36840](https://github.com/BerriAI/litellm/pull/36840) 修复虚拟密钥上反选 MCP 服务器不生效、旧 tool 白名单保留授权的问题。
- [#36843](https://github.com/BerriAI/litellm/pull/36843) 从密钥写路径同步 `assigned_key_ids`，创建/轮换/删除密钥时正确维护 Access Group 关联。
- [#36844](https://github.com/BerriAI/litellm/pull/36844) 将 MCP OAuth 待定 server 存为 DB 草稿，解决多 worker 下 Authorize Fetch Token 随机 404。

**已关闭（已处理）**

- [#20933](https://github.com/BerriAI/litellm/issues/20933) Python 3.14 下 uvloop 不兼容导致代理无法启动，已关闭。
- [#27388](https://github.com/BerriAI/litellm/issues/27388) Arize Phoenix 回调 span 未导出，已关闭。
- [#27384](https://github.com/BerriAI/litellm/issues/27384) UI 中 `vllm` 与 `Vllm` 重复显示，已关闭。
- [#26618](https://github.com/BerriAI/litellm/issues/26618) 在 Azure Foundry 中支持 Fireworks AI 模型的增强请求，已关闭。

## 对应用开发者的意义

- **权限收敛终于可靠**：若你使用 Access Group 管理模型授权，涉及团队删除、密钥轮换、MCP server 反选等场景，建议关注 #36819、#36825、#36840、#36843 这批 PR 合入后进行一次缓存清理，避免脏授权残留。
- **多租户计费需要规避已知缺陷**：共享虚拟密钥下 `end_user` 归因错误（#31441）与 Azure GPT-5.6 成本映射偏差（#36192）会直接影响用量统计与账单展示，依赖埋点做计费的团队需人工修正或等待修复。
- **Tag 预算不要依赖自动重置**：`budget_duration` 当前不重置 `LiteLLM_TagTable.spend`（#27481），按 Tag 限流/配额的需求请通过外部定时任务兜底。
- **MCP 工具生成有坑**：FastAPI/Pydantic 风格的 OpenAPI spec 使用 `$ref` 时，MCP 工具 inputSchema 会丢失请求体字段（#36765），LLM 将无法获得正确入参信息，建议先对关键 spec 做手工 schema 校验。
- **新模型可直接接入**：Gemini 3.1 Flash Lite Image、Grok 4.3、Gemini 3.1 Flash TTS 等模型在对应 PR 合入后可通过 `gemini/*`、`vertex_ai/*`、`azure/*` 前缀立即调用。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 动态日报 — 2026-08-14

## 1. 今日速览

**Unsloth 发布 v0.1.702-beta，正式推出跨平台桌面应用 Unsloth Desktop，并同步为外部 provider 增加工具调用/网络搜索能力。** 这是 Unsloth 从 Python 库走向完整本地 AI 训练/推理产品的重要里程碑。但当前社区焦点集中在桌面应用初期的安装与硬件兼容性问题上——Windows/AMD、macOS Metal、以及 MiniMax-H3 等新模型支持均出现大量报障，建议生产用户暂以稳定版本或 Python 包方式使用核心训练功能。

---

## 2. 版本发布与破坏性变更

### v0.1.702-beta — Unsloth Desktop 发布
- **发布链接**: https://github.com/unslothai/unsloth/releases
- **核心变化**:
  - 推出 **Unsloth Desktop**，首个本地运行/训练 AI 模型的桌面应用，支持 Windows、macOS、Linux，集成研究、导出、部署全流程。
  - 为所有外部 provider 增加 **工具调用 / 网络搜索** 支持。
- **注意 / 迁移提示**:
  - README 中的 Windows 下载链接仍硬编码指向 `0.1.701-beta` 资产（Issue [#8688](https://github.com/unslothai/unsloth/issues/8688)），社区已建议维护自动更新的"latest"链接，否则 README 每次发版均需手动更新。
  - 桌面版安装过程在 Windows（EDR 拦截、2 小时超时、AMD GPU）和 macOS（二次启动失败）上存在多处问题，详见第 5 部分。

---

## 3. 新模型与硬件支持

### 模型
- **MiniMax-H3**（视频生成）：
  - 桌面版依赖的 `stable-diffusion.cpp` 构建版本过旧，导致加载失败（Issue [#8507](https://github.com/unslothai/unsloth/issues/8507)，已关闭，疑似已修复）。
  - 视频生成实际运行仍会崩溃：Qwen3VL 文本编码器权重加载失败，`sd-cli exited -6`（Issue [#8666](https://github.com/unslothai/unsloth/issues/8666)，打开中）。
- **DeepReinforce Ornith-1.0**：社区持续要求支持（Issue [#6721](https://github.com/unslothai/unsloth/issues/6721)，打开中，👍 23），仍无明确排期。

### 硬件/后端
- **AMD / ROCm**：
  - RX 5700XT 在桌面版中无法被识别（Issue [#8529](https://github.com/unslothai/unsloth/issues/8529)）。
  - 多 GPU 自动选择时，按空闲内存启发式会错误选中 iGPU 导致崩溃（Issue [#7624](https://github.com/unslothai/unsloth/issues/7624)，已关闭，需禁用 iGPU 规避）。
  - Windows AMD 上 `torch.compile` 由于缺少 MSVC 环境导致 `stdlib.h` 找不到——已有 PR [#7704](https://github.com/unslothai/unsloth/pull/7704) 修复 clang-cl 工具链问题（打开中）。
- **MLX (Apple Silicon)**：
  - 安装的 MLX 模型不出现在 `/v1/models` 中，API 自动切换模型无法加载（Issue [#8748](https://github.com/unslothai/unsloth/issues/8748)，打开中）。

---

## 4. 性能与优化

### 已落地 / 进行中的优化
- **Streaming UI 性能**（PR [#8750](https://github.com/unslothai/unsloth/pull/8750)）：修复长流式回复在桌面端导致 CPU 饱和、DOM 过大、界面卡死的问题。通过移除冗余动画 DOM 节点 + 增量式 Markdown 解析实现，渲染保持与浏览器绘制同步。对长上下文 Agent 对话的 UI 层体验影响明显。
- **Agent 工具效率**（PR [#8753](https://github.com/unslothai/unsloth/pull/8753)）：Studio agent 此前依赖 `cat` 命令整体重写文件，大文件场景在 64K-94K 上下文内常常失败。新增 `edit_file` 工具后，可以只做局部编辑，显著降低 token 消耗与上下文压力。
- **调试效率**（PR [#8690](https://github.com/unslothai/unsloth/pull/8690)）：桌面版在 `Settings > Debugging` 中提供应用内日志读取，避免过去只能看到"llamacpp failed to start"这类无信息量报错。

> 无具体吞吐/显存数字的量化数据在本日报告期出现。

---

## 5. 稳定性与回归

按严重程度排序（标注是否已有修复 PR）：

### 严重 — 安装失败，产品不可用
- **Windows 桌面版安装超时**（Issue [#8698](https://github.com/unslothai/unsloth/issues/8698)）：下载 cu126 PyTorch 超过 2 小时被系统杀死，且无进度输出。打开中，**无修复 PR**。
- **Windows 安装失败（通用）**（Issue [#8546](https://github.com/unslothai/unsloth/issues/8546)）：安装过程无法正常结束，已拆分为多个独立 bug 跟踪。打开中。
- **macOS M4 二次启动失败**（Issue [#8610](https://github.com/unslothai/unsloth/issues/8610)）：首次启动正常，第二次启动报错。打开中，**无 PR**。

### 严重 — 运行时崩溃 / 认证失败
- **Claude Code 401 认证失败**（Issue [#8663](https://github.com/unslothai/unsloth/issues/8663)，已关闭）：Claude Code 按 Anthropic 惯例通过 `x-api-key` 头发送密钥，而 Unsloth API 只读 `Authorization: Bearer`，导致所有请求 401。产品侧存在 API 兼容性缺口。
- **macOS M4 本地 GGUF 加载崩溃**（Issue [#8566](https://github.com/unslothai/unsloth/issues/8566)）：`llama-server` 无法启动；同时空闲时 RAM 占用异常（16GB 统一内存机型）。打开中。

### 高 — 功能正确性
- **GGUF 导出必须先生成完整 16bit 权重**（Issue [#8717](https://github.com/unslothai/unsloth/issues/8717)）：用户训练完需先等待下载 40GB 的 16bit 中间文件才能转 GGUF，社区反馈强烈，要求恢复直接导出。打开中。
- **JSONL 导出缺少末尾换行**（Issue [#8733](https://github.com/unslothai/unsloth/issues/8733)，已关闭）：导致 `cat` 拼接多个导出文件时记录粘连。已有修复 PR [#8759](https://github.com/unslothai/unsloth/pull/8759)（打开中）。
- **MLX 模型 API 加载失败**（Issue [#8748](https://github.com/unslothai/unsloth/issues/8748)）：见第 3 部分。

### 已修复 / 回归修复
- **Backend CI 全红**（PR [#8758](https://github.com/unslothai/unsloth/pull/8758)）：修复 4 个导致 pytest 收集失败的测试代码问题，产品行为不受影响；配套先行修复见 PR [#8740](https://github.com/unslothai/unsloth/pull/8740)。
- **Windows + AMD 安装失败**（Issue [#8508](https://github.com/unslothai/unsloth/issues/8508)，已关闭，标记为 fixed）。
- **图像/视频后端空闲占用显存**（PR [#8672](https://github.com/unslothai/unsloth/pull/8672)，已合并）：为 diffusion 和视频后端增加 idle auto-unload，避免生成一次后显存被长期占用数 GB。

---

## 6. 对应用开发者的意义

1. **本地 Agent 能力升级**：v0.1.702-beta 为外部 provider 增加了工具调用/网络搜索，加上原有的 Studio Agent/Deep Research 能力，**开发者现在可以在完全本地的 Unsloth Studio 中构建具备工具调用能力的 Agent 原型**，无需依赖云端 API。但注意认证按 `Bearer` 方式，Claude Code 等 `x-api-key` 客户端暂不兼容（Issue [#8663](https://github.com/unslothai/unsloth/issues/8663)）。

2. **API 兼容性仍在打磨期**：已出现 `/v1/models` 缺少 MLX 模型（Issue [#8748](https://github.com/unslothai/unsloth/issues/8748)）、请求测速信息不完整（Issue [#8528](https://github.com/unslothai/unsloth/issues/8528)）、API 无法监听 `0.0.0.0` 只能通过 Cloudflare 隧道暴露（Issue [#8578](https://github.com/unslothai/unsloth/issues/8578)）等问题。**若你的应用依赖 OpenAI 兼容 API 做动态模型切换，建议先充分验证再升级。**

3. **桌面版安装风险较高**：Windows（EDR/超时/AMD）与 macOS（二次启动）的安装/启动问题在本日仍高度活跃。**对稳定性敏感的生产任务，建议锁定使用 Python 包/CLI 方式，而非桌面应用**，等待 1-2 个补丁版本后再迁移。

4. **Agent 上下文优化方向提示**：PR [#8753](https://github.com/unslothai/unsloth/pull/8753) 中暴露的"`cat` 整体重写大文件导致上下文溢出"是 Agent 开发的普遍痛点。自建 Agent 时，应优先实现**局部编辑工具**（类似 `edit_file`），而非让模型直接重写整个文件，可有效降低 token 使用并提升长任务完成率。

5. **数据导出规范**：JSONL 换行符修复（PR [#8759](https://github.com/unslothai/unsloth/pull/8759)）对下游数据管道友好，但修复仍在 PR 阶段。若当前导出数据用于生产入库，建议自行追加换行以避免记录粘连。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*