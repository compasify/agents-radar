# AI 基础设施日报 2026-08-22

> 生成时间: 2026-08-21 23:13 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施横向对比分析报告 — 2026-08-22

## 1. 生态全景

当前 AI 基础设施正处于**架构迁移与生产落地并行的深水区**。一方面，vLLM 的 Model Runner V2 默认化、Rust 前端推进与 llama.cpp v0.2.0 正式发布标志着核心引擎进入代际切换期；另一方面，投机解码（MTP/DFlash）、KV 卸载、PD Disaggregation 等技术在真实负载下的正确性问题密集暴露——vLLM 今日出现投机解码错误 CUDA graph 派发导致输出损坏的严重 bug，SGLang 则面临 HiCache 分布式一致性与语义复用路线图的攻坚。与此同时，MCP 生态成为网关层（LiteLLM）的主要故障高发区，而 Agent 场景正倒逼推理栈在 KV 缓存利用（Ollama 禁用 token countdown）、工具调用解析（Qwen3-Coder）、多模态输入（WebP 支持）等应用链路细节上精进。整体判断：**基础设施的竞争重心已从"能否跑"转向"在复杂生产形态下是否稳、是否省、是否可观测"**。

---

## 2. 各项目活跃度对比

| 项目 | 核心 Issues | 核心 PRs | Release | 今日焦点 |
|------|------------|----------|---------|----------|
| **vLLM** | ~9 | ~15 | 无 | MRV2 默认化推进；投机解码正确性危机（#53051）；KV 卸载 P2P 修复 |
| **SGLang** | ~14 | ~14 | 无 | HiCache/PD 路线图升温；多 bug 修复（FP4、ROCm、DP Attention）；uv 安装陷阱 |
| **llama.cpp** | ~8 | ~10 | **v0.2.0** + b10566 | 大版本发布；LFM2 张量分割；Mamba2 GEMM 化；Vulkan/HIP 性能劣化未决 |
| **Ollama** | ~12 | ~7 | **v0.33.0-rc0** | 高影响回归（长文本不停止、Embedding 全零、cgroup 配额）；MLX 前缀缓存缺失 |
| **LiteLLM** | ~20 | ~6 | v1.99.0-dev.2（预发布） | MCP OAuth/路由集中故障；Azure 成本映射缺失；OTEL 追踪扩展 |
| **Unsloth** | ~10 | ~8 | 无 | GRPO 进入 Studio；ROCm SDPA 开启；Vulkan UMA 显存检测修复 |

*注：Issue/PR 数为今日报告中有实质内容的条目数，非 GitHub 总数；活跃度排序：SGLang/vLLM 在深度技术议题上最密集，LiteLLM 在社区问题数量上最多但 PR 转化率偏低，Unsloth 偏向应用层迭代。*

---

## 3. 模型支持竞速

| 模型/架构 | vLLM | SGLang | llama.cpp | Ollama | 备注 |
|-----------|------|--------|-----------|--------|------|
| **DeepSeek-V4-Flash** | ⚠️ Ampere 不支持 | ⚠️ FP4 默认切 FlashInfer | ⚠️ ROCm 乱码 | — | 三家均有阵痛，Hopper/Blackwell 是安全区 |
| **Qwen3 系列（3.5/3.6/3.8）** | ✅ 回归修复 | ⚠️ 多模态 RoPE/工具调用 bug | — | ⚠️ Coder 工具解析修复中 | 覆盖面最广，但正确性均未完全收敛 |
| **Kimi-K3 / DFlash** | ✅ ROCm 解码增强 | ⚠️ NaN 污染未发布 | ✅ DFlash2 推进中 | ✅ MLX DFlash2 推进中 | vLLM 走在前列 |
| **GLM-5.1 / 5.2** | ⚠️ MTP 挂起 | ✅ MoE gate 修复 | ⚠️ RPC 崩溃 | — | llama.cpp 指示已修复 |
| **LFM2/LFM2MOE** | — | — | ✅ 张量分割（新） | — | llama.cpp 首发 |
| **Mamba2** | ✅ GDN 前缀修复 | — | ✅ GEMM 调度（新） | — | 混合架构成主流 |
| **MiniCPM-SALA / Cosmos3** | — | ✅ 新服务支持 | — | — | SGLang 扩展多模态/扩散 |
| **Qwen3-VL** | ✅ 回归修复 | ⚠️ 视觉特征偏差 | ✅ mmproj 修复 | — | 视觉理解仍是痛点 |

**结论**：vLLM 在混合架构（GDN/MTP/MLA）与多硬件后端的覆盖深度上领先；llama.cpp 在端侧新架构适配节奏快（LFM2/Mamba2/DFlash2 同步推进）；SGLang 正以多模态+扩散模型扩大差异化；Ollama 作为包装层跟随上游；LiteLLM 不直接参与模型竞赛，但承担了模型接入后的**成本映射与参数透传**职责——这部分今日问题不少。

---

## 4. 性能优化前沿

今日优化火力集中在五个方向，按投入密度排序：

**① KV Cache 管理与复用（最热）**
- SGLang 权重缓存守护进程将 Qwen3-235B FP8 加载从 ~300s 降至 **<1s**（量级飞跃）
- SGLang 语义 KV 复用（#31057）实现跨前缀共享，直击 RAG 场景
- Ollama 禁用 Claude Code token countdown 避免 KV 全失效（系统消息前移导致）
- vLLM KV 卸载 P2P 供需修复 + SGLang HiCache buffer 竞态修复

**② 投机解码/批处理调度**
- vLLM 修复 uniform-decode 批次的 CUDA graph 派发与最宽 batch 捕获（#52000/#50488）
- llama.cpp MTP 自适应深度（状态机控制 draft 深度）
- SGLang EAGLE topk==1 跳过全 vocab softmax（ROCm）

**③ 算子融合与内核优化**
- vLLM MoonViT Q/K 复数 RoPE 融合（减少每层 2 次 ApplyRotaryEmb）
- SGLang SANA-Video RoPE 融合 JIT 算子（bit-exact 校验）
- llama.cpp 统一 `ggml_rope_set_offset()` + Mamba2 展平投影切换 GEMM 调度
- Unsloth 开启 ROCm AOTriton SDPA（替换 MATH fallback）

**④ 分布式/异构执行**
- SGLang Qwen MoE shared expert 与 DeepEP routed experts 重叠执行
- llama.cpp LFM2 张量分割、多节点 RPC 修复
- vLLM Rust 前端与 MRV2 默认化（架构级调度变迁）

**⑤ 量化与精度**
- SGLang DeepSeek V4 FP4 默认 FlashInfer MXFP4 MoE
- vLLM 在线激活量化键覆盖（AITER_MXFP4_BF16 选择）
- llama.cpp Vulkan FA MMQ 精度修复（fp32 防 denorm）

---

## 5. 分层定位差异

| 层次 | 项目 | 核心定位 | 今日关键动作 | 差异化标签 |
|------|------|---------|-------------|-----------|
| **推理引擎（生产级）** | vLLM | 高性能模型服务，主打 PD 分离、多硬件、企业级 | MRV2 默认化；投机解码正确性补漏 | 架构前瞻性最强，但迁移阵痛明显 |
| | SGLang | 推理引擎 + Agent 场景优化（RadixAttention、HiCache） | 分布式 KVCache 路线图升温；多 bug 修复密集 | 在 RL/Agent 长上下文上押注最深 |
| **本地/边缘运行时** | llama.cpp | GGUF 量化 + 多后端（CPU/Vulkan/Metal/SYCL） | v0.2.0 正式发布；新架构覆盖节奏快 | 端侧覆盖最广，性能稳定性受后端碎片化拖累 |
| | Ollama | 本地运行时 + 桌面应用层（基于 llama.cpp） | v0.33.0-rc0；MLX 生态强化 | 开发者体验优先，但上游 bug 传导快 |
| **网关/代理层** | LiteLLM | 统一 API 接入、成本管理、MCP 集成、可观测性 | MCP 鉴权故障集中暴露；成本映射修正 | 承担"模型接入后的最后一公里" |
| **训练/微调** | Unsloth | 微调框架 + Studio 应用（训练/推理/Agent） | GRPO 进 Studio；ROCm/Vulkan 稳定化 | 从训练向推理/应用层延伸，RL 门槛降低 |

