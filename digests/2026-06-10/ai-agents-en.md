# OpenClaw Ecosystem Digest 2026-06-10

> Issues: 452 | PRs: 497 | Projects covered: 13 | Generated: 2026-06-10 00:30 UTC

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

# OpenClaw Project Digest — 2026-06-10

---

## 1. Today's Overview

OpenClaw shows **extremely high development velocity** with 452 issues and 497 PRs updated in the last 24 hours, indicating a mature but rapidly evolving project approaching a critical release cycle. The project released **v2026.6.5** and a beta, suggesting stabilization efforts for the June milestone. However, **70% of PRs remain open (353/497)** and **69% of issues are still active (315/452)**, pointing to potential backlog strain. Security and message-delivery reliability dominate community concerns, with multiple P1-rated issues around channel leaks, session stalls, and auth regressions. The project appears to be in a **quality-hardening phase** rather than feature expansion.

---

## 2. Releases

### [v2026.6.5](https://github.com/openclaw/openclaw/releases/tag/v2026.6.5) — Stable Release
### [v2026.6.5-beta.6](https://github.com/openclaw/openclaw/releases/tag/v2026.6.5-beta.6) — Beta Release

**Highlights:**
- **QQBot reasoning content sanitization**: Strips model `<thinking>` scaffolding before delivery to QQ channels, preventing raw reasoning traces from leaking to users ([#89913](https://github.com/openclaw/openclaw/issues/89913), [#90132](https://github.com/openclaw/openclaw/issues/90132)) — thanks @openperf
- **MCP tool result coercion**: Expands type handling for `resource_link`, `resource`, `audio`, malformed images, and future novel content types in MCP tool outputs

**Assessment**: Both releases share identical changelogs, suggesting beta.6 was a release candidate that graduated to stable without additional changes. No breaking changes or migration notes were provided. The QQBot fix addresses a **privacy/UX regression** that had cross-platform parallels (see Discord leak issues below).

---

## 3. Project Progress

### Closed PRs Today (Selected)

| PR | Description | Significance |
|---|---|---|
| [#91787](https://github.com/openclaw/openclaw/pull/91787) | TTS legacy migration path hardening | Prevents config corruption on unsupported TTS schema locations |
| [#91757](https://github.com/openclaw/openclaw/pull/91757) | Retired skill-workshop plugin warning clarification | UX improvement, directs users to current `skills.workshop` commands |
| [#91750](https://github.com/openclaw/openclaw/pull/91750) | Native web search tool policy enforcement | **Security-critical**: Gates Codex/OpenAI native `web_search` through full policy layer |
| [#91780](https://github.com/openclaw/openclaw/pull/91780) | Restored chat queue draining after session switch | Fixes message duplication/loss in Web UI |

### Advanced Features (Open PRs Ready for Merge)

| PR | Description | Status |
|---|---|---|
| [#88800](https://github.com/openclaw/openclaw/pull/88800) | Secret reference hardening — keeps generated secrets out of plaintext | 👀 Ready for maintainer look |
| [#87893](https://github.com/openclaw/openclaw/pull/87893) | Auth profile stale runtime selection repair | 👀 Ready — **P1, XL size** |
| [#91783](https://github.com/openclaw/openclaw/pull/91783) | iMessage outbound send transport hardening | 👀 Ready — separates watch/send RPC clients |
| [#91786](https://github.com/openclaw/openclaw/pull/91786) | Plugin npm root override reconciliation | 👀 Ready — fixes 2026.6.5 regression |

---

## 4. Community Hot Topics

### Most Active Issues (by Comments)

| # | Issue | Comments | Rating | Core Need |
|---|-------|----------|--------|-----------|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | Text between tool calls leaks to messaging channels | 29 | 🦞 Diamond Lobster | **Privacy/UX boundary control** — internal processing must not reach users |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | Codex app-server turn-completion stall regression | 15 | 🐚 Platinum Hermit | **Reliability** — multi-tool agent runs failing on OpenAI Codex |
| [#87307](https://github.com/openclaw/openclaw/issues/87307) | Matrix thread replies regression | 14 | 🦐 Gold Shrimp | **Channel protocol correctness** — threading semantics broken |
| [#54253](https://github.com/openclaw/openclaw/issues/54253) | RISC-V64 LLM request failures | 13 | 🦪 Silver Shellfish | **Platform portability** — architecture-specific provider issues |
| [#53628](https://github.com/openclaw/openclaw/issues/53628) | `$XDG_CONFIG_HOME` not processed in skill install | 13 | 🦞 Diamond Lobster | **Standards compliance** — XDG Base Directory spec support |

### Underlying Needs Analysis

- **Message boundary enforcement** (#25592, #44905, #54531): Users demand strict separation between agent internal processing and channel-visible output. This is a **trust-critical** requirement for production deployments.
- **Session state reliability** (#88312, #87307, #48003): Multi-turn conversation integrity across different backends (Codex, Matrix, Telegram) is fragile.
- **Platform diversity**: RISC-V support (#54253) and Docker sandboxing (#31331) indicate enterprise/self-hosted deployment scenarios.

---

## 5. Bugs & Stability

### P1 Severity (Production-Blocking)

| Issue | Description | Fix PR? | Risk |
|-------|-------------|---------|------|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | Tool-call interstitial text leaks to channels | No new fix PR | 🔴 **Security + message-loss** |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | Codex turn-completion stall (regression of #84076) | No new fix PR | 🔴 **Session-state loss** |
| [#87307](https://github.com/openclaw/openclaw/issues/87307) | Matrix thread replies → normal replies; /status, /model silent | No new fix PR | 🔴 **Message-loss + UX** |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer mode fails to inject messages mid-turn | Linked PR open | 🔴 **Session-state** |
| [#54531](https://github.com/openclaw/openclaw/issues/54531) | Force reply to originating channel fails (Telegram/Discord/WhatsApp) | Linked PR open | 🔴 **Security + message-loss** |
| [#44905](https://github.com/openclaw/openclaw/issues/44905) | Discord leaks internal tool-call traces | Linked PR open | 🔴 **Security** |
| [#86599](https://github.com/openclaw/openclaw/issues/86599) | ~~Local model blocks gateway event loop on Windows~~ | **CLOSED today** | ~~🔴 **Crash-loop**~~ |
| [#86996](https://github.com/openclaw/openclaw/issues/86996) | Active Memory + Codex path: latency, timeouts, stalls | Needs live repro | 🔴 **Performance + crash-loop** |
| [#89315](https://github.com/openclaw/openclaw/issues/89315) | Gateway heap unbounded growth → OOM kill | Needs live repro | 🔴 **Availability** |
| [#84569](https://github.com/openclaw/openclaw/issues/84569) | WhatsApp stalls on long model_call, never delivers reply | No new fix PR | 🔴 **Message-loss** |
| [#76233](https://github.com/openclaw/openclaw/issues/76233) | exec-approval-followup races runtime disposal → UNAVAILABLE | No new fix PR | 🔴 **Session-state** |
| [#40611](https://github.com/openclaw/openclaw/issues/40611) | Heartbeat drift fix blocks Telegram during conversations | Linked PR open | 🔴 **Message-loss** |
| [#53599](https://github.com/openclaw/openclaw/issues/53599) | Chrome extension browser relay removed, no cross-machine replacement | No new fix PR | 🔴 **Regression — hosting provider breakage** |

### Regressions in Current Cycle

- **Codex app-server**: #88312 marks the **second regression** of turn-completion stalls (#84076 → #85107 fix → #88312 re-regression). Suggests insufficient test coverage for multi-tool Codex paths.
- **Chrome extension relay**: #53599 — removal of cross-machine browser automation without migration path breaks managed hosting providers.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version | Rationale |
|-------|---------|---------------------------|-----------|
| [#42840](https://github.com/openclaw/openclaw/issues/42840) | MathJax/LaTeX in Control UI | Medium | 6 👍, clear educational/scientific use case; UI-isolated |
| [#52640](https://github.com/openclaw/openclaw/issues/52640) | Persistent task-status surface for long-running turns | Medium | Discord-first, generic abstraction later; aligns with heartbeat/steer mode work |
| [#53638](https://github.com/openclaw/openclaw/issues/53638) | Per-channel/group/DM model override | Medium | 2 👍, configuration granularity trend; PR #85505 touches related auth granularity |
| [#56110](https://github.com/openclaw/openclaw/issues/56110) | Auto-load `STATE.md` for post-compaction recovery | High | References Anthropic research; directly addresses compaction data-loss pain |
| [#55249](https://github.com/openclaw/openclaw/issues/55249) | Session labels/nicknames | Low | UX polish, no urgency signals |
| [#54794](https://github.com/openclaw/openclaw/issues/54794) | Telegram Inline Query support | Low | 1 👍, protocol-specific, complex |

**Emerging Theme**: Context provenance and recovery (#54373, #56110) suggests the project is moving toward **long-running agent persistence** — agents that survive compaction, session resets, and multi-day operations.

---

## 7. User Feedback Summary

### Pain Points (Explicit)

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Message leaks / privacy violations** | #25592, #44905, #54531, #39406 | Critical — "internal processing output" visible to users |
| **Silent failures / message loss** | #87307, #84569, #48003, #40611 | Critical — users never receive replies |
| **Session state fragility** | #88312, #86996, #76233, #53540 | High — context loss, stalled turns |
| **Memory/performance degradation** | #89315, #86599 | High — OOM kills, 4-minute infer runs |
| **Configuration portability** | #54253 (RISC-V), #53628 (XDG), #44599 (whitespace in paths) | Medium — deployment friction |
| **Docker sandboxing broken** | #31331 | Medium — enterprise/self-hosted blocker |

### Satisfaction Signals

- Active community contribution: @openperf credited in release notes for QQBot fix
- Users filing detailed reproductions with environment specs (e.g., #89315's kernel version, Node version)
- Issue rating system (🦞/🐚/🦐/🦪/🌊) suggests engaged maintainers with prioritization framework

### Dissatisfaction Signals

- **"Stale" label prevalence**: Many high-rated issues (#25592, #53628, #54531, #44905) carry `clawsweeper:no-new-fix-pr` + `clawsweeper:needs-maintainer-review` + `clawsweeper:needs-product-decision` — indicates **decision bottlenecks**
- Regression pattern: Codex stall fixed then re-broken; Chrome extension removed without replacement
- Chinese-language issue (#55694) about infinite retry loops suggests international user base with limited maintainer language coverage

---

## 8. Backlog Watch

### Critical Issues Needing Maintainer Decision (Multi-Label Blocked)

| Issue | Age | Blockers | Risk if Unaddressed |
|-------|-----|----------|---------------------|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 106 days | needs-maintainer-review, needs-product-decision, needs-security-review, source-repro, linked-pr-open | **Trust erosion** — message boundary failures are showstoppers for enterprise adoption |
| [#54531](https://github.com/openclaw/openclaw/issues/54531) | 77 days | Same as above | Channel reliability core competency at risk |
| [#44905](https://github.com/openclaw/openclaw/issues/44905) | 89 days | Same as above | Discord specifically leaking tool JSON — security incident potential |
| [#53628](https://github.com/openclaw/openclaw/issues/53628) | 78 days | fix-shape-clear, needs-product-decision | XDG compliance — Linux desktop standard |
| [#31331](https://github.com/openclaw/openclaw/issues/31331) | 100 days | needs-security-review, linked-pr-open | Docker sandboxing fundamentally broken for DooD |

### PRs Ready for Merge but Stalled

| PR | Size | Status | Risk of Staleness |
|----|------|--------|-----------------|
| [#87893](https://github.com/openclaw/openclaw/pull/87893) | XL | 👀 Ready for maintainer look | Auth regression — affects all new sessions |
| [#88800](https://github.com/openclaw/openclaw/pull/88800) | M | 👀 Ready | Secret plaintext exposure |
| [#89835](https://github.com/openclaw/openclaw/pull/89835) | XL | 📣 Needs proof | Stacks on #89629 — dependency chain risk |

### Recommendation

The **"clawsweeper" triage system** appears to be creating decision debt. Issues with 5+ blocking labels and 70+ day ages suggest either:
1. Insufficient maintainer bandwidth for product/security review
2. Deliberate deferral pending architectural changes

Either case warrants explicit communication to prevent contributor burnout and user attrition.

---

*Digest generated from GitHub activity 2026-06-09 to 2026-06-10. All links reference github.com/openclaw/openclaw.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem
*Date: 2026-06-10*

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source ecosystem is experiencing intense diversification, with at least 12 active projects spanning reference implementations (OpenClaw), lightweight alternatives (NanoBot, NullClaw), enterprise-focused platforms (IronClaw, ZeroClaw), and hardware-integrated solutions (PicoClaw). The space is maturing from single-model chat wrappers toward multi-agent orchestration, persistent memory systems, and enterprise-grade security boundaries. However, most projects struggle with production reliability—context compaction bugs, message boundary leaks, and provider compatibility regressions are endemic across the ecosystem, suggesting the industry is still in a "build fast, stabilize later" phase.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* | Notes |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 452 | 497 | v2026.6.5 stable + beta | 🟡 Strained | 70% PR backlog, 69% issue backlog; quality-hardening phase |
| **NanoBot** | 6 | 23 | None | 🟢 Healthy | 52% merge rate; responsive maintainer triage |
| **Hermes Agent** | 50 | 50 | None | 🟡 Strained | 92% PR backlog; same-day fixes for P1s but review bottleneck |
| **PicoClaw** | 20 | 20 | v0.2.9-nightly only | 🔴 Critical | 11 CVEs disclosed today; security response mode |
| **NanoClaw** | 1 | 43 | None | 🟢 Stable | Bulk maintenance event; 91% closure rate on historical PRs |
| **NullClaw** | 5 | 7 | None | 🟢 Healthy | 91% resolution rate; tight contributor base |
| **IronClaw** | 47 | 50 | None | 🟡 Strained | "Reborn" migration; zero releases despite heavy dev |
| **LobsterAI** | 2 | 5 | None | 🟢 Moderate | Feature experimentation; low volume but focused |
| **CoPaw (QwenPaw)** | 33 | 34 | v1.1.11-beta.2 | 🟡 Strained | AgentScope 2.0 migration pending; Windows/Desktop debt |
| **ZeroClaw** | 50 | 50 | v0.8.0-beta-1 | 🔴 Critical | 98% PR backlog; 5 S1 bugs unaddressed |
| **TinyClaw** | 0 | 0 | None | ⚪ Dormant | No activity |
| **Moltis** | 0 | 0 | None | ⚪ Dormant | No activity |
| **ZeptoClaw** | 0 | 0 | None | ⚪ Dormant | No activity |

*\*Health Score: 🟢 Healthy = responsive triage, manageable backlog; 🟡 Strained = active but accumulation risk; 🔴 Critical = security or stability crisis; ⚪ Dormant = no recent activity*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Peers |
|:---|:---|:---|
| **Scale** | 452 issues/497 PRs in 24h = 10× nearest active competitor | NanoBot: 6/23; Hermes: 50/50 |
| **Release velocity** | v2026.6.5 stable shipped; monthly cadence | Most peers: no releases in 30+ days |
| **Platform breadth** | 15+ messaging channels (QQ, Discord, Telegram, Matrix, iMessage, WhatsApp) | ZeroClaw expanding fastest (SMS/social); NanoBot focused on WebUI + few channels |
| **MCP ecosystem** | Native tool result coercion, resource types | Hermes has delegate tools; others lag |
| **Triage infrastructure** | "Clawsweeper" label system (despite decision debt) | Ad hoc or absent |

### Technical Approach Differences
- **OpenClaw**: Monolithic Python/Node runtime with channel adapters, heavy emphasis on message boundary enforcement and session state machine correctness
- **NanoBot**: Lighter weight; "Dream" autonomous memory system; skill-based customization; Lit+Vite WebUI
- **Hermes Agent**: Desktop-first (macOS launchd integration); profile-scoped memory; gateway-centric architecture
- **IronClaw**: Rust-based "Reborn" rewrite; blockchain integration (NEAR); enterprise multi-tenancy
- **ZeroClaw**: Channel-agnostic routing engine; per-turn `send_via` controls; home automation focus

### Community Size Comparison
OpenClaw's issue/PR volume suggests **5,000–15,000 active users** (estimated from GitHub activity ratios), vs. **500–2,000** for NanoBot/Hermes/CoPaw, and **<500** for NullClaw/LobsterAI. Only ZeroClaw approaches OpenClaw's volume but with far lower merge throughput.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Message boundary enforcement** | OpenClaw (#25592, #44905), NanoBot (#4259), Hermes (#43083) | Prevent internal tool traces/thinking from leaking to users; strict separation of agent processing vs. channel output |
| **Context compaction without data loss** | OpenClaw (#88312), NanoBot (#4264), Hermes (#43067), ZeroClaw (#5808) | Preserve user corrections, maintain turn integrity, avoid merging distinct user messages |
| **Provider compatibility layer** | OpenClaw (Codex, QQBot), NanoBot (GPT-5.x, StepFun), IronClaw (DeepSeek, Minimax), CoPaw (Qwen, MiniMax) | Parameter naming (`max_tokens` vs. `max_completion_tokens`), tool-call format (structured vs. text), temperature/reasoning model filtering |
| **Persistent memory / long-running agents** | OpenClaw (#56110), NanoBot (Dream identity), Hermes (Honcho/mem0), IronClaw (Trace Commons) | Cross-session isolation, post-compaction recovery, autonomous memory editing controls |
| **Security hardening** | **All projects**, especially PicoClaw (11 CVEs), NanoClaw (#2722 CSPRNG), OpenClaw (secret ref hardening) | SSRF guards, sandbox escapes, credential redaction, deterministic policy enforcement vs. prompt-based |
| **Multi-agent orchestration** | LobsterAI (#2132), IronClaw (subagent gates), ZeroClaw (Agent Collaboration Bus closed), Hermes (delegate_task) | Cross-model handoffs, parent-child state survival, observable delegation chains |
| **Human-in-the-loop / approvals** | OpenClaw (exec-approval), NanoClaw (#1245), IronClaw (#4613), ZeroClaw | Persistent policies, per-skill permissions, inline UI for approvals |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Reference implementation; maximum channel coverage | Power users, self-hosters, multi-platform operators | Monolithic with adapter pattern; Python/Node hybrid |
| **NanoBot** | "Dream" autonomous memory; skill marketplace; low resource | Individual developers, WebUI-first users | Lightweight; Lit+Vite frontend; skill-as-customization |
| **Hermes Agent** | Desktop-native; macOS integration; model routing | Creative professionals, local-first users | Rust + Tauri; gateway-per-profile; launchd services |
| **PicoClaw** | Hardware-integrated (Sipeed); embedded deployment | IoT/edge, hardware hackers | Go-based; minimal footprint; universal messaging bridge |
| **NanoClaw** | Claude-centric; deterministic security policy; observability | Security-conscious enterprises | Docker-optional; direct runner mode; policy engine |
| **NullClaw** | Zig runtime; cross-instance memory; Telegram-first | Minimalist self-hosters, performance-focused | Zig; event-stream architecture; provider gateway abstraction |
| **IronClaw** | Blockchain integration (NEAR); enterprise multi-tenancy | Crypto-native orgs, compliance-heavy enterprises | Rust "Reborn"; TEE narrative; audit hooks |
| **LobsterAI** | Cowork session orchestration; notification-native | Team collaboration, async workflows | Electron/Tauri desktop; session-spawn architecture |
| **CoPaw** | Qwen ecosystem integration; Chinese localization | China-market users, Alibaba Cloud customers | AgentScope backend; Tauri desktop; OpenSandbox |
| **ZeroClaw** | Channel-agnostic routing; home automation; SMS | Prosumers, smart home integrators | Elixir/BEAM-inspired?; per-turn routing; cron-heavy |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Velocity, High Risk)
| Project | Characteristics | Risk |
|:---|:---|:---|
| **OpenClaw** | 900+ items/day; monthly releases; security/quality focus | Decision debt from clawsweeper triage; 70% open PR rate |
| **IronClaw** | 100 items/day; "Reborn" rewrite; broad contributor base | Zero releases; file-size caps breached; production cutover uncertainty |
| **ZeroClaw** | 100 items/day; massive channel expansion | 98% PR backlog; 5 S1 bugs; broken web dashboard in beta |

### Tier 2: Active & Balanced (Sustainable Velocity)
| Project | Characteristics | Trajectory |
|:---|:---|:---|
| **NanoBot** | Responsive triage; merged WebUI branching, TeX math, Dream controls | Maturing toward daily-driver reliability |
| **Hermes Agent** | Same-day P1 fixes; desktop polish; multi-provider routing | Stabilizing with review bottleneck as growth limiter |
| **CoPaw** | Regular beta releases; E2E CI; OpenSandbox security | AgentScope 2.0 migration is make-or-break |

### Tier 3: Maintenance/Stabilization Mode
| Project | Characteristics | Status |
|:---|:---|:---|
| **NanoClaw** | Bulk PR closure; security policy shipped; CSPRNG fix pending | Consolidating after feature burst; needs model-agnostic pivot |
| **NullClaw** | 91% resolution; cross-memory merged; cron bug as sole blocker | Reliable but small; distributed agent mesh as next phase |
| **LobsterAI** | Low volume; notification system shipped; multi-agent exploration | Finding product-market fit beyond single-model chat |

### Tier 4: Critical/Security Response
| Project | Crisis | Response |
|:---|:---|:---|
| **PicoClaw** | 11 CVEs disclosed (SSRF, CSRF, auth bypass) | Partial fixes (#3083, #3085); 9/14 unpatched |

### Tier 5: Dormant
| Project | Last Activity | Likely Status |
|:---|:---|:---|
| **TinyClaw, Moltis, ZeptoClaw** | None in 24h | Possibly abandoned or pre-launch stealth |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|:---|:---|:---|
| **Model-agnostic infrastructure is table stakes** | NanoClaw #1690 ("vendor lock-in anxiety"); OpenClaw's provider abstraction; IronClaw's strict-mode compatibility crisis | Design runtime abstractions early; avoid hardcoding provider-specific parameters |
| **Message boundary = trust boundary** | OpenClaw #25592 (Diamond Lobster); NanoBot #4259; Hermes #43083 | Implement `<thinking>`/`<reasoning>` stripping at transport layer, not prompt layer; validate with channel-specific integration tests |
| **Context compaction is the new memory management** | Universal pain across all projects; OpenClaw's Anthropic-inspired `STATE.md`; NanoBot's `idleCompact` drops | Treat compaction as first-class subsystem with correctness invariants, not heuristic truncation |
| **Multi-agent requires observability-first design** | LobsterAI #2132's debugging pain; IronClaw's Trace Commons; NanoClaw's prompt trace logging | Build tracing/span propagation before scaling beyond single-agent; assume cross-model failures |
| **Enterprise readiness = deterministic policy + audit** | NanoClaw #1605 (security policy engine); IronClaw audit hooks; ZeroClaw RBAC request | Replace prompt-based safety with structured policy engines; design for compliance review from day one |
| **The "skill" abstraction is winning** | NanoBot skills marketplace; CoPaw self-evolving skills; OpenClaw retired skill-workshop | Standardize on skill packaging (agentskills/.well-known URI); treat skills as the extension mechanism, not plugins |
| **Cron/automation reliability is underserved** | NullClaw #941 (silent cron failure); ZeroClaw #6037 (burst execution); Hermes cron env pollution | Design idempotency, observability, and failure alerting into scheduled execution; silent failures destroy trust |
| **Desktop-native > web-first for power users** | Hermes Agent desktop; CoPaw Tauri; LobsterAI notifications | Consider local-first architectures with sync, not cloud-rendering; native OS integration is competitive moat |

---

*Report generated from 2026-06-10 community digests across 12 projects. Health scores reflect 24-hour snapshot; trend assessments incorporate 30–90 day patterns where visible in backlog data.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-10

## 1. Today's Overview

NanoBot saw healthy mid-week activity with **23 PRs updated** (12 open, 11 merged/closed) and **6 active issues**, though **no new releases** were cut. The community is pushing hard on **provider compatibility** (GPT-5.x, OpenAI-compatible tool calls, StepFun ASR), **memory/history correctness**, and **WebUI polish**. A notable cluster of work from `yu-xin-c` continues to harden the test harness and filesystem security boundaries. Overall project health looks **active and well-maintained**, with bugs being reported and fixes rapidly proposed—though a few issues around context pollution and model parameter compatibility suggest growing pains as the project scales to more providers and longer sessions.

---

## 2. Releases

**No new releases** in the last 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs Today (11 total)

| PR | Author | Summary |
|---|---|---|
| [#4208](https://github.com/HKUDS/nanobot/pull/4208) | Bayern4ever-dot | **WebUI "Fork from here"** for assistant replies—lets users branch a new chat from any completed assistant response without mutating the original conversation. |
| [#4177](https://github.com/HKUDS/nanobot/pull/4177) | chengyongru | **Documentation overhaul**—restructured onboarding with path-based entry points (no-background, CLI quickstart, WebUI, chat apps, provider recipes, deployment, contributor). |
| [#4265](https://github.com/HKUDS/nanobot/pull/4265) | wrightwei1118 | Trivial cron change: `daily-english-read` skill now runs **every 2 days** instead of daily. |
| [#3434](https://github.com/HKUDS/nanobot/pull/3434) | c137650 | **LaTeX rendering in Feishu channel** via CodeCogs image generation; config-gated, no extra dependencies. |
| [#3400](https://github.com/HKUDS/nanobot/pull/3400) | c137650 | **Dream identity protection**—new `allow_edit_identity_files` flag lets users prevent Dream from auto-editing `SOUL.md` and `USER.md`, restricting it to `MEMORY.md`. |
| [#4034](https://github.com/HKUDS/nanobot/pull/4034) | computer-agent | Closed as **duplicate**—proposed GitAgent Protocol support (`agent.yaml` + `SOUL.md`). |
| [#4190](https://github.com/HKUDS/nanobot/pull/4190) | chengyongru | **Stricter tool-call validation**—preserves provider-emitted args, rejects non-object / malformed JSON instead of silently coercing to `{}`. |
| [#4252](https://github.com/HKUDS/nanobot/pull/4252) | chengyongru | **TeX math rendering in WebUI**—adds `\( ... \)`, `\[ ... \]`, and guarded `$...$` support via remark/rehype math pipeline. |

**Key advances:** WebUI conversation branching, onboarding docs, Feishu enterprise-channel polish, Dream memory/identity boundaries, and stricter tool-call execution semantics all landed.

---

## 4. Community Hot Topics

### Most Active Issues/PRs

| # | Type | Title | Comments | Signal |
|---|---|---|---|---|
| [#4253](https://github.com/HKUDS/nanobot/issues/4253) | Issue | Support overriding model per conversation | 3 | **Power-user flexibility**—users want fast/cheap vs. private/capable model switching without global config churn. |
| [#4259](https://github.com/HKUDS/nanobot/issues/4259) | Issue | `history.jsonl` cross-session injection pollutes context | 2 | **Core memory architecture bug**—archived summaries from other sessions leak into current system prompt. |
| [#4061](https://github.com/HKUDS/nanobot/issues/4061) | Issue | OpenAI-compatible text-format tool calls not parsed | 1 | **Provider interoperability**—some OpenAI-compatible endpoints emit tool calls as text markup; NanoBot ignores them. |

### Underlying Needs

- **Per-conversation model control** reflects a maturing user base running NanoBot as a daily driver across cost/privacy/quality tradeoffs.
- **Session isolation in memory** is a correctness issue that erodes trust in long-term memory—users need confidence that prior sessions don't hallucinate into the current one.
- **Tool-call robustness** shows friction with the proliferating OpenAI-compatible provider ecosystem; structured vs. text tool calls is becoming a compatibility tax.

---

## 5. Bugs & Stability

| Severity | # | Title | Fix PR? | Notes |
|---|---|---|---|---|
| 🔴 **High** | [#4259](https://github.com/HKUDS/nanobot/issues/4259) | `history.jsonl` cross-session context pollution | **No** | Corrupts system prompt with unrelated session summaries. Core memory logic issue. |
| 🔴 **High** | [#4264](https://github.com/HKUDS/nanobot/issues/4264) | `idleCompact` drops last 8 messages, losing corrections | **No** | Causes archived memory to retain wrong conclusions after user corrections. |
| 🟡 **Medium** | [#4261](https://github.com/HKUDS/nanobot/issues/4261) | GPT-5.x expects `max_completion_tokens`, not `max_tokens` | **Yes — [#4263](https://github.com/HKUDS/nanobot/pull/4263)** | Azure OpenAI GPT-5.4 deployments fail. Fix proposed same day. |
| 🟡 **Medium** | [#4061](https://github.com/HKUDS/nanobot/issues/4061) | OpenAI-compatible text tool calls not parsed | **No** | Breaks tool use on non-standard providers; raw markup shown to users. |
| 🟡 **Medium** | [#4267](https://github.com/HKUDS/nanobot/pull/4267) | WebUI drops entire assistant replies over websocket | **Open PR** | Race-condition-like rendering loss; data is saved but not shown. |
| 🟢 **Low** | [#4262](https://github.com/HKUDS/nanobot/issues/4262) | Agent mode startup ignores `botIcon` | **No** | Cosmetic / UX polish. |

**Stability assessment:** Two high-severity memory/context bugs without fixes yet are the biggest risk. Provider compatibility fixes are moving fast.

---

## 6. Feature Requests & Roadmap Signals

| # | Title | Likelihood in Next Release | Rationale |
|---|---|---|---|
| [#4253](https://github.com/HKUDS/nanobot/issues/4253) | Per-conversation model override | **High** | Small, well-scoped UX win with clear power-user demand. Fits existing preset system. |
| [#4262](https://github.com/HKUDS/nanobot/issues/4262) | Respect `botIcon` in agent mode | **High** | One-line fix, cosmetic, low risk. |
| [#4260](https://github.com/HKUDS/nanobot/pull/4260) | StepFun ASR SSE transcription provider | **Medium-High** | Clean provider addition; expands multimodal surface. |
| [#4255](https://github.com/HKUDS/nanobot/pull/4255) | On-demand version check in Settings > About | **Medium** | Removes background polling; good hygiene, but not urgent. |
| [#4257](https://github.com/HKUDS/nanobot/pull/4257) | Fenced-code-block-aware message splitting | **Medium** | Quality-of-life for long code outputs in channels. |

**Roadmap signal:** NanoBot is prioritizing **provider breadth**, **memory correctness**, and **UI/UX refinement** over large architectural changes. The density of PRs from `yu-xin-c` around testing and security suggests a push toward production hardening.

---

## 7. User Feedback Summary

### Pain Points
- **Model switching friction:** Users want to alternate presets per task without editing global config ([#4253](https://github.com/HKUDS/nanobot/issues/4253)).
- **Memory untrustworthiness:** Cross-session history leakage and dropped correction context make long-term memory feel unreliable ([#4259](https://github.com/HKUDS/nanobot/issues/4259), [#4264](https://github.com/HKUDS/nanobot/issues/4264)).
- **Provider compatibility gaps:** GPT-5.x and non-standard OpenAI-compatible endpoints break on parameter naming and tool-call formatting ([#4261](https://github.com/HKUDS/nanobot/issues/4261), [#4061](https://github.com/HKUDS/nanobot/issues/4061)).
- **WebUI rendering glitches:** Assistant replies occasionally disappear from the UI even though they're persisted ([#4267](https://github.com/HKUDS/nanobot/pull/4267)).

### Positive Signals
- **Fork-from-here** and **TeX math** show responsiveness to power-user WebUI needs.
- **Dream identity controls** address a real concern about autonomous self-modification.
- **Onboarding docs** indicate investment in lowering the barrier to entry.

---

## 8. Backlog Watch

| # | Age | Why It Needs Attention |
|---|---|---|
| [#4259](https://github.com/HKUDS/nanobot/issues/4259) | 1 day | **Core memory correctness bug**—no fix PR yet; affects trust in long-term context. |
| [#4264](https://github.com/HKUDS/nanobot/issues/4264) | 1 day | **High-severity** `idleCompact` design flaw—same-day but unaddressed; may need architectural decision on whether to include trailing correction turns. |
| [#4061](https://github.com/HKUDS/nanobot/issues/4061) | 11 days | OpenAI-compatible tool-call text parsing—no fix PR; blocks a class of providers. |
| [#4119](https://github.com/HKUDS/nanobot/pull/4119) | 10 days open | Filesystem security fix for symlink escapes—important hardening, stalled in review. |
| [#4053](https://github.com/HKUDS/nanobot/pull/4053) | 12 days open | Read-only root enforcement for write tools—security boundary, needs maintainer eyes. |
| [#4193](https://github.com/HKUDS/nanobot/pull/4193) | 6 days open | Memory lifecycle test harness—foundational for preventing regressions like #4259 and #4264. |

**Maintainer priority recommendation:** Triage the two memory bugs (#4259, #4264) and accelerate review of `yu-xin-c`'s security/test harness PRs (#4119, #4053, #4193), which would prevent exactly these categories of regressions.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-10

## 1. Today's Overview

Hermes Agent saw **high community activity** on 2026-06-10 with **50 issues and 50 PRs updated in the last 24 hours**, though **no new releases** were published. The project remains in active development with a large open backlog: **45 of 50 recently updated issues are still open**, and **46 of 50 recent PRs await merge**, indicating a vibrant but strained review pipeline. Today's work clusters around **macOS gateway reliability**, **context compaction/message persistence**, **provider configuration ergonomics**, **desktop UI/UX polish**, and **security hardening**. Several P1/P2 bugs received same-day fix PRs, suggesting maintainers are prioritizing stability alongside feature growth.

---

## 2. Releases

**No new releases** today. The latest release remains unspecified in the provided data.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary |
|---|---|---|
| [#43109](https://github.com/NousResearch/hermes-agent/pull/43109) | OutThisLife | **fix(desktop): stage dropped files into the remote session workspace** — Fixes remote gateway file drops by staging non-image files (PDF, CSV, spreadsheets) into the session workspace instead of broken `@file:/Users/...` refs. |
| [#43171](https://github.com/NousResearch/hermes-agent/pull/43171) | djdlzl | **fix: mirror script cron deliveries and sanitize ACP overrides** — Mirrors no-agent cron deliveries into gateway transcripts, adds thread IDs to logs, and ignores delegate ACP overrides for CLIs without stdio ACP support. |

### Notable Open PRs Advancing Today

| PR | Author | Summary |
|---|---|---|
| [#43067](https://github.com/NousResearch/hermes-agent/pull/43067) | KiruyaMomochi | **P1 fix: preserve messages after compaction split, keep busy follow-ups as separate turns** — Critical context-compaction regression fix addressing message loss and merged user turns. |
| [#43181](https://github.com/NousResearch/hermes-agent/pull/43181) | edufalcao | **fix(gateway): recover unloaded launchd job during update** — Pairs with issue #42006 to fix macOS launchd restart failures after `hermes update`. |
| [#43107](https://github.com/NousResearch/hermes-agent/pull/43107) | bionicbutterfly13 | **fix(profile): clone provider-owned memory configs** — Fixes profile cloning for memory plugins (hindsight, honcho, mem0, supermemory). |
| [#43051](https://github.com/NousResearch/hermes-agent/pull/43051) | helix4u | **fix(approval): honor glob command allowlist entries** — Makes `command_allowlist` support shell globs like `podman *`. |
| [#43184](https://github.com/NousResearch/hermes-agent/pull/43184) | liuhao1024 | **fix(tools): filter compaction summaries from session_search bookends** — Prevents prompt bloat from compaction handoff summaries. |
| [#43187](https://github.com/NousResearch/hermes-agent/pull/43187) | Tranquil-Flow | **fix(bedrock): respect bedrock.profile config for named AWS profiles** — Enables named AWS profile usage across Bedrock paths. |
| [#43178](https://github.com/NousResearch/hermes-agent/pull/43178) | maxmilian | **fix(cli): warn when provider config entries shadow a built-in provider** — Surfaces silent config traps where custom providers collide with canonical names. |
| [#43134](https://github.com/NousResearch/hermes-agent/pull/43134) / [#43185](https://github.com/NousResearch/hermes-agent/pull/43185) | rafaumeu | **feat(delegate_tool): per-task model/provider override** + review follow-up — Enables heterogeneous model routing within `delegate_task` batches. |

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Comments | 👍 | Topic |
|---|---|---|---|
| [#10567](https://github.com/NousResearch/hermes-agent/issues/10567) | 8 | 11 | **Dashboard host binding & CORS for remote/VPN access** — Long-running request (since April) to make `hermes dashboard` bind configurable and CORS flexible for Tailscale/VPN. Strong vote count signals real user need for remote ops workflows. |
| [#43083](https://github.com/NousResearch/hermes-agent/issues/43083) | 6 | 0 | **Password redaction breaks second tool call** — Fresh P1 bug: credential redaction (`***`) collides with model reading back its own history, causing tool call failures. Needs urgent attention. |
| [#16525](https://github.com/NousResearch/hermes-agent/issues/16525) | 6 | 2 | **Expose `model_switch` as agent-callable tool** — Users want autonomous complexity-based model routing without manual `/model` commands or subagent delegation. |
| [#42006](https://github.com/NousResearch/hermes-agent/issues/42006) | 5 | 0 | **macOS launchd restart failure after update** — Gateway falls back to detached mode; fix PR #43181 now open. |
| [#10674](https://github.com/NousResearch/hermes-agent/issues/10674) | 5 | 2 | **Dashboard multi-profile switching** — Design proposal for safe multi-profile UI; reflects power-user scaling pain. |

### Underlying Needs

- **Remote/headless operability**: #10567, #10674, and #42989 together show users want Hermes to work seamlessly over VPNs, remote gateways, and multiple profiles—not just localhost single-user.
- **Autonomous model routing**: #16525 and #38954 reveal friction with manual model management as agents grow more complex.
- **Reliable credential handling**: #43083 exposes tension between security redaction and conversational coherence.

---

## 5. Bugs & Stability

| Severity | Issue | Summary | Fix PR? |
|---|---|---|---|
| **P1** | [#43083](https://github.com/NousResearch/hermes-agent/issues/43083) | Password redaction replaces credentials with `***`, but model re-reads history and fails on second tool call. | **No** |
| **P1** | [#43014](https://github.com/NousResearch/hermes-agent/issues/43014) | `deliver=origin` fails to resolve delivery target in CLI cron sessions. | **No** |
| **P1** | [#43067](https://github.com/NousResearch/hermes-agent/pull/43067) *(PR)* | Messages lost after context compaction; user follow-ups merged. | **PR open** |
| **P2** | [#42006](https://github.com/NousResearch/hermes-agent/issues/42006) | macOS launchd restart missing `bootout`, gateway falls back to detached after update. | **PR #43181** |
| **P2** | [#43026](https://github.com/NousResearch/hermes-agent/issues/43026) | Gemini OpenAI-compatible provider returns HTTP 400/404 via internal HTTP client. | **No** |
| **P2** | [#37968](https://github.com/NousResearch/hermes-agent/issues/37968) | Cron gateway approvals vulnerable to environment pollution (CVSS 7.0 High). | **No** |
| **P2** | [#43146](https://github.com/NousResearch/hermes-agent/issues/43146) | Context scanner false-positives on German "Praxis" due to bare `praxis` C2 pattern. | **No** |
| **P3** | [#34070](https://github.com/NousResearch/hermes-agent/issues/34070) | Honcho memory prefetch hang on fresh CLI subprocess in v0.15.0 (regression). | **No** |
| **P3** | [#43042](https://github.com/NousResearch/hermes-agent/issues/43042) | Desktop file browser ENOENT when `session.info` overwrites CWD in remote gateway mode. | **No** |
| **P3** | [#43054](https://github.com/NousResearch/hermes-agent/issues/43054) | Gmail `get` drops forwarded/nested MIME parts. | **No** |

**Stability assessment**: Two fresh P1s appeared today without fixes yet, plus an active P1 fix PR for compaction data loss. macOS gateway reliability is getting attention. Security issues (#37968, #43146) are acknowledged but unpatched.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Likelihood in Next Release | Rationale |
|---|---|---|
| [#10567](https://github.com/NousResearch/hermes-agent/issues/10567) Dashboard host/CORS config | **High** | Mature proposal, high votes, small surface area. |
| [#16525](https://github.com/NousResearch/hermes-agent/issues/16525) `model_switch` as agent tool | **Medium-High** | Aligns with multiple routing requests; may depend on delegate tool work (#43134). |
| [#43134](https://github.com/NousResearch/hermes-agent/pull/43134) Per-task model/provider override | **High** | PR actively revised with follow-up #43185. |
| [#38846](https://github.com/NousResearch/hermes-agent/pull/38846) Desktop i18n (15 languages) | **Medium** | Large PR with upstream collision; needs reconciliation with new native i18n skeleton. |
| [#13314](https://github.com/NousResearch/hermes-agent/pull/13314) You.com web backend | **Medium** | Feature-complete PR, pending review bandwidth. |
| [#37106](https://github.com/NousResearch/hermes-agent/pull/37106) Curated default skills bootstrap | **Medium** | Product-direction change; needs maintainer sign-off. |
| [#31322](https://github.com/NousResearch/hermes-agent/issues/31322) Bedrock `service_tier` | **Medium** | Small provider flag addition; blocked on Bedrock maintainer attention. |
| [#42696](https://github.com/NousResearch/hermes-agent/issues/42696) Telegram inline keyboards for agent approvals | **Medium** | Builds on existing `send_exec_approval()` infrastructure. |
| [#42921](https://github.com/NousResearch/hermes-agent/issues/42921) Disable `execute_code` approval (full YOLO) | **Low-Medium** | Philosophical tension with safety defaults; likely config-gated if accepted. |
| [#43074](https://github.com/NousResearch/hermes-agent/issues/43074) OpenSSF Scorecard workflow | **Medium** | Low-risk CI addition; security posture signal. |

---

## 7. User Feedback Summary

### Pain Points

- **Remote/workflow friction**: Repeated complaints about dashboard localhost binding (#10567), multi-profile UI limitations (#10674), and remote gateway file drops (#43109, #43042). Users want Hermes to scale beyond single-machine, single-profile use.
- **macOS gateway reliability**: Update/restart cycle is brittle (#42006); users hit detached fallback instead of smooth launchd integration.
- **Approval UX inconsistency**: YOLO mode doesn't cover `execute_code` (#42921); Telegram approvals lack inline keyboards for agent workflows (#42696).
- **Provider config discoverability**: Silent shadowing of built-in providers (#43178 PR), missing `local` provider overlay (#43052), and AWS profile ignored (#43187 PR) all point to configuration being harder than it should be.
- **Context/memory reliability**: Compaction losing messages (#43067), Honcho hangs (#34070), and memory namespace sharing (#4726) indicate growing pains in long-running agent state.

### Positive Signals

- Active same-day fix PRs for reported regressions (file drops, cron mirroring, launchd recovery).
- Strong community engagement on feature design issues (#10674, #16525) with detailed technical proposals.
- Multi-provider routing and Bedrock fixes show responsiveness to enterprise/cloud use cases.

---

## 8. Backlog Watch

These important items risk stalling and need maintainer attention:

| Item | Age | Risk |
|---|---|---|
| [#10567](https://github.com/NousResearch/hermes-agent/issues/10567) Dashboard host/CORS | ~8 weeks open, 11 👍 | High user demand; no PR despite clear scope. |
| [#16525](https://github.com/NousResearch/hermes-agent/issues/16525) Agent-callable `model_switch` | ~6 weeks open | Strategic feature; overlaps with PR #43134 but needs product decision. |
| [#4726](https://github.com/NousResearch/hermes-agent/issues/4726) Profile-scoped memory namespaces | ~10 weeks open | Blocks clean multi-agent setups; memory architecture decision needed. |
| [#14390](https://github.com/NousResearch/hermes-agent/pull/14390) Stabilize gateway runtime & green test suite | ~7 weeks open | P1 test suite health; gateway mock contamination is a drag on all contributions. |
| [#37968](https://github.com/NousResearch/hermes-agent/issues/37968) Cron gateway approval environment pollution | 1 week open, CVSS 7.0 | Security issue with no fix PR yet. |
| [#13314](https://github.com/NousResearch/hermes-agent/pull/13314) You.com backend | ~7 weeks open | Feature-ready but unmerged; review bottleneck. |
| [#38846](https://github.com/NousResearch/hermes-agent/pull/38846) Desktop i18n | ~6 days active, large | Needs architectural decision on JSON vs. upstream TS i18n skeleton. |

---

*Digest generated from Hermes Agent GitHub activity for 2026-06-10. All links reference https://github.com/NousResearch/hermes-agent.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-10

## 1. Today's Overview

PicoClaw experienced **exceptionally high activity** with 20 issues and 20 PRs updated in the last 24 hours, reflecting a project at a critical inflection point. The most striking development is a **coordinated security disclosure** from researcher `YLChen-007`, who filed **11 new CVE-level vulnerabilities** spanning SSRF bypasses, authentication flaws, access control bypasses, and injection attacks. This suggests either an ongoing security audit or a responsible disclosure embargo lifting. Meanwhile, the project maintains active feature development with a new DeltaChat gateway PR and ongoing protocol enhancements. The high open-to-closed ratio (18 open issues, 15 open PRs) indicates maintainers are facing a significant triage burden.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| [`v0.2.9-nightly.20260609.46b29a0a`](https://github.com/sipeed/picoclaw/compare/v0.2.9...main) | Nightly | Automated build; unstable. Full changelog compares against `v0.2.9` stable. |

**No stable release.** The nightly build likely incorporates recent fixes but given the volume of unpatched security issues disclosed today, production use is inadvisable until maintainers address the disclosed vulnerabilities.

---

## 3. Project Progress

### Merged/Closed PRs (5 items)

| PR | Author | Summary | Significance |
|:---|:---|:---|:---|
| [#3064](https://github.com/sipeed/picoclaw/pull/3064) | chengzhichao-xydt | Add `ok` check for type assertion in config migration | Prevents panic on malformed config; defensive coding |
| [#2942](https://github.com/sipeed/picoclaw/pull/2942) | LegendAlessandro-Liguori | Fix canonical hyphenated model ID for Claude Sonnet default | Fixes fresh-install breakage with Anthropic |
| [#2940](https://github.com/sipeed/picoclaw/pull/2940) | LegendAlessandro-Liguori | Omit `temperature` for `claude-opus-4-7` | Resolves HTTP 400 on new Anthropic model family |
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) | afjcjsbx | **Agent Collaboration Bus** — inter-agent mailboxes, threads, delivery state | Major architectural feature (though closed, not merged) |
| [#3086](https://github.com/sipeed/picoclaw/pull/3086) | imguoguo | Update WeChat QR code | Routine documentation |

**Key observation:** The Agent Collaboration Bus PR (#2937) was closed without merge despite being a substantial feature. This may indicate architectural reconsideration or integration into a larger design.

### Notable Open PRs Advancing

| PR | Author | Focus |
|:---|:---|:---|
| [#3063](https://github.com/sipeed/picoclaw/pull/3063) | trufae | **DeltaChat gateway** — new messaging platform integration |
| [#3083](https://github.com/sipeed/picoclaw/pull/3083) | lc6464 | Harden launcher access control (responds to disclosed vulns) |
| [#3085](https://github.com/sipeed/picoclaw/pull/3085) | ACMYuechen | Block `198.18.0.0/15` in SSRF guard (partial fix for #3077) |
| [#3087](https://github.com/sipeed/picoclaw/pull/3087) | jp39 | Fix workspace-relative exec path false positives |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | 👍 | Underlying Need |
|:---|:---|:---:|:---:|:---|
| 1 | [#2404](https://github.com/sipeed/picoclaw/issues/2404) Streaming HTTP requests config | 11 | 1 | **Performance & UX**: Users want OpenAI-compatible streaming for lower latency perception; current buffered responses hurt interactive use |
| 2 | [#2796](https://github.com/sipeed/picoclaw/issues/2796) History shows only last user message | 6 | 0 | **Trust & transparency**: Message compression hiding history breaks user mental model of conversation |
| 3 | [#2984](https://github.com/sipeed/picoclaw/issues/2984) Explicit turn completion signal in WebSocket | 1 | 1 | **Protocol robustness**: External clients building on Pico need deterministic state machine boundaries |

### Analysis

- **#2404** represents a **long-standing feature gap** (opened April 7, 4+ months stale) with clear user demand but no implementation. The `stream=True` pattern is table-stakes for modern LLM clients.
- **#2796** was closed as stale with a fix PR (#2990) pending — disconnect between issue closure and PR resolution suggests process friction.
- The single-reaction, high-comment pattern on #2404 indicates **deep interest from few users** rather than broad appeal — a power-user feature.

---

## 5. Bugs & Stability

### Critical: Coordinated Security Disclosure (11 CVEs)

| Severity | Issue | Vector | Fix PR? |
|:---|:---|:---|:---:|
| **CRITICAL** | [#3072](https://github.com/sipeed/picoclaw/issues/3072) CSRF on first-run password setup → full local takeover | Web UI | [#3083](https://github.com/sipeed/picoclaw/pull/3083) partial |
| **CRITICAL** | [#3080](https://github.com/sipeed/picoclaw/issues/3080) `allowed_cidrs` bypass via loopback proxying | Network ACL | [#3083](https://github.com/sipeed/picoclaw/pull/3083) partial |
| **CRITICAL** | [#3069](https://github.com/sipeed/picoclaw/issues/3069) `allowed_cidrs` bypass via reverse proxy `RemoteAddr` trust | Network ACL | [#3083](https://github.com/sipeed/picoclaw/pull/3083) partial |
| **HIGH** | [#3078](https://github.com/sipeed/picoclaw/issues/3078) `web_fetch` SSRF via HTTP proxy environment | SSRF | No |
| **HIGH** | [#3077](https://github.com/sipeed/picoclaw/issues/3077) SSRF via `198.18.0.0/15` | SSRF | [#3085](https://github.com/sipeed/picoclaw/pull/3085) |
| **HIGH** | [#3074](https://github.com/sipeed/picoclaw/issues/3074) SSRF via ISATAP IPv6 literals | SSRF | No |
| **HIGH** | [#3081](https://github.com/sipeed/picoclaw/issues/3081) `cwd` symlink race in `exec` approval | TOCTOU | No |
| **HIGH** | [#3079](https://github.com/sipeed/picoclaw/issues/3079) `exec` whitelist allows `jq` env disclosure | Info leak | No |
| **MEDIUM** | [#3082](https://github.com/sipeed/picoclaw/issues/3082) Feishu `allow_from` bypass on parent messages | Access control | No |
| **MEDIUM** | [#3076](https://github.com/sipeed/picoclaw/issues/3076) WeCom group trigger bypass | Access control | No |
| **MEDIUM** | [#3075](https://github.com/sipeed/picoclaw/issues/3075) Untrusted `skills/` metadata auto-loaded | Prompt injection | No |
| **MEDIUM** | [#3073](https://github.com/sipeed/picoclaw/issues/3073) LINE webhook replay | Replay attack | No |
| **MEDIUM** | [#3071](https://github.com/sipeed/picoclaw/issues/3071) Unauthorized config reload via WebSocket | AuthZ | No |
| **MEDIUM** | [#3070](https://github.com/sipeed/picoclaw/issues/3070) OneBot arbitrary host fetch | SSRF | No |
| **MEDIUM** | [#3068](https://github.com/sipeed/picoclaw/issues/3068) MQTT `allow_from` via `client_id` spoof | AuthZ | No |

### Non-Security Bugs

| Issue | Status | Severity | Fix PR |
|:---|:---|:---:|:---|
| [#2796](https://github.com/sipeed/picoclaw/issues/2796) History truncation | Closed | Medium | [#2990](https://github.com/sipeed/picoclaw/pull/2990) |
| [#2939](https://github.com/sipeed/picoclaw/issues/2939) Claude `temperature` deprecated | Closed | Medium | [#2940](https://github.com/sipeed/picoclaw/pull/2940) |

**Assessment:** The security disclosure represents an **existential stability risk**. Multiple SSRF bypass vectors suggest the `web_fetch` tool needs fundamental redesign. The rapid PR response on launcher ACL (#3083) and SSRF range (#3085) shows maintainers are responsive, but 9 of 14 issues lack fixes.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in v0.3.0 | Rationale |
|:---|:---|:---:|:---|
| **Streaming HTTP config** | [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Medium | Long-standing, clear API, but requires provider refactoring |
| **DeltaChat gateway** | [#3063](https://github.com/sipeed/picoclaw/pull/3063) | High | PR open, active development, new platform expansion |
| **Agent Collaboration Bus** | [#2937](https://github.com/sipeed/picoclaw/pull/2937) | Low | Closed without merge; may need redesign |
| **NEAR AI Cloud provider** | [#2917](https://github.com/sipeed/picoclaw/pull/2917) | Medium | Stale since May 21; TEE narrative aligns with security focus |
| **vodozemac for Matrix E2EE** | [#3088](https://github.com/sipeed/picoclaw/issues/3088) | Medium | Security-driven, replaces deprecated libolm |
| **WebSocket turn completion signal** | [#2984](https://github.com/sipeed/picoclaw/issues/2984) | Medium | Protocol maturity need |

**Prediction:** Next stable release will prioritize **security patches** over features. Streaming support and DeltaChat are the most likely user-visible additions if v0.3.0 follows v0.2.9.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Security exposure** | 11 disclosed CVEs with practical exploit paths | CRITICAL |
| **Opaque history/compression** | [#2796](https://github.com/sipeed/picoclaw/issues/2796), [#2988](https://github.com/sipeed/picoclaw/pull/2988) | High |
| **Provider compatibility fragility** | [#2939](https://github.com/sipeed/picoclaw/issues/2939), [#2942](https://github.com/sipeed/picoclaw/pull/2942) | Medium |
| **Missing streaming UX** | [#2404](https://github.com/sipeed/picoclaw/issues/2404) | Medium |
| **Windows GUI polish** | [#3061](https://github.com/sipeed/picoclaw/pull/3061) | Low |

### Use Cases Emerging

- **Enterprise/self-hosted deployment**: Security issues all assume multi-user or exposed-instance scenarios — user base is growing beyond personal use
- **Multi-platform messaging**: DeltaChat, Feishu, WeCom, LINE, OneBot — PicoClaw is becoming a universal messaging bridge
- **External client ecosystem**: WebSocket protocol extensions (#2984) indicate third-party client development

### Satisfaction Signal

Mixed. Active contribution (20 PRs) shows healthy engagement, but the volume of security issues suggests **trust erosion risk** if not addressed promptly. The rapid fix PRs (#3083, #3085) demonstrate maintainer responsiveness that may preserve confidence.

---

## 8. Backlog Watch

### Critical: Security Fixes Needing Triage

| Issue | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#3078](https://github.com/sipeed/picoclaw/issues/3078) `web_fetch` SSRF via proxy env | New | Data exfiltration | Design review: disable proxy env in fetch sandbox |
| [#3074](https://github.com/sipeed/picoclaw/issues/3074) ISATAP IPv6 SSRF | New | Internal network pivot | Expand IP classifier; consider URL parser hardening |
| [#3081](https://github.com/sipeed/picoclaw/issues/3081) `cwd` symlink race | New | Arbitrary code execution | Bind approval to inode, not path; use `openat2` |
| [#3075](https://github.com/sipeed/picoclaw/issues/3075) Untrusted `skills/` loading | New | Prompt injection / RCE | Require explicit allowlist for skill paths |

### Stale Important Items

| Item | Age | Blocker |
|:---|:---:|:---|
| [#2404](https://github.com/sipeed/picoclaw/issues/2404) Streaming | ~2 months | No assignee; requires provider abstraction work |
| [#2984](https://github.com/sipeed/picoclaw/issues/2984) WebSocket completion | 1 week | Protocol design decision needed |
| [#2917](https://github.com/sipeed/picoclaw/pull/2917) NEAR AI provider | 3 weeks | Review backlog; may need rebase |
| [#2937](https://github.com/sipeed/picoclaw/pull/2937) Agent Collaboration | 2+ weeks | Closed; needs architectural RFC |

### Maintainer Attention Required

1. **Security response coordination**: 11 CVEs need CVE IDs, advisory text, and coordinated disclosure status verification
2. **PR #3083 review**: Launcher hardening is partial — does it fully address #3072, #3080, #3069?
3. **PR #2990 merge decision**: Fix for closed issue #2796 — merge or close with explanation
4. **libolm → vodozemac migration** ([#3088](https://github.com/sipeed/picoclaw/issues/3088)): Security-critical dependency update

---

*Digest generated from GitHub activity 2026-06-09. All links reference `github.com/sipeed/picoclaw`.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-10

---

## 1. Today's Overview

NanoClaw shows **exceptionally high engineering velocity** with 43 PRs updated in the last 24 hours (39 merged/closed, 4 open), though this appears to reflect a **bulk repository maintenance event** rather than organic daily activity—most closed PRs date from February–March 2026 and were simultaneously updated on 2026-06-09. Only 1 active issue remains open, suggesting either aggressive backlog pruning or coordinated maintainer action. No new releases were cut. The project demonstrates mature security consciousness with active CSPRNG fixes and a comprehensive security policy engine recently merged. Overall health appears **stable to positive** with strong focus on documentation, security hardening, and extensibility.

---

## 2. Releases

*No new releases.*

---

## 3. Project Progress

### Merged/Closed PRs (Bulk Update — 2026-06-09)

| PR | Author | Focus Area | Significance |
|:---|:---|:---|:---|
| [#212](https://github.com/nanocoai/nanoclaw/pull/212) | harperaa | **WebUI Control Panel** | Full Lit+Vite control panel with 11 tabs; *blocked/pending closure*—may indicate architectural concerns |
| [#337](https://github.com/nanocoai/nanoclaw/pull/337) | wozos | **Prompt Trace Logging** | JSONL-based observability for internal/external flows with configurable redaction |
| [#357](https://github.com/nanocoai/nanoclaw/pull/357) | wozos | **Persistence Context Seeding** | External markdown injection into `<persistent_context>` |
| [#1202](https://github.com/nanocoai/nanoclaw/pull/1202) | klapom | **Agent Trace Observability + Web UI** | Lightweight localhost dashboard on port 3001; complements #337 |
| [#1245](https://github.com/nanocoai/nanoclaw/pull/1245) | akshan-main | **Approval-Gated Capabilities** | `/approve` and `/reject` skills for human-in-the-loop control |
| [#1285](https://github.com/nanocoai/nanoclaw/pull/1285) | lpoee | **Direct Runner Mode** | `NANOCLAW_DIRECT_RUNNER=1` bypasses Docker per-conversation; significant latency/ops improvement |
| [#1309](https://github.com/nanocoai/nanoclaw/pull/1309) | tysoncung | **Skill Marketplace/Registry** | GitHub-hosted skill discovery/installation system; closes #384 |
| [#1387](https://github.com/nanocoai/nanoclaw/pull/1387) | wmalgadey | **Plugin System** | Channel-analogous plugin architecture for extensibility |
| [#1605](https://github.com/nanocoai/nanoclaw/pull/1605) | ebenezer-isaac | **Security Policy Engine** | Deterministic (non-prompt-based) user gating, tool restrictions, readonly mounts |
| [#1161](https://github.com/nanocoai/nanoclaw/pull/1161) | unional | **Dev Setup Skill** | `/setup-dev` for local agent tooling workflow |
| [#1192](https://github.com/nanocoai/nanoclaw/pull/1192) | olddustysocksunderthecouch | **Explicit Model Selection** | Hardcodes Claude model in agent-runner for transparency |
| [#1333](https://github.com/nanocoai/nanoclaw/pull/1333) | r33drichards | **Build-Time Version Metadata** | Git commit/branch/timestamp in logs for debuggability |

**Key Themes:** Observability (3 PRs: #337, #1202, #1333), Security (#1605, #2722), Operational Flexibility (#1285, #1245), Ecosystem Growth (#1309, #1387)

---

## 4. Community Hot Topics

### Open PRs Requiring Attention

| PR | Author | Comments | Core Tension |
|:---|:---|:---|:---|
| [#2722](https://github.com/nanocoai/nanoclaw/pull/2722) | dweekly | *new, security-critical* | **CSPRNG fix for Telegram pairing codes**—`Math.random` → `crypto.randomInt`; store permission lockdown. *Unmerged despite clear security impact.* |
| [#2721](https://github.com/nanocoai/nanoclaw/pull/2721) | gavrielc | *new, documentation* | Skills customization contract documentation; establishes "edit first, skillify after" workflow |

### Persistent Open Issue

| Issue | Author | Comments | 👍 | Underlying Need |
|:---|:---|:---|:---|:---|
| [#1690](https://github.com/nanocoai/nanoclaw/issues/1690) | chiptoe-svg | 4 | 3 | **Vendor lock-in anxiety**—users want Claude/Codex/local model interoperability via modular runtime abstraction; mirrors channel pattern (`/add-telegram`, `/add-slack`) |

**Analysis:** Issue #1690 signals a strategic inflection point. The community wants NanoClaw to become **model-agnostic infrastructure**, not a Claude-centric wrapper. The "skill" abstraction has proven successful for channels; extending it to agent runtimes would differentiate NanoClaw in an increasingly fragmented AI agent market.

---

## 5. Bugs & Stability

| Severity | Item | Status | Details |
|:---|:---|:---|:---|
| **🔴 Critical** | [#2722](https://github.com/nanocoai/nanoclaw/pull/2722) | **Fix PR open, unmerged** | Predictable pairing codes from `Math.random` enable account hijacking; first pairer → owner escalation makes this exploitable |
| 🟡 Medium | [#212](https://github.com/nanocoai/nanoclaw/pull/212) | Blocked/Pending Closure | WebUI control panel stalled—possible architectural conflicts with core process |
| 🟡 Medium | Multiple "Blocked/Pending Closure" PRs | Stale since Feb–Mar | Bulk closure without merge suggests either: (a) superseded by later work, or (b) maintainer capacity constraints for review |

**Stability Assessment:** The CSPRNG vulnerability is **actively exploitable** and should be prioritized for immediate merge. The bulk PR closure event lacks transparency—community would benefit from explicit "why closed" comments.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Multi-model runtime abstraction** | Issue #1690 | **High** | 3 👍, active discussion, aligns with #1285 (direct runner) as stepping stone |
| **Enhanced observability suite** | PRs #337, #1202, #1333 | **Shipped** | Already merged; likely to be refined |
| **Skill marketplace v1** | PR #1309 | **Shipped** | Merged; needs documentation (#2721 addresses this) |
| **Security policy engine** | PR #1605 | **Shipped** | Merged; deterministic enforcement is architectural win |
| **WebUI resurrection** | PR #212 | **Low** | Blocked status since February; may need redesign |

**Prediction:** Next release will likely emphasize **model portability** (addressing #1690) and consolidate the observability/security foundations laid in this batch. The "direct runner" (#1285) and "security policy engine" (#1605) together enable a **lighter, more governable deployment mode** that appeals to enterprise users.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Deployment complexity / Docker overhead** | #1285 motivation: "Docker containers add significant overhead" | High |
| **Opaque model selection** | #1192: "hard to find out which model is being used" | Medium |
| **Merge conflicts on customization** | #2721: "merge fights on update" → skills-based approach | Medium |
| **Security auditability** | #214, #1605, #2722: deterministic > prompt-based enforcement | High |

### Positive Signals

- **Skills pattern is validated**: #2721 treats skills as the "doorway" for all customization; ecosystem buy-in with marketplace (#1309) and plugin system (#1387)
- **Human-in-the-loop demand**: #1245 approval gating shows operational maturity expectations
- **Observability investment**: Users building production systems need traceability (#337, #1202)

### Satisfaction/Dissatisfaction

| Satisfied | Dissatisfied |
|:---|:---|
| Extensibility (channels, skills, plugins) | Model lock-in to Claude |
| Security posture (when merged) | Transparency of PR closure decisions |
| Local development workflow (#1161) | WebUI availability |

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1690 Multi-runtime agent SDK abstraction](https://github.com/nanocoai/nanoclaw/issues/1690) | ~2 months | **Strategic miss if ignored** | Maintainer response to chiptoe-svg's prototype; decision on whether this becomes core architecture or community skill |
| [#2722 CSPRNG security fix](https://github.com/nanocoai/nanoclaw/pull/2722) | 1 day | **Active vulnerability** | Immediate merge; no valid reason for delay |
| PRs #212, #337, #357, #380, #481 | ~3.5 months | **Trust erosion** | Retroactive explanation of "Pending Closure" rationale; community communication |

**Maintainer Attention Required:** The simultaneous bulk update of 39 PRs on 2026-06-09 without individual resolution narratives suggests **automation or batch processing** rather than curated review. This risks community confusion—especially for contributors whose work was closed without clear feedback.

---

*Digest generated from GitHub activity data for nanocoai/nanoclaw on 2026-06-10.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-10

## 1. Today's Overview

NullClaw shows **strong maintenance velocity** with 12 items updated in the last 24 hours (5 issues, 7 PRs) and a **91% resolution rate** (4/5 issues closed, 6/7 PRs merged). The project is actively clearing its backlog with no new releases, indicating a focus on stability and bug fixes rather than feature shipping. All closed items were resolved within 1–13 days of creation, suggesting responsive maintainer engagement. The single open PR (#946) and open issue (#941) represent the remaining active workstreams around agent tool filtering and cron-based agent execution.

---

## 2. Releases

**No new releases** as of 2026-06-10. The last release cycle remains undetermined from available data.

---

## 3. Project Progress

### Merged/Closed PRs (6 items)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#947](https://github.com/nullclaw/nullclaw/pull/947) | EvoLinkAI | Added Evolink as first-class OpenAI-compatible provider | **Ecosystem expansion** — enables multi-model gateway access (GPT-5, Gemini, DeepSeek, Doubao, MiniMax) via single endpoint |
| [#945](https://github.com/nullclaw/nullclaw/pull/945) | vernonstinebaker | Fixed PII redactor false-positives on ISO date/time patterns | **Stability** — resolves broken `date` command output in agent runs |
| [#943](https://github.com/nullclaw/nullclaw/pull/943) | raskevichai | Added Telegram typing indicator for callback_query processing | **UX polish** — closes gap between inline buttons and text message feedback |
| [#940](https://github.com/nullclaw/nullclaw/pull/940) | raskevichai | Fixed custom OpenAI-compatible provider model discovery | **Core fix** — queries actual `/v1/models` endpoint instead of hardcoded Claude fallback |
| [#939](https://github.com/nullclaw/nullclaw/pull/939) | raskevichai | Activated previously dead `compact_context` flag | **Performance/quality** — gives users control over context compaction behavior |
| [#711](https://github.com/nullclaw/nullclaw/pull/711) | DonPrus | Added cross-instance memory event stream | **Architecture** — enables multi-agent synchronization primitives |

**Key advancement**: The project moved from "dead config flags" and "hardcoded fallbacks" toward dynamic, provider-agnostic behavior. The cross-memory PR (#711) is particularly notable as a foundational architecture change with 2.5 months of incubation.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#941](https://github.com/nullclaw/nullclaw/issues/941) — Agent-type cron jobs don't spawn subprocess | 1 comment, **OPEN** | **Highest priority open issue**. Telegram delivery failure for scheduled agent tasks indicates a gap in the job execution pipeline — the scheduler marks completion without verifying subprocess spawn. Underlying need: **reliable headless agent orchestration** for automation use cases. |
| [#936](https://github.com/nullclaw/nullclaw/issues/936) → [#940](https://github.com/nullclaw/nullclaw/pull/940) | 1 comment, resolved | Custom provider discovery was a friction point for power users wanting to self-host or use emerging model providers. Fix validates the project's commitment to **OpenAI-compatible ecosystem openness**. |
| [#937](https://github.com/nullclaw/nullclaw/issues/937) → [#939](https://github.com/nullclaw/nullclaw/pull/939) | 0 comments, resolved | Dead configuration flags erode user trust in tuning knobs; fix restores **predictable configuration semantics**. |

**Community pattern**: Issues are filed by core contributors (weissfl, vernonstinebaker) and rapidly fixed by another set (raskevichai), suggesting a **tight-knit, technically deep contributor base** rather than broad community issue reporting.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|:---|:---|:---|:---|
| **High** | [#941](https://github.com/nullclaw/nullclaw/issues/941): Cron agent jobs silently fail to deliver via Telegram | **OPEN** | None yet |
| Medium | [#944](https://github.com/nullclaw/nullclaw/issues/944): PII redactor breaks `date` output | Closed | [#945](https://github.com/nullclaw/nullclaw/pull/945) |
| Medium | [#936](https://github.com/nullclaw/nullclaw/issues/936): Custom providers show wrong models | Closed | [#940](https://github.com/nullclaw/nullclaw/pull/940) |
| Low | [#942](https://github.com/nullclaw/nullclaw/issues/942): Missing typing indicator on inline buttons | Closed | [#943](https://github.com/nullclaw/nullclaw/pull/943) |
| Low | [#937](https://github.com/nullclaw/nullclaw/issues/937): `compact_context` flag ignored | Closed | [#939](https://github.com/nullclaw/nullclaw/pull/939) |

**Critical concern**: [#941](https://github.com/nullclaw/nullclaw/issues/941) represents a **silent failure mode** in scheduled automation — the worst kind of bug for a personal assistant. The job appears successful while doing nothing. This affects headless/reliability-dependent deployments.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Release |
|:---|:---|:---|
| **Tool filtering in system prompts** | Open PR [#946](https://github.com/nullclaw/nullclaw/pull/946) | **High** — actively developed, narrows tool exposure for security/clarity |
| **Cross-instance memory synchronization** | Merged PR [#711](https://github.com/nullclaw/nullclaw/pull/711) | **Released** — foundation for multi-agent topologies |
| **Additional OpenAI-compatible providers** | PR [#947](https://github.com/nullclaw/nullclaw/pull/947) pattern | **Likely** — Evolink addition sets precedent; expect more gateway integrations |
| **PII redaction tuning controls** | [#944](https://github.com/nullclaw/nullclaw/issues/944) fix | **Possible** — may expose sensitivity levels or pattern allowlists |

**Emerging theme**: The project is evolving from **single-agent personal assistant** toward **distributed agent mesh** (cross-memory + provider abstraction + tool filtering). This suggests a strategic pivot or parallel track toward enterprise/multi-agent scenarios.

---

## 7. User Feedback Summary

### Pain Points
- **Silent failures in automation** ([#941](https://github.com/nullclaw/nullclaw/issues/941)): Users cannot trust scheduled agent tasks without verification
- **Over-aggressive defaults** ([#944](https://github.com/nullclaw/nullclaw/issues/944)): PII redaction enabled by default breaks legitimate system output — tension between security and usability
- **Provider lock-in friction** ([#936](https://github.com/nullclaw/nullclaw/issues/936)): Hardcoded fallbacks betray the "open" in OpenAI-compatible

### Use Cases Evident
- **Telegram-first personal assistant** (typing indicators, inline buttons, delivery channels)
- **Scheduled/headless automation** (cron jobs with agent-type execution)
- **Multi-model arbitrage** (Evolink gateway, custom providers)
- **Privacy-conscious deployment** (PII redaction as default-on)

### Satisfaction Indicators
- Rapid issue resolution (all but one closed within days)
- Self-reported fixes by contributors who filed issues (weissfl → raskevichai handoff)
- No escalated or duplicate issues

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#941](https://github.com/nullclaw/nullclaw/issues/941) — Cron agent subprocess failure | 10 days since creation, **last updated 2026-06-09** | **High** — only open issue, blocks reliable scheduling | Maintainer assignment for subprocess spawn debugging; may need Zig runtime expertise |
| [#946](https://github.com/nullclaw/nullclaw/pull/946) — Tool filtering in system prompt | 7 days open, last updated 2026-06-09 | Medium — feature-complete? | Review for merge; touches prompt engineering and MCP tool exposure |

**No stale items detected.** The project's 2.5-month-old cross-memory PR (#711) merged today, indicating active resurrection of important backlog items. No abandoned critical issues identified.

---

*Digest generated from GitHub activity data for nullclaw/nullclaw on 2026-06-10.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-10

## 1. Today's Overview

IronClaw shows **exceptionally high development velocity** with 97 total items updated in 24 hours (47 issues, 50 PRs), indicating an active push toward production readiness. The project is dominated by the **"Reborn" migration effort** — a comprehensive platform rewrite — with heavy focus on production cutover preparation, WebUI v2 stabilization, and security hardening. Despite zero new releases, substantial engineering progress is evident through 8 merged/closed PRs and 5 closed issues. The contributor base is broadening with both core team and new contributors active. Key risk areas include file-size budget violations in critical Rust modules and a growing backlog of production-blocking items.

---

## 2. Releases

**No new releases** (0 releases published).

---

## 3. Project Progress

### Closed/Merged Today (8 PRs/issues)

| Item | Description | Significance |
|------|-------------|------------|
| [#4604](https://github.com/nearai/ironclaw/issues/4604) | **Reborn WebUI v2 browser-driven full-stack E2E** — CLOSED | Foundation for automated testing of real browser + server integration; critical quality gate |
| [#4609](https://github.com/nearai/ironclaw/issues/4609) | **WebChat v2 authentication parity audit** (bearer/DB/OIDC/query-token) — CLOSED | Security baseline established for all auth paths |
| [#4591](https://github.com/nearai/ironclaw/issues/4591) | **Operator command-plane foundation** (setup/config/diagnostics/lifecycle APIs) — CLOSED | Enables self-hosted operations and reduces support burden |
| [#4447](https://github.com/nearai/ironclaw/issues/4447) | **OpenAI-compatible API migration closeout** — CLOSED | Final compatibility/security acceptance for API parity |
| [#4446](https://github.com/nearai/ironclaw/issues/4446) | **Projection streams → OpenAI-compatible SSE** — CLOSED | Streaming responses now standards-compliant |

### Major Active PRs Advancing

| PR | Description | Status |
|----|-------------|--------|
| [#4662-4664](https://github.com/nearai/ironclaw/pull/4662) | **Project-scoped automation ownership** (3 stacked PRs: design → core model → surface) | Design merged, implementation in review |
| [#4559](https://github.com/nearai/ironclaw/pull/4559) | **Agent-driven Trace Commons onboarding** via invite link | Replaces 15+ CLI flag setup with conversational flow |
| [#4600](https://github.com/nearai/ironclaw/pull/4600) | **Slack personal DM outbound targets** | Phase 4 C2 of trigger delivery plan |
| [#4656](https://github.com/nearai/ironclaw/pull/4656) | **Durable subagent gate resolution store** | Host restart survival for parent-child agent workflows |
| [#4613](https://github.com/nearai/ironclaw/pull/4613) | **Persistent approval policies** (scoped allow/lookup/revoke) | Security-critical: reduces repeated user prompts |
| [#4661](https://github.com/nearai/ironclaw/pull/4661) | **NEAR mainnet read-only extension** | Blockchain integration; first-party DeFi/crypto capability |

---

## 4. Community Hot Topics

### Most Active by Engagement

| Rank | Item | Comments | Analysis |
|------|------|----------|----------|
| 1 | [#3026](https://github.com/nearai/ironclaw/issues/3026) **Epic: Reborn production wiring and cutover readiness** | 3 comments | **Meta-tracker for production launch**; reveals organizational tension around "one owner-level cutover story" — need for unified production graph validation, reporting, and traffic gating |
| 2 | [#4642](https://github.com/nearai/ironclaw/issues/4642) **Strict-mode providers' null-for-unset-optionals rejected** | 1 comment | **Compatibility crisis with major LLM providers**; strict-mode OpenAI/Anthropic behavior breaks tool validation — affects "most first-party tools" |
| 3 | [#88](https://github.com/nearai/ironclaw/issues/88) **Security hardening** (device pairing, elevated mode, safe bins, media URL validation) | 1 comment | Long-running parity item; indicates OpenClaw competitive pressure |
| 4 | [#4551](https://github.com/nearai/ironclaw/issues/4551) **Reborn production Postgres storage config** | 1 comment | Infrastructure dependency for #3026; substrate exists but wiring incomplete |
| 5 | [#4548](https://github.com/nearai/ironclaw/issues/4548) **Duplicate `model` field in DeepSeek requests** | 1 comment | Provider-specific serialization bug; 400 error blocks DeepSeek usage |

### Underlying Needs Analysis

- **Production confidence**: The #3026 epic and its children (#4620, #4621, #4551) show the team knows *what* to build but lacks *integrated* proof it works together
- **LLM provider diversity**: Bugs for DeepSeek (#4548), Minimax (#4587), and strict-mode null handling (#4642, #4650) reveal fragility in the provider abstraction layer
- **Security as differentiator**: #88 and audit hook PRs (#4565, #4563, #4567, #4568, #4569) suggest enterprise/security-conscious positioning

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix Status |
|----------|------|-------------|------------|
| **P0 — Production Blocker** | [#4642](https://github.com/nearai/ironclaw/issues/4642) | Strict-mode LLM providers send `null` for unset optionals; capability-port validation rejects valid tool calls | **No fix PR identified**; affects "most first-party tools" |
| **P1 — Major Provider Broken** | [#4548](https://github.com/nearai/ironclaw/issues/4548) | Duplicate `model` field in DeepSeek chat completion requests with tools → HTTP 400 | **No fix PR identified** |
| **P1 — Provider Config Broken** | [#4587](https://github.com/nearai/ironclaw/issues/4587) | Minimax provider cannot read stored key metadata; `api_key_set=false` | **No fix PR identified** |
| **P1 — Data Quality** | [#4640](https://github.com/nearai/ironclaw/issues/4640) | Google Calendar `list_events` returns oldest/unordered events; no `timeMin` default, missing `singleEvents`/`orderBy` | **No fix PR identified** |
| **P2 — Auth Gap** | [#4585](https://github.com/nearai/ironclaw/issues/4585) | Reborn auth evidence lacks tenant identity; blocks tenant-aware validation | Related to [#4658](https://github.com/nearai/ironclaw/pull/4658) (per-caller extension auth fix) |
| **P2 — Architecture Debt** | [#4666](https://github.com/nearai/ironclaw/issues/4666) | `slack_host_state.rs` at 2,823 lines (approaching 3,000 cap) | Tracking; needs decomposition |
| **P2 — Architecture Debt** | [#4665](https://github.com/nearai/ironclaw/issues/4665) | `slack_host_beta.rs` at 3,359 lines (**over** 3,000 cap) | Tracking; decomposition required |

### Regression Risk

- [#4650](https://github.com/nearai/ironclaw/pull/4650) addresses temperature rejection in reasoning models (Opus 4.7/4.8, gpt-5.x) — **model-specific parameter filtering** needed as providers diverge

---

## 6. Feature Requests & Roadmap Signals

| Feature | Signal Strength | Likely Version | Source |
|---------|-----------------|----------------|--------|
| **Unified "omni" search** (threads, skills, extensions, memory) | 🔥 High | Post-Reborn GA | [#4647](https://github.com/nearai/ironclaw/issues/4647) — "dishonest" current UX acknowledged |
| **Universal attachments across all channels** | 🔥 High | Near-term Reborn | [#4644](https://github.com/nearai/ironclaw/issues/4644) — v1→Reborn parity gap |
| **Slack channel-routed personal + team agents** | 🔥 High | Near-term | [#4625](https://github.com/nearai/ironclaw/issues/4625) — enterprise multi-tenancy |
| **Admin-shared tools/skills with per-user auth** | 🔥 High | Near-term | [#4628](https://github.com/nearai/ironclaw/issues/4628) — "members start productive without repeating setup" |
| **NEAR blockchain integration** | Medium | vNext | [#4661](https://github.com/nearai/ironclaw/pull/4661) — read-only first, suggests payment/identity expansion |
| **Trace Commons onboarding** | Medium | vNext | [#4559](https://github.com/nearai/ironclaw/pull/4559) — compliance/audit market |
| **Project-scoped ownership model** | 🔥 High | Imminent | [#4662-4664](https://github.com/nearai/ironclaw/pull/4662) — 3 stacked PRs in flight |

### Predicted Next Release Themes

1. **Reborn Production Cutover** (infrastructure, monitoring, rollback)
2. **WebUI v2 Completeness** (search, attachments, SSO multi-user)
3. **Enterprise Hardening** (shared resources, audit durability, tenant isolation)

---

## 7. User Feedback Summary

### Explicit Pain Points

| Issue | User Impact | Severity |
|-------|-------------|----------|
| "Reborn's transcript contract is text-only" — attachments silently dropped | **Broken file sharing** in modern agent workflows | High |
| "Users can't search across their threads, messages, files, extensions, skills, and memory from one place" | **Discovery failure** as data scales | High |
| "What exists today is fragmented and partly dishonest" (omni-search) | **Trust erosion** in product completeness | Medium-High |
| Google Calendar returns oldest events first | **Scheduling assistant useless** | Medium |
| DeepSeek/Minimax provider failures | **Provider choice constrained** | Medium |

### Satisfaction Signals

- Strong test infrastructure investment ([#4632-4636](https://github.com/nearai/ironclaw/issues/4632) WebUI v2 E2E smoke coverage)
- Security audit hooks comprehensive ([#4563](https://github.com/nearai/ironclaw/pull/4563)-[#4569](https://github.com/nearai/ironclaw/pull/4569))
- Documentation-heavy PRs suggest maintainability focus

### Dissatisfaction Signals

- **No releases** despite heavy development → users may perceive instability or "not ready"
- File-size caps being breached → code complexity outpacing architecture
- "Crabshack closeout" ([#4629](https://github.com/nearai/ironclaw/issues/4629)) — legacy system still entangled, causing "engineers reasoning about two overlapping runtime stories"

---

## 8. Backlog Watch

### Needs Maintainer Attention — Long-Running or Blocking

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#88](https://github.com/nearai/ironclaw/issues/88) Security hardening (device pairing, elevated mode, safe bins, media URL validation) | **117 days** (2026-02-14) | Competitive parity gap with OpenClaw | Priority reassessment; P2-P3 label may understate market need |
| [#3026](https://github.com/nearai/ironclaw/issues/3026) Reborn production cutover epic | **43 days** (2026-04-28) | **Launch blocker** | Dedicated owner assignment; child issues proliferating |
| [#4492](https://github.com/nearai/ironclaw/pull/4492) Configured extension credential staging | **5 days** (2026-06-05) | **DB migration**; XL size; 12 scope tags | Review bottleneck; core contributor only |
| [#4559](https://github.com/nearai/ironclaw/pull/4559) Trace Commons onboarding | **2 days** (2026-06-08) | XL; replaces complex CLI flow | Security review for credential handling |
| [#4665](https://github.com/nearai/ironclaw/issues/4665) / [#4666](https://github.com/nearai/ironclaw/issues/4666) File size violations | **Today** | Architecture rot | Immediate decomposition planning; enforce `.claude/rules/architecture.md` §5 |

### Review Bottleneck Indicators

- **XL-sized PRs dominant**: 6 of top 20 PRs are XL; increases review latency and defect escape risk
- **"undefined" comment counts** in PR data suggest possible API/data quality issues in tracking
- **Stacked PR pattern** (#4662→#4663→#4664) requires sequential review; blocks parallel progress

---

*Digest generated from 47 issues and 50 PRs updated 2026-06-09 to 2026-06-10.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-06-10

## 1. Today's Overview

LobsterAI showed **moderate development activity** on 2026-06-09 with 5 PRs updated (4 merged/closed, 1 open) and 2 new issues opened. No new releases were published. The project demonstrates active iteration on **cowork session notifications** and **data backup infrastructure**, though with some churn—PR #2135 temporarily closed data backup shortly after PR #2136 introduced it, suggesting feature flagging or stabilization needs. Community interest is emerging around **multi-model agent orchestration** and **Hermes agent integration**, indicating users are pushing the platform toward more complex AI agent workflows beyond single-model interactions.

---

## 2. Releases

**No new releases** published today.

---

## 3. Project Progress

### Merged/Closed PRs (4 items)

| PR | Author | Areas | Description | Link |
|:---|:---|:---|:---|:---|
| **#2136** | fisherdaddy | renderer, docs, main | **Data backup and migration feature** — Introduces backup/migration capabilities | [Link](https://github.com/netease-youdao/LobsterAI/pull/2136) |
| **#2135** | fisherdaddy | renderer | **Temporary data backup closure** — Reverts/disables the above feature, likely for stabilization | [Link](https://github.com/netease-youdao/LobsterAI/pull/2135) |
| **#2134** | liuzhq1986 | renderer, docs, main | **Task completion notification restoration** — Restores LobsterAI from notifications when main window closed; waits for renderer handler readiness; maintains macOS Notification Center click actions | [Link](https://github.com/netease-youdao/LobsterAI/pull/2134) |
| **#2130** | liuzhq1986 | renderer, build, docs, main | **Task completion notifications for Cowork** — Privacy-safe notifications without exposing task titles; adds macOS Dock badges and Windows taskbar indicators; includes General settings toggle | [Link](https://github.com/netease-youdao/LobsterAI/pull/2130) |

**Key Advancements:**
- **Cowork session UX significantly improved**: End-to-end notification system now handles background task completion, window restoration, and cross-platform native integration (macOS/Windows)
- **Data backup infrastructure initiated** but immediately flagged for stabilization—suggests active feature experimentation with safety mechanisms

---

## 4. Community Hot Topics

### Most Active Discussions

| Item | Activity | Analysis |
|:---|:---|:---|
| **[#2131] Hermes agent support planned?** | 1 comment | **Emerging architectural demand** — Users exploring LobsterAI as a multi-agent orchestration platform rather than single-model tool; Hermes (likely referring to Nous Research's Hermes models or a specific agent framework) integration would position LobsterAI in the broader agent ecosystem | [Link](https://github.com/netease-youdao/LobsterAI/issues/2131) |
| **[#2132] Cross-model subtask delegation** | 0 comments, detailed technical writeup | **Sophisticated workflow need** — User has already done root-cause analysis on gateway function calls vs. `sessions_spawn` subtasks; proposes specific mechanism improvements for model-to-model handoffs (M3 planner → DeepSeek executor) | [Link](https://github.com/netease-youdao/LobsterAI/issues/2132) |

**Underlying Needs:**
- **Agent orchestration maturity**: Users want LobsterAI to function as a **meta-controller** for heterogeneous AI systems, not just a chat interface
- **Observable, debuggable multi-agent flows**: Issue #2132's technical depth reveals production pain points in tracking cross-model state

---

## 5. Bugs & Stability

| Severity | Item | Status | Details |
|:---|:---|:---|:---|
| **Medium** | **PR #2133** — Export and code copy bugs | **Fix pending** (OPEN) | Renderer and cowork area bugs affecting user data export functionality; fix PR submitted by fisherdaddy | [Link](https://github.com/netease-youdao/LobsterAI/pull/2133) |
| **Low-Medium** | **PR #2135** — Data backup temporary closure | **Mitigated** (CLOSED) | Voluntary feature rollback suggests potential stability/regression concern with #2136; defensive engineering pattern |

**Note:** No crash reports or critical regressions in issues today. The backup feature churn (#2136 → #2135) indicates **proactive risk management** rather than reactive firefighting.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Version | Rationale |
|:---|:---|:---|:---|
| **Hermes agent integration** | Issue #2131 | Medium | Expands addressable market; aligns with multi-agent trend; requires architectural decision on plugin system |
| **Cross-model subtask notification/observability** | Issue #2132 | **High** | Builds directly on today's merged notification PRs (#2130, #2134); user has provided implementation guidance; fills clear gap in current `sessions_spawn` vs. gateway function architecture |
| **Stable data backup/migration** | PR #2136/#2135 | High | Already implemented, needs stabilization cycle |

**Predicted Next Release Themes:** Cowork session robustness, notification system polish, and foundational multi-agent orchestration improvements.

---

## 7. User Feedback Summary

| Theme | Evidence | Sentiment |
|:---|:---|:---|
| **Privacy-conscious design appreciated** | PR #2130 explicitly avoids exposing task titles in notifications | ✅ Positive |
| **Need for transparent multi-agent debugging** | Issue #2132's detailed technical analysis with session inspection results | ⚠️ Frustration with opacity |
| **Desire for ecosystem openness** | Hermes agent inquiry (#2131) | ⚠️ Impatience with platform boundaries |
| **Reliability expectations for background workflows** | Notification restoration logic (#2134) | ✅ Confidence being built |

**Core Pain Point:** Users are **advancing faster than the platform's multi-agent primitives**—they've architected sophisticated model-specialization workflows (planner/executor patterns) but lack first-class tooling for cross-model state synchronization and observability.

---

## 8. Backlog Watch

| Item | Age | Concern | Action Needed |
|:---|:---|:---|:---|
| **Issue #2132** — Cross-model subtask delegation | 1 day (new) | **High-quality community contribution at risk of being overlooked** — Contains root-cause analysis, proposed fix, and architectural recommendation; zero maintainer response | Maintainer acknowledgment and roadmap alignment discussion |
| **Issue #2131** — Hermes agent support | 1 day (new) | Feature request without clear product owner response | Product decision on agent framework strategy |

**No long-unanswered items** given both issues are from today, but **#2132 warrants priority attention** due to its technical depth and alignment with recently shipped notification infrastructure. Recommend maintainer response within 48 hours to retain engaged contributor.

---

*Digest generated from GitHub activity data for netease-youdao/LobsterAI on 2026-06-09.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-10

## 1. Today's Overview

CoPaw (QwenPaw) shows **high development velocity** with 33 issues and 34 PRs updated in the last 24 hours, split roughly evenly between open/active and closed/merged items. The project released **v1.1.11-beta.2**, continuing rapid iteration on browser automation and provider compatibility. A significant portion of activity centers on **bug fixes for production stability** — Windows path handling, Desktop/Tauri issues, and provider API compliance dominate. Community engagement is strong with 10-comment discussion threads on competitive analysis and active first-time contributor PRs. The project appears healthy but faces **technical debt pressure** from the upcoming AgentScope 2.0 migration and accumulating platform-specific edge cases.

---

## 2. Releases

### [v1.1.11-beta.2](https://github.com/agentscope-ai/QwenPaw/pull/5055) — 2026-06-09

| Change | Author | PR |
|--------|--------|-----|
| **feat(browser)**: Page coordinate click support in `browser_control` | @bfglx | [#4905](https://github.com/agentscope-ai/QwenPaw/pull/4905) |
| **fix(browser)**: CDP timeout parameter and browser profile isolation for cross-browser switching | @x1n95c | *(linked PR truncated)* |

**Breaking Changes**: None in this beta.

**Migration Notes**: Browser automation users should verify CDP timeout settings if experiencing connection instability with Chromium-based browsers.

---

## 3. Project Progress

### Merged/Closed PRs (16 total, key items)

| PR | Description | Significance |
|-----|-------------|--------------|
| [#5021](https://github.com/agentscope-ai/QwenPaw/pull/5021) | **fix**: `/compact` and auto-compaction now respect model's `max_input_length` when `active_model` is unset | Fixes silent 128K default fallback causing context truncation for long-context models (MiniMax M3 512K) |
| [#5043](https://github.com/agentscope-ai/QwenPaw/pull/5043) | **feat**: OpenSandbox plugin with MCP protocol | Security isolation for agent code execution — addresses [#4951](https://github.com/agentscope-ai/QwenPaw/issues/4951) |
| [#5049](https://github.com/agentscope-ai/QwenPaw/pull/5049) | **feat(providers)**: Zero-config free models & one-click OAuth authentication | Major UX improvement for new users; reduces onboarding friction |
| [#5048](https://github.com/agentscope-ai/QwenPaw/pull/5048) | **fix(agent)**: Await unawaited coroutine in `_broadcast_to_subscribers` | Fixes potential silent message delivery failures from AgentScope metaclass interaction |
| [#5054](https://github.com/agentscope-ai/QwenPaw/pull/5054) | **ci(e2e)**: Complete E2E integration CI pipeline | Infrastructure milestone — real backend testing with coverage |
| [#5050](https://github.com/agentscope-ai/QwenPaw/pull/5050) | **fix**: System theme toggle icon clarity (computer → sun) | Minor UI polish |
| [#5056](https://github.com/agentscope-ai/QwenPaw/pull/5056) | **ci**: Remove redundant channel-tests workflow | CI optimization |
| [#4615](https://github.com/agentscope-ai/QwenPaw/pull/4615) | **fix(acp)**: ACP orphan process cleanup after close | First-time contributor merge — process hygiene |

**Features Advanced**: Self-evolving skills (#4857, closed), OpenSandbox security isolation, OAuth provider flow, A2A/AgentHub import capabilities (#5033, open).

---

## 4. Community Hot Topics

### Most Active Discussions

| # | Title | Comments | 👍 | Analysis |
|---|-------|----------|-----|----------|
| [#5017](https://github.com/agentscope-ai/QwenPaw/issues/5017) | [CLOSED] 建议关注 Hermes Agent 的发展，借鉴其"学习循环"等优势特性 | 10 | 3 | **Strategic competitive analysis**. User identifies Hermes Agent's "Learning Loop" (auto skill creation from behavior) as differentiation. Underlying need: QwenPaw's skill system lacks autonomous evolution. Maintainer closed but noted for roadmap. |
| [#5003](https://github.com/agentscope-ai/QwenPaw/issues/5003) | [CLOSED] 阿里 coding plan qwen3.7-plus 卡死 | 8 | 0 | **Critical provider compatibility**. Specific to Alibaba's coding plan model — resolution likely in provider-specific handling. |
| [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) | [OPEN] [Breaking Change] Migrate backend from AgentScope 1.x to AgentScope 2.0 | 7 | 2 | **Major architectural migration**. Open since May 27, high-stakes backend overhaul. Community watching for timeline. |
| [#4937](https://github.com/agentscope-ai/QwenPaw/issues/4937) | [CLOSED] `/compact` ignores model's max_input_length | 5 | 0 | **Resolved** via #5021. Demonstrates config propagation gaps between UI and runtime. |
| [#5015](https://github.com/agentscope-ai/QwenPaw/issues/5015) | [OPEN] Windows Desktop 前端加载不流畅，CPU激增 | 5 | 0 | **Performance regression**. Task execution causes UI thread blocking — suggests renderer process architecture issue. |

**Underlying Needs**: 
- **Autonomous agent capabilities** (learning loops, self-evolving skills) — gap vs. competitors
- **Windows Desktop performance** — recurring theme, suggests Electron/Tauri optimization debt
- **Long-context model support** — users adopting 512K+ models, infrastructure lagging

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|----------|-------|--------|--------|---------|
| **High** | [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) — 千问3.6-27B 本地部署无响应 | **OPEN** | None identified | Regression from 1.1.5.post2 → 1.1.9/1.1.10. Silent failure (no logs), Docker deployment. **Blocking local model users.** |
| **High** | [#5015](https://github.com/agentscope-ai/QwenPaw/issues/5015) — Windows Desktop 卡顿/CPU激增 | **OPEN** | None identified | UI thread blocking during task execution. Session switching affected. |
| **High** | [#5045](https://github.com/agentscope-ai/QwenPaw/issues/5045) / [#5034](https://github.com/agentscope-ai/QwenPaw/issues/5034) — MCP tool names with dots rejected by DeepSeek/OpenAI API | **CLOSED** | #5043 (stateful_client.py) | Tool naming convention mismatch (`pat.batch_plan` vs `^[a-zA-Z0-9_-]+$`). **Fixed in later versions.** |
| **Medium** | [#4988](https://github.com/agentscope-ai/QwenPaw/issues/4988) — Windows path overflow from duplicated session IDs | **OPEN** | [#5036](https://github.com/agentscope-ai/QwenPaw/pull/5036) | `MAX_PATH` exceeded. PR open with fix. |
| **Medium** | [#5025](https://github.com/agentscope-ai/QwenPaw/issues/5025) — `submit_to_agent` FileNotFoundError | **OPEN** | None identified | Background inter-agent task path generation bug. Foreground `chat_with_agent` works. |
| **Medium** | [#5031](https://github.com/agentscope-ai/QwenPaw/issues/5031) — Skill slash invocation displays raw SKILL.md | **OPEN** | None identified | Console UI rendering bug — breaks skill UX. |
| **Medium** | [#5030](https://github.com/agentscope-ai/QwenPaw/issues/5030) — WeChat channel double replies in proactive mode | **OPEN** | None identified | Docker-Compose deployment. Workaround: disable proactive mode. |
| **Medium** | [#5044](https://github.com/agentscope-ai/QwenPaw/issues/5044) — Tauri Desktop external links/downloads broken | **CLOSED** | #5044 | Architecture issue with `tauri://localhost` origin isolation. |
| **Medium** | [#5042](https://github.com/agentscope-ai/QwenPaw/issues/5042) — Windows `Open Directory` fails outside C: drive | **CLOSED** | #5042 | Path handling assumption. |
| **Low** | [#5057](https://github.com/agentscope-ai/QwenPaw/issues/5057) — DingTalk AI Card sent empty when agent output blank | **OPEN** | None identified | Edge case in cron job output handling. |

**Regression Pattern**: v1.1.9–1.1.10 introduced multiple Windows/Desktop and local model deployment issues. Recommend stability-focused patch release.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood in Next Version | Rationale |
|-------|---------|---------------------------|-----------|
| [#4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) — Independent visual model config (Visual Model Fallback) | **High** | Architecture aligns with existing provider system; strong use case (text-only main model + vision fallback) |
| [#4994](https://github.com/agentscope-ai/QwenPaw/issues/4994) — Memory system self-evolution | **Medium** | Competitive response to Hermes; PR #4857 (self-evolving skills) shows active exploration |
| [#4951](https://github.com/agentscope-ai/QwenPaw/issues/4951) / [#5043](https://github.com/agentscope-ai/QwenPaw/pull/5043) — OpenSandbox support | **Shipped** | Merged in v1.1.11-beta.2 cycle |
| [#5009](https://github.com/agentscope-ai/QwenPaw/issues/5009) — Langfuse/OpenTelemetry observability integration | **Medium** | Enterprise demand; no PR yet but clear spec provided |
| [#4971](https://github.com/agentscope-ai/QwenPaw/issues/4971) — Session management UX (sidebar, fewer clicks) | **Medium** | Common complaint; UI-focused, lower risk |
| [#4778](https://github.com/agentscope-ai/QwenPaw/issues/4778) — Cron task UX improvements (names, JSON complexity, timestamps, deep links) | **Medium** | Multiple specific pain points; good first issue potential |
| [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) — AgentScope 2.0 migration | **High (planned)** | Breaking change; backend dependency upgrade |

**Emerging Theme**: **Modular model routing** — visual fallback, multi-model orchestration, and provider-agnostic configuration suggest architectural move toward model abstraction layer.

---

## 7. User Feedback Summary

### Pain Points

| Category | Specific Issues | Sentiment |
|----------|-----------------|-----------|
| **Windows Desktop** | Performance degradation, path limits, drive access, port persistence | 😤 Frustrated — "体验极差" (extremely poor experience) for Pet feature |
| **Local Model Deployment** | Silent failures, version regressions, no error logs | 😤 Confused — debugging difficulty |
| **Configuration Complexity** | JSON for cron tasks, session ID numbers without names, multi-click navigation | 😐 Annoyed — power users tolerate, new users struggle |
| **Provider Compatibility** | DeepSeek tool naming, KimiCode reasoning display, MiniMax context limits | 😐 Workaround-dependent |

### Positive Feedback

- **Localization**: "国内用起来特别舒服——本地化做得很到位，设置清晰无门槛，开箱即用" (#5017)
- **Skill system potential**: Active engagement with make-skill flow improvements

### Use Cases Emerging

- **Enterprise channels**: DingTalk, WeChat, Feishu integration — stability critical
- **Local AI deployment**: vLLM + Qwen models for privacy-sensitive environments
- **Multi-agent workflows**: `submit_to_agent`, `chat_with_agent` for team coordination

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Needs Action |
|----------|-----|------|--------------|
| [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) AgentScope 2.0 migration | ~2 weeks | **High** | Maintainer timeline commitment; blocks future AgentScope features |
| [#2777](https://github.com/agentscope-ai/QwenPaw/issues/2777) GPT-5.x `max_tokens` parameter error | ~2 months | **Medium** | Hardcoded model list; OpenAI provider maintenance |
| [#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) 千问3.6-27B regression | 3 days | **High** | No maintainer response; local model user blocker |
| [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) Tauri auto-updater | ~2 weeks | **Medium** | Desktop distribution maturity; open with merge conflicts potential |
| [#4981](https://github.com/agentscope-ai/QwenPaw/pull/4981) File preview security fix | 4 days | **High** | Security boundary fix; under review |
| [#5051](https://github.com/agentscope-ai/QwenPaw/pull/5051) Desktop backend port persistence | 1 day | **Medium** | Windows user experience; addresses #4733 |

**Maintainer Attention Recommended**: 
- **AgentScope 2.0 migration** (#4727) needs public roadmap
- **Local model regression** (#4989) lacks diagnostic engagement
- **Security PR** (#4981) should be prioritized for review

---

*Digest generated from GitHub activity 2026-06-09. All links reference https://github.com/agentscope-ai/QwenPaw.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-10

## 1. Today's Overview

ZeroClaw shows **extremely high development velocity** with 50 issues and 50 PRs updated in the last 24 hours, though merge throughput remains critically low (only 1 PR merged/closed vs. 49 open). The project is in a **heavy accumulation phase** with substantial feature development across channels, integrations, and core runtime, but faces **bottleneck risks** from review backlogs. Security hardening and multi-channel expansion dominate the sprint, while persistent context-budget and memory-priority bugs continue degrading production reliability. The community is actively engaged with 19-comment discussions on branding and 12-comment threads on agent self-awareness gaps.

---

## 2. Releases

**No new releases** (v0.8.0-beta-1 remains current).

---

## 3. Project Progress

### Closed Today
| PR | Description | Impact |
|:---|:---|:---|
| [#7425](https://github.com/zeroclaw-labs/zeroclaw/pull/7425) | **fix(runtime): resolve channel pricing via bare-type fallback in cost lookup** | Restored cost tracking and per-day budget enforcement for all channel agents; was silently recording `$0` |

### Significant Open PRs Advancing
| PR | Author | Focus |
|:---|:---|:---|
| [#7440](https://github.com/zeroclaw-labs/zeroclaw/pull/7440) | IftekharUddin | Eliminates futile history trimming when system prompt alone exceeds 32k budget — direct fix for [#5808](httpshttps://github.com/zeroclaw-labs/zeroclaw/issues/5808) |
| [#7441](https://github.com/zeroclaw-labs/zeroclaw/pull/7441) | databillm | Doctor command now validates custom `model_provider` entries against live config, not legacy factory |
| [#7417](https://github.com/zeroclaw-labs/zeroclaw/pull/7417) | databillm | Cron job edit modal parity with add form — fixes backend/frontend field mismatches |
| [#7438](https://github.com/zeroclaw-labs/zeroclaw/pull/7438) | IftekharUddin | Telegram delivery prompt no longer discourages tool use (addresses [#6646](https://github.com/zeroclaw-labs/zeroclaw/issues/6646)) |
| [#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361) | mov-xound-glitch | **XL**: Per-turn output routing (`send_via`) + voice delivery fixes across 7 channels |
| [#7367](https://github.com/zeroclaw-labs/zeroclaw/pull/7367) | IftekharUddin | **L**: Per-alias webhook routing for multi-instance channel configs |

---

## 4. Community Hot Topics

### Most Discussed Issues

| Issue | Comments | Core Tension |
|:---|:---|:---|
| [#4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) — "A better LOGO of Zeroclaw" | **19** 👍2 | Community branding investment vs. maintainer bandwidth; closed as blocked/needs-author-action despite engagement |
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) — "zeroclaw does not know it can add cron" | **12** | **Agent self-awareness gap**: LLM lacks tool introspection for `zeroclaw cron`; blocked on reproduction |
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) — "Unify providers architecture and reqwest client management" | **10** | Technical debt in provider layer; high-risk refactor accepted but unstaffed |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) — "Per-sender RBAC for multi-tenant agent deployments" | **9** | Enterprise isolation needs vs. single-security-primitive design; blocked on author action |

### Underlying Needs Analysis
- **Tool discoverability**: Agents cannot introspect their own capabilities (#5862) — suggests need for dynamic tool registration in system prompts
- **Enterprise readiness**: Multi-tenancy (#5982) and per-skill sandboxing (#5775) indicate production deployments are scaling beyond single-user scenarios
- **Brand maturation**: Logo debate (#4710) signals community preparing for broader adoption

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Risk |
|:---|:---|:---|:---|:---|
| **S1 — workflow blocked** | [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) — Default 32k context budget exceeded by system prompt + tools on iteration 1 | accepted | **[#7440](https://github.com/zeroclaw-labs/zeroclaw/pull/7440)** open | Perpetual preemptive trim renders agent non-functional |
| **S1** | [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) — User message loss in single/multi-turn dialogue | accepted | None identified | Provider compatibility regression (Qwen3.5-35B) |
| **S1** | [#6646](https://github.com/zeroclaw-labs/zeroclaw/issues/6646) — `web_search_tool`/`web_fetch` not firing via Telegram | accepted | **[#7438](https://github.com/zeroclaw-labs/zeroclaw/pull/7438)** open | Tool dispatch broken on Telegram channel |
| **S1** | [#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037) — Cron jobs launch repeatedly while still running | **in-progress** | None identified | Burst execution (20× in 3 minutes observed) |
| **S1** | [#6687](https://github.com/zeroclaw-labs/zeroclaw/issues/6687) — Two independent `SopEngine` instances; MQTT runs invisible to agent | accepted | None identified | State isolation bug in SOP lifecycle |
| **S2 — degraded** | [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) — Too much emphasis on memory | accepted | None identified | Cron jobs prioritize stale memories over current prompt |
| **S2** | [#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002) — Not clearly addressed to assistant (Telegram) | accepted | None identified | llama.cpp integration fails to route responses |

**Critical pattern**: 5 of 7 S1 bugs lack linked fix PRs. Context budget crisis (#5808) has **three** related issues (#5844 memory over-prioritization, #6034 message loss) suggesting systemic runtime fragility.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood Next Release | Blocker |
|:---|:---|:---|:---|
| **Per-turn output routing** (`send_via`) | [#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361) | **High** — PR open, XL size | Review bandwidth |
| **5 SMS channels** (Twilio, Plivo, Telnyx, Sinch, Vonage) | [#7265](https://github.com/zeroclaw-labs/zeroclaw/pull/7265) | High — PR open, docs stacked | Parent merge for stacked PRs |
| **4 chat/social channels** (Mastodon, Rocket.Chat, Zulip, Lemmy) | [#7270](https://github.com/zeroclaw-labs/zeroclaw/pull/7270) | High | Same as above |
| **5 integration tools** (Home Assistant, Hue, 8Sleep, Spotify, Sonos) | [#7278](https://github.com/zeroclaw-labs/zeroclaw/pull/7278) | Medium | Needs author action |
| **Unified agent turn engine** (RFC) | [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) | **Low** — just filed, needs-maintainer-review | Architectural review cycle |
| **Per-skill security permissions** | [#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) | Medium | Blocked on design consensus |
| **Process-memory limits for shell/skill subprocess** | [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) | Medium | Accepted, unstaffed |
| **Persist cached input tokens for cost accounting** | [#7248](https://github.com/zeroclaw-labs/zeroclaw/issues/7248) | Medium | Accepted, unstaffed |

**Prediction**: v0.8.0 stable will likely ship with channel expansion (SMS + social) and `send_via` routing, but **not** the unified turn engine or RBAC refactor.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|:---|:---|:---|
| **Agent cannot discover its own tools** | [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) — "zeroclaw says it does not have the tools to do this thing" | High — breaks core value proposition |
| **Context budget unusable with default tools** | [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) — 107k tokens of tool definitions vs. 32k budget | Critical — fresh conversations fail immediately |
| **Memory system over-prioritizes stale context** | [#5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844) — cron jobs "give too much value to memories" | High — degrades automation reliability |
| **Web dashboard broken in beta** | [#6862](https://github.com/zeroclaw-labs/zeroclaw/issues/6862), [#7253](https://github.com/zeroclaw-labs/zeroclaw/issues/7253) — SPA fallback serves HTML for `/api/*`, config page JSON parse errors | High — shipping beta UX is broken |
| **zerocode TUI polish gaps** | [#7376](https://github.com/zeroclaw-labs/zeroclaw/issues/7376)-[#7400](https://github.com/zeroclaw-labs/zeroclaw/issues/7400) — 4 macOS-specific issues (themes, key chords, locale, state labeling) | Medium — affects developer experience |

### Use Cases Emerging
- **Multi-tenant SaaS**: [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) RBAC, [#7410](https://github.com/zeroclaw-labs/zeroclaw/issues/7410) webhook secret rotation
- **Home automation hub**: [#7278](https://github.com/zeroclaw-labs/zeroclaw/pull/7278) integrations batch
- **Enterprise compliance**: [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) memory limits, [#5842](https://github.com/zeroclaw-labs/zeroclaw/issues/5842) `extra_args` validation

---

## 8. Backlog Watch

### Critical Items Needing Maintainer Action

| Issue/PR | Age | Problem | Action Needed |
|:---|:---|:---|:---|
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) — Unify providers architecture | ~7 weeks | High-risk refactor accepted, 10 comments, unstaffed | Assign owner or split into milestones |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) — Per-sender RBAC | ~7 weeks | Blocked on "needs-author-action" but is core architectural gap | Maintainer RFC response |
| [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) — User message loss | ~7 weeks | S1 workflow blocked, 5 comments, no repro from maintainers | Active reproduction assistance |
| [#6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037) — Cron burst execution | ~7 weeks | In-progress since April, no linked PR | Verify if fix landed in scheduler refactor |
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) — `.well-known` skills URI | ~11 weeks | Standards-alignment (agentskills), Cloudflare/Vercel already adopted | Decision on standards participation |
| [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) — RFC: Unify three agent turn engines | **Today** | Fresh RFC, needs-maintainer-review, cites audit gaps | Schedule architecture review |

### Merge Bottleneck
- **49 open PRs** vs. **1 merged/closed** in 24h suggests review capacity is the primary constraint
- XL-sized PRs ([#7361](https://github.com/zeroclaw-labs/zeroclaw/pull/7361), [#7265](https://github.com/zeroclaw-labs/zeroclaw/pull/7265), [#7270](https://github.com/zeroclaw-labs/zeroclaw/pull/7270), [#7278](https://github.com/zeroclaw-labs/zeroclaw/pull/7278)) compound review difficulty

---

**Project Health Assessment**: 🟡 **Functional but strained** — Exceptional feature velocity and community engagement, but S1 bug resolution lag, review backlog, and architectural debt accumulation risk stability if not addressed before v0.8.0 stable.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*