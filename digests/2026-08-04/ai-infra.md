# AI 基础设施日报 2026-08-04

> 生成时间: 2026-08-04 01:22 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施生态横向对比分析报告（2026-08-04）

## 1. 生态全景

今日生态的核心主线是**旗舰模型（DeepSeek-V4-Flash、Kimi-K3）的推理适配进入密集攻坚期**，vLLM、SGLang、llama.cpp 三家主力引擎同步出现相关正确性、稳定性与硬件兼容性议题。与此同时，**性能优化正从粗粒度算子下沉到细粒度系统层面**：CUDA Graph 捕获/重放稳定性（SGLang）、PCIe 拓扑感知通信（vLLM）、后端 sampler（llama.cpp）、C 扩展解析器（LiteLLM）成为新的优化焦点。Rust 化趋势进一步明朗——vLLM Rust Frontend 功能对齐持续推进，LiteLLM 的 Rust pip binary 进入公开跟踪。此外，**MoE 模型的多 GPU 部署与量化路径**已成为跨项目的共性挑战。

---

## 2. 各项目活跃度对比

| 项目 | 类型 | Issues（今日提及） | PRs（今日提及） | Release | 活跃度特征 |
|------|------|-------------------|----------------|---------|-----------|
| **vLLM** | 推理引擎 | 5+（含 2 个已关闭） | 9+ | 无 | 功能补齐 + 密集 Bug 修复，Rust Frontend 推进中 |
| **SGLang** | 推理引擎 | 8+（含 2 个已关闭） | 10+ | 无 | main 分支高迭代，无版本发布但 PR 密度最高 |
| **llama.cpp** | 本地推理运行时 | 7+（含 1 个已关闭） | 8+ | **7 个**（b10242–b10248） | 高频版本迭代，社区反馈驱动的快速修复 |
| **Ollama** | 本地推理运行时（封装） | 9+（含 2 个已关闭） | 7+ | 无 | API 兼容性与数据完整性为重点 |
| **LiteLLM** | LLM 网关 | 11+ | 12+ | **4 个**（v1.93.1–v1.96.0-rc.1） | 版本发布频繁，性能重构进入公开阶段 |
| **Unsloth** | 训练/微调 + Studio | 10+（含 2 个已关闭） | 7+ | 无（上版 2026.7.6 有 GPU 回归） | 安装器/Studio 稳定性问题集中爆发 |

**量化说明**：以上为各日报中明确提及并附链接的 Issues/PRs 数量，实际 GitHub 日增量可能更高。llama.cpp 的 7 个 Release 中 b10240（端口变更预告）与 b10248（特殊 token 校验）值得特别关注。

---

## 3. 模型支持竞速

| 模型/架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-----------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4-Flash** | ⚠️ SM8x 不支持；输出正确性 Bug | ⚠️ DSpark CUDA Graph 非法内存访问 | ⚠️ 重复字符 Bug（CUDA FA 路径）；Chat 模板已适配 | 🔶 社区请求官方支持 | — | ⚠️ 大模型加载交互障碍 |
| **Kimi-K3** | 🔶 ROCm 支持跟踪中 | 🔶 Roadmap 已建立，Day0 PR 合并 | — | — | — | — |
| **Qwen3-Next MTP** | — | — | ✅ 已合并（b10238） | — | — | — |
| **GLM-4.5-Air / GLM-5.2** | — | ✅ GLM-5.2 DSA 优化 | 🔶 GLM-4.5-Air MTP 进行中；GLM-5.2 ROCm 性能回退 | — | — | — |
| **Grok 4.3** | — | — | — | — | ✅ Vertex AI 定价元数据 | — |
| **gpt-oss:20b** | — | — | — | ⚠️ A10 CUDA illegal memory | — | — |
| **T5Gemma2（Seq2Seq 视觉）** | — | — | — | — | — | ✅ PR #7795 |
| **新硬件/后端** | — | AMD RDNA3/4 支持计划 | Apple RDMA、ROCm CI（gfx1151） | Intel SYCL 后端提案 | Rust pip binary | AMD iGPU+dGPU 修复 |

**结论**：llama.cpp 在模型架构覆盖广度上领先（MTP、新 Chat 模板快速跟进）；SGLang 与 vLLM 在新旗舰模型（DeepSeek-V4、Kimi-K3）的深度适配与硬件短板补齐上竞争胶着；LiteLLM 作为网关，模型支持体现在定价元数据与 API 适配层；Unsloth 以微调框架身份向新架构的 Seq2Seq 支持拓展。Ollama 对新模型响应最慢，仍停留在社区请求阶段。

---

## 4. 性能优化前沿

| 优化方向 | 代表性工作 |
|----------|-----------|
| **KV Cache / 注意力路径** | vLLM 稀疏 MLA 原子操作消除（#50365）；SGLang FlashMLA+DCP LSE 归约修复（#33065）、DCP 全局 KV 池限制（#33448） |
| **分布式通信** | vLLM PCIe-only 多岛层级 Allreduce（#50941）；llama.cpp RPC Apple RDMA（#26421） |
| **CUDA Graph 稳定性** | SGLang DSpark CUDA Graph 捕获/重放问题（#33356/#31023）与 RFC #32432 的动态 replay 契约；Ollama gpt-oss context checkpoint 崩溃 |
| **算子层优化** | llama.cpp OpenCL lm_head GEMV、Vulkan Intel Xe FA、SYCL ESIMD（B70 上 1.46x）；SGLang AMD gfx950 融合 DSA Triton kernel、FP8 FlashInfer 路由；vLLM SM8x 适配 |
| **量化路径** | SGLang MXFP4 Marlin EP 元数据修复（#33396）；vLLM compressed-tensors draft model 匹配修复（#49900） |
| **采样器/解码** | llama.cpp CUDA penalties sampler（b10242）；Ollama 流式协议对齐；SGLang EAGLE radix cache 冲突发现（#32459） |
| **网关/服务层** | LiteLLM hiredis C 解析器、懒日志构建（消除 1347 处热路径 f-string 插值）；Ollama VRAM 不足全 CPU 加载告警 |
| **MoE 推理** | llama.cpp b10247 多 GPU 动态分配修复；llama-hot-experts 内存固定（#26414） |

**趋势**：优化火力从单纯 kernel 加速，扩展到**拓扑感知通信、CUDA Graph 生命周期管理、服务层请求路径减负**三层。MoE 模型的量化+并行推理组合成为新瓶颈热点。

---

## 5. 分层定位差异

| 层次 | 项目 | 核心定位 | 今日动态体现 |
|------|------|----------|-------------|
| **推理引擎层**（面向服务部署） | vLLM / SGLang | 高吞吐、多 GPU 并行、生产级推理服务 | 围绕新模型适配、CUDA Graph 稳定性、DCP/TP/EP 并行策略优化 |
| **本地/边缘运行时** | llama.cpp | 单机/多机通用推理，跨后端（CUDA/ROCm/Metal/Vulkan/SYCL） | 7 个 Release 快速迭代，硬件后端覆盖最广（含 macOS/Intel/Adreno） |
| **本地/边缘运行时 + 用户体验层** | Ollama | 模型管理与 OpenAI 兼容 API，面向个人/小团队 | 流式协议对齐 OpenAI、blob 完整性校验、SYCL 后端提案 |
| **网关/代理层** | LiteLLM | 多模型路由、成本治理、密钥管理、可观测性 | OTEL trace 治理、spend report 端点、Rust 性能重构、定价元数据维护 |
| **训练/微调层** | Unsloth | 高效微调/LoRA/量化导出 + Studio 产品 | 安装器稳定性、Seq2Seq 扩展、GGUF 推荐策略、Studio 对话历史修复 |

