# OpenClaw 生态日报 2026-05-30

> Issues: 326 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-30 00:25 UTC

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

# OpenClaw 项目动态日报 | 2026-05-30

---

## 1. 今日速览

OpenClaw 今日保持**极高活跃度**：24小时内 326 条 Issues 更新（153 新开/活跃，173 关闭），500 条 PR 更新（341 待合并，159 已合并/关闭），4 个 beta 版本连续发布。项目处于**密集迭代期**，核心团队正全力冲刺 Codex 运行时稳定性与 Agent 子系统可靠性。Issues 关闭率 53% 显示维护响应效率良好，但 341 个待合并 PR 表明代码审查队列承压，存在合并瓶颈风险。

---

## 2. 版本发布

### v2026.5.28-beta.1 ~ beta.4（连续迭代）

| 版本 | 发布时间 | 核心变更 |
|:---|:---|:---|
| [v2026.5.28-beta.4](https://github.com/openclaw/openclaw/releases/tag/v2026.5.28-beta.4) | 2026-05-28 | Agent 与 Codex 运行时恢复稳定性增强 |
| [v2026.5.28-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.5.28-beta.3) | 2026-05-28 | 同上 |
| [v2026.5.28-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.28-beta.2) | 2026-05-28 | 同上 |
| [v2026.5.28-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.28-beta.1) | 2026-05-28 | 同上 |

**Highlights（四版本一致）：**
- **Agent/Codex 运行时恢复更稳健**：子代理保持 cwd/workspace 隔离
- **Hook 上下文限制在 prompt 本地作用域**，避免跨会话污染
- **Session 锁在超时中止时正确释放**，消除死锁残留
- **避免陈旧重启 continuation**，防止状态混淆
- **Codex app-server/helper 故障不再摧毁共享运行时状态**——关键可靠性修复

**迁移注意事项**：beta.1→beta.4 为快速迭代补丁，无破坏性变更，建议所有 2026.5.27 用户升级以解决 Codex 运行时崩溃问题。

---

## 3. 项目进展

### 今日合并/关闭的关键 PR

| PR | 作者 | 状态 | 贡献 |
|:---|:---|:---|:---|
| [#88107](https://github.com/openclaw/openclaw/pull/88107) | RomneyDa | ✅ 合并 | 构建优化：tarball 仅包含当前 changelog 章节，减少分发体积 |
| [#88160](https://github.com/openclaw/openclaw/pull/88160) | RomneyDa | ✅ 合并 | 测试基建：隔离 fake-timer 单元测试，解决并行执行挂起 |
| [#84535](https://github.com/openclaw/openclaw/pull/84535) | funmerlin | ✅ 合并 | Discord 通道修复：运行时配置解析 message action，解决 `configured_unavailable` 错误 |

### 推进中的核心功能（待合并）

| PR | 作者 | 状态 | 里程碑意义 |
|:---|:---|:---|:---|
| [#88161](https://github.com/openclaw/openclaw/pull/88161) | joshavant | 🟡 待合并 | **重启 sentinel 内部化**：修复 #87792，阻止合成重启 turn 自动回传通道，保留 CLI/MCP/队列上下文——**Agent 可靠性核心修复** |
| [#88130](https://github.com/openclaw/openclaw/pull/88130) | steipete | 🟡 需证明 | **Codex OAuth 压实保留**：修复 #86820，Codex 会话压实时通过 `openai-codex` 路由而非回退到直接 `openai` API-key——**解决 OAuth 断裂** |
| [#88135](https://github.com/openclaw/openclaw/pull/88135) | brokemac79 | 🟡 待审查 | **Codex 陈旧托管运行时插件刷新**：修复 #87650/#88120，版本绑定插件收敛路径——**升级迁移关键** |
| [#88172](https://github.com/openclaw/openclaw/pull/88172) | promptclickrun | 🟡 需证明 | **MCP 孤儿进程清理**：会话拆卸时杀死孤立 stdio 子进程 + 死传输自动重连——**Cron 稳定性** |
| [#84814](https://github.com/openclaw/openclaw/pull/84814) | clawsweeper[bot] | 🚀 自动合并就绪 | 嵌入式提供商业务拒绝分类回退——**自动化合并流水线验证** |

**整体评估**：项目今日在 **Agent 运行时隔离性**、**Codex OAuth 链路完整性**、**MCP 进程生命周期管理** 三个深层架构领域取得实质进展，但大量 PR 仍卡在"需证明"或"待审查"状态，审查带宽是主要瓶颈。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 👍 | 核心诉求 |
|:---|:---|:---:|:---:|:---|
| 1 | [#67035](https://github.com/openclaw/openclaw/issues/67035) Windows 聊天 UI 回归：输入吞字、流式回复不可见 | 13 | 0 | **Windows 用户基础体验崩溃**，2个月未修复，P1 优先级 + platinum hermit 评级，社区耐心耗尽 |
| 2 | [#84038](https://github.com/openclaw/openclaw/issues/84038) `doctor --fix` 静默迁移 `openai-codex/` → `openai/` 破坏 PI+OAuth | 12 | 3 | **配置迁移工具不可信**，用户明确配置被覆盖，数据丢失风险 |
| 3 | [#88102](https://github.com/openclaw/openclaw/issues/88102) 2026.5.27 Codex 运行时拒绝 `openai/gpt-5.5` | 11 | 1 | **升级即断裂**：VPS 升级后原有工作流失效，workaround 牺牲 Telegram /status |
| 4 | [#86820](https://github.com/openclaw/openclaw/issues/86820) Codex OAuth 压实回退到直接 OpenAI API 失败 | 10 | 6 | **高赞=广泛共鸣**：OAuth 会话无 API key 时压实失败，架构设计缺陷 |
| 5 | [#51871](https://github.com/openclaw/openclaw/issues/51871) 控制面板 Cron 作业不显示 | 10 | 1 | **Raspberry Pi 长期用户**：仪表盘空白，德语报告表明国际用户基础 |

**诉求分析**：
- **升级焦虑主导**：5.27 版本成为"危险版本"，多个 Issue 指向升级后即时断裂
- **Windows/UI 边缘化**：#67035 持续 6 周无修复 PR，桌面端用户体验被优先级牺牲
- **配置工具反噬**：`doctor --fix` 从"修复工具"变成"破坏工具"，信任危机

---

## 5. Bug 与稳定性

### P1 严重 Bug（按影响范围排序）

| Issue | 状态 | 严重程度 | 已有 Fix PR | 描述 |
|:---|:---|:---:|:---:|:---|
| [#88102](https://github.com/openclaw/openclaw/issues/88102) | ✅ 关闭 | 🔴 回归 | [#88135](https://github.com/openclaw/openclaw/pull/88135) | Codex 运行时拒绝 `openai/gpt-5.5`，升级即失效 |
| [#87650](https://github.com/openclaw/openclaw/issues/87650) | 🟡 开放 | 🔴 升级阻断 | [#88135](https://github.com/openclaw/openclaw/pull/88135) | `onboard` + `doctor --fix` 无法恢复 Codex 提供商/运行时不匹配 |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | 🟡 开放 | 🔴 超时风暴 | ❌ 无 | Codex-backed Telegram 回合反复超时，无法到达 `turn/completed` |
| [#87711](https://github.com/openclaw/openclaw/issues/87711) | 🟡 开放 | 🔴 消息丢失 | ❌ 无 | Telegram 话题通道首次回合空交付（仅 footer），`/new` 后触发 |
| [#87646](https://github.com/openclaw/openclaw/issues/87646) | 🟡 开放 | 🔴 通道崩溃 | ❌ 无 | 飞书通道升级 5.27 后消息分发失败：`Cannot read properties of undefined (reading 'run')` |
| [#67035](https://github.com/openclaw/openclaw/issues/67035) | 🟡 开放 | 🔴 UI 不可用 | ❌ 无 | Windows 聊天 UI 输入吞字、流式回复不可见（**6 周+**） |
| [#54155](https://github.com/openclaw/openclaw/issues/54155) | 🟡 开放 | 🔴 内存泄漏 | ❌ 无 | Gateway 内存 389MB → 14.7GB/4天，会话累积泄漏 |
| [#75378](https://github.com/openclaw/openclaw/issues/75378) | 🟡 开放 | 🔴 事件循环饱和 | ❌ 无 | 并行子代理 spawn 导致 1012 服务重启 |
| [#86509](https://github.com/openclaw/openclaw/issues/86509) | ✅ 关闭 | 🔴 事件循环饥饿 | ❌ 无 | 5.22 回归：87s 会话锁阶段，31s 循环延迟（回退到 5.20 恢复） |

### 稳定性模式识别

```
[紧急] Codex 运行时链：5.27 版本引入的提供商/运行时同步问题集群
├── 模型拒绝 (88102) → PR #88135 修复中
├── OAuth 压实断裂 (86820) → PR #88130 修复中  
├── 升级后不匹配 (87650) → PR #88135 修复中
└── Telegram 超时 (87744) → 无 PR，疑似相关

[慢性] 事件循环饱和：并行负载下的 Node.js 单线程瓶颈
├── 子代理 spawn (75378)
├── 上下文压实 (86358, 已关闭)
└── 模型别名索引构建 (86635, 已关闭)

[长期] Windows/UI 债务：桌面端体验持续恶化
└── #67035 无修复 PR，platinum hermit 评级形同虚设
```

---

## 6. 功能请求与路线图信号

### 活跃功能请求

| Issue | 👍 | 需求 | 纳入可能性 |
|:---|:---:|:---|:---|
| [#17925](https://github.com/openclaw/openclaw/issues/17925) | 5 | ZAI (GLM) + Google (Gemini) 原生 `web_search` 透传 | **高**——已有 xAI Grok 先例 (`runGrokSearch`)，模式清晰 |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | 3 | 按 Agent 配置 dreaming（内存核心梦境），避免全量 OOM | **中**——架构改动中等，有明确性能痛点 |
| [#10118](https://github.com/openclaw/openclaw/issues/10118) | 3 | TUI Shift+Enter 换行支持 | **低**——P3 优先级，off-meta tidepool 评级 |
| [#82968](https://github.com/openclaw/openclaw/issues/82968) | 1 | Agent 可靠挂钟时间源（非 uptime） | **中**——架构基础能力，调度场景刚需 |

### 信号判断

- **原生搜索扩展** (#17925)：代码路径已存在（`runGrokSearch`），社区贡献友好，预计下一版本纳入
- **执行拒绝列表** (PR [#82596](https://github.com/openclaw/openclaw/pull/82596))：XL 规模功能 PR，等待作者，安全边界相关，可能推迟到 2026.6.x

---

## 7. 用户反馈摘要

### 真实痛点（直接引用 Issue 语境）

| 场景 | 用户原声 | 情绪 |
|:---|:---|:---:|
| **升级即生产事故** | "After upgrading a live VPS from OpenClaw 2026.5.26 to 2026.5.27, the previously working `openai/gpt-5.5` + Codex runtime route began failing" | 😤 愤怒 |
| **配置工具背叛信任** | "`doctor --fix` silently migrates intentional openai-codex/ config to openai/, breaking PI+OAuth runtime and causing 3-4x token inflation" | 😠 被欺骗感 |
| **诊断信息黑洞** | "Multi-turn agent runs against `opencode-go/kimi-k2.6`... hit a generic provider 400... rotates to fallback... actual failure details are lost" | 😵 无助 |
| **长期忽视累积** | "After upgrading to OpenClaw 2026.4.14 on Windows, the chat experience regressed badly... This does **not** look like a simple slow-model issue" | 😔 失望 |
| **架构能力缺失** | "OpenClaw/Cleo appears to lack an explicit reliable wall-clock time source exposed to the agent... uptime is not a substitute for current date/time" | 🤔 困惑 |

### 满意度亮点

- **快速回退机制有效**：#86509 用户明确记录 "Rolled back to v2026.5.20 to recover; 5.22 added to local BLOCKED_VERSIONS"——版本管理策略被用户自主采用
- **社区自诊断活跃**：#87536 由 "AI agents ARC + Claude as investigation tools" 驱动，用户已内化 AI 辅助调试工作流

---

## 8. 待处理积压

### 高优先级长期未响应

| Issue | 创建日期 | 最后更新 | 天数 | 风险 |
|:---|:---|:---|:---:|:---|
| [#67035](https://github.com/openclaw/openclaw/issues/67035) Windows UI 回归 | 2026-04-15 | 2026-05-29 | **45天** | 🚨 **用户流失风险**：Windows 是主流桌面平台，platinum hermit 评级但无修复 PR |
| [#54155](https://github.com/openclaw/openclaw/issues/54155) Gateway 内存泄漏 | 2026-03-25 | 2026-05-29 | **66天** | 🚨 **运维灾难**：14.7GB/4天，生产部署不可持续 |
| [#51593](https://github.com/openclaw/openclaw/issues/51593) Moonshot/Kimi 重复工具调用 ID | 2026-03-21 | 2026-05-29 | **70天** | 高：WhatsApp 群组场景暴露，diamond lobster 评级 |
| [#62328](https://github.com/openclaw/openclaw/issues/62328) node:sqlite 缺失 FTS5 | 2026-04-07 | 2026-05-29 | **53天** | 中：内存搜索关键词回退失效，Node.js 内置限制 |

### 维护者行动建议

1. **立即**：为 #67035 分配前端/Windows 专门开发者，或公开声明 Windows 支持优先级调整
2. **本周**：审查 #54155 内存泄漏的根因分析（会话累积模式），考虑引入临时 GC 强制策略
3. **流程**：platinum hermit/diamond lobster 评级 Issue 应强制绑定修复 PR 或升级至维护者决策会议

---

*日报生成时间：2026-05-30 | 数据来源：GitHub openclaw/openclaw 公开 API 与事件流*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析 | 2026-05-30

---

## 1. 生态全景

个人 AI 助手开源生态正处于**"从演示到生产"的阵痛转型期**：头部项目（OpenClaw、CoPaw）日均处理 300-500 条代码变更，密集迭代 Agent 运行时稳定性与多模态能力；安全架构成为分水岭——NanoBot 单日爆发 16 个安全审计、NanoClaw 遭遇 MCP 供应链钓鱼警示，显示生态从"功能竞赛"转向"信任基建"；多智能体协作从概念验证进入工程化落地，但 Agent 间通信协议（A2A、ACP）尚未形成标准共识，各项目处于"各自为政"的协议割据状态。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | Release | 健康度 | 关键特征 |
|:---|:---:|:---:|:---|:---|:---|
| **OpenClaw** | 326 (153新/173关) | 500 (341待/159关) | v2026.5.28-beta.1~4 | 🟡 **A-** | 绝对体量霸主，审查队列承压，Codex 运行时链紧急修复 |
| **CoPaw** | 46 (20新/26关) | 34 (16待/18关) | v1.1.10-beta.1 | 🟡 **B+** | 高周转效率，定时任务隔离性刚修复，向量膨胀隐患 |
| **IronClaw** | 18 (12新/6关) | 46 (25待/21关) | 无 | 🟡 **B+** | Reborn 架构产品化深水区，crates.io 发布滞后侵蚀信任 |
| **NanoBot** | 33 (30新/3关) | 43 (27待/16关) | 无 | 🔴 **B-** | 安全审计洪峰，14个修复 PR 待审，#4078 认证缺失零修复 |
| **Hermes Agent** | 50 (估算) | 50 (40待/10关) | v0.15.1/v0.15.2 紧急热修 | 🟡 **B** | v0.15.0 回归灾难，24h 双版本止血，打包流程系统性缺陷 |
| **ZeroClaw** | 17 (16新/1关) | 41 (38待/3关) | 无 | 🔴 **B-** | 38 PR 高压蓄水池，#6848 XL 级集成质变前夜，S1 级 Bug 零修复 |
| **LobsterAI** | 1新 | 14 (5待/9关) | 无 | 🟢 **B+** | 大输出性能优化当日闭环，5 个 stale PR 体验债务待清 |
| **NullClaw** | 3 (全关) | 12 (3待/9关) | v2026.5.29 | 🟢 **A-** | 当日 3 个 P0 全修复，Zig 工具链升级顺畅，响应速度标杆 |
| **PicoClaw** | 2 (长期) | 8 (3待/5关) | v0.2.9 正式版 | 🟢 **B+** | 稳健发布节奏，MCP Web UI 降低接入门槛，国际化深度覆盖 |
| **NanoClaw** | 2新 | 8 (5待/3关) | 无 | 🟡 **B** | LangFuse 可观测性落地，供应链安全警示需 48h 内回应 |
| **Moltis** | 4 (3新/1关) | 2 (0待/2关) | 无 | 🟡 **B** | #1084 当日闭环标杆，arm64 兼容性危机双 Issue 阻断 |
| **TinyClaw** | 0 | 0 | 无 | ⚫ **休眠** | 24h 零活动 |
| **ZeptoClaw** | 0 | 0 | 无 | ⚫ **休眠** | 24h 零活动 |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **规模霸权** | 326 Issues / 500 PRs = **3-10× 于次席**，社区体量呈数量级领先 | CoPaw (46/34)、IronClaw (18/46) 均不足其 1/5 |
| **技术路线** | **"全栈运行时"策略**：自研 Codex 运行时 + 多提供商抽象 + 通道即服务 | IronClaw 走"Rust 安全内核+Reborn 组合体"深度架构；CoPaw 聚焦"桌面端+Tauri"体验；NanoClaw 押注"OneCLI 安全凭证" |
| **优势领域** | 通道生态广度（Telegram/Discord/飞书/IRC 全覆盖）、模型提供商抽象成熟度、版本迭代速度（4 beta/日） | 但 Windows UI 债务 45 天零修复，桌面端体验弱于 CoPaw/LobsterAI |
| **风险短板** | **审查带宽瓶颈**：341 待合并 PR，"需证明"状态积压；升级断裂焦虑（5.27 成"危险版本"） | NullClaw 当日 3 P0 全修复是其响应速度标杆，OpenClaw 规模反成负担 |
| **社区结构** | 核心维护者（RomneyDa 等）+ 自动化流水线（clawsweeper[bot]）双轨驱动 | 相比 IronClaw 的 NousResearch 机构背书、CoPaw 的阿里 AgentScope 生态，OpenClaw 更依赖分布式个体贡献 |

**定位结论**：OpenClaw 是生态**"最大公约数"**——功能最全、社区最广、迭代最快，但正遭遇"成功税"：规模扩张导致质量管控与边缘场景（Windows UI、内存泄漏）被优先级牺牲，存在**"大而脆"**风险。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---:|
| **Agent 运行时隔离与恢复** | OpenClaw、CoPaw、NullClaw、NanoBot | 子 Agent cwd/workspace 隔离（OpenClaw beta.4）、session 锁超时释放、孤儿进程清理（NanoBot #4078）、定时任务 session 隔离（CoPaw #4653） | 🔴 **P0** |
| **MCP 生态安全与标准化** | NanoClaw、PicoClaw、IronClaw、OpenClaw | 供应链凭证窃取（NanoClaw #2641）、MCP Web UI 简化配置（PicoClaw v0.2.9）、MCP 扩展 Reborn 化（IronClaw）、Codex 陈旧插件刷新（OpenClaw #88135） | 🔴 **P0** |
| **多智能体协作协议** | Hermes Agent、PicoClaw、CoPaw、Moltis | A2A 协议支持（Hermes #514）、Agent 对等通信（PicoClaw #2929）、Agent Teams 自然语言驱动（CoPaw #3224）、PTY 子 Agent 编排（Moltis #235） | 🟡 **P1** |
| **大输出/长上下文性能** | LobsterAI、OpenClaw、CoPaw | >20KB 延迟渲染（LobsterAI #2077）、Markdown 默认折叠（#2075）、上下文压缩 token 追踪（NanoClaw #2456）、向量索引 37GB 膨胀（CoPaw #4795） | 🟡 **P1** |
| **认证与凭证治理** | IronClaw、NanoClaw、ZeroClaw、NanoBot | product-auth 系统（IronClaw Reborn）、OneCLI 安全凭证（NanoClaw）、OAuth 压实保留（OpenClaw #88130）、未认证 API 调用（NanoBot #4078） | 🔴 **P0** |
| **桌面端/本地部署体验** | CoPaw、LobsterAI、Moltis、ZeroClaw | Tauri 打包内置 CLI（CoPaw #4779）、VBScript→PowerShell（LobsterAI #2057）、arm64 Docker 兼容（Moltis #1085）、Local-First 模式（ZeroClaw #5287） | 🟡 **P1** |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 全通道、全模型、自研 Codex 运行时 | **进阶开发者/自托管用户** | Node.js 事件循环单线程，Agent 子系统隔离性近期强化 |
| **IronClaw** | 企业级安全内核、Reborn 组合体架构 | **B2B SaaS/企业 IT** | Rust + WASM 安全沙箱，product-auth 分级凭证，crates.io 发布滞后 |
| **CoPaw** | 桌面端原生体验、多智能体协作工具矩阵 | **个人生产力用户/轻度开发者** | Tauri + Python 后端，AgentScope 框架绑定，定时任务场景深耕 |
| **NanoBot** | 记忆系统双模式、模型预设快速切换 | **中文社区/微信生态用户** | 安全审计集中爆发暴露 Node.js 运行时攻击面，手动记忆模式差异化 |
| **Hermes Agent** | 本地模型成本优化、A2A 协议前瞻 | **隐私敏感/本地部署爱好者** | Python 异步，Lazy Tool Loading 降本，打包分发流程脆弱 |
| **NullClaw** | 极致响应速度、Zig 原生性能 | **系统编程爱好者/边缘部署** | Zig 全栈，ACP stdio 适配器，进程状态机严谨 |
| **NanoClaw** | 可观测性集成、安全凭证闭环 | **企业运维/合规敏感用户** | LangFuse 追踪，OneCLI 凭证注入，v2 安全不变量 |
| **PicoClaw** | 低代码 MCP 配置、边缘设备适配 | **IoT/嵌入式开发者** | Go 运行时，MCP Web UI 降低门槛，国际化深度 |
| **ZeroClaw** | 企业 IM 全覆盖、审批工作流 | **企业协作平台集成者** | Elixir/BEAM 并发，TUI + RPC 质变前夜，DenyWithEdit 审批 |
| **LobsterAI** | 大输出执行可靠性、技能路由元数据化 | **Agent 应用开发者** | Electron 前端，OpenClaw 启动优化，子 Agent 生命周期管理 |
| **Moltis** | 技能粒度控制、沙箱安全执行 | **技能市场/插件生态建设者** | Apple Containers/Docker 双后端，arm64 兼容性危机 |

---

## 6. 社区热度与成熟度

```
【快速迭代期 — 功能扩张与架构重构】
├── OpenClaw      规模扩张，审查瓶颈，"大而脆"风险
├── IronClaw      Reborn 产品化深水区，安全工程领先
├── CoPaw         AgentScope 2.0 迁移前夜，桌面端打磨
├── NanoBot       安全审计洪峰，手动记忆模式差异化
└── ZeroClaw      #6848 质变前夜，38 PR 高压蓄水池

【质量巩固期 — 稳定性修复与体验债务清偿】
├── NullClaw      当日 P0 全修复标杆，Zig 工具链稳健
├── LobsterAI     大输出性能当日闭环，stale PR 待清
├── PicoClaw      v0.2.9 稳定发布，国际化深度覆盖
├── NanoClaw      可观测性落地，供应链安全需回应
└── Hermes Agent  v0.15.x 回归止血，打包流程加固

【危机/转型期 — 可用性阻断或方向调整】
├── Moltis        arm64 双后端阻断，#235 需求悬空 94 天
└── TinyClaw/ZeptoClaw  休眠，资源投入不足
```

---

## 7. 值得关注的趋势信号

| 信号 | 证据链 | 对开发者的价值 |
|:---|:---|:---|
| **"升级即生产事故"成为常态** | OpenClaw 5.27 "危险版本"、Hermes v0.15.0 回归灾难、CoPaw v1.1.9 卡死 | **建立蓝绿部署与自动回滚机制**，版本管理从"可选"变为"必需"；用户自发采用 `BLOCKED_VERSIONS` 策略值得工具化 |
| **MCP 供应链安全信任崩塌** | NanoClaw #2641 凭证窃取警示、NanoBot #4078 未认证 API、OpenClaw `doctor --fix` 反噬 | **MCP 服务器需建立签名验证与沙箱分级**，官方安全路径（OneCLI）vs 第三方风险路径的对比将成用户决策关键 |
| **"记忆污染"驱动架构重构** | NanoBot 手动记忆模式（#4050）、CoPaw 定时任务 session 隔离（#4653）、OpenClaw Hook 上下文本地作用域 | **记忆系统的"自动/手动"双模式将成为标配**，用户要求从"智能"转向"可控" |
| **本地/边缘部署浪潮倒逼轻量化** | ZeroClaw Local-First (#5287)、Moltis arm64 危机、PicoClaw Raspberry Pi 场景 | **"云优先"架构需增加"离线降级"路径**，Ollama 等小型模型用户的提示词开销与功能裁剪是差异化空间 |
| **Agent 协作协议割据** | Hermes A2A (#514)、NullClaw ACP (#896)、PicoClaw 对等通信 (#2929)、CoPaw spawn_subagent (#4806) | **协议层存在"W3C 时刻"机遇**，率先实现跨框架 Agent 互操作的项目将获得网络效应 |
| **CJK/国际化体验从边缘到核心** | ZeroClaw CLI 退格字节删除 (#6995)、CoPaw 飞书卡片重构、PicoClaw 捷克语 100% | **Unicode 处理、企业微信/飞书深度适配、RTL 语言**是进入非英语市场的门票 |
| **可观测性从"运维奢侈品"到"生产必需"** | NanoClaw LangFuse 集成、OpenClaw 诊断信息黑洞、CoPaw 向量膨胀无预警 | **Agent 调用链追踪、token 成本归因、上下文压缩可视化**将成为框架竞争力标准配置 |

---

*分析基于 2026-05-30 各项目公开 GitHub 数据，适合技术决策者评估框架选型与贡献投入优先级。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-30

## 1. 今日速览

NanoBot 今日迎来**异常高强度的开发冲刺**，24小时内 Issues 更新 33 条（90.9% 为新建/活跃）、PR 更新 43 条（62.8% 待合并），活跃度远超常规工作日水平。核心特征是**安全审计集中爆发**——社区成员 `hamb1y` 单日提交 16 个安全/稳定性 Issues 及配套修复 PR，覆盖 SSRF、认证绕过、权限提升、数据竞争等关键攻击面。同时 `outlook84` 推进的**手动记忆模式**（Manual Memory Mode）进入 PR 阶段，标志着记忆系统架构的重大演进。项目整体处于**高动能、高风险的密集迭代期**，需关注大量并发 PR 的审查质量与合并冲突风险。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 状态 | 核心贡献 |
|:---|:---|:---|:---|
| [#3696](https://github.com/HKUDS/nanobot/pull/3696) `feat(config): add model presets for quick model switching` | chengyongru | **已合并** | 引入 `ModelPresetConfig` 实现模型预设+自动故障转移+运行时切换，显著降低多模型部署的运维复杂度 |
| [#4051](https://github.com/HKUDS/nanobot/pull/4051) `fix(exec): bypass cmd.exe for multi-line python -c commands on Windows` | chengyongru | **已合并** | Windows 执行层关键修复：PowerShell 替代 cmd.exe 处理多行命令，解决 `python -c` 代码截断导致的静默失败 |
| [#3696](https://github.com/HKUDS/nanobot/pull/3696) 的合并标志着 **NanoBot 配置系统进入"声明式基础设施"阶段**，模型路由从硬编码转向预设驱动。

### 待合并的高价值 PR

| PR | 作者 | 关联 Issue | 架构影响 |
|:---|:---|:---|:---|
| [#4050](https://github.com/HKUDS/nanobot/pull/4050) `feat: add manual memory mode` | outlook84 | #3885, #3948 | **记忆系统双模式架构**：自动模式（现有）与手动模式（用户显式控制记忆流）隔离，解决长期困扰用户的记忆污染与隐私控制问题 |
| [#4086](https://github.com/HKUDS/nanobot/pull/4086) `fix(security): normalize IPv6-mapped IPv4 addresses in SSRF checks` | yorkhellen | 安全加固 | SSRF 防御绕过修复，IPv6 兼容层漏洞封堵 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🔥1 | [#2772](https://github.com/HKUDS/nanobot/issues/2772) 微信对话最多返回10条消息 | **7 评论** | **长期未解的上下文窗口痛点**：微信渠道硬编码的 10 条消息限制 vs 用户期望的长对话连续性，反映渠道适配层缺乏可配置性 |
| 🔥2 | [#4044](https://github.com/HKUDS/nanobot/issues/4044) `[bug] short term memory loss` | **4 评论** | **记忆系统可靠性危机**：上下文窗口压力导致"自问自答失忆"，用户对话体验断裂，直接推动 #4050 手动记忆模式的优先级 |
| 3 | [#3006](https://github.com/HKUDS/nanobot/issues/3006) API 欠费无警告 | 1 评论 | 运维可观测性缺失，已关闭但未说明修复方式 |
| 4 | [#4043](https://github.com/HKUDS/nanobot/issues/4043) 配置禁用文档提取 | 1 评论 | **工作流灵活性诉求**：用户已有 docling/OCR 管道，强制注入造成冗余，已关闭并纳入配置优化 |

**诉求洞察**：社区正从"能用"向"可控、可观测、可集成"演进，记忆系统与渠道配置是两大摩擦点。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重级别 | Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#4078](https://github.com/HKUDS/nanobot/issues/4078) | OpenAI-compatible API **未认证即可调用 agent loop** | 待创建 | **无修复，暴露面极大** |
| 🔴 **Critical** | [#4077](https://github.com/HKUDS/nanobot/issues/4077) | WebSocket token 签发路由**无需 secret 即可铸造短期 token** | [#4103](https://github.com/HKUDS/nanobot/pull/4103) | ✅ 已提交 |
| 🔴 **Critical** | [#4076](https://github.com/HKUDS/nanobot/issues/4076) | message 工具**可向未授权目标发送消息+任意媒体路径** | [#4102](https://github.com/HKUDS/nanobot/pull/4102) | ✅ 已提交 |
| 🔴 **Critical** | [#4075](https://github.com/HKUDS/nanobot/issues/4075) | Dream **可覆盖用户创建的技能文件**（无所有权校验） | [#4101](https://github.com/HKUDS/nanobot/pull/4101) | ✅ 已提交 |
| 🟠 **High** | [#4074](https://github.com/HKUDS/nanobot/issues/4074) | MCP HTTP/SSE **SSRF 校验前已尝试 loopback 连接** | [#4100](https://github.com/HKUDS/nanobot/pull/4100) | ✅ 已提交 |
| 🟠 **High** | [#4073](https://github.com/HKUDS/nanobot/issues/4073) | `extra_allowed_dirs` **被当作可写根目录** | [#4099](https://github.com/HKUDS/nanobot/pull/4099) | ✅ 已提交 |
| 🟠 **High** | [#4072](https://github.com/HKUDS/nanobot/issues/4072) | ExecTool **相对符号链接绕过工作区限制** | [#4098](https://github.com/HKUDS/nanobot/pull/4098) | ✅ 已提交 |
| 🟠 **High** | [#4081](https://github.com/HKUDS/nanobot/issues/4081) | `MemoryStore.append_history` **并发写入重复 cursor** | 待关联 | 无独立 PR |
| 🟡 **Medium** | [#4080](https://github.com/HKUDS/nanobot/issues/4080) | `process_direct` **绕过 per-session 分发锁** | 待关联 | 无独立 PR |
| 🟡 **Medium** | [#4079](https://github.com/HKUDS/nanobot/issues/4079) | API 空响应重试**重复用户 turn** | 待关联 | 无独立 PR |
| 🟡 **Medium** | 其他 8 个稳定性 Issues (#4065-#4069, #4057-#4059) | 配置回退、流超时、会话键碰撞、工具协议等 | [#4090](https://github.com/HKUDS/nanobot/pull/4090)-[#4097](https://github.com/HKUDS/nanobot/pull/4097) | ✅ 批量修复中 |

**关键风险**：[#4078](https://github.com/HKUDS/nanobot/issues/4078) **尚无修复 PR**，OpenAI-compatible API 的认证缺失意味着任何可网络访问的 NanoBot 实例都可能被未授权调用，建议维护者**立即阻断**或降级该端点。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 成熟度评估 | 纳入下一版本概率 |
|:---|:---|:---|:---|
| **手动记忆模式**（Manual Memory Mode） | #3885, #3948 → [#4050](https://github.com/HKUDS/nanobot/pull/4050) | PR 已提交，架构清晰 | **>90%** — 解决核心痛点，社区呼声高 |
| **模型预设快速切换** | [#3696](https://github.com/HKUDS/nanobot/pull/3696) | **已合并** | ✅ vNext 已包含 |
| **配置禁用文档提取** | [#4043](https://github.com/HKUDS/nanobot/issues/4043) | 已关闭，方案未公开 | 60% — 需确认是否纳入配置 schema |
| **Matrix E2EE 设备验证** | [#4042](https://github.com/HKUDS/nanobot/issues/4042) | Issue 待响应 | 40% — 需 Matrix 渠道维护者介入 |
| **微信上下文长度可配置** | [#2772](https://github.com/HKUDS/nanobot/issues/2772) | 长期悬置，无 PR | 30% — 渠道特定，优先级可能被稀释 |

**路线图信号**：记忆系统的"手动/自动双模式"将成为 NanoBot 区别于其他 AI Agent 框架的**差异化能力**，建议配套文档与迁移指南同步准备。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 Issue | 情绪强度 |
|:---|:---|:---|
| **"失忆"焦虑**：多轮对话中 Bot 忘记自己刚问的问题，用户体验断裂 | [#4044](https://github.com/HKUDS/nanobot/issues/4044) | 😤 高 — 直接质疑核心能力 |
| **黑箱运维**：API 欠费无提示，服务静默失效 | [#3006](https://github.com/HKUDS/nanobot/issues/3006) | 😤 高 — 生产环境致命 |
| **管道冲突**：强制文档提取与现有 OCR 工作流冗余 | [#4043](https://github.com/HKUDS/nanobot/issues/4043) | 😕 中 — 灵活性不足 |
| **渠道限制硬编码**：微信 10 条消息天花板无法突破 | [#2772](https://github.com/HKUDS/nanobot/issues/2772) | 😤 高 — 长期未解 |

### 满意度信号

- `chengyongru` 的 Windows exec 修复 [#4051](https://github.com/HKUDS/nanobot/pull/4051) 体现**跨平台工程成熟度提升**
- 模型预设 [#3696](https://github.com/HKUDS/nanobot/pull/3696) 获运维场景认可

---

## 8. 待处理积压

### 需维护者紧急关注

| Issue/PR | 悬置时间 | 风险描述 |
|:---|:---|:---|
| [#2772](https://github.com/HKUDS/nanobot/issues/2772) 微信 10 条限制 | **~57 天** | 高活跃 Issue（7 评论），无维护者回应，渠道用户流失风险 |
| [#4044](https://github.com/HKUDS/nanobot/issues/4044) 短期记忆丢失 | **2 天** | 虽新但评论增速快，与 #4050 的关联需官方确认 |
| [#4042](https://github.com/HKUDS/nanobot/issues/4042) Matrix E2EE 验证 | **2 天** | 安全合规类，Element X 用户群体扩大中 |
| [#4078](https://github.com/HKUDS/nanobot/issues/4078) API 未认证访问 | **1 天** | 🔴 **Critical 无 PR**，建议 24h 内响应 |

### PR 审查瓶颈

- `hamb1y` 单日提交 **14 个修复 PR**（#4088-#4103），形成**审查洪峰**，建议：
  - 按安全/稳定性/功能分层合并
  - 优先审查认证/授权类 PR（#4100-#4103）
  - 关注批量修复的回归测试覆盖率

---

**日报生成时间**: 2026-05-30  
**数据基准**: 过去 24h GitHub 活动（2026-05-29 至 2026-05-30）

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-30

## 1. 今日速览

Hermes Agent 今日处于**高活跃修复状态**。项目在 24 小时内连续发布 v0.15.1 和 v0.15.2 两个补丁版本，紧急修复 v0.15.0 引入的 Docker 启动崩溃、dashboard 无限重载及插件发现失效等回归问题。Issue 和 PR 各 50 条更新显示社区正集中火力处理 v0.15.x 迁移阵痛。40 个待合并 PR 中大量为当日提交的修复，维护者响应速度极快，但打包/分发环节的系统性问题（plugin.yaml 缺失、模块未声明）暴露出 CI/CD 流程的覆盖盲区。

---

## 2. 版本发布

### [v0.15.2 (v2026.5.29.2)](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.29.2) — 紧急热修复
| 属性 | 内容 |
|:---|:---|
| **发布日期** | 2026-05-29 |
| **关键修复** | [827f7f07](https://github.com/NousResearch/hermes-agent/commit/827f7f07825be57108cbea18325e8f5e9fb5d2f2) 修复 wheel 和 sdist 中未打包 `plugin.yaml` 清单文件的问题 |
| **影响范围** | 所有 `pip install` 用户，v0.15.1 的 platform/discord/irc 等适配器完全不可用的场景 |
| **迁移注意** | 若已从 v0.15.1 手动修复，升级后无需额外操作；Docker 用户需拉取最新镜像 |

### [v0.15.1 (v2026.5.29)](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.29) — 同日热修复
| 属性 | 内容 |
|:---|:---|
| **发布日期** | 2026-05-29 |
| **关键修复** | **Dashboard 无限重载循环**（loopback 模式下的 headline fix） |
| **变更规模** | 28 commits · 21 merged PRs · 9 contributors |
| **已知问题** | 该版本自身引入 plugin.yaml 缺失问题，随后被 v0.15.2 修复 |

> ⚠️ **破坏性变更警示**：v0.15.0 → v0.15.1/0.15.2 的升级路径中，`container_boot` 模块被移除，Docker 初始化脚本路径变更，导致 [#34071](https://github.com/NousResearch/hermes-agent/issues/34071)、[#34091](https://github.com/NousResearch/hermes-agent/issues/34091) 等启动失败。建议 Docker 用户跳过 v0.15.0/v0.15.1，直接使用 v0.15.2+ 并检查 `HERMES_UID`/`PUID` 配置。

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（稳定性修复为主）

| PR | 作者 | 状态 | 核心贡献 |
|:---|:---|:---|:---|
| [#34835](https://github.com/NousResearch/hermes-agent/pull/34835) | [teknium1](https://github.com/teknium1) | ✅ **Merged** | `hermes uninstall` 正确清理 Node 符号链接，避免删除后残留死链污染 PATH |
| [#34845](https://github.com/NousResearch/hermes-agent/pull/34845) | [teknium1](https://github.com/teknium1) | ✅ **Merged** | 辅助 LLM 调用不再默认发送 `max_tokens`，修复 GitHub Copilot GPT-5 的 400 错误（关闭 [#34530](https://github.com/NousResearch/hermes-agent/issues/34530)） |
| [#34851](https://github.com/NousResearch/hermes-agent/pull/34851) | [teknium1](https://github.com/teknium1) | ✅ **Merged** | 声明 `setuptools` 为 dev 依赖，修复 CI 中打包测试收集失败 |
| [#34538](https://github.com/NousResearch/hermes-agent/pull/34538) | [Bartok9](https://github.com/Bartok9) | ❌ **Closed** | 被 #34835 替代，同主题但分支落后 |

**整体推进评估**：今日合并以"止血"为主，解决 v0.15.0 发布后的连锁打包/配置回归。无新功能进入主线，但基础设施健壮性得到紧急加固。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求 |
|:---|:---|:---:|:---:|:---|
| 1 | [#514 A2A (Agent-to-Agent) Protocol Support](https://github.com/NousResearch/hermes-agent/issues/514) | **23** | 12 | **生态互操作性**：要求支持 Google A2A 开放标准，与 MCP 互补实现"谁能帮我"的代理发现，而非仅"我能用什么工具" |
| 2 | [#18080 Improved Themes for Dashboard](https://github.com/NousResearch/hermes-agent/issues/18080) | **22** | **32** | **可访问性/UX**：当前主题对比度不足、serif 字体可读性差，用户强烈要求专业设计标准的暗色主题 |
| 3 | [#6839 Lazy Tool Schema Loading](https://github.com/NousResearch/hermes-agent/issues/6839) | **20** | 13 | **本地模型成本**：50+ 工具每次全量注入消耗 3500-5000 tokens，本地模型推理成本过高，需两阶段延迟加载 |

**诉求分析**：社区正从"能用"向"好用、省成本、可协作"演进。A2A 协议支持反映多代理编排的真实需求；主题问题暴露前端专业度短板；Lazy Loading 则是本地部署场景的经济性刚需。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| **P1** 🔴 | [#34071](https://github.com/NousResearch/hermes-agent/issues/34071) | 🟡 Open | v0.15.0 Docker 镜像启动崩溃：`stage2-hook.sh`、`main-wrapper.sh` 缺失，`container_boot` 模块移除 | 部分修复于 v0.15.2，持续跟进 |
| **P1** 🔴 | [#13356](https://github.com/NousResearch/hermes-agent/issues/13356) | 🟡 Open | Telegram 文件附件虚假成功（返回 msg ID 但未实际送达） | 无 |
| **P1** 🔴 | [#32646](https://github.com/NousResearch/hermes-agent/issues/32646) | 🟡 Open | `fallback_providers` 在 429 后未激活（zai 智谱 provider） | 无 |
| **P1** 🔴 | [#34966](https://github.com/NousResearch/hermes-agent/issues/34966) | 🟡 Open | MCP reload 泄漏进程，旧实例永不终止，直至 OOM | 无 |
| **P1** 🔴 | [#34443](https://github.com/NousResearch/hermes-agent/issues/34443) | ✅ **Closed** | MCP TaskGroup 单服务器初始化失败导致整个 gateway 崩溃 | 已修复 |
| **P1** 🔴 | [#34600](https://github.com/NousResearch/hermes-agent/issues/34600) | ✅ **Closed** | 配置迁移 23→24 静默清空 `cron/jobs.json`，17 个定时任务丢失 | 已修复 |
| **P1** 🔴 | [#32164](https://github.com/NousResearch/hermes-agent/issues/32164) | ✅ **Closed** | `disk-cleanup` 插件误删 cron 注册表 | 已修复 |
| **P2** 🟡 | [#34091](https://github.com/NousResearch/hermes-agent/issues/34091) | 🟡 Open | v0.15.0 Docker TUI 不可用，events feed 断开 | 无 |
| **P2** 🟡 | [#35026](https://github.com/NousResearch/hermes-agent/issues/35026) | 🟡 Open | Linux `hermes update` 失败（0.15.1） | 无 |
| **P2** 🟡 | [#34616](https://github.com/NousResearch/hermes-agent/issues/34616) | 🟡 Open | Bot-to-bot 场景"silence narration"消息导致无限循环 | 无 |
| **P2** 🟡 | [#35032](https://github.com/NousResearch/hermes-agent/issues/35032) | 🟡 Open | 飞书审批按钮 v0.15.0 后失效（无管理员配置时） | 无 |
| **P2** 🟡 | [#35025](https://github.com/NousResearch/hermes-agent/issues/35025) | 🟡 Open | Docker `stage2-hook.sh` 每次启动重复 `chown`（非默认 UID 时） | 无 |
| **P2** 🟡 | [#34871](https://github.com/NousResearch/hermes-agent/issues/34871) | 🟡 Open | `hermes mcp serve` 崩溃：`mcp_serve` 模块未打包 | [#35044](https://github.com/NousResearch/hermes-agent/pull/35044) Open |
| **P2** 🟡 | [#34517](https://github.com/NousResearch/hermes-agent/issues/34517) | ✅ **Closed** | `MEDIA:` 标签因正则白名单缺失静默丢弃 `.md` 等文件 | 已修复 |
| **P2** 🟡 | [#34447](https://github.com/NousResearch/hermes-agent/issues/34447) | ✅ **Closed** | ntfy 网关回声循环：代理回复被当作新消息 | 已修复 |
| **P2** 🟡 | [#34491](https://github.com/NousResearch/hermes-agent/issues/34491) | ✅ **Closed** | `check_for_updates()` 缓存未失效，pip 升级后仍显示"落后 1 commit" | 已修复 |

**稳定性评估**：v0.15.0 发布引入显著回归，Docker 和打包分发是重灾区。维护者 24 小时内双版本迭代响应迅速，但仍有 9 个 P1/P2 问题待修复，进程泄漏和网关崩溃问题尤为危险。

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 纳入可能性 | 信号强度 |
|:---|:---|:---|:---|
| [#514 A2A Protocol](https://github.com/NousResearch/hermes-agent/issues/514) | 协议互操作 | ⭐⭐⭐⭐⭐ **高** | 23 评论、12 👍、作者 teknium1 为核心维护者，A2A 与现有 MCP 工具架构互补而非竞争 |
| [#6839 Lazy Tool Schema](https://github.com/NousResearch/hermes-agent/issues/6839) | 性能优化 | ⭐⭐⭐⭐☆ **中高** | 20 评论、13 👍、本地部署痛点明确，技术方案（两阶段注入）已详细设计 |
| [#34745 Paginated Memory](https://github.com/NousResearch/hermes-agent/issues/34745) | 记忆系统 | ⭐⭐⭐☆☆ **中** | 2 评论，但 2200 字符限制是架构瓶颈，需较大改动 |
| [#34786 Automatic reasoning fallback](https://github.com/NousResearch/hermes-agent/issues/34786) | 模型适配 | ⭐⭐⭐⭐☆ **中高** | 1 评论，但 reasoning/thinking 参数兼容性是多 provider 的普遍痛点 |
| [#35048 `/compress here [N]`](https://github.com/NousResearch/hermes-agent/pull/35048) | CLI 交互 | ⭐⭐⭐⭐⭐ **高** | PR 已提交，teknium1 自提自审，Claude Code 灵感，边界感知压缩是明确增量功能 |
| [#20096 Channel-based profile routing](https://github.com/NousResearch/hermes-agent/pull/20096) | 网关路由 | ⭐⭐⭐⭐☆ **中高** | 26 天前提交，今日仍有更新，多租户/多身份是 Discord 部署刚需 |
| [#25442 GIF→PNG auto-convert](https://github.com/NousResearch/hermes-agent/pull/25442) | 视觉处理 | ⭐⭐⭐☆☆ **中** | 16 天前，技术实现简单，但属于边缘 case |

**下一版本（v0.16.0?）预测信号**：A2A 协议支持、Lazy Tool Loading、`/compress here` 交互优化、channel-based routing 最可能进入路线图。

---

## 7. 用户反馈摘要

### 😤 痛点（来自真实 Issue 评论）

> *"The selection of fonts and colours is non-standard... small and light font weight with little contrast makes the dashboard hard to read"*  
> — [#18080](https://github.com/NousResearch/hermes-agent/issues/18080)，前端可访问性是持续抱怨

> *"After updating to v0.15.0, I cannot use my TUI in the dashboard... 'events feed disconnected'"*  
> — [#34091](https://github.com/NousResearch/hermes-agent/issues/34091)，升级即破坏的信任损耗

> *"All 17 scheduled cron jobs were lost silently... User only noticed hours later"*  
> — [#34600](https://github.com/NousResearch/hermes-agent/issues/34600)，配置迁移的数据安全焦虑

> *"Every API call injects full tool schemas for ALL enabled toolsets... ~3,500-5,000 tokens per call"*  
> — [#6839](https://github.com/NousResearch/hermes-agent/issues/6839)，本地模型用户的成本敏感

### ✅ 满意点

- 维护者响应极快：v0.15.0 问题当日即出 v0.15.1/v0.15.2
- 社区协作活跃：[#34538](https://github.com/NousResearch/hermes-agent/pull/34538) 被 [#34835](https://github.com/NousResearch/hermes-agent/pull/34835) 优雅替代，体现 PR 迭代文化

---

## 8. 待处理积压

| Issue/PR | 创建日期 | 最后更新 | 风险 | 提醒 |
|:---|:---|:---|:---|:---|
| [#514 A2A Protocol](https://github.com/NousResearch/hermes-agent/issues/514) | 2026-03-06 | 2026-05-29 | ⭐⭐⭐⭐⭐ | **86 天开放**，评论最多功能请求，teknium1 需确认是否纳入 Q3 路线图或需要社区 RFC |
| [#18080 Dashboard Themes](https://github.com/NousResearch/hermes-agent/issues/18080) | 2026-04-30 | 2026-05-29 | ⭐⭐⭐⭐☆ | 32 👍 最高，30 天未关闭，需设计资源介入或标记 `good first issue` |
| [#8008 Discord channel matching](https://github.com/NousResearch/hermes-agent/pull/8008) | 2026-04-12 | 2026-05-30 | ⭐⭐⭐⭐☆ | **48 天开放**，P1 级 Discord 适配器修复，生产环境验证通过，合并阻塞原因不明 |
| [#26480 SimpleX WebSocket reliability](https://github.com/NousResearch/hermes-agent/pull/26480) | 2026-05-15 | 2026-05-30 | ⭐⭐⭐☆☆ | 15 天开放，去中心化通信基础设施，与 [#35046](https://github.com/NousResearch/hermes-agent/pull/35046) 可协同审查 |
| [#20096 Channel-based routing](https://github.com/NousResearch/hermes-agent/pull/20096) | 2026-05-05 | 2026-05-30 | ⭐⭐⭐⭐☆ | 25 天开放，功能完整但可能需架构审查，建议维护者明确 milestone |

---

**日报生成时间**：2026-05-30  
**数据来源**：NousResearch/hermes-agent GitHub 公开活动  
**健康度评分**：🟡 **B**（响应迅速但回归密集，打包/分发流程需系统性加固）

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-30

> **项目**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw) | **日期**: 2026-05-30 | **分析周期**: 过去24小时

---

## 1. 今日速览

PicoClaw 今日保持**中等活跃度**，核心开发节奏稳健。24小时内完成 **v0.2.9 正式版**及配套 Nightly 构建发布，标志着 MCP（Model Context Protocol）配置 Web UI 等关键功能进入稳定通道。PR 侧呈现"高吞吐"特征：8条 PR 中 5 条已合并/关闭，合并率达 62.5%，但待合并队列中仍积压 3 条含高价值功能（图像压缩、工作区安全修复）。Issues 侧相对平静，2 条活跃 Issue 均属长期功能请求，社区对 WhatsApp 构建支持及多 Agent 协作通信的需求持续发酵。

---

## 2. 版本发布

### v0.2.9 正式版 ⭐ 推荐升级
| 属性 | 详情 |
|:---|:---|
| **版本** | [v0.2.9](https://github.com/sipeed/picoclaw/releases/tag/v0.2.9) |
| **发布日期** | 2026-05-29 |
| **构建类型** | 稳定版本 |

**核心变更**：
- **MCP 配置 Web UI** ([#2770](https://github.com/sipeed/picoclaw/commit/1055e082a427f8e055465cb64456e3271e038fba)) — 在配置界面新增 MCP（Model Context Protocol）服务器配置板块，降低协议接入门槛
- **工具反馈输出优化** — `tool_feedback` 默认启用 `pretty_print` 与 `disable_escape_html`，提升 LLM 工具调用结果的可读性
- **稳定性修复** — 包含未详细说明的修复项（commit `569939a7`）

**迁移注意事项**：
- 无已知破坏性变更；`pretty_print` 默认开启可能影响依赖原始 JSON 格式的下游解析逻辑，建议验证工具链兼容性

### Nightly Build v0.2.9-nightly.20260529.85751492
| 属性 | 详情 |
|:---|:---|
| **版本** | [v0.2.9-nightly.20260529.85751492](https://github.com/sipeed/picoclaw/releases/tag/v0.2.9-nightly.20260529.85751492) |
| **状态** | ⚠️ 自动化构建，可能不稳定 |

**用途**：预发布验证通道，包含 `main` 分支自 v0.2.9 以来的累积变更。

---

## 3. 项目进展

### 今日已合并/关闭 PR（5条）

| PR | 作者 | 类型 | 价值评估 |
|:---|:---|:---|:---|
| [#2932](https://github.com/sipeed/picoclaw/pull/2932) feat(i18n): add Czech (cs) locale | [KrtCZ](https://github.com/KrtCZ) | 国际化 | ⭐⭐⭐ 覆盖 792/792 字符串，完整度极高；含 MQTT、MCP、模型目录等新模块翻译 |
| [#2961](https://github.com/sipeed/picoclaw/pull/2961) build(deps): bump pion/rtp 1.10.1→1.10.2 | [dependabot[bot]](https://github.com/dependabot) | 依赖安全 | ⭐⭐ WebRTC 媒体传输底层库补丁更新 |
| [#2960](https://github.com/sipeed/picoclaw/pull/2960) build(deps): bump env/v11 11.4.0→11.4.1 | [dependabot[bot]](https://github.com/dependabot) | 依赖维护 | ⭐ 环境变量解析库维护性更新 |
| [#2966](https://github.com/sipeed/picoclaw/pull/2966) docs: update wechat qrcode | [imguoguo](https://github.com/imguoguo) | 文档运营 | ⭐ 社区沟通渠道维护 |
| [#2877](https://github.com/sipeed/picoclaw/pull/2877) feat(security): add optional tirith pre-exec scanning | [sheeki03](https://github.com/sheeki03) | 安全功能 | ⭐⭐⭐ **关闭未合并** — 终端命令预执行安全扫描，替代原 #1932 |

**里程碑意义**：v0.2.9 的 MCP Web UI 配置能力是项目向"低代码 AI 智能体编排"演进的关键一步；捷克语完整本地化标志着国际化进入深度覆盖阶段。

---

## 4. 社区热点

### 🔥 最高讨论热度：WhatsApp 构建支持请求
| 指标 | 数据 |
|:---|:---|
| **Issue** | [#2625](https://github.com/sipeed/picoclaw/issues/2625) [Feature] Provide compiled builds with WhatsApp support |
| **作者** | [duckida](https://github.com/duckida) |
| **评论数** | 7（全场最高） |
| **👍** | 1 |
| **标签** | `enhancement`, `channel`, `build`, `priority: low`, `stale` |

**诉求分析**：
- **场景痛点**：Raspberry Pi Zero 2 用户需手动编译以启用 WhatsApp 通道，与"快速迭代更新"需求冲突
- **核心矛盾**：官方 arm64 构建默认排除 WhatsApp 支持（可能涉及依赖许可/体积/安全考量）
- **社区信号**：边缘设备部署 + 即时通讯通道是真实用户场景，但维护者标记 `priority: low` 且进入 `stale` 状态，存在需求与资源错配风险

### 🔄 架构级讨论：多 Agent 对等通信
| 指标 | 数据 |
|:---|:---|
| **Issue** | [#2929](https://github.com/sipeed/picoclaw/issues/2929) [Task] Add first-class agent-to-agent communication for cooperative workflows |
| **作者** | [afjcjsbx](https://github.com/afjcjsbx) |
| **评论数** | 2 |
| **👍** | 1 |
| **状态** | `stale` |

**诉求分析**：
- 现有 `spawn`/`subagent`/`delegate` 为层级调用模式，用户需要**对等协作网络**（peer-to-peer agent mesh）
- 与 PR [#2964](https://github.com/sipeed/picoclaw/pull/2964)（同作者）的图像压缩功能形成"多 Agent 视觉协作"场景暗示

---

## 5. Bug 与稳定性

| 严重程度 | PR/Issue | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#2965](https://github.com/sipeed/picoclaw/pull/2965) fix(tools): stop workspace guard misreading scheme-less URLs | `restrict_to_workspace` 安全策略误将无 scheme URL（如 `wttr.in/Beijing?T`）解析为绝对路径，导致合法网络请求被拦截 | ✅ **已有 Fix PR，待合并** |
| 🟡 中 | [#2351](https://github.com/sipeed/picoclaw/issues/2351) [CLOSED] Validate skill binary requirements before injecting into system prompt | Skill 元数据声明的二进制依赖未安装时，LLM 仍被注入"我能执行"的错误能力声明，导致运行时必然失败 | ✅ **已关闭**（修复并入）|

**风险评估**：PR #2965 是今日最关键的待合并项 — 工作区隔离是核心安全机制，scheme-less URL 的误拦截既影响用户体验（`curl wttr.in` 等常见用法），也可能暴露安全策略绕过路径（攻击者构造特殊路径格式）。

---

## 6. 功能请求与路线图信号

| 功能方向 | 来源 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **图像输入压缩管道** | PR [#2964](https://github.com/sipeed/picoclaw/pull/2964) | ⭐⭐⭐⭐⭐ **极高** | 已提交 PR，解决 `max_media_size` 单一限制的架构缺陷；多层级压缩策略是 vision pipeline 规模化必需 |
| **终端命令预执行安全扫描（Tirith）** | PR [#2877](https://github.com/sipeed/picoclaw/pull/2877) | ⭐⭐⭐☆☆ 中等 | 功能价值高但 PR 被关闭，作者需重新提交；安全扫描与 shell 工具深度耦合，需架构评审 |
| **WhatsApp 预编译构建** | Issue [#2625](https://github.com/sipeed/picoclaw/issues/2625) | ⭐⭐☆☆☆ 较低 | `priority: low` + `stale` 标签，维护者态度保守；可能受第三方库许可限制 |
| **多 Agent 对等通信协议** | Issue [#2929](https://github.com/sipeed/picoclaw/issues/2929) | ⭐⭐⭐☆☆ 中等 | 架构级需求，与现有层级调用模式存在设计冲突，需 RFC 级讨论 |

**v0.3.0 预测信号**：MCP 生态整合（已落地）+ Vision 管道优化（PR 就绪）+ Agent 协作增强（讨论中）构成下阶段主线。

---

## 7. 用户反馈摘要

| 维度 | 具体内容 |
|:---|:---|
| **😫 痛点** | Raspberry Pi 等 ARM 边缘设备用户受困于"构建-通道支持"的矩阵复杂度（[#2625](https://github.com/sipeed/picoclaw/issues/2625)） |
| **😫 痛点** | LLM "幻觉能力"问题 — 系统提示注入未验证的 Skill 能力声明，导致用户信任损耗（[#2351](https://github.com/sipeed/picoclaw/issues/2351)） |
| **😫 痛点** | 工作区隔离策略过于严格，误杀常见网络工具用法（[#2965](https://github.com/sipeed/picoclaw/pull/2965)） |
| **💡 场景** | 多 Agent 协作工作流需求明确 — 用户不满足于"主从委派"，需要 Agent 间自主协商（[#2929](https://github.com/sipeed/picoclaw/issues/2929)） |
| **👍 满意** | 国际化覆盖完整度获认可（捷克语 100% 翻译） |
| **🔧 期望** | MCP 协议配置进一步简化（v0.2.9 Web UI 是良好开端） |

---

## 8. 待处理积压

### ⚠️ 需维护者关注的长期项

| 项目 | 积压时长 | 风险 | 建议行动 |
|:---|:---|:---|:---|
| **PR [#2662](https://github.com/sipeed/picoclaw/pull/2662)** Unify vendors table in providers documentation | 35天（2026-04-24） | 文档债务累积，Provider 生态扩展受阻 | 文档维护者评审；变更范围纯文档，低风险可快速合并 |
| **Issue [#2625](https://github.com/sipeed/picoclaw/issues/2625)** WhatsApp 构建支持 | 37天（2026-04-22） | 社区挫败感；边缘设备用户流失 | 明确技术障碍（许可？体积？）或提供官方 Docker 多标签构建方案 |
| **PR [#2877](https://github.com/sipeed/picoclaw/pull/2877)** Tirith 安全扫描 | 14天（2026-05-15） | 安全功能流失；替代 #1932 后再次关闭 | 与作者 [sheeki03](https://github.com/sheeki03) 沟通关闭原因，协助重新打开或拆分提交 |
| **Issue [#2929](https://github.com/sipeed/picoclaw/issues/2929)** Agent 对等通信 | 7天（2026-05-22） | 架构讨论窗口期错过 | 标记为 `rfc` 或 `discussion`，引导社区设计提案 |

---

> **健康度评分**: 🟢 7.5/10
> - 发布节奏稳定（+1.5）
> - PR 合并吞吐健康（+1.5）
> - 安全修复响应及时（+1.5）
> - 长期 Issue/PR 积压需清理（-1.0）
> - 高价值功能（WhatsApp、Agent 通信）优先级评估不透明（-1.0）

*本日报基于公开 GitHub 数据生成，不构成投资建议或官方立场。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-30

> **项目**: [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw)  
> **数据周期**: 2026-05-29 至 2026-05-30  
> **分析师**: AI 智能体与个人 AI 助手领域开源项目分析

---

## 1. 今日速览

NanoClaw 今日保持**中等活跃度**，24 小时内产生 **2 条新 Issue**（均待处理）与 **8 条 PR 更新**（3 条关闭/合并，5 条待审阅）。核心开发节奏集中在**即时通讯适配层修复**（Telegram 相关 PR 达 3 条）与**多智能体对话上下文管理**新功能。值得关注的是，社区首次出现**供应链安全警示**（Issue #2641），涉及 Gmail MCP 工具的凭证注入风险，需维护者高度重视。无新版本发布，整体项目处于**功能迭代与稳定性打磨并行阶段**。

---

## 2. 版本发布

**无新版本发布**（今日 0 个 Release）

---

## 3. 项目进展

### 已合并/关闭 PR（3 条）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2456](https://github.com/nanocoai/nanoclaw/pull/2456) | dustinlucien | **Claude 提供商接入 LangFuse 可观测性**：完整追踪 agent 会话延迟、API 错误（重试+限流）、工具调用耗时、上下文压缩 token 数 | **生产级监控基础设施**：将 NanoClaw 的 LLM 调用链路纳入行业标准可观测体系，为规模化部署奠定运维基础 |
| [#1961](https://github.com/nanocoai/nanoclaw/pull/1961) | grtwrn | **OneCLI-native Gmail MCP 工具**：`/add-gmail-tool` Utility Skill，通过 OneCLI 注入凭证，符合 v2 安全不变量 | **安全架构闭环**：补全 v2 核心承诺（容器永不接触原始 API Key），Gmail 集成正式纳入安全凭证管理体系 |
| [#2639](https://github.com/nanocoai/nanoclaw/pull/2639) | vasechko-sergey | **iOS 可靠性修复**（符合贡献指南） | 移动端稳定性提升，具体变更细节待补充（PR 摘要信息不完整） |

**整体进展评估**：今日合并聚焦**可观测性**与**安全架构**两大基础设施支柱，LangFuse 集成标志着项目从"功能可用"向"企业可运维"跃迁；OneCLI Gmail 工具则是 v2 安全模型的关键拼图。

---

## 4. 社区热点

### 🔥 最高关注度：供应链安全警示（Issue #2641）

**[Supply chain risk - @gongrzhe/server-gmail-autoauth-mcp](https://github.com/nanocoai/nanoclaw/issues/2641)**  
- **作者**: NoamGit | **状态**: OPEN | **创建**: 2026-05-29
- **核心诉求**: 警示某 Gmail MCP 服务器存在**凭证窃取风险**，引用 [Medium 深度报道](https://wiiwrite.medium.com/my-ai-installed-a-strangers-code-on-my-machine-and-asked-for-my-gmail-password-70d7708b4636)——AI 助手安装陌生人代码并索要 Gmail 密码的真实案例
- **背后信号**: 
  - 社区对 **MCP 生态供应链安全**的焦虑升温
  - 与今日合并的 PR #1961（OneCLI 安全 Gmail 工具）形成**正面对比**——官方安全路径 vs 第三方风险路径
  - **建议维护者行动**: 将此 Issue 与官方安全文档关联，明确推荐 OneCLI 路径，考虑建立 MCP 服务器安全审核机制

### 技术深度热点：数据库并发竞争（Issue #2640）

**[bug: delivery: hot-journal race on outbound.db readonly poll](https://github.com/nanocoai/nanoclaw/issues/2640)**  
- **作者**: alagonterie | **状态**: OPEN
- **技术细节**: `src/delivery.ts` 以 1000ms 周期只读轮询 `outbound.db`，与容器的 `journal_mode=DELETE` 写事务产生竞争，触发 `SQLITE_READONLY_ROLLBACK` 错误日志
- **背后信号**: 边缘场景下的**数据库并发模型缺陷**，影响投递模块稳定性，需核心团队介入设计修复方案

---

## 5. Bug 与稳定性

| 优先级 | 问题 | 来源 | 状态 | Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **高** | 数据库 hot-journal 竞争导致 `SQLITE_READONLY_ROLLBACK` 错误日志 | [Issue #2640](https://github.com/nanocoai/nanoclaw/issues/2640) | **待处理** | ❌ 无 | 投递模块（delivery），高频率轮询场景下日志污染，潜在事务中断风险 |
| 🟡 **中** | Telegram `extractReplyContext` 丢弃引用消息作者，无法识别"回复给机器人" | [PR #2644](https://github.com/nanocoai/nanoclaw/pull/2644) | **Fix PR 待合并** | ✅ [#2644](https://github.com/nanocoai/nanoclaw/pull/2644) | Telegram 交互体验：用户回复 bot 消息时无法触发直接对话模式 |
| 🟡 **中** | `evaluateEngage` 中 pattern/mention 接线逻辑在直接 @mention/DM/回复时失效 | [PR #2643](https://github.com/nanocoai/nanoclaw/pull/2643) | **Fix PR 待合并** | ✅ [#2643](https://github.com/nanocoai/nanoclaw/pull/2643) | 多智能体路由核心逻辑：关键词触发与直接寻址的互斥问题 |
| 🟢 **低** | `@chat-adapter/telegram` 版本不匹配（4.27.0 vs 4.26.0）导致 peerDependency 冲突 | [PR #2642](https://github.com/nanocoai/nanoclaw/pull/2642) | **Fix PR 待合并** | ✅ [#2642](https://github.com/nanocoai/nanoclaw/pull/2642) | `/add-telegram` Skill 安装失败，依赖解析错误 |

> **稳定性健康度**: 今日 3 个 Telegram 相关修复 PR 集中出现，表明**即时通讯适配层近期迭代引入回归问题**，建议加强集成测试覆盖。

---

## 6. 功能请求与路线图信号

| 功能方向 | 来源 | 成熟度 | 纳入下一版本概率 | 分析 |
|:---|:---|:---|:---|:---|
| **群组对话上下文窗口（per-agent-group context_messages）** | [PR #2645](https://github.com/nanocoai/nanoclaw/pull/2645) | 🟡 PR 已提交，待审阅 | **高** | 解决多智能体群聊的核心痛点——@mention 时 agent 缺乏上下文。设计优雅（"unseen messages" 机制），与现有路由架构兼容 |
| **街道风影地图（Street Wind & Shadow Map）** | [PR #2646](https://github.com/nanocoai/nanoclaw/pull/2646) | 🟡 PR 已提交，待审阅 | **中** | 独立 Vite/React 应用，技术栈（OSM/Overpass/Open-Meteo）与核心项目耦合度低。可能作为示例应用或可选插件，需评估维护负担 |
| **LangFuse 可观测性（Claude Provider）** | [PR #2456](https://github.com/nanocoai/nanoclaw/pull/2456) | ✅ **已合并** | — | 基础设施级功能，为后续全 Provider 覆盖铺路 |

**路线图信号**: 群组多智能体协作是明确演进方向（PR #2645 + #2643 + #2644 形成功能簇），预计下一版本将显著强化 **group chat 体验**。

---

## 7. 用户反馈摘要

### 从 Issues 提炼的真实痛点

| 痛点 | 来源 | 用户场景 | 情绪 |
|:---|:---|:---|:---|
| **"AI 可能偷偷安装恶意代码并窃取我的 Gmail 密码"** | [Issue #2641](https://github.com/nanocoai/nanoclaw/issues/2641) | 用户通过第三方 MCP 服务器集成 Gmail，遭遇凭证钓鱼 | 😰 **安全焦虑**——对 MCP 生态信任危机 |
| **"Bot 在群里被 @ 了却不回应，除非我重复关键词"** | [PR #2643](https://github.com/nanocoai/nanoclaw/pull/2643) | 群聊中直接 @agent 或回复 bot 消息，期望触发对话 | 😤 **交互挫败**——直觉式寻址与关键词触发的冲突 |
| **"回复 bot 的消息，bot 却不知道我在跟它说话"** | [PR #2644](https://github.com/nanocoai/nanoclaw/pull/2644) | Telegram 中引用回复 bot 消息，期望建立对话上下文 | 😕 **上下文断裂** |
| **"安装 Telegram 适配器时依赖版本冲突"** | [PR #2642](https://github.com/nanocoai/nanoclaw/pull/2642) | 使用 `/add-telegram` Skill 快速集成 | 😤 ** onboarding 阻塞** |

### 满意度信号
- **LangFuse 集成**（PR #2456）反映运维用户对**生产级可观测性**的迫切需求
- **OneCLI 安全模型**（PR #1961）获得架构层面认可，与社区安全焦虑形成呼应

---

## 8. 待处理积压

> **提醒**: 以下 Issue/PR 需要维护者关注，避免长期悬置

| 项目 | 创建时间 | 悬置天数 | 风险 | 建议行动 |
|:---|:---|:---|:---|:---|
| [Issue #2641](https://github.com/nanocoai/nanoclaw/issues/2641) 供应链安全警示 | 2026-05-29 | 1 | 🔴 **声誉风险** | 24-48 小时内官方回应，关联安全文档，考虑发布安全公告 |
| [Issue #2640](https://github.com/nanocoai/nanoclaw/issues/2640) 数据库竞争 | 2026-05-29 | 1 | 🟡 技术债务累积 | 核心团队评估 journal_mode 切换（WAL?）或轮询机制重构 |
| [PR #2645](https://github.com/nanocoai/nanoclaw/pull/2645) 群组上下文窗口 | 2026-05-29 | 0 | 🟢 新提交 | 优先审阅，与 #2643/#2644 合并测试，形成群聊体验升级包 |
| [PR #2646](https://github.com/nanocoai/nanoclaw/pull/2646) 风影地图 | 2026-05-29 | 0 | 🟡 范围评估 | 判定是否纳入核心仓库或移至示例组织 |

---

## 附录：今日全部活跃链接速查

| 类型 | 编号 | 链接 |
|:---|:---|:---|
| Issue | #2641 | https://github.com/nanocoai/nanoclaw/issues/2641 |
| Issue | #2640 | https://github.com/nanocoai/nanoclaw/issues/2640 |
| PR (已关闭) | #2456 | https://github.com/nanocoai/nanoclaw/pull/2456 |
| PR (已关闭) | #1961 | https://github.com/nanocoai/nanoclaw/pull/1961 |
| PR (已关闭) | #2639 | https://github.com/nanocoai/nanoclaw/pull/2639 |
| PR (待合并) | #2646 | https://github.com/nanocoai/nanoclaw/pull/2646 |
| PR (待合并) | #2645 | https://github.com/nanocoai/nanoclaw/pull/2645 |
| PR (待合并) | #2644 | https://github.com/nanocoai/nanoclaw/pull/2644 |
| PR (待合并) | #2643 | https://github.com/nanocoai/nanoclaw/pull/2643 |
| PR (待合并) | #2642 | https://github.com/nanocoai/nanoclaw/pull/2642 |

---

*日报生成时间: 2026-05-30*  
*数据驱动分析，仅供项目决策参考*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-30

> **项目地址**: [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **报告日期**: 2026-05-30（数据截至 2026-05-29）

---

## 1. 今日速览

NullClaw 昨日迎来 **v2026.5.29 版本发布**，社区活跃度处于**中高水平**。24 小时内完成 **9 个 PR 的合并/关闭**（含 3 个 Telegram 关键 Bug 修复），**3 个 Issue 全部关闭**，当前待合并 PR 3 个。核心进展集中在 **Telegram 渠道稳定性修复**、**记忆系统全局可见性修复**、**原生 ACP stdio 适配器**及 **Nix/Zig 0.16.0 构建链维护**。项目整体健康度良好，修复响应迅速，但配置系统存在"僵尸标志位"等技术债务需关注。

---

## 2. 版本发布

### v2026.5.29 已发布
**发布链接**: [https://github.com/nullclaw/nullclaw/releases/tag/v2026.5.29](https://github.com/nullclaw/nullclaw/releases/tag/v2026.5.29)

| 变更项 | 详情 | 影响评估 |
|:---|:---|:---|
| **原生 ACP stdio 适配器** | 新增 ACP (Agent Communication Protocol) stdio 原生适配器 ([PR #896](https://github.com/nullclaw/nullclaw/pull/896)) | 🔶 **中等** — 扩展了 Agent 间通信能力，可能改变子 Agent 架构模式 |
| **GitHub Workflows 迁移至 nullbuilder** | CI/CD 构建系统重构 ([PR #889](https://github.com/nullclaw/nullclaw/pull/889)) | 🟢 **低** — 内部基础设施，用户无感知 |
| **版本迭代 v2026.5.4 → v2026.5.29** | 常规版本递进 ([PR #888](https://github.com/nullclaw/nullclaw/pull/888)) | 🟢 **无** |

**迁移注意事项**: 
- ACP stdio 适配器为新增功能，现有用户无需迁移；若使用子 Agent 架构，可关注后续文档更新
- Nix 用户需确认 flake.lock 已同步更新以支持 Zig 0.16.0 ([PR #935](https://github.com/nullclaw/nullclaw/pull/935))

---

## 3. 项目进展

### 🔀 昨日合并/关闭的关键 PR（9 条）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#934](https://github.com/nullclaw/nullclaw/pull/934) | @supersonictw | **LINE 渠道: 修复 sendMessage 路由 + 实现 replyToken 缓存** | 解决 LINE 平台消息路由错误，30s TTL 的静态数组缓存提升高并发场景可靠性 |
| [#935](https://github.com/nullclaw/nullclaw/pull/935) | @Codom | **Nix: 更新 lockfiles 支持 Zig 0.16.0** | 解除构建系统阻塞，确保 Nix 用户可正常构建 |
| [#933](https://github.com/nullclaw/nullclaw/pull/933) | @DonPrus | **Gateway 扩展: 新增 `/media/transcribe`、令牌哈希存储、超时保护** | 强化网关安全性（令牌不再明文存储），新增 STT 能力暴露 |
| [#930](https://github.com/nullclaw/nullclaw/pull/930) | @raskevichai | **Telegram: 回复消息文本纳入上下文** | 修复 #916，群聊对话连贯性显著提升 |
| [#928](https://github.com/nullclaw/nullclaw/pull/928) | @raskevichai | **Telegram: 修复子 Agent 结果丢失（polling 模式）** | 修复 #918，生产环境关键稳定性修复 |
| [#929](https://github.com/nullclaw/nullclaw/pull/929) | @raskevichai | **memory_list: 默认 session_id 为 null 使全局记忆可见** | 修复 #917，记忆系统核心逻辑修正 |
| [#927](https://github.com/nullclaw/nullclaw/pull/927) | @vernonstinebaker | **测试: 抑制 zig test 下的 API 错误日志** | 提升开发者体验，消除测试噪音 |
| [#926](https://github.com/nullclaw/nullclaw/pull/926) | @vernonstinebaker | **测试: 隔离 web_search API key 环境** | 消除测试环境依赖性，提升 CI 稳定性 |
| [#925](https://github.com/nullclaw/nullclaw/pull/925) | @vernonstinebaker | **路径安全: 允许 macOS /private/var/folders 工作区** | 解除 macOS 开发者本地运行阻塞 |

**整体迈进评估**: 昨日合并的 PR 覆盖 **3 个生产级 Bug 修复**（Telegram 子 Agent 结果丢失、记忆系统全局不可见、LINE 消息路由错误），直接影响终端用户体验；同时完成 **Zig 0.16.0 全工具链升级**和**网关安全加固**，项目处于**高质量交付周期**。

---

## 4. 社区热点

> 注：昨日 Issues 评论数均为 0，PR 评论数未显示（undefined），社区讨论以代码审查和快速合并为主，未形成显性热点议题。

**隐性热点识别** — 基于修复频率和 Issue 关联度：

| 主题 | 关联 PR/Issue | 背后诉求分析 |
|:---|:---|:---|
| **Telegram 渠道稳定性** | #928, #930, #916, #918 | 生产环境部署者核心痛点：子 Agent 结果"静默丢失"严重影响多 Agent 工作流可靠性，用户迫切需要可观测的 Agent 协作机制 |
| **记忆系统语义一致性** | #929, #917 | 用户对"全局记忆"与"会话记忆"的边界认知模糊，工具行为不符合直觉预期 |
| **配置系统可预测性** | #939, #937 | `compact_context` 等"僵尸标志位"暴露配置解析与运行时行为脱节，开发者对配置生效性缺乏信任 |

**建议关注**: [#939](https://github.com/nullclaw/nullclaw/pull/939)（修复 dead flag 问题）虽为待合并状态，但触及架构设计模式，值得社区深入讨论。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复 PR | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **P0 - 数据丢失** | Telegram 子 Agent 结果永不送达（`bus=null`） | ✅ **已修复** | [#928](https://github.com/nullclaw/nullclaw/pull/928) | 所有使用 `spawn` + Telegram polling 的生产实例 |
| 🔴 **P0 - 功能失效** | `memory_list` 全局记忆不可见 | ✅ **已修复** | [#929](https://github.com/nullclaw/nullclaw/pull/929) | 所有跨会话依赖全局记忆的工作流 |
| 🟡 **P1 - 上下文缺失** | Telegram 回复消息原文丢失 | ✅ **已修复** | [#930](https://github.com/nullclaw/nullclaw/pull/930) | 群聊多轮对话场景 |
| 🟡 **P1 - 构建失败** | Nix + Zig 0.16.0 构建阻塞 | ✅ **已修复** | [#935](https://github.com/nullclaw/nullclaw/pull/935) | Nix 用户群体 |
| 🟡 **P1 - 消息路由** | LINE sendMessage 路由错误 | ✅ **已修复** | [#934](https://github.com/nullclaw/nullclaw/pull/934) | LINE 渠道用户 |
| 🟢 **P2 - 开发体验** | macOS 工作区路径被安全策略拦截 | ✅ **已修复** | [#925](https://github.com/nullclaw/nullclaw/pull/925) | macOS 本地开发者 |

**稳定性趋势**: 昨日 **3 个 P0/P1 级 Bug 全部当日修复并合入版本**，修复响应速度优异。但需警惕 [#939](https://github.com/nullclaw/nullclaw/pull/939) 揭示的 **"配置标志位与运行时行为脱节"** 类系统性风险。

---

## 6. 功能请求与路线图信号

| 信号来源 | 内容 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#940](https://github.com/nullclaw/nullclaw/pull/940)（待合并） | 自定义 OpenAI-compatible provider 的 `/models` 菜单支持 | 🔶 **高** | 已提交 PR，解决 #936，直接影响多模型部署灵活性 |
| [#939](https://github.com/nullclaw/nullclaw/pull/939)（待合并） | `compact_context` 标志位真正生效 | 🔶 **高** | 技术债务清理，配置系统一致性所需 |
| [#933](https://github.com/nullclaw/nullclaw/pull/933)（已合并） | Gateway STT / 媒体转录 | 🟢 **已纳入** | v2026.5.29 已发布 |
| [#896](https://github.com/nullclaw/nullclaw/pull/896)（已合并） | 原生 ACP stdio 适配器 | 🟢 **已纳入** | v2026.5.29 已发布，预示 Agent 间通信标准化方向 |

**路线图推测**: 
- **短期（v2026.6.x）**: 配置系统清理（#939）、自定义 provider 模型发现（#940）
- **中期**: ACP 协议生态扩展（stdio 适配器为起点）、多模态网关能力（STT 已落地，TTS/图像待观察）

---

## 7. 用户反馈摘要

> 基于 Issue 描述提炼真实用户场景与痛点

| 用户场景 | 痛点 | 满意度信号 |
|:---|:---|:---|
| **Telegram 群聊运营** | 回复机器人历史消息时，原文上下文丢失，机器人"失忆" | 修复后：多轮对话连贯性恢复 |
| **多 Agent 协作工作流** | `spawn` 子 Agent 后结果"黑洞化"，用户无法获知任务完成状态 | 修复前：严重不满（"Silently lost"）；修复后：生产可用 |
| **跨会话知识库** | 存储全局记忆后无法召回，误以为存储失败 | 修复前：困惑与信任危机；修复后：记忆系统行为符合直觉 |
| **macOS 本地开发** | 安全策略过度拦截，无法启动工作区 | 修复后：开发体验顺畅 |

**核心洞察**: 用户高度依赖 **"可预测的行为契约"** — 配置项生效、工具调用有反馈、记忆存储可召回。NullClaw 近期修复精准击中这些契约断裂点，但系统性预防机制（如配置标志位运行时校验、工具调用结果强制确认）仍需加强。

---

## 8. 待处理积压

| 项目 | 状态 | 积压时长 | 风险提醒 |
|:---|:---|:---|:---|
| [#940](https://github.com/nullclaw/nullclaw/pull/940) fix(models): query base_url for custom OpenAI-compatible providers | 🟡 **待合并** | 1 天 | 影响自定义 provider 采用率，建议优先审查 |
| [#939](https://github.com/nullclaw/nullclaw/pull/939) fix(agent): honor compact_context flag instead of always compacting | 🟡 **待合并** | 1 天 | 技术债务，长期存在将侵蚀配置系统可信度 |
| [#938](https://github.com/nullclaw/nullclaw/pull/938) v2026.5.29 version bump | 🟡 **待合并** | 1 天 | 版本发布流程 PR，通常快速合并 |

**维护者关注建议**: 
- 当前积压均为 **24 小时内新提交**，整体响应健康
- 建议建立 **"配置标志位运行时校验"** 的系统性检查机制，预防 #939 类问题复发
- 可考虑在 CI 中增加 **"配置 JSON schema ↔ 运行时读取点"** 的静态分析，确保标志位不"死亡"

---

*日报生成基于公开 GitHub 数据，客观中立，仅供参考。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-30

## 1. 今日速览

IronClaw 今日保持**高强度开发节奏**，24小时内 46 个 PR 更新（25 待合并/21 已合并关闭），18 个 Issues 活跃（12 新开或活跃/6 关闭）。核心工作流聚焦 **Reborn 架构的产品化落地**：产品认证（product-auth）系统完成多轮迭代，MCP 扩展生态（Notion、NEAR AI、GitHub）全面向 Reborn 迁移，WebUI v2 的 OAuth E2E 体验进入设计定稿阶段。安全加固与代码质量并行推进，包括凭证零化、进程状态边界治理等深度工程。无新版本发布，crates.io 发布滞后问题（#3259）仍为社区痛点。

---

## 2. 版本发布

**无新版本发布**

> 注：Issue #3259 持续反映 crates.io 发布滞后——仓库已标记至 v0.27.0（2026-04-29），但 crates.io 仍停留在 0.24.0，下游受 wasmtime 28.x CVE 影响无法升级。该 Issue 11 条评论、近一个月活跃，需维护者优先响应。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（21 条中的核心项）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#4234](https://github.com/nearai/ironclaw/pull/4234) | serrrfirat | **Durable product-auth 基础设施定稿**：将生产级文件系统适配器移入 `ironclaw_reborn_composition`，`ironclaw_auth` 纯化为契约/领域层；OAuth 回调认领与续派实现幂等重放安全 | #4175 |
| [#4233](https://github.com/nearai/ironclaw/pull/4233) | serrrfirat | **GitHub WASM 凭证迁移至 product-auth**：新增账户级运行时凭证源与义务（obligation），Reborn 组合体通过 `CredentialAccountService` 解析，替代静态 `SecretHandle` | — |
| [#4231](https://github.com/nearai/ironclaw/pull/4231) | serrrfirat | **Reborn 认证消费者接入 staged credentials**：GSuite 凭证分级器 + `InjectSecretOnce` 满足首次方主机 HTTP 出口，完成 #4176 消费者侧闭环 | #4176 |
| [#4228](https://github.com/nearai/ironclaw/pull/4228) | serrrfirat | **[Codex] Notion MCP 扩展 Reborn 化**：主机托管 MCP 运行时接入 Reborn 组合体，覆盖读/写/评论/视图/团队/用户全表面 | — |
| [#4223](https://github.com/nearai/ironclaw/pull/4223) | serrrfirat | **[Codex] NEAR AI MCP 扩展 Reborn 化**：`nearai.search` 能力模型可见，MCP 运行时经主机 HTTP 出口 + 分级凭证接入 | — |
| [#4232](https://github.com/nearai/ironclaw/pull/4232) | serrrfirat | **认证门控阻塞退出验证**：`BeforeBlock` 检查点持久化同运行验证，合法阻塞退出保持 `BlockedAuth` 状态而非落入 `RecoveryRequired` | — |
| [#4243](https://github.com/nearai/ironclaw/pull/4243) | serrrfirat | **CI 修复**：`RecordingFlowManager` 补全 `mark_continuation_dispatched` 方法，解决 #4234 引入的 trait 漂移 | #4237 |
| [#4244](https://github.com/nearai/ironclaw/pull/4244) | henrypark133 | **触发循环与投递解析规范定稿**：cron 调度事件 P0 验收标准、出站解析引擎类型化入口、失效关闭目标验证 | — |
| [#4240](https://github.com/nearai/ironclaw/pull/4240) | henrypark133 | **通信投递解析设计文档**：出站解析器边界、每用户持久化偏好、默认投递与审批通知目标选择 | — |
| [#3874](https://github.com/nearai/ironclaw/pull/3874) | henrypark133 | **触发循环设计规范**：cron 驱动的 LLM 代理工作流启动机制（412 行设计文档） | #3873 |

**整体推进评估**：Reborn 从"架构验证"阶段正式进入"产品化集成"阶段——认证系统完成核心数据流闭环（product-auth UX ↔ 运行时凭证代理），MCP 扩展生态完成三大主力（Notion/NEAR AI/GitHub）的 Reborn 迁移，为 v0.28.x 的正式发布奠定基础设施。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 热度分析 |
|:---|:---|:---|:---|
| 🔥1 | [#3259](https://github.com/nearai/ironclaw/issues/3259) Publish 0.25.0–0.27.0 to crates.io | 11 评论 | **下游阻塞性痛点**：wasmtime 28.x 的 CVE 修复无法通过 crates.io 获取，企业用户被迫 pin 旧版本或从 git 拉取。诉求明确——要求维护者建立 crates.io 自动发布流水线，或至少手动补发历史版本。社区信任度指标。 |
| 🔥2 | [#3857](https://github.com/nearai/ironclaw/issues/3857) [Reborn] Lane 10: Slack ProductAdapter MVP | 5 评论 | **产品集成扩展需求**：Slack 作为企业协作核心入口，预配置凭证的 ProductAdapter 将降低部署摩擦。与 #3281（EventStreamManager）协同，暗示社区对"Reborn 即服务"的完整 SaaS 化期待。 |
| 🔥3 | [#3917](https://github.com/nearai/ironclaw/issues/3917) Kill RuntimeCredentialTarget::PathPlaceholder or harden it? | 5 评论 | **安全架构辩论**：zmanian 发起的安全审查，质疑 PathPlaceholder 凭证注入原语的风险收益比。已关闭但结论未明确——可能已转化为 #4222（零化）的后续动作。反映核心团队对攻击面的审慎态度。 |
| 🔥4 | [#3702](https://github.com/nearai/ironclaw/issues/3702) Reborn binary-E2E 测试框架 | 4 评论 | **质量基础设施债务**：88 个测试文件分类、29 个核心代理循环 Rust 集成测试的 E2E 化。长期投入项，直接影响 Reborn 发布信心。 |

### 高价值待合并 PR

| PR | 状态 | 价值 |
|:---|:---|:---|
| [#4245](https://github.com/nearai/ironclaw/pull/4245) | **待合并 XL** | 产品认证 HTTP 表面收官：手动令牌、恢复、刷新、清理——WebUI/CLI/API 完整闭环 |
| [#4247](https://github.com/nearai/ironclaw/pull/4247) | **待合并 XS（设计）** | #4112 WebUI v2 OAuth E2E 的前置设计评审，GSuite/Notion/GitHub 三流统一体验 |
| [#4239](https://github.com/nearai/ironclaw/pull/4239) | **待合并 XL** | #4238 的实现：product-auth 账户投影至运行时凭证代理，防漂移关键接缝 |

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#4241](https://github.com/nearai/ironclaw/issues/4241) | **KV 缓存复用失效**：Live Workspace 提示输入导致跨对话轮次前缀变化，破坏提供商侧 KV 缓存复用，显著增加延迟与成本 | 无 | **待处理** |
| 🟡 **中** | [#4237](https://github.com/nearai/ironclaw/issues/4237) | **编译失败**：`cargo test -p ironclaw_product_workflow` 因 #4234 的 trait/字段新增而断裂，测试覆盖缺口 | [#4243](https://github.com/nearai/ironclaw/pull/4243) | **已修复** |
| 🟡 **中** | [#4108](https://github.com/nearai/ironclaw/issues/4108) | **夜间 E2E 失败**：扩展测试套件失败，具体根因未在摘要中展开 | 无 | **持续失败，需关注** |
| 🟢 **低** | [#4226](https://github.com/nearai/ironclaw/issues/4226) | **内存泄漏风险**：`cleaned_process_handoffs` 无驱逐机制，长生命期主机进程随进程流失真增长 | 无 | **待处理** |

---

## 6. 功能请求与路线图信号

| 需求来源 | 内容 | 纳入概率 | 判断依据 |
|:---|:---|:---|:---|
| [#3857](https://github.com/nearai/ironclaw/issues/3857) | Slack ProductAdapter MVP（预配置凭证） | **高** | Reborn 扩展生态标准模式，Notion/GitHub/NEAR AI 已完成，Slack 为自然补全 |
| [#3281](https://github.com/nearai/ironclaw/issues/3281) | EventStreamManager（持久化投影扇出） | **高** | 标记 `suggested_P0`，Web SSE/WebSocket/API 订阅的基础设施，#4245/4247 依赖其数据流 |
| [#4112](https://github.com/nearai/ironclaw/issues/4112) | WebUI v2 GSuite OAuth + Notion MCP + GitHub PAT E2E | **高** | #4247 设计 PR 已开，#4245 基础路由已备，预计 1-2 周内代码落地 |
| [#4204](https://github.com/nearai/ironclaw/issues/4204) | GitHub + NEAR SSO 提供商 + CLI OAuthRouterConfig | **中** | #4179（Google）已关闭，GitHub/NEAR 明确列为后续，但依赖 #4245 合并 |
| [#3702](https://github.com/nearai/ironclaw/issues/3702) | 二进制 E2E 测试框架 | **中** | 质量债务，无明确里程碑绑定，但影响发布节奏 |
| [#3259](https://github.com/nearai/ironclaw/issues/3259) | crates.io 自动发布 | **低-中** | 社区呼声高，但属运维/治理范畴，非功能开发，需维护者决策 |

---

## 7. 用户反馈摘要

> 从 Issues 评论与 PR 描述中提炼的真实信号

| 维度 | 反馈 |
|:---|:---|
| **痛点** | **发布可及性**：crates.io 滞后导致安全补丁无法通过标准 Rust 工具链获取，企业合规流程受阻（#3259 11 评论） |
| **痛点** | **性能回归**：KV 缓存失效直接影响多轮对话成本与响应延迟，AI 原生架构的"隐形税"（#4241） |
| **场景** | **企业 SSO 集成**：Google/GitHub/NEAR 三提供商覆盖显示 B2B 部署是核心场景，预配置凭证降低 IT 摩擦（#4179, #4204） |
| **期待** | **"Reborn 即完整产品"**：Slack 适配器、EventStream、触发循环等请求显示社区不满足于底层框架，期望端到端解决方案 |
| **认可** | **安全工程深度**：PathPlaceholder 审查（#3917）、零化要求（#4222）、attested-signing 全栈审计（#4060）反映对安全质量的信任 |
| **担忧** | **测试覆盖缺口**：#4237 的编译失败暴露"PR 声明验证"与"实际测试矩阵"的落差，Codex/Claude Code 辅助开发的质量边界 |

---

## 8. 待处理积压

> 长期未关闭或需维护者主动决策的关键项

| Issue/PR | 创建 | 最后更新 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) crates.io 发布滞后 | 2026-05-05 | 2026-05-29 | **社区信任侵蚀** | 维护者需明确发布时间表或建立自动化流水线（如 cargo-release + GitHub Actions） |
| [#3702](https://github.com/nearai/ironclaw/issues/3702) 二进制 E2E 测试框架 | 2026-05-16 | 2026-05-29 | **发布阻塞** | 分配里程碑，明确 88→29→E2E 的优先级排序 |
| [#4108](https://github.com/nearai/ironclaw/issues/4108) 夜间 E2E 持续失败 | 2026-05-27 | 2026-05-29 | **回归检测失效** | 需人工分诊：是测试脆弱性还是真实产品回归？ |
| [#4241](https://github.com/nearai/ironclaw/issues/4241) KV 缓存复用失效 | 2026-05-29 | 2026-05-29 | **性能/成本** | 需 LLM 提供商协议层专家评估前缀匹配策略 |
| [#4226](https://github.com/nearai/ironclaw/issues/4226) 进程交接去重状态无界增长 | 2026-05-29 | 2026-05-29 | **长生命期稳定性** | 相对低优先级，但需在设计层面确定驱逐策略（TTL/容量/LRU） |

---

*日报生成时间：2026-05-30 | 数据来源：GitHub API 概览与公开 Issue/PR 元数据*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-30

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **日期**: 2026-05-30  
> **分析周期**: 过去 24 小时

---

## 1. 今日速览

LobsterAI 今日保持**高活跃度**，24 小时内完成 **9 个 PR 的合并/关闭**，另有 5 个 PR 待审阅。项目核心团队（`btc69m979y-dotcom`、`fisherdaddy`、`liugang519`、`liuzhq1986`）集中推进了**执行性能优化、UI 交互改进和启动稳定性**三大方向。值得关注的是，5 个 4 月初提交的"防数据丢失"体验优化 PR（#1473-#1477）今日同时被标记为 stale 并更新，显示维护者正在清理历史积压。唯一新报 Issue #2079 指向 2026.5.27 版本的**执行结果窗口滚动假死**问题，需密切跟进是否与前日大输出性能优化相关。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的核心 PR（9 条）

| PR | 作者 | 核心贡献 | 影响面 |
|:---|:---|:---|:---|
| [#2078](https://github.com/netease-youdao/LobsterAI/pull/2078) | fisherdaddy | **技能路由元数据化**：`selected-skill` 改为 emit 路由元数据，替代内联 prompt 注入 | cowork 模块架构升级，降低 prompt 污染风险 |
| [#2077](https://github.com/netease-youdao/LobsterAI/pull/2077) | btc69m979y-dotcom | **大输出场景性能与连接稳定性**：>20KB tool result 延迟渲染 + TickWatchdog 防误断连 + 文档化 RPC 超时预期行为 | **关键修复**，解决 exec 风暴导致的 UI 阻塞与 WS 连接中断 |
| [#2076](https://github.com/netease-youdao/LobsterAI/pull/2076) | liugang519 | **文件预览工具栏重构**：三点菜单收纳、HTML 分享接口文档、"复制代码"→"复制"文案优化 | artifacts 交互体验精细化 |
| [#2075](https://github.com/netease-youdao/LobsterAI/pull/2075) | btc69m979y-dotcom | **超大 Markdown 默认折叠**：head/tail 预览 + 显式展开，避免渲染阻塞 + 消除 cowork turn rail 大内容拼接 | 与 #2077 形成性能优化组合拳 |
| [#2074](https://github.com/netease-youdao/LobsterAI/pull/2074) | btc69m979y-dotcom | **子 Agent 会话删除支持**：完整 IPC/runtime/store 清理路径 + sidebar 同步 + tracker 测试 | 多 Agent 协作场景完整性补全 |
| [#2073](https://github.com/netease-youdao/LobsterAI/pull/2073) | liuzhq1986 | **本地文件缺失错误提示**：文件被移动/删除/不可访问时显示 toast，保留远程链接与平台路径处理 | 错误处理用户体验 |
| [#2072](https://github.com/netease-youdao/LobsterAI/pull/2072) | btc69m979y-dotcom | **OpenClaw 启动优化**：固定媒体生成插件配置、预热 quota/model 缓存、修复 dev 模式 npm shim 路径 | 启动性能与开发体验 |
| [#2057](https://github.com/netease-youdao/LobsterAI/pull/2057) | fisherdaddy | **VBScript 启动器替换为隐藏 PowerShell** | 安全合规（VBScript 已弃用） |
| [#2063](https://github.com/netease-youdao/LobsterAI/pull/2063) | fisherdaddy | **IM 回复组装作用域限定当前 turn + 过滤 thinking blocks** | 上下文准确性 |

**整体评估**：今日合并的 PR 形成清晰的**"性能-稳定性-体验"三角推进**。`btc69m979y-dotcom` 单日贡献 4 个高价值 PR，主导了核心运行时优化；`fisherdaddy` 完成架构层（技能路由）与遗留技术债务（VBScript）清理。项目在大输出场景的执行可靠性上迈出关键一步。

---

## 4. 社区热点

### 讨论焦点：大输出性能优化闭环（#2075 → #2077 → #2079 潜在关联）

| 项 | 详情 |
|:---|:---|
| **#2077** | [fix: exec 大输出场景下的渲染性能与连接稳定性](https://github.com/netease-youdao/LobsterAI/pull/2077) — 24 小时内从创建到合并，响应极快 |
| **#2075** | [fix(cowork): avoid rendering oversized markdown by default](https://github.com/netease-youdao/LobsterAI/pull/2075) — 同日合并，与 #2077 协同 |
| **#2079** | [执行结果窗口滚动到顶端会假死](https://github.com/netease-youdao/LobsterAI/issues/2079) — **新报 Bug，可能为优化未覆盖场景** |

**诉求分析**：社区核心痛点集中在 **Agent 执行大量输出时的客户端响应能力**。前日优化针对 ">20KB 延迟渲染"和">1MB exec 输出"，但用户 #2079 报告"滚动到顶端假死"暗示：**渲染优化可能仅处理了初始加载，未覆盖滚动回溯场景**（如虚拟列表未实现或滚动触发全量重渲染）。该 Issue 与 #2075 的"head/tail 预览"机制可能存在交互边界问题。

### 长期积压唤醒：5 个"防丢失"体验 PR 同时 stale 更新

| PR | 链接 | 状态 |
|:---|:---|:---|
| #1473 | [Agent 创建弹窗未保存确认](https://github.com/netease-youdao/LobsterAI/pull/1473) | stale, open |
| #1474 | [Agent 设置面板未保存确认](https://github.com/netease-youdao/LobsterAI/pull/1474) | stale, open |
| #1475 | [MCP 服务器配置弹窗未保存确认](https://github.com/netease-youdao/LobsterAI/pull/1475) | stale, open |
| #1476 | [输入框草稿持久化](https://github.com/netease-youdao/LobsterAI/pull/1476) | stale, open |
| #1477 | [重新编辑历史消息覆盖确认](https://github.com/netease-youdao/LobsterAI/pull/1477) | stale, open |

**诉求分析**：`MaoQianTu` 4 月初系统性地提交了"防止用户内容静默丢失"的交互改进，覆盖创建、编辑、配置、草稿、重编辑全链路。今日批量 stale 更新表明**维护者正在批量审阅历史 PR**，但尚未决定合并或关闭。这些 PR 代表用户对**数据安全感**的强需求，与今日性能优化形成"功能-体验"双轨并行信号。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#2079](https://github.com/netease-youdao/LobsterAI/issues/2079) | **执行结果窗口滚动到顶端假死**（2026.5.27 版本，可复现） | **开放，无 fix PR** |
| 🟡 中 | [#2077](https://github.com/netease-youdao/LobsterAI/pull/2077)（已修复） | exec 大输出时 TickWatchdog 误断连 + Markdown 渲染阻塞 UI | ✅ 已合并 |
| 🟡 中 | [#2075](https://github.com/netease-youdao/LobsterAI/pull/2075)（已修复） | 超大 Markdown 默认全量渲染导致性能崩溃 | ✅ 已合并 |
| 🟢 低 | [#2073](https://github.com/netease-youdao/LobsterAI/pull/2073)（已修复） | 本地文件缺失时无用户提示 | ✅ 已合并 |

**关键风险**：#2079 假死问题**可能为 #2075/#2077 优化的回归或边界场景**。建议维护者：
1. 验证 #2075 的"head/tail 预览"在滚动到顶端（即查看历史内容起始位置）时是否触发全量渲染
2. 检查虚拟列表/窗口化渲染实现是否完整覆盖双向滚动

---

## 6. 功能请求与路线图信号

### 从 PR 推断的下一版本方向

| 信号源 | 功能方向 | 纳入可能性 |
|:---|:---|:---|
| #2078 技能路由元数据化 | **Agent 技能市场/插件化架构** — 解耦 skill 与 prompt 内联 | ⭐⭐⭐⭐⭐ 高，架构级铺垫 |
| #2074 子 Agent 删除 | **多 Agent 协作生命周期管理** — 创建-运行-删除闭环 | ⭐⭐⭐⭐⭐ 高，刚补全 |
| #2072 OpenClaw 启动优化 | **开发者体验（DX）** — 快速启动、热更新、调试效率 | ⭐⭐⭐⭐☆ 中高，基础设施 |
| #1473-#1477 防丢失交互 | **企业级数据安全** — 表单草稿、配置保护、操作确认 | ⭐⭐⭐⭐☆ 中高，体验债务待清 |

### 潜在路线图推测

```
v2026.6.x 可能聚焦：
├── 运行时稳定性：大输出场景收尾（#2079 修复）
├── 多 Agent 协作：子 Agent 完整生命周期 + 技能路由市场
├── 开发者体验：OpenClaw 启动 + 调试工具链
└── 体验债务清偿：5 个 stale PR 批量决策
```

---

## 7. 用户反馈摘要

### 从 #2079 提炼

> **痛点**："执行结果窗口滚动到顶端会假死，现象能复现" — `fcinfo`

- **场景**：查看 Agent 执行历史结果，向上滚动回顾早期输出
- **预期**：流畅滚动浏览任意位置内容
- **实际**：滚动至顶端触发假死（进程无响应）
- **满意度**：低 — 基础交互阻塞，影响结果审阅工作流

### 从 #1473-#1477 系列推断的隐性用户声音

> **未被满足的诉求**："我在配置 Agent/MCP/输入草稿时，多次因误触关闭导致工作丢失"

- **高频场景**：复杂 Agent 配置、长文本草稿编辑、多步骤表单填写
- **情绪**：挫败感强（"静默丢失"比"报错"更损害信任）
- **对比预期**：现代 SaaS 标配的"未保存确认"机制（Notion、Figma 等）

---

## 8. 待处理积压

### 需维护者决策的 stale PR（5 个，均 57 天无进展）

| PR | 链接 | 核心内容 | 建议动作 |
|:---|:---|:---|:---|
| #1473 | [AgentCreateModal 未保存确认](https://github.com/netease-youdao/LobsterAI/pull/1473) | 创建 Agent 弹窗关闭保护 | **建议合并** — 低风险，高用户体验收益 |
| #1474 | [AgentSettingsPanel 未保存确认](https://github.com/netease-youdao/LobsterAI/pull/1474) | 设置面板关闭保护 | **建议合并** — 与 #1473 形成完整保护 |
| #1475 | [McpServerFormModal 未保存确认](https://github.com/netease-youdao/LobsterAI/pull/1475) | MCP 配置弹窗 Escape/关闭保护 | **建议合并** — MCP 配置复杂度高，丢失代价大 |
| #1476 | [CoworkPromptInput 草稿持久化](https://github.com/netease-youdao/LobsterAI/pull/1476) | 组件卸载时草稿同步写入 Redux | **建议代码审查** — 涉及状态管理，需审阅 ref + useEffect 实现 |
| #1477 | [CoworkSessionDetail 重编辑覆盖确认](https://github.com/netease-youdao/LobsterAI/pull/1477) | 历史消息重编辑前确认 | **建议合并** — 与 #1476 形成输入保护闭环 |

**批量处理建议**：`MaoQianTu` 的 5 个 PR 构成**"用户内容保护"完整方案**，设计一致、实现规范。建议维护者：
1. 指派专人统一 code review
2. 若资源紧张，优先合并 #1473、#1474、#1475（弹窗确认，风险最低）
3. #1476、#1477 需验证 Redux 状态同步与重编辑交互无回归

### 待修复开放 Issue

| Issue | 链接 | 优先级 | 建议责任人 |
|:---|:---|:---|:---|
| #2079 滚动假死 | [Issue #2079](https://github.com/netease-youdao/LobsterAI/issues/2079) | **P1** | `btc69m979y-dotcom`（熟悉大输出渲染优化上下文） |

---

## 附录：今日数据卡片

```
活跃度: ████████████████████░░░░░  高 (14 PR + 1 Issue)
合并率: ████████████████████░░░░░  64% (9/14 已关闭)
响应度: █████████████████████░░░░  快 (#2077 当日创建合并)
稳定性: ███████████████░░░░░░░░░░  中 (#2079 新报假死待修复)
社区度: ██████████░░░░░░░░░░░░░░░  低 (评论数普遍 undefined/0)
```

---

*日报生成时间: 2026-05-30*  
*数据来源: GitHub API / 项目公开活动流*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-30

> **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis)  
> **分析日期**: 2026-05-30（数据截至 2026-05-29 UTC）

---

## 1. 今日速览

今日 Moltis 社区活跃度**中等偏低**，共产生 4 条 Issue 更新与 2 条 PR 更新。核心亮点是 **PR #1084 快速修复了技能粒度控制的回归 bug**（从报告到关闭仅数小时），体现了维护团队对用户体验问题的响应效率。另一方面，**Apple Silicon 生态的兼容性危机凸显**：同一用户连续报告 Docker 沙箱（#1085）与 Apple Containers 后端（#1086）两条 arm64 相关故障，且均涉及底层系统挂载/网络配置，修复复杂度较高。长期功能请求 #235（PTY 多智能体编排）持续获得关注，但暂无代码层面的推进信号。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

| PR | 状态 | 说明 |
|:---|:---|:---|
| [#1084](https://github.com/moltis-org/moltis/pull/1084) | **已合并/关闭** | **修复技能启用/禁用粒度问题**：将"捆绑技能"的禁用状态与分类禁用状态分离存储，解决了用户无法单独禁用某个技能（如单个 Apple 技能）而只能整类开关的问题。该修复覆盖了聊天发现、Web API 及技能详情响应三个入口，并附带回归测试。 |

**推进评估**：此 PR 直接关闭了当日报告的 bug #1083，修复路径清晰、测试覆盖完整，属于**高质量的快速响应**。项目整体在"技能系统精细化控制"方向上迈进一步，但依赖架构层面的多智能体编排（#235）仍无实质进展。

---

## 4. 社区热点

### 🔥 讨论最活跃：Issue #235 — PTY 多智能体编排
- **链接**: [moltis-org/moltis#235](https://github.com/moltis-org/moltis/issues/235)
- **数据**: 6 条评论，1 👍，创建于 2026-02-25，最后更新 2026-05-29
- **核心诉求**: 用户（CyPack）需要让 Moltis 作为编排框架时，能通过**伪终端（PTY）**驱动 Claude Code 等子进程，使其保持交互模式而非退化为管道模式。这涉及：
  1. 实时捕获子 Agent 的中途确认提示（如"是否继续执行？"）
  2. 支持多 Agent 并行会话的终端隔离
  3. 避免 `isatty()` 检测导致的静默降级
- **信号分析**: 该 Issue 持续 3 个月未关闭，且为**跨框架通用需求**（非 Moltis 独有），评论数远超其他 Issue，表明社区对"真正的多智能体协同"有强烈期待。目前无关联 PR，存在**需求-实现断层风险**。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 影响范围 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#1085](https://github.com/moltis-org/moltis/issues/1085) | Docker 沙箱在 Apple Silicon (arm64) 启动失败：硬编码的 `/sys/class/dmi` tmpfs 挂载在 arm64 Docker Desktop 中不存在（DMI 为 x86 SMBIOS 特性） | **所有 arm64 Mac 用户**使用 Docker 后端时完全不可用 | ❌ 无 |
| 🔴 **高** | [#1086](https://github.com/moltis-org/moltis/issues/1086) | Apple Containers 后端：企业代理后 DNS 解析失败（Zscaler HTTPS 代理） | 企业网络环境下的 macOS 用户 | ❌ 无 |
| 🟡 **中** | [#1083](https://github.com/moltis-org/moltis/issues/1083) | 技能无法单独启用/禁用，只能按分类批量操作 | 精细化技能管理场景 | ✅ **已修复**（#1084） |

**风险评估**: #1085 与 #1086 形成**平台兼容性组合危机**——同一用户（karlmdavis）在 arm64 Mac 上尝试两种主流后端均失败，且错误均位于底层基础设施层（内核挂载点、VM 网络）。这两个问题需要维护者介入系统级调试，预计修复周期较长。建议优先处理 #1085（完全阻断），其次 #1086（环境依赖）。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 纳入可能性评估 |
|:---|:---|:---|
| **PTY 驱动的交互式子 Agent 编排** | #235 | ⭐⭐⭐☆☆ **中长期**。需求明确且社区热度高，但涉及终端模拟器架构重构，无 PR 迹象，可能等待核心维护者排期 |
| **arm64 平台原生兼容** | #1085, #1086 | ⭐⭐⭐⭐⭐ **紧急纳入**。非功能请求而是可用性阻断，预计下一补丁版本必须修复 |

**路线图推断**: 当前版本重心似乎在"技能系统"精细化（#1084 的修复方向），但基础设施层（沙箱后端、跨平台支持）的债务正在累积。若 Moltis 定位为"生产级 Agent 平台"，arm64 兼容性与企业网络支持需从"事后修复"升级为"首发测试矩阵"。

---

## 7. 用户反馈摘要

### 痛点提炼

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **企业开发环境** | #1086 (karlmdavis) | "Apple Containers builder VM 在 Zscaler 代理后无 DNS"——企业安全工具链与容器运行时冲突，Moltis 未提供代理透传或离线构建方案 |
| **Apple Silicon 主力机** | #1085 (karlmdavis) | "硬编码 x86 特有的 `/sys/class/dmi`"——架构假设固化在代码中，缺乏跨平台抽象 |
| **精细化权限管理** | #1083 (bsarkisov) | "无法单独禁用一个技能"——UI/UX 层面的控制粒度与心理模型不匹配 |

### 满意度信号
- **#1084 的快速修复**（同日报告→关闭）获得隐性认可：用户 penso 的 PR 描述详尽，包含"回归覆盖"承诺，维护流程专业。

---

## 8. 待处理积压

| Issue | 账龄 | 风险说明 |
|:---|:---|:---|
| [#235](https://github.com/moltis-org/moltis/issues/235) | **94 天**（2026-02-25 → 今） | ⚠️ **路线图级需求悬空**。作为评论数最高的开放 Issue，长期无维护者回应或里程碑标记，可能导致社区贡献者流失至竞品框架（如 OpenManus、CrewAI 的类似能力）。建议至少添加 `roadmap` 标签或发布设计草案（RFC）以管理预期。 |

---

> **健康度评分**: 🟡 **B**  
> 优势：Bug 修复响应快（#1083/#1084 当日闭环），代码质量意识强（回归测试）。  
> 风险：平台兼容性债务（arm64 × 2）、高价值功能需求（#235）长期未响应，可能侵蚀"生产就绪"定位。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-30

> **项目地址**: [github.com/agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)（注：实际仓库名为 `agentscope-ai/QwenPaw`）

---

## 1. 今日速览

CoPaw（QwenPaw）今日保持**高活跃度**：24小时内处理 **46 条 Issues**（关闭 26 条，新开/活跃 20 条）和 **34 条 PR**（合并/关闭 18 条，待审 16 条），社区协作效率显著。项目发布 **v1.1.10-beta.1** 预发布版本，聚焦基础设施优化。核心修复集中在**定时任务稳定性**（session 隔离、孤儿任务清理）、**桌面端体验**（Tauri 打包、依赖自动安装）及**多智能体协作**（子 Agent 工具调用）三大方向。待审 PR 数量偏高（16 条），需关注审阅瓶颈。

---

## 2. 版本发布

### [v1.1.10-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.10-beta.1)（预发布）

| 维度 | 详情 |
|:---|:---|
| **更新性质** | 维护性预发布，无破坏性变更 |
| **核心变更** | ① 精简 README 新闻板块（[#4726](https://github.com/agentscope-ai/QwenPaw/pull/4726)）；② 移除冗余 `unit-tests.yml` CI 工作流（[#4748](https://github.com/agentscope-ai/QwenPaw/pull/4748)） |
| **迁移注意** | 无需迁移；CI 变更仅影响贡献者工作流 |
| **风险评估** | 低风险；变更范围限于文档与基础设施 |

> ⚠️ 该版本未包含功能更新，主要服务于发布流程优化。生产环境建议等待正式版或关注 beta 周期内的累积修复。

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（18 条中精选）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#4806](https://github.com/agentscope-ai/QwenPaw/pull/4806) `feat(agents): add spawn_subagent tool` | @rayrayraykk | **新增工作区内临时子 Agent 执行工具**，与现有 `chat_with_agent`（跨工作区）形成互补，支持三种协作模式：同工作区共享历史、同工作区隔离历史、跨工作区 | ⭐⭐⭐ **架构里程碑**：完善多智能体协作工具矩阵，为 Agent Teams 路线图奠基 |
| [#4779](https://github.com/agentscope-ai/QwenPaw/pull/4779) `fix(tauri): add bundled desktop qwenpaw CLI` | @jinglinpeng | **打包版桌面端内置 `qwenpaw` CLI 可执行文件**，修复 Windows 桌面版定时任务因找不到命令而反复 `pip install` 的问题 | ⭐⭐⭐ 根治桌面端定时任务失效的底层根因 |
| [#4801](https://github.com/agentscope-ai/QwenPaw/pull/4801) `fix(pet): Auto-install missing dependencies` | @wangfei010313 | **桌面宠物插件缺失依赖自动安装**，解决 v1.1.9 因缺少 `pyside6-essentials` 导致宠物启动失败 | ⭐⭐ 首次贡献者修复，提升桌面端开箱体验 |
| [#4742](https://github.com/agentscope-ai/QwenPaw/pull/4742) `refactor(feishu): restructure card system` | @hongxicheng | **飞书卡片系统重构**，对齐 WeCom/QQ 频道架构；修复流式模式下卡片解析异常 | ⭐⭐ 企业级频道架构统一，维护性提升 |
| [#4728](https://github.com/agentscope-ai/QwenPaw/pull/4728) `fix(agents): preserve reasoning_content across file blocks` | @qbc2016 | **修复 `[thinking, file]` 消息在 OpenAI/Anthropic 格式转换中被静默丢弃的 bug** | ⭐⭐ 保障推理链完整性，影响模型输出质量 |
| [#4696](https://github.com/agentscope-ai/QwenPaw/pull/4696) `fix(coding): hide Windows git console windows` | @jinglinpeng | **编码模式 Git 子进程隐藏控制台窗口**，消除 Windows 桌面版黑窗闪烁 | ⭐⭐ 桌面端体验打磨 |
| [#4809](https://github.com/agentscope-ai/QwenPaw/pull/4809) `feat(providers): add OpenRouter app attribution headers` | @rayrayraykk | **OpenRouter 应用归属头**，提升平台排名可见性 | ⭐ 生态运营优化 |

**整体推进评估**：今日合并 PR 覆盖**多智能体架构扩展**、**桌面端可靠性**、**企业频道稳定性**三大战略方向，项目向 v1.2.0 目标稳步迈进。AgentScope 2.0 迁移（[#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)）仍在规划中，尚未进入执行阶段。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 状态 | 核心诉求分析 |
|:---|:---|:---:|:---|:---|
| 1 | [#4739](https://github.com/agentscope-ai/QwenPaw/issues/4739) Tool call 后 Agent 挂起等待用户输入 | 8 | ✅ CLOSED | **工具调用后状态机缺陷**：工具执行成功/超时/失败后，Agent 未自动继续推理，而是静默等待用户输入。用户需手动发送消息触发。反映**工具调用→Agent 响应的闭环逻辑**存在边界条件漏洞。 |
| 2 | [#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) 定时任务与用户消息共享 session 导致中断 | 7 | ✅ CLOSED | **多智能体资源隔离诉求**：定时任务（cron）与用户对话共享 session，用户消息优先级抢占导致任务中断。典型场景：育儿提醒任务执行期间用户发消息，任务被丢弃。核心矛盾：**异步后台任务 vs 实时交互的调度优先级**。 |
| 3 | [#4712](https://github.com/agentscope-ai/QwenPaw/issues/4712) v1.1.9-beta.1 无法运行本地 CLI（飞书 CLI 等） | 6 | ✅ CLOSED | **子进程网络隔离问题**：qwenpaw 子进程无法连接宿主机 WebSocket，导致依赖网络通信的 CLI 工具失效。对比竞品 OpenClaw/OpenCode 正常，存在**沙箱环境网络桥接**的竞争力差距。 |
| 4 | [#4802](https://github.com/agentscope-ai/QwenPaw/issues/4802) 1.1.9 无法正常问答对话，界面卡住 | 6 | ✅ CLOSED | **回归性阻塞 bug**：输入消息后聊天界面卡死无响应，直接影响核心功能可用性。 |
| 5 | [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) Feature Request: CoPaw Agent Teams — 自然语言驱动的自进化多智能体协作团队 | 6 | 🔵 OPEN | **战略级功能请求**：当前多智能体为"手动挡"（手动创建工作区、配置通信），用户期望"自然语言驱动"的自动团队组建、角色演化、动态协作。与今日合并的 `spawn_subagent`（[#4806](https://github.com/agentscope-ai/QwenPaw/pull/4806)）形成呼应，但距离完整愿景差距显著。 |

### 热点背后的集体诉求

```
┌─────────────────────────────────────────────────────────┐
│  1. "Agent 要自治"  — 工具调用后自恢复、定时任务不被打断        │
│  2. "多 Agent 要智能协作" — 从手动配置到自然语言驱动团队演化    │
│  3. "桌面端要靠谱" — 打包环境完整、子进程网络正常、升级不丢配置  │
│  4. "开发者体验要对标 Trae" — 对话分支管理、代码索引引用等      │
└─────────────────────────────────────────────────────────┘
```

---

## 5. Bug 与稳定性

### 按严重程度分级

| 级别 | Issue | 现象 | Fix PR | 状态 |
|:---|:---|:---|:---|:---:|
| 🔴 **P0-阻塞** | [#4802](https://github.com/agentscope-ai/QwenPaw/issues/4802) | v1.1.9 核心对话功能卡死 | 已修复（版本迭代） | ✅ CLOSED |
| 🔴 **P0-阻塞** | [#4712](https://github.com/agentscope-ai/QwenPaw/issues/4712) | 本地网络 CLI 工具完全不可用 | 疑似环境配置修复 | ✅ CLOSED |
| 🟡 **P1-高** | [#4739](https://github.com/agentscope-ai/QwenPaw/issues/4739) | 工具调用后 Agent 静默挂起 | 状态机修复 | ✅ CLOSED |
| 🟡 **P1-高** | [#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) | 定时任务被用户消息中断 | [#4822](https://github.com/agentscope-ai/QwenPaw/pull/4822)（待审） | 🔵 OPEN PR |
| 🟡 **P1-高** | [#4649](https://github.com/agentscope-ai/QwenPaw/issues/4649) | 孤儿定时任务无限执行 | 已修复 | ✅ CLOSED |
| 🟡 **P1-高** | [#4795](https://github.com/agentscope-ai/QwenPaw/issues/4795) | **向量索引 37GB 膨胀致 memory_search 崩溃** | 无 | 🔵 OPEN |
| 🟡 **P1-高** | [#4792](https://github.com/agentscope-ai/QwenPaw/issues/4792) | 流式输出导致客户端系统级卡顿（鼠标无法拖动） | 无 | 🔵 OPEN |
| 🟡 **P1-高** | [#4791](https://github.com/agentscope-ai/QwenPaw/issues/4791) | **服务重启时最后几条消息丢失**（`shutdown_handler` 为空） | 无，标记 `wontfix` | 🔵 OPEN |
| 🟢 **P2-中** | [#4807](https://github.com/agentscope-ai/QwenPaw/issues/4807) | 升级后禁用技能被重置 | 无 | 🔵 OPEN |
| 🟢 **P2-中** | [#4783](https://github.com/agentscope-ai/QwenPaw/issues/4783) | 桌面宠物终端循环打开但宠物不显示 | [#4801](https://github.com/agentscope-ai/QwenPaw/pull/4801) | ✅ CLOSED |
| 🟢 **P2-中** | [#4773](https://github.com/agentscope-ai/QwenPaw/issues/4773) | 桌面版创建定时任务反复 pip install | [#4779](https://github.com/agentscope-ai/QwenPaw/pull/4779) | ✅ CLOSED |

### 关键风险警示

> **⚠️ 向量数据库膨胀（[#4795](https://github.com/agentscope-ai/QwenPaw/issues/4795)）**：ChromaDB `link_lists` 索引 3 个月膨胀至 37GB，导致 `memory_search` 每 30 分钟崩溃。用户已定位到 `link_lists` 结构，但无官方修复。这是**长期运行实例的系统性风险**，影响所有生产部署。

> **⚠️ 消息丢失设计取舍（[#4791](https://github.com/agentscope-ai/QwenPaw/issues/4791)）**：SIGTERM 时 `shutdown_handler` 为空导致消息未刷盘。标记 `wontfix` 暗示架构限制，需评估是否接受数据丢失或引入 WAL 机制。

---

## 6. 功能请求与路线图信号

### 今日活跃功能请求

| Issue | 需求 | 与现有 PR 关联 | 纳入概率 | 时间信号 |
|:---|:---|:---|:---:|:---|
| [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) Agent Teams 自然语言驱动协作 | 自进化多智能体团队 | `spawn_subagent`（[#4806](https://github.com/agentscope-ai/QwenPaw/pull/4806)）为基础设施第一步 | 🟡 中 | v1.2+ 或独立大版本 |
| [#4789](https://github.com/agentscope-ai/QwenPaw/issues/4789) 对话分支管理（对标 Trae） | 单对话删除/回退、文件状态回滚 | 无 | 🟢 高 | 短期，用户呼声强烈且竞品已验证 |
| [#4796](https://github.com/agentscope-ai/QwenPaw/issues/4796) `/skills` Tab 自动补全 | 输入 `/` 关联技能 | [#4810](https://github.com/agentscope-ai/QwenPaw/pull/4810) 已提交，优化中 | 🟢 **极高** | 下一版本 |
| [#4759](https://github.com/agentscope-ai/QwenPaw/issues/4759) VSCode 兼容编码模式 + 直接目录导入 | 编码体验升级 | 无 | 🟡 中 | 中期，需架构调整 |
| [#4823](https://github.com/agentscope-ai/QwenPaw/issues/4823) 对话中引用文件目录和代码位置索引 | IDE 式文件引用 | 无 | 🟡 中 | 与 #4789 可合并为"编码模式 2.0" |
| [#4693](https://github.com/agentscope-ai/QwenPaw/pull/4693) 插件注册自定义频道 | 动态配置 UI，无需前端重建 | PR 已提交，待审 | 🟢 高 | 下一版本 |

### 路线图推断

```
v1.1.10 (近期)  →  稳定性修复 + /skills 补全 + 飞书线程回复
    ↓
v1.2.0 (中期)   →  AgentScope 2.0 迁移 ([#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)) + 对话分支管理 + 插件自定义频道
    ↓
v2.0 (远期)     →  Agent Teams 自进化协作（需架构级重构）
```

---

## 7. 用户反馈摘要

### 真实痛点（引用原声）

| 场景 | 原声摘录 | 情感 |
|:---|:---|:---:|
| **升级焦虑** | "每次更新完都要手动禁用一次[内置技能]，防止误调用" — [#4807](https://github.com/agentscope-ai/QwenPaw/issues/4807) | 😤 疲惫 |
| **桌面端不可靠** | "终端 looping open but the pet not open" — [#4783](https://github.com/agentscope-ai/QwenPaw/issues/4783) | 😫 挫败 |
| **竞品对比** | "openclaw/opencode 都能正常执行" — [#4712](https://github.com/agentscope-ai/QwenPaw/issues/4712) | 😒 失望 |
| **功能对标** | "我要这个！照着 tra e 抄" — [#4789](https://github.com/agentscope-ai/QwenPaw/issues/4789), [#4823](https://github.com/agentscope-ai/QwenPaw/issues/4823) | 🙏 迫切 |
| **数据恐惧** | "删除 file_store/ 目录后恢复正常" — [#4795](https://github.com/agentscope-ai/QwenPaw/issues/4795) | 😰 担忧 |
| **体验细节** | "点击面积小，人机交互不方便" — [#4780](https://github.com/agentscope-ai/QwenPaw/issues/4780) | 😐 挑剔 |

### 满意度分布推断

```
核心功能（对话/工具调用）: ████████░░ 80%  修复及时但回归频繁
桌面端体验              : █████░░░░░ 50%  打包/依赖/网络问题多发
多智能体/定时任务        : ██████░░░░ 60%  基础可用，隔离性刚修复
开发者/编码模式          : ████░░░░░░ 40%  明显落后于 Trae 等竞品
升级/配置持久化          : ████░░░░░░ 40%  技能状态、消息丢失等问题
```

---

## 8. 待处理积压

### 需维护者重点关注

| Issue/PR | 天数 | 风险 | 建议行动 |
|:---|:---:|:---|:---|
| [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) **AgentScope 2.0 迁移** | 3 天 | 🔴 **架构级 Breaking Change**，影响所有后端；评论数 3，👍 2，社区期待高 | 制定迁移时间表，发布 RFC 收集反馈 |
| [#4795](https://github.com/agentscope-ai/QwenPaw/issues/4795) **向量索引 37GB 膨胀** | 1 天 | 🔴 生产环境系统性风险，无 workaround 需手动删数据 | 优先级提升至 P0，分配存储引擎专家 |
| [#4791](https://github.com/agentscope-ai/QwenPaw/issues/4791) **消息丢失 wontfix** | 1 天 | 🟡 标记 `wontfix` 需公开解释设计权衡，否则信任受损 | 补充架构决策记录（ADR），或提供 graceful shutdown 指南 |
| [#3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) Agent Teams | 50 天 | 🟡 长期 OPEN，但今日 `spawn_subagent` 已落地 | 更新 Issue 状态，说明与 #4806 的关系，拆分里程碑

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-30

> **数据周期**：2026-05-29 至 2026-05-30  
> **项目地址**：[github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. 今日速览

ZeroClaw 今日保持**高强度开发节奏**，24小时内 Issues 更新 17 条（16 活跃/1 关闭）、PR 更新 41 条（38 待合并/3 已合并或关闭），无新版本发布。社区焦点集中在 **v0.8.0-beta 稳定性修复**（Slack/Telegram 通道故障、工具过滤失效、TTS 配置错位）与 **大规模集成 PR #6848** 的 beta-2 筹备上。安全与本地化议题显著上升，3 个 P1 级 Bug 尚无合并修复，整体健康度**中等偏紧——活跃但积压承压**。

---

## 2. 版本发布

**无新版本发布**。当前最新官方版本仍为 **v0.7.5**，但主分支已推进至 **v0.8.0-beta-1**，文档版本脱节问题已引发用户困惑（见 [#6997](https://github.com/zeroclaw-labs/zeroclaw/issues/6997)）。备受关注的 beta-2 由 PR [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) 承载，目前标记 **"DO NOT MERGE"**，处于首轮反馈收集阶段。

---

## 3. 项目进展

### 已合并/关闭的 PR

| PR | 作者 | 状态 | 关键进展 |
|:---|:---|:---|:---|
| [#5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652) | Stealinglight | **已关闭** | 原生扩展思考（Anthropic/Bedrock）功能——历经多月评审后关闭，原因未明示，可能因架构冲突或并入 #6848 |
| [#7007](https://github.com/zeroclaw-labs/zeroclaw/pull/7007) | 1700899e-collab | **已关闭** | WhatsApp LID JID 修复——与 [#7008](https://github.com/zeroclaw-labs/zeroclaw/pull/7008) 重复，作者可能切换至新 PR |
| [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) | chengongpp | **Issue 已关闭** | 企业微信（WeCom）通道支持——历时 2.5 个月完成，标志企业 IM 生态补全 |

**整体推进评估**：今日合并产出偏低（仅 3 项关闭），但 **38 个待合并 PR** 形成高压蓄水池，其中 #6848（XL 级，跨 20+ 模块）一旦落地将一次性引入 TUI、RPC 传输、DenyWithEdit 审批等核心能力，项目处于**质变前的静默期**。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 核心诉求 |
|:---|:---|:---|:---|
| 🔥 1 | [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) `tool_filter_groups` 对 MCP 工具失效 | **7 条** | **生产阻塞**：MCP 工具过滤配置形同虚设，prefix-check 逻辑错误 + deferred_loading 缺失，直接影响多工具场景下的安全管控 |
| 🔥 2 | [#3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090) WeCom 通道支持 | **5 条**（已关闭） | 企业用户刚需：填补与 OpenClaw 生态的功能差距，验证企业微信 WebSocket/webhook 双模式 |
| 🔥 3 | [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) Local-First 模式 | **3 条** | 边缘/隐私场景诉求：减少提示词膨胀、防泄漏、严格解析，获 2 👍 为今日最高 |

### 背后诉求分析
- **#6699**：企业级部署的**安全合规焦虑**——配置层与执行层脱节，"配置即代码"信任链断裂
- **#5287**：**本地化部署浪潮**下的体验落差，Ollama 等小型模型用户被迫承受云端模型的提示词开销

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 模块 | 状态 | 修复 PR | 影响范围 |
|:---|:---|:---|:---|:---|:---|
| **S1 - 工作流阻塞** | [#6992](https://github.com/zeroclaw-labs/zeroclaw/issues/6992) Slack Socket Mode 拒收所有消息 | channel:slack | 🔴 开放 | **无** | 全部 Slack 企业用户 |
| **S1 - 工作流阻塞** | [#6999](https://github.com/zeroclaw-labs/zeroclaw/issues/6999) Telegram 语音转录完全失效 | channel:telegram | 🔴 开放 | **无** | Telegram 语音交互场景 |
| **S1 - 工作流阻塞** | [#6997](https://github.com/zeroclaw-labs/zeroclaw/issues/6997) 文档版本与发布脱节 | docs | 🔴 开放 | **无** | 全体用户/贡献者 |
| **S2 - 行为降级** | [#6991](https://github.com/zeroclaw-labs/zeroclaw/issues/6991) 工具序列化忽略风险配置 | runtime | 🔴 开放 | **无** | v0.8.0-beta-1 工具安全策略 |
| **S2 - 行为降级** | [#7001](https://github.com/zeroclaw-labs/zeroclaw/issues/7001) TTS 多配置下解析错误代理 | channel:telegram | 🔴 开放 | **无** | 多代理 TTS 场景 |
| **S2 - 行为降级** | [#6995](https://github.com/zeroclaw-labs/zeroclaw/issues/6995) CLI 退格按字节删除（CJK 输入崩溃） | channel:cli | 🔴 开放 | **无** | 中文/日文/韩文用户 |
| **S3 - 轻微问题** | [#7005](https://github.com/zeroclaw-labs/zeroclaw/issues/7005) 引导向导裸字符串 | onboard | 🟡 **有 PR** | [#7012](https://github.com/zeroclaw-labs/zeroclaw/pull/7012) | i18n 完整性 |

**关键风险**：3 个 S1 级 Bug 零修复，其中 Slack/Telegram 双通道故障叠加，形成**企业 IM 入口级瘫痪**；#6991 工具安全策略绕过属**潜在 CVE 级隐患**，需紧急响应。

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 纳入 beta-2 概率 | 判断依据 |
|:---|:---|:---|:---|
| [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) Schema-Guided Reasoning (SGR) 跨提供商结构化输出 | RFC | **高** | 明确标注"supersedes #4760"，mn13 为活跃维护者，架构与 #6848 的 TUI/RPC 方向契合 |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) 细粒度沙箱策略（文件系统/网络限制） | RFC | **中** | 安全基建需求，但需 Landlock/Bubblewrap/Seatbelt 三端实现，工作量巨大 |
| [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) Skills 支持与 UX（v0.7.6） | Tracker | **已锁定** | 官方标记 v0.7.6 主题，singlerider 主导 |
| [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) zerocode TUI + RPC + DenyWithEdit | 集成 PR | **核心载体** | "DO NOT MERGE" 标签下寻求反馈，beta-2 基础分支，已知 3 项阻塞问题 |
| [#6665](https://github.com/zeroclaw-labs/zeroclaw/pull/6665) channel_send 工具 + default_target | 功能 PR | **高** | 解决 cron 结果输出痛点，9 通道覆盖，与 #6848 功能互补 |

**路线图信号**：v0.8.0 正式版可能跳过 beta-2 直接冲刺，因 beta-1 遗留问题（#6991/#6992/#6999）已构成发布障碍。

---

## 7. 用户反馈摘要

### 真实痛点

> **"配置写了等于没写"** —— [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) 评论揭示 MCP `tool_filter_groups` 的文档与实现断层，用户经历"clean parse → zero effect"的信任崩塌

> **"3 次退格删一个中文字"** —— [#6995](https://github.com/zeroclaw-labs/zeroclaw/issues/6995) 暴露 CLI 的 Unicode 处理缺陷，CJK 用户日常交互受阻

> **"文档说 0.8.0，下载只有 0.7.5"** —— [#6997](https://github.com/zeroclaw-labs/zeroclaw/issues/6997) 新用户 onboarding 困惑，schema 变更加剧迁移焦虑

### 使用场景与满意度

| 场景 | 满意度 | 证据 |
|:---|:---|:---|
| 企业微信集成 | ✅ **正向** | #3090 关闭，历时 2.5 个月但终交付 |
| 本地 Ollama 轻量部署 | ⚠️ **待改善** | #5287 2 👍 反映边缘需求强烈，当前"云优先"架构负担过重 |
| 多代理 TTS 语音回复 | ❌ **负面** | #7001 配置解析错位，功能"静默失效" |

---

## 8. 待处理积压

### 需维护者紧急关注

| Issue/PR | 创建时间 | 积压天数 | 风险说明 |
|:---|:---|:---|:---|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 153 次提交批量回滚审计 | 2026-04-24 | **36 天** | 高优先级审计任务，标记 `in-progress` 但评论仅 2 条，历史代码丢失未恢复 |
| [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) MCP 工具过滤失效 | 2026-05-16 | **14 天** | P1 + `status:accepted` + 7 评论，无 PR 关联，安全策略空洞化 |
| [#6284](https://github.com/zeroclaw-labs/zeroclaw/pull/6284) DeepSeek reasoning_content 修复 | 2026-05-02 | **28 天** | 高优先级 provider 修复，评论 `undefined`（数据异常或零互动），可能因 #6848 集成被搁置 |

### 维护者行动建议

1. **立即**：为 #6992/#6999 分配通道模块负责人，S1 级 48 小时无响应将损害企业用户信任
2. **本周**：#6699 需从 `accepted` 转入 `in-progress`，关联具体开发者
3. **#6848 合入前**：强制要求解决 #6991（工具安全绕过），否则 beta-2 携带已知高危缺陷

---

> **日报生成时间**：2026-05-30  
> **数据置信度**：Issues/PR 元数据完整，部分 PR 评论数显示 `undefined` 建议核查 GitHub API 响应

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*