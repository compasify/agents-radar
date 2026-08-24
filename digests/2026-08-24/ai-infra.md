# AI 基础设施日报 2026-08-24

> 生成时间: 2026-08-23 23:10 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施横向对比分析报告（2026-08-24）

## 1. 生态全景

当前 AI 基础设施正处于“前沿模型快速落地、生产稳定性严重滞后”的阶段。vLLM 与 SGLang 在长上下文、推测解码、弹性 EP、量化路径上持续深挖，但 Kimi-K3 240K 上下文后全实例退化、DeepSeek-V4 在 SM120/GB10 上启动失败、MTP 投机解码内存越界等 P0 级问题，说明新模型架构的工程成熟度仍不足。llama.cpp 以高频发版推进本地推理（GLM-4.5-Air MTP 正式合入），Ollama 则在 API 兼容性和 GGUF 导入体验上承压。与此同时，行业重心正从“功能上线”转向“生命周期治理”：权重缓存将 235B 模型加载时间从 300s+ 压缩至 1s 以内，启动归因、Prometheus operation label、价格数据修正等可观测性/成本控制能力密集出现。LiteLLM 曝出的凭证覆盖权限漏洞也提醒我们：LLM 网关的安全模型尚未跟上部署规模。

## 2. 各项目活跃度对比

> 注：非官方全量统计；vLLM/SGLang/llama.cpp/LiteLLM 为日报中明确列出或可辨识的重点条目，可能少于实际全量。

| 项目 | Issues（今日动态） | PRs（今日动态） | Release | 活跃度特征 |
|---|---|---|---|---|
| vLLM | 重点 issue 约 14 项，含 3 个 P0 | 重点 PR 约 12 项，多数为 P0/P1 修复 | 无 | 高，以稳定性和新模型适配为主 |
| SGLang | 重点 issue 约 11 项；CI 状态 3 broken / 11 flaky | 重点 PR 约 18 项 | 无 | 高，功能开发与基础设施并进 |
| llama.cpp | 重点 issue 约 8 项 | 重点 PR 约 15 项 | b10588 / b10589 / b10593 / b10595 / b10598 / b10603 | 极高，发布节奏最快 |
| Ollama | 19 条 Issue 更新 | 18 条 PR 更新 | 无（最新 0.32.15） | 中高，集中在 API 回归与 GGUF 导入 |
| LiteLLM | 重点 issue 约 9 项 | 重点 PR 约 3 项 | v1.98.0、v1.99.0-rc.1 | 中，安全修复 + 成本数据修正 |
| Unsloth | Studio 约 32 个新 issue | 重点 PR 约 11 项 | 无 | 中高，偏产品集成与 CI/前端稳定 |

## 3. 模型支持竞速

| 项目 | 新模型/架构动态 | 状态 |
|---|---|---|
| vLLM | Granite Switch 原生支持请求；OmniASR（1600+ 语种 ASR）；Orthrus；DeepSeek V4 SM12x Triton fallback | 前两者 PR 活跃，后者已合入 main |
| SGLang | Qwen3-Next native MTP 原型；Humming 后端 W4AFP8；MoE LoRA 执行引擎；LTX-2.5 decoder tiling | 均为 PR/原型，未正式合并 |
| llama.cpp | **GLM-4.5-Air MTP 正式合入（b10603）**；DFM Mimir 1B 新架构；dots3note 推测解码；DeepseekV4 多序列回滚修复（b10593） | MTP 已发布，其余在审 |
| Ollama | 无官方新模型；HF GGUF 导入问题为主（Muse-Glimmer-30B 截断、Qwen3 Hybrid parser） | 修复 PR 推进中 |
| LiteLLM | 无模型支持；Anthropic Workload Identity Federation、DeepSeek 价格 schema | 在审 |
| Unsloth | Studio 音频模型（Higgs/MOSS/MiniMax 5 个）；MLX speculative decoding | PR 在审 |

**判断**：llama.cpp 在本地/轻量模型支持速度上领先，单日完成 GLM-4.5-Air MTP 从合入到发布；vLLM 与 SGLang 的竞争焦点不在“首发新模型”，而在“新模型的高性能稳定运行”——DeepSeek V4、Kimi-K3、Qwen3.5 等型号的适配、回滚修复和量化路径。Ollama/Unsloth 的模型能力高度依赖 llama.cpp/MLX，自身价值在 API 层与产品层。

## 4. 性能优化前沿

优化火力集中在五个方向，各项目投入明显：

- **KV Cache 与显存管理**：vLLM MRV2 补齐 CUDA graph 内存预留（#53306），修复 priority scheduling 下 prefix cache 零命中（#53479）；SGLang 优化 Unified memory 驱逐策略（#33091），但 NVFP4 KV cache 与投机解码组合仍崩溃（#36010）；Ollama 尝试 prefill KV cache 跨 runner 持久化（#17278/#17953），解决 keep-alive 过期后的重复 prefill 成本。
- **权重加载与冷启动**：SGLang Weight Cache Daemon 将 Qwen3-235B FP8 加载时间从 306–327 秒降至 <1 秒（#33522）；vLLM Elastic EP 移除非必要 warmup collective（#53483），减少动态组初始化延迟。
- **推测解码**：llama.cpp 在 GLM-4.5-Air、dots3note 上新增/验证 MTP 路径；SGLang 修复 Qwen3.5 MTP 12% 吞吐回退（#35719），并为 ROCm EAGLE 跳过 full-vocab softmax（#35872）；vLLM 则在处理 MTP/DFlash 的 illegal memory access 与量化 drafter 损坏（#40756/#51581），稳定性仍是最大瓶颈。
- **量化与算子融合**：llama.cpp 新增 AVX-512 Q5_K/Q6_K 点积、Vulkan MoE 密度门控、CUDA MoE 融合扩展到 specdec 2–8 token；vLLM 将 Kimi-K3 KDA mixer 拆为 piecewise CUDA graph（#53487）；SGLang 让 Diffusion 模型复用 SRT 的 MXFP8/AutoRound 契约（#36063）。
- **可观测性与配置治理**：vLLM 延迟直方图增加 `operation` label（#52249）；SGLang 细化启动阶段归因（#33765）；vLLM 修复 YAML 下划线布尔 key 被静默忽略（#53478）——这些是面向 SLA/成本治理的“软性能”投资。

## 5. 分层定位差异

| 层级 | 项目 | 核心定位 |
|---|---|---|
| 内核/算子层 | llama.cpp、vLLM/SGLang 内部算子 | 自研内核（ggml/CUDA/HIP），多硬件适配 |
| 推理引擎层 | vLLM、SGLang、llama.cpp server | 连续批处理、PD 分离、CUDA graph、弹性 EP |
| 本地运行时/产品层 | Ollama、Unsloth Studio | 模型管理、OpenAI 兼容 API、桌面/个人部署 |
| 网关/控制面层 | LiteLLM | 统一 API 接入、认证、预算、成本跟踪、多后端路由 |
| 微调/数据层 | Unsloth | 继续预训练、LoRA/QLoRA、embedding 层保留 |

值得注意的是交叉关系：Ollama 和 Unsloth Studio 底层依赖 llama.cpp，因此上游 llama.cpp 的 MTP/GPU 回归会直接传导至下游产品；LiteLLM 不执行推理，但其价格表、凭证管理和预算核算质量会影响所有接入方。

## 6. 值得关注的趋势信号