**交叉与竞争**：llama.cpp 与 Ollama 是引擎+封装关系，但 Ollama 今日动态表明其正向上游引擎同步与 API 层差异化并行推进。vLLM 的 Rust Frontend 与 SGLang 的快速迭代形成对生产推理服务用户的直接竞争。Unsloth 从微调向推理（Studio/llama-server 集成）延伸，与 llama.cpp/Ollama 在本地推理场景形成部分重叠。LiteLLM 与各推理引擎互补关系为主，但其 Rust binary 默认化意味着网关层也开始性能军备竞赛。

---

## 6. 值得关注的趋势信号

### 对行业

1. **旗舰模型验证周期显著缩短，但稳定性缺口放大**：DeepSeek-V4-Flash 在 vLLM（SM8x 缺失）、SGLang（DSpark CUDA Graph 崩溃）、llama.cpp（重复字符死循环）三线均暴露出问题，而各家尚处于修复初期。新模型的发布速度已超过推理引擎的验证能力，生产环境部署新模型需预留至少数周稳定性观察期。

2. **CUDA Graph 成为新的稳定性黑天鹅**：SGLang 的 DSpark 问题、Ollama 的 gpt-oss context checkpoint 崩溃，均指向 CUDA Graph 捕获/重放在动态 shape 和 MoE 稀疏路径下的脆弱性。CUDA Graph 动态化契约（SGLang RFC #32432）可能成为行业需要共同建立的标准。

3. **安装器/依赖链可靠性成为基础设施信任分水岭**：Unsloth 的 Python 3.13.8 安装破坏 torch、Windows 强制装 Python 3.14、Ollama 的损坏 blob 误报成功、LiteLLM 镜像与 git tag 不一致——这些"看似低级"的问题正在消耗开发者信任。在工具链快速迭代期，安装与发布流程的严谨性会成为技术选型的隐性权重。

4. **Rust 化从边缘试探走向默认路径**：vLLM Rust Frontend 功能对齐节奏加快、LiteLLM Rust pip binary 成为默认安装路径。"Rust 重写核心路径"从个别项目的探索变成基础设施层的共识方向。

5. **OpenAI 兼容协议的"字节级对齐"竞赛**：Ollama 对齐流式 chunk 结构、LiteLLM 修复 Anthropic/Fireworks 适配层——兼容层不再是"能通就行"，而是逐字节一致，这正在成为 API 网关和本地运行时的准入标准。

### 对 Agent/应用开发者

- **DeepSeek-V4 系列暂不宜上生产**。若已使用，vLLM 用户需确认 GPU 架构 ≥ SM89，llama.cpp 用户建议 `-fa off` 并监控重复输出模式，SGLang/TP8 用户避免大 batch 与 CUDA Graph 路径。
- **Ollama 流式解析代码需立即回归**：`/v1/chat/completions` 的 chunk 结构将变（`role` 仅在首 chunk、`finish_reason` 独立成块），所有 SDK 层应同步适配。
- **LiteLLM 的 Rust wheel 兼容性风险**：`pip install litellm` 将逐步默认携带 Rust 扩展，若你的环境有 wheel 兼容性限制，应锁定版本并关注 #31261 的已知问题清单。
- **EAGLE 投机解码的 radix cache 冲突**（SGLang #32459）：Agent 多轮应用开启 EAGLE 可能导致 TTFT/吞吐下降 40–50%，排查时优先怀疑投机解码配置。
- **多模态应用注意 EXIF 方向修复**（SGLang #33449）：合并后手机 JPEG 的旋转方向将被正确处理，模型输入像素会变化，需要业务侧同步适配。

---

*报告基于 2026-08-04 六个项目的 GitHub 动态日报整理，所有链接与编号均可在原文中溯源。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

好的，这是 2026-08-04 的 vLLM 动态日报。

---

# vLLM 动态日报 2026-08-04

## 今日速览
今日动态主要围绕两大热点：一是 **DeepSeek-V4-Flash** 及 **Kimi-K3** 的适配与性能优化进入密集攻坚期，涉及 SM8x（A100/A800）硬件支持缺失和多个 AMD ROCm 相关 Bug；二是 **Rust Frontend** 功能对齐路线图持续推进，社区正积极补充 `truncate_prompt_tokens`、非 DeepSeek 推理解析器等缺失功能，以提升稳定性和功能完整性。

## 新模型与硬件支持
- **DeepSeek-V4-Flash SM8x 支持缺失**：社区请求为 DeepSeek-V4-Flash 及 DeepSeek-V4-Flash-0731 检查点启用 SM8x（Ampere A100/A800, RTX 30xx）支持。目前这些模型在相关硬件上无法直接运行，对于持有旧款 GPU 的开发者影响较大。
  `https://github.com/vllm-project/vllm/issues/50576`
- **Kimi-K3 ROCm 支持跟踪**：官方发布 Issue 跟踪 Kimi-K3 在 ROCm 上的功能启用和性能优化工作，内容包括基线特性（AITER fused-moe 集成）和后续的优化项。
  `https://github.com/vllm-project/vllm/issues/50682`

## 性能与优化
- **稀疏 MLA 索引重映射优化**：PR #50365 提出在稀疏 MLA 的索引重映射中消除原子操作争用（16-way contention），提升在有效计数路径和 DCP 压缩路径上的性能，是对当前 MLA 内核的进一步微调。
  `https://github.com/vllm-project/vllm/pull/50365`
- **PCIe-only 多岛层级 Allreduce**：PR #50941 针对 PCIe-only 且 GPU 分为多个岛（如 2x4 A100）的服务器，在 `CustomAllreduce` 不可用时，实现岛感知的层级 allreduce，以降低对 NCCL ring 的依赖，有望提升此类拓扑下的通信效率。
  `https://github.com/vllm-project/vllm/pull/50941`

## 稳定性与回归
- **严重崩溃与断言失败**：
  - **EngineCore 崩溃**：Issue #43226 报告 `Scheduler._update_from_kv_xfer_finished` 中的断言错误，当异步 KV connector 报告已被中止或释放的请求时会发生崩溃。这在高并发或请求频繁取消的负载下可能被触发。
    `https://github.com/vllm-project/vllm/issues/43226`
  - **Kimi-K3 非法内存访问**：Issue #50147（已关闭）报告在 TP=8、prefix caching 且并发加载场景下出现周期性非法内存访问。该问题已在此前版本修复。
    `https://github.com/vllm-project/vllm/issues/50147`
- **正确性 Bug**：
  - **DeepSeek-V4-Flash 输出错误**：Issue #46710 指出在 PR #46025 合并后，内联系统消息处理逻辑改变，导致 DeepSeek-V4-Flash 在特定场景下（模板报错）产生错误输出。
    `https://github.com/vllm-project/vllm/issues/46710`
  - **Qwen3-Omni TP=8 失败**：PR #50858 修复了 Qwen3-Omni 音频编码器在 TP 大小无法整除注意力头数（20 % 8 != 0）时构建失败的问题。
    `https://github.com/vllm-project/vllm/pull/50858`
