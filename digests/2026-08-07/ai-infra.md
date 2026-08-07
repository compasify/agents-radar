# AI 基础设施日报 2026-08-07

> 生成时间: 2026-08-07 02:02 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施生态横向对比报告（2026-08-07）

## 1. 生态全景

今日生态焦点是 **DeepSeek-V4/Flash、Kimi-K3 等前沿模型带来的硬件代际断层**：Ampere（SM80）被排除在支持范围外，Blackwell SM120 又呈现 DSpark 路径不稳定的局面，部署选型难度显著上升。性能竞争的制高点已从"纯吞吐"转向"投机解码 × 显存效率 × 分布式并行"的组合拳，但 DSpark/MTP 与前缀缓存、CUDA Graph 交互产生的正确性问题正在成为新的稳定性黑洞。Agent 工作负载开始反向塑造基础设施需求：工具调用参数透传、推理 token 预算、长上下文缓存命中率出现在除训练以外的每一层 roadmap 中。各项目在快速迭代与破坏性变更之间艰难平衡，正确性与可观测性的投入明显加大。

## 2. 各项目活跃度对比

> 注：Issue/PR 数量为日报中可定位引用数，非 GitHub 全量统计；"发布"为今日正式 Release。

| 项目 | 今日 Release | 提及 Issue 数 | 提及 PR 数 | 活跃度信号 |
|---|---|---|---|---|
| **vLLM** | 0 | ~20 | ~18 | 5 项破坏性/行为变更（投机解码声明、NaN 日志异步、torchao 升级等）；无新版本 |
| **SGLang** | 0 | ~22 | ~13 | CI 追踪：1 broken / 4 flaky / **680 recently fixed**；nightly 镜像 commit 不一致风险 |
| **llama.cpp** | **5**（b10291–b10298） | 更新 56 条 | ~15 | 一日 5 版，发布节奏最快；Vulkan/ROCm 修复密集 |
| **Ollama** | 0 | ~13 | ~7 | 无 API/配置破坏性变更；多集中在新集成（launch muse/talos）与 Apple 回归 |
| **LiteLLM** | 0 | ~9 | ~12 | 2 个行为变更 PR（estimated output tokens、deployment 级 session affinity） |
| **Unsloth** | 0 | ~12 | ~13 | Studio 桌面端修复集中（X11 崩溃、watchdog 误杀、流式恢复） |

**节奏判断**：llama.cpp 以"小步快跑"维持最高发布频率；vLLM/SGLang 处于大版本收敛前夜，PR 密集但刻意不发版；LiteLLM 的重点从接入新 provider 转向健康度修复；Ollama 与 Unsloth 更多是存量稳定性维护。

## 3. 模型支持竞速

| 模型 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM |
|---|---|---|---|---|---|
| **DeepSeek-V4/Flash** | Ampere 支持跟踪中（#40851/#50576），0731 checkpoint 确认 SM8x 不可用 | TRT-LLM DSv4 Attention for SM100/103；DSpark 精度回退（AIME25 97.08→93.96） | 官方确认 0731 无 MTP 仅 DSpark，`--spec` 约 +50% | 未直接涉及 | DeepSeek anthropic 端点缺 `reasoning_content`（#31439） |
| **Kimi-K3** | DCP 支持（#50484）：NVLS 多播 + 对称内存 A2A | Ascend NPU 支持 PR（#33465）+ KDA prefill AMD 挂起 | — | — | — |
| **GLM 5.2 / 4.7-Flash** | 性能 sprint 多项完成（#46654） | GLM-4.7-Flash FA4 后端（#33436） | — | — | Claude Code + GLM 链路工具参数丢失（#27469） |
| **Qwen3.5/3.6 系** | GDN 内核 H200 IMA（#34948） | MoE shared-to-sparse fusion 待做（#33706） | — | M2 性能回退、think:false 不一致 | — |
| **其他** | Gemma-4 FA4 FP8 内核（#48666） | MiniMax-H3 跨节点并行 + Turbo LoRA 修复；GLM-4.7-Flash FA4 | BailingMoE3（PR #26608）、Qwen3-Next MTP | Mistral MLX runner、Muse/Talos 集成 | SCX.ai provider 接入 |

**结论**：前沿模型（DeepSeek-V4-Flash、Kimi-K3）由 **vLLM 与 SGLang 双头竞速**，一个偏向 GPU 分布式原语（DCP/NVLS），一个快速横向铺硬件（Ascend/TRT-LLM）；llama.cpp 以"发布日期即支持"的 GGUF 生态做到最快消化；Ollama/LiteLLM 停留在运行时与协议兼容层。**未有一家能在 DeepSeek-V4-Flash 上同时交付稳定 + 高性能，这是当前最大空白。**

## 4. 性能优化前沿

| 方向 | 代表性进展 |
|---|---|
| **KV cache** | llama.cpp SYCL 量化 KV TILE decode **+42%~169%**（BMG/Qwen3.6-35B）；vLLM 为 Kimi-K3 实现 DCP KV 分片；Unsloth MLX 路径新增 KV 量化；SGLang HiCache 批量化 PP 写入 + DCP/Helix 路线图 |
| **显存 footprint** | vLLM MRV2 batch-sharded sample 将采样内存降至 **1/P**；llama.cpp 跳过 device_info 省 **550MB VRAM**；SGLang 移除 AMD aiter 场景硬编码 0.85 降额；Ollama 社区提出 MoE 专家权重驻留主机内存 |
| **量化/GEMM** | SGLang SM120 FP8 三条线并行（per-tensor / 128×128 blockwise / MoE fusion）；llama.cpp MoE 专家缓存（热专家 GPU、冷专家 CPU）；vLLM torchao 0.18 + XPU blockwise FP8 后端 |
| **调度/批处理** | vLLM MRV2 `thinking_token_budget` 限制长思维链；DFlash 调度 slot 预留修复；llama.cpp 修复 Vulkan 提交批处理阈值过晚；SGLang FlashInfer extend bucket 纳入 warmup autotune |
| **算子/内核** | vLLM Gemma-4 FA4 CuTeDSL 内核 + FP8 KV 反量化；SGLang TRT-LLM DSv4 Attention；llama.cpp OpenCL FA 扩展至 head size 64–512 / GQA 2–16 |
| **分布式** | SGLang Ulysses×Ring 跨节点序列并行落地；vLLM DCP 对称内存 A2A + NVLS；LiteLLM deployment 级 session affinity 提升 provider 缓存命中 |

**判断**：火力最集中三个方向是 **KV cache 量化/分布式化、投机解码调度正确性、显存占用压缩**。"Blackwell SM120 性能路线图"是下一代竞争主战场，但当前所有相关优化都被稳定性问题拖累。

## 5. 分层定位差异

| 项目 | 层级 | 核心场景 | 硬件策略 | 今日问题重心 |
|---|---|---|---|---|
| **vLLM** | 生产推理引擎/服务层 | 多卡集群、高并发 online serving | CUDA 优先，XPU/ROCm 跟随 | 前沿模型硬件兼容、MRV2 收敛、回归测试补强 |
| **SGLang** | 生产推理引擎/服务层 | 与 vLLM 同层，更激进适配新硬件 | CUDA + Ascend + AMD 并行投入 | DSpark TP8 稳定性、SM120 性能落地 |
| **llama.cpp** | 轻量本地推理运行时 | 单机/边缘/桌面，GGUF 生态 | 多后端（CUDA/Vulkan/OpenCL/SYCL/ROCm） | Vulkan DeviceLost、量化张量正确性 |
| **Ollama** | 端侧开发者运行时 | 本地一键部署（封装 llama.cpp/MLX） | 跨平台桌面，偏 Apple/NVIDIA 消费卡 | 中文 tokenizer 乱码、M2 性能回退 |
| **LiteLLM** | LLM 网关/控制面 | 多 provider 路由、fallback、限流、Key 管理 | **不执行模型**，纯协议层 | Claude Code 链路回归、fallback 日志爆炸 |
| **Unsloth** | 微调/训练 + 本地 Studio | 微调效率 + 本地推理一体化 | CUDA/ROCm，后端依赖 llama.cpp | Linux 桌面崩溃、ROCm 兼容性 |

