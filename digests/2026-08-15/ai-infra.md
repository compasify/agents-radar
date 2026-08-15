# AI 基础设施日报 2026-08-15

> 生成时间: 2026-08-14 23:11 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施生态横向对比分析报告（2026-08-15）

## 1. 生态全景

前沿模型（DeepSeek-V4、Kimi-K3、Qwen3.8）正以周级速度渗透所有推理栈，引擎间的竞争已从「支持与否」转为「多快、多稳、多省」。同时，ROCm/AMD 与消费级 Blackwell（SM 12x）等异构平台的适配成为新的军备竞赛点，但稳定性问题同步激增——今日六大项目共报告 6 个「严重/无修复」级问题，分布在 AMD、Intel、CUDA 13.2 等多个后端。值得注意的新趋势是：推理引擎层正在经历底层重写（vLLM MRV2、SGLang CP 路线图、非 GPU 进程 Rust 迁移），而 Agent 应用已成为各项目新功能设计的重要需求方（Ollama 编码代理集成、llama.cpp reasoning_effort 透传、LiteLLM shadow eval）。

## 2. 各项目活跃度对比

| 项目 | 今日版本 | 列出 PR 数 | 涉及 Issues 数 | Release 情况 | 首要焦点 |
|---|---|---|---|---|---|
| vLLM | 无新 Release | ~20 个进行中/修复 PR | 9 个 Open Bug（含 6 个无 fix） | 无 | MRV2 兼容性补齐、DeepSeek-V4/Kimi-K3 在 ROCm 的适配与稳定性 |
| SGLang | 无新 Release | ~12 个 PR（2 个已合并） | 10 个新/跟进 Issue（3 个严重） | 无 | CP 路线图、Kimi-K3 三路推进（文档/激活/CI）、DeepSeek-V4 稀疏注意力稳定性 |
| llama.cpp | b10425–b10435（11 个） | ~8 个 PR | 7 个 Bug（2 个严重） | 极高频发布 | Jinja 模板性能修复、SYCL 算子融合、MiniMax-Text-01 合入 |
| Ollama | v0.32.11 / 12 / 13 | ~8 个 PR | 10+ 个 Issue（2 个严重） | 1 日内 3 个版本 | Qwen3.8 正式支持、编码代理集成（DeepSeek Harness/Muse Code）、Cloud 503 |
| LiteLLM | 无新 Release | ~8 个 PR | 9 个 Issue（3 个高严重度） | 紧急回滚进行中 | Admin UI 认证回归回滚、Vertex AI count_tokens 修复、Agent 成本优化 |
| Unsloth | v0.1.800-beta | ~5 个 PR | 8 个 Issue（2 个严重） | 1 个 beta | Qwen3.8-27B 本地支撑、CUDA 13.2 量化乱码、AMD ROCm 修复 |

数据说明：PR/Issue 数为日报中明确列出项，非全量。llama.cpp 24 小时内 11 个版本的发布节奏远高于其他项目，Ollama 3 个版本紧随其后，反映了本地/边缘运行时对快速迭代的偏好。vLLM 与 SGLang 当日虽无 Release，但 PR 密度最高，集中在架构演进层面。

## 3. 模型支持竞速

| 项目 | 今日关键新模型/新架构动态 |
|---|---|
| vLLM | DeepSeek-V4 在 ROCm 上的端到端优化跟踪（#41820）；Kimi-K3 在 ROCm 上启用 torch.compile + DCP 部分前缀缓存命中；MRV2 补齐 prompt_embeds 与 draft model 规格解码能力 |
| SGLang | Kimi-K3 进入标准安装路径（cookbook 更新），激活函数显式化（DeepGEMM situ）；新增 NemotronLabs Voicechat 11B S2S 支持；AMD 在线 MXFP4 量化（MI355x） |
| llama.cpp | **MiniMax-Text-01/M1 正式合入**（PR #27018，从 2025 年初悬置至今）；Kimi-K3 文本模型支持进行中（#26185） |
| Ollama | **Qwen3.8-27B 正式支持**，含 Apple Silicon 优化（v0.32.12）；新增两个编码代理集成（DeepSeek Harness / Muse Code） |
| LiteLLM | 无模型落地；社区请求集中在 Azure Foundry 上的 Fireworks 模型与 Telnyx 价格表（Kimi K2.6、GLM-5.1-FP8） |
| Unsloth | **Qwen3.8-27B / Qwen3.8-2.4T 本地运行 + 微调**，Dynamic GGUF 压至 17GB RAM，同步提供 NVFP4 量化权重 |

**领先者判断**：
- **Qwen3.8-27B** 是今日「最速落地」——Ollama 和 Unsloth 同日官宣支持，vLLM/SGLang 随后跟进（vLLM 已有相关显存估算 issue #44740 指向 Qwen3.6-35B 的 MTP 支持，Qwen3.8 预期在途）。
- **Kimi-K3** 是「全栈跟进」最明显的——vLLM（torch.compile/DCP/RecoverSSM）、SGLang（文档/激活/CI）、llama.cpp（架构 PR #26185）三线并行，但尚未有任何项目宣布完全稳定支持。
- **DeepSeek-V4** 已过「支持期」进入「优化期」——各引擎的竞争焦点是稀疏 MLA 在 gfx950/SM 12x 上的 kernel 覆盖与长上下文稳定性。
- **MiniMax-Text-01/M1** 填补了 llama.cpp 的长期空白，但其他引擎未见同步动作。

## 4. 性能优化前沿

| 方向 | 代表工作 |
|---|---|
| **算子融合与内核重写** | llama.cpp SYCL 密集 FFN 三算子融合（q4_K，Arc Pro B70：+2.8%）与状态写回 cpy 融合；SYCL 量化 KV 从 VEC 切到 TILE（+42%~+169%）；vLLM gfx950/MI355X sparse-MLA 专用实现与 workload-aware split；SGLang TRT-LLM DSv4 融合 norm+RoPE+fp8 store 算子 |
| **KV cache 与长上下文** | vLLM 修复 hybrid Mamba 下 KV offload 断言失败（#52397）；llama.cpp 为 `ggml_ssm_scan` 引入循环状态回滚（b10431）；vLLM Kimi-K3 RecoverSSM 恢复路径支持 `mamba_cache_mode=align`；SGLang GDN MTP 缓存模式（集成 FlashInfer kernel 与 overlapped CUDA-graph recovery） |
| **规格解码 / 推测解码** | vLLM DeepSeek-V4-Flash + MTP=3 端到端提升 **15%**（96.01s→81.25s）；PP 下解禁 EAGLE3 式 drafter（跑在 last PP rank）；修复了 bad_words 采样 off-by-one（#52311）等 4 个 spec-decode 相关 Bug |
| **量化与显存压缩** | SGLang AMD 在线 MXFP4 量化（ModelOpt/Quark NVFP4 → MXFP4）；Unsloth NVFP4 量化权重 + 17GB Dynamic GGUF；llama.cpp CUDA 权重预取 PoC（overlap 当前层计算）；vLLM 负 CUDA graph 显存估算 Bug（#44740，GB10 OOM） |
| **分布式与并行策略** | SGLang CP 路线图显著推进（#21788 过 Prefill 阶段，#29736 规划 Decode CP/Helix）；Ollama 多文件 GGUF 导入（#17743）；llama.cpp 多节点 CUDA RPC 仍不稳定（#26583） |
| **工程与请求路径** | Ollama 模型元数据缓存（省 ~300ms/请求）；vLLM MRV2 支持 prompt_embeds 与 draft model；llama.cpp `llama_decode` 移入 worker（decode 期间可访问 metrics/slots）；LiteLLM Anthropic prompt-cache 前缀保真修复 |