- **构建与运行时 Bug 修复**：
  - **macOS 构建修复**：PR #50915 修复了 `csrc/cpu/sgl-kernels/fla.cpp` 中 `std::sqrt` 在 libc++ 下非 constexpr 导致的 macOS（Apple Silicon）构建失败问题。
    `https://github.com/vllm-project/vllm/pull/50915`
  - **权重加载回归修复**：PR #50937 修复了 PR #47058 重构后，带有未使用 bias 张量的模型加载失败的问题（`AttributeError: 'RoutedExperts' object has no attribute 'w2_bias'`）。
    `https://github.com/vllm-project/vllm/pull/50937`
  - **Quantization 模型 draft 目标匹配**：PR #49900 修复了混合精度 compressed-tensors 检查点在用作 `method="draft_model"` 时，量化目标模型匹配失败的问题。
    `https://github.com/vllm-project/vllm/pull/49900`
  - **MiniMax M3 推理解析**：PR #48690 修复了 `MiniMaxM3ReasoningParser` 将 `<mm:think>` 标记在内容中间误判为推理块开始的问题。
    `https://github.com/vllm-project/vllm/pull/48690`
  - **XPU 引擎重置**：Issue #41663（已关闭）报告 Intel Arc Pro B70 在双卡 TP=2 时出现 GPU 故障和引擎重置，已更新状态，推测已解决。
    `https://github.com/vllm-project/vllm/issues/41663`

## 对应用开发者的意义
- **验证新模型硬件环境**：如果应用依赖 DeepSeek-V4-Flash 系列模型，须确认底层 GPU 为 SM89/Hopper 以上架构，A100/A800 因缺少 SM8x 支持而暂时无法使用。
- **关注图说**：在升级至包含 PR #46025 的 vLLM 版本时，需要回归测试针对 DeepSeek-V4-Flash 模型的内联系统消息功能，以确保 prompt 拼接逻辑正确。
- **Rust Frontend 加速成熟**：如果你在 Rust 前端基础上构建，近期修复将补齐对 `truncate_prompt_tokens`、`truncation_side` 等参数的支持，显著提高兼容性。另一个 PR 正在为 Holo2 模型添加推理解析支持，表明其功能对齐路线图正在快速推进。
  `https://github.com/vllm-project/vllm/pull/48584`
- **异步任务安全**：PR #50555 修复了 asyncio 任务因仅持有弱引用而被 GC 提前回收的潜在问题。该修复能防止在 KV Connector 等后台异步任务中出现的偶发性悬挂或崩溃，对稳定性敏感的应用至关重要。
  `https://github.com/vllm-project/vllm/pull/50555`

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 动态日报（2026-08-04）

## 1. 今日速览

- 过去 24 小时无新 Release，main 分支仍处于高迭代状态。
- 社区热度集中在 **DeepSeek-V4 DSpark 的 CUDA Graph 稳定性问题**（#31023、#33356）以及 **DCP / MLX / 多模态相关正确性修复**。
- 值得关注的修复包括：DCP 请求长度按全局 KV 池限制（#33448）、图像 EXIF 方向处理（#33449）、FlashMLA + DCP 的 LSE 归约修复（#33065）。

## 2. 版本发布与破坏性变更

- 过去 24 小时无新版本发布。
- 无已知 API/配置破坏性变更。
- 注意：部分行为变更 PR 仍在 main 分支合入前（例如 EXIF 方向修复 #33449），若基于 main 构建，建议关注相关行为变化。

## 3. 新模型与硬件支持

- **Kimi K3 Roadmap**：Issue #32607 作为 Kimi K3 的跟踪路线图，已包含 Day0 PR #32541、Cookbook 和 DSpark 权重链接。  
  https://github.com/sgl-project/sglang/issues/32607
- **AMD 消费级 Radeon RDNA3/RDNA4 支持计划**：#30599 提出将 ROCm 支持从 Instinct 扩展到 `gfx1100/gfx1101/gfx1200/gfx1201`，目前为 tracking + enablement plan。  
  https://github.com/sgl-project/sglang/issues/30599
- **XPU/Arc B 文档支持**：PR #33369 为 Intel XPU / Arc B 增加 cookbook 文档并同步部署选择器，已关闭。  
  https://github.com/sgl-project/sglang/pull/33369
- **Diffusion BCG 支持 TP**：PR #33421 正在启用 BCG 在 Tensor Parallel 下的执行。  
  https://github.com/sgl-project/sglang/pull/33421
- **Kimi Delta-Attention Helion 后端**：PR #32593 为 Kimi Delta Attention packed decode/prefill 增加可选 Helion kernel 后端，同时保留现有默认后端。  
  https://github.com/sgl-project/sglang/pull/32593

## 4. 性能与优化

- **CI 构建优化**：PR #33384 将 Rust extension modules 从每个 CUDA job 重复编译改为每个 run 构建一次，可显著减少共享 CI 机器上由 uv editable sdist 锁导致的串行等待。  
  https://github.com/sgl-project/sglang/pull/33384
- **FP8 量化 Kernel 路由**：PR #33148 将 per-tensor FP8 checkpoint 在 SM90 上路由到 FlashInfer，避免标量 scale 在 AOT CUTLASS rowwise GEMM 中的广播开销。  
  https://github.com/sgl-project/sglang/pull/33148
- **MXFP4 Marlin EP 元数据传播**：PR #33396 正在修复 DeepSeek-V4 在 H200 上 MXFP4 Marlin 路径的 Expert Parallel 元数据传递问题，同时影响正确性与性能。  
  https://github.com/sgl-project/sglang/pull/33396
- **AMD gfx950 / GLM-5.2 DSA 优化**：
  - 融合 DSA indexer 的 query Hadamard + FP8 quant 为单个 Triton kernel，减少小 kernel 启动与 HBM 往返：PR #30715。  
    https://github.com/sgl-project/sglang/pull/30715
  - 当 `kv_len <= index_topk` 时跳过 DSA decode indexer，走 dense k-only fast path：PR #31324。  
    https://github.com/sgl-project/sglang/pull/31324
  - 短上下文时回退 dense-MHA prefill，避免 sparse indexer 开销超过收益：PR #30808。  
    https://github.com/sgl-project/sglang/pull/30808
  - 为 ROCm DSA 增加纯 Triton Sparse MLA prefill/decode 后端：PR #30575。  
    https://github.com/sgl-project/sglang/pull/30575
- **XPU 算子补充**：PR #32594 为 `fused_q_norm_rope` 和 `fused_k_norm_rope_flashmla` 增加 XPU 实现。  
  https://github.com/sgl-project/sglang/pull/32594
- **Chunked GDN Kernel 修复**：PR #33431 修复 padded state slot 以 `-1` 索引导致越界的问题，跳过非法 state 行。  
  https://github.com/sgl-project/sglang/pull/33431

## 5. 稳定性与回归

按严重程度排列：

- **DeepSeek-V4 DSpark 大型 Decode CUDA Graph 捕获时非确定性非法内存访问（TP8）**：#33356，v0.5.16 上 `bs <= 32` 稳定，但更大 shape 在 server 启动/捕获阶段可能失败，暂无 fix PR。  
  https://github.com/sgl-project/sglang/issues/33356
