# OpenClaw 生态日报 2026-05-20

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-20 00:27 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 | 2026-05-20

---

## 1. 今日速览

OpenClaw 今日呈现**极高活跃度**：24小时内 Issues 与 PR 各更新 500 条，但**合并率极低**（PR 仅 35/500 完成，Issues 关闭率 10%），表明社区涌入大量新报告的同时，代码审查与合并管道严重拥堵。v2026.5.19-beta.2 发布聚焦代理架构规范与依赖升级，未引入重大功能。核心风险集中在 **Windows UI 回归**、**会话状态膨胀导致 OOM**、**多平台消息投递可靠性**三大领域，多个 P1 级 Bug 仍待修复 PR 验证。

---

## 2. 版本发布

### [v2026.5.19-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.19-beta.2)

| 维度 | 详情 |
|:---|:---|
| **发布日期** | 2026-05-19 |
| **变更范围** | 代理架构规范 + 依赖升级 |
| **关键变更** | • **Agents**: 明确修复应默认采用"干净的有界重构"原则，精简内部实现，并显式定义插件 SDK/API 弃用路径<br>• **Dependencies**: `@openclaw/proxyline` 升级至 0.3.3；Pi 包升级至 0.75.1；**提升最低支持 Node.js 版本** |
| **破坏性变更** | ⚠️ **Node.js 最低版本要求提升**（具体版本未明示，需查阅 release note 细节） |
| **迁移注意事项** | 运行 `openclaw doctor` 检查 Node.js 兼容性；使用旧版 Node 的环境需升级；插件开发者需关注 SDK 弃用路径声明 |

---

## 3. 项目进展

### 今日合并/关闭的关键 PR