**定位边界正在模糊**：llama.cpp 向上延伸 server 能力（mmproj-device、Agent 工具图像输入），Unsloth 从训练向推理/服务渗透，Ollama 依托 llama.cpp 但构建自有 MLX 分支。

---

## 6. 值得关注的趋势信号

**① 投机解码进入"生产事故高发期"**
vLLM 出现 prefill 被误派发至 spec-decode graph 导致输出损坏（#53051）、SGLang DSPARK 状态跨 rank 分歧（#33614）、llama.cpp MTP 触发 CUBLAS 崩溃（#26558）——投机解码在混合架构（GDN/SWA/MLA）组合下正确性远未成熟。**Agent 开发者**在 Qwen3-Next/GLM-5.1 等模型上启用 MTP 前必须做正确性回归。

**② PD Disaggregation 与 KV Cache 经济性成为主线**
SGLang HiCache 路线图（#21846/#22607）与 vLLM KV 卸载 P2P（#53330）同日推进，叠加 Ollama 禁用 token countdown 保 KV 命中——行业正从"算得快"转向"**缓存得巧**"。长上下文 Agent 的 TTFT 瓶颈将由 KV 复用策略决定，而非纯算力。建议应用侧关注 SGLang 语义 KV 复用（#31057）与 Ollama MLX prefix cache 恢复点（#17901）的落地。

**③ 网关层正在成为 Agent 链路的薄弱环节**
LiteLLM 今日 MCP OAuth2 100% 失败（#37222）、凭据丢失（#36358）、上下文泄漏（#30416）集中爆发，说明 MCP 集成尚处早期。而 Ollama 的 Anthropic xhigh 映射降级、Qwen3-Coder 工具解析缺陷也指向同一结论：**Agent 工具调用链路的可靠性比模型能力更紧迫**。

**④ AMD/Apple 后端争夺战白热化**
Unsloth 修复 ROCm SDPA + Vulkan UMA 显存检测、SGLang 适配 ROCm 7.14 pip-wheel 安装、llama.cpp 持续面对 Vulkan/HIP 性能劣化投诉——AMD 硬件在推理栈中已有"能用"，但离"好用"仍有距离。Apple Silicon 侧 MLX 的 KV 缓存缺失（Ollama #17829）说明生态尚未成熟。

**⑤ 成本可观测性升维**
LiteLLM 正在补全 OTEL 追踪覆盖（speech/image/moderation）、Azure 缓存计费修正，以及对 auto-router 节省金额透传——**FinOps 已从"按 token 计费"细化到"按缓存命中、按路由策略、按模态"**。基础设施采购者应关注成本数据的可信度。

**⑥ 架构迁移窗口期的部署风险**
vLLM MRV2 默认化 + Rust 前端、llama.cpp v0.2.0 大版本、SGLang uv 安装陷阱（静默装 6 个月前的 0.5.9）——**当前不是激进升级的时点**。建议生产环境锁定已验证版本至少 2-4 周，并对上游迁移信号（MRV2、uv 升级、RC 版本）建立内部跟踪机制。

---

*报告基于各项目 GitHub 公开数据聚合分析，数据截至 2026-08-22。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 动态日报 — 2026-08-22

## 1. 今日速览

DeepSeek-V4-Flash 在 Ampere（SM80/A100/A800）平台的缺失仍是社区最关注的问题，相关讨论已累计超 100 条评论。与此同时，合并投机解码（MTP/DFlash）与 KV 卸载相关的正确性修复成为今日 PR 主线；**Model Runner V2（MRV2）默认启用**（#53183）与 **Rust 前端推进**（#44280）意味着架构级变更即将扩大影响面。

---

## 2. 版本发布与破坏性变更

**无新 Release**，但需关注以下架构迁移信号：

- **MRV2 默认启用进行中**：PR #53183 尝试将所有模型默认切换到 Model Runner V2，目前处于 CI 问题清理阶段。该变更可能影响 CUDA graph 捕获路径及自定义模型注册方式，模型开发者应提前验证兼容性。
  https://github.com/vllm-project/vllm/pull/53183

- **Rust 前端功能对齐持续跟进**：Issue #44280 跟踪 Rust 前端与 Python API server 的特性差异，`VLLM_USE_RUST_FRONTEND=1` 仍是实验性入口。
  https://github.com/vllm-project/vllm/issues/44280

---

## 3. 新模型与硬件支持

- **Cohere ChatV2 渲染端点**：PR #53219 新增 `/cohere/v2/chat/render` 端点，补齐 Cohere Chat V2 API 的 prompt 渲染能力。
  https://github.com/vllm-project/vllm/pull/53219

- **模型能力注册机制**：PR #52459 提出“直接注册模型能力”（替代子进程探测），简化新模型接入流程。
  https://github.com/vllm-project/vllm/pull/52459

- **DeepSeek-V4-Flash 的 Ampere 支持仍未落地**：Issue #50576 与 #40851 持续追踪 SM8x（A100/A800/RTX 30xx）运行 DeepSeek-V4-Flash 时的 `deepgemm` 初始化失败问题，当前无 fix PR；L20 上另有 `auto_functionalized was not removed` 报错（#42949）。
  https://github.com/vllm-project/vllm/issues/50576
  https://github.com/vllm-project/vllm/issues/40851
  https://github.com/vllm-project/vllm/issues/42949

- **ROCm 侧投机解码增强**：PR #53001 为 Kimi-K3 DSpark 草稿模型在 ROCm 上增加 Aiter MLA 非因果 draft block 解码支持；PR #52990 将 FlashInfer MLA decode 迁移至统一 API。
  https://github.com/vllm-project/vllm/pull/53001
  https://github.com/vllm-project/vllm/pull/52990

- **Qwen3-VL 回归修复**：PR #53225 禁用 Qwen3-VL dummy prompt 的截断逻辑，修复大图输入时图像 token 被截到 4095 导致测试失真的问题。
  https://github.com/vllm-project/vllm/pull/53225

---

## 4. 性能与优化

- **MoonViT Q/K 复数 RoPE 融合**（#53168）：Kimi 系列模型中 MoonViT 编码器不再为 Q/K 单独物化实虚部，改为 SM90+ Triton 路径直接读取 packed-QKV 并完成旋转，减少每层两处 ApplyRotaryEmb 调用。
  https://github.com/vllm-project/vllm/pull/53168

- **投机解码下 uniform-decode 批次的 CUDA graph 调度优化**（#52000）：修复 `dispatch()` 将部分并发场景退回 eager PIECEWISE 从而引入固定延迟泡沫的问题，转为使用 padded FULL graph。
  https://github.com/vllm-project/vllm/pull/52000

- **投机解码最宽 uniform-decode batch 捕获**（#50488）：默认捕获更宽的 uniform decode batch，配套 warmup lookahead reservation 与 uniform-decode dispatch 修复。
  https://github.com/vllm-project/vllm/pull/50488

- **在线量化激活键覆盖**（#51808）：支持 `--quantization-config.moe.activation` 覆盖激活量化键（如 `AITER_MXFP4_BF16`），便于在 MOE 后端上选择更优算子。
  https://github.com/vllm-project/vllm/pull/51808

---

## 5. 稳定性与回归

以下按影响面从大到小排列：

- **[严重] 投机解码下 prefill 被误派发至 spec-decode FULL CUDA graph**（#53051）：当 prefill 调度 token 数恰好等于 `uniform_decode_query_len × num_reqs` 时，被分类为 uniform-decode 并执行捕获的 spec-decode graph，导致 GDN/线性注意力状态静默丢失、输出变为垃圾。影响 Qwen3-Next 等混合架构模型；**无 fix PR**。
  https://github.com/vllm-project/vllm/issues/53051

