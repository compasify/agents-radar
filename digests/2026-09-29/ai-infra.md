# AI 基础设施日报 2026-09-29

> 生成时间: 2026-09-29 02:15 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

⚠️ 横向对比生成失败。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

# vLLM Digest — 2026-09-29

---

### **1. 今日亮点**  
vLLM 项目持续深化对 ROCm（gfx950）平台上的 **DeepSeek V4.1** 的支持，多个 PR 已合并，实现了 MXFP4 稀疏索引、KV 缓存读取功能，并通过基于分片的预填充分发提升了性能。一项关键错误修复解决了因推测解码过程中 M 值错误四舍五入导致 FlashInfer 预热崩溃的问题，防止在 SM100/SM103 硬件上引擎无法启动。与此同时，团队在去中心化服务方面取得进展，发布了关于可编程 KV 缓存和请求级反渲染的新 RFC。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内未报告新版本发布或破坏性变更。*

---

### **3. 新模型与硬件支持**  
- **DeepSeek V4.1** 现已全面支持 ROCm（gfx950）：  
  - [PR #58671](https://github.com/vllm-project/vllm/pull/58671)：为使用 aiter 的 MQA-logits 内核添加了分页 MXFP4 稀疏索引器的 ROCm 路径。  
  - [PR #57523](https://github.com/vllm-project/vllm/pull/57523)：启用 DeepSeek-V4.1 的 MXFP8 滑动窗口 KV 缓存读取。  
  - [PR #57463](https://github.com/vllm-project/vllm/pull/57463)：通过替换仅 PTX 的打包逻辑，修复了 ROCm 上 `--kv-cache-dtype nvfp4_ds_mla` 的支持问题。  
- **GLM-5.3**：通过优化描述符处理，在 GB200 上实现 P/D 去中心化部署的性能提升 ([Issue #55434](https://github.com/vllm-project/vllm/issues/55434))。  
- **Intel GPU (XPU)**：报告在双 Intel Arc Pro B70（Battlemage）系统上启用 TP=2 时出现 GPU 故障及引擎重置问题 ([Issue #41663](https://github.com/vllm-project/vllm/issues/41663))。

---

### **4. 性能与优化**  
- **预填充扩展性**：  
  - [PR #54951](https://github.com/vllm-project/vllm/pull/54951)：将长上下文索引器的预填充行跨张量并行（TP）秩进行分片，减少冗余计算，提升 GLM-5.3 的可扩展性。  
- **解码效率**：  
  - [PR #52162](https://github.com/vllm-project/vllm/pull/52162)：在仅使用 PCP 部署（`DCP == 1`）时，将解码请求分片至各 PCP 秩而非复制，消除冗余工作。  
- **量化与内核**：  
  - [PR #58165](https://github.com/vllm-project/vllm/pull/58165)：修复因 MXFP8 split-K 策略中 M 值错误四舍五入导致的 FlashInfer 预热崩溃，使 Blackwell 代显卡上的稳定推测解码成为可能。  
- **多模态**：  
  - [PR #58122](https://github.com/vllm-project/vllm/pull/58122)：为视觉塔和投影器添加固定分辨率 LLaVA 编码器 CUDA Graph 支持，提升多模态推理吞吐量。

---

### **5. 稳定性与回归问题**  
- **严重崩溃**：  
  - [PR #58165](https://github.com/vllm-project/vllm/pull/58165)：修复在启用推测解码时，SM100/SM103 GPU 上发生 FlashInfer 预热崩溃的问题（由 `autotune(tuning_buckets=...)` 导致 M 值向下取整）。  
- **内存损坏 / 输出错误**：  
  - [Issue #53912](https://github.com/vllm-project/vllm/issues/53912)：前缀缓存 + MTP 在混合 Mamba/GDN 模型（v0.28.0）中仍会导致输出损坏；已关闭的 issue #43559 仍未修复。  
- **GPU 故障**：  
  - [Issue #41663](https://github.com/vllm-project/vllm/issues/41663)：双 Intel Arc Pro B70 上启用 XPU TP=2 会触发 GPU 故障和 BCS 引擎重置；可在 `intel/vllm:0.17.0-xpu` 中复现。  
- **无效设备断言**：  
  - [Issue #57719](https://github.com/vllm-project/vllm/issues/57719)：`prompt_embeds` + 任意惩罚项会导致设备端断言失败（`scatter gather kernel index out of bounds`）。  
  - [Issue #45604](https://github.com/vllm-project/vllm/issues/45604)：MiniMax-M3 MXFP8 与 4x H200 上，FlashInfer AllReduce 归约融合出现 CUDA 无效参数。

---

### **6. 对应用开发者的启示**  
- **去中心化服务**：`/render` → `/generate` → `/derender` 流水线正在成熟。预计通过 RFC 如 [#56851](https://github.com/vllm-project/vllm/issues/56851)（请求级文本/反渲染输出）和 [#42729](https://github.com/vllm-project/vllm/issues/42729)（用于解码的反渲染端点）获得更多控制能力。  
- **多 LoRA 与代理型工作负载**：涉及分类头或多 LoRA 的用例正逐渐流行 ([Issue #12829](https://github.com/vllm-project/vllm/issues/12829))，但短期内支持有限，需等待后续 RFC 落地。  
- **硬件特定调优**：若部署于 AMD ROCm（gfx950），请确保使用最新 vLLM main 分支以获得 DeepSeek V4.1 的优化支持。在 Intel XPU 上，当前应避免使用 TP=2，以防已知崩溃。  
- **推测解码**：在新型号 GPU（如 Blackwell）上使用 `--speculative-decoding` 时需谨慎，除非使用近期构建版本——FlashInfer 自动调优修复至关重要。  

> 💡 *建议*：若运行混合 Mamba/GDN 或 MTP 工作负载，请密切关注 [PR #58165](https://github.com/vllm-project/vllm/pull/58165) 与 [Issue #53912](https://github.com/vllm-project/vllm/issues/53912)。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

# SGLang Digest – 2026-09-29

---

### **1. 今日亮点**  
SGLang 在分布式推理栈方面持续推进，重点在 **Prefill 上下文并行（CP）** 和面向智能体工作负载的 **分布式 KVCache 系统** 取得重大进展，有效缓解了高吞吐、长上下文应用中的可扩展性瓶颈。针对 AMD ROCm 支持的关键稳定性修复已合并，包括修复稀疏注意力路径中的崩溃问题，并提升了 gfx950/gfx1250 GPU 上的内核兼容性。

---

### **2. 发布与破坏性变更**  
无。过去 24 小时内未报告新版本发布或破坏性 API/配置变更。

---

### **3. 新模型与硬件支持**  
- ✅ **通义 PPU** 支持现通过 [RFC #37519](https://github.com/sgl-project/sglang/issues/37519) 追踪，计划上游化对 ZW810/810E 与 ZW-M890P 显卡的一流支持。
- ✅ 通过 [PR #41605](https://github.com/sgl-project/sglang/pull/41605) 新增 **AMD ROCm 10 (MI30X / gfx942)** 夜间测试，覆盖范围已超出 MI35X。
- ✅ **GLM-5.3-Flash FP8/MXFP4** 现已在 gfx950 上完全支持，零 RoPE 稀疏注意力 + 图结构启用的 EAGLE 通过 [PR #39273](https://github.com/sgl-project/sglang/pull/39273) 实现。
- ✅ **HiSparse** 长上下文稀疏服务路线图已最终确定 ([#28874](https://github.com/sgl-project/sglang/issues/28874))，实现解码阶段内存消耗的亚线性增长。

---

### **4. 性能与优化**  
- 🔧 **Prefill CP** 现已兼容 allreduce 融合，支持 MLA 模型（Dpsk v3/Kimi-K2.5）；剩余工作聚焦于 FlashInfer/TRTLLM-MHA 后端 ([#21788](https://github.com/sgl-project/sglang/issues/21788))。
- 🚀 **KV Cache 分片** 已扩展至 DSA 索引器和 MTP，通过 [PRs #40925](https://github.com/sgl-project/sglang/pull/40925) 与 [#40911](https://github.com/sgl-project/sglang/pull/40911)，显著提升分布式环境下的内存效率。
- ⚙️ **PTX KDA Prefill 修复**：解决 `ptx_kda` 预填充路径中的 NaN 问题及 B200 上的工作区增长异常 ([#41572](https://github.com/sgl-project/sglang/pull/41572))。
- 💡 **KDA 融合门稳定性**：针对 #39688 之后 GLM-5.3-Flash-NVFP4 出现的 logprob 偏移问题正在进行调查 ([#41609](https://github.com/sgl-project/sglang/issues/41609))，可能影响高上下文长度下的正确性。

---

### **5. 稳定性与回归问题**  
- ⚠️ **严重崩溃风险**：`create_custom_parallel_group` 使用 `all_gather_object` 时未显式指定分组，导致非确定性设备选择，在非 NVIDIA 后端引发 CUDA 错误 ([#32751](https://github.com/sgl-project/sglang/issues/32751))。
- ⚠️ **无效输入导致服务器崩溃**：Inkling 多模态端点对格式错误的图像/音频 URL 返回 HTTP 500 而非 400 ([#40897](https://github.com/sgl-project/sglang/issues/40897))。
- ⚠️ **DoS 漏洞**：未受限制的 `top_k`、`logprobs` 与 `n` 值可能导致服务器崩溃 ([#41482](https://github.com/sgl-project/sglang/issues/41482))。
- ⚠️ **模型特定失败**：  
  - GLM-5.3 在使用 DFLASH 推测解码时出现严重重复/退化循环 ([#40843](https://github.com/sgl-project/sglang/issues/40843))。  
  - Falcon-H1 因 in-place `.float()` 上采样导致嵌入层绑定失败 ([#41463](https://github.com/sgl-project/sglang/issues/41463))。  
  - MiMo-V2 在 SM100 上为 MXFP4 专家错误选择了 FP8 MoE 执行器 ([#41569](https://github.com/sgl-project/sglang/issues/41569))。
- ✅ **修复中**：如 [#41572](https://github.com/sgl-project/sglang/pull/41572) 与 [#41610](https://github.com/sgl-project/sglang/pull/41610) 等 PR 正在处理关键边缘情况稳定性问题。

---

### **6. 对应用开发者的启示**  
- **智能体应用** 应提前准备迎接即将推出的 **分布式 KVCache** 改进 ([#21846](https://github.com/sgl-project/sglang/issues/21846))，以高效扩展长时间运行会话。
- **多模态开发者** 必须仔细验证输入格式——当前无效媒体输入会触发 500 错误而非 400 错误 ([#40897](https://github.com/sgl-project/sglang/issues/40897))。
- **性能敏感部署** 应避免使用无限制请求参数（如 `top_k`、`n` 等），直到修复上线 ([#41482](https://github.com/sgl-project/sglang/issues/41482))。
- **AMD 用户** 可受益于扩展的 ROCm 10 支持与稳定的稀疏注意力路径——建议使用 `gfx950` 与 `gfx1250` 进行完整覆盖测试。
- **未来兼容性**：请关注 `prefill cp` 与 `hisparse` 路线图项目，为下一代长上下文优化做好准备。

> 🔗 *所有问题与 PR 均直接链接至 GitHub 以供追踪。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 消息简报 – 2026-09-29**

---

### **1. 今日重点**  
最新更新聚焦于推测解码的稳定性与多模态输入处理，修复了 GCC 15 CI 问题及 Vulkan 后端的健壮性。关键进展包括在 `/v1/embeddings` 中支持带类型的输入内容（视觉/音频/视频），为 Qwen3-VL-Embedding 模型启用 OpenAI 风格的嵌套数组格式，并引入 `--cpu-mtp` 参数，将 MTP 草稿生成器卸载至 CPU——特别适合显存受限的系统。

---

### **2. 发布与破坏性变更**  
- **b11242**: 修复 `decode_embd_batch` 中的 GCC 15 `stringop-overflow` 问题 ([#29607](https://github.com/ggml-org/llama.cpp/pull/29607))。  
- **b11239**: 为 Qwen3-VL-Embedding 模型在 `/v1/embeddings` 端点中新增对带类型内容（视觉/音频/视频）的支持 ([#29556](https://github.com/ggml-org/llama.cpp/pull/29556))。  
- **b11238**: 引入 `ggml_pad_ext` 以支持音频编码器（Parakeet、LFM2-Audio、Granite Speech、Gemma 4）中的左填充，提升与基于 roll 填充模型的兼容性。  
- **b11237**: 在 OpenVINO 后端中标记非对齐的 batch-stride 视图为不支持状态 ([#29603](https://github.com/ggml-org/llama.cpp/pull/29603)) —— 输入校验将更加严格。

> 🔧 *注意：今日无破坏性 API 变更报告。所有更新均为新增或修正性质。*

---

### **3. 新模型与硬件支持**  
- ✅ **Qwen3-VL-Embedding**: 通过 OpenAI 风格的嵌套内容数组格式（`{"content": [...]}`）实现多模态嵌入的完整支持，适用于 `/v1/embeddings` 接口。  
- ✅ **GraniteSpeech5ForCTC (Turbo CTC)**: 新增对 IBM 非自回归语音转文本模型的架构支持 ([#29446](https://github.com/ggml-org/llama.cpp/pull/29446))。  
- ✅ **K2 Horizon (0.9B–36B MoVA)**: 已开启功能请求，未来将支持 ([#29104](https://github.com/ggml-org/llama.cpp/issues/29104))。  
- ✅ **Hexagon (Snapdragon 7 Gen 4)**: 正在处理 HMX MUL_MAT inf 错误和 FLASH_ATTN_EXT 失败问题 ([#29473](https://github.com/ggml-org/llama.cpp/issues/29473))。

---

### **4. 性能与优化**  
- **推测解码**:  
  - 引入 `--cpu-mtp` 以支持显存受限系统 ([#29620](https://github.com/ggml-org/llama.cpp/pull/29620))，将 MTP 草稿生成器状态卸载至 CPU，约节省 1GB 显存。  
  - Vulkan 后端现在在推测步骤中避免使用 MMVQ，防止在 AMD 显卡上性能下降 ([#25666](https://github.com/ggml-org/llama.cpp/pull/25666))。  
- **内核级改进**:  
  - Vulkan GDN 内核已调优：在 RTX 3090 上 ubatch=4096 时速度提升 **6.3%** ([#29476](https://github.com/ggml-org/llama.cpp/pull/29476))。  
  - GPU 支持的分块闪注意力已扩展至 x86 平台上的非向量倍数头维度 ([#29423](https://github.com/ggml-org/llama.cpp/pull/29423))。  
- **批处理**: `mtmd`、`speculative` 与 `server` 的 `batch_ext` 迁移工作持续进行 ([#29385](https://github.com/ggml-org/llama.cpp/pull/29385))，实现统一的批处理管理。

---

### **5. 稳定性与回归问题**  
| 问题 | 严重程度 | 状态 | 修复 PR？ | 说明 |
|------|----------|--------|---------|-------|
| `服务器在首次请求后强制重新处理完整提示` | ⚠️ 高 | 已关闭 | ❌ | 影响 SWA/循环记忆；53 条评论，30 个点赞 ([#21831](https://github.com/ggml-org/llama.cpp/issues/21831)) |
| `DFlash2 + --split-mode tensor` 在断言处失败 | ⚠️ 高 | 开放 | ❌ | 对多 GPU 配置至关重要 ([#27819](https://github.com/ggml-org/llama.cpp/issues/27819)) |
| `Qwen3.8 DFlash/MTP 在 Vulkan 上发出越界 token (n_vocab)` | 🛑 严重 | 开放 | ❌ | 导致解码崩溃；影响 AMD Strix Point ([#28158](https://github.com/ggml-org/llama.cpp/issues/28158)) |
| `Vulkan 长时间解码性能下降 → 返回空 EOS` | ⚠️ 高 | 开放 | ❌ | 在 Intel Arc A770 上运行约 7–8 小时后出现 ([#29526](https://github.com/ggml-org/llama.cpp/issues/29526)) |
| `HIP/ROCm: Gated Delta Net 在请求间携带状态` | ⚠️ 中等 | 开放 | ❌ | 导致补全结果泄露前文内容 ([#29092](https://github.com/ggml-org/llama.cpp/issues/29092)) |

> 📌 *DFlash/MTP 和 Vulkan 后端仍存在严重稳定性风险。开发者应避免在生产环境中使用这些功能，直至补丁发布。*

---

### **6. 对应用开发者的意义**  
- **若在消费级 GPU（<12GB VRAM）上运行 Qwen3.5/MoE 草稿**，请使用 `--cpu-mtp`。该选项可在不耗尽显存的前提下启用推测解码。  
- **新项目请迁移到 `llama_batch_ext`** —— 未来的 API 将逐步淘汰 `llama_batch`。该迁移已在示例代码和服务器代码中启动。  
- **验证多模态嵌入** 时，请使用新的 OpenAI 风格格式（`"content": [...]`），适用于 Qwen3-VL-Embedding 等视觉/音频模型。  
- **避免在 `--split-mode tensor` 下使用 DFlash2**，并**避免长期运行 Vulkan 服务**，直到相关修复合并——预计会出现崩溃或静默失败。  
- **监控大 `json_schema` 语法导致的延迟尖峰** ([#29457](https://github.com/ggml-org/llama.cpp/issues/29457))：可能引发核心占用和类似拒绝服务的行为。

> 💡 *构建流水线应尽早集成 GCC 15 与 Vulkan 测试——新 CI 修复表明对编译器与后端健壮性的关注正在加强。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama Digest – 2026-09-29**

---

### **1. 今日亮点**  
Ollama v0.35.0 引入了 **System One**，一个全新的 `/v1/systemone` API，用于结构化决策，使模型能够返回选项、概率和评分——非常适合路由、分类和优先级处理。这标志着向 AI 编排的战略性转变，从单纯的文本生成迈向可执行逻辑。本次发布还包含关键修复，涵盖 GPU 内存管理、RTX 5090 上的 CUDA 崩溃问题，以及模型加载稳定性提升。

---

### **2. 发布与破坏性变更**  
- **v0.35.0**：正式发布，全面支持基于 TypeSafe 的 Jev 框架的 **System One API**（`/v1/systemone`）。  
  - *影响*：现有 OpenAI 兼容客户端现在必须显式处理 `top_p: 1.0` 的覆盖（参见 #18690）。  
  - *迁移提示*：若请求中未明确指定，使用 `PARAMETER top_p` 的 Modelfile 模型行为可能出乎意料。  
  🔗 [GitHub Release v0.35.0](https://github.com/ollama/ollama/releases/tag/v0.35.0)

---

### **3. 新模型与硬件支持**  
- **K2 Horizon (k2-horizon)**：功能请求 (#18698) 要求支持 MBZUAI IFM 推出的新版 0.9B–36B MoE 模型（Apache 2.0），包括官方 GGUF 变体。  
  🔗 [Issue #18698](https://github.com/ollama/ollama/issues/18698)  
- **MLX Backend**：通过 PR #18701 添加 System One 支持；现可通过 MLX 实现本地推理的决策模型。  
  🔗 [PR #18701](https://github.com/ollama/ollama/pull/18701)  
- **GraniteForCausalLM**：通过 MLXrunner 为 IBM 的 Granite 4.1/4.2 模型添加实验性支持。  
  🔗 [PR #17972](https://github.com/ollama/ollama/pull/17972)  

> ✅ *注意*：今日未引入新的量化格式或硬件后端（如 ROCm、CUDA 12.5+）。

---

### **4. 性能与优化**  
- **内存效率**：PR #13244 在计算图构建阶段采用最大图内存分配来估算 VRAM，降低过度分配风险。  
  🔗 [PR #13244](https://github.com/ollama/ollama/pull/13244)  
- **Flash Attention**：在支持且安全时自动启用（无 CPU 回退），提升文本、视觉及嵌入模型的吞吐量。  
  🔗 [PR #13448](https://github.com/ollama/ollama/pull/13448)  
- **KV Cache 复用**：MTP 模型现在可在非思考回合间复用缓存，减少冗余计算。  
  🔗 [PR #17496](https://github.com/ollama/ollama/pull/17496)  
- **GPU 开销控制**：修复 `OLLAMA_GPU_OVERHEAD` 被忽略的问题（PR #18679），确保大模型如 `qwen3.6:35b-a3b` 正确预留 VRAM。  
  🔗 [Issue #18679](https://github.com/ollama/ollama/issues/18679)  

> ⚠️ *待定*：System One 模型的完整性能基准数据尚未可用。

---

### **5. 稳定性与回归问题**  
| 严重程度 | 问题 | 描述 | 状态 |
|---------|------|-------------|--------|
| 严重 | #18642 | 在 Windows 上使用 Cohere MoE 模型时，RTX 5090 出现 CUDA 非法内存访问崩溃 | 开放 |
| 高 | #16532 | Windows 上图像处理失败（`gemma4`）（JPEG OCR 静默失败） | 开放（53 条评论） |
| 高 | #18690 | `/v1/chat/completions` 即使 `Modelfile PARAMETER top_p` 已设置，仍强制要求 `top_p: 1.0` | 开放 |
| 中 | #17916 | `n_threads` 忽略 cgroup CPU 配额 → 容器内吞吐量下降约 45 倍 | 开放 |
| 低 | #18683 | Stripe 计费循环问题 → 账户陷入重试循环 | 开放 |

> ✅ *修复进行中*：PR #18679（GPU 开销）、#18697（截断逻辑）和 #18702（文档）正在解决关键问题。

---

### **6. 对应用开发者意味着什么**  
- **构建决策引擎**：使用 `/v1/systemone` 驱动自动化工作流——例如工单优先级处理、模型路由、内容过滤——并依靠结构化输出获得信心。  
  🔗 [API 文档草稿](https://github.com/ollama/ollama/pull/18702)  
- **避免静默覆盖**：在 API 请求中显式设置 `top_p`——不要依赖 Modelfile 默认值。  
- **优化边缘与云部署**：确保容器化部署尊重 cgroup 限制；避免使用 `n_threads` 默认行为。  
- **预期 GPU 稳定性风险**：在 #18642 解决前，请避免在 RTX 5090 上使用 Cohere MoE 模型。  
- **提升用户体验**：在桌面应用中利用即将推出的 CLI 自动补全功能（#925、#1653）和聊天历史导出功能（#18700）。

> 💡 *实用技巧*：对于高吞吐量代理，通过 MLX 后端（PR #13448、#17496）利用 Flash Attention 与 KV 缓存复用，以降低延迟和成本。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 消息简报 – 2026-09-29**

---

### **1. 今日亮点**  
LiteLLM 生态系统持续成熟，成本透明度、路由智能与安全性方面均有显著提升。关键更新包括新增 **模型排行榜 UI**、支持 **按秒计费** 以及新的防护机制超时设置——对生产级代理系统至关重要。与此同时，多项关键修复解决了预算持久化、Redis SSL 处理及工具模式转换等长期存在的问题。

---

### **2. 发布与破坏性变更**  
- 今日发布 **v1.104.0-rc.1** 与 **v1.103.0**。  
  - 所有 Docker 镜像现已通过 [cosign](https://docs.sigstore.dev/cosign/overview/) 使用与 [commit `0112e53`](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0) 中引入的同一密钥进行签名。  
  - 验证签名：[v1.104.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.104.0-rc.1) | [v1.103.0](https://github.com/BerriAI/litellm/releases/tag/v1.103.0)

> ✅ **操作要求**：请立即在 CI/CD 流水线中验证镜像签名。

---

### **3. 新增模型与硬件支持**  
- **Bedrock Mantle** 支持扩展，新增 `anthropic.claude-opus-5.5` 与 `sonnet-5.5`（含 GovCloud 变体）的成本条目。  
  - PR: [#43647](https://github.com/BerriAI/litellm/pull/43647)  
- **llmman** 作为兼容 OpenAI 的本地服务商加入（在端口 17434 上提供 `/v1` 接口）。  
  - PR: [#38925](https://github.com/BerriAI/litellm/pull/38925)  
- **DashScope 实时 WebSocket** 支持现已可用。  
  - PR: [#40579](https://github.com/BerriAI/litellm/pull/40579)  
- **OpenAI Live 会话**（`gpt-live-1`）现通过新路由 `/v1/live/sessions` 进行代理。  
  - PR: [#43621](https://github.com/BerriAI/litellm/pull/43621)

---

### **4. 性能与优化**  
- **按秒计费** 现已正确聚合 `input_cost_per_second` 与 `output_cost_per_second`，避免重复计费。  
  - PR: [#43614](https://github.com/BerriAI/litellm/pull/43614)  
- **批量处理** 得到增强：  
  - `max_batch_file_records`（拒绝过大文件并返回 413 错误）  
  - 每日上传上限与单文件下载限制  
  - PR: [#43632](https://github.com/BerriAI/litellm/pull/43632)  
- **Redis 缓存性能** 通过减少查询支出日志时的开销得到提升。  
  - PR: [#43656](https://github.com/BerriAI/litellm/pull/43656)

---

### **5. 稳定性与回归问题**  
| 问题 | 严重性 | 状态 | 修复 PR |
|------|----------|--------|--------|
| `Redis 缓存因意外的 ssl_check_hostname 失败`（v1.93.0+） | 严重 | 开放 | — |
| `sanitize_input_schema_for_anthropic` 丢弃根层 `anyOf`/`$ref`，导致工具调用失败 | 高 | 开放 | [#43157](https://github.com/BerriAI/litellm/issues/43157) |
| `Gemini 工具 translate` 将空参数映射为 `{"type": "object"}` 而非 `{}` | 中等 | 开放 | [#43156](https://github.com/BerriAI/litellm/issues/43156) |
| `max_end_user_budget_id` 未持久化至数据库 → 预算重置被忽略 | 高 | 开放 | [#25386](https://github.com/BerriAI/litellm/issues/25386) |
| `Azure GPT-4.1` 同时拒绝 `max_tokens` 与 `max_completion_tokens` | 中等 | 开放 | [#31614](https://github.com/BerriAI/litellm/issues/31614) |

> ⚠️ **注意**：多个回归问题影响核心计费追踪与模型路由逻辑；依赖准确计费或降级链路的用户应密切监控。

---

### **6. 对应用开发者的影响**  
- **构建更可靠的代理**：借助按秒计费、实时会话代理以及改进的防护机制超时设置 ([#43648](https://github.com/BerriAI/litellm/pull/43648))，您的应用现在可实现更严格的资源控制，避免静默失败。  
- **增强可观测性**：新增的 **模型排行榜页面** ([#43649](https://github.com/BerriAI/litellm/pull/43649)) 为管理员提供了清晰的模型使用视图——非常适合成本优化与 SLM 蒸馏工作流。  
- **避免隐藏成本**：使用 `bedrock_mantle` 成本条目以实现 AWS CUR 准确归因。确保不会因定价不一致而多付费（例如 #37631）。  
- **安全部署**：在多团队环境中启用基于 Oso 的授权 ([#42416](https://github.com/BerriAI/litellm/pull/42416))，实现细粒度的模型访问控制。  

> 🔧 **实用提示**：若使用 Azure PTU 部署，请启用 `ptu_shares` 以实现团队级资源分配 ([#43043](https://github.com/BerriAI/litellm/pull/43043))，防止成本漂移并提升问责性。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth 消息简报 – 2026-09-29**

---

### **1. 今日亮点**  
Unsloth v0.1.900-beta 正式推出 *Laya 决策模型* 和统一的 **文档与媒体库**，支持本地部署开源推理代理（如 Jev，Laya）。此次发布在苹果硅芯片上实现了图像与视频生成约 4.5 倍的性能提升，同时大幅优化了技能编辑器和文档查看器功能。

---

### **2. 发布与破坏性变更**  
- **v0.1.900-beta**：正式发布，支持 **决策模型（Laya）**、**技能编辑器**、**文档/媒体库**，以及增强的苹果硅性能。  
  - [GitHub 发布页面](https://github.com/unslothai/unsloth/releases/tag/v0.1.900-beta)  
  - 未报告破坏性变更；现有工作流保持向后兼容。

---

### **3. 新模型与硬件支持**  
- **决策模型**：通过 `unsloth_zoo` 和新的 `systemone` API 端点原生支持 Laya 风格决策代理。  
  - [PR #12232](https://github.com/unslothai/unsloth/pull/12232)：使聊天模型可通过 MCP 调用 Laya。  
- **Idefics3 架构**：功能请求待处理 ([#4079](https://github.com/unslothai/unsloth/issues/4079))，用于支持 IBM Granite Docling VLM。  
- **硬件**：  
  - **苹果硅（MLX）**：现已支持 Laya 检查点的 fp16 推理 ([#12256](https://github.com/unslothai/unsloth/pull/12256))。  
  - **混合 NVIDIA+AMD 系统**：多个 PR 解决 GPU 可见性与后端路由问题（例如，[#12246](https://github.com/unslothai/unsloth/issues/12246)，[#12248](https://github.com/unslothai/unsloth/issues/12248))。  
  - **Windows ARM64**：已修复 `winget` 安装包的问题 ([#11913](https://github.com/unslothai/unsloth/issues/11913))。

---

### **4. 性能与优化**  
- **图像/视频生成**：得益于优化的内核执行与卸载规划，在苹果硅上实现约 4.5 倍加速。  
  - [PR #12043](https://github.com/unslothai/unsloth/pull/12043)：基于动态激活的卸载机制提升了显存使用效率。  
- **Laya 推理**：通过仅标记头与 CUDA 图（无需 `torch.compile`），最高可提速 2.5 倍。  
  - [PR #12224](https://github.com/unslothai/unsloth/pull/12224)  
- **内存管理**：在多 GPU 环境中，通过更智能的每兆像素显存预算分配，降低开销。  
- **模型加载**：本地扫描文件夹副本现优先于 Hub 缓存使用 ([#12254](https://github.com/unslothai/unsloth/pull/12254))，减少重复下载。

---

### **5. 稳定性与回归问题**  
- **严重问题**：  
  - **工具调用卡死**：工具调用超过最大时长后可能无限冻结 ([#12048](https://github.com/unslothai/unsloth/issues/12048)) —— 修复 PR 已提交 ([#12234](https://github.com/unslothai/unsloth/pull/12234))。  
  - **Base64 图像解析失败**：随机出现“无效 Base64 值”错误，导致重处理，尽管输出图像本身有效 ([#12058](https://github.com/unslothai/unsloth/issues/12058)) —— 修复 PR 正在审核中 ([#12236](https://github.com/unslothai/unsloth/pull/12236))。  
- **安装与杀毒软件冲突**：  
  - Bitdefender 误报阻止了 Windows 安装程序 ([#12140](https://github.com/unslothai/unsloth/issues/12140))。  
  - 杀毒软件干扰了 Windows 上的一键安装（`install.ps1`）([#11397](https://github.com/unslothai/unsloth/issues/11397))。  
- **WSL 中的 CUDA OOM**：即使显存未被使用，仍会发生内存溢出 ([#1797](https://github.com/unslothai/unsloth/issues/1797)) —— 目前尚无解决方案。

---

### **6. 对应用开发者的意义**  
- **构建 AI 代理**：通过新推出的 `systemone` API 与 MCP 集成，直接在应用中使用 **Laya 决策模型**。  
- **优化多 GPU 工作负载**：在混合 NVIDIA+AMD 系统中，可显式配置将推理（llama.cpp）与训练（ROCm/CUDA）分别路由至不同 GPU。  
- **提升用户体验**：禁用聊天流式传输中的自动滚动 ([#9761](https://github.com/unslothai/unsloth/issues/9761))，并将微调配置导出为 Ollama 格式 ([#4660](https://github.com/unslothai/unsloth/issues/4660))。  
- **规避陷阱**：  
  - 在 ROCm 系统上避免使用 `CUDA_VISIBLE_DEVICES=""` —— 该设置会隐藏 AMD 显卡 ([#12245](https://github.com/unslothai/unsloth/issues/12245))。  
  - 手动管理模型导出，防止敏感路径泄露至 Hugging Face Hub ([#12239](https://github.com/unslothai/unsloth/pull/12239))。  
- **未来准备**：关注 Idefics3 支持进展，以及针对苹果硅部署的 MLX fp16 优化。

---  
*简报生成时间：2026-09-29 | 来源：[unslothai/unsloth GitHub](https://github.com/unslothai/unsloth)*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*