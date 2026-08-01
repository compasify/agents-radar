# AI 基础设施日报 2026-08-01

> 生成时间: 2026-08-01 01:47 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施生态横向分析报告（2026-08-01）

## 1. 生态全景

当前 AI 基础设施处于"新旗舰模型发布 → 引擎密集适配 → 生产稳定性补课"的周期。Kimi-K3、DeepSeek-V4、Gemma 4 等新模型驱动 vLLM/SGLang/llama.cpp 全面跟进 MLA/MTP/FP4/DSpark 等新特性，但适配速度与稳定性之间存在显著剪刀差——今日各项目均有严重正确性问题未闭环（工具调用重复、乱码输出、prefix caching 崩溃、SYCL 回归）。性能优化火力集中在投机解码（MTP +50%）、量化内核（Q2_0/FP8 解码提速 15–40%）和批处理调度（Model Runner V2 吞吐 +2.8%）。分层上，推理引擎、本地运行时、网关、微调框架各司其职，但开始出现交叉——引擎向 Router/RL 框架暴露可观测性信号，微调框架向推理侧输出 GGUF。对 Agent/应用开发者而言，正确性比吞吐更具决定性，工具调用 + prefix caching、reasoning 截断、结构化输出失效等问题的修复进度直接决定上层应用可否上生产。

## 2. 各项目活跃度对比

| 项目 | Issues 动态 | PRs 动态 | Release 情况 | 当前焦点 |
|---|---|---|---|---|
| **vLLM** | 117 个更新 | 500+ 个更新 | 无新版本；RFC 提案弃用 FlexAttention | Kimi-K3/DSV4 生产落地、Model Runner V2、ROCm MLA |
| **SGLang** | 新增 1 个 block-FP8 bug；main CI 2 broken / 5 flaky | 约 14 个 PR（#33126–33157） | 无新版本 | Kimi-K3 内核移植、reasoning 模式修复、FP8 FlashInfer |
| **llama.cpp** | 约 8 个活跃 issue（SYCL 回归、Jinja 安全等） | 约 10 个 PR | **5 个版本**（b10212–b10216） | Vulkan 补齐（POOL_1D/驱动检查）、MTP 加载修复、Q2_0 优化 |
| **Ollama** | 约 10 个开放 issue | 6 个 PR（#17485/#17453/#17422/#17454/#17496/#17494） | 无新版本 | MLX MTP 投机解码、OpenAI 流式对齐、Qwen3.6 系统级冻结 |
| **LiteLLM** | 约 14 个开放 issue | 7 个 PR | v1.95.0-rc.2/rc.3、v1.96.0-dev.2 | CheckBatchCost 静默丢计费、多 Pod 缓存一致性、Responses API |
| **Unsloth** | 约 12 个开放 issue | 7 个 PR | 无新版本 | Studio 桌面端 I/O 修复、ROCm GPU 自动选型缺陷、reasoning budget |

**活跃度排序**：vLLM（600+ 动态）> llama.cpp/SGLang > Ollama/LiteLLM/Unsloth。vLLM 社区体量最大，SGLang 内核合入速度快，llama.cpp 保持高频小步发布节奏，LiteLLM 处于 RC 收敛期。

## 3. 模型支持竞速

| 新模型/架构 | vLLM | SGLang | llama.cpp | Ollama | 评价 |
|---|---|---|---|---|---|
| **Kimi-K3**（KDA+MLA+latent MoE） | ROCm gfx942/gfx950 可 serving（#50319/#50371）；CUDA TP8 + prefix caching 崩溃未决 | 内核移植中（#32890）；长上下文 PAD/NaN 未决 | 文本模型支持 PR 进行中（#26185） | 未提及 | **vLLM 暂时领先但有高危稳定性风险**；llama.cpp 跟随速度快 |
| **DeepSeek-V4** | 0731 reasoning prompt 已对齐；A100 sm_80 支持缺失（17 👍）；Elastic EP 传输修复 | FP4 8×5090 部署 cookbook；DSpark AMD 适配中 | MTP 支持 PR，**实测 ~50% 加速** | 社区请求新权重（#17493） | llama.cpp 性能验证最亮眼；vLLM 在 A100 场景受阻 |
| **Gemma 4** | FP8_BLOCK/dynamic 双乱码（#39407/#39049） | 未提及 | Arc B70 长提示乱码（确认中） | gfx1151 输出损坏；think=false 重复 `<unused49>` | **全生态正确性未过关**，不建议生产 |
| **MiniMax-M3** | — | Blackwell FP8 attention GEMM 合入（#30971） | batched top-k 优化（#26390） | — | SGLang 性能路径最完整 |
| **EuroBERT** | 原生 embedding 支持（#47660） | — | — | — | vLLM 独家 |
| **GraniteSWA/MoE** | — | 新增支持（#33156） | — | — | SGLang 独家 |
| **Nemotron 3** | — | 禁用 BCG（#33130） | — | MLX 支持（#17060） | Ollama 在 MLX 侧先行 |
| **Qwen3-TTS / Qwen3.5/3.6** | — | — | Qwen3-TTS 支持中（#26254） | Qwen3.5 MTP 已合并；Qwen3.6 稳定性问题集中 | llama.cpp/Ollama 各有侧重 |

**结论**：Kimi-K3 和 DeepSeek-V4 是三大引擎竞速核心。vLLM 覆盖面最广但适配质量波动；SGLang 在后发模型上节奏快（MiniMax-M3 FP8 attention）；llama.cpp 在本地/量化侧推进稳，MTP 加速数据具标杆意义；Ollama 聚焦开发者本地场景，在 MLX 生态领先。

## 4. 性能优化前沿

| 方向 | 代表动态 | 数据 |
|---|---|---|
| **投机解码 / MTP** | llama.cpp DSV4 MTP（#25784）；Ollama MLX Qwen3.5 MTP 自动启用（#17454）；vLLM EAGLE3 回归调查中 | llama.cpp **~50% 加速**；MTP 已成为新基准 |
| **量化内核** | vLLM MXFP4→int4 + FlyDSL（ROCm）；SGLang per-tensor FP8 转 FlashInfer（SM90）；llama.cpp Q2_0 `__byte_perm` 优化 | Q2_0 decode **+15–40%**；FP8 路径向非 Blackwell 硬件扩展 |
| **批处理 / 调度** | vLLM Model Runner V2 batch-sharded rejection sample；SGLang BCG a2a 白名单扩展至 megamoe/flashinfer | vLLM 吞吐 **+2.5–2.8%**；BCG 在 4×GB300 验证通过 |
| **分布式** | vLLM Elastic EP 非连续权重传输修复；SGLang DCP 按序列维切分 KV 路线图（#29736）；PD 可观测性 prealloc_ready（#33133） | 解决大模型多机权重完整性问题；EP/PD 调度可见性增强 |
| **KV cache / prefix cache** | llama.cpp rotated KV cache 量化（#26180）；Ollama 跨轮次 KV 复用（#17496）；vLLM prefix caching 稳定性修复（Kimi-K3 边界 miss） | prefix caching 正确性仍是共性短板 |
| **算子/后端** | vLLM ROCm MLA persistent decode 扩展到 12-head；SGLang Blackwell FP8 attention（trtllm_mha）；llama.cpp HIP 启用 hipCUB、SYCL oneMKL flash attention | 多硬件（AMD/Intel/Apple）性能追平 CUDA 是长期主线 |

## 5. 分层定位差异

| 层级 | 项目 | 定位 | 核心场景 | 差异化特征 |
|---|---|---|---|---|
| **在线推理引擎** | **vLLM** | 生产级 LLM serving 框架 | 大规模多 GPU/高并发在线推理 | 模型覆盖最广、社区最大、生态工具链最完善 |
| **在线推理引擎** | **SGLang** | 高性能/高吞吐推理引擎 | 高并发 serving、PD 分离、RL 训练后端 | 内核级优化激进（DeepEP/FlashInfer/BCG），新模型适配快 |
| **本地运行时** | **llama.cpp** | 跨平台轻量原生推理（ggml/gguf） | 桌面/边缘/CPU/Metal/Vulkan/SYCL | 支持设备/格式最广，迭代节奏快，量化格式事实标准 |
| **本地开发工具链** | **Ollama** | 开发者友好的本地模型运行器 | 本地实验、桌面应用、MLX/ROCm | 体验优先，一条命令跑模型，OpenAI 兼容层持续完善 |
| **AI 网关** | **LiteLLM** | 多供应商统一接入与治理网关 | 路由、fallback、计费/审计、企业管控 | 100+ 供应商，定价管理，多 Pod 一致性能力建设中 |
| **训练/微调** | **Unsloth** | 低显存微调框架（LoRA/QLoRA） | 模型微调、GGUF 导出、Studio GUI | 显存优化领先，推理侧集成（llama-server/GGUF/推理预算） |

