# OpenClaw Ecosystem Digest 2026-05-18

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-18 00:23 UTC

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

# OpenClaw Project Digest — 2026-05-18

## 1. Today's Overview

OpenClaw shows **extremely high community activity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a vibrant but potentially strained development ecosystem. The project maintains an aggressive release cadence with two beta versions shipped on 2026-05-16. However, the **open-to-closed ratio is concerning**: 481 open issues vs. 19 closed, and 448 open PRs vs. 52 merged/closed, suggesting a growing backlog and potential maintainer bandwidth constraints. Security and session-state stability dominate the discourse, with multiple P1 bugs around message loss, auth provider regressions, and cron/heartbeat reliability. The project appears to be in a **mature feature-expansion phase with accumulating technical debt** in core infrastructure.

---

## 2. Releases

### v2026.5.16-beta.5
- **Mac app**: Complete Settings pages redesign with consistent card layouts, cached navigation, cleaner permissions/voice/skills/cron/exec/debug panes, and improved spacing around native sidebar
- **Skills**: Renamed repo-local Codex closeout review skill and helper to `autoreview`

### v2026.5.16-beta.4
- **Security/audit**: Added `security.audit.suppressions` for intentionally accepted audit findings — suppressed matches excluded from active summary but preserved in JSON output with active suppression notice ([#76949](https://github.com/openclaw/openclaw/issues/76949)) — *Thanks @100menotu001*
- **Agents/subagents**: Label delegation improvements

**Migration Notes**: Beta.4's audit suppression feature requires config update for users previously relying on custom audit filtering. No breaking changes reported.

---

## 3. Project Progress

### Recently Merged/Closed PRs

| PR | Status | Summary | Impact |
|:---|:---|:---|:---|
| [#83325](https://github.com/openclaw/openclaw/pull/83325) | **CLOSED** | Seed Control UI origins for bind aliases; resolve legacy gateway bind host aliases before allowed-origin seed decisions | Security, crash-loop prevention |
| [#83326](https://github.com/openclaw/openclaw/pull/83326) | OPEN | Suppress auto source reply on explicit announce delivery — fixes P1 message duplication on cron-driven Discord posts | Message-loss fix |
| [#81243](https://github.com/openclaw/openclaw/pull/81243) | OPEN | Discord `fetch` action for single message retrieval by ID/URL | Feature enhancement |
| [#45887](https://github.com/openclaw/openclaw/pull/45887) | OPEN | Restore health status to overview dashboard (regression from dashboard-v2 refactor) | UI reliability |
| [#45783](https://github.com/openclaw/openclaw/pull/45783) | OPEN | **Privacy detection/replacement filter for LLM traffic** — scrubs secrets, credentials, PII before leaving gateway | Major security enhancement |
| [#45290](https://github.com/openclaw/openclaw/pull/45290) | OPEN | Harden delivery fallback and outbound recovery; fixes leaked wrapper/tool-call artifacts, context overflow handling | Session stability, security |
| [#45044](https://github.com/openclaw/openclaw/pull/45044) | OPEN | **Preserve mid-turn messages on gateway restart** — prevents total session data loss | Critical data-loss fix |
| [#43246](https://github.com/openclaw/openclaw/pull/43246) | OPEN | Deny same-provider cross-context sends by default — prevents Slack/WhatsApp/iMessage channel leaks | Security hardening |
| [#43190](https://github.com/openclaw/openclaw/pull/43190) | OPEN | MS Teams channel archive persistence and deleted-channel cleanup | Enterprise reliability |

**Key Advances**: Privacy filtering and mid-turn session preservation represent critical infrastructure hardening. Delivery pipeline fixes address endemic message-loss issues.

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| # | Issue | Comments | 👍 | Core Need |
|:---|:---|:---:|:---:|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) | **Linux/Windows Clawdbot Apps** | 104 | 75 | **Cross-platform parity** — macOS/iOS/Android have native apps; Linux/Windows users excluded from full feature set. Longest-running open issue (since 2026-01-01). |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | Tiered bootstrap file loading for progressive context control | 16 | 0 | **Token cost governance** — large workspaces waste LLM context on unreferenced files |
| [#11829](https://github.com/openclaw/openclaw/issues/11829) | Security Roadmap: Protecting API Keys from Agent Access | 15 | 0 | **Secrets management architecture** — multiple leak vectors through prompt serialization |
| [#32473](https://github.com/openclaw/openclaw/issues/32473) | Control UI requires device identity (HTTPS/localhost secure context) | 15 | 4 | **Self-hosted deployment UX** — VPS/Docker users blocked by browser security model |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | Bootstrap files in agentDir silently ignored | 13 | 4 | **Agent isolation correctness** — per-agent config broken, falls back to shared workspace |

**Underlying Pattern**: Users are hitting scaling limits — token costs, secrets management, multi-agent orchestration — as they move from personal to team/production deployments.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|:---|:---|:---|:---|:---|
| **P1** | [#29387](https://github.com/openclaw/openclaw/issues/29387) | OPEN | [#linked](https://github.com/openclaw/openclaw/issues/29387) | Bootstrap files in `agentDir` ignored; only workspace files loaded |
| **P1** | [#32296](https://github.com/openclaw/openclaw/issues/32296) | OPEN | — | Agent replies to previous message — session context confusion |
| **P1** | [#31583](https://github.com/openclaw/openclaw/issues/31583) | OPEN | — | `exec` tool doesn't inherit `skills.entries.*.env` — secrets can't reach subprocesses (regression) |
| **P1** | [#41744](https://github.com/openclaw/openclaw/issues/41744) | OPEN | — | Feishu: image tool result loses media before final payload |
| **P1** | [#40001](https://github.com/openclaw/openclaw/issues/40001) | OPEN | — | `write` tool lacks append mode — cron sessions destroy shared files |
| **P1** | [#44993](https://github.com/openclaw/openclaw/issues/44993) | OPEN | — | Heartbeat/Cron "Current time" timestamp stale between runs (regression) |
| **P1** | [#29736](https://github.com/openclaw/openclaw/issues/29736) | OPEN | — | Exec approvals path ignores active state root, writes to `~/.openclaw` |
| **P1** | [#43661](https://github.com/openclaw/openclaw/issues/43661) | OPEN | — | Session hangs on compaction timeout, repeated duplicate sends |
| **P1** | [#41165](https://github.com/openclaw/openclaw/issues/41165) | OPEN | — | Telegram DMs pollute `agent:main:main` session after previous fix |
| **P1** | [#40540](https://github.com/openclaw/openclaw/issues/40540) | OPEN | — | `openclaw update` fails with EBUSY on Windows |
| **P1** | [#39476](https://github.com/openclaw/openclaw/issues/39476) | OPEN | — | A2A `sessions_send` causes duplicate messages via callback loops |
| **P1** | [#44905](https://github.com/openclaw/openclaw/issues/44905) | OPEN | — | Discord leaks internal tool-call traces to channel |
| **P1** | [#45049](https://github.com/openclaw/openclaw/issues/45049) | OPEN | — | Agent loop allows simulated tool calls instead of real invocation |

**Critical Trend**: **Session-state integrity** is the dominant failure mode — context confusion, message loss, duplicate sends, and compaction hangs suggest architectural strain in the conversation state machine. Multiple regressions indicate insufficient test coverage for core paths.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Tiered bootstrap loading** | [#22438](https://github.com/openclaw/openclaw/issues/22438) | **High** | Token cost pressure is acute; PR-linked, active maintainer discussion |
| **Per-skill model routing** | [#43260](https://github.com/openclaw/openclaw/issues/43260) | Medium | Natural extension of existing agent/default model config; aligns with cost optimization trend |
| **Direct Exec Mode for Cron** | [#18160](https://github.com/openclaw/openclaw/issues/18160) | Medium | Eliminates LLM overhead for simple scheduled tasks; strong user demand (9 👍) |
| **Path-scoped RWX permissions** | [#39979](https://github.com/openclaw/openclaw/issues/39979) | Medium | Security hardening aligns with current audit focus; complex implementation |
| **Memory recursive subdirectory search** | [#34400](https://github.com/openclaw/openclaw/issues/34400) | High | Simple, well-scoped; daily memory use case is common |
| **MathJax/LaTeX in Control UI** | [#42840](https://github.com/openclaw/openclaw/issues/42840) | Medium | 4 👍; scientific/educational user segment |
| **Theme Customization System** | [#28300](https://github.com/openclaw/openclaw/issues/28300) | Medium | 5 👍; UI polish phase likely post-stability push |
| **Linux/Windows native apps** | [#75](https://github.com/openclaw/openclaw/issues/75) | **Low (near-term)** | 104 comments, 75 👍, but massive scope; likely post-2026 |

---

## 7. User Feedback Summary

### Pain Points (High Frequency)
| Theme | Evidence | Severity |
|:---|:---|:---|
| **Message loss/duplication** | [#39476](https://github.com/openclaw/openclaw/issues/39476), [#32296](https://github.com/openclaw/openclaw/issues/32296), [#41744](https://github.com/openclaw/openclaw/issues/41744), [#43661](https://github.com/openclaw/openclaw/issues/43661) | Critical |
| **Cron/heartbeat reliability** | [#44993](https://github.com/openclaw/openclaw/issues/44993), [#18160](https://github.com/openclaw/openclaw/issues/18160), [#40001](https://github.com/openclaw/openclaw/issues/40001), [#44922](https://github.com/openclaw/openclaw/issues/44922) | High |
| **Secrets management gaps** | [#11829](https://github.com/openclaw/openclaw/issues/11829), [#31583](https://github.com/openclaw/openclaw/issues/31583), [#29736](https://github.com/openclaw/openclaw/issues/29736) | High |
| **Cross-platform exclusion** | [#75](https://github.com/openclaw/openclaw/issues/75) | High (Linux/Windows users) |
| **Docker/self-hosted friction** | [#32473](https://github.com/openclaw/openclaw/issues/32473), [#31331](https://github.com/openclaw/openclaw/issues/31331), [#44599](https://github.com/openclaw/openclaw/issues/44599) | Medium |

### Use Case Evolution
- **From personal assistant → team orchestration**: Multi-agent features (#35203, #43367, #27445) show users trying to build workflows, hitting concurrency and routing limits
- **From experimentation → production scheduling**: Cron/heartbeat issues dominate as users deploy persistent agents
- **Cost consciousness emerging**: Tiered loading (#22438), per-agent budgets (#42475), and token governance (#35203) reflect scaling economic concerns

### Satisfaction Signals
- Strong engagement (500 items/day) indicates active user investment
- Detailed bug reports with reproduction steps suggest committed power users
- Security contributions (#76949) show external security community interest

### Dissatisfaction Signals
- "Clawsweeper" labels (no-new-fix-pr, fix-shape-clear, needs-maintainer-review, needs-product-decision) on majority of issues indicate **process bottlenecks**
- Multiple "regression" tags suggest releases are destabilizing previously working features
- Issue #43747: "Memory management is in chaos" — users report inconsistent behavior across identical setups

---

## 8. Backlog Watch

### Critical Issues Needing Maintainer Action

| Issue | Age | Blockers | Risk |
|:---|:---|:---|:---|
| [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows apps | 137 days | `needs-product-decision`, `needs-maintainer-review` | Platform exclusion; competitor gap |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) Tiered bootstrap | 86 days | `needs-maintainer-review`, `needs-product-decision`, `linked-pr-open` | Token cost optimization blocked |
| [#11829](https://github.com/openclaw/openclaw/issues/11829) API key security roadmap | 99 days | `needs-security-review`, `needs-product-decision` | Security liability |
| [#35203](https://github.com/openclaw/openclaw/issues/35203) Multi-agent collaboration RFC | 73 days | `needs-maintainer-review`, `needs-product-decision`, `needs-security-review` | Strategic architecture decision pending |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) Multi-agent orchestration unstable | 67 days | `needs-maintainer-review`, `needs-product-decision`, `needs-live-repro` | Production multi-agent blocked |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) Exec-approvals denylist | 106 days | `needs-maintainer-review`, `needs-product-decision`, `needs-security-review` | Security policy flexibility |

### PRs Stalled in Triage

| PR | Blocker | Impact |
|:---|:---|:---|
| [#45783](https://github.com/openclaw/openclaw/pull/45783) Privacy filter for LLM traffic | `needs-real-behavior-proof` | Major security feature |
| [#45290](https://github.com/openclaw/openclaw/pull/45290) Delivery fallback hardening | `needs-real-behavior-proof` | Message-loss fix |
| [#45044](https://github.com/openclaw/openclaw/pull/45044) Mid-turn session preservation | `needs-real-behavior-proof` | Data-loss prevention |
| [#43190](https://github.com/openclaw/openclaw/pull/43190) MS Teams archive | `needs-real-behavior-proof`, `refactor-only` | Enterprise feature |

**Process Observation**: The `needs-real-behavior-proof` triage label appears on most significant PRs, suggesting a **testing/verification bottleneck**. The `clawsweeper:*` label taxonomy indicates an attempt at automated backlog management, but high issue counts imply the system is overwhelmed. Consider: dedicated QA resources, expanded maintainer team, or release cadence reduction to stabilize.

---

*Digest generated from GitHub activity 2026-05-17/18. All links: https://github.com/openclaw/openclaw*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source Personal AI Agent Ecosystem
*Analysis Date: 2026-05-18 | Data Source: Community Digests*

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing **intense stabilization pressure** as projects transition from experimentation to production deployment. Across eleven tracked projects, maintainers are grappling with session-state integrity, multi-provider LLM compatibility, and containerized deployment reliability. The landscape shows a **bifurcation**: mature projects (OpenClaw, ZeroClaw, CoPaw) accumulate technical debt from rapid feature expansion, while newer entrants (NanoBot, PicoClaw, Moltis) prioritize operational maturity. A critical industry-wide gap has emerged around **reasoning model integration**—DeepSeek, Kimi, and Gemini's thinking modes are breaking existing provider abstractions. Security consciousness is elevated, with multiple projects disclosing RCE vulnerabilities and racing to implement privacy filtering for LLM traffic.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Assessment Basis |
|:---|:---:|:---:|:---|:---|
| **OpenClaw** | 500 | 500 | v2026.5.16-beta.4/5 (aggressive cadence) | 🟡 Yellow | Extreme volume, 96% open backlog, maintainer bandwidth strain |
| **NanoBot** | 7 | 18 | None recent | 🟢 Green | Healthy 1:1 merge ratio, responsive maintainers |
| **Hermes Agent** | 50 | 50 | None (v0.13.0 regression) | 🟡 Yellow | 48% merge rate, packaging regressions, active fallback architecture work |
| **PicoClaw** | 12 | 7 | Nightly v0.2.8 | 🟡 Yellow | 6:1 open PR ratio, stale-tagging without response |
| **NanoClaw** | 10 | 20 | None | 🟢 Green | Strong same-day fix velocity, CLI-focused stabilization |
| **NullClaw** | 3 | 0 | None | 🔴 Red | Zero PR activity, 3 critical infrastructure bugs unpatched |
| **IronClaw** | 9 | 45 | None (v0.28.2 regressed) | 🔴 Red | 8-day E2E failure, 8 unacknowledged Gmail bugs, zero merges today |
| **LobsterAI** | 0 | 9 (all stale) | None | 🔴 Red | Maintenance mode, 54-55 day PR stagnation |
| **Moltis** | 2 | 3 | Daily build 20260517.03 | 🟢 Green | Steady infrastructure shipping, single-contributor concentration risk |
| **CoPaw** | 18 | 16 | None | 🟡 Yellow | v1.1.7 stability crisis, unpatched RCE, strong test investment |
| **ZeroClaw** | 20 | 50 | None | 🟡 Yellow | 78% PR backlog, recovering from 153-commit bulk revert |
| **TinyClaw** | 0 | 0 | None | ⚫ Inactive | No activity |
| **ZeptoClaw** | 0 | 0 | None | ⚫ Inactive | No activity |

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Peer Comparison |
|:---|:---|:---|
| **Community scale** | 500 issues/PRs daily | 10-50× larger than nearest active competitor (ZeroClaw: 20/50; Hermes: 50/50) |
| **Release velocity** | 2 beta versions in 48 hours | NanoBot, CoPaw, ZeroClaw: no releases in period |
| **Platform breadth** | macOS/iOS/Android native apps | Linux/Windows gap is explicit pain point (#75, 137 days) |
| **Security investment** | Privacy filter for LLM traffic (#45783), audit suppressions | Leading explicit security architecture; NanoBot, CoPaw catching up |
| **Enterprise features** | MS Teams archive (#43190), tiered bootstrap (#22438) | Hermes has Telegram swarm; IronClaw has TEE; none match combined depth |

### Technical Approach Differences
- **OpenClaw**: Monolithic gateway with pluggable skills, aggressive feature expansion, session-state machine at core
- **NanoBot**: Docker-first, WebUI-centric, China-ecosystem optimized (WeChat, MiniMax, Chinese rate limits)
- **Hermes**: Auxiliary task fallback chains, Kanban worker lanes, Telegram bot swarm orchestration
- **ZeroClaw**: Modular provider system, bulk-revert recovery, cron-heavy scheduling
- **IronClaw**: TEE-focused, "Reborn" architectural rewrite, WASM sandboxing ambition

### Community Size Reality
OpenClaw's 500 daily items dwarfs all peers, but **engagement quality is strained**: 481:19 open-to-closed issue ratio and `clawsweeper:*` label taxonomy reveal automated backlog management failing at scale. NanoBot's 7 issues with 14-comment depth on #3790 shows higher **signal-to-noise ratio**. OpenClaw risks **contributor attrition** from process bottlenecks (`needs-real-behavior-proof` on critical PRs).

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Session-state integrity** | OpenClaw, NanoBot, Hermes, CoPaw, ZeroClaw | Mid-turn preservation (OpenClaw #45044), compaction race conditions (NanoBot #3881), "fake death" hangs (CoPaw #3640), message duplication (ZeroClaw #6733) |
| **Reasoning model compatibility** | ZeroClaw, CoPaw, Moltis | `reasoning_content` lifecycle (ZeroClaw #6059/#5600/#6672), `<thought>` tag parsing (Moltis #1007), thinking mode token counting |
| **Docker/container deployment** | NanoBot, NanoClaw, OpenClaw, NullClaw | Build fixes (NanoBot #3870-3872), host-path resolution (NanoClaw #2528), self-hosted HTTPS (OpenClaw #32473), rootless Podman (NanoClaw #2230) |
| **Secrets management** | OpenClaw, NanoBot, Hermes, NanoClaw | API key protection from agent access (OpenClaw #11829), `${VAR_NAME}` docs (NanoBot #3866), OAuth inconsistency (Hermes #12058), Signal key leak (NanoClaw #2520) |
| **Cron/heartbeat reliability** | OpenClaw, NanoClaw, ZeroClaw | Stale timestamps (OpenClaw #44993), silent self-suppression (NanoClaw #2481), timezone contracts (ZeroClaw #6740-6741), Windows spawn (ZeroClaw #6705) |
| **Multi-agent orchestration** | OpenClaw, Hermes, PicoClaw, NanoClaw | Collaboration RFC (OpenClaw #35203), Telegram swarm (Hermes #16227), frontmatter tool policies (PicoClaw #2838), MGA lifecycle (NanoClaw #2517) |
| **Cross-platform parity** | OpenClaw, Hermes, ZeroClaw, CoPaw | Linux/Windows native apps (OpenClaw #75), Windows install (Hermes #27622), Windows/Linux desktop (ZeroClaw #6710), Windows system tray (CoPaw #4041) |

---

## 5. Differentiation Analysis

| Project | Primary Target User | Feature Focus | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Power users → small teams | Skills ecosystem, multi-channel gateway, security hardening | Monolithic Rust/TS gateway, skill plugin model |
| **NanoBot** | China-market self-hosters | WebUI streaming, Docker simplicity, WeChat integration | Python, hatch-based, China-provider optimized |
| **Hermes Agent** | Telegram power users, local model runners | Fallback chains, Kanban worker lanes, swarm orchestration | Rust CLI + gateway, llama.cpp native |
| **PicoClaw** | Embedded/edge (Sipeed hardware) | Low-resource deployment, local LLM connectivity | Lightweight, Android/Termux viable |
| **NanoClaw** | Multi-channel operators, v2 deployers | CLI governance, container runtime, finance skills | Go CLI + container orchestration, XML/MCP dual path |
| **NullClaw** | Zig enthusiasts, minimalists | Core runtime stability | Zig from scratch, explicit memory management |
| **IronClaw** | TEE/verifiable compute, marketplace builders | Runtime tool installation, WASM hooks, IronHub | Rust, TEE-first, "Reborn" rewrite |
| **LobsterAI** | Electron desktop users, skill developers | Desktop responsiveness, skill analytics | Electron + SQLite, OpenClaw plugin compatible |
| **Moltis** | Remote developers, AI coding tool orchestrators | Persistent external agent sessions, mesh networking | TypeScript, multi-tunnel remote access |
| **CoPaw** | Qwen ecosystem, desktop aspirants | Testing infrastructure, token visibility, Tauri desktop | Python backend + evolving frontend |
| **ZeroClaw** | Scheduling-heavy operators, skills marketplace | Cron sophistication, plugin system, provider breadth | TypeScript, modular, bulk-revert recovery |

### Key Architectural Divides
- **Gateway-centric** (OpenClaw, NanoBot, Hermes) vs. **Container-centric** (NanoClaw, IronClaw)
- **Native app ambition** (OpenClaw macOS/iOS, CoPaw Tauri, ZeroClaw desktop) vs. **WebUI-only** (NanoBot, LobsterAI)
- **Compiled systems languages** (OpenClaw Rust, Hermes Rust, NullClaw Zig, IronClaw Rust) vs. **Python/TS rapid iteration** (NanoBot Python, Moltis TS, CoPaw Python)

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Velocity, Some Instability)
| Project | Characteristics | Risk |
|:---|:---|:---|
| **OpenClaw** | 500 items/day, 2 beta releases/48h | Maintainer burnout, 96% open backlog, regression tags proliferating |
| **ZeroClaw** | 50 PRs/day, active provider fixes | 78% PR backlog, 153-commit revert recovery, dead config fields |
| **CoPaw** | 34 items/day, E2E test investment | v1.1.7 release blocker, unpatched RCE, chat hang cluster |

### Tier 2: Healthy Stabilization (Balanced Merge Ratio, Production Focus)
| Project | Characteristics | Trajectory |
|:---|:---|:---|
| **NanoBot** | 1:1 merge:open PR ratio, same-day critical fixes | WebUI reliability investment paying off; China market deepening |
| **NanoClaw** | Same-day fix velocity, CLI hardening | v2 container runtime maturing; operational tooling expanding |
| **Moltis** | Daily builds, infrastructure completion | External agent orchestration pivot; review bandwidth risk (single contributor) |

### Tier 3: Strained or Stagnant
| Project | Characteristics | Concern |
|:---|:---|:---|
| **Hermes Agent** | 48% merge rate, packaging regressions | v0.13.0 unfit for production; Windows parity gap |
| **PicoClaw** | Stale-bot without maintainer response | Community attrition risk; RISC-V regression threatens hardware partner |
| **IronClaw** | Zero merges today, 8-day E2E failure | Platform ambition exceeding execution capacity |
| **LobsterAI** | 54-55 day PR stagnation | Maintenance mode; release pipeline broken |
| **NullClaw** | Zero PR activity, 3 critical bugs | Potential project abandonment |

### Tier 4: Inactive
| Project | Status |
|:---|:---|
| **TinyClaw**, **ZeptoClaw** | No activity in tracking period |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|:---|:---|:---|
| **Reasoning models break existing abstractions** | ZeroClaw #6059/#5600/#6672, Moltis #1007, CoPaw implicit | Design provider layers with **pluggable reasoning content lifecycle**—not hardcoded `<think>` parsing |
| **Session-state integrity is the new reliability frontier** | OpenClaw 12 P1 session bugs, NanoBot #3881 race condition, CoPaw #3640 "fake death" | Invest in **deterministic conversation state machines** with formal compaction/snapshot semantics |
| **Container runtime friction dominates deployment** | NanoBot 3 Docker PRs, NanoClaw #2528 path resolution, OpenClaw #32473 HTTPS | Assume **rootless, reverse-proxied, volume-mapped** deployment; test accordingly |
| **Cost governance is emerging as first-class concern** | OpenClaw #22438 tiered bootstrap, CoPaw #4465 cached token estimation, NanoBot #3368 heartbeat override | Build **token visibility and budget enforcement** into core architecture, not plugins |
| **Multi-agent orchestration outpaces single-agent maturity** | OpenClaw #35203 RFC, Hermes Telegram swarm, NanoClaw MGA lifecycle | Prepare for **cross-agent identity, permission scoping, and message routing** complexity |
| **Security disclosure velocity increasing** | CoPaw #4470 RCE, NanoClaw #2520 key leak, OpenClaw #11829 secrets roadmap | Implement **defense-in-depth**: privacy filtering, audit trails, and principle-of-least-privilege by default |
| **"Silent failure" patterns erode trust** | Hermes #27555 vision fallback, ZeroClaw dead config fields, IronClaw false success toasts | Design **observable failure modes**—every silent drop is a user-exit risk |
| **China-ecosystem compatibility is competitive differentiator** | NanoBot WeChat/MiniMax, ZeroClaw DeepSeek/Kimi/Xiaomi, LobsterAI DeepSeek/Zhipu | Provider abstraction must handle **Chinese rate-limit semantics, protocol versions, and OAuth variants** |

### Strategic Implication
The ecosystem is **transitioning from "does it work?" to "does it work reliably at scale?"** Projects that stabilize session state, container deployment, and reasoning model compatibility while maintaining contributor velocity will capture production deployments. Projects prioritizing architectural ambition over regression discipline (IronClaw Reborn/hooks, OpenClaw feature expansion) risk ceding ground to disciplined stabilizers (NanoBot, NanoClaw).

---

*Report compiled from 13 project digests covering 2026-05-17/18 activity. Health scores are composite assessments based on merge velocity, issue resolution rate, release stability, and maintainer responsiveness.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-18

## 1. Today's Overview

NanoBot saw **high development velocity** on 2026-05-17 with **18 PRs updated** (9 merged/closed, 9 open) and **7 active issues** (6 open, 1 closed). No new releases were published. The project is in an active stabilization phase following the v0.2.0 release, with heavy focus on **Docker deployment fixes**, **WebUI streaming performance**, and **CLI/terminal experience improvements**. The 1:1 merge-to-open PR ratio indicates healthy maintainer throughput, though the accumulation of open feature PRs suggests a growing backlog awaiting review.

---

## 2. Releases

**No new releases** — latest remains prior to current cycle.

---

## 3. Project Progress

### Merged/Closed PRs Today (9 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#3877](https://github.com/HKUDS/nanobot/pull/3877) | Re-bin | **Major WebUI performance overhaul**: streaming optimization, activity rendering, runtime sync for long-running agent chats | High — resolves core UX pain for production deployments |
| [#3878](https://github.com/HKUDS/nanobot/pull/3878) | li-yazhou | **CLI reasoning token display fix**: buffers DeepSeek-V4 streaming tokens to prevent one-token-per-line output | Medium — fixes broken terminal UX for reasoning models |
| [#3881](https://github.com/HKUDS/nanobot/pull/3881) | chengyongru | **Race condition fix**: AutoCompact vs. Consolidator session corruption | Critical stability — prevents data loss in idle session handling |
| [#3874](https://github.com/HKUDS/nanobot/pull/3874) | voidborne-d | **Docker docs alignment**: `docker run gateway` example now matches `docker-compose.yml` | Medium — reduces deployment friction |
| [#3866](https://github.com/HKUDS/nanobot/pull/3866) | olgagaga | **Secrets documentation expansion**: more `${VAR_NAME}` examples, onboarding clarity | Low — developer experience |
| [#3870](https://github.com/HKUDS/nanobot/pull/3870) | ariedov | **Docker build fix**: `hatch_build.py` copy failure | Critical — unblocks builds |
| [#3872](https://github.com/HKUDS/nanobot/pull/3872) | huanglei214 | **Docker build + WebUI port fix** | Critical — unblocks containerized WebUI access |
| [#3788](https://github.com/HKUDS/nanobot/pull/3788) | Re-bin | **`/goal` command & long-running task state management** | Major feature — session-persistent goals with history merge |
| [#3864](https://github.com/HKUDS/nanobot/pull/3864) | chengyongru | **Chinese rate-limit recognition**: `访问量过大` ("too much traffic") now triggers retry | Medium — reliability for Chinese LLM providers |

**Key advancement**: The project closed two critical Docker build blockers and landed substantial WebUI/CLI quality-of-life improvements. The `/goal` long-task system represents a significant agent capability expansion.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#3790](https://github.com/HKUDS/nanobot/issues/3790) — WebUI print content display corruption | **14 comments**, updated 2026-05-17 | **Highest engagement issue**. Chinese users report WebUI session rendering breaking after v0.1.5.post3.2026.05.13 update, requiring page refresh. Suggests frontend state management regression in recent releases. Fix likely related to merged PR #3877 (streaming/rendering optimization). |
| [#3863](https://github.com/HKUDS/nanobot/issues/3863) — WeChat login failure | 2 comments | WeChat channel protocol version incompatibility. Users blocked despite updating to latest WeChat client. Underlying need: **reliable China-centric IM channel support**. Linked to closed issue #3882 proposing `openclaw-weixin` v2.x upgrade. |
| [#3877](https://github.com/HKUDS/nanobot/pull/3877) — WebUI streaming optimization | Merged same day | Rapid maintainer response to performance complaints. Indicates prioritization of production-readiness over new features. |

**Underlying community needs**: (1) **Stable WebUI for production use** — rendering and session persistence are make-or-break; (2) **China ecosystem compatibility** — WeChat is non-negotiable for Chinese user base; (3) **Docker-first deployment** — users expect containerized workflows to work out-of-box.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix Available |
|:---|:---|:---|:---|
| 🔴 **Critical** | [#3881](https://github.com/HKUDS/nanobot/pull/3881) — AutoCompact/Consolidator race condition causing session corruption | **FIXED** in #3881 | Merged |
| 🔴 **Critical** | [#3870](https://github.com/HKUDS/nanobot/pull/3870), [#3872](https://github.com/HKUDS/nanobot/pull/3872) — Docker build failures | **FIXED** | Both merged |
| 🟡 **High** | [#3790](https://github.com/HKUDS/nanobot/issues/3790) — WebUI content display corruption | Open, 14 comments | Likely addressed by #3877 (streaming fix), awaiting verification |
| 🟡 **High** | [#3857](https://github.com/HKUDS/nanobot/issues/3857) — Bootstrap failed HTTP 500 | Open | Related to #3876 (localhost-only binding); PR #3875 adds docs |
| 🟡 **High** | [#3884](https://github.com/HKUDS/nanobot/issues/3884) — WebUI conversation closes after first response | Open, 0 comments | Possibly WebSocket/config issue; may relate to #3877 |
| 🟡 **High** | [#3863](https://github.com/HKUDS/nanobot/issues/3863) — WeChat login blocked (version too low) | Open | Issue #3882 (upgrade to v2.x) closed as completed, but no PR merged yet |
| 🟢 **Medium** | [#3873](https://github.com/HKUDS/nanobot/issues/3873) — Docker deployment docs inconsistencies | Open | PRs #3874, #3875 address partially |

**Stability assessment**: Two critical infrastructure fixes landed (Docker builds, session race condition). However, **WebUI reliability remains the dominant risk** with 3 of 6 open issues targeting frontend/session behavior. The WeChat channel faces protocol obsolescence pressure.

---

## 6. Feature Requests & Roadmap Signals

| PR/Issue | Feature | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| [#3883](https://github.com/HKUDS/nanobot/pull/3883) — CLI model configuration management (`nanobot model`, `nanobot model key`, `nanobot model base`) | **High** | Clean, scoped CLI enhancement; fills obvious config gap |
| [#3879](https://github.com/HKUDS/nanobot/pull/3879) — MiniMax image generation provider | **High** | Follows established provider pattern; expands China market |
| [#3847](https://github.com/HKUDS/nanobot/pull/3847) — `skill_load` tool for multi-turn skill preservation | **Medium-High** | Addresses "critical issue" of skill content loss; well-scoped |
| [#3865](https://github.com/HKUDS/nanobot/pull/3865) — BM25-lite skill router (~60% system prompt reduction) | **Medium** | Performance win but touches core agent routing; needs careful review |
| [#3880](https://github.com/HKUDS/nanobot/pull/3880) — Tool result compression before LLM consolidation | **Medium** | Memory/archival optimization; niche but valuable for long sessions |
| [#3368](https://github.com/HKUDS/nanobot/pull/3368) — Heartbeat model override | **Medium** | Cost optimization feature; been open since April, may need rebase |
| [#3876](https://github.com/HKUDS/nanobot/issues/3876) — WebUI localhost-only binding → external access | **High (as fix)** | Deployment blocker; PR #3875 documents workarounds, code fix likely needed |
| [#2060](https://github.com/HKUDS/nanobot/pull/2060) — Shell tool configurable paths | **Low-Medium** | Open since March; narrow use case, maintainers may defer |

**Roadmap signal**: Strong push toward **operational maturity** — model management CLI, Docker hardening, and cost controls (heartbeat override, BM25 routing) suggest preparation for broader production adoption rather than feature expansion.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---|
| **Docker deployment friction** | #3873, #3857, #3876, PRs #3870-3875 | 🔴 Critical — multiple users unable to deploy |
| **WebUI instability** | #3790 (14 comments), #3884, #3857 | 🔴 Critical — frontend crashes, session drops |
| **WeChat channel breakage** | #3863, #3882 | 🟡 High — China market accessibility |
| **CLI output quality** | #3878 (reasoning tokens), #3883 (config management) | 🟡 Medium — polish gaps in terminal UX |

### Positive Signals
- **Responsive maintainers**: #3877 merged same day as filed; build fixes landed within 24h
- **Long-task capabilities**: #3788 `/goal` command shows ambitious agent autonomy development
- **Multi-provider support**: MiniMax, Chinese rate-limit handling demonstrate market awareness

### Use Case Patterns
- **Self-hosted personal assistant** (Docker + WebUI + reverse proxy)
- **China-compatible deployment** (WeChat channel, Chinese LLM providers)
- **Long-running agent tasks** (goal persistence, session consolidation)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#2060](https://github.com/HKUDS/nanobot/pull/2060) Shell tool path restrictions | ~2 months | Stale; author may abandon | Maintainer decision: merge, request rebase, or close |
| [#2867](https://github.com/HKUDS/nanobot/pull/2867) Telegram group allowlist + fallback agents | ~6 weeks | Marked `[invalid]`; may need redesign | Author clarification or maintainer close |
| [#3368](https://github.com/HKUDS/nanobot/pull/3368) Heartbeat model override | ~4 weeks | Bitrotting against main | Rebase required; or close if superseded |
| [#3847](https://github.com/HKUDS/nanobot/pull/3847) `skill_load` tool | 3 days | High-value but unreviewed | Prioritize review — fixes "critical" data loss |
| [#3865](https://github.com/HKUDS/nanobot/pull/3865) BM25 skill router | 2 days | Large architectural change | Needs performance benchmark review |

**Maintainer attention recommended**: The Docker/WebUI stabilization sprint is working, but **feature PR backlog is growing**. Consider triage pass on open PRs to prevent contributor fatigue, especially for #3847 (skill_load) which addresses a self-reported critical bug.

---

*Digest generated from HKUDS/nanobot GitHub activity for 2026-05-18. All links: https://github.com/HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-18

## 1. Today's Overview

Hermes Agent saw **high activity** with 50 issues and 50 PRs updated in the last 24 hours, yielding a **48% merge/close rate** (24 PRs merged/closed, 8 issues closed against 42 remaining open). No new release was published. The project is in an active **stabilization phase** following the v0.13.0 release, with concentrated effort on auxiliary task resilience, cross-platform CLI fixes, and packaging regressions. A notable pattern is the rapid iteration on **fallback chain architecture** for auxiliary providers—three related PRs merged in two days—suggesting this is a priority reliability investment. However, the high open-issue count and multiple P1 bugs indicate **technical debt accumulation** that may need focused attention.

---

## 2. Releases

**No new releases.** The latest release remains prior to v0.13.0, though v0.13.0 is referenced in active issues (e.g., [#27632](https://github.com/NousResearch/hermes-agent/issues/27632) reports a locales/ packaging regression in v0.13.0). Users on v0.13.0 should monitor for hotfix releases given the i18n and packaging bugs identified.

---

## 3. Project Progress

### Merged/Closed PRs (Selected)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#27625](https://github.com/NousResearch/hermes-agent/pull/27625) | teknium1 | **Layered auxiliary fallback system** — 4-step fallback ladder (chain → main agent → free tier → error) for compression, vision, TTS, web_extract, etc. | **Major reliability improvement**; closes [#26803](https://github.com/NousResearch/hermes-agent/issues/26803) and [#26882](https://github.com/NousResearch/hermes-agent/issues/26882) |
| [#26811](https://github.com/NousResearch/hermes-agent/pull/26811) | Bartok9 | Detect quota exhaustion as payment error; enable capacity-error fallback for explicit providers | Core fix for auxiliary fallback gaps; superseded by #27625 |
| [#26809](https://github.com/NousResearch/hermes-agent/pull/26809) | kagura-agent | Detect quota keywords in `_is_payment_error`; allow fallback for explicit providers | Precursor to #26811/#27625 |
| [#27193](https://github.com/NousResearch/hermes-agent/pull/27193) | maxpunkt1337 | Make `hermes tools` ESC cancel non-mutating | UX polish for CLI |
| [#16308](https://github.com/NousResearch/hermes-agent/pull/16308) | briandevans | Resolve named-provider credential when `base_url` overrides endpoint | Fixes 401 auth errors for auxiliary vision with custom endpoints |
| [#16227](https://github.com/NousResearch/hermes-agent/pull/16227) | briandevans | Telegram bot swarm orchestration via single manager | **Major feature**: parallel task distribution across Telegram bots |
| [#27667](https://github.com/NousResearch/hermes-agent/pull/27667) | 5Hyeons | Stabilize env-isolation tests for terminal/code-exec tools | Test reliability |
| [#27668](https://github.com/NousResearch/hermes-agent/pull/27668) | gzsiang | Resolve 11 CI test failures across agent/cli/gateway/telegram | CI health restoration |

### Architecture Evolution
The auxiliary fallback work represents a **strategic shift**: Hermes is moving from "best effort" auxiliary tasks to **guaranteed execution** through layered resilience. The 4-step ladder (provider chain → main agent model → free tier → hard error) will likely become the template for other subsystems.

---

## 4. Community Hot Topics

| Rank | Item | Comments | Analysis |
|:---|:---|:---|:---|
| 1 | [#27339](https://github.com/NousResearch/hermes-agent/issues/27339) **Prompt Cache/KV Cache Invalidation on Follow-Up Messages** | 5 | **Root cause**: Dynamic tool shuffling between agent loop and user turn breaks llama.cpp/ik_llama.cpp prompt cache. **Need**: Deterministic tool ordering or cache-aware loop design. Closed but may resurface with local backend users. |
| 2 | [#27622](https://github.com/NousResearch/hermes-agent/issues/27622) **Windows Install Isn't Working** | 4 | PowerShell 7.6.1 and Windows PowerShell x86 both fail on install script syntax. **Need**: Cross-platform install validation in CI; Windows user base is growing but underserved. |
| 3 | [#12058](https://github.com/NousResearch/hermes-agent/issues/12058) **OpenAI Codex OAuth works in CLI, but Telegram gateway replies "No Codex credentials"** | 4 | **Persistent cross-gateway auth inconsistency** — credentials stored per-gateway rather than globally? **Need**: Unified credential namespace or gateway-aware credential resolution. |
| 4 | [#23496](https://github.com/NousResearch/hermes-agent/issues/23496) **Headless VM browser: env var mismatch (`CHROME_FLAGS` vs `ARGS`)** | 3 | Sandbox bypass injection is no-op due to wrong env var name. **Security implication**: Headless environments falsely believe they're sandboxed. Closed with fix. |
| 5 | [#27197](https://github.com/NousResearch/hermes-agent/issues/27197) **xAI Grok streaming fallback errors on Responses API** | 3 | xAI-oauth + codex_responses mode broken post-update. **Need**: Provider API stability testing in CI; xAI's rapid API evolution creates maintenance burden. |

**Underlying Community Needs**: 
- **Windows parity** (install, MCP, proxy packaging)
- **Local model reliability** (cache coherence, timeout configurability)
- **Gateway auth unification** (OAuth flows fail inconsistently across Telegram/CLI/Mattermost)
- **Provider resilience** (xAI especially volatile; fallback chains now partially address this)

---

## 5. Bugs & Stability

### P1 (Critical) — Active or Recently Fixed

| Issue | Status | Description | Fix PR |
|:---|:---|:---|:---|
| [#23496](https://github.com/NousResearch/hermes-agent/issues/23496) | **CLOSED** | Browser sandbox bypass no-op in headless VMs — security boundary failure | Fixed |
| [#26990](https://github.com/NousResearch/hermes-agent/issues/26990) | **CLOSED** | xAI OAuth PKCE `code_verifier` missing — token exchange fails | Fixed (implied by closure) |
| [#27555](https://github.com/NousResearch/hermes-agent/issues/27555) | **OPEN** | Vision `fallback_chain` silently broken — wrong kwargs swallow TypeError | **NEEDS PR** — regression risk for vision tasks |
| [#27566](https://github.com/NousResearch/hermes-agent/issues/27566) | **OPEN** | Context compression loops every 1-2 turns due to inflated token estimates | **NEEDS PR** — performance degradation with 50+ tools |
| [#27632](https://github.com/NousResearch/hermes-agent/issues/27632) | **OPEN** | v0.13.0: `locales/` missing from pip package — raw i18n keys exposed | **NEEDS PR** — packaging regression |
| [#22385](https://github.com/NousResearch/hermes-agent/issues/22385) | **OPEN** | Telegram images not accessible — 30+ min fail-loop instead of fast error | **NEEDS PR** — UX disaster |

### P2 (High)

| Issue | Status | Description |
|:---|:---|:---|
| [#26803](https://github.com/NousResearch/hermes-agent/issues/26803) | **CLOSED** | Auxiliary fallback doesn't trigger on 429 daily quota |
| [#27397](https://github.com/NousResearch/hermes-agent/issues/27397) | **OPEN** | One-line PowerShell install broken (same root as #27622) |
| [#27664](https://github.com/NousResearch/hermes-agent/issues/27664) | **OPEN** | Homebrew package missing `hermes_cli.proxy` subpackage |
| [#27585](https://github.com/NousResearch/hermes-agent/issues/27585) | **OPEN** | `/goal` spam loop when `goal_judge` errors fail-open |

### Stability Assessment
**Concerning trends**: 
- Two P1 packaging issues in v0.13.0 (#27632 locales, #27664 Homebrew proxy) suggest **release process gaps**
- Silent failures in vision fallback (#27555) and compression loops (#27566) indicate **insufficient test coverage for edge cases**
- Telegram gateway has multiple active issues (images, restart durability, auth) — **platform-specific quality debt**

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Signal Strength | Prediction |
|:---|:---|:---|
| [#22201](https://github.com/NousResearch/hermes-agent/issues/22201) Per-auxiliary `fallback_providers` | **HIGH** | Likely v0.14.0 — directly extends merged #27625 architecture |
| [#27630](https://github.com/NousResearch/hermes-agent/pull/27630) Native Codex worker lane for Kanban | **HIGH** | Likely v0.14.0 — Kanban is active development area; Codex integration is strategic |
| [#27661](https://github.com/NousResearch/hermes-agent/pull/27661) `/history` prompt reuse + Feishu interactive cards | **MEDIUM** | v0.14.0 or v0.15.0 — gateway UX polish for enterprise users |
| [#27587](https://github.com/NousResearch/hermes-agent/issues/27587) Mattermost interactive button approval | **MEDIUM** | Next gateway sprint — safety-critical for enterprise adoption |
| [#21525](https://github.com/NousResearch/hermes-agent/issues/21525) Unified timeout configuration | **MEDIUM** | Needs champion; local model workflow blocker |
| [#5041](https://github.com/NousResearch/hermes-agent/issues/5041) Cryptographic audit trail via MCP | **LOW-MEDIUM** | Enterprise roadmap; depends on MCP maturation |
| [#4438](https://github.com/NousResearch/hermes-agent/issues/4438) Rich spreadsheet skill | **LOW** | Community contribution candidate; not core team priority |

**Emerging theme**: "Worker lanes" and durable execution patterns (Kanban + Codex, Telegram swarm) suggest Hermes is evolving from **chat agent** to **orchestration platform**.

---

## 7. User Feedback Summary

### Pain Points (Explicit)

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Windows as second-class citizen** | #27622, #27397, #27666, #27664 | HIGH — install, MCP, packaging all broken |
| **Gateway auth inconsistency** | #12058 (Telegram≠CLI), #27573 (Docker OAuth), #27592 (restart auth loss) | HIGH — breaks multi-channel deployments |
| **Silent failures / false progress** | #27555 (vision fallback broken silently), #27566 (compression loops), #22385 (30-min image fail) | HIGH — erodes trust |
| **Local model timeouts** | #21525 | MEDIUM-HIGH — power user blocker |
| **Packaging quality** | #27632 (pip missing locales), #27664 (Homebrew missing proxy) | MEDIUM — release process issue |

### Use Cases Emerging
- **Headless/Docker deployments**: OAuth, browser, and gateway restart issues cluster here
- **Multi-bot Telegram operations**: Swarm PR (#16227) and image access bug (#22385) show sophisticated use
- **Enterprise gateways**: Mattermost (#27587), Feishu (#27661), approval workflows — B2B signal

### Satisfaction Signals
- Rapid auxiliary fallback iteration shows **responsive maintainers** on reliability
- Kanban + Codex worker lane shows **ambitious product vision**

### Dissatisfaction Signals
- v0.13.0 packaging regressions suggest **insufficient release testing**
- Multiple "preservation" PRs from dionpadilla (#27671-27674) with empty descriptions — possible **recovery from incident or migration**, indicating operational stress

---

## 8. Backlog Watch

### Long-Unanswered Important Issues

| Issue | Age | Last Activity | Risk |
|:---|:---|:---|:---|
| [#4876](https://github.com/NousResearch/hermes-agent/issues/4876) Upgrade Node.js 20→22 (LTS ends April 2026) | ~6 weeks | 2026-05-17 | **Security-critical** — Node 20 EOL passed; Docker images vulnerable |
| [#4438](https://github.com/NousResearch/hermes-agent/issues/4438) Rich spreadsheet skill | ~7 weeks | 2026-05-17 | Feature gap vs. competitors |
| [#5041](https://github.com/NousResearch/hermes-agent/issues/5041) Cryptographic audit trail | ~6 weeks | 2026-05-17 | Enterprise blocker |

### PRs Needing Maintainer Attention

| PR | Status | Concern |
|:---|:---|:---|
| [#27658](https://github.com/NousResearch/hermes-agent/pull/27658) Add repo-local goals router | OPEN | No comments; ambitious scope needs review |
| [#27669](https://github.com/NousResearch/hermes-agent/pull/27669) Improve models fallback management | OPEN | "Fork PR carrying safe local commit because upstream push is read-only" — **contributor access issue?** |
| Multiple dionpadilla PRs (#27670-27674) | OPEN | Empty descriptions, "preserve" naming — **possible incident recovery**; need triage to distinguish mechanical from substantive |

### Maintainer Action Recommended
1. **Immediate**: Hotfix release for v0.13.0 packaging (#27632, #27664)
2. **This week**: Triage dionpadilla's 5 "preserve" PRs — operational recovery or feature work?
3. **This sprint**: Address P1 vision fallback (#27555) and compression loop (#27566) regressions
4. **Next sprint**: Node.js 22 upgrade (#4876) — security debt

---

*Digest generated from 50 issues and 50 PRs updated 2026-05-17/18. Activity level: HIGH. Merge velocity: MODERATE. Issue resolution rate: LOW (16% close rate). Health indicator: YELLOW — active development with release quality gaps.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-18

## 1. Today's Overview

PicoClaw shows **moderate-to-high community activity** with 12 issues and 7 PRs updated in the last 24 hours, though maintainer bandwidth appears constrained with 6 of 7 PRs still open and several issues/PRs marked stale. The project released a new nightly build (`v0.2.8-nightly.20260517.0df050ff`), indicating active development continues on the main branch. A notable pattern is strong **provider ecosystem expansion** (SiliconFlow, LM Studio, Ollama cloud credentials) alongside **persistent tooling and configuration bugs** that suggest growing pains as the project scales beyond core use cases. The 7:5 open-to-closed issue ratio and 6:1 open-to-merged PR ratio indicate review backlog is accumulating.

---

## 2. Releases

**Nightly Build: [v0.2.8-nightly.20260517.0df050ff](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)**

- Automated nightly from `main` branch; explicitly marked **unstable**
- No detailed changelog provided; full diff available at comparison link above
- **Caution advised** for production deployments

---

## 3. Project Progress

### Merged/Closed PRs (1 item)

| PR | Description | Significance |
|---|---|---|
| [#2462](https://github.com/sipeed/picoclaw/pull/2462) | **[codex] fix codex streaming output and telegram duplicate retries** — Fixed streaming output corruption and duplicate retry storms on Telegram channel under low-resource Android/Termux environments | **Stability fix for edge-case deployment scenario**; addresses real-world IoT/embedded use case (Android TV box as PicoClaw node). Merged after ~5 weeks open. |

### Notable Open PRs Advancing

| PR | Description | Status |
|---|---|---|
| [#2885](https://github.com/sipeed/picoclaw/pull/2885) | **feat(provider): add SiliconFlow provider support** — First-class provider integration beyond OpenAI-compatible mode | Ready for review; directly addresses community request [#2884](https://github.com/sipeed/picoclaw/issues/2884) filed same day |
| [#2886](https://github.com/sipeed/picoclaw/pull/2886) | **feat(chat): add chat detail visibility selector** — Four-state UI control for reasoning/tool-call visibility | Fresh submission; UI/UX polish |
| [#2888](https://github.com/sipeed/picoclaw/pull/2888) | **Fix/tool config load image reaction** — Addresses [#2878](https://github.com/sipeed/picoclaw/issues/2878) where `load_image` cannot be configured in `config.json` | Community-contributed fix for configuration bug |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | Analysis |
|:---:|---|:---:|---|
| 1 | [#28](https://github.com/sipeed/picoclaw/issues/28) **Feat Request: LM Studio Easy Connect** | 19 comments, 2 👍 | **Longest-running open issue** (created Feb 11, active through yesterday). Core need: **zero-config local LLM connectivity** for non-technical users on Android. LM Studio's local server discovery is a recurring ask across AI assistant projects; PicoClaw's embedded/edge focus (Sipeed hardware) makes this especially relevant. |
| 2 | [#1042](https://github.com/sipeed/picoclaw/issues/1042) **[BUG] exec工具的guardCommand方法问题** | 12 comments, 2 👍 | **Security/safety mechanism producing false positives**. The `guardCommand` regex incorrectly flags URL parameters as path traversal (`../../../../Beijing?T`). Pain point: breaks legitimate web API calls when `restrict_to_workspace=true`. |
| 3 | [#2225](https://github.com/sipeed/picoclaw/issues/2225) **[Feature] Ollama cloud credentials** | 12 comments | Closed yesterday; user needed authentication for Ollama cloud instances. **Resolved or superseded?** Closure without linked PR suggests may have been addressed elsewhere or closed as stale. |

### Underlying Needs Analysis

- **Local-first, low-friction LLM connectivity** (#28) — Users want PicoClaw to "just work" with local/self-hosted models without manual endpoint configuration
- **Smarter security boundaries** (#1042) — Safety guards need semantic understanding of commands, not regex-based path detection
- **Provider authentication parity** (#2225, #2546) — OAuth, credentials, and standardized auth flows becoming table stakes

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---:|---|---|:---:|
| **High** | [#2887](https://github.com/sipeed/picoclaw/issues/2887) | **RISC-V .deb completely non-functional with OpenAI models** — `0.2.8` on Debian RISC-V fails; likely architecture-specific binary/build issue | ❌ None |
| **High** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) | **exec `guardCommand` false-positive blocks valid commands** — Breaks weather APIs, likely other URL-based tools | ❌ None (workaround: disable `restrict_to_workspace`) |
| **Medium** | [#2839](https://github.com/sipeed/picoclaw/issues/2839) | **Steering-chain final replies edit wrong message** — UX corruption on channels with placeholder editing; final reply overwrites "Working..." instead of posting fresh | ❌ None |
| **Medium** | [#2878](https://github.com/sipeed/picoclaw/issues/2878) | **`load_image` tool unconfigurable in `config.json`** — Hardcoded registration logic bypasses standard tool enablement config | ✅ [#2888](https://github.com/sipeed/picoclaw/pull/2888) open |
| **Medium** | [#2745](https://github.com/sipeed/picoclaw/issues/2745) | **OpenRouter reasoning model leaks thinking content** — Model's internal reasoning exposed to end user | ✅ Closed; fix merged in past |
| **Low** | [#2749](https://github.com/sipeed/picoclaw/issues/2749) | **Bash evaluates relative path as absolute path** — Path resolution inconsistency in Docker/Ubuntu | ✅ Closed |

**Regression Risk:** The RISC-V package failure (#2887) is a **platform regression** that could affect Sipeed's hardware ecosystem (RISC-V is core to their product line). Requires urgent attention.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in v0.2.9 | Rationale |
|---|---|:---:|---|
| **SiliconFlow native provider** | [#2884](https://github.com/sipeed/picoclaw/issues/2884) / [#2885](https://github.com/sipeed/picoclaw/pull/2885) | **High** | PR already submitted, same-day response to issue. Pattern: Chinese model providers (SiliconFlow, DeepSeek) prioritized. |
| **LM Studio easy connect** | [#28](https://github.com/sipeed/picoclaw/issues/28) | Medium | 3+ months old, high engagement, aligns with edge/embedded mission. Needs dedicated protocol discovery work. |
| **OAuth 2.1 + PKCE for MCP servers** | [#2546](https://github.com/sipeed/picoclaw/issues/2546) | Medium | Closed as stale, but MCP ecosystem maturing; may resurface. Dashboard UX gap for non-technical users. |
| **Frontmatter tool policies (`allow`/`deny`/glob)** | [#2837](https://github.com/sipeed/picoclaw/issues/2837) / [#2838](https://github.com/sipeed/picoclaw/pull/2838) | Medium | PR open 9 days, stale-tagged. Multi-agent governance is architectural; needs maintainer design review. |
| **Per-message timestamps in Session API** | [#2788](https://github.com/sipeed/picoclaw/pull/2788) | Medium | Clean API improvement, low risk. Stale-tagged; may need champion. |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|---|---|:---:|
| **Configuration discoverability** | `load_image` invisible in config (#2878), LM Studio connection opaque (#28), Ollama auth missing (#2225) | High |
| **False security blocks** | `guardCommand` regex breaks legitimate tools (#1042) | High |
| **Platform-specific breakage** | RISC-V package non-functional (#2887) | Critical for hardware partner |
| **Stale issue/PR neglect** | Multiple items tagged stale with maintainer silence | Community health concern |

### Use Cases & Satisfaction

- **Positive:** Embedded/edge deployment viability validated (Android TV box + Telegram + OpenAI in #2462)
- **Positive:** Responsive same-day PR for SiliconFlow (#2885) shows ecosystem agility
- **Negative:** Multi-week/month resolution times for core UX issues (#28: 3+ months; #1042: 2+ months)
- **Emerging:** **Multi-agent governance** becoming explicit need (#2837) — users deploying PicoClaw as orchestration platform, not single assistant

---

## 8. Backlog Watch

Items requiring maintainer attention to prevent community attrition:

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| [#28](https://github.com/sipeed/picoclaw/issues/28) LM Studio Easy Connect | **96 days open** | User champion may abandon; competitor solutions exist | Design decision: auto-discovery protocol vs. manual config wizard |
| [#2838](https://github.com/sipeed/picoclaw/pull/2838) Frontmatter tool policies | 9 days, **stale** | Multi-agent governance PR from active contributor | Architecture review; merge or provide feedback |
| [#2788](https://github.com/sipeed/picoclaw/pull/2788) Per-message timestamps | 12 days, **stale** | Clean API fix, low risk | Trivial review; merge candidate |
| [#2759](https://github.com/sipeed/picoclaw/pull/2759) Seahorse retrieval scoping | 14 days, **stale** | Security fix (session isolation) | Security review; should prioritize |
| [#2839](https://github.com/sipeed/picoclaw/issues/2839) Steering-chain message editing | 9 days, **stale** | UX corruption on active channels | Reproduce and triage |

**Recommendation:** The stale-bot tagging without maintainer response creates a "ghost town" perception. Consider reducing stale threshold or adding maintainer triage labels before auto-tagging.

---

*Digest generated from GitHub activity 2026-05-17. All links: https://github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-18

## 1. Today's Overview

NanoClaw showed **high community velocity** with 30 tracked items updated in the last 24 hours (10 issues, 20 PRs), split evenly between open/active and resolved work. The project is in an active **bug-fixing and stabilization phase** with no new releases cut. A significant portion of activity centers on the CLI tooling (`ncl groups *` commands) and container runtime security, suggesting v2 deployment friction is the dominant operational theme. Cross-referencing patterns indicate the team is responding rapidly to production blockers, with multiple same-day PRs landing for issues opened within 24-48 hours.

---

## 2. Releases

**No new releases** — None published.

---

## 3. Project Progress

### Merged/Closed PRs (10 total)

| PR | Author | Summary | Significance |
|:---|:---|:---|:---|
| [#2510](https://github.com/nanocoai/nanoclaw/pull/2510) | glifocat | CLI: hydrate receiver `inbound.db` on approval-path `destinations add` | Fixes silent destination wiring failure after admin approval |
| [#2469](https://github.com/nanocoai/nanoclaw/pull/2469) | dwudwu | WhatsApp: correct recovery guidance for decrypt failures and 401 logout | Operator UX improvement for Signal session corruption |
| [#2524](https://github.com/nanocoai/nanoclaw/pull/2524) | dkroetz | `chore: latest` | Routine maintenance |
| [#2519](https://github.com/nanocoai/nanoclaw/pull/2519) | mayur-tolexo | `Platform m1` | Apple Silicon platform support |
| [#2487](https://github.com/nanocoai/nanoclaw/pull/2487) | zoryon-dev | Finance Plan 3 PR 2 — Levis behavior (skill template) | Continues finance reform template work |
| [#2486](https://github.com/nanocoai/nanoclaw/pull/2486) | zoryon-dev | Finance Plan 3 PR 1 — schema + bootstrap (skill template) | Foundation for finance skill system |
| [#2481](https://github.com/nanocoai/nanoclaw/pull/2481) | zoryon-dev | Fix cron self-suppression across all agents | **Critical fix**: crons were running but output dropped/silenced |
| [#2476](https://github.com/nanocoai/nanoclaw/pull/2476) | andrefogelman | `Feat/restart no nanoclaw` | Operational restart workflow |
| [#2470](https://github.com/nanocoai/nanoclaw/pull/2470) | tier2tech-tian | CLI mode: interactive quota alternative to Agent SDK | Major architecture path for quota-constrained deployments |
| [#2209](https://github.com/nanocoai/nanoclaw/pull/2209) | cfis | Fix orphan-claim delete missed in tests (regression from #2183) | Test coverage repair |

**Key advances**: Cron reliability restored after silent failure mode; CLI approval-flow destination wiring fixed; finance skill template framework bootstrapped; Chinese-language contributor added CLI-mode alternative to Agent SDK for quota management.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | Analysis |
|:---|:---|:---|:---|
| 1 | [#2404](https://github.com/nanocoai/nanoclaw/issues/2404) Double delivery when `send_message` MCP tool + `<message>` block used together | 2 comments | **Architectural tension**: MCP server runs as separate subprocess from poll loop, causing dual output paths. Underlying need: deterministic single-channel message routing when multiple emission mechanisms exist. |
| 2 | [#2525](https://github.com/nanocoai/nanoclaw/issues/2525) `ncl groups delete` fails with `FOREIGN KEY constraint failed` | 1 comment | **Data integrity gap**: CLI CRUD lacks transactional cascade. Underlying need: safe group lifecycle management in production with dependent entities. |
| 3 | [#2386](https://github.com/nanocoai/nanoclaw/issues/2386) UUID generation violates OneCLI identifier rules | 1 comment | **Integration contract drift**: CLI generates IDs incompatible with downstream OneCLI validation. Underlying need: unified identifier schema across toolchain. |

### Emerging High-Interest (0 comments but same-day PR response)

- [#2528](https://github.com/nanocoai/nanoclaw/issues/2528) Signal image/PDF attachments unreachable from agent container → PR [#2529](https://github.com/nanocoai/nanoclaw/pull/2529) opened same day by same author (brentkearney), indicating active self-service contributor community.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|:---|:---|:---|:---|:---|
| **🔴 Critical** | [#2520](https://github.com/nanocoai/nanoclaw/issues/2520) Signal key material leaked to logs | **OPEN** | None yet | `privKey`/`rootKey`/`chainKey` buffers from `libsignal-node` `SessionEntry` dumped to `nanoclaw.log` on WhatsApp session close. **Security regression** — cryptographic material exposure in persistent logs. |
| **🔴 Critical** | [#2525](https://github.com/nanocoai/nanoclaw/issues/2525) `ncl groups delete` foreign key failure | **OPEN** | [#2526](https://github.com/nanocoai/nanoclaw/pull/2526) ready | Any non-trivial group deletion crashes; no cascade cleanup. |
| **🟡 High** | [#2404](https://github.com/nanocoai/nanoclaw/issues/2404) Double message delivery | **OPEN** | None yet | Race between MCP tool and XML block output paths. |
| **🟡 High** | [#2528](https://github.com/nanocoai/nanoclaw/issues/2528) Signal attachments unreachable from containers | **OPEN** | [#2529](https://github.com/nanocoai/nanoclaw/pull/2529) ready | Host-path references not resolvable inside container namespace; base64 inlining proposed. |
| **🟡 High** | [#2522](https://github.com/nanocoai/nanoclaw/issues/2522) Telegram approval cards fail to deliver | **OPEN** | [#2523](https://github.com/nanocoai/nanoclaw/pull/2523) ready | `transformOutboundText` skipped on `ask_question` + card paths; Markdown sanitization bypassed. |
| **🟡 High** | [#2415](https://github.com/nanocoai/nanoclaw/issues/2415) `ncl groups create` skips `container_configs` row | **OPEN** | None yet | First spawn fails with "Container config not found"; incomplete insert logic. |
| **🟢 Medium** | [#2386](https://github.com/nanocoai/nanoclaw/issues/2386) UUID format violates OneCLI rules | **OPEN** | None yet | Generated identifiers rejected by downstream system. |

**Stability assessment**: Two critical security/integrity issues unpatched (log leak, group deletion). However, **fix velocity is strong** — 4 of 6 high-severity issues have same-day or pending PRs. The CLI surface (`ncl groups *`, `ncl destinations *`) is the most fragile subsystem.

---

## 6. Feature Requests & Roadmap Signals

| PR/Issue | Signal | Likelihood in Next Release |
|:---|:---|:---|
| [#2518](https://github.com/nanocoai/nanoclaw/pull/2518) Codex provider addition | **Multi-provider strategy** — Codex CLI alongside Claude; isolated state/auth per provider | High — self-contained, documented, follows existing pattern |
| [#2521](https://github.com/nanocoai/nanoclaw/pull/2521) Add `from-channel`/`from-type` to XML attributes | **Observability/monitoring** — multi-channel operators need origin metadata for external dashboards | Medium — small surface, clear use case |
| [#2208](https://github.com/nanocoai/nanoclaw/pull/2208) HTTP and SSE MCP server transports | **MCP ecosystem expansion** — move beyond stdio to network transports | Medium — architectural, needs review bandwidth |
| [#2470](https://github.com/nanocoai/nanoclaw/pull/2470) CLI mode with interactive quota | **Cost/operational control** — Agent SDK quota exhaustion mitigation | Medium — significant for Chinese-market/price-sensitive users |
| [#2517](https://github.com/nanocoai/nanoclaw/issues/2517) MGA unarchive-on-reference + GC | **Lifecycle management** — archived groups still referenced by MGA rows | Medium — data integrity feature |

**Predicted next version themes**: Multi-provider support (Codex), CLI hardening (cascades, validation), container attachment handling (base64 inlining pattern).

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **v2 container runtime friction** | [#2528](https://github.com/nanocoai/nanoclaw/issues/2528), [#2527](https://github.com/nanocoai/nanoclaw/pull/2527), [#2415](https://github.com/nanocoai/nanoclaw/issues/2415) | High — permissions, paths, configs all have gaps between host and container |
| **CLI data integrity** | [#2525](https://github.com/nanocoai/nanoclaw/issues/2525), [#2415](https://github.com/nanocoai/nanoclaw/issues/2415), [#2386](https://github.com/nanocoai/nanoclaw/issues/2386), [#2465](https://github.com/nanocoai/nanoclaw/issues/2465) | High — CRUD operations incomplete or violate constraints |
| **Signal/WhatsApp operational reliability** | [#2520](https://github.com/nanocoai/nanoclaw/issues/2520), [#2469](https://github.com/nanocoai/nanoclaw/pull/2469), [#2512](https://github.com/nanocoai/nanoclaw/issues/2512) | Medium — session management, network discovery, key handling |
| **Message routing determinism** | [#2404](https://github.com/nanocoai/nanoclaw/issues/2404), [#2522](https://github.com/nanocoai/nanoclaw/issues/2522) | Medium — dual paths, missed transforms |

### Use Cases Emerging

- **Multi-channel monitoring dashboards** ([#2521](https://github.com/nanocoai/nanoclaw/pull/2521)) — operators running Telegram + Discord need structured metadata
- **Apple Silicon deployment** ([#2519](https://github.com/nanocoai/nanoclaw/pull/2519)) — M1 Macs as host platforms
- **Quota-conscious operation** ([#2470](https://github.com/nanocoai/nanoclaw/pull/2470)) — interactive CLI mode to bypass Agent SDK billing

### Satisfaction Signals

- **Rapid self-service**: brentkearney opened [#2528](https://github.com/nanocoai/nanoclaw/issues/2528) and PR [#2529](https://github.com/nanocoai/nanoclaw/pull/2529) same day — mature contributor pattern
- **Same-day fix velocity**: [#2525](https://github.com/nanocoai/nanoclaw/issues/2525) → [#2526](https://github.com/nanocoai/nanoclaw/pull/2526) within hours

---

## 8. Backlog Watch

| Item | Age | Risk | Needs |
|:---|:---|:---|:---|
| [#2208](https://github.com/nanocoai/nanoclaw/pull/2208) HTTP/SSE MCP transports | 15 days | **Architectural review** | Maintainer decision on transport abstraction design; blocks MCP ecosystem growth |
| [#2230](https://github.com/nanocoai/nanoclaw/pull/2230) Rootless Podman `keep-id` mapping | 15 days | **Container security** | Security review for rootless container user namespace handling |
| [#2349](https://github.com/nanocoai/nanoclaw/pull/2349) Tolerate missing `path` in mount allowlist | 10 days | **Defensive programming** | Edge-case hardening; low conflict risk, easy merge |
| [#2184](https://github.com/nanocoai/nanoclaw/pull/2184) Retry on stale session instead of error display | 16 days | **UX polish** | Poll-loop reliability; may need rebase after recent changes |
| [#2404](https://github.com/nanocoai/nanoclaw/issues/2404) Double delivery MCP vs XML | 8 days | **Core routing logic** | Architectural decision on MCP/legacy block coexistence; no PR yet |

**Maintainer attention recommended**: The MCP transport PR ([#2208](https://github.com/nanocoai/nanoclaw/pull/2208)) is the longest-running significant feature, potentially blocking contributor momentum. The double-delivery issue ([#2404](https://github.com/nanocoai/nanoclaw/issues/2404)) needs architectural guidance on whether to deduplicate at transport layer or deprecate one path.

---

*Digest generated from 30 items (10 issues, 20 PRs) updated 2026-05-17 to 2026-05-18.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-18

## 1. Today's Overview

NullClaw shows **minimal surface activity** with 3 issues updated in the past 24 hours and zero pull request or release activity. All three active issues remain open, suggesting either a backlog accumulation or maintainer bandwidth constraints. The project appears to be in a **stability-focused phase** rather than feature development, with bug reports concentrated on core infrastructure: memory management, subagent communication, and scheduler authorization. No community engagement (comments, reactions) on the two most recent issues indicates either niche impact or insufficient visibility. Overall project health reads as **stable but potentially understaffed** for issue resolution velocity.

---

## 2. Releases

**No new releases.** The project has no published release history in the tracked period.

---

## 3. Project Progress

**No merged or closed PRs today.** Zero pull request activity indicates no code changes landed in the main branch during this period. Feature advancement is stalled pending contributor or maintainer action on the reported bugs.

---

## 4. Community Hot Topics

| Issue | Activity | Analysis |
|-------|----------|----------|
| [#915 [bug] Problem with scheduler unauthorized](https://github.com/nullclaw/nullclaw/issues/915) | 1 comment, 0 👍 | **Most discussed.** Authorization failure in scheduler when using external Ollama host. Underlying need: **robust multi-host deployment support** — users expect seamless scheduler operation across network boundaries without auth complexity. |
| [#918 spawn tool results never delivered to Telegram (bus=null in channel_loop)](https://github.com/nullclaw/nullclaw/issues/918) | 0 comments, 0 👍 | Silent failure pattern in subagent→Telegram pipeline. Underlying need: **reliable async task result delivery** with proper error surfacing rather than silent drops. |
| [#917 memory_list tool always passes session_id, making global entries invisible](https://github.com/nullclaw/nullclaw/issues/917) | 0 comments, 0 👍 | Design oversight in memory scope handling. Underlying need: **intentional memory scoping** — users want global vs. session-local memory as a deliberate architectural feature. |

**Community engagement is low** — only one comment across all three issues suggests either: (a) user base is small/technical, (b) issues are recently filed and haven't attracted attention, or (c) maintainers haven't triaged to drive discussion.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#918](https://github.com/nullclaw/nullclaw/issues/918) — spawn tool results silently lost | Open, root cause identified (`channel_loop.zig:1296`, `SubagentManager` initialized with `bus=null`) | **None** |
| **High** | [#915](https://github.com/nullclaw/nullclaw/issues/915) — scheduler unauthorized failure | Open, external Ollama host configuration | **None** |
| **Medium** | [#917](https://github.com/nullclaw/nullclaw/issues/917) — memory_list filters out global entries | Open, behavioral design bug | **None** |

**Critical pattern:** Two of three bugs involve **cross-component communication failures** (scheduler↔auth, subagent↔Telegram bus). The `bus=null` initialization in #918 suggests a **regression or incomplete implementation** in the Zig-based channel loop. No fix PRs exist for any reported issue.

---

## 6. Feature Requests & Roadmap Signals

No explicit feature requests filed today. However, inferred roadmap signals from bug patterns:

| Implied Need | Likelihood in Next Version | Rationale |
|--------------|---------------------------|-----------|
| **Configurable memory scope (global vs. session)** | High | #917 is a clear behavioral bug with straightforward fix; aligns with core memory architecture |
| **Subagent result delivery reliability** | High | #918 has identified root cause; likely quick fix once prioritized |
| **External LLM host auth flexibility** | Medium | #915 requires scheduler auth flow redesign; may need architectural decision |
| **Better error visibility for silent failures** | Medium-High | Both #915 and #918 involve failures without clear user-facing errors |

**Prediction:** Memory scope fix (#917) and subagent bus initialization (#918) are most likely to land first due to bounded scope and identified fixes.

---

## 7. User Feedback Summary

| Pain Point | Source | User Profile |
|------------|--------|--------------|
| **Silent failures are unacceptable** | #918 | Power user (weissfl) — identifies exact line in Zig source, expects production reliability |
| **External host deployment friction** | #915 | Self-hoster (scabros) — Ubuntu + local RTX 3090 + Ollama, wants "it just works" experience |
| **Memory architecture opacity** | #917 | Power user (weissfl) — understands `session_id=NULL` semantics, expects tool to respect them |

**Satisfaction:** LLM and basic tool calling "works mostly fine" (#915) — core value proposition is functional.

**Dissatisfaction:** Infrastructure edge cases (networked hosts, subagent async, memory scoping) reveal **maturation gaps** in a system users want to deploy seriously. Users are **technically sophisticated** (file Zig line numbers, understand NULL semantics) but encountering **friction at deployment scale**.

---

## 8. Backlog Watch

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#915](https://github.com/nullclaw/nullclaw/issues/915) | 3 days (created 2026-05-15) | Moderate — blocks external Ollama scheduler use | Maintainer triage: reproduce with external host config; decide auth flow fix |
| [#917](https://github.com/nullclaw/nullclaw/issues/917), [#918](https://github.com/nullclaw/nullclaw/issues/918) | 1 day | Low (fresh) but related | Batch review with #915? All three touch core runtime (Zig channel loop, memory backend, scheduler) — possible **coordinated fix window** |

**Emerging concern:** Three bugs in 48 hours all touch **core infrastructure components** written in Zig. This may indicate: (a) recent refactoring introduced regressions, (b) growing user adoption stress-testing edge cases, or (c) insufficient test coverage for multi-host/multi-session scenarios. Maintainer attention to this cluster is recommended before additional users hit similar paths.

---

*Digest generated from github.com/nullclaw/nullclaw data as of 2026-05-18.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-18

## 1. Today's Overview

IronClaw shows **elevated but uneven activity** with 45 PR updates and 9 new issues in the last 24 hours, though zero releases. The project is experiencing significant **regression pain in the v0.28.2 release** across both TEE and non-TEE environments, with a cluster of Gmail tool installation/authentication bugs dominating issue reports. On the development front, the "Reborn" architectural initiative continues aggressive refactoring with composition root consolidation, boot configuration files, and runtime surface changes landing. However, **no PR reached merge-ready status today**—all 14 "merged/closed" PRs appear to be earlier closures with trailing activity, suggesting a potential review bottleneck. The nightly E2E suite remains broken for 8 consecutive days.

---

## 2. Releases

**No new releases.** The latest production version remains v0.28.2, which is actively exhibiting regressions (see Bugs & Stability).

---

## 3. Project Progress

### Merged/Closed PRs (Trailing Activity)

| PR | Status | Significance |
|---|---|---|
| [#3695](https://github.com/nearai/ironclaw/pull/3695) — `arch(reborn): consolidate composition root, narrow public surface, ship live binary` | **CLOSED** | Major Reborn milestone: `ironclaw_reborn_composition` promoted to composition root, live `ironclaw-reborn` binary shipped, public API surface narrowed with boundary tests. Follow-up tracking in [#3726](https://github.com/nearai/ironclaw/issues/3726). |
| [#3723](https://github.com/nearai/ironclaw/pull/3723) — `[codex] replace agent-loop planning docs` | **CLOSED** | Documentation cleanup: removed legacy planning skeletons, added concise CLAUDE.md guidance across agent-loop framework. |
| [#3131](https://github.com/nearai/ironclaw/pull/3131) — `Add Trace Commons client to Reborn` | **CLOSED** | Trace Commons client for opt-in telemetry contribution landed earlier; activity reflects final integration. |

### Active Development (Open PRs with Recent Updates)

| PR | Focus Area |
|---|---|
| [#3737](https://github.com/nearai/ironclaw/pull/3737) | **IronHub marketplace**: Runtime tool/skill installation from CLI and agent-callable tools—major ecosystem expansion |
| [#3704](https://github.com/nearai/ironclaw/pull/3704) | Reborn boot config (`config.toml` + `providers.json`) for standalone binary |
| [#3703](https://github.com/nearai/ironclaw/pull/3703) | Future-proofing `RebornRuntime` for Configuration-as-Code epic [#3036](https://github.com/nearai/ironclaw/issues/3036) |
| [#3722](https://github.com/nearai/ironclaw/pull/3722) | Provider tool-call metadata preservation through Reborn loop |
| [#3681](https://github.com/nearai/ironclaw/pull/3681) | First-party HTTP egress tool for Reborn extensions |

---

## 4. Community Hot Topics

**Most Significant by Impact:**

| Item | Link | Analysis |
|---|---|---|
| **IronHub Runtime Installation (#3737)** | [PR #3737](https://github.com/nearai/ironclaw/pull/3737) | XL-sized feature enabling agents to install tools at runtime, not just build time. HMAC-verified deployment gateway. **Strategic signal**: IronClaw positioning as platform, not just runtime. |
| **Reborn Architecture Consolidation (#3695 → #3726)** | [Issue #3726](https://github.com/nearai/ironclaw/issues/3726) | Technical debt tracking for composition crate split. Maintainer `serrrfirat` self-filed follow-up—indicates mature code review discipline but also complexity management challenge. |
| **Hooks Framework (#3573 and successors)** | [PR #3573](https://github.com/nearai/ironclaw/pull/3573), [#3633](https://github.com/nearai/ironclaw/pull/3633), [#3634](https://github.com/nearai/ironclaw/pull/3634), [#3637](https://github.com/nearai/ironclaw/pull/3637), [#3640](https://github.com/nearai/ironclaw/pull/3640) | Five interlinked PRs building policy hooks, WASM sandboxing, event triggers. **All drafts**—suggests large architectural bet with unclear delivery timeline. |

**Underlying Need**: The community (and core team) is pushing toward **production-grade governance** (hooks, gates, audit trails) while simultaneously struggling with **basic UX stability** in released versions. Tension between "platform ambition" and "release quality" is palpable.

---

## 5. Bugs & Stability

**Critical Pattern: v0.28.2 Regression Cluster + Gmail Auth Breakage**

| Severity | Issue | Link | Details | Fix PR? |
|---|---|---|---|---|
| **High** | Provider config UI missing API Key/Fetch controls (non-TEE v0.28.2) | [#3734](https://github.com/nearai/ironclaw/issues/3734) | Regression from v0.28.1; breaks provider setup workflow | **None identified** |
| **High** | Unconfigured providers show "Use" button in TEE agents | [#3736](https://github.com/nearai/ironclaw/issues/3736) | May mislead users into selecting non-functional providers | **None identified** |
| **High** | Nightly E2E failing (8+ days) | [#3447](https://github.com/nearai/ironclaw/issues/3447) | `v2-engine` suite failing; commit `b921b42` | **None identified** |
| **Medium** | Invalid Gmail token shows success toast | [#3733](https://github.com/nearai/ironclaw/issues/3733) | False positive activation; immediately re-prompts | **None identified** |
| **Medium** | Gmail auth UI inconsistency (OAuth vs. manual token) | [#3732](https://github.com/nearai/ironclaw/issues/3732) | Race or state bug in auth gate rendering | **None identified** |
| **Medium** | Chat re-prompts `tool_install(gmail)` after approval | [#3731](https://github.com/nearai/ironclaw/issues/3731) | Install state not respected in conversation context | **None identified** |
| **Medium** | Failed `tool_install` calls display as success after refresh | [#3729](https://github.com/nearai/ironclaw/issues/3729) | Frontend state desync with backend reality | **None identified** |
| **Medium** | Denying `tool_install` re-prompts, then asks to approve | [#3728](https://github.com/nearai/ironclaw/issues/3728) | Poor denial handling; ignores explicit user intent | **None identified** |

**All 8 bugs filed by single user `sunglow666`** — possible concentrated QA effort or power user hitting edge cases. No fix PRs linked to any issue. **Immediate action needed**: v0.28.2 appears unfit for production use with Gmail tools.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version |
|---|---|---|
| **Runtime tool installation from marketplace** | [PR #3737](https://github.com/nearai/ironclaw/pull/3737) | High — actively developed, XL scope nearly complete |
| **Configuration-as-Code (tenant blueprints)** | [PR #3703](https://github.com/nearai/ironclaw/pull/3703), epic [#3036](https://github.com/nearai/ironclaw/issues/3036) | Medium — substrate preparation in progress |
| **WASM-sandboxed hooks** | [PR #3634](https://github.com/nearai/ironclaw/pull/3634) | Low — draft scope doc only |
| **Event-triggered async hooks** | [PR #3640](https://github.com/nearai/ironclaw/pull/3640) | Low — draft scope doc only |
| **Production gate-ref factory** | [PR #3633](https://github.com/nearai/ironclaw/pull/3633) | Medium — critical for production hooks adoption |
| **Personal context gating by run profile** | [PR #3721](https://github.com/nearai/ironclaw/pull/3721) | High — M-sized, low risk, privacy compliance enabler |

---

## 7. User Feedback Summary

**Explicit Pain Points (from `sunglow666`'s bug reports):**

| Theme | Evidence | Severity |
|---|---|---|
| **Gmail tool UX is broken end-to-end** | 5 interrelated bugs covering install, auth, denial, state persistence, UI consistency | Critical workflow blocker |
| **False success states** | #3733, #3729 — system lies about success, eroding trust | Trust erosion |
| **Ignored user denials** | #3728 — explicit "no" is overridden | Autonomy violation |
| **Version regression anxiety** | #3734, #3736 — v0.28.2 broke what v0.28.1 had working | Upgrade hesitation |

**Implicit Signal**: The concentration of bugs in "tool installation → authentication → state management" suggests this is a **novel interaction pattern** (agents installing tools at runtime) with immature edge case handling. The product is innovating faster than its error paths.

**No positive feedback or feature requests visible in today's data** — all issues are bug reports.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|---|---|---|---|
| **Nightly E2E failure #3447** | 8 days | **Critical** — merge gate likely broken | Investigate `v2-engine` suite; may be blocking releases |
| **Dependency update PRs (#3361, #3456, #3360, #3247)** | 10-13 days | Medium | 43+ dependency updates pending; security exposure if delayed |
| **Hooks framework PRs (5 drafts)** | 4-5 days | Medium | Convert scope docs to implementation or close; risk of architectural drift |

**Maintainer Attention Required**: 
- `sunglow666`'s 8 unacknowledged bugs need triage and fix assignment
- E2E suite ownership unclear — bot-filed, no human response
- Large dependency backlog suggests CI or review bandwidth constraint

---

## Project Health Assessment

| Dimension | Score | Note |
|---|---|---|
| Development velocity | ⚠️ Moderate | Many PRs open, few merging |
| Release stability | 🔴 Poor | v0.28.2 actively regressed |
| Issue responsiveness | 🔴 Poor | 8 bugs, 0 responses, 0 fix PRs |
| Architectural momentum | 🟢 Strong | Reborn, hooks, IronHub all advancing |
| Test reliability | 🔴 Broken | Nightly E2E failing 8 days |

**Recommendation**: Pause feature development for Reborn/hooks to stabilize v0.28.2 and restore E2E confidence before next release.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-18

## 1. Today's Overview

LobsterAI shows **minimal active development momentum** with zero new issues and no releases in the past 24 hours. The project exhibits a pattern of **stale PR accumulation**—all 9 PRs updated today were last modified on 2026-05-17 with no fresh activity, suggesting automated batch updates (likely dependency bot runs or maintainer bulk-triaging) rather than genuine code review progress. Seven PRs remain open with ages ranging from 54–55 days, indicating a significant review backlog. The two closed PRs were merged without recent discussion, pointing to possible maintainer-driven consolidation rather than community-driven iteration. Overall project health appears **maintenance-mode**: no breaking issues, but also no forward velocity on user-facing features.

---

## 2. Releases

**None** — No new releases published.

---

## 3. Project Progress

### Merged/Closed PRs (2 items)

| PR | Description | Significance |
|:---|:---|:---|
| [#812](https://github.com/netease-youdao/LobsterAI/pull/812) | **perf(sqlite): debounce save() and cache getConfig()** — Addresses Electron main thread blocking from synchronous SQLite writes by implementing 500ms debounced async writes and config caching | **Critical performance fix** for desktop responsiveness; resolves #562. Reduces ~11-13 sync writes per streaming turn to one async operation. **Merged but stale since March.** |
| [#871](https://github.com/netease-youdao/LobsterAI/pull/871) | **feat(skills): skill execution statistics dashboard** — Parses OpenClaw session JSONL data to compute per-Skill call metrics with modal UI in SkillsManager | **User-facing analytics feature**; improves Skill authoring feedback loop. **Merged but stale since March.** |

**Assessment:** Both closed PRs represent meaningful improvements (performance + observability) but were merged 7+ weeks ago with no follow-up release, suggesting **release pipeline stagnation**.

---

## 4. Community Hot Topics

**No genuinely active discussions exist** — all PRs show `Comments: undefined` and `👍: 0`, indicating zero community engagement. However, by **technical significance and user impact**, these PRs warrant attention:

| PR | Topic | Underlying Need |
|:---|:---|:---|
| [#762](https://github.com/netease-youdao/LobsterAI/pull/762) | Auto-detect API format (OpenAI vs Anthropic compatible) for DeepSeek/Zhipu/MiniMax | **Reducing configuration friction** for non-technical users; addresses proliferation of incompatible LLM provider formats |
| [#768](https://github.com/netease-youdao/LobsterAI/pull/768) | Opik observability integration via OpenClaw plugin architecture | **Production readiness** — users need tracing/debugging for agent execution; extensible design anticipates LangFuse/LangSmith demand |
| [#771](https://github.com/netease-youdao/LobsterAI/pull/771) | Image thumbnail previews in cowork/attachment UI | **Rich media handling** — current plaintext pill design is UX-debt for multimodal workflows |

**Pattern:** Contributors are addressing real platform-ecosystem pain points (LLM format fragmentation, observability gaps, UI polish), but **maintainer review bandwidth is the bottleneck**.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|:---|:---|:---|:---|
| **High** | [#788](https://github.com/netease-youdao/LobsterAI/pull/788) | **Scheduled task duplication on restart** — SQLite→OpenClaw migration lacks idempotency; transient gateway errors cause duplicate task creation | **Fix PR open, stale** |
| **Medium** | [#783](https://github.com/netease-youdao/LobsterAI/pull/783) | **Input area truncation at bottom** — UI layout bug cutting off message composition | **Fix PR open, stale** |
| **Medium** | [#787](https://github.com/netease-youdao/LobsterAI/pull/787) | **Theme service memory leak** — Missing destroy method leaves media query listeners active | **Fix PR open, stale** |
| **Low (resolved)** | [#812](https://github.com/netease-youdao/LobsterAI/pull/812) | SQLite main thread blocking (see §3) | **Merged** |

**Critical concern:** The scheduled task duplication bug (#788) affects data integrity and could cascade into resource exhaustion; the fix PR has been ignored for 54 days.

---

## 6. Feature Requests & Roadmap Signals

| Signal | PR | Likelihood in Next Release |
|:---|:---|:---|
| **Provider-agnostic API auto-detection** | [#762](https://github.com/netease-youdao/LobsterAI/pull/762) | High — Low risk, high UX value, aligns with supporting Chinese model ecosystem (DeepSeek/Zhipu/MiniMax) |
| **Observability infrastructure** | [#768](https://github.com/netease-youdao/LobsterAI/pull/768) | Medium — Strategic for enterprise adoption; plugin architecture shows forward-thinking design |
| **Skill analytics** | [#871](https://github.com/netease-youdao/LobsterAI/pull/871) | Already merged; **blocked on release cut** |
| **Performance (rendering)** | [#770](https://github.com/netease-youdao/LobsterAI/pull/770) | High — React.memo is low-risk, addresses streaming performance regression |

**Predicted next version focus:** If maintainers resume active development, expect **#762** (auto-detection) and **#770** (memoization) as quick wins, plus the already-merged #812/#871 requiring release packaging.

---

## 7. User Feedback Summary

**Inferred pain points from PR descriptions (no direct issue commentary available):**

| Pain Point | Evidence | User Segment |
|:---|:---|:---|
| **LLM provider configuration complexity** | #762 explicitly states users "easily make mistakes" choosing API formats | Non-technical end users |
| **Desktop app unresponsiveness during streaming** | #812 documents ~11-13 sync writes blocking main thread per turn | All desktop users |
| **Poor multimodal attachment UX** | #771 redesigns "plain text pills" as inadequate for images | Power users, collaborative workflows |
| **No visibility into Skill performance** | #871 adds analytics because authors currently lack execution data | Skill developers |
| **Attachment preview limitations** | #771 — no image thumbnails in current build | Content-heavy workflows |

**Satisfaction gap:** Features exist in PRs to address all major pain points, but **users cannot access them due to release stagnation**.

---

## 8. Backlog Watch

**Critical PRs requiring maintainer intervention (>50 days stale, high impact):**

| PR | Age | Risk of Decay | Action Needed |
|:---|:---|:---|:---|
| [#788](https://github.com/netease-youdao/LobsterAI/pull/788) | 54 days | **High** — Migration logic may conflict with newer schema changes; data corruption bug | Urgent review/merge |
| [#762](https://github.com/netease-youdao/LobsterAI/pull/762) | 55 days | Medium — API format landscape evolving; auto-detection heuristics may need refresh | Review, possible rebase |
| [#768](https://github.com/netease-youdao/LobsterAI/pull/768) | 55 days | Medium — Opik plugin version (0.2.9) may have updates; dependency drift | Review, version bump check |
| [#770](https://github.com/netease-youdao/LobsterAI/pull/770) | 55 days | Low — React.memo is stable pattern; low merge conflict risk | Quick win — merge |
| [#771](https://github.com/netease-youdao/LobsterAI/pull/771) | 55 days | Medium — UI PRs accumulate visual conflicts with other changes | Design review, merge |
| [#783](https://github.com/netease-youdao/LobsterAI/pull/783) | 54 days | Low — CSS fix, isolated scope | Quick win — merge |
| [#787](https://github.com/netease-youdao/LobsterAI/pull/787) | 54 days | Low — Memory leak fix, isolated | Quick win — merge |

**Recommendation:** The project would benefit from a **maintainer sprint** prioritizing #788 (data integrity), batch-merging low-risk fixes (#770, #783, #787), and scheduling a release to ship already-merged work (#812, #871).

---

*Digest generated from github.com/netease-youdao/LobsterAI data as of 2026-05-18.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-18

## 1. Today's Overview

Moltis shows **moderate development velocity** with 3 PRs closed and 2 new bug reports filed in the last 24 hours. The project is actively shipping infrastructure features—particularly around remote access and external agent integrations—while accumulating technical debt in configuration handling and model-specific parsing. Release cadence remains steady with a daily build (`20260517.03`). Notably, all PR activity converged on a single contributor (`penso`), suggesting either concentrated expertise or potential bus-factor risk. The simultaneous closure of NetBird/Cloudflare Tunnel PRs and their onboarding follow-up indicates a coordinated feature rollout completing its final integration phase.

---

## 2. Releases

| Version | Date | Notes |
|---------|------|-------|
| [`20260517.03`](https://github.com/moltis-org/moltis/releases/tag/20260517.03) | 2026-05-17 | Daily build; no detailed changelog provided in release metadata |

*No breaking changes or migration notes documented in available data.*

---

## 3. Project Progress

### Merged/Closed PRs (3 items)

| PR | Title | Author | Status | Key Advancement |
|---|-------|--------|--------|---------------|
| [#1008](https://github.com/moltis-org/moltis/pull/1008) | Add NetBird and Cloudflare Tunnel to onboarding | `penso` | **Closed** | UX completion: onboarding UI now exposes new remote access options with E2E test coverage |
| [#566](https://github.com/moltis-org/moltis/pull/566) | feat(external-agents): add persistent agent sessions | `penso` | **Closed** | **Major capability**: Moltis chat sessions can now maintain stateful attachment to external agents (ACP, Codex CLI, Claude Code resume) |
| [#1002](https://github.com/moltis-org/moltis/pull/1002) | feat(remote-access): add NetBird and Cloudflare Tunnel support | `penso` | **Closed** | **Infrastructure expansion**: Private mesh networking (NetBird) + managed tunneling (Cloudflare) with full CLI/REST/runtime integration |

**Feature Trajectory:** Remote access infrastructure is now feature-complete for four providers (Tailscale, ngrok, NetBird, Cloudflare). External agent persistence represents a strategic pivot toward Moltis as an *orchestration layer* for disparate AI coding tools, not just a standalone agent.

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|------|-----------|----------|
| [#1007](https://github.com/moltis-org/moltis/issues/1007) — Gemma-4-31b-it `<thought>` parsing | 0 comments, 0 👍 | **Emerging model compatibility gap**: Google's new reasoning model format not recognized by Moltis's parser. Underlying need: **standardized reasoning block detection** as model vendors diverge on tagging conventions (`<think>`, `<thought>`, etc.) |
| [#1006](https://github.com/moltis-org/moltis/issues/1006) — VoiceCoquiTtsConfig auto-compact stripping | 0 comments, 0 👍 | **Configuration system fragility**: "Auto-compact" optimization aggressively removes fields it deems default, breaking voice TTS setups. Underlying need: **preservation semantics for explicitly-set defaults** vs. inferred defaults |

*Neither issue has attracted community discussion yet—both filed by `maop` (likely core team member doing QA), suggesting these are internally-discovered regressions rather than user-reported pain points.*

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Medium** | [#1007](https://github.com/moltis-org/moltis/issues/1007) | Reasoning tags rendered as raw text degrades UX for thinking models; may also affect token counting/context window calculations | ❌ None yet |
| **Medium** | [#1006](https://github.com/moltis-org/moltis/issues/1006) | Config "disappearance" breaks voice synthesis pipelines after restart/compaction cycle; workaround likely requires manual config editing | ❌ None yet |

**Stability Assessment:** No critical crashes or data loss reported. Both bugs represent **correctness failures in abstraction layers** (parsing, serialization) rather than fundamental architectural issues. The config compaction bug pattern suggests a systemic risk: other config domains may be similarly affected.

---

## 6. Feature Requests & Roadmap Signals

**Inferred from merged PRs (no explicit feature requests in today's data):**

| Signal | Likely Near-Term Priority |
|--------|--------------------------|
| Persistent external-agent sessions (#566) | **Production hardening**: Error recovery, reconnection logic, session migration between Moltis instances |
| NetBird/Cloudflare support (#1002, #1008) | **Performance optimization**: Connection pooling, latency metrics, bandwidth-aware routing |
| Four remote access providers now supported | **Unified abstraction**: Provider-agnostic "remote workspace" concept with automatic failover? |

**Predicted for next version:** Session export/import for external agent bindings; reasoning tag standardization framework (pluggable parsers for `<think>`, `<thought>`, `<reasoning>`, etc.).

---

## 7. User Feedback Summary

**Direct user feedback:** *Absent from today's data*—all issues/PRs by `maop` and `penso` (core contributors).

**Inferred pain points from bug patterns:**

| Pain Point | Evidence | User Impact |
|-----------|----------|-------------|
| Model compatibility lag | #1007 | Early adopters of new models (Gemma 4) get degraded experience |
| Configuration unpredictability | #1006 | TTS/voice users lose settings silently; trust erosion in "it just works" promise |
| Remote access complexity | #1002, #1008 onboarding | Users likely struggled with manual NetBird/Cloudflare setup before first-class support |

**Satisfaction/dissatisfaction:** Infrastructure expansion suggests confidence in core architecture; however, the *rate* of config/parsing bugs may indicate insufficient integration testing across the expanding surface area.

---

## 8. Backlog Watch

| Risk Item | Age | Concern |
|-----------|-----|---------|
| [#566](https://github.com/moltis-org/moltis/pull/566) — persistent agent sessions | ~6 weeks open → closed 2026-05-17 | Long development cycle for cross-turn session state; may indicate complexity in gateway API design or lifecycle edge cases. **Now resolved, but monitor for follow-up stability issues.** |

**No long-unanswered critical issues identified in today's data.** However, the concentration of all activity on `penso` suggests **reviewer bottleneck**—PRs #1002 and #1008 were rapid-fire closures (May 15 → May 17), possibly indicating:
- Pre-reviewed batch merges
- Reduced review rigor for "known good" infrastructure code
- Risk of undetected defects in complex networking code (NetBird TCP forwarder, Cloudflare WebAuthn handling)

**Recommended maintainer attention:** Post-merge audit of #1002's `cloudflared` runtime controller and #566's session unbinding logic for resource leaks.

---

*Digest generated from GitHub activity 2026-05-17 → 2026-05-18. Data source: moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-18

## 1. Today's Overview

CoPaw (QwenPaw) shows **elevated community activity** with 18 issues and 16 PRs updated in the last 24 hours, though no new release was cut. The project is in an **intensive quality assurance and testing phase**, with hanson-hex driving a major E2E testing milestone (6 related issues/PRs opened). However, **stability concerns are mounting**: multiple users report chat unresponsiveness ("three dots" hanging) in v1.1.7, and a critical security vulnerability (unauthorized RCE in plugin interface) was disclosed without an immediate fix. The contributor base remains active with first-time contributors advancing desktop support and platform-specific fixes.

---

## 2. Releases

**No new releases** — None published.

---

## 3. Project Progress

### Merged/Closed PRs Today (4 items)

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| #4466 | hanson-hex | **Security unit tests Phase 0-1**: 481 tests, 89% coverage for `security` module (tool_guard + skill_scanner); upgraded to L1 hard gate in CI | [PR #4466](https://github.com/agentscope-ai/QwenPaw/pull/4466) |
| #3605 | celestialhorse51D | **WeChat data migration refactor**: Centralized legacy `weixin` → `wechat` migrations on workspace startup, removed runtime fallback hacks | [PR #3605](https://github.com/agentscope-ai/QwenPaw/pull/3605) |
| #1669 | saltapp | **Workspace path fix**: Resolved "loading..." bug from incorrect path separator handling (Windows-affected) | [PR #1669](https://github.com/agentscope-ai/QwenPaw/pull/1669) |
| #1661 | saltapp | **Memory file fix**: Agent-specific daily memory files now correctly fetched by agent ID instead of global APIs | [PR #1661](https://github.com/agentscope-ai/QwenPaw/pull/1661) |

### Advancing Features (Open PRs with recent activity)

| PR | Author | Status | Link |
|:---|:---|:---|:---|
| #4467 | hanson-hex | **Phase 1+2 unit tests**: 967 tests, 89% security coverage — builds on closed #4466 | [PR #4467](https://github.com/agentscope-ai/QwenPaw/pull/4467) |
| #4464 | hanson-hex | **E2E migration**: `python_e2e` → `CoPaw/e2e/` with mock infrastructure | [PR #4464](https://github.com/agentscope-ai/QwenPaw/pull/4464) |
| #3452 | vvv214 | **LLM routing UI**: Console settings + chat selector (blocked on backend PR #3550) | [PR #3452](https://github.com/agentscope-ai/QwenPaw/pull/3452) |
| #4471 | ekzhu | **html-video-demo skill**: New built-in skill for UI choreography timelines (en+zh) | [PR #4471](https://github.com/agentscope-ai/QwenPaw/pull/4471) |
| #4444 | joe2643 | **xAI/Grok integration**: OAuth + chat provider + image/video tools | [PR #4444](https://github.com/agentscope-ai/QwenPaw/pull/4444) |
| #4433 | yuanxs21 | **Token usage visibility**: Per-turn usage in console header + markdown | [PR #4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) |
| #4465 | suntp | **Cached token estimation**: Reuses provider-reported prompt usage | [PR #4465](https://github.com/agentscope-ai/QwenPaw/pull/4465) |

---

## 4. Community Hot Topics

### Most Active Discussions

| Rank | Issue/PR | Comments | 🔍 Analysis |
|:---|:---|:---|:---|
| 1 | **#2291** [Help Wanted: Open Tasks](https://github.com/agentscope-ai/QwenPaw/issues/2291) | **61 comments** | Long-running contribution onboarding hub. Sustained activity indicates healthy contributor funnel but also suggests task coordination overhead. P0-P2 priority system in use. |
| 2 | **#2684** [Ubuntu install startup error](https://github.com/agentscope-ai/QwenPaw/issues/2684) | 7 comments | Installation friction on Ubuntu with Python 3.12 + websockets deprecation warnings. Signals packaging/dependency hygiene debt. |
| 3 | **#3640** [MCP client TaskGroup hang](https://github.com/agentscope-ai/QwenPaw/issues/3640) | 7 comments | **Critical stability issue**: Agent "fake death" — unresponsive but no error. Self-diagnosed by agent. Suggests async task lifecycle management gaps in MCP integration. |
| 4 | **#4453** / **#4469** [Chat window no response](https://github.com/agentscope-ai/QwenPaw/issues/4453) / [duplicate](https://github.com/agentscope-ai/QwenPaw/issues/4469) | 6 + 5 comments | **Emerging critical pattern**: Multiple users hitting identical "three dots" hang in v1.1.7. Persists across model switches, Docker restarts, version rollbacks. Points to core backend event loop or provider handler regression. |

### Underlying Needs
- **Reliability over features**: Users need chat stability as baseline; recurring hangs undermine trust
- **Better diagnostics**: "No response" bugs lack actionable error surfaces (event loop stopped before Future completed)
- **Installation robustness**: Script-based install still fragile across Python versions

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? | Link |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | **#4470** | **Unauthorized RCE in plugin interface** (security vulnerability) | **None** | [Issue #4470](https://github.com/agentscope-ai/QwenPaw/issues/4470) |
| 🔴 **Critical** | **#4453** / **#4469** | Chat window hangs ("three dots") — v1.1.7 regression, persists across restarts/rollbacks | **None** | [#4453](https://github.com/agentscope-ai/QwenPaw/issues/4453), [#4469](https://github.com/agentscope-ai/QwenPaw/issues/4469) |
| 🔴 **Critical** | **#4454** | `/mission` command freezes Console completely | **None** | [Issue #4454](https://github.com/agentscope-ai/QwenPaw/issues/4454) |
| 🟡 **High** | **#3640** | MCP TaskGroup exception → agent unresponsive (no error thrown) | **None** | [Issue #3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) |
| 🟡 **High** | **#3854** | chromadb Rust binding segfault (SIGSEGV) kills entire process — 45+ times/session | **None** | [Issue #3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) |
| 🟡 **High** | **#4468** | "Operation LLM execution too frequent" — 300s rate limit hit unexpectedly | **None** | [Issue #4468](https://github.com/agentscope-ai/QwenPaw/issues/4468) |
| 🟢 **Medium** | **#2684** | Ubuntu install startup error (websockets deprecation) | **None** | [Issue #2684](https://github.com/agentscope-ai/QwenPaw/issues/2684) |

**Stability Assessment**: ⚠️ **Degraded**. Three critical bugs in v1.1.7 with no fixes yet. The chat hang cluster (#4453/#4469) suggests a release-blocking regression. The RCE vulnerability (#4470) requires immediate security response.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Feature | Predicted Version | Confidence | Link |
|:---|:---|:---|:---|:---|
| #4472 | CLI migration: `click` → `typer` (colors, type annotations) | v1.2.x | Medium | [Issue #4472](https://github.com/agentscope-ai/QwenPaw/issues/4472) |
| #4455 | Multiple external skill paths via config | v1.2.x | High | [Issue #4455](https://github.com/agentscope-ai/QwenPaw/issues/4455) |
| #4463 / #4465 | Cached context token estimation | v1.1.8 or v1.2.0 | **High** | [#4463](https://github.com/agentscope-ai/QwenPaw/issues/4463), [#4465](https://github.com/agentscope-ai/QwenPaw/pull/4465) |
| #4433 | Token usage visibility in conversations | v1.1.8 | **High** | [PR #4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) |
| #4444 | xAI/Grok provider + OAuth | v1.2.0 | Medium | [PR #4444](https://github.com/agentscope-ai/QwenPaw/pull/4444) |
| #3813 | Tauri 2.x desktop app | v1.2.0+ | Medium | [PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) |
| #4041 | Windows system tray startup | v1.2.0+ (win32 first) | Medium | [PR #4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) |
| #3452 | LLM routing UI | After #3550 backend | Medium | [PR #3452](https://github.com/agentscope-ai/QwenPaw/pull/3452) |

**Testing infrastructure** (hanson-hex's E2E milestone) is being built to support v1.2.0 quality gates, suggesting a major release is planned with desktop + routing + multi-provider features.

---

## 7. User Feedback Summary

### Pain Points 😤

| Theme | Evidence | Intensity |
|:---|:---|:---|
| **Chat unresponsiveness** | #4453, #4469, #3640, #4454 — "three dots", freezes, fake death | 🔥🔥🔥 **Severe** |
| **Installation failures** | #2684 — Ubuntu script install breaks on Python 3.12 | 🔥🔥 High |
| **Opaque errors** | Event loop stopped, no stack trace, self-diagnosis required | 🔥🔥 High |
| **Rate limiting confusion** | #4468 — 300s cooldown without clear cause | 🔥 Medium |
| **Process crashes** | #3854 — chromadb segfault kills everything | 🔥🔥 High |

### Use Cases & Satisfaction

| Positive Signals | Negative Signals |
|:---|:---|
| Active console usage (#4453 user tried multiple models, Docker, rollbacks before reporting) | Frustration with "restart to fix" as only workaround |
| Agent self-diagnosis capability noted (#3640) | Mission feature completely unusable (#4454) |
| Desire for desktop/long-running agents (#4041) | Security vulnerability undermines plugin trust |

**Verdict**: Users are **engaged but losing patience** with stability. The effort users expend before reporting (multiple debugging steps) indicates high investment, but tolerance is thinning.

---

## 8. Backlog Watch

### Needs Maintainer Attention 🚨

| Issue/PR | Age | Risk | Action Needed | Link |
|:---|:---|:---|:---|:---|
| **#4470 RCE vulnerability** | 1 day | **Security incident** | Immediate triage, CVE assessment, hotfix plan | [Issue #4470](https://github.com/agentscope-ai/QwenPaw/issues/4470) |
| **#4453/#4469 chat hangs** | 1-2 days | **Release blocker** | Reproduce, bisect v1.1.7 regression, emergency patch | [#4453](https://github.com/agentscope-ai/QwenPaw/issues/4453), [#4469](https://github.com/agentscope-ai/QwenPaw/issues/4469) |
| #2291 Open Tasks | ~8 weeks | Contributor coordination | Refresh P0 assignments, close stale claims | [Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) |
| #2684 Ubuntu install | ~7 weeks | Onboarding friction | Validate on Python 3.12, update install script | [Issue #2684](https://github.com/agentscope-ai/QwenPaw/issues/2684) |
| #3640 MCP hang | ~4 weeks | Core reliability | Async task group lifecycle audit | [Issue #3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) |
| #3854 chromadb segfault | ~3 weeks | Data layer stability | Isolate Rust binding, add graceful fallback | [Issue #3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) |
| #3813 Tauri desktop | ~3 weeks | Major feature | Review for v1.2.0 roadmap alignment | [PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) |
| #2771 mlx-lm restriction | ~7 weeks | Platform correctness | Merge for non-Apple Silicon safety | [PR #2771](https://github.com/agentscope-ai/QwenPaw/pull/2771) |

---

**Project Health Score**: 🟡 **Caution** — Strong engineering investment in testing and features, but **v1.1.7 stability crisis and unpatched RCE** require immediate leadership response before v1.2.0 advancement.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-18

---

## 1. Today's Overview

ZeroClaw shows **elevated maintenance activity** with 50 PRs and 20 issues updated in the last 24 hours, though no new releases were cut. The project is in a **stabilization phase** with heavy focus on provider compatibility fixes (DeepSeek, Qwen, Xiaomi/mimo, Kimi), CI workflow repairs, and cron timezone consistency. A notable risk remains the bulk revert of 153 commits from March (#6074) that continues to shadow the codebase, with recovery efforts still tracked. The high ratio of open PRs (39/50) suggests review bandwidth may be a bottleneck.

---

## 2. Releases

**None** — No new releases published today.

---

## 3. Project Progress

### Closed Today

| PR/Issue | Description | Link |
|----------|-------------|------|
| #5994 | **Official Website + E2E Documentation** — Feature request closed (medium risk, docs enhancement) | [Issue #5994](https://github.com/zeroclaw-labs/zeroclaw/issues/5994) |
| #6431 | **SQLite memory schema concurrent startup failure** — Fixed and closed | [Issue #6431](https://github.com/zeroclaw-labs/zeroclaw/issues/6431) |
| #6548 | **Channel runtime localization bypass** — Fixed, Fluent localization now covers command replies | [Issue #6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) |
| #6705 | **Cron Windows spawn error** — Fixed, hardcoded `sh` replaced with RuntimeAdapter-aware execution | [Issue #6705](https://github.com/zeroclaw-labs/zeroclaw/issues/6705) |
| #6710 | **Desktop Windows/Linux support** — Closed (large PR, high risk, manual verification required) | [PR #6710](https://github.com/zeroclaw-labs/zeroclaw/pull/6710) |

### Significant Open PRs Advancing

| PR | Description | Link |
|----|-------------|------|
| #6752 | **PR-title workflow unblocked** — Replaces blocked GitHub Action with inline bash regex | [PR #6752](https://github.com/zeroclaw-labs/zeroclaw/pull/6752) |
| #6740, #6741 | **Cron timezone contract alignment** — Schema, scheduler, and API consistency fixes | [PR #6740](https://github.com/zeroclaw-labs/zeroclaw/pull/6740), [PR #6741](https://github.com/zeroclaw-labs/zeroclaw/pull/6741) |
| #6743 | **Skip unresolvable multimodal images** — Recovers behavior lost in #6074 revert | [PR #6743](https://github.com/zeroclaw-labs/zeroclaw/pull/6743) |
| #6746 | **Plugin install/discovery path alignment** — Closes #6254, fixes path resolution | [PR #6746](https://github.com/zeroclaw-labs/zeroclaw/pull/6746) |
| #6706 | **WhatsApp protocol parity** — Restores April 2026 protocol compatibility | [PR #6706](https://github.com/zeroclaw-labs/zeroclaw/pull/6706) |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | 👍 | Analysis |
|------|------|----------|-----|----------|
| 1 | [#6059 — DeepSeek-V4 API incompatibility](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | 9 | 4 | **Critical provider drift**: DeepSeek's thinking mode API format changed; ZeroClaw's provider layer fails to parse `reasoning_content`. Indicates broader need for provider-agnostic reasoning abstraction. |
| 2 | [#5600 — Kimi-code streaming tool-call error](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | 9 | 1 | **S1 workflow blocked**: Same root cause as #6059/#6672 — `reasoning_content` handling in streaming paths. Suggests systematic gap in "thinking mode" providers. |
| 3 | [#6672 — Xiaomi mimo reasoning_content lost in loops](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) | 3 | 0 | **S0 data loss**: Agentic tool-call loops drop reasoning state. Confirms pattern: thinking-mode providers are broken across the board. |

### Underlying Community Need

The cluster of **#6059, #5600, #6672** reveals a **systemic architecture gap**: ZeroClaw lacks a unified `reasoning_content` lifecycle manager. Each provider (DeepSeek, Kimi, Xiaomi/mimo, likely others) implements thinking mode differently, and the agent loop doesn't preserve reasoning state across turns. This is becoming a **compatibility blocker** for the entire "reasoning model" category.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Description |
|----------|-------|--------|---------|-------------|
| **S0** — Data loss / Security | [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) | Open, in-progress | No | `reasoning_content` dropped in agentic loops (Xiaomi mimo) |
| **S0** — Data loss / Security | [#6747](https://github.com/zeroclaw-labs/zeroclaw/issues/6747) | Open | **#6752** | `amannn/action-semantic-pull-request` blocked by allowlist |
| **S1** — Workflow blocked | [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | Open | No | Kimi-code streaming tool calls fail |
| **S1** — Workflow blocked | [#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721) | Open, accepted | No | `tool_search` not in `default_auto_approve` → 120s hang + auto-deny |
| **S2** — Degraded | [#6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) | Open, in-progress | No | DeepSeek-V4 API format incompatibility |
| **S2** — Degraded | [#6739](https://github.com/zeroclaw-labs/zeroclaw/issues/6739) | Open, accepted | **#6740, #6741** | Cron timezone contract inconsistent |
| **S2** — Degraded | [#6734](https://github.com/zeroclaw-labs/zeroclaw/issues/6734) | Open, in-progress | No | Qwen 3.6 tool-call envelopes leak to Matrix |
| **S2** — Degraded | [#6733](https://github.com/zeroclaw-labs/zeroclaw/issues/6733) | Open, in-progress | No | Matrix draft state race condition (room-only keying) |
| **S2** — Degraded | [#6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723) | Open, accepted | No | OpenAI provider hardcodes 120s timeout, ignores config |

### Regressions from #6074 Bulk Revert

The March 2026 bulk revert (#6074) continues to cause **silent feature loss**. PRs #6743 (multimodal image skipping) and ongoing recovery work indicate ~153 commits remain partially unrestored. This is a **long-tail stability risk**.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Signal | Likelihood in v0.7.6+ |
|----------|--------|----------------------|
| [#6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) — Skills UX tracker (v0.7.6) | **Confirmed roadmap item** | High — explicit release theme |
| [#6714](https://github.com/zeroclaw-labs/zeroclaw/issues/6714) — Remove remote-markdown-link audit block | Skill marketplace friction | Medium — needs maintainer review |
| [#6742](https://github.com/zeroclaw-labs/zeroclaw/issues/6742) — Streaming payload tracing tests | Observability infrastructure | High — PR #6744 already open |
| [#6636](https://github.com/zeroclaw-labs/zeroclaw/pull/6636) — Agent browser headed config | Desktop/headful automation | Medium — closes #6241 |
| [#6666](https://github.com/zeroclaw-labs/zeroclaw/pull/6666) — Separate IMAP/SMTP credentials | Email channel enterprise readiness | Medium |

### Predicted Next Version Priorities

Based on open P1s and accepted status:
1. **Thinking mode provider abstraction** (forced by #6059/#5600/#6672 cluster)
2. **Skills system hardening** (v0.7.6 theme)
3. **Cron subsystem stabilization** (#6740/#6741 nearly complete)
4. **Plugin path rationalization** (#6746)

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Provider compatibility fragility** | DeepSeek, Kimi, Qwen, Xiaomi, OpenRouter all have active breakages | Critical |
| **Silent config ignored** | `timeout_secs`, `rerank_enabled`, `context_aware_tools` all parse but don't apply | High |
| **Windows second-class support** | Cron spawn errors, snapshot TTL, desktop parity gaps | Medium-High |
| **Approval system hangs non-interactive flows** | `tool_search` 120s timeout in webhook mode | High |

### Use Cases Emerging

- **Enterprise email**: Separate IMAP/SMTP credentials (#6666) suggests production email automation
- **Multi-platform desktop**: Windows/Linux demand confirmed by #6710 activity
- **Reasoning model integration**: Users actively trying to use thinking-mode models as primary agents

---

## 8. Backlog Watch

### Needs Maintainer Attention (High Risk, Stagnant or Blocked)

| Item | Age | Blocker | Action Needed |
|------|-----|---------|---------------|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) — 153 commits lost in bulk revert | ~7 weeks | Risk assessment | **Decision required**: automated recovery vs. manual cherry-pick prioritization |
| [#6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721) — `tool_search` auto-approve gap | 2 days | Design decision | Add to `default_auto_approve()` or special-case deferred loading path |
| [#6722](https://github.com/zeroclaw-labs/zeroclaw/issues/6722) — Dead config fields | 2 days | Product decision | Implement rerank or remove from schema to prevent user confusion |
| [#6720](https://github.com/zeroclaw-labs/zeroclaw/issues/6720) — `context_aware_tools` dead code | 2 days | Product decision | Same as above — implement or deprecate |
| [#6714](https://github.com/zeroclaw-labs/zeroclaw/issues/6714) — Skill audit false positives | 2 days | Maintainer review | Rule adjustment or removal blocking marketplace adoption |

### Review Bandwidth Signal

39 open PRs vs. 11 merged/closed suggests **~78% PR backlog**. The CI fix (#6752) and cron fixes (#6740/#6741) are ready-to-merge quality and would build maintainer-community trust if fast-tracked.

---

*Digest generated from GitHub activity 2026-05-17 to 2026-05-18. All links reference `https://github.com/zeroclaw-labs/zeroclaw`.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*