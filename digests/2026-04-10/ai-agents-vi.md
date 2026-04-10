# OpenClaw 生态日报 2026-04-10

> Issues: 500 | PRs: 500 | 覆盖项目: 12 个 | 生成时间: 2026-04-10 00:13 UTC

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

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 | 2026-04-10

---

## 1. 今日速览

OpenClaw 今日呈现**高活跃度、高压力**态势：24小时内产生 **500 条 Issues 更新**（403 活跃/新建，97 关闭）与 **500 条 PR 更新**（347 待合并，153 已合并/关闭），社区讨论密度达到近期峰值。核心版本 v2026.4.9 及 beta 版本同日发布，聚焦记忆/梦境系统的 REM 回填能力升级。然而，**安装回归问题集中爆发**——`@buape/carbon` 模块缺失导致大量用户首次安装/升级失败，成为当日最紧迫的稳定性威胁。与此同时，网关架构重构、浏览器工具统一化等大型 PR 持续推进，显示项目在技术债务清理与核心能力扩展上并行发力。

---

## 2. 版本发布

### [v2026.4.9](https://github.com/openclaw/openclaw/releases/tag/v2026.4.9) & [v2026.4.9-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.4.9-beta.1)

| 属性 | 详情 |
|:---|:---|
| **发布日期** | 2026-04-09 |
| **版本类型** | 稳定版 + 预发布版（内容一致） |
| **核心变更** | Memory/dreaming 系统重大升级 |

#### 主要更新内容

**REM 回填通道（Grounded REM Backfill Lane）**
- 新增历史 `rem-harness --path` 工具，支持对旧日记笔记进行结构化回放
- 引入 diary commit/reset 流程，实现记忆状态的可控持久化
- 优化 durable-fact 提取逻辑，减少记忆噪声
- **实时短期记忆晋升集成**：旧日笔记可直接重播至 Dreams 与 durable memory，无需维护独立的记忆栈

#### 迁移注意事项