**小结**：优化火力集中在「长上下文场景的 KV/状态管理」与「新硬件的 kernel 覆盖」两大方向，规格解码进入工程化收尾期（以 Bug 修复为主），而量化路径呈现「高精度 NVFP4 + 超低内存 GGUF」的两极分化。

## 5. 分层定位差异

| 项目 | 分层角色 | 核心关注点 | 典型场景 |
|---|---|---|---|
| vLLM | **生产级推理引擎**（服务端） | 大规模并发、高吞吐、多 GPU/多节点、前沿模型快速适配 | 云厂商与中大规模企业的模型服务底座，关注 MRV2 演进风险 |
| SGLang | **生产级推理引擎 + 运行时**（服务端） | 结构化输出、多模态、复杂调度（CP/DP/PP 协同）、路由 | 与 vLLM 正面竞争，但更强调新模型特性的快速落地（如 K3 的 DCP）与长上下文 CP 路线 |
| llama.cpp | **轻量推理运行时 + 算子库**（边缘/本地） | 单机/单卡极致性能、量化布局、CPU/SYCL/Metal 全后端覆盖 | 本地开发、边缘设备、llama-server 对外提供 API；也是 Ollama/Unsloth 的底层依赖之一 |
| Ollama | **本地运行时 + 模型分发**（产品层） | RAG/Agent 集成、跨平台一键运行、OpenAI 兼容 API | 个人开发者与内网轻量部署；正通过 `launch` 集成渗透编码代理场景 |
| LiteLLM | **LLM 网关 / 代理层** | 多 Provider 路由、成本管控、稳定性/可观测性、认证与限流 | 企业调用统一入口，今日 Admin UI 认证回归直接影响所有管控面 |
| Unsloth | **微调/训练框架 + 本地推理**（训练层） | LoRA/QLoRA 微调速度、GGUF/NF4 量化、VRAM 极限压榨 | 数据科学家的微调工作台，正向 Studio/Desktop 产品化延伸 |

**关键差异判断**：
- vLLM 与 SGLang 在同一分层正面竞争，但今日动态显示 vLLM 更偏「稳健演进」（大量 bugfix + MRV2 兼容性补齐），SGLang 更偏「激进啃硬骨头」（CP 路线图、K3 密集投入、AMD MXFP4）。
- llama.cpp 与 Ollama 存在上下游关系，但 Ollama 的版本节奏（3 个/日）和 `launch` 生态使其从「llama.cpp 套壳」转向「Agent 本地入口」。
- LiteLLM 处于独立分层，本身不涉及模型内核，但网关层的一行代码可影响全部下游会话——今日的 404 回归即是例证。
- Unsloth 的独特性在于「用训练框架的视角做推理」（如 MTP offload 修复），其 Dynamic GGUF 路径正在模糊微调与推理的边界。

## 6. 值得关注的趋势信号

### 信号一：推理引擎步入「重写阵痛期」，架构切换是最大风险项
vLLM 的 MRV2 正密集补齐（prompt_embeds、draft model、K3 DCP、eager cudagraph 按 runner 选取），SGLang 的 CP 路线图与 Rust 进程迁移同步推进。**代价已开始显现**：MRV1/MRV2 行为分叉导致 DeepSeek-V4 默认选择可能被改变；多个新功能只在 MRV2 上可用。对生产用户而言，盲目开启新运行时将面临「功能领先但稳定性未验证」的窘境。

### 信号二：ROCm/AMD 与消费级 Blackwell 成为第二战场，但「可用」与「可靠」之间仍有鸿沟
- vLLM 在 gfx942 上有内存访问错误（#48266，无 fix），SGLang 报告 Router GEMM fp32 三连报，Unsloth 需要手动开 AOTriton 闸门才能避免 OOM，llama.cpp 有 SYCL A770 崩溃与 Windows ROCm 缺 DLL。
- 消费级 Blackwell（SM 12x）的 DeepGEMM 覆盖缺口被系统性列出（vLLM #41063），但 SGLang 在 DGX Spark（GB10）上已验证 Qwen3.8-27B-FP8。
- **建议**：若目标平台是 AMD MI300X/MI350 或 RTX 50 系，今日各项目的「严重」级问题应视为部署前的强制检查清单。

### 信号三：Agent 已从「边缘玩法」变为主力场景，基础设施正为之重构
- Ollama `launch` 已集成 4 个编码代理（Claude、Codex、Muse、DeepSeek Harness）。
- llama.cpp 将 `reasoning_effort` 透传至 Jinja 模板，使 Agent 的思考深度可由 API 参数控制。
- Ollama 修复了 Qwen3.8 的 developer 角色处理，直接服务于 Codex 等代理客户端。
- LiteLLM 的 shadow eval 新增多 key 与反向评估，为 Agent 回归测试铺路。
- **前提风险**：vLLM `/inference/v1/generate` 在 n>1 时只返回一个结果（#52399）、Ollama Cloud 503——Agent 的高并发/多候选特性正在暴露网关与服务层的新故障模式。

### 信号四：量化路径两极分化，「超低内存」与「高精度」并行发展
- Unsloth 以 17GB Dynamic GGUF 支持 Qwen3.8-27B，首次让「同尺寸最强模型」在 24GB 内存设备上可运行。
- 高精度路线上 NVFP4 成为新宠（Unsloth 提供 NVFP4 权重、SGLang 实现 AMD 在线 MXFP4），但消费级 GPU 上 NVFP4 推理性能仍存疑（Unsloth #8861 实测 RTX 5090 极慢）。
- 同时，CUDA 13.2 + IQ3/IQ2 的乱码问题提醒我们：**量化生态的碎片化正在成为新的稳定性风险源**。

### 信号五：稳定性事件密集，但修复响应速度在分化
- 今日六大项目共出现 **7 个「严重/无修复」级别的 Open Issue**（vLLM 4 个、SGLang 2 个、llama.cpp 1 个），涉及启动崩溃、非法内存访问、输出损坏等类别，均直接影响生产可用性。
- 反面案例：LiteLLM 从 Admin UI 404 到回滚 PR 提交在 24 小时内完成（尽管尚未合入），Ollama 对 Qwen3.8 system message 问题在 3 个版本内修复，llama.cpp 对 Jinja 二次方复杂度当天修复并发布。
- **建议**：技术决策者应建立「已知严重问题清单」并定期比对，而非仅跟随最新版本——今日多个项目的 Nightly/最新版恰恰引入了回归（llama.cpp b10428 A770 崩溃、Ollama 0.32.11 Vulkan 回归）。

---

*报告完* —— 数据基于各项目 2026-08-15 公开动态摘要，统计口径以日报中明确列出的 PR/Issue/Release 为准。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 动态日报 — 2026-08-15

## 1. 今日速览

今日 vLLM 仓库的活跃动态聚焦于三块：一是 DeepSeek-V4 与 Kimi-K3 在 ROCm/MR-V2（Model Runner V2）上的适配与性能优化，二是针对 Blackwell SM 12x 与 AMD gfx942 等平台的稳定性修复，三是规格解码（speculative decoding）与 KV Offload 相关的一系列 Bug 修复。多个进行中的 PR 均指向 MRV2 的兼容性补齐，建议关注其对默认推理路径的潜在影响。

## 2. 版本发布与破坏性变更

今日无新 Release。以下两个进行中的 PR 可能在未来引入行为变更：

- **PR #52401：DeepSeek V4 eager cudagraph region 改为按 runner 选取**。该 PR 修复了 #51430 收窄 eager cudagraph 区域导致 MRV1 输出损坏的问题，但代价是可能改变 DeepSeek V4 在 MRV1/MRV2 之间的默认选择，ROCm 用户尤其需要关注。[链接](https://github.com/vllm-project/vllm/pull/52401)
- **PR #52395：ROCm attention 后端 `supports_mm_prefix` 改为返回 False**。这表示 ROCm 后端目前不支持 Prefix-LM（mm_prefix），依赖该特性的多模态任务在 AMD 上可能会被显式拒绝。[链接](https://github.com/vllm-project/vllm/pull/52395)