- **DSpark compact target-verify CUDA Graph 在 TP8 下存在 timing-sensitive 非法内存访问**：#31023，已拆分出跨 TP rank planning 不一致和 compact ragged target-verify path 两个子问题。  
  https://github.com/sgl-project/sglang/issues/31023
  - 关联 RFC #32432：为动态 CUDA Graph replay 定义 metadata、workspace、stream ownership 契约。  
    https://github.com/sgl-project/sglang/issues/32432
- **量化 DeepSeek-V4 静默丢弃 packed weights，服务不报错但输出 garbage**：#33245，涉及 fused `wq_a+wkv` 路径，暂无 fix PR。  
  https://github.com/sgl-project/sglang/issues/33245
- **DeepSeek-V4 indexer torch fallback 分配 num_heads 倍超大中间张量，128K+ context OOM**：#33246。  
  https://github.com/sgl-project/sglang/issues/33246
- **MLX overlap chained decode 跳过 token accounting，decode-KV pool sync 写入未分配/stale slot**：#30093，会影响 MLX 长稳服务。  
  https://github.com/sgl-project/sglang/issues/30093
- **Gemma-4 多模态单张非 RGB 图片可崩溃 scheduler**：#26751，两个叠加的 channel guard / shape bug。  
  https://github.com/sgl-project/sglang/issues/26751
- **FlashMLA + DCP 下 LSE 自然对数被按 base-2 处理，导致跨 rank softmax 权重错误**：已有修复 PR #33065。  
  https://github.com/sgl-project/sglang/pull/33065
- **DCP 下请求长度限制错误地按单 rank KV 池校验，而不是聚合 KV 池**：PR #33448 修正 `max_req_len` / `max_req_input_len` 计算。  
  https://github.com/sgl-project/sglang/pull/33448
- **CI CUDA Coredump Tracker**：#26340 自动收集 `pr-test.yml` 中的 CUDA coredump，用于追踪上述非法内存访问类回归。  
  https://github.com/sgl-project/sglang/issues/26340

## 6. 对应用开发者的意义

- 如果生产环境使用 **DeepSeek-V4 Pro DSpark + TP8**，建议在升级或扩 batch 前重点回归 CUDA Graph capture/replay；关注 #31023 和 #33356，以及 coredump tracker #26340 中是否有新增样本。
- 如果构建 **Agentic 多轮应用**并开启 **EAGLE speculative decoding**，需注意 #32459：EAGLE 可能导致 radix prefix reuse 从 97% 暴跌至 40%-53%，表现为 TTFT/吞吐下降但无报错。  
  https://github.com/sgl-project/sglang/issues/32459
- 多模态应用应关注 **EXIF 方向修复** #33449。当前手机 JPEG 的 EXIF Orientation 不会被自动应用，模型可能收到“横竖颠倒”的像素；该 PR 合并后行为会改变。  
  https://github.com/sgl-project/sglang/pull/33449
- 使用 **DCP 长上下文** 的开发者可跟进 #33448：该修复让请求长度上限基于全局聚合 KV 池，而不是单 rank 份额，避免长请求被过早拒绝。
- 过去 24 小时无新 Release；以上修复均在 main 分支，建议在引入生产前充分验证。

---

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 动态日报 — 2026-08-04

## 1. 今日速览

llama.cpp 今日发布 **b10242 至 b10248 共 7 个版本**，核心进展集中在 MoE 模型宽图输入的动态分配修复（b10247，修复多 GPU 场景崩溃）、OpenCL 后端 lm_head 优化（b10246）以及 M3 模型内存架构重构（b10244）。社区侧最受关注的是 **DeepSeek-V4 输出重复字符的严重 Bug（#26509）**，以及 **HIP/ROCm 上 GGML_OP_TOP_K 性能回退（#26399）**，均尚在排查中。

## 2. 版本发布与破坏性变更

- **b10240：服务器默认端口将变更 8080 → 9931**（⚠️ **破坏性变更**）
  `llama-server` 发布预告，后续版本默认端口将从 8080 调整为 9931。当前版本仍使用 8080，但建议开发者尽快将显式端口配置写入部署脚本或环境变量，避免未来升级时静默断连。
  链接: https://github.com/ggml-org/llama.cpp/releases/tag/b10240

- **b10248：新增默认特殊 token id 校验**
  在 vocab 加载阶段对默认特殊 token id 增加验证逻辑，模型加载时若发现不合法的特殊 token id 配置会提前报错而非运行期异常。对内置 tokenizer 的模型行为透明，但使用自定义 vocab 的开发者需留意加载日志。
  链接: https://github.com/ggml-org/llama.cpp/releases/tag/b10248

- **b10247：split graph 输入改为动态分配**
  将后端调度器中 `GGML_SCHED_MAX_SPLIT_INPUTS` 固定数组替换为动态分配缓冲区，修复加载宽 MoE 模型（如 Gemma-4-E2B）时的崩溃。多 GPU 推理场景建议升级到此版本。
  链接: https://github.com/ggml-org/llama.cpp/releases/tag/b10247

## 3. 新模型与硬件支持

- **Qwen3-Next MTP 支持（b10238）**
  新增 Qwen3-Next 多 token 预测（MTP）支持，包含 Python 转换器侧的 MTP 层数推导逻辑，GGUF 常量定义同步更新。
  链接: https://github.com/ggml-org/llama.cpp/releases/tag/b10238

- **GLM-4.5-Air MTP 支持（PR #26534，进行中）**
  实现 `glm4moe` 架构的 `graph_mtp`，已验证 GLM 4.5 Air 无回归，转换器改动尚在 WIP。
  链接: https://github.com/ggml-org/llama.cpp/pull/26534

- **RPC 传输层新增 Apple RDMA 支持（PR #26421，进行中）**
  在现有 Linux RDMA 基础上扩展 Apple RDMA 实现，引用 Apple TN3205 技术文档。
  链接: https://github.com/ggml-org/llama.cpp/pull/26421

- **AMD ROCm CI 基础设施准备中（PR #26461/#26544）**
  新增 ROCm gfx1151（Strix Halo）CI workflow，配套修复集成 GPU host output buffer 的 debug assert 等问题。
  链接: https://github.com/ggml-org/llama.cpp/pull/26461

- **DeepSeek V4 Flash 0731 chat 模板（PR #26398，已合并）**
  修复 dsv4 preview 模板，为 0731 版本添加独立模板，支持 max effort reasoning 与结构化输出。
  链接: https://github.com/ggml-org/llama.cpp/pull/26398

## 4. 性能与优化

- **OpenCL lm_head / decode GEMV 优化（b10246）**
  为较大尺寸的 `q6_K` lm_head 权重添加直接尺寸条件，路由至 flat GEMV 路径（原维度条件对 Gemma-4 E2B [1536, 262144] 的 lm_head 判定不足）。另有 PR #26477 对 Adreno GPU 的 K-quant 稠密模型 decode 侧做瘦长 GEMM 优化，面向投机解码与 MTP 场景。
  链接: https://github.com/ggml-org/llama.cpp/releases/tag/b10246
  链接: https://github.com/ggml-org/llama.cpp/pull/26477

- **CUDA 后端 penalties sampler（b10242）**
  新增后端 sampler 支持，将惩罚采样逻辑下沉至 CUDA 计算图，并改进 `penalty_last_n` 默认值处理。
  链接: https://github.com/ggml-org/llama.cpp/releases/tag/b10242

