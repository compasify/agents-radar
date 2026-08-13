# OpenClaw 生态日报 2026-08-13

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-08-13 01:00 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 — 2026-08-13

## 1. 今日速览

过去 24 小时，OpenClaw 仓库保持**极高活跃度**：500 条 Issue 更新（新开/活跃 392，已关闭 108），500 条 PR 更新（待合并 343，已合并/关闭 157），无新版本发布。Issue 关闭率仅 21.6%，净新增 284 条，积压持续上升。稳定性方面不容乐观：**"子代理完成消息静默丢失"与"回复静默失败"**仍是最核心痛点，其中 #121058 在 #116277 关闭后复发且监控持续告警，评论高达 91 条。好消息是维护者（steipete 等）正在密集修复 CI/构建/测试基础设施（#122883、#122885、#122887），并有一批渠道类（Matrix、Telegram）修复 PR 进入待审/待验证阶段。整体判断：**吞吐量极高，但消息投递可靠性问题未解，项目处于"高活跃、高风险"状态。**

---

## 2. 版本发布

过去 24 小时无新版本 Release（0 个），本节省略。建议关注 #121058 等 P1 修复是否随下一版本发布。

---

## 3. 项目进展

过去 24 小时共有 **157 条 PR 被合并/关闭**，343 条待合并。在评论数 TOP 30 中，已关闭的 PR 为两条：