**交叉信号**：vLLM/SGLang 向 Router/RL 框架暴露实时队列信号（#49538）；Unsloth 的 Studio 直接管理 GGUF 与 llama-server；Ollama 通过 OpenAI 兼容层扮演"轻量网关"。引擎、运行时、网关、微调的边界正在模糊，但核心分工依然清晰——**vLLM/SGLang 解决吞吐与多机，llama.cpp/Ollama 解决本地与便携，LiteLLM 解决多云接入与治理，Unsloth 解决模型定制**。

## 6. 值得关注的趋势信号

### 趋势一：模型迭代速度与基建稳定性形成剪刀差
Kimi-K3、DSV4、Gemma 4 的引擎适配均为"可用但未稳"状态（崩溃、乱码、缓存 miss 并存）。生产环境应锁定经过验证的引擎版本，新模型先灰度，**不要盲目追最新代码**。

### 趋势二：MTP/投机解码成为性能军备竞赛核心
llama.cpp DSV4 MTP +50%、Ollama MLX MTP 自动启用、vLLM EAGLE3 回归修复，说明引擎正在将 MTP 从"可选项"变成"默认路径"。模型的 MTP 支持度将直接影响引擎选型。

### 趋势三：量化正确性是比性能更大的坑
Gemma 4 FP8 双乱码、NVFP4 Marlin、block-FP8 未初始化行等，量化路径的"精度—性能—硬件兼容"三角远未稳定。量化模型上线需做**内容完整性验证**（而非仅看困惑度）。

### 趋势四：Agent 场景是稳定性的终极验收场
工具调用重复/重试（vLLM Kimi-K3）、prefix caching + MTP + 工具调用损坏（vLLM #50188）、reasoning 截断导致空回复（SGLang）、Gemma 4:e4b 工具解析错误（Ollama）——工具调用、prefix caching、reasoning 三大件是 Agent 应用的黄金三角问题区，建议专项压测。

### 趋势五：可观测性与确定性成为基础设施新卖点
vLLM 请求队列信号、llama.cpp `/metrics` KV cache 指标与 spec-decode counters、SGLang `prealloc_ready` 队列计量、vLLM `trace_decode_token_ids` 确定性解码——这些能力直接服务上层 Router、verl 等 RL 框架与 CI 稳定性测试，值得提前接入。

### 趋势六：模型文件本身成为攻击面
llama.cpp Jinja 解析器的递归/除零漏洞可被恶意 GGUF 触发进程崩溃；SGLang 报告 PAD token 注入。**不可信模型文件应在隔离环境运行**，并对 GGUF 来源做安全管控。

### 趋势七：成本核算的静默丢失是企业级隐患
LiteLLM CheckBatchCost 存在 reconcile 成功但不写 spend 行、新模型定价缺失导致 $0 计费。依赖网关做计费/成本分析的团队需建立**对账审计机制**。

---

### 对 Agent/应用开发者的具体建议

1. **升级前先查三个问题**：你使用的模型是否涉及 Gemma 4 FP8/量化路径？工具调用是否与 prefix caching/MTP 同时开启？reasoning 输出是否依赖自定义 stop_sequences？——这三个组合是当前 Bug 密度最高的区域。
2. **建立引擎版本基线**：跟随各项目的关键修复合入动作（vLLM #50641/#50278、SGLang #33151–33155、llama.cpp b10212 以上），不要基于 main 分支做生产部署。
3. **做应用层兜底**：结构化输出做二次 schema 校验；流式响应显式捕获中断；tool-call 做去重与超时重试。
4. **关注新模型定价**：Kimi-K3 等新模型在 LiteLLM 定价未合入前，计费可能为 $0，成本数据不可直接采信。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 动态日报 2026-08-01

> 过去 24 小时：117 个 Issue、500 个 PR 有更新。

## 1. 今日速览