1. **推测解码正从“可选加速”变成“默认能力”**，但**量化 + 长序列 + 专用 drafter 的组合是事故高发区**。vLLM MTP 崩溃、SGLang NVFP4+spec decode 崩溃、llama.cpp native MTP OOM 说明：启用前必须在目标 GPU/驱动/量化组合上做长序列 smoke test。
2. **长上下文仍是最大的生产稳定性威胁**。Kimi-K3 240K 后全实例重复 token、Qwen3.8 205K 工具循环 500、PD 传输失败只能靠超时感知——应用层必须配备 max_tokens、超时、重试和降级策略。
3. **“冷启动即服务”正在重构部署节奏**。SGLang Weight Cache Daemon 将 235B 权重加载降至 1s，Ollama 在做 prefill cache 跨 runner 持久化，vLLM 优化 Elastic EP 初始化——快速重启将改变滚动发布和金丝雀策略的假设。
4. **量化与硬件绑定产生的碎片化问题开始集中暴露**。SM120/GB10 的 FP8 fallback、gfx1151 ROCm 输出损坏、NVFP4 坐标检测错误等，意味着“同一模型在不同硬件上行为不同”将成为常态，需要更透明的硬件兼容性矩阵。
5. **可观测性和配置语义正在规范化**。`operation` label、启动阶段归因、YAML 布尔值语义修复，说明平台开始为大规模运行时的计费、监控和排障打基础。
6. **安全与权限成为新焦点**。LiteLLM 非管理员可覆盖 `config.yaml` 凭证（#38033）、Prompt Injection 检测阻塞事件循环、llama.cpp ReDoS 修复——LLM 基础设施的权限边界和输入过滤需要独立审计。

**对 Agent/应用开发者的直接建议**：不要默认开启 speculative decoding；所有长上下文 + 工具调用请求必须设置应用层超时与熔断；升级引擎前回归测试“原本不生效的 false 配置”和图像预处理结果；优先采用支持权重缓存的版本，以降低滚动发布成本；在网关层严格分离管理员凭证与运行时 API key 权限。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 动态日报 — 2026-08-24

## 今日速览

- 无新版本发布，但 **Kimi-K3 长上下文退化、DeepSeek V4 Blackwell 启动失败、MTP 投机解码崩溃** 等 P0 级问题均有修复 PR 在审。
- 基础设施侧，**MRV2 补齐 CUDA graph 内存预留**（#53306）、**Elastic EP 初始化流程优化**（#53483）持续往默认化推进。
- 新模型支持方面，**Granite Switch 原生支持** 请求（#53445）今日新增，**OmniASR**（#36864）与 **Orthrus**（#44792）PR 仍在活跃更新。

---

## 版本发布与破坏性变更

