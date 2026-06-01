# OpenClaw Ecosystem Digest 2026-06-01

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-01 00:26 UTC

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

# OpenClaw Project Digest — 2026-06-01

## 1. Today's Overview

OpenClaw shows **extremely high velocity** with 500 issues and 500 PRs updated in the last 24 hours, indicating a project at peak development activity. The 301 open/active issues against 199 closed suggests a slight backlog accumulation, while the 210 open PRs versus 290 merged/closed indicates healthy throughput but potential reviewer bandwidth constraints. Four beta releases in two days (2026.5.30-beta.1 through 2026.5.31-beta.3) signal an aggressive stabilization push ahead of a likely June 2026 stable release. The dominant themes are **Codex runtime hardening**, **channel delivery reliability** (Telegram, WhatsApp, iMessage, Slack, Discord, Matrix), and **session state integrity**—reflecting OpenClaw's maturation from experimental framework to production agent infrastructure. Critical P1 issues remain concentrated around session context confusion, auth provider routing, and Codex app-server lifecycle management.

---

## 2. Releases

### v2026.5.31-beta.3, v2026.5.31-beta.2, v2026.5.31-beta.1
**Published:** 2026-05-31

| Change | Impact |
|--------|--------|
| **Agent/CLI runtime recovery** — cleaner handling of interrupted tool calls, stale session bindings, compaction handoffs, media delivery retries | 🔧 Reliability — addresses crash-loop scenarios in long-running agents |
| **Channel stability** — Telegram, WhatsApp, iMessage delivery improvements | 📱 User-facing — reduces message loss and duplicate delivery |

**Migration Notes:** No breaking changes documented. These are iterative beta fixes; beta.1 through beta.3 appear identical in changelog, suggesting rapid respins for CI/build verification or hotfix accumulation.

### v2026.5.30-beta.1
**Published:** 2026-05-30

Same highlights as 5.31 series plus explicit **Slack** channel stability mention. Slack support appears to have been promoted from experimental to tracked stability tier between 5.30 and 5.31.

---

## 3. Project Progress

### Closed PRs (Selected High-Impact)