## 3. 新模型与硬件支持

- **Kimi-K3 在 ROCm 上启用 torch.compile**：PR #52190 使 Kimi-K3 模型类支持 torch.compile，以便在 ROCm 上执行 aiter 的 post-grad 融合 kernel（如 `fused_qk_rmsnorm_kernel`、`allreduce_fusion_kernel_1stage`）。[链接](https://github.com/vllm-project/vllm/pull/52190)
- **Kimi-K3 DCP 部分前缀缓存命中**：PR #50493 在 MRV2 下为 Kimi-K3 的 DCP 支持增加了 hash-aligned 的 partial-prefix 复用，并修复了 MRV2 block-table 几何计算。[链接](https://github.com/vllm-project/vllm/pull/50493)
- **MRV2 支持 prompt embeds**：PR #42963 为 Model Runner V2 增加了 `prompt_embeds` 支持，扩展现有模型输入的兼容面。[链接](https://github.com/vllm-project/vllm/pull/42963)
- **MRV2 支持 draft model 规格解码**：PR #43091 为 MRV2 增加 draft model 规格解码能力，但当前因 rebase 受阻尚未合入。[链接](https://github.com/vllm-project/vllm/pull/43091)
- **Pipeline Parallel 下的 EAGLE3 式规格解码**：PR #50514 尝试解除 PP 下对 `eagle3` / `dflash` / `dspark` 的禁用限制，drafter 将跑在 last PP rank 上。[链接](https://github.com/vllm-project/vllm/pull/50514)

## 4. 性能与优化

- **DeepSeek-V4-Flash + MTP=3 性能基准**：PR #52228 在 concurrency=64、2K/2K 的 Speed-Bench 下，将端到端耗时从 96.01s 降至 81.25s（约 15% 提升），并补全了非 DSpark 自适应验证的 acceptance estimation 逻辑。[链接](https://github.com/vllm-project/vllm/pull/52228)
- **gfx950/MI355X sparse-MLA 解码优化**：PR #52212 为 Triton DeepSeek-V4 sparse-MLA decode 路径新增 gfx950 专用实现和 workload-aware split 策略，纯 Triton 改动，不影响现有非 gfx950 路径。[链接](https://github.com/vllm-project/vllm/pull/52212)
- **K3 RecoverSSM 路径**：PR #51855 为 Kimi-K3 增加 RecoverSSM 状态恢复路径，用于 DSpark 场景下的 speculative KDA 解码，并支持 `mamba_cache_mode=align` 前缀缓存。[链接](https://github.com/vllm-project/vllm/pull/51855)
- **DeepSeek-V4 ROCm 优化跟踪**：Issue #41820 持续跟踪 DeepSeek-V4 在 ROCm 上的端到端 enablement 与优化清单（mHC/HCA/CSA/MoE/MTP 等模块）。[链接](https://github.com/vllm-project/vllm/issues/41820)
- **消费级 Blackwell DeepGEMM 覆盖缺口**：Issue #41063 系统性列出了 DeepSeek-V4-Flash 在 RTX 50/GB10（SM 12.x）上通过 DeepGEMM 运行时的 kernel 覆盖缺口。[链接](https://github.com/vllm-project/vllm/issues/41063)

## 5. 稳定性与回归

按严重程度排列，重点列出今日仍处于 Open 状态且影响较大的 Bug：

- **启动崩溃：`libcudart.so.13` 缺失**（#52300）。CUDA 12.6 环境下安装 vLLM 0.21.0 后，import 即失败，阻塞所有推理任务。暂无对应 fix PR。[链接](https://github.com/vllm-project/vllm/issues/52300)
- **ROCm/gfx942 内存访问错误**（#48266）。DeepSeek V4 flash arch + fp8 KV cache 在 MI325X、TP=4 下，序列跨过 2048 tokens 时 worker 崩溃。暂无对应 fix PR。[链接](https://github.com/vllm-project/vllm/issues/48266)
- **负 CUDA graph 内存估算导致 OOM**（#44740）。Qwen3.6-35B + MTP 在 GB10 上出现 -35.69 GiB 的错误估算，导致 KV cache 过度分配并 OOM。暂无对应 fix PR。[链接](https://github.com/vllm-project/vllm/issues/44740)
- **DeepSeek-V4-Flash 内联 system message 处理错误**（#46710）。PR #46025 合并后出现三种不同行为路径，部分模板下输出错误。暂无对应 fix PR。[链接](https://github.com/vllm-project/vllm/issues/46710)
- **DeepSeek-V4-Pro TP=16 fp8 块形状检查失败**（#42384）。`shared_experts.down_proj` 的 block-shape 校验与官方 recipes 矛盾，导致无法按官方配置部署。暂无对应 fix PR。[链接](https://github.com/vllm-project/vllm/issues/42384)
- **Mamba-2/GDN 混合模型前缀缓存失效**（#51250）。Qwen3.6-35B-A3B（`Qwen3_5MoeForConditionalGeneration`）启用 prefix caching 后未生效。暂无对应 fix PR。[链接](https://github.com/vllm-project/vllm/issues/51250)

以下为今日已提交修复 PR 的 Bug：

- **规格解码 bad_words 采样 off-by-one**：PR #52311 修复了 `_bad_words_kernel` 在 spec-decode 分支中逐请求局部布局的 off-by-one 错误，该问题自 #33433 引入。[链接](https://github.com/vllm-project/vllm/pull/52311)
- **KV offload `max_offload_tokens` 断言失败**：PR #52397 修复了 hybrid Mamba attention 模型下 OffloadingConnector 在 partial-tail 边界触发 assertion 的问题。[链接](https://github.com/vllm-project/vllm/pull/52397)
- **DSpark 未量化草稿模型崩溃**：PR #52396 修复了 `hf_overrides` 非 dict 时解析草稿量化配置抛异常，导致 EngineDeadError 的问题。[链接](https://github.com/vllm-project/vllm/pull/52396)
- **`/inference/v1/generate` 在 n>1 时只返回一个结果**：PR #52399 修复了非流式请求下 `serve_tokens_full_generator` 仅保留最后一个 `RequestOutput` 的问题。[链接](https://github.com/vllm-project/vllm/pull/52399)
- **DSV4 sparse MLA 在 SM120 端到端不可用**：PR #51538 一口气修复了 plain decode、MTP、DSpark 三种解码模式下的七个缺陷，并在 8×RTX PRO 6000 上完成验证。[链接](https://github.com/vllm-project/vllm/pull/51538)
- **LFM2 short_conv 模型规格解码错误**：PR #50272 修复了 short_conv（LFM2）在 ngram / draft_model 等规格解码方法下的错误问题。[链接](https://github.com/vllm-project/vllm/pull/50272)
- **MRV2 Gumbel 采样非有限 logits 处理**：PR #43249 修复了候选 logits 含 `-inf` 时 Gumbel noise 变为 `inf` 的问题。[链接](https://github.com/vllm-project/vllm/pull/43249)

## 6. 对应用开发者的意义