**关键差异**：vLLM 与 SGLang 是正面竞品，前者偏稳（回归测试、CI 依赖修正），后者偏快（Ascend、TRT-LLM、SM120 三线并行）；llama.cpp 是"引擎"，Ollama 是"产品壳"；LiteLLM 是唯一纯控制面组件，与所有引擎正交；Unsloth 卡位训练-推理交界，与 llama.cpp 深度耦合。**选择建议**：需要前沿模型高吞吐 → vLLM/SGLang 二选一并盯紧稳定性 issue；端侧/离线 → llama.cpp/Ollama；多 provider 治理 → LiteLLM；微调 + 本地交付 → Unsloth。

## 6. 值得关注的趋势信号

1. **硬件代际断层成为部署决策的第一变量**：DeepSeek-V4-Flash 明确剔除 Ampere（A100/A800/RTX 30xx），而 SM120 在 vLLM（#50720）和 SGLang（#31023/#33356）上均有 DSpark 崩溃。非 Hopper/Blackwell 用户要么锁旧版模型，要么为前沿模型预留新硬件预算。

2. **投机解码的正确性成本开始显性化**：三大引擎同日出现相关回归——vLLM 混合 Mamba 前缀缓存损坏（精度降 20%）、SGLang DSpark 导致 AIME25 97.08→93.96、llama.cpp CUDA+FA 重复输出。启用 DSpark/MTP 前必须建立精度回归基线，不能只看吞吐收益。

3. **Agent 工作负载反推基础设施需求**：LiteLLM 工具参数丢失、Ollama `enum` 不强制、SGLang tool-call parser 异常、vLLM 错误类型标准化 RFC——工具调用可靠性、reasoning 预算、错误分类一致性正在成为跨层共性需求，网关和引擎的"协议兼容"将从文本级升级为语义级。

4. **显存效率优化的 ROI 最高**：从 llama.cpp 跳过 device_info 省 550MB VRAM、SYCL KV 量化 +42~169%，到 vLLM batch-sharded sample 显存降为 1/P、Ollama MoE 卸载诉求——在显存成本高于算力成本的当下，这类优化能直接转化为部署成本下降，是未来 2-3 个季度最值得跟踪的收益点。

5. **多后端生态从"可运行"走向"可运维"**：llama.cpp 接入 AMD ROCm CI（gfx1151）、SGLang XPU PyTorch 2.13、vLLM XPU/ROCm 持续修洞，但 RDNA4 多模态加载、LoRA+ROCm、AutoRound 加载等仍开放。**非 NVIDIA 路径的工程团队应预留更长的故障排查预算。**

6. **质量基础设施与供应链风险并存**：llama.cpp 一日 5 版、SGLang 680 个近期修复、vLLM 补回归测试，快速发布成为常态；但 SGLang nightly 镜像 commit 不一致（#33628）、llama.cpp Windows Defender 误报说明供应链可信度尚未跟上节奏。**生产环境应锁定 commit/tag，而非滚动跟随 nightly。**

**对 Agent/应用开发者的具体行动建议**：部署 DeepSeek-V4-Flash 前先核对 GPU 代际；若使用 LiteLLM + Claude Code 链路，锁定 v1.81.12/1.83.6 规避 #27469；所有工具参数在应用层做枚举校验，不依赖模型自觉；新项目优先基于 vLLM MRV2 预研（thinking budget + 显存优化已就位）；避免同时开启前缀缓存与投机解码，直到相关修复进入稳定版。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 动态日报 2026-08-07

## 今日速览

DeepSeek-V4-Flash 的 Ampere（SM80/A100/A800）支持仍是社区最关注的议题（#50576、#40851 合计超百条评论），但暂无新进展；Kimi-K3 DCP 支持（#50484）、Gemma-4 FP8 内核（#48666）与 Model Runner V2 多项优化持续推进。稳定性方面，混合 Mamba 前缀缓存损坏回归测试（#48970）、投机解码方法信任修复（#51338）等一批修复 PR 正在落地。

## 版本发布与破坏性变更

无新版本发布。以下变更可能影响现有部署：