- **Kimi-K3 成为社区焦点**：官方 tracking issue [#50001](https://github.com/vllm-project/vllm/issues/50001) 仍在推进，但曝出 TP=8 + prefix caching 并发崩溃 ([#50147](https://github.com/vllm-project/vllm/issues/50147))、1536 token 边界 prefix cache miss ([#50235](https://github.com/vllm-project/vllm/issues/50235)) 和工具调用重复 ([#50203](https://github.com/vllm-project/vllm/issues/50203)) 等问题；ROCm 侧通过 [#50319](https://github.com/vllm-project/vllm/pull/50319) / [#50371](https://github.com/vllm-project/vllm/pull/50371) 补齐 gfx942/gfx950 支持。
- **DeepSeek-V4 生态持续推进**：A100/A800 sm_80 支持请求 (#40851) 已获 17 👍 仍未解决，0731 版 reasoning effort 提示词前端已提交 PR ([#50580](https://github.com/vllm-project/vllm/pull/50580))，Elastic EP 非连续权重传输缺陷也有针对性修复 ([#50641](https://github.com/vllm-project/vllm/pull/50641))。
- **架构方向值得关注**：FlexAttention 后端被提议弃用 ([#50324](https://github.com/vllm-project/vllm/issues/50324))，社区讨论热度较高；Model Runner V2 的 batch-sharded rejection sample 实测吞吐提升约 2.5–2.8% ([#50465](https://github.com/vllm-project/vllm/pull/50465))。

## 2. 版本发布与破坏性变更

今日无新版本发布。关注以下计划中变更：

- **[RFC] 弃用 FlexAttention 后端** ([#50324](https://github.com/vllm-project/vllm/issues/50324))：FlexAttention 在 ROCm 上已不再默认启用，CUDA 上表现落后于 TritonAttention，且维护成本高、偶尔破坏 CI。该 RFC 若落地，依赖 FlexAttention 启动参数的下游用户需迁移。

## 3. 新模型与硬件支持

- **[ROCm][Kimi-K3] 启用 gfx942 serving** ([#50319](https://github.com/vllm-project/vllm/pull/50319))：将 MXFP4 expert 权重在加载时转换为 groupwise int4，并调度 AITER bf16×int4 FlyDSL 内核；同时通过 padding 将 TP-sharded MLA query heads 对齐到 persistent kernel 的 16-head 下限，使 TP8 Kimi-K3 可在 MI300 系列运行。
- **[ROCm] 12-head MLA persistent decode** ([#50371](https://github.com/vllm-project/vllm/pull/50371))：为 gfx950 启用 Kimi-K3 TP8（96 heads / 8 = 12 local heads）的 AITER MLA 持久化解码路径。
- **[Model] EuroBERT embedding 模型支持** ([#47660](https://github.com/vllm-project/vllm/pull/47660))：新增原生 embedding/pooling 支持，架构复用 Llama 构建块（RMSNorm/GQA/SwiGLU/RoPE）。
- **[Feature Request] DeepSeek-V4-Flash sm_80 支持** ([#40851](https://github.com/vllm-project/vllm/issues/40851))：A100/A800 上初始化失败，root cause 指向 deepgemm 的 sm_80 支持缺失，社区需求量大（17 👍），目前无具体排期。

## 4. 性能与优化

- **[Model Runner V2] batch-sharded rejection sample** ([#50465](https://github.com/vllm-project/vllm/pull/50465))：DSV4 + DSpark、2K/2K、并发 64 基准下，请求吞吐 2.90 → 2.98 req/s（+2.8%），输出 token 吞吐 5948 → 6098 tok/s（+2.5%）。
- **[ROCm] MLA persistent decode 扩展到 12-head 配置** ([#50371](https://github.com/vllm-project/vllm/pull/50371))：将此前仅支持 16-head 的 persistent AITER MLA 内核扩展至 Kimi-K3 TP8 的 12-head 形状，直接改善 ROCm 侧解码性能。
- **[Kernel][Helion] 基准可复现性修复** ([#50635](https://github.com/vllm-project/vllm/pull/50635))：在 benchmark 重复运行之间快照并恢复被 kernel mutate 的输入张量，并排除 reset/L2-cache-clear 开销对计时的影响，提高性能测试可信度。

## 5. 稳定性与回归

**高危**

- **[Bug] Kimi-K3 TP=8 + prefix caching 并发崩溃** ([#50147](https://github.com/vllm-project/vllm/issues/50147))：并发负载下反复出现 illegal-memory-access，目前无修复 PR，已由 tracking issue [#50001](https://github.com/vllm-project/vllm/issues/50001) 跟踪。
- **[Bug][XPU] GDN attention 静默内存破坏** ([#49924](https://github.com/vllm-project/vllm/issues/49924))：Intel GPU 上负载导致内存损坏；修复已合入 `vllm-xpu-kernels`，但 `requirements/xpu.txt` 仍锁定修复前的旧版本，属依赖发布滞后，升级即可解。
- **[Bug] Gemma 4 FP8 系列乱码输出**：FP8_BLOCK checkpoint 输出重复文本，根因是 absorbed activation scales 被双重应用导致 logit 在 softcap 处饱和 ([#39407](https://github.com/vllm-project/vllm/issues/39407))；FP8 dynamic quantization 同样报告 gibberish ([#39049](https://github.com/vllm-project/vllm/issues/39049))。
- **[Bug] BF16 NVFP4 Marlin 在非原生 FP4 硬件上乱码** ([#34694](https://github.com/vllm-project/vllm/issues/34694))：在不支持原生 FP4 的 GPU 上产生错误输出。
- **[Bug] prefix caching + MTP + 工具调用损坏** ([#50188](https://github.com/vllm-project/vllm/issues/50188))：显式开启 prefix caching 时，重复相同 prompt 的 MTP 推测解码会破坏工具调用文本生成。

**中危**

- **[Bug] Kimi-K3 prefix cache 边界 miss** ([#50235](https://github.com/vllm-project/vllm/issues/50235))：prompt 长度恰为 1536 token 边界时无法复用 prefix cache。
- **[Bug] Kimi-K3 工具调用重复/重试** ([#50203](https://github.com/vllm-project/vllm/issues/50203))：tool-call 重复导致 agent 陷入无限重试循环并最终 end_turn。
- **[Bug][XPU] 双 Arc B50 (Battlemage) TP=2 初始化崩溃** ([#48953](https://github.com/vllm-project/vllm/issues/48953))：`zeMemOpenIpcHandle` 返回 `INVALID_ARGUMENT`。
- **[Performance] EAGLE3 推测解码回归**：TTFT/P99 显著增加 ([#39790](https://github.com/vllm-project/vllm/issues/39790))，v0.19 较 v0.18 有延迟回退 ([#39940](https://github.com/vllm-project/vllm/issues/39940))，均未关闭。

**已提出修复 PR**

- [#50641](https://github.com/vllm-project/vllm/pull/50641) Elastic EP 非连续权重传输修复（影响 DeepSeek-V3 部分权重）。
- [#50633](https://github.com/vllm-project/vllm/pull/50633) `runai_streamer` 多节点下非 tensor 模型文件分发修复（closes [#50616](https://github.com/vllm-project/vllm/issues/50616)）。
- [#50278](https://github.com/vllm-project/vllm/pull/50278) LoRA Punica `split_k=1` 确定性修复（closes [#50059](https://github.com/vllm-project/vllm/issues/50059)）。
- [#50642](https://github.com/vllm-project/vllm/pull/50642) 将 `model_config` 透传给嵌套 reasoning parser 的修复。

## 6. 对应用开发者的意义

- **Kimi-K3 生产部署需谨慎**：工具调用（重复/ID 作用域）、prefix caching 和并发稳定性均存在已知问题，官方仍在快速迭代（见 [#50001](https://github.com/vllm-project/vllm/issues/50001)）。建议锁定经过验证的版本，并在上线前针对工具调用 + prefix caching 组合做专项压测。
- **外部 Router/RL 基建将获得更好的可观测性**：社区正在推动实时请求队列信号（`NUM_REQUESTS_RUNNING/WAITING`，[#49538](https://github.com/vllm-project/vllm/issues/49538)）与一等公民 session id（[#48049](https://github.com/vllm-project/vllm/issues/48049)），对 vLLM 之上的 kvc-aware router、verl 等 RL 框架直接利好。
- **确定性生成能力值得关注**：PR [#46701](https://github.com/vllm-project/vllm/pull/46701) 为 V1 增加 `trace_decode_token_ids`，可强制采样器按预定 token 序列逐布解码，同时保持真实 logprob 计算。对评估、仿真回放、CI 稳定性测试很有价值。
- **DeepSeek-V4 0731 reasoning effort 提示词变更**（[#50580](https://github.com/vllm-project/vllm/pull/50580)）：`low/high/max` 各档位前缀将对齐官方 0731 版本，使用 reasoning effort 的开发者需同步升级服务端，避免行为不一致。
- **FlexAttention 弃用 RFC**（[#50324](https://github.com/vllm-project/vllm/issues/50324)）：计划弃用的信号明确，若在自定义模型或脚本中硬编码了 FlexAttention 相关配置，建议提前评估迁移到 TritonAttention。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 动态日报（2026-08-01）

## 1. 今日速览

- 过去 24 小时**无新 Release**，社区重心集中在 Kimi K3 Day0 后续落地的内核移植（[#32890](https://github.com/sgl-project/sglang/pull/32890)）以及一批 reasoning/thinking 模式正确性修复（[#33151–#33155](https://github.com/sgl-project/sglang/pull/33155)）。
- 稳定性方面：DSpark TP8、HiCache 死锁等历史问题仍在调查中，今日新增 1 个 block-FP8 GEMM 未初始化行 bug（[#33106](https://github.com/sgl-project/sglang/issues/33106)）。
- CI 自动跟踪显示 main 分支 **2 broken / 5 flaky / 639 个近期修复**（[#17050](https://github.com/sgl-project/sglang/issues/17050)）。

## 2. 版本发布与破坏性变更

无（过去 24 小时无新版本发布，无新增 API/配置破坏性变更）。

## 3. 新模型与硬件支持

- **Kimi K3 内核先行移植**：[PR #32890](https://github.com/sgl-project/sglang/pull/32890) 将 Day0 的独立 JIT/TMA kernel 合入 main，保持模型/scheduler 集成解耦，便于独立评审与后续复用。
- **DeepSeek-V4 RTX 5090 部署配方**：[PR #33157](https://github.com/sgl-project/sglang/pull/33157) 新增单机 8×RTX 5090（32GB）运行 DeepSeek-V4-Flash-0731 FP4 checkpoint 的 cookbook。
- **GraniteSWA / GraniteMoeSWA**：[PR #33156](https://github.com/sgl-project/sglang/pull/33156) 新增对 IBM 这两类稀疏注意力 MoE 模型的支持。
- **Per-tensor FP8 路由 FlashInfer（SM90）**：[PR #33148](https://github.com/sgl-project/sglang/pull/33148) 解决了 per-tensor FP8 checkpoint 的 scalar scale 广播问题，将其从 AOT CUTLASS rowwise GEMM 转至 FlashInfer（对应 [Issue #32993](https://github.com/sgl-project/sglang/issues/32993)）。
- **MiniCPM-SALA**：[PR #30360](https://github.com/sgl-project/sglang/pull/30360) 原生 serving 支持进行中。
- **DeepSeek V4 DSpark on AMD HIP**：[PR #30964](https://github.com/sgl-project/sglang/pull/30964) ROCm/HIP 平台适配进行中。
- **Apple Silicon 路线图**：[Issue #19137](https://github.com/sgl-project/sglang/issues/19137) 配套的 MLX runner-stub 重构 RFC（[#32321](https://github.com/sgl-project/sglang/issues/32321)）建议将 `BaseTpWorker` 定义为显式的框架-后端边界，推进非 torch 后端支持。

## 4. 性能与优化

- **Blackwell FP8 attention GEMM（MiniMax-M3）**：[PR #30971](https://github.com/sgl-project/sglang/pull/30971) 合入，SM100 上启用 fp8_e4m3 KV + trtllm_mha，替代原先 bf16 加载并扩宽的去量化路径。
- **BCG 覆盖更多 MoE a2a 后端**：[PR #33150](https://github.com/sgl-project/sglang/pull/33150) 将 breakable CUDA graph 的 a2a 白名单从 DeepEP 扩展到 megamoe 与 flashinfer（4×GB300 验证通过）。
- **启动耗时优化**：[PR #33126](https://github.com/sgl-project/sglang/pull/33126) 在 KV VMM allocator stub 中跳过 `torch/extension.h` 隐式头文件，缩短 `load_inline` 编译启动路径。
- **PD 可观测性增强**：[PR #33133](https://github.com/sgl-project/sglang/pull/33133) 为 decode 侧 load snapshot 增加 `queues.prealloc_ready` 计数器，区分"等待 prefill KV handshake"与"handshake 已完成"两种队列状态。
- **DCP / Helix Parallelism 路线图**：[Issue #29736](https://github.com/sgl-project/sglang/issues/29736) 跟踪 decode 阶段按序列维切分 KV cache、消除 `TP > num_kv_heads` 冗余的工作。
- **内核组织 RFC**：[Issue #29630](https://github.com/sgl-project/sglang/issues/29630) 提议统一 `sglang.kernels.ops.*` 作为公开内核入口，整合 jit_kernel / sgl-kernel / triton_ops 三处散落代码（👍 10）。

## 5. 稳定性与回归

按严重程度排列：

- **[high priority] GLM5 health check 失败（v0.5.10, 2×H100）**：[Issue #22511](https://github.com/sgl-project/sglang/issues/22511) — detokenizer 20 秒无响应，仍无 fix PR，属长期未解决的高优先级问题。
- **[严重] DSpark TP8 illegal memory access**：[Issue #31023](https://github.com/sgl-project/sglang/issues/31023) — 时序敏感的 CUDA Graph 转换错误，已拆分为"跨 TP planning 不一致"与"Graph replay 竞态"两个独立 bug；配套 [RFC #32432](https://github.com/sgl-project/sglang/issues/32432) 提出动态 CUDA Graph replay 的 metadata/workspace/stream 所有权契约。
- **[严重] Kimi-K3 长上下文 PAD 风暴 + DSPARK NaN**：[Issue #32968](https://github.com/sgl-project/sglang/issues/32968) — [PAD] token 未被过滤且 `allowed_special="all"` 可注入；根因与 write-side bug #32477 相关，该修复未进入任何 release。
- **HiCache 两个未修复问题**：[#30760](https://github.com/sgl-project/sglang/issues/30760)（prefetch all_reduce 死锁，TP=4 无 PP）与 [#32605](https://github.com/sgl-project/sglang/issues/32605)（0.5.15 请求 mix-up）。
- **NemotronH 禁用 BCG**：[PR #33130](https://github.com/sgl-project/sglang/pull/33130) — 因定位不到根因的 bug，暂时禁用 Nemotron 全系列 breakable CUDA graph，后续再修。
- **block-FP8 GEMM 未初始化行（新报）**：[Issue #33106](https://github.com/sgl-project/sglang/issues/33106) — `--moe-a2a-backend deepep` 下未初始化行进入 GEMM，被 DeepGEMM 掩盖、flashinfer 下暴露 NaN。
- **PP+TP 通信优化损坏张量**：[Issue #30015](https://github.com/sgl-project/sglang/issues/30015) — `send_tensor_dict` 的 all-gather 优化对非 TP 复制张量产生静默数据损坏。
- **AMD HIP 平台**：[#31350](https://github.com/sgl-project/sglang/issues/31350)（Qwen3.5 dp-attention 零尺寸 grid）与 [#31594](https://github.com/sgl-project/sglang/issues/31594)（GatedDeltaNet HIP invalid configuration argument）。
- **SM103 TGV kernel 集群屏障缺失**：[Issue #32907](https://github.com/sgl-project/sglang/issues/32907) — cutedsl 2-CTA kernel 缺 trailing cluster barrier，PDL + CUDA Graph 下崩溃。
- **reasoning 模式修复批量提交**（havengit，今日集中）：[#33155](https://github.com/sgl-project/sglang/pull/33155) 修复 pydantic 静默丢弃顶层 `enable_thinking` 字段；[#33152](https://github.com/sgl-project/sglang/pull/33152) scheduler 跳过 reasoning 阶段的 user stop 检查；[#33151](https://github.com/sgl-project/sglang/pull/33151) detokenizer 改用 `rfind` 精确定位 stop 串；[#33154](https://github.com/sgl-project/sglang/pull/33154) 避免 stop 截断 reasoning 后 `content` 为空；[#33153](https://github.com/sgl-project/sglang/pull/33153) Anthropic adapter 正确上报 `stop_sequence`。
- **今日关闭的过期问题**：NVFP4 compressed-tensors 加载崩溃（[#25501](https://github.com/sgl-project/sglang/issues/25501)）、gpt-oss-120b EAGLE3 服务崩溃（[#32226](https://github.com/sgl-project/sglang/issues/32226)）、MoE gate topk kernel 整合（[#26771](https://github.com/sgl-project/sglang/issues/26771)）、JetBrains Mellum 支持（[#26944](https://github.com/sgl-project/sglang/issues/26944)）等标记为 inactive/closed。
- **CI 基础设施**：[#26340](https://github.com/sgl-project/sglang/issues/26340) CUDA coredump 自动收集 tracker 持续更新（累计 223 条评论）；[#20865](https://github.com/sgl-project/sglang/issues/20865) 提出为 `managers/`、`mem_cache/` 等核心模块补充单元测试覆盖。

## 6. 对应用开发者的意义

- **Agent 应用应重点跟进 reasoning 修复**：#33151–#33155 解决的"stop_sequences 截断思考导致空回复"、"`enable_thinking` 被 pydantic 丢弃"、"Anthropic stop_reason 误报"等问题，直接影响带思维链输出的完整性。若你的应用依赖 reasoning 内容或自定义 stop_sequences，建议合入后立即回归。
- **新模型落地节奏加快，但生产升级需谨慎**：Kimi K3（DSpark）、DeepSeek-V4 FP4、Nemotron、MiniMax-M3 的 kernel/量化路径正在 main 密集合入；相关稳定性问题（如 Kimi-K3 PAD/NaN、Nemotron BCG）尚未全部收敛，建议跟踪 [Kimi K3 Roadmap #32607](https://github.com/sgl-project/sglang/issues/32607) 与 [Nemotron Perf Tracking #27286](https://github.com/sgl-project/sglang/issues/27286)，等待正式 release 再切换。
- **HiCache / PD 分离用户注意**：HiCache 死锁与请求错乱两个 bug 尚无修复，长上下文高并发服务需谨慎；同时 `prealloc_ready` 计数器（[#33133](https://github.com/sgl-project/sglang/pull/33133)）落地后，自建调度层可更精确区分 prealloc 队列瓶颈，建议及时接入该指标。
- **量化兼容性**：per-tensor FP8 在 SM90/SM89 上即将获得 FlashInfer 路径（[#33148](https://github.com/sgl-project/sglang/pull/33148)），对使用 FP8 checkpoint 的 Hopper 用户是性能利好；NVFP4 加载崩溃修复已随相关 issue 关闭，升级前请确认版本包含该修复。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 动态日报 2026-08-01

## 今日速览

Vulkan 后端继续快速迭代，本周连续发布多项改进，包括新增 POOL_1D 算子、Windows Intel GPU 驱动版本检查（修复崩溃）以及 SDK 升级至 1.4.357.0。与此同时，MTP（Multi-Token Prediction）相关修复落地，修复了 MTP 张量在未使用场景下的加载问题，并对 DeepSeek V4 的 MTP 支持进行了针对性优化。值得关注的是，SYCL 后端在混合模型上存在严重回归问题（输出乱码 + 崩溃），社区讨论活跃，目前尚无修复 PR。

---

## 版本发布与破坏性变更

- **b10216**：Vulkan 后端新增 POOL_1D 操作符支持，包含 push constants 结构体、pipeline 字段及对应 compute shader（`pool1d.comp`），补齐了 Vulkan 在池化层方面的能力。 [PR #25431](https://github.com/ggml-org/llama.cpp/pull/25431)
- **b10215**：Vulkan 后端引入 Windows Intel GPU 驱动版本检查，以缓解旧版驱动导致的崩溃问题（修复从驱动 32.0.101.8860 开始生效）。 [PR #25192](https://github.com/ggml-org/llama.cpp/pull/25192)
- **b10214**：`mtmd` 新增 `n_embd_head` 支持，由 unsloth 社区贡献。 [PR #26342](https://github.com/ggml-org/llama.cpp/pull/26342)
- **b10213**：支持 rotated KV cache 量化。 [PR #26180](https://github.com/ggml-org/llama.cpp/pull/26180)
- **b10212（破坏性变更）**：MTP 张量现在仅在真正使用时才加载（此前所有支持 MTP 的模型默认加载）。若你的工作流依赖未启用但已加载的 MTP 张量，请注意行为变化。 [PR #26296](https://github.com/ggml-org/llama.cpp/pull/26296)

---

## 新模型与硬件支持

- **Kimi-K3 文本模型支持（PR 进行中）**：新增混合 KDA (linear) + MLA (full) 注意力架构支持，包含跨层残差注意力（cross-layer residual attention）、潜在 MoE（latent MoE）及 situ 激活函数等特性。 [PR #26185](https://github.com/ggml-org/llama.cpp/pull/26185)
- **Qwen3-TTS 支持（PR 进行中）**：mtmd 模块正在增加 Qwen3-TTS-12Hz-1.7B-Base 的转换与推理支持，包括 talker backbone 和 speaker encoder 的加载与推理。 [PR #26254](https://github.com/ggml-org/llama.cpp/pull/26254)
- **SYCL 后端：支持 oneMKL GEMM flash attention**，用于 XMX 加速的 prompt processing 阶段，并修复了 interleaved dst layout 的 normalize kernel。 [PR #25025](https://github.com/ggml-org/llama.cpp/pull/25025)

---

## 性能与优化

- **DeepSeek V4 MTP 支持（PR 进行中）**：在 `--spec-draft-n-max 2` 下实测约 **50% 推理加速**。 [PR #25784](https://github.com/ggml-org/llama.cpp/pull/25784)
- **CUDA Q2_0 算子优化（已合入 b10209）**：通过 `__byte_perm` 解包 Q2_0 元素，单次 decode 速度提升 **15-40%**，prompt processing 提升 **8%**。 [PR #25603](https://github.com/ggml-org/llama.cpp/pull/25603)
- **CUDA Q1_0 算子优化（PR 已关闭/合入）**：同样的 `__byte_perm` 方法使 decode 速度提升 **5-10%**，pp 提升 **1-2.5%**。 [PR #25628](https://github.com/ggml-org/llama.cpp/pull/25628)
- **CUDA 多行 top-k 批量运算优化（PR 进行中）**：使用 batched argsort 替代逐行 sequential DeviceTopK dispatch，对 MiniMax M3 等多行批处理场景有利。 [PR #26390](https://github.com/ggml-org/llama.cpp/pull/26390)
- **HIP 后端启用 hipCUB**：使 AMD 平台在 argsort / top-k 等设备级原语上使用 CUB 代码路径，摆脱慢速 CPU 回退。 [PR #26388](https://github.com/ggml-org/llama.cpp/pull/26388)

---

## 稳定性与回归

按严重程度降序排列：

1. **SYCL 混合模型输出乱码 + 崩溃（严重回归）**：Qwen3Next/Qwen3.5 架构模型在 Intel Arc Pro B60 上输出空/乱码文本，且 `ggml_sycl_op_mul_mat` 崩溃。回归范围已缩小到 b9128-b9159（2026-03-23）到 b9479（2026-06-03）之间。 **尚无修复 PR**。 [Issue #24168](https://github.com/ggml-org/llama.cpp/issues/24168)
2. **GLM-5.2 密集-MLA CUDA 路径输出损坏**：任何真实 transformer 层 offload 到 GPU 后产生部分连贯文字混合乱码的输出。 **尚无修复 PR**。 [Issue #26027](https://github.com/ggml-org/llama.cpp/issues/26027)
3. **MTP 张量默认加载回归（已修复）**：#25980 导致 MTP 张量默认加载且无启动时 opt-out，b10212 已修复该问题（仅在实际使用时加载）。 [Issue #26290](https://github.com/ggml-org/llama.cpp/issues/26290) / [Fix PR #26296](https://github.com/ggml-org/llama.cpp/pull/26296)
4. **Gemma 4 12B 在 Intel Arc Pro B70（Xe2）上长提示词输出乱码**：SYCL 后端问题，尚在确认中。 [Issue #26206](https://github.com/ggml-org/llama.cpp/issues/26206)
5. **Jinja 解析器安全性修复（PR 进行中）**：新增递归深度限制（防聊天模板崩溃）和 `divisibleby` 零除数保护（防 SIGFPE 崩溃）。恶意 GGUF 模型可触发，建议关注合入状态。 [PR #26387](https://github.com/ggml-org/llama.cpp/pull/26387) / [PR #26386](https://github.com/ggml-org/llama.cpp/pull/26386)
6. **CUDA split-mode = tensor 自 b10054 起回归**：已在 issue 中标记，待确认修复方向。 [Issue #25829](https://github.com/ggml-org/llama.cpp/issues/25829)

---

## 对应用开发者的意义

- **MTP 行为变更需留意**：b10212 起，MTP 张量不再无条件加载，使用 MTP 的部署请确认启动参数正确启用以避免模型加载异常或推理行为不一致。
- **投机解码能力提升**：DeepSeek V4 MTP 约 50% 加速及 Gemma 4 MTP 在 speculative-simple 中的支持正在推进，下游 Agent/应用可关注 `llama-speculative-simple` 的更新。 [PR #25784](https://github.com/ggml-org/llama.cpp/pull/25784) / [PR #25679](https://github.com/ggml-org/llama.cpp/pull/25679)
- **服务可观测性增强**：两个 PR（spec-decode counters 和 KV cache metrics）正在为 `/metrics` 端点添加投机解码计数与 KV cache 水位指标，对生产监控运维有直接帮助。 [PR #26389](https://github.com/ggml-org/llama.cpp/pull/26389) / [PR #24010](https://github.com/ggml-org/llama.cpp/pull/24010)
- **模型安全提醒**：Jinja 解析器的递归/除零漏洞可被恶意 GGUF 模型触发导致进程崩溃，建议在不可信模型环境中避免暴露服务，并关注修复合入窗口。
- **新架构值得提前布局**：Kimi-K3 和 Qwen3-TTS 的 PR 意味着 llama.cpp 生态即将覆盖更多模型类型，Agent 开发者可提前评估这些模型的集成价值。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

## Ollama 动态日报 — 2026-08-01

### 1. 今日速览

今日无新版本发布，但多项重大稳定性问题浮出水面：**Qwen3.6 在 Apple M5 上可导致 macOS 系统级冻结**（#17452）、**CUDA illegal memory access**（#17434）、**Gemma 4 12B 在 ROCm/gfx1151 上输出损坏**（#17498）均处于开放状态。PR 侧则以 **OpenAI 兼容层流式格式对齐**（#17485）、**MLX qwen3.5 MTP 投机解码**（#17454）和 **Qwen3.6/MLX 挂起修复**（#17494）最值得关注。

---

### 2. 版本发布与破坏性变更

无新版本发布。但以下合并/进行中的 PR 涉及 API/行为变更，升级后需关注：

- **OpenAI 流式格式对齐**（[#17485](https://github.com/ollama/ollama/pull/17485)）：重写 `/v1/chat/completions` 流式响应，逐块匹配 `api.openai.com` 的线上格式。`finish_reason` 改为独立 chunk 发送。对依赖 OpenAI 流式协议解析的客户端是**破坏性变更**，需重新验证。
- **保留工具参数的 JSON Schema 约束**（[#17453](https://github.com/ollama/ollama/pull/17453)）：修复 Tool 参数解析丢失 `minimum`、`maximum`、`default`、`multipleOf` 等关键字的问题，工具调用 schema 行为将更严格。
- **`/v1/models` 响应新增 `context_length` 字段**（[#17422](https://github.com/ollama/ollama/pull/17422)）：补齐 OpenAI 兼容层元数据，客户端可据此做上下文管理。

---

### 3. 新模型与硬件支持

- **DeepSeek Flash V4 0731 权重更新请求**（[#17493](https://github.com/ollama/ollama/issues/17493)）：社区请求支持 7 月 31 日发布的新权重版本。
- **MLX 后端新增 Gemma 4 Vision 支持**（[#17487](https://github.com/ollama/ollama/pull/17487)）：为 MLX runner 搭建临时多模态集成框架，含简单媒体缓存；待 pipeline 稳定后将重构。
- **MLX 后端实现 Nemotron 3**（[#17060](https://github.com/ollama/ollama/pull/17060)）：包含 NVFP4/MXFP8 自定义 expert kernel，为 MLX 新增架构支持。
- **AMD Radeon 8060S（gfx1151）ROCm 输出损坏**（[#17498](https://github.com/ollama/ollama/issues/17498)）：Gemma 4 12B 在约 1200 prompt tokens 处开始产生乱码，同模型在 Windows 上复现。属新硬件兼容性问题。

---

### 4. 性能与优化

- **MLX qwen3.5 MTP 投机解码**（[#17454](https://github.com/ollama/ollama/pull/17454)，已合并）：加载 MTP head 作为 draft model，在 M5 Max 上显著提升解码吞吐，自动启用，无需配置。
- **MTP 模型跨轮次 KV 缓存复用**（[#17496](https://github.com/ollama/ollama/pull/17496)）：修复 MTP 模型在非思考轮次间无法复用缓存的问题，减少多轮对话重复 prefill。
- **MLX 大模型挂起根因定位**（[#17494](https://github.com/ollama/ollama/pull/17494)）：MLX runner 丢弃 `num_ctx` 导致生成长度仅受 `max_position_embeddings` 限制，产生长上下文挂起；PR 给出修复，`OLLAMA_LLM_LIBRARY=cpu` 可临时绕过。

---

### 5. 稳定性与回归

按严重程度排列：

| 级别 | Issue | 状态 |
|---|---|---|
| 🔴 系统级 | **Qwen3.6 在 Apple M5 上冻结整个 macOS**（[#17452](https://github.com/ollama/ollama/issues/17452)），需强制重启 | OPEN |
| 🔴 CUDA | **qwen3.6:35b + JSON-schema format + think:false** 组合下 100% 复现 CUDA illegal memory access（[#17434](https://github.com/ollama/ollama/issues/17434)），DGX Spark GB10（arm64） | OPEN |
| 🔴 ROCm | **Gemma 4 12B 在 gfx1151 上输出损坏**（[#17498](https://github.com/ollama/ollama/issues/17498)），约 1200 tokens 处稳定复现 | OPEN |
| 🟠 正确性 | **Gemma 4 在 think=false 时重复输出 `<unused49>`**（[#17459](https://github.com/ollama/ollama/issues/17459)），同时破坏 VS Code 集成 | OPEN |
| 🟠 正确性 | **Gemma 4:e4b 工具调用解析错误**（[#15315](https://github.com/ollama/ollama/issues/15315)），0.20.1 后仍未修复，50 条评论、9 👍 | OPEN |
| 🟠 死锁 | **`ollama create` 包含两个 FROM 行（模型 + mmproj）时永久挂起**（[#17491](https://github.com/ollama/ollama/issues/17491)），无法附加独立 GGUF 视觉投影 | OPEN |
| 🟡 路由 | **Linux 上 safetensors 导入 compressed-tensors 量化模型被错误路由到 MLX runner**（[#17490](https://github.com/ollama/ollama/issues/17490)），报 "MLX not available" | OPEN |
| 🟡 挂起 | **MLX 引擎上 gemma4:31b / Qwen3.6:35b 无限挂起**（[#17494](https://github.com/ollama/ollama/pull/17494)） | 已有 PR 修复 |
| 🟡 超时 | **从 HF 拉取 GGUF 大量报 `context deadline exceeded`**（[#17484](https://github.com/ollama/ollama/issues/17484)） | OPEN |
| 🟡 服务 | **ollama.com 持续 8+ 小时 403/登录循环**（[#17471](https://github.com/ollama/ollama/issues/17471)），CLI/API 全挂 | OPEN |
| 🟡 回归 | **Ollama 0.32.4 镜像 CUDA 12.1 下无法使用 GPU**（[#17431](https://github.com/ollama/ollama/issues/17431)），仅用 CPU 推理 | OPEN |
| 🟢 工具 panic | **Tool call value 为单个定界符时 `parseValue` 切片越界 panic**（[#17492](https://github.com/ollama/ollama/pull/17492)） | 已有 PR 修复 |
| 🟢 已修复 | **Qwen3.5 AMD ROCm `SOLVE_TRI failed`**（[#14423](https://github.com/ollama/ollama/issues/14423)） | CLOSED |
| 🟢 已修复 | **Vulkan OOM 回归：0.30.x 大 GGUF 启动失败**（[#16564](https://github.com/ollama/ollama/issues/16564)） | CLOSED |
| 🟢 已关闭 | llava 系列 Windows 崩溃（[#16328](https://github.com/ollama/ollama/issues/16328)）、macOS 停止写日志（[#16704](https://github.com/ollama/ollama/issues/16704)） | CLOSED / needs more info |

---

### 6. 对应用开发者的意义

- **OpenAI 流式协议即将变更**（[#17485](https://github.com/ollama/ollama/pull/17485)）：在 PR 合并前完成客户端兼容测试，重点关注 `finish_reason` 独立 chunk 的解析逻辑。
- **模型元数据更完整**（[#17422](https://github.com/ollama/ollama/pull/17422)）：`context_length` 字段可用于自动上下文窗口管理。
- **Gemma 4 / Qwen3.6 工具调用仍不可靠**：Gemma 4:e4b 解析错误（[#15315](https://github.com/ollama/ollama/issues/15315)）和 Qwen3.6 CUDA 崩溃（[#17434](https://github.com/ollama/ollama/issues/17434)）意味着 agent 场景需谨慎升级这些模型；`think:false` 模式下尤其危险。
- **结构化输出需做降级预案**：MLX 模型结构化输出被忽略（[#16563](https://github.com/ollama/ollama/issues/16563)）、工具参数 JSON Schema 约束缺失（[#17453](https://github.com/ollama/ollama/pull/17453)），建议在应用层做 schema 二次校验。
- **云端服务波动**：ollama.com 持续 403（[#17471](https://github.com/ollama/ollama/issues/17471)）影响云模型拉取/登录，生产环境需考虑本地模型降级路径。Prompt Cache 支持正被社区强烈要求（[#16714](https://github.com/ollama/ollama/issues/16714)），agent 场景可关注后续进展。
- **MLX 用户可先行规避**：大模型挂起问题可设 `OLLAMA_LLM_LIBRARY=cpu` 绕过（[#17494](https://github.com/ollama/ollama/pull/17494)），等待官方修复合入。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 动态日报 — 2026-08-01

## 今日速览

LiteLLM 进入 v1.95.0 RC 收敛阶段，24 小时内连续发布 rc.2、rc.3 候选版及 v1.96.0-dev.2 开发版，正式版发布在即。社区对 Kimi K3、GLM 5.2、Inkling 等新旗舰模型的接入与定价支持诉求集中爆发，Kimi K3 定价 PR 已在审核中。稳定性方面，aiohttp 连接池问题已闭环，但 CheckBatchCost 静默丢计费、流式迭代器 AttributeError 等成本核算与流式正确性问题成为当日热点。

---

## 版本发布与破坏性变更

- **v1.95.0-rc.2 / v1.95.0-rc.3**：RC 候选版连续迭代，未附带功能变更说明；所有 Docker 镜像均使用 cosign 密钥签名，可通过 [`0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0) 提交中的公钥验证镜像完整性。[Release rc.3](https://github.com/BerriAI/litellm/releases/tag/v1.95.0-rc.3)
- **v1.96.0-dev.2**：开发分支同步推进，面向即将合并的 v1.96 功能集，同样附带 cosign 签名。[Release dev.2](https://github.com/BerriAI/litellm/releases/tag/v1.96.0-dev.2)

> 无明确破坏性变更公告。当前主版本为 v1.95.0 RC，生产环境可等待正式版发布后再升级。

---

## 新模型与硬件支持

- **新增 Monet 供应商**（OpenAI 兼容）：PR #35427 通过 JSON-only 路径将 monet.gg 接入 `providers.json`，无需额外代码维护。[PR #35427](https://github.com/BerriAI/litellm/pull/35427)
- **Kimi K3 定价入库**（审核中）：PR #33812 为 moonshot 与 openrouter 前缀补充 Kimi K3（1M 上下文旗舰）的 `model_prices` 条目，合入前经代理路由的 Kimi K3 请求计费为 $0。[PR #33812](https://github.com/BerriAI/litellm/pull/33812)
- **KAT-Coder-Air/Pro V2.5 定价**（审核中）：PR #33662 为 OpenRouter 上两个新发布的编码模型补充定价条目。[PR #33662](https://github.com/BerriAI/litellm/pull/33662)
- **社区新模型接入请求**：
  - Issue #33921 请求对 Kimi K3（Moonshot AI）、Inkling（Thinking Machines Lab）、Tinker 提供一等公民支持。[#33921](https://github.com/BerriAI/litellm/issues/33921)
  - Issue #35410 请求支持来自 Morph 平台的 Kimi K3、GLM 5.2 等模型。[#35410](https://github.com/BerriAI/litellm/issues/35410)
  - Issue #26765 请求为 `azure_ai/gpt-image-2` 添加价格数据。[#26765](https://github.com/BerriAI/litellm/issues/26765)

---

## 性能与优化

- **多 Pod 模型列表共享缓存**（PR #35340，OPEN）：模型行读取改为通过共享 DualCache，所有模型写操作同步刷新缓存。解决多 Pod 部署下已删除模型在 UI「复活」、兄弟 Pod 继续服务模型最长 30 秒、以及模型读从未走统一缓存的问题。[PR #35340](https://github.com/BerriAI/litellm/pull/35340)
- **类型安全重构，消除 ~650 个静态错误**（PR #35397，OPEN）：将 12 处 `Model(**payload)` 的 `Any` kwargs 解包替换为验证后的模型解析，砍掉约 650 个 basedpyright 的 `reportAny` 错误，降低运行时字段拼写错误风险。[PR #35397](https://github.com/BerriAI/litellm/pull/35397)
- **Mock 测试参数统一收敛**（PR #35423，OPEN）：此前 6 个 mock 测试参数有 3 种不同行为，两个参数绕过网关直达 router，三个被静默丢弃——丢弃时返回成功，导致 fallback 演练「假通过」。本次将全部 6 个参数统一收敛到一个配置开关控制（默认关闭）。[PR #35423](https://github.com/BerriAI/litellm/pull/35423)

---

## 稳定性与回归

按严重程度从高到低排列：

1. **aiohttp 3.14.x 连接池中毒，跨供应商随机超时**（#33820，CLOSED）：v1.91.0+ 将 aiohttp 下限提升到 3.14.1 后，连接池被污染导致多个供应商随机出现 `Connection timed out`，影响面覆盖所有使用 aiohttp 传输的请求。该问题已关闭，升级前建议确认具体修复版本。[#33820](https://github.com/BerriAI/litellm/issues/33820)
2. **Redis 非 TLS 连接因 `ssl=False` 反而被强制走 SSLConnection**（#16587，OPEN）：使用 host/port/password + `ssl=False` 连接到 GCP Memorystore 非 TLS Redis 时，LiteLLM 基于「presence」的检查逻辑错误地把该配置判定为 SSL 连接，导致握手失败。该项目已持续 7 条评论讨论，仍无修复 PR。[#16587](https://github.com/BerriAI/litellm/issues/16587)
3. **CheckBatchCost 单批次失败中止整个轮询周期**（#35357，OPEN）：成本核算任务无 per-job 故障隔离，一个 batch 的 cost 计算抛错会让所有其他 batch 的轮询陷入停滞。[#35357](https://github.com/BerriAI/litellm/issues/35357)
4. **CheckBatchCost 静默丢弃 spend 记录**（#35358，OPEN）：managed batch 成功 reconcile，`batch_processed=true` 且记录了 provider 状态，但完全不写 billed spend 行——成本核算静默丢失，无任何报错。[#35358](https://github.com/BerriAI/litellm/issues/35358)
5. **`/v1/responses/compact` 在 fallback 期间硬编码 `metadata` 导致 Azure 400**（#25402，OPEN）：`run_async_fallback` 中硬编码传 `metadata` 参数，Azure 拒绝该字段，导致 failover 失败；直接调用同一模型不触发。[#25402](https://github.com/BerriAI/litellm/issues/25402)
6. **流式迭代器缺 `completed_response` 属性**（#35411，OPEN；已有 Fix PR #35425）：`/v1/responses` 走 completion bridge 流式读取时，若 provider 中途报错，抛出 `AttributeError` 掩盖真实错误，fallback 不执行。[#35411](https://github.com/BerriAI/litellm/issues/35411) / [PR #35425](https://github.com/BerriAI/litellm/pull/35425)
7. **管理端点 HTTP 500：`select=` 参数与 prisma-client-py 不兼容**（#30972，OPEN）：升级到 v1.89.2 后，`/tag/list` 及 tool-policy 管理端点报 `find_many() got an unexpected keyword argument 'select'`，影响全部使用 prisma-client-py 的管理查询。[#30972](https://github.com/BerriAI/litellm/issues/30972)
8. **`disable_end_user_cost_tracking` 配置失效**（#27038，OPEN）：设置该参数为 true 后，`LiteLLM_SpendLogs.end_user` 仍被写入，`LiteLLM_DailyEndUserSpend` 仍产生行，隐私/合规关键开关失效。[#27038](https://github.com/BerriAI/litellm/issues/27038)
9. **代理侧 image_generation 双重日志**（#29638，OPEN）：proxy 上每次 `/v1/images/generations` 触发两次 callback 事件（同 model/prompt/start_time/end_time，仅 ID 不同），SDK 直接调用只记录一次。[#29638](https://github.com/BerriAI/litellm/issues/29638)
10. **managed files 代理下 `client.files.list()` 500**（#35362，OPEN）：报错 `The api_key client option must be set`，说明文件列表接口在 managed-files 模式下认证上下文丢失。[#35362](https://github.com/BerriAI/litellm/issues/35362)
11. **Fireworks Kimi K3 拒绝 `tool_choice`**（#35382，OPEN）：上游支持 tool_choice，但 LiteLLM 在请求前拦截报 `UnsupportedParamsError: fireworks_ai does not support tool_choice`。[#35382](https://github.com/BerriAI/litellm/issues/35382)
12. **UI 添加的 callbacks 覆盖 config 中的 callbacks**（#12118，OPEN）：从 UI 设置页添加一个 logging callback 会整体覆盖配置文件中的 callback 列表，而非追加。该 issue 已存在一年多，今日仍有更新。[#12118](https://github.com/BerriAI/litellm/issues/12118)
13. **Chat UI `/ui/chat` 返回 404**（#27048，OPEN）：PR #22937 引入的 Chat UI 在 Docker 镜像中产物存在，但路由 404，Next.js 静态导出路由未正确注册。[#27048](https://github.com/BerriAI/litellm/issues/27048)
14. **非管理员用户团队键预算显示「unlimited」**（#35404，OPEN）：团队设置了 max budget，但非管理员虚拟键列表展示为 unlimited，进入详情后数据正确。[#35404](https://github.com/BerriAI/litellm/issues/35404)

**今日已关闭的问题**：
- **aiohttp ClientSession 泄漏**（#24230，CLOSED）：loop 不匹配恢复或超时回收路径会重建内部 `ClientSession`，存在泄漏风险，今日关闭。[#24230](https://github.com/BerriAI/litellm/issues/24230)
- **登录重定向错误**（#19086，CLOSED）：`/fallback/login` 后跳转到不存在的 URL，部分同事彻底无法登录。[#19086](https://github.com/BerriAI/litellm/issues/19086)
- **OpenAI Workload Identity Federation（OIDC token exchange）支持请求**（#31649，CLOSED）。[#31649](https://github.com/BerriAI/litellm/issues/31649)

---

## 对应用开发者的意义

- **Responses API 生态仍需谨慎**：`/v1/responses/compact` 的 fallback 硬编码 bug（#25402）与流式 `AttributeError`（#35411）两个问题叠加，说明 Responses API 在 failover 和流式错误处理路径上仍不成熟。正在构建基于 Responses API 的 Agent 应用建议：a) 显式捕获流式中断；b) 验证 fallback 链路是否真正生效，避免「假成功」。

- **MCP 功能仍是 Bug 集中区**：会话上限按 API key 分桶导致共享 key 下所有用户挤在 100 会话配额内（#35383）、per-request `x-mcp-{server-alias}-authorization` 头不生效（#35403）、ID-JAG 凭证预检补丁（PR #35392）等，说明 MCP server 接入的认证与会话管理尚不稳定。重度使用 MCP 的团队应关注这几个 issue 的修复进度。

- **成本核算存在静默丢失风险**：CheckBatchCost 的「reconcile 成功但不写 spend 行」（#35358）和单点失败拖垮全局轮询（#35357）意味着部分 managed batch 的成本数据可能在不报错的情况下永久丢失。依赖 LiteLLM 做计费/成本分析的团队应核查最近 batch 的 spend 记录完整性。

- **新模型接入与计费缺口**：Kimi K3、KAT-Coder 系列等 7 月新模型的定价条目尚未合入，当前经 LiteLLM 路由这些模型会以 $0 计费。在下游账单中看到异常低成本时，请先排查是否为模型定价缺失，而非真实零成本。

- **Redis 连接配置需回归测试**：`ssl=False` 被误判为 SSL 连接的问题（#16587）影响 GCP Memorystore 等非 TLS Redis 场景。使用 host/port/password 配置非 TLS Redis 的团队在升级前需确认该 issue 的修复版本，否则可能遭遇代理启动后无法连接 Redis 的故障。

- **多 Pod 部署一致性将改善**：PR #35340 引入的共享模型列表缓存将消除「已删除模型在 UI 复活」和「兄弟 Pod 继续路由到已下线模型最长 30 秒」的问题，多副本生产环境可关注该 PR 何时进入正式版。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 动态日报 — 2026-08-01

## 今日速览

过去 24 小时 Unsloth 无新版本发布，核心动向集中在 **Unsloth Studio 的稳定性修复与功能补全**：一批针对 Windows 桌面端文件保存/更新失败的 PR 集中提交（#7695/#7707/#7710/#7705），同时 ROCm 平台暴露的 GPU 选型缺陷（iGPU 优先于 dGPU、预编译内核不匹配）已被确认并有修复 PR 跟进（#7670）。功能侧，推理预算（reasoning budget）支持（#7701）和为 Recipe Studio 增加训练节点（#7395）是两个值得关注的新能力。

---

## 版本发布与破坏性变更

无新 Release 发布。

需要留意的行为变更（均在 PR 阶段，合入后将影响现有行为）：

- **[PR #7695] 桌面端原生文件保存方式变更**：修复所有通过 `downloadFile > save_native_file` 的保存路径失败问题（聊天记录导出、项目导出、Markdown 导出、附件保存等）。合入后桌面端保存路径将统一走 Studio 的 native save 边界，此前依赖浏览器下载行为的代码路径可能受影响。
  https://github.com/unslothai/unsloth/pull/7695
- **[PR #7710] 剩余下载路径统一到 native save 边界**：Training Config、Markdown 代码块、生成的图片/音频的下载在桌面端将被路由到与 #7695 相同的保存机制；浏览器内行为保持不变。
  https://github.com/unslothai/unsloth/pull/7710
- **[PR #7670] ROCm 多 GPU 自动选型逻辑变更**：禁止 llama-server 在构建无对应 kernel 的 ROCm 设备上运行（针对 #7624/#7669）。合入后多 GPU + 集成显卡的机器上，自动选型行为将与之前不同（不再以空闲显存为唯一判据）。
  https://github.com/unslothai/unsloth/pull/7670

---

## 新模型与硬件支持

- 无新模型发布。
- **[PR #7706] Intel Arc GPU 检测 + XPU PyTorch 安装**：Windows 安装器的 GPU 检测链目前只覆盖 NVIDIA（CUDA）和 AMD（ROCm），Intel Arc GPU 会掉落到 CPU-only Torch 路径。此 PR 增加 WMI 检测和 Torch XPU 可用性检查，支持 Arc / Iris / UHD / HD Graphics 系列。
  https://github.com/unslothai/unsloth/pull/7706
- **DiffusionGemma 加载修复进行中**：[PR #7575](https://github.com/unslothai/unsloth/pull/7575) 修复硬编码 `NGL=99` 导致 DiffusionGemma 总是全量加载到 VRAM 的问题（Issue #7574），使 Studio 的 GPU-layer 设置对 Diffusion 模型生效。依赖 unslothai/unsloth-zoo#958 先行合入（新增 `--ngl` 参数），合入顺序有要求。

---

## 性能与优化

- **[PR #7701] Studio 推理预算（reasoning budget）控制**：为 GGUF 加载增加一等公民的 `reasoning_budget` / `reasoning_budget_message` 设置，可以限制长推理循环、避免模型过度思考，同时保留一定思考能力——对延迟敏感的生产环境和 Agent 场景直接受益。支持跨重载、模型切换、预设和 API 自动切换的持久化。
  https://github.com/unslothai/unsloth/pull/7701
- **[Issue #5867] 内置基准测试功能请求**：建议在 Unsloth Studio 中内置模型对比基准（请求者点名 HellaSwag 和 GSM8K），目前 8 评论、2 👍，尚未有实现 PR。
  https://github.com/unslothai/unsloth/issues/5867
- **[PR #6107] GGUF 导出分片大小控制与私有 Hub 推送修复**：为 Studio 导出增加用户可控的 `gguf_shard_size` 参数，顺带修复私有 Hub 推送问题。对大规模模型分发和受限网络环境有实际意义。
  https://github.com/unslothai/unsloth/pull/6107

---

## 稳定性与回归

按严重程度排列：

**崩溃级 / P0**

- **Segfault：RAG embeddings warmup 在 AMD Radeon 8060S (gfx1100) / ROCm 6.3 上崩溃**（#7331）。安装脚本安装 2026.7.4，本地环境，无 fix PR。
  https://github.com/unslothai/unsloth/issues/7331
- **ROCm 预编译内核无效导致 llama-server 无法启动**（#7669）：Studio 自动选型选择了 gfx1036 iGPU 而非 gfx1101 dGPU，而安装包只带 gfx110X 预编译内核。缺陷与 #7624 同源，修复 PR #7670 已提交。
  https://github.com/unslothai/unsloth/issues/7669
- **ROCm 多 GPU 自动选型选中 iGPU（共享内存）导致崩溃**（#7624，已确认）：空闲内存启发式算法被 iGPU 的共享系统内存欺骗，优先于 dGPU 被选中。修复 PR #7670。
  https://github.com/unslothai/unsloth/issues/7624

**功能不可用 / P1**

- **Windows 上 `unsloth studio update --local` 无法替换运行中的 unsloth.exe（WinError 32）**（#7697，danielhanchen 提交）：现有的 `_release_self_exe_lock_windows` 缓解机制同样失效。无直接修复 PR，但 [#7705](https://github.com/unslothai/unsloth/pull/7705) 修复了 Windows 更新程序无法完成安装的问题（每次更新尝试均失败）。
  https://github.com/unslothai/unsloth/issues/7697
- **桌面端所有原生文件保存失败**（#7695）：聊天导出、Recents/Projects 导出、canvas 产物、Python/终端工具单元格、消息 Markdown、附件保存全部报 "content must be binary"。修复 PR #7695 已提交。
  https://github.com/unslothai/unsloth/issues/7695（跟踪于 PR #7695）
- **桌面端 `window.confirm()` 静默返回 true**（#7707）：删除知识库和 MCP 服务器时不弹确认框，误点即删且无法撤销。修复 PR #7707 已提交。
  https://github.com/unslothai/unsloth/pull/7707
- **DiffusionGemma 大于 VRAM 必然 OOM**（#7574）：硬编码 `NGL=99` 忽略 Studio 的 GPU-layer 设置，即使 GPU 层数设为 0 也会尝试全量加载。修复 PR #7575 已提交（依赖 zoo 先行合入）。
  https://github.com/unslothai/unsloth/issues/7574
- **AMD RDNA3 上 VRAM 总量/用量读取停止更新**（#7452）：Radeon PRO W7900/W7500，ROCm 7.13.99004，Windows 10。无 fix PR。
  https://github.com/unslothai/unsloth/issues/7452

**功能缺陷 / P2**

- **文件名含 "qwen3.6" 的 GGUF 被错误路由到 PeftConfig 加载器**（#7623，已关闭）：自定义扫描文件夹中的 Qwen3.6 GGUF 走 transformers 路径而非 llama-server，导致加载失败。
  https://github.com/unslothai/unsloth/issues/7623
- **自定义扫描文件夹中的本地模型不在模型列表中显示**（#7676）：但可通过 Search Hub 加载。无 fix PR。
  https://github.com/unslothai/unsloth/issues/7676
- **Qwen3.5 微调后无法用 vLLM 推理**（#7681）：微调模型 vLLM serve 失败，预训练模型正常。无 fix PR。
  https://github.com/unslothai/unsloth/issues/7681
- **Core（HF=latest + TRL=latest）CI 在 main 上失败**（#7708）：`_DummyTrainer` 缺少 `data_collator` 属性导致 `test_enable_sample_packing` 报错，所有 PR 的 CPU 测试显示红色但与 PR 本身无关。维护者的 CI 基础设施问题。
  https://github.com/unslothai/unsloth/issues/7708

**体验问题 / P3**

- **模型下载 ETA 初始读数为多天估算**（#7667）：6.8GB 下载显示 "102 B/s, 753d 5h left"。
  https://github.com/unslothai/unsloth/issues/7667
- **桌面端侧边栏暗色模式下出现浅灰色色块**（#7672）；[#7661](https://github.com/unslothai/unsloth/issues/7661) 文件拖放被 GGUF overlay 劫持、聊天附件无法拖入（已关闭）；[#7666](https://github.com/unslothai/unsloth/pull/7666) 十种语言的翻译覆盖补全（约 70%→75%）。
- **第一个安装时 `stdlib.h` 找不到**（#7595）：Windows AMD 平台首次 `torch.compile` 时 Triton AMD/HIP JIT 编译失败。修复 PR #7704 已提交（建立 MSVC 环境）。
  https://github.com/unslothai/unsloth/issues/7595

---

## 对应用开发者的意义

1. **ROCm/AMD 平台仍是高风险区**：GPU 自动选型缺陷（#7624/#7669）、RDNA3 VRAM 读取失效（#7452）、segfault（#7331）均无 workaround 或依赖 PR 合入。建议 AMD 用户固定 GPU 选择逻辑、避免依赖自动检测，并关注 #7670 的合入状态。
2. **桌面端（Tauri）I/O 回归需注意**：文件保存、删除确认、下载锚点在桌面端的行为与浏览器不同，多个修复 PR 刚提交（#7695/#7707/#7710/#7705），桌面端用户升级前建议等待这些合入。
3. **推理预算（#7701）即将落地**：对在 Studio 上构建 Agent 的开发者是重要能力——可以避免长思维链导致的高延迟和 token 消耗，建议提前规划模型配置模板。
4. **微调后模型 + vLLM 的兼容性仍是一个持续痛点**：#2274（Gemma3 4bit + vLLM）至今未关（2025-04 创建），#7681（Qwen3.5 微调后无法 vLLM 推理）又是新案例。微调模型上线推理服务前需充分验证，这一问题的解决优先级仍不高。
5. **CI 基础设施故障（#7708）影响开源贡献者体验**：所有 PR 都会看到一个无关的红色 CPU 测试失败，但已有 issue 跟踪，非项目本身回归，不必因此恐慌。
6. **多位活跃外部贡献者（LeoBorcherding、oobabooga、NilayYadav）主导了 AMD/桌面端修复**，整体呈现"问题发现快、PR 跟进快"的节奏，修复合入而非报告本身是当前主要瓶颈。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*