- **面向 DeepSeek-V4 / Kimi-K3 的开发者**：ROCm 与 MRV2 的适配正在快速推进，但 AMD MI325X/gfx942 上仍有内存访问错误（#48266）和 DeepSeek-V4 的 ROCm kernel 调优缺口（#51853）。若在 AMD 或消费级 Blackwell 上生产部署，建议暂缓升级或锁定已知稳定版本，并在上线前做长序列压力测试。
- **MRV2 迁移需谨慎**：多个新功能（prompt embeds、draft model 规格解码、Kimi-K3 DCP）都优先落在 MRV2 上，但这部分代码仍频繁变动。若你主动启用了 `VLLM_USE_V2_MODEL_RUNNER`，请关注上述 bugfix PR 是否合入；否则建议保持默认 runner 以规避回归风险。
- **在线服务可靠性提醒**：`/inference/v1/generate` 在 n>1 时返回不完整（#52399）会直接影响依赖多候选响应的 Agent 应用；DSpark 未量化草稿模型导致 EngineDeadError（#52396）会影响重启恢复流程。两者均有修复 PR，建议在发版后优先验证。
- **显存估算与 CUDA Graph 的已知陷阱**：在 GB10 等统一内存设备上，启用 MTP + CUDA Graph 时存在负显存估算风险（#44740），可能导致 OOM。相关应用在修复合入前应控制并发或禁用 MTP。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 动态日报 — 2026-08-15

## 今日速览
Context Parallelism（CP）路线图成为今日焦点：`#21788` 与 `#29736` 两个 CP 相关 issue 均在 8 月 14 日获得更新，分别覆盖 Q3 Prefill CP 进展与 Decode CP（DCP）/Helix Parallelism 规划。与此同时，Kimi-K3 相关 PR 密集更新（`#34886`、`#34883`、`#32568`），从安装文档、激活函数到 AMD 精度 CI 均在一日内推进。Bug 方面，DeepSeek-V4 稀疏注意力 indexer 非法内存访问（`#34718`）与 PP8 分离式预填充 TTFT 异常（`#34815`）新报告值得关注。

## 版本发布与破坏性变更
无新 Release。值得注意的 RFC：

- **[RFC] 移除 torchao 集成（`--torchao-config`）**（#34295，已关闭）：该配置自 2026-04-19 起所有可接受值均抛 `ImportError`，上游作者已停止维护，且无 CI 覆盖。若你的部署使用了 `--torchao-config`，需尽快移除并改用其他量化路径。
  https://github.com/sgl-project/sglang/issues/34295

- **[RFC] 非 GPU 进程 Rust 迁移**（#23206，更新于 8-14）：涉及 SGLang 非 GPU 进程的 Rust 重写，关联 PR #297...（原 issue 截断）。
  https://github.com/sgl-project/sglang/issues/23206

## 新模型与硬件支持
- **NemotronLabs Voicechat 支持**（PR #34873）：为 NVIDIA-NemotronLabs-VoiceChat-11B S2S 模型添加 SGLang 部署路径，此前仅 vLLM 支持。
  https://github.com/sgl-project/sglang/pull/34873

- **Kimi-K3 安装文档更新**（PR #34886）：官方 cookbook 从预发布镜像迁移至标准 Python/Docker 安装方式，表明 K3 已进入标准发布路径。
  https://github.com/sgl-project/sglang/pull/34886

- **Kimi-K3 MegaMoE 显式 SiTU 激活**（PR #34883）：移除激活 clamp sentinel，直接调用 DeepGEMM 的 `activation="situ"`；依赖 DeepGEMM PR #78。
  https://github.com/sgl-project/sglang/pull/34883

- **AMD 在线 MXFP4 量化**（PR #29328，4/N）：支持加载 ModelOpt/Quark NVFP4 检查点，在加载时反量化并重量化为 MXFP4，实现在 MI355x 等 AMD GPU 上的高效推理。
  https://github.com/sgl-project/sglang/pull/29328

- **Qwen3.8-27B-FP8 在 DGX Spark 验证**（#34872，closed）：官方 checkpoint 在单张 GB10/SM121 上以 mem-fraction-static 0.70 验证通过。
  https://github.com/sgl-project/sglang/issues/34872

## 性能与优化
- **TRT-LLM DSv4 稀疏注意力融合算子**（PR #32975）：为 DeepSeek-V4 稀疏注意力添加融合 norm + RoPE + uniform fp8 store，依赖 #30805。进行中。
  https://github.com/sgl-project/sglang/pull/32975

- **M3 在 MI350 上性能改进**（PR #34014）：进行中，目标提升 M3 模型在 AMD MI350 上的性能。
  https://github.com/sgl-project/sglang/pull/34014

- **GDN MTP 缓存模式**（PR #30967）：为 final-state recompute 添加 MTP 缓存模式，集成 FlashInfer kernel 与 overlapped CUDA-graph state recovery。进行中。
  https://github.com/sgl-project/sglang/pull/30967

- **LTX-2/2.3 NPU 推理优化**（PR #34722）：针对 NPU 优化 LTX-2/2.3 文生视频模型推理性能。
  https://github.com/sgl-project/sglang/pull/34722

- **Qwen3.5 FP8 GB300 性能测试裁剪**（PR #34882）：减少冗余夜间测试，TP4+MTP 仅保留 batch size 1/4，TP4+DP4+DPA+MTP 仅保留 batch size 16，以缩短 CI 时间。
  https://github.com/sgl-project/sglang/pull/34882

## 稳定性与回归
按严重程度排序：

1. **DeepSeek-V4 稀疏注意力 indexer 非法内存访问**（#34718，严重）：`fp8_paged_mqa_logits` 在长上下文请求下触发 illegal memory access，影响长上下文场景。暂无 fix PR。
   https://github.com/sgl-project/sglang/issues/34718

2. **PP8 分离式预填充 TTFT 异常**（#34815，严重）：Kimi-K3 上 PP8 配置存在与负载无关的 ~30 秒 TTFT 下限，可能与 pipeline 并行拓扑相关。暂无 fix PR。
   https://github.com/sgl-project/sglang/issues/34815

3. **FlashInfer `RadixTopKRenormProbKernel_MultiCTA` CUDA coredump**（#32283）：CUDA coredump，需关注是否由最近 FlashInfer 更新引起。暂无 fix PR。
   https://github.com/sgl-project/sglang/issues/32283

4. **Attention backend fallback 引发扩散模型错误**（#34389）：注意力后端回退逻辑变更导致多数扩散模型出错。暂无 fix PR。
   https://github.com/sgl-project/sglang/issues/34389

5. **Router GEMM fp32 问题三连报**（NPU #34861 / ROCm #34857 / deterministic #34758）：NPU 与 ROCm 上 Router GEMM 输出应为 fp32 却返回 bf16，且 ROCm 上 expert correction bias 不应转 bf16；另一个 issue 提出确定性推理下也应保持 fp32。同一根因，跨后端修复中。
   https://github.com/sgl-project/sglang/issues/34861
   https://github.com/sgl-project/sglang/issues/34857
   https://github.com/sgl-project/sglang/issues/34758

6. **混合 Mamba + 投机解码 + lazy buffer 崩溃**（#34786）：`set_mamba_track_indices_from_reqs` 中 `mamba_next_track_idx` 为 None 导致 TypeError。同一问题有重复 issue #34787（已关闭）。
   https://github.com/sgl-project/sglang/issues/34786

7. **CP=8 时 `num_requests_running` 指标错误**（#31896）：上下文并行度下监控指标显示异常。
   https://github.com/sgl-project/sglang/issues/31896

8. **Qwen3.5 GDN + 投机解码在 XPU 上报错**（#34720）：`causal_conv1d_update_xpu()` 收到意外的 `intermediate_conv_window` 参数。
   https://github.com/sgl-project/sglang/issues/34720

9. **GLM-5.1 FP8 + EAGLE 服务运行后 watchdog 超时关闭**（#26258，已因不活跃关闭）：多级缓存启用后服务周期性宕机。
   https://github.com/sgl-project/sglang/issues/26258