- **[严重] KV 卸载 P2P 供需不一致导致请求悬挂**（#53330 + #53329）：P2P 二级存储中 producer/consumer 独立计算供需，不一致时消费端请求会挂起至超时；另一处修复处理 `HIT_PENDING` 键被错误驱逐的问题，两 PR 分别对应 #53083 与 #53062。
  https://github.com/vllm-project/vllm/pull/53330
  https://github.com/vllm-project/vllm/pull/53329

- **[高] V1 + MTP + GLM-5.1 在持续流量下 worker 挂起**（#40926）：`step_counter=0`，`sample_tokens` RPC 超时后 EngineDeadError。目前无 fix PR。
  https://github.com/vllm-project/vllm/issues/40926

- **[高] 混合 SWA 前缀缓存命中率在轮询场景归零**（#48435）：Gemma-4-31B 在多会话 round-robin 约 25% 池占用时，跨请求前缀命中急剧降为零。**无 fix PR**。
  https://github.com/vllm-project/vllm/issues/48435

- **[中] MTP 投机解码下混合 GDN 前缀缓存命中恢复**（#52244）：Qwen3.5-122B-A10B 在 MTP 模式下 replay 无法达到应有前缀深度，特定长度倍数完全无命中；修复已提 PR。
  https://github.com/vllm-project/vllm/pull/52244

- **[中] DFlash 全滑动窗口草稿 + 前缀缓存的兼容性修复**（#50457）：混合 KV cache 中滑动窗口 / mamba align / full attention 共存导致前缀缓存错误，修复后可支持全滑动 DFlash drafter。
  https://github.com/vllm-project/vllm/pull/50457

- **[中] Intel XPU 双卡 TP=2 崩溃 `zeMemOpenIpcHandle INVALID_ARGUMENT`**（#48953）：Battlemage B50 双卡 TP 初始化失败，与 #41663 同源。
  https://github.com/vllm-project/vllm/issues/48953

- **[低] DeepSeek-V4 权重加载 UnboundLocalError**（#42769）：专家映射无匹配时 `name_mapped` 未绑定。
  https://github.com/vllm-project/vllm/issues/42769

---

## 6. 对应用开发者的意义

- **DeepSeek-V4 系列暂不可用于 Ampere 生产**：若你在 A100/A800 集群上构建应用，请勿将 DeepSeek-V4-Flash 列为可用后端；可考虑 Hopper/Blackwell 或等待官方支持。

- **投机解码 + 混合架构模型选型需谨慎**：今日报告中多处 bug 集中在 MTP/DFlash 与 GDN/SWA/MLA 组合场景，涉及前缀缓存失效、错误 CUDA graph 派发乃至输出损坏。生产环境若使用 Qwen3-Next / GLM-5.1 / Kimi-K3 等模型，建议在启用投机解码前做充分的正确性回归，并跟踪 #53051、#40926、#52244 的修复进展。

- **KV Offload（P2P）暂不建议在生产开启**：两个修复 PR（#53330/#53329）刚提交，尚未合入，说明该路径仍处于早期稳定化阶段，预期外挂起和键丢失问题可能导致请求超时。

- **Rust 前端与 MRV2 将改变部署形态**：Rust 前端已在仓库内作为替代入口，MRV2 即将默认化——构建自定义模型或依赖内部 runner 行为的团队应尽早跟随 upstream 迁移，避免被 breaking change 打断。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

## SGLang 动态日报 2026-08-22

### 1. 今日速览

今日动态主要围绕三方面：**HiCache / PD Disaggregation 路线图讨论持续升温**（分布式 KVCache 与一致性修复方案均获得高关注）；**一批正确性与稳定性 Bug 修复 PR 密集落地**，重点覆盖 DeepSeek V4 FP4、Qwen3.8 系列和 AMD ROCm 后端；**一个安装陷阱浮出水面**——旧版 uv 会静默安装 6 个月前的 SGLang 0.5.9，影响面较大。无新版本发布。

---

### 2. 版本发布与破坏性变更

**无新 Release。**

需关注的默认行为变更候选：

- **[DeepSeek V4] FP4 专家检查点将默认使用 FlashInfer MXFP4 MoE**（#35919）：当用户在受支持的 NVIDIA GPU 上使用 `auto` MoE 后端时，现在会自动选择 `flashinfer_mxfp4` 运行器。此变更影响所有 DeepSeek V4 FP4 部署，建议相关用户验证推理输出与性能。[PR #35919](https://github.com/sgl-project/sglang/pull/35919)

---

### 3. 新模型与硬件支持

- **MiniCPM-SALA 原生服务支持**（#30360）：新增对 MiniCPM-SALA 的 serving 支持，处于开放 PR 状态。[PR #30360](https://github.com/sgl-project/sglang/pull/30360)
- **Cosmos3 图像生成模型支持**（#34747）：新增 Cosmos3 的 Transfer 能力，扩展 SGLang 在扩散模型领域的覆盖面。[PR #34747](https://github.com/sgl-project/sglang/pull/34747)
- **ROCm 7.14（gfx942 / gfx950）发布支持**（#35319）：由于 ROCm 7.14 仅有 pip wheel 和 docker 镜像，无 apt 仓库，该 PR 构建了基于 pip channel 的安装路径，适配新 SDK 位于 `site-packages` 而非 `/opt/rocm` 的变化。[PR #35319](https://github.com/sgl-project/sglang/pull/35319)
- **Qwen3.5 GDN + 投机解码在 XPU 上报错**（#34720，Bug）：`causal_conv1d_update_xpu()` 收到意外关键字参数 `intermediate_conv_window`，影响 XPU 后端使用。[Issue #34720](https://github.com/sgl-project/sglang/issues/34720)

---

### 4. 性能与优化

- **权重缓存守护进程路线图**（#33522）：Phase 1 已落地（#27139），per-rank 守护进程通过 CUDA IPC 持有量化后权重，**将 Qwen3-235B FP8 的权重加载时间从 ~306–327 秒降至 <1 秒**。[Issue #33522](https://github.com/sgl-project/sglang/issues/33522)
- **EAGLE topk==1 跳过全 vocab softmax**（#35872，ROCm）：当 `--speculative-eagle-topk 1` 时，draft tree 退化为单链，`topk_p` 未被消费，softmax 计算可整体跳过。当前在 ROCm 上落地。[PR #35872](https://github.com/sgl-project/sglang/pull/35872)
- **Qwen MoE shared expert 与 DeepEP routed experts 重叠执行**（#34938）：将默认 stream 上的 shared expert 计算与 routed-expert 路径重叠，利用空闲 alternate stream，减少序列化等待。[PR #34938](https://github.com/sgl-project/sglang/pull/34938)
- **SANA-Video interleaved RoPE 融合 JIT 算子**（#35695）：新增 paired BF16 CUDA kernel，保留 eager fp64 算术以保证 bit-exact 输出，支持首见位级校验和 eager fallback。[PR #35695](https://github.com/sgl-project/sglang/pull/35695)
- **DeepSeek V4 FP4 默认启用 FlashInfer MXFP4 MoE**（#35919）：在支持硬件上避免用户误落回低效 MoE 路径，属于性能/正确性双重改进。[PR #35919](https://github.com/sgl-project/sglang/pull/35919)
- **语义 KV 缓存复用（模糊匹配 radix 后端）**（#31057）：支持跨共享语义但前缀不一致的 prompt 复用 KV，对 RAG / 多用户知识库场景有潜力，当前为 opt-in 功能 PR。[PR #31057](https://github.com/sgl-project/sglang/pull/31057)

---

### 5. 稳定性与回归

按严重程度排列：

**高影响 / 生产事故类**