- 过去 24 小时无新 Release。
- 配置行为修复：[#53478](https://github.com/vllm-project/vllm/pull/53478) 修复 YAML 配置中以下划线命名的布尔键被静默忽略的问题（例如 `enable_foo: false` 之前不会生效，现在会被正确读取）。依赖配置文件管理 vLLM 参数的团队建议关注此合入后的行为变化。

---

## 新模型与硬件支持

- **[Feature] Granite Switch 原生支持**：[#53445](https://github.com/vllm-project/vllm/issues/53445)（新 issue）请求为 `GraniteSwitchForCausalLM` 添加原生支持，示例模型为 `ibm-granite/granite-switch`。
- **[Model] OmniASR（Meta 多语种 ASR，1600+ 语言）**：[#36864](https://github.com/vllm-project/vllm/pull/36864) PR 持续更新中，编码器-解码器结构，基于 Wav2Vec2 CNN + fairseq2。
- **[Model] Orthrus**：[#44792](https://github.com/vllm-project/vllm/pull/44792) PR 活跃，新增 `OrthrusConfig` / `OrthrusLM` / `OrthrusForCausalLM` 支持。
- **[Bugfix][DSv4] SM12x Triton fallback**：[#52357](https://github.com/vllm-project/vllm/pull/52357) 已合入，修复 DeepSeek V4 `o_proj` 在 SM120/SM121（GB10 等）上无条件调用 DeepGEMM `fp8_einsum` 导致不可用的问题。**目前 `main` 分支在该场景走 Triton fallback 路径。** 另见 [#52732](https://github.com/vllm-project/vllm/issues/52732)。

---

## 性能与优化

- **[MRV2] CUDA graph 内存预留**：[#53306](https://github.com/vllm-project/vllm/pull/53306) 在启动时 profile CUDA graph 显存占用并纳入 KV cache 自动容量计算（MRV1 已有行为），是 **MRV2 成为全模型默认** 的前置工作。最终会被 #50779 取代。
- **[Elastic EP] 无 warmup 初始化**：[#53483](https://github.com/vllm-project/vllm/pull/53483) 移除 Elastic EP 目标组强制 warmup collective，避免与主服务线程的 forward collective 重叠造成风险（ROCm 上已遇到问题）。
- **[Elastic EP] ROCm 下 warmup 收敛到 eager 阶段**：[#53010](https://github.com/vllm-project/vllm/pull/53010) 在 CUDA/HIP graph 执行下，将懒初始化 DP/EP 的 `ProcessGroupNCCL` warmup 推迟到同步 commit 阶段，避免与图捕获冲突。
- **[Kimi-K3] KDA mixer 拆分出 piecewise CUDA graph**：[#53487](https://github.com/vllm-project/vllm/pull/53487) 将 causal-conv + recurrent KDA + gated RMSNorm 从 eager Triton launch 中拆出，减少 graph 捕获期间的 eager 碎片。
- **[Zero JIT] 运行时零 JIT 编译**：[#49349](https://github.com/vllm-project/vllm/issues/49349) 跟踪 issue 更新，DeepSeek V4 的 de-JIT 化仍在进行中。
- **[Metrics] Prometheus 延迟直方图增加 `operation` label**：[#52249](https://github.com/vllm-project/vllm/pull/52249) 区分 `chat` / `text_completion` / `embeddings`，便于 OTel Collector 映射到 gen_ai 指标。
- **[shm_broadcast] 自适应 spin + 架构等待指令**：[#52917](https://github.com/vllm-project/vllm/pull/52917) 为 CPU 间广播实现 aarch64 WFET 与 x86 WAITPKG 的有界等待，降低空闲部署的 CPU 空转。
- **[DeepSeek V4] 性能优化总跟踪**：[#45861](https://github.com/vllm-project/vllm/issues/45861) 多个子任务（#45061、#45863、#44577 等）已完成。

---

## 稳定性与回归

按严重程度排列，已标注是否有修复 PR：

### 🔴 严重（P0）

- **Kimi-K3 长上下文后全实例退化到重复 token**：[#51039](https://github.com/vllm-project/vllm/issues/51039)。~240K token 请求处理后，**所有后续请求的每一步都生成同一个重复 token**，疑似 packed KDA prefill 的 NaN logits。已有两个修复 PR 在审：[#51483](https://github.com/vllm-project/vllm/pull/51483)（首块不应分类为 decode）、[#50021](https://github.com/vllm-project/vllm/pull/50021)（GDN/KDA spec decode 状态查找越界）。
- **MTP 投机解码在长序列下 illegal memory access**：[#40756](https://github.com/vllm-project/vllm/issues/40756)。FP8 Qwen3.6-27B + MTP（`num_spec_tokens=5`）复现，42 条评论，目前仍无关联 fix PR。
- **DeepSeek-V4-Flash + DSpark 在 SM120 上 FlashInfer sparse MLA decode kernel routing 失败**：[#50720](https://github.com/vllm-project/vllm/issues/50720)。2×RTX PRO 6000 Blackwell 环境。当前无 fix PR，DSpark 用户需注意。

### 🟠 高（P1）

- **DeepSeek V4 在 GB10（sm_121）上无法启动**：[#52732](https://github.com/vllm-project/vllm/issues/52732)。DeepGEMM 被假定可用但无 fallback。已由 [#52357](https://github.com/vllm-project/vllm/pull/52357) 合入修复 `o_proj`，相关启动路径建议用最新 main 验证。
- **Gemma 4 MoE 模型加载 LoRA 适配器报错**：[#41754](https://github.com/vllm-project/vllm/issues/41754)。Unsloth 训练的适配器在推理中被忽略。今天有 fix PR [#53482](https://github.com/vllm-project/vllm/pull/53482)（为 Gemma 4 MoE 实现 `get_expert_mapping`）。
- **v0.26.0 回归：生成结束出现字面 `<turn|>` token**：[#49955](https://github.com/vllm-project/vllm/issues/49955)。0.25.1 → 0.26.0 升级后 gemma-4-31b-it 出现，根因未定位，无 fix PR。
- **align-mode prefix caching 完全不命中**（`--scheduling-policy priority` + hybrid GDN 模型）：[#52897](https://github.com/vllm-project/vllm/issues/52897)。0/996k 查询命中。已有 fix PR [#53479](https://github.com/vllm-project/vllm/pull/53479)（在每个边界物化 state，去掉单 block 回退）。

### 🟡 中（P2）

- **PD Multi Tier 的 KV 在 60s 后被静默丢弃**：[#53128](https://github.com/vllm-project/vllm/issues/53128)。`TieringOffloadingSpec`（CPU primary + p2p secondary）下，排队消费者被迫重算。无 fix PR。
- **ROCm spec decode：DFlash2 在 ROCM_ATTN 下批量时接受长度塌缩**：[#53323](https://github.com/vllm-project/vllm/issues/53323)。切到 `TRITON_ATTN` 后吞吐翻倍且稳定。无 fix PR。
- **量化 drafter 被 DFlash fused-KV 投影静默破坏**：[#51581](https://github.com/vllm-project/vllm/issues/51581)。`F.linear` 在 sliced qkv_proj 上调用，绕过量化层。无 fix PR。
- **spec decode 下半数 decode batch size 回退 eager**：[#53407](https://github.com/vllm-project/vllm/pull/53407)（fix PR）将 uniform decode 分派到 padded FULL cudagraph，避免每次 decode 都走 eager attention。
- **vLLM 0.13.0 在 H20 上权重加载 OOM、DeepSeek-V3.2 性能、RTX PRO 6000×8 支持失败** 等历史 issue 今日被关闭（stale，标为 CLOSED）——如仍在旧版本受影响，建议升级后重测。[#31273](https://github.com/vllm-project/vllm/issues/31273) / [#30832](https://github.com/vllm-project/vllm/issues/30832) / [#31936](https://github.com/vllm-project/vllm/issues/31936)

---

## 对应用开发者的意义

1. **Kimi-K3 / DeepSeek V4 生产用户**：长上下文退化（#51039）与 GB10 启动（#52732）是高危问题。若你在 8 月生产中使用这两个模型，建议关注 #51483 / #50021 / #52357 三个 PR 是否进入下一个 rc，并在升级前用长上下文压测回归。
2. **Gemma 4 + LoRA 用户**：若使用 Unsloth 训练的 adapter 且当前推理无效，可跟踪 #53482 的合入状态，或临时改用 bitsandbytes 权重合并方案绕过。
3. **指标与监控**：Prometheus 延迟直方图即将新增 `operation` label（#52249），现有 dashboard 按 metric 名聚合可能出现多序列，需提前适配。
4. **配置管理**：#53478 修复了 YAML 下划线布尔值被忽略的问题。**升级后原本“不生效”的 `false` 配置将真正生效**，请检查现有配置文件中有无依赖该 bug 的“反向配置”。
5. **投机解码稳定性**：MTP/DFlash 相关的崩溃（#40756）和量化 drafter 损坏（#51581）意味着**在使用量化草稿模型或 MTP 时，请先在目标 GPU/驱动组合上做长序列 smoke test**，不要默认开启 speculative decoding。
6. **Elastic EP 用户**：#53483 移除 warmup collective 后，动态组初始化延迟可能变化（预期更优），但若依赖 NCCL 通信组即时可用性，建议在测试环境验证后再上生产。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

## 1. 今日速览

过去 24 小时无新版本发布，但工程动态密集。最值得关注的是 **Weight Cache Daemon 阶段 1 落地**（[#33522](https://github.com/sgl-project/sglang/issues/33522)）：Qwen3-235B FP8 权重加载从 306–327 秒降至 <1 秒，直接改变大规模推理引擎的恢复与发布节奏。社区健康度方面，CI 追踪显示当前 **3 broken / 11 flaky / 670 近期修复**（[#17050](https://github.com/sgl-project/sglang/issues/17050)），同时 [#20865](https://github.com/sgl-project/sglang/issues/20865) 正推动核心模块单元测试补强。稳定性风险集中在三处：**NVFP4 KV 缓存与投机解码的组合**、**AMD DSA 图回放产生 NaN logits**、**PD 传输失败通知在 NIXL 后端缺失**。

## 2. 版本发布与破坏性变更

过去 24 小时无正式 Release。行为与配置变更：

- **新增环境变量 `SGLANG_DISABLE_MULTIMEM_AG`**（[#36110](https://github.com/sgl-project/sglang/pull/36110)）：强制走 NCCL all-gather 路径，规避 GB300 NVL72 多引擎并发初始化时 multimem 对称内存同步 600s 超时。使用 multimem 的部署可关注此开关。
- **`cuda_vmm_utils.py` 移入 `srt/utils/`**（[#36053](https://github.com/sgl-project/sglang/pull/36053)）：内部代码整理，若自定义脚本直接引用 `sglang.srt.cuda_vmm_utils`，需更新 import 路径。

## 3. 新模型与硬件支持

- **Qwen3-Next native MTP 原型**（[#36112](https://github.com/sgl-project/sglang/pull/36112)）：将 MTP 块保留在目标模型内、权重随 checkpoint 加载，复用 EAGLE v2 编排，当前为早期社区讨论版本。
- **Humming 后端支持原生 W4AFP8 checkpoint**（[#32033](https://github.com/sgl-project/sglang/pull/32033)）：免去 `--json-model-override-args` 手动映射，dense 层保留 block-FP8 路径。
- **sgl_lora MoE 执行引擎**（[#34803](https://github.com/sgl-project/sglang/pull/34803)）：新增带 JSON config 解析的 MoE expert-weight LoRA 执行引擎，替代仅限 Blackwell 的 TRT-LLM 实验路径，扩大 MoE LoRA 硬件覆盖面。
- **Diffusion 量化复用 SRT 契约**（[#36063](https://github.com/sgl-project/sglang/pull/36063)、[#36068](https://github.com/sgl-project/sglang/pull/36068)）：扩散模型复用 SRT 的量化解析/校验/MXFP8 内核与 AutoRound 流程，一个适配器覆盖 NVIDIA/ROCm/Ascend。
- **LTX-2.5 decoder 并行 tiling**（[#36026](https://github.com/sgl-project/sglang/pull/36026)）。
- **特性请求：DSA index-topk 跨层复用扩展到 DeepSeek-V4**（[#36083](https://github.com/sgl-project/sglang/issues/36083)）。

## 4. 性能与优化

- **Weight Cache Daemon 阶段 1 落地**（[#33522](https://github.com/sgl-project/sglang/issues/33522)、[#27139](https://github.com/sgl-project/sglang/pull/27139)）：per-rank 守护进程在 CUDA IPC 上提供 post-quantized 权重，**Qwen3-235B FP8 权重加载从 306–327 秒降至 <1 秒**，对冷启动、滚动发布和故障恢复是数量级改进。
- **修复 Qwen3.5 MTP 约 12% 吞吐回退**（[#35719](https://github.com/sgl-project/sglang/pull/35719)）：定位到 #33889 之后 MTP draft 模型丢失 fused shared-expert 权重，PR 修复后恢复吞吐。
- **ROCm EAGLE 跳过 full-vocab softmax**（[#35872](https://github.com/sgl-project/sglang/pull/35872)）：`--speculative-eagle-topk 1` 下树退化为单链，`topk_p` 不再被消费，全词表 softmax 可安全跳过，降低 draft 开销。
- **弹性 EP 增加 scale-down 路径**（[#33111](https://github.com/sgl-project/sglang/pull/33111)）：基于 Mooncake 在运行时退役存活 rank，补齐上游只支持 scale-up 和故障恢复的能力。
- **AMD CI 镜像缓存**（[#34487](https://github.com/sgl-project/sglang/pull/34487)）：在 mi30x runner 上缓存 CI 镜像，**每晚节省约 49 GPU-machine-hours** 的容器准备时间。
- **Unified memory 驱逐策略优化**（[#33091](https://github.com/sgl-project/sglang/pull/33091)）：共享分配容量充足时停止 eviction，减少不必要的 cached-token 驱逐。
- **启动阶段归因增强**（[#33765](https://github.com/sgl-project/sglang/pull/33765)）：将 Qwen3-30B-A3B-FP8 上最大的两个启动阶段（此前显示为 `scheduler_e2e` 内 slack）纳入 `startup_time` 报告。
- **Diffusion 性能**：warmup-calibrated 自动驻留提升（[#35335](https://github.com/sgl-project/sglang/pull/35335)）；LingBot Video RMSNorm 在 `quality=high` 下切换到 Triton 内核（[#35969](https://github.com/sgl-project/sglang/pull/35969)）。

## 5. 稳定性与回归

以下为过去 24 小时有更新、且值得关注的稳定性问题，按严重程度排列。

**高严重度**

- **NVFP4 KV 缓存 + 投机解码崩溃**（[#36010](https://github.com/sgl-project/sglang/issues/36010)，无 fix PR）：target-verify 在 FlashInfer dequant workspace 报 `TypeError: 'NoneType' object is not subscriptable`；SM120（RTX 5090）原生 MTP 可复现。
- **AMD DSA 图回放产生全 NaN logits**（[#36071](https://github.com/sgl-project/sglang/issues/36071)，无 fix PR）：GLM-5.2 + DP attention 下 dense（k-only）解码图回放导致所有 logit 为 NaN，sampler 输出 token ID 0。
- **EAGLE3 CUDA graph illegal memory access**（[#28569](https://github.com/sgl-project/sglang/issues/28569)，issue 已关闭/inactive）：gpt-oss-120b，运行 batch 从 32 缩小时确定性崩溃。
- **DeepSeek-V4 回归项均已关闭**：轻微精度问题（[#28414](https://github.com/sgl-project/sglang/issues/28414)）和 8×H20-3e 请求 hang（[#26783](https://github.com/sgl-project/sglang/issues/26783)），仍需使用 V4 的部署建议保持关注。

**中严重度**

- **PD 传输失败通知不一致**（[#36033](https://github.com/sgl-project/sglang/issues/36033)，无 fix PR）：Mooncake/mori 会 push 失败状态，**NIXL 完全不通知**，decode 侧只能等自身超时，TTFT 故障恢复被显著拉长。
- **Qwen-VL 字面 vision marker 触发 HTTP 500**（[#35582](https://github.com/sgl-project/sglang/issues/35582)，无 fix PR）：文本中出现 `<|vision_start|><|image_pad|><|vision_end|>` 会被当作额外图像。
- **Qwen 3.8 27b NVFP4 图像坐标检测错误**（[#35949](https://github.com/sgl-project/sglang/issues/35949)，无 fix PR）。
- **DSV4F0731 + DSPARK 错误**（[#36081](https://github.com/sgl-project/sglang/issues/36081)，无 fix PR）。
- **DSA metadata row count 修复**（[#34455](https://github.com/sgl-project/sglang/pull/34455)，有 fix PR）：修复 DP-padded 空闲投机批次的 DSA metadata 行数，解决 AMD MI355X 2N 1P1D Disagg nightly 持续失败。
- **Stale staging watermark 订阅者**（[#34737](https://github.com/sgl-project/sglang/issues/34737)，无 fix PR）：prefill 失败后，异构 TP 下残留订阅者导致状态不一致。
- **ROCm AITER 版本 pin 问题**（[#35591](https://github.com/sgl-project/sglang/issues/35591)，无 fix PR）：镜像中 AITER 版本低于 FlyDSL MXFP4 MoE 内核所需，gfx950 上 tuned AITER_CONFIG_FMOE 表不可用。

**低严重度 / 环境**

- **`--config` 仍需 `--model-path`**（[#36105](https://github.com/sgl-project/sglang/issues/36105)，新报告）。
- **链接器找不到 `-lcuda`**（[#36058](https://github.com/sgl-project/sglang/issues/36058)，构建环境问题）。
- **ReDoS 漏洞修复 PR**（[#18397](https://github.com/sgl-project/sglang/pull/18397)）：PythonicDetector 的正则替换为 O(n) 括号匹配，并增加输入长度上限。
- **CUDA Coredump Tracker 持续自动收集**（[#26340](https://github.com/sgl-project/sglang/issues/26340)）：241 条评论，PR CI 中 CUDA 崩溃事件被逐条自动记录，CUDA 侧稳定性仍是高频热点。

## 6. 对应用开发者的意义

- **引擎重启/恢复速度量级提升**：Weight Cache Daemon 让 Qwen3-235B 级别权重加载从 5 分钟级降至 1 秒内。构建在其上的 Agent 服务可以把引擎重启视为廉价操作，简化滚动发布、金丝雀部署与故障恢复流程。
- **弹性缩容可用性**：scale-down PR 落地后，在线服务可在运行时退役冗余 EP rank，无需重建整个 PD/EP 拓扑，适合按流量峰谷做成本调优。
- **已知组合禁用提醒**：`--kv-cache-dtype nvfp4` 与投机解码（NEXTN/MTP/EAGLE）当前不可共存；GB300 NVL72 多引擎并发初始化遇超时，可设 `SGLANG_DISABLE_MULTIMEM_AG=1` 强制 NCCL 路径。
- **多模态应用注意**：Qwen-VL 请求文本中带字面 vision marker 会返回 500，应用层需要转义或过滤；同时留意 Qwen NVFP4 坐标检测错误。
- **PD 部署选型**：若使用 NIXL 做 P→D 传输，prefill 失败只有 decode 侧超时才能感知。建议应用层设置更短的等待超时并配合重试，或选择 Mooncake/mori 后端。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 动态日报 2026-08-24

## 今日速览

GLM-4.5-Air 的 MTP 推测解码支持正式合入（b10603）；mtmd 视频输入 MOOV-at-end 问题已有修复 PR（#27596）。另一方面，HIP/ROCm 在 gfx1151 上被报告存在严重输出损坏问题（#27579），且 b10587 Windows 构建无法启动（#27576），相关用户需注意规避。

## 版本发布与破坏性变更

- **b10603**：GLM-4.5-Air MTP 推理支持落地（[#26534](https://github.com/ggml-org/llama.cpp/pull/26534)），转换器支持 `--no-mtp`/`--mtp`/combined GGUF 三种布局。请注意 MTP 相关显存需求和兼容性问题。
- **b10598**：mtmd 图像缩放改用 pillow-accurate 算法，修正所有模型的 `resize_algo`（[#27594](https://github.com/ggml-org/llama.cpp/pull/27594)）。**潜在破坏性变更**：图像预处理输出可能变化，依赖像素级行为的应用需要回归验证。
- **b10595**：server 新增 `LLAMA_SERVER_SLOTS_N_DIFF` 环境变量（[#27600](https://github.com/ggml-org/llama.cpp/pull/27600)），用于槽位管理调试。
- **b10593**：DeepseekV4 修复多序列场景下的回滚问题（[#26756](https://github.com/ggml-org/llama.cpp/pull/26756)）。
- **b10588**：修复 `common/json.h` 的 clang LTO 编译问题（[#27575](https://github.com/ggml-org/llama.cpp/pull/27575)）。

## 新模型与硬件支持

- **GLM-4.5-Air MTP**（已发布 b10603）：MTP 已在 GLM-4.5-Air 和完整 GLM-4.5 上验证，无回归，支持 combined/trunk-only/MTP-only 加载。
- **DFM Mimir 1B**（PR [#27625](https://github.com/ggml-org/llama.cpp/pull/27625)）：新增 `HrmTextForCausalLM` 架构，双 transformer 栈交替处理同一 token 流。
- **dots3note 推测解码**（PR [#27618](https://github.com/ggml-org/llama.cpp/pull/27618)）：为 dots3note 架构添加 draft-mtp 支持，Strix Halo 上实测 10→14-16 t/s。
- **CUDA POOL_1D**（已发布 b10589）：为 1D 池化算子新增 CUDA 后端实现（[#27573](https://github.com/ggml-org/llama.cpp/pull/27573)）。
- **OpenCL 后端增强**（PR [#27630](https://github.com/ggml-org/llama.cpp/pull/27630)、[#27632](https://github.com/ggml-org/llama.cpp/pull/27632)）：修复 Adreno 上图像内核越界读写、OpenCL 3.0 设备查询错误门控等多处鲁棒性问题。

## 性能与优化

- **mtmd 图像处理**：pillow-accurate resize + 速度优化（b10598，[#27594](https://github.com/ggml-org/llama.cpp/pull/27594)）。
- **初始化优化**：跳过 `device_info` 循环，避免 CUDA 等后端在不需要打印设备信息时创建 GPU 上下文（b10594，[#26692](https://github.com/ggml-org/llama.cpp/pull/26692)）。
- **AVX-512 Q5_K/Q6_K 点积**（PR [#27590](https://github.com/ggml-org/llama.cpp/pull/27590)）：每迭代处理两个 256 元素 K-quant 块，充分利用 512-bit 向量宽度。
- **Vulkan MoE 路径密度门控**（PR [#27332](https://github.com/ggml-org/llama.cpp/pull/27332)）：用密度门控取代固定 8-token 阈值，AMD RADV 上 B=9 +36%、B=16 +27%、B=64 +21%。
- **CUDA MoE 融合扩展**（PR [#27621](https://github.com/ggml-org/llama.cpp/pull/27621)）：将 gate projection、per-expert NVFP4 scale、GLU 等融合从单 token 扩展到 specdec 2-8 token。
- **SYCL 算子融合**（PR [#27610](https://github.com/ggml-org/llama.cpp/pull/27610)）：融合 RMS_NORM+MUL+ADD 与 ADD+ADD 残差链，由 `GGML_SYCL_ENABLE_FUSION` 门控（默认开启）。

## 稳定性与回归

按严重程度排序：

1. **Windows b10587 无法启动**（[#27576](https://github.com/ggml-org/llama.cpp/issues/27576)）：llama-server.exe 启动即失败，无修复 PR。**建议使用 b10588 或等待修复**。
2. **HIP/ROCm 在 gfx1151 上输出损坏**（[#27579](https://github.com/ggml-org/llama.cpp/issues/27579)）：同一权重、同一构建、byte-identical 参数下 Vulkan 完全正常，ROCm 7.2.4 上多个架构受影响。无修复 PR，可先用 Vulkan 绕过。
3. **CUDA kernel stall 被看门狗杀死**（[#27102](https://github.com/ggml-org/llama.cpp/issues/27102)）：RTX Pro 6000 Blackwell 上执行中断，26 条评论仍未定位。
4. **Qwen3.8-27B-NVFP4 decode 挂起**（[#27329](https://github.com/ggml-org/llama.cpp/issues/27329)）：Blackwell sm_100 上 CPU 空转、GPU 无任务。
5. **native MTP 显存 OOM**（[#27282](https://github.com/ggml-org/llama.cpp/issues/27282)）：MTP 独占 CUDA compute arena 导致 OOM，改用 shared gallocr 可解决。
6. **MTP 草稿接受率仅 1/633**（[#27151](https://github.com/ggml-org/llama.cpp/issues/27151)）：FreeBSD 环境下异常，尚无法解释。
7. **mtmd 视频 MOOV-at-end 输入静默失败**（[#24394](https://github.com/ggml-org/llama.cpp/issues/24394)）：**已有修复 PR [#27596](https://github.com/ggml-org/llama.cpp/pull/27596)**，同时处理了 SIGPIPE。
8. **mtmd 图像请求 HTTP 500**（[#27408](https://github.com/ggml-org/llama.cpp/issues/27408)）：draft KV cache 位置空洞导致 `llama_decode` 失败，尚无修复。
9. **DeepseekV4 多序列回滚**（[#26756](https://github.com/ggml-org/llama.cpp/pull/26756)）：已修复，随 b10593 发布。

## 对应用开发者的意义

- **GLM-4.5-Air 用户**：现在可直接体验 MTP 推测解码，但需留意 native MTP 的显存占用问题（[#27282](https://github.com/ggml-org/llama.cpp/issues/27282)），生产环境建议在 shared gallocr 下验证。
- **HIP/ROCm gfx1151（Strix Halo）用户**：遇到输出损坏时，切换 Vulkan 后端是当前最可靠的 workaround（[#27579](https://github.com/ggml-org/llama.cpp/issues/27579)）。
- **Windows 用户**：b10587 无法启动，务必升级到 b10588 或更高版本（[#27576](https://github.com/ggml-org/llama.cpp/issues/27576)）。
- **mtmd 视频/图片管线**：MOOV-at-end 的 MP4 已提交修复（[#27596](https://github.com/ggml-org/llama.cpp/pull/27596)）；合并前建议将 MP4 转为 faststart（MOOV 前置）规避。注意 b10598 的 resize 算法变更可能影响图像预处理结果。
- **Agent/工具调用场景**：PR [#27626](https://github.com/ggml-org/llama.cpp/pull/27626) 修复了 `--prefill-assistant` + 尾部 assistant tool_calls 组合时工具调用被丢弃的上下文损坏问题，值得关注。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 动态日报 — 2026-08-24

> 数据来源：github.com/ollama/ollama（Issue/PR 更新窗口：过去 24 小时）
> 注：昨日无新 Release，Ollama 当前最新版本仍为 0.32.x 线（0.32.15），下文动态均基于 Issue/PR 更新。


## 今日速览

过去 24 小时社区提交了 19 条 Issue 更新与 18 条 PR 更新，无新版本发布。动态集中在三方面：**Qwen3 系模型的 API 层问题（系统消息位置、工具调用流式错误）成为开发者热点**、**多个性能优化 PR 进入活跃期（prefill KV cache 跨 runner 持久化、CUDA runtime payload 去重）**、以及**一系列针对 0.32.11+ 回归、GGUF 导入、AMD Strix Halo 硬件的稳定性修复正在推进**。此外，两条 Community Integrations 的 README PR 显示生态继续扩展。


## 版本发布与破坏性变更

无新版本发布。

但值得注意：PR #16546（`launch: make --config truly config-only and refresh MiniMax M3 cloud defaults`）今日关闭，涉及 `ollama launch --config` 的 CLI 行为变更与默认模型切换——它可能影响把 `ollama launch` 嵌入脚本或 CI 的工具链，升级后建议回归验证。该项未合入主分支，影响有限。

- 链接：https://github.com/ollama/ollama/pull/16546

另有一项值得关注的 API 层行为：`POST /api/chat` 不设 `num_ctx` 时，超长 prompt 的行为在同一服务器上因模型而异（#17889，已关闭）。部分模型返回 400 报 context 4096，部分返回 200 但 `prompt_eval_count` 2050。虽然已关闭，但该差异行为在 0.32.9 上被观察到，值得为下游客户端补充防御性逻辑。

- 链接：https://github.com/ollama/ollama/issues/17889


## 新模型与硬件支持

**新模型支持：** 无官方新模型发布。社区侧大量活动围绕 HuggingFace GGUF 导入展开，但多数体现为兼容性缺陷：

- **Muse-Glimmer-30B GGUF 导入时自动 `stop` 参数推导错误**，导致输出被截断至 ~3 个 token（#17939，OPEN）。影响所有 `hf.co/*/Muse-Glimmer-30B*-GGUF` 拉取。
  - 链接：https://github.com/ollama/ollama/issues/17939
- **RuadaptQwen3-8B-Hybrid GGUF 导入后 `PARSER qwen3` 不拆分 thinking 内容**——整个输出（含 `<think>` 块）落入 `message.content`，而非 `message.thinking`（#17937，CLOSED）。对应修复 PR #17945 今日提交（Qwen3 parser 显式 thinking 支持，默认禁用）。
  - Issue: https://github.com/ollama/ollama/issues/17937
  - PR: https://github.com/ollama/ollama/pull/17945
- **分片 GGUF 导入先拷贝后校验**：`ollama create` 在 shard 文件名不合法时会先把分片复制进 blob 存储，然后才报错，浪费磁盘且难以清理（#17946，OPEN）。对应修复 PR #17949 今日提交（CLI 上传前校验本地 split 文件名与元数据）。
  - Issue: https://github.com/ollama/ollama/issues/17946
  - PR: https://github.com/ollama/ollama/pull/17949

**硬件：** 无新增后端/架构正式支持，但 AMD Strix Halo（gfx1151）成为活跃话题：

- **#17870**（OPEN）：Vulkan 后端下 long-prompt prefill 触发 amdgpu compute-ring watchdong timeout → `ErrorDeviceLost`，`num_batch=128` 可绕过。
  - 链接：https://github.com/ollama/ollama/issues/17870
- **#17958**（OPEN）：gfx1151 + ROCm 下，常驻 ≥2 个模型会把 GPU 钉在最高时钟（~25W 空载功耗），恰 1 个模型则正常。属于调度层的电源管理缺陷。
  - 链接：https://github.com/ollama/ollama/issues/17958


## 性能与优化

今日性能相关动态集中在 PR 侧，多为进行中的工作，尚未合入主分支：

**1. Prefill KV cache 跨 runner 持久化（两条实线推进）**

- **PR #17953**（今日新提交）：在 runner 退出/模型切换后可恢复 prefix cache，避免 keep-alive 过期后重新支付完整 prefill 成本。基于 llama-server slot save/restore，MLX 侧持久化 prefix-cache frontier。
  - 链接：https://github.com/ollama/ollama/pull/17953
- **PR #17278**（今日更新）：同类能力，`OLLAMA_PREFILL_CACHE` opt-in，8 GiB LRU cap，fail-open。Closes #17247。
  - 链接：https://github.com/ollama/ollama/pull/17278

**2. MLX CUDA runtime payload 去重（#17956，今日提交）**

- 将 Windows/Linux MLX CUDA 构建的共享 CUDA runtime 库提取到公共 `cuda_v13` payload，消除重复，减小安装体积。同时修复 MLX 运行时路径发现的 in-process/subprocess 加载顺序。
  - 链接：https://github.com/ollama/ollama/pull/17956

**3. /api/embed 并发上限（#17954 附带改动，今日提交）**

- PR #17954 在修复 runner 退出竞态的同时，为 `/api/embed` 的 fan-out 并发增加了上界，防止大批量请求打开数千线程/连接。
  - 链接：https://github.com/ollama/ollama/pull/17954

**4. MLX 依赖版本更新（#17955）**

- MLX 版本 bump，具体差异见 compare 链接。
  - 链接：https://github.com/ollama/ollama/pull/17955


## 稳定性与回归

按严重程度排序（🔴 = 高影响 / 🟡 = 中影响 / 🟢 = 低影响）：

### 🔴 高影响

**1. Qwen3.8 工具调用循环中报错 "no user query found" —— #17778（OPEN）**

- 模型在工具循环中持续调用工具时，API 层返回 500。205k 长上下文场景复现。17 条评论，8 个 👍，是目前社区关注度最高的问题。与 #17754 疑似同根（API 层对消息序列处理缺陷）。
  - 链接：https://github.com/ollama/ollama/issues/17778

**2. Qwen3.8:27b 报错 "system message must be at the beginning" —— #17754（CLOSED）**

- `ollama launch claude --model qwen3.8:27b` 场景下，Claude Code 工具调用因 API 层不正确地处理 SYSTEM 消息位置而失败。8 个 👍。虽标记 CLOSED，但问题本身与 #17778 的根因关联性值得追踪。
  - 链接：https://github.com/ollama/ollama/issues/17754

**3. 0.32.11–0.32.15 回归：长生成永不停止 —— #17910（OPEN）**

- 生成越过自然结束点后持续运行直到被杀。Mac Studio M1 Max（64GB）上复现，0.32.9 正常，0.32.11 中断。属于调度/停止条件回归，无 fix PR。
  - 链接：https://github.com/ollama/ollama/issues/17910

**4. HF 导入模型后 context deadline exceeded —— #17484（OPEN）**

- 大量从 HF 拉取的模型（如 DavidAU/Qwen3.6-27B 系列 GGUF）在 `ollama run` 时持续报 `Error: context deadline exceeded`。13 条评论，现象普遍，无明确修复。
  - 链接：https://github.com/ollama/ollama/issues/17484

**5. 低比特 KV 量化导致模型输出乱码 —— #17614（CLOSED）**

- q8_0 → q4_0 KV 量化切换后，模型输出变成 "AI AI AI..." 之类的重复无意义 token 流。12 条评论。对生产环境 KV cache 量化选型有参考价值。
  - 链接：https://github.com/ollama/ollama/issues/17614

### 🟡 中影响

**6. ornith-1.5:35b：同时指定 response format + tools 时初始化失败 —— #17957（OPEN）**

- 报错 `Failed to initialize samplers: failed to parse grammar`。同请求 qwen3.6:35b 正常。影响结构化输出 + 工具调用的组合场景。
  - 链接：https://github.com/ollama/ollama/issues/17957

**7. Gemma 4 E2B MTP：DRAFT 层内存测量失败 —— #17951（CLOSED）**

- 含 DRAFT 层的模型（Gemma 4 E2B + 官方 MTP drafter）加载正常，但 `/api/ps` 和 `ollama ps` 报告整个模型仅 315 MB（实际 4.4 GB）。
  - 链接：https://github.com/ollama/ollama/issues/17951

**8. Vulkan gfx1151：长 prefill 触发 GPU compute-ring 超时 —— #17870（OPEN）**

- 见上文硬件部分。`ErrorDeviceLost` 导致请求失败且下一次调用受影响。可用 `num_batch=128` 规避。
  - 链接：https://github.com/ollama/ollama/issues/17870

**9. Gemma 4：`think:false` 时重复 `<unused49>` token —— #17459（CLOSED）**

- `/api/chat` 传 `"think":false` 会触发重复未使用 token，同时破坏 VS Code 集成。5 条评论。
  - 链接：https://github.com/ollama/ollama/issues/17459

**10. 0.32.1 回归：/api/generate 报 "token repeat limit reached" 中止 —— #17270（CLOSED）**

- 0.20.7 → 0.32.1 升级后出现，同一请求参数在旧版正常。
  - 链接：https://github.com/ollama/ollama/issues/17270

### 🟢 低影响 / 边缘场景

- **#17937**（CLOSED）：Qwen3 parser 不拆 thinking（已有 PR #17945）
- **#17946**（OPEN）：分片 GGUF 导入先拷贝后校验（已有 PR #17949）
- **#17939**（OPEN）：Muse-Glimmer-30B 自动 stop 推导错误 → 输出截断（无 PR）
- **#17932**（CLOSED）：用户抱怨 docker.io 拉取慢（CloudFront），建议镜像推送 quay.io（社区诉求，非代码缺陷）
  - https://github.com/ollama/ollama/issues/17932
- **#17116**（CLOSED）：0.31.2 CUDA 错误报告，缺复现信息
- **#17958**（OPEN）：AMD Strix Halo ≥2 个常驻 runner 导致 GPU 无法降频，空载 ~25W（见上文硬件部分）

### 今日新增的修复 PR 进度

| PR | 修复目标 | 状态 | 关键点 |
|---|---|---|---|
| #17954 | runner 退出竞态 + embed 并发暴涨 | OPEN，今日提交 | 检测 llama-server 退出、拒绝已退出 runner、自动重排加载新 runner |
| #17945 | #17937 Qwen3 parser 不拆 thinking | OPEN，今日提交 | 默认关闭，需显式启用；作者环境缺 Go 未跑测试 |
| #17949 | #17946 分片 GGUF 先拷贝后校验 | OPEN，今日提交 | CLI 上传前复用既有逻辑校验 shard 文件名/元数据 |
| #17953 | prefill cache 跨 runner 持久化 | OPEN，今日提交 | 基于 slot save/restore，实验性 |


## 对应用开发者的意义

**1. Qwen3 系 + 工具调用的稳定性仍是最大风险点。**
#17778 与 #17754 均指向 API 层消息序列处理缺陷：SYSTEM 消息位置和工具循环中的 user query 识别异常。若你的 Agent 应用基于 Qwen3/Qwen3.8 走 `/api/chat` + tools，建议：绕过 `ollama launch` 直连 API、显式拼装 system + user 消息块，并在工具循环响应中保留 `user` 角色消息以规避 500。

**2. 0.32.11+ 存在长生成不停止回归（#17910）。**
如果你已升级到 0.32.11–0.32.15，Agent 的生成任务必须配备应用侧超时与 max_tokens 兜底。考虑固定在 0.32.9 直到官方修复。

**3. 结构化输出 + 工具调用组合在部分模型上不兼容（#17957）。**
`response_format` 与 `tools` 同时设置时 ornith-1.5:35b 直接失败。设计 API 抽象时不要假设所有模型都支持两者叠加，建议加入请求级 fallback 重试逻辑（先去 tools 或先去 format）。

**4. HF GGUF 导入行为因模型而异，存在两个陷阱：**
- **自动 stop 推导错误**（#17939）会导致输出被截断为几个 token，且无报错——对下游表现为"静默失败"，必须用真实 prompt 做导入后冒烟测试；
- **分片文件名不合法时 `ollama create` 会先占满磁盘再报错**（#17946），批量导入前建议预检 shard 文件命名规范。

**5. `/api/ps` 的内存报告对含 DRAFT 层的模型不可信（#17951）。**
基于该值做容量规划或自动扩缩容的运维侧工具需注意：带 MTP drafter 的模型实际占用远高于报告值。

**6. Community Integrations 名单继续扩张。**
今日有 3 条 README PR（Grux #17960、Locally Uncensored #17952、Ontheia #17947），生态集成持续丰富，可作为选型参考。

---

*本日报由 AI 分析师生成，数据截止 2026-08-24 00:00 UTC，覆盖过去 24 小时 GitHub 活动。*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

# LiteLLM 动态日报 — 2026-08-24

## 1. 今日速览

LiteLLM 今日发布 v1.99.0-rc.1 与 v1.98.0 两个新版本；安全方面，社区发现并通过 PR 修复了 `config.yaml` 内凭证可被非管理员覆盖的权限漏洞（#38033 / #38034）。此外，DeepSeek 时间分段定价、Anthropic Workload Identity Federation 支持等多项功能 PR 持续活跃。

## 2. 版本发布与破坏性变更

- **v1.99.0-rc.1**（预发布）：RC 版本，建议生产环境暂缓升级。所有 Docker 镜像均以 cosign 签名，可验证镜像完整性。
  - 发布链接：https://github.com/BerriAI/litellm/releases
- **v1.98.0**（稳定版）：常规发布，镜像签名同上。
  - 发布链接：https://github.com/BerriAI/litellm/releases

## 3. 新模型与硬件支持

- **DeepSeek V4 Pro / Flash 价格数据修正**：社区提交 Issue 指出当前 model_prices_and_context_window.json 中 DeepSeek V4 系列价格已过时，且与 #31606 的时间分段定价 schema 无关，属于独立数据错误。针对该问题的修复 PR #31725（支持 off-peak 定价）仍在开放中。
  - Issue: https://github.com/BerriAI/litellm/issues/37255
  - PR: https://github.com/BerriAI/litellm/pull/31725

## 4. 性能与优化

- **导入速度优化（历史遗留）**：Issue #7605 仍处于 closed 状态，但此前曾报告导入 LiteLLM 耗时约 1 秒。今日未看到新的合并或推进动态，需关注。
  - Issue: https://github.com/BerriAI/litellm/issues/7605

## 5. 稳定性与回归

按严重程度排列：

- **[高] 非管理员可覆盖 config.yaml 中定义的凭证**：有 `/credentials` 路由权限的 key 持有者，可通过 POST 创建同名 credential 覆盖管理员在 `config.yaml` 中定义的凭证。已由 PR #38034 修复，对重复名称返回 HTTP 409。
  - Issue: https://github.com/BerriAI/litellm/issues/38033
  - Fix PR: https://github.com/BerriAI/litellm/pull/38034

- **[高] bedrock_mantle Chat Completions 忽略 per-model 静态 AWS 凭证**：请求可能错误继承代理宿主机的 IAM 身份，而非按 model 配置的 `aws_access_key_id` / `aws_secret_access_key`。PR #38032 已提交修复，将部署凭证传入签名逻辑。
  - Issue: https://github.com/BerriAI/litellm/issues/38028
  - Fix PR: https://github.com/BerriAI/litellm/pull/38032

- **[中] 持续负载下误报 BudgetExceededError**：约 100-130 个请求后开始返回 429 budget_exceeded，自愈约 2 分钟，无 Redis 环境受影响。疑似预算的异步刷新或并发核算问题。
  - Issue: https://github.com/BerriAI/litellm/issues/36926

- **[中] v1.93.0 Redis 缓存报 `ssl_check_hostname` 参数错误**：`AbstractConnection.__init__()` 收到未预期的 `ssl_check_hostname`，导致 Redis 缓存与预算计数不可用，影响所有依赖 Redis 的部署。
  - Issue: https://github.com/BerriAI/litellm/issues/34614

- **[中] Prompt Injection 检测阻塞事件循环**：内置启发式检测在高压下阻塞 event loop，导致 Kubernetes Pod 重启。
  - Issue: https://github.com/BerriAI/litellm/issues/19499

- **[低] Azure GPT-4o 价格缺失**：`azure/us/` 与 `azure/eu/` 分区的 gpt-4o-2024-11-20 缺少 `cache_read_input_token_cost`，导致缓存读取按零计费。等待价格数据修复。
  - Issue: https://github.com/BerriAI/litellm/issues/37823

- **[低] SSO 角色值不一致**：文档中的 `internal_user_view_only` 与代码中的 `internal_user_viewer` 不一致，影响 SSO 配置。
  - Issue: https://github.com/BerriAI/litellm/issues/33690

## 6. 对应用开发者的意义

- **安全注意**：如果你们在 config.yaml 中管理共享凭证并同时开启了 `/credentials` 路由，建议立即关注 #38033——旧版本中任何持有该路由权限的 key 都可能覆盖你定义的凭证，等于是潜在的凭证劫持面。升级并合入 #38034 的版本后，重复命名将返回 409。在升级前，建议定期审计 `credential_list` 与运行时创建凭证的一致性。
- **AWS 账户体系用户**：使用了 bedrock_mantle 且依赖 per-deployment 静态 AWS key 的团队，在 #38028 修复合入之前，请避免在共享代理实例上运行多个不同 AWS 账号的模型，否则请求可能“借用”代理宿主机的 IAM 身份。
- **预算可靠性**：如果你们使用代理内置预算/限流并且在跑长时间批处理任务，注意 #36926 描述的“全部 429 持续约 2 分钟自愈”现象。可以考虑在客户端增加退避/重试，避免在误报窗口内被彻底阻断。
- **DeepSeek 用户**：当前价格数据已过期，即使 #37255 修复尚未合入，也请留意成本核算偏差，必要时自行在配置中覆盖价格。

---
*本日报由 GitHub 公开数据自动生成，仅做技术动态汇总，不构成部署建议。*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 动态日报 — 2026-08-24

## 今日速览
过去 24 小时无新版本发布，但内部迭代极为密集：main 分支 CI 因 #9492 引入的回归持续红了一天，已由 PR #9594 定位修复并合入；MLX 推理后端"回复空白"的高影响 bug（OpenAI 兼容客户端只能读到 `content`）已有对应修复 PR #9288 在审；Studio 收到约 32 个新 issue，集中在 IndexedDB 本地存储、AMD GPU 显存/加载行为异常、以及语音/媒体管线三类问题上。

## 版本发布与破坏性变更
- **无新 Release**。过去 24 小时没有发布新版本。
- 注意一个进行中的启动参数变更：PR #8521 提议根据 `llama-server` 是否支持 `--reasoning` 来自动切换 `enable_thinking` 的配置方式，并保留旧版 `--chat-template-kwargs` 兼容路径。这会改变 Studio 内部启动命令的生成逻辑，但不会破坏已有用户配置。  
  https://github.com/unslothai/unsloth/pull/8521

## 新模型与硬件支持
- **Studio 音频模型支持（进行中）**：PR #8794 为 Studio 添加 Higgs、MOSS、MiniMax 共 5 个音频/TTS/音乐模型的本地推理支持（`higgs-tts-2-3b-base`、`MOSS-TTS-Local-Transformer-v1.5`、`MOSS-TTS-Nano-100M`、`higgs-audio-v3-tts-4b-transformers`、`MiniMax-Music3`）。尚未合并。  
  https://github.com/unslothai/unsloth/pull/8794
- **AMD Docker 镜像（需求确认中）**：#9581 请求提供开箱即用的 AMD ROCm Docker 镜像与 compose 部署方式，目前尚无官方回复。  
  https://github.com/unslothai/unsloth/issues/9581
- **多 GPU 训练（需求确认中）**：#9576 请求 Studio 支持自动将模型切分到多张显卡（用户手上有两张 RTX 3060）。尚未进入开发。  
  https://github.com/unslothai/unsloth/issues/9576

## 性能与优化
- **MLX 后端推测解码（进行中）**：PR #9589 为 Studio 的 MLX 推理后端增加 speculative decoding（含 `mtp` 多 token 预测路径），目标是利用 Apple silicon 内存带宽瓶颈换取吞吐提升。未合入。  
  https://github.com/unslothai/unsloth/pull/9589
- **下载速度与 ETA 估算修复（进行中）**：PR #9593 合并了两位贡献者的工作（#9388 估算器数学、#9397 未接入估算器的下载界面），修复 #9378 的下载进度卡顿/ETA 跳变问题。  
  https://github.com/unslothai/unsloth/pull/9593
- **提示处理进度显示（已合入）**：PR #9597 为 GGUF 模型显示 prompt processing 进度，替代目前大输入下空白的 "Generating" 状态。  
  https://github.com/unslothai/unsloth/pull/9597
- **Qwen3.8 采样默认值按推理模式区分（进行中）**：PR #9595 为 Qwen3 系列模型在 thinking/non-thinking 模式下分别设置采样默认值，并保留"手动 pin > 客户端显式传值 > 模型推荐"的优先级。  
  https://github.com/unslothai/unsloth/pull/9595
- **加载模型面板增加显存估算（进行中）**：PR #9525 在 Load Model 面板增加 Estimated Memory Usage 行，展示权重/激活/上下文占用，帮助用户在加载前判断 context length 上限。  
  https://github.com/unslothai/unsloth/pull/9525
- **llama.cpp Docker 镜像版本过旧**：#9583 指出 `docker.io/unsloth/unsloth:latest` 内置的 llama.cpp 仍停留在 5 月 26 日版本（4 个月未更新），可能错过大量性能与 bug 修复。  
  https://github.com/unslothai/unsloth/issues/9583

## 稳定性与回归
按严重程度排列：

1. **Studio 服务死锁（已修复，closed）**：#9008 报告 `unsloth studio` 运行数分钟后所有线程阻塞在 `sqlite3.connect()/close()`，socket 不响应。该 issue 已在今日关闭。  
   https://github.com/unslothai/unsloth/issues/9008
2. **MLX 推理回复空白（修复中）**：PR #9288 修复 MLX 推理模型默认 chat completion 的 `content` 字段为空、全部内容落在 `reasoning_content` 的问题。这对所有 OpenAI 兼容客户端是破坏性的。修复 PR 仍在审查。  
   https://github.com/unslothai/unsloth/pull/9288
3. **聊天记录 IndexedDB 写入失败（未修复）**：#9518 报告 AppImage 桌面版每次发送消息都无法写入本地 IndexedDB，后端 `/v1/chat/completions` 正常，问题定位在前端存储层。已有复现路径，暂无 fix。  
   https://github.com/unslothai/unsloth/issues/9518
4. **模型 Hub 崩溃 WebKitWebProcess（未修复）**：#9480 在 Fedora 44/Wayland 上打开 Model Hub 即触发 SIGABRT，Skia COLRv1 字体断言。与已知的 #9393 不同源。  
   https://github.com/unslothai/unsloth/issues/9480
5. **main 分支 CI 回归（已修复）**：#9492 合并后 `Backend tests` 出现 26 个失败（slot reduction 定价逻辑错误），PR #9594 已将其修复并合入 main。  
   https://github.com/unslothai/unsloth/pull/9594
6. **测试污染共享状态（有修复 PR）**：#9585 与 #9586 记录测试套件写入共享目录/环境变量导致 CI 偶发红；PR #9587 已将 installer 测试的写入隔离到临时 venv 根，修复 AMD fastpath probe 的 flake。  
   https://github.com/unslothai/unsloth/issues/9585  
   https://github.com/unslothai/unsloth/issues/9586  
   https://github.com/unslothai/unsloth/pull/9587
7. **AMD GPU 加载行为异常（4 个相关 issue，未修复）**：jimster480 连续提交 4 个 AMD RDNA3（W7900/W7500）相关问题：#9551 VRAM 检测错误、#9549 无视 VRAM 限制加载到系统 RAM、#9550 自动丢弃 MTP 以换取上下文窗口但实际未生效、#9548 模型名错误显示为文件夹路径。集中在 v0.1.801-beta + ROCm 7.13 环境。  
   https://github.com/unslothai/unsloth/issues/9551  
   https://github.com/unslothai/unsloth/issues/9549  
   https://github.com/unslothai/unsloth/issues/9550  
   https://github.com/unslothai/unsloth/issues/9548
8. **Chat 设置无法保存（未修复）**：#9500 报告 `PUT /api/chat/settings` 返回 400，预设无法持久化。  
   https://github.com/unslothai/unsloth/issues/9500
9. **Linux 语音听写无音频（未修复）**：#9543 在 WebKitGTK 下 MediaRecorder 产生 0 字节，STT 无法工作。  
   https://github.com/unslothai/unsloth/issues/9543
10. **工具调用崩溃（已修复，closed）**：#9039 修复了自定义端点上每次工具调用报 `invalid tool call arguments` 的问题，issue 已关闭。  
    https://github.com/unslothai/unsloth/issues/9039
11. **Windows 用户名含特殊字符导致模型加载失败（未修复）**：#9588 报告用户在 Windows 用户名含特殊字符（如 `&`）时，llama 后端无法加载模型。  
    https://github.com/unslothai/unsloth/issues/9588
12. **embed_tokens/lm_head 被静默丢弃（修复中）**：PR #9331 修复继续预训练时 `target_modules` 中列出的 `embed_tokens` 和 `lm_head` 被正则过滤静默删除的问题（源于 #9326）。适配器将缺失嵌入层，导致后续推理错误。  
    https://github.com/unslothai/unsloth/pull/9331

## 对应用开发者的意义
- **MLX 用户务必跟踪 #9288**：当前 MLX 后端在默认采样参数下会把全部回复写入 `reasoning_content`，依赖 `choices[0].message.content` 的 OpenAI 兼容客户端会收到空回复。PR 合入前，请在客户端侧增加 fallback 读取 `reasoning_content`。
- **工具调用链路已恢复**：#9039 已关闭，自定义端点的 function calling 应恢复正常。此前错误会以 `invalid_request_error` 暴露在 API 层。
- **继续预训练存在数据完整性风险**：如果在 `target_modules` 中显式指定 `embed_tokens`/`lm_head`，当前版本会静默丢弃这些模块。PR #9331 若合入将修正，但在此之前请检查保存的 adapter 是否包含 embedding 层。
- **AMD 平台暂不建议跟进 v0.1.801-beta**：已有多条 VRAM 检测和加载行为异常的独立报告，建议等待修复版本或回退稳定版。
- **下载进度/ETA 指标的修复**（#9593）属于前端反馈层，不影响 API 语义，但对依赖进度条做用户体验优化的开发者是正向变化。
- **CI 共享状态修复**（#9587）对上游贡献者友好：此前测试互相污染会导致伪 flake，浪费 review 轮次。合入后外部 PR 的测试信号会更可靠。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*