- **投机解码方法声明方式变更**（[PR #51338](https://github.com/vllm-project/vllm/pull/51338)）：`--speculative-config` 现在优先信任 checkpoint 内声明的 `"method"`，而非依赖路径名启发式，避免草稿模型被静默当作普通自回归模型运行。
- **NaN 日志检测改为异步**（[PR #51304](https://github.com/vllm-project/vllm/pull/51304)，已合并）：MRV1 下不再同步阻塞调度，为 CI 默认开启 NaN 检查铺路，减少对异步调度性能的影响。
- **torchao 升级至 0.18.0**（[PR #51312](https://github.com/vllm-project/vllm/pull/51312)）：修复 Python 3.14 下 `Union.__module__` 赋值的兼容性问题。
- **CI 依赖修正**（[PR #51345](https://github.com/vllm-project/vllm/pull/51345)）：更新 MiniMax/DeepSeek-V4/Mamba 源依赖路径，移除已删除的 Engine request-logger 路径。
- **Markdownlint 修复**（[PR #51344](https://github.com/vllm-project/vllm/pull/51344)，已合并）：修复 `committers.md` 格式违规，避免全仓库 lint 失败阻塞无关 PR。

## 新模型与硬件支持

- **Kimi-K3 DCP 支持**（[PR #50484](https://github.com/vllm-project/vllm/pull/50484)）：基于 #50000 的后续，为 Kimi-K3 增加 decode context parallelism，包括对称内存 DCP A2A 输出/LSE 归约、空 KV 分片掩码、融合 MLA 层 DCP 支持及 NVLS 多播直采。
- **Gemma-4 FA4 FP8 内核**（[PR #48666](https://github.com/vllm-project/vllm/pull/48666)）：SM90 上 full-attention 层升级 FA4 CuTeDSL 内核，启用 FP8 KV 反量化路径。
- **DeepSeek-V4-Flash-0731 发布，Ampere 仍不支持**（[Issue #50576](https://github.com/vllm-project/vllm/issues/50576)）：新 checkpoint 与 V4-Flash 相同架构，SM8x（A100/A800/RTX 30xx）均无法运行；上游跟踪 #40851 仍在推进。
- **GLM 5.2 性能优化进展**（[Issue #46654](https://github.com/vllm-project/vllm/issues/46654)）：sprint 多项任务已完成，包括 #36559、#46642 等。
- **DFlash 支持跟踪关闭**（[Issue #46105](https://github.com/vllm-project/vllm/issues/46105)）：标准 DFlash（非因果注意力、全 full attention）模型已支持。
- **XPU blockwise GEMM torch 后端**（[PR #50826](https://github.com/vllm-project/vllm/pull/50826)）：基于 #49932 的原生 `torch._scaled_mm` blockwise FP8 后端，在 Intel XPU 上启用。
- **ROCm Docker 集成 LMCache**（[PR #51208](https://github.com/vllm-project/vllm/pull/51208)，WIP）：为 ROCm 镜像安装 LMCache kv-connector 运行时，支持开箱即用。

## 性能与优化

- **MRV2 thinking_token_budget 支持**（[PR #46727](https://github.com/vllm-project/vllm/pull/46727)）：在 Model Runner V2 中支持 `thinking_token_budget`，限制量化模型（GLM-5.2/Qwen 等）的长思维链生成。
- **MRV2 batch-sharded sample**（[PR #50465](https://github.com/vllm-project/vllm/pull/50465)）：采样前不再物化完整 logits，按 TP 分片减少 `O(batch_size * (num_spec_tokens + 1) * vocab_size)` 的每步内存分配，显存占用降为 1/P。
- **DFlash 调度预算修复**（[PR #51256](https://github.com/vllm-project/vllm/pull/51256)）：修正并行草稿计算的 slot 预留逻辑，原来少预留每请求 1 个 slot，现完整保留 bonus query slot。
- **Humming 后端重构**（[PR #49610](https://github.com/vllm-project/vllm/pull/49610)）：linear 和 MoE 后端改为显式 layer config/tensor 传递，不再直接依赖 vLLM layer 对象，提升可维护性。
- **GLM-5.2 / Kimi-K3** 相关优化见上文“新模型与硬件支持”小节。

## 稳定性与回归

按严重程度排列，标注修复 PR 状态。

- **混合 Mamba 前缀缓存损坏（精度下降 20%）**（[Issue #43559](https://github.com/vllm-project/vllm/issues/43559)，已关闭）：`--enable-prefix-caching` + MTP 投机解码导致输出损坏；回归测试 PR [#48970](https://github.com/vllm-project/vllm/pull/48970) 已补充 e2e 测试（覆盖 `mamba_cache_mode="align"` + MTP/EAGLE）。
- **DeepSeek-V4-Flash-0731 + DSpark 在 SM120 失败**（[Issue #50720](https://github.com/vllm-project/vllm/issues/50720)）：RTX PRO 6000 Blackwell 上 FlashInfer 稀疏 MLA 解码内核路由错误，初始化即失败。
- **GLM-5.2-FP8 + DSpark 跨节点 RPC 超时**（[Issue #48752](https://github.com/vllm-project/vllm/issues/48752)）：GB200 双节点 TP=8 下 `sample_tokens` RPC 超时。
- **TurboQuant KV cache 大块 continuation prefill 崩溃**（[Issue #41726](https://github.com/vllm-project/vllm/issues/41726)）：workspace lock 后崩溃，影响 Qwen3.5-9B 等混合注意力模型。
- **Qwen3.5 CUDA Illegal Memory Access**（[Issue #34948](https://github.com/vllm-project/vllm/issues/34948)）：GDN 内核在 H200 上非法内存访问。
- **Intel Arc B50 TP=2 初始化崩溃**（[Issue #48953](https://github.com/vllm-project/vllm/issues/48953)）：`zeMemOpenIpcHandle` INVALID_ARGUMENT，与 #41663 同源；多卡 TP 挂起问题 #50545 已关闭。
- **Mamba-2 Triton 内核 SM121 非法指令**（[Issue #37431](https://github.com/vllm-project/vllm/issues/37431)）：DGX Spark 异步模式崩溃，设置 `CUDA_LAUNCH_BLOCKING=1` 可规避。
- **ROCm：LoRA + CUDA Graph 崩溃**（[Issue #41622](https://github.com/vllm-project/vllm/issues/41622)）：`hipErrorCapturedEvent`。
- **fp8_e5m2 KV cache 静默损坏 Qwen-VL 输出**（[Issue #41343](https://github.com/vllm-project/vllm/issues/41343)）：Qwen2-VL/2.5-VL 默认 scaling 下输出损坏。
- **ROCm/RDNA4 多模态模型加载失败**（[Issue #49851](https://github.com/vllm-project/vllm/issues/49851)）：`vit_torch_sdpa_wrapper` 编码器注意力 CUDA error，文本模型正常。
- **Qwen3ForEmbedding 回归**（[Issue #41494](https://github.com/vllm-project/vllm/issues/41494)）：嵌入模型不再可用。
- **Intel XPU 主机内存不释放**（[Issue #50269](https://github.com/vllm-project/vllm/issues/50269)）：模型加载后 host 内存持续占用。
- **Gemma 4 Dynamo 错误**（[Issue #38884](https://github.com/vllm-project/vllm/issues/38884)）：`torch._dynamo` 无法用 fake tensor 运行 FX 节点。
- **GLM 5.2 fused DSA 路径 skip_topk 崩溃**（[PR #48528](https://github.com/vllm-project/vllm/pull/48528)，已关闭，待 rebase）：MTP index share 激活时崩溃。
- **EC Connector TP>1 加载设备错误**（[PR #40416](https://github.com/vllm-project/vllm/pull/40416)）：固定 tensor 落到 cuda:0 而非对应 rank。
- **XPU CI 段错误规避**（[PR #51337](https://github.com/vllm-project/vllm/pull/51337)）：设置 `VLLM_DISABLE_COMPILE_CACHE=1` 绕开 Intel Triton XPU 后端段错误；XPU UT 修复见 [PR #50389](https://github.com/vllm-project/vllm/pull/50389)（已合并）。

## 对应用开发者的意义

- **DeepSeek-V4-Flash 部署前请确认硬件**：Ampere（A100/A800/RTX 30xx）无法运行，需 Hopper/Blackwell 或等待 #40851/#50576 的后续支持；SM120 Blackwell 用户也需留意 DSpark 路径的崩溃（#50720）。
- **投机解码 + 前缀缓存组合需谨慎**：#43559 确认 MTP 与前缀缓存同时开启会导致精度大幅下降；若使用混合 Mamba 架构，建议升级到包含 #48970 回归测试的版本，避免静默输出损坏。
- **DFlash 调度预算修复**（#51256）可提升高并发下的稳定性，使用 DFlash 模型的服务建议跟进。
- **入口错误处理标准化**（[RFC #48227](https://github.com/vllm-project/vllm/issues/48227)）仍在讨论中，未来异常类型和错误信息会更一致，Agent 应用可提前规划错误分类逻辑。
- **Model Runner V2 正在快速收敛**：`thinking_token_budget`（#46727）和 batch-sharded sample（#50465）均面向 MRV2，新应用建议基于 MRV2 进行预研，以尽早获得长思维链控制和显存优化收益。
- **XPU/ROCm 生态持续完善**：Kimi-K3 ROCm 跟踪（#50682）、LMCache 集成（#51208）等均在推进，但多模态 RDNA4（#49851）和 LoRA 图捕获（#41622）等稳定性问题尚未修复，AMD 用户需评估风险。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 动态日报 2026-08-07

## 今日速览

- 无正式 Release，但 Issue/PR 活跃度极高，CI 追踪显示当前 **1 broken / 4 flaky / 680 recently fixed**。
- **DeepSeek-V4/DSpark 系列是今日稳定性焦点**：TP8 下出现多起 CUDA illegal-memory-access 崩溃、RoPE 越界读取及 AIME25 精度回退报告。
- 性能侧 **Blackwell SM120 FP8 GEMM 优化**（per-tensor/blockwise/MoE fusion 三条线）并行推进，Kimi-K3 的 **Ascend NPU 支持 PR** 已提交，跨节点序列并行（Ulysses × Ring）落地中。

## 版本发布与破坏性变更

- 过去 24 小时无新版本发布。
- ⚠️ **nightly-dev 镜像存在 revision 与源码不一致风险**：`nightly-dev-cu13-20260805-211ee642` 的镜像标签/attestation 声明的 `SGLANG_BUILD_COMMIT` 与实际安装的 SGLang 源码可能不同，依赖 nightly 镜像做 CI/复现的团队需注意锁定 commit。 [#33628](https://github.com/sgl-project/sglang/issues/33628)

## 新模型与硬件支持

- **[Kimi-K3] Ascend NPU 支持（PR 已开）**：在保留 GPU/共享行为不变的前提下，通过 Ascend 后端派发 NPU 专用实现，并抽取 Ascend Triton kernel 独立合入。 [#33465](https://github.com/sgl-project/sglang/pull/33465)
- **[DeepSeek-V4] 集成 TRT-LLM DSv4 Attention for SM100/103**：为 Blackwell 提供 TRT-LLM 注意力后端集成。 [#30805](https://github.com/sgl-project/sglang/pull/30805)
- **[GLM-4.7-Flash] 支持 FA4 后端**：新增 `flashinfer` FA4 推理后端支持。 [#33436](https://github.com/sgl-project/sglang/pull/33436)
- **[Nemotron] W4A16 NVFP4 MoE 后端修复**：检测 ModelOpt 混合精度 checkpoint，将 W4A16_NVFP4 专家 MoE 路由到 Marlin，避免误走 SM100 flashinfer_trtllm 默认路径。 [#33543](https://github.com/sgl-project/sglang/pull/33543)
- **[MiniMax-H3] 跨节点序列并行**：通过 node-local Ulysses + cross-node Ring 组合，使长 Ref2VA/V2V 序列可跨节点扩展。 [#33327](https://github.com/sgl-project/sglang/pull/33327)
- **[MiniMax-H3] Turbo LoRA 合并修复**：修复 4/8-step 蒸馏版 LoRA 合并，将原先 20+ denoising steps 降至 4-10 steps。 [#33875](https://github.com/sgl-project/sglang/pull/33875)
- **[Diffusion] zimage / hunyuanvideo 迁移至 USPAttention**：替换剩余三个 stacked-QKV UlyssesAttention 调用点，并修复 `_forward_with_replicated_suffix` 的 token 顺序问题。 [#33923](https://github.com/sgl-project/sglang/pull/33923)
- **[XPU] PyTorch 升级至 2.13**：oneAPI 版本同步升级至 2026.0。 [#31751](https://github.com/sgl-project/sglang/pull/31751)

## 性能与优化

- **SM120/Blackwell 性能优化路线图更新**：`#19637` 追踪计划中 DeepSeek V4 已完成，DeepSeek v4 Flash 与 DeepGEMM MQA Indexer 已标记完成；另有 Qwen3.5/3.6 MoE shared-to-sparse experts fusion（blockwise FP8）待做。 [#19637](https://github.com/sgl-project/sglang/issues/19637)
- **SM120 FP8 GEMM 三条优化线**：per-tensor FP8 GEMM [#33632](https://github.com/sgl-project/sglang/issues/33632)、blockwise (128x128) FP8 GEMM [#33629](https://github.com/sgl-project/sglang/issues/33629)、Qwen3.5/3.6 MoE shared-to-sparse experts fusion [#33706](https://github.com/sgl-project/sglang/issues/33706) 均处于待优化状态。
- **FlashInfer extend bucket 在 warmup 阶段 autotune**：当前 warmup 仅按 decode 形状 autotune，导致上线后更大的 prefill/extend batch 落入未调优 bucket。该 PR 扩展了调优覆盖。 [#32556](https://github.com/sgl-project/sglang/pull/32556)
- **AMD 显存利用率提升**：移除 aiter + ctx>8K 时硬编码的 `mem_fraction_static` ×0.85 降额，无需手动覆盖即可使用更多显存。 [#25199](https://github.com/sgl-project/sglang/pull/25199)
- **多模态大特征张量改为 Gloo 直传**：将大 CPU 多模态特征张量从 `broadcast_pyobj` 的 pickle 字节流中剥离，改用 Gloo tensor collective，降低多节点多模态服务的序列化开销。 [#33924](https://github.com/sgl-project/sglang/pull/33924)
- **HiCache 批量化 PP 写入/加载同步**：减少调度器在流水线并行场景下的同步开销。 [#33473](https://github.com/sgl-project/sglang/pull/33473)
- **分布式 KVCache 系统路线图**：面向 agentic workload，解决 PD 分离 + HiCache 在 KV 传输/存储上的瓶颈，并提升混合模型兼容性。 [#21846](https://github.com/sgl-project/sglang/issues/21846)
- **Decode Context Parallelism（DCP）/ Helix 并行路线图**：按序列维度切分 KV cache，去除 TP>num_kv_heads 时的冗余，并引入 All-to-All 通信后端。 [#29736](https://github.com/sgl-project/sglang/issues/29736)
- **unified_cache 长提示备份增强**：当前 write-through 会跳过 new-token extend 长度超过 `chunked_prefill_size`（默认 8192）的请求，导致长 prompt 无法写入 HiCache。 [#33714](https://github.com/sgl-project/sglang/issues/33714)

## 稳定性与回归

**崩溃 / 非法内存访问（按严重程度排序）：**

- **DSpark compact target-verify CUDA Graph 在 TP8 下命中时序敏感 illegal memory access**：分离出两个 bug——跨 TP 规划不一致（TP rank 独立选择了不同 plan）与 CUDA Graph 转换的时序竞争。 [#31023](https://github.com/sgl-project/sglang/issues/31023)
- **DSpark large decode CUDA-Graph capture 在 TP8 下非确定性崩溃（v0.5.16 官方镜像复现）**：`bs <= 32` 低档控制范围稳定，但更大 batch 的 capture 会失败。 [#33356](https://github.com/sgl-project/sglang/issues/33356)
- **DSpark verify window 跨界导致非法 RoPE 读取**：verify window 越过模型 context 边界，触发非法 RoPE 索引。 [#33454](https://github.com/sgl-project/sglang/issues/33454)
- **Kimi-K3 KDA prefill 偶发永久挂起（AMD MI350X / gfx950）**：`chunk_kda_fwd → tolist() → hipMemcpy D2H` 在 batch_size=1 时永不返回，非确定性触发。 [#33846](https://github.com/sgl-project/sglang/issues/33846)
- **W4AFP8 + DeepEP 首次推理即崩溃**：GLM-5.2（DeepSeek-V2 架构）在 `--moe-a2a-backend deepep` 下所有 DP/TP/EP rank 同时崩溃，报错 `missing 1 required positional argument: 'routed_scaling_factor'`。 [#33660](https://github.com/sgl-project/sglang/issues/33660)

**正确性回归：**

- **DSpark 投机解码导致 DeepSeek-V4-Flash 精度回退**：AIME25 从 97.08 降至 93.96，需关注 speculative decoding 对 accuracy 的影响。 [#32038](https://github.com/sgl-project/sglang/issues/32038)
- **DeepSeek-V4-Flash `reasoning_effort` 映射错位**：`high` 为 no-op，vendor 的 `max` 档不可达。 [#33185](https://github.com/sgl-project/sglang/issues/33185)
- **qwen3.6 tool-call-parser 异常**：issue 已关闭（inactive），若生产环境仍在使用 qwen3.6 工具调用建议验证。 [#25242](https://github.com/sgl-project/sglang/issues/25242)
- **warmup/autotune 与真实 forward 的 `torch.inference_mode()` 不一致**，可能让 lazy-allocated buffer 在后续 inplace 更新中不安全——**已关闭**。 [#33470](https://github.com/sgl-project/sglang/issues/33470)
- **GDN chunked extend kernel 的 -1 padding sentinel bug 已修复（PR 已合入）**。 [#33810](https://github.com/sgl-project/sglang/pull/33810)
- **DeepSeek-V4-Flash 在 Ampere（8×A800, SM80, TP=8）的三个阻塞问题已关闭**。 [#33194](https://github.com/sgl-project/sglang/issues/33194)

**服务 / CI 基础设施：**

- **`/health` 绕过 warmup 等待**：健康检查在 `warmup_done.wait()` 完成前即返回 200，后续推理 POST 会阻塞 ~264s。 [#33719](https://github.com/sgl-project/sglang/issues/33719)
- **CI 追踪**：当前 1 broken / 4 flaky / 680 recently fixed（自动更新于 2026-08-07 01:59 UTC）。 [#17050](https://github.com/sgl-project/sglang/issues/17050)

## 对应用开发者的意义

- **DSpark/DSV4 系列暂不建议大规模上线**：TP8 下 CUDA Graph 崩溃与精度回退尚未修复，agentic 场景对长 decode 稳定性要求高，建议先固守已验证的 bs<=32 控制范围，跟踪 `#31023` 与 `#33356` 的修复进展。
- **工具调用兼容性风险**：qwen3.6 tool-call-parser 问题被关闭但未见明确修复，DeepSeek-V4-Flash 的 toolcall 也报出 `runner_backend` 切换异常，生产环境需锁定版本并做好降级预案。 [#33163](https://github.com/sgl-project/sglang/issues/33163) [#25242](https://github.com/sgl-project/sglang/issues/25242)
- **长上下文 + HiCache 场景**：超过 8192 chunked prefill 的请求目前不会被写入缓存，长文档 agent 任务可能享受不到缓存加速，可关注 `#33714` 的 write-through 增强。
- **路由与网关**：新增 opt-in bounded-load routing-key affinity 特性，可在保持会话亲和的同时考虑 worker 负载，适合多副本部署的 Agent 网关。 [#33625](https://github.com/sgl-project/sglang/issues/33625)
- **多模态/扩散服务能力提升**：跨节点序列并行（Ulysses × Ring）与 Turbo LoRA 合并修复落地后，MiniMax-H3 等长视频生成任务可在更少 step 下跨节点扩展。
- **SGLang Simulator 路线图**：若落地，将大幅降低模型×硬件×引擎配置×缓存策略的调优成本，值得应用侧关注。 [#21891](https://github.com/sgl-project/sglang/issues/21891)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

## 1. 今日速览

今日发布 5 个新版本（b10291–b10298），节奏密集：Vulkan 后端新增 DeviceLost 调试工具集（对应近期大量 AMD 驱动超时报告），模型加载器修复量化张量 stride 问题，AMD ROCm CI 正式上线（gfx1151）。性能优化方面，MoE 专家缓存方案（#26563，热专家留 GPU、冷专家走 CPU）和 OpenCL Flash Attention 扩展（#26430）持续推进；稳定性方面，DeepSeek-V4 在 CUDA FA 下的重复输出 Bug（#26509）讨论热度最高，合计 56 条 issue 在过去 24 小时有更新。

## 2. 版本发布与破坏性变更

- **b10298**：mtmd 新增 chunk save/load 函数（#26645），多模态模型可分段保存/加载视觉特征，降低大图场景内存峰值。无破坏性变更。
- **b10297**：server 修复 `/cors-proxy` 空响应问题（#26656），修复影响所有使用内置 CORS 代理的 Web 前端。
- **b10295**：model-loader 修复量化重塑张量（reshaped tensor）的 stride 计算错误（#26672），此前可能导致上层推理结果错误。
- **b10293**：CI 接入 AMD ROCm（gfx1151 修复，#26544），Linux 下 ROCm 后端回归测试覆盖增强。
- **b10291**：Vulkan 修复提交批处理阈值应用过晚的问题，并新增 DeviceLost 诊断工具（#26371）。
- 未发现需要特别迁移注意的破坏性变更。

## 3. 新模型与硬件支持

- **AMD ROCm CI 正式上线**：b10293 合入 gfx1151 修复（#26544），Radeon 8060S（Strix Halo 系列 GPU）进入 CI 覆盖范围，未来 ROCm 回归风险降低。
- **BailingMoE3 模型支持**（PR #26608，open）：新增 BailingMoE 3 架构支持，可运行 Ling 3.0 flash 模型（含 MTP），对应 issue #26590。
- **DeepSeekV4 MTP + DSpark**（PR #25784，已关闭）：官方确认 DeepSeek 0731 版本未随附 MTP，仅支持 DSpark；合入后约 50% 加速（`--spec` 模式）。
- **Qwen3-Next MTP 支持**（PR #25589，已关闭）：新增 MTP 支持，并通过 `.scale` 张量修正了 attention / MoE FFN 矩阵乘法。

## 4. 性能与优化

**进行中的优化 PR（未合入）**

- **MoE 专家缓存（#26563）**：仅 CUDA，默认关闭（`-ehs N`）。通过热度追踪将热专家缓存在 GPU 计算，冷专家回落到 CPU，旨在扩展 MoE 模型在 VRAM 受限场景的可用性。
- **OpenCL Flash Attention 扩展（#26430）**：将 head size 64–512、GQA 2–16 的 decode 路径纳入 FA 内核选择范围，Gemma-4（DK=512）在 GPU 上获得“massive gains on TG”。
- **OpenCL FA prefill K tile 转置优化（#26428）**：优化 QK 循环局部内存访问模式。
- **SYCL 量化 KV decode 启用 TILE kernel（#26689）**：在 BMG 上 Qwen3.6-35B、Gemma 4 26B/12B 实测 decode 提升 **+42% ~ +169%**（32K/118K context），零回归。
- **CUDA 设备信息跳过（#26692）**：非打印场景下跳过 `device_info` 循环，避免 CUDA 上下文创建带来的 550 MB VRAM 静默开销，多卡部署场景收益明显。

## 5. 稳定性与回归

按严重程度排序（🔴 严重 / 🟠 中等 / 🟡 轻微）：

- 🔴 **DeepSeek-V4 重复输出 `<`（#26509，CLOSED）**：prompt 跨多个 forward pass 时输出退化为重复 `<`，仅 CUDA + FA 触发，CPU 和 `-fa off` 正常。25 条评论，讨论热度最高。影响面大，修复方案需关注后续 release。
- 🟠 **Vulkan DeviceLost 系列**：#25664（Strix Halo + DeepSeekV4-Flash，数轮后崩溃）、#26447（Vega 8 iGPU，~50K context 后崩溃）、#17438（Intel Iris Plus，老问题持续）。已合入调试工具（b10291，#26371），但根因仍需驱动侧配合定位。
- 🟠 **ROCm 运行时库加载错误（#25807）**：ROCm-7.14 下 `libhipblas.so.3` 缺失，影响所有 ROS 版本发布后升级到 ROCm 7.14 的 Linux 用户。
- 🟠 **DeepSeek V4 Flash 0731 减速 50%（#26664，CLOSED）**：Vulkan 后端（AMD 780M），指向 #26531 引入的回归，已关闭（可能已 revert）。
- 🟡 **模型加载器量化 stride 修复（#26672 → b10295）**：量化 + 重塑张量的 stride 计错会导致静默错误推理，**今日已修复并发布**。
- 🟡 **模型保存器 FFN length 键覆盖（PR #26693，open）**：saver 对 `shared_feed_forward_length` 调用两次 `add_kv`，后值覆盖前值，导致非 GroveMoE 架构序列化时该字段错误写为 0。
- 🟡 **GGUF 数组类型校验缺失（PR #26690，open）**：tokenizer 元数据数组在类型不匹配时直接 cast，存在类型混淆风险。
- 🟡 **Windows Defender 误报（#26343）**：`b10195-bin-win-cpu-x64` 被报毒，需确认签名/构建链。

## 6. 对应用开发者的意义

- **避免静默错误 Embedding**：`/v1/embeddings` 在 causal LM 上返回 HTTP 200 + 全零向量（#23509）。请确保服务端校验模型类型，或对 embedding 输出做非零断言。
- **`--tools`/`-ag` 暴露 RCE 风险**（#26639，CLOSED）：启用工具调用选项时，任何能访问 API 的人均可执行工具，注意 API 鉴权与网络暴露面。
- **Router 模式调度缺陷**（#21678，OPEN）：当前策略是卸载有活动查询的模型，而非排队等待；高并发多模型场景需自建排队层。
- **Server checkpoint 失效（#24890，CLOSED）**：`keep_first` 会覆盖 `n_past` 导致缓存失效，该 issue 已关闭，建议升级验证。
- **MCP 集成修复（PR #26691，open）**：MCP 工具返回 `structuredContent` 而 `content` 为空时，此前 WebUI 与模型上下文均渲染为空；如需完整工具结果透传，可跟踪此 PR 或自行 patch。
- **CORS 代理修复已可用**：b10297 修复了 `/cors-proxy` 空响应问题，前端应用无需再 workaround。
- **多模态开发实用更新**：b10298 的 mtmd chunk save/load 允许将视觉特征物化到磁盘，适合做长视频/多图批处理 pipeline 的开发者。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

## Ollama 动态日报 2026-08-07

### 1. 今日速览

今日无新版本发布。社区焦点集中在 Qwen 系模型的稳定性上：M2 设备出现性能回归、Windows 中文输入乱码，以及 DGX Spark 上的确定性 CUDA 崩溃。同时，MoE 权重显存卸载的请求和“思考 token 预算” PR 代表了降低推理成本的两种方向。

### 2. 版本发布与破坏性变更

无新版本、无 API/配置破坏性变更。

### 3. 新模型与硬件支持

- **MLX Runner 新增 MistralForCausalLM 架构支持**（进行中 PR）
  [PR #17068](https://github.com/ollama/ollama/pull/17068) 为 MLX runner 添加 `MistralForCausalLM` 实现，修复 `ollama create --experimental` 导入 Mistral safetensors 后无法运行的问题。
- **新增 `ollama launch muse` 集成**
  [PR #17594](https://github.com/ollama/ollama/pull/17594) 接入 Meta 的 Muse Code CLI，自动生成其所需 settings.json。
- **新增 `ollama launch talos` 集成**
  [PR #17589](https://github.com/ollama/ollama/pull/17589) 接入 Talos agent，其特点是基于权限内核的确定性工具调用。

### 4. 性能与优化

- **MoE 专家权重驻留宿主内存、按需加载到 GPU**（Feature Request）
  [Issue #17557](https://github.com/ollama/ollama/issues/17557) 建议将 MoE 专家权重放在 RAM 中，不全部载入 VRAM，从而让 16B/35B MoE 模型在 8GB/12GB 显卡上运行。目前 Ollama 沿用 llama.cpp 默认行为，导致 6GB 的 16B MoE 文件需占用 23GB VRAM。
- **为“思考”设置 token 预算**（进行中 PR）
  [PR #17566](https://github.com/ollama/ollama/pull/17566) 引入每请求或每模型的 reasoning token 上限，避免模型陷入“Wait, let me re-read...”循环烧穿上下文且无最终输出。该 PR 针对 #17561 提出。
- **Bench 改用 HumanEval patch prompts**（进行中 PR）
  [PR #17480](https://github.com/ollama/ollama/pull/17480) 用 HumanEval 真实的代码续写任务替代原 word-salad 生成器，提升基准测试质量。

### 5. 稳定性与回归

按严重程度排序：

- **CUDA 非法内存访问导致 runner 确定性崩溃**（无 fix PR）
  [Issue #17596](https://github.com/ollama/ollama/issues/17596) 在 DGX Spark（GB10, aarch64）上，`qwen3-coder-next:q4_K_M`（80B-A3B, head size 256）大 prefill 请求会 100% 触发 `ggml_cuda_flash_attn_ext_mma_f16_case<256, 256, 8, 8>` 的 illegal memory access。
- **Qwen2.5-3B GGUF 中文输入输出乱码 ASCII token**（无 fix PR）
  [Issue #17587](https://github.com/ollama/ollama/issues/17587) Windows CPU 环境下，中文提问会产生 `@@@@@`、`!!!!!` 等垃圾输出，疑似 tokenizer 误判。另一重复 issue [#17586](https://github.com/ollama/ollama/issues/17586) 已关闭。
- **Qwen3.6-35B-A3B 在 Apple M2 上性能回退**（无 fix PR）
  [Issue #17583](https://github.com/ollama/ollama/issues/17583) 从旧版升级到 0.32.5 后，同一模型/提示词/上下文下速度从 72 T/s 显著下降，影响 Mac Studio M2 64GB。
- **`think:false` 未一致关闭 Qwen3 的推理输出**（已关闭）
  [Issue #17588](https://github.com/ollama/ollama/issues/17588) 已关闭，但摘要显示 API 接受参数但 reasoning 仍被返回，建议在应用中确认当前行为。
- **ollama.com 持续 403 与登录循环**
  [Issue #17471](https://github.com/ollama/ollama/issues/17471) 8+ 小时无法访问 Web/API/CLI，表现为 `HTTP 403 {"error":"Forbidden"}`，跨设备复现。
- **Windows 通过 NTFS 卷挂载点引用 GGUF 时 `ollama create` 报 400**
  [Issue #17591](https://github.com/ollama/ollama/issues/17591) 0.32.6 下 `invalid model name`，仅当 GGUF 路径经过卷挂载点时出现。
- **`ollama launch claude` 不接受 [1m] 上下文窗口后缀**
  [Issue #17584](https://github.com/ollama/ollama/issues/17584) 无法为上下文窗口非 200k 的 cloud 模型指定真实窗口大小。
- **Docling 的 DocTags 不输出**
  [Issue #17585](https://github.com/ollama/ollama/issues/17585) `granite_docling:258m` 与 Ollama 配合时缺少 DocTags，影响文档解析用途。
- **工具参数 `enum` 未在解码时强制**
  [Issue #17597](https://github.com/ollama/ollama/issues/17597) `enum` 会随工具声明送达模型，但生成时模型仍可能输出枚举值之外的非法字符。
- **服务端哈希读取错误会终止整个进程**（已有 fix PR）
  [PR #17590](https://github.com/ollama/ollama/pull/17590) 修复 `GetSHA256Digest` 中 `log.Fatal` 导致整个服务退出、所有在途请求被断的问题；现改为返回错误。

### 6. 对应用开发者的意义

- **工具调用可靠性**：`enum` 参数当前不被强制执行（[#17597](https://github.com/ollama/ollama/issues/17597)），面向 Agent 的开发者必须在应用层校验工具参数，不能依赖模型遵守枚举约束。
- **推理控制行为需要验证**：`think:false` 的问题虽已关闭（[#17588](https://github.com/ollama/ollama/issues/17588)），但若不生效会让依赖“用户可控推理开关”的应用出现兼容性问题；同时关注 [PR #17566](https://github.com/ollama/ollama/pull/17566) 的 token 预算能力，未来可避免思考循环导致的空响应与高额费用。
- **显存门槛可能下降**：MoE 专家权重卸载到主机内存的请求（[#17557](https://github.com/ollama/ollama/issues/17557)）若被采纳，8GB 显存设备将有机会运行 16B/35B MoE，应用部署成本会显著降低。
- **OpenAI 兼容层将修复嵌套工具声明**：[PR #17593](https://github.com/ollama/ollama/pull/17593) 解决了 Responses API 中 `namespace` 类型工具声明被丢弃的问题，使用多工具、命名空间分组工具的应用应关注该合并。
- **服务可靠性改进**：[PR #17590](https://github.com/ollama/ollama/pull/17590) 将 blob 校验错误从“杀死整个服务”改为“单请求失败”，生产环境应主动跟进。
- **Cloud 订阅配额争议**：[Issue #17435](https://github.com/ollama/ollama/issues/17435) 显示配额被静默削减约 70% 且无通知，依赖 Ollama Cloud 的团队需自行加用量监控，避免服务被限流。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 动态日报 2026-08-07

## 今日速览

今日核心是稳定性修复：PR #36148 修复循环 fallback 引发的日志爆炸（9 分钟 456MB）与事件循环饥饿；Claude Code 链路翻译层多个回归（工具调用参数丢失、reasoning_content 缺失、缓存计数未透传）仍在持续发酵；另有 h2/js-yaml 依赖安全升级与 Admin UI 登录限流 PR 值得关注。

## 版本发布与破坏性变更

- 过去 24 小时无正式 Release。
- 行为变更（进行中）：PR #36143 为 key/team/model 新增可配置的 estimated output tokens，将改变 TPM 预留逻辑，合并后需重新评估限流水位。链接：https://github.com/BerriAI/litellm/pull/36143
- 行为变更（进行中）：PR #36146 将 auto-router 的 session_affinity 从模型组粒度细化为 deployment 粒度，多副本 fan-out 场景下会话固定行为将改变。链接：https://github.com/BerriAI/litellm/pull/36146

## 新模型与硬件支持

- 新增 SCX.ai 作为 JSON 配置的 OpenAI 兼容 provider（PR #34752），自动完成 `max_tokens`/`max_completion_tokens` 映射并限制 `temperature`。链接：https://github.com/BerriAI/litellm/pull/34752
- 社区提交的新模型价格表更新已关闭：`openrouter/xiaomi/mimo-v2.5-pro`（#27325）、`venice/grok-code-fast-1`（#24229），预计已合入 `model_prices_and_context_window.json`。链接：https://github.com/BerriAI/litellm/issues/27325 、 https://github.com/BerriAI/litellm/issues/24229

## 性能与优化

- PR #36148（修复中）：限制 fallback 遍历深度并压缩错误日志量，杜绝循环 fallback 导致的日志爆炸（9 分钟 456MB）和 `/health/liveliness` 假死。这是今日最重要的 SRE 修复。链接：https://github.com/BerriAI/litellm/pull/36148
- PR #36146（进行中）：deployment 级会话亲和可显著提升 provider 侧 prompt cache 命中率，降低多副本扇出场景的推理成本。链接：https://github.com/BerriAI/litellm/pull/36146
- PR #32179（进行中）：对未配置速率限制的 key 跳过 post-call Redis 写入，减轻 Redis 负载。链接：https://github.com/BerriAI/litellm/pull/32179
- PR #33976（进行中）：OpenAI TTS 音频流经代理直转，降低 time-to-first-audio 延迟。链接：https://github.com/BerriAI/litellm/pull/33976

## 稳定性与回归

按严重程度排列：

- **[严重/已有 PR]** 循环 fallback 导致日志爆炸与事件循环饥饿（456MB/9min），已提交 #36148 修复。链接：https://github.com/BerriAI/litellm/pull/36148
- **[严重/待修复]** v1.83.7 回归：OpenAI→Anthropic 响应转换丢失 `tool_call.function.arguments`（#27469），Claude Code + GLM 链路受影响。链接：https://github.com/BerriAI/litellm/issues/27469
- **[中等/已有 PR]** `GET /v1/files` 因单条损坏记录整体 500，PR #36021 跳过异常行并告警；PR #36049 同步修复 `GET /v1/batches` 返回非统一文件 id 的问题。链接：https://github.com/BerriAI/litellm/pull/36021 、 https://github.com/BerriAI/litellm/pull/36049
- **[中等/待修复]** DeepSeek anthropic 端点多轮 thinking 会话因缺少 `reasoning_content` 返回 400（#31439）。链接：https://github.com/BerriAI/litellm/issues/31439
- **[中等/待修复]** Anthropic `/v1/messages` 桥接 OpenAI Responses API 模型时 `cache_read_input_tokens` 恒为 0（#36091）。链接：https://github.com/BerriAI/litellm/issues/36091
- **[中等/待修复]** 模型级 guardrails 在 `/v1/messages` 上不生效，`applied_guardrails` 为空（#36085）。链接：https://github.com/BerriAI/litellm/issues/36085
- **[中等/待修复]** 并发请求可绕过 TPM 限流（#18730），修复前建议收紧 `allowed_fails` 并发控流。链接：https://github.com/BerriAI/litellm/issues/18730
- **[较低/待修复]** `LITELLM_LOG=ERROR` 无法关闭 INFO 请求日志（#10788）。链接：https://github.com/BerriAI/litellm/issues/10788
- **[较低/待修复]** v1.81.14 在 thinking+tools 场景回归（#22997），Kimi K2.5 等 Claude Code 用户受影响。链接：https://github.com/BerriAI/litellm/issues/22997
- **[运维/已有 PR]** 计划内 Prisma engine 重启会误触健康探针报警，PR #36141 抑制此类竞态告警。链接：https://github.com/BerriAI/litellm/pull/36141
- **[安全/已有 PR]** Admin UI 登录接口增加失败次数限制，缓解暴力破解（#36116）。链接：https://github.com/BerriAI/litellm/pull/36116
- **[安全/已有 PR]** 依赖升级：h2 4.3.0→4.4.1、js-yaml 4.3.1，清除 osv-scan 两项发现（#36147）。链接：https://github.com/BerriAI/litellm/pull/36147

## 对应用开发者的意义

- **Claude Code / Anthropic 协议用户**：v1.83.7 工具调用参数丢失回归尚未修复，建议锁定 1.81.12/1.83.6 或关注 #27469 进展；1.81.14 的 thinking+tools 问题同样需要验证。链接：https://github.com/BerriAI/litellm/issues/27469
- **多副本部署 + session_affinity 用户**：PR #36146 合入后可获得更高 provider 缓存命中率，建议在预发环境验证会话固定行为变化。链接：https://github.com/BerriAI/litellm/pull/36146
- **批次/文件管理 API 用户**：`GET /v1/files` 500 与 batch 列表文件 id 不一致问题将在 #36021/#36049 合并后解决，可关注升级验证。链接：https://github.com/BerriAI/litellm/pull/36021
- **SRE/平台团队**：循环 fallback 可造成 456MB/9min 的日志量和健康检查中断，建议在 #36148 合入前自查 fallback 配置是否存在环；同时可升级依赖以消除 osv 安全扫描告警。链接：https://github.com/BerriAI/litellm/pull/36148
- **使用 Azure Sentinel/Government 的用户**：PR #36137 将修正 Azure Government 等云环境的 Log Analytics 日志采集，值得跟踪。链接：https://github.com/BerriAI/litellm/pull/36137

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 动态日报 — 2026-08-07

## 今日速览

今日 Unsloth 的核心动态集中在 **Studio 桌面端稳定性修复** 与 **后台性能优化** 两条主线。Linux 桌面应用静默崩溃问题被定位为 X11 I/O 错误并已有修复 PR（#8063），同时 Studio 本地模型库存扫描性能问题被标记为线性化改进（#8043）。此外，一批围绕 Windows 安装、ROCm 兼容性、MLX KV 量化配置的前期问题正在持续推进中。

---

## 新模型与硬件支持

- **AMD ROCm 方向多项进展**：PR #7682 修复 gfx10（RDNA 1/2）GPU 上 BF16 检测错误的问题，通过将 `torch.cuda.is_bf16_supported()` 的修正结果传递给下游调用方，保证 Unsloth 与 Unsloth Zoo 在 AMD 硬件上行为一致。此外，Issue #7992 报告了 Windows ROCm 下图像/视频模型无法加载的问题（`torch.distributed` 缺少 `Work` 属性），目前尚无修复 PR。
  - https://github.com/unslothai/unsloth/pull/7682
  - https://github.com/unslothai/unsloth/issues/7992

- **Gemma 4 基础模型 tokenizer 配置缺陷**：Issue #7903 指出 Gemma 4 base 模型在 tokenizer 配置中缺少 `<bos>` token，社区用户已报告，尚未有修复 PR。
  - https://github.com/unslothai/unsloth/issues/7903

- **AutoRound 模型加载失败**：Issue #7997 报告 AMD W7900 ROCm 环境下无法加载 AutoRound 量化模型，即使已安装 auto-round 包。该问题仍开放，可能涉及 ROCm 支持缺口。
  - https://github.com/unslothai/unsloth/issues/7997

---

## 性能与优化

- **本地模型库存扫描改为线性复杂度（PR #8043）**：修复 Studio 状态树中大量 cache-scoped 目录导致库存扫描缓慢的问题。改进后扫描复杂度与仓库数及状态条目数呈线性关系，同时合并并发扫描、避免只读探针产生不必要的缓存写入，并处理了 `dataset_info` 的读取容错。
  - https://github.com/unslothai/unsloth/pull/8043

- **llama.cpp 源码编译按 RAM 限制并行度（PR #8061）**：此前 `cmake -j` 直接使用逻辑核心数（如 20 线程机器用 `-j20`），nvcc 编译单元峰值约 2GB 内存，导致构建期间系统无响应。该 PR 根据可用内存动态限制并行度，避免构建时 OOM。
  - https://github.com/unslothai/unsloth/pull/8061

- **inference status 探针移出事件循环（PR #7944）**：`/api/inference/status` 原本会在 FastAPI 事件循环中直接执行 llama.cpp 能力检测和远端 release 检查，冷启动子进程探测或 GitHub 请求延迟会阻塞 SSE token 流。现改为异步执行，UI 每 5 秒轮询此路由，改进后台推理时的前端的响应性。
  - https://github.com/unslothai/unsloth/pull/7944

- **MLX 路径新增 KV cache 量化支持（PR #8007，已合并）**：Studio 的 Run Settings 现在可对 MLX 模型启用 KV cache 量化与自定义 chat template，并修正了预设提示文案。这为非 NVIDIA 后端用户提供了更大的推理显存控制权。
  - https://github.com/unslothai/unsloth/pull/8007

---

## 稳定性与回归

### 已修复 / 已有修复 PR

- **Linux 桌面应用静默崩溃（#8062，修复 PR #8063）**：打包版桌面应用在 Linux 上启动后立即退出，rc=1 且无任何输出。根因是 GTK3 的 X11 I/O fatal error 通过 `g_debug()` 输出，但被默认日志级别丢弃。PR #8063 在启动步骤中设置环境变量使错误可见，便于诊断。严重性较高，影响所有 Linux 桌面用户。
  - https://github.com/unslothai/unsloth/issues/8062
  - https://github.com/unslothai/unsloth/pull/8063

- **CI 核心链路失败（#7708，已关闭）**：`_DummyTrainer` 缺少 `data_collator` 属性导致 `test_enable_sample_packing` 失败，已修复。
  - https://github.com/unslothai/unsloth/issues/7708

- **训练 overlay 显示缓存资源为“Downloading 99%”（#7858，修复 PR #7864，已合并）**：`snapshot_progress.py` 只有在存在可读的 Studio manifest 时才报告 `complete_on_disk`，外部创建或早于 manifest 系统的缓存条目会被无限期地显示为卡在 99%，现改为正确显示缓存状态。
  - https://github.com/unslothai/unsloth/issues/7858
  - https://github.com/unslothai/unsloth/pull/7864

- **Windows 安装脚本 venv 回滚缺陷（#7810，已关闭）**：`Start-StudioVenvRollback` 的单步 `Move-Item` 在失败时会导致环境分裂成两半，已修复。
  - https://github.com/unslothai/unsloth/issues/7810

- **AMD GPU 无法被识别/加载到 VRAM（#7776，已关闭）**：通过安装 HIP SDK 并在安装前用 `HIP_SET_VISIBLE` 隐藏 iGPU 解决，已在预检中补充相关提示。
  - https://github.com/unslothai/unsloth/issues/7776

- **API streaming 到 Pi agent 频繁挂起（#7617，已关闭）**：该问题已解决，但关闭原因和解决方案细节未在数据中展示。
  - https://github.com/unslothai/unsloth/issues/7617

### 仍开放的问题

- **Studio 反复下载同一模型（#8001）**：GGUF diffusion 模型已下载，但加载时仍会重新下载原始模型，涉及缓存命中失败，尚无修复。
  - https://github.com/unslothai/unsloth/issues/8001

- **Studio 工具输出窗格中 ANSI 转义码以字面量呈现（#7962）**：`ls --color`、npm、cargo 等命令的彩色输出在 Studio 工具输出中显示为裸转义码，影响开发体验。
  - https://github.com/unslothai/unsloth/issues/7962

- **Chat 模型选择器显示原始快照路径（#7961）**：按路径加载的 GGUF 在选择器中显示完整文件系统路径而非模型名称。
  - https://github.com/unslothai/unsloth/issues/7961

- **健康检查 watchdog 误杀慢启动后端（PR #7958，已合并）**：`should_count_failure` 逻辑中 `port.is_some()` 恒为真，导致 5 分钟启动宽限期从未生效，watchdog 会误杀正常但启动较慢的后端。该 PR 已修复此问题并合入。
  - https://github.com/unslothai/unsloth/pull/7958

---

## 对应用开发者的意义

- **流式响应中断可恢复（PR #8064）**：当 Max Tokens 耗尽或流中断时，用户可以继续而非重试，避免长回答全部重新生成。对构建在 Unsloth 之上的聊天应用而言，这能显著减少 token 浪费并改善用户体验。
  - https://github.com/unslothai/unsloth/pull/8064

- **API 健康检查行为统一（PR #8060）**：将 8 个 workflow 中 14 个步骤的 `/api/health` 轮询逻辑抽取为统一脚本，消除两种不同判断语义。依赖 Unsloth CI/部署基础设施的团队可获得更一致的启动探测行为。
  - https://github.com/unslothai/unsloth/pull/8060

- **事件循环优化提升并发稳定性（PR #7944）**：修复 `/api/inference/status` 在事件循环中执行耗时探测导致 SSE 流阻塞的问题。在高并发推理、多请求场景下，SSE token 流不再因探测而被意外阻塞。
  - https://github.com/unslothai/unsloth/pull/7944

- **模型内存驻留控制（PR #8002）**：新增“Model memory”设置支持保持模型驻留 GPU 内存（`--mlock` 及禁用 idle 自动卸载），对延迟敏感的应用有利。
  - https://github.com/unslothai/unsloth/pull/8002

- **仓库 ID 大小写保留（PR #8058）**：修复模型名解析时返回的小写 repo id 可能导致 Hugging Face 下载失败的问题。依赖自定义模型仓库（非全小写命名）的应用升级后无需再变通处理。
  - https://github.com/unslothai/unsloth/pull/8058

- **Windows WebView 误刷新拦截（PR #7945）**：F5 / Ctrl+R / 右键刷新会卸载前端状态并取消进行中的请求，该 PR 阻止这些操作。面向 Windows 桌面端用户的应用将获得更稳定的 UI 状态。
  - https://github.com/unslothai/unsloth/pull/7945

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*