- **`uv pip install sglang` 静默安装 0.5.9（6 个月前）**（#35912）：uv < 0.12 不尊重传递依赖中的预发布说明符，导致装到旧版，模型输出“流畅但错误”。已有配套文档修复 PR #35920。建议开发者立即检查自身安装版本。[Issue #35912](https://github.com/sgl-project/sglang/issues/35912) | [PR #35920](https://github.com/sgl-project/sglang/pull/35920)
- **Kimi-K3 长上下文 [PAD] 风暴 + DSPARK inf/nan 断言**（#32968）：根因指向已上游修复（#32477）的 NaN 污染，但修复不在任何已发布镜像中。`allowed_special="all"` 可注入 `[PAD]` token，生产环境应暂时规避。[Issue #32968](https://github.com/sgl-project/sglang/issues/32968)

**正确性 / 崩溃类**

- **PrefillDelayer 在 DP Attention + chunked prefill 下进入混合状态反馈循环**（#35241）：调度器性能稳定性问题，可导致 prefill 进度完全停滞。[Issue #35241](https://github.com/sgl-project/sglang/issues/35241)
- **Qwen3.8-27B NVFP4 在 RTX 5090 上 decode-graph 捕获 OOM，torch.compile 6x 回归**（#35777）：cookbook 推荐配置的 `--mem-fraction-sta` 未适配 32GB 显存，且编译路径存在严重性能回退。[Issue #35777](https://github.com/sgl-project/sglang/issues/35777)
- **MiniMax-M2 CPU 推理处理请求时崩溃**（#35779）。[Issue #35779](https://github.com/sgl-project/sglang/issues/35779)
- **Qwen3.6/Qwen3.8 多模态 mRoPE 位置传入 1D 融合 QK RMSNorm+RoPE kernel**（#35345）：多模态位置编码被错误传递给 1D kernel。[Issue #35345](https://github.com/sgl-project/sglang/issues/35345)
- **v0.5.17 中 Qwen3-VL 的 visual features 与 Transformers/vLLM 存在偏差**（#35772）：影响细粒度 grounding 任务。[Issue #35772](https://github.com/sgl-project/sglang/issues/35772)
- **Speculative sampler 在 RNG 边界可能接受零概率 draft**（#35771）。[Issue #35771](https://github.com/sgl-project/sglang/issues/35771)
- **Anthropic `/v1/messages`：tool_result 内嵌 tool_reference 导致 HTTP 500**（#35692）。[Issue #35692](https://github.com/sgl-project/sglang/issues/35692)
- **`move_logprobs_to_cpu` 中 `list` 对象无 `tolist` 属性**（#35705）：调度器异常退出。[Issue #35705](https://github.com/sgl-project/sglang/issues/35705)
- **EncoderScheduler 在请求超时后仍进行调度**（#35891）：Timed-out future 已取消但 PendingRequest 仍滞留队列，请求仍被广播至 TP workers。[Issue #35891](https://github.com/sgl-project/sglang/issues/35891)

**已有 Fix PR 的稳定性修复**

- **GLM MoE 运行时权重更新后 FP32 gate 缓存过期**（#35883）：修复路由使用 stale weights 的问题，改为直接存储 FP32 gate 权重。[PR #35883](https://github.com/sgl-project/sglang/pull/35883)
- **DP Attention 低并发下 hybrid-SSM（Nemotron-H）失败**（#34535）：覆盖 `--max-running-requests < attn_dp_size` 导致 worker 零槽位的问题。[PR #34535](https://github.com/sgl-project/sglang/pull/34535)
- **HiCache buffer 模式 load-back 所有权竞态**（#35769）：新增可选 prefetch anchor 锁，修复 span 插入与异步 H2D 传输的竞态。[PR #35769](https://github.com/sgl-project/sglang/pull/35769)
- **DSPARK / DFLASH 状态跨 TP rank 分歧**（#33614）：修复投机解码状态不一致导致的 rank 间死锁风险。[PR #33614](https://github.com/sgl-project/sglang/pull/33614)
- **ROCm FP32 LM head `mm(out_dtype)` 快速路径崩溃**（#34681）：`BFloat16 输入 + float 输出` 在 ROCm GEMM 上不受支持，已为 fast path 增加守卫。[PR #34681](https://github.com/sgl-project/sglang/pull/34681)
- **sinks dtype 错误地由 attention backend 派生**（#35921）：修复 Granite 等模型 `sinks` 权重 dtype 与运行时上下文不匹配的问题。[PR #35921](https://github.com/sgl-project/sglang/pull/35921)
- **Kimi K3 未解析的模板语法泄漏到响应中**（#35393）：禁用 tool-call parser 时，`<|open|>tools<|sep|>` 等字面量直接透传给客户端。[PR #35393](https://github.com/sgl-project/sglang/pull/35393)

---

### 6. 对应用开发者的意义