**已修复/有 fix PR 的：**

- **Qwen3 MoE 与 DeepEP-class 后端兼容**（PR #34810，已合并）：修复 Qwen3 只检查 `is_deepep()` 导致 Mooncake EP/EPLB 跳过 DeepEP-class 设置的问题。
  https://github.com/sgl-project/sglang/pull/34810

- **DSA 模型 FlashInfer fused top-k 回退**（PR #33006，已合并）：FlashInfer 修复后恢复对 packed PAGED rows 使用 fused top-k。
  https://github.com/sgl-project/sglang/pull/33006

## 对应用开发者的意义
- **`/v1/responses` API 行为不一致**（#34716）：流式事件中 `created_at` 为 float，非流式响应中为 int。若你的应用解析该字段并做类型断言，可能出错，建议先做兼容处理。
  https://github.com/sgl-project/sglang/issues/34716

- **Runtime LoRA 验证修复**（PR #34885）：单字符串 prompt 现被视为单个请求进行 per-request LoRA 路径验证，并将 assert 替换为显式 `ValueError`。使用 `Runtime.generate()` 传字符串 prompt + LoRA 的应用将获得更清晰的错误信息。
  https://github.com/sgl-project/sglang/pull/34885

- **`BaseConnector` 信号处理语义修复**（PR #34884）：保留 connector 安装前的信号处置、清理临时目录、在 SIG_DFL 时显式终止容器 PID 1。依赖容器/信号行为的应用需留意行为变化。
  https://github.com/sgl-project/sglang/pull/34884

- **模型加载器显式选择修复**（PR #34880）：类值 load format 现在会在 AutoRound/ModelOpt 路由前解析，程序化调用者显式选择的 loader 不再被自动量化路由覆盖。
  https://github.com/sgl-project/sglang/pull/34880

- **CI 稳定性跟踪**（#17050）：当前 3 broken / 11 flaky / 672 recently fixed。多个修复已合入 main，整体趋势向好。
  https://github.com/sgl-project/sglang/issues/17050

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 动态日报 — 2026-08-15

## 今日速览
过去 24 小时共发布 11 个版本（b10425–b10435），核心动向集中在三类：**Jinja 模板引擎二次方复杂度修复（b10435）**、**SYCL 后端连续两轮算子融合落地（b10425/b10427，FFN 与状态写回）**、以及 **server 端 decode 期间指标/插槽可访问性提升（b10429）**。此外，MiniMax-Text-01/M1 的模型支持 PR 已关闭合并，填补了自 2025 年初以来的长期功能缺口。


## 版本发布与破坏性变更
- **b10435** — 修复 `gather_string_parts` 的二次方复杂度问题，消除 Jinja 模板解析在长上下文下的性能退化（修复 #26974）。链接: https://github.com/ggml-org/llama.cpp/releases/tag/b10435
- **b10434** — Chat Completions 的 `reasoning_effort` 字段现在会传入 Jinja 模板，并支持模型特定的翻译映射。此变更影响所有依赖模板渲染的推理路径。链接: https://github.com/ggml-org/llama.cpp/releases/tag/b10434
- **b10431** — 为 `ggml_ssm_scan` 引入循环状态回滚（CPU 与 CUDA），对混合架构（如 Nemotron）的缓存一致性有直接影响；CPU 端回滚暂未启用，将在后续 PR 跟进。链接: https://github.com/ggml-org/llama.cpp/releases/tag/b10431
- **b10429** — **潜在行为变更**：server 将 `llama_decode` 移入队列 worker 内部执行，`/metrics` 与 `/slots` 可在解码期间访问。并发语义有变，建议 server 使用者回归测试。链接: https://github.com/ggml-org/llama.cpp/releases/tag/b10429
- **b10430** — 允许虚拟 iGPU 设备，对容器/虚拟化环境下的设备枚举行为有影响。链接: https://github.com/ggml-org/llama.cpp/releases/tag/b10430

其余为常规同步与清理：b10433（ggml 同步）、b10428（测试路径脱敏）、b10426（WASI 强制单线程）。


## 新模型与硬件支持
- **MiniMax-Text-01 / MiniMax-M1 支持已合并**（PR #27018，关闭 #11290）：为基于 lightning attention 的架构提供推理支持。这是自 2025 年 1 月 issue 提出以来首次合入，建议相关模型使用者跟进验证。链接: https://github.com/ggml-org/llama.cpp/pull/27018
- **Kimi-K3 文本模型支持进行中**（PR #26185）：混合 KDA+MLA 注意力，引入 cross-layer residual attention、latent MoE 与 situ activation 等新结构，尚待 review。链接: https://github.com/ggml-org/llama.cpp/pull/26185
- **SYCL TILE 路径扩展到量化 KV 解码**（PR #26689）：`q4_0/q8_0` 量化 KV 在 Battlemage 上从 VEC 切换到 TILE 内核，实测 +42% ~ +169%（Qwen3.6-35B、Gemma 4 26B/12B，32K/118K 上下文）。链接: https://github.com/ggml-org/llama.cpp/pull/26689


## 性能与优化
- **Jinja 模板解析：消除二次方复杂度**（b10435 / PR #27034）。`vector::erase` 与 `string::append` 均为二次方瓶颈，修复后长模板/长上下文的 tokenize 开销应显著下降。链接: https://github.com/ggml-org/llama.cpp/pull/27034
- **SYCL：密集 FFN 三算子融合（q4_K）**（b10427，Arc Pro B70 实测）：`mul_mat(gate) + mul_mat(up) + GLU` 合为单个 q4_K reorder mat-vec，tg128 吞吐：Qwen2.5-3B **154.18 → 158.53 t/s（+2.8%）**；Gemma-2-2b **162.45 → 16x.xx**（报告截断）。链接: https://github.com/ggml-org/llama.cpp/pull/26779
- **SYCL：gated-delta-net 状态写回 cpy 融合**（b10425 / PR #26643），Qwen 3.6 27B 48/64 层 gated_delta_net 场景下 tg128 有可测提升。链接: https://github.com/ggml-org/llama.cpp/pull/26643
- **CUDA 权重预取 PoC 持续更新**（PR #21067）：支持 tensor override 预取与当前层计算重叠，仅 CUDA 实现，仍为 draft。链接: https://github.com/ggml-org/llama.cpp/pull/21067


## 稳定性与回归
按严重程度排序：

- **[严重] SYCL 在 Intel A770 上完全崩溃**（#27063，b10428，14 条评论）：A770 上任意模型崩溃，B60 正常，疑似回归；**尚无 fix PR**。链接: https://github.com/ggml-org/llama.cpp/issues/27063
- **[严重] Lunar Lake iGPU（Arc 140V）SIGSEGV**（#27046，b10423，5 条评论）：`resolve_fused_ops` 误判导致空指针跳转，在 gemma4/qwen2 等无关架构上可复现，b10289/b10050 同样受影响；**尚无 fix PR**。链接: https://github.com/ggml-org/llama.cpp/issues/27046
- **[中] Windows ROCm 7.14 发布包缺失 hipblas.dll**（#26996，b10400）：GPU 无法被检测，`--list-devices` 为空；**尚无 fix PR**。链接: https://github.com/ggml-org/llama.cpp/issues/26996
- **[中] DeepSeek-V4-Flash 长对话退化**（#26694，Metal/b10289）：重复生成与特殊 token 泄漏；**尚无 fix PR**。链接: https://github.com/ggml-org/llama.cpp/issues/26694
- **[中] GLM-5.2 多节点 CUDA RPC 崩溃**（#26583）：worker 端 `invalid data ptr`，orchestrator 端 `ggml_backend_rpc_buffer_get_tensor` abort；**尚无 fix PR**。链接: https://github.com/ggml-org/llama.cpp/issues/26583
- **[低] Vulkan 性能下降**（#24066，持续跟踪 39 条评论）：RX 6600 上近期构建性能回退。链接: https://github.com/ggml-org/llama.cpp/issues/24066
- **[已修复] Gemma 4 Vision 图像序列组装 Bug**（PR #26653）：修复 #26652 中图像描述退化为句级循环的问题，已关闭。链接: https://github.com/ggml-org/llama.cpp/pull/26653
- **[已修复] MTMD 输入校验加固**（PR #27071）：拒绝 `n_merge <= 0`、强制 attention-window 限制、拒绝负 `--spec-draft-n-max`。链接: https://github.com/ggml-org/llama.cpp/pull/27071
- **[已修复] LoRA 文件越界读取**（PR #27056，merge ready）：截断/损坏的 LoRA 文件此前会静默加载零填充权重，现增加文件边界检查。链接: https://github.com/ggml-org/llama.cpp/pull/27056