| PR | 状态 | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|:---|
| [#84309](https://github.com/openclaw/openclaw/pull/84309) | **已关闭** | clawsweeper[bot] | Twitch 测试隔离：导出 `clearRegistryForTest` | 跨测试状态污染修复，提升 CI 可靠性 |
| [#84357](https://github.com/openclaw/openclaw/pull/84357) | **已关闭** | joshavant | 约束通配符子代理目标：`agents.*.subagents.allowAgents: ["*"]` 不再允许任意未配置 agent ID | **安全边界收紧**，防止临时状态根泛滥 |

### 待合并的高价值 PR（clawsweeper 自动合并队列中）

| PR | 状态 | 风险标签 | 预期影响 |
|:---|:---|:---|:---|
| [#84311](https://github.com/openclaw/openclaw/pull/84311) | 🚀 automerge armed | 🚨 compatibility, 🚨 message-delivery | Cron 结构化拒绝信号，修复调度语义 |
| [#84169](https://github.com/openclaw/openclaw/pull/84169) | 🚀 automerge armed | 🚨 message-delivery | Discord 流式回复在工具警告后保留，修复 [#83831](https://github.com/openclaw/openclaw/issues/83831) |
| [#84308](https://github.com/openclaw/openclaw/pull/84308) | 🚀 automerge armed | 🚨 session-state | Cron 恢复工具警告诊断事件 |
| [#84362](https://github.com/openclaw/openclaw/pull/84362) | 🚀 automerge armed | — | Doctor 保留显式 agentRuntime 固定，防止 Codex 迁移误伤 |
| [#84368](https://github.com/openclaw/openclaw/pull/84368) | 🚀 automerge armed | — | Code-mode exec 工具描述锐化，减少模型浪费回合 |
| [#84369](https://github.com/openclaw/openclaw/pull/84369) | 🚀 automerge armed | 🚨 availability | Codex 图像生成工具超时修复 |

**整体评估**：今日实际合入代码量有限，但 clawsweeper 自动化队列积压 6+ 个待验证 PR，显示**维护机器人正在承担主要合并负荷**，人工审查瓶颈明显。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 深层分析 |
|:---|:---|:---:|:---:|:---|:---|
| 1 | [#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | **105** | 75 | 跨平台原生应用 | **历史最悠久的平台缺口**：macOS/iOS/Android 已有，Linux/Windows 长期缺失。高投票反映企业部署与开发者工具链的刚性需求，但标记 `clawsweeper:no-new-fix-pr` + `needs-product-decision` 表明**产品层面尚未立项** |
| 2 | [#18677 Security Scan Hook API for skill:install](https://github.com/openclaw/openclaw/issues/18677) | 16 | 0 | 技能安装前安全扫描 | 供应链安全焦虑：ClawHub 生态扩张后的必然诉求，`stale` 标签显示已搁置 3 个月 |
| 3 | [#11829 Security Roadmap: Protecting API Keys from Agent Access](https://github.com/openclaw/openclaw/issues/11829) | 16 | 0 | 多层密钥防泄漏 | 生产部署 blocker：LLM Provider Keys、OAuth、插件密钥均有泄露向量，需架构级重构 |
| 4 | [#67035 Windows chat UI regression](https://github.com/openclaw/openclaw/issues/67035) | 13 | 0 | Windows 输入/流式渲染修复 | **P1 级用户体验灾难**：输入吞字、回复不可见、打字指示器闪烁，直接影响 2026.4.14 Windows 用户留存 |
| 5 | [#42475 Per-agent cost budget enforcement](https://github.com/openclaw/openclaw/issues/42475) | 13 | 0 | 网关层成本预算 | 企业运营刚需：防止 agent 失控消费，与现有 `session-cost-usage.ts` 能力 gap 明显 |

### 高反应 Issues（👍 数突出）

| Issue | 👍 | 说明 |
|:---|:---:|:---|
| [#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | **75** | 压倒性平台需求，但实现路径不明 |
| [#39604 tools.web.fetch.allowPrivateNetwork](https://github.com/openclaw/openclaw/issues/39604) | 8 | 企业内网集成刚需，安全与功能张力 |
| [#63829 Per-agent memory-wiki vault](https://github.com/openclaw/openclaw/issues/63829) | 7 | 多 agent 隔离知识库，多租户场景关键 |
| [#66944 Plugin UI Extension System](https://github.com/openclaw/openclaw/issues/66944) | 4 | 插件生态 UI 深度集成，对标 VS Code 扩展模型 |

---

## 5. Bug 与稳定性

### 🔴 P1 级（生产影响/数据丢失风险）

| Issue | 类型 | 状态 | 已有 Fix PR? | 影响范围 | 关键细节 |
|:---|:---|:---|:---|:---|:---|
| [#67035](https://github.com/openclaw/openclaw/issues/67035) | 回归 | OPEN | ❌ 无 | Windows 用户 | 2026.4.14 后聊天 UI 输入吞字、流式回复不可见 |
| [#55334](https://github.com/openclaw/openclaw/issues/55334) | OOM/性能 | OPEN | ❌ 无 | 网关稳定性 | `sessions.json` 无限增长，skillsSnapshot 每会话重复，~50-100MB/min |
| [#63216](https://github.com/openclaw/openclaw/issues/63216) | 崩溃循环 | OPEN | ❌ 无 | 特定会话键 | 硬重置循环，reserveTokensFloor 失效，bootstrap 上下文重复注入 |
| [#84038](https://github.com/openclaw/openclaw/issues/84038) | 数据损坏 | OPEN | ✅ [#84362](https://github.com/openclaw/openclaw/pull/84362) | Codex/PI+OAuth 用户 | `doctor --fix` 静默迁移 `openai-codex/` → `openai/`，破坏运行时，3-4x token 膨胀 |
| [#80520](https://github.com/openclaw/openclaw/issues/80520) | 消息丢失 | OPEN | ❌ 无 | Telegram 用户 | 消息静默丢弃，无 `sendMessage` 日志，诊断困难 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | 崩溃 | OPEN | ✅ 有 PR 链接 | google-vertex 用户 | `Cannot convert undefined or null to object`，gemini-3.1-pro-preview |
| [#40611](https://github.com/openclaw/openclaw/issues/40611) | 阻塞 | OPEN | ❌ 无 | Telegram 活跃会话 | PR #39182 心跳漂移修复导致激进重试，阻塞消息处理 |
| [#32868](https://github.com/openclaw/openclaw/issues/32868) | 消息丢失 | OPEN | ✅ 有 PR 链接 | 同通道流式 | block streaming 时块回复工具执行前未投递 |
| [#84059](https://github.com/openclaw/openclaw/issues/84059) | 崩溃 | OPEN | ❌ 无 | 嵌入式 agent | 升级 05.18 后 `EmbeddedAttemptSessionTakeoverError`，会话文件变更竞态 |
| [#83744](https://github.com/openclaw/openclaw/issues/83744) | 状态污染 | OPEN | ❌ 无 | Discord 用户 | progress 失败状态跨运行持久化，抑制后续最终回复 |
| [#63612](https://github.com/openclaw/openclaw/issues/63612) | 崩溃 | OPEN | ✅ 有 PR 链接 | 长生命 main 会话 | compaction token 估计 `undefined.length` |
| [#63892](https://github.com/openclaw/openclaw/issues/63892) | 性能退化 | OPEN | ✅ 有 PR 链接 | 所有会话 | 主动压缩调度器首次 checkpoint 后永不重触发 |

### 🟡 P2 级（功能降级/体验损伤）

| Issue | 类型 | 关键细节 |
|:---|:---|:---|
| [#67288](https://github.com/openclaw/openclaw/issues/67288) | 性能 | `amazon-bedrock-mantle` 每次请求运行 IAM 发现，无 `config.discovery.enabled` 门控 |
| [#68113](https://github.com/openclaw/openclaw/issues/68113) | 回归 | Mattermost slash commands 503 "not yet initialized" |
| [#67793](https://github.com/openclaw/openclaw/issues/67793) | 行为 | `queue.mode "collect"` 未按 debounce 批处理消息 |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) | 性能 | 会话上下文膨胀：bootstrap 文件每回合重复注入，浪费 20-30% token |
| [#67366](https://github.com/openclaw/openclaw/issues/67366) | 崩溃 | `openclaw onboard` 替换 Telegram token 时 TypeError |

---

## 6. 功能请求与路线图信号

### 高优先级功能请求（P1/P2 + 活跃讨论）

| Issue | 领域 | 纳入下一版本可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#64046 敏感数据脱敏](https://github.com/openclaw/openclaw/issues/64046) | 安全/合规 | ⭐⭐⭐⭐☆ 高 | 中文社区强需求，多界面暴露，标记 `needs-security-review` + `needs-product-decision` |
| [#66944 Plugin UI Extension System](https://github.com/openclaw/openclaw/issues/66944) | 生态扩展 | ⭐⭐⭐⭐☆ 高 | 技术方案明确（Lit Web Components），已有 `linked-pr-open`，对标主流扩展模型 |
| [#63829 Per-agent memory-wiki vault](https://github.com/openclaw/openclaw/issues/63829) | 多租户/隔离 | ⭐⭐⭐⭐☆ 高 | 7 👍，多 agent 部署刚需，配置模型清晰 |
| [#42475 Per-agent cost budget](https://github.com/openclaw/openclaw/issues/42475) | 运营/成本 | ⭐⭐⭐☆☆ 中 | 企业刚需，但依赖网关层改造，标记 `needs-product-decision` |
| [#43260 SKILL.md 模型路由](https://github.com/openclaw/openclaw/issues/43260) | 模型调度 | ⭐⭐⭐⭐☆ 高 | 技术债明显（agent/默认级别已有，skill 级别缺失），实现路径清晰 |
| [#66252 Per-Agent TTS/STT 覆盖](https://github.com/openclaw/openclaw/issues/66252) | 多语言 | ⭐⭐⭐☆☆ 中 | 多语言场景刚需，但涉及配置模型扩展 |
| [#27445 sub-agent announceTarget](https://github.com/openclaw/openclaw/issues/27445) | 工作流编排 | ⭐⭐⭐⭐☆ 高 | 4 👍，多步工作流核心能力，技术方案轻量 |

### 安全架构信号

| Issue | 紧迫性 | 说明 |
|:---|:---|:---|
| [#8719 Security Profile v1.1](https://github.com/openclaw/openclaw/issues/8719) | 高 | 数据为中心的安全模型，硬边界而非 LLM 判断，生产部署前提 |
| [#11829 API Key 保护路线图](https://github.com/openclaw/openclaw/issues/11829) | 高 | 多层防护：序列化隔离、聊天脱敏、插件沙箱 |
| [#18677 skill:install 安全扫描 Hook](https://github.com/openclaw/openclaw/issues/18677) | 中 | 供应链安全，stale 需激活 |

---

## 7. 用户反馈摘要

### 😤 核心痛点

| 场景 | 来源 Issue | 用户原声提炼 |
|:---|:---|:---|
| **Windows 不可用** | [#67035](https://github.com/openclaw/openclaw/issues/67035) | "升级后聊天体验严重退化，输入不显示、回复空白" |
| **静默失败** | [#80520](https://github.com/openclaw/openclaw/issues/80520) | "消息静默丢弃，没有 sendMessage 日志，用户永远收不到回复" |
| **诊断工具反噬** | [#84038](https://github.com/openclaw/openclaw/issues/84038) | "`doctor --fix` 静默破坏配置，3-4x token 膨胀，PI+OAuth 运行时崩溃" |
| **会话状态失控** | [#55334](https://github.com/openclaw/openclaw/issues/55334), [#67419](https://github.com/openclaw/openclaw/issues/67419) | "网关内存每分钟涨 50-100MB，最终 OOM；20-30% token 浪费在重复 bootstrap" |
| **升级即崩溃** | [#84059](https://github.com/openclaw/openclaw/issues/84059) | "03.13 → 05.18 后所有嵌入式 agent 运行失败，每次必现" |

### 😐 摩擦点

| 场景 | 说明 |
|:---|:---|
| 心跳与消息处理冲突 | 心跳修复反而阻塞 Telegram 活跃会话 ([#40611](https://github.com/openclaw/openclaw/issues/40611)) |
| 配置语义不一致 | `null` 无法清除 cron 覆盖，需停网关手动改 JSON ([#67429](https://github.com/openclaw/openclaw/issues/67429) PR 待合并) |
| 安全与功能张力 | 私网访问默认阻断，企业内网集成需显式开启 ([#39604](https://github.com/openclaw/openclaw/issues/39604)) |

### 👍 认可方向

- 多平台覆盖意愿强烈（[#75](https://github.com/openclaw/openclaw/issues/75) 75 👍）
- 插件 UI 扩展、per-agent 隔离等架构扩展性设计获期待

---

## 8. 待处理积压

### ⚠️ 长期未响应的关键 Issue（stale/超期）

| Issue | 创建 | 最后更新 | 搁置原因 | 行动建议 |
|:---|:---|:---|:---|:---|
| [#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | 2026-01-01 | 2026-05-19 | `needs-product-decision` + `needs-maintainer-review` | **产品决策需明确**：是否 Q3-Q4 立项？或标记 `not-planned` 释放社区预期 |
| [#18677 Security Scan Hook API](https://github.com/openclaw/openclaw/issues/18677) | 2026-02-16 | 2026-05-19 | `stale` | 安全团队需评估 skill 生态扩张后的供应链风险，激活或关闭 |
| [#7227 Accessibility permissions for 'node'](https://github.com/openclaw/openclaw/issues/7227) | 2026-02-02 | 2026-05-19 | `stale`, `security` | macOS GUI 自动化架构问题，需评估是否通过 app bundle 签名解决 |
| [#10687 Fully dynamic model discovery](https://github.com/openclaw/openclaw/issues/10687) | 2026-02-06 | 2026-05-19 | `maintainer` | OpenRouter 等动态目录支持，静态模型目录已成生态瓶颈 |

### 🔧 审查瓶颈 PR（`needs proof` / `human-review` 长期挂起）

| PR | 创建 | 状态 | 阻塞原因 | 风险 |
|:---|:---|:---|:---|:---|
| [#70864 Scoped mention pattern policy](https://github.com/openclaw/openclaw/pull/70864) | 2026-04-24 | 📣 needs proof | 12+ 通道大规模变更，需真实行为验证 | 安全边界 + 消息投递双

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析 | 2026-05-20

---

## 1. 生态全景

个人 AI 助手开源生态正经历**从"单体智能体"向"多智能体编排平台"的关键跃迁**。OpenClaw 以 500+ 日更 Issues/PR 的绝对体量维持生态核心地位，但审查管道严重拥堵（合并率仅 7%）；NanoBot、CoPaw、IronClaw 等项目以 20-50 的日 PR 量级快速迭代，在特定垂直领域形成差异化竞争力。整体呈现"一超多强"格局，技术焦点集中于**多 Agent 协作可视化、MCP 生态安全接入、边缘/本地推理部署**三大方向，而 Windows 平台稳定性、配置系统"静默失败"、供应链安全（crates.io 滞后等）成为共性技术债务。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 版本发布 | 合并率 | 健康度评估 |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 更新 / 10% 关闭率 | 500 更新 / 7% 合并率 | v2026.5.19-beta.2 | ⚠️ 极低 | 🔶 高活跃、高拥堵，自动化合并依赖度高，人工审查瓶颈严重 |
| **NanoBot** | 26 关闭 / 5 活跃 (84% 关闭率) | 22 已合并/关闭 / 14 待审 | 无 | ✅ 高 | 🟢 高效运转，性能突破（冷启动 -94%）与国产生态扩张并进 |
| **Hermes Agent** | 50 更新 / 39 新开 | 17 已合并/关闭 / 33 待审 | 无 | ⚠️ 中 | 🔶 Kanban 工作流迭代密集，Windows 回归风险突出 |
| **PicoClaw** | 9 更新 (4 活跃/5 关闭) | 7 已合并/关闭 / 9 待审 | v0.2.8-nightly | ✅ 中 | 🟢 边缘设备导向，多智能体 Phase 2 架构推进中 |
| **NanoClaw** | 4 更新 | 5 已合并/关闭 / 13 待审 | 无 | ✅ 中 | 🟢 生产部署透明，WhatsApp 渠道修复联盟活跃 |
| **NullClaw** | 1 活跃 | 7 已合并/关闭 / 6 待审 | 无 | ✅ 高 | 🟢 高质量整合日，企业合规与安全审计里程碑 |
| **IronClaw** | 23 更新 (17 活跃/6 关闭) | 25 已合并/关闭 / 25 待审 | 无 | ⚠️ 中 | 🔶 Reborn 架构冲刺强劲，但 crates.io 发布滞后 + Nightly E2E 持续失败 |
| **LobsterAI** | **0 活动** | 24 已合并/关闭 / 26 待审 | 无 | — | 🟡 高代码流、零社区互动，疑似内部研发外溢 |
| **TinyClaw** | — | — | — | — | ⚫ 24h 无活动 |
| **Moltis** | 4 更新 (2 新开/2 关闭) | 2 已合并/关闭 / 2 待审 | 无 | ✅ 高 | 🟢 修复响应迅速，配置系统架构隐患待关注 |
| **CoPaw** | 38 更新 (21 活跃/17 关闭) | 31 已合并/关闭 / 13 待审 | **v1.1.8 + v1.1.8-beta.2** | ✅ 高 | 🟢 双版本连发，插件生态上线，但 Pet 插件首日崩溃暴露验证周期不足 |
| **ZeptoClaw** | 0 | 1 已关闭 / 1 待审 | 无 | — | ⚫ 仅 Dependabot 活动，社区驱动力枯竭 |
| **ZeroClaw** | 8 更新 (6 活跃/2 关闭) | 2 已合并/关闭 / **45 待审** | 无 | ⚠️ 极低 | 🔶 审阅队列危机，v0.8.0 阻塞 15 天+，批量架构重构待消化 |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 同类对比 | 核心差异 |
|:---|:---|:---|:---|
| **社区规模** | 500+ 日更 Issues/PR，绝对量级第一 | NanoBot (36)、CoPaw (44)、IronClaw (50) 均低一个数量级 | 生态网络效应显著，但边际管理成本激增 |
| **技术路线** | 插件 SDK 驱动、多平台消息网关、代理架构规范 | NanoBot 强调"国产生态+HF Spaces 弹性部署"；IronClaw 押注 Rust/WASM 安全沙箱 | OpenClaw 追求**最大兼容覆盖**，而非单点深度 |
| **合并效率** | 7% PR 合并率，clawsweeper 机器人承担主力 | NanoBot 84% Issue 关闭率、NullClaw 高质量整合日 | **审查管道是核心瓶颈**，人工维护者密度不足 |
| **平台成熟度** | macOS/iOS/Android 完备，Linux/Windows 长期缺失 (#75, 75👍) | Hermes Windows 致命回归；PicoClaw 树莓派边缘场景 | 企业部署与开发者工具链的**平台缺口**被反复诉求 |
| **安全架构** | 多层密钥防护路线图 (#11829)、skill:install 扫描 Hook (#18677) 均 stale | NullClaw 已落地隐私保护审计 (#911)、数据治理层 (#885) | OpenClaw **规划领先但执行滞后**，中小项目反而更快交付企业合规特性 |

**定位判断**：OpenClaw 是生态的**事实标准制定者**（代理架构规范、插件 SDK），但正面临"成功陷阱"——体量膨胀导致治理效率下降，为 NanoBot、CoPaw 等"轻量快速"竞品创造窗口期。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---:|
| **多 Agent 协作与可视化** | OpenClaw、PicoClaw、LobsterAI、CoPaw、ZeroClaw | OpenClaw 子代理安全边界收紧 (#84357)；PicoClaw Phase 2 单实例多智能体 (#1934)；LobsterAI 子代理树形 UI (#2011)；CoPaw spawn_subagent (#4530)；ZeroClaw v0.8.0 多智能体运行时 (#6398) | 🔴 极高 |
| **MCP 生态安全接入** | CoPaw、Moltis、IronClaw | CoPaw OAuth 2.1 for MCP (#4532)；Moltis MCP client_secret 企业 SSO (#850)；IronClaw MCP 能力路径规划 (#3805) | 🔴 极高 |
| **Windows 平台稳定性** | OpenClaw、Hermes、NullClaw、CoPaw | OpenClaw UI 回归 (#67035)；Hermes 0.14.0 完全不可用 (#28920)；NullClaw DNS 修复 (#920)；CoPaw Pet 插件闪退 (#4541) | 🔴 极高 |
| **边缘/本地推理部署** | NanoBot、PicoClaw、NanoClaw、Hermes | NanoBot Ollama/vLLM 文档化 (#3912)；PicoClaw Intel OVMS (#2703)；NanoClaw LiteLLM provider (#2490)；Hermes Ollama 云模型 XML 工具调用 (#8965) | 🟡 高 |
| **配置系统"静默失败"根治** | Hermes、Moltis、OpenClaw | Hermes Config-Runtime Contract Registry (#28995)；Moltis hooks 解析验证但未注册 (#1024)；OpenClaw doctor 误迁移 (#84038) | 🟡 高 |
| **供应链/发布管道安全** | IronClaw、OpenClaw | IronClaw crates.io 滞后 3 个 minor 版本 (#3259)；OpenClaw Node.js 最低版本提升未明示 | 🟡 高 |
| **记忆管理与上下文压缩** | OpenClaw、NanoBot、PicoClaw、ZeroClaw | OpenClaw sessions.json OOM (#55334)；NanoBot 记忆合并异步化 (#2604)；PicoClaw /compact 命令 (#2491)；ZeroClaw Dream Mode (#5849) | 🟡 高 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户画像 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 最大兼容的多平台网关 + 插件 SDK 生态 | 开发者、多平台部署企业 | TypeScript/Node.js，插件化架构，追求"万能适配器" |
| **NanoBot** | 国产模型生态 + 性能工程 + HF Spaces 弹性部署 | 中文用户、私有化部署者、HuggingFace 生态 | Python，冷启动优化极致，国产生态跟进速度最快 |
| **Hermes Agent** | Kanban 工作流编排 + 多平台网关可靠性 | 团队协作、任务驱动型用户 | Python，工作流状态机为核心抽象，插件生态爆发 |
| **PicoClaw** | 边缘设备/树莓派 + 单实例多智能体 | 硬件极客、离线隐私敏感用户 | Go，Intel OVMS 本地推理，ARM 低功耗优化 |
| **NanoClaw** | 生产级部署透明度 + 快速运行时修复 | 运维敏感的企业用户、X/Twitter 自动化运营 | TypeScript，agent-runner 执行层，部署可追溯文化 |
| **NullClaw** | 企业合规审计 + 数据治理 + 跨平台原生 | 金融/医疗等强合规行业、Zig 语言爱好者 | Zig，curl 移除转向 std.http，隐私信封机制 |
| **IronClaw** | Rust/WASM 安全沙箱 + 能力提供者热目录 | 安全关键型企业、WebAssembly 生态 | Rust，47 crate 模块化，Reborn 架构重写中 |
| **CoPaw** | 插件分发平台 + 桌面端宠物伴侣 | 中文 C 端用户、非技术用户 | Python/Electron，Tauri 迁移中，强运营驱动 |
| **ZeroClaw** | 技能系统 UX + 自主进化（Dream Mode） | 长期个人 AI 伴侣用户 | Rust，Air-gapped/Enclave 企业安全模式探索 |
| **LobsterAI** | OpenClaw 多 Agent 编排引擎的 UI 封装 | 需要可视化编排的中文用户 | 依赖 OpenClaw 运行时，内部研发为主 |

---

## 6. 社区热度与成熟度分层

```
【快速迭代期】          【质量巩固期】           【停滞/转型风险期】
    🔥🔥🔥                  🟢🟢🟢                  ⚠️⚠️⚠️
    
    NanoBot                NullClaw                 ZeptoClaw
    (性能+国产生态)         (企业合规落地)            (仅机器人活动)
    
    CoPaw                  NanoClaw                 LobsterAI
    (插件生态上线)          (生产稳定性)              (零社区互动)
    
    IronClaw               Moltis                   TinyClaw
    (Reborn 冲刺)           (修复响应快)              (24h 无活动)
    
    Hermes Agent           PicoClaw
    (Kanban 工作流)         (边缘场景打磨)
    
    ZeroClaw*
    (审阅队列危机)
    
    OpenClaw*
    (高活跃+高拥堵)
```

\* **特殊状态**：OpenClaw 与 ZeroClaw 虽处于最高活跃度梯队，但**治理效率瓶颈**使其面临"迭代速度幻觉"风险——大量 PR 积压可能转化为合并债务与贡献者流失。

---

## 7. 值得关注的趋势信号

| 趋势信号 | 证据来源 | 对开发者的参考价值 |
|:---|:---|:---|
| **"渐进式透明化"成为多 Agent 产品标配** | LobsterAI 子代理树形 UI (#2011)、OpenClaw 代理架构规范、NanoBot 工具调用轨迹渲染 (#3894) | 用户不再满足于"黑箱"结果，**中间过程的可观测性**是信任建立的关键；开发 Agent 编排工具时需优先设计调试/审计接口 |
| **MCP 从"协议支持"进入"安全企业化"阶段** | CoPaw OAuth 2.1 (#4532)、Moltis client_secret (#850)、IronClaw Lane 3 Secrets 生产化 | MCP 生态扩张伴随企业 IAM 集成需求，**OAuth PKCE + DCR + 审计日志**将成为基础设施标配，而非可选增强 |
| **"国产替代"从模型层向全栈渗透** | NanoBot Skywork/APIFree/StepFun 密集接入、CoPaw OpenCode Go (#4536)、PicoClaw DeepSeek 流式修复 (#2740) | 国内开发者需建立**多厂商故障转移**能力，单一 OpenAI 依赖的 Agent 架构面临可用性风险 |
| **边缘/本地部署从"极客选项"走向"合规刚需"** | PicoClaw Intel OVMS (#2703)、NanoBot Ollama 文档化 (#3912)、ZeroClaw Air-gapped (#6293) | 数据主权法规（如中国数据出境安全评估）推动**本地推理后端**成为企业准入门槛，非仅成本考量 |
| **配置系统的"显式契约"替代"静默约定"** | Hermes Config-Runtime Contract Registry (#28995)、Moltis hooks 注册失效 (#1024)、OpenClaw doctor 误迁移 (#84038) | "配置有效但行为缺失"的隐蔽故障损害开发者信任，**解析-验证-注册的原子化**应成为配置系统的设计原则 |
| **AI 辅助代码审查与合并的规模化实验** | OpenClaw clawsweeper 自动化队列、IronClaw 请求"大上下文模型审阅" (#6398) | 当 PR 量超越人工审阅容量时，**LLM 辅助的批量分类、风险标注、甚至自动合并**将成为必要基础设施，而非实验性功能 |

---

*分析基于 2026-05-20 各项目 GitHub 公开数据生成 | 适合技术决策者评估项目选型、开发者识别贡献机会*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-20

## 1. 今日速览

NanoBot 今日保持**高活跃度**：24小时内 Issues 处理效率极高（26关闭/5活跃，关闭率84%），PR 流水线运转密集（22已合并/关闭，14待审阅）。核心亮点是**性能优化突破**——网关冷启动从6.9秒压缩至385ms（PR #3918），以及**多厂商生态扩张**（Skywork、APIFree、StepFun 等国产/新兴服务商密集接入）。社区讨论集中在 WebUI 稳定性、记忆机制架构缺陷及多 Agent 编排场景。无新版本发布，但主干代码演进迅速。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 🔥 已合并/关闭的核心 PR（22条）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#3918](https://github.com/HKUDS/nanobot/pull/3918) | chengyongru | **网关冷启动优化 94%**（6.9s → 385ms），通过 channel_manager / provider_snapshot / config_load 三阶段懒加载 | **基础设施质变**：大幅降低容器化/Serverless 场景启动成本，为 HuggingFace Spaces 等弹性部署扫清障碍 |
| [#3916](https://github.com/HKUDS/nanobot/pull/3916) | Re-bin | Skywork（天工）一级厂商支持，WebUI 自动暴露+图标+路由测试 | 国产大模型生态关键补位，与 APIFree 形成互补 |
| [#3910](https://github.com/HKUDS/nanobot/pull/3910) + [#3911](https://github.com/HKUDS/nanobot/pull/3911) | morandot | StepFun（阶跃星辰）图像生成支持：step-image-edit-2 / step-1x-medium，含风格参考图功能 | 图像生成能力从"可用"走向"多厂商可选"，文档同步完善 |
| [#3914](https://github.com/HKUDS/nanobot/pull/3914) | zayfod | 图像生成 provider 模块化重构（766行单体 → 按厂商分包） | 技术债务清偿，降低后续接入新厂商的边际成本 |
| [#3917](https://github.com/HKUDS/nanobot/pull/3917) + [#3915](https://github.com/HKUDS/nanobot/pull/3915) | morandot | APIFree 内置支持（agent 优化模型 skywork-ai/skyclaw-v1） | 重复 PR 提示流程问题，但功能已落地 |
| [#3906](https://github.com/HKUDS/nanobot/pull/3906) | Re-bin | WebUI 设置中心重构：7 大分类（Overview/Appearance/Models/Providers/Web/Runtime/Advanced），持久化侧边栏控制 | 用户体验层重大升级，应对配置复杂度膨胀 |
| [#3894](https://github.com/HKUDS/nanobot/pull/3894) | HengWeiBin | 修复 WebUI 工具调用轨迹渲染：支持 end/error 阶段 | 解决"工具执行后无反馈"的视觉盲区 |
| [#3854](https://github.com/HKUDS/nanobot/pull/3854) | DreamShepherd2006 | `/webui/bootstrap` 端点注入 peer 发现（NANOBOT_PEER_* 环境变量） | **多 Agent 编排基础设施**：为 Legion/Squad 场景提供实例发现能力 |
| [#3891](https://github.com/HKUDS/nanobot/pull/3891) | DreamShepherd2006 | `bootstrap_allow_from` 配置：解除 Docker/远程部署的 localhost 硬编码限制 | 生产部署关键修复，解决 #3876 |
| [#3912](https://github.com/HKUDS/nanobot/pull/3912) | yanalialiuk | README 本地模型部署指引（Atomic Chat / vLLM / Ollama） | 降低私有化部署门槛，回应社区高频诉求 |

**整体评估**：今日合并 PR 覆盖**性能工程、国产生态、UI/UX、多 Agent 架构、生产部署**五大维度，项目正从"功能堆叠期"进入"工程化成熟期"。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 | 深层信号 |
|:---|:---|:---|:---|:---|
| 1 | [#193](https://github.com/HKUDS/nanobot/issues/193) Ollama API 支持？ | 14 | 本地模型部署方案 | **已闭环**：PR #3912 正式文档化 Ollama 支持，但 Issue 2月创建、5月才响应，暴露文档/社区运营滞后 |
| 2 | [#3790](https://github.com/HKUDS/nanobot/issues/3790) WebUI 会话打印内容显示错乱 | 14 | 前端稳定性 | **回归 Bug**，5.13 版本引入，用户被迫刷新恢复，影响核心交互体验，仍在 OPEN 状态 |
| 3 | [#2463](https://github.com/HKUDS/nanobot/issues/2463) 架构缺陷：prompt prefix 不精确保留 | 11 | 对话历史一致性 | **架构级技术债务**：与 OpenAI 提示缓存机制冲突，可能导致成本/行为双失控，已关闭但需长期跟踪 |
| 4 | [#1692](https://github.com/HKUDS/nanobot/issues/1692) Telegram 机器人重复回复 | 9 👍4 | 消息去重/渲染控制 | 高赞验证普遍性，Markdown 渲染双发问题，已关闭 |
| 5 | [#74](https://github.com/HKUDS/nanobot/issues/74) Telegram 消息无回复 | 9 👍2 | 通道连通性调试 | 经典 onboarding 障碍，已关闭 |

### 热点分析

- **WebUI 质量承压**：#3790（打印错乱）、#3884（首响后会话关闭）双双活跃，5月中旬版本存在前端回归
- **"国产替代"诉求强烈**：Skywork/APIFree/StepFun 的密集接入既是商业策略，也反映社区对国内可用性的刚需
- **多 Agent 叙事升温**：PR #3913（Legion）、#3621（HF Spaces 多角色部署）形成故事线，但依赖大量未合并 PR

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#3790](https://github.com/HKUDS/nanobot/issues/3790) | **OPEN** | WebUI 5.13 版本打印内容错乱，需刷新恢复 | 无明确 PR |
| 🔴 **高** | [#3884](https://github.com/HKUDS/nanobot/issues/3884) | **OPEN** | WebUI 首条响应后会话自动关闭（Debian + WebSocket） | 无明确 PR |
| 🟡 **中** | [#3863](https://github.com/HKUDS/nanobot/issues/3863) | CLOSED | 微信登录失败："版本较低"（WeChat 扫码拒绝） | 无（外部依赖：微信协议版本） |
| 🟡 **中** | [#3901](https://github.com/HKUDS/nanobot/issues/3901) | CLOSED | X API 定时任务陷入工具调用循环，达最大迭代次数 | 无 |
| 🟡 **中** | [#2638](https://github.com/HKUDS/nanobot/issues/2638) | CLOSED | 记忆合并失败时会话历史无界增长 → Agent 无响应 | 无（架构级，#2604 尝试改进） |
| 🟡 **中** | [#2325](https://github.com/HKUDS/nanobot/issues/2325) | CLOSED | MCP 工具热更新不生效，需重启 Nanobot | 无 |
| 🟢 **低** | [#3857](https://github.com/HKUDS/nanobot/issues/3857) | CLOSED | Bootstrap HTTP 500，前端无法连接网关 | 无（配置/环境问题） |

**稳定性评估**：WebUI 前端在最新版本出现**双回归**（打印错乱 + 会话中断），建议维护者优先响应 #3790/#3884。后端架构缺陷（记忆合并、MCP 热更新）有缓解方案但未根治。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 成熟度 | 纳入可能性 |
|:---|:---|:---|:---|
| **记忆合并异步化/主动 GC** | [#2604](https://github.com/HKUDS/nanobot/issues/2604) OPEN | 有详细技术方案（`loop.py` 改造） | ⭐⭐⭐⭐☆ 高，性能优化主线 |
| **多轮对话保留 Skill 内容** | [#3846](https://github.com/HKUDS/nanobot/issues/3846) OPEN | 有设计提案（`read_file` → 专用加载机制） | ⭐⭐⭐⭐☆ 高，Agent 能力稳定性 |
| **Signal 通道支持** | [#3852](https://github.com/HKUDS/nanobot/pull/3852) OPEN | PR 已提交（signal-cli 集成，功能完整） | ⭐⭐⭐⭐☆ 高，通道生态扩张 |
| **/insights 令牌用量追踪** | [#3735](https://github.com/HKUDS/nanobot/pull/3735) OPEN | PR 已提交（历史用量 slash command） | ⭐⭐⭐⭐☆ 高，成本透明刚需 |
| **Nanobot Legion 多 Agent** | [#3913](https://github.com/HKUDS/nanobot/pull/3913) OPEN | 集成案例 PR，依赖 5+ 未合并 PR | ⭐⭐⭐☆☆ 中，愿景宏大但耦合重 |
| **Human Takeover /bot 开关** | [#3322](https://github.com/HKUDS/nanobot/issues/3322) CLOSED | 有明确场景（WhatsApp 人工接管） | ⭐⭐⭐☆☆ 中，企业客服场景 |
| **MPP 机器支付协议** | [#2845](https://github.com/HKUDS/nanobot/issues/2845) CLOSED | 早期提案，无后续 | ⭐⭐☆☆☆ 低，概念超前 |
| **持久化记忆（Mnemon 集成）** | [#3888](https://github.com/HKUDS/nanobot/issues/3888) CLOSED | 第三方方案推广，非官方路线 | ⭐⭐☆☆☆ 低，生态合作可能性 |

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 痛点 | 典型反馈 | 来源 |
|:---|:---|:---|
| **WebUI 不稳定** | "更新 5.13 后打印错乱，必须刷新" | [#3790](https://github.com/HKUDS/nanobot/issues/3790) |
| **会话生命周期脆弱** | "对话首条回复后就关闭" | [#3884](https://github.com/HKUDS/nanobot/issues/3884) |
| **Agent 自主执行不可靠** | "让 GPT-5-mini 夜间自动搜索安装技能，完全不执行" | [#2442](https://github.com/HKUDS/nanobot/issues/2442) |
| **工具调用循环/过度确认** | "总是重复问'可以吗'，回答 OK 也不执行" | [#923](https://github.com/HKUDS/nanobot/issues/923) |
| **MCP 工具更新不热加载** | "新增工具后重启多次仍不识别" | [#2325](https://github.com/HKUDS/nanobot/issues/2325) |
| **微信生态封锁** | "扫码提示版本过低，已更新最新微信" | [#3863](https://github.com/HKUDS/nanobot/issues/3863) |

### 😊 满意场景

- **多通道覆盖**：Telegram、Feishu、Signal（PR 中）等 IM 集成受认可
- **国产模型接入**：Skywork、StepFun 等国内服务商快速跟进
- **HF Spaces 部署**：单容器多 Agent 方案有明确用户群（PR #3621）

### 🎯 使用场景分化

| 场景类型 | 代表需求 | 技术挑战 |
|:---|:---|:---|
| **个人 AI 助手** | Ollama 本地部署、Telegram 私聊 | 易用性、低资源占用 |
| **团队/企业客服** | WhatsApp 人工接管、Feishu 语音 | 稳定性、权限控制 |
| **自动化 Agent** | 夜间自主执行、X 监控 cron | 可靠性、错误恢复 |
| **多 Agent 编排** | HuggingFace Spaces 部署 | 服务发现、状态同步 |

---

## 8. 待处理积压

### ⚠️ 长期未响应的高价值 Issue/PR

| 项目 | 创建时间 | 最后更新 | 风险 | 建议行动 |
|:---|:---|:---|:---|:---|
| [#2604](https://github.com/HKUDS/nanobot/issues/2604) 记忆合并异步化 | 2026-03-29 | 2026-05-19 | 架构性能瓶颈，影响大规模会话 | 纳入下个 Sprint，关联 #2638/#3029 |
| [#3846](https://github.com/HKUDS/nanobot/issues/3846) 多轮对话 Skill 保留 | 2026-05-15 | 2026-05-19 | Agent 能力一致性 | 评估与现有 skill 加载机制兼容性 |
| [#3735](https://github.com/HKUDS/nanobot/pull/3735) /insights 令牌追踪 | 2026-05-11 | 2026-05-19 | 成本管理刚需，PR 已就绪 | **优先审阅合并** |
| [#3852](https://github.com/HKUDS/nanobot/pull/3852) Signal 通道 | 2026-05-16 | 2026-05-19 | 隐私敏感用户群扩展 | 功能完整度高，建议合并前安全审计 |
| [#3869](https://github.com/HKUDS/nanobot/pull/3869) DeepSeek 消息硬化 | 2026-05-16 | 2026-05-19 | 国产模型兼容性 | 标注为 [question] 需维护者确认方案 |
| [#3913](https://github.com/HKUDS/nanobot/pull/3913) Legion 多 Agent | 2026-05-19 | 2026-05-19 | 愿景宏大但依赖链复杂 | 拆分为独立可合并单元，避免巨型 PR |

---

**日报生成时间**：2026-05-20  
**数据来源**：HKUDS/nanobot GitHub 公开 API  
**分析框架**：活跃度 × 质量 × 可持续性三维评估

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-20

---

## 1. 今日速览

Hermes Agent 今日维持**极高活跃度**，24小时内 Issues 与 PR 各更新50条，新开 Issues 达39条，社区参与热度显著。项目处于**密集迭代期**：Kanban 工作流系统成为焦点，围绕"任务阻塞-自动晋升"的无限循环问题产生多个关联 Issue 和修复 PR；Windows 平台稳定性问题集中爆发，0.14.0 版本出现严重回归；配置系统正在进行架构升级（Config-Runtime Contract Registry）。无新版本发布，但代码合并节奏紧凑，17个 PR 已合并/关闭，33个待审阅。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#28990](https://github.com/NousResearch/hermes-agent/pull/28990) | tsrines | **Discord 权限修复**：`_is_allowed_user` 终于检查 pairing store，解决"已批准用户仍被拒"的部署痛点 | - |
| [#28993](https://github.com/NousResearch/hermes-agent/pull/28993) | teknium1 | **语音消息转录**：Discord + DingTalk 原生语音笔记正确分类为 `VOICE` 类型，进入 STT 处理流程 | #28918 |
| [#28726](https://github.com/NousResearch/hermes-agent/pull/28726) → [#28994](https://github.com/NousResearch/hermes-agent/pull/28994) | xxxigm → teknium1 | **Kanban 阻塞机制修复**：worker 发起的 `kanban_block()` 变为"粘性"状态，不再被调度器自动晋升，打破无限循环 | #28712, #28944, #28903 |
| [#28988](https://github.com/NousResearch/hermes-agent/pull/28988) | zccyman | **自定义模型配置生效**：`custom_providers[].models.<model>.max_tokens` 不再被静默忽略 | #28046 |
| [#28986](https://github.com/NousResearch/hermes-agent/pull/28986) | sumsun-dev | **Slack 协作流程硬化**：Kanban 集成、线程订阅、人格感知通知、记忆进化自动化 | - |

**整体推进评估**：今日合并聚焦**网关可靠性**（Discord 权限、语音处理）和**工作流正确性**（Kanban 阻塞语义），后者是 v0.14.0 引入的核心功能的关键补丁。Config-Runtime Contract Registry（[#28995](https://github.com/NousResearch/hermes-agent/pull/28995)）进入 Phase 1，标志着配置系统从"静默失败"向"显式契约"转型。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| 1 | Docker 容器 HOME 目录权限被拒绝 | 5条 | 最小化容器部署的权限配置文档缺失，用户反复踩坑 | [#18482](https://github.com/NousResearch/hermes-agent/issues/18482) |
| 2 | Ollama 云模型工具调用渲染为原始 XML | 3条 | 代理层未能正确识别 Ollama 代理路径下的工具调用格式，影响 deepseek-v3.2:cloud 等热门模型 | [#8965](https://github.com/NousResearch/hermes-agent/issues/8965) |
| 3 | LLM Gateway 流式传输工具调用失败（根因已定位上游） | 3条 | **上游依赖问题**：openai-python #2722 导致，社区需要协调修复或 workaround | [#24523](https://github.com/NousResearch/hermes-agent/issues/24523) |
| 4 | WhatsApp 回复上下文丢失 | 3条 | 网关适配器丢弃 `quotedMessageId` 元数据，影响对话连贯性 | [#28823](https://github.com/NousResearch/hermes-agent/issues/28823) |
| 5 | Codex 图像生成后端（已关闭，👍2） | 3条 | 用户希望统一 OpenAI Codex 的认证和路由基础设施 | [#11195](https://github.com/NousResearch/hermes-agent/issues/11195) |

**诉求分析**：社区对**多平台网关的元数据完整性**（WhatsApp 回复上下文、Discord 权限、语音分类）要求迫切，反映 Hermes 正从"能跑通"向"生产级可靠"演进。上游依赖问题（#24523）的透明沟通获得认可。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| **P1** | [#28920](https://github.com/NousResearch/hermes-agent/issues/28920) | **Windows 0.14.0 完全不可用**：所有工具因 `creationflags` 重复关键字参数崩溃 | 🔴 新报告，无 fix | - |
| **P1** | [#27132](https://github.com/NousResearch/hermes-agent/issues/27132) | 提供商别名（ollama/vllm）在 LAN IP 时静默回退到 OpenRouter | ✅ 已关闭 | 已合并 |
| **P1** | [#26487](https://github.com/NousResearch/hermes-agent/issues/26487) | **Windows 网关安装导致桌面不可用**：重复控制台窗口涌现 | ✅ 已关闭 | 已合并 |
| **P1** | [#28902](https://github.com/NousResearch/hermes-agent/issues/28902) | Anthropic Max OAuth：`<available_skills>` 系统提示注入触发 400 "out of extra usage" | 🟡 新报告 | - |
| **P2** | [#28863](https://github.com/NousResearch/hermes-agent/issues/28863) | `terminal.docker_extra_args` 配置被静默丢弃 | 🟡 已确认 | [#28995](https://github.com/NousResearch/hermes-agent/pull/28995) 包含修复 |
| **P2** | [#28886](https://github.com/NousResearch/hermes-agent/issues/28886) | 网关 /model 选择器未获取 Portal API 动态推荐 | 🟡 新报告 | - |
| **P2** | [#28960](https://github.com/NousResearch/hermes-agent/issues/28960) | 浏览器工具缺失系统依赖（libnspr4, libnss3）+ 非 root 容器 sandbox 问题 | 🟡 新报告 | - |
| **P2** | [#28876](https://github.com/NousResearch/hermes-agent/issues/28876) | API 系统提示强制阻止 markdown，用户无法覆盖 | 🟡 新报告 | - |
| **P3** | [#21798](https://github.com/NousResearch/hermes-agent/issues/21798) | Python <3.10 因 `X \| None` 类型提示崩溃 | 🟡 持续存在 | - |
| **P3** | [#28968](https://github.com/NousResearch/hermes-agent/issues/28968) | Kanban 批量重新分配 Select 组件事件处理错误 | 🟡 新报告 | - |

**稳定性评估**：Windows 平台成为**当前最大风险点**，0.14.0 出现致命回归（#28920），叠加历史问题（#26487）刚修复，表明 Windows 测试覆盖不足。配置系统的"静默丢弃"模式（#28863, #28046）正在通过架构升级系统性解决。

---

## 6. 功能请求与路线图信号

| 功能请求 | 优先级 | 成熟度信号 | 纳入可能性 |
|:---|:---|:---|:---|
| **SerpApi 网页搜索工具** [#27723](https://github.com/NousResearch/hermes-agent/issues/27723) | P3 | 已有 Exa/Tavily 先例，接口清晰 | ⭐⭐⭐ 高，社区 PR 就绪 |
| **通用 Webhook 支持** [#28913](https://github.com/NousResearch/hermes-agent/issues/28913) | P3 | 当前 GitHub-specific，架构需抽象 | ⭐⭐⭐ 高，网关模块化设计支持 |
| **会话列表 REST API** [#28859](https://github.com/NousResearch/hermes-agent/issues/28859) | P3 | 明确的使用场景（IDE 插件、自定义仪表盘） | ⭐⭐⭐ 高，API 服务器自然延伸 |
| **Fireworks AI 推理提供商** [#28983](https://github.com/NousResearch/hermes-agent/pull/28983) | - | **PR 已提交**，标准 ProviderProfile 插件 | ⭐⭐⭐⭐ 极高，即将合并 |
| **TokenTelemetry 仪表盘插件** [#28858](https://github.com/NousResearch/hermes-agent/issues/28858) | P3 | 社区插件 v0.1.0 已发布 | ⭐⭐⭐ 高，生态扩展 |
| **可配置备份排除项** [#28970](https://github.com/NousResearch/hermes-agent/issues/28970) | P3 | 硬编码列表，改动面小 | ⭐⭐⭐⭐ 极高，快速 win |
| **Codex 图像生成后端** [#11195](https://github.com/NousResearch/hermes-agent/issues/11195) | - | 已关闭，👍2 | ⭐⭐ 中，需资源投入 |
| **Nostr NIP-17 私信适配器** [#16769](https://github.com/NousResearch/hermes-agent/pull/16769) | P3 | **PR 开放中**，加密去中心化通讯 | ⭐⭐⭐ 中，小众但战略差异化 |
| **营销代理工厂 MVP** [#28483](https://github.com/NousResearch/hermes-agent/pull/28483) | P3 | **PR 开放中**，品牌档案、审批队列、分析反馈 | ⭐⭐ 中，垂直场景，需评估维护负担 |

**路线图信号**：**插件生态系统**正在爆发（TokenTelemetry、营销工厂、Fireworks AI），表明 Hermes 的插件架构获得社区认可。**网关平台扩展**（Nostr、通用 Webhook）和 **API 完备性**（会话管理）是基础设施层面的自然延伸。

---

## 7. 用户反馈摘要

### 真实痛点

> *"Running `hermes auth add google-gemini-cli` on a remote VM fails because OAuth is hardcoded to redirect to `http://127.0.0.1:8085/oauth2callback`"* — [#28971](https://github.com/NousResearch/hermes-agent/issues/28971)

**远程/无头部署的 OAuth 流程**是反复出现的痛点（Gemini、xAI、Codex 均有类似问题），当前设备码流和设备授权模式覆盖不足。

> *"The `hermes backup` command uses a hardcoded exclusion list... unnecessarily large backups when users have vendored virtual environments"* — [#28970](https://github.com/NousResearch/hermes-agent/issues/28970)

**"硬编码" vs "可配置"** 是配置系统的系统性债务，用户在生产环境中需要精细化控制。

> *"Hermes-generated zine... `skills/creative/baoyu-comic` skill is using trademarked manga characters"* — [#28890](https://github.com/NousResearch/hermes-agent/issues/28890)

**IP 合规风险**首次被明确报告，技能市场的内容审核机制缺失。

### 满意点

- Kanban 工作流系统的**快速迭代响应**（阻塞问题 24 小时内产生多个 PR）
- 上游问题**透明标注根因**（#24523 明确指向 openai-python #2722）
- 社区插件**被发现和官方认可**的流程（#28858 TokenTelemetry）

### 不满意点

- **Windows 作为二等公民**：0.14.0 致命回归、路径处理（[#28991](https://github.com/NousResearch/hermes-agent/pull/28991) 修复驱动器盘符）、MIME 类型（[#28996](https://github.com/NousResearch/hermes-agent/pull/28996)）
- **配置静默失败**仍广泛存在（#28863 docker_extra_args、#28046 max_tokens）
- **Python 版本兼容性**：3.9 崩溃（#21798）与类型提示现代化之间的张力

---

## 8. 待处理积压

### 需维护者关注的高价值/长期项

| Issue/PR | 创建时间 | 状态 | 风险/价值 |
|:---|:---|:---|:---|
| [#8965](https://github.com/NousResearch/hermes-agent/issues/8965) Ollama 云模型 XML 工具调用 | 2026-04-13 | 开放，3条评论 | **高价值**：Ollama Cloud 是热门用例，影响 deepseek/glm/kimi 主流模型 |
| [#18482](https://github.com/NousResearch/hermes-agent/issues/18482) Docker HOME 权限 | 2026-05-01 | 开放，5条评论 | **高频踩坑**：容器化部署文档/示例缺失，消耗社区支持资源 |
| [#21798](https://github.com/NousResearch/hermes-agent/issues/21798) Python <3.10 兼容性 | 2026-05-08 | 开放，2条评论 | **技术债务**：需决定最低支持版本或引入 `from __future__ import annotations` |
| [#16769](https://github.com/NousResearch/hermes-agent/pull/16769) Nostr 适配器 | 2026-04-28 | PR 开放 | **差异化价值**：去中心化通讯，但需评估维护负担 |
| [#26129](https://github.com/NousResearch/hermes-agent/pull/26129) 性能优化：工具热路径缓存 | 2026-05-15 | PR 开放 | **基础设施**：启动和运行时性能，影响所有用户 |
| [#25345](https://github.com/NousResearch/hermes-agent/pull/25345) Android Termux 本地浏览器交接 | 2026-05-14 | PR 开放 | **平台扩展**：移动端场景，需测试覆盖 |

---

*日报基于 GitHub 公开数据生成，时间范围：2026-05-19 至 2026-05-20*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-20

> **项目**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw) | **日期**: 2026-05-20 | **数据周期**: 过去24小时

---

## 1. 今日速览

PicoClaw 今日维持**高活跃度运转**，24小时内 Issues 更新 9 条（4 活跃/新开，5 关闭）、PR 更新 16 条（9 待合并，7 已合并/关闭），并推送了 v0.2.8-nightly 自动化构建版本。社区注意力集中在**多智能体协作架构演进**（Phase 2 路线图）、**流式推理内容解析**（DeepSeek/OpenAI 兼容层）以及**进程稳定性**（PID 防重入机制）三大方向。值得关注的是，今日有 5 条带 `stale` 标签的 Issue/PR 被批量关闭，表明维护团队正在进行积压清理，但部分高优先级 Bug（如 #2720  stale PID 崩溃循环）尚未完全解决。

---

## 2. 版本发布

### 🔧 Nightly Build: v0.2.8-nightly.20260519.941bac23

| 属性 | 详情 |
|:---|:---|
| **版本类型** | 自动化夜间构建（可能不稳定） |
| **Git 提交** | `941bac23` |
| **完整变更日志** | [compare/v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) |

> ⚠️ **迁移注意事项**：此为 CI 自动构建，**不建议生产环境直接使用**。从版本号推断，v0.2.8 正式版尚未发布，当前 nightly 基于 v0.2.8 分支持续集成。关注 #2896（provider metadata 重构）和 #2897（model_name 持久化）等今日新 PR 可能已进入该构建。

---

## 3. 项目进展

### ✅ 今日已合并/关闭的重要 PR（7 条）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#2761](https://github.com/sipeed/picoclaw/pull/2761) | tbeaudouin05 | **同步子智能体支持 `agent_id` 显式路由** | 填补了同步/同turn子任务委派中无法选择特定智能体通道的空白，与异步 `spawn` 能力对齐 |
| [#2755](https://github.com/sipeed/picoclaw/pull/2755) | BeaconCat | **流式推理内容与视频媒体支持**（Xiaomi Mimo 驱动） | 扩展多模态边界：支持 `reasoning_content` 流式传输、视频理解、音频理解，强化 OpenAI 兼容层 |
| [#2740](https://github.com/sipeed/picoclaw/pull/2740) | cjkihl | **修复 DeepSeek 流式思考模式** — 捕获 `reasoning_content` | 关键兼容性修复：此前思考模式 token 被静默丢弃，影响国产模型用户体验 |
| [#2703](https://github.com/sipeed/picoclaw/pull/2703) | JohnLeFeng | **新增 Intel OpenVINO Model Server 本地推理后端** | 边缘 AI 部署选项扩展，支持 Intel CPU/GPU/NPU 本地推理，降低云端依赖 |
| [#2491](https://github.com/sipeed/picoclaw/pull/2491) | linknightmap | **会话管理命令：/status, /compact, /new** | 用户可控的上下文生命周期管理，解决长会话 token 膨胀痛点 |
| [#2892](https://github.com/sipeed/picoclaw/pull/2892) | lxowalle | **配置驱动型流式传输支持**（双 opt-in 模型） | 流式能力从"有无"进入"精细化配置"阶段：模型条目 + 通道需同时启用 |
| [#2888](https://github.com/sipeed/picoclaw/pull/2888) | ghost | **工具配置加载与图像响应修复** | 细节修复，提升工具链鲁棒性 |

**整体迈进评估**：今日合并 PR 覆盖**模型层兼容性**（DeepSeek/Intel OVMS/Mimo）、**智能体编排层**（子智能体路由）、**用户交互层**（会话命令/流式配置），形成从底层到上层的完整推进。特别值得注意的是 **OpenAI 兼容提供商生态的密集加固**（#2740 #2755 #2892），表明 PicoClaw 正积极适配国内/边缘多元推理后端。

---

## 4. 社区热点

### 🔥 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 热度分析 |
|:---|:---|:---:|:---|
| 1 | [#1757](https://github.com/sipeed/picoclaw/issues/1757) **定时任务触发 Channel 错误** | 9 | **已关闭但具代表性**：Raspberry Pi Zero W + Telegram 场景下，每小时定时任务导致通道错误。反映**边缘设备长周期运行的稳定性挑战**，以及 cron 与 channel 生命周期管理的耦合问题。用户环境（ARM 低功耗设备）凸显测试矩阵缺口。 |
| 2 | [#1934](https://github.com/sipeed/picoclaw/issues/1934) **Agent Refactor Phase 2 — 单 Pico 内多智能体协作** | 7 | **路线图级议题**：Phase 1 抽象层（Agent/AgentLoop/Event/Context/Hooks/Steering/SubTurn）完成后，Phase 2 瞄准**单实例内多智能体协作**与**Agent Memory**。这是从"单体智能体"向"智能体系统"跃迁的关键设计，评论涉及架构权衡。 |
| 3 | [#2674](https://github.com/sipeed/picoclaw/issues/2674) **Codex OAuth 空响应：ChatGPT 后端 `response.output_item.done` 流式项** | 5 | **高优先级技术债务**：OpenAI Codex 官方 OAuth 对接 ChatGPT 商业后端时，流式事件解析失败导致空响应。获 4 个 👍 为今日最高，反映**企业用户对官方 Codex 集成的迫切需求**，涉及事件流协议与内部 API 的逆向适配。 |

**诉求洞察**：社区核心矛盾在于 **"功能广度扩张"与"边缘场景深度打磨"的张力** —— 一方面渴望多智能体、多模态、多提供商的前沿能力；另一方面在树莓派部署、PID 文件残留、沙箱逃逸等基础稳定性问题上持续遇阻。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---:|
| 🔴 **High** | [#2720](https://github.com/sipeed/picoclaw/issues/2720) | **OPEN** | **PID 文件残留导致崩溃循环**：网关崩溃后 PID 被 systemd-resolved 等无关进程复用，启动检查仅验证 PID 存在而非进程身份 | [#2813](https://github.com/sipeed/picoclaw/pull/2813) **待合并** |
| 🟡 **High** | [#2688](https://github.com/sipeed/picoclaw/issues/2688) | **CLOSED** | **沙箱逃逸**：`find /` 可枚举工作区外路径，绕过 `cat`/`ls` 的安全防护 | 已修复（未标注具体 PR） |
| 🟡 **Medium** | [#2674](https://github.com/sipeed/picoclaw/issues/2674) | **OPEN** | **Codex OAuth 空响应**：`response.output_item.done` 流式事件解析失败 | 无明确 PR |
| 🟡 **Medium** | [#1757](https://github.com/sipeed/picoclaw/issues/1757) | **CLOSED** | **定时任务 Channel 错误**：每小时 cron 触发通道异常 | 已关闭（方案未详） |

**稳定性评估**：#2720 是**当前最大风险点** —— 生产环境网关可能因 PID 复用陷入无法自恢复的启动失败，且该 Issue 已带 `stale` 标签，存在被忽视风险。PR #2813 提供了"验证进程身份"的修复方案，但尚未合并，建议优先 review。

---

## 6. 功能请求与路线图信号

| 需求来源 | 内容 | 纳入可能性评估 |
|:---|:---|:---|
| [#1934](https://github.com/sipeed/picoclaw/issues/1934) Agent Refactor Phase 2 | 单 Pico 内多智能体协作 + Agent Memory | **高** — 已标记 `roadmap`，Phase 1 已完成，架构基础就绪 |
| [#2774](https://github.com/sipeed/picoclaw/issues/2774) 上下文与记忆管理 | 缓存感知无限上下文、跨会话记忆、后台历史压缩（参考 magic-context 插件） | **中高** — 与 Phase 2 的 Agent Memory 目标重合，但需评估外部依赖 |
| [#2829](https://github.com/sipeed/picoclaw/issues/2829) → [#2830](https://github.com/sipeed/picoclaw/pull/2830) 显式异步结果投递策略 | `spawn` 子智能体结果避免重复注入父智能体 | **高** — 已有配套 PR，解决实际运行时问题 |
| [#2771](https://github.com/sipeed/picoclaw/issues/2771) 配置可靠性与迁移体验 | 示例配置更新、迁移链 UX 优化 | **中** — 基础设施债务，影响新用户 onboarding |
| [#2897](https://github.com/sipeed/picoclaw/pull/2897) model_name 跨历史持久化 | 聊天记录中保留并显示模型名称 | **高** — 今日新 PR，已覆盖 SeaHorse 全路径 |

**下一版本信号**：v0.2.8 或后续版本大概率包含 **多智能体协作框架（Phase 2）**、**异步工具结果投递策略**、**模型元数据持久化**，以及 **OpenAI 兼容层的流式/推理内容增强**。

---

## 7. 用户反馈摘要

### 😫 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **"从源码构建后 launcher 不存在"** | [#2753](https://github.com/sipeed/picoclaw/issues/2753) | README 指引与构建产物脱节，Go 1.26 + Ubuntu 24.04 环境下 `picoclaw-launcher` 二进制缺失 — **文档/构建系统一致性债务** |
| **"配置示例仍用 V2 格式"** | [#2771](https://github.com/sipeed/picoclaw/issues/2771) | `config.example.json` 使用旧字段名（`channels` 而非 `channel_configs`），新用户复制粘贴即报错 — **迁移文档滞后** |
| **"Raspberry Pi 上定时任务崩溃"** | [#1757](https://github.com/sipeed/picoclaw/issues/1757) | ARM 边缘设备长周期运行可靠性不足，cron + channel 组合易触发错误 — **边缘场景测试覆盖不足** |
| **"沙箱防护不完整"** | [#2688](https://github.com/sipeed/picoclaw/issues/2688) | 安全策略白名单机制被 `find` 绕过，敏感路径可被枚举 — **安全模型需纵深防御** |

### 😊 积极信号

- **Intel OVMS 本地推理** (#2703) 获边缘/隐私敏感用户欢迎
- **会话管理命令** (#2491) 解决长会话用户的手动上下文清理需求
- **流式推理内容可见** (#2740 #2755) 提升国产模型（DeepSeek/Xiaomi Mimo）用户体验透明度

---

## 8. 待处理积压

### ⚠️ 需维护者重点关注

| 条目 | 创建时间 | 最后更新 | 风险说明 |
|:---|:---:|:---:|:---|
| [#2720](https://github.com/sipeed/picoclaw/issues/2720) stale PID 崩溃循环 | 2026-04-30 | 2026-05-19 | **高优先级 Bug + stale 标签**，PR #2813 待 review，若继续搁置可能再次自动关闭而未实际修复 |
| [#2813](https://github.com/sipeed/picoclaw/pull/2813) PID 身份验证修复 | 2026-05-07 | 2026-05-19 | 配套 #2720，解决生产环境网关无法启动问题，**建议优先合并** |
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) 通道标识标准化 | 2026-04-16 | 2026-05-19 | 影响多实例同提供商部署的核心重构，涉及 message bus 和 agent dispatch，**架构级 PR 长期悬置** |
| [#2647](https://github.com/sipeed/picoclaw/pull/2647) web_search YAML 配置与 DuckDuckGo 默认启用 | 2026-04-24 | 2026-05-19 | 工具链配置体验改进，关联 #2616，**低复杂度但用户可见** |
| [#2781](https://github.com/sipeed/picoclaw/pull/2781) 技能目录 token 用量优化 | 2026-05-06 | 2026-05-19 | 每次 LLM 请求重复发送完整技能列表的成本问题，**对长会话成本敏感用户影响显著** |

**积压健康度警示**：今日关闭的 5 条 Issue/PR 均带 `stale` 标签，显示项目正依赖自动化规则清理积压。但 #2720 这类高优先级安全问题若被"误杀"，将损害用户信任。建议维护团队：**(1) 审查 stale 关闭规则阈值**；(2) 为 High priority 议题设置豁免机制；(3) 优先 review #2813 等配套修复 PR。

---

> **日报生成依据**: GitHub API 数据快照 | **下次更新**: 2026-05-21
> 
> 如需深度分析特定模块（provider 兼容层 / agent 架构 / 边缘部署），请联系指定扩展分析。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-20

---

## 1. 今日速览

NanoClaw 今日保持**高活跃度**，24小时内产生 **18 个 PR 更新**（含 13 个待合并）和 **4 个 Issue 更新**，无新版本发布。社区焦点集中在 **WhatsApp 渠道稳定性修复**（3 个相关 PR 并行推进）和 **agent-runner 核心消息处理逻辑**的关键 bug 修复。值得关注的是，一个存在近 3 个月的渐进式消息流功能 PR（#815）今日被关闭，显示项目可能在重新评估大功能合并策略。整体健康度良好，但 WhatsApp 渠道的多个关联 bug 暴露出生产环境稳定性压力。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日合并/关闭的 PR

| PR | 作者 | 状态 | 进展说明 |
|:---|:---|:---|:---|
| [#2559](https://github.com/nanocoai/nanoclaw/pull/2559) Fix/compact boundary progress event | jesolsen | ✅ **已合并** | 修复上下文压缩边界的事件进度通知问题，改善压缩过程的透明度 |
| [#2549](https://github.com/nanocoai/nanoclaw/pull/2549) Phase 4: bash_tool + python_tool | thamam | ✅ **已合并** | 为 agent-runner 新增 bash/python 工具执行能力，并打通遥测令牌容器传播与 MCP socket 挂载，**已部署至 X bot 生产环境** |
| [#2547](https://github.com/nanocoai/nanoclaw/pull/2547) fix(webhook-server): default-bind to loopback | smith-vosburg | ✅ **已合并** | 安全加固：webhook 默认绑定 127.0.0.1 替代 0.0.0.0，防止默认暴露至 LAN |
| [#815](https://github.com/nanocoai/nanoclaw/pull/815) feat: progressive message streaming | genecyber | ❌ **已关闭（Blocked）** | 存在近 3 个月（2026-03-08 创建）的 Telegram 渐进式消息流功能，今日关闭，原因标注为 Blocked，可能因架构冲突或优先级调整被搁置 |
| [#61](https://github.com/nanocoai/nanoclaw/pull/61) chore: add WhatsApp auth retry logic | don7panic | ❌ **已关闭** | 早期 WhatsApp 认证重试逻辑，今日关闭，功能可能被后续 PR 覆盖 |

**关键里程碑**：agent-runner 工具链扩展（bash/python）完成并上线生产，标志着执行能力向更通用的代码执行演进；安全默认策略收紧（webhook 回环绑定）体现对部署安全性的重视。

---

## 4. 社区热点

### 高关联度议题簇：WhatsApp 渠道修复潮

| 议题/PR | 链接 | 热度分析 |
|:---|:---|:---|
| **Issue #2560** WhatsApp group @-mentions never set `isMention` | [链接](https://github.com/nanocoai/nanoclaw/issues/2560) | **High Priority Bug**，阻断文档化的"频道审批"入门流程，直接影响新用户转化 |
| **PR #2552** fix(whatsapp): render @<phone> mentions + prevent shutdown-race creds wipe | [链接](https://github.com/nanocoai/nanoclaw/pull/2552) | 同日提交，针对性修复 #2560 的底层问题（mentions 数组缺失 + 竞态条件凭证擦除） |
| **PR #2554** Fix/whatsapp channel bugs | [链接](https://github.com/nanocoai/nanoclaw/pull/2554) | 同日提交，WhatsApp 渠道综合修复，可能与 #2552 存在功能重叠，需协调合并 |
| **PR #2553** feat(skills): add whatsapp-formatting container skill | [链接](https://github.com/nanocoai/nanoclaw/pull/2553) | 同日提交，新增 WhatsApp 格式规范技能，解决 agent 输出 `@<displayName>` 无法解析的问题 |

**诉求洞察**：WhatsApp 作为核心渠道，其 mention 机制、认证流程、消息格式三方面同时出现生产级故障，表明该渠道近期可能经历了架构变更或用户规模跃升，稳定性债务集中爆发。社区正在**自发形成修复联盟**（IamAdamJowett、dvirarad 等多人同日提交），但需维护者协调避免重复劳动。

### 另一热点：agent-runner 消息信封缺陷

| 议题/PR | 链接 | 热度分析 |
|:---|:---|:---|
| **Issue #2555** multi-message `<messages>` batch envelope 导致 API 调用被跳过 | [链接](https://github.com/nanocoai/nanoclaw/issues/2555) | 核心运行时 bug：Claude Agent SDK 返回 synthetic 响应而非真实 API 调用 |
| **PR #2556** fix(agent-runner): drop `<messages>` envelope | [链接](https://github.com/nanocoai/nanoclaw/pull/2556) | **当日提交当日 fix**，响应速度极快，作者 IamAdamJowett 同时是 Issue 报告者 |

---

## 5. Bug 与稳定性

| 严重程度 | 议题 | 状态 | 影响范围 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#2555](https://github.com/nanocoai/nanoclaw/issues/2555) agent-runner: `<messages>` 批处理信封导致合成响应 | 已有关联 PR | 多消息场景下 agent 完全失效，返回虚假 "No response requested" | [#2556](https://github.com/nanocoai/nanoclaw/pull/2556) ✅ 待合并 |
| 🔴 **Critical** | [#2560](https://github.com/nanocoai/nanoclaw/issues/2560) WhatsApp @-mentions 未设置 `isMention` | 已有关联 PR | 阻断群组内 bot 响应，破坏 channel-approval 入门流程 | [#2552](https://github.com/nanocoai/nanoclaw/pull/2552) ✅ 待合并 |
| 🟡 **High** | [#2561](https://github.com/nanocoai/nanoclaw/issues/2561) Agent 上下文压缩后无输出，无限重试无熔断 | **已关闭** | 容器在 ~165k tokens 阈值后卡死 | 已关闭，需确认是否彻底修复 |
| 🟡 **High** | PR #2552 中的 shutdown-race creds wipe | 已有关联 PR | WhatsApp 重启时凭证竞态擦除，导致重复认证 | [#2552](https://github.com/nanocoai/nanoclaw/pull/2552) ✅ 待合并 |
| 🟢 **Medium** | [#2548](https://github.com/nanocoai/nanoclaw/pull/2548) Keychain 读取回滚 OAuth token | PR 待合并 | token 刷新后被旧值覆盖，导致认证失效 | [#2548](https://github.com/nanocoai/nanoclaw/pull/2548) ⏳ 待合并 |

**稳定性评估**：今日暴露的 bug 呈现**"核心运行时 + 渠道适配层"双轨并行**特征，agent-runner 的消息格式化逻辑和 WhatsApp 的渠道实现均为近期变更热点，建议加强回归测试覆盖。

---

## 6. 功能请求与路线图信号

| 议题 | 链接 | 类型 | 纳入可能性分析 |
|:---|:---|:---|:---|
| [#2550](https://github.com/nanocoai/nanoclaw/issues/2550) Two-tier project context loading | [链接](https://github.com/nanocoai/nanoclaw/issues/2550) | 架构优化 | **高**。解决多项目用户的上下文膨胀痛点（workshop business, side project, book, job search 等场景），与当前 `CLAUDE.local.md` 模式形成自然演进，且无破坏性变更 |
| [#2490](https://github.com/nanocoai/nanoclaw/pull/2490) Feat/add litellm provider | [链接](https://github.com/nanocoai/nanoclaw/pull/2490) | 新 Provider | **中高**。LiteLLM 作为统一网关可大幅扩展模型支持，PR 已存在 5 天且标注 follows-guidelines，形态成熟 |
| [#1723](https://github.com/nanocoai/nanoclaw/pull/1723) Database adapter layer with SQLite | [链接](https://github.com/nanocoai/nanoclaw/pull/1723) | 基础设施 | **中**。创建 40 天未合并，可能是长期架构投资，需评估与现有存储层的兼容性 |
| ~~[#815](https://github.com/nanocoai/nanoclaw/pull/815) Progressive message streaming~~ | [链接](https://github.com/nanocoai/nanoclaw/pull/815) | UX 功能 | **已关闭/搁置**。Blocked 状态表明可能等待渠道层重构完成后重启 |

---

## 7. 用户反馈摘要

### 真实痛点

| 来源 | 痛点 | 场景 |
|:---|:---|:---|
| [#2550](https://github.com/nanocoai/nanoclaw/issues/2550) | 多项目上下文过载 | "workshop business, a side project, a book, a job search, an art installation" — 用户同时运营多个项目，历史对话扫描模式失效 |
| [#2560](https://github.com/nanocoai/nanoclaw/issues/2560) | WhatsApp 入门流程断裂 | 文档承诺的 channel-approval 流程因 `isMention` 硬编码为 `undefined` 无法触发 |
| [#2555](https://github.com/nanocoai/nanoclaw/issues/2555) | 多消息批处理静默失败 | lane 中积压 2+ 消息时，agent 返回 synthetic 响应，用户无感知地丢失请求 |

### 满意度信号

- **快速响应**：#2555 从报告到 PR 仅数小时，显示核心贡献者对运行时稳定性高度敏感
- **生产部署透明度**：#2549 明确标注 "Code deployed to X bot via systemd restart 2026-05-18"，建立部署可追溯信任

### 不满意信号

- **文档与实现脱节**：#2551 指出 `/add-whatsapp` SKILL.md 推荐的 `--method qr-browser` 在实际代码中不存在，"Running the recommended path errors out"
- **长期 PR 搁置**：#815 存在 2.5 个月后关闭，#1723 存在 40 天未决，可能挫伤大额贡献积极性

---

## 8. 待处理积压

| PR/Issue | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|
| [#1723](https://github.com/nanocoai/nanoclaw/pull/1723) Database adapter layer with SQLite | 2026-04-10 | 2026-05-19 | **40 天未合并**。基础设施层重构，影响面广，需维护者决策是否纳入 vNext 或拆分迭代 |
| [#2403](https://github.com/nanocoai/nanoclaw/pull/2403) CI: replace bump-version with explicit Release workflow | 2026-05-10 | 2026-05-19 | **10 天未合并**。发布流程可靠性投资，与零发布日现状形成反差，可能阻塞版本节奏 |
| [#2416](https://github.com/nanocoai/nanoclaw/pull/2416) CLI: provision companion rows on groups/wirings create | 2026-05-11 | 2026-05-19 | **9 天未合并**。CLI 数据完整性修复，影响 `ncl` 命令行工具的用户体验 |
| [#2490](https://github.com/nanocoai/nanoclaw/pull/2490) LiteLLM provider | 2026-05-15 | 2026-05-19 | **5 天未合并**。Provider 扩展是高频需求，延迟合并可能导致社区 fork 或重复实现 |

**维护者行动建议**：优先处理 WhatsApp 渠道的三联 PR（#2552/#2554/#2553）去重合并，避免贡献者冲突；#1723 数据库适配层需明确路线图定位，长期悬置将积累合并债务。

---

*日报基于 NanoClaw (github.com/qwibitai/nanoclaw) 公开 GitHub 数据生成*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-20

## 1. 今日速览

NullClaw 今日保持**高活跃度**：13 个 PR 在 24 小时内有更新（6 个待合并、7 个已合并/关闭），1 个 Issue 活跃但无新增关闭。项目核心聚焦**网络稳定性修复**（Windows DNS 解析、DNS 预解析 shim）和**架构现代化**（移除 curl 子进程、Zig 0.16 兼容性），同时合并了多个生产级稳定性补丁。无新版本发布，代码库处于密集整合期，健康度良好但待合并 PR 积压需关注。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日合并/关闭的 7 个 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#911](https://github.com/nullclaw/nullclaw/pull/911) `feat(audit): privacy-preserving secret triage` | gosIX22 | LLM 驱动的隐私保护审计分类，使用"信封"机制隐藏原始密钥值 | **安全合规里程碑**：将 `nullclaw workspace audit` 从纯规则检测升级为 AI 辅助分级，满足企业审计场景 |
| [#885](https://github.com/nullclaw/nullclaw/pull/885) `feat(memory): NullClaw Data Governance Layer` | sleep3r | [WB × OpenSource Hackathon] 数据治理层，含保留策略、访问控制、血缘追踪 | **生态扩展**：黑客松成果落地， memory 子系统具备企业级数据生命周期管理 |
| [#908](https://github.com/nullclaw/nullclaw/pull/908) `Project hktn` | ShEvVl | [WB × OpenSource Hackathon] 网络/DNS 修复、推理流、成本追踪、DDG 搜索增强 | **基础设施加固**：修复 `HostResolutionFailed` 初始化 bug，新增成本监控能力 |
| [#910](https://github.com/nullclaw/nullclaw/pull/910) `fix(discord,websocket): gateway stability` | vernonstinebaker | 5 项 Discord 网关稳定性修复：看门狗、指数退避、中断安全停止、TLS 泄漏修复 | **生产可靠性突破**：12 小时 soak 测试覆盖 4 节点 3 架构（含 Android aarch64），解决长期网关掉线问题 |
| [#883](https://github.com/nullclaw/nullclaw/pull/883) `probe: resolve executable before spawning` | mark-os | 子进程启动前预解析可执行文件路径，规避 Zig stdlib `execve` 失败泄漏 bug | **安全加固**：消除 probe 模块的僵尸进程风险 |
| [#912](https://github.com/nullclaw/nullclaw/pull/912) `feat(gateway): synchronous /webhook` | Kures | 为配对令牌 worker 提供同步 `/webhook` 端点，支持 nullboiler 调度集成 | **生态集成关键节点**：填补 worker 端点缺口，支撑外部编排系统对接 |
| [#920](https://github.com/nullclaw/nullclaw/pull/920) `fix(net): fix Windows DNS resolution` | chenhlSH | 修复 `getAddressList()` 无条件返回 `UnknownHostName` 的 Windows 专属 bug | **跨平台修复**：解决 Windows 用户连接任何远程 provider 的阻断性问题 |

**整体迈进评估**：今日合并内容覆盖**安全审计、数据治理、网络核心、网关稳定性、进程安全、生态集成**六大维度，属于**高质量整合日**。尤其 #910 的生产验证和 #920 的 Windows 修复直接解除用户部署障碍。

---

## 4. 社区热点

| 排名 | 条目 | 热度指标 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥1 | [#910](https://github.com/nullclaw/nullclaw/pull/910) Discord 网关稳定性修复 |  soak 测试数据详实，跨架构验证 | **生产用户急需可靠性承诺**：作者主动提供 12 小时/4 节点/3 架构的测试证据，反映社区对"AI 助手 7×24 在线"的硬性要求；Android aarch64 的"opportunistic"标注暗示移动端部署需求增长 |
| 🔥2 | [#920](https://github.com/nullclaw/nullclaw/pull/920) Windows DNS 修复 |  修复根本性阻断 bug，与 #892 形成竞争/互补 | **Windows 开发者体验痛点**：`HostResolutionFailed` 是 Windows 平台高频问题，两个独立 PR（#920 已合并，#892 待合并）同时出现，说明 DNS 解析层存在系统性技术债 |
| 🔥3 | [#911](https://github.com/nullclaw/nullclaw/pull/911) 隐私保护审计 |  黑客松产出，概念新颖（隐私信封） | **企业合规焦虑**："raw secret value" 不出域的设计直击金融/医疗行业审计场景，LLM 辅助分类降低误报疲劳 |

**深层信号**：社区正从"功能可用"向"生产可信"迁移——稳定性验证数据、隐私保护机制、跨平台一致性成为 PR 核心竞争力。

---

## 5. Bug 与稳定性

| 严重程度 | 条目 | 状态 | 影响范围 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **阻断性** | [#868](https://github.com/nullclaw/nullclaw/issues/868) Android/Termux aarch64 `linkat` AccessDenied | **OPEN** 无评论互动 | Android 终端用户无法编译 | ❌ 无 |
| 🔴 **阻断性** | Windows `HostResolutionFailed`（非 localhost） | **FIXED** by #920 | 所有 Windows 远程 provider 连接 | ✅ [#920](https://github.com/nullclaw/nullclaw/pull/920) 已合并 |
| 🟡 **高** | Windows DNS 预解析 shim 失败（#890 关联） | **PENDING** #892 | Windows 代理模式 | 🔄 [#892](https://github.com/nullclaw/nullclaw/pull/892) 待合并 |
| 🟡 **高** | Zig 0.16 构建失败（win/linux） | **PENDING** #887 | 升级 Zig 工具链的用户 | 🔄 [#887](https://github.com/nullclaw/nullclaw/pull/887) 待合并 |
| 🟢 **中** | `std.Io.sleep()` 协作式 yield 非真挂起 | **PENDING** #878 | POSIX 系统高并发场景 CPU 空转 | 🔄 [#878](https://github.com/nullclaw/nullclaw/pull/878) 待合并 |
| 🟢 **中** | curl probe 传输错误被吞并 | **PENDING** #891 | 供应商健康检查误判 | 🔄 [#891](https://github.com/nullclaw/nullclaw/pull/891) 待合并 |

**稳定性焦点**：DNS/网络层成为今日修复主战场（#920 已合并、#892 待审），反映 NullClaw 作为"连接多供应商的 AI 代理"对网络可靠性的极致依赖。#868 Android 编译问题孤立无援，需维护者介入。

---

## 6. 功能请求与路线图信号

| 来源 | 功能方向 | 成熟度判断 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| [#881](https://github.com/nullclaw/nullclaw/pull/881) 移除 runtime curl，全面转向 `std.http` | **架构现代化** | PR 已开，影响面极大（providers/channels/gateway/tools/memory/voice/SSE） | 🔶 高（但需长期测试，可能分阶段） |
| [#783](https://github.com/nullclaw/nullclaw/pull/783) Cron 子代理引擎 | **调度自动化** | 功能完整（DB 调度、历史、JSON CLI、安全加固），但创建日期早（4-07） | 🔶 中（可能因复杂度卡在 review） |
| [#885](https://github.com/nullclaw/nullclaw/pull/885) Data Governance Layer | **企业合规** | 已合并，需文档和集成测试 | ✅ 已纳入 |
| [#911](https://github.com/nullclaw/nullclaw/pull/911) 隐私保护审计 triage | **安全 AI** | 已合并，opt-in 设计降低风险 | ✅ 已纳入 |
| [#912](https://github.com/nullclaw/nullclaw/pull/912) 同步 Webhook worker | **生态集成** | 已合并，填补 nullboiler 集成缺口 | ✅ 已纳入 |

**路线图推断**：下一版本（v2026.6.x?）核心主题将是 **"Production-Grade Networking + Enterprise Governance"**——curl 移除 (#881) 若合并将标志 HTTP 栈完全自主可控，是最大变量。

---

## 7. 用户反馈摘要

| 维度 | 具体内容 | 来源 |
|:---|:---|:---|
| **痛点** | Android/Termux 交叉编译工具链权限问题 (`linkat` AccessDenied) | [#868](https://github.com/nullclaw/nullclaw/issues/868) |
| **痛点** | Windows 作为开发/部署平台的二等公民待遇（DNS、构建） | #920, #892, #887 |
| **场景** | 移动端边缘部署（Android aarch64 "opportunistic" 测试） | [#910](https://github.com/nullclaw/nullclaw/pull/910) |
| **满意** | soak 测试数据增强对生产部署的信心 | [#910](https://github.com/nullclaw/nullclaw/pull/910) 评论隐含 |
| **不满** | Zig 版本升级破坏构建（0.16 兼容性） | [#887](https://github.com/nullclaw/nullclaw/pull/887) |
| **诉求** | 供应商连接错误需透明暴露（probe 错误被吞） | [#891](https://github.com/nullclaw/nullclaw/pull/891) |

**用户画像分化**：一端是黑客松驱动的**企业合规需求**（数据治理、隐私审计），另一端是**个人开发者/边缘部署需求**（Android、Windows、Termux）。项目需警惕"企业功能膨胀"与"轻量部署体验"的张力。

---

## 8. 待处理积压

| 条目 | 创建时间 | 最后更新 | 积压天数 | 风险说明 |
|:---|:---|:---|:---|:---|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) Cron 子代理引擎 | 2026-04-07 | 2026-05-19 | **43 天** | ⚠️ 功能完整但长期未合并，可能因 review 负担或架构冲突搁置；Cron 是自动化工作流核心能力，延迟影响用户替代 crontab 的迁移意愿 |
| [#868](https://github.com/nullclaw/nullclaw/issues/868) Android/Termux 编译失败 | 2026-04-23 | 2026-05-19 | **27 天** | ⚠️ 唯一活跃 Issue，零维护者回应，可能流失移动端/教育场景用户 |
| [#878](https://github.com/nullclaw/nullclaw/pull/878) nanosleep 真线程挂起 | 2026-04-30 | 2026-05-19 | **20 天** | 低优先级但影响 POSIX 系统资源效率 |

**维护者行动建议**：
1. **优先响应 #868**：即使标记 `platform-android` 并请求更多环境信息，避免 Issue 僵尸化
2. **#783 决策点**：43 天已超常规 review 周期，建议作者 rebase 并拆分 PR（调度核心 vs JSON 输出 vs 安全加固）以降低 review 成本
3. **#881 协调**：curl 移除是破坏性变更，需与 #892/#891 的 curl 相关修复明确优先级（先修 bug 再换架构，还是统一在新架构上修复？）

---

*日报基于 GitHub 公开数据生成，时间窗口：2026-05-19 至 2026-05-20 UTC*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-20

## 1. 今日速览

IronClaw 今日呈现**高强度冲刺态势**：24小时内产生 **23 条 Issue 更新**（17 活跃/新开，6 关闭）与 **50 条 PR 更新**（25 待合并，25 已合并/关闭），活跃度极高。核心团队正全力推进 **Reborn 架构的 Beta 就绪**——今日一次性合并了 7 个 Reborn 相关 PR，涵盖 REPL 工具链、LLM 鉴权路由、扩展目录热发布等关键路径。同时，项目暴露出 crates.io 发布滞后（0.24.0 vs 0.27.0）的安全隐患，以及 Nightly E2E 持续失败的质量风险。整体健康度：**开发动能强劲，但发布管道与测试稳定性需紧急关注**。

---

## 2. 版本发布

**无新版本发布**（0 个）

> ⚠️ **关键风险**：Issue #3259 指出 crates.io 仍停留在 **0.24.0**（2026-03-31），而 GitHub 已打标至 **v0.27.0**（2026-04-29）。下游用户因 wasmtime 28.x 的 CVE 被锁定在旧版本，存在**供应链安全漏洞**。PR #3708 已准备将 `ironclaw` 升至 **0.28.2**、`ironclaw_common` 升至 **0.5.0**（含 API 破坏性变更），但尚未合并发布。

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（7 条）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#3797](https://github.com/nearai/ironclaw/pull/3797) | serrrfirat | **Reborn REPL 工具链走通**：通过 live adapter 接入真实工具，支持 `builtin.echo` 路由与 provider replay 元数据 | #3800 Lane 1 |
| [#3792](https://github.com/nearai/ironclaw/pull/3792) | serrrfirat | **LLM 鉴权路由重构**：将 REPL LLM 解析从 CLI 下沉至 `ironclaw_reborn_composition`，引入 `ResolvedRebornLlm` 不透明类型，消除 CLI API 泄露 | — |
| [#3790](https://github.com/nearai/ironclaw/pull/3790) | serrrfirat | **热能力目录发布**：Extension Manifest v2 支持运行时热更新，解析 `input_schema_ref`/`output_schema_ref`/`prompt_doc_ref` | #3801 Lane 2 |
| [#3791](https://github.com/nearai/ironclaw/pull/3791) | serrrfirat | **运行时 fixture 迁移**：代表性 script/WASM/MCP manifest 转为 `ironclaw.capability_provider/v1` 格式 | — |
| [#3788](https://github.com/nearai/ironclaw/pull/3788) | serrrfirat | **默认 HostPortCatalog 接入扩展发现**：定义 `HOST_RUNTIME_HTTP_EGRESS_PORT_ID`，能力提供者 manifest 可声明所需 host port | — |
| [#3794](https://github.com/nearai/ironclaw/pull/3794) | serrrfirat | **Extension v2 生命周期 E2E 覆盖**：验证 discover → install/enable → hot catalog → dispatch 全链路，及未知 host port 的 fail-closed | — |
| [#3795](https://github.com/nearai/ironclaw/pull/3795) | serrrfirat | **收紧遗留扩展 manifest**：生产环境禁止第三方遗留顶层格式，仅允许 host-bundled 内置组件 | — |

### 整体推进评估

Reborn 架构的 **8 条 Lane 路线图** 今日正式曝光（Issues #3800-#3809），其中 **Lane 1（REPL 黄金路径）** 和 **Lane 2（扩展目录就绪）** 已进入收尾阶段。M2 WebUI  facade 的 5 个 P0/P1 Issue 全部关闭，Beta 前端接口趋于稳定。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 核心诉求 |
|:---|:---|:---|:---|
| 🔥 1 | [#3259](https://github.com/nearai/ironclaw/issues/3259) Publish 0.25.0–0.27.0 to crates.io | **6 评论** | **下游安全阻断**：wasmtime 28.x CVE 导致无法升级，crates.io 发布管道疑似断裂 |
| 🔥 2 | [#3702](https://github.com/nearai/ironclaw/issues/3702) Reborn 二进制 E2E 测试框架 | **4 评论** | 要求将本地审计的 88 个 `tests/*.rs` 文件分类结果公开为可执行的测试计划 |

### 分析

- **#3259** 的 6 条评论反映**生态信任危机**：企业用户无法通过正规渠道获取安全修复，被迫 fork 或 patch。作者 dacoldest 持续跟进近两周，维护者尚未给出明确发布时间线。
- **#3702** 体现**工程成熟度焦虑**：Reborn 重写规模庞大（47 个 crate），社区要求可验证的回归测试承诺，而非"本地审计"的黑箱。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---|
| 🔴 **P0 - 持续失败** | [#3447](https://github.com/nearai/ironclaw/issues/3447) Nightly E2E failed | 2026-05-19 再次失败，`Full E2E / E2E (v2-engine)` job 失败，commit `8a12959` | ❌ **无 fix PR**，已持续 10 天 |
| 🟡 **P1 - 质量风险** | [#3610](https://github.com/nearai/ironclaw/issues/3610) `ProcessError::Filesystem(String)` 丢失类型信息 | 字符串化错误导致下游脆弱匹配，需改为强类型枚举 | ❌ 无 PR，标记 P0 但未分配 |
| 🟡 **P1 - 配置缺陷** | [#3771](https://github.com/nearai/ironclaw/issues/3771) Configure UI 不支持非 API-key 提供商 | Gemini CLI / OpenAI Codex 无登录/认证入口；AWS Bedrock 配置混乱 | ❌ 无 PR，v0.28.2 目标版本 |

> **关键信号**：Nightly E2E 的 v2-engine 路径持续失败，与 Reborn 大规模重构时间重合，可能存在**测试基础设施与代码变更的耦合断裂**。

---

## 6. 功能请求与路线图信号

### 用户/贡献者提出的新功能

| Issue | 提出者 | 需求 | 纳入可能性 |
|:---|:---|:---|:---|
| [#3798](https://github.com/nearai/ironclaw/issues/3798) Subagent Spawn 设计 | henrypark133 | Reborn agent loop 支持子代理派生，含 3 阶段实现文档（contracts → mechanisms → integration） | ⭐⭐⭐⭐⭐ **高** — 设计文档已完整，与 M3-agentloop-turns 模块直接相关 |
| [#3796](https://github.com/nearai/ironclaw/issues/3796) 租户级 Group + Project ACL | serrrfirat | 项目跨用户共享权限，避免全局 public/private 二极管 | ⭐⭐⭐⭐⭐ **高** — 身份体系已有 `ExecutionContext`/`ResourceScope`，属自然延伸 |
| [#3805](https://github.com/nearai/ironclaw/issues/3805) Notion MCP 能力路径 | serrrfirat | 首个具体 MCP 工具包，依赖 Lane 3/5 完成 | ⭐⭐⭐⭐☆ **中高** — 已列入 Lane 5，有明确前置条件 |
| [#3806](https://github.com/nearai/ironclaw/issues/3806) GitHub WASM 读写能力 | serrrfirat | 首个 WASM 工具包，需 secrets/egress 基座 | ⭐⭐⭐⭐☆ **中高** — Lane 6，与 #3805 并行 |
| [#3804](https://github.com/nearai/ironclaw/issues/3804) Native Memory 能力提供者 | serrrfirat | 内存产品表面通过 Reborn 能力路径暴露 | ⭐⭐⭐⭐☆ **中高** — Lane 4，已有 PR 基线 |

### 路线图结构

Reborn 采用 **"Lane" 并行推进模式**（类似 Railway）：
- **Lane 1-2**：基础设施（REPL、扩展目录）→ **已近完成**
- **Lane 3**：Secrets/Egress 生产化 → **进行中**
- **Lane 4-6**：具体能力包（Memory、Notion、GitHub）→ **待解锁**
- **Lane 7-8**：WebUI Beta 路由、EventStream 时间线/回放 → **收尾中**

---

## 7. 用户反馈摘要

### 痛点

| 来源 | 反馈 | 影响面 |
|:---|:---|:---|
| #3259 评论 | "Downstream consumers pulling from crates.io are pinned to 0.24.0 and cannot upgrade" | **所有 Rust 生态下游用户** |
| #3771 | "Some model providers cannot be configured clearly from the current UI" | 非 API-key 用户（Gemini CLI、Bedrock） |
| #3702 | 本地审计结果未公开，社区无法验证测试覆盖 | 贡献者信任 |

### 使用场景

- **企业集成**：用户通过 crates.io 依赖管理，要求 semver 合规的安全更新通道
- **多模型切换**：Gemini CLI / OpenAI Codex / Bedrock 的混合配置需求上升

### 满意度信号

- Reborn 架构的**模块化设计**（M1-M5 分模块、fake port 独立测试）获内部认可，但社区参与度有限（外部评论少）

---

## 8. 待处理积压

### 长期未响应 / 需维护者介入

| Issue/PR | 创建时间 | 最后更新 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) crates.io 发布滞后 | 2026-05-05 | 2026-05-19 | 🔴 **供应链安全 CVE 暴露** | 紧急协调 crates.io 发布权限，或声明替代分发策略 |
| [#3447](https://github.com/nearai/ironclaw/issues/3447) Nightly E2E 持续失败 | 2026-05-10 | 2026-05-19 | 🔴 **回归测试失效** | 指派专人修复 v2-engine job，或暂时降级为非阻塞 |
| [#3094](https://github.com/nearai/ironclaw/issues/3094) Approval/Auth 交互服务 | 2026-04-29 | 2026-05-19 | 🟡 M4 模块 P0 未启动 | 确认是否被 Lane 3/7 覆盖，避免重复规划 |
| [#3773](https://github.com/nearai/ironclaw/issues/3773) Crate 边界审计 | 2026-05-19 | 2026-05-19 | 🟡 47 crate 所有权模糊 | 维护者需在 PR #3772 上评审并分配模块负责人 |
| PR [#3738](https://github.com/nearai/ironclaw/pull/3738) Trace CLI 迁移 | 2026-05-18 | 2026-05-19 | 🟡 XL 规模，影响 contributor 工作流 | 需要核心维护者批准"prune to contributor-only"的破坏性变更 |

---

*日报基于 GitHub 公开数据生成，时间范围：2026-05-19 至 2026-05-20 UTC*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-20

> **项目地址**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **数据周期**: 2026-05-19 至 2026-05-20（UTC）

---

## 1. 今日速览

今日 LobsterAI 项目呈现**高代码流动、低社区互动**的特征。过去 24 小时内 **50 条 PR 发生状态更新**（26 条待合并、24 条已合并/关闭），但 **Issues 零活动**，且无新版本发布。核心进展集中在 **OpenClaw 多 Agent 编排引擎的稳定性修复**（如子代理会话树形展示、微信网关重启修复）与 **UI/UX 细节打磨**（上下文滑块吸附、K/M 简写输入）。值得注意的是，大量 4 月提交的 PR 今日被批量更新，疑似维护者进行积压清理，但评论数均为 `undefined`，表明社区讨论深度不足，PR 评审可能以线下或内部沟通为主。

---

## 2. 版本发布

**无新版本发布**

- 最新 Release 暂无更新，项目处于持续集成阶段，未进入版本打包节奏。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（24 条中的核心项）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2013](https://github.com/netease-youdao/LobsterAI/pull/2013) | btc69m979y-dotcom | **上下文窗口滑块交互重构**：预设点自动吸附（32K/64K/200K/1M/2M）、K/M 简写输入解析 | 解决大模型上下文配置的用户体验痛点，降低长文本场景下的误操作率 |
| [#2011](https://github.com/netease-youdao/LobsterAI/pull/2011) | btc69m979y-dotcom | **子代理会话可视化**：侧边栏树形结构、独立详情页、父会话快速返回 | 多 Agent 编排从"黑箱"向透明化迈出关键一步，补齐 [#680](https://github.com/netease-youdao/LobsterAI/pull/680) 的 UI 层 |
| [#2014](https://github.com/netease-youdao/LobsterAI/pull/2014) | fisherdaddy | **微信网关重启修复** | IM 渠道稳定性保障，生产环境关键修复 |
| [#2012](https://github.com/netease-youdao/LobsterAI/pull/2012) | liugang519 | **Artifacts 功能迭代**（2026.5.18 版本） | 代码生成/文件产出能力的持续演进 |
| [#680](https://github.com/netease-youdao/LobsterAI/pull/680) | Aoxiang-001 | **多 Agent 编排引擎核心**（3 月 PR 今日关闭） | OpenClaw 子任务实时可观测的底层架构，今日随 UI 层补齐而闭环 |

**整体评估**：项目今日在 **多 Agent 协作可视化** 与 **开发者体验（DX）** 两个维度取得实质进展。子代理功能从引擎层（#680）到界面层（#2011）形成完整闭环，标志着 LobsterAI 的"个人 AI 助手"定位向"可编排 AI 团队"升级。

---

## 4. 社区热点

> **异常信号**：所有 PR 评论数均为 `undefined`，GitHub 公开讨论极度匮乏。以下基于 PR 修改范围与关联性分析潜在热点：

| 热点区域 | 代表 PR | 背后诉求分析 |
|:---|:---|:---|
| **多 Agent 可观测性** | [#680](https://github.com/netease-youdao/LobsterAI/pull/680) + [#2011](https://github.com/netease-youdao/LobsterAI/pull/2011) | 用户/开发者需要理解复杂 Agent 协作的中间过程，而非仅看最终结果；"黑箱"焦虑是 AI 编排工具的核心痛点 |
| **大模型上下文管理** | [#2013](https://github.com/netease-youdao/LobsterAI/pull/2013) | 长上下文模型（1M/2M tokens）普及后，用户需要更直觉化的配置方式，避免数值输入错误导致的高额 API 费用或截断 |
| **IM 渠道稳定性** | [#2014](https://github.com/netease-youdao/LobsterAI/pull/2014) | 微信等第三方网关的可靠性直接影响中国用户的日常可用性，属于基础设施级需求 |
| **OpenClaw 版本升级** | [#1663](https://github.com/netease-youdao/LobsterAI/pull/1663) | 底层运行时持续迭代，插件 SDK 兼容性风险需要被主动管理 |

**社区健康度警示**：50 条 PR 零评论的公开数据，可能表明：
- 核心开发团队以内部评审为主，GitHub 仅作代码托管
- 外部贡献者参与度极低，项目尚未形成开源社区生态
- 或数据抓取存在局限（如评论数据未公开）

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | OpenClaw 微信网关重启异常 | **已修复** | [#2014](https://github.com/netease-youdao/LobsterAI/pull/2014) | IM 渠道用户无法接收/发送消息 |
| 🔴 **高** | 子代理会话 key 解析错误、完成状态检测失效 | **已修复** | [#2011](https://github.com/netease-youdao/LobsterAI/pull/2011) | 多 Agent 任务状态显示不准确 |
| 🟡 **中** | 上下文滑块无法精准定位整数预设值 | **已修复** | [#2013](https://github.com/netease-youdao/LobsterAI/pull/2013) | 大模型配置体验受损 |
| 🟡 **中** | 全局搜索被当前 Agent 隐式过滤 | **待合并** | [#1634](https://github.com/netease-youdao/LobsterAI/pull/1634) | 用户无法跨 Agent 检索历史任务 |
| 🟡 **中** | 日志导出泄露明文 API Key、Token | **待合并** | [#1661](https://github.com/netease-youdao/LobsterAI/pull/1661) | 安全风险，用户隐私合规风险 |
| 🟢 **低** | 多处按钮 tooltip 硬编码英文未国际化 | **待合并** | [#1639](https://github.com/netease-youdao/LobsterAI/pull/1639) | 中文用户界面一致性 |

**稳定性趋势**：今日合并的修复集中在 **运行时稳定性**（网关、子代理状态），待合并项以 **安全合规** 和 **体验细节** 为主，无已知崩溃级回归。

---

## 6. 功能请求与路线图信号

### 待合并 PR 中隐含的下版本方向

| 功能领域 | 代表 PR | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **MCP 生态扩展** | [#1631](https://github.com/netease-youdao/LobsterAI/pull/1631) 快速添加模板（File System/SQLite/Brave Search） | ⭐⭐⭐⭐⭐ 高 | 降低 MCP 配置门槛，符合"个人 AI 助手"易用性定位 |
| **用户个性化** | [#1629](https://github.com/netease-youdao/LobsterAI/pull/1629) 头像设置（预置 SVG + 本地上传） | ⭐⭐⭐⭐☆ 中高 | 基础账户体系完善，6 款预置设计已就绪 |
| **交互标准化** | [#1641](https://github.com/netease-youdao/LobsterAI/pull/1641) 全弹窗 Esc 关闭、[#1636](https://github.com/netease-youdao/LobsterAI/pull/1636) 滚动到底部按钮、[#1637](https://github.com/netease-youdao/LobsterAI/pull/1637) 重新生成按钮 | ⭐⭐⭐⭐⭐ 高 | 对标 ChatGPT/Claude 等主流产品的标准交互，用户预期明确 |
| **系统级集成** | [#1642](https://github.com/netease-youdao/LobsterAI/pull/1642) 右键菜单注册 | ⭐⭐⭐☆☆ 中 | Windows 原生体验增强，但跨平台兼容性需验证 |
| **模型供应商适配** | [#1667](https://github.com/netease-youdao/LobsterAI/pull/1667) Qwen 控制台链接迁移至百炼 | ⭐⭐⭐⭐☆ 中高 | 阿里云生态跟进，零行为变更的配置更新 |

**路线图推测**：下一版本（预计 2026.5.x 或 2026.6）大概率聚焦 **"MCP 易用化" + "交互体验对齐行业标准" + "多 Agent 可视化收尾"**。

---

## 7. 用户反馈摘要

> **直接反馈缺失**：今日无 Issues 活动，无法提取真实用户评论。

**间接推断的痛点**（基于 PR 修复反向推导）：

| 痛点来源 | 具体场景 | 当前状态 |
|:---|:---|:---|
| PR #2013 | 用户拖动滑块想设 200K 上下文，实际跳到 198,432，导致模型调用异常或费用失控 | 已修复，支持吸附 + K/M 简写 |
| PR #1634 | 用户在 Agent A 的页面搜索，找不到 Agent B 上周执行的任务，误以为数据丢失 | 待合并，将解除 Agent 范围限制 |
| PR #1636 | 长对话后手动上滚查看历史，需多次拖动才能回到最新 AI 回复 | 待合并，将新增悬浮滚底按钮 |
| PR #1637 | AI 回复不满意时，需手动复制最后一条用户消息重新发送，操作繁琐 | 待合并，将支持一键重新生成 |
| PR #1661 | 用户按指引导出日志反馈问题，未意识到其中包含明文 API Key | 待合并，将自动脱敏敏感信息 |

**满意度盲区**：缺乏公开用户评论，无法评估功能交付后的真实接受度。

---

## 8. 待处理积压

### 长期未合并的高价值 PR（标记 `stale` 且更新于今日）

| PR | 创建日期 | 滞留天数 | 核心内容 | 风险提示 |
|:---|:---|:---|:---|:---|
| [#1628](https://github.com/netease-youdao/LobsterAI/pull/1628) | 2026-04-10 | **39 天** | 模型选择器 UI 重构（供应商图标、下拉面板优化） | 影响模型切换核心路径，久拖可能导致与设计系统其他更新冲突 |
| [#1629](https://github.com/netease-youdao/LobsterAI/pull/1629) | 2026-04-11 | **38 天** | 用户头像设置功能 | 功能完整度高（6 款预置 + 上传 + 压缩裁剪），长期未合或阻塞账户体系后续迭代 |
| [#1631](https://github.com/netease-youdao/LobsterAI/pull/1631) | 2026-04-11 | **38 天** | MCP 快速添加模板 | MCP 是当前差异化卖点，模板化配置直接影响新用户留存 |
| [#1634](https://github.com/netease-youdao/LobsterAI/pull/1634) | 2026-04-11 | **38 天** | 全局搜索修复 | **功能缺陷级 Bug**，用户搜索体验持续受损 |
| [#1636](https://github.com/netease-youdao/LobsterAI/pull/1636) | 2026-04-12 | **37 天** | 滚动到底部按钮 | 标准交互缺失，长对话场景体验明显落后竞品 |
| [#1637](https://github.com/netease-youdao/LobsterAI/pull/1637) | 2026-04-12 | **37 天** | 重新生成按钮 | 同上，竞品标配功能 |
| [#1640](https://github.com/netease-youdao/LobsterAI/pull/1640) | 2026-04-12 | **37 天** | 工具结果一键复制 | 开发者/高级用户高频操作，体验不一致 |
| [#1641](https://github.com/netease-youdao/LobsterAI/pull/1641) | 2026-04-12 | **37 天** | 全弹窗 Esc 关闭 | 无障碍与效率基础功能 |
| [#1642](https://github.com/netease-youdao/LobsterAI/pull/1642) | 2026-04-12 | **37 天** | 右键菜单注册 | Windows 系统集成，需评估注册表操作安全性 |
| [#1660](https://github.com/netease-youdao/LobsterAI/pull/1660) | 2026-04-13 | **36 天** | 非 main agent 欢迎页个性化 | Agent 生态推广的关键体验细节 |
| [#1661](https://github.com/netease-youdao/LobsterAI/pull/1661) | 2026-04-13 | **36 天** | 日志脱敏 | **安全合规风险**，用户可能已意外泄露密钥 |
| [#1663](https://github.com/netease-youdao/LobsterAI/pull/1663) | 2026-04-14 | **35 天** | OpenClaw v2026.4.12 升级 | 运行时版本滞后，插件兼容性问题累积 |
| [#1667](https://github.com/netease-youdao/LobsterAI/pull/1667) | 2026-04-14 | **35 天** | Qwen 控制台链接更新 | 阿里云旧控制台即将下线，用户配置入口可能失效 |

**维护者行动建议**：
1. **立即优先**：#1661（安全）、#1634（功能缺陷）、#1667（外部依赖失效风险）
2. **本周内**：#1631（MCP 生态）、#1636/#1637（交互标配）、#1663（运行时升级）
3. **评审流程**：建议公开 PR 评审记录或说明 `stale` 标记原因，以提升外部贡献者信心

---

## 附录：数据健康度指标

| 指标 | 数值 | 评估 |
|:---|:---|:---|
| PR 日更新量 | 50 | ⬆️ 活跃（但需区分批量更新 vs 实质评审） |
| Issue 日更新量 | 0 | ⬇️ 异常偏低，缺乏用户反馈入口活跃度 |
| 评论数可用率 | 0/50 = 0% | ⬇️ 数据缺失或社区封闭，透明度不足 |
| Stale PR 占比 | 13/26 待合并 = 50% | ⬇️ 积压严重，合流效率存疑 |
| 外部贡献者 PR | 难以识别（作者多为网易邮箱/内部 ID） | ⬇️ 开源社区属性弱，偏向内部研发外溢 |

> **综合评级**：代码交付能力 **B+**，开源社区运营 **C**，产品体验迭代 **B**。

---

*日报生成时间：2026-05-20*  
*数据来源：GitHub API 抓取（PR/Issue 列表、状态、时间戳）*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-20

---

## 1. 今日速览

Moltis 今日呈现**高活跃度修复节奏**：24小时内 Issues 与 PR 各处理4条，关闭率均达50%。核心维护者 `penso` 单日提交3个修复 PR（合并2个），集中攻克 WebSocket 误报、Docker 沙箱僵尸进程及 Vault 密码同步三大稳定性问题。社区新报2个 Bug，涉及 LLM 模式切换时的连接中断与 hooks 配置运行时失效，尚无修复方案。OpenAI Codex 推理能力支持 PR 持续迭代中，功能交付可期。整体项目健康度：**良好**，修复响应迅速，但配置系统运行时注册机制存在架构级隐患需关注。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭 PR

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#1025](https://github.com/moltis-org/moltis/pull/1025) `fix(sandbox): reap docker sandbox zombies` | [penso](https://github.com/penso) | 为 Docker 沙箱容器启用 `--init` 进程，解决孤儿进程僵尸化累积问题；保留 Podman 加固参数不变 | **生产稳定性关键修复**：消除长期运行实例的资源泄漏风险，完善容器生命周期管理 |
| [#1023](https://github.com/moltis-org/moltis/pull/1023) `fix(web): avoid false websocket disconnect timeouts` | [penso](https://github.com/penso) | 区分 RPC 超时与 WebSocket 真实断开，超时消息暴露具体方法名；新增 Playwright 回归测试 | **用户体验修复**：终结"WebSocket disconnected"误导性报错，提升调试效率，建立前端测试防护网 |

### 待合并 PR

| PR | 作者 | 状态 | 预期影响 |
|:---|:---|:---|:---|
| [#1026](https://github.com/moltis-org/moltis/pull/1026) `fix(vault): keep auth password changes in sync` | [penso](https://github.com/penso) | 待审 | **安全关键**：原子化 Vault 密码轮换，阻断首次密码/重置流程导致的 auth/vault 密码不一致，防止密封 Vault 状态损坏 |
| [#1005](https://github.com/moltis-org/moltis/pull/1005) `feat(openai-codex): add reasoning effort support` | [PeterDaveHello](https://github.com/PeterDaveHello) | 待审（3天迭代中） | **功能增强**：支持 GPT-5 Codex 推理力度配置透传，保留加密推理 blob 兼容性，补齐 OpenAI 最新模型能力适配 |

> **整体迈进评估**：今日修复覆盖**连接层误报**、**容器运行时**、**密钥安全**三大基础设施领域，配合 Codex 能力跟进，显示项目在技术债清偿与前沿功能跟进间保持平衡。

---

## 4. 社区热点

### 最高互动：Docker 沙箱兼容性问题（已解决）

- **[#423](https://github.com/moltis-org/moltis/issues/423)** `[bug] docker moltis + docker sandbox issues` | 👍 **5** | [malicz](https://github.com/malicz)
  - **诉求分析**：高赞反映 Docker 环境下 Moltis 与沙箱协同的部署痛点，属于**生产环境准入门槛**问题。今日通过 #1025 的 `--init` 修复及关联关闭，验证社区对容器稳定性的强需求。

### 功能缺口：MCP OAuth 安全增强（已关闭）

- **[#850](https://github.com/moltis-org/moltis/issues/850)** `[enhancement] Support client_secret in MCP server OAuth override config` | [affanshahid](https://github.com/affanshahid)
  - **诉求分析**：企业级 MCP 集成场景下，OAuth `client_secret` 的显式配置需求，指向**多租户/企业 SSO 适配**的市场方向。快速关闭表明维护团队对 MCP 生态企业化支持的优先级认可。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 现象 | 影响范围 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **高** | [#1024](https://github.com/moltis-org/moltis/issues/1024) `[hooks] config section parsed + validated but never registered at runtime` | `[hooks]` 配置段解析验证通过但运行时未注册，功能静默失效 | 依赖 hooks 扩展的所有工作流（如自定义生命周期回调） | **无** | ⚠️ 待处理 |
| 🟡 **中** | [#1022](https://github.com/moltis-org/moltis/issues/1022) `WebSocket disconnected during LLM modes update` | LLM 模式更新过程中 WebSocket 断开 | 实时协作/流式响应场景 | **无**（#1023 修复误报但未覆盖真实断开） | ⚠️ 待验证关联性 |
| 🟢 **已修复** | [#423](https://github.com/moltis-org/moltis/issues/423) Docker 沙箱问题 | 容器环境兼容故障 | Docker 部署用户 | [#1025](https://github.com/moltis-org/moltis/pull/1025) | ✅ 已关闭 |

> **关键警示**：#1024 属于**架构级配置系统缺陷**——解析/验证与运行时注册分离，可能导致"配置有效但行为缺失"的隐蔽故障，建议优先分配维护者调查注册管道。

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#850](https://github.com/moltis-org/moltis/issues/850) MCP OAuth `client_secret` | **高** | 已关闭，通常意味着已有实现计划或内部跟踪 |
| [#1005](https://github.com/moltis-org/moltis/pull/1005) OpenAI Codex reasoning effort | **高** | PR 活跃迭代3天，PeterDaveHello 持续跟进，预计下一版本合入 |
| #1024 隐含需求 | hooks 运行时注册机制重构 | **中** | 需先修复 Bug，再考虑配置系统整体重构（如注册即验证模式） |

**路线图信号**：MCP 协议企业安全适配 + OpenAI 最新模型能力跟进，双线并行推进 Moltis 作为**企业级 AI 智能体基础设施**的定位。

---

## 7. 用户反馈摘要

### 痛点
- **连接稳定性焦虑**：#1022 用户遭遇 LLM 模式切换断连，#1023 虽修复误报但真实网络/超时问题仍需排查路径透明化
- **配置"黑盒"失效**：#1024 的 hooks 配置"看似有效实则无效"，暴露配置系统的**可观测性缺失**
- **容器环境摩擦**：#423 长期存在的 Docker 部署问题，反映多容器编排场景的测试覆盖不足

### 使用场景
- **企业 MCP 集成**：#850 显示用户将 Moltis 作为 MCP 服务器网关，需对接现有 IAM/OIDC 基础设施
- **实时协作工作流**：WebSocket 高频交互场景（LLM 模式动态切换）对低延迟高可靠有强需求

### 满意度信号
- 高赞 Issue 快速关闭（#423 👍5 → #1025 修复），社区对**修复响应速度**认可
- `penso` 单日三 PR 的高维护者投入，增强项目活跃度信心

---

## 8. 待处理积压

> 基于24小时数据，以下项目需维护者持续关注：

| 项目 | 风险 | 建议行动 |
|:---|:---|:---|
| [#1024](https://github.com/moltis-org/moltis/issues/1024) hooks 运行时注册失效 | **架构债务**，可能波及更多配置段 | 指派核心维护者审查 `config → runtime registry` 管道，评估是否系统性缺陷 |
| [#1022](https://github.com/moltis-org/moltis/issues/1022) LLM 模式 WebSocket 断开 | 与 #1023 修复范围边界不清 | 要求报告者验证是否 #1023 已解决，或补充复现条件区分真实断开 vs 超时 |
| [#1005](https://github.com/moltis-org/moltis/pull/1005) Codex reasoning effort | 3天未合并，可能阻塞 GPT-5 能力发布节奏 | 安排代码审查，明确合并时间表 |

---

*日报生成时间：2026-05-20 | 数据来源：GitHub API 聚合 | 项目地址：[moltis-org/moltis](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-20

> **数据周期**：2026-05-19 00:00 - 2026-05-19 23:59 UTC  
> **项目**：agentscope-ai/CoPaw (QwenPaw)  
> **分析师**：AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览

CoPaw 今日维持**高活跃度运转**：24小时内 38 条 Issues 更新（21 活跃/新开，17 关闭）、44 条 PR 动作（31 已合并/关闭，13 待审），并连发 **v1.1.8 稳定版**与 **v1.1.8-beta.2** 两个版本。社区焦点集中在**新发布的 Pet 插件稳定性问题**（已有 2 起崩溃报告）、**微信 iLink 通道的定时任务可靠性**，以及 **v1.1.7→v1.1.8 升级后的 AGENTS.md 加载回归**。整体项目健康度良好，但新功能发布后的稳定性验证周期需要加强。

---

## 2. 版本发布

### 🔖 v1.1.8 (稳定版)
| 属性 | 内容 |
|:---|:---|
| **发布日期** | 2026-05-19 |
| **核心亮点** | **官方插件分发体系上线** + **桌面宠物插件 (QwenPaw Pet)** |
| **关键变更** | • [PR #4482](https://github.com/agentscope-ai/QwenPaw/pull/4482) 支持从官网浏览下载官方插件，控制台 Plugin Manager 一键安装<br>• 新增 **QwenPaw Pet** 桌面宠物伴侣插件（Snowpaw） |

### 🔖 v1.1.8-beta.2 (预发布)
| 属性 | 内容 |
|:---|:---|
| **性能优化** | • [PR #4502](https://github.com/agentscope-ai/QwenPaw/pull/4502) 控制台模型性能优化（`refactor(console)`）<br>• [PR #4493](https://github.com/agentscope-ai/QwenPaw/pull/4493) Trace 事件批量追加 inbox，减少文件 I/O |
| **迁移注意** | 桌面端用户（Windows .exe / macOS .zip）仍需卸载重装，配置数据存储路径见 [Issue #4430](https://github.com/agentscope-ai/QwenPaw/issues/4430) |

> ⚠️ **风险提示**：Pet 插件在 v1.1.8 正式版发布后 24 小时内已收到 **2 起 Windows 平台崩溃报告**（[Issue #4540](https://github.com/agentscope-ai/QwenPaw/issues/4540), [Issue #4541](https://github.com/agentscope-ai/QwenPaw/issues/4541)），存在 ConnectTimeout → PySide6 闪退问题，建议 Windows 用户暂缓启用或等待热修复。

---

## 3. 项目进展

### ✅ 今日合并/关闭的重要 PR（31 条中的核心项）

| PR | 作者 | 进展意义 |
|:---|:---|:---|
| [PR #4531](https://github.com/agentscope-ai/QwenPaw/pull/4531) | xieyxclack | **v1.1.8 发布说明定稿**，标志官方插件生态正式落地 |
| [PR #4533](https://github.com/agentscope-ai/QwenPaw/pull/4533) | yuanxs21 | Pet 插件官网中英文描述补全，国际化配套完成 |
| [PR #4523](https://github.com/agentscope-ai/QwenPaw/pull/4523) | rayrayraykk | **修复 `/mission` 和 `/<skill>` 信息响应闪退消失 bug**——会话持久化层的关键修复 |
| [PR #4522](https://github.com/agentscope-ai/QwenPaw/pull/4522) | jinliyl | 修正 `tool_result` → `tool_results` 目录拼写错误，解决用户长期困惑（关联 [Issue #4512](https://github.com/agentscope-ai/QwenPaw/issues/4512)）|
| [PR #4527](https://github.com/agentscope-ai/QwenPaw/pull/4527) | Osier-Yi | Docker 部署支持 `QWENPAW_AUTO_INITIALIZATION=0` 禁用自动初始化，解决镜像预热时挂载卷写入冲突 |
| [PR #4524](https://github.com/agentscope-ai/QwenPaw/pull/4524) | xuanrui-L | CloudPaw 插件升级至 0.0.2，修复 toolkit patching 与国际化文档 |
| [PR #4529](https://github.com/agentscope-ai/QwenPaw/pull/4529) | qbc2016 | **模型设置热修复**（hotfix），紧急修复 v1.1.8 相关配置问题 |

### 🚧 待审核心 PR（13 条中的高价值项）

| PR | 状态 | 预期影响 |
|:---|:---|:---|
| [PR #4536](https://github.com/agentscope-ai/QwenPaw/pull/4536) | 首次贡献 | **OpenCode Go 内置 Provider**（10 模型），直接响应 [Issue #4441](https://github.com/agentscope-ai/QwenPaw/issues/4441) 的一键配置诉求 |
| [PR #4537](https://github.com/agentscope-ai/QwenPaw/pull/4537) | 首次贡献 | 飞书群聊**共享会话模式**，群成员共用同一上下文，替代当前 per-user 隔离 |
| [PR #4532](https://github.com/agentscope-ai/QwenPaw/pull/4532) | 新提交 | **MCP 远程服务器 OAuth 2.1 认证**（PKCE + DCR），安全对接外部工具生态 |
| [PR #4530](https://github.com/agentscope-ai/QwenPaw/pull/4530) | 新提交 | **子 Agent 派生（spawn_subagent）**，同一工作区内任务委托，填补单会话与跨 Agent 调用之间的架构空白 |
| [PR #4518](https://github.com/agentscope-ai/QwenPaw/pull/4518) | 新提交 | **Skill Market**（3 提供商、异步扇出搜索、排队安装）+ Skill Hub 客户端从阻塞式 `http.client` 重构为 `httpx` |
| [PR #4520](https://github.com/agentscope-ai/QwenPaw/pull/4520) | 首次贡献，审核中 | 会话输入草稿**页面导航持久化**，解决切页丢内容痛点 |

**整体推进评估**：今日合并 PR 以**稳定性修复和发布配套**为主，待审 PR 则呈现**生态扩展（Skill Market、插件分发、OAuth MCP）**与**架构升级（子 Agent、Tauri 桌面端 [PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)）**并进的态势，项目正从"功能完备"向"生态平台"演进。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---:|:---|:---|
| 1 | [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) WeChat iLink 定时任务推送失败 | **11** | **企业微信场景可靠性**：`context_token` 过期无重试、图片/文件发送失败无日志，生产环境不可接受 | 🔴 Open |
| 2 | [#4496](https://github.com/agentscope-ai/QwenPaw/issues/4496) v1.1.7 后 AGENTS.md 加载为内置模板 | **9** | **升级回归**：系统提示词加载逻辑破坏用户自定义配置，影响所有新建/现有 Agent | 🔴 Open |
| 3 | [#4497](https://github.com/agentscope-ai/QwenPaw/issues/4497) Markdown 表格换行第三次报告 | **4** | **渲染层长期 bug**：`<br>` 标签在表格内不生效，用户已三次提交，体验磨损严重 | 🔴 Open |
| 4 | [#4499](https://github.com/agentscope-ai/QwenPaw/issues/4499) 插件市场发布时间？Codex 式宠物系统？ | **4** | **产品路线图焦虑**：用户从开发者日获知宠物功能，追问商业化节奏 | ✅ Closed（已发布）|
| 5 | [#4515](https://github.com/agentscope-ai/QwenPaw/issues/4515) 429 限流后卡死其他所有模型调用 | **4** | **多租户稳定性**：单模型限流级联阻塞全局，架构级缺陷 | ✅ Closed |

### 📊 热点分析

- **#4477 微信通道**：11 条评论显示该问题已影响用户生产部署，涉及 `context_token` 生命周期管理、重试策略、日志可观测性三个子问题，需维护者优先响应。
- **#4496 AGENTS.md 回归**：9 条评论揭示 v1.1.7 升级后的配置加载优先级 bug，用户自定义模板被内置模板覆盖，直接影响 Agent 行为一致性，属于**高优先级回归**。
- **#4497 Markdown 换行**：同一用户（JobJobovich）第三次提交同一问题（前两次 [#2983](https://github.com/agentscope-ai/QwenPaw/issues/2983)、[#3528](https://github.com/agentscope-ai/QwenPaw/issues/3528)），表明前端渲染层的 issue 闭环机制存在漏洞，用户信任正在损耗。

---

## 5. Bug 与稳定性

### 🚨 严重（生产影响 / 数据丢失 / 安全）

| Issue | 描述 | 影响版本 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) | 微信 iLink 定时任务 `context_token` 过期无重试，图片/文件发送失败无日志 | 未注明 | 无 | 🔴 **无修复** |
| [#4515](https://github.com/agentscope-ai/QwenPaw/issues/4515) | 429 限流后卡死其他所有模型调用（级联阻塞） | v1.1.7 (Docker) | 已关闭，未标注具体 PR | ✅ 已关闭，需验证修复 |
| [#4470](https://github.com/agentscope-ai/QwenPaw/issues/4470) | **插件接口未授权远程代码执行（RCE）漏洞** | v1.1.7 | 已关闭，未标注具体 PR | ✅ 已关闭，安全修复需审计 |
| [#4496](https://github.com/agentscope-ai/QwenPaw/issues/4496) | AGENTS.md 加载为内置默认模板，非工作区实际文件 | v1.1.7 | 无 | 🔴 **无修复** |

### ⚠️ 高（功能不可用 / 崩溃）

| Issue | 描述 | 影响版本 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| [#4541](https://github.com/agentscope-ai/QwenPaw/issues/4541) / [#4540](https://github.com/agentscope-ai/QwenPaw/issues/4540) | **Pet 插件导致主程序闪退**（ConnectTimeout / PySide6） | v1.1.8 | 无 | 🔴 **无修复，新功能首日崩溃** |
| [#4454](https://github.com/agentscope-ai/QwenPaw/issues/4454) | `/mission` 指令导致 Console 完全卡死 | v1.1.7 | [PR #4523](https://github.com/agentscope-ai/QwenPaw/pull/4523) | ✅ **已修复**（会话持久化层）|
| [#4494](https://github.com/agentscope-ai/QwenPaw/issues/4494) | Console 流式生成中途停滞，误报"你打断了我" | v1.1.7 | 已关闭 | ✅ 已关闭 |
| [#4535](https://github.com/agentscope-ai/QwenPaw/issues/4535) | `/backups` 接口从 localhost 访问返回 HTTP 403 | v1.1.8 | [PR #4534](https://github.com/agentscope-ai/QwenPaw/pull/4534)（docs，非代码修复）| 🟡 文档补充，权限逻辑待确认 |

### 🛠️ 中（体验受损 / 兼容性问题）

| Issue | 描述 | 影响版本 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| [#4542](https://github.com/agentscope-ai/QwenPaw/issues/4542) | 模型连接测试 `max_tokens=1` 导致部分 API（B.AI）失败 | 未注明 | 无 | 🔴 **无修复** |
| [#4497](https://github.com/agentscope-ai/QwenPaw/issues/4497) | Markdown 表格 `<br>` 换行不生效（第三次报告） | 未注明 | 无 | 🔴 **无修复，历史遗留** |
| [#4481](https://github.com/agentscope-ai/QwenPaw/issues/4481) | Windows GBK 编码问题需系统级解决（替代零散补丁） | 未注明 | 无 | 🔴 **无修复，架构级需求** |

---

## 6. 功能请求与路线图信号

### 📌 用户明确提出的新需求

| Issue | 需求 | 热度 | 已有 PR / 关联 | 纳入可能性 |
|:---|:---|:---:|:---|:---|
| [#3570](https://github.com/agentscope-ai/QwenPaw/issues/3570) | "All Chats" 列表分页功能（大数据量加载慢） | 4 评论 | 无 | ⭐⭐⭐ 高，性能刚需，长期未响应 |
| [#4441](https://github.com/agentscope-ai/QwenPaw/issues/4441) | 一键配置 OpenCode Go | 3 评论 | **[PR #4536](https://github.com/agentscope-ai/QwenPaw/pull/4536) 已提交** | ⭐⭐⭐⭐⭐ **极可能纳入 v1.1.9** |
| [#4514](https://github.com/agentscope-ai/QwenPaw/issues/4514) | 对话输出增加来源追溯 / 引用（Source Tracing / Citation） | 2 评论 | 无 | ⭐⭐⭐ 中，RAG 场景刚需 |
| [#4463](https://github.com/agentscope-ai/QwenPaw/issues/4463) | 基于缓存 prompt usage 优化上下文 token 估算 | 2 评论 | 无 | ⭐⭐⭐ 中，性能优化方向 |
| [#3001](https://github.com/agentscope-ai/QwenPaw/issues/3001) | 飞书 CardKit 流式输出（参考钉钉 AI Card） | 3 评论 | 无 | ⭐⭐⭐ 中，[PR #4537](https://github.com/agentscope-ai/QwenPaw/pull/4537) 群聊共享模式可能为前置 |

### 🔮 路线图信号（从 PR 推断）

| 方向 | 证据 PR | 预期时间 |
|:---|:---|:---|
| **MCP 生态安全接入** | [PR #4532](https://github.com/agentscope-ai/QwenPaw/pull/4532) OAuth 2.1 for MCP | v1.1.9 或 v1.2.0 |
| **子 Agent 架构** | [PR #4530](https://github.com/agentscope-ai/QwenPaw/pull/4530) spawn_subagent | v1.2.0（架构级变更）|
| **Skill Market 商业化** | [PR #4518](https://github.com/agentscope-ai/QwenPaw/pull/4518) 3 提供商、异步搜索、排队安装 | v1.1.9 |
| **Tauri 桌面端替代** | [PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) Tauri 2.x（审核中，4 月提交）| v1.2.0 或更长周期 |
| **输入体验优化** | [PR #4520](https://github.com/agentscope-ai/QwenPaw/pull/4520) 草稿持久化 | v1.1.9 |

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 场景 | 原声摘录 | 关联 Issue |
|:---|:---|:---|
| **升级焦虑** | "卸载重装后，之前 1.1.6 中配置的 API keys、模型参数、对话历史等数据是否会丢失？" | [#4430](https://github.com/agentscope-ai/QwenPaw/issues/4430) |
| **新功能稳定性** | "安装 Pet 插件后，发送第一条消息，整个 QwenPaw 主程序就会立即崩溃闪退" | [#4541](https://github.com/agentscope-ai/QwenPaw/issues/4541) |
| **企业微信可靠性** | "当用户隔夜没有发送消息时，缓存的 context_token 过期，仅打一行日志后放弃，不会重试" | [#4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) |
| **前端渲染磨损** | "I'm writing this for the 3rd time. Line breaks in Markdown tables don't work." | [#4497](https://github.com/agentscope-ai/QwenPaw/issues/4497) |
| **限流级联故障** | "切换任何看似正常的模型也无法恢复，因为 console 消息队列已被永久清空" | [#4449](https://github.com/agentscope-ai/QwenPaw/issues/4449) |

### 😊 满意点

- **插件生态期待兑现**："上周开发者日好像看到已经有宠物功能了，计划啥时候发布？" → v1.1.8 当日发布，需求响应速度获认可（[#4499](https://github.com/agentscope-ai/QwenPaw/issues/449

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 | 2026-05-20

---

## 1. 今日速览

ZeptoClaw 今日处于**低活跃维护状态**。过去24小时内无新增 Issues，PR 活动仅包含 2 条由 Dependabot 自动发起的 GitHub Actions 依赖更新，其中 1 条已关闭、1 条待合并。无人工贡献者介入，无功能迭代或 Bug 修复，项目核心代码库未发生实质性变动。整体健康度评估：**依赖维护正常，但社区驱动力不足**。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

| PR | 状态 | 说明 |
|:---|:---|:---|
| [#586](https://github.com/qhkm/zeptoclaw/pull/586) | **已关闭** | 将 `taiki-e/install-action` 从 2.75.17 升级至 2.75.29 |
| [#591](https://github.com/qhkm/zeptoclaw/pull/591) | **待合并** | 将 `taiki-e/install-action` 从 2.75.17 升级至 2.77.3 |

**进展分析**：今日关闭的 #586 与待合并的 #591 均为同一依赖的递进版本更新。值得注意的是，#591 直接跳过了 #586 已合并的中间版本（2.75.29），指向更高版本 2.77.3，推测维护者可能选择"跳过合并、直接升级"策略以减少 CI 流水线变更频率。两条 PR 均未触及项目核心功能，**整体推进量为零**——无新特性、无修复、无架构调整。

---

## 4. 社区热点

今日无社区讨论热点。

| 指标 | 数据 |
|:---|:---|
| 人工评论数 | 0 |
| 社区反应（👍/👎等） | 0 |
| 非机器人贡献者参与 | 0 |

**诉求分析**：Dependabot 的连续更新提示 CI/CD 基础设施依赖存在版本滞后，但缺乏维护者主动审查与合并的节奏说明。社区对项目维护状态的关注度本身成为隐性诉求——长期仅依赖机器人活动可能削弱外部贡献者信心。

---

## 5. Bug 与稳定性

| 严重程度 | 数量 | 详情 |
|:---|:---|:---|
| 🔴 严重 | 0 | — |
| 🟡 中等 | 0 | — |
| 🟢 轻微 | 0 | — |

**稳定性评估**：今日无 Bug 报告。现有 CI 依赖更新（`taiki-e/install-action`）属于构建工具链维护，不影响运行时稳定性。待合并的 #591 若延迟处理，存在未来 GitHub Actions 工作流因上游弃用旧版本而中断的**潜在风险**。

---

## 6. 功能请求与路线图信号

| 来源 | 内容 | 纳入可能性 |
|:---|:---|:---|
| 无新信号 | — | — |

**路线图判断**：基于现有数据，无法推断下一版本方向。项目需维护者主动开启 Discussion 或发布 Roadmap Issue 以引导社区预期。

---

## 7. 用户反馈摘要

今日无用户反馈数据可提炼。

> ⚠️ **数据缺口提示**：连续 24 小时零 Issues 活动可能反映两种状态：（a）项目处于成熟稳定期，用户无紧急问题；（b）用户基数萎缩或社区参与度下降。建议结合 Stars 增长趋势、外部引用量等长期指标交叉验证。

---

## 8. 待处理积压

| 类型 | 项目 | 状态 | 建议行动 |
|:---|:---|:---|:---|
| PR 待合并 | [#591](https://github.com/qhkm/zeptoclaw/pull/591) | 已开放 1 天 | 维护者审查合并，避免 Dependabot PR 堆积 |
| 长期观察 | 无人工 PR/Issue | — | 关注是否存在未标记的社区贡献等待响应 |

**维护者提醒**：当前唯一待处理项为机器人 PR，但需警惕"零人工活动"模式持续化。建议：
1. 设定 Dependabot PR 自动合并规则（如补丁版本通过 CI 后自动合并）
2. 主动创建 `good first issue` 标签议题，激活社区参与

---

*日报生成时间：2026-05-20 | 数据来源：GitHub API 快照*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-20

## 1. 今日速览

ZeroClaw 今日呈现**高活跃度、高积压特征**。过去24小时 Issues 更新 8 条（6 活跃/新开，2 关闭），PR 更新高达 **47 条**（仅 2 条已合并/关闭，45 条待审），审阅队列压力显著。社区贡献者 yijunyu 发起大规模通道架构重构（16+ 个 PR），将各通道的自定义 allowlist 逻辑统一迁移至 `aspect_std::AllowlistAspect`，属于 ICSE 2027 M1 评估的系统性工程。v0.8.0 巨型 PR（#6398，XL 级，覆盖 50+ 标签）仍在寻求审批，成为版本发布的阻塞点。整体项目健康度：**功能迭代活跃，但代码审阅与合并效率存在瓶颈**。

---

## 2. 版本发布

**无新版本发布**。

v0.8.0 候选版本 PR #6398 自 2026-05-05 起开放，至今未合并，是事实上的版本发布阻塞项。该 PR 寻求审批以作为 **Beta 版本基础**，作者 singlerider 明确请求社区使用大上下文模型进行审阅。

---

## 3. 项目进展

### 已关闭/合并项

| 项目 | 类型 | 说明 | 链接 |
|:---|:---|:---|:---|
| **Issue #1458** | 功能完成 | 本地 CA 证书支持（自定义推理提供商）— 解决企业内网/私有 PKI 场景下的 TLS 连接问题，历时近 3 个月关闭 | [Issue #1458](https://github.com/zeroclaw-labs/zeroclaw/issues/1458) |
| **Issue #6543** | 功能完成 | ACP v1 session restore 实现 — 协议兼容性补全，支持会话恢复与续传 | [Issue #6543](https://github.com/zeroclaw-labs/zeroclaw/issues/6543) |

### 关键推进中的 PR

| 项目 | 状态 | 意义 | 链接 |
|:---|:---|:---|:---|
| **PR #6398** | 待审批（XL 级） | **v0.8.0 核心**：多智能体运行时 + Schema V3，覆盖 core/agent/runtime/security 等全栈模块，是项目架构升级的关键里程碑 | [PR #6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) |
| **PR #6777** | 待合并 | 修复 `SqliteMemory::purge_namespace` 的列名错误（category → namespace），对应今日新报 Bug #6801 | [PR #6777](https://github.com/zeroclaw-labs/zeroclaw/pull/6777) |

---

## 4. 社区热点

### 最高讨论热度：Dream Mode 长期设计（Issue #5849）

| 指标 | 数据 |
|:---|:---|
| 评论数 | **10 条**（今日 Issues 中最高） |
| 创建时间 | 2026-04-18（已持续 1 个月） |
| 标签 | `enhancement`, `risk: high`, `priority:p1`, `status:accepted` |

**核心诉求**：用户期望 ZeroClaw 具备"类睡眠"的周期性记忆整合机制——空闲时自动压缩日间记忆、反思交互模式、更新长期知识结构。这反映了**个人 AI 助手向"自主进化"形态演进**的强烈社区预期。该 Issue 已被接受（`status:accepted`），但实现复杂度与风险等级均为 high，可能依赖 v0.8.0 的 runtime 架构。

**链接**：[Issue #5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849)

### 架构级 RFC：Air-gapped 执行模式（Issue #6293）

| 指标 | 数据 |
|:---|:---|
| 标签 | `risk: high`, `status:blocked`, `needs-maintainer-review`, `type:rfc` |
| 状态 | **被阻塞，需维护者审阅** |

**核心诉求**：企业/高安全场景下的离线执行能力——将 ZeroClaw 拆分为离线 Agent 容器与在线 Companion Daemon，通过 Unix socket 通信。直接关联**可信执行环境（TEE/Enclave）**支持，是金融、政务等敏感领域的准入门槛。当前阻塞状态表明维护者资源紧张或存在架构分歧。

**链接**：[Issue #6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293)

---

## 5. Bug 与稳定性

| 优先级 | 项目 | 组件 | 严重程度 | 状态 | 说明 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **S1** | **Issue #6771** | security/sandbox | **工作流阻塞** | 待修复 | Multiline Heredocs 被 SecurityPolicy 误拦截——**ZeroClaw 自身技能无法执行 PR 创建**，自噬性 bug | [Issue #6771](https://github.com/zeroclaw-labs/zeroclaw/issues/6771) |
| 🟡 **S2** | **Issue #6801** | memory | 行为降级 | **PR #6777 已提交待合并** | `purge_namespace` 误删 `category` 列而非 `namespace` 列，命名与实现不一致，数据隔离逻辑失效 | [Issue #6801](https://github.com/zeroclaw-labs/zeroclaw/issues/6801) / [PR #6777](https://github.com/zeroclaw-labs/zeroclaw/pull/6777) |

**风险评估**：S1 级 bug #6771 尚未见关联 PR，直接影响 ZeroClaw 的"自我改进"能力（无法自动提 PR），建议优先处理。

---

## 6. 功能请求与路线图信号

| 功能 | 来源 | 纳入可能性 | 关键信号 |
|:---|:---|:---|:---|
| **Skills 系统 UX 全面优化（v0.7.6）** | Issue #6253 | ⭐⭐⭐⭐⭐ **高** | `priority:p1`, `status:accepted`，singlerider 主导，明确作为 v0.7.6 主题 | [Issue #6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) |
| **通道编译时裁剪** | Issue #6770 | ⭐⭐⭐⭐☆ 较高 | 明确的构建优化需求，`zeroclaw channel list` 应反映实际编译特性，减少二进制体积 | [Issue #6770](https://github.com/zeroclaw-labs/zeroclaw/issues/6770) |
| **Dream Mode（记忆整合）** | Issue #5849 | ⭐⭐⭐☆☆ 中等 | 已接受但 `risk: high`，可能依赖 v0.8.0+ 的 cron/heartbeat 基础设施 |
| **Air-gapped/Enclave 模式** | Issue #6293 | ⭐⭐☆☆☆ 不确定 | `status:blocked`，需维护者介入解除阻塞 |

**v0.8.0 释放信号**：PR #6398 的合并将解锁 Dream Mode、Air-gapped 等依赖新 runtime 的高级功能。

---

## 7. 用户反馈摘要

### 痛点提炼

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **企业网络环境** | Issue #1458（已解决） | 无法连接私有 CA 的自定义推理端点，"开箱即废" |
| **安全策略过度拦截** | Issue #6771 | SecurityPolicy 对合法 heredoc 语法误报，**"ZeroClaw 阻止 ZeroClaw 工作"** — 策略引擎与业务逻辑脱节 |
| **构建体积控制** | Issue #6770 | 未启用的通道仍出现在列表中，造成用户困惑与潜在的安全暴露面 |
| **记忆管理语义混乱** | Issue #6801 | API 命名（`purge_namespace`）与实际 SQL（`category = ?1`）不符，开发者信任受损 |

### 积极信号

- **Skills 生态**：Issue #6253 明确邀请社区输入，表明项目正从"功能堆砌"转向"开发者体验优先"
- **通道架构统一**：yijunyu 的 16+ PR 集群显示代码库正经历**工程化治理**，长期维护成本将降低

---

## 8. 待处理积压

### 审阅队列危机：45 个待合并 PR

| 风险等级 | 项目 | 积压天数 | 后果 |
|:---|:---|:---|:---|
| 🔴 **极高** | **PR #6398（v0.8.0）** | 15 天+ | 阻塞 Beta 发布，下游功能（Dream Mode、Air-gapped）全部等待 |
| 🟡 **高** | **yijunyu 的 16+ AllowlistAspect 迁移 PRs** | 1 天（今日集中提交） | 批量审阅负担，但属于 ICSE 2027 评估的 deadline-driven 工作 |
| 🟡 **高** | **Issue #6293（Air-gapped）** | 17 天 | `needs-maintainer-review` 标签明确，维护者响应缺失 |

### 建议行动

1. **立即**：指派维护者审阅 PR #6398，或拆分其为可并行审阅的子模块
2. **本周**：处理 S1 bug #6771，恢复 ZeroClaw 的自我改进工作流
3. **建立机制**：对 yijunyu 的批量 PR 采用"批量审批 + 自动化测试"策略，避免审阅者疲劳

---

*日报基于 GitHub 公开数据生成，时间范围：2026-05-19 至 2026-05-20*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*