- **Vulkan Intel Xe 优化内核（PR #24406/#25380，进行中）**
  为 Intel Xe-LPG Plus/Xe2/Xe3 添加 flash attention 优化内核；coopmat mul_mm 新增 SHMEM_STRIDE_PAD/APPLY_SLM_A_RESHAPE spec constants。
  链接: https://github.com/ggml-org/llama.cpp/pull/24406
  链接: https://github.com/ggml-org/llama.cpp/pull/25380

- **SYCL ESIMD 内核（PR #25942，进行中）**
  新增 DMMV Q4_K/Q6_K ESIMD 内核，Qwen3-14B-Q4_K_M 在 B70 上较 MMVQ 提升 1.05x、较 DMMV 提升 1.46x；PVC 上分别为 1.31x/1.76x。
  链接: https://github.com/ggml-org/llama.cpp/pull/25942

- **llama-hot-experts：将热门 MoE expert 锁定在 RAM（PR #26414，进行中）**
  新增 `--pin-hot-experts N` 参数，通过 `mlock()` 将最常访问的 top-N expert 固定在内存中，缓解 mmap 加载大 MoE 模型时因页缓存驱逐导致的延迟尖峰。
  链接: https://github.com/ggml-org/llama.cpp/pull/26414

## 5. 稳定性与回归

按严重程度排列：

- **【严重·待修复】DeepSeek-V4 输出重复 `<` 字符（Issue #26509）**
  当 prompt 跨多个 forward pass 时，CUDA flash attention 路径下模型持续输出 `<`；CPU 与 `-fa off` 均正常。已在 b10233、b10217 及当前 master 复现，尚未定位。
  链接: https://github.com/ggml-org/llama.cpp/issues/26509

- **【严重·待修复】GGML_OP_TOP_K 在 HIP/ROCm 上 CPU 回退（Issue #26399）**
  上下文超过约 3–4K 后 TOP_K 算子回退 CPU，导致 DeepSeek-V4-Flash 解码速度下降 6.4x，gfx906 上复现。
  链接: https://github.com/ggml-org/llama.cpp/issues/26399

- **【高·已修复】多 GPU 下 GGML_ASSERT(n_inputs < GGML_SCHED_MAX_SPLIT_INPUTS)（Issue #24657）**
  该崩溃已由 b10247 的 split graph 输入动态分配修复解决，建议受影响用户升级验证。
  链接: https://github.com/ggml-org/llama.cpp/issues/24657
  链接: https://github.com/ggml-org/llama.cpp/releases/tag/b10247

- **【高·待验证】GLM-5.2 在 ROCm/HIP 上性能严重下降（Issue #26445）**
  Indexer PR #25407 引入后 prefill 慢约 6x、加载时间慢约 40x，8x MI300X 环境，尚未有 fix PR。
  链接: https://github.com/ggml-org/llama.cpp/issues/26445

- **【中·待修复】Metal 上 Gemma 4 E4B Q8_0 decode 回归约 13%（Issue #26470）**
  b9730 至 b10219 之间出现回归，Qwen 系模型不受影响，正在排查。
  链接: https://github.com/ggml-org/llama.cpp/issues/26470

- **【中·待修复】DeepSeek-V4-Flash SWA KV-cache 耗尽崩溃（Issue #25452）**
  churned-reuse 场景下 SWA KV-cache 耗尽导致崩溃与 stall，5 卡混合 GPU 环境复现。
  链接: https://github.com/ggml-org/llama.cpp/issues/25452

- **【低·待修复】DeepSeek-V4 在 n_ubatch 分片时输出异常（Issue #26471，已关闭）**
  与 #26509 同源，已关闭并入 #26509 跟踪。
  链接: https://github.com/ggml-org/llama.cpp/issues/26471

- **【低·修复中】SYCL 上 SIGSEGV（Issue #26462）**
  DS4F 在 Intel B70 上崩溃，疑似 SYCL f16 转换缺失，PR #26477 可能在 OpenCL 路径相关优化中涉及类似问题。
  链接: https://github.com/ggml-org/llama.cpp/issues/26462

## 6. 对应用开发者的意义

- **端口变更需立即处理**：`llama-server` 默认端口即将从 8080 改为 9931。若你的 Agent/应用硬编码了 8080 端口，请尽快改为显式传入 `--port` 参数，否则升级后请求会静默失败。当前 b10248 可能已是最后一个默认 8080 的版本，建议在 CI 中增加端口显式断言。

- **MoE 模型多 GPU 崩溃已修复**：b10247 解决了 `GGML_SCHED_MAX_SPLIT_INPUTS` 断言崩溃，这是加载 Gemma-4-E2B 等宽 MoE 模型多卡运行的硬阻塞。如果之前在 2x GPU 以上环境遇到过此类崩溃，请升级验证。

- **DeepSeek-V4 存在正确性风险**：若使用 CUDA flash attention 且 prompt 长度超过单次 forward pass 限制，模型可能进入输出 `<` 的死循环。建议在服务层增加输出异常检测或暂时使用 `-fa off`，并关注 Issue #26509 的进展；涉及 HIP/ROCm 部署时还需注意 TOP_K 回退导致的性能雪崩。

- **MTP 支持正在快速扩展**：Qwen3-Next 的 MTP 已合入，GLM-4.5-Air 支持在 PR 中。对使用这些模型做投机解码的推理服务来说，后端采样多输出（PR #25532）正在路上，MTP 的端到端收益会逐步释放。

- **RPC 与多机推理生态在演进**：Apple RDMA 传输支持意味着 macOS 生态的多机推理性能有望提升；AMD ROCm CI 的上线也会提高 HIP 后端的回归保护质量。如果已使用 RPC 构建多机推理，建议跟踪这两个 PR 的进展。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 动态日报 · 2026-08-04

## 今日速览

- 今日无新版本发布；OpenAI 兼容接口 `/v1/chat/completions` 流式 wire format 对齐 PR #17485 已合并，是今日最值得关注的 API 行为变更。
- 严重数据完整性 Bug 被曝光：blob 损坏后系统不检测、`pull` 误报成功（#17520），修复 PR #17537 已提交。
- 高热度老 Issue #3368（Reranking 模型支持）今日仍获更新，社区需求持续积压（👍 285）。

## 版本发布与破坏性变更

- 今日无正式 Release。
- 已合并 PR #17485 将在下一版本中改变 `/v1/chat/completions` 流式响应格式：`role` 只出现在首个 chunk，`finish_reason` 拆至独立 chunk，与 api.openai.com 逐字节对齐。对依赖旧格式的客户端为破坏性变更，建议升级前回归测试流式解析。
  - https://github.com/ollama/ollama/pull/17485 ｜ 修复 https://github.com/ollama/ollama/issues/7626

## 新模型与硬件支持

- **deepseek-v4-flash 本地支持**（Open，#17510）：社区请求官方发布 `deepseek-v4-flash:0731`。
  - https://github.com/ollama/ollama/issues/17510
- **Intel SYCL/oneAPI 后端**（Open，#16930）：提案覆盖 Arc/Battlemage GPU；配套 PR #16939 为 GPU 发现层添加 `ggml-sycl` 后端识别，属基础前置工作。
  - https://github.com/ollama/ollama/issues/16930 ｜ https://github.com/ollama/ollama/pull/16939
- **glm-ocr MLX 适配**（Open，#17535）：请求官方为 Apple Silicon 提供 MLX 版本 glm-ocr。
  - https://github.com/ollama/ollama/issues/17535