## 对应用开发者的意义
1. **`reasoning_effort` 可编程化（b10434）**：Agent 应用现在可以通过 OpenAI 兼容接口传递 `reasoning_effort`，并经 Jinja 模板作用于模型提示词，无需自行拼接。对依赖 Qwen 等思考型模型的应用是直接利好。
2. **server 可观测性提升（b10429）**：decode 期间可访问 `/metrics` 与 `/slots`，对自建网关的负载监控与动态路由意义重大；但内部队列语义有变，**建议升级后压测验证**。
3. **迷你模型支持补全**：MiniMax-Text-01/M1 合入后，基于该系列的应用可脱离私有实现，使用官方推理路径；Kimi-K3 跟进中。
4. **混合架构缓存行为变化（b10431）**：循环状态回滚为混合模型（Nemotron 等）的 KV 缓存管理带来更一致的行为，但 CPU 端尚未启用，多后端部署时需注意行为差异。
5. **安全加固提醒**：LoRA 加载越界检查即将合入，在此之前生产环境加载外部 LoRA 文件时建议自行校验文件完整性，避免静默加载损坏权重。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 动态日报 — 2026-08-15

## 今日速览

Ollama 连续发布 v0.32.11/12/13 三个版本，核心亮点是正式支持 Qwen 3.8 27B 模型（含 Apple Silicon 优化）并为 `ollama launch` 新增 DeepSeek Harness 与 Muse Code 两大编码代理集成。但与此同时，Ollama Cloud API 出现大面积 503 故障（#17756），且新版本引入多个模型崩溃/回归问题，需注意版本选择。

## 版本发布与破坏性变更

**v0.32.13** — Qwen3.8 开发者指令修复
- 为 Qwen3.8 添加 developer 指令支持，修复 OpenAI 兼容层中 system 消息位置处理问题
- Changelog: https://github.com/ollama/ollama/compare/v0.32.12...v0.32.13

**v0.32.12** — Qwen 3.8 27B 正式支持
- 新增 Qwen 3.8 27B 模型支持（Qwen3.8 架构）
- 针对 Apple Silicon 做了专门优化（推测与 MLX 后端相关）
- 关联 PR：https://github.com/ollama/ollama/pull/17745

**v0.32.11** — launch 集成扩展
- `ollama launch dsh` 支持 DeepSeek 开源 Agent 框架 DeepSeek Harness
- `ollama launch muse` 支持 Meta 的编码 CLI Muse Code
- 优化 OpenAI 兼容层响应处理（描述部分被截断，需关注完整变更）

⚠️ **潜在破坏性变更**：v0.32.12 的 Qwen3.8 渲染器变更（PR #17749、#17757）会影响 system/developer 消息的处理方式，升级后依赖旧行为的应用可能需要适配。

## 新模型与硬件支持

- **Qwen 3.8 27B**：v0.32.12 正式支持，包含聊天模板中 reasoning-effort 与 preserved-thinking 语义（PR #17745）
- **DeepSeek Harness**：`ollama launch dsh` 新集成，支持全局 npm 安装优先、失败后回退 npx（PR #17758）
- **Muse Code**：Meta 的编码代理 CLI 通过 `ollama launch muse` 支持
- **MLX 可重复移植工作流**：PR #15530 在推进中，为后续大规模 MLX 模型移植铺路

## 性能与优化

- **模型元数据缓存**（PR #17752）：修复每次推理调用重复读取 GGUF 元数据导致约 ~300ms 开销的问题，通过缓存解析结果并在 manifest 变更时自动失效，可显著降低单请求延迟
- **Qwen3.8 MLX 优化**：v0.32.12 针对 Apple Silicon 做了专门优化，MLX 后端性能值得关注
- **/api/embed 支持关闭归一化**（PR #17747）：新增可选 `normalize` 字段，默认 `true` 保持现有行为，设为 `false` 时返回原始非归一化 embedding，便于需要原始向量的检索场景

## 稳定性与回归

按严重程度排列：

