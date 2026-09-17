# OpenClaw 生态日报 2026-09-17

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-09-17 00:51 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# **OpenClaw 项目简报 — 2026-09-17**

---

### **1. 今日概览**  
OpenClaw 项目持续保持高度活跃，开发者参与度激增：**过去 24 小时内更新了 500 个问题与 500 个拉取请求**，显示出强劲的开发势头。由于多个平台（Windows、Linux、macOS）上存在关键稳定性问题——特别是内存泄漏、崩溃循环和更新失败——整个生态正承受巨大压力。尽管尚未发布新版本，但高严重性漏洞（P0/P1）及紧急拉取请求的数量表明，即将到来的 **2026.9.4/9.5 发布周期已进入危机模式**，稳定部署很可能被推迟。反复出现的回归问题与未修复的生产阻塞项正在考验社区信任。

---

### **2. 发布情况**  
❌ **截至 2026-09-17 仍未发布新版本**。  
⚠️ **报告关键更新失败**：  
- **从 2026.9.3 升级至 2026.9.4 在 Windows 上失败**，原因在于 `mkdir` 路径展开问题（`$OPENCLAW_STATE_DIR` 未正确展开）——[问题 #146719](https://github.com/openclaw/openclaw/issues/146719)  
- **npm 全局更新失败**，由架构迁移不匹配导致——[问题 #144739](https://github.com/openclaw/openclaw/issues/144739)  
- **Windows 快照更新失败**——[问题 #150201](https://github.com/openclaw/openclaw/issues/150201)  
➡️ *目前许多用户无法完成向 2026.9.4 的迁移。*

---

### **3. 项目进展**  
✅ **今日合并/关闭的拉取请求**：  
虽然数据中未明确标记“已合并”的拉取请求，但**多个高优先级修复已准备就绪，处于最终审查阶段**：  
- [PR #150274](https://github.com/openclaw/openclaw/pull/150274)：修复插件重载后状态丢失问题；降低内存分配  
- [PR #150196](https://github.com/openclaw/openclaw/pull/150196)：保持会话列表在内存中实时同步；防止读取过期数据  
- [PR #150415](https://github.com/openclaw/openclaw/pull/150415)：统一重放/心跳/过滤中的工具块契约  
- [PR #148078](https://github.com/openclaw/openclaw/pull/148078)：降低插件激活开销  
- [PR #149533](https://github.com/openclaw/openclaw/pull/149533)：优化冷会话目录列表性能（⚠️ 因 CPU 回归问题被标记为暂不合并）

> 这些拉取请求代表了核心基础设施改进，聚焦于 **内存效率、生命周期一致性与性能优化**——对网关稳定性至关重要。

---

### **4. 社区热点话题**  
🔥 **按评论数与严重性排序的热门问题**：

| 问题 | 摘要 | 评论数 | 严重性 | 链接 |
|------|--------|---------|----------|------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 钩子/工具导致僵尸进程泄漏，引发运行时性能下降 | 30 | 🦞 钻石龙虾 (P1) | [Bug: 进程泄漏](https://github.com/openclaw/openclaw/issues/97616) |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 网关内存泄漏：RSS 从 350MB 增长至 15.5GB，触发 OOM 崩溃 | 25 | 🦞 钻石龙虾 (P1) | [内存泄漏：OOM 崩溃](https://github.com/openclaw/openclaw/issues/91588) |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP 服务器初始化超时，因未处理的 Promise 拒绝导致网关崩溃 | 24 | 🦞 钻石龙虾 (P1) | [MCP 初始化超时崩溃](https://github.com/openclaw/openclaw/issues/144911) |
| [#150201](https://github.com/openclaw/openclaw/issues/150201) | Windows 更新失败，因扩展路径中 `$OPENCLAW_STATE_DIR` 未展开 | 14 | 🦞 钻石龙虾 (P0) | [Windows 更新失败](https://github.com/openclaw/openclaw/issues/150201) |

💡 **深层需求**：  
- **大规模下的稳定性**（632 个代理集群，长期运行的网关）  
- **可靠的更新/回滚机制**  
- **可预测的资源使用**（无内存泄漏、无僵尸进程）  
- **跨平台一致性**（尤其 Windows + ARM64）

---

### **5. 漏洞与稳定性**  
🚨 **今日报告的关键漏洞（按严重性排序）**：

| 漏洞 | 影响 | 状态 | 修复拉取请求？ | 链接 |
|-----|--------|--------|---------|------|
| **[#149538](https://github.com/openclaw/openclaw/issues/149538)** | 网关虽达“就绪”状态却永不响应 — `/health` 超时，事件循环被饿死 | 崩溃循环，用户体验阻塞 | ❌ 尚无修复 | [事件循环饿死](https://github.com/openclaw/openclaw/issues/149538) |
| **[#148529](https://github.com/openclaw/openclaw/issues/148529)** | 632 代理集群下启动时间从 2 秒（2026.7.1-2）飙升至 12 分钟（2026.9.4） | 回归问题，用户体验阻塞 | ❌ 尚无修复 | [启动时间回归](https://github.com/openclaw/openclaw/issues/148529) |
| **[#144911](https://github.com/openclaw/openclaw/issues/144911)** | 子进程清理路径中未处理的 Promise 拒绝导致网关完全崩溃 | 崩溃循环 | ❌ 尚无修复 | [清理路径中未捕获的拒绝](https://github.com/openclaw/openclaw/issues/144911) |
| **[#97616](https://github.com/openclaw/openclaw/issues/97616)** | 子进程僵尸不断积累 → 最终触发 OOM | 运行时性能下降 | ❌ 尚无修复 | [僵尸进程泄漏](https://github.com/openclaw/openclaw/issues/97616) |
| **[#136311](https://github.com/openclaw/openclaw/issues/136311)** | 重新索引锁无法释放 → 无法执行索引修复 | 数据损坏风险 | ❌ 尚无修复 | [重新索引锁卡死](https://github.com/openclaw/openclaw/issues/136311) |

> ⚠️ **注意**：所有顶级 P0/P1 漏洞均无已合并修复。这表明**亟需维护者紧急评估与处理**，否则任何稳定版本都无法令人信赖。

---

### **6. 功能请求与路线图信号**  
📌 **功能请求中的新兴主题**：

| 请求 | 使用场景 | 优先级信号 | 链接 |
|-------|----------|------------------|------|
| **单向分发模式（无需回复 ping-pong）** | 代理间交接时不引入反馈环路 | P2，需求高 | [问题 #44309](https://github.com/openclaw/openclaw/issues/44309) |
| **清理过期孤立会话** | 清理与已删除频道关联的失效会话 | 高用户体验摩擦 | [问题 #49259](https://github.com/openclaw/openclaw/issues/49259) |
| **网关边界处的 RTL 双向隔离** | 修复希伯来语/阿拉伯语标点渲染问题 | 本地化需求 | [问题 #68105](https://github.com/openclaw/openclaw/issues/68105) |
| **原生 PowerShell 烟囱测试** | 确保贡献者命令跨平台可用 | 开发体验优先 | [问题 #44291](https://github.com/openclaw/openclaw/issues/44291) |

> ✅ **预计纳入下一版**：单向分发与会话清理极有可能被纳入 **2026.9.5**，因其关注度高且契合代理编排成熟度目标。

---

### **7. 用户反馈摘要**  
💬 **真实用户痛点（来自问题与拉取请求）**：

- **“我从 2026.9.3 升级到 2026.9.4 后，网关每两天就崩溃一次。”** → 内存泄漏与 OOM 杀死 ([#91588](https://github.com/openclaw/openclaw/issues/91588))  
- **“我的 WebChat 会话启动时一片空白 —— 没有历史上下文。”** → AI 不知晓对话历史 ([#99925](https://github.com/openclaw/openclaw/issues/99925))  
- **“更新后我无法退出登录 —— 认证存储提示‘锁可能繁忙’。”** → 恢复后认证失败仍持续 ([#145929](https://github.com/openclaw/openclaw/issues/145929))  
- **“Telegram 回复在快照 ID 变更时重复第一个评论。”** → UI 不一致影响用户信任 ([#116512](https://github.com/openclaw/openclaw/issues/116512))  
- **“插件安装无声失败 —— 无进度指示。”** → 缺乏反馈导致困惑 ([#150235](https://github.com/openclaw/openclaw/pull/150235))

> 💬 **情绪分析**：用户对**不可预测行为、糟糕错误提示、系统状态缺乏可见性**感到沮丧——尽管底层能力强大。

---

### **8. 待办事项监控**  
🔍 **长期未回应或关键事项需维护者关注**：

| 问题 | 年龄 | 严重性 | 状态 | 备注 |
|------|-----|----------|--------|-------|
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | 6 天前 | 🦞 钻石龙虾 (P1) | 已打开 | 清理路径中未处理的拒绝 —— **崩溃循环** |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | 1 天前 | 🦞 钻石龙虾 (P0) | 已打开 | 事件循环被饿死 —— **网关不可用** |
| [#150201](https://github.com/openclaw/openclaw/issues/150201) | 1 天前 | 🦞 钻石龙虾 (P0) | 已打开 | Windows 更新失败 —— **发布阻塞项** |
| [#145252](https://github.com/openclaw/openclaw/issues/145252) | 6 天前 | 🌊 非主流潮池 (P0) | 已打开 | 跟踪更新可靠性 —— **需协调** |
| [#136311](https://github.com/openclaw/openclaw/issues/136311) | 15 天前 | 🐚 白金寄居蟹 (P1) | 已打开 | 无法修复索引 —— **数据完整性风险** |

> 🔴 **关键缺口**：多个 **P0 漏洞已开放超过一周，尚无维护者认领或修复拉取请求**——反映出尽管社区活跃，仍存在**维护瓶颈**。

---

### ✅ **最终评估**  
**OpenClaw 当前处于高度紧张状态**：庞大的贡献者活动与严峻的稳定性挑战并存。尽管技术改进持续推进（如重构、性能修复），但**核心系统可靠性因未解决的 P0/P1 漏洞而受损**。若不立即解决**内存泄漏、启动回归与更新失败**问题，采用率将停滞。项目的未来取决于**快速评估、协同修复以及对下一稳定版本的透明沟通**。

👉 **建议行动**：  
- 优先修复 **#149538、#148529 和 #150201**  
- 在 24 小时内为所有 P0 问题分配维护者  
- 延迟 2026.9.5 发布直至上述问题解决  
- 发布紧急变更日志，详述已知问题与临时解决方案  

---  
*数据来源：GitHub — openclaw/openclaw (2026-09-17)*

---

## 横向生态对比

⚠️ 横向对比生成失败。

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# **赫尔墨斯代理项目简报 – 2026-09-17**

---

### **1. 今日概览**  
赫尔墨斯代理项目持续保持高度活跃，开发节奏强劲：**过去24小时内更新了50个问题和50个拉取请求**，显示出持续的工程推进势头。生态系统的重点在于稳定性、会话完整性以及平台特定的可靠性——尤其集中在并发执行、消息传递和回退逻辑方面。今日未发布新版本，表明团队正优先处理补丁而非版本迭代。尽管如此，关闭的拉取请求和解决的问题数量反映出在修复关键漏洞、提升桌面端、CLI及网关集成用户体验方面取得了显著进展。

---

### **2. 发布情况**  
截至2026-09-17，**未发布新版本**。最新版本仍为 **v0.21.3 (2026.9.14)**，该版本改进了零缩放行为和心跳处理机制。根据近期合并的拉取请求（涉及MoA计费透明度、看门狗修复及安全加固），维护者可能正在为即将到来的补丁或功能发布做准备。

---

### **3. 项目进展**  
过去一天中，**20个拉取请求被合并或关闭**，在多个关键领域取得显著进展：

- ✅ **会话与状态管理**：修复 `/branch` 中间回合的竞争条件问题 (#113210)，在 TUI/桌面端实现持久化会话追踪 (#113211)，以及处理异常 `NO_REPLY` 标记问题 (#113031)。
- ✅ **看板工作流稳定性**：多个拉取请求解决了过期工作进程申领（`_claim_is_live`、无PID回收）及任务状态误分类问题 (#113627, #113632, #113610)。
- ✅ **安全与合规性**：修复了 WhatsApp 桥接中的 `body-parser` 漏洞问题 (#112382)，文件写入保护机制从用户配置目录改为进程 HOME 目录 (#113628)，并增强了凭证隔离。
- ✅ **用户体验优化**：修复安装日志中乱码的 ANSI 字符问题 (#113213)，修正误导性的“网关推理不可用”警告提示 (#113216)，并移除过时的更新提示 (#113634)。
- ✅ **模型回退行为清晰化**：两个相关拉取请求明确了 MoA 回退逻辑——修正了提供方名称与模型别名的暴露问题 (#112525, #112623)。

这些合并表明，项目正朝着**健壮性、可观测性和用户体验打磨**的方向成熟发展，为潜在的 v0.22 版本做好准备。

---

### **4. 社区热点议题**  
社区关注的核心问题集中在**会话隔离**、**消息传递可靠性**以及**MoA 计费透明度**：

- 🔥 **#46303** – *并发会话相互污染*（8条评论）：影响桌面 GUI 用户的 P2 级别缺陷，共享内存与 Git 工作树导致会话间数据泄露。这对多会话工作流构成高严重性风险。
  - [GitHub 问题 #46303](https://github.com/nousresearch/hermes-agent/issues/46303)
- 🔥 **#113618** – *Telegram 停滞看门狗重建轮询器但永不恢复*（2条评论）：P1 级别问题，导致网关重启后“失聪”，需手动重启进程。用户报告在 Linux 集群上出现静默失败。
  - [GitHub 问题 #113618](https://github.com/nousresearch/hermes-agent/issues/113618)
- 🔥 **#113631** – *Discord 缺失消息补填无限重发相同消息*（0评论，但影响严重）：P2 级别缺陷，在重新连接时导致消息无限循环处理——对依赖消息连续性的 Discord 用户是重大隐患。
  - [GitHub 问题 #113631](https://github.com/nousresearch/hermes-agent/issues/113631)

上述顶级问题反映出对**系统韧性、状态一致性及跨平台实时协调**的日益增长的需求。

---

### **5. 错误与稳定性**  
今日报告的关键与中等严重性错误揭示了核心流程中的不稳定性：

| 严重程度 | 问题 | 摘要 | 补丁已提交？ |
|---------|-------|--------|--------|
| **P1** | [#113618](https://github.com/nousresearch/hermes-agent/issues/113618) | Telegram 网关在看门狗重建后“失聪”——无重启无法恢复 | ❌ 待处理 |
| **P1** | [#113031](https://github.com/nousresearch/hermes-agent/issues/113031) | `NO_REPLY` 标记触发警告泛滥，尽管其为有效静默信号 | ✅ 通过 PR #113031 修复（已关闭） |
| **P2** | [#46303](https://github.com/nousresearch/hermes-agent/issues/46303) | 并发会话共享内存/工作树 → 数据污染 | ❌ 待处理 |
| **P2** | [#112525](https://github.com/nousresearch/hermes-agent/issues/112525) | MoA 回退丢弃已解析的聚合器模型别名 | ✅ 在 PR #112525 中修复 |
| **P2** | [#112623](https://github.com/nousresearch/hermes-agent/issues/112623) | 即使使用真实 HTTP 客户端，`agent.provider` 仍显示为 `"moa"` | ✅ 在 PR #112623 中修复 |
| **P3** | [#113611](https://github.com/nousresearch/hermes-agent/issues/113611) | Kanban 重生保护机制在无状态转换情况下遗漏干净退出 | ❌ 待处理 |

> ⚠️ **显著回归**：多个拉取请求针对此前未发现的工作进程生命周期管理边缘情况，暗示任务编排架构存在更深层复杂性。

---

### **6. 功能请求与路线图信号**  
新兴趋势指向**更强的可见性、自动化能力以及更深的集成支持**：

- 🎯 **MoA 计费透明度**：多个问题（#112359, #112525, #112623）强调用户对回退期间计费归属的困惑。这表明未来版本亟需**更清晰的 UI 指示**与**成本归因日志记录**。
- 🧩 **插件生态扩展**：新增 `hud-teach` 插件目录 (#113635) 显示出向应用内引入**交互式学习工具**的推动力。
- 🔄 **定时任务失败报告**：PR #112426 指出失败报告缺失——用户希望当委派子任务失败时，定时任务能明显失败。此功能极可能在 v0.22 中优先处理。
- 📱 **平台特定优化**：针对 Telegram、Discord 及飞书的修复表明，团队仍在持续投入于**多平台一致性**与**消息保真度**。

> 🔮 **预测 v0.22 重点**：会话隔离、MoA 成本透明化、增强的定时任务监控，以及跨网关的主动健康检查。

---

### **7. 用户反馈摘要**  
来自用户的实际痛点包括：

- **桌面应用不稳定**：安装过程中日志乱码 (#112675)，会话状态闪烁 (#113029)，编辑组件异常 (#112944)。
- **成本认知混淆**：用户预期在 MoA 回退时由 Codex 承担费用，却意外收到实际账单——暴露出定价模型中反馈机制薄弱。
- **消息重复处理混乱**：Discord 用户报告在12小时内反复收到同一消息达24次，源于补填循环——严重损害信任。
- **静默失败**：许多用户反映失败任务在日志中显示成功，导致对自动化流程产生虚假信心。

> 💬 **满意度信号**：对修复视觉不一致问题（如 ANSI 转义码、模型徽章）的拉取请求普遍正面评价，表明用户重视精致的用户体验。

---

### **8. 后备清单关注点**  
若干长期存在或影响重大的问题仍未解决，亟需维护者关注：

- 🟡 **#46303** – 并发会话污染（8条评论，P2，2026-06-14）  
  - **状态**：开放，高风险，影响核心工作流完整性。  
  - **需采取行动**：优先开展隔离层设计评审与测试覆盖。

- 🟡 **#113631** – Discord 缺失消息补填循环（0评论，P2）  
  - **状态**：高影响，静默破坏消息历史。  
  - **需采取行动**：立即调查 `reply_to_mode: off` 锚点逻辑。

- 🟡 **#113618** – Telegram 网关看门狗重启后死锁（2条评论，P1）  
  - **状态**：对生产集群至关重要；需进程级恢复机制。  
  - **需采取行动**：审查 `停滞看门狗` 与 `轮询器重建` 的交互逻辑。

- 🟡 **#112382** – WhatsApp 桥接中易受攻击的 `body-parser`（3个中等安全通告）  
  - **状态**：安全相关，已在 PR #112382 中修复，但尚未合并。  
  - **需采取行动**：立即合并以防止供应链风险。

> ⏳ 这些问题代表了**技术债务积累**，可能阻碍企业或受监管环境下的采纳。

--- 

**简报生成时间**：2026-09-17 | 来源：[赫尔墨斯代理 GitHub](https://github.com/nousresearch/hermes-agent)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# **QwenPaw 项目简报 – 2026-09-17**

---

### **1. 今日概览**  
QwenPaw 保持高度活跃，开发节奏强劲：过去 24 小时内新增 **25 个问题** 和 **37 个拉取请求**，展现出强大的社区参与度和持续的工程推进力。项目正明显从个人 AI 助手向多租户、团队协作平台演进，这从对企业级功能（如 Hub 可扩展性、模型治理、访问控制）日益增长的关注可见一斑。尽管今日无新版本发布，但发布管道中已积累大量关键修复与功能增强，尤其集中在稳定性（内存溢出、SSE 流式传输）、安全性（shell 溢出规避）以及 UI/UX 优化方面。未发布新版本表明，v2.2.1 或 v2.2.2 版本即将推出，预计将聚焦于稳定近期变更。

---

### **2. 版本发布**  
❌ **今日未发布新版本**。  
上一个版本为 `v2.2.1`（参见 Issue #7799），修复了若干控制台显示错误，但未能解决核心稳定性问题。鉴于大量合并的 PR 涉及内存管理、流式传输可靠性与安全加固，预计即将推出 **补丁版本（v2.2.2）**，以解决：
- 内存溢出问题（Issue #7722）
- SSE 流失败（Issues #7813, #7814）
- shell 命令安全性（PR #7120）

> 🔗 *暂无发布说明 — 请关注 [GitHub Releases](https://github.com/agentscope-ai/QwenPaw/releases) 获取更新。*

---

### **3. 项目进展**  
✅ 今日共合并/关闭 **12 个拉取请求**，包含高影响力修复与基础架构改进：

| PR | 摘要 | 影响 |
|----|--------|--------|
| [#7805](https://github.com/agentscope-ai/QwenPaw/pull/7805) | 修复设置菜单中字体粗细不匹配问题 | UI 优化 |
| [#7783](https://github.com/agentscope-ai/QwenPaw/pull/7783) | 防止 ACP 回复重复/碎片化 | 核心代理可靠性 |
| [#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613) | 引入 OpenViking 内存插件作为可选组件 | 可扩展性与模块化 |
| [#7760](https://github.com/agentscope-ai/QwenPaw/pull/7760) | 允许内存任务在关闭时自动清空 | 稳定性与优雅退出 |
| [#6569](https://github.com/agentscope-ai/QwenPaw/pull/6569) | 在分离 TTY 后抑制 EIO/EPIPE 错误 | CLI 稳健性 |

这些 PR 反映出项目正向 **系统级韧性**、**模块化架构** 和 **用户端体验优化** 转型，尤其在桌面与 CLI 环境中表现突出。

---

### **4. 社区热点话题**  
🔥 **最活跃的 5 个问题/拉取请求**（按评论/点赞数排序）：

| 问题/拉取请求 | 标题 | 评论数 | 👍 | 链接 |
|---------|------|----------|-----|------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | QwenPaw Hub：多租户版路线图讨论 | 29 | 4 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/7318) |
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | 通过三条复合路径导致容器内存溢出 | 5 | 0 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/7722) |
| [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | 控制台在懒加载失败后无法恢复 | 4 | 0 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/7815) |
| [#7814](https://github.com/agentscope-ai/QwenPaw/issues/7814) | SSE 发送裸 `null` payload → 流中断 | 2 | 0 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/7814) |
| [#7813](https://github.com/agentscope-ai/QwenPaw/issues/7813) | SSE 中出现裸 `null` 帧导致流冻结 | 2 | 0 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/7813) |

🔍 **深层需求**：  
- **企业就绪性**（Hub、多租户、治理）是首要优先事项（Issue #7318）。  
- **UI/UX 可靠性**面临压力——用户报告未处理的错误导致导航与流中断。  
- **流式传输稳健性** 是系统性痛点：非法事件（`null`）引发级联失败，表明需在通道层加强校验。

---

### **5. 缺陷与稳定性**  
🚨 **今日报告的关键稳定性问题**（按严重程度排序）：

| 问题 | 严重程度 | 描述 | 修复 PR？ |
|------|----------|-------------|--------|
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | 严重 ⚠️ | 三种复合路径导致容器 OOM：无界缓冲区、心跳堆叠、死亡循环门禁规避 | ✅ 已存在修复死亡循环的 PR #7808；其余待处理 |
| [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | 高 | 控制台在懒加载失败后卡在错误界面，需完全重启 | ❌ 尚无修复 PR |
| [#7814](https://github.com/agentscope-ai/QwenPaw/issues/7814) | 高 | SSE 发送无效 `null` payload → 导致流中断 | ✅ PR #7811 修复上下文环；流修复待定 |
| [#7813](https://github.com/agentscope-ai/QwenPaw/issues/7813) | 高 | SSE payload 中出现裸 `null` 冻结整个流 | ✅ PR #7814 部分解决根本原因 |
| [#7799](https://github.com/agentscope-ai/QwenPaw/issues/7799) | 中 | 通过 `send_file_to_user` 发送的图片在响应后消失 | ✅ 已关闭 — 表明 v2.2.1 出现回归 |

💡 **模式分析**：流式传输、内存管理与 UI 恢复是反复出现的痛点。修复正在推进，但尚未统一，若缺乏协调将存在回归风险。

---

### **6. 功能请求与路线图信号**  
🚀 **用户请求中的新兴趋势**：

| 功能 | 请求来源 | 优先级信号 |
|-------|----------------|-----------------|
| **多租户 Hub**（团队/组织支持） | Issue #7318（29 条评论，4 个点赞） | ✅ 路线图最高优先级项 |
| **任务完成提醒**（底部栏橙色状态） | Issue #7800（1 条评论） | 💡 用户可见度高，实现复杂度低 |
| **实时语音聊天** | PR #7785（feat/voice） | 🎯 开发者高度关注 |
| **工具审批卡片国际化支持** | Issue #7809 | 🌍 全球用户需求 |
| **聊天模式选择器：讨论模式 vs 执行模式** | Issue #7801 | 🧠 用户需要更清晰的代理行为提示 |
| **更简洁输出：仅保留最终产物** | Issue #7797 | 📦 用户对冗余信息感到困扰 |

🔮 **预测下一个版本（v2.2.2）**：很可能包含：
- Hub MVP（模型网关、成员治理、使用仪表盘 —— PR #7779）
- 语音聊天（PR #7785）
- 关键 UI 元素的 i18n 支持
- 流式传输鲁棒性修复

---

### **7. 用户反馈摘要**  
🗣️ **来自问题与拉取请求的真实用户痛点**：

- **“我无法在团队中使用”** —— 对多用户/多租户支持的持续呼吁（Issue #7318）。
- **“大工作区下会崩溃”** —— 文件监听导致服务器冻结（PR #7725）。
- **“发送后图片消失”** —— 影响工作流信任（Issue #7799）。
- **“临时文件太多”** —— 用户希望输出干净，仅保留最终结果（Issue #7797）。
- **“启动后斜杠命令作用于错误会话”** —— 造成混淆的用户体验（Issue #7812）。

🎯 **用户满意度**：两极分化。  
- **满意**：对模块化插件（OpenViking、内存提炼）表示认可。  
- **不满**：对不可恢复的 UI 状态、断裂的流、任务状态反馈不足感到沮丧。

---

### **8. 待办清单监控**  
⚠️ **长期未回应或高影响项，亟需维护者关注**：

| 问题 | 状态 | 重要性 | 需采取行动 |
|------|--------|----------------|---------------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | 打开，29 条评论 | 定义 QwenPaw 作为团队平台的未来 | 优先规划路线图 |
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | 打开，5 条评论 | 系统性内存泄漏风险 —— 可影响生产部署 | 分配专职工程师 |
| [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | 打开，4 条评论 | 不可恢复的 UI 状态 —— 影响可用性 | 下一个补丁内修复 |
| [#7804](https://github.com/agentscope-ai/QwenPaw/issues/7804) | 已关闭，但描述模糊 | “管理”功能缺乏清晰定义 —— 需明确范围 | 重新细化描述或重新打开 |
| [#7730](https://github.com/agentscope-ai/QwenPaw/issues/7730) | 已关闭，未解决 | 离线回退失效 —— 削弱可靠性 | 审查修复逻辑 |

📌 **建议**：维护者应 **立即处理 #7318 和 #7722**，以维持社区信任并引导下一阶段开发。

---

> ✅ **项目健康评分**：**高活跃度，中等稳定性**  
> 🛠️ **下一步行动**：集中精力稳定 v2.2.2 版本，完成核心修复，随后加速 Hub 开发。  
> 🔗 **全程追踪**：[GitHub 仓库](https://github.com/agentscope-ai/QwenPaw) | [讨论区](https://github.com/agentscope-ai/QwenPaw/discussions)

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# **ZeroClaw Project Digest**  
**Date:** 2026-09-17  
**Repository:** [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

### **1. Today's Overview**

The ZeroClaw project remains highly active, with **36 new issues and 50 pull requests updated in the last 24 hours**, indicating strong ongoing development momentum across security, architecture, and core runtime stability. A significant focus is on **security hardening (RUSTSEC-2026-0247), context management, and agent lifecycle coordination**, with multiple high-risk PRs targeting critical paths like plugin admission, token budgeting, and RPC enforcement. Despite no new releases, the velocity of code changes—especially in `runtime`, `agent`, and `gateway`—suggests a pre-release stabilization phase for upcoming features.

---

### **2. Releases**

❌ **No new releases** were published in the past 24 hours.  
The project maintains an active development cadence without formal versioning updates, consistent with its current focus on internal refactoring, security fixes, and feature integration ahead of a potential v0.9.0 milestone.

---

### **3. Project Progress**

#### ✅ **Merged/Closed PRs (Today)**  
While no PRs were merged or closed today, several high-impact PRs are **in progress or awaiting review**, signaling near-term delivery:

- **[PR #10134](https://github.com/zeroclaw-labs/zeroclaw/pull/10134)** – *Fix: Keep agent dispatch panic-free*  
  → Converted 17 panic points to error returns/fail-closed fallbacks; critical for runtime stability.

- **[PR #10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259)** – *feat(security): enforce authenticated principals on RPC*  
  → Part of a staged rollout for secure RPC access using OIDC and peercred; depends on prior stages.

- **[PR #10879](https://github.com/zeroclaw-labs/zeroclaw/pull/10879)** – *feat(zerocode): combine Sessions Queue and Plan in one dock*  
  → Improves UX by consolidating UI components; already approved and in review.

> 📌 *Note: Several large PRs (e.g., #10621, #10911) are stacked and require upstream merges before review can proceed.*

---

### **4. Community Hot Topics**

#### 🔥 **Top Issues (by comment count)**

| Issue | Summary | Link |
|------|--------|------|
| [#10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) | Rust anti-slop policy debt remediation — 16 comments | [Issue #10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Maintainer decision queue for RFCs/design issues — 15 comments | [Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) | Remove unmaintained `bitmaps` advisory (RUSTSEC-2026-0247) — 5 comments | [Issue #9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) |

> 💡 **Underlying Need**: These reflect growing pressure around **code hygiene, governance, and dependency security**. The Rust anti-slop tracker (#10118) shows systemic technical debt that must be addressed before future scalability. The maintainer decision queue (#8692) signals a need for better triage processes as contributor volume increases.

#### 🔥 **Top PRs (by activity)**

| PR | Summary | Link |
|----|--------|------|
| [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) | Coordinate agent lifecycle mutations via shared live-config authority — 0 comments, high risk/size | [PR #10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) |
| [#10911](https://github.com/zeroclaw-labs/zeroclaw/pull/10911) | Publish atomic live revisions — stacked on #10621, 3,253 lines added | [PR #10911](https://github.com/zeroclaw-labs/zeroclaw/pull/10911) |
| [#10525](https://github.com/zeroclaw-labs/zeroclaw/pull/10525) | Re-add browser enrollment frontdoor (relay-terminated) — 0 comments | [PR #10525](https://github.com/zeroclaw-labs/zeroclaw/pull/10525) |

> 💡 **Pattern**: High-impact architectural changes are being coordinated through **stacked, modular PRs** (e.g., config, RPC, agent lifecycle), suggesting a deliberate effort to manage complexity during major refactorings.

---

### **5. Bugs & Stability**

#### ⚠️ **High-Risk Bugs Reported (Severity S2–S3)**

| Issue | Description | Severity | Status | Fix PR? |
|------|-------------|----------|--------|---------|
| [#10885](https://github.com/zeroclaw-labs/zeroclaw/issues/10885) | Tool-returned images disappear after unrelated tool call in same turn | S2 | In-progress | ❌ No PR yet |
| [#10887](https://github.com/zeroclaw-labs/zeroclaw/issues/10887) | Non-vision capability gate fails on image markers with no loadable image | S2 | Accepted | ❌ No PR yet |
| [#10912](https://github.com/zeroclaw-labs/zeroclaw/issues/10912) | Streaming text guard suppresses replies when prose quotes tool-result objects | S2 | Open | ❌ No PR yet |
| [#10883](https://github.com/zeroclaw-labs/zeroclaw/issues/10883) | Telegram media-group test times out under parallel runtime job | S2 | Accepted | ❌ No PR yet |

> 🔴 **Critical Insight**: Multiple bugs center on **context preservation and state consistency across tool calls and sessions**, particularly in multi-tool, async, or streaming scenarios. This indicates a **fragile state model** in the turn engine that needs deeper refactoring.

---

### **6. Feature Requests & Roadmap Signals**

#### 🎯 **Emerging Features (Likely in Next Release)**

| Feature | Status | Indicators |
|-------|--------|-----------|
| **Async function tools with OpenAI responses** ([#10704](https://github.com/zeroclaw-labs/zeroclaw/issues/10704)) | Accepted, priority P2 | Enables non-blocking tool execution; aligns with async-first design trends |
| **SOP pause/resume controls (web, zerocode, RPC)** ([#9687](https://github.com/zeroclaw-labs/zeroclaw/issues/9687)) | Accepted, blocked | Core to operational control; likely in v0.9.0 |
| **OCI-compliant registries for WASM plugins** ([#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497)) | Accepted, RFC | Long-term storage/distribution strategy; signals maturity in plugin ecosystem |
| **Atomic config publication & per-target apply tracking** ([#10892](https://github.com/zeroclaw-labs/zeroclaw/issues/10892)) | In-progress | Foundation for live configuration management — key for production use |

> 📈 **Prediction**: The next release will emphasize **operational reliability**, **plugin supply chain integrity**, and **user-facing control** (SOPs, config, async tools), with minimal breaking changes.

---

### **7. User Feedback Summary**

User pain points are emerging from real-world usage patterns:

- **Context loss** in multi-tool turns is a recurring theme (e.g., image disappearance, failed message retention).
- **Local model setup** remains frustrating due to lack of centralized guidance (see [#9549](https://github.com/zeroclaw-labs/zeroclaw/issues/9549)).
- **Slack/Telegram integration** suffers from flaky tests and limited scale-to-zero support.
- **ZeroCode UX** is being refined with UI consolidation (e.g., #10879), but feedback suggests it’s still fragmented.

> 👍 **Positive Signal**: Users appreciate proactive security measures (e.g., RUSTSEC warnings) and are engaged in RFCs and design discussions.

---

### **8. Backlog Watch**

Several **high-priority, long-standing issues** require maintainer attention:

| Issue | Priority | Age | Status | Notes |
|------|----------|-----|--------|-------|
| [#10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) | P2 | 29 days | In-progress | Rust anti-slop cleanup — critical for maintainability |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | P2 | 54 days | Accepted | Decision queue — essential for governance |
| [#9677](https://github.com/zeroclaw-labs/zeroclaw/issues/9677) | P2 | 54 days | Accepted | Retire legacy command-catalogue fallback — blocker for clean migration |
| [#9679](https://github.com/zeroclaw-labs/zeroclaw/issues/9679) | P3 | 54 days | Accepted | Re-evaluate `act` artifact support — depends on external tooling |

> ⏳ **Call to Action**: These issues represent **governance, tech debt, and compatibility bottlenecks** that could stall future releases if not prioritized.

---

### ✅ **Final Assessment**

ZeroClaw is in a **critical stabilization and architectural refinement phase**. While no releases have been made, the project is advancing rapidly in **security, modularity, and operational control**. High-risk bugs indicate fragile state handling, but corresponding PRs are actively addressing root causes. The community is engaged in meaningful design discussions, and the roadmap reflects a shift toward **production readiness** over novelty.

> 🔗 **Recommendation**: Prioritize resolving **[#10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118)** and **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** to enable sustainable growth and faster decision-making.

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*