| 风险点 | 说明 |
|:---|:---|
| **qa/scenarios/index.md 缺失崩溃** | 新版本的 completion cache 生成依赖该文件，但 npm 全局安装时未包含，导致 `openclaw update` 崩溃（见 [#63510](https://github.com/openclaw/openclaw/issues/63510)、[#63541](https://github.com/openclaw/openclaw/issues/63541)） |
| **缓解措施** | 已提交修复 PR [#63679](https://github.com/openclaw/openclaw/pull/63679)，将异常抛出改为返回 null |

---

## 3. 项目进展

### 今日已合并/关闭的关键 PR（153 中的代表性进展）

| PR | 作者 | 核心贡献 | 项目推进意义 |
|:---|:---|:---|:---|
| [#46049](https://github.com/openclaw/openclaw/issues/46049) 关闭 | filipgrzalja | LLM 请求超时配置修复 | 解决长期存在的超时配置被忽略问题，提升大模型调用可靠性 |
| [#61899](https://github.com/openclaw/openclaw/issues/61899) 关闭 | behroozbc | Windows ESM URL 方案修复 | 消除 Windows 绝对路径协议错误，改善跨平台兼容性 |
| [#25215](https://github.com/openclaw/openclaw/issues/25215) 关闭 | fatoncn | SSRF 检查与 Clash fake-ip 范围冲突修复 | 恢复代理环境下的 web_fetch 功能，解决 2026.2.22-2 回归 |
| [#29203](https://github.com/openclaw/openclaw/issues/29203) 关闭 | dotberrnix | 自动回复路径 sessionKey 修复 | 完善 hooks 系统的事件覆盖，插件生态更健壮 |
| [#25322](https://github.com/openclaw/openclaw/issues/25322) 关闭 | chancheuklap | web_fetch SSRF 策略配置支持 | 与 browser 工具实现功能对等，提升网络工具灵活性 |

### 待合并的大型架构 PR（347 中的关键项）

| PR | 规模 | 核心变更 | 技术债务影响 |
|:---|:---|:---|:---|
| [#63975](https://github.com/openclaw/openclaw/pull/63975) | XL | 网关启动与运行时策略分离 | 将 `server.impl.ts` 拆分为专注的 seam 模块，移除冗余构建层，为后续网关插件化奠定基础 |
| [#63957](https://github.com/openclaw/openclaw/pull/63957) | XL | Browser 重复辅助面统一 | 通过 facade 委托消除 doctor/config/auth 的代码重复，降低维护成本 |
| [#41158](https://github.com/openclaw/openclaw/pull/41158) | XL | 全局速率限制重试边界优化 | 在故障转移前增加本地重试，减少不必要的模型降级，提升用户体验 |
| [#63891](https://github.com/openclaw/openclaw/pull/63891) | XL | axios 固定版本与安全拒绝清单 | 供应链安全加固，防止恶意依赖注入 |

**整体评估**：项目正经历"**稳定性修复密集期 + 架构重构深水区**"的双重阶段。短期聚焦用户安装/运行阻塞问题，中长期通过网关解耦和工具统一化降低复杂度。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 社区信号 |
|:---|:---|:---:|:---|:---|
| 1 | [#49971](https://github.com/openclaw/openclaw/issues/49971) Native Agent Identity & Trust Verification | **77** | 原生代理身份与信任验证机制 | **战略性需求**：MolTrust 提出的 ERC-8004/DID/VC 集成方案，反映企业级部署对可验证身份的迫切需求，可能塑造 OpenClaw 的 B2B 能力边界 |
| 2 | [#62994](https://github.com/openclaw/openclaw/issues/62994) v4.8 安装失败：@buape/carbon 模块缺失 | **29** | 首次安装阻塞 | **紧急回归**：影响新用户获取，需立即响应 |
| 3 | [#45064](https://github.com/openclaw/openclaw/issues/45064) 2026.3.12 内存泄漏 - 基础命令 OOM | **28** | 长期稳定性 | 持续性内存管理问题，影响 CLI 可用性 |
| 4 | [#46049](https://github.com/openclaw/openclaw/issues/46049) LLM 超时配置被忽略（已关闭） | **25** | 配置系统一致性 | 配置与运行时行为不一致的经典痛点 |
| 5 | [#61899](https://github.com/openclaw/openclaw/issues/61899) Windows ESM URL 方案错误（已关闭） | **22** | 跨平台兼容性 | Windows 用户占比上升的信号 |

### 高反应 Issues（👍 数）

| Issue | 👍 | 诉求 |
|:---|:---:|:---|
| [#14593](https://github.com/openclaw/openclaw/issues/14593) Docker 中 brew 技能安装失败 | 16 | 容器化部署的技能管理标准化 |
| [#54844](https://github.com/openclaw/openclaw/issues/54844) github-copilot/gpt-5-mini 回归 | 9 | 新模型适配及时性 |
| [#63510](https://github.com/openclaw/openclaw/issues/63510) v2026.4.9 completion cache 崩溃 | 7 | 版本发布质量管控 |
| [#62272](https://github.com/openclaw/openclaw/issues/62272) v2026.4.5 更新失败 | 7 | 升级路径可靠性 |

---

## 5. Bug 与稳定性

### 严重级别：P0（阻塞安装/升级）

| Issue | 症状 | 影响范围 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| [#62994](https://github.com/openclaw/openclaw/issues/62994) | `Cannot find module '@buape/carbon'` | v4.8 首次安装 | 待定位 | 🔴 无 fix |
| [#62272](https://github.com/openclaw/openclaw/issues/62272) | 同上，更新场景 | 2026.3.28 → 2026.4.5 | 待定位 | 🔴 无 fix |
| [#63127](https://github.com/openclaw/openclaw/issues/63127) | Windows npm 全局安装运行时模块缺失 | 2026.4.7/2026.4.8 | 待定位 | 🔴 无 fix |
| [#63510](https://github.com/openclaw/openclaw/issues/63510) | completion cache 生成崩溃 | 2026.4.9 | [#63679](https://github.com/openclaw/openclaw/pull/63679) | 🟡 有 PR |
| [#63541](https://github.com/openclaw/openclaw/issues/63541) | 同上，全局 npm 安装场景 | 2026.4.9 | [#63679](https://github.com/openclaw/openclaw/pull/63679) | 🟡 有 PR |

### 严重级别：P1（功能回归/核心路径损坏）

| Issue | 症状 | 影响范围 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | Coding Agent 无法完成任何任务 | 2026.4.3+ 回归 | 待定位 | 🔴 无 fix |
| [#61726](https://github.com/openclaw/openclaw/issues/61726) | WhatsApp 媒体发送虚假成功 | 2026.4.5 | 待定位 | 🔴 无 fix |
| [#61847](https://github.com/openclaw/openclaw/issues/61847) | `gateway install --force` 破坏 AWS 凭证发现 | EC2 实例角色场景 | 待定位 | 🔴 无 fix |
| [#53857](https://github.com/openclaw/openclaw/issues/53857) | web_search 始终报告 API key 未配置 | 2026.3.23, tools.profile=full | 待定位 | 🔴 无 fix |

### 严重级别：P2（性能/体验降级）

| Issue | 症状 | 备注 |
|:---|:---|:---|
| [#45064](https://github.com/openclaw/openclaw/issues/45064) | 基础命令 OOM | 长期存在，需内存分析 |
| [#60390](https://github.com/openclaw/openclaw/issues/60390) | LosslessClaw 压缩失败 | 多模型/多提供商 auth 处理冲突 |

---

## 6. 功能请求与路线图信号

### 高潜力功能请求（已有 PR 或明确路线图信号）

| 需求 | Issue/PR | 可行性评估 | 预计版本 |
|:---|:---|:---|:---|
| **原生代理身份验证（DID/VC）** | [#49971](https://github.com/openclaw/openclaw/issues/49971) | 战略性，需架构设计 | 2026.Q3+ |
| **Serper Google Search API 支持** | [#56511](https://github.com/openclaw/openclaw/pull/56511) | PR 已提交，待 review | 2026.4.x |
| **分离式子代理原生支持** | [#62801](https://github.com/openclaw/openclaw/pull/62801) | PR 已提交，API 设计清晰 | 2026.4.x |
| **web_fetch SSRF 策略配置** | [#25322](https://github.com/openclaw/openclaw/issues/25322) | 已合并 | ✅ 2026.4.9 |
| **Teams SSO 支持** | [#63964](https://github.com/openclaw/openclaw/pull/63964) | PR 因 too-many-prs 关闭，需求明确 | 需重新提交 |

### 新兴需求模式

- **记忆系统可观测性**：多个 issue 围绕 dreaming cron 未自动注册 ([#62327](https://github.com/openclaw/openclaw/issues/62327))、memory slot 启动时未加载 ([#63962](https://github.com/openclaw/openclaw/pull/63962))，显示用户对记忆系统可靠性的关注
- **模型生态扩展**：gpt-5.4、MiniMax-M2.7 等新模型适配请求密集，反映用户追逐最新 LLM 能力的趋势

---

## 7. 用户反馈摘要

### 真实痛点（直接引用语境）

| 场景 | 用户原声 | 深层需求 |
|:---|:---|:---|
| **安装挫败** | *"During Installation the configuration wizard crashes, since it can't find '@buape/carbon'"* ([#62446](https://github.com/openclaw/openclaw/issues/62446)) | 零配置开箱体验，依赖管理透明化 |
| **升级恐惧** | *"Update from 2026.3.28 to 2026.4.5 fails at the openclaw doctor step"* ([#62272](https://github.com/openclaw/openclaw/issues/62272)) | 可回滚、可诊断的平滑升级路径 |
| **模型适配焦虑** | *"openai-codex/gpt-5.4 can be added to config and appears in models list, but it is still treated as missing"* ([#37623](https://github.com/openclaw/openclaw/issues/37623)) | 配置即生效的模型支持，减少"虚假可用"状态 |
| **容器化部署困境** | *"The Docker image does not ship brew"* ([#14593](https://github.com/openclaw/openclaw/issues/14593)) | 云原生场景的技能管理标准化 |
| **多代理隔离疑虑** | *"Multi-agent deployments send same X-Mnemo-Agent-Id header, causing memory namespace collision"* ([#63563](https://github.com/openclaw/openclaw/issues/63563)) | 企业级多租户隔离保障 |

### 满意度信号

- **记忆系统升级获认可**：v2026.4.9 的 REM 回填功能设计获技术用户期待，但发布执行问题（qa 文件缺失）抵消了正面感知
- **社区响应速度分化**：LLM 超时问题 ([#46049](https://github.com/openclaw/openclaw/issues/46049)) 快速关闭获好评，安装问题堆积引发焦虑

---

## 8. 待处理积压

### 长期未响应的高价值 Issue（>30 天，仍有现实意义）

| Issue | 创建时间 | 最后更新 | 积压风险 | 建议行动 |
|:---|:---|:---|:---|:---|
| [#49971](https://github.com/openclaw/openclaw/issues/49971) Agent Identity RFC | 2026-03-18 | 2026-04-09 | 战略级需求无官方回应 | 维护者确认路线图立场 |
| [#37623](https://github.com/openclaw/openclaw/issues/37623) gpt-5.4 配置可用但运行失败 | 2026-03-06 | 2026-04-09 | 模型生态承诺与实际支持脱节 | 明确模型适配流程文档 |
| [#32892](https://github.com/openclaw/openclaw/issues/32892) openai-codex 登录无提供商插件 | 2026-03-03 | 2026-04-09 | 认证系统扩展性设计缺陷 | 评估 providers 插件架构 |
| [#31486](https://github.com/openclaw/openclaw/issues/31486) image tool 不支持自定义提供商 | 2026-03-02 | 2026-04-09 | 工具配置一致性缺口 | 统一工具-模型配置语义 |
| [#26422](https://github.com/openclaw/openclaw/issues/26422) message_sending hook 永不触发 | 2026-02-25 | 2026-04-09 | 插件系统核心功能失效 | 代码审查确认死代码状态 |

### 需要维护者介入的 PR

| PR | 状态 | 阻塞原因 | 建议 |
|:---|:---|:---|:---|
| [#63964](https://github.com/openclaw/openclaw/pull/63964) Teams SSO | 关闭 | too-many-prs | 协调 review 带宽，重新打开 |
| [#63963](https://github.com/openclaw/openclaw/pull/63963) Teams 长工具链保活 | 关闭 | too-many-prs | 同上，关键用户体验改进 |

---

## 附录：数据健康度指标

| 指标 | 数值 | 评估 |
|:---|:---:|:---|
| 日 Issues 处理率 | 19.4% (97/500) | ⚠️ 偏低，积压风险 |
| 日 PR 合并率 | 30.6% (153/500) | ✅ 健康，吞吐能力强 |
| 平均 Issue 评论数（Top 50） | 11.4 | 🔥 讨论深度高，社区参与活跃 |
| 阻塞安装类 Issue 占比 | 12% (6/50) | 🚨 严重，需立即响应 |
| 架构/重构类 PR 占比 | 23% (7/30) | 📈 技术投资积极，需平衡稳定性 |

---

*本日报基于 GitHub 公开数据生成，反映 2026-04-09 至 2026-04-10 期间的项目动态。*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期**：2026-04-10 | **分析范围**：12 个活跃开源项目

---

## 1. 生态全景

个人 AI 助手开源生态正处于"**从功能竞赛向可靠性攻坚**"的关键转折期。头部项目（OpenClaw、CoPaw、Moltis）日均处理 50+ Issues/PR，显示极高迭代强度；核心战场从"多模型支持"转向**记忆系统可观测性、企业级多租户隔离、终端体验现代化**三大方向。社区痛点高度趋同——安装/升级稳定性成为用户流失的首要风险，而 Docker/PaaS 部署体验、WebUI 可视化配置正成为差异化竞争的新门槛。

---

## 2. 各项目活跃度对比

| 项目 | Issues (活跃/关闭) | PR (待合并/已处理) | 今日 Release | 健康度评估 |
|:---|:---|:---|:---|:---|
| **OpenClaw** | 500 (403/97) | 500 (347/153) | v2026.4.9 + beta | ⚠️ **高压运转** — 安装回归问题集中爆发，架构重构与稳定性修复并行 |
| **NanoBot** | 26 (16/10) | 45 (23/22) | 无 | ✅ **稳健演进** — 内存管理与多模态为主轴，v0.1.5 兼容性瑕疵待修复 |
| **Hermes Agent** | 50 (39/11) | 50 (36/14) | 无 | ✅ **质量巩固** — 流式工具调用截断漏洞快速封堵，TUI 重构进入深水区 |
| **PicoClaw** | 16 (13/3) | 24 (17/7) | 无 | ⚠️ **追赶期** — 多通道竞态条件暴露架构债务，Codex 集成稳定性待验证 |
| **NanoClaw** | 4 (2/2) | 24 (10/14) | 无 | ✅ **企业就绪冲刺** — jbaruch 单日 5 PR 修复生产环境痛点，Slack/Matrix 企业功能密集落地 |
| **NullClaw** | 2 (2/0) | 16 (5/11) | 无 | ✅ **精益迭代** — 渠道可靠性三部曲收尾，.well-known 技能标准确立生态协议 |
| **IronClaw** | 10 (新增)/14 关闭 | 39 (待合并)/11 处理 | 无 | ⚠️ **架构迁移阵痛** — V2 引擎接管中，Google OAuth 危机集中爆发 |
| **LobsterAI** | 3 (新开) | 37 (24/13) | 无 | ⚠️ **稳定性承压** — macOS Intel 集中崩溃，Cowork 引擎并发修复待合并 |
| **Moltis** | 0 新开/14 关闭 | 24 (1/23) | 20260409.01 | ✅ **发布节奏优秀** — 零待处理 Issue，模型生态扩展与稳定性修复并重 |
| **CoPaw** | 50 (29/21) | 50 (18/32) | **v1.0.2** | ✅ **成熟稳定期** — 版本发布日问题当日清，LLM 路由功能端到端闭环 |
| **TinyClaw** | 无活动 | 无活动 | 无 | ⚠️ **停滞观察** |
| **ZeptoClaw** | 无活动 | 无活动 | 无 | ⚠️ **停滞观察** |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | 500 Issues/PR 日活，绝对领先 | 约为第二名 CoPaw 的 10 倍，但处理率仅 19.4%，积压风险显著 |
| **技术路线** | **"全栈自主"** — 自建记忆/梦境系统、网关架构、工具生态 | 对比 NanoClaw/IronClaw 的 MCP 兼容策略，OpenClaw 选择深度自建，可控性高但集成成本大 |
| **核心优势** | REM 回填通道、多通道原生支持、插件生态成熟度 | 记忆系统的"时间旅行"能力（历史笔记重播）暂无直接竞品 |
| **关键短板** | 安装/升级回归问题（@buape/carbon 缺失、qa 文件缺失） | Moltis/CoPaw 的发布质量控制更优；NanoClaw 的企业功能响应更快 |
| **差异化标签** | **"个人 AI 的完整操作系统"** — 从记忆到梦境到工具链全覆盖 | 对比 CoPaw 的"多智能体协作平台"、IronClaw 的"WASM 沙箱安全"，OpenClaw 更偏向**个人长期记忆 companion** |

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|:---|:---|:---|
| **记忆系统可观测性** | OpenClaw、NanoBot、Hermes Agent | OpenClaw #62327 梦境 cron 未注册、NanoBot #2957 MEMORY.md 数据丢失、Hermes #5237 Hindsight 最佳实践 — 用户要求"记忆在做什么"可见可控 |
| **企业级多租户/隔离** | NanoClaw、IronClaw、OpenClaw | NanoClaw #1720 多租户会话委派、IronClaw #2078 工具创建权限控制、OpenClaw #63563 多 Agent 内存命名空间冲突 — 从个人工具向团队平台演进 |
| **终端体验现代化** | Hermes Agent、CoPaw、NanoBot | Hermes #4518 IDE 级 diff/语法高亮、CoPaw #3124 会话内图表渲染、NanoBot #2949 WebUI 内置 — CLI 向 GUI/Web 迁移压力显著 |
| **安装/部署零摩擦** | OpenClaw、PicoClaw、NanoClaw、LobsterAI | OpenClaw 安装崩溃、PicoClaw Docker ReadonlyRootfs、NanoClaw Unraid 一键部署、LobsterAI macOS 崩溃 — **生态共性痛点，直接影响用户获取** |
| **模型生态极速适配** | Moltis、OpenClaw、CoPaw、NanoBot | GPT-5.x、Gemini 3.x、阿里巴巴 Coding Plan 同日入库 — "配置即生效"成为基准线，虚假可用状态（OpenClaw #37623）遭强烈批评 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|:---|:---|:---|:---|
| **OpenClaw** | 长期记忆、梦境系统、多通道个人助手 | 技术极客、个人知识管理者 | Node.js 全栈，自建 REM/durable-fact 记忆层，插件化工具 |
| **CoPaw** | 多智能体协作、LLM 路由、企业微信集成 | 中国企业用户、多 Agent 工作流 | Python 为主，AgentScope 框架底座，强调"人-AI 协作" |
| **Moltis** | 极速模型适配、本地优先、资源效率 | 本地模型爱好者、边缘部署 | Rust 核心，ModelCapabilities 架构，Podman 容器检测 |
| **NanoClaw** | 企业 Slack/Teams、多租户、端到端加密 | 企业 IT 部门、合规敏感场景 | TypeScript，"路由器"架构模式，组级隔离 |
| **IronClaw** | WASM 沙箱安全、NEAR AI 生态、去中心化 | Web3 开发者、安全极客 | Rust + WASMtime，V2 引擎零硬依赖，WASM 扩展市场 |
| **Hermes Agent** | 终端原生体验、自改进循环（Phoenix Protocol） | 开发者、CLI 重度用户 | Python，Ink/React TUI 重构，Hindsight 记忆集成 |
| **NanoBot** | 大上下文窗口优化、音视频多模态、技能自发现 | 长文档处理用户、多模态探索者 | Python，SelfTool v2 自我进化，1M token 归档策略 |
| **NullClaw** | 极致轻量、Zig 运行时、协议标准化 | 系统编程爱好者、边缘设备 | Zig 全栈，.well-known 技能协议，Cron 子 Agent 引擎 |
| **PicoClaw** | 硬件协同（Sipeed）、中文场景优化 | 中文用户、嵌入式开发者 | Go，MCP 生态对接，GitHub-backed skill discovery |
| **LobsterAI** | 企业数据治理、会话合规、Cowork 协作 | 中国企业、合规审计需求 | TypeScript，SQLite 外键约束强化，跨时区任务调度 |

---

## 6. 社区热度与成熟度分层

| 层级 | 项目 | 特征 |
|:---|:---|:---|
| **🔥 快速迭代期** | OpenClaw、CoPaw、Moltis、NanoClaw | 日均 50+ 事件，功能与稳定性并行，发布节奏紧凑（Moltis 日更版本），社区讨论深度高（OpenClaw #49971 77 评论） |
| **🛠️ 质量巩固期** | Hermes Agent、NanoBot、IronClaw | 架构重构（TUI/V2 引擎）或稳定性修复为主，Issue 处理率提升，测试覆盖强化 |
| **🌱 追赶建设期** | PicoClaw、LobsterAI、NullClaw | 核心功能补齐（多通道、WebUI、企业功能），Bug 响应快但架构债务显现 |
| **⚠️ 停滞观察期** | TinyClaw、ZeptoClaw | 24 小时零活动，需关注维护者 commit 频率 |

---

## 7. 值得关注的趋势信号

| 趋势 | 信号来源 | 对开发者的参考价值 |
|:---|:---|:---|
| **"安装即流失"成为核心指标** | OpenClaw #62994、PicoClaw #2429、LobsterAI #1587/1589 | 依赖管理（@buape/carbon）、跨平台路径（Windows ESM URL）、容器权限（ReadonlyRootfs）需纳入 CI 必测项 |
| **记忆系统从"黑盒"到"可审计"** | OpenClaw REM 回填、NanoBot MEMORY.md 丢失、Hermes Hindsight | 用户要求记忆操作的可观测性（何时/为何提取/遗忘），需设计日志与回滚机制 |
| **CLI → WebUI 迁移压力** | NanoBot #2949（8 评论）、CoPaw 图表渲染请求、Hermes TUI 重构 | 终端原生项目需加速可视化配置界面，降低非技术用户门槛 |
| **MCP 作为事实标准，但沙箱化不足** | IronClaw #2180 MCP 工具不可用、PicoClaw MCP 空参数问题 | MCP 服务器的外围安全（OAuth 凭证隔离、网络沙箱）成为新战场 |
| **"模型即配置"期望 vs 现实落差** | OpenClaw #37623、Moltis 同日 3 家提供商入库 | 用户假设"添加模型 URL 即可用"，实际需处理能力检测、流式格式、工具调用方言，需设计"配置即生效"的抽象层 |
| **企业功能从"加分项"到"门槛"** | NanoClaw 多租户、CoPaw 企微附件、IronClaw 权限控制 | 个人工具向团队平台演进时，隔离性、审计、合规成为硬需求，架构需预留多租户钩子 |

---

*报告基于 2026-04-10 各项目 GitHub 公开活动数据生成*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-04-10

## 1. 今日速览

NanoBot 今日保持**高活跃度**，24小时内产生 **26 条 Issues 更新**（16 活跃/新开，10 关闭）与 **45 条 PR 更新**（23 待合并，22 已合并/关闭），无新版本发布。核心开发聚焦于**内存管理优化**（大上下文窗口下的会话归档策略）、**多模态能力扩展**（音视频统一处理）及**交互体验改进**（WebUI 探索、消息去重、流式响应优化）。社区对**内置 WebUI** 的讨论热度显著上升，同时 v0.1.5 升级引发的兼容性问题（Python 路径、飞书 SDK 依赖）成为用户关注焦点。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR（22 条中的核心项）

| PR | 作者 | 核心贡献 | 项目推进价值 |
|:---|:---|:---|:---|
| [#2973](https://github.com/HKUDS/nanobot/pull/2973) | flobo3 | **修复 Gemma 4 `<thought>` 标签泄漏** | 解决推理内容污染用户消息的问题，提升多模型兼容性 |
| [#2971](https://github.com/HKUDS/nanobot/pull/2971) | franciscomaestre | **大上下文窗口下的消息数量触发归档** | 解决 1M token 窗口模型（Claude Sonnet 4.6/Gemini 2.5 Pro）永不归档、会话膨胀至 700+ 消息的架构缺陷 |
| [#2963](https://github.com/HKUDS/nanobot/pull/2963) | yanghan-cyber | **修复流式通道错误静默丢弃** | 解决飞书/Discord/Telegram 在 LLM 错误（429/超时）时无反馈的严重 UX 问题 |
| [#2962](https://github.com/HKUDS/nanobot/pull/2962) | chenyahui | **支持 `allowed_env_keys` 环境变量透传** | 提升沙箱执行灵活性，满足企业级部署需求 |
| [#2960](https://github.com/HKUDS/nanobot/pull/2960) | JonasGao | **Discord 通道代理支持** | 完善网络受限环境下的通道可用性 |
| [#2953](https://github.com/HKUDS/nanobot/pull/2953) | unrayed | **完整 `<thought>` 块提取与调试支持** | 为 Gemma 4 等模型提供可观测性基础设施 |

**整体推进评估**：今日合并 PR 集中在**稳定性修复**（3 项）与**企业/高级用户场景**（代理、环境变量、大模型优化），核心架构（内存管理、多模态管道）持续演进，但 WebUI 等用户-facing 功能仍处于 PR 阶段。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 核心诉求 | 分析 |
|:---|:---|:---:|:---|:---|
| 1 | [#2949](https://github.com/HKUDS/nanobot/issues/2949) Should nanobot have its own WebUI? | **8** | 内置浏览器管理界面 | **战略性讨论**：用户厌倦 CLI 配置，希望有可视化配置、聊天界面、频道管理。与同期 PR [#2972](https://github.com/HKUDS/nanobot/pull/2972)（WebUI 实现）形成呼应，社区共识正在凝聚 |
| 2 | [#2892](https://github.com/HKUDS/nanobot/issues/2892) 定时任务机制设计疑问 | **6** | 动态定时任务无需重启 gateway | 架构设计争议：当前 `agent` 创建任务但 `gateway` 执行的设计违反直觉，用户期望热加载能力 |
| 3 | [#2798](https://github.com/HKUDS/nanobot/issues/2798) Unified Session（已关闭） | **6** | 跨频道会话连续性 | 已关闭但反映强烈需求：用户希望 Telegram/Discord/飞书间无缝切换对话，当前按频道隔离的设计被质疑 |
| 4 | [#2927](https://github.com/HKUDS/nanobot/issues/2927) Automatic Skill Discovery | **5** | 智能体自主发现重复模式并生成技能 | **前沿功能请求**：从被动技能系统向主动学习演进，与 [#2521](https://github.com/HKUDS/nanobot/pull/2521) SelfTool v2 的自我进化方向一致 |

### 热点背后信号
- **用户体验层**：CLI → WebUI 的迁移压力显著
- **智能体能力层**：从"工具执行"向"自我进化"（Skill Discovery + SelfTool）演进
- **架构层**：定时任务、会话管理的设计债务开始显现

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#2957](https://github.com/HKUDS/nanobot/issues/2957) | **MEMORY.md 被完全覆盖为空**，无 git 备份，用户数据丢失 | 开放，1 评论 | 无 |
| 🔴 **高** | [#2980](https://github.com/HKUDS/nanobot/issues/2980) | Dream git store 在工作区初始化嵌套 repo，覆盖 `.gitignore` | 开放，1 评论 | 无 |
| 🟡 **中** | [#2947](https://github.com/HKUDS/nanobot/issues/2947) | Runtime Context 元数据泄漏到用户通道（WeChat 等） | 开放，4 评论 | 无 |
| 🟡 **中** | [#2970](https://github.com/HKUDS/nanobot/issues/2970) | v0.1.5 + lark-oapi 1.5.3 飞书通道启动失败（模块缺失） | 开放，1 评论 | 无 |
| 🟡 **中** | [#2917](https://github.com/HKUDS/nanobot/issues/2917) | v0.1.5 升级后 Python 路径解析失败，技能执行中断 | 开放，4 评论 | 无 |
| 🟡 **中** | [#2977](https://github.com/HKUDS/nanobot/issues/2977) | QQ/微信自然语言输入失败，仅斜杠命令可用 | 开放，0 评论 | 无 |
| 🟢 **低** | [#2974](https://github.com/HKUDS/nanobot/issues/2974) | Gemini 3 Flash Preview 配置在 v0.1.4.post6 失效 | **已关闭** | [#2973](https://github.com/HKUDS/nanobot/pull/2973) 相关 |

**风险评估**：**#2957 数据丢失 bug 为今日最高优先级**，涉及核心记忆系统可靠性；v0.1.5 升级引发的多起兼容性问题（#2917, #2970）表明版本发布 QA 流程存在缺口。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue/PR | 实现状态 | 纳入下一版本概率 |
|:---|:---|:---|:---:|
| **内置 WebUI** | [#2949](https://github.com/HKUDS/nanobot/issues/2949) + [#2972](https://github.com/HKUDS/nanobot/pull/2972) | PR 已提交，待 review | **高** |
| **对话中模型切换** (`/model`) | [#2975](https://github.com/HKUDS/nanobot/issues/2975) | 仅 Issue，参考 OpenClaw 实现 | 中 |
| **自动上下文压缩** | [#2984](https://github.com/HKUDS/nanobot/issues/2984) | Issue 开放，与 [#2971](https://github.com/HKUDS/nanobot/pull/2971) 思路互补 | 中 |
| **自动技能发现** | [#2927](https://github.com/HKUDS/nanobot/issues/2927) | 仅 Issue，架构复杂 | 低-中 |
| **多模态音视频统一** | [#2908](https://github.com/HKUDS/nanobot/pull/2908) | PR 开放，开发中 | **高** |
| **用户级内存隔离** | [#2968](https://github.com/HKUDS/nanobot/pull/2968) | PR 开放 | 中 |
| **飞书语音消息增强** | [#2955](https://github.com/HKUDS/nanobot/issues/2955) | 仅 Issue | 中 |
| **消息去重机制** | [#2981](https://github.com/HKUDS/nanobot/pull/2981) | PR 开放 | 中 |

**路线图信号**：WebUI 与多模态为近期确定方向；内存管理（压缩、隔离、归档）成为大模型时代的核心基础设施；自我进化（SelfTool + Skill Discovery）是长期差异化竞争点。

---

## 7. 用户反馈摘要

### 真实痛点
> *"创建了

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-04-10

---

## 1. 今日速览

Hermes Agent 今日保持**高活跃开发状态**：24小时内50条Issue更新（39条活跃/新开，11条关闭）与50条PR更新（36条待合并，14条已合并/关闭），无新版本发布。核心工作围绕**终端渲染引擎重构**、**多模型端点支持**、**安全加固**及**平台适配修复**展开。社区讨论热度集中在富文本终端体验、凭证代理安全架构与AWS Bedrock原生支持三大方向。值得注意的是，今日出现多个关于**流式工具调用截断**的紧急修复，显示项目正在处理关键稳定性问题。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#6847](https://github.com/NousResearch/hermes-agent/pull/6847) | teknium1 | **流式工具调用截断检测**：修复关键Bug #6638，当流式响应在工具调用中途被截断时，将`finish_reason`从默认`"stop"`升级为`"length"`，拒绝执行截断的工具调用并返回错误，防止空/损坏参数执行 | ✅ 已合并 |
| [#6776](https://github.com/NousResearch/hermes-agent/pull/6776) | AIandI0x1 | 同上功能的原始实现 | ❌ 已关闭（被#6847替代） |
| [#6857](https://github.com/NousResearch/hermes-agent/pull/6857) | teknium1 | API服务器模型名派生：多用户场景下（如OpenWebUI），各profile的API服务器在`/v1/models`返回独立模型ID（如`lucas`、`admin`），替代硬编码`hermes-agent` | ❌ 已关闭 |
| [#6855](https://github.com/NousResearch/hermes-agent/pull/6855) | nazirulhafiy | Phoenix Protocol文档：主动自改进循环的行为规范，确保Memory/Skill/SOUL在重大变更后保持同步 | ❌ 已关闭（被#6858替代） |
| [#6848](https://github.com/NousResearch/hermes-agent/pull/6848) | fxfitz | Matrix平台反应清理：处理完成后移除👀反应 | ❌ 已关闭（被#6852替代） |
| [#6794](https://github.com/NousResearch/hermes-agent/pull/6794) | konsisumer | 修复main分支5个失败测试：CLI状态栏mock缺失、vision工具provider检测、辅助vision调用等 | 🔄 待合并 |

**整体推进评估**：今日核心进展是**堵住了一个高危稳定性漏洞**（流式工具调用截断执行），并持续推进**TUI重构**（#4692 Ink/React方案）与**多平台适配**。测试修复PR显示项目正在强化CI可靠性。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 核心诉求 | 分析 |
|:---|:---|:---|:---|:---|
| 🥇 | [#4518](https://github.com/NousResearch/hermes-agent/issues/4518) 行内Diff视图+语法高亮+Markdown渲染 | 13 | 终端体验现代化 | **长期技术债**：用户要求IDE级终端渲染，涉及5个堆叠PR重构`agent/rich_output.py`。反映CLI工具与GUI编辑器体验差距的普遍焦虑 |
| 🥈 | [#4656](https://github.com/NousResearch/hermes-agent/issues/4656) 凭证代理守护进程 | 8 | 零知识凭证安全 | **企业级需求**：在#3628环境作用域和#4432 PID隔离基础上，要求HTTP/HTTPS代理层实现"凭证对子进程不可见"。作者引用原PR作者的自认局限，推动纵深防御 |
| 🥉 | [#3863](https://github.com/NousResearch/hermes-agent/issues/3863) AWS Bedrock原生支持 | 5 / 👍11 | 绕过OpenRouter降本 | **成本与合规驱动**：11个点赞显示广泛需求。核心痛点：延迟、5-20%成本加成、无法使用企业VPC/CloudTrail/议价 |

### 高热度待合并 PR

| PR | 亮点 | 状态 |
|:---|:---|:---|
| [#4692](https://github.com/NousResearch/hermes-agent/pull/4692) Ink/React TUI重构：替换prompt_toolkit，JSON-RPC通信，流式Markdown渲染 | 架构级变革，7天持续更新 | 🔄 待合并 |
| [#6863](https://github.com/NousResearch/hermes-agent/pull/6863) 多模型自定义端点选择修复：解决`hermes model`锁定首个模型问题 | 用户体验关键修复 | 🔄 待合并 |

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#6638](https://github.com/NousResearch/hermes-agent/issues/6638) | 流式工具调用截断被静默执行，导致空/损坏参数运行 | [#6847](https://github.com/NousResearch/hermes-agent/pull/6847) | ✅ **已修复** |
| 🔴 **Critical** | [#6841](https://github.com/NousResearch/hermes-agent/issues/6841) | 工具调用管道损坏工具名和JSON参数，通用工具调用失败 | 无 | ⏳ 待处理 |
| 🟡 **High** | [#6475](https://github.com/NousResearch/hermes-agent/issues/6475) | Claude订阅认证返回"额度用完"错误，重启/重登录无效 | [#6854](https://github.com/NousResearch/hermes-agent/pull/6854) | 🔄 **Fix待合并** |
| 🟡 **High** | [#6718](https://github.com/NousResearch/hermes-agent/issues/6718) | 后台进程自动通知无法送达Agent | 无 | ⏳ 待处理 |
| 🟡 **High** | [#6797](https://github.com/NousResearch/hermes-agent/issues/6797) | Docker中Cron任务在某时刻后无法修改 | 无 | ⏳ 待处理 |
| 🟡 **High** | [#6843](https://github.com/NousResearch/hermes-agent/issues/6843) | UnicodeEncodeError导致API调用失败 | 无 | ⏳ 待处理 |
| 🟡 **High** | [#6677](https://github.com/NousResearch/hermes-agent/issues/6677) | `vision_analyze`对有效本地图片路径返回400错误 | 无 | ⏳ 待处理 |
| 🟢 **Medium** | [#6729](https://github.com/NousResearch/hermes-agent/issues/6729) | Systemd安装不识别非标准HERMES_HOME | 无 | ⏳ 待处理 |
| 🟢 **Medium** | [#6673](https://github.com/NousResearch/hermes-agent/issues/6673) | Cron调度器未传递fallback_model | 无 | ⏳ 待处理 |
| 🟢 **Medium** | [#6709](https://github.com/NousResearch/hermes-agent/issues/6709) | Cron Create带model参数时TypeError | 无 | ⏳ 待处理 |
| 🟢 **Medium** | [#6862](https://github.com/NousResearch/hermes-agent/issues/6862) | 多模型自定义端点锁定首个模型 | [#6863](https://github.com/NousResearch/hermes-agent/pull/6863) | 🔄 **Fix待合并** |

### 今日关闭的Bug

- [#4934](https://github.com/NousResearch/hermes-agent/issues/4934) Nix macOS aarch64安装失败（onnxruntime wheel）
- [#6227](https://github.com/NousResearch/hermes-agent/issues/6227) Nix评估失败（缺失setupSecrets脚本）
- [#6649](https://github.com/NousResearch/hermes-agent/issues/6649) Discord网关SOCKS代理支持缺失
- [#5796](https://github.com/NousResearch/hermes-agent/issues/5796) Kimi vision调用403（缺失User-Agent）
- [#6075](https://github.com/NousResearch/hermes-agent/issues/6075) fallback后丢失provider特定header
- [#6398](https://github.com/NousResearch/hermes-agent/issues/6398) TUI状态栏fallback后显示旧模型名
- [#6598](https://github.com/NousResearch/hermes-agent/issues/6598) Azure OpenAI 404配置问题
- [#6671](https://github.com/NousResearch/hermes-agent/issues/6671) Telegram频道在Codex额度用尽后失效

---

## 6. 功能请求与路线图信号

| 功能方向 | Issue/PR | 成熟度 | 纳入可能性 |
|:---|:---|:---|:---|
| **终端渲染引擎** | [#4518](https://github.com/NousResearch/hermes-agent/issues/4518) + 5堆叠PR | 实现中 | ⭐⭐⭐⭐⭐ **高** - 已有活跃PR，技术债务明确 |
| **凭证代理守护进程** | [#4656](https://github.com/NousResearch/hermes-agent/issues/4656) | 设计阶段 | ⭐⭐⭐⭐☆ **中高** - 安全架构演进需求，引用现有PR作者共识 |
| **AWS Bedrock原生支持** | [#3863](https://github.com/NousResearch/hermes-agent/issues/3863) | 需求明确 | ⭐⭐⭐⭐☆ **中高** - 11点赞，企业合规刚需 |
| **多记忆提供者并行** | [#5688](https://github.com/NousResearch/hermes-agent/pull/5688) | PR待合并 | ⭐⭐⭐⭐⭐ **高** - 技术实现已完成，架构解耦 |
| **Slate Agent Hub平台** | [#5957](https://github.com/NousResearch/hermes-agent/pull/5957) | PR待合并 | ⭐⭐⭐⭐☆ **中高** - 多智能体通信基础设施 |
| **Zeroshot多智能体验证** | [#488](https://github.com/NousResearch/hermes-agent/issues/488) | 提案阶段 | ⭐⭐⭐☆☆ **中** - 外部项目集成，需评估维护成本 |
| **多智能体委员会Skill** | [#5876](https://github.com/NousResearch/hermes-agent/issues/5876) | 提案阶段 | ⭐⭐⭐☆☆ **中** - 轻量级实现，但价值验证待观察 |
| **Phoenix Protocol自改进** | [#6858](https://github.com/NousResearch/hermes-agent/pull/6858) | 文档PR | ⭐⭐⭐⭐☆ **中高** - 行为规范化，低实现成本 |

---

## 7. 用户反馈摘要

### 核心痛点

| 场景 | 反馈来源 | 情绪 |
|:---|:---|:---|
| **终端体验落差** | [#4518](https://github.com/NousResearch/hermes-agent/issues/4518) 评论 | 😤 "需要IDE级的diff和语法高亮，现在的输出难以阅读大型变更" |
| **企业安全合规** | [#4656](https://github.com/NousResearch/hermes-agent/issues/4656) | 😰 "子进程仍能看到凭证是Phase 2的公认局限，需要零知识代理" |
| **云厂商锁定成本** | [#3863](https://github.com/NousResearch/hermes-agent/issues/3863) | 💸 "OpenRouter加价+延迟，丢失AWS企业功能不可接受" |
| **认证状态混乱** | [#6475](https://github.com/NousResearch/hermes-agent/issues/6475) | 🤯 "明明有额度却提示用完，重启重登都无效" |
| **Docker环境Cron失效** | [#6797](https://github.com/NousResearch/hermes-agent/issues/6797) | 😤 "任务显示成功但jobs.json未变更，session级bug" |
| **视觉工作流阻断** | [#6677](https://github.com/NousResearch/hermes-agent/issues/6677) | 😫 "剪贴板图片和本地文件视觉分析完全不可用" |

### 满意点

- **Hindsight记忆集成** 有用户主动提出最佳实践改进 ([#5237](https://github.com/NousResearch/hermes-agent/issues/5237))
- **多平台网关** 社区积极贡献Matrix、Feishu、Slate等平台适配

---

## 8. 待处理积压

### 需要维护者关注的高价值Issue

| Issue | 创建时间 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|
| [#488](https://github.com/NousResearch/hermes-agent/issues/488) Zeroshot多智能体验证 | 2026-03-06 (35天) | 架构评估 | 决策：是否官方支持外部编排器集成 |
| [#3863](https://github.com/NousResearch/hermes-agent/issues/3863) AWS Bedrock原生支持 | 2026-03-30 (11天) | 实现资源 | 11点赞，建议分配cloud provider专项 |
| [#5237](https://github.com/NousResearch/hermes-agent/issues/5237) Hindsight记忆最佳实践 | 2026-04-05 (5天) | 设计确认 | 与#6654、#6672记忆系统变更协同 |
| [#6209](https://github.com/NousResearch/hermes-agent/issues/6209) 自定义端点API协议选择 | 2026-04-08 (2天) | 产品决策 | 影响多代理/网关场景，需UX设计 |
| [#6841](https://github.com/NousResearch/hermes-agent/issues/6841) 工具调用管道损坏 | 2026-04-09 (1天) | 待诊断 | **Critical新Bug**，需紧急分配 |

### 长期Pending PR

| PR | 等待时间 | 阻塞原因 |
|:---|:---|:---|
| [#4692](https://github.com/NousResearch/hermes-agent/pull/4692) Ink TUI重构 | 7天 | 架构评审，Python-React边界设计 |
| [#5688](https://github.com/NousResearch/hermes-agent/pull/5688) 多记忆提供者 | 3天 | 与现有内存管理器兼容性测试 |
| [#5957](https://github.com/NousResearch/hermes-agent/pull/5957) Slate Agent Hub | 3天 | 新平台维护责任确认 |

---

*日报生成时间：2026-04-10*  
*数据来源：NousResearch/hermes-agent GitHub*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-04-10

---

## 1. 今日速览

PicoClaw 今日保持**高活跃度**，24小时内产生 **16 条 Issues 更新**（13 条新开/活跃，3 条关闭）和 **24 条 PR 更新**（17 条待合并，7 条已合并/关闭）。社区焦点集中在**多通道消息处理缺陷**、**Codex/OpenAI OAuth 集成稳定性**以及**Docker/配置文档的透明度问题**。值得注意的是，同一用户（zuozhehao）连续提交 3 个关联 Bug，暴露多通道架构下的竞态条件；同时社区对 Discord 官方支持不足的抱怨获得 2 个 👍，反映国际化运营的结构性短板。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 作者 | 核心贡献 | 项目推进 |
|:---|:---|:---|:---|
| [#2420](https://github.com/sipeed/picoclaw/pull/2420) | lahuman | 文档修复：工具 JSON 转义语义改为 Provider 无关描述 | 消除 CLI 假设对其他 Provider 的误导，提升多模型兼容性 |
| [#2418](https://github.com/sipeed/picoclaw/pull/2418) | lahuman | 新增韩语 README 翻译 | 国际化文档覆盖扩展至韩语市场 |
| [#2457](https://github.com/sipeed/picoclaw/pull/2457) | dependabot[bot] | 升级 modernc.org/sqlite 1.48.0→1.48.2 | 依赖安全维护 |
| [#2454](https://github.com/sipeed/picoclaw/pull/2454) | dependabot[bot] | 升级 Telego 1.7.0→1.8.0（Telegram Bot API v9.6） | Telegram 通道能力同步上游 |
| [#2453](https://github.com/sipeed/picoclaw/pull/2453) | dependabot[bot] | 升级 AWS SDK v2 config | 云基础设施依赖维护 |

**整体评估**：今日合并以**文档完善**和**依赖维护**为主，核心功能修复 PR（如 Codex 流式输出、MCP 空参数处理）仍处于待审状态，关键稳定性问题尚未进入主干。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论数 | 核心诉求 | 深层分析 |
|:---|:---|:---|:---|
| [#2319](https://github.com/sipeed/picoclaw/issues/2319) WebSocket 连接失败 | 4 | v0.2.5 WebSocket 连接失败 | 基础设施稳定性问题，影响实时通信场景，5天未获修复 |
| [#2426](https://github.com/sipeed/picoclaw/issues/2426) 工作区外文件访问被拒 | 3 ✅ | 安全限制与文件访问冲突 | **已关闭**——安全策略与用户体验的平衡问题 |
| [#795](https://github.com/sipeed/picoclaw/issues/795) GLM Coding Plan API 500 错误 | 3 ✅ | 长对话后 API 报错 | **已关闭**——Provider 侧稳定性问题，社区协作定位 |

### 反应最多的 Issue

| Issue | 👍 | 核心诉求 |
|:---|:---:|:---|
| [#2433](https://github.com/sipeed/picoclaw/issues/2433) Discord 官方支持缺失 | 2 | 要求官方派驻人员维护 Discord 社区，批评"Discord 像无人区" |

**关键洞察**：Discord 支持问题获得社区共鸣，反映 Sipeed 作为硬件厂商运营 AI 软件社区的**资源分配矛盾**——微信优先策略与国际化社区需求的冲突。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重程度 | Issue | 描述 | Fix PR 状态 |
|:---|:---|:---|:---:|
| 🔴 **高** | [#2447](https://github.com/sipeed/picoclaw/issues/2447) | 多任务连续发送时仅处理最后一条消息 | ❌ 无 |
| 🔴 **高** | [#2446](https://github.com/sipeed/picoclaw/issues/2446) | 多通道场景下消息回显/竞态条件 | ❌ 无 |
| 🔴 **高** | [#2448](https://github.com/sipeed/picoclaw/issues/2448) | WebUI 暴露 Agent 内部推理链（安全/体验双重问题） | [#2449](https://github.com/sipeed/picoclaw/pull/2449) 🔄 待审 |
| 🟡 **中** | [#2319](https://github.com/sipeed/picoclaw/issues/2319) | v0.2.5 WebSocket 连接失败 | ❌ 无 |
| 🟡 **中** | [#2429](https://github.com/sipeed/picoclaw/issues/2429) | 模型添加后无法使用 + 控制台双字符输入 | ❌ 无（用户情绪激烈）|
| 🟡 **中** | [#2438](https://github.com/sipeed/picoclaw/issues/2438) [#2439](https://github.com/sipeed/picoclaw/issues/2439) | Gateway Token 机制文档缺失/误导 | ❌ 无 |
| 🟡 **中** | [#2440](https://github.com/sipeed/picoclaw/issues/2440) | Docker ReadonlyRootfs 不兼容 | ❌ 无 |
| 🟢 **低** | [#2367](https://github.com/sipeed/picoclaw/issues/2367) | 设置页最后一屏标题未国际化（中文残留） | ❌ 无 |
| 🟢 **低** | [#2377](https://github.com/sipeed/picoclaw/issues/2377) | exec/logs 输出不安全终端控制字符 | ❌ 无 |

### 关键修复 PR（待审）

| PR | 修复目标 | 关联 Issue |
|:---|:---|:---|
| [#2462](https://github.com/sipeed/picoclaw/pull/2462) | Codex 流式输出修复 + Telegram 重复重试 | 多场景稳定性 |
| [#2460](https://github.com/sipeed/picoclaw/pull/2460) | MCP 空参数传递 `null`→`{}` 兼容 TypeScript SDK | Zod 验证失败 |
| [#2449](https://github.com/sipeed/picoclaw/pull/2449) | WebUI 工具调用摘要与助手输出同步 | [#2448](https://github.com/sipeed/picoclaw/issues/2448) |
| [#2443](https://github.com/sipeed/picoclaw/pull/2443) | Codex OAuth gpt-5.4 空响应修复 | 流式输出问题 |
| [#2437](https://github.com/sipeed/picoclaw/pull/2437) | Codex 流事件输出项累积 | 空响应根因 |
| [#2436](https://github.com/sipeed/picoclaw/pull/2436) | FTS5 MATCH 查询注入防护 | 搜索安全 |

---

## 6. 功能请求与路线图信号

| Issue/PR | 类型 | 内容 | 纳入可能性评估 |
|:---|:---|:---|:---|
| [#2376](https://github.com/sipeed/picoclaw/issues/2376) | 体验优化 | 禁用 Enter 发送消息（移动端多行输入） | ⭐⭐⭐ 高——Android 用户痛点明确 |
| [#2444](https://github.com/sipeed/picoclaw/issues/2444) | 安全增强 | MCP 服务器密钥支持 `.security.yml` | ⭐⭐⭐ 高——与现有安全体系一致 |
| [#2442](https://github.com/sipeed/picoclaw/pull/2442) | 架构升级 | Skills 注册表重构 + GitHub 后端发现 | ⭐⭐⭐ 高——PR 已提交，生态扩展关键 |
| [#2414](https://github.com/sipeed/picoclaw/pull/2414) | 可观测性 | Gateway 启动错误日志记录 | ⭐⭐⭐ 高——基础运维能力 |

**路线图信号**：GitHub-backed skill discovery（[#2442](https://github.com/sipeed/picoclaw/pull/2442)）标志着 PicoClaw 正从**封闭技能生态**向**开放插件市场**演进，与 MCP 生态形成互补。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **Android TV/Termux 边缘场景** | [#2462](https://github.com/sipeed/picoclaw/pull/2462) | "Android 7 + Termux + Telegram + OpenAI OAuth" 组合下 Codex 流式输出断裂，Telegram 重复重试 |
| **多通道生产部署** | [#2447](https://github.com/sipeed/picoclaw/issues/2447) [#2446](https://github.com/sipeed/picoclaw/issues/2446) | 消息丢失、竞

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 202