| PR | 内容 | 意义 |
|---|---|---|
| [#122852](https://github.com/openclaw/openclaw/pull/122852) `ci` | fingerprint preferred pnpm hooks（关闭 #122838） | 防止 `.pnpmfile.mjs` 钩子变更依赖解析而不使受保护的依赖快照失效，加固 CI 依赖完整性 |
| [#122883](https://github.com/openclaw/openclaw/pull/122883) `fix(agents)` | 修复显式 agent 所有权（#114388）后的扩展测试夹具 | 解除 #114388 导致的扩展测试 run 失败，**直接 unblock #122831（codex 修复）** |

**值得关注的在途 PR**（接近合并、多由 maintainer 提交）：

- [#122889](https://github.com/openclaw/openclaw/pull/122889) — 修复迁移后的多智能体配置 Gateway 启动失败（`AGENT_SELECTION_REQUIRED` 误报）
- [#122877](https://github.com/openclaw/openclaw/pull/122877) — 修复 Telegram 多智能体启动迁移误判
- [#122885](https://github.com/openclaw/openclaw/pull/122885) — 修复 CI 在 changed-test 规划 fallback 时漏跑扩展测试套件
- [#122887](https://github.com/openclaw/openclaw/pull/122887) — 解除 Control UI 启动包体积增长导致的构建阻塞
- [#122650](https://github.com/openclaw/openclaw/pull/122650) — **安全修复**：剥离模型产出的 `<internal>` 反射块，防止私密推理内容以可见消息发出（关闭 #122623）

项目整体在"工程基础设施修复"上推进明显，但核心运行时可靠性修复（见第 5 节）仍大量处于 `no-new-fix-pr` 状态，尚未看到根本性突破。

---

## 4. 社区热点

| 排名 | Issue/PR | 评论数 | 状态 | 核心诉求 |
|---|---|---|---|---|
| 1 | [#121058 Silent reply failures still recurring after #116277 closed](https://github.com/openclaw/openclaw/issues/121058) | 91 | OPEN | 声称已修复的静默回复失败仍在复发，监控 cron 持续记录新发生，社区信任受损 |
| 2 | [#7707 Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) | 45 | OPEN（P2） | 要求按来源（用户命令/网页/第三方技能）为记忆条目打信任标签，防记忆投毒攻击 |
| 3 | [#44925 Subagent completion silently lost](https://github.com/openclaw/openclaw/issues/44925) | 26 | OPEN（P1） | 子代理完成结果无重试、无通知、无自动重启地静默丢失（E31/E42/E45 等多失败模式） |
| 4 | [#77598 Track live dev agent behavior](https://github.com/openclaw/openclaw/issues/77598) | 23 | OPEN | 对 Pash 开发代理的 24 小时行为观察笔记，社区对"代理自我改进"高度好奇 |

**分析**：#121058 是典型的"修复-复发"恶性循环——#116277 关闭后监控仍持续告警，说明根因未被真正解决，这是社区情绪最激烈的点。而 #7707 的长期高热度（2 月开题至今 45 评论）反映了用户对 **LLM 记忆投毒/提示注入**的安全焦虑正在成为主流诉求，且已挂上 `needs-security-review` 标签等待安全评审。

---

## 5. Bug 与稳定性

过去 24 小时有大量 Bug 类 Issue 处于活跃状态，按严重程度与主题聚类如下：

### 🔴 严重（P1）：消息静默丢失 / 子代理完成投递失败（最高优先级聚类）

| Issue | 问题 | Fix PR |
|---|---|---|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | 静默回复失败在 #116277 关闭后复发，无 queued reply payload，监控持续告警 | ❌ 无 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子代理完成结果多模式静默丢失（announce 失败、超时无重启） | ❌ 无 |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | 子代理完成投递在 direct-announce 超时/drain/orphan prune 时丢失 | ❌ 无 |
| [#92433](https://github.com/openclaw/openclaw/issues/92433) | 子代理完成被 steer 进 requester run，但 run 在消费前结束 → 静默丢弃 | ❌ 无 |
| [#47975](https://github.com/openclaw/openclaw/issues/47975) | 子代理会话完成后持久残留，主会话无响应 | ❌ 无 |
| [#96975](https://github.com/openclaw/openclaw/issues/96975) | 子代理完成将大量子会话内容注入父会话，建议默认只返回 status + 子会话链接 | ❌ 无 |

> 该聚类至少 6 个独立 Issue 指向同一系统（subagent-announce-delivery），但均标注 `clawsweeper:no-new-fix-pr`——**这是当前项目最大的稳定性负债**。

### 🔴 严重（P1）：多智能体 / 并发可靠性

| Issue | 问题 | Fix PR |
|---|---|---|
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 并发 `agents add` 配置覆写、session-lock 失败、子工作脱管 | ⚠️ `linked-pr-open`（有 PR 但未合） |
| [#43374](https://github.com/openclaw/openclaw/issues/43374) | 4 个并发 Telegram agent 时所有 LLM 调用同时超时（curl 正常） | ❌ 无 |
| [#72015](https://github.com/openclaw/openclaw/issues/72015) | active-memory 插件阻塞回复 + QMD 启动初始化压垮多 agent 网关 | ❌ 无 |
| [#54488](https://github.com/openclaw/openclaw/issues/54488) | followup drain 独占 session lane，入站消息阻塞 20-30 分钟 | ❌ 无 |
| [#40611](https://github.com/openclaw/openclaw/issues/40611) | PR #39182 心跳漂移修复引发激进重试，阻塞 Telegram 活跃会话 | ❌ 无 |

### 🟠 较高（P1）：认证 / 超时 / 平台阻塞

| Issue | 问题 | Fix PR |
|---|---|---|
| [#89278](https://github.com/openclaw/openclaw/issues/89278) | Codex OAuth 探测成功但 cron/heartbeat 因 10s 超时失败（回归） | ❌ 无 |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) | isolated cron 始终 "LLM request failed"，请求从未到达 provider | ❌ 无 |
| [#97983](https://github.com/openclaw/openclaw/issues/97983) | iOS/WebChat 消息追加到 transcript 但不触发回复；`--deliver` 无效 | ❌ 无 |
| [#75782](https://github.com/openclaw/openclaw/issues/75782) | embedded-run auth 阶段同步阻塞 10-15s | ❌ 无 |
| [#111498](https://github.com/openclaw/openclaw/issues/111498) | macOS 上 Anthropic 凭据有效但被遗留 workspace-state 迁移阻塞 | ❌ 无 |

### 🟡 中等等（P1/P2）：资源泄漏、数据损坏与配置误用

| Issue | 问题 | Fix PR |
|---|---|---|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/tool 子进程未收割，zombie 累积导致运行时劣化（回归） | ❌ 无 |
| [#78493](https://github.com/openclaw/openclaw/issues/78493) | `sudo openclaw update` 导致混合属主，doctor 遇 EACCES 后覆写配置 | ❌ 无 |
| [#111857](https://github.com/openclaw/openclaw/issues/111857) | CLI budget 重开完整 compacted JSONL，低估/反复压缩低上下文父会话 | ❌ 无 |
| [#115001](https://github.com/openclaw/openclaw/issues/115001) | hybrid memory 搜索 FTS LIKE-fallback 返回虚假 1.0 相似度 | ⚠️ `linked-pr-open` |
| [#95610](https://github.com/openclaw/openclaw/issues/95610) | OpenAI 路径每轮动态注入破坏 prompt 前缀缓存 | ❌ 无 |

### ✅ 已有 Fix PR 的 Bug（相对积极信号）

- [#122824](https://github.com/openclaw/openclaw/pull/122824) → 修复压缩质量检查失败时会话历史丢失（关闭 #119932）
- [#122850](https://github.com/openclaw/openclaw/pull/122850) → Matrix 流式回复在 replacement 失败时保持可见（关闭 #122498）
- [#122679](https://github.com/openclaw/openclaw/pull/122679) → 并发 sandboxed 运行时 `available_skills` 间歇缺失（关闭 #122554）
- [#122864](https://github.com/openclaw/openclaw/pull/122864) → Telegram ingress 超时回收后 abort 误判为投递失败
- [#110529](https://github.com/openclaw/openclaw/pull/110529) → memory-core 对 429 限流使用 60s+ 长退避（关闭 #108893）
- [#110898](https://github.com/openclaw/openclaw/pull/110898) → active-memory recall 子代理上下文绑定到 25K 字符（关闭 #88077）
- [#110841](https://github.com/openclaw/openclaw/pull/110841) / [#110835](https://github.com/openclaw/openclaw/pull/110835) → Vault 响应体与 doctor session 快照读取加大小上限，防 OOM
- [#116253](https://github.com/openclaw/openclaw/pull/116253) → run budget 中止前 flush 已流式输出，不再丢弃半截回复

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 状态信号 | 可能纳入下一版本？ |
|---|---|---|---|
| 记忆来源信任标签（防记忆投毒） | [#7707](https://github.com/openclaw/openclaw/issues/7707) | P2，45 评论，已挂 `needs-security-review` + `needs-product-decision` | 概率中高，安全议题热度持续上升 |
| OpenRouter 用量成本暴露给 agent runtime | [#9016](https://github.com/openclaw/openclaw/issues/9016) | P2，`needs-product-decision` | 概率中低，挂起 6 个月 |
| YAML 配置文件格式支持 | [#45758](https://github.com/openclaw/openclaw/issues/45758) | P3，`needs-product-decision` | 概率低 |
| WebChat 自托管 STT/TTS（路由到网关） | [#45508](https://github.com/openclaw/openclaw/issues/45508) | P2，8 评论 | 概率中，契合 self-hosted 生态 |
| Skill 优先级配置 | [#50199](https://github.com/openclaw/openclaw/issues/50199) | P3，8 评论 | 概率低 |
| 会话智能自动命名（懒生成+廉价模型） | [#99583](https://github.com/openclaw/openclaw/issues/99583) | P3，7 评论，已有 `llm-slug-generator` 基础 | 概率中，实现成本低 |
| Delivery Queue 消息 TTL/过期 | [#16555](https://github.com/openclaw/openclaw/issues/16555) | P2，7 评论，`maturity:stable` | 概率中，与消息可靠性直接相关 |
| `session.resetPrompt` 可配置启动消息 | [#45501](https://github.com/openclaw/openclaw/issues/45501) | P2，`needs-product-decision` | 概率中低 |
| Reasoning 流式覆写显示 | [#42276](https://github.com/openclaw/openclaw/issues/42276) | P3，`needs-product-decision` | 概率中低 |
| Sessions 面板按"最后有意义活动"排序 | [#51028](https://github.com/openclaw/openclaw/issues/51028) | P3，7 评论 | 概率低 |

**路线图信号（来自 PR 侧）**：

- **新模型支持**：[#122762](https://github.com/openclaw/openclaw/pull/122762) 为 xAI 添加 Grok 4.6 catalog 并保留 OAuth xhigh 行为；[#122344](https://github.com/openclaw/openclaw/pull/122344) 让模型选择器按运行时 auth-profile 发现模型——模型生态扩展仍是重点方向。
- **OpenRouter/代理兼容**：[#110138](https://github.com/openclaw/openclaw/pull/110138) 为 OpenRouter 代理的 Moonshot/DeepSeek/Gemini 做 tool schema 归一化（拒绝 `anyOf/oneOf`）。
- **安全硬化**：`<internal>` 反射块剥离（#122650）、Vault/doctor 响应体限流（#110841/#110835）表明安全加固开始覆盖"提示注入外泄"与"恶意响应体 OOM"两类新威胁。

---

## 7. 用户反馈摘要

从今日活跃 Issue 评论中提炼的真实用户声音：

1. **"修复了但还在发生"——信任危机**（#121058，91 评论）：用户明确表示 #116277 关闭后监控 cron 仍持续记录静默回复失败，包括关闭当天。社区对"关闭即修复"的流程产生质疑，是当前最尖锐的负面反馈。

2. **多智能体编排"在实践中不可靠"**（#43367，14 评论）：用户描述了一次小规模并行编码任务即触发配置覆写、session-lock 失败、子工作脱管三类故障，"make multi-agent runs unreliable in practice"。

3. **结果静默丢失 = 不可接受**（#44925 等）："no retry, no notification, no auto-restart on timeout"——用户强调子代理完成丢失不是性能问题，而是**数据丢失语义**问题，生产环境无法接受。

4. **成本与配置预期落空**（#48579、#57901）：用户配置 `pruning mode: off` 后一天仍发生 82 次压缩；`compaction.model` 自定义被 safeguard 扩展忽略。用户对"配置说了不算"强烈不满。

5. **安全焦虑上升**（#7707、#122650）：用户主动提出"网页/第三方内容中的恶意指令污染记忆"的攻击模型，并有用户发现模型 `<internal>` 推理内容被当作可见消息发出（私密推理外泄），属于实际安全事故。

6. **平台覆盖缺失被感知**（#45508、#46058）：自托管语音、Android 原生体验等"非主流入口"需求持续存在，用户愿意自行 fork 验证（#46058 作者明确表示"只问是否可 upstream，不要求整体合入"）。

---

## 8. 待处理积压

以下为长期未解决、或缺少维护者响应的重要 Issue/PR，建议优先关注：

### 长期滞留的高热度 Issue

| Issue | 开启时间 | 滞留原因/标签 | 建议 |
|---|---|---|---|
| [#7707 Memory Trust Tagging](https://github.com/openclaw/openclaw/issues/7707) | 2026-02-03 | `needs-maintainer-review` + `needs-product-decision` + `needs-security-review`，45 评论 | 安全评审积压 6 个月，建议明确产品决策 |
| [#9016 OpenRouter 成本暴露](https://github.com/openclaw/openclaw/issues/9016) | 2026-02-04 | `needs-product-decision` | 挂起 6 个月无结论 |
| [#42276 Reasoning 流式显示](https://github.com/openclaw/openclaw/issues/42276) | 2026-03-10 | `needs-product-decision` | 多个用户 +1，建议排期评估 |
| [#50199 Skill 优先级](https://github.com/openclaw/openclaw/issues/50199) | 2026-03-19 | `needs-product-decision` | 与技能生态扩展相关，可结合路线图一并决策 |

### 未修复的 P1 核心 Bug（长期无 fix PR）

| Issue | 开启时间 | 状态 |
|---|---|---|
| [#43367 多智能体编排不稳定](https://github.com/openclaw/openclaw/issues/43367) | 2026-03-11 | `linked-pr-open`，但 PR 未合并 |
| [#44925 子代理完成静默丢失](https://github.com/openclaw/openclaw/issues/44925) | 2026-03-13 | `no-new-fix-pr` |
| [#121058 静默回复失败复发](https://github.com/openclaw/openclaw/issues/121058) | 2026-08-09 | 91 评论热度极高，**无 fix PR**，建议升为最高优先级 |

### 长期挂起的 PR

| PR | 开启时间 | 状态 |
|---|---|---|
| [#93247 fix(diagnostics): idle ownerless state](https://github.com/openclaw/openclaw/pull/93247) | 2026-06-15 | `stale`，`ready for maintainer look` |
| [#90062 fix(agent): infer agent from fresh session keys](https://github.com/openclaw/openclaw/pull/90062) | 2026-06-03 | `needs proof` |
| [#80818 googlechat appPrincipal](https://github.com/openclaw/openclaw/pull/80818) | 2026-05-12 | `needs proof`，合入窗口已超 3 个月 |
| [#81787 trace bundle MCP catalog discovery](https://github.com/openclaw/openclaw/pull/81787) | 2026-05-14 | `waiting on author` |

---

**日报总结**：OpenClaw 过去 24 小时呈现出典型的高增长开源项目特征——基础设施修复活跃、功能 PR 不断、社区参与度高；但**核心消息投递可靠性问题**（子代理完成丢失、静默回复失败）已形成 6+ 个互相关联的 P1 Issue 且长期无 fix PR，是当前最大的项目健康度风险。建议维护者优先将 #121058 聚类问题作为一个专项处理，而非逐条关闭。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告

**分析日期：2026-08-13 | 数据窗口：过去 24 小时**

---

## 1. 生态全景

个人 AI 助手开源生态正处于**超高速扩张与可靠性瓶颈并存的阶段**：头部项目单日 Issues+PR 更新量可超千条（OpenClaw、ZeroClaw），但"消息静默丢失""假成功"类投递语义缺陷在至少 6 个项目中同时出现，已成为行业级通病而非个别项目问题。安全焦点正从"提示注入防护"向"记忆投毒防御"与"私密推理内容外泄"延伸，多项目开始补齐记忆来源信任标签、内部推理块剥离等机制。插件生态成为主要差异化战场——Hermes 的插件接口扩展、NanoBot 的 hooks 自动发现、NanoClaw 的 Agent Plugins 1.0.0 均指向"稳定公共 API + 能力声明 + 安装同意"的标准化方向。与此同时，模型提供商多元化（DeepSeek、QwenCloud、Grok、Gemini）与 token 成本优化（懒加载工具 schema、前缀缓存）正在同步推进，跨平台（尤其 Windows/macOS）体验正从"能用"走向"一等公民"。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 合并效率 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（新开/活跃 392，关闭 108） | 500（待合并 343，合并/关闭 157） | 0 | 31.4% | 🔴 极高活跃、高风险：6+ P1 消息投递缺陷无 fix PR |
| **ZeroClaw** | 50（活跃 45，关闭 5） | 50（待合并 36，合并/关闭 14） | 0 | 28.0% | 🟢 高活跃、健康：跨平台修复密集落地，但 36 条待审 PR 积压 |
| **IronClaw** | 41（关闭 12） | 50（合并/关闭 19） | 2 个 RC（v1.2.0-rc.2/rc.3） | 38.0% | 🟢 高活跃、版本收敛中：发布管线修复积极，Telegram 渠道 QA 缺陷集中 |
| **Hermes Agent** | 50（新开/活跃 37，关闭 13） | 50（待合并 47，合并/关闭 3） | 0 | 6.0% | 🟡 高活跃、插件主线推进快，但 PR 合并率低、桌面端 P1 回归未修 |
| **CoPaw** | 29（活跃 22，关闭 7） | 42（待合并 27，合并/关闭 15） | 1（v2.1.0-beta.4） | 35.7% | 🟡 Beta 密集迭代：多步骤任务中断/死循环等高影响 bug 无 PR |
| **NanoBot** | 8（关闭 4） | 36（待合并 19，合并/关闭 17） | 0 | 47.2% | 🟢 健康：安全响应快（24h 合入 5 个安全 PR），但 p0 级 session 覆盖修复待审 |
| **LobsterAI** | 6（4 活跃，均为 3 月遗留） | 8（合并/关闭 7） | 0 | 87.5% | 🟡 质量巩固期：代码侧修复积极，社区侧 4.5 个月无官方回应的问题积压 |
| **NanoClaw** | 4（新增，2 个 2.1.54 迁移 bug） | 10（合并/关闭 1） | 0 | 10.0% | 🟡 中高活跃：Agent Plugins 迁移主线明确，但升级路径存在摩擦 |
| **PicoClaw** | 2（均为 stale 遗留） | 3（合并/关闭 0） | 0 | 0% | 🔴 合并停滞：2 个高优 bug 无 fix、3 条 PR 最长 18 天未审 |
| **NullClaw / Moltis / ZeptoClaw** | 0 | 0 | 0 | — | ⚪ 休眠（24h 无活动） |

---

## 3. OpenClaw 在生态中的定位

**规模上是绝对龙头**：单日 500 条 Issue + 500 条 PR 更新，约等于其他 8 个活跃项目更新量之和（零头除外），Issue 净增 284 条，社区参与度断层领先。

**技术路线上是"全家桶式中枢"**：覆盖多平台渠道（Matrix/Telegram/Discord 等）、多智能体网关、记忆/技能/插件体系，与生态内其他项目形成"原型-变体"关系——PicoClaw（边缘硬件）、NanoClaw（移动消息渠道）、ZeroClaw（跨平台/Rust）等均可视为对 OpenClaw 某一维度的定向优化。

**核心风险同样被放大**：#121058（静默回复失败复发，91 评论）与 #44925（子代理完成丢失）构成 6+ 个互相关联 P1 Issue 的"投递可靠性债务"，且全部处于 `no-new-fix-pr` 状态。对比 NanoBot 24 小时合入 5 个安全 PR 的响应速度，OpenClaw 在核心运行时可靠性上的修复节奏明显落后于社区预期，91 条评论的"修复-复发"循环已侵蚀社区信任。

**差异化结论**：OpenClaw 的优势在于生态位与渠道广度，而非工程收敛度；其当前最大竞争风险不是功能不足，而是**消息投递语义的可信度**——这正是生态内其他项目（如 NanoClaw 修复 WhatsApp 假成功、ZeroClaw 修复 cron 输出被丢弃）正在建立差异化信任的领域。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与证据 |
|---|---|---|
| **消息投递可靠性** | OpenClaw、NanoClaw、ZeroClaw、CoPaw、PicoClaw、Hermes | 子代理完成静默丢失（OpenClaw #44925）、WhatsApp 假成功（NanoClaw #3086）、cron 输出被丢弃（ZeroClaw #9340）、多步骤任务无提示中断（CoPaw #6921）、MCP 连接失败挂起（PicoClaw #3269）、clarify 挂起 3600s 超时（Hermes #78069）——"假成功比失败更伤信任"成行业共识 |
| **多智能体编排稳定性** | OpenClaw、CoPaw、Hermes、PicoClaw | 并发配置覆写（OpenClaw #43367）、子 Agent 死循环（CoPaw #6927）、影子实例并发（CoPaw #6918）、路由代理上下文不连续（PicoClaw #3316） |
| **插件生态标准化** | Hermes、NanoBot、NanoClaw、OpenClaw、CoPaw | 稳定公共 API（Hermes #64182）、manifest v2 + capability 声明与安装同意（Hermes #84912/#84916）、agent hooks 自动发现（NanoBot #4878）、Agent Plugins 1.0.0 格式迁移（NanoClaw #3220） |
| **安全边界扩展** | OpenClaw、NanoBot、CoPaw、ZeroClaw | 记忆来源信任标签防投毒（OpenClaw #7707）、内部推理内容外泄剥离（OpenClaw #122650）、Jina 凭据泄露（NanoBot #4884/#5258）、插件静默创建 cron 任务（CoPaw #6916）、SSRF 防护（ZeroClaw #8713） |
| **跨平台一等公民** | ZeroClaw、IronClaw、LobsterAI、OpenClaw | Windows 74 个测试失败（ZeroClaw #7462）、PowerShell 原生支持（ZeroClaw #9182）、Windows 原子重命名（IronClaw rc.2）、插件安装 EPERM（LobsterAI #2479）、macOS keyring 桥接（Hermes #84903） |
| **Token 成本 / 上下文效率** | Hermes、CoPaw、OpenClaw、IronClaw | 懒加载工具 schema 两阶段注入（Hermes #6839，39 评论/18👍）、LLM prefix cache 稳定化（CoPaw #6952/#6953）、紧凑 Google 扩展能力（IronClaw #5503）、OpenAI 路径动态注入破坏前缀缓存（OpenClaw #95610） |
| **模型生态扩展** | NanoBot、OpenClaw、CoPaw、NanoClaw、Hermes | DeepSeek V4 Pro Responses API（NanoBot #5362）、Grok 4.6 catalog（OpenClaw #122762）、QwenCloud provider（NanoClaw #3232、CoPaw）、按会话模型覆盖（CoPaw #5992）、OpenRouter 工具 schema 归一化（OpenClaw #110138） |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键特征 |
|---|---|---|---|
| **OpenClaw** | 全渠道个人 AI 中枢、多智能体网关、记忆/技能体系 | 重度自托管者、多平台消息用户 | 单体仓库 + 渠道适配层 + 子代理机制；吞吐极高但投递可靠性债务重 |
| **ZeroClaw** | 跨平台桌面/CLI、ZeroCode 可视化工作流 | Windows/macOS 桌面用户、Rust 开发者 | Rust 实现（隐含）；平台兼容性主动推进（PowerShell、测试矩阵）；发布安全（三套签名机制待整合） |
| **IronClaw** | 云+自托管双模式、Google 扩展、Telegram 渠道 | NEAR 生态开发者、云上生产级部署 | 双发布线纪律（1.1.1/1.2.0 RC）、QA bug_bash 体系、WebUI 设计系统 Epic |
| **Hermes Agent** | 插件生态优先、本地模型友好、Desktop 应用 | 插件作者、本地/小模型用户 | 插件接口扩展为当前主线（manifest v2、事件总线、MCP 桥接）；工具 schema token 开销敏感 |
| **CoPaw** | 多智能体协作、沙盘权限、Computer Use | 中文用户、AgentScope 生态开发者 | Qwen 系模型深度集成；AgentScope 2.x ChatResponse 兼容；沙盘/审批心智模型 |
| **NanoBot** | 轻量对话智能体、快速部署、WebUI 协作 | 追求低运维成本的开发者 | 安全响应极快（24h 5 个安全 PR）；hooks 自动发现（pkgutil/entry_points） |
| **LobsterAI** | 桌面应用、技能管理、企业协同（飞书） | 中文桌面用户、企业内网场景 | Electron 桌面 + 网关；发布前质量加固节奏；社区响应滞后 |
| **NanoClaw** | 模板/插件化配置、WhatsApp/Signal 渠道 | 移动消息渠道重度用户 | Agent Plugins 1.0.0 目录格式迁移中；2.1.54 升级路径有摩擦 |
| **PicoClaw** | 边缘硬件上的轻量 agent | Sipeed 硬件玩家、嵌入式场景 | 依赖 OpenClaw 架构裁剪；维护侧响应滞后（PR 最长 18 天未审） |

---

## 6. 社区热度与成熟度

**快速迭代期（高吞吐、功能与 bug 并行）**：
- **OpenClaw** — 生态发动机，但处于"高活跃、高风险"状态；24h 合并 157 条 PR 的同时，核心投递缺陷零修复。
- **ZeroClaw / IronClaw** — 处于"发布收敛/平台扩展"的良性高活跃期：ZeroClaw 跨平台修复批量落地，IronClaw 双发布线 + QA 驱动的缺陷闭环。
- **Hermes Agent / CoPaw** — 功能推进激进（插件 PR 批量提交/新版本 beta），但核心稳定性问题（桌面 gateway 回收、多步骤任务中断）未同步解决。
- **NanoBot** — 活跃度中等但质量最高：合并效率 47.2% 居前，安全类 PR 当日合入。

**质量巩固期**：
- **LobsterAI** — 代码侧合并效率 87.5%（7/8），全部为修复与打磨；但社区问题"陈年化"（4.5 个月无回应），stale 自动关闭疑似掩盖未修复 bug。

**停滞/风险期**：
- **PicoClaw** — 24h 零合并、双 stale 高优 bug、PR 评审周期最长 18 天，社区信任度面临流失。
- **NanoClaw** — 迁移摩擦 + 合并率仅 10%，Agent Plugins 大特性阻塞多条依赖链。
- **NullClaw / Moltis / ZeptoClaw** — 24h 无任何活动，实质休眠。

---

## 7. 值得关注的趋势信号

**① 投递语义需要"回执级"承诺**："日志显示成功、实际未送达"的假成功问题横跨至少 5 个项目（ZeroClaw #9340、NanoClaw #3086、OpenClaw #121058、IronClaw #7543、CoPaw #6921）。对开发者而言，**分布式投递确认（delivery receipt）、重试与死信队列正在从可选项变为架构必选项**。建议在设计 agent 消息管道时默认实现"至少一次 + 幂等消费 + 可观测回执"。

**② 安全焦点从"注入攻击"转向"记忆投毒与推理外泄"**：OpenClaw #7707（记忆来源信任标签，45 评论/挂安全评审 6 个月）、#122650（剥离 `<internal>` 反射块）、NanoBot #4884（凭据泄露）、CoPaw #6916（插件静默提权）共同指向：**LLM 记忆系统需要来源分级与写入审计，推理链需要与用户可见输出严格隔离**。这是下一轮安全合规的必争之地。

**③ 插件协议标准化是生态分水岭**：Hermes 的 capability 声明 + 安装同意、NanoBot 的 hooks 自动发现、NanoClaw 的 Agent Plugins 1.0.0、OpenClaw 的 skill 机制——四套方案在同期出现。**统一的插件 manifest（版本、依赖、config schema）+ 权限声明 + 发现机制将成为生态黏性的核心**，建议开发者关注并提前对齐，避免被锁定在单一项目协议上。

**④ Token 经济学决定本地模型可行性**：Hermes #6839 以 18 👍 成为最高热度功能请求（50+ 工具全量 schema 注入消耗 3500–5000 token/次）；CoPaw 已动手做 schema 排序 + prefix cache 稳定（#6953）；IronClaw 的紧凑 Google 扩展将摘要能力前置。**工具 schema 懒加载/两阶段注入、上下文前缀稳定化将成为推理成本优化的标准手法**。

**⑤ 渠道质量是体验瓶颈，Telegram 尤为突出**：IronClaw 单日 QA 报告约 15 个 Telegram 缺陷（GIF 卡死 #7538、长消息拆分丢失 #7540、渠道感知缺失 #7542）；OpenClaw 的 Telegram 修复也仍在待审队列。**渠道适配不等于"能收发消息"——媒体处理、消息顺序、长文本分片、渠道状态感知都需要一等公民级实现**。

**⑥ 可观测性从"可选"变"刚需"**：NanoClaw 的 `ncl status`（#2504）、ZeroClaw 的 SOP 实时状态图标（#9692）、IronClaw 的容器 curl 健康检查（#7555）、OpenClaw 的 Delivery Queue TTL（#16555）——社区不再满足于"能跑"，而是要求**一条命令看清：容器是否存活、agent 最后活动时间、近期错误、消息队列积压**。建议 agent 框架默认暴露健康端点与结构化运行指标。

**⑦ 多智能体协作需要"防失控"设计**：死循环（CoPaw #6927）、影子实例并发（CoPaw #6918）、batch 并行策略未被真正执行（IronClaw #7407）、执行树预算未生效（ZeroClaw #9323）——多 agent 编排在"能调用"之后，正进入"**有界并发、超时熔断、执行预算、单窗口协作**"的工程化阶段。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-08-13）

## 1. 今日速览

过去 24 小时项目保持高强度迭代：PR 更新 36 条（19 条待合并、17 条已合并/关闭），Issue 更新 8 条（4 条关闭），无新版本发布。安全类修复是今日主线，**4 个安全相关 PR 集中合入**，覆盖 ExecTool 路径逃逸、Jina 凭证泄露、Docker 权限降级、Session 存储越界等风险点。功能侧亦有进展，DeepSeek V4 Pro Responses 支持与 agent hooks 自动发现机制已合入。社区讨论热度集中在两个已关闭 Bug 上（#5327 重复消息、#5295 Docker 部署失败），说明用户对稳定性和部署体验敏感。整体项目健康度良好：合并效率高、安全问题响应快，但仍有 p0 级 session 覆盖 PR 待合并（#5271），需维护者优先关注。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 主要集中在安全加固、功能扩展与稳定性修复，共 8 个关键 PR 合入（按类型归并）：

**安全加固（5 项）**，显著收窄攻击面：
- [PR #5329](https://github.com/HKUDS/nanobot/pull/5329) 修复 `ExecTool` 中 `~`、`~user` 路径及输入重定向绕过工作区边界的问题，p1 安全修复已合入。
- [PR #5258](https://github.com/HKUDS/nanobot/pull/5258) 防止含凭证的 URL 被透传给远程 Jina reader，并检查本地重定向链后才允许转发，p1 安全修复已合入（对应 Issue #4884）。
- [PR #5320](https://github.com/HKUDS/nanobot/pull/5320) 调整 Docker 启动引导权限，`cap_drop: ALL` 基础上恢复必需 capabilities，并启用 `no-new-privileges`，p1 安全修复已合入。
- [PR #5218](https://github.com/HKUDS/nanobot/pull/5218) 加固 `ExecTool` 对重定向/分组操作符相邻路径的守卫逻辑，p1 安全修复已合入。
- [PR #5279](https://github.com/HKUDS/nanobot/pull/5279) 将 session 历史存储从 `<workspace>/sessions/` 迁至 `<config-dir>/sessions/`，消除 agent 工具越权读取会话记录的问题，p2 架构安全修复已合入。

**功能扩展（2 项）**：
- [PR #5362](https://github.com/HKUDS/nanobot/pull/5362) 支持 DeepSeek V4 Pro 走原生 Responses API，并显式透传 `reasoning.effort: "none"` 以保持默认思考模式关闭，当日创建当日合入。
- [PR #4878](https://github.com/HKUDS/nanobot/pull/4878) 引入 agent hooks 自动发现机制，支持 `pkgutil` 扫描 + `entry_points` 注册，自定义 hook 只需放入约定目录，无需手工接线。

**Bug 修复（1 项）**：
- [PR #5230](https://github.com/HKUDS/nanobot/pull/5230) 修复 Gemini 3 拒绝回放无 thought signature 工具调用的问题，保留原生签名并支持跨 provider 转换，p1 修复已合入。

整体观感：项目在 24 小时内完成了一轮「安全加固 + 新 provider 适配 + 架构优化」的组合推进，尤其对安全边界的响应非常积极，同时为后续插件化 hook 和 DeepSeek 最新模型铺平了道路。

## 4. 社区热点

- [Issue #5327](https://github.com/HKUDS/nanobot/issues/5327)「Nanobot repeats multiple times the same message while reasoning」——11 条评论，今日讨论度最高。用户报告模型在推理过程中随机重复同一句话（如 "Good points, let me investigate the issue"），多位用户跟帖补充复现场景。背后诉求是对 LLM 输出稳定性的更高要求，尤其在 agentic 工作流中，冗余输出会干扰用户对任务进展的判断。该 Issue 已关闭，但未在今日 PR 列表中找到明确的对应修复，建议维护者确认修复归属。
- [Issue #5295](https://github.com/HKUDS/nanobot/issues/5295)「docker compose 部署报错 entrypoint.sh: Permission denied」——5 条评论。用户按部署文档操作即失败，属于影响新用户上手的门槛问题。已关闭，同日合入的 [PR #5320](https://github.com/HKUDS/nanobot/pull/5320) Docker 权限修复应覆盖此问题，方向正确。
- [Issue #4010](https://github.com/HKUDS/nanobot/issues/4010)「Feature proposal: text-to-speech / voice output support」——3 个 👍，长期开放。用户明确指出 Nanobot 已支持语音输入但缺语音输出，希望补齐 Conversational Loop。虽是老 Issue，点赞数说明社区对多模态交互有真实需求。

## 5. Bug 与稳定性

**待处理（按严重程度排序）**：

- **P0 [PR #5271](https://github.com/HKUDS/nanobot/pull/5271)**（OPEN）修复 stale 后台任务保存覆盖 session 数据的问题。该 PR 通过串行化 `/new` 与压缩、拒绝无效化后的保存来防止数据丢失，严重性最高但仍未合入，建议尽快 review。
- **P1 [PR #5204](https://github.com/HKUDS/nanobot/pull/5204)**（OPEN）将 Responses provider 能力改为声明式 `ResponsesCapabilities` profile，涉及 OpenAI、GitHub Copilot、DeepSeek 路由重构。存在冲突标记，需维护者介入解决。
- **P2 [Issue #5348](https://github.com/HKUDS/nanobot/issues/5348)**（OPEN）token-usage 设置接口的两个测试在每天约 5 小时窗口内确定性失败，根因是 `record_token_usage()` 默认 UTC，而设置 payload 读的是配置时区，提示测试断言未显式指定时区。
- **P2 [PR #5361](https://github.com/HKUDS/nanobot/pull/5361)**（OPEN）微信 WebUI 扫码登录后 token 未持久化到 `config.json`，仅保存到 state 文件，重启即丢失。

**已修复（今日合入）**：

- P1 安全类：[#5329](https://github.com/HKUDS/nanobot/pull/5329)（ExecTool 路径逃逸）、[#5258](https://github.com/HKUDS/nanobot/pull/5258)（Jina 凭证泄露）、[#5320](https://github.com/HKUDS/nanobot/pull/5320)（Docker 权限）、[#5218](https://github.com/HKUDS/nanobot/pull/5218)（ExecTool 重定向守卫）
- P1 功能类：[#5230](https://github.com/HKUDS/nanobot/pull/5230)（Gemini 工具调用签名）
- P2 架构类：[#5279](https://github.com/HKUDS/nanobot/pull/5279)（Session 存储移出 workspace）

## 6. 功能请求与路线图信号

**新提出的需求**：

- [Issue #5350](https://github.com/HKUDS/nanobot/issues/5350)（OPEN，8月12日创建）建议新增 backward-compatible QwenCloud provider 路径。提交者是 Qwen 生态开发者，明确表达「DashScope 存量配置不能丢、国际版 QwenCloud 也要接入」的双向诉求。结合今日 DeepSeek V4 Pro 已合入的节奏，**provider 扩展是当前路线图中的高活跃方向**，该请求很可能被纳入下一迭代。
- [Issue #4010](https://github.com/HKUDS/nanobot/issues/4010)（OPEN，5月26日创建）TTS 语音输出支持。暂无对应 PR，但与现有「语音输入闭环」目标契合，产品价值明确。
- [Issue #5275](https://github.com/HKUDS/nanobot/issues/5275)（OPEN，8月6日创建）Matrix 频道中 "reply in thread" 应形成独立 context，对齐 Discord/Slack 线程行为。

**已在 PR 中体现的路线图信号**：

- **WebUI 协作与配置体验升级**：[PR #5358](https://github.com/HKUDS/nanobot/pull/5358)（session 通过 @mention 协作）、[PR #5356](https://github.com/HKUDS/nanobot/pull/5356)（chat 频道 setup 流程重构为分节表单）、[PR #5357](https://github.com/HKUDS/nanobot/pull/5357)（删除 session 前取消 active turn）。三个 PR 均于 8月12日 创建，且出自核心维护者 chengyongru，说明 **WebUI 是近期的重点打磨对象**。
- **原生终端 UI**：[PR #4329](https://github.com/HKUDS/nanobot/pull/4329)（TypeScript/OpenTUI 重写 CLI）仍在开放中，若合入将改善开发者日常使用体验。
- **MCP 生态增强**：[PR #5338](https://github.com/HKUDS/nanobot/pull/5338)（OAuth 存储读取失败时保留既有凭证）、[PR #5360](https://github.com/HKUDS/nanobot/pull/5360)（非 ASCII MCP 工具名去重），说明 MCP 集成细节正在被补齐。

## 7. 用户反馈摘要

- **部署心智负担**（[#5295](https://github.com/HKUDS/nanobot/issues/5295)）：用户完全依照 `deployment.md` 操作即失败，暴露文档与 Docker 镜像实际行为的偏差。虽然当日已修复，但建议补充一次「干净环境 compose 部署」的 CI 冒烟测试，避免同类问题回归。
- **AI 行为一致性**（[#5327](https://github.com/HKUDS/nanobot/issues/5327)）：模型在 reasoning 阶段随机重复同一句话，虽然不阻塞任务，但会降低用户对系统的信任感，尤其在企业内部工具场景容易被放大。用户期待 Nanobot 能在推理输出层做去重或裁剪。
- **隐私意识强**（[#4884](https://github.com/HKUDS/nanobot/issues/4884)）：安全研究员主动报告 WebFetch 将完整用户 URL 发给 Jina 的问题，并在今日通过 [#5258](https://github.com/HKUDS/nanobot/pull/5258) 得到修复。说明用户群中有较强的安全审查习惯，且项目方响应及时，形成正向反馈。
- **多模态期待**（[#4010](https://github.com/HKUDS/nanobot/issues/4010)）：用户明确提出「语音进、文字出」不完整，希望补齐 TTS 能力。有一定点赞量，可能是差异化竞争力所在。

## 8. 待处理积压

- [Issue #4010](https://github.com/HKUDS/nanobot/issues/4010)（TTS 语音输出）——创建近 3 个月无对应 PR，属于长期未响应的**高赞功能请求**（3 👍）。建议在路线图中明确「计划中/暂缓」态度，避免社区预期落空。
- [PR #4329](https://github.com/HKUDS/nanobot/pull/4329)（原生 TypeScript 终端 UI）——6月13日 创建，已搁置 2 个月，但方向与 CLI 体验优化一致，且无明确反对意见，适合在 WebUI 迭代告一段落后重新评估。
- [Issue #5291](https://github.com/HKUDS/nanobot/pull/5291)（persist subagent conversation transcripts）——8月7日 创建，subagent 过程信息目前完全丢失，影响调试与审计，希望维护者安排 review。
- [PR #5204](https://github.com/HKUDS/nanobot/pull/5204)（Responses capabilities 声明式重构）——优先级 p1，但标有 conflict，需要维护者解决冲突后合入，否则将阻塞后续 provider 相关改动。
- [PR #5271](https://github.com/HKUDS/nanobot/pull/5271)（stale background task session 覆盖）—— **p0 级数据安全修复**，已开放 7 天，建议在本周内完成 review 并合入。

---

**总结**：NanoBot 正处于快速迭代与安全加固并行的阶段——24 小时内合入 8 个 PR，安全边界明显收紧，DeepSeek 新模型支持当日完成，WebUI 侧也有一组来自核心维护者的功能 PR 在路上。值得留意的是 p0 级 session 覆盖修复尚未合入，以及社区对 TTS 的长期期待。整体项目健康度良好，维护者响应速度处于行业上游水平。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报（2026-08-13）

## 1. 今日速览

- 过去 24 小时 GitHub 动态活跃：**Issues 更新 50 条**（新开/活跃 37，关闭 13），**PR 更新 50 条**（待合并 47，合并/关闭 3），**新版本发布 0 个**。
- 社区当前最集中的议题是 **插件接口扩展（tracker #64182）** 和 **Tool Schema 体积/token 开销优化（#6839）**，后者评论数达 39 条，是今日讨论热度最高的 Issue。
- 今日有 8 个插件/CLI 相关 PR 集中提交，说明插件生态正从设计讨论进入密集实现阶段。
- 风险面：Windows Desktop 重启导致 gateway 被回收且不重启的问题被标记为 **P1 回归**（#83683、#84824），目前未见对应 fix PR。
- 整体活跃度评估：**高**。功能推进与 bug 修复并行，但 P1 桌面端消息网关稳定性问题需要尽快收口。

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日未发布新版本，但 PR 合并/关闭与插件接口相关 Issue 批量关闭显示项目在多个方向取得实质推进：

- **Linux 桌面端密钥存储修复落地**
  - [#84903](https://github.com/NousResearch/hermes-agent/pull/84903) 关闭，该 PR salvage 了 [#41236](https://github.com/NousResearch/hermes-agent/pull/41236)：`hermes desktop` 在 Linux 上自动检测 KDE Wallet / GNOME Keyring / Secret Service，桥接为 Chromium password store，解决无 keyring 环境下远程 gateway token 无法保存的问题。
  - 对应 Issue [#62294](https://github.com/NousResearch/hermes-agent/issues/62294) 同步关闭。

- **插件接口扩展批量收口**
  多个长期挂起的插件子议题今日关闭，表明插件扩展示意设计已进入稳定阶段：
  - [#64174](https://github.com/NousResearch/hermes-agent/issues/64174)：`ctx.llm` 路由到插件注册的 auxiliary model slots。
  - [#64177](https://github.com/NousResearch/hermes-agent/issues/64177)：修复插件密钥源在第一进程 bootstrap 阶段被遗漏的问题。
  - [#64179](https://github.com/NousResearch/hermes-agent/issues/64179)：插件 API 版本化、稳定性契约与兼容测试套件。
  - [#64180](https://github.com/NousResearch/hermes-agent/issues/64180)：Pi + OpenCode 插件架构研究 spike。
  - [#64227](https://github.com/NousResearch/hermes-agent/issues/64227)：为插件提供 `ctx.get_config/set_config`、`ctx.state`、`ctx.cron` 桥接。
  - [#64230](https://github.com/NousResearch/hermes-agent/issues/64230)：插件开发工具链：scaffold、Plugin Doctor、独立测试 harness。
  - [#44673](https://github.com/NousResearch/hermes-agent/issues/44673)：允许插件注册自定义 auxiliary model slots。

- **新提交的插件能力 PR（均在 review 中）**
  今日 teknium1 提交的一批 PR 覆盖插件发现、能力声明、事件总线、消息注入、MCP 调用、redaction 模式等：
  - [#84912](https://github.com/NousResearch/hermes-agent/pull/84912)：插件 capability 声明与安装同意流程。
  - [#84914](https://github.com/NousResearch/hermes-agent/pull/84914)：`pre_command` observer hook + capability-gated `ctx.call_mcp`。
  - [#84916](https://github.com/NousResearch/hermes-agent/pull/84916)：plugin.yaml manifest v2，依赖、pip seam、config schema。
  - [#84917](https://github.com/NousResearch/hermes-agent/pull/84917)：session-librarian skill，基于自然语言管理 session 库。
  - [#84919](https://github.com/NousResearch/hermes-agent/pull/84919)：社区插件索引 `hermes plugins search`。
  - [#84927](https://github.com/NousResearch/hermes-agent/pull/84927)：additive-only redaction pattern registry。
  - [#84929](https://github.com/NousResearch/hermes-agent/pull/84929)：`ctx.inject_message(session_key=...)` 网关会话消息注入。
  - [#84932](https://github.com/NousResearch/hermes-agent/pull/84932)：插件间事件总线，带声明式 emits/listens 契约。

- **修复类 PR 在队列中等待合并**
  - [#84931](https://github.com/NousResearch/hermes-agent/pull/84931)：MCP 重试时保留 tool attempt identity，避免写操作重复或语义混淆。
  - [#84928](https://github.com/NousResearch/hermes-agent/pull/84928)：Nous auth keepalive 在 credential 过期前不刷新，导致每次 lifecycle 最终都 401。
  - [#84586](https://github.com/NousResearch/hermes-agent/pull/84586)：Hindsight `local_embedded` 模式补充 config schema。
  - [#68491](https://github.com/NousResearch/hermes-agent/pull/68491)：暴露 `apply_yaml_config_fn` 的验证错误，避免平台静默禁用。
  - [#62663](https://github.com/NousResearch/hermes-agent/pull/62663)：cron 每次 tick 回收 stale sessions，并将 final_response 持久化为 session message。
  - [#81626](https://github.com/NousResearch/hermes-agent/pull/81626)：cron degraded jobs 保存冲突加固。
  - [#64745](https://github.com/NousResearch/hermes-agent/pull/64745)：Hindsight prefetch 与 session identity 绑定。

---

## 4. 社区热点

| Issue/PR | 热度 | 核心诉求 |
|---|---|---|
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839)  Feature: Lazy Tool Schema Loading — Two-Pass Tool Injection | 39 评论 / 18 👍 | 每次 API 调用注入全部 tool schemas，50+ tools 消耗约 3500–5000 token，对本地模型尤其不友好。社区希望按需、两阶段注入工具 schema，降低固定开销。 |
| [#64182](https://github.com/NousResearch/hermes-agent/issues/64182)  Tracking: Plugin Interface Expansion | 33 评论 | 社区插件作者长期等待稳定 public API；tracker 聚合 7 月以来的插件接口扩展需求与 PR。今日多个子 issue 关闭、多个新 PR 提交，说明该方向正被积极推进。 |
| [#64231](https://github.com/NousResearch/hermes-agent/issues/64231)  lifecycle-event catalog、hook taxonomy 与 pending hook PRs 批量处置 | 24 评论 | 社区对 hook 机制缺少统一事件目录和验收标准不满，希望一次性梳理大量 `VALID_HOOKS` 相关 PR，避免各自为政或腐烂。 |

另外 [#64174](https://github.com/NousResearch/hermes-agent/issues/64174)、[#64900](https://github.com/NousResearch/hermes-agent/issues/64900)、[#64162](https://github.com/NousResearch/hermes-agent/issues/64162) 等插件接口子议题今日关闭，说明社区呼声较高的插件扩展点正在被逐个落实。

---

## 5. Bug 与稳定性

### 严重问题（P1）

| 严重度 | Issue | 描述 | 是否有 fix PR |
|---|---|---|---|
| P1 | [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) | Windows Desktop 每次重启会 force-kill 正在运行的 gateway 且不再拉起，WeChat / QQ / Telegram 全部静默；0.20.0 回归。 | 未见 |
| P1 | [#84824](https://github.com/NousResearch/hermes-agent/issues/84824) | 与 #83683 同根因的 duplicate：desktop serve boot 会杀掉 healthy detached gateway，Discord 与 kanban dispatcher 下线。 | 未见 |
| P1 | [#78069](https://github.com/NousResearch/hermes-agent/issues/78069) | `clarify` 工具的自由文本回复间歇性无法绑定 pending call，导致整个 turn 挂起直到 3600s 超时。 | 未见，但有 child issue #82975 |

### 中等问题（P2/P3）

| 严重度 | Issue | 描述 | 是否有 fix PR |
|---|---|---|---|
| P2 | [#82975](https://github.com/NousResearch/hermes-agent/issues/82975) | Telegram 上 profile-namespaced session key 导致 clarify reply bypass 失效，后续消息被排队而非解决 pending clarify。 | 未见 |
| P2 | [#71331](https://github.com/NousResearch/hermes-agent/issues/71331) | Termux 安装失败：`install.sh` 只检查 Python 下限，未检查 `requires-python <3.14` 上限。 | 未见 |
| P2 | [#25065](https://github.com/NousResearch/hermes-agent/issues/25065) | `HASS_TOKEN` 环境变量无条件启用 Home Assistant gateway，即使 config.yaml 显式 `enabled: false`。 | 未见 |
| P2 | [#84871](https://github.com/NousResearch/hermes-agent/issues/84871) | Discord triggering-message 内部控制包装器被写入用户 message 与 session title，污染 transcript/export。 | 未见 |
| P2 | [#84870](https://github.com/NousResearch/hermes-agent/issues/84870) | `/new` 或 auto-reset 后 session list 显示 stale lineage ROOT，而非 live tip。 | 未见 |
| P2 | [#57775](https://github.com/NousResearch/hermes-agent/issues/57775) | Windows `atomic_replace` 遇 `ERROR_SHARING_VIOLATION` 会静默丢写。 | 已关闭，疑似已修复 |
| P3 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | skills-index.json 已 29.8h 未更新，超过 26h 限制，docs 依赖的 Skills Hub 处于 degraded 状态。 | 自动化探针，未见 |

### 今日已提交的修复 PR

- [#84931](https://github.com/NousResearch/hermes-agent/pull/84931)：MCP tool attempt identity 跨重试保留。
- [#84928](https://github.com/NousResearch/hermes-agent/pull/84928)：Nous auth keepalive 过期前主动刷新，避免 401。
- [#84586](https://github.com/NousResearch/hermes-agent/pull/84586)：Hindsight `local_embedded` 模式配置缺失。
- [#68491](https://github.com/NousResearch/hermes-agent/pull/68491)：gateway 配置验证错误静默吞掉的问题。
- [#62663](https://github.com/NousResearch/hermes-agent/pull/62663)：cron stale session 清理。
- [#81626](https://github.com/NousResearch/hermes-agent/pull/81626)：cron 任务保存冲突加固。
- [#64745](https://github.com/NousResearch/hermes-agent/pull/64745)：Hindsight 异步 prefetch 与 session identity 绑定。

---

## 6. 功能请求与路线图信号

### 高热度功能请求

- [#6839](https://github.com/NousResearch/hermes-agent/issues/6839)：**Lazy Tool Schema Loading / Two-Pass Tool Injection**。评论 39、👍 18，是目前 token 成本优化呼声最高的需求。虽然仍为 `needs-decision`，但考虑到本地模型用户痛点明显，极可能进入下一版本规划。
- [#45779](https://github.com/NousResearch/hermes-agent/issues/45779)：Desktop 多 gateway 连接，每个 gateway 独立 tab。适合多机运行 Hermes 的用户。
- [#46257](https://github.com/NousResearch/hermes-agent/issues/46257)：Xiaomi MiMo-V2.5 TTS / ASR 原生 provider 支持，中文语音场景需求。
- [#84834](https://github.com/NousResearch/hermes-agent/issues/84834)：Webhook Revolution 大型 repair campaign meta-issue，覆盖 webhook ingress/execution/delivery/UI/docs。
- [#84921](https://github.com/NousResearch/hermes-agent/issues/84921)：Desktop markdown 渲染中新增 `display.autolink_urls` 开关，关闭自动 URL 转链接。
- [#38275](https://github.com/NousResearch/hermes-agent/issues/38275)：HAMP：agent 地址系统 + 异步消息 + 加密身份，属于更远期 A2A 方向。

### 路线图信号

插件接口扩展是当前最明确的路线图主线。今日提交的 PR 基本覆盖了 tracker [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) 中多个子需求：

- manifest v2（版本/依赖/config schema）
- capability 声明与安装 consent
- `pre_command` observer hook
- `ctx.call_mcp` MCP 调用
- 插件间事件总线
- `ctx.inject_message` 网关消息注入
- 社区插件索引与 `hermes plugins search`
- 插件 redaction pattern registry

这些能力如果合入，将显著增强 Hermes 的第三方插件生态。

---

## 7. 用户反馈摘要

- **Token 成本是本地模型用户的核心痛点**：用户明确表示，50+ 工具全量 schema 注入导致每次调用 3500–5000 token，本地模型格式受限、成本高。相关讨论集中在 [#6839](https://github.com/NousResearch/hermes-agent/issues/6839)。
- **Desktop 重启导致消息静默非常影响生产使用**：用户在 Windows 上使用 0.20.0 desktop app，重启后 WeChat/QQ/Telegram 全部静默，必须手动重启 gateway。见 [#83683](https://github.com/NousResearch/hermes-agent/issues/83683)。
- **`clarify` 挂起问题跨平台存在**：Discord、Telegram 等平台均出现 pending clarify 无法绑定用户回复，直到 3600s 超时。见 [#78069](https://github.com/NousResearch/hermes-agent/issues/78069)、[#82975](https://github.com/NousResearch/hermes-agent/issues/82975)。
- **Linux 无 keyring 环境用户对桌面端满意/不满意并存**：此前无法保存远程 gateway token，属于功能性障碍；今日 [#84903](https://github.com/NousResearch/hermes-agent/pull/84903) 关闭后应得到改善。
- **插件作者希望有更完善的官方 API 基础设施**：例如不想用裸文件 I/O 读写 config.yaml，也不想 shell out 到 `hermes cron`。见 [#64227](https://github.com/NousResearch/hermes-agent/issues/64227)。
- **Discord 内部控制文本泄漏到用户数据和 session title**，影响导出与搜索，用户反馈较明确。见 [#84871](https://github.com/NousResearch/hermes-agent/issues/84871)。

---

## 8. 待处理积压

以下重要 Issue 长期未闭合，或缺少对应 fix PR，建议维护者优先关注：

| Issue | 创建时间 | 优先级 | 备注 |
|---|---|---|---|
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) Lazy Tool Schema Loading | 2026-04-09 | P2 / needs-decision | 39 评论、18 👍，社区关注度高，但尚无实现 PR。 |
| [#25065](https://github.com/NousResearch/hermes-agent/issues/25065) HASS_TOKEN 强制启用 HA gateway | 2026-05-13 | P2 | 配置显式 disabled 仍被 env 覆盖，违反用户预期。 |
| [#38275](https://github.com/NousResearch/hermes-agent/issues/38275) HAMP 地址系统/异步消息/加密身份 | 2026-06-03 | P3 | 创新方向提案，长期未有大进展。 |
| [#45779](https://github.com/NousResearch/hermes-agent/issues/45779) Desktop 多 gateway tabs | 2026-06-13 | P3 | 7 👍，功能需求明确，无关联 PR。 |
| [#46257](https://github.com/NousResearch/hermes-agent/issues/46257) Xiaomi MiMo TTS/ASR 支持 | 2026-06-14 | P3 / needs-decision | 中文语音场景，等待决策。 |
| [#71331](https://github.com/NousResearch/hermes-agent/issues/71331) Termux 安装 Python 3.14 失败 | 2026-07-25 | P2 | 安装脚本边界条件 bug，暂无 PR。 |
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) skills-index 过期 | 2026-07-18 | P3 | 自动化探针报 degraded，建议检查 CI 是否失效。 |
| [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) 插件接口扩展 tracker | 2026-07-14 | P3 / needs-decision | 今日动作多，但整体 tracker 仍有子项待完成。 |
| [#64231](https://github.com/NousResearch/hermes-agent/issues/64231) hook taxonomy 与 pending hook PRs 批量处置 | 2026-07-14 | P3 / needs-decision | 24 评论，仍待统一决策。 |

---

**总结**：2026-08-13 的 Hermes Agent 项目处于高活跃状态，插件生态建设是当前主线，且已有大量 PR 进入实现/审查阶段。与此同时，桌面端 gateway 生命周期回归和 clarify 挂起问题需要尽快修复，否则会影响核心消息渠道的稳定性。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报

**日期：2026-08-13** | 数据窗口：过去 24 小时（截至 2026-08-12）

---

## 今日速览

PicoClaw 项目过去 24 小时处于**中等活跃、但合并停滞**的状态：2 条 Issue 获得更新（均为带 `[stale]` 标记的遗留 Bug），3 条 PR 有新动态但**无一条被合并或关闭**，且无新版本发布。两个用户侧 Bug 持续积累讨论热度但缺少维护者响应，其中 MCP 连接失败导致聊天完全挂起的问题严重性最高。3 条待合并 PR（路由代理上下文修复、Telegram 话题支持、Exa 搜索集成）若能落地将对多智能体场景和平台适配有明显提升，但目前均在企业级评审窗口期。

---

## 版本发布

无新版本发布。

---

## 项目进展

**今日有 0 个 PR 被合并或关闭，主分支代码合入停滞。** 3 条 PR 处于待合并状态，均为功能性改进，值得跟进：

- **#3316 [fix] 路由代理上下文管理修复**：修复 routed-agent 不遵守历史记录/摘要/压缩/seahorse bootstrap 的问题。此前按规则路由到特定 Discord 频道的 agent 无法记忆上下文、自动压缩永不触发，该 PR 直击多智能体路由场景下的核心缺陷。[查看 PR](https://github.com/sipeed/picoclaw/pull/3316)
- **#3315 [feat] 私有机器人聊天话题支持**：解决 Telegram 私有 bot 聊天在启用 Forum Topic 模式时话题无法被识别的问题（原实现仅当 `Chat.IsForum` 为 true 时生效），补齐 Telegram 平台的关键功能缺口。[查看 PR](https://github.com/sipeed/picoclaw/pull/3315)
- **#3299 [feat] 原生 Exa 网页搜索提供商**：新增 Exa 作为原生 `tools.web` / `web_search` 提供商，使用 `POST /search` API 并支持现有 `d/w/m/y` 时间范围过滤，丰富搜索后端生态。[查看 PR](https://github.com/sipeed/picoclaw/pull/3299)

---

## 社区热点

- **Issue #3269 — MCP 服务器连接失败导致 agent 循环挂起**：4 条评论、1 👍，本周讨论焦点。用户使用 nightly 版本（git 2cf030d2）+ Qwen3 模型复现，问题导致聊天界面彻底停止回复，属于服务可用性级别的事故。[查看 Issue](https://github.com/sipeed/picoclaw/issues/3269)
- **Issue #3281 — Web UI 聊天输入在历史稍长时严重卡顿**：4 条评论、1 👍。用户基于 0.3.1 版本给出清晰复现步骤（会话历史变长 → 输入框延迟），是社区反馈最集中的前端性能问题。[查看 Issue](https://github.com/sipeed/picoclaw/issues/3281)

两个 Issue 均已挂上 `[stale]` 标记但仍在持续获得评论，社区诉求是**尽快获得维护者确认与修复计划**。

---

## Bug 与稳定性

按严重程度排序：

1. **[严重] MCP 连接失败导致 agent 循环挂起，聊天界面停止回复**（#3269）：MCP 服务器连接失败后未做超时/错误恢复，agent 循环进入死等状态，用户完全失去应答能力。影响所有依赖 MCP 的部署，且无对应 fix PR。建议优先排查连接生命周期管理。[查看 Issue](https://github.com/sipeed/picoclaw/issues/3269)
2. **[中等] Web UI 长历史会话输入卡顿**（#3281）：会话历史积累到一定长度后，输入框响应明显变慢，影响高活跃用户的连续对话体验。复现路径明确（0.3.1 + Web UI），疑似前端长列表渲染性能问题，暂无 fix PR。[查看 Issue](https://github.com/sipeed/picoclaw/issues/3281)

两处 Bug 均未关联修复 PR，且已进入 `[stale]` 状态，需维护者介入重新激活。

---

## 功能请求与路线图信号

- **Exa 网页搜索集成**（PR #3299）：由社区贡献者 kesku 提交，表明用户对**多元化搜索后端**有明确需求；该 PR 已开放 18 天未被 review，建议维护者尽快响应。[查看 PR](https://github.com/sipeed/picoclaw/pull/3299)
- **Telegram 私有聊天话题支持**（PR #3315）：补全 Telegram 平台在私有 bot 场景下的话题能力，属于**平台适配完善**方向，与整体多平台消息接入策略一致。[查看 PR](https://github.com/sipeed/picoclaw/pull/3315)
- **路由代理上下文连续性**（PR #3316）：社区对**多智能体路由场景下的上下文管理**提出更高要求，该 PR 若被合并将提升 routed-agent 在企业复杂消息流场景的可用性，是路线上值得关注的架构演进信号。[查看 PR](https://github.com/sipeed/picoclaw/pull/3316)

---

## 用户反馈摘要

- **性能痛点**（#3281）：用户反馈 Web UI 在长历史会话下输入延迟明显，说明前端历史消息渲染存在瓶颈，对高频聊天/长时间会话使用者体验影响较大。
- **可靠性担忧**（#3269）：使用 Qwen3 + nightly 版本的用户遭遇 MCP 连接失败后服务完全无响应，用户对 agent 循环的**错误容错与恢复能力**提出了更高预期，这类问题一旦发生在生产中即为事故。
- 两个 Issue 各积累 4 条评论但均无维护者回复，社区对官方响应的等待时间在拉长，需注意贡献者和用户的参与积极性变化。

---

## 待处理积压

| 项目 | 状态 | 已开放天数 | 说明 |
|---|---|---|---|
| [Issue #3269](https://github.com/sipeed/picoclaw/issues/3269) | `[stale]` | 24 天 | MCP 连接失败挂起，严重级别高，无 fix PR，建议立即响应 |
| [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281) | `[stale]` | 23 天 | Web UI 输入卡顿，有明确复现步骤，无跟进 |
| [PR #3299](https://github.com/sipeed/picoclaw/pull/3299) | OPEN | 18 天 | Exa 搜索集成，长期未 review，有挫伤贡献者积极性的风险 |
| [PR #3316](https://github.com/sipeed/picoclaw/pull/3316) | OPEN | 10 天 | 路由代理上下文修复，建议安排评审 |
| [PR #3315](https://github.com/sipeed/picoclaw/pull/3315) | OPEN | 10 天 | Telegram 话题支持，建议安排评审 |

---

**项目健康度小结**：社区侧贡献意愿充足（3 条高质量 PR 待合入），但维护侧响应滞后——两个 `[stale]` 高优 Bug 无修复进展、PR 评审周期偏长（最长 18 天）。若未来一周内无法打破“零合并、零修复”的状态，可能影响社区信任度与贡献积极性。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-13

## 1. 今日速览

过去 24 小时 NanoClaw 保持中高活跃度：新增/活跃 Issue 4 条（全部来自 8 月 12 日，含 2 条迁移相关 Bug），PR 更新 10 条（仅 1 条合并/关闭，9 条仍待审查）。核心团队推动的 **Agent Plugins 1.0.0 模板迁移**（#3220）及其依赖链（#2909、#3231）是当前 PR 管道的主线。值得注意的是，**3 条新 Issue 中有 2 条直接指向 2.1.54 版本的迁移缺陷**（#3233、#3234），提示该版本升级路径存在摩擦。今日无新版本发布，Issue 关闭数为 0，合并/审查速度略低于 Issue 涌入速度。

---

## 3. 项目进展

### 🎉 今日合并/关闭
- **[#3086 [CLOSED] fix(whatsapp): validate recipient exists before sending](https://github.com/nanocoai/nanoclaw/pull/3086)**
  由 `alexandra261` 提交的 WhatsApp 通道修复，今日正式关闭。该 PR 解决了 Baileys `sock.sendMessage` 对未注册号码仍返回"成功"消息键的问题——此前输入错误的收件人号码会记录 `Message delivered`，但消息实际未送达，造成**静默投递失败**。合并后，发送前将校验接收方是否真实存在。

### 🚧 核心功能线：Agent Plugins 1.0.0（仍在推进）
- **[#3220 [OPEN] feat!: agent templates become Agent Plugins 1.0.0 directories](https://github.com/nanocoai/nanoclaw/pull/3220)** — 核心团队主导的破坏性变更，将 agent templates 改造为 Agent Plugins 1.0.0 目录格式，同时携带 stamp-time 符号链接/权限/密钥加固（Fix 部分）。这是当前最大的架构级改动。
- **[#2909 [OPEN] feat(setup): template setup flow in the wizard and first-agent stamping](https://github.com/nanocoai/nanoclaw/pull/2909)** — 模板功能的第二部分（setup 向导），**明确 stacked on #3220**，须等 #3220 合并后合入。PR 描述表明真正的增量为 14 个 setup 侧文件（+927/-52）。
- **[#3231 [OPEN] feat(codex,opencode): honor plugin MCP cwd in both provider config writers](https://github.com/nanocoai/nanoclaw/pull/3231)** — 今日新提交，是 #3220 落地后的 registry 侧配套：让 Codex/OpenCode 的 MCP stdio 配置携带原生 cwd。

> **评估**：模板功能线（#3220 → #2909 → #3231）是一条完整的"格式迁移 + 向导 + 配置写入"链条，合入后将对模板/插件生态产生结构性影响。当前 9 条待合并 PR 中 3 条属于该链条，是项目近期最主要的推进方向。

---

## 4. 社区热点

- **[#2504 feat: add `ncl status` command for lightweight operational health check](https://github.com/nanocoai/nanoclaw/issues/2504)** ★ 评论最多
  该 Issue 创建于 5 月 15 日，今日（8 月 12 日）再次被更新，是目前唯一带评论的 Issue（1 条）。用户的核心诉求是：`ncl sessions list` 只能看到活跃会话但无法判断容器是否存活、最后消息时间、近期错误等健康信号；`/add-dashboard` skill 又要求外部依赖。这反映出**社区对轻量级可观测性的普遍需求**——无需外部基础设施，一条命令即可查看运行健康度。

- **[#3220 核心团队 PR](https://github.com/nanocoai/nanoclaw/pull/3220)** 构成项目内部讨论焦点，订阅关注度高。作为 `feat!` 破坏性变更，其模板目录格式迁移将影响所有现有用户的自定义模板，需要社区配合验证。

> 新增的 4 条 Issue 全部围绕**运维可观测性、迁移数据一致性、ID 校验、第三方模型接入**四个方向，表明用户已从"跑通功能"进入"生产环境可靠性"阶段。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue/PR | 描述 | 状态 |
|--------|----------|------|------|
| 🔴 高 | [#3233 Agent-scoped `ncl tasks` is blind to pre-2.1.54 recurring tasks](https://github.com/nanocoai/nanoclaw/issues/3233) | 从旧版本迁移到 2.1.54 后，容器内 agent 执行 `ncl tasks list` 返回 `No tasks.`，但周期性任务实际仍按计划触发；`pause/resume/cancel/update` 同样失效。**数据库迁移未将 legacy 周期任务行 rehome 到新作用域**，属于升级后功能静默丢失 | ❌ 无 fix PR |
| 🔴 高 | [#3234 Template-stamped agent groups get a bare UUID id](https://github.com/nanocoai/nanoclaw/issues/3234) | `ncl groups create --template <ref>` 生成的 agent group ID 是裸 `randomUUID()`，缺少 `ag-` 前缀；而 `--folder` 路径生成 `ag-<uuid>`。由于该 ID 会被直接用作 OneCLI agent 标识符，以数字开头的裸 UUID 会被 `ensureAgent` 拒绝，**模板创建流程直接失败** | ❌ 无 fix PR，但与 #3220 的 hardening 目标相关 |
| 🟠 中 | [#3086 WhatsApp 静默投递失败](https://github.com/nanocoai/nanoclaw/pull/3086) | 错误号码显示"已送达"，实际未投递 | ✅ 已关闭（修复完成） |
| 🟠 中 | [#2346 Unknown slash commands silently dropped](https://github.com/nanocoai/nanoclaw/issues/2346) | 未知斜杠命令被归类为 `passthrough`，Agent SDK 将其当作 Claude Code 命令处理，输出缺少 `<message>` 块导致响应被静默丢弃 | 🔧 Fix PR 已开（2026-05-08） |
| 🟡 低 | [#2689 Signal DM 首条消息丢失](https://github.com/nanocoai/nanoclaw/pull/2689) | Signal DM 未设置 `isMention: true`，导致首条消息被静默丢弃且 `messaging_groups` 不被创建；另有 DM platform ID 缺少 `signal:` 前缀、`ask_question`/审批投递问题 | 🔧 Fix PR 已开（2026-06-04） |

**关键结论**：#3233 与 #3234 均为 2.1.54 相关的真实回归/迁移缺陷，且当前**都没有对应的 fix PR**，建议维护者优先响应。

---

## 6. 功能请求与路线图信号

- **[#3232 [OPEN] Proposal: add QwenCloud as an optional provider skill](https://github.com/nanocoai/nanoclaw/issues/3232)** —— 社区提议新增 `/add-qwencloud` 可选 provider skill，基于 QwenCloud 的 OpenAI/Anthropic 兼容 API。符合 NanoClaw 现有的模块化 provider 架构（而非 trunk 内置所有 provider），**落地成本低、社区有明确需求信号**，很可能进入下一版本。
- **[#2504 `ncl status` 运行健康检查命令](https://github.com/nanocoai/nanoclaw/issues/2504)** —— 无外部依赖的轻量级健康检查，与现有 `ncl sessions list` 互补。该 Issue 已存活 90 天且今日仍被更新，若维护者认可，可作为 CLI 命令或 operational skill 实现。
- **[#3050 在 channel picker 中加入 Dial](https://github.com/nanocoai/nanoclaw/pull/3050)** —— 新增 Dial 通道（含 runChannelSkill 模型），PR 已开 30 天，属于社区贡献的 channel 扩展。
- **[#3189 add-why utility skill](https://github.com/nanocoai/nanoclaw/pull/3189)** —— 解释单条消息处理结果的实用 skill，轻量、独立，8 月 5 日提交。

**路线图判断**：Agent Plugins 1.0.0（#3220/#2909）是当前版本周期的核心路线图信号；QwenCloud provider、`ncl status` 则代表社区最渴望的增量能力。

---

## 7. 用户反馈摘要

- **可观测性缺失（#2504）**：用户明确表示"没有快速查看运行实例健康状态的方式"——希望一条命令就能看到容器存活、最后消息、近期错误。现有的 `/add-dashboard` 被评价为"需要外部依赖"，门槛过高。
- **迁移阵痛（#3233）**：`jonnychesthair-crypto` 反馈称"任务存在且按计划触发，但 agent 侧完全不可见"，`tasks get/pause/resume/cancel/update` 全部失效。这种"任务在跑但管不了"的状态对生产用户极为困扰，且用户对"没有迁移 rehome 逻辑"感到意外。
- **模板创建流程脆弱（#3234）**：`avital-nanoco` 指出 `--template` 与 `--folder` 路径的 ID 生成逻辑不一致，裸 UUID 恰好命中 OneCLI 校验失败分支。这属于**同一特性两条代码路径的行为分叉**，用户期望一致性。
- **WhatsApp 信任问题（#3086）**：PR 描述揭示了此前"日志显示已送达、实际未发送"的假成功问题，会让用户对投递确认机制失去信任。
- **积极信号（#3232）**：`evelyn-jialin-zhang` 主动提出按现有 provider skill 模式贡献 QwenCloud 支持，显示社区愿意以**代码贡献而非仅提需求**的方式参与扩展生态。

---

## 8. 待处理积压

以下为长期未合并/未解决的条目，需要维护者重点关注：

| 条目 | 存活时间 | 类型 | 说明 |
|------|----------|------|------|
| [#2346 fix(formatter): unknown slash commands as normal chat](https://github.com/nanocoai/nanoclaw/pull/2346) | 97 天（2026-05-08） | PR | 修复未知斜杠命令被静默丢弃的 bug，长期未合入，可能已与当前 formatter 实现产生冲突 |
| [#2504 feat: `ncl status` health check](https://github.com/nanocoai/nanoclaw/issues/2504) | 90 天（2026-05-15） | Issue | 社区持续关注的运维功能，今日仍被更新但仅 1 条评论，缺乏维护者表态 |
| [#2689 fix(signal): DM platform ID consistency](https://github.com/nanocoai/nanoclaw/pull/2689) | 70 天（2026-06-04） | PR | 修复 Signal 首条消息丢失等 3 个问题，长期未审查 |
| [#2909 feat(setup): template wizard flow](https://github.com/nanocoai/nanoclaw/pull/2909) | 42 天（2026-07-02） | PR（core-team） | 阻塞于 #3220，属于同一功能链，需协调合入顺序 |
| [#3050 feat(setup): add Dial channel](https://github.com/nanocoai/nanoclaw/pull/3050) | 30 天（2026-07-14） | PR（社区） | Dial 通道功能完整，30 天未审查，社区贡献者耐心可能在消耗 |

**积压提示**：今日 9 条待合并 PR 中 2 条已存活超过 70 天（#2346、#2689），且均为真实 Bug 修复。若长期搁置，不仅修复会逐渐过期，也可能影响社区贡献者的积极性。建议维护者在推进 Agent Plugins 大特性的同时，为老 PR 安排批量 triage。

---

*本报告基于 2026-08-12 的 GitHub 公开数据生成。说明：数据中"过去 24 小时"按 Issues/PR 的 update 时间戳（2026-08-12）计入，新版本发布时间窗口内无 Release。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-13

## 1. 今日速览

过去 24 小时 IronClaw 项目保持高活跃度：共产生 41 条 Issue 更新和 50 条 PR 更新，其中 12 个 Issue 关闭、19 个 PR 被合并/关闭，另有 2 个 v1.2.0 Release Candidate 版本发布（rc.2、rc.3）。核心开发者在发布管线修复（curl 健康检查、Windows 原子重命名）、能力批处理并发（#7407）和上下文窗口修复（#7484/#7485）上快速推进，显示项目正处于 v1.2.0 候选版本发布前的稳定收敛阶段。与此同时，QA 团队通过 bug_bash 集中报告了约 15 个 Telegram 相关缺陷（含 2 个 P1），说明 Telegram 渠道集成是当前质量短板，但此类问题已在 1.1.1/1.2.0 双线验证中快速响应。综合来看，项目发布节奏健康、社区反馈通道畅通，但渠道稳定性仍需重点加固。

## 2. 版本发布

### ironclaw-v1.2.0-rc.3（2026-08-12）
**修复内容：**
- 运行时容器镜像现安装 `curl`，使容器内 HTTP 健康检查可正常执行。此前 orchestrator 以 `curl -fsS http://localhost:3000/` 探测 worker，但镜像未附带 HTTP 客户端，导致探测永远失败、容器永远不会被标记为就绪。这是阻断生产部署的关键修复。

### ironclaw-v1.2.0-rc.2（2026-08-12）
**修复内容：**
- Windows 首次启动文件系统发布改用原生原子重命名语义，替代硬链接方案，并容忍不支持的目录同步。
- Release smoke 测试保留 Windows 账户身份，以保护独立 secrets key 的安全隔离，避免工作流身份丢失。

**迁移注意事项：**
- rc.2 → rc.3 建议所有部署方立即升级，rc.3 修复的是容器就绪探测问题，直接影响 orchestrator 对 worker 的可用性判定。Windows 部署方需验证首次启动文件发布行为的变化（原子重命名替换硬链接）。

## 3. 项目进展

今日合并/关闭的 PR 主要围绕发布稳定性与基础能力修复，核心进展如下：

**发布与基础设施**
- [#7560 [CLOSED] fix(release): retry the dist installer download](https://github.com/nearai/ironclaw/pull/7560) — 修复 `ironclaw-v1.2.0-rc.3` 发布 18 秒即失败的问题：`curl` 下载 cargo-dist 0.31.0 时连接中断。已为发布管线加入下载重试机制。
- [#7555 [CLOSED] fix(docker): install curl so orchestrator healthchecks can run](https://github.com/nearai/ironclaw/pull/7555) — 即 rc.3 对应的前向移植 PR，为运行时镜像补充 HTTP 客户端，解决容器健康检查永远无法通过的阻断问题。

**扩展与配置**
- [#7550 [CLOSED] feat(extensions): per-field help text on admin configuration forms + channel setup docs rewrite](https://github.com/nearai/ironclaw/pull/7550) — Admin 配置表单支持字段级帮助文本，Telegram manifest 为首个消费者；同步重写了渠道配置文档，降低运维配置门槛。

**Google 扩展能力**
- [#5503 [CLOSED] [Experiment] Add compact Google extension capabilities](https://github.com/nearai/ironclaw/pull/5503) — 合并了紧凑版 Google 扩展能力：Gmail 新增 `fetch_message_summaries`（收件箱摘要，避免全量读取扇出）、Calendar 新增紧凑读取能力，优化上下文效率。

**设计系统**
- [#6836 [CLOSED] feat(webui): @ironclaw/ui and workspace refactor](https://github.com/nearai/ironclaw/pull/6836) — 基于最新 main 重新构建 WebUI 设计系统工作区包 `@ironclaw/ui`，分五层可审查提交，替代 #5563/#6830（仅用于组件/token 盘点，无代码继承）。这是设计系统 Epic（#7038）的关键前置。

**发布线管理**
- [#7427 [CLOSED] release: prepare 1.1.1-rc.1](https://github.com/nearai/ironclaw/pull/7427) — 将 IronHub/custom MCP、WebUI、检索、运行时凭据、Slack、Telegram 的紧急修复回移（backport）至 1.1 发布线，并默认跳过遗留 Slack/Telegram 迁移的旧频道状态（可选显式导入）。

这些合并在发布可靠性、扩展可配置性、上下文效率和 WebUI 基础设施四个方向同步推进，项目正处于 1.1.1 与 1.2.0 双发布线并行的积极迭代期。

## 4. 社区热点

今日评论最活跃的条目集中于性能与架构话题：

- **[#7360 [OPEN] Expand stress coverage across built-in and durable write paths](https://github.com/nearai/ironclaw/issues/7360)**（评论 3，epic 标签）— 夜间 API 容量负载测试仅覆盖对话持久化与并发读端点，其 mock 模型不返回工具调用，导致内置能力写入路径的回归无法被压力测试捕获。用户诉求为扩展 stress harness 以覆盖内置能力与持久化写入路径。该 issue 已持续一周讨论，反映社区/团队对内置能力写入路径回归防护的重视。

- **[#7407 [CLOSED] Execute BatchPolicy::Parallel capability batches concurrently in invoke_capability_batch](https://github.com/nearai/ironclaw/issues/7407)**（评论 3）— 代理循环已计算并行批处理策略，但生产能力端口串行执行。该 issue 要求 `invoke_capability_batch` 真正以有界并发方式运行并行批次，且对模型零感知。该 issue 今日关闭，对应的并发执行改造可能已落地或进入 PR。

- **[#7554 [OPEN] Custom MCP server add flow shows validation error](https://github.com/nearai/ironclaw/issues/7554)**（评论 1）— 用户报告自定义 MCP 服务器添加流程出现红色验证错误且无法添加，来源为 Slack #x-ai-product-feedback 渠道。虽然评论数不高，但这属于产品反馈渠道实时导入的 issue，直接反映外部用户的使用障碍。

**分析**：今日讨论热点集中在架构质量（并发执行、压力覆盖）而非单一功能诉求，且核心开发者 serrrfirat 深度参与其中，表明项目处于主动加固内部架构的阶段。外部用户反馈（#7554）说明自定义扩展仍是用户高频触及的痛点区域。

## 5. Bug 与稳定性

今日 Bug 报告密集，绝大部分来自 QA bug_bash（Railway 实例 `ironclaw-qa-testing-libsql.up.railway.app`），按严重程度排列如下：

### P1（高严重度）
- **[#7538 Telegram agent becomes completely stuck after receiving GIF or sticker](https://github.com/nearai/ironclaw/issues/7538)** — 发送 GIF/sticker 后 agent/session 完全卡死，后续所有文本消息无响应。Telegram 媒体处理存在致命缺陷，需优先排查。暂无关联 fix PR。
- **[#7536 Multi-user access flow is broken — additional users get "Invalid secret" error](https://github.com/nearai/ironclaw/issues/7536)** — Admin UI 创建的用户通过邮件/token 访问时收到 "Invalid secret"，多用户共享实例不可用。暂无关联 fix PR。
- **[#7535 Telegram webhook is not activated after saving bot configuration](https://github.com/nearai/ironclaw/issues/7535)** — 保存 Telegram bot 配置后 webhook 未激活，必须完全重新部署才能工作。截图显示 "Forbidden [nearai-prod cfd5eb33]" 错误。暂无关联 fix PR。

### P2（中高严重度）
- **[#7541 Agent cannot send generated files back as Telegram attachments](https://github.com/nearai/ironclaw/issues/7541)** — agent 生成文件后仅返回本地路径 Markdown 下载链接，而非作为附件发送到 Telegram。
- **[#7539 Telegram user message appears after agent starts working](https://github.com/nearai/ironclaw/issues/7539)** — WebUI 打开时，Telegram 消息的显示顺序颠倒（agent 工作状态先于用户消息出现）。
- **[#7540 Long Telegram messages are split and partially missed](https://github.com/nearai/ironclaw/issues/7540)** — 超长消息被 Telegram 拆分后，IronClaw 仅处理第一部分，其余部分被 "still working on a previous message" 拒绝。
- **[#7544 Agent exposes internal reasoning/planning instead of responding to user](https://github.com/nearai/ironclaw/issues/7544)** — agent 将内部推理、规划步骤或原始工具/API 文档直接输出到聊天窗口。
- **[#7545 Agent incorrectly claims live crypto market data is unavailable](https://github.com/nearai/ironclaw/issues/7545)** — 查询多个加密 token 价格时 agent 声称无实时行情工具，尽管具备通用 HTTP 访问能力。
- **[#7543 Telegram routine runs successfully but message is not delivered on first execution](https://github.com/nearai/ironclaw/issues/7543)** — 例行任务首次执行成功但消息未投递到 Telegram。
- **[#7542 Agent does not recognize that conversation is already in Telegram](https://github.com/nearai/ironclaw/issues/7542)** — agent 在 Telegram 中表现异常，反问用户是否要投递到 Telegram（渠道感知缺陷）。
- **[#7451 Telegram agent sometimes incorrectly asks for credentials](https://github.com/nearai/ironclaw/issues/7451)** — agent 偶尔错误索要 API key/token（持续 2 天未关闭）。
- **[#7508 GitHub MCP extension startup gives confusing endpoint verification prompt](https://github.com/nearai/ironclaw/issues/7508)** — GitHub MCP 扩展启动时报告 "already registered and installed" 后又抛出端点验证问题，提示信息矛盾。

### P3（中低严重度）
- **[#7546 Agent does not react to or acknowledge Telegram stickers](https://github.com/nearai/ironclaw/issues/7546)** — sticker 被静默忽略，无任何反应。
- **[#7547 Instance upgrade fails during egress apply on agent staging](https://github.com/nearai/ironclaw/issues/7547)** — agent-stg.near.ai 上实例升级在 egress 配置步骤失败，容器镜像已切换但 "Error: egress apply failed"。

### 其他
- **[#7554 Custom MCP server add flow shows validation error](https://github.com/nearai/ironclaw/issues/7554)**（外部用户反馈）— 自定义 MCP 服务器添加被验证错误阻塞。

**既有修复关联**：Telegram 相关的 PR [#7464 linked-device](https://github.com/nearai/ironclaw/pull/7464)（设备链接认证、会话托管、标准操作工具）与 [#7515 Slack 消息操作](https://github.com/nearai/ironclaw/pull/7515) 均在开放状态，可能部分改善渠道行为，但今日报告的多为媒体处理、消息排序、投递确认等独立缺陷，仍需单独修复。P1 的 3 个缺陷（#7538/#7536/#7535）目前均无关联 fix PR，建议维护者优先分配。

## 6. 功能请求与路线图信号

今日新提出的功能与路线图信号：

- **[#7517 Cloud.near.ai: allow staking path for Google/GitHub sign-ins](https://github.com/nearai/ironclaw/issues/7517)** — 用户希望 Google/GitHub 登录后也能进行 NEAR staking，当前 credits 仅支持 Stripe，而 "Sign in with NEAR" 只能作为独立登录方式，无法附加到现有账户。**信号**：云平台的账户体系与认证身份需要解耦，是产品化的实际诉求。

- **[#7537 feat(llm): generic per-request thinking/effort control](https://github.com/nearai/ironclaw/issues/7537)** — 核心开发者提出为 LLM 请求路径添加泛化的 thinking/effort 控制（按请求和按模型默认值），由各 provider 适配层映射到原生参数。触发场景为 DeepSeek V4 Flash（0731 checkpoint 输出变得冗长 verbose），但控制接口需为全 provider 通用。**信号**：该 issue 已带 `scope: llm` 与 enhancement 标签，且由核心开发者提出，很可能进入 v1.3.0 或更近的迭代。

- **[#7520 Epic: retire superseded and unreachable WebUI frontend surfaces](https://github.com/nearai/ironclaw/issues/7520)** — 计划移除属于已退休的 v1/engine-v2 产品表面、或明确不在 Reborn WebUI 范围内的前端代码（Jobs 表面除外）。**信号**：项目正积极推进 Reborn WebUI 的代码清理，为后续设计系统落地腾出空间。

- **[#7044 Epic: Onboarding to channel-first approach](https://github.com/nearai/ironclaw/issues/7044)**（持续更新中）— 新用户首次进入 IronClaw 面对空白 WebUI，存在采用摩擦。该 Epic 规划了 channel-first 引导，后端 wiring issue（#6993）与前端原型 PR（#6994）均在推进。**信号**：新手引导是 v1.4.0 级别的产品重点。

**可能与下一版本相关**：#7537（thinking/effort 控制）与 #7044（OOBE）已在 PR 侧有对应实现（#7498 自动化建议卡片 V1 后端、#6994 前端原型），预计分别进入 v1.3.0 与 v1.4.0 迭代。

## 7. 用户反馈摘要

从今日 Issue 评论与报告中提炼的用户真实反馈：

**Telegram 渠道体验问题集中爆发**（QA 与真实用户混合反馈）：
- 媒体处理是最大痛点：GIF/sticker 可导致整个会话卡死（#7538），sticker 不被回应（#7546），文件无法作为附件发送（#7541）。用户期望 Telegram 渠道具备完整的媒体交互能力。
- 消息流顺序混乱（#7539）、长消息拆分丢失（#7540）影响对话连续性与信息完整性。
- 渠道感知缺陷（#7542）导致 agent 在 Telegram 中反问"是否要投递到 Telegram"，给用户带来明显困惑。
- 例行任务首次执行不投递（#7543）动摇了用户对自动化可靠性的信任。

**外部用户反馈（非 QA）**：
- **#7554**：Slack 产品反馈渠道报告的自定义 MCP 添加被验证错误阻塞，说明扩展机制对非技术用户仍有门槛。
- **#7517**：用户明确表达希望 Google/GitHub 账户能附加 NEAR 钱包 stake，当前认证与支付/质押路径割裂。

**WebUI 体验历史问题获得关注意味着修复推进**：
- **#6541（已关闭）**：WebUI 频繁 "Reconnecting" 提示困扰用户已久（7 月 23 日创建），今日关闭，说明该问题已有对应修复。
- **#7302（已关闭）**：工具调用失败时的"攻击性"错误展示已获改进，用户期望失败信息以更柔和的方式呈现，该 issue 今日关闭。

**整体评价**：用户对 WebUI 类问题（重连、工具失败展示）的修复感知良好，但 Telegram 渠道的体验缺陷数量多、覆盖场景广，已形成明显的负面体验聚集区，建议团队将该渠道作为近期稳定性专项。

## 8. 待处理积压

以下为长期未关闭或需维护者重点关注的项目：

**长时间未响应的功能/重构 Issue：**
- **[#6993 Backend wiring for the OOBE automation-tasks prototype](https://github.com/nearai/ironclaw/issues/6993)** — 8 月 1 日创建，OOBE 自动任务原型后端 wiring，属于 Epic #7044 的 Phase-1 后端部分，0 评论且两周无更新，但前端 PR #6994 仍在活跃，需确认后端排期。
- **[#7042 Design System — Phase 2: DESIGN.md governance & guidelines](https://github.com/nearai/ironclaw/issues/7042)** — 8 月 3 日创建，0 评论。对应 PR #7043 持续更新中，治理文档的评审路径不清晰。
- **[#7038 Epic: Storybook + an AI-first Design System](https://github.com/nearai/ironclaw/issues/7038)** — 8 月 3 日创建的超大型 Epic，PR #7039（Phase 1）与 #7043（Phase 2）均开放中，涉及 WebUI 产品方向，建议维护者明确阶段验收节奏。

**开放时间较长的 QA 问题：**
- **[#7451 Telegram agent sometimes incorrectly asks for credentials](https://github.com/nearai/ironclaw/issues/7451)** — 8 月 10 日创建，P2 级别已持续 3 天无修复 PR 关联，触发用户对凭据安全的担忧。
- **[#7508 GitHub MCP extension startup gives confusing endpoint verification prompt](https://github.com/nearai/ironclaw/issues/7508)** — 8 月 11 日创建，扩展配置提示矛盾，可能影响 GitHub MCP 扩展的实际采用。

**长时间开放的社区 PR 需关注：**
- **[#6994 feat(webui): OOBE automation-tasks prototype](https://github.com/nearai/ironclaw/pull/6994)** — 8 月 1 日创建，XL 规模且 off-by-default 标志保护，但已开放近两周，建议维护者加速评审或明确时间表。
- **[#7039 chore(webui): integrate Storybook + design-system catalog](https://github.com/nearai/ironclaw/pull/7039)** — 8 月 3 日创建，XL 规模，依赖 #6836（已合并）的落地，建议尽快安排评审。

**特别提醒**：#7360（压力测试覆盖扩展）作为史诗级质量基建 issue 已开放 6 天，其解决将直接影响内置能力写入路径的回归防护能力，建议在 v1.2.0 发布后优先规划。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-13

## 1. 今日速览

过去 24 小时 LobsterAI 的代码合并节奏明显加快，共 8 条 PR 更新，其中 7 条已合并/关闭，集中在渲染层 UI 优化、主进程插件安装机制和 Electron 平台兼容性修复上；Issue 侧 6 条更新中 4 条仍处于活跃状态，但绝大多数为 3 月底创建的历史遗留问题（stale 标记），新增报告几乎为零。整体来看，项目正处于一轮以质量修复和交互打磨为主题的密集发布周期，社区反馈侧则缺少新热点，存量问题的积压值得关注。

---

## 3. 项目进展

今日合并/关闭的 PR 在三个方向上推进了项目质量：

**UI / 交互打磨**
- [#2481 feat(sidebar): move task search to header actions](https://github.com/netease-youdao/LobsterAI/pull/2481)：将任务搜索从带标签的搜索入口改为纯图标操作，统一 macOS 与 Windows 的外观布局，并补充了诊断与回归测试覆盖。
- [#2482 feat: skills manager split mine builtin tabs](https://github.com/netease-youdao/LobsterAI/pull/2482)：技能管理器拆分“我的”与“内置”标签页，优化技能分类管理。
- [#2475 fix(model-selector): give each model its own thinking level](https://github.com/netease-youdao/LobsterAI/pull/2475)：修复模型选择器中“思考强度”为全局单一份、导致不同模型相互覆盖的 Bug，现每个模型可独立保存思考深度设置。

**平台兼容性与稳定性**
- [#2478 fix(shell): avoid unsupported large file icon size on macOS/Windows](https://github.com/netease-youdao/LobsterAI/pull/2478)：修复 `extractIcon` 在 macOS 上使用不受支持的 `large` 图标尺寸问题，改为仅 Linux 使用 `large`，其余平台回退 `normal`。
- [#2479 fix(plugins): preserve junctions during Windows install](https://github.com/netease-youdao/LobsterAI/pull/2479)：修复 Windows 上插件安装因跨卷符号链接导致 `EPERM` 失败的问题，将插件暂存到同卷用户扩展目录旁，并通过原子重命名保留 junction，同时增加了 manifest 校验与失败回滚能力。

**发布流程**
- [#2480 Release/2026.8.12](https://github.com/netease-youdao/LobsterAI/pull/2480)：8 月 12 日发布 PR，关联今日多项修复。

此外，[#1233（feat(model): 为模型提供商添加官网链接和 API Key 获取引导）](https://github.com/netease-youdao/LobsterAI/pull/1233) 于今日关闭，该 PR 基于 #731 的原始改动，修复了 Code Review 问题并合并了重复的 URL 配置表，是模型配置体验的长期改进。

**总体评价**：项目今日没有新功能模块上线，但通过批量合并修复 PR，在插件安装可靠性、跨平台体验一致性、模型配置精细化三个维度均完成了实质性的代码落地，属于典型的“发布前质量加固”节奏。

---

## 4. 社区热点

今日无评论数特别突出的 Issue 或 PR（绝大多数评论数为 0–2 条），整体社区讨论热度较低。相对而言，以下两个 Issue 获得了最多的关注（各 2 条评论）：

- [#1179 3.31版本强制沙箱怎么关？](https://github.com/netease-youdao/LobsterAI/issues/1179)：用户抱怨 3.31 版本强制启用沙箱且找不到关闭入口，只有回滚到 3.30 才能恢复正常。该诉求发布于 3 月底，至今已 4 个多月仍未解决，但今日被更新，说明仍有用户受影响。
- [#1236 [bug]插件 ID 不匹配警告](https://github.com/netease-youdao/LobsterAI/issues/1236)：启动 LobsterAI 时 `mcp-bridge` 插件配置的 entry key 与 manifest 声明的 ID 不匹配，每次 gateway 启动都会输出配置警告。该 Issue 今日被关闭（stale 自动关闭），但关闭状态可能不代表 Bug 已被实际修复，而是因长时间无活跃讨论被机器人清理。

**背后诉求分析**：沙箱强制启用但没有显式关闭入口，触及了用户对本地控制权的基本诉求；插件 ID 不匹配警告虽然不致命，但每次启动都刷日志，反映了配置校验环节对用户不够友好。两者均属于“功能强制/报错但缺乏透明机制”的类别，用户需要的是可控性和清晰的配置指引。

---

## 5. Bug 与稳定性

今日报告的 Bug 全部来自存量 Issues，按严重程度排列如下：

**高 — 隐私/安全性质疑**
- [#1173 卸载之后程序还能运行？？](https://github.com/netease-youdao/LobsterAI/issues/1173)：用户卸载 LobsterAI 后，已打开的应用窗口仍可继续运行并能向飞书发送消息，引发用户对是否存在后门的强烈质疑。目前无官方回复，也未见对应修复 PR。该问题对项目信任度伤害较大，建议优先回应。

**中 — 网关稳定性**
- [#1180 修改自建agent可能会触发网关反复重启 2026.3.31](https://github.com/netease-youdao/LobsterAI/issues/1180)：修改自建 agent 图标即可触发网关反复重启，删除该 agent 后恢复正常。截止今日仍无对应 fix PR。

**中 — 强制沙箱无关闭入口**
- [#1179 3.31版本强制沙箱怎么关？](https://github.com/netease-youdao/LobsterAI/issues/1179)：强制沙箱行为改变但未提供关闭选项，用户只能回滚旧版本。无修复 PR。

**低 — 配置警告（已关闭）**
- [#1236 插件 ID 不匹配警告](https://github.com/netease-youdao/LobsterAI/issues/1236)：`mcp-bridge` 插件 entry key 与 manifest ID 不一致导致启动警告。今日已关闭，但可能为 stale 自动关闭，修复状态待确认。

**低 — 定时任务创建错误（已关闭）**
- [#2071 创建定时任务错误](https://github.com/netease-youdao/LobsterAI/issues/2071)：2026.5.27 版本创建定时任务报错，附截图。今日已关闭，但同样疑似为 stale 自动关闭。

**今日新增 Bug**：无新增报告。PR 侧修复了 [#2475 思考强度互斥](https://github.com/netease-youdao/LobsterAI/pull/2475)、[#2478 macOS 文件图标崩溃/报错](https://github.com/netease-youdao/LobsterAI/pull/2478) 和 [#2479 Windows 插件安装 EPERM](https://github.com/netease-youdao/LobsterAI/pull/2479)，其中 #2479 修的 `EPERM` 属于安装路径上的实际稳定性问题，值得用户在 8.12 新版本中验证。

---

## 6. 功能请求与路线图信号

- [#1174 【Feature】增加多个自定义模型提供商](https://github.com/netease-youdao/LobsterAI/issues/1174)：用户希望支持同时保留多个自定义模型提供商，而非只能配置一个。该需求与今日合并的 [#2475（每个模型独立思考强度）](https://github.com/netease-youdao/LobsterAI/pull/2475) 方向一致，说明模型配置的灵活性和个性化正在成为近期迭代重点，多个自定义提供商的功能很可能被纳入后续版本。

- 另一个值得关注的信号是 [#2482 skills manager split mine builtin tabs](https://github.com/netease-youdao/LobsterAI/pull/2482)：技能管理器拆分“我的/内置”标签页，这一改动暗示技能体系正在向更精细的用户自管理方向演进，未来可能配合更多自定义技能相关的功能。

- 已关闭的 [#1233 模型提供商官网链接和 API Key 获取引导](https://github.com/netease-youdao/LobsterAI/pull/1233) 合入后，模型配置页面的引导能力进一步提升，暗示团队正在降低新用户配置模型的上手门槛——这与“多模型提供商”需求形成互补，预计模型配置体验仍将是近期迭代重点之一。

---

## 7. 用户反馈摘要

从今日更新的 Issues 评论中可提炼出以下真实用户声音：

- **不信任感累积**（#1173）：用户卸载后应用仍能运行和发送消息，直言怀疑“你们是不是在用户电脑上偷偷留后门准备操控电脑”。这种极端负面反馈虽然可能源于对卸载机制的误解（如卸载时未强制终止已运行的进程），但需要官方出面澄清机制原理，避免负面印象扩散。

- **对强制变更的不满**（#1179）：用户“半夜更新”后遭遇强制沙箱，找不到关闭入口，被迫回滚旧版本。“找不到关的按钮”反映的是变更缺少充分的用户告知和配置出口。

- **配置繁琐且易错**（#1236）：`mcp-bridge` 插件的 entry key 与 manifest ID 不匹配导致每次启动都警告，用户需要自行比对配置文件和插件声明，体验不够友好。

- **稳定性敏感度高**（#1180）：仅仅修改自建 agent 的图标就能触发网关反复重启，这类看似无关的操作为用户带来了显著的可靠性困扰。

- **对保留历史配置的诉求**（#1174）：用户希望弃用旧自定义模型提供商时能够保留其配置，体现的是对可逆操作和数据保留的需求。

整体而言，用户的痛点集中在：缺乏对强制行为的控制权、配置校验不够友好、以及小操作引发大故障的稳定性问题。值得注意，这些反馈大多来自 3 月底，至今已 4 个多月未得到官方回应，对用户耐心是较大的考验。

---

## 8. 待处理积压

以下为长期未响应或存续时间较长、但今日仍被更新的重要 Issue 和 PR，建议维护者优先关注：

**长期未解决的 Issues（均为 2026-03-31 创建，至今已 4.5 个月）**
- [#1179 3.31版本强制沙箱怎么关？](https://github.com/netease-youdao/LobsterAI/issues/1179) — 用户被迫回滚旧版，是直接的用户流失风险。
- [#1173 卸载之后程序还能运行？？](https://github.com/netease-youdao/LobsterAI/issues/1173) — 涉及用户信任与隐私质疑，拥有最高优先级回应的必要性。
- [#1174 增加多个自定义模型提供商](https://github.com/netease-youdao/LobsterAI/issues/1174) — 与当前模型配置迭代方向契合，建议纳入路线图正式评估。
- [#1180 修改自建agent可能会触发网关反复重启](https://github.com/netease-youdao/LobsterAI/issues/1180) — 稳定性 Bug，存在 4 个月以上无 fix PR。

**待合并的 PR（存在 4.5 个月）**
- [#1181 fix(cowork): hide OpenClaw main agent sessions from session list](https://github.com/netease-youdao/LobsterAI/pull/1181)：为 `cowork_sessions` 表添加 `hidden` 列，将内部使用的 OpenClaw 主 agent 会话从用户会话列表中隐藏，解决用户混淆问题。该 PR 自 4 月 1 日创建以来一直处于 OPEN 状态，今日仍有活动，但始终未被合并。这是一个独立完整的小功能，建议维护者评估合并可行性。

---

**健康度小结**：代码侧正处于积极发布期，Bug 修复和体验优化持续推进；但社区侧的存量问题已出现明显“陈年化”趋势，多个用户直接质疑类 Issue 长期无官方回应，而 stale 机制自动关闭了部分可能未修复的问题，存在“关闭≠解决”的风险。建议优先处理 #1173 的信任危机和 #1180 的网关稳定性问题，并尽快评估 #1181 PR 的合并——它已等待超过四个月。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-13

> 数据来源：GitHub（agentscope-ai/CoPaw，历史数据指向 QwenPaw 仓库）
> 统计时段：过去 24 小时（截至 2026-08-13）

---

## 1. 今日速览

过去 24 小时 CoPaw（QwenPaw）项目保持**高活跃度**：共更新 29 条 Issue（22 条活跃、7 条关闭）、42 条 PR（15 条合并/关闭、27 条待处理），并发布了 **v2.1.0-beta.4** 新版本。值得关注的是，今日**集中爆发出多个稳定性与体验类问题**：多步骤任务无故中断（#6921）、多子 Agent 死循环（#6927）、网络恢复后无法自动重连（#6932）、启动概率性崩溃（#6955）等，反映出用户对 2.1.0 beta 的可靠性有较高期待。正面信号是，多个核心 bug 已有对应修复 PR（#6938、#6936、#6947、#6942），且首次贡献者活跃度上升（#6953、#6940、#5869 等）。整体看，项目正处于 **beta 密集迭代、社区反馈量大的阶段**，需要维护者优先消化高影响 bug。

---

## 2. 版本发布

### v2.1.0-beta.4（2026-08-12 发布）

**更新内容：**

- `fix(files):` 修复文件预览及暗色模式样式问题（PR #6915，@rayrayraykk）
- `fix(tools):` 修正 `read_file` 工具的描述文本（PR #6898，@AntiQuality）
- `chore:` 版本号升级至 2.1.0b4

**破坏性变更：** 无，属于常规迭代版本。

**迁移注意事项：** 没有需要特殊处理的数据迁移或配置变更。使用 `pip` 安装的用户可直接升级。beta.3 用户建议关注 #6946（Release Duty 安装验证）的通过情况。

🔗 [Release 详情](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.4) | [v2.1.0-beta.3 Release Duty](https://github.com/agentscope-ai/QwenPaw/issues/6914)

---

## 3. 项目进展

今日共有 15 条 PR 合并/关闭，其中值得关注的合并如下：

- **fix(chats): handle dict-like model responses (#6813)**（[PR #6816](https://github.com/agentscope-ai/QwenPaw/pull/6816)）— 修复 `consume_model_response()` 在 AgentScope 2.x `ChatResponse`（dict 子类）上以 `hasattr(response, "__aiter__")` 判断流式响应导致的 `KeyError('__aiter__')`，解决了聊天自动标题生成持续失败的问题。这是对一个已关闭 Issue 的完整闭环。

- **fix(agents): sanitize tool messages before model calls**（[PR #6540](https://github.com/agentscope-ai/QwenPaw/pull/6540)）— 修复 #6407：孤儿工具结果（因上下文压缩或加载旧状态导致对应 tool call 被驱逐）可能传给 OpenAI 兼容 provider 引发报错。该 PR 确保每次中间件变更后、每次模型请求前工具消息都被清洗。

- **fix(computer-use): improve macOS element activation**（[PR #6913](https://github.com/agentscope-ai/QwenPaw/pull/6913)）— 修复 macOS Computer Use 在瞬态菜单和复合无障碍元素激活上的问题，避免调用元素前提升窗口导致菜单被关闭。

- **fix(creator): compose-gate scene auto-rereview, DAG production hardening…**（[PR #6937](https://github.com/agentscope-ai/QwenPaw/pull/6937)）— 聚合 Creator 分支多项修复：调度驱动的生产流水线防卡死与防重复计费、final-compose 门自愈、运动厂商运行时启动引导、插件打包 fail-closed。

- **chore: update the release notes for v2.1.0**（[PR #6944](https://github.com/agentscope-ai/QwenPaw/pull/6944)）— 更新 v2.1.0 发布说明。

**总结：** 今日合并的 PR 主要覆盖了模型响应兼容性、工具消息清洗、macOS 端改进和 Creator 生产流水线加固，整体是在为 v2.1.0 正式版做稳定性收尾。此外，另有 27 条 PR 仍在流程中，其中多涉核心功能（见下文）。

---

## 4. 社区热点

今日讨论最活跃的 Issues/PRs 如下：

- **[#6853] prompts.py lies to agents: Dream writes to digest/ not MEMORY.md**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6853)，5 评论）— 用户发现 `prompts.py` 中英文提示词声称周期性 Dream 流程会自动将 digest 同步进 `MEMORY.md`，但实际代码从未实现过这一行为。这是一个**提示词与实现不一致**的问题，会误导 Agent 对自身记忆能力的判断。已有 PR #6942 专门修复。

- **[#6921] 多步骤任务经常无提示自动停止**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6921)，5 评论）— 用户报告在 2.1beta2 上执行多步骤任务时，LLM 输出类似“Now 2.1, 3.1, 3.2. Let me do all three.”后便停止且无任何提示，需要用户说“继续”才会接着干。**这是今日最受关注的行为异常**，直接影响核心 Agent 体验，暂未见对应修复 PR。

- **[#6839] MCP 工具调用将数字字符串以数字类型传参**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6839)，4 评论）— 模型在调用 MCP 工具时，把 schema 中声明为 `string` 的参数（如 `"1.000001"`）以 JSON number 发送，导致 `jsonschema.validate` 拒绝——**已有对应修复 PR #6936**。

- **[#6924] 自定义频道插件在 2.0.x 后失去交互配置入口**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6924)，4 评论）— 用户抱怨 2.0 之前安装自定义频道后 channel config 会出现独立配置入口，2.0 后被限制。回应：**PR #6943 已提交**，计划恢复插件频道 `get_configurator()` 支持。

- **[#6847] QwenPaw 被杀软拦截（对比 WorkBuddy 不会）**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6847)，4 评论）— 同一任务在 QwenPaw 上执行时会被杀软强制关停，涉及 Windows Defender 等拦截。此类误报若高频出现，会拉低用户对项目安全性的信任。

- **[#6780] 空闲后 QwenPaw 卡死，只能重启**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6780)，4 评论）— 2.0.1 版本在闲置几十分钟后自锁，需手动结束进程。该问题从 8 月 7 日提交至今仍未解决，维护者应优先排查。

- **[#6928] 历史消息无法回滚 + 输入栏选中编辑会删后续内容**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6928)，4 评论）— 2.1.0b3 的 UI 问题，涉及两个独立交互缺陷。

**总结：** 社区讨论集中在三类诉求：① 核心 Agent 执行稳定性（#6921、#6927）；② 自定义扩展能力回退（#6924）；③ UI/交互细节（#6928、#6826）。

---

## 5. Bug 与稳定性

今日报告的 Bug/崩溃按严重程度排序如下：

### 🔴 高严重度（影响核心功能，需优先处理）

- **[#6927] 调用多个子 Agent 执行任务时多次死循环**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6927)）— 2.1 beta3，多子 Agent 协作陷入死循环。无对应 PR。
- **[#6921] 多步骤任务无提示自行停止，需说“继续”才继续**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6921)）— 2.1beta2，Windows 11。无对应 PR。
- **[#6932] 网络中断恢复后无法自动重连，必须重启进程**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6932)）— 2.0.1，网络恢复后所有 LLM 请求持续 `httpx.ConnectTimeout`，一天复现两次。无对应 PR。
- **[#6955] 概率性启动报错、崩溃退出**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6955)）— 2.0.1，pip 安装，Windows Python 3.13，asyncio 事件循环相关崩溃。无对应 PR。
- **[#6916] 插件可静默创建 cron 任务并注入用户可见消息（安全漏洞）**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6916)）— 2.1.0b3 中从 Agentscope 市场安装的插件无需用户确认即可创建定时任务、向会话注入消息，中高严重度权限模型缺陷。无对应 PR，建议尽快评估修复。
- **[#6780] 闲置几十分钟后 QwenPaw 自锁**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6780)）— 2.0.1，持续多日未解决。

### 🟠 中严重度（功能损坏或数据展示错误）

- **[#6951] Scroll 压缩后重进会话，压缩前聊天记录不可见**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6951)）— 压缩应只影响模型输入，不应破坏用户可见的完整 transcript。无对应 PR。
- **[#6839] MCP 工具字符串参数被强制转成数字导致调用失败**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6839)）— **已有修复 PR #6936**。
- **[#6826] 助手消息结束时间显示异常（2 分钟任务显示几秒）**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6826)）— **已有修复 PR #6938**。
- **[#6918] Agent 间消息每发一条就新建一个会话，导致“影子实例”并发**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6918)）— 由 AI agent 代笔提交的 bug 报告，描述清晰，值得重点关注。无对应 PR。
- **[#6948] 管理后台对话时间显示 UTC 而非用户配置时区**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6948)）— 2.0.x。无对应 PR。
- **[#6945] 智能模式下写入沙盘之外的文件失败**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6945)）— 需确认是否为预期行为（智能模式是否仅限审批）。
- **[#6926] sync.py 以随机 UUID 而非真实 session_id 导入历史，导致 18–50% 行孤立**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6926)，已关闭）— 注意该问题虽已关闭，但涉及到数据完整性，建议确认是否已在代码中修复。

### 🟡 低严重度（体验/显示问题）

- **[#6928] 历史消息无法滚动查看 + 输入栏选中编辑误删后续内容**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6928)）
- **[#6883] 日记页面子文件夹笔记被归到错误日期**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6883)）— 文件树分组逻辑错误。
- **[#6847] 杀软（Defender 等）经常强制关停 QwenPaw 进程**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6847)）— 需要排查可执行文件/行为是否触发误报。
- **[#6852] 前端渲染器将长多行工具输出折叠为不可读文本块**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6852)，已关闭）
- **[#6872] 旧版本（pre-2.0）本地路径媒体源的会话无法加载**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6872)，已关闭）— 关注是否已加入迁移逻辑。
- **[#6813] 聊天自动标题生成持续 `KeyError: '__aiter__'`**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6813)，已关闭）— **已由 PR #6816 修复并合并**。

---

## 6. 功能请求与路线图信号

- **Agent 主动投递报告至收件箱（Inbox）**（[#6917](https://github.com/agentscope-ai/QwenPaw/issues/6917)）— Agent 目前无法把普通报告/消息投递到固定收件箱，只能发到聊天流中。用户希望有一个“固定、不滚动、带未读红点”的集中落点。这是一个**明确的产品需求信号**，可能纳入后续版本规划。

- **恢复插件频道的交互式配置器**（[#6924](https://github.com/agentscope-ai/QwenPaw/issues/6924)）— **已有 PR #6943 提交**，下一 beta 有望合入。

- **智能体协作会话应保持单一窗口**（[#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925)）— 用户对“每次协作创建新会话 + 需手动切换智能体查看对话”的模式不满意，希望在一个会话窗口内完成协作。与 #6918（每个 inter-agent 消息创建新 session）是同一个方向的问题。

- **per-session 模型覆盖（Per-session model overrides）**（[PR #5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)）— 允许单个 Agent 在不同会话使用不同 LLM，默认关闭不影响现有行为。已处于 Under Review 一个多月，若合入将是自定义能力的重要增强。

- **LLM prefix cache 稳定性优化**（[#6952](https://github.com/agentscope-ai/QwenPaw/issues/6952) + [PR #6953](https://github.com/agentscope-ai/QwenPaw/pull/6953)）— 通过排序工具 schema、拆分 env_context 来稳定 KV 缓存前缀，减少重复轮次的无效推理。说明项目开始关注**推理成本与延迟优化**。

- **原生 DataPaw 应用运行时与持久分析工作区**（[PR #6940](https://github.com/agentscope-ai/QwenPaw/pull/6940)）— 将 QwenPaw-Data 作为原生应用引入，定位数据分析方向的深度集成。

- **LongHorizon-Harness 方向建议**（[#6923](https://github.com/agentscope-ai/QwenPaw/issues/6923)）— 社区用户推荐“单任务多轮无状态漂移”的长程任务框架，可能为长任务稳定性提供参考。

- **系统命令在全部 UI 的斜杠自动补全中暴露**（[PR #5869](https://github.com/agentscope-ai/QwenPaw/pull/5869)) — 让 TUI、Web Console、ACP 客户端都能看到 `/dream`、`/memorize` 等命令的自动补全。已挂起一个多月，建议尽快决定合入或关闭。

- **以文件夹为对话基础的工作区模式**（[#6929](https://github.com/agentscope-ai/QwenPaw/issues/6929)，已关闭）— 用户提出类似 Codex 的文件夹级对话、选中文件内容加入对话框等构想。虽然该 issue 被标记 invalid/closed，但其中包含的“选中内容添加为对话上下文”诉求值得产品侧参考。

---

## 7. 用户反馈摘要

从今日活跃的 Issue 评论中提炼以下真实用户反馈：

- **多步骤任务中断是当前最伤体验的问题**（[#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)）：用户给出的失败消息全部是“规划完成、尚未执行”的状态，说明模型在规划与执行之间丢失了继续执行的动力或上下文。用户原话记录显示需要不断输入“继续”，交互成本很高。

- **“沙盘”的权限概念让用户困惑**（[#6945](https://github.com/agentscope-ai/QwenPaw/issues/6945)）：用户问“智能是不是只能审批呢”，说明当前智能模式对沙盘外写入失败的提示与预期管理不足，用户无法理解为何失败以及如何授权。

- **协作模式会话碎片化**（[#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925)、[#6918](https://github.com/agentscope-ai/QwenPaw/issues/6918)）：多 Agent 协作时“一次创建一次新会话”且需手动切换查看，严重影响多智能体工作流的可读性。其中 #6918 由用户的 agent 代笔，指出每个 inter-agent 消息都会新建会话并产生**并发影子实例**，可能导致重复操作。

- **网络瞬断场景未被纳入容错设计**（[#6932](https://github.com/agentscope-ai/QwenPaw/issues/6932)）：用户认为“网络中断是常见、正常的瞬态事件”，期望恢复后自动重连，结果必须手动重启。说明 QwenPaw 在长驻服务场景下的健壮性仍需加强。

- **历史记录可回溯性是用户刚需**（[#6951](https://github.com/agentscope-ai/QwenPaw/issues/6951)、[#6928](https://github.com/agentscope-ai/QwenPaw/issues/6928)）：多个用户反映压缩后原始记录不可见、历史消息无法滚动查看。上下文压缩不应以牺牲用户可读记录为代价。

- **杀软误伤影响信任**（[#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847)）：用户在对比“同样的任务和模型，WorkBuddy 不会”时侧面表达了对 QwenPaw 安全性的担忧。如果 Windows Defender 持续拦截，会直接劝退 Windows 用户。

---

## 8. 待处理积压

以下为长期未响应/未解决的高价值事项，提醒维护者关注：

### 长期未合入的 PR（按等待时长排序）

- **[#5869] feat(console, tui): expose system commands in slash autocomplete across all UIs**（[PR](https://github.com/agentscope-ai/QwenPaw/pull/5869)）— 首次贡献者，7 月 8 日创建，已待审 **36 天**。功能小而实用，长期滞留会打击贡献者积极性。
- **[#5992] Add per-session model overrides**（[PR](https://github.com/agentscope-ai/QwenPaw/pull/5992)）— 首次贡献者，7 月 12 日创建，已待审 **32 天**。属于高频需求方向，建议维护者明确合入意向并推动完成。
- **[#6623] fix(acp): prevent final text loss when notifications race the prompt response**（[PR](https://github.com/agentscope-ai/QwenPaw/pull/6623)）— 首次贡献者，8 月 1 日创建，已待审 **12 天**。修复 ACP 传输层的竞态问题。
- **[#6715] feat(onebot): localize inbound media before agent processing**（[PR](https://github.com/agentscope-ai/QwenPaw/pull/6715)）— 8 月 5 日创建，已按 review 意见修订，待二次评审。
- **[#6818] fix(summary): honor disable_thinking and interruption (#6811)**（[PR](https://github.com/agentscope-ai/QwenPaw/pull/6818)）— 8 月 8 日创建，涉及摘要生成与中断处理，影响对话续接质量。

### 长期未解决的 Issue

- **[#6780] 空闲后 QwenPaw 卡死只能重启**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6780)）— 8 月 7 日报告，至今无维护者回复，用户已等待 6 天。
- **[#6847] 执行任务被杀软强制关停**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6847)）— 8 月 9 日报告，无维护者回复。
- **[#6916] 插件静默创建 cron + 注入消息（安全）**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6916)）— 8 月 11 日报出的权限模型漏洞，建议尽快评估定级并给出修复计划。

### 今日新增但尚无响应的重要 Issue

- **[#6955] 概率性启动崩溃**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6955)）— 仅 1 小时后即有反馈，但暂无维护者介入。
- **[#6932] 网络恢复后无法自动重连**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6932)）— 高影响，一天复现两次，尚无响应。

---

## 附：项目健康度评估

| 维度 | 状态 | 说明 |
|------|------|------|
| 活跃度 | 🟢 高 | 24h 内 29 Issues / 42 PRs / 1 Release |
| 社区参与 | 🟢 高 | 新贡献者 PR 增多（#6953、#6940、#5869 等），issue 讨论质量较高 |
| Bug 修复速度 | 🟡 中 | 部分 bug 快速闭环（#6813→#6816），但核心稳定性问题（#6921、#6927、#6932）无 PR |
| 维护者响应 | 🟡 中 | 多处 issue 数日无官方回复（#6780、#6847、#6916） |
| 版本稳定性 | 🟡 Beta 波动 | 2.1.0-beta.x 阶段，多步骤执行、协作并发、UI 交互问题集中暴露 |

---

*本日报由 AI 分析师自动生成，数据基于 GitHub 公开信息，链接指向原始 issue/PR。客观呈现项目动态，不对项目质量做定性评价。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-13

## 1. 今日速览

过去 24 小时 ZeroClaw 项目保持高活跃度：共 50 条 Issue 更新（45 条活跃、5 条关闭）和 50 条 PR 更新（36 条待合并、14 条已合并/关闭），无新版本发布。开发重心明显向 **Windows 与 macOS 跨平台支持** 倾斜——Windows 上 74 个测试失败的追踪 #7462 已获 14 条讨论成为今日最热 Issue，且配套的 CI 扩展 PR #9398 与 PowerShell 原生支持 PR #9182 也已合并或接近合并，显示平台兼容性修复正从问题识别阶段全面进入落地阶段。同时，多条长期追踪的核心架构问题（响应缓存边界、cron 交付、JSON-RPC 双向路由）在今日获得合并或关键推进，项目健康度良好，但 36 条待合并 PR 中仍有大量高危/大尺寸改动等待维护者审核，存在一定的合并积压压力。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 项目进展

今日共有 14 条 PR 被合并/关闭，是近期合并量较高的一天。以下按主题归纳关键合并（包括过去数日合并、今日更新状态的重要 PR）：

### 平台兼容性加固
- **[PR #9182] feat(runtime): support PowerShell as the native shell on Windows**（已合并）— 在 Windows 上支持将 `powershell`/`pwsh` 作为原生 shell 执行，同时保留 `cmd.exe /C` 作为默认路径，解决 Windows 用户无法使用 PowerShell 作为 agent 运行时 shell 的长期缺口。标签包含 `runtime:wasm`、`tool:shell`、`security:policy`，属跨模块改动。
- **[PR #9398] ci(tests): add advisory macOS and Windows tests**（待合并，不阻塞）— 增加 macOS/Windows 测试覆盖，维护者明确标注当前分支暂含 #9660 的托管 Windows 验证，待 #9660 落地后重建分支，属于跨平台 CI 矩阵工作的前置部分。

### ZeroCode/UX 改进
- **[PR #9692] feat(zerocode): show live run-status icons on the SOP pane list**（已合并）— 在 SOP 面板列表每行增加实时状态图标（🟢 完成/🟡 运行中/🔵 等待审批/🔴 失败），由 `sops/runs` 轮询驱动，对应 Issue #9684。
- **[PR #9877] fix(cli): make cron scheduling help examples runnable**（已合并）— 修正 `cron` 父命令及 `add-at`、`add-every`、`once` 子命令的帮助示例，使其可直接运行，关闭 Bug #9796。

### 运行时稳定性修复
- **[PR #9720] fix(runtime): enforce response cache request boundaries**（已合并）— 在最终请求进入 observers/model provider 之前应用 modifying/cancelling hooks，将本地全响应缓存限制在无活跃变更的确定性请求上，修复缓存污染问题。
- **[PR #8902] fix(runtime): route bidirectional JSON-RPC responses**（已合并）— 将合法 JSON-RPC success/error/explicit-null 响应路由至 daemon 的 pending outbound caller，修复 ZeroCode ask-user 和 poll 交互无法完成的问题。
- **[PR #9701] feat(gateway): keep chat WebSockets alive**（已合并）— 新增 `[gateway].websocket_ping_interval_secs` 配置，服务端在空闲与 agent 流式输出期间发送 Ping 帧，防止 Web UI 聊天 WebSocket 被中间层断开。

### 文档与基础设施
- **[PR #9778] docs(foundations): reconcile revision histories**（已合并）— 统一 FND-001 至 FND-006 的修订元数据与本地历史，补齐此前遗漏的修订行。

今日合并呈现“一横一纵”两个推进方向：横向扩展平台支持（Windows/PowerShell、跨平台 CI），纵向加深 ZeroCode 交互体验（SOP 状态可视化）与运行时正确性（缓存边界、JSON-RPC 路由）。整体而言，项目在跨平台成熟度与 agent 可观测性两条主线上均有实质进展。

---

## 4. 社区热点

### 最热 Issue：#7462 — Windows 测试失败（14 条评论）
**[Issue #7462] [Bug]: 74 test failures on Windows — Unix-only test commands, path semantics, console encoding**
https://github.com/zeroclaw-labs/zeroclaw/issues/7462

当前 master 分支在 Windows 11（简体中文，代码页 936）上运行测试套件产生 **74 个失败**，涉及 Unix-only 测试命令、路径语义、控制台编码三类根因。CI 未捕获此问题是因为 Test job 仅在 Linux 上运行——这与姊妹 Issue #7461（请求将 CI 扩展至 Windows/macOS 矩阵）形成了高度呼应的“发现问题→修复基础设施”链条。14 条评论说明社区对跨平台支持有强烈诉求，且已有贡献者（NiuBlibing）同时提交了平台 CI 扩展 PR #9398。

### 高讨论度 Issue：#8692 — 维护者决策队列（13 条评论）
**[Issue #8692] [Tracker]: Maintainer decision queue for RFCs and design issues**
https://github.com/zeroclaw-labs/zeroclaw/issues/8692

该 tracker 汇总需要 maintainer 或 code-owner 在 acceptance/rejection/deferral 之间做出决策的 RFC、设计问题和发布策略问题。13 条评论表明社区对设计决策流程的关注度高，也可能反映出部分设计问题长期悬而未决、需要更明确的决策机制。

### 高讨论度 Issue：#8832 与 #9101（各 9 条评论）
- **[Issue #8832] [Feature]: Plugin-owned Kanban board for agent work** — 提议以插件自有领域实现 Kanban 看板，由宿主提供通用能力，插件拥有卡片语义（工作流阶段、转换规则、依赖、评论等）。9 条评论显示社区对 agent 协作可视化有真实兴趣。
- **[Issue #9101] [Feature]: Consolidate release attestation mechanisms** — v0.8.3 发布中同时存在三套 provenance/签名机制（cosign、GitHub artifact attestations、slsa-github-generator），造成 CI 时间浪费与资产冗余（53 个发布资产 → 目标约 20 个）。9 条评论反映维护者和贡献者对发布流程精简化的共识。

### 跨平台支持：从 Issue 到 PR 的社区合力
#7462（测试失败）、#7461（CI 矩阵）、#7910（Windows 自更新测试）与 PR #9398（advisory macOS/Windows tests）构成一个完整的“发现→跟踪→修复”链条，是当前社区最集中的协作方向之一。

---

## 5. Bug 与稳定性

按严重程度从高到低排列：

### S1 — 工作流阻断（Workflow Blocked）

- **[Issue #9207] web_fetch 对压缩响应（gzip/brotli/deflate）返回乱码二进制数据**（P1，`status:in-progress`，5 条评论）
  https://github.com/zeroclaw-labs/zeroclaw/issues/9207
  Agent 在抓取压缩内容时拿到无法解析的二进制数据，直接阻断基于 web 的内容获取工作流。已有 5 条评论，标记为 `in-progress`，尚未见对应 fix PR。

- **[Issue #9290] Windows 桌面安装程序启动失败，缺少 TaskDialogIndirect**（P1，`status:accepted`，1 条评论）
  https://github.com/zeroclaw-labs/zeroclaw/issues/9290
  从 v0.8.3 下载的 `ZeroClaw-windows-x64.exe` 安装后桌面端无法启动。S1 严重度但仅 1 条评论，可能是较新报告，需维护者尽快确认。

- **[Issue #7527] macOS 桌面应用可重新打开空白或无窗口**（P1，`r:needs-repro`，`needs-author-action`，2 条评论）
  https://github.com/zeroclaw-labs/zeroclaw/issues/7527
  用户报告权限检测异常、响应丢失、重启后窗口消失（macOS 15.7.7）。标记为 `needs-repro` 且已 `needs-author-action`，6 月创建至今未复现成功，有“悬而未决”风险。

### S2 — 行为降级（Degraded Behavior）

- **[Issue #7462] Windows 上 74 个测试失败**（P1，`status:accepted`，14 条评论）
  https://github.com/zeroclaw-labs/zeroclaw/issues/7462
  详见“社区热点”。已有关联 PR #9398 推进 CI 矩阵扩展，但测试本身的修复尚未有明确 PR 认领。

- **[Issue #9340] CLI 创建的 cron 任务输出被硬编码为 None 丢弃**（P1，✅ **已关闭**）
  https://github.com/zeroclaw-labs/zeroclaw/issues/9340
  已确认根因（`add_agent_job` 的 `delivery: Option<DeliveryConfig>` 在 CLI 路径传 None）并修复关闭，属于今日清除的稳定性债务。

- **[Issue #9796] cron 父命令帮助打印无效示例**（P2，✅ **已关闭**）
  https://github.com/zeroclaw-labs/zeroclaw/issues/9796
  由 PR #9877 修复，帮助文本现可直接运行。

- **[Issue #9198] Discord typing 指示器在 daemon reload 后卡死**（P2，`status:accepted`，4 条评论）
  https://github.com/zeroclaw-labs/zeroclaw/issues/9198
  从 dashboard reload daemon 后，“正在输入…”指示器永久卡住。S3 严重度但对 Discord 用户体验影响明显，已接受待修。

### S3 — 次要问题

- **[Issue #9202] `zeroclaw desktop` 命令使用失效下载 URL 且无法检测已安装的 AppImage**（P2，`in-progress`，2 条评论）
  https://github.com/zeroclaw-labs/zeroclaw/issues/9202
  已安装的 AppImage 未被识别，且引导用户访问的下载 URL 已失效。

### 安全相关积压

- **[Issue #9899] RUSTSEC-2026-0247（bitmaps 3.2.1）追踪移除**（P1，`status:blocked`，3 条评论）
  https://github.com/zeroclaw-labs/zeroclaw/issues/9899
  `cargo deny check` 因 Matrix SDK dev-dependencies 引入的 `bitmaps` 漏洞告警而失败，当前因依赖链原因被阻塞，需要上游或替代方案。这是当前唯一阻塞安全 CI 的未解决问题。

---

## 6. 功能请求与路线图信号

### 高概率进入下一版本（已有实现或明确接受）

- **跨平台 CI 矩阵与 Windows 测试修复**（#7461 + #7462 + #7910 + PR #9398/#9182）— Windows 支持已从“要不要做”进入“怎么做”阶段，PR #9182 已合并，PR #9398 待 #9660 落地后重建。预计 v0.9.0 会显著提升 Windows 一等公民地位。
- **响应缓存策略统一**（#8321 + 今日合并的 PR #9720）— 缓存边界问题已修复并合并，但更广泛的策略定义（#8320/#8321）仍在讨论中，属于下一阶段架构工作。
- **发布认证机制整合**（#9101）— 已有 9 条评论且被 `status:accepted`，三套签名机制整合为“一个 signing story”是明确的发布工程质量改进方向。

### 中期路线图信号（已接受/讨论中）

- **SearXNG 搜索支持与 web 搜索可靠性**（#5316，6 条评论）— 涵盖 DuckDuckGo CAPTCHA 检测、SearXNG 作为隐私友好 provider，与今日 #9207（web_fetch 压缩乱码）叠加后，web 工具链的可靠性是明确改进方向。
- **插件自有 Kanban 看板**（#8832，9 条评论）— agent 工作可视化的 RFC，已含较完整的设计框架（插件拥有语义、宿主提供能力），处于讨论深化阶段。
- **ZeroCode LSP 支持**（#5907，6 条评论）— 4 月创建，`needs-author-action`，作者需更新方案适配当前 master。
- **统一 slash-command 注册表**（#7929，7 条评论）— 解决 web UI/ZeroCode TUI/channel 三套命令列表漂移问题，属架构一致性改进。

### 需作者/维护者推进的需求

- **Schema 校验的内存整合与有界 fallback**（#6998，6 条评论，`needs-maintainer-review`）— 当前 JSON fallback 路径在跨 provider 场景下脆弱，需维护者审核设计。
- **响应缓存策略定义**（#8321，3 条评论）— 需明确 `current date/time`、memory recall、channel turn context 等 volatile 上下文是否可缓存，属于影响多模块的基础决策。
- **执行树迭代预算所有权**（#9323，4 条评论，`needs-author-action`）— 当前 `ToolLoop.shared_budget` 在所有生产路径均为 `None`，实际未生效。

---

## 7. 用户反馈摘要

### 跨平台痛点（最集中）
Windows 与 macOS 用户的声音在今日数据中占比最高：
- **Windows 测试失败**（#7462）：用户 NiuBlibing 详细列出 74 个测试失败的三大类根因（Unix-only 命令、路径语义、代码页 936 控制台编码），反映非 UTF-8 环境下运行 Rust 项目的真实困难。
- **macOS 桌面应用空白/无窗口**（#7527）：用户报告权限检测失败、响应丢失、重启后窗口消失，属于直接影响可用性的反馈，但当前状态为 `needs-repro`，说明项目方仍未在测试环境复现，用户可能处于“报告了但无人跟进”的状态。
- **Windows 安装程序启动失败**（#9290）：用户附截图证明 TaskDialogIndirect 缺失导致桌面应用无法启动，S1 严重度。

### 功能使用中的真实困扰
- **web_fetch 压缩乱码**（#9207）：用户请求 agent 抓取 `https://f...`（截断）时获得二进制垃圾数据，这是具体可复现的使用场景问题。
- **cron 输出被丢弃**（#9340，已关闭）：用户指出“run recorded as ok, but result went nowhere”——即系统显示成功但实际上结果被静默丢弃，这类“假成功”问题对用户信任伤害较大。
- **Discord typing 卡死**（#9198）：用户描述 reload daemon 后指示器永久卡住，虽 S3 但影响真实使用体验。
- **AppImage 检测失败 + 失效下载链接**（#9202）：用户安装后应用无法被命令行识别，且引导链接已失效，属于文档/产品细节的“最后一公里”问题。

### 社区协作正面反馈
- 部分用户承担了“提出问题 + 贡献代码”的双重角色：如 NiuBlibing 同时报告 #7462 并提交 CI 扩展 PR #9398；cakeni 报告 #9796 后迅速提交修复 PR #9877。这显示项目具备良好的 contributor 转化路径。

---

## 8. 待处理积压

### 高危/长期未决（需优先关注）

- **[Issue #7527] macOS 桌面应用空白/无窗口**（P1，`r:needs-repro`，`needs-author-action`，6 月创建，2 个月未复现）
  https://github.com/zeroclaw-labs/zeroclaw/issues/7527
  长期搁置的 S1 问题。建议维护者主动联系用户提供日志/系统信息，或标记为“暂无法复现”以明确状态。

- **[Issue #6653] 模拟安装的 host 架构策略**（P3，`needs-author-action`，5 月创建，3 个月未更新）
  https://github.com/zeroclaw-labs/zeroclaw/issues/6653
  PR #5086 已过时，作者需确认是否仍希望在当前 master 基础上推进。类似的 `needs-author-action` 积压还有 **#5907**（LSP 支持，4 月创建）、**#7929**（slash-command 统一，6 月创建）、**#8367**（能力就绪状态，blocked）、**#9323**（执行树预算，7 月创建）。

- **[Issue #9899] RUSTSEC-2026-0247 bitmaps 安全告警**（P1，`status:blocked`）
  https://github.com/zeroclaw-labs/zeroclaw/issues/9899
  唯一阻塞安全 CI 的问题，当前被依赖链卡住。需维护者决策：升级 Matrix SDK、替换依赖或接受 waiver 的替代方案。

### 大型 PR 等待审核（风险高、尺寸 XL）

- **[PR #8713] fix(tools): add allowed_private_hosts opt-in to file_download SSRF gate**（`needs-author-action`，risk:high，size:XL）
  https://github.com/zeroclaw-labs/zeroclaw/pull/8713
  涉及 SSRF 防护的 `file_download` 工具增强，7 月创建至今仍待审核，安全相关改动不宜久拖。

- **[PR #9544] fix(delegate): honor configured provider fallbacks**（`needs-author-action`，risk:high，size:XL）
  https://github.com/zeroclaw-labs/zeroclaw/pull/9544
  修复 delegate 工具不遵守 provider fallback 配置的问题，涉及 `provider:router`、`provider:reliable` 等多个核心模块，属 agent 可靠性关键路径。

- **[PR #8337] feat(observability): herdr agent reporting integration**（risk:high，size:XL）
  https://github.com/zeroclaw-labs/zeroclaw/pull/8337
  6 月创建至今已近 2 个月，新增 opt-in Herdr 生命周期上报，属可观测性基础设施扩展，需评估是否纳入下一版本。

### 阻塞中的工作

- **[PR #9398] ci(tests): add advisory macOS and Windows tests**（`status:blocked`，`stacked`）
  https://github.com/zeroclaw-labs/zeroclaw/pull/9398
  依赖 #9660 合并后重建分支，当前不应合并其 head。维护者需跟踪 #9660 的进度以解锁此 PR。

- **[Issue #9511] Semgrep findings 以 PR 评论形式呈现**（P2，`status:blocked`，`status:accepted`）
  https://github.com/zeroclaw-labs/zeroclaw/issues/9511
  已接受但被阻塞，SARIF 仅上传 Security tab 导致贡献者不常查看的问题仍待解决。

---

*报告生成时间：2026-08-13 | 数据来源：ZeroClaw GitHub 仓库（github.com/zeroclaw-labs/zeroclaw）*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*