**🔴 严重 - 服务可用性**
- [Ollama Cloud API 全面 503](https://github.com/ollama/ollama/issues/17756)：api.ollama.cloud 自 8 月 14 日起对所有 API key 返回 503，网站与代理路径高延迟（1.7s–7.3s），影响所有云端调用方，尚无 fix PR

**🔴 严重 - 崩溃类**
- [CUDA illegal memory access on qwen3.6:35b](https://github.com/ollama/ollama/issues/17740)：prompt 超 ~684 tokens 时确定性崩溃，0.31.2→0.32.9 之间的回归，无 fix PR
- [AMD Radeon 780M Vulkan 回归](https://github.com/ollama/ollama/issues/17748)：0.32.11 在 Vulkan 后端运行大模型报 `ErrorDeviceLost`，0.32.10 正常，无 fix PR
- [AMD Strix Halo VRAM 检测回归](https://github.com/ollama/ollama/issues/16462)：容器部署下仅识别 2GB VRAM（0.30+ 回归），影响 ROCm 用户，持续跟进中

**🟠 中等 - 功能异常**
- [SillyTavern 空响应](https://github.com/ollama/ollama/issues/17700)：0.32.8+ 下 text completion 返回空响应，回退 0.32.7 可修复
- [Nemotron3.5 在 AMD AI395+ 上停滞](https://github.com/ollama/ollama/issues/17692)：生成一定 token 后停止，CTRL+C 可中断
- [qwen3.8:27b 报 500 system message 错误](https://github.com/ollama/ollama/issues/17754)：`ollama launch claude --model qwen3.8:27b` 时 API 层未正确处理 SYSTEM 消息——**已有 fix PR #17757**
- [qwen3.8:27b-mlx 拒绝 developer role](https://github.com/ollama/ollama/issues/17750)：破坏 `ollama launch codex`，关联上述 fix
- [Qwen3.8 vision 解析器异常](https://github.com/ollama/ollama/issues/17753)：vison parser 回退到 3.5 版本行为
- [KV cache 量化致生成中断](https://github.com/ollama/ollama/issues/17347)：ROCm 下 qwen3.5/qwen3.6 架构在 q8_0/q4_0 KV cache 时工具调用失效，严重度与量化精度相关
- [/save 失败](https://github.com/ollama/ollama/issues/17735)：nemotron-3.5-lightning 报 `pull model manifest: file does not exist`

**🟡 低 - 其他**
- [llama-server 默认日志过载](https://github.com/ollama/ollama/issues/16897)：journald 被逐请求日志刷屏
- [多文件 GGUF 导入](https://github.com/ollama/ollama/issues/5245)：高赞老 issue（👍157），今日有对应 PR #17743 提交（支持从 Hugging Face 拉取分片 GGUF）

## 对应用开发者的意义

1. **编码代理集成是当前主线**：`ollama launch` 已覆盖 Claude、Codex、Muse、DeepSeek Harness 等主流编码代理。但 Qwen3.8 的 system message 处理 bug（#17754、#17750）影响 Claude Code 和 Codex 的实际使用，建议升级到包含修复的 v0.32.13。PR #17759 也在构建针对真实编码代理客户端的兼容性测试，集成质量将逐步改善。

2. **Qwen3.8 接入注意**：v0.32.13 的 developer 指令支持意味着 system 消息位置校验更严格。若你的应用在用户消息后插入 system 消息，需调整为先合并到对话开头（PR #17757 已对非首条 system 消息做兼容降级处理）。

3. **~300ms 延迟优化落地**：如果应用是请求密集型的（每次请求读取模型元数据），升级到含 PR #17752 的版本将直接受益。

4. **OpenAI 兼容层的两个行为差异**：`/v1/chat/completions` 忽略 Modelfile 中的 `temperature` 参数（#17744）；计划中的 `/api/embed` `normalize` 选项（PR #17747）默认行为不变，可显式关闭归一化。

5. **谨慎选择版本**：Ollama Cloud 503 长时间未修复，依赖云 API 的线上服务需关注 #17756。0.32.11 在 Vulkan 上有回归（#17748），AMD iGPU 用户建议停留在 0.32.10。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

## LiteLLM 动态日报 2026-08-15

### 1. 今日速览

LiteLLM 今日经历一次紧急认证回滚：PR #36982 回滚了 #36837（“stop the team fallback from widening model access”），该提交导致全部 Admin UI 请求 404，配套定向修复 #36976 同步提交。与此同时，Vertex AI count_tokens 修复（#36981）与 OpenAI/Azure 的 GPT-5.x 输出预算行为修复（#36859）在进行中；Auto Router v2 的 session_key_fallback 派生（#36930）和 shadow eval 多 key/反向评估能力（#36865、#36871）正在持续扩展。

### 2. 版本发布与破坏性变更

过去 24 小时无新 Releases。需要特别注意的是，由 #36837 引入的 Admin UI 认证回归已被 revert（[PR #36982](https://github.com/BerriAI/litellm/pull/36982)），该 PR 本身仍是 OPEN 状态，尚未合入主分支；若你的版本已包含 #36837，请等待修复版本发布，详见下文稳定性章节。

### 3. 新模型与硬件支持

无新增已落地的模型/后端支持。社区侧有若干进行中的功能请求值得关注：

- **Azure Foundry 上 Fireworks AI 模型支持**（DeepSeek V3.2 / gpt-oss-120b / Kimi K2.5 / MiniMax M2.5）：[Issue #26618](https://github.com/BerriAI/litellm/issues/26618) 已关闭，未确认最终处置。
- **Telnyx 推理 API 价格表接入**（Kimi K2.6、GLM-5.1-FP8 等）：[Issue #28006](https://github.com/BerriAI/litellm/issues/28006)，OPEN。
- **Ollama 文本到图像生成**（`x/flux2-klein` 等）：[Issue #28026](https://github.com/BerriAI/litellm/issues/28026)，OPEN。

### 4. 性能与优化

无吞吐/延迟/显存量化数字更新，但有两项直接影响成本与可用性的优化值得关注：

- **Anthropic prompt-cache 前缀失效回归**：`AnthropicMessagesConfig._normalize_system_role_messages`（由 #33807 引入）将 mid-conversation `system` 消息提升至顶层 `system` 字段，导致 Claude 旧生成模型（pre-4.8）的 prompt-cache 前缀整体失效，输入 token 成本与延迟显著上升。[Issue #36559](https://github.com/BerriAI/litellm/issues/36559)，OPEN，暂无 fix PR。
- **反向代理场景 brotli 压缩响应不可读**：由于 pass-through 错误地向上游转发客户端的 `Accept-Encoding`，且代理自身不支持 brotli 解码，导致响应体保持压缩且 `Content-Encoding` 被剥离，客户端读到乱码。[PR #36977](https://github.com/BerriAI/litellm/pull/36977) 修复了该问题。

### 5. 稳定性与回归

按严重程度排列：

- **严重（全量 Admin UI 不可用）**：PR #36837 将“UI 保留会话团队”读取为已删除团队并硬性拒绝，导致所有管理员请求 404。回滚 PR [#36982](https://github.com/BerriAI/litellm/pull/36982) 与定向修复 [#36976](https://github.com/BerriAI/litellm/pull/36976) 均已提交，尚未合入。
- **高（Windows 崩溃）**：Prisma 查询引擎在 Windows（Python 3.12）上首次查询即崩溃，影响 1.82.x / 1.83.0，1.81.16 为最后可用版本。[Issue #25260](https://github.com/BerriAI/litellm/issues/25260)，无 fix PR。
- **高（Vertex AI 凭据崩溃）**：设置自定义 `api_base` 且代理无需 Google Vertex 凭据时，`vertex_llm_base.py` 仍触发 `DefaultCredentialsError`，缺少 credential skip 逻辑。[Issue #19138](https://github.com/BerriAI/litellm/issues/19138)，无 fix PR。
- **高（GPT-5.6 函数工具失败）**：`/chat/completions` 对 gpt-5.6-sol/luna/terra 使用 function tools 时出现 `reasoning_effort` 错误。[Issue #33221](https://github.com/BerriAI/litellm/issues/33221)，已 CLOSED（已解决/关闭）。
- **中（MiMo 模型请求失败）**：小米 MiMo-V2-Pro/Omni 在 Claude Code 场景下因 `output_config` 参数报错。[Issue #24549](https://github.com/BerriAI/litellm/issues/24549)，无 fix PR。
- **中（spend logs 丢失 prompts）**：`store_prompts_in_spend_logs: true` 已正确加载，但 `LiteLLM_SpendLogs.messages` 仍持久化为 `{}`。[Issue #34747](https://github.com/BerriAI/litellm/issues/34747)，无 fix PR。
- **中（token 计数错误）**：`litellm.acount_tokens()` 对 `vertex_ai/gemini-*` 模型返回 `total_tokens=0`，原因是 messages 未转换为 Gemini contents；[PR #36981](https://github.com/BerriAI/litellm/pull/36981) 修复中。
- **中（零长度消息角色丢失）**：sglang 等后端在即时 EOS 情况下生成零长度消息，角色字段被省略，导致下游解析失败。[Issue #26428](https://github.com/BerriAI/litellm/issues/26428)，无 fix PR。

### 6. 对应用开发者的意义

- **Admin UI 用户**：如果你的版本包含 #36837，请勿继续使用 Admin UI，等待 [#36982](https://github.com/BerriAI/litellm/pull/36982) 或 [#36976](https://github.com/BerriAI/litellm/pull/36976) 合入后发布的新版本。此问题影响所有团队和用户，无绕过方式。
- **使用 Vertex AI + 自定义代理**：在 #19138 修复前，需要为进程提供 Google 应用默认凭证（即使不使用），或等待官方 credential-skip 逻辑合入。
- **依赖 Agent 探针**：如果你的 Agent 用 `max_tokens: 1` 探测模型可用性，GPT-5.x 会返回 400 并可能被误判为“模型不可用”；[PR #36859](https://github.com/BerriAI/litellm/pull/36859) 将此类情况改为长度截断的 200 响应（与 `max_tokens=4` 行为一致），值得关注。
- **使用 Anthropic 旧模型做多轮工具调用**：伴随 #36559 的 prompt-cache 失效，多轮工具调用不仅延迟上升，token 账单也会明显增加。建议暂时为受影响模型禁用 mid-conversation system 提升，或升级到支持该特性的模型版本。
- **质量评估团队**：shadow eval 即将支持多 key 范围（#36871）和反向方向评估（#36865），可在同一 router/多个 key 上做回归质量检测，无需手工汇总多个 job 结果。Auto Router v2 的 `session_key_fallback` 派生（#36930）也能在缺失 `session_id` 时自动生成会话键，对基于会话的负载均衡有实际帮助。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

## Unsloth 动态日报 2026-08-15

---

### 1. 今日速览

昨日重点围绕三件事：**v0.1.800-beta 带来 Qwen3.8-27B 本地支持**，可在 17GB RAM 上直接运行/微调，并同步提供 NVFP4 量化；**CUDA 13.2 在 IQ3/IQ2 系列量化下产生乱码** 的问题被官方确认并给出规避方案；**AMD 平台兼容性持续承压**，AOTriton 注意力关断导致 SDPA 回退 MATH、OOM 等问题已有修复 PR 在途。

---

### 2. 版本发布与破坏性变更

- **v0.1.800-beta**：支持 Qwen3.8-27B / Qwen3.8-2.4T 本地运行，支持微调 Qwen3.8-27B；通过 Unsloth Dynamic GGUFs 将内存需求降至 17GB，并已上传 NVFP4 量化权重。无破坏性变更或迁移注意事项被报告。 [Release v0.1.800-beta](https://github.com/unslothai/unsloth/releases)

---

### 3. 新模型与硬件支持

- **Qwen3.8-27B / Qwen3.8-2.4T**：现已支持本地推理与微调，官方称其为「同尺寸最强模型」，并配套 Dynamic GGUF（低内存）和 NVFP4（高精度）两种重量化路径。 [Guide: Qwen3.8](https://unsloth.ai/docs/models/qwen3.8) | [Issue #8861](https://github.com/unslothai/unsloth/issues/8861)（用户实测 RTX 5090 上 NVFP4 推理极慢，见稳定性部分）
- **新增功能请求（未落地）**：Ling 3.0 模型支持 [Issue #8532](https://github.com/unslothai/unsloth/issues/8532)、DSPARK 支持 [Issue #8848](https://github.com/unslothai/unsloth/issues/8848) 目前仍是开放 feature request。
- **硬件后端**：无新后端条目；AMD ROCm 相关修复仍在进行（见下文性能与稳定性部分）。

---

### 4. 性能与优化

- **MTP 部分 offload 性能修复**：PR #8875 修复了 Qwen3.8-27B-GGUF 在 UD-IQ2_M 及默认设置下约 3.5 token/s 的异常低速。MTP 嵌入头现在随主模型放置，解决跨设备通信瓶颈。 [PR #8875](https://github.com/unslothai/unsloth/pull/8875)
- **流式 UI 渲染优化**：PR #8845 将浏览器帧间隔内到达的流式文本块合并提交，慢流仍逐块发布，快速流不再让界面渲染线程积压成队列。 [PR #8845](https://github.com/unslothai/unsloth/pull/8845)
- **AMD SDPA 算子闸门修复**：PR #8821 打开 ROCm 构建下 `TORCH_ROCM_AOTRITON_ENABLE_EXPERIMENTAL` 闸门，使 flash/mem-efficient SDPA 不再回退到 MATH 后端，显著降低微调 OOM 风险并提升注意力吞吐。 [PR #8821](https://github.com/unslothai/unsloth/pull/8821) | [Issue #8819](https://github.com/unslothai/unsloth/issues/8819)

---

### 5. 稳定性与回归

按严重程度排列：

- **严重 — CUDA 13.2 + IQ3/IQ2 量化输出乱码**：llama.cpp CUDA 13.2 在 IQ3_S / IQ3_XXS / IQ2_M 下产生完全乱码输出；官方确认 CUDA 12.8 与 13.0 正常。**解决方案：使用 CUDA < 13.0 或改用 Unsloth Studio（内部编译 CUDA 13.0）**。已关闭但影响面极大。 [Issue #4849](https://github.com/unslothai/unsloth/issues/4849)
- **严重 — AMD ROCm AOTriton 闸门关断导致 OOM**：torch 在加载 C++ 扩展时读取一次环境变量即关闭 AOTriton SDPA，所有亚二次注意力后端拒绝后回退 MATH，在长上下文下微调直接 OOM。**已有修复 PR #8821**。 [Issue #8819](https://github.com/unslothai/unsloth/issues/8819)
- **高 — Qwen3.8-27B-NVFP4 在 RTX 5090 / Windows 上推理极慢**：Studio web UI 加载 NVFP4 量化版本后表现异常，尚未有修复 PR。 [Issue #8861](https://github.com/unslothai/unsloth/issues/8861)
- **高 — Windows Desktop 安装被 2 小时上限击杀**：下载 cu126 PyTorch 无进度输出，安装进程被 cap 终止，已关闭但 root cause 未完全解决（存在不同分支）。 [Issue #8698](https://github.com/unslothai/unsloth/issues/8698)
- **中 — macOS M4 上 llama-server 启动失败**：加载本地 GGUF 即失败，且存在 16GB 机器上 idle 内存占用过高问题。 [Issue #8566](https://github.com/unslothai/unsloth/issues/8566)
- **中 — AMD RX 5700XT 不被 Desktop 识别**：Unsloth Desktop 无法识别该 GPU，Open 状态。 [Issue #8529](https://github.com/unslothai/unsloth/issues/8529)
- **中 — Linux AppImage 缺失系统库**：启动即报缺库，已关闭（可能已在最新 release 修复）。 [Issue #8463](https://github.com/unslothai/unsloth/issues/8463)
- **中 — macOS 二次启动报错**：第二此启动 app 即报错，Open 状态。 [Issue #8610](https://github.com/unslothai/unsloth/issues/8610)
- **低 — PDF 附件触发工具调用异常**：在对话中附加 PDF 后产生工具调用问题与生成错误。 [Issue #8858](https://github.com/unslothai/unsloth/issues/8858)
- **低 — MLX 模型在 OpenAI 兼容 API 中不可见**：通过 Desktop 下载的 MLX 模型不出现在 `/v1/models`，调用报 404；**已有修复 PR #8768**。 [PR #8768](https://github.com/unslothai/unsloth/pull/8768) | [Issue #8748](https://github.com/unslothai/unsloth/issues/8748)

---

### 6. 对应用开发者的意义

- **Qwen3.8-27B 大幅降低本地 Agent 硬件门槛**：Dynamic GGUF 可将运行内存压至 17GB，意味着在 24GB 内存的 Mac/PC 上可以直接跑同尺寸最强模型的本地 Agent/工具调用场景。微调支持也已同步开放。
- **慎用 CUDA 13.2 + llama.cpp**：如果应用依赖 llama.cpp 且使用 IQ3/2 系列量化，请锁定 CUDA 12.8 或 13.0 二进制，否则会出现无提示的乱码输出——对 Agent 的 tool-call/reasoning 是灾难性的。
- **AMD 平台仍需关注 ROCm 环境变量**：底层的 AOTriton 闸门会导致微调 OOM 和推理变慢；修复 PR 未合并前，开发者可自行导出 `TORCH_ROCM_AOTRITON_ENABLE_EXPERIMENTAL=1` 作为临时对策。
- **Studio/Desktop 的 API 稳定性仍是主要摩擦点**：V1 endpoint 配置、MCP 集成 [Issue #8790](https://github.com/unslothai/unsloth/issues/8790)、MLX OpenAI API 可见性等直接影响应用对接。建议在依赖这些通道前，先在目标平台上做一次完整冒烟测试。
- **新模型可预期的工具链更新**：Qwen3.8-27B 的 NVFP4 在部分消费级 GPU 上存在性能异常，开发者需要校准后端版本后再用于生产级推理服务。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*