## 性能与优化

- **llama.cpp 例行更新**（Open，#17545）：同步上游 llama.cpp 最新改动，通常包含内核算子与调度优化。
  - https://github.com/ollama/ollama/pull/17545
- **dspark 加速选项**（Open，#17016）：社区请求将 dspark 作为内置 flag 或自动启用的加速项，尚未进入实施。
  - https://github.com/ollama/ollama/issues/17016
- **Benchmark 提示词质量优化**（Open，#17480）：改用 Python patch 续写生成原始 prompt 序列，提升不同 token 预算下的评测保真度。
  - https://github.com/ollama/ollama/pull/17480

## 稳定性与回归

- **【数据完整性｜严重】** #17520（Open）：损坏 blob 与文件名 digest 不匹配时被静默保留，`ollama list` 显示健康、`pull` 误报 success。PR #17537 提出修复：拉取时校验同大小缓存命中项的内容哈希。
  - https://github.com/ollama/ollama/issues/17520 ｜ https://github.com/ollama/ollama/pull/17537
- **【CUDA 崩溃｜严重】** #17534（Open）：`gpt-oss:20b` 在 NVIDIA A10 上处理短请求时触发 CUDA illegal memory access，`llama-server` 崩溃，发生在 context checkpoint 创建/更新阶段；0.32.5 可复现，暂无 fix PR。
  - https://github.com/ollama/ollama/issues/17534
- **【长时服务空响应｜高】** #17524（Open）：`laguna-xs-2.1` 连续多轮请求 30–70 分钟后，新请求返回空 200 响应，但 `ollama ps` 仍显示已加载；需 `ollama stop` 恢复。
  - https://github.com/ollama/ollama/issues/17524
- **【Pascal 越界读｜高】** #17546（Closed）：GTX 1080 Ti 等 SM61 设备上 `gated_delta_net_cuda` 存在越界读，通常在上下文将满时触发，已关闭。
  - https://github.com/ollama/ollama/issues/17546
- **【流式中断｜中】** #17118（Open）：`/v1/responses` 在推理期间 EOF 且无 `response.completed/incomplete/failed` 终止事件。PR #17531 通过补发 `response.failed` 修复。
  - https://github.com/ollama/ollama/issues/17118 ｜ https://github.com/ollama/ollama/pull/17531
- **【API 行为不一致｜中】** #17544（Open）：`/api/generate` 在设置 `format` 时静默忽略 `think: true` 导致输出错误；`/api/chat` 行为正确。
  - https://github.com/ollama/ollama/issues/17544
- **【可观测性｜中】** #17542（PR Open）：VRAM 不足时模型整段运行在 CPU 上且无默认日志，用户会误以为 GPU 推理正常；此 PR 将明确告警全 CPU 加载。
  - https://github.com/ollama/ollama/pull/17542
- **【HF 模型兼容｜低】** #14575（Closed）：`hf.co` 上 Qwen3.5 GGUF 拉取后报 500 `unable to load model`，因信息不足关闭。
  - https://github.com/ollama/ollama/issues/14575

## 对应用开发者的意义

- **OpenAI 流式解析需回归**（#17485）：合并后 chunk 结构与官方完全一致。Agent 框架/SDK 应移除对 `role` 重复 chunk 的依赖，并将 `finish_reason` 视为独立 chunk 处理。
- **生成失败可在流中感知**（#17531）：修复后 `/v1/responses` 中断会收到 `response.failed`，Agent 可以触发重试或降级，而非静默超时。
- **RAG 截断不再静默**（#17543）：即将落地 `/api/embed` 超长输入截断告警，避免基于被截断文本产出错误 embedding 而不自知。
- **Tool call 完整性增强**（#17536）：functiongemma 模型流结束时未闭合 `</end_function_call>` 的完整调用将不再被丢弃。
- **拉模型认证更稳**（#17532）：修复默认 registry 下 `realm host "ollama.com" does not match "registry.ollama.ai"` 的拉取失败，CI/CD 自动拉取模型受益明显。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 动态日报 2026-08-04

## 今日速览

LiteLLM 今日发布 v1.96.0-rc.1，同时公开了 Rust-backed pip binary 的集中问题跟踪（#31261），标志着性能重构进入公开阶段。性能优化方面， `hiredis` C 解析器和懒日志构建两个 PR 正在推进，有望显著降低 Redis 缓存与 debug 日志的请求路径开销。此外，OTEL trace destinations 治理系列 PR（#35513–#35517）已形成完整链路，团队/组织级别的 trace 隔离能力正在成形。

## 版本发布与破坏性变更