| PR | Author | Description | Significance |
|----|--------|-------------|------------|
| [#88834](https://github.com/openclaw/openclaw/pull/88834) | charles-openclaw | Fix skip-PI model resolution using static catalog for Google Vertex models | 🔒 Security/compatibility — prevents auth profile bypass |
| [#77279](https://github.com/openclaw/openclaw/pull/77279) | MoerAI | Deduplicate identical path/url in inbound media-note formatter | 🎯 Quality-of-life — reduces context pollution for multimodal agents |
| [#88798](https://github.com/openclaw/openclaw/pull/88798) | jason-allen-oneal | Keep insecure Control UI auth disabled after onboarding | 🔒 Security — closes post-setup vulnerability window |
| [#88832](https://github.com/openclaw/openclaw/pull/88832) | TurboTheTurtle | Fix Telegram slow polling restart storms with exponential backoff | 🚀 Availability — prevents cascading gateway overload |
| [#88748](https://github.com/openclaw/openclaw/pull/88748) | jason-allen-oneal | Bridge OAuth profiles into Gemini CLI runtime | 🔐 Auth — enables enterprise Google Workspace integration |
| [#88835](https://github.com/openclaw/openclaw/pull/88835) | vincentkoc | Guard node approval policy writes against stale state | 🔒 Security — prevents race-condition policy corruption |
| [#88827](https://github.com/openclaw/openclaw/pull/88827) | TurboTheTurtle | Add Vertex API key model config regression coverage | 🧪 Test coverage — prevents future auth routing regressions |
| [#88723](https://github.com/openclaw/openclaw/pull/88723) | toruvieI | Respect explicit PI runtime policy in doctor diagnostics | 🔧 DX — reduces false-positive Codex plugin warnings |
| [#88803](https://github.com/openclaw/openclaw/pull/88803) | MonkeyLeeT | Preserve sessions_send external routes for internal handoffs | 🐛 Fix for #88044 — message delivery integrity |
| [#88814](https://github.com/openclaw/openclaw/pull/88814) | vincentkoc | Repair current main CI checks | 🏗️ Infrastructure — unblocks merge pipeline |

### Feature Advancement

| PR | Author | Feature Area | Status |
|----|--------|--------------|--------|
| [#88504](https://github.com/openclaw/openclaw/pull/88504) | kklouzal | **Multi-slot memory role architecture** — `memory.recall`, `.compaction`, `.capture`, `.ingest`, `.query` | 🌟 Major — enables memory plugin composition vs. mutual exclusion |
| [#78441](https://github.com/openclaw/openclaw/pull/78441) | guanbear | **Subagent toolsAllow forwarding** from `sessions_spawn` | 🌟 Major — fine-grained tool policy for embedded subagents |
| [#88785](https://github.com/openclaw/openclaw/pull/88785) | williamliu-ai | **TUI backgrounded run restoration** via gateway snapshot | 🎯 UX — fixes long-standing "blank TUI on agent switch" |
| [#88750](https://github.com/openclaw/openclaw/pull/88750) | ragesaq | **Context engine runtime settings** lifecycle contract | 🏗️ Foundation — enables per-engine configuration |
| [#87072](https://github.com/openclaw/openclaw/pull/87072) | anagnorisis2peripeteia | **Interleaved progress lane** for Telegram (opt-in) | ✨ Showcase — CLI-like streaming UX in messaging |

---

## 4. Community Hot Topics

### Most Active Issues (by Comment Count)

| # | Issue | Comments | Reactions | Core Need |
|---|-------|----------|-----------|-----------|
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | **Agent replies to previous message** — session context confusion | 13 | 👍1 | 🧠 **Deterministic session routing** — users need guarantee that agent state matches current turn, not stale context |
| [#87307](https://github.com/openclaw/openclaw/issues/87307) | Matrix thread replies sent as normal replies; /status and /model silent | 11 | 👍1 | 🔄 **Matrix parity** — thread-native UX and command visibility in E2EE environments |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) | Pre-response enforcement hooks (hard gates) for mandatory tool-call/policy rules | 11 | 👍2 | 🔒 **Mechanical policy enforcement** — financial/security domains need *provable* agent constraints, not prompt-based "hope" |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) | Channel-mediated approval for MCP tool calls (consent envelope) | 11 | 👍1 | ✋ **Human-in-the-loop for external mutations** — email send, vault write, etc. need same gating as shell-exec |
| [#88788](https://github.com/openclaw/openclaw/issues/88788) | GHCR 2026.5.28 image emits stale Discord progress commentary config schema | 9 | 👍1 | 🐳 **Container image fidelity** — tagged images must match source schema guarantees |

### Underlying Needs Analysis

- **Session integrity** dominates: context confusion (#32296), stale subagent announcements (#78055), transcript lock staleness (#87217) all point to distributed state management at scale
- **Enterprise governance**: hard gates (#13583) and MCP consent envelopes (#78308) signal OpenClaw penetrating regulated industries
- **Multi-channel operational complexity**: Each channel (Matrix, Discord, Telegram, Feishu, Slack) has unique threading/permission models creating combinatorial test surface

---

## 5. Bugs & Stability

### P1 Critical (Data Loss / Crash Loop / Security)

| Issue | Symptom | Fix PR? | Risk |
|-------|---------|---------|------|
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | Agent replies to *previous* message — session context misrouting | ❌ No | 🔴 **Message misalignment** — breaks conversation coherence |
| [#83959](https://github.com/openclaw/openclaw/issues/83959) | Codex app-server startup retries exhaust before replacement ready | ❌ No | 🔴 **Crash loop** — scheduled agents fail permanently |
| [#85251](https://github.com/openclaw/openclaw/issues/85251) | Codex app-server emits turn/started then silent; 360s stuck-session recovery | ❌ No | 🔴 **Session wedge** — full turn loss, user sees hang |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) | Cron jobs silently timeout during LLM API outages instead of fast-fail | ❌ No | 🔴 **Resource exhaustion** — wastes compute, delays alerting |
| [#86047](https://github.com/openclaw/openclaw/issues/86047) | Codex/plugin approval stalls cause interrupted turns, tool timeouts in Nextcloud Talk | ❌ No | 🔴 **Production regression** — 2026.5.22 upgrade blocker |
| [#86996](https://github.com/openclaw/openclaw/issues/86996) | Active Memory + Codex path: latency, hook timeouts, gateway event-loop stalls | ❌ No | 🔴 **Cascading degradation** — simple DMs become unreliable |
| [#88443](https://github.com/openclaw/openclaw/issues/88443) | `auth.cooldowns` config change forces full gateway restart, drops in-flight runs | ✅ [#88835](https://github.com/openclaw/openclaw/pull/88835) related | 🟡 **Availability** — hot-path config reload unsafe |

### P2 High (Functional Degradation)

| Issue | Symptom | Fix PR? |
|-------|---------|---------|
| [#87307](https://github.com/openclaw/openclaw/issues/87307) | Matrix thread replies regression | ❌ No |
| [#88788](https://github.com/openclaw/openclaw/issues/88788) | Stale Discord config schema in GHCR image | ❌ No |
| [#85888](https://github.com/openclaw/openclaw/issues/85888) | Cron jobs fail MiniMax 503 at 05:00-07:30 CST; manual triggers succeed | ❌ No |
| [#87616](https://github.com/openclaw/openclaw/issues/87616) | LLM timeout ~3s despite 30s+ config (LM Studio local) | ❌ No |
| [#86342](https://github.com/openclaw/openclaw/issues/86342) | MissingAgentHarnessError race during plugin cache cycle | ❌ No |

### Regressions in 2026.5.x Series

| Version | Issue | Status |
|---------|-------|--------|
| 2026.5.22 | Matrix thread behavior (#87307) | 🔴 Open |
| 2026.5.22 | Codex approval stalls in Nextcloud Talk (#86047) | 🔴 Open |
| 2026.5.19 | Session transcript `file_lock_stale` persists (#87217) | ✅ Fixed (closed) |
| 2026.5.19 | Codex startup retry exhaustion (#83959) | 🔴 Open |
| 2026.5.7 | Subagent regression with Ollama (#81214) | ✅ Fixed (closed) |
| 2026.5.7 | Telegram group replies to DM (#79308) | 🔴 Open |
| 2026.5.4 | Discord channel not loaded (#77930) | 🔴 Open |
| 2026.5.4 | Slack start-account blocks event loop 5+ min (#78435) | 🔴 Open |

---

## 6. Feature Requests & Roadmap Signals

### Likely Near-Term (Next 1-2 Releases)

| Feature | Issue/PR | Signals |
|---------|----------|---------|
| **Hard gates / pre-response enforcement hooks** | [#13583](https://github.com/openclaw/openclaw/issues/13583) | 11 comments, security label, "diamond lobster" rating — enterprise demand clear |
| **MCP consent envelope / channel-mediated approval** | [#78308](https://github.com/openclaw/openclaw/issues/78308) | Complements existing shell-exec approval; security-critical for MCP ecosystem |
| **Multi-slot memory architecture** | [#88504](https://github.com/openclaw/openclaw/pull/88504) | PR open, XL size, showcase feature — addresses plugin composition pain |
| **Subagent toolsAllow policy** | [#78441](https://github.com/openclaw/openclaw/pull/78441) | PR ready for review, security-boundary merge risk — governance need |

### Medium-Term (3-6 Months)

| Feature | Issue/PR | Signals |
|---------|----------|---------|
| **Discord voice-as-IO bridge** | [#73699](https://github.com/openclaw/openclaw/issues/73699) | Closed but referenced; voice channel isolation vs. text session merge |
| **Per-skill thinking/model config** | [#8441](https://github.com/openclaw/openclaw/issues/8441) | Closed; cron jobs already have this, skills parity expected |
| **i18n slash command descriptions** | [#79458](https://github.com/openclaw/openclaw/issues/79458) | Stale but 5 comments; Chinese user base growth signal |
| **Frequency/presence penalty for OpenAI-compatible** | [#32496](https://github.com/openclaw/openclaw/issues/32496) | Closed; standard API parity |

### Emerging Signals

- **"Dreaming" / shadow trial scoring** ([#88830](https://github.com/openclaw/openclaw/pull/88830)): Experimental memory optimization — indicates investment in autonomous agent reflection
- **Trajectory runtime event byte cap override** ([#80681](https://github.com/openclaw/openclaw/pull/80681)): Operational telemetry scaling for enterprise deployments

---

## 7. User Feedback Summary

### Pain Points (Explicit Complaints)

| Theme | Frequency | Severity | Representative Issue |
|-------|-----------|----------|----------------------|
| **Session state corruption / confusion** | 🔥🔥🔥🔥🔥 | Critical | #32296, #85251, #87217, #78055 |
| **Codex runtime instability** | 🔥🔥🔥🔥🔥 | Critical | #83959, #85251, #86047, #86996, #78947 |
| **Channel-specific delivery failures** | 🔥🔥🔥🔥 | High | #87307 (Matrix), #79308 (Telegram), #77666 (Feishu), #77359 (Discord) |
| **Auth/profile routing complexity** | 🔥🔥🔥🔥 | High | #75739, #67423, #71709, #47964, #80628 |
| **Config reload safety** | 🔥🔥🔥 | Medium | #88443, #88288 |
| **Plugin loader/debuggability** | 🔥🔥 | Medium | #78301 |

### Use Cases Emerging

| Pattern | Evidence | Implication |
|---------|----------|-------------|
| **Scheduled cron agents for business operations** | #45494, #85888, #83959 | OpenClaw used as production job scheduler, not just chatbot |
| **Multi-tenant channel bots** (Discord, Telegram groups) | #77359, #79308, #77666 | Single instance serving multiple communities with isolation expectations |
| **China/mainland deployment** | #67670, #85888 | Requires proxy/VPN resilience, regional provider support (MiniMax) |
| **Financial/security "hard policy" enforcement** | #13583 | Regulated industry penetration |
| **Voice + text unified sessions** | #73699 | Multimodal agent deployment |

### Satisfaction Signals

- **Rapid beta iteration** (4 releases in 2 days) shows responsive maintainer team
- **Clawsweeper bot automation** (labels like `fix-shape-clear`, `queueable-fix`) indicates mature triage
- **Issue rating system** (🐚 platinum hermit, 🦞 diamond lobster, etc.) suggests engaged, possibly fun-loving community

---

## 8. Backlog Watch

### Stale Important Issues (>2 months old, still open, high impact)

| Issue | Age | Last Update | Blockers | Action Needed |
|-------|-----|-------------|----------|---------------|
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | ~3 months | 2026-05-31 | `needs-live-repro`, `needs-maintainer-review`, `needs-product-decision` | 🔴 **Decision required** — session routing architecture; 13 comments, highest engagement |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) | ~4 months | 2026-05-31 | `needs-security-review`, `needs-product-decision` | 🔴 **Security review** — hard gates design; enterprise blocker |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) | ~2 months | 2026-05-31 | `needs-maintainer-review`, `needs-product-decision`, `needs-live-repro` | 🟡 **Product decision** — MCP consent envelope API design |
| [#51628](https://github.com/openclaw/openclaw/issues/51628) | ~2.5 months | 2026-05-31 | `needs-maintainer-review`, `needs-product-decision` | 🟡 **Queue recovery redesign** — Telegram delivery edge case |
| [#78435](https://github.com/openclaw/openclaw/issues/78435) | ~2 months | 2026-05-31 | `stale` | 🟡 **Windows-specific** — event loop blocking; needs platform owner |

### PRs Ready for Maintainer Review (but unmerged)

| PR | Age | Feature | Merge Risk Labels |
|----|-----|---------|-----------------|
| [#78441](https://github.com/openclaw/openclaw/pull/78441) | ~2 months | Subagent toolsAllow | compatibility, session-state, security-boundary |
| [#87072](https://github.com/openclaw/openclaw/pull/87072) | ~6 days | Telegram interleaved progress | compatibility, message-delivery |
| [#88504](https://github.com/openclaw/openclaw/pull/88504) | 1 day | Multi-slot memory | compatibility, session

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent Ecosystem
*June 1, 2026*

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem has matured into a **multi-tier landscape** with clear leaders, active challengers, and maintenance-mode projects. OpenClaw dominates by velocity and production adoption, while Hermes Agent, ZeroClaw, and NanoBot compete for specific use cases with varying degrees of engineering discipline. A **critical mass of projects now targets enterprise deployment**, evidenced by converging demands for RBAC, audit trails, and SSO integration. However, **review bandwidth bottlenecks are endemic**—most active projects show 70-85% open PR rates, suggesting the ecosystem is scaling faster than maintainer capacity. The fragmentation around Windows support, provider compatibility, and session state management indicates these remain unsolved cross-cutting concerns.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Open PR Rate | Releases | Health Score* | Status |
|:---|:---:|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 | 500 | 42% | 4 betas (May 30-31) | 🟢 Strong | Aggressive stabilization push |
| **Hermes Agent** | 50 | 50 | 84% | None | 🟡 Strained | High velocity, review bottleneck |
| **ZeroClaw** | 46 | 50 | 82% | None (v0.8.0-beta-2 pending) | 🟡 Strained | Active development, release imminent |
| **NanoBot** | 6 | 19 | 63% | None | 🟢 Healthy | Security-focused, well-maintained |
| **PicoClaw** | 7 | 11 | 64% | Nightly only | 🟡 Moderate | Feature velocity, review backlog |
| **CoPaw (QwenPaw)** | 17 | 2 | 50% | None | 🔴 Stressed | Bug influx, maintainer bandwidth gap |
| **IronClaw** | 4 | 21 | 71% | None | 🟡 Moderate | "Reborn" migration, CI instability |
| **NanoClaw** | 5 | 9 | 78% | None | 🔴 Stressed | Production outages, no fixes |
| **Moltis** | 0 | 1 | 100% | None | 🟢 Stable | Minimal activity, focused fix |
| **NullClaw** | 2 | 0 | N/A | None | 🔴 Dormant | Zero PR activity, unaddressed bugs |
| **LobsterAI** | 0 | 1 (stale) | 100% | None | 🔴 Stagnant | 58-day unmerged PR |
| **ZeptoClaw** | 1 (closed) | 0 | N/A | None | 🟡 Dormant | Zero backlog, unclear engagement |
| **TinyClaw** | 0 | 0 | N/A | None | ⚪ Inactive | No activity |

*\*Health Score combines velocity, merge ratio, release cadence, and issue resolution patterns*

---

## 3. OpenClaw's Position

### Advantages vs. Peers

| Dimension | OpenClaw | Closest Competitor |
|:---|:---|:---|
| **Raw velocity** | 500 issues/PRs daily | Hermes Agent (50), ZeroClaw (50) — 10x gap |
| **Release discipline** | 4 betas in 2 days, stable imminent | ZeroClaw (beta-2 pending), others none |
| **Channel breadth** | 6+ production channels (Telegram, WhatsApp, iMessage, Slack, Discord, Matrix) | ZeroClaw (4+), Hermes (3+), NanoBot (2+) |
| **Enterprise readiness** | Hard gates (#13583), MCP consent (#78308), session integrity investments | ZeroClaw (RBAC #5982), IronClaw (auth flows) |
| **Community scale** | Issue rating system, automated triage bots, 13-comment threads | Hermes (10-comment Windows threads), others minimal |

### Technical Approach Differences

- **OpenClaw**: Monolithic gateway with **Codex runtime** as first-class citizen; session state distributed across channel adapters; aggressive beta iteration for stabilization
- **Hermes Agent**: Modular profile/gateway architecture with **Honcho** multi-tenancy; continuous deployment without versions; desktop installer focus
- **ZeroClaw**: Rust/Cargo-based with **hardware/IoT extension** (ESP32); zerocode TUI for non-technical users; multi-tenant Linq routing
- **NanoBot**: WebUI-first with **heartbeat health monitoring**; goal-driven agent loops; rapid security patch turnaround
- **IronClaw**: **"Reborn" architectural migration** with libSQL durability; trigger-based autonomous execution; OAuth/SSO wire-up

### Community Size Comparison

OpenClaw operates at **ecosystem-defining scale** — its daily activity exceeds most competitors' monthly totals. The "diamond lobster" rating system and `Clawsweeper` automation indicate a **self-sustaining community culture** absent elsewhere. Only Hermes Agent shows comparable organic engagement (duplicate Windows issues signaling mass-market demand), but without OpenClaw's triage infrastructure.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Session state integrity** | OpenClaw (#32296, #85251), NanoBot (#4128), CoPaw (#4653), PicoClaw (#2952) | Deterministic routing, isolation between cron/user sessions, transcript lock management |
| **Enterprise SSO/OAuth** | OpenClaw (#88748), NanoBot (#4125), IronClaw (#4257, #3289), ZeroClaw (#4879), Hermes (#25267) | Azure AAD, Google Workspace, GitHub PAT, "Codex-style" subscription OAuth |
| **MCP ecosystem trust** | OpenClaw (#78308), NanoClaw (#2641), IronClaw (#2923), ZeroClaw (#4467) | Consent envelopes, stdio activation reliability, supply-chain sandboxing |
| **Windows platform parity** | Hermes (#2512, #10359), CoPaw (#4123, #4828, #4832), NanoBot (implied) | Native performance without WSL2, subprocess `CREATE_NO_WINDOW`, console flash elimination |
| **Provider compatibility** | OpenClaw (#88834, #88827), Hermes (#25516, #36070), ZeroClaw (#7022, #5962), PicoClaw (#2674, #2968), Moltis (#1088) | Streaming delta parsing, temperature parameter handling, tool-call format normalization |
| **Cron/automation reliability** | OpenClaw (#45494, #83959), ZeroClaw (#6647, #6954), CoPaw (#4653, #4835), NullClaw (#941) | Session isolation, fast-fail on LLM outage, subprocess spawning, channel routing |
| **Multi-tenant isolation** | OpenClaw (implied), ZeroClaw (#5982, #7041), Hermes (Honcho profiles) | Per-sender RBAC, alias routing, profile-scoped tool policies |

---

## 5. Differentiation Analysis

| Project | Primary Target User | Core Differentiator | Architecture Signature |
|:---|:---|:---|:---|
| **OpenClaw** | Production operators, multi-channel bot builders | **Channel delivery reliability at scale** | Go-based gateway, Codex runtime, plugin memory architecture |
| **Hermes Agent** | Individual developers, IDE users | **Claude Code parity**, desktop-native experience | Python, Honcho multi-tenancy, continuous `main` deployment |
| **ZeroClaw** | IoT/edge deployers, hardware hackers | **ESP32/hardware integration**, zerocode TUI | Rust, Cargo feature flags, serial device abstraction |
| **NanoBot** | Enterprise self-hosters, ops-monitored teams | **Heartbeat health monitoring**, fail-closed design | TypeScript, WebUI-centric, sustained goal iteration |
| **IronClaw** | NEAR ecosystem, local-first advocates | **Trigger-based autonomy**, libSQL durability | Rust, WASM plugins, "Reborn" migration |
| **CoPaw (QwenPaw)** | Chinese market, Qwen ecosystem | **DashScope/Alibaba integration**, thinking effort controls | Python, OpenAI SDK compatibility layer |
| **NanoClaw** | Claude Code power users, container deployers | **Claude Code ecosystem integration**, skill filesystem | TypeScript, v2 container architecture, OneCLI gateway |
| **PicoClaw** | Resource-constrained deployments, mobile | **LM Studio simplicity**, ARM64/Termux support | Go, nightly builds, minimal configuration ethos |

**Key architectural forks:**
- **Gateway topology**: OpenClaw/ZeroClaw use centralized gateway; NanoClaw uses OneCLI proxy; Hermes uses profile-scoped gateways
- **State management**: OpenClaw (distributed session binding); IronClaw (libSQL triggers); NanoBot (heartbeat externalization)
- **Deployment model**: OpenClaw/Hermes (general-purpose); ZeroClaw (IoT/edge); NanoBot (enterprise-monitored); NanoClaw (container/Claude Code)

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (Velocity >100 items/day)

| Project | Trajectory | Risk |
|:---|:---|:---|
| **OpenClaw** | Stabilizing toward June 2026 stable release | Reviewer bandwidth; P1 session bugs could delay release |
| **Hermes Agent** | Feature expansion stressed by Windows/platform debt | 84% open PR rate; no versioned releases for production users |

### Tier 2: Active Development (10-100 items/day)

| Project | Trajectory | Risk |
|:---|:---|:---|
| **ZeroClaw** | v0.8.0-beta-2 integration pending; hardware expansion | 82% open PR rate; 7 blocked security reviews |
| **IronClaw** | "Reborn" migration consolidating auth/triggers | CI instability (#4108); nightly E2E failures |
| **NanoBot** | Security-hardening phase; enterprise features queued | Review bottleneck on long-running PRs (#1443, 3 months) |

### Tier 3: Constrained Maintenance (<10 items/day, issues exceed capacity)

| Project | Trajectory | Risk |
|:---|:---|:---|
| **CoPaw** | Windows stability crisis; bug influx overwhelming | 5 Windows-specific P0s in 24h; maintainer bandwidth gap |
| **PicoClaw** | Feature velocity with accumulating review debt | Unmerged stability PRs (#2904, #2906) for 11 days |
| **NanoClaw** | Production outages with no engineering response | 3 P0 gateway failures; zero comments on issues |

### Tier 4: Maintenance/Stagnation

| Project | Trajectory | Risk |
|:---|:---|:---|
| **Moltis** | Single focused fix; minimal community | May be healthy maturity or contributor attrition |
| **NullClaw** | Unaddressed critical bugs; zero PR activity | Likely maintainer absence; #941 silent failure pattern |
| **LobsterAI** | 58-day unmerged data consistency fix | Project momentum unclear; possible NetEase deprioritization |
| **ZeptoClaw** | Zero backlog after security scan | Either exceptional health or community departure |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Actionable Insight |
|:---|:---|:---|
| **"Hard policy" enforcement as enterprise table stakes** | OpenClaw #13583 (11 comments, diamond lobster), NanoClaw #2641 (supply chain incident), ZeroClaw #6914-6917 (security audit cluster) | Implement mechanical constraints, not prompt-based "hope"; design for provable audit trails |
| **Subscription OAuth vs. API key double-billing** | Hermes #25267 (12 👍), OpenClaw #88748 (enterprise Google) | Negotiate provider-side OAuth; users resist paying twice for same capability |
| **Local/self-hosted LLM as non-negotiable option** | PicoClaw #28 (21 comments, longest-running), Hermes #7069 (local LLM timeout), NanoBot #4122 (local ASR) | Design for LM Studio/Ollama compatibility; one-click setup is competitive advantage |
| **Voice as emerging standard channel** | ZeroClaw #7050 (TTS OGG/Opus), NanoBot #4122 (FunASR voice), OpenClaw (media-note deduplication) | Plan for ASR/TTS pipeline integration; voice is next multimodal frontier |
| **Cron/scheduled agents as production workload** | OpenClaw #45494, ZeroClaw #6954, CoPaw #4653, NullClaw #941 | Session isolation is architectural requirement, not afterthought; fast-fail on provider outage |
| **MCP as both opportunity and attack surface** | OpenClaw #78308, IronClaw #2923, NanoClaw #2641, ZeroClaw #4467 | Build consent envelopes and sandboxing before user incidents force reactive hardening |
| **Windows as unresolved platform debt** | Hermes (14 👍 across 2 issues), CoPaw (5 issues, 23-day unmerged fix) | CI/CD investment for Windows; subprocess handling is systematic blind spot |
| **Review bandwidth as scaling bottleneck** | Universal 70-85% open PR rates across active projects | Automated testing, contributor guidelines, and delegated review are infrastructure, not nice-to-haves |

---

*Report compiled from 14 project digests covering 1,163 issues/PRs and 6 releases over 24-hour period ending 2026-06-01.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-01

## 1. Today's Overview

NanoBot shows **high development velocity** with 25 total items updated in the last 24 hours (6 issues, 19 PRs), indicating an active, well-maintained codebase. The project demonstrates strong **security-conscious maintenance** with rapid turnaround on critical vulnerabilities—two security/bug fixes were merged within 48 hours of reporting. However, the **12 open PRs versus 7 merged/closed** suggests a potential review bottleneck, particularly for community-contributed features like Azure AAD authentication and voice input. The WebUI received focused stabilization attention, addressing a high-severity crash. No new releases were published, indicating the project may be accumulating changes for a larger version bump.

---

## 2. Releases

**No new releases** as of 2026-06-01.

---

## 3. Project Progress

### Merged/Closed PRs (7 items)

| PR | Description | Impact |
|:---|:---|:---|
| [#4127](https://github.com/HKUDS/nanobot/pull/4127) | Extend sustained goal iteration budget | Agent loop robustness for long-running `/goal` tasks |
| [#4121](https://github.com/HKUDS/nanobot/pull/4121) | Polish chat rendering and host runtime | WebUI stability, cleaner streaming output, reasoning block ordering |
| [#4117](https://github.com/HKUDS/nanobot/pull/4117) | Handle undefined language in code blocks | **Fixes critical WebUI crash** (white screen on code blocks without language specifier) |
| [#4112](https://github.com/HKUDS/nanobot/pull/4112) | Heartbeat fail-closed on internal checks | Prevents notification spam, closes security gap in heartbeat evaluator |
| [#4103](https://github.com/HKUDS/nanobot/pull/4103) | Require auth for WebSocket token issuance | **Fixes security vulnerability #4077**—unauthenticated token minting eliminated |
| [#4114](https://github.com/HKUDS/nanobot/pull/4114) | Skip empty HEARTBEAT.md and fail closed on delivery | **Fixes #4111**—eliminates false "All clear." notifications to Feishu |
| [#4118](https://github.com/HKUDS/nanobot/pull/4118) | Test push | No material impact |

**Key advances:** WebUI crash resilience, heartbeat notification correctness, WebSocket security hardening, and agent loop continuity for sustained goals.

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|:---|:---|:---|
| [#4125](https://github.com/HKUDS/nanobot/issues/4125) / [#4126](https://github.com/HKUDS/nanobot/pull/4126) — Azure AAD Auth | 1 comment, matching issue+PR pair | **Enterprise adoption blocker**: Organizations with strict Azure policies prohibit API key authentication. This reflects NanoBot's growing enterprise user base needing SSO/identity integration. |
| [#4120](https://github.com/HKUDS/nanobot/issues/4120) — Vest MCP monetization | 1 comment | Commercial ecosystem emerging around NanoBot; tool recommendation accuracy is a perceived pain point for agent frameworks. |
| [#4122](https://github.com/HKUDS/nanobot/pull/4122) — Voice recording + local ASR | 0 comments, `invalid` label | Multimodal input demand, but implementation concerns (WebUI scope creep? dependency on FunASR?). Label suggests needs revision. |

**Underlying needs:** Enterprise security compliance (AAD), offline/local-first capabilities (local ASR), and ecosystem monetization/tool discovery.

---

## 5. Bugs & Stability

| Severity | Item | Status | Details |
|:---|:---|:---|:---|
| **High** | [#4116](https://github.com/HKUDS/nanobot/issues/4116) — WebUI white screen crash | **Fixed** via [#4117](https://github.com/HKUDS/nanobot/pull/4117) | `react-syntax-highlighter` crashes on undefined language prop; complete session load failure |
| **High** | [#4077](https://github.com/HKUDS/nanobot/issues/4077) — WebSocket token minting without auth | **Fixed** via [#4103](https://github.com/HKUDS/nanobot/pull/4103) | Unauthenticated short-lived token issuance when static token configured |
| **Medium** | [#4111](https://github.com/HKUDS/nanobot/issues/4111) — Heartbeat false "All clear." to Feishu | **Fixed** via [#4114](https://github.com/HKUDS/nanobot/pull/4114) | Noise pollution in enterprise messaging channels |
| **Medium** | [#4128](https://github.com/HKUDS/nanobot/issues/4128) — `retain_recent_legal_suffix` duplicates user messages | **Open**, no fix PR | Context corruption: user messages appear in both archive and kept sets; LLM inconsistency risk |
| **Medium** | [#4124](https://github.com/HKUDS/nanobot/pull/4124) — XML tool call leaks from mimo/glm models | **Open PR** | Raw XML exposed to users in Telegram/WebSocket; affects OpenAI-compatible model compatibility |

**Stability assessment:** Rapid closure of 3 reported bugs, but [#4128](https://github.com/HKUDS/nanobot/issues/4128) lacks a fix and affects core session management logic.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood in Next Release |
|:---|:---|:---|
| **Azure AAD/Identity-based authentication** | [#4125](https://github.com/HKUDS/nanobot/issues/4125) / [#4126](https://github.com/HKUDS/nanobot/pull/4126) | **High** — PR ready, enterprise-critical |
| **Voice input + local ASR (FunASR)** | [#4122](https://github.com/HKUDS/nanobot/pull/4122) | **Moderate** — `invalid` label suggests rework needed; multimodal is strategic |
| **Registry-driven provider config (Bedrock region/profile)** | [#3994](https://github.com/HKUDS/nanobot/pull/3994) | **Moderate** — Long-running PR (May 25), infrastructure change |
| **Heartbeat reasoning decoupling** | [#1443](https://github.com/HKUDS/nanobot/pull/1443) | **Moderate** — 3 months old, significant behavior change, needs maintainer decision |
| **Dream skill ownership enforcement** | [#4101](https://github.com/HKUDS/nanobot/pull/4101) | **High** — Security-related, prevents skill overwrites |
| **Read-only extra filesystem roots** | [#4099](https://github.com/HKUDS/nanobot/pull/4099) | **High** — Security boundary fix |

**Predicted next version themes:** Enterprise security (AAD, filesystem boundaries), provider configurability, and agent memory safety.

---

## 7. User Feedback Summary

### Pain Points
- **Enterprise lock-in**: API-key-only auth blocks Azure enterprise deployments ([#4125](https://github.com/HKUDS/nanobot/issues/4125))
- **WebUI fragility**: Markdown rendering crashes break entire sessions ([#4116](https://github.com/HKUDS/nanobot/issues/4116))
- **Notification noise**: Heartbeat misfires erode trust in automation ([#4111](https://github.com/HKUDS/nanobot/issues/4111))
- **Model compatibility**: Non-standard tool call formats (XML) leak to users ([#4124](https://github.com/HKUDS/nanobot/pull/4124))
- **Context integrity**: Message deduplication bugs break LLM consistency ([#4128](https://github.com/HKUDS/nanobot/issues/4128))

### Use Cases Emerging
- **Enterprise self-hosted**: AAD, filesystem sandboxing, heartbeat for ops monitoring
- **Multimodal agent**: Voice input for hands-free interaction
- **Multi-model backends**: mimo, GLM, Bedrock diversity demands

### Satisfaction Signals
- Rapid security fix turnaround (24-48h)
- Active WebUI polish (streaming, rendering)

### Dissatisfaction Signals
- Long PR review times (3+ months for [#1443](https://github.com/HKUDS/nanobot/pull/1443))
- `invalid` label on community contribution [#4122](https://github.com/HKUDS/nanobot/pull/4122) without clear path forward

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) — Heartbeat reasoning decoupling | **3 months** (Mar 2) | Behavior change stagnation; conflicts likely | Maintainer decision on default `sendReasoning` value |
| [#3990](https://github.com/HKUDS/nanobot/pull/3990) — Dream class simplification | **7 days** (May 24) | Architectural debt; Dream is complex | Review for merge readiness, test coverage |
| [#3994](https://github.com/HKUDS/nanobot/pull/3994) — Registry-driven provider config | **7 days** (May 25) | Provider extensibility blocked | Final review, WebUI integration validation |
| [#3997](https://github.com/HKUDS/nanobot/pull/3997) — Tokenizer pre-warming | **7 days** (May 25) | Startup latency optimization | Low risk, ready for merge? |
| [#4128](https://github.com/HKUDS/nanobot/issues/4128) — Message deduplication bug | **1 day, no fix** | Data corruption in production | Triage and assign |

**Critical attention:** [#1443](https://github.com/HKUDS/nanobot/pull/1443) is the oldest significant PR; without maintainer engagement, community contributors may disengage. [#4128](https://github.com/HKUDS/nanobot/issues/4128) needs immediate assignment as it affects core session integrity.

---

*Digest generated from HKUDS/nanobot GitHub activity for 2026-05-31 → 2026-06-01.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-01

## 1. Today's Overview

Hermes Agent shows **extremely high development velocity** with 50 issues and 50 PRs updated in the last 24 hours, indicating an active, rapidly evolving codebase. However, the **merge ratio is concerning**: only 8 of 50 PRs were merged/closed (16%), with 42 remaining open, suggesting potential bottlenecks in review capacity. Zero new releases continue a pattern of continuous deployment without versioned milestones. The project is experiencing **platform expansion stress**—Windows support remains the top community demand while gateway adapters (Telegram, Discord, Feishu) and provider integrations (Gemini, MiniMax, Anthropic) require significant stabilization work.

---

## 2. Releases

**No new releases.** The project continues without versioned releases; users track `main` branch directly.

---

## 3. Project Progress

### Merged/Closed PRs (8 total, 3 shown with significance)

| PR | Status | Summary | Link |
|:---|:---|:---|:---|
| #36134 | **CLOSED** | Fixed macOS/Linux thin installer: desktop stage now properly builds instead of silently skipping | [PR #36134](https://github.com/NousResearch/hermes-agent/pull/36134) |
| #36129 | **CLOSED** | Gateway restart flap fixed on macOS via `psutil` fallback for process start time (non-Linux compatibility) | [PR #36129](https://github.com/NousResearch/hermes-agent/pull/36129) |

### Notable Open PRs Advancing

| PR | Area | Progress | Link |
|:---|:---|:---|:---|
| #36145 | **Tracing/UX** | New `/upload-trace` + `hermes trace upload` to HF Agent Trace Viewer—significant observability feature | [PR #36145](https://github.com/NousResearch/hermes-agent/pull/36145) |
| #36146 | **Self-hosting** | Fixes 5 Honcho localhost multi-profile silent failures (apiKey inheritance, dialectic errors) | [PR #36146](https://github.com/NousResearch/hermes-agent/pull/36146) |
| #36143 | **Security** | Prevents Open WebUI first-admin LAN race condition—closes setup footgun | [PR #36143](https://github.com/NousResearch/hermes-agent/pull/36143) |
| #36141 | **Provider reliability** | Strips self-provider prefix for Gemini native calls, fixing `google/gemini-2.0-flash` 404s | [PR #36141](https://github.com/NousResearch/hermes-agent/pull/36141) |
| #36142 | **Tool robustness** | File search budget hits become soft truncation instead of hard failures (ported from nearai/ironclaw) | [PR #36142](https://github.com/NousResearch/hermes-agent/pull/36142) |

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Issue | Type | Comments | 👍 | Underlying Need | Link |
|:---|:---|:---:|:---:|:---|:---|
| **#2512** Native Windows Support | Feature | 10 | 6 | **Platform parity**: Developers want first-class Windows without WSL2 friction; WSL2 memory/performance overhead and filesystem issues are blockers | [Issue #2512](https://github.com/NousResearch/hermes-agent/issues/2512) |
| **#10359** Native Windows Support (duplicate) | Feature | 9 | 8 | Same demand, different voice—signals **unmet mass market need**; WSL2 is insufficient for production deployments | [Issue #10359](https://github.com/NousResearch/hermes-agent/issues/10359) |
| **#25267** Claude Agent SDK with subscription OAuth | Feature | 4 | 12 | **Cost efficiency**: Users want to leverage existing Claude subscriptions instead of double-paying via Developer Platform API; "Codex-style" OAuth is the requested model | [Issue #25267](https://github.com/NousResearch/hermes-agent/issues/25267) |
| **#20510** Cloud Sync for Configurations | Feature | 4 | 9 | **Multi-device workflow**: `~/.hermes/` local-only storage breaks modern development patterns; users expect dotfiles-style sync or built-in cloud state | [Issue #20510](https://github.com/NousResearch/hermes-agent/issues/20510) |
| **#21910** Rewind/edit-and-resubmit (Claude Code double-Esc) | Feature | 2 | 5 | **Session control**: Users need recovery from agent failure cascades without restarting entire conversations | [Issue #21910](https://github.com/NousResearch/hermes-agent/issues/21910) |

**Analysis**: Windows support dominates discourse (2 of top 3 issues), yet remains unaddressed for 2+ months. The high 👍 on subscription OAuth (#25267) and cloud sync (#20510) reveal **cost and convenience** as primary adoption barriers.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? | Link |
|:---|:---|:---|:---|:---|
| **P1** | #30411 | Telegram DM auto-topic-rename broken; root-DM messages pin to wrong topic | **#36139** (open, fixes anchored replies) | [Issue #30411](https://github.com/NousResearch/hermes-agent/issues/30411) |
| **P1** | #25516 | GPT pools fail immediately due to type error in credential pool—**blocks all OpenAI-family usage** | None identified | [Issue #25516](https://github.com/NousResearch/hermes-agent/issues/25516) |
| **P1** | #32574 | Gateway lacks zombie connection detection across all adapters (Discord, Telegram, etc.) | None identified | [Issue #32574](https://github.com/NousResearch/hermes-agent/issues/32574) |
| **P2** | #7069 | Infinite retry loop on local LLM prefill timeout (>180s)—burns tokens/cycles | None identified | [Issue #7069](https://github.com/NousResearch/hermes-agent/issues/7069) |
| **P2** | #32737 | Tirith shell scanner false-positives on `local_executable | python3` pipes | None identified | [Issue #32737](https://github.com/NousResearch/hermes-agent/issues/32737) |
| **P2** | #36144 | **NEW**: Agent session `HOME` points to profile dir, breaking tools that resolve `~` | None identified | [Issue #36144](https://github.com/NousResearch/hermes-agent/issues/36144) |
| **P2** | #32049 | Docker terminal backend writes to sandbox-mirror instead of authoritative profile state | None identified | [Issue #32049](https://github.com/NousResearch/hermes-agent/issues/32049) |
| **P2** | #35908 | GoogleDrive MCP login fails despite correct config (regression from #35437 fix) | None identified | [Issue #35908](https://github.com/NousResearch/hermes-agent/issues/35908) |
| **P2** | #36052 | Bad HTTP MCP endpoint blocks discovery for 60s before CancelledError | None identified | [Issue #36052](https://github.com/NousResearch/hermes-agent/issues/36052) |
| **P2** | #36054 | Gateway image auto-routing ignores session `/model` overrides | None identified | [Issue #36054](https://github.com/NousResearch/hermes-agent/issues/36054) |
| **P2** | #36070 | Gemini vision fails—`image_url` not accepted by `gemini-2.0-flash` | **#36141** (open, strips prefix) | [Issue #36070](https://github.com/NousResearch/hermes-agent/issues/36070) |
| **P3** | #36046 | Kanban artifact "created" but not actually created/deleted | None identified | [Issue #36046](https://github.com/NousResearch/hermes-agent/issues/36046) |

**Critical concern**: P1 #25516 (GPT pool type error) appears to be a **regression blocking core functionality** with no visible fix PR. The closed bug #31158 (kanban dispatcher WAL poisoning) suggests concurrency patterns remain fragile.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Signals | Likelihood in Next Release |
|:---|:---|:---:|
| **Native Windows Support** | 2 highly-engaged issues, 14 total 👍, 2+ months old; likely requires CI/CD and filesystem abstraction work | Medium (blocked by scope) |
| **ACP Registry / ACP Client Mode** | #16028 (Zed editor), #36057 (client mode)—standards adoption for IDE integration | **High** (smaller scope, standards-aligned) |
| **Cloud/Cross-Device Sync** | 9 👍, clear user workflow pain; competes with Claude Code's built-in sync | Medium (requires backend infrastructure) |
| **Claude Subscription OAuth** | 12 👍, "Codex-style" reference; provider-side negotiation needed | Low (external dependency) |
| **Rewind/Edit-and-Resubmit** | 5 👍, Claude Code parity feature; UX complexity | Medium |
| **Web Search Categories** | PR #36136 already open; trivial addition | **Very High** |
| **TTS for xAI** | PR #36130 open; narrow scope | **High** |
| **Dashboard Agents View** | PR #36147 open; read-only delegation visibility | **High** |

---

## 7. User Feedback Summary

### Pain Points (verbatim patterns)
- **"WSL2 is not enough"** — Windows users need native performance, not virtualization workaround
- **"pay twice"** — Claude subscription + API key double-billing is explicit churn risk
- **"no built-in way to sync"** — Multi-device users forced to manual `~/.hermes/` replication
- **"infinite loop of timeouts"** — Local LLM users punished by aggressive default timeouts
- **"fails silently"** — Honcho localhost, Docker backend, kanban artifacts all fail without clear errors

### Satisfaction Signals
- Active PR contributions from community (teknium1, xxxigm, someaka showing repeat contributions)
- Users porting fixes from related projects (nearai/ironclaw, openclaw) indicates ecosystem health
- Feature requests often reference competitor parity (Claude Code, Codex) — users see Hermes as comparable

### Dissatisfaction Signals
- **Duplicate issues** (#2512/#10359 Windows, #36098 Honcho) suggest search/discovery friction or maintainer capacity issues
- **Regression reports** (#35908 GoogleDrive MCP, #36046 kanban) indicate insufficient test coverage for fixed bugs
- **Profile/gateway isolation bugs** (#36108 Discord non-default profile, #36144 HOME path) reveal architectural debt in multi-tenancy

---

## 8. Backlog Watch

| Issue/PR | Age | Risk | Why Attention Needed | Link |
|:---|:---|:---|:---|:---|
| **#2512/#10359** Windows Support | 71d / 47d | **Churn** | Highest-demand unfulfilled feature; duplicate suggests triage failure | [Issue #2512](https://github.com/NousResearch/hermes-agent/issues/2512) |
| **#7069** Infinite retry loop | 52d | **Reliability** | Core local-LLM workflow broken; no fix PR | [Issue #7069](https://github.com/NousResearch/hermes-agent/issues/7069) |
| **#20510** Cloud Sync | 26d | **Competitive** | 9 👍, clear user expectation; absence vs. Claude Code | [Issue #20510](https://github.com/NousResearch/hermes-agent/issues/20510) |
| **#16028** ACP Registry | 36d | **Ecosystem** | Standards adoption window; Zed editor integration blocked | [Issue #16028](https://github.com/NousResearch/hermes-agent/issues/16028) |
| **#19236** Slack DM opening | 29d | **Integration** | Common Slack workflow broken; no fix PR | [Issue #19236](https://github.com/NousResearch/hermes-agent/issues/19236) |
| **#27834** MiniMax/DeepSeek XML tool calls | 14d | **Provider** | Web UI/gateway rendering bug; affects multiple providers | [Issue #27834](https://github.com/NousResearch/hermes-agent/issues/27834) |
| **PR #25345** Android HTML browser | 18d | **Platform** | Rebased and ready; needs maintainer review | [PR #25345](https://github.com/NousResearch/hermes-agent/pull/25345) |

---

**Project Health Assessment**: Hermes Agent demonstrates **strong community contribution and rapid iteration** but faces **review bottleneck** (84% open PR rate) and **platform debt** (Windows, gateway adapters). The absence of versioned releases increases risk for production users tracking `main`. Priority should be: (1) Windows feasibility assessment, (2) P1 bug triage (#25516, #30411), (3) reviewer capacity expansion.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-01

## 1. Today's Overview

PicoClaw shows **healthy daily activity** with 18 tracked items (7 issues, 11 PRs) and an automated nightly release, indicating active development on the v0.2.9 branch. The project resolved 3 issues and merged/closed 4 PRs in the last 24 hours, demonstrating responsive maintenance. However, **7 open PRs remain unmerged**, several marked stale, suggesting potential review bottlenecks. The community continues expanding provider integrations (Anthropic, Codex, OmniRoute) and channel support (Telegram, QQ), while core stability work targets message bus backpressure and agent loop reliability. Overall project health is **moderate-to-positive** with strong feature velocity but accumulating technical debt in unreviewed contributions.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| **[v0.2.9-nightly.20260531.1ce353ba](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)** | Nightly Build | Automated build from `main`; **unstable, use with caution**. No formal changelog; diff covers all commits since v0.2.9 tag. |

**No stable release** this cycle. The nightly suggests v0.2.9 release line remains active with ongoing development. Users requiring stability should avoid nightly builds.

---

## 3. Project Progress

### Merged/Closed PRs (4 items)

| PR | Author | Description | Impact |
|----|--------|-------------|--------|
| [#2967](https://github.com/sipeed/picoclaw/pull/2967) | miruchigawa | **fix(codex): preserve streamed output text deltas** | 🔒 **Critical fix** — resolves empty Codex OAuth responses by accumulating `output_text.delta` events; closes [#2674](httpshttps://github.com/sipeed/picoclaw/issues/2674) and [#2953](https://github.com/sipeed/picoclaw/issues/2953) |
| [#2969](https://github.com/sipeed/picoclaw/pull/2969) | lc6464 | **feat(web): add chat image paste and drag-and-drop upload** | UX improvement — web frontend now supports direct image input via clipboard and drag-drop |
| [#2856](https://github.com/sipeed/picoclaw/pull/2856) | bogdanovich | feat(message): support media attachments and Telegram rich delivery | Closed unmerged (stale); rich messaging deferred |
| [#2980](https://github.com/sipeed/picoclaw/pull/2980) | OmegaSoftDLL | chore: gitignore debug output files | Trivial hygiene |

**Key advancement**: The Codex streaming fix (#2967) unblocks a major provider integration that was effectively broken for ChatGPT backend users. Web UX also improved with native image handling.

---

## 4. Community Hot Topics

### Most Active Discussions

| Rank | Item | Comments | 👍 | Analysis |
|------|------|----------|-----|----------|
| 1 | [#28](https://github.com/sipeed/picoclaw/issues/28) LM Studio Easy Connect | **21** | 2 | **Longest-running community request** (since Feb 2026). Despite closure, reveals persistent demand for **local/self-hosted LLM connectivity** with minimal configuration. Users want one-click setup for desktop inference tools. |
| 2 | [#2674](https://github.com/sipeed/picoclaw/issues/2674) Codex OAuth empty response | **7** | 4 | High-engagement bug report with diagnostic depth. Now **resolved** by #2967. Shows provider-streaming compatibility is a fragile surface. |
| 3 | [#2968](https://github.com/sipeed/picoclaw/issues/2968) /context always shows Compress at: 76800 tokens | **3** | 1 | Context window compression appears **hardcoded or misreported** for MiniMax provider; user confusion about actual vs. displayed token counts. |

**Underlying needs**: 
- **Simplified local AI deployment** (LM Studio, Ollama-style integrations)
- **Reliable streaming parsing** across diverse provider implementations
- **Transparent context management** — users need accurate visibility into token budgets

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Details |
|----------|-------|--------|--------|---------|
| 🔴 **Critical** | [#2674](https://github.com/sipeed/picoclaw/issues/2674) Codex OAuth empty responses | **CLOSED** | [#2967](https://github.com/sipeed/picoclaw/pull/2967) | ChatGPT Codex backend streams `response.output_text.delta` but final `response.output` is null; fallback message falsely blames provider/token limits |
| 🟡 **Moderate** | [#2968](https://github.com/sipeed/picoclaw/issues/2968) /context compression display stuck at 76800 | **OPEN** | None | MiniMax M2.7-highspeed with 128K max_tokens shows incorrect compression threshold; may affect context truncation behavior or just UI |
| 🟡 **Moderate** | [#2952](https://github.com/sipeed/picoclaw/issues/2952) QQ channel restart loop, exec command issues | **OPEN** | None | Multi-bug report: QQ channel re-triggers restart on message after recovery; `actions:run` missing on first exec; agent.md non-compliance |

**Stability PRs pending review**:
- [#2906](https://github.com/sipeed/picoclaw/pull/2906) — Message bus backpressure handling (prevents unbounded blocking, adds drop metrics)
- [#2904](https://github.com/sipeed/picoclaw/pull/2904) — Agent loop reload panic cleanup (fixes goroutine leaks, reload races)

**Risk**: Unmerged stability PRs (#2904, #2906) address production-reliability concerns; delay increases exposure to memory leaks and bus saturation.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in v0.3.0 | Rationale |
|---------|----------|----------------------|-----------|
| **OmniRoute provider support** | [#2978](https://github.com/sipeed/picoclaw/issues/2978) | Medium | New provider request with reference implementation; follows pattern of rapid provider expansion |
| **Cron tool get/update actions** | [#2977](https://github.com/sipeed/picoclaw/pull/2977) | **High** | Small, focused enhancement; improves agent self-management; submitted today |
| **Telegram reply-as-mention** | [#2975](https://github.com/sipeed/picoclaw/pull/2975) | High | UX polish for Telegram groups; aligns with existing `mention_only` config |
| **Anthropic SDK v1.46.0 compatibility** | [#2979](https://github.com/sipeed/picoclaw/pull/2979) | **High** | Dependency bump required to prevent breakage; blocking for Anthropic users |
| **Android Termux guide** | [#2902](https://github.com/sipeed/picoclaw/pull/2902) | Medium | Documentation; stale but fills ARM64/mobile gap |
| **Skills binary filtering** | [#2936](https://github.com/sipeed/picoclaw/pull/2936) | Medium | Prevents LLM hallucination of unavailable tools; performance win for constrained devices |
| **Rich media message tool** | [#2855](https://github.com/sipeed/picoclaw/issues/2855) / [#2856](https://github.com/sipeed/picoclaw/pull/2856) | Low (deferred) | Closed as stale; architectural complexity in unifying text+media across channels |

**Predicted v0.3.0 themes**: Provider ecosystem expansion, agent tooling robustness (cron, skills), messaging UX refinements, mobile/edge deployment support.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Provider integration fragility** | Codex streaming bug (#2674/#2953/#2967), Anthropic SDK drift (#2979) | High — breaks core functionality |
| **Opaque context/compression behavior** | #2968 (76800 token display), #2952 (agent.md non-compliance) | Medium — erodes trust in token management |
| **Channel-specific instability** | QQ restart loops (#2952), Telegram mention handling gaps (#2975) | Medium — platform reliability uneven |
| **Release cadence concerns** | #2952 "好久没发新版本了" (long time no release) | Low-Medium — user anxiety about project momentum |
| **Configuration complexity** | #2978 (how to add custom provider combo), #28 (LM Studio "outside my reach") | Medium — barriers to non-expert users |

### Positive Signals
- Active nightly builds indicate continuous integration
- Rapid bug resolution for Codex (reported Apr 26 → fixed May 31)
- Growing community contributions (11 PRs in 24h)

### Satisfaction Assessment
**Mixed**: Power users appreciate extensibility; casual users struggle with provider setup and platform-specific quirks. The project would benefit from **configuration wizards** and **validated provider templates**.

---

## 8. Backlog Watch

### Stale Items Needing Maintainer Attention

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#2936](https://github.com/sipeed/picoclaw/pull/2936) Skills binary filtering | ~7 days | Skill hallucination on resource-constrained devices | Review/merge or close with feedback |
| [#2906](https://github.com/sipeed/picoclaw/pull/2906) Bus backpressure fix | ~11 days | **Production stability** — unbounded blocking, no drop visibility | Urgent review; touches core runtime |
| [#2904](https://github.com/sipeed/picoclaw/pull/2904) Agent loop reload stability | ~11 days | **Goroutine leaks, panic crashes** | Urgent review; reliability-critical |
| [#2902](https://github.com/sipeed/picoclaw/pull/2902) Android Termux guide | ~11 days | Mobile/ARM64 user onboarding | Low-risk docs merge |

### Long-Unanswered Issues
- [#28](https://github.com/sipeed/picoclaw/issues/28) LM Studio Easy Connect — **closed without resolution**; may need reopening or dedicated tracking issue for local LLM UX
- [#2952](https://github.com/sipeed/picoclaw/issues/2952) Multi-bug QQ/exec report — **no maintainer response**; bundles distinct issues that need triage separation

**Recommendation**: Prioritize review of #2904 and #2906 for v0.2.9 stability; consider appointing additional maintainers or establishing SLA for stale PRs given high community contribution volume.

---

*Digest generated from GitHub activity 2026-05-31. All links reference https://github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-01

## 1. Today's Overview

NanoClaw shows **elevated engineering activity** with 14 items updated in the last 24 hours (5 issues, 9 PRs), though no new releases were cut. The project is in a **stability-hardening phase**: three of five new issues concern production outages (OneCLI gateway fd exhaustion, host freezing, self-healing gaps), while PRs cluster around container runtime fixes and Claude Code integration polish. Notably, all issues remain open with zero comments, suggesting either rapid triage backlog or limited maintainer bandwidth for discussion. The closed PRs (#2648, #2658) were both contributor submissions marked `[follows-guidelines]` but rejected or superseded, indicating active but strict review. Overall health: **functional but stressed at production scale**.

---

## 2. Releases

**No new releases** (v0.x.x or otherwise) published in the last 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs

| PR | Author | Status | Summary |
|:---|:---|:---|:---|
| [#2648](https://github.com/nanocoai/nanoclaw/pull/2648) | gavrielc | **Closed** | `/upload-trace` command for Hugging Face session upload — closed without merge despite following guidelines |
| [#2658](https://https://github.com/nanocoai/nanoclaw/pull/2658) | cyber-chris | **Closed** | "Actual deployment" — closed without merge; appears to be a deployment config PR that didn't meet merge criteria |

### Active Development (Open PRs)

| PR | Author | Focus Area |
|:---|:---|:---|
| [#2664](https://github.com/nanocoai/nanoclaw/pull/2664) | whahnize | **v2 container modernization** — browser scraping sidecar, baked-in skills (NotebookLM, Mer audio, Paris rental), Discord v2 adapter |
| [#2662](https://github.com/nanocoai/nanoclaw/pull/2662) | GiladShoham | **MCP transport expansion** — HTTP/SSE server support beyond stdio |
| [#2661](https://github.com/nanocoai/nanoclaw/pull/2661) | GiladShoham | **Claude Code UX** — per-group skills as slash commands |
| [#2660](https://github.com/nanocoai/nanoclaw/pull/2660) | GiladShoham | **Skill filesystem** — symlink resolution for shared skill libraries |
| [#2659](https://github.com/nanocoai/nanoclaw/pull/2659) | GiladShoham | **Container lifecycle** — PID-based container reaping when Docker daemon fails |
| [#2656](https://github.com/nanocoai/nanoclaw/pull/2656) | MoonCaves | **Mnemon integration fix** — setup call moved to `index.ts` main() |
| [#2654](https://github.com/nanocoai/nanoclaw/pull/2654) | elancode | **Platform ID handling** — trust pre-prefixed IDs across channel key mismatches |

**Key advancement**: GiladShoham is driving a concentrated push on **container reliability and Claude Code ecosystem integration** (4 PRs), while whahnize advances the v2 runtime architecture.

---

## 4. Community Hot Topics

| Item | Engagement | Analysis |
|:---|:---|:---|
| [#2641](https://github.com/nanocoai/nanoclaw/issues/2641) Supply chain risk — `@gongrzhe/server-gmail-autoauth-mcp` | 1 comment, 0 👍 | **Highest engagement** — references real-world security incident ([Medium article](https://wiiwrite.medium.com/my-ai-installed-a-strangers-code-on-my-machine-and-asked-for-my-gmail-password-70d7708b4636)). Underlying need: **MCP server trust model and sandboxing audit**; community wants supply-chain guarantees for third-party skills |
| [#2665](https://github.com/nanocoai/nanoclaw/issues/2665) Single-threaded host freeze | 0 comments, 0 👍 | **Critical production risk** — Node event loop architecture limitation; `/health` check inadequacy means load balancers won't route around failure |
| [#2657](https://github.com/nanocoai/nanoclaw/issues/2657) Self-healing for OneCLI gateway | 0 comments, 0 👍 | **Operational maturity gap** — Docker `restart:` policy insufficient; needs active supervision |

**Community dynamic**: Engagement is **anemic despite severe issues** — zero comments on 4/5 issues, including production outage reports. This suggests either (a) issues filed by maintainers/mshirel for tracking, (b) private discussion channels, or (c) contributor community too small to self-triage.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---|
| **P0 — Production outage** | [#2655](https://github.com/nanocoai/nanoclaw/issues/2655) | OneCLI gateway hard-exits at 1024 fd soft limit under burst load → **silent total agent outage** | ❌ None |
| **P0 — Production outage** | [#2665](https://github.com/nanocoai/nanoclaw/issues/2665) | Single event loop freezes on blocking ops; `/health` returns 200 while dead | ❌ None |
| **P1 — Reliability gap** | [#2657](https://github.com/nanocoai/nanoclaw/issues/2657) | OneCLI gateway worker death undetected; no fail-fast for agents | ❌ None (but [#2659](https://github.com/nanocoai/nanoclaw/pull/2659) addresses related container reaping) |
| **P2 — Security** | [#2641](https://github.com/nanocoai/nanoclaw/issues/2641) | MCP supply chain risk — third-party code with credential access | ❌ None |

**Stability assessment**: NanoClaw has **three concurrent single-points-of-failure in its gateway layer**. The OneCLI proxy architecture is scaling poorly: fd limits, process death, and blocking I/O all cause cascading failures. The lack of fix PRs for #2655 and #2665 is concerning given same-day filing by mshirel — likely recognized as urgent but requiring architectural changes.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood in Next Release | Rationale |
|:---|:---|:---|:---|
| **Multi-user single-host support** | [#2653](https://github.com/nanocoai/nanoclaw/issues/2653) | Medium | Clean data model already exists; blocker is `sr...` (truncated, likely `src/` path or permissions). Small scope if architecture supports |
| **HTTP/SSE MCP servers** | [#2662](https://github.com/nanocoai/nanoclaw/pull/2662) | **High** | PR open, well-scoped union type extension; enables hosted MCP ecosystem |
| **Per-group skills as slash commands** | [#2661](https://github.com/nanocoai/nanoclaw/pull/2661) | **High** | PR open, completes existing partial implementation |
| **Browser scraping in v2 container** | [#2664](https://github.com/nanocoai/nanoclaw/pull/2664) | **High** | Large PR but active v2 migration priority |
| **Self-healing / supervision** | [#2657](https://github.com/nanocoai/nanoclaw/issues/2657) | Medium | Architectural; may require new sidecar or systemd integration |

**Roadmap prediction**: Next release likely focuses on **v2 container GA** (browser sidecar, baked skills, Discord adapter) plus **Claude Code integration polish** (MCP HTTP, slash commands, symlinks). Stability features (self-healing, fd limits) may lag unless prioritized.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Gateway reliability at scale** | #2655, #2665, #2657 | Critical — "silent total agent outage" |
| **Security trust for third-party skills** | #2641 | High — user cites real credential theft incident |
| **Multi-user / shared hosting** | #2653 | Moderate — family/small-team use case blocked |
| **Container lifecycle edge cases** | #2659 | Moderate — unprivileged environments leak orphans |

### Satisfaction Signals

- Active skill ecosystem: NotebookLM, Mer audio, Paris rental, web-fetch skills being baked into v2
- Claude Code integration deepening (slash commands, MCP servers)
- Contributor throughput: 6 distinct authors in 24 hours

### Dissatisfaction Signals

- Strict PR closure rate: 2/9 closed without merge despite `[follows-guidelines]` tags
- No release cadence visible (no releases in period)
- Issues filed by same user (mshirel) clustering on operational failures — possibly internal SRE pain bleeding into public tracker

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#2641](https://github.com/nanocoai/nanoclaw/issues/2641) Supply chain risk | 3 days | **Security policy gap** | Maintainer response on MCP audit/sandboxing roadmap; currently 1 comment only |
| [#2655](https://github.com/nanocoai/nanoclaw/issues/2655) fd exhaustion outage | 1 day | **Production reliability** | Engineering response; likely requires ulimit tuning or connection pooling in OneCLI |
| [#2665](https://github.com/nanocoai/nanoclaw/issues/2665) Event loop freeze | 1 day | **Architectural limitation** | Design review — may need worker threads or separate process for blocking ops |

**Maintainer attention**: All issues are **same-day or recent**, so not yet "long-unanswered." However, the **severity concentration in gateway/OneCLI** suggests a subsystem needing dedicated owner attention. The security issue (#2641) has the most community-relevant external reference but lowest engineering response.

---

*Digest generated from GitHub activity 2026-05-31 → 2026-06-01. All links: https://github.com/nanocoai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-01

## 1. Today's Overview

NullClaw shows minimal activity over the past 24 hours, with **2 new issues opened** and **zero pull requests or releases**. The project appears to be in a maintenance phase with no active code contributions being merged. Both new issues were reported by the same user (weissfl) on 2026-05-31, suggesting concentrated testing or production usage of Telegram integration features. The absence of PRs and releases indicates either a stable codebase awaiting community contributions or potential maintainer bandwidth constraints. Overall project health appears **stable but stagnant** — no regressions from merged code, but user-reported bugs are accumulating without visible resolution velocity.

---

## 2. Releases

**No new releases.** The project has no published releases in the tracked period.

---

## 3. Project Progress

**No merged or closed PRs today.**

No features advanced or fixes were integrated into the codebase during this period. Development momentum is currently paused.

---

## 4. Community Hot Topics

Both issues opened today relate to **Telegram bot integration quality**, indicating this is an active use case:

| Issue | Activity | Analysis |
|-------|----------|----------|
| [#942 Telegram: missing typing indicator when pressing inline buttons](https://github.com/nullclaw/nullclaw/issues/942) | 0 comments, 0 👍 | **UX polish gap**: Callback queries bypass the typing indicator pipeline that works for text messages. Suggests inconsistent event handling architecture between message types. |
| [#941 Agent-type cron jobs don't spawn a subprocess](https://github.com/nullclaw/nullclaw/issues/941) | 0 comments, 0 👍 | **Core functionality failure**: The `agent` job type — a presumably key feature for autonomous task execution — silently fails with no Telegram delivery. Indicates possible process management or IPC breakdown. |

**Underlying need**: Users expect production-grade Telegram bot experiences with reliable background job execution and polished UX feedback loops. The `nc_choices` inline button pattern suggests interactive bot workflows are a primary use case.

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR | Details |
|----------|-------|--------|---------|
| **🔴 Critical** | [#941](https://github.com/nullclaw/nullclaw/issues/941) Agent-type cron jobs don't spawn subprocess | **None** | Complete feature failure — scheduled agent jobs mark completed without execution. No error surface; silent data loss for users expecting automated Telegram delivery. |
| **🟡 Medium** | [#942](https://github.com/nullclaw/nullclaw/issues/942) Missing typing indicator on callback queries | **None** | Degraded UX but non-blocking. Inconsistent with text message behavior; may confuse users about system responsiveness. |

**Regression risk**: Issue #941 suggests the cron/agent subsystem may have a fundamental flaw in process spawning or delivery routing. The "completed" status without execution is particularly concerning — implies broken observability/telemetry, not just delivery failure.

---

## 6. Feature Requests & Roadmap Signals

No explicit feature requests opened today. However, issue patterns reveal **implied roadmap needs**:

| Signal | Likely Priority |
|--------|---------------|
| Unified event handling for all Telegram interaction types (text + callback_query + inline) | High — #942 shows architectural debt |
| Robust subprocess lifecycle management for agent jobs | Critical — #941 is a broken core feature |
| Better job execution observability (don't mark failed jobs as "completed") | High — reliability expectation |

**Prediction**: If maintainers respond, next version likely focuses on Telegram integration hardening and agent job reliability rather than new features.

---

## 7. User Feedback Summary

**Real pain points from weissfl (likely production user):**

- **Silent failures are dangerous**: Agent jobs report success without executing — worst-case reliability scenario for automation users
- **UX inconsistency erodes trust**: Inline buttons (common in bot workflows) behave differently than text input
- **Telegram as primary channel**: Both issues target Telegram specifically, suggesting this is the dominant or only delivery channel in use

**Use case inference**: Building interactive, scheduled automation bots with NullClaw's agent framework — likely personal assistants or business process automation.

**Satisfaction level**: Currently **frustrated** — two bugs filed same day, both unaddressed, with no community response yet.

---

## 8. Backlog Watch

Both issues opened 2026-05-31 are **already candidates for maintainer attention** given severity:

| Issue | Age | Risk if Unaddressed |
|-------|-----|-------------------|
| [#941](https://github.com/nullclaw/nullclaw/issues/941) | 1 day | Users abandon agent scheduling feature; potential data loss scenarios |
| [#942](https://github.com/nullclaw/nullclaw/issues/942) | 1 day | UX degradation accumulates; Telegram bot feels unpolished |

**Longer-term concern**: Zero PR activity and zero releases suggests either:
- Mature, stable codebase (optimistic)
- Maintainer absence or project dormancy (pessimistic, supported by unresponded new issues)

**Recommendation for maintainers**: Prioritize #941 root cause analysis — the "completed-but-not-executed" behavior suggests a logging/telemetry bug compounding the functional failure.

---

*Digest generated from github.com/nullclaw/nullclaw data as of 2026-06-01*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-01

## Today's Overview

IronClaw shows **high development velocity** with 21 PRs updated in the last 24 hours (15 open, 6 merged/closed) against 4 active issues, indicating a mature, fast-moving codebase. The project is in an intense **"Reborn" platform migration phase**, with core contributors `serrrfirat` and `henrypark133` driving foundational infrastructure for triggers, outbound communication, and authentication flows. No new releases were cut today, suggesting the team is accumulating substantial changes before stabilization. Dependency maintenance is highly automated via Dependabot, with multiple grouped updates in flight. A persistent nightly E2E failure signals potential CI instability that may block release confidence.

---

## Releases

**No new releases** — none published.

---

## Project Progress

### Merged/Closed PRs Today

| PR | Author | Summary | Link |
|:---|:---|:---|:---|
| **#4262** | henrypark133 | **Outbound resolution engine** — P0 candidate selection for communication delivery (closed, likely superseded or integrated) | [nearai/ironclaw#4262](https://github.com/nearai/ironclaw/pull/4262) |
| **#4033** | dependabot[bot] | Dependency bump (everything-else group, 45 updates) — **closed unmerged**; superseded by #4268 | [nearai/ironclaw#4033](https://github.com/nearai/ironclaw/pull/4033) |
| **#4000** | dependabot[bot] | `serde_json` 1.0.149 → 1.0.150 — **closed unmerged**; superseded by #4267 (grouped update) | [nearai/ironclaw#4000](https://github.com/nearai/ironclaw/pull/4000) |
| **#4257** | serrrfirat | **AuthPromptView challenge enrichment + WebUI OAuth card** — GSuite, Notion MCP, GitHub PAT flows; merged after test PR stacked | [nearai/ironclaw#4257](https://github.com/nearai/ironclaw/pull/4257) |
| **#4261** | henrypark133 | `ironclaw_triggers` crate skeleton — **closed**; superseded by #4263 (libSQL repository implementation) | [nearai/ironclaw#4261](https://github.com/nearai/ironclaw/pull/4261) |

### Key Advances

- **Authentication infrastructure maturing**: #4257 merged OAuth/SSO wire shapes for three major providers (GSuite, Notion, GitHub), unblocking WebUI v2 identity flows
- **Trigger system bootstrapping**: Closed #4261 in favor of #4263, which adds durable libSQL persistence — a significant scope expansion from in-memory to production-grade storage
- **Dependency hygiene**: Aggressive Dependabot pruning of superseded PRs suggests active queue management

---

## Community Hot Topics

### Most Active by Engagement

| Item | Comments/Reactions | Analysis |
|:---|:---|:---|
| **[#2923] Bug: stdio MCP activation fails** | 4 comments, 👍 1 | [nearai/ironclaw#2923](https://github.com/nearai/ironclaw/issues/2923) — **Highest user engagement**. A reopened/regressed issue where a non-maintainer incorrectly closed #2474. The reporter (`rajulbhatnagar`) demonstrates deep system knowledge, identifying the bug is in *activation pre-flight*, not transport. Signals **process fragility** in issue triage and a user base sophisticated enough to challenge closures. |
| **[#3289] [CLOSED] Migrate secrets, OAuth, auth setup** | 1 comment, 👍 0 | [nearai/ironclaw#3289](https://github.com/nearai/ironclaw/issues/3289) — Large-scope "Reborn" epic closed today. Part of a 9-issue cluster (#3031 parent). Indicates architectural consolidation of auth under typed flows. |

### Underlying Needs

- **MCP (Model Context Protocol) reliability**: #2923 reveals stdio transport is production-wired but activation is brittle — users need stable local tool server integration
- **Auth flow transparency**: The #3289/#4257/#4269 cluster shows investment in making credential brokering observable and user-manageable

---

## Bugs & Stability

| Severity | Issue | Details | Fix Status |
|:---|:---|:---|:---|
| **🔴 High** | **[#4108] Nightly E2E failed** | [nearai/ironclaw#4108](https://github.com/nearai/ironclaw/issues/4108) — Scheduled run failed on `extensions` job. Commit `749f584`, zero comments = may be unowned. **No fix PR referenced.** | ❌ **Unfixed** |
| **🟡 Medium** | **[#2923] stdio MCP activation failure** | [nearai/ironclaw#2923](https://github.com/nearai/ironclaw/issues/2923) — Authorization endpoint discovery broken for stdio transport. Workaround unknown; affects local MCP server adoption. | ❌ **No fix PR** |
| **🟢 Low** | **[#4266] capability_info unknown target handling** | [nearai/ironclaw#4266](https://github.com/nearai/ironclaw/pull/4266) — PR in review; converts terminal driver errors to model-visible `InvalidInput` failures. Prevents crashes from stale capability names. | 🔄 **Fix PR open** |

### Stability Assessment

- **CI reliability concern**: Nightly E2E failures without rapid response erode release confidence. The `extensions` failure pattern suggests plugin/WASM edge cases.
- **Error handling improving**: #4266 represents defensive engineering — moving from panic/crash to model-observable failures.

---

## Feature Requests & Roadmap Signals

### In-Flight Features (Likely Next Release)

| Feature | PR(s) | Confidence |
|:---|:---|:---|
| **Durable trigger system with libSQL** | #4263 | High — foundational for scheduled agent execution |
| **Outbound communication resolution** | #4262 (closed), likely resurfacing | High — P0 feature for agent-initiated contact |
| **Unified diff previews** | #4184 | Medium — developer experience for file operations |
| **GitHub SSO for WebUI v2** | #4229 | Medium — completes identity provider trio |

### User-Requested / Implied

| Need | Source | Prediction |
|:---|:---|:---|
| **Deny-by-default sub-job policies** | [nearai/ironclaw#228](https://github.com/nearai/ironclaw/issues/228) — `ilblackdragon` requests `CreateJobTool` guardrails against hallucinated/injected job spawning | Likely prioritized post-Reborn; security-critical for untrusted prompt contexts |
| **Configurable observability** | [nearai/ironclaw#4090](https://github.com/nearai/ironclaw/pull/4090) — `IRONCLAW_LOG_MAX_BYTES` env var | Merged pattern suggests more runtime tunables coming |

---

## User Feedback Summary

### Pain Points

| Issue | User Impact |
|:---|:---|
| **MCP stdio activation broken** (#2923) | Blocks local tool integration; workaround requires HTTP transport or manual auth URL construction |
| **Nightly E2E failures** (#4108) | Signals potential undetected regressions in user-facing paths |
| **Log truncation limits** (addressed in #4090) | Debugging agent tool calls required recompilation — now configurable |

### Satisfaction Signals

- **Responsive auth migration**: #3289 closure with 9 related issues resolved suggests large architectural debt being paid down
- **Stacked PR workflow**: #4257 → #4256 (tests) pattern shows disciplined engineering that reduces user-facing bugs

### Use Case Evolution

Users appear to be pushing IronClaw toward **local-first, multi-tenant agent operation**: stdio MCP for local tools, OAuth for SaaS integration, triggers for autonomous execution, and outbound communication for proactive agent behavior.

---

## Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| **[#228] Deny-by-default delegation policy** | **103 days open** (2026-02-19) | 🔴 **Security gap** — no policy layer for sub-job creation; prompt injection vector | Maintainer decision on priority; could be fast-follow to Reborn stability |
| **[#2923] stdio MCP activation** | **38 days** (re-filed 2026-04-24) | 🟡 **Adoption blocker** for local MCP ecosystem | Assign owner; likely small fix in auth endpoint discovery path |
| **[#4108] Nightly E2E failed** | **5 days**, **0 comments** | 🟡 **Process gap** — unowned failure | Auto-assignment or on-call rotation needed; extensions job flakiness pattern |

### Maintainer Attention Required

- **#228** needs security review and scope estimation — longest-running open issue with clear user value
- **#4108** needs incident response discipline — repeated unowned CI failures degrade trust
- **Dependency PR queue**: 6 Dependabot PRs open with #4268 (46 updates) likely blocking others — merge or rebase chain needed

---

*Digest generated from GitHub activity 2026-05-31 to 2026-06-01. IronClaw is a NEAR AI project: [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — June 1, 2026

## 1. Today's Overview

LobsterAI shows minimal activity on June 1, 2026, with only one stale pull request receiving a recent update after nearly two months of inactivity. The project exhibits signs of slowed development velocity—no issues were created or updated in the past 24 hours, no releases were published, and no PRs were merged. The single open PR addresses a persistent data consistency bug affecting scheduled tasks, suggesting maintenance mode rather than active feature development. Overall project health appears stable but stagnant, with core contributors likely focused elsewhere or the project approaching maturity with reduced iteration needs.

---

## 2. Releases

**No new releases.** The project has no published release history available in the provided data.

---

## 3. Project Progress

**No merged or closed PRs today.**

| PR | Status | Impact |
|:---|:---|:---|
| [#1465](https://github.com/netease-youdao/LobsterAI/pull/1465) | Open, stale (updated 2026-05-31) | **Blocked** — fixes ghost session bug but unmerged since April 4 |

**Assessment:** Zero forward progress on code integration. The scheduled task fix PR, while technically complete in its description, has remained unmerged for 58 days, indicating either maintainer bandwidth constraints or unresolved review concerns.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|:---|:---|:---|
| [#1465](https://github.com/netease-youdao/LobsterAI/pull/1465) — Ghost sessions from deleted scheduled tasks | 0 reactions, 0 comments, marked stale | **Underlying need:** Data integrity guarantees for task lifecycle management. Users expect deletion operations to be atomic across distributed components (OpenClaw gateway + local SQLite). The lack of community engagement (no comments, no 👍) suggests either: (a) low user base for scheduled tasks feature, or (b) users workaround by manual DB editing. The stale label indicates automated triage is active but human review is bottlenecked. |

**Root cause insight:** The architectural split between gateway-side cron management and local session storage creates a classic distributed system consistency gap. Users need transactional semantics or at minimum cascade deletion hooks.

---

## 5. Bugs & Stability

| Severity | Bug | Fix Status | Details |
|:---|:---|:---|:---|
| **High** | [Ghost sessions resurrect after restart](https://github.com/netease-youdao/LobsterAI/pull/1465) | **PR exists, unmerged** | Deleted scheduled tasks reappear as empty sessions; caused by `cowork_sessions` table never being cleaned on `cron.remove`. Affects data hygiene and UX trust. |

**No new bugs reported today.** The single high-severity issue is a **regression-class bug**—user action (delete) appears successful but state is not durably persisted across restarts.

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests in today's data.**

**Inferred signals from #1465:**
- Need for **cascade deletion patterns** across gateway-local boundaries
- Potential requirement for **session garbage collection** or orphaned record cleanup utilities
- Possible future need for **task execution audit trail** (why do ghost sessions appear "empty"?)

**Prediction:** If #1465 merges, next version may include broader data consistency hardening rather than new user-facing features.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Severity |
|:---|:---|:---|
| **"Delete doesn't actually delete"** | PR description: "反复删除反复出现" (delete repeatedly, reappears repeatedly) | Critical trust erosion |
| **Workaround fatigue** | User had to report after presumably multiple attempts | Medium |
| **Unclear system boundaries** | User cannot distinguish gateway vs. local state | UX gap |

**Use case affected:** Power users relying on scheduled tasks for automation workflows—likely a core value proposition for LobsterAI as an "AI agent" platform.

**Satisfaction assessment:** Negative for this user segment; the 58-day PR stagnation without maintainer response compounds frustration.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#1465](https://github.com/netease-youdao/LobsterAI/pull/1465) | **58 days open** | Data corruption pattern may affect other features with split gateway-local state | Maintainer review and merge decision; evaluate if same bug exists for other session types (recurring meetings, reminders, etc.) |

**Additional concern:** Zero open issues in the entire project suggests either (a) exceptionally clean codebase, (b) issue triage that closes stale items aggressively, or (c) reduced community engagement with issue reporting. Given the PR references #1359 (the original issue), that issue appears resolved or closed without public visibility—warranting verification that the fix actually addresses the reported problem.

---

*Digest generated from GitHub activity data for netease-youdao/LobsterAI on 2026-06-01.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-01

## 1. Today's Overview

Moltis exhibited minimal activity over the past 24 hours, with only a single open pull request receiving updates and zero issues created or modified. The project shows no new releases, suggesting a steady-state maintenance phase rather than active feature shipping. The sole PR focuses on OpenAI Codex provider robustness—specifically handling edge cases in streaming tool-call argument delivery—indicating continued refinement of LLM provider integrations. With no open issues and no community reactions on the active PR, engagement appears subdued. Overall project health reads as **stable but quiet**, with development concentrated on incremental reliability improvements rather than expansion.

---

## 2. Releases

*No new releases.*

---

## 3. Project Progress

**No merged or closed PRs today.**

The only active work item remains open:

- **[PR #1088](https://github.com/moltis-org/moltis/pull/1088)** — `[codex] Handle OpenAI Codex final tool-call arguments` by @s-salamatov (OPEN, created 2026-05-31)

This PR addresses a specific streaming protocol edge case in the OpenAI Codex provider: recording final `function_call_arguments.done` payloads and synthesizing missing streaming deltas when the API emits only terminal arguments. The change also preserves empty accumulated argument strings through decode diagnostics to prevent false missing-argument errors. This represents **defensive engineering** against API behavior inconsistencies rather than new capability development.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [PR #1088](https://github.com/moltis-org/moltis/pull/1088) | 0 👍, undefined comments | Low engagement suggests either: (a) niche technical scope understandable only to maintainers, (b) reduced community attention, or (c) trust in author's judgment requiring no review discussion |

**Underlying need detected:** Reliability in real-time LLM tool-use pipelines. The PR's focus on "synthesizing" missing deltas implies production users may have experienced silent failures or incomplete tool calls when Codex streams omit intermediate argument chunks. This points to **API non-determinism** as a systemic challenge for the project.

---

## 5. Bugs & Stability

| Severity | Item | Status | Notes |
|----------|------|--------|-------|
| **Medium** (potential) | Missing argument deltas in Codex streaming | Fix in progress via [PR #1088](https://github.com/moltis-org/moltis/pull/1088) | Could cause incomplete tool execution or diagnostic gaps; fix is preventive and reactive |

No new bug reports filed today. The PR addresses what appears to be a **latent stability issue** discovered through decode diagnostics rather than user-reported crashes.

---

## 6. Feature Requests & Roadmap Signals

**No explicit feature requests today.**

**Inferred roadmap signals from PR #1088:**
- Continued investment in **OpenAI Codex as a first-class provider** (not experimental)
- Streaming protocol robustness as a **core architectural priority**
- Tool-use (function calling) as a **critical path** requiring defensive handling

**Predicted near-term focus:** Expanded provider resilience patterns, possibly extending similar delta-synthesis logic to other streaming endpoints (Anthropic, Google, etc.).

---

## 7. User Feedback Summary

**No direct user feedback captured today** (zero issues, zero PR comments, zero reactions).

**Indirect signals:**
- The existence of PR #1088's decode diagnostics for "missing-argument errors" implies **prior production friction** with tool-call reliability
- Absence of user complaints may indicate: (a) issue was caught internally, (b) user base is small/technical, or (c) workaround exists

**Satisfaction/dissatisfaction:** Neutral-to-positive stability maintenance; no evidence of unmet demand or churn risk from today's data.

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [PR #1088](https://github.com/moltis-org/moltis/pull/1088) | 1 day | Low (fresh) | Review and potential merge; no comments suggest either maintainer backlog or self-sufficiency |

**No long-unanswered items identified**—the repository shows zero open issues and only one open PR. However, this **near-empty backlog** itself warrants monitoring: it may indicate:
- Healthy triage velocity
- Reduced community contribution volume
- Project maturity with fewer outstanding tasks

**Recommendation:** Track whether PR #1088 receives review within 48-72 hours as a proxy for maintainer responsiveness.

---

*Digest generated from github.com/moltis-org/moltis data as of 2026-06-01.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-06-01

## 1. Today's Overview

CoPaw (QwenPaw) shows **elevated community activity** with 17 issues updated in the past 24 hours, including 14 open/active items and 3 closed issues. The project is experiencing a **significant bug influx concentrated on Windows platform stability**, with 5 new Windows-specific issues filed on 2026-05-31 alone. No new releases were published. Only 2 PRs saw activity (1 merged/closed, 1 open under review), suggesting **maintainer bandwidth may be constrained relative to incoming issue volume**. The community is actively engaged with feature requests around chat mode configurability and thinking effort controls, indicating maturing user expectations for production deployment.

---

## 2. Releases

**None** — No new releases published.

---

## 3. Project Progress

### Merged/Closed PRs

| PR | Status | Summary |
|:---|:---|:---|
| [#4810](https://github.com/agentscope-ai/QwenPaw/pull/4810) | **CLOSED** | Improved chat slash skill suggestions: added current-agent skills to slash commands, compact display (skill names only), 5-item scrollable popup limit, debug logging for skill loading |

This PR addresses UI/UX polish for the console chat interface but represents **minimal forward progress** on the substantial platform stability issues reported.

### Open PR Awaiting Review

| PR | Status | Summary |
|:---|:---|:---|
| [#4689](https://github.com/agentscope-ai/QwenPaw/pull/4689) | **OPEN** (since 2026-05-26) | Routes non-standard `generate_kwargs` into `extra_body` for OpenAI SDK compatibility; fixes silent rejection of provider-specific parameters like DashScope's `enable_search` |

---

## 4. Community Hot Topics

### Most Active Discussions (by comment count)

| Issue/PR | Comments | Topic | Link |
|:---|:---|:---|:---|
| [#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) | **8** | [CLOSED] Cron jobs sharing session with user messages causing interruption | [agentscope-ai/QwenPaw#4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) |
| [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) | **8** | Windows shell command console flash (persistent, 23+ days old) | [agentscope-ai/QwenPaw#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) |

### Underlying Needs Analysis

- **Session isolation architecture**: #4653's resolution reveals core concurrency design gaps—users need guaranteed task completion for automated workflows
- **Windows as second-class platform**: #4123's longevity (23 days, duplicate filed as #4828/#4832) indicates Windows-specific subprocess handling is a **systematic blind spot** in development/testing
- **Chat mode control**: [#4843](https://github.com/agentscope-ai/QwenPaw/issues/4843) (1 comment, new) requests Interrupt/Queue/Insert modes—signals users hitting production concurrency scenarios requiring explicit behavioral control

---

## 5. Bugs & Stability

### Critical Severity

| Issue | Description | Windows? | Fix PR? |
|:---|:---|:---|:---|
| [#4834](https://github.com/agentscope-ai/QwenPaw/issues/4834) | **MCP server process accumulation across restarts** — firecrawl-mcp spawned 9 processes, console loading degraded | Yes | ❌ No |
| [#4842](https://github.com/agentscope-ai/QwenPaw/issues/4842) | **MCP server instances explode with 300+ agents** — resource exhaustion, system instability | Yes | ❌ No |
| [#4835](https://github.com/agentscope-ai/QwenPaw/issues/4835) | **One invalid job in jobs.json crashes entire workspace** — validation error blocks all cron services | No | ❌ No |

### High Severity

| Issue | Description | Windows? | Fix PR? |
|:---|:---|:---|:---|
| [#4844](https://github.com/agentscope-ai/QwenPaw/issues/4844) | **Browser process/temp directory locks persist after session ends** — prevents backups, cascading failures | **Yes** | ❌ No |
| [#4839](https://github.com/agentscope-ai/QwenPaw/issues/4839) | **Pip upgrade leaves `~`-prefixed ghost skill directories** — stale SKILL.md files pollute skill pool | **Yes** | ❌ No |
| [#4837](https://github.com/agentscope-ai/QwenPaw/issues/4837) | **v1.1.9 frequent system fallback "无法处理您的问题"** — false degradation masking real capabilities | No | ❌ No |
| [#4833](https://github.com/agentscope-ai/QwenPaw/issues/4833) | **Memory compaction failure in `pre_reasoning` hook** | No | ❌ No |

### Medium Severity (Known, Partially Addressed)

| Issue | Description | Status |
|:---|:---|:---|
| [#4832](https://github.com/agentscope-ai/QwenPaw/issues/4832) / [#4828](https://github.com/agentscope-ai/QwenPaw/issues/4828) | Shell command `CREATE_NO_WINDOW` flag missing — cmd flash | Duplicate of #4123; **no fix merged** despite clear root cause identified |
| [#4838](https://github.com/agentscope-ai/QwenPaw/issues/4838) | Cannot suppress final text response after tool calls | Feature-adjacent bug |

**Windows Stability Crisis**: 5 of 8 critical/high bugs are Windows-specific. The `CREATE_NO_WINDOW` issue has **three open issues** (#4123, #4828, #4832) with identical root cause identified but no fix merged—indicates **process failure in issue triage/duplicate management**.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Production Readiness Signal | Likelihood in Next Release |
|:---|:---|:---|:---|
| [#4843](https://github.com/agentscope-ai/QwenPaw/issues/4843) | **Configurable chat modes**: Interrupt / Queue / Insert | High — directly addresses #4653-class concurrency pain | **High** — architectural complement to closed bug |
| [#4840](https://github.com/agentscope-ai/QwenPaw/issues/4840) | **Thinking effort level selector in chat UI** | Medium — UX convenience, competitor parity (OpenClaw) | Medium |
| [#4836](https://github.com/agentscope-ai/QwenPaw/issues/4836) | **On-demand tool definition loading** — reduce 55-65% initial token overhead | **Critical** — cost/performance at scale | **High** — clear ROI, implementation path described |
| [#4838](https://github.com/agentscope-ai/QwenPaw/issues/4838) | Suppress final text response after tool calls | Medium — "silent agent" use cases | Medium |
| [#4841](https://github.com/agentscope-ai/QwenPaw/issues/4841) | Community skill proposal: "Before You Build" | Low — ecosystem growth | Low (community-driven) |

**Predicted v1.2.0 themes**: Session concurrency architecture (#4843, #4836), Windows subprocess hygiene, MCP resource governance.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Windows experience degraded** | 5 new issues in 24h: console flash, process locks, pip upgrade ghosts, browser residue, MCP explosion | 🔴 Critical |
| **Resource management at scale** | #4842 (300 agents = 300 MCP servers), #4834 (process accumulation), #4836 (token bloat) | 🔴 Critical |
| **Silent failures / false degradation** | #4837 (fake "cannot process" messages), #4835 (single config error kills workspace) | 🟡 High |
| **Configuration fragility** | #4835 (jobs.json validation), #4839 (upgrade residue) | 🟡 High |

### Use Cases Emerging
- **Scheduled automation**: Cron-based workflows (baby tips, data pipelines) requiring session isolation
- **Enterprise multi-agent deployments**: 300+ agent configurations needing resource-efficient MCP sharing
- **Silent/headless operation**: Tool execution without chat verbosity, background task reliability

### Satisfaction Signals
- Active skill proposals (#4841) indicate healthy ecosystem interest
- Detailed reproduction steps and logs in recent issues show engaged, technical user base

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Risk | Action Needed |
|:---|:---|:---|:---|
| [#4123](https://github.com/agentscope-ai/QwenPaw/issues/4123) | **23 days** | Duplicate proliferation (#4828, #4832), user frustration | **Consolidate duplicates, apply `CREATE_NO_WINDOW` fix** |
| [#4689](https://github.com/agentscope-ai/QwenPaw/pull/4689) | **6 days open** | Provider compatibility fix languishing | Review/merge for DashScope/OpenAI SDK interop |
| [#4834](https://github.com/agentscope-ai/QwenPaw/issues/4834) | New | Process leak = resource exhaustion | MCP lifecycle audit needed |
| [#4842](https://github.com/agentscope-ai/QwenPaw/issues/4842) | New | Architectural — MCP server sharing model | Design review: singleton vs. pooled MCP servers |

### Recommended Priorities

1. **Immediate**: Create Windows-specific test pipeline; consolidate `CREATE_NO_WINDOW` issues
2. **Short-term**: MCP server lifecycle management (#4834, #4842) — shared/pooled architecture
3. **Medium-term**: On-demand tool loading (#4836) — significant cost/performance win

---

*Digest generated from GitHub activity 2026-05-31 to 2026-06-01. Project health: **Active community, constrained maintainer bandwidth, Windows stability emerging as critical blocker to production adoption.***

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-06-01

## 1. Today's Overview

ZeptoClaw experienced minimal activity in the past 24 hours, with only one closed security-related issue and no pull request or release activity. The project appears to be in a maintenance phase rather than active feature development. The single closed issue relates to an automated security scan, suggesting ongoing security hygiene but no community-driven contributions. Overall activity level is **low**, with zero open issues or PRs indicating either a stable codebase or reduced community engagement. Project health appears stable but dormant from a development velocity perspective.

---

## 2. Releases

**No new releases.** No version tags or release artifacts were published in the past 24 hours.

---

## 3. Project Progress

**No merged or closed PRs today.** Zero pull requests were updated, merged, or closed in the reporting period. No feature advancement or bug fixes were delivered through the PR workflow.

---

## 4. Community Hot Topics

The only activity was a security scan request with limited community engagement:

| Item | Engagement | Analysis |
|------|-----------|----------|
| [#609 chore(security): repository-wide Codex Security scan for webhook identity routing](https://github.com/qhkm/zeptoclaw/issues/609) | 1 comment, 0 reactions | Automated security workflow; no community discussion |

**Underlying need:** The webhook identity routing flow represents a critical security surface for an AI agent project, as webhooks typically handle external triggers and authentication boundaries. The scan request suggests maintainers are proactively auditing this attack vector, though the lack of follow-up discussion or identified vulnerabilities implies either confidence in current implementation or insufficient security review depth.

---

## 5. Bugs & Stability

**No bugs, crashes, or regressions reported today.** The closed security scan (#609) did not surface any disclosed vulnerabilities in the issue itself. No severity-ranked items to report.

---

## 6. Feature Requests & Roadmap Signals

**No feature requests or roadmap signals detected.** Absence of open issues and PRs provides no directional indicators for upcoming development. The security scan focus on webhook routing *may* suggest upcoming hardening in:
- Webhook authentication/authorization mechanisms
- Request validation pipelines
- Multi-tenant identity isolation (if applicable)

However, this is speculative given the automated nature of the scan request.

---

## 7. User Feedback Summary

**No user feedback captured in the reporting period.** No issues with user-reported pain points, use cases, or satisfaction indicators were created or updated. The single closed issue originated from an automated security workflow (`daneschneider-oai`) rather than end-user interaction.

---

## 8. Backlog Watch

**No actionable backlog items identified.** With zero open issues and zero open PRs, there are no long-unanswered items requiring maintainer triage. This state warrants monitoring—sustained zero backlog in an active open-source project is atypical and may indicate:
- Effective issue resolution (positive)
- Reduced contributor/community activity (concern)
- Issue tracking migrated to another platform (possible)

**Recommendation:** Review historical issue/PR velocity trends to distinguish between project maturity and community attrition.

---

*Digest generated from GitHub data for [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw) | 2026-06-01*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-01

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 46 issues and 50 PRs updated in the last 24 hours, though the 82% open PR rate (41/50) suggests a growing review backlog. No new releases were cut, indicating the project is in an active development phase rather than stabilization. The community is heavily focused on **provider reliability**, **multi-tenant architecture**, and **hardware/IoT integration** — with a notable cluster of PRs from a recent hackathon (ESP32 smart-room demo) being extracted into reviewable pieces. Security and access control dominate the issue tracker, reflecting production deployment concerns.

---

## 2. Releases

**No new releases.** The project remains without a tagged release; the last significant version reference is v0.8.0-beta-1 (mentioned in #6876) and v0.7.6 (skills track, #6253). A major integration PR (#6848) explicitly targets becoming the **v0.8.0-beta-2** basis, suggesting release activity may follow once that lands.

---

## 3. Project Progress

### Merged/Closed Today (9 PRs total, notable items):

| PR | Description | Impact |
|:---|:---|:---|
| [#7044](https://github.com/zeroclaw-labs/zeroclaw/pull/7044) | Extract `channels-all` aggregate Cargo feature | Build system cleanup, reduces feature flag sprawl |
| *(implied from issue closures)* | — | — |

### Significant Open PRs Advancing:

| PR | Author | Focus |
|:---|:---|:---|
| [#7048](https://github.com/zeroclaw-labs/zeroclaw/pull/7048) | Rhoahndur | ESP32 simulator binary + web frontend (hackathon extraction) |
| [#7047](https://github.com/zeroclaw-labs/zeroclaw/pull/7047) | Rhoahndur | Fix `hardware_capabilities` tool to expose `pin_devices` |
| [#7046](https://github.com/zeroclaw-labs/zeroclaw/pull/7046) | Rhoahndur | `dev-sim` feature for `/tmp/zc-sim-*` serial allowlist |
| [#7045](https://github.com/zeroclaw-labs/zeroclaw/pull/7045) | Rhoahndur | Smart-room named-device tools (`set_device`/`read_device`) |
| [#7049](https://github.com/zeroclaw-labs/zeroclaw/pull/7049) | Yyukan | Fix Kimi-k2 models rejecting hardcoded `temperature: 0.7` |
| [#7050](https://github.com/zeroclaw-labs/zeroclaw/pull/7050) | mov-xound-glitch | TTS OGG/Opus transcoding for Telegram/WhatsApp voice notes |
| [#7021](https://github.com/zeroclaw-labs/zeroclaw/pull/7021) | mov-xound-glitch | Email XOAUTH2 + observer mode + read-only IMAP tools |
| [#7041](https://github.com/zeroclaw-labs/zeroclaw/pull/7041) | theonlyhennygod | Multi-tenant Linq channel with per-alias routing |
| [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) | singlerider | **Mega-integration**: zerocode TUI, RPC socket, DenyWithEdit approval, beta-2 baseline |

**Theme**: Hardware/IoT capabilities are rapidly expanding (4 related PRs from Rhoahndur), while channel robustness (WhatsApp, Telegram, Email) and provider fixes proceed in parallel.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count):

| # | Title | Comments | Status | Underlying Need |
|:---|:---|:---:|:---|:---|
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) | Unify providers architecture and reqwest client management | 9 | OPEN | **Technical debt reduction** — fragmented provider code blocks maintainability and correct configuration |
| [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) | Document `gateway.web_dist_dir` & `ZEROCLAW_WEB_DIST_DIR` | 8 | **CLOSED** | Onboarding friction; docs gap for dashboard deployment |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | Per-sender RBAC for multi-tenant agent deployments | 8 | OPEN | **Enterprise/ISV requirement** — single instance serving multiple user classes with isolation |
| [#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) | `update` downloads wrong architecture on aarch64 | 7 | **CLOSED** | ARM64 support gap (Raspberry Pi deployments) |
| [#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647) | Cron job output not routed to configured channels | 4 | **CLOSED** | Automation reliability — scheduled jobs silently fail to notify |

**Analysis**: The community is split between **operators running ZeroClaw in production** (RBAC, cron routing, architecture fixes) and **developers extending it** (provider unification, hardware integration). The high engagement on #5937 and #5982 signals these are blockers for broader adoption.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR? | Risk Area |
|:---|:---|:---|:---|:---|
| **S0** (data loss/security) | [#5847](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) web_dist_dir docs | **CLOSED** | N/A (docs) | Gateway deployment |
| **S1** (workflow blocked) | [#4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) aarch64 wrong binary | **CLOSED** | Implied in closure | CLI/updates |
| **S1** | [#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647) cron → channel routing | **CLOSED** | Unknown | Runtime/cron |
| **S1** | [#5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) Ollama provider fails with tools | OPEN | None linked | Provider/Ollama |
| **S1** | [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) Gemini CLI OAuth broken | OPEN | None linked | Provider/Gemini |
| **S1** | [#7022](https://github.com/zeroclaw-labs/zeroclaw/issues/7022) Kimi-k2.6 invalid temperature | OPEN | [#7049](https://github.com/zeroclaw-labs/zeroclaw/pull/7049) | Provider/Compatible |
| **S2** (degraded) | [#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) `allowed_private_hosts` bypass via DNS | OPEN | None linked | Security/web_fetch |
| **S2** | [#5866](https://github.com/zeroclaw-labs/zeroclaw/issues/5866) Telegram bot ignores replies with `mention_only=true` | OPEN | None linked | Channel/Telegram |

**Concerns**: 
- **Provider ecosystem fragility**: Ollama, Gemini, Kimi, and compatible providers all have active S1 bugs
- **Security gap**: #5122 (private host bypass) remains unpatched with no linked PR
- **Cron subsystem**: Root cause (#6954) identifies architectural flaw where scheduler bypasses orchestrator pipeline

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Likelihood in v0.8.x | Signal Strength |
|:---|:---|:---|:---|
| **Computer-use / desktop control** | [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | Medium | RFC accepted, high risk tag, no PR |
| **Unified output routing** (per-peer modality) | [#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969), [#7020](https://github.com/zeroclaw-labs/zeroclaw/pull/7020) | **High** | PR open, builds on #6968 |
| **Cron → orchestrator pipeline refactor** | [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | High | RFC with 5 linked bugs, clear maintainer attention |
| **Memory strategy trait / pluggable backends** | [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | Medium | Blocked, needs maintainer review |
| **Skill-scoped tool activation** | [#6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915) | Medium | Blocked, security-sensitive |
| **MCP resources + prompts** | [#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) | Medium | In progress, 4 👍 |
| **Zerocode TUI + RPC socket** | [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) | **Very High** | Explicit beta-2 target, DO NOT MERGE but seeking feedback |
| **Hardware/IoT (ESP32, named devices)** | [#7045](https://github.com/zeroclaw-labs/zeroclaw/pull/7045)-[#7048](https://github.com/zeroclaw-labs/zeroclaw/pull/7048) | High | Active PR cluster, hackathon-proven |

**Prediction**: v0.8.0-beta-2 will likely ship with the zerocode TUI (#6848), hardware tools (#7045-7048), email XOAUTH2 (#7021), and output routing (#7020). Computer-use (#6909) and memory strategy (#6850) are longer-term.

---

## 7. User Feedback Summary

### Pain Points:

| Theme | Evidence | Severity |
|:---|:---|:---|
| **Provider configuration hell** | #5937 (reqwest unification), #5843 (model-wise reasoning), #7022 (Kimi temperature) | High — blocks adoption |
| **Security model gaps** | #5982 (no RBAC), #5122 (private host bypass), #6876/#6914 (tool allowlists unenforced) | High — production blocker |
| **Cron/automation unreliable** | #6647, #6954 (architectural bypass) | High — breaks headless deployments |
| **Documentation lag** | #5847, #6760 (Docker docs), #5847 (gateway config) | Medium — onboarding friction |
| **ARM64 treated as second-class** | #4842 (update broken), implied by lack of CI coverage | Medium — edge/IoT deployments |

### Positive Signals:
- **Hardware enthusiasm**: Hackathon-produced ESP32 demo (#6148) being carefully extracted into 4+ PRs shows healthy contribution culture
- **Channel richness**: Active work on Telegram voice (#7050), WhatsApp LID resolution (#7008), Email XOAUTH2 (#7021) — users are deploying across diverse communication channels
- **Skills system maturation**: #6253 tracking v0.7.6 skills UX with explicit community input request

---

## 8. Backlog Watch

### Critical Items Needing Maintainer Action:

| Issue/PR | Age | Problem | Action Needed |
|:---|:---|:---|:---|
| [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) | ~2 months | 153 commits lost in bulk revert c3ff635 | **Audit and recovery plan** — high risk for regression |
| [#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879) | ~2 months | Gemini OAuth completely broken | Provider maintainer assignment |
| [#5122](https://github.com/zeroclaw-labs/zeroclaw/issues/5122) | ~2 months | Security bypass in `allowed_private_hosts` | Security review + patch |
| [#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914) | ~1 week | `allowed_tools` unenforced in agent loop | **Blocked**, needs maintainer review |
| [#6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915) | ~1 week | Skill-scoped tool activation | **Blocked**, security review |
| [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) | ~1 week | Subprocess memory limits (OOM risk) | **Blocked**, security review |
| [#6917](https://github.com/zeroclaw-labs/zeroclaw/issues/6917) | ~1 week | Composio action-scope filter | **Blocked**, needs maintainer review |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | ~1.5 weeks | MemoryStrategy trait | **Blocked**, architecture review |

**Pattern**: alex-nax has filed 4 security/hardening issues (#6914-6917) in rapid succession, all marked `needs-maintainer-review` and `blocked`. This suggests either a security audit was conducted or a production incident drove these. The maintainers appear bottlenecked on security review bandwidth.

### Long-Standing Open Items:
- [#3100](https://github.com/zeroclaw-labs/zeroclaw/issues/3100) Mattermost oncall mode (2.5 months, in progress)
- [#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467) MCP resources/prompts (2+ months, in progress, 4 👍)
- [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) Provider architecture unification (6 weeks, 9 comments, no PR)

---

**Project Health Assessment**: 🟡 **Active but strained**. High contribution volume (100 items/day) with healthy community engagement, but review bottleneck is acute — 82% PR open rate, 7 blocked security issues, and a 2-month-old commit recovery audit (#6074) unresolved. The v0.8.0-beta-2 integration (#6848) is the critical path; its merge will likely unblock multiple dependent PRs and potentially the next release.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*