- **立即检查 SGLang 版本**：`uv pip install sglang` 在 uv < 0.12 下可能装到 0.5.9，导致模型输出看似正常但实际错误。升级 uv 或显式固定版本号后重新验证。[Issue #35912](https://github.com/sgl-project/sglang/issues/35912)
- **Kimi-K3 与 Qwen3-VL 生产部署需谨慎**：两者分别存在 NaN 污染和 vision feature 偏差问题，且修复尚未进入 release。新集成应在灰度环境验证后再上线。
- **HiCache / PD Disaggregation 路线图值得长期跟踪**：SGLang 分布式 KVCache 方案（#21846）和 HiCache 一致性修复计划（#22607）是解决 Agentic 长上下文工作负载的关键方向，可关注后续里程碑节奏。[Issue #21846](https://github.com/sgl-project/sglang/issues/21846) | [Issue #22607](https://github.com/sgl-project/sglang/issues/22607)
- **语义 KV 缓存复用（#31057）若合并**，对 RAG 类应用有直接价值——允许“同义但不同前缀”的 prompt 共享 KV，减少 prefill 计算。
- **Anthropic 兼容端点存在 tool_reference 兼容问题**（#35692），若你的 Agent 应用重度依赖 `tool_result` 内嵌引用，需注意 HTTP 500 风险并考虑临时规避方案。[Issue #35692](https://github.com/sgl-project/sglang/issues/35692)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 动态日报 2026-08-22

## 1. 今日速览

llama.cpp 今日正式发布 v0.2.0 版本（Nightly build 亦同步更新至 b10566），标志着项目进入一个新的稳定阶段。在代码层面，今日提交主要聚焦于模型支持与后端优化：新增了 LFM2/LFM2MOE 的张量分割能力（Tensor Split），并合入了 `ggml_rope_set_offset()` 优化以提升 RoPE 运算效率。与此同时，Vulkan 与 HIP 后端的性能劣化报告仍在持续累积，AMD ROCm 用户受影响较重，建议关注对应 issue 进展。

## 2. 版本发布与破坏性变更

- **[v0.2.0](https://github.com/ggml-org/llama.cpp/releases/tag/v0.2.0)**: 正式版本发布，Nightly 同步至 [b10566](https://github.com/ggml-org/llama.cpp/releases/tag/b10566)。作为大版本更新，建议升级前关注 release notes 中可能涉及的配置兼容性调整。
- **[b10549](https://github.com/ggml-org/llama.cpp/releases/tag/b10549)**: 启用 LFM2/LFM2MOE 模型的张量分割支持（[#26993](https://github.com/ggml-org/llama.cpp/pull/26993)），多 GPU 用户可关注。
- **[b10568](https://github.com/ggml-org/llama.cpp/releases/tag/b10568)**: 模型加载统一采用 `ggml_rope_set_offset()`（[#27382](https://github.com/ggml-org/llama.cpp/pull/27382)），部分适配 deepseek2。若你使用自定义的模型转换脚本，请注意 RoPE 相关参数的兼容性。

## 3. 新模型与硬件支持

- **LFM2/LFM2MOE**: 新增张量分割支持（[b10549](https://github.com/ggml-org/llama.cpp/releases/tag/b10549)），适配多 GPU 推理场景。
- **Mamba2 架构优化**: PR [#27513](https://github.com/ggml-org/llama.cpp/pull/27513) 将 in/out projections 展平，使解码路径从 GEMV 切换为 GEMM 调度，主要受益场景是高并发（npl≥8）下的推理吞吐。
- **DFlash2 推理支持**: PR [#27342](https://github.com/ggml-org/llama.cpp/pull/27342) 提出支持本地卷积与候选选择器，仍处于进行中状态。
- **WebP 图像输入**: PR [#27520](https://github.com/ggml-org/llama.cpp/pull/27520) 计划通过 FFmpeg 代码路径支持 webp 格式，无需引入额外依赖。
- **Zamba2 架构支持**: PR [#21412](https://github.com/ggml-org/llama.cpp/pull/21412) 推进中。
- **Metal 4.0**: PR [#27461](https://github.com/ggml-org/llama.cpp/pull/27461) 为 tensor API 请求 Metal 4.0 语言版本，并对不支持的硬件增加了 guard。

## 4. 性能与优化

- **Metal KV 缓存**: 针对大批量场景优化 dequant 逻辑（[b10538](https://github.com/ggml-org/llama.cpp/releases/tag/b10538)），减少小 batch 下的额外开销。
- **Metal Tensor API 边界修复**: [b10545](https://github.com/ggml-org/llama.cpp/releases/tag/b10545) 修复了 mat-mat kernel 在 K 非 32 倍数时越界读取的问题，直接影响解码正确性。
- **Vulkan MoE 优化**: PR [#26686](https://github.com/ggml-org/llama.cpp/pull/26686) 在 Vulkan 后端为 routed MoE 增加 row ID 与 expert count 的 hoisting 支持，减少重复查找，提升 prompt processing 效率。
- **Vulkan FA MMQ 精度修复**: [b10539](https://github.com/ggml-org/llama.cpp/releases/tag/b10539) 将 Q 量化计算切换回 fp32，避免 denorm 导致的溢出问题。
- **Mamba2 GEMM 调度**: 见上文新模型支持部分，核心收益是并发解码吞吐的提升。
- **MTP 自适应深度**: PR [#27210](https://github.com/ggml-org/llama.cpp/pull/27210) 计划引入 `--spec-type draft-mtp-adaptive`，以状态机控制 draft 深度，平衡延迟与算力开销。

## 5. 稳定性与回归

以下按严重程度排序，标注【修复中】或【待确认】:

- **【修复中】CUDA kernel stall 触发看门狗**: Issue [#27102](https://github.com/ggml-org/llama.cpp/issues/27102)（RTX Pro 6000 Blackwell）报告模型执行期间 CUDA kernel 停滞并被看门狗杀死。目前仍开放，受影响用户请提供更多 stack trace。
- **【待确认】DeepSeek V4 在 ROCm 上乱码输出**: Issue [#25436](https://github.com/ggml-org/llama.cpp/issues/25436) 影响 Strix Halo 平台（Ryzen AI Max+ 395 + ROCm），多个 GGUF 量化版本均有复现。
- **【待确认】Vulkan 性能下降**: Issue [#24066](https://github.com/ggml-org/llama.cpp/issues/24066) 报告在 RX 6600 上较新版本性能显著劣化，41 条评论仍在排查中。
- **【修复中】llama-server 硬崩溃**: Issue [#26558](https://github.com/ggml-org/llama.cpp/issues/26558) 报告在 KV 缓存饱和时使用 `--spec-type draft-mtp` 触发 `cublasSgemm INVALID_VALUE` 崩溃。
- **【修复中】SYCL 第二次 prompt 输出乱码**: Issue [#26845](https://github.com/ggml-org/llama.cpp/issues/26845) 影响 Intel Arc Pro B60，目前尚无明确修复。
- **【已修复】多节点 RPC 崩溃**: Issue [#26583](https://github.com/ggml-org/llama.cpp/issues/26583) 涉及 GLM-5.2 多节点 RPC 时 `invalid data ptr`，虽未标签 closed，但相关修复可能已并入近期提交。
- **【已修复】Gemma 4 mmproj CUDA 崩溃**: Issue [#21402](https://github.com/ggml-org/llama.cpp/issues/21402) 已关闭，SIGABRT 问题在后续版本中解决。
- **【回归】MTP 草稿模型加载失败**: Issue [#24795](https://github.com/ggml-org/llama.cpp/issues/24795) 报告 gemma4-assistant MTP 在 b9702/b9717 上回归（b9553 正常），影响 Windows 用户。

## 6. 对应用开发者的意义

- **关注 MTP 路径的稳定性**: 若你的服务启用了 MTP speculative decoding，上述 [#26558](https://github.com/ggml-org/llama.cpp/issues/26558) 与 [#24795](https://github.com/ggml-org/llama.cpp/issues/24795) 回归需要留意。上游修复尚未合入前，建议增加 KV 缓存水位监控，并在 Windows 上固定使用验证过的版本。
- **多模态输入迎来了新的可能性**: webp 支持（[#27520](https://github.com/ggml-org/llama.cpp/pull/27520)）将扩大视觉模型的图像输入兼容性，减少预处理环节的格式转换成本；`input_image` 工具输出支持（[#22575](https://github.com/ggml-org/llama.cpp/pull/22575)）则允许 Agent 从工具调用中直接获取图像并参与多模态推理，对 Agent 类应用是较大的能力增强。
- **server/UI 交互改进**: 新增 `--mmproj-device` 参数（[b10541](https://github.com/ggml-org/llama.cpp/releases/tag/b10541)）允许将视觉编码器与语言主体分离部署到不同设备，这为资源受限的边缘场景提供了更精细的调度选择，同时也意味着后端起服务时需要考虑新参数带来的设备分配逻辑。
- **服务端并发稳定性**: PR [#27496](https://github.com/ggml-org/llama.cpp/pull/27496) 修复了 `--fit` 与 KV-unified 组合下的上下文窗口上限问题，对依赖长上下文 Agent 场景有正向影响。
- **Vulkan 后端用户需谨慎升级**: 如果使用 AMD GPU 或 Intel Arc，当前 master 分支的性能波动仍未收敛（[#24066](https://github.com/ggml-org/llama.cpp/issues/24066)、[#23774](https://github.com/ggml-org/llama.cpp/issues/23774)），建议在压测通过后再做生产升级决策。

---

*本日报数据基于 GitHub 公开 Issue / PR / Release 信息自动聚合生成，内容仅供参考。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 动态日报 2026-08-22

## 今日速览

Ollama 发布 v0.33.0-rc0，重点推进 MLX 引擎修复与 Claude Desktop 集成。社区侧出现多个高影响回归报告：v0.32.11 起长文本生成无法停止、容器环境忽略 cgroup CPU 配额导致吞吐暴跌、Embedding 静默返回全零向量等；同时多支修复 PR 已提交（Anthropic xhigh 映射、Qwen3-Coder 工具调用解析、llama-server 日志刷屏等），建议生产环境暂缓升级并跟踪进展。

---

## 版本发布与破坏性变更

### v0.33.0-rc0
- 发布链接：https://github.com/ollama/ollama/releases/tag/v0.33.0-rc0
- 主要变更：
  - MLX：修复 Linux/Windows 上错误的 macOS 假设；同步上游 MLX 更新；若干 lint 修复
  - App：新增 Claude Desktop API 支持
- 解读：RC 版本，主要面向 MLX 后端体验和桌面端 Claude 集成验证；暂未发现公开的破坏性变更。

---

## 新模型与硬件支持

- **MLX DFlash2 支持（进行中）**  
  PR #17865：为 `DFlash2DraftModel` checkpoints 添加原生 MLX 加载与推理，支持动态短卷积、并行路径选择器、旋转草稿 KV 缓存。  
  https://github.com/ollama/ollama/pull/17865

- **Llama 4 预分词器修复（进行中）**  
  PR #17791 / #17699：修正 `tokenizer.ggml.pre` 未被识别为 `llama4` 的问题，避免转换后的 GGUF 因 tokenizer 回退到 GPT-2 导致 token ID 不一致。  
  https://github.com/ollama/ollama/pull/17791  
  https://github.com/ollama/ollama/pull/17699

---

## 性能与优化

- **禁用 Claude Code token countdown 以保留 KV cache（PR #17918）**  
  Claude Code 在每次工具结果后注入 “tokens left” 系统消息，Ollama 将系统消息前移会导致每次请求 KV cache 全部失效。该 PR 将关闭该行为。  
  https://github.com/ollama/ollama/pull/17918

- **MLX prefix cache 恢复点（PR #17901）**  
  Agent 客户端取消长 prefill 后，MLX 引擎不再丢弃已计算内容；重试可从恢复点继续，避免每次从零开始。  
  https://github.com/ollama/ollama/pull/17901

- **Benchmark 使用 HumanEval 补丁提示（PR #17480）**  
  用打包的 HumanEval Python prompt 替代合成 word-list，使投机解码草稿模型获得更真实的代码续写分布。  
  https://github.com/ollama/ollama/pull/17480

- **遗留问题：MLX 无前缀缓存（Issue #17829，Open）**  
  多步 Agent 会话中，MLX 引擎每步仍会全量重新处理 20–30K tokens 的 prompt，TTFT 随上下文线性恶化。  
  https://github.com/ollama/ollama/issues/17829

---

## 稳定性与回归

按严重程度排列，标注是否已有修复 PR。

### 高严重度（无修复 PR 或仍在诊断）

- **长文本生成永不停止（Issue #17910，Open）**  
  v0.32.11 起，macOS 上长 completion 在自然结束后仍持续生成，直到进程被杀。v0.32.9 正常；v0.32.15 仍受影响。  
  https://github.com/ollama/ollama/issues/17910

- **容器中 n_threads 忽略 cgroup CPU 配额（Issue #17916，Open）**  
  在 CPU-limited 容器中从宿主核心数选线程数，触发 spin-wait 与 CFS throttling 竞争，吞吐量实测约下降 45 倍。  
  https://github.com/ollama/ollama/issues/17916

- **Embedding 静默返回全零向量（Issue #17878，Open）**  
  持续负载下 `/v1/embeddings` 与 `/api/embed` 返回 HTTP 200、维度正确、usage 合理，但向量全为零，日志无任何异常。  
  https://github.com/ollama/ollama/issues/17878

- **Windows UI 陷入无限 `/api/v1/settings` GET↔POST 循环（Issue #17876，Open）**  
  `ollama app.exe` 启动后 UI 线程永久阻塞，服务器 readiness 和其他请求均被卡死。  
  https://github.com/ollama/ollama/issues/17876

- **同服务不同模型 num_ctx 行为不一致（Issue #17889，Open）**  
  五个模型均未设置 `num_ctx`，对相同超长 prompt 部分返回 HTTP 400（named 4096），部分 200 且 `prompt_eval_count` 为 2050。  
  https://github.com/ollama/ollama/issues/17889

- **Qwen3.5 在 Vulkan 后端加载失败（Issue #17903，Closed）**  
  v0.32.14 + Vulkan 下 Qwen3.5 系列模型返回 500，`llama-server` 加载时崩溃。  
  https://github.com/ollama/ollama/issues/17903

- **`think:false` 间歇性失效（Issue #17911，Closed）**  
  `qwen3.8:27b-mlx` 通过 `/v1/chat/completions` 流式请求时，推理内容仍被输出，偶尔整个回答进入 reasoning 且 content 为空。  
  https://github.com/ollama/ollama/issues/17911

- **v0.32.14 模型全进 VRAM 后 CPU 占用异常（Issue #17833，Open）**  
  GPU 绑定 100% 时 CPU 仍达 50–80%；回退 v0.32.13 同配置正常。  
  https://github.com/ollama/ollama/issues/17833

### 已有修复 PR（等待合并或验证）

- **Anthropic `/v1/messages` 将 `xhigh` 映射为 `high`（Issue #17906，Open）**  
  导致 Qwen3.8 等模板可用的 `xhigh` effort 降级。  
  修复 PR #17917：在 `FromMessagesRequest` 中保留 `output_config.effort` 原值。  
  https://github.com/ollama/ollama/issues/17906  
  https://github.com/ollama/ollama/pull/17917

- **Qwen3-Coder 工具调用解析缺陷（PR #17914，Open）**  
  丢失闭合标签会令整次请求失败；解析器会重写参数值。长期 Agent 会话中已触发。  
  https://github.com/ollama/ollama/pull/17914

- **llama-server 日志刷屏导致 387MB 日志文件（PR #17913，Open）**  
  默认打开 `--log-verbosity 4`，每次请求约 20 行 slot 日志；修复为非 debug 模式过滤。  
  https://github.com/ollama/ollama/pull/17913  
  原始 issue：#16897

- **子进程继承多余 `LLAMA_API_KEY`（PR #17909，Open）**  
  `llama-server` 可能会读取无关的 `LLAMA_API_KEY` 环境变量导致异常。  
  https://github.com/ollama/ollama/pull/17909

- **Claude Code `[1m]` 上下文窗口后缀被拒绝（PR #17908，Open）**  
  `launch` 命令将带后缀的 selector 直接传给 `/api/show`，导致模型名无效。  
  https://github.com/ollama/ollama/pull/17908

---

## 对应用开发者的意义

- **Claude Code / Agent 集成受影响**：v0.33.0-rc0 配合 PR #17918 可改善 KV cache 命中；但在 PR #17917 合并前，Anthropic 兼容层的 `xhigh` 推理强度会被静默降级，Qwen3.8 等模板效果打折。
- **MLX 后端 Agent 需要关注 Token 经济性**：Issue #17829 表明当前 MLX 引擎每步全量 prefill，长上下文 Agent 会话成本极高；PR #17901 落地后，取消/重试长 prefill 才能不浪费已算缓存。
- **生产监控注意静默失败**：Embedding 全零（#17878）和生成不停止（#17910）都是“响应正常但结果错误”的故障模式，建议在应用侧增加向量范数检查与最大生成 token 硬性截断，并暂缓升级到 v0.32.11–0.32.15。
- **容器部署需显式控制线程数**：在 cgroup 限制环境下，Ollama 默认仍按宿主核心数选取 `n_threads`，建议自行设置 `OLLAMA_NUM_THREADS` 或等待 #17916 修复。
- **API 兼容性缺口仍在**：#7125 对 `max_completion_tokens` 的需求已开放近两年，依赖该字段的 OpenAI 客户端需自行做参数映射或降级到 `max_tokens`。  
  https://github.com/ollama/ollama/issues/7125
- **工具调用解析正在收紧**：Qwen3-Coder / Gemma4 的解析器都有独立修复 PR（#17914、#17888），Agent 框架应升级后回归测试工具调用格式，尤其是 `=` 分隔参数与残缺标签场景。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 动态日报 — 2026-08-22

## 1. 今日速览

今日动态集中在 MCP（Model Context Protocol）相关故障修复、Azure/DeepSeek 模型成本映射修正，以及可观测性（OTEL 追踪、日志回调）增强三个方向。多个修复 PR（#37895、#37896、#37897）已提交或合入，社区对 MCP OAuth/路由问题的关注度持续升高。另有一个新的预发布版本 v1.99.0-dev.2 发布，但无功能性更新，仅附带 Docker 镜像签名验证说明。

---

## 2. 版本发布与破坏性变更

**v1.99.0-dev.2（预发布）** — 本次发布无代码层面的功能性变更说明，唯一注明事项为 Docker 镜像签名验证方式：所有 LiteLLM Docker 镜像均使用 cosign 签名，每次发布使用同一密钥（见 commit `0112e53`）。升级到该预发布版本前请留意：此版本为 dev 构建，不建议直接用于生产环境。 [查看 Release](https://github.com/BerriAI/litellm/releases)

**迁移注意事项（暂无破坏性变更）** — 截至今日，未发现需要特别关注的破坏性 API/配置变更。

---

## 3. 新模型与硬件支持

今日无新增模型支持或新硬件后端（CUDA/ROCm/Metal/CPU）相关动态。当前社区关注点集中在已有模型（Azure GPT-5.6 系列、DeepSeek V4）的成本映射与参数传递修正上。

---

## 4. 性能与优化

**后台健康检查内存/DB 风暴问题（已报告，无修复 PR）** — Issue #37611 指出，启用 `use_shared_health_check: true` 且多 worker 运行时，两个独立缺陷叠加：健康检查结果持久化未按 leader 节点隔离，且每个 worker 每个周期（默认 15 分钟）都会全量加载无界增长的 `LiteLLM_HealthCheckTable`，导致内存接近 OOM 及数据库压力激增。该问题与大规模部署稳定性直接相关，建议相关团队关注。 [Issue #37611](https://github.com/BerriAI/litellm/issues/37611)

**UI 性能回归（持续追踪中）** — Issue #23005 报告 v1.82.x 版本 LiteLLM UI 响应缓慢，至今未关闭。 [Issue #23005](https://github.com/BerriAI/litellm/issues/23005)

---

## 5. 稳定性与回归

按严重程度排列：

**高 — MCP 服务器配置与鉴权故障（多个 issue 集中爆发）**

- **MCP OAuth2 client_credentials 认证 100% 失败**（#37222）：注册 `auth_type: oauth2` / `oauth2_flow: client_credentials` 的 MCP 服务器时，`tools/list` 总是返回 400，运行时 `client_id`/`client_secret` 未传递给 token 端点。无修复 PR。 [Issue #37222](https://github.com/BerriAI/litellm/issues/37222)
- **MCP gateway-DCR bridge 凭据丢失**（#36358）：`auth_type: oauth_delegate` + `dcr_bridge: true` 配置下，上游静态 bearer token 在工具调用时被丢弃，上游请求缺少 Authorization 头。无修复 PR。 [Issue #36358](https://github.com/BerriAI/litellm/issues/36358)
- **添加自定义 MCP Server 报错**（#23869，已关闭，17 条评论）：UI 中创建自定义 MCP Server 返回 "Error creating MCP server"（Could not find ...）。 [Issue #23869](https://github.com/BerriAI/litellm/issues/23869)
- **MCP 路由上下文状态泄漏**（#30416）：静态源码分析发现 `_mcp_active_toolset_id` 在异步流中断场景下可能造成上下文状态泄漏。无修复 PR。 [Issue #30416](https://github.com/BerriAI/litellm/issues/30416)
- **SERVER_ROOT_PATH 前缀被误判为 MCP server 名**（#32142）：部署在子路径（如 Kubernetes ingress 配置 `SERVER_ROOT_PATH`）时，原生 `/mcp` 端点返回 0 个工具。已有对应修复 PR #35576（已关闭）。 [Issue #32142](https://github.com/BerriAI/litellm/issues/32142) | [PR #35576](https://github.com/BerriAI/litellm/pull/35576)

**高 — Azure 模型成本映射缺失导致计费为零**

- **azure/gpt-5.6\* 缺少 `cache_creation_input_token_cost`**（#37631）：自 v1.97.0 起，Azure GPT-5.6 系列缓存写入被按零计费，非 Azure 对应条目正常。 [Issue #37631](https://github.com/BerriAI/litellm/issues/37631)
- **azure/us/ 和 azure/eu/ 的 gpt-4o-2024-11-20 缺少 `cache_read_input_token_cost`**（#37823）：缓存读取计费为零。 [Issue #37823](https://github.com/BerriAI/litellm/issues/37823)
- **Azure GPT-5.6 terra/luna 价格错误**（#36192）：该系列仍沿用 OpenAI 降价后价格（Terra -20%，Luna -80%），但 Azure 从未执行该调价。 [Issue #36192](https://github.com/BerriAI/litellm/issues/36192)

**中 — Responses API / Anthropic 流式兼容问题**

- **多步 Anthropic 工具调用产生 `text part chatcmpl-<id> not found`**（#27671）：通过 `/v1/responses` 代理 Anthropic 模型时，第 2 步及后续文本增量使用了未注册的 chatcmpl ID，导致 AI SDK 无法关联。无修复 PR。 [Issue #27671](https://github.com/BerriAI/litellm/issues/27671)
- **Bedrock Converse 流式输出尾部多余空 chunk**（#36767）：v1.94.0 (PR #32255) 引入的回归，finish_reason 后仍追加空 chunk。无修复 PR。 [Issue #36767](https://github.com/BerriAI/litellm/issues/36767)

**中 — DeepSeek V4 参数透传问题**

- **`reasoning_effort` 被剥离**（#27439）：`"high"`/`"max"` 未透传至 DeepSeek API，被改写为 `thinking: {"type": "enabled"}`。 [Issue #27439](https://github.com/BerriAI/litellm/issues/27439)
- **thinking-mode 警告日志随历史消息膨胀**（#37629）：多轮工具调用时警告日志被放大，淹没有效日志。 [Issue #37629](https://github.com/BerriAI/litellm/issues/37629)

**中 — 其他问题**

- **`cache_control_injection_points` 触发 Dotprompt 管理逻辑**（#37469）：配置了该参数的云模型请求返回 HTTP 500，并要求不存在的 `prompt_id`。无修复 PR。 [Issue #37469](https://github.com/BerriAI/litellm/issues/37469)
- **`client.files.list()` 报 "api_key client option must be set"**（#35362，已关闭）：managed-files 代理上调用文件列表接口失败。 [Issue #35362](https://github.com/BerriAI/litellm/issues/35362)
- **rate limit 429 响应泄露完整 token SHA-256 哈希**（#27884，已关闭）：并行请求限流器在错误响应中包含完整 64 字符哈希，存在安全暴露风险。 [Issue #27884](https://github.com/BerriAI/litellm/issues/27884)

**低 — 其他已报告问题**：`token_counter` 对 `video_url` 内容块抛 ValueError（[#28071](https://github.com/BerriAI/litellm/issues/28071)）；Agents 页面调用 `/key/list` 超过 page size 限制报 422（[#28585](https://github.com/BerriAI/litellm/issues/28585)）；Admin UI hydration 卡死（[#27637](https://github.com/BerriAI/litellm/issues/27637)）；ElevenLabs STT 未透传 diarization 参数（[#28636](https://github.com/BerriAI/litellm/issues/28636)）；Gemini 短提示词缓存报错（[#17696](https://github.com/BerriAI/litellm/issues/17696)）。

---

## 6. 对应用开发者的意义

- **MCP 集成者需保持克制**：OAuth2 client_credentials 与 gateway-DCR bridge 两条鉴权路径当前均不可用，建议暂缓将生产 MCP 流量切到这两种鉴权模式，优先使用静态 bearer token 方案直到上游修复。若部署在子路径下，可关注 PR #35576 的修复进展。
- **成本核算团队请核对 Azure 账单**：`azure/gpt-5.6*` 与 `azure/us//eu/ gpt-4o-2024-11-20` 的缓存读写计费目前为零，与实际云账单会产生偏差。在修复合入前，建议通过自定义回调或手工补偿校正成本数据。
- **可观测性即将改善（落地中）**：PR #37896 将为 embedding/rerank 请求补充 provider 元数据，修复缺失 provider 回调错误；PR #37752 将为 speech/image/moderation/OCR/transcription 生成 LLM Call span，完善 OTEL 追踪覆盖；PR #37894 将透传 auto-router 的单请求节省金额到 Datadog/GCS/S3 等日志回调。对依赖成本分析和链路追踪的团队是明确利好。
- **Codex 会话分组修复值得期待**：PR #37895 已关闭，将修复 Codex 多轮对话被分割为多个独立 session 的问题。使用 Codex + LiteLLM 的开发流将获得完整会话记录。
- **治理与安全**：PR #37899 计划在 CI 中禁止 prisma migration 使用行级 UPDATE/DELETE/MERGE，降低未来代理启动时迁移导致的停机风险；PR #37898 将确保 PTU 功能未启用时配置字段不被意外校验。这些改进提升了生产环境的配置安全边界。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

好的，这是根据你提供的 GitHub 数据生成的 2026-08-22 Unsloth 动态日报。

---

# Unsloth 动态日报 2026-08-22

## 1. 今日速览

过去 24 小时仓库无新版本 Release，但 Unsloth Studio 的开发生态非常活跃（27 条 Issue 更新、105 条 PR 更新）。核心动态集中在两大方向：一是通过大规模 PR 将 **GRPO（强化学习）** 和 **可移植 Agent 技能** 引入 Studio 聊天，显著增强应用层能力；二是围绕 **AMD ROCm / Vulkan 统一内存（UMA）** 和 **Apple Silicon** 后端的密集稳定性修复，尤其是解决了 Strix Halo 大型核显设备上的模型加载和显存检测误报问题。

## 2. 版本发布与破坏性变更

- **无新版本发布**。官方仓库在 24 小时内没有发布新标签或正式 Release。
- **内部 CI 迁移提示（潜在破坏性变更）**：[Issue #9443](https://github.com/unslothai/unsloth/issues/9443) 指出，由于 Anthropic SDK 1.0 移除了 `messages.create()` 中的 `temperature`、`top_p` 和 `top_k` 参数，当前推理冒烟测试已将其固定到 `<1.0`。该 Issue 正在推进向 Anthropic SDK 1.x 的迁移，若依赖 Unsloth 的 Anthropic 兼容网关，需关注后续对推理参数处理方式的变更。

## 3. 新模型与硬件支持

- **AMD ROCm 修复与增强**：
  - [PR #8821](https://github.com/unslothai/unsloth/pull/8821) 为 ROCm 构建打开了 AOTriton 注意力门控，使得 flash/mem-efficient SDPA 内核能够替换 MATH fallback，在 AMD GPU 上显著改善长上下文推理延迟与显存占用（此前仅限库内用户，现已对普通第三方库用户生效）。
  - [PR #9498](https://github.com/unslothai/unsloth/pull/9498) 修复了 rocminfo 探测中错误将 CPU 报告为 GPU 的问题；[PR #9499](https://github.com/unslothai/unsloth/pull/9499) 修复了依赖快速路径会跳过 AMD 专用 ROCm wheel 安装的严重漏洞。
- **Vulkan 统一内存（UMA）支持**：
  - [PR #9461](https://github.com/unslothai/unsloth/pull/9461) 专门针对 Strix Halo（如 AMD Ryzen AI Max+ 395）等大型统一内存 GPU，修复了 GGUF 预加载显存检查误报“~13 GB 可用”的问题，现在会将 Vulkan iGPU 的空闲内存预算视为主机内存池的替代视图，使适配的 GGUF 模型不再被误拦截。
- **Apple Silicon 兼容性**：[Issue #9466](https://github.com/unslothai/unsloth/issues/9466)（MLX 模型在 Desktop v0.1.801-beta 更新后无法加载）已被解决并关闭。

## 4. 性能与优化

- **上下文长度自适应与主机卸载优化**：[PR #9492](https://github.com/unslothai/unsloth/pull/9492) 改进了上下文管理。它使上下文滑块的“Auto”档位成为明确的真实选择，并在系统内存（RAM）卸载不可避免时，增加默认上下文长度，从而避免长提示词在内存分页不足时产生不必要的长等待时间。
- **扩散模型卸载内存泄漏修复**：[PR #9472](https://github.com/unslothai/unsloth/pull/9472) 修复了图像扩散模型卸载后显存不释放的问题。此前由于加载线程栈帧持有管道引用，卸载操作并未真正释放显存；修复后，在同时运行 LLM 和图像生成的工作流中将释放大量显存。
- **上下文压缩/滚动窗口落地**：多个历史 Issue（[#7472](https://github.com/unslothai/unsloth/issues/7472)、[#8504](https://github.com/unslothai/unsloth/issues/8504)、[#9401](https://github.com/unslothai/unsloth/issues/9401)）在今日均标记为已关闭（CLOSED），表明长会话上下文的自动压缩与滚动窗口功能已在代码库层面得到处理，这对长对话的显存占用和推理效率有积极意义。

## 5. 稳定性与回归

按严重程度排列：

- **严重崩溃（UI 进程死亡/死锁）**：
  - [Issue #9480](https://github.com/unslothai/unsloth/issues/9480) 与 [Issue #9453](https://github.com/unslothai/unsloth/issues/9453)：Linux AppImage 打开模型中心时 WebKit 进程 SIGABRT 崩溃或直接冻结。根因涉及 Skia COLRv1 字体断言。**已有修复 PR**：[PR #9473](https://github.com/unslothai/unsloth/pull/9473) 通过在 AppImage 中捆绑 CBDT 字体并设置私有 Fontconfig family 来规避此崩溃。
- **模型加载阻塞与回归**：
  - [Issue #9482](https://github.com/unslothai/unsloth/issues/9482)：16GB 集成 GPU 在最新更新后无法加载模型，明确提示约 10GB 权重需使用系统内存，并建议设置 `UNSLOTH_ALLOW_HOST_OFFLOAD=1` 强制加载。
  - [Issue #9454](https://github.com/unslothai/unsloth/issues/9454)：Vulkan UMA 下显存检测逻辑错误导致模型被误拦截。**已有修复 PR**：[PR #9461](https://github.com/unslothai/unsloth/pull/9461)（见第 3 部分）。
- **数据完整性与配置持久化**：
  - [PR #9243](https://github.com/unslothai/unsloth/pull/9243) 修复了一个高严重性 Bug：聊天操作栏中点击更多菜单并关闭（Dismiss）会导致当前聊天消息被删除且无确认。
  - 配置持久化问题持续：今日新增 [Issue #9500](https://github.com/unslothai/unsloth/issues/9500)（预设保存失败，400 错误），老 Issue #5130（预设与 KV Cache 设置不持久化）也被重新激活。
- **安装器问题**：[Issue #9479](https://github.com/unslothai/unsloth/issues/9479)（失效的虚拟环境无法被安装器修复）。**已有修复 PR**：[PR #9501](https://github.com/unslothai/unsloth/pull/9501) 解决了当旧虚拟环境解释器被移除后，安装器会停止工作的缺陷。

## 6. 对应用开发者的意义

- **Agent / 工具调用质量受控**：今日多个 Issue 直指 Agent 场景——[Issue #9338](https://github.com/unslothai/unsloth/issues/9338) 显示通过 NVIDIA Nemotron API 进行工具调用时，`function.arguments` 必须严格符合 JSON 对象字符串格式，否则会被网关 400 拒绝。开发者需在调用工具前确保对工具参数进行 JSON 序列化与校验，另外 [Issue #8854](https://github.com/unslothai/unsloth/issues/8854) 暴露了 RAG 项目文件枚举失败的问题，这会影响依赖知识库读取的 Agent 提示词构造。
- **可移植 Agent 技能（Skills）**：[PR #9355](https://github.com/unslothai/unsloth/pull/9355) 引入了从 ZIP 或仓库导入 Agent 技能的功能，支持校验元数据与目录边界。这为在 Unsloth Studio 上构建标准化 Agent 技能包（类似 MCP 分发）铺平了道路。
- **强化学习入门门槛降低**：[PR #9310](https://github.com/unslothai/unsloth/pull/9310) 将 GRPO（RL）引入 Studio 训练页面，意味着在 Unsloth 桌面端即可进行强化学习微调，无需再跳到 Colab 或外部脚本，这对需要对齐偏好的 RAG / Agent 场景非常重要。
- **统一硬件栈铺路**：ROCm 的 SDPA 修复（#8821）和 Vulkan UMA 的兼容（#9461）意味着在 AMD 集成显卡（如 Radeon 8060S）和 Apple Silicon 上的运行一致性将大幅改善，这为在混合硬件环境中部署本地推理端点提供了更稳定的底座。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*