- **v1.96.0-rc.1 / v1.95.0 / v1.94.1 / v1.93.1**：过去 24 小时内发布 4 个版本，Release 说明均只包含 cosign 镜像签名验证指引，无额外变更日志。升级前需注意镜像 tag 与 git tag 的对应关系。
  - [Release v1.96.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.96.0-rc.1) | [v1.95.0](https://github.com/BerriAI/litellm/releases/tag/v1.95.0) | [v1.94.1](https://github.com/BerriAI/litellm/releases/tag/v1.94.1) | [v1.93.1](https://github.com/BerriAI/litellm/releases/tag/v1.93.1)
- **发布流程异常（需要运维关注）**：GHCR 上已发布 `v1.94.1`、`v1.95.0` 镜像且 cosign 签名有效，但仓库中不存在对应的 git tag 和 Release 页面。依赖精确 tag 回滚或审计的团队需注意此偏差。
  - [Issue #35683: v1.94.1 image has no matching git tag](https://github.com/BerriAI/litellm/issues/35683)
  - [Issue #35684: v1.95.0 image has no matching git tag](https://github.com/BerriAI/litellm/issues/35684)

## 新模型与硬件支持

- **Vertex AI Grok 4.3 定价元数据**：新增 Grok 4.3 在 Google Cloud Vertex AI 上的模型元数据与 context pricing 分层，覆盖 200K 边界测试。
  - [PR #35728: feat(vertex-ai): add Grok 4.3 pricing metadata](https://github.com/BerriAI/litellm/pull/35728)
- **Gemini 2.5 Flash priority/flex paygo（待支持）**：社区仍在请求为 `gemini-2.5-flash` 全系列补齐 Vertex AI 的 priority/flex 按需定价配置。
  - [Issue #23388: add support priority/flex paygo for gemini-2.5-flash](https://github.com/BerriAI/litellm/issues/23388)
- **Rust pip binary 兼容性讨论**：官方计划让 `pip install litellm` 在可用 wheel 时默认包含 Rust 扩展。涉及安装问题的用户可集中反馈。
  - [Issue #31261: litellm rust pip binary](https://github.com/BerriAI/litellm/issues/31261)

## 性能与优化

- **Redis 响应解析 C 扩展**：PR 在 `proxy` extra 中声明 `hiredis`，让 redis-py 自动切换到 C 解析器。当前纯 Python 解析每次 cache read/pipeline 都有额外开销，尤其是高 QPS 场景。
  - [PR #35709: perf: install hiredis so redis-py parses replies with its C parser](https://github.com/BerriAI/litellm/pull/35709)
- **懒日志构建**：对 #35703 的 rebase。当前 291 个文件中 1347 处 `verbose_logger.debug(...)` 调用会无条件进行 f-string 插值，即使日志级别过滤掉 debug 也消耗真实时间。改为惰性求值可移除该开销。
  - [PR #35727: perf: build log messages lazily](https://github.com/BerriAI/litellm/pull/35727)
  - [Issue #35699: debug log messages are built eagerly](https://github.com/BerriAI/litellm/issues/35699)
- **RedisCache service-logging 任务引用修复**：修复 Redis 遥测任务因弱引用被 GC 导致静默丢失的问题，负载高时尤其明显。
  - [PR #35347: fix: hold references to the service-logging tasks in RedisCache](https://github.com/BerriAI/litellm/pull/35347)

## 稳定性与回归

按严重程度排列：

- **OpenAI gpt-5.6 系列函数工具调用失败**：`/chat/completions` 传入 function tools 时触发 `reasoning_effort` 校验错误，影响 gpt-5.6-sol/luna/terra 全系。无 fix PR。
  - [Issue #33221](https://github.com/BerriAI/litellm/issues/33221)
- **Claude 模型返回空消息占位符**：响应中出现 `[System: Empty message content sanitised to satisfy protocol]`，影响下游解析。无 fix PR。
  - [Issue #24498](https://github.com/BerriAI/litellm/issues/24498)
- **Bedrock Converse strict tool 参数 400（有修复）**：对 cost-map 中未显式声明 `bedrock_converse_supports_strict_tools: false` 的 Claude 模型（如 Sonnet 5），转发 `toolSpec.strict` 会导致 Converse 400。
  - [PR #35688: fix(bedrock): stop forwarding no-op toolSpec.strict to Converse](https://github.com/BerriAI/litellm/pull/35688)
- **Fireworks AI reasoning_effort 类型不兼容（有修复）**：从 Anthropic adapter 进入的 dict 形式 `{"effort": "medium", "summary": "detailed"}` 需要被转换为字符串，否则 Fireworks API 返回 400。
  - [PR #35650: fix(fireworks-ai): handle dict-form reasoning_effort](https://github.com/BerriAI/litellm/pull/35650)
- **S3 v2 签名路径编码错误（有修复）**：使用通用 `SigV4Auth` 导致带空格的 alias 或 `s3_path` 部分签名校验失败（403）。改用 `S3SigV4Auth` 单次编码。
  - [PR #35726: fix(s3_v2): sign S3 object URLs with S3SigV4Auth](https://github.com/BerriAI/litellm/pull/35726)
- **Ollama→Anthropic 流式工具调用语义错误**：`ollama_chat` 经 `/v1/messages` 流式返回时，工具调用轮错误设置 `stop_reason: "end_turn"` 且多出空文本块。无 fix PR。
  - [Issue #34692](https://github.com/BerriAI/litellm/issues/34692)
- **企业版 API key 宽限期不生效**：`LiteLLM_DeprecatedVerificationToken` 中存在记录但旧 key 被立即拒绝，与预期的 grace period 行为不符。
  - [Issue #27193](https://github.com/BerriAI/litellm/issues/27193)
- **Bedrock Mantle header 名错误**：`aws_bedrock_project_id` 被发送为 `anthropic-workspace`，应为 `anthropic-workspace-id`。无 fix PR。
  - [Issue #31947](https://github.com/BerriAI/litellm/issues/31947)
- **Gemini Flash 3.6 工具响应含 image_url 失败**：最后一条消息为 tool 角色且含 `image_url` 时请求出错。无 fix PR。
  - [Issue #35236](https://github.com/BerriAI/litellm/issues/35236)
- **Snowflake Cortex API Base URL 过时**：代码中使用的 endpoint 与当前 Snowflake API 不一致。
  - [Issue #27187](https://github.com/BerriAI/litellm/issues/27187)
- **模型价格表数据不一致**：`model_prices_and_context_window.json` 中 4 个 `claude-fable-5` 的 `prompt_cache_min_tokens` 与直接读取不一致，另有 499 条记录声称支持缓存但未填最小值。
  - [Issue #35011](https://github.com/BerriAI/litellm/issues/35011)
- **Helm standalone DB secret 漂移**：`litellm-helm` 1.1.0 中独立部署的 PostgreSQL 忽略 `postgresql.auth.existingSecret`，导致 ArgoCD 部署 CrashLoop。
  - [Issue #27173](https://github.com/BerriAI/litellm/issues/27173)
- **MCP OAuth refresh_token 未实现**：`.well-known` 元数据声明支持 `refresh_token` grant，但 token endpoint 实际未实现。
  - [Issue #23700](https://github.com/BerriAI/litellm/issues/23700)

## 对应用开发者的意义

- **明确影响 Claude Code 用户的已知问题**：Claude 模型偶发返回空消息占位符、Ollama 工具调用流式语义错误，以及 MCP OAuth refresh 缺失，可能直接影响 Claude Code 链路，建议升级前进行针对性测试。
- **OTEL trace 治理能力即将上线**：admin 可创建带 scope 的 logging credential，并按 team/org 解析 trace destinations，最终将整棵 trace 树分发到对应后端。多租户场景下 trace 隔离将不再依赖手工配置 exporter。
  - [PR #35513](https://github.com/BerriAI/litellm/pull/35513) | [PR #35514](https://github.com/BerriAI/litellm/pull/35514) | [PR #35515](https://github.com/BerriAI/litellm/pull/35515) | [PR #35516](https://github.com/BerriAI/litellm/pull/35516) | [PR #35517](https://github.com/BerriAI/litellm/pull/35517)
- **新的自助 spend 报告端点**：非管理员 key/user/team/org 可以通过 `/key/spend/report` 等新端点拉取自作用域消费报告，无需依赖全局 `/global/spend/report`。
  - [PR #35725: feat(spend): add caller-scoped key/user/team/organization spend report endpoints](https://github.com/BerriAI/litellm/pull/35725)
- **性能优化将直接改善请求尾部延迟**：hiredis 与懒日志两项改动落地后，Redis 缓存读取和 debug 日志构建成本将从请求热路径中移除。若你的服务开启 debug 日志且 QPS 较高，值得跟进这两个 PR。
- **Rust binary 安装成为默认路径**：`pip install litellm` 将逐步默认携带 Rust 扩展，wheel 兼容性或有波动，建议关注 #31261 中的已知安装问题列表。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 动态日报 2026-08-04

## 今日速览

Unsloth 今日无新版本发布，重点集中在 Studio 稳定性和硬件适配修复上。值得关注的是，多个严重的硬件/环境 Bug 正在被积极修复（AMD ROCm iGPU 遮蔽、CUDA 轮子选择错误、Windows 安装破坏 torch），同时社区提交了针对对话历史丢失、STT 下载进度和 Seq2Seq 视觉模型支持的功能 PR。

---

## 版本发布与破坏性变更

今日（2026-08-04）无新 Release 发布。上一版本为 2026.7.6（2026-07-28 发布）。值得留意的是，上一版本被报告存在 GPU 加载回归（详见下方 #7765）。

---

## 新模型与硬件支持

### 1. Seq2Seq 支持扩展至编码器-解码器视觉模型 — `T5Gemma2`

新 PR 为 FastVisionModel / VLM 路径添加了 T5Gemma2 的 Seq2Seq 支持，可视为 `#4226`（llama.py + loader.py）在视觉和训练器路径上的补充。

- **PR**: [unslothai/unsloth#7795](https://github.com/unslothai/unsloth/pull/7795)

### 2. AMD 混合主机（iGPU + dGPU）安装修复

新增 PR 修复 AMD APU + 独立 Radeon 共存时的 GPU 架构检测错误：HIP 会优先枚举 iGPU，导致安装器将 iGPU 的架构写入配置，进而拉取错误的轮子。该 PR 通过正确选择可见设备索引来修复此问题。

- **关联 Issue**: [unslothai/unsloth#7776](https://github.com/unslothai/unsloth/issues/7776)

---

## 性能与优化

今日未发现新的性能优化合并或量化格式相关 PR。以下两项与性能/资源使用相关的工作处于进行中：

- **CUDA wheel 按 GPU 架构选择**（[PR #7801](https://github.com/unslothai/unsloth/pull/7801)）：修复 Tesla V100（sm_70）在 CUDA 13 驱动下被错误安装 cu130 wheel（最低 sm_75）的问题，防止运行时兼容性故障。
- **GGUF 推荐策略共享**（[PR #7733](https://github.com/unslothai/unsloth/pull/7733)）：统一 Hub 下载与模型选择器的 GGUF 推荐策略，优先选择能放入显存的最大变体，减少手动摸索 OOM 的过程。

---

## 稳定性与回归

按严重程度排列：

### 🔴 严重：安装脚本破坏 GPU 训练（无现有 fix PR）

**#7803 — Python 3.13.8 CPython 回归导致 torch 导入失败**：Linux/WSL 下 `install.sh` 可能安装 Python 3.13.8（gh-139783），该版本破坏 `import torch`。模型卡在 CPU 回退，Train/Export 被静默禁用。已有的 3.13.8 防护仅覆盖 macOS，Linux/WSL 不受保护。**尚无 fix PR**。

→ [unslothai/unsloth#7803](https://github.com/unslothai/unsloth/issues/7803)

**#7765 — 最新 Release 不加载模型至 GPU**：用户全新安装后，Tesla V100 被检测但被忽略，模型仅运行在 CPU。未明确是否与上述 Python/torch 问题直接相关，但时间吻合，值得优先排查。**已有相关 PR #7801 处理 CUDA 架构选择，需进一步确认是否完全修复**。

→ [unslothai/unsloth#7765](https://github.com/unslothai/unsloth/issues/7765)

### 🟠 中高危：Studio/运行时功能异常

**#7617 — API 流式响应挂起**：Pi agent 调用 API 时流式响应频繁挂死，需人工干预才能继续。3 条评论，1 个 👍，说明影响面较大。**无 fix PR**。

→ [unslothai/unsloth#7617](https://github.com/unslothai/unsloth/issues/7617)

**#7732 — 对话刷新（Refresh）5-6 次后历史被重置**：响应分支的历史记录在多次重新生成后丢失，仅保留第一条和最后一条。**新 PR #7796 声称修复**（原因是分支应共享同一 `parentId`）。

→ [unslothai/unsloth#7732](https://github.com/unslothai/unsloth/issues/7732) / [unslothai/unsloth#7796](https://github.com/unslothai/unsloth/pull/7796)

**#7670 — ROCm 多 GPU 场景下 llama-server 被分配到无内核的 iGPU**：Studio 按自由显存挑 GPU，iGPU 的共享内存可能虚高，导致服务器启动即报 `ROCm error: device kernel image is invalid`。**HAS PR**。

→ [unslothai/unsloth#7670](https://github.com/unslothai/unsloth/pull/7670)

**#7022 — 大型 MoE 模型（DeepSeek-V4-Flash Q2_K_XL 约 100GB）在消费级硬件上加载失败**：`--fit on` 与 Studio 传参的 llama-server flags 存在冲突，用户请求 UI 暴露更多底层控制。**无 fix PR**。

→ [unslothai/unsloth#7022](https://github.com/unslothai/unsloth/issues/7022)

### 🟡 中危：正确性与功能 Bug

**#7792 — Gemma-2 attention-only LoRA 合并导出 GGUF 后输出错乱**：权重/元数据/分词器完全一致，但导出后生成乱码（"word-salad"）。疑似模型内部结构问题，与 #976 相关。**无 fix PR**。

→ [unslothai/unsloth#7792](https://github.com/unslothai/unsloth/issues/7792)

**#7802 — Windows 安装脚本自动安装 Python 3.14**：用户认为安装器应优先使用系统已有 Python，而非无脑安装新版本。"核心开发环境被强制替换"是严重的信任破坏问题。**无 fix PR**。

→ [unslothai/unsloth#7802](https://github.com/unslothai/unsloth/issues/7802)

**#7799 — Desktop 端语音输入（dictation）被浏览器语音服务阻塞**：webview 显示支持但底层服务拒绝。**HAS PR**。

→ [unslothai/unsloth#7799](https://github.com/unslothai/unsloth/pull/7799)

**#7800 — 数据集文件被删除后，Studio 返回 500 并卡死训练入口**：死选区和启用的训练按钮导致用户对不存在的文件发起训练。**HAS PR**。

→ [unslothai/unsloth#7800](https://github.com/unslothai/unsloth/pull/7800)

**#7450 — Token 计数在切换模型后随机消失**：仍是 OPEN 状态。**无 fix PR**。

→ [unslothai/unsloth#7450](https://github.com/unslothai/unsloth/issues/7450)

### ⚪ CI 与工程效能

- **#7708 — Core (HF=latest + TRL=latest) CI 失败**：`_DummyTrainer` 缺 `data_collator` 属性，所有 PR 都显示红色 CPU 任务。**无 fix PR**。
- **#7727 — CI 测试 `test_legacy_custom_inventory_filters_registered_mtp_root` 失败**：行为变更导致 MTP root 上的 companion filter 被跳过。**无 fix PR**。

→ [unslothai/unsloth#7708](https://github.com/unslothai/unsloth/issues/7708) / [unslothai/unsloth#7727](https://github.com/unslothai/unsloth/issues/7727)

---

## 对应用开发者的意义

1. **升级 / 新安装需验证 GPU 链路**：受 #7803/#7765 影响，建议开发者在更新到 2026.7.x 后**强制检查** `torch.cuda.is_available()` 和实际显存占用——若降级为 CPU 回退，优先手动装回 3.13.7 或更早版本再继续。

2. **API 流式调用可能被挂起**：基于 Unsloth Studio API 构建 Agent（如 Pi）+ 实时流式监控的场景，建议增加 watchdog / 超时重试机制，等待 #7617 的修复。

3. **对话历史程序化交互需谨慎**：刷新模型回复可能会导致前序分支丢失（#7732），如果应用依赖历史轨迹回溯（如状态机、测试断言），需要先从 PR #7796 确认修复后再升级。

4. **AMD ROCm 用户需更多维护警惕**：iGPU 遮蔽（#7776）和 llama-server 内核不匹配（#7670）表明多设备 AMD 环境仍不够健壮，不适合作为生产推理底座，建议生产环境继续使用 NVIDIA + CDUA 或等待修复合并。

5. **大模型加载仍存在交互障碍**：消费级硬件加载 100GB 级别的 MoE GGUF 缺乏灵活动态控制（#7022）。在用 Studio 承载大模型量化服务时，建议提前验证 `--fit` 策略是否导致 Q4/Q8 模型被错误拒绝。

---

*本日报由 AI 自动生成，所有数据来源于 GitHub（unslothai/unsloth），统计截止 2026-08-04。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*