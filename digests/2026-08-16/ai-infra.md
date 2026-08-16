# AI 基础设施日报 2026-08-16

> 生成时间: 2026-08-15 23:11 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

# AI 基础设施生态横向对比分析报告（2026-08-16）

## 1. 生态全景

当前 AI 基础设施正处于"

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM 动态日报 2026-08-16

> 数据来源：github.com/vllm-project/vllm（过去24小时共 60 条活跃 Issue、228 条更新 PR）

## 今日速览

DeepSeek-V4-Flash 在 ROCm/H20/H100 多平台集中暴露稀疏注意力与算子崩溃问题，目前已有两项针对性修复 PR（#51318、#52402）在途。Model Runner V2 与 Mamba/混合模型组合在 prefix caching、spec decode 场景下出现多项崩溃，已有 fallback 修复（#52460）。此外，CUDA 13.4 / Rubin（sm_107）预发布镜像管线正式启动，是面向下一代 NVIDIA 硬件的重要信号。

## 版本发布与破坏性变更

今日无正式版本发布。开发版 **v0.27.2rc1.dev119** 已在 CI 中出现，预计将包含多项 Mamba 与 gemma4 parser 修复。注意：[v0.26.0 → v0.27.0 升级后 DeepSeek-V4-Flash 出现 flash error](https://github.com/vllm-project/vllm/issues/51758)，升级前建议核对当前使用的模型与算子组合是否在回归范围内。

## 新模型与硬件支持

- **[PR #52379] 新增 CUDA 13.4rc1 预发布镜像管线**，为 Rubin（sm_107）铺设 CI/build 路径，包括 CUDA 13.4 PyPI 包 overlay、PyTorch/torchvision/torchaudio 配套 nightly 锁定等。  
  https://github.com/vllm-project/vllm/pull/52379

- **[PR #52472] GLM-5.2 TurboQuant 稀疏 MLA 后端**：扩展 #41803 的 TurboQuant MLA 工作，新增 packed 4-bit latent KV 存储、融合稀疏 decode/prefill、GLM-4 MoE MTP 管线，并包含 DCP/MTP/PP 正确性修复。  
  https://github.com/vllm-project/vllm/pull/52472

- **[PR #47779] SM120（RTX 50 系）FlashInfer 稀疏 MLA decode 启用 DCP**：使 decode context parallelism 覆盖 SM120 后端，按 DCP rank 过滤稀疏 top-k 索引并传递有效行数。  
  https://github.com/vllm-project/vllm/pull/47779

- **[PR #52441] Gemma 4 多模态视频帧计数保留在 CPU**：修复 CI 中 gemma-4-E2B-it 视频处理异常，属于 Gemma 4 多模态支持后续打磨。  
  https://github.com/vllm-project/vllm/pull/52441

## 性能与优化

- **[PR #52402] ROCm gfx942 DSv4 稀疏注意力 indexer 优化**：将 `fp8_mqa_logits_gfx942` 改为原生 FP8 MFMA 路径，并修正 LDS occupancy 阈值。改动限定于 gfx942 辅助函数，不影响 CUDA 及其他后端。  
  https://github.com/vllm-project/vllm/pull/52402

- **[Issue #49529] W4A8-INT8 路径引入 PTX 9.4 `ldmatrix.s8.s4` 硬件展开指令**：该指令可在 shared memory 矩阵加载过程中完成 packed INT4→INT8 符号扩展，省去一次额外转换 kernel。目前处于设计/讨论阶段。  
  https://github.com/vllm-project/vllm/issues/49529

- **[PR #52097] 为 async scheduling 增加 `suffix_gpu` drafter**：suffix decoding 在 agentic/高并发负载下接受率最佳，但此前是 CPU 侧实现，无法与 GPU 异步调度重叠。此 PR 将其接入异步调度白名单，目标是恢复 CPU/GPU overlap。  
  https://github.com/vllm-project/vllm/pull/52097

- **[PR #50045] KV offload 背压检测与修复**：当二级 tier（磁盘/远端/P2P）store 延迟升高时，offload 管理器停止继续级联写入，避免慢 tier 拖垮整体推理。  
  https://github.com/vllm-project/vllm/pull/50045

## 稳定性与回归

按严重程度排序：

1. **DeepSeek-V4-Flash 多平台稳定性危机**（本轮最集中问题群）：
   - **ROCm gfx942 静默 retrieval 损坏**：[#52109](https://github.com/vllm-project/vllm/issues/52109)，8× MI325X 上 prompt ≥4-5K tokens 即出现静默数据损坏，定位到 AITER sparse indexer，已确认与两个 open PR（#52058/#51252）无关。相关修复见 [#52402](https://github.com/vllm-project/vllm/pull/52402)。
   - **H20-3e TP8 约 161K context 时 FlashMLA sparse prefill 崩溃**：[#52339](https://github.com/vllm-project/vllm/issues/52339)，`phase1.cuh:614`，目前无直接 fix PR。
   - **H100 TP4 上 `--max-num-batched-tokens >= 24576` 触发 EngineCore 崩溃**：[#51743](https://github.com/vllm-project/vllm/issues/51743)，fused qnorm/rope/kv-insert 算子分配对 memory profiler 不可见。
   - **0.26.0→0.27.0 升级后报错**：[#51758](https://github.com/vllm-project/vllm/issues/51758)。
   - 两个修复 PR 值得关注：[#51318](https://github.com/vllm-project/vllm/pull/51318) 回退 adaptive C128A metadata packing（sparse decode 与 CUDA graph 重放布局冲突）；[#52402](https://github.com/vllm-project/vllm/pull/52402) 重写 gfx942 稀疏 indexer。

2. **EngineCore 死锁 / livelock（无崩溃但 100% CPU 或永久阻塞）**：
   - [#49210](https://github.com/vllm-project/vllm/issues/49210)：MTP speculative decoding + xgrammar 结构化输出触发 livelock，0.24.0 引入的回归，尚无 fix PR。
   - [#52247](https://github.com/vllm-project/vllm/issues/52247)：GPU kernel 永不终止时，`copy_event.synchronize()` 无超时地永久阻塞 EngineCore，属于基础设施级缺陷。

3. **MRv2 / Mamba 混合模型崩溃**：
   - [#52317](https://github.com/vllm-project/vllm/issues/52317)：MRv2 下 `--enable-prefix-caching` + `mamba_cache_mode 'all'` + DSpark spec decode 启动即崩，MambaHybridAttnMetadata 未传 `prev_last_scheduled_idx`。已有修复 PR [#52460](https://github.com/vllm-project/vllm/pull/52460)（fallback 到 'align' 模式）。
   - [#52476](https://github.com/vllm-project/vllm/pull/52476)：修复 Mamba causal-conv1d kernel 因 metadata 指针地址变化触发的对齐误判（fixes #52413，已关闭）。
   - [#52434](https://github.com/vllm-project/vllm/issues/52434)：`ParallelLMHead.output_size_per_partition` AttributeError，疑似 MRv2 新回归，暂无 fix。

4. **Gemma 4 parser 行为不一致（应用层功能回归）**：
   - [#50477](https://github.com/vllm-project/vllm/issues/50477)：0.26.0 上命名 `tool_choice` 被静默忽略，0.21.0 正常。
   - [#52410](https://github.com/vllm-project/vllm/issues/52410)：`enable_thinking` 默认值在 parser 与 chat template 中不一致，导致思考行为与预期不同。

5. **其他值得关注的回归**：
   - [#49237](https://github.com/vllm-project/vllm/issues/49237)：`POST /wake_up` 触发 `init_fp8_kv_scales` 中 `list.zero_` AttributeError，引擎被 wedged 但 health check 仍为 green。
   - [#51884](https://github.com/vllm-project/vllm/issues/51884)：FP8 block-scaled 权重在 sm120（RTX 5090）上 DeepGEMM 报 "Unknown SF transformation"。
   - [#52454](https://github.com/vllm-project/vllm/issues/52454)：Qwen3.8 Quark INT4 加载失败，已有修复 PR [#52474](https://github.com/vllm-project/vllm/pull/52474)（保留结构化 quantization config 列表，已关闭）。
   - [#52300](https://github.com/vllm-project/vllm/issues/52300)：pip 安装 vllm 0.21.0 后 `libcudart.so.13` 缺失，建议核对 CUDA 12.6 运行时兼容性。

## 对应用开发者的意义

- **DeepSeek-V4-Flash 生产部署暂不建议升级到 0.27.x**：ROCm、H20、H100 均有未闭合的稀疏注意力崩溃或静默损坏问题。若必须使用，建议固定 0.26.x 并跟踪 #51318、#52402 的合入状态。
- **结构化输出 + spec decode 存在高危组合**：MTP/xgrammar 组合可能引发 EngineCore 100% CPU livelock 且无崩溃日志。对稳定性要求高的 Agent 服务，建议暂时关闭 EAGLE/MTP（或 xgrammar）做 AB 对比。
- **Gemma 4 parser 尚未稳定**：`tool_choice` 静默忽略和 `enable_thinking` 默认值不一致，会影响 tool-calling 类任务。如需生产使用，建议等待修复落地后再切换。
- **MRv2 仍处于功能补齐期**：Mamba/prefix-caching/spec decode/DP 等组合场景下崩溃较多，当前不建议在混合模型（Mamba+Attention）上启用 MRv2。
- **注意到 0.27.2rc 准备中**：涉及 Mamba alignment、MRv2 fallback、EAGLE cache 等修复（含 #52419、#52460、#52474、#52476），是近期值得关注的版本。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang 动态日报 2026-08-16

## 今日速览

过去 24 小时 SGLang 无新 Release。CI 跟踪显示 main 分支仍存在 **3 个 broken、11 个 flaky** 测试，另有 669 个近期已修复（[#17050](https://github.com/sgl-project/sglang/issues/17050)）。社区在 8 月 15 日集中上报了多个与 **DSPARK 投机解码、DSA sparse-MLA 长上下文、HiCache、MiniMax-H3** 相关的严重正确性与稳定性问题，其中多数尚未有修复 PR；与此同时，活跃 PR 正在推进 **unified radix cache、KDA/Cake 原生内核、DSv4 TRT-LLM Attention、NVFP4 量化扩展**。

## 新模型与硬件支持

- **Diffusion：原生 Hunyuan3D Paint / Delight 模型支持**  
  PR [#34980](https://github.com/sgl-project/sglang/pull/34980) 将 Diffusers 拥有的 Hunyuan3D Paint/Delight 模块替换为 SGLang 原生实现，增加原生 SD 2.1 兼容 UNet、multiview Paint UNet 与 SD VAE 配置，并保持 checkpoint 兼容。

- **DeepSeek-V4 / DSv4：TRT-LLM Attention 集成（Blackwell SM100/103）**  
  PR [#30805](https://github.com/sgl-project/sglang/pull/30805) 为 SM100/103 集成 TRT-LLM DeepSeek-V4 Attention，标记为 high priority，目前仍 open。

- **KDA / Kimi-Linear：原生 Cake kernel 路由**  
  PR [#34946](https://github.com/sgl-project/sglang/pull/34946) 将 Kimi-Linear 路由到 FlashInfer 原生 Cake kernels；基础能力来自 PR [#34299](https://github.com/sgl-project/sglang/pull/34299)（zero-copy native prefill checkpoints + packed decode），依赖 FlashInfer 上游 PR。

- **NVFP4：compressed-tensors Marlin 路径支持 BF16 与 DSpark**  
  PR [#34966](https://github.com/sgl-project/sglang/pull/34966) 让 compressed-tensors NVFP4 checkpoint 在 SM80-SM90 上走 Marlin，并解决 BF16 模型 E4M3 block scale 问题，同时接入 DSpark。

- **AMD：K3 AITER prefill kernel 支持**  
  PR [#34837](https://github.com/sgl-project/sglang/pull/34837) 增加 `concat_and_cast_mha_k_pad_kernel` 以支持 12-head 配置，使 Kimi K3 在 AMD 上可使用 AITER prefill kernel。

- **AMD CI：新增 GPT-OSS ROCm 7.2 nightly 性能基准**  
  PR [#34645](https://github.com/sgl-project/sglang/pull/34645) 为 ROCm 7.2 + Triton 3.7 性能回退问题补充 GPT-OSS 吞吐覆盖。

## 性能与优化

- **ROCm HiCache MLA gather 优化：+32%**  
  PR [#30024](https://github.com/sgl-project/sglang/pull/30024) 将 MLA page-first KV gather 扩展到 128-bit streaming load/store，并让 `block_quota` 在运行时使用 `SGLANG_HICACHE_BLOCK_QUOTA`，对 ROCm HiCache L2-L1 load-back 性能提升明显。

- **GDN 投机验证路径消除 QKV 物化**  
  PR [#33778](https://github.com/sgl-project/sglang/pull/33778) 移除 GDN target verification 中冗余的 Q/K/V 拷贝算子，直接复用 `causal_conv1d_update` 输出的 packed QKV，减少 kernel launch 与显存流量。

- **DSv4 DSA：flashinfer fused top-k**  
  PR [#33237](https://github.com/sgl-project/sglang/pull/33237) 为 DeepSeek-V4 DSA 增加 `--dsa-topk-backend flashinfer`，使用 fused top-k 替代独立 kernel。

- **NPU：DSPARK folded path 数值修复 + 性能保持**  
  PR [#34944](https://github.com/sgl-project/sglang/pull/34944) 修复 DSpark 在 NPU 折叠路径上的数值与图回放一致性问题，同时保持 acceptance quality 并优于全禁用路径。

- **NPU：LTX-2/2.3 diffusion 推理优化**  
  PR [#34722](https://github.com/sgl-project/sglang/pull/34722) 针对 NPU 优化 LTX-2/2.3 性能与兼容性。

- **benchmark server 改为 spawn 而非 fork**  
  PR [#34712](https://github.com/sgl-project/sglang/pull/34712) 修复 benchmark server 在 fork 时继承父进程 accelerator 初始化导致的状态污染，提升基准测试可信度。

## 稳定性与回归

### 严重正确性 / 静默错误

- **DSA sparse-MLA 长 prefill 静默不计算 attention**  
  [#34947](https://github.com/sgl-project/sglang/issues/34947)、[#34941](https://github.com/sgl-project/sglang/issues/34941) 报告：SM100 上 DSA `prefill=trtllm` 路径对**单次超过 65535 token 的 extend** 会因 trtllm-gen `gridDim.z` 溢出而启动 0 个 attention kernel，输出静默错误，DP 路径之外仍未有防护。**无 fix PR**。

- **DSPARK 在 DeepSeek-V4-Flash 上静默破坏 identifiers**  
  [#34959](https://github.com/sgl-project/sglang/issues/34959) 指出 DSPARK 投机解码会静默改变标识符内容，导致“投机解码不安全”。**无 fix PR**。

- **compressed-tensors FP8 lm_head `weight_scale` 被丢弃**  
  [#34895](https://github.com/sgl-project/sglang/issues/34895) 导致 unsloth/Qwen3.8-27B-NVFP4 出现退化性重复输出。**无 fix PR**。

- **Tool-call parser 流式 chunk 边界丢数据**  
  [#31915](https://github.com/sgl-project/sglang/issues/31915) 发现 `function_call/` 多个 parser 在流式 chunk 边界丢失/损坏数据，根因包括 `parse_stream_chunk` 没有 end-of-stream `_buffer` flush。

- **Kimi-K3 tool-call parser 生产环境约 8 次/小时失败**  
  [#34604](https://github.com/sgl-project/sglang/issues/34604) 统计 24 小时约 190 次 parser failure（106 次 `TypeError` 等），影响 agentic coding 场景。**无 fix PR**。

- **Responses API：`function_call_output` 中 `input_image` 不转换**  
  [#34927](https://github.com/sgl-project/sglang/issues/34927) 导致 400 校验错误或静默丢图。**无 fix PR**。

- **Scheduler 崩溃：`token_ids_logprob` 混批触发 `AttributeError`**  
  [#34719](https://github.com/sgl-project/sglang/issues/34719) 影响 v0.5.14–v0.5.17，单个 scoring client 可打崩整个 server。**无 fix PR**。

### 崩溃 / 挂起

- **Kimi K3：DSPARK + DCP 时 decode 崩溃**  
  [#34920](https://github.com/sgl-project/sglang/issues/34920)：PD 分离 + `--dcp-size 8` + DSPARK 时，target-verify batch 触发 `cumsum(extend_prefix_lens=None)`，所有 TP rank 崩溃。**无 fix PR**。

- **DSPARK + EPLB：draft CUDA graph capture 崩溃**  
  [#34974](https://github.com/sgl-project/sglang/issues/34974)：`on_select_experts scatter_add_` 维度不匹配，`layer_idx=None`。**无 fix PR**。

- **HiCache：DeepSeek-V4 逻辑 KV anchor 触发 ZeroDivisionError**  
  [#34969](https://github.com/sgl-project/sglang/issues/34969)。**无 fix PR**。

- **HiCache：HugePages 未计入可用内存，导致误报 Not enough host memory**  
  [#34972](https://github.com/sgl-project/sglang/issues/34972)：`psutil.virtual_memory().available` 未考虑 reserved HugePages。**无 fix PR**。

- **by-stage profiler 停止后冻结 scheduler 约 25s**  
  [#34943](https://github.com/sgl-project/sglang/issues/34943)、[#34942](https://github.com/sgl-project/sglang/issues/34942)：speculative decoding 下 TARGET_VERIFY 被误判为 prefill，profiler 永不停止，最终在后续无关请求中同步导出 trace 造成长停顿。**无 fix PR**。

- **已关闭 / inactive：NCCL hang 与 MoE runner 损坏**  
  [#28011](https://github.com/sgl-project/sglang/issues/28011)（Spec V2 verify + DSA + HiCache 的 NCCL hang）与 [#26324](https://github.com/sgl-project/sglang/issues/26324)（flashinfer_trtllm MoE runner 损坏 MiniMax-M2.7-NVFP4 / 在 B200 上 assert）均已标记 inactive/closed，但历史回归仍需关注。

### 资源与部署风险

- **MiniMax-H3 resident serving 按 rank 复制完整 DiT 权重到 host RAM**  
  [#34902](https://github.com/sgl-project/sglang/issues/34902)：2 rank 114.3 GiB、4 rank 233.5 GiB，且低于实际需求时会静默 SIGKILL；目前只有 RTX 5090 recipe 记录了 host memory 需求。

- **MiniMax-H3 `quality="high"` 可错误叠加 Turbo-LoRA 权重**  
  [#34954](https://github.com/sgl-project/sglang/issues/34954)：审计 gate 没有 adapter 字段校验。已有修复 PR [#34978](https://github.com/sgl-project/sglang/pull/34978)（open）。

### 基础设置与质量治理

- **CI 跟踪**：[#17050](https://github.com/sgl-project/sglang/issues/17050) 自动更新显示 3 broken / 11 flaky / 669 recently fixed。
- **单测覆盖提升**：[#20865](https://github.com/sgl-project/sglang/issues/20865) 建议为 `managers/`、`mem_cache/`、`entrypoints/`、`sampling/`、`parser/`、`function_call/`、`utils/` 补充单元测试。
- **Unified Hybrid Radix Cache 重构**：[#20415](https://github.com/sgl-project/sglang/issues/20415) 是 road map 项，计划合并多个 radix cache 实现；[#34899](https://github.com/sgl-project/sglang/issues/34899) 要求为其增加 bit-exact 正确性覆盖。
- **PD 传输层重构 RFC**：[#33861](https://github.com/sgl-project/sglang/issues/33861) 提出统一协议层、按后端实现传输，以消除 mooncake/nixl/mori 的重复 bootstrap 与状态管理逻辑。
- **修复类 PR 进行中**：  
  - [#34975](https://github.com/sgl-project/sglang/pull/34975)：允许 unified cache 同一节点上多个并发 load-back pin，修复 `UnifiedTreeCore.commit_load_back` 断言崩溃。  
  - [#34870](https://github.com/sgl-project/sglang/pull/34870)：修复 hybrid SWA + EAGLE 下 bigram keys 的 eviction frontier 导致的 pool memory leak。  
  - [#34979](https://github.com/sgl-project/sglang/pull/34979)：DSPARK 支持 target-only trajectory scoring（closed）。  
  - [#34916](https://github.com/sgl-project/sglang/pull/34916)：将 WAR read-done fastpath 重命名为 shared-read-done（closed，语义修正）。

## 对应用开发者的意义

1. **Agent / tool-calling 应用目前处于高风险期**：Kimi-K3 parser、流式 chunk 边界、Responses API 图像参数均存在数据损坏或请求失败问题（[#34604](https://github.com/sgl-project/sglang/issues/34604)、[#31915](https://github.com/sgl-project/sglang/issues/31915)、[#34927](https://github.com/sgl-project/sglang/issues/34927)）。在修复合入并发布前，建议对 tool-call 输出做额外校验与重试。

2. **不要在 DeepSeek-V4-Flash / Kimi-K3 生产环境启用 DSPARK**：已出现静默标识符损坏（[#34959](https://github.com/sgl-project/sglang/issues/34959)）、确定性 decode 崩溃（[#34920](https://github.com/sgl-project/sglang/issues/34920)）、CUDA graph capture 崩溃（[#34974](https://github.com/sgl-project/sglang/issues/34974)）。如果同时使用 PD 分离 + DCP，风险更高。

3. **长上下文服务需要主动规避 DSA sparse-MLA 的 65535 token 边界**：SM100 + `prefill=trtllm` 时，单次 extend 超过 65535 token 可能静默不计算 attention（[#34947](https://github.com/sgl-project/sglang/issues/34947)）。请对超长请求做 chunking，或避免 non-DP 路径。

4. **MiniMax-H3 多 rank 部署必须预留充足 host memory**：按 rank 线性放大（约 57-58 GiB/rank），否则会被 SIGKILL（[#34902](https://github.com/sgl-project/sglang/issues/34902)）；同时注意 `quality="high"` 不能与 Turbo-LoRA 叠加。

5. **当前没有新 Release**：所有修复只能从 main 构建或等待下一版本；若以稳定优先，建议跟踪 CI 状态（[#17050](https://github.com/sgl-project/sglang/issues/17050)）与上述高危 issue 的关闭情况再决定升级窗口。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

# llama.cpp 动态日报 2026-08-16

## 1. 今日速览

今日主线是**混合架构模型（Hybrid Linear+MLA）支持加速落地**：Kimi-K3 文本模型正式合入（b10448），MiniMax-Text-01/M1 同步到位（b10437）。服务端方面，**yield_to_queue 线程模型完成重新设计**（b10447），改变了推测解码（speculative decoding）在 server 中的调度路径。与此同时，Vulkan/SYCL/CUDA 三个后端仍有性能与稳定性问题被持续报告，对应修复 PR 正在推进中。

---

## 2. 版本发布与破坏性变更

### b10448（最新）
- **新增 Kimi-K3 文本模型支持**（#26185）：Hybrid KDA（线性注意力）+ MLA（完整注意力）混合架构，额外包含 cross-layer residual attention 和 latent MoE。架构细节已被截断，完整信息需查看 PR。
- 链接：https://github.com/ggml-org/llama.cpp/releases/tag/b10448

### b10447
- **server：yield_to_queue 线程模型重新设计**（#27133）：common_speculative_process 移入 worker 线程执行，worker 与主线程的职责进行了交换。这是一个服务端调度架构级变更，建议部署后重新做性能基准测试。
- 链接：https://github.com/ggml-org/llama.cpp/releases/tag/b10447

### b10441（⚠️ 破坏性变更）
- **迁移弃用的 `--mmap/--no-mmap/--mlock/--direct-io` 为统一 `--load-mode` 参数**（#26934）：脚本、示例和文档中的旧 flag 将不再生效。使用旧参数的启动脚本需要更新。
- 链接：https://github.com/ggml-org/llama.cpp/releases/tag/b10441

### 其他 Release
| 版本 | 内容 | 链接 |
|------|------|------|
| b10446 | vendor: BoringSSL 更新至 0.20260813.0（#27099） | https://github.com/ggml-org/llama.cpp/releases/tag/b10446 |
| b10444 | common: 支持 `--models-dir` 加载 MTP 辅助模型；处理多种 draft 类型（#24431） | https://github.com/ggml-org/llama.cpp/releases/tag/b10444 |
| b10443 | fix: 读取 gguf 数组前先检查类型（#27075），潜在防止错误加载导致的崩溃 | https://github.com/ggml-org/llama.cpp/releases/tag/b10443 |
| b10442 | vulkan: 为 Intel Xe 上 coopmat1 添加 SHMEM_STRIDE_PAD/APPLY_SLM_A_RESHAPE（#25380） | https://github.com/ggml-org/llama.cpp/releases/tag/b10442 |
| b10437 | 支持 MiniMax-Text-01 / MiniMax-M1 模型（#27018） | https://github.com/ggml-org/llama.cpp/releases/tag/b10437 |
| b10436 | mtmd/common: 多项修复（#27071） | https://github.com/ggml-org/llama.cpp/releases/tag/b10436 |

---

## 3. 新模型与硬件支持

| 项目 | 类型 | 状态 | 说明 |
|------|------|------|------|
| Kimi-K3 | 文本模型（混合 KDA+MLA，含 latent MoE） | ✅ b10448 已合入 | 架构新增 cross-layer residual attention，支持多个新注意力模式 |
| MiniMax-Text-01 / MiniMax-M1 | 文本模型（含 logits mask，处理零值嵌入张量） | ✅ b10437 已合入 | 对 MoE 的 logits mask 处理进了模型层 |
| Maple 20B-A1B | 三值 MoE（TQ1_0/TQ2_0），24 层 / 256 专家（8 active），SWA-512 全局注意力 3:1 交错 | 🔄 PR #27000 | 仅 CPU 路径，待 review |
| TML Inkling | 新架构（safetensors→GGUF、graph build、kernel 变更、banded flash attention） | 🔄 PR #25731 | 含大 MoE 离散索引的 int64_t 处理 |
| Docker ROCm 升级 | 7.14.0 + Ubuntu 26.04，新增 gfx9xx 架构列表，修复 "no usable GPU found" | 🔄 PR #27145 | 待合并 |
| speculators-format 检查点 | 支持 SpecForge/RedHat 格式 DSpark drafts | 🔄 PR #26275 | vLLM #47093 之后的格式兼容 |

---

## 4. 性能与优化

### 已合入（Release）
- **Vulkan coopmat1 优化（Intel Xe）**（b10442，#25380）：为 Intel Xe 的 coopmat mul_mm 添加 SHMEM_STRIDE_PAD/APPLY_SLM_A_RESHAPE 优化，修 shared memory 估算，shared kva 缓存行对齐。

### 进行中（PR）
| PR | 内容 | 关键数据 |
|----|------|----------|
| **#27140** (CUDA) | **修复小 KV 量化下的 prefill 性能骤降**：Q4/Q8 等量化 KV cache 在 prefill 阶段极慢，而 Q8_0 虽正常但压缩率不够；对每个量化类型逐一测试定位 | 修复后小 KV 量化 prefill 不再剧烈劣化 |
| **#27150** (CUDA) | **允许 flash attention 中混合 K/V 类型**：当前 `-ctk` 和 `-ctv` 类型不一致时，flash attention 被完全关闭，attention 节点全部退回 CPU 执行 | **prefill 速度约慢 30 倍**，且无任何警告 |
| #27062 (SYCL) | 减少 Q4_K 多列 MMVQ 中的冗余重建工作：Dflash 测试中发现 Q4 速度比 Q8/FP16 慢，原因是目标列中重复重建 Q4_K 权重 | 降低 Q4_K 重建开销 |
| #26585 (Vulkan) | **tiled transpose 支持 0↔2 置换**（`ggml_cont(ggml_permute(x, 2,1,0,3))`）此前回退到逐元素 strided copy，源读取非连续 | 修复该路径的搬运性能 |
| #26689 (SYCL) | **TILE kernel 用于量化 KV decode**：此前量化 KV decode 落入 VEC kernel，BMG（Battlemage）上 TILE kernel 全面胜出 | **Qwen3.6-35B / Gemma 4 26B / Gemma 4 12B 在 32K 与 118K 上下文下 +42% ~ +169%，零回归** |

---

## 5. 稳定性与回归

按严重程度排序（🔴=崩溃/完全不可用，🟠=功能受损/明显回归，🟡=边缘 case）：

### 🔴 严重
| Issue | 问题 | 状态 |
|-------|------|------|
| **#27063** | **SYCL 在 Intel A770 上完全崩溃**（B60 正常），Qwen/GPT-OSS/Gemma 等任意模型复现；build 10428 | 🟡 无明确 fix PR，Intel A770 用户建议暂避 SYCL 路径 |
| **#27124** | Vision 在 Qwen 27B 3.6/3.8 + AMD AI Max（Vulkan）下不工作 | 🟡 新开（8/15），无 fix PR |
| **#25664** | Vulkan `vk::DeviceLostError` on Linux 7.x（RADV_STRIXHALO），Strix Halo 128GB 复现 | 🟡 无 fix PR，影响 Strix Halo 用户 |

### 🟠 高
| Issue | 问题 | 状态 |
|-------|------|------|
| **#21831** | **Server 对后续请求强制完整 prompt 重新处理**（SWA/recurrent memory 错误），52 条评论最高热度，多版本可复现 | 🟡 无 fix PR，长对话/多轮场景效率影响大 |
| **#24066** | **Vulkan 性能在近期构建中下降**（RX 6600），40 条评论 | 🟡 无 fix PR |
| **#25452** | DSV4-Flash SWA KV-cache 耗尽导致 crash/stall（5 GPU 混合环境） | 🟡 无 fix PR |
| **#26902** | Glimmer Q8_0 在 4×Tesla T10 上张量切分触发 `GGML_ASSERT(ret.axis != GGML_BACKEND_SPLIT_AXIS_UNKNOWN)` | 🟡 无 fix PR，多 GPU 切分场景 |
| **#27109** | **CUDA 4-bit KV cache（Q4_1/Q4_0）在 qwen35 hybrid 上 prefill 骤降至 ~34 t/s**（RTX 3090，MMQ guard 通过） | 🟡 新开（8/15），无 fix PR，与 #27140 相关 |
| **#25618** | **推测解码（MTP/dspark）在量化目标模型上贪心输出与 vanilla 不一致**（bf16 目标正常，Q4_K_M 可复现） | 🟡 无 fix PR，注意与 ngram 现象不同 |

### 🟡 中
| Issue | 问题 | 状态 |
|-------|------|------|
| #27023 | `reasoning_effort` 参数行为异常（llama-server） | 🟡 无 fix PR |
| #27023 | Qwen3-Coder parser：dotast 模型跳过 `<tool_call>` 和 `<function=` 时 lazy tool-call 触发永不执行 | 🟡 无 fix PR |

---

## 6. 对应用开发者的意义

1. **命令行迁移**：`--mmap/--no-mmap/--mlock/--direct-io` 已废弃，统一为 `--load-mode`。CI/CD 脚本、容器启动命令需同步更新（#26934）。

2. **server 推测解码行为变化**：b10447 改变了 speculative decode 的执行线程模型，如服务为多用户共享同一 server 实例，建议在 b10447 之后重新运行压测，确认调度特性是否符合预期。

3. **Kimi-K3 与 MiniMax 新模型可立即试用**：b10448/b10437 已落地，API 层应无需额外适配，但混合架构（KDA+MLA、cross-layer residual attention）的显存行为与传统 transformer 不同，需注意 KV cache 相关配置。

4. **KV cache 配置风险提示**：
   - 不要将 `-ctk` 与 `-ctv` 设置为不同量化类型——会静默触发 30 倍 prefill 性能惩罚（#27150）。
   - 4-bit KV cache 在 Qwen3.5 hybrid 上存在 prefill 性能踩坑（#27109），生产环境建议先小范围验证。

5. **长对话可靠性问题**：Issue #21831（完整 prompt 重新处理）长期未决，多轮 Agent 类应用需关注；若遇到规律性延迟尖峰，可检查是否触发该路径。

6. **视觉模型首请求延迟将改善**：PR #27152（进行中）会在 warmup 阶段对 vision encoder 做真实 dummy image 编码，避免首个视觉请求的一次性初始化开销。视觉 Agent 应用值得跟踪。

7. **多 GPU 切分注意**：Glimmer 30B 等模型在 4×Tesla T10 上仍存在 split axis 断言失败（#26902），多卡部署前建议先在目标模型/卡组合上跑 `test-backend-ops` 验证。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

# Ollama 动态日报（2026-08-16）

## 1. 今日速览

今日发布了 v0.32.14-rc0 候选版本，主要修复 WebP 图像转码与 Qwen 渲染器的系统消息位置处理。但**qwen3.8 在 API 层对非开头 system 消息的兼容问题持续发酵**，已影响 `ollama launch claude`、Claude Code 等工具链，且该问题无直接 fix PR。**Pascal 架构 GPU 在 v0.32.11+ 回归**是另一项值得警惕的硬件兼容性退化。性能方面，有一个已落地的 PR 声称可消除每次推理约 300ms 的固定开销。

## 2. 版本发布与破坏性变更

### v0.32.14-rc0
- **变更内容**：
  - `llm`: 为 llama-server 增加 WebP 图像的转码支持（此前 WebP 解码失败可能导致 minicpm-v 崩溃）
  - `renderers/qwen`: 容忍非开头的 system 消息，不再报错
- **发布链接**: https://github.com/ollama/ollama/compare/v0.32.13...v0.32.14-rc0
- **注意**: 该 RC 版本修复了 qwen renderer 对 system 消息位置的容错，但 issue 区仍有多条关于 qwen3.8 在 `/api/chat` 与 `/v1/messages` 上报 500 的未关闭问题（见下文稳定性部分），建议生产环境暂缓升级。

## 3. 新模型与硬件支持

- **新模型请求（社区呼声较高，尚未确认支持）**：
  - **DeepSeek-V4-Flash:0731**（#17510，7 条评论，+2 👍）
  - **DeepSeek V4 Pro 0813**（#17775）
  - **GLM-5.3**（#17741）
  - **Upstage Solar Pro 4**（#17773，524K 上下文）
- **架构支持改进（PR）**：
  - [#17769](https://github.com/ollama/ollama/pull/17769)：为 `qwen3moe` 架构自动分配 qwen3-coder renderer/parser，解决从 Hugging Face 直接拉取 GGUF 时工具调用解析失效的问题。
- **硬件兼容性问题提示**：
  - [#17766](https://github.com/ollama/ollama/issues/17766)：Pascal 架构（P6000/P4000）在 v0.32.11/12/13 起无法使用，尽管文档仍列出支持。属回归。

## 4. 性能与优化

- **[PR #16161](https://github.com/ollama/ollama/pull/16161)（性能，约 300ms/请求）**：缓存 `GetModel()` 和 `Capabilities()` 结果，避免每个推理请求重复读取模型 manifest 与重新解析 GGUF 元数据。该 PR 于 2026-05-14 创建，今日仍有更新，尚未合并。
- **[PR #11159](https://github.com/ollama/ollama/pull/11159)（指标）**：向 `/metrics` 添加 `ollama_eval_duration_total`、`ollama_eval_total` 等模型评估指标，便于观测吞吐——也是长期 open 状态，今日有更新。
- **[Issue #17776](https://github.com/ollama/ollama/issues/17776)（性能回归）**：Qwen3.8-27B MTP 变体在 Apple Silicon 上比同量化非 MTP 版本**慢约 2 倍**，用户不确定是否为 Metal 投机解码的已知预期，社区尚无回应。
- **[Issue #17783](https://github.com/ollama/ollama/issues/17783)（内存）**：`gemma4:31b-mlx` 在 MacBook Pro Max M5 上每次执行 prompt 后模型驻留内存不断增大，`ollama ps` 显示数值持续上升。

## 5. 稳定性与回归（按严重程度排序）

### 5.1 严重：qwen3.8 API 层 system 消息位置错误（影响 Claude Code 生态）
- [#17774](https://github.com/ollama/ollama/issues/17774)：`/v1/messages` 对 qwen3.8 返回 500 `system message must be at the beginning`，导致 `ollama launch claude` 完全不可用。
- [#17768](https://github.com/ollama/ollama/issues/17768)：`qwen3.8:27b-mtp-q4_K_M` 在 Claude Code 中同样失败，chat 模式正常。
- [#17754](https://github.com/ollama/ollama/issues/17754)：同类问题已被关闭，但 #17774/#17768 仍复现。**注意**：v0.32.14-rc0 的 `renderers/qwen` 修复可能部分缓解，但没有对应 backport 信息。
- 对依赖 `/v1/chat/completions` 或 `/v1/messages` 的 Agent 工具链有直接影响。

### 5.2 严重：CUDA 非法内存访问（100% 可复现）
- [#17434](https://github.com/ollama/ollama/issues/17434)：`qwen3.6:35b` 在同时满足 (1) JSON-schema format (2) `think:false` 时，CUDA runner 必定崩溃。DGX Spark（GB10, arm64）平台。

### 5.3 高：Pascal GPU 支持回归
- [#17766](https://github.com/ollama/ollama/issues/17766)：P6000/P4000 在 v0.32.11-13 全部失效，nvidia-smi 可见设备但 Ollama 不再使用。

### 5.4 高：升级后模型文件消失
- [#17661](https://github.com/ollama/ollama/issues/17661)：Jetson AGX Orin 从旧版升级到 v0.32.7 后，除 `qwen3.6:35b` 外的模型全部消失，存在数据/模型丢失风险。

### 5.5 中高：SillyTavern 文本补全空响应（回归）
- [#17700](https://github.com/ollama/ollama/issues/17700)：自某次更新起，SillyTavern 文本补全请求返回空响应，服务端**完全收不到请求**；回退到 v0.32.7 恢复正常。用户侧双向排查中。

### 5.6 中高：AMD 后端问题
- [#17782](https://github.com/ollama/ollama/issues/17782)：RX 9060 XT 上运行 qwen3.8:27b 报 `Could not load "TensileLibrary_lazy_gfx1200.dat"`（ROCm 库缺失）。
- [#17748](https://github.com/ollama/ollama/issues/17748)：AMD Radeon 780M Vulkan 后端在 v0.32.11 起报 `vk::Queue::submit: ErrorDeviceLost`，大模型无法加载。

### 5.7 中：API 行为正确性修复 PR（已提交，待合并）
- [#17764](https://github.com/ollama/ollama/pull/17764)：`/api/chat` 中 `audios`/`audio` 字段被 JSON unmarshal 静默丢弃，模型在未收到音频的情况下返回看似合理的回答。修复后直接返回 400。
- [#17770](https://github.com/ollama/ollama/pull/17770)：改进 Qwen3-VL 工具调用解析失败的报错，保留“模型产生非法工具调用”的上下文，避免误判为客户端 bug。
- [#17763](https://github.com/ollama/ollama/pull/17763)：修复 `/v1/chat/completions` 在请求省略 `temperature` 时用硬编码 1.0 覆盖 Modelfile `PARAMETER temperature` 的问题。
- [#17762](https://github.com/ollama/ollama/pull/17762)：`OLLAMA_DEBUG_LOG_REQUESTS` 改为在处理前打印请求日志，便于抓取推理中途状态。

### 5.8 低：其他
- [#17787](https://github.com/ollama/ollama/issues/17787)：Jetson Orin Nano 上 v0.32.2 起 gemma4:e2b/e4b 加载显存占用异常升高。
- [#17780](https://github.com/ollama/ollama/issues/17780)：双 NVIDIA GPU（RTX 5060 Ti + RTX 5090）在指定 GPU 运行 Qwen 3.8 时出现异常调度。

## 6. 对应用开发者的意义

- **若你的应用面向 qwen3.8 且使用非开头 system 消息**：当前必须等待 v0.32.14 正式版验证，或自行在客户端将 system 消息折叠到第一条。`ollama launch claude` 用户暂时不可用。
- **OpenAI 兼容层的默认参数行为有坑**：`/v1/chat/completions` 的 `temperature` 省略时**会覆盖** Modelfile 中的设定（见 PR #17763），在修复合并前建议显式传参。
- **`/api/chat` 将开始拒绝含 `audios`/`audio` 字段的消息**（PR #17764 合并后）：先前静默丢弃导致模型“盲答”，升级后 client 会得到 400。这更安全，但需要语音类应用提前适配。
- **性能优化值得期待**：PR #16161（300ms/请求）落地后，高 QPS 服务成本将显著下降；可以关注其 review 状态。
- **调试工具增强**：`OLLAMA_DEBUG_LOG_REQUESTS` 将能观察到请求处理全过程的日志，对排障有直接帮助。
- **内置模型生态持续扩展**：DeepSeek V4 Flash/Pro、GLM-5.3、Solar Pro 4 均在社区呼吁中，短期建议继续跟踪 release note，不要阻塞自己的模型选型。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

## 2026-08-16 LiteLLM 动态日报

### 1. 今日速览

今日动态集中在**安全审计发现**与**批量/成本计费修复**两大方向：安全研究员一次性提交了三份安全问题（非管理员提额、SSRF/密钥外泄、无认证模式），同时多份 PR 针对预算检查、批次成本重复计算、Ollama 超时等问题进行修复。另有多个围绕 guardrail 扫描、流式 usage 成本可信度、CI 修复的 PR 持续推进。

---

### 2. 版本发布与破坏性变更

**无新版本发布。** 唯一值得注意的是 PR #37058 修复了 Anthropic 启用 brotli 压缩后代理无法解码的问题，确认了 Docker 镜像未安装 brotli 包——升级镜像时可留意该变更。

- [PR #37058 fix(passthrough): stop forwarding client Accept-Encoding upstream](https://github.com/BerriAI/litellm/pull/37058) — 不再向上游转发客户端的 `Accept-Encoding: br`，避免代理转发无法解码的 brotli 原始字节。

---

### 3. 新模型与硬件支持

- **Voyage 嵌入模型家族**（2 个 PR）：
  - [PR #36820 feat(voyage): add voyage-code-4 embedding model](https://github.com/BerriAI/litellm/pull/36820) — 在成本映射中新增 `voyage-code-4`（尚未公开发布，暂照 code-3 镜像参数）。
  - [PR #35091 feat(voyage): add voyage-4 family + voyage-context-4 and fix contextual list[str] input](https://github.com/BerriAI/litellm/pull/35091) — 新增 `voyage-4` 家族与 `voyage-context-4`（$0.12/M, 120K 上下文），并修复 `list[str]` 输入报错。

- **功能请求（未落地）**：托管 vLLM/OpenAI 兼容模型自动填充 `max_input_tokens`/`max_output_tokens`，获得 6 个 👍。

  - [Issue #27830 [Feature]: Auto-populate max_input_tokens/max_output_tokens for hosted vLLM/OpenAI-like models](https://github.com/BerriAI/litellm/issues/27830)

---

### 4. 性能与优化

- **Ollama 远程实例 8 秒静默超时修复**：`get_runtime_model_info` 绕过了请求中的 `api_base`，每次 completion 都会先对 localhost:11434 做两次约 4 秒的 TCP 连接超时，然后才真正请求远端模型。修复 PR 已提交，将 `api_base` 转发至模型信息查询。

  - [Issue #37041 Ollama: get_runtime_model_info ignores the request's api_base...](https://github.com/BerriAI/litellm/issues/37041)
  - [PR #37062 fix(ollama): forward completion api_base to model-info lookup](https://github.com/BerriAI/litellm/pull/37062)

- **SpendLogs 缺少 `(api_key, startTime)` 复合索引**：预算窗口的 spend 重算引发对整个表的 seq-scan，在 2 vCPU 的 RDS 实例上导致 Prisma `P2028` 事务启动超时（`_commit_spend_updates_to_db` 失败告警）。

  - [Issue #35766 LiteLLM_SpendLogs has no (api_key, startTime) index — budget-window spend reseed seq-scans...](https://github.com/BerriAI/litellm/issues/35766)

- **流式 usage 信任策略收窄**：generic gateway 上报的成本可能是非美元单位，且会覆盖配置的定价并耗尽预算。PR 改为仅对已知 USD 提供商信任流式 usage cost，保留 OpenRouter 行为并补充回退测试。

  - [PR #37060 fix(streaming): trust provider usage cost selectively](https://github.com/BerriAI/litellm/pull/37060)

---

### 5. 稳定性与回归

按严重程度排序，均已标注 fix PR 情况。

#### 严重（安全/全站不可用）

- **安全审计（3 份，今日 master 代码审计发现）**：
  - **非管理员可通过 `/key/update` 的 `temp_budget_increase` 自提升 `max_budget`**（CWE-863/770，Medium）。已有公开 PoC 仓库（#28033）。

    - [Issue #37052 Security: budget bypass — key owner raises own max_budget via temp_budget_increase...](https://github.com/BerriAI/litellm/issues/37052)
    - [Issue #28033 [Security]: Budget bypass](https://github.com/BerriAI/litellm/issues/28033)

  - **客户端可指定 `api_base` 导致 SSRF/供应商密钥外泄**，且现有校验守卫是死代码（CWE-918/522，Medium）。

    - [Issue #37053 Security: SSRF / provider-key exfiltration via client-supplied api_base...](https://github.com/BerriAI/litellm/issues/37053)

  - **`LITELLM_MASTER_KEY` 未设置时代理以无认证模式运行，且官方 docker-compose 默认不设置该变量**（CWE-306/287，Low）。此 issue 今日已关闭。

    - [Issue #37054 Security: no-auth mode when LITELLM_MASTER_KEY unset...](https://github.com/BerriAI/litellm/issues/37054)

- **代理无法启动（FastAPI 兼容性）**：`uv tool update litellm["proxy"]` 到 v1.96.2 后，`FastAPI.get_flat_dependant` 不兼容导致启动崩溃，无 workaround。

  - [Issue #36922 LiteLLM Proxy fails to start after uv tool update...](https://github.com/BerriAI/litellm/issues/36922)

- **管理端 session cookie 非 HttpOnly 且内嵌真实代理 key**：登录后 `token` cookie 的 JWT `key` claim 是调用者的真实代理 key，XSS 可直接窃取。

  - [Issue #36997 Admin UI session cookie is a non-HttpOnly JWT carrying the caller's proxy key](https://github.com/BerriAI/litellm/issues/36997)

#### 回归 & 正确性

- **Prisma 启动竞态导致滚动部署期间 spend 数据丢失**：K8s 滚动部署时 Uvicorn 背后的 Prisma 子进程未就绪即启动后台任务（update_spend 等），产生约 5 秒窗口的丢失。

  - [Issue #27704 Prisma Query Engine startup race condition causes spend data loss during rolling deployments](https://github.com/BerriAI/litellm/issues/27704)

- **Managed Bedrock 批次取消不可用**：`POST /v1/batches/{id}/cancel` 报错 “LiteLLM doesn't support bedrock for cancel_batch”，AWS 侧调用永远到不了。同日相关 PR #36633 解决了批次立即可取消/chat 同 deployment 的 litellm_params 注册问题，但取消本身尚无修复。

  - [Issue #33986 Managed Bedrock batches cannot be cancelled through /v1/batches/{id}/cancel](https://github.com/BerriAI/litellm/issues/33986)
  - [PR #36633 fix(bedrock): register managed-batch litellm_params...](https://github.com/BerriAI/litellm/pull/36633)（已合并，解决的是字段泄漏到 provider 的问题）

- **gpt-5.4（ChatGPT 订阅认证）返回空 Responses 输出**，且 `completion()` bridge 报 “Unknown items in responses API response: []”，v1.83.4 可稳定复现。

  - [Issue #25429 chatgpt/gpt-5.4 returns empty final Responses output...](https://github.com/BerriAI/litellm/issues/25429)

- **guardrail 拦截后 token 用量上报为 0**（/v1/responses 路径），实际上游有真实消耗；spend 统计与用户账单会偏差。

  - [Issue #36880 /v1/responses guardrail-blocked replies report zero token usage...](https://github.com/BerriAI/litellm/issues/36880)

- **批次成本被重复/丢失计算**：检索批次与成本轮询同时算钱，先到先锁；失败回调导致成本永久丢失；多次检索会重复计费。PR 提交修复（只计一次；poller 计入的批次补 key 关联）。

  - [PR #37050 fix(batches): account a managed batch's cost exactly once](https://github.com/BerriAI/litellm/pull/37050)

- **已关闭的历史回归**（今日转为 closed/stale，参考价值高）：
  - **1.81.14 在 Claude Code + thinking 模型（如 kimi-k2.5）下工具调用失败**，1.81.12 正常。[#22997](https://github.com/BerriAI/litellm/issues/22997)
  - **1.83.7 回归：OpenAI→Anthropic 转换时 tool_call.function.arguments 丢失**（glm-5.1 场景）。[#27469](https://github.com/BerriAI/litellm/issues/27469)
  - **Gemini `generateContent` 400：`functionCall`→`functionResponse` 顺序校验失败**。[#26755](https://github.com/BerriAI/litellm/issues/26755)
  - **OpenAI→Anthropic 转换时 tools 数组丢失 `function` 必填字段**（Codex 场景）。[#27454](https://github.com/BerriAI/litellm/issues/27454)

#### 其他

- **`service_tier=priority` 按默认费率计费**：gpt-4o/4.1 系列的 dated-snapshot 模型条目缺少 priority 定价键，预算被错误估算。 [Issue #37046](https://github.com/BerriAI/litellm/issues/37046)
- **Gemini TTS 完全未记录 spend**（无 spend log、key spend 为 0）。 [Issue #37015](https://github.com/BerriAI/litellm/issues/37015)
- **GenAI 交互 API 静默丢弃 `response_format`**（Gemini、`USE_LITELLM_PROXY=true` 时）。 [Issue #36928](https://github.com/BerriAI/litellm/issues/36928)
- **`insufficient_quota` 与可重试的 429 未区分**，重试循环会一直空转。 [Issue #32785](https://github.com/BerriAI/litellm/issues/32785)
- **Anthropic /v1/messages 中 `role: "system"` 消息被静默丢弃**。 [Issue #36917](https://github.com/BerriAI/litellm/issues/36917)
- **Gemini 原生自定义 api_base 使用 `system_instruction` 而非规范 snake_case 键**，部分代理端解析为重复可选字段报错。 [Issue #37028](https://github.com/BerriAI/litellm/issues/37028)

---

### 6. 对应用开发者的意义

- **安全修复是当务之急**：如果你向外部用户暴露虚拟 key，`temp_budget_increase` 提额漏洞（#37052）和 `api_base` 覆盖导致密钥外泄（#37053）意味着任何 key 持有者都可能绕过预算或读取供应商密钥。建议：立即禁用客户端自定义 `api_base`，审计 `/key/update` 的权限校验，并在部署环境中显式设置 `LITELLM_MASTER_KEY`（#37054）——不要依赖 docker-compose 默认值。
- **账单与用量追踪需要盯紧**：批次成本重复计费（#37050）和 guardrail 拦截后 token 用量为 0（#36880）会直接扭曲你的成本分析；升级时留意这两项的修复合入情况，强烈建议在 staging 环境跑一遍批次和 guardrail 场景的账单核对。
- **Claude Code / Codex 集成注意**：多个 OpenAI↔Anthropic 转换回归（工具参数丢失、`function` 字段缺失、thinking+tools 组合问题）虽然标记为 stale/已关闭，但它们出现在 1.81.12→1.83.7 版本区间，升级前建议用真实工具调用链路做回归验证，尤其是 Claude Code + 非 Claude thinking 模型组合。
- **Gemini 生态的坑**：TTS 不产生 spend 日志（#37015）、`response_format` 被丢弃（#36928）、`system_instruction` 键名不一致（#37028）——这些都会在 Gemini 接入时造成静默功能缺失或成本盲区，建议通过代理层显式转换/校验。
- **部署运维**：uv 升级到 v1.96.2 存在启动崩溃风险（#36922），暂缓升级或锁定版本；Ollama 远端实例的 8 秒超时问题（#37041）已有 PR #37062，值得跟进合入。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

# Unsloth 动态日报 — 2026-08-16

## 1. 今日速览

社区活跃度高度集中在 Unsloth Studio 桌面端：多条关键修复 PR 聚焦于流式渲染性能、工具调用流解析和 MTP（多头预测）推理延迟，其中 Qwen3.8-27B-GGUF 在部分 GPU offload 下 3.5 token/s 的回归已被定位。功能需求方面，**本地局域网（LAN）访问**是近 24 小时呼声最高的方向（3 个独立 issue 诉求一致），AMD/Intel GPU 的 VRAM 识别与安装支持则是第二大主题。训练侧暂无新版本发布，但出现一个 torch 2.13 安全公告被依赖约束阻塞的隐患。

## 2. 版本发布与破坏性变更

- **无正式 Release**（过去 24 小时无 release 记录）。测试追踪版本为 Studio `0.1.800-beta`、unsloth `2026.8.18` / unsloth_zoo `2026.8.12`（来自 #8873、#8940 用户环境信息）。
- ⚠️ **安全/依赖变更风险**：[#8926](https://github.com/unslothai/unsloth/issues/8926) 指出当前依赖约束阻断 torch 2.13 安全修复（GHSA-rrmf-rvhw-rf47），涉及安全修复的开发者需注意镜像环境是否已锁定旧 torch。
- 无其他明确破坏性 API/配置迁移。

## 3. 新模型与硬件支持

- **新增模型运行反馈**：Gemma-4-26B-A4B 已可在 Unsloth Desktop 运行（[#8483](https://github.com/unslothai/unsloth/issues/8483)）；Qwen3.8-27B 被多次提及，但暴露出缺少 reasoning effort 控制的问题（[#8881](https://github.com/unslothai/unsloth/issues/8881)）。
- **macOS 生态扩展**：PR [#8937](https://github.com/unslothai/unsloth/pull/8937) 为 Studio 增加 oMLX 模型发现支持（读取 `~/.omlx/settings.json`，兼容 LM Studio 目录结构），打通 MLX 模型库。
- **Intel GPU 安装诉求**：[#8931](https://github.com/unslothai/unsloth/issues/8931) 请求支持 Intel GPU（目前仅 Vulkan/llama.cpp 后端），用例为运行 CSM-1b 语音模型。
- **AMD GPU 问题集中暴露**：
  - [#8878](https://github.com/unslothai/unsloth/issues/8878)：AMD Vulkan/ROCm 下 VRAM 识别未知且显存未充分利用。
  - [#8942](https://github.com/unslothai/unsloth/issues/8942)：AMD iGPU 显示 VRAM 过度膨胀（overinflated）。
- **新增模型格式兼容**：PR [#8919](https://github.com/unslothai/unsloth/pull/8919) 防止 macOS AppleDouble 元数据文件（`._<name>`）被误识别为 GGUF，影响 exFAT/FAT32/网络卷场景。

## 4. 性能与优化

- **训练预处理优化**（PR [#8890](https://github.com/unslothai/unsloth/pull/8890)）：`max_steps` 运行前不再全量 tokenize 数据集。实测 30 步 Qwen3-0.6B 训练中，预处理耗时 **11m14s** vs 实际训练 1m54s，该 PR 可显著缩短前处理等待。
- **MTP 部分 offload 性能修复**（PR [#8875](https://github.com/unslothai/unsloth/pull/8875)）：修复 Qwen3.8-27B-GGUF 在部分 GPU offload + UD-IQ2_M 下约 **3.5 token/s** 的性能回退，嵌入式 MTP head 现跟随主模型放置策略。
- **本地模型清单扫描加速**（PR [#8770](https://github.com/unslothai/unsloth/pull/8770)）：109 行模型的冷启动 `GET /api/hub/local` 从约 5 秒降至亚秒级，并将扫描移出 API 关键路径，减少对其他请求的阻塞（原阻塞约 4 秒）。
- **GGUF 加载去重**（PR [#8771](https://github.com/unslothai/unsloth/pull/8771)）：修复已缓存 GGUF 加载时的重复 Hub 校验，单次请求 Hub 往返从 7 次降为 1 次。
- **流式渲染优化**：
  - PR [#8845](https://github.com/unslothai/unsloth/pull/8845)：合并高频流式文本块，避免快速输出时浏览器渲染队列堆积。
  - PR [#8935](https://github.com/unslothai/unsloth/pull/8935)：代码围栏流式渲染改为增量 tokenize，解决 Shiki 高亮整个代码块导致的节流失效。

## 5. 稳定性与回归

按严重程度排序：

1. **训练崩溃（高，无 fix PR）**：[#2482](https://github.com/unslothai/unsloth/issues/2482) `RuntimeError: PassManager::run failed`，在 Colab T4 上训练 Qwen3-0.6B-bnb-4bit 稳定复现，已累计 18 条评论，是当前影响面最大的训练侧问题。
2. **Desktop 安装失败**：[#8546](https://github.com/unslothai/unsloth/issues/8546) Unsloth Desktop 安装流程无法完成（本地 NVIDIA 单卡环境）。
3. **Deep Research 冻结**：[#8483](https://github.com/unslothai/unsloth/issues/8483) Gemma-4-26B-A4B 运行时 Deep Research 在 "Writing The Report" 阶段卡死，无 token 用量可查。
4. **Mac 加载 Ideogram 4 失败**：[#8940](https://github.com/unslothai/unsloth/issues/8940) `'_Noop' object is not iterable`，Studio 0.1.800-beta / macOS 26.5.2。
5. **训练阻断（torch 版本不匹配）**：[#8933](https://github.com/unslothai/unsloth/issues/8933) `module 'torch' has no attribute 'float8_e8m0fnu'`，影响依赖 torch 2.13 的新 float8 训练路径。
6. **GGUF 导出流程退化（用户强反馈）**：[#8717](https://github.com/unslothai/unsloth/issues/8717) 抱怨导出 GGUF 前必须先下载 ~40GB 16bit 权重，过去可直接转换；已被标记 feature request/bug，暂未见 fix。
7. **部分下载无法续传**：[#8927](https://github.com/unslothai/unsloth/issues/8927) "Partial Download. Click to continue." 点击无任何响应。
8. **CUDA_VISIBLE_DEVICES 使用 UUID 格式时 GPU 选择器消失**：[#8873](https://github.com/unslothai/unsloth/issues/8873) 多 GPU 健康环境下 per-model GPU 选择器被静默隐藏。
9. **已提供 fix PR 的回归**：
   - [#8754](https://github.com/unslothai/unsloth/pull/8754) / [#8755](https://github.com/unslothai/unsloth/pull/8755)：修复工具调用（tool-call）`delta.index` 重置/多轮时的参数流串扰。
   - [#8939](https://github.com/unslothai/unsloth/pull/8939)：修复张量并行下量化 KV cache 被静默丢弃的问题（fixes [#8888](https://github.com/unslothai/unsloth/issues/8888)）。
   - [#8621](https://github.com/unslothai/unsloth/pull/8621)（已关闭）：Windows 上 linked-folder 以文本模式读取导致文件同步截断（CRLF/Ctrl-Z）。
   - [#8943](https://github.com/unslothai/unsloth/pull/8943)：修复选择已加载模型时误杀其他会话流式回复的问题。
10. **统计接口小 bug**：[#8899](https://github.com/unslothai/unsloth/issues/8899) `get_statistics()` 中调用方传入的 `force_download=False` 被内部 `_get_statistics` 覆盖忽略。

## 6. 对应用开发者的意义

- **LAN 部署成最迫切需求**：目前 Studio/Desktop 默认只监听 `127.0.0.1`，外部访问依赖 Cloudflare 临时隧道，三个 issue（[#8578](https://github.com/unslothai/unsloth/issues/8578)、[#8898](https://github.com/unslothai/unsloth/issues/8898)、[#8934](https://github.com/unslothai/unsloth/issues/8934)）要求开放 `0.0.0.0` 监听或显式 LAN 模式，并支持配置持久化。若你在团队内网部署 Unsloth 作为推理网关，需关注后续支持进展。
- **媒体 API 的模型选择行为将改进**：PR [#8766](https://github.com/unslothai/unsloth/pull/8766) 为 `/v1/images/generations` / `/v1/videos/generations` 增加 opt-in 模型自动切换，此前这些端点未选模型时直接返回 503，对 API 客户端不友好。
- **工具调用流的健壮性正在修复**：两个 PR（[#8754](https://github.com/unslothai/unsloth/pull/8754)、[#8755](https://github.com/unslothai/unsloth/pull/8755)）修复了多轮 tool-call 参数流串扰和索引重置问题，使用 OpenAI 兼容接口构建 Agent 循环的开发者应升级后重测并发工具调用场景。
- **推理吞吐回归需注意**：Qwen3.8-27B 类模型在部分 GPU offload 下有严重性能回退（3.5 token/s 级），建议等待 #8875 合入后再用于生产，或改用 CPU offload + MTP 头固定策略。
- **依赖安全提醒**：如果应用直接依赖 unsloth 的 torch 环境，需关注 [#8926](https://github.com/unslothai/unsloth/issues/8926) 中的 GHSA 安全公告；在官方解禁 torch 2.13 前需自行评估暴露面。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*