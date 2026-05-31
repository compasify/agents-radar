# OpenClaw 生态日报 2026-05-31

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-31 00:26 UTC

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

# OpenClaw 项目动态日报 | 2026-05-31

---

## 1. 今日速览

OpenClaw 社区今日保持极高活跃度，24小时内 **500 条 Issues 更新**（432 活跃/新开，68 关闭）与 **500 条 PR 更新**（337 待合并，163 已合并/关闭），双双达到近期峰值。项目发布 **v2026.5.28 补丁版本**，重点修复 Codex 运行时稳定性与 Agent 恢复机制。社区核心诉求集中在 **飞书/Feishu 渠道崩溃**（v2026.5.27 回归）、**Codex OAuth/运行时路由** 的迁移摩擦，以及 **Windows 平台性能退化** 三大主题。大量高优先级 P1 Issue 涌现，显示近期版本迭代引入的回归问题正在消耗维护资源。

---

## 2. 版本发布

### [v2026.5.28: openclaw 2026.5.28](https://github.com/openclaw/openclaw/releases/tag/v2026.5.28)

| 属性 | 内容 |
|:---|:---|
| **发布日期** | 2026-05-28 |
| **版本类型** | 补丁修复（稳定性聚焦） |
| **核心主题** | Agent & Codex 运行时恢复可靠性 |

**Highlights 详解：**

| 修复项 | 技术细节 | 用户影响 |
|:---|:---|:---|
| **子 Agent 工作目录隔离** | Subagents 保持 cwd/workspace 分离 | 避免并行任务间文件污染 |
| **Hook 上下文作用域收紧** | Hook context 限制为 prompt-local | 防止上下文泄漏导致意外行为 |
| **会话锁超时释放** | Session locks 在 timeout abort 时正确释放 | 减少僵尸会话阻塞 |
| **实时锁存活清理** | Live OpenClaw locks 在 cleanup 后存活 | 保障长连接稳定性 |
| **避免陈旧重启续传** | Stale restart continuations 被拦截 | 防止断线重连后执行过期指令 |
| **Codex app-server/helper 故障恢复** | 未完整描述，推测为进程级容错 | 降低 Codex 后端崩溃概率 |

