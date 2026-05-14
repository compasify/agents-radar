# OpenClaw Ecosystem Digest 2026-05-14

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-14 00:25 UTC

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

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-14

## 1. Today's Overview

OpenClaw exhibits **extremely high community velocity** with 500 issues and 500 PRs updated in the last 24 hours, though the merge ratio remains critically low (only 23 PRs merged/closed versus 477 open). Three beta releases shipped in the 2026.5.12-beta.x series, indicating rapid iteration on gateway protocol and messaging reliability. The project shows strong engagement around platform integrations (Slack, Telegram, Discord, iMessage) and emerging model compatibility (Xiaomi MiMo, Gemini 3.1 Pro, Kimi K2.6), but accumulating open PRs suggest either review bottleneck or quality gate challenges. Critical stability concerns persist around gateway runtime degradation, session recovery, and Windows/Node 24 performance regressions that span multiple releases.

---

## 2. Releases

### v2026.5.12-beta.6
| | |
|:---|:---|
| **Focus** | iMessage media handling, agent session initialization |
| **Fixes** | • iMessage: Eliminated visible `<media:image>` placeholder text in native image sends while preserving internal echo-key deduplication ([#81209](https://github.com/openclaw/openclaw/issues/81209)) — @homer-byte<br>• Agents/sessions: Ensures configured agent main sessions are created before first `session` interaction (truncated in source) |

### v2026.5.12-beta.5
| | |
|:---|:---|
| **Focus** | Gateway protocol evolution, Talk session scoping, Copilot integration |
| **Fixes** | • Gateway: Forward Talk session scope to resolver for AI context ([#81379](https://github.com/openclaw/openclaw/issues/81379)) — @pgondhi987<br>• **Breaking/SDK**: Gateway protocol now requires v4 clients; streams explicit `deltaText`/`replace` frames eliminating need for client-side diffing ([#80725](https://github.com/openclaw/openclaw/issues/80725)) — @samzong<br>• GitHub Copilot: Integration fix (truncated in source) |

### v2026.5.12-beta.4
| | |
|:---|:---|
| **Focus** | Codex runtime stability, migration UX |
| **Fixes** | • Codex runtime: Fixed `MODULE_NOT_FOUND` when official `@openclaw/codex` package accesses private task-runtime SDK helper during OpenAI/Codex beta migrations<br>• Codex migration: Enter key now activates highlighted checkbox before continuing, fixing "Skip for now" interaction pattern |

**Migration Note**: The v4 gateway protocol requirement in beta.5 is a **client-breaking change**; SDK consumers must upgrade to handle `deltaText`/`replace` frames natively.

---

## 3. Project Progress

### Merged/Closed PRs (Selected)

| PR | Author | Status | Impact |
|:---|:---|:---|:---|
| [#81487](https://github.com/openclaw/openclaw/pull/81487) — Browser-local Control UI text size setting (90%-140%) | BunsDev | **Merged** | Accessibility win; closes longstanding [#8547](https://github.com/openclaw/openclaw/issues/8547) |
| [#81187](https://github.com/openclaw/openclaw/pull/81187) — Route `commitments --json` to stdout | YB0y | **Merged** | Fixes CLI scripting breakage where JSON went to stderr |
| [#81570](https://github.com/openclaw/openclaw/pull/81570) — Memoize plugin metadata snapshots | Kaspre | Open | Performance: addresses repeated manifest scan overhead flagged in [#81143](https://github.com/openclaw/openclaw/issues/81143) |
| [#81572](https://github.com/openclaw/openclaw/pull/81572) — Incremental cron job outcome persistence | efpiva | Open | Reliability: fixes "running" ghost states for completed cron jobs |
| [#81573](https://github.com/openclaw/openclaw/pull/81573) — Xiaomi MiMo detection for DeepSeek thinking format | freeter226 | Open | Model compatibility: resolves `400 Param Incorrect` on multi-turn tool calls |

### Feature Advancement
- **Discord message fetch**: [#81243](https://github.com/openclaw/openclaw/pull/81243) adds single-message retrieval by ID/URL
- **Nextcloud Talk webhook hardening**: [#81569](https://github.com/openclaw/openclaw/pull/81569) filters signed non-message events
- **Per-agent command lane isolation**: [#73991](https://github.com/openclaw/openclaw/pull/73991) (clawsweeper bot) addresses multi-agent gateway overload

---

## 4. Community Hot Topics

| Rank | Issue/PR | Comments | 👍 | Core Need |
|:---|:---|:---:|:---:|:---|
| 1 | [#73323](https://github.com/openclaw/openclaw/issues/73323) Gateway runtime degradation: 60s pricing timeouts, Telegram stalls, RPC slowdowns (Win11/Node 24) | 17 | 1 | **Production reliability on Windows/Node 24** — chronic multi-subsystem degradation spanning 3+ releases; suggests architectural timer/networking fragility |
| 2 | [#72808](https://github.com/openclaw/openclaw/issues/72808) Silently lost Slack connection | 16 | 2 | **Silent failure modes** — connection health visibility and auto-recovery for long-lived integrations |
| 3 | [#68596](https://github.com/openclaw/openclaw/issues/68596) Configurable streaming watchdog timeout | 12 | 7 | **Extended reasoning model support** — 30s watchdog too aggressive for Kimi-k2.5, DeepSeek-R1 thinking phases |
| 4 | [#68449](https://github.com/openclaw/openclaw/issues/68449) Dreaming plugin stopword/filter gaps | 10 | 2 | **Data quality in autonomous features** — tokenization artifacts polluting theme extraction |
| 5 | [#71127](https://github.com/openclaw/openclaw/issues/71127) Stuck sessions detected but never aborted | 9 | 0 | **Self-healing runtime** — diagnostic-to-action gap requires external restart |

**Underlying Pattern**: Users running multi-channel, long-lived gateway deployments need **observability, graceful degradation, and automated recovery** — the project is feature-rich but operationally immature at scale.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#73323](https://github.com/openclaw/openclaw/issues/73323) Gateway runtime degradation | Open | None cited | Multi-subsystem collapse on Windows/Node 24; reproducible across 4.23-4.26 |
| 🔴 **Critical** | [#71127](https://github.com/openclaw/openclaw/issues/71127) Stuck sessions never abort | Open | None | Detected but no recovery action; requires manual restart |
| 🟡 **High** | [#72808](https://github.com/openclaw/openclaw/issues/72808) Silent Slack disconnection | Open | None | Demos fail unpredictably; no error surface to user |
| 🟡 **High** | [#72879](https://github.com/openclaw/openclaw/issues/72879) `thought_signature` 400 regression | Open | None | Google GenAI regression; fix from 2026.4.24 reverted |
| 🟡 **High** | [#80714](https://github.com/openclaw/openclaw/issues/80714) Gemini 3.1 Pro 0-token stall | Open | None | Persistent through beta.3; stalls without error |
| 🟡 **High** | [#74377](https://github.com/openclaw/openclaw/issues/74377) Anthropic tools array empty (Telegram) | Open | None | 17 tools computed, 0 sent; platform-specific schema path bug |
| 🟢 **Medium** | [#71992](https://github.com/openclaw/openclaw/issues/71992) Control UI duplicate replies | Open | None | Regression from #5964/#39469; UX degradation |
| 🟢 **Medium** | [#71412](https://github.com/openclaw/openclaw/issues/71412) `stopChannel` zombie tasks | Open | None | Health monitor false-positive restart |

**Notable Fixed Today**: [#80730](https://github.com/openclaw/openclaw/issues/80730) TUI scope re-approval after reboot (closed), [#78851](https://github.com/openclaw/openclaw/issues/78851) HTTP connection pooling for 7-8s model resolution (closed), [#74334](https://github.com/openclaw/openclaw/issues/74334) snippet normalization rehydration failure (closed), [#71178](https://github.com/openclaw/openclaw/issues/71178) update mid-turn message loss (closed).

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | 👍 | Likelihood in Next Version | Rationale |
|:---|:---|:---:|:---|:---|
| Configurable streaming watchdog timeout | [#68596](https://github.com/openclaw/openclaw/issues/68596) | 7 | **High** | Simple config surface; blocking reasoning model adoption; strong community signal |
| HTTP connection pooling | [#78851](https://github.com/openclaw/openclaw/issues/78851) | 2 | **Shipped** | Closed today; performance critical |
| Multiple Azure/Teams bots per gateway | [#71058](https://github.com/openclaw/openclaw/issues/71058) | 1 | Medium | Enterprise need; schema change required |
| OpenAI Realtime speech-to-speech for macOS Talk | [#71195](https://github.com/openclaw/openclaw/issues/71195) | 1 | Medium | Parity with voice-call plugin; latency-sensitive |
| Configurable Control UI upload limit | [#71142](https://github.com/openclaw/openclaw/issues/71142) | 0 | Medium | Simple bounds change; media understanding ready |
| Control UI plugin contribution slots | [#71736](https://github.com/openclaw/openclaw/issues/71736) | 0 | Lower | Architectural RFC; needs design consensus |
| Separate internal service identity from user auth | [#69066](https://github.com/openclaw/openclaw/issues/69066) | 0 | Lower | Security hardening; breaking change |

---

## 7. User Feedback Summary

### Pain Points
- **"It worked for days, then silently broke"** — Slack, Telegram connections fail without user-visible errors; demo reliability is poor
- **Windows/Node 24 is a second-class runtime** — chronic degradation vs. Linux stability; timeouts accumulate
- **Gateway requires babysitting** — stuck sessions, zombie channels, scope deadlocks all need manual intervention
- **Configuration is image-bound** — plugin configs in read-only sandboxes force rebuilds for any change ([#72950](https://github.com/openclaw/openclaw/issues/72950))
- **Mid-turn updates destroy state** — `openclaw update` during active conversations causes total message loss

### Positive Signals
- Rapid beta release cadence appreciated (beta.4→.6 in short window)
- Active maintainer response on accessibility (#81487 closed quickly)
- Strong multi-platform integration breadth (iMessage, Feishu, Nextcloud, Mattermost)

### Use Case Tensions
- **Personal AI assistant** vs. **multi-agent production gateway** — features diverging; single-user TUI pain points (scope re-approval) differ from multi-agent overload issues (active-memory blocks, QMD boot)

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#54724](https://github.com/openclaw/openclaw/pull/54724) Primary model selection fix (XL size) | ~50 days | **High** | "needs-real-behavior-proof" triage label; blocks agent model switching reliability |
| [#55596](https://github.com/openclaw/openclaw/pull/55596) CJK markdown table alignment | ~48 days | Medium | "needs-real-behavior-proof" + "telegram-visible-proof"; localization gap |
| [#43810](https://github.com/openclaw/openclaw/pull/43810) Unapproved user pairing code spam | ~63 days | Medium | "blank-template" + multiple triage labels; security/UX issue |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) Write/exec tool parameters dropped after long conversations | ~51 days | **High** | Silent data loss in core tool use; only 4 comments, low visibility |
| [#40165](https://github.com/openclaw/openclaw/issues/40165) `NO_REPLY` token handling robustness | ~67 days | Medium | Reliability enhancement; prefix/suffix leaks affect suppression correctness |
| [#68691](https://github.com/openclaw/openclaw/issues/68691) Sandbox zombie processes | ~26 days | **High** | `pids.max` resource exhaustion; infrastructure risk |

**Maintainer Attention Gap**: The "needs-real-behavior-proof" triage label appears on **8 of 30 visible PRs**, suggesting a systematic verification bottleneck. Consider automated integration test expansion or community tester program to unblock merge pipeline.

---

*Digest generated from GitHub activity data for openclaw/openclaw on 2026-05-14.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem
**Date:** 2026-05-14 | **Projects Analyzed:** 11

---

## 1. Ecosystem Overview

The personal AI assistant / agent open-source ecosystem is experiencing **bifurcated growth**: a handful of high-velocity projects (OpenClaw, ZeroClaw, CoPaw, IronClaw) are rapidly expanding multi-channel gateway infrastructure and autonomous skill systems, while smaller projects (NullClaw, Moltis, TinyClaw) show minimal activity or maintenance-only mode. **Production reliability has become the dominant concern** across active projects—every major codebase shows critical stability issues around session management, silent failures, and provider compatibility. The ecosystem is simultaneously maturing toward enterprise deployment (credential isolation, observability, security hardening) and fragmenting along architectural lines: OpenClaw's multi-agent gateway model versus ZeroClaw's autonomous skill evolution versus IronClaw's WASM-based "Reborn" rewrite.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score | Status |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | 3 betas (2026.5.12-beta.4–.6) | ⚠️ **Strained** | Extremely high velocity, critically low merge ratio (4.6%), accumulating technical debt |
| **NanoBot** | 19 | 17 | None (v0.1.5.post3 latest) | ✅ **Healthy** | Well-balanced load; strong reliability focus; responsive closure rate |
| **Hermes Agent** | 50 | 50 | None (v0.13.0, 7 days old) | 🔴 **Degraded** | Firefighting v0.13.0 regressions; data-loss bugs unpatched |
| **PicoClaw** | 10 | 42 | Nightly v0.2.8-nightly.20260513 | ✅ **Healthy** | Strong merge ratio (2:1); focused stabilization |
| **NanoClaw** | 8 | 26 | None | ✅ **Healthy** | High merge velocity (7:1); skill expansion phase |
| **NullClaw** | 1 | 1 | None | ⚠️ **Dormant** | Minimal activity; 5-week PR stall |
| **IronClaw** | 22 | 50 | None (crates.io stuck at v0.24.0) | 🔴 **Blocked** | Intense development but distribution gap; zero external engagement |
| **LobsterAI** | 2 | 23 | 2026.5.12 (yesterday) | ⚠️ **Declining** | Feature shipping over stability; critical bugs unaddressed; bulk-closed security PRs |
| **Moltis** | 1 | 0 | None | ⚠️ **Dormant** | Single UI regression; no development activity |
| **CoPaw** | 30 | 50 | v1.1.7-beta.2 | ⚠️ **Strained** | High velocity but critical OOM bug unaddressed; single-contributor bottleneck |
| **ZeptoClaw** | 4 (closed) | 0 | None | ⚠️ **Hardening** | Security audit focus; no code shipping; zero open items |
| **ZeroClaw** | 34 | 50 | None (v0.7.6 pending) | ⚠️ **Strained** | High velocity; v0.8.0 schema migration; Windows/provider fragility |

*Health Score methodology: Balances velocity against resolution rate, critical bug backlog, release cadence, and community engagement.*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Closest Peer |
|:---|:---|:---|
| **Ecosystem breadth** | 10+ platform integrations (iMessage, Feishu, Nextcloud, Mattermost) | CoPaw (DingTalk/QQ/WeChat focus); ZeroClaw (Matrix/Discord/Signal/WhatsApp) |
| **Release cadence** | 3 betas in 48 hours | Hermes (7 days since v0.13.0); IronClaw (3+ months no crates.io) |
| **Accessibility investment** | Browser-local text sizing (#81487 merged promptly) | None comparable |
| **Protocol evolution** | v4 gateway protocol with explicit delta frames | NanoBot (streaming reasoning display); CoPaw (MCP streaming fixes) |

### Technical Approach Differences
- **OpenClaw**: Centralized multi-agent gateway with explicit protocol versioning; TUI + web Control UI; image-bound plugin configs
- **ZeroClaw**: Decentralized skill evolution with `SkillImprover` autonomous feedback loops; schema-driven skill definitions
- **IronClaw**: WASM-componentized "Reborn" architecture with libSQL ledger; Rust-based; near-zero-config hosted model
- **CoPaw**: FastAPI plugin-native routes; cron-first job scheduling; mobile-responsive console
- **NanoBot**: Lightweight Python; cross-provider failover chains; reasoning content transparency

### Community Size Comparison
OpenClaw's **500 issues/500 PRs in 24 hours** dwarfs all peers—likely 10x NanoBot's 36 items and 5x ZeroClaw's 84. However, **engagement quality is inverted**: NanoBot shows stronger 👍/comment ratios and faster closure rates. OpenClaw's "needs-real-behavior-proof" triage label on 8 of 30 visible PRs reveals a **verification bottleneck** that smaller projects avoid.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Streaming infrastructure** | OpenClaw, PicoClaw, CoPaw, NanoBot | Real-time UX parity with ChatGPT/Claude; `deltaText`/`replace` frames (OpenClaw #80725); configurable HTTP streaming (PicoClaw #2404); MCP `stream_http` 401 handling (CoPaw #4227) |
| **Reasoning model compatibility** | OpenClaw, NanoBot, PicoClaw, ZeroClaw, Hermes | Extended watchdog timeouts for Kimi/DeepSeek thinking phases (OpenClaw #68596); `reasoning_content` 400 errors (NanoBot #3760, PicoClaw #2706, ZeroClaw #6643); `thinking_level` propagation (PicoClaw #2286) |
| **Silent failure elimination** | OpenClaw, NanoBot, Hermes, NanoClaw | Slack/Telegram silent disconnects (OpenClaw #72808); empty LLM responses (NanoBot #235); cron silent failures (Hermes #25295); CLI silent overrides (NanoClaw #2464) |
| **Multi-tenant credential isolation** | NanoClaw, IronClaw, ZeroClaw | Per-group API keys (NanoClaw #869); hosted vs. local path divergence (IronClaw #2905); workspace profile loading order (ZeroClaw #6419) |
| **Observability & diagnostics** | ZeroClaw, NanoBot, OpenClaw | OTel tool spans (ZeroClaw #6009); `nanobot doctor` CLI (NanoBot #3769); gateway runtime degradation visibility (OpenClaw #73323) |
| **Security hardening** | ZeptoClaw, IronClaw, ZeroClaw, Hermes | MCP unauthenticated shell execution (ZeptoClaw #588); secret store vulnerabilities (IronClaw #3592); pairing code entropy (ZeroClaw #6613); MS Graph webhook limits (Hermes #25296) |

---

## 5. Differentiation Analysis

| Project | Primary Target User | Feature Focus | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Power users, multi-channel operators | Gateway protocol stability, platform breadth, TUI/web hybrid | Node.js event-loop gateway; image-bound plugins; explicit protocol versioning |
| **NanoBot** | Telegram-centric users, Chinese LLM adopters | Reliability, failover, reasoning transparency | Lightweight Python; cross-provider chains; minimal resource footprint |
| **Hermes Agent** | Blockchain/EVM developers, theme customizers | EVM multi-chain skills, dashboard aesthetics | Electron-based; cron-heavy; skill-centric with governance policies |
| **PicoClaw** | ARM/embedded deployers, privacy-conscious users | Edge deployment, local models, WhatsApp on Pi | Go-based; compiled binaries; mobile Android support |
| **NanoClaw** | Marketing operations teams | Social media skills, on-device transcription, audit tooling | Skill marketplace model; containerized audits; LangFuse observability |
| **IronClaw** | Hosted platform operators, Rust ecosystem | WASM sandboxing, near-protocol integration, security | Rust + WASM; libSQL ledger; Reborn component architecture |
| **CoPaw** | Chinese enterprise, non-technical users | Preset agents, mobile console, IM integration | FastAPI plugin routes; cron job overhaul; Indonesian localization |
| **ZeroClaw** | Autonomous agent researchers, multi-agent orchestrators | Self-improving skills, schema evolution, OTel | Rust core; markdown→WASM skill pipeline; background review forks |
| **LobsterAI** | NetEase internal, desktop-native users | Memory UX, desktop OS integration, plugin ecosystem | Electron; POPO/NetEase ecosystem; Mermaid diagram support |
| **ZeptoClaw** | Security-audited enterprise deployers | MCP hardening, CVE tracking, runtime verification | Security-first; Docker-focused; minimal attack surface |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Risk/Reward)
| Project | Characteristics | Risk Factor |
|:---|:---|:---|
| **OpenClaw** | 1000 items/day; 3 beta releases/48hr; feature-rich, operationally immature | Merge ratio collapse; Windows/Node 24 degradation; stuck sessions |
| **ZeroClaw** | 84 items/day; v0.8.0 schema migration; skills autonomy push | v0.7.6 release gating; Windows second-class; provider whack-a-mole |
| **CoPaw** | 80 items/day; beta shipping; mobile + international expansion | Single-contributor sprint (#aqilaziz); critical OOM unaddressed |

### Tier 2: Stabilization (Balanced Growth)
| Project | Characteristics | Trajectory |
|:---|:---|:---|
| **NanoBot** | 36 items/day; 14/19 issues closed; failover shipped | Production-readiness threshold crossed; likely v0.1.6 soon |
| **PicoClaw** | 52 items/day; 2:1 merge ratio; nightly builds | v0.2.8 stabilization; ARM niche solidifying |

### Tier 3: Regression Recovery / Blocked
| Project | Characteristics | Blocker |
|:---|:---|:---|
| **Hermes Agent** | 100 items/day but 47:3 open:closed issue ratio; v0.13.0 data-loss bugs | Cron destruction, config vanishing, auth fractures—trust erosion |
| **IronClaw** | 72 items/day; intense Reborn development; zero releases | crates.io distribution gap; nightly E2E red 4+ days; no external community |
| **LobsterAI** | 25 items/day; UI polish shipping; 15 stale security PRs bulk-closed | Critical streaming race unpatched; virtual scroll infinite loop; maintainer attention deficit |

### Tier 4: Dormant / Maintenance
| Project | Characteristics | Concern |
|:---|:---|:---|
| **NanoClaw** | 34 items/day but marketing-skill heavy; silent failure pattern | Enterprise readiness gap despite skill volume |
| **NullClaw** | 2 items/day; 5-week PR stall | Contributor fatigue; potential project stagnation |
| **ZeptoClaw** | 4 closed issues, zero open items, zero PRs | Closed development model? Low adoption? Insular team? |
| **Moltis** | 1 issue, zero PRs | Frontend regression recurring; no maintainer response |
| **TinyClaw** | Zero activity | Effectively dormant |

---

## 7. Trend Signals

| Trend | Evidence | Value for AI Agent Developers |
|:---|:---|:---|
| **"Gateway as infrastructure"** | OpenClaw's 60s pricing timeouts, ZeroClaw's WebSocket turn spins, CoPaw's MCP 401 hangs | Agent developers must treat gateway runtime as **distributed systems problem**, not async wrapper—observability, circuit breakers, and graceful degradation are non-negotiable |
| **Reasoning model protocol lag** | Every project shows `reasoning_content` breakage (NanoBot #3760, PicoClaw #2706, ZeroClaw #6643, OpenClaw #68596) | Abstract reasoning-phase handling **upstream of provider-specific schemas**; configurable timeouts and content preservation are emerging requirements |
| **Autonomous skill evolution** | ZeroClaw's `SkillImprover` + review fork (#6594), Hermes' skill standards policy (#25302), NanoClaw's marketing skill explosion | Agents that **self-modify capabilities** are becoming table stakes; declarative skill definitions with runtime feedback loops are the next architecture frontier |
| **Enterprise security/tenancy** | NanoClaw #869 (per-group credentials), IronClaw #3592 (secret store), ZeroClaw #6613 (pairing codes), ZeptoClaw #588 (MCP auth) | Single-tenant personal assistant assumptions are **breaking**; multi-tenant isolation, audit logging, and hardened MCP endpoints are enterprise blockers |
| **Observability as feature** | ZeroClaw's OTel push (#6009, #6641-6642), NanoClaw's LangFuse (#2456), NanoBot's `doctor` CLI (#3769) | Users demand **cost transparency** (token usage) and **operational visibility** (traces, spans); agent frameworks must instrument natively |
| **Platform-native rich interactions** | Hermes #503 (teknium1-authored strategic gap), CoPaw's mobile responsive UI (#4285), OpenClaw's Control UI polish | Text-only agents are **competitively obsolete**; inline keyboards, structured cards, and platform-appropriate UX are required for adoption |
| **Windows as second-class runtime** | OpenClaw #73323, ZeroClaw #6410/#6419, Hermes schtasks UTF-8 (#25300) | Cross-platform parity remains **unsolved**; Windows-specific CI, path handling, and process management need dedicated investment |

---

*Report compiled from 11 project digests covering 2,000+ GitHub items. Data current as of 2026-05-14.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-14

## 1. Today's Overview

NanoBot shows **strong development momentum** with 36 total items updated in the last 24 hours (19 issues, 17 PRs), indicating an active, well-maintained project. The community is particularly engaged around **reliability and production readiness**, with multiple PRs addressing failover, health monitoring, and access control landing simultaneously. Notably, the project is seeing **security-conscious contributions** (per-chat access rules, DM allowlisting) alongside **core infrastructure hardening** (MCP connection probing, context preservation). With 9 open PRs and 5 active issues, the maintainer queue is moderately loaded but not overwhelmed. No new release was cut today, suggesting the project may be accumulating changes for a larger version bump.

---

## 2. Releases

**None** — No new releases published today. The latest version remains **v0.1.5.post3** (per issue references).

---

## 3. Project Progress

### Merged/Closed PRs (8 items)

| PR | Description | Impact |
|:---|:---|:---|
| [#3740](https://github.com/HKUDS/nanobot/pull/3740) | **fix(mcp): probe HTTP port before connecting** — Prevents event-loop crash when MCP servers are unreachable | 🔒 **Critical stability fix** for MCP integration |
| [#3756](https://github.com/HKUDS/nanobot/pull/3756) | **feat(runner): model failover with `fallback_models`** — Cross-provider fallback chains when primary model fails | 🚀 **Major reliability feature**; closes [#3376](https://github.com/HKUDS/nanobot/issues/3376) |
| [#3655](https://github.com/HKUDS/nanobot/pull/3655) | **feat(reason): display model reasoning content during streaming** — `show_reasoning` config option, fixes TUI duplication | ✨ User experience enhancement |
| [#3766](https://github.com/HKUDS/nanobot/pull/3766) | **test(agent): expand coverage + refactor test structure** — 121 new tests, splits 3313-line test file into 9 modules | 🧱 Code quality investment |
| [#1923](https://github.com/HKUDS/nanobot/pull/1923) / [#1896](https://github.com/HKUDS/nanobot/pull/1896) | **feat(shell): configurable exec output truncation** — `max_output` + `truncate_mode` ("head"/"tail"/"both") | 🔧 Closes [#1871](https://github.com/HKUDS/nanobot/issues/1871) |
| [#1135](https://github.com/HKUDS/nanobot/pull/1135) | Correct README capitalization | 📝 Documentation |
| [#915](https://github.com/HKUDS/nanobot/pull/915) | Add ContextMemory integration guide | 📚 Documentation |

**Key advancement**: The project crossed a reliability threshold today with **cross-provider model failover** and **MCP connection hardening** — both addressing production-deployment blockers.

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|:---|:---|:---|
| [#235](https://github.com/HKUDS/nanobot/issues/235) — "I've completed processing but have no response to give" | **15 comments, 9 👍** | **Long-running, highly-upvoted issue** about DeepSeek + Telegram silent failures. Root cause appears to be model response handling, not gateway errors. Users want better error surfacing when LLM returns empty content. |
| [#3376](https://github.com/HKUDS/nanobot/issues/3376) — Provider/Model Failover | **13 comments, 1 👍** | **Now resolved** by [#3756](https://github.com/HKUDS/nanobot/pull/3756). Strong demand from Chinese users running multiple providers (DeepSeek, GLM, etc.) for resilience against single-provider outages. |
| [#3689](https://github.com/HKUDS/nanobot/issues/3689) — Interrupt loses conversation context | **5 comments** | **Open, active** — User frustration with agent loops + interruption workflow. Reveals tension between "stop and restart" vs. "pause and resume" mental models. |

**Underlying needs**: (1) **Transparent failure modes** — users can't debug "silent" LLM failures; (2) **Session continuity guarantees** — interruptions shouldn't be destructive; (3) **Multi-provider resilience** — especially for users in regions with unstable API access.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Details |
|:---|:---|:---|:---|:---|
| 🔴 **High** | [#3760](https://github.com/HKUDS/nanobot/issues/3760) — `reasoning_content` causes 400 error with DeepSeek-v4-flash | **Open** | ❌ No | **Regression in v0.1.5.post3** — DeepSeek's reasoning format incompatible with NanoBot's request schema. Blocks DeepSeek users entirely. |
| 🟡 **Medium** | [#3726](https://github.com/HKUDS/nanobot/issues/3726) — Context compression bug halts system | **Closed** | ✅ [#3765](https://github.com/HKUDS/nanobot/pull/3765) | Token consolidation had "no safe boundary" — fixed by preserving messages during auto-compact |
| 🟡 **Medium** | [#3739](https://github.com/HKUDS/nanobot/issues/3739) — MCP server not started causes agent crash | **Closed** | ✅ [#3740](https://github.com/HKUDS/nanobot/pull/3740) | Event loop crash on unreachable MCP; now probed before connection |
| 🟡 **Medium** | [#3746](https://github.com/HKUDS/nanobot/issues/3746) — WebUI preloads >1MB markdown chunk unnecessarily | **Open** | ❌ No | Performance regression; affects startup time even for non-code sessions |
| 🟢 **Low** | [#1640](https://github.com/HKUDS/nanobot/issues/1640) — Session stuck after manual memory deletion (GLM-4.7) | **Closed** | Unknown | Cloud-model specific state persistence issue |

**Critical watch**: [#3760](https://github.com/HKUDS/nanobot/issues/3760) is a **live regression** affecting a popular model (DeepSeek-v4) with no fix PR yet. Recommend priority attention.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Request | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **`/model` slash command** ([#3742](https://github.com/HKUDS/nanobot/issues/3742)) | Dynamic provider/model switching | **High** | Complements merged failover PR; small scope, high user value |
| **`nanobot doctor` diagnostic CLI** ([#3769](https://github.com/HKUDS/nanobot/issues/3769)) | Config + channel health check | **High** | Referenced `openclaw doctor` as prior art; fits reliability theme |
| **DM security / allowlist** ([#3768](https://github.com/HKUDS/nanobot/issues/3768)) | Unknown sender gating | **High** | PRs [#3770](https://github.com/HKUDS/nanobot/pull/3770) (per-chat rules) already in flight; security is emergent theme |
| **Session preservation on interrupt** ([#3689](https://github.com/HKUDS/nanobot/issues/3689)) | Maintain context across interruptions | **Medium** | PR [#3765](https://github.com/HKUDS/nanobot/pull/3765) partially addresses; full solution needs design |
| **LongTaskTool** ([#3460](https://github.com/HKUDS/nanobot/pull/3460)) | Multi-step agent tasks with fresh subagents | **Medium** | Large PR open since April 26; complex, needs review bandwidth |
| **Qiniu provider** ([#3643](https://github.com/HKUDS/nanobot/pull/3643)) | Chinese cloud provider support | **Medium** | Tests included, but provider proliferation has maintenance cost |
| **WebSocket channel** ([#1685](https://github.com/HKUDS/nanobot/issues/1685)) | Local agent without messaging platforms | **Low-Medium** | Author offered PR; niche use case vs. maintenance burden |

**Predicted v0.1.6 themes**: Reliability (failover, health checks), Security (access control), Diagnostics (doctor command).

---

## 7. User Feedback Summary

### Pain Points
| Issue | Frequency | User Quote / Signal |
|:---|:---|:---|
| **Silent LLM failures** | Recurring | "No errors, nothing interesting being outputted" — [#235](https://github.com/HKUDS/nanobot/issues/235) |
| **Single-provider fragility** | High | Explicit multi-provider configs, but "task still interrupts" — [#3376](https://github.com/HKUDS/nanobot/issues/3376) |
| **Context loss on interruption** | Moderate | "打断的时候应该让nanobot仍然记住对话" — [#3689](https://github.com/HKUDS/nanobot/issues/3689) |
| **DeepSeek compatibility** | Emerging | v4-flash `reasoning_content` 400 error — [#3760](https://github.com/HKUDS/nanobot/issues/3760) |
| **MCP startup fragility** | Moderate | Service not started → crash — [#3739](https://github.com/HKUDS/nanobot/issues/3739) |

### Use Cases
- **Telegram + Chinese LLMs** (DeepSeek, GLM) — dominant configuration
- **Multi-channel deployments** (WhatsApp, WeChat, QQ) — memory/session issues channel-agnostic
- **Local/self-hosted** — WebSocket request, Ollama/vLLM concurrency issues

### Satisfaction Signals
- Strong community contribution (17 PRs in 24h)
- Responsive issue closure (14/19 issues closed)
- Users actively proposing solutions, not just reporting problems

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#3460](https://github.com/HKUDS/nanobot/pull/3460) `LongTaskTool` | 18 days open | **Review starvation** | Maintainer review; large PR (meta-ReAct loop) |
| [#3693](https://github.com/HKUDS/nanobot/pull/3693) LLM concurrency gate | 6 days open | **Marked invalid?** | Clarification on status; addresses real Ollama/vLLM issues |
| [#3643](https://github.com/HKUDS/nanobot/pull/3643) Qiniu provider | 8 days open | **Scope decision** | Maintainer call on provider expansion policy |
| [#1774](https://github.com/HKUDS/nanobot/issues/1774) Long-term memory maintenance | 2+ months | **Design needed** | Architectural decision: SQLite vs. text-based memory |
| [#3760](https://github.com/HKUDS/nanobot/issues/3760) DeepSeek-v4 regression | 1 day | **Live breakage** | **Urgent**: No assignee, no PR, blocks popular model |

**Recommendation**: Prioritize [#3760](https://github.com/HKUDS/nanobot/issues/3760) for hotfix; schedule review for [#3460](https://github.com/HKUDS/nanobot/pull/3460) to prevent contributor fatigue.

---

*Digest generated from HKUDS/nanobot GitHub activity on 2026-05-14. All links: https://github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-14

## 1. Today's Overview

Hermes Agent shows **elevated activity with concerning stability patterns** following the v0.13.0 release (2026-05-07). With 50 issues and 50 PRs updated in the last 24 hours—but zero new releases—the project is in active firefighting mode. The community is heavily focused on **v0.13.0 regressions**: cron job destruction, configuration loss, and authentication failures dominate new issues. Meanwhile, development velocity remains strong with 28 merged/closed PRs against 22 open, though many merges are rapid fixes rather than planned features. The high open-to-closed issue ratio (47:3) suggests incoming bug reports are outpacing resolution.

---

## 2. Releases

**No new releases** — v0.13.0 (2026-05-07) remains the latest version. The absence of a hotfix release despite multiple P1 bugs is notable.

---

## 3. Project Progress

### Merged/Closed PRs Today (28 total, selected highlights)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#25304](https://github.com/NousResearch/hermes-agent/pull/25304) | lad75020 | Dashboard theme query parameter support | UX polish for theming system |
| [#25299](https://github.com/NousResearch/hermes-agent/pull/25299) | teknium1 | **Unified EVM multi-chain skill** — salvages and consolidates 3 prior PRs into 8-chain, 14-command skill | Major feature consolidation; avoids silent deletion of video generation subsystem |
| [#25302](https://github.com/NousResearch/hermes-agent/pull/25302) | teknium1 | **Policy change**: Closes in-tree memory plugins to new PRs; codifies skill standards | Architectural governance milestone |
| [#25297](https://github.com/NousResearch/hermes-agent/pull/25297) | shanewas | **Fix**: Exclude cron from distribution payload on update — fixes [#25281](https://github.com/NousResearch/hermes-agent/issues/25281) | Critical v0.13.0 regression fix |
| [#25298](https://github.com/NousResearch/hermes-agent/pull/25298) | zccyman | **Fix**: Preserve systemd unit paths when service user differs from CLI user — fixes [#25282](https://github.com/NousResearch/hermes-agent/issues/25282) | Deployment reliability for production setups |
| [#25300](https://github.com/NousResearch/hermes-agent/pull/25300) | KucGiez | **Fix**: Decode schtasks output as UTF-8 on Windows | Windows gateway stability |
| [#25296](https://github.com/NousResearch/hermes-agent/pull/25296) | binhnt92 | **Security**: Enforce MS Graph webhook body limits | Supply-chain attack surface reduction |
| [#25301](https://github.com/NousResearch/hermes-agent/pull/25301) | Unveiling9559 | **Fix**: DeepSeek `reasoning_effort` + `thinking` parameter propagation | Provider compatibility |
| [#25303](https://github.com/NousResearch/hermes-agent/pull/25303) | Unveiling9559 | **Fix**: Rebase local commits instead of `git reset --hard` on update | Prevents data loss for developers with local commits |
| [#25305](https://github.com/NousResearch/hermes-agent/pull/25305) | zccyman | **Fix**: Distinguish cancelled approval from explicit user deny | Approval UX correctness |
| [#21750](https://github.com/NousResearch/hermes-agent/pull/21750) | Abuarchiv | Mirror background/cron deliveries into sessions | Context continuity for background operations |
| [#11107](https://github.com/NousResearch/hermes-agent/pull/11107) | ziliangpeng | Claude Opus 4.7 adaptive thinking support | Provider feature parity |
| [#24182](https://github.com/NousResearch/hermes-agent/pull/24182) | teknium1 | **Optional codex app-server runtime** for OpenAI/Codex models | Major architectural option for sandboxing |

**Key themes**: v0.13.0 regression fixes dominate; EVM blockchain skill consolidation resolves long-standing fragmentation; governance policies formalized around plugin architecture.

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | 👍 | Topic | Underlying Need |
|:---|:---|:---|:---|:---|
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | 6 | 15 | **Dashboard themes hard to read** | Accessibility and professional UX standards; users reject "non-standard" serif fonts with poor contrast |
| [#503](https://github.com/NousResearch/hermes-agent/issues/503) | 4 | 0 | **Platform-native rich interactions** | Hermes is stuck in plain-text era while competitors use inline keyboards, structured UI; need for platform-appropriate interaction patterns |
| [#25290](https://github.com/NousResearch/hermes-agent/issues/25290) | 2 | 0 | Cron jobs split across profile directories | **Data architecture clarity**: multi-profile system has inconsistent storage semantics |
| [#25281](https://github.com/NousResearch/hermes-agent/issues/25281) | 2 | 0 | Update button deletes all cron jobs | **Operational trust**: updates must be non-destructive |
| [#10199](https://github.com/NousResearch/hermes-agent/issues/10199) | 2 | 0 | Agent executed destructive command without confirmation | **Safety guarantees**: destructive operations need hard confirmation boundaries |

**Analysis**: The 15-upvote theme issue [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) reveals a **design philosophy tension**—the project aesthetic (Cyberpunk, Ember themes) prioritizes style over readability. Meanwhile, [#503](https://github.com/NousResearch/hermes-agent/issues/503) from project leader `teknium1` signals strategic recognition that rich UI components are table stakes for modern agent platforms.

---

## 5. Bugs & Stability

### Critical (P1) — Immediate Attention Required

| Issue | Component | Description | Fix PR? |
|:---|:---|:---|:---|
| [#25281](https://github.com/NousResearch/hermes-agent/issues/25281) | CLI, Cron | Update button **destroys all scheduled cron jobs** | ✅ [#25297](https://github.com/NousResearch/hermes-agent/pull/25297) open |
| [#25295](https://github.com/NousResearch/hermes-agent/issues/25295) | CLI, Cron | Cron jobs created via CLI **silently fail to fire** due to profile fragmentation | ❌ No fix yet |
| [#25272](https://github.com/NousResearch/hermes-agent/issues/25272) | CLI, Config | **All custom model configurations vanished** after v0.13.0 | ❌ No fix yet |
| [#25205](https://github.com/NousResearch/hermes-agent/issues/25205) | Agent, Auth | `_restore_primary_runtime` **reuses revoked API keys**, causing 401s | ❌ No fix yet |
| [#21549](https://github.com/NousResearch/hermes-agent/issues/21549) | Gateway | **launchd double-spawn → infinite restart death spiral** on macOS | ❌ No fix yet |

### High (P2) — Significant Impact

| Issue | Component | Description | Fix PR? |
|:---|:---|:---|:---|
| [#25290](https://github.com/NousResearch/hermes-agent/issues/25290) | Cron, Config | Cron jobs fragmented across profile directories | ❌ No fix yet |
| [#25282](https://github.com/NousResearch/hermes-agent/issues/25282) | CLI, Gateway | `hermes update` resets systemd paths to CLI user's home | ✅ [#25298](https://github.com/NousResearch/hermes-agent/pull/25298) open |
| [#25275](https://github.com/NousResearch/hermes-agent/issues/25275) | Gateway, Auth | Analytics dashboard API returns 401 after v0.13.0 | ❌ No fix yet |
| [#25273](https://github.com/NousResearch/hermes-agent/issues/25273) | Agent, Auth | `/model` switch doesn't load credential pool for new provider | ❌ No fix yet |
| [#10199](https://github.com/NousResearch/hermes-agent/issues/10199) | Agent, Terminal | Agent executed `npm uninstall -g` **without user confirmation** | ❌ No fix yet |

### Stability Assessment: **DEGRADED**

v0.13.0 introduced multiple **data-loss regressions** (cron wipe, config vanishing) and **authentication system fractures** (credential pool failures, stale key reuse). The concentration of P1/P2 bugs in cron, config, and auth systems suggests insufficient integration testing for the profile/multi-tenancy architecture.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Signal | Likelihood in Next Version |
|:---|:---|:---|
| [#503](https://github.com/NousResearch/hermes-agent/issues/503) — Platform-native rich interactions | **Strategic priority** from core team (teknium1 authored) | High — likely v0.14.0 |
| [#23717](https://github.com/NousResearch/hermes-agent/issues/23717) — Pluggable SessionDB (PostgreSQL, MySQL) | Production scalability need; SQLite corruption under hot-update | Medium-High — infrastructure critical |
| [#23837](https://github.com/NousResearch/hermes-agent/issues/23837) — ContextEngine per-turn observation hook | Plugin ecosystem enablement; mneme plugin blocked | Medium |
| [#17272](https://github.com/NousResearch/hermes-agent/issues/17272) — Service-account auth for Google Workspace | Autonomous deployment requirement | Medium |
| [#8793](https://github.com/NousResearch/hermes-agent/issues/8793) — Synchronize cron outputs to session history | Context continuity for background tasks | Medium |
| [#24182](https://github.com/NousResearch/hermes-agent/pull/24182) — Codex app-server runtime | **Merged** — provides OpenAI sandboxing alternative | Available now (opt-in) |

**Prediction**: v0.13.1 hotfix is urgently needed for P1 regressions. v0.14.0 will likely feature rich UI components and SessionDB abstraction given the architectural signals.

---

## 7. User Feedback Summary

### Pain Points (Explicit Complaints)

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Updates are destructive** | "Every time an update is applied, all cron job configurations are destroyed" [#25281](https://github.com/NousResearch/hermes-agent/issues/25281) | Critical |
| **Configuration doesn't survive upgrades** | "All custom model configurations have vanished" [#25272](https://github.com/NousResearch/hermes-agent/issues/25272) | Critical |
| **Authentication is fragile** | Multiple 401 issues, credential pool failures, stale key reuse | High |
| **Visual design harms usability** | "serif fonts, especially small and light font weight with little contrast makes the dashboard hard to read" [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | Moderate (highly upvoted) |
| **Agent safety boundaries fail** | Destructive commands execute without confirmation [#10199](https://github.com/NousResearch/hermes-agent/issues/10199) | Critical |

### Use Cases Emerging

- **Production server deployments**: Multiple issues around systemd, service accounts, dedicated home directories — users running Hermes as infrastructure, not just personal assistant
- **Multi-profile workflows**: Cron fragmentation reveals users actively using profile system, but implementation is incomplete
- **Autonomous operation**: Service-account auth requests, cron-to-session sync, background delivery mirroring — shift from interactive to autonomous agent

### Satisfaction Signal

Mixed: Strong engagement (50 issues/PRs daily) indicates active user base, but **trust erosion** from v0.13.0 regressions is evident. The rapid PR response (fixes same day as reports) shows healthy maintainer responsiveness.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (Long-standing, High-impact)

| Issue | Age | Problem | Risk if Neglected |
|:---|:---|:---|:---|
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | 14 days | Dashboard readability | **Most-upvoted open issue** (15 👍); UX reputation damage |
| [#503](https://github.com/NousResearch/hermes-agent/issues/503) | ~70 days | Rich platform interactions | Strategic competitive gap; author is project leader |
| [#10199](https://github.com/NousResearch/hermes-agent/issues/10199) | ~30 days | Agent safety boundary failure | **Safety-critical**; potential for real user data loss |
| [#20316](https://github.com/NousResearch/hermes-agent/issues/20316) | ~9 days | Dead code in LCM deferred maintenance | Technical debt; memory/compression system unreliable |
| [#13091](https://github.com/NousResearch/hermes-agent/issues/13091) | ~24 days | llama.cpp `/props` endpoint path incorrect | Provider compatibility breakage |

### PRs at Risk of Stagnation

| PR | Status | Risk |
|:---|:---|:---|
| [#24480](https://github.com/NousResearch/hermes-agent/pull/24480) | Open — GitHub bounty cron hardening | Security-sensitive; unattended automation risks |
| [#21382](https://github.com/NousResearch/hermes-agent/pull/21382) | Open — NixOS module fix | Niche but blocks NixOS users entirely |

---

*Digest generated from GitHub activity data for NousResearch/hermes-agent on 2026-05-14.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-14

## 1. Today's Overview

PicoClaw shows **high development velocity** with 42 PRs and 10 issues updated in the last 24 hours, indicating an active maintenance cycle for the v0.2.8 release line. The project maintains a healthy 2:1 merge-to-open PR ratio (28 closed/merged vs. 14 open), though 5 issues remain open with active discussion. A new nightly build was published, suggesting ongoing stabilization efforts. The community is particularly focused on **streaming infrastructure**, **provider authentication**, and **multi-channel deployment** (notably WhatsApp on ARM devices). Several stale-tagged items received updates, indicating backlog grooming activity.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| **[v0.2.8-nightly.20260513.223ebdf0](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)** | Nightly (automated) | Unstable; use with caution. Contains all changes merged to `main` since v0.2.8 stable. |

**No stable release today.** The nightly build suggests v0.2.8 is still in active development with no imminent stable tag. Users requiring reliability should remain on v0.2.7.

---

## 3. Project Progress

### Merged/Closed PRs (28 total; key highlights)

| PR | Author | Impact |
|----|--------|--------|
| [#2715](https://github.com/sipeed/picoclaw/pull/2715) | is-Xiaoen | **Multi-user group chat attribution** — history messages now track per-sender identity in Discord/Telegram/Slack; closes [#2702](https://github.com/sipeed/picoclaw/issues/2702) |
| [#2383](https://github.com/sipeed/picoclaw/pull/2383) | Alix-007 | Gateway lifecycle management: added `picoclaw gateway status` and `picoclaw gateway stop` CLI commands |
| [#2311](https://github.com/sipeed/picoclaw/pull/2311) | Alix-007 | **Data durability fix**: archived chat history preserved after summarization truncation; fixes [#2310](https://github.com/sipeed/picoclaw/issues/2310) |
| [#2309](https://github.com/sipeed/picoclaw/pull/2309) | Alix-007 | Tool-call history normalization for strict providers (reduces 400 errors from malformed context) |
| [#2306](https://github.com/sipeed/picoclaw/pull/2306) | Alix-007 | `thinking_level` now respected for direct model references; fixes [#2286](https://github.com/sipeed/picoclaw/issues/2286) |
| [#2199](https://github.com/sipeed/picoclaw/pull/2199) | Alix-007 | Telegram reply context preserved without breaking `/` and `!` command prefixes; fixes [#2197](https://github.com/sipeed/picoclaw/issues/2197) |
| [#2183](https://github.com/sipeed/picoclaw/pull/2183) | Alix-007 | Subagent model ID normalization (prevents `openrouter/...` prefixed refs from breaking tool loops) |
| [#2175](https://github.com/sipeed/picoclaw/pull/2175) | Alix-007 | Eliminated redundant local model probes during idle gateway polling (performance/UX win) |
| [#2170](https://github.com/sipeed/picoclaw/pull/2170) | Alix-007 | Per-model custom HTTP headers for OpenAI-compatible providers; secrets masked in API responses |
| [#2153](https://github.com/sipeed/picoclaw/pull/2153) | Alix-007 | Telegram `/models` shortcut for quick model listing and switching |

**Pattern**: Alix-007 dominated merged PRs, focusing on **agent reliability**, **provider compatibility**, and **gateway operability** — all foundational stability work.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|-----|-----------|
| [#1950](https://github.com/sipeed/picoclaw/issues/1950) Streaming Output for Web Chat | Issue | 8 | 0 | **Real-time UX parity**: Web Chat lacks streaming, forcing users to wait for complete responses |
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) Configurable streaming HTTP requests | Issue | 6 | 1 | **Provider protocol compliance**: Matching Python OpenAI client's `stream=True` behavior |
| [#2368](https://github.com/sipeed/picoclaw/issues/2368) Android local model config bug | Issue | 6 | 0 | **Mobile deployment friction**: Android app UI state fails to persist model configuration |
| [#2625](https://github.com/sipeed/picoclaw/issues/2625) Compiled builds with WhatsApp support | Issue | 4 | 1 | **ARM/embedded deployment**: Raspberry Pi Zero 2 users need pre-built WhatsApp-enabled binaries |

**Underlying Analysis**: The streaming requests (#1950, #2404) represent a **coordinated push for real-time inference UX** — likely driven by user expectations set by ChatGPT/Claude interfaces. The WhatsApp + ARM combination (#2625) reveals PicoClaw's unexpected strength in **low-cost edge deployment** for developing markets or privacy-conscious users.

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR? | Details |
|----------|------|--------|---------|---------|
| 🔴 **Critical** | [#2769](https://github.com/sipeed/picoclaw/issues/2769) Auth fails with valid API keys (401 across providers) | **OPEN** | [#2768](https://github.com/sipeed/picoclaw/pull/2768) (open, related) | Cross-provider authentication regression affecting Groq, OpenRouter, Nvidia; occurs in both stable and nightly. **Root cause suspected**: key formatting/proxy header issue. |
| 🔴 **Critical** | [#2704](https://github.com/sipeed/picoclaw/issues/2704) DingTalk SDK panic crashes gateway | **CLOSED** | N/A (external bug) | `dingtalk-stream-sdk-go` race condition on ping timeout → panic. **Mitigation**: likely handled via SDK update or defensive wrapper; no PicoClaw code fix visible. |
| 🟡 **High** | [#2706](https://github.com/sipeed/picoclaw/issues/2706) DeepSeek v4 thinking model broken | **CLOSED** | No dedicated PR | `reasoning_content` field not preserved/round-tripped → 400 errors. Workaround: disable thinking via `extra_body`. **Real fix requires provider-level reasoning content tracking.** |
| 🟡 **High** | [#2859](https://github.com/sipeed/picoclaw/issues/2859) Xiaomi MIMO multi-turn failure | **OPEN** | None | 400 error after 2-3 turns via WeChat channel; parameter corruption in conversation state. **Fresh issue, needs triage.** |
| 🟢 **Medium** | [#2368](https://github.com/sipeed/picoclaw/issues/2368) Android local model config | **CLOSED** | Unknown | UI state desync in Android app |

**Stability Assessment**: Authentication (#2769) is the **most urgent open risk** — it breaks core functionality across multiple providers. The DeepSeek thinking model gap suggests **provider-specific feature parity lag** as models evolve faster than PicoClaw's abstraction layer.

---

## 6. Feature Requests & Roadmap Signals

| Request | Likelihood in Next Version | Rationale |
|---------|---------------------------|-----------|
| **Streaming output (Web Chat + HTTP)** | **High** | Two coordinated issues (#1950, #2404) with active discussion; aligns with tagged roadmap. Infrastructure PRs (#2768 error handling) suggest groundwork being laid. |
| **WhatsApp-included ARM builds** | **Medium** | Niche but well-defined; build system change, not core logic. May be deferred to community builds. |
| **OpenCode provider support** | **Low** | Single request (#2671), closed without action; small provider, no PR submitted. |
| **Unified diff for `edit_file`** | **Medium-High** | Closed as completed (#2848) — likely merged or fast-tracked; improves tool transparency. |
| **Image generation tool** | **Medium** | Open PR [#2760](https://github.com/sipeed/picoclaw/pull/2760) exists, disabled-by-default design reduces risk; blocked on maintainer review. |
| **`update_plan` tool (OpenClaw port)** | **Medium** | Open PR [#2765](https://github.com/sipeed/picoclaw/pull/2765); useful for agent task tracking but competes for review bandwidth. |

---

## 7. User Feedback Summary

### Pain Points
| Issue | Frequency | User Impact |
|-------|-----------|-------------|
| Authentication failures (#2769) | Cross-provider, reproducible | **Complete blocker** — users cannot use paid APIs |
| Android model configuration (#2368) | Mobile-specific | Onboarding friction for local/self-hosted models |
| ARM build customization (#2625) | Embedded/IoT users | Update friction, manual compilation burden |
| DeepSeek reasoning content loss (#2706) | Chinese model users | Degraded reasoning quality or outright failures |

### Positive Signals
- **Multi-user group chat support** (#2715) addresses a real community need for shared agent instances
- **Per-model HTTP headers** (#2170) enables enterprise/proxy use cases
- Active **gateway operability improvements** (status/stop commands, probe optimization)

### Satisfaction/Dissatisfaction Ratio
- **Satisfied**: Power users benefiting from recent agent reliability fixes and Telegram enhancements
- **Dissatisfied**: Mobile/Android users, ARM edge deployers, and users of newest model features (DeepSeek thinking, streaming) experiencing **feature lag vs. upstream providers**

---

## 8. Backlog Watch

### Stale Items Requiring Maintainer Attention

| Item | Age | Risk |
|------|-----|------|
| [#2766](https://github.com/sipeed/picoclaw/pull/2766) Docs sync to V3 config format | ~9 days | **Documentation drift** — 26 files outdated, blocks user onboarding to new config schema |
| [#2765](https://github.com/sipeed/picoclaw/pull/2765) `update_plan` tool port | ~9 days | Feature completeness vs. OpenClaw |
| [#2760](https://github.com/sipeed/picoclaw/pull/2760) Provider-backed image generation | ~9 days | Competitive feature gap |
| [#2757](https://github.com/sipeed/picoclaw/pull/2757) OpenAI OAuth for Codex/transcription | ~9 days | **Paid feature access broken** — ChatGPT Plus subscribers affected |
| [#2725](https://github.com/sipeed/picoclaw/pull/2725) Non-fatal MCP initialization | ~13 days | **Resilience** — prevents zombie gateway states |
| [#2693](https://github.com/sipeed/picoclaw/pull/2693) Sandbox bypass fix (`find /`, `ls /`) | ~16 days | **Security** — workspace isolation vulnerability |
| [#2691](https://github.com/sipeed/picoclaw/pull/2691) `get_current_time` tool | ~16 days | Low-risk utility, easy merge |
| [#2679](https://github.com/sipeed/picoclaw/pull/2679) ChatGPT OAuth subscription fix | ~17 days | **Revenue-impacting** — paying users locked out |
| [#2551](https://github.com/sipeed/picoclaw/pull/2551) Channel identification refactor | ~27 days | **Architecture debt** — blocks multi-instance provider configs |

**Recommendation**: Prioritize **security** (#2693), **revenue** (#2679, #2757), and **documentation** (#2766) to reduce user friction. The cluster of 9-day stale PRs from bogdanovich and SiYue-ZO suggests a **review bottleneck** around early May contributions.

---

*Digest generated from GitHub activity 2026-05-13. All links: https://github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-14

## Today's Overview

NanoClaw showed **high development velocity** with 26 PRs updated in the last 24 hours (21 merged/closed, 5 open) and 8 active issues. The project is in an intense **skill-expansion phase** with 10+ new marketing and social-media skills merged, alongside critical infrastructure fixes for platform setup flows. No new releases were cut. The 7:1 merge-to-open PR ratio indicates healthy review throughput, though 3 high-priority bugs and 2 open PRs with undefined comment counts suggest some items need deeper community engagement.

---

## Releases

*No new releases.*

---

## Project Progress

### Merged/Closed PRs (21 items)

**Major Skill Ecosystem Expansion** — A coordinated push by `fresholdidea` landed 9 new marketing/operations skills:

| PR | Feature | Link |
|:---|:---|:---|
| #2455 | `audit-website` skill rewritten with self-hosted stack (Lighthouse + axe + linkinator), replacing `squirrelscan` blocked by Cloudflare | [PR #2455](https://github.com/nanocoai/nanoclaw/pull/2455) |
| #2452 | Lighthouse 13.3.0 pinned in container Dockerfile for audit stack | [PR #2452](https://github.com/nanocoai/nanoclaw/pull/2452) |
| #2451 | `audit-website` skill localized from upstream for survivability | [PR #2451](https://github.com/nanocoai/nanoclaw/pull/2451) |
| #2453 | `copy-grader` skill localized (Ogilvy-inspired marketing copy grader) | [PR #2453](https://github.com/nanocoai/nanoclaw/pull/2453) |
| #2450 | `linkedin-ads` skill — 4 sub-commands for Ads group performance/creative/audience/build | [PR #2450](https://github.com/nanocoai/nanoclaw/pull/2450) |
| #2449 | `linkedin-community` skill — agent-browser-based organic LinkedIn ops | [PR #2449](https://github.com/nanocoai/nanoclaw/pull/2449) |
| #2448 | `social-listening` skill — composite across Serper, Reddit, Brave, RSS, WebSearch | [PR #2448](https://github.com/nanocoai/nanoclaw/pull/2448) |
| #2447 | `reddit-research` skill + read-only Reddit MCP | [PR #2447](https://github.com/nanocoai/nanoclaw/pull/2447) |
| #2445 | `serper-search` skill + Serper.dev MCP passthrough | [PR #2445](https://github.com/nanocoai/nanoclaw/pull/2445) |
| #2446 | `firecrawl` skill + Firecrawl MCP for structured extraction | [PR #2446](https://github.com/nanocoai/nanoclaw/pull/2446) |

**Infrastructure & Reliability**
- **#2458** [`mtichikawa`](https://github.com/nanocoai/nanoclaw/pull/2458): Voice transcription hook added to Chat SDK bridge (whisper.cpp, on-device, no cloud API)
- **#2459** [`mtichikawa`](https://github.com/nanocoai/nanoclaw/pull/2459): `/add-discord-voice-transcription` skill pairs with above
- **#2456** [`dustinlucien`](https://github.com/nanocoai/nanoclaw/pull/2456): LangFuse observability instrumentation for Claude provider (latency, retries, tool timing, token counts)
- **#2460** [`madevizslove183`](https://github.com/nanocoai/nanoclaw/pull/2460): Slack scope fix — adds `files:read` and `files:write` to setup checklist (closes #2457)
- **#2443** [`flusterff`](https://github.com/nanocoai/nanoclaw/pull/2443): Auto-prepend peer mentions on AI-to-AI Slack outbound messages
- **#2442** [`Koshkoshinsk`](https://github.com/nanocoai/nanoclaw/pull/2442): Fix stale core instruction causing silent message drops to scratchpad
- **#2454** [`fresholdidea`](https://github.com/nanocoai/nanoclaw/pull/2454): OneCLI vault secrets reference documentation

---

## Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| **#869** [Per-group credential management](https://github.com/nanocoai/nanoclaw/issues/869) | 3 comments, High priority, open since 2026-03-09 | **Most discussed issue.** Core architectural limitation: all groups share one Claude API identity. Users need tenant isolation for quota, billing, and security. Signals enterprise readiness gap. |
| **#1787** [macOS Apple Container merge conflicts](https://github.com/nanocoai/nanoclaw/issues/1787) | 2 comments, setup-blocking | Developer experience friction for Apple Silicon users; `/setup` flow broken on fresh clones. |
| **#2457** → **#2460** [Slack `files:read` scope missing](https://github.com/nanocoai/nanoclaw/issues/2457) | 1 comment, closed same day | Rapid fix cycle shows responsive maintenance, but pattern of "setup walkthrough silently breaks file workflows" is systemic (see #2461). |

**Underlying need:** The project is scaling from single-tenant to multi-tenant/group-aware, but credential isolation and platform-specific setup robustness lag behind skill ecosystem growth.

---

## Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|:---|:---|:---|:---|
| **High** | **#2465** [`ncl destinations add` fails to populate receiver's `inbound.db`](https://github.com/nanocoai/nanoclaw/issues/2465) — admin approval flow writes central DB but session-local DB missing; restart doesn't recover; `send_message` can't resolve destination | **Open**, 0 comments | ❌ No PR |
| **High** | **#1787** [Apple Container branch produces 6 merge conflicts on macOS `/setup`](https://github.com/nanocoai/nanoclaw/issues/1787) — fresh fork + clone, first-time setup broken | **Open**, 2 comments | ❌ No PR |
| Medium | **#2464** [CLI silently overrides explicit `--agent-group-id` under group scope](https://github.com/nanocoai/nanoclaw/issues/2464) — no stderr, no exit code, operator confusion | **Open**, 0 comments | ❌ No PR |
| Medium | **#2462** [`setup/install-node.sh` fails on non-Debian Linux](https://github.com/nanocoai/nanoclaw/issues/2462) — Fedora/RHEL/Alpine/Arche unsupported, no fallback | **Open**, 0 comments | ❌ No PR |
| Medium | **#2461** [Teams setup hardcodes `supportsFiles: false`](https://github.com/nanocoai/nanoclaw/issues/2461) — file attachments silently fail, mirror of #2457 | **Open**, 0 comments | ❌ No PR |
| *Fixed* | **#2457** [Slack `files:read` missing](https://github.com/nanocoai/nanoclaw/issues/2457) | **Closed** | ✅ #2460 |

**Pattern alert:** Three setup/documentation bugs (#2457, #2461, #2462) involve "silent failure" modes where missing scopes or hardcoded `false` flags break expected workflows without error messages. The CLI override bug (#2464) extends this pattern to command-line behavior.

---

## Feature Requests & Roadmap Signals

| Issue/PR | Signal | Likelihood Near-Term |
|:---|:---|:---|
| **#869** Per-group credential management + interactive reauth via channels | **High-priority enhancement**, enterprise blocker; design mentions "channels" as reauth UX | 🔴 High — architectural, may need v2.x |
| **#2459** Discord voice transcription | Merged infrastructure (#2458) + skill PR open; pairs with existing #2317 | 🟢 Very high — likely this week |
| **#974** Discord image vision + voice transcription (original) | Blocked since March, superseded by #2459 split | 🟡 Medium — image vision still pending |
| **#2456** LangFuse observability | Merged; suggests formal ops/observability track emerging | — Landed |

**Prediction:** The #869 credential isolation work is the highest-impact pending feature. The "interactive reauth via channels" design suggests a move toward chat-native administration, reducing CLI dependency.

---

## User Feedback Summary

### Pain Points
- **Silent failures dominate UX:** Missing file scopes, hardcoded capability flags, and CLI arg overrides all fail without error messages. Users discover problems by noticing absent behavior, not alerts.
- **Setup fragility:** macOS Apple Container path and non-Debian Linux Node installation are broken for new contributors.
- **Multi-tenancy gaps:** Shared credentials across groups create quota, billing, and security concerns for team/enterprise use.

### Use Cases Emerging
- **Marketing ops stack:** The 9 merged skills reveal NanoClaw positioning as an AI marketing operations platform (LinkedIn ads/community, Reddit research, social listening, copy grading, site auditing).
- **On-device AI:** whisper.cpp voice transcription, local Lighthouse audits — privacy/cost-conscious deployments.
- **Observability:** LangFuse integration signals production monitoring needs from serious deployments.

### Satisfaction Indicators
- Rapid fix for #2457 → #2460 (same-day close)
- High merge velocity and coherent skill ecosystem expansion
- Missing: user celebration/👍 reactions (all items show 0), suggesting either low community size or engagement friction

---

## Backlog Watch

| Item | Age | Risk | Needs |
|:---|:---|:---|:---|
| **#869** [Per-group credential management](https://github.com/nanocoai/nanoclaw/issues/869) | **66 days** | 🔴 **Critical** — blocks enterprise adoption; 3 comments but no assignee | Maintainer decision on architecture; likely v2.x milestone |
| **#1787** [macOS Apple Container merge conflicts](https://github.com/nanocoai/nanoclaw/issues/1787) | **29 days** | 🟡 High — breaks first-time contributor experience on major platform | Rebase/merge conflict resolution in `skill/apple-container` branch |
| **#974** [Discord image vision + voice transcription](https://github.com/nanocoai/nanoclaw/pull/974) | **64 days**, blocked | 🟡 Medium — partially superseded | Clarify if image vision portion will be extracted or if #2459 replaces entirely |
| **#2187** [Don't namespace CLI bare platform IDs](https://github.com/nanocoai/nanoclaw/pull/2187) | **12 days open** | 🟡 Medium — fix for #2186 | Review/merge; follows guidelines, targeted fix |
| **#2411** [Prevent silent skip of scheduled task fires](https://github.com/nanocoai/nanoclaw/pull/2411) | **3 days open** | 🟡 Medium — reliability fix | Review; complex two-failure-mode diagnosis |

**Action needed:** #869 requires explicit maintainer response to prevent staleness despite high priority. The two open PRs (#2187, #2411) appear ready for final review but lack comment engagement.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-14

---

## 1. Today's Overview

NullClaw exhibited minimal activity in the past 24 hours, with only one issue and one pull request receiving updates—neither of which was closed or merged. The single issue (#914) is a new feature request for JIRA integration, suggesting ongoing expansion of the platform's enterprise tool connectivity. The sole PR (#783) is a substantial cron subsystem enhancement that has been open for over five weeks with continued incremental refinement. No releases were published, and the project appears to be in a steady-state maintenance mode rather than active feature shipping. Overall project health appears stable but with slow velocity; the aging open PR may indicate review bandwidth constraints.

---

## 2. Releases

*No new releases published.*

---

## 3. Project Progress

**No PRs were merged or closed today.**

The only active PR remains open without resolution:

| PR | Status | Age | Focus |
|---|---|---|---|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) feat(cron): cron subagent, run history, JSON output, security hardening | OPEN (updated 2026-05-13) | ~5 weeks | Cron scheduling infrastructure |

This PR represents significant architectural work (database-backed scheduler, worker queues, atomic operations, timezone handling, and security hardening) but its extended open state without merge suggests either thorough review cycles or maintainer capacity limitations. No forward progress was recorded in the 24-hour window.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|---|---|---|
| [#914](https://github.com/nullclaw/nullclaw/issues/914) [enhancement] Create JIRA access tool | New, 0 comments, 0 reactions | Fresh request for enterprise PM integration |

**Underlying need:** The JIRA tool request signals demand for NullClaw to serve as a central orchestration layer for enterprise workflows. The detailed scope (authentication, CRUD operations, sprint retrieval, comments) suggests the requester has concrete production use cases, likely involving project management automation or cross-tool agent workflows. This aligns with broader market trends where AI agents must integrate with existing enterprise SaaS stacks rather than operate in isolation.

The cron PR (#783), despite its technical significance, has attracted no visible community discussion (undefined comment count), indicating limited external engagement with infrastructure-level changes.

---

## 5. Bugs & Stability

**No bug reports, crashes, or regressions identified in the past 24 hours.**

The absence of stability issues is positive, though the low overall activity volume limits confidence in this metric.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Version | Rationale |
|---|---|---|---|
| JIRA integration tool | [#914](https://github.com/nullclaw/nullclaw/issues/914) | Moderate | Follows pattern of expanding tool ecosystem; well-scoped request |
| Enhanced cron/scheduler subsystem | [#783](https://github.com/nullclaw/nullclaw/pull/783) | High | Already in PR, substantial engineering investment |

**Prediction:** The cron subsystem (#783) is the most probable near-term release candidate given its maturity and breadth. JIRA integration may follow if the project maintains its trajectory of adding enterprise connectors (similar tools for Slack, GitHub, etc. may exist or be planned).

---

## 7. User Feedback Summary

| Aspect | Observation |
|---|---|
| **Pain points** | No explicit complaints registered today; the JIRA request implies current limitation in enterprise connectivity |
| **Use cases** | Project management automation, scheduled agent execution (cron PR), cross-platform workflow orchestration |
| **Satisfaction signals** | None measurable (no 👍 reactions, minimal comments) |
| **Dissatisfaction signals** | None explicit; however, the 5-week PR age without merge could frustrate contributors awaiting cron functionality |

The community appears small or quiet—low engagement metrics (zero reactions, zero comments on new issues) may indicate either early-stage project maturity, niche user base, or communication channels outside GitHub.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#783](https://github.com/nullclaw/nullclaw/pull/783) Cron subsystem PR | ~5 weeks | **Moderate-High** | Maintainer review, potential merge or explicit feedback to contributor |
| [#914](https://github.com/nullclaw/nullclaw/issues/914) JIRA tool request | 1 day | Low | Triage, roadmap acknowledgment, or community contribution invitation |

**Priority concern:** PR #783 has exceeded typical review windows for a feature of this scope. Prolonged open state risks:
- Bitrot against evolving main branch
- Contributor fatigue (yanggf8 has continued updating since April)
- Blocked dependent features

**Recommendation for maintainers:** Provide explicit timeline for #783 review or identify blockers. For #914, a quick triage label would signal responsiveness to new community input.

---

*Digest generated from github.com/nullclaw/nullclaw data as of 2026-05-14.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-14

## 1. Today's Overview

IronClaw shows **exceptionally high development velocity** with 50 PRs and 22 issues updated in the last 24 hours, indicating intense activity around the "Reborn" architectural overhaul. The project is in a major transition phase: zero new releases published, yet the codebase has advanced through v0.28.1 with crates.io lagging at v0.24.0, creating a significant distribution gap. The dominant theme is **Reborn systematization** — porting all v1 channels (Telegram, Slack, WeChat, WebUI), establishing WASM component boundaries, and building foundational hooks, executor, and security frameworks. Security hardening is actively prioritized with multiple PRs addressing secret store vulnerabilities and unforgeable authorization channels. The contributor pattern shows core team concentration (serrrfirat, zmanian, henrypark133, ilblackdragon, nickpismenkov) with minimal external community engagement (zero 👍 reactions across all items).

---

## 2. Releases

**No new releases.** 

Critical gap: [Issue #3259](https://github.com/nearai/ironclaw/issues/3259) documents that crates.io remains pinned at `0.24.0` (March 31) while GitHub has tagged through `v0.27.0` (April 29) and development is at `v0.28.1`. Downstream consumers cannot access security fixes for wasmtime 28.x CVEs. **This is a blocking issue for external adoption.**

---

## 3. Project Progress

### Merged/Closed PRs (3 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#3559](https://github.com/nearai/ironclaw/pull/3559) | ilblackdragon | Restores chat-driven `tool_install`, fixes double-invoke bug, auto-approve footgun | **Fixes live user-facing bug #3533** (Telegram setup broken in v0.28.1) |
| [#3586](https://github.com/nearai/ironclaw/pull/3586) | henrypark133 | Canonical executor — strategy dispatch + checkpoint contract | Closed; superseded by ws-6a (#3596) |
| [#3594](https://github.com/nearai/ironclaw/pull/3594) | serrrfirat | Reborn crate map documentation | Closed; superseded by #3593/#3595 |

### Key Advances

- **Reborn agent loop skeleton**: Workstream progression (ws-4 through ws-8) landing via PRs [#3596](https://github.com/nearai/ironclaw/pull/3596) (canonical executor), [#3597](https://github.com/nearai/ironclaw/pull/3597) (planned loop driver), [#3598](https://github.com/nearai/ironclaw/pull/3598) (loop integration suite) — foundational infrastructure for next-generation agent execution
- **Hooks framework v1**: [#3573](https://github.com/nearai/ironclaw/pull/3573) by zmanian lands complete with security audit (4 findings) and 8-item integration test suite
- **Telegram v2 live round-trip**: [#3590](https://github.com/nearai/ironclaw/pull/3590) by nickpismenkov achieves verified webhook→reply through Reborn ProductAdapter stack with libSQL ledger + real reqwest egress
- **Security hardening**: [#3592](https://github.com/nearai/ironclaw/pull/3592) by ilblackdragon fixes 4 secret-store findings (H1, H3, M1, M2) with PoC-regression guards

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Comments | Topic | Underlying Need |
|:---|:---|:---|:---|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) | 3 | crates.io publication lag | **Supply chain trust** — downstream needs semver-gated security fixes without git dependencies |
| [#3533](https://github.com/nearai/ironclaw/issues/3533) | 2 | Telegram auto-setup broken in v0.28.1 | **UX friction reduction** — hosted users expect zero-config channel pairing; manual steps are regression from v1 behavior |
| [#2905](https://github.com/nearai/ironclaw/issues/2905) | 2 | Agent file paths in `/home/agent` inaccessible hosted | **Multi-tenancy isolation** — resolved by closing, but pattern shows recurring hosted vs. local environment mismatches |
| [#3459](https://github.com/nearai/ironclaw/issues/3459) | 1 | User-selectable model routes | **Operational flexibility** — devs need escape hatch from opaque "model-profile" abstraction |

### Analysis

The low absolute comment counts (max 3) suggest either: (a) core team operates synchronously outside GitHub, or (b) community is small/insular. The **crates.io gap** is the most externally-visible blocker. **Telegram setup friction** directly impacts user acquisition for hosted deployments.

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR | Details |
|:---|:---|:---|:---|:---|
| **P1** | [#3533](https://github.com/nearai/ironclaw/issues/3533) Telegram v0.28.1 auto-setup fails | **FIXED** | [#3559](https://github.com/nearai/ironclaw/pull/3559) | UI asks users to complete manual steps; tool_install hidden in #2868, double-invoke, auto-approve gate |
| **P1** | [#2905](https://github.com/nearai/ironclaw/issues/2905) Agent saves to `/home/agent` (inaccessible hosted) | **CLOSED** | Unknown | File system path assumption breaks multi-tenant hosted environments |
| **High** | [#3447](https://github.com/nearai/ironclaw/issues/3447) Nightly E2E failed | **OPEN** | None identified | Scheduled run failure on commit `0e3a2c75`; no comments since May 10 — **potential CI reliability concern** |
| **High** | [#3564](https://github.com/nearai/ironclaw/issues/3564) Wallet signing uses host-resident keys (architectural vulnerability) | **OPEN** | None yet | Security design flaw: keys resident on host instead of unforgeable user-auth channel; blocks production wallet features |
| **Medium** | [#3592](https://github.com/nearai/ironclaw/pull/3592) Secret store hardening (H1, H3, M1, M2) | **MERGED** | Self-contained | 4 findings from security review; PoC tests prevent regression |

**Stability assessment**: Active security investment is positive, but **nightly E2E red for 4+ days** without visible response is concerning. The wallet signing architecture issue (#3564) is a fundamental design problem requiring substantial rework.

---

## 6. Feature Requests & Roadmap Signals

### Reborn Architecture (Near-term, high confidence)

| Feature | Tracking | Likelihood in next release |
|:---|:---|:---|
| WASM ProductAdapter runtime | [#3583](https://github.com/nearai/ironclaw/pull/3583), [#3572](https://github.com/nearai/ironclaw/issues/3572) | **Very high** — structural requirement for channel ports |
| First-class loop hooks | [#3573](https://github.com/nearai/ironclaw/pull/3573), [#3523](https://github.com/nearai/ironclaw/issues/3523), [#3524](https://github.com/nearai/ironclaw/issues/3524) | **Very high** — v1 framework landed, roadmap active |
| Channel ports (Telegram, Slack, WeChat, WebUI) | [#3581](https://github.com/nearai/ironclaw/issues/3581)-[#3582](https://github.com/nearai/ironclaw/issues/3582), [#3577](https://github.com/nearai/ironclaw/issues/3577) | **High** — tracked as suggested_P0 |
| Model memory as userland extension | [#3537](https://github.com/nearai/ironclaw/issues/3537) | **Medium** — design issue open, no PR yet |
| Self-authored hooks with monotonic restriction | [#3567](https://github.com/nearai/ironclaw/issues/3567) | **Medium** — depends on hooks framework + wallet auth channel |

### User-Requested (Medium confidence)

| Feature | Tracking | Signal strength |
|:---|:---|:---|
| Log download debugging tool | [#3534](https://github.com/nearai/ironclaw/issues/3534) | Strong — operational necessity for production support |
| User-selectable model routes | [#3459](https://github.com/nearai/ironclaw/issues/3459) | Moderate — closed as "reborn" but need remains |

---

## 7. User Feedback Summary

### Pain Points

| Issue | Source | Impact |
|:---|:---|:---|
| **Crates.io distribution gap** | [#3259](https://github.com/nearai/ironclaw/issues/3259) | Security fixes unreachable; forces git-based dependencies or version pinning with known CVEs |
| **Telegram setup friction** | [#3533](https://github.com/nearai/ironclaw/issues/3533) | Hosted users hit broken onboarding flow; "connect my telegram" fails silently or requires manual intervention |
| **Hosted/local environment divergence** | [#2905](https://github.com/nearai/ironclaw/issues/2905) | File paths, secrets, and capabilities behave differently across deployment modes |
| **Opaque model selection** | [#3459](https://github.com/nearai/ironclaw/issues/3459) | Power users cannot target specific providers/models without internal terminology |

### Satisfaction Indicators

- **Positive**: Rapid bug turnaround (Telegram fix merged same day as reported), active security investment, architectural transparency (detailed Reborn docs, crate maps)
- **Negative**: Zero releases despite 3+ months of development, no crates.io automation, minimal community reaction/engagement metrics

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#3259](https://github.com/nearai/ironclaw/issues/3259) crates.io publication | **39 days** since v0.25.0 tag | **Critical** — supply chain security | Maintainer decision on release cadence/automation; currently blocks downstream CVE mitigation |
| [#1566](https://github.com/nearai/ironclaw/pull/1566) Tiered context summaries | **53 days** open | Moderate — feature drift | Large PR (XL) from external contributor G7CNF; needs review/merge or closure decision |
| [#3447](https://github.com/nearai/ironclaw/issues/3447) Nightly E2E failure | **4 days** red | Moderate — quality signal | Investigation assignment; may indicate flaky test or real regression |
| [#3564](https://github.com/nearai/ironclaw/issues/3564) Wallet signing architecture | 1 day (but fundamental) | **High** — security design | Requires cross-functional design review; blocks production wallet features |

---

*Digest generated from GitHub activity data for nearai/ironclaw on 2026-05-14.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-14

## 1. Today's Overview

LobsterAI shows **exceptionally high development velocity** with 23 PRs processed in 24 hours (22 merged/closed, 1 open) against minimal issue activity (2 active issues, none closed). The project released version **2026.5.12** yesterday, indicating a mature, rapid-release cycle. Notably, **15 "stale" PRs from March 2026 were bulk-closed today** alongside 7 fresh PRs with actual code changes—suggesting either a backlog cleanup initiative or repository maintenance event. The single open PR and two unaddressed bugs (including a severe infinite loop regression) indicate the team prioritizes feature shipping over issue resolution, with community health showing moderate risk from unresolved stability problems.

---

## 2. Releases

### [LobsterAI 2026.5.12](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.12) — Released 2026-05-12

| Aspect | Details |
|--------|---------|
| **Type** | Feature release |
| **Key Changes** | • Memory settings tab UI refactor with Dreaming content display ([#1943](https://github.com/netease-youdao/LobsterAI/pull/1943) by @btc69m979y-dotcom)<br>• General UI polish ([#1946](https://github.com/netease-youdao/LobsterAI/pull/1946) by @fisherdaddy) |
| **Breaking Changes** | None identified |
| **Migration Notes** | N/A — incremental UI improvements |

The release focuses on **memory system UX refinement** and visual polish, suggesting the project is in a stability/ux-optimization phase following earlier feature expansion.

---

## 3. Project Progress

### Active Development (7 fresh PRs merged 2026-05-13)

| PR | Area | Summary | Impact |
|:---|:---|:---|:---|
| [#1969](https://github.com/netease-youdao/LobsterAI/pull/1969) | Cowork/OpenClaw | Context compaction handling with usage indicators, metadata sync, memory flush flows | **Major** — resolves silent failures, improves transparency |
| [#1968](https://github.com/netease-youdao/LobsterAI/pull/1968) | Artifacts | "Open with" system app selection for documents; cross-platform shell integration (macOS NSWorkspace/JXA, Windows Registry, Linux mimeinfo) | **Major** — desktop-native UX breakthrough |
| [#1963](https://github.com/netease-youdao/LobsterAI/pull/1963) | Plugins | Full plugin management system (npm/clawhub/git/local install), schema-driven advanced config UI | **Major** — extensibility infrastructure |
| [#1966](https://github.com/netease-youdao/LobsterAI/pull/1966) | IM/POPO | Smart channel title parsing replacing 12-char hard truncation; 9 unit tests added | **Medium** — reliability fix |
| [#1965](https://github.com/netease-youdao/LobsterAI/pull/1965) | Artifacts/UI | Icon clarity on low-DPI displays; remove hover tooltips from skill list | **Minor** — polish |
| [#1964](https://github.com/netease-youdao/LobsterAI/pull/1964) | DevEx | Show session IDs in dev mode | **Minor** — debugging aid |
| [#1967](https://github.com/netease-youdao/LobsterAI/pull/1967) | Docs/URLs | Remove legacy URLs and documentation | **Minor** — maintenance |

### Stale PR Cleanup (15 PRs from March 2026 closed without merge)

These PRs contained **substantial fixes now lost**:
- **Security**: URL scheme whitelisting ([#877](https://github.com/netease-youdao/LobsterAI/pull/877), [#889](https://github.com/netease-youdao/LobsterAI/pull/889)), IPC channel allowlists ([#890](https://github.com/netease-youdao/LobsterAI/pull/890))
- **Data integrity**: SQLite foreign key enforcement for cascade deletes ([#881](https://github.com/netease-youdao/LobsterAI/pull/881)), SQL row modification counting ([#876](https://github.com/netease-youdao/LobsterAI/pull/876))
- **Stability**: Token refresh race condition fix ([#874](https://github.com/netease-youdao/LobsterAI/pull/874)), duplicate error message prevention ([#878](https://github.com/netease-youdao/LobsterAI/pull/878)), Redux immutability violation ([#892](https://github.com/netease-youdao/LobsterAI/pull/892))
- **Features**: Speech input flow ([#901](https://github.com/netease-youdao/LobsterAI/pull/901)), favorites/bookmarks ([#903](https://github.com/netease-youdao/LobsterAI/pull/903)), message sharing with branding ([#880](https://github.com/netease-youdao/LobsterAI/pull/880))

> **⚠️ Risk Assessment**: Closing unmerged security and stability PRs without evident replacement implementations creates **technical debt exposure**. The token refresh race ([#874](https://github.com/netease-youdao/LobsterAI/pull/874)) and SQLite cascade delete fix ([#881](https://github.com/netease-youdao/LobsterAI/pull/881)) address production bugs; their closure without merge should be verified against main branch status.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) — Infinite NO_REPLY / truncated output | 2 comments, 0 reactions, active since 2026-04-28 | **Critical production bug**: Race condition between task completion signal and model streaming causes empty responses. User @atdow provided logs; root cause identified (premature `complete` event) but **no fix PR linked**. Underlying need: **reliable streaming state machine** |
| [#1971](https://github.com/netease-youdao/LobsterAI/issues/1971) — Scroll failure with large elements (Mermaid) | 0 comments, 0 reactions, reported 2026-05-13 | **Virtual scroll architecture flaw**: Oversized elements (Mermaid diagrams) trigger destroy/render cycles causing infinite re-render loops. @atdow provided precise technical diagnosis. Underlying need: **robust virtual list handling for variable-height content** |

**Community dynamic**: Both active issues from same reporter (@atdow) with **deep technical analysis**, suggesting a power user or contributor doing unpaid QA. Zero maintainer engagement visible on #1971 (same-day report). The project lacks visible community discussion infrastructure—no Discord/forum links, minimal issue interaction.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? |
|:---|:---|:---|:---|
| **🔴 Critical** | [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849): Infinite NO_REPLY / output truncation — streaming race condition | Open since 2026-04-28 | **NO** — despite clear root cause analysis |
| **🔴 Critical** | [#1971](https://github.com/netease-youdao/LobsterAI/issues/1971): Scroll lock with Mermaid/virtual scroll infinite re-render | Open, reported 2026-05-13 | **NO** — fresh report |
| **🟡 High** | Stale PR [#874](https://github.com/netease-youdao/LobsterAI/pull/874): Token refresh race causing "0 points" display | Closed unmerged | **UNCLEAR** — verify if fixed elsewhere |
| **🟡 High** | Stale PR [#881](https://github.com/netease-youdao/LobsterAI/pull/881): SQLite FK disabled → database bloat from orphaned messages | Closed unmerged | **UNCLEAR** |
| **🟢 Medium** | Stale PR [#878](https://github.com/netease-youdao/LobsterAI/pull/878): Duplicate error messages on continueSession failure | Closed unmerged | **UNCLEAR** |

**Stability assessment**: **Declining**. Two critical UI/UX bugs unaddressed with clear technical diagnoses. The March stale PR cleanup removed multiple verified fixes without transparent rationale. The virtual scroll bug (#1971) is particularly concerning as it affects core conversation navigation.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version |
|:---|:---|:---|
| **Plugin ecosystem launch** | [#1963](https://github.com/netease-youdao/LobsterAI/pull/1963) merged — full plugin management with schema-driven config | **High** — infrastructure complete, likely 2026.5.x |
| **Desktop OS integration deepening** | [#1968](https://github.com/netease-youdao/LobsterAI/pull/1968) system app enumeration; cross-platform shell APIs | **High** — pattern of native desktop behavior |
| **Cowork/enterprise collaboration maturation** | [#1969](https://github.com/netease-youdao/LobsterAI/pull/1969) context compaction transparency; [#880](https://github.com/netease-youdao/LobsterAI/pull/880) message sharing (stale) | **Medium-High** — enterprise feature focus |
| **Speech input** | [#901](https://github.com/netease-youdao/LobsterAI/pull/901) stale, but complete implementation | **Uncertain** — may resurface or be replaced |
| **Favorites/bookmarks for conversations** | [#903](https://github.com/netease-youdao/LobsterAI/pull/903) stale with full implementation | **Uncertain** — feature complete but rejected |

**Roadmap inference**: The project is **pivoting toward enterprise/team collaboration** (Cowork module) with plugin extensibility as the next growth vector. Consumer features (speech, favorites) appear deprioritized despite implementation completion.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Severity |
|:---|:---|:---|
| **Response reliability** | [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849): "追问时会出现无限NO_REPLY或者输出几个文字就直接不输出" | Severe — breaks core conversational flow |
| **UI navigation failure** | [#1971](https://github.com/netease-youdao/LobsterAI/issues/1971): Cannot scroll conversations with diagrams | Severe — accessibility blocker |
| **Context transparency** | Addressed by [#1969](https://github.com/netease-youdao/LobsterAI/pull/1969) — users previously couldn't see when context was compacted | Mitigated |
| **Plugin discoverability** | [#1963](https://github.com/netease-youdao/LobsterAI/pull/1963) suggests demand for extension ecosystem | Emerging |

**User profile**: Technical users (developers, enterprise teams) using Mermaid diagrams, long conversations, and multi-turn reasoning. The POPO integration (#1966) indicates NetEase internal deployment. Users are **sophisticated enough to diagnose bugs** but **frustrated by lack of responsive fixes**.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) Infinite NO_REPLY | **16 days** | **Critical** — core functionality broken, clear diagnosis provided | Assign developer; streaming state machine fix |
| [#1971](https://github.com/netease-youdao/LobsterAI/issues/1971) Scroll lock | **1 day** | **Critical** — fresh but severe UX regression | Acknowledge; virtual scroll height stabilization |
| Stale security PRs [#877](https://github.com/netease-youdao/LobsterAI/pull/877), [#889](https://github.com/netease-youdao/LobsterAI/pull/889), [#890](https://github.com/netease-youdao/LobsterAI/pull/890) | ~7 weeks | **High** — security surface exposed if not reimplemented | Verify main branch status; re-open or reimplement |
| Stale data integrity PR [#881](https://github.com/netease-youdao/LobsterAI/pull/881) | ~7 weeks | **High** — database bloat, potential data inconsistency | Verify cascade delete behavior in production |

**Maintainer attention deficit**: The 15 stale PR bulk closure without merge review, combined with two critical bugs lacking assigned fixes, suggests **resource constraints or internal roadmap pressure** diverting attention from community contributions and reported issues.

---

*Digest generated from GitHub activity 2026-05-13. All links reference https://github.com/netease-youdao/LobsterAI.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-14

## 1. Today's Overview

Moltis experienced minimal activity in the past 24 hours, with only a single issue update and no pull request or release activity. The project appears to be in a stable maintenance phase rather than active feature development. The sole visible activity—a UI regression bug in the chat interface—suggests ongoing polish work is needed but lacks community traction for resolution. With zero merged PRs and no maintainer or contributor engagement visible today, project velocity remains low. Overall health indicators point to a mature codebase with limited but steady user reporting.

---

## 2. Releases

*No new releases published.*

---

## 3. Project Progress

*No pull requests merged, closed, or updated in the last 24 hours.*

No features advanced or fixes shipped today. Development appears paused pending contributor or maintainer availability.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [#994 chat has horizontal scrolling again](https://github.com/moltis-org/moltis/issues/994) | 0 comments, 0 reactions | **Underlying need:** UI/UX polish and regression prevention for chat interface. The "again" in the title indicates a recurring layout bug, suggesting inadequate CSS containment or responsive design testing. Users expect reliable multi-device chat rendering without manual scrolling. |

No other community discussions active today.

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR | Notes |
|----------|-------|--------|-------|
| **Medium** | [#994 [Bug]: chat has horizontal scrolling again](https://github.com/moltis-org/moltis/issues/994) | None open | Recurring regression; affects usability on narrow viewports. No maintainer acknowledgment yet. |

**Total bugs today:** 1 (new/updated)  
**Critical/crash bugs:** 0

---

## 6. Feature Requests & Roadmap Signals

*No feature requests or roadmap discussions active today.*

No signals for upcoming version direction. Project appears focused on maintenance over expansion.

---

## 7. User Feedback Summary

| Pain Point | Source | Severity |
|------------|--------|----------|
| Chat interface horizontal scrolling regression | [#994](https://github.com/moltis-org/moltis/issues/994) | Moderate — impacts readability, suggests fragile frontend layout |

**Satisfaction indicator:** Low engagement (zero reactions/comments) may indicate either small user base or users accustomed to workarounds. The reporter's thorough preflight checklist completion shows good faith effort, but lack of community echo suggests limited visibility or priority.

---

## 8. Backlog Watch

| Issue | Age | Risk | Needs |
|-------|-----|------|-------|
| [#994 chat has horizontal scrolling again](https://github.com/moltis-org/moltis/issues/994) | 1 day | **Moderate** — recurring bug class; if unaddressed, may indicate deeper frontend debt | Maintainer triage, CSS/layout audit, possibly visual regression tests |

**Broader concern:** With zero PR activity and only one recent issue, the project may benefit from maintainer visibility on responsiveness to keep contributor pipeline healthy. No stale issues flagged today, but low overall volume warrants monitoring for maintainer bandwidth.

---

*Digest generated from github.com/moltis-org/moltis data for 2026-05-14.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-14

## 1. Today's Overview

CoPaw (QwenPaw) shows **very high development velocity** with 50 PRs and 30 issues updated in the last 24 hours, indicating an active release cycle around the v1.1.7-beta.2 milestone. The project is in a **stabilization phase with significant feature expansion** — 18 of 30 issues were closed, but 12 remain open with several critical bugs unaddressed. A single contributor (`aqilaziz`) authored 12 of the top 20 PRs, suggesting either a core maintainer push or a coordinated sprint. The community is growing internationally, with Indonesian language support added and localization efforts expanding. However, **stability concerns persist** around MCP streaming, session concurrency, and browser management that could impact production deployments.

---

## 2. Releases

### [v1.1.7-beta.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.7-beta.2)

| Aspect | Details |
|--------|---------|
| **Type** | Beta pre-release |
| **Focus** | Plugin extensibility, reliability fixes |

**Changes:**
- **feat(plugins):** Enable registration of FastAPI `APIRouter` instances through plugin system — allows plugins to expose native FastAPI routes rather than wrapping all endpoints through QwenPaw's internal API ([PR #4255](https://github.com/agentscope-ai/QwenPaw/pull/4255))
- **feat:** Add timeout for keyring operations — prevents hanging on credential store access ([PR #4263](https://github.com/agentscope-ai/QwenPaw/pull/4263))
- **fix(console):** TokenUsage display correction ([commit by @zha](https://github.com/agentscope-ai/QwenPaw/commits))

**Breaking Changes / Migration:** None documented; beta channel users should note plugin API changes for custom route registration.

---

## 3. Project Progress

### Merged/Closed PRs (21 total; notable items)

| PR | Author | Summary | Significance |
|----|--------|---------|------------|
| [#4283](https://github.com/agentscope-ai/QwenPaw/pull/4283) | xieyxclack | Version bump to 1.1.7b2 | Release engineering |
| [#4210](https://github.com/agentscope-ai/QwenPaw/pull/4210) | lalaliat | **Inbox + Cron job overhaul** — one-time jobs, fixed-repeat jobs, "run until" scheduling | Major feature; closes [#4029](https://github.com/agentscope-ai/QwenPaw/issues/4029) |

### Active Development (29 open PRs)

| PR | Author | Feature Area | Status |
|----|--------|--------------|--------|
| [#4290](https://github.com/agentscope-ai/QwenPaw/pull/4290) | aqilaziz | **Real-time context usage display in chat UI** | Implements [#4284](https://github.com/agentscope-ai/QwenPaw/issues/4284) |
| [#4282](https://github.com/agentscope-ai/QwenPaw/pull/4282) | Leirunlin | **`/make-skill` command** — turn any session into reusable skill | New developer-facing feature |
| [#4285](https://github.com/agentscope-ai/QwenPaw/pull/4285) | yantianqi1 | **Full mobile responsive console UI** | First-time contributor; major UX improvement |
| [#4295](https://github.com/agentscope-ai/QwenPaw/pull/4295) | aqilaziz | Custom HTTP headers for providers | Enterprise/self-hosted compatibility |
| [#4291](https://github.com/agentscope-ai/QwenPaw/pull/4291) | aqilaziz | Custom TLS verification for MCP | Security/enterprise networks |
| [#4292](https://github.com/agentscope-ai/QwenPaw/pull/4292) | aqilaziz | Configurable MCP timeouts | Reliability |
| [#4287](https://github.com/agentscope-ai/QwenPaw/pull/4287) | aqilaziz | Indonesian (Bahasa Indonesia) language support | International expansion |

**Key Advances:** Console UX (mobile, file previews, context usage), MCP robustness (timeouts, TLS, error handling), cron scheduling maturity, and plugin architecture flexibility.

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Rank | Issue | Comments | Category | Underlying Need |
|------|-------|----------|----------|---------------|
| 1 | [#2642](https://github.com/agentscope-ai/QwenPaw/issues/2642) — PPT generation crashes bot permanently (DingTalk/QQ/WeChat) | 15 | **CLOSED** Bug | **Stability in multi-channel deployments** — file generation workflows corrupt agent state persistently |
| 2 | [#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159) — DashScope config ignored, empty api_key causes 401 | 8 | **CLOSED** Invalid | **Configuration clarity** — provider config discovery vs. runtime resolution confusion |
| 3 | [#3932](https://github.com/agentscope-ai/QwenPaw/issues/3932) — `read_file_safe` MemoryError on 1GB read | 6 | **CLOSED** Bug | **Resource safety on constrained systems** — streaming/large file handling |
| 4 | [#4227](https://github.com/agentscope-ai/QwenPaw/issues/4227) — **MCP stream_http 401 blocks until timeout** | 5 | **OPEN** Critical Bug | **MCP error handling robustness** — HTTP error code propagation in streaming |
| 5 | [#4244](https://github.com/agentscope-ai/QwenPaw/issues/4244) — `shell_evasion_checks.newlines=True` silently blocks multiline commands | 5 | **OPEN** Bug | **Security vs. usability balance** — default security config breaks legitimate agent behavior |

**Analysis:** The community is heavily focused on **production reliability** — crashes that corrupt state, silent failures, and resource exhaustion. The high comment counts on closed issues suggest responsive maintainers, but open critical bugs indicate some problems require deeper architectural fixes.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? | Risk |
|----------|-------|-------------|---------|------|
| 🔴 **Critical** | [#4227](https://github.com/agentscope-ai/QwenPaw/issues/4227) | MCP `stream_http` hangs indefinitely on 401 (and likely other non-404 errors) | **Yes: [#4281](https://github.com/agentscope-ai/QwenPaw/pull/4281)** | Production MCP integrations unusable with auth failures |
| 🔴 **Critical** | [#4265](https://github.com/agentscope-ai/QwenPaw/issues/4265) | Reading chat logs causes infinite compression loop, OOM, system lockup | No | **Data loss, system denial-of-service** |
| 🟡 **High** | [#4244](https://github.com/agentscope-ai/QwenPaw/issues/4244) | Default `shell_evasion_checks.newlines=True` silently blocks multiline commands, corrupts agent thought chain | No | Agent behavior unpredictability; security bypass confusion |
| 🟡 **High** | [#4232](https://github.com/agentscope-ai/QwenPaw/issues/4232) | `SafeJSONSession` race condition — concurrent writes clobber session state | No | Data integrity in multi-turn/async scenarios |
| 🟡 **High** | [#4257](https://github.com/agentscope-ai/QwenPaw/issues/4257) | Browser management: premature idle timeouts, no crash recovery, zombie processes | No | Resource leaks, automation unreliability |
| 🟡 **High** | [#4260](https://github.com/agentscope-ai/QwenPaw/issues/4260) | Console file send: blank titles, undersized images | **Yes: [#4288](https://github.com/agentscope-ai/QwenPaw/pull/4288)** | UX degradation for file-heavy workflows |
| 🟢 **Medium** | [#2258](https://github.com/agentscope-ai/QwenPaw/issues/2258) | Agent "thinks" then silently ends conversation (CoPaw 0.2.0) | No | Stale but persistent; may affect migration users |
| 🟢 **Medium** | [#3528](https://github.com/agentscope-ai/QwenPaw/issues/3528) | `<br>` in Markdown tables causes unwanted line breaks | No | Rendering polish |

**Stability Assessment:** Two critical bugs threaten production use — one with an active fix PR ([#4281](https://github.com/agentscope-ai/QwenPaw/pull/4281)), one ([#4265](https://github.com/agentscope-ai/QwenPaw/issues/4265)) unaddressed and potentially catastrophic. The MCP streaming patch is a **temporary compatibility fix** for SDK limitations, suggesting technical debt.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version | Rationale |
|-------|---------|---------------------------|-----------|
| [#4284](https://github.com/agentscope-ai/QwenPaw/issues/4284) | Real-time context/token usage display in chat | **High** — PR [#4290](https://github.com/agentscope-ai/QwenPaw/pull/4290) open | Implementation in progress; aligns with cost transparency trend |
| [#4259](https://github.com/agentscope-ai/QwenPaw/issues/4259) | **Preset Agent templates** for non-technical users | Medium | Strong user need; requires product design, not just engineering |
| [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) | In-chat observability for running shell commands (kill/extend timeout) | Medium | Complex UX; builds on existing approval-card infrastructure |
| [#4029](https://github.com/agentscope-ai/QwenPaw/issues/4029) | One-shot cron jobs (`--at`) | **Shipped** in [#4210](https://github.com/agentscope-ai/QwenPaw/pull/4210) | Confirmed roadmap item delivered |

**Emerging Themes:** 
- **Democratization** (#4259): Reducing technical barrier to multi-agent setup
- **Observability** (#4284, #4237): Users need visibility into opaque agent operations
- **Enterprise readiness** (#4295 custom headers, #4291 TLS verify): Self-hosted and regulated environment support

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Intensity |
|-------|----------|-----------|
| **Silent failures** | [#4244](https://github.com/agentscope-ai/QwenPaw/issues/4244) commands blocked without notice; [#2258](https://github.com/agentscope-ai/QwenPaw/issues/2258) agent stops mid-thought | High — breaks trust |
| **Configuration confusion** | [#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159) DashScope vs. OpenAI backend selection; [#4183](https://github.com/agentscope-ai/QwenPaw/issues/4183) model name prefixing (`cpa/gpt-5.5`) | High — onboarding friction |
| **Resource exhaustion** | [#4265](https://github.com/agentscope-ai/QwenPaw/issues/4265) OOM from log reading; [#3932](https://github.com/agentscope-ai/QwenPaw/issues/3932) 1GB file read | Critical — production risk |
| **Channel integration fragility** | [#2642](https://github.com/agentscope-ai/QwenPaw/issues/2642) DingTalk/WeChat/QQ crash; [#4056](https://github.com/agentscope-ai/QwenPaw/issues/4056) WeChat message loss | High — business use cases |
| **Browser automation unreliability** | [#4257](https://github.com/agentscope-ai/QwenPaw/issues/4257) timeouts, crashes, zombies | Medium — affects advanced workflows |

### Positive Signals
- **Responsive maintainers**: 18/30 issues closed, many with detailed investigation
- **Feature delivery**: Cron overhaul, mobile UI, internationalization
- **Extensibility**: Plugin FastAPI routes, custom provider headers/TLS

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Problem | Action Needed |
|-------|-----|---------|---------------|
| [#2258](https://github.com/agentscope-ai/QwenPaw/issues/2258) | ~50 days | Agent silent failure (CoPaw 0.2.0) | Verify if reproducible in 1.x; close or prioritize |
| [#3528](https://github.com/agentscope-ai/QwenPaw/issues/3528) | ~27 days | Markdown `<br>` rendering | Frontend triage; likely CSS fix |
| [#4265](https://github.com/agentscope-ai/QwenPaw/issues/4265) | **1 day** | Critical OOM from log reading | **Immediate response needed** — data loss risk |
| [#4264](https://github.com/agentscope-ai/QwenPaw/issues/4264) | 1 day | Auto-regenerating QA agent on restart | Product decision on onboarding flow |

### PRs Stalled or Under Review

| PR | Status | Hold-up |
|----|--------|---------|
| [#4224](https://github.com/agentscope-ai/QwenPaw/pull/4224) | "Under Review" | Memory index refresh after auto-summary; first-time contributor |
| [#4285](https://github.com/agentscope-ai/QwenPaw/pull/4285) | Open | Mobile responsive UI — significant contribution, needs review bandwidth |

**Recommendation:** The project would benefit from a **critical bug triage process** — [#4265](https://github.com/agentscope-ai/QwenPaw/issues/4265) in particular needs immediate acknowledgment given its system-crippling impact. The `aqilaziz` PR sprint is impressive but risks bottlenecking review capacity for external contributors like `yantianqi1`.

---

*Digest generated from GitHub activity 2026-05-13 to 2026-05-14. All links reference `agentscope-ai/QwenPaw` repository.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-05-14

## 1. Today's Overview

ZeptoClaw showed **minimal but focused activity** on 2026-05-13, with four security-related issues closed and zero pull requests or releases. All activity centered on a coordinated security documentation and audit push rather than feature development or bug fixes. The project appears to be in a **maintenance and hardening phase**, with contributors prioritizing vulnerability tracking and control-plane security over new functionality. No open issues or PRs remain, indicating either efficient triage or potentially low community engagement. The absence of releases and merged code changes suggests this was a **documentation and process-oriented day** rather than a shipping day.

---

## 2. Releases

**No new releases.** The project has no published releases to date.

---

## 3. Project Progress

**No merged or closed pull requests today.** All four closed items were issues used as **tracking tickets** for security workstreams:

| Issue | Purpose | Outcome |
|-------|---------|---------|
| [#587](https://github.com/qhkm/zeptoclaw/issues/587) | Initiated deep AI-vulnerability audit of web/control-plane surfaces | Closed — audit framework established |
| [#588](https://github.com/qhkm/zeptoclaw/issues/588) | Continued verification pass, focused on unauthenticated HTTP MCP → shell execution vector | Closed — verification completed |
| [#589](https://github.com/qhkm/zeptoclaw/issues/589) | Collected published GitHub Security Advisories and CVE metadata | Closed — advisory corpus assembled |
| [#590](https://github.com/qhkm/zeptoclaw/issues/590) | Extracted local git patches for published advisories | Closed — patch archive created |

**Note:** These issues functioned as **work logs** rather than traditional bug reports. The actual security findings and fixes (if any) are not visible in this data—only the tracking artifacts were closed.

---

## 4. Community Hot Topics

With only four issues (all closed, 1 comment each, 0 reactions), there are **no genuinely "hot" topics** by engagement metrics. The most structurally significant items:

| Issue | Link | Underlying Need |
|-------|------|---------------|
| #588 — Continued deep AI-vulns verification | [qhkm/zeptoclaw#588](https://github.com/qhkm/zeptoclaw/issues/588) | **Supply-chain security assurance**: The focus on "unauthenticated HTTP MCP → shell exec" suggests concern about ZeptoClaw's Model Context Protocol (MCP) implementation being exploitable as a remote attack vector. This reflects broader industry anxiety about AI agents executing arbitrary code. |
| #587 — Deep AI-vulns audit | [qhkm/zeptoclaw#587](https://github.com/qhkm/zeptoclaw/issues/587) | **Runtime hardening**: Docker/Compose and Linux runtime verification indicates deployment-target security is a priority, likely for enterprise/self-hosted users. |

**Pattern:** The rapid same-day creation and closure of #587→#588 and #589→#590 suggests **pre-planned work packages** executed in sequence, not organic community discussion.

---

## 5. Bugs & Stability

**No bugs, crashes, or regressions reported today.** The security audit issues (#587-588) investigated potential vulnerabilities but did not document confirmed exploitable bugs in the public tracker. The "accepted-only final packaging" language in #587 implies findings may be embargoed or handled through private security channels.

| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| N/A | No reported bugs | — | — |

**Observation:** The absence of public bug reports is notable for an AI agent project. Either ZeptoClaw has exceptional stability, limited production usage, or issues are routed through non-public channels.

---

## 6. Feature Requests & Roadmap Signals

**No user-facing feature requests today.** However, the security work reveals implicit roadmap priorities:

| Signal | Likely Near-Term Priority |
|--------|--------------------------|
| CVE advisory tracking infrastructure (#589-590) | **Security transparency program** — publishing and maintaining official vulnerability records |
| MCP security hardening (#588) | **Authentication/authorization layer** for model context protocol endpoints |
| Docker/runtime verification (#587-588) | **Production deployment readiness** — hardened container images, possibly enterprise support |

**Prediction:** The next functional release may include:
- Authentication requirements for MCP endpoints
- Security-hardened Docker configurations
- Published security policy/response process

---

## 7. User Feedback Summary

**No direct user feedback captured today.** All issues were contributor-initiated tracking items. Inferred stakeholder concerns:

| Stakeholder | Inferred Pain Point/Need |
|-------------|------------------------|
| Security-conscious deployers | Assurance that AI agent control plane cannot be hijacked for remote code execution |
| Compliance-oriented users | Documented CVE history and patch availability for audit trails |
| Enterprise evaluators | Runtime verification artifacts proving deployment safety |

**Satisfaction indicator:** Neutral-to-unknown. No complaints, but also no user celebration or adoption signals.

---

## 8. Backlog Watch

**Critical observation:** With **0 open issues and 0 open PRs**, ZeptoClaw has no visible backlog requiring maintainer attention. This is atypical for an active open-source project and warrants monitoring:

| Concern | Implication |
|---------|-------------|
| No open issues | May indicate healthy triage, or **low community participation** |
| No open PRs | May indicate controlled development, or **barriers to external contribution** |
| All issues same-day closed | Suggests **internal team execution** rather than community-driven development |

**Recommendation for observers:** Watch for whether this zero-backlog state persists. Sustained absence of open issues/PRs in an AI agent project may signal:
- Closed development model (primary work in private repos)
- Early-stage project with limited adoption
- Highly efficient but potentially insular maintainer team

---

## Project Health Assessment

| Metric | Status |
|--------|--------|
| Code velocity | ⚠️ **Stagnant** — no merged PRs |
| Security posture | ✅ **Active investment** — structured audit program |
| Community engagement | ⚠️ **Low/unclear** — no external participation visible |
| Release cadence | ⚠️ **None observed** — no releases ever published |
| Issue hygiene | ✅ **Clean** — zero open issues |

**Overall:** ZeptoClaw appears to be in a **security-hardening sprint** with disciplined issue management but limited observable community traction. The focus on MCP security and CVE infrastructure suggests preparation for broader adoption or enterprise engagement, though the lack of releases and external contributions raises questions about current production usage.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-14

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 84 tracked items updated in the last 24 hours (34 issues, 50 PRs), indicating an active pre-release sprint. The project is in a **stabilization phase for v0.7.6** while simultaneously integrating the massive v0.8.0 schema migration. No new releases were cut today, suggesting maintainers are accumulating fixes before tagging. The community is particularly engaged around **skills infrastructure**, **provider reliability**, and **security hardening** — with several long-standing gaps now receiving implementation attention.

---

## 2. Releases

**None today.**

The v0.7.6 release remains pending, gated by skills UX completion (#6253) and Matrix smoke tests (#6576). The draft v0.8.0 integration branch (#6398) continues active development but is explicitly marked **"DO NOT APPROVE/MERGE"**.

---

## 3. Project Progress

### Merged/Closed PRs (16 total, notable items):

| PR | Author | Description | Impact |
|---|---|---|---|
| [#6597](https://github.com/zeroclaw-labs/zeroclaw/pull/6597) | yijunyu | Fixed `RouterProvider::supports_vision()` to reflect default provider, not `.any()` | Closes [#6589](https://github.com/zeroclaw-labs/zeroclaw/issues/6589); fixes silent multimodal bypass |
| [#6591](https://github.com/zeroclaw-labs/zeroclaw/pull/6591) | Alix-007 | Omit Anthropic `temperature` for Opus models | Closes [#6147](https://github.com/zeroclaw-labs/zeroclaw/issues/6147); provider compatibility |
| [#6605](https://github.com/zeroclaw-labs/zeroclaw/pull/6605) | Alix-007 | Load workspace profiles before tool registration | Closes [#6419](https://github.com/zeroclaw-labs/zeroclaw/issues/6419); runtime startup fix |
| [#6592](https://github.com/zeroclaw-labs/zeroclaw/pull/6592) | Alix-007 | Gate router vision on default provider | Closes [#6589](https://github.com/zeroclaw-labs/zeroclaw/issues/6589); regression coverage |

### Key Feature Advancement:

**Skills infrastructure maturation**: PR [#6594](https://github.com/zeroclaw-labs/zeroclaw/pull/6594) — the massive XL-sized "background review fork + skill_manage tool" — is the most significant open PR. It finally wires up the previously-shipped `SkillImprover` (#4619) with actual runtime invocation, adopting the Hermes-agent pattern for post-turn skill self-improvement. Two follow-up bugs were filed today indicating active review: [#6644](https://github.com/zeroclaw-labs/zeroclaw/issues/6644) (parser misses tool receipts) and [#6645](https://github.com/zeroclaw-labs/zeroclaw/issues/6645) (`manifest.toml` vs `SKILL.toml` inconsistency).

---

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|---|---|---|
| [#6594](https://github.com/zeroclaw-labs/zeroclaw/pull/6594) — Skills review fork | Most active PR (XL, high risk) | **Autonomous skill evolution**: Users want ZeroClaw to self-improve its capabilities without manual plugin updates; this closes a 2-month gap since #4619 shipped inert |
| [#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140) — Hybrid skills + WASM tools | 2 comments, high risk | **Plugin ecosystem extensibility**: Demand for performance-critical tools (WASM) combined with declarative skill definitions; positions ZeroClaw against OpenClaw's multi-agent model |
| [#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) — Stronger pairing codes | 1 comment, P1 | **Security hardening**: 6-digit numeric codes insufficient for production deployments; community wants configurable entropy |
| [#6604](https://github.com/zeroclaw-labs/zeroclaw/issues/6604) — Multi-agent support | 1 comment, marked duplicate | **Orchestration at scale**: Explicit comparison to OpenClaw; users need role-based collaboration for team workflows |

**Analysis**: The community is pulling ZeroClaw in two directions simultaneously — **deeper autonomy** (self-improving skills, multi-agent) and **production hardening** (security, observability, provider reliability). The maintainers appear focused on the former for v0.8.0 while patching the latter for v0.7.6.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Risk Area |
|---|---|---|---|---|
| **S1 — Workflow blocked** | [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) — Onboarding prompts wrong API key for Codex | Open | No | Onboarding/UX |
| **S1 — Workflow blocked** | [#6410](https://github.com/zeroclaw-labs/zeroclaw/issues/6410) — `google_workspace` tool fails on Windows | **Closed** | [#6605](https://github.com/zeroclaw-labs/zeroclaw/pull/6605) related | Tooling/Windows |
| **S1 — Workflow blocked** | [#6514](https://github.com/zeroclaw-labs/zeroclaw/issues/6514) — WebSocket turn spins after disconnect | **Closed** | Yes (merged) | Gateway/runtime |
| **S1 — Workflow blocked** | [#6551](https://github.com/zeroclaw-labs/zeroclaw/issues/6551) — Non-leading system messages break OpenAI-compatible providers | **Closed** | Yes (merged) | Provider compatibility |
| **S2 — Degraded** | [#6643](https://github.com/zeroclaw-labs/zeroclaw/issues/6643) — GLM-5.1 thoughts merge into final message | Open | No | Provider/GLM |
| **S2 — Degraded** | [#6627](https://github.com/zeroclaw-labs/zeroclaw/issues/6627) — Stale tool-result images replay across turns | Open | [#6629](https://github.com/zeroclaw-labs/zeroclaw/pull/6629) | Provider/multimodal |
| **S2 — Degraded** | [#6634](https://github.com/zeroclaw-labs/zeroclaw/issues/6634) — Cron webhook callbacks drop `thread_id` | Open | [#6635](https://github.com/zeroclaw-labs/zeroclaw/pull/6635) | Channel/cron |
| **S2 — Degraded** | [#6632](https://github.com/zeroclaw-labs/zeroclaw/issues/6632) — Manual cron persists delivery failures as OK | Open | No | Cron/runtime |

**Regressions**: The GLM-5.1 issue [#6643](https://github.com/zeroclaw-labs/zeroclaw/issues/6643) reopens a previously-closed problem ([#5285](https://github.com/zeroclaw-labs/zeroclaw/issues/5285)), suggesting provider-specific parsing remains fragile.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in v0.8.0 | Signal Strength |
|---|---|---|---|
| **Schema v3 migration** | [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) | Confirmed | Integration branch active |
| **OTel observability enrichment** | [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641), [#6642](https://github.com/zeroclaw-labs/zeroclaw/issues/6642), [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) | High | alexandme has working downstream implementation; maintainer-encouraged |
| **Turn-level trace correlation** | [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) | High | Natural follow-up to #6009 |
| **Hybrid WASM + markdown skills** | [#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140) | Medium | Explicitly "after markdown-only skills land" |
| **Multi-agent orchestration** | [#6604](https://github.com/zeroclaw-labs/zeroclaw/issues/6604) | Low-Medium | Marked duplicate; may be tracked elsewhere |
| **Configurable pairing code strength** | [#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) | Medium | P1, security-focused, discrete implementation |
| **Image handling without vision provider** | [#6574](https://github.com/zeroclaw-labs/zeroclaw/issues/6574) | Medium | UX degradation, clear problem statement |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|---|---|---|
| **Windows as second-class citizen** | [#6410](https://github.com/zeroclaw-labs/zeroclaw/issues/6410) (`.cmd` resolution), [#6419](https://github.com/zeroclaw-labs/zeroclaw/issues/6419) (profile loading) | High — multiple S1/S2 bugs |
| **Provider compatibility whack-a-mole** | [#6520](https://github.com/zeroclaw-labs/zeroclaw/issues/6520) (Gemini CLI args), [#6551](https://github.com/zeroclaw-labs/zeroclaw/issues/6551) (system message ordering), [#6643](https://github.com/zeroclaw-labs/zeroclaw/issues/6643) (GLM-5.1 parsing) | High — each provider needs bespoke fixes |
| **Configuration schema churn** | [#6309](https://github.com/zeroclaw-labs/zeroclaw/issues/6309) (schema v2 stomping), [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) (v3 migration) | Medium — migration fatigue |
| **Security defaults too permissive** | [#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) (6-digit codes), [#6528](https://github.com/zeroclaw-labs/zeroclaw/issues/6528) (system CA trust) | Medium — production readiness gap |

### Positive Signals

- **Skills system engagement**: Users actively requesting [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) improvements and reporting edge cases in new tooling
- **Observability contributions**: External contributor (alexandme) offering upstream of production OTel enhancements
- **Channel diversity**: Active work on Matrix, Discord, Signal, WhatsApp, Nextcloud Talk — ecosystem breadth maintained

---

## 8. Backlog Watch

| Item | Age | Blocker | Action Needed |
|---|---|---|---|
| [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) — OTel tool spans | ~3 weeks | `needs-author-action` | alexandme to address review; #6641/#6642 filed as follow-ups suggest maintainer interest |
| [#6228](https://github.com/zeroclaw-labs/zeroclaw/pull/6228) — Sanitize session keys | ~2 weeks | `needs-author-action` | Author (thezillo) needs to respond; Slack data loss on every restart |
| [#6297](https://github.com/zeroclaw-labs/zeroclaw/pull/6297) — Poll/interactive events | ~2 weeks | Open, XL | Large cross-channel PR; may need staged review |
| [#6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140) — Hybrid WASM skills | ~3 weeks | Open, P2 | Depends on markdown skills landing; no explicit blocker but no assignee |
| [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) — Skills v0.7.6 tracker | ~2 weeks | Open, P1 | Release-gating; needs coordination with #6594 merge |

**Maintainer attention needed**: The `needs-author-action` label on multiple PRs suggests either contributor bandwidth constraints or unclear review expectations. The v0.8.0 integration branch (#6398) touching 40+ components risks merge conflicts if not landed soon.

---

*Digest generated from 84 items updated 2026-05-13 to 2026-05-14. All links: https://github.com/zeroclaw-labs/zeroclaw*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*