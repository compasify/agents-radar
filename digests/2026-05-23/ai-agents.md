# OpenClaw 生态日报 2026-05-23

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-23 00:24 UTC

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

# OpenClaw 项目动态日报 | 2026-05-23

---

## 1. 今日速览

OpenClaw 今日保持**极高活跃度**，24小时内 Issues 与 PR 各更新 500 条，形成 433:67 的开闭比与 386:114 的待合并/已处理比，显示社区讨论旺盛但合并吞吐存在瓶颈。**无新版本发布**，核心工作集中在稳定性修复、安全加固与架构重构三大主线。值得关注的是，steipete 发起的两大重构 PR（运行时内部化、SQLite 状态迁移）正在并行推进，可能对项目架构产生深远影响。

---

## 2. 版本发布

**无新版本发布**

今日未发布任何 Release。最新功能与修复需通过源码或预发布渠道获取。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#65212](https://github.com/openclaw/openclaw/pull/65212) | SYU8384 | QMD 自定义集合路径规范化：修复直接指向文件（非目录）的配置项被错误处理的问题 | ✅ 已合并 |
| [#81304](https://github.com/openclaw/openclaw/pull/81304) | MoerAI | 设置向导保留现有主模型：修复应用提供商认证时默认模型被静默覆盖的回归 | ✅ 已合并 |
| [#80882](https://github.com/openclaw/openclaw/pull/80882) | jameswniu | WhatsApp 连接保活：通过 presence keepalive 消除 ~30 分钟空闲断连，解决 499/428 双故障模式 | ✅ 已合并 |
| [#72262](https://github.com/openclaw/openclaw/pull/72262) | Iman-Sharif | WhatsApp 408 断开故障排查手册：补充 Baileys 特定错误签名诊断指南 | ✅ 已合并 |
| [#9303](https://github.com/openclaw/openclaw/pull/9303) | nikolasdehor | OpenAI Whisper 脚本执行权限修复 | ✅ 已合并（stale 关闭） |

### 架构级推进

- **[#85341](https://github.com/openclaw/openclaw/pull/85341)** — steipete 的 **OpenClaw 代理运行时内部化**：将原 Pi 实现纳入 OpenClaw 自有命名空间，涉及 50+ 扩展的重命名与依赖刷新，为后续独立演进铺路
- **[#81402](https://github.com/openclaw/openclaw/pull/81402)** — 同作者的 **运行时状态 SQLite 迁移**：将分散的 JSON/JSONL/锁文件统一至类型化 SQLite，此前 #78595 曾意外直接合入后被回滚，本次为重新审阅后的安全推进

---

## 4. 社区热点

### 讨论最激烈的 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 链接 |
|:---|:---|:---:|:---:|:---|:---|
| 🥇 | Linux/Windows Clawdbot Apps | 105 | 75 | **跨平台原生客户端缺口**：macOS/iOS/Android 已有，Linux/Windows 长期缺失，企业部署受阻 | [#75](https://github.com/openclaw/openclaw/issues/75) |
| 🥈 | Prebuilt Android APK releases | 24 | 1 | 降低 Android 使用门槛：源码在但无预编译包，普通用户无法直接安装 | [#9443](https://github.com/openclaw/openclaw/issues/9443) |
| 🥉 | Subagent completion silently lost | 14 | 0 | **生产级可靠性**：子代理任务超时/失败无重试、无通知、无自动恢复，导致结果静默丢失 | [#44925](https://github.com/openclaw/openclaw/issues/44925) |
| 4 | Slack Block Kit support | 13 | 0 | 富交互消息：从纯文本升级至结构化卡片，满足 CRM/数据查询等企业场景 | [#12602](https://github.com/openclaw/openclaw/issues/12602) |
| 5 | Masked Secrets | 12 | 4 | **安全加固**：防止代理通过提示注入提取 API 密钥，金融/安全场景刚需 | [#10659](https://github.com/openclaw/openclaw/issues/10659) |

### 热点分析

- **#75 的 105 评论与 75 👍** 形成鲜明对比：这是 2026 年 1 月创建的老 Issue，今日仍居榜首，反映**跨平台支持是持续未满足的底层需求**，可能制约企业采用
- **安全类议题密集上榜**（#10659, #13583, #56349, #12678）：社区对"代理可访问密钥"的默认信任模型日益不安，推动"硬策略门"（hard gates）与"不可绕过出站策略"等机制需求

---

## 5. Bug 与稳定性

### P1 严重级别

| Issue | 描述 | 影响 | Fix PR | 链接 |
|:---|:---|:---|:---:|:---|
| `openclaw doctor --fix` 性能回归 4-5x | 2026.5.20 会话快照路径遍历瓶颈 | 运维效率崩溃（55s→229s+） | ❌ 待排查 | [#85333](https://github.com/openclaw/openclaw/issues/85333) |
| sessions.json 无界增长导致 Gateway OOM | skillsSnapshot 每会话重复存储，无临时会话修剪 | 生产环境内存泄漏、崩溃循环 | ❌ 待修复 | [#55334](https://github.com/openclaw/openclaw/issues/55334) |
| 跨用户隐私泄漏 via semantic recall | `relevant-memories` 未按 sender_id 隔离 | **P0 安全事件**：用户 A 记忆注入用户 B 上下文 | ✅ #85240 已关闭（安全修复） | [#85240](https://github.com/openclaw/openclaw/issues/85240) |
| Control UI 重复显示助手回复 | 2026.4.21 回归，每条消息显示两次 | 用户体验严重受损 | ❌ 待修复 | [#71992](https://github.com/openclaw/openclaw/issues/71992) |
| ACP 父会话等待子完成时卡住 | 需手动刷新 UI 恢复 | 多代理协作流程中断 | ❌ 待修复 | [#52249](https://github.com/openclaw/openclaw/issues/52249) |

### P2 重要级别

| Issue | 描述 | 链接 |
|:---|:---|:---|
| Safeguard compaction 忽略自定义模型配置 | 使用会话主模型而非配置的 compaction.model | [#57901](https://github.com/openclaw/openclaw/issues/57901) |
| CLI-backed helper 路径绕过 CLI 分发 | 嵌入式/API 路径被意外使用 | [#57326](https://github.com/openclaw/openclaw/issues/57326) |
| 会话写锁竞争：异步释放可删除新获取的锁 | 并发场景锁状态损坏 | [#57019](https://github.com/openclaw/openclaw/issues/57019) |
| 配置警告每次重载重复记录 | 日志 spam，千级重复条目 | [#25574](https://github.com/openclaw/openclaw/issues/25574) |
| @openclaw/codex 模块解析失败 | 需本地安装 openclaw 才能工作 | [#83964](https://github.com/openclaw/openclaw/issues/83964) |

### 今日新报关键 Bug

- **[#85333](https://github.com/openclaw/openclaw/issues/85333)**：`openclaw doctor --fix` 性能回归 — **5 月 22 日新报**，已标记 `needs-live-repro`，需紧急定位 5.19→5.20 的变更
- **[#85240](https://github.com/openclaw/openclaw/issues/85240)**：跨用户隐私泄漏 — **5 月 22 日新报 P0 安全事件**，当日即关闭，修复已落地

---

## 6. 功能请求与路线图信号

### 高概率纳入下一版本（已有 PR 或强信号）

| 功能 | 状态 | 关键 PR/Issue |
|:---|:---|:---|
| **SQLite 运行时状态迁移** | 🔄 大型重构中 | [#81402](https://github.com/openclaw/openclaw/pull/81402) |
| **运行时内部化/品牌独立** | 🔄 代码审阅中 | [#85341](https://github.com/openclaw/openclaw/pull/85341) |
| **Gateway 会话内存上限** | 🔄 待证明 | [#79068](https://github.com/openclaw/openclaw/pull/79068) |
| **WhatsApp 连接稳定性** | ✅ 已合并 | [#80882](https://github.com/openclaw/openclaw/pull/80882) |
| **Codex API Key 粘贴认证** | 🔄 待维护者审阅 | [#85533](https://github.com/openclaw/openclaw/pull/85533) |
| **QQBot 工具进度流式传输** | 🔄 待维护者审阅 | [#85258](https://github.com/openclaw/openclaw/pull/85258) |

### 需求强烈但实现路径不明

| 功能 | 社区热度 | 阻塞因素 |
|:---|:---|:---|
| Linux/Windows 原生应用 | 🔥🔥🔥 最高 | 资源投入、跨平台框架选型 |
| 预编译 Android APK | 🔥🔥 高 | CI/CD 发布流程、签名机制 |
| 密钥掩码系统（Masked Secrets） | 🔥🔥 高 | 架构决策：运行时注入 vs 静态替换 |
| 硬策略门（Pre-response hooks） | 🔥🔥 高 | 与现有软提示机制的兼容性 |
| 文件系统沙箱 | 🔥 中高 | 配置模型设计、向后兼容 |

### 模型生态更新

- **[#80380](https://github.com/openclaw/openclaw/issues/80380)**：Gemini 3.1 Flash-Lite GA 替换 preview 版本 — 谷歌官方已发布，OpenClaw 默认模型需跟进

---

## 7. 用户反馈摘要

### 真实痛点

> *"子代理任务完成后，结果就消失了。没有错误，没有通知，就像从来没发生过。"*
> — [#44925](https://github.com/openclaw/openclaw/issues/44925) IIIyban，生产环境 Telegram bot 运营者

> *"每次运行 doctor --fix 要等 4 分钟，以前只要 1 分钟。这在生产 VPS 上不可接受。"*
> — [#85333](https://github.com/openclaw/openclaw/issues/85333) samson1357924，Oracle Cloud 部署

> *"我们把 openclaw.json 提交到 git，因为配置太复杂了，但里面全是明文密钥。"*
> — [#13610](https://github.com/openclaw/openclaw/issues/13610) trevorgordon981，隐含于密钥管理需求

### 场景驱动需求

| 场景 | 代表 Issue | 用户画像 |
|:---|:---|:---|
| 金融/量化交易合规 | [#13583](https://github.com/openclaw/openclaw/issues/13583), [#10659](https://github.com/openclaw/openclaw/issues/10659) | 需要**机械保证**而非"尽力而为"的企业用户 |
| 多代理团队协作 | [#52249](https://github.com/openclaw/openclaw/issues/52249), [#56692](https://github.com/openclaw/openclaw/issues/56692) | Telegram/Discord 群组中的多机器人部署 |
| 云原生/容器化部署 | [#13597](https://github.com/openclaw/openclaw/issues/13597), [#13616](https://github.com/openclaw/openclaw/issues/13616) | 需要 AWS ECS/Lambda 指南和备份恢复能力的 DevOps |
| 无障碍使用 | [#9637](https://github.com/openclaw/openclaw/issues/9637) | 依赖屏幕阅读器的视障开发者 |

### 满意度信号

- WhatsApp 保活修复 [#80882](https://github.com/openclaw/openclaw/pull/80882) 合并：个人账号用户长期受 ~30 分钟断连困扰，此修复直接解决双故障模式
- 设置向导保留模型 [#81304](https://github.com/openclaw/openclaw/pull/81304)：避免认证流程意外破坏用户精心调优的模型配置

---

## 8. 待处理积压

### 需维护者紧急关注

| Issue/PR | 创建时间 | 阻塞天数 | 风险 | 行动建议 |
|:---|:---|:---:|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows 应用 | 2026-01-01 | **143 天** | 企业采用壁垒 | 明确路线图或社区贡献指南 |
| [#6731](https://github.com/openclaw/openclaw/issues/6731) Safe/Unsafe ClawdBot | 2026-02-02 | **111 天** | 安全架构方向 | 与 Rust 重写讨论解耦，聚焦沙箱机制 |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) 动态模型发现 | 2026-02-06 | **107 天** | OpenRouter 等新型号无法即用 | 评估 #85549 等 PR 是否覆盖 |
| [#47090](https://github.com/openclaw/openclaw/pull/47090) 会话归档 | 2026-03-15 | **70 天** | UI 债务累积 | 要求提供 Telegram 可见证明或降级处理 |
| [#83535](https://github.com/openclaw/openclaw/pull/83535) WhatsApp QA 成本优化 | 2026-05-18 | **5 天** | XL 规模 PR 审阅瓶颈 | 拆分 WhatsApp 运行时懒加载与 QA 重试逻辑 |

### 合并队列健康度

- **386 待合并 PR** 中，大量标记 `📣 needs proof` 或 `⏳ waiting on author`
- **关键瓶颈**：`triage: needs-real-behavior-proof` 和 `mantis: telegram-visible-proof` 标签的验证要求可能拖慢迭代
- **建议**：对安全修复（如 #85240 模式）建立快速通道，区分"功能证明"与"安全修复证明"的标准

---

*日报基于 OpenClaw GitHub 公开数据生成。所有链接指向 github.com/openclaw/openclaw。*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析 | 2026-05-23

---

## 1. 生态全景

个人 AI 助手开源生态正处于**从"单点工具"向"平台化基础设施"跃迁的关键期**。头部项目日均 30-50 条 PR/Issue 的高频迭代表明技术范式尚未收敛，WhatsApp/WebSocket 等渠道协议适配、多模态视觉路由、子代理协作机制成为共同攻坚点。安全与隐私从"最佳实践"升格为"架构刚需"——密钥掩码、SSRF 防护、跨用户记忆隔离等议题密集涌现。与此同时，容器化部署成为默认假设，Proxmox/LXC/Docker 嵌套等边缘场景的稳定性缺口暴露生产化落地的真实摩擦。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 合并/关闭 | 待合并 | 新版本 | 健康度评估 |
|:---|:---:|:---:|:---:|:---:|:---:|:---|
| **OpenClaw** | 500 | 500 | 67 PR / 433 Issue | 386 PR | ❌ | 🟡 讨论旺盛但合并瓶颈严重（386:114 待处理比），架构重构期 |
| **Hermes Agent** | 50 | 50 | 9 PR / ~46 Issue | 41 PR | ❌ | 🟡 极高活跃度，82% PR 待合并，P1 Bug 响应快但积压增长 |
| **ZeroClaw** | 37 | 50 | 14 PR / 7 Issue | 36 PR | ❌ | 🟡 功能冲刺期，新增 4 个 S1 Bug，渠道稳定性承压 |
| **NanoClaw** | 6 | 31 | 28 PR / 2 Issue | 3 PR | ❌ | 🟢 合并率 90%，Apple Container 技能链断裂需紧急处理 |
| **IronClaw** | 23 | 50 | 14 PR / 4 Issue | 36 PR | ❌ | 🟡 Reborn 重构冲刺，Nightly E2E 失败 12 天未解 |
| **CoPaw (QwenPaw)** | 24 | 23 | 10 PR / 7 Issue | 13 PR | ❌ | 🟡 通道修复快，但 #4620 历史消失 P0 Bug 无 PR，数据信任危机 |
| **Moltis** | 8 | 9 | 9 PR / 7 Issue | **0** | ❌ | 🟢 **唯一零积压**，100% 合并率，质量冲刺型迭代 |
| **LobsterAI** | 1 | 21 | 12 PR / ~1 Issue | 9 PR | ✅ 5.22 | 🟡 日更节奏，内部主导，外部贡献 45 天 stale |
| **NanoBot** | 7 | 20 | 12 PR / 3 Issue | 8 PR | ❌ | 🟢 节奏密集覆盖安全/生态/国际化，#3028 心跳问题 44 天未根治 |
| **PicoClaw** | 3 | 8 | 4 PR / 7 Issue | 4 PR | Nightly | 🟢 稳定维护期，Stale 清理释放带宽，架构扩展信号显现 |
| **NullClaw** | 0 | 4 | **0** / 0 | 4 PR | ❌ | 🔴 **完全停滞**，46 天 PR 积压，维护者 review 带宽枯竭 |
| **TinyClaw** | 0 | 0 | 0 | 0 | ❌ | ⚫ 无活动 |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | ❌ | ⚫ 无活动 |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | 24h 500 Issue + 500 PR，绝对量级第一 | Hermes/ZeroClaw/IronClaw 约 50-100，小一个数量级 |
| **合并吞吐** | 386:114 待合并/已处理比，**严重瓶颈** | Moltis 0 积压、NanoClaw 3 待合并，效率差距显著 |
| **技术路线** | 运行时内部化（#85341）+ SQLite 状态迁移（#81402），**架构深度重构** | 多数项目聚焦功能增量，OpenClaw 敢于底层变革 |
| **渠道覆盖** | macOS/iOS/Android 优先，Linux/Windows 长期缺失（#75，143 天） | NanoClaw/ZeroClaw 全平台覆盖，Moltis 容器化跨平台 |
| **安全模型** | "代理默认可访问密钥"受质疑，硬策略门需求强烈 | IronClaw Reborn 从架构层设计 secrets/egress 基质；NanoBot 已合并 SSRF 修复 |
| **企业就绪度** | 文档复杂度高（用户称"openclaw.json 提交到 git，全是明文密钥"） | Moltis Vault 可选禁用降低门槛；NanoClaw 权限模型细化到 group 级别 |

**核心差异**：OpenClaw 是**"最大公约数"平台**——功能最广、社区最大、但合并效率与跨平台公平性成为规模代价。其 SQLite 迁移和运行时内部化若成功，将定义下一代 Agent 运行时标准；若失败，则成为技术债务典型案例。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 | 紧迫度 |
|:---|:---|:---|:---:|
| **WhatsApp 协议稳定性** | OpenClaw, ZeroClaw, PicoClaw, NanoClaw | 服务器端协议升级后消息中断、QR 码渲染、连接保活、认证循环 | 🔴 |
| **密钥/凭证安全模型** | OpenClaw, IronClaw, LobsterAI, Moltis, NanoClaw | 掩码系统、环境变量注入、Vault 集成、手动 token 不流经日志 | 🔴 |
| **子代理/多 Agent 协作** | OpenClaw, LobsterAI, PicoClaw, IronClaw | 结果静默丢失、可视化调试、持久化、对等通信协议、父子生命周期 | 🟡 |
| **容器化部署鲁棒性** | Moltis, NanoClaw, ZeroClaw | Docker/Podman 嵌套场景、挂载检测、rootless 权限、媒体读取回退 | 🟡 |
| **推理模型/国产模型适配** | CoPaw, NanoBot, PicoClaw | DeepSeek thinking 字段、MiniMax XML 格式、Gemini 参数映射、Qwen 配置 | 🟡 |
| **TTS/语音通道质量** | Moltis, NanoBot | 音频格式治理、提供商兼容性、电话交互可靠性 | 🟢 |
| **可观测性/诊断** | OpenClaw, ZeroClaw, NanoBot | doctor 工具性能、OTel 链路追踪、错误信息精细化 | 🟢 |

---

## 5. 差异化定位分析

| 项目 | 核心侧重 | 目标用户 | 技术架构特征 |
|:---|:---|:---|:---|
| **OpenClaw** | 通用 Agent 平台，渠道生态最广 | 进阶开发者、多场景部署 | 模块化扩展，JSON/JSONL→SQLite 迁移中，TypeScript 为主 |
| **Hermes Agent** | 桌面控制 + 跨平台原生体验 | 个人自动化、多 IM 管理 | Rust 核心，Kanban 工作流，state.db WAL 可靠性攻坚 |
| **IronClaw** | 企业级 Reborn 重构，安全合规 | 企业 SaaS、多租户场景 | 分层架构（M1-M4），WASM/MCP/Native 三态工具，Rust |
| **Moltis** | 语音/电话优先，容器原生 | 客服自动化、电话机器人 | Elixir/OTP，Twilio 深度集成，Vault 可选，Proxmox 适配 |
| **NanoClaw** | Claude/Codex 生态深度绑定 | AI 编程助手用户 | Apple Container 技能链，bun 运行时，group 级权限 |
| **CoPaw (QwenPaw)** | 国产模型生态 + 插件市场 | 中文开发者、钉钉/微信企业用户 | Python，Tauri Desktop，多通道（钉钉/飞书/微信） |
| **LobsterAI** | 子代理可视化 + 模型可配置 | 产品化桌面用户 | Electron，SQLite 持久化，OpenClaw gateway 依赖 |
| **ZeroClaw** | 终端原生（TUI）+ 记忆自主 | 开发者极客、自托管用户 | Rust，Ratatui，Dream Mode 离线学习，MCP 过滤 |
| **NanoBot** | WebUI 体验 + 本地优先 | 轻量用户、Ollama 生态 | 技能路由 BM25 优化，CLI Apps 生态，国际化 |
| **PicoClaw** | 嵌入式/边缘部署 | IoT 网关、ARM 设备 | Go，Seahorse 记忆，请求级上下文策略，轻量 |

---

## 6. 社区热度与成熟度

| 阶段 | 项目 | 特征 |
|:---|:---|:---|
| **🔥 快速迭代期** | Hermes Agent, ZeroClaw, IronClaw, NanoClaw | 50+ 日活，新功能密集着陆，S1 Bug 伴随增长，架构债务显性化 |
| **⚡ 质量巩固期** | Moltis, NanoBot, PicoClaw | 合并率高或 stale 清理主动，聚焦稳定性、安全、开发者体验 |
| **🛠️ 重构阵痛期** | OpenClaw, LobsterAI | 大规模架构变更（SQLite/运行时内部化/Subagent 管道），合并瓶颈 |
| **🚨 维护危机期** | NullClaw | 零活动，46 天 PR 积压，贡献者流失风险 |
| **💤 休眠期** | TinyClaw, ZeptoClaw | 无 24h 活动，需观察是否项目终止或迁移 |

**关键洞察**：Moltis 的 100% 合并率与零积压是**流程成熟度标杆**；OpenClaw 的 386 待合并 PR 是**规模不经济的警示**——需建立安全修复快速通道、区分"功能证明"与"安全修复证明"标准。

---

## 7. 值得关注的趋势信号

| 趋势 | 证据 | 对开发者的价值 |
|:---|:---|:---|
| **"容器化优先"成为默认，但边缘场景测试不足** | Moltis #977 Proxmox/LXC 嵌套、NanoClaw #2590 Ubuntu 本地调试地狱 | 设计时需将容器环境适配从"边缘情况"提升为"一等公民"测试目标；提供 DevContainer/Codespaces 标准化路径 |
| **"配置即服务"体验决定采用率** | CoPaw #4474 ChatGPT-5.5 "配置对了但不工作"、OpenClaw #81304 模型被静默覆盖 | 配置变更需显式确认、版本化、可审计；避免"静默覆盖"破坏用户信任 |
| **国产模型适配从"兼容"走向"一等公民"** | CoPaw DeepSeek/MiniMax 系列、PicoClaw #2928 DeepSeek thinking 字段、NanoBot Ollama 原生图像 | 需建立国产模型专项测试矩阵，thinking/XML/多模态格式差异大 |
| **事件驱动架构替代拉取模式** | LobsterAI #2036 请求 `agent:turn`/`agent:loop` 事件、IronClaw WebUI 幂等性设计 | 实时落盘、外部审计、进度推送需要标准化事件契约，而非 HTTP 轮询 |
| **"硬策略门"取代"软提示"安全** | OpenClaw #10659 Masked Secrets、IronClaw #3891 durable approval-policy、NanoBot #3937 危险命令确认 | 金融/安全场景需要**机械保证**，提示工程不足够；安全需下沉至运行时/编译期 |
| **记忆系统的隐私与效率张力** | OpenClaw #85240 跨用户记忆泄漏（P0）、ZeroClaw Dream Mode 本地-only 争论、NanoBot MECE 记忆优化 | 记忆隔离是安全底线，但本地-only 限制功能；需设计分级策略（敏感/非敏感分离） |
| **上游协议碎片化风险** | ZeroClaw WhatsApp `wa-rs` vs `whatsapp-rust` 分叉、NanoClaw signal-cli 0.13+ 字段变更 | 渠道适配器需抽象层隔离上游变更，避免协议升级导致生产中断 |

---

*分析基于 2026-05-23 各项目 GitHub 公开数据。健康度评估综合合并率、Bug 严重度、响应时效、架构债务显性度。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-23

> **项目**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | **日期**: 2026-05-23 | **分析周期**: 过去24小时

---

## 1. 今日速览

NanoBot 今日保持**高活跃度**，24小时内产生 **20 个 PR 更新**（12 个已合并/关闭）和 **7 个 Issue 更新**（3 个关闭），无新版本发布。项目核心推进方向集中在：**WebUI 体验打磨**（CLI 生成图像渲染、文件编辑计数器修复）、**安全加固**（SSRF 防护、危险命令确认）、**国际化补全**（5 种新语言 + zh-TW/ja）以及**架构清理**（废弃 patch 模式移除）。值得关注的是，长期悬而未决的**心跳定时任务重复创建问题**（#3028）今日有关键 PR 关闭，但根本修复方案仍在评估中。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 🔧 已合并/关闭的关键 PR（12 个）

| PR | 作者 | 核心贡献 | 影响评估 |
|:---|:---|:---|:---|
| [#3960](https://github.com/HKUDS/nanobot/pull/3960) | chengyongru | **移除 `apply_patch` 废弃的 unified-diff 模式**，仅保留结构化 `edits` 数组 | 🔴 **破坏性变更**：简化工具实现，降低维护负担，但可能影响依赖旧 patch 字符串的外部集成 |
| [#3946](https://github.com/HKUDS/nanobot/pull/3946) | HaisamAbbas | **Ollama 原生图像生成支持** | 🟢 补齐本地部署场景关键能力，支持 `x/z-image-turbo` 等模型 |
| [#3954](https://github.com/HKUDS/nanobot/pull/3954) | ZegWe | **OpenAI / Codex 图像生成提供商** | 🟢 企业订阅用户可通过 Responses API 路由使用图像生成 |
| [#3928](https://github.com/HKUDS/nanobot/pull/3928) | Hinotoi-agent | **SSRF 防护：验证重定向目标** | 🔴 **安全修复**：关闭 `web_fetch` 重定向时的内网穿透漏洞 |
| [#3963](https://github.com/HKUDS/nanobot/pull/3963) | Re-bin | **CLI Apps 生态接入**（CLI-Anything 注册表） | 🟢 扩展工具生态，支持 `@mention` 调用外部 CLI 工具 |
| [#3964](https://github.com/HKUDS/nanobot/pull/3964) | yu-xin-c | **WebUI 国际化：es/fr/id/ko/vi** | 🟡 覆盖 5 个新语言市场，补齐近期新增功能的翻译键 |
| [#3962](https://github.com/HKUDS/nanobot/pull/3962) | yu-xin-c | **WebUI 国际化：zh-TW / ja** | 🟡 东亚市场体验完整性提升 |
| [#3961](https://github.com/HKUDS/nanobot/pull/3961) | Yuxin-Lou | **修复 Responses API 重复 replay ID** | 🟢 解决 Codex 会话恢复时的 400 错误 |
| [#3965](https://github.com/HKUDS/nanobot/pull/3965) | Re-bin | **Windows CI 覆盖 CLI Apps 测试** | 🟡 跨平台稳定性基础设施 |
| [#3957](https://github.com/HKUDS/nanobot/pull/3957) | Re-bin | **修复 WebUI 文件编辑计数器误导** | 🟢 消除零值/未知 diff 的虚假显示 |
| [#3929](https://github.com/HKUDS/nanobot/pull/3929) | HaisamAbbas | **统一图像提供商 HTTP 处理** | 🟡 技术债务清理，MiniMax/AIHubMix 共用 helper |
| [#2364](https://github.com/HKUDS/nanobot/pull/2364) | BorisTsang | **心跳防递归指令注入** | 🟡 缓解 #3028 症状，但未根治架构问题 |

**整体推进评估**：今日合并节奏密集，覆盖**安全、生态扩展、国际化、架构现代化**四个维度，项目健康度良好。`apply_patch` 的破坏性清理显示维护团队对技术债务的主动管理意愿。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 🥇 | [#3884](https://github.com/HKUDS/nanobot/issues/3884) WebUI 首响后对话关闭 | **6 评论** | **已关闭**。Debian 网关 + WebSocket 配置场景下的会话状态管理缺陷，修复验证中 |
| 🥈 | [#3846](https://github.com/HKUDS/nanobot/issues/3846) 多轮对话保留 skill 内容 | **4 评论** | **开放**。核心诉求：当前 `read_file` 加载 `skill.md` 的方式在 multi-turn 中效率低下，需设计新的 skill 内容注入机制 |
| 🥉 | [#3959](https://github.com/HKUDS/nanobot/issues/3959) `/skill` 列出已禁用技能 | **4 评论** | **开放**。配置 `disabledSkills` 未生效的明确 bug，用户期望行为与实现不一致 |

**诉求洞察**：
- **#3846** 反映社区对**长上下文成本优化**的迫切需求——30+ skills 全量注入导致 token 膨胀，与 PR [#3865](https://github.com/HKUDS/nanobot/pull/3865)（BM25-lite skill router，-60% system prompt）形成呼应，该功能请求极可能随 BM25 路由落地而缓解
- **#3959 + #3958** 组合出现：用户 `mraad` 同时报告 weather skill 的禁用失效问题，并提议将其移出内置技能改为示例——显示社区对**"精简核心、插件化扩展"**治理模式的倾向

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#3928](https://github.com/HKUDS/nanobot/pull/3928) | SSRF 漏洞：重定向绕过初始 URL 验证，可请求内网目标 | **已修复并合并** |
| 🔴 **高** | [#3956](https://github.com/HKUDS/nanobot/issues/3956) | Anthropic API 400 错误：图像读取返回 list 格式导致 tool_use 校验失败 | **已关闭**（PR #3961 关联修复） |
| 🟡 **中** | [#3959](https://github.com/HKUDS/nanobot/issues/3959) | `/skill` 命令忽略 `disabledSkills` 配置，列出已禁用技能 | **开放**，无 fix PR |
| 🟡 **中** | [#3884](https://github.com/HKUDS/nanobot/issues/3884) | WebUI 首响后对话异常关闭 | **已关闭**，需验证 Debian/WebSocket 场景 |
| 🟡 **中** | [#3028](https://github.com/HKUDS/nanobot/issues/3028) | 心跳触发时重复创建定时任务，导致消息重复发送 | **开放**，缓解方案 PR #2364 已关闭但未根治 |
| 🟢 **低** | [#3957](https://github.com/HKUDS/nanobot/pull/3957) | WebUI 文件编辑计数器显示误导性零值 | **已修复并合并** |

**稳定性评估**：今日安全漏洞修复及时（SSRF），但 **#3028 心跳重复任务** 作为 1.5 个月老问题，其架构级修复方案（PR #1443 心跳推理与通知解耦）仍在开放状态，存在长期稳定性风险。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue/PR | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **BM25-lite 技能路由** | PR [#3865](https://github.com/HKUDS/nanobot/pull/3865) | ⭐⭐⭐⭐⭐ **极高** | 直接回应 #3846 痛点（-60% prompt），社区需求明确，技术方案成熟 |
| **Ollama 图像生成** | PR [#3946](https://github.com/HKUDS/nanobot/pull/3946) | ✅ **已合并** | 本地部署场景刚需 |
| **OpenAI/Codex 图像生成** | PR [#3954](https://github.com/HKUDS/nanobot/pull/3954) | ✅ **已合并** | 企业订阅生态补齐 |
| **心跳推理/通知解耦** | PR [#1443](https://github.com/HKUDS/nanobot/pull/1443) | ⭐⭐⭐⭐ **高** | 解决 #3028 根本问题，配置向后兼容（`sendReasoning` 默认 false） |
| **`nanobot doctor` 诊断命令** | PR [#3776](https://github.com/HKUDS/nanobot/pull/3776) | ⭐⭐⭐⭐ **高** | 10 项自动化检查降低支持成本，提升新用户体验 |
| **MECE 长期记忆优化** | PR [#3952](https://github.com/HKUDS/nanobot/pull/3952) | ⭐⭐⭐ **中** | 解决记忆膨胀问题，但涉及 Dream + Consolidator 核心架构，评审周期可能较长 |
| **Manifest LLM 路由** | PR [#3568](https://github.com/HKUDS/nanobot/pull/3568) | ⭐⭐⭐ **中** | 新提供商接入，社区贡献，需维护团队评估长期支持承诺 |
| **Weather skill 示例化** | Issue [#3958](https://github.com/HKUDS/nanobot/issues/3958) | ⭐⭐⭐ **中** | 与 #3959 联动，符合"精简核心"趋势，但涉及 breaking 变更 |
| **危险命令用户确认** | PR [#3937](https://github.com/HKUDS/nanobot/pull/3937) | ⭐⭐⭐⭐ **高** | 安全合规刚需，#3887 关联 |

---

## 7. 用户反馈摘要

### 痛点与不满
- **WebUI 可靠性**：`aurel-appsthru` 在 Debian 网关 + WebSocket 配置下遭遇"首响后对话关闭"，显示边缘部署场景的测试覆盖不足（[#3884](https://github.com/HKUDS/nanobot/issues/3884)）
- **配置语义不一致**：`mraad` 明确配置 `disabledSkills: ["weather"]` 仍被列出，用户期望"禁用=不可见"而非"禁用=不可执行"（[#3959](https://github.com/HKUDS/nanobot/issues/3959)）
- **心跳机制失控**：`jermeyhu` 的案例极具代表性——心跳本应是"偶尔关心"，实际变成"固定时间重复问候"，且无法读取上下文，**AI 的"体贴"变成"骚扰"**（[#3028](https://github.com/HKUDS/nanobot/issues/3028)）

### 使用场景与需求
- **本地优先部署**：Ollama 图像生成请求显示用户强烈偏好**完全离线的本地 AI 工作流**，不愿依赖云端 API
- **长对话成本敏感**：`mkitsdts` 指出多轮对话中 skill 内容重复加载的浪费，反映**生产环境对 token 经济的精细化控制需求**（[#3846](https://github.com/HKUDS/nanobot/issues/3846)）

### 积极信号
- CLI Apps 生态（[#3963](https://github.com/HKUDS/nanobot/pull/3963)）获得快速迭代，Re-bin 同日连发 3 个 PR 完善 Windows 支持、测试覆盖、图像渲染——显示核心贡献者对生态扩展的高度投入

---

## 8. 待处理积压

| 时长 | Issue/PR | 核心问题 | 风险提醒 |
|:---|:---|:---|:---|
| **44 天** | Issue [#3028](https://github.com/HKUDS/nanobot/issues/3028) | 心跳重复创建定时任务 | 🔴 **架构级 bug**，PR #2364 缓解方案已关闭但未根治，PR #1443 解耦方案开放中；用户可能因"骚扰式消息"弃用产品 |
| **82 天** | PR [#1443](https://github.com/HKUDS/nanobot/pull/1443) | 心跳推理与通知解耦 | 🟡 依赖 #3028 的优先级判断，但配置设计（`sendReasoning`）已成熟，建议加速评审 |
| **53 天** | PR [#3568](https://github.com/HKUDS/nanobot/pull/3568) | Manifest LLM 路由支持 | 🟡 新提供商接入的"长尾"评审，若维护团队无计划支持需明确关闭以避免贡献者悬空 |
| **9 天** | Issue [#3846](https://github.com/HKUDS/nanobot/issues/3846) | 多轮对话 skill 注入优化 | 🟡 与 PR #3865 BM25 路由强相关，建议维护者明确是否由该 PR 覆盖或需独立方案 |

---

> **日报生成备注**：本分析基于 GitHub 公开数据，PR 评论数标记为 `undefined` 表示原始数据未提供或 API 返回异常，未纳入热度计算。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-23

## 1. 今日速览

Hermes Agent 今日呈现**极高活跃度**，24小时内产生 **50 条 Issues 更新**（92% 为新建/活跃，仅 8% 关闭）和 **50 条 PR 更新**（82% 待合并，18% 已合并/关闭）。社区关注点高度集中于**稳定性修复**（SIGTERM 崩溃、state.db 损坏、事件循环丢失）与**平台扩展**（Signal 回复前缀、Discord/Telegram 身份校验、Windows 桌面控制）。值得注意的是，P1 级严重 Bug 有 3 个新增/活跃，但已有 2 个配套 fix PR 提交，修复响应速度良好。无新版本发布，项目处于密集迭代期。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的 PR（9 条中的关键项）

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| #30664 | HushUr2Pups8008 | **安全加固**：Kanban scratch workspace 清理硬编码，防止路径遍历与误删 | [PR #30664](https://github.com/NousResearch/hermes-agent/pull/30664) |
| #30665 | orlandoburli | **配置增强**：新增 `kanban.default_workspace` 配置项（后被 #30668 替代方案覆盖） | [PR #30665](https://github.com/NousResearch/hermes-agent/pull/30665) |
| #24661 | briandevans | **Bug 修复**：`gateway_restart_notification` 配置项实际生效，修复配置桥接失效 | [PR #24661](https://github.com/NousResearch/hermes-agent/pull/24661) |

### 高价值待合并 PR 预览

| PR | 作者 | 核心贡献 | 链接 |
|:---|:---|:---|:---|
| #30654 | SimoKiihamaki | **P1 修复**：SQLite WAL 模式 corruption 根治（`PRAGMA synchronous=FULL` + TRUNCATE checkpoint） | [PR #30654](https://github.com/NousResearch/hermes-agent/pull/30654) |
| #30659 | Telos-agent | **安全特性**：Discord/Telegram 网关身份校验（EXPECTED_BOT_ID fail-closed） | [PR #30659](https://github.com/NousResearch/hermes-agent/pull/30659) |
| #30660 | f-trycua | **平台扩展**：Windows 桌面控制解锁（cua-driver-rs 跨平台） | [PR #30660](https://github.com/NousResearch/hermes-agent/pull/30660) |
| #27437 | nthrow | **性能优化**：Docker 多阶段构建，镜像 5.6GB→2GB，启动 100s→10s | [PR #27437](https://github.com/NousResearch/hermes-agent/pull/27437) |
| #30663 | hfm77788 | **架构改进**：确定性运行时 skill bundle + L1 紧凑上下文 + insights 拆分 | [PR #30663](https://github.com/NousResearch/hermes-agent/pull/30663) |

**项目推进评估**：今日在**数据持久化可靠性**（#30654）、**跨平台覆盖**（Windows 桌面控制）、**运维效率**（Docker 瘦身）三条主线上取得实质进展，预计合并后将显著提升生产环境稳定性。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 链接 |
|:---|:---|:---:|:---:|:---|:---|
| 1 | #7237 Response truncated due to output length limit | **33** | 4 | **长文本生成可靠性**：CLI/网关场景下输出被截断，严重影响用户体验 | [Issue #7237](https://github.com/NousResearch/hermes-agent/issues/7237) |
| 2 | #282 Unintended terminal blinking | 5 | 0 | **可访问性**：SSH + PowerShell 环境下终端闪烁引发癫痫风险 | [Issue #282](https://github.com/NousResearch/hermes-agent/issues/282) |
| 3 | #19471 `--profile` gateway crash loop (SIGTERM→SIGKILL) | 4 | 0 | **生产稳定性**：事件循环丢失导致网关无限重启 | [Issue #19471](https://github.com/NousResearch/hermes-agent/issues/19471) |
| 4 | #15602 google-workspace multi-account support | 4 | **9** | **企业场景**：多 Google 账户切换需求强烈 | [Issue #15602](https://github.com/NousResearch/hermes-agent/issues/15602) |
| 5 | #30555 Parent session messages persistence before compression | 3 | 0 | **数据完整性**：上下文压缩前未持久化导致信息丢失 | [Issue #30555](https://github.com/NousResearch/hermes-agent/issues/30555) |

### 诉求分析

- **#7237 长文本截断**：33 评论显示这是**长期痛点**，虽标记 CLOSED 但可能为重复关闭，需确认是否真正根治
- **#15602 多账户支持**：9 个 👍 为今日最高，企业用户多租户场景明确，与 #20510 跨设备配置同步形成**账户/配置管理**需求集群
- **#19471/#30636 崩溃问题**：SIGTERM 处理缺陷在 macOS 生产环境高频触发，社区对**优雅关闭机制**有迫切期待

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| **P1** | #30636 | `state.db` corruption from SIGTERM during launchd shutdown | 🔴 新增，有复现 | **#30654**（待合并） | [Issue #30636](https://github.com/NousResearch/hermes-agent/issues/30636) |
| **P1** | #19471 | `--profile` gateway crash loop: event loop lost on restart | 🟡 活跃 | 无直接 PR，#18366 相关 | [Issue #19471](https://github.com/NousResearch/hermes-agent/issues/19471) |
| **P1** | #30623 | `hermes -z` oneshot exits 0 silently before API call (non-TTY) | 🔴 新增 | 无 | [Issue #30623](https://github.com/NousResearch/hermes-agent/issues/30623) |
| P2 | #23975 | Context compression interrupted by gateway messages | 🟡 活跃 | 无 | [Issue #23975](https://github.com/NousResearch/hermes-agent/issues/23975) |
| P2 | #18362 | `/busy` command cli_only 限制 | 🟡 活跃 | **#18366**（待合并） | [Issue #18362](https://github.com/NousResearch/hermes-agent/issues/18362) |
| P2 | #30653 | Model picker ignores `key_env` on custom_providers | 🔴 新增 | 无 | [Issue #30653](https://github.com/NousResearch/hermes-agent/issues/30653) |
| P2 | #30626 | Gateway profile-blind: ignores live profile switches | 🔴 新增 | **#30612**（部分相关，待合并） | [Issue #30626](https://github.com/NousResearch/hermes-agent/issues/30626) |
| P2 | #28208 | WhatsApp no-reply 场景发送诊断垃圾信息 | 🟢 已关闭 | 已修复 | [Issue #28208](https://github.com/NousResearch/hermes-agent/issues/28208) |

**健康度评估**：P1 Bug 3 个中有 1 个已有 fix PR（#30654），修复率 33%；P2 级修复通道畅通。但 **#30623 SSH/cron 静默退出** 无 PR 且影响自动化场景，需优先响应。

---

## 6. 功能请求与路线图信号

| Issue/PR | 功能方向 | 纳入可能性 | 判断依据 | 链接 |
|:---|:---|:---|:---|:---|
| #30652 Dynamic model routing | 智能模型调度（按任务复杂度） | ⭐⭐⭐ 高 | 成本优化刚需，架构上可复用现有 profile 机制 | [Issue #30652](https://github.com/NousResearch/hermes-agent/issues/30652) |
| #30660 Windows computer_use | Windows 桌面控制 | ⭐⭐⭐⭐ 极高 | **PR 已提交**，cua-driver-rs 已就绪 | [PR #30660](https://github.com/NousResearch/hermes-agent/pull/30660) |
| #25979 Outlook skill (Graph API) | Microsoft 365 集成 | ⭐⭐⭐ 高 | 对标现有 google-workspace，作者愿 upstream | [Issue #25979](https://github.com/NousResearch/hermes-agent/issues/25979) |
| #15602 Google Workspace multi-account | 多账户 OAuth | ⭐⭐⭐ 高 | 9 👍 企业需求明确，需重构 token 存储 | [Issue #15602](https://github.com/NousResearch/hermes-agent/issues/15602) |
| #20510 Cloud sync for configurations | 跨设备配置同步 | ⭐⭐ 中 | 与 #30661 导出需求共振，但涉及云基础设施决策 | [Issue #20510](https://github.com/NousResearch/hermes-agent/issues/20510) |
| #30640 Cursor SDK integration | IDE 深度集成 | ⭐⭐ 中 | 社区兴趣存在，但依赖外部 SDK 稳定性 | [Issue #30640](https://github.com/NousResearch/hermes-agent/issues/30640) |
| #2988 XMPP + OMEMO | 去中心化通信 | ⭐⭐ 中 | 隐私导向用户诉求，但维护成本较高 | [Issue #2988](https://github.com/NousResearch/hermes-agent/issues/2988) |
| #30587 Adaptive retry with model escalation | Kanban 智能重试 | ⭐⭐⭐ 高 | 与现有 kanban 系统耦合紧密，作者活跃 | [Issue #30587](https://github.com/NousResearch/hermes-agent/issues/30587) |

**路线图信号**：**跨平台桌面控制**（Windows/Linux/macOS）和 **Microsoft 生态补齐**（Outlook + 多账户）是近期最可能落地的两大主题。

---

## 7. 用户反馈摘要

### 痛点聚类

| 场景 | 典型反馈 | 来源 |
|:---|:---|:---|
| **SSH/自动化部署** | "`hermes -z` 在管道中静默失败，cron/SSH ForceCommand 完全不可用" | #30623 |
| **macOS 生产运维** | "launchd 管理下 48h 内 state.db 损坏 3 次，日志显示 SIGTERM 时 WAL 未刷盘" | #30636 |
| **多身份工作流** | "个人+工作 Google 账户只能二选一，token 路径写死" | #15602 |
| **网关群组管理** | "WhatsApp 群里不该回的消息硬回，空响应触发 nudge 循环" | #18848, #28208 |
| **配置迁移** | "换电脑如何导出 master 环境？手动复制 ~/.hermes/ 怕漏" | #30661 |

### 满意度信号

- **正面**：Docker 多阶段构建 PR（#27437）获隐性认可，反映运维体验受重视
- **负面**：`/busy` 命令 onboarding 承诺与实际可用性脱节（#18362），存在**产品一致性**问题

---

## 8. 待处理积压

> 以下 Issue/PR 长期活跃但缺乏维护者明确响应，建议优先审阅

| 项目 | 创建时间 | 最后更新 | 风险说明 | 链接 |
|:---|:---|:---|:---|:---|
| #7237 Response truncated | 2026-04-10 | 2026-05-22 | **33 评论**，标记 CLOSED 但可能复发，需确认根治方案 | [Issue #7237](https://github.com/NousResearch/hermes-agent/issues/7237) |
| #2988 XMPP + OMEMO | 2026-03-25 | 2026-05-22 | 2 个月无维护者回应，隐私/自托管用户流失风险 | [Issue #2988](https://github.com/NousResearch/hermes-agent/issues/2988) |
| #282 Terminal blinking | 2026-03-02 | 2026-05-22 | 可访问性问题（癫痫风险），5 评论无 assignee | [Issue #282](https://github.com/NousResearch/hermes-agent/issues/282) |
| #27437 Docker multi-stage | 2026-05-17 | 2026-05-23 | **6 天未合并**，高价值性能优化，可能因测试覆盖不足阻塞 | [PR #27437](https://github.com/NousResearch/hermes-agent/pull/27437) |
| #20660 Per-OS desktop control | 2026-05-06 | 2026-05-23 | 与 #30660 功能重叠，需协调合并策略避免冲突 | [PR #20660](https://github.com/NousResearch/hermes-agent/pull/20660) |

---

*日报生成时间：2026-05-23 | 数据来源：NousResearch/hermes-agent GitHub 公开 API*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-23

## 1. 今日速览

PicoClaw 项目今日呈现**高活跃度清理态势**：24小时内关闭7个Issue和12个PR，同时新开3个Issue与8个待合并PR。核心特征是**大规模stale问题清理**——6个长期悬置的Issue/PR被批量关闭，显示维护团队正在进行积压整理。值得注意的是，社区今日提出了一项重大架构级功能请求（#2929 代理间通信），以及针对DeepSeek模型支持的即时PR（#2928），反映出项目在AI模型适配与多Agent协作方向的新动向。依赖更新密集（4个依赖升级PR），安全修复（golang.org/x/net漏洞）已快速合并。整体健康度：**稳定维护期，架构扩展信号显现**。

---

## 2. 版本发布

### 🔹 Nightly Build: v0.2.8-nightly.20260522.5bbebb5f

| 属性 | 详情 |
|:---|:---|
| 发布日期 | 2026-05-22 |
| 构建类型 | 自动化夜间构建（可能不稳定） |
| 变更范围 | `v0.2.8...main` 全量提交 |
| 完整日志 | [Compare v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main) |

**⚠️ 使用建议**：此为自动化构建，未经完整稳定性验证，生产环境建议继续使用稳定版 v0.2.8。

**迁移注意事项**：夜间构建包含main分支最新提交（含待合并PR的预集成代码），如需测试新功能可拉取，但需自行承担稳定性风险。

---

## 3. 项目进展

### 今日合并/关闭的关键PR（12项）

| PR | 作者 | 类型 | 核心贡献 |
|:---|:---|:---|:---|
| [#2930](https://github.com/sipeed/picoclaw/pull/2930) | lc6464 | **安全修复** | 升级 `golang.org/x/net` 至 v0.55.0，修复 `HtmlToMarkdown` 路径的 `govulncheck` 漏洞 |
| [#2788](https://github.com/sipeed/picoclaw/pull/2788) | LiusCraft | **功能增强** | Session API 新增 `per-message created_at` 时间戳，解决前端消息时间显示不准确问题 |
| [#2914](https://github.com/sipeed/picoclaw/pull/2914) | lxowalle | **架构扩展** | 新增请求级上下文策略 `turn_profile`，支持按回合控制历史/系统上下文/工具包含 |
| [#2921](https://github.com/sipeed/picoclaw/pull/2921) | dependabot | 依赖更新 | `gronx` 定时任务库 v1.20.0 |
| [#2923](https://github.com/sipeed/picoclaw/pull/2923) | dependabot | 依赖更新 | LINE Bot SDK v8.20.0 |

**批量关闭的Stale PR（技术债务清理）**：
- [#2827](https://github.com/sipeed/picoclaw/pull/2827) Matrix `allow_from` 过滤器修复（问题已独立解决）
- [#2822](https://github.com/sipeed/picoclaw/pull/2822) 子工具反馈清理机制
- [#2814](https://github.com/sipeed/picoclaw/pull/2814) exec沙箱相对路径支持
- [#2794](https://github.com/sipeed/picoclaw/pull/2794) 异步跟进消息上下文保留
- [#2791](https://github.com/sipeed/picoclaw/pull/2791) / [#2756](https://github.com/sipeed/picoclaw/pull/2756) Telegram话题上下文修复
- [#2789](https://github.com/sipeed/picoclaw/pull/2789) 工具反馈编辑节流可配置

**整体推进评估**：今日合并的 [#2788](https://github.com/sipeed/picoclaw/pull/2788) 和 [#2914](https://github.com/sipeed/picoclaw/pull/2914) 代表了**用户体验**与**架构灵活性**两个维度的实质进步；安全修复保持响应速度。Stale清理释放了维护带宽，但部分关闭PR的技术方案可能被后续重新实现。

---

## 4. 社区热点

### 🔥 最活跃讨论

| 排名 | Issue/PR | 互动指标 | 热点分析 |
|:---|:---|:---|:---|
| **1** | [#2625](https://github.com/sipeed/picoclaw/issues/2625) WhatsApp预编译构建支持 | 6评论, 👍×1 | **嵌入式部署痛点**：Raspberry Pi Zero 2用户需要arm64预编译包包含WhatsApp支持，当前需自行编译阻碍快速更新。诉求本质是**渠道适配器的构建时可选集成 vs 运行时插件化**的架构权衡 |
| **2** | [#2929](https://github.com/sipeed/picoclaw/issues/2929) 代理间一阶通信 | 1评论, 新建 | **架构级提案**：提出超越现有`spawn/subagent/delegate`的**对等协作通信层**，涉及消息总线、协议设计、权限边界。可能定义v0.3.x的核心方向 |
| **3** | [#2820](https://github.com/sipeed/picoclaw/issues/2820) 非破坏性会话重置 | 2评论, 👍×1, 已关闭 | **数据持久化诉求**：用户需要`/clear`命令不删除Seahorse历史记录，反映生产环境对**审计追踪与隐私控制的平衡需求** |

**背后诉求洞察**：社区正从"能用"向"好用+可运维"演进——嵌入式部署便利性、多Agent生产协作、数据生命周期管理成为新焦点。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 描述 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#2744](https://github.com/sipeed/picoclaw/issues/2744) Android v0.2.8 标签页数据无法访问 | **已关闭** | Android端完全无法读取标签数据，影响核心功能 | 未明确关联PR，推测在nightly中修复 |
| 🟡 **中** | [#2817](https://github.com/sipeed/picoclaw/issues/2817) 语音转录结果未传入LLM | **已关闭** | Groq Whisper转录成功但LLM收到`[voice]`占位符而非文本，导致模型自行尝试转录 | 未明确关联PR |
| 🟡 **中** | [#2816](https://github.com/sipeed/picoclaw/issues/2816) Matrix发送者身份未注入上下文 | **已关闭** | 对比Telegram的`chat_id`，Matrix渠道缺少发送者标识 | 未明确关联PR |
| 🟡 **中** | [#2815](https://github.com/sipeed/picoclaw/issues/2815) Matrix `allow_from`过滤器失效 | **已关闭** | 非空值阻断所有消息，空数组才放行 | [#2827](https://github.com/sipeed/picoclaw/pull/2827)（已关闭，方案可能被替代实现）|
| 🟢 **低** | [#2785](https://github.com/sipeed/picoclaw/issues/2785) 飞书工具反馈仅显示首条消息 | **已关闭** | `separate_messages=false`时通知中心合并显示异常 | 未明确关联PR |
| 🟢 **低** | [#2787](https://github.com/sipeed/picoclaw/issues/2787) 会话消息缺少独立时间戳 | **已关闭** | 前端被迫使用会话级时间 | [#2788](https://github.com/sipeed/picoclaw/pull/2788) ✅ |

**稳定性评估**：今日关闭的Bug集中在**渠道适配层**（Matrix×2, Telegram×2, 飞书×1, Android×1），显示v0.2.8版本在多平台一致性方面存在系统性问题。好消息是时间戳问题已有明确修复，其余问题虽关闭但缺乏透明的问题-PR关联，建议维护者补充关闭原因说明。

---

## 6. 功能请求与路线图信号

| 功能请求 | 状态 | 纳入可能性分析 |
|:---|:---|:---|
| **#2929 代理间一阶通信** | 新建 | 🔮 **高潜力** — 与现有`spawn/subagent/delegate`形成互补，若实现将标志PicoClaw从"单Agent多工具"进化为"多Agent协作网络"。需关注是否形成RFC |
| **#2928 DeepSeek thinking字段映射** | [PR已开](https://github.com/sipeed/picoclaw/pull/2928) | ✅ **高概率纳入** — 实现`ThinkingCapable`接口，标准化思考级别控制（off/low/medium/high/xhigh），消除手动`extra_body`配置 |
| **#2625 WhatsApp预编译构建** | 活跃讨论中 | ⚠️ **中等** — 涉及构建系统改造（编译器标志/条件编译），可能等待更通用的"渠道插件按需打包"方案 |
| **#2351 Skill二进制依赖预校验** | Stale但开放 | ⚠️ **中等** — 防止LLM幻觉可用工具，属于可靠性增强，但需设计运行时检测与提示注入的交互协议 |
| **#2906 消息总线背压处理** | [PR开放](https://github.com/sipeed/picoclaw/pull/2906) | ✅ **高概率纳入** — 直接关联#2929的通信基础设施，解决高负载下goroutine泄漏 |

**路线图信号**：`v0.2.8 → v0.3.0` 的演进可能聚焦**三支柱**：①模型生态扩展（DeepSeek等国产模型深度适配）；②运行时可靠性（背压、上下文策略）；③多Agent架构（对等通信协议）。

---

## 7. 用户反馈摘要

### 😤 痛点

> *"I use PicoClaw on my Raspberry Pi Zero 2... default arm64 build does not have WhatsApp support included, making it hard to rapidly update"* — [#2625](https://github.com/sipeed/picoclaw/issues/2625) duckida

**嵌入式/边缘部署的更新摩擦**：预构建镜像与特定渠道需求的错配，自行编译对资源受限设备不友好。

> *"Skills with `metadata.nanobot.requires.bins` are injected into the system prompt even when the required binaries are not installed. This causes the LLM to claim it can perform actions... that will always fail at runtime"* — [#2351](https://github.com/sipeed/picoclaw/issues/2351) eastriverlee

**LLM幻觉与运行时失败的脱节**：系统提示的"能力声明"与实际环境能力不匹配，损害用户信任。

### 😊 满意

> *"PicoClaw now supports multiple agents with separate workspaces, identities, tools, and turns"* — [#2929](https://github.com/sipeed/picoclaw/issues/2929) afjcjsbx

**多Agent基础设施获认可**：社区对现有`spawn/subagent/delegate`机制的价值有共识，在此基础上寻求更灵活的协作模式。

### 🔍 使用场景洞察

| 场景 | 代表Issue | 隐含需求 |
|:---|:---|:---|
| 家庭自动化/IoT网关 | #2625 (Pi Zero 2) | 轻量级部署、OTA更新、渠道模块化 |
| 企业IM集成 | #2785 (飞书), #2815-2816 (Matrix) | 通知语义精确控制、身份审计、权限过滤 |
| 语音交互 | #2817 (Whisper) | 端到端语音Pipeline可靠性 |
| 长期记忆管理 | #2820 (Seahorse历史) | 合规性、数据可恢复性、隐私边界 |

---

## 8. 待处理积压

### ⚠️ 需维护者关注

| 项目 | 时长 | 风险 | 建议行动 |
|:---|:---|:---|:---|
| [#2351](https://github.com/sipeed/picoclaw/issues/2351) Skill二进制依赖预校验 | 47天（2026-04-05） | 用户体验损害、LLM信任下降 | 评估与#2928同版本纳入，或标记`good first issue` |
| [#2662](https://github.com/sipeed/picoclaw/pull/2662) 提供商文档统一 | 29天（2026-04-24） | 文档债务累积、新用户上手成本 | 低技术风险，建议优先合并或给出修改反馈 |
| [#2856](https://github.com/sipeed/picoclaw/pull/2856) 媒体附件与Telegram富文本交付 | 12天（2026-05-11） | 渠道能力差距、竞品功能对标 | 与#2928协调合并计划，避免冲突 |
| [#2838](https://github.com/sipeed/picoclaw/pull/2838) 前置工具策略过滤器 | 13天（2026-05-09） | 安全策略精细化需求 | 需架构评审，建议安排RFC讨论 |
| [#2877](https://github.com/sipeed/picoclaw/pull/2877) Tirith预执行安全扫描 | 7天（2026-05-15）, stale标记 | 安全增强、执行沙箱加固 | 澄清与现有exec guard的关系，或拆分独立模块 |

### 📊 积压健康度指标

| 指标 | 数值 | 趋势 |
|:---|:---|:---|
| 开放Issue >30天 | 2项 (#2351, #2625) | ⬆️ 需关注 |
| 开放PR >7天无评论 | 4项 (#2856, #2838, #2877, #2662) | ⬆️ 评审带宽瓶颈 |
| Dependabot PR待合并 | 2项 (#2920 Anthropic SDK, #2918 飞书SDK) | ⬇️ 通常快速处理 |

**维护建议**：今日Stale清理释放了心理带宽，建议优先处理文档PR #2662（低风险高收益）和安全相关PR #2877，为#2929的架构讨论预留资源。

---

*日报生成时间：2026-05-23 | 数据来源：GitHub API / sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-23

## 1. 今日速览

NanoClaw 今日展现**极高开发活跃度**：24小时内 **31个PR** 完成闭环（28条合并/关闭），仅3条待审；Issues 侧 **6条更新** 中2条关闭、4条新增开放。项目处于**密集迭代期**，核心聚焦三方面：Apple Container 技能链的紧急修复（3条关联 Issue）、多通道消息格式与认证稳定性（WhatsApp/Signal/Telegram），以及 Claude Agent SDK 交互可靠性。无新版本发布，所有变更通过主干快速集成。

---

## 2. 版本发布

**无新版本发布**（v0.x.x 保持现状）

---

## 3. 项目进展

### 🔧 核心运行时修复（Agent-Runner）

| PR | 作者 | 关键进展 |
|:---|:---|:---|
| [#2586](https://github.com/nanocoai/nanoclaw/pull/2586) | IamAdamJowett | **会话转录自动轮转**：解决长生命周期 hub 会话的 `projects/<cwd>/<session>.jsonl` 无限膨胀问题，避免 base64 图片块阻塞 agent `Read` 操作，SDK 重载性能回归正常 |
| [#2556](https://github.com/nanocoai/nanoclaw/pull/2556) | IamAdamJowett | **移除 `<messages>` 批处理信封**：修复 Claude Agent SDK v2.1.128 因多消息包裹触发合成响应 `"No response requested."` 的根因，恢复真实 API 调用 |

### 📱 通道生态加固（WhatsApp / Signal / Telegram）

| PR | 作者 | 关键进展 |
|:---|:---|:---|
| [#2552](https://github.com/nanocoai/nanoclaw/pull/2552) | IamAdamJowett | WhatsApp `@<phone>` 提及渲染 + 关闭竞态条件导致凭证擦除 |
| [#2553](https://github.com/nanocoai/nanoclaw/pull/2553) | IamAdamJowett | 新增 `whatsapp-formatting` 容器技能，强制代理使用协议正确提及语法 |
| [#2584](https://github.com/nanocoai/nanoclaw/pull/2584) | snymanpaul | **Signal 认证兼容 signal-cli 0.13+**：JSON 字段 `account` → `number` 适配 |
| [#2579](https://github.com/nanocoai/nanoclaw/pull/2579) | cfis | WhatsApp 401 强制登出时立即清除凭证，避免重启死循环 |
| [#2578](https://github.com/nanocoai/nanoclaw/pull/2578) | sumsumai | Telegram 认领链接功能 |
| [#2551](https://github.com/nanocoai/nanoclaw/pull/2551) | claudiopostinghel | `/add-whatsapp` 技能文档与 CLI 参数对齐（`qr-browser`/`qr-terminal` → `qr`/`pairing-code`） |

### 🔐 安全与权限

| PR | 作者 | 关键进展 |
|:---|:---|:---|
| [#2566](https://github.com/nanocoai/nanoclaw/pull/2566) | Hinotoi-agent | **通道注册审批范围限定**：scoped admin 仅能连接其授权管理的 agent group，防止越权 |
| [#2563](https://github.com/nanocoai/nanoclaw/pull/2563) | kky | `--assistant-name` 作用域收紧至注册 group 级别 |

### 🛠️ 基础设施与工具链

| PR | 作者 | 关键进展 |
|:---|:---|:---|
| [#2580](https://github.com/nanocoai/nanoclaw/pull/2580) | chiptoe-svg | **完整 Codex-only 安装支持**：Codex 作为 AI-coding CLI + 唯一 agent provider + OneCLI 凭证管理，技能目录与 persona 与 Claude Code 原生体验拉齐 |
| [#2571](https://github.com/nanocoai/nanoclaw/pull/2571) | ira-at-work | `/add-rtk` 技能：集成 [rtk](https://github.com/rtk-ai/rtk) CLI 代理，60-90% token 节省 |
| [#2572](https://github.com/nanocoai/nanoclaw/pull/2572) | bromleymindfulness | **rootless Podman 双 bug 修复**：`--user` 映射 + `additional_groups` 权限问题 |
| [#2573](https://github.com/nanocoai/nanoclaw/pull/2573) | matt1995ai | 上下文窗口使用率暴露给 agent，支持自主 pacing |
| [#2567](https://github.com/nanocoai/nanoclaw/pull/2567) | floflo11 | `CLAUDE.local.md` 正确导入，修复 per-group memory 未达 agent 的 bug |

### 📋 文档与体验优化

| PR | 作者 | 关键进展 |
|:---|:---|:---|
| [#2557](https://github.com/nanocoai/nanoclaw/pull/2557) | augustweinbren | 注释掉 setup splash 文本显示 |
| [#2558](https://github.com/nanocoai/nanoclaw/pull/2558) | guyb1 | OneCLI 默认 URL 修正 `app` → `api` 子域 |
| [#2592](https://github.com/nanocoai/nanoclaw/pull/2592) | mmahmed | `/add-teams` 技能文档：Teams CLI 作为自动凭证路径 |
| [#2593](https://github.com/nanocoai/nanoclaw/pull/2593) | sumsumai | 默认 agent 共享会话模式 |

**整体推进评估**：Agent-runner 核心可靠性、多通道认证兼容性、权限安全模型三大支柱同步加固，Codex 生态扩展完成闭环，项目成熟度显著提升。

---

## 4. 社区热点

> ⚠️ 数据说明：所有 PR 评论数均显示 `undefined`（GitHub API 数据异常或私有字段），Issues 评论数均为 0。以下基于 **Issue 创建密度、关联 PR 紧急程度、技术债务显性度** 综合判断。

### 🔥 最高热度：Apple Container 技能链崩溃（3条关联 Issue）

| Issue | 链接 | 热度分析 |
|:---|:---|:---|
| #2588 | [skill/apple-container branch 与 mainline 严重不同步](https://github.com/nanocoai/nanoclaw/issues/2588) | **架构级断裂**：分支引用已删除 API、假设 Node+tsc 运行时（mainline 已迁移至 bun），`/convert-to-apple-container` 技能文档化但**立即失败**——用户信任损耗最大 |
| #2589 | [host.docker.internal 在 Apple Container microVM 内不可解析](https://github.com/nanocoai/nanoclaw/issues/2589) | **网络层阻断**：Apple Container 不支持 `--add-host`，OneCLI 代理 URL 硬编码 hostname 导致 agent 容器无法出网 |
| #2587 | [Dockerfile 残留 `npm run build` 因 agent-runner 无 build 脚本失败](https://github.com/nanocoai/nanoclaw/issues/2587) | **构建流水线断裂**：bun 迁移遗留的 Dockerfile 语法错误 |

**背后诉求**：Apple Silicon 用户群体正在扩大，但技能分支维护机制存在系统性漏洞——分支与主干缺乏 CI 同步验证，文档化技能未经过回归测试即发布。

### 🌡️ 次热度：Node 本地调试体验恶化

| Issue | 链接 | 热度分析 |
|:---|:---|:---|
| #2590 | [Ubuntu 本地调试依赖地狱，请求非容器调试支持](https://github.com/nanocoai/nanoclaw/issues/2590) | 情绪化标题（"I just hate Node apps"）反映**开发者体验危机**：SQLite wrapper 绑定 Node 22、node-gyp 编译失败、与容器化部署路径的割裂 |

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | Fix 状态 |
|:---|:---|:---|:---|
| 🔴 **P0 - 功能完全阻断** | [#2588](https://github.com/nanocoai/nanoclaw/issues/2588) | Apple Container 技能链：分支与 mainline 架构断裂，技能文档化但无法执行 | ❌ **无 PR，需紧急创建同步/废弃决策** |
| 🔴 **P0 - 功能完全阻断** | [#2589](https://github.com/nanocoai/nanoclaw/issues/2589) | Apple Container 内 `host.docker.internal` 不可解析，agent 容器网络隔离 | ❌ **无 PR，需网络层重构（考虑替换为宿主机 IP 或 Unix socket）** |
| 🟡 **P1 - 构建失败** | [#2587](https://github.com/nanocoai/nanoclaw/issues/2587) | Dockerfile `npm run build` 与 bun 迁移冲突 | ❌ **无 PR，单行修复但需验证完整构建链** |
| 🟡 **P1 - 本地开发阻断** | [#2590](https://github.com/nanocoai/nanoclaw/issues/2590) | Ubuntu 本地调试 node-gyp/SQLite 依赖地狱 | ❌ **无 PR，需评估是否支持裸机路径或强化容器 DevContainer 方案** |
| 🟢 **P2 - 已修复** | [#2555](https://github.com/nanocoai/nanoclaw/issues/2555) → [#2556](https://github.com/nanocoai/nanoclaw/pull/2556) | `<messages>` 信封导致 Claude SDK 合成响应 | ✅ **已合并** |
| 🟢 **P2 - 已修复** | [#2581](https://github.com/nanocoai/nanoclaw/issues/2581) → [#2584](https://github.com/nanocoai/nanoclaw/pull/2584) | signal-cli 0.13+ JSON 字段名变更 | ✅ **已合并** |

---

## 6. 功能请求与路线图信号

| 来源 | 需求 | 纳入可能性评估 |
|:---|:---|:---|
| [#2580](https://github.com/nanocoai/nanoclaw/pull/2580) 已合并 | **Codex 作为一等公民**：完整替代 Claude Code 的安装路径 | ✅ **已落地**，路线图核心方向——多模型提供商解耦 |
| [#2571](https://github.com/nanocoai/nanoclaw/pull/2571) 已合并 | **rtk 集成**：开发命令 token 节省 | ✅ **已落地**，agent 成本优化工具链扩展 |
| [#2573](https://github.com/nanocoai/nanoclaw/pull/2573) 已合并 | **上下文窗口自省**：agent 可见 `X / Y (Z%)` | ✅ **已落地**，agent 自主性增强 |
| [#2521](https://github.com/nanocoai/nanoclaw/pull/2521) 待审 | XML 消息属性增加 `from-channel` / `from-type` | 🟡 **高可能**，多通道监控需求真实，实现轻量 |
| #2590 隐含 | **裸机/非容器开发支持** | 🟡 **待评估**，与容器化架构存在张力，可能强化 DevContainer 替代 |
| #2588-2589 隐含 | **Apple Container 技能自动化回归测试** | 🔴 **必要基础设施**，否则技能生态碎片化加剧 |

---

## 7. 用户反馈摘要

### 😤 痛点（来自 Issues）

> *"I just hate Node apps. Trying to debug the app in Ubuntu, I keep getting missing dependencies hell. Why don't you support the latest Node?"*
> — [#2590](https://github.com/nanocoai/nanoclaw/issues/2590) whiletrue111

**核心问题**：容器化优先策略与本地快速迭代需求的冲突；Node 版本锁定（Node 22 for SQLite）与系统包管理器默认版本的脱节；node-gyp 原生编译失败信息不透明。

### 🔧 隐式诉求（来自 PR 修复场景）

| 场景 | 反馈来源 | 满意度影响 |
|:---|:---|:---|
| WhatsApp 商业场景：`@mention` 必须触发通知 | [#2552](https://github.com/nanocoai/nanoclaw/pull/2552), [#2553](https://github.com/nanocoai/nanoclaw/pull/2553) | 高——之前静默失败，用户误以为功能正常 |
| Signal 升级后认证循环 | [#2581](https://github.com/nanocoai/nanoclaw/issues/2581) | 高——外部依赖变更无预警破坏现有安装 |
| 长会话 agent 性能断崖下跌 | [#2586](https://github.com/nanocoai/nanoclaw/pull/2586) | 极高——"几天历史 + base64 图片" 导致完全不可用 |

### ✅ 正向信号

- Codex-only 路径完整化：降低 Claude Code 独占锁定，吸引 OpenAI 生态用户
- rtk 集成：明确回应 "agent 运营成本" 企业级顾虑

---

## 8. 待处理积压

| 项目 | 链接 | 积压时长 | 风险说明 |
|:---|:---|:---|:---|
| **PR #2521** - XML 通道属性扩展 | [nanocoai/nanoclaw PR #2521](https://github.com/nanocoai/nanoclaw/pull/2521) | 5天（2026-05-17 创建） | 轻量功能，多通道用户真实需求，悬而未决阻碍外部监控工具集成 |
| **Apple Container 技能链** - 3 Issue 集群 | #2587, #2588, #2589 | 1天（刚创建但影响严重） | **技能文档与代码 reality 脱节**，用户按文档操作即失败，品牌信任损耗；建议立即：① 临时下架文档中的 `/convert-to-apple-container` ② 或加 `> ⚠️ Apple Silicon 当前不可用` 警告横幅 |
| **非容器调试路径** - #2590 | [nanocoai/nanoclaw Issue #2590](https://github.com/nanocoai/nanoclaw/issues/2590) | 1天 | 需维护者决策：明确不支持裸机（强化 DevContainer/ Codespaces 方案）或提供 `CONTRIBUTING.md` 本地开发指南 |

---

**日报生成时间**：2026-05-23  
**数据基准**：GitHub API 快照（过去24小时活动）

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-23

> **项目**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **日期**: 2026-05-23  
> **分析周期**: 过去 24 小时（2026-05-22 至 2026-05-23）

---

## 1. 今日速览

NullClaw 今日呈现**低活跃、高积压**状态。过去 24 小时内无 Issues 变动，无新版本发布，4 条 PR 全部处于待合并状态且均非当日新建。项目代码流动停滞，但 PR 队列中积累了涵盖定时任务引擎、新 AI 提供商接入、网络诊断精度提升及 POSIX 线程兼容性修复等多维度改进，显示社区贡献持续但维护者 review 带宽不足。整体健康度评估：**功能开发活跃，合并不及时，存在 PR 堆积风险**。

---

## 2. 版本发布

**无新版本发布。**

最新 Release 状态未在数据中提供，建议关注项目 release 页面获取版本历史。

---

## 3. 项目进展

**今日无 PR 合并或关闭。** 以下为待合并 PR 队列中值得关注的进展方向：

| PR | 方向 | 价值评估 |
|:---|:---|:---|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) Cron 子代理引擎 | 核心基础设施 | ⭐⭐⭐⭐⭐ 新增 DB 级定时调度能力，含运行历史追踪、原子操作、多任务类型支持 |
| [#922](https://github.com/nullclaw/nullclaw/pull/922) NEAR AI Cloud 提供商 | 生态扩展 | ⭐⭐⭐⭐☆ 接入 Web3/去中心化 AI 算力，OpenAI 兼容协议降低迁移成本 |
| [#891](https://github.com/nullclaw/nullclaw/pull/891) Curl 传输错误保留 | 可观测性 | ⭐⭐⭐⭐☆ 消除错误信息坍缩，提升 provider 健康探针诊断精度 |
| [#878](https://github.com/nullclaw/nullclaw/pull/878) POSIX nanosleep 修复 | 运行时正确性 | ⭐⭐⭐⭐⭐ 修复协作式 yield 伪睡眠导致的 CPU 空转/调度失效 |

**项目实质推进**: 0%。所有代码改进均停留在 review 阶段，未进入主分支。

---

## 4. 社区热点

今日无活跃讨论。4 条待合并 PR 的 `👍` 数均为 0，评论数为 `undefined`（数据缺失或实际为 0），显示社区参与度极低。

**潜在热点预判**：
- **#783** 若合并，将成为 Agent 定时自动化能力的里程碑，可能引发 cron 场景下的使用讨论
- **#922** 代表 Web3 AI 基础设施接入趋势，NEAR 生态开发者可能关注

> 链接: [#783](https://github.com/nullclaw/nullclaw/pull/783) | [#922](https://github.com/nullclaw/nullclaw/pull/922) | [#891](https://github.com/nullclaw/nullclaw/pull/891) | [#878](https://github.com/nullclaw/nullclaw/pull/878)

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | PR 状态 | 影响范围 |
|:---|:---|:---|:---|
| 🔴 **高** | POSIX 线程 `sleep` 实际未挂起 OS 线程，导致协作式调度下 CPU 空转、定时精度失效 | [#878](https://github.com/nullclaw/nullclaw/pull/878) 待合并 | 所有 POSIX 平台（Linux/macOS）的 `std_compat.thread.sleep()` 调用方 |
| 🟡 **中** | Provider 健康探针将 Curl 传输层错误统一归并为泛化错误，掩盖 DNS/连接/TLS/超时等根因 | [#891](https://github.com/nullclaw/nullclaw/pull/891) 待合并 | 依赖 provider 探针的运维自动化、故障自愈逻辑 |

**风险评估**: #878 影响运行时正确性，长期未合并可能导致用户在定时任务场景遭遇不可预期的资源消耗；#891 影响生产环境排障效率。

---

## 6. 功能请求与路线图信号

**已编码待合并的功能**（可视为高置信度路线图信号）：

| 功能 | PR | 纳入下一版本概率 | 判断依据 |
|:---|:---|:---|:---|
| Cron 子代理引擎（DB 调度、运行历史、JSON CLI） | [#783](https://github.com/nullclaw/nullclaw/pull/783) | 85% | 功能完整度高，覆盖调度核心场景，作者持续更新（4 月创建，5 月仍在迭代） |
| NEAR AI Cloud 提供商接入 | [#922](https://github.com/nullclaw/nullclaw/pull/922) | 70% | 新兴提供商，代码侵入性低（OpenAI 兼容），但需维护者评估长期支持承诺 |
| Curl 错误精细化 | [#891](https://github.com/nullclaw/nullclaw/pull/891) | 90% | 纯修复类，向后兼容，合并阻力小 |
| POSIX sleep 正确实现 | [#878](https://github.com/nullclaw/nullclaw/pull/878) | 90% | 关键兼容性修复，技术债务清理 |

**缺失信号**: 无 Issues 反映用户需求，无法判断社区对新功能的原始诉求强度。

---

## 7. 用户反馈摘要

**今日无 Issues 评论数据可提炼。**

基于 PR 描述推断的潜在用户场景：
- **#783**: 需要 Agent 定时自主执行（如市场监控、数据同步、报告生成）的企业用户
- **#922**: 寻求去中心化/抗审查 AI 算力替代方案、或已有 NEAR 生态资产的用户
- **#878/#891**: 在 Linux 服务器部署、追求资源效率与可观测性的生产环境用户

---

## 8. 待处理积压

| PR | 创建日期 | 已等待 | 风险说明 |
|:---|:---|:---|:---|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) Cron 子代理 | 2026-04-07 | **46 天** | ⚠️ 大型功能 PR，长期未合并可能导致与 main 分支漂移，增加后续合并冲突成本 |
| [#878](https://github.com/nullclaw/nullclaw/pull/878) POSIX nanosleep | 2026-04-30 | **23 天** | 关键修复，延迟影响用户生产体验 |
| [#891](https://github.com/nullclaw/nullclaw/pull/891) Curl 错误保留 | 2026-05-05 | **18 天** | 中等优先级，但修复成本低 |
| [#922](https://github.com/nullclaw/nullclaw/pull/922) NEAR AI Cloud | 2026-05-21 | **2 天** | 新建 PR，正常等待周期 |

**维护者行动建议**：
1. **优先 review #878**：关键兼容性修复，影响面广，代码变更相对独立
2. **安排 #783 架构 review**：46 天积压的最大功能 PR，建议拆分或安排专门 review 会议
3. **建立 PR 合并 SLA**：当前 4 PR 全部 pending，缺乏透明度的 review 流程可能挫伤贡献者积极性

---

> **数据置信度说明**: PR 评论数显示为 `undefined`，可能存在 API 数据缺失；`👍` 数全为 0 可能反映真实社区冷淡或数据未完整采集。建议直接访问 [GitHub 仓库](https://github.com/nullclaw/nullclaw) 核实最新状态。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-23

> **项目**: nearai/ironclaw | **日期**: 2026-05-23 | **分析周期**: 过去24小时

---

## 1. 今日速览

IronClaw 过去24小时呈现**高强度开发态势**，50个PR更新（36个待合并）、23个Issues更新（19个活跃/新开），显示 Reborn 重构进入关键冲刺期。核心焦点集中在**产品认证流程闭环**（OAuth回调、token生命周期）、**Google扩展生态**（6阶段PR链并行推进）以及 **Hooks框架性能优化**（3个跟进PR处理评审遗留）。值得注意的是，4个Issues关闭均属于WebUI Beta模块（M1/M2），表明前端基础设施正逐步收敛。无新版本发布，所有能量集中于主干功能着陆。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#3878](https://github.com/nearai/ironclaw/pull/3878) | hanakannzashi | **产品认证组合接缝**：`RebornProductAuthServices` 统一封装认证流、安全手动token交互、凭证设置/账户、提供商交换及清理 | 🔐 **Reborn认证架构里程碑**：首次将分散的认证能力整合为单一组合点，本地开发自动降级内存实现，生产环境对接真实OAuth/凭证代理 |
| [#3863](https://github.com/nearai/ironclaw/pull/3863) | serrrfirat | **技能资产访问与执行适配器**：技能包资源读取器（仅激活包内文件）+ 第一方技能执行适配器 | 🧩 **Reborn技能栈收官**：完成技能系统的最后一块拼图，支持渐进式披露和安全执行 |
| [#3837](https://github.com/nearai/ironclaw/pull/3837) | henrypark133 | **Google Suite扩展设计规格**：Calendar(9能力)+Gmail(6能力)的v2包设计，引入`ironclaw_oauth`+`ironclaw_native_extensions`两新crate | 📐 **Google生态奠基文档**：为后续6个实现PR提供蓝图 |

### 已关闭的关键 Issues

| Issue | 模块 | 说明 |
|:---|:---|:---|
| [#3803](https://github.com/nearai/ironclaw/issues/3803) | M4-host-kernel | Lane 3完成：secrets/egress基质通过生产工具组合完成布线 |
| [#3611](https://github.com/nearai/ironclaw/issues/3611) | M1-webui-product | 最小原生WebChat v2路由实现 |
| [#3626](https://github.com/nearai/ironclaw/issues/3626) | M2-inbound-workflow | WebUI调用者/线程作用域绑定到规范TurnScope |
| [#3625](https://github.com/nearai/ironclaw/issues/3625) | M2-inbound-workflow | WebUI幂等性与已接受消息账本 |

**整体进展评估**：Reborn WebUI Beta 的 M1/M2 模块（基础路由+入站工作流）已基本完成闭环，认证基础设施（M4）进入"可组合"状态，项目正从"架构搭建"转向"能力填充"阶段。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 核心诉求分析 |
|:---|:---|:---:|:---|
| 🥇 | [#3702](https://github.com/nearai/ironclaw/issues/3702) Reborn二进制E2E测试框架 | 4条 | **质量基础设施焦虑**：作者henrypark133系统梳理88个`tests/*.rs`文件，要求建立与主agent循环的Rust集成测试对等性。反映社区对Reborn大规模重构后**回归测试覆盖不足**的深层担忧 |
| 🥈 | [#3803](https://github.com/nearai/ironclaw/issues/3803) Lane 3 secrets布线（已关闭） | 2条 | 生产环境凭证注入的"最后一公里"问题，涉及native/MCP/WASM三类工具的统一安全模型 |
| 🥉 | [#3798](https://github.com/nearai/ironclaw/issues/3798) 子agent生成设计 | 2条 | Reborn agent循环的并发模型设计——阻塞/非阻塞生成、父子生命周期隔离、资源配额传递 |

### 反应最多的议题

| Issue | 👍数 | 说明 |
|:---|:---:|:---|
| [#2117](https://github.com/nearai/ironclaw/issues/2117) ironclaw-bridge本地文件/MCP桥接守护进程 | 1 | 唯一获得👍的Issue，反映**云托管场景下的本地资源访问**是真实用户痛点（Obsidian vault、本地项目目录）|

**热点洞察**：社区注意力呈现"两极分化"——核心贡献者聚焦Reborn内部架构（认证、子agent、测试框架），而外部用户的实际诉求（本地桥接、云+端协同）获得的响应有限。#2117 作为4月创建的长期Issue仅1个👍，说明项目当前阶段仍以**平台能力优先于用户场景**。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|:---|:---|:---|:---|
| 🔴 **高** | [#3447](https://github.com/nearai/ironclaw/issues/3447) | **Nightly E2E持续失败**：`v2-engine`工作流失败，Commit `030cfeb`，自5月10日创建以来未关闭 | ❌ **无fix PR**，持续12天 |
| 🟡 **中** | [#3875](https://github.com/nearai/ironclaw/issues/3875) | **子agent阻塞生成集成间隙**：父agent在子agent完成后无法正确恢复，暴露于PR #3872 扩展过程中 | 🔄 **有进行中PR** (#3872 draft) |
| 🟡 **中** | [#3871](https://github.com/nearai/ironclaw/issues/3871) | **executor.rs架构债务**：文件已超架构指南上限，PR #3868 新增子agent处理加剧膨胀 | ⏳ **追踪中**，明确为后续分解任务，不阻塞Phase 1 |

**稳定性评估**：Nightly E2E的持续性失败是最大红灯，可能掩盖Reborn主干的其他回归问题。executor.rs的架构债务虽标记为"不阻塞"，但在高速迭代期存在**技术债务复利风险**。

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 与现有PR关联 | 纳入下一版本可能性 |
|:---|:---|:---|:---:|
| **定时触发工作流（Cron）** | [#3873](https://github.com/nearai/ironclaw/issues/3873) henrypark133 | 独立设计，无关联PR | ⭐⭐⭐ **高** — 设计完整（synthetic inbound message模型），与Reborn架构兼容 |
| **安全用户级工具安装** | [#3905](https://github.com/nearai/ironclaw/issues/3905) serrrfirat | 依赖#3803（已关闭）的secrets/egress基础 | ⭐⭐⭐ **高** — 明确scoped模型已存在，需扩展至第三方工具 |
| **GitHub WASM读写能力路径** | [#3806](https://github.com/nearai/ironclaw/issues/3806) serrrfirat | PR #3909（GitHub v2只读包）、#3910（WASM read egress测试）已开 | ⭐⭐⭐ **高** — 只读先行，读写跟随 |
| **Notion MCP能力路径** | [#3805](https://github.com/nearai/ironclaw/issues/3805) serrrfirat | 依赖Lane 5前置条件 | ⭐⭐☆ **中** — 明确排期在extension-v2 catalog/runtime基线之后 |
| ** durable approval-policy端口** | [#3891](https://github.com/nearai/ironclaw/issues/3891) serrrfirat | 关联#3889（approval interaction service） | ⭐⭐⭐ **高** — 安全关键，阻塞AlwaysAllow的滥用风险 |

**路线图信号**：Google扩展（6阶段PR链）是当下最明确的版本级功能，Gmail包(#3898)、OAuth恢复路径(#3894)、组合布线(#3896)并行推进，预计形成**vNext的核心卖点**。

---

## 7. 用户反馈摘要

> ⚠️ **数据限制**：过去24小时的新开Issues以核心贡献者的架构/实现任务为主，直接用户反馈较少。以下从Issue描述中提炼：

| 痛点/场景 | 来源 | 类型 |
|:---|:---|:---:|
| **"云托管IronClaw无法访问本地文件"** — Obsidian vault、本地项目目录成为阻塞性使用场景 | [#2117](https://github.com/nearai/ironclaw/issues/2117) | 😫 未满足需求 |
| **"token值不得流经聊天转录、模型可见消息、日志或工具输出"** — 手动token提交的安全洁癖 | [#3882](https://github.com/nearai/ironclaw/issues/3882) | 🔒 安全诉求 |
| **"安装hook不应将批量调用降级为N次顺序调用"** — 性能预期与实现落差 | [#3911](https://github.com/nearai/ironclaw/pull/3911) | 😤 性能不满 |
| **"能力输入应在predicate需要时才解析"** — 对大文件blob的"致命"浪费担忧 | [#3913](https://github.com/nearai/ironclaw/pull/3913) | ⚡ 效率焦虑 |

**满意度观察**：Hooks框架(#3573)的评审defer机制运转良好（5个测试覆盖+3个性能/重构跟进PR快速响应），显示项目**对代码质量的自我修正能力较强**。

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后更新 | 积压天数 | 风险说明 |
|:---|:---:|:---:|:---:|:---|
| [#3447](https://github.com/nearai/ironclaw/issues/3447) Nightly E2E失败 | 2026-05-10 | 2026-05-22 | **12天** | 🔴 **最高优先级**：持续集成失效，可能掩盖Reborn主干回归；需立即分配owner |
| [#2117](https://github.com/nearai/ironclaw/issues/2117) ironclaw-bridge | 2026-04-07 | 2026-05-22 | **46天** | 🟡 唯一获👍的用户需求，长期无实质进展；建议评估是否纳入Q3路线图或明确decline |
| [#3094](https://github.com/nearai/ironclaw/issues/3094) Approval/Auth interaction services | 2026-04-29 | 2026-05-22 | **24天** | 🟡 已被拆分为#3889+#3865等，原Issue应关闭或明确作为tracker |
| [#3702](https://github.com/nearai/ironclaw/issues/3702) 二进制E2E测试框架 | 2026-05-16 | 2026-05-22 | **7天** | 🟡 质量基础设施，建议与#3447联动处理 |

**维护者行动建议**：
1. **立即**：指派Nightly E2E失败(#3447)的专项owner，12天红线不可持续
2. **本周**：关闭或重构#3094（已被子Issue覆盖），减少tracker噪音
3. **本月**：对#2117做出路线图承诺或明确decline，维护社区信任

---

> **日报生成依据**：基于GitHub API数据快照，Issues/PR状态截至2026-05-23。链接格式：`https://github.com/nearai/ironclaw/issues/{id}` 或 `/pull/{id}`

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-23

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **报告日期**: 2026-05-23（覆盖 2026-05-22 24h 数据）

---

## 1. 今日速览

LobsterAI 今日呈现**高强度迭代态势**，单日 21 个 PR 更新（12 条已合并/关闭）、1 个新版本发布，核心团队聚焦 **Subagent 子代理系统**的 UX 重构与稳定性加固。版本节奏保持"日更"级别（5.19→5.22），但社区外部贡献仍显沉寂——全部活跃 PR 来自内部成员 `btc69m979y-dotcom`/`fisherdaddy`，5 个 dependabot 依赖升级 PR 及 4 个外部贡献者 PR 长期挂起未决。Issues 仅 1 条新增，技术深度较高但互动有限。

---

## 2. 版本发布

### [LobsterAI 2026.5.22](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.22) 🚀

| 维度 | 详情 |
|:---|:---|
| **发布日期** | 2026-05-22 |
| **核心主题** | Subagent 可视化 + 模型可配置性 + 推理过程透明化 |
| **主要变更** | • **Subagent 会话侧边栏与详情视图** ([#2011](https://github.com/netease-youdao/LobsterAI/pull/2011))：子代理执行过程首次支持独立侧边栏导航与详情页查看<br>• **模型自定义参数 + Thinking Block 展示** ([#2019](https://github.com/netease-youdao/LobsterAI/pull/2019))：用户可覆盖模型默认参数；推理模型的思维链内容现在可见 |

| **潜在影响评估** | |
|:---|:---|
| 破坏性变更 | ⚠️ **中等**：Subagent 渲染管道重构为 `ConversationTurnsView` 共享组件，第三方若依赖旧 `SubagentSessionDetail` 的 `ReactMarkdown` 直出需适配 |
| 迁移注意 | 旧子代理会话首次点击将触发**延迟回填**（lazy persist），或出现短暂加载；本地 DB 将自动创建 `subagent_messages` 表 |
| 配置变更 | 自定义模型参数需通过新接口传入，旧版硬编码参数可能被覆盖 |

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR（12 条）

| PR | 作者 | 领域 | 贡献说明 |
|:---|:---|:---|:---|
| [#2038](https://github.com/netease-youdao/LobsterAI/pull/2038) | fisherdaddy | 全栈 Release | **5.19 版本发布总集**，整合 Subagent UX、Artifacts 预览、Cowork 引擎稳定性、模型配置灵活性 |
| [#2034](https://github.com/netease-youdao/LobsterAI/pull/2034) | btc69m979y-dotcom | main | **子代理消息持久化**：`subagent_messages` SQLite 表，首次加载后免网络 RPC，老会话延迟回填 |
| [#2033](https://github.com/netease-youdao/LobsterAI/pull/2033) | btc69m979y-dotcom | renderer/main/cowork | **修复子代理同步缺失 tool results**、侧边栏高亮状态、空态与错误处理、生成错误检测 |
| [#2030](https://github.com/netease-youdao/LobsterAI/pull/2030) | btc69m979y-dotcom | renderer/main/cowork | **渲染管道重构**：提取可复用 `ConversationTurnsView`，子代理后端输出完整 `CoworkMessage` 格式 |
| [#2029](https://github.com/netease-youdao/LobsterAI/pull/2029) | btc69m979y-dotcom | renderer/main | **修复子代理重复覆盖**：以 `toolCallId` 替代 `agentId` 作为 DB 唯一键；修复 tool results 缺失 |
| [#2027](https://github.com/netease-youdao/LobsterAI/pull/2027) | btc69m979y-dotcom | renderer/cowork | **子代理页交互优化**：侧边栏折叠态切换按钮、可拖拽标题栏、Mac 窗口控件防重叠 |
| [#2037](https://github.com/netease-youdao/LobsterAI/pull/2037) | fisherdaddy | renderer/main/im | IM 相关文案优化 |
| [#2035](https://github.com/netease-youdao/LobsterAI/pull/2035) | fisherdaddy | docs | 修复 Qwen 3.6 Plus 的编码计划配置 |
| [#2032](https://github.com/netease-youdao/LobsterAI/pull/2032) | fisherdaddy | docs/main/openclaw | 修复自定义模型切换错误 |
| [#2031](https://github.com/netease-youdao/LobsterAI/pull/2031) | fisherdaddy | renderer/main/openclaw | 修复浏览器配置失效问题 |
| [#2028](https://github.com/netease-youdao/LobsterAI/pull/2028) | fisherdaddy | renderer/im | UI 更新 |

**整体推进评估**：Subagent 模块从"能用"迈向"好用"，完成**数据层持久化→渲染层复用→交互层打磨**的三级跳，技术债清理速度匹配功能迭代节奏。

---

## 4. 社区热点

> 注：今日所有 PR 评论数均为 `undefined`（数据未采集或零评论），Issues 仅 1 条且评论数 1，社区互动整体**偏冷**。

### 最具技术深度的讨论

| 条目 | 链接 | 热度分析 |
|:---|:---|:---|
| **#2036** 请求 OpenClaw gateway 增加 `agent:turn`/`agent:loop` 事件 | [Issue #2036](https://github.com/netease-youdao/LobsterAI/issues/2036) | 作者 `woxinsj` 提出**架构级改进**：主循环每轮结束后自动广播事件，实现"真正实时落盘"。当前子代理持久化（#2034）是**拉模式**（首次点击回填），此 Issue 主张**推模式**（事件驱动实时写盘）。诉求背后是对**数据可靠性**的关切——异常崩溃时可能丢失未持久化的子代理执行中间态。 |

### 长期挂起的外部贡献（维护者需关注）

| PR | 作者 | 挂起天数 | 诉求 |
|:---|:---|:---|:---|
| [#1534](https://github.com/netease-youdao/LobsterAI/pull/1534) 安全修复：API 代理日志脱敏 | kayo5994 | **45 天** | 生产环境安全合规刚需，API Key/Token 防泄露 |
| [#1535](https://github.com/netease-youdao/LobsterAI/pull/1535) 安全修复：渲染进程 KV Store 键白名单 | kayo5994 | **45 天** | 纵深防御，阻止渲染层突破后读写敏感配置 |
| [#1533](https://github.com/netease-youdao/LobsterAI/pull/1533) 使用统计面板 | MaoQianTu | **45 天** | 用户侧数据洞察，产品化体验 |
| [#1531](https://github.com/netease-youdao/LobsterAI/pull/1531) 主题色选择器 UI 重构 | leedalei | **45 天** | 设置页视觉简化 |

**矛盾信号**：内部团队日更迭代，外部安全/体验 PR 集体 stale，社区协作健康度存疑。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | 自定义模型切换报错 | **已修复** | [#2032](https://github.com/netease-youdao/LobsterAI/pull/2032) | 使用自定义模型配置的用户 |
| 🔴 **高** | 浏览器配置失效 | **已修复** | [#2031](https://github.com/netease-youdao/LobsterAI/pull/2031) | 依赖浏览器工具调用的 Agent 工作流 |
| 🟡 **中** | 子代理同步缺失 tool results/tool input 显示 | **已修复** | [#2033](https://github.com/netease-youdao/LobsterAI/pull/2033) | Subagent 调试与审计 |
| 🟡 **中** | 子代理重复覆盖（`agentId` 碰撞） | **已修复** | [#2029](https://github.com/netease-youdao/LobsterAI/pull/2029) | 多子代理并发场景 |
| 🟡 **中** | 子代理生成错误未被检测（回填路径） | **已修复** | [#2033](https://github.com/netease-youdao/LobsterAI/pull/2033) | 错误处理与重试逻辑 |
| 🟢 **低** | Qwen 3.6 Plus 编码计划配置错误 | **已修复** | [#2035](https://github.com/netease-youdao/LobsterAI/pull/2035) | 特定模型用户 |

**稳定性趋势**：今日修复集中在 **OpenClaw 网关层**（模型/浏览器配置）与 **Subagent 数据一致性**，属于 5.19 大版本发布后的**快速补丁波**，符合预期。

---

## 6. 功能请求与路线图信号

### 已明确信号（来自已合并 PR）

| 方向 | 证据 | 下一版本概率 |
|:---|:---|:---|
| **Subagent 可观测性增强** | #2030 渲染管道复用、#2027 交互优化、#2034 持久化 | ✅ 已发布（5.22） |
| **模型参数开放** | #2019 自定义参数 + Thinking Block | ✅ 已发布（5.22） |

### 待明确信号（来自 Issues/开放 PR）

| 需求 | 来源 | 可行性评估 |
|:---|:---|:---|
| **OpenClaw 事件驱动架构**（`agent:turn`/`agent:loop`） | [Issue #2036](https://github.com/netease-youdao/LobsterAI/issues/2036) | **高**。与现有子代理持久化方向一致，但需网关层协议变更，跨仓库协调（OpenClaw 独立项目） |
| **本地使用统计面板** | [PR #1533](https://github.com/netease-youdao/LobsterAI/pull/1533) | **中**。产品化体验，但 45 天未响应，优先级存疑 |
| **主题色 UI 简化** | [PR #1531](https://github.com/netease-youdao/LobsterAI/pull/1531) | **低**。纯体验优化，无功能增益 |

---

## 7. 用户反馈摘要

> 基于有限 Issues 评论提炼，样本量小（n=1 Issue + 0 有效 PR 评论）

### 痛点
- **实时数据可靠性焦虑**：`woxinsj` 明确指出当前子代理持久化是"伪实时"——需等待用户点击触发回填，崩溃时存在丢失窗口（[Issue #2036](https://github.com/netease-youdao/LobsterAI/issues/2036)）

### 隐含诉求
- **事件系统标准化**：用户期望 LobsterAI 与 OpenClaw gateway 之间有更紧密的集成契约，而非仅 HTTP 拉取
- **可扩展的 Hook 机制**：`agent:turn`/`agent:loop` 事件暗示用户希望构建**自定义监听器**（如实时落盘、外部审计、进度推送）

---

## 8. 待处理积压

### 🔴 需维护者紧急关注

| PR/Issue | 挂起时间 | 风险 | 建议动作 |
|:---|:---|:---|:---|
| [#1534](https://github.com/netease-youdao/LobsterAI/pull/1534) API 日志脱敏 | 45 天 | **安全合规风险**，生产环境密钥泄露 | 安排安全 review，优先合并或给出修改意见 |
| [#1535](https://github.com/netease-youdao/LobsterAI/pull/1535) KV Store 白名单 | 45 天 | **纵深防御缺口**，渲染层权限过大 | 同上，安全相关 |
| [#1766](https://github.com/netease-youdao/LobsterAI/pull/1766)-[#1763](https://github.com/netease-youdao/LobsterAI/pull/1763) 依赖升级（Vite/React/Electron） | 32-42 天 | **技术债累积**，Electron 42 已发布 | 批量 review 或关闭过期的 dependabot PR |

### 🟡 产品体验类

| PR | 挂起时间 | 说明 |
|:---|:---|:---|
| [#1533](https://github.com/netease-youdao/LobsterAI/pull/1533) 使用统计 | 45 天 | 社区贡献，需产品决策是否纳入 |
| [#1531](https://github.com/netease-youdao/LobsterAI/pull/1531) 主题色 UI | 45 天 | 设计 review 可能阻塞 |

---

## 附录：数据健康度仪表盘

| 指标 | 数值 | 评估 |
|:---|:---|:---|
| 日活 PR 数 | 21 | ⬆️ 高 |
| 日合并率 | 57% (12/21) | ⬆️ 健康 |
| 外部贡献占比 | 0%（今日合并） | ⬇️ 风险 |
| Stale PR 占比 | 24% (5/21 超过 30 天) | ⬇️ 需清理 |
| Issue 响应时效 | 1 条/日，无关闭 | ⬇️ 偏低 |
| 安全相关 PR 积压 | 2 条超 45 天 | 🔴 **告警** |

---

*日报生成时间：2026-05-23*  
*数据来源：GitHub API 公开数据*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-23

---

## 1. 今日速览

Moltis 今日呈现**高强度迭代态势**：24小时内 9 个 PR 全部完成合并/关闭，7 个 Issue 同步关闭，**合并率高达 100%**，无待合并 PR 积压。开发节奏极为紧凑，核心贡献者 `penso` 主导了 8/9 的 PR，显示出高度集中的维护效率。今日工作聚焦三大主线：**Docker/容器环境稳定性修复**（sandbox 媒体读取、浏览器沙箱、数据挂载自动检测）、**语音/电话通道质量提升**（Twilio 语音识别、Piper TTS 音频格式、OpenAI TTS 兼容性），以及**开发者体验增强**（本地文档暴露给 Agent、任意文件附件支持）。唯一活跃 Issue 为轻量级 UI 样式问题，整体项目健康度优秀，技术债务快速清偿。

---

## 2. 版本发布

**无新版本发布。** 今日未发布 Release，但大量修复已合并至主分支，建议关注后续版本是否打包这些关键稳定性改进。

---

## 3. 项目进展

### 已合并/关闭的 9 个 PR 按主题归类：

| 主题 | PR | 核心进展 |
|:---|:---|:---|
| **Agent 开发体验** | [#1044](https://github.com/moltis-org/moltis/pull/1044) | **Agent 现可 OOTB 访问本地 Moltis 文档**：通过 `MOLTIS_DOCS_DIR` 环境变量、打包文档、源码文档或嵌入式回退四层解析，生成本地配置模板引用，减少 Agent 对外部文档的依赖 |
| **语音 TTS 格式治理** | [#1043](https://github.com/moltis-org/moltis/pull/1043) | **Piper TTS 音频格式规范化**：区分 `AudioFormat::Pcm` 与 WAV，非 PCM 请求自动包装为 WAV，解决原始 PCM 与 WAV 混用导致的元数据缺失问题 |
| **Web UI 附件能力** | [#1042](https://github.com/moltis-org/moltis/pull/1042) | **聊天支持任意文件附件**：保留多模态图片内联处理，非图片附件上传至会话媒体并传递 MIME 类型/字节大小元数据，渲染附件卡片 |
| **TTS 提供商兼容性** | [#1041](https://github.com/moltis-org/moltis/pull/1041) | **OpenAI 兼容 TTS 强制使用 MP3**：解决 `response_format: opus` 对 Speaches 等服务器的不兼容问题，非 OpenAI 提供商保留 OGG/Opus 以保证质量 |
| **Docker 沙箱稳定性** | [#1040](https://github.com/moltis-org/moltis/pull/1040) | **沙箱媒体文件读取双路径回退**：挂载主机读取失败时回退至容器内读取，`docker cp` 错误分类避免空 OCI tar 流误报 |
| **安全基础设施** | [#1033](https://github.com/moltis-org/moltis/pull/1033) | **Vault 加密可选禁用**：新增 `auth.vault_enabled` 开关，支持无 Vault 启动密码认证；提供解密后禁用 API 及 UI 操作，降低部署门槛 |
| **电话通道修复** | [#1034](https://github.com/moltis-org/moltis/pull/1034) | **Twilio 语音采集解析修复**：`SpeechResult`/`Digits` 优先于 `CallStatus=in-progress` 处理，新增真实负载回归测试与调试日志 |
| **容器环境自适应** | [#1035](https://github.com/moltis-org/moltis/pull/1035) | **Docker/Podman 数据挂载自动检测**：当前容器检测失败时扫描运行中容器，共享挂载检测逻辑至 exec sandbox 与浏览器 profile 挂载 |
| **依赖安全** | [#1039](https://github.com/moltis-org/moltis/pull/1039) | OpenSSL 补丁升级 `0.10.79 → 0.10.80`（Dependabot） |

**整体推进评估**：今日合并内容覆盖 **部署灵活性**（Vault 可选、文档本地化）、**容器生产环境鲁棒性**（三重 Docker 相关修复）、**多通道用户体验**（语音/电话/Web 附件），属于**质量冲刺型迭代**，为后续版本奠定稳定性基础。

---

## 4. 社区热点

| 排名 | Issue/PR | 互动指标 | 热度分析 |
|:---|:---|:---|:---|
| 🔥 1 | [#977](https://github.com/moltis-org/moltis/issues/977) Docker 浏览器沙箱失败 | 5 评论，0 👍 | **最高讨论热度**。Proxmox LXC + Docker 嵌套容器场景的浏览器沙箱问题，涉及 Docker socket 挂载、命名卷、权限多层复杂度。用户 `TLA020` 提供了详细环境复现，维护者通过 [#1035](https://github.com/moltis-org/moltis/pull/1035)（挂载自动检测）和 [#1040](https://github.com/moltis-org/moltis/pull/1040)（媒体读取回退）分阶段修复。反映 **Proxmox/LXC 用户群体增长** 与 **嵌套虚拟化场景的边缘情况处理挑战**。 |
| 2 | [#1028](https://github.com/moltis-org/moltis/issues/1028) Agent 默认访问 Moltis 文档 | 2 评论，0 👍 | 由 `IlyaBizyaev` 提出，快速闭环。诉求明确：Agent 不应依赖外部网络获取框架文档，体现 **离线/私有化部署场景的核心需求**。 |
| 3 | 其余 6 个 Issue | 0-1 评论 | 均为快速识别-修复型，无持续讨论，说明问题定义清晰或维护者响应极快。 |

**社区诉求信号**：容器化部署（尤其 Proxmox/LXC 嵌套）的**边缘场景稳定性**是用户最大痛点；**离线可用性**（文档本地化）优先级上升；**语音通道质量**（Twilio、TTS 兼容性）直接影响生产可用性。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | Fix PR | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#977](https://github.com/moltis-org/moltis/issues/977) Docker 浏览器沙箱完全失败 | ✅ 已关闭 | [#1035](https://github.com/moltis-org/moltis/pull/1035) + [#1040](https://github.com/moltis-org/moltis/pull/1040) | **Docker 部署用户无法使用浏览器工具**，Proxmox/LXC 场景高发 |
| 🔴 **高** | [#1032](https://github.com/moltis-org/moltis/issues/1032) Twilio 电话 Agent 只问候不响应 | ✅ 已关闭 | [#1034](https://github.com/moltis-org/moltis/pull/1034) | **电话通道核心功能断裂**，用户支付后无法获得交互价值 |
| 🟡 **中** | [#1037](https://github.com/moltis-org/moltis/issues/1037) Docker 中 `send_image`/`send_document` 失败 | ✅ 已关闭 | [#1040](https://github.com/moltis-org/moltis/pull/1040) | 容器化部署的文件传输功能 |
| 🟡 **中** | [#1030](https://github.com/moltis-org/moltis/issues/1030) OpenAI TTS 强制 `opus` 不兼容 Speaches | ✅ 已关闭 | [#1041](https://github.com/moltis-org/moltis/pull/1041) | 自托管 TTS 服务器兼容性 |
| 🟢 **低** | [#1045](https://github.com/moltis-org/moltis/issues/1045) 浅色模式代码块无语法高亮 | 🆕 **开放中** | 待修复 | UI 视觉体验，不影响功能 |

**稳定性评估**：今日关闭 4 个高/中严重 Bug，**遗留风险极低**。唯一开放 Issue 为纯样式问题，项目处于**健康修复窗口期**。值得注意的是，3/4 的高影响 Bug 均与 **Docker/容器环境** 相关，暗示该部署路径的用户占比显著上升，但测试覆盖仍有缺口（Proxmox/LXC 等嵌套场景）。

---

## 6. 功能请求与路线图信号

| 需求来源 | 内容 | 已实现/相关 PR | 纳入下一版本概率 |
|:---|:---|:---|:---|
| [#1028](https://github.com/moltis-org/moltis/issues/1028) | Agent OOTB 访问本地文档 | ✅ [#1044](https://github.com/moltis-org/moltis/pull/1044) | **已合并**，将随下一版本发布 |
| [#1029](https://github.com/moltis-org/moltis/issues/1029) | Piper TTS 内部处理音频转换 | ✅ [#1043](https://github.com/moltis-org/moltis/pull/1043) | **已合并** |
| [#1036](https://github.com/moltis-org/moltis/issues/1036) | Web UI 支持任意入站文件附件 | ✅ [#1042](https://github.com/moltis-org/moltis/pull/1042) | **已合并** |

**路线图推断**：
- **近期（已就绪）**：文档本地化、附件扩展、TTS 格式治理——均指向 **Agent 能力增强** 与 **多模态交互丰富度**
- **中期信号**：Vault 可选禁用（[#1033](https://github.com/moltis-org/moltis/pull/1033)）降低部署门槛，可能配合 **轻量级/个人用户市场拓展**
- **待观察**：无未实现的高票功能请求，社区需求与开发节奏高度同步

---

## 7. 用户反馈摘要

### 痛点与场景

| 用户 | 场景 | 核心不满 | 解决状态 |
|:---|:---|:---|:---|
| `TLA020` | Proxmox LXC → Docker 嵌套部署 | 浏览器沙箱完全不可用，错误信息模糊（`/data/browse` 创建失败） | ✅ 通过挂载自动检测 + 读取回退修复 |
| `karlmdavis` | Twilio 生产电话服务 | Agent 单向输出，用户输入被完全忽略，服务不可用 | ✅ 语音采集解析逻辑修复 |
| `lukemalcolm` | 自托管 Speaches TTS 服务器 | OpenAI TTS 硬编码 `opus`，与替代实现不兼容 | ✅ 智能格式选择（OpenAI→MP3，其他→Opus） |
| `IlyaBizyaev` | 浅色主题日常使用 | 代码块可读性下降，开发体验受损 | 🆕 待修复 |

### 满意度信号
- **快速响应**：多个 Issue 24 小时内从报告到关闭（如 [#1036](https://github.com/moltis-org/moltis/issues/1036) 21 日创建 → 22 日关闭）
- **修复彻底性**：`penso` 的 PR 普遍包含**回归测试**（如 [#1034](https://github.com/moltis-org/moltis/pull/1034) 的 Twilio 负载测试）、**多层级回退**（如 [#1044](https://github.com/moltis-org/moltis/pull/1044) 的四层文档解析）、**配置灵活性**（如 [#1033](https://github.com/moltis-org/moltis/pull/1033) 的 opt-out 设计）

### 深层需求模式
> **"容器化优先"**：用户默认选择 Docker 部署，但期望行为与裸机一致。项目需将 **容器环境适配** 从"边缘情况"提升为"一等公民"测试目标。

> **"自托管兼容"**：Speaches、Piper 等替代方案的使用，反映用户对 **供应商锁定规避** 和 **成本优化** 的强烈需求。

---

## 8. 待处理积压

| 项目 | 创建时间 | 最后更新 | 状态 | 提醒 |
|:---|:---|:---|:---|:---|
| [#1045](https://github.com/moltis-org/moltis/issues/1045) 浅色模式代码块无语法高亮 | 2026-05-22 | 2026-05-22 | 🆕 **开放，0 评论** | 轻量级 UI 修复，建议快速认领；虽不影响功能，但损害开发者群体（Moltis 核心用户画像）的日常体验 |

**积压健康度**：✅ **优秀**。仅 1 个开放 Issue，无长期悬停 PR。今日关闭的 7 个 Issue 中，6 个为 5 月 21-22 日新创建，**问题新鲜度与解决速度高度匹配**，无技术债务累积迹象。

---

## 附录：数据总览

| 指标 | 数值 |
|:---|:---|
| Issues 更新（24h） | 8（新开/活跃: 1，关闭: 7）|
| PR 更新（24h） | 9（待合并: 0，已合并/关闭: 9）|
| 版本发布 | 0 |
| 核心贡献者活跃度 | `penso`: 8 PR，`dependabot[bot]`: 1 PR |
| 社区报告者 | `IlyaBizyaev`: 3 Issues，`TLA020`, `thedanhoffman`, `lukemalcolm`, `karlmdavis`: 各 1 Issue |

---

*日报生成时间：2026-05-23 | 数据来源：moltis-org/moltis GitHub 公开活动*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-23

> 项目地址：[github.com/agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)（注：实际仓库名为 QwenPaw）

---

## 1. 今日速览

CoPaw（QwenPaw）今日保持**高活跃度**，24小时内产生 **24 条 Issues 更新**（17 活跃/新开，7 关闭）和 **23 条 PR 更新**（13 待合并，10 已合并/关闭），无新版本发布。社区聚焦**稳定性修复**（WeChat/DingTalk 通道、Gemini 参数兼容）与**体验优化**（可定制斜杠菜单、桌面端窗口记忆、移动端适配）。首次贡献者活跃，PR #4638（插件生命周期钩子）、#4615（ACP 孤儿进程修复）等进入评审队列，显示项目生态吸引力持续增强。

---

## 2. 版本发布

**无新版本发布**（v1.1.8.post1 仍为最新版本）

---

## 3. 项目进展

### 已合并/关闭的重要 PR（10 条）

| PR | 作者 | 核心贡献 | 关联 Issue |
|:---|:---|:---|:---|
| [#4600](https://github.com/agentscope-ai/QwenPaw/pull/4600) | hongxicheng | **修复 DingTalk 中文文件名编码**：RFC 8089 URL 中百分号编码的中文文件名未解码，导致上传文件显示为 `%E7%99%BE...` 乱码 | [#4586](https://github.com/agentscope-ai/QwenPaw/issues/4586) |
| [#4627](https://github.com/agentscope-ai/QwenPaw/pull/4627) | hongxicheng | **修复 WeChat token 失效跨请求污染**：将实例级 `_context_token_invalid` 标志改为请求级元数据标志，避免单次请求 token 失效后阻塞所有后续请求（包括定时任务） | [#4612](https://github.com/agentscope-ai/QwenPaw/issues/4612), [#4618](https://github.com/agentscope-ai/QwenPaw/pull/4618) |
| [#4621](https://github.com/agentscope-ai/QwenPaw/pull/4621) | qbc2016 | **修复 Gemini/Gemma `max_tokens` 参数崩溃**：将 `max_tokens` 映射为 `max_output_tokens`，并修正 `ValidationError` 被误分类为 `MODEL_UNAUTHORIZED_ACCESS` 的问题 | [#4605](https://github.com/agentscope-ai/QwenPaw/issues/4605) |
| [#4434](https://github.com/agentscope-ai/QwenPaw/pull/4434) | weixizi | **定时任务支持"执行前清空上下文"**：防止累积会话历史干扰自动化任务，内置错误隔离机制 | [#4432](https://github.com/agentscope-ai/QwenPaw/issues/4432) |
| [#4626](https://github.com/agentscope-ai/QwenPaw/pull/4626) | Osier-Yi | **修复 QwenPaw Pet 连续对话卡死**：阻塞事件错误推进序列高水位标记，导致后续 `query.received` 被丢弃为"过期"状态 | - |
| [#4623](https://github.com/agentscope-ai/QwenPaw/pull/4623) | zhaozhuang521 | **技能市场页面样式优化**：替换菜单图标、代码与性能优化 | - |
| [#4618](https://github.com/agentscope-ai/QwenPaw/pull/4618) | hongxicheng | ~~WeChat token 失效跳过机制（初版，已被 #4627 替代）~~ | - |
| [#4395](https://github.com/agentscope-ai/QwenPaw/pull/4395) | aqilaziz | **安全工具守卫单元测试**：覆盖工具解析优先级、`all`/`off` 令牌、环境变量解析等 | - |
| [#4636](https://github.com/agentscope-ai/QwenPaw/pull/4636) | DICKQI | ~~可定制斜杠菜单（初版，已关闭，由 #4637 替代）~~ | - |

**整体推进评估**：今日合并聚焦**通道稳定性**（WeChat/DingTalk 双通道修复）与**模型兼容性**（Gemini 参数映射），均为生产环境关键痛点。定时任务上下文清空功能完善了自动化工作流可靠性。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 |
|:---|:---|:---|:---|
| 🔥1 | [#4620](https://github.com/agentscope-ai/QwenPaw/issues/4620) **聊天历史消失** | 12 评论 | **数据可靠性危机**：用户切换会话后原始消息丢失，被标记为"critical bug and existed for a long time"，严重影响信任 |
| 🔥2 | [#4051](https://github.com/agentscope-ai/QwenPaw/issues/4051) DeepSeek think 内容解析问题 | 10 评论 | **推理模型兼容性**：DeepSeek V4 Flash 的 `<thinking>` 标签内容未被正确提取，导致回复为空 |
| 🔥3 | [#4474](https://github.com/agentscope-ai/QwenPaw/issues/4474) ChatGPT-5.5 支持询问 | 8 评论 | **新模型追新需求**：用户急于接入最新 OpenAI 模型，配置后无法运行 |
| 4 | [#4607](https://github.com/agentscope-ai/QwenPaw/issues/4607) `NO_PROXY` 环境变量未生效 | 6 评论 | **企业网络环境适配**：代理绕过配置失效，影响内网部署 |
| 5 | [#4625](https://github.com/agentscope-ai/QwenPaw/issues/4625) MiniMax-M2.5 XML 思考格式不兼容 | 4 评论 | **国产模型适配**：MiniMax 返回 XML 格式思考过程导致指令执行中断 |

**诉求分析**：社区核心焦虑集中在**数据持久性**（#4620）与**模型生态广度**（DeepSeek/MiniMax/ChatGPT-5.5）。历史消失问题长期存在却未根治，可能反映底层存储架构缺陷。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **P0-严重** | [#4620](https://github.com/agentscope-ai/QwenPaw/issues/4620) | 聊天历史随机消失，长期存在的 critical bug | **无 Fix PR** | ❌ 待处理 |
| 🔴 **P0-严重** | [#4625](https://github.com/agentscope-ai/QwenPaw/issues/4625) | MiniMax-M2.5 XML 思考格式导致问答中断 | **无 Fix PR** | ❌ 待处理 |
| 🟡 **P1-高** | [#4607](https://github.com/agentscope-ai/QwenPaw/issues/4607) | `NO_PROXY` 环境变量被代理配置覆盖 | **无 Fix PR** | ❌ 待处理 |
| 🟡 **P1-高** | [#4556](https://github.com/agentscope-ai/QwenPaw/issues/4556) | 语音转录绕过配置 Whispher 强制使用浏览器原生 API | **无 Fix PR** | ❌ 待处理 |
| 🟡 **P1-高** | [#4616](https://github.com/agentscope-ai/QwenPaw/issues/4616) | "梦境觉醒"任务报错，未配置 WeChat 却触发 WeChat 通道错误 | **无 Fix PR** | ❌ 待处理 |
| 🟡 **P1-高** | [#4619](https://github.com/agentscope-ai/QwenPaw/issues/4619) | Web UI 视觉不一致（对齐、形状、颜色差异） | **无 Fix PR** | ❌ 待处理 |
| 🟢 **P2-中** | [#3984](https://github.com/agentscope-ai/QwenPaw/issues/3984) | `context_check` 拆分 user/assistant 对，导致孤儿消息 | **无 Fix PR** | ❌ 待处理 |
| 🟢 **P2-中** | [#4611](https://github.com/agentscope-ai/QwenPaw/issues/4611) | ACP 会话任务完成后未自动关闭，下次启动冲突 | [PR #4615](https://github.com/agentscope-ai/QwenPaw/pull/4615) 评审中 | 🔄 |
| 🟢 **P2-中** | [#4631](https://github.com/agentscope-ai/QwenPaw/issues/4631) | Desktop 版本左上角显示 Python 图标而非应用图标 | **无 Fix PR** | ❌ 待处理 |

**已修复今日 Bug**：#4605（Gemini）、#4586（DingTalk 中文名）、#4612（WeChat 发送不稳定）、#3707（MiniMax M2.7 多模态支持标记）

---

## 6. 功能请求与路线图信号

| 功能请求 | 状态 | 纳入可能性评估 |
|:---|:---|:---|
| [#4633](https://github.com/agentscope-ai/QwenPaw/issues/4633) / [PR #4637](https://github.com/agentscope-ai/QwenPaw/pull/4637) **可定制斜杠菜单** | PR 已提交，#4636 关闭后由 #4637 替代 | **高** — 代码已完成，社区呼声明确，预计 v1.1.9 纳入 |
| [#4634](https://github.com/agentscope-ai/QwenPaw/issues/4634) **窗口大小位置记忆** | 仅 Issue，无 PR | **中高** — Desktop 体验基础需求，实现简单 |
| [#4635](https://github.com/agentscope-ai/QwenPaw/issues/4635) **WebUI 移动端响应式设计** | 仅 Issue，无 PR | **中** — 战略价值高（已有钉钉/飞书等移动端通道），但工程量大 |
| [#4613](https://github.com/agentscope-ai/QwenPaw/issues/4613) / [PR #4638](https://github.com/agentscope-ai/QwenPaw/pull/4638) **插件 Agent 生命周期钩子** | PR 评审中 | **高** — 插件生态核心基础设施，LightRAG 等复杂插件依赖 |
| [#4624](https://github.com/agentscope-ai/QwenPaw/issues/4624) **按模型独立配置重试/限流** | 仅 Issue，无 PR | **中** — 生产环境多模型混用刚需，但涉及配置架构重构 |
| [#4617](https://github.com/agentscope-ai/QwenPaw/issues/4617) **远程 Playwright 浏览器端点** | 仅 Issue，无 PR | **中低** — 特定场景需求（无头浏览器集群），可 workaround |
| [#4632](https://github.com/agentscope-ai/QwenPaw/issues/4632) **多行文本写入工具** | 仅 Issue，无 PR | **高** — Skill 开发基础设施缺失，阻塞自动化工作流固化 |
| [PR #4628](https://github.com/agentscope-ai/QwenPaw/pull/4628) **插件 ZIP 导出/下载** | PR 已提交 | **高** — 插件生态闭环（备份/分享/迁移），与 #4613 形成组合拳 |
| [PR #4630](https://github.com/agentscope-ai/QwenPaw/pull/4630) **MCP 市场/健康检查/密钥验证** | PR 已提交 | **高** — MCP 生态扩展关键，与模型工具链战略对齐 |
| [PR #4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) **DataPaw 数据分析插件（12 BI skills）** | PR 评审中 | **中高** — 垂直场景扩展，但需评估与现有能力重叠 |

---

## 7. 用户反馈摘要

### 痛点
- **"历史消失让我不敢用"** — #4620 用户直言 critical bug 长期存在，滚动到顶也找不到原始消息，**数据信任崩塌**
- **"配置对了但就是不工作"** — #4474（ChatGPT-5.5）、#4607（NO_PROXY）反映**配置即服务**体验差，用户无法自助诊断
- **"国产模型二等公民"** — MiniMax（#4625 XML 格式、#3707 多模态标记错误）、DeepSeek（#4051 think 解析）适配滞后于国际模型
- **"微信发送成功实际没收到"** — #4612、#4521 通道**虚假成功状态**困扰用户，已部分修复

### 场景
- **多模型生产混用**：#4624 用户同时使用 MiniMax M2.7/M2.5，配额差异大，全局配置成为瓶颈
- **插件开发者**：#4613 作者基于 LightRAG 构建知识库插件，受限于无 Agent 钩子，被迫走公共接口
- **移动端管理**：#4635 用户需要在手机浏览器管理 Agent，而非仅通过钉钉/飞书等通道聊天

### 满意点
- 定时任务"执行前清空上下文"（#4432）获认可，解决自动化场景历史累积干扰
- 社区响应速度较快，WeChat/DingTalk 通道问题 1-2 日内有修复 PR

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 最后更新 | 风险说明 |
|:---|:---|:---|:---|
| [#3984](https://github.com/agentscope-ai/QwenPaw/issues/3984) `context_check` 拆分消息对 | 2026-04-30 | 2026-05-22 | **24 天无实质进展**，与 #4620 历史消失可能同源，建议关联排查 |
| [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) Tauri 2.x Desktop 支持 | 2026-04-24 | 2026-05-22 | **28 天评审中**，Desktop 战略项目，需协调前后端资源推进 |
| [#3707](https://github.com/agentscope-ai/QwenPaw/issues/3707) MiniMax M2.7 多模态 | 2026-04-22 | 2026-05-22 | 已关闭但 #4625 显示 MiniMax 系列仍有深层兼容问题，需系统性审计 |
| [#4464](https://github.com/agentscope-ai/QwenPaw/pull/4464) E2E 测试迁移 | 2026-05-17 | 2026-05-22 | **6 天无更新**，质量基础设施，阻塞 CI 成熟度提升 |
| [#4467](https://github.com/agentscope-ai/QwenPaw/pull/4467) 967 个安全/Agent 单元测试 | 2026-05-17 | 2026-05-22 | **6 天无更新**，89% 安全覆盖率，建议优先合并以建立质量门禁 |

---

> **维护者行动建议**：
> 1. **紧急**：指派 #4620 历史消失问题，关联 #3984 做根因分析
> 2. **本周**：合并 #4637（斜杠菜单）、#4638（插件钩子）、#4621（Gemini 修复）进入 v1.1.9 候选
> 3. **本月**：完成 #3813 Desktop 评审或给出明确时间表，回应社区对原生客户端的期待

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-23

## 1. 今日速览

ZeroClaw 今日保持**高活跃度开发节奏**：24小时内 37 条 Issues 更新（30 活跃/新开，7 关闭）、50 条 PR 更新（36 待合并，14 已合并/关闭），无新版本发布。项目核心聚焦于 **WhatsApp 协议修复落地**、**MCP 工具过滤系统重构**、**TUI 终端界面集成**三大主线，同时 Dream Mode 记忆巩固功能进入实质性 PR 阶段。社区治理层面出现关于工作流标签自动化的 RFC 讨论，显示项目正从功能冲刺向规模化协作演进。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 说明 | 关联 Issue |
|:---|:---|:---|:---|
| [#6706](https://github.com/zeroclaw-labs/zeroclaw/pull/6706) | alexandme | **WhatsApp Web 协议修复**：将 `wa-rs*` 0.2 升级至 `whatsapp-rust` 0.6，恢复 2026-04-24 服务器端协议升级后的消息收发能力 | [#6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) |
| [#6838](https://github.com/zeroclaw-labs/zeroclaw/pull/6838) | puneetdixit200 | **Doctor 诊断工具修复**：`zeroclaw doctor models` 现正确读取配置化的 provider 凭证，解决自定义 provider 模型列表获取失败 | [#6756](https://github.com/zeroclaw-labs/zeroclaw/issues/6756) |
| [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) | alexandme | **OTel 可观测性增强**：工具调用链路补充 `gen_ai.tool.*` 语义化属性，支持完整追踪工具执行失败原因 | [#5980](https://github.com/zeroclaw-labs/zeroclaw/issues/5980) |
| [#6804](https://github.com/zeroclaw-labs/zeroclaw/pull/6804) | vernonstinebaker | **部署脚本修复**：systemd 服务模板用户名参数化，解除对 `pi` 用户的硬编码依赖 | — |
| [#6814](https://github.com/zeroclaw-labs/zeroclaw/pull/6814) | Project516 | **CI 标签修复**：防止 `.github` 目录非 CI 文件被误标为 `ci` 标签 | — |
| [#6769](https://github.com/zeroclaw-labs/zeroclaw/pull/6769) | Project516 | **文档修复**：`philosophy.md` 中 5 处 Markdown 链接格式错误 | — |
| [#6748](https://github.com/zeroclaw-labs/zeroclaw/pull/6748) | Project516 | **资源优化**：24 张图片/SVG 无损压缩，减小仓库体积 | — |

**整体推进评估**：WhatsApp 渠道 S1 阻断级故障正式闭环，标志着外部依赖（WhatsApp Web 协议）的应急响应机制生效；OTel 增强补全了生产环境可观测性短板；TUI 集成进入主干合并阶段（[#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) 为超大 PR）。

---

## 4. 社区热点

### 讨论最活跃的 Issues/PRs

| 排名 | 条目 | 评论数 | 核心诉求分析 |
|:---|:---|:---|:---|
| 🥇 | [#5849 Dream Mode — 周期性记忆巩固与反思学习](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) | **11** | 社区对"AI 自主离线学习"架构设计深度参与，争论焦点：本地-only 默认 vs LLM 辅助反思的隐私边界、cron 调度与心跳机制的冲突、记忆修剪策略 |
| 🥈 | [#6246 WhatsApp Web 协议升级后消息中断](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) | **6** | **已关闭**。用户验证修复有效性，暴露上游 Rust WhatsApp 库维护碎片化问题（`wa-rs` vs `whatsapp-rust` 分叉） |
| 🥉 | [#6699 `tool_filter_groups` 对真实 MCP 工具无效](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) | **6** | 配置系统与运行时行为脱节，技能工具命名空间（`skill__tool`）与 MCP 工具前缀检查冲突，需架构级修复 |
| 4 | [#6808 RFC: 工作泳道、看板自动化与标签清理](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | **4** | 维护者规模化协作痛点：手动标签维护负担、PR 路由效率、issue 分类自动化需求 |

**背后诉求洞察**：社区已从"功能有无"转向"架构正确性"讨论——Dream Mode 的隐私默认策略、`tool_filter_groups` 的 origin-based 检测重构、治理 RFC 均体现对**长期可维护性**的焦虑。

---

## 5. Bug 与稳定性

| 严重程度 | 条目 | 状态 | 修复 PR | 影响范围 |
|:---|:---|:---|:---|:---|
| **S1 - 阻断工作流** | [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) `tool_filter_groups` MCP 前缀检查失效 | 🔴 开放 | [#6861](https://github.com/zeroclaw-labs/zeroclaw/pull/6861) 待合并 | Agent MCP 工具调度 |
| **S1 - 阻断工作流** | [#6036](https://github.com/zeroclaw-labs/zeroclaw/issues/6036) Android/Termux 无限工具调用循环 | 🔴 开放 | ⛔ 无 | 移动端运行时 |
| **S1 - 阻断工作流** | [#6847](https://github.com/zeroclaw-labs/zeroclaw/issues/6847) WhatsApp 渠道 QR 码不显示 | 🔴 开放 | ⛔ 无 | WhatsApp 新用户接入 |
| **S1 - 阻断工作流** | [#6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841) `vision_provider` 被静默忽略，图像路由至 fallback | 🔴 开放 | ⛔ 无 | 多模态视觉处理 |
| **S1 - 阻断工作流** | [#6844](https://github.com/zeroclaw-labs/zeroclaw/issues/6844) Slack `bot_token` 无法通过环境变量注入 | 🔴 开放 | ⛔ 无 | Slack 渠道配置 |
| S2 - 行为降级 | [#6836](https://github.com/zeroclaw-labs/zeroclaw/issues/6836) Windows `setup.bat --minimal` 构建体积超标 (~26MB vs ~6MB) | 🔴 开放 | ⛔ 无 | Windows 最小化部署 |
| S2 - 行为降级 | [#6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856) `show_tool_calls` 在 schema v3 渠道配置中缺失 | 🔴 开放 | ⛔ 无 | 渠道工具调用可见性 |

**关键风险**：今日新增 4 个 S1 级 Bug，集中在**渠道集成**（WhatsApp QR、Slack 环境变量、Telegram 视觉路由）和**核心工具系统**（MCP 过滤），显示 v0.8.0 集成测试阶段渠道矩阵的覆盖缺口。

---

## 6. 功能请求与路线图信号

| 功能请求 | 阶段信号 | 纳入下一版本概率 | 关键路径 |
|:---|:---|:---|:---|
| [#5849 Dream Mode](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) | PR [#6693](https://github.com/zeroclaw-labs/zeroclaw/pull/6693) 已开，5 阶段引擎实现中 | **高** | 需解决 cron/heartbeat 冲突、本地-only 默认策略 |
| [#6820 ACP 协议扩展（diff/文件提议消息类型）](https://github.com/zeroclaw-labs/zeroclaw/issues/6820) | 状态 `in-progress`，与 TUI 审批流联动 | **高** | 依赖 TUI 主干合并 |
| [#6824 TUI Agent Chat](https://github.com/zeroclaw-labs/zeroclaw/issues/6824) | PR [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) 超大 PR 待审 | **高** | Ratatui 渲染性能、会话状态管理 |
| [#6837 Runtime RPC 调度层 + Unix Socket 传输](https://github.com/zeroclaw-labs/zeroclaw/issues/6837) | 状态 `in-progress`，XL 规模 | **中** | 与 HTTP/WS Gateway 并存架构，需安全审计 |
| [#6817 会话级运行时覆盖](https://github.com/zeroclaw-labs/zeroclaw/issues/6817) | 状态 `in-progress` | **中** | 配置影子机制、会话隔离边界 |
| [#6850 MemoryStrategy trait 解耦](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | 今日新开，RFC 阶段 | **中** | 存储后端抽象，影响 Dream Mode 实现 |
| [#6807 Telegram 自定义 WebAPI 端点](https://github.com/zeroclaw-labs/zeroclaw/issues/6807) | 开放，无 PR | **低-中** | 配置扩展，受地区网络限制用户刚需 |

---

## 7. 用户反馈摘要

### 真实痛点

> *"WhatsApp 渠道 onboarding 后 QR 码不显示"* — [#6847](https://github.com/zeroclaw-labs/zeroclaw/issues/6847)  
> **场景**：企业用户部署后无法完成 WhatsApp 首次认证，阻断生产上线。反映协议修复 [#6706](https://github.com/zeroclaw-labs/zeroclaw/pull/6706) 可能未覆盖 QR 渲染链路。

> *"vision_provider 配置被完全忽略，图像走了 fallback"* — [#6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841)  
> **场景**：多模态配置明确指定视觉模型，但系统静默降级，用户无感知直至输出质量异常。配置-运行时一致性验证机制缺失。

> *"Slack bot_token 不能走环境变量，重复 #6237 的回归"* — [#6844](https://github.com/zeroclaw-labs/zeroclaw/issues/6844)  
> **场景**：GitOps/Secret 管理流程要求环境变量注入，配置硬编码迫使凭证泄露风险。历史修复 commit 未覆盖全部分支。

### 满意度信号

> *"Best tool out there. Wishing way more stars."* — [#6847](https://github.com/zeroclaw-labs/zeroclaw/issues/6847) 开场  
> 用户情感忠诚度高，但渠道稳定性问题正消耗信任资本。

> *"153 commits lost in bulk revert"* 追踪机制 — [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)  
> 社区对 2026-03-28 大规模回滚的长期影响保持警觉，要求审计透明度。

---

## 8. 待处理积压

| 条目 | 创建时间 | 最后更新 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|:---|
| [#5187 ARM64 Docker 构建目标](https://github.com/zeroclaw-labs/zeroclaw/pull/5187) | 2026-04-02 | 2026-05-22 | `needs-author-action`，跨平台编译验证 | 指定维护者协助测试或关闭 |
| [#6074 153 commits 批量回滚审计](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | 2026-04-24 | 2026-05-22 | 依赖历史 commit 人工分拣，无自动化工具 | 分配专项 sprint 或降级为文档任务 |
| [#6036 Android 无限循环](https://github.com/zeroclaw-labs/zeroclaw/issues/6036) | 2026-04-23 | 2026-05-22 | `needs-repro`，Termux 环境特异性 | 建立 Android 测试矩阵或标记 `platform-limitation` |
| [#6243 自定义 provider 流式解码错误](https://github.com/zeroclaw-labs/zeroclaw/issues/6243) | 2026-04-30 | 2026-05-22 | `needs-repro`，GPU 占用 50% 但无输出 | 请求线程 dump 和 provider 响应样本 |

---

**日报生成时间**：2026-05-23  
**数据覆盖范围**：过去 24 小时 GitHub 活动  
**项目健康度评分**：🟡 功能迭代活跃（TUI/Dream Mode/ACP），但渠道集成稳定性承压，S1 Bug 新增速率需控制

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*