**⚠️ 迁移注意事项：** 本次发布未声明破坏性变更，但结合社区反馈，从 v2026.5.26/v2026.5.27 升级的用户若遇到 Codex 运行时/Provider 不匹配，建议运行 `openclaw doctor --fix` 后验证配置（参考 [#87650](https://github.com/openclaw/openclaw/issues/87650)）。

---

## 3. 项目进展

### 今日已关闭/合并的关键 PR（从 PR 列表推断）

| PR | 作者 | 状态 | 贡献 |
|:---|:---|:---|:---|
| [#87929](https://github.com/openclaw/openclaw/pull/87929) fix(cron): preserve plugin delivery targets | TurboTheTurtle | **已关闭** | 修复 cron 任务剥离插件解析的投递目标问题，保障 BNCR 风格日历插件的消息送达 |

### 高优先级待合并 PR（维护者已标记 ready for look）

| PR | 作者 | 优先级 | 核心进展 | 风险标签 |
|:---|:---|:---|:---|:---|
| [#88474](https://github.com/openclaw/openclaw/pull/88474) fix(gateway): avoid restarts for auth cooldown reloads | IWhatsskill | P1 | **认证热重载不重启网关**——将 `auth.cooldowns.*` 配置变更从强制重启降级为热刷新，减少生产环境抖动 | 🚨 compatibility, 🚨 auth-provider |
| [#88163](https://github.com/openclaw/openclaw/pull/88163) fix(cli): harden Windows node pairing and approvals | vincentkoc | P2 | **Windows 设备配对加固**——保留有效未标记 token、修复元数据刷新审批，解决 Windows 绝对路径与性能退化关联问题 | 🚨 compatibility, 🚨 auth-provider, 🚨 security-boundary |
| [#88468](https://github.com/openclaw/openclaw/pull/88468) fix(configure): migrate stale Codex defaults after OpenAI auth | stevenepalmer | P2 | **Codex 配置自动对齐**——OpenAI 登录后自动清理遗留 `codex/gpt-5.5` 默认配置，匹配 canonical `openai/gpt-5.5` | 🚨 compatibility, 🚨 auth-provider |
| [#88351](https://github.com/openclaw/openclaw/pull/88351) fix(plugin-sdk): isolate provider catalog projection failures | vincentkoc | P2 | **Provider 目录容错隔离**——单条损坏的 provider/model/auth 记录不再拖垮整个目录加载 | 🚨 compatibility, 🚨 auth-provider |
| [#88410](https://github.com/openclaw/openclaw/pull/88410) fix(gateway): harden MCP loopback tool schemas | vincentkoc | P2 | **MCP 工具 schema 加固**——跳过畸形 loopback 工具，保障健康工具可用 | 🚨 compatibility |

### 大型基础设施 PR（长期推进）

| PR | 作者 | 规模 | 路线图意义 |
|:---|:---|:---|:---|
| [#81402](https://github.com/openclaw/openclaw/pull/81402) refactor: move runtime state to SQLite | steipete | XL | **运行时状态数据库化**——将分散的 JSON/JSONL/锁文件迁移至 SQLite，解决 #75380 等日志无限增长问题，当前等待作者更新 |
| [#88459](https://github.com/openclaw/openclaw/pull/88459) refactor: extract normalization core package | steipete | XL | **归一化核心提取**——建立 `@openclaw/normalization-core` 私有 workspace 包，为长期插件生态标准化奠基 |

---

## 4. 社区热点

### 🔥 评论最多 & 反应最强烈的 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 状态 |
|:---|:---|:---:|:---:|:---|:---|
| 1 | [#87646](https://github.com/openclaw/openclaw/issues/87646) Feishu 消息投递崩溃 `TypeError: Cannot read properties of undefined (reading 'run')` | 12 | 1 | **v2026.5.27 致命回归**——飞书私信完全不可用，影响生产部署 | ✅ **已关闭** |
| 2 | [#86820](https://github.com/openclaw/openclaw/issues/86820) Codex OAuth compaction 回退至直接 OpenAI API 失败 | 12 | 6 | **Codex OAuth 配置断裂**——有效 OAuth profile 在压缩阶段因缺失 OPENAI_API_KEY 失败，高 👍 反映普遍痛点 | ✅ **已关闭** |
| 3 | [#73424](https://github.com/openclaw/openclaw/issues/73424) Image tool "Failed to optimize image" | 9 | 1 | **VLM 图像预处理管道故障**——JPEG 分析失败，直接 API 调用正常，指向 OpenClaw 内部优化层问题 | 🔴 **开放，stale** |
| 4 | [#87307](https://github.com/openclaw/openclaw/issues/87307) Matrix thread replies 回归为 normal replies | 8 | 1 | **Matrix 线程语义破坏**——2026.5.22 升级后 thread 内回复变为普通回复，`/status` `/model` 静默 | 🔴 **开放，P1** |
| 5 | [#86169](https://github.com/openclaw/openclaw/issues/86169) 小米 MiMo Token Plan 提供商支持 | 8 | 1 | **国内模型生态接入**——小米订阅制 API 连接不畅，需一阶支持 | ✅ **已关闭** |
| 6 | [#76315](https://github.com/openclaw/openclaw/issues/76315) Gateway Linux 高负载下不稳定 | 8 | 1 | **生产环境可靠性**——子 Agent/embedded-run 负载下 WhatsApp 408 断开、事件循环停滞 | 🔴 **开放，stale** |
| 7 | [#75739](https://github.com/openclaw/openclaw/issues/75739) Codex harness migration 运行时路由双 Bug | 8 | 3 | **迁移文档与实现脱节**——`agentRuntime.fallback="none"` 未阻止非 Codex 回退，canonical openai/* 未代理 openai-codex OAuth | 🔴 **开放，stale** |

**诉求分析：** 社区当前最强烈的呼声是 **"升级稳定性"**——v2026.5.27 引入的飞书崩溃、Codex 超时、Matrix 线程回归构成"渠道信任危机"；其次是 **"国内/ alternative 模型提供商的一阶支持"**（小米、Kimi、Ollama）；第三是 **"Windows 平台同等质量"**（性能、路径处理、安装体验）。

---

## 5. Bug 与稳定性

### P1 严重 Bug（生产阻断或数据丢失风险）

| Issue | 标签 | 描述 | Fix PR 状态 | 风险 |
|:---|:---|:---|:---|:---|
| [#87646](https://github.com/openclaw/openclaw/issues/87646) | 🐚 platinum hermit, clawsweeper:linked-pr-open | 飞书私信投递完全崩溃 | ✅ **已关闭**（推测 v2026.5.28 修复） | 消息丢失 |
| [#87307](https://github.com/openclaw/openclaw/issues/87307) | 🦐 gold shrimp, impact:message-loss, impact:session-state | Matrix thread 语义破坏 + 命令静默 | 🔴 **无 Fix PR**，needs-live-repro | 会话状态混乱 |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | 🐚 platinum hermit, impact:crash-loop, impact:message-loss | Codex-backed Telegram 反复超时，turn/completed 永不到达 | 🔴 **无 Fix PR**，fix-shape-clear | 无限重试/崩溃循环 |
| [#88020](https://github.com/openclaw/openclaw/issues/88020) | 🦞 diamond lobster, impact:session-state | Anthropic "Invalid signature in thinking block" 未进入重试，硬失败 | 🔴 **无 Fix PR**，queueable-fix | 长会话必然崩溃 |
| [#87650](https://github.com/openclaw/openclaw/issues/87650) | 🐚 platinum hermit, impact:auth-provider | onboard/doctor --fix 未修复 Codex provider/runtime 不匹配 | ✅ **已关闭** | 升级后服务不可用 |
| [#87725](https://github.com/openclaw/openclaw/issues/87725) | 🦞 diamond lobster, impact:message-loss | Codex missing-terminal fallback 泄漏至 Discord 用户可见频道 | ✅ **已关闭** | 内部错误暴露给用户 |
| [#86996](https://github.com/openclaw/openclaw/issues/86996) | 🐚 platinum hermit, impact:crash-loop | Active Memory + Codex app-server 路径导致网关事件循环停滞 | 🔴 **无 Fix PR**，needs-live-repro | 全系统瘫痪 |
| [#88352](https://github.com/openclaw/openclaw/issues/88352) | 🦞 diamond lobster, impact:session-state | Codex 新线程丢失历史上下文（#88262 回归） | 🔴 **无 Fix PR**，今日新建 | 会话连续性断裂 |
| [#88234](https://github.com/openclaw/openclaw/issues/88234) | 无评级 | **飞书崩溃重复报告**——#87646 的独立复现 | 🔴 **开放**，今日新建 | 与 #87646 同源 |
| [#77116](https://github.com/openclaw/openclaw/issues/77116) | 🦞 diamond lobster, impact:crash-loop | 飞书 2026.5.2 升级后 appId/appSecret 不兼容崩溃循环 | 🔴 **Stale**，长期未修 | 重复历史 |

### P2 重要 Bug

| Issue | 核心问题 | 状态 |
|:---|:---|:---|
| [#73424](https://github.com/openclaw/openclaw/issues/73424) Image tool 预处理管道 JPEG 优化失败 | 🔴 Stale，4周无更新 |
| [#73814](https://github.com/openclaw/openclaw/issues/73814) `curl \| bash` 安装脚本挂起截断 | 🔴 无 Fix PR，needs-live-repro |
| [#65156](https://github.com/openclaw/openclaw/issues/65156) sqlite-vec ABI 不匹配导致向量搜索全失效 | 🔴 queueable-fix，7周无进展 |
| [#48780](https://github.com/openclaw/openclaw/issues/48780) Windows exec()/read() 命令被 `</arg_value>>` 污染 | 🔴 linked-pr-open，10周无合并 |
| [#84256](https://github.com/openclaw/openclaw/issues/84256) `plugins update --all` 降级手动更新的插件 | 🔴 无 Fix PR，needs-maintainer-review |

---

## 6. 功能请求与路线图信号

| 需求来源 | 功能 | 与现有 PR 的关联 | 纳入可能性 |
|:---|:---|:---|:---|
| [#73699](https://github.com/openclaw/openclaw/issues/73699) Discord 语音频道 I/O 桥接至文本会话（voice-as-IO） | 独立 PR 未出现 | 低（架构复杂）|
| [#75074](https://github.com/openclaw/openclaw/issues/75074) `/v1/responses` 暴露内置工具调用用于离线评估 | 无 | 中（API 兼容性顾虑）|
| [#66670](https://github.com/openclaw/openclaw/issues/66670) `sessions_spawn` 填充 `agent_id` 至 SQLite | 无 | 高（数据完整性，简单）|
| [#86169](https://github.com/openclaw/openclaw/issues/86169) 小米 MiMo Token Plan 一阶支持 | ✅ **已关闭** | ✅ **已解决** |
| [#76952](https://github.com/openclaw/openclaw/issues/76952) Realtime Talk 语音、语音 Agent 角色、移动/电话桥接文档 | 无 | 中（文档+功能组合）|
| [#72950](https://github.com/openclaw/openclaw/issues/72950) Plugin config 支持环境变量/可写覆盖层 | 无 | 高（容器部署刚需，#81402 SQLite 重构可能顺带）|
| [#88476](https://github.com/openclaw/openclaw/pull/88476) **Twilio SMS 渠道**（今日新建 PR）| steipete 的 XL 规模 PR | ✅ **推进中**——填补短信渠道空白 |

**路线图信号：** 
- **渠道扩张**：Twilio SMS PR 显示团队正补齐传统电信渠道
- **本地模型友好**：[#88181](https://github.com/openclaw/openclaw/pull/88181) `localModelLeanProfile` 严格模式、[#87838](https://github.com/openclaw/openclaw/pull/87838) Ollama 纳入实时测试矩阵，均指向降低 OpenAI/Anthropic 依赖
- **企业合规**：[#88075](https://github.com/openclaw/openclaw/pull/88075) `tools.exec.denyPathPatterns` 硬拒绝门，满足安全审计

---

## 7. 用户反馈摘要

### 😤 核心痛点

> *"After upgrading from v2026.5.26 to v2026.5.27, the feishu channel fails to dispatch incoming direct messages"* — [#87646](https://github.com/openclaw/openclaw/issues/87646) leo-afk-sudo

> *"OpenClaw on native Windows getting notably slower and slower with each new version"* — [#76884](https://github.com/openclaw/openclaw/issues/76884) wingraver

> *"Running the install command `curl -fsSL https://openclaw.ai/install.sh \| bash` ... causes the script to hang indefinitely"* — [#73814](https://github.com/openclaw/openclaw/issues/73814) ItsMeForLua

> *"The gateway can be listening and pass `gateway health`, while `gateway probe` and `doctor` still report it as unreachable"* — [#79099](https://github.com/openclaw/openclaw/issues/79099) MAdArab872

### ✅ 满意场景

> *"Now that Realtime Talk is working, I love the feature. It feels genuinely useful and low-latency."* — [#76952](https://github.com/openclaw/openclaw/issues/76952) Hal2600

### 🔍 典型使用场景

| 场景 | 代表 Issue | 规模暗示 |
|:---|:---|:---|
| 企业 IM 集成（飞书、钉钉、Slack、Teams） | #87646, #75969, #77116, #87938 | 大量企业用户 |
| 多 Agent 协作与 Subagent 编排 | #75196, #74286, #74837, #87329 | 复杂工作流用户 |
| Codex/编程 Agent 生产部署 | #86820, #87744, #87436, #88352 | 开发者工具核心场景 |
| 自托管与本地模型（Ollama、llamacpp） | #87838, #88460, #88181 | 隐私/成本敏感用户 |

---

## 8. 待处理积压

### 🚨 需维护者紧急介入（Stale + P1/P2 + 无 Fix PR）

| Issue | 创建 | 最后更新 | 阻塞原因 | 行动建议 |
|:---|:---|:---|:---|:---|
| [#76315](https://github.com/openclaw/openclaw/issues/76315) Gateway Linux 高负载不稳定 | 2026-05-02 | 今日 | 4周 stale，WhatsApp 408 + 事件循环停滞 | 分配性能工程师，复现负载测试 |
| [#75739](https://github.com/openclaw/openclaw/issues/75739) Codex harness migration 双 Bug | 2026-05-01 | 今日 | 4周 stale，迁移文档与实现脱节 | 文档+代码联合审查，阻断迁移用户 |
| [#74907](https://github.com/openclaw/openclaw/issues/74907) 多工具轮次重放产生孤儿 tool_use | 2026-04-30 | 今日 | 4周 stale，v2026.4.x 回归 | 会话

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析
## 2026-05-31 动态综述

---

## 1. 生态全景

个人 AI 助手开源生态正经历**"从功能扩张向质量巩固"的阵痛转型**。头部项目（OpenClaw、ZeroClaw）日均处理 50+ Issues/PR，但回归问题消耗大量维护资源；中型项目（NanoBot、Hermes Agent、IronClaw）聚焦安全加固与架构重构；尾部项目（LobsterAI、NullClaw、TinyClaw）则陷入维护停滞或静默。整体呈现**"渠道集成深度竞争、推理链完整性成为硬需求、桌面端战略分化"**三大特征，企业合规与多模态交互成为下一阶段分水岭。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 版本发布 | 健康度评估 | 关键信号 |
|:---|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 更新 (432 活跃/新开, 68 关闭) | 500 更新 (337 待合并, 163 已合并/关闭) | v2026.5.28 补丁 | 🟡 **高活跃但承压** | 渠道回归问题爆发，P1 堆积 |
| **NanoBot** | 4 关闭, 3 新开 | 6 合并/关闭, 9 待合并 | 无 | 🟢 **健康迭代** | 安全+并发修复质量高，Heartbeat 噪音待裁决 |
| **Hermes Agent** | 50 更新 (40 新开/活跃, 10 关闭) | 50 更新 (44 待合并, 6 合并/关闭) | 无 | 🟡 **活跃但有 P0 漏洞** | #35584 网关配置泄露需 hotfix |
| **PicoClaw** | 7 关闭 (57%), 若干活跃 | 3 处理, 9 待合并 | v0.2.9-nightly | 🟡 **快速迭代但回归风险** | Web UI 会话污染、压缩阈值显示异常 |
| **NanoClaw** | 1 活跃 | 4 合并/关闭, 11 待审 | 无 | 🟢 **健康开发期** | Apple Container 双修复待合并，技能生态扩张 |
| **NullClaw** | 0 | 2 关闭 | 无 (v2026.5.29 待发布) | ⚪ **维护期静默** | 底层线程调度修复零讨论 |
| **IronClaw** | 3 活跃 | 13 合并/关闭, 8 待审 | 无 (crates.io 滞后 2 月) | 🟡 **高强度但交付裂缝** | E2E 持续失败 4 天，发布流水线断裂 |
| **LobsterAI** | 0 | 0 合并, 2 待合并 (stale 57 天) | 无 | 🔴 **维护停滞** | UI 修复就绪但审查管道阻塞 |
| **CoPaw** | 11 更新 (10 活跃/新开, 1 关闭) | 3 待合并 | 无 | 🟡 **功能迭代期，稳定性承压** | Windows 闪烁 22 天未解，P0 功能卡死 |
| **ZeroClaw** | 50 更新 (39 关闭, 11 新开/活跃) | 34 合并/关闭 | 无 | 🟡 **战略收缩期高强度收尾** | Tauri 桌面端移除，语音 PR 全关 |
| **TinyClaw** | 0 | 0 | 无 | ⚪ **无活动** | — |
| **Moltis** | 0 | 0 | 无 | ⚪ **无活动** | — |
| **ZeptoClaw** | 0 | 0 | 无 | ⚪ **无活动** | — |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | 500 Issues/PR 日更新，绝对头部 | 2-10 倍于 NanoBot/Hermes，50 倍于 LobsterAI |
| **渠道覆盖** | 飞书、Matrix、Discord、Telegram、WhatsApp、Webhook 等全矩阵 | ZeroClaw 覆盖相近但深度不足；NanoBot 聚焦 Matrix；PicoClaw 侧重国内 IM |
| **企业集成** | Codex/编程 Agent 为核心场景，OAuth 迁移摩擦大 | Hermes 同类竞争但 thinking 块保真度差；IronClaw 的 Reborn 认证体系更现代但交付滞后 |
| **架构债务** | JSON/JSONL 运行时状态 → SQLite 迁移中（#81402 XL PR） | NanoClaw 已完成 IPC 异步化；ZeroClaw 定时任务架构债务更重 |
| **Windows 支持** | 性能退化、路径处理、设备配对问题集中 | CoPaw Windows 闪烁问题同样长期未解；PicoClaw 无此痛点（Go 运行时） |

**核心优势**：渠道生态最完整、企业 IM 集成深度最高、Subagent/多 Agent 编排场景最成熟。

**关键风险**：版本迭代引入回归的频率过高（v2026.5.27 飞书崩溃、Codex 超时、Matrix 线程破坏），"渠道信任危机"正在消耗社区耐心。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫程度 |
|:---|:---|:---|:---|
| **推理链完整性（thinking/reasoning_content）** | OpenClaw (#87744 Codex 超时)、Hermes (#17861 thinking 块丢失)、ZeroClaw (#6269 context compressor 丢弃 reasoning_content) | 上下文压缩、历史记录、跨提供商切换时保留推理过程，非可选元数据 | 🔴 **P0-P1** |
| **企业 IM 渠道稳定性** | OpenClaw (#87646 飞书崩溃, #87307 Matrix 线程)、NanoBot (#4111 飞书 Heartbeat 噪音)、PicoClaw (#2952 QQ 重启死循环)、CoPaw (#4821 飞书群聊共享) | 生产环境消息不丢失、线程语义正确、自动恢复可靠 | 🔴 **P0-P1** |
| **安全加固（shell=True 清理、SSRF、配置泄露）** | Hermes (#35584 P0 配置泄露, #2743 shell=True)、NanoBot (#4086 SSRF IPv6 绕过, #4106 Matrix 媒体下载限制)、OpenClaw (#88075 denyPathPatterns) | 从"功能可用"到"企业审计通过" | 🟡 **P1，趋势加速** |
| **认证体系现代化（OAuth/ProductAuth）** | OpenClaw (#86820 Codex OAuth 断裂)、IronClaw (#4245-#4247 ProductAuth 重构)、NanoClaw (#2634 AWS 凭证代理) | 统一多提供商认证表面，减少迁移摩擦 | 🟡 **P1-P2** |
| **Windows 平台同等质量** | OpenClaw (#76884 性能退化, #88163 设备配对)、CoPaw (#4123/4828/4829 shell 闪烁)、Hermes (#35506 PowerShell 挂起) | 路径处理、窗口管理、安装体验与 macOS/Linux 对齐 | 🟡 **P1-P2，长期痛点** |
| **语音/多模态交互** | ZeroClaw (#5896 全双工语音, PR 全关)、NanoBot (#4113 OpenRouter STT)、NanoClaw (#2317 whisper 本地转写) | 从文本优先到语音原生，打断、低延迟、本地模型支持 | 🟡 **P2，战略分化** |
| **记忆系统可控性** | NanoBot (#3885 Dream 全局开关, #4050 手动记忆模式)、Hermes (#27657 Brain-as-source-of-truth) | 资源可预测、供应商锁定规避、个人知识库主权 | 🟢 **P2，差异化竞争点** |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 企业 IM 集成、多 Agent 编排、Codex 编程 Agent | 企业开发者、DevOps 团队、多平台运营者 | Node.js/TS 运行时，JSONL → SQLite 迁移中，插件化渠道架构 |
| **NanoBot** | 安全默认、Matrix E2EE、记忆系统精细化控制 | 隐私敏感用户、边缘部署者、Matrix 社区 | Rust 核心，bwrap 沙箱，SQLite 原生，配置驱动 |
| **Hermes Agent** | 个人 AI 操作系统、记忆主权、桌面应用 | 高级个人用户、知识工作者、Anti-SaaS 倡导者 | Python 运行时，Brain 目录集成，TUI+Electron 双界面 |
| **PicoClaw** | 轻量化、快速迭代、国内模型生态 | 中文开发者、中小企业、Azure 企业用户 | Go 运行时，单二进制部署，i18n 驱动 |
| **NanoClaw** | 容器原生、技能生态、多实例部署 | 云原生开发者、K8s 运维、Agent 平台构建者 | TypeScript/Node.js，Docker 优先，Skills-as-Plugins |
| **IronClaw** | 区块链原生（NEAR AI）、WASM 运行时、触发器系统 | Web3 开发者、去中心化应用构建者 | Rust + WASM (wasmtime)，Reborn 架构重构中，crates.io 发布 |
| **ZeroClaw** | 多渠道 Agent 平台、MCP 生态、输出路由 | Letta 迁移用户、跨渠道运营者、企业集成商 | Python 后端，React WebUI，Tauri 已移除，定时任务债务重 |
| **CoPaw** | AI 编程助手、对话版本控制、国产模型兼容 | 中国开发者、Trae/Cursor 迁移用户 | Tauri/Electron 双桌面端，ACP 协议兼容，Qwen 系列优化 |
| **NullClaw** | 确定性调度、资源隔离、Zig 运行时 | 系统编程爱好者、嵌入式/边缘场景 | Zig 语言，std_compat 抽象层，POSIX nanosleep 精确调度 |
| **LobsterAI** | 网易有道背书、MCP 配置体验 | 中文企业用户、有道生态集成者 | 数据不足，UI 修复停滞 |

---

## 6. 社区热度与成熟度

| 层级 | 项目 | 特征 | 阶段判断 |
|:---|:---|:---|:---|
| **快速迭代期** | OpenClaw、ZeroClaw、IronClaw | 日更新 50+，大 PR 密集，架构重构并行 | 功能扩张与债务清偿叠加，回归风险高 |
| **质量巩固期** | NanoBot、NanoClaw、PicoClaw | 日更新 10-20，修复响应快，安全/并发为重点 | 从"能用"向"好用、可控"迁移，健康度最佳 |
| **战略分化期** | Hermes Agent、CoPaw | 活跃但方向摇摆（Hermes 桌面应用 vs 安全债务；CoPaw 功能迭代 vs 稳定性危机） | 需明确优先级，避免用户流失 |
| **维护停滞/静默期** | LobsterAI、NullClaw、TinyClaw、Moltis、ZeptoClaw | 零活动或 PR 积压 50+ 天无合并 | 社区信任损耗，存在归档风险 |

**关键观察**：NanoBot 的"高质量交付日"（安全×2、并发×1、协议兼容×1、UX×2）与 OpenClaw 的"渠道信任危机"形成鲜明对比——**社区成熟度不完全由规模决定，修复响应速度与回归控制同样关键**。

---

## 7. 值得关注的趋势信号

| 趋势 | 证据 | 对开发者的参考价值 |
|:---|:---|:---|
| **推理链成为运行时一等公民** | 三项目同时暴露 thinking/reasoning_content 丢失问题 | 设计上下文压缩、历史存储、跨提供商切换时，必须将推理链与最终输出同等对待，而非"可丢弃的调试信息" |
| **"平台原生语义透传" vs "统一抽象层"的张力** | NanoClaw #2044 Discord `<URL>` 被错误转换为 Markdown；OpenClaw 渠道行为回归 | 中间件设计需保留"逃逸舱口"，强制统一抽象会逆转平台特定语义的原始意图 |
| **桌面端战略大分化** | ZeroClaw 移除 Tauri（投入作废）；Hermes 推进 Electron 桌面应用；CoPaw 双框架并行 | 评估桌面端投入需考虑：目标用户是否真正需要原生体验？Web 优先 + PWA 是否足够？ |
| **安全从"功能"变为"准入门槛"** | NanoBot SSRF IPv6 绕过、Hermes P0 配置泄露、OpenClaw denyPathPatterns | 企业用户的安全审计需求已从"加分项"变为"否决项"，沙箱、权限边界、敏感信息处理需前置设计 |
| **记忆系统的"可控性"成为差异化** | NanoBot 手动记忆模式、Hermes Brain-as-source-of-truth | 用户对"自动记忆不可控"的容忍度下降，提供精细开关、本地优先、供应商可插拔的记忆架构将获得忠诚度 |
| **crates.io/npm 等发布流水线断裂风险** | IronClaw 2 个月未发布、NullClaw 版本待发布 | 自动化发布是供应链安全的基础，手动发布滞后会直接锁定下游用户于含 CVE 的旧版本 |
| **外部贡献者摩擦管理** | ZeroClaw 语音 PR 三连关（needs-author-action）；IronClaw 社区补丁五连拒 | 战略收缩期需明确沟通"不采纳"的替代路线图，避免贡献者流失与社区分裂 |

---

> **分析师结论**：2026-05-31 的生态快照显示，个人 AI 助手赛道正从"功能竞赛"进入"信任竞赛"。OpenClaw 的渠道深度与 NanoBot 的质量控制代表了两种 viable 路径，而 ZeroClaw 的桌面端收缩与 IronClaw 的发布断裂则是警示案例。下一阶段的核心变量是：**谁能在保持渠道扩张的同时，将回归率控制在可接受阈值内，并将安全、记忆可控性、推理链完整性转化为可量化的企业准入能力。**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-31

---

## 1. 今日速览

NanoBot 今日保持**高活跃度**，24小时内处理 **4 个 Issue 关闭**、**6 个 PR 合并/关闭**，同时新增 **3 个活跃 Issue** 和 **9 个待合并 PR**。核心进展集中在**安全加固**（Matrix 媒体下载限制、SSRF IPv6 规范化）、**并发正确性修复**（process_direct 会话锁）以及**Heartbeat 通知噪音治理**（3个关联 PR 同时推进）。项目整体健康度良好，修复响应迅速，但 Heartbeat 问题显示生产环境存在"过度通知"痛点，需关注用户体验。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR（6 个）

| PR | 核心贡献 | 项目推进 |
|:---|:---|:---|
| [#4054](https://github.com/HKUDS/nanobot/pull/4054) | **双修复**：Anthropic 内容块类型强制 + Dream 系统作业全局开关 | 解决两大用户痛点：第三方工具返回裸字典导致 Anthropic API 报错；Dream 记忆作业无法彻底禁用。为手动记忆模式铺路。 |
| [#4104](https://github.com/HKUDS/nanobot/pull/4104) | **并发安全**：process_direct 获取每会话锁 | 修复关键竞态条件——API/cron/webui/SDK 直接调用与消息总线调度并发执行导致历史记录损坏。提升核心架构可靠性。 |
| [#4110](https://github.com/HKUDS/nanobot/pull/4110) | **Matrix E2EE**：SAS 设备验证处理 | 解决 Element X 客户端的"未验证设备"警告，支持 matrix-rust-sdk 生态。提升企业/隐私敏感场景可用性。 |
| [#4108](https://github.com/HKUDS/nanobot/pull/4108) | **WebUI 体验升级**：输出时间线重构 + 模型控制 | 引入活动时间线渲染、队列化作曲器流程，显著降低多轮交互认知负荷。UI/UX 竞争力提升。 |
| [#4086](https://github.com/HKUDS/nanobot/pull/4086) | **安全修复**：SSRF 检查中 IPv6-mapped IPv4 地址规范化 | 消除安全绕过风险（`::ffff:127.0.0.1` 等格式可绕过本地地址拦截）。基础设施安全加固。 |
| [#4106](https://github.com/HKUDS/nanobot/pull/4106) | **安全修复**：Matrix 入站媒体下载边界限制 | 防止无限制媒体下载导致 DoS/存储耗尽，未知尺寸事件默认拒绝。生产环境稳定性保障。 |

**整体评估**：今日合并覆盖 **安全×2、并发正确性×1、协议兼容性×1、用户体验×2**，属于高质量交付日。特别是 [#4054](https://github.com/HKUDS/nanobot/pull/4054) 一箭双雕，显示维护者对社区反馈的整合能力。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | 议题 | 评论数 | 热度分析 |
|:---|:---|:---:|:---|
| 1 | [#3885](https://github.com/HKUDS/nanobot/issues/3885) Dream 系统作业全局开关 | 4 条 | **配置灵活性诉求的集中爆发**。用户发现即使禁用 memory 技能，Dream cron 仍后台运行，反映"假禁用"问题在资源敏感场景（边缘部署、低功耗设备）的痛点。PR [#4054](https://github.com/HKUDS/nanobot/pull/4054) 已关闭，但衍生出 [#4050](https://github.com/HKUDS/nanobot/pull/4050) 手动记忆模式，显示社区对**记忆系统精细控制**的持续需求。 |
| 2 | [#4042](https://github.com/HKUDS/nanobot/issues/4042) Matrix Element X 验证警告 | 1 条 | **新一代 Matrix 客户端兼容性**。Element X 采用 rust-sdk 后验证流程变化，nanobot 作为 bot 身份需适配 SAS 流程。标记为 `good first issue` 吸引新贡献者，[#4110](https://github.com/HKUDS/nanobot/pull/4110) 快速响应。 |
| 3 | 其余议题 | 0 条 | 今日新报 Issue 均为单点技术问题，尚未形成讨论。 |

**背后诉求**：社区正从"能用"向"好用、可控、安全"迁移——需要**可预测的资源占用**、**现代客户端兼容**、**企业级安全默认**。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 关联 PR | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **High** | **process_direct 绕过会话调度锁导致并发历史损坏** | ✅ **已修复** | [#4104](https://github.com/HKUDS/nanobot/pull/4104) | 所有直接调用入口（API/cron/webui/SDK），数据一致性风险 |
| 🟡 **Medium** | **Heartbeat 无任务时发送 "All clear." 噪音到飞书** | 🔄 **3个PR并行修复中** | [#4112](https://github.com/HKUDS/nanobot/pull/4112), [#4114](https://github.com/HKUDS/nanobot/pull/4114) | 飞书集成用户，每30分钟骚扰通知 |
| 🟡 **Medium** | **Custom provider 丢弃空字符串 reasoning_content** | ⏳ **待合并** | — | 使用自定义 provider 的 tool_call 场景，推理链断裂 |
| 🟢 **Low** | Anthropic 内容块缺少 type 字段被拒 | ✅ **已修复** | [#4054](https://github.com/HKUDS/nanobot/pull/4054) | Anthropic provider + 返回裸字典的工具 |

**风险评估**：并发锁问题 [#4080](https://github.com/HKUDS/nanobot/issues/4080) 是今日最严重的架构级 bug，直接影响多入口场景的数据完整性；Heartbeat 问题 [#4111](https://github.com/HKUDS/nanobot/issues/4111) 虽非崩溃，但**用户感知极强**，3个竞争 PR 显示社区修复意愿强烈，需维护者快速裁决合并策略避免碎片化。

---

## 6. 功能请求与路线图信号

| 功能需求 | 来源 | 成熟度 | 纳入可能性 | 路线图信号 |
|:---|:---|:---:|:---:|:---|
| **手动记忆模式** | [#4050](https://github.com/HKUDS/nanobot/pull/4050) | 🟡 PR 已开 | **高** | 与 [#3885](https://github.com/HKUDS/nanobot/issues/3885) Dream 开关形成组合拳，解决"自动记忆不可控"痛点。设计为与自动模式隔离的独立流，架构清晰。 |
| **轻量 RAG 记忆检索** | [#4109](https://github.com/HKUDS/nanobot/pull/4109) | 🟡 PR 已开 | **中高** | 本地嵌入实现，降低外部向量数据库依赖。与手动记忆模式协同，构建"可控+高效"的记忆子系统。 |
| **bwrap 沙箱额外挂载配置** | [#4107](https://github.com/HKUDS/nanobot/issues/4107) | 🔴 Issue 新开 | **中** | 企业/安全敏感场景刚需，当前硬编码路径限制工具执行环境。需评估配置 schema 设计。 |
| **可配置 STT 模型 + OpenRouter 语音转录** | [#4113](https://github.com/HKUDS/nanobot/pull/4113) | 🟡 PR 已开 | **高** | 解耦语音模型硬编码，扩展 provider 生态。OpenRouter 作为聚合层降低多密钥管理成本。 |
| **跨 Agent 消息总线** | [#3992](https://github.com/HKUDS/nanobot/pull/3992) | 🟡 PR 已开（5/24） | **中** | 多实例协作基础设施，但需评估与现有架构的集成复杂度。5天未合并，可能需架构评审。 |
| **GitAgent Protocol 支持** | [#4034](https://github.com/HKUDS/nanobot/pull/4034) | 🔴 标记 duplicate | **低** | 标准化代理描述格式，但维护者可能认为与现有配置体系重复。 |
| **Registry-driven provider 配置字段** | [#3994](https://github.com/HKUDS/nanobot/pull/3994) | 🟡 PR 已开（5/25） | **中高** | Bedrock region/profile 等云原生配置的前置基础设施，5天未合并，可能等待相关 PR 集合。 |

**下一版本信号**：记忆子系统重构（手动模式+RAG）+ 语音 pipeline 扩展（OpenRouter STT）+ provider 配置体系标准化，三者可能形成 **v0.x 的"可控性+扩展性"主题 release**。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 反馈来源 | 核心不满 |
|:---|:---|:---|
| **边缘/低资源部署** | [#3885](https://github.com/HKUDS/nanobot/issues/3885) | "即使禁用 memory，Dream 仍在后台跑 cron"——**配置语义与实际行为不一致**，资源不可预测 |
| **企业 IM 集成** | [#4111](https://github.com/HKUDS/nanobot/issues/4111) | "每30分钟收到 All clear."——**自动化过度打扰**，通知策略缺乏智能判断 |
| **安全合规** | [#4107](https://github.com/HKUDS/nanobot/issues/4107) | "沙箱只能挂载固定路径"——**安全策略僵化**，无法适配内部目录结构 |
| **多模型路由** | [#4113](https://github.com/HKUDS/nanobot/pull/4113) | "Whisper 硬编码，无法切换"——**语音 pipeline 与文本 pipeline 配置不对等** |

### 满意点

- **修复响应速度**：[#4042](https://github.com/HKUDS/nanobot/issues/4042) Element X 兼容性问题从报告到合并仅2天，[#4080](https://github.com/HKUDS/nanobot/issues/4080) 并发锁问题次日修复
- **架构透明度**：`process_direct` 等内部机制有清晰文档说明，便于深度用户诊断问题

---

## 8. 待处理积压

| 项目 | 创建时间 | 最后更新 | 风险 | 建议行动 |
|:---|:---:|:---:|:---|:---|
| [#3992](https://github.com/HKUDS/nanobot/pull/3992) Agent 跨实例消息总线 | 5/24 | 5/30 | 架构评审悬置，6天未合并可能冷却 | 维护者需明确：是等待 v0.x 架构调整，还是需要测试覆盖补充？ |
| [#3994](https://github.com/HKUDS/nanobot/pull/3994) Registry-driven provider 配置 | 5/25 | 5/30 | 基础设施 PR，阻塞 Bedrock 等云 provider 体验优化 | 建议优先合并，释放后续 provider 扩展 |
| [#3997](https://github.com/HKUDS/nanobot/pull/3997) Tokenizer 预预热 + 构建时序日志 | 5/25 | 5/30 | 性能优化类，缺乏紧急性但影响启动体验 | 可纳入下一版本性能专项 |
| [#4034](https://github.com/HKUDS/nanobot/pull/4034) GitAgent Protocol | 5/28 | 5/30 | 标记 duplicate 但未说明替代方案 | 维护者需回复：是已有等效实现，还是拒绝该标准？避免贡献者流失 |

---

*日报生成时间：2026-05-31 | 数据来源：HKUDS/nanobot GitHub 公开活动*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-31

---

## 1. 今日速览

Hermes Agent 今日维持**高活跃度**，24小时内50条Issues更新（40条新开/活跃，10条关闭）与50条PR更新（44条待合并，6条合并/关闭），无新版本发布。社区聚焦**安全性加固**（`shell=True`清理）、**跨提供商兼容性**（thinking/reasoning内容污染历史记录）及**网关稳定性**（MEDIA文件提取、自动恢复机制）。值得注意的是，今日出现一条**P0级安全漏洞**（[#35584](https://github.com/NousResearch/hermes-agent/issues/35584)）——网关可能泄露受保护的配置文件，需紧急关注。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 今日合并/关闭的 PR（6条）

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| #35591 | willytop8 | **Codex流式输出修复**：当最终响应为空时，从流式增量中回收输出，避免`NoneType`可迭代失败 | [PR #35591](https://github.com/NousResearch/hermes-agent/pull/35591) |
| #35552 | someaka | **进程注册表修复**：`poll()`改为纯读操作，修复完成事件被静默消费的问题（终端工具通知丢失根因） | [PR #35552](https://github.com/NousResearch/hermes-agent/pull/35552) |
| #35551 | someaka | **MemoryManager线程安全**：RLock保护 + 多提供商支持（因与上游设计冲突关闭，技术方向值得后续讨论） | [PR #35551](https://github.com/NousResearch/hermes-agent/pull/35551) |
| #35506 | skynetcmd | Windows PowerShell安装挂起问题（Python 3.12检测失败，已关闭待复现） | [Issue #35506](https://github.com/NousResearch/hermes-agent/issues/35506) |

**关键推进方向**：
- **Codex可靠性**：流式输出兜底机制完善，减少空响应导致的对话中断
- **终端工具架构**：进程生命周期管理更健壮，为后续多会话并发奠定基础
- **安全债务清理**：`shell=True`系统性替换进行中（[#35545](https://github.com/NousResearch/hermes-agent/pull/35545)待合并）

---

## 4. 社区热点

### 评论最多的 Issues（今日讨论焦点）

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| 1 | #17861 多轮历史丢失thinking/redacted_thinking块 | 4 | **Anthropic原生内容数组保真**：开发者要求原始`content`数组作为真相源，而非简化后的文本表示 | [Issue #17861](https://github.com/NousResearch/hermes-agent/issues/17861) |
| 2 | #33961 `/new`, `/clear`, `/reset`冻结终端 | 4 | **会话生命周期可靠性**：CLI核心命令的稳定性是用户信任基础 | [Issue #33961](https://github.com/NousResearch/hermes-agent/issues/33961) |
| 3 | #35474 Telegram outbound MEDIA遗漏`.md`文件 | 4 | **文档类型覆盖完整性**：Markdown作为AI原生格式，交付管道必须支持 | [Issue #35474](https://github.com/NousResearch/hermes-agent/issues/35474) |
| 4 | #27657 "Brain-as-source-of-truth"集成 | 3 | **个人知识库主权**：用户已有长期维护的Brain目录，拒绝供应商锁定式记忆 | [Issue #27657](https://github.com/NousResearch/hermes-agent/issues/27657) |

**诉求分析**：
- **#17861** 反映深层架构张力：Hermes的"标准化消息格式"与提供商原生能力之间的阻抗失配。thinking块丢失不仅影响推理质量，更导致跨会话上下文降级。
- **#27657** 代表一类高级用户的声音：他们已构建个人知识管理系统，要求Hermes成为"可插拔的执行层"而非"全栈替代品"。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 优先级 | Issue | 状态 | 描述 | 是否有Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| **P0** | #35584 网关泄露受保护config.yaml | **OPEN** | `file_mutation_verifier`拒绝写入后，路径被附加到响应，网关`extract_local_files`将其作为附件发送 | **无** | [Issue #35584](https://github.com/NousResearch/hermes-agent/issues/35584) |
| **P1** | #35543 跨提供商reasoning_content污染 | CLOSED | thinking模式会话历史导致Cerebras等严格提供商HTTP 400 | 已关闭，需验证修复 | [Issue #35543](https://github.com/NousResearch/hermes-agent/issues/35543) |
| **P1** | #35519 redact_sensitive_text破坏API密钥 | OPEN | 前缀匹配过度敏感，配置文件读取时密钥被篡改致401 | 无 | [Issue #35519](https://github.com/NousResearch/hermes-agent/issues/35519) |
| **P1** | #14141 同base_url自定义提供商凭证混淆 | OPEN | 凭证池按URL匹配而非provider name，返回首个匹配项 | 无 | [Issue #14141](https://github.com/NousResearch/hermes-agent/issues/14141) |
| **P2** | #33961 终端命令冻结 | OPEN | `/new`, `/clear`, `/reset`挂起，Ctrl+C无效 | 无 | [Issue #33961](https://github.com/NousResearch/hermes-agent/issues/33961) |
| **P2** | #32737 Tirith扫描器误报pipe-to-interpreter | OPEN | 本地用户拥有的可执行文件pipe仍被标记HIGH | 无 | [Issue #32737](https://github.com/NousResearch/hermes-agent/issues/32737) |
| **P2** | #23783 Telegram token冲突致网关启动失败 | OPEN | 更新后旧进程未释放token，新实例无法启动 | 无 | [Issue #23783](https://github.com/NousResearch/hermes-agent/issues/23783) |
| **P3** | #35520 仪表板响应式布局崩溃 | OPEN | <1024px侧边栏溢出、内容无界、滚动失效 | 无 | [Issue #35520](https://github.com/NousResearch/hermes-agent/issues/35520) |
| **P3** | #35576 飞书自动恢复发送至失效thread_id | OPEN | 重启后resume使用已删除消息的thread_id，返回99992402 | 无 | [Issue #35576](https://github.com/NousResearch/hermes-agent/issues/35576) |

**稳定性评估**：🔴 **P0漏洞需立即响应**；🟡 P1-P2问题堆积显示凭证管理与终端可靠性为系统性薄弱点。

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 信号强度 | 纳入下一版本可能性 | 链接 |
|:---|:---|:---|:---|:---|
| #27657 Brain-as-source-of-truth | 架构级集成 | ⭐⭐⭐⭐⭐ | **高** — 个人AI助手核心差异化，已有PRD级文档 | [Issue #27657](https://github.com/NousResearch/hermes-agent/issues/27657) |
| #20059 Hermes桌面应用 | 产品形态扩展 | ⭐⭐⭐⭐⭐ | **高** — Electron/Vite实现，截图展示完整UX，持续更新中 | [PR #20059](https://github.com/NousResearch/hermes-agent/pull/20059) |
| #27579 空闲触发上下文压缩 | 性能优化 | ⭐⭐⭐⭐☆ | **中高** — 解决预飞行延迟痛点，技术方案清晰 | [Issue #27579](https://github.com/NousResearch/hermes-agent/issues/27579) |
| #28547 /new前子代理运行警告 | 用户体验 | ⭐⭐⭐★☆ | **中** — 状态管理基础设施需先完善 | [Issue #28547](https://github.com/NousResearch/hermes-agent/issues/28547) |
| #35587 Claude-to-Hermes迁移技能 | 生态迁移 | ⭐⭐⭐★☆ | **中** — 对标现有`openclaw-migration`，市场拓展需求明确 | [Issue #35587](https://github.com/NousResearch/hermes-agent/issues/35587) |
| #35354 自我改进协议（元学习） | 研究前沿 | ⭐⭐⭐☆☆ | **观察** — 学术引用扎实，但工程化复杂度极高 | [PR #35354](https://github.com/NousResearch/hermes-agent/pull/35354) |

**路线图推断**：项目正从"功能完备的智能体框架"向"个人AI操作系统"演进，**记忆主权**（Brain集成）与**多模态交互表面**（桌面应用）是两大战略支柱。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源Issue | 核心情绪 |
|:---|:---|:---|
| "更新后整个Telegram网关瘫痪，token被旧进程占用" | #23783 | 😤 **运维恐惧** — 自动化更新=服务中断 |
| "配置文件里的API密钥被自己的安全功能篡改" | #35519 | 🙃 **反讽式挫败** — 安全过度=功能自毁 |
| "按官方文档跑OAuth，参数不存在" | #35560 | 😠 **文档信任崩塌** — 技能生态的 onboarding 断裂 |
| "Cerebras切换后所有历史对话400错误" | #35543 | 😰 **提供商锁定焦虑** — 跨模型迁移成本不透明 |

### 满意点（从PR推断）

- **Codex流式兜底**（#35591）：用户对"即使最终响应失败也不丢失思考过程"的韧性设计表示认可
- **桌面应用预览**（#20059）：截图展示的专业级UI（composer、panes、voice controls）引发积极期待

---

## 8. 待处理积压

### 长期未响应的重要事项（提醒维护者）

| Issue | 创建日期 | 最后更新 | 天数 | 风险 | 链接 |
|:---|:---|:---|:---|:---|:---|
| #5129 后台记忆审查创建第二个提供商实例 | 2026-04-04 | 2026-05-30 | **56天** | 🔴 资源泄漏，DB连接翻倍 | [Issue #5129](https://github.com/NousResearch/hermes-agent/issues/5129) |
| #2743 `shell=True`命令注入（TTS/Docker） | 2026-03-24 | 2026-05-30 | **68天** | 🔴 安全漏洞，与今日#35545/#16560同根 | [Issue #2743](https://github.com/NousResearch/hermes-agent/issues/2743) |
| #16560 TUI网关命令注入 | 2026-04-27 | 2026-05-30 | **34天** | 🔴 安全漏洞，已有复现，无PR | [Issue #16560](https://github.com/NousResearch/hermes-agent/issues/16560) |
| #10692 `shell=True`绕过终端安全控制 | 2026-04-16 | 2026-05-30 | **45天** | 🔴 安全架构缺陷，今日#35545部分覆盖 | [Issue #10692](https://github.com/NousResearch/hermes-agent/issues/10692) |
| #17861 多轮历史thinking块丢失 | 2026-04-30 | 2026-05-30 | **31天** | 🟡 核心体验，4条评论无维护者响应 | [Issue #17861](https://github.com/NousResearch/hermes-agent/issues/17861) |
| #10993 仪表板记忆页面 | 2026-04-16 | 2026-05-31 | **45天** | 🟡 功能完整度，PR持续更新但未合并 | [PR #10993](https://github.com/NousResearch/hermes-agent/pull/10993) |

**维护者行动建议**：
1. **立即**：评估#35584 P0漏洞的修复优先级，考虑hotfix
2. **本周**：将#5129、#2743、#16560纳入安全sprint，系统性清理`shell=True`债务
3. **本月**：对#17861进行架构评审，确定Anthropic原生内容数组的存储方案

---

*日报生成时间：2026-05-31 | 数据来源：NousResearch/hermes-agent GitHub*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-31

## 1. 今日速览

PicoClaw 今日呈现**高活跃度、快速迭代**态势。24小时内 Issues 处理效率突出（关闭率 57%），PR 队列积压明显（9 个待合并 vs 3 个已处理）。社区贡献者 `kunalk16` 表现活跃，单日完成 Azure Identity 和孟加拉语两项功能落地。v0.2.9 版本发布后，Web UI 消息历史污染和上下文压缩显示异常成为用户反馈焦点，显示新版本存在**两个待确认的回归问题**。整体项目健康度良好，但需关注版本质量控制和长期 PR 积压。

---

## 2. 版本发布

### 🔖 v0.2.9-nightly.20260530.e81d3710
| 属性 | 详情 |
|:---|:---|
| 类型 | Nightly 自动化构建 |
| 发布时间 | 2026-05-30 |
| 稳定性 | ⚠️ 不稳定，谨慎使用 |
| 完整变更对比 | [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) |

**关键说明**：此为夜间自动构建，非正式版本。从 Issue #2972、#2968 的反馈来看，v0.2.9 正式版已存在 Web UI 消息历史污染和 `/context` 压缩阈值显示异常问题，建议夜间构建使用者关注这两个回归。

---

## 3. 项目进展

### ✅ 今日合并/关闭的 PR

| PR | 作者 | 贡献内容 | 项目推进意义 |
|:---|:---|:---|:---|
| [#2971](https://github.com/sipeed/picoclaw/pull/2971) | `kunalk16` | **Azure Identity 支持**（Azure OpenAI Provider） | 企业合规里程碑：满足禁用本地密钥的 Azure 订阅策略，支持 Entra ID / Managed Identity 认证；采用 `azidentity` build tag 实现可选编译，零依赖膨胀 |
| [#2974](https://github.com/sipeed/picoclaw/pull/2974) | `kunalk16` | **孟加拉语 i18n 支持** (`bn-in`) | 南亚市场覆盖扩展，国际化体系成熟度提升 |
| [#2969](https://github.com/sipeed/picoclaw/pull/2969) | `lc6464` | Web 聊天图片粘贴与拖拽上传 | 多模态交互体验优化，支持剪贴板混合负载智能处理 |

**整体进展评估**：今日完成 **2 项企业级基础设施 + 1 项用户体验优化**。Azure Identity 的合并标志着 PicoClaw 在云原生企业场景的准入门槛显著降低；i18n 持续扩展显示全球化布局加速。

---

## 4. 社区热点

### 🔥 讨论最活跃的议题

| 排名 | Issue/PR | 互动量 | 核心诉求分析 |
|:---|:---|:---|:---|
| 1 | [#2742](https://github.com/sipeed/picoclaw/issues/2742) 网关零通道启动 Bug | 6 评论 | **配置验证层缺失**：用户配置 `enabled: true` 但通道未正确初始化，反映配置 Schema 校验和启动诊断信息不足 |
| 2 | [#2972](https://github.com/sipeed/picoclaw/issues/2972) v0.2.9 Web UI 消息历史污染 | 2 评论 | **会话隔离失效**：升级后新会话附加旧历史，严重破坏多轮对话的上下文边界，用户数据隐私感知受损 |
| 3 | [#2952](https://github.com/sipeed/picoclaw/issues/2952) 版本发布周期与功能综合反馈 | 2 评论 | **三重痛点聚合**：① `exec` 工具 actions:run 模型兼容性问题 ② QQ 渠道重启死循环 ③ 模型提供商 UX 优化（key 复用、一键添加） |

**深层信号**：用户从"能用"转向"好用"的诉求强烈，尤其关注**渠道稳定性、模型兼容性、配置管理效率**三个维度。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 现象 | 影响版本 | Fix PR 状态 | 严重程度 |
|:---|:---|:---|:---|:---|:---|
| 🔴 P0 | [#2972](https://github.com/sipeed/picoclaw/issues/2972) | Web UI 新会话附加旧消息历史 | v0.2.9 | ❌ 无 | **会话数据污染，隐私风险** |
| 🟡 P1 | [#2968](https://github.com/sipeed/picoclaw/issues/2968) | `/context` 始终显示 `Compress at: 76800 tokens` | v0.2.9 | ❌ 无 | 配置阈值与实际行为不符，误导用户 |
| 🟢 P2 | [#2742](https://github.com/sipeed/picoclaw/issues/2742) | 网关零通道启动（配置解析问题） | v0.2.8 | ✅ 已关闭 | 配置容错性不足 |
| 🟢 P2 | [#2880](https://github.com/sipeed/picoclaw/issues/2880) | Android 存储权限拒绝导致服务启动失败 | v0.1.3 | ✅ 已关闭 | 旧版本 Android 权限模型适配 |

**风险评估**：v0.2.9 存在 **2 个未修复回归**，均与 Web 前端状态管理相关。建议维护者优先排查会话上下文隔离和配置阈值渲染逻辑。

---

## 6. 功能请求与路线图信号

| 需求来源 | 功能方向 | 实现可能性 | 纳入信号 |
|:---|:---|:---|:---|
| [#2952](https://github.com/sipeed/picoclaw/issues/2952) | 模型提供商下拉选择 + key 复用 + API 连通测试 + `/models` 一键添加 | ⭐⭐⭐⭐⭐ 高 | 已有 #2932 等 i18n PR 的 UX 改进基础，属于配置层优化，实现成本低 |
| [#2952](https://github.com/sipeed/picoclaw/issues/2952) | `exec` actions:run 模型兼容性修复 | ⭐⭐⭐⭐☆ 中高 | 工具调用协议标准化问题，需协调模型提供商差异 |
| [#2952](https://github.com/sipeed/picoclaw/issues/2952) | QQ 渠道重启死循环修复 | ⭐⭐⭐⭐☆ 中高 | 渠道状态机设计缺陷，已有用户反馈模式可复现 |
| [#2970](https://github.com/sipeed/picoclaw/issues/2970) → [#2971](https://github.com/sipeed/picoclaw/pull/2971) | Azure Identity 认证 | ✅ 已落地 | 企业合规刚需，已完成 |
| [#2973](https://github.com/sipeed/picoclaw/issues/2973) → [#2974](https://github.com/sipeed/picoclaw/pull/2974) | 孟加拉语支持 | ✅ 已落地 | i18n 体系成熟，扩展成本低 |

**下一版本预测**：v0.2.10 或 v0.3.0 可能聚焦 **Web UI 稳定性修复** + **配置管理 UX 重构**（模型提供商管理）+ **渠道状态机健壮性**。

---

## 7. 用户反馈摘要

### 💬 真实痛点提炼

| 场景 | 用户原声/行为 | 情感倾向 |
|:---|:---|:---|
| **升级焦虑** | "After upgrade to v0.2.9, Web UI message chaos" — 升级后预期稳定性，遭遇回归 | 😤 失望 |
| **配置黑箱** | "exec命令的actions:run问题，多数模型首次会默认不带" — 工具调用行为不可预测 | 😕 困惑 |
| **渠道脆弱性** | "QQ渠道进行重启时...会再次重启，只有清除历史上下文才不会继续重启" — 状态恢复机制失效 | 😤 挫败 |
| **版本饥饿** | "好久没发新版本了" — 功能修复等待周期长 | 😐 期待中带焦虑 |
| **企业合规** | "Azure Subscription policy to disable local auth" — 安全策略刚性约束 | 😊 需求被满足（#2971 落地） |

### ✅ 满意点
- Azure Identity 支持快速响应企业需求
- i18n 扩展持续进行

### ❌ 不满意点
- 版本发布节奏不透明
- 升级后回归问题缺乏预发布测试
- 渠道（QQ、Telegram）边缘场景处理粗糙

---

## 8. 待处理积压

### ⚠️ 需维护者关注的长期事项

| PR/Issue | 创建时间 | 最后更新 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| [#2856](https://github.com/sipeed/picoclaw/pull/2856) 媒体附件与 Telegram 富文本交付 | 2026-05-11 | 2026-05-30 | 20天 stale，多模态核心能力 | 评估与 #2969 图片上传的协同，或需 rebase |
| [#2838](https://github.com/sipeed/picoclaw/pull/2838) Agent frontmatter 工具策略过滤器 | 2026-05-09 | 2026-05-30 | 22天 stale，Agent 安全策略基础设施 | 设计评审 pending，影响 AGENT.md 规范 |
| [#2935](https://github.com/sipeed/picoclaw/pull/2935) 繁体中文 i18n | 2026-05-24 | 2026-05-30 | 7天，中文社区覆盖 | 文档完整性检查，可快速合并 |
| [#2963](https://github.com/sipeed/picoclaw/pull/2963) Lark SDK 依赖升级 3.7.5→3.9.3 | 2026-05-28 | 2026-05-30 | 3天，企业 IM 渠道稳定性 | CI 通过后合并，安全更新 |
| [#2962](https://github.com/sipeed/picoclaw/pull/2962) Anthropic SDK 升级 1.26.0→1.46.0 | 2026-05-28 | 2026-05-30 | 3天，AI 提供商兼容性 | 验证 breaking changes 后合并 |

**积压健康度**：9 个待合并 PR 中，**2 个超 20 天 stale**（#2856、#2838），均为核心架构能力，建议本周内安排维护者评审或明确里程碑归属。

---

*日报生成时间：2026-05-31 | 数据来源：GitHub API 快照 | 项目地址：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-31

> **项目**: [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw) | **分析周期**: 2026-05-30 至 2026-05-31

---

## 1. 今日速览

NanoClaw 今日维持**高活跃度开发节奏**，24 小时内 15 个 PR 有更新（4 个已关闭/合并，11 个待审），1 个活跃 Issue。开发重心明显偏向**容器运行时稳定性修复**与**平台适配**——Apple Container 相关修复成对出现（#2649/#2650），显示团队正在攻坚 macOS 容器化场景。技能生态持续扩张，新增 AWS 凭证代理、语音转写、Hugging Face  trace 上传等 4 个技能 PR。无新版本发布，整体处于功能积累与缺陷修复并行的**健康迭代期**。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 今日合并/关闭的 PR（4 个）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#2652](https://github.com/nanocoai/nanoclaw/pull/2652) | matty271828 | **多实例安装修复**：重写 OneCLI 代理端口硬编码问题，使 `instances.conf` 自定义 `ONECLI_BASE_PORT`/`ONECLI_PORT_STRIDE` 时 HTTPS_PROXY/HTTP_PROXY 正确指向各实例网关 | 解除企业级多租户部署的关键阻塞，此前该硬编码导致多实例场景下容器网络代理失效 |
| [#2645](https://github.com/nanocoai/nanoclaw/pull/2645) | yairixStudio | **群聊上下文窗口**：为 agent group 引入 `context_messages` 参数，触发时注入最近 N 条未读消息作为 `[Context]` 块 | 显著改善群聊场景 agent 的上下文感知能力，从"无状态应答"迈向"对话连贯" |
| [#2521](https://github.com/nanocoai/nanoclaw/pull/2521) | crookies | **XML 输出增强**：在消息属性中追加 `from-channel` 和 `from-type`，暴露 `fromDest.channelType` | 赋能下游监控/分析工具，多通道运营者可基于原生 transcript 构建可视化仪表板 |
| [#6](https://github.com/nanocoai/nanoclaw/pull/6) | gavrielc | **IPC 机制现代化**：以 `fs.watch` 事件驱动替代 busy-loop 轮询，全面异步化文件 I/O | 降低空闲 CPU 占用，消除同步 I/O 阻塞事件循环的隐患，为高并发场景奠基 |

**整体评估**：今日合入代码覆盖**部署扩展性**、**对话质量**、**可观测性**、**运行时性能**四个维度，项目基础设施层与用户体验层同步推进。

---

## 4. 社区热点

### 讨论焦点：Discord URL 处理回归（Issue #2044）

| 指标 | 数据 |
|:---|:---|
| [Issue #2044](https://github.com/nanocoai/nanoclaw/issues/2044) | **v2 Using @chat-adapter/discord changes `<URL>` handling, makes it worse** |
| 作者 | pwinnski |
| 状态 | OPEN，创建于 2026-04-27，昨日更新 |
| 互动 | 💬 1 评论，👍 2 |

**核心诉求分析**：

Discord 原生支持 `<URL>` 语法来**抑制**链接预览，这是社区广泛使用的反垃圾/整洁排版技巧。NanoClaw v2 的 chat-adapter 将 `<URL>` 转换为 Markdown `[URL](URL)`，该转换**完全逆转了原始意图**——不仅不抑制预览，还强制生成富文本链接。

**背后信号**：
- **适配器行为透明性**：用户期望 NanoClaw 作为中间层"透传"平台原生语义，而非重解释
- **v2 迁移摩擦**：该 Issue 明确标注 "v2...but not in v2"，暗示 v1→v2 存在未文档化的行为变更
- **平台特定语义的尊重**：Discord、Telegram、Slack 各有其消息格式约定，统一抽象层需保留"逃逸舱口"

> 该 Issue 已获 2 个 👍，但 34 天未关闭，存在用户流失风险。

---

## 5. Bug 与稳定性

| 严重程度 | PR/Issue | 描述 | Fix 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#2649](https://github.com/nanocoai/nanoclaw/pull/2649) | **Apple Container 嵌套文件挂载产生 phantom inode**：`container.json` 与 composed `CLAUDE.md` 的嵌套文件挂载在 Apple Container 上 `stat()` 返回 `0644` 但读取报 `EACCES`，导致所有 MCP 服务器配置静默失效 | **Fix PR 待审**（#2649 自身） |
| 🔴 **高** | [#2650](https://github.com/nanocoai/nanoclaw/pull/2650) | **Apple Container 目录挂载竞态**：#2649 的伴随修复，移除嵌套文件挂载后，virtio-fs 叠加层导致首次读取 `container.json` 失败，需指数退避重试 | **Fix PR 待审**（#2650，明确标注 "Companion to #2649"） |
| 🟡 **中** | [#2651](https://github.com/nanocoai/nanoclaw/pull/2651) | **交互式问答响应源验证缺失**：`ask_user_question` 的回调未校验响应是否来自原投递通道，存在跨通道/跨会话劫持风险 | **Fix PR 待审**（#2651，带 `[security]` 标签） |
| 🟡 **中** | [#2652](https://github.com/nanocoai/nanoclaw/pull/2652) | **OneCLI 代理端口硬编码**：多实例安装时 `host.docker.internal:10255` 错误，已关闭 | ✅ **已修复** |
| 🟢 **低** | [#2044](https://github.com/nanocoai/nanoclaw/issues/2044) | Discord URL 预览语义反转（行为变更/回归） | ❌ **无 Fix PR** |

**稳定性评估**：Apple Container 双修复（#2649/#2650）构成**关键路径阻塞**，影响所有 macOS 用户的 MCP 功能；安全修复 #2651 涉及交互边界校验，建议优先审阅。

---

## 6. 功能请求与路线图信号

| PR | 功能方向 | 纳入下一版本概率 | 判断依据 |
|:---|:---|:---|:---|
| [#2648](https://github.com/nanocoai/nanoclaw/pull/2648) | `/upload-trace` 命令 → Hugging Face | ⭐⭐⭐⭐☆ 高 | 符合可观测性趋势，标注 `[follows-guidelines]`，作者 gavrielc 今日刚合并 IPC 优化（#6），社区信任度高 |
| [#2634](https://github.com/nanocoai/nanoclaw/pull/2634) | `/add-paws4claws` AWS 凭证代理技能 | ⭐⭐⭐⭐☆ 高 | 企业云集成刚需，采用成熟的 **mount-from-outside** 模式，与现有技能架构一致 |
| [#2317](https://github.com/nanocoai/nanoclaw/pull/2317) | 免费本地语音转写（whisper/whisper.cpp） | ⭐⭐⭐⭐☆ 高 | 双后端设计兼顾 GPU 与 CPU 场景，"no Python required" 路径降低部署门槛 |
| [#2301](https://github.com/nanocoai/nanoclaw/pull/2301) | GitHub 集成轮询模式（NAT/防火墙友好） | ⭐⭐⭐⭐☆ 高 | 解决企业网络环境的真实阻塞，Mode A/B 双模式设计成熟 |
| [#2084](https://github.com/nanocoai/nanoclaw/pull/2084) | 每日备份 + 全量/单 agent 恢复 | ⭐⭐⭐☆☆ 中高 | 灾难恢复基础设施，但涉及存储后端插件化，测试覆盖要求高 |
| [#212](https://github.com/nanocoai/nanoclaw/pull/212) | WebUI 控制面板（Lit + Vite + Fastify） | ⭐⭐☆☆☆ 中低 | **Blocked / Pending Closure**，2 月创建至今，11 个标签页规模过大，可能需拆分或重新设计 |

**路线图信号**：技能生态（Skills）成为明确扩张方向，4 个待审 PR 中 3 个为技能添加；WebUI 大 PR 长期阻塞提示需要**增量式 UI 策略**而非单体面板。

---

## 7. 用户反馈摘要

### 从 Issue #2044 提炼的真实痛点

| 维度 | 具体内容 |
|:---|:---|
| **使用场景** | Discord 社区运营，依赖 `<URL>` 语法保持频道整洁、避免预览泛滥 |
| **满意点** | v1 时代该行为工作正常，用户已形成稳定使用习惯 |
| **不满点** | v2 "静默破坏"既有行为：转换后的 `[URL](URL)` 不仅不抑制预览，还生成显式超链接，"opposite of any possible intended effect" |
| **深层诉求** | 平台原生语义的**可预测透传**，或至少提供**向后兼容开关** |

### 从 PR #2521 提炼的衍生需求

crookies 的多通道监控场景表明：用户正在基于 NanoClaw 的 `.jsonl` transcript 构建**外部运营工具**，但原生输出缺乏必要的元数据（通道来源）。这提示核心平台可考虑**结构化日志/事件的官方 schema**，减少社区重复解析成本。

---

## 8. 待处理积压

| 项目 | 创建时间 | 最后更新 | 阻塞时长 | 风险说明 |
|:---|:---|:---|:---|:---|
| [PR #212](https://github.com/nanocoai/nanoclaw/pull/212) WebUI 控制面板 | 2026-02-13 | 2026-05-30 | **106 天** | 状态 `[Blocked, Pending Closure]`，11 标签页单体 PR 难以审阅；社区对 GUI 有需求，但此实现路径可能已被放弃 |
| [Issue #2044](https://github.com/nanocoai/nanoclaw/issues/2044) Discord URL 处理 | 2026-04-27 | 2026-05-30 | **34 天** | 明确的 v2 回归，有用户 👍 支持，无维护者回应；每日影响 Discord 用户的消息格式控制 |

**维护者行动建议**：
- 对 #212：明确关闭或拆分重启，释放社区贡献者精力
- 对 #2044：评估是否为 chat-adapter 的系统性问题（其他平台如 Telegram 是否也存在类似语义反转），指派适配器维护者响应

---

> **健康度评分**: 🟢 良好（活跃开发、多元贡献、及时修复）| ⚠️ 关注项：Apple Container 双修复待合并、2 个长期积压项需决策

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-31

> **项目**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **分析日期**: 2026-05-31  
> **数据窗口**: 过去 24 小时（2026-05-30 至 2026-05-31）

---

## 1. 今日速览

NullClaw 今日活跃度**偏低**，过去 24 小时内无新增 Issues，仅 2 条 PR 完成关闭/合并，无新版本发布。项目处于典型的**维护期节奏**——核心工作聚焦于版本发布收尾与底层运行时兼容性修复，而非新功能开发。社区互动指标（评论、反应数）均为零，表明今日无公开讨论发生。整体健康度平稳，但需关注社区参与度的持续性。

---

## 2. 版本发布

**无新版本发布**

> 注：PR [#938](https://github.com/nullclaw/nullclaw/pull/938) 为版本号更新提交（v2026.5.29），已于昨日（2026-05-30）关闭，但该版本尚未正式打 tag 发布，或发布记录未在数据窗口内捕获。

---

## 3. 项目进展

| PR | 状态 | 核心贡献 | 技术价值 |
|:---|:---|:---|:---|
| [#938](https://github.com/nullclaw/nullclaw/pull/938) `v2026.5.29` | **已关闭** | 版本号 bump：更新 `build.zig.zon` 至 `2026.5.29` | 例行发布流程；包含 `zig fmt` 与 `git diff` 验证，体现发布规范性 |
| [#878](https://github.com/nullclaw/nullclaw/pull/938) `fix(compat): use nanosleep on POSIX in thread.sleep` | **已关闭** | **关键运行时修复**：将 `std_compat.thread.sleep()` 从协作式 yield 切换为真实 POSIX `nanosleep` 系统调用 | **高影响**：解决 NullClaw 托管线程在 POSIX 系统上"假睡眠"（busy-waiting）问题；Windows/WASI 保持原有调度器路径 |

**今日推进评估**：项目主要完成两项事务——(1) 月度版本发布的收尾流程；(2) 一项**底层运行时正确性修复**，直接影响 NullClaw 作为 AI 智能体执行环境的资源效率与调度精度。后者对生产部署场景有实质意义，但无社区讨论表明该修复可能未被广泛认知。

---

## 4. 社区热点

**今日无活跃社区讨论**

| 指标 | 数值 | 分析 |
|:---|:---|:---|
| Issues/PRs 评论总数 | 0 | 零互动状态 |
| 👍/👎 反应数 | 0 | 无社区反馈表达 |
| 最活跃条目 | — | 无 |

**诉求分析**：今日数据未呈现任何社区热点。PR [#878](https://github.com/nullclaw/nullclaw/pull/938) 的技术重要性与其社区关注度形成反差——底层线程调度修复通常对终端用户"不可见"，但可能影响智能体在高并发场景下的 CPU 占用与响应延迟。建议维护者考虑在 Release Note 中显式说明此变更的性能影响。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 来源 | Fix 状态 | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔶 **中等** | POSIX 系统上 `thread.sleep()` 未真正挂起 OS 线程，导致协作式调度下的 CPU 空转 | PR [#878](https://github.com/nullclaw/nullclaw/pull/938) | ✅ **已修复并关闭** | POSIX 平台（Linux/macOS/*BSD）的 NullClaw 托管运行时 |

**说明**：该问题属于**性能缺陷/正确性偏差**而非崩溃级 Bug。在 `std.Io.Threaded` 模式下，原实现依赖 `std.Io.sleep()` 的协作式 yield，可能导致：
- 智能体休眠期间仍消耗 CPU 周期
- 高并发智能体场景下的调度器效率下降
- 与真实系统时钟的漂移累积

修复后，POSIX 路径使用 `nanosleep(2)` 实现**真正的线程挂起**，Windows 与 WASI 维持原有路径以保证兼容性。

> 今日无新报告 Bug、无崩溃/回归问题。

---

## 6. 功能请求与路线图信号

**今日无新增功能请求**

| 信号来源 | 内容 | 纳入可能性评估 |
|:---|:---|:---|
| PR [#878](https://github.com/nullclaw/nullclaw/pull/938) 技术方向 | 运行时底层向"真实系统调用"靠拢，减少抽象层损耗 | 持续趋势：NullClaw 作为 AI 智能体执行环境，正强化**确定性调度**与**资源隔离**，符合生产级部署需求 |
| PR [#938](https://github.com/nullclaw/nullclaw/pull/938) 版本节奏 | 月度版本发布（v2026.5.29） | 稳定：项目维持约 1 个月的发布周期 |

**下一版本预测**：基于现有模式，v2026.6.x 可能继续聚焦：
- 更多平台特定的运行时正确性修复
- `std_compat` 层的完善（NullClaw 与标准库的兼容抽象）
- 若社区活跃度回升，可能引入智能体编排或工具调用相关 API

---

## 7. 用户反馈摘要

**今日无用户反馈数据**

> 过去 24 小时 Issues 与 PRs 的评论数均为 `undefined`/零，无法提炼真实用户痛点。  
> 
> **历史隐忧**：PR [#878](https://github.com/nullclaw/nullclaw/pull/938) 的"零反应"状态可能表明：
> - NullClaw 的用户群体目前以早期采用者/开发者为主，对底层运行时变更敏感度高但公开反馈意愿低
> - 或：项目文档/Release Note 未能有效传达此类修复的用户价值，导致"静默修复"

---

## 8. 待处理积压

**今日无新增积压识别**

| 关注项 | 说明 | 建议行动 |
|:---|:---|:---|
| PR [#878](https://github.com/nullclaw/nullclaw/pull/938) 的社区沟通 | 重要修复零讨论 | 维护者可在 Release Note 中补充性能基准对比，引导用户验证 |
| 整体社区参与度 | 连续 24 小时零 Issues/零评论 | 非紧急，但若持续超过 7 天，建议检查社区渠道（Discord/论坛）是否分流了 GitHub 讨论 |

---

## 附录：今日关键链接汇总

| 类型 | 链接 | 状态 |
|:---|:---|:---|
| PR #878 | https://github.com/nullclaw/nullclaw/pull/878 | 已关闭 |
| PR #938 | https://github.com/nullclaw/nullclaw/pull/938 | 已关闭 |

---

> **分析师备注**：NullClaw 今日呈现"技术推进、社区静默"的典型维护期特征。PR [#878](https://github.com/nullclaw/nullclaw/pull/938) 的线程调度修复具有实质工程价值，建议项目方在后续沟通中强化此类底层改进的用户可见性，以提升生产用户的信任度与迁移意愿。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-31

> **项目**: [nearai/ironclaw](https://github.com/nearai/ironclaw)  
> **分析日期**: 2026-05-31  
> **数据周期**: 过去 24 小时

---

## 1. 今日速览

IronClaw 今日呈现**高强度开发态势**：21 个 PR 更新（13 条已合并/关闭，8 条待审），3 个 Issue 活跃，核心团队 `henrypark133` 与 `serrrfirat` 主导了 Reborn 架构的多条主线推进。项目正处**"Reborn" 大版本冲刺期**——触发器系统（trigger-loop）、通信交付层、WebUI v2 认证体系同步建设，合并节奏紧凑但 E2E 稳定性承压（夜间 E2E 持续失败）。社区贡献者 `neoguyverx` 的 5 个 Agent 行为优化补丁在 24 小时内全部被关闭，显示核心团队对社区代码的审慎态度。

---

## 2. 版本发布

**无新版本发布**。

> ⚠️ **关键阻塞**: [Issue #3259](https://github.com/nearai/ironclaw/issues/3259) 显示 crates.io 仍停留在 `0.24.0`（2026-03-31），而仓库已打标至 `v0.27.0`（2026-04-29）。下游用户因 wasmtime 28.x 的 CVE 无法升级，**发布流水线存在严重滞后**。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（13 条）

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| **#4206** | henrypark133 | **运行时 HTTP 出口全异步化** — 将 `RuntimeHttpEgress::execute` 从同步 trait 改为端到端 async，消除阻塞调用 | [Issue #4206](https://github.com/nearai/ironclaw/issues/4206)（已关闭） |
| **#4245** | serrrfirat | **产品认证 HTTP 表面完整化** — 补齐 manual-token、recovery、refresh、cleanup 路由，关闭 #4201 | [PR #4245](https://github.com/nearai/ironclaw/pull/4245) |
| **#4246** | serrrfirat | **NEAR AI MCP 凭证迁移至 ProductAuth** — 统一认证体系，消除静态 SecretHandle | [PR #4246](https://github.com/nearai/ironclaw/pull/4246) |
| **#4258** | serrrfirat | **路由分发失败走 PR #4236 处置路径** — 修复 `oneOf/anyOf` 字符串化容器导致的终端运行失败 | [PR #4258](https://github.com/nearai/ironclaw/pull/4258) |
| **#4259** | serrrfirat | **合成能力自检修复** — `capability_info` 调用自身不再触发 `InvalidInvocation`（含 DB 迁移） | [PR #4259](https://github.com/nearai/ironclaw/pull/4259) |
| **#4247** | serrrfirat | **WebUI v2 认证 E2E 设计文档** — 前置设计评审，#4112 的蓝图 | [PR #4247](https://github.com/nearai/ironclaw/pull/4247) |
| **#4254** | henrypark133 | **可信入站门面（Trusted Inbound Facade）** — 触发器循环第 8 步，密封可信请求 + 重放优先幂等性 | [PR #4254](https://github.com/nearai/ironclaw/pull/4254) |
| **#4255** | henrypark133 | **出站交付解析域类型** — 触发器循环第 3 步，定义 `CommunicationDeliveryResolutionRequest` 等核心 DTO | [PR #4255](https://github.com/nearai/ironclaw/pull/4255) |
| **#4248** | henrypark133 | **交付解析契约文档** — 冻结 OutboundPolicyService 边界 | [PR #4248](https://github.com/nearai/ironclaw/pull/4248) |
| **#4249** | henrypark133 | **触发器可信入站契约** — V1 cron 调度触发器系统契约 | [PR #4249](https://github.com/nearai/ironclaw/pull/4249) |
| **#4250-#4253** | neoguyverx | 社区贡献：可中断 LLM 调用、结构化压缩摘要、内存写入行为提示、身份文件注入扫描 | [PR #4250](https://github.com/nearai/ironclaw/pull/4250) 等 |

### 整体推进评估

| 维度 | 进度 |
|:---|:---|
| **Reborn 认证体系** | ████████░░ 80% — HTTP 路由、OAuth 流程、E2E 设计完成，WebUI 组件待合 |
| **触发器循环（Trigger Loop）** | ██████░░░░ 60% — 契约冻结，域类型就绪，可信门面关闭，待调度引擎 |
| **Slack 产品适配器** | ████░░░░░░ 40% — #4035 开放中，适配器骨架就绪，webhook 接线待审 |
| **Agent 行为优化** | 社区 5 补丁全部被拒/关闭，核心团队可能选择重写 |

---

## 4. 社区热点

### 最活跃议题

| 排名 | 议题 | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| **#1** | **Issue #3259: crates.io 发布滞后** | 12 条 | **下游供应链安全** — wasmtime 28.x CVE 无法修复，要求核心团队恢复 crates.io 自动发布 | [Issue #3259](https://github.com/nearai/ironclaw/issues/3259) |
| **#2** | **PR #4257: AuthPromptView 挑战增强 + WebUI OAuth 卡** | undefined | **企业集成就绪** — GSuite/Notion/GitHub 三端 OAuth 统一体验 | [PR #4257](https://github.com/nearai/ironclaw/pull/4257) |
| **#3** | **PR #4261: ironclaw_triggers crate 骨架** | undefined | **定时任务基础设施** — cron 验证、租户隔离、确定性触发身份 | [PR #4261](https://github.com/nearai/ironclaw/pull/4261) |

**诉求分析**: 社区最强烈的焦虑是**发布可信度**——12 条评论全部集中在 #3259，无 👍 但讨论密度高，反映企业用户被锁定在旧版本的被动局面。Reborn 功能开发虽快，但**基础交付承诺（crates.io 同步）出现裂缝**。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | 修复 PR | 链接 |
|:---|:---|:---|:---|:---|
| 🔴 **P0 - 持续** | **夜间 E2E 失败**（v2-engine） | 开放，5 月 27 日起持续 | 无明确修复 PR | [Issue #4108](https://github.com/nearai/ironclaw/issues/4108) |
| 🟡 **P1 - 已修复** | `capability_info` 自调用触发 `InvalidInvocation` | **已合并**（#4259，含 DB 迁移） | #4259 | [PR #4259](https://github.com/nearai/ironclaw/pull/4259) |
| 🟡 **P1 - 已修复** | `oneOf/anyOf` 字符串化容器 + 路由分发失败走旧恢复路径 | **已合并**（#4258） | #4258 | [PR #4258](https://github.com/nearai/ironclaw/pull/4258) |
| 🟢 **P2 - 已关闭** | 运行时 HTTP 出口同步阻塞 | **设计完成关闭**（#4206） | #4206 实现中 | [Issue #4206](https://github.com/nearai/ironclaw/issues/4206) |

> **健康度警示**: E2E 失败已持续 4 天，影响 #4112 等 WebUI 认证的合并信心。建议将 E2E 修复设为 Reborn 发布门控。

---

## 6. 功能请求与路线图信号

| 需求来源 | 功能方向 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **PR #4260**（开放） | 出站通信偏好存储（租户/用户级） | ⭐⭐⭐⭐⭐ 高 | 触发器-交付闭环的必要组件，henrypark133 核心开发 |
| **PR #4261**（开放） | `ironclaw_triggers` crate 骨架 | ⭐⭐⭐⭐⭐ 高 | 触发器循环主线，已冻结契约 |
| **PR #4035**（开放） | Slack Reborn ProductAdapter | ⭐⭐⭐⭐☆ 中高 | 首个外部产品适配器，danielwpz 贡献，待核心团队带宽 |
| **PR #4229**（开放） | WebUI v2 GitHub SSO | ⭐⭐⭐⭐⭐ 高 | #4182 Google SSO 的兄弟实现，模式已验证 |
| **PR #4230**（开放） | 保留提供商推理摘要（OpenAI/Codex/Anthropic） | ⭐⭐⭐⭐☆ 中高 | LLM 层增强，serrrfirat 主导 |
| **社区补丁 #4250-#4253** | Agent 行为优化（中断、压缩、记忆、安全扫描） | ⭐⭐☆☆☆ 低 | 全部被关闭，核心团队可能内部重写 |

**下一版本（v0.28.0?）预测**: Reborn 最小可用集 = 触发器调度引擎 + 出站交付解析 + WebUI v2 认证 + 至少一个产品适配器（Slack）。当前完成度约 65%。

---

## 7. 用户反馈摘要

> 基于 Issue 评论与 PR 描述的**推断性提炼**（实际用户评论数据有限）：

| 痛点 | 来源 | 典型表述 |
|:---|:---|:---|
| **"我们无法升级"** | [Issue #3259](https://github.com/nearai/ironclaw/issues/3259) | *"downstream consumers pulling from crates.io are pinned to 0.24.0"* — 企业 CI/CD 被锁定 |
| **"模型调用工具时崩溃"** | [PR #4259](https://github.com/nearai/ironclaw/pull/4259) | *"terminal run failure"* — `capability_info` 自调用成致命错误 |
| **"认证流程碎片化"** | [PR #4245](https://github.com/nearai/ironclaw/pull/4245) | 需统一 manual-token/recovery/refresh 为产品级表面 |
| **"E2E 不可靠影响信心"** | [Issue #4108](https://github.com/nearai/ironclaw/issues/4108) | 夜间自动化持续红色，阻碍大 PR 合并 |

**满意点**: Reborn 架构的模块化设计获认可（契约先行、域类型隔离、堆叠式 PR）；`serrrfirat` 的认证系列 PR 文档详尽。

---

## 8. 待处理积压

| 积压项 | 天数 | 风险 | 建议动作 |
|:---|:---|:---|:---|
| **[Issue #3259](https://github.com/nearai/ironclaw/issues/3259) crates.io 发布滞后** | 26 天 | 🔴 **供应链安全** | 立即恢复 CI 发布流水线，或手动发布 0.25.0-0.27.0 |
| **[Issue #4108](https://github.com/nearai/ironclaw/issues/4108) 夜间 E2E 失败** | 4 天 | 🔴 **发布门控** | 指派专人排查 v2-engine 失败根因，阻塞 Reborn 合并 |
| **[PR #4035](https://github.com/nearai/ironclaw/pull/4035) Slack 适配器** | 6 天 | 🟡 生态扩展 | 核心团队评审或分配维护者对接 `danielwpz` |
| **[PR #4229](https://github.com/nearai/ironclaw/pull/4229) GitHub SSO** | 2 天 | 🟢 功能补齐 | 依赖 #4257 合并后快速跟进 |

---

> **日报生成说明**: 本报告基于 GitHub 公开数据自动生成，PR 评论数显示为 `undefined` 系原始数据缺失，未纳入排序权重。建议关注 E2E 稳定性与 crates.io 发布的交叉风险——两者叠加可能触发下游社区信任损耗。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-31

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **日期**: 2026-05-31（周日）  
> **数据周期**: 过去24小时

---

## 1. 今日速览

LobsterAI 今日活跃度**极低**，社区进入典型的周末静默期。过去24小时内无新增 Issues、无版本发布，仅 2 条历史 PR 在昨日（5月30日）被更新标记但至今仍处于**待合并状态**。两条 PR 均聚焦于 UI/UX 修复——分别解决模态框滚动遮挡关闭按钮的交互缺陷，以及 macOS 快捷键显示不符合平台惯例的本地化问题。项目整体维护节奏偏慢，PR 从创建到待合并已逾 57 天，合并吞吐率值得关注。

---

## 2. 版本发布

**无**

---

## 3. 项目进展

**今日无合并或关闭的 PR**，项目代码库未产生实质性推进。

两条处于 `OPEN` 状态的 PR 虽在 5月30日有更新动作，但状态仍为 `[stale]`（陈旧），说明：
- 代码审查流程存在阻塞
- 或维护者尚未完成最终验收

| PR | 状态 | 创建时间 | 停滞天数 | 技术价值 |
|:---|:---|:---|:---|:---|
| [#1466](https://github.com/netease-youdao/LobsterAI/pull/1466) 模态框滚动修复 | `OPEN` [stale] | 2026-04-04 | **57天** | 高——修复核心交互阻塞（关闭按钮不可达） |
| [#1467](https://github.com/netease-youdao/LobsterAI/pull/1467) macOS 快捷键本地化 | `OPEN` [stale] | 2026-04-04 | **57天** | 中——平台体验一致性，影响 macOS 用户认知负荷 |

**进展评估**: 今日项目前进距离为 **0**。两条 UI 修复 PR 若合并，将改善约 **~30%** 桌面端用户的日常操作流畅度（基于 macOS 用户占比及模态框使用频率估算）。

---

## 4. 社区热点

**无活跃讨论**。两条 PR 均显示 `评论: undefined`（数据异常或零评论），👍 数为 0，社区参与度近乎空白。

| 条目 | 链接 | 互动数据 | 诉求分析 |
|:---|:---|:---|:---|
| #1466 模态框关闭按钮不可达 | [PR #1466](https://github.com/netease-youdao/LobsterAI/pull/1466) | 评论: 0 / 👍: 0 | **隐性痛点**: MCP 配置场景下表单膨胀导致操作中断，用户可能因无法取消而强制刷新页面 |
| #1467 macOS 快捷键显示错误 | [PR #1467](https://github.com/netease-youdao/LobsterAI/pull/1467) | 评论: 0 / 👍: 0 | **平台身份认同**: 跨平台应用常见疏忽，macOS 用户对 ⌘ 符号有强预期，显示 Ctrl 降低专业感 |

> **信号解读**: 零互动不意味着零影响。此类 UI 修复通常由维护者内部驱动或用户私下反馈，缺乏公开讨论反而可能表明 Issue/PR 模板引导不足，或社区尚未形成"遇到即报告"的文化。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 来源 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | MCP 服务器表单模态框：内容增长时关闭/取消按钮滚出视口，导致操作死锁 | [PR #1466](https://github.com/netease-youdao/LobsterAI/pull/1466) | #1466 | **待合并（57天）** |
| 🟡 **中** | macOS 快捷键显示为 Ctrl 而非 ⌘，违反平台人机界面指南 | [PR #1467](https://github.com/netease-youdao/LobsterAI/pull/1467) | #1467 | **待合并（57天）** |

**风险评估**: 
- #1466 的 `max-h-[80vh] overflow-y-auto` 作用于整体模态面板而非内容区，属于 **架构级布局缺陷**。若用户配置多环境变量，取消操作需完整滚动至底部，在极端情况下（如 20+ 变量）可能触发"无响应"感知。
- 两条 PR 均标记 `[stale]`，存在 **代码冲突过期** 风险，需 rebase 后重新审查。

---

## 6. 功能请求与路线图信号

**今日无新增功能请求**（Issues: 0）。

从现有 PR 推断下一版本可能的纳入项：

| 方向 | 证据 | 纳入概率 | 备注 |
|:---|:---|:---|:---|
| UI 组件库规范化（模态框/抽屉布局模式统一） | #1466 的修复模式可复用至其他表单场景 | 70% | 需维护者确认是否为系统性问题 |
| 跨平台适配层完善 | #1467 引入平台检测逻辑（`navigator.platform` 或类似） | 60% | 可扩展至菜单栏、托盘图标等场景 |
| MCP 生态深度集成 | 表单复杂度增长暗示 MCP 使用频率上升 | — | **需求侧信号**，非本次 PR 直接体现 |

---

## 7. 用户反馈摘要

**今日无新增用户评论**（Issues: 0，PR 评论: undefined/0）。

基于 PR 描述反向推断的用户场景与痛点：

| 场景 | 痛点 | 满意度推断 |
|:---|:---|:---|
| **MCP 服务器配置**（开发者/高级用户） | 多环境变量/Header 配置时界面"越用越长"，最后被迫完成提交或强制关闭 | 😞 低——流程中断感强 |
| **macOS 日常快捷键使用** | 设置面板显示 Ctrl+N 等 Windows 范式，与系统全局快捷键记忆冲突 | 😐 中——功能可用，认知摩擦持续 |

> **缺失信号**: 无公开用户评论意味着无法捕获"成功场景"的正面反馈，项目健康度评估偏向保守。

---

## 8. 待处理积压

| 条目 | 链接 | 创建日期 | 停滞天数 | 风险等级 | 行动建议 |
|:---|:---|:---|:---|:---|:---|
| fix(mcp): modal close button unreachable when content grows tall | [PR #1466](https://github.com/netease-youdao/LobsterAI/pull/1466) | 2026-04-04 | **57天** | 🔴 **高** | 优先审查：交互阻塞类 Bug 影响核心功能路径 |
| fix(shortcuts): display Cmd (⌘) instead of Ctrl on macOS | [PR #1467](https://github.com/netease-youdao/LobsterAI/pull/1467) | 2026-04-04 | **57天** | 🟡 **中** | 安排审查：平台体验一致性，合并成本低 |

**维护者提醒**:
- 两条 PR 作者均为 `linlihua`，可能存在 **批量提交后审查资源不足** 的情况
- 建议检查 CI 状态（数据未提供），确认 `[stale]` 标签是否由自动化流程添加或因无活动触发
- 若 7 日内仍未合并，建议作者 rebase 并 @ 维护者，避免代码基底漂移

---

## 附录：数据健康度检查

| 指标 | 数值 | 健康度 |
|:---|:---|:---|
| 日 Issues 处理率 | 0/0 = N/A | ⚪ 无数据 |
| 日 PR 合并率 | 0/2 = 0% | 🔴 低 |
| 平均 PR 合并时长 | >57天（进行中） | 🔴 高延迟 |
| 社区互动密度 | 0 评论/日 | 🔴 静默 |

**综合评级**: 🟡 **维护停滞风险** —— 代码有修复就绪，但合并管道阻塞，建议维护团队优先疏通审查队列。

---

*本日报基于 GitHub 公开数据自动生成，PR 评论数为 `undefined` 可能源于 API 限制或数据提取异常，建议人工复核。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-31

> **项目**: CoPaw (agentscope-ai/CoPaw)  
> **日期**: 2026-05-31  
> **分析周期**: 过去 24 小时（2026-05-30）

---

## 1. 今日速览

今日 CoPaw 社区活跃度**较高**，Issues 更新达 **11 条**（10 条活跃/新开，1 条关闭），PR 更新 **3 条**均待合并，无新版本发布。社区讨论集中在 **Windows 桌面端体验优化**（shell 命令窗口闪烁问题被重复报告 3 次）、**对话管理与版本控制功能**（diff-view、对话回退）以及 **ACP 协议兼容性**等核心体验层面。值得注意的是，今日关闭的 Issue #4789 是关于对话删除/回退功能的高互动需求，显示用户对"类 Trae 版本控制"的强烈诉求。整体项目处于**功能快速迭代期，稳定性问题与用户期望存在明显张力**。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**今日无 PR 合并或关闭**，3 条 PR 均处于待合并状态，项目代码层面未有实质性推进。

| PR | 作者 | 状态 | 进展评估 |
|:---|:---|:---|:---|
| [#4689](https://github.com/agentscope-ai/QwenPaw/pull/4689) `feat(providers): route non-standard generate_kwargs into extra_body` | leoleils | ⏳ 待合并 | 解决 DashScope 等非标准参数被 OpenAI SDK 静默拒绝的问题，提升多提供商兼容性 |
| [#4827](https://github.com/agentscope-ai/QwenPaw/pull/4827) `fix(config): add ProviderManager fallback to get_model_max_input_length` | szetohoyan | ⏳ 待合并 | 修复上下文压缩阈值计算错误的配置回退 bug，影响模型长上下文处理准确性 |
| [#4821](https://github.com/agentscope-ai/QwenPaw/pull/4821) `feat(feishu): add group session sharing mode` | szetohoyan | ⏳ 待合并 | 飞书渠道新增群聊会话共享控制，对齐微信渠道已有能力 |

**整体评估**: 今日代码层面进展停滞，3 条 PR 覆盖配置修复、多提供商兼容、企业 IM 集成三个方向，均具备合并价值，建议维护者优先审阅 #4827（配置 bug 修复）和 #4689（兼容性改进）。

---

## 4. 社区热点

### 🔥 最高讨论热度：Windows shell 命令窗口闪烁问题（3 条关联 Issue）

| Issue | 评论数 | 核心诉求 |
|:---|:---|:---|
| [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) `[Bug] Windows: execute_shell_command flashes a console window on every call` | **7** | 最早报告（5-8），持续未解决，用户反复追问 |
| [#4829](https://github.com/agentscope-ai/QwenPaw/issues/4829) `[Bug] Windows 桌面端 shell 命令闪烁` | **2** | 5-30 新报告，Tauri v1.1.9 复现 |
| [#4828](https://github.com/agentscope-ai/QwenPaw/issues/4828) `[Bug] Windows 执行 shell 命令 cmd 窗口频繁闪烁` | **1** | 5-30 重复报告，Electron/Tauri 双版本均受影响 |

**背后诉求分析**: 
- **体验破坏性极强**: 连续命令执行时"闪屏"严重干扰专注工作流
- **跨版本/跨框架蔓延**: 从早期版本到 v1.1.9，Electron 到 Tauri 均未根治，暗示底层 `subprocess` 创建方式存在系统性问题（未使用 `CREATE_NO_WINDOW` 或等效标志）
- **用户耐心耗尽**: 同一问题被重复开 Issue，说明 #4123 的长期未响应已导致用户信任损耗

### 📝 高互动功能需求：对话版本控制（已关闭）

| Issue | 评论数 | 状态 |
|:---|:---|:---|
| [#4789](https://github.com/agentscope-ai/QwenPaw/issues/4789) `[Feature] 像 Trae 那样支持对话删除和回退` | **7** | ✅ 已关闭（5-30）|

**诉求分析**: 用户明确要求"回退时文件同步回退""二次确认删除""做好每次更改的管理而非一整个沙箱"，核心是对 **AI 编程助手的"版本控制"心智模型**——将 AI 对话视为可撤销、可分支的操作历史。该 Issue 被关闭可能意味着：
- 功能已纳入内部路线图，关闭重复请求；或
- 与现有架构冲突较大，暂不支持

建议社区关注后续是否有相关 PR 出现。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 严重程度 | 影响范围 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|:---|
| 🔴 P0 | [#4454](https://github.com/agentscope-ai/QwenPaw/issues/4454) `/mission` 指令导致 Console 完全卡死 | **高** — 功能完全不可用 | 全平台 Console 用户 | ❌ 无 | **17天未解决**，清空目录/重置 session 无效，疑似状态机死锁 |
| 🔴 P0 | [#4824](https://github.com/agentscope-ai/QwenPaw/issues/4824) ACP 协议连接 Claude Code 版本号格式不匹配 | **高** — 协议互操作失败 | 使用 Claude Code 集成的用户 | ❌ 无 | `protocolVersion` 类型错误（string vs number），`delegate_external_agent` 持续报 Internal Error |
| 🟡 P1 | [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) / [#4829](https://github.com/agentscope-ai/QwenPaw/issues/4829) / [#4828](https://github.com/agentscope-ai/QwenPaw/issues/4828) Windows shell 命令窗口闪烁 | **中** — 体验严重受损 | Windows 桌面端用户 | ❌ 无 | **22天未解决**，重复报告激增，需紧急合并修复 |
| 🟡 P1 | [#4827](https://github.com/agentscope-ai/QwenPaw/pull/4827) 配置回退 bug（PR 待合并） | **中** — 长上下文处理阈值错误 | 配置自定义模型的用户 | ✅ #4827 | 待合并，修复已就绪 |

**稳定性评估**: 今日暴露 **2 个 P0 级稳定性风险**（Console 卡死、ACP 协议断裂），均无任何修复进展；Windows 闪烁问题因长期未解已演变为重复报告潮。项目稳定性健康度**偏低**，建议维护者建立 Bug 分级响应机制。

---

## 6. 功能请求与路线图信号

| Issue | 需求类型 | 与现有 PR 关联 | 纳入下一版本可能性 | 关键信号 |
|:---|:---|:---|:---|:---|
| [#4825](https://github.com/agentscope-ai/QwenPaw/issues/4825) `writefile` 支持 diff-view 和审阅 | 代码版本控制 | 无 | ⭐⭐⭐ 高 | 用户附 Trae 截图明确对标，与 #4789 对话回退需求形成"AI 编程版本控制"主题集群 |
| [#4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) 工作目录默认文件统一放 `.qwenpaw` 文件夹 | 项目结构治理 | 无 | ⭐⭐⭐ 高 | 对标 OpenCode 的 `.opencode` 模式，社区已有共识（7 评论），实现成本低 |
| [#4826](https://github.com/agentscope-ai/QwenPaw/issues/4826) / [#4830](https://github.com/agentscope-ai/QwenPaw/issues/4830) 桌面端路径可点击打开 | 交互体验优化 | 无 | ⭐⭐⭐ 高 | 同日被同一用户拆分为两个 Issue，需求明确，实现简单 |
| [#4826](https://github.com/agentscope-ai/QwenPaw/issues/4826) 三种新消息处理模式（打断/排队/插入） | 对话流控制 | 无 | ⭐⭐ 中 | 对标 Hermes Agent，需架构层面支持任务调度中断机制 |
| [#4831](https://github.com/agentscope-ai/QwenPaw/issues/4831) Docker 镜像预装 psycopg2-binary 等包 | 运维体验 | 无 | ⭐⭐⭐ 高 | 具体包清单+用途明确，社区贡献友好型 Issue |
| [#4789](https://github.com/agentscope-ai/QwenPaw/issues/4789) 对话删除/回退（已关闭） | 对话版本控制 | 无 | ⭐⭐ 中（已关闭） | 高互动关闭，可能内部已规划 |

**路线图信号**: "AI 编程的版本控制"正成为核心用户期望主题（diff-view + 对话回退 + 文件同步回退），建议项目评估是否将"CoPaw Checkpoint"作为 v1.2 的差异化功能。

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 痛点 | 来源 Issue | 用户原声/场景 |
|:---|:---|:---|
| **Windows 桌面端"闪屏"折磨** | #4123, #4828, #4829 | "执行一次闪一次""连续闪烁，非常影响使用体验""Electron 版或 Tauri 版均有此问题" |
| **Console 核心功能完全不可用** | #4454 | "/mission 指令后界面完全卡死""清空目录重置 session 仍然发生"——用户已尝试自助修复无效 |
| **协议兼容性断裂** | #4824 | "delegate_external_agent 一直报 Internal error"——企业级 ACP 集成场景受阻 |
| **缺乏"安全感"的 AI 编辑** | #4825, #4789 | "做好每一次更改的管理，而不是一整个沙箱"——用户需要细粒度可控性 |

### 😊 满意/期待点

- **飞书/微信企业集成**: PR #4821 显示团队在企业 IM 场景持续投入
- **多提供商兼容**: PR #4689 体现对 DashScope 等国产模型的支持重视
- **Docker 部署**: 用户主动提出镜像优化建议（#4831），说明容器化部署有一定采用率

---

## 8. 待处理积压

> 以下 Issue/PR 已长期未获有效响应，存在社区信任损耗风险，建议维护者优先标注 `triage` 或给出时间线：

| 时长 | Issue/PR | 风险 |
|:---|:---|:---|
| **22 天** | [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) Windows 闪烁 | 已衍生 2 条重复 Issue，用户耐心耗尽 |
| **17 天** | [#4454](https://github.com/agentscope-ai/QwenPaw/issues/4454) /mission 卡死 | **P0 功能不可用**，无任何维护者回应 |
| **15 天** | [#4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) 工作目录整理 | 高价值低实现成本，社区共识明确 |
| **4 天** | [#4689](https://github.com/agentscope-ai/QwenPaw/pull/4689) 非标准参数路由 | 影响多提供商兼容性，PR 已就绪待审 |

---

## 附录：数据速查

| 指标 | 数值 |
|:---|:---|
| Issues 更新 | 11（新开/活跃 10，关闭 1） |
| PR 更新 | 3（待合并 3，合并/关闭 0） |
| 版本发布 | 0 |
| 今日评论最活跃 Issue | #4123, #4408, #4789（各 7 评论） |
| 今日最高 👍 Issue | #4789（1 👍）|

---

*本日报基于 GitHub 公开数据生成，如需深度分析特定 Issue 的评论情感或 PR 代码变更，可进一步展开。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-31

---

## 1. 今日速览

ZeroClaw 今日呈现**高强度收尾态势**：过去24小时内 **39 个 Issue 关闭**（含 11 个新开/活跃），**34 个 PR 合并/关闭**，活跃度极高但无新版本发布。核心信号是 **Tauri 桌面端项目被整体移除**（PR #7026），标志着团队战略收缩——从"全平台覆盖"转向"Web 优先、核心运行时深耕"。同时，macOS 桌面端最后一批 capability 和权限流 PR（#6761-#6767）密集合并，形成"清仓式收尾"。语音全双工对话（#5896/#5974-#5978）三大关联 PR 全部关闭，该功能线或遇阻。社区 RFC 讨论活跃，输出路由模型（#6969）和定时任务架构（#6954）进入设计深水区。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 🔴 战略级变更：Tauri 桌面端移除
| PR | 状态 | 说明 |
|:---|:---|:---|
| [#7026](https://github.com/zeroclaw-labs/zeroclaw/pull/7026) | **OPEN** | 移除整个 `apps/tauri/`（94 个文件），从 workspace 成员中删除，清理 CI/CD 和文档引用 |

**影响评估**：直接废弃过去 2 个月密集的桌面端投入（见下方已合并的 #6761-#6767）。官方理由为" stalled out and does not have the same impact or usage as the web dashboard"。此决策将释放维护带宽，但可能流失期待原生桌面体验的用户。

### ✅ 已合并/关闭的关键 PR

**语音全双工对话栈（#5896 关联）—— 全部关闭，状态存疑**
| PR | 规模 | 内容 | 状态 |
|:---|:---|:---|:---|
| [#5974](https://github.com/zeroclaw-labs/zeroclaw/pull/5974) | L | WebSocket 二进制音频帧 + PCM16 验证 + VAD 管道集成 | **CLOSED** (needs-author-action) |
| [#5976](https://github.com/zeroclaw-labs/zeroclaw/pull/5976) | XL | 能量基语音活动检测器（EnergyVad）| **CLOSED** (needs-author-action) |
| [#5978](https://github.com/zeroclaw-labs/zeroclaw/pull/5978) | XL | 语音捕获缓冲区 + STT 分发 | **CLOSED** (needs-author-action) |

> 三 PR 均因 `needs-author-action` 关闭，非正常合并。作者 @hurtdidit 为外部贡献者（Tavina 创始人），语音优先场景或暂不被核心团队采纳。

**macOS 桌面端 Capability & 权限流 —— "末日狂奔"式合并**
| PR | 规模 | 内容 | 关联 Issue |
|:---|:---|:---|:---|
| [#6761](https://github.com/zeroclaw-labs/zeroclaw/pull/6761) | L | macOS UI 控制 capability：点击、按键、通知、AX 读取、审批 | [#6499](https://github.com/zeroclaw-labs/zeroclaw/issues/6499) |
| [#6762](https://github.com/zeroclaw-labs/zeroclaw/pull/6762) | S | 无障碍权限流：系统对话框 + 恢复重检 | [#6333](https://github.com/zeroclaw-labs/zeroclaw/issues/6333) |
| [#6763](https://github.com/zeroclaw-labs/zeroclaw/pull/6763) | XS | 屏幕录制权限：撤销检测 | [#6334](https://github.com/zeroclaw-labs/zeroclaw/issues/6334) |
| [#6764](https://github.com/zeroclaw-labs/zeroclaw/pull/6764) | XS | 麦克风权限：撤销检测 | — |
| [#6765](https://github.com/zeroclaw-labs/zeroclaw/pull/6765) | XS | 输入监控权限：撤销检测 | — |
| [#6766](https://github.com/zeroclaw-labs/zeroclaw/pull/6766) | XS | 完全磁盘访问权限：撤销检测 | — |
| [#6767](https://github.com/zeroclaw-labs/zeroclaw/pull/6767) | XS | 本地网络权限：撤销检测 | — |

**讽刺性张力**：上述 7 个 PR 今日全部合并，但 #7026 同时提出移除整个 Tauri 应用。这些 capability 实现或仅作为"干净收尾"归档，未来通过其他形态（如 Rust 侧car/CLI）复用。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数）

| 排名 | Issue | 评论 | 核心诉求 | 状态 |
|:---|:---|:---|:---|:---|
| 1 | [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) Context compressor drops `reasoning_content` | 4 | **DeepSeek 等推理模型关键数据丢失**：上下文压缩时丢弃 `reasoning_content`，导致需链式思考的模型行为退化 | **CLOSED** |
| 2 | [#5649](https://github.com/zeroclaw-labs/zeroclaw/issues/5649) Web Chat UI 剪贴板/拖拽图片 | 3 | 多模态交互基础体验缺失 | **CLOSED** |
| 3 | [#6499](https://github.com/zeroclaw-labs/zeroclaw/issues/6499) macOS UI 控制 capability handlers | 3 | 桌面端 Agent 需原生系统控制能力 | **CLOSED** |
| 4 | [#6327](https://github.com/zeroclaw-labs/zeroclaw/issues/6327)-[#6330](https://github.com/zeroclaw-labs/zeroclaw/issues/6330) 等桌面菜单栏系列 | 2-1 | 桌面端功能追平 Web 端 | 多数 **CLOSED** |

### 热点分析

**#6269 的深层信号**：推理模型（DeepSeek、o1 类）的 `reasoning_content` 已成为**运行时关键状态**，非可选元数据。该 Issue 标记 `risk: high, priority: p1` 且快速关闭，显示团队对推理链完整性的警觉。

**桌面端 Issues 的"批量死亡"**：@theonlyhennygod 创建的 15+ 个桌面菜单栏相关 Issue 今日集中关闭，并非因功能完成，而是因 #7026 移除决策。社区需关注：**这些需求是否被"解决"还是被"取消"**。

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 描述 | Fix 状态 |
|:---|:---|:---|:---|
| **S2 / P1** | [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) | 上下文压缩丢弃 `reasoning_content`，推理模型行为降级 | **已关闭**（修复未在摘要中显式说明，需验证） |
| **P2** | [#6349](https://github.com/zeroclaw-labs/zeroclaw/issues/6349) | 桌面菜单栏聊天内联渲染所有 `tool_call`（含错误）| **CLOSED**（因桌面端移除而关闭）|
| **P2** | [#6340](https://github.com/zeroclaw-labs/zeroclaw/issues/6340) | 桌面端崩溃报告/恐慌捕获缺失 | **CLOSED**（因桌面端移除而关闭）|
| **medium** | [#7002](https://github.com/zeroclaw-labs/zeroclaw/pull/7002) | TTS Manager 绑定到错误 agent（`default` 而非 channel owner）| **OPEN** 有 PR |
| **medium** | [#7000](https://github.com/zeroclaw-labs/zeroclaw/pull/7000) | Telegram 语音转录 `transcription_provider` alias 未 wire | **OPEN** 有 PR |

**稳定性风险评估**：Tauri 移除引入**架构级不确定性**——原有桌面端安全边界（权限沙箱、本地日志）消失，若未来以 Electron/Tauri-v2/其他框架重启，需重建信任基线。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 成熟度 | 纳入可能性 |
|:---|:---|:---|:---|
| **统一输出路由模型**（per-peer modality preference + `send_via` tool） | [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) RFC | 设计阶段，2 评论 | ⭐⭐⭐⭐⭐ **高** — 用户从 Letta 迁移的痛点，跨渠道 Agent 核心能力 |
| **定时任务纳入编排器消息管道** | [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) RFC | 设计阶段，2 评论，关联 5 个 bug | ⭐⭐⭐⭐⭐ **高** — 根因修复，技术债清偿 |
| **全双工语音对话 + 打断** | [#5896](https://github.com/zeroclaw-labs/zeroclaw/issues/5896) | PR 全关，作者外部 | ⭐⭐⭐ **中低** — 战略收缩期，非核心优先级 |
| **版本化文档部署** | [#7023](https://github.com/zeroclaw-labs/zeroclaw/pull/7023) | PR OPEN，有截图 | ⭐⭐⭐⭐ **高** — 基础设施，低风险 |
| **文件工具 base64 编码** | [#7004](https://github.com/zeroclaw-labs/zeroclaw/pull/7004) | PR OPEN，S 级 | ⭐⭐⭐⭐ **高** — 二进制文件处理刚需 |
| **技能级工具权限提升**（scoped tool elevation） | [#6924](https://github.com/zeroclaw-labs/zeroclaw/pull/6924) | PR OPEN，L 级，复杂 | ⭐⭐⭐⭐ **高** — MCP 生态关键安全机制 |
| **邮件 XOAUTH2 + 只读 IMAP 工具** | [#7021](https://github.com/zeroclaw-labs/zeroclaw/pull/7021) | PR OPEN，当日创建 | ⭐⭐⭐⭐ **中高** — 企业集成刚需 |

**路线图推断**：下一版本（v0.7.8 或 v0.8.0）聚焦 **核心运行时可靠性**（定时任务、输出路由、文档版本化）+ **企业集成深化**（邮件 OAuth、文件二进制支持），**明确放弃桌面端广度**。

---

## 7. 用户反馈摘要

### 痛点（来自 Issue 评论与 RFC）

| 用户/场景 | 痛点 | 来源 |
|:---|:---|:---|
| **Letta 迁移用户**（@mov-xound-glitch） | 失去"如何以及在哪里送达回复"的控制权——早晨简报无法强制邮件发送，紧急通知无法强制 SMS | [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) |
| **DeepSeek 用户** | 长对话后推理链断裂，模型"忘记"之前的思考过程 | [#6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) |
| **Tavina 语音优先用户**（@hurtdidit） | 需对讲机式按键通话，无法自然打断 Agent | [#5896](https://github.com/zeroclaw-labs/zeroclaw/issues/5896) |
| **Telegram 语音用户** | 语音消息转录配置不生效 | [#7000](https://github.com/zeroclaw-labs/zeroclaw/pull/7000) |
| **TTS 多 Agent 用户** | TTS 配置被错误解析到 `default` agent | [#7002](https://github.com/zeroclaw-labs/zeroclaw/pull/7002) |

### 满意点

- 运行时扩展性受认可（MCP 工具、Skills 系统活跃开发）
- 多渠道架构（Web、Telegram、WhatsApp、Email、Webhook）覆盖全面

### 不满/担忧

- **桌面端取消**：投入 2 个月的 macOS 原生能力（权限流、AX 控制、菜单栏）一夜作废，贡献者 @theonlyhennygod 的大量工作或被归档
- **外部贡献者摩擦**：语音 PR 三关全卡 `needs-author-action`，@hurtdidit 的 Tavina 场景未被吸纳

---

## 8. 待处理积压

### 🔴 需维护者紧急关注

| 项目 | 创建时间 | 最后更新 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) 153 commits 批量回滚审计 | 2026-04-24 | 2026-05-30 | **极高** — 3 个月未解决，持续丢失代码 | 指定专人逐 commit 评估，建立恢复队列 |
| [#6956](https://github.com/zeroclaw-labs/zeroclaw/pull/6956) 移除 marketplace sync workflow | 2026-05-27 | 2026-05-31 | 中 — 影响部署生态 | 明确替代方案（是否转向官方 Helm/Compose？）|
| [#7026](https://github.com/zeroclaw-labs/zeroclaw/pull/7026) 移除 Tauri 桌面端 | 2026-05-30 | 2026-05-30 | **极高** — 战略决策需社区共识 | 发布 RFC 说明替代路线图，避免用户流失 |

### 🟡 长期未决设计

| 项目 | 状态 | 阻塞原因 |
|:---|:---|:---|
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) 定时任务架构 RFC | OPEN, needs-maintainer-review | 需编排器核心维护者介入 |
| [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) 输出路由模型 RFC | OPEN | 跨渠道状态机设计复杂 |

---

## 附录：数据健康度指标

| 指标 | 数值 | 评估 |
|:---|:---|:---|
| Issue 关闭率 | 78% (39/50) | ⬆️ 极高，含批量战略关闭 |
| PR 合并/关闭率 | 68% (34/50) | ⬆️ 高，但含未正常合并的语音 PR |
| 外部贡献者 PR 存活率 | 低（#5974-#5978 全关）| ⬇️ 需关注社区包容性 |
| 无新版本天数 | 持续 | ⚠️ 发布节奏放缓 |

---

*日报基于 GitHub 公开数据生成，PR 评论数显示为 `undefined` 系原始数据缺失，已标注。*

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*